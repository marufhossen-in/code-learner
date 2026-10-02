import type { Lesson } from '../../../lib/types';

export const GainsAndTheGainLesson: Lesson = {
  slug: 'gains-and-the-gain',
  tech: 'greedy',
  title: {
    en: 'Minimum Spanning Trees: Kruskal Algorithm & DSU',
    bn: 'মিনিমাম স্প্যানিং ট্রি: ক্রুশকাল অ্যালগরিদম ও DSU'
  },
  summary: {
    en: 'Understand Minimum Spanning Trees, implement Disjoint Set Union (DSU) with path compression and rank, and greedily connect graphs with minimal total edge weight.',
    bn: 'মিনিমাম স্প্যানিং ট্রি বুঝুন, পাথ কম্প্রেশন ও র‍্যাঙ্ক সহ ডিসজয়েন্ট সেট ইউনিয়ন (DSU) তৈরি করুন এবং সর্বনিম্ন এজের ওজনে গ্রাফ সংযুক্ত করার কৌশল আয়ত্ত করুন।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'spanning-trees-fundamentals',
      text: {
        en: 'The Minimum Spanning Tree Problem',
        bn: 'মিনিমাম স্প্যানিং ট্রি সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In an undirected, connected weighted graph with V vertices, a Spanning Tree is an acyclic connected subgraph that spans all V vertices using exactly V - 1 edges. A Minimum Spanning Tree (MST) is a spanning tree whose total sum of edge weights is strictly minimal among all possible spanning trees. Kruskal algorithm finds this minimum tree by evaluating edges greedily in ascending order of weight.',
        bn: 'V সংখ্যক শীর্ষবিন্দু (ভার্টেক্স) বিশিষ্ট একটি সংযুক্ত ও অনির্দেশিত গ্রাফে স্প্যানিং ট্রি হলো এমন একটি চক্রহীন সাব-গ্রাফ যা ঠিক V - ১টি এজ ব্যবহার করে সবকটি শীর্ষবিন্দুকে যুক্ত করে। একটি মিনিমাম স্প্যানিং ট্রি (MST) হলো সেই স্প্যানিং ট্রি যার এজের ওজনের মোট সমষ্টি সম্ভাব্য সকল স্প্যানিং ট্রির মধ্যে সর্বনিম্ন। ক্রুশকাল অ্যালগরিদম এজের ওজনের ঊর্ধ্বক্রম অনুসারে স্থানীয় সেরা পছন্দ গ্রহণ করে এই ট্রি খুঁজে বের করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'minimum-spanning-tree',
          def: {
            en: 'A tree subgraph of an undirected connected graph containing all V vertices and V - 1 edges with the minimum possible total edge weight.',
            bn: 'একটি অনির্দেশিত সংযুক্ত গ্রাফের এমন একটি সাব-গ্রাফ যা সর্বনিম্ন মোট এজের ওজনে সমস্ত V-টি শীর্ষবিন্দুকে V - ১টি এজের মাধ্যমে যুক্ত করে।'
          }
        },
        {
          term: 'disjoint-set-union',
          def: {
            en: 'A data structure maintaining a partition of a set into disjoint components supporting nearly O(1) find and union queries.',
            bn: 'একটি ডেটা স্ট্রাকচার যা উপাদানগুলোকে আলাদা গ্রুপে ভাগ করে রাখে এবং প্রায় O(1) সময়ে ফাইন্ড ও ইউনিয়ন অপারেশন সম্পাদন করে।'
          }
        },
        {
          term: 'path-compression',
          def: {
            en: 'An optimization in DSU that flattens tree structure by making every visited node point directly to its root ancestor during find operations.',
            bn: 'DSU-এর একটি অপ্টিমাইজেশন যা ফাইন্ড অপারেশনের সময় পরিদর্শিত প্রতিটি নোডকে সরাসরি রুট নোডের সাথে যুক্ত করে ট্রির উচ্চতা কমিয়ে দেয়।'
          }
        },
        {
          term: 'union-by-rank',
          def: {
            en: 'An optimization that attaches the root of the shallower tree beneath the root of the deeper tree during union operations to prevent tree imbalance.',
            bn: 'ইউনিয়ন করার সময় কম গভীরতার ট্রির রুটকে বেশি গভীরতার ট্রির রুটের নিচে যুক্ত করার কৌশল যা ট্রির ভারসাম্য বজায় রাখে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'kruskal-mst-graph-svg',
      title: {
        en: 'Kruskal Algorithm: 5 Vertices, 7 Edges, MST Cost 12',
        bn: 'ক্রুশকাল অ্যালগরিদম: ৫টি শীর্ষবিন্দু, ৭টি এজ, MST খরচ ১২'
      },
      caption: {
        en: 'Edges sorted by weight: (0,1)=1, (1,2)=2, (2,3)=3, (3,4)=6 are accepted into the MST. Edges (0,2)=4 and (1,3)=5 are rejected as cycles.',
        bn: 'ওজন অনুসারে সাজানো: (০,১)=১, (১,২)=২, (২,৩)=৩, (৩,৪)=৬ এজগুলো যুক্ত হয়। এজ (০,২)=৪ এবং (১,৩)=৫ সাইকেল তৈরির কারণে বাতিল হয়।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="kbgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#kbgGrad)" stroke="#334155" stroke-width="2"/>

  <!-- Left: Original Graph with all 7 edges -->
  <text x="35" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8">1. Original Graph (5 Vertices, 7 Edges)</text>

  <!-- Edges on Left -->
  <!-- (0,1) wt 1 -->
  <line x1="80" y1="120" x2="220" y2="120" stroke="#94a3b8" stroke-width="2"/>
  <rect x="140" y="105" width="24" height="20" rx="4" fill="#0f172a"/>
  <text x="152" y="119" font-family="system-ui, sans-serif" font-size="11" fill="#f8fafc" text-anchor="middle">w=1</text>

  <!-- (1,2) wt 2 -->
  <line x1="220" y1="120" x2="320" y2="230" stroke="#94a3b8" stroke-width="2"/>
  <rect x="260" y="165" width="24" height="20" rx="4" fill="#0f172a"/>
  <text x="272" y="179" font-family="system-ui, sans-serif" font-size="11" fill="#f8fafc" text-anchor="middle">w=2</text>

  <!-- (0,2) wt 4 -->
  <line x1="80" y1="120" x2="320" y2="230" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="175" y="180" width="24" height="20" rx="4" fill="#0f172a"/>
  <text x="187" y="194" font-family="system-ui, sans-serif" font-size="11" fill="#fca5a5" text-anchor="middle">w=4</text>

  <!-- (2,3) wt 3 -->
  <line x1="320" y1="230" x2="180" y2="300" stroke="#94a3b8" stroke-width="2"/>
  <rect x="240" y="270" width="24" height="20" rx="4" fill="#0f172a"/>
  <text x="252" y="284" font-family="system-ui, sans-serif" font-size="11" fill="#f8fafc" text-anchor="middle">w=3</text>

  <!-- (1,3) wt 5 -->
  <line x1="220" y1="120" x2="180" y2="300" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="185" y="225" width="24" height="20" rx="4" fill="#0f172a"/>
  <text x="197" y="239" font-family="system-ui, sans-serif" font-size="11" fill="#fca5a5" text-anchor="middle">w=5</text>

  <!-- (3,4) wt 6 -->
  <line x1="180" y1="300" x2="60" y2="260" stroke="#94a3b8" stroke-width="2"/>
  <rect x="110" y="270" width="24" height="20" rx="4" fill="#0f172a"/>
  <text x="122" y="284" font-family="system-ui, sans-serif" font-size="11" fill="#f8fafc" text-anchor="middle">w=6</text>

  <!-- Left Nodes -->
  <circle cx="80" cy="120" r="16" fill="url(#nodeGrad)"/>
  <text x="80" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">0</text>

  <circle cx="220" cy="120" r="16" fill="url(#nodeGrad)"/>
  <text x="220" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">1</text>

  <circle cx="320" cy="230" r="16" fill="url(#nodeGrad)"/>
  <text x="320" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">2</text>

  <circle cx="180" cy="300" r="16" fill="url(#nodeGrad)"/>
  <text x="180" y="305" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3</text>

  <circle cx="60" cy="260" r="16" fill="url(#nodeGrad)"/>
  <text x="60" y="265" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">4</text>

  <!-- Right: Resulting Minimum Spanning Tree (4 Edges) -->
  <text x="455" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">2. Kruskal MST (4 Edges Accepted, Cost = 12)</text>

  <!-- MST Edges in Green -->
  <!-- (0,1) wt 1 -->
  <line x1="510" y1="120" x2="650" y2="120" stroke="#10b981" stroke-width="4"/>
  <rect x="565" y="102" width="30" height="22" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="580" y="117" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">1</text>

  <!-- (1,2) wt 2 -->
  <line x1="650" y1="120" x2="750" y2="230" stroke="#10b981" stroke-width="4"/>
  <rect x="690" y="162" width="30" height="22" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="705" y="177" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">2</text>

  <!-- (2,3) wt 3 -->
  <line x1="750" y1="230" x2="610" y2="300" stroke="#10b981" stroke-width="4"/>
  <rect x="670" y="262" width="30" height="22" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="685" y="277" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">3</text>

  <!-- (3,4) wt 6 -->
  <line x1="610" y1="300" x2="490" y2="260" stroke="#10b981" stroke-width="4"/>
  <rect x="535" y="272" width="30" height="22" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="550" y="287" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">6</text>

  <!-- Right Nodes -->
  <circle cx="510" cy="120" r="16" fill="#10b981"/>
  <text x="510" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">0</text>

  <circle cx="650" cy="120" r="16" fill="#10b981"/>
  <text x="650" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">1</text>

  <circle cx="750" cy="230" r="16" fill="#10b981"/>
  <text x="750" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">2</text>

  <circle cx="610" cy="300" r="16" fill="#10b981"/>
  <text x="610" y="305" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3</text>

  <circle cx="490" cy="260" r="16" fill="#10b981"/>
  <text x="490" y="265" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">4</text>

  <!-- Footer calculation -->
  <text x="455" y="350" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">MST Total Weight: 1 + 2 + 3 + 6 = 12</text>
  <text x="455" y="368" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Vertices: 5, Edges in tree: 4 (V - 1), Cycles rejected: 2</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'kruskal-algorithm-steps',
      text: {
        en: 'Kruskal Algorithm Execution Steps',
        bn: 'ক্রুশকাল অ্যালগরিদমের কার্যপ্রণালী'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Sort All Edges in Ascending Order',
            bn: 'সমস্ত এজকে ওজনের ঊর্ধ্বক্রমে সাজান'
          },
          text: {
            en: 'Extract all E edges from the graph. Sort them by weight in non-decreasing order: w(e_1) <= w(e_2) <= ... <= w(e_E). This sort requires O(E log E) time.',
            bn: 'গ্রাফ থেকে সমস্ত E-টি এজ সংগ্রহ করুন। ওজনের ঊর্ধ্বক্রম অনুসারে সাজান: w(e_1) <= w(e_2) <= ... <= w(e_E)। এতে O(E log E) সময় লাগে।'
          }
        },
        {
          title: {
            en: 'Initialize Disjoint Set Union (DSU)',
            bn: 'ডিসজয়েন্ট সেট ইউনিয়ন (DSU) প্রস্তুত করুন'
          },
          text: {
            en: 'Create a DSU structure for all V vertices. Each vertex initially forms an independent singleton set with rank 0, where parent[i] = i.',
            bn: 'সকল V-টি শীর্ষবিন্দুর জন্য একটি DSU তৈরি করুন। শুরুতে প্রতিটি শীর্ষবিন্দু নিজের আলাদা গ্রুপ গঠন করে যার র‍্যাঙ্ক ০ এবং parent[i] = i।'
          }
        },
        {
          title: {
            en: 'Greedy Cycle-Check and Union',
            bn: 'গ্রিডি সাইকেল পরীক্ষা ও ইউনিয়ন'
          },
          text: {
            en: 'Iterate through sorted edges. For edge (u, v): call find(u) and find(v). If roots differ, adding the edge creates no cycle: add (u, v) to MST and execute union(u, v). If roots match, discard the edge to prevent a cycle. Halt once V - 1 edges are collected.',
            bn: 'সাজানো এজগুলোর মধ্য দিয়ে যান। প্রতিটি এজ (u, v)-এর জন্য find(u) ও find(v) কল করুন। রুট ভিন্ন হলে এজটি সাইকেল তৈরি করে না: এটিকে MST-তে যোগ করুন এবং union(u, v) করুন। রুট এক হলে বাদ দিন। V - ১টি এজ পাওয়ার পর অ্যালগরিদম শেষ করুন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'runnable-kruskal-ts',
      text: {
        en: 'Runnable TypeScript: Complete Kruskal MST & DSU Implementation',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: সম্পূর্ণ ক্রুশকাল MST ও DSU বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Running Kruskal algorithm on 5 vertices and 7 edges, selecting 4 edges for total MST weight 12.',
        bn: '৫টি শীর্ষবিন্দু ও ৭টি এজে ক্রুশকাল অ্যালগরিদম চালিয়ে ৪টি এজে মোট ১২ ওজনের MST তৈরি।'
      },
      code: `// Disjoint Set Union with Path Compression and Union by Rank
class DisjointSetUnion {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = new Array(size).fill(0).map((_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  // Find root with Path Compression
  find(i: number): number {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i]); // Path compression
    }
    return this.parent[i];
  }

  // Union by Rank: returns true if merged, false if already in same set
  union(i: number, j: number): boolean {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI === rootJ) {
      return false; // Cycle detected!
    }

    // Attach smaller rank tree under larger rank tree
    if (this.rank[rootI] < this.rank[rootJ]) {
      this.parent[rootI] = rootJ;
    } else if (this.rank[rootI] > this.rank[rootJ]) {
      this.parent[rootJ] = rootI;
    } else {
      this.parent[rootJ] = rootI;
      this.rank[rootI]++;
    }

    return true;
  }
}

interface Edge {
  u: number;
  v: number;
  weight: number;
}

interface MSTResult {
  totalWeight: number;
  mstEdges: Edge[];
  edgesEvaluated: number;
}

function kruskalMST(numVertices: number, edges: Edge[]): MSTResult {
  // 1. Sort edges in ascending order of weight
  const sorted = [...edges].sort((a, b) => a.weight - b.weight);

  const dsu = new DisjointSetUnion(numVertices);
  const mstEdges: Edge[] = [];
  let totalWeight = 0;
  let evaluated = 0;

  for (const edge of sorted) {
    evaluated++;
    // If union returns true, edge does not create a cycle
    if (dsu.union(edge.u, edge.v)) {
      mstEdges.push(edge);
      totalWeight += edge.weight;
      // Stop early if we have V - 1 edges
      if (mstEdges.length === numVertices - 1) {
        break;
      }
    }
  }

  return { totalWeight, mstEdges, edgesEvaluated: evaluated };
}

// 7 edges across 5 vertices from the diagram
const testEdges: Edge[] = [
  { u: 0, v: 1, weight: 1 },
  { u: 1, v: 2, weight: 2 },
  { u: 0, v: 2, weight: 4 },
  { u: 2, v: 3, weight: 3 },
  { u: 1, v: 3, weight: 5 },
  { u: 3, v: 4, weight: 6 },
  { u: 2, v: 4, weight: 7 }
];

const result = kruskalMST(5, testEdges);

console.log('MST Total Weight:', result.totalWeight); // 12
console.log('Total MST edges selected:', result.mstEdges.length); // 4
for (const e of result.mstEdges) {
  console.log(\`Edge (\${e.u}, \${e.v}) with weight \${e.weight}\`);
}
// Outputs:
// Edge (0, 1) with weight 1
// Edge (1, 2) with weight 2
// Edge (2, 3) with weight 3
// Edge (3, 4) with weight 6
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'The combination of path compression and union by rank yields an amortized time complexity of O(alpha(V)) per DSU operation, where alpha is the inverse Ackermann function. Because alpha(V) <= 4 for any realistic input size, DSU operations run in practical constant time.',
        bn: 'পাথ কম্প্রেশন এবং ইউনিয়ন-বাই-র‍্যাঙ্কের সমন্বয়ে DSU অপারেশনে O(alpha(V)) সময় লাগে, যেখানে alpha হলো ইনভার্স অ্যাকারম্যান ফাংশন। যেকোনো বাস্তব মানের জন্য alpha(V) <= 4 হওয়ায় এটি কার্যত ধ্রুবক সময়ে চলে।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-kru-ex-1',
      kind: 'mcq',
      topic: 'kruskal-edge-count-requirement',
      question: {
        en: 'For any connected, undirected graph with V vertices, how many edges must any valid spanning tree contain?',
        bn: 'V সংখ্যক শীর্ষবিন্দু বিশিষ্ট যেকোনো অনির্দেশিত সংযুক্ত গ্রাফের একটি বৈধ স্প্যানিং ট্রিতে ঠিক কয়টি এজ থাকতে হবে?'
      },
      options: [
        {
          en: 'Exactly V - 1 edges',
          bn: 'ঠিক V - ১টি এজ'
        },
        {
          en: 'Exactly V edges',
          bn: 'ঠিক V-টি এজ'
        },
        {
          en: 'V * (V - 1) / 2 edges',
          bn: 'V * (V - ১) / ২ টি এজ'
        },
        {
          en: 'V + 1 edges',
          bn: 'V + ১টি এজ'
        }
      ],
      answer: 0,
      hint: {
        en: 'A tree on 5 vertices always has 4 edges.',
        bn: '৫টি শীর্ষবিন্দুর ট্রিতে সর্বদা ৪টি এজ থাকে।'
      },
      explanation: {
        en: 'A tree is defined as a minimally connected, acyclic graph. Any tree connecting V vertices contains exactly V - 1 edges.',
        bn: 'একটি ট্রি হলো সর্বনিম্ন সংযোগ বিশিষ্ট চক্রহীন গ্রাফ। V-টি শীর্ষবিন্দু যুক্ত যেকোনো ট্রিতে ঠিক V - ১টি এজ থাকে।'
      }
    },
    {
      id: 'grd-kru-ex-2',
      kind: 'mcq',
      topic: 'cycle-detection-in-kruskal',
      question: {
        en: 'How does Kruskal algorithm verify that adding edge (u, v) will not introduce a cycle into the growing forest?',
        bn: 'ক্রুশকাল অ্যালগরিদম কীভাবে নিশ্চিত করে যে এজ (u, v) যোগ করলে গ্রাফে কোনো চক্র বা সাইকেল তৈরি হবে না?'
      },
      options: [
        {
          en: 'By calling find(u) and find(v) in the Disjoint Set Union: if find(u) !== find(v), they reside in different components and no cycle is formed',
          bn: 'DSU-তে find(u) এবং find(v) কল করে: যদি find(u) !== find(v) হয়, তবে তারা আলাদা গ্রুপে আছে এবং কোনো সাইকেল তৈরি হবে না'
        },
        {
          en: 'By computing the determinant of the adjacency matrix',
          bn: 'অ্যাডজাসেন্সি ম্যাট্রিক্সের নির্ণায়ক হিসাব করে'
        },
        {
          en: 'By checking if the edge weight is an even number',
          bn: 'এজের ওজন একটি জোড় সংখ্যা কিনা তা পরীক্ষা করে'
        },
        {
          en: 'By checking if both vertices have the same degree',
          bn: 'উভয় শীর্ষবিন্দুর ডিগ্রি সমান কিনা তা পরীক্ষা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If both vertices already share the same root in DSU, a path between them already exists.',
        bn: 'উভয় শীর্ষবিন্দুর DSU রুট একই হলে তাদের মধ্যে আগে থেকেই পথ বিদ্যমান।'
      },
      explanation: {
        en: 'If find(u) === find(v), vertices u and v are already connected via existing MST edges; adding (u, v) would close an unwanted cycle.',
        bn: 'যদি find(u) === find(v) হয়, তবে u এবং v শীর্ষবিন্দু আগেই যুক্ত হয়েছে; নতুন এজ দিলে সেখানে একটি সাইকেল তৈরি হবে।'
      }
    },
    {
      id: 'grd-kru-ex-3',
      kind: 'mcq',
      topic: 'kruskal-mst-total-cost-calculation',
      question: {
        en: 'In our 5-vertex example with weights 1, 2, 4, 3, 5, 6, and 7, what is the total weight of the computed Minimum Spanning Tree?',
        bn: 'আমাদের ৫-শীর্ষবিন্দুর উদাহরণে ১, ২, ৪, ৩, ৫, ৬ এবং ৭ ওজনের মধ্যে গণনা করা মিনিমাম স্প্যানিং ট্রির মোট ওজন কত?'
      },
      options: [
        {
          en: '12 (composed of edges with weights 1, 2, 3, and 6)',
          bn: '১২ (১, ২, ৩ এবং ৬ ওজনের এজ দ্বারা গঠিত)'
        },
        {
          en: '28 (sum of all edges in the graph)',
          bn: '২৮ (গ্রাফের সমস্ত এজের সমষ্টি)'
        },
        {
          en: '10 (composed of 1, 2, 3, and 4)',
          bn: '১০ (১, ২, ৩ এবং ৪ দ্বারা গঠিত)'
        },
        {
          en: '15',
          bn: '১৫'
        }
      ],
      answer: 0,
      hint: {
        en: 'Add: 1 + 2 + 3 + 6 = 12. Edges 4 and 5 are skipped because of cycles.',
        bn: 'যোগ করুন: ১ + ২ + ৩ + ৬ = ১২। সাইকেলের কারণে ৪ এবং ৫ এজ দুটি বাদ দেওয়া হয়।'
      },
      explanation: {
        en: 'Edges 1, 2, and 3 connect vertices 0, 1, 2, and 3. Edge 4 and 5 create cycles. Edge 6 connects to vertex 4, giving 1 + 2 + 3 + 6 = 12.',
        bn: '১, ২ ও ৩ ওজনের এজ ০, ১, ২ ও ৩ শীর্ষবিন্দুকে যুক্ত করে। ৪ ও ৫ ওজনের এজ সাইকেল বানায়। ৬ ওজনের এজ ৪ নং শীর্ষবিন্দুকে যুক্ত করে মোট ১ + ২ + ৩ + ৬ = ১২ ওজন দেয়।'
      }
    },
    {
      id: 'grd-kru-ex-4',
      kind: 'mcq',
      topic: 'kruskal-time-complexity-bottleneck',
      question: {
        en: 'What is the primary computational bottleneck in Kruskal algorithm for a graph with V vertices and E edges?',
        bn: 'V শীর্ষবিন্দু এবং E এজ বিশিষ্ট গ্রাফে ক্রুশকাল অ্যালগরিদমের প্রধান গণনামূলক বাধা (বটলনেক) কোনটি?'
      },
      options: [
        {
          en: 'Sorting the E edges in O(E log E) time, which dominates the O(E * alpha(V)) DSU operations',
          bn: 'O(E log E) সময়ে E-টি এজ সাজানো, যা O(E * alpha(V)) DSU অপারেশনের চেয়ে বেশি সময় নেয়'
        },
        {
          en: 'Allocating memory for the parent array in O(V^2) time',
          bn: 'O(V^2) সময়ে প্যারেন্ট অ্যারের মেমরি বরাদ্দ করা'
        },
        {
          en: 'Printing the output string to the terminal console',
          bn: 'টার্মিনাল কনসোলে আউটপুট স্ট্রিং প্রিন্ট করা'
        },
        {
          en: 'Computing floating point square roots',
          bn: 'ফ্লোটিং পয়েন্ট বর্গমূল গণনা করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'DSU is almost O(1), leaving sorting as the slowest step.',
        bn: 'DSU প্রায় O(1) সময়ে চলে, তাই সর্টিং-ই সবচেয়ে ধীরগতির ধাপ।'
      },
      explanation: {
        en: 'Sorting E edges requires O(E log E) time. With path compression and union by rank, DSU operations take O(E * alpha(V)), making edge sorting the dominant factor.',
        bn: 'E-টি এজ সাজাতে O(E log E) সময় লাগে। DSU অপারেশন প্রায় ধ্রুবক সময় O(E * alpha(V)) নেয়, ফলে এজ সর্টিং-ই অ্যালগরিদমের প্রধান বটলনেক।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Kruskal Algorithm & DSU Mastery Quiz',
      bn: 'ক্রুশকাল অ্যালগরিদম ও DSU দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'grd-kru-qz-1',
        kind: 'mcq',
        topic: 'path-compression-recursion-flattening',
        question: {
          en: 'What does the line "this.parent[i] = this.find(this.parent[i])" achieve during a DSU find operation?',
          bn: 'DSU ফাইন্ড অপারেশনের সময় "this.parent[i] = this.find(this.parent[i])" লাইনটি কী কাজ করে?'
        },
        options: [
          {
            en: 'Path compression: it points node i and all traversed ancestors directly to the ultimate root, flattening tree depth to near-constant levels',
            bn: 'পাথ কম্প্রেশন: এটি নোড i এবং পথের সমস্ত পূর্বপুরুষকে সরাসরি মূল রুটের সাথে যুক্ত করে ট্রির উচ্চতা প্রায় সমান্তরাল করে দেয়'
          },
          {
            en: 'It deletes node i from memory to save RAM space',
            bn: 'র‍্যামের স্থান বাঁচাতে এটি মেমরি থেকে নোড i মুছে ফেলে'
          },
          {
            en: 'It doubles the rank of node i',
            bn: 'এটি নোড i-এর র‍্যাঙ্ক দ্বিগুণ করে'
          },
          {
            en: 'It checks if node i is an even number',
            bn: 'এটি নোড i একটি জোড় সংখ্যা কিনা তা পরীক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It flattens deep tree chains during lookup.',
          bn: 'এটি অনুসন্ধানের সময় দীর্ঘ ট্রির শিকলকে সোজা করে দেয়।'
        },
        explanation: {
          en: 'Path compression recursively updates the parent pointer of every node visited along the search path directly to the root, ensuring subsequent find calls execute in O(1).',
          bn: 'পাথ কম্প্রেশন অনুসন্ধানের পথে পরিদর্শিত প্রতিটি নোডের প্যারেন্ট সরাসরি রুটে নির্দেশ করিয়ে দেয়, ফলে পরবর্তী ফাইন্ড কলগুলো O(1) সময়ে কাজ করে।'
        }
      },
      {
        id: 'grd-kru-qz-2',
        kind: 'mcq',
        topic: 'cut-property-correctness',
        question: {
          en: 'Which mathematical theorem guarantees that Kruskal greedy edge selection always belongs to a Minimum Spanning Tree?',
          bn: 'কোন গাণিতিক উপপাদ্যটি নিশ্চিত করে যে ক্রুশকালের গ্রিডি এজ নির্বাচন সর্বদা একটি মিনিমাম স্প্যানিং ট্রির অন্তর্ভুক্ত হবে?'
        },
        options: [
          {
            en: 'The Cut Property: for any cut in graph G, the crossing edge with minimum weight strictly belongs to an MST of G',
            bn: 'কাট প্রপার্টি: গ্রাফ G-এর যেকোনো কাটের জন্য সর্বনিম্ন ওজনের সংযোগকারী এজটি নিশ্চিতভাবে G-এর একটি MST-র অংশ হবে'
          },
          {
            en: 'Fermat Last Theorem on prime numbers',
            bn: 'মৌলিক সংখ্যার ওপর ফার্মার শেষ উপপাদ্য'
          },
          {
            en: 'The Central Limit Theorem from statistics',
            bn: 'পরিসংখ্যানের সেন্ট্রাল লিমিট থিওরেম'
          },
          {
            en: 'Pythagorean Theorem for right triangles',
            bn: 'সমকোণী ত্রিভুজের পিথাগোরাসের উপপাদ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'The minimum weight crossing edge across any partition is always safe to add.',
          bn: 'যেকোনো বিভাজনের সর্বনিম্ন ওজনের সংযোগকারী এজটি যুক্ত করা সর্বদা নিরাপদ।'
        },
        explanation: {
          en: 'The Cut Property proves that if an edge has the strictly lowest weight crossing a partition of vertices, it must belong to an MST, justifying Kruskal greedy edge addition.',
          bn: 'কাট প্রপার্টি প্রমাণ করে যে কোনো পার্টিশনের সর্বনিম্ন ওজনের এজটি অবশ্যই MST-তে থাকবে, যা ক্রুশকালের গ্রিডি এজ সিলেকশনকে তাত্ত্বিকভাবে সত্য প্রমাণিত করে।'
        }
      },
      {
        id: 'grd-kru-qz-3',
        kind: 'mcq',
        topic: 'sparse-vs-dense-graphs-kruskal',
        question: {
          en: 'For which type of graph is Kruskal algorithm generally preferred over basic Prim algorithm?',
          bn: 'কোন ধরনের গ্রাফের জন্য সাধারণত বেসিক প্রিম অ্যালগরিদমের চেয়ে ক্রুশকাল অ্যালগরিদম বেশি পছন্দনীয়?'
        },
        options: [
          {
            en: 'Sparse graphs where E is close to V (E << V^2), because sorting E edges is fast',
            bn: 'স্পার্স গ্রাফ যেখানে এজের সংখ্যা শীর্ষবিন্দুর কাছাকাছি (E << V^2), কারণ কম এজ সাজানো দ্রুত হয়'
          },
          {
            en: 'Dense graphs where E is approximately equal to V^2',
            bn: 'ঘন বা ডেন্স গ্রাফ যেখানে এজের সংখ্যা প্রায় V^2 এর সমান'
          },
          {
            en: 'Graphs with zero vertices',
            bn: 'শূন্য শীর্ষবিন্দু বিশিষ্ট গ্রাফ'
          },
          {
            en: 'Graphs where all edge weights are equal to 0',
            bn: 'যেসব গ্রাফের সমস্ত এজের ওজন ০'
          }
        ],
        answer: 0,
        hint: {
          en: 'When there are few edges, sorting them is very quick.',
          bn: 'যখন এজের সংখ্যা কম থাকে তখন সেগুলো সাজানো খুব দ্রুত হয়।'
        },
        explanation: {
          en: 'In sparse graphs with few edges (E << V^2), sorting edges in O(E log E) is extremely fast. For dense graphs (E ~ V^2), Prim with adjacency matrices or Fibonacci heaps can be faster.',
          bn: 'কম এজ থাকা স্পার্স গ্রাফে O(E log E) সময়ে সাজানো খুব দ্রুত সম্পন্ন হয়। কিন্তু ঘন গ্রাফে (E ~ V^2) প্রিম অ্যালগরিদম বেশি কার্যকর হতে পারে।'
        }
      },
      {
        id: 'grd-kru-qz-4',
        kind: 'mcq',
        topic: 'kruskal-real-world-engineering',
        question: {
          en: 'Which real-world infrastructure project represents a direct application of Minimum Spanning Trees and Kruskal algorithm?',
          bn: 'কোন বাস্তব অবকাঠামোগত প্রকল্পটি মিনিমাম স্প্যানিং ট্রি এবং ক্রুশকাল অ্যালগরিদমের একটি সরাসরি প্রয়োগ?'
        },
        options: [
          {
            en: 'Laying telecommunication fiber optic cables or electrical power grids between cities with minimum total cable length',
            bn: 'শহরগুলোর মধ্যে সর্বনিম্ন তারের দৈর্ঘ্যে টেলিকম ফাইবার অপটিক ক্যাবল বা বৈদ্যুতিক পাওয়ার গ্রিড স্থাপন করা'
          },
          {
            en: 'Sorting a contact list alphabetically on a smartphone',
            bn: 'স্মার্টফোনে যোগাযোগের তালিকা বর্ণানুক্রমিকভাবে সাজানো'
          },
          {
            en: 'Rendering a 3D video game character in web browsers',
            bn: 'ওয়েব ব্রাউজারে ৩ডি ভিডিও গেমের চরিত্র রেন্ডার করা'
          },
          {
            en: 'Compressing JPEG image thumbnails using lossy encoding',
            bn: 'লসি এনকোডিং ব্যবহার করে জেপেগ ছবির থাম্বনেইল সংকুচিত করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Connecting multiple locations with minimal total cable cost.',
          bn: 'সর্বনিম্ন খরচে একাধিক ভৌগোলিক স্থান ক্যাবল দিয়ে যুক্ত করা।'
        },
        explanation: {
          en: 'Civil and telecommunications engineers use Kruskal MST to design nationwide electrical power distribution, water pipeline networks, and fiber optic backbones with minimal infrastructure expenditure.',
          bn: 'টেলিকম ও সিভিল ইঞ্জিনিয়াররা সর্বনিম্ন খরচে বিদ্যুৎ গ্রিড, পানির পাইপলাইন এবং ফাইবার অপটিক ব্যাকবোন নেটওয়ার্ক ডিজাইন করতে ক্রুশকাল MST ব্যবহার করেন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'swaps-and-the-swap',
    title: {
      en: 'Prim Algorithm & The Greedy Cut Property',
      bn: 'প্রিম অ্যালগরিদম ও গ্রিডি কাট প্রপার্টি'
    }
  }
};
