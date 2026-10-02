import type { Lesson } from '../../../lib/types';

export const BasesAndTheBaseLesson: Lesson = {
  slug: 'bases-and-the-base',
  tech: 'recursion',
  title: {
    en: 'Base Cases & Termination Physics: Preventing Stack Overflow',
    bn: 'বেস কেস ও টার্মিনেশন ফিজিক্স: স্ট্যাক ওভারফ্লো প্রতিরোধ'
  },
  summary: {
    en: 'Master base case design and recursive termination conditions. Learn how missing base cases cause call stack exhaustion (RangeError: Maximum call stack size exceeded), construct boundary guard clauses, handle multiple base cases, and guarantee monotonic convergence.',
    bn: 'বেস কেস ডিজাইন এবং রিকার্সিভ সমাপ্তি শর্ত গভীরভাবে আয়ত্ত করুন। বেস কেস না থাকলে কীভাবে কল স্ট্যাক মেমরি শেষ হয়ে ক্র্যাশ করে (RangeError), বাউন্ডারি গার্ড ক্লজ তৈরি, একাধিক বেস কেস পরিচালনা এবং বেসের দিকে নিশ্চিত অগ্রগতির সম্পূর্ণ গাইড।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'base-case-physics',
      text: {
        en: 'The Physics of the Base Case and Stack Limits',
        bn: 'বেস কেসের নিয়মাবলী ও স্ট্যাক সীমাবদ্ধতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you write a recursive algorithm, the base case represents the boundary between finite execution and infinite memory exhaustion. Without a properly designed base condition, your program will spawn endless stack frames until the runtime crashes with a stack overflow error.',
        bn: 'যখন আপনি একটি রিকার্সিভ অ্যালগরিদম লেখেন, বেস কেস হলো সসীম এক্সিকিউশন এবং অসীম মেমরি খরচের মধ্যকার সীমারেখা। সঠিকভাবে ডিজাইন করা বেস শর্ত না থাকলে আপনার প্রোগ্রাম অবিরাম স্ট্যাক ফ্রেম তৈরি করতে থাকবে যতক্ষণ না রানটাইম স্ট্যাক ওভারফ্লো এরর দিয়ে ক্র্যাশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The operating system and JavaScript engine allocate a fixed memory budget for execution frames, capping the call stack around 10000 active calls. Each function call reserves memory for local variables and return pointers; exceeding this budget throws a RangeError.',
        bn: 'অপারেটিং সিস্টেম এবং জাভাস্ক্রিপ্ট ইঞ্জিন এক্সিকিউশন ফ্রেমের জন্য একটি নির্দিষ্ট পরিমাণ মেমরি বরাদ্দ করে, যা কল স্ট্যাককে প্রায় 10000 টি সক্রিয় কলে সীমাবদ্ধ রাখে। প্রতিটি ফাংশন কল লোকাল ভেরিয়েবল ও রিটার্ন ঠিকানার জন্য মেমরি ভাড়া নেয়; এই সীমা ছাড়ালে RangeError তৈরি হয়।'
      }
    },
    {
      type: 'diagram',
      id: 'stack-overflow-diagram',
      caption: {
        en: 'Figure 1: Safe bounded recursion vs stack overflow freefall when a base case is omitted or overshot',
        bn: 'চিত্র ১: নিরাপদ সীমাবদ্ধ রিকার্শন বনাম বেস কেস বাদ পড়লে বা অতিক্রম করলে স্ট্যাক ওভারফ্লো পতন'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="baseHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
    <linearGradient id="safeFlowGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <linearGradient id="crashFlowGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#450a0a"/>
      <stop offset="100%" stop-color="#1c0505"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#baseHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🛑</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">BASE CASES, TERMINATION CONTRACTS &amp; STACK OVERFLOW</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Call stack memory exhaustion, inequality guards (n &lt;= 0), and monotonic shrinking invariants</text>

  <!-- Left: Safe Bounded Recursion -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#safeFlowGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="44" y="118" fill="#34d399" font-size="13" font-weight="bold">SAFE BOUNDED RECURSION</text>

  <rect x="44" y="136" width="400" height="90" rx="6" fill="#030712" stroke="#047857"/>
  <text x="56" y="158" fill="#a78bfa" font-size="11" font-weight="bold">Guard Clause Pattern:</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10">function countdown(n) {</text>
  <text x="76" y="196" fill="#34d399" font-size="10">if (n &lt;= 0) return; // Strict inequality guard!</text>
  <text x="76" y="214" fill="#cbd5e1" font-size="10">countdown(n - 1);</text>

  <rect x="44" y="240" width="400" height="200" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="56" y="264" fill="#34d399" font-size="11" font-weight="bold">Stack Behavior (Depth Bounded):</text>
  <text x="56" y="286" fill="#cbd5e1" font-size="10">• Call 1: countdown(3) [frame 1 allocated]</text>
  <text x="56" y="306" fill="#cbd5e1" font-size="10">• Call 2: countdown(2) [frame 2 allocated]</text>
  <text x="56" y="326" fill="#cbd5e1" font-size="10">• Call 3: countdown(1) [frame 3 allocated]</text>
  <text x="56" y="346" fill="#34d399" font-size="10">• Call 4: countdown(0) [BASE CASE TRIPPED!]</text>
  <text x="56" y="370" fill="#a7f3d0" font-size="10">• Frames pop in reverse order: 4 -&gt; 3 -&gt; 2 -&gt; 1.</text>
  <text x="56" y="392" fill="#38bdf8" font-size="10">• Peak Stack Depth: 4 frames total.</text>
  <text x="56" y="416" fill="#34d399" font-size="10" font-weight="bold">• Verdict: Memory reclaimed cleanly, 0 leaks!</text>

  <!-- Right: Runaway Stack Overflow -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#crashFlowGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="516" y="118" fill="#f87171" font-size="13" font-weight="bold">STACK OVERFLOW FREEFALL (THE TRAP)</text>

  <rect x="516" y="136" width="400" height="90" rx="6" fill="#030712" stroke="#7f1d1d"/>
  <text x="528" y="158" fill="#f87171" font-size="11" font-weight="bold">Overshot / Missing Base Case:</text>
  <text x="528" y="178" fill="#cbd5e1" font-size="10">function broken(n) {</text>
  <text x="548" y="196" fill="#f87171" font-size="10">if (n === 0) return; // Strict equality trap!</text>
  <text x="548" y="214" fill="#cbd5e1" font-size="10">broken(n - 2);       // If n=5 -&gt; 5, 3, 1, -1, -3...</text>

  <rect x="516" y="240" width="400" height="200" rx="6" fill="#030712" stroke="#ef4444"/>
  <text x="528" y="264" fill="#f87171" font-size="11" font-weight="bold">Catastrophic Memory Collision:</text>
  <text x="528" y="286" fill="#fca5a5" font-size="10">• n skips 0 completely: descends towards negative infinity!</text>
  <text x="528" y="306" fill="#fca5a5" font-size="10">• Frame 100... Frame 1,000... Frame 9,999...</text>
  <text x="528" y="326" fill="#ef4444" font-size="10">• Frame 10,464: Call stack reaches hardware limit!</text>
  <text x="528" y="352" fill="#ffffff" font-size="10" font-weight="bold" font-family="monospace">RangeError: Maximum call stack size exceeded</text>
  <text x="528" y="380" fill="#94a3b8" font-size="10">• Process terminated violently by runtime environment.</text>
  <text x="528" y="416" fill="#ef4444" font-size="10" font-weight="bold">• Cause: Equality guard overshot; non-convergent step</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'four-base-pathologies',
      text: {
        en: 'The Four Classic Base Case Pathologies',
        bn: 'বেস কেসের চারটি পরিচিত ভুল ও সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When diagnosing recursive bugs in production code, failures generally trace back to 4 common errors in base case logic.',
        bn: 'প্রোডাকশন কোডে রিকার্সিভ সমস্যা তদন্ত করার সময় দেখা যায় ভুলগুলো সাধারণত বেস কেস লজিকের 4 টি চেনা ভুলের কারণে ঘটে থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'First, the omitted base case where the termination check is completely missing. Second, the overshot base case where using strict equality causes step sizes greater than 1 to skip the termination value. Third, the non-converging recursive step where arguments do not shrink. Fourth, the shadowed base case where the recursive call is accidentally placed before the base check.',
        bn: 'প্রথমত, বেস কেস সম্পূর্ণ ভুলে যাওয়া যেখানে কোনো সমাপ্তি শর্তই থাকে না। দ্বিতীয়ত, মান বাদ পড়ে যাওয়া যেখানে কঠোর সমতা চিহ্নের কারণে ১ এর চেয়ে বড় ধাপের বিয়োগফল সমাপ্তি মানকে এড়িয়ে যায়। তৃতীয়ত, আর্গুমেন্ট না কমা যেখানে মান ছোট হয় না। চতুর্থত, অসময়ে রিকার্শন কল যেখানে বেস কেস পরীক্ষার আগেই রিকার্সিভ কল কার্যকর হয়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'multiple-base-cases',
      text: {
        en: 'Handling Multiple Base Cases: Fibonacci & Palindromes',
        bn: 'একাধিক বেস কেস পরিচালনা: ফিবোনাচ্চি ও প্যালিন্ড্রোম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Many algorithms require more than a single base case to terminate safely. In Fibonacci computations, the formula F(n) = F(n - 1) + F(n - 2) looks back two steps, necessitating two base cases: n = 0 returning 0, and n = 1 returning 1.',
        bn: 'অনেক অ্যালগরিদমে নিরাপদে কাজ শেষ করতে একাধিক বেস কেসের প্রয়োজন হয়। ফিবোনাচ্চি গণনায় F(n) = F(n - 1) + F(n - 2) সূত্রটি পেছনে দুই ধাপ ফিরে তাকায়, যার জন্য দুটি বেস কেস আবশ্যক: n = ০ হলে ০ রিটার্ন করা এবং n = ১ হলে ১ রিটার্ন করা।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-base-sim',
      text: {
        en: 'Interactive Benchmark: Testing Equality vs Inequality Base Guards',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: সমতা বনাম অসমতা বেস গার্ড পরীক্ষা'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-base-sim.ts',
      code: `// Base Cases & Termination Simulator
// badCountdown overshoots 0 when subtracting 2 from 5 -> fails
// safeCountdown terminates at -1 -> succeeds
// Fibonacci evaluates 7 values with 2 base cases -> returns 7
function simulateBaseCases() {
  console.log("=== BASE CASES & TERMINATION SIMULATOR ===");

  console.log("\\n1. Equality (n === 0) vs Inequality (n <= 0) Comparison:");
  function badCountdown(n: number, steps: number[] = []): string {
    steps.push(n);
    if (steps.length > 6) {
      return "CRASH: Overshot 0 -> descending into negative infinity (-1, -3...)";
    }
    if (n === 0) return "Reached 0 successfully";
    return badCountdown(n - 2, steps);
  }

  function safeCountdown(n: number, steps: number[] = []): string {
    steps.push(n);
    if (n <= 0) return \`Safely terminated at \${n} (steps: [\${steps.join(", ")}])\`;
    return safeCountdown(n - 2, steps);
  }

  console.log(\`   badCountdown(5, step=2)  -> \${badCountdown(5)}\`);
  console.log(\`   safeCountdown(5, step=2) -> \${safeCountdown(5)}\`);

  console.log("\\n2. Multiple Base Cases (Fibonacci):");
  function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const fibVals = [0, 1, 2, 3, 4, 5, 6].map(n => fibonacci(n));
  console.log(\`   First 7 Fibonacci values: [\${fibVals.join(", ")}]\`);
}

simulateBaseCases();`
    },
    {
      type: 'terminal',
      id: 'base-sim-output',
      cmd: 'npx tsx recursion-base-sim.ts',
      output: `=== BASE CASES & TERMINATION SIMULATOR ===

1. Equality (n === 0) vs Inequality (n <= 0) Comparison:
   badCountdown(5, step=2)  -> CRASH: Overshot 0 -> descending into negative infinity (-1, -3...)
   safeCountdown(5, step=2) -> Safely terminated at -1 (steps: [5, 3, 1, -1])

2. Multiple Base Cases (Fibonacci):
   First 7 Fibonacci values: [0, 1, 1, 2, 3, 5, 8]`
    }
  ],
  exercises: [
    {
      id: 'rec-bas-ex-1',
      kind: 'mcq',
      topic: 'inequality-vs-equality-guard',
      question: {
        en: 'Why is writing an inequality check like if (n <= 0) vastly safer than an equality check if (n === 0) for numeric recursion?',
        bn: 'সংখ্যাভিত্তিক রিকার্শনে if (n === 0) এর মতো সমতা পরীক্ষার চেয়ে if (n <= 0) এর মতো অসমতা শর্ত লেখা কেন অনেক বেশি নিরাপদ?'
      },
      options: [
        {
          en: 'If step decrements exceed 1 (or negative values enter), an equality check overshoots zero and recurses infinitely, whereas an inequality safely halts',
          bn: 'যদি মান কমানোর ধাপ 1 এর চেয়ে বেশি হয় (বা ঋণাত্মক মান আসে), সমতা পরীক্ষা শূন্য অতিক্রম করে অনন্তকাল চলতে থাকে, যেখানে অসমতা শর্ত নিরাপদে রিকার্শন থামায়'
        },
        {
          en: 'Because JavaScript does not support the equality operator',
          bn: 'কারণ জাভাস্ক্রিপ্ট সমতা অপারেটর সমর্থন করে না'
        },
        {
          en: 'Because inequality operators consume zero bytes of memory',
          bn: 'কারণ অসমতা অপারেটর চালাতে শূন্য বাইট মেমরি লাগে'
        },
        {
          en: 'To allow the program to run on quantum supercomputers',
          bn: 'যাতে প্রোগ্রামটি কোয়ান্টাম সুপারকম্পিউটারে চলতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Inequality guards catch values that skip over exact zero.',
        bn: 'অসমতা গার্ড শূন্য পেরিয়ে যাওয়া মানগুলোকে আটকে দেয়।'
      },
      explanation: {
        en: 'Step sizes greater than 1 or negative inputs skip over n === 0. Using n <= 0 ensures safe termination regardless of step increments.',
        bn: '১ এর চেয়ে বড় ধাপ বা ঋণাত্মক ইনপুট n === 0 কে অতিক্রম করে যায়। n <= 0 ব্যবহার করলে যেকোনো ধাপেই সমাপ্তি নিশ্চিত হয়।'
      }
    },
    {
      id: 'rec-bas-ex-2',
      kind: 'mcq',
      topic: 'maximum-call-stack-size-exceeded',
      question: {
        en: 'What runtime error is thrown in JavaScript/Node.js when a recursive function fails to hit a base case and exhausts stack memory?',
        bn: 'রিকার্সিভ ফাংশন বেস কেস না পেয়ে স্ট্যাক মেমরি শেষ করে ফেললে JavaScript/Node.js-এ কোন রানটাইম এরর তৈরি হয়?'
      },
      options: [
        {
          en: 'RangeError: Maximum call stack size exceeded',
          bn: 'RangeError: Maximum call stack size exceeded (রেঞ্জ এরর: সর্বোচ্চ কল স্ট্যাক আকার অতিক্রান্ত)'
        },
        {
          en: 'TypeError: Cannot read properties of undefined',
          bn: 'TypeError: Cannot read properties of undefined (টাইপ এরর: আনডিফাইন্ডের প্রপার্টি পড়া যায় না)'
        },
        {
          en: 'SyntaxError: Unexpected token in JSON',
          bn: 'SyntaxError: Unexpected token in JSON (সিনট্যাক্স এরর: জেএসওনে অপ্রত্যাশিত টোকেন)'
        },
        {
          en: 'ReferenceError: variable is not defined',
          bn: 'ReferenceError: variable is not defined (রেফারেন্স এরর: ভেরিয়েবল সংজ্ঞায়িত নয়)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The error is a RangeError denoting stack limit exhaustion.',
        bn: 'এররটি হলো স্ট্যাক সীমা অতিক্রমের একটি RangeError।'
      },
      explanation: {
        en: 'The V8 engine reserves a fixed call stack capacity. When recursive calls exceed this limit (~10000 frames), RangeError is triggered.',
        bn: 'V8 ইঞ্জিন নির্দিষ্ট কল স্ট্যাক মেমরি রাখে। রিকার্সিভ কল এই সীমা ছাড়ালে (~১০০০০ ফ্রেম) RangeError নিক্ষেপ করা হয়।'
      }
    },
    {
      id: 'rec-bas-ex-3',
      kind: 'mcq',
      topic: 'shadowed-base-case-bug',
      question: {
        en: 'What architectural defect occurs if a developer places the recursive call before the base case guard in a function body?',
        bn: 'ফাংশন বডিতে বেস কেস গার্ডের আগে রিকার্সিভ কল স্থাপন করলে কোন আর্কিটেকচারাল ত্রুটি তৈরি হয়?'
      },
      options: [
        {
          en: 'The base condition is shadowed and never evaluated because the function immediately recurses before reaching the check, guaranteeing stack overflow',
          bn: 'বেস শর্তটি ছায়াচ্ছন্ন হয়ে যায় এবং কখনোই যাচাই হয় না কারণ ফাংশনটি শর্তে পৌঁছানোর আগেই নিজেকে কল করে স্ট্যাক ওভারফ্লো ঘটায়'
        },
        {
          en: 'The computer instantly powers off',
          bn: 'কম্পিউটার সাথে সাথে বন্ধ হয়ে যায়'
        },
        {
          en: 'The code automatically runs twice as fast',
          bn: 'কোডটি স্বয়ংক্রিয়ভাবে দ্বিগুণ দ্রুত চলে'
        },
        {
          en: 'The function converts all variables to global scope',
          bn: 'ফাংশনটি সমস্ত ভেরিয়েবলকে গ্লোবাল স্কোপে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Code executes sequentially from top to bottom.',
        bn: 'কোড উপর থেকে নিচে ক্রমানুসারে চলে।'
      },
      explanation: {
        en: 'Base cases must execute first as guard clauses. Placing recursive calls earlier prevents the termination logic from ever executing.',
        bn: 'বেস কেস অবশ্যই শুরুতে গার্ড ক্লজ হিসেবে থাকতে হবে। তার আগে রিকার্সিভ কল বসালে সমাপ্তি শর্ত কখনোই কাজ করতে পারে না।'
      }
    },
    {
      id: 'rec-bas-ex-4',
      kind: 'mcq',
      topic: 'fibonacci-multiple-base-cases',
      question: {
        en: 'Why does the standard recursive Fibonacci algorithm require two distinct base cases instead of one?',
        bn: 'সাধারণ রিকার্সিভ ফিবোনাচ্চি অ্যালগরিদমে একটির বদলে কেন দুটি আলাদা বেস কেস প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Because F(n) branches into two recursive subcalls (F(n - 1) and F(n - 2)), requiring terminal definitions for both n = 0 and n = 1',
          bn: 'কারণ F(n) দুটি রিকার্সিভ সাবকলে বিভক্ত হয় (F(n - 1) এবং F(n - 2)), যার জন্য n = ০ এবং n = ১ উভয়েরই সমাপ্তি সংজ্ঞা প্রয়োজন'
        },
        {
          en: 'Because Leonardo Fibonacci had two children',
          bn: 'কারণ গণিতবিদ ফিবোনাচ্চির দুই সন্তান ছিল'
        },
        {
          en: 'To satisfy operating system multi-threading requirements',
          bn: 'অপারেটিং সিস্টেমের মাল্টি-থ্রেডিং চাহিদা পূরণের জন্য'
        },
        {
          en: 'Two base cases make the calculation run in O(1) time',
          bn: 'দুটি বেস কেস হিসাবকে O(1) সময়ে সম্পন্ন করতে সাহায্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A step looking back two positions needs two initial seeds.',
        bn: 'যে হিসাব দুই ধাপ পেছনে তাকায় তার জন্য দুটি প্রাথমিক বীজ প্রয়োজন।'
      },
      explanation: {
        en: 'A second-order recurrence relation depends on two previous values. Resolving down to base cases requires defining both initial seed states.',
        bn: 'দ্বিতীয় ক্রমের রিকারেন্স পূর্ববর্তী দুটি মানের ওপর নির্ভর করে। তাই সঠিক হিসাবের জন্য উভয় প্রাথমিক মান নির্ধারণ করতে হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Base Cases & Termination Physics Quiz',
      bn: 'বেস কেস ও টার্মিনেশন ফিজিক্স কুইজ'
    },
    questions: [
      {
        id: 'rec-bas-qz-1',
        kind: 'mcq',
        topic: 'empty-data-structure-base-cases',
        question: {
          en: 'What is the standard base case when recursively traversing a singly linked list or binary tree in computer science?',
          bn: 'কম্পিউটার বিজ্ঞানে একটি সিংগলি লিংকড লিস্ট বা বাইনারি ট্রি রিকার্সিভভাবে ট্রাভার্স করার সময় আদর্শ বেস কেস কোনটি?'
        },
        options: [
          {
            en: 'Checking if the current node reference is null (or undefined)',
            bn: 'বর্তমান নোড রেফারেন্সটি null (বা undefined) কিনা তা পরীক্ষা করা'
          },
          {
            en: 'Checking if the user has clicked a mouse button',
            bn: 'ব্যবহারকারী মাউস ক্লিক করেছে কিনা তা দেখা'
          },
          {
            en: 'Verifying if the screen resolution is 1080p',
            bn: 'পর্দার রেজোলিউশন ১০৮০পি কিনা তা নিশ্চিত করা'
          },
          {
            en: 'Deleting the root node from memory',
            bn: 'মেমরি থেকে রুট নোড মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'The end of a pointer chain is null.',
          bn: 'পয়েন্টার চেইনের শেষ প্রান্ত হলো null।'
        },
        explanation: {
          en: 'Reaching a null pointer indicates that the traversal has stepped past the last valid element or leaf, triggering immediate return.',
          bn: 'null পয়েন্টারে পৌঁছানো মানে ট্রাভার্সাল শেষ উপাদান অতিক্রম করেছে, ফলে তাৎক্ষণিক রিটার্ন ঘটে।'
        }
      },
      {
        id: 'rec-bas-qz-2',
        kind: 'mcq',
        topic: 'monotonic-convergence-principle',
        question: {
          en: 'What does the principle of monotonic convergence require for every recursive call made by a function?',
          bn: 'রিকার্সিভ ফাংশনের প্রতিটি কলের জন্য মনোটোনিক কনভারজেন্স নীতি কী দাবি করে?'
        },
        options: [
          {
            en: 'At least one argument must strictly move closer to the terminating base case on every single recursive invocation',
            bn: 'প্রতিটি রিকার্সিভ কলে অন্তত একটি আর্গুমেন্টকে অবশ্যই কঠোরভাবে সমাপ্তি বেস কেসের দিকে এগিয়ে যেতে হবে'
          },
          {
            en: 'The function must print its progress to the terminal',
            bn: 'ফাংশনটিকে টার্মিনালে তার অগ্রগতি প্রিন্ট করতে হবে'
          },
          {
            en: 'All variable names must begin with uppercase letters',
            bn: 'সব ভেরিয়েবলের নাম বড় হাতের অক্ষর দিয়ে শুরু হতে হবে'
          },
          {
            en: 'Execution time must decrease by 50% on each step',
            bn: 'প্রতি ধাপে এক্সিকিউশন সময় ৫০% হ্রাস পেতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each call must make measurable progress toward the base.',
          bn: 'প্রতিটি কলকে অবশ্যই বেসের দিকে পরিমাপযোগ্য অগ্রগতি করতে হবে।'
        },
        explanation: {
          en: 'Monotonic convergence guarantees that the distance between the current input state and the base case strictly decreases, ensuring termination.',
          bn: 'মনোটোনিক কনভারজেন্স নিশ্চিত করে যে ইনপুট ও বেস কেসের মধ্যকার দূরত্ব ক্রমান্বয়ে কমছে, যার ফলে কাজ সফলভাবে শেষ হয়।'
        }
      },
      {
        id: 'rec-bas-qz-3',
        kind: 'mcq',
        topic: 'array-recursion-boundary-guards',
        question: {
          en: 'When writing a recursive binary search on a sorted array, which base case condition indicates that the target key does not exist?',
          bn: 'বাছাই করা অ্যারেতে রিকার্সিভ বাইনারি সার্চ করার সময় কোন বেস শর্তটি নির্দেশ করে যে কাঙ্ক্ষিত উপাদানটি বিদ্যমান নেই?'
        },
        options: [
          {
            en: 'low > high (the search window has crossed boundaries and collapsed)',
            bn: 'low > high (অনুসন্ধানের উইন্ডো সীমা অতিক্রম করে শূন্য হয়ে গেছে)'
          },
          {
            en: 'The array elements are converted to floating point numbers',
            bn: 'অ্যারে উপাদানগুলোকে ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করা হয়েছে'
          },
          {
            en: 'The CPU fan speed exceeds 3000 RPM',
            bn: 'সিপিইউ ফ্যানের গতি ৩০০০ আরপিএম ছাড়িয়ে গেছে'
          },
          {
            en: 'The operating system switches to dark mode',
            bn: 'অপারেটিং সিস্টেম ডার্ক মোডে চলে গেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The search space is empty when low index exceeds high index.',
          bn: 'অনুসন্ধানের পরিসর শেষ হয়ে যায় যখন low ইনডেক্স high-কে ছাড়িয়ে যায়।'
        },
        explanation: {
          en: 'When the low pointer surpasses the high pointer, the search interval is exhausted, proving the element is absent.',
          bn: 'যখন low পয়েন্টার high পয়েন্টারকে অতিক্রম করে, তখন অনুসন্ধানের পরিধি শূন্য হয়ে যায় এবং বোঝা যায় উপাদানটি নেই।'
        }
      },
      {
        id: 'rec-bas-qz-4',
        kind: 'mcq',
        topic: 'heap-vs-stack-memory-allocation',
        question: {
          en: 'Why does converting deep recursion into an explicit loop with a heap-allocated array stack prevent RangeError crashes?',
          bn: 'গভীর রিকার্শনকে হিপ-বরাদ্দকৃত অ্যারে স্ট্যাকসহ লুপে রূপান্তর করলে কেন RangeError ক্র্যাশ প্রতিরোধ হয়?'
        },
        options: [
          {
            en: 'The system heap has gigabytes of dynamic memory available, whereas the runtime call stack is restricted to a small fixed region of a few megabytes',
            bn: 'সিস্টেম হিপে গিগাবাইট পরিমাণ ডাইনামিক মেমরি থাকে, যেখানে রানটাইম কল স্ট্যাক মাত্র কয়েক মেগাবাইটের ক্ষুদ্র স্থির অঞ্চলে সীমাবদ্ধ থাকে'
          },
          {
            en: 'Because while loops run directly on GPU hardware',
            bn: 'কারণ while লুপ সরাসরি জিপিইউ হার্ডওয়্যারে চলে'
          },
          {
            en: 'Heap memory deletes the operating system kernel',
            bn: 'হিপ মেমরি অপারেটিং সিস্টেম কার্নেল মুছে দেয়'
          },
          {
            en: 'It does not; loops and recursive calls use identical memory spaces',
            bn: 'এটি ভুল; লুপ এবং রিকার্সিভ কল হুবহু একই মেমরি ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The heap is orders of magnitude larger than the thread call stack.',
          bn: 'থ্রেড কল স্ট্যাকের চেয়ে হিপ মেমরি কয়েক গুণ বেশি বিশাল।'
        },
        explanation: {
          en: 'Call stack depth is constrained to prevent runaway memory leaks. Heap-allocated arrays can hold millions of elements without exhausting stack limits.',
          bn: 'কল স্ট্যাকের গভীরতা সীমিত থাকে। অন্যদিকে হিপ মেমরিতে থাকা অ্যারে স্ট্যাক সীমা না ভেঙে লাখ লাখ উপাদান ধারণ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'calls-and-the-call',
    title: {
      en: 'The Call Stack & Activation Records: Execution Winding & Unwinding',
      bn: 'কল স্ট্যাক ও অ্যাক্টিভেশন রেকর্ড: এক্সিকিউশন ওয়াইন্ডিং ও আনওয়াইন্ডিং'
    }
  }
};
