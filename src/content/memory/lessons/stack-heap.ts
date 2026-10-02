import type { Lesson } from '../../../lib/types';

export const StackHeapLesson: Lesson = {
  slug: 'stack-heap',
  tech: 'memory',
  title: {
    en: 'Stack vs Heap: Memory Allocation Internals, Pointers & CPU Stack Frames',
    bn: 'স্ট্যাক বনাম হিপ: মেমোরি অ্যালোকেশন মেকানিজম, পয়েন্টার এবং সিপিইউ স্ট্যাক ফ্রেম'
  },
  summary: {
    en: 'Master the architectural distinction between the Stack and the Heap in modern software runtimes. Understand how CPU hardware registers enable sub-nanosecond, LIFO stack allocation for local primitives and function return addresses. Explore how the Heap provides dynamic memory managed by runtime allocators, and diagnose the true root causes of Stack Overflow and Heap Exhaustion.',
    bn: 'আধুনিক সফটওয়্যারের রানটাইমে স্ট্যাক এবং হিপ মেমোরির মৌলিক আর্কিটেকচারাল পার্থক্য গভীরভাবে আয়ত্ত করুন। কীভাবে সিপিইউ হার্ডওয়্যার রেজিস্টার লোকাল ভেরিয়েবল ও ফাংশন রিটার্ন ঠিকানার জন্য ১ ন্যানোসেকেন্ডের কম সময়ে LIFO স্ট্যাক বরাদ্দ দেয় তা বুঝুন। রানটাইম অ্যালোকেটর কীভাবে হিপে ডায়নামিক মেমোরি পরিচালনা করে তা অন্বেষণ করুন এবং স্ট্যাক ওভারফ্লো ও হিপ ঘাটতির মূল কারণ নির্ণয় করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'two-hemispheres-stack-vs-heap',
      text: {
        en: 'The Two Hemispheres of Process Memory: Stack versus Heap',
        bn: 'প্রসেস মেমোরির দুটি গোলার্ধ: স্ট্যাক বনাম হিপ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Every running thread in a modern operating system is provisioned with a dedicated Call Stack, typically 8 Megabytes in size on standard 64-bit operating systems. The stack operates as a contiguous Last-In, First-Out (LIFO) memory structure tightly coupled to CPU hardware registers.',
        bn: 'আধুনিক অপারেটিং সিস্টেমে প্রতিটি চলমান থ্রেডকে একটি নিবেদিত কল স্ট্যাক বরাদ্দ দেওয়া হয়, যা সাধারণ ৬৪-বিট অপারেটিং সিস্টেমে সাধারণত ৮ মেগাবাইট আকারের হয়ে থাকে। স্ট্যাক একটি অবিচ্ছিন্ন লাস্ট-ইন, ফার্স্ট-আউট (LIFO) মেমোরি কাঠামো হিসেবে কাজ করে যা সিপিইউ হার্ডওয়্যার রেজিস্টারের সাথে সরাসরি সংযুক্ত।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Allocating memory on the stack requires zero algorithmic searching: the CPU simply decrements the Stack Pointer (RSP) register by N bytes. When a function finishes, the CPU instantly adds N bytes back to RSP. Because memory is always freed in reverse order of allocation, stack operations achieve sub-nanosecond execution with 0 percent fragmentation.',
        bn: 'স্ট্যাকে মেমোরি বরাদ্দ করতে কোনো অ্যালগরিদমিক অনুসন্ধানের প্রয়োজন হয় না: সিপিইউ কেবল স্ট্যাক পয়েন্টার (RSP) রেজিস্টারকে N বাইট কমিয়ে দেয়। ফাংশনের কাজ শেষ হলে সিপিইউ নিমেষেই RSP রেজিস্টারে N বাইট ফিরিয়ে যোগ করে দেয়। যেহেতু বরাদ্দের ঠিক বিপরীত ক্রমে মেমোরি মুক্ত হয়, তাই স্ট্যাক অপারেশন ০ শতাংশ ফ্র্যাগমেন্টেশনের সাথে ১ ন্যানোসেকেন্ডেরও কম সময়ে কাজ সম্পন্ন করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'However, data structures with dynamic lifespans or unknown compile-time sizes cannot live on the stack because their lifetime must outlast the function that created them. These objects are stored in the Heap. The heap is a large pool of dynamic memory managed by runtime memory allocators (such as glibc ptmalloc or jemalloc) that maintain free lists and metadata headers.',
        bn: 'তবে যেসব ডাটা স্ট্রাকচারের জীবনকাল পরিবর্তনশীল বা যাদের আকার কম্পাইল করার সময় জানা থাকে না, সেগুলোকে স্ট্যাকে রাখা যায় না কারণ ফাংশন শেষ হওয়ার পরেও সেগুলোর মেমোরিতে টিকে থাকার প্রয়োজন হয়। এই অবজেক্টগুলোকে হিপে সংরক্ষণ করা হয়। হিপ হলো ডায়নামিক মেমোরির একটি বিশাল ভাণ্ডার যা রানটাইম মেমোরি অ্যালোকেটর দ্বারা পরিচালিত হয় এবং ফ্রি লিস্ট ও মেটাডাটা হেডারের মাধ্যমে মুক্ত ও ব্যবহৃত মেমোরির হিসাব রাখে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Function Call & Stack Frame Setup',
            bn: '১. ফাংশন কল এবং স্ট্যাক ফ্রেম প্রস্তুতি'
          },
          text: {
            en: 'When Function A invokes Function B, the CPU pushes arguments and the 64-bit instruction return address onto the stack. It then establishes a new Base Pointer (RBP) to anchor the stack frame for local variables.',
            bn: 'যখন ফাংশন A অন্য একটি ফাংশন B কে কল করে, তখন সিপিইউ আর্গুমেন্ট এবং ৬৪-বিট নির্দেশনার রিটার্ন ঠিকানা স্ট্যাকে পুশ করে। এরপর এটি লোকাল ভেরিয়েবলগুলোর জন্য একটি নতুন বেস পয়েন্টার (RBP) স্থাপন করে স্ট্যাক ফ্রেম তৈরি করে।'
          },
        },
        {
          title: {
            en: '2. Stack Primitive Storage',
            bn: '২. স্ট্যাকে প্রিমিটিভ ভেরিয়েবল সংরক্ষণ'
          },
          text: {
            en: 'Local primitive values (such as 32-bit integers, 64-bit floats, and memory pointers) are written directly into the thread stack frame at fixed offsets relative to RBP.',
            bn: 'লোকাল প্রিমিটিভ ডাটা ( যেমন ৩২-বিট ইন্টিজার, ৬৪-বিট ফ্লোট এবং মেমোরি পয়েন্টার ) সরাসরি থ্রেডের স্ট্যাক ফ্রেমে RBP সাপেক্ষে নির্দিষ্ট অফসেটে সংরক্ষিত হয়।'
          },
        },
        {
          title: {
            en: '3. Heap Allocation & Pointer Indirection',
            bn: '৩. হিপে বরাদ্দ এবং পয়েন্টার ইনডাইরেকশন'
          },
          text: {
            en: 'When the code creates a dynamic array or object instance, the heap allocator reserves bytes in the heap and returns a 64-bit memory address. The 8-byte pointer resides on the fast stack, while the large payload resides on the heap.',
            bn: 'কোড যখন কোনো ডায়নামিক অ্যারে বা অবজেক্ট তৈরি করে, তখন হিপ অ্যালোকেটর হিপ থেকে কাঙ্ক্ষিত বাইট বরাদ্দ করে একটি ৬৪-বিট মেমোরি ঠিকানা প্রদান করে। ৮-বাইটের পয়েন্টারটি দ্রুত স্ট্যাকে থাকে, আর মূল ভারী ডাটাটি হিপ মেমোরিতে অবস্থান করে।'
          },
        },
        {
          title: {
            en: '4. Automatic Frame Deallocation',
            bn: '৪. স্বয়ংক্রিয় ফ্রেম মেমোরি মুক্তি'
          },
          text: {
            en: 'When Function B returns, the CPU resets RSP to RBP and pops the previous base pointer. In a single clock cycle, the entire stack frame disappears without running garbage collection.',
            bn: 'ফাংশন B-এর কাজ শেষ হলে সিপিইউ নিমেষেই RSP-কে RBP-এর মানে ফিরিয়ে এনে পূর্বের বেস পয়েন্টার রিস্টোর করে। মাত্র ১ টি ক্লক সাইকেলেই কোনো গার্বেজ কালেকশন ছাড়াই সম্পূর্ণ স্ট্যাক ফ্রেমটি শূন্য হয়ে যায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Virtual Process Memory Layout: Downward Stack Growth vs Upward Heap Allocation',
        bn: 'ভার্চুয়াল প্রসেস মেমোরি লেআউট: নিচের দিকে স্ট্যাক বৃদ্ধি বনাম ওপরের দিকে হিপ বরাদ্দ'
      },
      svg: `<svg viewBox="0 0 840 450" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Process address space showing stack growing downwards and heap growing upwards with pointers">
  <rect width="840" height="450" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PROCESS VIRTUAL ADDRESS SPACE: STACK VS HEAP</text>
  
  <!-- Left Side: Stack Diagram (Grows Downward from High to Low) -->
  <g transform="translate(30, 50)">
    <rect width="240" height="360" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="120" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CALL STACK (High Memory)</text>
    <text x="120" y="38" fill="#64748b" font-size="9" text-anchor="middle">Starts at 0x7FFF_FFFF</text>
    
    <!-- Frame 1: main -->
    <rect x="15" y="48" width="210" height="70" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="120" y="68" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Stack Frame: main()</text>
    <text x="120" y="85" fill="#cbd5e1" font-size="9" text-anchor="middle">Local: count = 42</text>
    <text x="120" y="100" fill="#cbd5e1" font-size="9" text-anchor="middle">Pointer: userPtr -> 0x010040</text>
    
    <!-- Frame 2: processUser -->
    <rect x="15" y="125" width="210" height="75" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="120" y="145" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Stack Frame: processUser()</text>
    <text x="120" y="162" fill="#cbd5e1" font-size="9" text-anchor="middle">Return Addr (to main)</text>
    <text x="120" y="177" fill="#cbd5e1" font-size="9" text-anchor="middle">Local: bufferPtr -> 0x010880</text>
    <text x="120" y="192" fill="#cbd5e1" font-size="9" text-anchor="middle">Saved RBP</text>
    
    <!-- Growth indicator -->
    <text x="120" y="230" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">GROWTH: DOWNWARDS v</text>
    <line x1="120" y1="240" x2="120" y2="280" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>
    <polygon points="115,280 120,290 125,280" fill="#f59e0b"/>
    
    <!-- Guard page -->
    <rect x="15" y="305" width="210" height="40" rx="4" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="120" y="325" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">4KB GUARD PAGE (Unmapped)</text>
    <text x="120" y="338" fill="#fca5a5" font-size="8" text-anchor="middle">Triggers SIGSEGV Stack Overflow</text>
  </g>
  
  <!-- Middle: Comparison Matrix -->
  <g transform="translate(300, 50)">
    <rect width="240" height="360" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
    <text x="120" y="26" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">HARDWARE COMPARISON</text>
    
    <rect x="15" y="45" width="210" height="70" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="120" y="68" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">STACK SPEED</text>
    <text x="120" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">1 CPU Clock Cycle</text>
    <text x="120" y="103" fill="#cbd5e1" font-size="9" text-anchor="middle">RSP register bump only</text>
    
    <rect x="15" y="125" width="210" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="120" y="148" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">HEAP SPEED</text>
    <text x="120" y="168" fill="#cbd5e1" font-size="10" text-anchor="middle">10 - 100 ns Latency</text>
    <text x="120" y="183" fill="#cbd5e1" font-size="9" text-anchor="middle">Free list bin search &amp; lock</text>
    
    <rect x="15" y="205" width="210" height="65" rx="6" fill="#0f172a" stroke="#a855f7"/>
    <text x="120" y="228" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">TYPICAL LIMITS</text>
    <text x="120" y="248" fill="#cbd5e1" font-size="9" text-anchor="middle">Stack: 8 MB per Thread</text>
    <text x="120" y="261" fill="#cbd5e1" font-size="9" text-anchor="middle">Heap: Bound only by RAM &amp; Swap</text>
    
    <rect x="15" y="280" width="210" height="65" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="120" y="303" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">FAILURE MODES</text>
    <text x="120" y="323" fill="#cbd5e1" font-size="9" text-anchor="middle">Stack: Infinite Recursion Overflow</text>
    <text x="120" y="336" fill="#cbd5e1" font-size="9" text-anchor="middle">Heap: Out of Memory (OOM Killer)</text>
  </g>
  
  <!-- Right Side: Heap Diagram (Grows Upward from Low to High) -->
  <g transform="translate(570, 50)">
    <rect width="240" height="360" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="120" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">DYNAMIC HEAP (Low Memory)</text>
    <text x="120" y="38" fill="#64748b" font-size="9" text-anchor="middle">Starts at 0x0100_0000</text>
    
    <!-- Heap Chunk 1 -->
    <rect x="15" y="55" width="210" height="55" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="120" y="75" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">0x010040: User Object (256 B)</text>
    <text x="120" y="93" fill="#cbd5e1" font-size="9" text-anchor="middle">Payload: { name: 'Alice', id: 7 }</text>
    
    <!-- Heap Chunk 2 -->
    <rect x="15" y="118" width="210" height="55" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="120" y="138" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">0x010880: Buffer Array (64 KB)</text>
    <text x="120" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">Payload: Raw Network Socket Data</text>
    
    <!-- Freed Gap / Fragmentation -->
    <rect x="15" y="181" width="210" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-dasharray="3 3"/>
    <text x="120" y="206" fill="#94a3b8" font-size="9" text-anchor="middle">[Freed Hole in Heap: 32 KB]</text>
    
    <!-- Heap Chunk 3 -->
    <rect x="15" y="229" width="210" height="50" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="120" y="249" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">0x019000: Texture Map (4 MB)</text>
    <text x="120" y="267" fill="#cbd5e1" font-size="9" text-anchor="middle">Payload: 3D Graphics Shader Image</text>
    
    <!-- Growth indicator -->
    <text x="120" y="305" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">GROWTH: UPWARDS ^</text>
    <line x1="120" y1="345" x2="120" y2="315" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/>
    <polygon points="115,318 120,310 125,318" fill="#10b981"/>
  </g>
  
  <!-- Pointer link line -->
  <path d="M 225 150 Q 390 100 585 105" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
  <polygon points="585,102 593,105 585,108" fill="#38bdf8"/>
</svg>`,
      caption: {
        en: 'The Call Stack expands downward through hardware registers, while the Heap expands upward via dynamic runtime memory allocations.',
        bn: 'কল স্ট্যাক হার্ডওয়্যার রেজিস্টারের মাধ্যমে নিচের দিকে বৃদ্ধি পায়, আর হিপ ডায়নামিক রানটাইম মেমোরি বরাদ্দের মাধ্যমে ওপরের দিকে প্রসারিত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'allocation-simulation-and-limits',
      text: {
        en: 'Memory Allocation Lifecycle & Stack Overflow Simulation',
        bn: 'মেমোরি বরাদ্দের জীবনচক্র এবং স্ট্যাক ওভারফ্লো সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When a function recurses infinitely without reaching a base termination case, each call allocates a new stack frame. Eventually, the stack pointer collides with the operating system guard page boundary. The following deterministic simulator executes call frames, performs heap allocations, and catches the exact moment recursion exhausts stack capacity.',
        bn: 'কোনো ফাংশন যখন কোনো বেস শর্ত ছাড়া অসীমভাবে পুনরাবৃত্তি (Recursion) করতে থাকে, তখন প্রতিটি কল স্ট্যাকে একটি নতুন ফ্রেম বরাদ্দ করে। এক পর্যায়ে স্ট্যাক পয়েন্টার অপারেটিং সিস্টেমের গার্ড পেজ সীমানায় ধাক্কা খায়। নিচের সিমুলেটরটি কল ফ্রেম তৈরি করে, হিপে ডাটা বরাদ্দ করে এবং রিকার্শন ঠিক কখন স্ট্যাকের সীমা অতিক্রম করে তা নিখুঁতভাবে শনাক্ত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'stack-heap-runtime-simulator.js',
      code: `// Deterministic Stack Frame & Dynamic Heap Allocation Simulator
// Demonstrates LIFO stack behavior, heap pointer mapping, and stack overflow

class MemoryRuntime {
  constructor(stackCapacityKB = 8192) {
    this.stackBase = 0x7FFF0000;
    this.stackPointer = 0x7FFF0000; // RSP register
    this.stackLimit = 0x7FFF0000 - (stackCapacityKB * 1024); // Guard page boundary
    this.heapPointer = 0x01000000;
    this.stackFrames = [];
    this.heapObjects = new Map();
  }

  // 1 CPU cycle stack push
  enterFunction(name, localBytes = 32) {
    const frameSize = localBytes + 16; // 16 bytes for return address + saved RBP
    const nextRsp = this.stackPointer - frameSize;

    if (nextRsp <= this.stackLimit) {
      throw new Error('STACK_OVERFLOW: Thread stack hit OS guard page boundary at 0x' + nextRsp.toString(16));
    }

    const frame = {
      name,
      rbp: this.stackPointer,
      rsp: nextRsp,
      localBytes
    };

    this.stackFrames.push(frame);
    this.stackPointer = nextRsp;
    return frame;
  }

  // 1 CPU cycle stack pop
  exitFunction() {
    const poppedFrame = this.stackFrames.pop();
    if (poppedFrame) {
      this.stackPointer = poppedFrame.rbp; // Instant stack reclamation
    }
    return poppedFrame;
  }

  // Heap allocator: finds chunk, prepends 16-byte metadata header
  allocateHeap(payloadBytes) {
    const headerBytes = 16;
    const address = this.heapPointer;
    this.heapPointer += payloadBytes + headerBytes;
    this.heapObjects.set(address, { size: payloadBytes, allocatedAt: Date.now() });
    return address;
  }
}

const runtime = new MemoryRuntime(128); // 128KB stack for quick demonstration

console.log('=== Step 1: Standard Function Execution & Heap Allocation ===');
runtime.enterFunction('main', 64);
const userAddress = runtime.allocateHeap(512); // Allocates 512 bytes on heap
console.log('main() active. Stack RSP:', '0x' + runtime.stackPointer.toString(16));
console.log('Heap object created at  :', '0x' + userAddress.toString(16));

runtime.enterFunction('calculateInvoice', 128);
console.log('calculateInvoice() added. Stack depth:', runtime.stackFrames.length);

runtime.exitFunction();
console.log('calculateInvoice() returned. Stack depth:', runtime.stackFrames.length);

console.log('\\n=== Step 2: Triggering Stack Overflow via Infinite Recursion ===');
try {
  let depth = 0;
  while (true) {
    depth++;
    runtime.enterFunction('recursiveLoop_' + depth, 1024);
  }
} catch (err) {
  console.log('Kernel Exception Caught: ' + err.message);
  console.log('Stack successfully defended: Operating system stopped execution before memory corruption occurred.');
}`,
      caption: {
        en: 'The simulation traces stack frame allocations, heap references, and OS guard page intervention upon stack exhaustion.',
        bn: 'সিমুলেশনটি স্ট্যাক ফ্রেম বরাদ্দ, হিপ রেফারেন্স এবং স্ট্যাক সীমা শেষ হলে ওএস গার্ড পেজের তাৎক্ষণিক হস্তক্ষেপ প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Guard Pages: The Hardware Shield Against Silent Memory Corruption',
        bn: 'গার্ড পেজ: মেমোরি ক্ষতি প্রতিরোধের হার্ডওয়্যার সুরক্ষা কবচ'
      },
      text: {
        en: 'Why does excessive recursion produce a clean Stack Overflow exception rather than silently corrupting adjacent heap variables or the operating system kernel? Operating system kernels place an unmapped 4KB memory page—called a Guard Page—directly at the end of every thread stack. If deep recursion pushes the stack pointer into this forbidden page, the CPU Memory Management Unit (MMU) instantly generates a page permission fault (SIGSEGV), terminating the thread before it can overwrite adjacent memory.',
        bn: 'অতিরিক্ত রিকার্শনের কারণে পাশের হিপ ভেরিয়েবল বা কার্নেলের ডাটা নষ্ট না হয়ে কেন একটি স্পষ্ট স্ট্যাক ওভারফ্লো এরর দেখা যায়? প্রতিটি থ্রেড স্ট্যাকের একেবারে শেষ প্রান্তে অপারেটিং সিস্টেম কার্নেল একটি ৪ কিলোবাইট সাইজের অননুমোদিত মেমোরি পেজ রাখে, যাকে গার্ড পেজ (Guard Page) বলা হয়। অনিয়ন্ত্রিত রিকার্শন যখন স্ট্যাক পয়েন্টারকে সেই নিষিদ্ধ পেজের সীমানায় ঠেলে দেয়, তখন সিপিইউর MMU তৎক্ষণাৎ একটি পেজ পারমিশন ফল্ট (SIGSEGV) তৈরি করে থ্রেডটিকে ক্র্যাশ করায়, যার ফলে পাশের কোনো ডাটা মোটেও ক্ষতিগ্রস্ত হয় না।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-stack-ex-1',
      kind: 'predict',
      question: {
        en: 'On a standard 64-bit CPU architecture, how many bytes of stack memory does an 8-byte pointer occupy? (8). Type the number.',
        bn: 'একটি স্ট্যান্ডার্ড ৬৪-বিট সিপিইউ আর্কিটেকচারে একটি ৮-বাইটের মেমোরি পয়েন্টার স্ট্যাকে কত বাইট জায়গা দখল করে? ( ৮ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '8',
      hint: {
        en: 'On a 64 bit architecture, a pointer address requires 8 bytes.',
        bn: '৬৪ বিট আর্কিটেকচারে ১ টি পয়েন্টার অ্যাড্রেস ঠিক ৮ বাইট জায়গা দখল করে।'
      },
      explanation: {
        en: 'A 64-bit memory address occupies exactly 8 bytes of stack memory.',
        bn: 'একটি ৬৪-বিট মেমোরি ঠিকানা স্ট্যাকে ঠিক ৮ বাইট মেমোরি দখল করে।'
      },
    },
    {
      id: 'mem-stack-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is stack memory allocation orders of magnitude faster than heap memory allocation?',
        bn: 'হিপ মেমোরি বরাদ্দের তুলনায় স্ট্যাক মেমোরি বরাদ্দ কেন বহুগুণ দ্রুত সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'Stack allocation merely adjusts a single CPU register (RSP) in 1 clock cycle without searching free lists or acquiring locks',
          bn: 'স্ট্যাক বরাদ্দ কোনো ফ্রি লিস্ট খোঁজা বা লক নেওয়া ছাড়াই মাত্র ১ টি ক্লক সাইকেলে একটি সিপিইউ রেজিস্টার (RSP) পরিবর্তন করে',
        },
        {
          en: 'Because stack memory is physically colder than heap memory',
          bn: 'কারণ স্ট্যাক মেমোরি শারীরিক তাপমাত্রার দিক থেকে হিপের চেয়ে বেশি ঠান্ডা',
        },
        {
          en: 'Because the stack stores text as pictures rather than numbers',
          bn: 'কারণ স্ট্যাক যেকোনো টেক্সটকে সংখ্যার বদলে ছবি হিসেবে জমা রাখে',
        },
        {
          en: 'Because heap memory requires an active internet connection to allocate bytes',
          bn: 'কারণ হিপ মেমোরিতে ডাটা বরাদ্দ করতে সক্রিয় ইন্টারনেট সংযোগ প্রয়োজন হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Incrementing or decrementing the RSP pointer requires only one CPU instruction.',
        bn: 'RSP পয়েন্টার বাড়ানো বা কমানো মাত্র একটি সিপিইউ নির্দেশের মাধ্যমেই সম্পন্ন হয়।',
      },
      explanation: {
        en: 'Stack allocation is a simple pointer subtraction, executing in a single clock cycle without heap metadata overhead.',
        bn: 'স্ট্যাক বরাদ্দ মূলত সাধারণ পয়েন্টার বিয়োগ, যা কোনো মেটাডাটা ঝামেলা ছাড়াই ১ ক্লক সাইকেলে সম্পন্ন হয়।'
      },
    },
    {
      id: 'mem-stack-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the architectural purpose of an operating system Guard Page located at the end of a thread stack?',
        bn: 'একটি থ্রেড স্ট্যাকের শেষ প্রান্তে স্থাপিত অপারেটিং সিস্টেম গার্ড পেজের আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It is an unmapped memory page that triggers an immediate segmentation fault when recursion overflows, preventing silent corruption of adjacent heap or kernel memory',
          bn: 'এটি একটি অননুমোদিত মেমোরি পেজ যা রিকার্শন সীমা ছাড়ালে তাৎক্ষণিক সেগমেন্টেশন ফল্ট ঘটায়, যাতে পাশের হিপ বা কার্নেলের মেমোরি নষ্ট না হয়',
        },
        {
          en: 'It stores the password of the computer administrator in plain text',
          bn: 'এটি কম্পিউটার অ্যাডমিনিস্ট্রেটরের পাসওয়ার্ড প্লেইন টেক্সট হিসেবে সংরক্ষণ করে',
        },
        {
          en: 'It encrypts all audio signals sent to the computer speaker',
          bn: 'এটি কম্পিউটারের স্পিকারে পাঠানো সমস্ত অডিও সিগন্যাল এনক্রিপ্ট করে',
        },
        {
          en: 'It acts as an automatic spell checker for source code comments',
          bn: 'এটি সোর্স কোডের মন্তব্যের জন্য একটি স্বয়ংক্রিয় বানান পরীক্ষক হিসেবে কাজ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Triggering an immediate segmentation fault to protect adjacent memory from corruption.',
        bn: 'পাশের মেমোরি রক্ষা করতে সাথে সাথে সেগমেন্টেশন ফল্ট তৈরি করা।',
      },
      explanation: {
        en: 'A Guard Page has zero read/write permissions. If a thread exceeds its stack limit and touches the guard page, the MMU halts the process.',
        bn: 'গার্ড পেজে কোনো রিড বা রাইট পারমিশন থাকে না। থ্রেড এর সীমা স্পর্শ করলে MMU তাৎক্ষণিকভাবে প্রসেস থামিয়ে দেয়।'
      },
    },
    {
      id: 'mem-stack-ex-4',
      kind: 'predict',
      question: {
        en: 'If a default Linux thread stack size limit is configured to 8 Megabytes, how many megabytes is that stack limit? (8). Type the number.',
        bn: 'একটি সাধারণ লিনাক্স থ্রেড স্ট্যাকের সীমা যদি ৮ মেগাবাইট নির্ধারণ করা থাকে, তবে সেই মেমোরি সীমা কত মেগাবাইট? ( ৮ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '8',
      hint: {
        en: 'Standard Linux thread stack limit is 8 Megabytes.',
        bn: 'স্ট্যান্ডার্ড লিনাক্স থ্রেড স্ট্যাক সীমা হলো ৮ মেগাবাইট।'
      },
      explanation: {
        en: 'Default stack size across most Linux distributions is 8MB (8192 KB).',
        bn: 'অধিকাংশ লিনাক্স ডিস্ট্রিবিউশনে ডিফল্ট স্ট্যাক সাইজ হলো ৮ মেগাবাইট ( ৮১৯২ কিলোবাইট )।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Stack vs Heap Memory Quiz',
      bn: 'স্ট্যাক বনাম হিপ মেমোরি কুইজ'
    },
    questions: [
      {
        id: 'mem-stack-qz-1',
        kind: 'mcq',
        topic: 'local-variable-deallocation-stack',
        question: {
          en: 'What occurs to local primitive variables allocated inside a function when that function finishes execution and returns?',
          bn: 'একটি ফাংশনের ভেতরে বরাদ্দকৃত লোকাল প্রিমিটিভ ভেরিয়েবলগুলোর কী ঘটে যখন ফাংশনটির কাজ শেষ হয়ে রিটার্ন করে?'
        },
        options: [
          {
            en: 'They are instantly reclaimed in 1 clock cycle as the CPU pops the stack frame and restores the previous base pointer (RBP)',
            bn: 'সিপিইউ স্ট্যাক ফ্রেম পপ করে পূর্বের বেস পয়েন্টার (RBP) ফিরিয়ে আনার সাথে সাথেই মাত্র ১ টি ক্লক সাইকেলে সেগুলো মেমোরি থেকে মুছে যায়',
          },
          {
            en: 'They remain permanently in RAM until the computer is rebooted',
            bn: 'কম্পিউটার রিবুট না করা পর্যন্ত সেগুলো স্থায়ীভাবে র‍্যামে থেকে যায়',
          },
          {
            en: 'They are written onto the physical solid-state drive as temporary files',
            bn: 'সেগুলো অস্থায়ী ফাইল হিসেবে ফিজিক্যাল সলিড-স্টেট ড্রাইভে লিখে রাখা হয়',
          },
          {
            en: 'They are sent across the local Wi-Fi router to the internet cloud',
            bn: 'সেগুলো লোকাল ওয়াই-ফাই রাউটার দিয়ে ইন্টারনেটের ক্লাউডে পাঠিয়ে দেওয়া হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Resetting the stack pointer instantaneously deallocates the entire frame.',
          bn: 'স্ট্যাক পয়েন্টার রিসেট করার সাথে সাথে পুরো ফ্রেম এক নিমেষেই মুছে যায়।',
        },
        explanation: {
          en: 'Stack frames are deallocated immediately upon function return by moving the stack pointer, requiring no garbage collector sweeps.',
          bn: 'ফাংশন রিটার্ন করার সাথে সাথে স্ট্যাক পয়েন্টার সরিয়ে ফ্রেম খালি করা হয়, ফলে কোনো গার্বেজ কালেকশনের প্রয়োজন পড়ে না।'
        },
      },
      {
        id: 'mem-stack-qz-2',
        kind: 'mcq',
        topic: 'pointer-indirection-location',
        question: {
          en: 'When a program executes an expression like "const user = new User()", where is the reference variable stored and where is the actual object data stored?',
          bn: 'যখন কোনো প্রোগ্রাম "const user = new User()" এক্সপ্রেশন চালায়, তখন রেফারেন্স ভেরিয়েবলটি কোথায় থাকে এবং আসল অবজেক্ট ডাটাটি কোথায় সংরক্ষিত হয়?'
        },
        options: [
          {
            en: 'The 8-byte pointer address variable is stored on the Stack, while the dynamic object payload is stored on the Heap',
            bn: '৮-বাইটের পয়েন্টার ঠিকানা নির্দেশক ভেরিয়েবলটি স্ট্যাকে থাকে, আর মূল ডায়নামিক অবজেক্ট ডাটাটি হিপে সংরক্ষিত হয়',
          },
          {
            en: 'The entire object is stored inside the CPU monitor display cable',
            bn: 'সম্পূর্ণ অবজেক্টটি সিপিইউ মনিটরের ডিসপ্লে কেবলের ভেতরে সংরক্ষিত হয়',
          },
          {
            en: 'The reference is stored in the cloud, while the object is stored in the keyboard',
            bn: 'রেফারেন্সটি ক্লাউডে থাকে আর অবজেক্টটি কিবোর্ডের ভেতরে সংরক্ষিত হয়',
          },
          {
            en: 'Both the reference and object are stored in the BIOS ROM chip permanently',
            bn: 'রেফারেন্স এবং অবজেক্ট দুটোই চিরতরে BIOS রম চিপে সংরক্ষিত থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The lightweight pointer lives on the stack; the dynamic payload lives on the heap.',
          bn: 'ছোট পয়েন্টারটি স্ট্যাকে অবস্থান করে এবং ডায়নামিক ডাটাটি হিপে জমা হয়।',
        },
        explanation: {
          en: 'Modern language runtimes store the 8-byte memory reference on the stack frame, which points to the dynamically sized object payload allocated on the heap.',
          bn: 'আধুনিক রানটাইমে ৮-বাইটের মেমোরি রেফারেন্স স্ট্যাক ফ্রেমে থাকে, যা হিপে বরাদ্দকৃত আসল অবজেক্টের ঠিকানাকে নির্দেশ করে।'
        },
      },
      {
        id: 'mem-stack-qz-3',
        kind: 'mcq',
        topic: 'stack-overflow-root-cause',
        question: {
          en: 'What is the direct technical cause of a Stack Overflow error in software development?',
          bn: 'সফটওয়্যার ডেভেলপমেন্টে স্ট্যাক ওভারফ্লো এররের প্রত্যক্ষ প্রযুক্তিগত কারণ কী?'
        },
        options: [
          {
            en: 'Uncontrolled deep or infinite recursion that continually pushes stack frames until the stack pointer breaches the reserved stack limit and touches the Guard Page',
            bn: 'অনিয়ন্ত্রিত গভীর বা অসীম রিকার্শন যা বারবার নতুন স্ট্যাক ফ্রেম পুশ করতে থাকে যতক্ষণ না স্ট্যাকের সীমা পেরিয়ে গার্ড পেজে ধাক্কা লাগে',
          },
          {
            en: 'Installing too many application icons on the desktop screen',
            bn: 'ডেস্কটপ স্ক্রিনে অতিরিক্ত সংখ্যক অ্যাপ্লিকেশনের আইকন যুক্ত করা',
          },
          {
            en: 'Downloading video files faster than 100 megabits per second',
            bn: 'প্রতি সেকেন্ডে ১০০ মেগাবিটের চেয়ে দ্রুত গতিতে ভিডিও ফাইল ডাউনলোড করা',
          },
          {
            en: 'Turning up the computer speaker volume past maximum level',
            bn: 'কম্পিউটার স্পিকারের সাউন্ড সর্বোচ্চ সীমার বেশি বাড়িয়ে দেওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Exhausting thread stack space through infinite function recursion.',
          bn: 'ফাংশনের অসীম রিকার্শনের মাধ্যমে থ্রেড স্ট্যাকের জায়গা নিঃশেষ করা।',
        },
        explanation: {
          en: 'Because thread stacks have fixed sizes (e.g. 8MB), infinite recursion exhausts stack memory and touches the guard page, causing a stack overflow crash.',
          bn: 'থ্রেড স্ট্যাকের সাইজ নির্দিষ্ট ( যেমন ৮ মেগাবাইট ) হওয়ায় অসীম রিকার্শন স্ট্যাক মেমোরি শেষ করে গার্ড পেজ স্পর্শ করে এবং ক্র্যাশ ঘটায়।'
        },
      },
      {
        id: 'mem-stack-qz-4',
        kind: 'mcq',
        topic: 'why-heap-is-necessary',
        question: {
          en: 'Why is it impossible for modern software systems to allocate all program data exclusively on the Stack?',
          bn: 'আধুনিক সফটওয়্যারের সমস্ত ডাটা কেবল স্ট্যাকেই বরাদ্দ করা কেন অসম্ভব?'
        },
        options: [
          {
            en: 'Stack variables must have compile-time known sizes and are destroyed when their enclosing function returns, making them incapable of holding dynamic, long-lived, or shared data',
            bn: 'স্ট্যাক ভেরিয়েবলের আকার কম্পাইলের সময় জানা থাকতে হয় এবং ফাংশন শেষ হলেই সেগুলো মুছে যায়, ফলে ডায়নামিক, দীর্ঘস্থায়ী বা শেয়ার্ড ডাটা ধারণে স্ট্যাক অক্ষম',
          },
          {
            en: 'Because the CPU stack can only hold letters from the alphabet A through M',
            bn: 'কারণ সিপিইউ স্ট্যাক কেবল বর্ণমালার A থেকে M পর্যন্ত অক্ষর রাখতে পারে',
          },
          {
            en: 'Because computer keyboards can only transmit 10 words per minute',
            bn: 'কারণ কম্পিউটার কিবোর্ড প্রতি মিনিটে কেবল ১০ টি শব্দ পাঠাতে পারে',
          },
          {
            en: 'Because stack memory stops working when the user turns off the room lights',
            bn: 'কারণ ঘরের বাতি নিভিয়ে দিলে স্ট্যাক মেমোরি কাজ করা বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Variable lifespans, unknown sizes, and cross-thread sharing require the Heap.',
          bn: 'পরিবর্তনশীল জীবনকাল, অজানা আকার এবং থ্রেডের মাঝে ডাটা শেয়ারিংয়ের জন্য হিপ অপরিহার্য।',
        },
        explanation: {
          en: 'The Heap allows objects to outlive the functions that created them and enables resizing dynamic collections like hash maps and vectors.',
          bn: 'হিপে থাকা অবজেক্ট ফাংশনের কাজ শেষ হওয়ার পরও বেঁচে থাকে এবং এটি ডায়নামিক হ্যাশম্যাপ ও ভেক্টরের আকার ইচ্ছেমতো বাড়ানোর সুযোগ দেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'pointers-refs',
    title: {
      en: 'Pointers, References & Direct Memory Addressing',
      bn: 'পয়েন্টার, রেফারেন্স এবং ডিরেক্ট মেমোরি অ্যাড্রেসিং'
    },
  },
};
