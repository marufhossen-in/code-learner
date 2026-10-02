import type { Lesson } from '../../../lib/types';

export const sortingPhysicsLesson: Lesson = {
  slug: 'sorting-physics',
  tech: 'sorting',
  title: {
    en: 'The Physics of Sorting, Information Theory & Stability',
    bn: 'সর্টের পদার্থবিদ্যা, ইনফরমেশন থিওরি ও স্ট্যাবিলিটি'
  },
  summary: {
    en: 'Sorting is fundamentally an information-gathering process. Arranging n elements means identifying 1 correct permutation out of n-factorial possibilities. Because each binary comparison yields at most 1 bit of information, information theory establishes that no comparison-based sort can beat an Omega(n log n) lower bound. For a list of 4 elements, 24 permutations exist, requiring a decision tree of at least 5 comparisons, while naive bubble sort spends 6 comparisons. Beyond raw complexity, production algorithms depend on stability, memory footprint, and adaptivity. Equal keys must preserve their relative arrival order during secondary column sorts. Rather than deploying pure academic algorithms, modern runtimes rely on engineered hybrids like Timsort and Introsort. This lesson explores decision tree bounds, stability guarantees, cache locality tradeoffs, and hybrid sorting architectures.',
    bn: 'সর্টিং মূলত একটি তথ্য-উদ্ধার প্রক্রিয়া। n সংখ্যক উপাদান সাজানো মানে হলো n-ফ্যাক্টোরিয়াল সম্ভাব্য বিন্যাসের মধ্য থেকে ১টি সঠিক ক্রম শনাক্ত করা। যেহেতু প্রতিটি বাইনারি তুলনা সর্বোচ্চ ১ বিট তথ্য দেয়, তাই ইনফরমেশন থিওরি অনুযায়ী কোনো তুলনাভিত্তিক সর্ট Omega(n log n)-এর চেয়ে দ্রুত হতে পারে না। উদাহরণস্বরূপ ৪টি উপাদানের জন্য ২৪টি বিন্যাস সম্ভব, যার সমাধান পেতে অন্তত ৫টি তুলনার প্রয়োজন হয়, যেখানে বাবল সর্ট ৬টি তুলনা খরচ করে। শুধু কমপ্লেক্সিটি নয়, বাস্তব সফটওয়্যারে স্ট্যাবিলিটি বা স্থায়িত্ব, মেমোরি এবং অ্যাডাপ্টিভিটি অত্যন্ত গুরুত্বপূর্ণ। একাধিক কলামে সর্ট করার সময় সমান মানগুলোর আগের আপেক্ষিক ক্রম বজায় রাখা জরুরি। আধুনিক প্রোগ্রামিং ভাষাগুলোতে তাই টিম-সর্ট (Timsort) ও ইন্ট্রো-সর্টের (Introsort) মতো শক্তিশালী হাইব্রিড অ্যালগরিদম ব্যবহৃত হয়। এই পাঠে ডিসিশন ট্রি সীমা, স্ট্যাবিলিটি গ্যারান্টি এবং হাইব্রিড সর্টিংয়ের মূলনীতি ব্যাখ্যা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Information Bounds on Comparisons',
        bn: 'মূল ধারণা: তথ্য তত্ত্ব ও তুলনার নিম্নসীমা'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you sort data using comparisons, you are asking true-or-false questions to narrow down permutations. A decision tree models every potential comparison. The height of this tree dictates the minimum comparisons required.',
        bn: 'তুলনা করে ডাটা সাজানোর সময় আপনি মূলত সত্য-মিথ্যা প্রশ্নের মাধ্যমে সম্ভাব্য বিন্যাস খুঁজে বের করেন। প্রতিটি তুলনার সম্ভাব্য পথ একটি ডিসিশন ট্রির মাধ্যমে প্রকাশ পায়। এই ট্রির উচ্চতাই নির্ধারণ করে কোনো উপাদান সাজাতে সর্বনিম্ন কয়টি তুলনা লাগবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The n-log-n Lower Bound',
          def: {
            en: 'The mathematical proof establishing that any comparison sort requires at least Omega(n log n) operations in the worst case',
            bn: 'গাণিতিক প্রমাণ যা নিশ্চিত করে যে কোনো তুলনাভিত্তিক সর্ট সবচেয়ে খারাপ পরিস্থিতিতেও কমপক্ষে Omega(n log n) কাজ করতে বাধ্য'
          }
        },
        {
          term: 'Decision Tree Model',
          def: {
            en: 'A binary tree where each internal node represents a pairwise comparison and each leaf represents a fully sorted permutation',
            bn: 'একটি বাইনারি ট্রি যার ভেতরের নোড দুটি মানের তুলনা নির্দেশ করে এবং পাতার নোডগুলো চূড়ান্ত সাজানো রূপকে নির্দেশ করে'
          }
        },
        {
          term: 'Sorting Stability',
          def: {
            en: 'The guarantee that elements with identical keys preserve their relative order from the original unsorted input array',
            bn: 'এমন বৈশিষ্ট্য যা নিশ্চিত করে যে সমান মানবিশিষ্ট উপাদানগুলো ইনপুটের যে ক্রমানুসারে এসেছিল, সাজানোর পরেও সেই একই আপেক্ষিক অবস্থানে থাকবে'
          }
        },
        {
          term: 'Adaptive Sorting',
          def: {
            en: 'An algorithm property where execution time decreases automatically when the input sequence is already partially ordered',
            bn: 'অ্যালগরিদমের এমন বিশেষত্ব যার ফলে ইনপুট উপাত্ত আগে থেকেই কিছুটা সাজানো থাকলে তা দ্রুততম সময়ে কাজ শেষ করতে পারে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'sorting-properties-table',
      text: {
        en: 'Architectural Comparison of Standard Sorts',
        bn: 'স্ট্যান্ডার্ড সর্টিং অ্যালগরিদমসমূহের তুলনামূলক বৈশিষ্ট্য'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Time Complexity, Space Footprint, and Stability of Common Sorting Algorithms',
        bn: 'জনপ্রিয় সর্টিং অ্যালগরিদমসমূহের কমপ্লেক্সিটি, মেমোরি খরচ এবং স্ট্যাবিলিটি'
      },
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Worst Time', bn: 'সবচেয়ে খারাপ সময়' },
        { en: 'Space', bn: 'অতিরিক্ত মেমোরি' },
        { en: 'Stable?', bn: 'স্থিতিশীল?' }
      ],
      rows: [
        [
          { en: 'Bubble Sort', bn: 'বাবল সর্ট' },
          { en: 'O(n^2)', bn: 'O(n^2)' },
          { en: 'O(1) in-place', bn: 'O(1) নিজস্ব স্থানে' },
          { en: 'Yes', bn: 'হ্যাঁ' }
        ],
        [
          { en: 'Insertion Sort', bn: 'ইনসার্শন সর্ট' },
          { en: 'O(n^2) (O(n) adaptive)', bn: 'O(n^2) (সাজানো থাকলে O(n))' },
          { en: 'O(1) in-place', bn: 'O(1) নিজস্ব স্থানে' },
          { en: 'Yes', bn: 'হ্যাঁ' }
        ],
        [
          { en: 'Merge Sort', bn: 'মার্জ সর্ট' },
          { en: 'O(n log n)', bn: 'O(n log n)' },
          { en: 'O(n) buffer', bn: 'O(n) বাফার' },
          { en: 'Yes', bn: 'হ্যাঁ' }
        ],
        [
          { en: 'Quick Sort', bn: 'কুইক সর্ট' },
          { en: 'O(n^2) (O(n log n) average)', bn: 'O(n^2) (গড়ে O(n log n))' },
          { en: 'O(log n) stack', bn: 'O(log n) স্ট্যাক' },
          { en: 'No', bn: 'না' }
        ],
        [
          { en: 'Timsort (Hybrid)', bn: 'টিমসর্ট (হাইব্রিড)' },
          { en: 'O(n log n)', bn: 'O(n log n)' },
          { en: 'O(n) buffer', bn: 'O(n) বাফার' },
          { en: 'Yes', bn: 'হ্যাঁ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Decision Tree Lower Bound for 4 Elements',
        bn: 'চালনাযোগ্য সিমুলেশন: ৪টি উপাদানের জন্য ডিসিশন ট্রি সর্বনিম্ন তুলনার হিসাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the permutation count for 4 elements (24 outcomes), the theoretical minimum comparisons needed (5 comparisons), and compares it to quadratic bubble sort (6 comparisons):',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৪টি উপাদানের জন্য মোট ২৪টি বিন্যাস, ইনফরমেশন থিওরির সর্বনিম্ন ৫টি তুলনার প্রয়োজন এবং বাবল সর্টের ৬টি তুলনার তুলনা হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'sorting-physics-sim',
      lang: 'javascript',
      code: `// Information Theory Decision Tree Bound Simulation for n = 4
const n = 4; // 4 elements to sort

// Total permutations = 4! = 4 * 3 * 2 * 1 = 24
const permutations = 24;

// Minimum comparisons = ceil(log2(n!)) = ceil(log2(24)) = ceil(4.585) = 5
const minComparisons = Math.ceil(Math.log2(permutations));

// Bubble sort worst-case comparisons = n * (n - 1) / 2 = 4 * 3 / 2 = 6
const bubbleWorst = (n * (n - 1)) / 2;

console.log('Total input items being sorted:', n);
// -> Total input items being sorted: 4

console.log('Possible permutations of 4 elements (4!):', permutations);
// -> Possible permutations of 4 elements (4!): 24

console.log('Information theory theoretical minimum comparisons required:', minComparisons);
// -> Information theory theoretical minimum comparisons required: 5

console.log('Worst-case comparisons performed by quadratic bubble sort:', bubbleWorst);
// -> Worst-case comparisons performed by quadratic bubble sort: 6`,
      caption: {
        en: 'Figure 1: Sorting 4 elements yields 24 permutations requiring at least 5 comparisons by information theory, while bubble sort executes 6 comparisons',
        bn: 'চিত্র ১: ৪টি উপাদান সাজাতে ২৪টি বিন্যাস তৈরি হয় যার জন্য তাত্ত্বিকভাবে অন্তত ৫টি তুলনা লাগে, যেখানে বাবল সর্ট ৬টি তুলনা চালায়'
      }
    },
    {
      type: 'heading',
      id: 'stability-realworld-guide',
      text: {
        en: 'Why Stability & Hybrids Dominate Real Systems',
        bn: 'বাস্তব সফটওয়্যারে স্ট্যাবিলিটি ও হাইব্রিড সর্টের প্রয়োজনীয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Stability is vital in applications with composite data. If a user sorts transactions first by date and then by customer name, a stable sort preserves the chronological order within each customer group.',
        bn: 'বহুস্তরীয় তথ্যের ক্ষেত্রে স্ট্যাবিলিটি অপরিহার্য। ব্যবহারকারী যদি প্রথমে লেনদেনগুলো তারিখ অনুযায়ী সাজায় এবং পরে গ্রাহকের নাম অনুসারে সাজায়, তবে স্থিতিশীল সর্ট প্রতিটি গ্রাহকের ভেতরের তারিখের ক্রমটি অক্ষত রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Multi-Key Sorting',
          def: {
            en: 'Sorting across multiple record attributes consecutively, relying on stability so later passes preserve earlier orders',
            bn: 'একাধিক বৈশিষ্ট্যের ওপর ভিত্তি করে পর্যায়ক্রমে ডাটা সাজানো, যাতে আগের সাজানো ক্রমটি পরের সর্টে নষ্ট না হয়'
          }
        },
        {
          term: 'Timsort Architecture',
          def: {
            en: 'Adaptive hybrid algorithm finding naturally occurring ordered runs and merging them, balancing cache efficiency and stability',
            bn: 'প্রাকৃতিক সাজানো অংশগুলো শনাক্ত করে মার্জ করার অত্যন্ত দক্ষ হাইব্রিড অ্যালগরিদম যা পাইথন ও জাভাস্ক্রিপ্টে ব্যবহৃত হয়'
          }
        },
        {
          term: 'In-Place Memory Tradeoff',
          def: {
            en: 'Sorting without auxiliary memory allocations (O(1) extra space), trading algorithmic complexity for memory conservation',
            bn: 'অতিরিক্ত বাফার মেমোরি ব্যবহার না করে একই অ্যারের ভেতরে মান অদলবদল করে মেমোরি বাঁচানোর কৌশল'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sort-min-comparisons-ex',
      kind: 'mcq',
      topic: 'Information theory lower bound for 4 elements',
      question: {
        en: 'According to our decision tree simulation for 4 elements (24 permutations), what is the absolute minimum number of comparisons theoretically required to sort them?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ৪টি উপাদানের (২৪টি বিন্যাস) জন্য তাত্ত্বিকভাবে সর্বনিম্ন কয়টি তুলনা প্রয়োজন?'
      },
      options: [
        {
          en: '5 comparisons',
          bn: '৫টি তুলনা'
        },
        {
          en: '24 comparisons',
          bn: '২৪টি তুলনা'
        },
        {
          en: '2 comparisons',
          bn: '২টি তুলনা'
        },
        {
          en: '1 comparison',
          bn: '১টি তুলনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'log2(24) is approximately 4.585, which rounds up to 5.',
        bn: 'log2(২৪) প্রায় ৪.৫৮৫, যা সিলিং করলে ৫ হয়।'
      },
      explanation: {
        en: 'Because 2^4 = 16 < 24 < 32 = 2^5, a binary tree must reach a height of at least 5 to distinguish all 24 permutations.',
        bn: 'যেহেতু ২^৪ = ১৬ < ২৪ < ৩২ = ২^৫, তাই ২৪টি ভিন্ন বিন্যাসের সঠিক ক্রম খুঁজে পেতে কমপক্ষে ৫টি তুলনার প্রয়োজন।'
      }
    },
    {
      id: 'sort-stability-definition-ex',
      kind: 'mcq',
      topic: 'Definition and importance of sorting stability',
      question: {
        en: 'Why is an algorithm like Merge Sort classified as "stable" while naive Quick Sort is classified as "unstable"?',
        bn: 'মার্জ সর্টকে কেন "স্থিতিশীল বা স্ট্যাবল" বলা হয় এবং সাধারণ কুইক সর্টকে কেন "আনস্ট্যাবল" বলা হয়?'
      },
      options: [
        {
          en: 'Merge Sort guarantees that items with identical keys maintain their original relative order, whereas Quick Sort long-distance partitioning swaps can disrupt equal keys',
          bn: 'মার্জ সর্ট নিশ্চিত করে যে সমান মানবিশিষ্ট উপাদানগুলোর আগের আপেক্ষিক ক্রম বজায় থাকবে, কিন্তু কুইক সর্টের দূরবর্তী অদলবদল সমান উপাদানগুলোর ক্রম ভেঙে দেয়'
        },
        {
          en: 'Merge Sort never runs out of RAM',
          bn: 'মার্জ সর্টে কখনো মেমোরি শেষ হয় না'
        },
        {
          en: 'Quick Sort was banned from computer networks',
          bn: 'কুইক সর্ট নিষিদ্ধ করা হয়েছে'
        },
        {
          en: 'Merge Sort only works on numbers and not text strings',
          bn: 'মার্জ সর্ট কেবল সংখ্যায় চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Equal items preserve their relative input order in a stable sort.',
        bn: 'সমান মানগুলো তাদের মূল ইনপুটের আপেক্ষিক অবস্থান বজায় রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'Stability means relative order of equal keys is preserved. Merge sort achieves this by choosing the left item on ties.',
        bn: 'স্ট্যাবিলিটি মানে হলো সমান মানের উপাদানের আপেক্ষিক অবস্থান অটুট রাখা। মার্জ সর্ট টাই হলে বামের উপাদান আগে নিয়ে এটি নিশ্চিত করে।'
      }
    },
    {
      id: 'sort-timsort-hybrid-ex',
      kind: 'mcq',
      topic: 'Why production engines choose hybrid sorts',
      question: {
        en: 'Why do modern runtime standard libraries (like Python, Java, and V8 JavaScript) use Timsort rather than textbook Quick Sort or Bubble Sort?',
        bn: 'পাইথন, জাভা এবং জাভাস্ক্রিপ্ট ভি৮ ইঞ্জিনে সাধারণ কুইক সর্ট বা বাবল সর্টের বদলে কেন টিম-সর্ট (Timsort) ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'Timsort combines Merge Sort and Insertion Sort to exploit existing ordered runs in real-world data, achieving guaranteed O(n log n) worst-case, O(n) best-case, and stability',
          bn: 'টিমসর্ট মার্জ সর্ট ও ইনসার্শন সর্টের সমন্বয়ে বাস্তব ডেটায় থাকা প্রাকৃতিক সাজানো অংশগুলো কাজে লাগিয়ে গ্যারান্টিযুক্ত O(n log n), সেরা অবস্থায় O(n) এবং পূর্ণ স্ট্যাবিলিটি দেয়'
        },
        {
          en: 'Timsort uses quantum computing algorithms',
          bn: 'টিমসর্ট কোয়ান্টাম কম্পিউটার ব্যবহার করে'
        },
        {
          en: 'Timsort is written in assembly language only',
          bn: 'টিমসর্ট কেবল অ্যাসেম্বলি ভাষায় লেখা যায়'
        },
        {
          en: 'Timsort avoids comparing elements completely',
          bn: 'টিমসর্টে কোনো তুলনা করতে হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Combines merge sort guarantees with adaptive insertion sort speed.',
        bn: 'মার্জ সর্টের নিরাপত্তা এবং ইনসার্শন সর্টের দ্রুতগতির সমন্বয়ের কথা ভাবুন।'
      },
      explanation: {
        en: 'Real datasets often contain pre-sorted runs. Timsort detects these runs, running in linear O(n) time on ordered inputs while maintaining stability.',
        bn: 'বাস্তব জীবনের ডেটায় প্রায়ই কিছু অংশ আগে থেকেই সাজানো থাকে। টিমসর্ট এগুলো কাজে লাগিয়ে অত্যন্ত দ্রুত ও স্থিতিশীলভাবে ফলাফল দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-sorting-physics',
    title: {
      en: 'The Physics of Sorting Quiz',
      bn: 'সর্টের পদার্থবিদ্যা কুইজ'
    },
    questions: [
      {
        id: 'q-sort-lower-bound-escape',
        kind: 'mcq',
        topic: 'How non-comparison sorts bypass the n log n bound',
        question: {
          en: 'How do non-comparison algorithms like Counting Sort and Radix Sort achieve linear O(n) time complexity without violating the Omega(n log n) mathematical lower bound?',
          bn: 'কাউন্টিং সর্ট ও রেডিক্স সর্টের মতো নন-কম্প্যারিজন অ্যালগরিদম কীভাবে গণিতের Omega(n log n) নিম্নসীমা না ভেঙে লিনিয়ার O(n) সময়ে কাজ শেষ করে?'
        },
        options: [
          {
            en: 'They bypass pairwise comparisons entirely by using direct integer array indexing or digit bucketing, escaping the binary decision tree restriction',
            bn: 'তারা দুটি মানের পারস্পরিক তুলনার পরিবর্তে সরাসরি ইনডেক্স বা অংকের মান গুনে সাজায়, ফলে বাইনারি ডিসিশন ট্রির গাণিতিক সীমাবদ্ধতা এদের ক্ষেত্রে প্রযোজ্য হয় না'
          },
          {
            en: 'They skip half the elements in the array',
            bn: 'তারা অর্ধেক উপাদান বাদ দিয়ে সাজায়'
          },
          {
            en: 'They violate the laws of mathematics using hardware acceleration',
            bn: 'তারা হার্ডওয়্যার দিয়ে গণিতের নিয়ম ভেঙে দেয়'
          },
          {
            en: 'They are only theoretical models that cannot run on real computers',
            bn: 'এগুলো কেবল তাত্ত্বিক এবং কম্পিউটারে চালানো যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The bound only applies to comparison-based models.',
          bn: 'Omega(n log n) সীমাবদ্ধতা কেবল তুলনাভিত্তিক সর্টের জন্যই প্রযোজ্য।'
        },
        explanation: {
          en: 'The lower bound strictly constrains comparison operations. By indexing directly by numerical values, non-comparison sorts escape the model.',
          bn: 'কম্প্যারিজন লোয়ার বাউন্ড কেবল তুলনার জন্য সত্য। সরাসরি ইনডেক্সিং করে মান গণনা করায় নন-কম্প্যারিজন সর্ট এই বাউন্ডের বাইরে থাকে।'
        }
      },
      {
        id: 'q-sort-in-place-tradeoff',
        kind: 'mcq',
        topic: 'Tradeoff of in-place versus out-of-place sorting',
        question: {
          en: 'What is the principal architectural disadvantage of standard Merge Sort in embedded systems with extremely limited memory?',
          bn: 'অত্যন্ত সীমিত মেমোরিযুক্ত এমবেডেড সিস্টেমে সাধারণ মার্জ সর্ট ব্যবহারের প্রধান অসুবিধা কী?'
        },
        options: [
          {
            en: 'Merge Sort requires O(n) auxiliary memory buffer space to merge subarrays, doubling total memory consumption',
            bn: 'মার্জ সর্টে দুটি অংশ জোড়া লাগানোর জন্য O(n) অতিরিক্ত বাফার মেমোরি লাগে, যা মোট মেমোরির খরচ দ্বিগুণ করে দেয়'
          },
          {
            en: 'Merge Sort takes quadratic time to run',
            bn: 'মার্জ সর্ট চলতে কোয়াড্রাটিক সময় নেয়'
          },
          {
            en: 'Merge Sort damages flash memory chips',
            bn: 'মার্জ সর্ট ফ্ল্যাশ মেমোরি নষ্ট করে'
          },
          {
            en: 'Merge Sort cannot process 32-bit integers',
            bn: 'মার্জ সর্ট ৩২-বিট সংখ্যায় কাজ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Merges require temporary auxiliary arrays.',
          bn: 'মার্জ করার সময় আলাদা বাফার অ্যারের প্রয়োজনীয়তার কথা ভাবুন।'
        },
        explanation: {
          en: 'Merge Sort requires an auxiliary buffer of size n to execute the merge step, making it memory-intensive compared to in-place Quick Sort or Heap Sort.',
          bn: 'মার্জ সর্টে উপাদান একত্র করার জন্য মূল অ্যারোর সমান O(n) অতিরিক্ত মেমোরি বাফার লাগে, যা মেমোরি-সংকটের ডিভাইসের জন্য ব্যয়বহুল।'
        }
      },
      {
        id: 'q-sort-adaptivity-benefit',
        kind: 'mcq',
        topic: 'Adaptive sorting behavior on nearly-sorted data',
        question: {
          en: 'How does an adaptive sorting algorithm behave when provided an array of 1000 elements where only two adjacent items are inverted?',
          bn: '১০০০টি উপাদানের একটি অ্যারোতে কেবল পাশাপাশি দুটি উপাদান উল্টো থাকলে একটি অ্যাডাপ্টিভ সর্টিং অ্যালগরিদম কেমন আচরণ করে?'
        },
        options: [
          {
            en: 'It executes in near-linear O(n) time by detecting existing order and swapping only the misplaced pair',
            bn: 'এটি প্রায়-লিনিয়ার O(n) সময়ে কাজ শেষ করে কারণ এটি বিদ্যমান ক্রম শনাক্ত করে কেবল ভুল জোড়াটিকে ঠিক করে নেয়'
          },
          {
            en: 'It crashes because the data is not completely sorted',
            bn: 'সম্পূর্ণ সাজানো না থাকায় এটি ক্র্যাশ করে'
          },
          {
            en: 'It takes full O(n^2) time regardless of input order',
            bn: 'ইনপুট যাই হোক এটি পুরো O(n^2) সময় নেয়'
          },
          {
            en: 'It reverses the entire array backwards',
            bn: 'এটি পুরো অ্যারোটিকে উল্টো করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Adaptive sorts exploit existing sortedness to finish faster.',
          bn: 'আগে থেকেই সাজানো থাকার সুবিধাকে কাজে লাগিয়ে দ্রুত শেষ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Adaptive sorts scale with inversion count. With only one inversion, algorithms like Insertion Sort or Timsort finish in near O(n) time.',
          bn: 'অ্যাডাপ্টিভ সর্টের সময় ইনভার্শনের সংখ্যার ওপর নির্ভর করে। মাত্র একটি ভুল থাকলে ইনসার্শন সর্ট বা টিমসর্ট প্রায় O(n) সময়েই কাজ সম্পন্ন করে।'
        }
      },
      {
        id: 'q-sort-quicksort-pivot-danger',
        kind: 'mcq',
        topic: 'Quicksort worst-case vulnerability',
        question: {
          en: 'What causes standard naive Quick Sort to degrade to its catastrophic O(n^2) worst-case time complexity?',
          bn: 'কোন কারণে সাধারণ কুইক সর্ট তার সবচেয়ে বিপর্যয়কর O(n^2) কোয়াড্রাটিক টাইমে অবনমিত হয়?'
        },
        options: [
          {
            en: 'Consistently selecting the smallest or largest element as the pivot (e.g. choosing the first element on already sorted data), producing unbalanced partitions of size 0 and n-1',
            bn: 'ধারাবাহিকভাবে সবচেয়ে ছোট বা বড় উপাদানকে পিভট হিসেবে বেছে নেওয়া (যেমন সাজানো উপাত্তে প্রথম মান নেওয়া), যার ফলে ০ এবং n-১ আকারের চরম ভারসাম্যহীন বিভাজন ঘটে'
          },
          {
            en: 'Using too much stack memory on 64-bit systems',
            bn: '৬৪-বিট সিস্টেমে বেশি স্ট্যাক মেমোরি ব্যবহার করলে'
          },
          {
            en: 'Compiling with optimization flags turned off',
            bn: 'কম্পাইলার অপ্টিমাইজেশন বন্ধ থাকলে'
          },
          {
            en: 'Sorting floating-point numbers instead of integers',
            bn: 'পূর্ণসংখ্যার বদলে ভগ্নাংশ সর্ট করলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unbalanced partitions create degenerate trees of depth n.',
          bn: 'চরম ভারসাম্যহীন পার্টিশন হলে ট্রি n গভীরতায় পৌঁছে কোয়াড্রাটিক হয়।'
        },
        explanation: {
          en: 'If partitions are lopsided, recursion depth becomes n rather than log n, degenerating total comparisons to quadratic O(n^2).',
          bn: 'পিভট চরম ভারসাম্যহীন হলে রিকার্শনের গভীরতা n হয়ে যায়, যার ফলে মোট তুলনার সংখ্যা কোয়াড্রাটিক O(n^2) তৈরি করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-accidental-quadratic',
    tech: 'sorting',
    title: {
      en: 'The Accidental Quadratic: Hidden Inefficiencies',
      bn: 'দি এক্সিডেন্টাল কোয়াড্রাটিক: লুকানো অদক্ষতা'
    }
  }
};
