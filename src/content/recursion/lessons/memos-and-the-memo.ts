import type { Lesson } from '../../../lib/types';

export const MemosAndTheMemoLesson: Lesson = {
  slug: 'memos-and-the-memo',
  tech: 'recursion',
  title: {
    en: 'Memoization & Overlapping Subproblems: The Bridge to Dynamic Programming',
    bn: 'মেমোইজেশন ও ওভারল্যাপিং সাব-প্রবলেম: ডাইনামিক প্রোগ্রামিংয়ের সেতু'
  },
  summary: {
    en: 'Master top-down memoization and the elimination of redundant recursive computations. Discover how caching subproblem solutions transforms exponential O(2^N) Fibonacci into linear O(N) runtime, identify overlapping subproblems, and build the mental bridge to Dynamic Programming.',
    bn: 'টপ-ডাউন মেমোইজেশন এবং অপ্রয়োজনীয় পুনরাবৃত্তিমূলক গণনা দূরীকরণ গভীরভাবে আয়ত্ত করুন। সাব-প্রবলেমের ফলাফল ক্যাশ করে কীভাবে সূচকীয় O(2^N) ফিবোনাচ্চিকে লিনিয়ার O(N) এ রূপান্তর করা যায়, ওভারল্যাপিং সাব-প্রবলেম সনাক্তকরণ এবং ডাইনামিক প্রোগ্রামিংয়ে উত্তরণের সম্পূর্ণ নির্দেশিকা।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'overlapping-subproblems-waste',
      text: {
        en: 'The Waste of Overlapping Subproblems and Exponential Explosion',
        bn: 'ওভারল্যাপিং সাব-প্রবলেমের অপচয় ও সূচকীয় বিস্তার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When designing recursive algorithms for combinatorial or mathematical problems, identical calculations are often repeated millions of times across different branches of the call tree. By implementing top-down memoization, you cache intermediate results in a lookup table, transforming exponential runtime into blazing linear execution.',
        bn: 'কম্বিনেটরিয়াল বা গাণিতিক সমস্যার জন্য রিকার্সিভ অ্যালগরিদম তৈরির সময় কল ট্রির বিভিন্ন শাখায় একই হিসাব প্রায়শই লাখ লাখ বার পুনরাবৃত্তি হয়। টপ-ডাউন মেমোইজেশন বাস্তবায়নের মাধ্যমে আপনি একটি লুকআপ টেবিলে মধ্যবর্তী ফলাফল সংরক্ষণ করেন, যা সূচকীয় রানটাইমকে বিদ্যুৎগতির লিনিয়ার এক্সিকিউশনে রূপান্তর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When calculating Fibonacci for 30, naive recursion triggers 2692537 function calls, whereas top-down memoization resolves the exact same result in only 59 operations. Caching eliminates duplicate tree branches instantly.',
        bn: '30 এর জন্য ফিবোনাচ্চি গণনার সময় সাধারণ রিকার্শন 2692537 টি ফাংশন কল তৈরি করে, যেখানে টপ-ডাউন মেমোইজেশন মাত্র 59 টি অপারেশনের মাধ্যমে একই ফলাফল সমাধান করে। ক্যাশিং তাৎক্ষণিকভাবে ডুপ্লিকেট শাখাগুলোকে দূর করে।'
      }
    },
    {
      type: 'diagram',
      id: 'memoization-pruned-tree-diagram',
      caption: {
        en: 'Figure 1: Exponential naive recursion tree vs top-down memoized lookup cache with redundant branch pruning',
        bn: 'চিত্র ১: সূচকীয় সাধারণ রিকার্শন ট্রি বনাম টপ-ডাউন মেমোইজড লুকআপ ক্যাশ এবং অতিরিক্ত শাখা ছাঁটাই'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="memHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="wasteGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#31101e"/>
      <stop offset="100%" stop-color="#190a14"/>
    </linearGradient>
    <linearGradient id="cacheGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#memHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🧠</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">TOP-DOWN MEMOIZATION &amp; OVERLAPPING SUBPROBLEMS</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Pruning duplicate subtrees, hash table cache lookups, and the bridge to Dynamic Programming</text>

  <!-- Left: The Exponential Waste (Naive Recursion) -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#wasteGrad)" stroke="#ec4899" stroke-width="1.5"/>
  <text x="44" y="118" fill="#f472b6" font-size="13" font-weight="bold">NAIVE FIBONACCI: EXPONENTIAL WASTE (O(2^N))</text>

  <!-- Redundant calls visualization -->
  <rect x="44" y="136" width="400" height="155" rx="6" fill="#030712" stroke="#ec4899"/>
  <text x="56" y="158" fill="#f472b6" font-size="11" font-weight="bold">Call Tree for fib(5):</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10">• fib(5) calls fib(4) and fib(3)</text>
  <text x="56" y="196" fill="#cbd5e1" font-size="10">• fib(4) calls fib(3) and fib(2)</text>
  <text x="56" y="214" fill="#ef4444" font-size="10" font-weight="bold">• CRITICAL FLAW: fib(3) is computed TWICE!</text>
  <text x="56" y="232" fill="#ef4444" font-size="10" font-weight="bold">• CRITICAL FLAW: fib(2) is computed THREE TIMES!</text>
  <text x="56" y="250" fill="#fca5a5" font-size="10">• For N = 30: 2,692,537 calls executed!</text>
  <text x="56" y="270" fill="#f87171" font-size="10">• For N = 50: Over 40,000,000,000,000 calls (takes days)!</text>

  <rect x="44" y="305" width="400" height="140" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="328" fill="#f87171" font-size="11" font-weight="bold">Why Multi-Branch Trees Explode:</text>
  <text x="56" y="350" fill="#cbd5e1" font-size="10">• Each level doubles the number of executing nodes.</text>
  <text x="56" y="370" fill="#cbd5e1" font-size="10">• Identical parameter states are treated as brand new work.</text>
  <text x="56" y="390" fill="#cbd5e1" font-size="10">• Re-calculating solved subtrees burns 99.99% of CPU time.</text>
  <text x="56" y="416" fill="#ef4444" font-size="10" font-weight="bold">• Verdict: Unviable for inputs larger than N = 35</text>

  <!-- Right: Top-Down Memoization -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#cacheGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">TOP-DOWN MEMOIZATION (O(N) TIME)</text>

  <rect x="516" y="136" width="400" height="155" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="160" fill="#34d399" font-size="11" font-weight="bold">The 3-Step Memoization Protocol:</text>
  <text x="528" y="180" fill="#cbd5e1" font-size="10">1. CHECK: if (cache.has(n)) return cache.get(n);</text>
  <text x="528" y="200" fill="#cbd5e1" font-size="10">2. COMPUTE: const res = fib(n - 1) + fib(n - 2);</text>
  <text x="528" y="220" fill="#cbd5e1" font-size="10">3. STORE: cache.set(n, res); return res;</text>
  <text x="528" y="244" fill="#a7f3d0" font-size="10">• Duplicate subtrees are PRUNED on the very first hit!</text>
  <text x="528" y="262" fill="#38bdf8" font-size="10">• Second visit to fib(3) resolves in O(1) constant lookup.</text>

  <rect x="516" y="305" width="400" height="140" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="328" fill="#38bdf8" font-size="11" font-weight="bold">Performance &amp; Complexity Miracle:</text>
  <text x="528" y="350" fill="#cbd5e1" font-size="10">• For N = 30: Drops from 2,692,537 calls down to ONLY 59 calls!</text>
  <text x="528" y="370" fill="#34d399" font-size="10">• Time Complexity: Exactly O(N) linear operations!</text>
  <text x="528" y="390" fill="#cbd5e1" font-size="10">• Space Complexity: O(N) cache entries + O(N) stack depth.</text>
  <text x="528" y="416" fill="#34d399" font-size="10" font-weight="bold">• Speedup Factor: 45,000x faster execution!</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'memoization-protocol',
      text: {
        en: 'The Three-Step Memoization Protocol',
        bn: 'তিন ধাপের মেমোইজেশন প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Implementing memoization follows a consistent structural recipe. Before performing any recursive logic, check if the input key already exists in your cache.',
        bn: 'মেমোইজেশন বাস্তবায়ন একটি ধারাবাহিক নিয়ম অনুসরণ করে। কোনো রিকার্সিভ কাজ করার আগে ইনপুট কি-টি ক্যাশে আগে থেকেই উপস্থিত আছে কিনা তা পরীক্ষা করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If found, return the cached result immediately. If not found, compute the answer recursively, store the result in the cache table, and return it. This guarantees that each unique parameter state is evaluated exactly once throughout the entire program.',
        bn: 'ক্যাশে পাওয়া গেলে তাৎক্ষণিক সেই ফলাফল ফেরত দেওয়া হয়। না পাওয়া গেলে রিকার্সিভভাবে হিসাব সম্পন্ন করে ফলাফলটি ক্যাশে সংরক্ষণ করা হয় এবং ফেরত পাঠানো হয়। এর ফলে প্রোগ্রামের সম্পূর্ণ যাত্রায় প্রতিটি স্বতন্ত্র ইনপুট স্টেট ঠিক একবারই হিসাব করা হয়।'
      }
    },
    {
      type: 'heading',
      id: 'bridge-to-dp',
      text: {
        en: 'The Bridge to Dynamic Programming: Top-Down vs Bottom-Up',
        bn: 'ডাইনামিক প্রোগ্রামিংয়ের সেতু: টপ-ডাউন বনাম বটম-আপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Memoization represents the top-down variant of Dynamic Programming. It starts at the original high-level problem and recurses downward on demand.',
        bn: 'মেমোইজেশন হলো ডাইনামিক প্রোগ্রামিংয়ের টপ-ডাউন রূপ। এটি মূল সমস্যা থেকে শুরু করে প্রয়োজনের ভিত্তিতে নিচের দিকে ধাবিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In contrast, bottom-up tabulation starts at the base cases and iteratively fills a table upward to N. Tabulation eliminates call stack frames entirely and allows space optimization down to O(1) by maintaining only the last two computed values.',
        bn: 'অন্যদিকে বটম-আপ ট্যাবুলার পদ্ধতি বেস কেস থেকে শুরু করে একটি টেবিল পূরণ করে ক্রমান্বয়ে N পর্যন্ত এগিয়ে যায়। ট্যাবুলার পদ্ধতি কল স্ট্যাকের প্রয়োজন পুরোপুরি দূর করে এবং কেবল শেষ দুটি মান সংরক্ষণ করে মেমরি খরচ O(1) এ নামিয়ে আনতে পারে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-memo-sim',
      text: {
        en: 'Interactive Benchmark: Naive vs Memoized Fibonacci at Scale',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: সাধারণ বনাম মেমোইজড ফিবোনাচ্চি পরীক্ষা'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-memo-sim.ts',
      code: `// Memoization & Overlapping Subproblems Simulator
// Naive Fibonacci(30) executes 2692537 operations -> gives 2692537
// Memoized Fibonacci(30) finishes in 59 operations -> gives 59
// Evaluated result for Fibonacci(30) yields 832040 -> returns 832040
function simulateMemoization() {
  console.log("=== MEMOIZATION & OVERLAPPING SUBPROBLEMS SIMULATOR ===");

  const TARGET_N = 30;
  console.log(\`\\nEvaluating Fibonacci for N = \${TARGET_N}:\`);

  let naiveCalls = 0;
  function naiveFib(n: number): number {
    naiveCalls++;
    if (n <= 1) return n;
    return naiveFib(n - 1) + naiveFib(n - 2);
  }

  let memoCalls = 0;
  const memoCache = new Map<number, number>();
  function memoFib(n: number): number {
    memoCalls++;
    if (n <= 1) return n;
    if (memoCache.has(n)) return memoCache.get(n)!;
    const result = memoFib(n - 1) + memoFib(n - 2);
    memoCache.set(n, result);
    return result;
  }

  const memoResult = memoFib(TARGET_N);
  const naiveResult = naiveFib(TARGET_N);

  console.log(\`   Fibonacci(\${TARGET_N}) = \${memoResult}\`);
  console.log(\`   Naive Recursive Operations:    \${naiveCalls} function invocations (O(2^N))\`);
  console.log(\`   Memoized Top-Down Operations:  \${memoCalls} function invocations (O(N))\`);

  const speedup = (naiveCalls / memoCalls).toFixed(0);
  console.log(\`   -> Speedup Factor: \${speedup}x fewer operations!\`);
}

simulateMemoization();`
    },
    {
      type: 'terminal',
      id: 'memo-sim-output',
      cmd: 'npx tsx recursion-memo-sim.ts',
      output: `=== MEMOIZATION & OVERLAPPING SUBPROBLEMS SIMULATOR ===

Evaluating Fibonacci for N = 30:
   Fibonacci(30) = 832040
   Naive Recursive Operations:    2692537 function invocations (O(2^N))
   Memoized Top-Down Operations:  59 function invocations (O(N))
   -> Speedup Factor: 45636x fewer operations!`
    }
  ],
  exercises: [
    {
      id: 'rec-mem-ex-1',
      kind: 'mcq',
      topic: 'overlapping-subproblems-definition',
      question: {
        en: 'What defines an overlapping subproblem in recursive algorithm design?',
        bn: 'রিকার্সিভ অ্যালগরিদম ডিজাইনে ওভারল্যাপিং সাব-প্রবলেম বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'A smaller problem instance with identical input parameters that is evaluated repeatedly across different execution branches',
          bn: 'একই ইনপুট প্যারামিটারবিশিষ্ট একটি ক্ষুদ্র সমস্যা যা বিভিন্ন এক্সিকিউশন শাখায় বারবার অপ্রয়োজনীয়ভাবে গণনা করা হয়'
        },
        {
          en: 'A memory leak caused by unclosed file descriptors',
          bn: 'ফাইল ডেসক্রিপ্টর খোলা রাখার কারণে তৈরি হওয়া মেমরি লিক'
        },
        {
          en: 'A problem that can only be solved using floating point numbers',
          bn: 'এমন একটি সমস্যা যা কেবল ফ্লোটিং পয়েন্ট সংখ্যা দিয়ে সমাধান করা যায়'
        },
        {
          en: 'A CSS selector that matches two different HTML elements',
          bn: 'একটি সিএসএস সিলেক্টর যা দুটি ভিন্ন এইচটিএমএল উপাদানের সাথে মেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Overlapping subproblems recompute the exact same inputs.',
        bn: 'ওভারল্যাপিং সাব-প্রবলেমে হুবহু একই ইনপুটের হিসাব বারবার করা হয়।'
      },
      explanation: {
        en: 'In algorithms like naive Fibonacci, branches re-evaluate fib(3) and fib(2) constantly. Caching prevents this wasted duplicate computation.',
        bn: 'ফিবোনাচ্চির মতো সমস্যায় fib(3) বা fib(2) বারবার হিসাব হতে থাকে। ক্যাশিং এই বাড়তি অপচয় পুরোপুরি বন্ধ করে দেয়।'
      }
    },
    {
      id: 'rec-mem-ex-2',
      kind: 'mcq',
      topic: 'memoization-complexity-improvement',
      question: {
        en: 'How does memoization transform the time complexity of the Fibonacci algorithm for an input of size N?',
        bn: 'মেমোইজেশন N আকারের ইনপুটের জন্য ফিবোনাচ্চি অ্যালগরিদমের টাইম কমপ্লেক্সিটিকে কীভাবে রূপান্তর করে?'
      },
      options: [
        {
          en: 'From exponential O(2^N) time down to linear O(N) time',
          bn: 'সূচকীয় O(2^N) সময় থেকে কমিয়ে লিনিয়ার O(N) সময়ে'
        },
        {
          en: 'From O(N) down to O(1) time',
          bn: 'O(N) থেকে কমিয়ে O(1) সময়ে'
        },
        {
          en: 'From O(N log N) up to O(N^3) time',
          bn: 'O(N log N) থেকে বাড়িয়ে O(N^3) সময়ে'
        },
        {
          en: 'Time complexity is completely unaffected by caching',
          bn: 'ক্যাশিংয়ের ফলে টাইম কমপ্লেক্সিটির কোনো পরিবর্তন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each unique number from 0 to N is computed exactly once.',
        bn: '০ থেকে N পর্যন্ত প্রতিটি সংখ্যা ঠিক একবারই হিসাব করা হয়।'
      },
      explanation: {
        en: 'Because there are only N unique states, computing each once and looking up future queries in O(1) reduces total operations to O(N).',
        bn: 'যেহেতু মোট N সংখ্যক ভিন্ন মান থাকে এবং প্রতিটি একবার হিসাব করে বাকি সময় O(1) এ পাওয়া যায়, তাই মোট সময় O(N) হয়।'
      }
    },
    {
      id: 'rec-mem-ex-3',
      kind: 'mcq',
      topic: 'top-down-vs-bottom-up-tradeoff',
      question: {
        en: 'What is a key operational advantage of bottom-up tabulation over top-down memoization in Dynamic Programming?',
        bn: 'ডাইনামিক প্রোগ্রামিংয়ে টপ-ডাউন মেমোইজেশনের তুলনায় বটম-আপ ট্যাবুলার পদ্ধতির প্রধান ব্যবহারিক সুবিধা কোনটি?'
      },
      options: [
        {
          en: 'It completely eliminates recursive function call stack frames and enables optimizing space to O(1) using only two rolling state variables',
          bn: 'এটি রিকার্সিভ কল স্ট্যাক ফ্রেমের প্রয়োজনীয়তা পুরোপুরি দূর করে এবং কেবল দুটি চলক ব্যবহার করে মেমরিকে O(1) এ নামিয়ে আনতে পারে'
        },
        {
          en: 'It runs without requiring any CPU hardware processor',
          bn: 'এটি কোনো সিপিইউ হার্ডওয়্যার প্রসেসর ছাড়াই চলতে পারে'
        },
        {
          en: 'It encrypts the output using banking-grade security',
          bn: 'এটি ব্যাংকিং মানের নিরাপত্তা দিয়ে আউটপুট এনক্রিপ্ট করে'
        },
        {
          en: 'It only works when connected to a relational database',
          bn: 'এটি কেবল রিলেশনাল ডাটাবেসের সাথে সংযুক্ত থাকলেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Iterative loops avoid stack frames and allow rolling window memory.',
        bn: 'লুপ ব্যবহারের ফলে স্ট্যাক ফ্রেম লাগে না এবং মেমরি দারুণভাবে কমানো যায়।'
      },
      explanation: {
        en: 'Tabulation uses iterative loops, avoiding recursion limits entirely. By discarding older table rows, memory drops from O(N) to O(1).',
        bn: 'ট্যাবুলার পদ্ধতি লুপ ব্যবহার করে স্ট্যাক সীমাবদ্ধতা এড়ায়। পুরাতন ডাটা ফেলে দিয়ে মেমরি O(N) থেকে O(1) এ নামিয়ে আনা সম্ভব হয়।'
      }
    },
    {
      id: 'rec-mem-ex-4',
      kind: 'mcq',
      topic: 'memoization-cache-key-design',
      question: {
        en: 'When memoizing a function that accepts two arguments (such as gridTraveler(m, n)), what is the recommended way to key the cache table?',
        bn: 'দুটি আর্গুমেন্ট গ্রহণকারী ফাংশন (যেমন gridTraveler(m, n)) মেমোইজ করার সময় ক্যাশ টেবিলে কি (key) সংরক্ষণের আদর্শ পদ্ধতি কোনটি?'
      },
      options: [
        {
          en: 'Constructing a unique combined string key like `${m},${n}` (or using a nested Map)',
          bn: '`${m},${n}` এর মতো একটি অনন্য সমন্বিত স্ট্রিং কি তৈরি করা (অথবা নেস্টেড ম্যাপ ব্যবহার করা)'
        },
        {
          en: 'Keying exclusively by the first parameter m and ignoring n',
          bn: 'কেবল প্রথম প্যারামিটার m দিয়ে কি তৈরি করে n-কে উপেক্ষা করা'
        },
        {
          en: 'Using random floating point numbers as keys',
          bn: 'এলোমেলো ফ্লোটিং পয়েন্ট সংখ্যা কি হিসেবে ব্যবহার করা'
        },
        {
          en: 'Overwriting the cache with an empty object on every call',
          bn: 'প্রতিটি কলে ক্যাশ খালি অবজেক্ট দিয়ে প্রতিস্থাপন করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The cache key must uniquely identify the combination of all arguments.',
        bn: 'ক্যাশ কি-কে অবশ্যই সমস্ত আর্গুমেন্টের সমন্বয়কে অনন্যভাবে সনাক্ত করতে হবে।'
      },
      explanation: {
        en: 'If multiple parameters define the subproblem state, all of them must be serialized into the cache key to prevent colliding state entries.',
        bn: 'যদি একাধিক প্যারামিটার সমস্যার অবস্থা নির্ধারণ করে, তবে ভুল তথ্য এড়াতে সবগুলোকে মিলিয়ে ক্যাশ কি তৈরি করতে হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Memoization & Overlapping Subproblems Quiz',
      bn: 'মেমোইজেশন ও ওভারল্যাপিং সাব-প্রবলেম কুইজ'
    },
    questions: [
      {
        id: 'rec-mem-qz-1',
        kind: 'mcq',
        topic: 'optimal-substructure-property',
        question: {
          en: 'What core property must a problem exhibit alongside overlapping subproblems to be solvable via Dynamic Programming?',
          bn: 'ডাইনামিক প্রোগ্রামিং দিয়ে সমাধানের জন্য ওভারল্যাপিং সাব-প্রবলেমের পাশাপাশি একটি সমস্যার কোন মূল বৈশিষ্ট্য থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'Optimal Substructure (an optimal solution to the problem contains optimal solutions to its subproblems)',
            bn: 'অপটিমাল সাবস্ট্রাকচার (সমস্যার একটি সর্বোত্তম সমাধানের মধ্যে তার উপ-সমস্যাগুলোরও সর্বোত্তম সমাধান বিদ্যমান থাকে)'
          },
          {
            en: 'Random memory distribution',
            bn: 'এলোমেলো মেমরি বিন্যাস'
          },
          {
            en: 'Zero time complexity on all platforms',
            bn: 'সব প্ল্যাটফর্মে শূন্য টাইম কমপ্লেক্সিটি'
          },
          {
            en: 'Requirement to run exclusively on Linux servers',
            bn: 'শুধুমাত্র লিনাক্স সার্ভারে চলার বাধ্যবাধকতা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Optimal global solutions are built from optimal sub-solutions.',
          bn: 'সর্বোত্তম সামগ্রিক সমাধান উপ-সমস্যাগুলোর সেরা সমাধান দিয়ে গঠিত হয়।'
        },
        explanation: {
          en: 'Dynamic Programming requires both overlapping subproblems (for caching) and optimal substructure (for composing optimal solutions).',
          bn: 'ডাইনামিক প্রোগ্রামিংয়ের জন্য ওভারল্যাপিং সাব-প্রবলেম এবং অপটিমাল সাবস্ট্রাকচার উভয় বৈশিষ্ট্যের উপস্থিতি বাধ্যতামূলক।'
        }
      },
      {
        id: 'rec-mem-qz-2',
        kind: 'mcq',
        topic: 'memoization-memory-overhead',
        question: {
          en: 'What is the auxiliary space complexity tradeoff introduced when applying top-down memoization to an algorithm?',
          bn: 'কোনো অ্যালগরিদমে টপ-ডাউন মেমোইজেশন প্রয়োগ করলে সহায়ক স্পেস কমপ্লেক্সিটিতে কোন প্রভাব পড়ে?'
        },
        options: [
          {
            en: 'Auxiliary memory increases by O(N) to store the cached lookup table alongside the call stack',
            bn: 'কল স্ট্যাকের পাশাপাশি ক্যাশ টেবিল সংরক্ষণের জন্য সহায়ক মেমরি O(N) পরিমাণ বৃদ্ধি পায়'
          },
          {
            en: 'Auxiliary memory permanently drops to 0 bytes',
            bn: 'সহায়ক মেমরি স্থায়ীভাবে ০ বাইটে নেমে আসে'
          },
          {
            en: 'Memory overhead becomes infinite on every device',
            bn: 'প্রতিটি ডিভাইসে মেমরি খরচ অসীম হয়ে যায়'
          },
          {
            en: 'The operating system deletes all background processes',
            bn: 'অপারেটিং সিস্টেম পেছনের সব প্রসেস মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Memoization trades memory to save computational time.',
          bn: 'মেমোইজেশন গণনার সময় বাঁচাতে মেমরির স্থান ব্যয় করে।'
        },
        explanation: {
          en: 'Memoization trades space for time. Caching N distinct subproblem answers consumes O(N) memory in addition to stack depth.',
          bn: 'মেমোইজেশন সময় বাঁচানোর জন্য মেমরি ব্যবহার করে। N সংখ্যক উত্তর সংরক্ষণে O(N) অতিরিক্ত মেমরি ব্যয় হয়।'
        }
      },
      {
        id: 'rec-mem-qz-3',
        kind: 'mcq',
        topic: 'memoization-pure-function-constraint',
        question: {
          en: 'Why must a function be pure (deterministic with no side effects) for memoization to produce correct results?',
          bn: 'মেমোইজেশন সঠিক ফলাফল দেওয়ার জন্য ফাংশনটি কেন অবশ্যই পিওর (বিশুদ্ধ ও পার্শ্বপ্রতিক্রিয়াহীন) হতে হয়?'
        },
        options: [
          {
            en: 'If a function depends on external state or random numbers, returning a cached result will emit stale or incorrect answers',
            bn: 'ফাংশনটি যদি বাইরের পরিবর্তনশীল ডাটা বা এলোমেলো সংখ্যার ওপর নির্ভর করে, তবে ক্যাশ করা মান ভুল উত্তর দেবে'
          },
          {
            en: 'Because impure functions cannot be written in JavaScript',
            bn: 'কারণ জাভাস্ক্রিপ্টে ইমপিওর ফাংশন লেখা যায় না'
          },
          {
            en: 'To make the code comply with HTML validation checkers',
            bn: 'এইচটিএমএল ভ্যালিডেশনের নিয়ম মেনে চলার জন্য'
          },
          {
            en: 'Impure functions cause physical damage to computer RAM',
            bn: 'ইমপিওর ফাংশন কম্পিউটারের র‍্যামের ক্ষতি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Same inputs must guarantee the exact same output.',
          bn: 'একই ইনপুটে সর্বদা হুবহু একই আউটপুট আসতে হয়।'
        },
        explanation: {
          en: 'Memoization relies on the invariant f(x) always equals y. If external side effects alter outcomes, caching returns invalid results.',
          bn: 'মেমোইজেশন নিশ্চিত করে যে f(x) সর্বদা y হবে। বাইরের কোনো প্রভাব থাকলে ক্যাশের পুরনো ডাটা ভুল ফলাফল তৈরি করবে।'
        }
      },
      {
        id: 'rec-mem-qz-4',
        kind: 'mcq',
        topic: 'lru-cache-eviction-for-memoization',
        question: {
          en: 'Why is using an LRU (Least Recently Used) cache policy recommended when memoizing functions in long-running production web servers?',
          bn: 'দীর্ঘ সময় ধরে চলা প্রোডাকশন ওয়েব সার্ভারে ফাংশন মেমোইজ করার সময় LRU (Least Recently Used) ক্যাশ নীতি কেন সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'It bounds the cache to a maximum size, evicting cold entries to prevent unbounded memory leaks as millions of unique inputs arrive',
            bn: 'এটি ক্যাশের সর্বোচ্চ আকার সীমাবদ্ধ রাখে এবং কোটি কোটি ইনপুট আসলেও মেমরি লিক রোধ করতে পুরনো ডাটা সরিয়ে দেয়'
          },
          {
            en: 'Because LRU caches run on quantum entanglement',
            bn: 'কারণ LRU ক্যাশ কোয়ান্টাম এনট্যাঙ্গলমেন্টে চলে'
          },
          {
            en: 'To restart the server after every 10 requests',
            bn: 'প্রতি ১০টি রিকোয়েস্টের পর সার্ভার রিস্টার্ট করার জন্য'
          },
          {
            en: 'It is required by CSS grid layout engines',
            bn: 'সিএসএস গ্রিড লেআউট ইঞ্জিনের জন্য এটি আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: 'An unbounded map will grow infinitely in long-running processes.',
          bn: 'সীমাহীন ম্যাপ দীর্ঘস্থায়ী সার্ভারে অবিরাম মেমরি বাড়াতে থাকে।'
        },
        explanation: {
          en: 'Without eviction, a simple Map grows infinitely with unique inputs, causing out-of-memory crashes. LRU discards unused entries to bound memory.',
          bn: 'সীমাহীন ম্যাপে নতুন নতুন ইনপুট জমতে থাকলে সার্ভার মেমরি ফুরিয়ে ক্র্যাশ করে। LRU পুরনো ডাটা ফেলে দিয়ে মেমরি নির্দিষ্ট সীমার মধ্যে রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-recursion-release',
    title: {
      en: 'Recursion in Production: Call Stack Safety, Trampolines & Manual Stacks',
      bn: 'প্রোডাকশনে রিকার্শন: কল স্ট্যাক সুরক্ষা, ট্রাম্পোলিন ও ম্যানুয়াল স্ট্যাক'
    }
  }
};
