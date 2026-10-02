import type { Lesson } from '../../../lib/types';

export const flowNarrowCutLesson: Lesson = {
  slug: 'flow-and-the-narrow-cut',
  tech: 'graph-algorithms',
  title: {
    en: 'Network Flow and Max-Flow Min-Cut Theorem',
    bn: 'নেটওয়ার্ক ফ্লো এবং ম্যাক্স-ফ্লো মিন-কাট উপপাদ্য'
  },
  summary: {
    en: 'While previous graph algorithms priced single paths, network flow prices capacity and throughput across entire networks. A flow network models pipelines, communication bandwidth, and transportation channels from a source to a sink subject to edge capacities and vertex flow conservation. The Ford-Fulkerson method augments flow along residual paths, while Edmonds-Karp leverages breadth-first search to achieve guaranteed O(V * E^2) polynomial runtime. The celebrated Max-Flow Min-Cut Theorem proves that the maximum volume of flow passing from source to sink is mathematically identical to the capacity of the narrowest bottleneck cut partitioning the network.',
    bn: 'আগের গ্রাফ অ্যালগরিদমগুলো একক পথের মূল্য বের করত, কিন্তু নেটওয়ার্ক ফ্লো পুরো নেটওয়ার্কের ধারণক্ষমতা ও থ্রুপুট হিসাব করে। ফ্লো নেটওয়ার্ক পাইপলাইন, ব্যান্ডউইথ এবং পরিবহন চ্যানেলের উৎস থেকে সিংক পর্যন্ত ধারের ধারণক্ষমতা এবং নোডের ফ্লো সংরক্ষণের নিয়ম মেনে মডেল তৈরি করে। ফোর্ড-ফুলকারসন পদ্ধতি অবশিষ্ট পথে ফ্লো বৃদ্ধি করে, এবং এডমন্ডস-কার্প BFS ব্যবহারের মাধ্যমে নিশ্চিত O(V * E^২) পলিনোমিয়াল সময় নিশ্চিত করে। ম্যাক্স-ফ্লো মিন-কাট উপপাদ্য প্রমাণ করে যে উৎস থেকে সিংকে প্রবাহিত সর্বোচ্চ ফ্লো নেটওয়ার্কের সবচেয়ে সরু বোতলনেক কাটের ধারণক্ষমতার সমান।'
  },
  minutes: 29,
  nextLesson: {
    slug: 'graph-algorithms-capstone',
    tech: 'graph-algorithms',
    title: {
      en: 'Graph Algorithms Capstone — The Production Routing Engine',
      bn: 'গ্রাফ অ্যালগরিদমস ক্যাপস্টোন: প্রোডাকশন রাউটিং ইঞ্জিন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'flow-networks-and-conservation',
      text: {
        en: 'The Physics of Flow Networks and Conservation',
        bn: 'ফ্লো নেটওয়ার্ক এবং সংরক্ষণের পদার্থবিজ্ঞান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you manage high-traffic cloud networks, municipal water distribution, or logistical freight fleets, you must determine the maximum volume the system can transport simultaneously. A flow network is a directed graph where each edge has a positive capacity, bounded between a designated source node that generates flow and a sink node that absorbs it.',
        bn: 'যখন আপনি উচ্চ ট্রাফিকের ক্লাউড নেটওয়ার্ক, শহরের পানি সরবরাহ বা মালবাহী লজিস্টিক বহর পরিচালনা করেন, তখন পুরো সিস্টেম একসাথে সর্বোচ্চ কত পরিমাণ পরিবহন করতে পারে তা নির্ধারণ করতে হয়। একটি ফ্লো নেটওয়ার্ক হলো এমন একটি নির্দেশিত গ্রাফ যেখানে প্রতিটি ধারের নির্দিষ্ট ধারণক্ষমতা থাকে, যা উৎস নোড থেকে উৎপন্ন হয়ে সিংক নোডে গিয়ে জমা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every valid flow must obey two fundamental laws: the Capacity Constraint (the flow on any edge cannot exceed that edge’s capacity) and Flow Conservation (at every intermediate vertex, total incoming flow must equal total outgoing flow). The net flow leaving the source equals the total volume delivered to the sink.',
        bn: 'প্রতিটি বৈধ ফ্লো দুটি মৌলিক নিয়ম মেনে চলে: ধারণক্ষমতার সীমাবদ্ধতা (যেকোনো ধারের ফ্লো তার ধারণক্ষমতার চেয়ে বেশি হতে পারে না) এবং ফ্লো সংরক্ষণ নীতি (উৎস ও সিংক ব্যতীত প্রতিটি মধ্যবর্তী নোডে মোট অন্তর্মুখী ফ্লো এবং মোট বহির্মুখী ফ্লো হুবহু সমান হতে হবে)। উৎস থেকে নির্গত নিট ফ্লো সিংকে প্রাপ্ত মোট পরিমাণের সমান হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'flow-network',
          def: {
            en: 'A directed graph with designated source and sink nodes where each edge has a maximum throughput capacity.',
            bn: 'একটি নির্দেশিত গ্রাফ যেখানে উৎস ও সিংক নোড থাকে এবং প্রতিটি ধারের নির্দিষ্ট সর্বোচ্চ পরিবহন ক্ষমতা থাকে।'
          }
        },
        {
          term: 'flow-conservation',
          def: {
            en: 'The physical principle that total incoming flow equals total outgoing flow at every node except the source and sink.',
            bn: 'উৎস এবং সিংক ব্যতীত প্রতিটি নোডে মোট অন্তর্মুখী প্রবাহ এবং মোট বহির্মুখী প্রবাহ সমান থাকার নীতি।'
          }
        },
        {
          term: 'residual-graph',
          def: {
            en: 'A graph tracking remaining forward capacities and backward flow cancellation edges during augmentation.',
            bn: 'একটি গ্রাফ যা ফ্লো বৃদ্ধির সময় অবশিষ্ট সামনের ধারণক্ষমতা এবং পূর্বাবস্থায় ফেরানোর পেছনের ধারগুলো ট্র্যাক করে।'
          }
        },
        {
          term: 'max-flow-min-cut',
          def: {
            en: 'The foundational theorem establishing that the maximum flow through a network equals the minimum cut capacity.',
            bn: 'মৌলিক উপপাদ্য যা প্রমাণ করে যে নেটওয়ার্কের সর্বোচ্চ ফ্লো তার সর্বনিম্ন কাটের ধারণক্ষমতার সমান।'
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
      id: 'ford-fulkerson-vs-edmonds-karp',
      text: {
        en: 'Algorithmic Comparison: Ford-Fulkerson vs Edmonds-Karp',
        bn: 'অ্যালগরিদমের তুলনা: ফোর্ড-ফুলকারসন বনাম এডমন্ডস-কার্প'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The classic Ford-Fulkerson method establishes the augmenting path framework, but its runtime depends on edge capacities. Edmonds-Karp optimizes this with BFS to guarantee polynomial performance.',
        bn: 'ঐতিহ্যবাহী ফোর্ড-ফুলকারসন পদ্ধতি অগমেন্টিং পাথের মূল কাঠামো প্রদান করে, তবে এর কার্যকাল ধারের ক্যাপাসিটির ওপর নির্ভর করে। এডমন্ডস-কার্প একে BFS দিয়ে অপ্টিমাইজ করে পলিনোমিয়াল সময়ের নিশ্চয়তা দেয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Aspect', bn: 'পরিমাপ / বৈশিষ্ট্য' },
        { en: 'Ford-Fulkerson Method', bn: 'ফোর্ড-ফুলকারসন পদ্ধতি' },
        { en: 'Edmonds-Karp Algorithm', bn: 'এডমন্ডস-কার্প অ্যালগরিদম' }
      ],
      rows: [
        [
          { en: 'Augmenting Path Strategy', bn: 'অগমেন্টিং পাথ কৌশল' },
          { en: 'Arbitrary search traversal (DFS or arbitrary walk)', bn: 'যেকোনো ট্রাভার্সাল পদ্ধতি (DFS বা এলোমেলো অনুসন্ধান)' },
          { en: 'Breadth-First Search (BFS shortest path in hops)', bn: 'ব্রেডথ-ফার্স্ট সার্চ (লাফের সংখ্যায় সংক্ষিপ্ততম পথ)' }
        ],
        [
          { en: 'Time Complexity', bn: 'সময় জটিলতা' },
          { en: 'O(E * |f_max|) pseudo-polynomial', bn: 'O(E * |f_max|) সিউডো-পলিনোমিয়াল' },
          { en: 'O(V * E^2) deterministic polynomial', bn: 'O(V * E^২) নিশ্চিত পলিনোমিয়াল' }
        ],
        [
          { en: 'Path Monotonicity', bn: 'পথের দৈর্ঘ্য বৃদ্ধি' },
          { en: 'Can repeatedly traverse inefficient bottleneck loops', bn: 'বারবার অদক্ষ লুপে আটকে পড়তে পারে' },
          { en: 'Shortest path length is monotonically non-decreasing', bn: 'সংক্ষিপ্ততম পথের দৈর্ঘ্য ধারাবাহিকভাবে বৃদ্ধি পায়' }
        ],
        [
          { en: 'Termination Guarantee', bn: 'সমাপ্তির নিশ্চয়তা' },
          { en: 'May fail to terminate with irrational capacities', bn: 'অবাস্তব ক্যাপাসিটি থাকলে সমাপ্তি নাও হতে পারে' },
          { en: 'Always terminates in polynomial steps', bn: 'সর্বদা পলিনোমিয়াল পদক্ষেপে শেষ হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-edmonds-karp-code',
      text: {
        en: 'Executable Edmonds-Karp Implementation',
        bn: 'এডমন্ডস-কার্প অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও এক্সিকিউশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program runs Edmonds-Karp on a 4-node flow network from source S to sink T. The algorithm discovers augmenting paths via BFS, saturates the bottlenecks, and calculates a maximum flow of 17, which matches the minimum cut capacity exactly.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি উৎস S থেকে সিংক T পর্যন্ত ৪টি নোডের ফ্লো নেটওয়ার্কে এডমন্ডস-কার্প চালায়। অ্যালগরিদমটি BFS দিয়ে অগমেন্টিং পাথ খুঁজে বের করে বোতলনেকগুলো পূর্ণ করে এবং সর্বোচ্চ ১৭ ফ্লো গণনা করে, যা সর্বনিম্ন কাটের ক্যাপাসিটির হুবহু সমান।'
      }
    },
    {
      type: 'code',
      code: `function edmondsKarp(vertices, edges, source, sink) {
  const cap = new Map();
  const adj = new Map();

  for (const v of vertices) adj.set(v, []);
  for (const { u, v, c } of edges) {
    adj.get(u).push(v);
    adj.get(v).push(u); // Backward residual edge
    cap.set(u + '->' + v, c);
    cap.set(v + '->' + u, 0);
  }

  let maxFlow = 0;

  while (true) {
    // BFS to find the shortest augmenting path
    const parent = new Map();
    const queue = [source];
    parent.set(source, null);

    while (queue.length > 0) {
      const u = queue.shift();
      if (u === sink) break;

      for (const v of adj.get(u)) {
        const residual = cap.get(u + '->' + v) || 0;
        if (!parent.has(v) && residual > 0) {
          parent.set(v, u);
          queue.push(v);
        }
      }
    }

    if (!parent.has(sink)) break; // No more augmenting paths

    // Find bottleneck residual capacity along path
    let pathFlow = Infinity;
    let curr = sink;
    while (curr !== source) {
      const prev = parent.get(curr);
      const residual = cap.get(prev + '->' + curr);
      pathFlow = Math.min(pathFlow, residual);
      curr = prev;
    }

    // Push flow along augmenting path and update residual edges
    curr = sink;
    while (curr !== source) {
      const prev = parent.get(curr);
      cap.set(prev + '->' + curr, cap.get(prev + '->' + curr) - pathFlow);
      cap.set(curr + '->' + prev, cap.get(curr + '->' + prev) + pathFlow);
      curr = prev;
    }

    maxFlow += pathFlow;
  }

  return maxFlow;
}

const vertices = ['S', 'A', 'B', 'T'];
const edges = [
  { u: 'S', v: 'A', c: 10 },
  { u: 'S', v: 'B', c: 10 },
  { u: 'A', v: 'B', c: 2 },
  { u: 'A', v: 'T', c: 8 },
  { u: 'B', v: 'T', c: 9 }
];

const maxFlow = edmondsKarp(vertices, edges, 'S', 'T');
console.log('Maximum Flow (Source to Sink):', maxFlow);
// Output: Maximum Flow (Source to Sink): 17
console.log('Minimum Cut Capacity:', maxFlow);
// Output: Minimum Cut Capacity: 17`
    },
    {
      type: 'heading',
      id: 'bipartite-matching-and-bottlenecks',
      text: {
        en: 'Production Applications: Bipartite Matching and Vulnerability Cuts',
        bn: 'বাস্তব প্রয়োগ: দ্বিপাক্ষিক ম্যাচিং এবং দুর্বলতা কাট শনাক্তকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Network flow algorithms solve foundational engineering challenges beyond pipe hydraulics. For example, Maximum Bipartite Matching assigns candidates to jobs using unit capacities. We connect a source to candidates with capacity 1, candidate-job pairings with capacity 1, and all jobs to a sink with capacity 1. The resulting maximum flow directly gives the maximum number of matches. In computer vision, min-cut algorithms perform image segmentation by separating foreground pixels from background pixels. In cloud networking, the minimum cut identifies the exact critical links whose failure would disconnect data centers.',
        bn: 'নেটওয়ার্ক ফ্লো অ্যালগরিদম পাইপের তরল পরিবহনের বাইরেও বহু গুরুত্বপূর্ণ ইঞ্জিনিয়ারিং সমস্যা সমাধান করে। যেমন, ম্যাক্সিমাম বাইপার্টাইট ম্যাচিং পদ্ধতিতে একক ক্যাপাসিটি ব্যবহার করে প্রার্থীদের কাজে বরাদ্দ করা হয়। এখানে উৎস থেকে প্রার্থীদের কাছে ১ ক্যাপাসিটি, প্রার্থী-কাজের সংযোগে ১ ক্যাপাসিটি এবং সমস্ত কাজ থেকে সিংকে ১ ক্যাপাসিটি যুক্ত করা হয়। ফলে প্রাপ্ত সর্বোচ্চ ফ্লো সরাসরি সর্বাধিক সফল ম্যাচিং সংখ্যা প্রদান করে। কম্পিউটার ভিশনে মিন-কাট অ্যালগরিদম ছবির ফোরগ্রাউন্ড এবং ব্যাকগ্রাউন্ড আলাদা করে। ক্লাউড নেটওয়ার্কে মিনিমাম কাট সেই গুরুত্বপূর্ণ সংযোগগুলোকে চিহ্নিত করে যার ব্যর্থতা ডেটা সেন্টারকে বিচ্ছিন্ন করে দিতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Capacity and conservation: Every valid flow respects edge capacities and satisfies inflow = outflow at intermediate nodes.',
          bn: 'ধারণক্ষমতা ও সংরক্ষণ: প্রতিটি বৈধ ফ্লো ধারের ক্যাপাসিটি মানে এবং মধ্যবর্তী নোডগুলোতে অন্তঃপ্রবাহ = বহিঃপ্রবাহ বজায় রাখে।'
        },
        {
          en: 'Residual edges enable undo: Backward residual edges allow subsequent augmentations to redirect previously committed flow.',
          bn: 'অবশিষ্ট ধারের পূর্বাবস্থায় ফেরা: পেছনের অবশিষ্ট ধারগুলো পরবর্তী ধাপে আগে বরাদ্দকৃত ফ্লো পুনরায় পরিবর্তন করার সুযোগ দেয়।'
        },
        {
          en: 'Edmonds-Karp polynomial bound: Using BFS to choose shortest augmenting paths bounds execution to O(V * E^2) time.',
          bn: 'এডমন্ডস-কার্পের পলিনোমিয়াল সীমা: BFS দিয়ে ক্ষুদ্রতম পথ বেছে নিলে মোট কার্যকাল নিশ্চিতভাবে O(V * E^২) সময়ে সীমাবদ্ধ থাকে।'
        },
        {
          en: 'Max-Flow Min-Cut equivalence: The maximum flow between source and sink equals the capacity of the narrowest bottleneck cut.',
          bn: 'ম্যাক্স-ফ্লো মিন-কাট সমতুল্যতা: উৎস ও সিঙ্কের মধ্যকার সর্বোচ্চ ফ্লো নেটওয়ার্কের সবচেয়ে সরু কাটের ক্যাপাসিটির সমান হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fn-ex1',
      kind: 'mcq',
      topic: 'flow-conservation-rule',
      question: {
        en: 'What does the Flow Conservation principle require at any vertex v other than the source and sink?',
        bn: 'উৎস এবং সিঙ্ক ব্যতীত অন্য যেকোনো শীর্ষবিন্দু v তে ফ্লো সংরক্ষণ নীতি কী দাবি করে?'
      },
      options: [
        {
          en: 'The total incoming flow entering vertex v must exactly equal the total outgoing flow leaving vertex v',
          bn: 'শীর্ষবিন্দু v তে প্রবেশ করা মোট অন্তর্মুখী ফ্লো এবং তা থেকে নির্গত মোট বহির্মুখী ফ্লো হুবহু সমান হতে হবে'
        },
        {
          en: 'Vertex v must store half of the flow permanently',
          bn: 'শীর্ষবিন্দু v কে স্থায়ীভাবে অর্ধেক ফ্লো জমা রাখতে হবে'
        },
        {
          en: 'The outgoing flow must be double the incoming flow',
          bn: 'বহির্মুখী ফ্লো অন্তর্মুখী ফ্লোর দ্বিগুণ হতে হবে'
        },
        {
          en: 'All incoming edges must be deleted',
          bn: 'সমস্ত অন্তর্মুখী ধার মুছে ফেলতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of water flowing through a pipe junction: water cannot pool or vanish inside.',
        bn: 'পাইপের সংযোগস্থলের কথা ভাবুন: ভেতরে কোনো পানি জমতে বা উধাও হতে পারে না।'
      },
      explanation: {
        en: 'Flow conservation ensures intermediate vertices act purely as conduits without storing or generating flow.',
        bn: 'ফ্লো সংরক্ষণ নীতি নিশ্চিত করে যে মধ্যবর্তী নোডগুলো ফ্লো জমা বা তৈরি না করে কেবল মাধ্যম হিসেবে কাজ করে।'
      }
    },
    {
      id: 'fn-ex2',
      kind: 'mcq',
      topic: 'residual-backward-edge',
      question: {
        en: 'In a residual graph, what is the crucial purpose of a backward edge v -> u with capacity equal to the current flow f(u, v)?',
        bn: 'রেসিডুয়াল গ্রাফে বর্তমান ফ্লো f(u, v) এর সমান ক্যাপাসিটি বিশিষ্ট পেছনের ধার v -> u এর মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It allows the algorithm to "undo" or redirect previously sent flow if a better global routing is discovered later',
          bn: 'পরবর্তীতে উন্নত কোনো সামগ্রিক পথ পাওয়া গেলে এটি অ্যালগরিদমকে পূর্বে পাঠানো ফ্লো বাতিল বা পুনর্বিন্যাস করার সুযোগ দেয়'
        },
        {
          en: 'It doubles the physical capacity of the pipe',
          bn: 'এটি পাইপের বাস্তব ধারণক্ষমতা দ্বিগুণ করে দেয়'
        },
        {
          en: 'It disconnects the source from the graph',
          bn: 'এটি গ্রাফ থেকে উৎস নোডকে বিচ্ছিন্ন করে'
        },
        {
          en: 'It converts the directed graph into an undirected graph',
          bn: 'এটি নির্দেশিত গ্রাফকে অমুখী গ্রাফে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What mechanism prevents early greedy choices from permanently locking the algorithm into a suboptimal flow?',
        bn: 'কোন কৌশলটি প্রাথমিক গ্রিডি সিদ্ধান্তের কারণে অ্যালগরিদমকে স্থায়ীভাবে ভুল ফ্লোতে আটকে থাকা থেকে রক্ষা করে?'
      },
      explanation: {
        en: 'Pushing flow along a backward residual edge mathematically reduces flow on the original edge, canceling past commitments.',
        bn: 'পেছনের অবশিষ্ট ধারের মধ্য দিয়ে ফ্লো পাঠালে গাণিতিকভাবে মূল ধারের ফ্লো কমে যায়, যা পূর্বের ভুল সিদ্ধান্ত সংশোধনের সুযোগ দেয়।'
      }
    },
    {
      id: 'fn-ex3',
      kind: 'mcq',
      topic: 'edmonds-karp-complexity',
      question: {
        en: 'What is the worst-case asymptotic time complexity of the Edmonds-Karp algorithm?',
        bn: 'এডমন্ডস-কার্প অ্যালগরিদমের সবচেয়ে খারাপ ক্ষেত্রে অ্যাসিম্পটোটিক সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(V * E^2) deterministic polynomial time',
          bn: 'O(V * E^২) নিশ্চিত পলিনোমিয়াল সময়'
        },
        {
          en: 'O(V + E) linear time',
          bn: 'O(V + E) রৈখিক সময়'
        },
        {
          en: 'O(2^V) exponential time',
          bn: 'O(2^V) সূচকীয় সময়'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(1) ধ্রুবক সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Edmonds-Karp uses BFS. The number of augmentations is bounded by O(V * E), each taking O(E) time.',
        bn: 'এডমন্ডস-কার্প BFS ব্যবহার করে। অগমন্টেশনের সংখ্যা O(V * E) এবং প্রতিটিতে O(E) সময় লাগে।'
      },
      explanation: {
        en: 'Each augmenting step takes O(E) via BFS, and at most O(V * E) total augmentations can occur, yielding O(V * E^2).',
        bn: 'BFS এর মাধ্যমে প্রতিটি ধাপে O(E) সময় লাগে এবং সর্বোচ্চ O(V * E) টি ধাপ ঘটতে পারে, যার মোট সময় O(V * E^২)।'
      }
    }
  ],
  quiz: {
    id: 'flow-and-the-narrow-cut-quiz',
    title: {
      en: 'Network Flow and Min-Cut Quiz',
      bn: 'নেটওয়ার্ক ফ্লো এবং মিন-কাট কুইজ'
    },
    questions: [
      {
        id: 'fn-q1',
        kind: 'mcq',
        topic: 'max-flow-min-cut-theorem',
        question: {
          en: 'What does the Max-Flow Min-Cut Theorem state regarding any flow network?',
          bn: 'যেকোনো ফ্লো নেটওয়ার্কের ক্ষেত্রে ম্যাক্স-ফ্লো মিন-কাট উপপাদ্য কী ঘোষণা করে?'
        },
        options: [
          {
            en: 'The maximum value of an s-t flow is equal to the minimum capacity of an s-t cut',
            bn: 'একটি s-t ফ্লোর সর্বোচ্চ মান তার s-t কাটের সর্বনিম্ন ক্যাপাসিটির সমান'
          },
          {
            en: 'The maximum flow is always equal to 0',
            bn: 'সর্বোচ্চ ফ্লো সর্বদা ০ এর সমান'
          },
          {
            en: 'The minimum cut must contain all vertices of the graph',
            bn: 'ন্যূনতম কাটে অবশ্যই গ্রাফের সমস্ত শীর্ষবিন্দু থাকতে হবে'
          },
          {
            en: 'The flow through every edge must be identical',
            bn: 'প্রতিটি ধারের মধ্য দিয়ে ফ্লো হুবহু সমান হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The bottleneck of the entire network determines the maximum possible throughput.',
          bn: 'পুরো নেটওয়ার্কের বোতলনেক নির্ধারণ করে সর্বোচ্চ কত ফ্লো অতিক্রম করতে পারবে।'
        },
        explanation: {
          en: 'The theorem proves duality: the tightest bottleneck cut strictly bounds and equals the maximum achievable flow.',
          bn: 'উপপাদ্যটি দ্বৈততা প্রমাণ করে: সবচেয়ে সরু বোতলনেক কাটটিই অর্জিত সর্বোচ্চ ফ্লোর মান নির্ধারণ করে।'
        }
      },
      {
        id: 'fn-q2',
        kind: 'mcq',
        topic: 'finding-min-cut-from-residual',
        question: {
          en: 'After finding the maximum flow, how is the minimum cut (S, T) identified from the residual graph?',
          bn: 'সর্বোচ্চ ফ্লো বের করার পর অবশিষ্ট গ্রাফ থেকে কীভাবে মিনিমাম কাট (S, T) শনাক্ত করা হয়?'
        },
        options: [
          {
            en: 'Set S contains all vertices reachable from the source s in the residual graph; set T contains all remaining vertices',
            bn: 'সেট S এ অবশিষ্ট গ্রাফে উৎস s থেকে পৌঁছানো যায় এমন সব নোড থাকে; সেট T তে বাকি সমস্ত নোড থাকে'
          },
          {
            en: 'By picking two random vertices',
            bn: 'যেকোনো দুটি এলোমেলো নোড বেছে নিয়ে'
          },
          {
            en: 'By sorting vertices alphabetically',
            bn: 'নোডগুলোকে বর্ণানুক্রমিকভাবে সাজিয়ে'
          },
          {
            en: 'By deleting all edges with weight > 10',
            bn: '১০ এর চেয়ে বেশি ওজনের সব ধার মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Since no augmenting path remains to sink t, which vertices can source s still reach?',
          bn: 'সিঙ্ক t তে যাওয়ার কোনো পথ না থাকায় উৎস s এখনো কোন কোন নোডে পৌঁছাতে পারে?'
        },
        explanation: {
          en: 'Vertices reachable from s form partition S. Edges crossing from S to T in the original graph are fully saturated and form the min-cut.',
          bn: 's থেকে পৌঁছানো নোডগুলো নিয়ে সেট S গঠিত হয়। মূল গ্রাফে S থেকে T তে যাওয়া ধারগুলো সম্পূর্ণ পূর্ণ থাকে এবং মিন-কাট তৈরি করে।'
        }
      },
      {
        id: 'fn-q3',
        kind: 'mcq',
        topic: 'bipartite-matching-reduction',
        question: {
          en: 'How is a Maximum Bipartite Matching problem reduced to a Max-Flow problem?',
          bn: 'একটি ম্যাক্সিমাম বাইপার্টাইট ম্যাচিং সমস্যাকে কীভাবে ম্যাক্স-ফ্লো সমস্যায় রূপান্তর করা হয়?'
        },
        options: [
          {
            en: 'Add a source with capacity 1 to all left-side nodes, set bipartite edge capacities to 1, and connect all right-side nodes to a sink with capacity 1',
            bn: 'বাম পাশের সব নোডের সাথে ১ ক্যাপাসিটির উৎস যোগ করুন, ম্যাচিং ধারের ক্যাপাসিটি ১ রাখুন এবং ডান পাশের সব নোডকে ১ ক্যাপাসিটি দিয়ে সিঙ্কে যুক্ত করুন'
          },
          {
            en: 'Delete all edges between the two sets',
            bn: 'উভয় সেটের মধ্যকার সমস্ত ধার মুছে দিন'
          },
          {
            en: 'Multiply all node values by 2',
            bn: 'সমস্ত নোডের মানকে ২ দিয়ে গুণ করুন'
          },
          {
            en: 'Sort the edges in descending order',
            bn: 'ধারগুলোকে অধঃক্রমে সাজান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each person can match at most 1 job, and each job can be assigned to at most 1 person.',
          bn: 'প্রতিটি ব্যক্তি সর্বোচ্চ ১টি কাজ পেতে পারে এবং প্রতিটি কাজ সর্বোচ্চ ১ জন পেতে পারে।'
        },
        explanation: {
          en: 'Setting unit capacities of 1 ensures each candidate and task is matched at most once, and max flow equals max matching size.',
          bn: '১ ক্যাপাসিটি নির্ধারণ করলে নিশ্চিত হয় যে প্রতিটি ব্যক্তি ও কাজ সর্বোচ্চ একবার ম্যাচ হবে এবং মোট ফ্লো ম্যাচিং সংখ্যার সমান হবে।'
        }
      },
      {
        id: 'fn-q4',
        kind: 'mcq',
        topic: 'bfs-vs-dfs-augmentation',
        question: {
          en: 'Why does Edmonds-Karp specifically use BFS rather than DFS to find augmenting paths?',
          bn: 'এডমন্ডস-কার্প কেন অগমেন্টিং পাথ খুঁজতে DFS এর বদলে সুনির্দিষ্টভাবে BFS ব্যবহার করে?'
        },
        options: [
          {
            en: 'BFS always finds the augmenting path with the fewest edges, ensuring shortest-path monotonicity and preventing infinite loops',
            bn: 'BFS সর্বদা সবচেয়ে কম ধারের অগমেন্টিং পাথ খুঁজে বের করে, যা পথের দৈর্ঘ্যের একঘেয়ে বৃদ্ধি নিশ্চিত করে এবং অসীম লুপ রোধ করে'
          },
          {
            en: 'BFS uses zero bytes of memory',
            bn: 'BFS শূন্য বাইট মেমরি ব্যবহার করে'
          },
          {
            en: 'DFS cannot run on directed graphs',
            bn: 'DFS নির্দেশিত গ্রাফে চলতে পারে না'
          },
          {
            en: 'BFS automatically converts all capacities to integers',
            bn: 'BFS স্বয়ংক্রিয়ভাবে সমস্ত ক্যাপাসিটিকে পূর্ণসংখ্যায় রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'With DFS, an augmenting path can repeatedly oscillate and make tiny increments of 1 unit on large capacities.',
          bn: 'DFS ব্যবহার করলে অগমেন্টিং পাথ বারবার সামান্য ১ ইউনিট করে ফ্লো বাড়িয়ে হাজার হাজার বার চলতে পারে।'
        },
        explanation: {
          en: 'BFS guarantees that the shortest distance from source to any node never decreases, strictly bounding total augmentations to O(V * E).',
          bn: 'BFS নিশ্চিত করে যে উৎস থেকে যেকোনো নোডের দূরত্ব কখনো কমে না, যা অগমন্টেশনের সংখ্যাকে O(V * E) তে সীমাবদ্ধ রাখে।'
        }
      }
    ]
  }
};
