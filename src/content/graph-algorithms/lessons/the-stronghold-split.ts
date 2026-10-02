import type { Lesson } from '../../../lib/types';

export const strongholdSplitLesson: Lesson = {
  slug: 'the-stronghold-split',
  tech: 'graph-algorithms',
  title: {
    en: 'Strongly Connected Components — Tarjan and Kosaraju Algorithms',
    bn: 'দৃঢ়ভাবে সংযুক্ত উপাদান: টারজান ও কোসারাজু অ্যালগরিদম'
  },
  summary: {
    en: 'In directed graphs, reachability is asymmetric: u reaching v does not imply v can reach u. A Strongly Connected Component (SCC) is a maximal subset of vertices where mutual reachability holds between every pair. Compacting each SCC into a single super-node yields the condensation graph, which is mathematically guaranteed to be a Directed Acyclic Graph (DAG). Both Kosaraju’s two-pass algorithm and Tarjan’s single-pass lowlink traversal identify all SCCs in optimal linear O(V + E) time, enabling topological sorting, circular dependency resolution, and 2-SAT satisfiability proofs.',
    bn: 'নির্দেশিত গ্রাফে পৌঁছানোর সম্পর্ক অপ্রতিসম: u থেকে v তে যাওয়া গেলেও v থেকে u তে ফিরে আসার নিশ্চয়তা থাকে না। একটি দৃঢ়ভাবে সংযুক্ত উপাদান (SCC) হলো নোডগুলোর এমন একটি সর্বাধিক উপসেট যেখানে প্রতিটি নোড থেকে অন্য প্রতিটি নোডে উভয় দিকে পৌঁছানো যায়। প্রতিটি SCC কে একটি একক নোডে সংকুচিত করলে ঘনীভবন গ্রাফ তৈরি হয়, যা গাণিতিকভাবে একটি নির্দেশিত অচক্রিক গ্রাফ (DAG)। কোসারাজুর দুই-ধাপের অ্যালগরিদম এবং টারজানের এক-ধাপের লো-লিংক ট্রাভার্সাল উভয়ই সর্বোত্তম রৈখিক O(V + E) সময়ে সমস্ত SCC বের করে।'
  },
  minutes: 27,
  nextLesson: {
    slug: 'astar-and-the-compass',
    tech: 'graph-algorithms',
    title: {
      en: 'A* Search and Heuristics — Guided Pathfinding',
      bn: 'এ-স্টার সার্চ ও হিউরিস্টিকস: লক্ষ্যভিত্তিক পথসন্ধান'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'anatomy-of-directed-connectivity',
      text: {
        en: 'The Asymmetry of Directed Reachability',
        bn: 'নির্দেশিত গ্রাফের সংযোগ ও অপ্রতিসমতার শারীরস্থান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you explore an undirected graph, connectivity is bidirectional: if A can reach B, B can always reach A. In directed graphs, this property fails. Edge direction introduces one-way streets, making reachability an asymmetric relation.',
        bn: 'যখন আপনি একটি অমুখী গ্রাফ ঘুরে দেখেন, সংযোগ সবসময় দ্বিমুখী থাকে: যদি A থেকে B তে যাওয়া যায়, তবে B থেকেও A তে পৌঁছানো নিশ্চিত। কিন্তু নির্দেশিত গ্রাফে এই নিয়ম খাটে না। ধারের দিক একমুখী রাস্তার মতো কাজ করে, ফলে পৌঁছানোর সম্পর্কটি অপ্রতিসম হয়ে ওঠে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Strongly Connected Component (SCC) restores symmetry by isolating maximal subgraphs where every vertex can reach every other vertex. Because mutual reachability is an equivalence relation (reflexive, symmetric, and transitive), the SCCs partition all vertices into disjoint subsets without overlap.',
        bn: 'দৃঢ়ভাবে সংযুক্ত উপাদান (SCC) এমন সর্বাধিক উপ-গ্রাফ চিহ্নিত করে যেখানে প্রতিটি নোড থেকে অন্য প্রতিটি নোডে উভয় দিকে যাওয়া সম্ভব। যেহেতু পারস্পরিক পৌঁছানোর সম্পর্কটি একটি সমতুল্যতা সম্পর্ক (প্রতিফলনশীল, প্রতিসম এবং সংক্রামক), তাই SCC গ্রাফের সমস্ত নোডকে পরস্পরছেদী নয় এমন উপসেটে নিখুঁতভাবে বিভক্ত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'strongly-connected-component',
          def: {
            en: 'A maximal subgraph of a directed graph where every vertex is reachable from every other vertex within the component.',
            bn: 'নির্দেশিত গ্রাফের এমন একটি সর্বাধিক উপ-গ্রাফ যেখানে ভেতরের প্রতিটি নোড অন্য প্রতিটি নোড থেকে দ্বিমুখীভাবে পৌঁছানো যায়।'
          }
        },
        {
          term: 'condensation-dag',
          def: {
            en: 'The directed acyclic graph formed by contracting each strongly connected component into a single meta-vertex.',
            bn: 'প্রতিটি দৃঢ়ভাবে সংযুক্ত উপাদানকে একটি একক মেটা-নোডে সংকুচিত করে গঠিত নির্দেশিত অচক্রিক গ্রাফ (DAG)।'
          }
        },
        {
          term: 'kosaraju-algorithm',
          def: {
            en: 'A two-pass linear-time O(V + E) algorithm that uses DFS finish order on G followed by DFS on the transposed graph G^T.',
            bn: 'একটি দুই-ধাপের রৈখিক O(V + E) অ্যালগরিদম যা গ্রাফের ফিনিশ সময় এবং তার বিপরীত গ্রাফে DFS চালিয়ে SCC শনাক্ত করে।'
          }
        },
        {
          term: 'tarjan-algorithm',
          def: {
            en: 'A single-pass linear-time O(V + E) DFS algorithm tracking discovery times and low-link values on an explicit stack.',
            bn: 'একটি এক-ধাপের রৈখিক O(V + E) DFS অ্যালগরিদম যা স্ট্যাক এবং ডিসকভারি ও লো-লিংক মান ট্র্যাক করে SCC খুঁজে বের করে।'
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
      id: 'kosaraju-vs-tarjan-table',
      text: {
        en: 'Algorithmic Comparison: Kosaraju vs Tarjan',
        bn: 'অ্যালগরিদমের তুলনা: কোসারাজু বনাম টারজান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Both Kosaraju’s and Tarjan’s algorithms achieve optimal linear asymptotic runtime, but their mechanics and memory structures differ significantly.',
        bn: 'কোসারাজু এবং টারজান উভয়ের অ্যালগরিদমই সর্বোত্তম রৈখিক সময়ে কাজ করে, তবে তাদের মেমরি ব্যবহারের কাঠামো ও কৌশলে স্পষ্ট পার্থক্য রয়েছে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Characteristic', bn: 'পরিমাপ / বৈশিষ্ট্য' },
        { en: 'Kosaraju’s Algorithm', bn: 'কোসারাজুর অ্যালগরিদম' },
        { en: 'Tarjan’s Algorithm', bn: 'টারজানের অ্যালগরিদম' }
      ],
      rows: [
        [
          { en: 'DFS Passes Required', bn: 'প্রয়োজনীয় DFS পাস' },
          { en: '2 full passes (original graph and transposed graph)', bn: '২টি পূর্ণ পাস (মূল গ্রাফ এবং বিপরীত গ্রাফ)' },
          { en: '1 single pass with discovery and low-link numbers', bn: '১টি একক পাস (ডিসকভারি ও লো-লিংক নম্বর সহ)' }
        ],
        [
          { en: 'Memory Footprint', bn: 'মেমরির ব্যবহার' },
          { en: 'Requires explicit transposed graph representation', bn: 'বিপরীত গ্রাফের পৃথক মেমরি কাঠামোর প্রয়োজন' },
          { en: 'Only requires an auxiliary traversal stack', bn: 'কেবল একটি অতিরিক্ত ট্রাভার্সাল স্ট্যাকের প্রয়োজন' }
        ],
        [
          { en: 'Conceptual Intuition', bn: 'ধারণাগত সহজবোধ্যতা' },
          { en: 'Very intuitive: topological peel on reversed graph', bn: 'খুবই সহজবোধ্য: বিপরীত গ্রাফে টপোলজিক্যাল উন্মোচন' },
          { en: 'Requires tracking tree edges and back-edges', bn: 'ট্রি ধার এবং ব্যাক-ধার সতর্কভাবে ট্র্যাক করতে হয়' }
        ],
        [
          { en: 'Asymptotic Complexity', bn: 'তাত্ত্বিক সময় জটিলতা' },
          { en: 'O(V + E) linear time', bn: 'O(V + E) রৈখিক সময়' },
          { en: 'O(V + E) linear time', bn: 'O(V + E) রৈখিক সময়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-kosaraju-code',
      text: {
        en: 'Executable Kosaraju Algorithm Implementation',
        bn: 'কোসারাজু অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও এক্সিকিউশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program runs Kosaraju’s algorithm on a 5-node directed graph. Vertices A, B, and C form a mutual cycle (SCC 1), while vertices D and E are downstream singletons (SCC 2 and SCC 3).',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৫-নোডের একটি নির্দেশিত গ্রাফে কোসারাজুর অ্যালগরিদম চালায়। শীর্ষবিন্দু A, B, এবং C একটি চক্র গঠন করে (SCC ১), এবং D ও E হলো একমুখী ডাউনস্ট্রিম উপাদান (SCC ২ ও SCC ৩)।'
      }
    },
    {
      type: 'code',
      code: `function findSCCs(vertices, edges) {
  const adj = new Map();
  const revAdj = new Map();
  for (const v of vertices) {
    adj.set(v, []);
    revAdj.set(v, []);
  }
  for (const { u, v } of edges) {
    adj.get(u).push(v);
    revAdj.get(v).push(u);
  }

  const visited = new Set();
  const finishStack = [];

  // Pass 1: DFS on original graph to determine finish order
  function dfs1(u) {
    visited.add(u);
    for (const v of adj.get(u)) {
      if (!visited.has(v)) dfs1(v);
    }
    finishStack.push(u);
  }

  for (const v of vertices) {
    if (!visited.has(v)) dfs1(v);
  }

  // Pass 2: DFS on reversed graph in decreasing finish time order
  visited.clear();
  const sccs = [];

  function dfs2(u, component) {
    visited.add(u);
    component.push(u);
    for (const v of revAdj.get(u)) {
      if (!visited.has(v)) dfs2(v, component);
    }
  }

  while (finishStack.length > 0) {
    const root = finishStack.pop();
    if (!visited.has(root)) {
      const component = [];
      dfs2(root, component);
      sccs.push(component);
    }
  }

  return sccs;
}

const vertices = ['A', 'B', 'C', 'D', 'E'];
// Directed edges: A -> B -> C -> A (cycle), C -> D -> E
const edges = [
  { u: 'A', v: 'B' },
  { u: 'B', v: 'C' },
  { u: 'C', v: 'A' },
  { u: 'C', v: 'D' },
  { u: 'D', v: 'E' }
];

const components = findSCCs(vertices, edges);
console.log('Total SCCs found:', components.length);
// Output: Total SCCs found: 3
components.forEach((c, idx) => console.log('SCC ' + (idx + 1) + ':', c.join(', ')));
// Output: SCC 1: A, C, B
// Output: SCC 2: D
// Output: SCC 3: E`
    },
    {
      type: 'heading',
      id: 'condensation-and-applications',
      text: {
        en: 'The Condensation DAG and Production Impact',
        bn: 'ঘনীভবন DAG এবং বাস্তব প্রযুক্তিতে ব্যবহার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When each strongly connected component is collapsed into a single meta-vertex, the resulting graph is called the Condensation Graph. The condensation graph is guaranteed to be a Directed Acyclic Graph (DAG) with zero cycles. This enables engineers to perform topological sorting, compile order resolution, and dynamic programming across complex cyclic networks.',
        bn: 'যখন প্রতিটি দৃঢ়ভাবে সংযুক্ত উপাদানকে একটি একক মেটা-নোডে সংকুচিত করা হয়, তখন প্রাপ্ত গ্রাফকে ঘনীভবন গ্রাফ বলা হয়। এই ঘনীভবন গ্রাফে কোনো চক্র থাকে না, অর্থাৎ এটি নিশ্চিতভাবে একটি নির্দেশিত অচক্রিক গ্রাফ (DAG)। এর ফলে ইঞ্জিনিয়াররা চক্রযুক্ত জটিল নেটওয়ার্কেও টপোলজিক্যাল সাজানো, কম্পাইলেশন অর্ডার এবং ডায়নামিক প্রোগ্রামিং চালাতে পারেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Equivalence partitioning: Mutual reachability splits any directed graph into disjoint strongly connected components.',
          bn: 'সমতুল্যতা বিভাজন: পারস্পরিক পৌঁছানোর সম্পর্ক যেকোনো নির্দেশিত গ্রাফকে পৃথক পৃথক দৃঢ়ভাবে সংযুক্ত উপাদানে বিভক্ত করে।'
        },
        {
          en: 'Condensation guarantees DAG: Contracting each SCC into a single super-node yields a Directed Acyclic Graph.',
          bn: 'ঘনীভবনের DAG নিশ্চয়তা: প্রতিটি SCC কে একটি নোডে সংকুচিত করলে প্রাপ্ত গ্রাফটি চক্রহীন DAG হতে বাধ্য।'
        },
        {
          en: 'Linear time efficiency: Both Kosaraju and Tarjan identify all components in optimal O(V + E) time.',
          bn: 'রৈখিক সময়ের দক্ষতা: কোসারাজু এবং টারজান উভয় পদ্ধতিই সর্বোত্তম O(V + E) সময়ে সমস্ত উপাদান বের করে।'
        },
        {
          en: 'Build pipelines and 2-SAT: Used for modular compilation, circular dependency checks, and Boolean satisfiability.',
          bn: 'বিল্ড পাইপলাইন ও 2-SAT: মডুলার কম্পাইলেশন, চক্রাকার ডিপেন্ডেন্সি পরীক্ষা এবং বুলিয়ান সন্তোষজনকতায় ব্যবহৃত হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ss-ex1',
      kind: 'mcq',
      topic: 'scc-definition',
      question: {
        en: 'What mathematical definition uniquely characterizes a Strongly Connected Component (SCC)?',
        bn: 'কোন গাণিতিক সংজ্ঞাটি একটি দৃঢ়ভাবে সংযুক্ত উপাদানকে (SCC) সঠিকভাবে চিহ্নিত করে?'
      },
      options: [
        {
          en: 'A maximal subset of vertices where every vertex in the subset can reach every other vertex via directed paths',
          bn: 'শীর্ষবিন্দুগুলোর এমন একটি সর্বাধিক উপসেট যার প্রতিটি নোড থেকে অন্য প্রতিটি নোডে নির্দেশিত পথে পৌঁছানো সম্ভব'
        },
        {
          en: 'A subset containing exactly 2 vertices with no edges',
          bn: 'ঠিক ২টি নোড বিশিষ্ট একটি উপসেট যার মাঝে কোনো ধার নেই'
        },
        {
          en: 'A tree where every node has degree 4',
          bn: 'এমন একটি ট্রি যার প্রতিটি নোডের ডিগ্রি ৪'
        },
        {
          en: 'Any graph with negative edge weights',
          bn: 'ঋণাত্মক ওজনের যেকোনো গ্রাফ'
        }
      ],
      answer: 0,
      hint: {
        en: 'In an SCC, can any vertex fail to reach another vertex in the same group?',
        bn: 'SCC এর ভেতর কি এমন কোনো নোড থাকতে পারে যা অন্য নোডে পৌঁছাতে পারে না?'
      },
      explanation: {
        en: 'Strong connectivity requires mutual reachability in both directions, and maximality guarantees that no other reachable vertex can be added.',
        bn: 'দৃঢ় সংযোগের জন্য উভয় দিকে পারস্পরিক পৌঁছানোর সক্ষমতা প্রয়োজন এবং সর্বাধিকতা নিশ্চিত করে যে এতে আর কোনো নোড যুক্ত করা সম্ভব নয়।'
      }
    },
    {
      id: 'ss-ex2',
      kind: 'mcq',
      topic: 'condensation-dag-property',
      question: {
        en: 'Why is the condensation graph formed by contracting all SCCs guaranteed to be a Directed Acyclic Graph (DAG)?',
        bn: 'সমস্ত SCC কে সংকুচিত করে গঠিত ঘনীভবন গ্রাফটি কেন নিশ্চিতভাবে একটি নির্দেশিত অচক্রিক গ্রাফ (DAG) হয়?'
      },
      options: [
        {
          en: 'Because if a cycle existed between component super-nodes, all those components would be mutually reachable and merge into 1 larger SCC',
          bn: 'কারণ কম্পোনেন্ট নোডগুলোর মাঝে কোনো চক্র থাকলে তারা পরস্পরের কাছে পৌঁছাতে পারত এবং মিলে ১টি বড় SCC তে পরিণত হতো'
        },
        {
          en: 'Because all edges are deleted during condensation',
          bn: 'কারণ ঘনীভবনের সময় সমস্ত ধার মুছে ফেলা হয়'
        },
        {
          en: 'Because the number of vertices becomes 0',
          bn: 'কারণ শীর্ষবিন্দুর সংখ্যা ০ হয়ে যায়'
        },
        {
          en: 'Because the computer crashes if a cycle exists',
          bn: 'কারণ চক্র থাকলে কম্পিউটার ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If component A reaches B and component B reaches A, are they truly separate SCCs?',
        bn: 'যদি উপাদান A থেকে B তে এবং B থেকে A তে যাওয়া যায়, তবে তারা কি সত্যিই পৃথক উপাদান?'
      },
      explanation: {
        en: 'By definition of SCC maximality, any cycle between components collapses them into a single larger component. Hence, the condensation must be acyclic.',
        bn: 'SCC এর সর্বাধিকতার সংজ্ঞানুযায়ী উপাদানগুলোর মাঝে চক্র থাকলে তারা একটি একক উপাদানে রূপ নিত। তাই ঘনীভবন অচক্রিক হতে বাধ্য।'
      }
    },
    {
      id: 'ss-ex3',
      kind: 'mcq',
      topic: 'kosaraju-finish-time-order',
      question: {
        en: 'In Kosaraju’s algorithm, what purpose does the finish time order from the first DFS pass serve?',
        bn: 'কোসারাজুর অ্যালগরিদমে প্রথম DFS পাসের ফিনিশ সময় কী উদ্দেশ্যে ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'It orders vertices such that the second pass on the reversed graph visits source components before sink components, peeling SCCs cleanly',
          bn: 'এটি নোডগুলোকে এমনভাবে সাজায় যাতে বিপরীত গ্রাফে দ্বিতীয় পাসটি সোর্স উপাদানগুলোকে আগে ভিজিট করে নিখুঁতভাবে SCC গুলো আলাদা করে'
        },
        {
          en: 'It sorts vertices alphabetically',
          bn: 'এটি নোডগুলোকে বর্ণানুক্রমিকভাবে সাজায়'
        },
        {
          en: 'It calculates the diameter of the graph',
          bn: 'এটি গ্রাফের ব্যাস গণনা করে'
        },
        {
          en: 'It creates an empty graph',
          bn: 'এটি একটি খালি গ্রাফ তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'On the reversed graph, reversing the arrows turns sources into sinks. Why visit the highest finish time first?',
        bn: 'বিপরীত গ্রাফে তীর উল্টে দিলে সোর্স সিঙ্কে পরিণত হয়। সর্বোচ্চ ফিনিশ সময় সম্পন্ন নোড কেন আগে ভিজিট করা হয়?'
      },
      explanation: {
        en: 'Processing vertices in decreasing finish order on the reversed graph prevents the search from leaking into other components.',
        bn: 'বিপরীত গ্রাফে সর্বোচ্চ ফিনিশ সময়ের ক্রমে নোডগুলোকে প্রসেস করলে সার্চ অন্য উপাদানে ছড়িয়ে পড়তে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'the-stronghold-split-quiz',
    title: {
      en: 'Strongly Connected Components Quiz',
      bn: 'দৃঢ়ভাবে সংযুক্ত উপাদান কুইজ'
    },
    questions: [
      {
        id: 'ss-q1',
        kind: 'mcq',
        topic: 'kosaraju-time-complexity',
        question: {
          en: 'What is the asymptotic time complexity of Kosaraju’s algorithm on a graph with V vertices and E edges?',
          bn: 'V শীর্ষবিন্দু এবং E ধার বিশিষ্ট গ্রাফে কোসারাজুর অ্যালগরিদমের অ্যাসিম্পটোটিক সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(V + E) linear time across 2 DFS passes and 1 edge reversal',
            bn: '২টি DFS পাস এবং ১টি ধার রিভার্সাল সহ O(V + E) রৈখিক সময়'
          },
          {
            en: 'O(V^2) quadratic time always',
            bn: 'সর্বদা O(V^2) বর্গাকার সময়'
          },
          {
            en: 'O(E log V) time',
            bn: 'O(E log V) সময়'
          },
          {
            en: 'O(V!) factorial time',
            bn: 'O(V!) ফ্যাক্টোরিয়াল সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'DFS runs in O(V + E). Kosaraju performs two sequential DFS traversals.',
          bn: 'DFS চলে O(V + E) সময়ে। কোসারাজু ধারাবাহিকভাবে দুটি DFS ট্রাভার্সাল চালায়।'
        },
        explanation: {
          en: 'Reversing edges takes O(V + E), and both DFS passes take O(V + E), yielding an optimal linear O(V + E) total runtime.',
          bn: 'ধার উল্টাতে O(V + E) এবং দুটি DFS পাসে O(V + E) সময় লাগে, যার মোট সময় সর্বোত্তম রৈখিক O(V + E)।'
        }
      },
      {
        id: 'ss-q2',
        kind: 'mcq',
        topic: 'tarjan-lowlink-concept',
        question: {
          en: 'In Tarjan’s SCC algorithm, what does the low-link value low[u] represent?',
          bn: 'টারজানের SCC অ্যালগরিদমে লো-লিংক মান low[u] কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The smallest discovery time reachable from u through its DFS subtree and at most 1 back-edge',
            bn: 'u এর DFS সাবট্রি এবং সর্বোচ্চ ১টি ব্যাক-ধারের মাধ্যমে পৌঁছানো ক্ষুদ্রতম ডিসকভারি সময়'
          },
          {
            en: 'The total number of edges connected to u',
            bn: 'u এর সাথে সংযুক্ত মোট ধারের সংখ্যা'
          },
          {
            en: 'The weight of the heaviest edge',
            bn: 'সবচেয়ে ভারী ধারের ওজন'
          },
          {
            en: 'The index of the root node',
            bn: 'রুট নোডের ইনডেক্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'If low[u] equals disc[u], can any node in u’s subtree reach an ancestor above u?',
          bn: 'low[u] এবং disc[u] সমান হলে কি u এর সাবট্রির কোনো নোড u এর ওপরের পূর্বপুরুষে পৌঁছাতে পারবে?'
        },
        explanation: {
          en: 'low[u] tracks the highest ancestor reachable from u. When low[u] == disc[u], u is the root of an SCC.',
          bn: 'low[u] নির্দেশ করে u থেকে সর্বোচ্চ কোন পূর্বপুরুষে পৌঁছানো যায়। যখন low[u] == disc[u], তখন u একটি SCC এর মূল নোড।'
        }
      },
      {
        id: 'ss-q3',
        kind: 'mcq',
        topic: 'package-manager-cycles',
        question: {
          en: 'How do modern build systems and package managers (like npm or Turborepo) use SCCs when resolving dependency graphs?',
          bn: 'আধুনিক বিল্ড সিস্টেম এবং প্যাকেজ ম্যানেজার (যেমন npm বা Turborepo) ডিপেন্ডেন্সি গ্রাফ সমাধানে কীভাবে SCC ব্যবহার করে?'
        },
        options: [
          {
            en: 'They identify circular dependency cycles as SCCs of size > 1 and collapse them to establish a valid build order via the condensation DAG',
            bn: 'তারা ১ এর চেয়ে বড় আকারের SCC গুলোকে চক্রাকার ডিপেন্ডেন্সি হিসেবে শনাক্ত করে এবং ঘনীভবন DAG এর মাধ্যমে বিল্ড ক্রম ঠিক করে'
          },
          {
            en: 'They delete all source code files automatically',
            bn: 'তারা সমস্ত সোর্স কোড ফাইল স্বয়ংক্রিয়ভাবে মুছে ফেলে'
          },
          {
            en: 'They convert all JavaScript files into HTML',
            bn: 'তারা সমস্ত জাভাস্ক্রিপ্ট ফাইল এইচটিএমএলে রূপান্তর করে'
          },
          {
            en: 'They compress images on disk',
            bn: 'তারা ডিস্কের ছবি কম্প্রেস করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If package A depends on B and B depends on A, can either package be compiled independently first?',
          bn: 'যদি প্যাকেজ A, B এর ওপর এবং B, A এর ওপর নির্ভর করে, তবে কি কোনোটিকে আগে স্বাধীনভাবে কম্পাইল করা সম্ভব?'
        },
        explanation: {
          en: 'Cycles in dependency graphs represent packages that must be bundled or built together as a single component before downstream modules.',
          bn: 'ডিপেন্ডেন্সি গ্রাফের চক্রগুলো নির্দেশ করে কোন প্যাকেজগুলোকে একসাথে বিল্ড করতে হবে, যাতে পরবর্তী মডিউলগুলো তাদের ওপর কাজ করতে পারে।'
        }
      },
      {
        id: 'ss-q4',
        kind: 'mcq',
        topic: 'two-sat-scc-satisfiability',
        question: {
          en: 'In 2-SAT Boolean satisfiability, what condition on the implication graph’s SCCs proves that the formula is unsatisfiable?',
          bn: '2-SAT বুলিয়ান সন্তোষজনকতায় ইমপ্লিকেশন গ্রাফের SCC গুলোর কোন শর্ত প্রমাণ করে যে সূত্রটি সমাধানযোগ্য নয়?'
        },
        options: [
          {
            en: 'If any variable x and its negation NOT x belong to the same Strongly Connected Component',
            bn: 'যদি কোনো ভ্যারিয়েবল x এবং তার বিপরীত NOT x একই দৃঢ়ভাবে সংযুক্ত উপাদানে (SCC) অবস্থান করে'
          },
          {
            en: 'If the graph has more than 100 vertices',
            bn: 'যদি গ্রাফে ১০০ টির বেশি নোড থাকে'
          },
          {
            en: 'If all edge weights are strictly positive',
            bn: 'যদি সমস্ত ধারের ওজন ধনাত্মক হয়'
          },
          {
            en: 'If the graph is an undirected tree',
            bn: 'যদি গ্রাফটি একটি অমুখী ট্রি হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If x implies NOT x AND NOT x implies x, can x be either true or false?',
          bn: 'যদি x থেকে NOT x এবং NOT x থেকে x তে যাওয়া যায়, তবে x এর মান কি সত্য বা মিথ্যা হওয়া সম্ভব?'
        },
        explanation: {
          en: 'If x and NOT x are in the same SCC, x => !x and !x => x, creating a logical contradiction that makes the formula unsatisfiable.',
          bn: 'যদি x এবং NOT x একই SCC তে থাকে, তবে x => !x এবং !x => x তৈরি হয়, যা একটি যৌক্তিক অসঙ্গতি এবং সূত্রটিকে সমাধানহীন করে।'
        }
      }
    ]
  }
};
