import type { Lesson } from '../../../lib/types';

export const SwapsAndTheSwapLesson: Lesson = {
  slug: 'swaps-and-the-swap',
  tech: 'greedy',
  title: {
    en: 'Prim Algorithm & The Greedy Cut Property',
    bn: 'প্রিম অ্যালগরিদম ও গ্রিডি কাট প্রপার্টি'
  },
  summary: {
    en: 'Learn how Prim algorithm grows a Minimum Spanning Tree from a seed root, understand the fundamental Cut Property proof, and optimize dense graphs.',
    bn: 'প্রিম অ্যালগরিদম কীভাবে একটি রুট থেকে শুরু করে মিনিমাম স্প্যানিং ট্রি বৃদ্ধি করে তা শিখুন, কাট প্রপার্টি প্রমাণ বুঝুন এবং ডেন্স গ্রাফ অপ্টিমাইজ করুন।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'prim-vs-kruskal-concept',
      text: {
        en: 'Prim Algorithm vs Kruskal Algorithm',
        bn: 'প্রিম অ্যালগরিদম বনাম ক্রুশকাল অ্যালগরিদম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you explore Prim algorithm, think of it as an expanding crystal that grows outward from a seed root. While Kruskal merges disconnected tree fragments across the whole graph, Prim keeps a single connected tree at all times. At every step, it examines all edges crossing the boundary between the visited tree vertices and unvisited vertices, greedily selecting the lightest crossing edge.',
        bn: 'যখন আপনি প্রিম অ্যালগরিদম অন্বেষণ করবেন, একে একটি স্ফটিক ভাবুন যা প্রাথমিক বীজ থেকে চারদিকে ছড়িয়ে পড়ে। ক্রুশকাল গ্রাফ জুড়ে বিচ্ছিন্ন টুকরোগুলো জোড়া লাগায়, কিন্তু প্রিম প্রতিটি মুহূর্তে একটি একক সংযুক্ত ট্রি অক্ষুণ্ণ রাখে। প্রতিটি ধাপে এটি পরিদর্শিত ও অ-পরিদর্শিত শীর্ষবিন্দুর মধ্যবর্তী সীমারেখা অতিক্রমকারী এজগুলোর মধ্যে সবচেয়ে হালকা এজটি বেছে নেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'the-cut-property',
          def: {
            en: 'The mathematical theorem stating that for any partition of vertices into two subsets, the minimum weight edge crossing the cut strictly belongs to the MST.',
            bn: 'গাণিতিক উপপাদ্য যা বলে যে শীর্ষবিন্দুগুলোকে দুটি দলে ভাগ করলে (কাট), সেই কাট অতিক্রমকারী সর্বনিম্ন ওজনের এজটি অবশ্যই MST-এর অন্তর্ভুক্ত হবে।'
          }
        },
        {
          term: 'crossing-edge',
          def: {
            en: 'An edge with one endpoint inside the visited tree vertex set S and its other endpoint in the unvisited vertex set V \\ S.',
            bn: 'এমন একটি এজ যার একটি প্রান্ত পরিদর্শিত ট্রি সেট S-এর ভেতরে এবং অপর প্রান্তটি অ-পরিদর্শিত সেট V \\ S-এর ভেতরে থাকে।'
          }
        },
        {
          term: 'priority-queue-key',
          def: {
            en: 'The minimum edge weight required to connect an unvisited vertex to the existing MST, maintained and updated inside a min-heap.',
            bn: 'একটি অ-পরিদর্শিত শীর্ষবিন্দুকে বর্তমান MST-র সাথে সংযুক্ত করতে প্রয়োজনীয় সর্বনিম্ন এজের ওজন, যা একটি মিন-হিপে সংরক্ষিত থাকে।'
          }
        },
        {
          term: 'dense-graph-optimization',
          def: {
            en: 'Using an adjacency matrix with Prim algorithm to achieve O(V^2) runtime on graphs where edge count approaches V^2.',
            bn: 'যেসব গ্রাফে এজের সংখ্যা প্রায় V^2 এর কাছাকাছি পৌঁছায় সেখানে প্রিম অ্যালগরিদমে অ্যাডজাসেন্সি ম্যাট্রিক্স ব্যবহার করে O(V^2) সময় অর্জন করা।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'prim-cut-property-svg',
      title: {
        en: 'Prim Algorithm: The Cut Property Across Visited and Unvisited Sets',
        bn: 'প্রিম অ্যালগরিদম: পরিদর্শিত ও অ-পরিদর্শিত সেটের মধ্যে কাট প্রপার্টি'
      },
      caption: {
        en: 'The cut partitions Visited {0, 1} from Unvisited {2, 3, 4}. Crossing edges are (1,2)=3, (1,4)=5, (0,3)=6, (1,3)=8. Prim greedily picks minimum crossing edge (1,2)=3.',
        bn: 'কাটটি পরিদর্শিত {০, ১} এবং অ-পরিদর্শিত {২, ৩, ৪} কে আলাদা করেছে। সংযোগকারী এজগুলো হলো (১,২)=৩, (১,৪)=৫, (০,৩)=৬, (১,৩)=৮। সর্বনিম্ন হওয়ায় প্রিম এজ (১,২)=৩ গ্রহণ করে।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="pbgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="visGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#065f46" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="unvisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#pbgGrad)" stroke="#334155" stroke-width="2"/>

  <!-- Left: Visited Island S {0, 1} -->
  <rect x="50" y="55" width="280" height="280" rx="20" fill="url(#visGrad)" stroke="#10b981" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="75" y="85" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#34d399">Visited Tree Set S = {0, 1}</text>
  <text x="75" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#a7f3d0">Current Tree Edge: (0, 1) wt=2</text>

  <!-- Node 0 -->
  <circle cx="120" cy="180" r="22" fill="#10b981"/>
  <text x="120" y="186" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">0</text>

  <!-- Node 1 -->
  <circle cx="250" cy="180" r="22" fill="#10b981"/>
  <text x="250" y="186" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">1</text>

  <!-- Tree Edge (0, 1) wt 2 -->
  <line x1="142" y1="180" x2="228" y2="180" stroke="#34d399" stroke-width="4"/>
  <rect x="175" y="165" width="24" height="18" rx="3" fill="#064e3b"/>
  <text x="187" y="178" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">2</text>

  <!-- Middle: The Cut Boundary Line -->
  <line x1="390" y1="40" x2="390" y2="340" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8 4"/>
  <text x="390" y="30" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle">THE CUT BOUNDARY</text>

  <!-- Right: Unvisited Set V \ S {2, 3, 4} -->
  <rect x="445" y="55" width="365" height="280" rx="20" fill="url(#unvisGrad)" stroke="#64748b" stroke-width="1.5"/>
  <text x="470" y="85" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#94a3b8">Unvisited Set V \\ S = {2, 3, 4}</text>

  <!-- Node 2 -->
  <circle cx="530" cy="140" r="20" fill="#3b82f6"/>
  <text x="530" y="146" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">2</text>

  <!-- Node 3 -->
  <circle cx="530" cy="270" r="20" fill="#3b82f6"/>
  <text x="530" y="276" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">3</text>

  <!-- Node 4 -->
  <circle cx="720" cy="200" r="20" fill="#3b82f6"/>
  <text x="720" y="206" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">4</text>

  <!-- Crossing Edge 1: (1, 2) wt 3 -> MINIMUM CROSSING (SELECTED!) -->
  <line x1="250" y1="180" x2="530" y2="140" stroke="#34d399" stroke-width="3"/>
  <rect x="375" y="145" width="32" height="22" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
  <text x="391" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">w=3</text>

  <!-- Crossing Edge 2: (1, 4) wt 5 -->
  <line x1="250" y1="180" x2="720" y2="200" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <rect x="440" y="175" width="28" height="18" rx="3" fill="#0f172a"/>
  <text x="454" y="188" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">w=5</text>

  <!-- Crossing Edge 3: (0, 3) wt 6 -->
  <line x1="120" y1="180" x2="530" y2="270" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <rect x="290" y="235" width="28" height="18" rx="3" fill="#0f172a"/>
  <text x="304" y="248" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">w=6</text>

  <!-- Crossing Edge 4: (1, 3) wt 8 -->
  <line x1="250" y1="180" x2="530" y2="270" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <rect x="370" y="225" width="28" height="18" rx="3" fill="#0f172a"/>
  <text x="384" y="238" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">w=8</text>

  <!-- Bottom Callout -->
  <text x="50" y="360" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">Greedy Decision: Pick Edge (1, 2) with weight 3.</text>
  <text x="440" y="360" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">The Cut Property guarantees Edge (1, 2) is in the MST.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'the-cut-property-proof',
      text: {
        en: 'The Cut Property Proof Sketch',
        bn: 'কাট প্রপার্টি প্রমাণের রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Suppose an edge e* is the strictly lightest edge crossing the cut (S, V \\ S). Assume for contradiction that some Minimum Spanning Tree T does not contain e*. Because T is a valid tree connecting all vertices, there must exist some path in T connecting the endpoints of e*. Since e* crosses from S to V \\ S, this path must cross the cut using at least another edge e_other. If we remove e_other from T and insert e*, we obtain a new spanning tree T-prime. The new cost is cost(T-prime) = cost(T) - cost(e_other) + cost(e*). Since e* has strictly smaller cost than e_other, cost(T-prime) < cost(T), contradicting the assumption that T was minimal! Therefore, e* must belong to the MST.',
        bn: 'ধরা যাক এজ e* হলো কাট (S, V \\ S) অতিক্রমকারী সর্বনিম্ন ওজনের এজ। প্রমাণের খাতিরে ধরে নিই যে একটি মিনিমাম স্প্যানিং ট্রি T-এর মধ্যে e* নেই। যেহেতু T একটি পূর্ণ স্প্যানিং ট্রি, তাই T-এর ভেতরে e*-এর দুই প্রান্তের মধ্যে অবশ্যই একটি বিকল্প পথ থাকবে। যেহেতু e* কাট অতিক্রম করে, তাই সেই পথের অন্তত আরেকটি এজ e_other অবশ্যই কাট অতিক্রম করবে। এখন T থেকে e_other সরিয়ে e* যুক্ত করলে একটি নতুন স্প্যানিং ট্রি T-prime পাওয়া যায়। এর খরচ হবে cost(T-prime) = cost(T) - cost(e_other) + cost(e*)। যেহেতু e* এর খরচ e_other এর চেয়ে কম, তাই T-prime এর খরচ T এর চেয়ে কম হবে, যা প্রমাণ করে যে T সর্বনিম্ন হতে পারে না! সুতরাং e* অবশ্যই MST-র অন্তর্ভুক্ত হবে।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-prim-ts',
      text: {
        en: 'Runnable TypeScript: Complete Prim MST Algorithm',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: সম্পূর্ণ প্রিম MST অ্যালগরিদম'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Executing Prim algorithm on 5 vertices and 7 edges, starting at root 0 and computing total MST weight 16.',
        bn: '৫টি শীর্ষবিন্দু ও ৭টি এজে রুট ০ থেকে প্রিম অ্যালগরিদম চালিয়ে মোট ১৬ ওজনের MST তৈরি।'
      },
      code: `interface GraphEdge {
  to: number;
  weight: number;
}

interface PrimMSTResult {
  totalWeight: number;
  edges: { from: number; to: number; weight: number }[];
}

function primMST(numVertices: number, adjList: Map<number, GraphEdge[]>, startNode = 0): PrimMSTResult {
  const inMST = new Array(numVertices).fill(false);
  const key = new Array(numVertices).fill(Infinity);
  const parent = new Array(numVertices).fill(-1);

  // Seed root vertex
  key[startNode] = 0;

  for (let count = 0; count < numVertices; count++) {
    // 1. Greedily pick unvisited vertex with minimum key
    let u = -1;
    let minKey = Infinity;

    for (let v = 0; v < numVertices; v++) {
      if (!inMST[v] && key[v] < minKey) {
        minKey = key[v];
        u = v;
      }
    }

    if (u === -1) break; // Graph is disconnected

    // Include u in MST
    inMST[u] = true;

    // 2. Relax all adjacent vertices of u
    const neighbors = adjList.get(u) || [];
    for (const edge of neighbors) {
      const v = edge.to;
      const w = edge.weight;

      if (!inMST[v] && w < key[v]) {
        key[v] = w;
        parent[v] = u;
      }
    }
  }

  // Calculate total weight and collect edges
  let totalWeight = 0;
  const edges: { from: number; to: number; weight: number }[] = [];

  for (let v = 0; v < numVertices; v++) {
    if (parent[v] !== -1) {
      edges.push({ from: parent[v], to: v, weight: key[v] });
      totalWeight += key[v];
    }
  }

  return { totalWeight, edges };
}

// Build adjacency list for 5 vertices and 7 edges
const numVertices = 5;
const adjList = new Map<number, GraphEdge[]>();
for (let i = 0; i < numVertices; i++) adjList.set(i, []);

function addUndirectedEdge(u: number, v: number, w: number) {
  adjList.get(u)!.push({ to: v, weight: w });
  adjList.get(v)!.push({ to: u, weight: w });
}

addUndirectedEdge(0, 1, 2);
addUndirectedEdge(0, 3, 6);
addUndirectedEdge(1, 2, 3);
addUndirectedEdge(1, 3, 8);
addUndirectedEdge(1, 4, 5);
addUndirectedEdge(2, 4, 7);
addUndirectedEdge(3, 4, 9);

const primResult = primMST(numVertices, adjList, 0);

console.log('Prim MST Total Cost:', primResult.totalWeight); // 16
console.log('Selected MST Edges Count:', primResult.edges.length); // 4
for (const e of primResult.edges) {
  console.log(\`MST Edge (\${e.from} - \${e.to}): weight \${e.weight}\`);
}
// Outputs:
// MST Edge (0 - 1): weight 2
// MST Edge (1 - 2): weight 3
// MST Edge (0 - 3): weight 6
// MST Edge (1 - 4): weight 5
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Prim algorithm has a time complexity of O(E log V) when implemented with a standard binary min-heap. When implemented with a Fibonacci heap, it runs in O(E + V log V), making it faster than Kruskal for dense graphs.',
        bn: 'স্ট্যান্ডার্ড বাইনারি মিন-হিপ ব্যবহারে প্রিম অ্যালগরিদমের টাইম কমপ্লেক্সিটি O(E log V)। আর ফিবোনাচ্চি হিপ ব্যবহার করলে এটি O(E + V log V) সময়ে চলে, যা ঘন গ্রাফের ক্ষেত্রে ক্রুশকালের চেয়ে দ্রুততর।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-prm-ex-1',
      kind: 'mcq',
      topic: 'prim-cut-property-definition',
      question: {
        en: 'What fundamental mathematical property guarantees that Prim greedy choice is always safe and optimal?',
        bn: 'কোন মৌলিক গাণিতিক বৈশিষ্ট্য নিশ্চিত করে যে প্রিমের গ্রিডি পছন্দ সর্বদা নিরাপদ ও সর্বোত্তম?'
      },
      options: [
        {
          en: 'The Cut Property: the minimum weight edge crossing any cut (S, V \\ S) belongs to an MST',
          bn: 'কাট প্রপার্টি: যেকোনো কাট (S, V \\ S) অতিক্রমকারী সর্বনিম্ন ওজনের এজটি MST-এর অন্তর্ভুক্ত'
        },
        {
          en: 'Eulerian path theorem for even-degree vertices',
          bn: 'জোড় ডিগ্রি শীর্ষবিন্দুর ইউলারিয়ান পাথ উপপাদ্য'
        },
        {
          en: 'Matrix multiplication associative law',
          bn: 'ম্যাট্রিক্স গুণের সহযোগী নিয়ম'
        },
        {
          en: 'The law of conservation of energy',
          bn: 'শক্তির নিত্যতা সূত্র'
        }
      ],
      answer: 0,
      hint: {
        en: 'The minimum edge crossing from visited to unvisited vertices is always safe to take.',
        bn: 'পরিদর্শিত থেকে অ-পরিদর্শিত শীর্ষবিন্দুর সংযোগকারী সর্বনিম্ন এজটি নেওয়া সর্বদা নিরাপদ।'
      },
      explanation: {
        en: 'The Cut Property proves that for any partition of vertices, the lightest crossing edge can be safely incorporated into a Minimum Spanning Tree without sacrificing global optimality.',
        bn: 'কাট প্রপার্টি প্রমাণ করে যে শীর্ষবিন্দুর যেকোনো বিভাজনে সর্বনিম্ন ওজনের সংযোগকারী এজটি নিলে সামগ্রিক অপ্টিমালিটি ক্ষুণ্ন হয় না।'
      }
    },
    {
      id: 'grd-prm-ex-2',
      kind: 'mcq',
      topic: 'prim-mst-cost-calculation',
      question: {
        en: 'In our 5-vertex example graph with root 0, what was the total weight of the computed Minimum Spanning Tree?',
        bn: 'আমাদের ৫-শীর্ষবিন্দুর উদাহরণে রুট ০ থেকে শুরু করে গণনা করা মিনিমাম স্প্যানিং ট্রির মোট ওজন কত ছিল?'
      },
      options: [
        {
          en: '16 (edges with weights 2, 3, 6, and 5)',
          bn: '১৬ (২, ৩, ৬ এবং ৫ ওজনের এজ দ্বারা গঠিত)'
        },
        {
          en: '40 (sum of all edges in graph)',
          bn: '৪০ (গ্রাফের সমস্ত এজের সমষ্টি)'
        },
        {
          en: '12',
          bn: '১২'
        },
        {
          en: '25',
          bn: '২৫'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate: 2 + 3 + 6 + 5 = 16.',
        bn: 'হিসাব করুন: ২ + ৩ + ৬ + ৫ = ১৬।'
      },
      explanation: {
        en: 'The selected MST edges are (0-1) cost 2, (1-2) cost 3, (0-3) cost 6, and (1-4) cost 5. Sum of weights = 2 + 3 + 6 + 5 = 16.',
        bn: 'নির্বাচিত MST এজগুলো হলো (০-১) খরচ ২, (১-২) খরচ ৩, (০-৩) খরচ ৬ এবং (১-৪) খরচ ৫। মোট ওজন = ২ + ৩ + ৬ + ৫ = ১৬।'
      }
    },
    {
      id: 'grd-prm-ex-3',
      kind: 'mcq',
      topic: 'prim-vs-kruskal-structural-difference',
      question: {
        en: 'How does the structural growth pattern of Prim algorithm differ from Kruskal algorithm?',
        bn: 'প্রিম অ্যালগরিদমের কাঠামোগত বৃদ্ধির ধরন ক্রুশকাল অ্যালগরিদমের থেকে কীভাবে আলাদা?'
      },
      options: [
        {
          en: 'Prim grows a single connected tree from a seed root, whereas Kruskal merges disconnected tree fragments across the entire graph',
          bn: 'প্রিম একটি রুট থেকে একক সংযুক্ত ট্রি বড় করে, যেখানে ক্রুশকাল পুরো গ্রাফ জুড়ে বিচ্ছিন্ন ট্রির খণ্ডগুলোকে একত্রিত করে'
        },
        {
          en: 'Prim only works on directed acyclic graphs (DAGs)',
          bn: 'প্রিম কেবল ডিরেক্টেড অ্যাসাইক্লিক গ্রাফে (DAG) কাজ করে'
        },
        {
          en: 'Prim requires sorting all edges at the start',
          bn: 'শুরুতেই প্রিমে সমস্ত এজ সাজানোর প্রয়োজন হয়'
        },
        {
          en: 'Kruskal requires a priority queue for vertex keys',
          bn: 'ক্রুশকালে শীর্ষবিন্দুর কী-এর জন্য প্রায়োরিটি কিউ দরকার হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prim maintains one contiguous tree; Kruskal builds a forest first.',
        bn: 'প্রিম একটি অবিচ্ছিন্ন ট্রি বজায় রাখে; ক্রুশকাল শুরুতে একটি ফরেস্ট গড়ে তোলে।'
      },
      explanation: {
        en: 'Prim maintains an always-connected tree starting at a single vertex and adds adjacent nodes one by one. Kruskal selects edges globally regardless of connectivity, using DSU to merge components.',
        bn: 'প্রিম একটি শীর্ষবিন্দু থেকে শুরু করে সর্বদা সংযুক্ত একটি ট্রি বৃদ্ধি করে। ক্রুশকাল সংযোগ না দেখে পুরো গ্রাফ থেকে ছোট এজ নেয় এবং DSU দিয়ে যুক্ত করে।'
      }
    },
    {
      id: 'grd-prm-ex-4',
      kind: 'mcq',
      topic: 'prim-time-complexity-with-heap',
      question: {
        en: 'What is the time complexity of Prim algorithm when implemented with an adjacency list and a binary min-heap?',
        bn: 'অ্যাডজাসেন্সি লিস্ট এবং বাইনারি মিন-হিপ ব্যবহার করে বাস্তবায়ন করলে প্রিম অ্যালগরিদমের টাইম কমপ্লেক্সিটি কত হয়?'
      },
      options: [
        {
          en: 'O(E log V) because each vertex is extracted in O(log V) and each edge updates key in O(log V)',
          bn: 'O(E log V) কারণ প্রতিটি শীর্ষবিন্দু O(log V)-এ বের হয় এবং প্রতিটি এজ O(log V)-এ কী আপডেট করে'
        },
        {
          en: 'O(V^3) cubic time',
          bn: 'O(V^3) ঘনকীয় সময়'
        },
        {
          en: 'O(2^V) exponential time',
          bn: 'O(২^V) সূচকীয় সময়'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(১) ধ্রুবক সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each edge triggers at most one decrease-key in the priority queue.',
        bn: 'প্রতিটি এজ প্রায়োরিটি কিউতে সর্বোচ্চ একবার ডিক্রিজ-কী ঘটায়।'
      },
      explanation: {
        en: 'With a binary heap, extracting min keys takes O(V log V) total, and decreasing keys for edges takes O(E log V), producing overall complexity O(E log V).',
        bn: 'বাইনারি হিপে মিন কী বের করতে O(V log V) এবং এজের কী কমাতে O(E log V) লাগে, ফলে সামগ্রিক কমপ্লেক্সিটি হয় O(E log V)।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Prim Algorithm & Cut Property Quiz',
      bn: 'প্রিম অ্যালগরিদম ও কাট প্রপার্টি কুইজ'
    },
    questions: [
      {
        id: 'grd-prm-qz-1',
        kind: 'mcq',
        topic: 'prim-root-independence',
        question: {
          en: 'Does changing the initial seed root vertex in Prim algorithm alter the total weight of the resulting Minimum Spanning Tree?',
          bn: 'প্রিম অ্যালগরিদমে প্রাথমিক সিড রুট শীর্ষবিন্দু পরিবর্তন করলে কি প্রাপ্ত মিনিমাম স্প্যানিং ট্রির মোট ওজনের কোনো পরিবর্তন হয়?'
        },
        options: [
          {
            en: 'No, every valid seed vertex produces an MST with the exact same minimal total weight',
            bn: 'না, যেকোনো বৈধ রুট শীর্ষবিন্দু ঠিক একই সর্বনিম্ন মোট ওজনের একটি MST তৈরি করে'
          },
          {
            en: 'Yes, picking vertex 0 is always twice as cheap as picking vertex 1',
            bn: 'হ্যাঁ, শীর্ষবিন্দু ০ বাছলে শীর্ষবিন্দু ১ এর চেয়ে সর্বদা অর্ধেক খরচ হয়'
          },
          {
            en: 'Yes, odd-numbered root vertices cause an infinite loop',
            bn: 'হ্যাঁ, বিজোড় সংখ্যার রুট শীর্ষবিন্দু ইনফিনিট লুপ তৈরি করে'
          },
          {
            en: 'Only if the graph has fewer than 2 vertices',
            bn: 'কেবল তখনই যদি গ্রাফে ২টির কম শীর্ষবিন্দু থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'MST weight is a property of the graph, not of the algorithm starting point.',
          bn: 'MST-র ওজন গ্রাফের নিজস্ব বৈশিষ্ট্য, অ্যালগরিদমের শুরুর বিন্দুর ওপর নির্ভরশীল নয়।'
        },
        explanation: {
          en: 'While distinct starting vertices may yield structurally different spanning trees if tie weights exist, the total sum of edge weights is guaranteed to be identical and minimal.',
          bn: 'শুরুর শীর্ষবিন্দু ভিন্ন হলে ট্রির কাঠামোতে কিছুটা অমিল থাকতে পারে যদি সমান ওজনের এজ থাকে, তবে এজের ওজনের মোট যোগফল সর্বদা অভিন্ন ও সর্বনিম্ন হবে।'
        }
      },
      {
        id: 'grd-prm-qz-2',
        kind: 'mcq',
        topic: 'adjacency-matrix-dense-graph-advantage',
        question: {
          en: 'Why is an adjacency matrix implementation of Prim algorithm with O(V^2) complexity preferred for dense graphs (E ~ V^2)?',
          bn: 'ঘন গ্রাফে (E ~ V^2) O(V^2) কমপ্লেক্সিটির অ্যাডজাসেন্সি ম্যাট্রিক্স বিশিষ্ট প্রিম অ্যালগরিদম কেন বেশি উপযুক্ত?'
        },
        options: [
          {
            en: 'When E ~ V^2, binary heap O(E log V) becomes O(V^2 log V), which is slower than matrix O(V^2) due to heap overhead',
            bn: 'যখন E ~ V^2 হয়, তখন বাইনারি হিপের O(E log V) হয়ে যায় O(V^2 log V), যা হিপ ওভারহেডের কারণে ম্যাট্রিক্সের O(V^2) এর চেয়ে ধীরগতির'
          },
          {
            en: 'Because adjacency matrices consume less memory than adjacency lists on dense graphs',
            bn: 'কারণ ঘন গ্রাফে অ্যাডজাসেন্সি ম্যাট্রিক্স অ্যাডজাসেন্সি লিস্টের চেয়ে কম মেমরি ব্যবহার করে'
          },
          {
            en: 'Because JavaScript arrays cannot hold more than 100 elements',
            bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে ১০০ এর বেশি উপাদান ধারণ করতে পারে না'
          },
          {
            en: 'Because dense graphs cannot have negative numbers',
            bn: 'কারণ ঘন গ্রাফে ঋণাত্মক সংখ্যা থাকতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'O(V^2) beats O(V^2 log V) when edges are plentiful.',
          bn: 'যখন এজের সংখ্যা অনেক বেশি হয় তখন O(V^2 log V) এর চেয়ে O(V^2) দ্রুত কাজ করে।'
        },
        explanation: {
          en: 'In complete or dense graphs where E approaches V^2, a simple linear scan over an array of size V per step takes O(V^2) total, beating a binary heap with O(V^2 log V) overhead.',
          bn: 'ঘন গ্রাফে যেখানে E প্রায় V^2 হয়, সেখানে প্রতিটি পদক্ষেপে V আকারের অ্যারে স্ক্যান করে O(V^2) পাওয়া যায়, যা বাইনারি হিপের O(V^2 log V) এর চেয়ে দ্রুত।'
        }
      },
      {
        id: 'grd-prm-qz-3',
        kind: 'mcq',
        topic: 'mst-uniqueness-condition',
        question: {
          en: 'Under what condition is the Minimum Spanning Tree of a graph mathematically guaranteed to be strictly unique?',
          bn: 'কোন শর্তে একটি গ্রাফের মিনিমাম স্প্যানিং ট্রি গাণিতিকভাবে নিশ্চিতভাবে একক বা অনন্য (ইউনিক) হয়?'
        },
        options: [
          {
            en: 'When all edge weights in the graph are distinct (no two edges have the exact same weight)',
            bn: 'যখন গ্রাফের সমস্ত এজের ওজন সম্পূর্ণ আলাদা হয় (কোনো দুটি এজের ওজন এক না থাকে)'
          },
          {
            en: 'When the number of vertices is an odd number',
            bn: 'যখন শীর্ষবিন্দুর সংখ্যা একটি বিজোড় সংখ্যা হয়'
          },
          {
            en: 'When the graph contains no cycles',
            bn: 'যখন গ্রাফে কোনো চক্র বা সাইকেল থাকে না'
          },
          {
            en: 'When the graph is plotted in three dimensions',
            bn: 'যখন গ্রাফটি ত্রিমাত্রিক তলে আঁকা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Distinct edge weights eliminate all ties during greedy choices.',
          bn: 'এজের ওজন আলাদা হলে গ্রিডি সিদ্ধান্তের সময় কোনো টাই বা সমান মান থাকে না।'
        },
        explanation: {
          en: 'If every edge in a connected graph has a unique numerical weight, there is exactly one unique Minimum Spanning Tree. Ties in edge weights can produce multiple valid trees.',
          bn: 'যদি সংযুক্ত গ্রাফের প্রতিটি এজের ওজন আলাদা হয়, তবে নিশ্চিতভাবে একটি মাত্র অনন্য MST গঠিত হবে। ওজনে সমতা থাকলে একাধিক বৈধ ট্রি হতে পারে।'
        }
      },
      {
        id: 'grd-prm-qz-4',
        kind: 'mcq',
        topic: 'dijkstra-vs-prim-similarity',
        question: {
          en: 'How does Prim algorithm code structure closely mirror Dijkstra shortest path algorithm?',
          bn: 'কোড কাঠামোর দিক থেকে প্রিম অ্যালগরিদম কীভাবে ডাইকস্ট্রা শর্টেস্ট পাথ অ্যালগরিদমের সাথে হুবহু সাদৃশ্যপূর্ণ?'
        },
        options: [
          {
            en: 'Both use a priority queue of vertices, but Prim updates keys using edge weight (w), whereas Dijkstra updates keys using cumulative path distance (dist[u] + w)',
            bn: 'উভয়ই শীর্ষবিন্দুর প্রায়োরিটি কিউ ব্যবহার করে, তবে প্রিম কেবল এজের ওজনে (w) কী আপডেট করে আর ডাইকস্ট্রা সামগ্রিক দূরত্বের যোগফলে (dist[u] + w) আপডেট করে'
          },
          {
            en: 'Prim only runs on trees while Dijkstra only runs on matrices',
            bn: 'প্রিম কেবল ট্রিতে চলে আর ডাইকস্ট্রা কেবল ম্যাট্রিক্সে চলে'
          },
          {
            en: 'Both algorithms require sorting edges in descending order upfront',
            bn: 'উভয় অ্যালগরিদমে শুরুতেই এজগুলোকে বড় থেকে ছোট ক্রমে সাজাতে হয়'
          },
          {
            en: 'Both algorithms use Disjoint Set Union (DSU) to check cycles',
            bn: 'উভয় অ্যালগরিদমই সাইকেল চেক করতে DSU ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prim measures distance to the tree; Dijkstra measures distance to the start root.',
          bn: 'প্রিম ট্রির দূরত্ব মাপে; ডাইকস্ট্রা শুরুর বিন্দু থেকে মোট দূরত্ব মাপে।'
        },
        explanation: {
          en: 'Prim and Dijkstra share identical priority queue loop frameworks. Prim relaxation condition is key[v] > weight(u, v) (distance to tree), while Dijkstra relaxation is dist[v] > dist[u] + weight(u, v) (distance to origin).',
          bn: 'প্রিম ও ডাইকস্ট্রা অভিন্ন প্রায়োরিটি কিউ ফ্রেমওয়ার্ক ব্যবহার করে। প্রিমে রিলাক্সেশন শর্ত হলো key[v] > weight(u, v), আর ডাইকস্ট্রায় হলো dist[v] > dist[u] + weight(u, v)।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'intervals-and-the-interval',
    title: {
      en: 'Dijkstra Shortest Path Algorithm',
      bn: 'ডাইকস্ট্রা শর্টেস্ট পাথ অ্যালগরিদম'
    }
  }
};
