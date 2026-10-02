import type { Lesson } from '../../../lib/types';

export const spanningWorldsLesson: Lesson = {
  slug: 'spanning-worlds',
  tech: 'graph-algorithms',
  title: {
    en: 'Minimum Spanning Trees — Kruskal’s and Prim’s Algorithms',
    bn: 'ন্যূনতম স্প্যানিং ট্রি: ক্রুসকাল ও প্রাইম অ্যালগরিদম'
  },
  summary: {
    en: 'When laying physical fiber-optic cables, power grids, or pipelines between cities, the engineering objective is to connect all locations with minimum total cost while avoiding redundant circular loops. A Minimum Spanning Tree (MST) over a graph of V vertices selects exactly V - 1 edges of minimum cumulative weight. We formalize the Cut Property that mathematically licenses greedy edge choices, contrast Kruskal’s global sorting approach with Prim’s localized priority queue expansion, and implement Kruskal’s algorithm with Disjoint Set Union in O(E log E) time.',
    bn: 'শহরগুলোর মাঝে ফাইবার-অপটিক ক্যাবল, বিদ্যুৎ গ্রিড বা পানির পাইপলাইন বসানোর সময় মূল লক্ষ্য থাকে সর্বনিম্ন খরচে অপ্রয়োজনীয় চক্র ছাড়া সব স্থানকে সংযুক্ত করা। V সংখ্যক নোডের গ্রাফে একটি ন্যূনতম স্প্যানিং ট্রি (MST) ঠিক V - ১টি ধার নির্বাচন করে মোট ওজনকে সর্বনিম্ন রাখে। আমরা কাট প্রপার্টি বিশ্লেষণ করি যা গ্রিডি পছন্দকে গাণিতিক নিশ্চয়তা দেয়, ক্রুসকালের গ্লোবাল সর্টিং বনাম প্রাইমের লোকাল প্রায়োরিটি কিউ পদ্ধতির তুলনা করি এবং O(E log E) সময়ে ইউনিয়ন-ফাইন্ড সহ ক্রুসকাল বাস্তবায়ন করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'every-price-every-pair',
    tech: 'graph-algorithms',
    title: {
      en: 'Every Price, Every Pair — Floyd-Warshall All-Pairs Shortest Path',
      bn: 'প্রতি মূল্য, প্রতি জোড়া: ফ্লয়েড-ওয়ার্শাল অল-পেয়ার্স শর্টেস্ট পাথ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'mst-problem-definition',
      text: {
        en: 'Connecting the World: The Minimum Spanning Tree Problem',
        bn: 'বিশ্বকে সংযুক্ত করা: ন্যূনতম স্প্যানিং ট্রি সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design regional infrastructure like municipal water pipes, electric power distribution, or fiber-optic telecommunications, you face a universal optimization problem. You must connect every facility together into a single unified network while minimizing the total construction expense.',
        bn: 'যখন আপনি আঞ্চলিক অবকাঠামো যেমন পৌরসভার পানির পাইপলাইন, বিদ্যুৎ বিতরণ বা ফাইবার-অপটিক কেবল নেটওয়ার্কের নকশা করেন, তখন আপনি একটি সার্বজনীন সমস্যার মুখোমুখি হন। আপনাকে প্রতিটি স্থাপনাকে একটি একক নেটওয়ার্কে যুক্ত করতে হয় যাতে মোট নির্মাণ খরচ সর্বনিম্ন থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a connected undirected graph with V vertices, connecting all vertices requires at least V - 1 edges. If you pick exactly V - 1 edges without forming any cycles, the resulting structure is mathematically guaranteed to be a tree. A Minimum Spanning Tree (MST) is a spanning tree whose total sum of edge weights is strictly minimal.',
        bn: 'V সংখ্যক শীর্ষবিন্দু বিশিষ্ট একটি সংযুক্ত অমুখী গ্রাফে সব নোডকে জুড়তে অন্তত V - ১টি ধার প্রয়োজন হয়। কোনো চক্র তৈরি না করে আপনি যদি ঠিক V - ১টি ধার বাছাই করেন, তবে প্রাপ্ত কাঠামোটি নিশ্চিতভাবেই একটি ট্রি হয়। একটি ন্যূনতম স্প্যানিং ট্রি (MST) হলো এমন একটি স্প্যানিং ট্রি যার সমস্ত ধারের ওজনের যোগফল সর্বনিম্ন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'minimum-spanning-tree',
          def: {
            en: 'A spanning tree of a connected, undirected, weighted graph that connects all V vertices using exactly V - 1 edges with the minimal total edge weight.',
            bn: 'সংযুক্ত অমুখী ওজনযুক্ত গ্রাফের এমন একটি স্প্যানিং ট্রি যা ঠিক V - ১টি ধার দিয়ে সর্বনিম্ন মোট ওজনে সমস্ত শীর্ষবিন্দুকে যুক্ত করে।'
          }
        },
        {
          term: 'cut-property',
          def: {
            en: 'The theorem stating that the minimum-weight edge crossing any partition cut of a graph is guaranteed to belong to an MST.',
            bn: 'গ্রাফের যেকোনো বিভাজন কাট পেরোনো সর্বনিম্ন ওজনের ধারটি নিশ্চিতভাবেই কোনো-না-কোনো MST এর অন্তর্ভুক্ত হবে।'
          }
        },
        {
          term: 'kruskals-algorithm',
          def: {
            en: 'A greedy edge-centric MST algorithm that sorts all edges by weight and welds components using Disjoint Set Union (Union-Find).',
            bn: 'একটি গ্রিডি অ্যালগরিদম যা ধারগুলোকে ওজনের ক্রমানুসারে সাজায় এবং ইউনিয়ন-ফাইন্ড দিয়ে চক্র এড়িয়ে MST তৈরি করে।'
          }
        },
        {
          term: 'prims-algorithm',
          def: {
            en: 'A greedy vertex-centric MST algorithm that grows a connected tree outward from an initial seed vertex using a Min-Heap Priority Queue.',
            bn: 'একটি গ্রিডি অ্যালগরিদম যা একটি প্রাথমিক বীজ নোড থেকে শুরু করে মিন-হিপের সাহায্যে ধাপে ধাপে MST বড় করে।'
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
      id: 'kruskal-vs-prim-table',
      text: {
        en: 'Architectural Comparison: Kruskal vs Prim',
        bn: 'কাঠামোগত তুলনা: ক্রুসকাল বনাম প্রাইম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computer science provides two classical greedy algorithms to compute Minimum Spanning Trees. Joseph Kruskal proposed a global edge-sorting algorithm in 1956. Robert Prim developed a localized tree-growing algorithm in 1957. Choosing between them depends strictly on graph density.',
        bn: 'কম্পিউটার বিজ্ঞানে ন্যূনতম স্প্যানিং ট্রি বের করার জন্য দুটি ধ্রুপদী গ্রিডি অ্যালগরিদম রয়েছে। জোসেফ ক্রুসকাল ১৯৫৬ সালে গ্লোবাল এজ সর্টিং পদ্ধতি উদ্ভাবন করেন। রবার্ট প্রাইম ১৯৫৭ সালে স্থানীয়ভাবে গাছ বড় করার পদ্ধতি প্রস্তাব করেন। এদের মধ্যে নির্বাচন নির্ভর করে গ্রাফের ঘনত্বের ওপর।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Characteristic', bn: 'পরিমাপ / বৈশিষ্ট্য' },
        { en: 'Kruskal’s Algorithm', bn: 'ক্রুসকাল অ্যালগরিদম' },
        { en: 'Prim’s Algorithm', bn: 'প্রাইম অ্যালগরিদম' }
      ],
      rows: [
        [
          { en: 'Algorithmic Strategy', bn: 'অ্যালগরিদমিক কৌশল' },
          { en: 'Edge-centric: global sort of all edges', bn: 'ধারভিত্তিক: সব ধারের গ্লোবাল সর্টিং' },
          { en: 'Vertex-centric: grows one tree from root', bn: 'নোডভিত্তিক: রুট থেকে একটি গাছ বড় করে' }
        ],
        [
          { en: 'Core Auxiliary Structure', bn: 'মূল সহায়ক ডেটা স্ট্রাকচার' },
          { en: 'Disjoint Set Union (Union-Find)', bn: 'ইউনিয়ন-ফাইন্ড (DSU)' },
          { en: 'Min-Heap Priority Queue', bn: 'মিন-হিপ প্রায়োরিটি কিউ' }
        ],
        [
          { en: 'Time Complexity', bn: 'সময় জটিলতা' },
          { en: 'O(E log E) or O(E log V)', bn: 'O(E log E) বা O(E log V)' },
          { en: 'O((V + E) log V) with heap', bn: 'হিপ সহ O((V + E) log V)' }
        ],
        [
          { en: 'Best Graph Density', bn: 'উপযুক্ত গ্রাফের ঘনত্ব' },
          { en: 'Sparse graphs where E ~ V', bn: 'স্পার্স গ্রাফ যেখানে E ~ V' },
          { en: 'Dense graphs where E ~ V^2', bn: 'ঘন গ্রাফ যেখানে E ~ V^2' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-kruskal-code',
      text: {
        en: 'Executable Kruskal’s Algorithm Implementation',
        bn: 'ইউনিয়ন-ফাইন্ড সহ ক্রুসকাল অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs an MST across 4 vertices using Kruskal’s algorithm and Union-Find. Notice how it sorts all 5 edges and selects exactly 3 edges (A-B weight 1, B-C weight 2, and C-D weight 3), achieving a minimal total weight of 6.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ক্রুসকাল অ্যালগরিদম ও ইউনিয়ন-ফাইন্ড ব্যবহার করে ৪টি শীর্ষবিন্দুর ওপর MST তৈরি করে। লক্ষ্য করুন কীভাবে এটি ৫টি ধারকে সাজিয়ে ঠিক ৩টি ধার নির্বাচন করে (A-B ওজন ১, B-C ওজন ২, এবং C-D ওজন ৩), যা মোট ৬ ওজনের সর্বনিম্ন খরচ নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      code: `class UnionFind {
  constructor(elements) {
    this.parent = new Map();
    this.rank = new Map();
    for (const el of elements) {
      this.parent.set(el, el);
      this.rank.set(el, 0);
    }
  }

  find(i) {
    if (this.parent.get(i) === i) return i;
    const root = this.find(this.parent.get(i));
    this.parent.set(i, root);
    return root;
  }

  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI === rootJ) return false;

    const rankI = this.rank.get(rootI);
    const rankJ = this.rank.get(rootJ);
    if (rankI < rankJ) {
      this.parent.set(rootI, rootJ);
    } else if (rankI > rankJ) {
      this.parent.set(rootJ, rootI);
    } else {
      this.parent.set(rootJ, rootI);
      this.rank.set(rootI, rankI + 1);
    }
    return true;
  }
}

function kruskalMST(vertices, edges) {
  edges.sort((a, b) => a.weight - b.weight);

  const uf = new UnionFind(vertices);
  const mst = [];
  let totalWeight = 0;

  for (const edge of edges) {
    if (uf.union(edge.u, edge.v)) {
      mst.push(edge);
      totalWeight += edge.weight;
      if (mst.length === vertices.length - 1) break;
    }
  }

  return { mst, totalWeight };
}

const vertices = ['A', 'B', 'C', 'D'];
const edges = [
  { u: 'A', v: 'B', weight: 1 },
  { u: 'B', v: 'C', weight: 2 },
  { u: 'A', v: 'C', weight: 4 },
  { u: 'C', v: 'D', weight: 3 },
  { u: 'B', v: 'D', weight: 5 }
];

const result = kruskalMST(vertices, edges);
console.log('Total MST Weight:', result.totalWeight);
// Output: Total MST Weight: 6
console.log('Selected MST Edges Count:', result.mst.length);
// Output: Selected MST Edges Count: 3
result.mst.forEach(e => console.log('Edge ' + e.u + ' - ' + e.v + ' (weight ' + e.weight + ')'));
// Output: Edge A - B (weight 1)
// Output: Edge B - C (weight 2)
// Output: Edge C - D (weight 3)`
    },
    {
      type: 'heading',
      id: 'cut-property-proof',
      text: {
        en: 'Why Greed Works: Proof by Edge Exchange',
        bn: 'গ্রিডি কেন সফল: এজ এক্সচেঞ্জ উপপাদ্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beginners frequently wonder why greedy choices guarantee a global minimum for MSTs when greed fails on many other graph problems. The mathematical proof relies on the Cut Property: if you draw any cut separating vertices into two sets, the cheapest crossing edge e must be in some MST. If an alternative tree T lacks e, adding e creates a cycle with another crossing edge e prime. Replacing e prime with e produces a tree of equal or lesser weight, proving the greedy choice is never suboptimal.',
        bn: 'অনেকে অবাক হন যে অন্যান্য গ্রাফ সমস্যায় গ্রিডি কৌশল ব্যর্থ হলেও MST-তে কীভাবে তা বৈশ্বিক সর্বনিম্ন খরচের নিশ্চয়তা দেয়। এর প্রমাণ কাট প্রপার্টির ওপর প্রতিষ্ঠিত: আপনি যদি গ্রাফের নোডগুলোকে দুটি ভাগে ভাগ করে একটি কাট বা বেড়া কল্পনা করেন, তবে সেই বেড়া পেরোনো সর্বনিম্ন ওজনের ধার e অবশ্যই কোনো MST তে থাকবে। কোনো বিকল্প ট্রি T যদি e কে বাদ দিয়ে অন্য ধার e prime ব্যবহার করে, তবে e যোগ করে e prime বাদ দিলে নতুন ট্রির ওজন সমান বা কম হয়, যা প্রমাণ করে সস্তা ধারটি নেওয়া সর্বদা নির্ভুল।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Exact edge accounting: Any Minimum Spanning Tree connecting V vertices contains exactly V - 1 edges.',
          bn: 'ধার সংখ্যার হিসাব: V সংখ্যক শীর্ষবিন্দুকে যুক্ত করা যেকোনো ন্যূনতম স্প্যানিং ট্রিতে ঠিক V - ১টি ধার থাকে।'
        },
        {
          en: 'The Cut Property foundation: The lightest edge crossing any partition cut of a graph is guaranteed to belong to some MST.',
          bn: 'কাট প্রপার্টির নিশ্চয়তা: গ্রাফের যেকোনো কাট পেরোনো সবচেয়ে হালকা ধারটি নিশ্চিতভাবেই কোনো MST এর অংশ হবে।'
        },
        {
          en: 'Kruskal for sparse networks: Edge sorting paired with Union-Find cycle prevention solves MSTs in O(E log E) time.',
          bn: 'স্পার্স গ্রাফে ক্রুসকাল: ইউনিয়ন-ফাইন্ড দিয়ে চক্র ঠেকিয়ে ও ধারের সর্টিং করে ক্রুসকাল O(E log E) সময়ে কাজ করে।'
        },
        {
          en: 'Prim for dense networks: Expanding a single tree using a Min-Heap priority queue is optimal when graphs approach quadratic density.',
          bn: 'ঘন গ্রাফে প্রাইম: গ্রাফ যখন দ্বিঘাত ঘনত্বের দিকে যায় তখন মিন-হিপ ব্যবহার করে একটি গাছ বড় করা বেশি কার্যকর হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sw-ex1',
      kind: 'mcq',
      topic: 'mst-edge-count-law',
      question: {
        en: 'How many edges are present in a Minimum Spanning Tree of a connected graph containing 50 vertices?',
        bn: '৫০টি শীর্ষবিন্দু বিশিষ্ট একটি সংযুক্ত গ্রাফের ন্যূনতম স্প্যানিং ট্রিতে (MST) মোট কতটি ধার থাকে?'
      },
      options: [
        {
          en: 'Exactly 50 - 1 = 49 edges',
          bn: 'ঠিক ৫০ - ১ = ৪৯টি ধার'
        },
        {
          en: 'Exactly 50 edges',
          bn: 'ঠিক ৫০টি ধার'
        },
        {
          en: '50 * 49 / 2 edges',
          bn: '৫০ * ৪৯ / ২ ধার'
        },
        {
          en: 'Zero edges',
          bn: 'শূন্য ধার'
        }
      ],
      answer: 0,
      hint: {
        en: 'A tree with V vertices always contains exactly V - 1 edges to stay connected without cycles.',
        bn: 'চক্র ছাড়া V নোডকে সংযুক্ত রাখতে ট্রিতে সর্বদা ঠিক V - ১টি ধার লাগে।'
      },
      explanation: {
        en: 'By fundamental tree properties, any spanning tree connecting V vertices contains exactly V - 1 edges. With 50 vertices, exactly 49 edges exist.',
        bn: 'ট্রি এর মৌলিক বৈশিষ্ট্য অনুযায়ী V নোডকে যুক্ত করতে ঠিক V - ১টি ধার লাগে। ৫০টি নোডের ক্ষেত্রে ঠিক ৪৯টি ধার থাকবে।'
      }
    },
    {
      id: 'sw-ex2',
      kind: 'mcq',
      topic: 'kruskal-cycle-check-tool',
      question: {
        en: 'In Kruskal’s algorithm, which data structure is used to determine in nearly constant time whether adding an edge creates a cycle?',
        bn: 'ক্রুসকাল অ্যালগরিদমে কোন ডেটা স্ট্রাকচার ব্যবহার করে প্রায় ধ্রুবক সময়ে জানা যায় যে একটি নতুন ধার যোগ করলে চক্র তৈরি হবে কি না?'
      },
      options: [
        {
          en: 'Disjoint Set Union (Union-Find) with path compression and union by rank',
          bn: 'পাথ কম্প্রেশন এবং ইউনিয়ন বাই র‍্যাঙ্ক সহ ডিসজয়েন্ট সেট ইউনিয়ন (ইউনিয়ন-ফাইন্ড)'
        },
        {
          en: 'A singly linked list',
          bn: 'একটি সাধারণ লিংকড লিস্ট'
        },
        {
          en: 'An AVL tree with double rotations',
          bn: 'ডাবল রোটেশন সহ এভিএল ট্রি'
        },
        {
          en: 'A circular FIFO queue',
          bn: 'একটি বৃত্তাকার FIFO কিউ'
        }
      ],
      answer: 0,
      hint: {
        en: 'If find(u) === find(v), vertices u and v already share a connected component, meaning adding edge (u, v) would close a cycle.',
        bn: 'যদি find(u) === find(v) হয়, তবে u এবং v ইতোমধ্যে একই সেটে যুক্ত আছে, ফলে নতুন ধার দিলে চক্র তৈরি হবে।'
      },
      explanation: {
        en: 'Union-Find tracks connected components and evaluates connectivity queries in near-constant O(alpha(V)) inverse Ackermann time.',
        bn: 'ইউনিয়ন-ফাইন্ড সংযুক্ত উপাদান ট্র্যাক করে এবং ইনভার্স অ্যাকারম্যান O(alpha(V)) প্রায়-ধ্রুবক সময়ে চক্র পরীক্ষা করে।'
      }
    },
    {
      id: 'sw-ex3',
      kind: 'mcq',
      topic: 'cut-property-definition',
      question: {
        en: 'What does the Cut Property in Minimum Spanning Tree theory state?',
        bn: 'ন্যূনতম স্প্যানিং ট্রি তত্ত্বে কাট প্রপার্টি (Cut Property) কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'For any partition of graph vertices into two subsets, the minimum-weight edge connecting the two subsets is guaranteed to belong to some MST',
          bn: 'গ্রাফের নোডগুলোকে যেকোনো দুটি উপসেটে ভাগ করলে, সেই দুই অংশের মাঝে সংযোগকারী সর্বনিম্ন ওজনের ধারটি নিশ্চিতভাবেই কোনো MST-র অংশ হবে'
        },
        {
          en: 'All edge weights must be divisible by 2',
          bn: 'সমস্ত ধারের ওজনকে ২ দিয়ে ভাগ করা যেতে হবে'
        },
        {
          en: 'Every graph contains at most 3 cuts',
          bn: 'প্রতিটি গ্রাফে সর্বোচ্চ ৩টি কাট থাকে'
        },
        {
          en: 'Cuts delete all negative edges permanently',
          bn: 'কাট সমস্ত ঋণাত্মক ধার মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the cheapest bridge crossing a river dividing two sets of towns.',
        bn: 'দুটি নগরীকে বিভক্ত করা নদীর ওপর সবচেয়ে সস্তা সেতুর কথা বিবেচনা করুন।'
      },
      explanation: {
        en: 'The Cut Property proves greedy choice correctness: selecting the cheapest crossing edge across any boundary can never produce a suboptimal spanning tree.',
        bn: 'কাট প্রপার্টি গ্রিডি কৌশলের নির্ভুলতা প্রমাণ করে: যেকোনো সীমানা পেরোনো সস্তা ধারটি নির্বাচন করলে তা কখনোই সর্বোত্তম সমাধানকে ক্ষতিগ্রস্ত করে না।'
      }
    }
  ],
  quiz: {
    id: 'spanning-worlds-quiz',
    title: {
      en: 'Minimum Spanning Trees and Cut Property Quiz',
      bn: 'ন্যূনতম স্প্যানিং ট্রি এবং কাট প্রপার্টি কুইজ'
    },
    questions: [
      {
        id: 'sw-q1',
        kind: 'mcq',
        topic: 'kruskal-time-complexity-bottleneck',
        question: {
          en: 'What is the computational bottleneck that determines the overall O(E log E) time complexity of Kruskal’s algorithm?',
          bn: 'ক্রুসকাল অ্যালগরিদমের সামগ্রিক O(E log E) সময় জটিলতা নির্ধারণে কোন ধাপটি মূল বাধা বা সবচেয়ে বেশি সময় নেয়?'
        },
        options: [
          {
            en: 'Sorting all E edges by weight at the beginning of the algorithm',
            bn: 'অ্যালগরিদমের শুরুতে সমস্ত E সংখ্যক ধারকে তাদের ওজনের ক্রমানুসারে সাজানো'
          },
          {
            en: 'The Union-Find find and union operations',
            bn: 'ইউনিয়ন-ফাইন্ডের ফাইন্ড ও ইউনিয়ন অপারেশন'
          },
          {
            en: 'Printing the final edge list to the console',
            bn: 'কনসোলে ফলাফল ছাপানো'
          },
          {
            en: 'Allocating the vertex array memory',
            bn: 'ভার্টেক্স অ্যারের মেমরি বরাদ্দ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sorting E items takes O(E log E); Union-Find operations take nearly O(E).',
          bn: 'E সংখ্যক ধার সাজাতে O(E log E) সময় লাগে; আর ইউনিয়ন-ফাইন্ড অপারেশনে প্রায় O(E) সময় লাগে।'
        },
        explanation: {
          en: 'Because Union-Find operations execute in near O(1) time, sorting the E edges in O(E log E) dominates total execution time.',
          bn: 'ইউনিয়ন-ফাইন্ডের অপারেশন প্রায় O(1) সময়ে কাজ করায় শুরুতে E ধার সাজানোর O(E log E) সময়টিই মোট রানটাইম নির্ধারণ করে।'
        }
      },
      {
        id: 'sw-q2',
        kind: 'mcq',
        topic: 'mst-uniqueness-condition',
        question: {
          en: 'Under what condition is the Minimum Spanning Tree of a connected graph mathematically guaranteed to be unique?',
          bn: 'কোন শর্ত পূরণ হলে একটি সংযুক্ত গ্রাফের ন্যূনতম স্প্যানিং ট্রি (MST) গাণিতিকভাবে অনন্য (ঠিক একটিমাত্র) হওয়া নিশ্চিত?'
        },
        options: [
          {
            en: 'When all edge weights in the graph are distinct (no two edges share the exact same weight)',
            bn: 'যখন গ্রাফের প্রতিটি ধারের ওজন সম্পূর্ণ আলাদা হয় (কোনো দুটি ধারের ওজন একই থাকে না)'
          },
          {
            en: 'When the graph contains more than 100 vertices',
            bn: 'যখন গ্রাফে ১০০ টির বেশি নোড থাকে'
          },
          {
            en: 'When all edge weights are even integers',
            bn: 'যখন সমস্ত ধারের ওজন জোড় সংখ্যা হয়'
          },
          {
            en: 'When the graph is completely disconnected',
            bn: 'যখন গ্রাফটি সম্পূর্ণ বিচ্ছিন্ন থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If every edge has a unique weight, can there ever be a tie when choosing the minimum crossing edge?',
          bn: 'প্রতিটি ধারের ওজন ভিন্ন হলে সর্বনিম্ন ধার বাছাইয়ের সময় কি কখনো টাই হতে পারে?'
        },
        explanation: {
          en: 'With strictly distinct edge weights, the cut property uniquely identifies a single lightest edge for every cut, guaranteeing a unique MST.',
          bn: 'সমস্ত ধারের ওজন আলাদা হলে প্রতিটি কাটের জন্য ঠিক একটিমাত্র সস্তা ধার থাকে, যা একটিমাত্র অনন্য MST তৈরি নিশ্চিত করে।'
        }
      },
      {
        id: 'sw-q3',
        kind: 'mcq',
        topic: 'prim-vs-kruskal-density-choice',
        question: {
          en: 'For an ultra-dense graph with 1000 vertices where nearly all 500000 possible edges exist (E ~ V^2), which algorithm is more efficient?',
          bn: '১০০০ নোডের একটি অতি ঘন গ্রাফে যেখানে সম্ভাব্য প্রায় ৫০০০০০টি ধারই বিদ্যমান (E ~ V^2), সেখানে কোন অ্যালগরিদমটি চালানো বেশি কার্যকর?'
        },
        options: [
          {
            en: 'Prim’s algorithm using an adjacency matrix, running in deterministic O(V^2) time without edge sorting overhead',
            bn: 'অ্যাজেসেন্সি ম্যাট্রিক্স সহ প্রাইম অ্যালগরিদম, যা ধার সর্ট করার ঝামেলা ছাড়াই O(V^2) সময়ে কাজ শেষ করে'
          },
          {
            en: 'Kruskal’s algorithm, which must sort all 500,000 edges',
            bn: 'ক্রুসকাল অ্যালগরিদম, যাকে ৫০০,০০০ ধার সাজাতে হবে'
          },
          {
            en: 'Breadth-First Search without weights',
            bn: 'ওজন ছাড়া ব্রেডথ-ফার্স্ট সার্চ'
          },
          {
            en: 'Binary search over edge matrices',
            bn: 'এজ ম্যাট্রিক্সে বাইনারি সার্চ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sorting 500,000 edges in Kruskal takes E log E operations. Prim with an array matrix runs in strictly V^2 operations.',
          bn: 'ক্রুসকালে ৫০০,০০০ ধার সাজাতে E log E অপারেশন লাগে। ম্যাট্রিক্স সহ প্রাইম কঠোরভাবে V^2 অপারেশনে চলে।'
        },
        explanation: {
          en: 'When E ~ V^2, Kruskal’s O(E log E) requires sorting hundreds of thousands of edges. Array-based Prim completes in O(V^2) operations.',
          bn: 'যখন E ~ V^2 হয় তখন ক্রুসকালের লাখ লাখ ধার সাজাতে অনেক সময় নষ্ট হয়। ম্যাট্রিক্স-ভিত্তিক প্রাইম O(V^2) অপারেশনেই শেষ হয়।'
        }
      },
      {
        id: 'sw-q4',
        kind: 'mcq',
        topic: 'mst-cycle-property-twin',
        question: {
          en: 'What is the Cycle Property in Spanning Tree theory (the dual counterpart to the Cut Property)?',
          bn: 'স্প্যানিং ট্রি তত্ত্বে সাইকেল প্রপার্টি (কাট প্রপার্টির বিপরীত জোড়া) কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The most expensive (maximum weight) edge in any simple cycle can NEVER belong to a Minimum Spanning Tree',
            bn: 'যেকোনো সাধারণ চক্রের সর্বোচ্চ ওজনের সবচেয়ে দামি ধারটি কখনোই কোনো ন্যূনতম স্প্যানিং ট্রির অংশ হতে পারে না'
          },
          {
            en: 'Cycles must always contain an odd number of edges',
            bn: 'চক্রে সর্বদা বিজোড় সংখ্যক ধার থাকতে হবে'
          },
          {
            en: 'All cycles are automatically converted into paths',
            bn: 'সমস্ত চক্র স্বয়ংক্রিয়ভাবে পথে পরিণত হয়'
          },
          {
            en: 'Cycles increase total graph memory by 100 percent',
            bn: 'চক্র গ্রাফের মোট মেমরি ১০০ শতাংশ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you must break a cycle to maintain a tree, which edge would you remove to minimize total weight?',
          bn: 'ট্রি অক্ষুণ্ণ রাখতে চক্র ভাঙতে হলে মোট ওজন কমাতে আপনি কোন ধারটি মুছে ফেলবেন?'
        },
        explanation: {
          en: 'In any cycle, removing the strictly heaviest edge maintains full connectivity while reducing total weight, proving it cannot be in an MST.',
          bn: 'যেকোনো চক্র থেকে সবচেয়ে ভারী ধারটি বাদ দিলে সংযোগ বিচ্ছিন্ন হয় না কিন্তু মোট খরচ কমে যায়, যা প্রমাণ করে সেটি MST-তে থাকতে পারে না।'
        }
      }
    ]
  }
};
