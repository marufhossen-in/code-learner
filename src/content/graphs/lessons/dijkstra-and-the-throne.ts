import type { Lesson } from '../../../lib/types';

export const dijkstraThroneLesson: Lesson = {
  slug: 'dijkstra-and-the-throne',
  tech: 'graphs',
  title: {
    en: 'Dijkstra’s Algorithm — Weighted Shortest Paths and Min-Heaps',
    bn: 'ডাইকস্ট্রার অ্যালগরিদম: ওজনযুক্ত সর্বনিম্ন পথ এবং মিন-হিপ'
  },
  summary: {
    en: 'Breadth-First Search finds minimum-hop routes, but real systems evaluate routes by physical costs: network latency in milliseconds, highway tolls in dollars, and flight routes in miles. When edge weights differ, BFS fails because fewer hops can incur significantly higher cumulative costs. Edsger Dijkstra solved this by swapping the FIFO queue with a Min-Heap Priority Queue. We explore greedy edge relaxation, explain why non-negative edge weights are mathematically mandatory, and implement Dijkstra’s algorithm in optimal O((V + E) log V) time.',
    bn: 'ব্রেডথ-ফার্স্ট সার্চ সর্বনিম্ন লাফের পথ খুঁজে দেয়, তবে বাস্তব জগৎ পরিমাপ করা হয় বাস্তবিক খরচের ওপর ভিত্তি করে: মিলিসেকেন্ডে নেটওয়ার্ক লেটেন্সি, টাকায় রাস্তার টোল বা মাইলে বিমানের দূরত্ব। ধারের ওজন অসমান হলে BFS ব্যর্থ হয় কারণ কম লাফের পথ বেশি খরচ ডেকে আনতে পারে। এডসগার ডাইকস্ট্রা সাধারণ কিউ এর বদলে একটি মিন-হিপ প্রায়োরিটি কিউ ব্যবহার করে এই সমাধান দেন। আমরা এজ রিল্যাক্সেশন বিশ্লেষণ করি, দেখাই কেন ধনাত্মক ওজন থাকা আবশ্যক এবং O((V + E) log V) সময়ে ডাইকস্ট্রার অ্যালগরিদম বাস্তবায়ন করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'graphs-capstone',
    tech: 'graphs',
    title: {
      en: 'Graphs Capstone — Synthesis of Representations, Traversals, and Networks',
      bn: 'গ্রাফ সমাপনী: উপস্থাপনা, ট্রাভার্সাল এবং নেটওয়ার্কের সমন্বয়'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'weighted-shortest-path-crisis',
      text: {
        en: 'Beyond Hop Counts: The Reality of Weighted Networks',
        bn: 'লাফ সংখ্যার বাইরে: ওজনযুক্ত নেটওয়ার্কের বাস্তবতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you open a navigation app like Google Maps, the shortest route is rarely the one with the fewest highway turns. A single direct highway route might be congested with traffic taking 50 minutes, whereas a detour across 2 quiet roads might take only 15 minutes. In computational graphs, each edge carries a numerical weight representing latency, monetary cost, or physical distance.',
        bn: 'যখন আপনি গুগল ম্যাপসের মতো কোনো নেভিগেশন অ্যাপ খোলেন, তখন সবচেয়ে কম মোড়ের পথটিই কিন্তু দ্রুততম পথ হয় না। একটি সরাসরি রাস্তায় জ্যামের কারণে ৫০ মিনিট সময় লাগতে পারে, যেখানে ২টি বিকল্প রাস্তা দিয়ে ঘুরে মাত্র ১৫ মিনিটে পৌঁছানো সম্ভব। গ্রাফের প্রতিটি ধারের সাথে যুক্ত এমন সংখ্যাকে বলা হয় ধারের ওজন, যা সময়, খরচ বা দূরত্ব নির্দেশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard Breadth-First Search cannot handle unequal weights because it assumes every hop has identical cost 1. To solve this, Dutch computer scientist Edsger Dijkstra replaced the FIFO queue with a Min-Heap Priority Queue. By always expanding the frontier node with the lowest cumulative distance, Dijkstra guarantees finding the absolute cheapest route in non-negative graphs.',
        bn: 'সাধারণ ব্রেডথ-ফার্স্ট সার্চ ভিন্ন ভিন্ন ওজন পরিচালনা করতে পারে না কারণ এটি প্রতিটি লাফকে সমান ১ খরচ মনে করে। এই সমস্যার সমাধানে ডাচ বিজ্ঞানী এডসগার ডাইকস্ট্রা সাধারণ কিউ-র বদলে একটি মিন-হিপ প্রায়োরিটি কিউ ব্যবহার করেন। সর্বদা সর্বনিম্ন দূরত্বের নোডকে আগে প্রসারিত করার মাধ্যমে ডাইকস্ট্রা অ-ঋণাত্মক গ্রাফে নিশ্চিত সর্বনিম্ন খরচের পথ খুঁজে বের করেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'dijkstras-algorithm',
          def: {
            en: 'A greedy algorithm that computes single-source shortest paths in weighted graphs with non-negative edge weights using a priority queue.',
            bn: 'একটি গ্রিডি অ্যালগরিদম যা একটি প্রায়োরিটি কিউ ব্যবহার করে অ-ঋণাত্মক ওজনের গ্রাফে একক উৎস থেকে সর্বনিম্ন পথ বের করে।'
          }
        },
        {
          term: 'edge-relaxation',
          def: {
            en: 'The process of testing whether reaching neighbor v through vertex u lowers v\'s currently known best distance (dist[u] + weight < dist[v]).',
            bn: 'শীর্ষবিন্দু u হয়ে v তে গেলে পূর্বের দূরত্বের চেয়ে কম খরচ হয় কি না তা পরীক্ষা করে আপডেট করার প্রক্রিয়া।'
          }
        },
        {
          term: 'min-priority-queue',
          def: {
            en: 'A heap data structure that extracts the vertex with the smallest tentative distance in O(log V) time.',
            bn: 'একটি হিপ কাঠামো যা সর্বনিম্ন দূরত্বের নোডটিকে O(log V) সময়ে বের করে দেয়।'
          }
        },
        {
          term: 'non-negative-weight-invariant',
          def: {
            en: 'The fundamental mathematical constraint that all edge weights must be >= 0 for Dijkstra\'s greedy finality proof to hold.',
            bn: 'ডাইকস্ট্রার গ্রিডি প্রমাণের মূল গাণিতিক শর্ত যা দাবি করে যে প্রতিটি ধারের ওজন সর্বদা >= ০ হতে হবে।'
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
      id: 'shortest-path-algorithms-table',
      text: {
        en: 'Architectural Comparison: Shortest Path Algorithm Families',
        bn: 'কাঠামোগত তুলনা: সর্বনিম্ন পথ অ্যালগরিদমের পরিবার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Different routing algorithms balance weight constraints against execution performance. BFS is optimal for unweighted hops. Dijkstra dominates production routing for non-negative weights. Bellman-Ford supports negative weights at higher computational cost.',
        bn: 'বিভিন্ন পথ খোঁজার অ্যালগরিদম ওজনের বাধ্যবাধকতা ও গতির মাঝে ভারসাম্য বজায় রাখে। অভারহীন গ্রাফে BFS সবচেয়ে কার্যকর। ধনাত্মক ওজনের ক্ষেত্রে ডাইকস্ট্রা বিশ্বব্যাপী সমাদৃত। আর ঋণাত্মক ওজনের ক্ষেত্রে বাড়তি সময় নিয়ে বেলম্যান-ফোর্ড কাজ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Edge Weight Support', bn: 'ধারের ওজনের শর্ত' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'Production Application', bn: 'বাস্তব ক্ষেত্রে ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Breadth-First Search (BFS)', bn: 'ব্রেডথ-ফার্স্ট সার্চ (BFS)' },
          { en: 'Unweighted only (weight = 1)', bn: 'কেবল অভারহীন (ওজন = ১)' },
          { en: 'O(V + E) linear time', bn: 'O(V + E) রৈখিক সময়' },
          { en: 'Social degrees of separation', bn: 'সামাজিক নেটওয়ার্কে বন্ধুত্বের দূরত্ব' }
        ],
        [
          { en: 'Dijkstra’s Algorithm', bn: 'ডাইকস্ট্রার অ্যালগরিদম' },
          { en: 'Non-negative weights (w >= 0)', bn: 'অ-ঋণাত্মক ওজন (w >= ০)' },
          { en: 'O((V + E) log V) with min-heap', bn: 'O((V + E) log V) মিন-হিপ সহ' },
          { en: 'GPS route planning, OSPF routers', bn: 'জিপিএস ম্যাপ, ইন্টারনেট রাউটিং' }
        ],
        [
          { en: 'Bellman-Ford Algorithm', bn: 'বেলম্যান-ফোর্ড অ্যালগরিদম' },
          { en: 'Arbitrary weights (detects negative cycles)', bn: 'যেকোনো ওজন (ঋণাত্মক চক্র ধরে)' },
          { en: 'O(V * E) polynomial time', bn: 'O(V * E) বহুপদী সময়' },
          { en: 'Currency arbitrage detection', bn: 'মুদ্রা বিনিময়ে সালিশি লাভ খোঁজা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-dijkstra-code',
      text: {
        en: 'Executable Dijkstra Shortest Path Implementation',
        bn: 'ডাইকস্ট্রার অ্যালগরিদম ও মিন-হিপের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs a weighted graph and computes shortest paths from source A using a Min-Heap. Notice that while a direct edge A -> B exists with weight 10, Dijkstra selects the cheaper indirect route A -> C -> B with cumulative weight 2 + 3 = 5.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি ওজনযুক্ত গ্রাফ তৈরি করে এবং মিন-হিপ ব্যবহার করে উৎস A থেকে সর্বনিম্ন পথ হিসাব করে। লক্ষ্য করুন যদিও A থেকে B এর সরাসরি ধারের ওজন ১০, তবুও ডাইকস্ট্রা ২ + ৩ = ৫ খরচের সস্তা পথ A -> C -> B কেই বেছে নেয়।'
      }
    },
    {
      type: 'code',
      code: `class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this._bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this._bubbleDown(0);
    }
    return top;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  _bubbleUp(idx) {
    while (idx > 0) {
      const p = Math.floor((idx - 1) / 2);
      if (this.heap[p].dist <= this.heap[idx].dist) break;
      [this.heap[p], this.heap[idx]] = [this.heap[idx], this.heap[p]];
      idx = p;
    }
  }
  _bubbleDown(idx) {
    const len = this.heap.length;
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      if (left < len && this.heap[left].dist < this.heap[smallest].dist) smallest = left;
      if (right < len && this.heap[right].dist < this.heap[smallest].dist) smallest = right;
      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

class DijkstraGraph {
  constructor() {
    this.adj = new Map();
  }
  addEdge(u, v, weight) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    this.adj.get(u).push({ to: v, weight });
  }
  shortestPaths(source) {
    const dist = new Map();
    const parent = new Map();
    const pq = new MinPriorityQueue();

    dist.set(source, 0);
    pq.push({ node: source, dist: 0 });

    while (!pq.isEmpty()) {
      const { node: u, dist: d } = pq.pop();

      if (d > dist.get(u)) continue;

      for (const edge of this.adj.get(u) || []) {
        const v = edge.to;
        const newDist = d + edge.weight;

        if (!dist.has(v) || newDist < dist.get(v)) {
          dist.set(v, newDist);
          parent.set(v, u);
          pq.push({ node: v, dist: newDist });
        }
      }
    }
    return { dist, parent };
  }
}

const g = new DijkstraGraph();
g.addEdge('A', 'B', 10);
g.addEdge('A', 'C', 2);
g.addEdge('C', 'B', 3);
g.addEdge('B', 'D', 4);

const { dist } = g.shortestPaths('A');
console.log('Shortest cost to C:', dist.get('C'));
// Output: Shortest cost to C: 2
console.log('Shortest cost to B (2 + 3 instead of 10):', dist.get('B'));
// Output: Shortest cost to B (2 + 3 instead of 10): 5
console.log('Shortest cost to D (2 + 3 + 4):', dist.get('D'));
// Output: Shortest cost to D (2 + 3 + 4): 9`
    },
    {
      type: 'heading',
      id: 'negative-weights-failure',
      text: {
        en: 'The Downfall of Greed: Why Negative Weights Break Dijkstra',
        bn: 'গ্রিডি কৌশলের পতন: ঋণাত্মক ওজন কেন ডাইকস্ট্রাকে ভেঙে ফেলে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dijkstra relies on a fundamental mathematical theorem: once a vertex is popped from the Min-Heap, its recorded distance is final. If an edge has a negative weight of -15, traversing that edge later could retroactively make an already finalized node cheaper! Because Dijkstra never re-visits settled nodes, it fails silently on negative edges, requiring the Bellman-Ford algorithm instead.',
        bn: 'ডাইকস্ট্রা একটি মৌলিক গাণিতিক নীতির ওপর নির্ভর করে: একবার কোনো নোডকে মিন-হিপ থেকে পপ করা হলে তার দূরত্ব চিরতরে চূড়ান্ত হয়ে যায়। কিন্তু গ্রাফে যদি -১৫ এর মতো ঋণাত্মক ওজনের ধার থাকে, তবে পরে সেই পথ ঘুরে এসে ইতোমধ্যে চূড়ান্ত হওয়া নোডের দূরত্বও কমে যেতে পারে! ডাইকস্ট্রা যেহেতু পুরনো নোড পুনর্বিবেচনা করে না, তাই ঋণাত্মক গ্রাফে এটি ভুল উত্তর দেয় যার জন্য বেলম্যান-ফোর্ড ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Cost-weighted routing: Dijkstra generalizes BFS to graphs where edges represent physical costs like time, latency, or distance.',
          bn: 'ওজনযুক্ত রাউটিং: ধারের ওজন যেখানে সময়, লেটেন্সি বা দূরত্বের প্রতিনিধিত্ব করে সেখানে ডাইকস্ট্রা BFS এর সার্বজনীন রূপ প্রদান করে।'
        },
        {
          en: 'Greedy finality property: Extracting the minimum-distance vertex guarantees its cost is final, provided all weights are non-negative.',
          bn: 'গ্রিডি নিশ্চয়তা নীতি: সমস্ত ধারের ওজন অ-ঋণাত্মক হলে হিপ থেকে সর্বনিম্ন দূরত্বের নোড বের করার পর তার খরচ চূড়ান্ত হয়।'
        },
        {
          en: 'Edge relaxation mechanism: Updates tentative neighbor distances whenever a cheaper path is discovered through the current vertex.',
          bn: 'এজ রিল্যাক্সেশন প্রক্রিয়া: বর্তমান নোড দিয়ে কোনো প্রতিবেশীর কাছে কম খরচে যাওয়ার পথ পাওয়া গেলেই তার দূরত্বের মান আপডেট হয়।'
        },
        {
          en: 'Negative weight vulnerability: Negative edges violate greedy finality, causing Dijkstra to produce incorrect answers.',
          bn: 'ঋণাত্মক ওজনের সীমাবদ্ধতা: ঋণাত্মক ধার গ্রিডি নীতির শর্ত ভঙ্গ করে, ফলে ডাইকস্ট্রা ভুল উত্তর দেয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dt-ex1',
      kind: 'mcq',
      topic: 'dijkstra-queue-structure',
      question: {
        en: 'Why does Dijkstra’s algorithm use a Min-Heap Priority Queue rather than a standard FIFO Queue?',
        bn: 'ডাইকস্ট্রার অ্যালগরিদমে সাধারণ FIFO কিউ এর বদলে কেন একটি মিন-হিপ প্রায়োরিটি কিউ ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'To always extract the vertex with the lowest cumulative tentative distance, guaranteeing greedy optimality under non-negative weights',
          bn: 'সর্বদা সর্বনিম্ন ক্রমপুঞ্জিত দূরত্বের নোডটিকে আগে বের করার জন্য, যা অ-ঋণাত্মক ওজনের অধীনে গ্রিডি নির্ভুলতা নিশ্চিত করে'
        },
        {
          en: 'Because heaps require 0 bytes of RAM memory',
          bn: 'কারণ হিপের জন্য ০ বাইট র‍্যাম মেমরি প্রয়োজন হয়'
        },
        {
          en: 'To sort graph vertices in reverse alphabetical order',
          bn: 'গ্রাফের নোডগুলোকে উল্টো বর্ণানুক্রমিকভাবে সাজাতে'
        },
        {
          en: 'Because JavaScript does not support FIFO queues',
          bn: 'কারণ জাভাস্ক্রিপ্টে FIFO কিউ সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'A FIFO queue serves by arrival order; a min-heap serves by cheapest price order.',
        bn: 'FIFO কিউ আগমনের ক্রমানুসারে পরিবেশন করে; মিন-হিপ সর্বনিম্ন মূল্যের ক্রমানুসারে পরিবেশন করে।'
      },
      explanation: {
        en: 'Serving the cheapest frontier node guarantees that no shorter path to that node can be found through longer pending routes.',
        bn: 'সর্বনিম্ন খরচের নোডকে আগে প্রসেস করলে দীর্ঘতর অন্যান্য পথ দিয়ে তার কাছে এর চেয়ে কম খরচে পৌঁছানো অসম্ভব হয়ে যায়।'
      }
    },
    {
      id: 'dt-ex2',
      kind: 'mcq',
      topic: 'edge-relaxation-formula',
      question: {
        en: 'During edge relaxation from vertex u to neighbor v with edge weight w, under what condition is v’s distance updated?',
        bn: 'u থেকে প্রতিবেশী v এর দিকে w ওজনের ধারের রিল্যাক্সেশন করার সময় কোন শর্ত পূরণ হলে v এর দূরত্ব আপডেট করা হয়?'
      },
      options: [
        {
          en: 'if (dist[u] + w < dist[v]), update dist[v] = dist[u] + w and set parent[v] = u',
          bn: 'যদি (dist[u] + w < dist[v]) হয়, তবে dist[v] = dist[u] + w করুন এবং parent[v] = u সেট করুন'
        },
        {
          en: 'if (dist[u] == dist[v])',
          bn: 'যদি (dist[u] == dist[v]) হয়'
        },
        {
          en: 'Only if w is an odd number',
          bn: 'কেবল যদি w একটি বিজোড় সংখ্যা হয়'
        },
        {
          en: 'Whenever dist[u] > 100',
          bn: 'যখনই dist[u] > ১০০ হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Relaxation checks if the new path through u is strictly shorter than the previously recorded distance to v.',
        bn: 'রিল্যাক্সেশন পরীক্ষা করে u হয়ে যাওয়া নতুন পথটি v এর পূর্বে রেকর্ড করা দূরত্বের চেয়ে সত্যি কম কি না।'
      },
      explanation: {
        en: 'Relaxing an edge lowers the upper bound on the shortest path to v whenever a more efficient route through u is discovered.',
        bn: 'u এর মাধ্যমে কম খরচের পথ আবিষ্কৃত হলেই রিল্যাক্সেশন v এর দূরত্বের সর্বোচ্চ সীমাকে কমিয়ে আনে।'
      }
    },
    {
      id: 'dt-ex3',
      kind: 'mcq',
      topic: 'negative-weights-dijkstra-failure',
      question: {
        en: 'Why is Dijkstra’s algorithm unable to guarantee correct shortest paths on graphs containing negative edge weights?',
        bn: 'ঋণাত্মক ওজনের ধার থাকা গ্রাফে ডাইকস্ট্রার অ্যালগরিদম কেন সঠিক সর্বনিম্ন পথের নিশ্চয়তা দিতে পুরোপুরি অক্ষম?'
      },
      options: [
        {
          en: 'Because a negative edge encountered later could lower the distance to a vertex that was already marked as finalized (settled) and never re-evaluated',
          bn: 'কারণ পরবর্তীতে পাওয়া একটি ঋণাত্মক ধার ইতোমধ্যে চূড়ান্ত (সেটলড) ঘোষিত নোডের দূরত্বও কমিয়ে দিতে পারে যা ডাইকস্ট্রা আর পুনরায় দেখে না'
        },
        {
          en: 'Because computers cannot perform subtraction',
          bn: 'কারণ কম্পিউটার বিয়োগ করতে পারে না'
        },
        {
          en: 'Because negative numbers delete the graph from memory',
          bn: 'কারণ ঋণাত্মক সংখ্যা মেমরি থেকে গ্রাফ মুছে ফেলে'
        },
        {
          en: 'Because heaps invert their order automatically on negative numbers',
          bn: 'কারণ ঋণাত্মক সংখ্যায় হিপ স্বয়ংক্রিয়ভাবে উল্টে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Once Dijkstra pops a node from the min-heap, does it ever update that node again?',
        bn: 'মিন-হিপ থেকে একবার কোনো নোড পপ হয়ে গেলে ডাইকস্ট্রা কি সেই নোডকে আর কখনো আপডেট করে?'
      },
      explanation: {
        en: 'Dijkstra assumes paths only grow longer as more edges are added. Negative edges violate this monotonicity, breaking greedy correctness.',
        bn: 'ডাইকস্ট্রা ধরে নেয় ধার বাড়ার সাথে সাথে পথের দৈর্ঘ্য কেবল বাড়তেই পারে। ঋণাত্মক ধার এই নীতি লঙ্ঘন করে গ্রিডি নির্ভুলতা নষ্ট করে।'
      }
    }
  ],
  quiz: {
    id: 'dijkstra-and-the-throne-quiz',
    title: {
      en: 'Dijkstra’s Algorithm and Priority Queues Quiz',
      bn: 'ডাইকস্ট্রার অ্যালগরিদম এবং প্রায়োরিটি কিউ কুইজ'
    },
    questions: [
      {
        id: 'dt-q1',
        kind: 'mcq',
        topic: 'dijkstra-heap-time-complexity',
        question: {
          en: 'What is the time complexity of Dijkstra’s algorithm implemented with a binary min-heap on graph G = (V, E)?',
          bn: 'G = (V, E) গ্রাফে বাইনারি মিন-হিপের সাহায্যে বাস্তবায়িত ডাইকস্ট্রার অ্যালগরিদমের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O((V + E) log V) time, where each vertex extraction and edge relaxation takes O(log V)',
            bn: 'O((V + E) log V) সময়, যেখানে প্রতিটি নোড বের করা এবং ধার রিল্যাক্সেশন করতে O(log V) লাগে'
          },
          {
            en: 'O(V^3) time',
            bn: 'O(V^3) সময়'
          },
          {
            en: 'O(1) time',
            bn: 'O(1) সময়'
          },
          {
            en: 'O(V * E^2) time',
            bn: 'O(V * E^2) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'V extract-min operations take O(V log V); at most E decrease-key/insert operations take O(E log V).',
          bn: 'V টি এক্সট্র্যাক্ট-মিন করতে O(V log V) লাগে; সর্বোচ্চ E টি ইনসার্ট করতে O(E log V) লাগে।'
        },
        explanation: {
          en: 'With a binary heap, extracting V vertices takes O(V log V) and relaxing E edges takes O(E log V), summing to O((V + E) log V).',
          bn: 'বাইনারি হিপে V নোড তুলতে O(V log V) এবং E ধার রিল্যাক্স করতে O(E log V) লাগে, যা যোগ করলে O((V + E) log V) হয়।'
        }
      },
      {
        id: 'dt-q2',
        kind: 'mcq',
        topic: 'lazy-decrease-key-heap-handling',
        question: {
          en: 'What is the "lazy decrease-key" technique commonly used in modern language implementations of Dijkstra’s algorithm?',
          bn: 'ডাইকস্ট্রার অ্যালগরিদমের আধুনিক কোডে বহুল ব্যবহৃত "লেজি ডিক্রিজ-কি" (lazy decrease-key) কৌশলটি কী?'
        },
        options: [
          {
            en: 'Instead of updating existing items inside the heap in-place, push a new (distance, vertex) pair and simply ignore stale entries when popped',
            bn: 'হিপের ভেতরে থাকা মান সরাসরি পরিবর্তন না করে নতুন (দূরত্ব, নোড) জোড়া পুশ করা হয় এবং পপ করার সময় পুরনো বাসি এন্ট্রিগুলোকে বাতিল করা হয়'
          },
          {
            en: 'Deleting all edges from the graph',
            bn: 'গ্রাফ থেকে সমস্ত ধার মুছে ফেলা'
          },
          {
            en: 'Halving all edge weights before starting',
            bn: 'শুরুর আগেই সমস্ত ধারের ওজনকে অর্ধেক করে নেওয়া'
          },
          {
            en: 'Running Dijkstra backwards from the destination',
            bn: 'গন্তব্য থেকে উল্টো দিকে ডাইকস্ট্রা চালানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a node is pushed with distance 10 and later with distance 5, what do you do when the entry with 10 is popped?',
          bn: 'একটি নোড যদি প্রথমে ১০ এবং পরে ৫ দূরত্ব নিয়ে পুশ হয়, তবে ১০ দূরত্বের এন্ট্রিটি পপ হলে আপনি কী করবেন?'
        },
        explanation: {
          en: 'Standard priority queue libraries lack efficient in-place updates. Pushing new pairs and discarding stale ones achieves the same correctness cleanly.',
          bn: 'প্রমিত হিপ লাইব্রেরিতে সরাসরি ভেতরের মান বদলানোর দ্রুত উপায় থাকে না। নতুন জোড়া পুশ করে পুরনোটি বাতিল করায় কাজ সহজ ও নির্ভুল হয়।'
        }
      },
      {
        id: 'dt-q3',
        kind: 'mcq',
        topic: 'all-equal-weights-equivalence',
        question: {
          en: 'If every edge in a graph has an identical positive weight of 5, what is the relationship between Dijkstra’s algorithm and BFS?',
          bn: 'একটি গ্রাফের প্রতিটি ধারের ওজন যদি সমান ৫ হয়, তবে ডাইকস্ট্রার অ্যালগরিদম এবং BFS এর মধ্যকার সম্পর্ক কী?'
        },
        options: [
          {
            en: 'Dijkstra and BFS explore vertices in the exact same order, but BFS does it in O(V + E) time without the O(log V) heap overhead',
            bn: 'ডাইকস্ট্রা এবং BFS ঠিক একই ক্রমানুসারে নোডগুলো ঘুরে দেখে, তবে BFS হিপের O(log V) বাড়তি খরচ ছাড়াই O(V + E) সময়ে সম্পন্ন হয়'
          },
          {
            en: 'BFS fails completely and crashes',
            bn: 'BFS পুরোপুরি ব্যর্থ হয় এবং ক্র্যাশ করে'
          },
          {
            en: 'Dijkstra produces incorrect distances',
            bn: 'ডাইকস্ট্রা ভুল দূরত্বের ফলাফল দেয়'
          },
          {
            en: 'The graph becomes an undirected cycle',
            bn: 'গ্রাফটি একটি অমুখী চক্রে পরিণত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'When all edge costs are identical, does hop order match cumulative cost order?',
          bn: 'সমস্ত ধারের খরচ এক হলে লাফের ক্রম আর মোট খরচের ক্রম কি একই থাকে?'
        },
        explanation: {
          en: 'Uniform edge weights make hop count directly proportional to distance, making BFS the faster O(V + E) choice over Dijkstra.',
          bn: 'ধারের ওজন সমান হলে লাফের সংখ্যা দূরত্বের সমানুপাতিক হয়, যার ফলে ডাইকস্ট্রার চেয়ে O(V + E) গতির BFS অনেক দ্রুত হয়।'
        }
      },
      {
        id: 'dt-q4',
        kind: 'mcq',
        topic: 'ospf-routing-protocol-foundation',
        question: {
          en: 'Which fundamental internet routing protocol relies directly on Dijkstra’s algorithm to calculate optimal packet paths across network routers?',
          bn: 'কোন মৌলিক ইন্টারনেট রাউটিং প্রোটোকল রাউটারগুলোর মাঝে ডেটা প্যাকেটের সর্বোত্তম পথ নির্ধারণে সরাসরি ডাইকস্ট্রার অ্যালগরিদম ব্যবহার করে?'
        },
        options: [
          {
            en: 'OSPF (Open Shortest Path First) and IS-IS link-state routing protocols',
            bn: 'OSPF (Open Shortest Path First) এবং IS-IS লিংক-স্টেট রাউটিং প্রোটোকল'
          },
          {
            en: 'HTTP/1.1 web browser cookies',
            bn: 'এইচটিটিপি কুকিজ'
          },
          {
            en: 'FTP file download commands',
            bn: 'এফটিপি ফাইল ডাউনলোড কমান্ড'
          },
          {
            en: 'Bluetooth audio streaming',
            bn: 'ব্লুটুথ অডিও স্ট্রিমিং'
          }
        ],
        answer: 0,
        hint: {
          en: 'The name of the protocol contains "Shortest Path First".',
          bn: 'এই প্রোটোকলের নামের ভেতরেই "Shortest Path First" কথাটি রয়েছে।'
        },
        explanation: {
          en: 'OSPF routers maintain a topological link-state database and run Dijkstra’s algorithm to determine the lowest-cost paths for IP packets.',
          bn: 'OSPF রাউটারগুলো নেটওয়ার্কের একটি লিংক-স্টেট ডেটাবেস রাখে এবং আইপি প্যাকেটের সর্বনিম্ন খরচের পথ নির্ধারণে ডাইকস্ট্রা চালায়।'
        }
      }
    ]
  }
};
