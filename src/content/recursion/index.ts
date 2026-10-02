import type { Hub } from '../../lib/types';
import { MirrorsAndTheMirrorLesson } from './lessons/mirrors-and-the-mirror';
import { BasesAndTheBaseLesson } from './lessons/bases-and-the-base';
import { CallsAndTheCallLesson } from './lessons/calls-and-the-call';
import { ReturnsAndTheReturnLesson } from './lessons/returns-and-the-return';
import { FramesAndTheFrameLesson } from './lessons/frames-and-the-frame';
import { NestsAndTheNestLesson } from './lessons/nests-and-the-nest';
import { MemosAndTheMemoLesson } from './lessons/memos-and-the-memo';
import { TheRecursionReleaseLesson } from './lessons/the-recursion-release';

export const recursionHub: Hub = {
  slug: 'recursion',
  name: 'Recursion',
  icon: '🔂',
  tagline: {
    en: 'Base cases, call stack mechanics, divide-and-conquer, tail call optimization, and memoization: the core paradigm of self-referential problem solving.',
    bn: 'বেস কেস, কল স্ট্যাক মেকানিজম, ডিভাইড-অ্যান্ড-কনকার, টেল কল অপ্টিমাইজেশন ও মেমোইজেশন: স্ব-রেফারেন্সিয়াল সমস্যা সমাধানের মূল ভিত্তি।'
  },
  about: {
    en: 'Recursion is the foundational algorithmic technique of solving a complex computational problem by reducing it into smaller instances of the very same problem until reaching a trivial base case. This curriculum takes you from the core mental model and mathematical induction, through physical call stack execution and activation record frames, to tail call optimization, divide-and-conquer paradigms, multi-branch combinatorial backtracking, memoization, and converting deep recursion into safe iterative loops.',
    bn: 'রিকার্শন হলো একটি জটিল গণনাগত সমস্যাকে একই সমস্যার ক্ষুদ্রতর অংশে বিভক্ত করে একটি সহজ বেস কেসে না পৌঁছানো পর্যন্ত সমাধান করার মৌলিক অ্যালগরিদমিক পদ্ধতি। এই কারিকুলাম আপনাকে মৌলিক চিন্তাভাবনা ও গাণিতিক আরোহ বিধি থেকে শুরু করে ফিজিক্যাল কল স্ট্যাক এক্সিকিউশন ও অ্যাক্টিভেশন রেকর্ড ফ্রেম, টেল কল অপ্টিমাইজেশন, ডিভাইড-অ্যান্ড-কনকার প্যারাডাইম, মাল্টি-ব্রাঞ্চ কম্বিনেটরিয়াল ব্যাকট্র্যাকিং, মেমোইজেশন এবং গভীর রিকার্শনের নিরাপদ ইটারেটিভ লুপ রূপান্তর পর্যন্ত সম্পূর্ণ যাত্রা উপহার দেবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — The Core Mental Model & Base Case Physics',
        bn: 'ধাপ ১ — মূল চিন্তাভাবনা ও বেস কেসের নিয়মাবলী'
      },
      items: [
        {
          en: 'Mathematical induction, smaller subproblem decomposition, and the recursive leap of faith',
          bn: 'গাণিতিক আরোহ বিধি, ক্ষুদ্র সাব-প্রবলেম বিভাজন এবং রিকার্সিভ লিপ অফ ফেইথ'
        },
        {
          en: 'Base cases, terminal boundary guards, RangeError call stack exhaustion, and infinite recursion traps',
          bn: 'বেস কেস, টার্মিনাল বাউন্ডারি গার্ড, RangeError কল স্ট্যাক এক্সহশন এবং ইনফিনিট রিকার্শন ট্র্যাপ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Call Stack Mechanics & Tail Call Optimization',
        bn: 'ধাপ ২ — কল স্ট্যাক মেকানিজম ও টেল কল অপ্টিমাইজেশন'
      },
      items: [
        {
          en: 'Activation records, stack frame allocation, winding descent vs unwinding return ascent phases',
          bn: 'অ্যাক্টিভেশন রেকর্ড, স্ট্যাক ফ্রেম বরাদ্দ, ওয়াইন্ডিং ডিসেন্ট বনাম আনওয়াইন্ডিং রিটার্ন অ্যাসেন্ট পর্যায়'
        },
        {
          en: 'Tail call optimization (TCO), accumulator parameter patterns, and converting linear recursion into constant space',
          bn: 'টেল কল অপ্টিমাইজেশন (TCO), অ্যাকিউমুলেটর প্যারামিটার প্যাটার্ন এবং লিনিয়ার রিকার্শনের কনস্ট্যান্ট স্পেস রূপান্তর'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Divide & Conquer and Combinatorial Backtracking',
        bn: 'ধাপ ৩ — ডিভাইড-অ্যান্ড-কনকার ও কম্বিনেটরিয়াল ব্যাকট্র্যাকিং'
      },
      items: [
        {
          en: 'Divide, conquer, and combine algorithms: Merge Sort, Binary Search, and recurrence analysis',
          bn: 'ডিভাইড, কনকার ও কম্বাইন অ্যালগরিদম: মার্জ সর্ট, বাইনারি সার্চ এবং রিকারেন্স বিশ্লেষণ'
        },
        {
          en: 'Multi-branch recursion trees, the choose-explore-unchoose backtracking pattern, permutations, and subsets',
          bn: 'মাল্টি-ব্রাঞ্চ রিকার্শন ট্রি, চুজ-এক্সপ্লোর-আনচুজ ব্যাকট্র্যাকিং প্যাটার্ন, পারমিউটেশন এবং সাবসেট'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4 — Memoization & Production Resilience',
        bn: 'ধাপ ৪ — মেমোইজেশন ও প্রোডাকশন সক্ষমতা'
      },
      items: [
        {
          en: 'Overlapping subproblems, top-down memoization caches, and bridging recursion to dynamic programming',
          bn: 'ওভারল্যাপিং সাব-প্রবলেম, টপ-ডাউন মেমোইজেশন ক্যাশ এবং রিকার্শন থেকে ডাইনামিক প্রোগ্রামিংয়ে উত্তরণ'
        },
        {
          en: 'Call stack limitations in production runtimes, explicit manual stack simulation, and trampolines',
          bn: 'প্রোডাকশন রানটাইমে কল স্ট্যাক সীমাবদ্ধতা, ম্যানুয়াল স্ট্যাক সিমুলেশন এবং ট্রাম্পোলিন কৌশল'
        }
      ]
    }
  ],
  lessons: [
    MirrorsAndTheMirrorLesson,
    BasesAndTheBaseLesson,
    CallsAndTheCallLesson,
    ReturnsAndTheReturnLesson,
    FramesAndTheFrameLesson,
    NestsAndTheNestLesson,
    MemosAndTheMemoLesson,
    TheRecursionReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Interactive Recursion Tree & Call Stack Visualizer',
        bn: 'ইন্টারেক্টিভ রিকার্শন ট্রি ও কল স্ট্যাক ভিজ্যুয়ালাইজার'
      },
      diff: 'intermediate',
      desc: {
        en: 'Build a tree renderer that traces any recursive function such as Fibonacci or Factorial, displaying the call depth, frame arguments, and return values during winding descent and unwinding return phases.',
        bn: 'একটি ট্রি রেন্ডারার তৈরি করুন যা ফিবোনাচ্চি বা ফ্যাক্টোরিয়ালের মতো যেকোনো রিকার্সিভ ফাংশন ট্রেস করে ওয়াইন্ডিং ডিসেন্ট ও আনওয়াইন্ডিং রিটার্ন পর্যায়ে কল ডেপথ, ফ্রেম আর্গুমেন্ট এবং রিটার্ন মান প্রদর্শন করে।'
      }
    },
    {
      title: {
        en: 'Deep Tree Directory Walker: Recursion vs Trampoline vs Explicit Stack',
        bn: 'ডিপ ট্রি ডিরেক্টরি ওয়াকার: রিকার্শন বনাম ট্রাম্পোলিন বনাম এক্সপ্লিসিট স্ট্যাক'
      },
      diff: 'advanced',
      desc: {
        en: 'Implement directory traversal across deep nested levels. Demonstrate the standard recursive version failing with Maximum call stack size exceeded, followed by the resilient trampoline and heap-allocated explicit stack versions completing safely.',
        bn: 'অতিরিক্ত গভীর নেস্টেড লেভেলে ডিরেক্টরি ট্রাভার্সাল তৈরি করুন। সাধারণ রিকার্সিভ সংস্করণটি কীভাবে Maximum call stack size exceeded দিয়ে ব্যর্থ হয় এবং ট্রাম্পোলিন ও হিপ-স্ট্যাক সংস্করণ কীভাবে নিরাপদে সফল হয় তা প্রদর্শন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always state the Base Case first: Every recursive function must begin with clear guard clauses that test terminal conditions before executing any recursive step.',
      bn: 'সর্বদা প্রথমে বেস কেস লিখুন: যেকোনো রিকার্সিভ স্টেপ চালানোর আগে প্রতিটি রিকার্সিভ ফাংশনকে অবশ্যই টার্মিনাল শর্ত যাচাইকারী স্পষ্ট গার্ড ক্লজ দিয়ে শুরু করতে হবে।'
    },
    {
      en: 'Strictly guarantee monotonic progress towards the base: On every recursive call, at least one parameter must strictly move closer to the terminating base condition.',
      bn: 'বেসের দিকে অগ্রগতির নিশ্চয়তা দিন: প্রতিটি রিকার্সিভ কলে অন্তত একটি প্যারামিটারকে অবশ্যই কঠোরভাবে সমাপ্তি বেস শর্তের দিকে এগিয়ে যেতে হবে।'
    },
    {
      en: 'Beware exponential branching: Multi-branch recursions with overlapping subproblems (like naive Fibonacci) must use memoization or dynamic programming.',
      bn: 'সূচকীয় ব্রাঞ্চিং সম্পর্কে সতর্ক থাকুন: ওভারল্যাপিং সাব-প্রবলেমযুক্ত মাল্টি-ব্রাঞ্চ রিকার্শনে অবশ্যই মেমোইজেশন বা ডাইনামিক প্রোগ্রামিং ব্যবহার করতে হবে।'
    },
    {
      en: 'Understand the Call Stack budget: The runtime call stack has limited capacity (~10000 frames in V8); deep linear recursion must use tail-call accumulators or explicit loop iterations.',
      bn: 'কল স্ট্যাকের ধারণক্ষমতা মাথায় রাখুন: রানটাইম কল স্ট্যাকের সীমিত ক্ষমতা থাকে (V8 ইঞ্জিনে প্রায় ১০০০০ ফ্রেম); গভীর লিনিয়ার রিকার্শনে অবশ্যই টেল-কল অ্যাকিউমুলেটর বা স্পষ্ট লুপ ব্যবহার করতে হবে।'
    },
    {
      en: 'Distinguish Pre-order work from Post-order work: Pre-order work executes during the winding descent phase; post-order work executes during the unwinding return ascent phase.',
      bn: 'প্রি-অর্ডার ও পোস্ট-অর্ডার কাজের পার্থক্য বুঝুন: প্রি-অর্ডার কাজ ওয়াইন্ডিং ডিসেন্ট পর্যায়ে চলে; পোস্ট-অর্ডার কাজ আনওয়াইন্ডিং রিটার্ন অ্যাসেন্ট পর্যায়ে চলে।'
    },
    {
      en: 'The Choose-Explore-Unchoose Backtracking invariant: Whenever exploring combinatorial branches, always undo state modifications (unchoose) after recursive return to prevent leaking mutated state to sibling branches.',
      bn: 'চুজ-এক্সপ্লোর-আনচুজ ব্যাকট্র্যাকিং নীতি: কম্বিনেটরিয়াল শাখা অনুসন্ধানের সময় রিকার্সিভ রিটার্নের পর সর্বদা পরিবর্তনের আগের অবস্থায় ফিরে যান (আনচুজ), যাতে অন্য শাখায় ভুল ডাটা না যায়।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is recursion and how does the call stack physically execute a recursive call?',
        bn: 'রিকার্শন কী এবং কল স্ট্যাক কীভাবে একটি রিকার্সিভ কল শারীরিকভাবে সম্পাদন করে?'
      },
      a: {
        en: 'Recursion solves a problem by solving smaller instances of the same problem. Physically, each function call pushes an activation record (stack frame) onto the call stack containing parameters, local variables, and the return address. When a base case returns, frames pop in LIFO order (unwinding phase) passing return values back to their callers.',
        bn: 'রিকার্শন হলো একই সমস্যার ক্ষুদ্রতর অংশ সমাধানের মাধ্যমে মূল সমস্যার সমাধান করা। শারীরিকভাবে প্রতিটি ফাংশন কল প্যারামিটার, লোকাল ভেরিয়েবল এবং রিটার্ন ঠিকানা ধারণকারী একটি অ্যাক্টিভেশন রেকর্ড (স্ট্যাক ফ্রেম) কল স্ট্যাকে পুশ করে। বেস কেস সম্পন্ন হলে ফ্রেমগুলো LIFO ক্রমে পপ হয় (আনওয়াইন্ডিং পর্যায়) এবং কলারের কাছে মান ফেরত পাঠায়।'
      }
    },
    {
      q: {
        en: 'What is Tail Call Optimization (TCO) and how do you rewrite a standard recursive function into a tail-recursive function?',
        bn: 'টেল কল অপ্টিমাইজেশন (TCO) কী এবং কীভাবে একটি সাধারণ রিকার্সিভ ফাংশনকে টেল-রিকার্সিভ ফাংশনে রূপান্তর করবেন?'
      },
      a: {
        en: 'Tail Call Optimization occurs when the recursive call is the absolute final action in the function body, allowing compilers to reuse the existing stack frame in constant space instead of allocating a new frame. Standard factorial (n * fact(n - 1)) is NOT tail-recursive because multiplication happens after the return. Adding an accumulator parameter (fact(n - 1, n * acc)) makes the call the final operation, enabling tail-call transformation.',
        bn: 'টেল কল অপ্টিমাইজেশন ঘটে যখন রিকার্সিভ কলটি ফাংশন বডির সর্বশেষ কাজ হয়, যা কম্পাইলারকে নতুন ফ্রেম না বানিয়ে বিদ্যমান স্ট্যাক ফ্রেম পুনর্ব্যবহার করার সুযোগ দেয়। সাধারণ ফ্যাক্টোরিয়াল (n * fact(n - 1)) টেল-রিকার্সিভ নয় কারণ গুণের কাজটি রিটার্নের পরে ঘটে। একটি অ্যাকিউমুলেটর প্যারামিটার যোগ করলে (fact(n - 1, n * acc)) কলটি সর্বশেষ অপারেশনে পরিণত হয়।'
      }
    },
    {
      q: {
        en: 'What causes a Stack Overflow error (RangeError: Maximum call stack size exceeded) and how do you diagnose and fix it?',
        bn: 'স্ট্যাক ওভারফ্লো এরর (RangeError: Maximum call stack size exceeded) কেন ঘটে এবং এটি কীভাবে সমাধান করবেন?'
      },
      a: {
        en: 'Stack overflow occurs when the call stack exhausts its fixed memory budget due to missing or unreachable base cases, non-shrinking arguments, or recursion depth exceeding the runtime limit (~10000 frames in Node.js). To fix it: audit the base case condition, ensure arguments strictly approach the base, or eliminate the call stack entirely by converting to an explicit while loop using an array-backed stack on the heap.',
        bn: 'অনুপস্থিত বা অপ্রাপ্য বেস কেস, অপরিবর্তিত আর্গুমেন্ট অথবা রিকার্শনের গভীরতা রানটাইম সীমা ছাড়িয়ে গেলে (Node.js-এ প্রায় ১০০০০ ফ্রেম) কল স্ট্যাকের মেমরি শেষ হয়ে স্ট্যাক ওভারফ্লো ঘটে। এটি ঠিক করতে: বেস কেসের শর্ত পরীক্ষা করুন, আর্গুমেন্ট সঠিকভাবে বেসের দিকে কমছে কিনা নিশ্চিত করুন, অথবা হিপ মেমরিতে অ্যারে স্ট্যাক ব্যবহার করে সুস্পষ্ট while লুপে রূপান্তর করুন।'
      }
    },
    {
      q: {
        en: 'What is the operational difference between Divide-and-Conquer and Dynamic Programming?',
        bn: 'ডিভাইড-অ্যান্ড-কনকার এবং ডাইনামিক প্রোগ্রামিংয়ের মধ্যে ব্যবহারিক পার্থক্য কী?'
      },
      a: {
        en: 'Divide-and-Conquer divides a problem into disjoint, non-overlapping subproblems (such as Merge Sort or Quick Sort) and combines their independent solutions. Dynamic Programming solves problems with overlapping subproblems and optimal substructure (such as Fibonacci, Knapsack, or Shortest Path), caching intermediate results via memoization or tabulation to prevent recomputing identical states.',
        bn: 'ডিভাইড-অ্যান্ড-কনকার সমস্যাটিকে পরস্পর সম্পর্কহীন, অবিচ্ছিন্ন উপ-সমস্যায় বিভক্ত করে (যেমন মার্জ সর্ট বা কুইক সর্ট) এবং তাদের স্বাধীন সমাধানগুলোকে একত্রিত করে। অন্যদিকে ডাইনামিক প্রোগ্রামিং ওভারল্যাপিং উপ-সমস্যাযুক্ত সমস্যার সমাধান করে (যেমন ফিবোনাচ্চি, ন্যাপস্যাক বা শর্টেস্ট পাথ), যেখানে মেমোইজেশন বা ট্যাবুলার মাধ্যমে ফলাফল ক্যাশ করে একই গণনা বারবার করা রোধ করা হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'DOM and AST Traversals: Web browsers and JavaScript compilers (Babel, TypeScript, ESLint) parse nested HTML tags and source code into Abstract Syntax Trees (ASTs), which are traversed recursively via the Visitor Pattern.',
      bn: 'DOM ও AST ট্রাভার্সাল: ওয়েব ব্রাউজার এবং জাভাস্ক্রিপ্ট কম্পাইলার (Babel, TypeScript, ESLint) নেস্টেড এইচটিএমএল ট্যাগ ও সোর্স কোডকে অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রিতে (AST) রূপান্তর করে, যা ভিজিটর প্যাটার্নের মাধ্যমে রিকার্সিভভাবে ট্রাভার্স করা হয়।'
    },
    {
      en: 'JSON Serialization: Deeply nested object serialization (JSON.stringify) and deeply nested object cloning employ recursive tree walking algorithms with cycle detection safeguards.',
      bn: 'JSON সিরিয়ালাইজেশন: জটিল নেস্টেড অবজেক্ট সিরিয়ালাইজেশন (JSON.stringify) এবং ডিপ ক্লোনিং সাইকেল ডিটেকশন সুরক্ষা বজায় রেখে রিকার্সিভ ট্রি ওয়াকিং অ্যালগরিদম ব্যবহার করে।'
    },
    {
      en: 'File System Directory Crawling: Operating systems and developer tools traverse folder hierarchies recursively, inspecting subdirectories, gathering file metrics, and executing batch transformations.',
      bn: 'ফাইল সিস্টেম ডিরেক্টরি ক্রলিং: অপারেটিং সিস্টেম ও ডেভেলপার টুল রিকার্সিভ পদ্ধতিতে ফোল্ডার হায়ারার্কি ঘুরে সাব-ডিরেক্টরি পরীক্ষা, ফাইলের তথ্য সংগ্রহ এবং ব্যাচ ফাইল প্রসেসিং সম্পন্ন করে।'
    },
    {
      en: 'Database Query Planning and Graph Engines: Relational databases like PostgreSQL and SQLite use recursive CTEs (WITH RECURSIVE) and recursive algorithms for hierarchical queries, organizational charts, and graph traversal.',
      bn: 'ডাটাবেস কোয়েরি প্ল্যানিং ও গ্রাফ ইঞ্জিন: PostgreSQL এবং SQLite-এর মতো রিলেশনাল ডাটাবেস হায়ারার্কিকাল কোয়েরি, সাংগঠনিক চার্ট ও গ্রাফ পথ অনুসন্ধানের জন্য রিকার্সিভ CTE (WITH RECURSIVE) এবং রিকার্সিভ সার্চ অ্যালগরিদম ব্যবহার করে।'
    }
  ]
};
