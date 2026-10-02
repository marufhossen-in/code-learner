import type { Lesson } from '../../../lib/types';

export const graphAlgorithmsCapstoneLesson: Lesson = {
  slug: 'graph-algorithms-capstone',
  tech: 'graph-algorithms',
  title: {
    en: 'Graph Algorithms Capstone — The Production Routing Engine',
    bn: 'গ্রাফ অ্যালগরিদমস ক্যাপস্টোন: প্রোডাকশন রাউটিং ইঞ্জিন'
  },
  summary: {
    en: 'Senior software engineers do not simply memorize graph algorithms; they diagnose real-world constraints to select the precise mathematical tool. Modern systems demand spanning trees for low-cost wiring, Dijkstra or A* for point-to-point routing, and Bellman-Ford for negative-weight ledgers. In addition, engineers employ Floyd-Warshall for all-pairs matrices, component algorithms for condensation, and Edmonds-Karp for flow throughput. This capstone unifies the entire hub into an industrial routing engine.',
    bn: 'দক্ষ সফটওয়্যার ইঞ্জিনিয়াররা কেবল গ্রাফ অ্যালগরিদম মুখস্থ করেন না; তারা বাস্তব সীমাবদ্ধতা বিশ্লেষণ করে সঠিক গাণিতিক টুলটি বেছে নেন। স্বল্প খরচের তার সংযোগে স্প্যানিং ট্রি, দ্রুত পথসন্ধানে ডাইকস্ট্রা বা এ-স্টার এবং ঋণাত্মক ওজনের খাতায় বেলম্যান-ফোর্ড অপরিহার্য। এছাড়া সব জোড়ার দূরত্বে ফ্লয়েড-ওয়ার্শাল, উপাদানের সংকোচনে টারজান ও কোসারাজু এবং নেটওয়ার্ক থ্রুপুট বের করতে এডমন্ডস-কার্প ব্যবহৃত হয়। এই ক্যাপস্টোন পাঠটি পুরো হাবটিকে একটি শিল্পমানের রাউটিং ইঞ্জিনে রূপ দেয়।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'production-decision-framework',
      text: {
        en: 'The Five Invariants of Graph Problem Diagnosis',
        bn: 'গ্রাফ সমস্যা নির্ণয়ের পাঁচটি মৌলিক সূত্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you architect large-scale backend systems, you never receive a prompt asking to run a specific algorithm by name. Instead, you encounter production constraints: delivery trucks must visit customer clusters, transaction ledgers offer rebate discounts, cloud routers balance bandwidth, and microservice builds contain circular dependencies.',
        bn: 'যখন আপনি বড় আকারের ব্যাকএন্ড সিস্টেমের আর্কিটেকচার তৈরি করেন, তখন সরাসরি কোনো অ্যালগরিদমের নাম দিয়ে কাজ আসে না। বরং বাস্তব নানা সীমাবদ্ধতা সামনে আসে: ডেলিভারি গাড়িকে বিভিন্ন গ্রাহকের কাছে পৌঁছাতে হবে, আর্থিক লেনদেনে ছাড় থাকতে পারে, ক্লাউড রাউটারে ব্যান্ডউইথ ভাগ করতে হয় এবং মাইক্রোসার্ভিস বিল্ডে চক্রাকার নির্ভরতা থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To solve these challenges reliably, an engineer must answer five diagnostic questions in order: 1. Is the objective connectivity (Spanning Tree) or routing (Shortest Path)? 2. Is the search single-source or all-pairs? 3. Are edge weights strictly non-negative or arbitrary? 4. Is the metric path cost or network volume? 5. Is the destination known with an available heuristic?',
        bn: 'এই সমস্যাগুলোর নির্ভরযোগ্য সমাধান করতে একজন প্রকৌশলীকে ধারাবাহিকভাবে ৫টি প্রশ্ন করতে হয়: ১. লক্ষ্যটি কি ন্যূনতম সংযোগ (স্প্যানিং ট্রি) নাকি পথসন্ধান (শর্টেস্ট পাথ)? ২. অনুসন্ধানটি কি একক উৎস থেকে নাকি সব জোড়ার মধ্যে? ৩. ধারের ওজন কি কেবল ধনাত্মক নাকি ঋণাত্মকও হতে পারে? ৪. পরিমাপের লক্ষ্য কি পথের খরচ নাকি নেটওয়ার্কের ফ্লো? ৫. গন্তব্য কি পূর্বনির্ধারিত এবং কোনো হিউরিস্টিক জানা আছে কি না?'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'problem-taxonomy',
          def: {
            en: 'The structured decision tree mapping network constraints (density, weights, direction, goal) to optimal algorithms.',
            bn: 'নেটওয়ার্কের ঘনত্ব, ওজন, দিক এবং লক্ষ্যের ওপর ভিত্তি করে সেরা অ্যালগরিদম বেছে নেওয়ার সুশৃঙ্খল পদ্ধতি।'
          }
        },
        {
          term: 'condensation-pipeline',
          def: {
            en: 'The architectural strategy of decomposing cyclic directed graphs into DAG components before applying topological algorithms.',
            bn: 'টপোলজিক্যাল অ্যালগরিদম চালানোর আগে নির্দেশিত চক্রাকার গ্রাফকে অচক্রিক DAG উপাদানে সংকুচিত করার কৌশল।'
          }
        },
        {
          term: 'dual-linear-bounds',
          def: {
            en: 'The mathematical guarantee that algorithms like max-flow and min-cut provide dual certificates for upper and lower performance limits.',
            bn: 'ম্যাক্স-ফ্লো এবং মিন-কাটের মতো অ্যালগরিদমের মাধ্যমে সিস্টেমের কর্মক্ষমতার সর্বোচ্চ ও সর্বনিম্ন সীমার গাণিতিক নিশ্চয়তা।'
          }
        },
        {
          term: 'fail-fast-auditing',
          def: {
            en: 'The practice of verifying graph preconditions (e.g. negative cycle detection, cycle freedom) before committing computed state.',
            bn: 'কোনো হিসাব চূড়ান্ত করার আগে গ্রাফের মৌলিক শর্তগুলো (যেমন ঋণাত্মক চক্রের উপস্থিতি) যাচাই করে ত্রুটি প্রতিহত করা।'
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
      id: 'complete-algorithm-selector-matrix',
      text: {
        en: 'Comprehensive Graph Algorithm Selector Matrix',
        bn: 'গ্রাফ অ্যালগরিদম নির্বাচন ও ব্যবহারের সম্পূর্ণ ম্যাট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Review the seven core algorithm families of modern computer science to match network properties directly to the optimal computational tool.',
        bn: 'আধুনিক কম্পিউটার বিজ্ঞানের ৭টি মূল অ্যালগরিদম পরিবারের বৈশিষ্ট্যগুলো পর্যালোচনা করে গ্রাফের ধরনের সাথে সঠিক টুলটি মিলিয়ে নিন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm / Tool', bn: 'অ্যালগরিদম / টুল' },
        { en: 'Core Problem Domain', bn: 'মূল সমস্যার ক্ষেত্র' },
        { en: 'Edge Weight Constraints', bn: 'ধারের ওজনের সীমাবদ্ধতা' },
        { en: 'Asymptotic Runtime', bn: 'অ্যাসিম্পটোটিক সময়' }
      ],
      rows: [
        [
          { en: 'Kruskal and Prim', bn: 'ক্রুসকল এবং প্রিম' },
          { en: 'Minimum Spanning Tree (MST)', bn: 'ন্যূনতম স্প্যানিং ট্রি (MST)' },
          { en: 'Undirected real edge weights', bn: 'অমুখী বাস্তব ধারের ওজন' },
          { en: 'O(E log V)', bn: 'O(E log V)' }
        ],
        [
          { en: 'Dijkstra with Min-Heap', bn: 'ডাইকস্ট্রা (মিন-হিপ সহ)' },
          { en: 'Single-Source Shortest Path', bn: 'একক উৎস থেকে সর্বনিম্ন পথ' },
          { en: 'Strictly non-negative (w >= 0)', bn: 'কেবল অ-ঋণাত্মক (w >= ০)' },
          { en: 'O((V + E) log V)', bn: 'O((V + E) log V)' }
        ],
        [
          { en: 'Bellman-Ford Algorithm', bn: 'বেলম্যান-ফোর্ড অ্যালগরিদম' },
          { en: 'Single-Source Shortest Path with cycle audit', bn: 'একক উৎস থেকে পথ ও চক্র নিরীক্ষা' },
          { en: 'Arbitrary (+, -, 0) real weights', bn: 'যেকোনো বাস্তব ওজন (+, -, ০)' },
          { en: 'O(V * E)', bn: 'O(V * E)' }
        ],
        [
          { en: 'Floyd-Warshall Algorithm', bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম' },
          { en: 'All-Pairs Shortest Paths (APSP)', bn: 'সমস্ত জোড়ার মধ্যবর্তী পথ (APSP)' },
          { en: 'Arbitrary weights (detects diagonal cycles)', bn: 'যেকোনো ওজন (ডায়াগোনাল চক্র শনাক্ত করে)' },
          { en: 'O(V^3)', bn: 'O(V^৩)' }
        ],
        [
          { en: 'A* Guided Heuristic Search', bn: 'এ-স্টার লক্ষ্যভিত্তিক অনুসন্ধান' },
          { en: 'Targeted Point-to-Point Pathfinding', bn: 'সুনির্দিষ্ট বিন্দু-থেকে-বিন্দু পথসন্ধান' },
          { en: 'Non-negative with admissible heuristic', bn: 'গ্রহণযোগ্য হিউরিস্টিক সহ অ-ঋণাত্মক' },
          { en: 'O(E) focused beam', bn: 'O(E) কেন্দ্রীভূত রশ্মি' }
        ],
        [
          { en: 'Kosaraju and Tarjan', bn: 'কোসারাজু এবং টারজান' },
          { en: 'Strongly Connected Components (SCC)', bn: 'দৃঢ়ভাবে সংযুক্ত উপাদান (SCC)' },
          { en: 'Directed unweighted or weighted graphs', bn: 'নির্দেশিত ওজনযুক্ত বা ওজনহীন গ্রাফ' },
          { en: 'O(V + E)', bn: 'O(V + E)' }
        ],
        [
          { en: 'Edmonds-Karp Max-Flow', bn: 'এডমন্ডস-কার্প ম্যাক্স-ফ্লো' },
          { en: 'Maximum Network Flow and Minimum Cut', bn: 'সর্বোচ্চ নেটওয়ার্ক ফ্লো ও সর্বনিম্ন কাট' },
          { en: 'Non-negative edge capacities', bn: 'অ-ঋণাত্মক ধারের ক্যাপাসিটি' },
          { en: 'O(V * E^2)', bn: 'O(V * E^২)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-capstone-engine',
      text: {
        en: 'Executable Production Routing Engine',
        bn: 'শিল্পমানের রাউটিং ইঞ্জিনের পূর্ণাঙ্গ বাস্তবায়ন ও সিমুলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript system encapsulates a unified Graph Engine. It inspects edge attributes, detects negative weights, executes Bellman-Ford, and validates cycle safety across 3 vertices.',
        bn: 'নিচের টাইপস্ক্রিপ্ট সিস্টেমটি একটি সমন্বিত গ্রাফ ইঞ্জিন বাস্তবায়ন করে। এটি ধারের বৈশিষ্ট্য বিশ্লেষণ করে, ঋণাত্মক ওজন শনাক্ত করে, বেলম্যান-ফোর্ড চালায় এবং ৩টি নোডের মাঝে চক্রের নিরাপত্তা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      code: `class GraphEngine {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
    this.vCount = vertices.length;
    this.eCount = edges.length;
  }

  hasNegativeWeights() {
    return this.edges.some(edge => edge.w < 0);
  }

  solveShortestPath(source) {
    const dist = new Map();
    for (const v of this.vertices) dist.set(v, Infinity);
    dist.set(source, 0);

    // V - 1 relaxation rounds
    for (let i = 1; i <= this.vCount - 1; i++) {
      let changed = false;
      for (const edge of this.edges) {
        const du = dist.get(edge.u);
        if (du !== Infinity && du + edge.w < dist.get(edge.v)) {
          dist.set(edge.v, du + edge.w);
          changed = true;
        }
      }
      if (!changed) break;
    }

    // Round V: Negative cycle detection
    let hasCycle = false;
    for (const edge of this.edges) {
      const du = dist.get(edge.u);
      if (du !== Infinity && du + edge.w < dist.get(edge.v)) {
        hasCycle = true;
        break;
      }
    }

    return { dist, hasCycle };
  }
}

const engine = new GraphEngine(['A', 'B', 'C'], [
  { u: 'A', v: 'B', w: 3 },
  { u: 'B', v: 'C', w: -1 },
  { u: 'A', v: 'C', w: 5 }
]);

const res = engine.solveShortestPath('A');
console.log('Negative weights detected:', engine.hasNegativeWeights());
// Output: Negative weights detected: true
console.log('Shortest to C:', res.dist.get('C'));
// Output: Shortest to C: 2
console.log('Negative cycle:', res.hasCycle);
// Output: Negative cycle: false`
    },
    {
      type: 'heading',
      id: 'architectural-takeaways',
      text: {
        en: 'Architectural Rules for Production Systems',
        bn: 'প্রোডাকশন সিস্টেমের জন্য গুরুত্বপূর্ণ স্থাপত্যিক নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In mission-critical infrastructure, executing an algorithm outside its mathematical preconditions produces catastrophic failures. For instance, feeding negative edges to Dijkstra produces incorrect routing without throwing an exception. Attempting topological sort on graphs with cycles causes infinite loops. By combining the diagnostic matrix with rigorous runtime checks, engineers build resilient networks.',
        bn: 'গুরুত্বপূর্ণ সফটওয়্যার অবকাঠামোতে গাণিতিক শর্ত না মেনে কোনো অ্যালগরিদম চালালে ভয়াবহ ভুল ফলাফল হতে পারে। উদাহরণস্বরূপ, ডাইকস্ট্রাতে ঋণাত্মক ধার দিলে কোনো এরর না দিয়ে নিঃশব্দে ভুল পথ তৈরি হয়। চক্রযুক্ত গ্রাফে টপোলজিক্যাল সর্ট চালালে অসীম লুপ তৈরি হয়। এই ডায়াগনস্টিক ম্যাট্রিক্স এবং রানটাইম ভ্যালিডেশন একত্রিত করে ইঞ্জিনিয়াররা অত্যন্ত নির্ভরযোগ্য সিস্টেম তৈরি করেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Audit preconditions first: Always verify edge weights and directed cycle constraints before running path solvers.',
          bn: 'শর্তাবলি আগে যাচাই করুন: পথ বের করার আগে সর্বদা ধারের ওজন এবং চক্রের উপস্থিতি নিশ্চিত করুন।'
        },
        {
          en: 'Match density to algorithm: Prefer Kruskal and Dijkstra on sparse graphs; consider Prim and Floyd-Warshall on dense graphs.',
          bn: 'ঘনত্বের সাথে মেলান: বিরল গ্রাফে ক্রুসকল ও ডাইকস্ট্রা এবং ঘন গ্রাফে প্রিম ও ফ্লয়েড-ওয়ার্শাল ব্যবহার করুন।'
        },
        {
          en: 'Decompose with condensation: When directed cycles complicate dependencies, condense SCCs into a DAG first.',
          bn: 'ঘনীভবন দিয়ে সরলীকরণ করুন: চক্রযুক্ত জটিল ডিপেন্ডেন্সিতে আগে SCC গুলোকে সংকুচিত করে DAG তৈরি করুন।'
        },
        {
          en: 'Dual verification: Use max-flow and min-cut duality to verify network throughput limits and pinpoint critical links.',
          bn: 'দ্বৈত নিশ্চিতকরণ: নেটওয়ার্কের থ্রুপুট সীমা নিশ্চিত করতে এবং দুর্বল সংযোগ শনাক্ত করতে ম্যাক্স-ফ্লো ও মিন-কাট ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gac-ex1',
      kind: 'mcq',
      topic: 'algorithm-selection-negative-weights',
      question: {
        en: 'When a weighted directed graph contains negative edge weights and you need single-source shortest paths, which algorithm must you select?',
        bn: 'যখন একটি নির্দেশিত গ্রাফে ঋণাত্মক ধারের ওজন থাকে এবং একক উৎস থেকে সর্বনিম্ন পথ বের করতে হয়, তখন কোন অ্যালগরিদমটি নির্বাচন করতে হবে?'
      },
      options: [
        {
          en: 'Bellman-Ford algorithm, because it supports negative weights and identifies reachable negative cycles',
          bn: 'বেলম্যান-ফোর্ড অ্যালগরিদম, কারণ এটি ঋণাত্মক ওজন সমর্থন করে এবং ঋণাত্মক চক্র শনাক্ত করতে পারে'
        },
        {
          en: 'Dijkstra’s algorithm with a min-heap',
          bn: 'মিন-হিপ সহ ডাইকস্ট্রার অ্যালগরিদম'
        },
        {
          en: 'Breadth-First Search (BFS)',
          bn: 'ব্রেডথ-ফার্স্ট সার্চ (BFS)'
        },
        {
          en: 'Binary Search on array',
          bn: 'অ্যারেতে বাইনারি সার্চ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dijkstra’s greedy assumption fails when negative weights exist. Which algorithm uses V - 1 rounds of relaxation?',
        bn: 'ঋণাত্মক ওজনের ক্ষেত্রে ডাইকস্ট্রা ভুল ফলাফল দেয়। কোন অ্যালগরিদম V - ১ রাউন্ড রিল্যাক্সেশন ব্যবহার করে?'
      },
      explanation: {
        en: 'Bellman-Ford handles arbitrary negative edge weights and correctly audits for negative cycles during its V-th iteration.',
        bn: 'বেলম্যান-ফোর্ড যেকোনো ঋণাত্মক ওজন পরিচালনা করে এবং V-তম পাসে ঋণাত্মক চক্র সফলভাবে শনাক্ত করে।'
      }
    },
    {
      id: 'gac-ex2',
      kind: 'mcq',
      topic: 'goal-directed-search-choice',
      question: {
        en: 'If you need to find the shortest route between two specific cities on a map with known geographic coordinates, which algorithm is most computationally efficient?',
        bn: 'ভৌগোলিক স্থানাঙ্ক জানা আছে এমন মানচিত্রে দুটি নির্দিষ্ট শহরের মধ্যে সবচেয়ে দ্রুত পথ বের করতে কোন অ্যালগরিদমটি সবচেয়ে বেশি দক্ষ?'
      },
      options: [
        {
          en: 'A* search algorithm using Euclidean or Manhattan distance as an admissible heuristic',
          bn: 'ইউক্লিডীয় বা ম্যানহাটন দূরত্বকে গ্রহণযোগ্য হিউরিস্টিক হিসেবে ব্যবহার করে এ-স্টার (A*) সার্চ অ্যালগরিদম'
        },
        {
          en: 'Floyd-Warshall algorithm computing all pairs',
          bn: 'সব জোড়ার জন্য ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম'
        },
        {
          en: 'Kruskal’s minimum spanning tree algorithm',
          bn: 'ক্রুসকলের ন্যূনতম স্প্যানিং ট্রি অ্যালগরিদম'
        },
        {
          en: 'Exhaustive depth-first search exploring all paths',
          bn: 'সব পথ ঘুরে দেখার এক্সহস্টিভ ডেপথ-ফার্স্ট সার্চ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Which algorithm focuses its exploration beam directly toward the destination coordinate using a heuristic?',
        bn: 'কোন অ্যালগরিদম হিউরিস্টিক ব্যবহার করে সার্চকে সরাসরি গন্তব্যের স্থানাঙ্কের দিকে পরিচালিত করে?'
      },
      explanation: {
        en: 'A* combines certified path cost g(n) with heuristic estimate h(n) to find the target exploring far fewer nodes than blind search.',
        bn: 'A* পথ খরচ g(n) এবং হিউরিস্টিক h(n) একত্রিত করে অন্ধ অনুসন্ধানের চেয়ে অনেক কম নোড পরীক্ষা করে লক্ষ্যে পৌঁছায়।'
      }
    },
    {
      id: 'gac-ex3',
      kind: 'mcq',
      topic: 'condensation-before-topo-sort',
      question: {
        en: 'Why must a directed graph with cycles be condensed into strongly connected components before attempting topological ordering?',
        bn: 'চক্রযুক্ত কোনো নির্দেশিত গ্রাফে টপোলজিক্যাল সাজানোর আগে কেন তাকে দৃঢ়ভাবে সংযুক্ত উপাদানে (SCC) সংকুচিত করতে হবে?'
      },
      options: [
        {
          en: 'Because topological sorting is mathematically impossible on cyclic graphs, but the condensation graph is guaranteed to be a DAG',
          bn: 'কারণ চক্রাকার গ্রাফে টপোলজিক্যাল সাজানো গাণিতিকভাবে অসম্ভব, কিন্তু ঘনীভবন গ্রাফটি নিশ্চিতভাবে একটি অচক্রিক DAG'
        },
        {
          en: 'To reduce the number of vertices to exactly 0',
          bn: 'শীর্ষবিন্দুর সংখ্যা ঠিক ০ তে নামিয়ে আনার জন্য'
        },
        {
          en: 'Because edges with weight 1 must be eliminated',
          bn: 'কারণ ১ ওজনের সব ধার মুছে ফেলতে হয়'
        },
        {
          en: 'To convert strings into floating point numbers',
          bn: 'স্ট্রিংকে ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can you linearize dependencies if task A depends on B and B depends on A?',
        bn: 'টাস্ক A যদি B এর ওপর এবং B যদি A এর ওপর নির্ভর করে, তবে তাদের কি সরলরেখায় সাজানো সম্ভব?'
      },
      explanation: {
        en: 'Collapsing mutual cycles into SCC super-nodes removes all cycles, producing an acyclic condensation graph that admits a valid topological sort.',
        bn: 'পারস্পরিক চক্রগুলোকে একটি মেটা-নোডে রূপান্তর করলে সব চক্র দূর হয় এবং প্রাপ্ত DAG তে টপোলজিক্যাল সর্ট সফলভাবে চালানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'graph-algorithms-capstone-quiz',
    title: {
      en: 'Graph Algorithms Capstone Quiz',
      bn: 'গ্রাফ অ্যালগরিদমস ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'gac-q1',
        kind: 'mcq',
        topic: 'all-pairs-dense-vs-sparse',
        question: {
          en: 'For computing All-Pairs Shortest Paths (APSP) on a dense graph with V vertices where E is close to V^2 and all weights are non-negative, which approach is simplest and optimal?',
          bn: 'V শীর্ষবিন্দু বিশিষ্ট একটি ঘন গ্রাফে (যেখানে E প্রায় V^২ এর সমান এবং সব ওজন ধনাত্মক) সব জোড়ার পথ বের করতে কোন পদ্ধতি সবচেয়ে সহজ ও সর্বোত্তম?'
        },
        options: [
          {
            en: 'Floyd-Warshall algorithm with clean O(V^3) triply-nested loops',
            bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদমের সহজ ৩টি নেস্টেড লুপ সহ O(V^৩) পদ্ধতি'
          },
          {
            en: 'Running BFS from 1 node only',
            bn: 'কেবল ১টি নোড থেকে BFS চালানো'
          },
          {
            en: 'Edmonds-Karp max flow algorithm',
            bn: 'এডমন্ডস-কার্পের ম্যাক্স ফ্লো অ্যালগরিদম'
          },
          {
            en: 'Deleting all vertices with even IDs',
            bn: 'জোড় আইডির সমস্ত নোড মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'On dense graphs where E is approximately V^2, V runs of Dijkstra also take O(V^3) but have complex heap overhead.',
          bn: 'ঘন গ্রাফে যেখানে E প্রায় V^২, সেখানে V বার ডাইকস্ট্রা চালালেও O(V^৩) সময় লাগে এবং হিপের বাড়তি জটিলতা থাকে।'
        },
        explanation: {
          en: 'Floyd-Warshall runs in concise O(V^3) time without priority queue overhead, making it ideal for dense all-pairs matrix computations.',
          bn: 'ফ্লয়েড-ওয়ার্শাল কোনো প্রায়োরিটি কিউ ছাড়াই অত্যন্ত দ্রুত O(V^৩) সময়ে কাজ করে, যা ঘন গ্রাফের ম্যাট্রিক্সের জন্য সবচেয়ে উপযোগী।'
        }
      },
      {
        id: 'gac-q2',
        kind: 'mcq',
        topic: 'spanning-tree-vs-shortest-path',
        question: {
          en: 'What is the fundamental structural difference between a Minimum Spanning Tree (MST) and a Shortest Path Tree (SPT)?',
          bn: 'ন্যূনতম স্প্যানিং ট্রি (MST) এবং শর্টেস্ট পাথ ট্রির (SPT) মধ্যে মৌলিক কাঠামোগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'An MST minimizes the total sum of all edge weights in the tree, whereas an SPT minimizes the distance from a specific source to each node',
            bn: 'MST ট্রির সমস্ত ধারের মোট ওজনের সমষ্টিকে সর্বনিম্ন করে, আর SPT একটি নির্দিষ্ট উৎস থেকে প্রতিটি নোডের দূরত্ব সর্বনিম্ন করে'
          },
          {
            en: 'An MST can only have 3 vertices',
            bn: 'একটি MST তে কেবল ৩টি নোড থাকতে পারে'
          },
          {
            en: 'An SPT contains cycles, while an MST does not',
            bn: 'SPT তে চক্র থাকে, কিন্তু MST তে কোনো চক্র থাকে না'
          },
          {
            en: 'They are mathematically identical in all graphs',
            bn: 'সমস্ত গ্রাফেই তারা গাণিতিকভাবে হুবহু এক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does the cheapest road network connecting all houses guarantee the shortest travel distance from your specific house to work?',
          bn: 'সব বাড়ি সংযুক্তকারী সবচেয়ে সস্তা রাস্তা কি আপনার বাড়ি থেকে অফিসে যাওয়ার দ্রুততম পথ নিশ্চিত করে?'
        },
        explanation: {
          en: 'MST minimizes global cable/infrastructure cost, while SPT minimizes point-to-point transit latency from a chosen root.',
          bn: 'MST সামগ্রিক তার বা পাইপের খরচ কমায়, আর SPT একটি কেন্দ্র থেকে প্রতিটি দূরবর্তী বিন্দুর পৌঁছানোর সময় কমায়।'
        }
      },
      {
        id: 'gac-q3',
        kind: 'mcq',
        topic: 'network-bottleneck-analysis',
        question: {
          en: 'If a cloud provider needs to identify the set of physical fiber links whose simultaneous failure would partition two data centers, which algorithmic tool provides this?',
          bn: 'কোনো ক্লাউড প্রোভাইডার যদি এমন কিছু ফাইবার সংযোগ শনাক্ত করতে চায় যা একসাথে নষ্ট হলে দুটি ডেটা সেন্টার বিচ্ছিন্ন হয়ে যাবে, তবে কোন অ্যালগরিদমটি তা প্রদান করে?'
        },
        options: [
          {
            en: 'The Minimum Cut derived from the residual graph of the Edmonds-Karp maximum flow algorithm',
            bn: 'এডমন্ডস-কার্প ম্যাক্সিমাম ফ্লো অ্যালগরিদমের অবশিষ্ট গ্রাফ থেকে প্রাপ্ত মিনিমাম কাট'
          },
          {
            en: 'Prim’s algorithm on an unweighted tree',
            bn: 'ওজনহীন ট্রিতে প্রিমের অ্যালগরিদম'
          },
          {
            en: 'A binary heap sort on node IDs',
            bn: 'নোড আইডির ওপর বাইনারি হিপ সর্ট'
          },
          {
            en: 'Breadth-First Search without edge weights',
            bn: 'ধারের ওজন ব্যতীত ব্রেডথ-ফার্স্ট সার্চ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Max-Flow Min-Cut theorem states that the minimum cut is the exact capacity bottleneck partitioning the network.',
          bn: 'ম্যাক্স-ফ্লো মিন-কাট উপপাদ্য বলে যে মিনিমাম কাটটিই নেটওয়ার্ককে দ্বিখণ্ডিত করার মূল বোতলনেক নির্দেশ করে।'
        },
        explanation: {
          en: 'The minimum cut partitions the network into source and sink sets, directly identifying the critical bottleneck links.',
          bn: 'মিনিমাম কাট নেটওয়ার্ককে উৎস ও সিংক অংশে ভাগ করে সবচেয়ে দুর্বল ও গুরুত্বপূর্ণ সংযোগগুলোকে সরাসরি শনাক্ত করে।'
        }
      },
      {
        id: 'gac-q4',
        kind: 'mcq',
        topic: 'admissible-vs-inadmissible-heuristic',
        question: {
          en: 'In A* search, what is the risk of utilizing an inadmissible heuristic that overestimates remaining distance (h(n) > h*(n))?',
          bn: 'A* সার্চে যদি এমন কোনো অননুমোদিত হিউরিস্টিক ব্যবহার করা হয় যা আসল দূরত্বের বেশি অনুমান করে (h(n) > h*(n)), তবে কী ঝুঁকি তৈরি হয়?'
        },
        options: [
          {
            en: 'The algorithm may terminate prematurely with a sub-optimal path, forfeiting the shortest-path guarantee',
            bn: 'অ্যালগরিদমটি সময়ের আগেই একটি নিম্নমানের বিকল্প পথ দিয়ে থেমে যেতে পারে, ফলে সর্বনিম্ন পথের নিশ্চয়তা নষ্ট হয়'
          },
          {
            en: 'The program will run out of stack memory immediately',
            bn: 'প্রোগ্রামটি তাৎক্ষণিকভাবে স্ট্যাক মেমরি শেষ করে ফেলবে'
          },
          {
            en: 'The graph will delete half its edges automatically',
            bn: 'গ্রাফটি স্বয়ংক্রিয়ভাবে তার অর্ধেক ধার মুছে ফেলবে'
          },
          {
            en: 'All edge costs will turn into negative numbers',
            bn: 'সমস্ত ধারের খরচ ঋণাত্মক সংখ্যায় পরিণত হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a good path is falsely penalized by an exaggerated heuristic, will the search explore it first?',
          bn: 'একটি ভালো পথের সামনে যদি অতিরিক্ত দূরত্বের মিথ্যা জরিমানা ধরা হয়, তবে কি সার্চ সেদিকে যাবে?'
        },
        explanation: {
          en: 'Overestimating remaining distance can penalize the true optimal path, causing A* to pop and return a suboptimal goal path first.',
          bn: 'দূরত্ব বেশি অনুমান করলে আসল সর্বোত্তম পথটি অবহেলিত হয়, ফলে A* অন্য একটি অপেক্ষাকৃত দীর্ঘ পথকে আগে চূড়ান্ত করে ফেলে।'
        }
      }
    ]
  }
};
