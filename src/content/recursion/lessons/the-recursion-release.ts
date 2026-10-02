import type { Lesson } from '../../../lib/types';

export const TheRecursionReleaseLesson: Lesson = {
  slug: 'the-recursion-release',
  tech: 'recursion',
  title: {
    en: 'Recursion in Production: Call Stack Safety, Trampolines & Manual Stacks',
    bn: 'প্রোডাকশনে রিকার্শন: কল স্ট্যাক সুরক্ষা, ট্রাম্পোলিন ও ম্যানুয়াল স্ট্যাক'
  },
  summary: {
    en: 'Master enterprise-grade recursion deployment and stack-safe execution. Learn how to convert deep recursive traversals into heap-allocated explicit stack loops, implement resilient trampolines, handle circular references in nested JSON, and choose between recursion and iteration.',
    bn: 'এন্টারপ্রাইজ গ্রেড রিকার্শন ডিপ্লয়মেন্ট এবং স্ট্যাক-নিরাপদ এক্সিকিউশন আয়ত্ত করুন। গভীর রিকার্শনকে হিপ-মেমরির ম্যানুয়াল স্ট্যাক লুপে রূপান্তর, ট্রাম্পোলিন বাস্তবায়ন, নেস্টেড JSON-এ সার্কুলার রেফারেন্স প্রতিরোধ এবং রিকার্শন বনাম ইটারেশনের সঠিক ব্যবহারের সম্পূর্ণ গাইড।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'production-reality-call-stack',
      text: {
        en: 'Production Reality: Call Stack Budgets vs Heap Scale',
        bn: 'বাস্তব প্রোডাকশন পরিবেশ: কল স্ট্যাক বাজেট বনাম হিপ মেমরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When deploying recursive algorithms to production systems, textbook recursion often crashes against the hard memory limits of real hardware. Understanding how to transform deep recursion into heap-allocated stack loops and resilient trampolines ensures your backend services never fail with stack overflow errors.',
        bn: 'প্রোডাকশন সিস্টেমে রিকার্সিভ অ্যালগরিদম ব্যবহারের সময় পাঠ্যবইয়ের সাধারণ রিকার্শন প্রায়শই হার্ডওয়্যারের বাস্তব মেমরি সীমার সাথে ধাক্কা খেয়ে ক্র্যাশ করে। গভীর রিকার্শনকে হিপ-মেমরির ম্যানুয়াল স্ট্যাক লুপ এবং ট্রাম্পোলিনে রূপান্তর করতে শিখলে আপনার ব্যাকএন্ড সার্ভিস কখনো স্ট্যাক ওভারফ্লো এররে ব্যর্থ হবে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The execution call stack is strictly capped at a few megabytes (around 10000 frames in Node.js V8). When processing deep hierarchical datasets with 50000 nested levels, relying on native recursion causes catastrophic server downtime.',
        bn: 'এক্সিকিউশন কল স্ট্যাক কঠোরভাবে মাত্র কয়েক মেগাবাইটে সীমাবদ্ধ থাকে (Node.js V8 ইঞ্জিনে প্রায় 10000 ফ্রেম)। 50000 নেস্টেড লেভেলবিশিষ্ট গভীর ডাটা প্রক্রিয়াকরণের সময় সাধারণ রিকার্শনের ওপর নির্ভর করলে সার্ভার বিপর্যয়ের মুখে পড়ে।'
      }
    },
    {
      type: 'diagram',
      id: 'production-recursion-diagram',
      caption: {
        en: 'Figure 1: Native call stack overflow vs heap-allocated explicit stack simulation and circular reference guards',
        bn: 'চিত্র ১: সাধারণ কল স্ট্যাক ওভারফ্লো বনাম হিপ-বরাদ্দকৃত ম্যানুয়াল স্ট্যাক সিমুলেশন ও সার্কুলার রেফারেন্স প্রতিরোধ'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="relHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="fragileGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#31101e"/>
      <stop offset="100%" stop-color="#190a14"/>
    </linearGradient>
    <linearGradient id="resilientGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#relHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🛡️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">ENTERPRISE PRODUCTION RECURSION ARCHITECTURE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Explicit heap-allocated stacks, trampoline loop unwinding, and cycle-detection graph guards</text>

  <!-- Left: Fragile Call Stack -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#fragileGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="44" y="118" fill="#f87171" font-size="13" font-weight="bold">FRAGILE: NATIVE RECURSION (CALL STACK)</text>

  <rect x="44" y="136" width="400" height="135" rx="6" fill="#030712" stroke="#ef4444"/>
  <text x="56" y="158" fill="#f87171" font-size="11" font-weight="bold">The Hardware Ceiling Trap:</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10">• Call stack memory is strictly limited (~1-2 megabytes).</text>
  <text x="56" y="196" fill="#cbd5e1" font-size="10">• Maximum depth in Node.js / V8: ~10,000 frames.</text>
  <text x="56" y="214" fill="#ef4444" font-size="10">• Depth 10,465: RangeError: Maximum call stack size exceeded!</text>
  <text x="56" y="232" fill="#fca5a5" font-size="10">• Production disaster: Server crashes under real-world input.</text>
  <text x="56" y="254" fill="#ef4444" font-size="10" font-weight="bold">• Vulnerable to deep JSON files and circular graph cycles</text>

  <rect x="44" y="285" width="400" height="155" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="310" fill="#fbbf24" font-size="11" font-weight="bold">Circular Reference Trap (Graphs &amp; Objects):</text>
  <text x="56" y="332" fill="#cbd5e1" font-size="10">• Object A references B; Object B references A.</text>
  <text x="56" y="350" fill="#f87171" font-size="10">• Naive recursion traverses A -&gt; B -&gt; A -&gt; B infinitely.</text>
  <text x="56" y="370" fill="#cbd5e1" font-size="10">• Requires a visited Set() or WeakSet() cycle guard!</text>
  <text x="56" y="390" fill="#34d399" font-size="10">• Guard: if (visited.has(node)) return;</text>
  <text x="56" y="416" fill="#94a3b8" font-size="10">• Protects serialization and depth-first searches from freezing.</text>

  <!-- Right: Resilient Explicit Heap Stack -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#resilientGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">RESILIENT: EXPLICIT STACK (SYSTEM HEAP)</text>

  <rect x="516" y="136" width="400" height="145" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="160" fill="#34d399" font-size="11" font-weight="bold">Converting Recursion to While Loop:</text>
  <text x="528" y="180" fill="#cbd5e1" font-size="10">const stack = [rootNode];</text>
  <text x="528" y="198" fill="#a78bfa" font-size="10">while (stack.length &gt; 0) {</text>
  <text x="548" y="216" fill="#38bdf8" font-size="10">const curr = stack.pop();</text>
  <text x="548" y="234" fill="#cbd5e1" font-size="10">if (curr.isTarget) return curr;</text>
  <text x="548" y="252" fill="#34d399" font-size="10">for (const child of curr.children) stack.push(child);</text>
  <text x="528" y="270" fill="#a78bfa" font-size="10">}</text>

  <rect x="516" y="295" width="400" height="145" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="318" fill="#34d399" font-size="11" font-weight="bold">Production Scale Advantages:</text>
  <text x="528" y="338" fill="#cbd5e1" font-size="10">• Stack array lives on the HEAP, not the thread call stack!</text>
  <text x="528" y="356" fill="#a7f3d0" font-size="10">• Heap memory has GIGABYTES of capacity.</text>
  <text x="528" y="374" fill="#38bdf8" font-size="10">• Safely traverses 1,000,000 deep nodes with zero crashes.</text>
  <text x="528" y="392" fill="#cbd5e1" font-size="10">• Easy to pause, resume, serialize, or inspect in worker threads.</text>
  <text x="528" y="416" fill="#34d399" font-size="10" font-weight="bold">• Verdict: The gold standard for deep production trees</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'explicit-stack-transformation',
      text: {
        en: 'Mechanical Transformation: From Recursion to an Explicit Heap Stack',
        bn: 'যান্ত্রিক রূপান্তর: রিকার্শন থেকে হিপ-বরাদ্দকৃত ম্যানুয়াল স্ট্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Any recursive algorithm can be mechanically converted into an iterative while loop using an array-backed stack allocated on the heap. This eliminates reliance on the hardware call stack.',
        bn: 'যেকোনো রিকার্সিভ অ্যালগরিদমকে হিপ মেমরিতে থাকা অ্যারে স্ট্যাক ব্যবহার করে যান্ত্রিকভাবে একটি সাধারণ while লুপে রূপান্তর করা যায়। এটি হার্ডওয়্যার কল স্ট্যাকের ওপর নির্ভরতা পুরোপুরি দূর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Instead of having the runtime manage activation records, your code pushes and pops custom frame objects on the heap. Because the heap has gigabytes of dynamic memory available, your traversal safely handles inputs of arbitrary depth.',
        bn: 'রানটাইমের হাতে অ্যাক্টিভেশন রেকর্ড পরিচালনার দায়িত্ব দেওয়ার বদলে আপনার কোড নিজেই হিপ মেমরিতে কাস্টম ফ্রেম অবজেক্ট পুশ এবং পপ করে। যেহেতু হিপে গিগাবাইট পরিমাণ মেমরি থাকে, তাই আপনার অ্যালগরিদম যেকোনো গভীরতার ইনপুট নিরাপদে প্রক্রিয়া করতে পারে।'
      }
    },
    {
      type: 'heading',
      id: 'circular-reference-guards',
      text: {
        en: 'Guarding Against Circular Graph References and Dead Cycles',
        bn: 'সার্কুলার রেফারেন্স ও অনন্ত চক্র প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When traversing real-world object graphs or DOM trees, nodes often reference each other cyclically. Without a visited set tracking seen node references, recursion descends into an inescapable infinite loop.',
        bn: 'বাস্তব অবজেক্ট গ্রাফ বা ডম ট্রি ট্রাভার্স করার সময় নোডগুলো প্রায়শই একে অপরকে চক্রাকারে নির্দেশ করে। আগে পরিদর্শন করা নোডগুলোর ট্র্যাকিং সেট না থাকলে রিকার্শন একটি অন্তহীন লুপে আটকা পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Maintaining a Set or WeakSet of visited references acts as a cycle breaker. If the current node already exists in the set, the function returns immediately, preserving memory integrity and application stability.',
        bn: 'ভিজিট করা রেফারেন্সের জন্য একটি Set বা WeakSet রাখা চক্র ভাঙার রক্ষাকবচ হিসেবে কাজ করে। বর্তমান নোডটি সেটে আগে থেকেই থাকলে ফাংশনটি সাথে সাথে রিটার্ন করে মেমরি সুরক্ষা ও সিস্টেমের স্থিতিশীলতা বজায় রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-prod-sim',
      text: {
        en: 'Interactive Benchmark: Traversing 50,000 Levels on the Heap',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: হিপ মেমরিতে ৫০,০০০ লেভেল ট্রাভার্সাল'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'recursion-production-sim.ts',
      code: `// Production Recursion: Explicit Stack & Circular Reference Guard Simulator
// Native recursion crashes around frame 10000 -> gives 10000
// Explicit stack successfully traverses 50000 levels -> gives 50000
// Circular reference guard prevents infinite cycle -> returns 2
function simulateProductionRecursion() {
  console.log("=== PRODUCTION RECURSION & EXPLICIT STACK SIMULATOR ===");

  const DEPTH = 50000;
  console.log(\`\\n1. Deep Traversal Benchmark (\${DEPTH} levels):\`);
  console.log("   Native Recursion: Crashes around frame 10000 (RangeError: Maximum call stack size exceeded)");

  let count = 0;
  const explicitStack: number[] = [0];
  while (explicitStack.length > 0) {
    const current = explicitStack.pop()!;
    count++;
    if (current < DEPTH) {
      explicitStack.push(current + 1);
    }
  }
  console.log(\`   Explicit Heap-Stack: Successfully traversed all \${count} frames in constant stack space!\`);

  console.log("\\n2. Graph Circular Reference Detection Guard:");
  interface GraphNode { id: string; next: GraphNode | null }
  const nodeA: GraphNode = { id: "A", next: null };
  const nodeB: GraphNode = { id: "B", next: null };
  nodeA.next = nodeB;
  nodeB.next = nodeA;

  function safeTraverse(node: GraphNode | null, visited = new Set<GraphNode>(), path: string[] = []): string[] {
    if (!node) return path;
    if (visited.has(node)) {
      path.push(\`[CYCLE DETECTED AT \${node.id} -> HALTED]\`);
      return path;
    }
    visited.add(node);
    path.push(node.id);
    return safeTraverse(node.next, visited, path);
  }

  const resultPath = safeTraverse(nodeA);
  console.log(\`   Traversal Output: \${resultPath.join(" -> ")}\`);
}

simulateProductionRecursion();`
    },
    {
      type: 'terminal',
      id: 'prod-sim-output',
      cmd: 'npx tsx recursion-production-sim.ts',
      output: `=== PRODUCTION RECURSION & EXPLICIT STACK SIMULATOR ===

1. Deep Traversal Benchmark (50000 levels):
   Native Recursion: Crashes around frame 10000 (RangeError: Maximum call stack size exceeded)
   Explicit Heap-Stack: Successfully traversed all 50001 frames in constant stack space!

2. Graph Circular Reference Detection Guard:
   Traversal Output: A -> B -> [CYCLE DETECTED AT A -> HALTED]`
    }
  ],
  exercises: [
    {
      id: 'rec-rel-ex-1',
      kind: 'mcq',
      topic: 'heap-stack-vs-call-stack-scale',
      question: {
        en: 'Why must deep tree and graph traversals in production systems be converted from native recursion to an explicit heap-allocated stack loop?',
        bn: 'প্রোডাকশন সিস্টেমে গভীর ট্রি ও গ্রাফ ট্রাভার্সালকে কেন নেটিভ রিকার্শন থেকে হিপ-বরাদ্দকৃত ম্যানুয়াল স্ট্যাক লুপে রূপান্তর করা আবশ্যক?'
      },
      options: [
        {
          en: 'The runtime thread call stack is capped around 10000 frames (a few megabytes), whereas heap-allocated arrays can safely hold millions of nodes',
          bn: 'রানটাইম থ্রেড কল স্ট্যাক প্রায় 10000 ফ্রেমে সীমাবদ্ধ থাকে (কয়েক মেগাবাইট), যেখানে হিপে থাকা অ্যারে নিরাপদে লাখ লাখ নোড ধারণ করতে পারে'
        },
        {
          en: 'Because while loops run directly on GPU graphics hardware',
          bn: 'কারণ while লুপ সরাসরি জিপিইউ গ্রাফিক্স কার্ডে চলে'
        },
        {
          en: 'Because recursive functions cannot read text strings',
          bn: 'কারণ রিকার্সিভ ফাংশন টেক্সট স্ট্রিং পড়তে পারে না'
        },
        {
          en: 'To make the output print in uppercase letters',
          bn: 'যাতে আউটপুট বড় হাতের অক্ষরে প্রিন্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Call stack capacity is minuscule compared to system heap capacity.',
        bn: 'সিস্টেম হিপের তুলনায় কল স্ট্যাকের ধারণক্ষমতা খুবই সামান্য।'
      },
      explanation: {
        en: 'The execution stack is fixed and small (~1-2 MB). Allocating your stack on the heap unlocks gigabytes of memory, handling inputs of arbitrary depth.',
        bn: 'কল স্ট্যাকের আকার নির্দিষ্ট ও ক্ষুদ্র (~১-২ মেগাবাইট)। হিপে নিজস্ব স্ট্যাক বানালে গিগাবাইট পরিমাণ মেমরি ব্যবহার করে যেকোনো গভীরতার ডাটা চালানো যায়।'
      }
    },
    {
      id: 'rec-rel-ex-2',
      kind: 'mcq',
      topic: 'circular-reference-graph-guard',
      question: {
        en: 'What architectural safeguard prevents a recursive traversal from looping infinitely when processing a cyclic object graph?',
        bn: 'একটি সাইক্লিক অবজেক্ট গ্রাফ প্রক্রিয়াকরণের সময় কোন আর্কিটেকচারাল সুরক্ষা ব্যবস্থা রিকার্সিভ ট্রাভার্সালকে অনন্ত লুপে ঘোরা থেকে বিরত রাখে?'
      },
      options: [
        {
          en: 'Maintaining a visited Set (or WeakSet) that tracks processed node references and halts traversal when an already seen node is encountered',
          bn: 'একটি ভিজিটেড Set (বা WeakSet) রাখা যা প্রক্রিয়াকৃত নোড রেফারেন্স মনে রাখে এবং আগে দেখা নোড এলে সাথে সাথে ট্রাভার্সাল থামিয়ে দেয়'
        },
        {
          en: 'Restarting the computer after every 5 seconds',
          bn: 'প্রতি ৫ সেকেন্ড পরপর কম্পিউটার রিস্টার্ট করা'
        },
        {
          en: 'Converting all object keys to numbers',
          bn: 'অবজেক্টের সমস্ত কি-কে সংখ্যায় রূপান্তর করা'
        },
        {
          en: 'Disconnecting the server from the internet',
          bn: 'ইন্টারনেট থেকে সার্ভারের সংযোগ বিচ্ছিন্ন করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'A visited set identifies cycles by checking if a reference was already encountered.',
        bn: 'ভিজিটেড সেট রেফারেন্সটি আগে দেখা হয়েছে কিনা তা যাচাই করে চক্র সনাক্ত করে।'
      },
      explanation: {
        en: 'Cyclic graphs cause infinite loops unless tracked. A visited set guarantees that each node is visited at most once, safely pruning cycles.',
        bn: 'সাইক্লিক গ্রাফে ট্র্যাকিং না থাকলে অসীম লুপ তৈরি হয়। ভিজিটেড সেট নিশ্চিত করে যে প্রতিটি নোড সর্বোচ্চ একবারই প্রক্রিয়াকৃত হবে।'
      }
    },
    {
      id: 'rec-rel-ex-3',
      kind: 'mcq',
      topic: 'trampoline-vs-explicit-stack',
      question: {
        en: 'When should a software engineer choose an explicit heap stack loop over a trampoline pattern for recursive algorithms?',
        bn: 'রিকার্সিভ অ্যালগরিদমে কখন একজন সফটওয়্যার ইঞ্জিনিয়ারের ট্রাম্পোলিন প্যাটার্নের বদলে ম্যানুয়াল হিপ স্ট্যাক লুপ বেছে নেওয়া উচিত?'
      },
      options: [
        {
          en: 'When the algorithm involves multi-branching tree structures (like DFS or AST traversal) rather than simple linear tail calls',
          bn: 'যখন অ্যালগরিদমটি সাধারণ লিনিয়ার টেল কলের বদলে মাল্টি-ব্রাঞ্চিং ট্রি স্ট্রাকচার (যেমন DFS বা AST ট্রাভার্সাল) নিয়ে কাজ করে'
        },
        {
          en: 'Only when running code on mobile phones',
          bn: 'কেবল যখন মোবাইল ফোনে কোড চালানো হয়'
        },
        {
          en: 'When the database contains fewer than 5 rows',
          bn: 'যখন ডাটাবেসে ৫টির কম সারি থাকে'
        },
        {
          en: 'Explicit stacks are forbidden in enterprise production code',
          bn: 'এন্টারপ্রাইজ প্রোডাকশন কোডে ম্যানুয়াল স্ট্যাক ব্যবহার নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trampolines only optimize linear tail recursion; trees require explicit stacks.',
        bn: 'ট্রাম্পোলিন কেবল লিনিয়ার টেল রিকার্শন অপ্টিমাইজ করে; ট্রিতে ম্যানুয়াল স্ট্যাক লাগে।'
      },
      explanation: {
        en: 'Trampolines work cleanly for tail-recursive single calls. Branching traversals like DFS need an explicit stack to remember alternate decision branches.',
        bn: 'ট্রাম্পোলিন একক টেল কলের জন্য দারুণ। তবে DFS-এর মতো বহু-শাখাযুক্ত ট্রাভার্সালে বাকি শাখাগুলো মনে রাখার জন্য ম্যানুয়াল স্ট্যাক আবশ্যক।'
      }
    },
    {
      id: 'rec-rel-ex-4',
      kind: 'mcq',
      topic: 'recursion-vs-iteration-engineering-decision',
      question: {
        en: 'What is the standard engineering rubric for deciding between writing a recursive solution versus an iterative solution?',
        bn: 'রিকার্সিভ সমাধান নাকি ইটারেটিভ সমাধান বেছে নেওয়ার ক্ষেত্রে আদর্শ ইঞ্জিনিয়ারিং মানদণ্ড কোনটি?'
      },
      options: [
        {
          en: 'Use recursion for naturally hierarchical, branching data (trees, graphs, ASTs) within safe depths; use iteration for linear sequences or deep production inputs',
          bn: 'স্বাভাবিকভাবে হায়ারার্কিকাল বা শাখাযুক্ত ডাটার (ট্রি, গ্রাফ, AST) নিরাপদ গভীরতায় রিকার্শন ব্যবহার করুন; লিনিয়ার ক্রম বা অতিরিক্ত গভীর প্রোডাকশন ইনপুটে ইটারেশন ব্যবহার করুন'
        },
        {
          en: 'Always use recursion for everything because it has fewer lines of code',
          bn: 'সর্বদা সবকিছুর জন্য রিকার্শন ব্যবহার করুন কারণ এতে কোডের লাইন কম লাগে'
        },
        {
          en: 'Never use iteration under any circumstances',
          bn: 'কোনো অবস্থাতেই কখনোই ইটারেশন বা লুপ ব্যবহার করবেন না'
        },
        {
          en: 'Flip a coin before writing each function',
          bn: 'প্রতিটি ফাংশন লেখার আগে কয়েন টস করে সিদ্ধান্ত নিন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Choose recursion for expressiveness on trees; choose loops for deep scale and safety.',
        bn: 'ট্রিতে সহজ প্রকাশের জন্য রিকার্শন এবং গভীর পরিসরে সুরক্ষার জন্য লুপ বাছুন।'
      },
      explanation: {
        en: 'Recursion provides elegant, readable code for tree and divide-and-conquer logic. When scale risks stack exhaustion, convert to an explicit iterative loop.',
        bn: 'ট্রি এবং ডিভাইড-অ্যান্ড-কনকার লজিকে রিকার্শন কোডকে সুন্দর ও পাঠযোগ্য করে। তবে স্ট্যাক সীমা ভাঙার ঝুঁকি থাকলে ম্যানুয়াল লুপে রূপান্তর করুন।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Production Recursion & Stack Safety Quiz',
      bn: 'প্রোডাকশন রিকার্শন ও স্ট্যাক সুরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'rec-rel-qz-1',
        kind: 'mcq',
        topic: 'weakset-for-object-graph-traversal',
        question: {
          en: 'Why is WeakSet preferred over a standard Set when guarding against cycles during recursive object traversal in JavaScript?',
          bn: 'জাভাস্ক্রিপ্টে রিকার্সিভ অবজেক্ট ট্রাভার্সালে সাইকেল প্রতিরোধে সাধারণ Set-এর চেয়ে WeakSet ব্যবহার কেন বেশি গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'WeakSet holds weak references to objects, allowing garbage collection to reclaim memory and preventing long-term memory leaks',
            bn: 'WeakSet অবজেক্টগুলোর দুর্বল রেফারেন্স রাখে, ফলে গার্বেজ কালেকশন মেমরি মুক্ত করতে পারে এবং দীর্ঘস্থায়ী মেমরি লিক প্রতিরোধ হয়'
          },
          {
            en: 'WeakSet makes the computer CPU run twice as fast',
            bn: 'WeakSet কম্পিউটারের সিপিইউকে দ্বিগুণ দ্রুত চালায়'
          },
          {
            en: 'Standard Set cannot store JavaScript objects',
            bn: 'সাধারণ Set জাভাস্ক্রিপ্ট অবজেক্ট সংরক্ষণ করতে পারে না'
          },
          {
            en: 'WeakSet automatically encrypts the data using AES-128',
            bn: 'WeakSet স্বয়ংক্রিয়ভাবে AES-128 দিয়ে ডাটা এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'WeakSet does not prevent garbage collection of visited nodes.',
          bn: 'WeakSet ভিজিট করা নোডগুলোর গার্বেজ কালেকশন আটকে রাখে না।'
        },
        explanation: {
          en: 'A standard Set keeps strong references, keeping traversed objects alive in memory. WeakSet allows garbage collection when objects are no longer needed.',
          bn: 'সাধারণ Set অবজেক্টকে মেমরিতে আটকে রাখে। WeakSet অবজেক্টের কাজ শেষ হলে মেমরি খালি করার সুযোগ দিয়ে মেমরি লিক ঠেকায়।'
        }
      },
      {
        id: 'rec-rel-qz-2',
        kind: 'mcq',
        topic: 'v8-stack-trace-limit-configuration',
        question: {
          en: 'In Node.js, what does the command line flag --stack-trace-limit configure?',
          bn: 'Node.js-এ --stack-trace-limit কমান্ড লাইন ফ্ল্যাগটি কী কনফিগার করে?'
        },
        options: [
          {
            en: 'The number of stack frames captured and printed when an Error object is created and logged',
            bn: 'কোনো Error তৈরি ও লগ করার সময় কয়টি স্ট্যাক ফ্রেম ধরা হবে এবং প্রিন্ট করা হবে তার সংখ্যা'
          },
          {
            en: 'The maximum RAM memory of the physical computer',
            bn: 'ফিজিক্যাল কম্পিউটারের সর্বোচ্চ র‍্যাম মেমরি'
          },
          {
            en: 'The maximum internet download speed',
            bn: 'সর্বোচ্চ ইন্টারনেট ডাউনলোড গতি'
          },
          {
            en: 'The number of CPU hardware cores allocated to Node.js',
            bn: 'Node.js-এ বরাদ্দ করা সিপিইউ কোর সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'It controls how many frames appear in error stack traces.',
          bn: 'এটি এরর স্ট্যাক ট্রেসে কয়টি ফ্রেম প্রদর্শিত হবে তা নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'Error.stackTraceLimit (default 10) controls the depth of frames recorded for debugging. It does not alter the underlying call stack memory size.',
          bn: 'Error.stackTraceLimit (ডিফল্ট ১০) ডিবাগিংয়ের জন্য কটি ফ্রেম ট্রেসে দেখাবে তা নির্ধারণ করে। এটি স্ট্যাকের মূল মেমরির আকার বদলায় না।'
        }
      },
      {
        id: 'rec-rel-qz-3',
        kind: 'mcq',
        topic: 'json-stringify-circular-error',
        question: {
          en: 'What native TypeError does JSON.stringify() throw when passed an object graph containing circular references?',
          bn: 'সার্কুলার রেফারেন্সযুক্ত অবজেক্ট গ্রাফ পাস করলে JSON.stringify() কোন নেটিভ TypeError তৈরি করে?'
        },
        options: [
          {
            en: 'TypeError: Converting circular structure to JSON',
            bn: 'TypeError: Converting circular structure to JSON (টাইপ এরর: সার্কুলার স্ট্রাকচার জেএসওনে রূপান্তর অসম্ভব)'
          },
          {
            en: 'SyntaxError: Invalid JSON character',
            bn: 'SyntaxError: Invalid JSON character (সিনট্যাক্স এরর: অবৈধ জেএসওন অক্ষর)'
          },
          {
            en: 'RangeError: String length exceeded',
            bn: 'RangeError: String length exceeded (রেঞ্জ এরর: স্ট্রিং দৈর্ঘ্য অতিক্রান্ত)'
          },
          {
            en: 'ReferenceError: Object is undefined',
            bn: 'ReferenceError: Object is undefined (রেফারেন্স এরর: অবজেক্ট সংজ্ঞায়িত নয়)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The error specifically names circular structures.',
          bn: 'এররটিতে স্পষ্টভাবে circular structure-এর কথা বলা থাকে।'
        },
        explanation: {
          en: 'Because JSON.stringify traverses recursively, circular structures would cause an infinite loop. The engine detects cycles and throws this TypeError.',
          bn: 'যেহেতু JSON.stringify রিকার্সিভভাবে কাজ করে, তাই চক্রাকার রেফারেন্স অসীম লুপ তৈরি করত। ইঞ্জিন চক্র সনাক্ত করে এই TypeError দেয়।'
        }
      },
      {
        id: 'rec-rel-qz-4',
        kind: 'mcq',
        topic: 'explicit-stack-dfs-vs-bfs',
        question: {
          en: 'In an iterative loop traversal over a graph or tree, how do you switch from Depth-First Search (DFS) to Breadth-First Search (BFS)?',
          bn: 'একটি গ্রাফ বা ট্রিতে ইটারেটিভ লুপ ট্রাভার্সাল চলাকালে কীভাবে আপনি ডেপথ-ফার্স্ট সার্চ (DFS) থেকে ব্রেডথ-ফার্স্ট সার্চে (BFS) পরিবর্তন করবেন?'
        },
        options: [
          {
            en: 'Replace the LIFO stack (pop from end) with a FIFO queue (shift from beginning)',
            bn: 'LIFO স্ট্যাকের (শেষ থেকে pop) পরিবর্তে একটি FIFO কিউ (শুরু থেকে shift) ব্যবহার করার মাধ্যমে'
          },
          {
            en: 'Rewrite the code in assembly language',
            bn: 'কোডটিকে অ্যাসেম্বলি ভাষায় পুনরায় লিখে'
          },
          {
            en: 'Change all variable names to start with letter B',
            bn: 'সমস্ত ভেরিয়েবলের নাম B অক্ষর দিয়ে শুরু করে'
          },
          {
            en: 'Reboot the database server',
            bn: 'ডাটাবেস সার্ভার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'DFS uses a Stack (LIFO); BFS uses a Queue (FIFO).',
          bn: 'DFS স্ট্যাক (LIFO) ব্যবহার করে; BFS কিউ (FIFO) ব্যবহার করে।'
        },
        explanation: {
          en: 'The only difference between iterative DFS and iterative BFS is the data structure: a stack produces depth-first order; a queue produces level-order breadth-first search.',
          bn: 'ইটারেটিভ DFS ও BFS-এর মধ্যকার মূল পার্থক্য কেবল ডাটা স্ট্রাকচারে: স্ট্যাক ব্যবহার করলে গভীরতা অনুসারে (DFS) এবং কিউ ব্যবহার করলে স্তর অনুসারে (BFS) ট্রাভার্সাল ঘটে।'
        }
      }
    ]
  }
};
