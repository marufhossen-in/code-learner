import type { Lesson } from '../../../lib/types';

export const theBfsTideLesson: Lesson = {
  slug: 'the-bfs-tide',
  tech: 'queues',
  title: {
    en: 'Breadth-First Search — Level-Order Traversal and Shortest Path Exploration',
    bn: 'ব্রেডথ-ফার্স্ট সার্চ: লেভেল-অর্ডার ট্রাভার্সাল এবং শর্টেস্ট পাথ'
  },
  summary: {
    en: 'While earlier chapters used queues to manage waiting tasks, Breadth-First Search (BFS) turns the FIFO queue into an exploration engine. Because queues process elements in strict arrival order, exploring an unweighted graph via BFS guarantees visiting vertices in non-decreasing order of distance. We prove why marking vertices at enqueue time is mandatory to prevent exponential re-visitation, and implement an executable shortest path finder and level-order traversal.',
    bn: 'পূর্ববর্তী অধ্যায়গুলোতে কিউ ব্যবহার করা হয়েছিল অপেক্ষমাণ কাজ পরিচালনার জন্য, কিন্তু ব্রেডথ-ফার্স্ট সার্চ (BFS) ফিফো কিউকে একটি শক্তিশালী অনুসন্ধান ইঞ্জিনে পরিণত করে। যেহেতু কিউ আগমনের ক্রমানুসারে উপাদান প্রক্রিয়া করে, তাই ওজনহীন গ্রাফে বিএফএস উৎস থেকে দূরত্বের অধঃক্রমহীন ক্রমানুসারে শীর্ষবিন্দুগুলো পরিদর্শন করে। আমরা প্রমাণ করি কেন কিউতে ঢোকানোর মুহূর্তেই ভিজিটেড চিহ্নিত করা অপরিহার্য এবং একটি সম্পূর্ণ এক্সিকিউটেবল শর্টেস্ট পাথ ও লেভেল-অর্ডার ট্রাভার্সাল কোড লিখি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-arrival-panorama',
    tech: 'queues',
    title: {
      en: 'Queue Architecture Synthesis — Choosing the Right Queue Pattern',
      bn: 'কিউ আর্কিটেকচার সমন্বয়: সঠিক কিউ প্যাটার্ন নির্বাচন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'bfs-exploration-paradigm',
      text: {
        en: 'The FIFO Exploration Engine: Distance by Distance',
        bn: 'ফিফো অনুসন্ধান ইঞ্জিন: দূরত্বের ক্রমানুসারে অন্বেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In previous chapters, queues served elements strictly by waiting time. In Breadth-First Search (BFS), the queue serves as an exploration engine for networks, mazes, and social graphs. Starting at a source vertex, BFS explores the network in expanding concentric rings, visiting all nodes at distance 1 before any nodes at distance 2.',
        bn: 'পূর্ববর্তী অধ্যায়গুলোতে কিউ শুধুমাত্র অপেক্ষার সময়ের ভিত্তিতে উপাদান পরিবেশন করেছিল। ব্রেডথ-ফার্স্ট সার্চে (BFS) কিউ নেটওয়ার্ক, গোলকধাঁধা এবং সামাজিক গ্রাফ অন্বেষণের ইঞ্জিনে পরিণত হয়। একটি উৎস শীর্ষবিন্দু থেকে শুরু করে বিএফএস সমকেন্দ্রিক বৃত্তের মতো চারদিকে ছড়িয়ে পড়ে এবং দূরত্ব ২ এর কোনো নোডে যাওয়ার আগে দূরত্ব ১ এর সমস্ত নোড পরিদর্শন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The FIFO nature of a queue mathematically guarantees this ordering. When a node at layer L is dequeued, all its unvisited neighbors are enqueued at layer L + 1. Because new nodes enter at the back of the queue, every remaining node of layer L is processed before any node of layer L + 1 can be reached. This ensures that the first time a node is touched, the path found is the shortest path.',
        bn: 'কিউয়ের ফিফো বৈশিষ্ট্য গাণিতিকভাবে এই ক্রম নিশ্চিত করে। যখন স্তর L এর একটি নোড ডিকিউ হয়, তখন তার সমস্ত অপ্রদর্শিত প্রতিবেশী স্তর L + ১ এ এনকিউ হয়। যেহেতু নতুন নোডগুলো কিউয়ের পেছনে ঢোকে, তাই স্তর L + ১ এর কোনো নোডে যাওয়ার আগেই স্তর L এর বাকি সব নোড প্রসেস হয়ে যায়। এটি নিশ্চিত করে যে কোনো নোড প্রথমবার স্পর্শ করার সাথে সাথেই তার সংক্ষিপ্ততম পথটি পাওয়া যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'breadth-first-search',
          def: {
            en: 'A graph traversal algorithm that explores all neighbor vertices at the present depth prior to moving on to the vertices at the next depth level.',
            bn: 'একটি গ্রাফ অতিক্রমণ অ্যালগরিদম যা পরবর্তী গভীরতার নোডে যাওয়ার আগে বর্তমান গভীরতার সমস্ত প্রতিবেশী নোড পরিদর্শন করে।'
          }
        },
        {
          term: 'mark-at-enqueue',
          def: {
            en: 'An algorithmic invariant requiring vertices to be marked visited the exact moment they enter the queue, preventing duplicate additions.',
            bn: 'এমন একটি অ্যালগরিদমিক নিয়ম যেখানে নোডগুলো কিউতে ঢোকার মুহূর্তে দর্শিত চিহ্নিত করা হয়, যা সদৃশ অন্তর্ভুক্তি রোধ করে।'
          }
        },
        {
          term: 'level-order-traversal',
          def: {
            en: 'Visiting every node on a given tier or depth of a tree or graph before descending to the next tier.',
            bn: 'পরবর্তী স্তরে নামার আগে ট্রি বা গ্রাফের একটি নির্দিষ্ট স্তর বা গভীরতার প্রতিটি নোড পরিদর্শন করা।'
          }
        },
        {
          term: 'shortest-path-unweighted',
          def: {
            en: 'The property that BFS discovers the minimum hop distance to any reachable vertex in an unweighted graph.',
            bn: 'ওজনহীন গ্রাফে বিএফএস অ্যালগরিদম যেকোনো শীর্ষবিন্দুতে পৌঁছানোর সর্বনিম্ন ধাপের পথ নিশ্চিত করার বৈশিষ্ট্য।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'queue'
    },
    {
      type: 'heading',
      id: 'mark-at-enqueue-invariant',
      text: {
        en: 'The Mark-at-Enqueue Invariant: Preventing Exponential Swamping',
        bn: 'এনকিউতেই চিহ্নিতকরণের নিয়ম: সূচকীয় বিস্ফোরণ রোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most dangerous bug in BFS implementations is marking nodes visited when dequeuing them instead of when enqueuing them. If three different nodes in the queue all share node D as a neighbor, all three will see node D as unvisited and push three duplicate copies of D into the queue. On dense graphs, this mistake causes the queue to explode exponentially, causing an Out-Of-Memory crash.',
        bn: 'বিএফএস বাস্তবায়নে সবচেয়ে মারাত্মক ভুল হলো ডিকিউ করার সময় নোডকে দর্শিত চিহ্নিত করা, এনকিউ করার সময় নয়। কিউতে থাকা তিনটি ভিন্ন নোডের সাধারণ প্রতিবেশী যদি নোড D হয়, তবে তিনজনেই D কে অপ্রদর্শিত দেখবে এবং D এর তিনটি সদৃশ কপি কিউতে ঢুকিয়ে দেবে। ঘন গ্রাফে এই ভুলের ফলে কিউয়ের আকার সূচকীয় হারে বেড়ে যায় এবং সিস্টেম মেমোরি শেষ হয়ে ক্র্যাশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The golden rule of BFS is: mark a node as visited the instant it enters the queue. This guarantees that each vertex is enqueued at most once, bounding the queue memory strictly to O(V) and total runtime to O(V + E) for V vertices and E edges.',
        bn: 'বিএফএসের সুবর্ণ নিয়ম হলো: কিউতে প্রবেশের মুহূর্তেই নোডটিকে দর্শিত চিহ্নিত করুন। এটি নিশ্চিত করে যে প্রতিটি শীর্ষবিন্দু সর্বোচ্চ একবারই কিউতে ঢুকবে, যা মেমোরি খরচ কঠোরভাবে O(V) এবং V শীর্ষবিন্দু ও E সংযোগের জন্য মোট সময় O(V + E) এ সীমাবদ্ধ রাখে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Marking Strategy', bn: 'চিহ্নিতকরণ কৌশল' },
        { en: 'Duplicate Enqueues', bn: 'সদৃশ এনকিউ সংখ্যা' },
        { en: 'Queue Memory Scale', bn: 'কিউ মেমোরির আকার' },
        { en: 'Algorithmic Safety', bn: 'অ্যালগরিদমের নিরাপত্তা' }
      ],
      rows: [
        [
          { en: 'Mark at Dequeue (Buggy)', bn: 'ডিকিউয়ের সময় চিহ্নিত (ত্রুটিযুক্ত)' },
          { en: 'Re-enqueued by every neighbor', bn: 'প্রতিটি প্রতিবেশী দ্বারা বারবার প্রবেশ' },
          { en: 'O(E) or exponential blowup', bn: 'O(E) বা সূচকীয় স্ফীতি' },
          { en: 'Crash on dense graphs', bn: 'ঘন গ্রাফে মেমোরি ক্র্যাশ' }
        ],
        [
          { en: 'Mark at Enqueue (Correct)', bn: 'এনকিউয়ের সময় চিহ্নিত (সঠিক)' },
          { en: 'Exactly 1 enqueue per vertex', bn: 'শীর্ষবিন্দু প্রতি ঠিক ১ বার প্রবেশ' },
          { en: 'Strictly bounded to O(V)', bn: 'কঠোরভাবে O(V) দ্বারা সীমাবদ্ধ' },
          { en: 'Safe linear runtime O(V + E)', bn: 'নিরাপদ রৈখিক সময় O(V + E)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'bfs-implementation',
      text: {
        en: 'Executable BFS Shortest Path and Level-Order Implementation',
        bn: 'শর্টেস্ট পাথ ও লেভেল-অর্ডার ট্রাভার্সালের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program performs a BFS traversal over an unweighted graph. It computes the level-order traversal, exact hop distances, and reconstructs the shortest path from start node A to target node F.',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি একটি ওজনহীন গ্রাফে বিএফএস ট্রাভার্সাল পরিচালনা করে। এটি লেভেল-অর্ডার পরিদর্শন, নিখুঁত ধাপ দূরত্ব এবং শুরুর নোড A থেকে গন্তব্য নোড F পর্যন্ত সংক্ষিপ্ততম পথটি তৈরি করে।'
      }
    },
    {
      type: 'code',
      code: `function bfsShortestPath(graph, start) {
  const queue = [start];
  const visited = new Set([start]); // Mark source at start
  const distance = { [start]: 0 };
  const parent = { [start]: null };
  const traversalOrder = [];

  while (queue.length > 0) {
    const node = queue.shift();
    traversalOrder.push(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // MARK AT ENQUEUE INVARIANT!
        distance[neighbor] = distance[node] + 1;
        parent[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }

  function getPathTo(target) {
    const path = [];
    let curr = target;
    while (curr !== null) {
      path.push(curr);
      curr = parent[curr];
    }
    return path.reverse();
  }

  return { traversalOrder, distance, getPathTo };
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

const res = bfsShortestPath(graph, 'A');

console.log('Traversal order:', res.traversalOrder.join(' -> '));
// Output: Traversal order: A -> B -> C -> D -> E -> F

console.log('Distance from A to D:', res.distance['D']);
// Output: Distance from A to D: 2

console.log('Distance from A to F:', res.distance['F']);
// Output: Distance from A to F: 2

console.log('Shortest path to F:', res.getPathTo('F').join(' -> '));
// Output: Shortest path to F: A -> C -> F`
    },
    {
      type: 'heading',
      id: 'bfs-vs-dfs-dijkstra',
      text: {
        en: 'Algorithmic Bridges: When to Use BFS, DFS, or Dijkstra',
        bn: 'অ্যালগরিদমের সেতু: কখন বিএফএস, ডিএফএস বা ডিকস্ট্রা ব্যবহার করবেন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the right graph traversal depends on your problem constraints. Use BFS with a FIFO Queue when finding the shortest path on unweighted graphs or computing level-by-level snapshots. Use DFS with a LIFO Stack when detecting cycles, generating mazes, or finding topological orderings on DAGs. If graph edges have varying positive weights, replace the FIFO queue with a Priority Queue to run Dijkstra algorithm.',
        bn: 'সঠিক গ্রাফ অ্যালগরিদম বেছে নেওয়া আপনার সমস্যার শর্তের ওপর নির্ভর করে। ওজনহীন গ্রাফে ক্ষুদ্রতম পথ খুঁজতে বা স্তরভিত্তিক ফলাফল পেতে ফিফো কিউসহ বিএফএস ব্যবহার করুন। গ্রাফে চক্র শনাক্তকরণ বা টপোলজিক্যাল সর্ট করতে লিফো স্ট্যাকসহ ডিএফএস ব্যবহার করুন। আর যদি গ্রাফের সংযোগগুলোতে ভিন্ন ভিন্ন ধনাত্মক ওজন থাকে, তবে সাধারণ কিউয়ের বদলে প্রায়োরিটি কিউ ব্যবহার করে ডিকস্ট্রা অ্যালগরিদম চালান।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Concentric ring traversal: BFS explores nodes layer-by-layer, visiting all distance L nodes before any distance L + 1 nodes.',
          bn: 'সমকেন্দ্রিক অন্বেষণ: বিএফএস স্তর অনুসারে ঘুরে থাকে, দূরত্ব L + ১ এর আগে দূরত্ব L এর সব নোড শেষ করে।'
        },
        {
          en: 'Unweighted shortest path: The first time BFS encounters a vertex, the path from the origin is mathematically guaranteed to be minimal.',
          bn: 'ওজনহীন ক্ষুদ্রতম পথ: বিএফএস কোনো শীর্ষে প্রথম পৌঁছানো মাত্রই তার প্রাপ্ত পথটি গাণিতিকভাবে সংক্ষিপ্ততম পথ হিসেবে নিশ্চিত হয়।'
        },
        {
          en: 'Mark at enqueue: Marking vertices the moment they are pushed into the queue prevents exponential duplicate memory bloat.',
          bn: 'এনকিউতে চিহ্নিতকরণ: কিউতে ঢোকার মুহূর্তেই নোড চিহ্নিত করলে সূচকীয় মেমোরি অপচয় ও ক্র্যাশ সম্পূর্ণরূপে রোধ হয়।'
        },
        {
          en: 'Linear complexity: With adjacency lists and the mark-at-enqueue invariant, BFS completes in strictly O(V + E) runtime.',
          bn: 'রৈখিক জটিলতা: অ্যাডজাসেন্সি লিস্ট এবং এনকিউ চিহ্নিতকরণের মাধ্যমে বিএফএস নিশ্চিতভাবে O(V + E) সময়ে সম্পন্ন হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bt-ex1',
      kind: 'mcq',
      topic: 'mark-at-enqueue-rationale',
      question: {
        en: 'What catastrophic failure occurs if a programmer marks a graph node as visited during dequeue instead of during enqueue in BFS?',
        bn: 'বিএফএস অ্যালগরিদমে কোনো প্রোগ্রামার যদি এনকিউ করার বদলে ডিকিউ করার সময় নোডকে দর্শিত চিহ্নিত করে তবে কী বিপর্যয় ঘটবে?'
      },
      options: [
        {
          en: 'Multiple queued neighbors will discover the same unvisited node, pushing duplicate copies into the queue and exploding memory consumption',
          bn: 'কিউতে থাকা একাধিক প্রতিবেশী একই নোডকে অপ্রদর্শিত দেখবে, ফলে কিউতে একাধিক সদৃশ কপি ঢুকে মেমোরি অস্বাভাবিকভাবে বেড়ে যাবে'
        },
        {
          en: 'The compiler will refuse to compile JavaScript files',
          bn: 'কম্পাইলার জাভাস্ক্রিপ্ট ফাইল কম্পাইল করতে অস্বীকৃতি জানাবে'
        },
        {
          en: 'The network router will invert its internal IP address table',
          bn: 'নেটওয়ার্ক রাউটার তার অভ্যন্তরীণ আইপি ঠিকানা টেবিল উল্টে দেবে'
        },
        {
          en: 'The graph will automatically delete all undirected edges',
          bn: 'গ্রাফটি স্বয়ংক্রিয়ভাবে তার সমস্ত দ্বিমুখী সংযোগ মুছে ফেলবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If nodes B and C both point to D, and neither has marked D yet, what happens when both B and C are processed?',
        bn: 'যদি B এবং C উভয় নোডই D এর সাথে যুক্ত থাকে এবং D চিহ্নিত না হয়, তবে B ও C প্রসেসের সময় কী ঘটবে?'
      },
      explanation: {
        en: 'Marking on dequeue leaves a window where unvisited neighbors are pushed redundantly by adjacent nodes, causing memory usage to surge to O(E).',
        bn: 'ডিকিউতে চিহ্নিত করলে একটি ফাঁক তৈরি হয় যেখানে প্রতিবেশীরা একই নোডকে বারবার কিউতে যোগ করে মেমোরি O(E) পর্যন্ত বাড়িয়ে দেয়।'
      }
    },
    {
      id: 'bt-ex2',
      kind: 'mcq',
      topic: 'bfs-time-complexity',
      question: {
        en: 'What is the asymptotic time complexity of Breadth-First Search on a graph with V vertices and E edges using an adjacency list?',
        bn: 'অ্যাডজাসেন্সি লিস্ট দিয়ে সংরক্ষিত V শীর্ষবিন্দু এবং E সংযোগের গ্রাফে ব্রেডথ-ফার্স্ট সার্চের সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(V + E)',
          bn: 'O(V + E)'
        },
        {
          en: 'O(V * E)',
          bn: 'O(V * E)'
        },
        {
          en: 'O(V^2 * E^2)',
          bn: 'O(V^2 * E^2)'
        },
        {
          en: 'O(log(V + E))',
          bn: 'O(log(V + E))'
        }
      ],
      answer: 0,
      hint: {
        en: 'Every vertex is enqueued once, and every edge list is traversed once.',
        bn: 'প্রতিটি শীর্ষবিন্দু একবার কিউতে ঢোকে এবং প্রতিটি সংযোগ একবার পরিদর্শন করা হয়।'
      },
      explanation: {
        en: 'Each vertex is processed once taking O(V) time, and all outgoing edges are inspected once taking O(E) time, resulting in O(V + E).',
        bn: 'প্রতিটি শীর্ষবিন্দু একবার প্রসেস হতে O(V) এবং সমস্ত সংযোগ পরীক্ষা করতে O(E) সময় লাগে, যা মোট O(V + E)।'
      }
    },
    {
      id: 'bt-ex3',
      kind: 'mcq',
      topic: 'data-structure-pairing',
      question: {
        en: 'Which pair correctly matches the traversal algorithm with its core auxiliary data structure?',
        bn: 'কোন জোড়াটি ট্রাভার্সাল অ্যালগরিদম এবং তার মূল সহায়ক ডেটা কাঠামোর সঠিক মিল প্রদর্শন করে?'
      },
      options: [
        {
          en: 'BFS uses a FIFO Queue, whereas DFS uses a LIFO Stack',
          bn: 'বিএফএস ফিফো কিউ ব্যবহার করে, অন্যদিকে ডিএফএস লিফো স্ট্যাক ব্যবহার করে'
        },
        {
          en: 'BFS uses a Hash Map, whereas DFS uses a Circular Buffer',
          bn: 'বিএফএস হ্যাশ ম্যাপ ব্যবহার করে, অন্যদিকে ডিএফএস সার্কুলার বাফার ব্যবহার করে'
        },
        {
          en: 'BFS uses a Binary Search Tree, whereas DFS uses a Red-Black Tree',
          bn: 'বিএফএস বাইনারি সার্চ ট্রি ব্যবহার করে, অন্যদিকে ডিএফএস রেড-ব্ল্যাক ট্রি ব্যবহার করে'
        },
        {
          en: 'Both BFS and DFS must exclusively use Doubly Linked Lists without pointers',
          bn: 'বিএফএস এবং ডিএফএস উভয়কেই পয়েন্টার ছাড়া ডাবল লিংকড লিস্ট ব্যবহার করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Breadth explores in order of arrival; Depth explores the newest branch first.',
        bn: 'প্রস্থ আগমনের ক্রমানুসারে অন্বেষণ করে; গভীরতা নতুন শাখায় আগে প্রবেশ করে।'
      },
      explanation: {
        en: 'BFS requires FIFO ordering (queue) to visit shallow nodes first. DFS requires LIFO ordering (stack or recursion) to plunge deeply.',
        bn: 'বিএফএসের কাছের নোড আগে দেখতে ফিফো (কিউ) প্রয়োজন। আর ডিএফএসের গভীরে প্রবেশ করতে লিফো (স্ট্যাক বা রিকার্শন) প্রয়োজন।'
      }
    }
  ],
  quiz: {
    id: 'bfs-tide-quiz',
    title: {
      en: 'Breadth-First Search and Graph Traversal Quiz',
      bn: 'ব্রেডথ-ফার্স্ট সার্চ এবং গ্রাফ ট্রাভার্সাল কুইজ'
    },
    questions: [
      {
        id: 'bt-q1',
        kind: 'mcq',
        topic: 'shortest-path-condition',
        question: {
          en: 'Under which condition does BFS guarantee finding the shortest path between two vertices?',
          bn: 'কোন শর্তে বিএফএস দুটি শীর্ষবিন্দুর মধ্যে সংক্ষিপ্ততম পথ খুঁজে পাওয়ার নিশ্চয়তা দেয়?'
        },
        options: [
          {
            en: 'In unweighted graphs or graphs where every edge has identical uniform positive weight',
            bn: 'ওজনহীন গ্রাফে অথবা এমন গ্রাফে যেখানে প্রতিটি সংযোগের ওজন সমান ধনাত্মক'
          },
          {
            en: 'Only in graphs with negative weight cycles',
            bn: 'কেবল ঋণাত্মক ওজনের চক্রযুক্ত গ্রাফে'
          },
          {
            en: 'Only when the graph is completely disconnected into isolated islands',
            bn: 'কেবল যখন গ্রাফটি বিচ্ছিন্ন দ্বীপে বিভক্ত থাকে'
          },
          {
            en: 'Only when all graph vertices are prime numbers',
            bn: 'কেবল যখন সমস্ত শীর্ষবিন্দু মৌলিক সংখ্যা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If one hop costs 1 and another costs 100, can simple hop-counting find the cheapest path?',
          bn: 'একটি ধাপে খরচ ১ এবং অন্যটিতে ১০০ হলে সাধারণ ধাপ গণনা কি সবচেয়ে সস্তা পথ দিতে পারবে?'
        },
        explanation: {
          en: 'Because BFS expands outward hop-by-hop, the path with the fewest hops is found first. This equals the shortest path when all edge weights are uniform.',
          bn: 'যেহেতু বিএফএস ধাপ অনুসারে বিস্তার লাভ করে, তাই সর্বনিম্ন ধাপের পথটি আগে পাওয়া যায়, যা সমান ওজনের গ্রাফে সংক্ষিপ্ততম পথ।'
        }
      },
      {
        id: 'bt-q2',
        kind: 'mcq',
        topic: 'level-order-tree',
        question: {
          en: 'When running level-order traversal on a binary tree, how does a queue ensure nodes at depth d are processed before nodes at depth d + 1?',
          bn: 'একটি বাইনারি ট্রিতে লেভেল-অর্ডার ট্রাভার্সাল চালানোর সময় একটি কিউ কীভাবে নিশ্চিত করে যে গভীরতা d এর নোডগুলো গভীরতা d + ১ এর নোডের আগে প্রসেস হবে?'
        },
        options: [
          {
            en: 'Children at depth d + 1 are enqueued at the back of the queue, while remaining depth d nodes are dequeued from the front',
            bn: 'গভীরতা d + ১ এর চাইল্ড নোডগুলো কিউয়ের পেছনে ঢোকে, অন্যদিকে গভীরতা d এর বাকি নোডগুলো সামনে থেকে বের হতে থাকে'
          },
          {
            en: 'The tree nodes are deleted from RAM as soon as they are read',
            bn: 'ট্রি নোডগুলো পড়ার সাথে সাথে র্যাম থেকে মুছে ফেলা হয়'
          },
          {
            en: 'The CPU pauses execution for 100 milliseconds between tree levels',
            bn: 'সিপিইউ প্রতিটি ট্রি স্তরের মাঝে ১০০ মিলি সেকেন্ডের জন্য কাজ থামিয়ে রাখে'
          },
          {
            en: 'The garbage collector reorders heap objects alphabetically',
            bn: 'গার্বেজ কালেক্টর হিপ অবজেক্টগুলোকে বর্ণানুক্রমিকভাবে সাজিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'FIFO order guarantees earlier arrivals exit before later arrivals.',
          bn: 'ফিফো ক্রম নিশ্চিত করে যে আগে আসা উপাদান পরে আসা উপাদানের আগে বের হবে।'
        },
        explanation: {
          en: 'Because all depth d nodes entered the queue before any depth d + 1 children were spawned, FIFO ordering serves all depth d nodes first.',
          bn: 'যেহেতু গভীরতা d এর সমস্ত নোড আগে ঢুকেছিল কোনো d + ১ স্তরের সন্তান আসার আগে, তাই ফিফো নিয়মে তারাই আগে ডিকিউ হয়।'
        }
      },
      {
        id: 'bt-q3',
        kind: 'mcq',
        topic: 'weighted-edges-alternative',
        question: {
          en: 'If a road network has varying positive distances between cities, which algorithm replaces BFS to find the shortest route?',
          bn: 'যদি একটি সড়ক নেটওয়ার্কে শহরগুলোর মধ্যে ভিন্ন ভিন্ন ধনাত্মক দূরত্ব থাকে, তবে সংক্ষিপ্ততম পথ খুঁজতে বিএফএসের পরিবর্তে কোন অ্যালগরিদম ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Dijkstra algorithm utilizing a Min-Priority Queue',
            bn: 'মিন-প্রায়োরিটি কিউ ব্যবহার করে ডিকস্ট্রা অ্যালগরিদম'
          },
          {
            en: 'Bubble Sort on string arrays',
            bn: 'স্ট্রিং অ্যারের ওপর বাবল সর্ট'
          },
          {
            en: 'Linear regression statistical models',
            bn: 'লিনিয়ার রিগ্রেশন পরিসংখ্যান মডেল'
          },
          {
            en: 'CSS flexbox box-sizing algorithms',
            bn: 'সিএসএস ফ্লেক্সবক্স অ্যালগরিদম'
          }
        ],
        answer: 0,
        hint: {
          en: 'You need an algorithm that prioritizes the node with the lowest cumulative distance.',
          bn: 'আপনার এমন একটি অ্যালগরিদম দরকার যা সর্বনিম্ন মোট দূরত্বের নোডকে অগ্রাধিকার দেয়।'
        },
        explanation: {
          en: 'When edges carry non-uniform weights, Dijkstra algorithm uses a priority queue to explore vertices in order of accumulated distance.',
          bn: 'সংযোগগুলোতে অসমান ওজন থাকলে ডিকস্ট্রা অ্যালগরিদম প্রায়োরিটি কিউ ব্যবহার করে মোট দূরত্বের ক্রমানুসারে শীর্ষবিন্দু অন্বেষণ করে।'
        }
      },
      {
        id: 'bt-q4',
        kind: 'mcq',
        topic: 'queue-space-complexity',
        question: {
          en: 'What is the maximum space complexity consumed by the BFS queue during traversal of a tree with maximum width W?',
          bn: 'সর্বোচ্চ W প্রস্থের একটি ট্রি ট্রাভার্সাল করার সময় বিএফএস কিউ সর্বোচ্চ কী পরিমাণ মেমোরি (স্পেস জটিলতা) ব্যবহার করে?'
        },
        options: [
          {
            en: 'O(W), proportional to the maximum number of nodes on any single level',
            bn: 'O(W), যেকোনো একক স্তরে থাকা সর্বোচ্চ নোড সংখ্যার সমানুপাতিক'
          },
          {
            en: 'O(1) strictly zero memory',
            bn: 'O(1) সম্পূর্ণ শূন্য মেমোরি'
          },
          {
            en: 'O(W!) factorial memory scale',
            bn: 'O(W!) ফ্যাক্টোরিয়াল মেমোরি'
          },
          {
            en: 'O(2^W * W^2) exponential power',
            bn: 'O(2^W * W^2) সূচকীয় মেমোরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'At most, the queue will hold all the nodes of the widest level.',
          bn: 'সর্বোচ্চ অবস্থায় কিউতে সবচেয়ে প্রশস্ত স্তরের সমস্ত নোড জমা থাকতে পারে।'
        },
        explanation: {
          en: 'During the transition between levels, the queue holds at most the nodes of the current level plus their children, bounded by O(W).',
          bn: 'এক স্তর থেকে অন্য স্তরে যাওয়ার সময় কিউতে সর্বোচ্চ বর্তমান স্তর ও তাদের সন্তানরা থাকে, যা O(W) দ্বারা সীমাবদ্ধ।'
        }
      }
    ]
  }
};
