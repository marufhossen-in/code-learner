import type { Lesson } from '../../../lib/types';

export const bellmanPatientLedgerLesson: Lesson = {
  slug: 'bellman-and-the-patient-ledger',
  tech: 'graph-algorithms',
  title: {
    en: 'Bellman-Ford — Negative Weights and Difference Constraints',
    bn: 'বেলম্যান-ফোর্ড: ঋণাত্মক ওজন এবং পার্থক্য সীমাবদ্ধতা'
  },
  summary: {
    en: 'When edge weights turn negative in currency arbitrage, financial ledgers, or chemical reactions, Dijkstra’s greedy assumption fails because earlier settled distances can be retroactively undercut. The Bellman-Ford algorithm trades greed for patience: it relaxes all E edges across V - 1 rounds, proving that after iteration k all shortest paths of length up to k hops are sealed. A subsequent V-th round audits the graph for reachable negative weight cycles, and the algorithm generalizes directly to solving systems of linear difference constraints in O(V * E) time.',
    bn: 'মুদ্রা বিনিময়, আর্থিক খাতা বা রাসায়নিক বিক্রিয়ায় যখন ধারের ওজন ঋণাত্মক হয়, তখন ডাইকস্ট্রার গ্রিডি অনুমান ভেঙে পড়ে কারণ আগের চূড়ান্ত হওয়া দূরত্বও পরে কমে যেতে পারে। বেলম্যান-ফোর্ড অ্যালগরিদম গ্রিডির বদলে ধৈর্য অবলম্বন করে: এটি সমস্ত E সংখ্যক ধারকে V - ১ রাউন্ড ধরে রিল্যাক্স করে, প্রমাণ করে যে k রাউন্ড শেষে সর্বোচ্চ k লাফের সমস্ত পথ চূড়ান্ত হয়। এর পরের V-তম রাউন্ডটি ঋণাত্মক চক্র খুঁজে বের করে এবং অ্যালগরিদমটি সরাসরি রৈখিক পার্থক্য সীমাবদ্ধতার সমাধান O(V * E) সময়ে প্রদান করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-stronghold-split',
    tech: 'graph-algorithms',
    title: {
      en: 'Strongly Connected Components — Tarjan and Kosaraju Algorithms',
      bn: 'দৃঢ়ভাবে সংযুক্ত উপাদান: টারজান ও কোসারাজু অ্যালগরিদম'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'negative-weights-dilemma',
      text: {
        en: 'The Breakdown of Greed: Handling Negative Edge Costs',
        bn: 'গ্রিডি কৌশলের পতন: ঋণাত্মক খরচের ধার পরিচালনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you model financial exchange rates, battery charging cycles, or contractual discount rebates, edges can have negative weights. In such graphs, Dijkstra’s greedy principle breaks down completely. A vertex marked as finalized today can have its cost retroactively lowered tomorrow through a negative-weight detour.',
        bn: 'যখন আপনি মুদ্রা বিনিময় হার, ব্যাটারির চার্জিং চক্র বা ডিসকাউন্ট রিবেটের মডেল তৈরি করেন, তখন ধারের ওজন ঋণাত্মক হতে পারে। এমন গ্রাফে ডাইকস্ট্রার গ্রিডি নীতি সম্পূর্ণ ব্যর্থ হয়। আজকে চূড়ান্ত ঘোষিত একটি নোডের খরচ পরবর্তীতে একটি ঋণাত্মক ধারের কারণে আরো কমে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Bellman-Ford algorithm replaces greedy finality with structured patience. Instead of committing to distances early, it relaxes every single edge in the graph across V - 1 sequential iterations. Because any simple shortest path in a graph of V vertices contains at most V - 1 edges, V - 1 relaxation rounds guarantee that all shortest paths are computed.',
        bn: 'বেলম্যান-ফোর্ড অ্যালগরিদম গ্রিডি পদ্ধতির বদলে সুশৃঙ্খল ধৈর্য অবলম্বন করে। আগেভাগে দূরত্ব চূড়ান্ত না করে এটি গ্রাফের প্রতিটি ধারকে ধারাবাহিকভাবে V - ১ বার রিল্যাক্স করে। যেহেতু V নোডের যেকোনো সাধারণ সর্বনিম্ন পথে সর্বোচ্চ V - ১টি ধার থাকতে পারে, তাই V - ১ রাউন্ড রিল্যাক্সেশন নিশ্চিত করে যে সমস্ত সর্বনিম্ন পথ বের করা সম্পন্ন হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'bellman-ford-algorithm',
          def: {
            en: 'A dynamic programming algorithm that finds single-source shortest paths in graphs with arbitrary weights and detects negative weight cycles in O(V * E) time.',
            bn: 'একটি ডায়নামিক প্রোগ্রামিং অ্যালগরিদম যা যেকোনো ওজনের গ্রাফে একক উৎস থেকে সর্বনিম্ন পথ বের করে এবং O(V * E) সময়ে ঋণাত্মক চক্র শনাক্ত করে।'
          }
        },
        {
          term: 'v-minus-one-induction',
          def: {
            en: 'The structural theorem proving that any simple shortest path contains at most V - 1 edges, so V - 1 full edge relaxation passes suffice.',
            bn: 'উপপাদ্য যা প্রমাণ করে যে চক্রহীন যেকোনো সর্বনিম্ন পথে সর্বোচ্চ V - ১টি ধার থাকে, তাই V - ১ বার সমস্ত ধার রিল্যাক্স করাই যথেষ্ট।'
          }
        },
        {
          term: 'negative-weight-cycle',
          def: {
            en: 'A directed cycle whose total sum of edge weights is strictly negative, allowing paths traversing it to decrease toward minus infinity.',
            bn: 'এমন একটি নির্দেশিত চক্র যার ধারের ওজনের সমষ্টি ঋণাত্মক, ফলে এর ভেতর ঘুরলে পথের দূরত্ব মাইনাস অসীমের দিকে কমতে থাকে।'
          }
        },
        {
          term: 'difference-constraints',
          def: {
            en: 'A system of linear inequalities of the form x_j - x_i <= w_k, solvable as shortest paths from a virtual super-source using Bellman-Ford.',
            bn: 'রৈখিক অসমতার এমন একটি কাঠামো (x_j - x_i <= w_k) যা একটি ভার্চুয়াল সুপার-উৎস থেকে বেলম্যান-ফোর্ড চালিয়ে সমাধান করা যায়।'
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
      id: 'dijkstra-vs-bellman-table',
      text: {
        en: 'Architectural Comparison: Dijkstra vs Bellman-Ford',
        bn: 'কাঠামোগত তুলনা: ডাইকস্ট্রা বনাম বেলম্যান-ফোর্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding the operational contrast between Dijkstra and Bellman-Ford helps engineers choose the correct tool for production networks.',
        bn: 'ডাইকস্ট্রা এবং বেলম্যান-ফোর্ডের কার্যপ্রণালীর পার্থক্য বোঝা ইঞ্জিনিয়ারদের বাস্তব ক্ষেত্রে সঠিক টুল নির্বাচনে সাহায্য করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Feature', bn: 'পরিমাপ / বৈশিষ্ট্য' },
        { en: 'Dijkstra’s Algorithm', bn: 'ডাইকস্ট্রার অ্যালগরিদম' },
        { en: 'Bellman-Ford Algorithm', bn: 'বেলম্যান-ফোর্ড অ্যালগরিদম' }
      ],
      rows: [
        [
          { en: 'Supported Edge Weights', bn: 'সমর্থিত ধারের ওজন' },
          { en: 'Strictly non-negative (w >= 0)', bn: 'কেবল অ-ঋণাত্মক (w >= ০)' },
          { en: 'Arbitrary weights (+, -, 0)', bn: 'যেকোনো বাস্তব ওজন (+, -, ০)' }
        ],
        [
          { en: 'Time Complexity', bn: 'সময় জটিলতা' },
          { en: 'O((V + E) log V) with Min-Heap', bn: 'মিন-হিপ সহ O((V + E) log V)' },
          { en: 'O(V * E) polynomial time', bn: 'O(V * E) বহুপদী সময়' }
        ],
        [
          { en: 'Traversal Philosophy', bn: 'ট্রাভার্সালের দর্শন' },
          { en: 'Greedy: settles closest node first', bn: 'গ্রিডি: নিকটতম নোড আগে চূড়ান্ত করে' },
          { en: 'Dynamic programming: V - 1 edge passes', bn: 'ডায়নামিক প্রোগ্রামিং: V - ১ বার সব ধার পাস' }
        ],
        [
          { en: 'Negative Cycle Handling', bn: 'ঋণাত্মক চক্র প্রতিক্রিয়া' },
          { en: 'Fails silently with incorrect output', bn: 'নীরবে ভুল ফলাফল দিয়ে ব্যর্থ হয়' },
          { en: 'Detects and flags negative cycles on round V', bn: 'রাউন্ড V এ ঋণাত্মক চক্র শনাক্ত করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-bellman-code',
      text: {
        en: 'Executable Bellman-Ford Implementation',
        bn: 'বেলম্যান-ফোর্ড ও ঋণাত্মক চক্র শনাক্তকরণের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program executes Bellman-Ford across 4 vertices containing a negative edge A -> B with weight -2. Notice how the algorithm relaxes edge A -> B to find a path cost of 2 to vertex B (cheaper than direct edge S -> B of weight 5), and confirms that no negative cycles exist.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি শীর্ষবিন্দুর ওপর বেলম্যান-ফোর্ড চালায় যাতে -২ ওজনের একটি ঋণাত্মক ধার A -> B রয়েছে। লক্ষ্য করুন কীভাবে অ্যালগরিদমটি ধারটি রিল্যাক্স করে B এর দূরত্ব ২ তে নামিয়ে আনে (যা সরাসরি S -> B এর ৫ খরচের চেয়ে সস্তা), এবং নিশ্চিত করে যে কোনো ঋণাত্মক চক্র নেই।'
      }
    },
    {
      type: 'code',
      code: `function bellmanFord(vertices, edges, source) {
  const dist = new Map();
  const parent = new Map();

  for (const v of vertices) dist.set(v, Infinity);
  dist.set(source, 0);

  // V - 1 relaxation rounds
  for (let i = 1; i <= vertices.length - 1; i++) {
    let changed = false;
    for (const edge of edges) {
      const du = dist.get(edge.u);
      if (du !== Infinity && du + edge.w < dist.get(edge.v)) {
        dist.set(edge.v, du + edge.w);
        parent.set(edge.v, edge.u);
        changed = true;
      }
    }
    if (!changed) break; // Early termination if no edges relaxed
  }

  // Round V: Negative cycle audit
  let hasNegativeCycle = false;
  for (const edge of edges) {
    const du = dist.get(edge.u);
    if (du !== Infinity && du + edge.w < dist.get(edge.v)) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { dist, hasNegativeCycle };
}

const vertices = ['S', 'A', 'B', 'C'];
const edges = [
  { u: 'S', v: 'A', w: 4 },
  { u: 'S', v: 'B', w: 5 },
  { u: 'A', v: 'B', w: -2 },
  { u: 'B', v: 'C', w: 3 }
];

const result = bellmanFord(vertices, edges, 'S');
console.log('Negative Cycle Detected:', result.hasNegativeCycle);
// Output: Negative Cycle Detected: false
console.log('Shortest distance to S:', result.dist.get('S'));
// Output: Shortest distance to S: 0
console.log('Shortest distance to A:', result.dist.get('A'));
// Output: Shortest distance to A: 4
console.log('Shortest distance to B (S -> A -> B: 4 - 2):', result.dist.get('B'));
// Output: Shortest distance to B (S -> A -> B: 4 - 2): 2
console.log('Shortest distance to C (4 - 2 + 3):', result.dist.get('C'));
// Output: Shortest distance to C (4 - 2 + 3): 5`
    },
    {
      type: 'heading',
      id: 'arbitrage-and-constraints',
      text: {
        en: 'Production Applications: Currency Arbitrage and Difference Constraints',
        bn: 'বাস্তব প্রয়োগ: কারেন্সি আরবিট্রাজ এবং সময়সূচির সীমাবদ্ধতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In quantitative finance, foreign exchange currency arbitrage seeks sequences of trades (e.g. USD to EUR to GBP to USD) where the product of exchange rates exceeds 1. By transforming exchange multipliers using negative logarithms (-log(rate)), currency multiplication becomes additive path lengths. A profitable arbitrage loop corresponds mathematically to a negative weight cycle detected instantly by Bellman-Ford on the V-th round.',
        bn: 'ফাইন্যান্সিয়াল সিস্টেমে কারেন্সি আরবিট্রাজ এমন কিছু মুদ্রার লেনদেন খোঁজে (যেমন USD থেকে EUR থেকে GBP থেকে আবার USD) যেখানে গুণিতক ১ এর বেশি লাভ দেয়। এক্সচেঞ্জ রেটকে ঋণাত্মক লগারিদমে (-log(rate)) রূপান্তর করলে গুণ যোগে পরিণত হয়। একটি লাভজনক আরবিট্রাজ লুপ তখন গাণিতিকভাবে একটি ঋণাত্মক চক্রে পরিণত হয় যা বেলম্যান-ফোর্ডের V-তম রাউন্ডে সহজেই ধরা পড়ে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Negative weight immunity: Bellman-Ford computes single-source shortest paths correctly on graphs with negative edge weights.',
          bn: 'ঋণাত্মক ওজনে নির্ভুলতা: বেলম্যান-ফোর্ড ঋণাত্মক ধারের ওজন বিশিষ্ট গ্রাফেও সফলভাবে একক উৎস থেকে সর্বনিম্ন পথ বের করে।'
        },
        {
          en: 'Induction across V - 1 rounds: Every simple shortest path has at most V - 1 edges, guaranteeing complete convergence.',
          bn: 'V - ১ রাউন্ডের নিশ্চয়তা: প্রতিটি সরল সর্বনিম্ন পথে সর্বোচ্চ V - ১টি ধার থাকে, যা নিখুঁত হিসাবের নিশ্চয়তা দেয়।'
        },
        {
          en: 'Round V negative cycle detection: Any edge that can still relax after V - 1 passes proves a negative cycle exists.',
          bn: 'রাউন্ড V এ চক্র শনাক্তকরণ: V - ১ রাউন্ড শেষেও কোনো ধার রিল্যাক্স হতে পারলে তা ঋণাত্মক চক্রের প্রমাণ দেয়।'
        },
        {
          en: 'Difference constraints solver: Linear programming inequalities map to directed graphs solvable by Bellman-Ford in O(V * E) time.',
          bn: 'পার্থক্য সীমাবদ্ধতার সমাধান: রৈখিক অসমতার সিস্টেমকে গ্রাফে রূপান্তর করে বেলম্যান-ফোর্ড দিয়ে O(V * E) সময়ে সমাধান করা যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bp-ex1',
      kind: 'mcq',
      topic: 'bellman-ford-round-count',
      question: {
        en: 'Why does Bellman-Ford require exactly V - 1 relaxation rounds on a graph with V vertices?',
        bn: 'V শীর্ষবিন্দু বিশিষ্ট একটি গ্রাফে বেলম্যান-ফোর্ডের কেন ঠিক V - ১ রাউন্ড রিল্যাক্সেশনের প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Because any simple path without cycles in a graph of V vertices contains at most V - 1 edges, and round k computes shortest paths up to length k',
          bn: 'কারণ V নোডের গ্রাফে চক্রহীন যেকোনো সাধারণ পথে সর্বোচ্চ V - ১টি ধার থাকতে পারে, এবং রাউন্ড k সর্বোচ্চ k দৈর্ঘ্যের পথ চূড়ান্ত করে'
        },
        {
          en: 'Because computers can only execute loops of length V - 1',
          bn: 'কারণ কম্পিউটার কেবল V - ১ দৈর্ঘ্যের লুপ চালাতে পারে'
        },
        {
          en: 'Because V - 1 edges are automatically deleted from the graph',
          bn: 'কারণ গ্রাফ থেকে V - ১টি ধার স্বয়ংক্রিয়ভাবে মুছে যায়'
        },
        {
          en: 'To make the algorithm run in O(1) time',
          bn: 'অ্যালগরিদমটিকে O(1) সময়ে চালানোর জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'What is the maximum number of edges a path can have before it is forced to revisit a vertex and create a cycle?',
        bn: 'কোনো পথ চক্র তৈরি না করে সর্বোচ্চ কয়টি ধার নিয়ে গঠিত হতে পারে?'
      },
      explanation: {
        en: 'A path visiting V vertices without repeating any vertex has exactly V - 1 edges. Each relaxation round extends certified paths by 1 edge.',
        bn: 'V নোড বিশিষ্ট যেকোনো সাধারণ পথে ঠিক V - ১টি ধার থাকে। প্রতিটি রাউন্ড পথগুলোকে ১ ধাপ করে প্রসারিত করে।'
      }
    },
    {
      id: 'bp-ex2',
      kind: 'mcq',
      topic: 'vth-round-audit-meaning',
      question: {
        en: 'During the V-th relaxation pass of Bellman-Ford, what does it signify if an edge u -> v can STILL be relaxed (dist[u] + w < dist[v])?',
        bn: 'বেলম্যান-ফোর্ডের V-তম পাসের সময় যদি কোনো ধার u -> v এখনো রিল্যাক্স করা সম্ভব হয় (dist[u] + w < dist[v]), তবে তা কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The graph contains a reachable Negative Weight Cycle, meaning distances can decrease infinitely toward minus infinity',
          bn: 'গ্রাফটিতে একটি ঋণাত্মক ওজনের চক্র রয়েছে, যার অর্থ দূরত্ব মাইনাস অসীমের দিকে অনির্দিষ্টকাল কমতে পারে'
        },
        {
          en: 'The graph is an undirected tree',
          bn: 'গ্রাফটি একটি অমুখী ট্রি'
        },
        {
          en: 'The algorithm ran out of memory',
          bn: 'অ্যালগরিদমের মেমরি ফুরিয়ে গেছে'
        },
        {
          en: 'All edge weights are positive numbers',
          bn: 'সমস্ত ধারের ওজন ধনাত্মক সংখ্যা'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a path of length V is shorter than all paths of length <= V - 1, can the path be simple?',
        bn: 'V দৈর্ঘ্যের পথ যদি <= V - ১ দৈর্ঘ্যের সব পথের চেয়ে খাটো হয়, তবে সেই পথে কি কোনো চক্র ছাড়া থাকা সম্ভব?'
      },
      explanation: {
        en: 'A path with V edges must visit at least one vertex twice. If its weight decreases, the closed loop has negative total weight.',
        bn: 'V সংখ্যক ধারের পথ অন্তত একটি নোডকে দুইবার স্পর্শ করে। তার ওজন কমতে থাকার অর্থ হলো সেই লুপটির ওজন ঋণাত্মক।'
      }
    },
    {
      id: 'bp-ex3',
      kind: 'mcq',
      topic: 'bellman-ford-complexity',
      question: {
        en: 'What is the time complexity of the Bellman-Ford algorithm on a graph with V vertices and E edges?',
        bn: 'V শীর্ষবিন্দু এবং E ধার বিশিষ্ট গ্রাফে বেলম্যান-ফোর্ড অ্যালগরিদমের সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(V * E) time, performing V - 1 rounds of relaxing all E edges',
          bn: 'O(V * E) সময়, সমস্ত E ধারকে V - ১ রাউন্ড ধরে রিল্যাক্স করার মাধ্যমে'
        },
        {
          en: 'O(V + E) time',
          bn: 'O(V + E) সময়'
        },
        {
          en: 'O(V^3) time always',
          bn: 'সর্বদা O(V^3) সময়'
        },
        {
          en: 'O(log V) time',
          bn: 'O(log V) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'In each of the V - 1 outer rounds, the algorithm iterates through all E edges in the inner loop.',
        bn: 'V - ১টি বাইরের রাউন্ডের প্রতিটিতে অ্যালগরিদম ভেতরের লুপে সমস্ত E ধার পরীক্ষা করে।'
      },
      explanation: {
        en: 'Relaxing all E edges takes O(E) time per round. Repeating this for V - 1 rounds yields deterministic O(V * E) runtime.',
        bn: 'প্রতি রাউন্ডে E ধার দেখতে O(E) সময় লাগে। V - ১ রাউন্ডে এটি মোট O(V * E) সময় নেয়।'
      }
    }
  ],
  quiz: {
    id: 'bellman-and-the-patient-ledger-quiz',
    title: {
      en: 'Bellman-Ford and Negative Weights Quiz',
      bn: 'বেলম্যান-ফোর্ড এবং ঋণাত্মক ওজন কুইজ'
    },
    questions: [
      {
        id: 'bp-q1',
        kind: 'mcq',
        topic: 'difference-constraints-mapping',
        question: {
          en: 'How is a linear difference constraint inequality x_j - x_i <= w_k represented as a graph edge for Bellman-Ford?',
          bn: 'একটি রৈখিক পার্থক্য সীমাবদ্ধতার অসমতা x_j - x_i <= w_k কে বেলম্যান-ফোর্ডের জন্য কীভাবে গ্রাফের ধার হিসেবে রূপান্তর করা হয়?'
        },
        options: [
          {
            en: 'As a directed edge from vertex x_i to vertex x_j with edge weight w_k',
            bn: 'x_i শীর্ষবিন্দু থেকে x_j শীর্ষবিন্দুর দিকে w_k ওজনের একটি নির্দেশিত ধার হিসেবে'
          },
          {
            en: 'As an undirected edge between x_i and x_j with weight 0',
            bn: 'x_i এবং x_j এর মাঝে ০ ওজনের একটি অমুখী ধার হিসেবে'
          },
          {
            en: 'As a vertex with degree w_k',
            bn: 'w_k ডিগ্রি বিশিষ্ট একটি শীর্ষবিন্দু হিসেবে'
          },
          {
            en: 'As a binary search tree node',
            bn: 'একটি বাইনারি সার্চ ট্রি নোড হিসেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Notice that x_j <= x_i + w_k matches the relaxation triangle inequality dist[j] <= dist[i] + w.',
          bn: 'লক্ষ্য করুন x_j <= x_i + w_k অসমতাটি রিল্যাক্সেশনের dist[j] <= dist[i] + w সূত্রের সাথে পুরোপুরি মিলে যায়।'
        },
        explanation: {
          en: 'Rewriting the inequality as x_j <= x_i + w_k matches the shortest path relaxation condition for a directed edge from i to j.',
          bn: 'অসমতাটিকে x_j <= x_i + w_k আকারে লিখলে তা i থেকে j এর নির্দেশিত ধারের রিল্যাক্সেশন সূত্রের অনুরূপ হয়।'
        }
      },
      {
        id: 'bp-q2',
        kind: 'mcq',
        topic: 'super-source-construction',
        question: {
          en: 'Why is a virtual "super-source" node added when solving systems of difference constraints with Bellman-Ford?',
          bn: 'বেলম্যান-ফোর্ড দিয়ে পার্থক্য সীমাবদ্ধতা সমাধানের সময় কেন একটি কাল্পনিক "সুপার-উৎস" নোড যোগ করা হয়?'
        },
        options: [
          {
            en: 'To ensure that all constraint vertices in potentially disconnected subgraphs are reachable from a single starting point with 0-weight edges',
            bn: 'যাতে বিচ্ছিন্ন উপ-গ্রাফে থাকা সমস্ত নোড ০ ওজনের ধারের মাধ্যমে একটি একক শুরুর বিন্দু থেকে পৌঁছানো যায়'
          },
          {
            en: 'To delete negative cycles automatically',
            bn: 'স্বয়ংক্রিয়ভাবে ঋণাত্মক চক্র মুছে ফেলার জন্য'
          },
          {
            en: 'To double the execution speed of the CPU',
            bn: 'সিপিইউ এর এক্সিকিউশন গতি দ্বিগুণ করতে'
          },
          {
            en: 'Because graphs cannot have more than 10 vertices without it',
            bn: 'কারণ এটি ছাড়া গ্রাফে ১০ টির বেশি নোড থাকতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'If the graph has multiple disconnected components, how can a single Bellman-Ford run reach all of them?',
          bn: 'গ্রাফে একাধিক বিচ্ছিন্ন উপাদান থাকলে একটিমাত্র বেলম্যান-ফোর্ড রান কীভাবে সবার কাছে পৌঁছাবে?'
        },
        explanation: {
          en: 'A super-source with 0-cost directed edges to every vertex allows Bellman-Ford to reach all constraint variables simultaneously.',
          bn: 'প্রতিটি নোডে ০ খরচের ধার সহ সুপার-উৎস যুক্ত করলে বেলম্যান-ফোর্ড একসাথে সমস্ত ভ্যারিয়েবলে পৌঁছাতে পারে।'
        }
      },
      {
        id: 'bp-q3',
        kind: 'mcq',
        topic: 'early-termination-condition',
        question: {
          en: 'Under what condition can Bellman-Ford safely terminate before completing all V - 1 relaxation rounds?',
          bn: 'কোন শর্ত পূরণ হলে বেলম্যান-ফোর্ড সমস্ত V - ১ রাউন্ড শেষ করার আগেই নিরাপদে থেমে যেতে পারে?'
        },
        options: [
          {
            en: 'If an entire round of relaxing all E edges produces zero distance changes (no edges relaxed)',
            bn: 'যদি সমস্ত E ধার রিল্যাক্স করার একটি পূর্ণ রাউন্ডে কোনো দূরত্বের পরিবর্তন না ঘটে (কোনো ধার রিল্যাক্স না হয়)'
          },
          {
            en: 'If the first edge has an odd weight',
            bn: 'যদি প্রথম ধারের ওজন বিজোড় হয়'
          },
          {
            en: 'If the source node has degree 0',
            bn: 'যদি উৎস নোডের ডিগ্রি ০ হয়'
          },
          {
            en: 'When the computer clock ticks 10 times',
            bn: 'যখন কম্পিউটারের ঘড়ি ১০ বার বাজে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If no distance changed during round k, can any distance ever change in round k + 1?',
          bn: 'রাউন্ড k তে কোনো দূরত্ব না বদলালে রাউন্ড k + ১ এ কি কোনো দূরত্ব বদলানো সম্ভব?'
        },
        explanation: {
          en: 'If an iteration produces no updates, the algorithm has reached a stable fixpoint and further rounds would do no work, allowing early exit.',
          bn: 'কোনো রাউন্ডে পরিবর্তন না হলে অ্যালগরিদম স্থায়ী অবস্থায় পৌঁছায়, ফলে পরবর্তী রাউন্ডগুলোর দরকার হয় না।'
        }
      },
      {
        id: 'bp-q4',
        kind: 'mcq',
        topic: 'currency-arbitrage-log-transform',
        question: {
          en: 'Why does currency arbitrage detection use the negative logarithm of exchange rates (-log(R)) when transforming trade graphs for Bellman-Ford?',
          bn: 'কারেন্সি আরবিট্রাজ শনাক্তকরণে কেন বিনিময় হারের ঋণাত্মক লগারিদম (-log(R)) ব্যবহার করে ট্রেড গ্রাফকে বেলম্যান-ফোর্ডের উপযোগী করা হয়?'
        },
        options: [
          {
            en: 'It converts multiplying exchange rates (R1 * R2 * R3 > 1) into adding path weights (-log R1 + -log R2 + -log R3 < 0), turning profitable arbitrage into a negative weight cycle',
            bn: 'এটি গুণকে (R1 * R2 * R3 > ১) যোগে (-log R1 + -log R2 + -log R3 < ০) রূপান্তর করে, যা লাভজনক আরবিট্রাজকে সরাসরি ঋণাত্মক চক্রে পরিণত করে'
          },
          {
            en: 'Because logarithms delete all numbers below 0',
            bn: 'কারণ লগারিদম ০ এর নিচের সংখ্যা মুছে ফেলে'
          },
          {
            en: 'To make currency values fit into 8-bit integers',
            bn: 'মুদ্রার মানকে ৮-বিট ইন্টিজারে রূপান্তর করার জন্য'
          },
          {
            en: 'Because foreign currencies are stored in binary heaps',
            bn: 'কারণ বিদেশি মুদ্রা বাইনারি হিপে রাখা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'log(a * b) = log(a) + log(b). What happens to the inequality when you negate both sides?',
          bn: 'log(a * b) = log(a) + log(b)। উভয় দিকে মাইনাস দিলে অসমতা কী রূপ নেয়?'
        },
        explanation: {
          en: 'Taking -log converts products into sums and reverses inequalities, mapping profitable trade cycles (product > 1) to negative weight cycles (sum < 0).',
          bn: '-log নিলে গুণ যোগে পরিণত হয় এবং অসমতা উল্টে যায়, ফলে লাভজনক চক্র (গুণফল > ১) ঋণাত্মক চক্রে (যোগফল < ০) পরিণত হয়।'
        }
      }
    ]
  }
};
