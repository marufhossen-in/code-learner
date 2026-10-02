import type { Lesson } from '../../../lib/types';

export const theBoundAtelierLesson: Lesson = {
  slug: 'the-bound-atelier',
  tech: 'searching',
  title: {
    en: 'Boundary Search: Lower Bound, Upper Bound & Rotated Arrays',
    bn: 'বাউন্ডারি সার্চ: লোয়ার বাউন্ড, আপার বাউন্ড ও রোটেটেড অ্যারে'
  },
  summary: {
    en: 'Binary boundary algorithms pinpoint insertion points, count duplicate key frequencies, and search rotated arrays. Lower bound locates the lowest index satisfying arr[index] >= target in O(log n) time. Upper bound finds the earliest offset where elements strictly exceed target. The occurrence count of any element equals upper bound minus lower bound in exactly 2 * log2(n) comparisons without linear scanning. In a rotated sorted array, at least one half remains sorted across any split, allowing binary search to determine which side is sorted and eliminate the other. Peak element discovery finds local maxima on mountain arrays by evaluating the slope arr[mid] < arr[mid + 1].',
    bn: 'বাইনারি বাউন্ডারি সার্চ অ্যালগরিদম সন্নিবেশ বিন্দু নির্ধারণ, ডুপ্লিকেট কী এর সংখ্যা গণনা এবং রোটেটেড অ্যারেতে অনুসন্ধান পরিচালনা করে। লোয়ার বাউন্ড O(log n) সময়ে arr[index] >= target শর্ত পূরণকারী প্রথম ইনডেক্স খুঁজে বের করে। আপার বাউন্ড arr[index] > target শর্তের প্রথম ইনডেক্স খুঁজে নেয়। কোনো উপাদানের মোট উপস্থিতি সংখ্যা কোনো লিনিয়ার স্ক্যান ছাড়াই ঠিক ২ * log2(n) তুলনায় আপার বাউন্ড বিয়োগ লোয়ার বাউন্ডের মাধ্যমে নির্ধারিত হয়। রোটেটেড সর্টেড অ্যারেতে যেকোনো বিভাজনে অন্তত এক পাশ সাজানো থাকে, যা বাইনারি সার্চকে কোন পাশ সাজানো তা নির্ধারণ করে অন্য পাশ বাদ দিতে সাহায্য করে। পিক উপাদান অনুসন্ধান arr[mid] < arr[mid + 1] ঢাল মূল্যায়নের মাধ্যমে মাউন্টেন অ্যারের স্থানীয় শীর্ষবিন্দু খুঁজে বের করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Boundary Queries and Positional Semantics',
        bn: 'বাউন্ডারি কোয়েরি এবং অবস্থানের নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In many real-world systems, queries do not simply ask whether a single value exists. Applications frequently need to determine where a new record should be inserted, how many times a duplicate key occurs, or which element represents the lower edge of a numeric range. Standard equality search returns an arbitrary matching index when duplicates exist. Boundary algorithms replace arbitrary matches with deterministic positional invariants. Lower bound returns the earliest index holding a value greater than or equal to the target. In contrast, upper bound pinpoints the start of strictly greater values. These boundaries operate over half-open intervals [lo, hi) where hi begins at array length n.',
        bn: 'বাস্তব জীবনের অনেক সিস্টেমে কেবল কোনো মান উপস্থিত আছে কি না তা জানতে চাওয়া হয় না। অ্যাপ্লিকেশনগুলোকে প্রায়শই নতুন রেকর্ড কোথায় সন্নিবেশ করতে হবে, কোনো ডুপ্লিকেট কী কতবার এসেছে অথবা কোন উপাদানটি সাংখ্যিক সীমার সর্বনিম্ন প্রান্তে অবস্থিত তা নির্ধারণ করতে হয়। ডুপ্লিকেট উপাত্ত থাকলে সাধারণ বাইনারি সার্চ যেকোনো একটি ইনডেক্স ফেরত দেয়। বাউন্ডারি অ্যালগরিদমগুলো সেই অনিশ্চয়তা দূর করে সুনির্দিষ্ট অবস্থানের গাণিতিক নিয়ম প্রতিষ্ঠা করে। লোয়ার বাউন্ড টার্গেটের সমান বা তার চেয়ে বড় মান ধারণকারী সর্বনিম্ন ইনডেক্স ফেরত দেয়। অপরদিকে, আপার বাউন্ড কঠোরভাবে বড় মানের সূচনাস্থল চিহ্নিত করে। এই বাউন্ডারিগুলো [lo, hi) হাফ-ওপেন ইন্টারভ্যালে কাজ করে যেখানে hi এর প্রাথমিক মান থাকে অ্যারের দৈর্ঘ্য n।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lower Bound',
          def: {
            en: 'The earliest index in a sorted collection where the stored value is greater than or equal to the target key.',
            bn: 'সাজানো সংগ্রহের সর্বনিম্ন ইনডেক্স যেখানে সংরক্ষিত মানটি টার্গেট কী এর সমান বা তার চেয়ে বড়।'
          }
        },
        {
          term: 'Upper Bound',
          def: {
            en: 'The earliest index in a sorted collection where the stored value is strictly greater than the target key.',
            bn: 'সাজানো সংগ্রহের সর্বনিম্ন ইনডেক্স যেখানে সংরক্ষিত মানটি টার্গেট কী এর চেয়ে কঠোরভাবে বড়।'
          }
        },
        {
          term: 'Rotated Sorted Array',
          def: {
            en: 'A sorted array that has been cyclically shifted around an unknown pivot index, creating two separately sorted contiguous halves.',
            bn: 'একটি সাজানো অ্যারে যা একটি অজানা পিভট ইনডেক্সকে কেন্দ্র করে আবর্তিত হয়েছে, যার ফলে দুটি পৃথক সাজানো সংলগ্ন অংশ তৈরি হয়।'
          }
        },
        {
          term: 'Peak Element',
          def: {
            en: 'An element in an array that is strictly greater than its immediate left and right neighbors.',
            bn: 'অ্যারের এমন একটি উপাদান যা তার ঠিক বাম এবং ডান পাশের প্রতিবেশীদের চেয়ে কঠোরভাবে বড়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'bounds-mechanics',
      text: {
        en: 'Boundary Invariants and Frequency Calculation',
        bn: 'বাউন্ডারি ইনভেরিয়ান্ট ও পৌনঃপুনিকতা গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The half-open window discipline simplifies boundary calculations. In lower bound, when arr[mid] is less than the target, no element at or before mid can be valid, so lo advances to mid + 1. When arr[mid] is greater than or equal to target, mid itself remains a viable candidate, so hi collapses directly to mid. The loop terminates when lo equals hi, naming the exact insertion index. Upper bound follows identical logic but tests arr[mid] <= target. If arr[mid] is less than or equal to the target, lo advances to mid + 1; otherwise hi collapses to mid. To count the occurrences of value x in a duplicate-heavy sorted array, computing upper bound minus lower bound yields the exact frequency in 2 * log2(n) comparisons. This eliminates linear scans that would otherwise degrade to O(n) when an array contains millions of identical elements.',
        bn: 'হাফ-ওপেন উইন্ডোর নিয়ম বাউন্ডারি গণনাকে অত্যন্ত নির্ভুল করে তোলে। লোয়ার বাউন্ডে যখন মধ্যবর্তী মান টার্গেটের চেয়ে ছোট হয়, তখন mid বা তার আগের কোনো স্থান গ্রহণযোগ্য হতে পারে না, তাই lo এর মান mid + 1 এ বৃদ্ধি পায়। যখন মধ্যবর্তী মান টার্গেটের সমান বা বড় হয়, তখন mid নিজেই একটি সম্ভাব্য উত্তর হতে পারে, ফলে hi সরাসরি mid এ নেমে আসে। lo এবং hi সমান হলে লুপ শেষ হয় এবং কাঙ্ক্ষিত ইনডেক্স নির্ধারিত হয়। আপার বাউন্ডও অভিন্ন নিয়মে চলে তবে সেখানে arr[mid] <= target যাচাই করা হয়। মাঝের উপাদান টার্গেটের সমান বা ছোট হলে lo বৃদ্ধি পেয়ে mid + 1 হয়; অন্যথায় hi নেমে mid হয়। ডুপ্লিকেট যুক্ত সাজানো অ্যারেতে কোনো মান x এর মোট সংখ্যা বের করতে আপার বাউন্ড থেকে লোয়ার বাউন্ড বিয়োগ করলে ঠিক ২ * log2(n) তুলনায় সঠিক সংখ্যা পাওয়া যায়। এটি এমন লিনিয়ার স্ক্যান দূর করে যা লক্ষ লক্ষ একই উপাদানের ক্ষেত্রে কর্মক্ষমতা O(n) এ নামিয়ে দিত।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'boundary-algorithms.ts',
      caption: {
        en: 'Robust implementation of lower bound, upper bound, and duplicate frequency counting.',
        bn: 'লোয়ার বাউন্ড, আপার বাউন্ড এবং ডুপ্লিকেট সংখ্যা গণনার সুদৃঢ় বাস্তবায়ন।'
      },
      code: `export function lowerBound(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length; // Half-open interval [lo, hi)

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < target) {
      lo = mid + 1; // mid cannot be >= target
    } else {
      hi = mid;     // mid is a candidate, search left
    }
  }
  return lo; // First index where arr[index] >= target
}

export function upperBound(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] <= target) {
      lo = mid + 1; // mid cannot be strictly > target
    } else {
      hi = mid;     // mid is a candidate > target
    }
  }
  return lo; // First index where arr[index] > target
}

export function countOccurrences(arr: number[], target: number): number {
  const first = lowerBound(arr, target);
  const afterLast = upperBound(arr, target);
  return afterLast - first;
}`
    },
    {
      type: 'heading',
      id: 'rotated-arrays',
      text: {
        en: 'Searching Rotated Arrays and Mountain Peaks',
        bn: 'রোটেটেড অ্যারে ও মাউন্টেন পিক অনুসন্ধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A rotated sorted array like [4, 5, 6, 7, 0, 1, 2] is produced by shifting a sorted sequence. Although the global sequence is no longer strictly sorted, inspecting any midpoint reveals a crucial property: at least one half of the array is normally sorted. Comparing arr[lo] with arr[mid] determines which half is intact. If arr[lo] <= arr[mid], the left portion is sorted. If the target lies within [arr[lo], arr[mid]), the algorithm restricts search to the left by setting hi = mid - 1; otherwise it searches the right half. If the left portion is unsorted, the right half must be sorted, allowing symmetric reasoning. This maintains O(log n) complexity despite the rotation. Peak element finding on mountain arrays demonstrates that binary search does not even require global sorting. A mountain array rises to a summit and then falls. By evaluating the local slope between arr[mid] and arr[mid + 1], if arr[mid] < arr[mid + 1], the ascent is underway and the summit must lie to the right (lo = mid + 1). Otherwise, the descent has begun or mid is the summit (hi = mid). The interval halves on every step, finding the peak in O(log n) time.',
        bn: 'একটি সাজানো অনুক্রমকে আবর্তিত করলে [4, 5, 6, 7, 0, 1, 2] এর মতো রোটেটেড সর্টেড অ্যারে তৈরি হয়। যদিও সমগ্র অ্যারেটি আর ক্রমানুসারে সাজানো থাকে না, তবুও যেকোনো মধ্যবিন্দু পরীক্ষা করলে একটি গুরুত্বপূর্ণ সত্য প্রকাশ পায়: অ্যারের অন্তত এক পাশ স্বাভাবিকভাবে সাজানো থাকে। শুরুর মান arr[lo] এর সাথে মধ্যবর্তী উপাদান তুলনা করলে জানা যায় কোন পাশটি অক্ষত আছে। যদি arr[lo] <= arr[mid] হয়, তবে বাম পাশটি সাজানো। টার্গেট যদি [arr[lo], arr[mid]) এর মধ্যে থাকে, তবে hi = mid - 1 করে অনুসন্ধান বাম পাশে সীমাবদ্ধ করা হয়; অন্যথায় ডান পাশে অনুসন্ধান করা হয়। বাম পাশ সাজানো না থাকলে ডান পাশ অবশ্যই সাজানো থাকবে, যা প্রতিসম যুক্তির সুযোগ দেয়। এটি ঘূর্ণন সত্ত্বেও O(log n) জটিলতা বজায় রাখে। মাউন্টেন অ্যারেতে পিক উপাদান সন্ধান প্রমাণ করে যে বাইনারি সার্চের জন্য সর্বত্র সাজানো থাকারও প্রয়োজন নেই। একটি মাউন্টেন অ্যারে শীর্ষে ওঠে এবং পরে নামে। মধ্যবর্তী সংলগ্ন উপাদানদ্বয়ের স্থানীয় ঢাল পরীক্ষা করে যদি arr[mid] < arr[mid + 1] হয়, তবে ঊর্ধ্বগতি চলছে এবং শীর্ষবিন্দু অবশ্যই ডানে থাকবে (lo = mid + 1)। অন্যথায় অবরোহণ শুরু হয়েছে বা mid নিজেই শীর্ষবিন্দু (hi = mid)। প্রতিটি ধাপে ব্যবধান অর্ধেকে নেমে আসে এবং O(log n) সময়ে পিক উপাদানটি খুঁজে পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'rotated-and-peak.ts',
      caption: {
        en: 'Binary search routines for rotated arrays and mountain peak finding.',
        bn: 'রোটেটেড অ্যারে এবং মাউন্টেন পিক অনুসন্ধানের বাইনারি সার্চ কোড।'
      },
      code: `export function searchRotated(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;

    // Check if the left half is normally sorted
    if (arr[lo] <= arr[mid]) {
      if (target >= arr[lo] && target < arr[mid]) {
        hi = mid - 1; // Target is within sorted left
      } else {
        lo = mid + 1; // Target must be in right half
      }
    } else {
      // Right half is normally sorted
      if (target > arr[mid] && target <= arr[hi]) {
        lo = mid + 1; // Target is within sorted right
      } else {
        hi = mid - 1; // Target must be in left half
      }
    }
  }
  return -1;
}

export function findPeakElement(arr: number[]): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < arr[mid + 1]) {
      lo = mid + 1; // Ascending slope: peak is to the right
    } else {
      hi = mid;     // Descending slope or at peak: peak is at or left
    }
  }
  return lo; // Index of the peak element
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Boundaries, Counts, and Peaks',
        bn: 'এক্সিকিউশন ট্রেস: বাউন্ডারি, কাউন্ট ও শীর্ষবিন্দু'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We execute our boundary algorithms across three distinct structural test cases. First, in duplicate array [2, 4, 4, 4, 4, 7, 9], lowerBound for 4 returns index 1 and upperBound returns index 5. The frequency calculation 5 - 1 establishes that 4 appears exactly 4 times. Second, in rotated array [4, 5, 6, 7, 0, 1, 2], searching for target 0 probes mid index 3 with value 7. It observes that left slice [4..7] is sorted without containing 0, shifts rightward to [0, 1, 2], and locates 0 at index 4. Third, in mountain array [1, 3, 8, 12, 4, 2], slope comparisons eliminate non-peak halves and converge onto peak index 3 with value 12.',
        bn: 'আমরা তিনটি ভিন্ন কাঠামোগত টেস্ট কেসে আমাদের বাউন্ডারি অ্যালগরিদমগুলো পরিচালনা করি। প্রথমত, ডুপ্লিকেট অ্যারে [2, 4, 4, 4, 4, 7, 9] তে ৪ এর জন্য lowerBound ইনডেক্স ১ এবং upperBound ইনডেক্স ৫ ফেরত দেয়। ৫ - ১ বিয়োগ করে প্রমাণিত হয় যে ৪ সংখ্যাটি ঠিক ৪ বার উপস্থিত রয়েছে। দ্বিতীয়ত, রোটেটেড অ্যারে [4, 5, 6, 7, 0, 1, 2] তে টার্গেট ০ অনুসন্ধানে mid ইনডেক্স ৩ (মান ৭) পরীক্ষা করা হয়। এটি শনাক্ত করে যে বাম অংশ [4..7] সাজানো হলেও তাতে ০ নেই, ফলে অনুসন্ধান ডান অংশ [0, 1, 2] এ স্থানান্তরিত হয়ে ইনডেক্স ৪ এ ০ খুঁজে পায়। তৃতীয়ত, মাউন্টেন অ্যারে [1, 3, 8, 12, 4, 2] তে ঢাল তুলনা শীর্ষহীন অংশ বাদ দিয়ে ঠিক ইনডেক্স ৩ এ মান ১২ সহ শীর্ষবিন্দু চিহ্নিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-bounds.ts',
      caption: {
        en: 'Execution verification of boundaries, rotated search, and mountain peaks.',
        bn: 'বাউন্ডারি, রোটেটেড সার্চ এবং মাউন্টেন পিকের বাস্তব ফলাফল যাচাই।'
      },
      code: `// Test 1: Duplicate Key Frequency
const duplicates = [2, 4, 4, 4, 4, 7, 9];
// lowerBound(duplicates, 4) -> index 1 (value 4)
// upperBound(duplicates, 4) -> index 5 (value 7)
// countOccurrences = 5 - 1 = 4 instances of value 4!

// Test 2: Search in Rotated Array
const rotated = [4, 5, 6, 7, 0, 1, 2];
// Step 1: lo=0, hi=6, mid=3 (val 7). Left [4..7] is sorted. 0 is not in [4..7] -> lo = 4
// Step 2: lo=4, hi=6, mid=5 (val 1). Right [1..2] is sorted. 0 < 1 -> hi = 4
// Step 3: lo=4, hi=4, mid=4 (val 0 == target) -> found at index 4!

// Test 3: Mountain Peak Finding
const mountain = [1, 3, 8, 12, 4, 2];
// Step 1: lo=0, hi=5, mid=2. arr[2]=8 < arr[3]=12 (ascending) -> lo = 3
// Step 2: lo=3, hi=5, mid=4. arr[4]=4 > arr[5]=2  (descending) -> hi = 4
// Step 3: lo=3, hi=4, mid=3. arr[3]=12 > arr[4]=4 (descending) -> hi = 3
// Collapsed at index 3 with peak value 12!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Bounds and Slope Bisection',
        bn: 'বাউন্ডারি ও ঢাল বিভাজনের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'applications',
      text: {
        en: 'Industrial System Applications of Boundary Disciplines',
        bn: 'বাউন্ডারি পদ্ধতির শিল্পপর্যায়ের সিস্টেম প্রয়োগ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Database Range Index Scans: B-Trees execute lowerBound to locate the start of a range query and upperBound to find the end boundary before sequentially streaming records.',
          bn: 'ডেটাবেস রেঞ্জ ইনডেক্স স্ক্যান: B-ট্রি রেকর্ড ধারাবাহিকভাবে পড়ার পূর্বে রেঞ্জ কোয়েরির শুরুর অবস্থান খুঁজতে lowerBound এবং শেষের সীমা খুঁজতে upperBound চালায়।'
        },
        {
          en: 'Telemetry Timestamp Slicing: Log aggregation platforms (like Elasticsearch or Prometheus) partition time-series logs using lowerBound to query entries within specific time windows.',
          bn: 'টেলিমেট্রি টাইমস্ট্যাম্প স্লাইসিং: লগ বিশ্লেষণ প্ল্যাটফর্মগুলো (যেমন Elasticsearch বা Prometheus) নির্দিষ্ট সময়ের ব্যবধানে ডেটা খুঁজতে lowerBound ব্যবহার করে টাইম-সিরিজ লগ বিভাজন করে।'
        },
        {
          en: 'Circular Buffer Wrap-Arounds: Real-time audio and networking drivers utilize rotated array binary search to locate buffer heads and tails without unwrapping circular memory buffers.',
          bn: 'সার্কুলার বাফার র্যাপ-অ্যারাউন্ড: রিয়েল-টাইম অডিও ও নেটওয়ার্কিং ড্রাইভার মেমরি বাফার পুনর্গঠন না করেই বাফারের শুরু ও শেষ খুঁজতে রোটেটেড অ্যারে বাইনারি সার্চ ব্যবহার করে।'
        },
        {
          en: 'Rate Limiter Window Eviction: Sliding window rate limiters utilize boundary search to count request timestamps falling inside the active rate-limiting interval.',
          bn: 'রেট লিমিটার উইন্ডো এভিকশন: স্লাইডিং উইন্ডো রেট লিমিটার কার্যকর সময়সীমার মধ্যে কতগুলো রিকোয়েস্ট এসেছে তা গণনা করতে বাউন্ডারি সার্চ ব্যবহার করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Positional Precision in Searching',
        bn: 'সারসংক্ষেপ: অনুসন্ধানে অবস্থানের নির্ভুলতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Boundary algorithms transform binary search from a simple existence test into a versatile positional instrument. Lower bound and upper bound provide exact insertion points and compute duplicate frequencies in O(log n) time. Rotated array search preserves logarithmic complexity by evaluating which half is sorted, while peak finding demonstrates that directional slopes enable binary search even on non-sorted mountain arrays.',
        bn: 'বাউন্ডারি অ্যালগরিদমগুলো বাইনারি সার্চকে কেবল উপস্থিতির সাধারণ পরীক্ষার গণ্ডি পেরিয়ে অবস্থানের একটি বহুমুখী নির্ভুল টুলে রূপান্তর করে। লোয়ার বাউন্ড এবং আপার বাউন্ড সুনির্দিষ্ট সন্নিবেশ বিন্দু দেয় এবং O(log n) সময়ে ডুপ্লিকেট উপাদানের সংখ্যা গণনা করে। রোটেটেড অ্যারে সার্চ কোন পাশ সাজানো তা মূল্যায়নের মাধ্যমে লগারিদমিক গতি বজায় রাখে, এবং পিক ফাইন্ডিং প্রমাণ করে যে দিকের ঢাল ব্যবহার করে সাজানো না থাকা মাউন্টেন অ্যারেতেও দ্রুত বাইনারি সার্চ পরিচালনা করা যায়।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-parametric-vein',
    tech: 'searching',
    title: {
      en: 'Parametric Search: Binary Search on the Answer Space',
      bn: 'প্যারামেট্রিক সার্চ: সমাধান পরিধিতে বাইনারি সার্চ'
    }
  },
  exercises: [
    {
      id: 'ba-ex1',
      kind: 'mcq',
      topic: 'duplicate key counting',
      question: {
        en: 'In a sorted array with 1000000 elements where value 42 appears 50000 times, what is the most efficient way to determine the exact count of 42?',
        bn: '১০০০০০০টি উপাদানের একটি সাজানো অ্যারেতে ৪২ মানটি ৫০০০০ বার উপস্থিত রয়েছে। ৪২ এর সঠিক সংখ্যা নির্ণয় করার সবচেয়ে কার্যকর উপায় কোনটি?'
      },
      options: [
        {
          en: 'Compute upperBound(42) minus lowerBound(42), taking only 2 * log2(n) comparisons and avoiding any linear scan',
          bn: 'upperBound(42) থেকে lowerBound(42) বিয়োগ করা, যা মাত্র ২ * log2(n) তুলনা নেয় এবং কোনো লিনিয়ার স্ক্যান ছাড়াই কাজ সম্পন্ন করে'
        },
        {
          en: 'Use binary search to find one occurrence of 42, then linearly scan left and right to count all 50000 duplicates',
          bn: 'বাইনারি সার্চ দিয়ে ৪২ এর একটি অবস্থান খুঁজে নিয়ে তারপর বামে ও ডানে লিনিয়ার স্ক্যান করে ৫০০০০টি উপাদান একে একে গণনা করা'
        },
        {
          en: 'Iterate through all 1000000 elements sequentially from index 0',
          bn: 'ইনডেক্স ০ থেকে শুরু করে ক্রমানুসারে পুরো ১০০০০০০ উপাদান স্ক্যান করা'
        },
        {
          en: 'Convert the array into a hash table with key-value count pairs',
          bn: 'অ্যারেটিকে কী-কাউন্টের জোড়া সহ একটি হ্যাশ টেবিলে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Linearly scanning 50000 duplicates takes 50000 operations. Two binary searches take about 40 operations.',
        bn: '৫০০০০টি উপাদান লিনিয়ার স্ক্যান করলে ৫০০০০টি অপারেশন লাগে। কিন্তু দুটি বাইনারি সার্চে মাত্র প্রায় ৪০টি অপারেশন লাগে।'
      },
      explanation: {
        en: 'Linearly scanning duplicates degrades to O(k) where k is the frequency. Subtracting lower bound from upper bound executes in 2 * ceil(log2(n)) steps, which is approximately 40 comparisons for 1000000 elements.',
        bn: 'ডুপ্লিকেট উপাদানে লিনিয়ার স্ক্যান চালালে তা O(k) তে নেমে যায় যেখানে k হলো উপস্থিতির সংখ্যা। কিন্তু আপার বাউন্ড থেকে লোয়ার বাউন্ড বিয়োগ করলে মাত্র ২ * ceil(log2(n)) ধাপে কাজ হয়, যা ১০০০০০০ উপাদানের জন্য মাত্র প্রায় ৪০টি তুলনা।'
      }
    },
    {
      id: 'ba-ex2',
      kind: 'predict',
      topic: 'rotated array logic',
      question: {
        en: 'In rotated sorted array [4, 5, 6, 7, 0, 1, 2], we search for target 0. On the first iteration, lo is 0, hi is 6, and mid is 3 (value 7). Which branch executes?',
        bn: 'রোটেটেড সর্টেড অ্যারে [4, 5, 6, 7, 0, 1, 2] তে আমরা টার্গেট ০ খুঁজছি। প্রথম পুনরাবৃত্তিতে lo হলো ০, hi হলো ৬ এবং mid হলো ৩ (মান ৭)। কোন শাখাটি কার্যকর হবে?'
      },
      options: [
        {
          en: 'Left half [4..7] is recognized as sorted, but 0 is outside [4..7], so search moves right by assigning lo = mid + 1 = 4',
          bn: 'বাম অংশ [4..7] সাজানো হিসেবে চিহ্নিত হয়, কিন্তু ০ এর বাইরে থাকায় lo = mid + 1 = 4 সেট করে অনুসন্ধান ডানে সরে যায়'
        },
        {
          en: 'The algorithm terminates because 7 is greater than 0',
          bn: 'অ্যালগরিদমটি সাথে সাথে থেমে যায় কারণ ৭ সংখ্যাটি ০ এর চেয়ে বড়'
        },
        {
          en: 'The search restricts to the left half by setting hi = mid - 1',
          bn: 'hi = mid - 1 সেট করে অনুসন্ধান বাম অংশে সীমাবদ্ধ করা হয়'
        },
        {
          en: 'An exception is thrown due to unsorted array elements',
          bn: 'অ্যারে সাজানো না থাকার কারণে একটি এক্সেপশন ঘটে'
        }
      ],
      answer: 0,
      hint: {
        en: 'arr[lo] (4) <= arr[mid] (7) confirms left is sorted. Does 0 fall between 4 and 7?',
        bn: 'arr[lo] (৪) <= arr[mid] (৭) নিশ্চিত করে যে বাম পাশ সাজানো। ০ কি ৪ থেকে ৭ এর মধ্যে অবস্থিত?'
      },
      explanation: {
        en: 'Because arr[0] <= arr[3] (4 <= 7), the left interval is sorted. Target 0 is not in range [4, 7), so the target must reside in the right partition. Thus, lo updates to mid + 1 = 4.',
        bn: 'যেহেতু arr[0] <= arr[3] (৪ <= ৭), তাই বাম ব্যবধানটি সাজানো। কিন্তু টার্গেট ০ রেঞ্জ [৪, ৭) এর মধ্যে নেই, তাই টার্গেটটি অবশ্যই ডান অংশে থাকবে। ফলে lo আপডেট হয়ে mid + 1 = 4 হয়।'
      }
    },
    {
      id: 'ba-ex3',
      kind: 'mcq',
      topic: 'mountain peak search',
      question: {
        en: 'In a mountain array that increases to a single peak and then decreases, why does comparing arr[mid] with arr[mid + 1] identify the peak in O(log n) time without full sorting?',
        bn: 'একটি মাউন্টেন অ্যারে যা একটি শীর্ষবিন্দু পর্যন্ত বাড়ে এবং তারপর কমে, সেখানে সম্পূর্ণ সাজানো না থাকা সত্ত্বেও কেন arr[mid] এর সাথে arr[mid + 1] তুলনা করে O(log n) সময়ে শীর্ষবিন্দু খুঁজে পাওয়া যায়?'
      },
      options: [
        {
          en: 'The slope arr[mid] < arr[mid + 1] determines whether the search point is on the ascent or descent, allowing half of the array to be discarded on each step',
          bn: 'arr[mid] < arr[mid + 1] ঢাল নির্দেশ করে যে পয়েন্টটি আরোহণ না অবরোহণে রয়েছে, যার ফলে প্রতি ধাপে নির্দ্বিধায় অ্যারের অর্ধেক অংশ বাদ দেওয়া সম্ভব হয়'
        },
        {
          en: 'Mountain arrays automatically sort themselves in cache memory during evaluation',
          bn: 'মূল্যায়নের সময় মাউন্টেন অ্যারে স্বয়ংক্রিয়ভাবে ক্যাশ মেমরিতে সাজানো অবস্থায় রূপান্তরিত হয়'
        },
        {
          en: 'The peak element is always guaranteed to be located at index n / 2',
          bn: 'শীর্ষ উপাদানটি সর্বদা নিশ্চিতভাবে ইনডেক্স n / ২ এ অবস্থিত থাকে'
        },
        {
          en: 'Floating-point division identifies the derivative roots directly in constant time',
          bn: 'ফ্লোটিং-পয়েন্ট ভাগ সরাসরি কনস্ট্যান্ট সময়ে ডেরিভেটিভের মূল শনাক্ত করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If arr[mid] < arr[mid + 1], you are climbing up toward the summit on the right.',
        bn: 'যদি arr[mid] < arr[mid + 1] হয়, তবে আপনি ডান পাশের শীর্ষবিন্দুর দিকে উপরে উঠছেন।'
      },
      explanation: {
        en: 'If arr[mid] < arr[mid + 1], the function is strictly increasing, guaranteeing the maximum lies to the right (lo = mid + 1). If arr[mid] > arr[mid + 1], the maximum lies at or to the left of mid (hi = mid). Each comparison halves the candidate space in O(log n) time.',
        bn: 'যদি arr[mid] < arr[mid + 1] হয়, তবে মান বাড়ছে, যার অর্থ শীর্ষবিন্দু অবশ্যই ডানে রয়েছে (lo = mid + 1)। আর যদি arr[mid] > arr[mid + 1] হয়, তবে শীর্ষবিন্দু mid এ অথবা তার বামে অবস্থিত (hi = mid)। প্রতিটি তুলনা O(log n) সময়ে প্রার্থীর পরিধি অর্ধেকে কমিয়ে আনে।'
      }
    }
  ],
  quiz: {
    id: 'the-bound-atelier-quiz',
    title: {
      en: 'Boundary Search and Rotated Arrays Quiz',
      bn: 'বাউন্ডারি সার্চ ও রোটেটেড অ্যারে কুইজ'
    },
    questions: [
      {
        id: 'baq1',
        kind: 'mcq',
        topic: 'lower bound return value',
        question: {
          en: 'What does lowerBound(arr, target) return when all elements in the array are strictly less than target?',
          bn: 'যখন অ্যারের সমস্ত উপাদান টার্গেটের চেয়ে কঠোরভাবে ছোট হয়, তখন lowerBound(arr, target) কী মান ফেরত দেয়?'
        },
        options: [
          {
            en: 'arr.length (the valid insertion position at the end of the collection)',
            bn: 'arr.length (সংগ্রহের শেষ প্রান্তে নতুন মান যুক্ত করার বৈধ সন্নিবেশ অবস্থান)'
          },
          {
            en: 'Index -1 indicating an out of bounds error',
            bn: 'ইনডেক্স -১ যা বাউন্ডারির বাইরের ত্রুটি নির্দেশ করে'
          },
          {
            en: 'Index 0',
            bn: 'ইনডেক্স ০'
          },
          {
            en: 'null',
            bn: 'null'
          }
        ],
        answer: 0,
        hint: {
          en: 'In half-open interval [lo, hi) with hi initialized to arr.length, lo advances to hi.',
          bn: 'arr.length দিয়ে শুরু হওয়া [lo, hi) হাফ-ওপেন ইন্টারভ্যালে lo বাড়তে বাড়তে hi এ পৌঁছায়।'
        },
        explanation: {
          en: 'Because every element is less than target, the lo pointer is incremented on every step until lo equals hi = arr.length. This indicates the target can be legally appended at the end of the array.',
          bn: 'যেহেতু প্রতিটি উপাদান টার্গেটের চেয়ে ছোট, তাই প্রতি ধাপে lo পয়েন্টার বাড়তে বাড়তে lo = hi = arr.length এ পৌঁছায়। এটি নির্দেশ করে যে টার্গেট মানটিকে বৈধভাবে অ্যারের শেষে যুক্ত করা যেতে পারে।'
        }
      },
      {
        id: 'baq2',
        kind: 'mcq',
        topic: 'upper bound condition',
        question: {
          en: 'What is the exact condition that distinguishes upper bound from lower bound?',
          bn: 'কোন সুনির্দিষ্ট শর্তটি আপার বাউন্ডকে লোয়ার বাউন্ড থেকে পৃথক করে?'
        },
        options: [
          {
            en: 'Lower bound evaluates arr[i] >= target, whereas upper bound checks arr[i] > target',
            bn: 'লোয়ার বাউন্ড arr[i] >= target যাচাই করে, যেখানে আপার বাউন্ড arr[i] > target পরীক্ষা করে'
          },
          {
            en: 'Lower bound works on integers while upper bound works exclusively on floating-point numbers',
            bn: 'লোয়ার বাউন্ড পূর্ণসংখ্যায় কাজ করে আর আপার বাউন্ড শুধুমাত্র ফ্লোটিং-পয়েন্ট সংখ্যায় কাজ করে'
          },
          {
            en: 'Upper bound scans from right to left while lower bound scans from left to right',
            bn: 'আপার বাউন্ড ডান থেকে বামে স্ক্যান করে আর লোয়ার বাউন্ড বাম থেকে ডানে স্ক্যান করে'
          },
          {
            en: 'Lower bound operates in O(log n) time while upper bound operates in O(n) time',
            bn: 'লোয়ার বাউন্ড O(log n) সময়ে কাজ করে আর আপার বাউন্ড O(n) সময়ে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Notice the difference between >= target and strictly > target.',
          bn: '>= target এবং strictly > target এর মধ্যকার পার্থক্য খেয়াল করুন।'
        },
        explanation: {
          en: 'Lower bound identifies where duplicate values commence. Meanwhile, upper bound pinpoints the entry point of larger keys.',
          bn: 'লোয়ার বাউন্ড ডুপ্লিকেট মানের সূচনা নির্দেশ করে। অপরদিকে, আপার বাউন্ড পরবর্তী বৃহত্তর উপাদানগুলোর প্রবেশবিন্দু চিহ্নিত করে।'
        }
      },
      {
        id: 'baq3',
        kind: 'mcq',
        topic: 'rotated array pivot',
        question: {
          en: 'Why does searching a rotated sorted array retain O(log n) complexity despite the disruption of global sorting?',
          bn: 'সমগ্র অ্যারে সাজানো না থাকা সত্ত্বেও কেন রোটেটেড সর্টেড অ্যারে অনুসন্ধানে O(log n) কমপ্লেক্সিটি বজায় থাকে?'
        },
        options: [
          {
            en: 'Any midpoint divides the rotated array such that at least one half is strictly sorted, allowing the algorithm to deterministically discard one half each iteration',
            bn: 'যেকোনো মধ্যবিন্দু রোটেটেড অ্যারেকে এমনভাবে ভাগ করে যেন অন্তত এক পাশ নিশ্চিতভাবে সাজানো থাকে, যা প্রতি ধাপে এক পাশকে বাদ দেওয়ার নিশ্চয়তা দেয়'
          },
          {
            en: 'Rotated arrays are internally repaired by CPU cache branch predictors prior to inspection',
            bn: 'পরীক্ষার পূর্বে সিপিইউ ক্যাশ ব্রাঞ্চ প্রেডিক্টর দ্বারা রোটেটেড অ্যারে অভ্যন্তরীণভাবে ঠিক হয়ে যায়'
          },
          {
            en: 'The pivot element can be identified in constant O(1) time without reading any array indices',
            bn: 'কোনো ইনডেক্স না পড়েই কনস্ট্যান্ট O(1) সময়ে পিভট উপাদান চিহ্নিত করা যায়'
          },
          {
            en: 'The array is reversed in memory before executing linear search',
            bn: 'লিনিয়ার সার্চ চালানোর পূর্বে মেমরিতে অ্যারেটিকে উল্টে নেওয়া হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If arr[lo] <= arr[mid], the left half is sorted. If not, the right half is sorted.',
          bn: 'যদি arr[lo] <= arr[mid] হয়, তবে বাম পাশ সাজানো। অন্যথায় ডান পাশ সাজানো।'
        },
        explanation: {
          en: 'A single rotation leaves one half of any subarray sorted. By testing if the target falls within the bounds of the sorted half, the algorithm eliminates half of the remaining elements on every step.',
          bn: 'একটি ঘূর্ণন যেকোনো সাব-অ্যারের অন্তত একটি পাশকে সাজানো অবস্থায় রাখে। টার্গেট মানটি সেই সাজানো অংশের সীমার মধ্যে আছে কি না তা যাচাই করে অ্যালগরিদম প্রতি ধাপে অর্ধেক উপাদান বাদ দিতে পারে।'
        }
      },
      {
        id: 'baq4',
        kind: 'mcq',
        topic: 'peak element uniqueness',
        question: {
          en: 'In an array with multiple local peaks such as [1, 5, 2, 8, 3], what does the binary peak search algorithm find?',
          bn: 'একাধিক স্থানীয় শীর্ষবিন্দু বিশিষ্ট অ্যারে যেমন [1, 5, 2, 8, 3] তে বাইনারি পিক সার্চ অ্যালগরিদম কী খুঁজে পায়?'
        },
        options: [
          {
            en: 'Any one valid local peak element, guaranteed to terminate in O(log n) steps',
            bn: 'যেকোনো একটি বৈধ স্থানীয় শীর্ষ উপাদান, যা নিশ্চিতভাবে O(log n) ধাপে শেষ হয়'
          },
          {
            en: 'The globally maximal peak across all elements',
            bn: 'সব উপাদানগুলোর মধ্যে একমাত্র বৈশ্বিক সর্বোচ্চ শীর্ষ উপাদান'
          },
          {
            en: 'The algorithm enters an infinite loop between peaks',
            bn: 'অ্যালগরিদমটি দুটি শীর্ষবিন্দুর মাঝে একটি ইনফিনিট লুপে আটকে যায়'
          },
          {
            en: 'An index out of bounds error is thrown at the valley',
            bn: 'উপত্যকায় পৌঁছালে ইনডেক্স আউট অফ বাউন্ডস এরর দেখা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Binary peak search always follows the ascending slope. A local peak is guaranteed along any rising path.',
          bn: 'বাইনারি পিক সার্চ সর্বদা ঊর্ধ্বমুখী ঢাল অনুসরণ করে। যেকোনো ঊর্ধ্বমুখী পথে অন্তত একটি স্থানীয় পিক থাকা নিশ্চিত।'
        },
        explanation: {
          en: 'Following the upward slope (moving to mid + 1 when arr[mid] < arr[mid + 1]) guarantees reaching at least one local peak. The algorithm finds a local maximum, not necessarily the global maximum, in O(log n) time.',
          bn: 'উর্ধ্বমুখী ঢাল অনুসরণ করলে (arr[mid] < arr[mid + 1] হলে mid + 1 এ যাওয়া) অন্তত একটি স্থানীয় শীর্ষবিন্দুতে পৌঁছানো নিশ্চিত হয়। অ্যালগরিদমটি O(log n) সময়ে একটি স্থানীয় সর্বোচ্চ মান খুঁজে পায়, যা আবশ্যকভাবে বৈশ্বিক সর্বোচ্চ নাও হতে পারে।'
        }
      },
      {
        id: 'baq5',
        kind: 'mcq',
        topic: 'half-open interval termination',
        question: {
          en: 'Why is the half-open interval [lo, hi) with termination condition lo === hi preferred in standard library boundary routines?',
          bn: 'স্ট্যান্ডার্ড লাইব্রেরির বাউন্ডারি রুটিনগুলোতে কেন lo === hi সমাপ্তি শর্ত সহ [lo, hi) হাফ-ওপেন ইন্টারভ্যাল পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'When the loop terminates at lo === hi, the final index directly represents both the boundary position and the valid insertion index without requiring post-processing adjustments',
            bn: 'lo === hi তে লুপ শেষ হলে চূড়ান্ত ইনডেক্সটি কোনো পরবর্তী সমন্বয় ছাড়াই সরাসরি বাউন্ডারি অবস্থান ও বৈধ সন্নিবেশ ইনডেক্স নির্দেশ করে'
          },
          {
            en: 'It halves the number of memory accesses compared to closed intervals',
            bn: 'এটি ক্লোজড ইন্টারভ্যালের তুলনায় মেমরি অ্যাক্সেসের সংখ্যা অর্ধেকে নামিয়ে আনে'
          },
          {
            en: 'Closed intervals are incompatible with 64-bit integer processors',
            bn: 'ক্লোজড ইন্টারভ্যাল ৬৪-বিট ইন্টিজার প্রসেসরের সাথে সামঞ্জস্যপূর্ণ নয়'
          },
          {
            en: 'It eliminates the need for calculating midpoints',
            bn: 'এটি মধ্যবিন্দু হিসাব করার প্রয়োজনীয়তা পুরোপুরি দূর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the return value when an element is not found: lo directly gives the insertion slot.',
          bn: 'কোনো উপাদান পাওয়া না গেলে রিটার্ন মানের কথা ভাবুন: lo সরাসরি সন্নিবেশের উপযুক্ত স্লট প্রদান করে।'
        },
        explanation: {
          en: 'Half-open interval bisection cleanly separates viable candidates from excluded territory. Upon collapse at lo === hi, lo directly indicates the exact boundary or insertion index.',
          bn: 'হাফ-ওপেন ইন্টারভ্যাল বাইসেকশন সম্ভাব্য উত্তরগুলোকে বাতিল অংশ থেকে অত্যন্ত পরিচ্ছন্নভাবে পৃথক করে। lo === hi তে সংকুচিত হলে lo সরাসরি সঠিক বাউন্ডারি বা সন্নিবেশ ইনডেক্স নির্দেশ করে।'
        }
      }
    ]
  }
};
