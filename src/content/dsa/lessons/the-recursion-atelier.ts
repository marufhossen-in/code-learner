import type { Lesson } from '../../../lib/types';

export const recursionAtelierLesson: Lesson = {
  slug: 'the-recursion-atelier',
  tech: 'sorting',
  title: {
    en: 'The Recursion Atelier: Call Stacks & Invariants',
    bn: 'দি রিকার্শন আটেলিয়ার: কল স্ট্যাক ও ইনভ্যারিয়েন্ট'
  },
  summary: {
    en: 'Recursion is a computational paradigm where a function decomposes complex problems into smaller, self-similar instances. To avoid endless recursion, execution terminates upon reaching an explicit base condition. For example, computing factorial of 5 recurses through 5 distinct stack frames until hitting the base case of 1, returning an accumulated product of 120. Failing to define a base case exhausts available memory and throws a stack overflow error. To quantify asymptotic runtimes of divide-and-conquer recurrences, engineers apply the Master Theorem to evaluate branching factors and recombination costs. This lesson teaches base case discipline, stack frame anatomy, call depth analysis, and recurrence relation evaluation.',
    bn: 'রিকার্শন হলো এমন একটি গণনা পদ্ধতি যেখানে কোনো ফাংশন একটি জটিল সমস্যাকে নিজের মতো ছোট ছোট অংশে বিভক্ত করে সমাধান করে। অন্তহীন রিকার্শন এড়াতে একটি নির্দিষ্ট বেস কন্ডিশনে পৌঁছানোর মাধ্যমে এর কাজ শেষ হয়। উদাহরণস্বরূপ ৫ এর ফ্যাক্টোরিয়াল বের করতে ফাংশনটি ৫টি পৃথক স্ট্যাক ফ্রেম তৈরি করে ১ এর বেস কেইসে পৌঁছায় এবং ক্রমান্বয়ে গুণফল ১২০ ফেরত দেয়। সঠিক বেস কেইস না থাকলে মেমোরি ফুরিয়ে স্ট্যাক ওভারফ্লো এরর ঘটে। ডিভাইড-অ্যান্ড-কনকার রিকার্শনের জটিলতা নির্ণয় করতে ইঞ্জিনিয়াররা মাস্টার থিওরেম প্রয়োগ করে এর শাখা বৃদ্ধি ও মার্জিং কাজের অনুপাত পরিমাপ করেন। এই পাঠে বেস কেইস নির্ধারণ, স্ট্যাক ফ্রেম গঠন, রিকার্শন গভীরতা এবং মাস্টার থিওরেমের সমীকরণ বিস্তারিত আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Self-Similarity & The Call Stack',
        bn: 'মূল ধারণা: পুনরাবৃত্তি ও কল স্ট্যাক'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you invoke a recursive function, the computer runtime reserves memory on the call stack. Each invocation preserves its own parameters, local variables, and return address until child calls resolve.',
        bn: 'আপনি যখন একটি রিকার্সিভ ফাংশন কল করেন, তখন কম্পিউটার মেমোরির কল স্ট্যাকে আলাদা জায়গা বরাদ্দ হয়। প্রতিটি কল তার নিজস্ব ভেরিয়েবল এবং রিটার্ন ঠিকানা সংরক্ষণ করে যতক্ষণ না ভেতরের শিশু কলগুলো সমাপ্ত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Base Case Discipline',
          def: {
            en: 'The non-recursive terminating condition that halts execution and begins unwinding the call stack',
            bn: 'রিকার্শন থামানোর আবশ্যিক শর্ত যা কোনো পরবর্তী কল না করেই সরাসরি মান ফেরত দিয়ে স্ট্যাক খালি করতে শুরু করে'
          }
        },
        {
          term: 'Stack Frame Anatomy',
          def: {
            en: 'A dedicated block of memory pushed onto the runtime call stack containing function parameters, locals, and return pointer',
            bn: 'কল স্ট্যাকে তৈরি হওয়া মেমোরি ব্লক যা ফাংশনের প্যারামিটার, লোকাল ভেরিয়েবল এবং পূর্বের রিটার্ন পয়েন্টার ধরে রাখে'
          }
        },
        {
          term: 'Stack Overflow Error',
          def: {
            en: 'A fatal runtime exception thrown when recursive calls exceed maximum allowable stack memory limits',
            bn: 'একটি মারাত্মক এরর যা ঘটে যখন অসীম রিকার্শনের কারণে কল স্ট্যাকের জন্য বরাদ্দকৃত মোট মেমোরি ফুরিয়ে যায়'
          }
        },
        {
          term: 'The Master Theorem',
          def: {
            en: 'A mathematical formula providing closed-form asymptotic solutions for divide-and-conquer recurrence relations T(n) = aT(n/b) + f(n)',
            bn: 'একটি গাণিতিক সূত্র যার সাহায্যে T(n) = aT(n/b) + f(n) আকারের রিকার্সিভ অ্যালগরিদমের টাইম কমপ্লেক্সিটি সরাসরি নির্ণয় করা যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'anatomy-of-recursion-table',
      text: {
        en: 'Four Essential Stages of Every Recursive Function',
        bn: 'যেকোনো রিকার্সিভ ফাংশনের চারটি অপরিহার্য স্তর'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Structural Decomposition of Robust Recursive Implementations',
        bn: 'একটি সুসংগঠিত রিকার্সিভ ফাংশনের গাঠনিক উপাদানসমূহ'
      },
      head: [
        { en: 'Phase Stage', bn: 'ধাপের নাম' },
        { en: 'Core Responsibility', bn: 'মূল দায়িত্ব' },
        { en: 'Defect Risk if Missing', bn: 'না থাকলে সম্ভাব্য ঝুঁকি' }
      ],
      rows: [
        [
          { en: '1. Base Case Check', bn: '১. বেস কেইস পরীক্ষা' },
          { en: 'Checks for trivial input bounds and returns immediately', bn: 'ইনপুট সীমার ক্ষুদ্রতম মান পরীক্ষা করে সরাসরি উত্তর দেয়' },
          { en: 'Infinite loop leading to stack overflow crash', bn: 'অন্তহীন রিকার্শন ও স্ট্যাক ওভারফ্লো ক্র্যাশ' }
        ],
        [
          { en: '2. Problem Splitting', bn: '২. সমস্যা বিভাজন' },
          { en: 'Deconstructs current input into smaller subproblems', bn: 'বর্তমান সমস্যাকে ক্ষুদ্রতর অংশে ভাগ করে' },
          { en: 'Stagnant recursion arguments with no convergence', bn: 'প্যারামিটার না কমে রিকার্শন স্থবির হয়ে পড়া' }
        ],
        [
          { en: '3. Self Invocation', bn: '৩. নিজেকে কল করা' },
          { en: 'Calls itself with strictly reduced arguments', bn: 'ছোট আকারের মান নিয়ে পুনরায় নিজেকে কল করে' },
          { en: 'Incorrect mathematical logic and wrong outputs', bn: 'ভুল গাণিতিক ফলাফল' }
        ],
        [
          { en: '4. Result Composition', bn: '৪. ফলাফল একত্রীকরণ' },
          { en: 'Combines subproblem solutions into the final return payload', bn: 'ছোট ছোট অংশের ফলাফল একত্র করে মূল উত্তর তৈরি করে' },
          { en: 'Discarded intermediate computation results', bn: 'মাঝের হিসাব হারিয়ে যাওয়া' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Factorial Call Stack Depth for n = 5',
        bn: 'চালনাযোগ্য সিমুলেশন: n = ৫ এর ফ্যাক্টোরিয়াল কল স্ট্যাকের গভীরতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the factorial of 5. It tracks 5 active stack frames until hitting base case 1, successfully returning a product of 120:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৫ এর ফ্যাক্টোরিয়াল হিসাব করে। এটি ১ এর বেস কেইসে পৌঁছানো পর্যন্ত ৫টি সক্রিয় স্ট্যাক ফ্রেম তৈরি করে এবং সফলভাবে ১২০ গুণফল বের করে:'
      }
    },
    {
      type: 'code',
      id: 'recursion-factorial-sim',
      lang: 'javascript',
      code: `// Recursive Factorial & Call Stack Depth Tracker for n = 5
function factorial(n, currentDepth = 1) {
  // Base case: at n = 1, stop recursion
  if (n <= 1) {
    return { result: 1, peakDepth: currentDepth };
  }
  
  // Recursive step: n * factorial(n - 1)
  const child = factorial(n - 1, currentDepth + 1);
  return {
    result: n * child.result,
    peakDepth: Math.max(currentDepth, child.peakDepth)
  };
}

const inputNumber = 5;
const simulation = factorial(inputNumber);

console.log('Tested input integer value:', inputNumber);
// -> Tested input integer value: 5

console.log('Peak call stack frames allocated in memory:', simulation.peakDepth);
// -> Peak call stack frames allocated in memory: 5

console.log('Accumulated factorial mathematical product:', simulation.result);
// -> Accumulated factorial mathematical product: 120`,
      caption: {
        en: 'Figure 1: Executing factorial of 5 allocates 5 stack frames down to base case 1, unwinding to calculate 120',
        bn: 'চিত্র ১: ৫ এর ফ্যাক্টোরিয়াল চালাতে বেস কেইস ১ পর্যন্ত মোট ৫টি স্ট্যাক ফ্রেম লাগে, যা শেষে ১২০ মান ফেরত দেয়'
      }
    },
    {
      type: 'heading',
      id: 'master-theorem-guide',
      text: {
        en: 'Understanding Divide-and-Conquer Recurrences',
        bn: 'ডিভাইড-অ্যান্ড-কনকার রিকার্শন সমীকরণ বোঝা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In algorithms like Merge Sort, the workload splits into subproblems. The Master Theorem evaluates whether total work is dominated by division, recursive leaves, or level-by-level combining work.',
        bn: 'মার্জ সর্টের মতো অ্যালগরিদমে মূল কাজকে কয়েকটি ছোট সাবপ্রবলেমে ভাগ করা হয়। মাস্টার থিওরেমের মাধ্যমে হিসাব করা হয় মোট সময় কি পাতা নোডগুলোর ওপর নির্ভর করে নাকি প্রতি স্তরে একত্র করার কাজের ওপর নির্ভর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'T(n) = 2T(n/2) + O(n)',
          def: {
            en: 'The classic Merge Sort recurrence: 2 subproblems of half size plus linear work to merge, yielding O(n log n)',
            bn: 'মার্জ সর্টের সমীকরণ: অর্ধেক আকারের ২টি সাবপ্রবলেম এবং একত্র করতে লিনিয়ার কাজ, যা সমাধান করলে O(n log n) পাওয়া যায়'
          }
        },
        {
          term: 'Tail Call Optimization',
          def: {
            en: 'A compiler optimization reusing the existing stack frame when the recursive call is the very last operation',
            bn: 'কম্পাইলারের একটি কৌশল যা রিকার্সিভ কল সবার শেষে থাকলে নতুন ফ্রেম না বানিয়ে আগের মেমোরি পুনর্ব্যবহার করে'
          }
        },
        {
          term: 'Recursion Invariants',
          def: {
            en: 'Mathematical assertions that remain strictly true before and after every single recursive function invocation',
            bn: 'গাণিতিক যুক্তি বা শর্ত যা রিকার্শনের প্রতিবার শুরু ও শেষে অপরিবর্তিত থাকে এবং প্রমাণের নিশ্চয়তা দেয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'recursion-peak-depth-ex',
      kind: 'mcq',
      topic: 'Call stack depth for factorial of 5',
      question: {
        en: 'According to our simulation computing the factorial of 5, what was the peak number of stack frames allocated on the call stack?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ৫ এর ফ্যাক্টোরিয়াল নির্ণয় করার সময় কল স্ট্যাকে সর্বোচ্চ কয়টি ফ্রেম তৈরি হয়েছিল?'
      },
      options: [
        {
          en: '5 stack frames',
          bn: '৫টি স্ট্যাক ফ্রেম'
        },
        {
          en: '120 frames',
          bn: '১২০টি ফ্রেম'
        },
        {
          en: '1 frame',
          bn: '১টি ফ্রেম'
        },
        {
          en: '0 frames',
          bn: '০টি ফ্রেম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Factorial of 5 nests from n = 5 down to base case 1, requiring 5 frames.',
        bn: 'n = ৫ থেকে ১ পর্যন্ত প্রতি ধাপে একটি করে মোট ৫টি ফ্রেমের কথা ভাবুন।'
      },
      explanation: {
        en: 'Calling factorial for n = 5 allocates frames for 5, 4, 3, 2, and 1, reaching a maximum stack depth of 5.',
        bn: '৫, ৪, ৩, ২ এবং ১ মানের জন্য ক্রমান্বয়ে কল স্ট্যাকে মোট ৫টি ফ্রেম বরাদ্দ হয়।'
      }
    },
    {
      id: 'recursion-base-case-role-ex',
      kind: 'mcq',
      topic: 'Crucial role of the base case in recursion',
      question: {
        en: 'What critical function does the base case perform inside a recursive algorithm?',
        bn: 'একটি রিকার্সিভ অ্যালগরিদমে বেস কেইস (Base Case) কোন প্রধান কাজটি সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It defines the terminating condition that stops recursion and prevents stack overflow crashes by returning a direct value',
          bn: 'এটি রিকার্শন থামানোর শর্ত নির্ধারণ করে এবং সরাসরি মান ফেরত দিয়ে মেমোরি উপচে স্ট্যাক ওভারফ্লো হওয়া রোধ করে'
        },
        {
          en: 'It converts recursive functions into SQL database queries',
          bn: 'এটি রিকার্শনের কোডকে ডাটাবেজ কুয়েরিতে রূপান্তর করে'
        },
        {
          en: 'It multiplies the execution speed by ten',
          bn: 'এটি গতি দশ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'It deletes local variables from computer storage',
          bn: 'এটি মেমোরি থেকে ভেরিয়েবল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without a base case, recursion repeats infinitely until stack space is exhausted.',
        bn: 'বেস কেইস না থাকলে রিকার্শন অন্তহীনভাবে চলতে থাকবে এবং মেমোরি শেষ হয়ে যাবে।'
      },
      explanation: {
        en: 'The base case provides a direct return without spawning further subcalls, terminating the stack progression cleanly.',
        bn: 'বেস কেইস কোনো নতুন কল না করে সরাসরি ফলাফল ফেরত দেয়, যার ফলে কল স্ট্যাক খালি হওয়া শুরু করে।'
      }
    },
    {
      id: 'recursion-master-theorem-mergesort-ex',
      kind: 'mcq',
      topic: 'Recurrence relation solution for Merge Sort',
      question: {
        en: 'Applying the Master Theorem to the Merge Sort recurrence relation T(n) = 2T(n/2) + O(n) yields which complexity?',
        bn: 'মার্জ সর্টের রিকার্শন সমীকরণ T(n) = 2T(n/2) + O(n)-এ মাস্টার থিওরেম প্রয়োগ করলে কোন কমপ্লেক্সিটি পাওয়া যায়?'
      },
      options: [
        {
          en: 'O(n log n) linearithmic time because the work done at each tree level is equal to O(n) across log n levels',
          bn: 'O(n log n) কারণ log n সংখ্যক স্তরের প্রতিটিতে মোট কাজের পরিমাণ সমান O(n)'
        },
        {
          en: 'O(n^2) quadratic time',
          bn: 'O(n^2) কোয়াড্রাটিক টাইম'
        },
        {
          en: 'O(n) linear time',
          bn: 'O(n) লিনিয়ার টাইম'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(1) কনস্ট্যান্ট টাইম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Two subproblems of half size combined with linear merge work gives O(n log n).',
        bn: 'অর্ধেক আকারের দুটি সমস্যা এবং লিনিয়ার মার্জিং কাজ একত্র হয়ে n log n দেয়।'
      },
      explanation: {
        en: 'In Merge Sort, work per level is cn, and tree depth is log2(n). Multiplying depth by level work gives O(n log n).',
        bn: 'মার্জ সর্টের ট্রিতে মোট স্তর সংখ্যা log2(n) এবং প্রতিটি স্তরে মোট কাজ n, ফলে তাদের গুণফল O(n log n) হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-recursion-atelier',
    title: {
      en: 'The Recursion Atelier Quiz',
      bn: 'দি রিকার্শন আটেলিয়ার কুইজ'
    },
    questions: [
      {
        id: 'q-recursion-tail-call-benefit',
        kind: 'mcq',
        topic: 'Tail call optimization memory advantage',
        question: {
          en: 'How does Tail Call Optimization (TCO) allow certain recursive functions to execute without risk of a stack overflow?',
          bn: 'টেইল কল অপ্টিমাইজেশন (TCO) কীভাবে কিছু রিকার্সিভ ফাংশনকে স্ট্যাক ওভারফ্লো ঝুঁকি ছাড়াই চালাতে সাহায্য করে?'
        },
        options: [
          {
            en: 'When the recursive call is in tail position (the final action in the function), the runtime reuses the current stack frame rather than pushing a new frame',
            bn: 'রিকার্সিভ কলটি ফাংশনের একদম শেষ কাজ হলে ইঞ্জিন নতুন ফ্রেম না বানিয়ে বর্তমান ফ্রেমটিকেই পুনরায় ব্যবহার করে'
          },
          {
            en: 'It moves all variables to an external hard drive',
            bn: 'এটি সব ডাটা হার্ডড্রাইভে সংরক্ষণ করে'
          },
          {
            en: 'It skips executing every second iteration',
            bn: 'এটি প্রতি দ্বিতীয় কল বাদ দিয়ে চলে'
          },
          {
            en: 'TCO converts code into python scripts',
            bn: 'এটি কোডকে পাইথনে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reuses the active stack frame when no post-processing work remains.',
          bn: 'কলের পরে আর কোনো কাজ বাকি না থাকলে বর্তমান মেমোরি ফ্রেমটি আবার ব্যবহার করার কথা ভাবুন।'
        },
        explanation: {
          en: 'TCO discards unnecessary stack allocations by overwriting the existing frame when no further operations depend on the return value.',
          bn: 'টেইল পজিশনে কল থাকলে আগের ফ্রেমের আর দরকার পড়ে না, ফলে নতুন মেমোরি খরচ না করে O(1) স্পেসে রিকার্শন চালানো যায়।'
        }
      },
      {
        id: 'q-recursion-fibonacci-exponential',
        kind: 'mcq',
        topic: 'Why naive recursive Fibonacci is O(2^n)',
        question: {
          en: 'Why does naive double-recursion like return fib(n-1) + fib(n-2) take catastrophic O(2^n) exponential time complexity?',
          bn: 'সাধারণ ডবল রিকার্শন return fib(n-1) + fib(n-2) কেন মারাত্মক O(2^n) এক্সপোনেনশিয়াল সময় নেয়?'
        },
        options: [
          {
            en: 'It spawns a binary recursion tree that recomputes identical subproblems repeatedly (e.g. fib(3) computed thousands of times)',
            bn: 'এটি একটি বাইনারি রিকার্শন ট্রি তৈরি করে যা একই উপ-সমস্যা বারবার সমাধান করে (যেমন fib(3) হাজার বার হিসাব করা হয়)'
          },
          {
            en: 'Because additions in JavaScript take two seconds each',
            bn: 'কারণ জাভাস্ক্রিপ্টে যোগ করতে দুই সেকেন্ড সময় লাগে'
          },
          {
            en: 'Because Fibonacci was written for mechanical calculators',
            bn: 'কারণ এটি মেকানিক্যাল ক্যালকুলেটরের নিয়ম'
          },
          {
            en: 'Fibonacci numbers cannot be represented in binary notation',
            bn: 'এটি বাইনারিতে প্রকাশ করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Redundant branching duplicates work exponentially.',
          bn: 'একই শাখা বারবার তৈরি হয়ে দ্বিঘাত হারে কাজ বাড়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Without memoization or dynamic programming, branching into two recursive calls at each step doubles the work per level, producing O(2^n).',
          bn: 'মেমোইজেশন ছাড়া প্রতি ধাপে দুটি করে শাখা তৈরি হলে মোট কাজ ২^n আকারে বৃদ্ধি পায়।'
        }
      },
      {
        id: 'q-recursion-stack-memory-limit',
        kind: 'mcq',
        topic: 'Typical stack limit in browser runtimes',
        question: {
          en: 'What causes a browser JavaScript runtime to throw "RangeError: Maximum call stack size exceeded"?',
          bn: 'ব্রাউজারের জাভাস্ক্রিপ্ট ইঞ্জিনে "RangeError: Maximum call stack size exceeded" এরর কেন দেখা দেয়?'
        },
        options: [
          {
            en: 'The depth of recursive calls exceeds the fixed memory stack limit (typically around 10,000 frames in modern engines)',
            bn: 'রিকার্শনের গভীরতা ব্রাউজারের নির্ধারিত স্ট্যাক সীমা অতিক্রম করলে (সাধারণত আধুনিক ইঞ্জিনে প্রায় ১০,০০০ ফ্রেম)'
          },
          {
            en: 'The user internet connection disconnects',
            bn: 'ইন্টারনেট সংযোগ বিচ্ছিন্ন হলে'
          },
          {
            en: 'The browser window is minimized',
            bn: 'ব্রাউজার উইন্ডো ছোট করা হলে'
          },
          {
            en: 'The CSS file fails to load from the CDN',
            bn: 'সিএসএস ফাইল লোড না হলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Exceeding the fixed stack depth limit exhausts thread stack memory.',
          bn: 'নির্দিষ্ট স্ট্যাক গভীরতার সীমা পার হয়ে গেলে এই এরর ঘটে।'
        },
        explanation: {
          en: 'Browser engines limit execution stack depth to prevent infinite loops from locking machine memory.',
          bn: 'কম্পিউটারের পুরো মেমোরি রক্ষা করতে ব্রাউজার ইঞ্জিন কল স্ট্যাকের গভীরতার একটি নির্দিষ্ট সর্বোচ্চ সীমা রাখে।'
        }
      },
      {
        id: 'q-recursion-tree-depth-vs-leaves',
        kind: 'mcq',
        topic: 'Relationship between tree depth and leaf count',
        question: {
          en: 'In a recursive divide-and-conquer tree where each problem of size n divides into two subproblems of size n/2, how many leaf base cases are reached?',
          bn: 'একটি রিকার্সিভ ডিভাইড-অ্যান্ড-কনকার ট্রিতে n আকারের সমস্যা দুটি n/২ সাবপ্রবলেমে বিভক্ত হলে মোট কয়টি পাতা বা বেস কেইস পাওয়া যায়?'
        },
        options: [
          {
            en: 'Exactly n leaves, because halving repeatedly across log2(n) levels creates 2^(log2 n) = n base cases',
            bn: 'ঠিক n সংখ্যক পাতা, কারণ log2(n) গভীরতার ট্রিতে ২^(log2 n) = n সংখ্যক বেস কেইস তৈরি হয়'
          },
          {
            en: 'Always 2 leaves regardless of n',
            bn: 'n যাই হোক সর্বদা ২টি পাতা'
          },
          {
            en: 'Zero leaves',
            bn: 'কোনো পাতা থাকে না'
          },
          {
            en: '1000000 leaves',
            bn: '১০০০০০০টি পাতা'
          }
        ],
        answer: 0,
        hint: {
          en: 'A binary tree of depth log2(n) has n leaf nodes.',
          bn: 'log2(n) গভীরতার বাইনারি ট্রিতে শেষ পর্যন্ত n সংখ্যক একক নোড থাকে।'
        },
        explanation: {
          en: 'A binary decomposition tree splits until subproblems reach size 1. The number of singleton elements is the input size n.',
          bn: 'সমস্যাটি ভাঙতে ভাঙতে যখন ১ আকারে পৌঁছায়, তখন ইনপুটের সমান মোট n সংখ্যক পাতা পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-halving-vein',
    tech: 'sorting',
    title: {
      en: 'The Halving Vein: Divide & Conquer Sorting',
      bn: 'দি হালভিং ভেইন: ডিভাইড অ্যান্ড কনকার সর্টিং'
    }
  }
};
