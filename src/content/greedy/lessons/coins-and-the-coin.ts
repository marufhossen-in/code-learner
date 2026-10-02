import type { Lesson } from '../../../lib/types';

export const CoinsAndTheCoinLesson: Lesson = {
  slug: 'coins-and-the-coin',
  tech: 'greedy',
  title: {
    en: 'Greedy Thinking: The Greedy Choice Property & Coins',
    bn: 'গ্রিডি চিন্তাভাবনা: গ্রিডি চয়েস প্রপার্টি ও মুদ্রা'
  },
  summary: {
    en: 'A beginner introduction to greedy algorithms: understand why making the locally best choice works for canonical coin systems, and discover the exact counterexamples where greedy fails.',
    bn: 'গ্রিডি অ্যালগরিদমের মৌলিক পরিচিতি: কেন ক্যানোনিকাল মুদ্রা ব্যবস্থায় স্থানীয় সেরা সিদ্ধান্ত কার্যকর হয় তা জানুন এবং যেসব পাল্টা দৃষ্টান্তে গ্রিডি ব্যর্থ হয় তা আবিষ্কার করুন।'
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-greedy',
      text: {
        en: 'What Is a Greedy Algorithm?',
        bn: 'গ্রিডি অ্যালগরিদম কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A greedy algorithm is an algorithmic paradigm that builds a solution step by step, at each stage selecting the locally optimal choice that appears most advantageous at that exact moment. The defining characteristic of greedy algorithms is irrevocability: once a choice is committed, the algorithm never backtracks, reconsider past decisions, or explores alternate branches.',
        bn: 'গ্রিডি অ্যালগরিদম হলো এমন একটি কৌশল যা ধাপে ধাপে সমাধান গড়ে তোলে, যেখানে প্রতিটি পদক্ষেপে সেই মুহূর্তে সবচেয়ে লাভজনক মনে হওয়া স্থানীয় অপ্টিমাল বা সেরা সিদ্ধান্তটি বেছে নেওয়া হয়। গ্রিডি অ্যালগরিদমের সবচেয়ে প্রধান বৈশিষ্ট্য হলো অপরিবর্তনীয়তা: একবার একটি সিদ্ধান্ত গৃহীত হলে অ্যালগরিদমটি আর কখনোই পেছনে ফিরে তাকায় না, পুরনো সিদ্ধান্ত বদলায় না বা বিকল্প শাখা পরীক্ষা করে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'greedy-choice-property',
          def: {
            en: 'The property whereby a globally optimal solution can be assembled by iteratively making locally optimal choices without backtracking.',
            bn: 'এমন একটি বৈশিষ্ট্য যার মাধ্যমে পেছনে ফিরে না তাকিয়ে বারবার স্থানীয় সেরা সিদ্ধান্ত নেওয়ার মাধ্যমে সামগ্রিক অপ্টিমাল সমাধান তৈরি করা সম্ভব হয়।'
          }
        },
        {
          term: 'optimal-substructure',
          def: {
            en: 'The structural property where an optimal solution to the overall problem contains within it optimal solutions to its nested subproblems.',
            bn: 'সমস্যার এমন একটি কাঠামোগত বৈশিষ্ট্য যেখানে মূল সমস্যার সর্বোত্তম সমাধানের ভেতরে তার অন্তর্ভুক্ত উপ-সমস্যাগুলোরও সর্বোত্তম সমাধান বিদ্যমান থাকে।'
          }
        },
        {
          term: 'canonical-coin-system',
          def: {
            en: 'A set of coin denominations for which the greedy change-making algorithm is guaranteed to yield the minimum total number of coins for every amount.',
            bn: 'মুদ্রার এমন একটি সেট যার জন্য গ্রিডি অ্যালগরিদম যেকোনো টাকার পরিমাণের বিপরীতে নিশ্চিতভাবে সর্বনিম্ন সংখ্যক মুদ্রা প্রদান করে।'
          }
        },
        {
          term: 'exchange-argument',
          def: {
            en: 'A mathematical proof technique showing that an optimal solution can be gradually transformed into the greedy solution without degrading total quality.',
            bn: 'একটি গাণিতিক প্রমাণ পদ্ধতি যা দেখায় যে কোনো মানের ক্ষতি না করেই যেকোনো অপ্টিমাল সমাধানকে ধাপে ধাপে গ্রিডি সমাধানে রূপান্তরিত করা যায়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'canonical-vs-non-canonical-svg',
      title: {
        en: 'Canonical vs Non-Canonical Coin Systems: Where Greedy Wins and Fails',
        bn: 'ক্যানোনিকাল বনাম নন-ক্যানোনিকাল মুদ্রা ব্যবস্থা: যেখানে গ্রিডি জেতে এবং হারে'
      },
      caption: {
        en: 'For amount 6 with coins [1, 3, 4], greedy takes 4 + 1 + 1 = 3 coins, whereas optimal DP takes 3 + 3 = 2 coins.',
        bn: 'মুদ্রা [১, ৩, ৪] দিয়ে ৬ টাকার জন্য গ্রিডি নেয় ৪ + ১ + ১ = ৩টি মুদ্রা, যেখানে অপ্টিমাল ডিপি নেয় ৩ + ৩ = ২টি মুদ্রা।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#bgGrad)" stroke="#334155" stroke-width="2"/>

  <!-- Left: Canonical System (US Coins: 25, 10, 5, 1 for amount 41) -->
  <rect x="25" y="25" width="385" height="330" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="45" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">Canonical: Coins [25, 10, 5, 1] Target: 41</text>
  <text x="45" y="78" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Greedy Choice always matches Global Optimum</text>

  <!-- Step 1: 41 - 25 = 16 -->
  <circle cx="75" cy="125" r="24" fill="url(#greenGrad)"/>
  <text x="75" y="131" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">25</text>
  <text x="115" y="122" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#e2e8f0">Pick 25 (max &lt;= 41)</text>
  <text x="115" y="138" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Remaining: 16</text>

  <!-- Step 2: 16 - 10 = 6 -->
  <circle cx="75" cy="185" r="20" fill="url(#greenGrad)"/>
  <text x="75" y="190" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">10</text>
  <text x="115" y="182" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#e2e8f0">Pick 10 (max &lt;= 16)</text>
  <text x="115" y="198" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Remaining: 6</text>

  <!-- Step 3: 6 - 5 = 1 -->
  <circle cx="75" cy="245" r="17" fill="url(#greenGrad)"/>
  <text x="75" y="250" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">5</text>
  <text x="115" y="242" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#e2e8f0">Pick 5 (max &lt;= 6)</text>
  <text x="115" y="258" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Remaining: 1</text>

  <!-- Step 4: 1 - 1 = 0 -->
  <circle cx="75" cy="300" r="14" fill="url(#greenGrad)"/>
  <text x="75" y="304" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
  <text x="115" y="298" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#e2e8f0">Pick 1 (max &lt;= 1)</text>
  <text x="115" y="314" font-family="system-ui, sans-serif" font-size="11" fill="#34d399">Done: Total 4 coins (Optimal!)</text>

  <!-- Right: Non-Canonical System (Coins: 1, 3, 4 for target 6) -->
  <rect x="450" y="25" width="385" height="330" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="470" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#fb7185">Non-Canonical: Coins [1, 3, 4] Target: 6</text>
  <text x="470" y="78" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Greedy traps the solver in a suboptimal state</text>

  <!-- Greedy Branch -->
  <rect x="470" y="100" width="345" height="100" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1"/>
  <text x="485" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f43f5e">Greedy Strategy: Takes largest coin 4 first</text>
  <circle cx="510" cy="160" r="18" fill="url(#roseGrad)"/>
  <text x="510" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">4</text>
  <circle cx="560" cy="160" r="14" fill="url(#roseGrad)"/>
  <text x="560" y="164" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">1</text>
  <circle cx="605" cy="160" r="14" fill="url(#roseGrad)"/>
  <text x="605" y="164" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">1</text>
  <text x="640" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fca5a5">= 3 coins (Failed!)</text>

  <!-- Optimal Branch -->
  <rect x="470" y="220" width="345" height="100" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
  <text x="485" y="245" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">Global Optimal: Overlooks coin 4</text>
  <circle cx="515" cy="280" r="18" fill="url(#greenGrad)"/>
  <text x="515" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3</text>
  <circle cx="570" cy="280" r="18" fill="url(#greenGrad)"/>
  <text x="570" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3</text>
  <text x="615" y="285" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">= 2 coins (Optimal!)</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'greedy-vs-others',
      text: {
        en: 'Greedy vs Dynamic Programming vs Backtracking',
        bn: 'গ্রিডি বনাম ডায়নামিক প্রোগ্রামিং বনাম ব্যাকট্র্যাকিং'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Greedy Algorithm', bn: 'গ্রিডি অ্যালগরিদম' },
        { en: 'Dynamic Programming', bn: 'ডায়নামিক প্রোগ্রামিং' },
        { en: 'Backtracking', bn: 'ব্যাকট্র্যাকিং' }
      ],
      rows: [
        [
          { en: 'Decision Strategy', bn: 'সিদ্ধান্ত কৌশল' },
          { en: 'Makes 1 immediate local choice; never reconsiders', bn: 'তাত্ক্ষণিক ১টি লোকাল সিদ্ধান্ত নেয়; বদলায় না' },
          { en: 'Evaluates all overlapping subproblems; caches results', bn: 'সব ওভারল্যাপিং উপ-সমস্যা মূল্যায়ন করে ক্যাশ করে' },
          { en: 'Explores all choices; reverts and undoes invalid paths', bn: 'সব পছন্দ পরীক্ষা করে; বাতিল হলে পদচিহ্ন মুছে ফিরে আসে' }
        ],
        [
          { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
          { en: 'Typically fast: O(N) or O(N log N) after initial sort', bn: 'সাধারণত দ্রুত: সর্টের পর O(N) বা O(N log N)' },
          { en: 'Polynomial: O(N * W) or O(N^2) dependent on state space', bn: 'বহুপদী: স্টেট স্পেসের ওপর ভিত্তি করে O(N * W)' },
          { en: 'Exponential: O(2^N) or O(N!) searching the full tree', bn: 'সূচকীয়: সম্পূর্ণ ট্রিতে O(2^N) বা O(N!)' }
        ],
        [
          { en: 'Optimality Guarantee', bn: 'অপ্টিমালিটি নিশ্চয়তা' },
          { en: 'Only guaranteed if Greedy Choice Property holds', bn: 'কেবল গ্রিডি চয়েস বৈশিষ্ট্য সত্য হলেই নিশ্চিত' },
          { en: 'Always finds global optimum if subproblems overlap', bn: 'ওভারল্যাপিং উপ-সমস্যা থাকলে সর্বদা সঠিক উত্তর দেয়' },
          { en: 'Guaranteed optimal by exhaustive evaluation', bn: 'পূর্ণাঙ্গ মূল্যায়নের মাধ্যমে সর্বদা সঠিক উত্তর নিশ্চিত করে' }
        ],
        [
          { en: 'Memory Footprint', bn: 'মেমরির আকার' },
          { en: 'Minimal O(1) auxiliary space beyond input', bn: 'ইনপুটের বাইরে ন্যূনতম O(1) অতিরিক্ত মেমরি' },
          { en: 'Moderate O(N) or O(N * W) table/memo storage', bn: 'টেবিল বা মেমো স্টোরেজে মাঝারি O(N) মেমরি' },
          { en: 'O(Depth) recursion stack frames', bn: 'রিকাল স্ট্যাকের গভীরতা অনুযায়ী O(Depth) মেমরি' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'step-by-step-trace',
      text: {
        en: 'Step-by-Step Execution of Greedy Coin Change',
        bn: 'গ্রিডি কয়েন চেঞ্জের ধাপভিত্তিক সম্পাদন'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Sort Denominations in Descending Order',
            bn: 'মুদ্রাগুলোকে বড় থেকে ছোট ক্রমে সাজান'
          },
          text: {
            en: 'Given available coin denominations [1, 5, 10, 25], sort them in descending order [25, 10, 5, 1] so the largest possible denomination is evaluated first.',
            bn: 'উপলব্ধ মুদ্রা [১, ৫, ১০, ২৫] থাকলে সেগুলোকে বড় থেকে ছোট ক্রমে [২৫, ১০, ৫, ১] সাজিয়ে নিন যাতে সবচেয়ে বড় মুদ্রাটি প্রথমে যাচাই করা যায়।'
          }
        },
        {
          title: {
            en: 'Select the Largest Usable Denomination',
            bn: 'ব্যবহারযোগ্য বৃহত্তম মুদ্রাটি নির্বাচন করুন'
          },
          text: {
            en: 'Examine current remaining amount. Greedily pick the maximum denomination coin <= remaining. Compute coinCount = Math.floor(remaining / coin).',
            bn: 'বর্তমান অবশিষ্ট পরিমাণ পর্যবেক্ষণ করুন। অবশিষ্টের চেয়ে ছোট বা সমান বৃহত্তম মুদ্রাটি নির্বাচন করে কয়েন সংখ্যা = Math.floor(remaining / coin) হিসাব করুন।'
          }
        },
        {
          title: {
            en: 'Deduct and Recurse on Remaining Value',
            bn: 'মান বিয়োগ করুন এবং অবশিষ্টাংশ নিয়ে এগিয়ে যান'
          },
          text: {
            en: 'Subtract (coinCount * coin) from remaining amount. Advance to next smaller denomination. Continue until remaining reaches 0.',
            bn: 'অবশিষ্ট টাকা থেকে (coinCount * coin) বিয়োগ করুন। পরবর্তী ছোট মুদ্রায় যান এবং অবশিষ্ট শূন্য না হওয়া পর্যন্ত প্রক্রিয়াটি চালিয়ে যান।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'code-simulation',
      text: {
        en: 'Runnable TypeScript: Canonical vs Non-Canonical Benchmark',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ক্যানোনিকাল বনাম নন-ক্যানোনিকাল বেঞ্চমার্ক'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Simulating greedy change-making on US coins (41 cents) vs a counterexample system ([1, 3, 4] for 6 cents).',
        bn: 'মার্কিন মুদ্রা (৪১ সেন্ট) বনাম একটি পাল্টা ব্যবস্থা ([১, ৩, ৪] মুদ্রায় ৬ সেন্ট)-এ গ্রিডি অ্যালগরিদম পরীক্ষা।'
      },
      code: `// Interface representing change output
interface ChangeResult {
  totalCoins: number;
  distribution: Record<number, number>;
}

// Greedy coin change solver
function greedyChange(denominations: number[], amount: number): ChangeResult {
  // Sort descending: largest coins first
  const sorted = [...denominations].sort((a, b) => b - a);
  let remaining = amount;
  const distribution: Record<number, number> = {};
  let totalCoins = 0;

  for (const coin of sorted) {
    if (remaining >= coin) {
      const count = Math.floor(remaining / coin);
      distribution[coin] = count;
      totalCoins += count;
      remaining %= coin;
    }
  }

  return { totalCoins, distribution };
}

// Dynamic programming optimal solver for comparison
function dpChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i >= c && dp[i - c] + 1 < dp[i]) {
        dp[i] = dp[i - c] + 1;
      }
    }
  }

  return dp[amount];
}

// 1. Canonical US coin system: [25, 10, 5, 1] for amount 41
const usCoins = [25, 10, 5, 1];
const targetUs = 41;
const usResult = greedyChange(usCoins, targetUs);
console.log('US 41 cents greedy total coins:', usResult.totalCoins); // 4
console.log('US 41 distribution:', usResult.distribution); // { '25': 1, '10': 1, '5': 1, '1': 1 }

// 2. Non-canonical counterexample: [1, 3, 4] for amount 6
const flawedCoins = [1, 3, 4];
const targetFlawed = 6;
const flawedGreedy = greedyChange(flawedCoins, targetFlawed);
const flawedOptimal = dpChange(flawedCoins, targetFlawed);

console.log('Flawed coins target 6 greedy total:', flawedGreedy.totalCoins); // 3 (4 + 1 + 1)
console.log('Flawed coins target 6 DP optimal:', flawedOptimal); // 2 (3 + 3)
console.log('Did greedy find global optimal?', flawedGreedy.totalCoins === flawedOptimal); // false
`
    },
    {
      type: 'callout',
      variant: 'warning',
      text: {
        en: 'Greedy algorithms are deceptively intuitive. Because a greedy decision feels obvious and natural at step 1, engineers frequently assume it guarantees global optimality. Never ship a greedy solution to production without either an exchange argument proof or an automated fuzzer comparing greedy outputs against an exhaustive DP reference on random test inputs.',
        bn: 'গ্রিডি অ্যালগরিদম দেখতে খুব সহজ মনে হয়। প্রথম ধাপে সিদ্ধান্তটি স্বাভাবিক মনে হওয়ায় প্রোগ্রামাররা প্রায়ই ধরে নেন যে এটি সর্বদা সঠিক উত্তর দেবে। এক্সচেঞ্জ আর্গুমেন্ট দিয়ে তাত্ত্বিকভাবে প্রমাণ না করে অথবা র্যান্ডম টেস্ট ইনপুটে ডিপি রেফারেন্সের সাথে তুলনা না করে প্রোডাকশনে কখনোই গ্রিডি সমাধান চালু করবেন না।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-coin-ex-1',
      kind: 'mcq',
      topic: 'greedy-definition-and-backtracking',
      question: {
        en: 'What is the primary defining characteristic of a pure greedy algorithm during decision making?',
        bn: 'সিদ্ধান্ত গ্রহণের সময় একটি বিশুদ্ধ গ্রিডি অ্যালগরিদমের প্রধান বৈশিষ্ট্য কোনটি?'
      },
      options: [
        {
          en: 'It makes an irrevocable locally optimal choice at each step without exploring alternative paths or backtracking',
          bn: 'এটি বিকল্প পথ অনুসন্ধান বা ব্যাকট্র্যাকিং ছাড়াই প্রতিটি ধাপে একটি অপরিবর্তনীয় স্থানীয় সেরা সিদ্ধান্ত নেয়'
        },
        {
          en: 'It builds a full state cache table using memoization',
          bn: 'এটি মেমোইজেশন ব্যবহার করে সম্পূর্ণ স্টেট ক্যাশ টেবিল তৈরি করে'
        },
        {
          en: 'It tests all 2^N subsets before returning an answer',
          bn: 'উত্তর দেওয়ার আগে এটি সমস্ত ২^N সাবসেট পরীক্ষা করে'
        },
        {
          en: 'It restarts from scratch if an error occurs',
          bn: 'কোনো ত্রুটি হলে এটি শুরু থেকে পুনরায় গণনা শুরু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Greedy choices are made immediately and never revisited.',
        bn: 'গ্রিডি সিদ্ধান্ত তাত্ক্ষণিকভাবে নেওয়া হয় এবং কখনো পুনর্বিবেচনা করা হয় না।'
      },
      explanation: {
        en: 'Greedy algorithms make myopic, locally optimal choices at each stage. They never reconsider past decisions or backtrack, giving them high speed at the cost of requiring special problem structure.',
        bn: 'গ্রিডি অ্যালগরিদম প্রতিটি ধাপে নিকটবর্তী সেরা সিদ্ধান্ত নেয়। তারা কখনোই অতীত সিদ্ধান্ত বদলায় না বা ব্যাকট্র্যাক করে না, যা তাদের অত্যন্ত দ্রুত গতি দেয়।'
      }
    },
    {
      id: 'grd-coin-ex-2',
      kind: 'mcq',
      topic: 'coin-change-counterexample',
      question: {
        en: 'Given coin denominations [1, 3, 4], what coin sequence does the greedy algorithm produce for an amount of 6, and how many coins does it use?',
        bn: 'মুদ্রা ব্যবস্থা [১, ৩, ৪]-এ ৬ টাকার জন্য গ্রিডি অ্যালগরিদম কোন মুদ্রার ক্রম তৈরি করে এবং মোট কয়টি মুদ্রা ব্যবহার করে?'
      },
      options: [
        {
          en: 'Sequence [4, 1, 1] using a total of 3 coins',
          bn: 'মোট ৩টি মুদ্রা ব্যবহার করে [৪, ১, ১] ক্রম'
        },
        {
          en: 'Sequence [3, 3] using a total of 2 coins',
          bn: 'মোট ২টি মুদ্রা ব্যবহার করে [৩, ৩] ক্রম'
        },
        {
          en: 'Sequence [4, 2] using a total of 2 coins',
          bn: 'মোট ২টি মুদ্রা ব্যবহার করে [৪, ২] ক্রম'
        },
        {
          en: 'Sequence [1, 1, 1, 1, 1, 1] using 6 coins',
          bn: '৬টি মুদ্রা ব্যবহার করে [১, ১, ১, ১, ১, ১] ক্রম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Greedy always takes the largest coin that does not exceed 6 first.',
        bn: 'গ্রিডি সর্বদা প্রথমে ৬ এর চেয়ে ছোট বা সমান বৃহত্তম মুদ্রাটি গ্রহণ করে।'
      },
      explanation: {
        en: 'Greedy selects the largest coin 4 first (remaining 2), then 1 (remaining 1), then 1 (remaining 0), using 3 coins. The optimal choice is 3 + 3 = 6 using only 2 coins.',
        bn: 'গ্রিডি প্রথমে সবচেয়ে বড় মুদ্রা ৪ নেয় (অবশিষ্ট ২), এরপর ১ (অবশিষ্ট ১) এবং শেষে ১ (অবশিষ্ট ০), ফলে মোট ৩টি মুদ্রা লাগে। অথচ অপ্টিমাল হলো ৩ + ৩ = ৬ যেখানে মাত্র ২টি মুদ্রা দরকার।'
      }
    },
    {
      id: 'grd-coin-ex-3',
      kind: 'mcq',
      topic: 'two-pillars-of-greedy-algorithms',
      question: {
        en: 'Which two mathematical properties must a computational problem exhibit to guarantee that a greedy algorithm will find a globally optimal solution?',
        bn: 'একটি গ্রিডি অ্যালগরিদম যাতে গ্লোবালি অপ্টিমাল সমাধান নিশ্চিত করতে পারে তার জন্য একটি সমস্যার কোন দুটি গাণিতিক বৈশিষ্ট্য থাকা আবশ্যক?'
      },
      options: [
        {
          en: 'Greedy Choice Property and Optimal Substructure',
          bn: 'গ্রিডি চয়েস প্রপার্টি এবং অপ্টিমাল সাবস্ট্রাকচার'
        },
        {
          en: 'Asynchronous concurrency and thread safety',
          bn: 'অ্যাসিনক্রোনাস কনকারেন্সি এবং থ্রেড সুরক্ষা'
        },
        {
          en: 'Overlapping subproblems and bottom-up tabulation',
          bn: 'ওভারল্যাপিং সাব-প্রবলেম এবং বটম-আপ ট্যাবুলেশন'
        },
        {
          en: 'Infinite recursion and tail call elimination',
          bn: 'ইনফিনিট রিকার্শন এবং টেল কল এলিমিনেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'One property governs local decisions; the other governs subproblem composition.',
        bn: 'একটি বৈশিষ্ট্য স্থানীয় সিদ্ধান্ত নিয়ন্ত্রণ করে; অন্যটি উপ-সমস্যার সমন্বয় নির্দেশ করে।'
      },
      explanation: {
        en: 'A greedy algorithm is guaranteed optimal if and only if the problem demonstrates the Greedy Choice Property (local choices lead to global optimality) and Optimal Substructure (optimal global solutions contain optimal subproblem solutions).',
        bn: 'একটি সমস্যা কেবল তখনই গ্রিডিতে অপ্টিমাল উত্তর দিতে পারে যখন তাতে গ্রিডি চয়েস প্রপার্টি এবং অপ্টিমাল সাবস্ট্রাকচার উভয় বৈশিষ্ট্যই বিদ্যমান থাকে।'
      }
    },
    {
      id: 'grd-coin-ex-4',
      kind: 'mcq',
      topic: 'exchange-argument-proof',
      question: {
        en: 'What is the core idea of an exchange argument when proving the correctness of a greedy algorithm?',
        bn: 'গ্রিডি অ্যালগরিদমের সঠিকতা প্রমাণে এক্সচেঞ্জ আর্গুমেন্টের মূল ধারণা কোনটি?'
      },
      options: [
        {
          en: 'Show that any putative optimal solution can have its non-greedy decisions swapped with greedy decisions without diminishing its objective value',
          bn: 'দেখানো যে যেকোনো ধারণাকৃত অপ্টিমাল সমাধানের নন-গ্রিডি সিদ্ধান্তকে মান না কমিয়ে গ্রিডি সিদ্ধান্ত দ্বারা প্রতিস্থাপন করা যায়'
        },
        {
          en: 'Exchange RAM memory blocks with the operating system virtual swap space',
          bn: 'অপারেটিং সিস্টেমের ভার্চুয়াল সোয়াপ স্পেসের সাথে র‍্যাম মেমরি ব্লক বিনিময় করা'
        },
        {
          en: 'Swap input data arrays into a hash table for fast lookups',
          bn: 'দ্রুত অনুসন্ধানের জন্য ইনপুট ডেটা অ্যারেকে হ্যাশ টেবিলে রূপান্তর করা'
        },
        {
          en: 'Reverse the order of array elements using double pointer traversal',
          bn: 'ডাবল পয়েন্টার ট্রাভার্সাল ব্যবহার করে অ্যারের উপাদানগুলোর ক্রম উল্টে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'It shows the greedy choice is at least as good as any other candidate.',
        bn: 'এটি প্রমাণ করে যে গ্রিডি সিদ্ধান্ত অন্য যেকোনো বিকল্পের সমান বা তার চেয়ে ভালো।'
      },
      explanation: {
        en: 'The exchange argument begins with an arbitrary optimal solution OPT. It proves that replacing the first differing choice in OPT with the greedy choice G produces a valid solution of equal or superior quality, establishing that G is optimal.',
        bn: 'এক্সচেঞ্জ আর্গুমেন্ট যেকোনো অপ্টিমাল সমাধান দিয়ে শুরু করে। এটি প্রমাণ করে যে সেই সমাধানের প্রথম অমিল হওয়া উপাদানটিকে গ্রিডি পছন্দ দিয়ে প্রতিস্থাপন করলে মানের কোনো অবনতি হয় না।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Greedy Choice Property Quiz',
      bn: 'গ্রিডি চয়েস প্রপার্টি কুইজ'
    },
    questions: [
      {
        id: 'grd-coin-qz-1',
        kind: 'mcq',
        topic: 'canonical-coin-systems-definition',
        question: {
          en: 'Why is the standard United States currency system [25, 10, 5, 1] considered canonical?',
          bn: 'মার্কিন মুদ্রা ব্যবস্থা [২৫, ১০, ৫, ১] কেন ক্যানোনিকাল হিসেবে বিবেচিত হয়?'
        },
        options: [
          {
            en: 'Because the greedy algorithm is mathematically guaranteed to find the minimum coin count for every possible integer amount',
            bn: 'কারণ গ্রিডি অ্যালগরিদম প্রতিটি সম্ভাব্য পূর্ণসংখ্যা পরিমাণের জন্য সর্বনিম্ন মুদ্রা সংখ্যা খুঁজে পেতে গাণিতিকভাবে প্রমাণিত'
          },
          {
            en: 'Because the coins are minted from precious metals like copper and silver',
            bn: 'কারণ মুদ্রাগুলো তামা ও রূপার মতো মূল্যবান ধাতু দিয়ে তৈরি'
          },
          {
            en: 'Because the denominations double in value at each step',
            bn: 'কারণ প্রতিটি ধাপে মুদ্রার মান দ্বিগুণ হয়'
          },
          {
            en: 'Because coin values are prime numbers',
            bn: 'কারণ মুদ্রার মানগুলো মৌলিক সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Canonical means greedy works universally without failure.',
          bn: 'ক্যানোনিকাল অর্থ হলো গ্রিডি কোনো ব্যর্থতা ছাড়াই সার্বজনীনভাবে কাজ করে।'
        },
        explanation: {
          en: 'A coin denomination system is canonical when greedy change-making always matches the global minimum coin count. US coins satisfy Chang-Gillum conditions for canonicality.',
          bn: 'একটি মুদ্রা ব্যবস্থা ক্যানোনিকাল হয় যখন গ্রিডি সমাধান সর্বদা সর্বনিম্ন মুদ্রার সমান হয়। মার্কিন মুদ্রা ব্যবস্থা এই গাণিতিক শর্ত পূরণ করে।'
        }
      },
      {
        id: 'grd-coin-qz-2',
        kind: 'mcq',
        topic: 'greedy-vs-dp-time-complexity',
        question: {
          en: 'What is the time complexity of the greedy coin change algorithm with N sorted denominations compared to dynamic programming for amount W?',
          bn: 'W পরিমাণের টাকার জন্য ডায়নামিক প্রোগ্রামিংয়ের তুলনায় N-টি সাজানো মুদ্রায় গ্রিডি কয়েন চেঞ্জের টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'Greedy takes O(N) linear time, whereas dynamic programming takes O(N * W) pseudo-polynomial time',
            bn: 'গ্রিডিতে O(N) লিনিয়ার সময় লাগে, যেখানে ডায়নামিক প্রোগ্রামিংয়ে O(N * W) সময় লাগে'
          },
          {
            en: 'Greedy takes O(2^N) exponential time, whereas dynamic programming takes O(1) time',
            bn: 'গ্রিডিতে O(২^N) সূচকীয় সময় লাগে, যেখানে ডায়নামিক প্রোগ্রামিংয়ে O(১) সময় লাগে'
          },
          {
            en: 'Both approaches have identical O(W^2) time complexity',
            bn: 'উভয় পদ্ধতিরই অভিন্ন O(W^2) টাইম কমপ্লেক্সিটি রয়েছে'
          },
          {
            en: 'Greedy requires sorting in O(N!) time',
            bn: 'গ্রিডিতে O(N!) সময়ে সাজানোর প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Greedy inspects each coin once; DP iterates through the entire amount table.',
          bn: 'গ্রিডি প্রতিটি মুদ্রা একবার পরীক্ষা করে; ডিপি সম্পূর্ণ টেবিল জুড়ে ঘুরে আসে।'
        },
        explanation: {
          en: 'Once sorted, greedy evaluates each of the N denominations in a single linear pass taking O(N) time and O(1) space. DP must populate a table up to W, taking O(N * W) time.',
          bn: 'মুদ্রাগুলো সাজানো থাকলে গ্রিডি মাত্র একবার স্ক্যান করে O(N) সময় ও O(1) স্পেসে কাজ শেষ করে। কিন্তু ডিপিকে W পরিমাণ পর্যন্ত টেবিল পূরণ করতে O(N * W) সময় নিতে হয়।'
        }
      },
      {
        id: 'grd-coin-qz-3',
        kind: 'mcq',
        topic: 'flawed-greedy-counterexample-10-6-1',
        question: {
          en: 'Consider denominations [1, 6, 10] and target amount 12. What does greedy produce versus the true optimal answer?',
          bn: 'মুদ্রা ব্যবস্থা [১, ৬, ১০] এবং লক্ষ্য ১২ বিবেচনা করুন। গ্রিডি কী উত্তর তৈরি করে বনাম প্রকৃত সর্বোত্তম উত্তর কী?'
        },
        options: [
          {
            en: 'Greedy produces 3 coins (10 + 1 + 1), whereas optimal is 2 coins (6 + 6)',
            bn: 'গ্রিডি ৩টি মুদ্রা তৈরি করে (১০ + ১ + ১), যেখানে সর্বোত্তম হলো ২টি মুদ্রা (৬ + ৬)'
          },
          {
            en: 'Greedy produces 2 coins (6 + 6), whereas optimal is 3 coins (10 + 1 + 1)',
            bn: 'গ্রিডি ২টি মুদ্রা তৈরি করে (৬ + ৬), যেখানে সর্বোত্তম হলো ৩টি মুদ্রা (১০ + ১ + ১)'
          },
          {
            en: 'Both produce 12 coins of value 1',
            bn: 'উভয়ই ১ মানের ১২টি মুদ্রা তৈরি করে'
          },
          {
            en: 'Greedy throws a RangeError exception',
            bn: 'গ্রিডি একটি RangeError এক্সেপশন নিক্ষেপ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Greedy takes the largest coin 10 first, leaving 2 to be filled with 1s.',
          bn: 'গ্রিডি প্রথমে সবচেয়ে বড় মুদ্রা ১০ নেয়, ফলে বাকি ২ মেটাতে ১ ব্যবহার করতে হয়।'
        },
        explanation: {
          en: 'Greedy takes coin 10 first, leaving remainder 2, forcing two 1 coins for 3 coins total. The optimal combination is two 6 coins (6 + 6 = 12) taking only 2 coins.',
          bn: 'গ্রিডি প্রথমে ১০ নেয়, বাকি থাকে ২, যা পূরণ করতে ২টি ১ টাকার মুদ্রা লেগে মোট ৩টি কয়েন হয়। কিন্তু অপ্টিমাল হলো দুটি ৬ টাকার মুদ্রা (৬ + ৬ = ১২) যেখানে মাত্র ২টি কয়েন লাগে।'
        }
      },
      {
        id: 'grd-coin-qz-4',
        kind: 'mcq',
        topic: 'when-to-use-dynamic-programming-over-greedy',
        question: {
          en: 'If a problem has optimal substructure but fails the greedy choice property, which technique should be used?',
          bn: 'একটি সমস্যায় অপ্টিমাল সাবস্ট্রাকচার থাকা সত্ত্বেও যদি গ্রিডি চয়েস প্রপার্টি না থাকে, তবে কোন পদ্ধতি ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'Dynamic Programming or Memoization to explore all subproblem branches and remember optimal states',
            bn: 'সব উপ-সমস্যা শাখা পরীক্ষা করতে এবং অপ্টিমাল স্টেট মনে রাখতে ডায়নামিক প্রোগ্রামিং বা মেমোইজেশন'
          },
          {
            en: 'Run the greedy algorithm twice and pick the larger value',
            bn: 'গ্রিডি অ্যালগরিদম দুবার চালিয়ে বড় মানটি বেছে নেওয়া'
          },
          {
            en: 'Convert all integers into floating point numbers',
            bn: 'সমস্ত পূর্ণসংখ্যাকে ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করা'
          },
          {
            en: 'Increase the clock speed of the physical processor',
            bn: 'ফিজিক্যাল প্রসেসরের ক্লক স্পিড বৃদ্ধি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'DP evaluates all overlapping choices without getting trapped by locally greedy choices.',
          bn: 'ডিপি স্থানীয় সিদ্ধান্তে না আটকে সমস্ত ওভারল্যাপিং পথ মূল্যায়ন করে।'
        },
        explanation: {
          en: 'When greedy choices lead to suboptimal dead ends, dynamic programming is required to systematically evaluate overlapping subproblems and determine the true global optimum.',
          bn: 'যখন গ্রিডি সিদ্ধান্ত সাব-অপ্টিমাল পরিণতির দিকে নিয়ে যায়, তখন সব ওভারল্যাপিং উপ-সমস্যা বিচার করে আসল সেরা সমাধান খুঁজে পেতে ডায়নামিক প্রোগ্রামিং প্রয়োজন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'picks-and-the-pick',
    title: {
      en: 'Fractional Knapsack & Activity Selection',
      bn: 'ফ্র্যাকশনাল ন্যাপস্যাক ও অ্যাক্টিভিটি সিলেকশন'
    }
  }
};
