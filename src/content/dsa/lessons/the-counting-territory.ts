import type { Lesson } from '../../../lib/types';

export const countingTerritoryLesson: Lesson = {
  slug: 'the-counting-territory',
  tech: 'sorting',
  title: {
    en: 'The Counting Territory: Non-Comparison Linear Sorts',
    bn: 'দি কাউন্টিং টেরিটরি: নন-কম্প্যারিজন লিনিয়ার সর্ট'
  },
  summary: {
    en: 'Comparison-based sorts are bound by the mathematical law of Omega(n log n). Non-comparison sorting breaks free from this lower bound by abandoning element-to-element comparisons entirely. When sorting discrete integers across a bounded numerical range, Counting Sort uses direct array indexing to tally value frequencies. For an input of 8 integers with a maximum value of 5, the algorithm allocates a frequency table of 6 slots, computing prefix sums to place elements into a sorted array across 14 total steps. When numerical ranges expand too wide for memory, Radix Sort chains multiple counting sort passes digit by digit. Bucket Sort partitions continuous floating-point values into localized intervals. This lesson teaches frequency histogram indexing, prefix sum transformations, stable output construction, and digit-wise radix decomposition.',
    bn: 'তুলনাভিত্তিক সর্টিং অ্যালগরিদমগুলো গাণিতিকভাবে Omega(n log n) সীমার মধ্যে বন্দি। নন-কম্প্যারিজন সর্টিং দুটি উপাদানের মধ্যে তুলনা করার নিয়ম পুরোপুরি বাদ দিয়ে এই গাণিতিক নিম্নসীমা ভেঙে ফেলে। সীমিত পরিসরের পূর্ণসংখ্যার ক্ষেত্রে কাউন্টিং সর্ট সরাসরি অ্যারোর ইনডেক্সিং কাজে লাগিয়ে প্রতিটি মানের পুনরাবৃত্তি গণনা করে। উদাহরণস্বরূপ সর্বোচ্চ মান ৫ বিশিষ্ট ৮টি পূর্ণসংখ্যার একটি ইনপুটে অ্যালগরিদমটি ৬টি ঘরের একটি ফ্রিকোয়েন্সি টেবিল তৈরি করে এবং প্রিফিক্স সাম হিসাব করে সর্বমোট ১৪টি পদক্ষেপে নিখুঁতভাবে উপাত্ত সাজিয়ে দেয়। যখন সংখ্যার পরিসর মেমোরির তুলনায় অনেক বড় হয়ে যায়, তখন রেডিক্স সর্ট অংক ধরে ধরে ক্রমানুসারে কাউন্টিং সর্ট চালায়। এছাড়া ফ্লোটিং পয়েন্ট সংখ্যার জন্য বাকেট সর্ট ব্যবহার করা হয়। এই পাঠে হিস্টোগ্রাম গণনা, প্রিফিক্স সাম পদ্ধতি, স্থিতিশীল আউটপুট তৈরি এবং রেডিক্স সর্টের ধাপ আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Indexing Beats Comparing',
        bn: 'মূল ধারণা: তুলনার চেয়ে ইনডেক্সিংয়ের মাধ্যমে দ্রুত সমাধান'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your algorithm cannot afford the n-log-n sorting tax, you must avoid comparison questions. Instead of comparing two numbers, you treat values as memory indices and count occurrences directly.',
        bn: 'আপনার অ্যালগরিদম যখন n-log-n সময়ের খরচ বহন করতে পারে না, তখন উপাদানের মধ্যকার তুলনা পুরোপুরি পরিহার করতে হয়। দুটি সংখ্যার মধ্যে ছোট-বড় যাচাই না করে সংখ্যার মানকে মেমোরির ইনডেক্স হিসেবে ধরে সরাসরি গণনা করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Counting Sort',
          def: {
            en: 'A non-comparison sorting algorithm that counts occurrences of each distinct integer key, running in O(n + k) time',
            bn: 'একটি তুলনা-বিহীন সর্টিং অ্যালগরিদম যা প্রতিটি ভিন্ন পূর্ণসংখ্যার পুনরাবৃত্তি গুনে O(n + k) সময়ে সম্পূর্ণ কাজ শেষ করে'
          }
        },
        {
          term: 'Prefix Sum Array',
          def: {
            en: 'A cumulative frequency array where each index stores the exact starting position of that value in the final sorted array',
            bn: 'একটি ক্রমযোজিত গণনার অ্যারে যার প্রতিটি ইনডেক্স নির্দেশ করে চূড়ান্ত সাজানো অ্যারোতে ওই মানের উপাদানগুলো কোন অবস্থানে বসবে'
          }
        },
        {
          term: 'Radix Sort',
          def: {
            en: 'A multi-pass sorting algorithm that processes numbers digit by digit from least to most significant using stable counting sorts',
            bn: 'এমন একটি বহু-ধাপ বিশিষ্ট সর্ট যা স্থিতিশীল কাউন্টিং সর্ট ব্যবহার করে সংখ্যার ডান দিক থেকে বামে অংক ধরে ধরে সাজায়'
          }
        },
        {
          term: 'Bucket Sort',
          def: {
            en: 'Distributing elements uniformly across an array of buckets, sorting each bucket locally, and concatenating results',
            bn: 'উপাত্তকে সুষমভাবে কতগুলো বাকেটে ভাগ করে প্রতিটি বাকেট আলাদাভাবে সাজিয়ে শেষে জোড়া লাগানোর পদ্ধতি'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'non-comparison-table',
      text: {
        en: 'Non-Comparison Sorting Family Matrix',
        bn: 'নন-কম্প্যারিজন সর্টিং অ্যালগরিদমসমূহের তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Counting Sort, Radix Sort, and Bucket Sort',
        bn: 'কাউন্টিং সর্ট, রেডিক্স সর্ট এবং বাকেট সর্টের প্রযুক্তিগত বৈশিষ্ট্য'
      },
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
        { en: 'Space Complexity', bn: 'মেমোরি খরচ' },
        { en: 'Ideal Input Domain', bn: 'উপযুক্ত ইনপুট ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Counting Sort', bn: 'কাউন্টিং সর্ট' },
          { en: 'O(n + k)', bn: 'O(n + k)' },
          { en: 'O(n + k)', bn: 'O(n + k)' },
          { en: 'Integers with small bounded range k comparable to n', bn: 'ছোট পরিসরের পূর্ণসংখ্যা যেখানে k এর মান n এর কাছাকাছি' }
        ],
        [
          { en: 'Radix Sort (LSD)', bn: 'রেডিক্স সর্ট (LSD)' },
          { en: 'O(d * (n + b))', bn: 'O(d * (n + b))' },
          { en: 'O(n + b)', bn: 'O(n + b)' },
          { en: 'Fixed-width integers, strings, or IP network addresses', bn: 'নির্দিষ্ট দৈর্ঘ্যের পূর্ণসংখ্যা, স্ট্রিং বা নেটওয়ার্ক আইপি অ্যাড্রেস' }
        ],
        [
          { en: 'Bucket Sort', bn: 'বাকেট সর্ট' },
          { en: 'O(n + k) average', bn: 'গড়ে O(n + k)' },
          { en: 'O(n + k)', bn: 'O(n + k)' },
          { en: 'Floating-point values distributed uniformly across [0, 1)', bn: '[০, ১) সীমার মধ্যে সুষমভাবে বিন্যস্ত ভগ্নাংশ সংখ্যা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Counting Sort on 8 Integers in Range 0 to 5',
        bn: 'চালনাযোগ্য সিমুলেশন: ০ থেকে ৫ পরিসরের ৮টি পূর্ণসংখ্যায় কাউন্টিং সর্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script executes Counting Sort on an array of 8 integers bounded by a maximum value of 5. Using a table of 6 slots, it processes all elements in 14 operations:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি সর্বোচ্চ ৫ মান বিশিষ্ট ৮টি সংখ্যার ওপর কাউন্টিং সর্ট চালায়। ৬টি ঘরের ফ্রিকোয়েন্সি টেবিল ব্যবহার করে এটি মোট ১৪টি পদক্ষেপে কাজটি সম্পন্ন করে:'
      }
    },
    {
      type: 'code',
      id: 'counting-sort-sim',
      lang: 'javascript',
      code: `// Counting Sort Execution on 8 Integers in Range 0 to 5
const inputData = [4, 2, 2, 5, 1, 0, 4, 2];
const n = inputData.length; // 8 items
const maxInteger = 5;       // Range k = 5
const bucketSlots = maxInteger + 1; // 6 slots: indices 0, 1, 2, 3, 4, 5

// Step 1: Count occurrences
const counts = new Array(bucketSlots).fill(0);
for (let i = 0; i < n; i++) {
  counts[inputData[i]]++;
}

// Step 2: Compute prefix sums
for (let i = 1; i < bucketSlots; i++) {
  counts[i] += counts[i - 1];
}

// Step 3: Populate output array walking backwards (stable)
const output = new Array(n);
for (let i = n - 1; i >= 0; i--) {
  const val = inputData[i];
  counts[val]--;
  output[counts[val]] = val;
}

const totalOps = n + bucketSlots;

console.log('Total input items being sorted:', n);
// -> Total input items being sorted: 8

console.log('Maximum integer value defining range upper bound:', maxInteger);
// -> Maximum integer value defining range upper bound: 5

console.log('Slots allocated in frequency counting array:', bucketSlots);
// -> Slots allocated in frequency counting array: 6

console.log('Total operations across array and counting slots:', totalOps);
// -> Total operations across array and counting slots: 14`,
      caption: {
        en: 'Figure 1: Sorting 8 elements with a maximum value of 5 uses 6 frequency slots to finish in 14 total steps',
        bn: 'চিত্র ১: সর্বোচ্চ ৫ মান সম্পন্ন ৮টি উপাদান সাজাতে ৬টি স্লট নিয়ে মোট ১৪টি পদক্ষেপে সম্পূর্ণ সাজানো সম্পন্ন হয়'
      }
    },
    {
      type: 'heading',
      id: 'radix-mechanics-guide',
      text: {
        en: 'How Radix Sort Scales to Large Numbers',
        bn: 'রেডিক্স সর্ট কীভাবে বিশাল সংখ্যা নিয়ন্ত্রণ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When numbers range into billions, Counting Sort fails because allocating a billion-element array exhausts memory. Radix Sort solves this by breaking large numbers into smaller base units like bytes or digits.',
        bn: 'সংখ্যার মান যখন কোটি ছাড়িয়ে যায়, তখন কাউন্টিং সর্ট অকেজো হয়ে পড়ে কারণ শত কোটি মেমোরি স্লট বরাদ্দ করা অসম্ভব। রেডিক্স সর্ট বিশাল সংখ্যাগুলোকে ছোট ছোট বাইট বা অংকে ভাগ করে নিয়ে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Least Significant Digit (LSD)',
          def: {
            en: 'Sorting from the rightmost digit towards the leftmost digit, relying strictly on stable passes to preserve order',
            bn: 'ডান পাশের একক স্থানীয় অংক থেকে শুরু করে বামে অগ্রসর হওয়া, যা ক্রম ঠিক রাখতে স্থিতিশীলতার ওপর নির্ভর করে'
          }
        },
        {
          term: 'Byte-Wise Radix Sorting',
          def: {
            en: 'Treating 32-bit integers as four 8-bit bytes (base 256), sorting 4 billion values in exactly 4 passes',
            bn: '৩২-বিট ইন্টিজারকে ৪টি ৮-বিট বাইট (বেস ২৫৬) ধরে মাত্র ৪টি পাসের মাধ্যমে শত কোটি সংখ্যা লিনিয়ার সময়ে সাজানো'
          }
        },
        {
          term: 'Stability Requirement in Radix',
          def: {
            en: 'Because subsequent digit passes must not disrupt equal keys sorted in earlier passes, the inner sort must be stable',
            bn: 'পরের অংক সাজানোর সময় আগের অংকের সাজানো ক্রম যাতে নষ্ট না হয়, সেজন্য ভেতরের কাউন্টিং সর্টটি স্থিতিশীল হওয়া বাধ্যতামূলক'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'counting-ops-calc-ex',
      kind: 'mcq',
      topic: 'Operations in Counting Sort simulation',
      question: {
        en: 'According to our Counting Sort simulation for 8 elements with a maximum value of 5, what was the combined operation count (n + k slots)?',
        bn: 'আমাদের কাউন্টিং সর্ট সিমুলেশন অনুযায়ী সর্বোচ্চ ৫ মান বিশিষ্ট ৮টি উপাদানের জন্য সম্মিলিত অপারেশনের সংখ্যা (n + k স্লট) কত ছিল?'
      },
      options: [
        {
          en: '14 total operations',
          bn: '১৪টি অপারেশন'
        },
        {
          en: '8 operations',
          bn: '৮টি অপারেশন'
        },
        {
          en: '40 operations',
          bn: '৪০টি অপারেশন'
        },
        {
          en: '5 operations',
          bn: '৫টি অপারেশন'
        }
      ],
      answer: 0,
      hint: {
        en: '8 input elements plus 6 frequency slots equals 14 operations.',
        bn: '৮টি ইনপুট উপাদান এবং ৬টি স্লট যোগ করলে ১৪ হয়।'
      },
      explanation: {
        en: 'The algorithm requires n = 8 element reads plus k + 1 = 6 frequency bucket passes, totaling 14 operations.',
        bn: 'অ্যালগরিদমটিতে n = ৮টি উপাদানের জন্য এবং k + ১ = ৬টি স্লটের সমন্বয়ে মোট ১৪টি অপারেশন সম্পন্ন হয়।'
      }
    },
    {
      id: 'counting-backward-loop-ex',
      kind: 'mcq',
      topic: 'Why Counting Sort iterates backwards in the final pass',
      question: {
        en: 'Why must the final placement pass of Counting Sort iterate backwards through the input array (from index n-1 down to 0)?',
        bn: 'কাউন্টিং সর্টের চূড়ান্ত ধাপে উপাদান সাজানোর সময় কেন ইনপুট অ্যারোর পেছনের দিক থেকে (n-১ থেকে ০ পর্যন্ত) লুপ চালাতে হয়?'
      },
      options: [
        {
          en: 'Iterating backwards ensures that duplicate elements preserve their original relative arrival order, making the algorithm stable',
          bn: 'পেছন থেকে লুপ চালালে একই মান একাধিকবার থাকলে তাদের মূল আপেক্ষিক ক্রম অক্ষত থাকে, যার ফলে সর্টটি স্থিতিশীল (stable) হয়'
        },
        {
          en: 'Computer memory cannot read arrays forwards',
          bn: 'কম্পিউটার মেমোরি সামনে থেকে অ্যারে পড়তে পারে না'
        },
        {
          en: 'To make the output sorted in descending order',
          bn: 'বড় থেকে ছোট সাজানোর জন্য'
        },
        {
          en: 'Forward loops cause processor cache corruptions',
          bn: 'সামনে থেকে লুপ চালালে ক্যাশ নষ্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preserving the original relative order requires placing earlier items after later items decrease prefix counters.',
        bn: 'আগে আসা উপাদানকে আগে রাখার জন্য কাউন্টার কমে যাওয়ার সাথে সাথে পেছনের উপাদান আগে বসানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'Decreasing prefix sum counters from the back guarantees that the rightmost duplicate gets the highest slot, preserving stability.',
        bn: 'পেছন থেকে লুপ চালালে ডানের ডুপ্লিকেট মানটি পেছনের স্লটে বসে এবং বামের মানটি আগে বসে, যা স্থিতিশীলতা রক্ষা করে।'
      }
    },
    {
      id: 'counting-range-memory-pitfall-ex',
      kind: 'mcq',
      topic: 'Severe limitation of Counting Sort on wide numerical ranges',
      question: {
        en: 'Why is Counting Sort completely impractical for sorting an array of only 10 elements if one of those elements is the number 2000000000?',
        bn: 'একটি অ্যারোতে মাত্র ১০টি উপাদান থাকলেও তার একটি মান যদি ২০০০০০০০০০ হয়, তবে কেন কাউন্টিং সর্ট ব্যবহার করা অসম্ভব হয়ে পড়ে?'
      },
      options: [
        {
          en: 'Counting Sort requires allocating a frequency array of size k+1, which would consume over 8 gigabytes of RAM to sort only 10 numbers',
          bn: 'কাউন্টিং সর্টে k+১ আকারের ফ্রিকোয়েন্সি অ্যারে তৈরি করতে হয়, যার ফলে মাত্র ১০টি সংখ্যার জন্য ৮ গিগাবাইটেরও বেশি র্যাম অপচয় হবে'
        },
        {
          en: 'Counting Sort cannot handle even numbers',
          bn: 'কাউন্টিং সর্ট জোড় সংখ্যায় কাজ করে না'
        },
        {
          en: 'Large numbers trigger network firewall blocks',
          bn: 'বড় সংখ্যায় ফায়ারওয়াল ব্লক করে'
        },
        {
          en: 'The algorithm only works on prime numbers',
          bn: 'অ্যালগরিদমটি কেবল মৌলিক সংখ্যায় চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Auxiliary memory depends on maximum value k, not just count n.',
        bn: 'মেমোরির খরচ উপাদানের সংখ্যা n-এর ওপর নয়, বরং সর্বোচ্চ মান k-এর ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Because memory space is O(n + k), when range k is vastly larger than n, space overhead becomes disastrously unfeasible.',
        bn: 'কাউন্টিং সর্টে মেমোরি O(n + k) হওয়ায় k এর মান অত্যন্ত বিশাল হলে অকল্পনীয় মেমোরি অপচয় ঘটে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-counting-territory',
    title: {
      en: 'The Counting Territory Quiz',
      bn: 'দি কাউন্টিং টেরিটরি কুইজ'
    },
    questions: [
      {
        id: 'q-counting-escape-lower-bound',
        kind: 'mcq',
        topic: 'How Counting Sort escapes the Omega(n log n) comparison bound',
        question: {
          en: 'Why does Counting Sort run in O(n + k) linear time instead of being constrained by the Omega(n log n) comparison barrier?',
          bn: 'কাউন্টিং সর্ট কেন Omega(n log n) তুলনার বাধার মুখে না পড়ে লিনিয়ার O(n + k) সময়ে কাজ শেষ করতে পারে?'
        },
        options: [
          {
            en: 'It does not compare elements against each other; it uses the actual values directly as array memory indices',
            bn: 'এটি উপাদানগুলোর একটির সাথে আরেকটির কোনো তুলনা করে না; বরং সরাসরি মানগুলোকে অ্যারোর মেমোরি ইনডেক্স হিসেবে ব্যবহার করে'
          },
          {
            en: 'It skips sorting ninety percent of the numbers',
            bn: 'এটি নব্বই শতাংশ সংখ্যা বাদ দিয়ে সাজায়'
          },
          {
            en: 'It runs exclusively on multiple graphics processors',
            bn: 'এটি কেবল গ্রাফিক্স কার্ডে চলে'
          },
          {
            en: 'It uses quantum entanglement registers',
            bn: 'এটি কোয়ান্টাম রেজিস্টার ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Direct indexing eliminates pairwise decision tree comparisons.',
          bn: 'সরাসরি ইনডেক্সিং করার ফলে বাইনারি ডিসিশন ট্রির তুলনার দরকার পড়ে না।'
        },
        explanation: {
          en: 'The Omega(n log n) lower bound strictly applies to algorithms that decide order via comparisons. Indexing bypasses comparisons.',
          bn: 'Omega(n log n) সীমা কেবল তুলনাভিত্তিক পদ্ধতির জন্য প্রযোজ্য। সরাসরি ইনডেক্স ব্যবহার করায় কাউন্টিং সর্ট এই বাউন্ডের আওতামুক্ত।'
        }
      },
      {
        id: 'q-radix-sort-byte-passes',
        kind: 'mcq',
        topic: 'Number of passes in 32-bit byte-wise Radix Sort',
        question: {
          en: 'When implementing a 32-bit integer Radix Sort using base 256 (one byte per pass), exactly how many stable counting passes are required?',
          bn: 'বেস ২৫৬ (প্রতি পাসে এক বাইট) ধরে ৩২-বিট ইন্টিজার রেডিক্স সর্ট বাস্তবায়ন করলে ঠিক কয়টি স্থিতিশীল পাসের প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'Exactly 4 passes, because a 32-bit integer consists of 4 bytes (32 / 8 = 4)',
            bn: 'ঠিক ৪টি পাস, কারণ ৩২-বিট ইন্টিজারে ৪টি বাইট থাকে (৩২ / ৮ = ৪)'
          },
          {
            en: '256 passes',
            bn: '২৫৬টি পাস'
          },
          {
            en: '32 passes',
            bn: '৩২টি পাস'
          },
          {
            en: '1000 passes',
            bn: '১০০০টি পাস'
          }
        ],
        answer: 0,
        hint: {
          en: '32 bits divided by 8 bits per byte yields 4 passes.',
          bn: '৩২ বিটকে প্রতি বাইটের ৮ বিট দিয়ে ভাগ করলে ৪টি পাস পাওয়া যায়।'
        },
        explanation: {
          en: 'Each byte represents an integer from 0 to 255. Four 8-bit passes cover the entire 32-bit integer range in linear time.',
          bn: 'প্রতিটি বাইট ০ থেকে ২৫৫ পর্যন্ত মান ধারণ করে, ফলে ৪টি পাসের মাধ্যমে পুরো ৩২-বিট সংখ্যা লিনিয়ার সময়ে সাজানো সম্ভব।'
        }
      },
      {
        id: 'q-bucket-sort-distribution',
        kind: 'mcq',
        topic: 'Prerequisite for optimal Bucket Sort performance',
        question: {
          en: 'What input characteristic is required for Bucket Sort to achieve its optimal average O(n) runtime?',
          bn: 'বাকেট সর্টে তার সেরা গড় O(n) সময় পেতে ইনপুট উপাত্তের কোন বৈশিষ্ট্যটি থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'The input values must be distributed uniformly across the range so that buckets receive approximately equal numbers of elements',
            bn: 'ইনপুট উপাত্ত নির্দিষ্ট পরিসরে সুষমভাবে বণ্টিত থাকতে হবে যাতে প্রতিটি বাকেটে প্রায় সমান সংখ্যক উপাদান জমা হয়'
          },
          {
            en: 'All elements must be sorted prior to insertion',
            bn: 'উপাদানগুলো আগেই সাজানো থাকতে হবে'
          },
          {
            en: 'Elements must be powers of two',
            bn: 'উপাদানগুলো দুইয়ের ঘাত হতে হবে'
          },
          {
            en: 'The array must be empty at the beginning',
            bn: 'শুরুতে অ্যারেটি খালি হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Uniform distribution prevents clustering in a single bucket.',
          bn: 'সব উপাদান একটিমাত্র বাকেটে জমা হওয়া ঠেকাতে সুষম বণ্টনের কথা ভাবুন।'
        },
        explanation: {
          en: 'If data clusters heavily into a single bucket, sorting that bucket degrades to quadratic O(n^2). Uniform distribution ensures small bucket sizes.',
          bn: 'সব মান একটিমাত্র বাকেটে জমা হলে তা কোয়াড্রাটিক O(n^2) সময়ে নেমে যায়। সুষম বণ্টন নিশ্চিত করে প্রতিটি বাকেটে খুব কম মান থাকবে।'
        }
      },
      {
        id: 'q-radix-lsd-vs-msd',
        kind: 'mcq',
        topic: 'Difference between LSD and MSD Radix Sort',
        question: {
          en: 'How does Least Significant Digit (LSD) Radix Sort differ fundamentally from Most Significant Digit (MSD) Radix Sort?',
          bn: 'লিস্ট সিগনিফিক্যান্ট ডিজিট (LSD) এবং মোস্ট সিগনিফিক্যান্ট ডিজিট (MSD) রেডিক্স সর্টের মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'LSD processes from right to left across the entire array in iterative passes; MSD processes from left to right, recursively partitioning into sub-buckets',
            bn: 'LSD ডান থেকে বামে পুরো অ্যারো জুড়ে ক্রমানুসারে চলে; আর MSD বাম থেকে ডানে গিয়ে রিকার্সিভভাবে ছোট ছোট সাব-বাকেটে ভাগ করে সাজায়'
          },
          {
            en: 'LSD only works on letters; MSD only works on numbers',
            bn: 'LSD কেবল অক্ষরে চলে আর MSD সংখ্যায়'
          },
          {
            en: 'MSD is an in-place sort that requires zero memory',
            bn: 'MSD-তে কোনো মেমোরি লাগে না'
          },
          {
            en: 'There is no difference between them',
            bn: 'এদের মধ্যে কোনো তফাত নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'LSD iterates iteratively from right to left; MSD recurses from left to right.',
          bn: 'LSD ডান থেকে শুরু করে পুরো সেটে চলে আর MSD বাম থেকে শুরু করে রিকার্শনে যায়।'
        },
        explanation: {
          en: 'LSD works globally across the array from lowest digit to highest. MSD splits into sub-buckets starting from the highest digit, recursing like quicksort.',
          bn: 'LSD পুরো অ্যারোতে ডান থেকে বামে লুপ চালায়, আর MSD বামের বড় অংক থেকে শুরু করে রিকার্সিভভাবে ছোট ছোট অংশে বিভক্ত হয়ে কাজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pointer-workshop',
    tech: 'sorting',
    title: {
      en: 'The Pointer Workshop: Two Pointers & Sliding Windows',
      bn: 'দি পয়েন্টার ওয়ার্কশপ: টু পয়েন্টার ও স্লাইডিং উইন্ডো'
    }
  }
};
