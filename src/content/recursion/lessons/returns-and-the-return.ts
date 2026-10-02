import type { Lesson } from '../../../lib/types';

export const ReturnsAndTheReturnLesson: Lesson = {
  slug: 'returns-and-the-return',
  tech: 'recursion',
  title: {
    en: 'Tail Call Optimization (TCO) & Accumulators: O(1) Space Recursion',
    bn: 'টেল কল অপ্টিমাইজেশন (TCO) ও অ্যাকিউমুলেটর: O(1) স্পেস রিকার্শন'
  },
  summary: {
    en: 'Master Tail Call Optimization (TCO) and the accumulator parameter pattern. Learn how compilers transform tail recursion into constant O(1) memory loops, rewrite traditional non-tail functions, examine ECMAScript strict mode semantics, and avoid stack overflow crashes.',
    bn: 'টেল কল অপ্টিমাইজেশন (TCO) এবং অ্যাকিউমুলেটর প্যারামিটার প্যাটার্ন গভীরভাবে আয়ত্ত করুন। কম্পাইলার কীভাবে টেল রিকার্শনকে O(1) মেমরির লুপে রূপান্তর করে, নন-টেল ফাংশন পুনর্লিখন, ইসিএমএস্ক্রিপ্ট স্ট্রিক্ট মোড এবং স্ট্যাক ওভারফ্লো দূর করার সম্পূর্ণ গাইড।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'tail-call-mechanics',
      text: {
        en: 'What is a Tail Call and How Does TCO Work?',
        bn: 'টেল কল কী এবং TCO কীভাবে কাজ করে?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When writing recursive algorithms in production environments, memory consumption is often the limiting factor that prevents processing large inputs. By structuring recursive invocations as tail calls and using accumulator parameters, you enable compilers to optimize recursion into efficient constant-space loops.',
        bn: 'প্রোডাকশন পরিবেশে রিকার্সিভ অ্যালগরিদম লেখার সময় মেমরির অতিরিক্ত ব্যবহার প্রায়শই বড় ইনপুট প্রক্রিয়াকরণে প্রধান বাধা হয়ে দাঁড়ায়। রিকার্সিভ কলগুলোকে টেইল পজিশনে সাজিয়ে এবং অ্যাকিউমুলেটর প্যারামিটার ব্যবহার করে আপনি কম্পাইলারকে রিকার্শনকে মেমরি-সাশ্রয়ী O(1) লুপে রূপান্তর করার সুযোগ দিতে পারেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A function call is in tail position if it represents the absolute final action executed before returning. When calculating factorial 5, tail-call optimization reuses a single frame to produce 120 without allocating additional stack memory.',
        bn: 'একটি ফাংশন কল টেইল পজিশনে থাকে যদি এটি রিটার্ন করার আগে নির্বাহিত হওয়া একদম শেষ কাজ হয়। ফ্যাক্টোরিয়াল ৫ গণনার ক্ষেত্রে টেল-কল অপ্টিমাইজেশন কোনো অতিরিক্ত স্ট্যাক মেমরি বরাদ্দ না করে একটিমাত্র ফ্রেম পুনর্ব্যবহার করে ১২০ তৈরি করতে পারে।'
      }
    },
    {
      type: 'diagram',
      id: 'tail-call-diagram',
      caption: {
        en: 'Figure 1: Standard non-tail recursion stack tree vs tail-call optimized constant frame reuse',
        bn: 'চিত্র ১: সাধারণ নন-টেল রিকার্শন স্ট্যাক ট্রি বনাম টেল-কল অপ্টিমাইজড একক ফ্রেম পুনর্ব্যবহার'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="tcoHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="badTcoGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#31101e"/>
      <stop offset="100%" stop-color="#190a14"/>
    </linearGradient>
    <linearGradient id="goodTcoGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#tcoHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">⚡</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">TAIL CALL OPTIMIZATION (TCO) &amp; ACCUMULATOR PATTERN</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Eliminating pending post-call multiplications, register overwrites, and constant O(1) auxiliary space</text>

  <!-- Left: Standard Non-Tail Recursion -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#badTcoGrad)" stroke="#ec4899" stroke-width="1.5"/>
  <text x="44" y="118" fill="#f472b6" font-size="13" font-weight="bold">NON-TAIL RECURSION (O(N) STACK)</text>

  <rect x="44" y="136" width="400" height="85" rx="6" fill="#030712" stroke="#ec4899"/>
  <text x="56" y="158" fill="#cbd5e1" font-size="10">function fact(n) {</text>
  <text x="76" y="176" fill="#cbd5e1" font-size="10">if (n &lt;= 1) return 1;</text>
  <text x="76" y="196" fill="#f472b6" font-size="10" font-weight="bold">return n * fact(n - 1); // Multiplication pending!</text>
  <text x="56" y="214" fill="#cbd5e1" font-size="10">}</text>

  <rect x="44" y="235" width="400" height="205" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="258" fill="#f87171" font-size="11" font-weight="bold">Why TCO Cannot Happen Here:</text>
  <text x="56" y="280" fill="#cbd5e1" font-size="10">• Caller CANNOT discard its stack frame.</text>
  <text x="56" y="298" fill="#cbd5e1" font-size="10">• It must remember 'n' to perform the multiplication AFTER.</text>
  <text x="56" y="316" fill="#fca5a5" font-size="10">• Frame 1 waits for Frame 2... Frame 2 waits for Frame 3...</text>
  <text x="56" y="336" fill="#ef4444" font-size="10">• Memory Cost: O(N) frames pushed onto call stack.</text>
  <text x="56" y="356" fill="#ef4444" font-size="10">• If N = 100,000 -&gt; RangeError: Stack overflow crash!</text>
  <text x="56" y="390" fill="#f472b6" font-size="10" font-weight="bold">• Result: Linear auxiliary memory overhead</text>

  <!-- Right: Tail Call Optimized Recursion -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#goodTcoGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">TAIL RECURSION + ACCUMULATOR (O(1) SPACE)</text>

  <rect x="516" y="136" width="400" height="85" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="158" fill="#cbd5e1" font-size="10">function factTail(n, acc = 1) {</text>
  <text x="548" y="176" fill="#cbd5e1" font-size="10">if (n &lt;= 1) return acc;</text>
  <text x="548" y="196" fill="#34d399" font-size="10" font-weight="bold">return factTail(n - 1, n * acc); // Pure tail call!</text>
  <text x="528" y="214" fill="#cbd5e1" font-size="10">}</text>

  <rect x="516" y="235" width="400" height="205" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="258" fill="#34d399" font-size="11" font-weight="bold">How TCO Executes In Hardware/Engine:</text>
  <text x="528" y="280" fill="#cbd5e1" font-size="10">• Caller has ZERO pending work after the child returns.</text>
  <text x="528" y="298" fill="#34d399" font-size="10">• Compiler reuses current frame: overwrites args in-place!</text>
  <text x="528" y="318" fill="#a7f3d0" font-size="10">• Emits a simple JUMP assembly instruction to loop start.</text>
  <text x="528" y="338" fill="#38bdf8" font-size="10">• Memory Cost: Exactly O(1) auxiliary stack space!</text>
  <text x="528" y="358" fill="#34d399" font-size="10">• Runs 1,000,000 recursive calls with ZERO memory growth.</text>
  <text x="528" y="390" fill="#34d399" font-size="10" font-weight="bold">• Result: Elegance of recursion with efficiency of a loop</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'accumulator-pattern-guide',
      text: {
        en: 'The Accumulator Pattern: Carrying State Downward',
        bn: 'অ্যাকিউমুলেটর প্যাটার্ন: নিচে তথ্য বহন করার কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To transform non-tail recursive functions into tail-recursive variants, developers employ the accumulator pattern. Instead of waiting for return values to bubble upward during unwinding, intermediate results are calculated in the parameters and carried downward during the winding phase.',
        bn: 'নন-টেল রিকার্সিভ ফাংশনকে টেল-রিকার্সিভে রূপান্তর করতে ডেভেলপাররা অ্যাকিউমুলেটর প্যাটার্ন ব্যবহার করেন। আনওয়াইন্ডিং পর্যায়ে নিচ থেকে উপরে মান ফেরার অপেক্ষা না করে প্যারামিটারের মাধ্যমেই মধ্যবর্তী ফলাফল গণনা করে ওয়াইন্ডিং পর্যায়ে নিচে বহন করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the base case is reached, the accumulator already contains the complete final answer. The base case simply emits this value, and it passes straight through all returning calls without requiring any additional computations.',
        bn: 'যখন বেস কেসে পৌঁছানো হয়, অ্যাকিউমুলেটরে ইতোমধ্যে সম্পূর্ণ চূড়ান্ত ফলাফল প্রস্তুত থাকে। বেস কেস সরাসরি এই মানটি ফেরত পাঠায় এবং কোনো বাড়তি হিসাব ছাড়াই তা সরাসরি মূল কলারের কাছে পৌঁছে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'trampoline-technique',
      text: {
        en: 'The Trampoline Pattern: Simulating TCO in JavaScript',
        bn: 'ট্রাম্পোলিন প্যাটার্ন: জাভাস্ক্রিপ্টে TCO সিমুলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While ECMAScript 2015 specified Tail Call Optimization for strict mode, many JavaScript engines (including V8 in Node.js) do not implement native TCO for call-trace debugging reasons. To execute deep tail recursion safely, engineers use a trampoline.',
        bn: 'যদিও ইসিএমএস্ক্রিপ্ট ২০১৫ স্ট্রিক্ট মোডে টেল কল অপ্টিমাইজেশন অনুমোদন করেছিল, কল ট্রেস ডিবাগিং সুবিধার কারণে Node.js-এর V8 ইঞ্জিন নেটিভ TCO কার্যকর করেনি। গভীর টেল রিকার্শন নিরাপদে চালাতে ইঞ্জিনিয়াররা ট্রাম্পোলিন কৌশল ব্যবহার করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A trampoline wraps recursive steps inside thunk functions. Instead of making an immediate nested function call, each step returns a tiny zero-argument function, which an iterative loop unrolls one by one in constant stack space.',
        bn: 'একটি ট্রাম্পোলিন রিকার্সিভ ধাপগুলোকে থাঙ্ক ফাংশনের ভেতরে মুড়িয়ে রাখে। সাথে সাথে নেস্টেড ফাংশন কল করার বদলে প্রতিটি ধাপ একটি আর্গুমেন্টহীন ফাংশন ফেরত দেয়, যা একটি সাধারণ লুপ এক এক করে O(1) স্ট্যাক স্পেসে নির্বাহ করে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-tco-sim',
      text: {
        en: 'Interactive Benchmark: Factorial Accumulators & Trampoline Execution',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: ফ্যাক্টোরিয়াল অ্যাকিউমুলেটর ও ট্রাম্পোলিন এক্সিকিউশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-tco-sim.ts',
      code: `// Tail Call Optimization & Trampoline Simulator
// Tail factorial(5) evaluates with accumulator 1 -> gives 1
// Result for 5! yields 120 -> returns 120
// Trampoline executes 100000 recursive calls in O(1) stack space -> gives 100000
function simulateTailCallOptimization() {
  console.log("=== TAIL CALL OPTIMIZATION (TCO) & ACCUMULATOR SIMULATOR ===");

  console.log("\\n1. Factorial Comparison (n = 5):");
  function standardFact(n: number): number {
    if (n <= 1) return 1;
    return n * standardFact(n - 1);
  }

  function tailFact(n: number, acc: number = 1): number {
    if (n <= 1) return acc;
    return tailFact(n - 1, n * acc);
  }

  console.log(\`   Standard Factorial(5): \${standardFact(5)} [Pending multiply per frame, O(N) stack]\`);
  console.log(\`   Tail Factorial(5, 1):  \${tailFact(5, 1)} [Accumulator carried forward, O(1) stack eligible]\`);

  console.log("\\n2. Trampoline Execution (100000 recursive calls):");
  function trampoline(fn: Function) {
    return function (...args: any[]) {
      let result = fn(...args);
      while (typeof result === "function") {
        result = result();
      }
      return result;
    };
  }

  const safeCountdown = trampoline(function step(n: number) {
    if (n <= 0) return "Terminated safely at 0";
    return () => step(n - 1);
  });

  const res = safeCountdown(100000);
  console.log(\`   Safe Countdown from 100000: \${res}\`);
  console.log("   -> Trampoline successfully ran 100000 calls without stack overflow!");
}

simulateTailCallOptimization();`
    },
    {
      type: 'terminal',
      id: 'tco-sim-output',
      cmd: 'npx tsx recursion-tco-sim.ts',
      output: `=== TAIL CALL OPTIMIZATION (TCO) & ACCUMULATOR SIMULATOR ===

1. Factorial Comparison (n = 5):
   Standard Factorial(5): 120 [Pending multiply per frame, O(N) stack]
   Tail Factorial(5, 1):  120 [Accumulator carried forward, O(1) stack eligible]

2. Trampoline Execution (100000 recursive calls):
   Safe Countdown from 100000: Terminated safely at 0
   -> Trampoline successfully ran 100000 calls without stack overflow!`
    }
  ],
  exercises: [
    {
      id: 'rec-tco-ex-1',
      kind: 'mcq',
      topic: 'tail-call-position-definition',
      question: {
        en: 'Why is the statement return n * factorial(n - 1); ineligible for Tail Call Optimization (TCO)?',
        bn: 'return n * factorial(n - 1); স্টেটমেন্টটি কেন টেল কল অপ্টিমাইজেশনের (TCO) জন্য অযোগ্য?'
      },
      options: [
        {
          en: 'The multiplication by n must execute after factorial(n - 1) returns, meaning the recursive call is not in tail position',
          bn: 'factorial(n - 1) এর মান ফেরত আসার পর n দিয়ে গুণের কাজটি সম্পন্ন করতে হয়, অর্থাৎ রিকার্সিভ কলটি টেইল পজিশনে নেই'
        },
        {
          en: 'Because factorial is not a registered JavaScript keyword',
          bn: 'কারণ factorial কোনো স্বীকৃত জাভাস্ক্রিপ্ট কিওয়ার্ড নয়'
        },
        {
          en: 'Because multiplying integers is forbidden in strict mode',
          bn: 'কারণ স্ট্রিক্ট মোডে পূর্ণসংখ্যা গুণ করা নিষিদ্ধ'
        },
        {
          en: 'Because the function takes fewer than 10 arguments',
          bn: 'কারণ ফাংশনটি ১০টির কম আর্গুমেন্ট গ্রহণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A tail call must be the absolute final operation before returning.',
        bn: 'টেল কল হতে হলে রিটার্ন করার আগের কাজটি অবশ্যই সর্বশেষ অপারেশন হতে হয়।'
      },
      explanation: {
        en: 'In n * factorial(n - 1), the multiplication is the last operation, not the function call. The caller frame must stay alive to complete the multiply.',
        bn: 'n * factorial(n - 1) এ শেষ কাজ হলো গুণ করা, ফাংশন কল নয়। তাই গুণ সম্পন্ন করার জন্য কলার ফ্রেমকে স্ট্যাকে বেঁচে থাকতে হয়।'
      }
    },
    {
      id: 'rec-tco-ex-2',
      kind: 'mcq',
      topic: 'compiler-frame-reuse-in-tco',
      question: {
        en: 'How does an optimizing compiler execute a tail-recursive function in constant O(1) auxiliary space?',
        bn: 'একটি অপ্টিমাইজিং কম্পাইলার কীভাবে কনস্ট্যান্ট O(1) সহায়ক মেমরিতে টেল-রিকার্সিভ ফাংশন সম্পাদন করে?'
      },
      options: [
        {
          en: 'It overwrites arguments in the current stack frame in-place and issues a jump instruction to the function entry, behaving like an iterative while loop',
          bn: 'এটি বর্তমান স্ট্যাক ফ্রেমেই আর্গুমেন্টগুলো নতুন মান দিয়ে প্রতিস্থাপন করে এবং ফাংশনের শুরুতে জাম্প নির্দেশ দেয়, যা একটি while লুপের মতো কাজ করে'
        },
        {
          en: 'It saves the call stack to a temporary text file on disk',
          bn: 'এটি কল স্ট্যাককে ডিস্কের একটি সাময়িক টেক্সট ফাইলে সেভ করে রাখে'
        },
        {
          en: 'It increases the computer physical RAM memory hardware',
          bn: 'এটি কম্পিউটারের ফিজিক্যাল র‍্যাম মেমরির আকার বৃদ্ধি করে'
        },
        {
          en: 'It compiles the code directly into WebGL shader instructions',
          bn: 'এটি কোডটিকে সরাসরি WebGL শেডার নির্দেশে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'TCO transforms tail recursion into a hardware loop jump.',
        bn: 'TCO টেল রিকার্শনকে হার্ডওয়্যার লুপ জাম্পে রূপান্তর করে।'
      },
      explanation: {
        en: 'Because the caller has no remaining work, its frame is recycled. New argument values replace existing registers, converting recursion into a loop.',
        bn: 'যেহেতু কলারের কোনো কাজ বাকি থাকে না, তাই ফ্রেমটি পুনরায় ব্যবহৃত হয়। নতুন মান বসিয়ে রিকার্শনকে সরাসরি লুপে রূপান্তর করা হয়।'
      }
    },
    {
      id: 'rec-tco-ex-3',
      kind: 'mcq',
      topic: 'accumulator-pattern-purpose',
      question: {
        en: 'In the accumulator pattern function factorialTail(n, acc = 1), what purpose does the acc parameter serve?',
        bn: 'factorialTail(n, acc = 1) ফাংশনে acc প্যারামিটারটি মূলত কী কাজ করে?'
      },
      options: [
        {
          en: 'It carries the accumulated multiplication result downward during each recursive step, allowing the base case to return the final answer directly',
          bn: 'এটি প্রতিটি ধাপে হিসাবকৃত গুণের ফলাফল নিচে বহন করে নিয়ে যায়, যার ফলে বেস কেস সরাসরি চূড়ান্ত উত্তর ফেরত দিতে পারে'
        },
        {
          en: 'It counts how many errors occurred in the operating system',
          bn: 'এটি অপারেটিং সিস্টেমে কয়টি এরর ঘটেছে তা গণনা করে'
        },
        {
          en: 'It connects the program to an external payment processor',
          bn: 'এটি প্রোগ্রামকে একটি বহিরাগত পেমেন্ট গেটওয়ের সাথে যুক্ত করে'
        },
        {
          en: 'It deletes unreferenced variables from system memory',
          bn: 'এটি সিস্টেম মেমরি থেকে অপ্রয়োজনীয় ভেরিয়েবল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The accumulator accumulates state during the winding phase.',
        bn: 'অ্যাকিউমুলেটর ওয়াইন্ডিং পর্যায়ে স্টেট জমা করে চলে।'
      },
      explanation: {
        en: 'Accumulators push state forward into the arguments of the next call, eliminating the need to defer calculations to the unwinding phase.',
        bn: 'অ্যাকিউমুলেটর পরবর্তী কলের আর্গুমেন্টে ফলাফল এগিয়ে দেয়, ফলে আনওয়াইন্ডিং পর্যায়ে বাড়তি কোনো কাজ বাকি থাকে না।'
      }
    },
    {
      id: 'rec-tco-ex-4',
      kind: 'mcq',
      topic: 'trampoline-technique-utility',
      question: {
        en: 'Why do JavaScript engineers use trampolines in Node.js when native TCO is unavailable?',
        bn: 'নেটিভ TCO অনুপলব্ধ থাকলে Node.js-এ জাভাস্ক্রিপ্ট ইঞ্জিনিয়াররা কেন ট্রাম্পোলিন কৌশল ব্যবহার করেন?'
      },
      options: [
        {
          en: 'A trampoline executes recursive steps sequentially inside a while loop using thunk functions, running 100000+ iterations without stack overflow',
          bn: 'ট্রাম্পোলিন থাঙ্ক ফাংশন ব্যবহারের মাধ্যমে একটি while লুপের ভেতরে ধারাবাহিকভাবে কাজ চালায়, ফলে ১০০০০০+ ধাপও স্ট্যাক ওভারফ্লো ছাড়া চলে'
        },
        {
          en: 'To display animation effects on web pages',
          bn: 'ওয়েব পেজে অ্যানিমেশন ইফেক্ট দেখানোর জন্য'
        },
        {
          en: 'Because trampolines encrypt source code using SHA-256',
          bn: 'কারণ ট্রাম্পোলিন সোর্স কোডকে SHA-256 দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'To make the JavaScript runtime restart automatically',
          bn: 'যাতে জাভাস্ক্রিপ্ট রানটাইম স্বয়ংক্রিয়ভাবে রিস্টার্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trampolines unroll recursion into an iterative while loop.',
        bn: 'ট্রাম্পোলিন রিকার্শনকে একটি সাধারণ while লুপে বদলে দেয়।'
      },
      explanation: {
        en: 'By returning thunks (functions returning the next step), the call stack remains at depth 1 while the while loop iterates through arbitrary depths.',
        bn: 'পরবর্তী ধাপের ফাংশন ফেরত দিয়ে স্ট্যাকের গভীরতা সর্বদা ১ এ রাখা হয়, ফলে while লুপ যত গভীরেই যাক কোনো ক্র্যাশ হয় না।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Tail Call Optimization & Accumulators Quiz',
      bn: 'টেল কল অপ্টিমাইজেশন ও অ্যাকিউমুলেটর কুইজ'
    },
    questions: [
      {
        id: 'rec-tco-qz-1',
        kind: 'mcq',
        topic: 'ecmascript-tco-strict-mode',
        question: {
          en: 'Under ECMAScript 2015 specification, which requirement must be satisfied for a tail call to be eligible for TCO in compliant JavaScript engines?',
          bn: 'ইসিএমএস্ক্রিপ্ট ২০১৫ স্পেসিফিকেশন অনুযায়ী একটি টেল কলকে TCO যোগ্য হতে হলে কোন শর্তটি পূরণ করতে হয়?'
        },
        options: [
          {
            en: 'The code must run in strict mode (use strict), and the return statement must return the result of the function call with zero subsequent operations',
            bn: 'কোডটি অবশ্যই স্ট্রিক্ট মোডে (use strict) চলতে হবে এবং রিটার্ন স্টেটমেন্টে ফাংশন কলের পর আর কোনো পরবর্তী কাজ থাকতে পারবে না'
          },
          {
            en: 'The function must be written entirely in TypeScript',
            bn: 'ফাংশনটি অবশ্যই সম্পূর্ণ টাইপস্ক্রিপ্টে লেখা হতে হবে'
          },
          {
            en: 'The function must take exactly 1 argument',
            bn: 'ফাংশনে অবশ্যই ঠিক ১টি আর্গুমেন্ট থাকতে হবে'
          },
          {
            en: 'The database must be connected over SSL',
            bn: 'ডাটাবেসটি অবশ্যই এসএসএল দিয়ে সংযুক্ত থাকতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Strict mode is required by the ES6 specification for TCO.',
          bn: 'TCO-এর জন্য ES6 স্পেসিফিকেশনে স্ট্রিক্ট মোড বাধ্যতামূলক করা হয়েছে।'
        },
        explanation: {
          en: 'The ES6 specification mandates strict mode because non-strict mode features like func.arguments and func.caller require stack inspection that TCO eliminates.',
          bn: 'নন-স্ট্রিক্ট মোডে func.arguments এর মতো সুবিধার জন্য স্ট্যাকের উপস্থিতি দরকার হয়। তাই TCO কেবল স্ট্রিক্ট মোডেই অনুমোদিত।'
        }
      },
      {
        id: 'rec-tco-qz-2',
        kind: 'mcq',
        topic: 'tail-recursion-time-complexity',
        question: {
          en: 'How does Tail Call Optimization affect the algorithmic time and space complexity of computing factorial(n)?',
          bn: 'টেল কল অপ্টিমাইজেশন factorial(n) গণনার ক্ষেত্রে টাইম ও স্পেস কমপ্লেক্সিটির ওপর কী প্রভাব ফেলে?'
        },
        options: [
          {
            en: 'Time complexity remains O(n), but auxiliary space complexity drops from O(n) call stack memory down to O(1) constant memory',
            bn: 'টাইম কমপ্লেক্সিটি O(n) অপরিবর্তিত থাকে, কিন্তু সহায়ক স্পেস কমপ্লেক্সিটি O(n) কল স্ট্যাক থেকে কমে O(1) কনস্ট্যান্ট মেমরিতে নেমে আসে'
          },
          {
            en: 'Time complexity drops to O(1) while space complexity increases to O(n^2)',
            bn: 'টাইম কমপ্লেক্সিটি O(1) এ নেমে আসে এবং স্পেস কমপ্লেক্সিটি O(n^2) এ বেড়ে যায়'
          },
          {
            en: 'Both time and space complexity become O(log n)',
            bn: 'উভয় টাইম ও স্পেস কমপ্লেক্সিটি O(log n) হয়ে যায়'
          },
          {
            en: 'It has no effect whatsoever on either time or space',
            bn: 'টাইম বা স্পেস কোনোটির ওপরই এর কোনো প্রভাব নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'TCO saves memory, not loop iterations.',
          bn: 'TCO মেমরি বাঁচায়, তবে কাজের ধাপ কমায় না।'
        },
        explanation: {
          en: 'You still perform n multiplications (O(n) time), but reusing a single stack frame reduces memory overhead to O(1) auxiliary space.',
          bn: 'আপনাকে এখনো n সংখ্যক গুণ করতে হয় (O(n) সময়), তবে একটিমাত্র ফ্রেম পুনর্ব্যবহার করায় মেমরি খরচ কমে O(1) হয়ে যায়।'
        }
      },
      {
        id: 'rec-tco-qz-3',
        kind: 'mcq',
        topic: 'thunk-function-definition',
        question: {
          en: 'In functional programming and trampolines, what is a thunk?',
          bn: 'ফাংশনাল প্রোগ্রামিং এবং ট্রাম্পোলিনের ক্ষেত্রে থাঙ্ক (thunk) কী?'
        },
        options: [
          {
            en: 'A zero-argument wrapper function that delays the evaluation of an expression until explicitly invoked',
            bn: 'একটি শূন্য-আর্গুমেন্ট র্যাপার ফাংশন যা স্পষ্টভাবে কল না করা পর্যন্ত কোনো গণনার সম্পাদন স্থগিত রাখে'
          },
          {
            en: 'A corrupted memory sector on a hard drive',
            bn: 'হার্ডড্রাইভের একটি নষ্ট মেমরি সেক্টর'
          },
          {
            en: 'A sound made by a computer mechanical keyboard',
            bn: 'কম্পিউটারের মেকানিক্যাল কিবোর্ডের একটি বিশেষ শব্দ'
          },
          {
            en: 'A type of network router protocol',
            bn: 'এক ধরনের নেটওয়ার্ক রাউটার প্রোটোকল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A thunk delays computation by wrapping code in () => ...',
          bn: 'থাঙ্ক কোডকে () => ... এর ভেতরে রেখে হিসাব স্থগিত রাখে।'
        },
        explanation: {
          en: 'A thunk encapsulates a computation: () => fn(args). Calling the thunk triggers the actual execution when the trampoline is ready.',
          bn: 'থাঙ্ক একটি হিসাবকে ধরে রাখে: () => fn(args)। ট্রাম্পোলিন প্রস্তুত হলে থাঙ্কটিকে কল করে আসল কাজ সম্পন্ন করা হয়।'
        }
      },
      {
        id: 'rec-tco-qz-4',
        kind: 'mcq',
        topic: 'accumulator-string-reversal',
        question: {
          en: 'How can recursive string reversal be written in tail-recursive form using an accumulator?',
          bn: 'অ্যাকিউমুলেটর ব্যবহার করে কীভাবে রিকার্সিভ স্ট্রিং রিভার্সাল টেল-রিকার্সিভ আকারে লেখা যায়?'
        },
        options: [
          {
            en: 'function rev(s, acc = "") { if (!s) return acc; return rev(s.slice(0, -1), acc + s.slice(-1)); }',
            bn: 'function rev(s, acc = "") { if (!s) return acc; return rev(s.slice(0, -1), acc + s.slice(-1)); }'
          },
          {
            en: 'By calling s.split("").reverse().join("")',
            bn: 's.split("").reverse().join("") কল করার মাধ্যমে'
          },
          {
            en: 'By printing the string in a monospace font',
            bn: 'স্ট্রিংটিকে মোনোস্পেস ফন্টে প্রিন্ট করে'
          },
          {
            en: 'Tail recursion cannot be applied to text strings',
            bn: 'টেক্সট স্ট্রিংয়ে টেল রিকার্শন প্রয়োগ করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each call appends the current character to acc in tail position.',
          bn: 'প্রতিটি কল টেইল পজিশনে বর্তমান অক্ষরটিকে acc-তে যোগ করে।'
        },
        explanation: {
          en: 'By taking the last character and appending it to the accumulator, the recursive step return rev(...) has zero pending operations, forming a pure tail call.',
          bn: 'শেষ অক্ষরটি কেটে অ্যাকিউমুলেটরে যোগ করলে return rev(...) এর পর আর কোনো কাজ বাকি থাকে না, ফলে এটি বিশুদ্ধ টেল কলে রূপ নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'frames-and-the-frame',
    title: {
      en: 'Divide and Conquer Paradigms: Merge Sort, Binary Search & Recurrences',
      bn: 'ডিভাইড-অ্যান্ড-কনকার কৌশল: মার্জ সর্ট, বাইনারি সার্চ ও রিকারেন্স'
    }
  }
};
