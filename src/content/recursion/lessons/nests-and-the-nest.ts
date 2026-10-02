import type { Lesson } from '../../../lib/types';

export const NestsAndTheNestLesson: Lesson = {
  slug: 'nests-and-the-nest',
  tech: 'recursion',
  title: {
    en: 'Branching Recursion Trees & Backtracking: Permutations & Subsets',
    bn: 'ব্রাঞ্চিং রিকার্শন ট্রি ও ব্যাকট্র্যাকিং: পারমিউটেশন ও সাবসেট'
  },
  summary: {
    en: 'Master multi-branch recursion trees and combinatorial search algorithms. Understand the Choose-Explore-Unchoose backtracking pattern, generate permutations and power set subsets, prune dead search branches with state constraints, and solve combinatorial puzzles.',
    bn: 'মাল্টি-ব্রাঞ্চ রিকার্শন ট্রি এবং কম্বিনেটরিয়াল সার্চ অ্যালগরিদম গভীরভাবে আয়ত্ত করুন। চুজ-এক্সপ্লোর-আনচুজ ব্যাকট্র্যাকিং প্যাটার্ন, পারমিউটেশন ও পাওয়ার সেট সাবসেট তৈরি, শর্তের মাধ্যমে অপ্রয়োজনীয় শাখা ছাঁটাই (pruning) এবং পাজল সমাধানের সম্পূর্ণ গাইড।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'branching-trees-overview',
      text: {
        en: 'Multi-Branch Decision Trees and State Spaces',
        bn: 'মাল্টি-ব্রাঞ্চ সিদ্ধান্ত ট্রি ও স্টেট স্পেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you tackle complex decision problems like puzzles, permutations, and game trees, linear recursion is no longer sufficient. By expanding recursive execution into multi-branch decision trees and applying backtracking, your code explores massive solution spaces while maintaining a minimal memory footprint.',
        bn: 'যখন আপনি পাজল, পারমিউটেশন ও গেম ট্রির মতো জটিল সিদ্ধান্তভিত্তিক সমস্যা সমাধান করেন, তখন লিনিয়ার রিকার্শন আর যথেষ্ট হয় না। রিকার্সিভ এক্সিকিউশনকে মাল্টি-ব্রাঞ্চ সিদ্ধান্ত ট্রিতে রূপান্তর করে এবং ব্যাকট্র্যাকিং প্রয়োগের মাধ্যমে আপনার কোড ন্যূনতম মেমরি খরচ করে বিশাল সমাধান ক্ষেত্র অন্বেষণ করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In multi-branch recursion, a single stack frame initiates 2 or more subcalls, forming an exponential decision tree. For an array of 3 elements, generating the power set explores 8 subsets, while computing all permutations yields 6 unique arrangements.',
        bn: 'মাল্টি-ব্রাঞ্চ রিকার্শনে একটি একক স্ট্যাক ফ্রেম 2 বা ততোধিক সাবকল শুরু করে, যা একটি সূচকীয় সিদ্ধান্ত ট্রি তৈরি করে। 3 টি উপাদানের একটি অ্যারের জন্য পাওয়ার সেট তৈরি করলে 8 টি সাবসেট অন্বেষণ করা হয়, যেখানে সমস্ত পারমিউটেশন বের করলে 6 টি অনন্য বিন্যাস পাওয়া যায়।'
      }
    },
    {
      type: 'diagram',
      id: 'backtracking-tree-diagram',
      caption: {
        en: 'Figure 1: Multi-branch decision tree and the Choose, Explore, Unchoose backtracking cycle for subsets',
        bn: 'চিত্র ১: সাবসেটের জন্য মাল্টি-ব্রাঞ্চ সিদ্ধান্ত ট্রি এবং চুজ, এক্সপ্লোর, আনচুজ ব্যাকট্র্যাকিং চক্র'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="nestHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="treeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="bktGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#nestHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🌳</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">BRANCHING RECURSION TREES &amp; BACKTRACKING</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">State space exploration, Choose-Explore-Unchoose protocol, pruning invalid branches, and O(N) memory</text>

  <!-- Left: The Decision Tree -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#treeGrad)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="44" y="118" fill="#fbbf24" font-size="13" font-weight="bold">SUBSET DECISION TREE (N = 2, [A, B])</text>

  <!-- Tree Nodes -->
  <rect x="180" y="140" width="120" height="36" rx="6" fill="#030712" stroke="#f59e0b"/>
  <text x="240" y="162" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Root: []</text>

  <!-- Level 1 Decisions (Include A or Exclude A) -->
  <line x1="220" y1="176" x2="130" y2="216" stroke="#64748b" stroke-width="1.5"/>
  <line x1="260" y1="176" x2="350" y2="216" stroke="#64748b" stroke-width="1.5"/>

  <rect x="70" y="216" width="120" height="36" rx="6" fill="#030712" stroke="#38bdf8"/>
  <text x="130" y="238" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Exclude A: []</text>

  <rect x="290" y="216" width="120" height="36" rx="6" fill="#030712" stroke="#38bdf8"/>
  <text x="350" y="238" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Include A: [A]</text>

  <!-- Level 2 Decisions (Include B or Exclude B) -->
  <line x1="110" y1="252" x2="70" y2="292" stroke="#64748b" stroke-width="1.5"/>
  <line x1="150" y1="252" x2="190" y2="292" stroke="#64748b" stroke-width="1.5"/>
  <line x1="330" y1="252" x2="290" y2="292" stroke="#64748b" stroke-width="1.5"/>
  <line x1="370" y1="252" x2="410" y2="292" stroke="#64748b" stroke-width="1.5"/>

  <rect x="35" y="292" width="70" height="32" rx="4" fill="#030712" stroke="#10b981"/>
  <text x="70" y="312" fill="#a7f3d0" font-size="9" text-anchor="middle">Leaf: []</text>

  <rect x="155" y="292" width="70" height="32" rx="4" fill="#030712" stroke="#10b981"/>
  <text x="190" y="312" fill="#a7f3d0" font-size="9" text-anchor="middle">Leaf: [B]</text>

  <rect x="255" y="292" width="70" height="32" rx="4" fill="#030712" stroke="#10b981"/>
  <text x="290" y="312" fill="#a7f3d0" font-size="9" text-anchor="middle">Leaf: [A]</text>

  <rect x="375" y="292" width="70" height="32" rx="4" fill="#030712" stroke="#10b981"/>
  <text x="410" y="312" fill="#a7f3d0" font-size="9" text-anchor="middle">Leaf: [A, B]</text>

  <rect x="44" y="345" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="368" fill="#38bdf8" font-size="11" font-weight="bold">Memory Conservation Principle:</text>
  <text x="56" y="388" fill="#cbd5e1" font-size="10">• Notice how stack depth is ONLY O(N) = 2 levels high.</text>
  <text x="56" y="406" fill="#cbd5e1" font-size="10">• You do NOT allocate 2^N arrays in memory simultaneously!</text>
  <text x="56" y="424" fill="#34d399" font-size="10" font-weight="bold">• Only the current active path is stored in RAM!</text>

  <!-- Right: The Backtracking Protocol -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#bktGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">THE 3-STEP BACKTRACKING CEREMONY</text>

  <rect x="516" y="136" width="400" height="65" rx="6" fill="#030712" stroke="#f59e0b"/>
  <text x="528" y="158" fill="#fbbf24" font-size="11" font-weight="bold">1. CHOOSE (Make the Tentative Decision):</text>
  <text x="528" y="176" fill="#cbd5e1" font-size="10">• path.push(candidate); // Commit to candidate state</text>
  <text x="528" y="192" fill="#cbd5e1" font-size="10">• Mark candidate as used or place piece on board.</text>

  <rect x="516" y="209" width="400" height="65" rx="6" fill="#030712" stroke="#38bdf8"/>
  <text x="528" y="231" fill="#38bdf8" font-size="11" font-weight="bold">2. EXPLORE (Recurse Deeper Down Branch):</text>
  <text x="528" y="249" fill="#cbd5e1" font-size="10">• backtrack(nextIndex, path); // Explore downstream tree</text>
  <text x="528" y="265" fill="#cbd5e1" font-size="10">• If base case reached, snapshot solution: results.push([...path]);</text>

  <rect x="516" y="282" width="400" height="65" rx="6" fill="#030712" stroke="#ec4899"/>
  <text x="528" y="304" fill="#f472b6" font-size="11" font-weight="bold">3. UNCHOOSE (Backtrack and Restore Invariants):</text>
  <text x="528" y="322" fill="#cbd5e1" font-size="10">• path.pop(); // Undo mutation so siblings receive pristine state!</text>
  <text x="528" y="338" fill="#cbd5e1" font-size="10">• Unmark candidate visited; prevents state leakage across branches.</text>

  <rect x="516" y="355" width="400" height="85" rx="6" fill="#030712" stroke="#ef4444"/>
  <text x="528" y="378" fill="#f87171" font-size="11" font-weight="bold">Branch Pruning (Constraint Satisfaction):</text>
  <text x="528" y="398" fill="#cbd5e1" font-size="10">• If a choice violates rules (e.g. Sudoku or N-Queens conflict),</text>
  <text x="528" y="416" fill="#fca5a5" font-size="10">  PRUNE immediately! Do not explore dead sub-trees.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'choose-explore-unchoose',
      text: {
        en: 'The Choose, Explore, Unchoose Backtracking Protocol',
        bn: 'চুজ, এক্সপ্লোর, আনচুজ ব্যাকট্র্যাকিং প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The heart of exhaustive combinatorial search is the three-step backtracking protocol. Instead of copying large arrays at every recursive invocation, backtracking mutates a single shared path array.',
        bn: 'পূর্ণাঙ্গ কম্বিনেটরিয়াল অনুসন্ধানের মূল ভিত্তি হলো তিন ধাপের ব্যাকট্র্যাকিং প্রোটোকল। প্রতিটি রিকার্সিভ কলে নতুন অ্যারে কপি করার বদলে ব্যাকট্র্যাকিং একটিমাত্র শেয়ার্ড পাথ অ্যারেকে পরিবর্তন করে কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'First, the function chooses a candidate item and appends it to the path. Second, it explores the sub-tree recursively. Third, it unchooses by popping the item off the path. This restoration prevents mutated state from corrupting alternate sibling branches.',
        bn: 'প্রথমত, ফাংশনটি একটি সম্ভাব্য উপাদান বেছে নেয় এবং পাথে যোগ করে। দ্বিতীয়ত, এটি রিকার্সিভভাবে উপ-ট্রি অন্বেষণ করে। তৃতীয়ত, এটি উপাদানটিকে পাথ থেকে পপ করে আগের অবস্থায় ফিরে যায়। এই পুনরুদ্ধারের ফলে একটি শাখার পরিবর্তন অন্য শাখাকে প্রভাবিত করতে পারে না।'
      }
    },
    {
      type: 'heading',
      id: 'pruning-dead-branches',
      text: {
        en: 'Branch Pruning and Constraint Satisfaction',
        bn: 'শাখা ছাঁটাই (Pruning) ও শর্ত পূরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Naive brute force explores every branch to its terminal leaves, causing exponential explosion. In problems like Sudoku or the N-Queens puzzle, applying pruning checks candidate validity before recursing, skipping millions of invalid paths.',
        bn: 'সাধারণ ব্রুট ফোর্স প্রতিটি শাখা শেষ পর্যন্ত পরীক্ষা করে, যা সূচকীয় জটিলতা তৈরি করে। সুডোকু বা N-কুইন্স পাজলের মতো সমস্যায় প্রুনিং বা ছাঁটাই রিকার্শনের আগেই শর্ত যাচাই করে লাখ লাখ অর্থহীন পথ পরীক্ষা করা বন্ধ করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-backtracking-sim',
      text: {
        en: 'Interactive Benchmark: Generating Power Sets & Permutations',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: পাওয়ার সেট ও পারমিউটেশন তৈরি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-backtrack-sim.ts',
      code: `// Combinatorial Backtracking Simulator: Subsets & Permutations
// 3 elements generate 8 power set subsets -> returns 8
// 3 elements generate 6 permutations -> returns 6
// Backtracking uses single shared path in O(N) memory -> returns 3
function simulateBacktracking() {
  console.log("=== COMBINATORIAL BACKTRACKING SIMULATOR ===");

  const nums = [1, 2, 3];
  console.log(\`\\nInput Array (3 elements): [\${nums.join(", ")}]\`);

  const subsets: number[][] = [];
  function generateSubsets(index: number, current: number[]) {
    if (index === nums.length) {
      subsets.push([...current]);
      return;
    }
    generateSubsets(index + 1, current);
    current.push(nums[index]);
    generateSubsets(index + 1, current);
    current.pop();
  }

  generateSubsets(0, []);
  console.log(\`\\n1. Generated Power Set (\${subsets.length} subsets, 2^3 = 8):\`);
  subsets.forEach(s => console.log(\`   [\${s.join(", ")}]\`));

  const perms: number[][] = [];
  function generatePermutations(current: number[], used: boolean[]) {
    if (current.length === nums.length) {
      perms.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      current.push(nums[i]);
      generatePermutations(current, used);
      current.pop();
      used[i] = false;
    }
  }

  generatePermutations([], []);
  console.log(\`\\n2. Generated Permutations (\${perms.length} permutations, 3! = 6):\`);
  perms.forEach(p => console.log(\`   [\${p.join(", ")}]\`));
}

simulateBacktracking();`
    },
    {
      type: 'terminal',
      id: 'backtrack-sim-output',
      cmd: 'npx tsx recursion-backtrack-sim.ts',
      output: `=== COMBINATORIAL BACKTRACKING SIMULATOR ===

Input Array (3 elements): [1, 2, 3]

1. Generated Power Set (8 subsets, 2^3 = 8):
   []
   [3]
   [2]
   [2, 3]
   [1]
   [1, 3]
   [1, 2]
   [1, 2, 3]

2. Generated Permutations (6 permutations, 3! = 6):
   [1, 2, 3]
   [1, 3, 2]
   [2, 1, 3]
   [2, 3, 1]
   [3, 1, 2]
   [3, 2, 1]`
    }
  ],
  exercises: [
    {
      id: 'rec-nst-ex-1',
      kind: 'mcq',
      topic: 'backtracking-unchoose-significance',
      question: {
        en: 'In combinatorial backtracking, why is the unchoose step essential after returning from a recursive exploration call?',
        bn: 'কম্বিনেটরিয়াল ব্যাকট্র্যাকিংয়ে রিকার্সিভ এক্সপ্লোরেশন কল থেকে ফেরার পর আনচুজ (unchoose) ধাপটি কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It restores the shared path state so subsequent sibling decision branches do not inherit unwanted candidate mutations',
          bn: 'এটি শেয়ার্ড পাথ স্টেটকে আগের অবস্থায় ফিরিয়ে নেয় যাতে পরবর্তী সহোদর সিদ্ধান্ত শাখাগুলো অবাঞ্ছিত পরিবর্তন দেখতে না পায়'
        },
        {
          en: 'It prints the entire call stack to the browser console',
          bn: 'এটি ব্রাউজার কনসোলে সম্পূর্ণ কল স্ট্যাক প্রিন্ট করে'
        },
        {
          en: 'It terminates the application process immediately',
          bn: 'এটি অ্যাপ্লিকেশনের প্রসেস সাথে সাথে বন্ধ করে দেয়'
        },
        {
          en: 'To make the recursive step execute twice as slowly',
          bn: 'যাতে রিকার্সিভ ধাপটি দ্বিগুণ ধীরগতিতে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unchoose undoes the decision made in the choose step.',
        bn: 'আনচুজ চুজ ধাপে নেওয়া সিদ্ধান্তটি বাতিল করে দেয়।'
      },
      explanation: {
        en: 'Backtracking uses a single shared array across the search spine. Popping (unchoosing) restores the array so other branches receive clean state.',
        bn: 'ব্যাকট্র্যাকিং পুরো অনুসন্ধানে একটিমাত্র শেয়ার্ড অ্যারে ব্যবহার করে। পপ করার মাধ্যমে অ্যারেটি আগের অবস্থায় ফিরে আসে।'
      }
    },
    {
      id: 'rec-nst-ex-2',
      kind: 'mcq',
      topic: 'power-set-exponential-subsets',
      question: {
        en: 'How many total subsets exist in the power set of an array containing 3 distinct elements?',
        bn: '3 টি স্বতন্ত্র উপাদানবিশিষ্ট একটি অ্যারের পাওয়ার সেটে সর্বমোট কয়টি সাবসেট থাকে?'
      },
      options: [
        {
          en: '8 subsets (2^3 = 8)',
          bn: '8 টি সাবসেট (2^3 = 8)'
        },
        {
          en: '3 subsets',
          bn: '3 টি সাবসেট'
        },
        {
          en: '6 subsets',
          bn: '6 টি সাবসেট'
        },
        {
          en: '100 subsets',
          bn: '100 টি সাবসেট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each element has 2 choices: included or excluded.',
        bn: 'প্রতিটি উপাদানের জন্য ২টি বিকল্প থাকে: নেওয়া বা না নেওয়া।'
      },
      explanation: {
        en: 'Because every element can be either included or excluded independently, an array of length N produces exactly 2^N subsets.',
        bn: 'যেহেতু প্রতিটি উপাদানকে স্বাধীনভাবে নেওয়া বা বাদ দেওয়া যায়, তাই N দৈর্ঘ্যের অ্যারে ঠিক 2^N সংখ্যক সাবসেট তৈরি করে।'
      }
    },
    {
      id: 'rec-nst-ex-3',
      kind: 'mcq',
      topic: 'backtracking-branch-pruning',
      question: {
        en: 'What is branch pruning in backtracking algorithms and why is it essential for solving combinatorial puzzles like N-Queens or Sudoku?',
        bn: 'ব্যাকট্র্যাকিং অ্যালগরিদমে শাখা ছাঁটাই (pruning) কী এবং N-কুইন্স বা সুডোকুর মতো পাজল সমাধানে এটি কেন জরুরি?'
      },
      options: [
        {
          en: 'It evaluates constraints early and immediately abandons candidate paths that violate puzzle rules, avoiding exponential search of dead sub-trees',
          bn: 'এটি শুরুতেই শর্ত পরীক্ষা করে নিয়ম ভঙ্গকারী পথগুলো সাথে সাথে বাদ দিয়ে দেয়, ফলে অর্থহীন উপ-শাখাগুলোতে অনর্থক খোঁজাখুঁজি এড়ানো যায়'
        },
        {
          en: 'It deletes source code comments before compilation',
          bn: 'এটি কম্পাইল করার আগে সোর্স কোডের কমেন্টগুলো মুছে দেয়'
        },
        {
          en: 'It compresses image files using Lossy compression',
          bn: 'এটি লসি কম্প্রেশন ব্যবহার করে ছবি সংকুচিত করে'
        },
        {
          en: 'It reboots the computer if a queen is captured',
          bn: 'রানি আক্রান্ত হলে এটি কম্পিউটার রিস্টার্ট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pruning stops exploring branches that cannot possibly lead to a solution.',
        bn: 'প্রুনিং এমন সব শাখায় যাওয়া বন্ধ করে যা সমাধানের দিকে নিয়ে যেতে পারে না।'
      },
      explanation: {
        en: 'Without pruning, exhaustive search explores every invalid permutation. Pruning cuts off dead branches early, cutting search time from years to milliseconds.',
        bn: 'প্রুনিং ছাড়া ব্রুট ফোর্স সব ভুল শাখা পরীক্ষা করে। শুরুতেই ভুল শাখা বাদ দিলে অনুসন্ধান সময় কয়েক বছর থেকে মিলিসেকেন্ডে নেমে আসে।'
      }
    },
    {
      id: 'rec-nst-ex-4',
      kind: 'mcq',
      topic: 'backtracking-space-complexity',
      question: {
        en: 'Why does the Choose-Explore-Unchoose backtracking pattern require only O(N) auxiliary space rather than O(2^N) or O(N!)?',
        bn: 'চুজ-এক্সপ্লোর-আনচুজ ব্যাকট্র্যাকিং প্যাটার্নে O(2^N) বা O(N!) এর বদলে কেন কেবল O(N) সহায়ক মেমরির প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Because only the current path along the active search spine is maintained in memory, with state mutated and undone in-place on a single array',
          bn: 'কারণ মেমরিতে কেবল সক্রিয় অনুসন্ধান পথের বর্তমান শাখাটি সংরক্ষিত থাকে, যেখানে একটিমাত্র অ্যারেতেই পরিবর্তন ও পুনর্বহাল করা হয়'
        },
        {
          en: 'Because arrays in JavaScript do not consume RAM memory',
          bn: 'কারণ জাভাস্ক্রিপ্টে অ্যারে কোনো র‍্যাম মেমরি ব্যবহার করে না'
        },
        {
          en: 'Because all subproblems are uploaded to the cloud',
          bn: 'কারণ সমস্ত উপ-সমস্যা ক্লাউডে আপলোড করা থাকে'
        },
        {
          en: 'Because the operating system deletes unvisited nodes',
          bn: 'কারণ অপারেটিং সিস্টেম না দেখা নোডগুলো মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The call stack and current path never exceed tree depth N.',
        bn: 'কল স্ট্যাক ও বর্তমান পথের দৈর্ঘ্য কখনোই ট্রি-এর গভীরতা N ছাড়িয়ে যায় না।'
      },
      explanation: {
        en: 'Although the total number of explored nodes is exponential, depth-first search only stores the current branch of depth N on the call stack at any moment.',
        bn: 'যদিও মোট নোডের সংখ্যা সূচকীয়, তবুও ডেপথ-ফার্স্ট সার্চ যেকোনো মুহূর্তে স্ট্যাকে কেবল N গভীরতার বর্তমান শাখাটি ধরে রাখে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Branching Recursion & Backtracking Quiz',
      bn: 'ব্রাঞ্চিং রিকার্শন ও ব্যাকট্র্যাকিং কুইজ'
    },
    questions: [
      {
        id: 'rec-nst-qz-1',
        kind: 'mcq',
        topic: 'permutations-time-complexity',
        question: {
          en: 'What is the theoretical time complexity of generating all permutations of an array containing N distinct elements?',
          bn: 'N সংখ্যক স্বতন্ত্র উপাদানবিশিষ্ট অ্যারের সমস্ত পারমিউটেশন তৈরির তাত্ত্বিক টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(N * N!)',
            bn: 'O(N * N!)'
          },
          {
            en: 'O(N)',
            bn: 'O(N)'
          },
          {
            en: 'O(log N)',
            bn: 'O(log N)'
          },
          {
            en: 'O(1)',
            bn: 'O(1)'
          }
        ],
        answer: 0,
        hint: {
          en: 'There are N! permutations, and each requires copying an array of length N.',
          bn: 'মোট N! পারমিউটেশন থাকে এবং প্রতিটিতে N দৈর্ঘ্যের অ্যারে কপি করতে হয়।'
        },
        explanation: {
          en: 'There are N! distinct orderings, and copying each completed permutation of length N into the result array takes O(N) time, yielding O(N * N!).',
          bn: 'মোট N! অনন্য বিন্যাস রয়েছে এবং প্রতিটি পূর্ণ বিন্যাস ফলাফলে কপি করতে O(N) সময় লাগে, যার ফলে জটিলতা দাঁড়ায় O(N * N!)।'
        }
      },
      {
        id: 'rec-nst-qz-2',
        kind: 'mcq',
        topic: 'snapshot-solution-deep-copy',
        question: {
          en: 'When a base case is reached in backtracking, why must developers save a copy of the path (results.push([...path])) rather than the array itself (results.push(path))?',
          bn: 'ব্যাকট্র্যাকিংয়ে বেস কেস পেলে কেন ডেভেলপারদের সরাসরি অ্যারের বদলে একটি কপি সংরক্ষণ করতে হয় (results.push([...path]))?'
        },
        options: [
          {
            en: 'Because path is passed by reference; storing the reference means subsequent unchoose pops will mutate and empty the saved result',
            bn: 'কারণ path রেফারেন্স হিসেবে পাস হয়; রেফারেন্স রাখলে পরবর্তী আনচুজ পপের কারণে সংরক্ষিত ফলাফলও পরিবর্তিত ও খালি হয়ে যাবে'
          },
          {
            en: 'Because JavaScript arrays cannot be stored inside other arrays',
            bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে অন্য অ্যারের ভেতরে রাখা যায় না'
          },
          {
            en: 'To make the output print in alphabetical order',
            bn: 'যাতে আউটপুট বর্ণানুক্রমিকভাবে প্রিন্ট হয়'
          },
          {
            en: 'Copying arrays is required by web browser security rules',
            bn: 'ওয়েব ব্রাউজার নিরাপত্তা বিধির কারণে অ্যারে কপি করা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'JavaScript objects and arrays are shared by reference.',
          bn: 'জাভাস্ক্রিপ্ট অবজেক্ট ও অ্যারে রেফারেন্স দিয়ে শেয়ার হয়।'
        },
        explanation: {
          en: 'Without a shallow copy ([...path]), every entry in results points to the exact same array, which ends up completely empty after all backtracks finish.',
          bn: 'কপি না বানালে results-এর সব উপাদান একই অ্যারেকে নির্দেশ করবে, যা সব ব্যাকট্র্যাক শেষ হওয়ার পর সম্পূর্ণ খালি হয়ে যাবে।'
        }
      },
      {
        id: 'rec-nst-qz-3',
        kind: 'mcq',
        topic: 'n-queens-decision-representation',
        question: {
          en: 'In solving the N-Queens puzzle with backtracking, how is queen placement typically represented to minimize memory overhead?',
          bn: 'ব্যাকট্র্যাকিং দিয়ে N-কুইন্স পাজল সমাধানের সময় মেমরি খরচ কমাতে রানি স্থাপনের অবস্থান সাধারণত কীভাবে প্রকাশ করা হয়?'
        },
        options: [
          {
            en: 'A 1D array where index represents the row and value represents the column (board[row] = col)',
            bn: 'একটি 1D অ্যারে যেখানে ইনডেক্স নির্দেশ করে সারি এবং মান নির্দেশ করে কলাম (board[row] = col)'
          },
          {
            en: 'A high-resolution 3D CAD architectural model',
            bn: 'একটি হাই-রেজোলিউশন থ্রিডি ক্যাড মডেল'
          },
          {
            en: 'A separate relational SQL database table per queen',
            bn: 'প্রতিটি রানির জন্য আলাদা রিলেশনাল এসকিউএল টেবিল'
          },
          {
            en: 'An encrypted audio recording of chess moves',
            bn: 'দাবা খেলার চালের এনক্রিপ্ট করা অডিও রেকর্ডিং'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each row can contain exactly one queen.',
          bn: 'প্রতিটি সারিতে কেবল একটিমাত্র রানি থাকতে পারে।'
        },
        explanation: {
          en: 'Since each row contains exactly one queen, a 1D array of length N suffices: board[row] = col. Diagonal conflicts are checked via arithmetic row/col diffs.',
          bn: 'যেহেতু প্রতিটি সারিতে ঠিক ১টি রানি থাকে, তাই N দৈর্ঘ্যের 1D অ্যারেই যথেষ্ট: board[row] = col। কর্ণের সংঘাত পাটিগণিত দিয়ে সহজে যাচাই করা যায়।'
        }
      },
      {
        id: 'rec-nst-qz-4',
        kind: 'mcq',
        topic: 'subsets-vs-permutations-recurrence',
        question: {
          en: 'How does the recursion branching factor differ between generating subsets versus generating permutations?',
          bn: 'সাবসেট তৈরি বনাম পারমিউটেশন তৈরির মাঝে রিকার্শনের ব্রাঞ্চিং ফ্যাক্টর কীভাবে আলাদা হয়?'
        },
        options: [
          {
            en: 'Subsets branch with a fixed binary factor of 2 (include or exclude), whereas permutations branch with a decreasing factor of N, N - 1, N - 2 at each level',
            bn: 'সাবসেটে প্রতিটি ধাপে স্থির ২ টি শাখা থাকে (নেওয়া বা বাদ দেওয়া), যেখানে পারমিউটেশনে প্রতি স্তরে শাখা সংখ্যা N, N - 1, N - 2 হারে কমতে থাকে'
          },
          {
            en: 'Subsets branch 100 times per node while permutations never branch',
            bn: 'সাবসেট প্রতি নোডে ১০০ বার ভাগ হয় এবং পারমিউটেশন কখনো ভাগ হয় না'
          },
          {
            en: 'There is no difference; both produce identical numbers of outputs',
            bn: 'কোনো পার্থক্য নেই; উভয়ই একই সংখ্যক ফলাফল তৈরি করে'
          },
          {
            en: 'Permutations only run on odd numbers',
            bn: 'পারমিউটেশন কেবল বিজোড় সংখ্যায় চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Subsets make binary choices; permutations pick from remaining candidates.',
          bn: 'সাবসেটে দুটি পছন্দ থাকে; পারমিউটেশনে বাকি থাকা উপাদান থেকে বেছে নিতে হয়।'
        },
        explanation: {
          en: 'Subsets have 2 choices per item (binary tree of size 2^N). Permutations loop over all unpicked items, yielding a factorial tree of size N!.',
          bn: 'সাবসেটে প্রতিটি উপাদানে ২টি পছন্দ থাকে (2^N আকারের ট্রি)। পারমিউটেশন বাকি সব উপাদান নিয়ে লুপ চালায়, ফলে N! আকারের ট্রি তৈরি হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'memos-and-the-memo',
    title: {
      en: 'Memoization & Overlapping Subproblems: The Bridge to Dynamic Programming',
      bn: 'মেমোইজেশন ও ওভারল্যাপিং সাব-প্রবলেম: ডাইনামিক প্রোগ্রামিংয়ের সেতু'
    }
  }
};
