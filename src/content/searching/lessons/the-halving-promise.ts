import type { Lesson } from '../../../lib/types';

export const theHalvingPromiseLesson: Lesson = {
  slug: 'the-halving-promise',
  tech: 'searching',
  title: {
    en: 'Binary Search Foundations: Invariants, Bounds & Halving Physics',
    bn: 'বাইনারি সার্চের ভিত্তি: ইনভেরিয়ান্ট, বাউন্ডস ও ব্যবধান অর্ধায়ন'
  },
  summary: {
    en: 'A foundational beginner guide to item location algorithms and candidate space reduction. In an unordered collection, linear scans examine every element one by one in O(n) time. Once data is sorted in ascending order, binary partitioning eliminates half of the remaining candidates on each step, finding keys in logarithmic time O(log n). For an array of 16 elements, a sequential scan takes up to 16 comparisons, while binary lookup takes at most 4 comparisons. For 1048576 items, binary inspection requires at most 20 comparisons. This lesson explores loop invariants, the midpoint overflow bug, termination bounds, lower bound, and upper bound.',
    bn: 'অ্যালগরিদম এবং অনুসন্ধান পরিধি সংকোচনের একটি মৌলিক গাইড। অগোছালো ডেটায় লিনিয়ার সার্চ প্রতিটি উপাদান একে একে O(n) সময়ে পরীক্ষা করে। ডেটা ছোট থেকে বড় ক্রমে সাজানো থাকলে বাইনারি সার্চ প্রতি ধাপে অর্ধেক উপাদান বাদ দিয়ে O(log n) সময়ে মান খুঁজে বের করে। ১৬টি উপাদানের একটি অ্যারেতে লিনিয়ার অনুসন্ধানে ১৬টি পর্যন্ত তুলনা লাগে, যেখানে বাইনারি পদ্ধতিতে সর্বোচ্চ ৪টি তুলনা লাগে। ১০৪৮৫৭৬টি উপাদানের জন্য বাইনারি নিয়মে সর্বোচ্চ ২০টি তুলনা লাগে। এই পাঠে লুপ ইনভেরিয়ান্ট, মধ্যবিন্দু ওভারফ্লো সমস্যা, সমাপ্তির শর্ত, লোয়ার বাউন্ড এবং আপার বাউন্ড বিশদভাবে ব্যাখ্যা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What Search Algorithms Accomplish: Linear vs Binary',
        bn: 'সার্চ অ্যালগরিদম কী কাজ করে: লিনিয়ার বনাম বাইনারি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Searching is the computational process of finding the position of a target value within a collection of elements. When an array has no guaranteed ordering, an algorithm must inspect items one by one starting from the first slot. This sequential strategy is known as linear search. If the target exists at index k, the search finishes in k plus 1 comparisons. If the target is absent, the search must verify all n elements before concluding failure. Because no information is known about unexamined slots, linear search with O(n) worst-case time is provably optimal for completely unsorted data.',
        bn: 'সার্চিং হলো কোনো উপাদানের সংগ্রহ থেকে নির্দিষ্ট একটি টার্গেট মানের অবস্থান বা ইনডেক্স খুঁজে বের করার প্রক্রিয়া। কোনো অ্যারেতে উপাদানের ক্রম নিশ্চিত না থাকলে অ্যালগরিদমকে প্রথম স্থান থেকে একে একে প্রতিটি উপাদান পরীক্ষা করতে হয়। এই ধারাবাহিক পদ্ধতিকে লিনিয়ার সার্চ বলা হয়। টার্গেট মানটি যদি ইনডেক্স k তে থাকে, তবে অনুসন্ধানটি k যোগ ১টি তুলনায় সম্পন্ন হয়। টার্গেট মান অনুপস্থিত থাকলে ব্যর্থতা নিশ্চিত করতে অ্যালগরিদমকে সব n উপাদান পরীক্ষা করতে হয়। যেহেতু না দেখা উপাদানগুলো সম্পর্কে কোনো তথ্য জানা থাকে না, তাই অগোছালো ডেটার জন্য O(n) ওর্য়াস্ট-কেস সময়ের লিনিয়ার সার্চ গাণিতিকভাবে সর্বোত্তম।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Linear Search',
          def: {
            en: 'A sequential search algorithm that inspects every element from start to end in O(n) time.',
            bn: 'একটি ধারাবাহিক সার্চ অ্যালগরিদম যা শুরু থেকে শেষ পর্যন্ত প্রতিটি উপাদান O(n) সময়ে যাচাই করে।'
          }
        },
        {
          term: 'Binary Search',
          def: {
            en: 'A divide-and-conquer algorithm that halves the sorted search interval on each comparison in O(log n) time.',
            bn: 'একটি ডিভাইড-অ্যান্ড-কনকার অ্যালগরিদম যা সাজানো ডেটায় প্রতি তুলনায় অনুসন্ধান পরিধি অর্ধেকে কমিয়ে O(log n) সময়ে কাজ করে।'
          }
        },
        {
          term: 'Loop Invariant',
          def: {
            en: 'A mathematical property that remains true before and after each iteration of a loop.',
            bn: 'একটি গাণিতিক শর্ত যা লুপের প্রতিটি পুনরাবৃত্তির পূর্বে এবং পরেও অপরিবর্তিত বা সত্য থাকে।'
          }
        },
        {
          term: 'Lower Bound',
          def: {
            en: 'The smallest index in a sorted array containing a value greater than or equal to the target.',
            bn: 'সাজানো অ্যারের ক্ষুদ্রতম ইনডেক্স যেখানে উপস্থিত মানটি টার্গেটের সমান বা তার চেয়ে বড়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'halving-physics',
      text: {
        en: 'The Halving Law and Logarithmic Scaling',
        bn: 'অর্ধায়ন নীতি এবং লগারিদমিক স্কেলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Sorting establishes an invariant relationship across the collection: every element to the left of an index is less than or equal to it, and every element to the right is greater than or equal to it. Binary search leverages this ordering by inspecting the middle index. If the middle value matches the target, the search terminates successfully. If the middle value is smaller than the target, the target cannot exist in the left half, so that entire half is eliminated. Symmetrically, if the middle value is larger, the entire right half is discarded. Each comparison discards half of the remaining search space. For an array of length n, the candidate window shrinks from n to n / 2, n / 4, down to 1. This halving process terminates in at most ceil(log2(n)) steps.',
        bn: 'সাজানো কাঠামো একটি মৌলিক সম্পর্ক তৈরি করে: কোনো ইনডেক্সের বামের সব উপাদান তার সমান বা ছোট এবং ডানের সব উপাদান তার সমান বা বড় হয়। বাইনারি সার্চ মাঝখানের ইনডেক্স পরীক্ষা করে এই ক্রমের পূর্ণ সুবিধা নেয়। মাঝের মানটি টার্গেটের সমান হলে অনুসন্ধান সফলভাবে শেষ হয়। মাঝের মানটি টার্গেটের চেয়ে ছোট হলে বাম পাশের অংশে টার্গেট থাকা অসম্ভব, তাই সম্পূর্ণ বাম অংশ বাদ দেওয়া হয়। একইভাবে মাঝের মান বড় হলে পুরো ডান অংশ বাদ পড়ে। প্রতিটি তুলনা অবশিষ্ট অনুসন্ধান পরিধিকে অর্ধেকে নামিয়ে আনে। n দৈর্ঘ্যের একটি অ্যারেতে প্রার্থীর সংখ্যা n থেকে n / ২, n / ৪ হয়ে ১ এ নেমে আসে। এই অর্ধায়ন প্রক্রিয়া সর্বোচ্চ ceil(log2(n)) ধাপে শেষ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'binary-search-core.ts',
      caption: {
        en: 'Exact binary search and lower bound implementations with closed and half-open windows.',
        bn: 'ক্লোজড এবং হাফ-ওপেন উইন্ডো সহ বাইনারি সার্চ ও লোয়ার বাউন্ডের সঠিক বাস্তবায়ন।'
      },
      code: `export function binarySearch(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    // Avoid integer overflow present in (lo + hi) / 2
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) {
      return mid; // Target found
    }
    if (arr[mid] < target) {
      lo = mid + 1; // Discard left half including mid
    } else {
      hi = mid - 1; // Discard right half including mid
    }
  }
  return -1; // Target not found
}

export function lowerBound(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length; // Half-open interval [lo, hi)

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < target) {
      lo = mid + 1; // First element >= target cannot be at mid or left
    } else {
      hi = mid; // mid could be the answer, keep it in window
    }
  }
  return lo; // First index where arr[index] >= target
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Comparing Comparisons and Indices',
        bn: 'এক্সিকিউশন ট্রেস: তুলনা এবং ইনডেক্স পরিমাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Running both algorithms on a 16-element array demonstrates the difference in comparison counts. We search for target value 43 in the array [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63]. Linear search visits 11 items before finding 43 at index 10. In contrast, binary search probes only 4 slots: mid 7 holding 31, mid 11 holding 47, mid 9 holding 39, and finally position 10 containing 43. Similarly, running lower bound for target 30 converges on position 7 with value 31 in exactly 4 steps.',
        bn: '১৬টি উপাদানের একটি অ্যারেতে উভয় অ্যালগরিদম চালালে তুলনার সংখ্যার স্পষ্ট পার্থক্য প্রমাণিত হয়। আমরা [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63] অ্যারেতে টার্গেট মান 43 অনুসন্ধান করি। লিনিয়ার সার্চ ইনডেক্স 10 এ 43 খুঁজে পেতে মোট 11 টি উপাদান পরিদর্শন করে। কিন্তু বাইনারি সার্চ মাত্র 4 টি স্থান পরিদর্শন করে: মান 31 সহ অবস্থান 7, মান 47 সহ অবস্থান 11, মান 39 সহ অবস্থান 9, এবং কাঙ্ক্ষিত মান 43 সহ অবস্থান 10। একইভাবে মান 30 এর জন্য লোয়ার বাউন্ড চালালে ঠিক 4 টি ধাপে অবস্থান 7 (মান 31) এ ফলাফল পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-demo.ts',
      caption: {
        en: 'Executable trace showing 11 linear comparisons versus 4 binary search comparisons for 16 items.',
        bn: '১৬টি উপাদানে লিনিয়ার সার্চের ১১টি তুলনা বনাম বাইনারি সার্চের ৪টি তুলনার বাস্তব এক্সিকিউশন ট্রেস।'
      },
      code: `const data = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63];

// Linear Search for target 43:
// Examined indices 0 through 10 -> 11 comparisons -> found at index 10

// Binary Search for target 43:
// Step 1: lo=0,  mid=7,  hi=15, value=31 (< 43) -> lo = 8
// Step 2: lo=8,  mid=11, hi=15, value=47 (> 43) -> hi = 10
// Step 3: lo=8,  mid=9,  hi=10, value=39 (< 43) -> lo = 10
// Step 4: lo=10, mid=10, hi=10, value=43 (== 43) -> found at index 10 in 4 steps!

// Lower Bound for target 30:
// Step 1: lo=0, mid=8, hi=16, value=35 (>= 30) -> hi = 8
// Step 2: lo=0, mid=4, hi=8,  value=19 (< 30)  -> lo = 5
// Step 3: lo=5, mid=6, hi=8,  value=27 (< 30)  -> lo = 7
// Step 4: lo=7, mid=7, hi=8,  value=31 (>= 30) -> hi = 7
// Collapsed at index 7 (value 31) in 4 steps!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Search Space Reduction',
        bn: 'অনুসন্ধান পরিধি সংকোচনের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'internals',
      text: {
        en: 'Implementation Traps: Integer Overflow and Termination Deadlocks',
        bn: 'বাস্তবায়নের ফাঁদ: পূর্ণসংখ্যা ওভারফ্লো ও সমাপ্তির অচলাবস্থা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Two classic implementation bugs frequently plague binary search routines. The first issue is integer overflow. Writing mid = Math.floor((lo + hi) / 2) adds two large valid array indices. In systems with 32-bit signed integers, if the sum exceeds 2147483647, the calculation overflows to a negative integer, causing an out-of-bounds array exception. The correct expression is mid = lo + Math.floor((hi - lo) / 2), which subtracts before adding. The second issue is loop termination deadlock. In a closed window with integer division rounding down, when the search interval narrows to 2 elements, mid evaluates to lo. If the update branch executes lo = mid instead of lo = mid + 1, lo remains unchanged, producing an infinite loop. Every branch in a binary search must guarantee that the candidate window shrinks by at least 1 element.',
        bn: 'বাইনারি সার্চ বাস্তবায়নে দুটি প্রচলিত সমস্যা প্রায়শই ঘটে থাকে। প্রথম সমস্যাটি হলো পূর্ণসংখ্যা ওভারফ্লো। mid = Math.floor((lo + hi) / 2) লিখলে দুটি বড় বৈধ ইনডেক্স যোগ হয়। ৩২-বিট সাইন্ড ইন্টিজার সিস্টেমে যোগফল যদি ২১৪৭৪৮৩৬৪৭ এর বেশি হয়, তবে যোগফল ঋণাত্মক সংখ্যায় রূপান্তরিত হয়ে মেমরি এক্সেপশন ঘটায়। এর সঠিক সমাধান হলো mid = lo + Math.floor((hi - lo) / 2), যা যোগ করার আগে বিয়োগ সম্পন্ন করে। দ্বিতীয় সমস্যাটি হলো লুপের অচলাবস্থা বা ইনফিনিট লুপ। ক্লোজড উইন্ডোতে নিচের দিকে রাউন্ডিংয়ের কারণে যখন উইন্ডোটি ২ উপাদানে নেমে আসে, তখন mid এর মান ঠিক lo এর সমান হয়। তখন যদি আপডেট শাখায় lo = mid + 1 এর বদলে lo = mid লেখা হয়, তবে lo এর কোনো পরিবর্তন হয় না এবং লুপটি আজীবন চলতে থাকে। বাইনারি সার্চের প্রতিটি শাখায় নিশ্চিত করতে হবে যেন উইন্ডোটি কমপক্ষে ১টি উপাদান ছোট হয়।'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: {
        en: 'Infinite Loop via lo = mid',
        bn: 'lo = mid দ্বারা অনন্ত লুপের ঝুঁকি'
      },
      text: {
        en: 'Using lo = mid instead of lo = mid + 1 when rounding down creates an infinite loop on any two-element window. Because mid equals lo, assigning lo = mid does not shrink the search space, trapping the program in an endless cycle.',
        bn: 'নিচের দিকে রাউন্ডিং করার সময় lo = mid + 1 এর পরিবর্তে lo = mid ব্যবহার করলে যেকোনো দুই উপাদানের উইন্ডোতে ইনফিনিট লুপ তৈরি হয়। যেহেতু mid এর মান lo এর সমান হয়, তাই lo = mid লিখলে সার্চের পরিধি এক ঘরও কমে না এবং প্রোগ্রামটি আজীবন আটকে থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Performance Comparison Table: Linear vs Binary',
        bn: 'কর্মক্ষমতার তুলনামূলক সারণি: লিনিয়ার বনাম বাইনারি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Array Size (n)', bn: 'অ্যারে সাইজ (n)' },
        { en: 'Linear Search Worst Case', bn: 'লিনিয়ার সার্চ ওর্য়াস্ট কেস' },
        { en: 'Binary Search Worst Case', bn: 'বাইনারি সার্চ ওর্য়াস্ট কেস' },
        { en: 'Growth Family', bn: 'বৃদ্ধির পরিবার' }
      ],
      rows: [
        [
          { en: '16 elements', bn: '১৬ উপাদান' },
          { en: '16 comparisons', bn: '১৬ তুলনা' },
          { en: '4 comparisons', bn: '৪ তুলনা' },
          { en: 'Logarithmic savings', bn: 'লগারিদমিক সঞ্চয়' }
        ],
        [
          { en: '1024 elements', bn: '১০২৪ উপাদান' },
          { en: '1024 comparisons', bn: '১০২৪ তুলনা' },
          { en: '10 comparisons', bn: '১০ তুলনা' },
          { en: '100x fewer comparisons', bn: '১০০ গুণ কম তুলনা' }
        ],
        [
          { en: '1048576 elements', bn: '১০৪৮৫৭৬ উপাদান' },
          { en: '1048576 comparisons', bn: '১০৪৮৫৭৬ তুলনা' },
          { en: '20 comparisons', bn: '২০ তুলনা' },
          { en: '50000x fewer comparisons', bn: '৫০,০০০ গুণ কম তুলনা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'applications',
      text: {
        en: 'Real-World Production Applications',
        bn: 'বাস্তব ক্ষেত্রে প্রোডাকশন ব্যবহার'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Standard Library Implementations: C++ std::lower_bound, Python bisect, and Java Arrays.binarySearch utilize optimized binary search variants for in-memory arrays.',
          bn: 'স্ট্যান্ডার্ড লাইব্রেরি বাস্তবায়ন: C++ std::lower_bound, Python bisect, এবং Java Arrays.binarySearch মেমরি অ্যারে অনুসন্ধানে অপ্টিমাইজড বাইনারি সার্চ ব্যবহার করে।'
        },
        {
          en: 'Git Bisect: The source control tool git bisect conducts binary search across thousands of commit hashes to identify the exact change that introduced a regression.',
          bn: 'গিট বাইসেক্ট: ভার্সন কন্ট্রোল টুল git bisect হাজার হাজার কমিটের মধ্যে বাইনারি সার্চ পরিচালনা করে সফটওয়্যারের বাগ সৃষ্টিকারী নির্দিষ্ট কমিট চিহ্নিত করে।'
        },
        {
          en: 'Database Index B-Tree Nodes: Relational database engines store index records inside sorted memory pages, utilizing binary search to find target pointers in O(log n) time.',
          bn: 'ডেটাবেস ইনডেক্স B-ট্রি নোড: রিলেশনাল ডেটাবেস ইঞ্জিন সাজানো পেজের ভেতর ইনডেক্স রেকর্ড সংরক্ষণ করে, যা O(log n) সময়ে বাইনারি সার্চের মাধ্যমে পয়েন্টার খুঁজে বের করে।'
        },
        {
          en: 'Operating System Memory Allocators: Virtual memory subsystems use boundary search routines to find free memory regions and interval descriptors in constant-factor logarithmic time.',
          bn: 'অপারেটিং সিস্টেম মেমরি অ্যালোকেটর: ভার্চুয়াল মেমরি সাবসিস্টেম ফাঁকা মেমরি ব্লক এবং ব্যবধানের বর্ণনাকারী দ্রুত খুঁজে পেতে বাউন্ডারি সার্চ রুটিন ব্যবহার করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Mastering Search Space Reduction',
        bn: 'সারসংক্ষেপ: অনুসন্ধান পরিধি সংকোচনে দক্ষতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Linear search provides an honest O(n) scan when no order guarantees exist. Once an array is sorted, binary search unlocks exponential speedup by halving the search window on every comparison, requiring at most 20 probes for over 1000000 items. Maintaining loop invariants, utilizing lowerBound for boundary queries, and guarding against integer overflow ensures robust, high-performance searching across large datasets.',
        bn: 'কোনো ক্রমের নিশ্চয়তা না থাকলে লিনিয়ার সার্চ একটি কার্যকর O(n) স্ক্যান সরবরাহ করে। অ্যারে সাজানো থাকলে বাইনারি সার্চ প্রতি ধাপে অনুসন্ধান পরিধি অর্ধেকে কমিয়ে সূচকীয় গতি নিশ্চিত করে, যেখানে ১০০০০০০ এর বেশি উপাদানের জন্য সর্বোচ্চ ২০টি প্রোব প্রয়োজন হয়। লুপ ইনভেরিয়ান্ট রক্ষা করা, বাউন্ডারি কোয়েরির জন্য lowerBound ব্যবহার করা এবং পূর্ণসংখ্যা ওভারফ্লো থেকে সতর্ক থাকা বিশাল ডেটাসেটে নির্ভুল ও দ্রুত অনুসন্ধান নিশ্চিত করে।'
      }
    }
  ],
  nextLesson: {
    slug: 'beyond-halving',
    tech: 'searching',
    title: {
      en: 'Alternative Search Algorithms: Sentinel, Jump & Interpolation',
      bn: 'বিকল্প সার্চ অ্যালগরিদম: সেন্টিনেল, জাম্প ও ইন্টারপোলেশন'
    }
  },
  exercises: [
    {
      id: 'sr-ex1',
      kind: 'mcq',
      topic: 'loop invariants',
      question: {
        en: 'A binary search loop updates bounds using lo = mid instead of lo = mid + 1 with downward integer rounding. What is the operational failure?',
        bn: 'নিচের দিকে পূর্ণসংখ্যা রাউন্ডিং সহ একটি বাইনারি সার্চ লুপে lo = mid + 1 এর পরিবর্তে lo = mid লেখা হলো। এর ফলে সিস্টেমে কী ধরনের ত্রুটি ঘটবে?'
      },
      options: [
        {
          en: 'An infinite loop occurs on any two-element search window because mid equals lo, leaving the search space unreduced',
          bn: 'যেকোনো দুই উপাদানের সার্চ উইন্ডোতে ইনফিনিট লুপ ঘটবে কারণ mid এর মান lo এর সমান হওয়ায় সার্চের পরিধি হ্রাস পায় না'
        },
        {
          en: 'The search algorithm reports an incorrect result only on odd-length arrays',
          bn: 'সার্চ অ্যালগরিদমটি শুধুমাত্র বিজোড় দৈর্ঘ্যের অ্যারেতে ভুল ফলাফল প্রদান করবে'
        },
        {
          en: 'The midpoint variable immediately triggers an integer overflow exception',
          bn: 'মধ্যবিন্দু ভেরিয়েবলটি সাথে সাথে পূর্ণসংখ্যা ওভারফ্লো এক্সেপশন ঘটাবে'
        },
        {
          en: 'The algorithm terminates prematurely without inspecting the first element',
          bn: 'অ্যালগরিদমটি প্রথম উপাদান পরীক্ষা না করেই অকালে থেমে যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider an array of 2 elements where lo is 0 and hi is 1. The midpoint evaluates to 0. If lo is assigned 0, the window remains [0, 1] indefinitely.',
        bn: '২টি উপাদানের একটি অ্যারে চিন্তা করুন যেখানে lo হলো ০ এবং hi হলো ১। মধ্যবিন্দুর মান হয় ০। এখন lo তে ০ অ্যাসাইন করা হলে উইন্ডোটি অপরিবর্তিত থেকে যায়।'
      },
      explanation: {
        en: 'When mid is computed with downward rounding, a two-element window yields mid = lo. If the algorithm updates lo = mid, the search interval fails to shrink, causing an endless execution cycle. Setting lo = mid + 1 ensures at least 1 element is discarded on every iteration.',
        bn: 'নিচের দিকে রাউন্ডিং করার সময় দুই উপাদানের উইন্ডোতে mid = lo পাওয়া যায়। অ্যালগরিদম যদি lo = mid আপডেট করে, তবে সার্চ ব্যবধান মোটেও কমে না, যার ফলে একটি অনন্ত লুপ তৈরি হয়। lo = mid + 1 ব্যবহার করলে নিশ্চিত হয় যে প্রতিটি পুনরাবৃত্তিতে অন্তত ১টি উপাদান বাদ পড়বে।'
      }
    },
    {
      id: 'sr-ex2',
      kind: 'predict',
      topic: 'binary search trace',
      question: {
        en: 'Given sorted array [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63] with 16 elements, how many comparisons does binary search make to locate target 43?',
        bn: '১৬টি উপাদান বিশিষ্ট সাজানো অ্যারে [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63] তে বাইনারি সার্চ চালিয়ে টার্গেট 43 খুঁজে পেতে কয়টি তুলনা লাগে?'
      },
      options: [
        {
          en: '4 comparisons (inspecting indices 7, 11, 9, and 10)',
          bn: '৪টি তুলনা (ইনডেক্স ৭, ১১, ৯ এবং ১০ পরীক্ষা করে)'
        },
        {
          en: '11 comparisons (checking every slot up to index 10)',
          bn: '১১টি তুলনা (ইনডেক্স ১০ পর্যন্ত প্রতিটি স্থান পরীক্ষা করে)'
        },
        {
          en: '2 comparisons (inspecting indices 7 and 11)',
          bn: '২টি তুলনা (ইনডেক্স ৭ এবং ১১ পরীক্ষা করে)'
        },
        {
          en: '8 comparisons (checking half of the array sequentially)',
          bn: '৮টি তুলনা (ধারাবাহিকভাবে অ্যারের অর্ধেক পরীক্ষা করে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The search probes index 7 (value 31), index 11 (value 47), index 9 (value 39), and finally index 10 (value 43).',
        bn: 'অনুসন্ধানটি ক্রমানুসারে ইনডেক্স ৭ (মান ৩১), ইনডেক্স ১১ (মান ৪৭), ইনডেক্স ৯ (মান ৩৯) এবং পরিশেষে ইনডেক্স ১০ (মান ৪৩) পরীক্ষা করে।'
      },
      explanation: {
        en: 'Binary search begins at index 7 where 31 < 43, and moves to index 11 where 47 > 43. Next, it narrows to index 9 where 39 < 43, and finishes at index 10 where 43 matches the target in 4 comparisons.',
        bn: 'বাইনারি সার্চ প্রথমে ইনডেক্স ৭ এ শুরু হয় যেখানে ৩১ < ৪৩, এবং এরপর ইনডেক্স ১১ তে যায় যেখানে ৪৭ > ৪৩। তারপর এটি ইনডেক্স ৯ এ সংকুচিত হয় যেখানে ৩৯ < ৪৩, এবং সবশেষে ইনডেক্স ১০ এ কাঙ্ক্ষিত মান ৪৩ খুঁজে পেয়ে ৪টি তুলনায় শেষ হয়।'
      }
    },
    {
      id: 'sr-ex3',
      kind: 'mcq',
      topic: 'lower bound boundaries',
      question: {
        en: 'Running lower bound for target 30 on an array where index 6 contains 27 and index 7 contains 31 returns which index?',
        bn: 'যে অ্যারেতে ইনডেক্স ৬ এ ২৭ এবং ইনডেক্স ৭ এ ৩১ রয়েছে, সেখানে টার্গেট ৩০ এর জন্য লোয়ার বাউন্ড চালালে কোন ইনডেক্সটি রিটার্ন হয়?'
      },
      options: [
        {
          en: 'Index 7 because 31 is the first value greater than or equal to 30',
          bn: 'ইনডেক্স ৭ কারণ ৩১ হলো ৩০ এর সমান বা তার চেয়ে বড় প্রথম মান'
        },
        {
          en: 'Index 6 because 27 is the closest smaller value',
          bn: 'ইনডেক্স ৬ কারণ ২৭ হলো সবচেয়ে কাছের ছোট মান'
        },
        {
          en: 'Index 8 because 30 is not present in the array',
          bn: 'ইনডেক্স ৮ কারণ ৩০ অ্যারেতে উপস্থিত নেই'
        },
        {
          en: 'Index -1 indicating the value is absent',
          bn: 'ইনডেক্স -১ যা নির্দেশ করে মানটি অনুপস্থিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lower bound identifies the first index containing a value greater than or equal to the target.',
        bn: 'লোয়ার বাউন্ড টার্গেটের সমান বা তার চেয়ে বড় মান ধারণকারী প্রথম ইনডেক্সটি চিহ্নিত করে।'
      },
      explanation: {
        en: 'Because 27 is strictly less than 30 and 31 is the first value greater than or equal to 30, index 7 satisfies the lower bound condition.',
        bn: 'যেহেতু ২৭ সংখ্যাটি ৩০ এর চেয়ে ছোট এবং ৩১ হলো ৩০ এর সমান বা তার চেয়ে বড় প্রথম মান, তাই ইনডেক্স ৭ লোয়ার বাউন্ডের শর্ত পূরণ করে।'
      }
    }
  ],
  quiz: {
    id: 'halving-quiz',
    title: {
      en: 'Binary Search Foundations Quiz',
      bn: 'বাইনারি সার্চের ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'hq1',
        kind: 'mcq',
        topic: 'search optimality',
        question: {
          en: 'Why is linear search provably optimal when searching an unsorted array of n elements?',
          bn: 'n উপাদানের একটি অগোছালো অ্যারেতে অনুসন্ধানের জন্য লিনিয়ার সার্চ কেন গাণিতিকভাবে সর্বোত্তম?'
        },
        options: [
          {
            en: 'Without ordering guarantees, each unequal comparison eliminates only 1 element, requiring n checks in the worst case',
            bn: 'অ্যারে সাজানো না থাকলে প্রতিটি অসমান তুলনা মাত্র ১টি উপাদান বাদ দিতে পারে, ফলে ওর্য়াস্ট কেসে n টি পরীক্ষাই অপরিহার্য'
          },
          {
            en: 'Modern hardware caches can only read arrays sequentially from left to right',
            bn: 'আধুনিক হার্ডওয়্যার ক্যাশ মেমরি শুধুমাত্র বাম থেকে ডানে ধারাবাহিকভাবে অ্যারে পড়তে পারে'
          },
          {
            en: 'Sorting the array beforehand is always forbidden by memory allocators',
            bn: 'মেমরি অ্যালোকেটর দ্বারা অনুসন্ধানের পূর্বে অ্যারে সাজানো সবসময় নিষিদ্ধ থাকে'
          },
          {
            en: 'Linear search achieves logarithmic complexity when keys are uniformly distributed',
            bn: 'কীগুলো সমানভাবে বণ্টিত থাকলে লিনিয়ার সার্চ লগারিদমিক কমপ্লেক্সিটি অর্জন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider how much information an inequality gives you about the unexamined slots in an unordered array.',
          bn: 'চিন্তা করুন যে অগোছালো অ্যারেতে একটি অসমান তুলনা না দেখা অন্যান্য উপাদান সম্পর্কে কতটুকু তথ্য দেয়।'
        },
        explanation: {
          en: 'In an unordered array, inspecting an element that does not match the target yields zero information about any other slot. Therefore, an algorithm must inspect every element in the worst case, making O(n) linear search optimal.',
          bn: 'অগোছালো অ্যারেতে কোনো উপাদান টার্গেটের সাথে না মিললে তা বাকি কোনো উপাদান সম্পর্কে কোনো তথ্য দেয় না। তাই সবচেয়ে খারাপ ক্ষেত্রে অ্যালগরিদমকে প্রতিটি উপাদান যাচাই করতে হয়, যার ফলে O(n) লিনিয়ার সার্চ গাণিতিকভাবে সর্বোত্তম।'
        }
      },
      {
        id: 'hq2',
        kind: 'mcq',
        topic: 'logarithmic scaling',
        question: {
          en: 'For a sorted array of 1048576 elements, what is the maximum number of comparisons required by binary search?',
          bn: '১০৪৮৫৭৬টি উপাদানের একটি সাজানো অ্যারেতে বাইনারি সার্চের জন্য সর্বোচ্চ কয়টি তুলনার প্রয়োজন হয়?'
        },
        options: [
          {
            en: '20 comparisons',
            bn: '২০টি তুলনা'
          },
          {
            en: '1024 comparisons',
            bn: '১০২৪টি তুলনা'
          },
          {
            en: '524288 comparisons',
            bn: '৫২৪২৮৮টি তুলনা'
          },
          {
            en: '1048576 comparisons',
            bn: '১০৪৮৫৭৬টি তুলনা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calculate ceil(log2(1048576)), remembering that 2 raised to power 20 equals 1048576.',
          bn: 'ceil(log2(১০৪৮৫৭৬)) হিসাব করুন, মনে রাখবেন ২ এর পাওয়ার ২০ হলে তার মান ১০৪৮৫৭৬ হয়।'
        },
        explanation: {
          en: 'Because 2^20 = 1048576, halving the search space 20 times reduces 1048576 candidate elements down to 1, ensuring at most 20 comparisons.',
          bn: 'যেহেতু ২^২০ = ১০৪৮৫৭৬, তাই সার্চের পরিধি ২০ বার অর্ধেকে নামালে ১০৪৮৫৭৬টি উপাদান ১ এ নেমে আসে, যা সর্বোচ্চ ২০টি তুলনা নিশ্চিত করে।'
        }
      },
      {
        id: 'hq3',
        kind: 'mcq',
        topic: 'midpoint arithmetic',
        question: {
          en: 'Why do production libraries compute mid as lo + Math.floor((hi - lo) / 2) rather than Math.floor((lo + hi) / 2)?',
          bn: 'প্রোডাকশন লাইব্রেরিগুলোতে mid হিসাব করতে Math.floor((lo + hi) / 2) এর পরিবর্তে কেন lo + Math.floor((hi - lo) / 2) ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Adding large indices can exceed the 32-bit signed integer limit and overflow into negative numbers',
            bn: 'দুটি বড় ইনডেক্স যোগ করলে তা ৩২-বিট সাইন্ড ইন্টিজারের সীমা অতিক্রম করে ঋণাত্মক সংখ্যায় ওভারফ্লো করতে পারে'
          },
          {
            en: 'The subtraction formula executes in zero CPU clock cycles on modern microprocessors',
            bn: 'বিয়োগের সূত্রটি আধুনিক মাইক্রোপ্রসেসরে শূন্য সিপিইউ ক্লক সাইকেলে কার্যকর হয়'
          },
          {
            en: 'Floating-point division is required by the ECMAScript compiler specification',
            bn: 'ইসিএমএস্ক্রিপ্ট কম্পাইলার স্পেসিফিকেশন অনুযায়ী ফ্লোটিং-পয়েন্ট ভাগ করা বাধ্যতামূলক'
          },
          {
            en: 'The addition formula causes an off-by-one error on arrays with odd numbers of elements',
            bn: 'যোগের সূত্রটি বিজোড় সংখ্যক উপাদানের অ্যারেতে এক ঘর সরে যাওয়ার ভুল তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In languages with bounded 32-bit integers like Java or C++, lo + hi can exceed 2147483647.',
          bn: 'Java বা C++ এর মতো সীমাবদ্ধ ৩২-বিট ভাষার ক্ষেত্রে lo + hi এর মান ২১৪৭৪৮৩৬৪৭ ছাড়িয়ে যেতে পারে।'
        },
        explanation: {
          en: 'When lo and hi are large positive numbers, their sum can exceed 2^31 - 1, producing an integer overflow. Computing lo + (hi - lo) / 2 measures the distance between the two pointers and avoids large sums.',
          bn: 'যখন lo এবং hi অনেক বড় ধনাত্মক সংখ্যা হয়, তখন তাদের যোগফল ২^৩১ - ১ অতিক্রম করে ইন্টিজার ওভারফ্লো ঘটাতে পারে। lo + (hi - lo) / 2 লিখলে দুই পয়েন্টারের দূরত্ব হিসাব করা হয় এবং বড় যোগফল এড়ানো যায়।'
        }
      },
      {
        id: 'hq4',
        kind: 'predict',
        topic: 'lower bound search',
        question: {
          en: 'In a sorted array [10, 20, 30, 40, 50], executing lower bound for target 25 returns which index and value?',
          bn: 'সাজানো অ্যারে [10, 20, 30, 40, 50] তে টার্গেট 25 এর জন্য লোয়ার বাউন্ড চালালে কোন ইনডেক্স এবং মান পাওয়া যাবে?'
        },
        options: [
          {
            en: 'Index 2 with value 30 (the first element greater than or equal to 25)',
            bn: 'ইনডেক্স ২ যেখানে মান ৩০ (২৫ এর সমান বা বড় প্রথম উপাদান)'
          },
          {
            en: 'Index 1 with value 20 (the closest smaller element)',
            bn: 'ইনডেক্স ১ যেখানে মান ২০ (সবচেয়ে কাছের ছোট উপাদান)'
          },
          {
            en: 'Index -1 indicating target absence',
            bn: 'ইনডেক্স -১ যা নির্দেশ করে টার্গেট অনুপস্থিত'
          },
          {
            en: 'Index 3 with value 40',
            bn: 'ইনডেক্স ৩ যেখানে মান ৪০'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lower bound seeks the earliest position satisfying arr[index] >= target.',
          bn: 'লোয়ার বাউন্ড arr[index] >= target শর্ত পূরণকারী প্রথম অবস্থানটি খুঁজে বের করে।'
        },
        explanation: {
          en: 'Lower bound finds the first element where value >= 25. In the array [10, 20, 30, 40, 50], value 20 is too small and value 30 at index 2 is the first value >= 25.',
          bn: 'লোয়ার বাউন্ড মান >= ২৫ এমন প্রথম উপাদানটি বের করে। [10, 20, 30, 40, 50] অ্যারেতে ২০ সংখ্যাটি ছোট এবং ইনডেক্স ২ এ থাকা ৩০ সংখ্যাটি হলো ২৫ এর সমান বা বড় প্রথম মান।'
        }
      },
      {
        id: 'hq5',
        kind: 'mcq',
        topic: 'algorithm selection',
        question: {
          en: 'If an application needs to perform only a single search query on an unsorted array of n elements, what is the most efficient strategy?',
          bn: 'একটি অ্যাপ্লিকেশনে n উপাদানের অগোছালো অ্যারেতে যদি মাত্র একটি সার্চ কোয়েরি চালাতে হয়, তবে সবচেয়ে কার্যকর কৌশল কোনটি?'
        },
        options: [
          {
            en: 'Perform a direct linear search in O(n) time, avoiding the O(n log n) overhead of sorting',
            bn: 'সরাসরি O(n) সময়ে লিনিয়ার সার্চ চালানো, যা সাজানোর O(n log n) বাড়তি খরচ রোধ করে'
          },
          {
            en: 'Sort the array first in O(n log n) and then perform binary search in O(log n)',
            bn: 'প্রথমে অ্যারেটিকে O(n log n) সময়ে সাজিয়ে নিয়ে তারপর O(log n) সময়ে বাইনারি সার্চ করা'
          },
          {
            en: 'Construct a balanced binary search tree in O(n log n) time',
            bn: 'O(n log n) সময়ে একটি ব্যালান্সড বাইনারি সার্চ ট্রি তৈরি করা'
          },
          {
            en: 'Build an open-addressing hash table in O(n) space and time',
            bn: 'O(n) মেমরি ও সময়ে একটি ওপেন-অ্যাড্রেসিং হ্যাশ টেবিল তৈরি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare the total cost of sorting plus searching versus searching directly without preparation.',
          bn: 'কোনো প্রস্তুতি ছাড়া সরাসরি সার্চ করা বনাম আগে সাজিয়ে তারপর সার্চ করার মোট খরচ তুলনা করুন।'
        },
        explanation: {
          en: 'For a single query on unsorted data, linear search costs O(n). Sorting beforehand costs O(n log n), which is strictly worse than O(n). Sorting or indexing only pays off when multiple search queries are executed over time.',
          bn: 'অগোছালো ডেটায় একটি মাত্র কোয়েরির ক্ষেত্রে লিনিয়ার সার্চে খরচ হয় O(n)। কিন্তু আগে সাজাতে গেলে খরচ হবে O(n log n), যা O(n) এর চেয়ে অনেক বেশি ব্যয়বহুল। ডেটায় বারবার বহু কোয়েরি চালানো হলেই কেবল আগে থেকে সাজিয়ে রাখা লাভজনক হয়।'
        }
      }
    ]
  }
};
