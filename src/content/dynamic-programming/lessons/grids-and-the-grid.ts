import type { Lesson } from '../../../lib/types';

export const GridsAndTheGridLesson: Lesson = {
  slug: 'grids-and-the-grid',
  tech: 'dynamic-programming',
  title: {
    en: 'Interval & Matrix DP: LIS & Matrix Chain',
    bn: 'ইন্টারভ্যাল ও ম্যাট্রিক্স ডিপি: LIS ও ম্যাট্রিক্স চেইন'
  },
  summary: {
    en: 'Master interval subproblems, optimize Longest Increasing Subsequence from O(N^2) to O(N log N) using patient sorting binary search, and solve Matrix Chain Multiplication.',
    bn: 'ইন্টারভ্যাল উপ-সমস্যা আয়ত্ত করুন, পেশেন্স সর্টিং বাইনারি সার্চ দিয়ে LIS-কে O(N^2) থেকে O(N log N)-এ ত্বরান্বিত করুন এবং ম্যাট্রিক্স চেইন মাল্টিপ্লিকেশন সমাধান করুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'interval-and-subsequence-concept',
      text: {
        en: 'The Interval and Subsequence DP Paradigm',
        bn: 'ইন্টারভ্যাল ও সাবসিকোয়েন্স ডিপি প্যারাডাইম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beyond standard linear sequences and spatial grids lies Interval Dynamic Programming, where subproblems correspond to contiguous subsegments [i..j] of an array. In interval DP, we solve for all intervals of length 1 first, then length 2, building up to length N by splitting at an intermediate partition point k. Paired with Longest Increasing Subsequence (LIS), these algorithms demonstrate how DP state structures scale from quadratic tables to logarithmic binary search.',
        bn: 'সাধারণ লিনিয়ার সিকোয়েন্স এবং গ্রিডের বাইরে রয়েছে ইন্টারভ্যাল ডায়নামিক প্রোগ্রামিং, যেখানে উপ-সমস্যাগুলো অ্যারের একটি নির্দিষ্ট সাবসেগমেন্ট বা ব্যবধান [i..j] নির্দেশ করে। ইন্টারভ্যাল ডিপিতে প্রথমে ১ দৈর্ঘ্যের সব ব্যবধান, তারপর ২ দৈর্ঘ্যের ব্যবধান সমাধান করে মাঝে একটি বিভাজন বিন্দু k বরাবর কেটে N দৈর্ঘ্য পর্যন্ত পৌঁছানো হয়। লংগেস্ট ইনক্রিজিং সাবসিকোয়েন্স (LIS)-এর সাথে সমন্বয়ে এই অ্যালগরিদমগুলো দেখায় কীভাবে ডিপি কোয়াড্রেটিক টেবিল থেকে লগারিদমিক বাইনারি সার্চে রূপান্তর করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'longest-increasing-subsequence',
          def: {
            en: 'The longest sequence of elements extracted from an array that appears in strictly ascending order without changing their relative positioning.',
            bn: 'একটি অ্যারে থেকে নেওয়া উপাদানগুলোর দীর্ঘতম ক্রম যা আপেক্ষিক অবস্থান বজায় রেখে কঠোরভাবে ঊর্ধ্বক্রমে বৃদ্ধি পায়।'
          }
        },
        {
          term: 'interval-dp-partition',
          def: {
            en: 'Evaluating subproblems on ranges [i..j] by iterating over all possible split points k where i <= k < j to find the minimal recombination cost.',
            bn: '[i..j] পরিসরের উপ-সমস্যা মূল্যায়নে i <= k < j এর সমস্ত সম্ভাব্য বিভাজন বিন্দু k পরীক্ষা করে সর্বনিম্ন খরচ খুঁজে বের করা।'
          }
        },
        {
          term: 'patient-sorting-tails',
          def: {
            en: 'An O(N log N) optimization maintaining a tails array of minimal end elements for increasing subsequences, updated via binary search.',
            bn: 'একটি O(N log N) অপ্টিমাইজেশন যা বাইনারি সার্চের মাধ্যমে আপডেটেড প্রতিটি দৈর্ঘ্যের সাবসিকোয়েন্সের সর্বনিম্ন শেষ উপাদানের একটি অ্যারে বজায় রাখে।'
          }
        },
        {
          term: 'matrix-chain-multiplication',
          def: {
            en: 'Finding the optimal associative parenthesization of a chain of matrices to minimize the total scalar arithmetic multiplications performed.',
            bn: 'একটি ম্যাট্রিক্সের শৃঙ্খলে গুণ করার বন্ধনীর সর্বোত্তম বিন্যাস খুঁজে বের করা যা মোট স্কেলার গুণ অপারেশনের সংখ্যা সর্বনিম্ন করে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'lis-and-matrix-chain-svg',
      title: {
        en: 'LIS Optimization (O(N log N)) and Matrix Chain Parenthesization (4500 vs 27000)',
        bn: 'LIS অপ্টিমাইজেশন (O(N log N)) এবং ম্যাট্রিক্স চেইন বন্ধনীবিন্যাস (৪৫০০ বনাম ২৭০০০)'
      },
      caption: {
        en: 'For [10, 9, 2, 5, 3, 7, 101, 18], LIS length is 4 ([2, 3, 7, 18]). In Matrix Chain [10, 30, 5, 60], optimal grouping costs 4500 versus 27000 multiplications.',
        bn: '[১০, ৯, ২, ৫, ৩, ৭, ১০১, ১৮]-এ LIS দৈর্ঘ্য ৪ ([২, ৩, ৭, ১৮])। আর ম্যাট্রিক্স চেইনে [১০, ৩০, ৫, ৬০] সর্বোত্তম বন্ধনীতে লাগে ৪৫০০ গুণন বনাম ২৭০০০ গুণন।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="lisBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="lisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#lisBg)" stroke="#334155" stroke-width="2"/>

  <!-- Left: Longest Increasing Subsequence -->
  <rect x="35" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="55" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">1. Longest Increasing Subsequence (LIS)</text>
  <text x="55" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">nums = [10, 9, 2, 5, 3, 7, 101, 18] (length 8)</text>

  <!-- Step visualization of tails array -->
  <rect x="55" y="100" width="340" height="135" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="70" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Process 10: tails = [10]</text>
  <text x="70" y="145" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Process 9: tails = [9] (overwrote 10)</text>
  <text x="70" y="165" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Process 2: tails = [2] (overwrote 9)</text>
  <text x="70" y="185" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Process 5: tails = [2, 5]</text>
  <text x="70" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• Process 3: tails = [2, 3] (overwrote 5)</text>
  <text x="70" y="225" font-family="system-ui, sans-serif" font-size="12" fill="#34d399">• Final tails after 7, 101, 18: <tspan font-weight="bold">[2, 3, 7, 18]</tspan></text>

  <rect x="55" y="250" width="340" height="85" rx="8" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
  <text x="70" y="278" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#34d399">LIS Length = 4 (O(N log N) Speedup)</text>
  <text x="70" y="300" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">Subsequence: [2, 3, 7, 18] or [2, 3, 7, 101]</text>
  <text x="70" y="318" font-family="system-ui, sans-serif" font-size="11" fill="#a7f3d0">Binary search updates tails array in log N time.</text>

  <!-- Right: Matrix Chain Multiplication -->
  <rect x="445" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="465" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#60a5fa">2. Matrix Chain Multiplication</text>
  <text x="465" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Dimensions: A1 (10x30), A2 (30x5), A3 (5x60)</text>

  <rect x="465" y="100" width="340" height="135" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="480" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">Grouping A: ((A1 * A2) * A3) OPTIMAL</text>
  <text x="495" y="145" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• (A1 * A2): 10 * 30 * 5 = 1500 ops</text>
  <text x="495" y="165" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• ((A1*A2) * A3): 10 * 5 * 60 = 3000 ops</text>
  <text x="495" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">Total Operations: 1500 + 3000 = 4500</text>

  <text x="480" y="212" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f43f5e">Grouping B: (A1 * (A2 * A3)) WORST</text>
  <text x="495" y="228" font-family="system-ui, sans-serif" font-size="11" fill="#fca5a5">Total Operations: 9000 + 18000 = 27000</text>

  <rect x="465" y="250" width="340" height="85" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="480" y="278" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa">DP Optimization Saves: 22500 Operations</text>
  <text x="480" y="300" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">Optimal 4500 vs Suboptimal 27000 operations</text>
  <text x="480" y="318" font-family="system-ui, sans-serif" font-size="11" fill="#93c5fd">Interval DP tests all partition splits k in O(N^3).</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'interval-dp-recurrence',
      text: {
        en: 'The Interval DP Recurrence Formulation',
        bn: 'ইন্টারভ্যাল ডিপির রিকারেন্স গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Matrix Chain Multiplication, calculating the cost to multiply matrices from index i to j requires testing every possible final multiplication split point k (where i <= k < j). The total combines two subproblem solutions: left chain cost dp[i][k] and right chain cost dp[k + 1][j]. Merging the two resulting matrices adds a scalar multiplication cost of dimensions[i - 1] * dimensions[k] * dimensions[j]. Taking the minimum over all k yields dp[i][j] in O(N^3) time.',
        bn: 'ম্যাট্রিক্স চেইন মাল্টিপ্লিকেশনে সূচক i থেকে j পর্যন্ত ম্যাট্রিক্স গুণের সর্বনিম্ন খরচ বের করতে প্রতিটি সম্ভাব্য চূড়ান্ত বিভাজন বিন্দু k (যেখানে i <= k < j) পরীক্ষা করতে হয়। মোট খরচ দুটি সাব-প্রবলেম থেকে আসে: বাম অংশের খরচ dp[i][k] এবং ডান অংশের খরচ dp[k + ১][j]। এরপর দুটি ফলাফল ম্যাট্রিক্স গুণ করার স্কেলার খরচ যোগ হয়: dimensions[i - ১] * dimensions[k] * dimensions[j]। সমস্ত k-এর মধ্যে সর্বনিম্ন মানটি বেছে নিলে O(N^3) সময়ে dp[i][j] সমাধান পাওয়া যায়।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-lis-and-matrix-ts',
      text: {
        en: 'Runnable TypeScript: O(N log N) LIS & Interval Matrix Chain Solvers',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: O(N log N) LIS ও ইন্টারভ্যাল ম্যাট্রিক্স চেইন সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Executing LIS on [10, 9, 2, 5, 3, 7, 101, 18] yielding length 4 in O(N log N), and Matrix Chain [10, 30, 5, 60] finding optimal 4500 operations.',
        bn: '[১০, ৯, ২, ৫, ৩, ৭, ১০১, ১৮]-এ O(N log N)-এ LIS দৈর্ঘ্য ৪ এবং ম্যাট্রিক্স চেইন [১০, ৩০, ৫, ৬০]-এ ৪৫০০ অপ্টিমাল অপারেশন গণনা।'
      },
      code: `// 1. Longest Increasing Subsequence with Binary Search O(N log N)
function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;
  const tails: number[] = [];

  for (const x of nums) {
    // Binary search for smallest element in tails >= x
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === tails.length) {
      tails.push(x); // Extend LIS
    } else {
      tails[left] = x; // Overwrite with smaller tail
    }
  }

  return tails.length;
}

// 2. Matrix Chain Multiplication: Interval DP O(N^3)
function matrixChainOrder(p: number[]): number {
  const n = p.length - 1; // Number of matrices
  // dp[i][j] is the minimum multiplications to compute A[i]...A[j]
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  // L is chain length (from 2 up to n)
  for (let L = 2; L <= n; L++) {
    for (let i = 1; i <= n - L + 1; i++) {
      const j = i + L - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        const q = dp[i][k] + dp[k + 1][j] + (p[i - 1] * p[k] * p[j]);
        if (q < dp[i][j]) {
          dp[i][j] = q;
        }
      }
    }
  }

  return dp[1][n];
}

// Benchmark 1: LIS
const lisArray = [10, 9, 2, 5, 3, 7, 101, 18];
const lisLength = lengthOfLIS(lisArray);
console.log('LIS Length:', lisLength); // 4 (e.g. [2, 3, 7, 18])

// Benchmark 2: Matrix Chain with dimensions [10, 30, 5, 60] (3 matrices: 10x30, 30x5, 5x60)
const matrixDims = [10, 30, 5, 60];
const minMultiplications = matrixChainOrder(matrixDims);
console.log('Matrix Chain Minimum Multiplications:', minMultiplications); // 4500
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Matrix Chain Multiplication demonstrates the extreme power of dynamic programming: an optimal parenthesization requires 4500 scalar operations, whereas the worst grouping requires 27000 operations. In high-performance 3D graphics rendering and deep learning neural net tensor contractions, interval DP saves billions of CPU cycles.',
        bn: 'ম্যাট্রিক্স চেইন মাল্টিপ্লিকেশন ডায়নামিক প্রোগ্রামিংয়ের অসাধারণ দক্ষতা প্রদর্শন করে: সঠিক বন্ধনীবিন্যাসে মাত্র ৪৫০০ অপারেশন লাগে, আর অসাবধান বিন্যাসে ২৭০০০ অপারেশন লাগত। থ্রিডি গ্রাফিক্স ও ডিপ লার্নিং টেনসর গণনায় এই ইন্টারভ্যাল ডিপি কোটি কোটি সিপিইউ সাইকেল সাশ্রয় করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-grd-ex-1',
      kind: 'mcq',
      topic: 'lis-patience-sorting-binary-search',
      question: {
        en: 'How does the Patience Sorting algorithm reduce the time complexity of Longest Increasing Subsequence from O(N^2) down to O(N log N)?',
        bn: 'পেশেন্স সর্টিং অ্যালগরিদম কীভাবে বাইনারি সার্চের মাধ্যমে LIS-এর টাইম কমপ্লেক্সিটি O(N^2) থেকে কমিয়ে O(N log N)-এ নামিয়ে আনে?'
      },
      options: [
        {
          en: 'It maintains an array of minimal tail elements of increasing subsequences and uses binary search to locate and update the position for each number in O(log N)',
          bn: 'এটি প্রতিটি দৈর্ঘ্যের সাবসিকোয়েন্সের সর্বনিম্ন শেষ উপাদানের একটি টেইলস অ্যারে রাখে এবং বাইনারি সার্চ দিয়ে O(log N) সময়ে প্রতিটি সংখ্যা আপডেট করে'
        },
        {
          en: 'It sorts the input array in descending order and removes all odd numbers',
          bn: 'এটি ইনপুট অ্যারেকে বড় থেকে ছোট সাজায় এবং সব বিজোড় সংখ্যা মুছে ফেলে'
        },
        {
          en: 'It executes on specialized quantum graphics processing units',
          bn: 'এটি বিশেষায়িত কোয়ান্টাম গ্রাফিক্স প্রসেসিং ইউনিটে চলে'
        },
        {
          en: 'It deletes half of the numbers using random sampling',
          bn: 'এটি র্যান্ডম স্যাম্পলিং ব্যবহার করে অর্ধেক সংখ্যা মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Binary search updates the tails array in O(log N) time per element.',
        bn: 'বাইনারি সার্চ প্রতিটি উপাদানের জন্য O(log N) সময়ে টেইলস অ্যারে আপডেট করে।'
      },
      explanation: {
        en: 'The tails array stays strictly sorted at all times. Binary search finds where the current number fits in O(log N) time, processing N elements in O(N log N) total time.',
        bn: 'টেইলস অ্যারে সর্বদা সাজানো থাকে। বাইনারি সার্চ প্রতিটি উপাদান কোন স্থানে বসবে তা O(log N) সময়ে নির্ধারণ করে N-টি সংখ্যাকে O(N log N) সময়ে প্রসেস করে।'
      }
    },
    {
      id: 'dp-grd-ex-2',
      kind: 'mcq',
      topic: 'lis-trace-numbers',
      question: {
        en: 'What is the length of the Longest Increasing Subsequence for array [10, 9, 2, 5, 3, 7, 101, 18]?',
        bn: 'অ্যারে [১০, ৯, ২, ৫, ৩, ৭, ১০১, ১৮]-এর জন্য লংগেস্ট ইনক্রিজিং সাবসিকোয়েন্সের দৈর্ঘ্য কত?'
      },
      options: [
        {
          en: 'Length 4 (subsequence [2, 3, 7, 18] or [2, 3, 7, 101])',
          bn: 'দৈর্ঘ্য ৪ (সাবসিকোয়েন্স [২, ৩, ৭, ১৮] বা [২, ৩, ৭, ১০১])'
        },
        {
          en: 'Length 8',
          bn: 'দৈর্ঘ্য ৮'
        },
        {
          en: 'Length 2',
          bn: 'দৈর্ঘ্য ২'
        },
        {
          en: 'Length 6',
          bn: 'দৈর্ঘ্য ৬'
        }
      ],
      answer: 0,
      hint: {
        en: 'The 4 ascending numbers are 2, then 3, then 7, then 18.',
        bn: 'উর্ধ্বক্রমের ৪টি সংখ্যা হলো ২, তারপর ৩, তারপর ৭, তারপর ১৮।'
      },
      explanation: {
        en: 'The longest strictly increasing sequence that can be extracted is [2, 3, 7, 18] (or [2, 3, 7, 101]), which contains exactly 4 elements.',
        bn: 'সবচেয়ে দীর্ঘ উর্ধ্বক্রমিক সাবসিকোয়েন্স হলো [২, ৩, ৭, ১৮] বা [২, ৩, ৭, ১০১], যার মধ্যে ঠিক ৪টি উপাদান রয়েছে।'
      }
    },
    {
      id: 'dp-grd-ex-3',
      kind: 'mcq',
      topic: 'matrix-chain-loop-order',
      question: {
        en: 'In Interval Dynamic Programming, what must the outermost loop iterate over to maintain correct topological dependency order?',
        bn: 'ইন্টারভ্যাল ডায়নামিক প্রোগ্রামিংয়ে সঠিক টপোলজিক্যাল নির্ভরতা বজায় রাখতে সবচেয়ে বাইরের লুপটিকে কিসের ওপর ভিত্তি করে চালাতে হয়?'
      },
      options: [
        {
          en: 'Interval length L (from length 2 up to N), ensuring smaller intervals are completely solved before larger intervals that encompass them are computed',
          bn: 'ইন্টারভ্যালের দৈর্ঘ্য L (দৈর্ঘ্য ২ থেকে N পর্যন্ত), যা নিশ্চিত করে বৃহত্তর ব্যবধান হিসাবের আগেই তার অন্তর্ভুক্ত ছোট ব্যবধানগুলো সমাধান হয়ে গেছে'
        },
        {
          en: 'Randomly selected interval endpoints',
          bn: 'এলোমেলোভাবে নির্বাচিত ব্যবধানের শেষ প্রান্ত'
        },
        {
          en: 'Matrix determinants in descending order',
          bn: 'ম্যাট্রিক্সের নির্ণায়কের অধঃক্রম অনুসারে'
        },
        {
          en: 'The alphabetical names of the matrices',
          bn: 'ম্যাট্রিক্সগুলোর বর্ণানুক্রমিক নাম অনুসারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A larger interval [i..j] depends on smaller sub-intervals [i..k] and [k+1..j].',
        bn: 'একটি বড় ব্যবধান [i..j] তার ভেতরের ছোট ব্যবধান [i..k] এবং [k+1..j]-এর ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Computing interval [i..j] requires answers for sub-intervals of smaller lengths. Iterating by chain length L ensures all required subproblem components are already computed.',
        bn: 'ব্যবধান [i..j] গণনায় ছোট দৈর্ঘ্যের উপ-ব্যবধানের প্রয়োজন হয়। তাই দৈর্ঘ্যের ভিত্তিতে লুপ চালালে নিশ্চিত হয় যে প্রয়োজনীয় সব অংশ আগে থেকেই প্রস্তুত আছে।'
      }
    },
    {
      id: 'dp-grd-ex-4',
      kind: 'mcq',
      topic: 'matrix-chain-multiplication-savings',
      question: {
        en: 'For matrix dimensions [10, 30, 5, 60], what is the minimum scalar multiplication count versus the worst parenthesization?',
        bn: 'ম্যাট্রিক্সের আকার [১০, ৩০, ৫, ৬০]-এর জন্য সবচেয়ে খারাপ বন্ধনীবিন্যাসের তুলনায় সর্বনিম্ন স্কেলার গুণ অপারেশনের সংখ্যা কত?'
      },
      options: [
        {
          en: 'Optimal grouping takes 4500 operations versus 27000 operations for the worst grouping (saving 22500 multiplications)',
          bn: 'সর্বোত্তম বিন্যাসে লাগে ৪৫০০ অপারেশন বনাম সবচেয়ে খারাপে ২৭০০০ অপারেশন (২২৫০০ গুণন সাশ্রয়)'
        },
        {
          en: 'Both groupings take 10000 operations',
          bn: 'উভয় বিন্যাসেই ১০০০০ অপারেশন লাগে'
        },
        {
          en: 'Optimal takes 0 operations',
          bn: 'সর্বোত্তম বিন্যাসে ০ অপারেশন লাগে'
        },
        {
          en: 'Worst grouping takes 500 operations',
          bn: 'সবচেয়ে খারাপ বিন্যাসে ৫০০ অপারেশন লাগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Optimal is (A1 * A2) * A3 = 1500 + 3000 = 4500.',
        bn: 'সর্বোত্তম হলো (A1 * A2) * A3 = ১৫০০ + ৩০০০ = ৪৫০০।'
      },
      explanation: {
        en: 'Grouping ((A1 * A2) * A3) takes 10*30*5 + 10*5*60 = 1500 + 3000 = 4500. Grouping (A1 * (A2 * A3)) takes 30*5*60 + 10*30*60 = 9000 + 18000 = 27000.',
        bn: '((A1 * A2) * A3) করলে লাগে ১০*৩০*৫ + ১০*৫*৬০ = ১৫০০ + ৩০০০ = ৪৫০০। আর (A1 * (A2 * A3)) করলে লাগে ৩০*৫*৬০ + ১০*৩০*৬০ = ৯০০০ + ১৮০০০ = ২৭০০০।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Interval & Matrix Dynamic Programming Quiz',
      bn: 'ইন্টারভ্যাল ও ম্যাট্রিক্স ডায়নামিক প্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'dp-grd-qz-1',
        kind: 'mcq',
        topic: 'matrix-chain-time-complexity',
        question: {
          en: 'What is the time complexity of the interval dynamic programming algorithm for Matrix Chain Multiplication of N matrices?',
          bn: 'N-টি ম্যাট্রিক্সের চেইন মাল্টিপ্লিকেশনের জন্য ইন্টারভ্যাল ডায়নামিক প্রোগ্রামিং অ্যালগরিদমের টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(N^3) time because there are O(N^2) intervals [i..j], each evaluating O(N) split points k',
            bn: 'O(N^3) সময় কারণ O(N^2)-টি ব্যবধান [i..j] রয়েছে এবং প্রতিটিতে O(N)-টি বিভাজন বিন্দু k পরীক্ষা করা হয়'
          },
          {
            en: 'O(N!) factorial time',
            bn: 'O(N!) ফ্যাক্টোরিয়াল সময়'
          },
          {
            en: 'O(N log N) time',
            bn: 'O(N log N) সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(১) ধ্রুবক সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Three nested loops: interval length, start index, and split point.',
          bn: 'তিনটি নেস্টেড লুপ: ব্যবধানের দৈর্ঘ্য, শুরুর ইনডেক্স এবং বিভাজন বিন্দু।'
        },
        explanation: {
          en: 'There are three nested loops: length L (up to N), start index i (up to N), and split point k (up to N). This creates O(N^3) time complexity and O(N^2) table space.',
          bn: 'এখানে তিনটি নেস্টেড লুপ রয়েছে: দৈর্ঘ্য L, শুরুর ইনডেক্স i এবং বিভাজন k। এটি O(N^3) টাইম কমপ্লেক্সিটি এবং O(N^2) মেমরি তৈরি করে।'
        }
      },
      {
        id: 'dp-grd-qz-2',
        kind: 'mcq',
        topic: 'burst-balloons-interval-dp-pattern',
        question: {
          en: 'In the LeetCode Burst Balloons problem, why does the interval DP recurrence choose the LAST balloon to burst rather than the first?',
          bn: 'বার্স্ট বেলুনস সমস্যায় কেন ইন্টারভ্যাল ডিপি শুরুতে ফাটার বদলে শেষ বেলুনটিকে বিভাজন বিন্দু হিসেবে ধরে?'
        },
        options: [
          {
            en: 'Choosing the last balloon to burst isolates the subproblems [i..k] and [k..j] so their boundaries do not depend on internal balloon bursts',
            bn: 'শেষে ফাটার বেলুনটি নির্বাচন করলে [i..k] এবং [k..j] উপ-সমস্যাগুলো সম্পূর্ণ স্বাধীন থাকে এবং তাদের বাউন্ডারি ভেতরের বেলুনের ওপর নির্ভর করে না'
          },
          {
            en: 'Because balloons can only burst in alphabetical order',
            bn: 'কারণ বেলুন কেবল বর্ণানুক্রমিক ক্রমে ফাটানো যায়'
          },
          {
            en: 'Because bursting the first balloon makes the array negative',
            bn: 'কারণ প্রথম বেলুন ফাটালে অ্যারে ঋণাত্মক হয়ে যায়'
          },
          {
            en: 'Due to the air pressure inside latex rubber balloons',
            bn: 'লেটেক্স রাবার বেলুনের ভেতরের বাতাসের চাপের কারণে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you burst a balloon first, the remaining balloons merge and break independence.',
          bn: 'প্রথমে কোনো বেলুন ফাটালে পাশের বেলুনগুলো মিশে গিয়ে সাব-প্রবলেমের স্বাধীনতা নষ্ট করে।'
        },
        explanation: {
          en: 'Bursting balloon k last guarantees that balloon k acts as a fixed boundary for subproblems [i..k] and [k..j], maintaining independent optimal substructure.',
          bn: 'k নং বেলুনকে সবার শেষে ফাটালে তা [i..k] এবং [k..j] উপ-সমস্যার জন্য একটি নির্দিষ্ট বাউন্ডারি হিসেবে কাজ করে এবং সাব-প্রবলেমগুলোর স্বাধীনতা রক্ষা করে।'
        }
      },
      {
        id: 'dp-grd-qz-3',
        kind: 'mcq',
        topic: 'russian-doll-envelopes-reduction',
        question: {
          en: 'How can the 2D Russian Doll Envelopes problem (nesting envelopes of width w and height h) be reduced to 1D Longest Increasing Subsequence?',
          bn: '২ডি রাশিয়ান ডল এনভেলপ সমস্যাটি (প্রস্থ w এবং উচ্চতা h বিশিষ্ট খাম একটির ভেতর আরেকটি ঢোকানো) কীভাবে ১ডি LIS-এ রূপান্তর করা যায়?'
        },
        options: [
          {
            en: 'Sort envelopes by width ascending, and by height descending for ties, then run 1D LIS on heights in O(N log N)',
            bn: 'প্রস্থের ঊর্ধ্বক্রমে এবং সমান হলে উচ্চতার অধঃক্রমে সাজিয়ে উচ্চতার ওপর O(N log N)-এ ১ডি LIS চালানো'
          },
          {
            en: 'Multiply width by height and sort by area alone',
            bn: 'প্রস্থ ও উচ্চতা গুণ করে কেবল ক্ষেত্রফল অনুযায়ী সাজানো'
          },
          {
            en: 'Delete all rectangular envelopes',
            bn: 'সমস্ত আয়তাকার খাম মুছে ফেলা'
          },
          {
            en: 'It cannot be solved in less than exponential O(2^N) time',
            bn: 'এটি সূচকীয় O(২^N) সময়ের কমে সমাধান সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Descending height on equal width prevents using two envelopes of identical width.',
          bn: 'সমান প্রস্থে উচ্চতা উল্টো সাজালে একই প্রস্থের দুটি খাম একসাথে নেওয়া বন্ধ হয়।'
        },
        explanation: {
          en: 'Sorting height descending for equal widths ensures you cannot choose two envelopes with the same width. Running O(N log N) LIS on the resulting heights yields the optimal answer.',
          bn: 'সমান প্রস্থে উচ্চতা উল্টো সাজালে নিশ্চিত হয় যে একই প্রস্থের দুটি খাম একসাথে নেওয়া যাবে না। এরপর উচ্চতার ওপর O(N log N) LIS চালালেই সঠিক উত্তর পাওয়া যায়।'
        }
      },
      {
        id: 'dp-grd-qz-4',
        kind: 'mcq',
        topic: 'optimal-binary-search-tree-connection',
        question: {
          en: 'Which classic search tree optimization problem shares an identical interval dynamic programming recurrence with Matrix Chain Multiplication?',
          bn: 'কোন ক্লাসিক্যাল সার্চ ট্রি অপ্টিমাইজেশন সমস্যাটি ম্যাট্রিক্স চেইন মাল্টিপ্লিকেশনের সাথে হুবহু অভিন্ন ইন্টারভ্যাল ডিপি সমীকরণ শেয়ার করে?'
        },
        options: [
          {
            en: 'Optimal Binary Search Tree (OBST): finding the BST structure that minimizes average search depth weighted by key search frequencies',
            bn: 'অপ্টিমাল বাইনারি সার্চ ট্রি (OBST): কী অনুসন্ধানের ফ্রিকোয়েন্সির ভিত্তিতে গড় অনুসন্ধান গভীরতা সর্বনিম্নকারী BST কাঠামো তৈরি'
          },
          {
            en: 'Red-Black Tree balance rotation',
            bn: 'রেড-ব্ল্যাক ট্রি ব্যালেন্স রোটেশন'
          },
          {
            en: 'Hash table bucket chaining',
            bn: 'হ্যাশ টেবিল বাকেট চেইনিং'
          },
          {
            en: 'Inverting a binary heap in constant time',
            bn: 'ধ্রুবক সময়ে একটি বাইনারি হিপ ইনভার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'OBST minimizes weighted search cost across keys i to j by choosing root k.',
          bn: 'OBST রুট হিসেবে k বেছে নিয়ে i থেকে j পর্যন্ত কী-এর অনুসন্ধানের গড় খরচ সর্বনিম্ন করে।'
        },
        explanation: {
          en: 'Optimal Binary Search Tree considers every key k as a candidate root for keys i to j, summing the costs of left subtree [i..k-1] and right subtree [k+1..j], identical to interval DP.',
          bn: 'অপ্টিমাল বাইনারি সার্চ ট্রিতে i থেকে j পর্যন্ত কী-এর জন্য প্রতিটি k-কে রুট ধরে বাম [i..k-১] ও ডান [k+১..j] সাব-ট্রির খরচ যোগ করা হয়, যা হুবহু ম্যাট্রিক্স চেইন ডিপির সমতুল্য।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-dynamic-release',
    title: {
      en: 'Advanced Production DP: Bitmask & Tree States',
      bn: 'উন্নত প্রোডাকশন ডিপি: বিটমাস্ক ও ট্রি স্টেট'
    }
  }
};
