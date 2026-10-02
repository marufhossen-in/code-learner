import type { Lesson } from '../../../lib/types';

export const TheDynamicReleaseLesson: Lesson = {
  slug: 'the-dynamic-release',
  tech: 'dynamic-programming',
  title: {
    en: 'Mastering Dynamic Programming: Bitmask DP, Tree DP, and System Architecture',
    bn: 'ডাইনামিক প্রোগ্রামিং সমাপ্তি: বিটমাস্ক ডিপি, ট্রি ডিপি এবং সিস্টেম আর্কিটেকচার'
  },
  summary: {
    en: 'Synthesize the entire Dynamic Programming landscape: solve NP-hard routing with Bitmask DP in O(N^2 * 2^N), optimize hierarchical graphs with Tree DP in O(N), and apply the 5-step DP decision framework in production systems.',
    bn: 'পুরো ডাইনামিক প্রোগ্রামিং প্ল্যাটফর্মের সমন্বয়: O(N^2 * 2^N) সময়ে বিটমাস্ক ডিপি দিয়ে কঠিন ট্রাভেলিং সেলসপারসন সমস্যা সমাধান, O(N) সময়ে ট্রি ডিপি এবং প্রোডাকশন সিস্টেমে ৫ ধাপের ডিপি সিদ্ধান্ত কাঠামোর প্রয়োগ।'
  },
  minutes: 38,
  blocks: [
    {
      type: 'heading',
      id: 'spectrum',
      text: {
        en: 'The Master Dynamic Programming Taxonomy: 1D to Exponential State Space',
        bn: 'ডাইনামিক প্রোগ্রামিংয়ের পূর্ণাঙ্গ শ্রেণিবিভাগ: ১ডি থেকে এক্সপোনেনশিয়াল স্টেট স্পেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dynamic Programming is not a single algorithm but a design paradigm. Over the previous 7 lessons, we advanced from linear recurrence to multidimensional matrices and intervals. At the professional summit, DP branches into 2 high-order structures: Bitmask DP for exponential subset selection, and Tree DP for directed hierarchical subproblems.',
        bn: 'ডাইনামিক প্রোগ্রামিং কোনো একক অ্যালগরিদম নয়, এটি একটি ডিজাইন প্যারাডাইম। পূর্ববর্তী ৭টি পাঠে আমরা সরল ১ডি রিকারেন্স থেকে বহুমাত্রিক ম্যাট্রিক্স এবং ইন্টারভ্যাল ডিপি দেখেছি। পেশাদার শীর্ষস্থানে ডিপি প্রধানত ২টি উচ্চস্তরের শাখায় বিস্তৃত হয়: সাবসেট কম্প্রেশনের জন্য বিটমাস্ক ডিপি (Bitmask DP), এবং হায়ারারকিকাল কাঠামোর জন্য ট্রি ডিপি (Tree DP)।'
      }
    },
    {
      type: 'visual',
      id: 'dp-taxonomy-diagram',
      caption: {
        en: 'Figure 1: The 5 core families of Dynamic Programming, state representations, and space optimizations.',
        bn: 'চিত্র ১: ডাইনামিক প্রোগ্রামিংয়ের ৫টি মূল পরিবার, তাদের স্টেট বিন্যাস এবং মেমোরি অপ্টিমাইজেশন।'
      },
      content: `<svg viewBox="0 0 860 380" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="860" height="380" rx="12" fill="#0f172a" />
  <text x="430" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">THE DYNAMIC PROGRAMMING SPECTRUM</text>
  
  <!-- 1D Linear -->
  <g transform="translate(30, 60)">
    <rect width="145" height="280" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="36" rx="8" fill="#0284c7" />
    <text x="72" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Linear (1D)</text>
    <text x="15" y="70" fill="#94a3b8" font-size="11" font-family="monospace">States: dp[i]</text>
    <text x="15" y="95" fill="#38bdf8" font-size="11" font-family="sans-serif">Space: O(N) -> O(1)</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Fibonacci (30)</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="11" font-family="sans-serif">• House Robber</text>
    <text x="15" y="175" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Climbing Stairs</text>
    <rect x="12" y="220" width="121" height="45" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="72" y="240" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">prev1, prev2</text>
    <text x="72" y="255" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">rolling scalars</text>
  </g>

  <!-- 2D Grid / Sequence -->
  <g transform="translate(195, 60)">
    <rect width="145" height="280" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="2" />
    <rect width="145" height="36" rx="8" fill="#4f46e5" />
    <text x="72" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Grid & 2D</text>
    <text x="15" y="70" fill="#94a3b8" font-size="11" font-family="monospace">States: dp[i][w]</text>
    <text x="15" y="95" fill="#818cf8" font-size="11" font-family="sans-serif">Space: O(N*W) -> O(W)</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="11" font-family="sans-serif">• 0/1 Knapsack</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="11" font-family="sans-serif">• LCS / Edit Dist</text>
    <text x="15" y="175" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Unique Paths (3x3)</text>
    <rect x="12" y="220" width="121" height="45" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="72" y="240" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">dp[col] reverse</text>
    <text x="72" y="255" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">1D rolling buffer</text>
  </g>

  <!-- Interval DP -->
  <g transform="translate(360, 60)">
    <rect width="145" height="280" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="36" rx="8" fill="#d97706" />
    <text x="72" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Interval DP</text>
    <text x="15" y="70" fill="#94a3b8" font-size="11" font-family="monospace">States: dp[i][j]</text>
    <text x="15" y="95" fill="#f59e0b" font-size="11" font-family="sans-serif">Complexity: O(N^3)</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Matrix Chain</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Burst Balloons</text>
    <text x="15" y="175" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Palindrome Split</text>
    <rect x="12" y="220" width="121" height="45" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="72" y="240" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">length: 2 to N</text>
    <text x="72" y="255" fill="#fbbf24" font-size="9" font-family="monospace" text-anchor="middle">diagonal scan</text>
  </g>

  <!-- Tree DP -->
  <g transform="translate(525, 60)">
    <rect width="145" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="36" rx="8" fill="#059669" />
    <text x="72" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Tree DP</text>
    <text x="15" y="70" fill="#94a3b8" font-size="11" font-family="monospace">States: dp(u, flag)</text>
    <text x="15" y="95" fill="#10b981" font-size="11" font-family="sans-serif">Complexity: O(N)</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Tree Robber</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Tree Diameter</text>
    <text x="15" y="175" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Subtree Sizes</text>
    <rect x="12" y="220" width="121" height="45" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="72" y="240" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">Post-order DFS</text>
    <text x="72" y="255" fill="#34d399" font-size="9" font-family="monospace" text-anchor="middle">children -> parent</text>
  </g>

  <!-- Bitmask DP -->
  <g transform="translate(690, 60)">
    <rect width="145" height="280" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="145" height="36" rx="8" fill="#db2777" />
    <text x="72" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Bitmask DP</text>
    <text x="15" y="70" fill="#94a3b8" font-size="11" font-family="monospace">dp[mask][u]</text>
    <text x="15" y="95" fill="#ec4899" font-size="11" font-family="sans-serif">O(N^2 * 2^N)</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="11" font-family="sans-serif">• TSP Routing</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Job Assignment</text>
    <text x="15" y="175" fill="#cbd5e1" font-size="11" font-family="sans-serif">• Set Cover</text>
    <rect x="12" y="220" width="121" height="45" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="72" y="240" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">1 &lt;&lt; N masks</text>
    <text x="72" y="255" fill="#f472b6" font-size="9" font-family="monospace" text-anchor="middle">integer bitsets</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'bitmask-dp',
      text: {
        en: 'Bitmask DP: Conquering the NP-Hard Travelling Salesperson Problem',
        bn: 'বিটমাস্ক ডিপি: ট্রাভেলিং সেলসপারসন সমস্যার সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Travelling Salesperson Problem (TSP) seeks the lowest-cost closed tour visiting all N cities exactly once. With N = 4 cities (0, 1, 2, 3), brute force must check (4 - 1)! = 6 permutations. But for 20 cities, 20! is roughly 2430000000000000000 operations, which is completely intractable. Bitmask DP compresses the visited set into a 32-bit integer, dropping runtime down to O(N^2 * 2^N). For 20 cities, 20^2 * 2^20 is approximately 419430400 operations, completing in seconds.',
        bn: 'ট্রাভেলিং সেলসপারসন সমস্যায় (TSP) প্রতিটি শহর ঠিক ১ বার ভ্রমণ করে সর্বনিম্ন খরচে প্রারম্ভিক শহরে ফিরতে হয়। N = ৪টি শহরের (০, ১, ২, ৩) জন্য ব্রুট-ফোর্সে (৪ - ১)! = ৬টি রুট পরীক্ষা করতে হয়। কিন্তু ২০টি শহরের ক্ষেত্রে ২০! প্রায় ২৪৩০০০০০০০০০০০০০০০০টি অপারেশন, যা কম্পিউটারের পক্ষে অসম্ভব। বিটমাস্ক ডিপি পরিদর্শিত শহরগুলোর সেটকে একটি ৩২-বিট ইন্টিজারে রূপান্তর করে জটিলতাকে O(N^2 * 2^N) এ নামিয়ে আনে। ২০টি শহরের জন্য ২০^২ * ২^২০ প্রায় ৪১৯৪৩০৪০০ অপারেশন, যা কয়েক সেকেন্ডেই সম্পন্ন হয়।'
      }
    },
    {
      type: 'code',
      id: 'tsp-bitmask-ts',
      lang: 'typescript',
      caption: {
        en: 'Runnable TypeScript implementation of 4-city TSP using Bitmask Dynamic Programming.',
        bn: 'বিটমাস্ক ডাইনামিক প্রোগ্রামিং ব্যবহার করে ৪টি শহরের TSP-এর রানযোগ্য TypeScript কোড।'
      },
      code: `// Symmetric distance matrix between 4 cities: 0, 1, 2, 3
const dist: number[][] = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];

export function tspBitmask(matrix: number[][]): { minCost: number; dpStatesComputed: number } {
  const n = matrix.length;
  const totalMasks = 1 << n; // 2^4 = 16 masks
  // memo[mask][u]: minimum cost to visit remaining cities starting at u
  const memo: number[][] = Array.from({ length: totalMasks }, () => Array(n).fill(-1));
  let computedCount = 0;

  function solve(mask: number, u: number): number {
    // Base case: all 4 cities visited (binary 1111 = 15)
    if (mask === (1 << n) - 1) {
      return matrix[u][0]; // return back to start city 0
    }

    if (memo[mask][u] !== -1) {
      return memo[mask][u];
    }

    computedCount++;
    let best = Infinity;

    for (let v = 0; v < n; v++) {
      // Check if city v has not been visited yet: ((mask & (1 << v)) === 0)
      if ((mask & (1 << v)) === 0) {
        const nextMask = mask | (1 << v);
        const cost = matrix[u][v] + solve(nextMask, v);
        if (cost < best) {
          best = cost;
        }
      }
    }

    memo[mask][u] = best;
    return best;
  }

  // Start at city 0 with mask 1 (binary 0001)
  const minCost = solve(1, 0);
  return { minCost, dpStatesComputed: computedCount };
}

const result = tspBitmask(dist);
console.log('TSP Min Cost:', result.minCost); // 80
console.log('States Computed:', result.dpStatesComputed); // 15
// Optimal tour: 0 -> 1 -> 3 -> 2 -> 0 = 10 + 25 + 30 + 15 = 80`
    },
    {
      type: 'heading',
      id: 'tree-dp',
      text: {
        en: 'Tree DP: Optimal Substructure on Hierarchical Networks',
        bn: 'ট্রি ডিপি: হায়ারারকিকাল নেটওয়ার্কে অপটিমাল সাবস্ট্রাকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Graphs with no cycles (trees) possess a natural topological order from leaves to root. In Tree DP, each node computes its state from the accumulated states of its children via post-order depth-first search. Consider House Robber III: in a company tree with 5 nodes (Root 3, Left Child 2 with Right Grandchild 3, Right Child 3 with Right Grandchild 1), no two directly connected nodes can both be chosen. The optimal robbery yields 7.',
        bn: 'সাইকেলহীন গ্রাফে (ট্রি) লিফ থেকে রুট পর্যন্ত স্বাভাবিক টপোলজিক্যাল ক্রম থাকে। ট্রি ডিপিতে প্রতিটি নোড পোস্ট-অর্ডার ডেপথ-ফার্স্ট সার্চের মাধ্যমে তার চিলড্রেন নোডগুলোর স্টেট থেকে নিজস্ব মান বের করে। যেমন হাউস রবার ৩ সমস্যা: ৫টি নোড বিশিষ্ট ট্রিতে (রুট ৩, বাম সন্তান ২ যার ডান সন্তান ৩, ডান সন্তান ৩ যার ডান সন্তান ১), সংযুক্ত দুটি নোড একসঙ্গে নির্বাচন করা নিষিদ্ধ। এখানে সর্বোচ্চ লাভ দাঁড়ায় ৭।'
      }
    },
    {
      type: 'code',
      id: 'tree-dp-ts',
      lang: 'typescript',
      caption: {
        en: 'Tree DP solving House Robber III with post-order DFS in O(N) time.',
        bn: 'O(N) সময়ে পোস্ট-অর্ডার DFS দিয়ে হাউস রবার ৩ সমাধানকারী ট্রি ডিপি।'
      },
      code: `interface TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
}

// Returns [robCurrent, skipCurrent]
export function robTree(root?: TreeNode): [number, number] {
  if (!root) {
    return [0, 0];
  }

  // Post-order DFS: process left and right subtrees first
  const left = robTree(root.left);
  const right = robTree(root.right);

  // If we rob this node, we CANNOT rob immediate children
  const robThis = root.val + left[1] + right[1];

  // If we skip this node, children can either be robbed or skipped (take maximum of each)
  const skipThis = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

  return [robThis, skipThis];
}

// Sample binary tree with 5 nodes:
//        3 (root)
//       / \\
//      2   3
//       \\   \\
//        3   1
const rootTree: TreeNode = {
  val: 3,
  left: {
    val: 2,
    right: { val: 3 }
  },
  right: {
    val: 3,
    right: { val: 1 }
  }
};

const [robbed, skipped] = robTree(rootTree);
const maxLoot = Math.max(robbed, skipped);
console.log('Robbed Root Option:', robbed);   // 3 + 3 + 1 = 7
console.log('Skipped Root Option:', skipped); // 2 + 3 = 5
console.log('Max Total Loot:', maxLoot);      // 7`
    },
    {
      type: 'heading',
      id: 'system-design',
      text: {
        en: 'The 5-Step DP Framework and Production Memory Architecture',
        bn: '৫ ধাপের ডিপি কাঠামো এবং প্রোডাকশন মেমোরি আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When engineering high-throughput backend services, Dynamic Programming algorithms face practical runtime limits. V8 JavaScript engines enforce a call stack limit around 10000 frames; deep recursive memoization triggers RangeError stack overflow. Production DP systems prefer bottom-up tabulation with flat TypedArrays (Int32Array, Float64Array) to guarantee cache locality, eliminate garbage collector pauses, and enforce O(1) space reuse.',
        bn: 'উচ্চ সক্ষমতার ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ে ডাইনামিক প্রোগ্রামিং বাস্তবায়নে কিছু ব্যবহারিক সীমাবদ্ধতা থাকে। V8 জাভাস্ক্রিপ্ট ইঞ্জিনের কল স্ট্যাক সাধারণত প্রায় ১০০০০ ফ্রেমে সীমিত; ফলে গভীর রিকার্সিভ মেমোইজেশনে RangeError স্ট্যাক ওভারফ্লো ঘটে। প্রোডাকশন ডিপি সিস্টেমে তাই বটম-আপ ট্যাবুলেশন এবং ফ্ল্যাট TypedArray (যেমন Int32Array) ব্যবহার করা হয় যা সিপিইউ ক্যাশ লোকালিটি বাড়ায় এবং মেমোরি ও গার্বেজ কালেক্টর চাপ কমায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Bitmask',
          def: {
            en: 'An integer whose binary bits represent membership in a subset (1 = included, 0 = excluded).',
            bn: 'একটি পূর্ণসংখ্যা যার বাইনারি বিটগুলো কোনো সাবসেটে সদস্যপদ নির্দেশ করে (১ = অন্তর্ভুক্ত, ০ = বাদ)।'
          }
        },
        {
          term: 'Tree DP',
          def: {
            en: 'Dynamic programming executed along tree edges using post-order DFS to aggregate subtree results.',
            bn: 'পোস্ট-অর্ডার DFS দিয়ে সাবট্রির ফলাফল সমন্বয় করে ট্রির নোড বরাবর পরিচালিত ডাইনামিক প্রোগ্রামিং।'
          }
        },
        {
          term: 'Call Stack Overflow',
          def: {
            en: 'V8 runtime error triggered when recursion exceeds approximately 10000 active frames.',
            bn: 'V8 রানটাইম ত্রুটি যা রিকার্শন প্রায় ১০০০০ সক্রিয় ফ্রেম অতিক্রম করলে ঘটে থাকে।'
          }
        },
        {
          term: 'TypedArray Buffers',
          def: {
            en: 'Contiguous binary memory allocations (like Int32Array) ensuring zero GC overhead and tight CPU cache lines.',
            bn: 'ধারাবাহিক বাইনারি মেমোরি যা কোনো গার্বেজ কালেকশন ওভারহেড ছাড়া দ্রুত সিপিইউ ক্যাশ লাইনে কাজ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tsp-bitmask-ex1',
      kind: 'mcq',
      topic: 'tsp-bitmask-calculation',
      question: {
        en: 'In our 4-city TSP example, what is the minimum cost of the closed tour visiting all cities and returning to city 0?',
        bn: 'আমাদের ৪টি শহরের TSP উদাহরণে, সবগুলো শহর পরিদর্শন করে ০ নম্বর শহরে ফেরার সর্বনিম্ন খরচ কত?'
      },
      options: [
        { en: '80', bn: '৮০' },
        { en: '95', bn: '৯৫' },
        { en: '105', bn: '১০৫' },
        { en: '70', bn: '৭০' }
      ],
      answer: 0,
      hint: {
        en: 'Sum the legs of 0 -> 1 -> 3 -> 2 -> 0.',
        bn: '০ -> ১ -> ৩ -> ২ -> ০ পথের প্রতিটি ধাপের খরচ যোগ করুন।'
      },
      explanation: {
        en: 'The optimal tour visits 0 -> 1 -> 3 -> 2 -> 0 with costs 10 + 25 + 30 + 15 = 80.',
        bn: 'সর্বোত্তম ট্যুরটি ০ -> ১ -> ৩ -> ২ -> ০ পথ অনুসরণ করে যার খরচ ১০ + ২৫ + ৩০ + ১৫ = ৮০।'
      }
    },
    {
      id: 'tsp-complexity-ex2',
      kind: 'mcq',
      topic: 'tsp-complexity-held-karp',
      question: {
        en: 'What is the time complexity of the Held-Karp Bitmask DP algorithm for solving the Travelling Salesperson Problem on N cities?',
        bn: 'N সংখ্যক শহরের ক্ষেত্রে ট্রাভেলিং সেলসপারসন সমস্যা সমাধানে হেল্ড-কার্প বিটমাস্ক ডিপি অ্যালগরিদমের টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        { en: 'O(N^2 * 2^N)', bn: 'O(N^2 * 2^N)' },
        { en: 'O(N!)', bn: 'O(N!)' },
        { en: 'O(2^N)', bn: 'O(2^N)' },
        { en: 'O(N^3)', bn: 'O(N^3)' }
      ],
      answer: 0,
      hint: {
        en: 'There are 2^N masks times N ending cities, each with N transitions.',
        bn: '২^N টি মাস্ক এবং N টি শেষ শহর রয়েছে, প্রতিটির N টি করে ট্রানজিশন রয়েছে।'
      },
      explanation: {
        en: 'There are 2^N subset masks and N possible ending cities, with N transitions per state, yielding O(N^2 * 2^N).',
        bn: 'মোট ২^N সাবসেট মাস্ক এবং Nটি সম্ভাব্য সমাপ্তি শহর রয়েছে, প্রতি স্টেটে N ট্রানজিশনের কারণে জটিলতা O(N^2 * 2^N)।'
      }
    },
    {
      id: 'tree-dp-ex3',
      kind: 'mcq',
      topic: 'tree-dp-house-robber',
      question: {
        en: 'In House Robber III with 5 nodes, what maximum loot is obtained when the root node with value 3 is chosen?',
        bn: 'হাউস রবার ৩-এর ৫টি নোডের ট্রিতে, মান ৩ সহ রুট নোডটি বেছে নিলে সর্বোচ্চ কত লাভ পাওয়া যায়?'
      },
      options: [
        { en: '7', bn: '৭' },
        { en: '5', bn: '৫' },
        { en: '9', bn: '৯' },
        { en: '12', bn: '১২' }
      ],
      answer: 0,
      hint: {
        en: 'Root value 3 plus grandchildren values 3 and 1.',
        bn: 'রুট মান ৩ এবং গ্র্যান্ডচিলড্রেন মান ৩ ও ১ যোগ করুন।'
      },
      explanation: {
        en: 'Robbing the root gives 3 + 3 + 1 = 7 by robbing the grandchildren and skipping immediate children 2 and 3.',
        bn: 'রুট বেছে নিলে চিলড্রেন ২ ও ৩ বাদ দিয়ে গ্র্যান্ডচিলড্রেন ৩ ও ১ থেকে মোট ৩ + ৩ + ১ = ৭ লাভ পাওয়া যায়।'
      }
    },
    {
      id: 'v8-stack-ex4',
      kind: 'mcq',
      topic: 'v8-callstack-memory-design',
      question: {
        en: 'Why is bottom-up tabulation preferred over deep recursion in production Node.js DP services?',
        bn: 'প্রোডাকশন Node.js ডিপি সার্ভিসে গভীর রিকার্শনের তুলনায় বটম-আপ ট্যাবুলেশন কেন অধিক গ্রহণযোগ্য?'
      },
      options: [
        {
          en: 'It avoids V8 call stack overflow around 10000 frames and enables flat TypedArray memory reuse',
          bn: 'এটি প্রায় ১০০০০ ফ্রেমের V8 কল স্ট্যাক ওভারফ্লো প্রতিরোধ করে এবং ফ্ল্যাট TypedArray মেমোরি পুনর্ব্যবহার সম্ভব করে'
        },
        {
          en: 'Recursion requires more CPU threads',
          bn: 'রিকার্শনের জন্য অতিরিক্ত সিপিইউ থ্রেডের প্রয়োজন হয়'
        },
        {
          en: 'Tabulation always changes O(2^N) to O(1)',
          bn: 'ট্যাবুলেশন সর্বদা O(2^N) কে O(1) এ পরিবর্তিত করে'
        },
        {
          en: 'V8 cannot execute recursive functions',
          bn: 'V8 রিকার্সিভ ফাংশন চালাতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the call stack frame limit and garbage collector heap pressure.',
        bn: 'কল স্ট্যাক ফ্রেমের সীমাবদ্ধতা এবং গার্বেজ কালেক্টরের চাপ বিবেচনা করুন।'
      },
      explanation: {
        en: 'Iterative loops run on the heap without exhausting the fixed 10000 call stack frame ceiling of the JavaScript runtime.',
        bn: 'ইটারেটিভ লুপ জাভাস্ক্রিপ্ট রানটাইমের ১০০০০ কল স্ট্যাক ফ্রেম সীমা শেষ না করেই হিপ মেমোরিতে নিরাপদে চলে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Dynamic Programming Capstone Quiz',
      bn: 'ডাইনামিক প্রোগ্রামিং সমাপ্তি কুইজ'
    },
    questions: [
      {
        id: 'quiz-bitmask-op',
        kind: 'mcq',
        topic: 'bitmask-bitwise-operations',
        question: {
          en: 'Which bitwise operation tests whether city 2 is visited in a bitmask integer?',
          bn: 'কোন বিটওয়াইজ অপারেশনটি দিয়ে বিটমাস্ক পূর্ণসংখ্যায় ২ নম্বর শহরটি পরিদর্শিত কিনা তা পরীক্ষা করা হয়?'
        },
        options: [
          { en: '(mask & (1 << 2)) !== 0', bn: '(mask & (1 << ২)) !== ০' },
          { en: 'mask | (1 << 2)', bn: 'mask | (১ << ২)' },
          { en: 'mask ^ (1 << 2)', bn: 'mask ^ (১ << ২)' },
          { en: 'mask >> 2', bn: 'mask >> ২' }
        ],
        answer: 0,
        hint: {
          en: 'Shift 1 left by 2 bits and bitwise AND with mask.',
          bn: '১ কে ২ বিট বামে সরিয়ে মাস্কের সাথে বিটওয়াইজ অ্যান্ড করুন।'
        },
        explanation: {
          en: 'Bitwise AND with (1 << 2) extracts the bit at index 2; if non-zero, the city is included in the mask.',
          bn: '(১ << ২) এর সাথে বিটওয়াইজ অ্যান্ড করলে ২ সূচকের বিটটি বের হয়; অশূন্য হলে শহরটি মাস্কে উপস্থিত।'
        }
      },
      {
        id: 'quiz-postorder-tree',
        kind: 'mcq',
        topic: 'tree-dp-postorder-logic',
        question: {
          en: 'Why does Tree DP utilize post-order depth-first traversal?',
          bn: 'ট্রি ডিপি কেন পোস্ট-অর্ডার ডেপথ-ফার্স্ট ট্রাভার্সাল ব্যবহার করে?'
        },
        options: [
          {
            en: 'Child subproblems must be fully solved before the parent node can evaluate its optimal decision',
            bn: 'প্যারেন্ট নোডের সর্বোত্তম সিদ্ধান্ত নেওয়ার আগে চাইল্ড সাবপ্রবলেমগুলো সম্পূর্ণরূপে সমাধান হওয়া আবশ্যক'
          },
          {
            en: 'Post-order DFS converts trees into linked lists',
            bn: 'পোস্ট-অর্ডার DFS ট্রিকে লিংকড লিস্টে রূপান্তর করে'
          },
          {
            en: 'Trees can only be traversed from right to left',
            bn: 'ট্রি শুধুমাত্র ডান থেকে বামে পরিভ্রমণ করা যায়'
          },
          {
            en: 'It reduces the number of nodes in the graph',
            bn: 'এটি গ্রাফের নোড সংখ্যা কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Parent calculations depend directly on returned child states.',
          bn: 'প্যারেন্টের হিসাব সরাসরি চাইল্ড স্টেটের ফলাফলের উপর নির্ভরশীল।'
        },
        explanation: {
          en: 'Bottom-up optimal substructure on trees requires child return values to calculate parent state.',
          bn: 'ট্রিতে বটম-আপ অপটিমাল সাবস্ট্রাকচারের জন্য চিলড্রেনের রিটার্ন ভ্যালুর মাধ্যমেই প্যারেন্টের স্টেট নির্ণয় করতে হয়।'
        }
      },
      {
        id: 'quiz-space-optimization',
        kind: 'mcq',
        topic: 'space-reduction-reverse-loop',
        question: {
          en: 'In 0/1 Knapsack, how is 2D matrix memory reduced from O(N * W) to a 1D array of size O(W)?',
          bn: '০/১ ন্যাপস্যাকে কীভাবে ২ডি ম্যাট্রিক্স মেমোরি O(N * W) থেকে O(W) আকারের ১ডি অ্যারেতে নামিয়ে আনা হয়?'
        },
        options: [
          {
            en: 'By iterating the capacity loop in reverse order from W down to weight[i]',
            bn: 'ক্যাপাসিটি লুপটি W থেকে ওজন[i] পর্যন্ত বিপরীত (reverse) ক্রমে চালিয়ে'
          },
          {
            en: 'By iterating the capacity loop forward from 0 up to W',
            bn: 'ক্যাপাসিটি লুপটি ০ থেকে W পর্যন্ত সোজা ক্রমে চালিয়ে'
          },
          {
            en: 'By discarding all items heavier than 10 units',
            bn: '১০ ইউনিটের চেয়ে ভারী সব আইটেম বাদ দিয়ে'
          },
          {
            en: 'By storing only the first column of the matrix',
            bn: 'ম্যাট্রিক্সের কেবল প্রথম কলামটি সংরক্ষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Running backward prevents an item from updating cells it will later read.',
          bn: 'বিপরীত দিকে লুপ চালালে একই আইটেম পরবর্তীতে পঠিত হতে যাওয়া ঘরগুলোকে প্রভাবিত করতে পারে না।'
        },
        explanation: {
          en: 'Iterating in reverse ensures each item is used at most once because dp[w - weight] reflects values from the previous item.',
          bn: 'বিপরীত দিকে লুপ চালালে dp[w - weight] আগের আইটেমের মান বজায় রাখে, ফলে একটি আইটেম কেবল ১ বারই ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-dp-criteria',
        kind: 'mcq',
        topic: 'dp-core-requirements',
        question: {
          en: 'What two fundamental characteristics must a computational problem possess to be solvable by Dynamic Programming?',
          bn: 'ডাইনামিক প্রোগ্রামিং দ্বারা সমাধানযোগ্য হতে একটি কম্পিউটেশনাল সমস্যার কোন দুটি মৌলিক বৈশিষ্ট্য থাকতে হবে?'
        },
        options: [
          {
            en: 'Optimal Substructure and Overlapping Subproblems',
            bn: 'অপটিমাল সাবস্ট্রাকচার (Optimal Substructure) এবং ওভারল্যাপিং সাবপ্রবলেমস (Overlapping Subproblems)'
          },
          {
            en: 'Greedy Choice Property and Infinite Memory',
            bn: 'গ্রিডি চয়েস প্রপার্টি এবং অসীম মেমোরি'
          },
          {
            en: 'Sorted Input Array and Constant Time Lookups',
            bn: 'সর্টেড ইনপুট অ্যারে এবং কনস্ট্যান্ট টাইম লুকআপ'
          },
          {
            en: 'Circular Graph Dependencies and Negative Weights',
            bn: 'সার্কুলার গ্রাফ নির্ভরতা এবং নেগেটিভ ওয়েট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of subproblem optimality and repeated subproblem evaluations.',
          bn: 'সাবপ্রবলেম অপটিমালিটি এবং পুনরাবৃত্ত সাবপ্রবলেম মূল্যায়নের কথা ভাবুন।'
        },
        explanation: {
          en: 'Optimal substructure allows global answers to be assembled from optimal parts; overlapping subproblems ensures memoization saves work.',
          bn: 'অপটিমাল সাবস্ট্রাকচার ক্ষুদ্র অংশের সাহায্যে পূর্ণ সমাধান দেয়; আর ওভারল্যাপিং সাবপ্রবলেম থাকলে মেমোইজেশন পুনরায় হিসাব করা রোধ করে।'
        }
      }
    ]
  }
};
