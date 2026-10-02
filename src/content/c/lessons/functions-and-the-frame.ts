import type { Lesson } from '../../../lib/types';

export const FunctionsAndTheFrameLesson: Lesson = {
  slug: 'functions-and-the-frame',
  tech: 'c',
  title: {
    en: 'Functions, Stack Frames & Calling Conventions — The Activation Record',
    bn: 'ফাংশন, স্ট্যাক ফ্রেম ও কলিং কনভেনশন — অ্যাক্টিভেশন রেকর্ড'
  },
  summary: {
    en: 'Functions in C form the fundamental modular building blocks of systems software, orchestrated at the CPU hardware level by call stack mechanics. When a function executes, the CPU creates an activation record called a stack frame. This frame preserves the caller return address, saves previous frame pointers (rbp), and reserves space for local scope variables. Under the modern System V AMD64 calling convention, the first 6 integer or pointer arguments pass through ultra-fast CPU hardware registers (rdi, rsi, rdx, rcx, r8, r9) rather than memory, ensuring near-instantaneous execution. Mastering function prototypes, stack frame lifecycles, and function pointers prevents catastrophic bugs like stack overflows and dangling stack pointers.',
    bn: 'সি প্রোগ্রামিংয়ে ফাংশন হলো সিস্টেম সফটওয়্যারের সবচেয়ে মৌলিক মডুলার ভিত্তি, যা সিপিইউ হার্ডওয়্যারের কল স্ট্যাক ব্যবস্থাপনার মাধ্যমে পরিচালিত হয়। একটি ফাংশন চলার সময় সিপিইউ স্ট্যাক ফ্রেম নামক একটি অ্যাক্টিভেশন রেকর্ড তৈরি করে। এই ফ্রেম কলারের রিটার্ন অ্যাড্রেস, পূর্ববর্তী ফ্রেমের বেস পয়েন্টার (rbp) এবং ফাংশনের নিজস্ব লোকাল ভ্যারিয়েবলের জায়গা বরাদ্দ রাখে। আধুনিক System V AMD64 কলিং কনভেনশন অনুযায়ী প্রথম ৬টি পূর্ণসংখ্যা বা পয়েন্টার আর্গুমেন্ট মেমোরির বদলে দ্রুতগতির সিপিইউ রেজিস্টারের (rdi, rsi, rdx, rcx, r8, r9) মধ্য দিয়ে পাঠানো হয়, যা সর্বোচ্চ পারফরম্যান্স নিশ্চিত করে। ফাংশন প্রোটোটাইপ, স্ট্যাক ফ্রেমের লাইফসাইকেল ও ফাংশন পয়েন্টারে দক্ষতা অর্জন স্ট্যাক ওভারফ্লো ও ড্যাংলিং স্ট্যাক পয়েন্টারের মতো মারাত্মক সমস্যা প্রতিরোধ করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Hardware Call Stack and Frames',
        bn: 'মূল ধারণা: হার্ডওয়্যার কল স্ট্যাক ও ফ্রেম'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you invoke a function in C, the underlying hardware executes an intricate mechanical dance known as stack frame activation. High-level runtime environments hide this activation sequence behind runtime memory allocators and garbage collection sweeps. In C, however, every function call physically pushes a structured activation record onto the hardware call stack, reserving space for local variables, parameter copies, and the crucial instruction address to return to after completion.',
        bn: 'সি-তে যখন আপনি একটি ফাংশন কল করেন, তখন কম্পিউটারের হার্ডওয়্যার নেপথ্যে স্ট্যাক ফ্রেম অ্যাক্টিভেশন নামক একটি চমৎকার যান্ত্রিক প্রক্রিয়া পরিচালনা করে। আধুনিক হাই-লেভেল ভাষাগুলো তাদের রানটাইম মেমোরি ম্যানেজার ও গার্বেজ কালেক্টরের আড়ালে এই জটিলতা লুকিয়ে রাখে। কিন্তু সি-তে প্রতিটি ফাংশন কল সরাসরি হার্ডওয়্যার কল স্ট্যাকে একটি সুসংগঠিত অ্যাক্টিভেশন রেকর্ড বা ফ্রেম যুক্ত করে, যা ফাংশনের লোকাল ভ্যারিয়েবল, আর্গুমেন্টের কপি এবং কাজ শেষে পূর্বের কোডে ফিরে যাওয়ার রিটার্ন অ্যাড্রেস সংরক্ষণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Stack Frame',
          def: {
            en: 'A contiguous memory block allocated on the CPU call stack dedicated to a single active function invocation',
            bn: 'সিপিইউ কল স্ট্যাকে কোনো নির্দিষ্ট ফাংশন কলের জন্য বরাদ্দকৃত অবিচ্ছিন্ন মেমোরি ব্লক যা সেই ফাংশনের কার্যকাল পর্যন্ত অক্ষুণ্ণ থাকে'
          }
        },
        {
          term: 'Function Prototype',
          def: {
            en: 'A forward declaration that informs the C compiler of a function name, return type, and argument signatures prior to its body definition',
            bn: 'ফাংশনের মূল কোড লেখার আগেই তার নাম, রিটার্ন টাইপ এবং আর্গুমেন্টের তালিকা কম্পাইলারকে অবহিত করার অগ্রিম ঘোষণা'
          }
        },
        {
          term: 'Calling Convention',
          def: {
            en: 'The standardized hardware ABI protocol establishing whether arguments pass via CPU registers or stack memory and who cleans the frame',
            bn: 'একটি প্রমিত হার্ডওয়্যার প্রটোকল যা নির্ধারণ করে আর্গুমেন্ট কোন কোন সিপিইউ রেজিস্টার বা স্ট্যাকে যাবে এবং কাজ শেষে মেমোরি কে পরিষ্কার করবে'
          }
        },
        {
          term: 'Function Pointer',
          def: {
            en: 'A pointer variable that stores the memory address of executable machine instructions residing in the code (.text) segment',
            bn: 'এমন একটি পয়েন্টার যা কোড সেগমেন্টে (.text) সংরক্ষিত এক্সিকিউটেবল মেশিন কোডের মেমোরি অ্যাড্রেস ধরে রাখে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'frame-lifecycle',
      text: {
        en: 'The Stack Frame Lifecycle: Prologue, Execution, and Epilogue',
        bn: 'স্ট্যাক ফ্রেমের জীবনচক্র: প্রোলগ, এক্সিকিউশন ও এপিলগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every function call progresses through three strict hardware stages: prologue, execution, and epilogue. In the prologue, the CPU pushes the current Instruction Pointer (rip) to the stack as the Return Address, pushes the base pointer (rbp), and shifts the stack pointer (rsp) downward to allocate local memory.',
        bn: 'প্রতিটি ফাংশন কল তিনটি সুনির্দিষ্ট হার্ডওয়্যার ধাপের মধ্য দিয়ে সম্পন্ন হয়: প্রোলগ, এক্সিকিউশন এবং এপিলগ। প্রোলগ ধাপে সিপিইউ বর্তমান ইন্সট্রাকশন পয়েন্টারকে (rip) রিটার্ন অ্যাড্রেস হিসেবে স্ট্যাকে রাখে, বেস পয়েন্টার (rbp) সংরক্ষণ করে এবং স্ট্যাক পয়েন্টার (rsp) নিচের দিকে সরিয়ে লোকাল মেমোরি তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'During the epilogue, the function places its return value into register rax, restores rsp and rbp, and issues the ret instruction. This ret instruction pops the return address off the stack straight into rip, jumping execution instantly back to the calling instruction.',
        bn: 'এপিলগ ধাপে ফাংশনটি তার রিটার্ন মান rax রেজিস্টারে জমা রাখে, rsp ও rbp পূর্বের অবস্থায় ফিরিয়ে আনে এবং ret ইন্সট্রাকশন চালায়। এই ret ইন্সট্রাকশন স্ট্যাক থেকে আগের রিটার্ন অ্যাড্রেস সরাসরি rip-এ নিয়ে এসে তাৎক্ষণিকভাবে কলারের পরবর্তী লাইনে ফিরে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'calling-convention',
      text: {
        en: 'Modern Calling Conventions: Register-Speed Arguments',
        bn: 'আধুনিক কলিং কনভেনশন: রেজিস্টার-গতির আর্গুমেন্ট পাসিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, older 32-bit x86 systems pushed every function argument onto memory stack frames (the cdecl convention), causing unnecessary RAM bus traffic. Modern 64-bit operating systems use the System V AMD64 ABI on Linux and macOS.',
        bn: 'অতীতে পুরোনো ৩২-বিট x86 সিস্টেমে ফাংশনের প্রতিটি আর্গুমেন্ট র্যামের স্ট্যাকে পুশ করা হতো (cdecl কনভেনশন), যা র্যামের গতিতে অপ্রয়োজনীয় বাধা তৈরি করত। আধুনিক ৬৪-বিট লিনাক্স ও ম্যাকওএস সিস্টেমে System V AMD64 ABI অনুসরণ করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Under this modern standard, the first 6 integer or pointer arguments pass directly through dedicated high-speed CPU hardware registers: rdi, rsi, rdx, rcx, r8, and r9. Only when a function requires 7 or more arguments does the compiler spill extra parameters onto the memory stack frame.',
        bn: 'এই আধুনিক নিয়ম অনুসারে প্রথম ৬টি ইন্টিজার বা পয়েন্টার আর্গুমেন্ট সরাসরি দ্রুতগতির সিপিইউ রেজিস্টারের মধ্য দিয়ে পাঠানো হয়: rdi, rsi, rdx, rcx, r8 এবং r9। ফাংশনে কেবল ৭ বা তার বেশি আর্গুমেন্ট থাকলেই কম্পাইলার বাকি আর্গুমেন্টগুলো মেমোরি স্ট্যাক ফ্রেমে পুশ করে।'
      }
    },
    {
      type: 'heading',
      id: 'recursion-pitfalls',
      text: {
        en: 'Recursion and the Stack Overflow Boundary',
        bn: 'রিকার্শন ও স্ট্যাক ওভারফ্লোর সীমা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every recursive invocation creates a completely fresh stack frame on the hardware call stack. For a call factorial(3), the system pushes frame 1 (n=3), frame 2 (n=2), and frame 3 (n=1), creating a peak stack depth of 4 active frames including main.',
        bn: 'প্রতিটি রিকার্সিভ কলের জন্য হার্ডওয়্যার কল স্ট্যাকে সম্পূর্ণ নতুন একটি স্ট্যাক ফ্রেম তৈরি হয়। factorial(3) কলের জন্য সিস্টেম ফ্রেম ১ (n=৩), ফ্রেম ২ (n=২) এবং ফ্রেম ৩ (n=১) পুশ করে, ফলে main সহ একসাথে সর্বোচ্চ ৪টি ফ্রেম স্ট্যাকে সক্রিয় থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because operating systems impose strict stack size limits (typically 8 megabytes on Linux), unbounded recursion exhausts the memory boundary within milliseconds, triggering an unrecoverable SIGSEGV stack overflow crash.',
        bn: 'যেহেতু অপারেটিং সিস্টেম স্ট্যাকের একটি নির্দিষ্ট সীমা বেঁধে দেয় (লিনাক্সে সাধারণত ৮ মেগাবাইট), তাই বেস কন্ডিশনহীন অসীম রিকার্শন কয়েক মিলিসেকেন্ডের মধ্যে মেমোরির সীমা ছাড়িয়ে যায় এবং তৎক্ষণাৎ রিকভারি-অসম্ভব SIGSEGV স্ট্যাক ওভারফ্লো ক্র্যাশ ঘটায়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Hardware Execution Storage Tiers',
        bn: 'কাঠামোগত তুলনা: হার্ডওয়্যার এক্সিকিউশন স্টোরেজ স্তর'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Storage Tier', bn: 'স্টোরেজ স্তর' },
        { en: 'Allocation Speed', bn: 'বরাদ্দের গতি' },
        { en: 'Lifetime Scope', bn: 'স্থায়িত্ব বা লাইফটাইম' },
        { en: 'Primary System Role', bn: 'প্রধান সিস্টেম ভূমিকা' }
      ],
      rows: [
        [
          { en: 'CPU Registers (rdi, rax)', bn: 'সিপিইউ রেজিস্টার (rdi, rax)' },
          { en: 'Sub-nanosecond (single clock cycle)', bn: 'ন্যানোসেকেন্ডের কম (একটি ক্লক সাইকেল)' },
          { en: 'Transient during instruction execution', bn: 'ইন্সট্রাকশন চলাকালীন ক্ষণস্থায়ী' },
          { en: 'Function arguments (first 6), arithmetic registers, return values', bn: 'ফাংশন আর্গুমেন্ট (প্রথম ৬টি), গাণিতিক হিসাব ও রিটার্ন মান' }
        ],
        [
          { en: 'Stack Frame Memory', bn: 'স্ট্যাক ফ্রেম মেমোরি' },
          { en: 'Single CPU instruction (sub rsp, bytes)', bn: 'একটি সিপিইউ ইন্সট্রাকশন (sub rsp, bytes)' },
          { en: 'Automatic; freed on function return', bn: 'স্বয়ংক্রিয়; ফাংশন শেষ হলে অবমুক্ত হয়' },
          { en: 'Local variables, return addresses, spilled arguments', bn: 'লোকাল ভ্যারিয়েবল, রিটার্ন অ্যাড্রেস ও অতিরিক্ত আর্গুমেন্ট' }
        ],
        [
          { en: 'Heap Dynamic Memory', bn: 'হিপ ডাইনামিক মেমোরি' },
          { en: 'Dozens to hundreds of CPU cycles', bn: 'কয়েক ডজন থেকে শত শত ক্লক সাইকেল' },
          { en: 'Manual; persists until explicit free()', bn: 'ম্যানুয়াল; স্পষ্টভাবে free() না করা পর্যন্ত স্থায়ী' },
          { en: 'Dynamic buffers, long-lived data, arbitrary sized arrays', bn: 'ডাইনামিক বাফার, দীর্ঘস্থায়ী ডেটা ও যেকোনো সাইজের অ্যারে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Call Stack, Frames & Recursion',
        bn: 'বাস্তব কোড সিমুলেশন: কল স্ট্যাক, ফ্রেম ও রিকার্শন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Call Stack, Stack Frames & Recursion in Node.js

class StackFrame {
  constructor(
    public functionName: string,
    public returnAddress: string,
    public locals: Record<string, any>
  ) {}
}

class CallStackSimulator {
  public frames: StackFrame[] = [];
  public peakDepth = 0;

  constructor(public maxDepth = 1000) {}

  push(frame: StackFrame) {
    if (this.frames.length >= this.maxDepth) {
      throw new Error('Segmentation Fault: Stack Overflow (Exceeded maximum call stack limit)');
    }
    this.frames.push(frame);
    if (this.frames.length > this.peakDepth) {
      this.peakDepth = this.frames.length;
    }
  }

  pop(): StackFrame | undefined {
    return this.frames.pop();
  }

  currentDepth(): number {
    return this.frames.length;
  }
}

const stack = new CallStackSimulator();

// Push main frame
stack.push(new StackFrame('main', '0x0000', { status: 0 }));

// Recursive factorial function simulating call stack frames
function simulatedFactorial(n: number, retAddr: string): number {
  stack.push(new StackFrame(\`factorial(\${n})\`, retAddr, { n }));
  let result: number;
  if (n <= 1) {
    result = 1;
  } else {
    result = n * simulatedFactorial(n - 1, '0x4010');
  }
  stack.pop();
  return result;
}

const factOf3 = simulatedFactorial(3, '0x4000');
const peakFrames = stack.peakDepth;
const finalFramesRemaining = stack.currentDepth();

console.log('Factorial of 3 computed via recursive stack frames:', factOf3);
// -> Factorial of 3 computed via recursive stack frames: 6
console.log('Peak stack frames active during recursion:', peakFrames);
// -> Peak stack frames active during recursion: 4
console.log('Stack frames remaining after function returns to main:', finalFramesRemaining);
// -> Stack frames remaining after function returns to main: 1
console.log('First 6 integer arguments passed via fast CPU registers on x86-64: 6');
// -> First 6 integer arguments passed via fast CPU registers on x86-64: 6`,
      caption: {
        en: 'Simulation: factorial(3) returns 6; peak call stack reaches 4 frames; after returns only 1 frame remains; first 6 args pass via CPU registers',
        bn: 'সিমুলেশন: factorial(3) এর মান ৬ দেয়; সর্বোচ্চ স্ট্যাক ফ্রেম ৪ হয়; রিটার্নের পর কেবল ১টি ফ্রেম থাকে; প্রথম ৬টি আর্গুমেন্ট সিপিইউ রেজিস্টারে যায়'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always declare explicit function prototypes in header files (.h). Explicit prototypes guarantee that compilers verify argument types, counts, and return types before call sites are generated.',
        bn: 'নিয়ম ১: হেডার ফাইলে (.h) সর্বদা স্পষ্ট ফাংশন প্রোটোটাইপ ঘোষণা করুন। অগ্রিম প্রোটোটাইপ নিশ্চিত করে যে কম্পাইলার ফাংশন কল করার আগেই আর্গুমেন্টের ধরন, সংখ্যা ও রিটার্ন টাইপ যাচাই করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never return the memory address of a local stack variable. Because local stack frame memory is immediately destroyed upon function return, returning &local creates a fatal dangling pointer.',
        bn: 'নিয়ম ২: ফাংশনের লোকাল ভ্যারিয়েবলের মেমোরি অ্যাড্রেস কখনো রিটার্ন করবেন না। ফাংশন শেষ হওয়ার সাথে সাথে স্ট্যাক মেমোরি অবমুক্ত হয়ে যাওয়ায় &local রিটার্ন করলে মারাত্মক ড্যাংলিং পয়েন্টার তৈরি হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Enforce strict recursion base conditions and recursion limits. Always verify a terminating base case before executing self-calls to prevent runaway stack growth and fatal stack overflows.',
        bn: 'নিয়ম ৩: রিকার্শনে কঠোর বেস কন্ডিশন ও পুনরাবৃত্তির সীমা বজায় রাখুন। নিজেকে পুনরায় ডাকার আগে সর্বদা সমাপ্তির শর্ত নিশ্চিত করুন যাতে অনাকাঙ্ক্ষিত স্ট্যাক ওভারফ্লো এড়ানো সম্ভব হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Use function pointers for modular extensibility and dispatch tables. Function pointers allow dynamic strategy injection, decoupled callbacks, and clean event-driven designs without complex switch statements.',
        bn: 'নিয়ম ৪: মডুলার সম্প্রসারণ ও ডিসপ্যাচ টেবিলের জন্য ফাংশন পয়েন্টার ব্যবহার করুন। ফাংশন পয়েন্টার জটিল সুইচ স্টেটমেন্ট ছাড়াই ডাইনামিক কলব্যাক ও ইভেন্ট-ভিত্তিক ডিজাইন বাস্তবায়ন করতে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-func-ex1',
      kind: 'mcq',
      topic: 'The structure and purpose of a CPU stack frame',
      question: {
        en: 'What is a stack frame (activation record) created during a C function call?',
        bn: 'সি ফাংশন কল করার সময় তৈরি হওয়া একটি স্ট্যাক ফ্রেম (অ্যাক্টিভেশন রেকর্ড) মূলত কী?'
      },
      options: [
        {
          en: 'A contiguous memory section allocated on the call stack holding the return address, previous base pointer, parameters, and local scope variables for that function',
          bn: 'কল স্ট্যাকে বরাদ্দকৃত একটি অবিচ্ছিন্ন মেমোরি অংশ যা রিটার্ন অ্যাড্রেস, পূর্ববর্তী বেস পয়েন্টার, প্যারামিটার এবং ওই ফাংশনের লোকাল ভ্যারিয়েবলগুলো সংরক্ষণ করে'
        },
        {
          en: 'A wooden picture frame placed on top of the computer motherboard',
          bn: 'কম্পিউটার মাদারবোর্ডের ওপর বসানো একটি কাঠের ছবির ফ্রেম'
        },
        {
          en: 'An HTML iframe loaded inside Google Chrome to render adverts',
          bn: 'বিজ্ঞাপন দেখানোর জন্য গুগল ক্রোমে লোড করা একটি এইচটিএমএল আইফ্রেম'
        },
        {
          en: 'A background thread that continuously prints error logs to disk',
          bn: 'একটি ব্যাকগ্রাউন্ড থ্রেড যা হার্ডডিস্কে অনবরত এরর লগ প্রিন্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Temporary memory allocated on the call stack for a function execution.',
        bn: 'ফাংশন চলার সময়ের জন্য কল স্ট্যাকে সাময়িক বরাদ্দকৃত মেমোরি।'
      },
      explanation: {
        en: 'A stack frame stores all temporary state required for a function invocation: return address, saved registers, and local variables.',
        bn: 'একটি স্ট্যাক ফ্রেম ফাংশন চলার জন্য প্রয়োজনীয় সমস্ত সাময়িক তথ্য জমা রাখে: রিটার্ন অ্যাড্রেস, সেভ করা রেজিস্টার এবং লোকাল ভ্যারিয়েবল।'
      }
    },
    {
      id: 'c-func-ex2',
      kind: 'mcq',
      topic: 'Modern calling conventions and CPU register argument passing',
      question: {
        en: 'Under the System V AMD64 calling convention on modern 64-bit systems, how are the first 6 integer arguments passed to a function?',
        bn: 'আধুনিক ৬৪-বিট সিস্টেমে System V AMD64 কলিং কনভেনশন অনুসারে ফাংশনের প্রথম ৬টি ইন্টিজার আর্গুমেন্ট কীভাবে পাঠানো হয়?'
      },
      options: [
        {
          en: 'Directly through CPU hardware registers (rdi, rsi, rdx, rcx, r8, r9) for maximum execution speed without touching memory',
          bn: 'মেমোরিতে না লিখে সর্বোচ্চ গতির জন্য সরাসরি সিপিইউ হার্ডওয়্যার রেজিস্টারের (rdi, rsi, rdx, rcx, r8, r9) মধ্য দিয়ে পাঠানো হয়'
        },
        {
          en: 'By saving them as temporary text files inside the /tmp directory',
          bn: '/tmp ডিরেক্টরিতে সাময়িক টেক্সট ফাইল হিসেবে সেভ করে'
        },
        {
          en: 'By sending them through a local HTTP web socket server',
          bn: 'একটি লোকাল এইচটিটিপি ওয়েব সকেট সার্ভারের মাধ্যমে প্রেরণ করে'
        },
        {
          en: 'Only inside the computer BIOS audio chip',
          bn: 'কেবলমাত্র কম্পিউটারের বায়োস অডিও চিপের ভেতর দিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modern architectures prioritize CPU hardware registers over RAM access.',
        bn: 'আধুনিক আর্কিটেকচার র্যামের চেয়ে সিপিইউ হার্ডওয়্যার রেজিস্টারকে অগ্রাধিকার দেয়।'
      },
      explanation: {
        en: 'Passing arguments in registers (rdi, rsi, rdx, rcx, r8, r9) avoids RAM memory traffic, allowing functions to begin executing instantly.',
        bn: 'রেজিস্টারের মাধ্যমে আর্গুমেন্ট পাঠালে র্যাম মেমোরি ট্রাফিকের প্রয়োজন হয় না, ফলে ফাংশন তৎক্ষণাৎ কার্যকর শুরু হতে পারে।'
      }
    },
    {
      id: 'c-func-ex3',
      kind: 'mcq',
      topic: 'Dangling pointer hazard from returning local stack addresses',
      question: {
        en: 'What dangerous bug is caused by returning the memory address of a local variable (e.g. int *fn() { int x = 5; return &x; })?',
        bn: 'লোকাল ভ্যারিয়েবলের মেমোরি অ্যাড্রেস রিটার্ন করলে (যেমন int *fn() { int x = 5; return &x; }) কোন বিপজ্জনক বাগ তৈরি হয়?'
      },
      options: [
        {
          en: 'A dangling pointer: the stack frame containing x is deallocated upon return; accessing that returned address reads corrupt memory or crashes the program',
          bn: 'ড্যাংলিং পয়েন্টার: রিটার্ন করার সাথে সাথে x থাকা স্ট্যাক ফ্রেমটি ধ্বংস হয়ে যায়; ফলে সেই ঠিকানায় অ্যাক্সেস করলে বিকৃত মেমোরি পড়া বা প্রোগ্রাম ক্র্যাশ হয়'
        },
        {
          en: 'The compiler permanently locks the hard drive with encryption',
          bn: 'কম্পাইলার এনক্রিপশন দিয়ে হার্ডড্রাইভ স্থায়ীভাবে লক করে দেয়'
        },
        {
          en: 'Variable x becomes an immortal global variable stored in the cloud',
          bn: 'ভ্যারিয়েবল x ক্লাউডে সংরক্ষিত একটি অমর গ্লোবাল ভ্যারিয়েবলে রূপান্তরিত হয়'
        },
        {
          en: 'It causes the computer fan to run backwards',
          bn: 'এটি কম্পিউটারের ফ্যানকে উল্টো দিকে চালাতে শুরু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stack variables disappear when their containing function completes.',
        bn: 'ফাংশনের কাজ শেষ হওয়ার সাথে সাথে স্ট্যাকের লোকাল ভ্যারিয়েবল ধ্বংস হয়ে যায়।'
      },
      explanation: {
        en: 'Local variables have automatic storage duration on the stack. Returning their address produces a dangling pointer to deallocated stack space.',
        bn: 'লোকাল ভ্যারিয়েবলের স্থায়িত্ব কেবল তার ফাংশন চলাকালীন স্ট্যাকে থাকে। তার ঠিকানা রিটার্ন করলে অবমুক্ত স্ট্যাক স্পেসের ড্যাংলিং পয়েন্টার তৈরি হয়।'
      }
    },
    {
      id: 'c-func-ex4',
      kind: 'mcq',
      topic: 'The nature and function of function pointers in C',
      question: {
        en: 'What does a function pointer store in C, and how is it used?',
        bn: 'সি-তে একটি ফাংশন পয়েন্টার মূলত কী সংরক্ষণ করে এবং এটি কীভাবে ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'It stores the memory address of executable machine instructions in the code segment (.text), allowing functions to be passed dynamically as callbacks or dispatch entries',
          bn: 'এটি কোড সেগমেন্টে (.text) সংরক্ষিত এক্সিকিউটেবল মেশিন কোডের মেমোরি অ্যাড্রেস জমা রাখে, যা ফাংশনকে কলব্যাক বা ডিসপ্যাচ হিসেবে ব্যবহারে সাহায্য করে'
        },
        {
          en: 'It stores the customer telephone number of the compiler creator',
          bn: 'এটি কম্পাইলার প্রস্তুতকারকের গ্রাহক সেবা ফোন নম্বর সংরক্ষণ করে'
        },
        {
          en: 'It stores a link to a YouTube video explaining how to code',
          bn: 'কোডিং শেখানোর একটি ইউটিউব ভিডিওর ওয়েব লিংক জমা রাখে'
        },
        {
          en: 'It is a macro that deletes all unused functions from the source file',
          bn: 'এটি একটি ম্যাক্রো যা সোর্স ফাইল থেকে অব্যবহৃত ফাংশন মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Code instructions live in memory just like data variables.',
        bn: 'ডেটা ভ্যারিয়েবলের মতোই কোড ইন্সট্রাকশনও মেমোরিতে নির্দিষ্ট ঠিকানায় অবস্থান করে।'
      },
      explanation: {
        en: 'Compiled code resides in memory (.text segment). A function pointer points to this code, enabling dynamic runtime dispatch and callbacks.',
        bn: 'কম্পাইল করা কোড মেমোরির .text সেগমেন্টে থাকে। একটি ফাংশন পয়েন্টার এই কোড নির্দেশ করে ডাইনামিক রানটাইম ডিসপ্যাচ ও কলব্যাক কার্যকর করে।'
      }
    }
  ],
  quiz: {
    id: 'functions-and-the-frame-quiz',
    title: {
      en: 'Functions & Stack Frames Quiz',
      bn: 'ফাংশন ও স্ট্যাক ফ্রেম কুইজ'
    },
    questions: [
      {
        id: 'q-stack-overflow-root-cause',
        kind: 'mcq',
        topic: 'Root cause and mechanics of a stack overflow',
        question: {
          en: 'What is the mechanical cause of a "Stack Overflow" crash in recursive C programs?',
          bn: 'রিকার্সিভ সি প্রোগ্রামে "স্ট্যাক ওভারফ্লো" ক্র্যাশের মূল যান্ত্রিক কারণ কী?'
        },
        options: [
          {
            en: 'Continuous recursive calls push new stack frames without hitting a terminating base condition, exceeding the operating system allocated call stack memory boundary',
            bn: 'সমাপ্তির বেস শর্ত ছাড়াই ক্রমাগত রিকার্সিভ কলের ফলে নতুন স্ট্যাক ফ্রেম জমা হতে থাকে এবং অপারেটিং সিস্টেমের নির্ধারিত স্ট্যাক মেমোরির সীমা অতিক্রম করে'
          },
          {
            en: 'The computer power supply runs out of electric voltage',
            bn: 'কম্পিউটারের পাওয়ার সাপ্লাইয়ে বিদ্যুৎ প্রবাহের ঘাটতি দেখা দিলে'
          },
          {
            en: 'The C compiler runs out of semicolon characters',
            bn: 'সি কম্পাইলারের সেমিকোলন ক্যারেক্টার ফুরিয়ে গেলে'
          },
          {
            en: 'The computer sound card produces too much noise',
            bn: 'কম্পিউটারের সাউন্ড কার্ড অতিরিক্ত শব্দ তৈরি করলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unbounded frame pushes consume all available call stack memory.',
          bn: 'সীমাহীন ফ্রেম পুশ করার ফলে সমস্ত উপলব্ধ কল স্ট্যাক মেমোরি শেষ হয়ে যায়।'
        },
        explanation: {
          en: 'Every call consumes stack memory. Infinite recursion pushes frames until the stack pointer exceeds the OS stack limit (typically 8 MB), triggering SIGSEGV.',
          bn: 'প্রতিটি কল স্ট্যাক মেমোরি খরচ করে। অসীম রিকার্শনে ফ্রেম জমতে জমতে অপারেটিং সিস্টেমের সীমা (সাধারণত ৮ মেগাবাইট) অতিক্রম করে SIGSEGV ক্র্যাশ ঘটায়।'
        }
      },
      {
        id: 'q-prototype-necessity',
        kind: 'mcq',
        topic: 'Why function prototypes are required prior to call sites',
        question: {
          en: 'Why is declaring a function prototype (e.g. double compute(double, int);) before its call site critical in C?',
          bn: 'সি-তে ফাংশন কল করার আগে তার প্রোটোটাইপ (যেমন double compute(double, int);) ঘোষণা করা কেন অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'It informs the compiler of exact argument and return types, ensuring correct register allocation and preventing catastrophic ABI calling mismatches',
            bn: 'এটি কম্পাইলারকে সঠিক আর্গুমেন্ট ও রিটার্ন টাইপ জানিয়ে দেয়, যা সঠিক রেজিস্টার বরাদ্দ নিশ্চিত করে এবং মারাত্মক ABI কলিং অমিল প্রতিরোধ করে'
          },
          {
            en: 'Because C compilers cannot run without at least 100 prototypes',
            bn: 'কারণ কমপক্ষে ১০০টি প্রোটোটাইপ না থাকলে সি কম্পাইলার চলতে পারে না'
          },
          {
            en: 'It tells the operating system to increase monitor brightness',
            bn: 'এটি অপারেটিং সিস্টেমকে মনিটরের উজ্জ্বলতা বাড়াতে নির্দেশ দেয়'
          },
          {
            en: 'It encrypts the function name so competitors cannot read it',
            bn: 'এটি ফাংশনের নাম এনক্রিপ্ট করে যাতে অন্য কেউ পড়তে না পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compilers compile top-to-bottom and need signatures to prepare registers.',
          bn: 'কম্পাইলার উপর থেকে নিচে কোড পড়ে এবং রেজিস্টার সাজাতে ফাংশনের সিগনেচার প্রয়োজন হয়।'
        },
        explanation: {
          en: 'Without prototypes, compilers make incorrect assumptions about argument and return types, corrupting floating-point registers and stack alignment.',
          bn: 'প্রোটোটাইপ না থাকলে কম্পাইলার ভুল টাইপ ধরে নেয়, যা ফ্লোটিং-পয়েন্ট রেজিস্টার ও স্ট্যাক অ্যালাইনমেন্ট নষ্ট করে মারাত্মক ত্রুটি তৈরি করে।'
        }
      },
      {
        id: 'q-static-local-variable',
        kind: 'mcq',
        topic: 'Static local variables versus stack local variables',
        question: {
          en: 'How does declaring a variable static inside a function (e.g. static int counter = 0;) alter its lifetime and memory location?',
          bn: 'ফাংশনের ভেতরে static দিয়ে ভ্যারিয়েবল ঘোষণা করলে (যেমন static int counter = 0;) তার স্থায়িত্ব ও মেমোরি অবস্থানে কী পরিবর্তন আসে?'
        },
        options: [
          {
            en: 'It is stored in the data/BSS segment rather than the stack frame, preserving its value across successive function invocations for the entire program lifetime',
            bn: 'এটি স্ট্যাক ফ্রেমের বদলে ডেটা বা BSS সেগমেন্টে সংরক্ষিত হয়, যার ফলে বারবার ফাংশন কল করলেও এটি পুরো প্রোগ্রাম জুড়ে তার মান অক্ষুণ্ণ রাখে'
          },
          {
            en: 'It deletes the variable from RAM after every 2 clock ticks',
            bn: 'এটি প্রতি ২ ক্লক টিক পর পর র্যাম থেকে ভ্যারিয়েবলটি মুছে ফেলে'
          },
          {
            en: 'It causes the variable to change its data type on each invocation',
            bn: 'এটি প্রতিটি ফাংশন কলের সাথে সাথে তার ডেটা টাইপ পরিবর্তন করে'
          },
          {
            en: 'It transforms the variable into a public web server endpoint',
            bn: 'এটি ভ্যারিয়েবলটিকে একটি পাবলিক ওয়েব সার্ভার এন্ডপয়েন্টে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Static variables survive function frame teardowns.',
          bn: 'স্ট্যাটিক ভ্যারিয়েবল ফাংশন ফ্রেম ধ্বংস হওয়ার পরেও তার মান ধরে রাখে।'
        },
        explanation: {
          en: 'Static local variables reside in the program static data segment, not on the call stack. They initialize once and persist until program exit.',
          bn: 'স্ট্যাটিক লোকাল ভ্যারিয়েবল কল স্ট্যাকের বদলে প্রোগ্রামের স্ট্যাটিক ডেটা সেগমেন্টে থাকে। এটি একবার ইনিশিয়ালাইজ হয় এবং প্রোগ্রাম শেষ না হওয়া পর্যন্ত টিকে থাকে।'
        }
      },
      {
        id: 'q-inline-function-optimization',
        kind: 'mcq',
        topic: 'The inline keyword and compiler call overhead elimination',
        question: {
          en: 'What does the inline specifier suggest to the C compiler regarding a function call?',
          bn: 'সি-তে একটি ফাংশন কলে inline স্পেসিফায়ার কম্পাইলারকে কী পরামর্শ দেয়?'
        },
        options: [
          {
            en: 'It advises the compiler to substitute the function body directly at each call site, eliminating the CPU overhead of pushing stack frames and executing ret instructions',
            bn: 'এটি কম্পাইলারকে ফাংশন কলের জায়গায় সরাসরি তার মূল কোড বসিয়ে দেওয়ার পরামর্শ দেয়, যাতে স্ট্যাক ফ্রেম পুশ এবং ret চালনার সিপিইউ ওভারহেড দূর হয়'
          },
          {
            en: 'It converts the function into an inline CSS stylesheet for web design',
            bn: 'এটি ফাংশনটিকে ওয়েব ডিজাইনের জন্য একটি ইনলাইন সিএসএস স্টাইলশিটে রূপান্তর করে'
          },
          {
            en: 'It requires all function lines to be written without pressing enter',
            bn: 'এটি ফাংশনের সমস্ত লাইন এন্টার না চেপে এক লাইনে লেখার নির্দেশ দেয়'
          },
          {
            en: 'It disables all optimization flags across the entire operating system',
            bn: 'এটি পুরো অপারেটিং সিস্টেমের সমস্ত অপ্টিমাইজেশন ফ্ল্যাগ নিষ্ক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Replacing the call instruction with the actual code body.',
          bn: 'ফাংশন কলের বদলে সরাসরি কোডের অংশ বসিয়ে দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Inlining substitutes the code directly into the caller site, avoiding the prologue/epilogue overhead of jumping and creating stack frames.',
          bn: 'ইনলাইনিং সরাসরি কলারের কোডে ফাংশনের বডি বসিয়ে দেয়, যার ফলে জাম্প করা এবং স্ট্যাক ফ্রেম তৈরি ও ধ্বংসের অতিরিক্ত সময় সাশ্রয় হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'structs-and-the-union',
    title: {
      en: 'Structs, Unions & Memory Alignment — Hardware Packing and Padding',
      bn: 'স্ট্রাক্ট, ইউনিয়ন ও মেমোরি অ্যালাইনমেন্ট — হার্ডওয়্যার প্যাকিং ও প্যাডিং'
    }
  }
};
