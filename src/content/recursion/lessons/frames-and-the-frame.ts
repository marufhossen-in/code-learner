import type { Lesson } from '../../../lib/types';

export const FramesAndTheFrameLesson: Lesson = {
  slug: 'frames-and-the-frame',
  tech: 'recursion',
  title: {
    en: 'Divide and Conquer Paradigms: Merge Sort, Binary Search & Recurrences',
    bn: 'ডিভাইড-অ্যান্ড-কনকার কৌশল: মার্জ সর্ট, বাইনারি সার্চ ও রিকারেন্স'
  },
  summary: {
    en: 'Master the three pillars of Divide and Conquer algorithmic architecture: Divide, Conquer, and Combine. Explore canonical algorithms including Merge Sort, Binary Search, and Quick Sort, and evaluate recurrence relations with the Master Theorem.',
    bn: 'ডিভাইড-অ্যান্ড-কনকার অ্যালগরিদমিক আর্কিটেকচারের তিনটি মূল স্তম্ভ আয়ত্ত করুন: ডিভাইড, কনকার ও কম্বাইন। মার্জ সর্ট, বাইনারি সার্চ এবং কুইক সর্টের মতো ক্লাসিক অ্যালগরিদম বাস্তবায়ন ও মাস্টার থিওরেম দিয়ে রিকারেন্স সম্পর্ক বিশ্লেষণের সম্পূর্ণ নির্দেশিকা।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'divide-conquer-architecture',
      text: {
        en: 'The Three Pillars: Divide, Conquer, and Combine',
        bn: 'তিনটি মূল স্তম্ভ: ডিভাইড, কনকার ও কম্বাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When solving large computational problems, the Divide and Conquer paradigm offers an algorithmic strategy that reduces complex tasks into manageable subproblems. Instead of shrinking an input by a single unit at each step, you split the data in half, achieving logarithmic execution speed.',
        bn: 'বিশাল গণনাগত সমস্যা সমাধানের ক্ষেত্রে ডিভাইড-অ্যান্ড-কনকার কৌশল একটি শক্তিশালী অ্যালগরিদমিক আর্কিটেকচার যা জটিল কাজকে সহজে সমাধানযোগ্য উপ-সমস্যায় বিভক্ত করে। প্রতিটি ধাপে ইনপুট কেবল একটি করে কমানোর বদলে আপনি ডাটাকে সরাসরি দুই ভাগে ভাগ করেন, যার ফলে লগারিদমিক গতি অর্জন করা সম্ভব হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The paradigm operates in 3 distinct steps. First, divide the problem into smaller disjoint subproblems. Second, conquer subproblems by calling the algorithm recursively until hitting base cases. Third, combine subproblem results into the final answer. For an array of 7 elements, Merge Sort splits down to single items before merging back into sorted order.',
        bn: 'এই কৌশলটি 3 টি স্বতন্ত্র ধাপে কাজ করে। প্রথমত, সমস্যাটিকে ছোট স্বাধীন উপ-সমস্যায় বিভক্ত করা। দ্বিতীয়ত, বেস কেসে না পৌঁছানো পর্যন্ত রিকার্সিভভাবে উপ-সমস্যাগুলো সমাধান করা। তৃতীয়ত, সমাধানগুলোকে একত্রিত করে মূল উত্তর তৈরি করা। 7 টি উপাদানের একটি অ্যারেতে মার্জ সর্ট একক উপাদানে ভাগ হওয়ার পর পুনরায় সাজানো ক্রমে একত্রিত হয়।'
      }
    },
    {
      type: 'diagram',
      id: 'divide-conquer-diagram',
      caption: {
        en: 'Figure 1: Divide, conquer, and combine decomposition tree for Merge Sort on 7 elements',
        bn: 'চিত্র ১: 7 টি উপাদানের ওপর মার্জ সর্টের ডিভাইড, কনকার ও কম্বাইন বিভাজন ট্রি'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="dcHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="splitGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="combGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#dcHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">✂️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">DIVIDE AND CONQUER PARADIGM &amp; RECURRENCE ANALYSIS</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Subproblem partitioning, base-case conquer, two-pointer linear merge, and the Master Theorem</text>

  <!-- Top: The Split Descent (Divide) -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#splitGrad)" stroke="#818cf8" stroke-width="1.5"/>
  <text x="44" y="118" fill="#a5b4fc" font-size="13" font-weight="bold">STEP 1 &amp; 2: DIVIDE &amp; CONQUER (SPLIT)</text>

  <rect x="44" y="136" width="400" height="42" rx="6" fill="#030712" stroke="#6366f1"/>
  <text x="56" y="162" fill="#f8fafc" font-size="11" font-weight="bold">Root Level 0: [38, 27, 43, 3, 9, 82, 10]</text>

  <rect x="44" y="188" width="190" height="42" rx="6" fill="#030712" stroke="#818cf8"/>
  <text x="54" y="214" fill="#cbd5e1" font-size="10">Left: [38, 27, 43]</text>

  <rect x="254" y="188" width="190" height="42" rx="6" fill="#030712" stroke="#818cf8"/>
  <text x="264" y="214" fill="#cbd5e1" font-size="10">Right: [3, 9, 82, 10]</text>

  <rect x="44" y="240" width="90" height="42" rx="6" fill="#030712" stroke="#a5b4fc"/>
  <text x="52" y="266" fill="#cbd5e1" font-size="10">[38]</text>

  <rect x="144" y="240" width="90" height="42" rx="6" fill="#030712" stroke="#a5b4fc"/>
  <text x="152" y="266" fill="#cbd5e1" font-size="10">[27, 43]</text>

  <rect x="254" y="240" width="90" height="42" rx="6" fill="#030712" stroke="#a5b4fc"/>
  <text x="262" y="266" fill="#cbd5e1" font-size="10">[3, 9]</text>

  <rect x="354" y="240" width="90" height="42" rx="6" fill="#030712" stroke="#a5b4fc"/>
  <text x="362" y="266" fill="#cbd5e1" font-size="10">[82, 10]</text>

  <rect x="44" y="296" width="400" height="150" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="320" fill="#38bdf8" font-size="11" font-weight="bold">Base Case Splitting Mechanics:</text>
  <text x="56" y="340" fill="#cbd5e1" font-size="10">• Splits repeatedly at midpoint: mid = floor(length / 2).</text>
  <text x="56" y="358" fill="#34d399" font-size="10">• Halts when sub-array length &lt;= 1 (inherently sorted base case!).</text>
  <text x="56" y="376" fill="#cbd5e1" font-size="10">• Tree Depth: exactly ceil(log2(N)) levels of subdivision.</text>
  <text x="56" y="396" fill="#94a3b8" font-size="10">• For 1,000,000 items, depth is only 20 levels!</text>
  <text x="56" y="424" fill="#a5b4fc" font-size="10" font-weight="bold">• Divide Phase Cost: O(1) pointer splits</text>

  <!-- Right: The Linear Combine (Merge) -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#combGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">STEP 3: COMBINE (TWO-POINTER MERGE)</text>

  <rect x="516" y="136" width="400" height="135" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="160" fill="#34d399" font-size="11" font-weight="bold">Two-Pointer Linear Merge O(N):</text>
  <text x="528" y="180" fill="#cbd5e1" font-size="10">• Left Sublist:  [27, 38, 43] (sorted)</text>
  <text x="528" y="198" fill="#cbd5e1" font-size="10">• Right Sublist: [3, 9, 10, 82] (sorted)</text>
  <text x="528" y="218" fill="#fbbf24" font-size="10">Compare pointers: min(27, 3) -&gt; 3, min(27, 9) -&gt; 9...</text>
  <text x="528" y="238" fill="#a7f3d0" font-size="10">Merged Result:  [3, 9, 10, 27, 38, 43, 82]</text>
  <text x="528" y="258" fill="#38bdf8" font-size="10" font-weight="bold">Each level does O(N) work across log2(N) levels!</text>

  <rect x="516" y="285" width="400" height="160" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="310" fill="#38bdf8" font-size="12" font-weight="bold">Master Theorem Recurrence Relation:</text>
  <text x="528" y="330" fill="#a78bfa" font-size="10">T(N) = 2 * T(N / 2) + O(N)</text>
  <text x="528" y="350" fill="#cbd5e1" font-size="10">• a = 2 (two recursive subproblems)</text>
  <text x="528" y="368" fill="#cbd5e1" font-size="10">• b = 2 (subproblems are half size)</text>
  <text x="528" y="386" fill="#cbd5e1" font-size="10">• f(N) = O(N) (work of linear merge step)</text>
  <text x="528" y="406" fill="#34d399" font-size="10" font-weight="bold">• Master Theorem Case 2: T(N) = O(N log N) optimal sort!</text>
  <text x="528" y="426" fill="#94a3b8" font-size="9">• Guaranteed worst-case complexity; immune to QuickSort degradation.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'binary-search-divide-conquer',
      text: {
        en: 'Binary Search: The Ultimate Single-Branch Conqueror',
        bn: 'বাইনারি সার্চ: একক শাখার সেরা উদাহরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While Merge Sort branches into two recursive subproblems, Binary Search represents the extreme efficiency of discarding one half entirely at each step.',
        bn: 'মার্জ সর্ট যেখানে দুটি রিকার্সিভ সাব-প্রবলেমে বিভক্ত হয়, বাইনারি সার্চ সেখানে প্রতিটি ধাপে অর্ধেক ডাটা পুরোপুরি বাদ দিয়ে বিস্ময়কর গতি প্রদর্শন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'At each invocation, Binary Search inspects the middle element. If the target does not match, it recurses exclusively into either the left or right half. For a collection of 1000000 sorted records, Binary Search finds any target in at most 20 comparisons.',
        bn: 'প্রতিটি কলে বাইনারি সার্চ মধ্যবর্তী উপাদানটি পরীক্ষা করে। কাঙ্ক্ষিত মান না মিললে এটি কেবল বাম বা ডান অর্ধেকের যেকোনো একটিতে রিকার্স করে। ১০০০০০০ সাজানো রেকর্ডের মধ্যে যেকোনো মান খুঁজে বের করতে বাইনারি সার্চ সর্বোচ্চ ২০ টি তুলনা ব্যবহার করে।'
      }
    },
    {
      type: 'heading',
      id: 'master-theorem-overview',
      text: {
        en: 'Analyzing Recurrences with the Master Theorem',
        bn: 'মাস্টার থিওরেম দিয়ে রিকারেন্স বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Master Theorem provides a cookbook formula for solving recurrences of the form T(n) = a * T(n / b) + f(n).',
        bn: 'মাস্টার থিওরেম T(n) = a * T(n / b) + f(n) আকারের রিকারেন্স সমীকরণ সমাধানের জন্য একটি সরাসরি সূত্র প্রদান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The theorem compares the work done at the leaves with the work done at the root. In Merge Sort, work across all levels is balanced, producing optimal O(n log n) runtime performance.',
        bn: 'এই সূত্রটি লিফ পর্যায়ে হওয়া কাজের সাথে রুট পর্যায়ের কাজের তুলনা করে। মার্জ সর্টে সব স্তরের কাজ সুষমভাবে বণ্টিত থাকে, যার ফলে সর্বোত্তম O(n log n) রানটাইম নিশ্চিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-divide-sim',
      text: {
        en: 'Interactive Benchmark: Merge Sort & Binary Search at Scale',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: মার্জ সর্ট ও বাইনারি সার্চ পরীক্ষা'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-divide-conquer-sim.ts',
      code: `// Divide and Conquer Simulator: Merge Sort & Binary Search
// Merge Sort on 7 elements yields sorted output -> returns 7
// Binary Search on 1000000 items takes 20 comparisons -> gives 20
// Linear scan would take up to 1000000 comparisons -> gives 1000000
function simulateDivideAndConquer() {
  console.log("=== DIVIDE AND CONQUER SIMULATOR ===");

  const rawArray = [38, 27, 43, 3, 9, 82, 10];
  console.log(\`\\n1. Merge Sort on \${rawArray.length} items: [\${rawArray.join(", ")}]\`);

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) result.push(left[i++]);
      else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  const sorted = mergeSort(rawArray);
  console.log(\`   Sorted Output: [\${sorted.join(", ")}] -> Successfully sorted in O(N log N) time!\`);

  console.log("\\n2. Binary Search Scale Benchmark (1000000 sorted elements):");
  const totalItems = 1000000;
  const comparisons = Math.ceil(Math.log2(totalItems));
  console.log(\`   Linear Scan requires up to \${totalItems} comparisons (O(N))\`);
  console.log(\`   Binary Search resolves any item in at most \${comparisons} comparisons (O(log N))\`);
  console.log(\`   -> Speedup Factor: \${(totalItems / comparisons).toFixed(0)}x fewer inspections\`);
}

simulateDivideAndConquer();`
    },
    {
      type: 'terminal',
      id: 'divide-sim-output',
      cmd: 'npx tsx recursion-divide-conquer-sim.ts',
      output: `=== DIVIDE AND CONQUER SIMULATOR ===

1. Merge Sort on 7 items: [38, 27, 43, 3, 9, 82, 10]
   Sorted Output: [3, 9, 10, 27, 38, 43, 82] -> Successfully sorted in O(N log N) time!

2. Binary Search Scale Benchmark (1000000 sorted elements):
   Linear Scan requires up to 1000000 comparisons (O(N))
   Binary Search resolves any item in at most 20 comparisons (O(log N))
   -> Speedup Factor: 50000x fewer inspections`
    }
  ],
  exercises: [
    {
      id: 'rec-div-ex-1',
      kind: 'mcq',
      topic: 'divide-conquer-three-steps',
      question: {
        en: 'What three sequential steps define the Divide and Conquer algorithmic architecture?',
        bn: 'ডিভাইড-অ্যান্ড-কনকার অ্যালগরিদমিক আর্কিটেকচারকে কোন 3 টি ধারাবাহিক ধাপ সংজ্ঞায়িত করে?'
      },
      options: [
        {
          en: 'Divide the problem into subproblems, conquer subproblems recursively, and combine their sub-solutions into the final result',
          bn: 'সমস্যাটিকে ছোট উপ-সমস্যায় বিভক্ত করা, রিকার্সিভভাবে উপ-সমস্যাগুলো সমাধান করা এবং তাদের সমাধান একত্রিত করে চূড়ান্ত ফলাফল তৈরি করা'
        },
        {
          en: 'Allocate memory, format hard drive, reboot computer',
          bn: 'মেমরি বরাদ্দ করা, হার্ডড্রাইভ ফরম্যাট করা, কম্পিউটার রিবুট করা'
        },
        {
          en: 'Write unit tests, deploy to production, review git logs',
          bn: 'ইউনিট টেস্ট লেখা, প্রোডাকশনে ডিপ্লয় করা, গিট লগ রিভিউ করা'
        },
        {
          en: 'Convert code to HTML, add CSS borders, refresh browser',
          bn: 'কোডকে এইচটিএমএলে রূপান্তর করা, সিএসএস বর্ডার দেওয়া, ব্রাউজার রিফ্রেশ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide, conquer, and combine form the classic tripartite model.',
        bn: 'বিভাজন, সমাধান এবং একত্রীকরণ হলো ক্লাসিক মডেল।'
      },
      explanation: {
        en: 'Divide partitions the input, Conquer recurses to base cases, and Combine aggregates sub-solutions into the overarching answer.',
        bn: 'Divide ইনপুটকে ভাগ করে, Conquer বেস কেস পর্যন্ত সমাধান করে এবং Combine সমাধানগুলোকে যুক্ত করে সম্পূর্ণ ফলাফল তৈরি করে।'
      }
    },
    {
      id: 'rec-div-ex-2',
      kind: 'mcq',
      topic: 'merge-sort-recurrence-relation',
      question: {
        en: 'Which recurrence relation accurately models the time complexity of the classic Merge Sort algorithm?',
        bn: 'কোন রিকারেন্স সমীকরণটি ক্লাসিক মার্জ সর্ট অ্যালগরিদমের টাইম কমপ্লেক্সিটি সঠিকভাবে প্রকাশ করে?'
      },
      options: [
        {
          en: 'T(n) = 2 * T(n / 2) + O(n)',
          bn: 'T(n) = 2 * T(n / 2) + O(n)'
        },
        {
          en: 'T(n) = T(n - 1) + O(1)',
          bn: 'T(n) = T(n - 1) + O(1)'
        },
        {
          en: 'T(n) = 4 * T(n / 4) + O(n^3)',
          bn: 'T(n) = 4 * T(n / 4) + O(n^3)'
        },
        {
          en: 'T(n) = T(n / 2) + O(1)',
          bn: 'T(n) = T(n / 2) + O(1)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Merge Sort makes 2 recursive calls of size n/2 and merges in linear time O(n).',
        bn: 'মার্জ সর্ট n/2 আকারের দুটি রিকার্সিভ কল করে এবং O(n) লিনিয়ার সময়ে মার্জ করে।'
      },
      explanation: {
        en: 'Splitting into 2 halves takes 2 * T(n / 2), and the two-pointer merge operation requires linear O(n) time, yielding overall O(n log n).',
        bn: 'দুই অর্ধে বিভক্ত করায় 2 * T(n / 2) এবং মার্জ করতে লিনিয়ার O(n) সময় লাগে, যার ফলে সামগ্রিক জটিলতা O(n log n) হয়।'
      }
    },
    {
      id: 'rec-div-ex-3',
      kind: 'mcq',
      topic: 'binary-search-logarithmic-scaling',
      question: {
        en: 'Why does Binary Search require only 20 comparisons to find a record in a sorted array containing 1000000 elements?',
        bn: '১০০০০০০ উপাদানবিশিষ্ট সাজানো অ্যারেতে একটি রেকর্ড খুঁজতে বাইনারি সার্চের কেন মাত্র 20 টি তুলনা প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Each comparison cuts the remaining search space in half (log2(1000000) approx 20), eliminating unviable elements exponentially',
          bn: 'প্রতিটি তুলনা বাকি অনুসন্ধানের পরিসরকে অর্ধেক করে ফেলে (log2(1000000) প্রায় 20), যা অপ্রয়োজনীয় উপাদানগুলোকে সূচকীয় হারে বাদ দেয়'
        },
        {
          en: 'Because computer microprocessors have exactly 20 hardware registers',
          bn: 'কারণ কম্পিউটার প্রসেসরে ঠিক ২০টি হার্ডওয়্যার রেজিস্টার থাকে'
        },
        {
          en: 'Binary Search skips every odd-numbered index in the array',
          bn: 'বাইনারি সার্চ অ্যারের সমস্ত বিজোড় ইনডেক্স এড়িয়ে চলে'
        },
        {
          en: 'It stores the entire array in a single 64-bit integer',
          bn: 'এটি সম্পূর্ণ অ্যারেকে একটি একক ৬৪-বিট পূর্ণসংখ্যায় সংরক্ষণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Repeated division by 2 reaches 1 in log2(N) steps.',
        bn: '২ দিয়ে বারবার ভাগ করলে log2(N) ধাপে ১ এ পৌঁছানো যায়।'
      },
      explanation: {
        en: 'Halving the search space repeatedly reduces 1000000 to 1 in 20 steps, providing microsecond search times.',
        bn: 'অনুসন্ধানের পরিধি প্রতি ধাপে অর্ধেক করায় 1000000 থেকে 1 এ পৌঁছাতে 20 টি পদক্ষেপ লাগে, ফলে নিমিষেই উত্তর পাওয়া যায়।'
      }
    },
    {
      id: 'rec-div-ex-4',
      kind: 'mcq',
      topic: 'merge-sort-auxiliary-space',
      question: {
        en: 'What is the primary architectural drawback of standard Merge Sort compared to in-place sorting algorithms like Quick Sort or Heap Sort?',
        bn: 'কুইক সর্ট বা হিপ সর্টের মতো ইন-প্লেস অ্যালগরিদমের তুলনায় সাধারণ মার্জ সর্টের প্রধান আর্কিটেকচারাল অসুবিধা কোনটি?'
      },
      options: [
        {
          en: 'Standard Merge Sort requires O(N) auxiliary memory space to hold sub-arrays during the combine merge phase',
          bn: 'সাধারণ মার্জ সর্টে কম্বাইন মার্জ পর্যায়ের সময় উপ-অ্যারেগুলো ধরে রাখতে O(N) অতিরিক্ত মেমরি স্পেস প্রয়োজন হয়'
        },
        {
          en: 'Merge Sort can only sort numbers between 1 and 100',
          bn: 'মার্জ সর্ট কেবল ১ থেকে ১০০ এর মধ্যকার সংখ্যা সাজাতে পারে'
        },
        {
          en: 'It crashes if the array contains duplicate elements',
          bn: 'অ্যারেতে ডুপ্লিকেট উপাদান থাকলে এটি ক্র্যাশ করে'
        },
        {
          en: 'It runs in O(N^3) time on sorted data',
          bn: 'সাজানো ডাটাতে এটি O(N^3) সময়ে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Merging requires auxiliary array buffers.',
        bn: 'মার্জ করার জন্য অতিরিক্ত সহায়ক অ্যারে বাফার লাগে।'
      },
      explanation: {
        en: 'Two-pointer merging requires temporary arrays to store elements during merging, costing O(N) extra space unlike in-place Quick Sort.',
        bn: 'টু-পয়েন্টার মার্জিংয়ের জন্য সাময়িক মেমরি বাফারের প্রয়োজন হয়, যা কুইক সর্টের মতো ইন-প্লেস না হওয়ায় O(N) অতিরিক্ত জায়গা নেয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Divide and Conquer & Recurrences Quiz',
      bn: 'ডিভাইড-অ্যান্ড-কনকার ও রিকারেন্স কুইজ'
    },
    questions: [
      {
        id: 'rec-div-qz-1',
        kind: 'mcq',
        topic: 'master-theorem-case-identification',
        question: {
          en: 'In the Master Theorem recurrence T(n) = a * T(n / b) + f(n), what does the parameter a represent?',
          bn: 'মাস্টার থিওরেম সমীকরণ T(n) = a * T(n / b) + f(n) এ a প্যারামিটারটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The number of recursive subproblems generated at each division step',
            bn: 'প্রতিটি বিভাজন ধাপে তৈরি হওয়া রিকার্সিভ সাব-প্রবলেমের সংখ্যা'
          },
          {
            en: 'The clock frequency of the host computer CPU',
            bn: 'হোস্ট কম্পিউটারের সিপিইউ ক্লক ফ্রিকোয়েন্সি'
          },
          {
            en: 'The total number of bugs in the source code',
            bn: 'সোর্স কোডে থাকা মোট ভুলের সংখ্যা'
          },
          {
            en: 'The network latency measured in milliseconds',
            bn: 'মিলিসেকেন্ডে পরিমাপ করা নেটওয়ার্ক লেটেন্সি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Parameter a counts how many children branch in the recursion tree.',
          bn: 'প্যারামিটার a রিকার্শন ট্রিতে কতগুলো চাইল্ড শাখা তৈরি হয় তা গণনা করে।'
        },
        explanation: {
          en: 'In T(n) = a * T(n / b) + f(n), a is the branching factor (how many subproblems are spawned), while b is the shrinkage factor.',
          bn: 'T(n) = a * T(n / b) + f(n) এ a হলো ব্রাঞ্চিং ফ্যাক্টর (কয়টি সাবকল হয়) এবং b হলো ইনপুট কত ভাগে ভাগ হচ্ছে।'
        }
      },
      {
        id: 'rec-div-qz-2',
        kind: 'mcq',
        topic: 'quick-sort-vs-merge-sort-divide',
        question: {
          en: 'How does the division strategy in Quick Sort fundamentally differ from Merge Sort?',
          bn: 'কুইক সর্টের বিভাজন কৌশল মার্জ সর্টের থেকে কীভাবে মৌলিকভাবে আলাদা?'
        },
        options: [
          {
            en: 'Merge Sort divides purely by index position without inspecting values, whereas Quick Sort partitions values around a pivot element',
            bn: 'মার্জ সর্ট মান পরীক্ষা না করে কেবল ইনডেক্স অবস্থান অনুযায়ী ভাগ করে, যেখানে কুইক সর্ট পিভট উপাদানের মানের ভিত্তিতে পার্টিশন করে'
          },
          {
            en: 'Quick Sort only works on floating point numbers',
            bn: 'কুইক সর্ট কেবল ফ্লোটিং পয়েন্ট সংখ্যায় কাজ করে'
          },
          {
            en: 'Merge Sort does not use recursion',
            bn: 'মার্জ সর্ট কোনো রিকার্শন ব্যবহার করে না'
          },
          {
            en: 'Quick Sort requires an external database server',
            bn: 'কুইক সর্টের জন্য একটি বহিরাগত ডাটাবেস সার্ভার লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Merge Sort splits blind by index; Quick Sort partitions by value around a pivot.',
          bn: 'মার্জ সর্ট ইনডেক্স দেখে অন্ধভাবে ভাগ করে; কুইক সর্ট পিভটের মানের ওপর ভিত্তি করে সাজায়।'
        },
        explanation: {
          en: 'Merge Sort divides at the midpoint regardless of contents. Quick Sort partitions around a pivot so all left items are <= pivot and right items >= pivot.',
          bn: 'মার্জ সর্ট নির্বিচারে মাঝে ভাগ করে। কুইক সর্ট পিভট বেছে নিয়ে ছোট মান বামে এবং বড় মান ডানে রেখে পার্টিশন করে।'
        }
      },
      {
        id: 'rec-div-qz-3',
        kind: 'mcq',
        topic: 'divide-conquer-stack-depth-bound',
        question: {
          en: 'Why is the recursion call stack depth of Merge Sort bounded by O(log n) rather than O(n)?',
          bn: 'মার্জ সর্টের রিকার্শন কল স্ট্যাকের গভীরতা কেন O(n) না হয়ে O(log n) এর মধ্যে সীমাবদ্ধ থাকে?'
        },
        options: [
          {
            en: 'Because the array length is halved at each level, reaching the length-1 base case in exactly log2(n) subdivisions',
            bn: 'কারণ প্রতিটি স্তরে অ্যারের দৈর্ঘ্য অর্ধেক হয়ে যায়, যা ঠিক log2(n) বিভাজনে ১ দৈর্ঘ্যের বেস কেসে পৌঁছে যায়'
          },
          {
            en: 'Because the operating system deletes stack frames after 5 milliseconds',
            bn: 'কারণ অপারেটিং সিস্টেম ৫ মিলিসেকেন্ড পর স্ট্যাক ফ্রেম মুছে ফেলে'
          },
          {
            en: 'Because Merge Sort only executes on alternating Tuesdays',
            bn: 'কারণ মার্জ সর্ট কেবল নির্দিষ্ট সময়ে চলতে পারে'
          },
          {
            en: 'It is not; Merge Sort consumes O(n^2) stack frames',
            bn: 'এটি ভুল; মার্জ সর্টে O(n^2) সংখ্যক স্ট্যাক ফ্রেম লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Halving input size yields logarithmic tree depth.',
          bn: 'ইনপুটের আকার প্রতিবার অর্ধেক করলে লগারিদমিক গভীরতা পাওয়া যায়।'
        },
        explanation: {
          en: 'Dividing the input by 2 repeatedly produces a tree of height ceil(log2(n)). The stack only needs to hold frames along a single path at any moment.',
          bn: 'ইনপুটকে বারবার ২ দিয়ে ভাগ করায় ট্রি-এর উচ্চতা ceil(log2(n)) হয়। স্ট্যাকে যেকোনো মুহূর্তে কেবল একটি একক পথের ফ্রেমগুলো জমা থাকে।'
        }
      },
      {
        id: 'rec-div-qz-4',
        kind: 'mcq',
        topic: 'strassen-matrix-multiplication-dnc',
        question: {
          en: 'How does Strassen algorithm use Divide and Conquer to multiply two N x N matrices faster than standard O(N^3) multiplication?',
          bn: 'স্ট্রাসেনের অ্যালগরিদম কীভাবে ডিভাইড-অ্যান্ড-কনকার ব্যবহার করে দুটি N x N ম্যাট্রিক্সকে সাধারণ O(N^3) এর চেয়ে দ্রুত গুণ করে?'
        },
        options: [
          {
            en: 'It reduces the number of recursive matrix multiplications from 8 down to 7, achieving O(N^2.81) complexity',
            bn: 'এটি রিকার্সিভ ম্যাট্রিক্স গুণের সংখ্যা ৮ থেকে কমিয়ে ৭ এ নামিয়ে আনে, যার ফলে O(N^2.81) জটিলতা অর্জিত হয়'
          },
          {
            en: 'It rounds all matrix numbers to zero',
            bn: 'এটি সব ম্যাট্রিক্স সংখ্যাকে শূন্যতে পরিণত করে'
          },
          {
            en: 'It performs the multiplication in GPU hardware without algorithms',
            bn: 'এটি কোনো অ্যালগরিদম ছাড়া সরাসরি জিপিইউ হার্ডওয়্যারে গুণ করে'
          },
          {
            en: 'It replaces matrix multiplication with string concatenation',
            bn: 'এটি ম্যাট্রিক্স গুণের জায়গায় স্ট্রিং যুক্ত করার কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Strassen reduces the subproblem branching factor a from 8 to 7.',
          bn: 'স্ট্রাসেন সাব-প্রবলেম ব্রাঞ্চিং সংখ্যা a-কে ৮ থেকে ৭ এ কমিয়ে আনেন।'
        },
        explanation: {
          en: 'Standard block matrix multiplication uses 8 sub-multiplications (log2(8) = 3). Strassen cleverly algebraicizes this into 7 multiplications (log2(7) approx 2.81).',
          bn: 'সাধারণ ম্যাট্রিক্স গুণে ৮টি সাব-মাল্টিপ্লিকেশন লাগে (log2(8) = 3)। স্ট্রাসেন বীজগণিতীয় কৌশলে একে ৭টি গুণে রূপান্তর করেন (log2(7) প্রায় 2.81)।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'nests-and-the-nest',
    title: {
      en: 'Branching Recursion Trees & Backtracking: Permutations & Subsets',
      bn: 'ব্রাঞ্চিং রিকার্শন ট্রি ও ব্যাকট্র্যাকিং: পারমিউটেশন ও সাবসেট'
    }
  }
};
