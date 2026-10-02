import type { Lesson } from '../../../lib/types';

export const halvingVeinLesson: Lesson = {
  slug: 'the-halving-vein',
  tech: 'sorting',
  title: {
    en: 'The Halving Vein: Divide & Conquer Sorting & Binary Search',
    bn: 'দি হালভিং ভেইন: ডিভাইড অ্যান্ড কনকার সর্টিং ও বাইনারি সার্চ'
  },
  summary: {
    en: 'Dividing problem spaces in half is one of the most powerful paradigms in computer science. When data is ordered, discarding half the remaining candidates on each decision step produces logarithmic O(log n) efficiency. In a sorted array of 16 elements, searching for value 26 requires only 4 probes to locate index 12, whereas a linear scan inspects up to 16 elements. This principle of halving underpins divide-and-conquer sorting. Merge Sort recursively splits arrays down to singletons before combining them with two pointers in O(n log n) time. Quick Sort partitions around a chosen pivot, separating smaller and larger elements in place. This lesson teaches binary search pointer arithmetic, loop invariants, merge sort decomposition, and Lomuto versus Hoare partition schemes.',
    bn: 'সমস্যাকে প্রতি ধাপে অর্ধেক করে ফেলা কম্পিউটার সায়েন্সের সবচেয়ে শক্তিশালী কৌশলগুলোর একটি। উপাত্ত সাজানো থাকলে প্রতিটি পদক্ষেপে বাকি থাকা প্রার্থীর অর্ধেক বাদ দিয়ে খুব দ্রুত লগারিদমিক O(log n) সময়ে উত্তর খুঁজে পাওয়া যায়। ১৬টি উপাদানের একটি সাজানো অ্যারোতে ২৬ মানটি খুঁজতে লিনিয়ার স্ক্যানে ১৬টি ধাপ লাগলেও বাইনারি সার্চে মাত্র ৪টি অনুসন্ধানে ১২ নম্বর ইনডেক্সে মানটি শনাক্ত হয়। অর্ধেক করার এই মূলনীতিই ডিভাইড-অ্যান্ড-কনকার সর্টিংয়ের ভিত্তি। মার্জ সর্ট অ্যারোকে ভেঙে একক উপাদানে রূপান্তর করে এবং দুটি পয়েন্টার দিয়ে O(n log n) সময়ে তা জোড়া লাগায়। অন্যদিকে কুইক সর্ট একটি পিভটের ওপর ভিত্তি করে ছোট ও বড় মানগুলোকে একই মেমোরির ভেতরে দ্রুত সাজিয়ে দেয়। এই পাঠে বাইনারি সার্চ পয়েন্টার, মার্জ সর্টের ধাপ এবং লোমুতো ও হোয়ার পার্টিশন পদ্ধতি আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Halving Discards Work at Scale',
        bn: 'মূল ধারণা: অর্ধেক করার মাধ্যমে কাজের পরিমাণ কমানো'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your data is sorted, you do not need to scan every element. By comparing against the midpoint, you instantly eliminate half the search space. Repeated division leads to logarithmic efficiency.',
        bn: 'উপাত্ত যখন আগে থেকেই সাজানো থাকে, তখন প্রতিটি উপাদান আলাদা করে দেখার প্রয়োজন হয় না। মাঝখানের মানের সাথে তুলনা করে এক নিমিষেই অর্ধেক খোঁজার এলাকা বাদ দেওয়া যায়। বারবার অর্ধেক করার এই প্রক্রিয়ায় লগারিদমিক গতি নিশ্চিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Binary Search Invariant',
          def: {
            en: 'The mathematical guarantee that the target value must reside within the bounded index range [low, high]',
            bn: 'গাণিতিক নিশ্চয়তা যা নিশ্চিত করে যে কাঙ্ক্ষিত মানটি সর্বদা নির্ধারিত [low, high] ইনডেক্স সীমার ভেতরেই থাকবে'
          }
        },
        {
          term: 'Midpoint Overflow Prevention',
          def: {
            en: 'Calculating mid as low + Math.floor((high - low) / 2) to prevent 32-bit integer overflow bugs caused by (low + high) / 2',
            bn: 'সাধারণ (low + high) / 2 এর তুলনায় ৩২-বিট মেমোরি ওভারফ্লো এড়াতে mid = low + Math.floor((high - low) / 2) সূত্র ব্যবহার করার নিরাপদ নিয়ম'
          }
        },
        {
          term: 'Divide and Conquer',
          def: {
            en: 'An algorithmic paradigm dividing a problem into independent subproblems, solving each recursively, and combining results',
            bn: 'এমন অ্যালগরিদম কৌশল যেখানে একটি সমস্যাকে কয়েকটি ছোট স্বাধীন অংশে ভাগ করে সমাধান শেষে ফলাফল একত্র করা হয়'
          }
        },
        {
          term: 'Partitioning Mechanics',
          def: {
            en: 'Rearranging an array around a chosen pivot value such that all smaller items precede the pivot and all larger items succeed it',
            bn: 'একটি পিভট মান নির্ধারণ করে তার চেয়ে ছোট সব মান বামে এবং বড় সব মান ডানে সাজিয়ে নেওয়ার প্রক্রিয়া'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'halving-algorithms-table',
      text: {
        en: 'Core Halving Algorithms Compared',
        bn: 'অর্ধেকীকরণ ভিত্তিক প্রধান অ্যালগরিদমসমূহের তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Key Characteristics of Binary Search, Merge Sort, and Quick Sort',
        bn: 'বাইনারি সার্চ, মার্জ সর্ট এবং কুইক সর্টের মূল বৈশিষ্ট্যসমূহ'
      },
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
        { en: 'Space Complexity', bn: 'মেমোরি খরচ' },
        { en: 'Key Mechanism', bn: 'কাজের মূল পদ্ধতি' }
      ],
      rows: [
        [
          { en: 'Binary Search', bn: 'বাইনারি সার্চ' },
          { en: 'O(log n)', bn: 'O(log n)' },
          { en: 'O(1) auxiliary', bn: 'O(1) সহায়ক মেমোরি' },
          { en: 'Probes midpoint of sorted array, halving candidate bounds each step', bn: 'মাঝের মান দেখে প্রতি পদক্ষেপে খোঁজার পরিসর অর্ধেক করে' }
        ],
        [
          { en: 'Merge Sort', bn: 'মার্জ সর্ট' },
          { en: 'O(n log n)', bn: 'O(n log n)' },
          { en: 'O(n) auxiliary buffer', bn: 'O(n) অতিরিক্ত বাফার' },
          { en: 'Splits array down to single items, zipping sorted runs back together', bn: 'অ্যারে ভেঙে একক মান বানিয়ে ক্রমানুসারে জোড়া লাগায়' }
        ],
        [
          { en: 'Quick Sort', bn: 'কুইক সর্ট' },
          { en: 'O(n log n) avg (O(n^2) worst)', bn: 'গড়ে O(n log n) (খারাপ ক্ষেত্রে O(n^2))' },
          { en: 'O(log n) stack frames', bn: 'O(log n) স্ট্যাক ফ্রেম' },
          { en: 'Partitions array in place around a pivot, recursing on subarrays', bn: 'পিভট নির্বাচন করে নিজস্ব স্থানে মানগুলো দুই ভাগে সাজায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Binary Search on 16 Elements for Target 26',
        bn: 'চালনাযোগ্য সিমুলেশন: ১৬টি উপাদানে ২৬ খোঁজার জন্য বাইনারি সার্চ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script demonstrates binary search across a sorted array of 16 even integers. Seeking target value 26 requires only 4 probes to locate index 12:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১৬টি জোড় সংখ্যার একটি সাজানো অ্যারোতে বাইনারি সার্চ চালায়। ২৬ মানটি খুঁজতে মাত্র ৪টি তুলনার মাধ্যমে ১২ নম্বর ইনডেক্সে কাঙ্ক্ষিত মান পাওয়া যায়:'
      }
    },
    {
      type: 'code',
      id: 'binary-search-sim',
      lang: 'javascript',
      code: `// Binary Search Invariant Simulation on 16 Elements
const sortedList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];
const targetValue = 26;

let low = 0;
let high = sortedList.length - 1;
let probes = 0;
let resolvedIndex = -1;

while (low <= high) {
  probes += 1;
  // Overflow-safe midpoint arithmetic
  const mid = low + Math.floor((high - low) / 2);
  
  if (sortedList[mid] === targetValue) {
    resolvedIndex = mid;
    break;
  } else if (sortedList[mid] < targetValue) {
    low = mid + 1; // Discard left half
  } else {
    high = mid - 1; // Discard right half
  }
}

console.log('Total elements in the sorted dataset:', sortedList.length);
// -> Total elements in the sorted dataset: 16

console.log('Target value being located:', targetValue);
// -> Target value being located: 26

console.log('Total comparison probes required:', probes);
// -> Total comparison probes required: 4

console.log('Final array index where target resides:', resolvedIndex);
// -> Final array index where target resides: 12`,
      caption: {
        en: 'Figure 1: Searching 16 sorted items for value 26 resolves at index 12 in only 4 probes, demonstrating logarithmic scaling',
        bn: 'চিত্র ১: ১৬টি সাজানো উপাদানে ২৬ খুঁজতে মাত্র ৪টি অনুসন্ধানে ১২ নম্বর ইনডেক্সে লক্ষ্য অর্জিত হয়'
      }
    },
    {
      type: 'heading',
      id: 'partitioning-guide',
      text: {
        en: 'Lomuto versus Hoare Partition Schemes',
        bn: 'লোমুতো বনাম হোয়ার পার্টিশন পদ্ধতির তুলনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Quick Sort relies on partition subroutines to arrange elements. The choice between Lomuto and Hoare partitioning dictates swap frequency and branch efficiency.',
        bn: 'কুইক সর্ট উপাত্ত ভাগ করতে পার্টিশন সাবরুটিনের ওপর নির্ভর করে। লোমুতো বা হোয়ার পার্টিশনের পছন্দের ওপর অদলবদলের সংখ্যা ও প্রসেসর ব্রাঞ্চের গতি নির্ধারিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lomuto Partition',
          def: {
            en: 'Single-direction pointer traversal that is simple to implement but performs roughly three times more element swaps',
            bn: 'একমুখী পয়েন্টার দিয়ে উপাদান সাজানোর সহজ পদ্ধতি যা বুঝতে সহজ হলেও তুলনামূলকভাবে প্রায় তিন গুণ বেশি অদলবদল ঘটায়'
          }
        },
        {
          term: 'Hoare Partition',
          def: {
            en: 'Bidirectional pointer traversal marching inward from both ends, minimizing swaps and performing better on duplicate keys',
            bn: 'দুই প্রান্ত থেকে ভেতরের দিকে অগ্রসর হওয়া দক্ষ পদ্ধতি যা অদলবদলের সংখ্যা কমিয়ে দ্রুততম সময়ে পার্টিশন সম্পন্ন করে'
          }
        },
        {
          term: 'Median-of-Three Pivot Selection',
          def: {
            en: 'Choosing the median of first, middle, and last elements as pivot to defend against worst-case quadratic degradation on sorted arrays',
            bn: 'প্রথম, মাঝের ও শেষের মানের মধ্যমা নিয়ে পিভট বাছাই করা, যা সাজানো উপাত্তে কুইক সর্টকে কোয়াড্রাটিক পতনের হাত থেকে বাঁচায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'halving-probes-count-ex',
      kind: 'mcq',
      topic: 'Probes required in 16-element binary search simulation',
      question: {
        en: 'According to our binary search simulation across 16 elements for value 26, how many comparison probes were executed to find index 12?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ১৬টি উপাদানে ২৬ মানটি খুঁজে পেতে ১২ নম্বর ইনডেক্সে পৌঁছাতে মোট কয়টি তুলনা বা প্রোব লেগেছিল?'
      },
      options: [
        {
          en: '4 comparison probes',
          bn: '৪টি তুলনা'
        },
        {
          en: '16 probes',
          bn: '১৬টি প্রোব'
        },
        {
          en: '8 probes',
          bn: '৮টি প্রোব'
        },
        {
          en: '1 probe',
          bn: '১টি প্রোব'
        }
      ],
      answer: 0,
      hint: {
        en: 'log2(16) equals exactly 4 probes.',
        bn: '১৬ এর log2 এর মান ঠিক ৪।'
      },
      explanation: {
        en: 'Because 2^4 = 16, halving the 16-element array repeatedly resolves the target in at most 4 steps.',
        bn: 'যেহেতু ২^৪ = ১৬, তাই প্রতি পদক্ষেপে এলাকা অর্ধেক হওয়ায় সর্বোচ্চ ৪টি অনুসন্ধানেই সমাধান মেলে।'
      }
    },
    {
      id: 'halving-overflow-safety-ex',
      kind: 'mcq',
      topic: 'Why (low + high) / 2 causes integer overflow',
      question: {
        en: 'Why is mid = low + Math.floor((high - low) / 2) preferred over mid = Math.floor((low + high) / 2) in systems with fixed-width integers?',
        bn: 'নির্দিষ্ট বিটের পূর্ণসংখ্যা থাকা সিস্টেমে Math.floor((low + high) / 2)-এর বদলে low + Math.floor((high - low) / 2) ব্যবহার করা কেন নিরাপদ?'
      },
      options: [
        {
          en: 'In large arrays, adding (low + high) can exceed the maximum 32-bit signed integer limit (2147483647), overflowing into a negative number and causing an out-of-bounds error',
          bn: 'বিশাল অ্যারোর ক্ষেত্রে (low + high) যোগফল ৩২-বিট সাইনড ইন্টিজারের সর্বোচ্চ সীমা (২১৪৭৪৮৩৬৪৭) পার হয়ে ঋণাত্মক সংখ্যায় পরিণত হতে পারে এবং এরর তৈরি করতে পারে'
        },
        {
          en: 'Division by 2 is illegal in compiled languages',
          bn: 'কম্পাইলারে ২ দিয়ে ভাগ নিষিদ্ধ'
        },
        {
          en: 'Subtraction executes five times faster than addition in CPUs',
          bn: 'বিয়োগ যোগের চেয়ে পাঁচ গুণ দ্রুত'
        },
        {
          en: 'The formula only works on odd numbers',
          bn: 'সূত্রটি কেবল বিজোড় সংখ্যায় চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Adding two large positive indices can overflow integer ranges.',
        bn: 'দুটি বিশাল ইতিবাচক ইনডেক্স যোগ করলে সর্বোচ্চ সীমা উপচে ঋণাত্মক হওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'If low and high are both very large integers, summing them overflows into a negative value, breaking index boundaries.',
        bn: 'low এবং high দুটি অনেক বড় সংখ্যা হলে তাদের যোগফল মেমোরি সীমা ছাড়িয়ে ঋণাত্মক হয়ে যেতে পারে, কিন্তু বিয়োগের মাধ্যমে দূরত্ব বের করলে সেই ঝুঁকি থাকে না।'
      }
    },
    {
      id: 'halving-hoare-advantage-ex',
      kind: 'mcq',
      topic: 'Advantage of Hoare partition over Lomuto partition',
      question: {
        en: 'What is the primary practical advantage of Hoare partition scheme over Lomuto partition scheme in Quick Sort?',
        bn: 'কুইক সর্টে লোমুতো পদ্ধতির তুলনায় হোয়ার (Hoare) পার্টিশন পদ্ধতির প্রধান ব্যবহারিক সুবিধা কী?'
      },
      options: [
        {
          en: 'Hoare partition uses two converging pointers from both ends, performing approximately three times fewer element swaps on average than Lomuto',
          bn: 'হোয়ার পার্টিশন দুই প্রান্ত থেকে ভেতরের দিকে চলে, যার ফলে লোমুতোর তুলনায় গড়ে প্রায় তিন গুণ কম উপাদান অদলবদল (swap) করতে হয়'
        },
        {
          en: 'Hoare partition uses quantum computing circuits',
          bn: 'হোয়ার পার্টিশন কোয়ান্টাম কম্পিউটার ব্যবহার করে'
        },
        {
          en: 'Hoare partition works without choosing any pivot',
          bn: 'এতে কোনো পিভট লাগে না'
        },
        {
          en: 'Lomuto partition is deprecated in all compilers',
          bn: 'লোমুতো সব কম্পাইলারে নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Opposing pointers minimize memory write swaps.',
        bn: 'দুই দিক থেকে মান মেলালে অদলবদলের সংখ্যা অনেক কমে যাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'By scanning inwards from both ends, Hoare only swaps when both pointers find out-of-place items, dramatically reducing write cycles.',
        bn: 'দুই প্রান্ত থেকে একসাথে স্ক্যান করে কেবল ভুল স্থানে থাকা জোড়াগুলো বদল করায় হোয়ার পার্টিশনে মেমোরি লেখার কাজ অনেক কম হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-halving-vein',
    title: {
      en: 'The Halving Vein Quiz',
      bn: 'দি হালভিং ভেইন কুইজ'
    },
    questions: [
      {
        id: 'q-halving-precondition',
        kind: 'mcq',
        topic: 'Mandatory precondition for Binary Search',
        question: {
          en: 'What invariant precondition must strictly hold before executing Binary Search on an array?',
          bn: 'কোনো অ্যারোতে বাইনারি সার্চ চালানোর পূর্বে কোন মৌলিক পূর্বশর্তটি অবশ্যই পূরণ হতে হবে?'
        },
        options: [
          {
            en: 'The elements in the array must be sorted in monotonic order (ascending or descending)',
            bn: 'অ্যারোর উপাদানগুলো অবশ্যই সুনির্দিষ্ট ক্রমে (ছোট থেকে বড় বা বড় থেকে ছোট) সাজানো থাকতে হবে'
          },
          {
            en: 'The array must contain exactly a power-of-two number of items',
            bn: 'উপাদান সংখ্যা দুইয়ের ঘাত হতে হবে'
          },
          {
            en: 'All elements must be positive whole numbers',
            bn: 'সব উপাদান ধনাত্মক হতে হবে'
          },
          {
            en: 'The array must be stored inside a binary heap structure',
            bn: 'অ্যারেটি বাইনারি হিপে থাকতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Halving logic relies on ordered values to know which side to discard.',
          bn: 'কোন পাশটি বাদ দিতে হবে তা জানতে উপাত্ত আগে থেকেই সাজানো থাকা আবশ্যক।'
        },
        explanation: {
          en: 'Binary search deduces whether the target lies to the left or right of the midpoint based strictly on monotonicity.',
          bn: 'মাঝের মানের সাপেক্ষে লক্ষ্য কোন পাশে আছে তা বুঝতে অ্যারোটি আগে থেকে সাজানো থাকা অপরিহার্য।'
        }
      },
      {
        id: 'q-halving-mergesort-guarantee',
        kind: 'mcq',
        topic: 'Worst-case guarantee of Merge Sort',
        question: {
          en: 'Why is Merge Sort preferred in mission-critical environments where latency variance must be strictly controlled?',
          bn: 'যেসব গুরুত্বপূর্ণ সিস্টেমে রেসপন্স টাইমের নিশ্চয়তা কঠোরভাবে দরকার, সেখানে কেন মার্জ সর্ট বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'Merge Sort guarantees O(n log n) execution time under every possible input arrangement, never degrading to quadratic O(n^2)',
            bn: 'মার্জ সর্ট যেকোনো ইনপুটের ক্ষেত্রে নিশ্চিত O(n log n) সময় দেয় এবং কখনোই কোয়াড্রাটিক O(n^2)-এ নেমে আসে না'
          },
          {
            en: 'Merge Sort does not use computer memory',
            bn: 'মার্জ সর্টে মেমোরি লাগে না'
          },
          {
            en: 'Merge Sort runs in constant O(1) time',
            bn: 'মার্জ সর্ট O(1) সময়ে চলে'
          },
          {
            en: 'Merge Sort automatically corrects data corruptions',
            bn: 'মার্জ সর্ট ডাটা ত্রুটি ঠিক করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Guaranteed O(n log n) even on worst-case inputs.',
          bn: 'সবচেয়ে খারাপ পরিস্থিতিতেও নিশ্চিত n log n গতির কথা ভাবুন।'
        },
        explanation: {
          en: 'Because Merge Sort unconditionally divides arrays in half, its recursion tree depth is strictly log2(n), guaranteeing O(n log n) always.',
          bn: 'মার্জ সর্ট ইনপুট যাই হোক সবসময় সমান দুই ভাগে ভাগ করে, ফলে এর ট্রি গভীরতা সর্বদা log2(n) থাকে এবং O(n log n) নিশ্চিত হয়।'
        }
      },
      {
        id: 'q-halving-quicksort-cache-perf',
        kind: 'mcq',
        topic: 'Why Quicksort outperforms Mergesort in practice',
        question: {
          en: 'Why does well-implemented Quick Sort often run significantly faster than Merge Sort on real hardware despite having identical O(n log n) average complexity?',
          bn: 'গড়ে উভয়ের কমপ্লেক্সিটি O(n log n) হওয়া সত্ত্বেও বাস্তব হার্ডওয়্যারে কুইক সর্ট কেন মার্জ সর্টের চেয়ে অনেক দ্রুত কাজ করে?'
        },
        options: [
          {
            en: 'Quick Sort operates in place with sequential memory access patterns, demonstrating superior CPU cache locality and eliminating buffer allocation overhead',
            bn: 'কুইক সর্ট নিজস্ব স্থানে পর্যায়ক্রমিক মেমোরিতে কাজ করে, যার ফলে প্রসেসর ক্যাশ মেমোরির সর্বোচ্চ ব্যবহার হয় এবং অতিরিক্ত বাফার তৈরির ঝামেলা থাকে না'
          },
          {
            en: 'Quick Sort uses graphics card processors',
            bn: 'কুইক সর্ট গ্রাফিক্স কার্ড ব্যবহার করে'
          },
          {
            en: 'Merge Sort runs code inside a virtual machine',
            bn: 'মার্জ সর্ট ভার্চুয়াল মেশিনে চলে'
          },
          {
            en: 'Quick Sort skips sorting odd numbers',
            bn: 'কুইক সর্ট বিজোড় সংখ্যা সর্ট করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'In-place linear scans maximize CPU cache hit rates.',
          bn: 'একই স্থানে মেমোরি স্ক্যান করায় সিপিইউ ক্যাশের উচ্চ দক্ষতার কথা ভাবুন।'
        },
        explanation: {
          en: 'In-place partitioning reads sequential RAM addresses smoothly into hardware cache lines without allocating secondary arrays.',
          bn: 'কুইক সর্টে অতিরিক্ত বাফারে ডাটা কপি করতে হয় না এবং মেমোরির কাছাকাছি স্থানে কাজ হওয়ায় সিপিইউ ক্যাশ অনেক দ্রুত উত্তর দেয়।'
        }
      },
      {
        id: 'q-halving-binary-search-failure',
        kind: 'mcq',
        topic: 'Binary search termination on missing element',
        question: {
          en: 'How does Binary Search detect that a requested target value does not exist anywhere in the array?',
          bn: 'কাঙ্ক্ষিত মানটি অ্যারোর কোথাও নেই—বাইনারি সার্চ কীভাবে তা শনাক্ত করে থামে?'
        },
        options: [
          {
            en: 'The search window inverts, with low exceeding high (low > high), terminating the loop and returning -1',
            bn: 'খোঁজার উইন্ডোটি উল্টে গিয়ে low-এর মান high-কে ছাড়িয়ে যায় (low > high), যা নির্দেশ করে মানটি কোথাও নেই এবং লুপ থেমে -১ ফেরত দেয়'
          },
          {
            en: 'The browser raises an unhandled fatal error',
            bn: 'ব্রাউজার এরর দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'The array length drops to zero',
            bn: 'অ্যারোর আকার শূন্য হয়ে যায়'
          },
          {
            en: 'It continues checking the same element forever',
            bn: 'এটি অনন্তকাল একই মান চেক করতে থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'When the interval [low, high] collapses and low > high, the space is empty.',
          bn: 'যখন [low, high] পরিসর খালি হয়ে low এর মান high এর চেয়ে বড় হয়ে যায়।'
        },
        explanation: {
          en: 'When low crosses past high, the candidate interval [low, high] becomes empty, proving the element is absent.',
          bn: 'low যখন high-কে অতিক্রম করে, তখন খোঁজার এলাকা শূন্য হয়ে যায় যা প্রমাণ করে উপাদানটি অ্যারোতে উপস্থিত নেই।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-counting-territory',
    tech: 'sorting',
    title: {
      en: 'The Counting Territory: Non-Comparison Linear Sorts',
      bn: 'দি কাউন্টিং টেরিটরি: নন-কম্প্যারিজন লিনিয়ার সর্ট'
    }
  }
};
