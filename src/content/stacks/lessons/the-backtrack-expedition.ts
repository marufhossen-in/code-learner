import type { Lesson } from '../../../lib/types';

export const theBacktrackExpeditionLesson: Lesson = {
  slug: 'the-backtrack-expedition',
  tech: 'stacks',
  title: {
    en: 'Backtracking and Depth-First Search — The Stack Memory of Decisions',
    bn: 'ব্যাকট্র্যাকিং এবং ডেপথ-ফার্স্ট সার্চ: সিদ্ধান্তের স্ট্যাক মেমোরি'
  },
  summary: {
    en: 'Backtracking extends Depth-First Search by incrementally constructing candidates and abandoning invalid paths as soon as constraints are violated. At its core, backtracking is driven by the LIFO stack: each decision is pushed onto the stack, explored recursively, and popped (undone) upon hitting a dead-end. We formalize the Choose-Explore-Unchoose triad, analyze how constraint pruning cuts exponential search trees, and trace an executable N-Queens solver.',
    bn: 'ব্যাকট্র্যাকিং ডেপথ-ফার্স্ট সার্চকে আরও উন্নত করে যেখানে ধাপে ধাপে সমাধান তৈরি করা হয় এবং শর্ত ভঙ্গ হলেই ভুল পথ বর্জন করা হয়। এর মূল চালিকাশক্তি হলো লিফো স্ট্যাক: প্রতিটি সিদ্ধান্ত স্ট্যাকে পুশ করা হয়, রিকার্সিভভাবে অনুসন্ধান করা হয় এবং কোনো অচলাবস্থা এলে পপ (আনডু) করা হয়। আমরা পছন্দ-অনুসন্ধান-বাতিল ত্রয়ী কাঠামোটি সংজ্ঞায়িত করি, কীভাবে শর্তের ছাঁটাই সূচকীয় বৃক্ষকে সংকুচিত করে তা বিশ্লেষণ করি এবং একটি সম্পূর্ণ N-রাণী সমাধান কোড চালাই।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-tray-panorama',
    tech: 'stacks',
    title: {
      en: 'Stack Architecture Synthesis — Patterns, Trade-offs, and Panorama',
      bn: 'স্ট্যাক আর্কিটেকচার সমন্বয়: প্যাটার্ন, ট্রেড-অফ এবং প্যানোরামা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'backtracking-paradigm',
      text: {
        en: 'The Backtracking Paradigm: Search with an Undo Contract',
        bn: 'ব্যাকট্র্যাকিংয়ের ধারণা: আনডু চুক্তিসহ অনুসন্ধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build algorithms for complex games or puzzle engines, you frequently must search through massive combinatorial spaces: placing non-attacking queens on a chessboard, solving a Sudoku grid, or finding a path through an unmapped maze. In brute force search, an algorithm blindly tests every permutation, taking exponential time.',
        bn: 'যখন আপনি জটিল গেম বা পাজল ইঞ্জিন তৈরি করেন, তখন আপনাকে বিশাল সম্ভাবনার মধ্য থেকে সমাধান খুঁজতে হয়: যেমন দাবা বোর্ডে আক্রমণহীনভাবে একাধিক রানী বসানো, সুডোকু মেলানো বা অজানা গোলকধাঁধায় পথ খোঁজা। সাধারণ ব্রুট-ফোর্স পদ্ধতিতে প্রতিটি বিন্যাস অন্ধভাবে পরীক্ষা করা হয়, যা সূচকীয় সময় নষ্ট করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Backtracking improves search by building solutions incrementally. At each step, a candidate choice is placed onto the decision stack. If a choice violates a problem constraint, the algorithm immediately backtracks: it pops the failed decision from the stack, inverts the state changes, and tests the next available sibling branch.',
        bn: 'ব্যাকট্র্যাকিং ধাপে ধাপে সমাধান তৈরি করে অনুসন্ধানকে কার্যকর করে তোলে। প্রতিটি পদক্ষেপে একটি সম্ভাব্য পছন্দ সিদ্ধান্তের স্ট্যাকে রাখা হয়। কোনো পছন্দ যদি শর্ত ভঙ্গ করে, তবে অ্যালগরিদম তৎক্ষণাৎ পেছনে ফিরে আসে (ব্যাকট্র্যাক): এটি স্ট্যাক থেকে ব্যর্থ সিদ্ধান্তটি পপ করে, পরিবর্তনের বিপরীত ক্রিয়া সম্পন্ন করে এবং পরবর্তী বিকল্প শাখা পরীক্ষা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'backtracking',
          def: {
            en: 'An algorithmic technique that systematically searches for solutions by building candidates incrementally and abandoning paths that fail constraints.',
            bn: 'একটি পদ্ধতি যা ধাপে ধাপে প্রার্থী সমাধান তৈরি করে এবং শর্ত পূরণে ব্যর্থ পথগুলো বর্জন করে পদ্ধতিগতভাবে সমাধান খোঁজে।'
          }
        },
        {
          term: 'pruning',
          def: {
            en: 'Evaluating constraint predicates to immediately terminate an invalid search branch before expanding its exponential children.',
            bn: 'সূচকীয় উপ-শাখাগুলোতে যাওয়ার আগেই শর্ত পরীক্ষা করে একটি অবৈধ অনুসন্ধান শাখাকে তৎক্ষণাৎ বাদ দেওয়া।'
          }
        },
        {
          term: 'choose-explore-unchoose',
          def: {
            en: 'The canonical three-step lifecycle where state is modified, explored recursively, and strictly restored to its prior state.',
            bn: 'একটি তিন ধাপের জীবনচক্র যেখানে স্টেট পরিবর্তন করা হয়, রিকার্সিভভাবে অনুসন্ধান করা হয় এবং পূর্বে ফিরে আসতে স্টেট হুবহু পুনরুদ্ধার করা হয়।'
          }
        },
        {
          term: 'decision-stack',
          def: {
            en: 'The LIFO execution stack storing current choices along the active path from the root to the present search depth.',
            bn: 'রুট থেকে বর্তমান গভীরতা পর্যন্ত সক্রিয় পথে নেওয়া সিদ্ধান্তগুলো ধারণকারী লিফো এক্সিকিউশন স্ট্যাক।'
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
      id: 'choose-explore-unchoose-lifecycle',
      text: {
        en: 'The Choose-Explore-Unchoose Lifecycle',
        bn: 'পছন্দ-অনুসন্ধান-বাতিল জীবনচক্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every correct backtracking algorithm implements a strict three-phase contract. If an engineer forgets Phase 3 (Unchoose), mutations from earlier failed branches leak into subsequent sibling branches, corrupting the search space.',
        bn: 'প্রতিটি সঠিক ব্যাকট্র্যাকিং অ্যালগরিদম একটি কঠোর তিন-ধাপের চুক্তি মেনে চলে। কোনো প্রোগ্রামার যদি ৩ নম্বর ধাপ (Unchoose বা বাতিল) ভুলে যান, তবে আগের ব্যর্থ শাখার পরিবর্তনগুলো পরবর্তী শাখায় ছড়িয়ে পড়ে পুরো অনুসন্ধানকে বিকৃত করে দেয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Backtracking Phase', bn: 'ব্যাকট্র্যাকিং ধাপ' },
        { en: 'State Action', bn: 'স্টেট অ্যাকশন' },
        { en: 'Stack Operation', bn: 'স্ট্যাক অপারেশন' },
        { en: 'Purpose in Algorithm', bn: 'ধাপের উদ্দেশ্য' }
      ],
      rows: [
        [
          { en: '1. Choose', bn: '১. পছন্দ (Choose)' },
          { en: 'Commit tentative choice to state', bn: 'স্টেটে সাময়িক সিদ্ধান্ত যুক্ত' },
          { en: 'Push move onto stack', bn: 'স্ট্যাকে পদক্ষেপ পুশ' },
          { en: 'Advance forward one step', bn: 'এক ধাপ সামনে অগ্রসর' }
        ],
        [
          { en: '2. Explore', bn: '২. অনুসন্ধান (Explore)' },
          { en: 'Recurse on next decision layer', bn: 'পরবর্তী স্তরে রিকার্শন' },
          { en: 'Push new activation frame', bn: 'নতুন কল ফ্রেম পুশ' },
          { en: 'Search deeper into subtree', bn: 'উপ-শাখায় গভীরে খোঁজ' }
        ],
        [
          { en: '3. Unchoose (Backtrack)', bn: '৩. বাতিল (Unchoose)' },
          { en: 'Revert state changes exactly', bn: 'স্টেট হুবহু পূর্বাবস্থায় ফিরিয়ে আনা' },
          { en: 'Pop move from stack', bn: 'স্ট্যাক থেকে পদক্ষেপ পপ' },
          { en: 'Restore clean state for siblings', bn: 'বিকল্প পথের জন্য স্টেট পরিষ্কার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'n-queens-backtracking-impl',
      text: {
        en: 'Executable N-Queens Backtracking Implementation',
        bn: 'N-রাণী ব্যাকট্র্যাকিং অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program solves the classic N-Queens puzzle for n = 4. Notice how candidate queen placements check columns and diagonals in O(1) time before recursing. When a row exploration finishes, the queen is popped and sets are cleared.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি n = ৪ এর জন্য ক্লাসিক N-রাণী ধাঁধা সমাধান করে। লক্ষ্য করুন কীভাবে রানীর সম্ভাব্য অবস্থান রিকার্শনে যাওয়ার আগেই O(1) সময়ে কলাম ও কর্ণ পরীক্ষা করে। যখন কোনো সারির অনুসন্ধান শেষ হয়, তখন রানীকে পপ করা হয় এবং সেটগুলো পরিষ্কার করা হয়।'
      }
    },
    {
      type: 'code',
      code: `function solveNQueens(n) {
  const solutions = [];
  const cols = new Set();
  const diag1 = new Set(); // row - col
  const diag2 = new Set(); // row + col
  const board = [];

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.slice());
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col;
      const d2 = row + col;

      // PRUNING: Reject invalid placements in O(1) time
      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
        continue;
      }

      // 1. CHOOSE: place queen and record constraints
      cols.add(col);
      diag1.add(d1);
      diag2.add(d2);
      board.push(col);

      // 2. EXPLORE: recurse to the next row
      backtrack(row + 1);

      // 3. UNCHOOSE (BACKTRACK): remove queen and restore state
      board.pop();
      cols.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
    }
  }

  backtrack(0);
  return solutions;
}

const n = 4;
const results = solveNQueens(n);
console.log('Total solutions for 4-Queens:', results.length);
// Output: Total solutions for 4-Queens: 2

results.forEach((sol, idx) => {
  console.log(\`Solution \${idx + 1} (queen col per row):\`, sol.join(', '));
});
// Output: Solution 1 (queen col per row): 1, 3, 0, 2
// Output: Solution 2 (queen col per row): 2, 0, 3, 1`
    },
    {
      type: 'heading',
      id: 'space-and-pruning-analysis',
      text: {
        en: 'Complexity Economics: Why Pruning Beats Exponential Blowup',
        bn: 'জটিলতার অর্থনীতি: কেন ছাঁটাই সূচকীয় বিস্ফোরণ রোধ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The auxiliary space complexity of backtracking is bounded by the maximum recursion depth, which is strictly O(d). Because the algorithm only stores the active path currently being explored, it consumes negligible memory compared to Breadth-First Search, which must store an entire layer.',
        bn: 'ব্যাকট্র্যাকিংয়ের অতিরিক্ত মেমোরি খরচ সর্বোচ্চ রিকার্শন গভীরতা দ্বারা সীমাবদ্ধ, যা নিশ্চিতভাবে O(d)। যেহেতু অ্যালগরিদমটি কেবল বর্তমানে সক্রিয় অনুসন্ধান পথটি মেমোরিতে রাখে, তাই এটি ব্রেডথ-ফার্স্ট সার্চের চেয়ে অনেক কম মেমোরি ব্যবহার করে যাকে পুরো স্তর ধরে রাখতে হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Stack as decision memory: The LIFO stack precisely captures the history of choices along the active exploration branch.',
          bn: 'সিদ্ধান্তের মেমোরি: লিফো স্ট্যাক সক্রিয় অনুসন্ধান শাখায় নেওয়া প্রতিটি পছন্দের অতীত ইতিহাস নিখুঁতভাবে ধারণ করে।'
        },
        {
          en: 'Choose-explore-unchoose: State modifications must be symmetrically reversed upon returning to prevent leaking state into sibling branches.',
          bn: 'সুষম প্রত্যাহার: বিকল্প শাখায় ত্রুটি রোধ করতে রিকার্শন থেকে ফেরার সময় প্রতিটি পরিবর্তন হুবহু উল্টে দিতে হবে।'
        },
        {
          en: 'Exponential pruning: Rejecting invalid candidates in O(1) time before recursing eliminates billions of dead-end subtrees.',
          bn: 'সূচকীয় ছাঁটাই: রিকার্শনে যাওয়ার আগেই O(1) সময়ে অবৈধ শাখা বর্জন করলে কোটি কোটি ব্যর্থ অনুসন্ধান পথ বাদ পড়ে।'
        },
        {
          en: 'Linear depth memory: Backtracking consumes auxiliary space proportional to search depth O(d), avoiding BFS queue memory explosions.',
          bn: 'রৈখিক গভীরতা মেমোরি: ব্যাকট্র্যাকিং অনুসন্ধানের গভীরতার সমানুপাতিক O(d) মেমোরি ব্যবহার করে বিশাল বাফার সংকট এড়ায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'be-ex1',
      kind: 'mcq',
      topic: 'unchoose-necessity',
      question: {
        en: 'What error occurs if the Unchoose step (backtracking state reversal) is omitted in a recursive backtracking search?',
        bn: 'রিকার্সিভ ব্যাকট্র্যাকিং অনুসন্ধানে যদি আনচুজ (Unchoose বা স্টেট প্রত্যাহার) ধাপটি বাদ দেওয়া হয় তবে কী ভুল ঘটবে?'
      },
      options: [
        {
          en: 'Mutations from a failed branch persist in the shared state, falsely restricting valid choices for subsequent sibling branches',
          bn: 'ব্যর্থ শাখার পরিবর্তনগুলো স্টেটে স্থায়ী থেকে যায়, যা পরবর্তী বিকল্প শাখাগুলোর বৈধ পথগুলোকে ভুলভাবে আটকে দেয়'
        },
        {
          en: 'The compiler deletes the source code from the operating system drive',
          bn: 'কম্পাইলার অপারেটিং সিস্টেম ড্রাইভ থেকে সোর্স কোড মুছে ফেলে'
        },
        {
          en: 'The CPU converts all numbers into floating-point decimals',
          bn: 'সিপিইউ সমস্ত সংখ্যাকে ফ্লোটিং-পয়েন্ট দশমিকে রূপান্তর করে'
        },
        {
          en: 'The program runs 10 times faster with zero memory usage',
          bn: 'প্রোগ্রামটি শূন্য মেমোরিতে ১০ গুণ দ্রুত কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you place a queen on square (0, 0) and it fails, what happens if you forget to remove it?',
        bn: 'আপনি যদি (০, ০) ঘরে একটি রানী বসান এবং তা ব্যর্থ হয়, তবে তাকে সরাতে ভুলে গেলে কী ঘটবে?'
      },
      explanation: {
        en: 'Without unchoosing, candidate state leaks across branches, leading to missing valid solutions or false negative results.',
        bn: 'আনচুজ না করলে স্টেট অন্যান্য শাখায় ছড়িয়ে পড়ে, যার ফলে সঠিক সমাধান খুঁজে পাওয়া অসম্ভব হয়ে যায়।'
      }
    },
    {
      id: 'be-ex2',
      kind: 'mcq',
      topic: 'backtracking-space-complexity',
      question: {
        en: 'What is the auxiliary space complexity of a backtracking algorithm with branching factor b and maximum depth d?',
        bn: 'b ব্রাঞ্চিং ফ্যাক্টর এবং সর্বোচ্চ d গভীরতার একটি ব্যাকট্র্যাকিং অ্যালগরিদমের মেমোরি খরচ (স্পেস জটিলতা) কত?'
      },
      options: [
        {
          en: 'O(d), proportional to the maximum height of the call stack representing the active path',
          bn: 'O(d), যা সক্রিয় পথ নির্দেশকারী কল স্ট্যাকের সর্বোচ্চ উচ্চতার সমানুপাতিক'
        },
        {
          en: 'O(b^d), exponential memory scale',
          bn: 'O(b^d), সূচকীয় মেমোরি'
        },
        {
          en: 'O(b * d^2), quadratic space',
          bn: 'O(b * d^2), চতুর্ঘাতী মেমোরি'
        },
        {
          en: 'O(1), strictly zero memory allocation',
          bn: 'O(1), সম্পূর্ণ শূন্য মেমোরি বরাদ্দ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only the nodes on the current path from the root to the active leaf are held in memory at any given time.',
        bn: 'যেকোনো মুহূর্তে কেবল রুট থেকে সক্রিয় পাতা পর্যন্ত পথের নোডগুলো মেমোরিতে সংরক্ষিত থাকে।'
      },
      explanation: {
        en: 'Because backtracking traverses depth-first, only one path of length d is active on the stack simultaneously, consuming O(d) space.',
        bn: 'যেহেতু ব্যাকট্র্যাকিং ডেপথ-ফার্স্ট পদ্ধতিতে চলে, তাই স্ট্যাকে একসাথে সর্বোচ্চ d দৈর্ঘ্যের একটি পথ সক্রিয় থাকে যার খরচ O(d)।'
      }
    },
    {
      id: 'be-ex3',
      kind: 'mcq',
      topic: 'pruning-impact',
      question: {
        en: 'How does constraint pruning improve the execution performance of backtracking algorithms?',
        bn: 'শর্তের ছাঁটাই (Pruning) কীভাবে ব্যাকট্র্যাকিং অ্যালগরিদমের সম্পাদনের গতি উন্নত করে?'
      },
      options: [
        {
          en: 'By detecting constraint violations early and abandoning the dead branch, avoiding exploring massive exponential subtrees beneath it',
          bn: 'শুরুতেই শর্ত লঙ্ঘন শনাক্ত করে ব্যর্থ শাখা বর্জন করার মাধ্যমে, যা তার নিচের বিশাল সূচকীয় উপ-শাখা খোঁজার অপচয় রোধ করে'
        },
        {
          en: 'By overclocking the CPU hardware clock frequency',
          bn: 'সিপিইউ হার্ডওয়্যার ক্লক ফ্রিকোয়েন্সি ওভারক্লক করার মাধ্যমে'
        },
        {
          en: 'By rewriting the program into 8-bit assembly language',
          bn: 'প্রোগ্রামটিকে ৮-বিট অ্যাসেম্বলি ভাষায় রূপান্তর করে'
        },
        {
          en: 'By running all recursive calls on background GPU shaders',
          bn: 'ব্যাকগ্রাউন্ড জিপিইউ শেডারে সমস্ত রিকার্সিভ কল চালিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If placing a queen in column 1 is already under attack, why bother testing all remaining rows below it?',
        bn: '১ নম্বর কলামে রানী বসালে যদি আক্রমণ হয়, তবে তার নিচের বাকি সারিগুলো পরীক্ষা করার কী দরকার?'
      },
      explanation: {
        en: 'Pruning stops fruitless exploration early. A single O(1) check can eliminate millions of downstream recursive calls.',
        bn: 'ছাঁটাই বৃথা অন্বেষণ আগেভাগেই বন্ধ করে। মাত্র একটি O(1) পরীক্ষা লাখ লাখ অপ্রয়োজনীয় রিকার্সিভ কল বাঁচিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'backtrack-expedition-quiz',
    title: {
      en: 'Backtracking and Depth-First Search Quiz',
      bn: 'ব্যাকট্র্যাকিং এবং ডেপথ-ফার্স্ট সার্চ কুইজ'
    },
    questions: [
      {
        id: 'be-q1',
        kind: 'mcq',
        topic: 'n-queens-solution-count',
        question: {
          en: 'For the standard 4-Queens puzzle on a 4x4 chessboard, how many valid non-attacking solutions exist?',
          bn: 'একটি ৪x৪ দাবা বোর্ডে স্ট্যান্ডার্ড ৪-রাণী ধাঁধায় কতটি বৈধ আক্রমণহীন সমাধান বিদ্যমান?'
        },
        options: [
          {
            en: 'Exactly 2 distinct solutions',
            bn: 'ঠিক ২টি স্বতন্ত্র সমাধান'
          },
          {
            en: '0 solutions',
            bn: '০টি সমাধান'
          },
          {
            en: '16 solutions',
            bn: '১৬টি সমাধান'
          },
          {
            en: '256 solutions',
            bn: '২৫৬টি সমাধান'
          }
        ],
        answer: 0,
        hint: {
          en: 'The solutions are [1, 3, 0, 2] and [2, 0, 3, 1].',
          bn: 'সমাধান দুটি হলো [১, ৩, ০, ২] এবং [২, ০, ৩, ১]।'
        },
        explanation: {
          en: 'A 4x4 board yields exactly 2 valid solutions where no two queens share a row, column, or diagonal.',
          bn: 'একটি ৪x৪ বোর্ডে ঠিক ২টি সঠিক সমাধান পাওয়া যায় যেখানে কোনো দুটি রানী একই সারি, কলাম বা কর্ণে অবস্থান করে না।'
        }
      },
      {
        id: 'be-q2',
        kind: 'mcq',
        topic: 'base-case-detection',
        question: {
          en: 'In recursive backtracking, what condition signals that a complete and valid solution has been reached?',
          bn: 'রিকার্সিভ ব্যাকট্র্যাকিংয়ে কোন শর্তটি নির্দেশ করে যে একটি সম্পূর্ণ ও সঠিক সমাধান অর্জিত হয়েছে?'
        },
        options: [
          {
            en: 'The recursion reaches the target depth (e.g. row === n) without triggering any constraint violations',
            bn: 'কোনো শর্ত ভঙ্গ না করেই রিকার্শনটি নির্ধারিত লক্ষ্য গভীরতায় (যেমন row === n) পৌঁছালে'
          },
          {
            en: 'When the call stack encounters an OutOfMemory error',
            bn: 'কল স্ট্যাকে মেমোরি শেষ হয়ে গেলে'
          },
          {
            en: 'When the loop index becomes a negative integer',
            bn: 'লুপ ইনডেক্স ঋণাত্মক পূর্ণসংখ্যা হলে'
          },
          {
            en: 'When the operating system sends a SIGTERM signal',
            bn: 'অপারেটিং সিস্টেম সিগটার্ম (SIGTERM) সিগন্যাল পাঠালে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If all n queens have been successfully placed, row reaches n.',
          bn: 'যদি সমস্ত n রানী সফলভাবে বসানো হয়ে যায়, তবে row এর মান n এ পৌঁছায়।'
        },
        explanation: {
          en: 'Reaching the base case confirms that all intermediate constraints were satisfied along the path, forming a valid solution.',
          bn: 'বেস কেসে পৌঁছানোর অর্থ হলো পথের সমস্ত মধ্যবর্তী শর্ত পূরণ হয়েছে, যা একটি বৈধ সমাধান নিশ্চিত করে।'
        }
      },
      {
        id: 'be-q3',
        kind: 'mcq',
        topic: 'diagonal-check-formula',
        question: {
          en: 'On a 2D chessboard, why can the two diagonals passing through square (row, col) be tracked in O(1) time using row - col and row + col?',
          bn: 'একটি দ্বিমাত্রিক দাবা বোর্ডে (row, col) ঘরের মধ্য দিয়ে যাওয়া দুটি কর্ণকে কেন row - col এবং row + col ব্যবহার করে O(1) সময়ে ট্র্যাক করা যায়?'
        },
        options: [
          {
            en: 'All squares on a major diagonal share an identical difference (row - col), while all squares on an anti-diagonal share an identical sum (row + col)',
            bn: 'একটি প্রধান কর্ণের সমস্ত ঘরের বিয়োগফল (row - col) সমান থাকে এবং বিপরীত কর্ণের সমস্ত ঘরের যোগফল (row + col) সমান থাকে'
          },
          {
            en: 'Because diagonals only exist on odd-numbered rows',
            bn: 'কারণ কর্ণগুলো কেবল বিজোড় সারিতে বিদ্যমান'
          },
          {
            en: 'Because chessboards are stored in circular buffers',
            bn: 'কারণ দাবা বোর্ড সার্কুলার বাফারে সংরক্ষিত থাকে'
          },
          {
            en: 'Because CPUs calculate diagonals using vector graphics',
            bn: 'কারণ সিপিইউ ভেক্টর গ্রাফিক্স দিয়ে কর্ণ হিসাব করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Moving diagonally down-right increases both row and col by 1, so row - col remains constant.',
          bn: 'কোণাকুণি নিচে-ডানে গেলে সারি ও কলাম উভয়ই ১ করে বাড়ে, তাই row - col এর মান স্থির থাকে।'
        },
        explanation: {
          en: 'Using HashSets to record row - col and row + col provides instant O(1) diagonal conflict checks without scanning the board.',
          bn: 'row - col এবং row + col হ্যাশসেটে সংরক্ষণ করলে বোর্ড স্ক্যান না করেই O(1) সময়ে কর্ণের দ্বন্দ্ব ধরা যায়।'
        }
      },
      {
        id: 'be-q4',
        kind: 'mcq',
        topic: 'backtracking-vs-bfs',
        question: {
          en: 'When searching for any valid solution in a deep combinatorial maze, why is Backtracking (DFS) preferred over BFS?',
          bn: 'একটি গভীর কম্বিনেটরিয়াল গোলকধাঁধায় যেকোনো একটি সঠিক সমাধান খুঁজতে কেন BFS এর চেয়ে ব্যাকট্র্যাকিং (DFS) বেশি উপযোগী?'
        },
        options: [
          {
            en: 'Backtracking uses O(d) memory storing only the active path, whereas BFS uses O(b^d) memory storing all frontier nodes simultaneously',
            bn: 'ব্যাকট্র্যাকিং কেবল সক্রিয় পথটি সংরক্ষণ করে O(d) মেমোরি ব্যবহার করে, যেখানে BFS একই সাথে সমস্ত সীমান্ত নোড সংরক্ষণ করে O(b^d) মেমোরি খরচ করে'
          },
          {
            en: 'BFS cannot traverse graphs with more than 10 nodes',
            bn: '১০টির বেশি নোডযুক্ত গ্রাফে BFS কাজ করতে পারে না'
          },
          {
            en: 'Backtracking runs in 0 milliseconds regardless of maze size',
            bn: 'গোলকধাঁধার আকার যাই হোক ব্যাকট্র্যাকিং ০ মিলি সেকেন্ডে চলে'
          },
          {
            en: 'DFS is guaranteed to find the shortest path in unweighted graphs',
            bn: 'ওজনহীন গ্রাফে DFS সংক্ষিপ্ততম পথ নিশ্চিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the memory required to store an entire tree layer with 2^50 nodes.',
          bn: '২^৫০ নোডের একটি সম্পূর্ণ ট্রি স্তর মেমোরিতে রাখতে কী পরিমাণ মেমোরি লাগবে ভাবুন।'
        },
        explanation: {
          en: 'In deep search spaces, BFS runs out of memory almost immediately. Backtracking explores deeply with negligible linear memory.',
          bn: 'গভীর অনুসন্ধানে BFS দ্রুত মেমোরি সংকট তৈরি করে। ব্যাকট্র্যাকিং সামান্য রৈখিক মেমোরি খরচ করে সফলভাবে কাজ সম্পন্ন করে।'
        }
      }
    ]
  }
};
