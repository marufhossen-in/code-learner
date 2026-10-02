import type { Lesson } from '../../../lib/types';

export const theChainPanoramaLesson: Lesson = {
  slug: 'the-chain-panorama',
  tech: 'linked-lists',
  title: {
    en: 'Linked List Panorama — Comparative Taxonomy, Memory Latencies, and Architecture Selection',
    bn: 'লিঙ্কড লিস্ট প্যানোরামা: তুলনামূলক শ্রেণিবিন্যাস, মেমোরি ল্যাটেন্সি ও স্থাপত্য নির্বাচন'
  },
  summary: {
    en: 'No single linear data structure dominates all computational scenarios. Contiguous arrays excel at cache locality and random indexing but incur heavy shift penalties during insertions. Linked variants trade pointer overhead for flexible re-linking, from minimal singly linked lists to bidirectional sentinels, express-lane skip lists, and kernel-level intrusive chains. Mastering this panoramic taxonomy empowers engineers to match data structure mechanics to production workloads.',
    bn: 'কোনো একক ডেটা স্ট্রাকচার সব ধরনের কাজের জন্য সর্বশ্রেষ্ঠ নয়। অবিচ্ছিন্ন অ্যারে সিপিইউ ক্যাশ এবং র্যান্ডম অ্যাক্সেসে দুর্দান্ত হলেও মাঝখানে উপাদান ঢোকাতে বা মুছতে ব্যয়বহুল শিফটিং করে। লিঙ্কড কাঠামোগুলো পয়েন্টার মেমোরির বিনিময়ে সহজ সংযোগের সুবিধা দেয়, যার মাঝে একমুখী তালিকা, সেন্টিনেলযুক্ত ডাবলি লিস্ট, এক্সপ্রেস-লেন স্কিপ লিস্ট এবং কার্নেল-স্তরের ইন্ট্রুসিভ চেইন অন্তর্ভুক্ত। এই সামগ্রিক শ্রেণিবিন্যাস আয়ত্তের মাধ্যমে কাজের ধরন বুঝে সঠিক কাঠামো বেছে নেওয়া সম্ভব হয়।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'architectural-tradeoffs',
      text: {
        en: 'The Foundational Architectural Trade-off',
        bn: 'মৌলিক স্থাপত্যের তুলনামূলক বিবেচনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you choose a data structure for production software, the decision balances two competing physical forces: memory layout and mutation mechanics. Contiguous arrays store items packed consecutively across 64 byte cache lines. This layout delivers 1 nanosecond L1 cache lookups but forces O(n) element copying whenever elements are inserted or deleted in the middle.',
        bn: 'যখন আপনি উৎপাদনমুখী সফটওয়্যারের জন্য ডেটা কাঠামো নির্বাচন করেন, তখন সিদ্ধান্তটি দুটি বিপরীত শারীরিক নিয়মের ওপর নির্ভর করে: মেমোরি বিন্যাস এবং পরিমার্জন পদ্ধতি। অবিচ্ছিন্ন অ্যারে উপাদানগুলোকে ৬৪ বাইটের ক্যাশ লাইনে পাশাপাশি জমাটবদ্ধভাবে রাখে। এই বিন্যাস ১ ন্যানোসেকেন্ডে এল১ ক্যাশ রিড নিশ্চিত করলেও মাঝখানে উপাদান যোগ বা মুছে ফেলার সময় O(n) মেমোরি কপি করতে বাধ্য করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Linked lists embrace heap fragmentation to unlock instantaneous local mutations. By delegating connectivity to explicit pointers, inserting or removing an element requires only updating pointer fields in O(1) time. However, following scattered pointers incurs random DRAM access latencies near 200 nanoseconds, stalling modern CPU pipelining.',
        bn: 'লিঙ্কড লিস্ট তাত্ক্ষণিক পরিবর্তনের সুবিধার্থে হিপ মেমোরির খণ্ডায়নকে মেনে নেয়। সংযোগের দায়িত্ব স্পষ্ট পয়েন্টারকে দেওয়ায় যেকোনো নোড যোগ বা বাদ দিতে O(1) সময়ে কেবল পয়েন্টার ফিল্ড হালনাগাদ করলেই চলে। তবে ছড়িয়ে থাকা পয়েন্টার ধরে মেমোরি খুঁজতে গিয়ে প্রায় ২০০ ন্যানোসেকেন্ড র্যান্ডম অ্যাক্সেস ল্যাটেন্সি তৈরি হয়, যা আধুনিক সিপিইউ পাইপলাইনকে থামিয়ে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cache-locality-gap',
          def: {
            en: 'The dramatic performance disparity between contiguous sequential array streaming and heap-scattered pointer dereferencing.',
            bn: 'অবিচ্ছিন্ন অ্যারের সুশৃঙ্খল স্ট্রিমিং এবং হিপে ছড়িয়ে থাকা পয়েন্টার অনুসন্ধানের মধ্যকার বিশাল পারফরম্যান্স ব্যবধান।'
          }
        },
        {
          term: 'intrusive-pattern',
          def: {
            en: 'Embedding link pointers directly inside the domain data struct rather than allocating wrapper nodes on the heap.',
            bn: 'হিপে বাড়তি র‍্যাপার নোড তৈরির বদলে মূল অবজেক্ট কাঠামোর ভেতরেই সরাসরি লিঙ্ক পয়েন্টার গেঁথে রাখার কৌশল।'
          }
        },
        {
          term: 'sentinel-architecture',
          def: {
            en: 'Utilizing permanent dummy head and tail nodes to eliminate null checks and edge-case branching during mutations.',
            bn: 'স্থায়ী ডামি হেড ও টেইল নোড ব্যবহার করে কোডের নাল চেকিং এবং প্রান্তিক কন্ডিশনাল ব্রাঞ্চিং দূর করার স্থাপত্য।'
          }
        },
        {
          term: 'probabilistic-indexing',
          def: {
            en: 'Organizing nodes into multi-level express tiers via coin tosses to achieve logarithmic search without tree rotation overhead.',
            bn: 'কয়েন টসের মাধ্যমে নোডগুলোকে বহুস্তরীয় এক্সপ্রেস লেনে সাজিয়ে ট্রি রোটেশন ছাড়াই লগারিদমিক সার্চ নিশ্চিত করা।'
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
      id: 'panoramic-matrix',
      text: {
        en: 'Comprehensive Structural Comparison Matrix',
        bn: 'কাঠামোগুলোর পূর্ণাঙ্গ তুলনামূলক ছক'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Structure', bn: 'ডাটা কাঠামো' },
        { en: 'Memory Overhead (64-bit)', bn: 'মেমোরি ওভারহেড (৬৪-বিট)' },
        { en: 'Random Lookup', bn: 'র্যান্ডম অ্যাক্সেস' },
        { en: 'Middle Mutation', bn: 'মাঝের পরিমার্জন' },
        { en: 'Ideal Production Use Case', bn: 'আদর্শ ব্যবহার ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Contiguous Array', bn: 'অবিচ্ছিন্ন অ্যারে' },
          { en: '0 bytes per element', bn: 'উপাদানপ্রতি ০ বাইট' },
          { en: 'O(1) instant indexing', bn: 'O(1) তাত্ক্ষণিক ইনডেক্স' },
          { en: 'O(n) element shifting', bn: 'O(n) উপাদান সরানো' },
          { en: 'Read-heavy analytics, sequential streaming', bn: 'রিড-প্রধান অ্যানালিটিক্স, সিকোয়েনশিয়াল স্ট্রিমিং' }
        ],
        [
          { en: 'Singly Linked List', bn: 'একমুখী লিঙ্কড লিস্ট' },
          { en: '8 bytes (1 pointer)', bn: '৮ বাইট (১ টি পয়েন্টার)' },
          { en: 'O(n) sequential walk', bn: 'O(n) ক্রমিক ট্রাভার্সাল' },
          { en: 'O(1) at head, O(n) middle', bn: 'শুরুতে O(1), মাঝে O(n)' },
          { en: 'Simple LIFO stacks, hash table buckets', bn: 'সহজ স্ট্যাক, হ্যাশ টেবিলের সংঘর্ষ বাকেট' }
        ],
        [
          { en: 'Doubly Linked List', bn: 'ডাবলি লিঙ্কড লিস্ট' },
          { en: '16 bytes (2 pointers)', bn: '১৬ বাইট (২ টি পয়েন্টার)' },
          { en: 'O(n) bidirectional walk', bn: 'O(n) দ্বিমুখী ট্রাভার্সাল' },
          { en: 'O(1) given direct reference', bn: 'রেফারেন্স পেলে O(1)' },
          { en: 'LRU caches, undo/redo buffers, browser history', bn: 'এলআরইউ ক্যাশ, আনডু/রিডু বাফার, ব্রাউজার হিস্ট্রি' }
        ],
        [
          { en: 'Skip List', bn: 'স্কিপ লিস্ট' },
          { en: '16 to 32 bytes average', bn: 'গড়ে ১৬ থেকে ৩২ বাইট' },
          { en: 'O(log n) express elevator', bn: 'O(log n) এক্সপ্রেস সার্চ' },
          { en: 'O(log n) local pointer updates', bn: 'O(log n) স্থানীয় আপডেট' },
          { en: 'Redis ZSET, database in-memory LSM memtables', bn: 'রেডিস ZSET, ডেটাবেজ মেমটেবিল ইনডেক্স' }
        ],
        [
          { en: 'Intrusive Kernel List', bn: 'ইন্ট্রুসিভ কার্নেল লিস্ট' },
          { en: '0 wrapper bytes (in-struct)', bn: '০ র‍্যাপার বাইট (কাঠামোর ভেতর)' },
          { en: 'O(n) list_head walk', bn: 'O(n) কার্নেল ট্রাভার্সাল' },
          { en: 'O(1) via container_of', bn: 'container_of দিয়ে O(1)' },
          { en: 'OS schedulers, device drivers, real-time queues', bn: 'ওএস শিডিউলার, ডিভাইস ড্রাইভার, রিয়েল-টাইম কিউ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'decision-engine',
      text: {
        en: 'Automated Architecture Selection Engine',
        bn: 'স্বয়ংক্রিয় স্থাপত্য নির্বাচন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following decision engine takes formal workload criteria and recommends the mathematically optimal data structure. Evaluating 4 distinct industrial workload profiles demonstrates how access patterns determine whether contiguous arrays, doubly linked lists, skip lists, or intrusive chains yield the lowest execution cost.',
        bn: 'নিচের সিদ্ধান্ত ইঞ্জিনটি কাজের আনুষ্ঠানিক বৈশিষ্ট্য বিশ্লেষণ করে গাণিতিকভাবে সেরা ডেটা কাঠামোটি সুপারিশ করে। ৪ টি স্বতন্ত্র শিল্পোদ্যোগী কাজের প্রোফাইল মূল্যায়নের মাধ্যমে বোঝা যায় কীভাবে অ্যাক্সেস প্যাটার্ন নির্ধারণ করে যে অবিচ্ছিন্ন অ্যারে, ডাবলি লিঙ্কড লিস্ট, স্কিপ লিস্ট বা ইন্ট্রুসিভ চেইনের মধ্যে কোনটি সর্বনিম্ন খরচে সমাধান দেয়।'
      }
    },
    {
      type: 'code',
      code: `function recommendStructure(workload) {
  const { randomAccess, middleSplices, memoryStrict, orderedSearch, multiList } = workload;

  if (multiList) {
    return {
      name: 'Intrusive List (list_head)',
      reason: 'Zero wrapper allocation, multi-queue membership'
    };
  }
  if (orderedSearch) {
    return {
      name: 'Skip List',
      reason: 'O(log n) search without tree rotation locks'
    };
  }
  if (randomAccess && !middleSplices) {
    return {
      name: 'Contiguous Array',
      reason: 'O(1) indexing and sequential 64-byte cache line density'
    };
  }
  if (middleSplices && !randomAccess && !memoryStrict) {
    return {
      name: 'Doubly Linked List',
      reason: 'O(1) deletion given node reference and sentinel safety'
    };
  }
  return {
    name: 'Singly Linked List',
    reason: 'Minimal 8-byte pointer overhead for LIFO/FIFO queues'
  };
}

// Workload 1: Heavy random indexing, zero middle mutations (e.g. Matrix computation)
const w1 = { randomAccess: true, middleSplices: false, memoryStrict: false, orderedSearch: false, multiList: false };
console.log('Workload 1:', recommendStructure(w1).name);
// Output: Workload 1: Contiguous Array

// Workload 2: High middle evictions, no random indexing (e.g. LRU cache buffer)
const w2 = { randomAccess: false, middleSplices: true, memoryStrict: false, orderedSearch: false, multiList: false };
console.log('Workload 2:', recommendStructure(w2).name);
// Output: Workload 2: Doubly Linked List

// Workload 3: Sorted range queries with concurrent mutations (e.g. In-memory DB Index)
const w3 = { randomAccess: false, middleSplices: false, memoryStrict: false, orderedSearch: true, multiList: false };
console.log('Workload 3:', recommendStructure(w3).name);
// Output: Workload 3: Skip List

// Workload 4: OS Kernel scheduler task tracking across multiple queues
const w4 = { randomAccess: false, middleSplices: true, memoryStrict: true, orderedSearch: false, multiList: true };
console.log('Workload 4:', recommendStructure(w4).name);
// Output: Workload 4: Intrusive List (list_head)`
    },
    {
      type: 'heading',
      id: 'engineering-verdict',
      text: {
        en: 'The Senior Engineer Rule of Thumb',
        bn: 'অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ারের পথনির্দেশিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Default to contiguous arrays for initial system designs. Modern CPU hardware is aggressively optimized for sequential memory access, and simple arrays consistently outperform linked structures until collection sizes grow large or random mid-list mutations dominate execution time. When frequent constant-time deletions at arbitrary positions are unavoidable, introduce doubly linked lists with sentinels.',
        bn: 'প্রাথমিক সিস্টেম ডিজাইনে সর্বদা অবিচ্ছিন্ন অ্যারেকে প্রথম পছন্দ হিসেবে রাখুন। আধুনিক সিপিইউ হার্ডওয়্যার ক্রমিক মেমোরি পড়ার জন্য অত্যন্ত চমৎকারভাবে অপ্টিমাইজ করা, ফলে ডাটা অনেক বড় না হলে বা মাঝখানে ঘনঘন ডিলিট না লাগলে অ্যারে সর্বদা লিঙ্কড লিস্টের চেয়ে দ্রুত চলে। যখন কোনো নির্দিষ্ট নোডের রেফারেন্স থেকে O(1) তাৎক্ষণিক অপসারণ অপরিহার্য হয়ে ওঠে, তখনই সেন্টিনেলযুক্ত ডাবলি লিঙ্কড লিস্ট গ্রহণ করুন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'No universal victor: Contiguous arrays dominate sequential streaming and indexing; linked structures dominate flexible local splices.',
          bn: 'কোনো একক বিজয়ী নেই: অবিচ্ছিন্ন অ্যারে সিকোয়েনশিয়াল স্ট্রিমিং ও ইনডেক্সিংয়ে সেরা; লিঙ্কড কাঠামো স্থানীয় সংযোগে সেরা।'
        },
        {
          en: 'Sentinel elegance: Dummy head and tail boundaries eliminate null branching and turn every insertion and deletion into the general case.',
          bn: 'সেন্টিনেলের পরিচ্ছন্নতা: ডামি হেড ও টেইল সীমানা নাল চেকিং দূর করে প্রতিটি অপারেশনকে সাধারণ কেসে পরিণত করে।'
        },
        {
          en: 'Probabilistic hierarchy: Skip lists replace complex tree rotations with layered express lanes, delivering expected logarithmic search.',
          bn: 'সম্ভাব্যতাভিত্তিক স্তর: স্কিপ লিস্ট জটিল ট্রি রোটেশনের বদলে বহুস্তরীয় এক্সপ্রেস লেন দিয়ে O(log n) সার্চ নিশ্চিত করে।'
        },
        {
          en: 'Intrusive systems power: Embedding links within domain structs enables zero-allocation multi-queue tracking across operating system kernels.',
          bn: 'ইন্ট্রুসিভ সিস্টেম শক্তি: অবজেক্টের ভেতর সংযোগ গেঁথে দেওয়ার মাধ্যমে কার্নেলে কোনো বাড়তি বরাদ্দ ছাড়াই বহু-কিউ ট্র্যাকিং সম্ভব হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cp-ex1',
      kind: 'mcq',
      topic: 'cache-line-density',
      question: {
        en: 'Why do contiguous arrays consistently outperform linked lists in simple traversal benchmarks despite identical O(n) algorithmic complexity?',
        bn: 'একই O(n) অ্যালগরিদমিক জটিলতা থাকা সত্ত্বেও কেন সাধারণ ট্রাভার্সালে অবিচ্ছিন্ন অ্যারে লিঙ্কড লিস্টের চেয়ে অনেক দ্রুত চলে?'
      },
      options: [
        {
          en: 'Arrays exploit spatial cache locality and hardware prefetching across 64 byte cache lines, avoiding DRAM pointer stalls',
          bn: 'অ্যারে ৬৪ বাইট ক্যাশ লাইনে স্থানিক সান্নিধ্য ও হার্ডওয়্যার প্রিফেচিং সুবিধা কাজে লাগায় এবং র্যান্ডম মেমোরি বিরতি এড়ায়'
        },
        {
          en: 'Operating system kernels prevent linked lists from executing on high-frequency CPU cores',
          bn: 'অপারেটিং সিস্টেম কার্নেল লিঙ্কড লিস্টকে উচ্চগতির সিপিইউ কোরে চলতে বাধা দেয়'
        },
        {
          en: 'Arrays automatically compress numeric integers using floating point arithmetic',
          bn: 'অ্যারে স্বয়ংক্রিয়ভাবে ফ্লোটিং পয়েন্ট পাটিগণিত দিয়ে পূর্ণসংখ্যাগুলোকে সংকুচিত করে'
        },
        {
          en: 'Linked list nodes require network packet serialization for every comparison',
          bn: 'প্রতিটি তুলনার জন্য লিঙ্কড লিস্ট নোডকে নেটওয়ার্ক প্যাকেট সিরিয়ালাইজ করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Recall the 64 byte CPU cache line mechanics discussed in Lesson 3.',
        bn: 'লেসন ৩ এ আলোচিত ৬৪ বাইট সিপিইউ ক্যাশ লাইনের মেকানিক্স স্মরণ করুন।'
      },
      explanation: {
        en: 'Sequential array elements sit contiguously within 64 byte cache lines fetched in 1 nanosecond, whereas scattered linked nodes trigger 200 nanosecond DRAM pointer chasing stalls.',
        bn: 'অ্যারের ক্রমিক উপাদানগুলো ৬৪ বাইটের ক্যাশ লাইনে পাশাপাশি থাকে যা ১ ন্যানোসেকেন্ডে আসে, যেখানে ছড়িয়ে থাকা নোড ২০০ ন্যানোসেকেন্ডের মেমোরি অচলাবস্থা তৈরি করে।'
      }
    },
    {
      id: 'cp-ex2',
      kind: 'mcq',
      topic: 'lru-structure-selection',
      question: {
        en: 'Which data structure is optimal for an LRU cache eviction buffer requiring O(1) removals given a known node pointer?',
        bn: 'জানা নোড রেফারেন্স থেকে O(1) তাৎক্ষণিক অপসারণের প্রয়োজন এমন এলআরইউ ক্যাশ বাফারের জন্য কোন কাঠামোটি সবচেয়ে উপযোগী?'
      },
      options: [
        {
          en: 'Doubly Linked List with Sentinel Nodes',
          bn: 'সেন্টিনেল নোডযুক্ত ডাবলি লিঙ্কড লিস্ট'
        },
        {
          en: 'Static Contiguous Fixed Array',
          bn: 'স্ট্যাটিক অবিচ্ছিন্ন ফিক্সড অ্যারে'
        },
        {
          en: 'Singly Linked List without Tail Pointer',
          bn: 'টেইল পয়েন্টারবিহীন একমুখী লিঙ্কড লিস্ট'
        },
        {
          en: 'Unordered Binary Search Tree',
          bn: 'অবিন্যস্ত বাইনারি সার্চ ট্রি'
        }
      ],
      answer: 0,
      hint: {
        en: 'You need bidirectional node.prev and node.next references to rewire neighbors in constant time.',
        bn: 'ধ্রুবক সময়ে প্রতিবেশীদের সংযোগ বদলাতে দ্বিমুখী node.prev এবং node.next রেফারেন্স প্রয়োজন।'
      },
      explanation: {
        en: 'Doubly linked lists provide O(1) node unlinking via node.prev and node.next, while sentinels eliminate null-checking edge cases.',
        bn: 'ডাবলি লিঙ্কড লিস্ট node.prev এবং node.next এর মাধ্যমে O(1) অপসারণ দেয়, আর সেন্টিনেল প্রান্তিক নাল পরীক্ষার ঝামেলা দূর করে।'
      }
    },
    {
      id: 'cp-ex3',
      kind: 'mcq',
      topic: 'skip-list-selection',
      question: {
        en: 'When should an engineer deploy a Skip List instead of a Red-Black balanced binary search tree?',
        bn: 'কখন একজন প্রকৌশলীর উচিত রেড-ব্ল্যাক সুষম ট্রির বদলে স্কিপ লিস্ট ব্যবহার করা?'
      },
      options: [
        {
          en: 'When simple range scans and high-concurrency lock-free writes are needed without complex tree rotations',
          bn: 'যখন জটিল রোটেশন ছাড়া সহজ রেঞ্জ স্ক্যান এবং উচ্চ কনকারেন্ট লক-মুক্ত রাইট সুবিধা প্রয়োজন হয়'
        },
        {
          en: 'When total system memory is restricted to less than 16 bytes',
          bn: 'যখন সিস্টেমের মোট মেমোরি ১৬ বাইটের চেয়ে কম সীমাবদ্ধ থাকে'
        },
        {
          en: 'When the programming language forbids the use of dynamic pointers',
          bn: 'যখন ব্যবহৃত প্রোগ্রামিং ভাষায় ডায়নামিক পয়েন্টার ব্যবহার নিষিদ্ধ থাকে'
        },
        {
          en: 'When all operations must execute strictly in O(1) worst-case time',
          bn: 'যখন সমস্ত অপারেশনকে কঠোরভাবে O(1) ওর্স্ট-কেস সময়ে সম্পন্ন হতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the multi-node locking challenges during balanced tree rotations under concurrent threads.',
        bn: 'কনকারেন্ট থ্রেডে সুষম ট্রির রোটেশনকালে বহু-নোড লকিংয়ের কঠিন সমস্যার কথা ভাবুন।'
      },
      explanation: {
        en: 'Skip lists support straightforward range queries and adapt smoothly to lock-free atomic compare-and-swap (CAS) operations without tree rotation locking.',
        bn: 'স্কিপ লিস্ট সহজে রেঞ্জ কুয়েরি করতে দেয় এবং জটিল ট্রি রোটেশনের লক ছাড়াই কম্পেয়ার-অ্যান্ড-সোয়াপ (CAS) অপারেশনের মাধ্যমে সমান্তরাল রাইট সমর্থন করে।'
      }
    }
  ],
  quiz: {
    id: 'chain-panorama-quiz',
    title: {
      en: 'Linked List Panorama and Architecture Selection Quiz',
      bn: 'লিঙ্কড লিস্ট প্যানোরামা ও স্থাপত্য নির্বাচন কুইজ'
    },
    questions: [
      {
        id: 'cp-q1',
        kind: 'mcq',
        topic: 'intrusive-kernel-advantage',
        question: {
          en: 'What architectural advantage makes intrusive lists (Linux list_head) indispensable for operating system kernels?',
          bn: 'কোন স্থাপত্য সুবিধার কারণে ইন্ট্রুসিভ লিস্ট (লিনাক্স list_head) অপারেটিং সিস্টেম কার্নেলে অপরিহার্য?'
        },
        options: [
          {
            en: 'Links are embedded directly inside domain objects, eliminating secondary wrapper allocations and supporting multi-queue membership',
            bn: 'সংযোগ সরাসরি ডোমেন অবজেক্টের ভেতর থাকে, ফলে বাড়তি মেমোরি বরাদ্দ দূর হয় এবং বহু কিউতে অংশগ্রহণ সম্ভব হয়'
          },
          {
            en: 'Intrusive lists convert high-level C programs directly into JavaScript bytecode',
            bn: 'ইন্ট্রুসিভ লিস্ট সি প্রোগ্রামকে সরাসরি জাভাস্ক্রিপ্ট বাইটকোডে রূপান্তর করে'
          },
          {
            en: 'Operating system schedulers run 10 times faster when pointer arithmetic is eliminated',
            bn: 'পয়েন্টার পাটিগণিত বাদ দিলে অপারেটিং সিস্টেম শিডিউলার ১০ গুণ দ্রুত চলে'
          },
          {
            en: 'Intrusive lists require zero bytes of heap and zero bytes of stack memory',
            bn: 'ইন্ট্রুসিভ লিস্টের জন্য হিপ ও স্ট্যাক কোনো মেমোরিরই প্রয়োজন হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about dynamic memory allocation inside core kernel interrupt service routines.',
          bn: 'কার্নেল ইন্টারাপ্ট সার্ভিস রুটিনের ভেতর ডায়নামিক মেমোরি বরাদ্দের বিপদের কথা ভাবুন।'
        },
        explanation: {
          en: 'Intrusive lists prevent secondary wrapper allocations on the heap and allow a single struct to simultaneously exist on multiple lists via offsetof pointer math.',
          bn: 'ইন্ট্রুসিভ লিস্ট হিপে বাড়তি র‍্যাপার বরাদ্দ রোধ করে এবং offsetof পয়েন্টার গণনার মাধ্যমে একটি কাঠামোকে একসাথে একাধিক লিস্টে থাকতে দেয়।'
        }
      },
      {
        id: 'cp-q2',
        kind: 'mcq',
        topic: 'pointer-tax-calculation',
        question: {
          en: 'For a collection of 1,000,000 integers (4 bytes each) on a 64-bit platform, what is the minimum pointer overhead of a doubly linked list compared to a contiguous array?',
          bn: 'একটি ৬৪-বিট প্ল্যাটফর্মে ১,০০০,০০০ টি পূর্ণসংখ্যার (প্রতিটি ৪ বাইট) সংগ্রহের জন্য অবিচ্ছিন্ন অ্যারের তুলনায় ডাবলি লিঙ্কড লিস্টের ন্যূনতম পয়েন্টার মেমোরি খরচ কত?'
        },
        options: [
          {
            en: '16 megabytes of pointer overhead (16 bytes per node for next and prev references)',
            bn: '১৬ মেগাবাইট পয়েন্টার মেমোরি খরচ (next ও prev রেফারেন্সের জন্য নোডপ্রতি ১৬ বাইট)'
          },
          {
            en: '0 bytes because 64-bit systems compress pointer addresses automatically',
            bn: '০ বাইট কারণ ৬৪-বিট সিস্টেম পয়েন্টার ঠিকানা স্বয়ংক্রিয়ভাবে সংকুচিত করে'
          },
          {
            en: '4 megabytes of pointer overhead',
            bn: '৪ মেগাবাইট পয়েন্টার মেমোরি খরচ'
          },
          {
            en: '512 megabytes of pointer overhead',
            bn: '৫১২ মেগাবাইট পয়েন্টার মেমোরি খরচ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiply 1,000,000 nodes by 16 bytes of pointers (8 bytes for next + 8 bytes for prev).',
          bn: '১,০০০,০০০ নোডকে ১৬ বাইট পয়েন্টার (next এর জন্য ৮ বাইট + prev এর জন্য ৮ বাইট) দিয়ে গুণ করুন।'
        },
        explanation: {
          en: 'Each node in a doubly linked list holds two 8-byte pointers (16 bytes total). For 1,000,000 nodes, 16 bytes * 1,000,000 = 16,000,000 bytes (~16 MB) consumed purely by pointers.',
          bn: 'ডাবলি লিঙ্কড লিস্টের প্রতিটি নোড দুটি ৮-বাইটের পয়েন্টার (মোট ১৬ বাইট) ধারণ করে। ১,০০০,০০০ নোডের জন্য ১৬ বাইট * ১,০০০,০০০ = ১৬,০০০,০০০ বাইট (~১৬ এমবি) কেবল পয়েন্টারেই ব্যয় হয়।'
        }
      },
      {
        id: 'cp-q3',
        kind: 'mcq',
        topic: 'circular-list-use-case',
        question: {
          en: 'Which operational requirement makes a circular linked list (tail.next points to head) the preferred choice?',
          bn: 'কোন ব্যবহারিক প্রয়োজনে সার্কুলার বা বৃত্তাকার লিঙ্কড লিস্ট (tail.next নির্দেশ করে head কে) সবচেয়ে উপযোগী পছন্দ?'
        },
        options: [
          {
            en: 'Continuous round-robin task scheduling and looping audio/video ring buffers where cycles repeat seamlessly without null checks',
            bn: 'রাউন্ড-রবিন টাস্ক শিডিউলিং এবং অডিও/ভিডিও রিং বাফার যেখানে নাল চেক ছাড়াই নিরবচ্ছিন্ন পুনরাবৃত্তি দরকার হয়'
          },
          {
            en: 'Converting relational SQL databases into static JSON web tokens',
            bn: 'রিলেশনাল এসকিউএল ডেটাবেজকে স্ট্যাটিক জেএসওএন ওয়েব টোকেনে রূপান্তর করা'
          },
          {
            en: 'Achieving O(1) search across unindexed text documents',
            bn: 'ইনডেক্সহীন টেক্সট ডকুমেন্টে O(1) সার্চ সুবিধা পাওয়া'
          },
          {
            en: 'Preventing CPU transistors from consuming electrical energy',
            bn: 'সিপিইউ ট্রানজিস্টরের বৈদ্যুতিক শক্তি খরচ বন্ধ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'In round-robin scheduling, when the last process finishes its time slice, who gets the CPU next?',
          bn: 'রাউন্ড-রবিন শিডিউলিংয়ে শেষ প্রসেসের সময় শেষ হলে পরবর্তীতে কোন প্রসেস সিপিইউ পায় তা ভাবুন।'
        },
        explanation: {
          en: 'In circular lists, advancing from the last node leads directly back to the first node without branching or null resetting, perfectly modeling round-robin scheduling.',
          bn: 'বৃত্তাকার তালিকায় শেষ নোড থেকে সামনে এগোলে কোনো নাল পরীক্ষা বা রিসেট ছাড়াই স্বয়ংক্রিয়ভাবে শুরুতে ফিরে আসে, যা রাউন্ড-রবিন শিডিউলিংয়ে সেরা।'
        }
      },
      {
        id: 'cp-q4',
        kind: 'mcq',
        topic: 'decision-rule-of-thumb',
        question: {
          en: 'What is the recommended rule of thumb for systems engineers deciding between arrays and linked lists for a new project?',
          bn: 'নতুন কোনো প্রকল্পে অ্যারে এবং লিঙ্কড লিস্টের মধ্যে নির্বাচনের ক্ষেত্রে অভিজ্ঞ সিস্টেম ইঞ্জিনিয়ারদের মূল নীতি কোনটি?'
        },
        options: [
          {
            en: 'Default to contiguous arrays for hardware cache locality; introduce linked lists only when measured workloads are dominated by arbitrary-position O(1) splices',
            bn: 'হার্ডওয়্যার ক্যাশ সুবিধার জন্য শুরুতে অ্যারেকে বেছে নিন; লিঙ্কড লিস্ট কেবল তখনই আনুন যখন নির্দিষ্ট স্থানে O(1) পরিবর্তনের প্রয়োজন দেখা দেয়'
          },
          {
            en: 'Always use linked lists because dynamic allocation eliminates all hardware limitations',
            bn: 'সর্বদা লিঙ্কড লিস্ট ব্যবহার করুন কারণ ডায়নামিক বরাদ্দ সব হার্ডওয়্যার সীমাবদ্ধতা দূর করে'
          },
          {
            en: 'Avoid contiguous arrays because memory controllers cannot read arrays larger than 4 bytes',
            bn: 'অ্যারে এড়িয়ে চলুন কারণ মেমোরি কন্ট্রোলার ৪ বাইটের চেয়ে বড় অ্যারে পড়তে পারে না'
          },
          {
            en: 'Use Skip Lists for all variables including loop counters and boolean flags',
            bn: 'লুপ কাউন্টার এবং বুলিয়ান পতাকাসহ সমস্ত ভ্যারিয়েবলের জন্য স্কিপ লিস্ট ব্যবহার করুন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hardware cache lines are designed to make sequential memory access dramatically faster.',
          bn: 'হার্ডওয়্যার ক্যাশ লাইন মূলত ক্রমিক মেমোরি পড়াকে বহুগুণ দ্রুত করার জন্য তৈরি।'
        },
        explanation: {
          en: 'Modern hardware cache hierarchies strongly favor contiguous memory. Real-world systems profile first, choosing linked lists only when mutation requirements justify pointer overhead.',
          bn: 'আধুনিক হার্ডওয়্যার ক্যাশ বিন্যাস অবিচ্ছিন্ন মেমোরিকে সবচেয়ে বেশি প্রাধান্য দেয়। তাই বাস্তব সিস্টেমে পরিমাপের পর কেবল বিশেষ পরিবর্তনের প্রয়োজনেই লিঙ্কড লিস্ট বেছে নেওয়া হয়।'
        }
      }
    ]
  }
};
