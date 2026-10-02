import type { Lesson } from '../../../lib/types';

export const TheRuntimeAndTheAssemblyLesson: Lesson = {
  slug: 'the-runtime-and-the-assembly',
  tech: 'csharp',
  title: {
    en: '.NET Runtime Architecture, IL & JIT Compilation',
    bn: '.NET রানটাইম আর্কিটেকচার, IL এবং JIT কম্পাইলেশন'
  },
  summary: {
    en: 'Beginner overview of the .NET execution model: how C# source code compiles into Common Intermediate Language (CIL), how the Common Language Runtime (CLR) and RyuJIT compile IL into native CPU instructions, assembly metadata, and managed memory basics.',
    bn: '.NET এক্সিকিউশন মডেলের প্রারম্ভিক পরিচিতি: কীভাবে C# সোর্স কোড Common Intermediate Language (CIL)-এ কম্পাইল হয়, Common Language Runtime (CLR) এবং RyuJIT কীভাবে IL-কে নেটিভ সিপিইউ নির্দেশনায় রূপান্তর করে, অ্যাসেম্বলি মেটাডেটা এবং ম্যানেজড মেমোরির মূল ভিত্তি।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'compilation-pipeline-and-the-clr-heading',
      text: {
        en: 'The .NET Compilation Pipeline: From C# to Intermediate Language to Machine Code',
        bn: '.NET কম্পাইলেশন পাইপলাইন: C# থেকে ইন্টারমিডিয়েট ল্যাঙ্গুয়েজ ও মেশিন কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you compile a C# program, the Roslyn compiler does not translate source code directly into hardware machine instructions. Instead, it generates a portable binary containing Common Intermediate Language (CIL, also called IL) along with comprehensive type metadata. This binary is packaged as an assembly (a .dll or .exe file). When the application executes, the Common Language Runtime (CLR) takes over. A built-in Just-In-Time (JIT) compiler, named RyuJIT, translates the intermediate bytecodes into optimized 64-bit native CPU instructions tailored specifically to the host processor.',
        bn: 'যখন আপনি একটি C# প্রোগ্রাম কম্পাইল করেন, তখন Roslyn কম্পাইলার কোডকে সরাসরি হার্ডওয়্যারের মেশিন কোডে রূপান্তর করে না। বরং এটি Common Intermediate Language (CIL বা সংক্ষেপে IL) এবং সমৃদ্ধ মেটাডেটা সম্বলিত একটি পোর্টেবল বাইনারি তৈরি করে। এই ফাইলটিকে একটি অ্যাসেম্বলি (.dll বা .exe) হিসেবে প্যাকেজ করা হয়। অ্যাপ্লিকেশন চলার সময় Common Language Runtime (CLR) এর নিয়ন্ত্রণ গ্রহণ করে। এর ভেতর থাকা Just-In-Time (JIT) কম্পাইলার, যার নাম RyuJIT, মধ্যবর্তী বাইটকোডকে হোস্ট প্রসেসরের উপযোগী নিখুঁত ৬৪-বিট নেটিভ সিপিইউ নির্দেশনায় রূপান্তর করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural execution pipeline of the .NET runtime: From C# source to Roslyn IL generation, CLR JIT compilation, and native hardware execution.',
        bn: 'চিত্র ১: .NET রানটাইমের পূর্ণাঙ্গ এক্সিকিউশন পাইপলাইন: C# সোর্স থেকে Roslyn IL উৎপাদন, CLR JIT কম্পাইলেশন এবং নেটিভ হার্ডওয়্যার এক্সিকিউশন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">.NET RUNTIME ARCHITECTURE: SOURCE TO RYUJIT EXECUTION</text>

  <!-- Step 1: C# Source -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. C# Source Code</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Program.cs</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Roslyn (csc) Compiler</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Syntax &amp; Type Check</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">High-Level Code</text>
  </g>

  <!-- Step 2: CIL Assembly -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Assembly (.dll)</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">CIL (Bytecode)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">ldc.i4, add, ret</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Type Metadata Manifest</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Portable Executable</text>
  </g>

  <!-- Step 3: CLR & RyuJIT -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. CLR (RyuJIT)</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Tier 0 Quick JIT</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Tier 1 Optimized</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Garbage Collector (GC)</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Managed Environment</text>
  </g>

  <!-- Step 4: Machine Instructions -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Native Execution</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">x64 / ARM64 Code</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Direct CPU Cycles</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Stack &amp; Heap Memory</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Hardware Speed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'tiered-compilation-and-assemblies-heading',
      text: {
        en: 'Tiered JIT Compilation and Assembly Metadata',
        bn: 'টায়ার্ড JIT কম্পাইলেশন এবং অ্যাসেম্বলি মেটাডেটা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern .NET runtimes employ Tiered Compilation to balance rapid startup latency with sustained high-throughput performance. On the initial method invocation, RyuJIT produces Tier 0 code without deep optimizations, allowing methods to execute almost immediately. As the CLR monitors execution counters, frequently invoked "hot paths" are promoted to Tier 1 compilation. In Tier 1, the JIT performs aggressive loop unrolling, devirtualization, and method inlining. Furthermore, every assembly carries self-describing metadata detailing every type, field, and method signature, eliminating brittle header files and making dynamic reflection reliable.',
        bn: 'আধুনিক .NET রানটাইম দ্রুত অ্যাপ্লিকেশন বুট এবং দীর্ঘমেয়াদী সর্বোচ্চ গতির ভারসাম্য বজায় রাখতে Tiered Compilation কৌশল ব্যবহার করে। কোনো মেথড প্রথমবার কল করার সময় RyuJIT খুব দ্রুত কোনো গভীর অপটিমাইজেশন ছাড়াই Tier 0 মেশিন কোড তৈরি করে, ফলে কোড সাথে সাথে চালু হয়। অ্যাপ চলার সময় CLR যখন দেখে কোনো মেথড বারবার কল হচ্ছে ("hot path"), তখন সেটিকে স্বয়ংক্রিয়ভাবে Tier 1 কম্পাইলেশনে উন্নীত করা হয়। Tier 1-এ JIT মেথড ইনলাইনিং ও লুপ অপটিমাইজেশন চালিয়ে গতি সর্বোচ্চ বাড়িয়ে দেয়। তাছাড়া প্রতিটি অ্যাসেম্বলিতে স্বয়ংসম্পূর্ণ মেটাডেটা থাকে যাতে সমস্ত টাইপ, ফিল্ড এবং মেথডের বিবরণ সংরক্ষিত থাকে, ফলে কোনো পুরনো হেডার ফাইলের ঝামেলা ছাড়াই রিফ্লেকশন কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of the .NET CLR execution engine, demonstrating CIL opcode emulation and Tier 0 to Tier 1 JIT promotion.',
        bn: '.NET CLR এক্সিকিউশন ইঞ্জিন, CIL অপকোড এমুলেশন এবং টায়ার ০ থেকে টায়ার ১ এ JIT উন্নীতকরণের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of .NET CLR Runtime, CIL Opcode Dispatcher & Tiered RyuJIT

export interface IlInstruction {
  op: 'ldc_i4' | 'add' | 'mul' | 'ret';
  arg?: number;
}

export class ClrRuntimeSimulator {
  private callCount: number = 0;
  private currentTier: 'Tier 0 (Fast Boot)' | 'Tier 1 (Optimized)' = 'Tier 0 (Fast Boot)';

  // Interpreting Common Intermediate Language (CIL) evaluation stack
  public executeIl(instructions: IlInstruction[]): number {
    this.callCount++;

    // Promote to Tier 1 after 5 hot path invocations
    if (this.callCount >= 5) {
      this.currentTier = 'Tier 1 (Optimized)';
    }

    const evalStack: number[] = [];

    for (const inst of instructions) {
      if (inst.op === 'ldc_i4' && inst.arg !== undefined) {
        evalStack.push(inst.arg);
      } else if (inst.op === 'add') {
        const b = evalStack.pop() ?? 0;
        const a = evalStack.pop() ?? 0;
        evalStack.push(a + b);
      } else if (inst.op === 'ret') {
        break;
      }
    }

    return evalStack.pop() ?? 0;
  }

  public getCompilationTier(): string {
    return this.currentTier;
  }
}

// Execution demonstration
const clr = new ClrRuntimeSimulator();

// Program: return 10 + 20; in CIL bytecodes
const addMethod: IlInstruction[] = [
  { op: 'ldc_i4', arg: 10 },
  { op: 'ldc_i4', arg: 20 },
  { op: 'add' },
  { op: 'ret' }
];

// Initial run at Tier 0
const result1 = clr.executeIl(addMethod);
console.log('Calculation Result:', result1); // 30
console.log('Compilation State 1:', clr.getCompilationTier()); // "Tier 0 (Fast Boot)"

// Simulating multiple iterations promoting to Tier 1
for (let i = 0; i < 5; i++) clr.executeIl(addMethod);
console.log('Compilation State 2:', clr.getCompilationTier()); // "Tier 1 (Optimized)"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'CLR (Common Language Runtime)',
          def: {
            en: 'The execution engine that manages .NET programs, providing JIT compilation, garbage collection, and exception handling.',
            bn: '.NET প্রোগ্রাম পরিচালনার মূল এক্সিকিউশন ইঞ্জিন, যা JIT কম্পাইলেশন, মেমোরি পরিষ্কার এবং এক্সেপশন নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'CIL / IL (Intermediate Language)',
          def: {
            en: 'The CPU-independent instruction set that C# compiles into, packaged within portable executable assemblies.',
            bn: 'প্রসেসর-স্বাধীন বাইটকোড নির্দেশনাবলী যাতে C# সোর্স কোড প্রথম ধাপে রূপান্তরিত হয়।'
          }
        },
        {
          term: 'RyuJIT',
          def: {
            en: 'The modern 64-bit Just-In-Time compiler in .NET that converts intermediate bytecode into native machine instructions.',
            bn: '.NET-এর আধুনিক ৬৪-বিট JIT কম্পাইলার যা ইন্টারমিডিয়েট বাইটকোডকে সরাসরি সিপিইউ মেশিন কোডে রূপান্তর করে।'
          }
        },
        {
          term: 'Assembly',
          def: {
            en: 'The fundamental unit of deployment, versioning, and security in .NET, packaged as a .dll or .exe containing IL and metadata.',
            bn: '.NET-এ ডিপ্লয়মেন্ট এবং ভার্সনিংয়ের মূল একক, যা IL কোড ও মেটাডেটা সম্বলিত একটি .dll বা .exe ফাইল।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'csharp-compilation-target-cil-ex1',
      kind: 'mcq',
      topic: 'csharp-compilation-to-intermediate-language',
      question: {
        en: 'What does the C# Roslyn compiler produce when compiling source code files (.cs)?',
        bn: 'C# সোর্স কোড ফাইল (.cs) কম্পাইল করার সময় Roslyn কম্পাইলার কী তৈরি করে?'
      },
      options: [
        {
          en: 'An assembly (.dll or .exe) containing Common Intermediate Language (CIL) bytecodes and comprehensive type metadata',
          bn: 'Common Intermediate Language (CIL) বাইটকোড এবং বিস্তারিত টাইপ মেটাডেটা সম্বলিত একটি অ্যাসেম্বলি (.dll বা .exe)'
        },
        {
          en: 'Direct raw x86 machine instructions for one specific motherboard',
          bn: 'একটি নির্দিষ্ট মাদারবোর্ডের জন্য সরাসরি তৈরি কাঁচা x86 মেশিন কোড'
        },
        {
          en: 'A plain text JavaScript file',
          bn: 'একটি সাধারণ টেক্সট জাভাস্ক্রিপ্ট ফাইল'
        },
        {
          en: 'An uncompressed ZIP archive of PNG graphics',
          bn: 'ছবির আনকম্প্রেসড জিপ ফাইল'
        }
      ],
      answer: 0,
      hint: {
        en: 'C# compiles to intermediate bytecode (IL) plus metadata, not native code.',
        bn: 'C# সরাসরি মেশিন কোডে নয়, বরং মধ্যবর্তী বাইটকোড (IL) এবং মেটাডেটাতে কম্পাইল হয়।'
      },
      explanation: {
        en: 'The Roslyn compiler outputs CIL and metadata into an assembly. The CLR then JIT-compiles this IL into native code at runtime.',
        bn: 'Roslyn কম্পাইলার প্রথমে IL কোড বানায়, যা পরবর্তীতে রানটাইমে CLR দ্বারা নেটিভ কোডে পরিণত হয়।'
      }
    },
    {
      id: 'ryujit-tiered-compilation-ex2',
      kind: 'mcq',
      topic: 'tiered-compilation-tier0-tier1-distinction',
      question: {
        en: 'What is the operational goal of Tiered Compilation (Tier 0 vs Tier 1) in the modern .NET runtime?',
        bn: 'আধুনিক .NET রানটাইমে Tiered Compilation (Tier 0 বনাম Tier 1) কৌশলের মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'Tier 0 compiles methods quickly without optimizations for instant startup; Tier 1 re-compiles frequently executed hot paths with heavy optimizations for maximum throughput',
          bn: 'Tier 0 তাৎক্ষণিক দ্রুত চালুর জন্য কোনো অপটিমাইজেশন ছাড়াই কোড প্রস্তুত করে; আর Tier 1 বারবার চলা হট পাথগুলোকে সর্বোচ্চ গতির জন্য গভীরভাবে অপটিমাইজ করে'
        },
        {
          en: 'Tier 0 is for 32-bit computers and Tier 1 is for 64-bit computers',
          bn: 'Tier 0 হলো ৩২-বিট কম্পিউটারের জন্য এবং Tier 1 হলো ৬৪-বিট কম্পিউটারের জন্য'
        },
        {
          en: 'Tier 0 runs only on weekends while Tier 1 runs on weekdays',
          bn: 'Tier 0 কেবল ছুটির দিনে চলে আর Tier 1 কাজের দিনে চলে'
        },
        {
          en: 'Tier 0 deletes the database and Tier 1 restores it',
          bn: 'Tier 0 ডেটাবেস মুছে ফেলে এবং Tier 1 তা রিস্টোর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tiered compilation balances rapid cold startup with sustained peak execution performance.',
        bn: 'টায়ার্ড কম্পাইলেশন দ্রুত চালু হওয়া এবং পরবর্তীতে সর্বোচ্চ পারফরম্যান্স নিশ্চিত করার সুন্দর সমন্বয় ঘটায়।'
      },
      explanation: {
        en: 'Tier 0 gets code running fast without overhead. When the CLR identifies a method as a hot path, Tier 1 applies full optimizations.',
        bn: 'Tier 0 কোনো ওভারহেড ছাড়া দ্রুত কোড চালায় এবং হট পাথে পৌঁছালে Tier 1 পূর্ণ অপটিমাইজেশন প্রয়োগ করে।'
      }
    },
    {
      id: 'assembly-manifest-metadata-purpose-ex3',
      kind: 'mcq',
      topic: 'assembly-metadata-manifest-purpose',
      question: {
        en: 'Why does a .NET assembly include embedded type metadata alongside its intermediate bytecode?',
        bn: 'একটি .NET অ্যাসেম্বলিতে মধ্যবর্তী বাইটকোডের পাশাপাশি কেন টাইপ মেটাডেটা অন্তর্ভুক্ত থাকে?'
      },
      options: [
        {
          en: 'It makes assemblies completely self-describing, enabling type-safe runtime loading, garbage collection, and reflection without header files',
          bn: 'এটি অ্যাসেম্বলিকে সম্পূর্ণ স্বয়ংসম্পূর্ণ করে তোলে, যার ফলে কোনো সি/সি++ হেডার ফাইল ছাড়াই টাইপ-নিরাপদ লোডিং, রিফ্লেকশন এবং মেমোরি ম্যানেজমেন্ট সম্ভব হয়'
        },
        {
          en: 'It displays graphical advertisements during program execution',
          bn: 'এটি প্রোগ্রাম চলার সময় গ্রাফিকাল বিজ্ঞাপন দেখায়'
        },
        {
          en: 'Metadata is required by the HTTP 2.0 network protocol',
          bn: 'এইচটিটিপি ২.০ নেটওয়ার্ক প্রোটোকলের জন্য মেটাডেটা বাধ্যতামূলক'
        },
        {
          en: 'Metadata limits program memory to 16 megabytes',
          bn: 'মেটাডেটা প্রোগ্রামের মেমোরিকে ১৬ মেগাবাইটে সীমাবদ্ধ রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Assemblies are self-describing modules containing all type information.',
        bn: 'অ্যাসেম্বলিতে সব তথ্যের বিবরণ থাকায় বাইরের কোনো হেডার ফাইলের প্রয়োজন হয় না।'
      },
      explanation: {
        en: '.NET metadata describes every class, interface, method, and parameter, making components self-contained and easily inspected at runtime.',
        bn: 'মেটাডেটা থাকার কারণে রানটাইমে কোনো কোড কী কী মেথড বা টাইপ ধারণ করে তা নিখুঁতভাবে জানা যায়।'
      }
    },
    {
      id: 'managed-heap-generations-count-ex4',
      kind: 'mcq',
      topic: 'clr-garbage-collector-generational-model',
      question: {
        en: 'How many generations (Generation 0, 1, 2) does the standard CLR generational garbage collector use to manage short-lived and long-lived heap objects?',
        bn: 'স্বল্পস্থায়ী এবং দীর্ঘস্থায়ী হিপ অবজেক্ট পরিচালনার জন্য আদর্শ CLR গারবেজ কালেক্টর কয়টি প্রজন্ম (Generation 0, 1, 2) ব্যবহার করে?'
      },
      options: [
        {
          en: '3 generations (Gen 0 for newly allocated objects, Gen 1 as a buffer, and Gen 2 for long-lived surviving objects)',
          bn: '৩ টি প্রজন্ম (নতুন তৈরি অবজেক্টের জন্য Gen 0, বাফার হিসেবে Gen 1 এবং দীর্ঘস্থায়ী অবজেক্টের জন্য Gen 2)'
        },
        {
          en: '10 generations',
          bn: '১০ টি প্রজন্ম'
        },
        {
          en: '1 generation only',
          bn: 'শুধুমাত্র ১ টি প্রজন্ম'
        },
        {
          en: 'Garbage collectors in C# do not use generations',
          bn: 'C#-এ গারবেজ কালেক্টর কোনো প্রজন্ম ব্যবহার করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The CLR uses 3 generations: Gen 0, Gen 1, and Gen 2.',
        bn: 'CLR মেমোরি ব্যবস্থাপনায় ৩ টি প্রজন্ম ব্যবহার করে: Gen 0, Gen 1 এবং Gen 2।'
      },
      explanation: {
        en: 'The generational hypothesis dictates that most objects die young. Gen 0 collections are fast and frequent, while Gen 2 collections are rare.',
        bn: 'বেশিরভাগ অবজেক্ট দ্রুত অপ্রয়োজনীয় হয়ে পড়ে; তাই Gen 0 খুব দ্রুত পরিষ্কার হয় এবং দীর্ঘস্থায়ীগুলো Gen 2 তে যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-runtime-and-the-assembly',
    title: {
      en: '.NET Runtime & Compilation Architecture Mastery Quiz',
      bn: '.NET রানটাইম এবং কম্পাইলেশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-native-aot-vs-jit-runtime',
        kind: 'mcq',
        topic: 'native-aot-vs-jit-mechanics',
        question: {
          en: 'How does Native AOT compilation in modern .NET differ fundamentally from traditional JIT execution?',
          bn: 'আধুনিক .NET-এর Native AOT কম্পাইলেশন সনাতন JIT এক্সিকিউশন থেকে কীভাবে মৌলিকভাবে আলাদা?'
        },
        options: [
          {
            en: 'Native AOT compiles C# directly into machine code at build time, stripping the JIT compiler and unused metadata for sub-millisecond cold startup and minimal memory footprint',
            bn: 'Native AOT বিল্ড করার সময়ই C# কোডকে সরাসরি মেশিন কোডে কম্পাইল করে, ফলে কোনো JIT কম্পাইলার বা অপ্রয়োজনীয় মেটাডেটা থাকে না এবং সাব-মিলিসেকেন্ডে দ্রুত চালু হয়'
          },
          {
            en: 'Native AOT converts C# applications into Python scripts',
            bn: 'Native AOT পুরো C# অ্যাপ্লিকেশনকে পাইথন স্ক্রিপ্টে রূপান্তর করে'
          },
          {
            en: 'Native AOT doubles the CPU power of physical servers',
            bn: 'Native AOT ফিজিক্যাল সার্ভারের সিপিইউ ক্ষমতা দ্বিগুণ করে'
          },
          {
            en: 'JIT compilation was completely deleted in .NET 8',
            bn: '.NET ৮ সংস্করণে JIT কম্পাইলেশন পুরোপুরি মুছে ফেলা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native AOT compiles ahead of time directly to standalone native machine code.',
          bn: 'Native AOT রানটাইমের অপেক্ষা না করে বিল্ডের সময়ই সরাসরি অপারেটিং সিস্টেমের নেটিভ কোড তৈরি করে।'
        },
        explanation: {
          en: 'Native AOT eliminates the RyuJIT runtime compiler overhead, producing self-contained native binaries tailored for serverless and cloud containers.',
          bn: 'JIT কম্পাইলারের প্রয়োজনীয়তা দূর করে Native AOT দ্রুততম স্টার্টআপ এবং স্বল্প মেমোরি খরচের নিশ্চয়তা দেয়।'
        }
      },
      {
        id: 'quiz-large-object-heap-threshold',
        kind: 'mcq',
        topic: 'large-object-heap-threshold-bytes',
        question: {
          en: 'In the CLR garbage collector, what allocation size threshold causes an object to be allocated directly onto the Large Object Heap (LOH) rather than Generation 0?',
          bn: 'CLR গারবেজ কালেক্টরে কোনো অবজেক্টের আকার কত বাইট বা তার বেশি হলে সেটি Generation 0 এর বদলে সরাসরি Large Object Heap (LOH)-এ স্থান পায়?'
        },
        options: [
          {
            en: '85000 bytes (approximately 85 KB); objects at or above this threshold go directly to the LOH to prevent expensive small-heap compaction',
            bn: '৮৫০০০ বাইট (প্রায় ৮৫ কিলোবাইট); এই বা এর বেশি আকারের অবজেক্ট সরাসরি LOH-এ বরাদ্দ হয় যাতে ছোট হিপের সংকোচন খরচ বাঁচে'
          },
          {
            en: '100 bytes',
            bn: '১০০ বাইট'
          },
          {
            en: '10 megabytes',
            bn: '১০ মেগাবাইট'
          },
          {
            en: 'There is no size threshold in .NET',
            bn: '.NET-এ কোনো সাইজ সীমা নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'The CLR Large Object Heap threshold is 85000 bytes.',
          bn: 'CLR-এ ৮৫০০০ বাইটের বেশি আকারের যেকোনো অবজেক্টকে বড় অবজেক্ট হিসেবে ধরা হয়।'
        },
        explanation: {
          en: 'Objects 85000 bytes or larger are allocated on the LOH to avoid copying heavy memory blocks during Gen 0 and Gen 1 garbage collection sweeps.',
          bn: 'ভারী অবজেক্ট বারবার সরানো অত্যন্ত ব্যয়বহুল; তাই ৮৫০০০ বাইট পেরোলেই সেগুলোকে Gen 0 ও Gen 1 এর বদলে সরাসরি LOH-এ রাখা হয়।'
        }
      },
      {
        id: 'quiz-common-type-system-role',
        kind: 'mcq',
        topic: 'common-type-system-cross-language-interop',
        question: {
          en: 'What architectural role does the Common Type System (CTS) play within the .NET runtime ecosystem?',
          bn: '.NET রানটাইম ইকোসিস্টেমে Common Type System (CTS) কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It defines standard data types and rules shared across all .NET languages, enabling seamless cross-language interoperability between C#, F#, and VB.NET',
            bn: 'এটি সমস্ত .NET ভাষার জন্য প্রমিত ডেটা টাইপ ও নিয়ম নির্ধারণ করে, ফলে C#, F# এবং VB.NET এর মধ্যে নির্বিঘ্ন পারস্পরিক সমন্বয় সম্ভব হয়'
          },
          {
            en: 'It is a database query engine inside the Windows kernel',
            bn: 'এটি উইন্ডোজ কার্নেলের ভেতরের একটি ডেটাবেস ইঞ্জিন'
          },
          {
            en: 'CTS restricts all C# variables to integers only',
            bn: 'CTS সমস্ত C# ভেরিয়েবলকে কেবল পূর্ণসংখ্যায় সীমাবদ্ধ রাখে'
          },
          {
            en: 'CTS was replaced by HTML5 in 2014',
            bn: '২০১৪ সালে CTS-কে HTML5 দ্বারা প্রতিস্থাপন করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The CTS ensures all .NET languages agree on type definitions.',
          bn: 'সব .NET ভাষা যেন একে অপরের অবজেক্ট ও ডেটা টাইপ সহজে বুঝতে পারে, CTS তাই নিশ্চিত করে।'
        },
        explanation: {
          en: 'The Common Type System guarantees that an integer or class defined in C# has an identical runtime layout and semantics in F# or VB.NET.',
          bn: 'এক ভাষায় তৈরি লাইব্রেরি অন্য ভাষায় কোনো কনভার্সন ছাড়াই সরাসরি ব্যবহার করার সুবিধা দেয় CTS।'
        }
      },
      {
        id: 'quiz-il-disassembler-tools',
        kind: 'mcq',
        topic: 'inspecting-compiled-cil-bytecode',
        question: {
          en: 'Which standard developer tools allow software engineers to decompile and inspect compiled CIL instructions within a .NET assembly?',
          bn: 'একটি .NET অ্যাসেম্বলির ভেতরের CIL নির্দেশাবলী ডিকম্পাইল ও পরিদর্শন করতে ডেভেলপাররা কোন স্ট্যান্ডার্ড টুলগুলো ব্যবহার করেন?'
        },
        options: [
          {
            en: 'ILSpy, dotPeek, or the built-in command-line tool "ildasm"',
            bn: 'ILSpy, dotPeek অথবা বিল্ট-ইন কমান্ড-লাইন টুল "ildasm"'
          },
          {
            en: 'Adobe Photoshop and Blender',
            bn: 'Adobe Photoshop এবং Blender'
          },
          {
            en: 'Microsoft Word and Excel',
            bn: 'Microsoft Word এবং Excel'
          },
          {
            en: 'CIL bytecodes cannot be inspected or decompiled by design',
            bn: 'CIL কোড কখনোই কোনো টুল দিয়ে পরিদর্শন বা ডিকম্পাইল করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'ILSpy and ildasm are standard tools for inspecting IL instructions.',
          bn: 'ILSpy এবং ildasm হলো অ্যাসেম্বলির ভেতরকার IL কোড দেখার জনপ্রিয় সফটওয়্যার।'
        },
        explanation: {
          en: 'Because CIL and metadata are rich and self-describing, decompilers like ILSpy and ildasm reconstruct human-readable IL and C# code faithfully.',
          bn: 'সমৃদ্ধ মেটাডেটা থাকার কারণে ILSpy খুব সহজেই অ্যাসেম্বলি খুলে নিখুঁত কোড প্রদর্শন করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'types-and-the-class',
    title: {
      en: 'Type System: Value Types, References & Records',
      bn: 'টাইপ সিস্টেম: ভ্যালু টাইপ, রেফারেন্স এবং রেকর্ড'
    }
  }
};
