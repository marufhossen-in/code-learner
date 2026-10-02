import type { Lesson } from '../../../lib/types';

export const PicksAndThePickLesson: Lesson = {
  slug: 'picks-and-the-pick',
  tech: 'greedy',
  title: {
    en: 'Fractional Knapsack & Value Density Sorting',
    bn: 'ফ্র্যাকশনাল ন্যাপস্যাক ও ভ্যালু ডেনসিটি সর্টিং'
  },
  summary: {
    en: 'Master continuous resource allocation using value-to-weight ratios, understand the exchange argument proof, and learn why fractional knapsack succeeds where 0/1 knapsack fails.',
    bn: 'ভ্যালু-টু-ওয়েট অনুপাত ব্যবহার করে ধারাবাহিক রিসোর্স বরাদ্দ শিখুন, এক্সচেঞ্জ প্রমাণ আর্গুমেন্ট বুঝুন এবং জানুন কেন ফ্র্যাকশনাল ন্যাপস্যাক সফল হলেও ০/১ ন্যাপস্যাক ব্যর্থ হয়।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-fractional-knapsack-problem',
      text: {
        en: 'The Fractional Knapsack Problem',
        bn: 'ফ্র্যাকশনাল ন্যাপস্যাক সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Imagine you have a knapsack with a fixed capacity. You are given valuable items, each having a known weight and profit. In Fractional Knapsack, you can divide items into continuous fractions, such as liquids, grains, or divisible compute bandwidth.',
        bn: 'মনে করুন আপনার কাছে একটি নির্দিষ্ট ধারণক্ষমতার ব্যাগ আছে। আপনার সামনে কিছু মূল্যবান পণ্য রয়েছে, যার প্রতিটির নির্দিষ্ট ওজন ও আর্থিক লাভ জানা আছে। ফ্র্যাকশনাল ন্যাপস্যাকে পণ্যগুলোকে ভেঙে যেকোনো ভগ্নাংশ বা আনুপাতিক অংশে গ্রহণ করা যায়, যেমন তরল পদার্থ বা ক্লাউড ব্যান্ডউইথ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'value-density',
          def: {
            en: 'The ratio of an item value divided by its weight (v / w), representing the economic profit generated per unit of capacity consumed.',
            bn: 'একটি আইটেমের মানকে তার ওজন দিয়ে ভাগ করার অনুপাত (v / w), যা ব্যবহৃত ক্ষমতার প্রতি এককে প্রাপ্ত লাভকে নির্দেশ করে।'
          }
        },
        {
          term: 'continuous-relaxation',
          def: {
            en: 'Allowing discrete binary decision variables (0 or 1) to assume any real fraction in the continuous interval between 0 and 1.',
            bn: 'পৃথক বাইনারি সিদ্ধান্ত ভেরিয়েবলকে (০ বা ১) শূন্য থেকে এক এর মধ্যবর্তী যেকোনো বাস্তব ভগ্নাংশ মান গ্রহণের অনুমতি দেওয়া।'
          }
        },
        {
          term: 'greedy-exchange-proof',
          def: {
            en: 'Proving optimality by showing that replacing lower-density items in an arbitrary optimal solution with higher-density items strictly increases total profit.',
            bn: 'একটি অপ্টিমাল সমাধানে কম ঘনত্বের আইটেমগুলোকে বেশি ঘনত্বের আইটেম দিয়ে প্রতিস্থাপন করে মোট লাভ বৃদ্ধির মাধ্যমে সঠিকতা প্রমাণ করা।'
          }
        },
        {
          term: 'tight-capacity-bound',
          def: {
            en: 'The condition where a knapsack is filled to exactly 100% of its available capacity without leaving any wasted volume.',
            bn: 'এমন একটি অবস্থা যেখানে কোনো ফাঁকা জায়গা অপচয় না করে ব্যাগের মোট ক্ষমতার ঠিক ১০০% পূর্ণ করা হয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'fractional-knapsack-breakdown-svg',
      title: {
        en: 'Fractional Knapsack: Density Sorting with Capacity 50',
        bn: 'ফ্র্যাকশনাল ন্যাপস্যাক: ৫০ ধারণক্ষমতায় ডেনসিটি সর্টিং'
      },
      caption: {
        en: 'Capacity 50 takes 100% of Item 1 (ratio 6, val 60), 100% of Item 2 (ratio 5, val 100), and 20/30 of Item 3 (ratio 4, val 80) for total value 240.',
        bn: '৫০ ধারণক্ষমতায় আইটেম ১ এর ১০০% (অনুপাত ৬, মান ৬০), আইটেম ২ এর ১০০% (অনুপাত ৫, মান ১০০) এবং আইটেম ৩ এর ২০/৩০ অংশ (অনুপাত ৪, মান ৮০) নিয়ে মোট মান ২৪০ হয়।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="bgBox" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="i1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="i2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="i3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#bgBox)" stroke="#334155" stroke-width="2"/>

  <!-- Left Column: Available Items Sorted by Density -->
  <text x="35" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8">1. Items Sorted by Value Density (v / w)</text>

  <!-- Item 1 Card -->
  <rect x="35" y="65" width="360" height="75" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="92" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa">Item A: Value = 60, Weight = 10</text>
  <text x="50" y="112" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Density ratio = 60 / 10 = </text>
  <text x="210" y="112" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">6.0 per kg (Rank 1)</text>
  <text x="50" y="128" font-family="system-ui, sans-serif" font-size="11" fill="#10b981">Take 100% (Weight: 10, Value: +60)</text>

  <!-- Item 2 Card -->
  <rect x="35" y="155" width="360" height="75" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="50" y="182" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#34d399">Item B: Value = 100, Weight = 20</text>
  <text x="50" y="202" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Density ratio = 100 / 20 = </text>
  <text x="215" y="202" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">5.0 per kg (Rank 2)</text>
  <text x="50" y="218" font-family="system-ui, sans-serif" font-size="11" fill="#10b981">Take 100% (Weight: 20, Value: +100)</text>

  <!-- Item 3 Card -->
  <rect x="35" y="245" width="360" height="75" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="50" y="272" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fbbf24">Item C: Value = 120, Weight = 30</text>
  <text x="50" y="292" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Density ratio = 120 / 30 = </text>
  <text x="215" y="292" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24">4.0 per kg (Rank 3)</text>
  <text x="50" y="308" font-family="system-ui, sans-serif" font-size="11" fill="#f59e0b">Take 20/30 (Weight: 20, Value: +80)</text>

  <!-- Right Column: Knapsack Filling Visualization -->
  <text x="445" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">2. Knapsack Capacity Allocation (W = 50)</text>

  <!-- Outer Knapsack Container -->
  <rect x="445" y="75" width="375" height="150" rx="10" fill="#0f172a" stroke="#475569" stroke-width="2"/>

  <!-- Segment 1: Item A (width = 10/50 * 375 = 75px) -->
  <rect x="445" y="75" width="75" height="150" fill="url(#i1Grad)" rx="6"/>
  <text x="482" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Item A</text>
  <text x="482" y="165" font-family="system-ui, sans-serif" font-size="11" fill="#e0e7ff" text-anchor="middle">10 kg</text>
  <text x="482" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#e0e7ff" text-anchor="middle">Val: +60</text>

  <!-- Segment 2: Item B (width = 20/50 * 375 = 150px) -->
  <rect x="520" y="75" width="150" height="150" fill="url(#i2Grad)"/>
  <text x="595" y="145" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Item B</text>
  <text x="595" y="165" font-family="system-ui, sans-serif" font-size="12" fill="#d1fae5" text-anchor="middle">20 kg</text>
  <text x="595" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#d1fae5" text-anchor="middle">Val: +100</text>

  <!-- Segment 3: Item C fraction (width = 20/50 * 375 = 150px) -->
  <rect x="670" y="75" width="150" height="150" fill="url(#i3Grad)" rx="6"/>
  <text x="745" y="145" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Item C (20/30)</text>
  <text x="745" y="165" font-family="system-ui, sans-serif" font-size="12" fill="#fef3c7" text-anchor="middle">20 kg (Fraction)</text>
  <text x="745" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fef3c7" text-anchor="middle">Val: +80</text>

  <!-- Summary Box -->
  <rect x="445" y="245" width="375" height="75" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="465" y="272" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">Total Weight Consumed: 10 + 20 + 20 = 50 kg</text>
  <text x="465" y="295" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Maximum Value Obtained: 60 + 100 + 80 = 240</text>
  <text x="465" y="312" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Optimal: Knapsack is 100% filled with zero wasted space.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'step-algorithm-flow',
      text: {
        en: 'The Value Density Greedy Algorithm',
        bn: 'ভ্যালু ডেনসিটি গ্রিডি অ্যালগরিদম'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Compute Value Density Ratios',
            bn: 'ভ্যালু ডেনসিটি অনুপাত নির্ণয় করুন'
          },
          text: {
            en: 'For each item i in the set, calculate ratio = item.value / item.weight. This represents the profit per kilogram.',
            bn: 'সেটের প্রতিটি আইটেমের জন্য ratio = item.value / item.weight হিসাব করুন। এটি প্রতি কেজিতে অর্জিত লাভ নির্দেশ করে।'
          }
        },
        {
          title: {
            en: 'Sort Items in Descending Order of Density',
            bn: 'অনুপাতের অধঃক্রম অনুসারে আইটেমগুলো সাজান'
          },
          text: {
            en: 'Sort the items array such that items with the highest value density appear first. This initial sort requires O(N log N) time.',
            bn: 'আইটেম অ্যারেকে এমনভাবে সাজান যাতে সর্বোচ্চ ঘনত্বের আইটেমটি প্রথমে আসে। এই প্রাথমিক সর্টিং-এ O(N log N) সময় প্রয়োজন।'
          }
        },
        {
          title: {
            en: 'Consume Items Greedily Until Full',
            bn: 'ব্যাগ পূর্ণ না হওয়া পর্যন্ত পর্যায়ক্রমে আইটেম গ্রহণ করুন'
          },
          text: {
            en: 'When an item fits inside the remaining capacity, take 100% of it and reduce available space. Otherwise, take only the required fraction (remaining / item.weight) to fill the knapsack completely and terminate the selection loop.',
            bn: 'যখন কোনো আইটেম ব্যাগের বাকি জায়গায় সম্পূর্ণ এঁটে যায়, তখন তার ১০০% গ্রহণ করে অবশিষ্ট স্থান কমিয়ে দিন। অন্যথায় ব্যাগের ফাঁকা অংশ পুরোপুরি ভরতে প্রয়োজনীয় ভগ্নাংশ (remaining / item.weight) গ্রহণ করে সিলেকশন লুপ শেষ করুন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'runnable-fractional-knapsack-code',
      text: {
        en: 'Runnable TypeScript: Fractional Knapsack Implementation',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: ফ্র্যাকশনাল ন্যাপস্যাক বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Computing maximum value for capacity 50 across 3 items yielding optimal value 240.',
        bn: '৩টি আইটেমে ৫০ ধারণক্ষমতার জন্য সর্বোচ্চ মান গণনা যা ২৪০ অপ্টিমাল মান প্রদান করে।'
      },
      code: `// Define Item structure
interface Item {
  id: string;
  value: number;
  weight: number;
}

interface Allocation {
  id: string;
  fractionTaken: number;
  weightTaken: number;
  valueObtained: number;
}

interface KnapsackResult {
  totalValue: number;
  totalWeight: number;
  allocations: Allocation[];
}

function fractionalKnapsack(items: Item[], capacity: number): KnapsackResult {
  // 1. Sort items by density (value / weight) descending
  const sorted = [...items].sort((a, b) => {
    const ratioA = a.value / a.weight;
    const ratioB = b.value / b.weight;
    return ratioB - ratioA;
  });

  let remainingCapacity = capacity;
  let totalValue = 0;
  let totalWeight = 0;
  const allocations: Allocation[] = [];

  // 2. Greedily take items
  for (const item of sorted) {
    if (remainingCapacity <= 0) break;

    if (item.weight <= remainingCapacity) {
      // Take full item
      allocations.push({
        id: item.id,
        fractionTaken: 1.0,
        weightTaken: item.weight,
        valueObtained: item.value
      });
      totalValue += item.value;
      totalWeight += item.weight;
      remainingCapacity -= item.weight;
    } else {
      // Take fractional part
      const fraction = remainingCapacity / item.weight;
      const val = item.value * fraction;
      allocations.push({
        id: item.id,
        fractionTaken: fraction,
        weightTaken: remainingCapacity,
        valueObtained: val
      });
      totalValue += val;
      totalWeight += remainingCapacity;
      remainingCapacity = 0;
    }
  }

  return { totalValue, totalWeight, allocations };
}

// Benchmark with standard textbook numbers
const testItems: Item[] = [
  { id: 'Item-A', value: 60, weight: 10 },   // ratio = 6.0
  { id: 'Item-B', value: 100, weight: 20 },  // ratio = 5.0
  { id: 'Item-C', value: 120, weight: 30 }   // ratio = 4.0
];

const knapsackCapacity = 50;
const result = fractionalKnapsack(testItems, knapsackCapacity);

console.log('Total Knapsack Value:', result.totalValue); // 240
console.log('Total Weight Consumed:', result.totalWeight); // 50
console.log('Number of allocations:', result.allocations.length); // 3
for (const a of result.allocations) {
  console.log(\`\${a.id}: took \${a.fractionTaken * 100}% -> \${a.weightTaken}kg for val \${a.valueObtained}\`);
}
`
    },
    {
      type: 'heading',
      id: 'why-01-knapsack-fails',
      text: {
        en: 'Why Does Density Sorting Fail for 0/1 Knapsack?',
        bn: '০/১ ন্যাপস্যাকে কেন ডেনসিটি সর্টিং ব্যর্থ হয়?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the discrete 0/1 Knapsack problem, items cannot be divided. Suppose capacity is 50, and you have Item 1 (value 60, weight 10, ratio 6), Item 2 (value 100, weight 20, ratio 5), and Item 3 (value 120, weight 30, ratio 4). Taking Item 1 leaves 40 remaining capacity. In other scenarios, taking the highest density item leaves 10 kg of empty unusable space that lower density pairs could have filled with greater total profit.',
        bn: 'ডিসক্রিট বা পৃথক ০/১ ন্যাপস্যাক সমস্যায় আইটেমগুলোকে ভাগ করা যায় না। ধরা যাক ধারণক্ষমতা ৫০, এবং আপনার কাছে রয়েছে আইটেম ১ (মান ৬০, ওজন ১০, অনুপাত ৬), আইটেম ২ (মান ১০০, ওজন ২০, অনুপাত ৫) এবং আইটেম ৩ (মান ১২০, ওজন ৩০, অনুপাত ৪)। আইটেম ১ নিলে অবশিষ্ট ৪০ ধারণক্ষমতা ফাঁকা থাকে। অন্য ক্ষেত্রে সর্বোচ্চ ঘনত্বের আইটেম নিলে ১০ কেজি খালি অব্যবহারযোগ্য জায়গা থেকে যায় যা কম ঘনত্বের জোড়া দিয়ে আরও বেশি লাভে পূর্ণ করা যেত।'
      }
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'The Fractional Knapsack problem is solvable in O(N log N) using a greedy density sort. The 0/1 Knapsack problem is NP-complete and requires O(N * W) pseudo-polynomial Dynamic Programming.',
        bn: 'ফ্র্যাকশনাল ন্যাপস্যাক সমস্যাটি গ্রিডি ডেনসিটি সর্টিং ব্যবহার করে O(N log N) সময়ে সমাধানযোগ্য। কিন্তু ০/১ ন্যাপস্যাক সমস্যাটি NP-complete এবং এর জন্য O(N * W) ডায়নামিক প্রোগ্রামিং প্রয়োজন।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-pck-ex-1',
      kind: 'mcq',
      topic: 'fractional-knapsack-metric',
      question: {
        en: 'What mathematical metric does the greedy algorithm sort items by when solving the Fractional Knapsack problem?',
        bn: 'ফ্র্যাকশনাল ন্যাপস্যাক সমস্যা সমাধানের সময় গ্রিডি অ্যালগরিদম কোন গাণিতিক পরিমাপের ভিত্তিতে আইটেমগুলো সাজায়?'
      },
      options: [
        {
          en: 'Value-to-weight ratio (value / weight) in descending order',
          bn: 'মান-টু-ওজন অনুপাত (value / weight) এর অধঃক্রম অনুসারে'
        },
        {
          en: 'Absolute value in descending order regardless of weight',
          bn: 'ওজন বিবেচনা না করে পরম মানের অধঃক্রম অনুসারে'
        },
        {
          en: 'Absolute weight in ascending order regardless of value',
          bn: 'মান বিবেচনা না করে পরম ওজনের ঊর্ধ্বক্রম অনুসারে'
        },
        {
          en: 'Alphabetical order of the item names',
          bn: 'আইটেমের নামের বর্ণানুক্রমিক ক্রম অনুসারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Choose the metric that measures profit per unit of consumed weight.',
        bn: 'প্রতি একক ওজনে অর্জিত লাভ নির্দেশ করে এমন পরিমাপ বেছে নিন।'
      },
      explanation: {
        en: 'Sorting by value-to-weight density ensures each unit of knapsack capacity is allocated to the highest-yielding item available.',
        bn: 'ভ্যালু-টু-ওয়েট ঘনত্ব অনুযায়ী সাজালে ব্যাগের ক্ষমতার প্রতিটি একক সর্বোচ্চ লাভজনক আইটেমে বরাদ্দ হওয়া নিশ্চিত হয়।'
      }
    },
    {
      id: 'grd-pck-ex-2',
      kind: 'mcq',
      topic: 'fractional-knapsack-optimal-value-calculation',
      question: {
        en: 'With capacity 50 and items [(v: 60, w: 10), (v: 100, w: 20), (v: 120, w: 30)], what is the maximum total value achieved?',
        bn: '৫০ ধারণক্ষমতা এবং আইটেম [(মান: ৬০, ওজন: ১০), (মান: ১০০, ওজন: ২০), (মান: ১২০, ওজন: ৩০)] নিয়ে সর্বোচ্চ মোট মান কত অর্জিত হয়?'
      },
      options: [
        {
          en: '240 (taking full item 1, full item 2, and 20/30 of item 3)',
          bn: '২৪০ (আইটেম ১ সম্পূর্ণ, আইটেম ২ সম্পূর্ণ এবং আইটেম ৩ এর ২০/৩০ অংশ নিয়ে)'
        },
        {
          en: '280 (taking all three items completely)',
          bn: '২৮০ (তিনটি আইটেমই সম্পূর্ণরূপে গ্রহণ করে)'
        },
        {
          en: '160 (taking only item 1 and item 2)',
          bn: '১৬০ (কেবল আইটেম ১ এবং আইটেম ২ গ্রহণ করে)'
        },
        {
          en: '180 (taking item 1 and item 3)',
          bn: '১৮০ (আইটেম ১ এবং আইটেম ৩ গ্রহণ করে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate: 60 + 100 + (120 * 20 / 30).',
        bn: 'হিসাব করুন: ৬০ + ১০০ + (১২০ * ২০ / ৩০)।'
      },
      explanation: {
        en: 'Item 1 (density 6) gives 60 for 10kg. Item 2 (density 5) gives 100 for 20kg. 20kg remaining is filled by 20/30 of Item 3 (density 4) giving 80. Total value = 60 + 100 + 80 = 240.',
        bn: 'আইটেম ১ (ঘনত্ব ৬) ১০ কেজিতে ৬০ দেয়। আইটেম ২ (ঘনত্ব ৫) ২০ কেজিতে ১০০ দেয়। বাকি ২০ কেজি পূরণ করতে আইটেম ৩ (ঘনত্ব ৪) এর ২০/৩০ অংশ নিয়ে ৮০ পাওয়া যায়। মোট মান = ৬০ + ১০০ + ৮০ = ২৪০।'
      }
    },
    {
      id: 'grd-pck-ex-3',
      kind: 'mcq',
      topic: 'fractional-knapsack-time-complexity',
      question: {
        en: 'What is the overall time complexity of the greedy Fractional Knapsack algorithm for N items?',
        bn: 'N-টি আইটেমের জন্য গ্রিডি ফ্র্যাকশনাল ন্যাপস্যাক অ্যালগরিদমের সামগ্রিক টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(N log N) dominated by the initial sorting of items by density',
          bn: 'ঘনত্ব অনুযায়ী আইটেম সাজানোর কারণে প্রধানত O(N log N)'
        },
        {
          en: 'O(N * W) where W is the integer knapsack capacity',
          bn: 'O(N * W) যেখানে W হলো পূর্ণসংখ্যার ধারণক্ষমতা'
        },
        {
          en: 'O(2^N) exponential time to test all subsets',
          bn: 'সব সাবসেট পরীক্ষা করতে O(২^N) সূচকীয় সময়'
        },
        {
          en: 'O(1) constant time regardless of N',
          bn: 'N এর মান নির্বিশেষে O(১) ধ্রুবক সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sorting N items takes O(N log N), followed by a linear scan.',
        bn: 'N-টি আইটেম সাজাতে O(N log N) সময় লাগে, যার পরে একটি লিনিয়ার স্ক্যান হয়।'
      },
      explanation: {
        en: 'Sorting the N items by density requires O(N log N) time. The subsequent greedy selection pass inspects each item at most once in O(N) time, making the total complexity O(N log N).',
        bn: 'ঘনত্ব অনুযায়ী N-টি আইটেম সাজাতে O(N log N) সময় লাগে। এরপর গ্রিডি সিলেকশন লুপে প্রতিটি আইটেম সর্বোচ্চ একবার দেখে O(N) সময় লাগে, ফলে মোট কমপ্লেক্সিটি O(N log N) হয়।'
      }
    },
    {
      id: 'grd-pck-ex-4',
      kind: 'mcq',
      topic: 'continuous-vs-discrete-knapsack',
      question: {
        en: 'Why is Fractional Knapsack solvable with a greedy algorithm whereas 0/1 Knapsack requires Dynamic Programming?',
        bn: 'কেন ফ্র্যাকশনাল ন্যাপস্যাক গ্রিডি দিয়ে সমাধান করা যায় কিন্তু ০/১ ন্যাপস্যাকে ডায়নামিক প্রোগ্রামিং প্রয়োজন?'
      },
      options: [
        {
          en: 'Divisibility allows packing the knapsack to 100% capacity with no wasted volume, guaranteeing the greedy choice property holds',
          bn: 'বিভাজ্যতা থাকার কারণে কোনো অপচয় ছাড়াই ব্যাগের ১০০% পূর্ণ করা যায়, ফলে গ্রিডি চয়েস বৈশিষ্ট্য নিশ্চিত হয়'
        },
        {
          en: 'Fractional numbers execute faster on modern hardware CPU pipelines',
          bn: 'আধুনিক সিপিইউ পাইপলাইনে ভগ্নাংশ সংখ্যা দ্রুত কাজ করে'
        },
        {
          en: '0/1 knapsack items have zero weight',
          bn: '০/১ ন্যাপস্যাকের আইটেমগুলোর ওজন শূন্য হয়'
        },
        {
          en: 'Dynamic programming cannot handle floating point numbers',
          bn: 'ডায়নামিক প্রোগ্রামিং ফ্লোটিং পয়েন্ট সংখ্যা পরিচালনা করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'In 0/1, discrete items can leave empty unusable capacity.',
        bn: '০/১ ন্যাপস্যাকে অবিভাজ্য আইটেম খালি অব্যবহারযোগ্য জায়গা ফেলে রাখতে পারে।'
      },
      explanation: {
        en: 'Continuous fractions allow filling every single byte or gram of capacity. In 0/1 knapsack, choosing a high-density item might leave empty space that cannot be filled, causing greedy heuristics to miss the global optimum.',
        bn: 'ধারাবাহিক ভগ্নাংশ নেওয়ার সুযোগ থাকায় ধারণক্ষমতার প্রতিটি একক পূর্ণ করা সম্ভব হয়। কিন্তু ০/১ ন্যাপস্যাকে অবিভাজ্যতার কারণে ফাঁকা জায়গা থেকে গিয়ে গ্রিডি পদ্ধতি সর্বোত্তম সমাধান মিস করতে পারে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Fractional Knapsack Mastery Quiz',
      bn: 'ফ্র্যাকশনাল ন্যাপস্যাক দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'grd-pck-qz-1',
        kind: 'mcq',
        topic: 'exchange-argument-fractional-knapsack',
        question: {
          en: 'How does the exchange argument prove that density sorting produces the optimal fractional knapsack solution?',
          bn: 'এক্সচেঞ্জ আর্গুমেন্ট কীভাবে প্রমাণ করে যে ডেনসিটি সর্টিং অপ্টিমাল ফ্র্যাকশনাল ন্যাপস্যাক সমাধান দেয়?'
        },
        options: [
          {
            en: 'By demonstrating that swapping an amount of lower-density item with an equal weight of higher-density item strictly increases total value',
            bn: 'এটি দেখিয়ে যে সমান ওজনের কম ঘনত্বের আইটেমকে বেশি ঘনত্বের আইটেম দিয়ে বদলালে মোট মান বৃদ্ধি পায়'
          },
          {
            en: 'By testing all 2^N possible item combinations in memory',
            bn: 'মেমরিতে সমস্ত ২^N সম্ভাব্য আইটেম সমন্বয় পরীক্ষা করে'
          },
          {
            en: 'By proving that all items have identical weight',
            bn: 'প্রমাণ করে যে সব আইটেমের ওজন সমান'
          },
          {
            en: 'By running the algorithm on multiple parallel threads',
            bn: 'একাধিক প্যারালাল থ্রেডে অ্যালগরিদমটি চালিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Replacing lower profit density with higher density always yields more value.',
          bn: 'কম লাভের ঘনত্বকে বেশি ঘনত্ব দিয়ে প্রতিস্থাপন করলে সর্বদা বেশি মান পাওয়া যায়।'
        },
        explanation: {
          en: 'If an optimal solution did not take the highest density available, replacing any fraction of a lower-density item with the higher-density item yields a strictly greater profit, contradicting the assumption that the non-greedy solution was optimal.',
          bn: 'যদি কোনো অপ্টিমাল সমাধান সর্বোচ্চ ঘনত্বের আইটেম বাদ দিয়ে কম ঘনত্বের আইটেম নিত, তবে কম ঘনত্বের অংশ বদলে বেশি ঘনত্বের অংশ বসালে লাভ আরও বাড়ত, যা প্রমাণ করে যে গ্রিডি সমাধানই সর্বোত্তম।'
        }
      },
      {
        id: 'grd-pck-qz-2',
        kind: 'mcq',
        topic: 'median-of-medians-optimization',
        question: {
          en: 'Can the Fractional Knapsack problem theoretically be solved faster than O(N log N) using selection algorithms?',
          bn: 'সিলেকশন অ্যালগরিদম ব্যবহার করে ফ্র্যাকশনাল ন্যাপস্যাক সমস্যা কি তাত্ত্বিকভাবে O(N log N) এর চেয়ে দ্রুত সমাধান করা সম্ভব?'
        },
        options: [
          {
            en: 'Yes, using QuickSelect or Median-of-Medians to find the cut-off density item in O(N) average and worst-case time',
            bn: 'হ্যাঁ, কুইক-সিলেক্ট বা মিডিয়ান-অব-মিডিয়ান্স ব্যবহার করে O(N) সময়ে কাট-অফ আইটেম খুঁজে বের করার মাধ্যমে'
          },
          {
            en: 'No, comparison sorting lower bound proves O(N log N) is an insurmountable limit',
            bn: 'না, কম্প্যারিজন সর্টিং সীমা প্রমাণ করে যে O(N log N) অতিক্রম করা অসম্ভব'
          },
          {
            en: 'Only if the knapsack capacity is equal to 0',
            bn: 'কেবল তখনই সম্ভব যদি ব্যাগের ধারণক্ষমতা ০ এর সমান হয়'
          },
          {
            en: 'Only by using quantum computing hardware',
            bn: 'কেবল কোয়ান্টাম কম্পিউটিং হার্ডওয়্যার ব্যবহার করলেই সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'You only need to partition items above and below the capacity threshold, not fully sort them.',
          bn: 'আপনার আইটেমগুলোকে পুরোপুরি সাজানোর দরকার নেই, কেবল থ্রেশহোল্ড অনুযায়ী ভাগ করলেই চলে।'
        },
        explanation: {
          en: 'Full sorting is not strictly necessary. Using linear-time selection (QuickSelect/Median-of-Medians), we can partition items into higher and lower density groups in O(N) time.',
          bn: 'পুরো অ্যারে সর্ট করা বাধ্যতামূলক নয়। লিনিয়ার-টাইম সিলেকশন অ্যালগরিদম দিয়ে O(N) সময়ে বেশি ও কম ঘনত্বের গ্রুপে ভাগ করে নেওয়া যায়।'
        }
      },
      {
        id: 'grd-pck-qz-3',
        kind: 'mcq',
        topic: 'fraction-boundary-handling',
        question: {
          en: 'How many items in the greedy Fractional Knapsack solution can be taken as a strict fraction (strictly between 0% and 100%)?',
          bn: 'গ্রিডি ফ্র্যাকশনাল ন্যাপস্যাক সমাধানে সর্বোচ্চ কয়টি আইটেম ভগ্নাংশ আকারে (০% এবং ১০০% এর মাঝে) গৃহীত হতে পারে?'
        },
        options: [
          {
            en: 'At most 1 item: the boundary item that completely fills the remaining capacity',
            bn: 'সর্বোচ্চ ১টি আইটেম: বাউন্ডারি আইটেম যা অবশিষ্ট ফাঁকা জায়গা পুরোপুরি পূর্ণ করে'
          },
          {
            en: 'All N items are always divided into equal fractions',
            bn: 'সব N-টি আইটেমই সর্বদা সমান ভগ্নাংশে বিভক্ত হয়'
          },
          {
            en: 'Exactly half of the items',
            bn: 'আইটেমগুলোর ঠিক অর্ধেক সংখ্যক'
          },
          {
            en: 'Zero items because fractions are forbidden',
            bn: 'শূন্যটি আইটেম কারণ ভগ্নাংশ গ্রহণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every item before the cutoff is taken at 100%; every item after is taken at 0%.',
          bn: 'কাটঅফের আগের সব আইটেম ১০০% নেওয়া হয়; পরের সব আইটেম ০% নেওয়া হয়।'
        },
        explanation: {
          en: 'Every item with density higher than the cutoff is taken completely (100%). At most 1 boundary item is split to fill the exact remaining capacity, after which remaining items are taken at 0%.',
          bn: 'কাটঅফ ঘনত্বের চেয়ে বেশি ঘনত্বের প্রতিটি আইটেম সম্পূর্ণরূপে (১০০%) নেওয়া হয়। কেবল ১টি মাত্র বাউন্ডারি আইটেম ভেঙে অবশিষ্ট ক্ষমতা পূর্ণ করা হয় এবং বাকি আইটেমগুলো ০% নেওয়া হয়।'
        }
      },
      {
        id: 'grd-pck-qz-4',
        kind: 'mcq',
        topic: 'real-world-fractional-knapsack',
        question: {
          en: 'Which real-world engineering problem directly maps to the Fractional Knapsack model?',
          bn: 'বাস্তব জীবনের কোন ইঞ্জিনিয়ারিং সমস্যাটি সরাসরি ফ্র্যাকশনাল ন্যাপস্যাক মডেলের সাথে মেলে?'
        },
        options: [
          {
            en: 'Allocating network bandwidth or cloud compute quotas among streaming video feeds weighted by bitrate revenue',
            bn: 'বিটরেট আয়ের ভিত্তিতে স্ট্রিমিং ভিডিও ফিডের মধ্যে নেটওয়ার্ক ব্যান্ডউইথ বা ক্লাউড কোটা বরাদ্দ করা'
          },
          {
            en: 'Compiling source code into machine assembly instructions',
            bn: 'সোর্স কোডকে মেশিন অ্যাসেম্বলি নির্দেশে কম্পাইল করা'
          },
          {
            en: 'Inverting a binary search tree in memory',
            bn: 'মেমরিতে বাইনারি সার্চ ট্রি ইনভার্ট বা উল্টে দেওয়া'
          },
          {
            en: 'Encrypting passwords using a salted SHA-256 hash',
            bn: 'সল্টেড SHA-256 হ্যাশ ব্যবহার করে পাসওয়ার্ড এনক্রিপ্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Look for divisible resources like bandwidth or fluid capacity.',
          bn: 'ব্যান্ডউইথ বা তরলের মতো বিভাজ্য রিসোর্সের সমস্যাটি খুঁজুন।'
        },
        explanation: {
          en: 'Continuous resources like network bandwidth, CPU time slicing, and oil pipeline distribution map directly to fractional knapsack because they can be divided into arbitrary real-valued fractions.',
          bn: 'নেটওয়ার্ক ব্যান্ডউইথ, সিপিইউ টাইম স্লাইসিং এবং তরল পাইপলাইনের মতো বিভাজ্য রিসোর্সগুলো ফ্র্যাকশনাল ন্যাপস্যাকের সাথে সরাসরি মেলে কারণ এদের যেকোনো ভগ্নাংশে ভাগ করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'grabs-and-the-grab',
    title: {
      en: 'Interval Scheduling & Activity Selection',
      bn: 'ইন্টারভ্যাল শিডিউলিং ও অ্যাক্টিভিটি সিলেকশন'
    }
  }
};
