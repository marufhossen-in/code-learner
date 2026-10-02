import type { Lesson } from '../../../lib/types';

export const everyPriceEveryPairLesson: Lesson = {
  slug: 'every-price-every-pair',
  tech: 'graph-algorithms',
  title: {
    en: 'Every Price, Every Pair — Floyd-Warshall All-Pairs Shortest Path',
    bn: 'প্রতি মূল্য, প্রতি জোড়া: ফ্লয়েড-ওয়ার্শাল অল-পেয়ার্স শর্টেস্ট পাথ'
  },
  summary: {
    en: 'While Dijkstra and Bellman-Ford solve single-source shortest paths, complex routing platforms frequently need to know the optimal path between every possible pair of vertices simultaneously. The Floyd-Warshall algorithm computes all-pairs shortest paths using a dynamic programming matrix over V iterations. By testing whether any intermediate mediator vertex k offers a cheaper detour between vertices i and j, it populates a complete V x V distance table in O(V^3) time and detects negative cycles by auditing the diagonal cells.',
    bn: 'ডাইকস্ট্রা ও বেলম্যান-ফোর্ড একক উৎস থেকে সর্বনিম্ন পথ বের করলেও পরিবহন বা লজিস্টিক প্ল্যাটফর্মগুলোতে প্রায়ই প্রতিটি জোড়া নোডের মধ্যকার সর্বোত্তম পথ একসাথে জানার প্রয়োজন হয়। ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম একটি দ্বি-মাত্রিক ম্যাট্রিক্সে ডায়নামিক প্রোগ্রামিং প্রয়োগ করে অল-পেয়ার্স শর্টেস্ট পাথ হিসাব করে। কোনো মধ্যস্থতাকারী নোড k হয়ে গেলে i থেকে j এর দূরত্ব কমে কি না তা পরীক্ষা করে এটি O(V^3) সময়ে সম্পূর্ণ V x V টেবিল তৈরি করে এবং কর্ণের মান দেখে ঋণাত্মক চক্র শনাক্ত করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-clan-ledger',
    tech: 'graph-algorithms',
    title: {
      en: 'The Clan Ledger — Disjoint Set Union and Inverse Ackermann',
      bn: 'গোষ্ঠী-খাতা: ডিসজয়েন্ট সেট ইউনিয়ন এবং ইনভার্স অ্যাকারম্যান'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'apsp-problem',
      text: {
        en: 'The All-Pairs Challenge: Matrix Routing Beyond Single Sources',
        bn: 'অল-পেয়ার্স চ্যালেঞ্জ: একক উৎসের বাইরে ম্যাট্রিক্স রাউটিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you operate a logistics dispatch network, flight scheduling system, or telecommunications grid, querying shortest paths one source at a time is inefficient. Drivers and packets start from arbitrary origins and travel to arbitrary destinations. You need a precomputed matrix holding optimal costs between every pair of vertices (i, j).',
        bn: 'যখন আপনি কোনো পণ্য সরবরাহ নেটওয়ার্ক, বিমান চলাচল ব্যবস্থা বা টেলিযোগাযোগ গ্রিড পরিচালনা করেন, তখন একক উৎস থেকে একটি একটি করে দূরত্ব খোঁজা ধীরগতির হয়। চালক এবং ডেটা প্যাকেট যেকোনো স্থান থেকে শুরু করে যেকোনো গন্তব্যে যেতে পারে। আপনার এমন একটি পূর্ব-গণনাকৃত ম্যাট্রিক্স প্রয়োজন যা প্রতিটি জোড়া নোডের (i, j) সর্বোত্তম খরচ সাথে সাথে জানিয়ে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The All-Pairs Shortest Path (APSP) problem can be solved by running Dijkstra V times, but this requires non-negative edge weights. The Floyd-Warshall algorithm solves APSP across arbitrary positive and negative weights in clean O(V^3) time using a three-nested loop dynamic programming structure on a 2D distance matrix.',
        bn: 'অল-পেয়ার্স শর্টেস্ট পাথ সমস্যাটি ডাইকস্ট্রাকে V বার চালিয়ে সমাধান করা যায়, কিন্তু সেজন্য সব ধারের ওজন অ-ঋণাত্মক হতে হয়। ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম দ্বি-মাত্রিক ম্যাট্রিক্সে তিনটি নেস্টেড লুপের মাধ্যমে ডায়নামিক প্রোগ্রামিং ব্যবহার করে ধনাত্মক ও ঋণাত্মক যেকোনো ওজনের গ্রাফে O(V^3) সময়ে এই সমাধান প্রদান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'all-pairs-shortest-path',
          def: {
            en: 'The computational problem of finding the shortest paths between every pair of vertices in a weighted graph.',
            bn: 'একটি ওজনযুক্ত গ্রাফের প্রতিটি জোড়া শীর্ষবিন্দুর মধ্যকার সর্বনিম্ন দূরত্বের পথ খুঁজে বের করার সমস্যা।'
          }
        },
        {
          term: 'floyd-warshall-algorithm',
          def: {
            en: 'A dynamic programming algorithm that computes shortest paths between all pairs of vertices in O(V^3) time using an intermediate mediator k.',
            bn: 'একটি ডায়নামিক প্রোগ্রামিং অ্যালগরিদম যা মধ্যস্থতাকারী k ব্যবহারের মাধ্যমে O(V^3) সময়ে সব জোড়ার সর্বনিম্ন পথ বের করে।'
          }
        },
        {
          term: 'mediator-k',
          def: {
            en: 'The intermediate candidate vertex tested in the outermost DP loop to determine if detouring through k improves the distance from i to j.',
            bn: 'সবচেয়ে বাইরের ডিপি লুপে পরীক্ষিত নোড যা দেখে k হয়ে গেলে i থেকে j এর দূরত্ব কমে কি না।'
          }
        },
        {
          term: 'diagonal-negative-cycle-audit',
          def: {
            en: 'The rule stating that if any diagonal cell dist[i][i] becomes strictly less than 0, a negative weight cycle passes through vertex i.',
            bn: 'নিয়ম যা নির্দেশ করে যে ম্যাট্রিক্সের কোনো কর্ণের মান dist[i][i] < ০ হলে নোড i এর মধ্য দিয়ে ঋণাত্মক চক্র গেছে।'
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
      id: 'shortest-path-scale-table',
      text: {
        en: 'Architectural Comparison: Single-Source vs All-Pairs Algorithms',
        bn: 'কাঠামোগত তুলনা: একক উৎস বনাম অল-পেয়ার্স অ্যালগরিদম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When architecting routing systems, engineers choose between repeating single-source algorithms versus executing all-pairs matrix formulations. Floyd-Warshall is ideal for dense networks with up to several hundred nodes, while repeated Dijkstra serves sparse networks with non-negative costs.',
        bn: 'রাউটিং সিস্টেম তৈরির সময় ইঞ্জিনিয়াররা একক উৎসের অ্যালগরিদম বারবার চালানো বনাম এককালীন অল-পেয়ার্স ম্যাট্রিক্সের মধ্যে তুলনা করেন। কয়েক শত নোডের ঘন গ্রাফের জন্য ফ্লয়েড-ওয়ার্শাল আদর্শ, যেখানে স্পার্স ধনাত্মক গ্রাফে একাধিকবার ডাইকস্ট্রা চালানো শ্রেয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Scope & Weights', bn: 'পরিধি ও ওজনের শর্ত' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'Optimal Production Domain', bn: 'উপযুক্ত বাস্তব ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Repeated Dijkstra (V times)', bn: 'একাধিকবার ডাইকস্ট্রা (V বার)' },
          { en: 'All-Pairs, non-negative weights only', bn: 'অল-পেয়ার্স, কেবল ধনাত্মক ওজন' },
          { en: 'O(V * (V + E) log V)', bn: 'O(V * (V + E) log V)' },
          { en: 'Large sparse highway networks', bn: 'বৃহৎ স্পার্স সড়ক নেটওয়ার্ক' }
        ],
        [
          { en: 'Floyd-Warshall Algorithm', bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম' },
          { en: 'All-Pairs, arbitrary weights (+/-)', bn: 'অল-পেয়ার্স, যেকোনো ওজন (+/-)' },
          { en: 'O(V^3) cubic time', bn: 'O(V^3) ত্রিঘাত সময়' },
          { en: 'Dense graphs with V <= 500 nodes', bn: 'V <= ৫০০ নোডের ঘন নেটওয়ার্ক' }
        ],
        [
          { en: 'Johnson’s Algorithm', bn: 'জনসনের অ্যালগরিদম' },
          { en: 'All-Pairs, arbitrary weights (+/-)', bn: 'অল-পেয়ার্স, যেকোনো ওজন (+/-)' },
          { en: 'O(V^2 log V + V * E)', bn: 'O(V^2 log V + V * E)' },
          { en: 'Large sparse graphs with negative weights', bn: 'ঋণাত্মক ওজনযুক্ত বৃহৎ স্পার্স গ্রাফ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-floyd-code',
      text: {
        en: 'Executable Floyd-Warshall Implementation',
        bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program executes Floyd-Warshall across 4 vertices. A direct edge exists from vertex 0 to vertex 3 with weight 10. However, the algorithm discovers the cheaper multi-hop path 0 -> 1 -> 2 -> 3 with cumulative weight 5 + 3 + 1 = 9.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি শীর্ষবিন্দুর ওপর ফ্লয়েড-ওয়ার্শাল চালায়। ০ থেকে ৩ এ সরাসরি ১০ ওজনের একটি ধার রয়েছে। তবে অ্যালগরিদমটি ৫ + ৩ + ১ = ৯ খরচের বহু-লাফের সস্তা পথ ০ -> ১ -> ২ -> ৩ খুঁজে বের করে।'
      }
    },
    {
      type: 'code',
      code: `function floydWarshall(V, edges) {
  const dist = Array.from({ length: V }, () => Array(V).fill(Infinity));

  for (let i = 0; i < V; i++) dist[i][i] = 0;

  for (const edge of edges) {
    dist[edge.u][edge.v] = edge.w;
  }

  // The 3-nested loops: mediator k MUST be outermost!
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }

  let hasNegativeCycle = false;
  for (let i = 0; i < V; i++) {
    if (dist[i][i] < 0) hasNegativeCycle = true;
  }

  return { dist, hasNegativeCycle };
}

const edges = [
  { u: 0, v: 1, w: 5 },
  { u: 0, v: 3, w: 10 },
  { u: 1, v: 2, w: 3 },
  { u: 2, v: 3, w: 1 }
];

const result = floydWarshall(4, edges);
console.log('Negative Cycle Detected:', result.hasNegativeCycle);
// Output: Negative Cycle Detected: false
console.log('Shortest path 0 -> 3 (direct 10 vs 5 + 3 + 1):', result.dist[0][3]);
// Output: Shortest path 0 -> 3 (direct 10 vs 5 + 3 + 1): 9
console.log('Shortest path 0 -> 2 (5 + 3):', result.dist[0][2]);
// Output: Shortest path 0 -> 2 (5 + 3): 8
console.log('Shortest path 1 -> 3 (3 + 1):', result.dist[1][3]);
// Output: Shortest path 1 -> 3 (3 + 1): 4`
    },
    {
      type: 'heading',
      id: 'outermost-k-loop-theorem',
      text: {
        en: 'The Mediator Induction: Why the k Loop Must Be Outermost',
        bn: 'মধ্যস্থ ইন্ডাকশন: k লুপ কেন সর্বদা বাইরে থাকবে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most infamous beginner mistake in Floyd-Warshall is placing the mediator k loop as the innermost loop instead of the outermost loop. The dynamic programming recurrence states that by the end of outer iteration k, all shortest paths using any subset of intermediate vertices from {0, 1, ..., k} are completely certified. Moving k inside violates this induction, restricting paths to single-hop detours and yielding completely incorrect distances.',
        bn: 'ফ্লয়েড-ওয়ার্শাল কোড লেখার সময় সবচেয়ে পরিচিত মারাত্মক ভুল হলো মধ্যস্থ k লুপটিকে সবচেয়ে বাইরে না রেখে ভেতরে রাখা। ডায়নামিক প্রোগ্রামিংয়ের মূল উপপাদ্য হলো: বাইরের k-তম পুনরাবৃত্তি শেষে {০, ১, ..., k} সেটের যেকোনো নোড ব্যবহার করে তৈরি হওয়া সমস্ত সর্বনিম্ন পথ চূড়ান্তভাবে প্রস্তুত হয়। k লুপকে ভেতরে ঢুকিয়ে দিলে এই নিয়ম ভেঙে যায় এবং প্রোগ্রামটি ভুল দূরত্বের ফলাফল দেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Global matrix solution: Floyd-Warshall computes optimal shortest paths between every pair of vertices in a single pass.',
          bn: 'সার্বজনীন ম্যাট্রিক্স সমাধান: ফ্লয়েড-ওয়ার্শাল মাত্র একবার চলে প্রতিটি জোড়া নোডের মধ্যকার সর্বনিম্ন পথ হিসাব করে।'
        },
        {
          en: 'Outermost mediator discipline: The k loop must remain strictly outermost to preserve the dynamic programming induction hypothesis.',
          bn: 'বাইরের মধ্যস্থ লুপের নিয়ম: ডায়নামিক প্রোগ্রামিং উপপাদ্যের সত্যতা বজায় রাখতে k লুপকে সর্বদা সবার বাইরে রাখতে হয়।'
        },
        {
          en: 'Diagonal negative cycle flag: Any diagonal entry falling below zero (dist[i][i] < 0) proves a negative weight cycle passes through i.',
          bn: 'কর্ণের ঋণাত্মক সতর্কবার্তা: ম্যাট্রিক্সের কোনো কর্ণের মান শূন্যের নিচে নামলে তা প্রমাণ করে নোড i দিয়ে ঋণাত্মক চক্র গেছে।'
        },
        {
          en: 'Cubic efficiency bound: Runs in deterministic O(V^3) time and O(V^2) memory, optimal for dense networks with up to 500 vertices.',
          bn: 'ত্রিঘাত সময় জটিলতা: কঠোরভাবে O(V^3) সময় এবং O(V^2) মেমরিতে চলে, যা ৫০০ নোড পর্যন্ত ঘন নেটওয়ার্কের জন্য সর্বোত্তম।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ep-ex1',
      kind: 'mcq',
      topic: 'floyd-warshall-loop-order',
      question: {
        en: 'In the three nested loops of the Floyd-Warshall algorithm, which loop variable MUST be placed in the outermost position?',
        bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদমের তিনটি নেস্টেড লুপের মধ্যে কোন লুপ ভ্যারিয়েবলটি অবশ্যই সবার বাইরে রাখতে হবে?'
      },
      options: [
        {
          en: 'The mediator vertex k, representing the intermediate vertex allowed on paths',
          bn: 'মধ্যস্থতাকারী নোড k, যা পথে অনুমোদিত মধ্যবর্তী নোড নির্দেশ করে'
        },
        {
          en: 'The source vertex i',
          bn: 'উৎস নোড i'
        },
        {
          en: 'The destination vertex j',
          bn: 'গন্তব্য নোড j'
        },
        {
          en: 'The loop order does not matter',
          bn: 'লুপের ক্রম কোনো প্রভাব ফেলে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The dynamic programming invariant requires certifying paths through intermediate vertices 0 through k sequentially.',
        bn: 'ডায়নামিক প্রোগ্রামিংয়ে ০ থেকে k পর্যন্ত মধ্যস্থতাকারী নোডের পথগুলো ক্রমান্বয়ে প্রস্তুত করতে হয়।'
      },
      explanation: {
        en: 'Having k outermost ensures that when calculating paths using mediator k, all optimal subpaths through mediators {0..k-1} are already finalized.',
        bn: 'k বাইরে থাকলে k ব্যবহারের সময় {০..k-১} দিয়ে তৈরি সমস্ত সর্বোত্তম উপ-পথ আগেই সম্পন্ন থাকে।'
      }
    },
    {
      id: 'ep-ex2',
      kind: 'mcq',
      topic: 'negative-cycle-diagonal-check',
      question: {
        en: 'How does the Floyd-Warshall algorithm detect that a graph contains a negative weight cycle?',
        bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদম কীভাবে শনাক্ত করে যে গ্রাফের ভেতরে একটি ঋণাত্মক ওজনের চক্র রয়েছে?'
      },
      options: [
        {
          en: 'If any diagonal entry in the distance matrix becomes negative (dist[i][i] < 0) after execution',
          bn: 'এক্সিকিউশন শেষে দূরত্ব ম্যাট্রিক্সের কোনো কর্ণের মান যদি ঋণাত্মক হয়ে যায় (dist[i][i] < ০)'
        },
        {
          en: 'If the matrix size increases to 2V x 2V',
          bn: 'যদি ম্যাট্রিক্সের আকার ২V x ২V তে বৃদ্ধি পায়'
        },
        {
          en: 'If all entries in row 0 become equal to Infinity',
          bn: 'যদি ০ নম্বর সারির সমস্ত মান অসীম হয়ে যায়'
        },
        {
          en: 'If the program terminates in O(1) time',
          bn: 'যদি প্রোগ্রামটি O(1) সময়ে শেষ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The distance from a node to itself starts at 0. What does dist[i][i] < 0 mean?',
        bn: 'নোড থেকে নিজের দূরত্ব ০ দিয়ে শুরু হয়। dist[i][i] < ০ হওয়ার অর্থ কী?'
      },
      explanation: {
        en: 'Because dist[i][i] is initialized to 0, if dist[i][i] < 0 it means traversing a cycle starting and ending at node i yields a negative total cost.',
        bn: 'যেহেতু নিজের দূরত্ব ০ থাকে, তাই dist[i][i] < ০ হওয়ার অর্থ হলো নোড i থেকে ঘুরে আবার i তে ফিরলে মোট খরচ ঋণাত্মক হয়ে যায়।'
      }
    },
    {
      id: 'ep-ex3',
      kind: 'mcq',
      topic: 'floyd-warshall-complexity',
      question: {
        en: 'What is the time complexity and space complexity of the standard Floyd-Warshall algorithm for a graph with V vertices?',
        bn: 'V শীর্ষবিন্দু বিশিষ্ট একটি গ্রাফের জন্য প্রমিত ফ্লয়েড-ওয়ার্শাল অ্যালগরিদমের সময় জটিলতা এবং স্থান জটিলতা কত?'
      },
      options: [
        {
          en: 'Time: O(V^3), Space: O(V^2)',
          bn: 'সময়: O(V^3), স্থান: O(V^2)'
        },
        {
          en: 'Time: O(V log V), Space: O(V)',
          bn: 'সময়: O(V log V), স্থান: O(V)'
        },
        {
          en: 'Time: O(V^2), Space: O(V^3)',
          bn: 'সময়: O(V^2), স্থান: O(V^3)'
        },
        {
          en: 'Time: O(E log V), Space: O(1)',
          bn: 'সময়: O(E log V), স্থান: O(1)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the three nested loops of length V, and the 2D V x V matrix.',
        bn: 'V দৈর্ঘ্যের তিনটি নেস্টেড লুপ এবং V x V দ্বি-মাত্রিক ম্যাট্রিক্সের কথা বিবেচনা করুন।'
      },
      explanation: {
        en: 'The three nested loops execute exactly V * V * V = V^3 iterations, while the distance table requires a V x V matrix of size O(V^2).',
        bn: 'তিনটি নেস্টেড লুপ ঠিক V * V * V = V^3 বার চলে এবং দূরত্বের টেবিলের জন্য O(V^2) আকারের V x V ম্যাট্রিক্স প্রয়োজন হয়।'
      }
    }
  ],
  quiz: {
    id: 'every-price-every-pair-quiz',
    title: {
      en: 'Floyd-Warshall and All-Pairs Shortest Paths Quiz',
      bn: 'ফ্লয়েড-ওয়ার্শাল এবং অল-পেয়ার্স শর্টেস্ট পাথ কুইজ'
    },
    questions: [
      {
        id: 'ep-q1',
        kind: 'mcq',
        topic: 'floyd-warshall-dp-state-meaning',
        question: {
          en: 'In the dynamic programming formulation of Floyd-Warshall, what does state dist[i][j] represent after step k?',
          bn: 'ফ্লয়েড-ওয়ার্শালের ডায়নামিক প্রোগ্রামিং গঠনে k ধাপ শেষে dist[i][j] মানটি কী প্রকাশ করে?'
        },
        options: [
          {
            en: 'The shortest path from vertex i to vertex j using only vertices from the subset {0, 1, ..., k} as intermediate stops',
            bn: 'কেবল {০, ১, ..., k} সেটের নোডগুলোকে মধ্যবর্তী বিরতি হিসেবে ব্যবহার করে নোড i থেকে j এর সর্বনিম্ন পথ'
          },
          {
            en: 'The exact number of edges between i and j',
            bn: 'i এবং j এর মধ্যকার মোট ধারের সংখ্যা'
          },
          {
            en: 'The maximum capacity flow between i and j',
            bn: 'i এবং j এর মধ্যকার সর্বোচ্চ প্রবাহ ক্ষমতা'
          },
          {
            en: 'The degree of vertex k',
            bn: 'শীর্ষবিন্দু k এর ডিগ্রি'
          }
        ],
        answer: 0,
        hint: {
          en: 'At step k, the algorithm considers whether routing through node k offers a shorter path than earlier routes.',
          bn: 'ধাপ k তে অ্যালগরিদম দেখে নোড k হয়ে গেলে পূর্ববর্তী পথের চেয়ে কোনো সংক্ষিপ্ত পথ পাওয়া যায় কি না।'
        },
        explanation: {
          en: 'The recurrence incrementally expands the allowed intermediate vertex set one vertex at a time from empty up to the entire graph.',
          bn: 'উপপাদ্যটি ক্রমান্বয়ে অনুমোদিত মধ্যবর্তী নোডের সেটকে একটি একটি করে বাড়িয়ে পুরো গ্রাফের ওপর প্রয়োগ করে।'
        }
      },
      {
        id: 'ep-q2',
        kind: 'mcq',
        topic: 'floyd-vs-repeated-dijkstra-density',
        question: {
          en: 'Why would an engineer choose Repeated Dijkstra over Floyd-Warshall on a large sparse highway graph with 10000 vertices and 30000 positive-weight edges?',
          bn: '১০০০০ নোড এবং ৩০০০০ ধনাত্মক ধারের একটি বৃহৎ স্পার্স গ্রাফে প্রকৌশলীরা ফ্লয়েড-ওয়ার্শালের বদলে কেন একাধিকবার ডাইকস্ট্রা চালানো পছন্দ করবেন?'
        },
        options: [
          {
            en: 'Repeated Dijkstra takes O(V * (V + E) log V) operations, whereas Floyd-Warshall would take a massive 10000^3 = 10^12 operations and 800 MB of RAM',
            bn: 'একাধিকবার ডাইকস্ট্রা চালালে O(V * (V + E) log V) সময় লাগে, যেখানে ফ্লয়েড-ওয়ার্শালে ১০০০০^৩ = ১০^১২ বিশাল অপারেশন ও ৮০০ মেগাবাইট র‍্যাম লাগত'
          },
          {
            en: 'Because Floyd-Warshall only runs on supercomputers',
            bn: 'কারণ ফ্লয়েড-ওয়ার্শাল কেবল সুপারকম্পিউটারে চলে'
          },
          {
            en: 'Because highway networks have negative tolls',
            bn: 'কারণ মহাসড়ক নেটওয়ার্কে ঋণাত্মক টোল থাকে'
          },
          {
            en: 'Because Dijkstra deletes unreachable nodes automatically',
            bn: 'কারণ ডাইকস্ট্রা স্বয়ংক্রিয়ভাবে অনগম্য নোড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'For V = 10,000, calculate V^3 versus V * E log V.',
          bn: 'V = ১০,০০০ এর জন্য V^3 এর সাথে V * E log V এর তুলনা করুন।'
        },
        explanation: {
          en: 'On sparse graphs (E << V^2), running Dijkstra V times is orders of magnitude faster than the fixed cubic overhead of Floyd-Warshall.',
          bn: 'স্পার্স গ্রাফে (E << V^2) V বার ডাইকস্ট্রা চালানো ফ্লয়েড-ওয়ার্শালের ত্রিঘাত খরচের চেয়ে অনেক গুণ দ্রুত কাজ করে।'
        }
      },
      {
        id: 'ep-q3',
        kind: 'mcq',
        topic: 'transitive-closure-warshall-variant',
        question: {
          en: 'What is the Transitive Closure problem (Warshall’s algorithm), and how does it relate to Floyd-Warshall?',
          bn: 'ট্রানজিটিভ ক্লোজার সমস্যা (ওয়ার্শাল অ্যালগরিদম) কী এবং ফ্লয়েড-ওয়ার্শালের সাথে এর সম্পর্ক কেমন?'
        },
        options: [
          {
            en: 'It determines boolean reachability (reach[i][j] = true/false) instead of numerical distances, replacing addition and min with boolean OR and AND',
            bn: 'এটি সংখ্যার দূরত্বের বদলে নোডের পৌঁছানোর সত্যতা (reach[i][j] = true/false) বের করে, যেখানে যোগ ও সর্বনিম্ন এর বদলে বুলিয়ান OR ও AND ব্যবহৃত হয়'
          },
          {
            en: 'It converts directed graphs into binary heaps',
            bn: 'এটি নির্দেশিত গ্রাফকে বাইনারি হিপে রূপান্তর করে'
          },
          {
            en: 'It reverses all edge directions in O(1) time',
            bn: 'এটি O(1) সময়ে সমস্ত ধারের দিক উল্টে দেয়'
          },
          {
            en: 'It encrypts database tables',
            bn: 'এটি ডেটাবেস টেবিল এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Warshall’s original 1962 algorithm was for reachability matrices; Floyd adapted it for weighted shortest paths.',
          bn: '১৯৬২ সালে ওয়ার্শালের মূল অ্যালগরিদমটি ছিল কেবল পৌঁছানো যায় কি না তা জানার জন্য; ফ্লয়েড পরে এতে ওজনযুক্ত পথ যোগ করেন।'
        },
        explanation: {
          en: 'Warshall’s algorithm applies the exact same triple-nested mediator loop over bit matrices: reach[i][j] = reach[i][j] || (reach[i][k] && reach[k][j]).',
          bn: 'ওয়ার্শাল অ্যালগরিদম ঠিক একই ট্রিপল নেস্টেড লুপ ব্যবহার করে: reach[i][j] = reach[i][j] || (reach[i][k] && reach[k][j])।'
        }
      },
      {
        id: 'ep-q4',
        kind: 'mcq',
        topic: 'path-reconstruction-floyd-warshall',
        question: {
          en: 'How can the exact intermediate path of vertices between i and j be reconstructed in the Floyd-Warshall algorithm?',
          bn: 'ফ্লয়েড-ওয়ার্শাল অ্যালগরিদমে i এবং j এর মধ্যকার সর্বনিম্ন পথের প্রতিটি নোডের সঠিক ক্রম কীভাবে পুনর্গঠন করা যায়?'
        },
        options: [
          {
            en: 'By maintaining an auxiliary next[i][j] matrix that stores the first step on the shortest path from i to j, updating next[i][j] = next[i][k] upon relaxation',
            bn: 'একটি সহায়ক next[i][j] ম্যাট্রিক্স রেখে যা i থেকে j এর পথের প্রথম ধাপটি মনে রাখে, এবং রিল্যাক্সেশনের সময় next[i][j] = next[i][k] আপডেট করে'
          },
          {
            en: 'By re-running BFS from i to j',
            bn: 'i থেকে j এর দিকে পুনরায় BFS চালিয়ে'
          },
          {
            en: 'By sorting the distance matrix in ascending order',
            bn: 'দূরত্ব ম্যাট্রিক্সকে ছোট থেকে বড় ক্রমে সাজিয়ে'
          },
          {
            en: 'Paths cannot be reconstructed in Floyd-Warshall',
            bn: 'ফ্লয়েড-ওয়ার্শালে পথ পুনর্গঠন করা সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tracking the next successor node at each relaxation allows walking from i to j step-by-step.',
          bn: 'প্রতিটি ধাপে পরবর্তী নোডটি লিখে রাখলে i থেকে j পর্যন্ত ধাপে ধাপে হেঁটে যাওয়া যায়।'
        },
        explanation: {
          en: 'A 2D next matrix records the successor vertex along the shortest path, enabling step-by-step path reconstruction in O(path length) time.',
          bn: 'একটি দ্বি-মাত্রিক next ম্যাট্রিক্স পরবর্তী নোড মনে রাখে, যা O(path length) সময়ে সম্পূর্ণ পথটি পুনর্গঠন করতে দেয়।'
        }
      }
    ]
  }
};
