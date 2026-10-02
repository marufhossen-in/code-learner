import type { Lesson } from '../../../lib/types';

export const TheSharpReleaseLesson: Lesson = {
  slug: 'the-sharp-release',
  tech: 'lang-csharp',
  title: {
    en: 'Release Optimization, Native AOT & Trimming',
    bn: 'রিলিজ অপটিমাইজেশন, Native AOT এবং ট্রিমিং'
  },
  summary: {
    en: 'Ship production-grade C# binaries with zero latency. Master Roslyn compiler release optimizations, configure ILLink trimming with trimming annotations ([RequiresUnreferencedCode]), diagnose trimmer warnings, and deploy instant-boot Native AOT standalone executables.',
    bn: 'শূন্য-ল্যাটেন্সিতে প্রোডাকশন C# বাইনারি ডেপ্লয় করুন। Roslyn কম্পাইলার রিলিজ অপটিমাইজেশন, ট্রিমিং অ্যানোটেশন ([RequiresUnreferencedCode]) দিয়ে ILLink ট্রিমার কনফিগারেশন, ট্রিমার ওয়ার্নিং সমাধান এবং অতি দ্রুতগতির Native AOT এক্সিকিউটেবল।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'release-optimization-and-inlining-heading',
      text: {
        en: 'Release Optimizations, Inlining, and Constant Folding',
        bn: 'রিলিজ অপটিমাইজেশন, মেথড ইনলাইনিং এবং কনস্ট্যান্ট ফোল্ডিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C# (the modern managed systems programming language), the difference between Debug and Release builds has massive implications for performance. In Debug mode, the Roslyn compiler preserves all intermediate stack variables and disables inlining to ensure smooth step-by-step debugging. In contrast, the Release configuration activates aggressive optimizations. Constant expressions are folded at compile time, dead execution branches are eliminated, and small, frequently invoked methods are inlined directly into call sites. Developers can also instruct the RyuJIT runtime compiler to inline hot-path routines using the "[MethodImpl(MethodImplOptions.AggressiveInlining)]" attribute.',
        bn: 'আধুনিক C# (ম্যানেজড সিস্টেম প্রোগ্রামিং ভাষা) ইকোসিস্টেমে Debug এবং Release বিল্ডের মধ্যে পারফরম্যান্সের বিশাল ব্যবধান বিদ্যমান। Debug মোডে Roslyn কম্পাইলার স্টেপ-বাই-স্টেপ ডিবাগিং সহজ করার জন্য প্রতিটি অস্থায়ী স্ট্যাক ভেরিয়েবল অবিকৃত রাখে এবং মেথড ইনলাইনিং বন্ধ রাখে। এর বিপরীতে Release কনফিগারেশন আক্রমণাত্মক অপটিমাইজেশন সক্রিয় করে। কম্পাইল করার সময়ই ধ্রুবক মানের হিসাব চুকিয়ে ফেলা হয় (constant folding), অপ্রয়োজনীয় কোডের শাখা মুছে দেওয়া হয় এবং ছোট ছোট মেথডগুলোকে সরাসরি কল সাইটে ইনলাইন করা হয়। ডেভেলপাররা "[MethodImpl(MethodImplOptions.AggressiveInlining)]" অ্যাট্রিবিউট ব্যবহার করে RyuJIT রানটাইম কম্পাইলারকে গুরুত্বপূর্ণ হট-পাথ রুটিনগুলো সরাসরি ইনলাইন করার নির্দেশ দিতে পারেন।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-phase C# production compilation pipeline: From source code and constant folding to ILLink trimming and Native AOT binary generation.',
        bn: 'চিত্র ১: C# প্রোডাকশন কম্পাইলেশন পাইপলাইনের ৪ টি পর্যায়: সোর্স কোড ও কনস্ট্যান্ট ফোল্ডিং থেকে ILLink ট্রিমিং এবং Native AOT বাইনারি তৈরি।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# RELEASE OPTIMIZATION &amp; NATIVE AOT PIPELINE</text>

  <!-- Step 1: Source & Roslyn -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Roslyn Release</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">dotnet build -c Release</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">/optimize+ Flag Active</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Constant Folding</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Optimized IL Bytecode</text>
  </g>

  <!-- Step 2: Inlining JIT -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. RyuJIT Inlining</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">[AggressiveInlining]</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Zero Call Stack Overhead</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Loop Unrolling</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Sub-Nanosecond Speed</text>
  </g>

  <!-- Step 3: ILLink Trimming -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. ILLink Trimmer</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">PublishTrimmed=true</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Strips Unused Assemblies</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Call-Graph Analysis</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Cuts Binary Size 75%</text>
  </g>

  <!-- Step 4: Native AOT Output -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Native AOT</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">PublishAot=true</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Direct Machine Code</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Sub-10ms Startup</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">25MB Memory Footprint</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'illink-trimming-and-native-aot-heading',
      text: {
        en: 'ILLink Assembly Trimming and Native AOT Compilation',
        bn: 'ILLink অ্যাসেম্বলি ট্রিমিং এবং Native AOT কম্পাইলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When deploying containers to Kubernetes or serverless cloud environments, shipping 100-megabyte binaries adds container pull latency and consumes unnecessary memory. The ILLink trimmer analyzes the root assembly call-graph and strips unreferenced types, cutting artifact sizes by up to 75%. To prevent trimmers from stripping dynamically accessed members, developers annotate reflection points with "[RequiresUnreferencedCode]" or "[DynamicallyAccessedMembers]". When combined with Native AOT ("PublishAot=true"), the compiler completely eliminates the JIT compilation step, generating a standalone native binary that boots in under 10 milliseconds and consumes under 25 megabytes of memory.',
        bn: 'কুবারনেটিস বা সার্ভারলেস ক্লাউডে অ্যাপ্লিকেশন ডেপ্লয় করার সময় ১০০ মেগাবাইটের বিশাল বাইনারি ফাইল ডেপ্লয়মেন্টের গতি কমিয়ে দেয় এবং অপ্রয়োজনীয় মেমোরি খরচ করে। ILLink ট্রিমার সোর্স কোডের কল-গ্রাফ বিশ্লেষণ করে অব্যবহৃত সমস্ত টাইপ ও মেথড ছেঁটে ফেলে, যা বাইনারির আকার ৭৫% পর্যন্ত কমিয়ে আনে। রিফ্লেকশনের কারণে ট্রিমার যাতে ভুলবশত দরকারি কোড মুছে না ফেলে, সেজন্য ডেভেলপাররা "[RequiresUnreferencedCode]" বা "[DynamicallyAccessedMembers]" অ্যানোটেশন ব্যবহার করেন। এর সাথে Native AOT ("PublishAot=true") যুক্ত করলে কোনো জেআইটি (JIT) কম্পাইলার ছাড়াই একটি স্বাধীন নেটিভ এক্সিকিউটেবল ফাইল তৈরি হয়, যা ১০ মিলিসেকেন্ডের কম সময়ে চালু হয় এবং ২৫ মেগাবাইটেরও কম মেমোরি ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# compilation modes: Comparing binary artifact size, memory footprint, and cold-start latency across Debug, Release, Trimmed, and Native AOT configurations.',
        bn: 'C# কম্পাইলেশন মোড, বাইনারি আকার, মেমোরি ব্যবহার এবং কোল্ড স্টার্ট ল্যাটেন্সির TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Release Topologies and Native AOT Metrics

export interface BuildProfile {
  name: string;
  isOptimized: boolean;
  sizeMb: number;
  coldStartMs: number;
  workingSetMb: number;
}

export class CompilationPipelineAnalyzer {
  public getProfile(mode: 'Debug' | 'Release' | 'Release_Trimmed' | 'Native_AOT'): BuildProfile {
    switch (mode) {
      case 'Debug':
        return {
          name: 'Debug Build (/optimize-)',
          isOptimized: false,
          sizeMb: 85,
          coldStartMs: 380,
          workingSetMb: 110
        };
      case 'Release':
        return {
          name: 'Release Build (/optimize+)',
          isOptimized: true,
          sizeMb: 70,
          coldStartMs: 220,
          workingSetMb: 80
        };
      case 'Release_Trimmed':
        return {
          name: 'Release Trimmed (ILLink)',
          isOptimized: true,
          sizeMb: 35,
          coldStartMs: 140,
          workingSetMb: 55
        };
      case 'Native_AOT':
        return {
          name: 'Native Ahead-Of-Time (AOT)',
          isOptimized: true,
          sizeMb: 22,
          coldStartMs: 10,
          workingSetMb: 25
        };
    }
  }
}

// Execution demonstration
const analyzer = new CompilationPipelineAnalyzer();

const debug = analyzer.getProfile('Debug');
const release = analyzer.getProfile('Release');
const aot = analyzer.getProfile('Native_AOT');

console.log('[Debug Mode] Cold Start:', debug.coldStartMs + 'ms, Working Set:', debug.workingSetMb + 'MB');
console.log('[Release Mode] Cold Start:', release.coldStartMs + 'ms, Working Set:', release.workingSetMb + 'MB');
console.log('[Native AOT] Cold Start:', aot.coldStartMs + 'ms, Working Set:', aot.workingSetMb + 'MB');

// Performance calculation
const speedup = Math.round(debug.coldStartMs / aot.coldStartMs);
console.log('Native AOT Startup Speedup Factor:', speedup + 'x faster'); // 38x faster`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Release Build',
          def: {
            en: 'Optimized compiler configuration (/optimize+) that activates constant folding, dead code elimination, and method inlining.',
            bn: 'অপটিমাইজড কম্পাইলার কনফিগারেশন যা কোড ইনলাইনিং ও অপ্রয়োজনীয় কোড মুছে সর্বোচ্চ গতি নিশ্চিত করে।'
          }
        },
        {
          term: 'Method Inlining',
          def: {
            en: 'Compiler optimization replacing a method call directly with the method\'s body, eliminating call stack frame overhead.',
            bn: 'অপটিমাইজেশন যেখানে মেথড কলের বদলে মেথডের কোড সরাসরি বসিয়ে কল স্ট্যাকের খরচ শূন্য করা হয়।'
          }
        },
        {
          term: 'ILLink Trimmer',
          def: {
            en: 'Dead code analysis tool stripping unused IL assemblies and methods to produce lightweight cloud deployment artifacts.',
            bn: 'টুল যা কোড পর্যালোচনা করে অব্যবহৃত লাইব্রেরি ও মেথড ছেঁটে বাইনারির আকার সংকুচিত করে।'
          }
        },
        {
          term: 'Native AOT',
          def: {
            en: 'Ahead-Of-Time compilation emitting pure native CPU machine code with no JIT compiler or IL bytecode interpreter.',
            bn: 'সরাসরি প্রসেসরের মেশিন কোডে কম্পাইল করার ব্যবস্থা যা কোনো জেআইটি ছাড়া তাত্ক্ষণিক অ্যাপ চালু করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'debug-vs-release-optimizations-ex1',
      kind: 'mcq',
      topic: 'debug-vs-release-optimizations-inlining',
      question: {
        en: 'Why is running C# benchmark measurements against a "Debug" build fundamentally invalid?',
        bn: '"Debug" বিল্ডের ওপর C# বেঞ্চমার্ক পরিমাপ চালানো কেন সম্পূর্ণ ভিত্তিহীন ও অর্থহীন?'
      },
      options: [
        {
          en: 'Debug builds disable compiler optimizations (/optimize-), disable method inlining, and emit sequence points for debuggers, causing code to run significantly slower than production Release builds',
          bn: 'Debug বিল্ড কম্পাইলার অপটিমাইজেশন (/optimize-) এবং মেথড ইনলাইনিং বন্ধ রাখে এবং ডিবাগারের জন্য বাড়তি কোড তৈরি করে, ফলে প্রোডাকশন Release বিল্ডের তুলনায় কোড অনেক ধীরগতিতে চলে'
        },
        {
          en: 'Debug builds can only execute on Mondays',
          bn: 'Debug বিল্ড কেবল সোমবারে রান করতে পারে'
        },
        {
          en: 'Debug builds format the computer hard drive',
          bn: 'Debug বিল্ড কম্পিউটারের হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'There is zero operational difference between Debug and Release',
          bn: 'Debug এবং Release এর মধ্যে কোনো বাস্তব পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Debug builds omit optimizations to prioritize debugging fidelity.',
        bn: 'Debug মোডে ডিবাগিংয়ের সুবিধার্থে অপটিমাইজেশন বন্ধ রাখা হয়, তাই বেঞ্চমার্ক সর্বদা Release মোডেই করতে হয়।'
      },
      explanation: {
        en: 'Benchmarking requires Release builds with optimization (/optimize+) enabled. Debug builds introduce false overhead that distorts performance results.',
        bn: 'প্রকৃত কর্মক্ষমতা যাচাইয়ের জন্য সর্বদা রিলিজ মোডে বেঞ্চমার্ক পরীক্ষা করা প্রকৌশলীদের নিয়ম।'
      }
    },
    {
      id: 'illink-trimming-callgraph-ex2',
      kind: 'mcq',
      topic: 'illink-trimming-callgraph-analysis',
      question: {
        en: 'How does the ILLink trimmer determine which types and methods to keep when "<PublishTrimmed>true</PublishTrimmed>" is enabled?',
        bn: '"<PublishTrimmed>true</PublishTrimmed>" সক্রিয় থাকলে ILLink ট্রিমার কীভাবে নির্ধারণ করে কোন ক্লাস ও মেথডগুলো রাখতে হবে এবং কোনগুলো বাদ দিতে হবে?'
      },
      options: [
        {
          en: 'It performs static call-graph reachability analysis starting from the Main entry point, preserving only the assemblies, types, and methods proven to be reachable',
          bn: 'এটি Main মেথড থেকে শুরু করে স্ট্যাটিক কল-গ্রাফ বিশ্লেষণ চালায় এবং কেবল সেই সব অ্যাসেম্বলি, টাইপ ও মেথড সংরক্ষণ করে যেগুলোতে পৌঁছানোর স্পষ্ট পথ পাওয়া যায়'
        },
        {
          en: 'It deletes all methods with names longer than 10 letters',
          bn: 'যেসব মেথডের নাম ১০ অক্ষরের বেশি সেগুলো সব মুছে ফেলে'
        },
        {
          en: 'It randomly selects 50 percent of the files to delete',
          bn: 'এটি দৈবচয়নের ভিত্তিতে ৫০ শতাংশ ফাইল মুছে দেয়'
        },
        {
          en: 'Trimming requires an active internet connection to Microsoft Azure',
          bn: 'ট্রিমিংয়ের জন্য মাইক্রোসফট এজুরে সক্রিয় ইন্টারনেট সংযোগ আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'ILLink walks the call graph from Main, stripping unreferenced code.',
        bn: 'ট্রিমার মেইন মেথড থেকে কোডের নেটওয়ার্ক পর্যালোচনা করে অপ্রয়োজনীয় অংশগুলো মুছে ফেলে।'
      },
      explanation: {
        en: 'ILLink acts as a linker that eliminates dead code. Any type or member not statically reached from the entry point is stripped from the output binary.',
        bn: 'অব্যবহৃত কোড বাদ যাওয়ায় ক্লাউডে প্রেরিত অ্যাপ্লিকেশনের সাইজ অনেক ছোট হয়।'
      }
    },
    {
      id: 'requiresunreferencedcode-attribute-ex3',
      kind: 'mcq',
      topic: 'requiresunreferencedcode-trimming-warning-annotation',
      question: {
        en: 'What is the purpose of decorating a method with "[RequiresUnreferencedCode("Uses reflection to find plugins")]" in modern .NET?',
        bn: 'আধুনিক .NET-এ কোনো মেথডের ওপর "[RequiresUnreferencedCode("Uses reflection to find plugins")]" অ্যাট্রিবিউট ব্যবহার করার উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It informs the ILLink trimmer and the developer that the method relies on dynamic reflection that is unsafe with trimming, prompting compiler warning IL2026 at call sites',
          bn: 'এটি ILLink ট্রিমার এবং ডেভেলপারকে সতর্ক করে যে মেথডটি ডায়নামিক রিফ্লেকশনের ওপর নির্ভরশীল যা ট্রিমিংয়ের সাথে অনিরাপদ, ফলে কল সাইটে কম্পাইলার IL2026 ওয়ার্নিং দেয়'
        },
        {
          en: 'It tells the operating system to delete the method from memory',
          bn: 'এটি অপারেটিং সিস্টেমকে মেমোরি থেকে মেথডটি মুছে ফেলতে বলে'
        },
        {
          en: 'It encrypts the method with an AES-256 password',
          bn: 'এটি মেথডটিকে AES-256 পাসওয়ার্ড দিয়ে লক করে'
        },
        {
          en: 'RequiresUnreferencedCode is exclusively used in unit tests',
          bn: 'RequiresUnreferencedCode কেবল ইউনিট টেস্টে ব্যবহৃত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'RequiresUnreferencedCode warns callers that a method is trim-incompatible.',
        bn: 'মেথডটিতে রিফ্লেকশন থাকার কারণে ট্রিমিংয়ে সমস্যা হতে পারে, তা কলারকে সতর্ক করতেই এটি ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'The attribute marks APIs that require unreferenced code, surfacing trim warnings so developers can provide source-generated alternatives or preserve required metadata.',
        bn: 'ট্রিমিংয়ের বাগ আগে থেকেই শনাক্ত করে সমাধান নিশ্চিত করতে এই অ্যানোটেশন অপরিহার্য।'
      }
    },
    {
      id: 'native-aot-benefits-footprint-ex4',
      kind: 'mcq',
      topic: 'native-aot-footprint-instant-startup',
      question: {
        en: 'Why is Native AOT compilation ("PublishAot=true") revolutionary for microservices deployed on cloud container platforms?',
        bn: 'ক্লাউড কনটেইনার প্ল্যাটফর্মে মাইক্রোসার্ভিস ডেপ্লয় করার জন্য Native AOT কম্পাইলেশন ("PublishAot=true") কেন বৈপ্লবিক?'
      },
      options: [
        {
          en: 'It generates native machine code directly; eliminating the JIT compiler reduces cold start latency to under 10 milliseconds and slashes working set memory down to 25 megabytes',
          bn: 'এটি সরাসরি মেশিন কোড তৈরি করে; কোনো জেআইটি (JIT) কম্পাইলার না থাকায় কোল্ড স্টার্ট ল্যাটেন্সি ১০ মিলিসেকেন্ডের নিচে নেমে আসে এবং মেমোরি খরচ ২৫ মেগাবাইটে নেমে আসে'
        },
        {
          en: 'Native AOT applications can run on powered-off computers',
          bn: 'Native AOT অ্যাপ্লিকেশন বন্ধ কম্পিউটারেও চলতে পারে'
        },
        {
          en: 'It automatically writes the frontend React code for the application',
          bn: 'এটি নিজে থেকেই অ্যাপ্লিকেশনের জন্য ফ্রন্টএন্ড রিঅ্যাক্ট কোড লিখে ফেলে'
        },
        {
          en: 'Native AOT was removed in modern .NET 8',
          bn: 'আধুনিক .NET ৮-এ Native AOT বাদ দেওয়া হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Native AOT delivers instantaneous sub-10ms startup and minuscule memory consumption.',
        bn: 'কোনো রানটাইম কম্পাইলেশন না থাকায় অ্যাপ চোখের পলকে চালু হয় এবং সামান্য র্যাম ব্যবহার করে।'
      },
      explanation: {
        en: 'Native AOT replaces runtime JIT with ahead-of-time compiled native machine code, optimizing serverless scaling and reducing cloud container hosting costs.',
        bn: 'সার্ভারলেস ফাংশন ও ক্লাউড অটো-স্কেলিংয়ের জন্য এটি আধুনিক C# প্রোগ্রামিংয়ের শ্রেষ্ঠ হাতিয়ার।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-sharp-release',
    title: {
      en: 'C# Release Optimization & Native AOT Mastery Quiz',
      bn: 'C# রিলিজ অপটিমাইজেশন এবং Native AOT কুইজ'
    },
    questions: [
      {
        id: 'quiz-deterministic-builds-reproducible',
        kind: 'mcq',
        topic: 'deterministic-builds-reproducible-binaries',
        question: {
          en: 'What guarantee does enabling the "<Deterministic>true</Deterministic>" build property provide in modern C# CI/CD pipelines?',
          bn: 'আধুনিক C# CI/CD পাইপলাইনে "<Deterministic>true</Deterministic>" বিল্ড প্রপার্টি কোন নিশ্চয়তা প্রদান করে?'
        },
        options: [
          {
            en: 'Compiling the exact same source code with the same compiler options on any machine produces byte-for-byte identical binary output, enabling verified reproducible builds',
            bn: 'যেকোনো কম্পিউটারে একই সোর্স কোড ও একই অপশন দিয়ে কম্পাইল করলে ঠিক একই বাইটের নিখুঁত অভিন্ন বাইনারি ফাইল প্রস্তুত হয়, যা বিশ্বস্ত রিপ্রোডিউসিবল বিল্ড নিশ্চিত করে'
          },
          {
            en: 'It guarantees the code will never have logical bugs',
            bn: 'এটি নিশ্চয়তা দেয় যে কোডে কোনো লজিক্যাল বাগ থাকবে না'
          },
          {
            en: 'It deletes all third-party NuGet packages from disk',
            bn: 'এটি ডিস্ক থেকে সমস্ত থার্ড-পার্টি নুগেট প্যাকেজ মুছে ফেলে'
          },
          {
            en: 'Deterministic builds only work on macOS laptops',
            bn: 'Deterministic বিল্ড কেবল ম্যাক ওএস ল্যাপটপে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deterministic builds produce byte-for-byte identical assemblies from identical inputs.',
          bn: 'ইনপুট একই থাকলে বাইনারি আউটপুটও ১০০% এক হবে, যা সফটওয়্যার সাপ্লাই চেইন নিরাপত্তায় অপরিহার্য।'
        },
        explanation: {
          en: 'Deterministic compilation strips non-deterministic metadata like timestamps and absolute file paths, allowing independent security auditors to verify binary authenticity.',
          bn: 'টাইমস্ট্যাম্প বা লোকাল পাথ মুছে ফেলে নিখুঁত বাইনারি তৈরি নিশ্চিত করার এটিই মানসম্মত নিয়ম।'
        }
      },
      {
        id: 'quiz-reflection-emit-prohibition-native-aot',
        kind: 'mcq',
        topic: 'reflection-emit-banned-native-aot',
        question: {
          en: 'Why is "System.Reflection.Emit" strictly unsupported and forbidden in Native AOT compiled C# binaries?',
          bn: 'Native AOT কম্পাইল করা C# বাইনারিতে "System.Reflection.Emit" কেন কঠোরভাবে নিষিদ্ধ ও অসমর্থিত?'
        },
        options: [
          {
            en: 'Native AOT contains no JIT compiler or IL bytecode interpreter at runtime; emitting new IL bytecode dynamically at runtime cannot be translated into machine instructions',
            bn: 'Native AOT বাইনারিতে রানটাইমে কোনো জেআইটি (JIT) বা IL ইন্টারপ্রেটার থাকে না; রানটাইমে তৈরি নতুন IL বাইটকোডকে মেশিন কোডে রূপান্তর করা আর সম্ভব হয় না'
          },
          {
            en: 'Because Reflection.Emit only operates on Windows 3.1',
            bn: 'কারণ Reflection.Emit কেবল উইন্ডোজ ৩.১-এ কাজ করে'
          },
          {
            en: 'Reflection.Emit overheats the server hard disk',
            bn: 'Reflection.Emit সার্ভারের হার্ড ডিস্ক অতিরিক্ত গরম করে ফেলে'
          },
          {
            en: 'Reflection.Emit requires an active printer connection',
            bn: 'Reflection.Emit ব্যবহারের জন্য প্রিন্টার থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'AOT has no JIT compiler at runtime to convert emitted IL into machine code.',
          bn: 'রানটাইমে নতুন মেশিন কোড তৈরির কোনো কম্পাইলার না থাকায় ডায়নামিক কোড তৈরি করা সম্ভব নয়।'
        },
        explanation: {
          en: 'Without a runtime JIT, new IL generated dynamically by Reflection.Emit cannot be compiled into CPU instructions. Roslyn Source Generators must be used at build time instead.',
          bn: 'তাই রানটাইমে কোড না বানিয়ে বিল্ডের সময় Roslyn সোর্স জেনারেটর ব্যবহার করতে হয়।'
        }
      },
      {
        id: 'quiz-dynamicallyaccessedmembers-types-preservation',
        kind: 'mcq',
        topic: 'dynamicallyaccessedmembers-trimmer-preservation',
        question: {
          en: 'How does the "[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)]" attribute protect code from ILLink trimming crashes?',
          bn: '"[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)]" অ্যাট্রিবিউট কীভাবে কোডকে ILLink ট্রিমিং ক্র্যাশ থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'It instructs the ILLink trimmer to unconditionally preserve all public constructors on the annotated type, preventing them from being stripped during dead-code elimination',
            bn: 'এটি ILLink ট্রিমারকে নির্দেশ দেয় যেন চিহ্নিত টাইপের সমস্ত পাবলিক কনস্ট্রাক্টর অক্ষত রাখা হয় এবং ডেড-কোড ট্রিমিংয়ের সময় সেগুলোকে মুছে না ফেলা হয়'
          },
          {
            en: 'It deletes all private constructors from the class',
            bn: 'এটি ক্লাস থেকে সমস্ত প্রাইভেট কনস্ট্রাক্টর মুছে দেয়'
          },
          {
            en: 'It converts the class into an immutable record struct',
            bn: 'এটি ক্লাসটিকে একটি ইমিউটেবল রেকর্ড স্ট্রাক্টে রূপান্তর করে'
          },
          {
            en: 'DynamicallyAccessedMembers was removed in modern C#',
            bn: 'আধুনিক C# এ DynamicallyAccessedMembers বাদ দেওয়া হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'DynamicallyAccessedMembers tells the trimmer which members to preserve for reflection.',
          bn: 'রিফ্লেকশনের জন্য কোন কোন মেম্বার অবশ্যই দরকার তা ট্রিমারকে স্পষ্ট নির্দেশ দিতে এটি লাগে।'
        },
        explanation: {
          en: 'When a method uses reflection to invoke constructors (such as in dependency injection or deserialization), this attribute forces the trimmer to keep those members intact.',
          bn: 'ফলে ট্রিমিংয়ের পরও রানটাইমে রিফ্লেকশন ঠিকমতো কাজ করে এবং কোনো এক্সেপশন ঘটে না।'
        }
      },
      {
        id: 'quiz-strip-symbols-publish-size',
        kind: 'mcq',
        topic: 'strip-symbols-native-aot-binary-size',
        question: {
          en: 'What is the operational effect of configuring "<StripSymbols>true</StripSymbols>" when publishing a Native AOT binary for production Linux containers?',
          bn: 'প্রোডাকশন লিনাক্স কনটেইনারের জন্য Native AOT বাইনারি পাবলিশ করার সময় "<StripSymbols>true</StripSymbols>" কনফিগার করার অপারেশনাল সুবিধা কী?'
        },
        options: [
          {
            en: 'It strips debugging symbol tables and metadata from the compiled ELF executable, reducing binary file size by several megabytes while shipping standalone .dbg symbol files separately for crash diagnostics',
            bn: 'এটি কম্পাইল্ড এক্সিকিউটেবল থেকে ডিবাগিং সিম্বল ও মেটাডেটা মুছে ফেলে ফাইলের আকার কয়েক মেগাবাইট সংকুচিত করে, আর ক্র্যাশ বিশ্লেষণের জন্য আলাদা .dbg ফাইল সংরক্ষণ করে'
          },
          {
            en: 'It permanently deletes all log files from the server',
            bn: 'এটি সার্ভার থেকে সমস্ত লগ ফাইল চিরতরে মুছে ফেলে'
          },
          {
            en: 'It converts the C# application into a Windows batch script',
            bn: 'এটি C# অ্যাপ্লিকেশনটিকে একটি উইন্ডোজ ব্যাচ স্ক্রিপ্টে রূপান্তর করে'
          },
          {
            en: 'StripSymbols is only supported for 32-bit architecture',
            bn: 'StripSymbols কেবল ৩২-বিট আর্কিটেকচারে সমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'StripSymbols removes debug symbol tables from the native binary to shrink file size.',
          bn: 'বাইনারি থেকে অপ্রয়োজনীয় সিম্বল মুছে ফেলে ফাইলকে অতি সংক্ষিপ্ত ও হালকা রাখার এটি স্ট্যান্ডার্ড প্র্যাকটিস।'
        },
        explanation: {
          en: 'Stripping symbols removes non-essential symbol tables from production binaries, maximizing cloud download speeds while allowing stack traces to be decoded using external symbols.',
          bn: 'প্রোডাকশন কনটেইনার অতি দ্রুত ডাউনলোড ও ডেপ্লয় করতে এটি ক্লাউড ইঞ্জিনিয়ারদের প্রথম পছন্দ।'
        }
      }
    ]
  }
};
