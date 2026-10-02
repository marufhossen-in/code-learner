import type { Lesson } from '../../../lib/types';

export const theLazyMeadowsLesson: Lesson = {
  slug: 'the-lazy-meadows',
  tech: 'heaps',
  title: {
    en: "Indexed Heaps and Decrease-Key — Dijkstra's Shortest Path Optimization",
    bn: 'ইনডেক্সড হিপ এবং ডিক্রিজ-কি: ডাইকস্ট্রার ক্ষুদ্রতম পথ অপ্টিমাইজেশন'
  },
  summary: {
    en: "Standard binary heaps offer fast O(1) root inspection and O(log n) insertion, but updating an arbitrary element requires a slow O(n) linear scan to locate its array index. In graph algorithms like Dijkstra's shortest path, frequent edge relaxations demand an efficient decrease-key operation. We analyze two production paradigms: lazy invalidation with duplicate suppression versus indexed heaps backed by a bidirectional position map, unlocking deterministic O(log V) decrease-key updates.",
    bn: 'প্রমিত বাইনারি হিপ দ্রুত O(1) রুট পরিদর্শন এবং O(log n) সন্নিবেশ সুবিধা দিলেও যেকোনো উপাদান খুঁজে বের করতে ধীরগতির O(n) লিনিয়ার স্ক্যানের প্রয়োজন হয়। ডাইকস্ট্রার ক্ষুদ্রতম পথ বা প্রিমের অ্যালগরিদমে বারবার এজ রিল্যাক্সেশনের জন্য একটি দক্ষ ডিক্রিজ-কি অপারেশনের প্রয়োজন হয়। আমরা দুটি বাস্তবমুখী সমাধান বিশ্লেষণ করি: বাসি ডুপ্লিকেট বাদ দেওয়ার অলস পদ্ধতি বনাম দ্বিমুখী পজিশন ম্যাপযুক্ত ইনডেক্সড হিপ, যা সুনির্দিষ্ট O(log V) সময়ে ডিক্রিজ-কি সম্পাদন করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-horizon-trades',
    tech: 'heaps',
    title: {
      en: 'Top-K Streaming and Bounded Memory Selection',
      bn: 'টপ-কে স্ট্রিমিং এবং সীমিত মেমোরিতে উপাদান নির্বাচন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'decrease-key-problem',
      text: {
        en: 'The Graph Relaxation Dilemma: Finding Needles in Heaps',
        bn: 'গ্রাফ রিল্যাক্সেশন সমস্যা: হিপের ভেতরে উপাদান খুঁজে পাওয়া'
      }
    },
    {
      type: 'para',
      text: {
        en: "When you implement Dijkstra's shortest path algorithm on large road networks, finding the shortest route requires repeatedly relaxing edges. When a shorter distance to an unvisited vertex v is discovered through neighbor u, vertex v is already waiting inside the priority queue.",
        bn: 'যখন আপনি বড় রাস্তার নেটওয়ার্কে ডাইকস্ট্রার ক্ষুদ্রতম পথ অ্যালগরিদম বাস্তবায়ন করেন, তখন সবচেয়ে ছোট পথ খুঁজে পেতে বারবার এজ রিল্যাক্সেশন করতে হয়। প্রতিবেশী নোড u এর মধ্য দিয়ে যখন অপর একটি নোড v এর জন্য কম দূরত্বের নতুন পথ পাওয়া যায়, তখন নোডটি ইতিমধ্যে প্রায়োরিটি কিউয়ের ভেতর অবস্থান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a standard binary heap, locating where vertex v sits in the array takes a linear O(V) scan because sibling nodes are unordered. If an algorithm performs E edge relaxations, scanning the heap every time yields O(E * V) runtime, destroying the performance advantage of using a heap.',
        bn: 'একটি সাধারণ বাইনারি হিপে অ্যারের ভেতরে নোডটি ঠিক কোন ইনডেক্সে আছে তা খুঁজতে O(V) লিনিয়ার স্ক্যান লাগে কারণ সহোদর নোডগুলোর মাঝে কোনো ক্রম থাকে না। অ্যালগরিদমটি যদি E বার রিল্যাক্সেশন করে, তবে প্রতিবার হিপ স্ক্যান করার ফলে মোট সময় দাঁড়ায় O(E * V), যা হিপ ব্যবহারের কার্যকারিতাকে পুরোপুরি নষ্ট করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'decrease-key',
          def: {
            en: 'An operation that reduces the priority key of an existing element and bubbles it upward to restore the heap property.',
            bn: 'একটি বিদ্যমান উপাদানের প্রায়োরিটি কমিয়ে তাকে শিফট-আপের মাধ্যমে ওপরে তুলে হিপের ভারসাম্য বজায় রাখার অপারেশন।'
          }
        },
        {
          term: 'indexed-binary-heap',
          def: {
            en: 'A heap augmented with a position map (id -> array index) updated on every swap to enable O(1) index lookups.',
            bn: 'এমন একটি হিপ যাতে একটি পজিশন ম্যাপ থাকে যা প্রতি অদলবদলে আপডেট হয় এবং O(1) সময়ে উপাদানের অবস্থান খুঁজে দেয়।'
          }
        },
        {
          term: 'lazy-invalidation',
          def: {
            en: 'Inserting duplicate updated entries into the heap and discarding stale higher-distance entries when dequeued.',
            bn: 'হিপে নতুন আপডেট উপাদান পুশ করা এবং বের করার সময় পুরোনো বাসি উপাদানগুলোকে বাতিল করে দেওয়া।'
          }
        },
        {
          term: 'bidirectional-swap-sync',
          def: {
            en: 'Synchronizing heap array indices with the position map whenever two nodes exchange positions during sifting.',
            bn: 'শিফটিংয়ের সময় দুটি নোড অদলবদল হলে পজিশন ম্যাপেও তাদের নতুন ইনডেক্স সিঙ্ক করা।'
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
      id: 'eager-vs-lazy-table',
      text: {
        en: 'Architectural Comparison: Lazy Duplicates vs Indexed Heap',
        bn: 'কাঠামোগত তুলনা: অলস ডুপ্লিকেট বনাম ইনডেক্সড হিপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To solve the decrease-key bottleneck, developers employ either lazy duplicate insertion or eager indexed heaps. Lazy insertion pushes a fresh duplicate entry (dist, v) into the heap without modifying the old entry, skipping stale entries upon extraction. An Indexed Heap maintains a bidirectional map (v -> arrayIndex), enabling direct O(log V) sift-up in-place.',
        bn: 'ডিক্রিজ-কি এর সমস্যা সমাধানে ডেভেলপাররা দুটি কৌশলের যেকোনো একটি ব্যবহার করেন: অলস ডুপ্লিকেট সন্নিবেশ অথবা ইনডেক্সড হিপ। অলস সন্নিবেশে পুরোনো মান না বদলে সরাসরি নতুন জোড়া (dist, v) হিপে ঢুকিয়ে দেওয়া হয় এবং পরবর্তীতে বাসি মানগুলোকে স্কিপ করা হয়। অন্যদিকে ইনডেক্সড হিপ একটি দ্বিমুখী ম্যাপ (v -> arrayIndex) ব্যবহার করে সরাসরি মূল অ্যারেতেই O(log V) সময়ে শিফট-আপ সম্পন্ন করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Feature', bn: 'কাঠামোগত বৈশিষ্ট্য' },
        { en: 'Lazy Duplicates Approach', bn: 'অলস ডুপ্লিকেট পদ্ধতি' },
        { en: 'Indexed Min-Heap Approach', bn: 'ইনডেক্সড মিন-হিপ পদ্ধতি' }
      ],
      rows: [
        [
          { en: 'Maximum Heap Size', bn: 'সর্বোচ্চ হিপের আকার' },
          { en: 'Up to E total entries (one per edge)', bn: 'সর্বোচ্চ E সংখ্যক এন্ট্রি (প্রতি এজের জন্য)' },
          { en: 'Strictly bounded at V entries', bn: 'কঠোরভাবে V সংখ্যক এন্ট্রিতে সীমাবদ্ধ' }
        ],
        [
          { en: 'Decrease-Key Cost', bn: 'ডিক্রিজ-কি অপারেশন খরচ' },
          { en: 'O(log E) push duplicate', bn: 'O(log E) নতুন ডুপ্লিকেট পুশ' },
          { en: 'O(log V) in-place sift-up', bn: 'O(log V) ইন-প্লেস শিফট-আপ' }
        ],
        [
          { en: 'Auxiliary Memory', bn: 'অতিরিক্ত মেমোরি খরচ' },
          { en: 'O(E) space for redundant queue entries', bn: 'অতিরিক্ত এন্ট্রির জন্য O(E) মেমোরি' },
          { en: 'O(V) space for bidirectional position map', bn: 'পজিশন ম্যাপের জন্য O(V) মেমোরি' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-indexed-heap-code',
      text: {
        en: 'Executable Indexed Min-Heap Implementation',
        bn: 'ইনডেক্সড মিন-হিপের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an Indexed Min-Heap. When vertex C distance drops from 120 to 20, decreaseKey finds C in O(1) time via pos map and sifts it to the root in O(log V) time.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি ইনডেক্সড মিন-হিপ বাস্তবায়ন করে। যখন নোড C এর দূরত্ব ১২০ থেকে কমে ২০ হয়, তখন decreaseKey পজিশন ম্যাপ দিয়ে O(1) সময়ে C কে খুঁজে পায় এবং O(log V) সময়ে একে রুটে উন্নীত করে।'
      }
    },
    {
      type: 'code',
      code: `class IndexedMinHeap {
  constructor() {
    this.heap = []; // [{ id, dist }]
    this.pos = new Map(); // id -> index in this.heap
  }

  size() { return this.heap.length; }

  _swap(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
    this.pos.set(this.heap[i].id, i);
    this.pos.set(this.heap[j].id, j);
  }

  insert(id, dist) {
    const idx = this.heap.length;
    this.heap.push({ id, dist });
    this.pos.set(id, idx);
    this._siftUp(idx);
  }

  decreaseKey(id, newDist) {
    const idx = this.pos.get(id);
    if (idx === undefined) return;
    if (newDist >= this.heap[idx].dist) return; // only decrease
    this.heap[idx].dist = newDist;
    this._siftUp(idx);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    this.pos.delete(top.id);
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.pos.set(last.id, 0);
      this._siftDown(0);
    }
    return top;
  }

  _siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[i].dist < this.heap[p].dist) {
        this._swap(i, p);
        i = p;
      } else break;
    }
  }

  _siftDown(i) {
    const n = this.heap.length;
    while (true) {
      let b = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l].dist < this.heap[b].dist) b = l;
      if (r < n && this.heap[r].dist < this.heap[b].dist) b = r;
      if (b !== i) {
        this._swap(i, b);
        i = b;
      } else break;
    }
  }
}

const pq = new IndexedMinHeap();
pq.insert('A', 100);
pq.insert('B', 80);
pq.insert('C', 120);
pq.insert('D', 50);

console.log('Initial root:', pq.heap[0].id, 'dist:', pq.heap[0].dist);
// Output: Initial root: D dist: 50

pq.decreaseKey('C', 20);
console.log('After decreaseKey(C -> 20), new root:', pq.heap[0].id, 'dist:', pq.heap[0].dist);
// Output: After decreaseKey(C -> 20), new root: C dist: 20

const s1 = pq.pop();
console.log(\`Served 1: \${s1.id} (dist: \${s1.dist})\`);
// Output: Served 1: C (dist: 20)

const s2 = pq.pop();
console.log(\`Served 2: \${s2.id} (dist: \${s2.dist})\`);
// Output: Served 2: D (dist: 50)

const s3 = pq.pop();
console.log(\`Served 3: \${s3.id} (dist: \${s3.dist})\`);
// Output: Served 3: B (dist: 80)

const s4 = pq.pop();
console.log(\`Served 4: \${s4.id} (dist: \${s4.dist})\`);
// Output: Served 4: A (dist: 100)

console.log('Remaining size:', pq.size());
// Output: Remaining size: 0`
    },
    {
      type: 'heading',
      id: 'shortest-path-production-impact',
      text: {
        en: 'Production Systems: OpenStreetMap Routing and GPS Navigation',
        bn: 'বাস্তব সিস্টেম: ওপেনস্ট্রিটম্যাপ রাউটিং এবং জিপিএস নেভিগেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production GPS route planning engines like OSRM (Open Source Routing Machine) and GraphHopper calculate driving paths across road graphs with tens of millions of intersections. Because graph edge relaxations occur millions of times per second, maintaining an indexed binary heap prevents queue explosion, keeping memory tightly bounded to active nodes.',
        bn: 'ওএসআরএম (OSRM) এবং গ্রাফহপারের মতো আধুনিক জিপিএস নেভিগেশন ইঞ্জিনগুলো কোটি কোটি রাস্তার সংযোগস্থলের ওপর দ্রুততম পথ হিসাব করে। যেহেতু প্রতি সেকেন্ডে লক্ষ লক্ষ এজ রিল্যাক্সেশন সম্পন্ন হয়, তাই ইনডেক্সড বাইনারি হিপ ব্যবহারের ফলে কিউয়ের আকার নিয়ন্ত্রণের বাইরে যেতে পারে না এবং মেমোরি খরচ কঠোরভাবে সক্রিয় নোডের মধ্যে সীমাবদ্ধ থাকে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Constant-time index lookup: A position map gives O(1) random access to arbitrary nodes inside the heap array.',
          bn: 'ধ্রুবক সময়ে ইনডেক্স দেখা: একটি পজিশন ম্যাপ হিপ অ্যারের যেকোনো নোডের অবস্থান O(1) সময়ে খুঁজে বের করতে দেয়।'
        },
        {
          en: 'Strict V size bound: Indexed heaps hold exactly one entry per node, avoiding the O(E) memory bloat of duplicate queues.',
          bn: 'কঠোরভাবে V আকারের সীমাবদ্ধতা: ইনডেক্সড হিপে নোড প্রতি কেবল একটি এন্ট্রি থাকে, ফলে ডুপ্লিকেটের O(E) অপচয় হয় না।'
        },
        {
          en: 'Dijkstra canonical bound: Indexed heaps achieve true O((V + E) log V) runtime for shortest path calculations.',
          bn: 'ডাইকস্ট্রার সঠিক জটিলতা: ইনডেক্সড হিপের মাধ্যমে ক্ষুদ্রতম পথ অনুসন্ধানে সঠিক O((V + E) log V) গতি অর্জন করা যায়।'
        },
        {
          en: 'Bidirectional sync requirement: Every swap in sift-up or sift-down must update the position map to keep indices consistent.',
          bn: 'দ্বিমুখী সিঙ্কের প্রয়োজনীয়তা: শিফট চলাকালীন প্রতিটি অদলবদলে পজিশন ম্যাপের ইনডেক্সও একসাথে আপডেট করতে হবে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'lm-ex1',
      kind: 'mcq',
      topic: 'decrease-key-index-lookup-cost',
      question: {
        en: 'Why is decreaseKey inefficient in a standard binary heap without an auxiliary position map?',
        bn: 'অতিরিক্ত পজিশন ম্যাপ ছাড়া একটি সাধারণ বাইনারি হিপে কেন decreaseKey অপারেশনটি অত্যন্ত অদক্ষ?'
      },
      options: [
        {
          en: 'Because heaps have no ordering among siblings, locating an arbitrary element requires an O(n) linear scan across the entire array',
          bn: 'কারণ হিপে সহোদরদের মধ্যে কোনো নির্দিষ্ট ক্রম থাকে না, ফলে যেকোনো উপাদান খুঁজতে পুরো অ্যারে জুড়ে O(n) লিনিয়ার স্ক্যান করতে হয়'
        },
        {
          en: 'Because binary heaps can only store prime numbers',
          bn: 'কারণ বাইনারি হিপ কেবল মৌলিক সংখ্যা সংরক্ষণ করতে পারে'
        },
        {
          en: 'Because decreaseKey requires restarting the CPU thread',
          bn: 'কারণ decreaseKey চালানোর জন্য সিপিইউ থ্রেড পুনরায় চালু করতে হয়'
        },
        {
          en: 'Because array length becomes negative during updates',
          bn: 'কারণ আপডেটের সময় অ্যারের দৈর্ঘ্য ঋণাত্মক হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can you know whether an element is in the left or right subtree without searching?',
        bn: 'অনুসন্ধান না করে কি আপনি জানতে পারবেন কোনো উপাদান বাম সাব-ট্রিতে আছে না ডান সাব-ট্রিতে?'
      },
      explanation: {
        en: 'Heaps maintain only partial order. Finding a specific element by key requires scanning all array cells in O(n) time.',
        bn: 'হিপ কেবল আংশিক ক্রম রক্ষা করে। কি দিয়ে নির্দিষ্ট উপাদান খুঁজতে সমস্ত অ্যারের ঘরে O(n) স্ক্যান চালাতে হয়।'
      }
    },
    {
      id: 'lm-ex2',
      kind: 'mcq',
      topic: 'indexed-heap-position-map-role',
      question: {
        en: 'What is the role of the pos map in an Indexed Binary Heap?',
        bn: 'একটি ইনডেক্সড বাইনারি হিপে pos ম্যাপের মূল ভূমিকা কী?'
      },
      options: [
        {
          en: 'It maps each element identifier to its current index in the heap array, providing O(1) direct access for decreaseKey and deletion',
          bn: 'এটি প্রতিটি উপাদানকে হিপ অ্যারেতে তার বর্তমান ইনডেক্সের সাথে ম্যাপ করে রাখে, যা O(1) সময়ে তাৎক্ষণিক ডিক্রিজ-কি বা ডিলিট সম্ভব করে'
        },
        {
          en: 'It compresses 64-bit numbers into 8-bit integers',
          bn: 'এটি ৬৪-বিট সংখ্যাকে ৮-বিট পূর্ণসংখ্যায় সংকুচিত করে'
        },
        {
          en: 'It stores historical audit logs on disk',
          bn: 'এটি ডিস্কে অডিট লগ জমা করে'
        },
        {
          en: 'It converts JavaScript arrays into C pointers',
          bn: 'এটি জাভাস্ক্রিপ্ট অ্যারেকে সি পয়েন্টারে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'When we want to decrease vertex C, how do we know which array index C currently occupies?',
        bn: 'নোড C এর প্রায়োরিটি কমাতে চাইলে আমরা কীভাবে জানব C বর্তমানে অ্যারের কোন ইনডেক্সে আছে?'
      },
      explanation: {
        en: 'The position map acts as an inverted index. Looking up pos.get(id) returns the array index in O(1) time.',
        bn: 'পজিশন ম্যাপটি একটি ইনভার্টেড ইনডেক্স হিসেবে কাজ করে। pos.get(id) কল করলে সরাসরি O(1) সময়ে অ্যারে ইনডেক্স পাওয়া যায়।'
      }
    },
    {
      id: 'lm-ex3',
      kind: 'mcq',
      topic: 'lazy-invalidation-heap-size',
      question: {
        en: 'In Dijkstra’s algorithm using lazy invalidation, what is the maximum number of entries that can accumulate in the priority queue?',
        bn: 'অলস ডুপ্লিকেট পদ্ধতিতে ডাইকস্ট্রার অ্যালগরিদম চালালে প্রায়োরিটি কিউতে সর্বোচ্চ কতটি এন্ট্রি জমতে পারে?'
      },
      options: [
        {
          en: 'Up to E entries, where E is the total number of graph edges',
          bn: 'সর্বোচ্চ E সংখ্যক এন্ট্রি, যেখানে E হলো গ্রাফের মোট এজের সংখ্যা'
        },
        {
          en: 'Strictly 1 entry',
          bn: 'কঠোরভাবে মাত্র ১টি এন্ট্রি'
        },
        {
          en: 'Exactly V entries always',
          bn: 'সর্বদা ঠিক V সংখ্যক এন্ট্রি'
        },
        {
          en: '0 entries',
          bn: '০টি এন্ট্রি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each time an edge relaxation finds a shorter path, a new entry is pushed into the heap.',
        bn: 'প্রতিটি এজ রিল্যাক্সেশনে নতুন পথ পেলে হিপে একটি নতুন এন্ট্রি পুশ করা হয়।'
      },
      explanation: {
        en: 'Because lazy invalidation pushes a new pair on every successful relaxation without deleting the old one, the heap can grow to size E.',
        bn: 'পুরোনো এন্ট্রি না মুছে প্রতি রিল্যাক্সেশনে নতুন জোড়া ঢোকানোয় হিপের মোট আকার গ্রাফের এজ সংখ্যা E পর্যন্ত পৌঁছাতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'the-lazy-meadows-quiz',
    title: {
      en: 'Indexed Heaps and Decrease-Key Quiz',
      bn: 'ইনডেক্সড হিপ এবং ডিক্রিজ-কি কুইজ'
    },
    questions: [
      {
        id: 'lm-q1',
        kind: 'mcq',
        topic: 'indexed-decrease-key-time',
        question: {
          en: 'What is the time complexity of the decreaseKey operation in an Indexed Binary Heap of size V?',
          bn: 'V আকারের একটি ইনডেক্সড বাইনারি হিপে decreaseKey অপারেশনের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(log V), combining an O(1) index lookup with an O(log V) sift-up',
            bn: 'O(log V), O(1) ইনডেক্স খোঁজার সাথে O(log V) শিফট-আপের সমন্বয়ে'
          },
          {
            en: 'O(V) linear time',
            bn: 'O(V) রৈখিক সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(V log V) time',
            bn: 'O(V log V) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lookup is O(1) via the map; sifting up to the root traverses tree height log V.',
          bn: 'ম্যাপের মাধ্যমে অবস্থান খোঁজা O(1); রুট পর্যন্ত শিফট-আপ করতে ট্রির উচ্চতা log V লাগে।'
        },
        explanation: {
          en: 'Finding the array index takes O(1) using pos.get(). Sifting the updated node upward takes at most O(log V) swaps.',
          bn: 'pos.get() দিয়ে O(1) সময়ে ইনডেক্স পাওয়ার পর নোডটিকে ওপরে তুলতে সর্বোচ্চ O(log V) অদলবদল লাগে।'
        }
      },
      {
        id: 'lm-q2',
        kind: 'mcq',
        topic: 'swap-synchronization-requirement',
        question: {
          en: 'Why must the _swap method in an Indexed Binary Heap update both the array cells and the position map entries?',
          bn: 'ইনডেক্সড বাইনারি হিপের _swap মেথডটিকে কেন অ্যারে এবং পজিশন ম্যাপ উভয় জায়গাতেই তথ্য আপডেট করতে হয়?'
        },
        options: [
          {
            en: 'If the position map is not updated during swaps, pos.get(id) will return stale indices, corrupting future decreaseKey operations',
            bn: 'অদলবদলের সময় পজিশন ম্যাপ আপডেট না করলে pos.get(id) ভুল বা পুরোনো ইনডেক্স দেবে যা ভবিষ্যতের ডিক্রিজ-কি নষ্ট করবে'
          },
          {
            en: 'To send telemetry events to network servers',
            bn: 'নেটওয়ার্ক সার্ভারে টেলিমেট্রি ইভেন্ট পাঠানোর জন্য'
          },
          {
            en: 'Because JavaScript arrays delete themselves if maps are out of sync',
            bn: 'কারণ ম্যাপের অমিল থাকলে জাভাস্ক্রিপ্ট অ্যারে নিজেকে মুছে ফেলে'
          },
          {
            en: 'To encrypt vertex identifiers with SHA-256',
            bn: 'এসএইচএ-২৫৬ দিয়ে নোড আইডি এনক্রিপ্ট করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'If element A moves from index 3 to index 1, where does pos.get(A) need to point?',
          bn: 'উপাদান A যদি ৩ নম্বর ইনডেক্স থেকে ১ নম্বরে যায়, তবে pos.get(A) কে কোথায় নির্দেশ করতে হবে?'
        },
        explanation: {
          en: 'Every time elements change positions in the array, the index lookup map must immediately record their new positions.',
          bn: 'অ্যারেতে উপাদান স্থান পরিবর্তন করার সাথে সাথে ইনডেক্স ম্যাপেও তাদের নতুন অবস্থান তাৎক্ষণিকভাবে আপডেট করতে হয়।'
        }
      },
      {
        id: 'lm-q3',
        kind: 'mcq',
        topic: 'dijkstra-runtime-with-indexed-heap',
        question: {
          en: 'What is the overall time complexity of Dijkstra’s shortest path algorithm when implemented with an Indexed Binary Heap?',
          bn: 'ইনডেক্সড বাইনারি হিপ ব্যবহার করে বাস্তবায়ন করলে ডাইকস্ট্রার ক্ষুদ্রতম পথ অ্যালগরিদমের সামগ্রিক সময় জটিলতা কত হয়?'
        },
        options: [
          {
            en: 'O((V + E) log V)',
            bn: 'O((V + E) log V)'
          },
          {
            en: 'O(V^2)',
            bn: 'O(V^2)'
          },
          {
            en: 'O(E * V)',
            bn: 'O(E * V)'
          },
          {
            en: 'O(V + E)',
            bn: 'O(V + E)'
          }
        ],
        answer: 0,
        hint: {
          en: 'V extractions each take O(log V), and E edge relaxations each take O(log V).',
          bn: 'V টি নিষ্কাশনে O(log V) এবং E টি এজ রিল্যাক্সেশনে O(log V) সময় লাগে।'
        },
        explanation: {
          en: 'Each of the V vertices is extracted in O(log V), and each of the E edges triggers at most one decreaseKey in O(log V), totaling O((V + E) log V).',
          bn: 'প্রতিটি নোড বের করতে O(log V) এবং প্রতিটি এজের জন্য সর্বোচ্চ একবার ডিক্রিজ-কি O(log V) লাগায় মোট সময় দাঁড়ায় O((V + E) log V)।'
        }
      },
      {
        id: 'lm-q4',
        kind: 'mcq',
        topic: 'stale-duplicate-identification',
        question: {
          en: 'In lazy invalidation, how does Dijkstra’s algorithm identify and discard stale duplicate entries upon popping?',
          bn: 'অলস ডুপ্লিকেট পদ্ধতিতে ডাইকস্ট্রার অ্যালগরিদম কিউ থেকে বের করার পর কীভাবে বাসি এন্ট্রিগুলো শনাক্ত ও বাতিল করে?'
        },
        options: [
          {
            en: 'If the popped distance is greater than the recorded shortest distance in the dist array (dist > shortestDist[v]), the entry is stale and skipped',
            bn: 'বের করা দূরত্ব যদি dist অ্যারেতে থাকা সর্বনিম্ন দূরত্বের চেয়ে বেশি হয় (dist > shortestDist[v]), তবে এটি বাসি এন্ট্রি হিসেবে বাদ দেওয়া হয়'
          },
          {
            en: 'It compares the node ID with a random number',
            bn: 'এটি নোড আইডির সাথে একটি এলোমেলো সংখ্যা তুলনা করে'
          },
          {
            en: 'It clears the entire graph memory buffer',
            bn: 'এটি সম্পূর্ণ গ্রাফের মেমোরি বাফার মুছে ফেলে'
          },
          {
            en: 'It re-runs the entire algorithm from scratch',
            bn: 'এটি শুরু থেকে পুরো অ্যালগরিদম পুনরায় চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If vertex B was already visited with distance 30, should a popped duplicate with distance 70 be processed?',
          bn: 'নোড B তে যদি ইতিমধ্যে ৩০ দূরত্বে পৌঁছানো হয়ে থাকে, তবে ৭০ দূরত্বের ডুপ্লিকেটটি কি প্রসেস করা উচিত?'
        },
        explanation: {
          en: 'A vertex might have multiple entries in the queue. Only the earliest (smallest distance) entry matters; subsequent duplicates are safely ignored.',
          bn: 'কিউতে একই নোডের একাধিক মান থাকতে পারে। কেবল সবচেয়ে ছোট দূরত্বেরটি কার্যকর হয় এবং পরের বাসি মানগুলো সহজেই উপেক্ষা করা যায়।'
        }
      }
    ]
  }
};
