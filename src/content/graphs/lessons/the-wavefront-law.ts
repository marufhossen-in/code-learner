import type { Lesson } from '../../../lib/types';

export const wavefrontLawLesson: Lesson = {
  slug: 'the-wavefront-law',
  tech: 'graphs',
  title: {
    en: 'The Wavefront Law — Breadth-First Search and Shortest Hops',
    bn: 'তরঙ্গমুখের বিধান: ব্রেডথ-ফার্স্ট সার্চ এবং স্বল্পতম পথ'
  },
  summary: {
    en: 'Breadth-First Search (BFS) navigates graphs by expanding outward in concentric distance layers using a FIFO queue. Because vertices are visited in non-decreasing order of hop count, the first time BFS discovers a vertex, it has found the provably shortest path in an unweighted graph. We explore the queue invariant, path reconstruction via parent pointers, multi-source BFS for nearest-facility queries, and bipartite testing via two-coloring in optimal O(V + E) time.',
    bn: 'ব্রেডথ-ফার্স্ট সার্চ (BFS) একটি FIFO কিউ ব্যবহার করে সমকেন্দ্রিক স্তরে বাইরের দিকে ছড়িয়ে পড়ে গ্রাফের নোডগুলো পরিদর্শন করে। যেহেতু নোডগুলো লাফ-সংখ্যার অবরোহী ক্রমে দেখা হয়, তাই অভারহীন গ্রাফে কোনো নোডকে প্রথমবার দেখার সাথে সাথেই তার সর্বনিম্ন দূরত্বের পথটি চূড়ান্তভাবে নিশ্চিত হয়। আমরা কিউ ইনভেরিয়েন্ট, প্যারেন্ট পয়েন্টারের সাহায্যে পথ পুনর্গঠন, মাল্টি-সোর্স BFS এবং দুই রঙের সাহায্যে বাইপার্টাইট গ্রাফ পরীক্ষা O(V + E) সময়ে বিশ্লেষণ করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-plunge-order',
    tech: 'graphs',
    title: {
      en: 'The Plunge Order — Depth-First Search and Stack Traversal',
      bn: 'গভীরতার ক্রম: ডেপথ-ফার্স্ট সার্চ এবং স্ট্যাক ট্রাভার্সাল'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'wavefront-mechanics',
      text: {
        en: 'The FIFO Invariant: Concentric Distance Expansions',
        bn: 'FIFO নীতি: সমকেন্দ্রিক দূরত্বের প্রসারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you drop a stone into still water, circular ripples expand outward uniformly across every direction. Breadth-First Search operates on this exact physical principle. Starting at source vertex S at distance 0, it visits all immediate 1-hop neighbors, then all 2-hop neighbors, steadily advancing across expanding wavefronts.',
        bn: 'যখন আপনি শান্ত জলে একটি পাথর ফেলেন, তখন বৃত্তাকার তরঙ্গ সবদিকে সমানভাবে ছড়িয়ে পড়ে। ব্রেডথ-ফার্স্ট সার্চ ঠিক এই প্রাকৃতিক নীতিতে কাজ করে। দূরত্ব ০ তে উৎস S থেকে শুরু করে এটি প্রথমে সব প্রত্যক্ষ ১-লাফের প্রতিবেশীদের দেখে, তারপর ২-লাফের প্রতিবেশীদের দেখে এবং এভাবে তরঙ্গাকারে সামনে এগোয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This geometric order is enforced strictly by a First-In First-Out (FIFO) queue. Because all nodes at distance k enter the queue before any node at distance k + 1, no later node can ever cut the line. The first time you reach any vertex, that arrival represents the shortest possible hop count.',
        bn: 'এই জ্যামিতিক ক্রমটি কঠোরভাবে একটি ফার্স্ট-ইন ফার্স্ট-আউট (FIFO) কিউ দ্বারা নিয়ন্ত্রিত হয়। যেহেতু দূরত্ব k এর সমস্ত নোড দূরত্ব k + ১ এর নোডগুলোর আগেই কিউতে ঢোকে, তাই পেছনের কোনো নোড সামনে আসতে পারে না। কোনো নোডে প্রথমবার পৌঁছানোর পথটিই তার নিশ্চিত সর্বনিম্ন দূরত্বের পথ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'breadth-first-search',
          def: {
            en: 'A graph traversal algorithm that explores all neighbor vertices at the present depth level before moving on to vertices at the next depth level.',
            bn: 'গ্রাফ ট্রাভার্সালের এমন একটি পদ্ধতি যা পরবর্তী স্তরে যাওয়ার আগে বর্তমান গভীরতার সমস্ত প্রতিবেশীকে ঘুরে দেখে।'
          }
        },
        {
          term: 'wavefront',
          def: {
            en: 'The active boundary of newly discovered vertices currently residing in the FIFO queue waiting to be processed.',
            bn: 'বর্তমানে FIFO কিউতে অবস্থানকারী সদ্য আবিষ্কৃত নোডগুলোর সক্রিয় সীমানা যা প্রসেস হওয়ার অপেক্ষায় থাকে।'
          }
        },
        {
          term: 'shortest-path-tree',
          def: {
            en: 'A spanning tree rooted at source S where every tree path from S to v represents the shortest path in the unweighted graph.',
            bn: 'উৎস S থেকে তৈরি এমন একটি স্প্যানিং ট্রি যার প্রতিটি শাখা গ্রাফের সর্বনিম্ন দূরত্বের পথ নির্দেশ করে।'
          }
        },
        {
          term: 'multi-source-bfs',
          def: {
            en: 'A technique where multiple starting nodes are enqueued simultaneously at distance 0 to compute shortest distances to the nearest source.',
            bn: 'একসাথে একাধিক উৎস নোডকে দূরত্ব ০ হিসেবে কিউতে ঢুকিয়ে যেকোনো নিকটবর্তী উৎসের সর্বনিম্ন দূরত্ব বের করার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'bfs-applications-table',
      text: {
        en: 'Architectural Comparison: BFS Variations and Production Use Cases',
        bn: 'কাঠামোগত তুলনা: BFS এর রূপভেদ ও বাস্তব প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Breadth-First Search adapts directly to several classic network routing and classification challenges. Single-source BFS finds shortest paths from one origin. Multi-source BFS computes nearest-facility distances across millions of locations in a single pass. Two-color BFS validates bipartite graph partitions.',
        bn: 'ব্রেডথ-ফার্স্ট সার্চ বিভিন্ন বাস্তব নেটওয়ার্ক রাউটিং ও শ্রেণিবিভাগের সমস্যা সমাধানে ব্যবহৃত হয়। সিঙ্গেল-সোর্স BFS একটি উৎস থেকে সর্বনিম্ন পথ বের করে। মাল্টি-সোর্স BFS লক্ষ লক্ষ স্থানের মধ্যে সবচেয়ে কাছের সেবা কেন্দ্রের দূরত্ব বের করে। আর দুই রঙের BFS বাইপার্টাইট গ্রাফের সত্যতা যাচাই করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'BFS Variation', bn: 'BFS এর রূপভেদ' },
        { en: 'Queue Initialization', bn: 'কিউ শুরুর প্রস্তুতি' },
        { en: 'Primary Output', bn: 'মূল আউটপুট' },
        { en: 'Production Application', bn: 'বাস্তব ক্ষেত্রে ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Single-Source BFS', bn: 'সিঙ্গেল-সোর্স BFS' },
          { en: 'Enqueue 1 source at distance 0', bn: '১টি উৎস দূরত্ব ০ তে কিউতে পুশ' },
          { en: 'Shortest path to all reachable nodes', bn: 'সব নোডের সর্বনিম্ন দূরত্ব' },
          { en: 'Social network degrees of separation', bn: 'সামাজিক যোগাযোগ মাধ্যমের বন্ধুত্বের দূরত্ব' }
        ],
        [
          { en: 'Multi-Source BFS', bn: 'মাল্টি-সোর্স BFS' },
          { en: 'Enqueue k sources at distance 0', bn: 'k টি উৎস দূরত্ব ০ তে কিউতে পুশ' },
          { en: 'Distance to the nearest source', bn: 'নিকটতম উৎসের সর্বনিম্ন দূরত্ব' },
          { en: 'Nearest warehouse delivery routing', bn: 'নিকটস্থ ওয়্যারহাউস থেকে পণ্য ডেলিভারি' }
        ],
        [
          { en: 'Two-Color Bipartite BFS', bn: 'দুই-রঙের বাইপার্টাইট BFS' },
          { en: 'Alternate colors 0 and 1 per layer', bn: 'প্রতি স্তরে ০ ও ১ রঙ অদলবদল' },
          { en: 'Valid 2-coloring or odd cycle proof', bn: 'সঠিক ২-রঙ বা বিজোড় চক্রের প্রমাণ' },
          { en: 'Job applicant to company matching', bn: 'চাকরিপ্রার্থী ও প্রতিষ্ঠানের পারস্পরিক ম্যাচিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-bfs-code',
      text: {
        en: 'Executable BFS Shortest Path Implementation',
        bn: 'বিএফএস স্বল্পতম পথ ও ব্যাকট্র্যাকিংয়ের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs an unweighted graph and executes BFS from vertex A to target vertex F. Notice how tracking parent pointers allows backtracking the exact 3-hop shortest path A -> B -> D -> F.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি অভারহীন গ্রাফ তৈরি করে এবং শীর্ষবিন্দু A থেকে গন্তব্য F পর্যন্ত BFS চালায়। লক্ষ্য করুন কীভাবে প্যারেন্ট পয়েন্টার ট্র্যাক করে A -> B -> D -> F এর ৩-লাফের নিখুঁত স্বল্পতম পথটি বের করা যায়।'
      }
    },
    {
      type: 'code',
      code: `class BFSShortestPath {
  constructor() {
    this.adj = new Map();
  }

  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u).push(v);
    this.adj.get(v).push(u);
  }

  findShortestPath(source, target) {
    const dist = new Map();
    const parent = new Map();
    const queue = [source];

    dist.set(source, 0);

    while (queue.length > 0) {
      const curr = queue.shift();
      if (curr === target) break;

      for (const neighbor of this.adj.get(curr) || []) {
        if (!dist.has(neighbor)) {
          dist.set(neighbor, dist.get(curr) + 1);
          parent.set(neighbor, curr);
          queue.push(neighbor);
        }
      }
    }

    if (!dist.has(target)) return null;

    const path = [];
    let step = target;
    while (step !== undefined) {
      path.push(step);
      step = parent.get(step);
    }
    return { distance: dist.get(target), path: path.reverse() };
  }
}

const g = new BFSShortestPath();
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

const result = g.findShortestPath('A', 'F');
console.log('Shortest Distance A -> F:', result.distance);
// Output: Shortest Distance A -> F: 3
console.log('Reconstructed Shortest Path:', result.path.join(' -> '));
// Output: Reconstructed Shortest Path: A -> B -> D -> F`
    },
    {
      type: 'heading',
      id: 'unweighted-constraint',
      text: {
        en: 'The Unweighted Limitation: Why BFS Fails on Weighted Edges',
        bn: 'অভারহীনতার সীমাবদ্ধতা: ওজনযুক্ত গ্রাফে BFS কেন ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The mathematical guarantee that BFS discovers shortest paths holds exclusively on unweighted graphs where every edge costs 1 unit. If an edge from A to B has weight 10, but an alternate path A -> C -> B has weights 1 + 1 = 2, BFS will greedily choose the single-hop edge (cost 10) first! For graphs with arbitrary edge costs, Dijkstra’s priority queue algorithm is required.',
        bn: 'বিএফএস সর্বনিম্ন পথ খুঁজে দেবে এই গাণিতিক নিশ্চয়তা কেবল তখনই খাটে যখন গ্রাফের প্রতিটি ধারের ওজন সমান ১ একক থাকে। যদি A থেকে B এর সরাসরি ধারের ওজন ১০ হয়, কিন্তু বিকল্প পথ A -> C -> B এর ওজন ১ + ১ = ২ হয়, তবে BFS মাত্র ১টি লাফ দেখে ভুলবশত ১০ ওজনের পথটিকেই বেছে নেবে! ভিন্ন ভিন্ন ওজনের গ্রাফে সর্বনিম্ন পথ খুঁজতে ডাইকস্ট্রার প্রায়োরিটি কিউ অ্যালগরিদম প্রয়োজন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Shortest path optimality: BFS guarantees finding the minimum-hop path between any two vertices in an unweighted graph.',
          bn: 'স্বল্পতম পথের নিশ্চয়তা: অভারহীন গ্রাফে BFS যেকোনো দুটি শীর্ষবিন্দুর মাঝে সর্বনিম্ন লাফের পথ খুঁজে দেওয়ার নিশ্চয়তা দেয়।'
        },
        {
          en: 'FIFO order discipline: Processing nodes in arrival order ensures that level k is exhausted completely before level k + 1 begins.',
          bn: 'FIFO শৃঙ্খলার নিয়ম: আগমনের ক্রমানুসারে প্রসেস করায় স্তর k সম্পূর্ণ শেষ হওয়ার পরই কেবল স্তর k + ১ শুরু হয়।'
        },
        {
          en: 'Multi-source expansion: Initializing the queue with multiple origin nodes computes nearest-neighbor distances in a single traversal.',
          bn: 'মাল্টি-সোর্স বিস্তার: একসাথে একাধিক উৎস কিউতে রেখে মাত্র একটি ট্রাভার্সালেই নিকটতম প্রতিবেশীর দূরত্ব পাওয়া যায়।'
        },
        {
          en: 'Unweighted prerequisite: BFS fails to find shortest paths when edges possess unequal weights, demanding Dijkstra instead.',
          bn: 'ওজনের সীমাবদ্ধতা: ধারের ওজন অসমান হলে BFS সর্বনিম্ন পথ দিতে পারে না, যার জন্য ডাইকস্ট্রা ব্যবহার করতে হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'wl-ex1',
      kind: 'mcq',
      topic: 'bfs-shortest-path-guarantee',
      question: {
        en: 'Why does Breadth-First Search guarantee the shortest path on an unweighted graph?',
        bn: 'একটি অভারহীন গ্রাফে ব্রেডথ-ফার্স্ট সার্চ কেন সর্বনিম্ন পথের নিশ্চয়তা দেয়?'
      },
      options: [
        {
          en: 'Because the FIFO queue visits all vertices at hop-distance k before visiting any vertex at hop-distance k + 1',
          bn: 'কারণ FIFO কিউ k + ১ দূরত্বের নোড দেখার আগেই k দূরত্বের সমস্ত নোড পরিদর্শন সম্পন্ন করে'
        },
        {
          en: 'Because it uses a min-heap to sort edge weights',
          bn: 'কারণ এটি ধারের ওজন সাজাতে একটি মিন-হিপ ব্যবহার করে'
        },
        {
          en: 'Because it runs the traversal in reverse from the destination',
          bn: 'কারণ এটি গন্তব্য থেকে উল্টো দিকে ট্রাভার্সাল চালায়'
        },
        {
          en: 'Because all graphs are naturally balanced trees',
          bn: 'কারণ সমস্ত গ্রাফ প্রাকৃতিকভাবেই ভারসাম্যপূর্ণ ট্রি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a route with 3 hops be discovered before a route with 2 hops under strict FIFO queuing?',
        bn: 'কঠোর FIFO নিয়মে ৩ লাফের কোনো পথ কি ২ লাফের পথের আগে আবিষ্কৃত হতে পারে?'
      },
      explanation: {
        en: 'FIFO order ensures distance monotonically increases with queue service, guaranteeing that the first arrival is the shortest route.',
        bn: 'FIFO নিয়ম নিশ্চিত করে যে দূরত্বের মান ক্রমান্বয়ে বৃদ্ধি পাবে, যার ফলে প্রথমবার পৌঁছানো পথটিই সর্বনিম্ন পথ হয়।'
      }
    },
    {
      id: 'wl-ex2',
      kind: 'mcq',
      topic: 'multi-source-bfs-efficiency',
      question: {
        en: 'How does Multi-Source BFS determine the distance from every house in a city to the nearest fire station?',
        bn: 'মাল্টি-সোর্স BFS কীভাবে একটি শহরের প্রতিটি বাড়ি থেকে সবচেয়ে কাছের ফায়ার স্টেশনের দূরত্ব বের করে?'
      },
      options: [
        {
          en: 'Push all fire stations into the queue simultaneously at distance 0 and run a single standard BFS traversal in O(V + E) time',
          bn: 'সমস্ত ফায়ার স্টেশনকে একসাথে দূরত্ব ০ দিয়ে কিউতে পুশ করে মাত্র একবার O(V + E) সময়ে সাধারণ BFS চালানো হয়'
        },
        {
          en: 'Run separate BFS traversals from every individual house, taking O(V * (V + E)) time',
          bn: 'প্রতিটি বাড়ি থেকে আলাদা আলাদা BFS চালিয়ে O(V * (V + E)) সময় নষ্ট করা হয়'
        },
        {
          en: 'Sort the houses by their postal codes',
          bn: 'বাড়িগুলোকে তাদের পোস্টাল কোড অনুসারে সাজানো হয়'
        },
        {
          en: 'Delete all roads that have odd lengths',
          bn: 'বিজোড় দৈর্ঘ্যের সমস্ত রাস্তা মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If all fire stations start expanding ripples at the same second, which fire station reaches each house first?',
        bn: 'সব ফায়ার স্টেশন যদি একই সেকেন্ডে তরঙ্গ ছড়াতে শুরু করে, তবে প্রতিটি বাড়িতে কোন স্টেশন আগে পৌঁছাবে?'
      },
      explanation: {
        en: 'Seeding all sources together allows their wavefronts to expand concurrently, labeling each vertex with its nearest source in one pass.',
        bn: 'সমস্ত উৎস একসাথে শুরু করায় তাদের তরঙ্গগুলো একই সাথে ছড়ায় এবং এক পাসেই প্রতিটি নোড নিকটতম উৎসের দূরত্ব পেয়ে যায়।'
      }
    },
    {
      id: 'wl-ex3',
      kind: 'mcq',
      topic: 'bfs-space-complexity',
      question: {
        en: 'In the worst case, what is the maximum number of vertices held in the FIFO queue during a BFS traversal of graph G = (V, E)?',
        bn: 'সবচেয়ে খারাপ ক্ষেত্রে G = (V, E) গ্রাফের BFS ট্রাভার্সাল চলাকালে FIFO কিউতে সর্বোচ্চ কতটি নোড জমা হতে পারে?'
      },
      options: [
        {
          en: 'O(V) vertices, which occurs in a star graph where the center node connects to all other V - 1 vertices',
          bn: 'O(V) নোড, যা একটি স্টার গ্রাফে ঘটে যেখানে কেন্দ্রীয় নোডটি অন্য সব V - ১ নোডের সাথে যুক্ত থাকে'
        },
        {
          en: 'O(1) vertices always',
          bn: 'সর্বদা O(1) নোড'
        },
        {
          en: 'O(V^3) vertices',
          bn: 'O(V^3) নোড'
        },
        {
          en: 'Zero vertices',
          bn: 'শূন্য নোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a root node connects to 1000 leaf nodes in layer 1, how many nodes enter the queue after popping the root?',
        bn: 'রুট নোড যদি ১ম স্তরের ১০০০টি পাতার সাথে যুক্ত থাকে, তবে রুট পপ করার পর কিউতে কয়টি নোড ঢুকবে?'
      },
      explanation: {
        en: 'In a wide graph where one vertex links to all other vertices, the entire rest of the graph enters the queue, bounding space to O(V).',
        bn: 'একটি বিস্তৃত গ্রাফে যেখানে একটি নোড বাকি সব নোডের সাথে যুক্ত থাকে, সেখানে বাকি সব নোড একসাথেই কিউতে ঢোকে, ফলে স্থান জটিলতা O(V) হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-wavefront-law-quiz',
    title: {
      en: 'Breadth-First Search and Wavefront Mechanics Quiz',
      bn: 'ব্রেডথ-ফার্স্ট সার্চ এবং তরঙ্গমুখ মেকানিক্স কুইজ'
    },
    questions: [
      {
        id: 'wl-q1',
        kind: 'mcq',
        topic: 'bipartite-odd-cycle-detection',
        question: {
          en: 'During a two-color BFS bipartite test, what does encountering an edge between two vertices in the same distance layer prove?',
          bn: 'দুই রঙের BFS বাইপার্টাইট পরীক্ষায় একই দূরত্বের স্তরে থাকা দুটি নোডের মাঝে একটি ধার দেখতে পেলে তা কী প্রমাণ করে?'
        },
        options: [
          {
            en: 'The graph contains an odd-length cycle and is therefore NOT bipartite',
            bn: 'গ্রাফটিতে একটি বিজোড় দৈর্ঘ্যের চক্র রয়েছে এবং তাই এটি বাইপার্টাইট নয়'
          },
          {
            en: 'The graph is an AVL tree',
            bn: 'গ্রাফটি একটি এভিএল ট্রি'
          },
          {
            en: 'The graph contains no edges',
            bn: 'গ্রাফে কোনো ধার নেই'
          },
          {
            en: 'The graph has exactly 0 vertices',
            bn: 'গ্রাফে ঠিক ০টি শীর্ষবিন্দু রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If both endpoints of an edge share the same color (same layer parity), can adjacent nodes have alternating colors?',
          bn: 'একটি ধারের দুই প্রান্তের নোডের রঙ যদি একই হয়, তবে কি পাশাপাশি থাকা নোডের রঙ ভিন্ন রাখা সম্ভব?'
        },
        explanation: {
          en: 'An edge between vertices in the same BFS layer closes an odd cycle, violating the bipartite definition.',
          bn: 'একই BFS স্তরের দুটি নোডের মধ্যকার ধার একটি বিজোড় চক্র তৈরি করে, যা বাইপার্টাইট গ্রাফের শর্ত ভঙ্গ করে।'
        }
      },
      {
        id: 'wl-q2',
        kind: 'mcq',
        topic: 'bfs-weighted-graph-failure',
        question: {
          en: 'Why does standard BFS produce incorrect shortest path distances on a graph with arbitrary positive edge weights?',
          bn: 'বিভিন্ন ধনাত্মক ওজনের গ্রাফে সাধারণ BFS কেন সঠিক সর্বনিম্ন দূরত্ব দিতে ব্যর্থ হয়?'
        },
        options: [
          {
            en: 'BFS minimizes the number of edges (hop count), but a path with fewer hops can have a larger total weight than a path with more hops',
            bn: 'BFS ধারের সংখ্যা বা লাফ কমায়, কিন্তু কম লাফের একটি পথের মোট ওজন বেশি লাফের পথের চেয়ে অনেক বেশি হতে পারে'
          },
          {
            en: 'Because queues cannot store floating point values',
            bn: 'কারণ কিউ দশমিক সংখ্যা সংরক্ষণ করতে পারে না'
          },
          {
            en: 'Because JavaScript arrays crash on numbers greater than 10',
            bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে ১০ এর বেশি সংখ্যায় ক্র্যাশ করে'
          },
          {
            en: 'Because BFS deletes edge weights automatically',
            bn: 'কারণ BFS স্বয়ংক্রিয়ভাবে ধারের ওজন মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare 1 hop of weight 10 against 2 hops of weight 1 each (total weight 2).',
          bn: '১০ ওজনের ১টি লাফের সাথে ১ করে ২টি লাফের (মোট ওজন ২) তুলনা করুন।'
        },
        explanation: {
          en: 'BFS assumes every edge has identical cost 1. When weights vary, hop distance no longer correlates with lowest cumulative cost.',
          bn: 'BFS ধরে নেয় প্রতিটি ধারের খরচ সমান ১। কিন্তু ওজন ভিন্ন হলে লাফের সংখ্যা সর্বনিম্ন মোট খরচের সাথে মিলে না।'
        }
      },
      {
        id: 'wl-q3',
        kind: 'mcq',
        topic: 'path-reconstruction-mechanism',
        question: {
          en: 'How does an algorithm reconstruct the exact sequence of vertices along the shortest path after BFS terminates?',
          bn: 'BFS শেষ হওয়ার পর অ্যালগরিদম কীভাবে সর্বনিম্ন পথের শীর্ষবিন্দুগুলোর সঠিক ক্রমটি পুনর্গঠন করে?'
        },
        options: [
          {
            en: 'Start at the target vertex and follow recorded `parent` pointers backwards until reaching the source, then reverse the collected path',
            bn: 'গন্তব্য নোড থেকে শুরু করে রেকর্ড করা `parent` পয়েন্টার ধরে পেছনের দিকে উৎসে ফিরে যান, তারপর সংগৃহীত পথটিকে উল্টে দিন'
          },
          {
            en: 'Re-run BFS from every vertex in the graph',
            bn: 'গ্রাফের প্রতিটি নোড থেকে পুনরায় BFS চালান'
          },
          {
            en: 'Sort all vertices by their degree in descending order',
            bn: 'সমস্ত নোডকে তাদের ডিগ্রির ক্রমানুসারে সাজান'
          },
          {
            en: 'Pick random edges until the target is reached',
            bn: 'গন্তব্যে না পৌঁছানো পর্যন্ত এলোমেলো ধার পছন্দ করুন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each discovered node recorded who discovered it (`parent[v] = u`).',
          bn: 'প্রতিটি আবিষ্কৃত নোড লিখে রেখেছিল তাকে কে আবিষ্কার করেছে (`parent[v] = u`)।'
        },
        explanation: {
          en: 'Backtracking from target to source via parent pointers retraces the unique tree branch in the Shortest-Path Tree in O(length) time.',
          bn: 'প্যারেন্ট পয়েন্টার ধরে গন্তব্য থেকে উৎসে ফিরে এলে O(length) সময়ে সর্বনিম্ন পথের সঠিক শাখাটি পাওয়া যায়।'
        }
      },
      {
        id: 'wl-q4',
        kind: 'mcq',
        topic: 'bfs-total-time-complexity',
        question: {
          en: 'What is the time complexity of Breadth-First Search on a graph with V vertices and E edges represented as an Adjacency List?',
          bn: 'অ্যাজেসেন্সি লিস্টে সংরক্ষিত V শীর্ষবিন্দু এবং E ধার বিশিষ্ট গ্রাফে ব্রেডথ-ফার্স্ট সার্চের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(V + E) time, because every vertex enters the queue once and every edge is traversed once per endpoint',
            bn: 'O(V + E) সময়, কারণ প্রতিটি নোড কিউতে একবার ঢোকে এবং প্রতিটি ধার প্রান্তপ্রতি একবার করে দেখা হয়'
          },
          {
            en: 'O(V^2) time always',
            bn: 'সর্বদা O(V^2) সময়'
          },
          {
            en: 'O(log V) time',
            bn: 'O(log V) সময়'
          },
          {
            en: 'O(E^2) time',
            bn: 'O(E^2) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each vertex is enqueued and dequeued once: O(V). The inner loop scans all adjacency lists: sum of degrees = 2E.',
          bn: 'প্রতিটি নোড একবার কিউতে ঢোকে ও বের হয়: O(V)। ভেতরের লুপ সব প্রতিবেশীর তালিকা দেখে: ডিগ্রির যোগফল = ২E।'
        },
        explanation: {
          en: 'Every vertex is pushed once, and every edge is examined once per endpoint, yielding deterministic O(V + E) linear runtime.',
          bn: 'প্রতিটি নোড একবার পুশ হয় এবং প্রতিটি ধার প্রান্তপ্রতি একবার করে মোট দুইবার দেখা হয়, ফলে মোট সময় O(V + E) হয়।'
        }
      }
    ]
  }
};
