import type { Lesson } from '../../../lib/types';

export const astarCompassLesson: Lesson = {
  slug: 'astar-and-the-compass',
  tech: 'graph-algorithms',
  title: {
    en: 'A* Search and Heuristics — Guided Pathfinding',
    bn: 'এ-স্টার সার্চ ও হিউরিস্টিকস: লক্ষ্যভিত্তিক পথসন্ধান'
  },
  summary: {
    en: 'Dijkstra’s algorithm radiates outward blindly in all directions like an expanding ripple, settling thousands of irrelevant nodes before reaching the target. The A* search algorithm equips pathfinding with a directional compass: a heuristic function h(n) estimating the remaining distance to the goal. By prioritizing nodes using the composite evaluation function f(n) = g(n) + h(n), A* focuses exploration into a concentrated beam toward the objective. When the heuristic is admissible (never overestimating true cost) and consistent (satisfying the triangle inequality), A* guarantees finding the optimal shortest path while expanding the minimal necessary search space.',
    bn: 'ডাইকস্ট্রার অ্যালগরিদম লক্ষ্যহীনভাবে সবদিকে জলের তরঙ্গের মতো ছড়িয়ে পড়ে, যার ফলে লক্ষ্যে পৌঁছানোর আগে হাজার হাজার অপ্রয়োজনীয় নোড পরীক্ষা করতে হয়। এ-স্টার (A*) সার্চ অ্যালগরিদম পথসন্ধানে একটি দিকনির্দেশক কম্পাস যুক্ত করে: একটি হিউরিস্টিক ফাংশন h(n) যা লক্ষ্য পর্যন্ত বাকি দূরত্বের পূর্বাভাস দেয়। f(n) = g(n) + h(n) মূল্যায়ন ফাংশনের মাধ্যমে নোডগুলোকে অগ্রাধিকার দিয়ে A* অনুসন্ধানকে লক্ষ্যের দিকে একটি কেন্দ্রীভূত রশ্মির মতো পরিচালনা করে। যখন হিউরিস্টিকটি গ্রহণযোগ্য (কখনো আসল দূরত্বের বেশি অনুমান করে না) এবং সামঞ্জস্যপূর্ণ (ত্রিভুজ অসমতা মানে) হয়, তখন A* ন্যূনতম নোড অনুসন্ধান করে সর্বোত্তম সর্বনিম্ন পথ খুঁজে পাওয়ার নিশ্চয়তা দেয়।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'flow-and-the-narrow-cut',
    tech: 'graph-algorithms',
    title: {
      en: 'Network Flow and Max-Flow Min-Cut Theorem',
      bn: 'নেটওয়ার্ক ফ্লো এবং ম্যাক্স-ফ্লো মিন-কাট উপপাদ্য'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'blind-search-vs-guided-heuristic',
      text: {
        en: 'From Blind Expansion to Goal-Directed Search',
        bn: 'অন্ধ বিস্তার থেকে লক্ষ্যভিত্তিক অনুসন্ধানে রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build pathfinding for video games, digital map navigation, or robotic vacuum cleaners, searching every corner of the map wastes computational time. Dijkstra’s algorithm evaluates nodes purely by the cost paid so far, g(n). Because it lacks awareness of where the target lies, it spreads symmetrically in all directions like a circular wavefront.',
        bn: 'যখন আপনি ভিডিও গেম, ডিজিটাল মানচিত্র নেভিগেশন বা রোবটের জন্য পথসন্ধান তৈরি করেন, তখন মানচিত্রের প্রতিটি কোণ অহেতুক খোঁজা কম্পিউটেশনাল সময় নষ্ট করে। ডাইকস্ট্রার অ্যালগরিদম নোডগুলোকে কেবল এপর্যন্ত খরচের ভিত্তিতে g(n) দিয়ে মূল্যায়ন করে। লক্ষ্য কোন দিকে অবস্থিত তা না জানায় এটি সবদিকে সমানভাবে তরঙ্গের মতো ছড়িয়ে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The A* search algorithm transforms this blind expansion into a directed beam by introducing a heuristic function, h(n). At each step, A* selects the node with the lowest total estimated cost, f(n) = g(n) + h(n), where g(n) is the exact distance traveled from the start, and h(n) is the estimated remaining distance to the goal.',
        bn: 'এ-স্টার (A*) সার্চ অ্যালগরিদম একটি হিউরিস্টিক ফাংশন h(n) ব্যবহারের মাধ্যমে এই অন্ধ বিস্তারকে লক্ষ্যের দিকে নির্দেশিত একটি রশ্মিতে পরিণত করে। প্রতিটি ধাপে A* সর্বনিম্ন অনুমিত মোট খরচের নোডটি বেছে নেয়: f(n) = g(n) + h(n), যেখানে g(n) হলো শুরু থেকে এপর্যন্ত অতিক্রান্ত দূরত্ব এবং h(n) হলো লক্ষ্য পর্যন্ত বাকি দূরত্বের পূর্বাভাস।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'astar-search',
          def: {
            en: 'An informed best-first search algorithm that finds shortest paths using the evaluation function f(n) = g(n) + h(n).',
            bn: 'একটি লক্ষ্যভিত্তিক সার্চ অ্যালগরিদম যা f(n) = g(n) + h(n) মূল্যায়ন ফাংশন ব্যবহার করে দ্রুত সর্বনিম্ন পথ বের করে।'
          }
        },
        {
          term: 'heuristic-function',
          def: {
            en: 'An estimate h(n) of the cheapest path cost from node n to the destination goal.',
            bn: 'একটি পূর্বাভাস ফাংশন h(n) যা বর্তমান নোড n থেকে লক্ষ্য পর্যন্ত সম্ভাব্য সর্বনিম্ন খরচের হিসাব দেয়।'
          }
        },
        {
          term: 'admissible-heuristic',
          def: {
            en: 'A heuristic that never overestimates the true cost to reach the goal (h(n) <= h*(n)), guaranteeing optimality.',
            bn: 'এমন একটি হিউরিস্টিক যা লক্ষ্য পর্যন্ত আসল খরচের চেয়ে কখনো বেশি অনুমান করে না (h(n) <= h*(n)), যা সর্বোত্তমতার নিশ্চয়তা দেয়।'
          }
        },
        {
          term: 'consistent-heuristic',
          def: {
            en: 'A heuristic satisfying the triangle inequality h(u) <= c(u, v) + h(v), ensuring nodes are settled permanently on first pop.',
            bn: 'এমন একটি হিউরিস্টিক যা ত্রিভুজ অসমতা h(u) <= c(u, v) + h(v) মেনে চলে, ফলে নোডগুলো প্রথম পপেই স্থায়ীভাবে চূড়ান্ত হয়।'
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
      id: 'heuristic-properties-table',
      text: {
        en: 'Grid Heuristic Selector Matrix',
        bn: 'গ্রিড হিউরিস্টিক নির্বাচন ম্যাট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The geometric structure of your search space determines which heuristic function preserves admissibility and maximizes search efficiency.',
        bn: 'আপনার গ্রাফ বা গ্রিডের জ্যামিতিক কাঠামোর ওপর নির্ভর করে কোন হিউরিস্টিক ফাংশনটি গ্রহণযোগ্যতা বজায় রেখে সার্চের গতি সর্বাধিক করবে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Rule', bn: 'পরিমাপ / নিয়ম' },
        { en: 'Manhattan Distance', bn: 'ম্যানহাটন দূরত্ব' },
        { en: 'Euclidean Distance', bn: 'ইউক্লিডীয় দূরত্ব' },
        { en: 'Chebyshev Distance', bn: 'চেবিশেভ দূরত্ব' }
      ],
      rows: [
        [
          { en: 'Allowed Grid Moves', bn: 'সমর্থিত নড়াচড়ার দিক' },
          { en: '4 directions (orthogonal: Up, Down, Left, Right)', bn: '৪টি দিক (লম্বভাবে: উপরে, নিচে, ডানে, বামে)' },
          { en: 'Any continuous angle or straight line', bn: 'যেকোনো কোণ বা সরলরেখা বরাবর' },
          { en: '8 directions (orthogonal plus diagonal)', bn: '৮টি দিক (লম্ব দিক ছাড়াও কোনাকুনি)' }
        ],
        [
          { en: 'Formula', bn: 'সূত্র' },
          { en: '|x1 - x2| + |y1 - y2|', bn: '|x1 - x2| + |y1 - y2|' },
          { en: 'sqrt((x1 - x2)^2 + (y1 - y2)^2)', bn: 'sqrt((x1 - x2)^2 + (y1 - y2)^2)' },
          { en: 'max(|x1 - x2|, |y1 - y2|)', bn: 'max(|x1 - x2|, |y1 - y2|)' }
        ],
        [
          { en: 'Computational Overhead', bn: 'কম্পিউটেশনাল খরচ' },
          { en: 'Extremely fast integer arithmetic', bn: 'অত্যন্ত দ্রুত ইন্টিজার যোগ-বিয়োগ' },
          { en: 'Floating-point square root cost', bn: 'ফ্লোটিং-পয়েন্ট বর্গমূলের কিছুটা খরচ' },
          { en: 'Extremely fast comparison check', bn: 'অত্যন্ত দ্রুত তুলনা পরীক্ষা' }
        ],
        [
          { en: 'Admissibility Context', bn: 'গ্রহণযোগ্যতার ক্ষেত্র' },
          { en: 'Admissible when diagonal movement is forbidden', bn: 'গ্রহণযোগ্য যখন কোনাকুনি চলা নিষিদ্ধ' },
          { en: 'Always admissible for straight-line Euclidean graphs', bn: 'সরলরেখার ইউক্লিডীয় গ্রাফে সর্বদা গ্রহণযোগ্য' },
          { en: 'Admissible when diagonal cost equals orthogonal cost', bn: 'গ্রহণযোগ্য যখন কোনাকুনি খরচ লম্ব খরচের সমান' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-astar-code',
      text: {
        en: 'Executable A* Pathfinding Implementation',
        bn: 'এ-স্টার সার্চের সম্পূর্ণ বাস্তবায়ন ও পথসন্ধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program runs the A* algorithm on a coordinate graph with start node S at (0, 0) and goal node G at (3, 2). The Manhattan heuristic steers the search directly toward G, discovering the optimal path with a total cost of 6.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি স্থানাঙ্ক গ্রাফে A* অ্যালগরিদম চালায় যেখানে শুরুর নোড S (০, ০) এবং লক্ষ্য নোড G (৩, ২) এ অবস্থিত। ম্যানহাটন হিউরিস্টিক সার্চকে সরাসরি G এর দিকে পরিচালিত করে মোট ৬ খরচের সর্বোত্তম পথটি বের করে।'
      }
    },
    {
      type: 'code',
      code: `function astar(start, goal, neighbors, heuristic) {
  const gScore = new Map();
  const fScore = new Map();
  const cameFrom = new Map();
  const openSet = [start];
  const closedSet = new Set();

  gScore.set(start, 0);
  fScore.set(start, heuristic(start, goal));

  while (openSet.length > 0) {
    // Pick node with lowest fScore
    openSet.sort((a, b) => fScore.get(a) - fScore.get(b));
    const current = openSet.shift();

    if (current === goal) {
      const path = [current];
      let curr = current;
      while (cameFrom.has(curr)) {
        curr = cameFrom.get(curr);
        path.unshift(curr);
      }
      return { path, cost: gScore.get(goal) };
    }

    closedSet.add(current);

    for (const { node: neighbor, weight } of neighbors(current)) {
      if (closedSet.has(neighbor)) continue;

      const tentativeG = gScore.get(current) + weight;
      if (!gScore.has(neighbor) || tentativeG < gScore.get(neighbor)) {
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentativeG);
        fScore.set(neighbor, tentativeG + heuristic(neighbor, goal));
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return null;
}

const coords = {
  S: [0, 0],
  A: [1, 1],
  B: [0, 2],
  C: [2, 1],
  G: [3, 2]
};

function heuristic(a, b) {
  const [x1, y1] = coords[a];
  const [x2, y2] = coords[b];
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const graph = {
  S: [{ node: 'A', weight: 2 }, { node: 'B', weight: 3 }],
  A: [{ node: 'C', weight: 2 }, { node: 'G', weight: 4 }],
  B: [{ node: 'G', weight: 6 }],
  C: [{ node: 'G', weight: 2 }],
  G: []
};

const result = astar('S', 'G', (u) => graph[u], heuristic);
console.log('Optimal Path:', result.path.join(' -> '));
// Output: Optimal Path: S -> A -> G
console.log('Total Path Cost:', result.cost);
// Output: Total Path Cost: 6`
    },
    {
      type: 'heading',
      id: 'weighted-astar-and-real-world',
      text: {
        en: 'Weighted A* and Production Navigation Engines',
        bn: 'ভারযুক্ত এ-স্টার এবং নেভিগেশন ইঞ্জিনে প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-performance gaming engines (such as Unreal and Unity NavMesh) and real-time mapping systems, computing the strictly optimal path across millions of polygons can be too slow. Weighted A* multiplies the heuristic by a weight factor (f = g + w * h with w > 1). This deliberately trades exact mathematical optimality for dramatic speedups, guaranteeing that the returned route is at most w times the optimal cost while exploring up to 10 times fewer nodes.',
        bn: 'উচ্চক্ষমতার গেমিং ইঞ্জিন (যেমন Unreal এবং Unity NavMesh) এবং রিয়েল-টাইম ম্যাপ সিস্টেমে লক্ষ লক্ষ পলিগনে পুরোপুরি পারফেক্ট পথ বের করা কিছুটা ধীর হতে পারে। ভারযুক্ত A* (Weighted A*) হিউরিস্টিককে একটি ওজন গুণক দিয়ে গুণ করে (f = g + w * h, যেখানে w > ১)। এটি সুনির্দিষ্ট সর্বোত্তমতার কিছুটা ত্যাগ করে ১০ গুণেরও বেশি দ্রুত সার্চ সম্পন্ন করে এবং নিশ্চয়তা দেয় যে প্রাপ্ত পথটি আসল দূরত্বের সর্বোচ্চ w গুণের বেশি হবে না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Heuristic steering: A* uses f(n) = g(n) + h(n) to focus shortest-path search directly toward the target destination.',
          bn: 'লক্ষ্যমুখী চালনা: A* অ্যালগরিদম f(n) = g(n) + h(n) সূত্রের সাহায্যে সার্চকে সরাসরি লক্ষ্যের দিকে পরিচালিত করে।'
        },
        {
          en: 'Admissibility guarantees optimality: If h(n) never overestimates the true distance, A* is mathematically guaranteed to find the shortest path.',
          bn: 'গ্রহণযোগ্যতার নিশ্চয়তা: যদি h(n) প্রকৃত দূরত্বের চেয়ে কখনো বেশি হিসাব না করে, তবে A* সর্বদা সর্বোত্তম সর্বনিম্ন পথ খুঁজে পায়।'
        },
        {
          en: 'Consistency prevents re-expansion: When h(n) satisfies the triangle inequality, visited nodes never need to be re-evaluated.',
          bn: 'সামঞ্জস্য পুনঃপ্রসারণ রোধ করে: যখন h(n) ত্রিভুজ অসমতা মেনে চলে, তখন একবার চূড়ান্ত হওয়া নোড পুনরায় মূল্যায়ন করতে হয় না।'
        },
        {
          en: 'Weighted A* trades precision for speed: Scaling the heuristic by w > 1 delivers 10x faster navigation with bounded sub-optimality.',
          bn: 'ভারযুক্ত A* দ্রুত ফলাফল দেয়: হিউরিস্টিককে w > ১ দিয়ে স্কেল করলে সামান্য বিচ্যুতির বিনিময়ে ১০ গুণ দ্রুত পথ পাওয়া যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ac-ex1',
      kind: 'mcq',
      topic: 'astar-formula-breakdown',
      question: {
        en: 'In the A* evaluation function f(n) = g(n) + h(n), what does each component represent?',
        bn: 'A* এর মূল্যায়ন ফাংশন f(n) = g(n) + h(n) এ প্রতিটি অংশ কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'g(n) is the exact cost from start to node n, while h(n) is the estimated cost from node n to the goal',
          bn: 'g(n) হলো শুরু থেকে নোড n পর্যন্ত আসল খরচ, আর h(n) হলো নোড n থেকে লক্ষ্য পর্যন্ত অনুমিত খরচ'
        },
        {
          en: 'g(n) is the number of edges, and h(n) is the memory in megabytes',
          bn: 'g(n) হলো ধারের সংখ্যা এবং h(n) হলো মেগাবাইটে মেমরির পরিমাণ'
        },
        {
          en: 'g(n) is the heuristic and h(n) is the start node coordinate',
          bn: 'g(n) হলো হিউরিস্টিক এবং h(n) হলো শুরু নোডের স্থানাঙ্ক'
        },
        {
          en: 'g(n) and h(n) are always equal to 0',
          bn: 'g(n) এবং h(n) সর্বদা ০ এর সমান'
        }
      ],
      answer: 0,
      hint: {
        en: 'One term looks backward at work already done, while the other looks forward at remaining work.',
        bn: 'একটি পদ পেছনের সম্পন্ন কাজের হিসাব রাখে এবং অন্যটি সামনের বাকি কাজের পূর্বাভাস দেয়।'
      },
      explanation: {
        en: 'g(n) records the certified accumulated cost from the start node, and h(n) provides the heuristic compass estimate to the goal.',
        bn: 'g(n) শুরু থেকে এপর্যন্ত নিশ্চিত হওয়া খরচ রাখে এবং h(n) লক্ষ্য পর্যন্ত বাকি দূরত্বের পূর্বাভাস দেয়।'
      }
    },
    {
      id: 'ac-ex2',
      kind: 'mcq',
      topic: 'admissibility-criterion',
      question: {
        en: 'What does it mean for a heuristic h(n) to be "admissible" in A* search?',
        bn: 'A* সার্চে একটি হিউরিস্টিক h(n) "গ্রহণযোগ্য" (admissible) হওয়ার অর্থ কী?'
      },
      options: [
        {
          en: 'It never overestimates the true remaining cost to reach the goal (h(n) <= h*(n))',
          bn: 'এটি লক্ষ্যে পৌঁছানোর আসল খরচের চেয়ে কখনোই বেশি অনুমান করে না (h(n) <= h*(n))'
        },
        {
          en: 'It always returns negative numbers',
          bn: 'এটি সর্বদা ঋণাত্মক সংখ্যা প্রদান করে'
        },
        {
          en: 'It multiplies the distance by 100',
          bn: 'এটি দূরত্বকে ১০০ দিয়ে গুণ করে'
        },
        {
          en: 'It guarantees that the graph has no edges',
          bn: 'এটি নিশ্চিত করে যে গ্রাফে কোনো ধার নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the compass promises remaining cost is 10 when the real cost is 5, could A* skip the true shortest path?',
        bn: 'কম্পাস যদি ৫ এর জায়গায় ১০ অনুমান করে, তবে কি A* আসল সর্বনিম্ন পথটি এড়িয়ে যেতে পারে?'
      },
      explanation: {
        en: 'Admissibility guarantees that A* will never mistakenly overlook an optimal path due to an exaggerated heuristic penalty.',
        bn: 'গ্রহণযোগ্যতা নিশ্চিত করে যে অতিরিক্ত পূর্বাভাসের কারণে A* কখনো আসল সেরা পথটি বাদ দিয়ে অন্য পথে যাবে না।'
      }
    },
    {
      id: 'ac-ex3',
      kind: 'mcq',
      topic: 'dijkstra-as-special-case',
      question: {
        en: 'What does the A* algorithm simplify to if the heuristic function is set to h(n) = 0 for all nodes?',
        bn: 'যদি সমস্ত নোডের জন্য হিউরিস্টিক ফাংশনের মান h(n) = ০ ধরা হয়, তবে A* অ্যালগরিদমটি কিসে পরিণত হয়?'
      },
      options: [
        {
          en: 'It becomes identical to standard Dijkstra’s algorithm, radiating equally in all directions',
          bn: 'এটি অবিকল সাধারণ ডাইকস্ট্রার অ্যালগরিদমে পরিণত হয় এবং সবদিকে সমানভাবে ছড়ায়'
        },
        {
          en: 'It crashes with a division by zero error',
          bn: 'এটি শূন্য দিয়ে ভাগের ত্রুটিতে ক্র্যাশ করে'
        },
        {
          en: 'It becomes a depth-first search that never halts',
          bn: 'এটি এমন একটি ডেপথ-ফার্স্ট সার্চে রূপ নেয় যা কখনো থামে না'
        },
        {
          en: 'It transforms the graph into an AVL tree',
          bn: 'এটি গ্রাফটিকে একটি AVL ট্রিতে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If f(n) = g(n) + 0, which algorithm orders nodes purely by g(n)?',
        bn: 'যদি f(n) = g(n) + ০ হয়, তবে কোন অ্যালগরিদম শুধুমাত্র g(n) এর ভিত্তিতে নোডগুলোকে সাজায়?'
      },
      explanation: {
        en: 'With h(n) = 0, f(n) equals g(n). Nodes are expanded strictly in order of distance from start, which is exactly Dijkstra’s algorithm.',
        bn: 'h(n) = ০ হলে f(n) এবং g(n) সমান হয়। নোডগুলো শুধু শুরুর দূরত্বের ভিত্তিতে প্রসারিত হয়, যা হুবহু ডাইকস্ট্রার অ্যালগরিদম।'
      }
    }
  ],
  quiz: {
    id: 'astar-and-the-compass-quiz',
    title: {
      en: 'A* Search and Heuristics Quiz',
      bn: 'এ-স্টার সার্চ ও হিউরিস্টিকস কুইজ'
    },
    questions: [
      {
        id: 'ac-q1',
        kind: 'mcq',
        topic: 'consistency-triangle-inequality',
        question: {
          en: 'Why is a "consistent" (or monotone) heuristic desirable over a merely admissible heuristic in graph search?',
          bn: 'গ্রাফ সার্চে কেবল গ্রহণযোগ্য হিউরিস্টিকের চেয়ে একটি "সামঞ্জস্যপূর্ণ" (consistent) হিউরিস্টিক কেন বেশি কাঙ্ক্ষিত?'
        },
        options: [
          {
            en: 'It guarantees that when any node is closed (popped from priority queue), its shortest path is already finalized without needing re-expansion',
            bn: 'এটি নিশ্চিত করে যে কোনো নোড একবার ক্লোজড বা পপ হলে তার সর্বনিম্ন পথ চূড়ান্ত হয়ে যায় এবং পুনরায় খোলার প্রয়োজন হয় না'
          },
          {
            en: 'It reduces the graph to 1 single vertex',
            bn: 'এটি গ্রাফকে ১টি একক নোডে রূপান্তর করে'
          },
          {
            en: 'It eliminates the need for computer memory',
            bn: 'এটি কম্পিউটার মেমরির প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'It converts all directed edges into undirected edges',
            bn: 'এটি সমস্ত নির্দেশিত ধারকে অমুখী ধারে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consistency satisfies h(u) <= c(u, v) + h(v). What does this imply about f-values along paths?',
          bn: 'সামঞ্জস্য h(u) <= c(u, v) + h(v) সূত্র মেনে চলে। পথ বরাবর f এর মানের ক্ষেত্রে এটি কী প্রকাশ করে?'
        },
        explanation: {
          en: 'Consistency ensures f(n) is monotonically non-decreasing, so nodes are settled in true shortest-path order without reopening.',
          bn: 'সামঞ্জস্য নিশ্চিত করে যে f(n) এর মান সর্বদা একঘেয়েভাবে বৃদ্ধি পায়, ফলে কোনো নোড পুনরায় রিল্যাক্স করতে হয় না।'
        }
      },
      {
        id: 'ac-q2',
        kind: 'mcq',
        topic: 'grid-movement-manhattan',
        question: {
          en: 'On a 2D grid where movement is strictly restricted to the 4 cardinal directions (North, South, East, West), which heuristic is standard and admissible?',
          bn: 'একটি 2D গ্রিডে যেখানে চলাচল কেবল ৪টি প্রধান দিকে (উত্তর, দক্ষিণ, পূর্ব, পশ্চিম) সীমাবদ্ধ, সেখানে কোন হিউরিস্টিকটি আদর্শ ও গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'Manhattan distance: |x1 - x2| + |y1 - y2|',
            bn: 'ম্যানহাটন দূরত্ব: |x1 - x2| + |y1 - y2|'
          },
          {
            en: 'Random number between 1 and 100',
            bn: '১ এবং ১০০ এর মাঝে যেকোনো এলোমেলো সংখ্যা'
          },
          {
            en: 'The square of Euclidean distance',
            bn: 'ইউক্লিডীয় দূরত্বের বর্গ'
          },
          {
            en: 'The product of coordinates (x1 * x2)',
            bn: 'স্থানাঙ্কের গুণফল (x1 * x2)'
          }
        ],
        answer: 0,
        hint: {
          en: 'When you can only walk along grid city blocks without diagonals, what metric measures the minimum steps?',
          bn: 'কোনাকুনি না গিয়ে কেবল গ্রিডের সোজা রাস্তা দিয়ে চলতে ন্যূনতম পদক্ষেপ মাপতে কোন সূত্র ব্যবহৃত হয়?'
        },
        explanation: {
          en: 'Manhattan distance measures the exact minimum step count on a grid without obstacles when restricted to 4 directions.',
          bn: 'বাধা না থাকলে ৪টি দিকে চলার ক্ষেত্রে ম্যানহাটন দূরত্ব ঠিক ন্যূনতম পদক্ষেপের সংখ্যা প্রদান করে।'
        }
      },
      {
        id: 'ac-q3',
        kind: 'mcq',
        topic: 'weighted-astar-tradeoff',
        question: {
          en: 'What is the primary operational trade-off of Weighted A* (f = g + w * h, with w > 1)?',
          bn: 'ভারযুক্ত A* (f = g + w * h, যেখানে w > ১) এর মূল ব্যবহারিক সুবিধা ও সমঝোতা কী?'
        },
        options: [
          {
            en: 'It explores dramatically fewer nodes and runs much faster, bounded by a solution cost <= w * optimal',
            bn: 'এটি অনেক কম নোড অনুসন্ধান করে অত্যন্ত দ্রুত কাজ শেষ করে, যার সমাধান খরচ সর্বোচ্চ w * সর্বোত্তম এর মধ্যে থাকে'
          },
          {
            en: 'It consumes more RAM than brute force search',
            bn: 'এটি ব্রুট ফোর্স অনুসন্ধানের চেয়ে বেশি র‍্যাম খরচ করে'
          },
          {
            en: 'It deletes the start and goal nodes',
            bn: 'এটি শুরু এবং লক্ষ্য নোড দুটোই মুছে ফেলে'
          },
          {
            en: 'It only works on graphs with 2 nodes',
            bn: 'এটি কেবল ২টি নোডের গ্রাফে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Increasing w gives more priority to the heuristic estimate toward the goal.',
          bn: 'w এর মান বাড়ালে লক্ষ্যের দিকের হিউরিস্টিক পূর্বাভাস বেশি গুরুত্ব পায়।'
        },
        explanation: {
          en: 'Weighting the heuristic biases search aggressively toward the goal, reducing explored nodes by orders of magnitude with bounded sub-optimality.',
          bn: 'হিউরিস্টিকের ওজন বাড়ালে সার্চ সরাসরি লক্ষ্যের দিকে ধাবিত হয়, ফলে সামান্য ত্যাগের বিনিময়ে সার্চের সময় অনেক কমে যায়।'
        }
      },
      {
        id: 'ac-q4',
        kind: 'mcq',
        topic: 'goal-termination-condition',
        question: {
          en: 'When should A* terminate and return the optimal path?',
          bn: 'কখন A* অ্যালগরিদম শেষ করে সর্বোত্তম পথ রিটার্ন করা উচিত?'
        },
        options: [
          {
            en: 'When the goal node is popped from the priority queue (closed), not when it is merely discovered and added to the queue',
            bn: 'যখন লক্ষ্য নোডটি প্রায়োরিটি কিউ থেকে পপ (ক্লোজড) করা হয়, কেবল কিউতে যুক্ত হওয়ার সময় নয়'
          },
          {
            en: 'Immediately when the goal is first inserted into the open set',
            bn: 'লক্ষ্যটি ওপেন সেটে প্রথম যুক্ত হওয়ার সাথে সাথেই'
          },
          {
            en: 'When all vertices in the graph have been visited',
            bn: 'যখন গ্রাফের সমস্ত শীর্ষবিন্দু পরিদর্শন শেষ হয়'
          },
          {
            en: 'When the open set exceeds 1000 items',
            bn: 'যখন ওপেন সেটে ১০০০ এর বেশি উপাদান জমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Could a cheaper path to the goal still exist in the queue before the goal reaches the top?',
          bn: 'লক্ষ্যটি কিউয়ের শীর্ষে পৌঁছানোর আগে কি অন্য কোনো সস্তা পথ কিউতে থাকতে পারে?'
        },
        explanation: {
          en: 'A cheaper path could still reach the goal until the goal actually has the lowest f-value among all open nodes (when popped).',
          bn: 'যতক্ষণ না লক্ষ্যটির f-মান সবার চেয়ে কম হয়ে পপ হয়, ততক্ষণ পর্যন্ত অন্য কোনো বিকল্প সস্তা পথ থাকার সম্ভাবনা থাকে।'
        }
      }
    ]
  }
};
