import type { Lesson } from '../../../lib/types';

export const MirrorsAndTheMirrorLesson: Lesson = {
  slug: 'mirrors-and-the-mirror',
  tech: 'recursion',
  title: {
    en: 'Beginner Thinking & Mathematical Induction: The Self-Referential Engine',
    bn: 'সহজ সূচনা ও গাণিতিক আরোহ বিধি: স্ব-রেফারেন্সিয়াল রিকার্শন ইঞ্জিন'
  },
  summary: {
    en: 'A beginner overview of recursive problem solving and mathematical induction. Learn how recursion reduces large tasks into strictly smaller subproblems, master the recursive leap of faith, distinguish direct from indirect recursion, and establish rock-solid termination contracts.',
    bn: 'রিকার্সিভ পদ্ধতিতে সমস্যা সমাধান ও গাণিতিক আরোহ বিধির একটি শিক্ষানবিস গাইড। জটিল সমস্যাকে কীভাবে ক্ষুদ্রতর সাব-প্রবলেমে বিভক্ত করতে হয়, রিকার্সিভ লিপ অফ ফেইথ, সরাসরি ও পরোক্ষ রিকার্শনের পার্থক্য এবং নির্ভুল সমাপ্তি চুক্তি তৈরির সম্পূর্ণ নির্দেশিকা।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'recursion-mental-model',
      text: {
        en: 'The Core Mental Model: Self-Referential Problem Solving',
        bn: 'মূল চিন্তাভাবনা: স্ব-রেফারেন্সিয়াল সমস্যা সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you solve complex programming problems, recursion allows you to express intricate logic through elegant self-referential definitions. Instead of managing complex loop variables and state accumulators, a recursive function divides a problem into strictly smaller subproblems until reaching a simple base case.',
        bn: 'যখন আপনি জটিল প্রোগ্রামিং সমস্যা সমাধান করেন, রিকার্শন আপনাকে মার্জিত স্ব-রেফারেন্সিয়াল সংজ্ঞার মাধ্যমে সূক্ষ্ম লজিক প্রকাশের সুযোগ দেয়। জটিল লুপ ভেরিয়েবল এবং স্টেট ম্যানেজমেন্টের বদলে একটি রিকার্সিভ ফাংশন সমস্যাটিকে একটি সহজ বেস কেসে না পৌঁছানো পর্যন্ত ধারাবাহিকভাবে ক্ষুদ্রতর অংশে বিভক্ত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every correct recursive algorithm rests upon two pillars: a base case that provides an immediate answer without further calls, and an inductive recursive step that moves closer to that base case. For example, calculating factorial 5 requires 5 call frames and produces 120 as the result.',
        bn: 'প্রতিটি নির্ভুল রিকার্সিভ অ্যালগরিদম ২ টি অপরিহার্য স্তম্ভের ওপর দাঁড়িয়ে থাকে: একটি বেস কেস যা কোনো পরবর্তী কল ছাড়াই সরাসরি উত্তর প্রদান করে এবং একটি রিকার্সিভ ধাপ যা ক্রমান্বয়ে বেস কেসের দিকে এগিয়ে যায়। উদাহরণস্বরূপ, ফ্যাক্টোরিয়াল ৫ গণনায় ৫টি কল ফ্রেম প্রয়োজন হয় এবং ফলাফল হিসেবে ১২০ তৈরি হয়।'
      }
    },
    {
      type: 'diagram',
      id: 'recursion-induction-diagram',
      caption: {
        en: 'Figure 1: Mathematical induction and the two phases of recursion: winding descent and unwinding ascent',
        bn: 'চিত্র ১: গাণিতিক আরোহ বিধি এবং রিকার্শনের ২ টি পর্যায়: ওয়াইন্ডিং ডিসেন্ট ও আনওয়াইন্ডিং অ্যাসেন্ট'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="recHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <linearGradient id="windGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#31101e"/>
      <stop offset="100%" stop-color="#190a14"/>
    </linearGradient>
    <linearGradient id="unwindGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#recHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🔂</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">THE RECURSIVE ENGINE &amp; MATHEMATICAL INDUCTION</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Decomposition, the recursive leap of faith, winding call stacks, and unwinding return propagation</text>

  <!-- Left: Winding Descent (Top-down decomposition) -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#windGrad)" stroke="#ec4899" stroke-width="1.5"/>
  <text x="44" y="118" fill="#f472b6" font-size="13" font-weight="bold">PHASE 1: WINDING DESCENT (DECOMPOSITION)</text>

  <rect x="44" y="136" width="400" height="60" rx="6" fill="#030712" stroke="#ec4899"/>
  <text x="56" y="160" fill="#f472b6" font-size="11" font-weight="bold">1. Call factorial(4):</text>
  <text x="56" y="180" fill="#cbd5e1" font-size="10">Needs 4 * factorial(3) -&gt; Pauses and pushes frame to Call Stack</text>

  <rect x="64" y="204" width="380" height="60" rx="6" fill="#030712" stroke="#f472b6"/>
  <text x="76" y="228" fill="#f472b6" font-size="11" font-weight="bold">2. Call factorial(3):</text>
  <text x="76" y="248" fill="#cbd5e1" font-size="10">Needs 3 * factorial(2) -&gt; Pauses and pushes frame to Call Stack</text>

  <rect x="84" y="272" width="360" height="60" rx="6" fill="#030712" stroke="#fb7185"/>
  <text x="96" y="296" fill="#fb7185" font-size="11" font-weight="bold">3. Call factorial(2):</text>
  <text x="96" y="316" fill="#cbd5e1" font-size="10">Needs 2 * factorial(1) -&gt; Pauses and pushes frame to Call Stack</text>

  <rect x="104" y="340" width="340" height="70" rx="6" fill="#030712" stroke="#34d399"/>
  <text x="116" y="364" fill="#34d399" font-size="11" font-weight="bold">4. Call factorial(1) [BASE CASE REACHED]:</text>
  <text x="116" y="384" fill="#cbd5e1" font-size="10">Condition (n &lt;= 1) triggers immediately without new calls!</text>
  <text x="116" y="400" fill="#38bdf8" font-size="10" font-weight="bold">Returns 1 to caller -&gt; Reverses execution flow!</text>

  <!-- Right: Unwinding Ascent (Bottom-up return values) -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#unwindGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">PHASE 2: UNWINDING ASCENT (COMPOSITION)</text>

  <rect x="516" y="136" width="400" height="60" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="160" fill="#34d399" font-size="11" font-weight="bold">4. factorial(1) finishes:</text>
  <text x="528" y="180" fill="#a7f3d0" font-size="10">Pops frame from stack; hands value 1 up to waiting factorial(2)</text>

  <rect x="516" y="204" width="400" height="60" rx="6" fill="#030712" stroke="#34d399"/>
  <text x="528" y="228" fill="#34d399" font-size="11" font-weight="bold">3. factorial(2) completes computation:</text>
  <text x="528" y="248" fill="#cbd5e1" font-size="10">Evaluates 2 * 1 = 2; pops frame; hands 2 up to factorial(3)</text>

  <rect x="516" y="272" width="400" height="60" rx="6" fill="#030712" stroke="#6ee7b7"/>
  <text x="528" y="296" fill="#6ee7b7" font-size="11" font-weight="bold">2. factorial(3) completes computation:</text>
  <text x="528" y="316" fill="#cbd5e1" font-size="10">Evaluates 3 * 2 = 6; pops frame; hands 6 up to factorial(4)</text>

  <rect x="516" y="340" width="400" height="70" rx="6" fill="#030712" stroke="#38bdf8"/>
  <text x="528" y="364" fill="#38bdf8" font-size="11" font-weight="bold">1. Root factorial(4) completes:</text>
  <text x="528" y="384" fill="#cbd5e1" font-size="10">Evaluates 4 * 6 = 24; final call stack is completely cleared!</text>
  <text x="528" y="400" fill="#f8fafc" font-size="10" font-weight="bold">Emits final return value: 24</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'induction-and-leap-of-faith',
      text: {
        en: 'Mathematical Induction and the Recursive Leap of Faith',
        bn: 'গাণিতিক আরোহ বিধি ও রিকার্সিভ লিপ অফ ফেইথ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beginners often struggle with recursion because they try to trace dozens of nested function calls simultaneously in their minds. The secret to writing recursive algorithms effortlessly is the recursive leap of faith, which mirrors mathematical induction.',
        bn: 'শিক্ষানবিসরা প্রায়শই রিকার্শন বুঝতে হিমশিম খায় কারণ তারা একসাথে ডজন ডজন নেস্টেড ফাংশন কল কল্পনায় ট্রেস করার চেষ্টা করে। স্বাচ্ছন্দ্যে রিকার্সিভ অ্যালগরিদম লেখার মূল চাবিকাঠি হলো রিকার্সিভ লিপ অফ ফেইথ, যা গাণিতিক আরোহ বিধির প্রতিচ্ছবি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In mathematical induction, you first verify the base case for n = 1. Next, you assume the theorem holds true for n - 1 (the inductive hypothesis). Finally, you prove that if n - 1 works, then step n also succeeds. In programming, assume your function already computes smaller subproblems accurately, and focus solely on how to combine that result to solve the current instance.',
        bn: 'গাণিতিক আরোহ বিধিতে প্রথমে n = ১ এর জন্য বেস কেস পরীক্ষা করা হয়। এরপর ধরে নেওয়া হয় যে উপপাদ্যটি n - ১ এর জন্য সত্য (আরোহ অনুমান)। সর্বশেষে প্রমাণ করা হয় যে n - ১ সঠিক হলে n ধাপটিও সফল হবে। প্রোগ্রামিংয়েও একইভাবে ধরে নিন আপনার ফাংশনটি ক্ষুদ্রতর সাব-প্রবলেম সঠিকভাবে সমাধান করে, এবং কেবল বর্তমান ফলাফল সমন্বয় করার ওপর মনোযোগ দিন।'
      }
    },
    {
      type: 'heading',
      id: 'direct-vs-indirect-recursion',
      text: {
        en: 'Direct vs Indirect (Mutual) Recursion',
        bn: 'সরাসরি বনাম পরোক্ষ (মিউচুয়াল) রিকার্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Direct recursion occurs when a function explicitly invokes itself within its own body, such as factorial calling factorial. Indirect or mutual recursion occurs when function A calls function B, which subsequently calls function A, forming a cooperative cycle.',
        bn: 'সরাসরি রিকার্শন তখন ঘটে যখন একটি ফাংশন সরাসরি নিজের বডির ভেতর নিজেকে কল করে, যেমন ফ্যাক্টোরিয়াল ফাংশন পুনরায় ফ্যাক্টোরিয়ালকে কল করে। অন্যদিকে পরোক্ষ বা মিউচুয়াল রিকার্শন তখন ঘটে যখন ফাংশন A কল করে ফাংশন B-কে, এবং পরবর্তীতে B আবার A-কে কল করে একটি চক্র তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-induction-sim',
      text: {
        en: 'Interactive Benchmark: Tracing Winding, Unwinding & Mutual Recursion',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: ওয়াইন্ডিং, আনওয়াইন্ডিং ও মিউচুয়াল রিকার্শন ট্রেসিং'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-induction-sim.ts',
      code: `// Recursive Problem Solving & Induction Simulator
// factorial(5) reaches base case 1 -> gives 1
// Traces 5 call frames during winding and unwinding -> returns 5
// Final factorial(5) yields 120 -> returns 120
function simulateRecursionCore() {
  console.log("=== RECURSION CORE & INDUCTION SIMULATOR ===");

  let callDepth = 0;
  function factorial(n: number): number {
    callDepth++;
    const indent = "  ".repeat(callDepth);
    console.log(\`\${indent}-> Call factorial(\${n}) [Winding descent, depth: \${callDepth}]\`);

    if (n <= 1) {
      console.log(\`\${indent}* Base case reached for n = \${n} -> returning 1\`);
      callDepth--;
      return 1;
    }

    const subResult = factorial(n - 1);
    const result = n * subResult;
    console.log(\`\${indent}<- factorial(\${n}) = \${n} * factorial(\${n - 1}) (\${subResult}) = \${result} [Unwinding ascent]\`);
    callDepth--;
    return result;
  }

  console.log("\\n1. Tracing Factorial(5):");
  const fact5 = factorial(5);
  console.log(\`   Final Computed Result: 5! = \${fact5}\`);

  console.log("\\n2. Mutual (Indirect) Recursion Example:");
  function isEven(n: number): boolean {
    if (n === 0) return true;
    return isOdd(n - 1);
  }
  function isOdd(n: number): boolean {
    if (n === 0) return false;
    return isEven(n - 1);
  }

  const testVal = 4;
  console.log(\`   isEven(\${testVal}) evaluated via mutual calls -> returns \${isEven(testVal)}\`);
  console.log(\`   isOdd(\${testVal}) evaluated via mutual calls -> returns \${isOdd(testVal)}\`);
}

simulateRecursionCore();`
    },
    {
      type: 'terminal',
      id: 'induction-output',
      cmd: 'npx tsx recursion-induction-sim.ts',
      output: `=== RECURSION CORE & INDUCTION SIMULATOR ===

1. Tracing Factorial(5):
  -> Call factorial(5) [Winding descent, depth: 1]
    -> Call factorial(4) [Winding descent, depth: 2]
      -> Call factorial(3) [Winding descent, depth: 3]
        -> Call factorial(2) [Winding descent, depth: 4]
          -> Call factorial(1) [Winding descent, depth: 5]
          * Base case reached for n = 1 -> returning 1
        <- factorial(2) = 2 * factorial(1) (1) = 2 [Unwinding ascent]
      <- factorial(3) = 3 * factorial(2) (2) = 6 [Unwinding ascent]
    <- factorial(4) = 4 * factorial(3) (6) = 24 [Unwinding ascent]
  <- factorial(5) = 5 * factorial(4) (24) = 120 [Unwinding ascent]
   Final Computed Result: 5! = 120

2. Mutual (Indirect) Recursion Example:
   isEven(4) evaluated via mutual calls -> returns true
   isOdd(4) evaluated via mutual calls -> returns false`
    }
  ],
  exercises: [
    {
      id: 'rec-mir-ex-1',
      kind: 'mcq',
      topic: 'essential-components-of-recursion',
      question: {
        en: 'What essential components must every valid recursive algorithm possess to prevent infinite execution?',
        bn: 'অনন্তকাল চলা রোধ করতে প্রতিটি বৈধ রিকার্সিভ অ্যালগরিদমে কোন অপরিহার্য উপাদানগুলো অবশ্যই থাকতে হবে?'
      },
      options: [
        {
          en: 'A base case that terminates recursion and a recursive step that reduces the problem towards that base case',
          bn: 'একটি বেস কেস যা রিকার্শন থামায় এবং একটি রিকার্সিভ ধাপ যা সমস্যাকে বেস কেসের দিকে সংকুচিত করে'
        },
        {
          en: 'A while true loop accompanied by a break statement',
          bn: 'একটি while true লুপ এবং সাথে একটি break স্টেটমেন্ট'
        },
        {
          en: 'An external global database connection pool',
          bn: 'একটি বহিরাগত গ্লোবাল ডাটাবেস সংযোগ পুল'
        },
        {
          en: 'At least three separate CPU cores running simultaneously',
          bn: 'একসাথে চলা অন্তত ৩টি আলাদা সিপিইউ কোর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Recursion requires a stopping condition and a shrinking step.',
        bn: 'রিকার্শনে একটি সমাপ্তি শর্ত এবং একটি হ্রাসমূলক ধাপ প্রয়োজন।'
      },
      explanation: {
        en: 'Without a base case, recursion executes endlessly until the call stack overflows. Without shrinking the input, the base case is never reached.',
        bn: 'বেস কেস না থাকলে স্ট্যাক মেমরি শেষ না হওয়া পর্যন্ত রিকার্শন চলতেই থাকে। ইনপুট ছোট না করলে বেস কেসে কখনোই পৌঁছানো যায় না।'
      }
    },
    {
      id: 'rec-mir-ex-2',
      kind: 'mcq',
      topic: 'recursive-leap-of-faith',
      question: {
        en: 'How does the recursive leap of faith relate to mathematical induction when designing algorithms?',
        bn: 'অ্যালগরিদম ডিজাইনের ক্ষেত্রে রিকার্সিভ লিপ অফ ফেইথ কীভাবে গাণিতিক আরোহ বিধির সাথে সম্পর্কিত?'
      },
      options: [
        {
          en: 'You assume the recursive call correctly solves the subproblem of size n - 1, focusing solely on combining that result for size n',
          bn: 'আপনি ধরে নেন যে রিকার্সিভ কলটি n - ১ আকারের উপ-সমস্যা সঠিকভাবে সমাধান করে এবং কেবল n আকারের জন্য সেই ফলাফল সমন্বয়ে মনোযোগ দেন'
        },
        {
          en: 'You hope the operating system never crashes during execution',
          bn: 'আপনি আশা করেন যেন কোড চলার সময় অপারেটিং সিস্টেম ক্র্যাশ না করে'
        },
        {
          en: 'You test the function with random numbers until it passes',
          bn: 'আপনি পাস না করা পর্যন্ত এলোমেলো সংখ্যা দিয়ে পরীক্ষা করতে থাকেন'
        },
        {
          en: 'You ignore all compiler errors and run the script anyway',
          bn: 'আপনি সব কম্পাইলার এরর উপেক্ষা করে স্ক্রিপ্টটি চালিয়ে দেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Assume smaller instances work, just like the inductive hypothesis.',
        bn: 'আরোহ অনুমানের মতো ধরে নিন ছোট আকারের সমস্যাটি সঠিক উত্তর দেবে।'
      },
      explanation: {
        en: 'The recursive leap of faith frees engineers from tracking mental stack frames. By trusting the smaller sub-solution, algorithm design becomes simple.',
        bn: 'রিকার্সিভ লিপ অফ ফেইথ ডেভেলপারকে জটিল স্ট্যাক ট্রেস মনে রাখার চাপ থেকে মুক্তি দেয়। ছোট সমাধান বিশ্বাস করলে মূল ডিজাইন সহজ হয়ে যায়।'
      }
    },
    {
      id: 'rec-mir-ex-3',
      kind: 'mcq',
      topic: 'winding-vs-unwinding-phases',
      question: {
        en: 'In the execution of a recursive function like factorial(5), what happens during the unwinding phase?',
        bn: 'factorial(5) এর মতো একটি রিকার্সিভ ফাংশন চলার সময় আনওয়াইন্ডিং পর্যায়ে কী ঘটে?'
      },
      options: [
        {
          en: 'Stack frames pop off the call stack in LIFO order as base and subproblem return values multiply and propagate upward',
          bn: 'বেস ও সাব-প্রবলেমের রিটার্ন মান গুণ হয়ে উপরের দিকে উঠতে থাকে এবং স্ট্যাক ফ্রেমগুলো LIFO ক্রমে পপ হতে থাকে'
        },
        {
          en: 'The computer reboots to clear its RAM memory',
          bn: 'কম্পিউটার তার র‍্যাম মেমরি খালি করতে রিবুট নেয়'
        },
        {
          en: 'New frames are added to the call stack until memory is exhausted',
          bn: 'মেমরি শেষ না হওয়া পর্যন্ত কল স্ট্যাকে নতুন নতুন ফ্রেম যুক্ত হতে থাকে'
        },
        {
          en: 'The source code file is compiled into machine binary',
          bn: 'সোর্স কোড ফাইলটি মেশিন বাইনারিতে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unwinding happens as function calls return their computed values.',
        bn: 'আনওয়াইন্ডিং ঘটে যখন ফাংশনগুলো তাদের হিসাব করা মান ফেরত দিতে শুরু করে।'
      },
      explanation: {
        en: 'The winding phase pushes frames as calls descend to the base case. The unwinding phase pops frames as return values resolve.',
        bn: 'ওয়াইন্ডিং পর্যায়ে ফ্রেম পুশ হয়ে নিচে নামে। আনওয়াইন্ডিং পর্যায়ে মান ফেরত দিয়ে ফ্রেমগুলো একে একে পপ হয়ে যায়।'
      }
    },
    {
      id: 'rec-mir-ex-4',
      kind: 'mcq',
      topic: 'mutual-indirect-recursion-definition',
      question: {
        en: 'Which scenario exemplifies mutual (indirect) recursion in computer programming?',
        bn: 'কম্পিউটার প্রোগ্রামিংয়ে কোনটি মিউচুয়াল (পরোক্ষ) রিকার্শনের যথার্থ উদাহরণ?'
      },
      options: [
        {
          en: 'Function isEven(n) calls isOdd(n - 1), and function isOdd(n) calls isEven(n - 1)',
          bn: 'isEven(n) ফাংশনটি isOdd(n - 1)-কে কল করে, এবং isOdd(n) ফাংশনটি isEven(n - 1)-কে কল করে'
        },
        {
          en: 'A function contains two independent for loops in sequence',
          bn: 'একটি ফাংশনে ধারাবাহিকভাবে দুটি স্বাধীন for লুপ থাকে'
        },
        {
          en: 'A function that calls console.log twice',
          bn: 'একটি ফাংশন যা দুইবার console.log কল করে'
        },
        {
          en: 'A database query that joins two tables together',
          bn: 'একটি ডাটাবেস কোয়েরি যা দুটি টেবিলকে একসাথে জয়েন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mutual recursion involves two or more functions calling each other cyclically.',
        bn: 'মিউচুয়াল রিকার্শনে দুই বা ততোধিক ফাংশন চক্রাকারে একে অপরকে কল করে।'
      },
      explanation: {
        en: 'Mutual recursion occurs when function A calls B, which in turn calls A, establishing an alternating cyclic dependency.',
        bn: 'মিউচুয়াল রিকার্শন তখন তৈরি হয় যখন ফাংশন A কল করে B-কে, এবং B পুনরায় A-কে কল করে একটি পারস্পরিক চক্র তৈরি করে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Recursion Fundamentals & Induction Quiz',
      bn: 'রিকার্শন ফান্ডামেন্টালস ও আরোহ বিধি কুইজ'
    },
    questions: [
      {
        id: 'rec-mir-qz-1',
        kind: 'mcq',
        topic: 'factorial-base-case-necessity',
        question: {
          en: 'Why is defining the base case if (n <= 1) return 1; essential in a recursive factorial algorithm?',
          bn: 'রিকার্সিভ ফ্যাক্টোরিয়াল অ্যালগরিদমে if (n <= 1) return 1; বেস কেসটি নির্ধারণ করা কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'Without it, factorial would continue calling itself with 0, -1, -2 endlessly until crashing with a stack overflow error',
            bn: 'এটি না থাকলে ফ্যাক্টোরিয়াল ০, -১, -২ দিয়ে অনন্তকাল নিজেকে কল করতে থাকত এবং স্ট্যাক ওভারফ্লো এরর দিয়ে ক্র্যাশ করত'
          },
          {
            en: 'Because negative numbers do not exist in mathematics',
            bn: 'কারণ গণিতে ঋণাত্মক সংখ্যার কোনো অস্তিত্ব নেই'
          },
          {
            en: 'To make the function run 100 times slower for accuracy',
            bn: 'সঠিকতার জন্য ফাংশনটির গতি ১০০ গুণ ধীর করার জন্য'
          },
          {
            en: 'It is optional and can be safely omitted',
            bn: 'এটি ঐচ্ছিক এবং বাদ দিলেও কোনো সমস্যা নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'The base case stops infinite descent.',
          bn: 'বেস কেস অসীম অবতরণ বন্ধ করে দেয়।'
        },
        explanation: {
          en: 'The base case defines the terminal boundary. Without it, the recursive step recurses indefinitely, exhausting call stack memory.',
          bn: 'বেস কেস সমাপ্তি সীমা নির্ধারণ করে। এটি না থাকলে ফাংশনটি কল স্ট্যাক মেমরি শেষ না হওয়া পর্যন্ত অবিরাম চলতে থাকে।'
        }
      },
      {
        id: 'rec-mir-qz-2',
        kind: 'mcq',
        topic: 'mathematical-induction-base-step',
        question: {
          en: 'In mathematical induction, what corresponds directly to the base case of a recursive program?',
          bn: 'গাণিতিক আরোহ বিধিতে কোনটি রিকার্সিভ প্রোগ্রামের বেস কেসের সরাসরি সমতুল্য?'
        },
        options: [
          {
            en: 'The base step (proving the statement holds for the initial integer such as n = 0 or n = 1)',
            bn: 'ভিত্তি ধাপ (প্রাথমিক পূর্ণসংখ্যা যেমন n = ০ বা n = ১ এর জন্য বিবৃতিটি সত্য প্রমাণ করা)'
          },
          {
            en: 'The final concluding paragraph of the research paper',
            bn: 'গবেষণাপত্রের চূড়ান্ত সমাপ্তি অনুচ্ছেদ'
          },
          {
            en: 'The calculation of infinity divided by zero',
            bn: 'অসীমকে শূন্য দিয়ে ভাগের হিসাব'
          },
          {
            en: 'The printer driver installation process',
            bn: 'প্রিন্টার ড্রাইভার ইনস্টলেশন প্রক্রিয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'The base step verifies the smallest valid initial condition.',
          bn: 'ভিত্তি ধাপ সবচেয়ে ছোট বৈধ প্রাথমিক শর্তটি যাচাই করে।'
        },
        explanation: {
          en: 'The base step anchors the induction proof, just as the base case anchors a recursive function by resolving the smallest subproblem.',
          bn: 'ভিত্তি ধাপ যেভাবে প্রমাণকে দাঁড় করায়, ঠিক তেমনি বেস কেস ক্ষুদ্রতম সমস্যা সমাধানের মাধ্যমে রিকার্শনকে নোঙর করে।'
        }
      },
      {
        id: 'rec-mir-qz-3',
        kind: 'mcq',
        topic: 'call-stack-memory-growth',
        question: {
          en: 'Why does an unoptimized recursive function consume O(N) auxiliary memory space for an input of size N?',
          bn: 'N আকারের ইনপুটের জন্য একটি সাধারণ রিকার্সিভ ফাংশন কেন O(N) পরিমাণ সহায়ক মেমরি স্পেস ব্যবহার করে?'
        },
        options: [
          {
            en: 'Each active recursive call must maintain its own stack frame containing local variables and return addresses until the base case returns',
            bn: 'বেস কেস ফেরত না আসা পর্যন্ত প্রতিটি সক্রিয় রিকার্সিভ কলকে লোকাল ভেরিয়েবল ও রিটার্ন ঠিকানা ধারণকারী নিজস্ব স্ট্যাক ফ্রেম ধরে রাখতে হয়'
          },
          {
            en: 'Because hard drives allocate 1 gigabyte per variable',
            bn: 'কারণ হার্ডড্রাইভ প্রতিটি ভেরিয়েবলের জন্য ১ গিগাবাইট জায়গা নেয়'
          },
          {
            en: 'Because recursive functions create temporary files on disk',
            bn: 'কারণ রিকার্সিভ ফাংশন ডিস্কে সাময়িক ফাইল তৈরি করে'
          },
          {
            en: 'It does not; recursive functions always use 0 bytes of memory',
            bn: 'এটি ভুল; রিকার্সিভ ফাংশন সর্বদা ০ বাইট মেমরি ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every active function invocation rents space on the call stack.',
          bn: 'প্রতিটি সক্রিয় ফাংশন কল স্ট্যাকে মেমরি ভাড়া নেয়।'
        },
        explanation: {
          en: 'Until the base case is reached, every caller must remain paused on the stack, each occupying a distinct activation record frame.',
          bn: 'বেস কেসে না পৌঁছানো পর্যন্ত প্রতিটি কলার স্ট্যাকে অপেক্ষমাণ থাকে এবং প্রত্যেকে আলাদা অ্যাক্টিভেশন রেকর্ড ফ্রেম দখল করে।'
        }
      },
      {
        id: 'rec-mir-qz-4',
        kind: 'mcq',
        topic: 'defensive-guard-clauses',
        question: {
          en: 'Why should a robust recursive factorial function include a guard clause for negative inputs (such as if (n < 0) throw Error)?',
          bn: 'একটি শক্তিশালী রিকার্সিভ ফ্যাক্টোরিয়াল ফাংশনে কেন ঋণাত্মক ইনপুটের জন্য গার্ড ক্লজ (যেমন if (n < 0) throw Error) থাকা উচিত?'
        },
        options: [
          {
            en: 'Negative inputs decrement infinitely (-1, -2, -3...) and will never reach the base case n <= 1, causing a stack overflow',
            bn: 'ঋণাত্মক ইনপুট দিলে মান অনন্তকাল কমতে থাকে (-১, -২, -৩...) এবং কখনোই n <= ১ বেস কেসে পৌঁছায় না, ফলে স্ট্যাক ওভারফ্লো ঘটে'
          },
          {
            en: 'Because modern computers cannot process negative numbers',
            bn: 'কারণ আধুনিক কম্পিউটার ঋণাত্মক সংখ্যা হিসাব করতে পারে না'
          },
          {
            en: 'To make the function comply with CSS style guidelines',
            bn: 'ফাংশনটিকে সিএসএস স্টাইল গাইডের সাথে মানানসই করার জন্য'
          },
          {
            en: 'Negative numbers automatically delete the operating system',
            bn: 'ঋণাত্মক সংখ্যা অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Negative numbers step in the wrong direction away from the base case.',
          bn: 'ঋণাত্মক সংখ্যা বেস কেসের দিকে না গিয়ে বিপরীত দিকে ধাবিত হয়।'
        },
        explanation: {
          en: 'If n < 0, n - 1 moves further away from the base condition n <= 1, causing infinite recursion. Guard clauses prevent invalid input execution.',
          bn: 'যদি n < 0 হয়, তবে n - 1 বেস কেসের বিপরীত দিকে চলে যায়। গার্ড ক্লজ অবৈধ ইনপুট আটকে কোডকে সুরক্ষিত রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'bases-and-the-base',
    title: {
      en: 'Base Cases & Termination Physics: Preventing Stack Overflow',
      bn: 'বেস কেস ও টার্মিনেশন ফিজিক্স: স্ট্যাক ওভারফ্লো প্রতিরোধ'
    }
  }
};
