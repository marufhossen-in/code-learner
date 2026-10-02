import type { Lesson } from '../../../lib/types';

export const beyondHalvingLesson: Lesson = {
  slug: 'beyond-halving',
  tech: 'searching',
  title: {
    en: 'Alternative Search Algorithms: Sentinel, Jump & Interpolation',
    bn: 'বিকল্প সার্চ অ্যালগরিদম: সেন্টিনেল, জাম্প ও ইন্টারপোলেশন'
  },
  summary: {
    en: 'Beyond standard bisection, specialized algorithms optimize for cache locality, memory layout, and statistical data distributions. Sentinel scanning eliminates boundary checks inside tight loops by appending the target to the end. Jump search strides in blocks of sqrt(n) elements to exploit hardware prefetchers and cache locality. Exponential galloping bounds unbounded or streaming datasets by doubling intervals before executing bisection in O(log i) time. Interpolation estimation computes proportional probe indices in O(log log n) time on uniformly distributed data, but degrades to O(n) when clustered.',
    bn: 'স্ট্যান্ডার্ড বাইসেকশনের বাইরেও বিশেষায়িত অ্যালগরিদম ক্যাশ লোকালিটি, মেমরি বিন্যাস এবং উপাত্তের পরিসংখ্যানিক বণ্টনের ওপর ভিত্তি করে কাজ করে। সেন্টিনেল স্ক্যানিং অ্যারের শেষে টার্গেট যুক্ত করে লুপের ভেতরের বাউন্ডারি চেক বাদ দেয়। জাম্প সার্চ হার্ডওয়্যার প্রিফেচার ও ক্যাশ লোকালিটির সুবিধা নিতে sqrt(n) ব্লকে এগিয়ে যায়। এক্সপোনেনশিয়াল গ্যালোপিং ব্যবধান দ্বিগুণ করে অজানা দৈর্ঘ্যের ডেটাসেটকে সীমাবদ্ধ করে O(log i) সময়ে বাইসেকশন পরিচালনা করে। ইন্টারপোলেশন অনুমান সুষমভাবে বণ্টিত ডেটায় আনুপাতিক ইনডেক্স হিসাব করে O(log log n) সময়ে কাজ করে, কিন্তু ডেটা একপাশে স্তূপীকৃত হলে তা O(n) এ নেমে যায়।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What Specialized Search Algorithms Solve',
        bn: 'বিশেষায়িত সার্চ অ্যালগরিদম কী সমাধান করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While standard binary search achieves optimal O(log n) theoretical comparisons, physical computing systems introduce additional performance factors. Central processing units fetch memory in cache lines of 64 bytes rather than isolated numbers. Standard binary search scatters memory probes widely across the array, frequently causing CPU cache misses on large datasets. Specialized search algorithms address these physical realities by tuning search patterns to memory layouts, stream boundaries, or numerical data distributions.',
        bn: 'তাত্ত্বিকভাবে স্ট্যান্ডার্ড বাইনারি সার্চ O(log n) তুলনার দিক থেকে সর্বোত্তম হলেও বাস্তব কম্পিউটিং ব্যবস্থায় কিছু বাড়তি কর্মক্ষমতার বিষয় থাকে। সেন্ট্রাল প্রসেসিং ইউনিট পৃথক সংখ্যার বদলে ৬৪ বাইটের ক্যাশ লাইনে মেমরি থেকে ডেটা আনে। সাধারণ বাইনারি সার্চের মেমরি অ্যাক্সেস সম্পূর্ণ অ্যারে জুড়ে ছড়িয়ে থাকায় বড় ডেটাসেটে বারবার সিপিইউ ক্যাশ মিস ঘটে। বিশেষায়িত সার্চ অ্যালগরিদমগুলো মেমরি বিন্যাস, স্ট্রিমিং ডেটার সীমা বা সাংখ্যিক বণ্টনের সাথে অনুসন্ধানের প্যাটার্ন সমন্বয় করে এই বাস্তব সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Sentinel Search',
          def: {
            en: 'A linear search optimization where the target value is placed at the end of the array, eliminating the loop boundary comparison on each iteration.',
            bn: 'লিনিয়ার সার্চের একটি অপ্টিমাইজেশন যেখানে অ্যারের শেষে টার্গেট মান বসিয়ে প্রতি পুনরাবৃত্তির লুপ বাউন্ডারি চেক বাদ দেওয়া হয়।'
          }
        },
        {
          term: 'Jump Search',
          def: {
            en: 'An algorithm for sorted arrays that advances in fixed blocks of sqrt(n) steps, followed by a linear scan within the matching block in O(sqrt(n)) time.',
            bn: 'সাজানো অ্যারের এমন একটি অ্যালগরিদম যা sqrt(n) আকারের ব্লকে এগিয়ে যায় এবং কাঙ্ক্ষিত ব্লকের ভেতরে O(sqrt(n)) সময়ে লিনিয়ার স্ক্যান করে।'
          }
        },
        {
          term: 'Exponential Search',
          def: {
            en: 'An algorithm that identifies an interval containing the target by repeatedly doubling indices (1, 2, 4, 8), then runs binary search within that range in O(log i) time.',
            bn: 'একটি অ্যালগরিদম যা ইনডেক্স দ্বিগুণ (১, ২, ৪, ৮) করে টার্গেট ধারণকারী ব্যবধান খুঁজে নেয় এবং তারপর সেই পরিসরে O(log i) সময়ে বাইনারি সার্চ চালায়।'
          }
        },
        {
          term: 'Interpolation Search',
          def: {
            en: 'A searching algorithm that estimates the target position using numerical proportions in sorted, uniformly distributed arrays in O(log log n) average time.',
            bn: 'একটি সার্চ অ্যালগরিদম যা সুষমভাবে বণ্টিত সাজানো অ্যারেতে সাংখ্যিক অনুপাত ব্যবহার করে গড়ে O(log log n) সময়ে টার্গেটের অবস্থান অনুমান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'sentinel-and-jump',
      text: {
        en: 'Sentinel Elimination and Jump Block Mechanics',
        bn: 'সেন্টিনেল পদ্ধতি এবং জাম্প ব্লক মেকানিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In conventional linear search, each iteration evaluates two conditional branches: whether the loop pointer has reached array length n, and whether the current element matches the target. In high-throughput loops, branch predictors can encounter mispredictions. Sentinel linear search temporarily replaces the final array element with the target. The loop tests only the equality condition, eliminating 50 percent of loop branches. Once the match is encountered, the algorithm restores the original final element and checks if the index is valid. Jump search applies a block-stride approach to sorted data. Instead of scattering probes like binary search, jump search inspects block boundaries at step intervals of size floor(sqrt(n)). Because block traversal moves strictly forward in memory, hardware prefetchers load subsequent cache lines into CPU L1 cache with minimal latency. Once a boundary value exceeds the target, a backward linear scan within that single block pinpoints the exact element.',
        bn: 'প্রচলিত লিনিয়ার সার্চে প্রতিটি পুনরাবৃত্তিতে দুটি শর্ত পরীক্ষা করতে হয়: লুপ পয়েন্টার অ্যারের দৈর্ঘ্য n এ পৌঁছেছে কি না, এবং বর্তমান উপাদানটি টার্গেটের সাথে মিলেছে কি না। উচ্চ গতির লুপে ব্রাঞ্চ প্রেডিক্টর ভুল সিদ্ধান্ত নিতে পারে। সেন্টিনেল লিনিয়ার সার্চ অ্যারের শেষ উপাদানটিকে সাময়িকভাবে টার্গেট মান দিয়ে প্রতিস্থাপন করে। ফলে লুপের ভেতরে কেবল সমতা যাচাই করতে হয় এবং ৫০ শতাংশ ব্রাঞ্চিং শর্ত কমে যায়। মানটি পাওয়া গেলে অ্যালগরিদম মূল উপাদানটি ফিরিয়ে দিয়ে ইনডেক্সটি সঠিক কি না যাচাই করে। অন্যদিকে জাম্প সার্চ সাজানো ডেটায় ব্লক-ভিত্তিক পদ্ধতি প্রয়োগ করে। বাইনারি সার্চের মতো মেমরির বিভিন্ন স্থানে এলোমেলোভাবে না গিয়ে জাম্প সার্চ floor(sqrt(n)) আকারের ব্লকে এগিয়ে যায়। মেমরিতে ক্রমাগত সামনের দিকে এগোনোর কারণে হার্ডওয়্যার প্রিফেচার অত্যন্ত কম দেরিতে পরবর্তী ক্যাশ লাইনগুলো সিপিইউ L1 ক্যাশে লোড করে। যখনই কোনো ব্লক সীমানার মান টার্গেটের চেয়ে বড় হয়, তখন সেই নির্দিষ্ট ব্লকের ভেতরে পেছনের দিকে একটি লিনিয়ার স্ক্যান চালিয়ে সঠিক উপাদানটি চিহ্নিত করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'sentinel-and-jump.ts',
      caption: {
        en: 'Implementation of sentinel linear search and block-based jump search.',
        bn: 'সেন্টিনেল লিনিয়ার সার্চ এবং ব্লক-ভিত্তিক জাম্প সার্চের সঠিক বাস্তবায়ন।'
      },
      code: `export function linearSentinel(arr: number[], target: number): number {
  const n = arr.length;
  if (n === 0) return -1;

  const lastElement = arr[n - 1];
  if (lastElement === target) return n - 1;

  // Place sentinel at the final slot to eliminate boundary checks
  arr[n - 1] = target;
  let i = 0;
  while (arr[i] !== target) {
    i++;
  }

  // Restore the original value
  arr[n - 1] = lastElement;

  // Verify whether the match occurred before the sentinel slot
  return i < n - 1 ? i : -1;
}

export function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (n === 0) return -1;

  const step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let cur = step;

  // Vault block borders sequentially
  while (prev < n && arr[Math.min(cur, n) - 1] < target) {
    prev = cur;
    cur += step;
  }

  // Linear scan inside the selected block
  const limit = Math.min(cur, n);
  for (let i = prev; i < limit; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
    },
    {
      type: 'heading',
      id: 'exponential-and-interpolation',
      text: {
        en: 'Exponential Galloping and Proportional Interpolation',
        bn: 'এক্সপোনেনশিয়াল গ্যালোপিং এবং আনুপাতিক ইন্টারপোলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Exponential galloping is ideal when an array is unbounded, streamed over a network socket, or when the target is anticipated to reside near the start. Starting at index 1, the algorithm repeatedly doubles the search bound (1, 2, 4, 8, 16) until arr[bound] is greater than or equal to the target or capacity is reached. Once bracketed between bound / 2 and bound, binary bisection is executed across this restricted window. The total time complexity is O(log i), where i is the actual index of the target. Interpolation estimation mirrors how humans locate names in a printed telephone directory. If seeking an entry starting with Z, one opens the book near the end rather than in the exact middle. Assuming numbers are uniformly distributed between arr[lo] and arr[hi], the algorithm calculates the expected probe index pos using the formula pos = lo + Math.floor(((target - arr[lo]) / (arr[hi] - arr[lo])) * (hi - lo)). On uniformly distributed data, this procedure converges in O(log log n) time. However, if numbers are exponentially clustered, the proportion estimation degrades to O(n) linear steps.',
        bn: 'অ্যারের দৈর্ঘ্য অজানা থাকলে, নেটওয়ার্ক সকেট দিয়ে ডেটা প্রবাহিত হলে অথবা টার্গেট মানটি ডেটাসেটের শুরুর কাছাকাছি থাকবে বলে জানা থাকলে এক্সপোনেনশিয়াল গ্যালোপিং সবচেয়ে কার্যকর। ইনডেক্স ১ থেকে শুরু করে অ্যালগরিদমটি ইনডেক্স সীমা দ্বিগুণ (১, ২, ৪, ৮, ১৬) করতে থাকে যতক্ষণ না arr[bound] এর মান টার্গেটের চেয়ে বড় বা সমান হয় অথবা ক্ষমতার শেষ প্রান্তে পৌঁছায়। একবার bound / ২ এবং bound এর মধ্যে পরিসর নির্দিষ্ট হয়ে গেলে, সেই সীমিত উইন্ডোতে সাধারণ বাইনারি বাইসেকশন পরিচালিত হয়। এর মোট টাইম কমপ্লেক্সিটি O(log i), যেখানে i হলো টার্গেটের প্রকৃত ইনডেক্স। অন্যদিকে ইন্টারপোলেশন পদ্ধতি মানুষের টেলিফোন ডিরেক্টরি খোলার নিয়মের অনুকরণে কাজ করে। Z দিয়ে শুরু নাম খুঁজতে মানুষ ডিরেক্টরির মাঝামাঝি না খুলে একদম শেষের দিকে খোলে। সংখ্যাগুলো arr[lo] এবং arr[hi] এর মধ্যে সুষমভাবে বণ্টিত থাকলে অ্যালগরিদমটি pos = lo + Math.floor(((target - arr[lo]) / (arr[hi] - arr[lo])) * (hi - lo)) সূত্রের মাধ্যমে প্রত্যাশিত ইনডেক্স pos হিসাব করে। সুষম বণ্টনের ক্ষেত্রে এই পদ্ধতি গড়ে O(log log n) সময়ে সমাধানে পৌঁছায়। তবে ডেটা যদি সূচকীয়ভাবে একপাশে স্তূপীকৃত থাকে, তবে এই আনুপাতিক হিসাব ব্যর্থ হয়ে O(n) লিনিয়ার ধাপে নেমে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'exponential-and-interpolation.ts',
      caption: {
        en: 'Implementation of exponential search for unbounded streams and interpolation search for uniform data.',
        bn: 'অজানা দৈর্ঘ্যের জন্য এক্সপোনেনশিয়াল সার্চ এবং সুষম ডেটার জন্য ইন্টারপোলেশন সার্চের বাস্তবায়ন।'
      },
      code: `export function exponentialSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (n === 0) return -1;
  if (arr[0] === target) return 0;

  // Double interval bounds: 1, 2, 4, 8...
  let bound = 1;
  while (bound < n && arr[bound] < target) {
    bound *= 2;
  }

  // Binary search within [bound / 2, min(bound, n - 1)]
  let lo = Math.floor(bound / 2);
  let hi = Math.min(bound, n - 1);

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

export function interpolationSearch(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi && target >= arr[lo] && target <= arr[hi]) {
    if (lo === hi) {
      return arr[lo] === target ? lo : -1;
    }

    // Estimate index based on value proportion
    const fraction = (target - arr[lo]) / (arr[hi] - arr[lo]);
    const pos = lo + Math.floor(fraction * (hi - lo));

    if (arr[pos] === target) return pos;
    if (arr[pos] < target) {
      lo = pos + 1;
    } else {
      hi = pos - 1;
    }
  }
  return -1;
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Comparative Execution: Tracing Probes on a 16-Element Array',
        bn: 'তুলনামূলক এক্সিকিউশন: ১৬টি উপাদানের অ্যারেতে প্রোব ট্র্যাকিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We evaluate all four techniques on a sorted array of 16 elements: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160] seeking target 70. Sentinel linear scanning visits 7 elements and locates 70 at slot 6. Jump lookup with step 4 checks borders at slot 3 (item 40) and slot 7 (item 80), then sweeps block [4..7] to find 70 at slot 6 in 5 comparisons. Exponential galloping checks intervals 1, 2, 4, and 8, then conducts bisection in window [4..8], reaching slot 6 in 4 comparisons. Interpolation estimation calculates fraction (70 - 10) / (160 - 10) * 15 = 6, landing on target slot 6 on its initial probe in exactly 1 comparison.',
        bn: 'আমরা ১৬টি উপাদান বিশিষ্ট সাজানো অ্যারে [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160] তে টার্গেট মান 70 অনুসন্ধানে চারটি অ্যালগরিদম পরিচালনা করি। সেন্টিনেল লিনিয়ার স্ক্যানিং 7 টি উপাদান পরিদর্শন করে স্লট 6 এ 70 খুঁজে পায়। জাম্প লুকআপ ব্লক সাইজ 4 নিয়ে স্লট 3 (আইটেম 40) এবং স্লট 7 (আইটেম 80) এর সীমান্ত পরীক্ষা করার পর ব্লক [4..7] এর ভেতরে স্ক্যান করে মোট 5 টি তুলনায় স্লট 6 খুঁজে নেয়। এক্সপোনেনশিয়াল গ্যালোপিং ব্যবধান 1, 2, 4 এবং 8 চেক করে উইন্ডো [4..8] এ বাইসেকশন চালিয়ে মোট 4 টি তুলনায় স্লট 6 খুঁজে পায়। আর ইন্টারপোলেশন হিসাব (70 - 10) / (160 - 10) * 15 = 6 অনুপাত নির্ণয় করে মাত্র 1 টি তুলনায় প্রথমবারেই সঠিক স্লট 6 খুঁজে বের করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-results.ts',
      caption: {
        en: 'Actual comparison counts searching for 70 across 16 elements.',
        bn: '১৬টি উপাদানে মান ৭০ খুঁজতে প্রতিটি অ্যালগরিদমের বাস্তব তুলনার সংখ্যা।'
      },
      code: `// Array: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
// Target: 70 at index 6

// 1. Sentinel Linear Search:
// Inspected elements: 10, 20, 30, 40, 50, 60, 70
// Total comparisons: 7 (with zero inner array-bound tests)

// 2. Jump Search (step = sqrt(16) = 4):
// Block 1 bound (index 3): value 40 < 70
// Block 2 bound (index 7): value 80 >= 70 -> target is in [4..7]
// Linear scan inside block: index 4 (50), index 5 (60), index 6 (70) -> match!
// Total comparisons: 5

// 3. Exponential Search:
// Step 1: index 1 (value 20 < 70)
// Step 2: index 2 (value 30 < 70)
// Step 3: index 4 (value 50 < 70)
// Step 4: index 8 (value 90 >= 70) -> bracket [4..8]
// Binary search in [4..8] finds index 6 in 4 comparisons

// 4. Interpolation Search:
// pos = 0 + Math.floor(((70 - 10) / (160 - 10)) * 15) = Math.floor((60 / 150) * 15) = 6
// Value at index 6 is 70 -> match!
// Total comparisons: 1`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Search Strides and Interpolation',
        bn: 'সার্চের গতি ও ইন্টারপোলেশনের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'hashing-tradeoff',
      text: {
        en: 'Architectural Trade-Off: Hash Structures vs Sorted Search',
        bn: 'আর্কিটেকচারাল তুলনা: হ্যাশ কাঠামো বনাম সর্টেড সার্চ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Software architects must decide between hash-based indexing and sorted array algorithms based on application query patterns. Hash tables deliver constant O(1) expected time for point lookups. However, hash structures completely discard item ordering. A hash table cannot perform range queries (such as finding all timestamps between 1000 and 2000), cannot locate the predecessor or successor of a key, and incurs memory overhead from load factors and bucket pointers. In contrast, sorted arrays with jump, exponential, or binary search support logarithmic range queries, require zero pointer overhead, and maximize CPU cache line utilization.',
        bn: 'সফটওয়্যার আর্কিটেক্টদের অ্যাপ্লিকেশনের কোয়েরি ধরনের ওপর ভিত্তি করে হ্যাশ-ভিত্তিক ইনডেক্সিং এবং সর্টেড অ্যারে অ্যালগরিদমের মধ্যে সঠিক সিদ্ধান্ত নিতে হয়। হ্যাশ টেবিল একক মান অনুসন্ধানের জন্য গড়ে O(1) সময় দেয়। তবে হ্যাশ কাঠামো উপাত্তের ধারাবাহিক ক্রম সম্পূর্ণ নষ্ট করে ফেলে। হ্যাশ টেবিলে রেঞ্জ কোয়েরি (যেমন ১০০০ থেকে ২০০০ এর মধ্যকার সব টাইমস্ট্যাম্প খোঁজা) চালানো যায় না, কোনো কী এর পূর্ববর্তী বা পরবর্তী উপাদান তাৎক্ষণিক বের করা যায় না এবং লোড ফ্যাক্টর ও বাকেটের কারণে অতিরিক্ত মেমরি লাগে। অন্যদিকে জাম্প, এক্সপোনেনশিয়াল বা বাইনারি সার্চ সহ সাজানো অ্যারে লগারিদমিক রেঞ্জ কোয়েরি সমর্থন করে, কোনো অতিরিক্ত পয়েন্টার মেমরি নেয় না এবং সিপিইউ ক্যাশ লাইনের সর্বোচ্চ সদ্ব্যবহার করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
        { en: 'Memory Access Pattern', bn: 'মেমরি অ্যাক্সেস ধরন' },
        { en: 'Best Use Case', bn: 'সর্বোত্তম ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Linear Sentinel', bn: 'লিনিয়ার সেন্টিনেল' },
          { en: 'O(n) comparisons', bn: 'O(n) তুলনা' },
          { en: 'Sequential streaming', bn: 'ধারাবাহিক স্ট্রিমিং' },
          { en: 'Unordered small arrays (< 50 items)', bn: 'অগোছালো ছোট অ্যারে (< ৫০ উপাদান)' }
        ],
        [
          { en: 'Jump Search', bn: 'জাম্প সার্চ' },
          { en: 'O(sqrt(n))', bn: 'O(sqrt(n))' },
          { en: 'Block strides + forward scan', bn: 'ব্লক অগ্রগতি + সম্মুখবর্তী স্ক্যান' },
          { en: 'Medium arrays where cache prefetch dominates', bn: 'মাঝারি অ্যারে যেখানে ক্যাশ প্রিফেচ প্রাধান্য পায়' }
        ],
        [
          { en: 'Exponential Search', bn: 'এক্সপোনেনশিয়াল সার্চ' },
          { en: 'O(log i)', bn: 'O(log i)' },
          { en: 'Doubling bounds then bisection', bn: 'দ্বিগুণ ব্যবধান তারপর বাইসেকশন' },
          { en: 'Unbounded streaming data and early targets', bn: 'অজানা দৈর্ঘ্যের স্ট্রিম ও শুরুর দিকের উপাদান' }
        ],
        [
          { en: 'Interpolation Search', bn: 'ইন্টারপোলেশন সার্চ' },
          { en: 'O(log log n) avg, O(n) worst', bn: 'গড়ে O(log log n), খারাপতম O(n)' },
          { en: 'Direct proportional probing', bn: 'সরাসরি আনুপাতিক প্রোবিং' },
          { en: 'Uniform numerical distributions (sensor data)', bn: 'সুষম সাংখ্যিক বণ্টন (সেন্সর ডেটা)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Selecting the Right Search Strategy',
        bn: 'সারসংক্ষেপ: সঠিক সার্চ কৌশল নির্বাচন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Selecting the optimal retrieval strategy requires matching algorithm mechanics with memory physics and data distributions. Sentinel scanning optimizes tight CPU loops on unsorted data. Jump stepping balances comparison count with CPU cache prefetching. Exponential galloping accommodates unbounded streaming records, and interpolation probing yields near-instantaneous lookups on uniformly distributed numerical keys.',
        bn: 'উপযুক্ত ডেটা খোঁজার কৌশল বেছে নেওয়ার জন্য মেমরি কাঠামো এবং উপাত্তের বৈশিষ্ট্যের সাথে অ্যালগরিদমের মেকানিক্স মেলাতে হয়। সেন্টিনেল স্ক্যানিং অগোছালো ডেটায় সিপিইউ লুপের কার্যক্ষমতা বাড়ায়। জাম্প স্টেপিং তুলনার সংখ্যার সাথে সিপিইউ ক্যাশ প্রিফেচের সমন্বয় ঘটায়। এক্সপোনেনশিয়াল গ্যালোপিং অজানা দৈর্ঘ্যের স্ট্রিমিং ডেটার জন্য আদর্শ, এবং ইন্টারপোলেশন প্রোবিং সুষমভাবে বণ্টিত সাংখ্যিক ডেটায় তাৎক্ষণিক অনুসন্ধানের সুযোগ দেয়।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-bound-atelier',
    tech: 'searching',
    title: {
      en: 'Boundary Search: Lower Bound, Upper Bound & Rotated Arrays',
      bn: 'বাউন্ডারি সার্চ: লোয়ার বাউন্ড, আপার বাউন্ড ও রোটেটেড অ্যারে'
    }
  },
  exercises: [
    {
      id: 'bh-ex1',
      kind: 'mcq',
      topic: 'sentinel search optimization',
      question: {
        en: 'How does sentinel linear search improve execution speed over standard linear search?',
        bn: 'স্ট্যান্ডার্ড লিনিয়ার সার্চের তুলনায় সেন্টিনেল লিনিয়ার সার্চ কীভাবে এক্সিকিউশন গতি বাড়ায়?'
      },
      options: [
        {
          en: 'It eliminates the array boundary check in each loop iteration by guaranteeing the target is found at or before the end',
          bn: 'অ্যারের শেষে টার্গেট নিশ্চিতভাবে থাকবে ধরে নিয়ে এটি প্রতি লুপ পুনরাবৃত্তিতে অ্যারে বাউন্ডারি চেক বাদ দেয়'
        },
        {
          en: 'It changes the algorithmic asymptotic complexity from O(n) down to O(log n)',
          bn: 'এটি অ্যালগরিদমের কমপ্লেক্সিটি O(n) থেকে কমিয়ে O(log n) এ নামিয়ে আনে'
        },
        {
          en: 'It automatically sorts the array before conducting the search',
          bn: 'এটি অনুসন্ধান পরিচালনার পূর্বে অ্যারেটিকে স্বয়ংক্রিয়ভাবে সাজিয়ে নেয়'
        },
        {
          en: 'It parallelizes memory access across multiple CPU thread cores',
          bn: 'এটি একাধিক সিপিইউ থ্রেড কোরে মেমরি অ্যাক্সেস সমান্তরালভাবে পরিচালনা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Focus on what conditions are evaluated inside the while loop.',
        bn: 'হোয়াইল লুপের ভেতরে কোন শর্তগুলো পরীক্ষা করা হয় সেদিকে লক্ষ্য করুন।'
      },
      explanation: {
        en: 'By placing the target at the final index, the inner loop only needs to check arr[i] !== target. The loop condition i < n is removed, cutting branching instructions in half.',
        bn: 'টার্গেটকে শেষ ইনডেক্সে বসিয়ে দিলে ভেতরের লুপে কেবল arr[i] !== target চেক করতে হয়। এর ফলে i < n শর্তটি বাদ পড়ে এবং ব্রাঞ্চিং নির্দেশনা অর্ধেকে নেমে আসে।'
      }
    },
    {
      id: 'bh-ex2',
      kind: 'predict',
      topic: 'jump search mechanics',
      question: {
        en: 'In an array of 16 elements, jump search uses an optimal block step size of 4. Searching for an element in the second block requires how many comparisons in the worst case?',
        bn: '১৬টি উপাদানের একটি অ্যারেতে জাম্প সার্চ সর্বোত্তম ব্লক সাইজ ৪ ব্যবহার করে। দ্বিতীয় ব্লকের কোনো উপাদান অনুসন্ধানের জন্য সবচেয়ে খারাপ ক্ষেত্রে কয়টি তুলনা লাগে?'
      },
      options: [
        {
          en: '6 comparisons (2 block boundary checks plus 4 linear checks within the block)',
          bn: '৬টি তুলনা (২টি ব্লক বাউন্ডারি চেক এবং ব্লকের ভেতরে ৪টি লিনিয়ার চেক)'
        },
        {
          en: '16 comparisons (exhausting the full array)',
          bn: '১৬টি তুলনা (পুরো অ্যারে নিঃশেষ করে)'
        },
        {
          en: '2 comparisons (only checking block boundaries)',
          bn: '২টি তুলনা (শুধুমাত্র ব্লক বাউন্ডারি চেক করে)'
        },
        {
          en: '1 comparison (direct jump to destination)',
          bn: '১টি তুলনা (সরাসরি গন্তব্যে লাফিয়ে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Jump search checks the boundary of block 1, then block 2, then scans up to 4 elements inside block 2.',
        bn: 'জাম্প সার্চ ব্লক ১ এর বাউন্ডারি, তারপর ব্লক ২ এর বাউন্ডারি পরীক্ষা করে এবং ব্লক ২ এর ভেতরে সর্বোচ্চ ৪টি উপাদান স্ক্যান করে।'
      },
      explanation: {
        en: 'Jump search checks block boundaries at indices 3 and 7 (2 comparisons). Finding that the target is in the second block, it scans indices 4, 5, 6, and 7 (4 comparisons), totaling at most 6 comparisons.',
        bn: 'জাম্প সার্চ ইনডেক্স ৩ এবং ৭ এ ব্লক বাউন্ডারি চেক করে (২টি তুলনা)। টার্গেট দ্বিতীয় ব্লকে আছে দেখে এটি ইনডেক্স ৪, ৫, ৬ এবং ৭ স্ক্যান করে (৪টি তুলনা), যার ফলে সর্বোচ্চ ৬টি তুলনা লাগে।'
      }
    },
    {
      id: 'bh-ex3',
      kind: 'mcq',
      topic: 'interpolation degradation',
      question: {
        en: 'Under what data distribution does interpolation search degrade from O(log log n) to O(n) worst-case time complexity?',
        bn: 'কোন ধরনের উপাত্ত বণ্টনের কারণে ইন্টারপোলেশন সার্চের টাইম কমপ্লেক্সিটি O(log log n) থেকে নেমে O(n) ওর্য়াস্ট-কেসে পৌঁছায়?'
      },
      options: [
        {
          en: 'Exponentially skewed or clustered distributions where data points cluster heavily at one end with a massive outlier at the other',
          bn: 'সূচকীয়ভাবে বা একপাশে স্তূপীকৃত বণ্টন যেখানে অধিকাংশ উপাদান একদিকে থাকে এবং অন্য প্রান্তে একটি বিশাল বহিরাগত মান থাকে'
        },
        {
          en: 'Strictly uniform distributions where adjacent elements differ by exactly 1',
          bn: 'সম্পূর্ণ সুষম বণ্টন যেখানে পাশাপাশি উপাদানগুলোর পার্থক্য ঠিক ১ হয়'
        },
        {
          en: 'Arrays containing only even numbers in ascending order',
          bn: 'ছোট থেকে বড় ক্রমে সাজানো শুধুমাত্র জোড় সংখ্যা ধারণকারী অ্যারে'
        },
        {
          en: 'Arrays stored in read-only non-volatile memory chips',
          bn: 'রিড-অনলি নন-ভোলাটাইল মেমরি চিপে সংরক্ষিত অ্যারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Interpolation calculates position assuming linear proportion. If values grow exponentially like 1, 2, 4, 8, ..., 1000000, the proportion formula estimates inaccurate indices.',
        bn: 'ইন্টারপোলেশন রৈখিক অনুপাত ধরে নিয়ে ইনডেক্স নির্ধারণ করে। মানগুলো যদি ১, ২, ৪, ৮, ..., ১০০০০০০ এর মতো সূচকীয় হারে বাড়ে, তবে অনুপাতের সূত্রটি ভুল ইনডেক্স অনুমান করে।'
      },
      explanation: {
        en: 'When numbers are clustered (e.g., [1, 2, 3, 4, 1000000]), searching for a small key produces a calculated proportion near 0, advancing the search pointer by only 1 position per probe. This transforms the algorithm into an inefficient linear search of O(n) steps.',
        bn: 'যখন সংখ্যাগুলো একপাশে স্তূপীকৃত থাকে (যেমন [১, ২, ৩, ৪, ১০০০০০০]), তখন ছোট মান অনুসন্ধানের সময় অনুপাত প্রায় ০ আসে এবং প্রতি ধাপে পয়েন্টার মাত্র ১ ঘর করে এগোয়। এটি অ্যালগরিদমটিকে O(n) ধাপে একটি অদক্ষ লিনিয়ার সার্চে পরিণত করে।'
      }
    }
  ],
  quiz: {
    id: 'beyond-halving-quiz',
    title: {
      en: 'Alternative Search Algorithms Quiz',
      bn: 'বিকল্প সার্চ অ্যালগরিদম কুইজ'
    },
    questions: [
      {
        id: 'bhq1',
        kind: 'mcq',
        topic: 'sentinel linear search',
        question: {
          en: 'Why must the original element at index n - 1 be restored after a sentinel search terminates?',
          bn: 'সেন্টিনেল সার্চ শেষ হওয়ার পর কেন ইনডেক্স n - 1 এ থাকা মূল উপাদানটি পুনরুদ্ধার করা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'To prevent array data corruption because the sentinel overwrite is a temporary side-effect of the algorithm',
            bn: 'অ্যারের উপাত্তের বিকৃতি রোধ করতে কারণ সেন্টিনেল বসানো অ্যালগরিদমের একটি সাময়িক পার্শ্বপ্রতিক্রিয়া ছিল'
          },
          {
            en: 'Because JavaScript arrays throw a runtime error if modified during a while loop',
            bn: 'কারণ হোয়াইল লুপ চলাকালীন জাভাস্ক্রিপ্ট অ্যারে পরিবর্তিত হলে রানটাইম এরর দেয়'
          },
          {
            en: 'To inform the garbage collector that the search space is deallocated',
            bn: 'গার্বেজ কালেক্টরকে অবহিত করতে যে সার্চের মেমরি খালি করে দেওয়া হয়েছে'
          },
          {
            en: 'To allow the binary search engine to compute the midpoint correctly',
            bn: 'বাইনারি সার্চ ইঞ্জিনকে সঠিকভাবে মধ্যবিন্দু হিসাব করার সুযোগ দিতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider what caller functions expect when passing an array into a search routine.',
          bn: 'কোনো সার্চ ফাংশনে অ্যারে পাঠানোর পর কলার ফাংশন কী প্রত্যাশা করে তা বিবেচনা করুন।'
        },
        explanation: {
          en: 'Sentinel linear search temporarily overwrites arr[n - 1] with the target key. If not restored, the caller array suffers from data corruption.',
          bn: 'সেন্টিনেল লিনিয়ার সার্চ সাময়িকভাবে arr[n - 1] এ টার্গেট মান লিখে দেয়। এটি পুনরুদ্ধার না করা হলে কলার ফাংশনের অ্যারেতে ডেটা নষ্ট হয়ে যাবে।'
        }
      },
      {
        id: 'bhq2',
        kind: 'mcq',
        topic: 'cache line prefetching',
        question: {
          en: 'Why can jump search outperform binary search on large in-memory arrays despite having worse O(sqrt(n)) theoretical complexity?',
          bn: 'তাত্ত্বিকভাবে O(sqrt(n)) বেশি জটিলতা থাকা সত্ত্বেও বড় ইন-মেমরি অ্যারেতে জাম্প সার্চ কেন বাইনারি সার্চের চেয়ে দ্রুত কাজ করতে পারে?'
        },
        options: [
          {
            en: 'Jump search traverses memory in sequential forward strides, allowing CPU hardware prefetchers to cache adjacent cache lines with high hit rates',
            bn: 'জাম্প সার্চ মেমরিতে ধারাবাহিকভাবে সামনের দিকে এগিয়ে যায়, ফলে সিপিইউ হার্ডওয়্যার প্রিফেচার উচ্চ হিট রেট সহ সংলগ্ন ক্যাশ লাইন সংরক্ষণ করতে পারে'
          },
          {
            en: 'Jump search requires zero CPU registers to execute',
            bn: 'জাম্প সার্চ কার্যকর করার জন্য কোনো সিপিইউ রেজিস্টারের প্রয়োজন হয় না'
          },
          {
            en: 'Binary search cannot run on arrays larger than 64 kilobytes',
            bn: '৬৪ কিলোবাইটের চেয়ে বড় অ্যারেতে বাইনারি সার্চ পরিচালনা করা যায় না'
          },
          {
            en: 'Square root operations are processed in the arithmetic logic unit without memory fetches',
            bn: 'বর্গমূল অপারেশনগুলো মেমরি অ্যাক্সেস ছাড়াই অ্যারিথমেটিক লজিক ইউনিটে প্রক্রিয়াজাত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider how memory locality differs between scattered binary midpoint lookups and sequential forward block strides.',
          bn: 'এলোমেলো বাইনারি মধ্যবিন্দু অনুসন্ধান এবং ধারাবাহিক সম্মুখবর্তী ব্লকের মেমরি লোকালিটির পার্থক্য বিবেচনা করুন।'
        },
        explanation: {
          en: 'Binary search jumps across widely separated memory addresses, frequently causing CPU cache misses. Jump search advances sequentially forward, enabling CPU prefetchers to load data into L1/L2 caches before it is requested.',
          bn: 'বাইনারি সার্চ মেমরির বহুদূরবর্তী স্থানে লাফিয়ে কাজ করায় ঘনঘন সিপিইউ ক্যাশ মিস ঘটে। কিন্তু জাম্প সার্চ ধারাবাহিকভাবে সামনের দিকে অগ্রসর হওয়ায় সিপিইউ প্রিফেচার চাহিদার পূর্বেই L1/L2 ক্যাশে ডেটা লোড করে রাখে।'
        }
      },
      {
        id: 'bhq3',
        kind: 'mcq',
        topic: 'exponential search application',
        question: {
          en: 'What unique problem does exponential search solve that standard binary search cannot handle directly?',
          bn: 'এক্সপোনেনশিয়াল সার্চ কোন অনন্য সমস্যার সমাধান করে যা স্ট্যান্ডার্ড বাইনারি সার্চ সরাসরি সমাধান করতে পারে না?'
        },
        options: [
          {
            en: 'Searching in unbounded or infinite data streams where the total array size n is unknown prior to searching',
            bn: 'অজানা বা অসীম দৈর্ঘ্যের ডেটা স্ট্রিমে অনুসন্ধান যেখানে সার্চের পূর্বে অ্যারের মোট সাইজ n জানা থাকে না'
          },
          {
            en: 'Searching across non-numeric string characters without using ASCII values',
            bn: 'অ্যাসকি মান ব্যবহার না করে নন-নিউমেরিক স্ট্রিং ক্যারেক্টারে অনুসন্ধান করা'
          },
          {
            en: 'Handling duplicate keys without modifying comparison operators',
            bn: 'তুলনা অপারেটর পরিবর্তন না করেই ডুপ্লিকেট কী পরিচালনা করা'
          },
          {
            en: 'Finding targets in completely unsorted collections in logarithmic time',
            bn: 'সম্পূর্ণ অগোছালো সংগ্রহে লগারিদমিক সময়ে টার্গেট খুঁজে বের করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard binary search requires hi = arr.length - 1 upfront. What if length is unknown?',
          bn: 'স্ট্যান্ডার্ড বাইনারি সার্চের শুরুতে hi = arr.length - 1 জানা আবশ্যক। কিন্তু দৈর্ঘ্য অজানা থাকলে কী হবে?'
        },
        explanation: {
          en: 'Standard binary search requires knowing the upper bound array length. Exponential search dynamically finds an upper bound by repeatedly doubling indices (1, 2, 4, 8...), making it ideal for unbounded streams.',
          bn: 'স্ট্যান্ডার্ড বাইনারি সার্চে অ্যারের সর্বোচ্চ দৈর্ঘ্য জানা বাধ্যতামূলক। এক্সপোনেনশিয়াল সার্চ সূচক দ্বিগুণ (১, ২, ৪, ৮...) করে গতিশীলভাবে সর্বোচ্চ বাউন্ডারি খুঁজে নেয়, যা অজানা দৈর্ঘ্যের স্ট্রিমের জন্য অত্যন্ত কার্যকর।'
        }
      },
      {
        id: 'bhq4',
        kind: 'mcq',
        topic: 'interpolation formula',
        question: {
          en: 'What is the mathematical rationale behind the interpolation search probe index pos = lo + Math.floor(((target - arr[lo]) / (arr[hi] - arr[lo])) * (hi - lo))?',
          bn: 'pos = lo + Math.floor(((target - arr[lo]) / (arr[hi] - arr[lo])) * (hi - lo)) ইন্টারপোলেশন সূত্রের পেছনের গাণিতিক যুক্তি কী?'
        },
        options: [
          {
            en: 'It estimates the relative position of the target by assuming values increase linearly between arr[lo] and arr[hi]',
            bn: 'এটি ধরে নেয় যে arr[lo] এবং arr[hi] এর মধ্যে মানগুলো রৈখিকভাবে বাড়ে এবং সেই অনুযায়ী টার্গেটের আপেক্ষিক অবস্থান অনুমান করে'
          },
          {
            en: 'It calculates the mathematical derivative of the array to find a local inflection point',
            bn: 'এটি অ্যারের গাণিতিক ডেরিভেটিভ হিসাব করে স্থানীয় ইনফ্লেকশন পয়েন্ট খুঁজে বের করে'
          },
          {
            en: 'It creates a hash code mapping keys into memory addresses',
            bn: 'এটি মেমরি অ্যাড্রেসে কী ম্যাপিং করার জন্য একটি হ্যাশ কোড তৈরি করে'
          },
          {
            en: 'It guarantees that every probe divides the array into exactly 3 equal segments',
            bn: 'এটি নিশ্চিত করে যে প্রতিটি প্রোব অ্যারেটিকে ঠিক ৩টি সমান অংশে ভাগ করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The fraction (target - arr[lo]) / (arr[hi] - arr[lo]) represents how far between the min and max values the target lies.',
          bn: '(target - arr[lo]) / (arr[hi] - arr[lo]) ভগ্নাংশটি নির্দেশ করে যে সর্বনিম্ন ও সর্বোচ্চ মানের কত দূরবর্তী অংশে টার্গেটটি অবস্থান করছে।'
        },
        explanation: {
          en: 'By calculating the numerical ratio of the target relative to the bounding values, the algorithm scales this fraction across the index range (hi - lo) to probe close to the actual key position.',
          bn: 'বাউন্ডিং মানগুলোর সাপেক্ষে টার্গেটের সাংখ্যিক অনুপাত হিসাব করে অ্যালগরিদমটি সেই ভগ্নাংশটিকে ইনডেক্স রেঞ্জ (hi - lo) দ্বারা গুণ করে সঠিক অবস্থানের সবচেয়ে কাছাকাছি প্রোব করে।'
        }
      },
      {
        id: 'bhq5',
        kind: 'mcq',
        topic: 'hash table vs sorted search trade-off',
        question: {
          en: 'Why do database storage engines continue to use sorted trees and arrays for index scans rather than relying entirely on O(1) hash tables?',
          bn: 'ডেটাবেস স্টোরেজ ইঞ্জিনগুলো কেন সম্পূর্ণভাবে O(1) হ্যাশ টেবিলের ওপর নির্ভর না করে ইনডেক্স স্ক্যানের জন্য সাজানো ট্রি ও অ্যারে ব্যবহার করে?'
        },
        options: [
          {
            en: 'Sorted structures support range queries, prefix scans, and ordered iteration, whereas hash tables only support exact point equality lookups',
            bn: 'সাজানো কাঠামো রেঞ্জ কোয়েরি, প্রিফিক্স স্ক্যান এবং ক্রমানুসারে পুনরাবৃত্তি সমর্থন করে, যেখানে হ্যাশ টেবিল শুধুমাত্র সুনির্দিষ্ট সমতাভিত্তিক সন্ধান সমর্থন করে'
          },
          {
            en: 'Hash tables consume 100 times more CPU instructions per search than binary search',
            bn: 'হ্যাশ টেবিল প্রতি অনুসন্ধানে বাইনারি সার্চের চেয়ে ১০০ গুণ বেশি সিপিইউ নির্দেশনা ব্যয় করে'
          },
          {
            en: 'Hard disk drives cannot store hash buckets across physical disk sectors',
            bn: 'হার্ড ডিস্ক ড্রাইভ ফিজিক্যাল ডিস্ক সেক্টর জুড়ে হ্যাশ বাকেট সংরক্ষণ করতে অক্ষম'
          },
          {
            en: 'Hash tables require cryptographic security certifications before use in databases',
            bn: 'ডেটাবেসে ব্যবহারের পূর্বে হ্যাশ টেবিলের ক্রিপ্টোগ্রাফিক সুরক্ষা সার্টিফিকেশন থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about queries like SELECT * WHERE age BETWEEN 20 AND 30.',
          bn: 'SELECT * WHERE age BETWEEN 20 AND 30 এর মতো কোয়েরির কথা চিন্তা করুন।'
        },
        explanation: {
          en: 'Hash functions randomize key order to achieve uniform distribution, making range scans impossible without checking every entry. Sorted arrays and B-trees retain key order, enabling O(log n) boundary search and sequential range reading.',
          bn: 'হ্যাশ ফাংশন সুষম বণ্টনের উদ্দেশ্যে কী এর ক্রম এলোমেলো করে দেয়, ফলে প্রতিটি উপাদান যাচাই না করে রেঞ্জ স্ক্যান করা অসম্ভব হয়। সাজানো অ্যারে এবং B-ট্রি কী এর ধারাবাহিক ক্রম বজায় রাখে, যা O(log n) বাউন্ডারি সন্ধান এবং ধারাবাহিক রেঞ্জ রিডিং সম্ভব করে তোলে।'
        }
      }
    ]
  }
};
