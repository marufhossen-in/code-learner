import type { Lesson } from '../../../lib/types';

export const theTrayPanoramaLesson: Lesson = {
  slug: 'the-tray-panorama',
  tech: 'stacks',
  title: {
    en: 'Stack Architecture Synthesis — Patterns, Trade-offs, and Panorama',
    bn: 'স্ট্যাক আর্কিটেকচার সমন্বয়: প্যাটার্ন, ট্রেড-অফ এবং প্যানোরামা'
  },
  summary: {
    en: 'A stack is far more than a simple data container; it is an access discipline that converts memory into computation. We synthesize the entire Stacks curriculum across its core architectural patterns: Call Stacks, Postfix Evaluators, Delimiter Parsers, Monotonic Stacks, Min-Stacks, Shunting-Yard Translators, Command Undo/Redo Stacks, and Backtracking Solvers. We formalize the three structural trade-offs of stacks—no random access, temporal LIFO coupling, and linear timelines—and establish the algorithmic bridge to Queues and Trees.',
    bn: 'এই ডেটা স্ট্রাকচার কেবল একটি সাধারণ তথ্য ধারক নয়; এটি এমন এক অ্যাক্সেস-শৃঙ্খলা যা মেমোরিকে সরাসরি গণনামুখী করে তোলে। আমরা সম্পূর্ণ পাঠ্যক্রমকে এর প্রধান স্থাপত্য প্যাটার্নগুলোর মাধ্যমে সমন্বয় করি: কল ফ্রেম, পোস্টফিক্স ইভ্যালুয়েটর, ডিলিমিটার পার্সার, মনোটোনিক কাঠামো, মিন-ট্র্যাকার, শান্টিং-ইয়ার্ড অনুবাদক, কমান্ড আনডু/রিডু এবং ব্যাকট্র্যাকিং সমাধানকারী। আমরা তিনটি কাঠামোগত আপস—অ্যাক্সেসহীনতা, কঠোর লিফো নীতি এবং রৈখিক টাইমলাইন—বিশ্লেষণ করি এবং কিউ ও ট্রির সাথে যোগসূত্র স্থাপন করি।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'stack-patterns-synthesis',
      text: {
        en: 'The Stack Taxonomy: Specialized Execution Engines',
        bn: 'স্ট্যাক শ্রেণিবিভাগ: বিশেষায়িত এক্সিকিউশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Throughout this curriculum, we saw that a stack is defined by a strict access discipline: all insertions and removals occur at a single open end in O(1) time. This simple constraint buys automatic temporal reversal, making stacks the fundamental model for parsing, evaluating, reversing, and backtracking across modern computer systems.',
        bn: 'এই সম্পূর্ণ কোর্সে আমরা দেখেছি যে স্ট্যাক একটি কঠোর অ্যাক্সেস-শৃঙ্খলা দ্বারা পরিচালিত হয়: সমস্ত উপাদান ঢোকানো এবং বের করা একটিমাত্র উন্মুক্ত মুখে O(1) সময়ে ঘটে। এই সহজ নিয়মটি সময়ের বিপরীতমুখী প্রবাহ নিশ্চিত করে, যা আধুনিক কম্পিউটার সিস্টেমে পার্সিং, গাণিতিক মূল্যায়ন এবং ব্যাকট্র্যাকিংয়ের ভিত্তি হিসেবে কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, software engineers must recognize three structural limitations. First, this structure forbids O(1) random access: reading element k requires popping k items. Second, it enforces strict LIFO ordering, sacrificing chronological arrival fairness without a queue adapter. Third, it represents a single linear timeline, meaning branching histories require tree-based graphs.',
        bn: 'তবে সফটওয়্যার ইঞ্জিনিয়ারদের তিনটি কাঠামোগত সীমাবদ্ধতা মনে রাখতে হবে। প্রথমত, এই কাঠামোতে O(1) র্যান্ডম অ্যাক্সেস সম্ভব নয়: k নম্বর উপাদান দেখতে k বার পপ করতে হয়। দ্বিতীয়ত, এটি কঠোর লিফো নীতি মেনে চলে, ফলে কিউ ছাড়া এতে আগমনের স্বাভাবিক ন্যায্যতা পাওয়া যায় না। তৃতীয়ত, এটি একটি একক রৈখিক টাইমলাইন দেখায়, যার ফলে একাধিক শাখাযুক্ত ইতিহাসের জন্য ট্রি প্রয়োজন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'access-discipline',
          def: {
            en: 'A data structure invariant restricting all insertions and deletions to a single open end in O(1) time.',
            bn: 'এমন একটি নিয়ম যা সমস্ত সন্নিবেশ ও অপসারণকে একটিমাত্র উন্মুক্ত মুখে O(1) সময়ে সীমাবদ্ধ রাখে।'
          }
        },
        {
          term: 'temporal-reversal',
          def: {
            en: 'The property of LIFO order where the most recent event is always processed first, reversing chronological arrival.',
            bn: 'লিফো কাঠামোর বৈশিষ্ট্য যেখানে সাম্প্রতিকতম ঘটনাটি সবার আগে নিষ্পন্ন হয়, ফলে আগমনের ক্রম উল্টে যায়।'
          }
        },
        {
          term: 'monotonic-invariant',
          def: {
            en: 'Maintaining elements in strict increasing or decreasing order to answer horizon and range queries in O(n) total time.',
            bn: 'উপাদানগুলোকে কঠোরভাবে একমুখী ক্রমে রেখে সম্পূর্ণ অ্যারের রেঞ্জ ও দিগন্ত প্রশ্নের উত্তর মোট O(n) সময়ে প্রদান করা।'
          }
        },
        {
          term: 'structural-tradeoff',
          def: {
            en: 'The engineering compromise of sacrificing random index lookups in exchange for guaranteed O(1) end-boundary operations.',
            bn: 'প্রান্তিক অপারেশনে নিশ্চিত O(1) গতি পাওয়ার বিনিময়ে র্যান্ডম ইনডেক্স দেখার সুযোগ ত্যাগ করার প্রকৌশল আপস।'
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
      id: 'pattern-decision-matrix',
      text: {
        en: 'Architectural Pattern Matrix: Invariants and Production Use Cases',
        bn: 'স্থাপত্য প্যাটার্ন ম্যাট্রিক্স: নীতি এবং বাস্তব প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following decision matrix contrasts the primary stack patterns covered in our lessons. Use it as an architectural guide when deciding which stack variation fits your technical constraints.',
        bn: 'নিচের সিদ্ধান্ত ম্যাট্রিক্সটি আমাদের পাঠে আলোচিত প্রধান স্ট্যাক প্যাটার্নগুলোর তুলনামূলক চিত্র তুলে ধরে। আপনার কাজের প্রযুক্তিগত শর্তের জন্য কোন স্ট্যাক রূপটি উপযুক্ত তা নির্বাচনে এটি ব্যবহার করুন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Stack Architecture', bn: 'স্ট্যাক আর্কিটেকচার' },
        { en: 'Governing Invariant', bn: 'মূল নীতি' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'Production Application', bn: 'বাস্তব প্রয়োগ' }
      ],
      rows: [
        [
          { en: 'Delimiter Validator', bn: 'ডিলিমিটার ভ্যালিডেটর' },
          { en: 'LIFO match at pop', bn: 'পপে লিফো মিলন' },
          { en: 'O(n) linear scan', bn: 'O(n) রৈখিক স্ক্যান' },
          { en: 'Compilers, JSON parsers, linters', bn: 'কম্পাইলার, জেসন পার্সার, লিন্টার' }
        ],
        [
          { en: 'Monotonic Stack', bn: 'মনোটোনিক স্ট্যাক' },
          { en: 'Strict monotonic order', bn: 'কঠোর একমুখী ক্রম' },
          { en: 'O(1) amortized, O(n) total', bn: 'O(1) অ্যামর্টাইজড, O(n) মোট' },
          { en: 'Next Greater Element, Daily Temps', bn: 'নেক্সট গ্রেটার এলিমেন্ট, দৈনিক তাপমাত্রা' }
        ],
        [
          { en: 'Min-Stack (Dual Stack)', bn: 'মিন-স্ট্যাক (ডুয়াল স্ট্যাক)' },
          { en: 'Prefix minimum tracking', bn: 'প্রিফিক্স সর্বনিম্ন মান ট্র্যাকিং' },
          { en: 'O(1) push, pop, and getMin', bn: 'O(1) পুশ, পপ এবং getMin' },
          { en: 'Real-time metrics, financial trading', bn: 'রিয়েল-টাইম মেট্রিক্স, আর্থিক ট্রেডিং' }
        ],
        [
          { en: 'Shunting-Yard Parser', bn: 'শান্টিং-ইয়ার্ড পার্সার' },
          { en: 'Operator precedence order', bn: 'অপারেটর অগ্রাধিকার ক্রম' },
          { en: 'O(n) linear conversion', bn: 'O(n) রৈখিক রূপান্তর' },
          { en: 'Spreadsheet formulas, SQL planners', bn: 'স্প্রেডশিট ফর্মুলা, এসকিউএল প্ল্যানার' }
        ],
        [
          { en: 'Command Undo/Redo', bn: 'কমান্ড আনডু/রিডু' },
          { en: 'Redo-flush on mutation', bn: 'নতুন কাজে রিডু ফ্লাশ' },
          { en: 'O(1) undo and redo', bn: 'O(1) আনডু এবং রিডু' },
          { en: 'Text editors, graphics software', bn: 'টেক্সট এডিটর, গ্রাফিক্স সফটওয়্যার' }
        ],
        [
          { en: 'Backtracking Search', bn: 'ব্যাকট্র্যাকিং অনুসন্ধান' },
          { en: 'Choose-Explore-Unchoose', bn: 'পছন্দ-অনুসন্ধান-বাতিল' },
          { en: 'O(b^d) with early pruning', bn: 'ছাঁটাইসহ O(b^d)' },
          { en: 'N-Queens, Sudoku, game solvers', bn: 'N-রাণী, সুডোকু, গেম সমাধানকারী' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'stack-pattern-selector-impl',
      text: {
        en: 'Executable Stack Pattern Selector Implementation',
        bn: 'স্ট্যাক প্যাটার্ন নির্বাচকের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program routes algorithmic problem requirements to the optimal stack pattern and prints its operational characteristics.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি অ্যালগরিদমের চাহিদার ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সঠিক স্ট্যাক প্যাটার্ন নির্বাচন করে এবং তার বৈশিষ্ট্য প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      code: `function selectStackPattern(req) {
  const { needsExtremalMin, needsNextGreater, isUndoRedo, isParsing, isBacktracking } = req;

  if (needsExtremalMin) {
    return {
      pattern: 'Min-Stack (Dual Arrays / Tuples)',
      timeComplexity: 'O(1) getMin, O(1) push/pop',
      tradeoff: 'O(n) auxiliary prefix memory'
    };
  }

  if (needsNextGreater) {
    return {
      pattern: 'Monotonic Stack',
      timeComplexity: 'O(n) total amortized',
      tradeoff: 'Discards non-candidate elements strictly'
    };
  }

  if (isUndoRedo) {
    return {
      pattern: 'Command Pattern Dual Stacks',
      timeComplexity: 'O(1) undo and redo',
      tradeoff: 'Redo stack flushed on new action'
    };
  }

  if (isParsing) {
    return {
      pattern: 'Shunting-Yard / Delimiter Stack',
      timeComplexity: 'O(n) single linear pass',
      tradeoff: 'Operator precedence and nesting depth space'
    };
  }

  if (isBacktracking) {
    return {
      pattern: 'Backtracking Decision Stack',
      timeComplexity: 'O(branches ^ depth) with pruning',
      tradeoff: 'Requires symmetric Choose-Unchoose rollback'
    };
  }

  return {
    pattern: 'Standard LIFO Stack',
    timeComplexity: 'O(1) push and pop',
    tradeoff: 'No random access to middle elements'
  };
}

const c1 = selectStackPattern({ needsExtremalMin: true });
console.log('Analytics Stream:', c1.pattern);
// Output: Analytics Stream: Min-Stack (Dual Arrays / Tuples)

const c2 = selectStackPattern({ needsNextGreater: true });
console.log('Stock Spans:', c2.pattern);
// Output: Stock Spans: Monotonic Stack

const c3 = selectStackPattern({ isUndoRedo: true });
console.log('Document Editor:', c3.pattern);
// Output: Document Editor: Command Pattern Dual Stacks

const c4 = selectStackPattern({ isParsing: true });
console.log('Formula Calculator:', c4.pattern);
// Output: Formula Calculator: Shunting-Yard / Delimiter Stack

const c5 = selectStackPattern({ isBacktracking: true });
console.log('Sudoku Solver:', c5.pattern);
// Output: Sudoku Solver: Backtracking Decision Stack`
    },
    {
      type: 'heading',
      id: 'bridge-to-queues-and-trees',
      text: {
        en: 'The Algorithmic Bridge: Why Stacks Mirror Queues and Build Trees',
        bn: 'পরবর্তী ধাপে উত্তরণ: কেন স্ট্যাক কিউয়ের প্রতিবিম্ব এবং ট্রির ভিত্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The stack completes its educational role by preparing you for other core structures. A Queue is the mirror twin of a stack: while a stack serves the most recent arrival (LIFO), a queue serves the longest waiter (FIFO). In our Queues hub, we explore circular buffers, bounded producer-consumer coordination, and distributed message brokers. Similarly, every tree traversal is an explicit call stack in disguise, bridging directly to our Trees hub.',
        bn: 'এই ডেটা স্ট্রাকচার অন্যান্য মৌলিক কাঠামোর দ্বার উন্মোচন করে তার ভূমিকা সম্পন্ন করে। একটি কিউ হলো এর আয়না-যমজ: এটি যখন সাম্প্রতিকতম উপাদানকে সেবা দেয় (LIFO), কিউ তখন দীর্ঘতম অপেক্ষমাণ উপাদানকে সেবা দেয় (FIFO)। আমাদের কিউ হাবে আমরা সার্কুলার বাফার, উৎপাদক-ভোক্তা সমন্বয় এবং মেসেজ ব্রোকার শিখি। একইভাবে প্রতিটি ট্রি ট্রাভার্সাল আসলে একটি অন্তর্নিহিত কল ফ্রেম, যা সরাসরি আমাদের ট্রি হাবের সাথে যুক্ত।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Universal computation engine: Stacks power parsing, evaluation, undo history, and recursive depth-first exploration.',
          bn: 'সর্বজনীন গণনা ইঞ্জিন: স্ট্যাক পার্সিং, গাণিতিক মূল্যায়ন, আনডু ইতিহাস এবং রিকার্সিভ অনুসন্ধানের মূল ভিত্তি।'
        },
        {
          en: 'No random access: Sacrificing indexed access to middle elements buys guaranteed O(1) operations at the boundary.',
          bn: 'র্যান্ডম অ্যাক্সেস ত্যাগ: মাঝখানের উপাদান দেখার সুযোগ ত্যাগ করার বিনিময়ে প্রান্তে নিশ্চিত O(1) গতি অর্জিত হয়।'
        },
        {
          en: 'Pattern matching: Choose monotonic stacks for range queries, dual stacks for history, and backtracking for combinatorial searches.',
          bn: 'প্যাটার্ন নির্বাচন: রেঞ্জ অনুসন্ধানে মনোটোনিক স্ট্যাক, ইতিহাসে ডুয়াল স্ট্যাক এবং বিন্যাস অনুসন্ধানে ব্যাকট্র্যাকিং বেছে নিন।'
        },
        {
          en: 'Algorithmic bridges: Stacks naturally evolve into FIFO Queues for fair buffering and Trees for hierarchical traversal.',
          bn: 'পরবর্তী সেতু: স্ট্যাক স্বাভাবিকভাবেই ন্যায়সংগত বাফারিংয়ে কিউ এবং হায়ারার্কিকাল পরিদর্শনে ট্রিতে রূপান্তরিত হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tp-ex1',
      kind: 'mcq',
      topic: 'stack-random-access-tradeoff',
      question: {
        en: 'Why is a stack the wrong data structure if an application frequently queries elements by arbitrary index (e.g. read element at index 45)?',
        bn: 'কোনো অ্যাপ্লিকেশন যদি প্রায়শই র্যান্ডম ইনডেক্স ধরে উপাদান জানতে চায় (যেমন ৪৫ নম্বর ইনডেক্সের মান), তবে স্ট্যাক কেন অনুপযুক্ত কাঠামো?'
      },
      options: [
        {
          en: 'Stacks forbid random access: inspecting the 45th element requires popping and temporarily displacing 45 elements in O(k) time',
          bn: 'স্ট্যাকে র্যান্ডম অ্যাক্সেস নিষিদ্ধ: ৪৫ নম্বর উপাদানটি দেখতে ৪৫টি উপাদানকে O(k) সময়ে পপ করে সাময়িকভাবে সরাতে হয়'
        },
        {
          en: 'Because stacks can only hold negative integers',
          bn: 'কারণ স্ট্যাক কেবল ঋণাত্মক পূর্ণসংখ্যা ধারণ করতে পারে'
        },
        {
          en: 'Because modern computers do not allow arrays to have more than 10 elements',
          bn: 'কারণ আধুনিক কম্পিউটার অ্যারেতে ১০টির বেশি উপাদান রাখতে দেয় না'
        },
        {
          en: 'Because random access causes CPUs to catch fire',
          bn: 'কারণ র্যান্ডম অ্যাক্সেস করলে সিপিইউতে আগুন ধরে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'You can only touch the single open end of a stack.',
        bn: 'স্ট্যাকের শুধুমাত্র একটিমাত্র উন্মুক্ত মুখে স্পর্শ করা যায়।'
      },
      explanation: {
        en: 'Stacks enforce an access discipline at the top. For arbitrary indexed access, an Array or Hash Table must be selected instead.',
        bn: 'স্ট্যাকের শীর্ষবিন্দুতে কঠোর অ্যাক্সেস নিয়ম থাকে। যেকোনো ইনডেক্স সহজে দেখতে অ্যারে বা হ্যাশ টেবিল বেছে নিতে হবে।'
      }
    },
    {
      id: 'tp-ex2',
      kind: 'mcq',
      topic: 'stack-vs-queue-clock',
      question: {
        en: 'What fundamental operational difference distinguishes a Stack from a Queue?',
        bn: 'কোন মৌলিক পরিচালনাগত পার্থক্য একটি স্ট্যাককে একটি কিউ থেকে আলাদা করে?'
      },
      options: [
        {
          en: 'A Stack serves the most recent arrival (LIFO), whereas a Queue serves the longest waiting arrival (FIFO)',
          bn: 'স্ট্যাক সবার শেষে আসা সাম্প্রতিক উপাদানকে সেবা দেয় (LIFO), অন্যদিকে কিউ সবচেয়ে দীর্ঘ সময় অপেক্ষমাণ উপাদানকে সেবা দেয় (FIFO)'
        },
        {
          en: 'Stacks use RAM while Queues exclusively use hard disk drives',
          bn: 'স্ট্যাক র্যাম ব্যবহার করে যেখানে কিউ কেবল হার্ড ডিস্ক ড্রাইভ ব্যবহার করে'
        },
        {
          en: 'Queues can only store numbers while Stacks can only store text',
          bn: 'কিউ কেবল সংখ্যা সংরক্ষণ করতে পারে এবং স্ট্যাক কেবল টেক্সট সংরক্ষণ করতে পারে'
        },
        {
          en: 'Stacks require internet connectivity while Queues work offline',
          bn: 'স্ট্যাক চালাতে ইন্টারনেট সংযোগ লাগে এবং কিউ অফলাইনে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of a stack of plates versus a queue of customers at a ticket counter.',
        bn: 'থালা সাজিয়ে রাখার সাথে টিকিট কাউন্টারে মানুষের লাইনের তুলনা করুন।'
      },
      explanation: {
        en: 'Stacks prioritize the newest arrival (temporal reversal), while Queues prioritize the oldest arrival (temporal fairness).',
        bn: 'স্ট্যাক নবীনতম উপাদানকে প্রাধান্য দেয় এবং কিউ প্রাচীনতম অপেক্ষমাণ উপাদানকে প্রাধান্য দেয়।'
      }
    },
    {
      id: 'tp-ex3',
      kind: 'mcq',
      topic: 'monotonic-stack-use-case',
      question: {
        en: 'Which problem domain is uniquely suited to a Monotonic Stack architecture running in amortized O(n) time?',
        bn: 'কোন সমস্যার ক্ষেত্রে মনোটোনিক স্ট্যাক ব্যবহার করে নিশ্চিতভাবে অ্যামর্টাইজড O(n) সময়ে সমাধান করা যায়?'
      },
      options: [
        {
          en: 'Next Greater Element, Daily Temperatures, and finding the Largest Rectangle in a Histogram',
          bn: 'নেক্সট গ্রেটার এলিমেন্ট, দৈনিক তাপমাত্রা এবং হিস্টোগ্রামে বৃহত্তম আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয়'
        },
        {
          en: 'Encrypting passwords with SHA-256 hash functions',
          bn: 'এসএইচএ-২৫৬ হ্যাশ ফাংশন দিয়ে পাসওয়ার্ড এনক্রিপ্ট করা'
        },
        {
          en: 'Sending email newsletters over SMTP servers',
          bn: 'এসএমটিপি সার্ভারের মাধ্যমে ইমেইল নিউজলেটার পাঠানো'
        },
        {
          en: 'Formatting hard drives with the ext4 filesystem',
          bn: 'ext4 ফাইলসিস্টেমে হার্ড ড্রাইভ ফরম্যাট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Looking for the first larger or smaller neighbor in an array.',
        bn: 'অ্যারেতে প্রথম বৃহত্তর বা ক্ষুদ্রতর প্রতিবেশী খোঁজার সমস্যা।'
      },
      explanation: {
        en: 'Monotonic stacks maintain elements in decreasing or increasing order, resolving horizon queries in amortized linear time.',
        bn: 'মনোটোনিক স্ট্যাক উপাদানগুলোকে সুবিন্যস্ত রেখে অ্যামর্টাইজড রৈখিক সময়ে দিগন্ত প্রশ্নের উত্তর দেয়।'
      }
    }
  ],
  quiz: {
    id: 'tray-panorama-quiz',
    title: {
      en: 'Stack Architecture and System Synthesis Quiz',
      bn: 'স্ট্যাক আর্কিটেকচার এবং সিস্টেম সমন্বয় কুইজ'
    },
    questions: [
      {
        id: 'tp-q1',
        kind: 'mcq',
        topic: 'call-stack-infinite-recursion',
        question: {
          en: 'What occurs when a recursive algorithm fails to define or reach a valid base case?',
          bn: 'যখন কোনো রিকার্সিভ অ্যালগরিদম একটি সঠিক বেস কেস সংজ্ঞায়িত করতে বা স্পর্শ করতে ব্যর্থ হয় তখন কী ঘটে?'
        },
        options: [
          {
            en: 'Continuous function calls push frames until the thread fixed call stack memory is exhausted, throwing a Stack Overflow RangeError',
            bn: 'ধারাবাহিক ফাংশন কল ফ্রেম পুশ করতে করতে থ্রেডের নির্দিষ্ট কল স্ট্যাক মেমোরি শেষ করে ফেলে মারাত্মক স্ট্যাক ওভারফ্লো ঘটায়'
          },
          {
            en: 'The compiler restarts the computer in safe mode',
            bn: 'কম্পাইলার কম্পিউটারকে সেফ মোডে রিস্টার্ট করে'
          },
          {
            en: 'The function automatically converts into an iterative for loop',
            bn: 'ফাংশনটি স্বয়ংক্রিয়ভাবে একটি ইটারেটিভ ফর লুপে রূপান্তরিত হয়'
          },
          {
            en: 'The CPU deletes all variables from the database',
            bn: 'সিপিইউ ডাটাবেস থেকে সমস্ত চলক মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every unreturned call consumes bytes from the thread stack memory allocation.',
          bn: 'প্রতিটি অসমাপ্ত কল থ্রেড স্ট্যাক মেমোরি থেকে কিছু বাইট ব্যবহার করে।'
        },
        explanation: {
          en: 'Call stack frames rent memory that is only freed on return. Unbounded recursion inevitably runs out of stack space.',
          bn: 'কল স্ট্যাক ফ্রেম মেমোরি দখল করে যা কেবল রিটার্ন হলেই মুক্ত হয়। অন্তহীন রিকার্শন নির্দিষ্ট মেমোরি শেষ করে ফেলে।'
        }
      },
      {
        id: 'tp-q2',
        kind: 'mcq',
        topic: 'min-stack-invariant',
        question: {
          en: 'How does a Min-Stack maintain O(1) getMin without rescanning the array after a pop operation?',
          bn: 'পপ অপারেশনের পর অ্যারে পুনরায় স্ক্যান না করেই কীভাবে মিন-স্ট্যাক O(1) সময়ে getMin নিশ্চিত করে?'
        },
        options: [
          {
            en: 'By maintaining an auxiliary shadow stack of prefix minimums whose top entry is popped synchronously with the main stack',
            bn: 'প্রিফিক্স সর্বনিম্ন মানের একটি সহায়ক শ্যাডো স্ট্যাক রেখে যার শীর্ষ মানটি মূল স্ট্যাকের সাথে একসাথে পপ হয়ে যায়'
          },
          {
            en: 'By keeping the entire primary stack permanently sorted using quicksort',
            bn: 'কুইকসর্ট দিয়ে মূল স্ট্যাকের সমস্ত উপাদানকে সর্বদা সাজিয়ে রেখে'
          },
          {
            en: 'By rounding all incoming numbers to the nearest integer',
            bn: 'আগত সমস্ত সংখ্যাকে নিকটতম পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'By storing only positive numbers in the stack',
            bn: 'স্ট্যাকে কেবল ধনাত্মক সংখ্যা সংরক্ষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The shadow stack records what the minimum was at every stack height.',
          bn: 'শ্যাডো স্ট্যাক মনে রাখে প্রতিটি উচ্চতায় সর্বনিম্ন মান কত ছিল।'
        },
        explanation: {
          en: 'Popping the shadow stack along with the main stack immediately restores the previous minimum at index length - 1 in O(1) time.',
          bn: 'মূল কাঠামোর সাথে শ্যাডো তালিকা পপ করলে ইনডেক্স length - ১ এ থাকা আগের সর্বনিম্ন মানটি O(1) সময়ে তৎক্ষণাৎ পুনরুদ্ধার হয়।'
        }
      },
      {
        id: 'tp-q3',
        kind: 'mcq',
        topic: 'shunting-yard-parentheses-outcome',
        question: {
          en: 'What happens to parentheses in an expression during Dijkstra Shunting-Yard conversion from Infix to Postfix?',
          bn: 'ইনফিক্স থেকে পোস্টফিক্সে রূপান্তরের সময় ডিকস্ট্রার শান্টিং-ইয়ার্ড অ্যালগরিদমে বন্ধনীগুলোর কী পরিণতি হয়?'
        },
        options: [
          {
            en: 'They act as scope boundaries on the operator stack and are discarded completely, leaving 0 parentheses in the postfix output',
            bn: 'তারা অপারেটর স্ট্যাকে স্কোপ সীমানা হিসেবে কাজ করে এবং সম্পূর্ণ বাদ পড়ে যায়, ফলে পোস্টফিক্স আউটপুটে ০টি বন্ধনী থাকে'
          },
          {
            en: 'They are multiplied by 2 and printed at the beginning of the expression',
            bn: 'তাদের ২ দিয়ে গুণ করে সমীকরণের শুরুতে ছাপানো হয়'
          },
          {
            en: 'They are converted into HTML paragraph tags',
            bn: 'তারা এইচটিএমএল প্যারাগ্রাফ ট্যাগে রূপান্তরিত হয়'
          },
          {
            en: 'They are pushed onto the output queue before all numbers',
            bn: 'সমস্ত সংখ্যার আগে তারা আউটপুট কিউতে যোগ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Postfix notation represents evaluation order strictly through operator positioning, not parentheses.',
          bn: 'পোস্টফিক্স পদ্ধতিতে বন্ধনী ছাড়া কেবল অপারেটরের অবস্থানের মাধ্যমেই অগ্রাধিকার নিশ্চিত করা হয়।'
        },
        explanation: {
          en: 'Parentheses govern operator discharge on the stack. Once matched, they are discarded because postfix requires no parentheses.',
          bn: 'বন্ধনী স্ট্যাকে অপারেটরদের নিয়ন্ত্রণ করে। একবার মিলে গেলে তারা বাতিল হয় কারণ পোস্টফিক্সে কোনো বন্ধনীর প্রয়োজন হয় না।'
        }
      },
      {
        id: 'tp-q4',
        kind: 'mcq',
        topic: 'backtracking-pruning-benefit',
        question: {
          en: 'In backtracking algorithms like N-Queens, why does constraint pruning prevent exponential time blowup?',
          bn: 'N-রাণীর মতো ব্যাকট্র্যাকিং অ্যালগরিদমে কেন শর্তের ছাঁটাই (Pruning) সূচকীয় সময়ের বিস্ফোরণ রোধ করে?'
        },
        options: [
          {
            en: 'Rejecting an invalid placement in O(1) skips exploring all descendant subtrees, eliminating thousands of dead-end paths early',
            bn: 'একটি ভুল অবস্থানকে O(1) সময়ে বাদ দিলে তার নিচের সমস্ত উপ-শাখা বাতিল হয়ে যায়, যা শুরুতেই হাজার হাজার ব্যর্থ পথ এড়ায়'
          },
          {
            en: 'It forces the operating system to allocate 64 gigabytes of virtual memory',
            bn: 'এটি অপারেটিং সিস্টেমকে ৬৪ গিগাবাইট ভার্চুয়াল মেমোরি বরাদ্দ করতে বাধ্য করে'
          },
          {
            en: 'It deletes all odd-numbered columns from the chessboard',
            bn: 'এটি দাবা বোর্ড থেকে সমস্ত বিজোড় কলাম মুছে ফেলে'
          },
          {
            en: 'It reduces the number of queens from 4 to 0',
            bn: 'এটি রানীর সংখ্যা ৪ থেকে কমিয়ে ০ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A dead branch cannot produce a living tree.',
          bn: 'একটি মৃত শাখা কখনোই একটি জীবন্ত ট্রি তৈরি করতে পারে না।'
        },
        explanation: {
          en: 'Pruning truncates the search tree at shallow depths, avoiding exploring impossible combinations and keeping runtime practical.',
          bn: 'ছাঁটাই অগভীর স্তরেই অনুসন্ধানের ডালপালা কেটে ফেলে, যা অসম্ভব সম্ভাবনা খোঁজা এড়িয়ে গতি বাস্তবসম্মত রাখে।'
        }
      }
    ]
  }
};
