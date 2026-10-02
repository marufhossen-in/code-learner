import type { Lesson } from '../../../lib/types';

export const theUnimodalAtelierLesson: Lesson = {
  slug: 'the-unimodal-atelier',
  tech: 'searching',
  title: {
    en: 'Ternary Search & Optimization: Unimodal Functions',
    bn: 'টার্নারি সার্চ ও অপ্টিমাইজেশন: ইউনিমোডাল ফাংশন'
  },
  summary: {
    en: 'Ternary search locates the global maximum or minimum of a unimodal function by dividing the search domain into 3 equal segments. A unimodal function increases monotonically to a unique summit and then decreases monotonically. By evaluating function values at two interior probe points, m1 and m2, ternary search eliminates 1 third of the candidate interval per iteration. On continuous real domains, the algorithm converges to within epsilon precision in O(log(1 / eps)) rounds. On discrete integer arrays, comparing adjacent elements avoids integer division rounding issues, halving the domain in O(log n) steps.',
    bn: 'টার্নারি সার্চ অনুসন্ধান পরিধিকে ৩টি সমান অংশে বিভক্ত করে ইউনিমোডাল ফাংশনের বৈশ্বিক সর্বোচ্চ বা সর্বনিম্ন মান নির্ণয় করে। একটি ইউনিমোডাল ফাংশন একটি অনন্য শীর্ষবিন্দু পর্যন্ত একমুখীভাবে বৃদ্ধি পায় এবং তারপর একমুখীভাবে হ্রাস পায়। দুটি অভ্যন্তরীণ প্রোব পয়েন্ট m1 এবং m2 তে ফাংশনের মান মূল্যায়ন করে টার্নারি সার্চ প্রতি পুনরাবৃত্তিতে ১ তৃতীয়াংশ ব্যবধান বাদ দেয়। অবিচ্ছিন্ন বাস্তব সংখ্যার ক্ষেত্রে অ্যালগরিদমটি O(log(1 / eps)) রাউন্ডে এপসিলন নির্ভুলতায় পৌঁছায়। বিচ্ছিন্ন পূর্ণসংখ্যা অ্যারেতে পাশাপাশি দুটি উপাদান তুলনা করলে পূর্ণসংখ্যা রাউন্ডিংয়ের সমস্যা এড়ানো যায় এবং O(log n) ধাপে পরিধি অর্ধেকে নেমে আসে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What Ternary Search Accomplishes on Unimodal Terrains',
        bn: 'ইউনিমোডাল ক্ষেত্রে টার্নারি সার্চ কী কাজ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine how ternary search optimizes unimodal terrains where standard monotonic assumptions fail. While binary search requires a strictly monotonic function to discard halves, unimodal optimization handles functions that rise to a single crest and then fall. Examples include profit curves that rise with production volume before declining due to storage overhead, or throughput curves that increase with concurrency before dropping due to thread contention. Ternary search solves this problem by sampling two interior points, allowing the algorithm to safely eliminate one third of the search range on every step.',
        bn: 'এই পাঠে আমরা পরীক্ষা করব কীভাবে টার্নারি সার্চ এমন ইউনিমোডাল ক্ষেত্রগুলোতে অপ্টিমাইজেশন পরিচালনা করে যেখানে সাধারণ মনোটনিক শর্ত অকার্যকর হয়। বাইনারি সার্চ যেখানে অর্ধেক বাদ দেওয়ার জন্য সম্পূর্ণ একমুখী ফাংশন দাবি করে, সেখানে ইউনিমোডাল কৌশল এমন ফাংশন পরিচালনা করে যা একটিমাত্র শিখরে ওঠে এবং পরে নেমে যায়। উদাহরণস্বরূপ, মুনাফার বক্ররেখা যা উৎপাদনের পরিমাণের সাথে বাড়ে এবং পরবর্তীতে অতিরিক্ত সংরক্ষণ খরচের কারণে হ্রাস পায়, অথবা থ্রুপুট বক্ররেখা যা প্রসেসিং সমান্তরাল করার সাথে বাড়ে এবং পরবর্তীতে থ্রেড বাধার কারণে কমে যায়। টার্নারি সার্চ দুটি অভ্যন্তরীণ বিন্দুতে মান যাচাই করে প্রতি ধাপে অনুসন্ধান পরিধির এক তৃতীয়াংশ বাদ দিয়ে এই সমস্যার নিখুঁত সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Unimodal Function',
          def: {
            en: 'A mathematical function that strictly increases to a single global maximum and then strictly decreases across its domain.',
            bn: 'একটি গাণিতিক ফাংশন যা তার ডোমেন জুড়ে একটি অনন্য বৈশ্বিক সর্বোচ্চ মান পর্যন্ত বৃদ্ধি পায় এবং এরপর কঠোরভাবে হ্রাস পায়।'
          }
        },
        {
          term: 'Ternary Search',
          def: {
            en: 'A divide-and-conquer optimization algorithm that partitions an interval into three segments and discards one third per step in O(log3/2(n)) time.',
            bn: 'একটি ডিভাইড-অ্যান্ড-কনকার অপ্টিমাইজেশন অ্যালগরিদম যা একটি ব্যবধানকে তিনটি অংশে ভাগ করে প্রতি ধাপে এক তৃতীয়াংশ বাদ দিয়ে O(log3/2(n)) সময়ে কাজ করে।'
          }
        },
        {
          term: 'Trisection Points',
          def: {
            en: 'The two interior points m1 = lo + (hi - lo) / 3 and m2 = hi - (hi - lo) / 3 used to probe function values.',
            bn: 'm1 = lo + (hi - lo) / ৩ এবং m2 = hi - (hi - lo) / ৩ এই দুটি অভ্যন্তরীণ বিন্দু যা ফাংশনের মান পরীক্ষার জন্য ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Epsilon Precision',
          def: {
            en: 'A small positive threshold (such as 0.0000001) that defines when continuous interval reduction should terminate.',
            bn: 'একটি ক্ষুদ্র ধনাত্মক সীমা (যেমন ০.০০০০০০১) যা নির্ধারণ করে যে অবিচ্ছিন্ন ব্যবধান সংকোচন কখন সমাপ্ত করতে হবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'continuous-mechanics',
      text: {
        en: 'Continuous Trisection Mechanics and Elimination Rules',
        bn: 'অবিচ্ছিন্ন ট্রাইসেকশন মেকানিক্স এবং বর্জন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To optimize a continuous unimodal function over interval [lo, hi], the algorithm selects two interior points: m1 = lo + (hi - lo) / 3 and m2 = hi - (hi - lo) / 3. Evaluating f(m1) and f(m2) provides conclusive directional information. If f(m1) is strictly less than f(m2), the summit cannot possibly exist in the first third [lo, m1]. Because the function is unimodal, the peak must lie to the right of m1, so we update lo = m1. Symmetrically, if f(m1) is strictly greater than f(m2), the summit cannot exist in the last third [m2, hi], so we update hi = m2. If f(m1) equals f(m2), the peak lies between m1 and m2, allowing both outer segments to be discarded. In every iteration, the search interval contracts to two-thirds of its prior length. The loop terminates when hi - lo is less than the desired epsilon precision.',
        bn: 'ব্যবধান [lo, hi] তে একটি অবিচ্ছিন্ন ইউনিমোডাল ফাংশন অপ্টিমাইজ করতে অ্যালগরিদমটি দুটি অভ্যন্তরীণ বিন্দু বেছে নেয়: m1 = lo + (hi - lo) / ৩ এবং m2 = hi - (hi - lo) / ৩। f(m1) এবং f(m2) এর মান মূল্যায়ন করলে স্পষ্ট দিকনির্দেশনা পাওয়া যায়। f(m1) যদি f(m2) এর চেয়ে কঠোরভাবে ছোট হয়, তবে শীর্ষবিন্দু কোনোভাবেই প্রথম তৃতীয়াংশ [lo, m1] তে থাকতে পারে না। ফাংশনটি ইউনিমোডাল হওয়ায় শীর্ষবিন্দু অবশ্যই m1 এর ডানে থাকবে, তাই আমরা lo = m1 আপডেট করি। একইভাবে f(m1) যদি f(m2) এর চেয়ে বড় হয়, তবে শীর্ষবিন্দু শেষ তৃতীয়াংশ [m2, hi] তে থাকা অসম্ভব, ফলে hi = m2 আপডেট করা হয়। আর f(m1) এবং f(m2) সমান হলে শীর্ষবিন্দু m1 ও m2 এর মাঝে অবস্থিত থাকে, যার ফলে উভয় প্রান্তের তৃতীয়াংশই বাদ দেওয়া যায়। প্রতিটি পুনরাবৃত্তিতে অনুসন্ধান ব্যবধান আগের দৈর্ঘ্যের দুই-তৃতীয়াংশে সংকুচিত হয়। যখন hi - lo এর মান কাঙ্ক্ষিত এপসিলন নির্ভুলতার চেয়ে কম হয়, তখন লুপটি সমাপ্ত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'continuous-ternary.ts',
      caption: {
        en: 'Implementation of continuous ternary search to locate the maximum of a unimodal mathematical function.',
        bn: 'একটি ইউনিমোডাল গাণিতিক ফাংশনের সর্বোচ্চ মান খুঁজে পেতে অবিচ্ছিন্ন টার্নারি সার্চের বাস্তবায়ন।'
      },
      code: `export interface OptimizationResult {
  peakX: number;
  peakY: number;
  iterations: number;
}

export function ternarySearchContinuous(
  fn: (x: number) => number,
  lo: number,
  hi: number,
  eps: number = 1e-7
): OptimizationResult {
  let iterations = 0;

  while (hi - lo > eps) {
    iterations++;
    const diff = (hi - lo) / 3;
    const m1 = lo + diff;
    const m2 = hi - diff;

    if (fn(m1) < fn(m2)) {
      lo = m1; // Peak cannot be in [lo, m1]
    } else {
      hi = m2; // Peak cannot be in [m2, hi]
    }
    // Prevent infinite execution in edge conditions
    if (iterations > 100) break;
  }

  const peakX = (lo + hi) / 2;
  return {
    peakX: Number(peakX.toFixed(6)),
    peakY: Number(fn(peakX).toFixed(6)),
    iterations
  };
}`
    },
    {
      type: 'heading',
      id: 'discrete-vs-continuous',
      text: {
        en: 'Discrete Optimization: Why Integer Thirds Fail',
        bn: 'বিচ্ছিন্ন অপ্টিমাইজেশন: পূর্ণসংখ্যা তৃতীয়াংশ কেন ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Applying continuous ternary search directly to discrete integer arrays introduces severe rounding traps. When the candidate window narrows to 2 or 3 elements, integer division can cause m1 to equal m2. If m1 equals m2, comparing arr[m1] with arr[m2] yields zero information, causing the loop to freeze in an endless cycle. The clean and robust solution for discrete unimodal arrays is slope bisection. In an array where numbers rise to a single peak and then fall, inspecting the slope between mid and mid + 1 determines the search direction. If arr[mid] is less than arr[mid + 1], the ascent is ongoing and the peak must reside strictly to the right, so lo advances to mid + 1. Otherwise, the descent has started or mid is the peak, so hi collapses to mid. This evaluates only 1 comparison per step and discards half the array, achieving O(log n) complexity without integer rounding pitfalls.',
        bn: 'বিচ্ছিন্ন পূর্ণসংখ্যা অ্যারেতে অবিচ্ছিন্ন টার্নারি সার্চ সরাসরি প্রয়োগ করলে গুরুতর রাউন্ডিং সমস্যা দেখা দেয়। যখন প্রার্থীর উইন্ডোটি ২ বা ৩ উপাদানে নেমে আসে, তখন পূর্ণসংখ্যার ভাগের কারণে m1 এবং m2 এর মান সমান হয়ে যেতে পারে। m1 ও m2 সমান হলে arr[m1] এবং arr[m2] তুলনা কোনো নতুন তথ্য দেয় না, যার ফলে লুপটি অনন্ত অচলাবস্থায় আটকে যায়। বিচ্ছিন্ন ইউনিমোডাল অ্যারের জন্য সবচেয়ে পরিচ্ছন্ন ও নির্ভরযোগ্য সমাধান হলো ঢাল ভিত্তিক বাইসেকশন। যে অ্যারেতে সংখ্যাগুলো একটি পিক পর্যন্ত বাড়ে এবং পরে কমে, সেখানে mid এবং mid + ১ এর মধ্যকার ঢাল দেখলেই অনুসন্ধানের দিক নিশ্চিত হওয়া যায়। arr[mid] যদি arr[mid + 1] এর চেয়ে ছোট হয়, তবে ঊর্ধ্বগতি চলছে এবং পিক অবশ্যই ডানে থাকবে, তাই lo = mid + 1 হয়। অন্যথায় অবরোহণ শুরু হয়েছে বা mid নিজেই পিক, ফলে hi = mid হয়। এটি প্রতি ধাপে মাত্র ১টি তুলনা চালায় এবং অ্যারের অর্ধেক অংশ বাদ দিয়ে কোনো রাউন্ডিং ফাঁদ ছাড়াই O(log n) গতি নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'discrete-peak.ts',
      caption: {
        en: 'Slope bisection for finding the peak in a discrete unimodal array.',
        bn: 'বিচ্ছিন্ন ইউনিমোডাল অ্যারেতে শীর্ষবিন্দু খুঁজে পেতে ঢাল ভিত্তিক বাইসেকশনের বাস্তবায়ন।'
      },
      code: `export function findDiscretePeak(arr: number[]): { index: number; value: number; steps: number } {
  let lo = 0;
  let hi = arr.length - 1;
  let steps = 0;

  while (lo < hi) {
    steps++;
    const mid = lo + Math.floor((hi - lo) / 2);
    // Compare adjacent elements to evaluate the local slope
    if (arr[mid] < arr[mid + 1]) {
      lo = mid + 1; // Ascending slope: peak lies strictly to the right
    } else {
      hi = mid;     // Descending slope or at peak: peak lies at or to the left
    }
  }

  return {
    index: lo,
    value: arr[lo],
    steps
  };
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Optimizing Continuous Curves and Discrete Arrays',
        bn: 'এক্সিকিউশন ট্রেস: অবিচ্ছিন্ন বক্ররেখা ও বিচ্ছিন্ন অ্যারে অপ্টিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We execute both algorithms on concrete mathematical scenarios. For the continuous parabolic function f(x) = -((x - 3.5) ** 2) + 10 over interval [0, 10], the true maximum occurs at x = 3.5 with value 10. Continuous ternary search achieves this accuracy in 46 iterations, reporting peakX = 3.5 and peakY = 10. For the discrete array [1, 4, 9, 16, 25, 30, 22, 15, 8, 3] of 10 items, discrete peak search evaluates 4 slope steps, successfully identifying peak value 30 at index 5.',
        bn: 'আমরা সুনির্দিষ্ট গাণিতিক ক্ষেত্রে উভয় অ্যালগরিদম পরিচালনা করি। ব্যবধান [0, 10] তে অবিচ্ছিন্ন প্যারাবোলিক ফাংশন f(x) = -((x - 3.5) ** 2) + 10 এর ক্ষেত্রে প্রকৃত সর্বোচ্চ মান x = 3.5 এ 10 হয়। অবিচ্ছিন্ন টার্নারি সার্চ 46 পুনরাবৃত্তিতে এই নিখুঁত মানে পৌঁছে peakX = 3.5 এবং peakY = 10 ফলাফল প্রদান করে। আর 10 উপাদানের বিচ্ছিন্ন অ্যারে [1, 4, 9, 16, 25, 30, 22, 15, 8, 3] এর জন্য বিচ্ছিন্ন পিক সার্চ মাত্র 4 টি ঢাল পদক্ষেপে সফলভাবে ইনডেক্স 5 এ পিক মান 30 খুঁজে বের করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-unimodal.ts',
      caption: {
        en: 'Verified execution traces for continuous parabolic optimization and discrete array peak search.',
        bn: 'অবিচ্ছিন্ন প্যারাবোলিক অপ্টিমাইজেশন এবং বিচ্ছিন্ন অ্যারে পিক অনুসন্ধানের বাস্তব ফলাফল।'
      },
      code: `// Test 1: Continuous Function f(x) = -((x - 3.5)^2) + 10 over [0, 10]
// Target: peak at x = 3.5, y = 10
// Iteration 1:  lo=0.000000, hi=10.000000, m1=3.333333, m2=6.666667
//               f(m1)=9.972222, f(m2)=0.027778 -> f(m1) > f(m2) -> hi = 6.666667
// Iteration 2:  lo=0.000000, hi=6.666667,  m1=2.222222, m2=4.444444
// ...
// Iteration 46: interval width shrinks below 1e-7 (0.0000001)
// Result: peakX = 3.5, peakY = 10 in 46 iterations!

// Test 2: Discrete Array [1, 4, 9, 16, 25, 30, 22, 15, 8, 3]
// Step 1: lo=0, hi=9, mid=4. arr[4]=25 < arr[5]=30 (ascending) -> lo = 5
// Step 2: lo=5, hi=9, mid=7. arr[7]=15 > arr[8]=8  (descending) -> hi = 7
// Step 3: lo=5, hi=7, mid=6. arr[6]=22 > arr[7]=15 (descending) -> hi = 6
// Step 4: lo=5, hi=6, mid=5. arr[5]=30 > arr[6]=22 (descending) -> hi = 5
// Collapsed at index 5 with peak value 30 in 4 steps!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Ternary Thirds and Peak Convergence',
        bn: 'টার্নারি তৃতীয়াংশ ও পিক অভিসারের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'engineering-applications',
      text: {
        en: 'Engineering Applications of Unimodal Optimization',
        bn: 'ইউনিমোডাল অপ্টিমাইজেশনের ইঞ্জিনিয়ারিং প্রয়োগ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Server Concurrency Tuning: Measuring web server request throughput against worker thread count forms a unimodal curve that peaks before thread context-switching overhead dominates.',
          bn: 'সার্ভার কনকারেন্সি টিউনিং: ওয়ার্কার থ্রেড সংখ্যার বিপরীতে ওয়েব সার্ভারের রিকোয়েস্ট থ্রুপুট পরিমাপ করলে একটি ইউনিমোডাল বক্ররেখা পাওয়া যায় যা কনটেক্সট-সুইচিং বাধার পূর্বে সর্বোচ্চ হয়।'
        },
        {
          en: 'Computer Graphics and Ray Tracing: Finding the point of closest approach between a 3D ray and a convex geometric surface utilizes ternary search along the parameterized ray vector.',
          bn: 'কম্পিউটার গ্রাফিক্স ও রে ট্রেসিং: ৩ডি রশ্মি এবং একটি উত্তল পৃষ্ঠের মধ্যকার সবচেয়ে নিকটতম বিন্দু খুঁজে পেতে রশ্মির ভেক্টরের ওপর টার্নারি সার্চ ব্যবহার করা হয়।'
        },
        {
          en: 'Battery Charging Rates: Lithium-ion charging controllers optimize current delivery along unimodal heat dissipation curves to maximize charge speed without exceeding thermal limits.',
          bn: 'ব্যাটারি চার্জিং রেট: লিথিয়াম-আয়ন চার্জিং কন্ট্রোলার তাপমাত্রার সীমা অতিক্রম না করে চার্জিং গতি বাড়াতে ইউনিমোডাল তাপ বিচ্ছুরণ বক্ররেখা বরাবর বিদ্যুৎ প্রবাহ নিয়ন্ত্রণ করে।'
        },
        {
          en: 'Financial Portfolio Sizing: Maximizing the Sharpe ratio of risk-adjusted returns across asset allocations follows unimodal optimization curves across capital allocations.',
          bn: 'ফাইন্যান্সিয়াল পোর্টফোলিও সাইজিং: সম্পদ বরাদ্দে ঝুঁকি-সমন্বিত আয়ের শার্প রেশিও সর্বোচ্চ করার প্রক্রিয়াটি ইউনিমোডাল অপ্টিমাইজেশন বক্ররেখা অনুসরণ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Precision Search on Curved Spaces',
        bn: 'সারসংক্ষেপ: বাঁকানো পরিধিতে নির্ভুল অনুসন্ধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Ternary search extends divide-and-conquer principles to unimodal curves where standard binary search fails due to the absence of strict monotonicity. By comparing two interior probes, one-third of the interval is eliminated on each iteration, achieving high numerical precision in O(log(1 / eps)) rounds. On discrete arrays, slope bisection sidesteps integer rounding deadlocks, guaranteeing logarithmic peak discovery.',
        bn: 'টার্নারি সার্চ ডিভাইড-অ্যান্ড-কনকার নীতিকে এমন ইউনিমোডাল বক্ররেখায় প্রসারিত করে যেখানে একমুখিতা না থাকার কারণে সাধারণ বাইনারি সার্চ ব্যর্থ হয়। দুটি অভ্যন্তরীণ প্রোব তুলনা করে প্রতি পদক্ষেপে ব্যবধানের এক তৃতীয়াংশ বাদ দেওয়া হয়, যা O(log(1 / eps)) রাউন্ডে উচ্চ সাংখ্যিক নির্ভুলতা নিশ্চিত করে। বিচ্ছিন্ন অ্যারের ক্ষেত্রে ঢাল ভিত্তিক বাইসেকশন পূর্ণসংখ্যা রাউন্ডিংয়ের অচলাবস্থা এড়িয়ে লগারিদমিক গতিতে শীর্ষবিন্দু আবিষ্কারের নিশ্চয়তা দেয়।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-text-mill',
    tech: 'searching',
    title: {
      en: 'Substring & Pattern Searching: Naive, KMP & Rabin-Karp',
      bn: 'সাবস্ট্রিং ও প্যাটার্ন সার্চ: নাইভ, KMP ও রবিন-কার্প'
    }
  },
  exercises: [
    {
      id: 'ua-ex1',
      kind: 'mcq',
      topic: 'ternary search elimination',
      question: {
        en: 'When finding the maximum of a unimodal function f(x), if f(m1) < f(m2) where m1 < m2, which portion of the search interval can be safely discarded?',
        bn: 'একটি ইউনিমোডাল ফাংশন f(x) এর সর্বোচ্চ মান খোঁজার সময় m1 < m2 অবস্থায় যদি f(m1) < f(m2) হয়, তবে অনুসন্ধান ব্যবধানের কোন অংশটি নির্দ্বিধায় বাদ দেওয়া যায়?'
      },
      options: [
        {
          en: 'The interval [lo, m1] can be discarded because the peak must strictly lie to the right of m1',
          bn: 'ব্যবধান [lo, m1] বাদ দেওয়া যায় কারণ শীর্ষবিন্দুটি অবশ্যই m1 এর ডানে অবস্থান করবে'
        },
        {
          en: 'The interval [m2, hi] can be discarded because f(m2) is too large',
          bn: 'ব্যবধান [m2, hi] বাদ দেওয়া যায় কারণ f(m2) এর মান অতিরিক্ত বড়'
        },
        {
          en: 'The central interval [m1, m2] can be discarded',
          bn: 'মধ্যবর্তী ব্যবধান [m1, m2] বাদ দেওয়া যায়'
        },
        {
          en: 'No segment can be eliminated without taking a third derivative',
          bn: 'তৃতীয় ডেরিভেটিভ না নিয়ে কোনো অংশই বাদ দেওয়া সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Since f(m1) < f(m2), the function is still rising at m1, meaning the peak has not yet been passed.',
        bn: 'যেহেতু f(m1) < f(m2), তাই m1 এ মান এখনও বাড়ছে, যার অর্থ পিক এখনও অতিক্রম করা হয়নি।'
      },
      explanation: {
        en: 'Because f is unimodal and f(m1) is lower than f(m2), the maximum cannot occur anywhere from lo up to m1. Thus, lo updates to m1, discarding the first third of the interval.',
        bn: 'যেহেতু f একটি ইউনিমোডাল ফাংশন এবং f(m1) এর মান f(m2) এর চেয়ে কম, তাই lo থেকে m1 পর্যন্ত অংশে কোনোভাবেই সর্বোচ্চ মান থাকতে পারে না। ফলে lo আপডেট হয়ে m1 হয় এবং প্রথম তৃতীয়াংশ বাদ পড়ে।'
      }
    },
    {
      id: 'ua-ex2',
      kind: 'predict',
      topic: 'discrete peak trace',
      question: {
        en: 'In the discrete unimodal array [1, 4, 9, 16, 25, 30, 22, 15, 8, 3] with 10 elements, what is the peak value and its index?',
        bn: '১০টি উপাদানের বিচ্ছিন্ন ইউনিমোডাল অ্যারে [1, 4, 9, 16, 25, 30, 22, 15, 8, 3] তে পিক মান এবং তার ইনডেক্স কত?'
      },
      options: [
        {
          en: 'Index 5 with peak value 30',
          bn: 'ইনডেক্স ৫ যেখানে পিক মান ৩০'
        },
        {
          en: 'Index 4 with peak value 25',
          bn: 'ইনডেক্স ৪ যেখানে পিক মান ২৫'
        },
        {
          en: 'Index 6 with peak value 22',
          bn: 'ইনডেক্স ৬ যেখানে পিক মান ২২'
        },
        {
          en: 'Index 9 with value 3',
          bn: 'ইনডেক্স ৯ যেখানে মান ৩'
        }
      ],
      answer: 0,
      hint: {
        en: 'Find the element that is greater than both its left neighbor (25) and its right neighbor (22).',
        bn: 'এমন উপাদানটি চিহ্নিত করুন যা তার বামের প্রতিবেশী (২৫) এবং ডানের প্রতিবেশী (২২) উভয়ের চেয়ে বড়।'
      },
      explanation: {
        en: 'Value 30 at index 5 is strictly greater than 25 (at index 4) and strictly greater than 22 (at index 6), making index 5 the unique peak.',
        bn: 'ইনডেক্স ৫ এ থাকা ৩০ মানটি ইনডেক্স ৪ এর ২৫ এর চেয়ে বড় এবং ইনডেক্স ৬ এর ২২ এর চেয়েও বড়, যা ইনডেক্স ৫ কে একমাত্র পিক উপাদান করে তোলে।'
      }
    },
    {
      id: 'ua-ex3',
      kind: 'mcq',
      topic: 'integer ternary failure',
      question: {
        en: 'Why is slope bisection comparing arr[mid] with arr[mid + 1] preferred over integer trisection m1 = lo + (hi - lo) / 3 on discrete arrays?',
        bn: 'বিচ্ছিন্ন অ্যারেতে m1 = lo + (hi - lo) / ৩ ট্রাইসেকশনের চেয়ে কেন arr[mid] এর সাথে arr[mid + 1] ঢাল তুলনা বেশি পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'Integer rounding on small windows can produce m1 === m2, causing trisection to fail to shrink the search interval and freeze in an infinite loop',
          bn: 'ছোট উইন্ডোতে পূর্ণসংখ্যার রাউন্ডিংয়ের ফলে m1 === m2 হতে পারে, যার ফলে ট্রাইসেকশন ব্যবধান কমাতে ব্যর্থ হয়ে ইনফিনিট লুপে আটকে যায়'
        },
        {
          en: 'Trisection requires floating-point hardware that is unavailable in microcontrollers',
          bn: 'ট্রাইসেকশনের জন্য ফ্লোটিং-পয়েন্ট হার্ডওয়্যার প্রয়োজন যা মাইক্রোকন্ট্রোলারে থাকে না'
        },
        {
          en: 'Slope bisection executes in O(1) time regardless of array size',
          bn: 'অ্যারের আকার যাই হোক না কেন ঢাল ভিত্তিক বাইসেকশন O(1) সময়ে কাজ করে'
        },
        {
          en: 'Trisection only works on arrays that have an even number of elements',
          bn: 'ট্রাইসেকশন শুধুমাত্র জোড় সংখ্যক উপাদানের অ্যারেতে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider what happens when hi - lo is 2 and integer division truncates.',
        bn: 'যখন hi - lo এর মান ২ হয় এবং পূর্ণসংখ্যার ভাগ ভগ্নাংশ কেটে ফেলে তখন কী ঘটবে তা চিন্তা করুন।'
      },
      explanation: {
        en: 'When hi - lo is 2, integer division gives (hi - lo) / 3 = 0, causing m1 and m2 to compute identically to lo and hi, or to equal each other. This prevents progress. Comparing arr[mid] with arr[mid + 1] guarantees the candidate window contracts on every step.',
        bn: 'যখন hi - lo এর মান ২ হয়, তখন পূর্ণসংখ্যা ভাগের ফলে (hi - lo) / ৩ = ০ হয়, যার কারণে m1 ও m2 এর মান আটকে যায়। এটি অগ্রগতি বন্ধ করে দেয়। কিন্তু arr[mid] এর সাথে arr[mid + 1] তুলনা করলে প্রতি পদক্ষেপে উইন্ডো ছোট হওয়ার নিশ্চয়তা থাকে।'
      }
    }
  ],
  quiz: {
    id: 'unimodal-quiz',
    title: {
      en: 'Ternary Search & Unimodal Optimization Quiz',
      bn: 'টার্নারি সার্চ ও ইউনিমোডাল অপ্টিমাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'uq1',
        kind: 'mcq',
        topic: 'ternary search reduction factor',
        question: {
          en: 'By what fraction does continuous ternary search reduce the search interval on each iteration?',
          bn: 'প্রতিটি পুনরাবৃত্তিতে অবিচ্ছিন্ন টার্নারি সার্চ অনুসন্ধান ব্যবধানকে কত ভগ্নাংশে কমিয়ে আনে?'
        },
        options: [
          {
            en: 'It discards 1 third of the interval, leaving 2 thirds remaining',
            bn: 'এটি ব্যবধানের ১ তৃতীয়াংশ বাদ দেয়, ফলে ২ তৃতীয়াংশ অবশিষ্ট থাকে'
          },
          {
            en: 'It discards half of the interval, leaving 1 half remaining',
            bn: 'এটি ব্যবধানের অর্ধেক বাদ দেয়, ফলে ১ অর্ধেক অবশিষ্ট থাকে'
          },
          {
            en: 'It discards three-quarters of the interval',
            bn: 'এটি ব্যবধানের তিন-চতুর্থাংশ বাদ দেয়'
          },
          {
            en: 'It discards a constant 10 units',
            bn: 'এটি প্রতিবারে নির্দিষ্ট ১০ একক বাদ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trisection divides the range into 3 equal pieces and removes 1 piece.',
          bn: 'ট্রাইসেকশন পরিধিকে ৩টি সমান অংশে ভাগ করে এবং ১টি অংশ বাদ দেয়।'
        },
        explanation: {
          en: 'Because either [lo, m1] or [m2, hi] is discarded, exactly 1/3 of the interval is eliminated, retaining 2/3 of the search space for the next iteration.',
          bn: 'যেহেতু হয় [lo, m1] অথবা [m2, hi] বাদ দেওয়া হয়, তাই ব্যবধানের ঠিক ১/৩ অংশ অপসারিত হয় এবং পরবর্তী পুনরাবৃত্তির জন্য ২/৩ অংশ অবশিষ্ট থাকে।'
        }
      },
      {
        id: 'uq2',
        kind: 'mcq',
        topic: 'unimodal requirement',
        question: {
          en: 'What happens if ternary search is applied to a multimodal function having two separate peaks?',
          bn: 'দুটি পৃথক শীর্ষবিন্দু বিশিষ্ট মাল্টিমোডাল ফাংশনে টার্নারি সার্চ প্রয়োগ করলে কী ঘটবে?'
        },
        options: [
          {
            en: 'The algorithm may discard the third containing the global maximum, converging arbitrarily onto a local peak or suboptimal point',
            bn: 'অ্যালগরিদমটি বৈশ্বিক সর্বোচ্চ মান ধারণকারী তৃতীয়াংশটি ভুলবশত বাদ দিয়ে যেকোনো একটি স্থানীয় পিক বা নিম্নমানের বিন্দুতে পৌঁছাতে পারে'
          },
          {
            en: 'The algorithm automatically identifies both peaks simultaneously',
            bn: 'অ্যালগরিদমটি স্বয়ংক্রিয়ভাবে একই সাথে উভয় শীর্ষবিন্দু শনাক্ত করে ফেলে'
          },
          {
            en: 'The CPU initiates an out of bounds exception',
            bn: 'সিপিইউ একটি বাউন্ডারির বাইরের এক্সেপশন শুরু করে'
          },
          {
            en: 'The execution time increases from logarithmic to quadratic O(n^2)',
            bn: 'এক্সিকিউশন সময় লগারিদমিক থেকে কোয়াড্রাটিক O(n^2) এ বৃদ্ধি পায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Ternary search assumes the slope direction on the outside dictates the location of the single global maximum.',
          bn: 'টার্নারি সার্চ ধরে নেয় যে বাইরের অংশের ঢালই একমাত্র বৈশ্বিক শীর্ষবিন্দুর অবস্থান নির্ধারণ করে।'
        },
        explanation: {
          en: 'Ternary search relies strictly on the unimodal property. If multiple peaks exist, comparing f(m1) and f(m2) can discard the interval containing the true global peak.',
          bn: 'টার্নারি সার্চ কঠোরভাবে ইউনিমোডাল বৈশিষ্ট্যের ওপর নির্ভর করে। একাধিক শীর্ষবিন্দু থাকলে f(m1) ও f(m2) এর তুলনা ভুলবশত প্রকৃত বৈশ্বিক শীর্ষবিন্দু ধারণকারী অংশটিকেই বাদ দিয়ে দিতে পারে।'
        }
      },
      {
        id: 'uq3',
        kind: 'mcq',
        topic: 'minimization inversion',
        question: {
          en: 'How can a ternary search written for finding a maximum be adapted to find the minimum of a convex U-shaped curve?',
          bn: 'সর্বোচ্চ মান খোঁজার জন্য লেখা টার্নারি সার্চকে একটি উত্তল U-আকৃতির বক্ররেখার সর্বনিম্ন মান খোঁজার জন্য কীভাবে রূপান্তর করা যায়?'
        },
        options: [
          {
            en: 'Reverse the comparison: if f(m1) > f(m2), discard [lo, m1]; or simply minimize -f(x)',
            bn: 'তুলনাটি উল্টে দিন: f(m1) > f(m2) হলে [lo, m1] বাদ দিন; অথবা সহজভাবে -f(x) এর সর্বোচ্চ মান খুঁজুন'
          },
          {
            en: 'Double the initial epsilon value',
            bn: 'প্রাথমিক এপসিলনের মান দ্বিগুণ করে দিন'
          },
          {
            en: 'Sort the function inputs in reverse descending order',
            bn: 'ফাংশনের ইনপুটগুলোকে উল্টো বড় থেকে ছোট ক্রমে সাজান'
          },
          {
            en: 'Ternary search cannot find minimum values',
            bn: 'টার্নারি সার্চ দিয়ে সর্বনিম্ন মান খুঁজে বের করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Maximizing -f(x) is mathematically identical to minimizing f(x).',
          bn: '-f(x) কে সর্বোচ্চ করা গাণিতিকভাবে f(x) কে সর্বনিম্ন করার সমান।'
        },
        explanation: {
          en: 'To find a minimum, when f(m1) > f(m2), the minimum cannot lie in [lo, m1], so we update lo = m1. Alternatively, finding the maximum of -f(x) yields the identical result.',
          bn: 'সর্বনিম্ন মান খুঁজতে f(m1) > f(m2) হলে সর্বনিম্ন মান কোনোভাবেই [lo, m1] তে থাকতে পারে না, তাই lo = m1 হয়। বিকল্পভাবে -f(x) এর সর্বোচ্চ মান বের করলেও অভিন্ন ফলাফল পাওয়া যায়।'
        }
      },
      {
        id: 'uq4',
        kind: 'mcq',
        topic: 'continuous stopping criteria',
        question: {
          en: 'Why do continuous ternary search implementations use hi - lo < eps or a fixed iteration count rather than while (lo < hi)?',
          bn: 'অবিচ্ছিন্ন টার্নারি সার্চ বাস্তবায়নে কেন while (lo < hi) এর বদলে hi - lo < eps অথবা নির্দিষ্ট পুনরাবৃত্তি সংখ্যা ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Floating-point real numbers have infinite density, so lo and hi would converge asymptotically forever without ever becoming identical integers',
            bn: 'ফ্লোটিং-পয়েন্ট বাস্তব সংখ্যার অসীম ঘনত্ব থাকে, ফলে lo এবং hi কখনোই পূর্ণসংখ্যার মতো সমান না হয়ে অনন্তকাল ধরে কাছাকাছি আসতে থাকবে'
          },
          {
            en: 'JavaScript floating-point numbers do not support the less-than comparison operator',
            bn: 'জাভাস্ক্রিপ্ট ফ্লোটিং-পয়েন্ট সংখ্যা লেস-দ্যান তুলনা অপারেটর সমর্থন করে না'
          },
          {
            en: 'Fixed iterations prevent memory leaks in the browser V8 engine',
            bn: 'নির্দিষ্ট পুনরাবৃত্তি ব্রাউজারের V8 ইঞ্জিনে মেমরি লিক হওয়া রোধ করে'
          },
          {
            en: 'Because eps must be an integer power of 2',
            bn: 'কারণ eps এর মান অবশ্যই ২ এর পূর্ণসংখ্যা পাওয়ার হতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider dividing a distance by 3 repeatedly: it approaches 0 but never equals 0.',
          bn: 'কোনো দূরত্বকে বারবার ৩ দিয়ে ভাগ করার কথা ভাবুন: এটি ০ এর কাছাকাছি যায় কিন্তু কখনো ০ হয় না।'
        },
        explanation: {
          en: 'Real intervals shrink by 2/3 on each step. Because they never reach an empty interval, testing for a small threshold width eps or using a fixed iteration limit (e.g. 100 iterations) ensures timely termination.',
          bn: 'বাস্তব সংখ্যার ব্যবধান প্রতি ধাপে ২/৩ হারে সংকুচিত হয়। যেহেতু এটি কখনোই শূন্য ব্যবধানে পৌঁছায় না, তাই একটি ক্ষুদ্র সীমা eps পরীক্ষা করা বা নির্দিষ্ট পুনরাবৃত্তি সীমা (যেমন ১০০ বার) ব্যবহার করা সময়মতো সমাপ্তি নিশ্চিত করে।'
        }
      },
      {
        id: 'uq5',
        kind: 'mcq',
        topic: 'ternary search vs gradient descent',
        question: {
          en: 'What advantage does ternary search offer over calculus-based gradient descent for optimizing unimodal functions?',
          bn: 'ইউনিমোডাল ফাংশন অপ্টিমাইজ করার ক্ষেত্রে ক্যালকুলাস-ভিত্তিক গ্রেডিয়েন্ট ডিসেন্টের চেয়ে টার্নারি সার্চ কী সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'Ternary search is derivative-free, requiring only function evaluations without needing mathematical derivatives or learning rate hyperparameter tuning',
            bn: 'টার্নারি সার্চ ডেরিভেটিভ-মুক্ত, অর্থাৎ গাণিতিক ডেরিভেটিভ নির্ণয় বা লার্নিং রেট টিউনিং ছাড়াই শুধুমাত্র ফাংশনের মান মূল্যায়নের মাধ্যমে এটি কাজ করে'
          },
          {
            en: 'Ternary search runs in O(1) constant time on all mathematical curves',
            bn: 'টার্নারি সার্চ সমস্ত গাণিতিক বক্ররেখায় O(1) কনস্ট্যান্ট সময়ে সম্পন্ন হয়'
          },
          {
            en: 'Gradient descent cannot be programmed in TypeScript',
            bn: 'টাইপস্ক্রিপ্টে গ্রেডিয়েন্ট ডিসেন্ট কোড লেখা সম্ভব নয়'
          },
          {
            en: 'Ternary search works on multidimensional surfaces with 1000 variables simultaneously',
            bn: 'টার্নারি সার্চ একসাথে ১০০০ চলক বিশিষ্ট বহুমাত্রিক তলে কাজ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Gradient descent requires computing f\'(x) and choosing a step size alpha. Ternary search only needs f(x).',
          bn: 'গ্রেডিয়েন্ট ডিসেন্টে f\'(x) নির্ণয় এবং স্টেপ সাইজ আলফা নির্ধারণ করতে হয়। কিন্তু টার্নারি সার্চে কেবল f(x) এর মান জানলেই চলে।'
        },
        explanation: {
          en: 'Ternary search is a black-box optimizer. It does not require calculating analytical derivatives and never suffers from learning rate divergence or oscillations.',
          bn: 'টার্নারি সার্চ একটি ব্ল্যাক-বক্স অপ্টিমাইজার। এর জন্য কোনো গাণিতিক ডেরিভেটিভের দরকার হয় না এবং এটি কখনোই লার্নিং রেটের কারণে পথভ্রষ্ট বা দোদুল্যমান হয় না।'
        }
      }
    ]
  }
};
