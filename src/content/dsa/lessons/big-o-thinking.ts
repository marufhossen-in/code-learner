import type { Lesson } from '../../../lib/types';

export const bigOThinkingLesson: Lesson = {
  slug: 'big-o-thinking',
  tech: 'sorting',
  title: {
    en: 'Big-O Thinking: Asymptotic Analysis & Growth Families',
    bn: 'বিগ-ও চিন্তাভাবনা: অ্যাসিম্পটোটিক অ্যানালাইসিস ও গ্রোথ ফ্যামিলি'
  },
  summary: {
    en: 'A foundational beginner guide to complexity analysis, evaluating how an algorithm operation count scales as input volume expands, independent of CPU speed or programming language. Rather than recording wall-clock execution times, computer scientists classify performance into mathematical growth families. For example, an input size of 64 elements highlights dramatic divergences across algorithms. Constant time requires 1 step, logarithmic search demands 6 steps, a linear scan takes 64 steps, an n-log-n sort takes 384 steps, and a quadratic nested loop requires 4096 steps. Understanding basic loop grammar—sequential loops add while nested iterations multiply—enables engineers to identify scaling bottlenecks before deploying software. This lesson teaches asymptotic growth curves, worst-case upper bounds, loop grammar rules, and constant-factor elimination.',
    bn: 'কমপ্লেক্সিটি অ্যানালাইসিসের একটি মৌলিক নির্দেশিকা যা হিসাব করে ডেটার আকার বৃদ্ধির সাথে সাথে কোনো অ্যালগরিদমের অপারেশন সংখ্যা কীভাবে বাড়ে, যা প্রসেসরের গতি বা প্রোগ্রামিং ভাষার ওপর নির্ভর করে না। স্টপওয়াচ দিয়ে সময় না মেপে কম্পিউটার সায়েন্সে কোডের বৃদ্ধিকে কয়েকটি গাণিতিক পরিবারে ভাগ করা হয়। উদাহরণস্বরূপ ৬৪টি উপাদানের একটি ইনপুটের ক্ষেত্রে অ্যালগরিদমগুলোর মধ্যে বিশাল পার্থক্য দেখা যায়। কনস্ট্যান্ট টাইমে লাগে মাত্র ১টি ধাপ, লগারিদমিক সার্চে লাগে ৬টি ধাপ, লিনিয়ার স্ক্যানে লাগে ৬৪টি ধাপ, n-log-n সর্টে লাগে ৩৮৪টি ধাপ, এবং কোয়াড্রাটিক নেস্টেড লুপে প্রয়োজন হয় ৪০৯৬টি ধাপ। লুপের মৌলিক ব্যাকরণ জানা থাকলে—যেমন পরপর লুপ থাকলে যোগ হয় এবং ভেতরে নেস্টেড থাকলে গুণ হয়—ইঞ্জিনিয়াররা সিস্টেম চালুর আগেই পারফরম্যান্সের সমস্যা দূর করতে পারেন। এই পাঠে অ্যাসিম্পটোটিক বক্ররেখা, ওয়ারস্ট-কেস আপার বাউন্ড, লুপের ব্যাকরণ ও ধ্রুবক বাদ দেওয়ার নিয়ম শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Counting Decisions as Inputs Grow',
        bn: 'মূল ধারণা: ইনপুট বৃদ্ধির সাথে সাথে কাজের হিসাব'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you evaluate code efficiency, measuring clock time can deceive you. Faster hardware masks inefficient algorithms on small datasets. Instead, `Big-O` notation measures how operation counts grow relative to input size.',
        bn: 'কোডের দক্ষতা মূল্যায়নের সময় ঘড়ির সেকেন্ড মেপে বিভ্রান্ত হওয়ার ঝুঁকি থাকে। ছোট ডেটাসেটে দ্রুতগতির কম্পিউটার একটি ত্রুটিপূর্ণ অ্যালগরিদমকেও দ্রুত চালাতে পারে। কিন্তু `Big-O` নোটেশন কোনো যন্ত্রের ওপর নির্ভর না করে ইনপুটের সাপেক্ষে কাজের বৃদ্ধি পরিমাপ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Big-O Notation (O)',
          def: {
            en: 'Mathematical representation of the worst-case upper bound describing how an algorithm resource demand scales with input size n',
            bn: 'গাণিতিক প্রতীক যা প্রকাশ করে ইনপুট আকার n বৃদ্ধির সাথে সাথে কোনো অ্যালগরিদমের সর্বোচ্চ সম্ভাব্য কাজের পরিমাণ কীভাবে বাড়ে'
          }
        },
        {
          term: 'Asymptotic Analysis',
          def: {
            en: 'Evaluating algorithm performance limits as input dimensions approach infinity, ignoring hardware constants and low-order terms',
            bn: 'ইনপুটের আকার অসীমের কাছাকাছি পৌঁছালে হার্ডওয়্যারের ধ্রুবক বাদ দিয়ে কোডের দীর্ঘমেয়াদী আচরণ বিশ্লেষণ করার পদ্ধতি'
          }
        },
        {
          term: 'Worst-Case Upper Bound',
          def: {
            en: 'The contractual guarantee specifying the maximum operations an algorithm performs under the least favorable input arrangement',
            bn: 'একটি নির্ভরযোগ্য গ্যারান্টি যা নিশ্চিত করে সবচেয়ে প্রতিকূল ইনপুটেও অ্যালগরিদমটি নির্দিষ্ট সর্বোচ্চ সীমার চেয়ে বেশি ধাপ নেবে না'
          }
        },
        {
          term: 'Dominant Term Law',
          def: {
            en: 'When summing multiple complexity terms, retain only the fastest-growing term and discard constant multiplicative factors',
            bn: 'একাধিক পদ যোগ করার সময় সবচেয়ে দ্রুত বর্ধনশীল পদটি রেখে বাকি ছোট পদ এবং ধ্রুবক সংখ্যাগুলো বাদ দেওয়ার নিয়ম'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'growth-families-table',
      text: {
        en: 'The Six Core Asymptotic Growth Families',
        bn: 'কমপ্লেক্সিটির ছয়টি প্রধান বৃদ্ধির পরিবার'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Primary Big-O Complexity Classes and Typical Operations',
        bn: 'প্রধান বিগ-ও কমপ্লেক্সিটি শ্রেণি এবং তাদের আদর্শ উদাহরণ'
      },
      head: [
        { en: 'Notation', bn: 'নোটেশন' },
        { en: 'Family Name', bn: 'পরিবারের নাম' },
        { en: 'Typical Real-World Example', bn: 'বাস্তব জীবনের উদাহরণ' }
      ],
      rows: [
        [
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'Constant Time', bn: 'কনস্ট্যান্ট টাইম' },
          { en: 'Accessing an array element by known index or reading a hash table entry', bn: 'ইনডেক্স দিয়ে সরাসরি অ্যারোর মান পড়া বা হ্যাশ টেবিল লুকআপ' }
        ],
        [
          { en: 'O(log n)', bn: 'O(log n)' },
          { en: 'Logarithmic Time', bn: 'লগারিদমিক টাইম' },
          { en: 'Binary search over a sorted collection, dividing search range in half each step', bn: 'সাজানো উপাত্তের ওপর বাইনারি সার্চ, যা প্রতি ধাপে এলাকা অর্ধেক করে' }
        ],
        [
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'Linear Time', bn: 'লিনিয়ার টাইম' },
          { en: 'Iterating through every element in an unsorted list to find a value', bn: 'অবিন্যস্ত তালিকায় কোনো মান খুঁজতে প্রতিটি উপাদান একবার করে স্ক্যান করা' }
        ],
        [
          { en: 'O(n log n)', bn: 'O(n log n)' },
          { en: 'Linearithmic Time', bn: 'লিনিয়ারিদমিক টাইম' },
          { en: 'Efficient comparison sorting algorithms such as Merge Sort and Quick Sort', bn: 'মার্জ সর্ট বা কুইক সর্টের মতো দক্ষ তুলনাভিত্তিক সর্টিং অ্যালগরিদম' }
        ],
        [
          { en: 'O(n^2)', bn: 'O(n^2)' },
          { en: 'Quadratic Time', bn: 'কোয়াড্রাটিক টাইম' },
          { en: 'Nested loops comparing every item against all other items in a list', bn: 'তালিকার প্রতিটি উপাদানের সাথে অন্য সব উপাদানের তুলনা করা নেস্টেড লুপ' }
        ],
        [
          { en: 'O(2^n)', bn: 'O(2^n)' },
          { en: 'Exponential Time', bn: 'এক্সপোনেনশিয়াল টাইম' },
          { en: 'Exhaustive recursive exploration of all possible subsets or permutations', bn: 'সব সম্ভাব্য সাবসেট বা বিন্যাস বের করার রিকার্সিভ সার্চ অ্যালগরিদম' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Scaling Operations for Input Size 64',
        bn: 'চালনাযোগ্য সিমুলেশন: ৬৪টি ইনপুটে বিভিন্ন অ্যালগরিদমের অপারেশন গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates operation counts across the fundamental complexity classes for an input size of 64 elements, showing counts of 1, 6, 64, 384, and 4096 operations:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৬৪টি উপাদানের ইনপুটের জন্য মৌলিক কমপ্লেক্সিটি ক্লাসের কাজের হিসাব বের করে ১, ৬, ৬৪, ৩৮৪ এবং ৪০৯৬টি অপারেশনের স্পষ্ট পার্থক্য তুলে ধরে:'
      }
    },
    {
      type: 'code',
      id: 'big-o-growth-sim',
      lang: 'javascript',
      code: `// Big-O Growth Families Comparison for n = 64
const n = 64; // Benchmark dataset with 64 elements

const opsConstant = 1;                     // O(1): single access
const opsLog = Math.log2(n);               // O(log2 n): 6 halving steps
const opsLinear = n;                       // O(n): 64 single-pass visits
const opsLinearithmic = n * Math.log2(n);  // O(n log2 n): 64 * 6 = 384 operations
const opsQuadratic = n * n;                // O(n^2): 64 * 64 = 4096 pair checks

console.log('Tested input size (n):', n);
// -> Tested input size (n): 64

console.log('Constant operations O(1):', opsConstant);
// -> Constant operations O(1): 1

console.log('Logarithmic operations O(log n):', opsLog);
// -> Logarithmic operations O(log n): 6

console.log('Linear operations O(n):', opsLinear);
// -> Linear operations O(n): 64

console.log('Linearithmic operations O(n log n):', opsLinearithmic);
// -> Linearithmic operations O(n log n): 384

console.log('Quadratic operations O(n^2):', opsQuadratic);
// -> Quadratic operations O(n^2): 4096`,
      caption: {
        en: 'Figure 1: Evaluating 64 elements demonstrates that O(1) needs 1 step, O(log n) needs 6 steps, O(n) needs 64 steps, O(n log n) needs 384 steps, and O(n^2) surges to 4096 operations',
        bn: 'চিত্র ১: ৬৪টি উপাদানে O(1)-এ লাগে ১টি ধাপ, O(log n)-এ ৬টি ধাপ, O(n)-এ ৬৪টি ধাপ, O(n log n)-এ ৩৮৪টি ধাপ, এবং O(n^2)-এ এক লাফে ৪০৯৬টি অপারেশন লাগে'
      }
    },
    {
      type: 'heading',
      id: 'loop-grammar-guide',
      text: {
        en: 'The Grammar of Code Complexity',
        bn: 'কোড কমপ্লেক্সিটি বিশ্লেষণের ব্যাকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To deduce asymptotic runtime without executing tests, inspect loop nesting. Sequential loops sum their costs, while nested structures multiply execution frequencies.',
        bn: 'পরীক্ষামূলক কোড রান না করেও লুপের গঠন দেখে কমপ্লেক্সিটি বের করা সম্ভব। পরপর থাকা আলাদা লুপের কাজ যোগ হয়, আর একটির ভেতর আরেকটি নেস্টেড লুপ থাকলে তাদের ধাপ সংখ্যা গুণ হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Sequential Loops Add',
          def: {
            en: 'Two independent loops running sequentially over n produce n + n = 2n, which simplifies to linear O(n)',
            bn: 'পরপর দুটি আলাদা লুপ n বার করে চললে মোট ধাপ n + n = 2n হয়, যা ধ্রুবক বাদ দিয়ে O(n) হিসেবে গণ্য হয়'
          }
        },
        {
          term: 'Rule 2: Nested Loops Multiply',
          def: {
            en: 'An outer loop of n containing an inner loop of n repeats n times n, producing quadratic O(n^2)',
            bn: 'বাইরের n বারের লুপের ভেতরে আরেকটি n বারের লুপ থাকলে মোট ধাপ n গুণ n হয়ে কোয়াড্রাটিক O(n^2) তৈরি করে'
          }
        },
        {
          term: 'Rule 3: Halving Divides to Logarithms',
          def: {
            en: 'Any loop where the counter doubles or halves on each iteration runs in O(log n) steps',
            bn: 'যেকোনো লুপ যেখানে প্রতি পদক্ষেপে কাউন্টার দ্বিগুণ বা অর্ধেক হয়, তা O(log n) ধাপে সমাপ্ত হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bigo-ops-calc-ex',
      kind: 'mcq',
      topic: 'Operation count comparison for input size 64',
      question: {
        en: 'According to our simulation for an input size of 64 elements, how many operations does an O(n log n) algorithm perform compared to an O(log n) algorithm?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ৬৪টি উপাদানের জন্য একটি O(n log n) অ্যালগরিদম কয়টি অপারেশন চালায় এবং O(log n) কয়টি চালায়?'
      },
      options: [
        {
          en: 'O(n log n) performs 384 operations while O(log n) requires 6 operations',
          bn: 'O(n log n) চালায় ৩৮৪টি অপারেশন যেখানে O(log n)-এ লাগে ৬টি অপারেশন'
        },
        {
          en: 'Both perform 64 operations',
          bn: 'উভয়েই ৬৪টি অপারেশন চালায়'
        },
        {
          en: 'O(n log n) performs 4096 operations and O(log n) performs 1 operation',
          bn: 'O(n log n) চালায় ৪০৯৬টি আর O(log n) চালায় ১টি'
        },
        {
          en: 'O(n log n) performs 128 operations and O(log n) performs 12 operations',
          bn: 'O(n log n) চালায় ১২৮টি আর O(log n) চালায় ১২টি'
        }
      ],
      answer: 0,
      hint: {
        en: '64 multiplied by 6 is 384; log2 of 64 is 6.',
        bn: '৬৪ কে ৬ দিয়ে গুণ করলে ৩৮৪ হয়; এবং ৬৪-এর log2 হলো ৬।'
      },
      explanation: {
        en: 'With n = 64, log2(64) = 6 steps, and n * log2(n) = 64 * 6 = 384 operations.',
        bn: 'n = ৬৪ হলে log2(৬৪) = ৬টি ধাপ, এবং ৬৪ * ৬ = ৩৮৪টি অপারেশন সম্পন্ন হয়।'
      }
    },
    {
      id: 'bigo-nested-loop-ex',
      kind: 'mcq',
      topic: 'Complexity of nested iteration',
      question: {
        en: 'What is the asymptotic time complexity of iterating through an array of size n with an outer loop and an inner loop that both run from 0 to n?',
        bn: 'একটি n আকারের অ্যারোর ওপর বাইরের লুপ এবং ভেতরের লুপ উভয়ই ০ থেকে n পর্যন্ত চললে তার কমপ্লেক্সিটি কত হবে?'
      },
      options: [
        {
          en: 'O(n^2) quadratic time because the inner loop executes n times for every one of the n outer iterations',
          bn: 'O(n^2) কোয়াড্রাটিক টাইম কারণ বাইরের n বারের প্রতিটির জন্য ভেতরের লুপটি পুরো n বার কার্যকর হয়'
        },
        {
          en: 'O(n) linear time',
          bn: 'O(n) লিনিয়ার টাইম'
        },
        {
          en: 'O(log n) logarithmic time',
          bn: 'O(log n) লগারিদমিক টাইম'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(1) কনস্ট্যান্ট টাইম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nesting multiplies loop counts: n times n equals n squared.',
        bn: 'নেস্টিং লুপের সংখ্যাকে গুণ করে: n এর সাথে n গুণ করলে n স্কয়ার হয়।'
      },
      explanation: {
        en: 'When one loop of size n is nested inside another loop of size n, their operations multiply to produce O(n * n) = O(n^2).',
        bn: 'n আকারের একটি লুপের ভেতর আরেকটি n আকারের লুপ থাকলে তাদের মোট কাজ গুণ হয়ে O(n^2) হয়।'
      }
    },
    {
      id: 'bigo-drop-constants-ex',
      kind: 'mcq',
      topic: 'Simplifying polynomial complexity expressions',
      question: {
        en: 'Why do computer scientists simplify an exact algebraic operation count of 5n^2 + 200n + 5000 down to simply O(n^2)?',
        bn: 'কম্পিউটার বিজ্ঞানীরা কেন 5n^2 + 200n + 5000 এর মতো সঠিক সমীকরণকে সংক্ষেপে শুধুমাত্র O(n^2) লেখেন?'
      },
      options: [
        {
          en: 'As n grows towards very large values, the n^2 term dominates the total execution cost so heavily that lower terms and constant factors become negligible',
          bn: 'n এর মান যখন অনেক বড় হতে থাকে, তখন n^2 পদটি এত প্রভাবশালী হয়ে ওঠে যে ছোট পদ ও ধ্রুবক সংখ্যার প্রভাব নগণ্য হয়ে যায়'
        },
        {
          en: 'Because computer hardware cannot multiply numbers by 5',
          bn: 'কারণ কম্পিউটার সংখ্যাকে ৫ দিয়ে গুণ করতে পারে না'
        },
        {
          en: 'To make mathematical calculations fit on a single line of paper',
          bn: 'যাতে কাগজের এক লাইনে হিসাব লেখা যায়'
        },
        {
          en: 'Constants are deleted by web browser compilers',
          bn: 'ব্রাউজার কম্পাইলার ধ্রুবক মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The dominant term law dictates that the highest-order power controls scaling.',
        bn: 'সবচেয়ে বড় ঘাতটিই দীর্ঘমেয়াদে পুরো সমীকরণের বৃদ্ধি নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'Asymptotic notation captures growth trends at scale. The highest-order term (n^2) overwhelms lower-order components as n approaches infinity.',
        bn: 'বিগ-ও নোটেশন মূলত বড় স্কেলের বৃদ্ধির হার বিবেচনা করে, যেখানে সর্বোচ্চ ঘাতটির তুলনায় বাকি সব পদ গৌণ হয়ে পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-big-o-thinking',
    title: {
      en: 'Big-O Analysis & Growth Families Quiz',
      bn: 'বিগ-ও অ্যানালাইসিস ও গ্রোথ ফ্যামিলি কুইজ'
    },
    questions: [
      {
        id: 'q-bigo-fundamental-purpose',
        kind: 'mcq',
        topic: 'Fundamental definition of Big-O notation',
        question: {
          en: 'What does Big-O notation fundamentally measure in computer science?',
          bn: 'কম্পিউটার সায়েন্সে বিগ-ও নোটেশন মূলত কোন বিষয়টি পরিমাপ করে?'
        },
        options: [
          {
            en: 'How the count of elementary operations grows asymptotically as the input volume n increases',
            bn: 'ইনপুটের আকার n বাড়ার সাথে সাথে মৌলিক অপারেশনের সংখ্যা কীভাবে আনুপাতিক হারে বৃদ্ধি পায়'
          },
          {
            en: 'The exact execution runtime in microseconds on a specific personal computer',
            bn: 'নির্দিষ্ট কম্পিউটারে কোড চলতে কয় মাইক্রোসেকেন্ড সময় লাগে তার হিসাব'
          },
          {
            en: 'The total physical memory consumed by the operating system kernel',
            bn: 'অপারেটিং সিস্টেমের মেমোরির মোট পরিমাণ'
          },
          {
            en: 'The line count of source code in the software repository',
            bn: 'সফটওয়্যারের সোর্স কোডের মোট লাইনের সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Focus on growth rate of operations relative to input size n.',
          bn: 'ইনপুট n এর সাপেক্ষে কাজের সংখ্যা বৃদ্ধির হারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Big-O abstracts away hardware differences by evaluating operational growth rates as a function of input scale n.',
          bn: 'বিগ-ও হার্ডওয়্যারের ভিন্নতা বাদ দিয়ে ইনপুট সাইজ n-এর সাপেক্ষে অ্যালগরিদমের কাজের বৃদ্ধির হার পরিমাপ করে।'
        }
      },
      {
        id: 'q-bigo-binary-search-complexity',
        kind: 'mcq',
        topic: 'Logarithmic growth rate mechanics',
        question: {
          en: 'Why does Binary Search run in O(log n) time complexity rather than O(n)?',
          bn: 'বাইনারি সার্চের কমপ্লেক্সিটি O(n)-এর পরিবর্তে কেন O(log n) হয়?'
        },
        options: [
          {
            en: 'Because every inspection comparison cuts the remaining search space in half, requiring at most log2(n) probes to locate any value',
            bn: 'কারণ প্রতি পদক্ষেপে তুলনা করে এটি অবশিষ্ট খোঁজার এলাকাকে অর্ধেক করে দেয়, ফলে সর্বোচ্চ log2(n) ধাপেই কাঙ্ক্ষিত মান পাওয়া যায়'
          },
          {
            en: 'Because it only searches through the first five items of the array',
            bn: 'কারণ এটি কেবল প্রথম পাঁচটি উপাদানের ভেতর খোঁজ করে'
          },
          {
            en: 'Because it runs in parallel on multiple processor threads simultaneously',
            bn: 'কারণ এটি অনেকগুলো থ্রেডে একসাথে সমান্তরালভাবে চলে'
          },
          {
            en: 'Because it relies on caching values directly inside the L1 CPU cache',
            bn: 'কারণ এটি ক্যাশ মেমোরির ওপর নির্ভর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Halving the search space repeatedly produces logarithmic scaling.',
          bn: 'খোঁজার পরিসর বারবার অর্ধেক করার সাথে লগারিদম জড়িত।'
        },
        explanation: {
          en: 'Halving the search range per step yields an inverse exponential relationship, resolving in log2(n) iterations.',
          bn: 'প্রতিটি পদক্ষেপে এলাকা অর্ধেক করায় ইনপুট যত বড়ই হোক না কেন খুব কম সংখ্যক ধাপে উত্তর বের করা সম্ভব হয়।'
        }
      },
      {
        id: 'q-bigo-sequential-vs-nested',
        kind: 'mcq',
        topic: 'Sequential versus nested loops complexity',
        question: {
          en: 'Consider two code blocks: Code A runs three consecutive separate loops of size n; Code B runs an outer loop of size n containing an inner loop of size n. What are their respective complexities?',
          bn: 'দুটি কোড বিবেচনা করুন: কোড এ-তে পর পর তিনটি আলাদা n আকারের লুপ চলে; আর কোড বি-তে n আকারের একটি লুপের ভেতর আরেকটি n আকারের লুপ চলে। এদের কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'Code A is O(n) because sequential loops add (3n = O(n)); Code B is O(n^2) because nested loops multiply (n * n = O(n^2))',
            bn: 'কোড এ হলো O(n) কারণ পরপর লুপ যোগ হয় (3n = O(n)); এবং কোড বি হলো O(n^2) কারণ নেস্টেড লুপ গুণ হয় (n * n = O(n^2))'
          },
          {
            en: 'Both codes run in O(n^3) cubic time',
            bn: 'উভয় কোডই O(n^3) কিউবিক টাইমে চলে'
          },
          {
            en: 'Both codes run in O(n) linear time',
            bn: 'উভয় কোডই O(n) লিনিয়ার টাইমে চলে'
          },
          {
            en: 'Code A is O(1) and Code B is O(n)',
            bn: 'কোড এ হলো O(1) এবং কোড বি হলো O(n)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Separate loops add together; nested loops multiply.',
          bn: 'আলাদা লুপগুলোর কাজ যোগ হয়, আর নেস্টেড লুপে কাজ গুণ হয়।'
        },
        explanation: {
          en: 'Sequential loops add their iterations (n + n + n = 3n -> O(n)). Nested loops repeat an inner loop for each outer step, multiplying to O(n^2).',
          bn: 'পরপর লুপ চললে n + n + n = 3n হয় যা O(n), কিন্তু একটির ভেতর আরেকটি থাকলে n * n = O(n^2) হয়।'
        }
      },
      {
        id: 'q-bigo-amortized-meaning',
        kind: 'mcq',
        topic: 'Meaning of amortized O(1) in dynamic arrays',
        question: {
          en: 'What does it mean when array append (.push) is documented as having an amortized O(1) complexity?',
          bn: 'ডায়নামিক অ্যারোতে উপাদান যুক্ত করা (.push) একটি "অ্যামর্টাইজড O(1)" অপারেশন—এর অর্থ কী?'
        },
        options: [
          {
            en: 'While occasional array resizing triggers an expensive O(n) memory reallocation, the vast majority of pushes cost O(1), making the average cost across any sequence of n insertions constant O(1)',
            bn: 'যদিও মেমোরি ভরলে মাঝে মাঝে O(n) খরচে পুরো অ্যারে নতুন জায়গায় কপি করতে হয়, তবে বেশিরভাগ পুশ O(1) সময়ে শেষ হওয়ায় গড়ে প্রতিটি পুশের খরচ কনস্ট্যান্ট O(1) থাকে'
          },
          {
            en: 'The operation is guaranteed to never take more than one CPU instruction cycle',
            bn: 'অপারেশনটি কখনোই একটির বেশি সিপিইউ ইন্সট্রাকশন নেয় না'
          },
          {
            en: 'The array has infinite memory allocated upon creation',
            bn: 'অ্যারেটি তৈরির সময়ই অসীম মেমোরি বরাদ্দ করা হয়'
          },
          {
            en: 'The operation only works when compiling in production mode',
            bn: 'অপারেশনটি কেবল প্রোডাকশন মোডে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Averages the occasional resize cost over many cheap individual operations.',
          bn: 'মাঝে মাঝে ঘটা বড় খরচকে বহু সংখ্যক সস্তা কাজের ওপর সমানভাবে ভাগ করে দেখার কথা ভাবুন।'
        },
        explanation: {
          en: 'Amortization averages worst-case occasional operations (like array doubling) over a long chain of cheap O(1) operations, proving overall linear cost.',
          bn: 'অ্যামর্টাইজেশন মাঝে মাঝে ঘটা বড় রি-অ্যালোকেশনের খরচকে ধারাবাহিকের বহু সস্তা কাজের সাথে ভাগ করে সামগ্রিক গড়কে O(1) প্রমাণ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'sorting-physics',
    tech: 'sorting',
    title: {
      en: 'The Physics of Sorting & Information Theory',
      bn: 'সর্টের পদার্থবিদ্যা ও ইনফরমেশন থিওরি'
    }
  }
};
