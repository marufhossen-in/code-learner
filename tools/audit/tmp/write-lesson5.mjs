import { writeFileSync } from 'fs';

const content = `import type { Lesson } from '../../../lib/types';

export const theDoublyChainedCourtLesson: Lesson = {
  slug: 'the-doubly-chained-court',
  tech: 'linked-lists',
  title: {
    en: 'Doubly Linked Lists — Bidirectional Links, Sentinels, and Constant Deletion',
    bn: 'ডাবলি লিঙ্কড লিস্ট: দ্বিমুখী সংযোগ, সেন্টিনেল নোড এবং O(1) অপসারণ'
  },
  summary: {
    en: 'Singly linked lists require O(n) traversal to delete a node when given only its reference. Doubly linked lists add a prev pointer to every node, enabling O(1) removal and bidirectional navigation at the expense of memory overhead. By introducing dummy head and tail sentinel nodes, edge cases vanish entirely, powering structures like LRU caches.',
    bn: 'একমুখী লিঙ্কড লিস্টে কোনো নোডের রেফারেন্স দেওয়া থাকলেও তাকে মুছে ফেলতে O(n) সময় লাগে। ডাবলি লিঙ্কড লিস্টে প্রতিটি নোডে prev পয়েন্টার যুক্ত করে মেমোরি খরচের বিনিময়ে O(1) সময়ে নোড অপসারণ ও উভয় দিকে যাতায়াত সম্ভব হয়। ডামি হেড ও টেইল সেন্টিনেল ব্যবহারের মাধ্যমে প্রান্তিক শর্ত বা এজ কেস পুরোপুরি দূর হয়, যা এলআরইউ ক্যাশের মতো কাঠামো তৈরি করে।'
  },
  minutes: 20,
  nextLesson: 'the-cycle-cartographer',
  blocks: [
    {
      type: 'heading',
      id: 'dll-anatomy',
      text: {
        en: 'Anatomy of Bidirectional Nodes',
        bn: 'দ্বিমুখী নোডের গঠন কাঠামো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a singly linked structure, every node holds a value and a single next pointer. While forward traversal is straightforward, moving backwards is impossible without restarting from the head. A doubly linked list resolves this limitation by adding an explicit prev reference to each element. Every node maintains two pointers: one pointing forward to its successor, and one pointing backward to its predecessor.',
        bn: 'একমুখী লিঙ্কড তালিকায় প্রতিটি নোডে ডাটা এবং কেবল একটি next নির্দেশক থাকে। সামনে এগোনো সহজ হলেও হেড থেকে পুনরায় শুরু না করে পেছনে ফেরা সম্ভব নয়। ডাবলি লিঙ্কড লিস্ট প্রতিটি উপাদানে একটি স্পষ্ট prev রেফারেন্স যুক্ত করে এই সীমাবদ্ধতা সমাধান করে। এখানে প্রতিটি নোড দুটি সংযোগ সংরক্ষণ করে: একটি সামনে পরবর্তী নোডের দিকে এবং অন্যটি পেছনে পূর্ববর্তী নোডের দিকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This structural symmetry establishes a fundamental invariant across valid doubly linked lists. For any intermediate node in the chain, accessing node.next.prev returns the original node itself. Similarly, accessing node.prev.next also returns the original node reference. When an invariant fails during execution, pointer corruption or memory leaks are inevitable.',
        bn: 'এই কাঠামোগত সামঞ্জস্য বৈধ ডাবলি লিঙ্কড লিস্টের মাঝে একটি মৌলিক শর্ত নিশ্চিত করে। চেইনের যেকোনো মধ্যবর্তী উপাদানের ক্ষেত্রে node.next.prev কল করলে মূল নোডটিই ফিরে আসে। একইভাবে node.prev.next অ্যাক্সেস করলেও মূল নোডের ঠিকানা পাওয়া যায়। প্রোগ্রামে এই শর্ত ভঙ্গ হলে মেমোরি ত্রুটি বা লিকেজ দেখা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'prev-pointer',
          def: {
            en: 'The backward reference storing the memory address of the preceding node, enabling reverse traversal and immediate predecessor access.',
            bn: 'পূর্ববর্তী নোডের মেমোরি ঠিকানা নির্দেশকারী রেফারেন্স, যা বিপরীতমুখী যাতায়াত এবং তাত্ক্ষণিক পূর্বসূরি অ্যাক্সেস নিশ্চিত করে।'
          }
        },
        {
          term: 'sentinel-nodes',
          def: {
            en: 'Permanent dummy head and dummy tail nodes containing no payload, eliminating null checks during boundary insertions and removals.',
            bn: 'স্থায়ী ডামি হেড ও টেইল নোড যাতে কোনো মূল ডাটা থাকে না, ফলে প্রান্তিক সন্নিবেশ ও অপসারণে নাল পরীক্ষা দূর হয়।'
          }
        },
        {
          term: 'constant-removal',
          def: {
            en: 'The capability to excise a node in O(1) steps given only a direct reference to that node, by linking its predecessor directly to its successor.',
            bn: 'শুধুমাত্র সংশ্লিষ্ট নোডের রেফারেন্স থাকা সাপেক্ষে O(1) ধাপে নোডটি অপসারণের ক্ষমতা, যেখানে পূর্ববর্তী ও পরবর্তী নোড সরাসরি যুক্ত হয়।'
          }
        },
        {
          term: 'lru-cache',
          def: {
            en: 'A hybrid data structure coupling a hash map with a doubly linked list to provide O(1) get, put, and eviction operations.',
            bn: 'হ্যাশ ম্যাপ ও ডাবলি লিঙ্কড লিস্টের সমন্বয়ে গঠিত ডেটা স্ট্রাকচার যা O(1) সময়ে মান উদ্ধার, সংযোজন ও অপসারণ সম্পন্ন করে।'
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
      id: 'sentinel-pattern',
      text: {
        en: 'Sentinel Nodes: Eliminating Boundary Edge Cases',
        bn: 'সেন্টিনেল নোড: প্রান্তিক জটিলতার অবসান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional linked lists suffer from frequent null checks. Inserting at the head requires checking if head is null. Removing the tail requires updating the tail reference. When modifying a list with 1 element, both head and tail pointers must be updated simultaneously. These conditional branches complicate production logic and introduce subtle bugs.',
        bn: 'সনাতন লিঙ্কড লিস্টে বারবার নাল পরীক্ষা করতে হয়। শুরুতে উপাদান যোগ করার সময় হেড ফাঁকা কিনা তা দেখতে হয়। শেষ নোড মুছে ফেলার সময় টেইল পয়েন্টার হালনাগাদ করতে হয়। ১ উপাদানের তালিকা পরিবর্তনের সময় হেড ও টেইল উভয়কেই একসঙ্গে বদলাতে হয়। এসব শর্তযুক্ত কোড মূল লজিক জটিল করে তোলে এবং ভুলের ঝুঁকি বাড়ায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Sentinel nodes eliminate special cases by establishing two permanent dummy anchors: a dummy head and a dummy tail. Initially, dummyHead.next points directly to dummyTail, and dummyTail.prev points to dummyHead. All substantive data nodes are inserted strictly between these two boundary guards. Because neither sentinel is ever removed, node.prev and node.next are guaranteed to never be null for any actual element.',
        bn: 'সেন্টিনেল বা ডামি নোড দুটি স্থায়ী নোড তৈরির মাধ্যমে বিশেষ শর্তের ঝামেলা দূর করে: একটি ডামি হেড এবং একটি ডামি টেইল। প্রারম্ভিক অবস্থায় dummyHead.next সরাসরি dummyTail কে নির্দেশ করে এবং dummyTail.prev নির্দেশ করে dummyHead কে। সব আসল ডাটা নোড সর্বদা এই দুই প্রহরীর মাঝে অবস্থান করে। যেহেতু সেন্টিনেল নোড কখনো মোছা হয় না, তাই যেকোনো আসল উপাদানের node.prev এবং node.next কখনোই নাল হয় না।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Operation / Metric', bn: 'অপারেশন / পরিমাপ' },
        { en: 'Singly Linked List', bn: 'একমুখী লিঙ্কড লিস্ট' },
        { en: 'Doubly Linked List', bn: 'ডাবলি লিঙ্কড লিস্ট' }
      ],
      rows: [
        [
          { en: 'Pointers per Node (64-bit)', bn: 'প্রতি নোডে পয়েন্টার (৬৪-বিট)' },
          { en: '1 pointer (8 bytes)', bn: '১ টি পয়েন্টার (৮ বাইট)' },
          { en: '2 pointers (16 bytes)', bn: '২ টি পয়েন্টার (১৬ বাইট)' }
        ],
        [
          { en: 'Delete Given Node Pointer', bn: 'নির্দিষ্ট নোড রেফারেন্স অপসারণ' },
          { en: 'O(n) traversal to find prev', bn: 'prev খুঁজতে O(n) অনুসন্ধান' },
          { en: 'O(1) immediate link update', bn: 'O(1) তাৎক্ষণিক সংযোগ বদল' }
        ],
        [
          { en: 'Bidirectional Traversal', bn: 'উভমুখী যাতায়াত' },
          { en: 'Impossible (forward only)', bn: 'অসম্ভব (কেবল সামনে)' },
          { en: 'Supported natively via prev', bn: 'prev দিয়ে সরাসরি সম্ভব' }
        ],
        [
          { en: 'Boundary Edge Cases', bn: 'প্রান্তিক বিশেষ শর্ত' },
          { en: 'Requires head/null branches', bn: 'হেড ও নাল যাচাই প্রয়োজন' },
          { en: 'Eliminated with sentinels', bn: 'সেন্টিনেল দিয়ে দূর করা হয়' }
        ],
        [
          { en: 'Pointer Updates on Insert', bn: 'সন্নিবেশে পয়েন্টার বদল' },
          { en: '2 pointer rewrites', bn: '২ টি পয়েন্টার পরিবর্তন' },
          { en: '4 pointer rewrites', bn: '৪ টি পয়েন্টার পরিবর্তন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'lru-cache-impl',
      text: {
        en: 'Real-World Architecture: LRU Cache Implementation',
        bn: 'বাস্তব স্থাপত্য: এলআরইউ ক্যাশ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Least Recently Used cache is a classic systems component that must provide O(1) reads and O(1) writes within a bounded capacity. A hash map alone yields fast lookups but lacks ordering. An array maintains order but requires O(n) shifts upon eviction. Pairing a hash map with a doubly linked list delivers the optimal combination: the map provides instant node retrieval, while the list maintains access recency order.',
        bn: 'লিস্ট রিসেন্টলি ইউজড বা এলআরইউ ক্যাশ সিস্টেমের অত্যন্ত পরিচিত উপাদান যা নির্দিষ্ট ধারণক্ষমতার মধ্যে O(1) রিড ও O(1) রাইট সুবিধা দেয়। শুধু হ্যাশ ম্যাপ দ্রুত খোঁজার সুবিধা দিলেও ক্রম ধরে রাখতে পারে না। অ্যারে ক্রম ধরে রাখলেও উপাদান সরাতে O(n) সময় নেয়। হ্যাশ ম্যাপের সাথে ডাবলি লিঙ্কড লিস্টের সমন্বয় সেরা ফল দেয়: ম্যাপ মুহূর্তের মধ্যে নোড খুঁজে দেয় আর লিস্ট ব্যবহারের সময়ক্রম বজায় রাখে।'
      }
    },
    {
      type: 'code',
      code: `// Doubly Linked Node with key-value payload
class DNode {
  constructor(key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// Doubly Linked List with Sentinel Head and Tail
class DoublyLinkedList {
  constructor() {
    this.head = new DNode(); // dummy head
    this.tail = new DNode(); // dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  // Insert node immediately after dummy head (most recently used)
  addFirst(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }

  // Remove an arbitrary node given direct pointer in O(1)
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    this.size--;
    return node;
  }

  // Remove least recently used element (immediately before dummy tail)
  removeLast() {
    if (this.size === 0) return null;
    return this.remove(this.tail.prev);
  }

  toArray() {
    const items = [];
    let cur = this.head.next;
    while (cur !== this.tail) {
      items.push(\`[\${cur.key}:\${cur.val}]\`);
      cur = cur.next;
    }
    return items.join(' <-> ');
  }
}

// LRU Cache combining Hash Map with Doubly Linked List
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.dll = new DoublyLinkedList();
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.dll.remove(node);
    this.dll.addFirst(node);
    return node.val;
  }

  put(key, val) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val;
      this.dll.remove(node);
      this.dll.addFirst(node);
      return;
    }

    if (this.dll.size >= this.capacity) {
      const evicted = this.dll.removeLast();
      this.map.delete(evicted.key);
    }

    const newNode = new DNode(key, val);
    this.dll.addFirst(newNode);
    this.map.set(key, newNode);
  }
}

const cache = new LRUCache(3);
cache.put(1, 100);
cache.put(2, 200);
cache.put(3, 300);

console.log('Initial cache:', cache.dll.toArray());
// Output: Initial cache: [3:300] <-> [2:200] <-> [1:100]

console.log('Get key 1:', cache.get(1));
// Output: Get key 1: 100

console.log('After get(1):', cache.dll.toArray());
// Output: After get(1): [1:100] <-> [3:300] <-> [2:200]

cache.put(4, 400);
console.log('After put(4):', cache.dll.toArray());
// Output: After put(4): [4:400] <-> [1:100] <-> [3:300]

console.log('Has key 2?:', cache.map.has(2));
// Output: Has key 2?: false

console.log('Has key 1?:', cache.map.has(1));
// Output: Has key 1?: true`
    },
    {
      type: 'heading',
      id: 'four-pointer-discipline',
      text: {
        en: 'The Four-Pointer Mutation Invariant',
        bn: 'চার-পয়েন্টার মিউটেশন ইনভেরিয়েন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Inserting a new node between existing elements A and B requires updating exactly 4 pointer references. First, new node prev is set to A, and its next is set to B. Next, A.next is reassigned to the new node, and B.prev is reassigned to the new node. If the execution is interrupted halfway or pointers are overwritten in the wrong sequence, the bidirectional invariant breaks and parts of the chain become unreachable.',
        bn: 'বিদ্যমান উপাদান ক এবং খ এর মাঝে একটি নতুন নোড বসাতে ঠিক ৪ টি পয়েন্টার রেফারেন্স বদলাতে হয়। প্রথমে নতুন নোডের prev ক কে এবং next খ কে নির্দেশ করে। এরপর ক এর next নতুন নোডে এবং খ এর prev নতুন নোডে যুক্ত হয়। এই ধাপগুলোর ক্রম ভুল হলে বা মাঝপথে থামলে দ্বিমুখী ভারসাম্য নষ্ট হয় এবং তালিকার কিছু অংশ হারিয়ে যায়।'
      }
    },
    {
      type: 'exercises',
      items: [
        {
          id: 'dll-q1',
          kind: 'mcq',
          question: {
            en: 'Why does deleting an arbitrary node take O(1) time in a doubly linked list, but O(n) in a singly linked list?',
            bn: 'ডাবলি লিঙ্কড লিস্টে নির্দিষ্ট নোড মুছে ফেলা কেন O(1) সময়ে হয়, যেখানে একমুখী লিস্টে O(n) সময় লাগে?'
          },
          choices: [
            {
              en: 'The node has a direct prev pointer to its predecessor, avoiding a full traversal',
              bn: 'নোডে সরাসরি পূর্ববর্তী উপাদানের prev পয়েন্টার থাকে, ফলে কোনো ট্রাভার্সাল লাগে না'
            },
            {
              en: 'Doubly linked lists store elements contiguously inside CPU cache lines',
              bn: 'ডাবলি লিঙ্কড লিস্টের উপাদানগুলো মেমোরিতে পাশাপাশি সজ্জিত থাকে'
            },
            {
              en: 'The operating system automatically resolves backward references in hardware',
              bn: 'অপারেটিং সিস্টেম হার্ডওয়্যারে স্বয়ংক্রিয়ভাবে পেছনের সংযোগ ঠিক করে'
            },
            {
              en: 'Doubly linked lists require zero pointer updates during deletion',
              bn: 'ডাবলি লিঙ্কড লিস্টে নোড মোছার সময় কোনো পয়েন্টার আপডেট করতে হয় না'
            }
          ],
          correct: 0,
          hint: {
            en: 'To remove a node, you must rewire its predecessor next pointer. How do you find that predecessor?',
            bn: 'নোড সরাতে হলে আগের নোডের next পয়েন্টার বদলাতে হয়। আগের নোডটি কীভাবে খুঁজে পাওয়া যায়?'
          },
          explanation: {
            en: 'In a singly linked list, finding the preceding node requires walking from the head in O(n) time. In a doubly linked list, node.prev directly provides that address in O(1) time.',
            bn: 'একমুখী লিঙ্কড লিস্টে আগের উপাদান জানতে হেড থেকে O(n) সময় ধরে হাঁটতে হয়। ডাবলি লিঙ্কড লিস্টে node.prev সরাসরি O(1) সময়ে পূর্ববর্তী নোডের ঠিকানা দেয়।'
          }
        },
        {
          id: 'dll-q2',
          kind: 'mcq',
          question: {
            en: 'In a sentinel-based doubly linked list, what condition indicates that the list is completely empty?',
            bn: 'সেন্টিনেল ভিত্তিক ডাবলি লিঙ্কড লিস্টে কোন শর্তটি নির্দেশ করে যে তালিকাটি সম্পূর্ণ খালি?'
          },
          choices: [
            {
              en: 'dummyHead === null && dummyTail === null',
              bn: 'dummyHead === null && dummyTail === null'
            },
            {
              en: 'dummyHead.next === dummyTail && dummyTail.prev === dummyHead',
              bn: 'dummyHead.next === dummyTail && dummyTail.prev === dummyHead'
            },
            {
              en: 'dummyHead.prev === dummyTail.next',
              bn: 'dummyHead.prev === dummyTail.next'
            },
            {
              en: 'dummyHead.next === null && dummyTail.prev === null',
              bn: 'dummyHead.next === null && dummyTail.prev === null'
            }
          ],
          correct: 1,
          hint: {
            en: 'Sentinels are never deleted; they simply point directly to each other when no substantive nodes exist.',
            bn: 'সেন্টিনেল নোড কখনো মোছা হয় না; কোনো আসল নোড না থাকলে তারা কেবল একে অপরকে নির্দেশ করে।'
          },
          explanation: {
            en: 'When the list contains no data nodes, the dummy head points directly forward to the dummy tail, and the dummy tail points directly backward to the dummy head.',
            bn: 'তালিকায় কোনো আসল ডাটা নোড না থাকলে ডামি হেড সরাসরি ডামি টেইলকে নির্দেশ করে এবং ডামি টেইল সরাসরি ডামি হেডকে নির্দেশ করে।'
          }
        },
        {
          id: 'dll-q3',
          kind: 'mcq',
          question: {
            en: 'How many pointer references must be updated when inserting a new node between two existing nodes in a doubly linked list?',
            bn: 'ডাবলি লিঙ্কড লিস্টে দুটি নোডের মাঝে একটি নতুন নোড বসাতে মোট কতটি পয়েন্টার রেফারেন্স আপডেট করতে হয়?'
          },
          choices: [
            {
              en: '1 reference',
              bn: '১ টি রেফারেন্স'
            },
            {
              en: '2 references',
              bn: '২ টি রেফারেন্স'
            },
            {
              en: '4 references',
              bn: '৪ টি রেফারেন্স'
            },
            {
              en: '8 references',
              bn: '৮ টি রেফারেন্স'
            }
          ],
          correct: 2,
          hint: {
            en: 'Count the incoming and outgoing links for the new node: two on the new node itself, and one each on its neighbors.',
            bn: 'নতুন নোডের নিজের দুটি সংযোগ এবং দুই প্রতিবেশীর একটি করে সংযোগ মিলিয়ে মোট সংখ্যা হিসাব করুন।'
          },
          explanation: {
            en: 'Inserting requires setting newNode.prev and newNode.next (2 pointers), plus updating predecessor.next and successor.prev (2 pointers), totaling 4 pointer writes.',
            bn: 'সন্নিবেশে newNode.prev এবং newNode.next সেট করতে হয় (২ টি পয়েন্টার), সাথে predecessor.next এবং successor.prev হালনাগাদ করতে হয় (২ টি পয়েন্টার), অর্থাৎ মোট ৪ টি পয়েন্টার রাইট লাগে।'
          }
        },
        {
          id: 'dll-q4',
          kind: 'mcq',
          question: {
            en: 'What is the primary trade-off of a doubly linked list compared to a singly linked list?',
            bn: 'একমুখী লিস্টের তুলনায় ডাবলি লিঙ্কড লিস্টের প্রধান অসুবিধা বা ট্রেড-অফ কোনটি?'
          },
          choices: [
            {
              en: 'Lookup by index becomes O(n^2) instead of O(n)',
              bn: 'ইনডেক্স ধরে খোঁজার সময় O(n) এর বদলে O(n^2) হয়'
            },
            {
              en: 'Higher memory overhead per node (+8 bytes per pointer on 64-bit) and more pointer rewrites per mutation',
              bn: 'নোডপ্রতি অতিরিক্ত মেমোরি খরচ (৬৪-বিটে পয়েন্টারপ্রতি +৮ বাইট) এবং প্রতি অপারেশনে বেশি পয়েন্টার আপডেট'
            },
            {
              en: 'Bidirectional lists cannot be used to build queues or stacks',
              bn: 'দ্বিমুখী তালিকা দিয়ে কিউ বা স্ট্যাক তৈরি করা সম্ভব হয় না'
            },
            {
              en: 'Traversing in reverse requires O(n) auxiliary call stack space',
              bn: 'উল্টো দিকে ট্রাভার্স করতে O(n) কল স্ট্যাক স্পেস প্রয়োজন হয়'
            }
          ],
          correct: 1,
          hint: {
            en: 'Consider the cost of adding a second 64-bit pointer field to every heap allocation.',
            bn: 'প্রতিটি নোডে দ্বিতীয় একটি ৬৪-বিট পয়েন্টার যুক্ত করার মেমোরি খরচের কথা ভাবুন।'
          },
          explanation: {
            en: 'On 64-bit architectures, storing prev adds 8 bytes of pointer overhead per node. In addition, mutations require updating 4 pointers instead of 2, increasing operational overhead.',
            bn: '৬৪-বিট সিস্টেমে prev পয়েন্টার নোডপ্রতি ৮ বাইট অতিরিক্ত মেমোরি খরচ যোগ করে। উপরন্তু প্রতিটি অপারেশনে ২ টির বদলে ৪ টি পয়েন্টার হালনাগাদ করতে হয়।'
          }
        }
      ]
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Bidirectional links: Each node maintains both next and prev pointers, permitting bidirectional traversal and immediate predecessor access.',
          bn: 'দ্বিমুখী সংযোগ: প্রতিটি নোড next ও prev পয়েন্টার সংরক্ষণ করে, যা উভয় দিকে যাতায়াত ও পূর্বসূরি অ্যাক্সেস নিশ্চিত করে।'
        },
        {
          en: 'Constant deletion: Given a direct node reference, unlinking it requires only updating its predecessor and successor in O(1) time.',
          bn: 'তাৎক্ষণিক অপসারণ: কোনো নোডের সরাসরি রেফারেন্স থাকলে O(1) সময়ে তার আগের ও পরের নোডের সংযোগ বদলে তাকে মুছে ফেলা যায়।'
        },
        {
          en: 'Sentinel boundaries: Permanent dummy head and tail nodes eliminate null checking and handle empty list edge cases cleanly.',
          bn: 'সেন্টিনেল সীমানা: স্থায়ী ডামি হেড ও টেইল নোড নাল চেকের ঝামেলা দূর করে এবং খালি তালিকার প্রান্তিক কেস সহজভাবে সামলায়।'
        },
        {
          en: 'LRU Cache architecture: Combining a hash map with a doubly linked list achieves constant-time lookup, insertion, and eviction.',
          bn: 'এলআরইউ ক্যাশ স্থাপত্য: হ্যাশ ম্যাপের সাথে ডাবলি লিঙ্কড লিস্ট যুক্ত করে O(1) সময়ে ডাটা খোঁজা, যোগ করা ও প্রাচীন ডাটা বাদ দেওয়া যায়।'
        }
      ]
    }
  ]
};
`;

writeFileSync('src/content/linkedlists/lessons/the-doubly-chained-court.ts', content, 'utf8');
console.log('Successfully wrote the-doubly-chained-court.ts');
