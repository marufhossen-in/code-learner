import type { Lesson } from '../../../lib/types';

export const StatesAndTheStateLesson: Lesson = {
  slug: 'states-and-the-state',
  tech: 'dynamic-programming',
  title: {
    en: '1D State Design & Transition Recurrences',
    bn: '১ডি স্টেট ডিজাইন ও ট্রানজিশন সমীকরণ'
  },
  summary: {
    en: 'Master 1D dynamic programming states and decision recurrences using the House Robber problem, and optimize space from linear memory down to O(1) rolling variables.',
    bn: 'হাউস রবার সমস্যার মাধ্যমে ১ডি ডায়নামিক প্রোগ্রামিং স্টেট ও ট্রানজিশন সমীকরণ শিখুন এবং মেমরি লিনিয়ার থেকে O(1) রোলিং ভেরিয়েবলে অপ্টিমাইজ করুন।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'state-definition-discipline',
      text: {
        en: 'The Art of 1D State Definition',
        bn: '১ডি স্টেট সংজ্ঞায়নের শিল্প'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most decisive step in Dynamic Programming is formulating the state variable. A state is a compact mathematical representation of a subproblem containing all historical information necessary to make future optimal decisions. In 1D dynamic programming, a single integer index i typically parameterizes the prefix of the input evaluated so far.',
        bn: 'ডায়নামিক প্রোগ্রামিংয়ের সবচেয়ে গুরুত্বপূর্ণ পদক্ষেপ হলো স্টেট ভেরিয়েবল সঠিকভাবে সংজ্ঞায়িত করা। একটি স্টেট হলো উপ-সমস্যার এমন একটি সংক্ষিপ্ত গাণিতিক রূপ যা ভবিষ্যতের সর্বোত্তম সিদ্ধান্ত নিতে প্রয়োজনীয় সমস্ত অতীত তথ্য ধারণ করে। ১ডি ডায়নামিক প্রোগ্রামিংয়ে একটি মাত্র পূর্ণসংখ্যা সূচক i সাধারণত এ পর্যন্ত মূল্যায়িত ইনপুটের প্রিফিক্স অংশকে নির্দেশ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'state-variable',
          def: {
            en: 'The parameter (such as array index i) that uniquely captures all relevant decision history needed to compute the subproblem solution.',
            bn: 'এমন একটি প্যারামিটার (যেমন অ্যারে ইনডেক্স i) যা উপ-সমস্যার সমাধান গণনায় প্রয়োজনীয় সমস্ত প্রাসঙ্গিক অতীত সিদ্ধান্ত ধারণ করে।'
          }
        },
        {
          term: 'recurrence-relation',
          def: {
            en: 'The mathematical equation expressing the optimal value of state dp[i] as a function of earlier states such as dp[i - 1] and dp[i - 2].',
            bn: 'গাণিতিক সমীকরণ যা বর্তমান স্টেট dp[i]-এর সর্বোত্তম মানকে পূর্ববর্তী স্টেট যেমন dp[i - ১] ও dp[i - ২]-এর মাধ্যমে প্রকাশ করে।'
          }
        },
        {
          term: 'adjacent-constraint',
          def: {
            en: 'A problem restriction where choosing an element at index i forbids selecting elements at neighboring indices i - 1 or i + 1.',
            bn: 'সমস্যার এমন একটি সীমাবদ্ধতা যেখানে সূচক i-এর উপাদান নির্বাচন করলে তার পাশাপাশি থাকা প্রতিবেশী i - ১ বা i + ১ নির্বাচন করা নিষিদ্ধ হয়।'
          }
        },
        {
          term: 'rolling-variable-compression',
          def: {
            en: 'Replacing an entire 1D array of size N with two scalar variables (prev1, prev2) when transitions only depend on the two preceding states.',
            bn: 'যখন স্টেট ট্রানজিশন কেবল পূর্ববর্তী দুটি মানের ওপর নির্ভর করে, তখন পুরো N আকারের অ্যারে বাদ দিয়ে দুটি সাধারণ চলক ব্যবহার করা।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'house-robber-1d-dp-svg',
      title: {
        en: 'House Robber 1D DP: [2, 7, 9, 3, 1] Yields Maximum Loot 12',
        bn: 'হাউস রবার ১ডি ডিপি: [২, ৭, ৯, ৩, ১] থেকে সর্বোচ্চ লাভ ১২'
      },
      caption: {
        en: 'At each house: dp[i] = max(dp[i - 1], nums[i] + dp[i - 2]). Robbing houses with wealth 2, 9, and 1 produces optimal total 12.',
        bn: 'প্রতিটি বাড়িতে: dp[i] = max(dp[i - ১], nums[i] + dp[i - ২])। ২, ৯ এবং ১ মূল্যের বাড়িগুলো লুট করে সর্বোত্তম মোট ১২ পাওয়া যায়।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="hrBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="robGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="skipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#64748b" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#hrBg)" stroke="#334155" stroke-width="2"/>

  <!-- Top Title: Input Houses -->
  <text x="35" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8">1. Street of 5 Houses: nums = [2, 7, 9, 3, 1]</text>

  <!-- 5 Houses Row -->
  <!-- House 0: 2 (ROBBED) -->
  <rect x="45" y="70" width="130" height="110" rx="10" fill="url(#robGrad)" stroke="#34d399" stroke-width="2"/>
  <text x="110" y="98" font-family="system-ui, sans-serif" font-size="12" fill="#a7f3d0" text-anchor="middle">House 0 (ROBBED)</text>
  <text x="110" y="130" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">$2</text>
  <text x="110" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#d1fae5" text-anchor="middle">dp[0] = 2</text>

  <!-- House 1: 7 (SKIPPED) -->
  <rect x="200" y="70" width="130" height="110" rx="10" fill="url(#skipGrad)" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="265" y="98" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">House 1 (SKIPPED)</text>
  <text x="265" y="130" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">$7</text>
  <text x="265" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#e2e8f0" text-anchor="middle">dp[1] = 7</text>

  <!-- House 2: 9 (ROBBED) -->
  <rect x="355" y="70" width="130" height="110" rx="10" fill="url(#robGrad)" stroke="#34d399" stroke-width="2"/>
  <text x="420" y="98" font-family="system-ui, sans-serif" font-size="12" fill="#a7f3d0" text-anchor="middle">House 2 (ROBBED)</text>
  <text x="420" y="130" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">$9</text>
  <text x="420" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#d1fae5" text-anchor="middle">dp[2] = 11</text>

  <!-- House 3: 3 (SKIPPED) -->
  <rect x="510" y="70" width="130" height="110" rx="10" fill="url(#skipGrad)" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="575" y="98" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">House 3 (SKIPPED)</text>
  <text x="575" y="130" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">$3</text>
  <text x="575" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#e2e8f0" text-anchor="middle">dp[3] = 11</text>

  <!-- House 4: 1 (ROBBED) -->
  <rect x="665" y="70" width="130" height="110" rx="10" fill="url(#robGrad)" stroke="#34d399" stroke-width="2"/>
  <text x="730" y="98" font-family="system-ui, sans-serif" font-size="12" fill="#a7f3d0" text-anchor="middle">House 4 (ROBBED)</text>
  <text x="730" y="130" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">$1</text>
  <text x="730" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#d1fae5" text-anchor="middle">dp[4] = 12</text>

  <!-- Bottom Transition Card -->
  <rect x="45" y="210" width="750" height="135" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="65" y="238" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#fbbf24">State Transition: dp[i] = max(dp[i - 1], nums[i] + dp[i - 2])</text>

  <text x="65" y="265" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• dp[0] = 2 (Base Case 1)</text>
  <text x="65" y="285" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• dp[1] = max(2, 7) = 7 (Base Case 2)</text>
  <text x="65" y="305" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• dp[2] = max(dp[1], 9 + dp[0]) = max(7, 9 + 2) = 11</text>

  <text x="440" y="265" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">• dp[3] = max(dp[2], 3 + dp[1]) = max(11, 3 + 7) = 11</text>
  <text x="440" y="285" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">• dp[4] = max(dp[3], 1 + dp[2]) = max(11, 1 + 11) = 12 (Optimal!)</text>
  <text x="440" y="315" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Robbed Houses: Index 0 ($2) + Index 2 ($9) + Index 4 ($1) = $12 Total</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'house-robber-formulation',
      text: {
        en: 'The Two-Choice Decision at House i',
        bn: 'বাড়ি i-এর দ্বিমুখী সিদ্ধান্ত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the robber stands before house i, exactly two mutually exclusive actions are possible. Choice 1: Skip house i. The security alarm remains quiet, and the maximum loot obtained is simply dp[i - 1]. Choice 2: Rob house i. Taking loot nums[i] activates the alarm for adjacent house i - 1, meaning the robber could only have robbed up to house i - 2, yielding total loot nums[i] + dp[i - 2]. Taking the maximum of these two choices guarantees the optimal decision.',
        bn: 'চোর যখন বাড়ি i-এর সামনে দাঁড়ায়, তখন ঠিক দুটি বিকল্প সিদ্ধান্ত সম্ভব। সিদ্ধান্ত ১: বাড়ি i বাদ দেওয়া। কোনো অ্যালার্ম বাজে না, ফলে প্রাপ্ত সম্পদ হয় dp[i - ১]। সিদ্ধান্ত ২: বাড়ি i লুট করা। এখান থেকে সম্পদ nums[i] নিলে ঠিক আগের বাড়ি i - ১ বাদ দিতে হয়, অর্থাৎ চোর কেবল বাড়ি i - ২ পর্যন্ত লুট করতে পারত, যার ফলে মোট লাভ হয় nums[i] + dp[i - ২]। এই দুই পছন্দের মধ্যে যেটি বড় তা গ্রহণ করলেই সর্বোত্তম সিদ্ধান্ত নিশ্চিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-house-robber-ts',
      text: {
        en: 'Runnable TypeScript: 1D Array and O(1) Rolling Variable Solvers',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ১ডি অ্যারে ও O(1) রোলিং ভেরিয়েবল সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Executing House Robber on [2, 7, 9, 3, 1] yielding optimal loot 12 with O(N) array and O(1) space.',
        bn: '[২, ৭, ৯, ৩, ১] ইনপুটে হাউস রবার অ্যালগরিদম চালিয়ে O(N) ও O(1) উভয় পদ্ধতিতে ১২ লাভ গণনা।'
      },
      code: `// Method 1: 1D Tabulation Array O(N) time and O(N) space
function robArray(nums: number[]): { maxLoot: number; dpTable: number[] } {
  if (nums.length === 0) return { maxLoot: 0, dpTable: [] };
  if (nums.length === 1) return { maxLoot: nums[0], dpTable: [nums[0]] };

  const n = nums.length;
  const dp = new Array(n).fill(0);

  // Base Cases
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // Tabulation Loop
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return { maxLoot: dp[n - 1], dpTable: dp };
}

// Method 2: O(1) Auxiliary Space Rolling Variables
function robOptimized(nums: number[]): number {
  let prev2 = 0; // Represents dp[i - 2]
  let prev1 = 0; // Represents dp[i - 1]

  for (const num of nums) {
    const curr = Math.max(prev1, num + prev2);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

// 5 Houses from diagram
const houses = [2, 7, 9, 3, 1];

const result1 = robArray(houses);
const result2 = robOptimized(houses);

console.log('DP Table entries:', result1.dpTable); // [2, 7, 11, 11, 12]
console.log('1D Array Maximum Loot:', result1.maxLoot); // 12
console.log('O(1) Space Maximum Loot:', result2); // 12
console.log('Both methods agree?', result1.maxLoot === result2); // true
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Notice how state design abstracts away complexity: whether you have 5 houses or 50000 houses, the transition logic never changes. By examining only dp[i - 1] and dp[i - 2], you solve the problem in a single linear pass.',
        bn: 'স্টেট ডিজাইনের সৌন্দর্য লক্ষ্য করুন: ৫টি বাড়ি থাকুক কিংবা ৫০০০০ বাড়ি থাকুক, ট্রানজিশনের নিয়ম কখনো বদলায় না। কেবল dp[i - ১] এবং dp[i - ২] বিবেচনা করে আপনি মাত্র একটি লিনিয়ার পাসে সম্পূর্ণ সমস্যার সমাধান করে ফেলেন।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-sta-ex-1',
      kind: 'mcq',
      topic: 'house-robber-recurrence-relation',
      question: {
        en: 'What is the correct dynamic programming recurrence relation for the classic House Robber problem?',
        bn: 'ক্লাসিক্যাল হাউস রবার সমস্যার জন্য সঠিক ডায়নামিক প্রোগ্রামিং রিকারেন্স সমীকরণ কোনটি?'
      },
      options: [
        {
          en: 'dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])',
          bn: 'dp[i] = Math.max(dp[i - ১], nums[i] + dp[i - ২])'
        },
        {
          en: 'dp[i] = dp[i - 1] + nums[i]',
          bn: 'dp[i] = dp[i - ১] + nums[i]'
        },
        {
          en: 'dp[i] = nums[i] * dp[i - 1]',
          bn: 'dp[i] = nums[i] * dp[i - ১]'
        },
        {
          en: 'dp[i] = Math.min(dp[i - 1], nums[i])',
          bn: 'dp[i] = Math.min(dp[i - ১], nums[i])'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compare skipping house i (dp[i-1]) versus robbing house i (nums[i] + dp[i-2]).',
        bn: 'বাড়ি i বাদ দেওয়া (dp[i-1]) বনাম বাড়ি i লুট করার (nums[i] + dp[i-2]) মধ্যে তুলনা করুন।'
      },
      explanation: {
        en: 'If you skip house i, you keep dp[i - 1]. If you rob house i, you collect nums[i] and add dp[i - 2] because adjacent house i - 1 cannot be robbed.',
        bn: 'বাড়ি i বাদ দিলে লাভ থাকে dp[i - ১]। আর বাড়ি i লুট করলে nums[i] পাওয়া যায় এবং আগের বাড়ি i - ১ নিষিদ্ধ হওয়ায় dp[i - ২] যোগ হয়।'
      }
    },
    {
      id: 'dp-sta-ex-2',
      kind: 'mcq',
      topic: 'house-robber-trace-calculation',
      question: {
        en: 'Given house values [2, 7, 9, 3, 1], what is the optimal maximum loot, and which houses are chosen?',
        bn: 'বাড়িগুলোর সম্পদ [২, ৭, ৯, ৩, ১] হলে সর্বোচ্চ লাভ কত এবং কোন বাড়িগুলো বেছে নেওয়া হয়?'
      },
      options: [
        {
          en: '12 (robbing houses with wealth 2, 9, and 1)',
          bn: '১২ (২, ৯ এবং ১ মূল্যের বাড়িগুলো লুট করে)'
        },
        {
          en: '10 (robbing houses 7 and 3)',
          bn: '১০ (৭ এবং ৩ বাড়ি লুট করে)'
        },
        {
          en: '22 (sum of all houses)',
          bn: '২২ (সবগুলো বাড়ির সমষ্টি)'
        },
        {
          en: '9 (taking only the single largest house)',
          bn: '৯ (কেবল একক বৃহত্তম বাড়িটি নিয়ে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Add 2 + 9 + 1 = 12.',
        bn: 'যোগ করুন ২ + ৯ + ১ = ১২।'
      },
      explanation: {
        en: 'Houses at indices 0 (2), 2 (9), and 4 (1) are non-adjacent and produce total loot 2 + 9 + 1 = 12, which strictly beats 7 + 3 = 10.',
        bn: 'ইনডেক্স ০ (২), ২ (৯) এবং ৪ (১) এর বাড়িগুলো পাশাপাশি নয় এবং তাদের মোট লাভ ২ + ৯ + ১ = ১২, যা ৭ + ৩ = ১০ এর চেয়ে বেশি।'
      }
    },
    {
      id: 'dp-sta-ex-3',
      kind: 'mcq',
      topic: 'house-robber-space-complexity',
      question: {
        en: 'What is the optimal auxiliary space complexity required to solve the House Robber problem using rolling variables?',
        bn: 'রোলিং ভেরিয়েবল ব্যবহার করে হাউস রবার সমস্যা সমাধানের সর্বোত্তম অতিরিক্ত স্পেস কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(1) constant auxiliary space using two variables (prev1 and prev2)',
          bn: 'দুটি ভেরিয়েবল (prev1 ও prev2) ব্যবহার করে O(1) ধ্রুবক স্পেস'
        },
        {
          en: 'O(N) linear space to store the full array table',
          bn: 'সম্পূর্ণ অ্যারে টেবিল সংরক্ষণ করতে O(N) লিনিয়ার স্পেস'
        },
        {
          en: 'O(N^2) quadratic space',
          bn: 'O(N^2) চতুর্ঘাত স্পেস'
        },
        {
          en: 'O(log N) logarithmic stack frames',
          bn: 'O(log N) লগারিদমিক স্ট্যাক ফ্রেম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only two previous scalar numbers are tracked at any moment.',
        bn: 'যেকোনো মুহূর্তে কেবল পূর্ববর্তী দুটি স্কেলার সংখ্যা সংরক্ষণ করা হয়।'
      },
      explanation: {
        en: 'Because each step only references the immediate two previous results, storing an array is unnecessary. Two scalar numbers achieve O(1) memory.',
        bn: 'যেহেতু প্রতিটি পদক্ষেপে কেবল আগের দুটি ফলাফল দরকার হয়, তাই অ্যারে রাখার প্রয়োজন নেই। দুটি সংখ্যা রাখলেই O(1) মেমরিতে কাজ হয়।'
      }
    },
    {
      id: 'dp-sta-ex-4',
      kind: 'mcq',
      topic: 'climbing-stairs-isomorphism',
      question: {
        en: 'Which popular algorithmic problem is structurally identical (isomorphic) to the Fibonacci recurrence relation?',
        bn: 'কোন জনপ্রিয় অ্যালগরিদমিক সমস্যাটি গঠনগতভাবে ফিবোনাচ্চি রিকারেন্স সমীকরণের সাথে হুবহু অভিন্ন?'
      },
      options: [
        {
          en: 'Climbing Stairs: finding the number of distinct ways to climb N stairs taking 1 or 2 steps at a time',
          bn: 'ক্লাইম্বিং স্টেয়ার্স: প্রতিবার ১ বা ২ ধাপ ফেলে N-টি সিঁড়ি অতিক্রম করার অনন্য উপায়ের সংখ্যা নির্ণয়'
        },
        {
          en: 'Binary Search in a sorted array',
          bn: 'সাজানো অ্যারেতে বাইনারি সার্চ'
        },
        {
          en: 'Depth First Search traversal of a graph',
          bn: 'গ্রাফের ডেপথ ফার্স্ট সার্চ ট্রাভার্সাল'
        },
        {
          en: 'Quicksort partitioning around a pivot',
          bn: 'পিভটের চারপাশে কুইকসর্ট বিভাজন'
        }
      ],
      answer: 0,
      hint: {
        en: 'To reach step N, you came from step N-1 or step N-2: ways(N) = ways(N-1) + ways(N-2).',
        bn: 'N সিঁড়িতে পৌঁছাতে আপনি N-১ বা N-২ থেকে এসেছেন: ways(N) = ways(N-১) + ways(N-২)।'
      },
      explanation: {
        en: 'The Climbing Stairs recurrence ways[i] = ways[i - 1] + ways[i - 2] with base cases ways[1] = 1, ways[2] = 2 matches the Fibonacci sequence exactly.',
        bn: 'ক্লাইম্বিং স্টেয়ার্সের সমীকরণ ways[i] = ways[i - ১] + ways[i - ২] হুবহু ফিবোনাচ্চি ধারার সমীকরণের সাথে মিলে যায়।'
      }
    }
  ],
  quiz: {
    title: {
      en: '1D State & Transition Recurrence Quiz',
      bn: '১ডি স্টেট ও ট্রানজিশন রিকারেন্স কুইজ'
    },
    questions: [
      {
        id: 'dp-sta-qz-1',
        kind: 'mcq',
        topic: 'house-robber-circular-extension',
        question: {
          en: 'In House Robber II where houses are arranged in a circle (the first and last houses are adjacent), how is the problem solved using 1D DP?',
          bn: 'হাউস রবার ২ সমস্যায় যেখানে বাড়িগুলো বৃত্তাকারে সাজানো (প্রথম ও শেষ বাড়ি পাশাপাশি), সেখানে ১ডি ডিপি দিয়ে কীভাবে সমাধান করা হয়?'
        },
        options: [
          {
            en: 'Run standard House Robber twice: once for houses 0 to N - 2, and once for houses 1 to N - 1, then take the maximum of both results',
            bn: 'সাধারণ হাউস রবার দুবার চালানো: একবার ০ থেকে N - ২ বাড়ি পর্যন্ত, এবং আরেকবার ১ থেকে N - ১ বাড়ি পর্যন্ত, তারপর দুটির সর্বোচ্চটি নেওয়া'
          },
          {
            en: 'Divide all house values by 2',
            bn: 'সব বাড়ির মানকে ২ দিয়ে ভাগ করা'
          },
          {
            en: 'Convert the array into a binary tree',
            bn: 'অ্যারেকে একটি বাইনারি ট্রিতে রূপান্তর করা'
          },
          {
            en: 'The circular problem is NP-complete and cannot be solved in polynomial time',
            bn: 'বৃত্তাকার সমস্যাটি NP-সম্পূর্ণ এবং বহুপদী সময়ে সমাধান অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Break the circular dependency by testing two linear slices.',
          bn: 'দুটি লিনিয়ার অংশ পরীক্ষা করে বৃত্তাকার নির্ভরতা ভেঙে ফেলুন।'
        },
        explanation: {
          en: 'Because the robber cannot rob both house 0 and house N - 1, the solution must either exclude house N - 1 (slice [0..N-2]) or exclude house 0 (slice [1..N-1]). Taking max(rob(slice1), rob(slice2)) solves it in O(N) time.',
          bn: 'যেহেতু চোর একই সাথে প্রথম ও শেষ বাড়ি লুট করতে পারে না, তাই সমাধানটি হয় শেষ বাড়ি বাদ দেবে [০..N-২], নয়তো প্রথম বাড়ি বাদ দেবে [১..N-১]। উভয়ের সর্বোচ্চটি নিলেই O(N) সময়ে বৃত্তাকার সমস্যা সমাধান হয়।'
        }
      },
      {
        id: 'dp-sta-qz-2',
        kind: 'mcq',
        topic: 'coin-change-1d-min-coins',
        question: {
          en: 'What is the 1D state transition recurrence for the Coin Change problem to find the minimum coins to make amount A using coin denominations C?',
          bn: 'মুদ্রা সেট C দিয়ে A পরিমাণ টাকা তৈরিতে সর্বনিম্ন মুদ্রা বের করতে কয়েন চেঞ্জের ১ডি স্টেট সমীকরণ কোনটি?'
        },
        options: [
          {
            en: 'dp[a] = min(dp[a - c] + 1) for all c in C where a >= c',
            bn: 'সব c in C যেখানে a >= c এর জন্য dp[a] = min(dp[a - c] + ১)'
          },
          {
            en: 'dp[a] = max(dp[a - c]) * 2',
            bn: 'dp[a] = max(dp[a - c]) * ২'
          },
          {
            en: 'dp[a] = dp[a - 1] + dp[a - 2]',
            bn: 'dp[a] = dp[a - ১] + dp[a - ২]'
          },
          {
            en: 'dp[a] = a * coins.length',
            bn: 'dp[a] = a * coins.length'
          }
        ],
        answer: 0,
        hint: {
          en: 'Try taking coin c, adding 1 coin to the optimal solution for subproblem a - c.',
          bn: 'কয়েন c নেওয়ার চেষ্টা করুন, যা উপ-সমস্যা a - c এর সমাধানের সাথে ১ যোগ করে।'
        },
        explanation: {
          en: 'To make amount a, you can transition from any subproblem a - c by spending 1 coin. Taking the minimum over all usable denominations c finds the optimal coin count.',
          bn: 'a পরিমাণ বানাতে আপনি ১টি মুদ্রা খরচ করে যেকোনো a - c উপ-সমস্যা থেকে আসতে পারেন। সব ব্যবহারযোগ্য কয়েনের মধ্যে সর্বনিম্নটি নিলেই অপ্টিমাল সংখ্যা পাওয়া যায়।'
        }
      },
      {
        id: 'dp-sta-qz-3',
        kind: 'mcq',
        topic: 'base-case-initialization-danger',
        question: {
          en: 'What bug occurs if an engineer initializes a minimization DP array with 0 instead of Infinity?',
          bn: 'মিনিমাইজেশন ডিপি অ্যারেকে ইনফিনিটির বদলে ০ দিয়ে ইনিশিয়ালাইজ করলে কোন বাগ তৈরি হয়?'
        },
        options: [
          {
            en: 'Math.min will treat 0 as the cheapest path, preventing valid computed costs from ever updating the table',
            bn: 'Math.min শূন্যকে সবচেয়ে ছোট খরচ ধরে নেবে, ফলে আসল গণনাকৃত মান কখনো টেবিলে আপডেট হতে পারবে না'
          },
          {
            en: 'The CPU processor will overheat and halt',
            bn: 'সিপিইউ প্রসেসর অতিরিক্ত গরম হয়ে বন্ধ হয়ে যাবে'
          },
          {
            en: 'The array will automatically delete its elements',
            bn: 'অ্যারেটি স্বয়ংক্রিয়ভাবে তার উপাদান মুছে ফেলবে'
          },
          {
            en: 'All array values will be multiplied by negative 1',
            bn: 'সমস্ত অ্যারে মান ঋণাত্মক ১ দিয়ে গুণ হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In minimization, uncomputed states must be larger than any real answer.',
          bn: 'মিনিমাইজেশনে অনির্ধারিত স্টেটগুলো যেকোনো বাস্তব উত্তরের চেয়ে বড় হতে হবে।'
        },
        explanation: {
          en: 'Unvisited minimization states must be initialized to Infinity so that real values (e.g. 5, 10) can successfully overwrite them via Math.min(). Initializing to 0 swallows real minimums.',
          bn: 'মিনিমাইজেশনের ঘরগুলো ইনফিনিটি দিয়ে শুরু করতে হয় যাতে যেকোনো বাস্তব মান (যেমন ৫, ১০) Math.min-এর মাধ্যমে সেগুলোকে প্রতিস্থাপন করতে পারে। ০ বসালে আসল ন্যূনতম মানগুলো হারিয়ে যায়।'
        }
      },
      {
        id: 'dp-sta-qz-4',
        kind: 'mcq',
        topic: 'production-linear-dp-scaling',
        question: {
          en: 'Why do 1D dynamic programming algorithms like House Robber or Kadane maximum subarray run with exceptional cache locality on modern hardware?',
          bn: 'হাউস রবার বা কাডানের মতো ১ডি ডিপি অ্যালগরিদমগুলো আধুনিক হার্ডওয়্যারে কেন অসাধারণ ক্যাশ লোকালিটি সহ চলে?'
        },
        options: [
          {
            en: 'Sequential array access patterns allow CPU hardware prefetchers to stream memory contiguously into L1/L2 high-speed CPU caches with minimal cache misses',
            bn: 'ক্রমানুসারে মেমরি পড়ার কারণে সিপিইউ হার্ডওয়্যার প্রিফেচার কোনো মিস ছাড়াই L1/L2 হাই-স্পিড ক্যাশে ডেটা স্ট্রিম করে রাখে'
          },
          {
            en: 'Because 1D DP disables operating system security firewalls',
            bn: 'কারণ ১ডি ডিপি অপারেটিং সিস্টেমের সিকিউরিটি ফায়ারওয়াল নিষ্ক্রিয় করে'
          },
          {
            en: 'Because arrays are stored on solid state drives rather than RAM',
            bn: 'কারণ অ্যারে র‍্যামের বদলে সলিড স্টেট ড্রাইভে সংরক্ষিত থাকে'
          },
          {
            en: 'Because 1D DP executes without using electrical power',
            bn: 'কারণ ১ডি ডিপি চালাতে কোনো বৈদ্যুতিক শক্তি লাগে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Iterating through contiguous memory is the fastest operation for CPUs.',
          bn: 'পরপর মেমরি পড়া সিপিইউ-এর জন্য সবচেয়ে দ্রুতগতির অপারেশন।'
        },
        explanation: {
          en: 'Contiguous linear iteration exhibits near-perfect spatial and temporal cache locality. The CPU prefetches neighboring memory words ahead of execution, yielding microsecond runtimes.',
          bn: 'পরপর সাজানো মেমরি পড়ার সময় সিপিইউ আগেভাগেই পাশের ডেটা দ্রুততম ক্যাশ মেমরিতে লোড করে নেয়, যার ফলে ১ডি ডিপি মাইক্রোসেকেন্ডেই সম্পন্ন হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'choices-and-the-choice',
    title: {
      en: 'The 0/1 Knapsack Problem & Space Optimization',
      bn: '০/১ ন্যাপস্যাক সমস্যা ও স্পেস অপ্টিমাইজেশন'
    }
  }
};
