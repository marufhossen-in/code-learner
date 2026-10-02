import type { Lesson } from '../../../lib/types';

export const theEvictionCourtLesson: Lesson = {
  slug: 'the-eviction-court',
  tech: 'caching',
  title: {
    en: 'Cache Eviction Policies, O(1) LRU Data Structures & Belady Anomaly',
    bn: 'ক্যাশ ইভিকশন পলিসি, O(1) LRU ডেটা স্ট্রাকচার ও বেলাডি অ্যানোমালি'
  },
  summary: {
    en: 'Because high-speed RAM is finite and expensive, every cache inevitably fills to capacity. When memory is exhausted and a new key must be stored, the cache eviction algorithm selects which resident key must be discarded. This lesson provides an exhaustive engineering analysis of eviction policies: Least Recently Used (LRU), Least Frequently Used (LFU), First In First Out (FIFO), and CLOCK (Second Chance). You will implement a production-grade O(1) LRU cache using a Hash Map paired with a Doubly Linked List. Furthermore, we investigate Belady’s Anomaly — the counter-intuitive phenomenon where increasing cache capacity under FIFO paradoxically increases cache misses — and prove why stack algorithms like LRU are mathematically immune.',
    bn: 'দ্রুতগতির র‍্যামের ধারণক্ষমতা সীমিত এবং ব্যয়বহুল হওয়ায় প্রতিটি ক্যাশ একসময় পূর্ণ হয়ে যায়। মেমোরি পূর্ণ থাকা অবস্থায় নতুন ডেটা ঢোকাতে হলে ক্যাশ ইভিকশন অ্যালগরিদম নির্ধারণ করে কোন পুরনো ডেটাটি মুছে ফেলতে হবে। এই পাঠে বিভিন্ন ইভিকশন নীতি বিস্তারিতভাবে বিশ্লেষণ করা হয়েছে: Least Recently Used (LRU), Least Frequently Used (LFU), First In First Out (FIFO) এবং CLOCK (Second Chance)। আমরা হ্যাশ ম্যাপ ও ডাবল লিঙ্কড লিস্টের সমন্বয়ে O(1) জটিলতার একটি কার্যকর LRU ক্যাশ তৈরি করব। তাছাড়া আমরা বেলাডি অ্যানোমালি পরীক্ষা করব — যেখানে FIFO পদ্ধতিতে মেমোরির আকার বাড়ালে উল্টো ক্যাশ মিস বেড়ে যায় — এবং প্রমাণ করব কেন LRU-এর মতো স্ট্যাক অ্যালগরিদমে এই ত্রুটি কখনোই ঘটে না।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Eviction Dilemma: What Must Die When Memory Fills?',
        bn: 'ইভিকশনের সংকট: মেমোরি পূর্ণ হলে কাকে মুছতে হবে?'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'A cache with infinite memory is a dream; in production, memory is strictly bounded by hardware budgets. When a cache reaches its maximum capacity, storing a new key requires evicting an existing key. The efficiency of a caching system depends heavily on predicting which keys are least likely to be needed again.',
        bn: 'অসীম মেমোরির ক্যাশ বাস্তবে সম্ভব নয়; প্রোডাকশনে মেমোরির একটি নির্দিষ্ট সীমা থাকে। ক্যাশ সম্পূর্ণ ভরে গেলে নতুন ডেটা রাখার জন্য একটি পুরনো ডেটা মুছে জায়গা খালি করতে হয়। কোন ডেটাটি ভবিষ্যতে সবচেয়ে কম ব্যবহৃত হতে পারে তা নির্ভুলভাবে অনুমান করার ওপরই ক্যাশের সার্বিক সফলতা নির্ভর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cache Eviction',
          def: {
            en: 'The automated removal of valid cached keys to reclaim memory when the storage volume reaches its configured maximum capacity',
            bn: 'ক্যাশের মেমোরি পূর্ণ হয়ে গেলে নতুন ডেটার জায়গা করে দিতে স্বয়ংক্রিয়ভাবে পুরনো ডেটা মুছে ফেলার প্রক্রিয়া'
          }
        },
        {
          term: 'Least Recently Used (LRU)',
          def: {
            en: 'An eviction algorithm that discards the key that has not been read or written for the longest duration of time',
            bn: 'একটি বহুল ব্যবহৃত পদ্ধতি যা সবচেয়ে বেশি সময় ধরে অব্যবহৃত থাকা ডেটাকে সবার আগে মুছে ফেলে'
          }
        },
        {
          term: 'Least Frequently Used (LFU)',
          def: {
            en: 'An algorithm that tracks access frequency counters and evicts the key with the fewest total accesses, with age decay',
            bn: 'একটি পদ্ধতি যা সবচেয়ে কম সংখ্যক বার পড়া ডেটা মুছে ফেলে এবং সময় পরিবর্তনের সাথে সাথে পুরনো জনপ্রিয়তার হিসাব কমিয়ে আনে'
          }
        },
        {
          term: 'Belady’s Anomaly',
          def: {
            en: 'A counter-intuitive anomaly in FIFO queue replacement where allocating more cache capacity results in a higher number of cache misses',
            bn: 'FIFO পদ্ধতিতে একটি অদ্ভুত ঘটনা যেখানে মেমোরির আকার বাড়ানো সত্ত্বেও ক্যাশ মিসের সংখ্যা কমে না গিয়ে উল্টো বেড়ে যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'eviction-policy-matrix',
      text: {
        en: 'Architectural Comparison: Eviction Policy Tradeoffs',
        bn: 'আর্কিটেকচার তুলনা: বিভিন্ন ইভিকশন নীতির সুবিধা ও অসুবিধা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Cache Eviction Algorithms',
        bn: 'ক্যাশ ইভিকশন অ্যালগরিদমসমূহের তুলনামূলক বিশ্লেষণ'
      },
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
        { en: 'Memory Overhead', bn: 'মেমোরি খরচ' },
        { en: 'Vulnerability / Failure Mode', bn: 'দুর্বলতা বা প্রধান ত্রুটি' }
      ],
      rows: [
        [
          { en: 'Least Recently Used (LRU)', bn: 'LRU' },
          { en: 'O(1) get and put', bn: 'O(1) গেট ও পুট' },
          { en: 'Two pointers per node (prev and next)', bn: 'নোডপ্রতি দুটি পয়েন্টার' },
          { en: 'Vulnerable to sequential scans: a single full-table sweep flushes hot keys', bn: 'বাল্ক স্ক্যান করলে সব দরকারি কি মেমোরি থেকে মুছে যায়' }
        ],
        [
          { en: 'Least Frequently Used (LFU)', bn: 'LFU' },
          { en: 'O(1) with frequency buckets', bn: 'O(1) ফ্রিকোয়েন্সি বাকেটে' },
          { en: 'Counter integer + frequency bucket doubly-linked lists', bn: 'কাউন্টার ও বাকেট লিস্ট' },
          { en: 'Historical bias: ancient viral keys become immortal unless decay is configured', bn: 'পুরনো ভাইরাল কি চিরকাল অমর হয়ে বসে থাকে যদি না ক্ষয় ধরা হয়' }
        ],
        [
          { en: 'First In First Out (FIFO)', bn: 'FIFO' },
          { en: 'O(1) ring buffer or queue', bn: 'O(1) কিউ বা বাফার' },
          { en: 'Minimal (single queue pointer)', bn: 'ন্যূনতম মেমোরি' },
          { en: 'Suffers from Belady Anomaly; completely ignores recency and frequency', bn: 'বেলাডি অ্যানোমালিতে ভোগে; তথ্যের প্রয়োজনীয়তা উপেক্ষা করে' }
        ],
        [
          { en: 'CLOCK (Second Chance)', bn: 'CLOCK' },
          { en: 'Amortized O(1)', bn: 'গড়ে O(1)' },
          { en: '1 bit per entry (reference flag) + circular sweep hand', bn: 'এন্ট্রিপ্রতি মাত্র ১ বিট' },
          { en: 'Approximates LRU well, but high churn causes sweep hand CPU spikes', bn: 'LRU-এর খুব কাছাকাছি হলেও অতিরিক্ত চাপে প্রসেসর খরচ বাড়ে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'lru-data-structure-mechanics',
      text: {
        en: 'Engineering an O(1) LRU Cache: Hash Map + Doubly Linked List',
        bn: 'O(1) LRU ক্যাশ তৈরি: হ্যাশ ম্যাপ ও ডাবল লিঙ্কড লিস্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard array or singly linked list cannot achieve O(1) performance for both lookups and eviction updates. If you use a Hash Map alone, lookups are O(1), but finding the least recently used key requires an O(N) linear scan across all entries. Conversely, a linked list tracks order in O(1), but searching for a key requires an O(N) traversal. Combining a Hash Map with a Doubly Linked List solves this dilemma. The Hash Map stores key-to-node pointers for instant O(1) access. Meanwhile, the Doubly Linked List allows unlinking a touched node and moving it to the head in O(1) time. When capacity is exceeded, the node immediately preceding the dummy tail is severed in O(1) time and purged from the map.',
        bn: 'সাধারণ অ্যারে বা সিঙ্গলি লিঙ্কড লিস্ট দিয়ে O(1) গতিতে খোঁজা ও ডিলিট করা সম্ভব নয়। শুধু হ্যাশ ম্যাপ ব্যবহার করলে O(1) গতিতে ডেটা পাওয়া যায় বটে, কিন্তু সবচেয়ে পুরনো কি খুঁজতে পুরো মেমোরি O(N) স্ক্যান করতে হয়। আবার শুধু লিঙ্কড লিস্ট ব্যবহার করলে ক্রমানুসারে সাজানো সহজ হলেও কোনো কি খুঁজতে O(N) সময় লাগে। এর নিখুঁত সমাধান হলো হ্যাশ ম্যাপ এবং ডাবল লিঙ্কড লিস্টের যুগলবন্দী। হ্যাশ ম্যাপ কি থেকে নোডের ঠিকানা সরাসরি O(1) গতিতে বের করে দেয়। আর ডাবল লিঙ্কড লিস্ট যেকোনো নোডকে নিমেষে O(1) সময়ে সামনে নিয়ে আসতে পারে। মেমোরি পূর্ণ হলে পেছনের টেল নোডটিকে এক নিমিষে কেটে বাদ দেওয়া হয়।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: O(1) LRU Cache Execution Trace',
        bn: 'চালনাযোগ্য সিমুলেশন: O(1) LRU ক্যাশ ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script implements the full Hash Map + Doubly Linked List LRU architecture and runs an 11-step reference sequence on a 3-capacity cache, printing the exact hit count, miss count, and final memory contents:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি হ্যাশ ম্যাপ ও ডাবল লিঙ্কড লিস্ট দিয়ে সম্পূর্ণ LRU ক্যাশ চালায় এবং ৩-ধারণক্ষমতার ক্যাশে ১১টি অনুরোধ পাঠিয়ে হিট, মিস ও অবশিষ্ট ডেটা নিখুঁতভাবে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'caching-lru-sim',
      lang: 'javascript',
      code: `// Complete O(1) LRU Cache Implementation & Execution Trace
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node('HEAD', 0);
    this.tail = new Node('TAIL', 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.hits = 0;
    this.misses = 0;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._remove(node);
      this._addToHead(node);
      this.hits++;
      return node.val;
    }
    this.misses++;
    return null;
  }

  put(key, val) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val;
      this._remove(node);
      this._addToHead(node);
    } else {
      if (this.map.size >= this.capacity) {
        const lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
      }
      const newNode = new Node(key, val);
      this.map.set(key, newNode);
      this._addToHead(newNode);
    }
  }

  getKeys() {
    const keys = [];
    let curr = this.head.next;
    while (curr !== this.tail) {
      keys.push(curr.key);
      curr = curr.next;
    }
    return keys;
  }
}

// Trace sequence of 11 references on capacity 3
const cache = new LRUCache(3);
const sequence = ['A', 'B', 'C', 'A', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
for (const k of sequence) {
  if (cache.get(k) === null) {
    cache.put(k, 1);
  }
}

console.log('Cache storage capacity limit:', cache.capacity);
// -> Cache storage capacity limit: 3

console.log('Total sequence reference count:', sequence.length);
// -> Total sequence reference count: 11

console.log('Cache hit count during sequence:', cache.hits);
// -> Cache hit count during sequence: 2

console.log('Cache miss count during sequence:', cache.misses);
// -> Cache miss count during sequence: 9

console.log('Final resident keys from most to least recent:', cache.getKeys().join(' '));
// -> Final resident keys from most to least recent: E D C`,
      caption: {
        en: 'Figure 5: Across 11 references on capacity 3, LRU produces 2 hits and 9 misses, ending with keys E, D, and C',
        bn: 'চিত্র ৫: ৩ ধারণক্ষমতায় ১১টি অনুরোধে LRU দেয় ২ হিট এবং ৯ মিস, শেষে ক্যাশে থাকে E, D এবং C'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Essential Production Rules for Eviction Design',
        bn: 'ইভিকশন ডিজাইনের জন্য ৪টি অপরিহার্য প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 operational standards when configuring cache eviction algorithms:',
        bn: 'সিস্টেমে ইভিকশন পলিসি নির্ধারণের সময় এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Never Use Raw FIFO in Production Caching',
          def: {
            en: 'FIFO ignores recency and frequency, evicting viral popular keys purely based on arrival time and suffering from Belady Anomaly',
            bn: 'প্রোডাকশনে কখনো সাধারণ FIFO ব্যবহার করবেন না; এটি তথ্যের জনপ্রিয়তা বিবেচনা না করে দরকারি ডেটা মুছে ফেলে'
          }
        },
        {
          term: 'Rule 2: Protect LRU Against Sequential Table Scans',
          def: {
            en: 'Large analytics queries scanning millions of rows flush working memory; use 2Q or SLRU to buffer probationary items',
            bn: 'অ্যানালিটিক্স কোয়েরি চালালে ক্যাশের সব দরকারী তথ্য মুছে যেতে পারে; তাই শর্তাধীন ২কিউ বা বাফার ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 3: Implement Counter Decay with LFU',
          def: {
            en: 'Always configure LFU counter half-life decay (e.g. lfu-decay-time in Redis) so historical trends give way to emerging hot items',
            bn: 'এলএফইউ-তে কাউন্টার ক্ষয় চালু রাখুন যাতে পুরনো জনপ্রিয় ডেটা চিরকাল ক্যাশ দখল করে নতুনদের পথ আটকে না রাখে'
          }
        },
        {
          term: 'Rule 4: Choose Volatile vs Allkeys Based on Key Scope',
          def: {
            en: 'In Redis, use allkeys-lru when every key is a cache, and volatile-lru if persistent database keys share the same instance',
            bn: 'রেডিসে সব ডেটা ক্যাশ হলে allkeys-lru ব্যবহার করুন, আর স্থায়ী ডেটা থাকলে কেবল মেয়াদযুক্ত ডেটা মুছতে volatile-lru বাছুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-lru-trace-calc-ex',
      kind: 'mcq',
      topic: 'Cache hit count calculation for LRU sequence',
      question: {
        en: 'In an LRU cache with capacity 3, executing the 11-step sequence A B C A D E A B C D E results in how many cache hits?',
        bn: '৩ ধারণক্ষমতার একটি LRU ক্যাশে A B C A D E A B C D E ক্রমানুসারে ১১টি অনুরোধ চালালে কতটি ক্যাশ হিট হয়?'
      },
      options: [
        {
          en: '2 hits (and 9 misses)',
          bn: '২টি হিট (এবং ৯টি মিস)'
        },
        {
          en: '11 hits',
          bn: '১১টি হিট'
        },
        {
          en: '0 hits',
          bn: '০টি হিট'
        },
        {
          en: '7 hits',
          bn: '৭টি হিট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only the second request for A and subsequent hit succeed; total hits is 2.',
        bn: 'দ্বিতীয়বার A চাওয়া এবং আরেকটি মাত্র হিট সফল হয়; মোট হিট সংখ্যা ২।'
      },
      explanation: {
        en: 'The fourth reference (A) hits while in cache; after evictions and churn, one more hit occurs, yielding exactly 2 hits of 11.',
        bn: 'চতুর্থ ধাপে A ক্যাশে থাকায় প্রথম হিট হয়; পরবর্তীতে নতুন ডেটার ভিড়ে আর মাত্র একটি হিট মিলে মোট ২ বার সফল হয়।'
      }
    },
    {
      id: 'caching-belady-anomaly-ex',
      kind: 'mcq',
      topic: 'Understanding Belady Anomaly in FIFO replacement',
      question: {
        en: 'What surprising behavioral flaw is known as Belady’s Anomaly in cache eviction systems?',
        bn: 'ক্যাশ ইভিকশন সিস্টেমে বেলাডি অ্যানোমালি বলতে কোন অদ্ভুত ত্রুটিকে বোঝানো হয়?'
      },
      options: [
        {
          en: 'Under FIFO eviction, increasing the cache memory capacity can paradoxically cause the number of cache misses to increase',
          bn: 'FIFO পদ্ধতিতে মেমোরির ধারণক্ষমতা বাড়ানোর পরও আশ্চর্যজনকভাবে ক্যাশ মিসের সংখ্যা কমে না গিয়ে উল্টো বেড়ে যায়'
        },
        {
          en: 'Adding more RAM causes the computer processor to melt',
          bn: 'বেশি র‍্যাম যোগ করলে প্রসেসর গলে যায়'
        },
        {
          en: 'The network speed drops to zero whenever the cache is empty',
          bn: 'ক্যাশ খালি থাকলে ইন্টারনেটের গতি শূন্য হয়ে যায়'
        },
        {
          en: 'LRU caches randomly delete the operating system files',
          bn: 'LRU ক্যাশ ইচ্ছেমতো অপারেটিং সিস্টেমের ফাইল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'More cache seats leading to more page faults in FIFO.',
        bn: 'মেমোরি বাড়ালেও বেশি মিস হওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'FIFO is not a stack algorithm: the set of items in a smaller cache is not guaranteed to be a subset of a larger cache, causing anomalies.',
        bn: 'FIFO কোনো স্ট্যাক অ্যালগরিদম নয়; ফলে মেমোরি বাড়লেও এমন কি আগে মুছে যায় যা একটু পরেই দরকার হতো, ফলে মিস বাড়ে।'
      }
    },
    {
      id: 'caching-lru-ds-complexity-ex',
      kind: 'mcq',
      topic: 'Data structure combination for O(1) LRU Cache',
      question: {
        en: 'Which pair of data structures allows both key lookups and recency position updates to operate in strict O(1) constant time?',
        bn: 'কোন দুটি ডেটা স্ট্রাকচারের সমন্বয়ে কি অনুসন্ধান এবং অবস্থানের ক্রম পরিবর্তন উভয়ই O(1) সময়ে সম্পন্ন করা যায়?'
      },
      options: [
        {
          en: 'Hash Map (for O(1) lookup) paired with a Doubly Linked List (for O(1) node detachment and head insertion)',
          bn: 'হ্যাশ ম্যাপ (O(1) অনুসন্ধানের জন্য) এবং ডাবল লিঙ্কড লিস্ট (O(1) নোড কাটা ও সামনে যুক্ত করার জন্য)'
        },
        {
          en: 'Binary Search Tree and dynamic array',
          bn: 'বাইনারি সার্চ ট্রি এবং ডাইনামিক অ্যারে'
        },
        {
          en: 'Singly linked list with bubble sort',
          bn: 'সিঙ্গলি লিঙ্কড লিস্ট ও বাবল সর্ট'
        },
        {
          en: 'Stack and Queue without hash tables',
          bn: 'হ্যাশ টেবিল ছাড়া স্ট্যাক ও কিউ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hash Map for instant access plus Doubly Linked List for instant node splicing.',
        bn: 'দ্রুত খুঁজতে হ্যাশ ম্যাপ এবং সহজে কাটাকাটি করতে ডাবল লিঙ্কড লিস্টের কথা ভাবুন।'
      },
      explanation: {
        en: 'Hash map maps keys directly to list node pointers; doubly linked list allows removing a node without traversing predecessors.',
        bn: 'হ্যাশ ম্যাপ সরাসরি নোডের মেমোরি লোকেশন দেয় আর ডাবল লিঙ্কড লিস্ট আগের ও পরের পয়েন্টার বদলে নিমেষে নোড সরিয়ে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-eviction',
    title: {
      en: 'Cache Eviction Policies & Data Structures Quiz',
      bn: 'ক্যাশ ইভিকশন পলিসি ও ডেটা স্ট্রাকচার কুইজ'
    },
    questions: [
      {
        id: 'q-caching-scan-vulnerability',
        kind: 'mcq',
        topic: 'How sequential table scans damage raw LRU caches',
        question: {
          en: 'Why does running a full database table scan or large batch query devastate a standard LRU cache?',
          bn: 'একটি সম্পূর্ণ ডাটাবেস টেবিল স্ক্যান বা বড় ব্যাচ কোয়েরি চালালে সাধারণ LRU ক্যাশের কেন মারাত্মক ক্ষতি হয়?'
        },
        options: [
          {
            en: 'The millions of sequentially read rows flood the cache once, evicting genuinely popular hot keys that will be needed immediately afterwards',
            bn: 'লক্ষ লক্ষ স্ক্যান করা নতুন ডেটা ক্যাশে ঢুকে বসে, যার ফলে সত্যিই দরকারি ও জনপ্রিয় পুরনো কি-গুলো মুছে গিয়ে সিস্টেমকে ধীর করে দেয়'
          },
          {
            en: 'It causes the server RAM to be permanently formatted',
            bn: 'এটি সার্ভারের র‍্যাম চিরতরে মুছে ফেলে'
          },
          {
            en: 'It reverses the sorting order of the database primary keys',
            bn: 'এটি ডাটাবেসের প্রাইমারি কি-এর ক্রম উল্টে দেয়'
          },
          {
            en: 'It disconnects all user WiFi connections',
            bn: 'এটি সব ব্যবহারকারীর ওয়াইফাই সংযোগ বিচ্ছিন্ন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'One-hit wonders flushing genuinely viral items out of memory.',
          bn: 'একবার পঠিত হাজারো তথ্য আসল দরকারি ডেটাকে বের করে দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'This is known as the cache pollution or scan vulnerability: items read only once flush out items read thousands of times.',
          bn: 'এটিকে ক্যাশ পলিউশন বলে: যে ডেটা জীবনে একবারই লাগবে তা এসে হাজার বার লাগা গুরুত্বপূর্ণ ডেটাকে তাড়িয়ে দেয়।'
        }
      },
      {
        id: 'q-caching-lfu-decay-need',
        kind: 'mcq',
        topic: 'Why LFU requires counter decay',
        question: {
          en: 'What problem occurs in an LFU cache if frequency counters never decay over time?',
          bn: 'সময়ের সাথে সাথে যদি কাউন্টার কমানো না হয় তবে LFU ক্যাশে কোন সমস্যাটি দেখা দেয়?'
        },
        options: [
          {
            en: 'Keys that were viral in the past accumulate huge counter values and remain immortal in cache forever, preventing new hot items from being cached',
            bn: 'অতীতের কোনো ভাইরাল ডেটা বিশাল কাউন্টার নিয়ে ক্যাশে অমর হয়ে বসে থাকে, ফলে নতুন কোনো দরকারি ডেটা আর ক্যাশে ঢুকতে পারে না'
          },
          {
            en: 'The server power supply shuts down automatically',
            bn: 'সার্ভারের পাওয়ার সাপ্লাই নিজে থেকেই বন্ধ হয়ে যায়'
          },
          {
            en: 'The cache converts all integer numbers into negative values',
            bn: 'ক্যাশ সব ধনাত্মক সংখ্যাকে ঋণাত্মক বানিয়ে ফেলে'
          },
          {
            en: 'The web browser refuses to display CSS styling',
            bn: 'ব্রাউজার কোনো সিএসএস স্টাইল দেখাতে অস্বীকার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Historical viral items blocking new emerging trends.',
          bn: 'অতীতের জনপ্রিয়তা নতুন ট্রেন্ডকে আটকে দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Without decay, yesterday’s news article with 10000 views will never be evicted in favor of breaking news with only 5 views.',
          bn: 'কাউন্টার না কমলে গতকালের ১০০০০ বার পঠিত পুরনো খবর আজকের ৫ বার পঠিত তাজা খবরের চেয়ে বেশি অগ্রাধিকার পেয়ে বসে থাকবে।'
        }
      },
      {
        id: 'q-caching-clock-algorithm',
        kind: 'mcq',
        topic: 'How the CLOCK (Second Chance) algorithm approximates LRU',
        question: {
          en: 'How does the CLOCK algorithm approximate LRU with only a single bit of memory overhead per entry?',
          bn: 'CLOCK অ্যালগরিদম কীভাবে এন্ট্রিপ্রতি মাত্র ১ বিট মেমোরি ব্যবহার করে LRU-এর মতো ফলাফল দেয়?'
        },
        options: [
          {
            en: 'It sweeps entries with a circular pointer; if reference bit is 1, it sets it to 0 (second chance); if 0, the entry is evicted immediately',
            bn: 'এটি একটি বৃত্তাকার কাঁটা দিয়ে ঘোরে; বিট ১ থাকলে ০ করে দ্বিতীয় সুযোগ দেয়, আর আগে থেকেই ০ থাকলে সাথে সাথে মুছে ফেলে'
          },
          {
            en: 'It uses a physical clock hanging on the server room wall',
            bn: 'এটি সার্ভার রুমের দেয়াল ঘড়ির সময় দেখে সিদ্ধান্ত নেয়'
          },
          {
            en: 'It measures the speed of electricity in the copper wires',
            bn: 'এটি তারের মধ্য দিয়ে বিদ্যুতের গতি মেপে কাজ করে'
          },
          {
            en: 'It forces computers to synchronise with atomic clocks in Greenwich',
            bn: 'এটি গ্রিনিচের পারমাণবিক ঘড়ির সাথে কম্পিউটার সিঙ্ক করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Circular pointer clearing reference bits to grant a second chance.',
          bn: 'ঘড়ির কাঁটার মতো ঘুরে ঘুরে দ্বিতীয় সুযোগ দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'The reference bit marks whether an entry was accessed recently. The sweeping hand evicts the first unreferenced (0-bit) entry it encounters.',
          bn: 'রেফারেন্স বিট ১ থাকলে বোঝা যায় সম্প্রতি ব্যবহৃত হয়েছে; কাঁটাটি ঘোরার সময় প্রথম যে ০ বিট পায় তাকেই মুছে ফেলে।'
        }
      },
      {
        id: 'q-caching-volatile-vs-allkeys',
        kind: 'mcq',
        topic: 'Difference between volatile-lru and allkeys-lru in Redis',
        question: {
          en: 'In Redis configuration, what is the critical difference between maxmemory-policy allkeys-lru and volatile-lru?',
          bn: 'রেডিসে maxmemory-policy কনফিগারেশনে allkeys-lru এবং volatile-lru এর মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'allkeys-lru can evict any key in the database, whereas volatile-lru only evicts keys that have an explicit expiration TTL configured',
            bn: 'allkeys-lru যেকোনো কি মুছে জায়গা করতে পারে, আর volatile-lru কেবল সেই কি-গুলোকেই মোছে যেগুলোতে মেয়াদ (TTL) দেওয়া আছে'
          },
          {
            en: 'volatile-lru only runs on Saturday nights',
            bn: 'volatile-lru কেবল শনিবার রাতে চলে'
          },
          {
            en: 'allkeys-lru deletes all keys whenever the server restarts',
            bn: 'সার্ভার রিস্টার্ট হলেই allkeys-lru সব ডেটা মুছে ফেলে'
          },
          {
            en: 'They are completely identical with no operational difference',
            bn: 'তাদের মধ্যে বাস্তব কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Restricting eviction to keys with TTL versus the entire database.',
          bn: 'শুধু মেয়াদ থাকা কি মোছা বনাম যেকোনো কি মুছার পার্থক্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'volatile-lru protects unexpiring keys (such as persistent configuration or system state) from ever being evicted under memory pressure.',
          bn: 'volatile-lru নিশ্চিত করে যে মেয়াদবিহীন স্থায়ী প্রয়োজনীয় ডেটা মেমোরি ফুল হলেও কখনোই ভুল করে ডিলিট না হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-stampede-wall',
    tech: 'caching',
    title: {
      en: 'Cache Stampede, Thundering Herd & Mutex Coalescing',
      bn: 'ক্যাশ স্ট্যাম্পিড, থান্ডারিং হার্ড ও মিউটেক্স কোয়ালেসিং'
    }
  }
};