import type { Lesson } from '../../../lib/types';

export const theMonotonePierLesson: Lesson = {
  slug: 'the-monotone-pier',
  tech: 'stacks',
  title: {
    en: 'Monotonic Stack — Next Greater Element and Histogram Areas',
    bn: 'মনোটোনিক স্ট্যাক: পরবর্তী বৃহত্তর উপাদান এবং হিস্টোগ্রাম'
  },
  summary: {
    en: 'Searching for the next greater or smaller element across an array typically costs quadratic O(n^2) time with brute-force nested loops. The Monotonic Stack optimizes this pattern to linear O(n) time by maintaining elements in strictly monotonic (increasing or decreasing) order. When a new element arrives, smaller candidates are popped and resolved immediately. We prove the amortized O(1) per-element complexity and demonstrate implementations for Next Greater Element and Daily Temperatures.',
    bn: 'ব্রুট-ফোর্স নেস্টেড লুপ দিয়ে কোনো অ্যারের প্রতিটি উপাদানের পরবর্তী বৃহত্তর বা ক্ষুদ্রতর উপাদান খুঁজতে চতুর্ঘাতী O(n^2) সময় লাগে। মনোটোনিক স্ট্যাক উপাদানগুলোকে কঠোরভাবে একমুখী (ক্রমবর্ধমান বা হ্রাসমান) রেখে এই প্যাটার্নকে রৈখিক O(n) সময়ে অপ্টিমাইজ করে। নতুন উপাদান আসার সাথে সাথে ছোট মানগুলো পপ হয়ে তাৎক্ষণিক উত্তর পেয়ে যায়। আমরা প্রতি উপাদানে অ্যামর্টাইজড O(1) প্রমাণ করি এবং নেক্সট গ্রেটার এলিমেন্ট ও ডেইলি টেম্পারেচারের কোড বিশ্লেষণ করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-minimum-cartel',
    tech: 'stacks',
    title: {
      en: 'Min-Stack — Constant-Time Extremal Queries and Auxiliary Tracking',
      bn: 'মিন-স্ট্যাক: ধ্রুবক সময়ে সর্বনিম্ন মান নির্ণয় এবং সহায়ক ট্র্যাকিং'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'monotonic-stack-paradigm',
      text: {
        en: 'The Monotonic Stack Paradigm: Eliminating Quadratic Scans',
        bn: 'মনোটোনিক স্ট্যাকের ধারণা: চতুর্ঘাতী স্ক্যান দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent query in algorithmic problems asks: for every element in an array, what is the first element to its right that is strictly greater than itself? A naive solution inspects every pair of elements using nested loops, which takes O(n^2) quadratic time. For an array of 100,000 items, this requires 10,000,000,000 operations, causing immediate CPU timeouts.',
        bn: 'অ্যালগরিদমের একটি সাধারণ প্রশ্ন হলো: অ্যারের প্রতিটি উপাদানের জন্য তার ডানপাশে অবস্থিত প্রথম বৃহত্তর উপাদানটি কোনটি? সাধারণ পদ্ধতিতে নেস্টেড লুপ দিয়ে প্রতিটি উপাদান জোড়া পরীক্ষা করতে চতুর্ঘাতী O(n^2) সময় লাগে। ১00,000 উপাদানের একটি অ্যারেতে এর জন্য ১0,000,000,000 অপারেশন করতে হয়, যা সিপিইউ টাইমআউট ঘটায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Monotonic Stack solves this problem in strictly linear O(n) time. By enforcing a structural invariant where the values referenced by the stack are strictly decreasing from bottom to top, the stack acts as a waiting room for unresolved queries. As soon as a larger element arrives, it resolves all smaller waiting elements in a single sweep.',
        bn: 'একটি মনোটোনিক স্ট্যাক নিশ্চিতভাবে রৈখিক O(n) সময়ে এই সমস্যার সমাধান দেয়। স্ট্যাকের ভেতরের মানগুলোকে নিচ থেকে উপরে কঠোরভাবে হ্রাসমান ক্রমে রেখে এটি অনিষ্পন্ন প্রশ্নগুলোর জন্য একটি অপেক্ষাগার হিসেবে কাজ করে। যখনই একটি বড় সংখ্যা আসে, তখনই এটি অপেক্ষমাণ সমস্ত ছোট সংখ্যাকে এক পদক্ষেপে নিষ্পত্তি করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'monotonic-stack',
          def: {
            en: 'A stack whose stored elements strictly maintain an increasing or decreasing order from bottom to top.',
            bn: 'একটি স্ট্যাক যার সংরক্ষিত উপাদানগুলো নিচ থেকে উপরে কঠোরভাবে ক্রমবর্ধমান বা হ্রাসমান ক্রম বজায় রাখে।'
          }
        },
        {
          term: 'next-greater-element',
          def: {
            en: 'For each element in an array, finding the first element to its right with a greater value, or returning -1 if none exists.',
            bn: 'অ্যারের প্রতিটি উপাদানের জন্য তার ডানপাশে অবস্থিত প্রথম বৃহত্তর মানটি খুঁজে বের করা।'
          }
        },
        {
          term: 'amortized-linear-time',
          def: {
            en: 'An algorithmic proof where each element is pushed once and popped at most once, bounding total runtime strictly to O(n).',
            bn: 'এমন একটি প্রমাণ যেখানে প্রতিটি উপাদান ঠিক একবার পুশ এবং সর্বোচ্চ একবার পপ হয়, যা মোট সময় নিশ্চিতভাবে O(n) এ সীমাবদ্ধ রাখে।'
          }
        },
        {
          term: 'histogram-boundary',
          def: {
            en: 'Using a monotonic stack to determine the left and right boundaries where a given bar remains the minimum height.',
            bn: 'একটি নির্দিষ্ট স্তম্ভ কোন সীমানা পর্যন্ত সর্বনিম্ন উচ্চতা বজায় রাখে তা মনোটোনিক স্ট্যাক দিয়ে নির্ণয় করা।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'stack'
    },
    {
      type: 'heading',
      id: 'next-greater-mechanics',
      text: {
        en: 'The Next Greater Element Algorithm Step-by-Step',
        bn: 'নেক্সট গ্রেটার এলিমেন্ট অ্যালগরিদমের ধাপসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To track distances or update output arrays directly, the stack stores array indices rather than raw values. When inspecting nums[i], we compare it with the value at the top of the stack. If nums[i] is greater, we pop that index and record nums[i] as its next greater element. We repeat this until the top is greater than or equal to nums[i], then push index i.',
        bn: 'দূরত্ব পরিমাপ করতে বা ফলাফলের অ্যারে সরাসরি আপডেট করতে স্ট্যাকে মানের বদলে অ্যারের ইনডেক্স রাখা হয়। nums[i] পরিদর্শনের সময় আমরা এটিকে স্ট্যাকের শীর্ষে থাকা ইনডেক্সের মানের সাথে তুলনা করি। যদি nums[i] বড় হয়, তবে আমরা সেই ইনডেক্সটি পপ করে তার পরবর্তী বৃহত্তর মান হিসেবে nums[i] লিখে রাখি। শীর্ষের মানটি বড় বা সমান না হওয়া পর্যন্ত এটি চলতে থাকে, তারপর ইনডেক্স i পুশ করা হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Index i', bn: 'ইনডেক্স i' },
        { en: 'Value nums[i]', bn: 'মান nums[i]' },
        { en: 'Stack Operations', bn: 'স্ট্যাক অপারেশন' },
        { en: 'Result Array State', bn: 'ফলাফল অ্যারের অবস্থা' }
      ],
      rows: [
        [
          { en: '0', bn: '০' },
          { en: '2', bn: '২' },
          { en: 'Push index 0 -> Stack [0]', bn: 'ইনডেক্স ০ পুশ -> স্ট্যাক [০]' },
          { en: '[-1, -1, -1, -1, -1]', bn: '[-১, -১, -১, -১, -১]' }
        ],
        [
          { en: '1', bn: '১' },
          { en: '1', bn: '১' },
          { en: '1 < 2, push index 1 -> Stack [0, 1]', bn: '১ < ২, ইনডেক্স ১ পুশ -> স্ট্যাক [০, ১]' },
          { en: '[-1, -1, -1, -1, -1]', bn: '[-১, -১, -১, -১, -১]' }
        ],
        [
          { en: '2', bn: '২' },
          { en: '2', bn: '২' },
          { en: 'Pop 1 (res[1]=2), push 2 -> Stack [0, 2]', bn: '১ পপ (res[১]=২), ২ পুশ -> স্ট্যাক [০, ২]' },
          { en: '[-1, 2, -1, -1, -1]', bn: '[-১, ২, -১, -১, -১]' }
        ],
        [
          { en: '3', bn: '৩' },
          { en: '4', bn: '৪' },
          { en: 'Pop 2 (res[2]=4), pop 0 (res[0]=4), push 3', bn: '২ পপ (res[২]=৪), ০ পপ (res[০]=৪), ৩ পুশ' },
          { en: '[4, 2, 4, -1, -1]', bn: '[৪, ২, ৪, -১, -১]' }
        ],
        [
          { en: '4', bn: '৪' },
          { en: '3', bn: '৩' },
          { en: '3 < 4, push index 4 -> Stack [3, 4]', bn: '৩ < ৪, ইনডেক্স ৪ পুশ -> স্ট্যাক [৩, ৪]' },
          { en: '[4, 2, 4, -1, -1]', bn: '[৪, ২, ৪, -১, -১]' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'monotonic-stack-impl',
      text: {
        en: 'Executable Monotonic Stack Implementation',
        bn: 'মনোটোনিক স্ট্যাকের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements Next Greater Elements and the Daily Temperatures problem. In Daily Temperatures, we calculate the number of days you have to wait after each day to get a warmer temperature.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি নেক্সট গ্রেটার এলিমেন্ট এবং ডেইলি টেম্পারেচার সমস্যা বাস্তবায়ন করে। ডেইলি টেম্পারেচারে আমরা হিসাব করি প্রতিটি দিনের পর আরও উষ্ণ তাপমাত্রার জন্য কত দিন অপেক্ষা করতে হবে।'
      }
    },
    {
      type: 'code',
      code: `function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = []; // Stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

const arr = [2, 1, 2, 4, 3];
const res = nextGreaterElements(arr);
console.log('Input array:', arr.join(', '));
// Output: Input array: 2, 1, 2, 4, 3
console.log('Next Greater Elements:', res.join(', '));
// Output: Next Greater Elements: 4, 2, 4, -1, -1

function dailyTemperatures(temps) {
  const n = temps.length;
  const waitDays = new Array(n).fill(0);
  const stack = []; // Stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const prevIdx = stack.pop();
      waitDays[prevIdx] = i - prevIdx;
    }
    stack.push(i);
  }

  return waitDays;
}

const temps = [73, 74, 75, 71, 69, 72, 76, 73];
const days = dailyTemperatures(temps);
console.log('Temperatures:', temps.join(', '));
// Output: Temperatures: 73, 74, 75, 71, 69, 72, 76, 73
console.log('Days until warmer:', days.join(', '));
// Output: Days until warmer: 1, 1, 4, 2, 1, 1, 0, 0`
    },
    {
      type: 'heading',
      id: 'histogram-and-stock-spans',
      text: {
        en: 'Production Extensions: Stock Spans and Histogram Rectangles',
        bn: 'বাস্তব প্রয়োগ: স্টক স্প্যান এবং হিস্টোগ্রামে বৃহত্তম আয়তক্ষেত্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The monotonic stack pattern extends far beyond simple next greater queries. In financial trading platforms, it calculates the online stock span: the number of consecutive prior days where a stock price was below or equal to today. In geometry and image processing, it calculates the Largest Rectangle in a Histogram in linear O(n) time by maintaining an increasing stack to find the left and right boundary fences for every bar.',
        bn: 'মনোটোনিক স্ট্যাক কেবল নেক্সট গ্রেটার খোঁজার বাইরেও বিস্তৃত। আর্থিক ট্রেডিং সিস্টেমে এটি অনলাইন স্টক স্প্যান নির্ণয় করে: কোনো শেয়ারের মূল্য আগের কতগুলো দিন ধরে আজকের সমান বা কম ছিল। কম্পিউটার গ্রাফিক্স এবং জ্যামিতিতে এটি হিস্টোগ্রামের প্রতিটি স্তম্ভের বাম ও ডান সীমানা খুঁজে রৈখিক O(n) সময়ে বৃহত্তম আয়তক্ষেত্রের ক্ষেত্রফল বের করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Linear time optimization: Monotonic stacks replace nested O(n^2) linear scans with a single O(n) pass over the array.',
          bn: 'রৈখিক অপ্টিমাইজেশন: মনোটোনিক স্ট্যাক নেস্টেড O(n^2) খোঁজাখুঁজি দূর করে মাত্র একবার অ্যারে ঘুরে O(n) সময়ে উত্তর দেয়।'
        },
        {
          en: 'Strict order invariant: Maintaining elements in decreasing order ensures the top element is always the immediate candidate to be resolved.',
          bn: 'কঠোর ক্রম নীতি: উপাদানগুলোকে হ্রাসমান ক্রমে রাখলে স্ট্যাকের শীর্ষ মানটি সর্বদা নিষ্পত্তির প্রথম প্রার্থী হিসেবে থাকে।'
        },
        {
          en: 'Amortized O(1) per item: Because each array index is pushed exactly once and popped at most once, total operations cannot exceed 2n.',
          bn: 'অ্যামর্টাইজড O(1) খরচ: প্রতিটি ইনডেক্স ঠিক একবার পুশ এবং সর্বোচ্চ একবার পপ হয় বলে মোট অপারেশন কোনোভাবেই 2n ছাড়ায় না।'
        },
        {
          en: 'Storing indices: Storing indices in the stack rather than raw numbers enables calculating both distance spans and updating output arrays.',
          bn: 'ইনডেক্স সংরক্ষণ: স্ট্যাকে সংখ্যার বদলে ইনডেক্স রাখলে দূরত্বের ব্যবধান মাপা এবং আউটপুট অ্যারে আপডেট করা সহজ হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'mp-ex1',
      kind: 'mcq',
      topic: 'amortized-complexity-proof',
      question: {
        en: 'Why does the Monotonic Stack algorithm run in O(n) total time despite containing a while loop inside a for loop?',
        bn: 'ফর (for) লুপের ভেতর একটি হোয়াইল (while) লুপ থাকা সত্ত্বেও কেন মনোটোনিক স্ট্যাক অ্যালগরিদম মোট O(n) সময়ে চলে?'
      },
      options: [
        {
          en: 'Every array index is pushed onto the stack exactly once and popped at most once, bounding total operations to 2n',
          bn: 'প্রতিটি অ্যারে ইনডেক্স স্ট্যাকে ঠিক একবার পুশ এবং সর্বোচ্চ একবার পপ হয়, যা মোট অপারেশনকে 2n এ সীমাবদ্ধ রাখে'
        },
        {
          en: 'The compiler unrolls the while loop into single-cycle CPU instructions',
          bn: 'কম্পাইলার হোয়াইল লুপটিকে একক-সাইকেলের সিপিইউ নির্দেশে পরিবর্তন করে দেয়'
        },
        {
          en: 'JavaScript engines skip the while loop whenever n is greater than 100',
          bn: 'n এর মান ১০০ এর বেশি হলে জাভাস্ক্রিপ্ট ইঞ্জিন হোয়াইল লুপটি এড়িয়ে যায়'
        },
        {
          en: 'Because all numbers in the input array are positive integers',
          bn: 'কারণ ইনপুট অ্যারের সমস্ত সংখ্যা কেবল ধনাত্মক পূর্ণসংখ্যা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can an element that has been popped from the stack ever be popped a second time?',
        bn: 'স্ট্যাক থেকে একবার পপ হওয়া উপাদান কি দ্বিতীয়বার আর পপ হতে পারে?'
      },
      explanation: {
        en: 'Since no element can be popped more than once, the while loop executes at most n times across the entire lifetime of the algorithm.',
        bn: 'যেহেতু কোনো উপাদান একবারের বেশি পপ হতে পারে না, তাই সমগ্র অ্যালগরিদমে হোয়াইল লুপটি সব মিলিয়ে সর্বোচ্চ n বার চলে।'
      }
    },
    {
      id: 'mp-ex2',
      kind: 'mcq',
      topic: 'storing-indices-vs-values',
      question: {
        en: 'Why is it standard practice to push array indices onto the monotonic stack rather than raw element values?',
        bn: 'মনোটোনিক স্ট্যাকে সরাসরি উপাদানের মানের বদলে অ্যারের ইনডেক্স পুশ করা কেন স্ট্যান্ডার্ড নিয়ম?'
      },
      options: [
        {
          en: 'Indices allow calculating index distance spans (such as waitDays = i - prevIdx) while values are still directly accessible via nums[idx]',
          bn: 'ইনডেক্স রাখার ফলে দূরত্বের ব্যবধান (যেমন waitDays = i - prevIdx) হিসাব করা যায় এবং nums[idx] দিয়ে মানও সরাসরি পাওয়া যায়'
        },
        {
          en: 'JavaScript arrays cannot store numbers larger than 10',
          bn: 'জাভাস্ক্রিপ্ট অ্যারে ১০ এর চেয়ে বড় সংখ্যা ধারণ করতে পারে না'
        },
        {
          en: 'Raw values cause memory allocation fragmentation in RAM',
          bn: 'সরাসরি মান রাখলে র্যামে মেমোরি ফ্র্যাগমেন্টেশন ঘটে'
        },
        {
          en: 'Indices run 100 times faster than integers in V8',
          bn: 'ভি৮ ইঞ্জিনে ইনডেক্স স্বাভাবিক পূর্ণসংখ্যার চেয়ে ১০০ গুণ দ্রুত চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In Daily Temperatures, we need to know how many days elapsed between temperatures.',
        bn: 'ডেইলি টেম্পারেচারে আমাদের জানতে হয় তাপমাত্রার মাঝে কত দিনের ব্যবধান ছিল।'
      },
      explanation: {
        en: 'Holding indices provides both pieces of information: the position in the array and the value at that position via array lookup.',
        bn: 'ইনডেক্স ধরে রাখলে উভয় তথ্য পাওয়া যায়: অ্যারেতে তার অবস্থান এবং অ্যারে লুকআপ দিয়ে তার মান।'
      }
    },
    {
      id: 'mp-ex3',
      kind: 'mcq',
      topic: 'unresolved-elements-state',
      question: {
        en: 'After the loop completes in the Next Greater Element algorithm, what does it mean if some indices remain in the stack?',
        bn: 'নেক্সট গ্রেটার এলিমেন্ট অ্যালগরিদমে লুপ শেষ হওয়ার পর যদি কিছু ইনডেক্স স্ট্যাকে রয়ে যায়, তবে তার অর্থ কী?'
      },
      options: [
        {
          en: 'Those elements have no strictly greater element to their right in the array, so their answer correctly remains -1',
          bn: 'অ্যারেতে সেই উপাদানগুলোর ডানপাশে তাদের চেয়ে বড় কোনো সংখ্যা নেই, তাই তাদের উত্তর সঠিকভাবে -১ থাকে'
        },
        {
          en: 'The algorithm suffered an unexpected internal crash',
          bn: 'অ্যালগরিদমে কোনো অপ্রত্যাশিত অভ্যন্তরীণ ক্র্যাশ ঘটেছে'
        },
        {
          en: 'The remaining elements are guaranteed to be negative numbers',
          bn: 'অবশিষ্ট উপাদানগুলো নিশ্চিতভাবে ঋণাত্মক সংখ্যা'
        },
        {
          en: 'The stack must be cleared by rebooting the operating system',
          bn: 'অপারেটিং সিস্টেম রিবুট করে স্ট্যাক খালি করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If nobody to your right was taller than you, who is your next greater element?',
        bn: 'আপনার ডানপাশে যদি আপনার চেয়ে লম্বা কেউ না থাকে, তবে আপনার পরবর্তী বৃহত্তর উপাদান কে?'
      },
      explanation: {
        en: 'Because the result array is initialized to -1, unresolved elements left in the stack naturally retain their default value of -1.',
        bn: 'যেহেতু ফলাফল অ্যারে -১ দিয়ে শুরু করা হয়, তাই স্ট্যাকে থাকা অমীমাংসিত উপাদানগুলোর মান স্বাভাবিকভাবেই -১ থেকে যায়।'
      }
    }
  ],
  quiz: {
    id: 'monotone-pier-quiz',
    title: {
      en: 'Monotonic Stack and Linear Scan Optimization Quiz',
      bn: 'মনোটোনিক স্ট্যাক এবং রৈখিক স্ক্যান অপ্টিমাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'mp-q1',
        kind: 'mcq',
        topic: 'monotonic-stack-type',
        question: {
          en: 'To solve the Next Greater Element problem, what type of monotonic stack is maintained?',
          bn: 'নেক্সট গ্রেটার এলিমেন্ট সমস্যা সমাধানের জন্য কোন ধরণের মনোটোনিক স্ট্যাক বজায় রাখা হয়?'
        },
        options: [
          {
            en: 'Monotonic Decreasing Stack: smaller elements are popped when a greater element arrives',
            bn: 'মনোটোনিক হ্রাসমান স্ট্যাক: যখন একটি বড় উপাদান আসে তখন ছোট উপাদানগুলো পপ হয়ে যায়'
          },
          {
            en: 'Monotonic Increasing Stack: larger elements are popped when a smaller element arrives',
            bn: 'মনোটোনিক ক্রমবর্ধমান স্ট্যাক: যখন একটি ছোট উপাদান আসে তখন বড় উপাদানগুলো পপ হয়ে যায়'
          },
          {
            en: 'Random Shuffle Stack',
            bn: 'র্যান্ডম শাফল স্ট্যাক'
          },
          {
            en: 'Alternating Odd-Even Stack',
            bn: 'অল্টারনেটিং জোড়-বিজোড় স্ট্যাক'
          }
        ],
        answer: 0,
        hint: {
          en: 'We want smaller elements waiting on the stack so that a larger newcomer can pop them.',
          bn: 'আমরা চাই ছোট উপাদানগুলো স্ট্যাকে অপেক্ষা করুক যাতে একটি বড় নতুন সংখ্যা তাদের পপ করতে পারে।'
        },
        explanation: {
          en: 'A decreasing stack keeps smaller elements at the top, ready to be resolved by the first strictly greater element that arrives.',
          bn: 'একটি হ্রাসমান স্ট্যাক ছোট উপাদানগুলোকে শীর্ষে রাখে, যাতে প্রথম আসা বৃহত্তর সংখ্যাটি তাদের নিষ্পত্তি করতে পারে।'
        }
      },
      {
        id: 'mp-q2',
        kind: 'mcq',
        topic: 'space-complexity',
        question: {
          en: 'What is the auxiliary space complexity of the monotonic stack algorithm for an array of size n in the worst case?',
          bn: 'সবচেয়ে খারাপ পরিস্থিতিতে n আকারের অ্যারের জন্য মনোটোনিক স্ট্যাক অ্যালগরিদমের মেমোরি খরচ (স্পেস জটিলতা) কত?'
        },
        options: [
          {
            en: 'O(n), occurring when elements are strictly sorted in descending order so no elements are popped until the end',
            bn: 'O(n), যা ঘটে যখন উপাদানগুলো কঠোরভাবে অধঃক্রমে সাজানো থাকে এবং শেষ পর্যন্ত কোনো উপাদান পপ হয় না'
          },
          {
            en: 'O(n^2) quadratic memory',
            bn: 'O(n^2) চতুর্ঘাতী মেমোরি'
          },
          {
            en: 'O(1) strictly zero memory allocation',
            bn: 'O(1) সম্পূর্ণ শূন্য মেমোরি বরাদ্দ'
          },
          {
            en: 'O(n log n) logarithmic factor space',
            bn: 'O(n log n) লগারিদমিক মেমোরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the array [5, 4, 3, 2, 1]: how many elements enter the stack?',
          bn: '[৫, ৪, ৩, ২, ১] অ্যারেটির কথা ভাবুন: কতগুলো উপাদান স্ট্যাকে জমা হবে?'
        },
        explanation: {
          en: 'In a strictly decreasing array, every element enters the stack without popping earlier elements, consuming O(n) space.',
          bn: 'কঠোর হ্রাসমান অ্যারেতে প্রতিটি উপাদান কোনো পপ ছাড়াই স্ট্যাকে জমা হয়, ফলে O(n) মেমোরি ব্যবহৃত হয়।'
        }
      },
      {
        id: 'mp-q3',
        kind: 'mcq',
        topic: 'daily-temperatures-calculation',
        question: {
          en: 'In the Daily Temperatures problem, given temps = [73, 74, 75, 71, 69, 72, 76, 73], how many days must you wait after day 2 (temperature 75) for a warmer day?',
          bn: 'ডেইলি টেম্পারেচার সমস্যায় temps = [৭৩, ৭৪, ৭৫, ৭১, ৬৯, ৭২, ৭৬, ৭৩] দেওয়া থাকলে ২ নম্বর দিনের (তাপমাত্রা ৭৫) পর আরও উষ্ণ দিনের জন্য কত দিন অপেক্ষা করতে হবে?'
        },
        options: [
          {
            en: '4 days, because the next warmer temperature is 76 at index 6, giving 6 - 2 = 4',
            bn: '৪ দিন, কারণ পরবর্তী উষ্ণ তাপমাত্রা হলো ৭৬ যা ৬ নম্বর ইনডেক্সে আছে, ফলে ৬ - ২ = ৪'
          },
          {
            en: '1 day',
            bn: '১ দিন'
          },
          {
            en: '2 days',
            bn: '২ দিন'
          },
          {
            en: '0 days',
            bn: '০ দিন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare 75 with 71, 69, 72, and 76. Which one is greater than 75?',
          bn: '৭৫ এর সাথে ৭১, ৬৯, ৭২ এবং ৭৬ তুলনা করুন। কোনটি ৭৫ এর চেয়ে বড়?'
        },
        explanation: {
          en: 'Days 3 (71), 4 (69), and 5 (72) are all colder than 75. Day 6 reaches 76, which is strictly warmer. The difference is 6 - 2 = 4 days.',
          bn: '৩ (৭১), ৪ (৬৯) এবং ৫ (৭২) নম্বর দিনগুলো ৭৫ এর চেয়ে শীতল। ৬ নম্বর দিনে তাপমাত্রা ৭৬ এ পৌঁছায় যা বড়। সুতরাং ব্যবধান ৬ - ২ = ৪ দিন।'
        }
      },
      {
        id: 'mp-q4',
        kind: 'mcq',
        topic: 'histogram-fences',
        question: {
          en: 'In the Largest Rectangle in Histogram problem, what role do monotonic stacks play?',
          bn: 'হিস্টোগ্রামে বৃহত্তম আয়তক্ষেত্র সমস্যায় মনোটোনিক স্ট্যাক কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'They find the nearest smaller bar to the left and right for each bar in O(1) amortized time, determining its maximum width',
            bn: 'তারা প্রতিটি স্তম্ভের জন্য বাম ও ডানের নিকটতম ছোট স্তম্ভটি অ্যামর্টাইজড O(1) সময়ে খুঁজে বের করে তার সর্বোচ্চ প্রস্থ নির্ধারণ করে'
          },
          {
            en: 'They sort the histogram bars alphabetically by color',
            bn: 'তারা স্তম্ভগুলোকে রঙের বর্ণানুক্রম অনুসারে সাজায়'
          },
          {
            en: 'They calculate the 3D volume of the bars using calculus integration',
            bn: 'তারা ক্যালকুলাস ইন্টিগ্রেশন ব্যবহার করে স্তম্ভগুলোর ত্রিমাত্রিক আয়তন নির্ণয় করে'
          },
          {
            en: 'They convert the histogram image into a PNG bitmap file',
            bn: 'তারা হিস্টোগ্রাম ছবিটিকে একটি পিএনজি ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A rectangle of height h can extend left and right until it hits a bar shorter than h.',
          bn: 'h উচ্চতার একটি আয়তক্ষেত্র বামে ও ডানে ততক্ষণ বাড়ে যতক্ষণ না h এর চেয়ে ছোট কোনো স্তম্ভের সাথে ধাক্কা খায়।'
        },
        explanation: {
          en: 'Using a monotonic increasing stack identifies the left and right boundary fences where a bar is the minimum height, computing max area in O(n) time.',
          bn: 'একটি ক্রমবর্ধমান মনোটোনিক স্ট্যাক বাম ও ডান সীমানা চিহ্নিত করে যেখানে স্তম্ভটি সর্বনিম্ন উচ্চতা থাকে, ফলে O(n) সময়ে ক্ষেত্রফল বের হয়।'
        }
      }
    ]
  }
};
