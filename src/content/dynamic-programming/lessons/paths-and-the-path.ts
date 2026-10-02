import type { Lesson } from '../../../lib/types';

export const PathsAndThePathLesson: Lesson = {
  slug: 'paths-and-the-path',
  tech: 'dynamic-programming',
  title: {
    en: 'Grid DP & 2D Coordinate Recurrences',
    bn: 'গ্রিড ডিপি ও ২ডি স্থানাঙ্ক রিকারেন্স'
  },
  summary: {
    en: 'Master 2D spatial dynamic programming on grids, solve Unique Paths and Minimum Path Sum, and compress grid storage into a single 1D rolling row.',
    bn: 'গ্রিডের ওপর ২ডি স্থানিক ডায়নামিক প্রোগ্রামিং শিখুন, ইউনিক পাথ ও মিনিমাম পাথ সাম সমাধান করুন এবং মেমরি একটি মাত্র ১ডি সারিতে সংকুচিত করুন।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'spatial-grid-dp-concept',
      text: {
        en: 'Dynamic Programming on 2D Grids',
        bn: '২ডি গ্রিডে ডায়নামিক প্রোগ্রামিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Many real-world algorithms model physical spatial movement on 2D coordinate lattices, including robot path planning, game board navigation, image seam carving, and matrix routing. In Grid DP, states are parameterized by two spatial coordinates (row r and column c), where movement is constrained along specific directions (such as only moving Right or Down).',
        bn: 'বাস্তব জীবনের অনেক অ্যালগরিদম ২ডি স্থানাঙ্ক গ্রিডে স্থানিক চলাচল মডেল করে, যার মধ্যে রয়েছে রোবট পাথ প্ল্যানিং, গেম বোর্ড নেভিগেশন, ছবির সিম কার্ভিং এবং ম্যাট্রিক্স রাউটিং। গ্রিড ডিপিতে স্টেটগুলোকে ২টি স্থানিক স্থানাঙ্ক (সারি r এবং কলাম c) দ্বারা প্রকাশ করা হয়, যেখানে চলাচল কেবল নির্দিষ্ট দিকে (যেমন কেবল ডানে বা নিচে) সীমাবদ্ধ থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'grid-state-coordinate',
          def: {
            en: 'The 2D tuple (r, c) representing a specific cell in an M x N matrix, uniquely identifying subproblem progress.',
            bn: 'M x N ম্যাট্রিক্সের একটি নির্দিষ্ট ঘর নির্দেশকারী ২ডি স্থানাঙ্ক (r, c), যা উপ-সমস্যার অগ্রগতি প্রকাশ করে।'
          }
        },
        {
          term: 'directional-invariant',
          def: {
            en: 'The constraint that transitions can only enter cell (r, c) from valid preceding neighbors, such as from top (r - 1, c) or left (r, c - 1).',
            bn: 'এমন একটি সীমাবদ্ধতা যেখানে সেল (r, c)-তে কেবল নির্দিষ্ট প্রতিবেশী থেকে আসা যায়, যেমন ওপর (r - ১, c) বা বাম (r, c - ১) থেকে।'
          }
        },
        {
          term: 'rolling-row-optimization',
          def: {
            en: 'Reducing 2D grid DP space from O(M * N) down to O(N) by storing only the previous and current row during iteration.',
            bn: 'ইটারেশনের সময় কেবল আগের ও বর্তমান সারি সংরক্ষণ করে ২ডি গ্রিড ডিপির মেমরি O(M * N) থেকে কমিয়ে O(N)-এ নামিয়ে আনা।'
          }
        },
        {
          term: 'boundary-padding',
          def: {
            en: 'Initializing the first row and column as base cases to eliminate boundary check conditions inside the main nested loops.',
            bn: 'মূল লুপের ভেতর বাউন্ডারি চেক এড়াতে প্রথম সারি ও কলামকে বেস কেস হিসেবে আগে থেকেই প্রস্তুত রাখা।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'grid-dp-3x3-svg',
      title: {
        en: '3x3 Grid DP: Unique Paths (6) and Minimum Path Sum (7)',
        bn: '৩x৩ গ্রিড ডিপি: ইউনিক পাথ (৬) এবং মিনিমাম পাথ সাম (৭)'
      },
      caption: {
        en: 'A 3x3 grid has 6 unique paths. Given costs [[1,3,1],[1,5,1],[4,2,1]], the minimum path sum is 7 along path 1 -> 3 -> 1 -> 1 -> 1.',
        bn: 'একটি ৩x৩ গ্রিডে ৬টি ইউনিক পাথ রয়েছে। খরচ [[১,৩,১],[১,৫,১],[৪,২,১]] হলে সর্বনিম্ন পাথ সাম হলো ৭ (পথ: ১ -> ৩ -> ১ -> ১ -> ১)।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="grdBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#grdBg)" stroke="#334155" stroke-width="2"/>

  <!-- Left: 3x3 Unique Paths Table -->
  <text x="35" y="45" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#38bdf8">1. Unique Paths: dp[r][c] = dp[r-1][c] + dp[r][c-1]</text>

  <!-- Row 0 -->
  <rect x="50" y="70" width="80" height="70" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="90" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(0, 0) START</text>
  <text x="90" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#60a5fa" text-anchor="middle">1</text>

  <rect x="140" y="70" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="180" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(0, 1)</text>
  <text x="180" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>

  <rect x="230" y="70" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="270" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(0, 2)</text>
  <text x="270" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>

  <!-- Row 1 -->
  <rect x="50" y="150" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="90" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(1, 0)</text>
  <text x="90" y="205" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>

  <rect x="140" y="150" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="180" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(1, 1)</text>
  <text x="180" y="205" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#38bdf8" text-anchor="middle">2</text>

  <rect x="230" y="150" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="270" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(1, 2)</text>
  <text x="270" y="205" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#38bdf8" text-anchor="middle">3</text>

  <!-- Row 2 -->
  <rect x="50" y="230" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="90" y="260" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(2, 0)</text>
  <text x="90" y="285" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>

  <rect x="140" y="230" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="180" y="260" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">(2, 1)</text>
  <text x="180" y="285" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#38bdf8" text-anchor="middle">3</text>

  <!-- Target Cell (2, 2) -->
  <rect x="230" y="230" width="80" height="70" rx="8" fill="url(#pathGrad)" stroke="#34d399" stroke-width="2"/>
  <text x="270" y="258" font-family="system-ui, sans-serif" font-size="11" fill="#d1fae5" text-anchor="middle">(2, 2) TARGET</text>
  <text x="270" y="285" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">6</text>

  <text x="50" y="335" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">Unique Paths to (2, 2) = 6</text>
  <text x="50" y="355" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Combinatorics: C(2+2, 2) = 4! / (2! * 2!) = 6</text>

  <!-- Right: Minimum Path Sum 3x3 -->
  <text x="445" y="45" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#34d399">2. Minimum Path Sum: dp[r][c] = cost + min(top, left)</text>

  <!-- Cell (0,0): cost 1, dp=1 -->
  <rect x="460" y="70" width="80" height="70" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
  <text x="500" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">Cost: 1</text>
  <text x="500" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">dp=1</text>

  <!-- Cell (0,1): cost 3, dp=4 (ON OPTIMAL PATH) -->
  <rect x="550" y="70" width="80" height="70" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
  <text x="590" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">Cost: 3</text>
  <text x="590" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">dp=4</text>

  <!-- Cell (0,2): cost 1, dp=5 (ON OPTIMAL PATH) -->
  <rect x="640" y="70" width="80" height="70" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
  <text x="680" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">Cost: 1</text>
  <text x="680" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">dp=5</text>

  <!-- Cell (1,0): cost 1, dp=2 -->
  <rect x="460" y="150" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="500" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Cost: 1</text>
  <text x="500" y="205" font-family="system-ui, sans-serif" font-size="18" fill="#cbd5e1" text-anchor="middle">dp=2</text>

  <!-- Cell (1,1): cost 5, dp=7 -->
  <rect x="550" y="150" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="590" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Cost: 5</text>
  <text x="590" y="205" font-family="system-ui, sans-serif" font-size="18" fill="#cbd5e1" text-anchor="middle">dp=7</text>

  <!-- Cell (1,2): cost 1, dp=6 (ON OPTIMAL PATH) -->
  <rect x="640" y="150" width="80" height="70" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
  <text x="680" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">Cost: 1</text>
  <text x="680" y="205" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">dp=6</text>

  <!-- Cell (2,0): cost 4, dp=6 -->
  <rect x="460" y="230" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="500" y="255" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Cost: 4</text>
  <text x="500" y="285" font-family="system-ui, sans-serif" font-size="18" fill="#cbd5e1" text-anchor="middle">dp=6</text>

  <!-- Cell (2,1): cost 2, dp=8 -->
  <rect x="550" y="230" width="80" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="590" y="255" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Cost: 2</text>
  <text x="590" y="285" font-family="system-ui, sans-serif" font-size="18" fill="#cbd5e1" text-anchor="middle">dp=8</text>

  <!-- Cell (2,2): cost 1, dp=7 (TARGET) -->
  <rect x="640" y="230" width="80" height="70" rx="8" fill="url(#pathGrad)" stroke="#34d399" stroke-width="2.5"/>
  <text x="680" y="255" font-family="system-ui, sans-serif" font-size="10" fill="#d1fae5" text-anchor="middle">Cost: 1</text>
  <text x="680" y="285" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="#fff" text-anchor="middle">dp=7</text>

  <text x="460" y="335" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">Minimum Path Cost to (2, 2) = 7</text>
  <text x="460" y="355" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Optimal Path: 1 -&gt; 3 -&gt; 1 -&gt; 1 -&gt; 1 = 7 (Highlighted in green)</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'grid-recurrence-equations',
      text: {
        en: 'The Grid DP Recurrence Equations',
        bn: 'গ্রিড ডিপির রিকারেন্স সমীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For counting unique paths, any path entering cell (r, c) must arrive either by moving Down from (r - 1, c) or by moving Right from (r, c - 1). Because these two incoming directions are mutually disjoint, the rule of sum dictates: dp[r][c] = dp[r - 1][c] + dp[r][c - 1]. For finding the minimum path sum, the decision is to pick the cheaper of the two incoming routes: dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]).',
        bn: 'ইউনিক পাথ গণনায় যেকোনো সেল (r, c)-তে পৌঁছাতে রোবটটি হয় ওপরের (r - ১, c) থেকে নিচে নেমেছে, নয়তো বামের (r, c - ১) থেকে ডানে সরেছে। এই ২টি আগমন পথ সম্পূর্ণ আলাদা হওয়ায় যোগের নিয়ম অনুসারে: dp[r][c] = dp[r - ১][c] + dp[r][c - ১]। আর সর্বনিম্ন খরচের পথে সস্তা রুটটি বেছে নিতে হয়: dp[r][c] = grid[r][c] + Math.min(dp[r - ১][c], dp[r][c - ১])।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-grid-dp-ts',
      text: {
        en: 'Runnable TypeScript: 2D Grid DP & 1D Rolling Row Solvers',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ২ডি গ্রিড ডিপি ও ১ডি রোলিং সারি সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Solving Unique Paths (6) and Minimum Path Sum (7) on a 3x3 grid with full 2D matrix and 1D compressed space.',
        bn: 'একটি ৩x৩ গ্রিডে পূর্ণ ২ডি ম্যাট্রিক্স ও ১ডি স্পেস ব্যবহার করে ইউনিক পাথ (৬) ও মিনিমাম পাথ সাম (৭) সমাধান।'
      },
      code: `// 1. Unique Paths on M x N grid
function uniquePaths(m: number, n: number): number {
  // 1D Rolling row array of size N
  const dp: number[] = new Array(n).fill(1);

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[c] = dp[c] + dp[c - 1]; // dp[c] was top cell, dp[c - 1] is left cell
    }
  }

  return dp[n - 1];
}

// 2. Minimum Path Sum on M x N grid
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

  dp[0][0] = grid[0][0];

  // Base Cases: First row
  for (let c = 1; c < n; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c];
  }

  // Base Cases: First column
  for (let r = 1; r < m; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0];
  }

  // Populate inner cells
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]);
    }
  }

  return dp[m - 1][n - 1];
}

// Test with 3x3 Grid
const totalRows = 3;
const totalCols = 3;
const pathsCount = uniquePaths(totalRows, totalCols);

const costGrid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

const minCost = minPathSum(costGrid);

console.log('3x3 Unique Paths:', pathsCount); // 6
console.log('3x3 Minimum Path Sum:', minCost); // 7
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'By noticing that cell dp[r][c] only depends on the current row and the row above it, we reduced space from O(M * N) to O(N). If obstacles exist (Unique Paths II), a blocked cell simply resets dp[r][c] = 0, because zero paths can pass through an impassable barrier.',
        bn: 'সেল dp[r][c] কেবল বর্তমান সারি ও তার ওপরের সারির ওপর নির্ভর করায় আমরা মেমরি O(M * N) থেকে O(N)-এ নামিয়ে এনেছি। গ্রিডে কোনো বাধা (অবস্ট্যাকল) থাকলে সেই ঘরে dp[r][c] = ০ বসিয়ে দিলেই চলে, কারণ কোনো পথ বাধা ভেদ করে যেতে পারে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-pth-ex-1',
      kind: 'mcq',
      topic: 'unique-paths-recurrence',
      question: {
        en: 'What is the recurrence relation for counting unique paths from top-left (0, 0) to cell (r, c) when only Right and Down moves are allowed?',
        bn: 'কেবল ডানে ও নিচে যাওয়ার অনুমতি থাকলে শীর্ষ-বাম (০, ০) থেকে সেল (r, c)-তে ইউনিক পাথ গণনার রিকারেন্স সমীকরণ কোনটি?'
      },
      options: [
        {
          en: 'dp[r][c] = dp[r - 1][c] + dp[r][c - 1]',
          bn: 'dp[r][c] = dp[r - ১][c] + dp[r][c - ১]'
        },
        {
          en: 'dp[r][c] = dp[r - 1][c] * dp[r][c - 1]',
          bn: 'dp[r][c] = dp[r - ১][c] * dp[r][c - ১]'
        },
        {
          en: 'dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1])',
          bn: 'dp[r][c] = Math.max(dp[r - ১][c], dp[r][c - ১])'
        },
        {
          en: 'dp[r][c] = r + c',
          bn: 'dp[r][c] = r + c'
        }
      ],
      answer: 0,
      hint: {
        en: 'Paths arriving from the top cell and paths arriving from the left cell sum together.',
        bn: 'ওপরের সেল থেকে আসা পথ এবং বামের সেল থেকে আসা পথের সংখ্যা একসাথে যোগ হয়।'
      },
      explanation: {
        en: 'Since you can only move Right or Down, any route entering (r, c) must pass through (r - 1, c) or (r, c - 1). Summing them gives the total distinct routes.',
        bn: 'যেহেতু কেবল ডানে বা নিচে যাওয়া যায়, তাই (r, c)-তে আসতে ওপরের (r - ১, c) অথবা বামের (r, c - ১) হয়ে আসতে হবে। তাদের যোগফলই মোট অনন্য পথ নির্দেশ করে।'
      }
    },
    {
      id: 'dp-pth-ex-2',
      kind: 'mcq',
      topic: '3x3-grid-trace-results',
      question: {
        en: 'On a 3x3 grid, how many unique paths exist from (0, 0) to (2, 2), and what was the minimum path sum for [[1,3,1],[1,5,1],[4,2,1]]?',
        bn: 'একটি ৩x৩ গ্রিডে (০, ০) থেকে (২, ২)-তে কয়টি ইউনিক পাথ থাকে এবং [[১,৩,১],[১,৫,১],[৪,২,১]] গ্রিডের সর্বনিম্ন পাথ সাম কত?'
      },
      options: [
        {
          en: '6 unique paths and minimum path sum 7',
          bn: '৬টি ইউনিক পাথ এবং সর্বনিম্ন পাথ সাম ৭'
        },
        {
          en: '9 unique paths and minimum path sum 10',
          bn: '৯টি ইউনিক পাথ এবং সর্বনিম্ন পাথ সাম ১০'
        },
        {
          en: '3 unique paths and minimum path sum 15',
          bn: '৩টি ইউনিক পাথ এবং সর্বনিম্ন পাথ সাম ১৫'
        },
        {
          en: '12 unique paths and minimum path sum 4',
          bn: '১২টি ইউনিক পাথ এবং সর্বনিম্ন পাথ সাম ৪'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unique paths count is 6; the optimal path 1 -> 3 -> 1 -> 1 -> 1 sums to 7.',
        bn: 'ইউনিক পাথের সংখ্যা ৬; সর্বোত্তম পথ ১ -> ৩ -> ১ -> ১ -> ১ এর যোগফল ৭।'
      },
      explanation: {
        en: 'Combinatorics C(4, 2) proves there are exactly 6 paths. For minimum path sum, moving along the top edge then down yields 1 + 3 + 1 + 1 + 1 = 7.',
        bn: 'গাণিতিক C(৪, ২) প্রমাণ করে ঠিক ৬টি পথ রয়েছে। আর সর্বনিম্ন খরচের জন্য ওপরের প্রান্ত ধরে এগিয়ে নিচে নামলে মোট খরচ হয় ১ + ৩ + ১ + ১ + ১ = ৭।'
      }
    },
    {
      id: 'dp-pth-ex-3',
      kind: 'mcq',
      topic: 'rolling-row-space-complexity',
      question: {
        en: 'What is the optimized auxiliary space complexity of 2D Grid DP when using a 1D rolling array for an M x N grid?',
        bn: 'M x N গ্রিডে ১ডি রোলিং অ্যারে ব্যবহার করলে ২ডি গ্রিড ডিপির অপ্টিমাইজড স্পেস কমপ্লেক্সিটি কত হয়?'
      },
      options: [
        {
          en: 'O(N) space (or O(min(M, N))), storing only a single row instead of the full M x N matrix',
          bn: 'O(N) স্পেস (বা O(min(M, N))), সম্পূর্ণ M x N ম্যাট্রিক্সের বদলে কেবল একটি সারি সংরক্ষণ করে'
        },
        {
          en: 'O(M * N) space',
          bn: 'O(M * N) স্পেস'
        },
        {
          en: 'O(2^(M+N)) space',
          bn: 'O(২^(M+N)) স্পেস'
        },
        {
          en: 'O(1) space with zero memory allocated',
          bn: 'শূন্য মেমরি বরাদ্দ সহ O(1) স্পেস'
        }
      ],
      answer: 0,
      hint: {
        en: 'You only need to store the current row of length N.',
        bn: 'আপনার কেবল N দৈর্ঘ্যের বর্তমান সারিটি মনে রাখলেই চলে।'
      },
      explanation: {
        en: 'Because cell (r, c) only accesses values in the current row and the row directly above, keeping an array of size N reduces space from O(M * N) to O(N).',
        bn: 'যেহেতু সেল (r, c) কেবল বর্তমান সারি ও ঠিক ওপরের সারির মান পড়ে, তাই N সাইজের অ্যারে রাখলে স্পেস O(M * N) থেকে কমে O(N) হয়ে যায়।'
      }
    },
    {
      id: 'dp-pth-ex-4',
      kind: 'mcq',
      topic: 'obstacle-grid-handling',
      question: {
        en: 'In the Unique Paths II problem with obstacles, how should a grid cell containing an obstacle be handled in the DP table?',
        bn: 'বাধা (অবস্ট্যাকল) সহ ইউনিক পাথ ২ সমস্যায় একটি বাধাপ্রাপ্ত সেলকে ডিপি টেবিলে কীভাবে পরিচালনা করা উচিত?'
      },
      options: [
        {
          en: 'Set dp[r][c] = 0, because zero paths can pass through or originate from an impassable obstacle',
          bn: 'dp[r][c] = ০ সেট করা, কারণ দুর্গম বাধা ভেদ করে বা সেখান থেকে কোনো পথ যেতে পারে না'
        },
        {
          en: 'Set dp[r][c] = Infinity',
          bn: 'dp[r][c] = Infinity সেট করা'
        },
        {
          en: 'Multiply dp[r][c] by negative 1',
          bn: 'dp[r][c]-কে ঋণাত্মক ১ দিয়ে গুণ করা'
        },
        {
          en: 'Delete the entire row from memory',
          bn: 'মেমরি থেকে পুরো সারিটি মুছে ফেলা'
        }
      ],
      answer: 0,
      hint: {
        en: 'A blocked cell contributes 0 ways to future cells.',
        bn: 'একটি বন্ধ ঘর ভবিষ্যতের ঘরের জন্য ০টি উপায়ের অবদান রাখে।'
      },
      explanation: {
        en: 'If a cell is blocked by an obstacle, no paths can enter it. Setting dp[r][c] = 0 naturally ensures that downstream cells receive 0 incoming paths from this blocked position.',
        bn: 'একটি ঘর অবরুদ্ধ থাকলে সেখানে কোনো পথ পৌঁছাতে পারে না। dp[r][c] = ০ বসালে তা স্বাভাবিকভাবেই পরবর্তী ঘরগুলোতে কোনো পথের অবদান যোগ করে না।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Grid DP & Coordinates Mastery Quiz',
      bn: 'গ্রিড ডিপি ও স্থানাঙ্ক দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'dp-pth-qz-1',
        kind: 'mcq',
        topic: 'combinatorial-formula-unique-paths',
        question: {
          en: 'What closed-form mathematical combinatorial formula computes the number of unique paths on an M x N grid without any DP loop?',
          bn: 'কোন গাণিতিক কম্বিনেটোরিয়াল সূত্রটি কোনো ডিপি লুপ ছাড়াই M x N গ্রিডে ইউনিক পাথের সংখ্যা সরাসরি গণনা করে?'
        },
        options: [
          {
            en: 'C((M - 1) + (N - 1), M - 1) = ((M + N - 2)!) / ((M - 1)! * (N - 1)!)',
            bn: 'C((M - ১) + (N - ১), M - ১) = ((M + N - ২)!) / ((M - ১)! * (N - ১)!)'
          },
          {
            en: 'M * N * 2',
            bn: 'M * N * ২'
          },
          {
            en: '2^(M * N)',
            bn: '২^(M * N)'
          },
          {
            en: '(M + N)^2',
            bn: '(M + N)^২'
          }
        ],
        answer: 0,
        hint: {
          en: 'Total moves is (M-1) Down moves plus (N-1) Right moves.',
          bn: 'মোট পদক্ষেপ হলো (M-1)টি নিচে নামা এবং (N-1)টি ডানে যাওয়া।'
        },
        explanation: {
          en: 'To reach bottom-right from top-left, the robot must make exactly M - 1 Down steps and N - 1 Right steps in any order, which is the binomial coefficient C(M + N - 2, M - 1).',
          bn: 'নিচ-ডানে পৌঁছাতে রোবটকে যেকোনো ক্রমে ঠিক M - ১টি নিচে ও N - ১টি ডানে পা ফেলতে হয়, যা বাইনমিয়াল সহগ C(M + N - ২, M - ১) দ্বারা সরাসরি নির্ণয় করা যায়।'
        }
      },
      {
        id: 'dp-pth-qz-2',
        kind: 'mcq',
        topic: 'seam-carving-image-resizing',
        question: {
          en: 'How does content-aware image resizing (Seam Carving) utilize 2D Grid Dynamic Programming?',
          bn: 'কনটেন্ট-অ্যাওয়ার ইমেজ রিসাইজিং (সিম কার্ভিং) কীভাবে ২ডি গ্রিড ডায়নামিক প্রোগ্রামিং ব্যবহার করে?'
        },
        options: [
          {
            en: 'It computes pixel energy and finds the connected vertical seam from top to bottom with the minimum cumulative energy sum, removing it to resize the image without distorting subjects',
            bn: 'এটি পিক্সেল এনার্জি গণনা করে ওপর থেকে নিচ পর্যন্ত সর্বনিম্ন এনার্জি সমষ্টির একটি উল্লম্ব পথ (সিম) খুঁজে বের করে এবং মূল বিষয়বস্তু নষ্ট না করে ছবি ছোট করতে সেই সিমটি মুছে ফেলে'
          },
          {
            en: 'It compresses JPEG files into ZIP archives',
            bn: 'এটি জেপেগ ফাইলকে জিপ আর্কাইভে সংকুচিত করে'
          },
          {
            en: 'It increases camera shutter speed automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ক্যামেরার শাটার স্পিড বাড়ায়'
          },
          {
            en: 'It rotates the picture upside down',
            bn: 'এটি ছবিটিকে উল্টো করে ঘুরিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'It finds the path of least visual importance through the pixel grid.',
          bn: 'এটি পিক্সেল গ্রিডের মধ্য দিয়ে সবচেয়ে কম গুরুত্বপূর্ণ পথটি খুঁজে বের করে।'
        },
        explanation: {
          en: 'Seam Carving calculates energy for every pixel and uses Grid DP to find the minimum energy path from top to bottom. Deleting these minimal seams preserves important visual features.',
          bn: 'সিম কার্ভিং প্রতিটি পিক্সেলের এনার্জি হিসাব করে এবং গ্রিড ডিপি দিয়ে ওপর থেকে নিচে সর্বনিম্ন এনার্জির পথ খুঁজে বের করে। এই পথগুলো মুছলে ছবির মূল অংশ অক্ষত রেখে সাইজ বদলানো যায়।'
        }
      },
      {
        id: 'dp-pth-qz-3',
        kind: 'mcq',
        topic: 'diagonal-movement-extension',
        question: {
          en: 'If a problem allows moving Right, Down, and Diagonally Down-Right, how does the recurrence relation for unique paths change?',
          bn: 'যদি কোনো সমস্যায় ডানে, নিচে এবং কোণাকুণি নিচে-ডানে যাওয়ার অনুমতি দেওয়া হয়, তবে ইউনিক পাথের সমীকরণ কীভাবে পরিবর্তিত হবে?'
        },
        options: [
          {
            en: 'dp[r][c] = dp[r - 1][c] + dp[r][c - 1] + dp[r - 1][c - 1]',
            bn: 'dp[r][c] = dp[r - ১][c] + dp[r][c - ১] + dp[r - ১][c - ১]'
          },
          {
            en: 'dp[r][c] = dp[r - 1][c] * 3',
            bn: 'dp[r][c] = dp[r - ১][c] * ৩'
          },
          {
            en: 'dp[r][c] = Math.max(r, c)',
            bn: 'dp[r][c] = Math.max(r, c)'
          },
          {
            en: 'Diagonal moves make the problem unsolvable',
            bn: 'কোণাকুণি চলাচলের কারণে সমস্যাটির সমাধান অসম্ভব হয়ে পড়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Add the third incoming direction from (r - 1, c - 1).',
          bn: '(r - ১, c - ১) থেকে আসা তৃতীয় আগমন দিকটি যোগ করুন।'
        },
        explanation: {
          en: 'With diagonal steps enabled, cell (r, c) can be entered from the top, the left, or the diagonal top-left (r - 1, c - 1). The sum of all 3 incoming disjoint possibilities yields the new recurrence.',
          bn: 'কোণাকুণি হাঁটার সুযোগ থাকলে (r, c)-তে ওপর, বাম এবং কোণাকুণি ওপর-বাম (r - ১, c - ১) থেকে আসা যায়। এই ৩টি স্বাধীন সম্ভাবনার যোগফলই নতুন সমীকরণ তৈরি করে।'
        }
      },
      {
        id: 'dp-pth-qz-4',
        kind: 'mcq',
        topic: 'grid-dp-time-complexity',
        question: {
          en: 'What is the exact time complexity of computing Minimum Path Sum on an M x N grid?',
          bn: 'M x N গ্রিডে মিনিমাম পাথ সাম গণনার সঠিক টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(M * N) because every grid cell is evaluated exactly once in constant O(1) time',
            bn: 'O(M * N) কারণ প্রতিটি গ্রিড সেল ঠিক একবার ধ্রুবক O(1) সময়ে মূল্যায়িত হয়'
          },
          {
            en: 'O(2^(M * N)) exponential time',
            bn: 'O(২^(M * N)) সূচকীয় সময়'
          },
          {
            en: 'O(M + N) linear time',
            bn: 'O(M + N) সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(১) ধ্রুবক সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'There are M rows and N columns, with 1 addition and 1 min comparison per cell.',
          bn: 'M-টি সারি ও N-টি কলাম রয়েছে, প্রতি ঘরে ১টি যোগ ও ১টি তুলনা হয়।'
        },
        explanation: {
          en: 'The nested loops visit all M * N cells. For each cell, we perform one addition and one min comparison taking O(1) time, producing optimal O(M * N) overall runtime.',
          bn: 'নেস্টেড লুপগুলো সমস্ত M * N সেল পরিদর্শন করে। প্রতিটি সেলে একটি যোগ ও একটি তুলনা করতে ধ্রুবক O(1) সময় লাগে, ফলে মোট সময় O(M * N) হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'packs-and-the-pack',
    title: {
      en: 'Unbounded Knapsack & Subset Sum',
      bn: 'আনবাউন্ডেড ন্যাপস্যাক ও সাবসেট সাম'
    }
  }
};
