import type { Lesson } from '../../../lib/types';

export const CallsAndTheCallLesson: Lesson = {
  slug: 'calls-and-the-call',
  tech: 'recursion',
  title: {
    en: 'The Call Stack & Activation Records: Execution Winding & Unwinding',
    bn: 'কল স্ট্যাক ও অ্যাক্টিভেশন রেকর্ড: এক্সিকিউশন ওয়াইন্ডিং ও আনওয়াইন্ডিং'
  },
  summary: {
    en: 'Master the physical mechanics of the call stack during recursive execution. Understand activation records, frame allocations, return address pointers, stack pointer movements, and the distinction between pre-order and post-order recursive work.',
    bn: 'রিকার্সিভ এক্সিকিউশনের সময় কল স্ট্যাকের অভ্যন্তরীণ মেকানিজম গভীরভাবে আয়ত্ত করুন। অ্যাক্টিভেশন রেকর্ড, ফ্রেম বরাদ্দকরণ, রিটার্ন ঠিকানা পয়েন্টার, স্ট্যাক পয়েন্টার মুভমেন্ট এবং প্রি-অর্ডার বনাম পোস্ট-অর্ডার কাজের সম্পূর্ণ বিশ্লেষণ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'call-stack-activation-records',
      text: {
        en: 'The Architecture of an Activation Record Stack Frame',
        bn: 'অ্যাক্টিভেশন রেকর্ড স্ট্যাক ফ্রেমের আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you execute a recursive function, the runtime relies on a physical call stack to coordinate memory, parameters, and execution state. Every recursive call pushes an activation record onto the stack, pausing the parent function until the child finishes and returns.',
        bn: 'যখন আপনি একটি রিকার্সিভ ফাংশন চালান, রানটাইম মেমরি, প্যারামিটার এবং এক্সিকিউশন অবস্থা সমন্বয় করতে একটি ফিজিক্যাল কল স্ট্যাকের ওপর নির্ভর করে। প্রতিটি রিকার্সিভ কল স্ট্যাকে একটি নতুন অ্যাক্টিভেশন রেকর্ড পুশ করে চাইল্ড ফাংশন শেষ না হওয়া পর্যন্ত প্যারেন্ট ফাংশনকে স্থগিত রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An activation record stores incoming arguments, local variables, and the return address pointing to the instruction in the caller that follows the call. In an array of 4 items, recursion allocates 5 stack frames before hitting the base case.',
        bn: 'একটি অ্যাক্টিভেশন রেকর্ড আর্গুমেন্ট, লোকাল ভেরিয়েবল এবং কলারের পরবর্তী কাজের নির্দেশ সম্বলিত রিটার্ন ঠিকানা সংরক্ষণ করে। 4 টি উপাদানের একটি অ্যারেতে রিকার্শন বেস কেসে পৌঁছানোর আগে মোট 5 টি স্ট্যাক ফ্রেম বরাদ্দ করে।'
      }
    },
    {
      type: 'diagram',
      id: 'call-stack-trace-diagram',
      caption: {
        en: 'Figure 1: Anatomy of a call stack frame and the distinction between pre-order and post-order recursive execution',
        bn: 'চিত্র ১: কল স্ট্যাক ফ্রেমের গঠন এবং প্রি-অর্ডার বনাম পোস্ট-অর্ডার রিকার্সিভ এক্সিকিউশনের পার্থক্য'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="stkHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <linearGradient id="frmGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#stkHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🥞</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">ACTIVATION RECORD ANATOMY &amp; CALL STACK LIFECYCLE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Return addresses, frame pointers, pre-order winding descent, and post-order unwinding ascent</text>

  <!-- Left: The Anatomical Stack Frame -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#frmGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="44" y="118" fill="#38bdf8" font-size="13" font-weight="bold">STACK FRAME ANATOMY (IN HARDWARE RAM)</text>

  <!-- Layers of Activation Record -->
  <rect x="44" y="136" width="400" height="48" rx="6" fill="#1e1b4b" stroke="#6366f1"/>
  <text x="56" y="156" fill="#a5b4fc" font-size="11" font-weight="bold">1. Function Parameters &amp; Arguments</text>
  <text x="56" y="172" fill="#cbd5e1" font-size="10">n = 3, items = [10, 20, 30], depth = 1</text>

  <rect x="44" y="190" width="400" height="48" rx="6" fill="#0f291e" stroke="#10b981"/>
  <text x="56" y="210" fill="#6ee7b7" font-size="11" font-weight="bold">2. Local Function Variables</text>
  <text x="56" y="226" fill="#cbd5e1" font-size="10">subResult = undefined (pending resolution of child call)</text>

  <rect x="44" y="244" width="400" height="48" rx="6" fill="#31101e" stroke="#ec4899"/>
  <text x="56" y="264" fill="#f472b6" font-size="11" font-weight="bold">3. Return Address Pointer (Program Counter)</text>
  <text x="56" y="280" fill="#cbd5e1" font-size="10">Points to Line 18 in caller: resume execution right here!</text>

  <rect x="44" y="298" width="400" height="48" rx="6" fill="#2d1515" stroke="#f59e0b"/>
  <text x="56" y="318" fill="#fbbf24" font-size="11" font-weight="bold">4. Saved Frame Pointer (Previous Base Pointer)</text>
  <text x="56" y="334" fill="#cbd5e1" font-size="10">Enables unwinding back to caller's activation context</text>

  <rect x="44" y="354" width="400" height="90" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="376" fill="#f8fafc" font-size="10" font-weight="bold">Hardware Stack Direction Note:</text>
  <text x="56" y="396" fill="#94a3b8" font-size="10">• In x86/ARM hardware, the stack grows DOWNWARD in memory.</text>
  <text x="56" y="414" fill="#94a3b8" font-size="10">• Stack Pointer (RSP) decreases on push, increases on pop.</text>
  <text x="56" y="432" fill="#34d399" font-size="10">• Call instruction = push(return_addr) + jump(func_addr).</text>

  <!-- Right: Pre-order vs Post-order -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">EXECUTION TIMING: PRE-ORDER VS POST-ORDER</text>

  <rect x="516" y="136" width="400" height="145" rx="6" fill="#030712" stroke="#0284c7"/>
  <text x="528" y="160" fill="#38bdf8" font-size="11" font-weight="bold">Pre-Order Work (Before Recursive Call):</text>
  <text x="528" y="180" fill="#cbd5e1" font-size="10">• Executed during WINDING descent (as frames are pushed).</text>
  <text x="528" y="198" fill="#cbd5e1" font-size="10">• State flows DOWNWARD from parent to child.</text>
  <text x="528" y="218" fill="#a78bfa" font-size="10">console.log(arr[index]); // 10, 20, 30, 40</text>
  <text x="528" y="236" fill="#cbd5e1" font-size="10">traverse(index + 1);</text>
  <text x="528" y="260" fill="#34d399" font-size="10" font-weight="bold">• Result: Natural forward traversal order</text>

  <rect x="516" y="295" width="400" height="150" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="318" fill="#34d399" font-size="11" font-weight="bold">Post-Order Work (After Recursive Call):</text>
  <text x="528" y="338" fill="#cbd5e1" font-size="10">• Executed during UNWINDING ascent (as frames are popped).</text>
  <text x="528" y="356" fill="#cbd5e1" font-size="10">• State flows UPWARD from child to parent.</text>
  <text x="528" y="376" fill="#cbd5e1" font-size="10">traverse(index + 1);</text>
  <text x="528" y="394" fill="#a78bfa" font-size="10">console.log(arr[index]); // 40, 30, 20, 10</text>
  <text x="528" y="418" fill="#38bdf8" font-size="10" font-weight="bold">• Result: Free reversal! LIFO gives reversal at zero cost</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'pre-order-vs-post-order',
      text: {
        en: 'Pre-Order Winding vs Post-Order Unwinding Work',
        bn: 'প্রি-অর্ডার ওয়াইন্ডিং বনাম পোস্ট-অর্ডার আনওয়াইন্ডিং কাজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A foundational concept in recursive design is the timing of when instructions execute relative to the recursive call itself.',
        bn: 'রিকার্সিভ ডিজাইনের একটি মৌলিক ভিত্তি হলো রিকার্সিভ কলের সাপেক্ষে কোন নির্দেশ কখন কার্যকর হচ্ছে তার সময় নির্ধারণ করা।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Instructions placed before the recursive call execute during the winding descent phase, moving state from parent to child. Conversely, operations written after the call wait for the unwinding ascent phase, processing values as stack frames pop and hand results upward.',
        bn: 'রিকার্সিভ কলের আগের নির্দেশগুলো ওয়াইন্ডিং ডিসেন্ট পর্যায়ে চলে এবং প্যারেন্ট থেকে চাইল্ডের দিকে তথ্য নিয়ে যায়। অন্যদিকে কলের পরবর্তী কাজগুলো আনওয়াইন্ডিং অ্যাসেন্ট পর্যায়ের জন্য অপেক্ষা করে, যখন স্ট্যাক ফ্রেম পপ হওয়ার সাথে সাথে হিসাবকৃত মান উপরে পৌঁছায়।'
      }
    },
    {
      type: 'heading',
      id: 'reversal-as-free-feature',
      text: {
        en: 'Free Reversal: The Natural Discipline of the Stack',
        bn: 'বিনামূল্যের উল্টোরূপ: স্ট্যাকের প্রাকৃতিক নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because the call stack operates under Last-In, First-Out (LIFO) discipline, post-order operations naturally process elements in reverse order without any auxiliary arrays or explicit reversal loops.',
        bn: 'যেহেতু কল স্ট্যাক লাস্ট-ইন, ফার্স্ট-আউট (LIFO) নিয়মে চলে, তাই পোস্ট-অর্ডার অপারেশনগুলো কোনো বাড়তি অ্যারে বা রিভার্সাল লুপ ছাড়াই ডাটাকে উল্টো ক্রমে প্রক্রিয়া করে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-callstack-sim',
      text: {
        en: 'Interactive Benchmark: Tracing Frame Pushes, Pops & Pre/Post Order',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: ফ্রেম পুশ, পপ এবং প্রি/পোস্ট অর্ডার ট্রেসিং'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-callstack-sim.ts',
      code: `// Call Stack Mechanics: Activation Records & Pre/Post Work Simulator
// Array with 4 elements pushes 5 stack frames -> gives 5
// Pre-order yields [10, 20, 30, 40] in forward order -> gives 40
// Post-order yields [40, 30, 20, 10] in reverse order -> returns 10
function simulateCallStackMechanics() {
  console.log("=== CALL STACK MECHANICS & ACTIVATION RECORDS ===");

  const items = [10, 20, 30, 40];
  console.log(\`\\nInput Array (4 elements): [\${items.join(", ")}]\`);

  const callStack: { frameId: number; index: number; val: number }[] = [];
  const preOrderLog: number[] = [];
  const postOrderLog: number[] = [];

  function traverse(index: number) {
    const frameId = callStack.length + 1;
    callStack.push({ frameId, index, val: items[index] });
    console.log(\`   [Frame \${frameId} PUSHED] traverse(index=\${index}) -> Stack Depth: \${callStack.length}\`);

    if (index < items.length) {
      preOrderLog.push(items[index]);
    }

    if (index >= items.length) {
      console.log(\`   -> Base case reached at index \${index} -> Starting UNWINDING ascent!\`);
      const popped = callStack.pop()!;
      console.log(\`   [Frame \${popped.frameId} POPPED] -> Stack Depth: \${callStack.length}\`);
      return;
    }

    traverse(index + 1);

    postOrderLog.push(items[index]);
    const popped = callStack.pop()!;
    console.log(\`   [Frame \${popped.frameId} POPPED] Returned to index=\${index} -> Stack Depth: \${callStack.length}\`);
  }

  traverse(0);

  console.log("\\nResults:");
  console.log(\`   Pre-order Execution (Winding descent):   [\${preOrderLog.join(", ")}] -> Natural forward order\`);
  console.log(\`   Post-order Execution (Unwinding ascent): [\${postOrderLog.join(", ")}] -> Free reversal order\`);
}

simulateCallStackMechanics();`
    },
    {
      type: 'terminal',
      id: 'callstack-sim-output',
      cmd: 'npx tsx recursion-callstack-sim.ts',
      output: `=== CALL STACK MECHANICS & ACTIVATION RECORDS ===

Input Array (4 elements): [10, 20, 30, 40]
   [Frame 1 PUSHED] traverse(index=0) -> Stack Depth: 1
   [Frame 2 PUSHED] traverse(index=1) -> Stack Depth: 2
   [Frame 3 PUSHED] traverse(index=2) -> Stack Depth: 3
   [Frame 4 PUSHED] traverse(index=3) -> Stack Depth: 4
   [Frame 5 PUSHED] traverse(index=4) -> Stack Depth: 5
   -> Base case reached at index 4 -> Starting UNWINDING ascent!
   [Frame 5 POPPED] -> Stack Depth: 4
   [Frame 4 POPPED] Returned to index=3 -> Stack Depth: 3
   [Frame 3 POPPED] Returned to index=2 -> Stack Depth: 2
   [Frame 2 POPPED] Returned to index=1 -> Stack Depth: 1
   [Frame 1 POPPED] Returned to index=0 -> Stack Depth: 0

Results:
   Pre-order Execution (Winding descent):   [10, 20, 30, 40] -> Natural forward order
   Post-order Execution (Unwinding ascent): [40, 30, 20, 10] -> Free reversal order`
    }
  ],
  exercises: [
    {
      id: 'rec-cal-ex-1',
      kind: 'mcq',
      topic: 'activation-record-return-address',
      question: {
        en: 'What critical piece of metadata does an activation record (stack frame) preserve so execution can resume after a child function returns?',
        bn: 'চাইল্ড ফাংশন রিটার্ন করার পর যেন এক্সিকিউশন সঠিকভাবে পুনরায় শুরু হতে পারে সেজন্য অ্যাক্টিভেশন রেকর্ড (স্ট্যাক ফ্রেম) কোন গুরুত্বপূর্ণ মেটাডাটা সংরক্ষণ করে?'
      },
      options: [
        {
          en: 'The return address pointer (program counter offset) indicating the exact line of code to resume in the parent caller',
          bn: 'প্যারেন্ট কলারের ঠিক কোন লাইন থেকে পুনরায় কাজ শুরু করতে হবে তা নির্দেশকারী রিটার্ন অ্যাড্রেস পয়েন্টার (প্রোগ্রাম কাউন্টার অফসেট)'
        },
        {
          en: 'The serial number of the user mouse and keyboard',
          bn: 'ব্যবহারকারীর মাউস এবং কিবোর্ডের সিরিয়াল নম্বর'
        },
        {
          en: 'The color scheme of the web browser',
          bn: 'ওয়েব ব্রাউজারের কালার স্কিম'
        },
        {
          en: 'A list of all files downloaded in the past week',
          bn: 'গত সপ্তাহে ডাউনলোড করা সমস্ত ফাইলের তালিকা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The CPU program counter jumps to the return address upon return.',
        bn: 'ফাংশন রিটার্ন করার সাথে সাথে সিপিইউ প্রোগ্রাম কাউন্টার রিটার্ন অ্যাড্রেসে জাম্প করে।'
      },
      explanation: {
        en: 'The return address allows the hardware and runtime to resume execution at the exact instruction immediately following the call.',
        bn: 'রিটার্ন অ্যাড্রেস হার্ডওয়্যারকে নিশ্চিত করে যে কলের ঠিক পরের লাইন থেকে কাজ পুনরায় শুরু করতে হবে।'
      }
    },
    {
      id: 'rec-cal-ex-2',
      kind: 'mcq',
      topic: 'pre-order-vs-post-order-timing',
      question: {
        en: 'If you want to print elements of a linked list in reverse order without reversing the list pointers, where should the print statement be placed?',
        bn: 'পয়েন্টার পরিবর্তন না করে লিংকড লিস্টের উপাদানগুলো উল্টো ক্রমে প্রিন্ট করতে চাইলে প্রিন্ট স্টেটমেন্টটি কোথায় বসানো উচিত?'
      },
      options: [
        {
          en: 'After the recursive call (in post-order position), so printing executes during the unwinding phase from tail to head',
          bn: 'রিকার্সিভ কলের পরে (পোস্ট-অর্ডার অবস্থানে), যাতে আনওয়াইন্ডিং পর্যায়ে শেষ থেকে শুরুতে প্রিন্ট হয়'
        },
        {
          en: 'Before the recursive call (in pre-order position)',
          bn: 'রিকার্সিভ কলের আগে (প্রি-অর্ডার অবস্থানে)'
        },
        {
          en: 'Inside an external CSS stylesheet',
          bn: 'একটি বহিরাগত সিএসএস স্টাইলশিটের ভেতরে'
        },
        {
          en: 'In the package.json configuration file',
          bn: 'package.json কনফিগারেশন ফাইলের ভেতরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Post-order work runs as stack frames pop in reverse order.',
        bn: 'পোস্ট-অর্ডার কাজ সম্পন্ন হয় যখন স্ট্যাক ফ্রেমগুলো উল্টো ক্রমে পপ হয়।'
      },
      explanation: {
        en: 'Placing work after the recursive call guarantees that all child nodes are visited first. When the call stack unwinds, elements are processed backwards.',
        bn: 'রিকার্সিভ কলের পরে কোড রাখলে প্রথমে সব চাইল্ড কল শেষ হয়। পরবর্তীতে স্ট্যাক খালি হওয়ার সময় শেষ থেকে শুরুতে উপাদানগুলো প্রসেস হয়।'
      }
    },
    {
      id: 'rec-cal-ex-3',
      kind: 'mcq',
      topic: 'call-stack-lifo-order',
      question: {
        en: 'Which fundamental data structure access discipline does the physical computer call stack strictly follow?',
        bn: 'কম্পিউটারের ফিজিক্যাল কল স্ট্যাক কঠোরভাবে কোন মৌলিক ডাটা স্ট্রাকচার নীতি অনুসরণ করে?'
      },
      options: [
        {
          en: 'Last-In, First-Out (LIFO)',
          bn: 'লাস্ট-ইন, ফার্স্ট-আউট (LIFO)'
        },
        {
          en: 'First-In, First-Out (FIFO)',
          bn: 'ফার্স্ট-ইন, ফার্স্ট-আউট (FIFO)'
        },
        {
          en: 'Random Access Memory indexing',
          bn: 'র‍্যান্ডম অ্যাক্সেস মেমরি ইনডেক্সিং'
        },
        {
          en: 'Round-robin task scheduling',
          bn: 'রাউন্ড-রবিন টাস্ক শিডিউলিং'
        }
      ],
      answer: 0,
      hint: {
        en: 'The most recently called function is the first to finish.',
        bn: 'সবার শেষে ডাকা ফাংশনটি সবার আগে কাজ শেষ করে।'
      },
      explanation: {
        en: 'Stack frames push when called and pop when returning. The newest frame is always on top (LIFO).',
        bn: 'কল করার সময় ফ্রেম পুশ হয় এবং রিটার্নের সময় পপ হয়। নতুন ফ্রেম সর্বদা সবার উপরে থাকে (LIFO)।'
      }
    },
    {
      id: 'rec-cal-ex-4',
      kind: 'mcq',
      topic: 'stack-pointer-hardware-movement',
      question: {
        en: 'In standard x86 and ARM computer architectures, how does the hardware stack pointer (RSP/SP) move when a new frame is pushed?',
        bn: 'স্ট্যান্ডার্ড x86 এবং ARM কম্পিউটার আর্কিটেকচারে নতুন ফ্রেম পুশ করার সময় হার্ডওয়্যার স্ট্যাক পয়েন্টার (RSP/SP) কোন দিকে সরে যায়?'
      },
      options: [
        {
          en: 'It decrements towards lower memory addresses, because the hardware stack grows downward',
          bn: 'এটি নিচের মেমরি ঠিকানার দিকে হ্রাস পায়, কারণ হার্ডওয়্যার স্ট্যাক নিচের দিকে বৃদ্ধি পায়'
        },
        {
          en: 'It increases towards higher memory addresses',
          bn: 'এটি উপরের মেমরি ঠিকানার দিকে বৃদ্ধি পায়'
        },
        {
          en: 'It remains completely stationary at byte zero',
          bn: 'এটি শূন্য নম্বর বাইটে সম্পূর্ণ স্থির থাকে'
        },
        {
          en: 'It rotates in a circle through hard disk sectors',
          bn: 'এটি হার্ডডিস্কের সেক্টরগুলোতে বৃত্তাকারে ঘুরতে থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'On modern CPUs, the call stack grows downward.',
        bn: 'আধুনিক সিপিইউতে কল স্ট্যাক নিচের দিকে বৃদ্ধি পায়।'
      },
      explanation: {
        en: 'By convention on modern CPUs, the call stack starts at high memory and grows downward. Pushing a frame subtracts bytes from the stack pointer.',
        bn: 'আধুনিক প্রসেসরে স্ট্যাক উচ্চ মেমরি থেকে শুরু হয়ে নিচের দিকে বাড়ে। ফ্রেম পুশ করলে স্ট্যাক পয়েন্টার থেকে বাইট বিয়োগ হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'The Call Stack & Activation Records Quiz',
      bn: 'কল স্ট্যাক ও অ্যাক্টিভেশন রেকর্ড কুইজ'
    },
    questions: [
      {
        id: 'rec-cal-qz-1',
        kind: 'mcq',
        topic: 'unwinding-phase-trigger',
        question: {
          en: 'What specific event triggers the transition from the winding descent phase to the unwinding ascent phase in recursion?',
          bn: 'রিকার্শনে কোন সুনির্দিষ্ট ঘটনাটি ওয়াইন্ডিং ডিসেন্ট পর্যায় থেকে আনওয়াইন্ডিং অ্যাসেন্ট পর্যায়ে রূপান্তরের সূচনা করে?'
        },
        options: [
          {
            en: 'The deepest function invocation evaluates a base case condition and returns a concrete value instead of making another call',
            bn: 'সর্বাধিক গভীরতার ফাংশন কলটি একটি বেস শর্ত পূরণ করে এবং নতুন কল করার বদলে একটি নির্দিষ্ট মান রিটার্ন করে'
          },
          {
            en: 'The operating system runs out of network bandwidth',
            bn: 'অপারেটিং সিস্টেমের নেটওয়ার্ক ব্যান্ডউইথ শেষ হয়ে যাওয়া'
          },
          {
            en: 'The user presses the Escape key on their keyboard',
            bn: 'ব্যবহারকারী কিবোর্ডের এস্কেপ (Escape) বাটন চাপলে'
          },
          {
            en: 'The computer CPU temperature drops below 0 degrees',
            bn: 'সিপিইউর তাপমাত্রা শূন্য ডিগ্রির নিচে নেমে গেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The base case ends the descent and starts the returns.',
          bn: 'বেস কেস নিচের দিকে নামা থামিয়ে রিটার্ন শুরু করে।'
        },
        explanation: {
          en: 'When a call reaches the base case, it returns without recursing. This begins the cascade of returning and popping up the stack.',
          bn: 'যখন কোনো কল বেস কেসে পৌঁছায়, তখন আর নতুন কল হয় না। এখান থেকেই ফ্রেম পপ হওয়া এবং উপরে মান ফেরত পাঠানোর কাজ শুরু হয়।'
        }
      },
      {
        id: 'rec-cal-qz-2',
        kind: 'mcq',
        topic: 'local-variable-isolation-per-frame',
        question: {
          en: 'Why do local variables in one recursive frame remain completely unaffected when a child frame modifies its own local variables of the same name?',
          bn: 'একটি রিকার্সিভ ফ্রেমে থাকা লোকাল ভেরিয়েবলগুলো কেন সম্পূর্ণ অক্ষত থাকে যখন কোনো চাইল্ড ফ্রেম একই নামের নিজস্ব ভেরিয়েবল পরিবর্তন করে?'
        },
        options: [
          {
            en: 'Each recursive invocation receives its own dedicated activation record in memory with independent local variable offsets',
            bn: 'প্রতিটি রিকার্সিভ কল মেমরিতে নিজস্ব স্বাধীন অ্যাক্টিভেশন রেকর্ড পায় যার নিজস্ব আলাদা লোকাল ভেরিয়েবল থাকে'
          },
          {
            en: 'Because JavaScript renames all variables with random numbers',
            bn: 'কারণ জাভাস্ক্রিপ্ট সব ভেরিয়েবলের নাম এলোমেলো সংখ্যায় বদলে দেয়'
          },
          {
            en: 'Because variables are stored on remote cloud servers',
            bn: 'কারণ ভেরিয়েবলগুলো দূরবর্তী ক্লাউড সার্ভারে জমা থাকে'
          },
          {
            en: 'Local variables can only be modified once per day',
            bn: 'লোকাল ভেরিয়েবল দিনে কেবল একবার পরিবর্তন করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each stack frame has distinct physical memory.',
          bn: 'প্রতিটি স্ট্যাক ফ্রেমের নিজস্ব আলাদা ফিজিক্যাল মেমরি থাকে।'
        },
        explanation: {
          en: 'Stack frames are isolated memory regions. A variable x in frame 3 has a different memory address than x in frame 2.',
          bn: 'স্ট্যাক ফ্রেমগুলো সম্পূর্ণ আলাদা মেমরি অঞ্চল। ৩ নম্বর ফ্রেমের ভেরিয়েবলের মেমরি অ্যাড্রেস ২ নম্বর ফ্রেমের থেকে সম্পূর্ণ আলাদা হয়।'
        }
      },
      {
        id: 'rec-cal-qz-3',
        kind: 'mcq',
        topic: 'post-order-accumulator-contrast',
        question: {
          en: 'In post-order recursion, where does the final calculated result originate?',
          bn: 'পোস্ট-অর্ডার রিকার্শনে চূড়ান্ত হিসাবকৃত ফলাফলটি মূলত কোথা থেকে তৈরি হয়ে আসে?'
        },
        options: [
          {
            en: 'At the bottom leaf (base case), then aggregates upward as each stack frame finishes its post-call computation',
            bn: 'সবার নিচের লিফ (বেস কেস) থেকে, যা প্রতিটি ফ্রেমের পোস্ট-কল হিসাবের সাথে যুক্ত হয়ে উপরের দিকে উঠে আসে'
          },
          {
            en: 'Directly from the root caller before any subcalls are made',
            bn: 'কোনো সাবকল করার আগেই সরাসরি রুট কলার থেকে'
          },
          {
            en: 'From an external browser cookie',
            bn: 'ব্রাউজারের কোনো কুকি ফাইল থেকে'
          },
          {
            en: 'From the operating system task manager',
            bn: 'অপারেটিং সিস্টেম টাস্ক ম্যানেজার থেকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Post-order synthesizes answers from children up to parents.',
          bn: 'পোস্ট-অর্ডার চাইল্ডের উত্তরের ওপর ভিত্তি করে প্যারেন্টের উত্তর সাজায়।'
        },
        explanation: {
          en: 'Post-order work synthesizes return values bottom-up. The base case seeds the calculation, and each parent compounds it.',
          bn: 'পোস্ট-অর্ডার কাজ নিচ থেকে উপরে হিসাব তৈরি করে। বেস কেস হিসাবের শুরু করে এবং প্রতিটি প্যারেন্ট তার সাথে নিজস্ব মান যোগ করে।'
        }
      },
      {
        id: 'rec-cal-qz-4',
        kind: 'mcq',
        topic: 'debugger-call-stack-panel',
        question: {
          en: 'When paused on a breakpoint inside a deeply nested recursive function in Chrome DevTools or VS Code, what does the Call Stack panel display?',
          bn: 'Chrome DevTools বা VS Code-এ গভীর রিকার্সিভ ফাংশনের ভেতরে ব্রেকপয়েন্টে থামলে Call Stack প্যানেল কী প্রদর্শন করে?'
        },
        options: [
          {
            en: 'The full linear list of currently active paused activation frames from the initial caller at the bottom to the active child at the top',
            bn: 'নিচে মূল কলার থেকে শুরু করে উপরে সক্রিয় চাইল্ড পর্যন্ত বর্তমানে অপেক্ষমাণ সমস্ত অ্যাক্টিভেশন ফ্রেমের সম্পূর্ণ তালিকা'
          },
          {
            en: 'A list of all web pages visited today',
            bn: 'আজকে ভিজিট করা সমস্ত ওয়েব পেজের তালিকা'
          },
          {
            en: 'The CPU fan speed and voltage metrics',
            bn: 'সিপিইউ ফ্যানের গতি এবং ভোল্টেজ'
          },
          {
            en: 'The HTML code of the browser window',
            bn: 'ব্রাউজার উইন্ডোর এইচটিএমএল কোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'The DevTools Call Stack inspects the real runtime stack frames.',
          bn: 'DevTools-এর Call Stack রানটাইমের আসল স্ট্যাক ফ্রেমগুলো দেখায়।'
        },
        explanation: {
          en: 'The debugger reads the live call stack, letting developers inspect the local variables and execution line of every paused parent frame.',
          bn: 'ডিবাগার চলমান কল স্ট্যাক পড়ে দেখায়, ফলে ডেভেলপার অপেক্ষমাণ প্রতিটি প্যারেন্ট ফ্রেমের লোকাল ভেরিয়েবল ও কোড লাইন দেখতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'returns-and-the-return',
    title: {
      en: 'Tail Call Optimization (TCO) & Accumulators: O(1) Space Recursion',
      bn: 'টেল কল অপ্টিমাইজেশন (TCO) ও অ্যাকিউমুলেটর: O(1) স্পেস রিকার্শন'
    }
  }
};
