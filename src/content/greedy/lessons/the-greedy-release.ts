import type { Lesson } from '../../../lib/types';

export const TheGreedyReleaseLesson: Lesson = {
  slug: 'the-greedy-release',
  tech: 'greedy',
  title: {
    en: 'When Greedy Fails: DP, Heuristics & Matroids',
    bn: 'যেখানে গ্রিডি ব্যর্থ হয়: ডিপি, হিউরিস্টিকস ও ম্যাট্রয়েড'
  },
  summary: {
    en: 'Identify the exact mathematical boundaries of greedy algorithms, explore Matroid theory, master approximation heuristics, and know when to pivot to Dynamic Programming.',
    bn: 'গ্রিডি অ্যালগরিদমের সুনির্দিষ্ট গাণিতিক সীমা চিনুন, ম্যাট্রয়েড থিওরি জানুন, অ্যাপ্রক্সিমেশন হিউরিস্টিকস বুঝুন এবং কখন ডায়নামিক প্রোগ্রামিংয়ে যেতে হবে তা নির্ধারণ করুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'the-greedy-trap',
      text: {
        en: 'The Illusion of Local Optimality',
        bn: 'স্থানীয় অপ্টিমালিটির বিভ্রম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because greedy algorithms make quick, intuitive decisions that look optimal in the short term, software engineers often mistakenly apply them to problems that require global foresight. When subproblems share state dependencies, a greedy choice in step 1 can lock the solver into a catastrophic trap later. Knowing when greedy fails is just as critical as knowing how to implement it.',
        bn: 'যেহেতু গ্রিডি অ্যালগরিদম তাৎক্ষণিকভাবে সবচেয়ে লাভজনক মনে হওয়া সিদ্ধান্ত গ্রহণ করে, তাই প্রোগ্রামাররা প্রায়ই ভুলবশত এমন জটিল সমস্যায় গ্রিডি প্রয়োগ করেন যার জন্য সামগ্রিক দূরদর্শিতা প্রয়োজন। যখন উপ-সমস্যাগুলো একে অপরের ওপর নির্ভরশীল হয়, তখন প্রথম ধাপের একটি অসাবধানী গ্রিডি সিদ্ধান্ত পরবর্তী ধাপগুলোতে চরম ক্ষতির কারণ হতে পারে। গ্রিডি কখন ব্যর্থ হয় তা জানা অ্যালগরিদমটি বাস্তবায়নের মতোই সমান গুরুত্বপূর্ণ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'matroid-theory',
          def: {
            en: 'A mathematical combinatorial structure that generalizes linear independence, providing the exact theoretical condition under which greedy algorithms are guaranteed to succeed.',
            bn: 'একটি গাণিতিক কাঠামো যা লিনিয়ার ইন্ডিপেন্ডেন্সকে সাধারণ রূপ দেয় এবং সুনির্দিষ্টভাবে নির্দেশ করে কোন পরিস্থিতিতে গ্রিডি অ্যালগরিদম নিশ্চিত সফল হবে।'
          }
        },
        {
          term: 'hereditary-property',
          def: {
            en: 'The axiom that every subset of an independent set is also independent, required for valid matroid structures.',
            bn: 'এমন একটি স্বতঃসিদ্ধ নিয়ম যা বলে যে কোনো স্বাধীন সেটের যেকোনো সাবসেটও নিশ্চিতভাবে স্বাধীন হবে।'
          }
        },
        {
          term: 'approximation-ratio',
          def: {
            en: 'A performance metric for greedy heuristics on NP-hard problems, guaranteeing the heuristic solution is within a factor alpha of the true optimum.',
            bn: 'NP-হার্ড সমস্যায় গ্রিডি হিউরিস্টিকসের জন্য একটি পরিমাপ যা নিশ্চয়তা দেয় যে সমাধানটি প্রকৃত সর্বোত্তম মানের নির্দিষ্ট গুণিতক সীমার মধ্যে থাকবে।'
          }
        },
        {
          term: 'nearest-neighbor-trap',
          def: {
            en: 'A greedy heuristic failure in the Traveling Salesperson Problem where choosing the nearest unvisited city forces an exorbitantly expensive final return edge.',
            bn: 'ট্রাভেলিং সেলসপারসন সমস্যায় গ্রিডির এমন একটি ত্রুটি যেখানে নিকটতম শহর বেছে নেওয়ার কারণে শেষ ধাপে অতিরিক্ত দীর্ঘ পথ পাড়ি দিতে হয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'greedy-failure-comparison-svg',
      title: {
        en: 'Where Greedy Fails: 0/1 Knapsack with Capacity 50',
        bn: 'যেখানে গ্রিডি ব্যর্থ হয়: ৫০ ধারণক্ষমতায় ০/১ ন্যাপস্যাক'
      },
      caption: {
        en: 'With capacity 50: Greedy density heuristic takes Item 1 and Item 2 for value 160. Optimal DP selects Item 2 paired with Item 3 to reach value 220, earning 60 more profit!',
        bn: '৫০ ধারণক্ষমতায়: গ্রিডি আইটেম ১ ও ২ নিয়ে ১৬০ মান পায়। অপ্টিমাল ডিপি আইটেম ২ ও ৩ নির্বাচন করে ২২০ মান অর্জন করে, যা ৬০ বেশি লাভ দেয়!'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="relBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="failGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#be123c" />
    </linearGradient>
    <linearGradient id="optGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#relBg)" stroke="#334155" stroke-width="2"/>

  <!-- Top Items Specification Banner -->
  <rect x="35" y="25" width="790" height="60" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="50" y="48" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">Discrete 0/1 Knapsack Items (Capacity W = 50):</text>
  <text x="50" y="68" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">Item 1: val=60, wt=10 (ratio 6.0)  |  Item 2: val=100, wt=20 (ratio 5.0)  |  Item 3: val=120, wt=30 (ratio 4.0)</text>

  <!-- Left: Greedy Decision (FAILED) -->
  <rect x="35" y="105" width="380" height="245" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="55" y="135" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#fb7185">Greedy Heuristic (Density Sort)</text>
  <text x="55" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Picks highest ratio first (Item 1, then Item 2)</text>

  <!-- Knapsack visual for Greedy -->
  <rect x="55" y="175" width="340" height="50" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <!-- Item 1: 10/50 * 340 = 68px -->
  <rect x="55" y="175" width="68" height="50" fill="#3b82f6" rx="4"/>
  <text x="89" y="205" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Item 1 (10kg)</text>
  <!-- Item 2: 20/50 * 340 = 136px -->
  <rect x="123" y="175" width="136" height="50" fill="#10b981" rx="4"/>
  <text x="191" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Item 2 (20kg)</text>
  <!-- Wasted space: 20kg (136px) -->
  <rect x="259" y="175" width="136" height="50" fill="#334155" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4 2" rx="4"/>
  <text x="327" y="205" font-family="system-ui, sans-serif" font-size="11" fill="#fca5a5" text-anchor="middle">20kg Unusable Waste!</text>

  <!-- Greedy Stats -->
  <text x="55" y="260" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Weight Used: 10 + 20 = 30 kg (20 kg empty)</text>
  <text x="55" y="285" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#f43f5e">Greedy Value: 60 + 100 = 160</text>
  <text x="55" y="310" font-family="system-ui, sans-serif" font-size="11" fill="#fca5a5">Cannot fit Item 3 (30kg > 20kg remaining)!</text>

  <!-- Right: DP Optimal Decision (SUCCESS) -->
  <rect x="445" y="105" width="380" height="245" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="465" y="135" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">Dynamic Programming (Optimal)</text>
  <text x="465" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Evaluates subproblems (Picks Item 2 and Item 3)</text>

  <!-- Knapsack visual for DP -->
  <rect x="465" y="175" width="340" height="50" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <!-- Item 2: 20/50 * 340 = 136px -->
  <rect x="465" y="175" width="136" height="50" fill="#10b981" rx="4"/>
  <text x="533" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Item 2 (20kg)</text>
  <!-- Item 3: 30/50 * 340 = 204px -->
  <rect x="601" y="175" width="204" height="50" fill="#f59e0b" rx="4"/>
  <text x="703" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Item 3 (30kg)</text>

  <!-- DP Stats -->
  <text x="465" y="260" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">Weight Used: 20 + 30 = 50 kg (100% full)</text>
  <text x="465" y="285" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#34d399">Optimal Value: 100 + 120 = 220</text>
  <text x="465" y="310" font-family="system-ui, sans-serif" font-size="11" fill="#34d399">Difference: DP achieves +60 higher value than Greedy!</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'the-three-classic-greedy-traps',
      text: {
        en: 'The 3 Classic Greedy Traps in Production',
        bn: 'প্রোডাকশনে ৩টি প্রচলিত গ্রিডি ফাঁদ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Problem Domain', bn: 'সমস্যার ক্ষেত্র' },
        { en: 'Naive Greedy Heuristic', bn: 'সহজিয়া গ্রিডি কৌশল' },
        { en: 'Failure Mechanism', bn: 'ব্যর্থতার অন্তর্নিহিত কারণ' },
        { en: 'Correct Algorithm', bn: 'সঠিক অ্যালগরিদম' }
      ],
      rows: [
        [
          { en: '0/1 Knapsack', bn: '০/১ ন্যাপস্যাক' },
          { en: 'Pick highest value-to-weight density first', bn: 'বেশি ভ্যালু-টু-ওয়েট ঘনত্বের আইটেম আগে নেওয়া' },
          { en: 'Leaves unusable dead capacity that could fit paired items', bn: 'অব্যবহৃত জায়গা ফেলে রাখে যা যৌথ আইটেম দিয়ে পূর্ণ হতো' },
          { en: 'Dynamic Programming: O(N * W)', bn: 'ডায়নামিক প্রোগ্রামিং: O(N * W)' }
        ],
        [
          { en: 'Traveling Salesperson (TSP)', bn: 'ট্রাভেলিং সেলসপারসন (TSP)' },
          { en: 'Nearest Neighbor: visit closest unvisited city', bn: 'নিকটতম প্রতিবেশী: সবচেয়ে কাছের শহরে যাওয়া' },
          { en: 'Paints solver into a corner; forces catastrophic long final leg', bn: 'কোণঠাসা করে ফেলে; শেষ ধাপে অতি দীর্ঘ ফিরতি পথ বাধ্য করে' },
          { en: 'Held-Karp DP: O(N^2 * 2^N) or Christofides', bn: 'হেল্ড-কার্প ডিপি বা ক্রিস্টোফাইডস' }
        ],
        [
          { en: 'Graph Longest Simple Path', bn: 'গ্রাফের দীর্ঘতম সাধারণ পথ' },
          { en: 'Greedily select the heaviest available edge', bn: 'সবচেয়ে ভারী এজটি বেছে নেওয়া' },
          { en: 'Early heavy edge cuts off access to large clusters', bn: 'শুরুর ভারী এজ বড় নোড ক্লাস্টারে যাওয়ার পথ বন্ধ করে' },
          { en: 'NP-hard: Dynamic programming on DAGs or Backtracking', bn: 'এনপি-হার্ড: DAG-তে ডিপি বা ব্যাকট্র্যাকিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'rado-edmonds-matroid-theorem',
      text: {
        en: 'Matroid Theory: The Rado-Edmonds Theorem',
        bn: 'ম্যাট্রয়েড থিওরি: রাডো-এডমন্ডস উপপাদ্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In mathematics, a Matroid M = (E, I) is a combinatorial system consisting of a ground set E and a family I of independent subsets. A system is a matroid when it satisfies two core conditions: the Hereditary Property and the Exchange Property. The foundational Rado-Edmonds Theorem states that a greedy algorithm finds the optimal maximum-weight independent set for every linear weight function if and only if the underlying structure is a matroid. This explains why Kruskal and Prim succeed on spanning trees (Graphic Matroids), while 0/1 Knapsack fails.',
        bn: 'গণিতে একটি ম্যাট্রয়েড M = (E, I) হলো এমন একটি ব্যবস্থা যা একটি সীমাবদ্ধ সেট E এবং তার কিছু স্বাধীন সাবসেটের পরিবার I নিয়ে গঠিত। একটি সিস্টেম ম্যাট্রয়েড হয় যখন এটি দুটি মৌলিক শর্ত পূরণ করে: বংশগত নিয়ম এবং বিনিময় নিয়ম। বিখ্যাত রাডো-এডমন্ডস উপপাদ্য প্রমাণ করে যে একটি গ্রিডি অ্যালগরিদম যেকোনো রৈখিক ওজনে কেবল এবং কেবল তখনই সর্বোত্তম সমাধান দিতে পারে যদি সিস্টেমটি একটি ম্যাট্রয়েড হয়। এটি ব্যাখ্যা করে কেন ক্রুশকাল ও প্রিম গ্রাফ ট্রিতে (গ্রাফিক ম্যাট্রয়েড) সফল হয়, কিন্তু ০/১ ন্যাপস্যাক ব্যর্থ হয়।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-knapsack-contrast-ts',
      text: {
        en: 'Runnable TypeScript: 0/1 Knapsack Greedy Heuristic vs 2D DP',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ০/১ ন্যাপস্যাক গ্রিডি হিউরিস্টিক বনাম ২ডি ডিপি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Demonstrating greedy failure on 3 items with capacity 50: greedy achieves 160, while 2D DP finds optimal 220.',
        bn: '৫০ ধারণক্ষমতায় ৩টি আইটেমে গ্রিডির ব্যর্থতা: গ্রিডি পায় ১৬০, যেখানে ২ডি ডিপি অপ্টিমাল ২২০ অর্জন করে।'
      },
      code: `interface DiscreteItem {
  id: string;
  value: number;
  weight: number;
}

// 1. Naive Greedy Heuristic (Sort by value density)
function greedyKnapsack01(items: DiscreteItem[], capacity: number): { value: number; weight: number; items: string[] } {
  const sorted = [...items].sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
  let totalVal = 0;
  let totalWt = 0;
  const taken: string[] = [];

  for (const item of sorted) {
    if (totalWt + item.weight <= capacity) {
      taken.push(item.id);
      totalVal += item.value;
      totalWt += item.weight;
    }
  }

  return { value: totalVal, weight: totalWt, items: taken };
}

// 2. Optimal 2D Dynamic Programming
function dpKnapsack01(items: DiscreteItem[], capacity: number): { value: number; weight: number; items: string[] } {
  const n = items.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const item = items[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (item.weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - item.weight] + item.value);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Backtrack to find selected items
  const taken: string[] = [];
  let w = capacity;
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      const item = items[i - 1];
      taken.push(item.id);
      w -= item.weight;
    }
  }

  return { value: dp[n][capacity], weight: capacity - w, items: taken.reverse() };
}

// 3 Items: Item 1 (60, 10), Item 2 (100, 20), Item 3 (120, 30)
const items: DiscreteItem[] = [
  { id: 'Item-1', value: 60, weight: 10 },  // density 6.0
  { id: 'Item-2', value: 100, weight: 20 }, // density 5.0
  { id: 'Item-3', value: 120, weight: 30 }  // density 4.0
];

const knapsackCap = 50;
const greedySol = greedyKnapsack01(items, knapsackCap);
const dpSol = dpKnapsack01(items, knapsackCap);

console.log('Greedy 0/1 Knapsack Value:', greedySol.value); // 160 (Items: Item-1, Item-2)
console.log('Greedy Weight Used:', greedySol.weight); // 30 (20kg wasted)

console.log('Optimal DP Knapsack Value:', dpSol.value); // 220 (Items: Item-2, Item-3)
console.log('DP Weight Used:', dpSol.weight); // 50 (100% packed)

console.log('Value lost by Greedy:', dpSol.value - greedySol.value); // 60
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'The Rado-Edmonds theorem and greedy exchange proofs provide the rigorous bridge from greedy algorithms to Dynamic Programming. When a problem fails the greedy choice property, dynamic programming systematically explores overlapping subproblems without getting trapped in local extrema.',
        bn: 'রাডো-এডমন্ডস উপপাদ্য এবং এক্সচেঞ্জ প্রমাণ গ্রিডি অ্যালগরিদম থেকে ডায়নামিক প্রোগ্রামিংয়ে রূপান্তরের তাত্ত্বিক সেতুবন্ধন তৈরি করে। সমস্যায় গ্রিডি চয়েস বৈশিষ্ট্য না থাকলে লোকাল ফাঁদে না আটকে সঠিক সমাধানের জন্য ডায়নামিক প্রোগ্রামিং ব্যবহার করাই নির্ভরযোগ্য প্রকৌশল সিদ্ধান্ত।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-rel-ex-1',
      kind: 'mcq',
      topic: 'knapsack-greedy-vs-dp-failure',
      question: {
        en: 'In our 0/1 knapsack benchmark with capacity 50, how much total value did the greedy density heuristic achieve versus the optimal DP solution?',
        bn: '৫০ ধারণক্ষমতার ০/১ ন্যাপস্যাক বেঞ্চমার্কে অপ্টিমাল ডিপি সমাধানের তুলনায় গ্রিডি ডেনসিটি হিউরিস্টিক কত মোট মান অর্জন করেছিল?'
      },
      options: [
        {
          en: 'Greedy achieved 160, whereas optimal DP achieved 220 (a deficit of 60)',
          bn: 'গ্রিডি পেয়েছিল ১৬০, যেখানে অপ্টিমাল ডিপি পেয়েছিল ২২০ (৬০ মানের ঘাটতি)'
        },
        {
          en: 'Both achieved 240',
          bn: 'উভয়ই ২৪০ অর্জন করেছিল'
        },
        {
          en: 'Greedy achieved 300, whereas DP achieved 100',
          bn: 'গ্রিডি ৩০০ পেয়েছিল, যেখানে ডিপি পেয়েছিল ১০০'
        },
        {
          en: 'Greedy achieved 0 due to an exception',
          bn: 'এক্সেপশনের কারণে গ্রিডি ০ পেয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Greedy took Item 1 + Item 2 = 160; DP took Item 2 + Item 3 = 220.',
        bn: 'গ্রিডি আইটেম ১ + আইটেম ২ = ১৬০ নেয়; ডিপি আইটেম ২ + আইটেম ৩ = ২২০ নেয়।'
      },
      explanation: {
        en: 'Greedy packed items with density 6 and 5 (weight 30, value 160), leaving 20kg unused. DP chose items with weight 20 and 30 (weight 50, value 220), gaining 60 more profit.',
        bn: 'গ্রিডি ঘনত্ব ৬ ও ৫ এর আইটেম নিয়ে ৩০ কেজি ভরে ১৬০ লাভ পায়, ২০ কেজি খালি থাকে। ডিপি ২০ ও ৩০ কেজির আইটেম নিয়ে পুরো ৫০ কেজি পূর্ণ করে ২২০ লাভ পায়, যা ৬০ বেশি।'
      }
    },
    {
      id: 'grd-rel-ex-2',
      kind: 'mcq',
      topic: 'rado-edmonds-theorem-core',
      question: {
        en: 'What fundamental mathematical result does the Rado-Edmonds Theorem establish regarding greedy algorithms?',
        bn: 'গ্রিডি অ্যালগরিদম সম্পর্কে রাডো-এডমন্ডস উপপাদ্য কোন মৌলিক গাণিতিক সিদ্ধান্ত প্রতিষ্ঠা করে?'
      },
      options: [
        {
          en: 'A greedy algorithm is guaranteed to find the globally optimal solution on an independent system for all weight functions if and only if the system is a Matroid',
          bn: 'একটি গ্রিডি অ্যালগরিদম যেকোনো ওজন ফাংশনে একটি স্বাধীন সিস্টেমে সর্বত্র সর্বোত্তম সমাধান দেবে কেবল এবং কেবল তখনই যদি সিস্টেমটি একটি ম্যাট্রয়েড হয়'
        },
        {
          en: 'All recursive functions consume zero stack memory',
          bn: 'সমস্ত রিকার্সিভ ফাংশন শূন্য স্ট্যাক মেমরি খরচ করে'
        },
        {
          en: 'Sorting numbers in JavaScript always takes O(1) time',
          bn: 'জাভাস্ক্রিপ্টে সংখ্যা সাজাতে সর্বদা O(1) সময় লাগে'
        },
        {
          en: 'Graphs with negative edges are forbidden by law',
          bn: 'ঋণাত্মক এজের গ্রাফ আইনত নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Matroids provide the exact algebraic condition for greedy optimality.',
        bn: 'ম্যাট্রয়েড গ্রিডি অপ্টিমালিটির সুনির্দিষ্ট বীজগণিতীয় শর্ত নির্দেশ করে।'
      },
      explanation: {
        en: 'The Rado-Edmonds Theorem proves an exact equivalence: greedy algorithms work universally across all linear weights if and only if the combinatorial structure forms a matroid.',
        bn: 'রাডো-এডমন্ডস উপপাদ্য প্রমাণ করে যে গ্রিডি অ্যালগরিদম সব রৈখিক ওজনে সর্বজনীনভাবে কাজ করবে কেবল এবং কেবল তখনই যদি কাঠামোটি একটি ম্যাট্রয়েড গঠন করে।'
      }
    },
    {
      id: 'grd-rel-ex-3',
      kind: 'mcq',
      topic: 'tsp-nearest-neighbor-defect',
      question: {
        en: 'Why is the Nearest Neighbor greedy heuristic flawed for the Traveling Salesperson Problem (TSP)?',
        bn: 'ট্রাভেলিং সেলসপারসন সমস্যায় (TSP) নিকটতম প্রতিবেশী (Nearest Neighbor) গ্রিডি কৌশল কেন ত্রুটিপূর্ণ?'
      },
      options: [
        {
          en: 'Greedily jumping to nearby cities can force the algorithm into a corner where the final remaining unvisited cities require an extraordinarily long and expensive return route',
          bn: 'নিকটের শহরে লাফিয়ে চলতে গিয়ে অ্যালগরিদম কোণঠাসা হয়ে পড়ে, যার ফলে শেষ বাকি থাকা শহরে ও শুরুতে ফিরতে অস্বাভাবিক দীর্ঘ ও ব্যয়বহুল পথ তৈরি হয়'
        },
        {
          en: 'Because cities cannot be placed on geographic maps',
          bn: 'কারণ শহরগুলোকে ভৌগোলিক মানচিত্রে বসানো যায় না'
        },
        {
          en: 'Because distances between cities are always negative',
          bn: 'কারণ শহরের দূরত্বগুলো সর্বদা ঋণাত্মক হয়'
        },
        {
          en: 'Because nearest neighbor uses too many floating point multiplications',
          bn: 'কারণ নিকটতম প্রতিবেশী অতিরিক্ত ফ্লোটিং পয়েন্ট গুণ ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Short-sighted local moves leave catastrophic long edges at the end.',
        bn: 'নিকটবর্তী লাভের সিদ্ধান্তের কারণে শেষ ধাপে মারাত্মক দীর্ঘ এজ তৈরি হয়।'
      },
      explanation: {
        en: 'Nearest neighbor makes short-sighted choices. By exhausting all nearby cities first, the tour is eventually forced to take an exorbitant traversal across the entire map to complete the cycle.',
        bn: 'নিকটতম প্রতিবেশী কেবল সাময়িক দূরত্ব দেখে। কাছের শহরগুলো আগে শেষ করে ফেললে পরবর্তীতে পুরো মানচিত্রের অপর প্রান্তে ফিরতে চরম দীর্ঘ পথ পাড়ি দিতে হয়।'
      }
    },
    {
      id: 'grd-rel-ex-4',
      kind: 'mcq',
      topic: 'when-to-pivot-to-dp',
      question: {
        en: 'Which indicator strongly signals that an engineering problem requires Dynamic Programming rather than a Greedy heuristic?',
        bn: 'কোন লক্ষণটি জোরালোভাবে নির্দেশ করে যে একটি ইঞ্জিনিয়ারিং সমস্যা সমাধানের জন্য গ্রিডির বদলে ডায়নামিক প্রোগ্রামিং প্রয়োজন?'
      },
      options: [
        {
          en: 'Choices made in early stages restrict or alter the feasibility and optimality of subsequent decisions, creating overlapping subproblems',
          bn: 'প্রাথমিক ধাপের সিদ্ধান্তগুলো পরবর্তী সিদ্ধান্তের কার্যকারিতা ও অপ্টিমালিটিকে সীমাবদ্ধ বা পরিবর্তিত করে, যা ওভারল্যাপিং সাব-প্রবলেম তৈরি করে'
        },
        {
          en: 'The code needs to run on mobile smartphones',
          bn: 'কোডটি মোবাইল স্মার্টফোনে চালানোর প্রয়োজন'
        },
        {
          en: 'The array has fewer than 10 elements',
          bn: 'অ্যারেতে ১০টির কম উপাদান রয়েছে'
        },
        {
          en: 'The function returns a boolean true or false',
          bn: 'ফাংশনটি বুলিয়ান ট্রু বা ফলস রিটার্ন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If an early choice invalidates future possibilities, you need DP.',
        bn: 'শুরুর সিদ্ধান্ত যদি ভবিষ্যতের সুযোগকে ক্ষতিগ্রস্ত করে, তবে ডিপি দরকার।'
      },
      explanation: {
        en: 'When subproblems share state dependencies and future trade-offs depend on earlier choices, greedy choices miss the global optimum. Dynamic programming systematically evaluates all paths.',
        bn: 'যখন সাব-প্রবলেমগুলো নির্ভরশীল হয় এবং ভবিষ্যতের লাভ-ক্ষতি অতীতের পছন্দের ওপর নির্ভর করে, তখন গ্রিডি সেরা সমাধান মিস করে। তখন সব পথ যাচাই করতে ডায়নামিক প্রোগ্রামিং দরকার।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Limits of Greedy & Algorithm Selection Quiz',
      bn: 'গ্রিডির সীমাবদ্ধতা ও অ্যালগরিদম নির্বাচন কুইজ'
    },
    questions: [
      {
        id: 'grd-rel-qz-1',
        kind: 'mcq',
        topic: 'approximation-ratio-definition',
        question: {
          en: 'What does it mean if a greedy heuristic algorithm has an approximation ratio of 2 for a minimization problem?',
          bn: 'একটি মিনিমাইজেশন সমস্যায় একটি গ্রিডি হিউরিস্টিক অ্যালগরিদমের অ্যাপ্রক্সিমেশন রেশিও ২ হওয়ার অর্থ কী?'
        },
        options: [
          {
            en: 'The cost of the solution produced by the algorithm is mathematically guaranteed to be at most 2 times the true optimal cost (Cost <= 2 * OPT)',
            bn: 'অ্যালগরিদমের তৈরি সমাধানের খরচ গাণিতিকভাবে নিশ্চিত যে প্রকৃত সর্বোত্তম খরচের সর্বোচ্চ ২ গুণ হবে (খরচ <= ২ * OPT)'
          },
          {
            en: 'The algorithm executes in exactly 2 milliseconds',
            bn: 'অ্যালগরিদমটি ঠিক ২ মিলিসেকেন্ডে সম্পন্ন হয়'
          },
          {
            en: 'The algorithm requires 2 gigabytes of RAM memory',
            bn: 'অ্যালগরিদম চালাতে ২ গিগাবাইট র‍্যাম মেমরি লাগে'
          },
          {
            en: 'The algorithm only works on graphs with 2 vertices',
            bn: 'অ্যালগরিদমটি কেবল ২টি শীর্ষবিন্দুর গ্রাফেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'An approximation ratio bounds the error relative to the optimal solution.',
          bn: 'অ্যাপ্রক্সিমেশন রেশিও অপ্টিমাল সমাধানের সাপেক্ষে ভুলের সর্বোচ্চ সীমা বেঁধে দেয়।'
        },
        explanation: {
          en: 'For minimization problems, an alpha-approximation guarantees that heuristic_cost <= alpha * OPT. A ratio of 2 guarantees the answer is never worse than double the theoretical optimum.',
          bn: 'মিনিমাইজেশন সমস্যায় alpha-অ্যাপ্রক্সিমেশন নিশ্চিত করে যে খরচ <= alpha * OPT। ২ অনুপাতের অর্থ হলো উত্তর কখনোই তাত্ত্বিক অপ্টিমালের দ্বিগুণের চেয়ে খারাপ হবে না।'
        }
      },
      {
        id: 'grd-rel-qz-2',
        kind: 'mcq',
        topic: 'vertex-cover-greedy-approximation',
        question: {
          en: 'How does the standard 2-approximation greedy algorithm for Minimum Vertex Cover operate?',
          bn: 'মিনিমাম ভার্টেক্স কভারের জন্য সাধারণ ২-অ্যাপ্রক্সিমেশন গ্রিডি অ্যালগরিদম কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'Pick an arbitrary edge (u, v), add both endpoints u and v to the cover, remove all edges incident to u or v, and repeat until no edges remain',
            bn: 'যেকোনো একটি এজ (u, v) বেছে নিয়ে উভয় প্রান্ত u ও v-কে কভারে যোগ করুন, তাদের সাথে যুক্ত সমস্ত এজ মুছে দিন এবং এজ শেষ না হওয়া পর্যন্ত পুনরাবৃত্তি করুন'
          },
          {
            en: 'Pick only the vertex with the lowest degree',
            bn: 'কেবল সর্বনিম্ন ডিগ্রির শীর্ষবিন্দুটি নির্বাচন করুন'
          },
          {
            en: 'Sort all vertices by name alphabetically',
            bn: 'নামের বর্ণানুক্রমিক ক্রমে সমস্ত শীর্ষবিন্দু সাজান'
          },
          {
            en: 'Delete all odd-numbered vertices from memory',
            bn: 'মেমরি থেকে বিজোড় সংখ্যার সমস্ত শীর্ষবিন্দু মুছে ফেলুন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Adding both endpoints of an edge guarantees a 2-approximation.',
          bn: 'একটি এজের উভয় প্রান্ত যোগ করলে নিশ্চিত ২-অ্যাপ্রক্সিমেশন পাওয়া যায়।'
        },
        explanation: {
          en: 'Because any valid vertex cover must include at least one endpoint of edge (u, v), taking both endpoints adds at most 2 vertices where OPT must add at least 1, yielding a 2-approximation.',
          bn: 'যেহেতু যেকোনো বৈধ কভারে এজ (u, v)-এর অন্তত একটি প্রান্ত থাকতেই হবে, তাই উভয় প্রান্ত নিলে OPT-এর ১টির বিপরীতে সর্বোচ্চ ২টি শীর্ষবিন্দু যোগ হয়, যা ২-অ্যাপ্রক্সিমেশন নিশ্চিত করে।'
        }
      },
      {
        id: 'grd-rel-qz-3',
        kind: 'mcq',
        topic: 'huffman-vs-shannon-fano',
        question: {
          en: 'Why did David Huffman greedy bottom-up algorithm supersede the earlier top-down Shannon-Fano coding scheme?',
          bn: 'ডেভিড হাফম্যানের গ্রিডি বটম-আপ অ্যালগরিদম কেন পূর্ববর্তী টপ-ডাউন শ্যানন-ফ্যানো কোডিংকে বাতিল ও প্রতিস্থাপিত করেছিল?'
        },
        options: [
          {
            en: 'Shannon-Fano top-down greedy partitioning can produce suboptimal prefix trees, whereas Huffman bottom-up merge is mathematically proven always to yield the optimal prefix code',
            bn: 'শ্যানন-ফ্যানোর টপ-ডাউন গ্রিডি বিভাজন সাব-অপ্টিমাল ট্রি তৈরি করতে পারে, যেখানে হাফম্যানের বটম-আপ একত্রীকরণ সর্বদা অপ্টিমাল প্রিফিক্স কোড দেওয়ার জন্য গাণিতিকভাবে প্রমাণিত'
          },
          {
            en: 'Shannon-Fano coding required specialized quantum hardware',
            bn: 'শ্যানন-ফ্যানো কোডিংয়ে বিশেষ কোয়ান্টাম হার্ডওয়্যার দরকার হতো'
          },
          {
            en: 'Huffman coding only works on English vowels',
            bn: 'হাফম্যান কোডিং কেবল ইংরেজি স্বরবর্ণে কাজ করে'
          },
          {
            en: 'Because Shannon-Fano code files could not be saved to disk',
            bn: 'কারণ শ্যানন-ফ্যানো কোড ফাইল ডিস্কে সেভ করা যেত না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Top-down splitting does not always find the optimal binary division.',
          bn: 'টপ-ডাউন বিভাজন সর্বদা নিখুঁত বাইনারি ভাগ খুঁজে পায় না।'
        },
        explanation: {
          en: 'Shannon-Fano splits symbol sets top-down by equal probabilities, which often misses the optimal prefix tree. Huffman builds bottom-up by merging the two least frequent nodes, guaranteeing optimality.',
          bn: 'শ্যানন-ফ্যানো ওপর থেকে নিচে সমান সম্ভাবনায় ভাগ করে যা প্রায়ই অপ্টিমাল ট্রি মিস করে। হাফম্যান নিচ থেকে ওপরে সর্বনিম্ন দুটি নোড মিলিয়ে কাজ করে সর্বদা গাণিতিকভাবে নিখুঁত ফলাফল দেয়।'
        }
      },
      {
        id: 'grd-rel-qz-4',
        kind: 'mcq',
        topic: 'complete-algorithm-triad-transition',
        question: {
          en: 'How do the algorithmic paradigms of Recursion, Greedy Algorithms, and Dynamic Programming fit together in production problem solving?',
          bn: 'প্রোডাকশনে সমস্যা সমাধানের ক্ষেত্রে রিকার্শন, গ্রিডি অ্যালগরিদম এবং ডায়নামিক প্রোগ্রামিং কীভাবে একে অপরের সাথে সমন্বিত হয়?'
        },
        options: [
          {
            en: 'Recursion defines self-referential subproblem structure; Greedy makes fast irrevocable choices when subproblems are independent; DP caches overlapping subproblems when choices interact',
            bn: 'রিকার্শন উপ-সমস্যার কাঠামো তৈরি করে; গ্রিডি স্বাধীন উপ-সমস্যায় দ্রুত অপরিবর্তনীয় সিদ্ধান্ত নেয়; আর পছন্দগুলো পরস্পর নির্ভরশীল হলে ডিপি ওভারল্যাপিং উপ-সমস্যা ক্যাশ করে'
          },
          {
            en: 'All three paradigms are identical and produce identical machine code',
            bn: 'তিনটি পদ্ধতিই অভিন্ন এবং একই মেশিন কোড তৈরি করে'
          },
          {
            en: 'Greedy algorithms are only used for graphic design applications',
            bn: 'গ্রিডি অ্যালগরিদম কেবল গ্রাফিক ডিজাইনের কাজে ব্যবহৃত হয়'
          },
          {
            en: 'Dynamic programming is deprecated in modern programming languages',
            bn: 'আধুনিক প্রোগ্রামিং ভাষায় ডায়নামিক প্রোগ্রামিং বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'They form the core triad of algorithm design: structural division, local choice, and state caching.',
          bn: 'তারা অ্যালগরিদম ডিজাইনের মূল ভিত্তি: কাঠামোগত বিভাজন, স্থানীয় পছন্দ এবং স্টেট ক্যাশিং।'
        },
        explanation: {
          en: 'Recursion provides decomposition. When optimal substructure and greedy choice property hold, greedy executes in O(N log N). When subproblems overlap and greedy fails, DP provides polynomial memoization.',
          bn: 'রিকার্শন সমস্যাকে ভাঙে। গ্রিডি চয়েস বৈশিষ্ট্য থাকলে গ্রিডি O(N log N)-এ দ্রুত কাজ শেষ করে। আর গ্রিডি ব্যর্থ হলে ডায়নামিক প্রোগ্রামিং মেমোইজেশন ব্যবহার করে নির্ভুল সমাধান নিশ্চিত করে।'
        }
      }
    ]
  }
};
