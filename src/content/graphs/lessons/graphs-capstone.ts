import type { Lesson } from '../../../lib/types';

export const graphsCapstoneLesson: Lesson = {
  slug: 'graphs-capstone',
  tech: 'graphs',
  title: {
    en: 'Graphs Capstone — Synthesis of Representations, Traversals, and Networks',
    bn: 'গ্রাফ সমাপনী: উপস্থাপনা, ট্রাভার্সাল এবং নেটওয়ার্কের সমন্বয়'
  },
  summary: {
    en: 'Mastering graphs requires synthesizing representations, reachability traversals, cycle detection, and optimal routing into a cohesive architectural framework. In this capstone, we unify the entire graphs hub: choosing between adjacency lists and matrices, enumerating connected components, enforcing directed acyclic dependencies with Kahn’s algorithm, and calculating minimum-cost routes with Dijkstra’s priority queue. We equip you with a definitive decision matrix for real-world software architecture.',
    bn: 'গ্রাফে দক্ষতা অর্জনের জন্য উপস্থাপনা, পৌঁছানোর ট্রাভার্সাল, চক্র শনাক্তকরণ এবং সর্বনিম্ন পথ নির্ণয়কে একটি সমন্বিত কাঠামোর মধ্যে সাজাতে হয়। এই সমাপনী অধ্যায়ে আমরা সম্পূর্ণ গ্রাফের সারসংক্ষেপ করি: অ্যাজেসেন্সি লিস্ট বনাম ম্যাট্রিক্সের সঠিক নির্বাচন, সংযুক্ত দ্বীপের আদমশুমারি, কানের অ্যালগরিদমের সাহায্যে অচক্রিক কাজের শিডিউলিং এবং ডাইকস্ট্রার প্রায়োরিটি কিউ দিয়ে সর্বনিম্ন খরচ নির্ধারণ। বাস্তব সফটওয়্যার আর্কিটেকচারের জন্য একটি নির্ভরযোগ্য সিদ্ধান্ত ছক এখানে উপস্থাপন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'unifying-the-graph-landscape',
      text: {
        en: 'The Four Pillars of Graph Engineering',
        bn: 'গ্রাফ ইঞ্জিনিয়ারিংয়ের চারটি মূল স্তম্ভ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build large-scale distributed backends, networking engines, or task orchestrators, graph algorithms serve as your foundational mechanics. Rather than memorizing isolated algorithms, professional engineers view graph problems through four interconnected pillars: storage representations, reachability traversals, dependency orderings, and cost optimizations.',
        bn: 'যখন আপনি বৃহৎ আকারের ডিস্ট্রিবিউটেড ব্যাকএন্ড, নেটওয়ার্কিং ইঞ্জিন বা টাস্ক অর্কেস্ট্রেটর তৈরি করেন, তখন গ্রাফ অ্যালগরিদমগুলো আপনার মূল হাতিয়ার হিসেবে কাজ করে। বিচ্ছিন্নভাবে কোড মুখস্থ করার বদলে অভিজ্ঞ প্রকৌশলীরা গ্রাফের সমস্যাগুলোকে চারটি মূল স্তম্ভে সাজিয়ে দেখেন: সংরক্ষণ কাঠামো, পৌঁছানোর ট্রাভার্সাল, নির্ভরতার ক্রম এবং খরচের অপটিমাইজেশন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'First, representation determines memory density: sparse networks demand Adjacency Lists at O(V + E) bytes, while dense matrices suit constant-time lookups. Second, reachability partitions graphs into connected islands using visited sets. Third, dependency schedulers enforce directed acyclic structures with Kahn’s in-degree checks. Fourth, pathfinding balances unweighted BFS hops against Dijkstra’s min-heap edge relaxations.',
        bn: 'প্রথমত, উপস্থাপনা মেমরির ঘনত্ব নির্ধারণ করে: স্পার্স নেটওয়ার্কের জন্য O(V + E) মেমরির অ্যাজেসেন্সি লিস্ট আদর্শ, আর ঘন গ্রাফে ম্যাট্রিক্স দ্রুত মান খোঁজে। দ্বিতীয়ত, ভিজিটেড সেটের মাধ্যমে পৌঁছানোর ট্রাভার্সাল গ্রাফকে সংযুক্ত দ্বীপে ভাগ করে। তৃতীয়ত, কানের ইন-ডিগ্রি অ্যালগরিদম চক্রহীন কাজের ক্রম নিশ্চিত করে। চতুর্থত, অভারহীন BFS লাফের বিপরীতে ডাইকস্ট্রার প্রায়োরিটি কিউ সর্বনিম্ন খরচের পথ নির্ধারণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'graph-synthesis',
          def: {
            en: 'The unified mental model combining adjacency representation, reachability traversals, topological sorting, and shortest path calculations.',
            bn: 'অ্যাজেসেন্সি তালিকা, ট্রাভার্সাল, টপোলজিক্যাল সর্ট এবং সর্বনিম্ন পথ নির্ণয়ের সমন্বিত জ্ঞান কাঠামো।'
          }
        },
        {
          term: 'connected-components-census',
          def: {
            en: 'The process of partitioning an undirected graph into maximal connected subgraphs using restarted traversals.',
            bn: 'পুনরায় ট্রাভার্সাল শুরু করার মাধ্যমে একটি অমুখী গ্রাফকে স্বাধীন সংযুক্ত উপাদানে ভাগ করার প্রক্রিয়া।'
          }
        },
        {
          term: 'dag-validation',
          def: {
            en: 'Confirming that a directed graph contains zero cycles, guaranteeing that topological ordering is computable.',
            bn: 'একটি নির্দেশিত গ্রাফে শূন্য চক্র থাকার বিষয়টি নিশ্চিত করা যা কাজের ক্রম তৈরির নিশ্চয়তা দেয়।'
          }
        },
        {
          term: 'shortest-path-dichotomy',
          def: {
            en: 'The architectural rule choosing BFS for unweighted minimum-hop routes and Dijkstra\'s Min-Heap for cost-weighted edges.',
            bn: 'অভারহীন গ্রাফে কম লাফের জন্য BFS এবং ওজনযুক্ত গ্রাফে কম খরচের জন্য ডাইকস্ট্রা বেছে নেওয়ার নিয়ম।'
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
      id: 'decision-matrix-table',
      text: {
        en: 'The Production Architecture Decision Matrix',
        bn: 'বাস্তব সফটওয়্যার আর্কিটেকচারের সিদ্ধান্ত ছক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When production systems encounter graph-shaped problems, choosing the correct algorithm prevents latency spikes and memory exhaustion. The following matrix maps common engineering requirements to their mathematically optimal data structure and time complexity.',
        bn: 'প্রোডাকশন সিস্টেমে গ্রাফ জাতীয় সমস্যা সমাধানের সময় সঠিক অ্যালগরিদম বেছে নিলে লেটেন্সির সমস্যা এবং মেমরি শেষ হয়ে ক্র্যাশ হওয়া এড়ানো যায়। নিচের ছকে সাধারণ ইঞ্জিনিয়ারিং প্রয়োজনীয়তার সাথে তাদের সর্বোত্তম অ্যালগরিদম ও সময় জটিলতা তুলে ধরা হলো।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Engineering Requirement', bn: 'ইঞ্জিনিয়ারিং প্রয়োজনীয়তা' },
        { en: 'Optimal Algorithm', bn: 'সর্বোত্তম অ্যালগরিদম' },
        { en: 'Underlying Queue / Structure', bn: 'ব্যবহৃত ডেটা স্ট্রাকচার' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' }
      ],
      rows: [
        [
          { en: 'Minimum Hops in Unweighted Graph', bn: 'অভারহীন গ্রাফে সর্বনিম্ন লাফ' },
          { en: 'Breadth-First Search (BFS)', bn: 'ব্রেডথ-ফার্স্ট সার্চ (BFS)' },
          { en: 'FIFO Queue', bn: 'FIFO কিউ' },
          { en: 'O(V + E)', bn: 'O(V + E)' }
        ],
        [
          { en: 'Deadlock & Cycle Detection', bn: 'ডেডলক ও চক্র শনাক্তকরণ' },
          { en: 'Three-Color DFS / Kahn Starvation', bn: 'তিন রঙের DFS / কানের অ্যালগরিদম' },
          { en: 'Call stack or In-degree Map', bn: 'কল স্ট্যাক বা ইন-ডিগ্রি ম্যাপ' },
          { en: 'O(V + E)', bn: 'O(V + E)' }
        ],
        [
          { en: 'Build Pipeline Dependency Scheduling', bn: 'বিল্ড পাইপলাইনের নির্ভরতার ক্রম' },
          { en: 'Kahn’s Topological Sort', bn: 'কানের টপোলজিক্যাল সর্ট' },
          { en: 'Queue of in-degree 0 nodes', bn: '০ ইন-ডিগ্রির নোডের কিউ' },
          { en: 'O(V + E)', bn: 'O(V + E)' }
        ],
        [
          { en: 'Minimum Cost with Non-Negative Weights', bn: 'অ-ঋণাত্মক ওজনে সর্বনিম্ন খরচ' },
          { en: 'Dijkstra’s Algorithm', bn: 'ডাইকস্ট্রার অ্যালগরিদম' },
          { en: 'Min-Heap Priority Queue', bn: 'মিন-হিপ প্রায়োরিটি কিউ' },
          { en: 'O((V + E) log V)', bn: 'O((V + E) log V)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-capstone-code',
      text: {
        en: 'Executable Graph System Auditor Implementation',
        bn: 'গ্রাফ সিস্টেম নিরীক্ষক ও পাইপলাইনের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program synthesizes connectivity and dependency scheduling across 4 pipeline services. It verifies that the deployment topology contains 1 connected component, confirms it is an acyclic DAG, and computes the exact execution schedule.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি পাইপলাইন সার্ভিসের সংযোগ এবং নির্ভরতার ক্রম পরীক্ষা করে। এটি নিশ্চিত করে যে সিস্টেমে ১টি সংযুক্ত উপাদান রয়েছে, এটি একটি চক্রহীন DAG এবং নিখুঁত এক্সিকিউশন শিডিউল প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      code: `class GraphAuditor {
  constructor() {
    this.adj = new Map();
    this.inDegree = new Map();
  }

  addVertex(v) {
    if (!this.adj.has(v)) {
      this.adj.set(v, []);
      this.inDegree.set(v, 0);
    }
  }

  addEdge(u, v) {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u).push(v);
    this.inDegree.set(v, this.inDegree.get(v) + 1);
  }

  audit() {
    // 1. Connected components via BFS
    const visited = new Set();
    let components = 0;
    for (const v of this.adj.keys()) {
      if (!visited.has(v)) {
        components++;
        const q = [v];
        visited.add(v);
        while (q.length > 0) {
          const curr = q.shift();
          for (const nb of this.adj.get(curr) || []) {
            if (!visited.has(nb)) {
              visited.add(nb);
              q.push(nb);
            }
          }
        }
      }
    }

    // 2. Kahn Topological Sort & Cycle Check
    const degCopy = new Map(this.inDegree);
    const q = [];
    const topo = [];
    for (const [v, d] of degCopy.entries()) {
      if (d === 0) q.push(v);
    }
    while (q.length > 0) {
      const u = q.shift();
      topo.push(u);
      for (const v of this.adj.get(u) || []) {
        degCopy.set(v, degCopy.get(v) - 1);
        if (degCopy.get(v) === 0) q.push(v);
      }
    }
    const isAcyclic = topo.length === this.adj.size;

    return { totalVertices: this.adj.size, components, isAcyclic, topologicalOrder: topo };
  }
}

const g = new GraphAuditor();
g.addEdge('DB', 'Cache');
g.addEdge('Cache', 'App');
g.addEdge('App', 'API');

const report = g.audit();
console.log('Total Pipeline Nodes:', report.totalVertices);
// Output: Total Pipeline Nodes: 4
console.log('Connected Subsystems:', report.components);
// Output: Connected Subsystems: 1
console.log('Is DAG (Acyclic):', report.isAcyclic);
// Output: Is DAG (Acyclic): true
console.log('Execution Schedule:', report.topologicalOrder.join(' -> '));
// Output: Execution Schedule: DB -> Cache -> App -> API`
    },
    {
      type: 'heading',
      id: 'production-reflexes',
      text: {
        en: 'The Engineer’s Reflex: Auditing Before Routing',
        bn: 'ইঞ্জিনিয়ারের মূল সতর্কতা: রাউটিংয়ের আগে নিরীক্ষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common pitfall in production engineering is running pathfinding algorithms blindly without verifying network connectivity or cycle safety. If an on-call engineer attempts to compute shortest paths across disconnected network partitions, the query fails or hangs. Auditing components and acyclic properties beforehand guarantees that routing algorithms execute against safe topologies.',
        bn: 'প্রোডাকশন ইঞ্জিনিয়ারিংয়ের একটি সাধারণ ভুল হলো নেটওয়ার্কের সংযোগ বা চক্র যাচাই না করে সরাসরি সর্বনিম্ন পথ খোঁজা শুরু করা। বিচ্ছিন্ন নেটওয়ার্ক পার্টিশনের ওপর সরাসরি রাউটিং চালালে কোয়েরি আটকে যেতে পারে। আগে সংযুক্ত উপাদান ও চক্রহীনতা নিরীক্ষণ করে নিলে রাউটিং অ্যালগরিদমগুলো নিরাপদ ও নিশ্চিত কাঠামোর ওপর কাজ করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Structural synthesis: Viewing graphs through representation, reachability, ordering, and routing provides complete algorithmic mastery.',
          bn: 'কাঠামোগত সমন্বয়: গ্রাফকে উপস্থাপনা, প্রাপ্যতা, কাজের ক্রম এবং রাউটিংয়ের চারটি চোখে দেখলে সম্পূর্ণ অ্যালগরিদমের নিয়ন্ত্রণ আসে।'
        },
        {
          en: 'Sparsity optimization: Real-world graphs default to Adjacency Lists, preserving O(V + E) memory space and traversal efficiency.',
          bn: 'স্পার্সতার সুবিধা: বাস্তব গ্রাফগুলো সাধারণত স্পার্স হওয়ায় অ্যাজেসেন্সি লিস্ট O(V + E) মেমরি ও দ্রুত গতি নিশ্চিত করে।'
        },
        {
          en: 'Dependency discipline: Kahn’s in-degree queue ensures build systems execute tasks in valid topological sequence without deadlock loops.',
          bn: 'নির্ভরতার শৃঙ্খলা: কানের ইন-ডিগ্রি কিউ নিশ্চিত করে যে বিল্ড সিস্টেমগুলো ডেডলক ছাড়াই সঠিক টপোলজিক্যাল ক্রমে কাজ চালাবে।'
        },
        {
          en: 'Cost-driven routing: Selecting between BFS and Dijkstra hinges strictly on whether edge weights are uniform hops or physical costs.',
          bn: 'খরচভিত্তিক রাউটিং: BFS না কি ডাইকস্ট্রা বেছে নেবেন তা নির্ভর করে ধারের মান সমান ১ লাফ নাকি বাস্তবিক খরচের ওজন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gc-ex1',
      kind: 'mcq',
      topic: 'routing-algorithm-selection',
      question: {
        en: 'An engineer needs to find the route with the fewest network hops between two server nodes in an unweighted corporate network. Which algorithm is mathematically optimal?',
        bn: 'একটি অভারহীন কর্পোরেট নেটওয়ার্কে দুটি সার্ভার নোডের মাঝে সর্বনিম্ন লাফের পথ খুঁজে পেতে কোন অ্যালগরিদমটি গাণিতিকভাবে সর্বোত্তম?'
      },
      options: [
        {
          en: 'Breadth-First Search (BFS), running in optimal O(V + E) time without priority queue overhead',
          bn: 'ব্রেডথ-ফার্স্ট সার্চ (BFS), যা প্রায়োরিটি কিউ এর বাড়তি খরচ ছাড়াই সর্বোত্তম O(V + E) সময়ে উত্তর দেয়'
        },
        {
          en: 'Dijkstra’s algorithm with a Fibonacci heap',
          bn: 'ফিবোনাচ্চি হিপ সহ ডাইকস্ট্রার অ্যালগরিদম'
        },
        {
          en: 'Floyd-Warshall all-pairs algorithm running in O(V^3) time',
          bn: 'O(V^3) সময়ের ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম'
        },
        {
          en: 'Binary search over an unsorted array of edges',
          bn: 'অ-সাজানো ধারের ওপর বাইনারি সার্চ'
        }
      ],
      answer: 0,
      hint: {
        en: 'If every edge has identical cost 1, does Dijkstra offer any advantage over BFS?',
        bn: 'প্রতিটি ধারের খরচ যদি সমান ১ হয়, তবে কি BFS এর চেয়ে ডাইকস্ট্রার কোনো বাড়তি সুবিধা আছে?'
      },
      explanation: {
        en: 'When all edge costs are uniform 1 hop, BFS guarantees shortest hop paths in O(V + E), beating Dijkstra’s O((V + E) log V).',
        bn: 'সমস্ত ধারের খরচ সমান ১ লাফ হলে BFS মাত্র O(V + E) সময়ে সঠিক উত্তর দেয় যা ডাইকস্ট্রার চেয়ে অনেক দ্রুত।'
      }
    },
    {
      id: 'gc-ex2',
      kind: 'mcq',
      topic: 'prerequisite-pipeline-choice',
      question: {
        en: 'A workflow orchestration platform needs to execute 1000 tasks where each task has prerequisite dependencies. If a cycle exists, the system must immediately reject the deployment. Which algorithm solves this directly?',
        bn: 'একটি ওয়ার্কফ্লো প্ল্যাটফর্মকে ১০০০টি কাজ শিডিউল করতে হবে যেখানে প্রতিটি কাজের পূর্বশর্ত রয়েছে। কোনো চক্র থাকলে সাথে সাথে তা বাতিল করতে হবে। কোন অ্যালগরিদমটি সরাসরি এই সমাধান দেয়?'
      },
      options: [
        {
          en: 'Kahn’s algorithm (in-degree queue), which produces the topological build order and detects circular dependencies via queue starvation in O(V + E)',
          bn: 'কানের অ্যালগরিদম (ইন-ডিগ্রি কিউ), যা কাজের টপোলজিক্যাল ক্রম তৈরি করে এবং কিউ আটকে যাওয়ার মাধ্যমে O(V + E) সময়ে চক্র শনাক্ত করে'
        },
        {
          en: 'Dijkstra’s shortest path algorithm',
          bn: 'ডাইকস্ট্রার সর্বনিম্ন পথ অ্যালগরিদম'
        },
        {
          en: 'Adjacency matrix squaring',
          bn: 'অ্যাজেসেন্সি ম্যাট্রিক্সের বর্গ করা'
        },
        {
          en: 'Merge Sort on task IDs',
          bn: 'টাস্ক আইডিগুলোর ওপর মার্জ সর্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Which algorithm evaluates prerequisites by counting in-degree dependencies and detects cycles automatically?',
        bn: 'কোন অ্যালগরিদমটি ইন-ডিগ্রির সাহায্যে পূর্বশর্ত গুনে এবং স্বয়ংক্রিয়ভাবে চক্র ধরে ফেলে?'
      },
      explanation: {
        en: 'Kahn’s algorithm schedules tasks with in-degree 0. If the output length < 1000, circular dependencies exist, safely halting deployment.',
        bn: 'কানের অ্যালগরিদম ০ ইন-ডিগ্রির কাজগুলোকে সাজায়। আউটপুট ১০০০ এর কম হলে চক্রের কারণে কাজ আটকে যায় যা ডিপ্লয়মেন্ট থামিয়ে দেয়।'
      }
    },
    {
      id: 'gc-ex3',
      kind: 'mcq',
      topic: 'weighted-routing-heap-requirement',
      question: {
        en: 'Why is Dijkstra’s algorithm preferred over Bellman-Ford when routing internet packets across routers with positive millisecond latencies?',
        bn: 'ধনাত্মক মিলিসেকেন্ড লেটেন্সি বিশিষ্ট ইন্টারনেট রাউটারে প্যাকেট পাঠাতে বেলম্যান-ফোর্ডের চেয়ে ডাইকস্ট্রাকে কেন প্রাধান্য দেওয়া হয়?'
      },
      options: [
        {
          en: 'Dijkstra operates in fast O((V + E) log V) time with a Min-Heap, whereas Bellman-Ford takes much slower O(V * E) polynomial time',
          bn: 'মিন-হিপ সহ ডাইকস্ট্রা দ্রুত O((V + E) log V) সময়ে চলে, যেখানে বেলম্যান-ফোর্ড অত্যন্ত ধীরগতির O(V * E) সময় নেয়'
        },
        {
          en: 'Because Bellman-Ford only works on disconnected graphs',
          bn: 'কারণ বেলম্যান-ফোর্ড কেবল বিচ্ছিন্ন গ্রাফে কাজ করে'
        },
        {
          en: 'Because Dijkstra deletes duplicate edges automatically',
          bn: 'কারণ ডাইকস্ট্রা স্বয়ংক্রিয়ভাবে ডুপ্লিকেট ধার মুছে দেয়'
        },
        {
          en: 'Because priority queues cannot store numbers greater than 100',
          bn: 'কারণ প্রায়োরিটি কিউ ১০০ এর বেশি সংখ্যা রাখতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'On a large router graph with 10,000 vertices and 100,000 edges, compare (V + E) log V against V * E.',
        bn: '১০,০০০ নোড এবং ১০০,০০০ ধারের নেটওয়ার্কে (V + E) log V এর সাথে V * E এর তুলনা করুন।'
      },
      explanation: {
        en: 'When all edge weights are strictly non-negative, Dijkstra’s greedy heap extraction runs orders of magnitude faster than Bellman-Ford.',
        bn: 'সমস্ত ধারের মান ধনাত্মক হলে ডাইকস্ট্রার গ্রিডি হিপ পদ্ধতি বেলম্যান-ফোর্ডের চেয়ে শত শত গুণ দ্রুত কাজ সম্পন্ন করে।'
      }
    }
  ],
  quiz: {
    id: 'graphs-capstone-quiz',
    title: {
      en: 'Graphs Engineering and Architecture Capstone Quiz',
      bn: 'গ্রাফ ইঞ্জিনিয়ারিং এবং আর্কিটেকচার সমাপনী কুইজ'
    },
    questions: [
      {
        id: 'gc-q1',
        kind: 'mcq',
        topic: 'sparse-graph-representation-standard',
        question: {
          en: 'In web crawlers indexing 100000000 URLs where each page links to an average of 30 other pages, why is an Adjacency Matrix completely impossible to use?',
          bn: '১০০০০০০০০ ইউআরএল ইনডেক্সকারী ওয়েব ক্রলারে যেখানে প্রতিটি পাতা গড়ে ৩০টি পাতার সাথে যুক্ত, সেখানে অ্যাজেসেন্সি ম্যাট্রিক্স ব্যবহার করা কেন সম্পূর্ণ অসম্ভব?'
        },
        options: [
          {
            en: 'An Adjacency Matrix would require 100000000 * 100000000 = 10^16 entries (petabytes of RAM), whereas an Adjacency List uses only linear O(V + E) space',
            bn: 'অ্যাজেসেন্সি ম্যাট্রিক্সে ১০০০০০০০০ * ১০০০০০০০০ = ১০^১৬টি এন্ট্রি (পেটাবাইট র‍্যাম) লাগবে, যেখানে অ্যাজেসেন্সি লিস্ট কেবল রৈখিক O(V + E) স্থান নেয়'
          },
          {
            en: 'Because matrix rows cannot store web URLs',
            bn: 'কারণ ম্যাট্রিক্সের সারি ওয়েব ইউআরএল রাখতে পারে না'
          },
          {
            en: 'Because web crawlers only use binary search trees',
            bn: 'কারণ ওয়েব ক্রলার কেবল বাইনারি সার্চ ট্রি ব্যবহার করে'
          },
          {
            en: 'Because HTTP headers cannot be stored in 2D arrays',
            bn: 'কারণ এইচটিটিপি হেডার দ্বি-মাত্রিক অ্যারেতে রাখা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calculate V^2 for 100 million vertices.',
          bn: '১০০ মিলিয়ন নোডের জন্য V^2 হিসাব করুন।'
        },
        explanation: {
          en: 'Real webs are overwhelmingly sparse. Allocating quadratic space for a sparse graph exhausts physical memory immediately.',
          bn: 'বাস্তব ওয়েব অত্যন্ত স্পার্স প্রকৃতির। স্পার্স গ্রাফের জন্য দ্বিঘাত মেমরি বরাদ্দ করলে সাথে সাথে সার্ভারের মেমরি ফুরিয়ে যাবে।'
        }
      },
      {
        id: 'gc-q2',
        kind: 'mcq',
        topic: 'disconnected-graph-pathfinding-trap',
        question: {
          en: 'What happens if a pathfinding algorithm searches for a path between vertex A and vertex B when A and B reside in two completely disconnected components?',
          bn: 'শীর্ষবিন্দু A এবং B যদি দুটি সম্পূর্ণ বিচ্ছিন্ন উপাদানে থাকে, তবে তাদের মাঝে কোনো পথ খুঁজতে গেলে কী ঘটবে?'
        },
        options: [
          {
            en: 'The traversal explores all reachable nodes in A’s component and terminates reporting that B is unreachable, without an infinite loop',
            bn: 'ট্রাভার্সাল A এর উপাদানের সমস্ত নোড ঘুরে শেষ করবে এবং কোনো অনন্ত লুপে না পড়ে সঠিকভাবেই জানাবে যে B অনগম্য'
          },
          {
            en: 'The computer CPU hangs indefinitely',
            bn: 'কম্পিউটার সিপিইউ চিরতরে আটকে থাকবে'
          },
          {
            en: 'The graph automatically inserts an edge between A and B',
            bn: 'গ্রাফটি স্বয়ংক্রিয়ভাবে A ও B এর মাঝে নতুন ধার তৈরি করে নেবে'
          },
          {
            en: 'All vertices in the graph are deleted',
            bn: 'গ্রাফের সমস্ত নোড মুছে যাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does a traversal with a visited set terminate once the queue or stack empties?',
          bn: 'ভিজিটেড সেট ব্যবহারকারী ট্রাভার্সালে কিউ বা স্ট্যাক খালি হলে কি প্রোগ্রাম নিরাপদে থামে?'
        },
        explanation: {
          en: 'Because visited sets prevent infinite loops, the search exhausts the connected component and safely returns that no path exists.',
          bn: 'ভিজিটেড সেট চক্র রোধ করায় অনুসন্ধানটি নির্দিষ্ট উপাদানের সব নোড দেখে নিরাপদে ফলাফল দেয় যে কোনো পথ নেই।'
        }
      },
      {
        id: 'gc-q3',
        kind: 'mcq',
        topic: 'three-color-vs-kahn-cycle-comparison',
        question: {
          en: 'Compare cycle detection using Three-Color DFS versus Kahn’s algorithm on a directed graph.',
          bn: 'একটি নির্দেশিত গ্রাফে তিন রঙের DFS বনাম কানের অ্যালগরিদমের সাহায্যে চক্র শনাক্তকরণের তুলনা করুন।'
        },
        options: [
          {
            en: 'Both run in O(V + E) time: Three-Color DFS detects back edges during recursive descent, while Kahn detects cycles when its queue starves before scheduling all vertices',
            bn: 'উভয়ই O(V + E) সময়ে চলে: তিন রঙের DFS নামার সময় ব্যাক ধার দেখে চক্র ধরে, আর কানের অ্যালগরিদম সব নোড শিডিউল হওয়ার আগেই কিউ খালি হলে চক্র ধরে'
          },
          {
            en: 'Three-Color DFS takes O(V^3) time while Kahn takes O(1) time',
            bn: 'তিন রঙের DFS O(V^3) সময় নেয় এবং কান O(1) সময় নেয়'
          },
          {
            en: 'Kahn only works on undirected graphs',
            bn: 'কানের অ্যালগরিদম কেবল অমুখী গ্রাফে কাজ করে'
          },
          {
            en: 'Three-Color DFS requires positive edge weights',
            bn: 'তিন রঙের DFS এ ধনাত্মক ধারের ওজন প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'DFS uses colors (White/Gray/Black); Kahn uses in-degrees and a queue.',
          bn: 'DFS রঙ ব্যবহার করে (সাদা/ধূসর/কালো); কান ইন-ডিগ্রি ও কিউ ব্যবহার করে।'
        },
        explanation: {
          en: 'Both achieve linear O(V + E) runtime: DFS identifies cycles via active stack back-edges, while Kahn identifies cycles via unresolved in-degree debts.',
          bn: 'উভয়ই রৈখিক O(V + E) সময়ে কাজ করে: DFS স্ট্যাকের ব্যাক ধারের মাধ্যমে এবং কান অ-নিষ্পত্ত ইন-ডিগ্রি ঋণের মাধ্যমে চক্র প্রমাণ করে।'
        }
      },
      {
        id: 'gc-q4',
        kind: 'mcq',
        topic: 'dijkstra-settled-finality-guarantee',
        question: {
          en: 'Why is a vertex considered permanently settled immediately upon being extracted from the Min-Heap in Dijkstra’s algorithm?',
          bn: 'ডাইকস্ট্রার অ্যালগরিদমে মিন-হিপ থেকে কোনো নোড বের হওয়ার সাথে সাথে তাকে কেন চিরতরে চূড়ান্ত (সেটলড) হিসেবে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'Because all edge weights are non-negative, any alternative pending path must pass through a frontier node whose distance is already greater than or equal to the extracted node',
            bn: 'কারণ সমস্ত ধারের ওজন অ-ঋণাত্মক হওয়ায় অন্য যেকোনো সম্ভাব্য পথ এমন কোনো নোড দিয়ে যাবে যার দূরত্ব ইতোমধ্যে এই নোডের চেয়ে বেশি বা সমান'
          },
          {
            en: 'Because the heap deletes all other vertices',
            bn: 'কারণ হিপ অন্য সব নোড মুছে ফেলে'
          },
          {
            en: 'Because the algorithm stops running immediately',
            bn: 'কারণ অ্যালগরিদম সাথে সাথে চলা বন্ধ করে দেয়'
          },
          {
            en: 'Because JavaScript enforces immutability on popped heap elements',
            bn: 'কারণ জাভাস্ক্রিপ্ট পপ হওয়া হিপ উপাদানের পরিবর্তন রোধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can extending a path by adding positive weights ever make the cumulative sum smaller?',
          bn: 'ধনাত্মক সংখ্যা যোগ করে কোনো পথ বাড়ালে কি তার মোট যোগফল কখনো আগের চেয়ে কম হতে পারে?'
        },
        explanation: {
          en: 'Non-negative edge weights ensure path costs monotonically increase. The minimum frontier element cannot be beaten by extending longer routes.',
          bn: 'অ-ঋণাত্মক ওজনে পথের খরচ কেবল বৃদ্ধিই পায়। ফলে সীমান্তের সর্বনিম্ন নোডকে অন্য কোনো দীর্ঘ পথ দিয়ে আর পেছনে ফেলা সম্ভব হয় না।'
        }
      }
    ]
  }
};
