import type { Lesson } from '../../../lib/types';

export const pointerWorkshopLesson: Lesson = {
  slug: 'the-pointer-workshop',
  tech: 'sorting',
  title: {
    en: 'The Pointer Workshop: Two Pointers & Sliding Windows',
    bn: 'দি পয়েন্টার ওয়ার্কশপ: টু পয়েন্টার ও স্লাইডিং উইন্ডো'
  },
  summary: {
    en: 'Two-pointer patterns represent one of the most effective techniques for reducing quadratic nested loops down to linear time complexity. By orchestrating two index pointers across an array, algorithms eliminate entire subproblems without examining non-viable pairs. On a sorted array of 6 elements seeking target sum 13, an opposing pointer strategy converges inwards in only 5 evaluation steps to discover indices 2 and 3. Other foundational pointer techniques include fast-and-slow runner pointers for cycle detection and in-place array deduplication. The sliding window pattern maintains dynamic state across contiguous subarrays by updating boundaries incrementally. This lesson teaches opposing pointer mechanics, fast-and-slow runners, fixed versus dynamic sliding windows, and in-place memory compaction.',
    bn: 'টু-পয়েন্টার কৌশল হলো কোয়াড্রাটিক নেস্টেড লুপকে লিনিয়ার সময়ে নামিয়ে আনার অন্যতম সেরা অ্যালগরিদমিক পদ্ধতি। একটি অ্যারোতে দুটি ইনডেক্স নির্দেশককে সুসংগঠিতভাবে পরিচালনা করে অপ্রয়োজনীয় জোড়াগুলো পরীক্ষা না করেই বাদ দেওয়া যায়। ১৩ যোগফল খোঁজার জন্য ৬টি উপাদানের একটি সাজানো অ্যারোতে দুই প্রান্ত থেকে আসা বিপরীতমুখী পদ্ধতি মাত্র ৫টি পদক্ষেপে ২ এবং ৩ নম্বর ইনডেক্সের সঠিক জোড়াটি শনাক্ত করে। অন্যান্য মৌলিক পদ্ধতির মধ্যে রয়েছে সাইকেল শনাক্তকরণে ফাস্ট-অ্যান্ড-স্লো রানার এবং ডুপ্লিকেট মোছার ইন-প্লেস রিড-রাইট ইনডেক্স। স্লাইডিং উইন্ডো কৌশল উপাত্তের সীমানা ক্রমান্বয়ে বাড়িয়ে বা কমিয়ে সাব-অ্যারোর স্টেট নিখুঁতভাবে রক্ষা করে। এই পাঠে বিপরীতমুখী ট্রাভার্সাল, ফাস্ট-স্লো মেথড এবং স্লাইডিং উইন্ডোর প্রয়োগ বিস্তারিত আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Coordinated Array Traversal',
        bn: 'মূল ধারণা: একাধিক পয়েন্টারের সমন্বিত অনুসন্ধান'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When searching for pairs in an array, brute-force nested loops inspect every combination in quadratic time. By coordinating two pointers moving across the array, you eliminate candidates linearly.',
        bn: 'অ্যারোতে কোনো জোড়া মান খোঁজার সময় সাধারণ নেস্টেড লুপ প্রতিটি সম্ভাব্য জোড়া পরীক্ষা করে কোয়াড্রাটিক সময় নষ্ট করে। দুটি পয়েন্টারকে একসাথে সুনির্দিষ্ট নিয়মে পরিচালনা করলে লিনিয়ার সময়েই সমাধান পাওয়া যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Opposing Two Pointers',
          def: {
            en: 'Starting pointers at opposite ends of a sorted array and moving them inward based on comparison evaluations',
            bn: 'সাজানো অ্যারোর দুই বিপরীত প্রান্ত থেকে দুটি পয়েন্টার শুরু করে তুলনার ওপর ভিত্তি করে ভেতরের দিকে এগিয়ে নেওয়ার পদ্ধতি'
          }
        },
        {
          term: 'Fast and Slow Pointers (Tortoise & Hare)',
          def: {
            en: 'Moving two pointers through a sequence at differing speeds to detect cyclic loops or locate midpoints in a single pass',
            bn: 'ভিন্ন গতিতে দুটি পয়েন্টার চালিয়ে চক্রাকার লুপ শনাক্ত করা অথবা এক পাসেই কোনো তালিকার ঠিক মাঝখানের মান খুঁজে বের করা'
          }
        },
        {
          term: 'Sliding Window Pattern',
          def: {
            en: 'Maintaining a contiguous range defined by left and right pointers, expanding or contracting boundaries to satisfy constraints',
            bn: 'বাম ও ডান পয়েন্টার দিয়ে একটি চলমান পরিসীমা বজায় রাখা এবং শর্ত পূরণের জন্য উইন্ডোটি ছোট বা বড় করা'
          }
        },
        {
          term: 'In-Place Array Compaction',
          def: {
            en: 'Using a read pointer to scan and a write pointer to overwrite valid elements, modifying arrays in O(1) auxiliary space',
            bn: 'একটি রিড পয়েন্টার দিয়ে স্ক্যান করে অন্য একটি রাইট পয়েন্টার দিয়ে সঠিক মান বসিয়ে O(1) মেমরিতে কাজ শেষ করার কৌশল'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'pointer-patterns-table',
      text: {
        en: 'Core Two-Pointer Archetypes Compared',
        bn: 'টু-পয়েন্টারের প্রধান প্যাটার্নসমূহের তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Overview of Two-Pointer Paradigms and Typical Applications',
        bn: 'টু-পয়েন্টার পদ্ধতির বিভিন্ন রূপ এবং তাদের বাস্তব ব্যবহার'
      },
      head: [
        { en: 'Pattern Name', bn: 'প্যাটার্নের নাম' },
        { en: 'Pointer Dynamics', bn: 'পয়েন্টারের গতিপ্রকৃতি' },
        { en: 'Classic Canonical Problem', bn: 'আদর্শ ক্লাসিক্যাল সমস্যা' }
      ],
      rows: [
        [
          { en: 'Converging (Opposing)', bn: 'বিপরীতমুখী (Converging)' },
          { en: 'Left starts at 0, Right starts at n-1; march inward', bn: 'বাম শুরু হয় ইনডেক্স ০ থেকে, ডান n-১ এ; ভেতরের দিকে আসে' },
          { en: 'Two Sum on sorted array, container with most water, palindrome checks', bn: 'সাজানো অ্যারোতে টু-সাম, সবচেয়ে বেশি পানি ধারণ ক্ষমতা, প্যালিন্ড্রোম যাচাই' }
        ],
        [
          { en: 'Fast & Slow Runners', bn: 'ফাস্ট ও স্লো রানার' },
          { en: 'Slow advances 1 step; Fast advances 2 steps each cycle', bn: 'স্লো চলে ১ ধাপ; ফাস্ট চলে প্রতি পদক্ষেপে ২ ধাপ' },
          { en: 'Linked list cycle detection (Floyd algorithm), finding list middle', bn: 'লিংকড লিস্টের সাইকেল শনাক্তকরণ (ফ্লয়েডের অ্যালগরিদম), মাঝের নোড নির্ণয়' }
        ],
        [
          { en: 'Sliding Window', bn: 'স্লাইডিং উইন্ডো' },
          { en: 'Right pointer expands window; Left pointer contracts to restore validity', bn: 'ডান পয়েন্টার উইন্ডো বড় করে; বাম পয়েন্টার ছোট করে শর্ত রক্ষা করে' },
          { en: 'Longest substring without repeating characters, maximum sum subarray of size k', bn: 'ডুপ্লিকেটহীন দীর্ঘতম সাবস্ট্রিং, নির্দিষ্ট k আকারের সর্বোচ্চ যোগফল' }
        ],
        [
          { en: 'Read / Write Pointers', bn: 'রিড / রাইট পয়েন্টার' },
          { en: 'Read pointer scans; Write pointer tracks last valid unique slot', bn: 'রিড পয়েন্টার খোঁজে; রাইট পয়েন্টার শেষ সঠিক ইনডেক্স ধরে রাখে' },
          { en: 'Remove duplicates from sorted array in place, moving zeroes to end', bn: 'অ্যারে থেকে ডুপ্লিকেট সরানো, শূন্যগুলোকে পেছনে ঠেলে দেওয়া' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Opposing Pointers on 6 Elements for Target 13',
        bn: 'চালনাযোগ্য সিমুলেশন: ৬টি উপাদানে ১৩ যোগফল খোঁজার জন্য টু-পয়েন্টার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates opposing pointers on a sorted array of 6 elements. Seeking a sum of 13 converges inward in 5 steps to locate indices 2 and 3 (values 5 and 8):',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৬টি উপাদানের একটি সাজানো অ্যারোতে বিপরীতমুখী পয়েন্টার চালায়। ১৩ যোগফল পেতে এটি মাত্র ৫টি পদক্ষেপে ২ এবং ৩ নম্বর ইনডেক্সের মান (৫ এবং ৮) শনাক্ত করে:'
      }
    },
    {
      type: 'code',
      id: 'two-pointers-sim',
      lang: 'javascript',
      code: `// Two-Pointer Opposing Convergence Simulation
const sortedInput = [1, 3, 5, 8, 11, 15];
const targetSum = 13;

let left = 0;
let right = sortedInput.length - 1;
let evaluatedSteps = 0;
let resolvedIndices = null;

while (left < right) {
  evaluatedSteps += 1;
  const currentSum = sortedInput[left] + sortedInput[right];
  
  if (currentSum === targetSum) {
    resolvedIndices = [left, right];
    break;
  } else if (currentSum < targetSum) {
    left += 1;  // Sum too small, advance left pointer to larger value
  } else {
    right -= 1; // Sum too large, retreat right pointer to smaller value
  }
}

console.log('Total elements in the sorted collection:', sortedInput.length);
// -> Total elements in the sorted collection: 6

console.log('Target pair sum being resolved:', targetSum);
// -> Target pair sum being resolved: 13

console.log('Total comparison steps required to converge:', evaluatedSteps);
// -> Total comparison steps required to converge: 5

console.log('Matched array indices forming target sum:', resolvedIndices);
// -> Matched array indices forming target sum: [ 2, 3 ]`,
      caption: {
        en: 'Figure 1: Opposing pointers converge across 6 sorted elements to find target sum 13 at indices 2 and 3 in only 5 evaluation steps',
        bn: 'চিত্র ১: ৬টি সাজানো উপাদানে ১৩ যোগফল পেতে বিপরীতমুখী পয়েন্টার মাত্র ৫টি পদক্ষেপে ২ এবং ৩ নম্বর ইনডেক্স খুঁজে বের করে'
      }
    },
    {
      type: 'heading',
      id: 'sliding-window-guide',
      text: {
        en: 'Fixed versus Dynamic Sliding Windows',
        bn: 'নির্দিষ্ট বনাম পরিবর্তনশীল স্লাইডিং উইন্ডো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Sliding window algorithms avoid recomputing overlapping sub-arrays from scratch. When the window slides right, subtract the departing left element and add the arriving right element in constant time.',
        bn: 'স্লাইডিং উইন্ডো অ্যালগরিদম একই উপাত্ত বারবার নতুন করে যোগ করার অপচয় রোধ করে। উইন্ডোটি যখন এক ঘর ডানে যায়, তখন পেছনের বাদ পড়া মানটি বিয়োগ করে এবং নতুন ঢোকা মানটি যোগ করে O(1) সময়ে আপডেট করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Fixed Window Size k',
          def: {
            en: 'A window of fixed length k sliding across an array in O(n) total time with O(1) updates per transition',
            bn: 'নির্দিষ্ট k দৈর্ঘ্যের উইন্ডো যা পুরো অ্যারোতে O(n) সময়ে চলে এবং প্রতি ধাপে O(1) সময়ে হিসাব আপডেট করে'
          }
        },
        {
          term: 'Dynamic Window Expansion & Contraction',
          def: {
            en: 'Advancing right pointer to include elements, and contracting left pointer when constraints are violated',
            bn: 'ডান পয়েন্টার বাড়িয়ে নতুন মান গ্রহণ করা এবং শর্ত ভঙ্গ হলে বাম পয়েন্টার এগিয়ে নিয়ে সীমানা ছোট করা'
          }
        },
        {
          term: 'Window State Hash Map',
          def: {
            en: 'Using a small auxiliary frequency map to verify character or element uniqueness inside the active window boundaries',
            bn: 'উইন্ডোর ভেতরের উপাদানগুলোর উপস্থিতি বা স্বাতন্ত্র্য ট্র্যাক করার জন্য একটি সহায়ক হ্যাশ ম্যাপ ব্যবহার করা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pointer-convergence-steps-ex',
      kind: 'mcq',
      topic: 'Evaluation steps in 6-element two-sum simulation',
      question: {
        en: 'According to our simulation of 6 sorted elements seeking target sum 13, how many comparison steps were needed to find indices 2 and 3?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ৬টি সাজানো উপাদানে ১৩ যোগফল খুঁজতে ২ এবং ৩ নম্বর ইনডেক্স শনাক্ত করতে কয়টি পদক্ষেপ লেগেছিল?'
      },
      options: [
        {
          en: '5 comparison steps',
          bn: '৫টি পদক্ষেপ'
        },
        {
          en: '36 steps',
          bn: '৩৬টি পদক্ষেপ'
        },
        {
          en: '1 step',
          bn: '১টি পদক্ষেপ'
        },
        {
          en: '13 steps',
          bn: '১৩টি পদক্ষেপ'
        }
      ],
      answer: 0,
      hint: {
        en: 'The simulation executed 5 iterations before matching.',
        bn: 'সিমুলেশনটি উত্তর খুঁজে পাওয়ার আগে ৫ বার লুপ সম্পন্ন করেছিল।'
      },
      explanation: {
        en: 'The pointers adjust across 5 steps: (1+15=16), (1+11=12), (3+11=14), (3+8=11), and finally (5+8=13) at indices 2 and 3.',
        bn: 'পয়েন্টার ৫টি ধাপে অগ্রসর হয়ে (১+১৫=১৬), (১+১১=১২), (৩+১১=১৪), (৩+৮=১১), এবং অবশেষে ২ ও ৩ নম্বর ইনডেক্সে (৫+৮=১৩) পৌঁছায়।'
      }
    },
    {
      id: 'pointer-why-sorted-matters-ex',
      kind: 'mcq',
      topic: 'Why sorted order is required for opposing pointers',
      question: {
        en: 'Why does the opposing two-pointer technique for Two Sum strictly require the input array to be sorted?',
        bn: 'টু-সাম সমস্যায় বিপরীতমুখী টু-পয়েন্টার পদ্ধতি ব্যবহার করতে কেন ইনপুট অ্যারে আগে থেকে সাজানো থাকা অপরিহার্য?'
      },
      options: [
        {
          en: 'Monotonic sorted order guarantees which direction to move: if sum is too small, moving left rightward increases it; if sum is too large, moving right leftward decreases it',
          bn: 'সাজানো থাকলে নিশ্চিত জানা যায় কোন পয়েন্টার সরাতে হবে: যোগফল ছোট হলে বাম পয়েন্টার ডানে নিয়ে যোগফল বাড়ানো যায়, আর বড় হলে ডান পয়েন্টার বামে এনে যোগফল কমানো যায়'
        },
        {
          en: 'Unsorted arrays cause computer monitors to flicker',
          bn: 'অবিন্যস্ত অ্যারোতে মনিটর কাঁপে'
        },
        {
          en: 'Browsers automatically delete unsorted pointers',
          bn: 'ব্রাউজার পয়েন্টার মুছে দেয়'
        },
        {
          en: 'The technique only works on prime numbers',
          bn: 'পদ্ধতিটি কেবল মৌলিক সংখ্যায় কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Monotonicity provides deterministic direction to adjust the sum.',
        bn: 'ছোট থেকে বড় সাজানো থাকলেই কেবল নিশ্চিতভাবে যোগফল বাড়ানো বা কমানো সম্ভব।'
      },
      explanation: {
        en: 'Without sorted monotonicity, incrementing or decrementing pointers would unpredictably increase or decrease the sum, destroying correctness.',
        bn: 'সাজানো না থাকলে পয়েন্টার সরালে যোগফল বাড়বে না কমবে তা নিশ্চিত হওয়া যায় না, ফলে সঠিক ফলাফল পাওয়া অসম্ভব হয়।'
      }
    },
    {
      id: 'pointer-fast-slow-cycle-ex',
      kind: 'mcq',
      topic: 'Floyd cycle detection algorithm mechanics',
      question: {
        en: 'In Floyd Tortoise and Hare algorithm, why is the fast pointer guaranteed to meet the slow pointer if a cycle exists?',
        bn: 'ফ্লয়েডের কচ্ছপ ও খরগোশ অ্যালগরিদমে সাইকেল বা লুপ থাকলে কেন দ্রুতগামী পয়েন্টারটি ধীরগতির পয়েন্টারের সাথে নিশ্চিতভাবে মিলিত হয়?'
      },
      options: [
        {
          en: 'Inside the loop, the relative distance between the fast pointer (advancing by 2) and the slow pointer (advancing by 1) decreases by exactly 1 on every step until collision',
          bn: 'লুপের ভেতরে প্রতি পদক্ষেপে ফাস্ট পয়েন্টার (২ ধাপ এগিয়ে) ও স্লো পয়েন্টারের (১ ধাপ এগিয়ে) মধ্যবর্তী দূরত্ব ঠিক ১ করে কমে, ফলে তাদের সংঘর্ষ নিশ্চিত'
        },
        {
          en: 'The operating system forces both pointers to share the same variable',
          bn: 'অপারেটিং সিস্টেম দুজনকে একই ভেরিয়েবল দেয়'
        },
        {
          en: 'The slow pointer stops moving once inside a cycle',
          bn: 'লুপে ঢুকলে স্লো পয়েন্টার থেমে যায়'
        },
        {
          en: 'Cycles in memory are limited to ten elements',
          bn: 'মেমরির লুপ ১০ উপাদানে সীমাবদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'The relative distance between them decreases by 1 on every iteration.',
        bn: 'প্রতিটি পদক্ষেপে তাদের মধ্যকার আপেক্ষিক ব্যবধান ১ করে কমে আসার কথা ভাবুন।'
      },
      explanation: {
        en: 'Because fast closes the gap by 1 node per iteration (2 - 1 = 1), it cannot leap over the slow pointer, ensuring an eventual collision.',
        bn: 'যেহেতু প্রতি পদক্ষেপে ফাস্ট পয়েন্টার ব্যবধান ঠিক ১ ঘর কমায় (২ - ১ = ১), তাই সে স্লো পয়েন্টারকে না ছুঁয়ে পার হতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-pointer-workshop',
    title: {
      en: 'The Pointer Workshop Quiz',
      bn: 'দি পয়েন্টার ওয়ার্কশপ কুইজ'
    },
    questions: [
      {
        id: 'q-pointer-sliding-window-complexity',
        kind: 'mcq',
        topic: 'Time complexity of sliding window with two pointers',
        question: {
          en: 'What is the overall time complexity of a dynamic sliding window algorithm over an array of size n, where the right pointer expands and the left pointer contracts?',
          bn: 'n আকারের একটি অ্যারোতে ডান পয়েন্টার বাড়িয়ে এবং বাম পয়েন্টার কমিয়ে পরিচালিত একটি ডায়নামিক স্লাইডিং উইন্ডোর সার্বিক টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(n) linear time, because both the left pointer and the right pointer traverse each index at most once across the entire process',
            bn: 'O(n) লিনিয়ার সময়, কারণ পুরো প্রক্রিয়ায় বাম এবং ডান উভয় পয়েন্টার প্রতিটি ইনডেক্স সর্বোচ্চ একবারই অতিক্রম করে'
          },
          {
            en: 'O(n^2) quadratic time because of nested while loops',
            bn: 'ভেতরের লুপের কারণে O(n^2) সময়'
          },
          {
            en: 'O(log n) logarithmic time',
            bn: 'O(log n) লগারিদমিক সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) কনস্ট্যান্ট সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each pointer moves forward at most n times, totaling at most 2n pointer movements.',
          bn: 'প্রতিটি পয়েন্টার সর্বোচ্চ n বার সামনে এগোতে পারে, ফলে মোট পদক্ষেপ সর্বোচ্চ ২n।'
        },
        explanation: {
          en: 'Although the inner loop adjusts the left pointer, left and right both move monotonically forward. Total moves cannot exceed 2n, proving O(n).',
          bn: 'যদিও একটি লুপের ভেতর আরেকটি লুপ থাকে, তবুও দুটি পয়েন্টারই কেবল সামনের দিকে এগোয় এবং কেউ পেছায় না, তাই মোট কাজ সর্বোচ্চ ২n = O(n)।'
        }
      },
      {
        id: 'q-pointer-in-place-dedupe',
        kind: 'mcq',
        topic: 'In-place deduplication pointer roles',
        question: {
          en: 'When removing duplicate values in place from a sorted array in O(1) extra space, what are the distinct roles of the two pointers?',
          bn: 'অতিরিক্ত মেমোরি ছাড়া একটি সাজানো অ্যারো থেকে ডুপ্লিকেট মান মুছে ফেলতে দুটি পয়েন্টারের আলাদা ভূমিকা কী থাকে?'
        },
        options: [
          {
            en: 'The fast read pointer scans through every element; the slow write pointer records the position where the next unique element must be written',
            bn: 'দ্রুতগামী রিড পয়েন্টার পুরো অ্যারে স্ক্যান করে; আর ধীরগতির রাইট পয়েন্টার নির্দেশ করে পরবর্তী নতুন অনন্য মানটি কোন স্থানে বসবে'
          },
          {
            en: 'Both pointers swap elements randomly',
            bn: 'উভয় পয়েন্টার দৈবভাবে মান অদলবদল করে'
          },
          {
            en: 'One pointer deletes files while the other opens them',
            bn: 'একটি পয়েন্টার ফাইল মুছে অন্যটি খোলে'
          },
          {
            en: 'Pointers cannot modify arrays in place',
            bn: 'পয়েন্টার নিজস্ব স্থানে পরিবর্তন করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'One scans (reads), the other tracks the placement of unique items (writes).',
          bn: 'একজন পড়ে নতুন মান খোঁজে এবং অন্যজন লেখার ঘর নির্ধারণ করে।'
        },
        explanation: {
          en: 'The slow pointer maintains the boundary of unique elements, advancing only when the fast pointer discovers an element distinct from the last unique item.',
          bn: 'স্লো পয়েন্টার সাজানো অনন্য উপাদানের সীমানা ঠিক রাখে, আর ফাস্ট পয়েন্টার নতুন কোনো মান খুঁজে পেলেই কেবল স্লো পয়েন্টার এগিয়ে তা সেখানে লিখে দেয়।'
        }
      },
      {
        id: 'q-pointer-fixed-window-update',
        kind: 'mcq',
        topic: 'Updating running sum in a fixed sliding window of size k',
        question: {
          en: 'When a fixed sliding window of size k advances one step to the right, how is the current window sum updated in O(1) time?',
          bn: 'নির্দিষ্ট k আকারের একটি স্লাইডিং উইন্ডো এক ঘর ডানে সরলে কীভাবে O(1) সময়ে উইন্ডোর নতুন যোগফল নির্ণয় করা হয়?'
        },
        options: [
          {
            en: 'Subtract the element departing from the left boundary and add the new element arriving at the right boundary',
            bn: 'বাম প্রান্ত থেকে বাদ পড়ে যাওয়া উপাদানটি বিয়োগ করে এবং ডান প্রান্তে নতুন আসা উপাদানটি যোগ করে'
          },
          {
            en: 'Sum all k elements from scratch on every transition',
            bn: 'প্রতি পদক্ষেপে শুরু থেকে k টি উপাদান আবার যোগ করে'
          },
          {
            en: 'Multiply the entire window sum by k',
            bn: 'যোগফলকে k দিয়ে গুণ করে'
          },
          {
            en: 'Reset the window sum to zero',
            bn: 'যোগফল শূন্য করে দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Add new, subtract old: newSum = oldSum - arr[i - k] + arr[i].',
          bn: 'নতুন মান যোগ এবং পুরোনো মান বিয়োগের কথা ভাবুন।'
        },
        explanation: {
          en: 'Rather than recomputing k elements (O(k)), updating sum via windowSum = windowSum - arr[left] + arr[right] requires only constant time (O(1)).',
          bn: 'সব মান নতুন করে যোগ না করে কেবল পুরোনোটি বাদ দিয়ে এবং নতুনটি যুক্ত করে কনস্ট্যান্ট সময়ে (O(1)) কাজ শেষ করা যায়।'
        }
      },
      {
        id: 'q-pointer-two-sum-sorted-vs-unsorted',
        kind: 'mcq',
        topic: 'Tradeoff of two pointers vs hash map for Two Sum',
        question: {
          en: 'Why might an engineer choose a Hash Map over Two Pointers when solving the Two Sum problem on an unsorted array?',
          bn: 'একটি অবিন্যস্ত অ্যারোতে টু-সাম সমস্যার ক্ষেত্রে একজন প্রকৌশলী কেন টু-পয়েন্টারের চেয়ে হ্যাশ ম্যাপ বেছে নিতে পারেন?'
        },
        options: [
          {
            en: 'A Hash Map achieves O(n) time directly without sorting; using Two Pointers on unsorted data requires sorting first, costing O(n log n) time',
            bn: 'হ্যাশ ম্যাপ সর্টিং ছাড়াই সরাসরি O(n) সময়ে উত্তর দেয়; কিন্তু অবিন্যস্ত ডেটায় টু-পয়েন্টার চালাতে আগে সর্ট করতে হয় যা O(n log n) সময় নেয়'
          },
          {
            en: 'Two Pointers cannot run on computers with 64-bit processors',
            bn: 'টু-পয়েন্টার ৬৪-বিট প্রসেসরে চলে না'
          },
          {
            en: 'Hash Maps consume zero memory bytes',
            bn: 'হ্যাশ ম্যাপে কোনো মেমোরি লাগে না'
          },
          {
            en: 'Sorting arrays modifies system date settings',
            bn: 'সর্ট করলে সিস্টেমের তারিখ বদলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hash map trades O(n) memory for O(n) time on unsorted data.',
          bn: 'অবিন্যস্ত ডেটায় সর্ট করার n log n সময় বাঁচাতে অতিরিক্ত মেমোরি দিয়ে হ্যাশ ম্যাপ ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Hash map achieves linear time by storing complements in O(n) space. Two pointers requires sorting in O(n log n) time first.',
          bn: 'হ্যাশ ম্যাপ অতিরিক্ত মেমোরি ব্যবহার করে সরাসরি লিনিয়ার সময়ে মান খুঁজে দেয়, যেখানে টু-পয়েন্টার ব্যবহার করতে আগে সর্টিংয়ের বাড়তি খরচ দিতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-grand-measure',
    tech: 'sorting',
    title: {
      en: 'The Grand Measure: Benchmarking, Cache Locality & Hardware Reality',
      bn: 'দি গ্র্যান্ড মেজার: বেঞ্চমার্কিং, ক্যাশ লোকালিটি ও হার্ডওয়্যার বাস্তবতা'
    }
  }
};
