import type { Lesson } from '../../../lib/types';

export const TablesAndTheTableLesson: Lesson = {
  slug: 'tables-and-the-table',
  tech: 'dynamic-programming',
  title: {
    en: 'Beginner Dynamic Programming: Memoization vs Tabulation',
    bn: 'প্রাথমিক ডায়নামিক প্রোগ্রামিং: মেমোইজেশন বনাম ট্যাবুলেশন'
  },
  summary: {
    en: 'A beginner introduction to dynamic programming: discover how overlapping subproblems create exponential explosion, and master the two core paradigms: Top-Down Memoization and Bottom-Up Tabulation.',
    bn: 'ডায়নামিক প্রোগ্রামিংয়ের প্রাথমিক পরিচিতি: ওভারল্যাপিং উপ-সমস্যা কীভাবে সময় অপচয় করে তা জানুন এবং দুটি মূল পদ্ধতি আয়ত্ত করুন: টপ-ডাউন মেমোইজেশন ও বটম-আপ ট্যাবুলেশন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-dp-mental-model',
      text: {
        en: 'The Core Mental Model of Dynamic Programming',
        bn: 'ডায়নামিক প্রোগ্রামিংয়ের মূল চিন্তাভাবনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them into simpler overlapping subproblems, computing each subproblem solution once, and remembering the results. Coined by mathematician Richard Bellman in the 1950s, the word programming originally referred to tabular mathematical scheduling rather than writing computer code.',
        bn: 'ডায়নামিক প্রোগ্রামিং (DP) হলো একটি অপ্টিমাইজেশন কৌশল যা জটিল সমস্যাগুলোকে সরলতর ওভারল্যাপিং উপ-সমস্যায় বিভক্ত করে, প্রতিটি উপ-সমস্যা মাত্র একবার সমাধান করে এবং ফলাফল স্মরণ রাখে। ১৯৫০-এর দশকে গণিতবিদ রিচার্ড বেলম্যান কর্তৃক প্রবর্তিত এই পদ্ধতিতে "প্রোগ্রামিং" শব্দটি কম্পিউটার কোড লেখার বদলে মূলত টেবিলভিত্তিক গাণিতিক সময়সূচি বা সিদ্ধান্ত নির্ধারণকে নির্দেশ করত।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'overlapping-subproblems',
          def: {
            en: 'The property where a problem recursive decomposition repeatedly recalculates the exact same smaller subproblems thousands of times.',
            bn: 'এমন একটি বৈশিষ্ট্য যেখানে একটি সমস্যার রিকার্সিভ বিভাজন বারবার একই ক্ষুদ্র উপ-সমস্যা হাজার বার পুনরায় হিসাব করতে থাকে।'
          }
        },
        {
          term: 'optimal-substructure',
          def: {
            en: 'The property where an optimal solution to the main problem is constructed by combining optimal solutions to its constituent subproblems.',
            bn: 'সমস্যার এমন একটি বৈশিষ্ট্য যেখানে মূল সমস্যার সর্বোত্তম সমাধান তার অন্তর্ভুক্ত উপ-সমস্যাগুলোর সর্বোত্তম সমাধান সমন্বয় করে তৈরি হয়।'
          }
        },
        {
          term: 'top-down-memoization',
          def: {
            en: 'Solving problems recursively from the goal downward, caching each computed result in an auxiliary lookup table to avoid duplicate work.',
            bn: 'লক্ষ্য থেকে শুরু করে নিচের দিকে রিকার্সিভ উপায়ে সমস্যা সমাধান করা এবং প্রতিটি গণনাকৃত ফলাফল একটি লুকআপ টেবিলে ক্যাশ করে রাখা।'
          }
        },
        {
          term: 'bottom-up-tabulation',
          def: {
            en: 'Solving base subproblems first and iteratively populating a lookup table in topological order using loops, eliminating call stack overhead.',
            bn: 'সবার আগে বেস উপ-সমস্যাগুলো সমাধান করে লুপের মাধ্যমে একটি সুনির্দিষ্ট ক্রমে টেবিল পূরণ করা, যা কোনো কল স্ট্যাক মেমরি খরচ করে না।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'memo-vs-tabulation-svg',
      title: {
        en: 'Memoization (Top-Down) vs Tabulation (Bottom-Up)',
        bn: 'মেমোইজেশন (টপ-ডাউন) বনাম ট্যাবুলেশন (বটম-আপ)'
      },
      caption: {
        en: 'For N = 30: Naive recursion takes 2692537 calls, Memoization reduces it to 59 calls, and Tabulation runs in 29 loop iterations with O(1) space.',
        bn: 'N = ৩০ এর জন্য: সাধারণ রিকার্শনে ২৬৯২৫৩৭টি কল লাগে, মেমোইজেশনে কমে ৫৯টি কল হয় এবং ট্যাবুলেশনে O(1) স্পেসে মাত্র ২৯টি লুপ ইটারেশন লাগে।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="dpBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="topDownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="bottomUpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#dpBg)" stroke="#334155" stroke-width="2"/>

  <!-- Left: Top-Down Memoization -->
  <rect x="35" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="55" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#60a5fa">1. Top-Down (Memoization)</text>
  <text x="55" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Starts at Target N, recurses down, caches in Map</text>

  <!-- Root Call N=5 -->
  <circle cx="225" cy="120" r="18" fill="url(#topDownGrad)"/>
  <text x="225" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">f(5)</text>

  <!-- Branches -->
  <line x1="210" y1="135" x2="140" y2="175" stroke="#3b82f6" stroke-width="2"/>
  <line x1="240" y1="135" x2="310" y2="175" stroke="#3b82f6" stroke-width="2"/>

  <circle cx="140" cy="185" r="16" fill="url(#topDownGrad)"/>
  <text x="140" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">f(4)</text>

  <!-- Cache Hit Box for f(3) -->
  <rect x="270" y="170" width="80" height="32" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
  <text x="310" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">f(3) CACHE</text>

  <!-- Sub-branches -->
  <line x1="125" y1="200" x2="85" y2="240" stroke="#3b82f6" stroke-width="2"/>
  <line x1="155" y1="200" x2="195" y2="240" stroke="#3b82f6" stroke-width="2"/>

  <circle cx="85" cy="250" r="14" fill="url(#topDownGrad)"/>
  <text x="85" y="254" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">f(3)</text>

  <rect x="160" y="235" width="75" height="30" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
  <text x="197" y="254" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#34d399" text-anchor="middle">f(2) CACHE</text>

  <text x="55" y="300" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">Memory: Call stack O(N) + Cache O(N)</text>
  <text x="55" y="325" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Benefit: Only computes reachable subproblems.</text>

  <!-- Right: Bottom-Up Tabulation -->
  <rect x="445" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="465" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">2. Bottom-Up (Tabulation)</text>
  <text x="465" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Starts at Base Cases, loops forward in an Array</text>

  <!-- Table visualization: 6 cells from 0 to 5 -->
  <!-- Cell 0 -->
  <rect x="465" y="115" width="50" height="50" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="490" y="135" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">i = 0</text>
  <text x="490" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">0</text>

  <!-- Cell 1 -->
  <rect x="520" y="115" width="50" height="50" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="545" y="135" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">i = 1</text>
  <text x="545" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">1</text>

  <!-- Cell 2 -->
  <rect x="575" y="115" width="50" height="50" rx="6" fill="url(#bottomUpGrad)"/>
  <text x="600" y="135" font-family="system-ui, sans-serif" font-size="10" fill="#e2e8f0" text-anchor="middle">i = 2</text>
  <text x="600" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">1</text>

  <!-- Cell 3 -->
  <rect x="630" y="115" width="50" height="50" rx="6" fill="url(#bottomUpGrad)"/>
  <text x="655" y="135" font-family="system-ui, sans-serif" font-size="10" fill="#e2e8f0" text-anchor="middle">i = 3</text>
  <text x="655" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">2</text>

  <!-- Cell 4 -->
  <rect x="685" y="115" width="50" height="50" rx="6" fill="url(#bottomUpGrad)"/>
  <text x="710" y="135" font-family="system-ui, sans-serif" font-size="10" fill="#e2e8f0" text-anchor="middle">i = 4</text>
  <text x="710" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">3</text>

  <!-- Cell 5 -->
  <rect x="740" y="115" width="50" height="50" rx="6" fill="url(#bottomUpGrad)"/>
  <text x="765" y="135" font-family="system-ui, sans-serif" font-size="10" fill="#e2e8f0" text-anchor="middle">i = 5</text>
  <text x="765" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">5</text>

  <!-- Dependency Arrows -->
  <path d="M 490 175 Q 545 210 600 175" fill="none" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="545" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" text-anchor="middle">dp[2] = dp[0] + dp[1]</text>

  <text x="465" y="255" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Space Optimization: O(1) Rolling Variables</text>
  <text x="465" y="278" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">prev2 = 0, prev1 = 1 -&gt; curr = prev2 + prev1</text>
  <text x="465" y="300" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">Zero recursion stack. 0% risk of RangeError.</text>
  <text x="465" y="325" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Fastest cache locality in CPU L1/L2 caches.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'memo-vs-tab-comparison',
      text: {
        en: 'Memoization vs Tabulation Comparison',
        bn: 'মেমোইজেশন বনাম ট্যাবুলেশন তুলনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Top-Down (Memoization)', bn: 'টপ-ডাউন (মেমোইজেশন)' },
        { en: 'Bottom-Up (Tabulation)', bn: 'বটম-আপ (ট্যাবুলেশন)' }
      ],
      rows: [
        [
          { en: 'Execution Style', bn: 'সম্পাদন রীতি' },
          { en: 'Recursive on-demand call evaluation', bn: 'রিকার্সিভ অন-ডিমান্ড ফাংশন কল' },
          { en: 'Iterative deterministic loops filling array', bn: 'ইটারেটিভ লুপ দিয়ে অ্যারে পূরণ' }
        ],
        [
          { en: 'State Dependency', bn: 'স্টেটের নির্ভরতা' },
          { en: 'Discovers dependencies dynamically during call tree', bn: 'কল ট্রির সময় গতিশীলভাবে নির্ভরতা খুঁজে নেয়' },
          { en: 'Requires explicit topological ordering upfront', bn: 'শুরুতেই সুনির্দিষ্ট টপোলজিক্যাল ক্রম আবশ্যক' }
        ],
        [
          { en: 'Call Stack Overhead', bn: 'কল স্ট্যাক ওভারহেড' },
          { en: 'Consumes O(Depth) call stack frames (RangeError risk)', bn: 'O(Depth) ফ্রেম ব্যবহার করে (RangeError ঝুঁকি)' },
          { en: 'Zero call stack overhead; runs in single frame', bn: 'শূন্য কল স্ট্যাক ওভারহেড; একক ফ্রেমে চলে' }
        ],
        [
          { en: 'Space Optimization', bn: 'স্পেস অপ্টিমাইজেশন' },
          { en: 'Difficult to compress memory below full cache table', bn: 'সম্পূর্ণ ক্যাশ টেবিলের চেয়ে মেমরি কমানো কঠিন' },
          { en: 'Easy to reduce from O(N) to O(1) rolling variables', bn: 'সহজেই O(N) থেকে O(1) রোলিং ভেরিয়েবলে কমানো যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'three-steps-to-dp',
      text: {
        en: 'The 3-Step Recipe for Dynamic Programming',
        bn: 'ডায়নামিক প্রোগ্রামিং সমাধানের ৩-ধাপের রেসিপি'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Define the State and Subproblem Meaning',
            bn: 'স্টেট ও উপ-সমস্যার অর্থ সংজ্ঞায়িত করুন'
          },
          text: {
            en: 'Precisely define what dp[i] represents in English. For example, "dp[i] is the number of distinct ways to climb i staircase steps using 1 or 2 steps at a time."',
            bn: 'dp[i] ঠিক কী অর্থ প্রকাশ করে তা স্পষ্টভাবে লিখুন। যেমন, "dp[i] হলো প্রতিবার ১ বা ২ ধাপ ফেলে মোট i-টি সিঁড়ি অতিক্রম করার অনন্য উপায়ের সংখ্যা।"'
          }
        },
        {
          title: {
            en: 'Formulate the State Transition Recurrence',
            bn: 'স্টেট ট্রানজিশন রিকারেন্স সমীকরণ তৈরি করুন'
          },
          text: {
            en: 'Identify the decision choices available at step i that lead to smaller subproblems. For example: to reach step i, you either stepped from i - 1 or from i - 2, giving recurrence: dp[i] = dp[i - 1] + dp[i - 2].',
            bn: 'ধাপ i-তে পৌঁছানোর সম্ভাব্য সিদ্ধান্তগুলো চিহ্নিত করুন। যেমন: i সিঁড়িতে আসতে আপনি i - ১ অথবা i - ২ সিঁড়ি থেকে লাফ দিয়েছেন, যার সমীকরণ: dp[i] = dp[i - ১] + dp[i - ২]।'
          }
        },
        {
          title: {
            en: 'Identify Base Cases and Solve Iteratively',
            bn: 'বেস কেস নির্ধারণ করে ইটারেটিভ উপায়ে সমাধান করুন'
          },
          text: {
            en: 'Seed the initial boundary values: dp[0] = 1, dp[1] = 1. Execute an iterative loop from 2 up to target N, updating the table or rolling variables in O(N) time.',
            bn: 'শুরুর বাউন্ডারি মান স্থাপন করুন: dp[০] = ১, dp[১] = ১। এরপর ২ থেকে লক্ষ্য N পর্যন্ত একটি ইটারেটিভ লুপ চালিয়ে O(N) সময়ে টেবিল বা রোলিং ভেরিয়েবল আপডেট করুন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'runnable-dp-benchmark-ts',
      text: {
        en: 'Runnable TypeScript: Three Implementations of Fibonacci(30)',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ফিবোনাচ্চি(৩০) এর তিনটি বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Benchmarking N=30: Plain recursion makes 2692537 calls, Top-down memoization makes 59 calls, and Tabulation runs in 29 iterations with O(1) space.',
        bn: 'N=৩০ এর বেঞ্চমার্ক: সাধারণ রিকার্শনে ২৬৯২৫৩৭টি কল, মেমোইজেশনে ৫৯টি কল এবং ট্যাবুলেশনে O(1) স্পেসে ২৯টি ইটারেশনে ৮৩২০৪০ গণনা।'
      },
      code: `// 1. Plain Exponential Recursion
let plainCalls = 0;
function fibPlain(n: number): number {
  plainCalls++;
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibPlain(n - 1) + fibPlain(n - 2);
}

// 2. Top-Down Memoization
let memoCalls = 0;
function fibMemo(n: number, memo: Map<number, number> = new Map()): number {
  memoCalls++;
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (memo.has(n)) return memo.get(n)!;

  const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

// 3. Bottom-Up Tabulation with O(1) Rolling Variables
let tabIterations = 0;
function fibTabulation(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev2 = 0;
  let prev1 = 1;
  let curr = 0;

  for (let i = 2; i <= n; i++) {
    tabIterations++;
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
}

// Benchmark on N = 30
const targetN = 30;

const ansMemo = fibMemo(targetN);
const ansTab = fibTabulation(targetN);
const ansPlain = fibPlain(targetN);

console.log('Fibonacci(30) Result:', ansTab); // 832040
console.log('Plain Recursion Calls:', plainCalls); // 2692537
console.log('Top-Down Memo Calls:', memoCalls); // 59
console.log('Bottom-Up Tab Iterations:', tabIterations); // 29
console.log('Did all 3 produce identical output?', ansPlain === ansMemo && ansMemo === ansTab); // true
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Notice the massive computational speedup: plain recursion evaluated 2692537 function calls, while Bottom-Up Tabulation performed only 29 loop additions. That represents an astronomical speedup of over 90000 times, transforming exponential O(2^N) time into linear O(N) time.',
        bn: 'গণনামূলক গতির বিশাল পার্থক্য লক্ষ্য করুন: সাধারণ রিকার্শনে ২৬৯২৫৩৭টি ফাংশন কল লেগেছে, যেখানে বটম-আপ ট্যাবুলেশনে মাত্র ২৯টি যোগ সম্পন্ন হয়েছে। এটি ৯০০০০ গুণেরও বেশি দ্রুতগতি নিশ্চিত করে সূচকীয় O(2^N) সময়কে লিনিয়ার O(N) সময়ে রূপান্তরিত করেছে।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-tbl-ex-1',
      kind: 'mcq',
      topic: 'dynamic-programming-prerequisites',
      question: {
        en: 'Which two fundamental properties must a problem satisfy to be suitable for Dynamic Programming?',
        bn: 'ডায়নামিক প্রোগ্রামিং দিয়ে সমাধানের জন্য একটি সমস্যায় কোন দুটি মৌলিক বৈশিষ্ট্য থাকা আবশ্যক?'
      },
      options: [
        {
          en: 'Optimal Substructure and Overlapping Subproblems',
          bn: 'অপ্টিমাল সাবস্ট্রাকচার এবং ওভারল্যাপিং উপ-সমস্যা'
        },
        {
          en: 'Independent subsets and greedy choice property',
          bn: 'স্বাধীন সাবসেট এবং গ্রিডি চয়েস প্রপার্টি'
        },
        {
          en: 'Asynchronous event loops and multithreading',
          bn: 'অ্যাসিনক্রোনাস ইভেন্ট লুপ এবং মাল্টি-থ্রেডিং'
        },
        {
          en: 'Floating point arithmetic and square root division',
          bn: 'ফ্লোটিং পয়েন্ট পাটিগণিত এবং বর্গমূল বিভাজন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The problem must have overlapping duplicate subproblems and optimal substructure.',
        bn: 'সমস্যাটিতে পুনরাবৃত্তিমূলক উপ-সমস্যা এবং অপ্টিমাল সাবস্ট্রাকচার থাকতে হবে।'
      },
      explanation: {
        en: 'Dynamic Programming requires Optimal Substructure (an optimal solution is built from optimal subproblems) and Overlapping Subproblems (subproblems recur frequently in the call tree).',
        bn: 'ডায়নামিক প্রোগ্রামিংয়ে অপ্টিমাল সাবস্ট্রাকচার এবং ওভারল্যাপিং উপ-সমস্যা উভয় বৈশিষ্ট্যই থাকা প্রয়োজন যাতে উপ-সমস্যার সমাধান ক্যাশ করে দ্রুত ব্যবহার করা যায়।'
      }
    },
    {
      id: 'dp-tbl-ex-2',
      kind: 'mcq',
      topic: 'fibonacci-benchmark-numbers',
      question: {
        en: 'In our Fibonacci(30) benchmark, how many calls did naive recursion execute versus bottom-up tabulation iterations?',
        bn: 'আমাদের ফিবোনাচ্চি(৩০) বেঞ্চমার্কে সাধারণ রিকার্শনে কতটি কল লেগেছিল বনাম বটম-আপ ট্যাবুলেশনে কয়টি ইটারেশন লেগেছিল?'
      },
      options: [
        {
          en: '2692537 recursive calls versus 29 tabulation loop iterations (result: 832040)',
          bn: '২৬৯২৫৩৭টি রিকার্সিভ কল বনাম ২৯টি ট্যাবুলেশন লুপ ইটারেশন (ফলাফল: ৮৩২০৪০)'
        },
        {
          en: '1000 calls versus 1000 iterations',
          bn: '১০০০টি কল বনাম ১০০০টি ইটারেশন'
        },
        {
          en: '30 calls versus 30 iterations',
          bn: '৩০টি কল বনাম ৩০টি ইটারেশন'
        },
        {
          en: '5000000 calls versus 50000 iterations',
          bn: '৫০০০০০০টি কল বনাম ৫০০০০টি ইটারেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The answer is 832040, achieved with 29 iterations.',
        bn: 'উত্তরটি হলো ৮৩২০৪০, যা ২৯টি ইটারেশনে অর্জিত হয়।'
      },
      explanation: {
        en: 'Naive recursion branches exponentially into 2692537 calls, whereas bottom-up tabulation computes the exact answer 832040 in only 29 single-step additions.',
        bn: 'সাধারণ রিকার্শন সূচকীয় হারে ২৬৯২৫৩৭টি কলে ছড়িয়ে পড়ে, যেখানে বটম-আপ ট্যাবুলেশন মাত্র ২৯টি ধাপে যোগ করে সঠিক উত্তর ৮৩২০৪০ তৈরি করে।'
      }
    },
    {
      id: 'dp-tbl-ex-3',
      kind: 'mcq',
      topic: 'memoization-vs-tabulation-direction',
      question: {
        en: 'What is the primary difference in execution direction between Top-Down Memoization and Bottom-Up Tabulation?',
        bn: 'টপ-ডাউন মেমোইজেশন এবং বটম-আপ ট্যাবুলেশনের মধ্যে কার্যসম্পাদনের দিকের প্রধান পার্থক্য কোনটি?'
      },
      options: [
        {
          en: 'Top-down starts at the target problem and recurses backward on demand; bottom-up starts at base cases and iterates forward with loops',
          bn: 'টপ-ডাউন লক্ষ্য সমস্যা থেকে শুরু করে পেছনের দিকে রিকার্শনে নামে; বটম-আপ বেস কেস থেকে শুরু করে সামনের দিকে লুপ চালিয়ে এগিয়ে যায়'
        },
        {
          en: 'Top-down only runs on 64-bit operating systems',
          bn: 'টপ-ডাউন কেবল ৬৪-বিট অপারেটিং সিস্টেমে চলে'
        },
        {
          en: 'Bottom-up requires sorting all numbers in descending order',
          bn: 'বটম-আপে সমস্ত সংখ্যা বড় থেকে ছোট ক্রমে সাজাতে হয়'
        },
        {
          en: 'Top-down consumes zero bytes of memory in all languages',
          bn: 'সব ভাষায় টপ-ডাউন শূন্য বাইট মেমরি ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Top-down goes from N down to base cases; bottom-up goes from 0 up to N.',
        bn: 'টপ-ডাউন N থেকে বেস কেসের দিকে নামে; বটম-আপ ০ থেকে N এর দিকে ওঠে।'
      },
      explanation: {
        en: 'Top-down breaks the target goal down recursively while caching values. Bottom-up establishes base cases first and populates an array iteratively forward.',
        bn: 'টপ-ডাউন কাঙ্ক্ষিত লক্ষ্য থেকে শুরু করে রিকার্শনের মাধ্যমে ক্যাশ করে। আর বটম-আপ শুরুতেই বেস কেস বসিয়ে লুপের মাধ্যমে অ্যারে পূরণ করে এগিয়ে যায়।'
      }
    },
    {
      id: 'dp-tbl-ex-4',
      kind: 'mcq',
      topic: 'space-optimization-rolling-variables',
      question: {
        en: 'How can the space complexity of bottom-up Fibonacci calculation be reduced from O(N) to O(1)?',
        bn: 'বটম-আপ ফিবোনাচ্চি গণনার স্পেস কমপ্লেক্সিটি কীভাবে O(N) থেকে কমিয়ে O(1)-এ নামিয়ে আনা যায়?'
      },
      options: [
        {
          en: 'By keeping only the two most recent values (prev1 and prev2) in rolling variables, discarding the full array table',
          bn: 'সম্পূর্ণ অ্যারে বাদ দিয়ে রোলিং ভেরিয়েবলে কেবল নিকটতম দুটি মান (prev1 ও prev2) সংরক্ষণ করে'
        },
        {
          en: 'By converting all integers to 8-bit characters',
          bn: 'সমস্ত পূর্ণসংখ্যাকে ৮-বিট ক্যারেক্টারে রূপান্তর করে'
        },
        {
          en: 'By running the calculation on a remote cloud server',
          bn: 'একটি রিমোট ক্লাউড সার্ভারে গণনাটি চালিয়ে'
        },
        {
          en: 'By deleting half of the numbers after every loop iteration',
          bn: 'প্রতিটি লুপের পর অর্ধেক সংখ্যা মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'To compute the next number, you only need the previous two.',
        bn: 'পরবর্তী সংখ্যাটি হিসাব করতে কেবল আগের দুটি সংখ্যা প্রয়োজন।'
      },
      explanation: {
        en: 'Because state i only depends on states i - 1 and i - 2, storing the entire array is wasteful. Two scalar variables suffice, giving O(1) auxiliary space.',
        bn: 'যেহেতু স্টেট i কেবল i - ১ এবং i - ২ এর ওপর নির্ভর করে, তাই পুরো অ্যারে রাখার দরকার নেই। দুটি চলক দিয়েই O(1) মেমরিতে কাজ শেষ করা যায়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Dynamic Programming Foundations Quiz',
      bn: 'ডায়নামিক প্রোগ্রামিং ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'dp-tbl-qz-1',
        kind: 'mcq',
        topic: 'richard-bellman-programming-origin',
        question: {
          en: 'What did the word "programming" originally signify when Richard Bellman coined Dynamic Programming in the 1950s?',
          bn: '১৯৫০-এর দশকে রিচার্ড বেলম্যান যখন ডায়নামিক প্রোগ্রামিং প্রবর্তন করেন তখন "প্রোগ্রামিং" শব্দটি মূলত কী বোঝাত?'
        },
        options: [
          {
            en: 'Mathematical planning and tabular optimization scheduling, not writing code in a programming language',
            bn: 'গাণিতিক পরিকল্পনা ও টেবিলভিত্তিক অপ্টিমাইজেশন সময়সূচি, কোনো প্রোগ্রামিং ভাষায় কোড লেখা নয়'
          },
          {
            en: 'Writing assembly instructions for vacuum tube mainframes',
            bn: 'ভ্যাকুয়াম টিউব মেইনফ্রেমের জন্য অ্যাসেম্বলি নির্দেশ লেখা'
          },
          {
            en: 'Designing graphical user interfaces for desktop screens',
            bn: 'ডেস্কটপ স্ক্রিনের জন্য গ্রাফিক্যাল ইউজার ইন্টারফেস ডিজাইন করা'
          },
          {
            en: 'Formatting text documents into HTML web pages',
            bn: 'টেক্সট ডকুমেন্টকে এইচটিএমএল ওয়েব পেজে রূপান্তর করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'In mathematical economics, a program meant an optimization schedule.',
          bn: 'গাণিতিক অর্থনীতিতে প্রোগ্রাম বলতে অপ্টিমাইজেশন সূচি বোঝাত।'
        },
        explanation: {
          en: 'In the 1950s, mathematical programming referred to tabular planning and optimization (as in linear programming), predating modern software programming concepts.',
          bn: '১৯৫০-এর দশকে গাণিতিক প্রোগ্রামিং বলতে মূলত টেবিলভিত্তিক পরিকল্পনা ও অপ্টিমাইজেশনকে বোঝানো হতো, যা আধুনিক সফটওয়্যার কোডিংয়ের পূর্ববর্তী ধারণা।'
        }
      },
      {
        id: 'dp-tbl-qz-2',
        kind: 'mcq',
        topic: 'memoization-rangeerror-risk',
        question: {
          en: 'Why is Bottom-Up Tabulation generally preferred over Top-Down Memoization in deep recursion scenarios (N > 10000)?',
          bn: 'গভীর রিকার্শনের ক্ষেত্রে (N > ১০০০০) টপ-ডাউন মেমোইজেশনের চেয়ে বটম-আপ ট্যাবুলেশন কেন বেশি গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'Top-down recursion consumes call stack frames and risks throwing "RangeError: Maximum call stack size exceeded", whereas tabulation uses loops with zero stack overhead',
            bn: 'টপ-ডাউন রিকার্শন কল স্ট্যাক মেমরি খরচ করে RangeError নিক্ষেপ করতে পারে, যেখানে ট্যাবুলেশন শূন্য স্ট্যাক ওভারহেডে লুপ দিয়ে চলে'
          },
          {
            en: 'Top-down memoization produces incorrect mathematical results for even numbers',
            bn: 'জোড় সংখ্যার জন্য টপ-ডাউন মেমোইজেশন ভুল গাণিতিক ফলাফল তৈরি করে'
          },
          {
            en: 'JavaScript engines do not support Map data structures',
            bn: 'জাভাস্ক্রিপ্ট ইঞ্জিন Map ডেটা স্ট্রাকচার সমর্থন করে না'
          },
          {
            en: 'Tabulation runs only on graphics processing units',
            bn: 'ট্যাবুলেশন কেবল গ্রাফিক্স প্রসেসিং ইউনিটে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Call stack depth limits do not affect simple while or for loops.',
          bn: 'কল স্ট্যাকের মেমরি সীমাবদ্ধতা সাধারণ লুপকে প্রভাবিত করে না।'
        },
        explanation: {
          en: 'Engines like V8 enforce a call stack limit around 10000 frames. Deep recursive memoization triggers stack overflow, while bottom-up tabulation runs safely inside a single stack frame.',
          bn: 'জাভাস্ক্রিপ্ট V8 ইঞ্জিন প্রায় ১০০০০ ফ্রেমের কল স্ট্যাক সীমা প্রয়োগ করে। গভীর রিকার্শন স্ট্যাক ওভারফ্লো ঘটায়, কিন্তু বটম-আপ ট্যাবুলেশন নিরাপদভাবে লুপের ভেতর চলে।'
        }
      },
      {
        id: 'dp-tbl-qz-3',
        kind: 'mcq',
        topic: 'top-down-on-demand-advantage',
        question: {
          en: 'In which scenario is Top-Down Memoization structurally superior to Bottom-Up Tabulation?',
          bn: 'কোন পরিস্থিতিতে আর্কিটেকচারাল দিক থেকে বটম-আপ ট্যাবুলেশনের চেয়ে টপ-ডাউন মেমোইজেশন বেশি সুবিধাজনক?'
        },
        options: [
          {
            en: 'When the state space is vast and sparse, so only a tiny fraction of subproblems need to be evaluated to answer the target query',
            bn: 'যখন স্টেট স্পেস বিশাল কিন্তু স্পার্স হয়, অর্থাৎ মূল প্রশ্নের উত্তর দিতে খুব কম সংখ্যক উপ-সমস্যা মূল্যায়নের দরকার পড়ে'
          },
          {
            en: 'When the computer has zero megabytes of RAM memory',
            bn: 'যখন কম্পিউটারে শূন্য মেগাবাইট র‍্যাম মেমরি থাকে'
          },
          {
            en: 'When all numbers are negative floating point values',
            bn: 'যখন সমস্ত সংখ্যা ঋণাত্মক ফ্লোটিং পয়েন্ট মান হয়'
          },
          {
            en: 'When the algorithm runs on a blockchain smart contract',
            bn: 'যখন অ্যালগরিদমটি ব্লকচেইন স্মার্ট কন্ট্রাক্টে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Top-down only visits states reachable from the root, ignoring unreachable cells.',
          bn: 'টপ-ডাউন কেবল মূল সমস্যা থেকে প্রয়োজনীয় স্টেটেই যায়, অপ্রয়োজনীয় ঘর এড়িয়ে চলে।'
        },
        explanation: {
          en: 'Bottom-up tabulation systematically calculates every entry in the table. If only 5% of states are ever reachable from the starting point, top-down memoization saves 95% of computation.',
          bn: 'বটম-আপ ট্যাবুলেশন টেবিলের প্রতিটি ঘর অন্ধভাবে পূরণ করে। কিন্তু যদি মাত্র ৫% স্টেটে যাওয়ার প্রয়োজন হয়, তবে টপ-ডাউন মেমোইজেশন বাকি ৯৫% অনাবশ্যক কাজ বাদ দিয়ে সময় বাঁচায়।'
        }
      },
      {
        id: 'dp-tbl-qz-4',
        kind: 'mcq',
        topic: 'directed-acyclic-graph-representation',
        question: {
          en: 'How can every dynamic programming problem be abstractly represented as a graph structure?',
          bn: 'কীভাবে প্রতিটি ডায়নামিক প্রোগ্রামিং সমস্যাকে বিমূর্তভাবে একটি গ্রাফ কাঠামো হিসেবে প্রকাশ করা যায়?'
        },
        options: [
          {
            en: 'As a Directed Acyclic Graph (DAG) where nodes represent subproblem states and directed edges represent state transitions',
            bn: 'একটি নির্দেশিত চক্রহীন গ্রাফ (DAG) হিসেবে যেখানে নোডগুলো উপ-সমস্যা স্টেট এবং ডিরেক্টেড এজগুলো স্টেট ট্রানজিশন নির্দেশ করে'
          },
          {
            en: 'As a complete cyclic graph with negative weight loops',
            bn: 'ঋণাত্মক ওজনের লুপ বিশিষ্ট একটি সম্পূর্ণ চক্রাকার গ্রাফ হিসেবে'
          },
          {
            en: 'As an undirected disconnected set of independent nodes',
            bn: 'অনির্দেশিত ও বিচ্ছিন্ন স্বাধীন নোডের সেট হিসেবে'
          },
          {
            en: 'As a 4-dimensional hypercube matrix',
            bn: 'একটি ৪-মাত্রিক হাইপারকিউব ম্যাট্রিক্স হিসেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'State dependencies must flow forward without circular loops (acyclic).',
          bn: 'স্টেটের নির্ভরতা অবশ্যই কোনো চক্র ছাড়া সামনের দিকে প্রবাহিত হতে হবে (অ্যাসাইক্লিক)।'
        },
        explanation: {
          en: 'DP dependencies form a DAG. Solving DP bottom-up is mathematically equivalent to computing the topological sort and finding the shortest or longest path on a DAG in linear time.',
          bn: 'ডিপির নির্ভরতাগুলো একটি DAG গঠন করে। বটম-আপ ডিপি সমাধান করা গাণিতিকভাবে একটি DAG-তে টপোলজিক্যাল সর্ট করে পথ খুঁজে পাওয়ার সমান।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'states-and-the-state',
    title: {
      en: '1D State Design & Transition Recurrences',
      bn: '১ডি স্টেট ডিজাইন ও ট্রানজিশন সমীকরণ'
    }
  }
};
