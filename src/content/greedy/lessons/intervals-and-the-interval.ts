import type { Lesson } from '../../../lib/types';

export const IntervalsAndTheIntervalLesson: Lesson = {
  slug: 'intervals-and-the-interval',
  tech: 'greedy',
  title: {
    en: 'Dijkstra Shortest Path Algorithm & Edge Relaxation',
    bn: 'ডাইকস্ট্রা শর্টেস্ট পাথ অ্যালগরিদম ও এজ রিলাক্সেশন'
  },
  summary: {
    en: 'Master single-source shortest paths on non-negative weighted graphs, understand why greedy relaxation is monotonic, and discover why negative weights break Dijkstra.',
    bn: 'অ-ঋণাত্মক ওজনের গ্রাফে সিঙ্গেল-সোর্স শর্টেস্ট পাথ শিখুন, গ্রিডি রিলাক্সেশন কেন মোনোটনিক তা বুঝুন এবং জানুন কেন ঋণাত্মক ওজন ডাইকস্ট্রাকে অকার্যকর করে।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'single-source-shortest-path',
      text: {
        en: 'The Single-Source Shortest Path Problem',
        bn: 'সিঙ্গেল-সোর্স শর্টেস্ট পাথ সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'How do map navigators find the fastest route through a busy road network? Given a graph with non-negative edge costs and a starting source vertex S, Dijkstra algorithm finds the shortest path to every other vertex. Published by Edsger Dijkstra in 1959, this greedy approach powers internet routing protocols and digital navigation map engines.',
        bn: 'কীভাবে মানচিত্রের নেভিগেশন ব্যস্ত রাস্তার মধ্য দিয়ে দ্রুততম পথ খুঁজে বের করে? অ-ঋণাত্মক এজের খরচ বিশিষ্ট গ্রাফ এবং একটি শুরুর উৎস শীর্ষবিন্দু S দেওয়া থাকলে ডাইকস্ট্রা অ্যালগরিদম অন্য প্রতিটি শীর্ষবিন্দুতে সর্বনিম্ন দূরত্বের পথ নির্ণয় করে। ১৯৫৯ সালে এডসগার ডাইকস্ট্রা কর্তৃক প্রকাশিত এই গ্রিডি কৌশল ইন্টারনেট রাউটিং এবং ডিজিটাল নেভিগেশন মানচিত্র ইঞ্জিন পরিচালনা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'dijkstra-algorithm',
          def: {
            en: 'A greedy algorithm that finds the shortest path from a single source to all vertices in a graph with non-negative edge weights.',
            bn: 'একটি গ্রিডি অ্যালগরিদম যা অ-ঋণাত্মক এজের গ্রাফে একটি উৎস থেকে অন্যান্য সমস্ত শীর্ষবিন্দুতে সর্বনিম্ন দূরত্বের পথ খুঁজে বের করে।'
          }
        },
        {
          term: 'edge-relaxation',
          def: {
            en: 'The process of testing whether passing through vertex u offers a shorter path to neighbor v, updating dist[v] = min(dist[v], dist[u] + weight(u, v)).',
            bn: 'শীর্ষবিন্দু u হয়ে প্রতিবেশী v-তে যাওয়ার পথটি সংক্ষিপ্ত কিনা তা পরীক্ষা করে dist[v] = min(dist[v], dist[u] + weight(u, v)) আপডেট করার প্রক্রিয়া।'
          }
        },
        {
          term: 'monotonic-distance-invariant',
          def: {
            en: 'The property in non-negative graphs ensuring that paths can only increase in cost, guaranteeing extracted minimum distances are permanently optimal.',
            bn: 'অ-ঋণাত্মক গ্রাফের এমন একটি বৈশিষ্ট্য যা নিশ্চিত করে যে পথ যোগ করলে দূরত্ব কেবল বাড়তে পারে, ফলে কিউ থেকে বের করা দূরত্বটি চিরতরে চূড়ান্ত হয়ে যায়।'
          }
        },
        {
          term: 'negative-edge-failure',
          def: {
            en: 'The breakdown of greedy guarantees when negative edges exist, where later steps could retroactively shorten distances of previously finalized vertices.',
            bn: 'ঋণাত্মক ওজনের এজের উপস্থিতিতে গ্রিডি নীতির ব্যর্থতা, যেখানে পরবর্তী কোনো ঋণাত্মক এজ পূর্বের চূড়ান্ত হওয়া শীর্ষবিন্দুর দূরত্ব কমিয়ে দিতে পারে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'dijkstra-graph-trace-svg',
      title: {
        en: 'Dijkstra Algorithm Trace: 5 Vertices from Source 0',
        bn: 'ডাইকস্ট্রা অ্যালগরিদম ট্রেস: উৎস ০ থেকে ৫টি শীর্ষবিন্দু'
      },
      caption: {
        en: 'Final shortest distances from source 0: Node 1 is 3 (via 0->2->1), Node 2 is 2, Node 3 is 5, and Node 4 is 6.',
        bn: 'উৎস ০ থেকে চূড়ান্ত সর্বনিম্ন দূরত্ব: নোড ১ হলো ৩ (০->২->১ হয়ে), নোড ২ হলো ২, নোড ৩ হলো ৫ এবং নোড ৪ হলো ৬।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="dbgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="srcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#dbgGrad)" stroke="#334155" stroke-width="2"/>

  <!-- Graph Flow: Source 0 (x=100, y=190) -->
  <!-- Edges -->
  <!-- 0 -> 2 (wt 2) in GREEN (part of shortest paths) -->
  <line x1="120" y1="190" x2="300" y2="280" stroke="#10b981" stroke-width="3"/>
  <rect x="200" y="240" width="28" height="20" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="214" y="254" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">2</text>

  <!-- 0 -> 1 (wt 4) direct line (beaten by 0->2->1) -->
  <line x1="120" y1="190" x2="300" y2="100" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <rect x="195" y="130" width="28" height="20" rx="4" fill="#0f172a"/>
  <text x="209" y="144" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">4</text>

  <!-- 2 -> 1 (wt 1) in GREEN -->
  <line x1="300" y1="280" x2="300" y2="100" stroke="#10b981" stroke-width="3"/>
  <rect x="305" y="180" width="28" height="20" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="319" y="194" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">1</text>

  <!-- 1 -> 3 (wt 2) in GREEN -->
  <line x1="300" y1="100" x2="520" y2="100" stroke="#10b981" stroke-width="3"/>
  <rect x="400" y="85" width="28" height="20" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="414" y="99" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">2</text>

  <!-- 1 -> 4 (wt 3) in GREEN -->
  <line x1="300" y1="100" x2="520" y2="280" stroke="#10b981" stroke-width="3"/>
  <rect x="390" y="180" width="28" height="20" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="404" y="194" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">3</text>

  <!-- 2 -> 3 (wt 4) -->
  <line x1="300" y1="280" x2="520" y2="100" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <rect x="420" y="210" width="28" height="20" rx="4" fill="#0f172a"/>
  <text x="434" y="224" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">4</text>

  <!-- 2 -> 4 (wt 5) -->
  <line x1="300" y1="280" x2="520" y2="280" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 2"/>
  <rect x="400" y="265" width="28" height="20" rx="4" fill="#0f172a"/>
  <text x="414" y="279" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">5</text>

  <!-- Nodes -->
  <!-- Node 0: Source -->
  <circle cx="100" cy="190" r="26" fill="url(#srcGrad)"/>
  <text x="100" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">0</text>
  <text x="100" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">dist=0</text>

  <!-- Node 1: Finalized -->
  <circle cx="300" cy="100" r="24" fill="url(#finGrad)"/>
  <text x="300" y="105" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">1</text>
  <text x="300" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">dist=3</text>

  <!-- Node 2: Finalized -->
  <circle cx="300" cy="280" r="24" fill="url(#finGrad)"/>
  <text x="300" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">2</text>
  <text x="300" y="320" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">dist=2</text>

  <!-- Node 3: Finalized -->
  <circle cx="520" cy="100" r="24" fill="url(#finGrad)"/>
  <text x="520" y="105" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">3</text>
  <text x="520" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">dist=5</text>

  <!-- Node 4: Finalized -->
  <circle cx="520" cy="280" r="24" fill="url(#finGrad)"/>
  <text x="520" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">4</text>
  <text x="520" y="320" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">dist=6</text>

  <!-- Right: Distance Table Card -->
  <rect x="600" y="45" width="230" height="290" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="620" y="75" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#38bdf8">Shortest Distance Table</text>

  <text x="620" y="110" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Node 0: </text>
  <text x="680" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24">0 (Source)</text>

  <text x="620" y="145" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Node 2: </text>
  <text x="680" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">2 (0 -&gt; 2)</text>

  <text x="620" y="180" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Node 1: </text>
  <text x="680" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">3 (0 -&gt; 2 -&gt; 1)</text>

  <text x="620" y="215" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Node 3: </text>
  <text x="680" y="215" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">5 (1 -&gt; 3)</text>

  <text x="620" y="250" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Node 4: </text>
  <text x="680" y="250" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">6 (1 -&gt; 4)</text>

  <text x="620" y="295" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Notice: Node 1 initially had dist 4, but relaxed to 3 via Node 2!</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'dijkstra-execution-steps',
      text: {
        en: 'Dijkstra Algorithm Step-by-Step Execution',
        bn: 'ডাইকস্ট্রা অ্যালগরিদমের ধাপভিত্তিক সম্পাদন'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Initialize Distances and Priority Queue',
            bn: 'দূরত্ব ও প্রায়োরিটি কিউ প্রস্তুত করুন'
          },
          text: {
            en: 'Set dist[source] = 0 and dist[v] = Infinity for all other vertices. Insert all vertices into a min-priority queue keyed by tentative distance.',
            bn: 'উৎস শীর্ষবিন্দুর dist[source] = ০ এবং অন্য সবার দূরত্ব ইনফিনিটি সেট করুন। সাময়িক দূরত্বের কী দিয়ে সমস্ত শীর্ষবিন্দুকে মিন-প্রায়োরিটি কিউতে প্রবেশ করান।'
          }
        },
        {
          title: {
            en: 'Extract Closest Unvisited Vertex',
            bn: 'নিকটতম অ-পরিদর্শিত শীর্ষবিন্দু বের করুন'
          },
          text: {
            en: 'Pop vertex u with minimum dist[u] from the priority queue. Mark u as visited and finalized. Because all edges are non-negative, dist[u] is guaranteed to be its permanent shortest distance.',
            bn: 'কিউ থেকে সর্বনিম্ন দূরত্বের শীর্ষবিন্দু u বের করে পরিদর্শিত হিসেবে চিহ্নিত করুন। যেহেতু সব এজের ওজন অ-ঋণাত্মক, তাই dist[u] নিশ্চিতভাবেই চূড়ান্ত সর্বনিম্ন দূরত্ব।'
          }
        },
        {
          title: {
            en: 'Relax Outgoing Edges of Vertex u',
            bn: 'শীর্ষবিন্দু u-এর বহির্গামী এজগুলোর রিলাক্সেশন করুন'
          },
          text: {
            en: 'For each adjacent neighbor v of u with weight w: compute alternateDistance = dist[u] + w. If alternateDistance < dist[v], update dist[v] = alternateDistance, record parent[v] = u, and decrease key of v in the priority queue.',
            bn: 'u-এর প্রতিটি প্রতিবেশী v-এর জন্য alternateDistance = dist[u] + w হিসাব করুন। যদি এটি বর্তমান dist[v] এর চেয়ে কম হয়, তবে দূরত্ব আপডেট করুন, প্যারেন্ট রেকর্ড করুন এবং কিউতে v-এর মান কমিয়ে দিন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'runnable-dijkstra-ts',
      text: {
        en: 'Runnable TypeScript: Complete Dijkstra Implementation with Path Reconstruction',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: পাথ রিকনস্ট্রাকশন সহ সম্পূর্ণ ডাইকস্ট্রা বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Running Dijkstra algorithm from source 0 across 5 vertices, computing exact distances [0, 3, 2, 5, 6].',
        bn: 'উৎস ০ থেকে ৫টি শীর্ষবিন্দুতে ডাইকস্ট্রা অ্যালগরিদম চালিয়ে সঠিক দূরত্ব [০, ৩, ২, ৫, ৬] গণনা।'
      },
      code: `interface DirectedEdge {
  to: number;
  weight: number;
}

interface ShortestPathResult {
  distances: number[];
  paths: Record<number, number[]>;
}

function dijkstra(numVertices: number, adjList: Map<number, DirectedEdge[]>, source = 0): ShortestPathResult {
  const dist = new Array(numVertices).fill(Infinity);
  const parent = new Array(numVertices).fill(-1);
  const visited = new Array(numVertices).fill(false);

  dist[source] = 0;

  for (let step = 0; step < numVertices; step++) {
    // 1. Greedily pick unvisited vertex with minimum tentative distance
    let u = -1;
    let minDist = Infinity;

    for (let v = 0; v < numVertices; v++) {
      if (!visited[v] && dist[v] < minDist) {
        minDist = dist[v];
        u = v;
      }
    }

    if (u === -1 || dist[u] === Infinity) break; // Remaining nodes unreachable

    visited[u] = true;

    // 2. Relax all outgoing neighbors of u
    const neighbors = adjList.get(u) || [];
    for (const edge of neighbors) {
      const v = edge.to;
      const w = edge.weight;

      if (!visited[v]) {
        const newDist = dist[u] + w;
        if (newDist < dist[v]) {
          dist[v] = newDist;
          parent[v] = u;
        }
      }
    }
  }

  // Reconstruct full paths from source
  const paths: Record<number, number[]> = {};
  for (let v = 0; v < numVertices; v++) {
    if (dist[v] === Infinity) {
      paths[v] = [];
      continue;
    }
    const path: number[] = [];
    let curr = v;
    while (curr !== -1) {
      path.push(curr);
      curr = parent[curr];
    }
    paths[v] = path.reverse();
  }

  return { distances: dist, paths };
}

// 5 Vertices from diagram
const numNodes = 5;
const graph = new Map<number, DirectedEdge[]>();
for (let i = 0; i < numNodes; i++) graph.set(i, []);

function addEdge(u: number, v: number, w: number) {
  graph.get(u)!.push({ to: v, weight: w });
}

addEdge(0, 1, 4);
addEdge(0, 2, 2);
addEdge(2, 1, 1);
addEdge(1, 3, 2);
addEdge(1, 4, 3);
addEdge(2, 3, 4);
addEdge(2, 4, 5);
addEdge(3, 4, 1);

const result = dijkstra(numNodes, graph, 0);

console.log('Shortest distances from 0:', result.distances); // [0, 3, 2, 5, 6]
for (let i = 0; i < numNodes; i++) {
  console.log(\`To Node \${i}: dist=\${result.distances[i]}, path=[\${result.paths[i].join(' -> ')}]\`);
}
// Outputs:
// To Node 0: dist=0, path=[0]
// To Node 1: dist=3, path=[0 -> 2 -> 1]
// To Node 2: dist=2, path=[0 -> 2]
// To Node 3: dist=5, path=[0 -> 2 -> 1 -> 3]
// To Node 4: dist=6, path=[0 -> 2 -> 1 -> 4]
`
    },
    {
      type: 'callout',
      variant: 'warning',
      text: {
        en: 'Never use Dijkstra algorithm on graphs containing negative edge weights. Negative edges violate the greedy monotonic invariant, requiring the O(V * E) Bellman-Ford algorithm to detect negative weight cycles.',
        bn: 'ঋণাত্মক ওজনের এজ থাকা গ্রাফে কখনোই ডাইকস্ট্রা অ্যালগরিদম ব্যবহার করবেন না। ঋণাত্মক এজ গ্রিডি মোনোটনিক নিয়ম ভঙ্গ করে, যার জন্য O(V * E) বেলম্যান-ফোর্ড অ্যালগরিদম প্রয়োজন।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-djk-ex-1',
      kind: 'mcq',
      topic: 'dijkstra-edge-weight-constraint',
      question: {
        en: 'What fundamental constraint must all edge weights satisfy for Dijkstra algorithm to guarantee correct shortest paths?',
        bn: 'ডাইকস্ট্রা অ্যালগরিদম যাতে সঠিক ফলাফল দেয় তার জন্য সমস্ত এজের ওজনকে কোন মৌলিক শর্ত পূরণ করতে হবে?'
      },
      options: [
        {
          en: 'All edge weights must be strictly non-negative (weight >= 0)',
          bn: 'সমস্ত এজের ওজন অবশ্যই অ-ঋণাত্মক (ওজন >= ০) হতে হবে'
        },
        {
          en: 'All edge weights must be odd integers',
          bn: 'সমস্ত এজের ওজন বিজোড় পূর্ণসংখ্যা হতে হবে'
        },
        {
          en: 'Edge weights must be between 0 and 1',
          bn: 'এজের ওজন ০ এবং ১ এর মাঝে হতে হবে'
        },
        {
          en: 'The graph must be a binary tree',
          bn: 'গ্রাফটিকে একটি বাইনারি ট্রি হতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Negative edges break Dijkstra greedy assumption.',
        bn: 'ঋণাত্মক এজ ডাইকস্ট্রার গ্রিডি অনুমান ভেঙে দেয়।'
      },
      explanation: {
        en: 'Dijkstra assumes that traversing further edges can never decrease cumulative distance. Negative weights violate this assumption and require the Bellman-Ford algorithm.',
        bn: 'ডাইকস্ট্রা ধরে নেয় যে নতুন এজ যুক্ত করলে মোট দূরত্ব কখনো কমতে পারে না। ঋণাত্মক ওজন এই নিয়ম ভেঙে দেয় এবং তখন বেলম্যান-ফোর্ড অ্যালগরিদম দরকার হয়।'
      }
    },
    {
      id: 'grd-djk-ex-2',
      kind: 'mcq',
      topic: 'edge-relaxation-formula',
      question: {
        en: 'In Dijkstra algorithm, what mathematical comparison defines the edge relaxation step for edge (u, v) with weight w?',
        bn: 'ডাইকস্ট্রা অ্যালগরিদমে w ওজনের এজ (u, v)-এর জন্য এজ রিলাক্সেশন ধাপের গাণিতিক তুলনা কোনটি?'
      },
      options: [
        {
          en: 'If dist[u] + w < dist[v], then update dist[v] = dist[u] + w',
          bn: 'যদি dist[u] + w < dist[v] হয়, তবে dist[v] = dist[u] + w আপডেট করুন'
        },
        {
          en: 'If dist[u] - w > dist[v], then set dist[v] = 0',
          bn: 'যদি dist[u] - w > dist[v] হয়, তবে dist[v] = ০ সেট করুন'
        },
        {
          en: 'If dist[v] == Infinity, delete vertex v from graph',
          bn: 'যদি dist[v] == Infinity হয়, তবে গ্রাফ থেকে শীর্ষবিন্দু v মুছে ফেলুন'
        },
        {
          en: 'Multiply dist[u] by weight w',
          bn: 'dist[u]-কে ওজন w দিয়ে গুণ করুন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Relaxation checks if going through u provides a faster path to v.',
        bn: 'রিলাক্সেশন পরীক্ষা করে u হয়ে যাওয়া v-তে পৌঁছানোর দ্রুততর পথ দেয় কিনা।'
      },
      explanation: {
        en: 'Relaxation tests whether the route through vertex u provides a shorter path to neighbor v than the previously recorded distance dist[v].',
        bn: 'রিলাক্সেশন যাচাই করে যে u শীর্ষবিন্দুর মধ্য দিয়ে গেলে প্রতিবেশী v-এর আগের রেকর্ডকৃত দূরত্বের চেয়ে কম দূরত্বে পৌঁছানো যায় কিনা।'
      }
    },
    {
      id: 'grd-djk-ex-3',
      kind: 'mcq',
      topic: 'dijkstra-distance-output-trace',
      question: {
        en: 'In our 5-vertex example graph with source 0, why was the final shortest distance to Node 1 reduced from 4 to 3?',
        bn: 'আমাদের ৫-শীর্ষবিন্দুর উদাহরণে উৎস ০ থেকে নোড ১ এর চূড়ান্ত সর্বনিম্ন দূরত্ব ৪ থেকে কমে ৩ কেন হয়েছিল?'
      },
      options: [
        {
          en: 'Because path 0 -> 2 -> 1 has total cost 2 + 1 = 3, which is strictly shorter than direct edge 0 -> 1 with cost 4',
          bn: 'কারণ ০ -> ২ -> ১ পথের মোট খরচ ২ + ১ = ৩, যা সরাসরি এজ ০ -> ১ এর খরচ ৪ এর চেয়ে কম'
        },
        {
          en: 'Because direct edge 0 -> 1 was deleted by the compiler',
          bn: 'কারণ সরাসরি এজ ০ -> ১ কম্পাইলার মুছে দিয়েছিল'
        },
        {
          en: 'Because distance was rounded down by integer division',
          bn: 'কারণ পূর্ণসংখ্যার ভাগে দূরত্ব নিচের দিকে নামানো হয়েছিল'
        },
        {
          en: 'Because Node 2 was processed after Node 1',
          bn: 'কারণ নোড ২ নোড ১-এর পরে প্রক্রিয়াজাত হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The indirect path through 2 (2 + 1) is shorter than the direct edge (4).',
        bn: '২ হয়ে যাওয়া বিকল্প পথটি (২ + ১) সরাসরি এজের (৪) চেয়ে সংক্ষিপ্ত।'
      },
      explanation: {
        en: 'Dijkstra discovered node 2 at distance 2. Relaxing edge 2 -> 1 (weight 1) updated dist[1] from 4 to 2 + 1 = 3 before node 1 was finalized.',
        bn: 'ডাইকস্ট্রা প্রথমে দূরত্ব ২-এ নোড ২ খুঁজে পায়। এরপর এজ ২ -> ১ (ওজন ১) রিলাক্স করে নোড ১-এর দূরত্ব ৪ থেকে কমিয়ে ২ + ১ = ৩ বানায়।'
      }
    },
    {
      id: 'grd-djk-ex-4',
      kind: 'mcq',
      topic: 'dijkstra-time-complexity',
      question: {
        en: 'What is the time complexity of Dijkstra algorithm using an adjacency list and a binary min-heap for V vertices and E edges?',
        bn: 'V শীর্ষবিন্দু এবং E এজের জন্য অ্যাডজাসেন্সি লিস্ট ও বাইনারি মিন-হিপ ব্যবহার করলে ডাইকস্ট্রা অ্যালগরিদমের টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O((V + E) log V) which simplifies to O(E log V) for connected graphs',
          bn: 'O((V + E) log V) যা সংযুক্ত গ্রাফের ক্ষেত্রে O(E log V)-এ সরলীকৃত হয়'
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
        en: 'Extracting V min nodes takes O(V log V); relaxing E edges takes O(E log V).',
        bn: 'V-টি নোড বের করতে O(V log V) এবং E-টি এজ রিলাক্স করতে O(E log V) লাগে।'
      },
      explanation: {
        en: 'Each vertex is extracted from the min-heap in O(log V) time (V log V total). Each edge is relaxed and updates the heap in O(log V) time (E log V total), producing O(E log V).',
        bn: 'প্রতিটি শীর্ষবিন্দু মিন-হিপ থেকে O(log V) সময়ে বের হয় (মোট V log V)। প্রতিটি এজ O(log V) সময়ে হিপ আপডেট করে (মোট E log V), যা মিলে হয় O(E log V)।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Dijkstra Shortest Path Quiz',
      bn: 'ডাইকস্ট্রা শর্টেস্ট পাথ কুইজ'
    },
    questions: [
      {
        id: 'grd-djk-qz-1',
        kind: 'mcq',
        topic: 'why-negative-weights-fail-dijkstra',
        question: {
          en: 'Why does Dijkstra algorithm fail to find the correct shortest path when a graph contains negative-weight edges?',
          bn: 'গ্রাফে ঋণাত্মক ওজনের এজ থাকলে ডাইকস্ট্রা অ্যালগরিদম কেন সঠিক শর্টেস্ট পাথ খুঁজে পেতে ব্যর্থ হয়?'
        },
        options: [
          {
            en: 'Dijkstra finalizes a vertex distance greedily assuming no future edge can decrease its cost; a negative edge can later create a cheaper path to an already-finalized vertex',
            bn: 'ডাইকস্ট্রা ধরে নেয় ভবিষ্যতে দূরত্ব আর কমবে না; ঋণাত্মক এজ পূর্বে চূড়ান্ত হওয়া শীর্ষবিন্দুর দূরত্বকেও পরবর্তীতে কমিয়ে দিতে পারে'
          },
          {
            en: 'Binary heaps crash with a segmentation fault when storing negative numbers',
            bn: 'ঋণাত্মক সংখ্যা রাখলে বাইনারি হিপ সেগমেন্টেশন ফল্ট দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'Operating system network cards reject negative packet weights',
            bn: 'অপারেটিং সিস্টেমের নেটওয়ার্ক কার্ড ঋণাত্মক প্যাকেট ওজন প্রত্যাখ্যান করে'
          },
          {
            en: 'Because negative numbers cannot be represented in binary notation',
            bn: 'কারণ ঋণাত্মক সংখ্যাকে বাইনারিতে রূপান্তর করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dijkstra never re-evaluates a vertex after it is popped.',
          bn: 'কিউ থেকে বের করার পর ডাইকস্ট্রা আর কখনো সেই শীর্ষবিন্দু পুনরায় যাচাই করে না।'
        },
        explanation: {
          en: 'The greedy choice assumes that once a node is popped, its distance is minimal forever. Negative edges can retroactively create shorter routes, invalidating the greedy invariant.',
          bn: 'গ্রিডি চয়েস ধরে নেয় যে একবার বের করা নোডের দূরত্ব চিরতরে অপ্টিমাল। ঋণাত্মক এজ এই ধারণাকে ভেঙে দিয়ে দূরত্বের মান আরও কমিয়ে দেয় যা ডাইকস্ট্রা ধরতে পারে না।'
        }
      },
      {
        id: 'grd-djk-qz-2',
        kind: 'mcq',
        topic: 'ospf-routing-protocol-dijkstra',
        question: {
          en: 'How does the Open Shortest Path First (OSPF) internet routing protocol utilize Dijkstra algorithm?',
          bn: 'ওপেন শর্টেস্ট পাথ ফার্স্ট (OSPF) ইন্টারনেট রাউটিং প্রোটোকল কীভাবে ডাইকস্ট্রা অ্যালগরিদম ব্যবহার করে?'
        },
        options: [
          {
            en: 'Each autonomous router maintains a synchronized link-state database of network links and runs Dijkstra to compute optimal packet forwarding tables',
            bn: 'প্রতিটি স্বায়ত্তশাসিত রাউটার নেটওয়ার্ক লিঙ্কের একটি সিঙ্ক্রোনাইজড ডেটাবেস রাখে এবং ডাইকস্ট্রা চালিয়ে প্যাকেটের সেরা পথ গণনা করে'
          },
          {
            en: 'It encrypts passwords inside HTTP cookies',
            bn: 'এটি এইচটিটিপি কুকির ভেতরে পাসওয়ার্ড এনক্রিপ্ট করে'
          },
          {
            en: 'It measures web browser CSS rendering speeds',
            bn: 'এটি ওয়েব ব্রাউজারের সিএসএস রেন্ডারিং গতি পরিমাপ করে'
          },
          {
            en: 'It compresses PNG images into WebP format',
            bn: 'এটি পিএনজি ছবিকে ওয়েবপি ফরম্যাটে সংকুচিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'OSPF calculates shortest path trees across internet routers.',
          bn: 'OSPF ইন্টারনেট রাউটারগুলোর মধ্য দিয়ে শর্টেস্ট পাথ ট্রি গণনা করে।'
        },
        explanation: {
          en: 'In OSPF, every router builds a link-state database of the network topology and runs Dijkstra algorithm locally to find the shortest path tree to all network subnets.',
          bn: 'OSPF প্রোটোকলে প্রতিটি রাউটার নেটওয়ার্ক টপোলজির ওপর ভিত্তি করে স্থানীয়ভাবে ডাইকস্ট্রা চালায় এবং সব সাবনেটে পৌঁছানোর সেরা পথ তৈরি করে।'
        }
      },
      {
        id: 'grd-djk-qz-3',
        kind: 'mcq',
        topic: 'a-star-heuristic-connection',
        question: {
          en: 'How does the A* (A-star) search algorithm extend Dijkstra greedy algorithm for GPS navigation?',
          bn: 'জিপিএস নেভিগেশনের জন্য A* (A-স্টার) সার্চ অ্যালগরিদম কীভাবে ডাইকস্ট্রা গ্রিডি অ্যালগরিদমকে প্রসারিত করে?'
        },
        options: [
          {
            en: 'A* adds an admissible heuristic h(n) estimating distance to the goal, evaluating f(n) = g(n) + h(n) to direct the search toward the destination instead of expanding uniformly',
            bn: 'A* লক্ষ্যের আনুমানিক দূরত্বের একটি হিউরিস্টিক h(n) যোগ করে f(n) = g(n) + h(n) তৈরি করে লক্ষ্যমুখী অনুসন্ধান চালায়'
          },
          {
            en: 'A* deletes all turns from the driving directions',
            bn: 'A* ড্রাইভিং নির্দেশিকা থেকে সমস্ত বাঁক মুছে ফেলে'
          },
          {
            en: 'A* only works when internet connection is turned off',
            bn: 'A* কেবল ইন্টারনেট সংযোগ বন্ধ থাকলেই কাজ করে'
          },
          {
            en: 'A* multiplies path costs by negative 1',
            bn: 'A* পথের খরচকে ঋণাত্মক ১ দিয়ে গুণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A* guides the search towards the goal using Euclidean or Manhattan distance.',
          bn: 'A* লক্ষ্যবিন্দুর দিকে ইউক্লিডীয় বা ম্যানহাটন দূরত্বের হিউরিস্টিক দিয়ে পথ দেখায়।'
        },
        explanation: {
          en: 'Dijkstra expands outward in concentric rings. A* adds a goal-directed heuristic h(n) (like straight-line distance), focusing the priority queue toward the target while preserving optimality.',
          bn: 'ডাইকস্ট্রা চারদিকে সমান্তরালভাবে ছড়ায়। A* এর সাথে লক্ষ্যের দূরত্বের হিউরিস্টিক যোগ করে অনুসন্ধানকে সরাসরি লক্ষ্যের দিকে পরিচালিত করে সময় সাশ্রয় করে।'
        }
      },
      {
        id: 'grd-djk-qz-4',
        kind: 'mcq',
        topic: 'fibonacci-heap-theoretical-bound',
        question: {
          en: 'What is the theoretical time complexity of Dijkstra algorithm when implemented with a Fibonacci Heap?',
          bn: 'ফিবোনাচ্চি হিপ ব্যবহার করে বাস্তবায়ন করলে ডাইকস্ট্রা অ্যালগরিদমের তাত্ত্বিক টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(E + V log V) because decrease-key operations run in O(1) amortized time',
            bn: 'O(E + V log V) কারণ ডিক্রিজ-কী অপারেশন O(1) গড়ে ধ্রুবক সময়ে সম্পন্ন হয়'
          },
          {
            en: 'O(V * E) pseudo-polynomial time',
            bn: 'O(V * E) সময়'
          },
          {
            en: 'O(1) instant lookup time',
            bn: 'O(১) তাত্ক্ষণিক অনুসন্ধানের সময়'
          },
          {
            en: 'O(N!) factorial time',
            bn: 'O(N!) ফ্যাক্টোরিয়াল সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fibonacci heaps achieve O(1) amortized decrease-key operations.',
          bn: 'ফিবোনাচ্চি হিপ O(1) গড়ে ডিক্রিজ-কী অপারেশন করতে পারে।'
        },
        explanation: {
          en: 'With a Fibonacci heap, the V extract-min operations take O(V log V), while the E decrease-key relaxation steps run in O(1) amortized each, achieving optimal O(E + V log V).',
          bn: 'ফিবোনাচ্চি হিপে V-টি এক্সট্র্যাক্ট-মিন O(V log V) সময় নেয়, আর E-টি ডিক্রিজ-কী প্রতিটি গড়ে O(1) সময় নেওয়ায় মোট কমপ্লেক্সিটি দাঁড়ায় O(E + V log V)।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-greedy-release',
    title: {
      en: 'When Greedy Fails: DP, Heuristics & Matroids',
      bn: 'যেখানে গ্রিডি ব্যর্থ হয়: ডিপি, হিউরিস্টিকস ও ম্যাট্রয়েড'
    }
  }
};
