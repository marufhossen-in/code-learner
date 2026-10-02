import type { Lesson } from '../../../lib/types';

export const PacksAndThePackLesson: Lesson = {
  slug: 'packs-and-the-pack',
  tech: 'dynamic-programming',
  title: {
    en: 'Unbounded Knapsack & Coin Change Subsets',
    bn: 'আনবাউন্ডেড ন্যাপস্যাক ও কয়েন চেঞ্জ সাবসেট'
  },
  summary: {
    en: 'Master Unbounded Knapsack through forward loop iteration, understand the vital architectural distinction between Combinations and Permutations, and count subset ways.',
    bn: 'ফরওয়ার্ড লুপ ইটারেশনের মাধ্যমে আনবাউন্ডেড ন্যাপস্যাক শিখুন, কম্বিনেশন বনাম পারমিউটেশনের আর্কিটেকচারাল পার্থক্য বুঝুন এবং সাবসেটের উপায় গণনা করুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'unbounded-vs-bounded-concept',
      text: {
        en: 'Unbounded Knapsack vs 0/1 Knapsack',
        bn: 'আনবাউন্ডেড ন্যাপস্যাক বনাম ০/১ ন্যাপস্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the Unbounded Knapsack problem, you are provided items with weights and values, but unlike the classic 0/1 variant, you have an infinite supply of each unit. You may select any item zero, one, or multiple times. The difference in implementation between these two models boils down to a single detail: loop direction. In the bounded case you iterate backward; with unlimited quantities you iterate forward.',
        bn: 'আনবাউন্ডেড ন্যাপস্যাক সমস্যায় আপনাকে নির্দিষ্ট ওজন ও মানের আইটেম দেওয়া হয়, কিন্তু ক্লাসিক ০/১ রূপভেদের বিপরীতে এখানে প্রতিটি আইটেমের সীমাহীন যোগান থাকে। আপনি যেকোনো আইটেম শূন্য, এক বা একাধিকবার গ্রহণ করতে পারেন। এই দুই মডেলের মধ্যে কোডের মূল পার্থক্যটি কেবল একটি জায়গায়: লুপের দিক। সীমাবদ্ধ মডেলে লুপ পেছনের দিকে চলে, আর সীমাহীন পরিমাণে লুপ সামনের দিকে চলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'unbounded-reuse',
          def: {
            en: 'Allowing an item to be selected repeatedly without upper bound, mathematically modeling problems with unlimited inventory.',
            bn: 'সীমাহীন মজুতযুক্ত সমস্যায় কোনো ঊর্ধ্বসীমা ছাড়াই একটি আইটেম বারবার নির্বাচন করার অনুমতি দেওয়া।'
          }
        },
        {
          term: 'coin-change-combinations',
          def: {
            en: 'Counting the number of distinct unordered multisets of coins that sum to target amount, where order of selection does not matter.',
            bn: 'নির্দিষ্ট লক্ষ্য টাকা বানাতে কয়েনের ক্রম বিবেচনা না করে মোট কয়টি অনন্য গ্রুপ বা কম্বিনেশন তৈরি করা যায় তা গণনা করা।'
          }
        },
        {
          term: 'coin-change-permutations',
          def: {
            en: 'Counting the number of distinct ordered sequences of coins that sum to target amount, where order of selection produces different outcomes.',
            bn: 'নির্দিষ্ট লক্ষ্য টাকা তৈরিতে কয়েনের ক্রম বিবেচনা করে মোট কয়টি স্বতন্ত্র বিন্যাস বা পারমিউটেশন সম্ভব তা গণনা করা।'
          }
        },
        {
          term: 'forward-loop-dependency',
          def: {
            en: 'Iterating capacity forward from item weight up to target capacity, deliberately enabling a newly updated value to be reused within the same pass.',
            bn: 'ধারণক্ষমতাকে আইটেমের ওজন থেকে লক্ষ্য পর্যন্ত সামনের দিকে চালানো, যা একই পাসে একটি সদ্য আপডেটেড মান পুনরায় ব্যবহারের সুযোগ দেয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'combinations-vs-permutations-svg',
      title: {
        en: 'Coin Change for Target 5 with Coins [1, 2, 5]: 4 Combinations vs 9 Permutations',
        bn: 'কয়েন [১, ২, ৫] দিয়ে লক্ষ্য ৫: ৪টি কম্বিনেশন বনাম ৯টি পারমিউটেশন'
      },
      caption: {
        en: 'For amount 5 with coins [1, 2, 5]: Coin loop outer produces 4 unique combinations, whereas Amount loop outer produces 9 ordered permutations.',
        bn: 'কয়েন [১, ২, ৫] দিয়ে ৫ টাকার জন্য: কয়েন লুপ বাইরে থাকলে ৪টি অনন্য কম্বিনেশন হয়, আর অ্যামাউন্ট লুপ বাইরে থাকলে ৯টি পারমিউটেশন হয়।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="pckBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="combGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="permGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#pckBg)" stroke="#334155" stroke-width="2"/>

  <!-- Left Column: Combinations (4 Ways) -->
  <rect x="35" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="55" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">1. Combinations (Coin Loop Outer)</text>
  <text x="55" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Order does NOT matter: [1, 2] is identical to [2, 1]</text>

  <!-- 4 Combinations Cards -->
  <rect x="55" y="100" width="340" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="70" y="126" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff">Way 1: [5]</text>
  <text x="350" y="126" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="end">1 coin</text>

  <rect x="55" y="150" width="340" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="70" y="176" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff">Way 2: [2, 2, 1]</text>
  <text x="350" y="176" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="end">3 coins</text>

  <rect x="55" y="200" width="340" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="70" y="226" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff">Way 3: [2, 1, 1, 1]</text>
  <text x="350" y="226" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="end">4 coins</text>

  <rect x="55" y="250" width="340" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="70" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff">Way 4: [1, 1, 1, 1, 1]</text>
  <text x="350" y="276" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="end">5 coins</text>

  <text x="55" y="325" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#34d399">Total Unique Combinations: 4</text>

  <!-- Right Column: Permutations (9 Ways) -->
  <rect x="445" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="465" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#60a5fa">2. Permutations (Amount Loop Outer)</text>
  <text x="465" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Order DOES matter: [1, 2, 2] != [2, 1, 2] != [2, 2, 1]</text>

  <rect x="465" y="100" width="340" height="200" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="480" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• [5] (1 sequence)</text>
  <text x="480" y="150" font-family="system-ui, sans-serif" font-size="12" fill="#60a5fa">• [1, 2, 2], [2, 1, 2], [2, 2, 1] (3 sequences)</text>
  <text x="480" y="175" font-family="system-ui, sans-serif" font-size="12" fill="#60a5fa">• [2, 1, 1, 1], [1, 2, 1, 1], [1, 1, 2, 1], [1, 1, 1, 2] (4 seq)</text>
  <text x="480" y="200" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• [1, 1, 1, 1, 1] (1 sequence)</text>

  <line x1="480" y1="220" x2="780" y2="220" stroke="#334155" stroke-width="1"/>
  <text x="480" y="245" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Sum of Sequences: 1 + 3 + 4 + 1 = 9</text>
  <text x="480" y="270" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Each order is treated as a distinct route.</text>

  <text x="465" y="325" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa">Total Ordered Permutations: 9</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'loop-order-architecture',
      text: {
        en: 'The Architectural Impact of Loop Order',
        bn: 'লুপের ক্রমের আর্কিটেকচারাল প্রভাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The placement of nested loops dictates whether you calculate combinations or permutations. When the coin loop sits on the outside, coin 1 is evaluated across all amounts before coin 2 is ever considered. This guarantees that all instances of 1 precede 2 in the decision history, preventing duplicate permutations like [2, 1]. Conversely, when the amount loop is on the outside, every coin is evaluated at each step, naturally counting all permutations.',
        bn: 'নেস্টেড লুপের অবস্থান নির্ধারণ করে আপনি কম্বিনেশন গণনা করছেন নাকি পারমিউটেশন। কয়েনের লুপ বাইরে থাকলে কয়েন ১ সব টাকার পরিমাণের জন্য আগে প্রসেস হয় এবং তার পরেই কেবল কয়েন ২ বিবেচনা করা হয়। এটি নিশ্চিত করে যে সিদ্ধান্তের ইতিহাসে ১ সর্বদা ২-এর আগে আসে, ফলে [২, ১]-এর মতো পুনরাবৃত্তিময় পারমিউটেশন সৃষ্টি হতে পারে না। বিপরীতে টাকার পরিমাণের লুপ বাইরে থাকলে প্রতিটি ধাপে সব কয়েন পরীক্ষা করা হয়, যা স্বাভাবিকভাবেই সব পারমিউটেশন গণনা করে।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-coin-change-suite-ts',
      text: {
        en: 'Runnable TypeScript: Combinations, Permutations, and Minimum Coins',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: কম্বিনেশন, পারমিউটেশন ও সর্বনিম্ন কয়েন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Testing target 5 with coins [1, 2, 5]: outputs 4 combinations, 9 permutations, and minimum 1 coin.',
        bn: 'কয়েন [১, ২, ৫] দিয়ে লক্ষ্য ৫ পরীক্ষা: ৪টি কম্বিনেশন, ৯টি পারমিউটেশন এবং সর্বনিম্ন ১টি মুদ্রা ফলাফল প্রদর্শন।'
      },
      code: `// 1. Coin Change II: Count Unique Combinations (Coin loop outside)
function changeCombinations(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0);
  dp[0] = 1; // 1 way to make amount 0 (empty set)

  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) {
      dp[a] += dp[a - coin];
    }
  }

  return dp[amount];
}

// 2. Combination Sum IV: Count Permutations (Amount loop outside)
function changePermutations(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (a >= coin) {
        dp[a] += dp[a - coin];
      }
    }
  }

  return dp[amount];
}

// 3. Coin Change 1: Minimum Coins Needed
function minCoins(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) {
      dp[a] = Math.min(dp[a], dp[a - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test with denominations [1, 2, 5] and target amount 5
const testCoins = [1, 2, 5];
const targetAmount = 5;

const combinationsCount = changeCombinations(targetAmount, testCoins);
const permutationsCount = changePermutations(targetAmount, testCoins);
const minimumCoinCount = minCoins(targetAmount, testCoins);

console.log('Target 5 Unique Combinations:', combinationsCount); // 4
console.log('Target 5 Ordered Permutations:', permutationsCount); // 9
console.log('Target 5 Minimum Coins:', minimumCoinCount); // 1 (using coin 5)
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Unbounded Knapsack algorithms execute in O(N * W) time and O(W) auxiliary space. They are widely used in financial currency exchanges, production cutting stock problems, and network MTU packet fragmentation.',
        bn: 'আনবাউন্ডেড ন্যাপস্যাক অ্যালগরিদমগুলো O(N * W) সময় এবং O(W) মেমরিতে চলে। মুদ্রা বিনিময় ব্যবস্থা, কারখানায় উপাদান কাটার অপ্টিমাইজেশন এবং নেটওয়ার্ক প্যাকেট ফ্র্যাগমেন্টেশনে এগুলো ব্যাপকভাবে ব্যবহৃত হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-pck-ex-1',
      kind: 'mcq',
      topic: 'combinations-vs-permutations-loop-order',
      question: {
        en: 'Which nested loop arrangement calculates unique Coin Change Combinations rather than ordered Permutations?',
        bn: 'কোন নেস্টেড লুপের বিন্যাসটি সাজানো পারমিউটেশনের বদলে অনন্য কয়েন চেঞ্জ কম্বিনেশন গণনা করে?'
      },
      options: [
        {
          en: 'Coin loop on the outside, and target amount loop on the inside',
          bn: 'কয়েন লুপ বাইরে এবং লক্ষ্য টাকার পরিমাণের লুপ ভেতরে'
        },
        {
          en: 'Amount loop on the outside, and coin loop on the inside',
          bn: 'টাকার পরিমাণের লুপ বাইরে এবং কয়েন লুপ ভেতরে'
        },
        {
          en: 'Both loops iterating backward from target down to zero',
          bn: 'উভয় লুপ লক্ষ্য থেকে শূন্য পর্যন্ত পেছনের দিকে চালানো'
        },
        {
          en: 'Executing both loops simultaneously on parallel CPU threads',
          bn: 'প্যারালাল সিপিইউ থ্রেডে উভয় লুপ একসাথে চালানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Placing the coin loop outside enforces that each coin is processed in fixed sequence.',
        bn: 'কয়েন লুপ বাইরে রাখলে প্রতিটি কয়েন একটি নির্দিষ্ট ক্রমে প্রক্রিয়াজাত হয়।'
      },
      explanation: {
        en: 'Having coins in the outer loop ensures coin denominations are considered in a fixed order, preventing different permutations of the same multiset from being counted repeatedly.',
        bn: 'কয়েনগুলোকে বাইরের লুপে রাখলে কয়েনের ক্রম নির্দিষ্ট থাকে, ফলে একই সেটের ভিন্ন ভিন্ন পারমিউটেশন বারবার গণনা হওয়া বন্ধ হয়।'
      }
    },
    {
      id: 'dp-pck-ex-2',
      kind: 'mcq',
      topic: 'coin-change-trace-benchmark',
      question: {
        en: 'For target amount 5 with coin denominations [1, 2, 5], how many unique combinations exist versus ordered permutations?',
        bn: 'কয়েন [১, ২, ৫] দিয়ে ৫ টাকার জন্য কয়টি অনন্য কম্বিনেশন থাকে বনাম কয়টি পারমিউটেশন থাকে?'
      },
      options: [
        {
          en: '4 unique combinations versus 9 ordered permutations',
          bn: '৪টি অনন্য কম্বিনেশন বনাম ৯টি পারমিউটেশন'
        },
        {
          en: '10 combinations versus 10 permutations',
          bn: '১০টি কম্বিনেশন বনাম ১০টি পারমিউটেশন'
        },
        {
          en: '2 combinations versus 5 permutations',
          bn: '২টি কম্বিনেশন বনাম ৫টি পারমিউটেশন'
        },
        {
          en: '1 combination versus 1 permutation',
          bn: '১টি কম্বিনেশন বনাম ১টি পারমিউটেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The combinations are [5], [2,2,1], [2,1,1,1], and [1,1,1,1,1] (4 total).',
        bn: 'কম্বিনেশনগুলো হলো [৫], [২,২,১], [২,১,১,১] এবং [১,১,১,১,১] (মোট ৪টি)।'
      },
      explanation: {
        en: 'There are exactly 4 combinations: [5], [2, 2, 1], [2, 1, 1, 1], and [1, 1, 1, 1, 1]. When order matters, permutations branch out to 1 + 3 + 4 + 1 = 9 sequences.',
        bn: 'এখানে ঠিক ৪টি কম্বিনেশন রয়েছে: [৫], [২, ২, ১], [২, ১, ১, ১] এবং [১, ১, ১, ১, ১]। আর ক্রম বিবেচনা করলে পারমিউটেশন বিভক্ত হয়ে ১ + ৩ + ৪ + ১ = ৯টি বিন্যাস তৈরি করে।'
      }
    },
    {
      id: 'dp-pck-ex-3',
      kind: 'mcq',
      topic: 'unbounded-vs-01-loop-direction',
      question: {
        en: 'How does the capacity loop direction differ between 0/1 Knapsack and Unbounded Knapsack in a 1D DP array?',
        bn: '১ডি ডিপি অ্যারেতে ০/১ ন্যাপস্যাক এবং আনবাউন্ডেড ন্যাপস্যাকে ধারণক্ষমতার লুপের দিক কীভাবে আলাদা হয়?'
      },
      options: [
        {
          en: '0/1 Knapsack iterates backward (W down to weight) to prevent reuse; Unbounded Knapsack iterates forward (weight up to W) to permit reuse',
          bn: '০/১ ন্যাপস্যাকে লুপ পেছনের দিকে (W থেকে ওজন) চলে যাতে পুনঃব্যবহার না হয়; আর আনবাউন্ডেড ন্যাপস্যাকে সামনের দিকে (ওজন থেকে W) চলে যাতে পুনঃব্যবহার সম্ভব হয়'
        },
        {
          en: 'Both knapsacks iterate backward identically',
          bn: 'উভয় ন্যাপস্যাকেই লুপ অভিন্নভাবে পেছনের দিকে চলে'
        },
        {
          en: 'Unbounded Knapsack requires a while loop with a random step size',
          bn: 'আনবাউন্ডেড ন্যাপস্যাকে র্যান্ডম ধাপ বিশিষ্ট একটি while লুপ দরকার হয়'
        },
        {
          en: '0/1 Knapsack can only iterate forward',
          bn: '০/১ ন্যাপস্যাকে কেবল সামনের দিকেই লুপ চালানো যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Backward prevents reuse; forward enables reuse.',
        bn: 'পেছনের দিক পুনঃব্যবহার রোধ করে; সামনের দিক পুনঃব্যবহারের সুযোগ দেয়।'
      },
      explanation: {
        en: 'Forward iteration allows an item to be selected multiple times because earlier updates in the same pass are immediately visible to higher capacity cells.',
        bn: 'সামনের দিকে লুপ চালালে একই পাসে সদ্য আপডেট হওয়া মান বড় ক্ষমতার ঘরে তৎক্ষণাৎ পাওয়া যায়, ফলে আইটেমটি বারবার ব্যবহারের সুযোগ তৈরি হয়।'
      }
    },
    {
      id: 'dp-pck-ex-4',
      kind: 'mcq',
      topic: 'unbounded-knapsack-time-complexity',
      question: {
        en: 'What is the time and space complexity of the 1D space-optimized Unbounded Knapsack algorithm for N items and capacity W?',
        bn: 'N-টি আইটেম এবং W ধারণক্ষমতার জন্য ১ডি স্পেস-অপ্টিমাইজড আনবাউন্ডেড ন্যাপস্যাকের টাইম ও স্পেস কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(N * W) time and O(W) auxiliary space',
          bn: 'O(N * W) সময় এবং O(W) অতিরিক্ত স্পেস'
        },
        {
          en: 'O(2^(N+W)) time and O(1) space',
          bn: 'O(২^(N+W)) সময় এবং O(১) স্পেস'
        },
        {
          en: 'O(N^3) time and O(N^2) space',
          bn: 'O(N^3) সময় এবং O(N^2) স্পেস'
        },
        {
          en: 'O(W log N) time and O(N) space',
          bn: 'O(W log N) সময় এবং O(N) স্পেস'
        }
      ],
      answer: 0,
      hint: {
        en: 'The nested loops take N items times W capacity, storing an array of size W.',
        bn: 'নেস্টেড লুপ N গুণ W সময় নেয় এবং W সাইজের একটি অ্যারে সংরক্ষণ করে।'
      },
      explanation: {
        en: 'For each of the N items, the inner loop runs up to capacity W, performing O(1) arithmetic, requiring O(N * W) time and an array of size W + 1.',
        bn: 'প্রতিটি N আইটেমের জন্য অভ্যন্তরীণ লুপ W পর্যন্ত চলে ধ্রুবক সময়ে যোগ করে, ফলে O(N * W) সময় এবং W + ১ সাইজের অ্যারে লাগে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Unbounded Knapsack & Subsets Quiz',
      bn: 'আনবাউন্ডেড ন্যাপস্যাক ও সাবসেট কুইজ'
    },
    questions: [
      {
        id: 'dp-pck-qz-1',
        kind: 'mcq',
        topic: 'coin-change-unreachable-target',
        question: {
          en: 'In the minimum coins problem, what should the function return if it is mathematically impossible to form the target amount with the given coin denominations?',
          bn: 'সর্বনিম্ন মুদ্রা সমস্যায় যদি প্রদত্ত মুদ্রাগুলো দিয়ে লক্ষ্য টাকা তৈরি গাণিতিকভাবে অসম্ভব হয়, তবে ফাংশনটির কী রিটার্ন করা উচিত?'
        },
        options: [
          {
            en: '-1 (or a sentinel value indicating unreachable state), because dp[target] remains Infinity',
            bn: '-১ (বা অসম্ভব নির্দেশক সংকেত), কারণ dp[target] অপরিবর্তিতভাবে ইনফিনিটি থেকে যায়'
          },
          {
            en: '0 coins',
            bn: '০টি মুদ্রা'
          },
          {
            en: 'Throw a fatal syntax error',
            bn: 'মারাত্মক সিনট্যাক্স এরর নিক্ষেপ করা'
          },
          {
            en: 'Return the sum of all coin denominations',
            bn: 'সমস্ত মুদ্রার মানের যোগফল রিটার্ন করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard competitive programming conventions return -1 when no valid subset exists.',
          bn: 'কোনো বৈধ সাবসেট না থাকলে স্ট্যান্ডার্ড কনভেনশনে -১ রিটার্ন করা হয়।'
        },
        explanation: {
          en: 'If dp[amount] remains Infinity after all loops conclude, no combination of coins can sum to the target. Algorithms conventionally return -1 to denote an impossible target.',
          bn: 'সব লুপ শেষের পরও dp[amount] ইনফিনিটি থাকলে বুঝতে হবে কোনো মুদ্রা দিয়েই লক্ষ্য অর্জন সম্ভব নয়। তখন অসম্ভব বোঝাতে -১ রিটার্ন করা হয়।'
        }
      },
      {
        id: 'dp-pck-qz-2',
        kind: 'mcq',
        topic: 'cutting-stock-industrial-application',
        question: {
          en: 'How does the industrial Cutting Stock problem utilize Unbounded Knapsack dynamic programming?',
          bn: 'কারখানায় কাটিং স্টক সমস্যা কীভাবে আনবাউন্ডেড ন্যাপস্যাক ডায়নামিক প্রোগ্রামিং ব্যবহার করে?'
        },
        options: [
          {
            en: 'It determines how to cut raw standardized metal rods or paper rolls of length L into customer order lengths to maximize revenue while minimizing scrap waste',
            bn: 'স্ক্র্যাপ অপচয় কমিয়ে আয় সর্বোচ্চ করতে এটি L দৈর্ঘ্যের ধাতব রড বা কাগজের রোলকে গ্রাহকের অর্ডারের মাপে কীভাবে কাটতে হবে তা নির্ধারণ করে'
          },
          {
            en: 'It compresses MP3 audio files for radio broadcasting',
            bn: 'রেডিও সম্প্রচারের জন্য এটি এমপি৩ অডিও ফাইল সংকুচিত করে'
          },
          {
            en: 'It tracks GPS satellites orbiting the Earth',
            bn: 'এটি পৃথিবীর চারপাশের জিপিএস স্যাটেলাইট ট্র্যাক করে'
          },
          {
            en: 'It measures web browser page download latencies',
            bn: 'এটি ওয়েব ব্রাউজারের পেজ ডাউনলোড বিলম্ব পরিমাপ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cutting raw stock into multiple identical shorter customer lengths.',
          bn: 'কাঁচামালকে গ্রাহকের চাহিদামতো একাধিক ছোট টুকরোয় কেটে ভাগ করা।'
        },
        explanation: {
          en: 'In industrial manufacturing, raw stock materials have fixed lengths. By modeling customer pieces as items with lengths (weights) and prices (values), unbounded knapsack maximizes cutting profit.',
          bn: 'উৎপাদন শিল্পে কাঁচামালের নির্দিষ্ট দৈর্ঘ্য থাকে। টুকরোগুলোকে ওজন ও লাভ হিসেবে মডেল করে আনবাউন্ডেড ন্যাপস্যাক অপচয় কমিয়ে সর্বোচ্চ লাভ নিশ্চিত করে।'
        }
      },
      {
        id: 'dp-pck-qz-3',
        kind: 'mcq',
        topic: 'integer-overflow-in-ways-counting',
        question: {
          en: 'When counting combinations or permutations for large targets (A > 1000), what computational issue can arise in JavaScript and languages with 32-bit integers?',
          bn: 'বড় লক্ষ্য মানের (A > ১০০০) ক্ষেত্রে কম্বিনেশন বা পারমিউটেশন গণনার সময় জাভাস্ক্রিপ্ট বা ৩২-বিট ইন্টিজারে কোন সমস্যা তৈরি হতে পারে?'
        },
        options: [
          {
            en: 'Integer overflow beyond Number.MAX_SAFE_INTEGER or 32-bit limits, requiring BigInt or modulo arithmetic (such as modulo 10^9 + 7)',
            bn: 'নিরাপদ ইন্টিজার সীমা অতিক্রম করে ওভারফ্লো হওয়া, যার জন্য BigInt বা মডিউলো পাটিগণিত (যেমন ১০^৯ + ৭) প্রয়োজন'
          },
          {
            en: 'The operating system hard drive runs out of physical space',
            bn: 'অপারেটিং সিস্টেমের হার্ড ড্রাইভে জায়গা শেষ হয়ে যাওয়া'
          },
          {
            en: 'The array permanently locks into read-only mode',
            bn: 'অ্যারেটি স্থায়ীভাবে রিড-অনলি মোডে লক হয়ে যাওয়া'
          },
          {
            en: 'The computer display screen turns black',
            bn: 'কম্পিউটার ডিসপ্লে স্ক্রিন কালো হয়ে যাওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Combinatorial counts grow exponentially and exceed integer precision limits.',
          bn: 'কম্বিনেশনের সংখ্যা সূচকীয় হারে বাড়ে এবং ইন্টিজারের সক্ষমতা ছাড়িয়ে যায়।'
        },
        explanation: {
          en: 'The number of ways grows exponentially with target size. In competitive programming, solutions take values modulo 10^9 + 7 or use BigInt to prevent integer overflow.',
          bn: 'লক্ষ্য বাড়ার সাথে সাথে উপায়ের সংখ্যা সূচকীয় হারে বাড়ে। সংখ্যা উপচে পড়া ঠেকাতে প্রোগ্রামাররা BigInt অথবা ১০^৯ + ৭ মডিউলো ব্যবহার করেন।'
        }
      },
      {
        id: 'dp-pck-qz-4',
        kind: 'mcq',
        topic: 'bounded-vs-unbounded-knapsack-generalization',
        question: {
          en: 'What is the Bounded Knapsack problem, and how can it be converted into 0/1 Knapsack efficiently?',
          bn: 'বাউন্ডেড ন্যাপস্যাক সমস্যা কী এবং কীভাবে এটিকে দক্ষতার সাথে ০/১ ন্যাপস্যাকে রূপান্তর করা যায়?'
        },
        options: [
          {
            en: 'Each item has a limited count k_i copies; it can be decomposed into 0/1 items using binary grouping (powers of 2: 1, 2, 4, ...) in O(log k_i) time',
            bn: 'প্রতিটি আইটেমের নির্দিষ্ট k_i সংখ্যক কপি থাকে; বাইনারি গ্রুপিং (২-এর ঘাত: ১, ২, ৪, ...) ব্যবহার করে O(log k_i) সময়ে ০/১ আইটেমে ভাগ করা যায়'
          },
          {
            en: 'All item weights are multiplied by negative 1',
            bn: 'সমস্ত আইটেমের ওজনকে ঋণাত্মক ১ দিয়ে গুণ করা'
          },
          {
            en: 'Bounded knapsack can only be solved using quantum annealing',
            bn: 'বাউন্ডেড ন্যাপস্যাক কেবল কোয়ান্টাম অ্যানিলিং দিয়ে সমাধান সম্ভব'
          },
          {
            en: 'Item values are sorted in reverse alphabetical order',
            bn: 'আইটেমের মানগুলোকে উল্টো বর্ণানুক্রমিক ক্রমে সাজানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Powers of 2 allow representing any integer up to k using logarithmic items.',
          bn: '২-এর ঘাত ব্যবহার করে যেকোনো সংখ্যাকে লগারিদমিক সংখ্যক আইটেমে প্রকাশ করা যায়।'
        },
        explanation: {
          en: 'Instead of duplicating an item k times, binary splitting creates bundles of sizes 1, 2, 4, 8, ... up to remainder. Any quantity up to k can be formed from these bundles, solving Bounded Knapsack in O(N * W * log K).',
          bn: 'একটি আইটেমকে k বার কপি না করে ১, ২, ৪, ৮ ... আকারে বাইনারি বান্ডিল বানালে যেকোনো পরিমাণ তৈরি করা যায়, ফলে সমস্যাটি O(N * W * log K) সময়ে সমাধান হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'orders-and-the-order',
    title: {
      en: 'String DP: Longest Common Subsequence & Edit Distance',
      bn: 'স্ট্রিং ডিপি: লংগেস্ট কমন সাবসিকোয়েন্স ও এডিট ডিসট্যান্স'
    }
  }
};
