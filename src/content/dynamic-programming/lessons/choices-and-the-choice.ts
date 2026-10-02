import type { Lesson } from '../../../lib/types';

export const ChoicesAndTheChoiceLesson: Lesson = {
  slug: 'choices-and-the-choice',
  tech: 'dynamic-programming',
  title: {
    en: 'The 0/1 Knapsack Problem & Space Optimization',
    bn: '০/১ ন্যাপস্যাক সমস্যা ও স্পেস অপ্টিমাইজেশন'
  },
  summary: {
    en: 'Master the foundational 2D dynamic programming matrix for the 0/1 Knapsack problem, backtrack to recover selected items, and compress memory into a single 1D array.',
    bn: '০/১ ন্যাপস্যাক সমস্যার জন্য ২ডি ডায়নামিক প্রোগ্রামিং ম্যাট্রিক্স আয়ত্ত করুন, নির্বাচিত আইটেম পুনরুদ্ধার করতে ব্যাকট্র্যাক করুন এবং মেমরি ১ডি অ্যারেতে সংকুচিত করুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'the-01-knapsack-formulation',
      text: {
        en: 'The Discrete 0/1 Knapsack Problem',
        bn: 'ডিসক্রিট ০/১ ন্যাপস্যাক সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the discrete 0/1 Knapsack problem, you are given a container with an integer weight capacity W and N items, each with a specific weight and profit value. Unlike the fractional knapsack where items can be subdivided continuously, here you must make a binary choice: either take the entire item (1) or leave it behind (0). Because greedy density heuristics fail to consider residual capacity, we must use 2D Dynamic Programming.',
        bn: 'ডিসক্রিট বা পৃথক ০/১ ন্যাপস্যাক সমস্যায় আপনাকে একটি নির্দিষ্ট পূর্ণসংখ্যার ধারণক্ষমতা W এবং N-টি আইটেম দেওয়া হয়, যার প্রতিটির নির্দিষ্ট ওজন ও আর্থিক লাভ থাকে। ফ্র্যাকশনাল ন্যাপস্যাকে পণ্যকে নিরবচ্ছিন্নভাবে ভাগ করা যেত, কিন্তু এখানে আপনাকে একটি বাইনারি সিদ্ধান্ত নিতে হয়: হয় পুরো আইটেমটি গ্রহণ করতে হবে (১), নয়তো পুরোপুরি বাদ দিতে হবে (০)। যেহেতু গ্রিডি কৌশল অবশিষ্ট ফাঁকা স্থান বিবেচনা করতে পারে না, তাই আমাদের ২ডি ডায়নামিক প্রোগ্রামিং ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'binary-choice-decision',
          def: {
            en: 'The discrete constraint that each item can be selected at most once (either 0 copies or 1 copy).',
            bn: 'এমন একটি পৃথক সীমাবদ্ধতা যেখানে প্রতিটি আইটেম সর্বোচ্চ একবার নির্বাচন করা যায় (হয় ০টি অথবা ১টি)।'
          }
        },
        {
          term: '2d-state-matrix',
          def: {
            en: 'A table where dp[i][w] represents the maximum achievable profit considering a prefix of the first i items with a capacity limit of w.',
            bn: 'একটি টেবিল যেখানে dp[i][w] নির্দেশ করে প্রথম i-টি আইটেম এবং সর্বোচ্চ w ধারণক্ষমতা বিবেচনায় অর্জিত সর্বাধিক লাভ।'
          }
        },
        {
          term: 'reverse-iteration-trick',
          def: {
            en: 'Iterating capacity backward from W down to item weight in a 1D array, preventing an item from being reused multiple times in the same step.',
            bn: '১ডি অ্যারেতে ধারণক্ষমতা পেছনের দিকে (W থেকে আইটেমের ওজন পর্যন্ত) চালানো, যা একই পদক্ষেপে একটি আইটেম বারবার ব্যবহারের ভুল প্রতিরোধ করে।'
          }
        },
        {
          term: 'pseudo-polynomial-time',
          def: {
            en: 'Complexity O(N * W) that is polynomial in the magnitude of the numeric capacity W, but exponential in the number of bits required to represent W.',
            bn: 'কমপ্লেক্সিটি O(N * W) যা ধারণক্ষমতা W-এর সংখ্যাগত মানের ক্ষেত্রে বহুপদী, কিন্তু W-এর বিট সংখ্যার সাপেক্ষে সূচকীয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'knapsack-2d-table-svg',
      title: {
        en: '0/1 Knapsack 2D DP Table: 4 Items, Capacity 7, Optimal Value 9',
        bn: '০/১ ন্যাপস্যাক ২ডি ডিপি টেবিল: ৪টি আইটেম, ৭ ধারণক্ষমতা, অপ্টিমাল মান ৯'
      },
      caption: {
        en: 'Capacity 7 with items [(wt 1, val 1), (wt 3, val 4), (wt 4, val 5), (wt 5, val 7)]. Optimal cell dp[4][7] = 9 (Item 2 + Item 3).',
        bn: '৭ ধারণক্ষমতায় আইটেম [(ওজন ১, মান ১), (ওজন ৩, মান ৪), (ওজন ৪, মান ৫), (ওজন ৫, মান ৭)]। সর্বোত্তম ফলাফল dp[৪][৭] = ৯ (আইটেম ২ + আইটেম ৩)।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="k2dBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="optCellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#k2dBg)" stroke="#334155" stroke-width="2"/>

  <!-- Left: DP Table Visualization -->
  <text x="35" y="40" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#38bdf8">2D DP Matrix dp[item][weight] (Capacity W = 7)</text>

  <!-- Table Headers (w = 0 to 7) -->
  <!-- Col labels: w=0 to 7. Cell size = 38px width, 32px height -->
  <!-- Header row at y = 60 -->
  <rect x="130" y="55" width="304" height="24" rx="4" fill="#1e293b"/>
  <text x="149" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">w=0</text>
  <text x="187" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">w=1</text>
  <text x="225" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">w=2</text>
  <text x="263" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" font-weight="bold" text-anchor="middle">w=3</text>
  <text x="301" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">w=4</text>
  <text x="339" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">w=5</text>
  <text x="377" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">w=6</text>
  <text x="415" y="71" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" font-weight="bold" text-anchor="middle">w=7</text>

  <!-- Row 0: No items -->
  <text x="110" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="end">i=0 (none)</text>
  <rect x="130" y="85" width="304" height="26" fill="#0f172a" stroke="#334155" stroke-width="0.5"/>
  <text x="149" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="187" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="225" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="263" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="301" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="339" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="377" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="415" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">0</text>

  <!-- Row 1: Item 1 (wt 1, val 1) -->
  <text x="110" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="end">i=1 (wt 1, v 1)</text>
  <rect x="130" y="115" width="304" height="26" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
  <text x="149" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">0</text>
  <text x="187" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="225" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="263" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="301" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="339" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="377" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="415" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>

  <!-- Row 2: Item 2 (wt 3, val 4) -->
  <text x="110" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="end">i=2 (wt 3, v 4)</text>
  <rect x="130" y="145" width="304" height="26" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
  <text x="149" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">0</text>
  <text x="187" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="225" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <!-- Highlight dp[2][3] = 4 in Blue -->
  <rect x="244" y="145" width="38" height="26" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="263" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="middle">4</text>
  <text x="301" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">5</text>
  <text x="339" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">5</text>
  <text x="377" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">5</text>
  <text x="415" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">5</text>

  <!-- Row 3: Item 3 (wt 4, val 5) -->
  <text x="110" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="end">i=3 (wt 4, v 5)</text>
  <rect x="130" y="175" width="304" height="26" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
  <text x="149" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">0</text>
  <text x="187" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="225" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="263" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">4</text>
  <text x="301" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">5</text>
  <text x="339" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">6</text>
  <text x="377" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">6</text>
  <!-- Highlight dp[3][7] = 9 in Green -->
  <rect x="396" y="175" width="38" height="26" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
  <text x="415" y="192" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">9</text>

  <!-- Row 4: Item 4 (wt 5, val 7) -->
  <text x="110" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="end">i=4 (wt 5, v 7)</text>
  <rect x="130" y="205" width="304" height="26" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
  <text x="149" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">0</text>
  <text x="187" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="225" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">1</text>
  <text x="263" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">4</text>
  <text x="301" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">5</text>
  <text x="339" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">7</text>
  <text x="377" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">8</text>
  <!-- Final Answer dp[4][7] = 9 -->
  <rect x="396" y="205" width="38" height="26" fill="url(#optCellGrad)" stroke="#10b981" stroke-width="2"/>
  <text x="415" y="222" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">9</text>

  <!-- Right: Decision Anatomy Card -->
  <rect x="465" y="55" width="365" height="290" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="485" y="85" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#38bdf8">Transition Anatomy at dp[3][7]:</text>

  <text x="485" y="115" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">Item 3: weight = 4, value = 5</text>
  <text x="485" y="140" font-family="system-ui, sans-serif" font-size="12" fill="#fca5a5">Choice A (Exclude Item 3):</text>
  <text x="500" y="160" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">dp[2][7] = 5</text>

  <text x="485" y="190" font-family="system-ui, sans-serif" font-size="12" fill="#86efac">Choice B (Include Item 3):</text>
  <text x="500" y="210" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">val(Item 3) + dp[2][7 - 4] = 5 + dp[2][3]</text>
  <text x="500" y="228" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">= 5 + 4 = 9</text>

  <rect x="485" y="245" width="325" height="40" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1"/>
  <text x="500" y="270" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">dp[3][7] = max(5, 9) = 9 (Optimal!)</text>

  <text x="485" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Selected Items: Item 2 (wt 3, val 4) + Item 3 (wt 4, val 5)</text>
  <text x="485" y="332" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Total Weight: 3 + 4 = 7 kg | Total Value: 9</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'recurrence-and-reverse-loop',
      text: {
        en: 'The Recurrence and Reverse-Loop Memory Optimization',
        bn: 'রিকারেন্স সমীকরণ ও রিভার্স-লুপ মেমরি অপ্টিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The standard 2D recurrence relation is dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight_i] + value_i). Notice that calculating row i requires values strictly from the immediately preceding row i - 1. We can collapse the table into a single 1D array of size W + 1 if we iterate capacity w backwards in descending order from W down to weight_i. Because we update from right to left, the subproblem dp[w - weight_i] still contains the un-updated value from row i - 1, preventing the item from being mistakenly added more than once.',
        bn: 'স্ট্যান্ডার্ড ২ডি রিকারেন্স সমীকরণটি হলো dp[i][w] = Math.max(dp[i - ১][w], dp[i - ১][w - weight_i] + value_i)। খেয়াল করুন যে row i এর মান গণনায় কেবল তার ঠিক আগের row i - ১ এর মান লাগে। আমরা পুরো ২ডি টেবিলটিকে একটি মাত্র W + ১ আকারের ১ডি অ্যারেতে নামিয়ে আনতে পারি যদি আমরা ধারণক্ষমতা w-কে পেছনের দিকে বড় থেকে ছোট ক্রমে (W থেকে weight_i পর্যন্ত) চালাই। ডান থেকে বামে আপডেট করার কারণে dp[w - weight_i] তখনো আগের সারির অপরিবর্তিত মান ধরে রাখে, যা একই আইটেম ভুলবশত একাধিকবার ব্যবহারের সুযোগ বন্ধ করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-knapsack-01-ts',
      text: {
        en: 'Runnable TypeScript: 2D Matrix and 1D Compressed Solvers',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ২ডি ম্যাট্রিক্স ও ১ডি সংকুচিত সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Executing 0/1 Knapsack with capacity 7 on 4 items, achieving maximum value 9 and recovering selected items.',
        bn: '৪টি আইটেমে ৭ ধারণক্ষমতায় ০/১ ন্যাপস্যাক চালিয়ে সর্বোচ্চ মান ৯ অর্জন ও নির্বাচিত আইটেম পুনরুদ্ধার।'
      },
      code: `interface KnapsackItem {
  name: string;
  weight: number;
  value: number;
}

// 1. Full 2D DP Table with Item Reconstruction
function knapsack2D(items: KnapsackItem[], capacity: number): { maxValue: number; selected: string[] } {
  const n = items.length;
  // Initialize table with dimensions (n + 1) x (capacity + 1)
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

  // Backtrack to recover selected items
  const selected: string[] = [];
  let w = capacity;
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selected.push(items[i - 1].name);
      w -= items[i - 1].weight;
    }
  }

  return { maxValue: dp[n][capacity], selected: selected.reverse() };
}

// 2. 1D Array Space-Optimized Solver O(W) space
function knapsack1D(items: KnapsackItem[], capacity: number): number {
  const dp: number[] = new Array(capacity + 1).fill(0);

  for (const item of items) {
    // Reverse loop from capacity down to item weight!
    for (let w = capacity; w >= item.weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
    }
  }

  return dp[capacity];
}

// 4 Items from diagram: [(1, 1), (3, 4), (4, 5), (5, 7)]
const knapsackItems: KnapsackItem[] = [
  { name: 'Item 1', weight: 1, value: 1 },
  { name: 'Item 2', weight: 3, value: 4 },
  { name: 'Item 3', weight: 4, value: 5 },
  { name: 'Item 4', weight: 5, value: 7 }
];

const totalCapacity = 7;
const res2D = knapsack2D(knapsackItems, totalCapacity);
const res1D = knapsack1D(knapsackItems, totalCapacity);

console.log('2D DP Max Value:', res2D.maxValue); // 9
console.log('Selected Items:', res2D.selected); // ['Item 2', 'Item 3']
console.log('1D DP Compressed Max Value:', res1D); // 9
console.log('Do both implementations match?', res2D.maxValue === res1D); // true
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'The reverse iteration order in 1D knapsack is paramount. If you iterate forward from item.weight up to capacity, you inadvertently compute the Unbounded Knapsack problem, where an item can be chosen infinitely many times.',
        bn: '১ডি ন্যাপস্যাকে পেছনের দিকে লুপ চালানো অত্যন্ত গুরুত্বপূর্ণ। আপনি যদি সামনের দিকে (item.weight থেকে capacity পর্যন্ত) চালান, তবে অজান্তেই আনবাউন্ডেড ন্যাপস্যাক হিসাব হয়ে যাবে যেখানে একই আইটেম অসংখ্যবার ব্যবহারের সুযোগ তৈরি হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-chc-ex-1',
      kind: 'mcq',
      topic: '01-knapsack-recurrence',
      question: {
        en: 'What is the standard state transition equation for the 0/1 Knapsack problem when considering item i with weight w_i and value v_i?',
        bn: 'ওজন w_i এবং মান v_i বিশিষ্ট আইটেম i বিবেচনায় ০/১ ন্যাপস্যাকের স্ট্যান্ডার্ড স্টেট ট্রানজিশন সমীকরণ কোনটি?'
      },
      options: [
        {
          en: 'dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - w_i] + v_i)',
          bn: 'dp[i][w] = Math.max(dp[i - ১][w], dp[i - ১][w - w_i] + v_i)'
        },
        {
          en: 'dp[i][w] = dp[i - 1][w] + dp[i - 1][w - w_i]',
          bn: 'dp[i][w] = dp[i - ১][w] + dp[i - ১][w - w_i]'
        },
        {
          en: 'dp[i][w] = Math.min(dp[i - 1][w], v_i)',
          bn: 'dp[i][w] = Math.min(dp[i - ১][w], v_i)'
        },
        {
          en: 'dp[i][w] = dp[i][w - 1] * v_i',
          bn: 'dp[i][w] = dp[i][w - ১] * v_i'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compare excluding item i (dp[i-1][w]) with including item i (dp[i-1][w - w_i] + v_i).',
        bn: 'আইটেম i বাদ দেওয়া (dp[i-1][w]) বনাম আইটেম i নেওয়ার (dp[i-1][w - w_i] + v_i) মধ্যে সর্বোচ্চটি নিন।'
      },
      explanation: {
        en: 'If item i is excluded, profit is dp[i - 1][w]. If item i is included, profit is value v_i plus the optimal solution to the remaining capacity dp[i - 1][w - w_i].',
        bn: 'আইটেম i বাদ দিলে লাভ থাকে dp[i - ১][w]। আর আইটেমটি গ্রহণ করলে লাভ হয় v_i এবং বাকি ক্ষমতার সর্বোত্তম সমাধান dp[i - ১][w - w_i] যোগ হয়।'
      }
    },
    {
      id: 'dp-chc-ex-2',
      kind: 'mcq',
      topic: '01-knapsack-trace-result',
      question: {
        en: 'With capacity 7 and items [(1, 1), (3, 4), (4, 5), (5, 7)], what is the maximum possible value and which items are taken?',
        bn: '৭ ধারণক্ষমতা এবং আইটেম [(১, ১), (৩, ৪), (৪, ৫), (৫, ৭)] নিয়ে সর্বোচ্চ সম্ভাব্য মান কত এবং কোন আইটেমগুলো নেওয়া হয়?'
      },
      options: [
        {
          en: 'Maximum value 9, taking Item 2 (wt 3, val 4) and Item 3 (wt 4, val 5)',
          bn: 'সর্বোচ্চ মান ৯, আইটেম ২ (ওজন ৩, মান ৪) এবং আইটেম ৩ (ওজন ৪, মান ৫) নিয়ে'
        },
        {
          en: 'Maximum value 7, taking Item 4 alone',
          bn: 'সর্বোচ্চ মান ৭, কেবল আইটেম ৪ নিয়ে'
        },
        {
          en: 'Maximum value 17 (taking all items)',
          bn: 'সর্বোচ্চ মান ১৭ (সমস্ত আইটেম নিয়ে)'
        },
        {
          en: 'Maximum value 8, taking Item 1 and Item 4',
          bn: 'সর্বোচ্চ মান ৮, আইটেম ১ এবং আইটেম ৪ নিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Item 2 + Item 3 uses 3 + 4 = 7 kg and gives 4 + 5 = 9 value.',
        bn: 'আইটেম ২ + আইটেম ৩ নেয় ৩ + ৪ = ৭ কেজি এবং ৪ + ৫ = ৯ মান দেয়।'
      },
      explanation: {
        en: 'Pairing Item 2 (weight 3, value 4) with Item 3 (weight 4, value 5) consumes exactly 7kg capacity and yields value 9, strictly beating Item 4 alone (7) or Item 1 + Item 4 (8).',
        bn: 'আইটেম ২ (ওজন ৩, মান ৪) এবং আইটেম ৩ (ওজন ৪, মান ৫) একসাথে ঠিক ৭ কেজি ক্ষমতা ব্যবহার করে ৯ মান দেয়, যা আইটেম ৪ একা (৭) বা আইটেম ১ ও ৪ (৮) এর চেয়ে বেশি।'
      }
    },
    {
      id: 'dp-chc-ex-3',
      kind: 'mcq',
      topic: 'why-1d-knapsack-iterates-backward',
      question: {
        en: 'Why must the inner capacity loop iterate backward (from W down to weight) in the 1D space-optimized 0/1 Knapsack?',
        bn: '১ডি স্পেস-অপ্টিমাইজড ০/১ ন্যাপস্যাকে কেন অভ্যন্তরীণ ধারণক্ষমতার লুপটি পেছনের দিকে (W থেকে ওজন পর্যন্ত) চালাতে হয়?'
      },
      options: [
        {
          en: 'To ensure that each item is used at most once; iterating forward would overwrite earlier capacity cells and reuse the same item repeatedly',
          bn: 'যাতে প্রতিটি আইটেম সর্বোচ্চ একবার ব্যবহার নিশ্চিত হয়; সামনের দিকে চালালে আগের ঘরগুলো ওভাররাইট হয়ে একই আইটেম বারবার ব্যবহৃত হয়ে যেত'
        },
        {
          en: 'Because arrays in JavaScript cannot be indexed forward',
          bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারেকে সামনের দিকে ইনডেক্স করা যায় না'
        },
        {
          en: 'Because backward loops consume zero megabytes of electricity',
          bn: 'কারণ উল্টো লুপ শূন্য মেগাবাইট বিদ্যুৎ খরচ করে'
        },
        {
          en: 'To sort the array in alphabetical order',
          bn: 'অ্যারেকে বর্ণানুক্রমিক ক্রমে সাজানোর জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Updating right-to-left ensures values to the left still belong to row i - 1.',
        bn: 'ডান থেকে বামে আপডেট করলে বামের মানগুলো আগের সারির মান ধরে রাখে।'
      },
      explanation: {
        en: 'If we iterate backward, dp[w - weight] reflects the decision state from the previous item. Iterating forward would use the newly updated value, accidentally allowing unbounded reuse.',
        bn: 'পেছনের দিকে চালালে dp[w - weight] পূর্ববর্তী আইটেমের স্টেট প্রকাশ করে। সামনের দিকে চালালে সদ্য আপডেটের ফলে একই আইটেম একাধিকবার ব্যবহৃত হয়ে যেত।'
      }
    },
    {
      id: 'dp-chc-ex-4',
      kind: 'mcq',
      topic: '01-knapsack-time-complexity',
      question: {
        en: 'What is the time complexity of the dynamic programming solution for the 0/1 Knapsack problem with N items and capacity W?',
        bn: 'N-টি আইটেম এবং W ধারণক্ষমতার জন্য ০/১ ন্যাপস্যাকের ডায়নামিক প্রোগ্রামিং সমাধানের টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(N * W) pseudo-polynomial time',
          bn: 'O(N * W) সিউডো-বহুপদী সময়'
        },
        {
          en: 'O(2^N) exponential time',
          bn: 'O(২^N) সূচকীয় সময়'
        },
        {
          en: 'O(N log N) comparison sort time',
          bn: 'O(N log N) সময়'
        },
        {
          en: 'O(1) constant lookup time',
          bn: 'O(১) ধ্রুবক সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'There are N items and W capacity states, with each cell computed in O(1).',
        bn: 'N-টি আইটেম এবং W-টি স্টেট রয়েছে, প্রতিটিতে O(1) সময় লাগে।'
      },
      explanation: {
        en: 'The algorithm evaluates an (N + 1) by (W + 1) matrix, performing a constant-time max comparison for each cell, yielding O(N * W) total runtime.',
        bn: 'অ্যালগরিদমটি একটি (N + ১) গুণ (W + ১) আকারের ম্যাট্রিক্সের প্রতিটি ঘরে ধ্রুবক সময়ে তুলনা চালায়, যার ফলে মোট সময় O(N * W) হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: '0/1 Knapsack Mastery Quiz',
      bn: '০/১ ন্যাপস্যাক দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'dp-chc-qz-1',
        kind: 'mcq',
        topic: 'pseudo-polynomial-meaning',
        question: {
          en: 'Why is the O(N * W) time complexity of 0/1 Knapsack classified as "pseudo-polynomial" rather than strictly polynomial?',
          bn: '০/১ ন্যাপস্যাকের O(N * W) টাইম কমপ্লেক্সিটি কেন বিশুদ্ধ বহুপদী না হয়ে "সিউডো-বহুপদী" হিসেবে শ্রেণীবদ্ধ হয়?'
        },
        options: [
          {
            en: 'Because W is a numeric value whose input representation requires only log2(W) bits; runtime is exponential relative to the input bit length',
            bn: 'কারণ W একটি সংখ্যা যার ইনপুট আকারে কেবল log2(W) বিট লাগে; ইনপুটের বিট দৈর্ঘ্যের সাপেক্ষে এটি একটি সূচকীয় সময়'
          },
          {
            en: 'Because polynomials cannot have multiplication signs',
            bn: 'কারণ বহুপদীতে গুণের চিহ্ন থাকতে পারে না'
          },
          {
            en: 'Because knapsacks are physical objects made of fabric',
            bn: 'কারণ ব্যাগ হলো কাপড়ের তৈরি বাস্তব বস্তু'
          },
          {
            en: 'Because the algorithm only runs on Tuesdays',
            bn: 'কারণ অ্যালগরিদমটি কেবল মঙ্গলবারে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Complexity is measured against the number of input bits.',
          bn: 'কমপ্লেক্সিটি ইনপুট বিটের সংখ্যার ওপর ভিত্তি করে মাপা হয়।'
        },
        explanation: {
          en: 'True polynomial time is polynomial in input bit length. If W = 10^18, W requires only 60 bits of input, yet N * W operations is computationally impossible.',
          bn: 'প্রকৃত পলিনমিয়াল টাইম ইনপুট বিট দৈর্ঘ্যের ওপর নির্ভর করে। W = 10^18 হলে ইনপুট সাইজ মাত্র ৬০ বিট, কিন্তু N * W অপারেশন চালানো কার্যত অসম্ভব।'
        }
      },
      {
        id: 'dp-chc-qz-2',
        kind: 'mcq',
        topic: 'subset-sum-reduction',
        question: {
          en: 'How can the Subset Sum decision problem (determining if a subset sums to target T) be modeled using 0/1 Knapsack?',
          bn: 'সাবসেট সাম সমস্যাটি (একটি সাবসেটের যোগফল T হয় কিনা) কীভাবে ০/১ ন্যাপস্যাকের মাধ্যমে প্রকাশ করা যায়?'
        },
        options: [
          {
            en: 'Set each item value equal to its weight (value_i = weight_i) with capacity T; a subset sums to T if and only if the maximum knapsack value equals T',
            bn: 'প্রতিটি আইটেমের মান ওজনকে সমান (মান = ওজন) এবং ধারণক্ষমতা T ধরে নেওয়া; সর্বোচ্চ মান T হলে যোগফল T সম্ভব'
          },
          {
            en: 'Multiply all array elements by 0',
            bn: 'অ্যারের সব উপাদানকে ০ দিয়ে গুণ করে'
          },
          {
            en: 'Sort the array backwards and return the first element',
            bn: 'অ্যারে উল্টো সাজিয়ে প্রথম উপাদানটি রিটার্ন করে'
          },
          {
            en: 'Subset Sum cannot be solved with Dynamic Programming',
            bn: 'সাবসেট সাম ডায়নামিক প্রোগ্রামিং দিয়ে সমাধান করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'If weight = value, the maximum value can never exceed capacity T.',
          bn: 'ওজন ও মান সমান হলে সর্বোচ্চ মান কখনোই ধারণক্ষমতা T কে অতিক্রম করতে পারে না।'
        },
        explanation: {
          en: 'By assigning weight_i = value_i = num, the knapsack achieves value T if and only if there is a subset of numbers that packs capacity T with zero wasted room.',
          bn: 'ওজন ও মান সমান ধরে নিলে ন্যাপস্যাক কেবল তখনই T মান অর্জন করবে যদি এমন একটি সাবসেট থাকে যা ঠিক T ধারণক্ষমতা কোনো অপচয় ছাড়া পূর্ণ করে।'
        }
      },
      {
        id: 'dp-chc-qz-3',
        kind: 'mcq',
        topic: 'knapsack-backtracking-algorithm',
        question: {
          en: 'How does backtracking reconstruct the exact list of chosen items from a completed 2D knapsack matrix?',
          bn: 'একটি সম্পন্ন ২ডি ন্যাপস্যাক ম্যাট্রিক্স থেকে ব্যাকট্র্যাকিং কীভাবে নির্বাচিত আইটেমগুলোর সঠিক তালিকা পুনরুদ্ধার করে?'
        },
        options: [
          {
            en: 'Start at dp[n][capacity]: if dp[i][w] !== dp[i - 1][w], item i was included; add it to list and deduct its weight w -= weight_i, then decrement i',
            bn: 'dp[n][capacity] থেকে শুরু: যদি dp[i][w] !== dp[i - ১][w] হয় তবে আইটেম i নেওয়া হয়েছিল; তালিকায় যোগ করে ওজন বিয়োগ করুন w -= weight_i'
          },
          {
            en: 'Pick all items whose index is an even number',
            bn: 'যেসব আইটেমের ইনডেক্স জোড় সংখ্যা তাদের সবাইকে নির্বাচন করা'
          },
          {
            en: 'Randomly guess items until weights sum to capacity',
            bn: 'ওজন পূরণ না হওয়া পর্যন্ত এলোমেলোভাবে আইটেম অনুমান করা'
          },
          {
            en: 'Take the first item and the last item only',
            bn: 'কেবল প্রথম এবং শেষ আইটেমটি গ্রহণ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'A change in value between rows i and i-1 proves item i was included.',
          bn: 'সারি i এবং i-1 এর মানের পার্থক্য প্রমাণ করে আইটেম i নেওয়া হয়েছিল।'
        },
        explanation: {
          en: 'If dp[i][w] equals dp[i - 1][w], the item was not needed to achieve that value. If they differ, item i was included in the optimal set.',
          bn: 'যদি dp[i][w] এর মান dp[i - ১][w] এর সমান হয়, তবে আইটেমটি নেওয়া হয়নি। মান ভিন্ন হলে নিশ্চিতভাবে আইটেম i অপ্টিমাল সেটে অন্তর্ভুক্ত ছিল।'
        }
      },
      {
        id: 'dp-chc-qz-4',
        kind: 'mcq',
        topic: 'fractional-vs-01-knapsack-contrast',
        question: {
          en: 'Under which capacity condition can 0/1 Knapsack be solved in true polynomial time O(N)?',
          bn: 'কোন ধারণক্ষমতার শর্তে ০/১ ন্যাপস্যাক প্রকৃত বহুপদী সময় O(N)-এ সমাধান করা সম্ভব?'
        },
        options: [
          {
            en: 'When capacity W is bounded by a small constant (W = O(1)), making N * W proportional strictly to N',
            bn: 'যখন ধারণক্ষমতা W একটি ক্ষুদ্র ধ্রুবক দ্বারা সীমাবদ্ধ (W = O(1)), ফলে N * W সরাসরি N এর সমানুপাতিক হয়'
          },
          {
            en: 'When all item weights are irrational numbers',
            bn: 'যখন সমস্ত আইটেমের ওজন অমূলদ সংখ্যা হয়'
          },
          {
            en: 'When the computer has 128 CPU cores',
            bn: 'যখন কম্পিউটারে ১২৮টি সিপিইউ কোর থাকে'
          },
          {
            en: 'When items are sorted alphabetically',
            bn: 'যখন আইটেমগুলোকে বর্ণানুক্রমিকভাবে সাজানো হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If W is a fixed small constant, N * W is just O(N).',
          bn: 'W যদি একটি নির্দিষ্ট ছোট ধ্রুবক হয়, তবে N * W কার্যত O(N)।'
        },
        explanation: {
          en: 'If W is bounded by a constant independent of N, the table width is constant, reducing runtime to O(N * constant) = O(N).',
          bn: 'W যদি N এর ওপর নির্ভরশীল না হয়ে একটি নির্দিষ্ট ধ্রুবক হয়, তবে টেবিলের প্রস্থ নির্দিষ্ট থাকে এবং সামগ্রিক কমপ্লেক্সিটি O(N) হয়ে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'paths-and-the-path',
    title: {
      en: 'Grid DP & 2D Coordinates',
      bn: 'গ্রিড ডিপি ও ২ডি স্থানাঙ্ক'
    }
  }
};
