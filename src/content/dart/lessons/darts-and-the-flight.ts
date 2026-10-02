import type { Lesson } from '../../../lib/types';

export const DartsAndTheFlightLesson: Lesson = {
  slug: 'darts-and-the-flight',
  tech: 'dart',
  title: {
    en: 'Dart Fundamentals & The Dual-Execution Engine (JIT vs AOT)',
    bn: 'Dart মৌলিক ভিত্তি এবং ডুয়াল-এক্সিকিউশন ইঞ্জিন (JIT বনাম AOT)'
  },
  summary: {
    en: 'Master the foundational execution architecture of Google\'s Dart language. Explore the dual-mode compiler pipeline contrasting Just-In-Time (JIT) compilation for sub-second hot reload development against Ahead-Of-Time (AOT) native machine code compilation for production releases, understand the single-entry main() execution model, and navigate top-level variables and functions.',
    bn: 'গুগলের তৈরি Dart ভাষার ভিত্তি এবং ডুয়াল-এক্সিকিউশন ইঞ্জিন আয়ত্ত করুন। সেকেন্ডের ভগ্নাংশে হট রিলোডের জন্য জাস্ট-ইন-টাইম (JIT) ডেভেলপমেন্ট বনাম প্রোডাকশনের জন্য সরাসরি নেটিভ মেশিন কোডে অ্যাহেড-অফ-টাইম (AOT) কম্পাইলেশন পাইপলাইন, সিঙ্গেল-এন্ট্রি main() ফাংশন এবং টপ-লেভেল কাঠামোর কার্যপদ্ধতি।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'dual-execution-jit-vs-aot-heading',
      text: {
        en: 'The Dual-Execution Engine: JIT Development versus AOT Production',
        bn: 'ডুয়াল-এক্সিকিউশন ইঞ্জিন: JIT ডেভেলপমেন্ট বনাম AOT প্রোডাকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Most modern languages force engineers to choose between slow interpreted iteration or cumbersome static compilation cycles. In Dart (Google\'s client-optimized programming language for mobile and web apps), this dilemma is resolved through a dual-mode execution engine. During development, the Dart Virtual Machine operates in Just-In-Time (JIT) mode. JIT compiles modified code dynamically into running memory in under 500 milliseconds, empowering developers with state-preserving Hot Reload. For production distribution, the toolchain switches to Ahead-Of-Time (AOT) compilation. AOT strips the virtual machine entirely, compiling source code directly into native mobile CPU machine instructions for instant application startup and fluid 60 frames per second rendering.',
        bn: 'অধিকাংশ প্রোগ্রামিং ভাষা ডেভেলপারদের হয় ধীরগতির ইন্টারপ্রিটেশন নয়তো দীর্ঘস্থায়ী স্ট্যাটিক কম্পাইলেশনের মধ্যে যেকোনো একটি বেছে নিতে বাধ্য করে। কিন্তু Dart (মোবাইল ও ওয়েব অ্যাপের জন্য গুগলের তৈরি ক্লায়েন্ট-অপটিমাইজড ভাষা)-এ এই দ্বন্দ্ব নিরসন করা হয়েছে একটি যুগল-মোড বা ডুয়াল-এক্সিকিউশন ইঞ্জিনের মাধ্যমে। ডেভেলপমেন্ট চলাকালে Dart ভার্চুয়াল মেশিন জাস্ট-ইন-টাইম (JIT) মোডে কাজ করে। JIT নতুন কোডকে ৫০০ মিলিসেকেন্ডেরও কম সময়ে মেমোরিতে ঢুকিয়ে দিয়ে স্টেট ঠিক রেখে হট রিলোড সুবিধা দেয়। প্রোডাকশন রিলিজের সময় টুলচেনটি সরাসরি অ্যাহেড-অফ-টাইম (AOT) মোডে চলে যায়। AOT ভার্চুয়াল মেশিন বাদ দিয়ে সোর্স কোডকে সরাসরি নেটিভ মোবাইল সিপিইউ মেশিন নির্দেশে রূপান্তর করে, যা তাৎক্ষণিক অ্যাপ চালু হওয়া এবং প্রতি সেকেন্ডে ৬০ ফ্রেমের মসৃণ রেন্ডারিং নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Dart dual-compiler architecture: Development JIT engine powers 500ms Hot Reload, while Production AOT compiler produces native ARM machine code running at 60 FPS.',
        bn: 'চিত্র ১: Dart ডুয়াল-কম্পাইলার আর্কিটেকচার: ডেভেলপমেন্ট JIT ইঞ্জিন ৫০০ মিলিসেকেন্ডে হট রিলোড দেয়, আর প্রোডাকশন AOT কম্পাইলার ৬০ ফ্রেমরেটের নেটিভ মেশিন কোড তৈরি করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART DUAL-EXECUTION ARCHITECTURE: JIT VS AOT</text>

  <!-- Left: Development JIT Mode -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Development: Dart VM (JIT Mode)</text>

    <rect x="15" y="45" width="330" height="42" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">Source Code + Incremental Delta</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Developer edits Dart UI files</text>

    <!-- VM & Hot reload -->
    <rect x="15" y="98" width="330" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">Sub-500ms State-Preserving Hot Reload</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Injects updated bytecode into running VM heap</text>

    <!-- Benefit -->
    <rect x="15" y="160" width="330" height="60" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Productivity Benefit:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Zero restart delay | UI state kept intact during testing</text>
  </g>

  <!-- Right: Production AOT Mode -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Production: Native Binary (AOT Mode)</text>

    <rect x="15" y="45" width="335" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">Ahead-of-Time Native Compiler</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Whole-program optimization &amp; tree shaking</text>

    <!-- Native Code -->
    <rect x="15" y="98" width="335" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">Direct ARM64 / x86_64 Machine Code</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Zero VM overhead | No JIT warm-up stutters</text>

    <!-- Performance -->
    <rect x="15" y="160" width="335" height="60" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="182" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Execution Benefit:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Instant startup | Stable 60 FPS jank-free performance</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'entrypoint-and-top-level-structure-heading',
      text: {
        en: 'The main() Entrypoint, Top-Level Scope, and Compilation Targets',
        bn: 'main() এন্ট্রি-পয়েন্ট, টপ-লেভেল স্কোপ এবং কম্পাইলেশন টার্গেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every Dart application begins execution inside a singular top-level function named "main()". Unlike Java or C# where every function must be wrapped inside a class definition, Dart supports top-level functions, top-level constants, and standalone variables naturally. The main entrypoint accepts optional command-line arguments formatted as "List<String> args". Beyond native mobile compilation, the Dart compiler targets the modern web via "dart2js" and next-generation "dart2wasm" (WebAssembly). Running Wasm bytecode unlocks near-native canvas rendering speeds directly inside web browsers, unifying mobile and web frontends under 1 compiler toolchain.',
        bn: 'প্রতিটি Dart অ্যাপ্লিকেশন "main()" নামের একটি একক টপ-লেভেল ফাংশনের মাধ্যমে কাজ শুরু করে। Java বা C#-এর মতো প্রতিটি ফাংশনকে ক্লাসের ভেতর বন্দি রাখতে না করে Dart স্বাভাবিকভাবেই স্বাধীন টপ-লেভেল ফাংশন, কনস্ট্যান্ট এবং ভ্যারিয়েবল সমর্থন করে। main ফাংশনটি ইচ্ছাধীনভাবে "List<String> args" আকারে কমান্ড-লাইন আর্গুমেন্ট গ্রহণ করতে পারে। শুধু নেটিভ মোবাইল কম্পাইলেশনই নয়, Dart কম্পাইলার "dart2js" এবং আধুনিক "dart2wasm" (WebAssembly) দিয়ে ওয়েব ব্রাউজারের জন্যও কোড তৈরি করে। ব্রাউজারে সরাসরি Wasm বাইটকোড চালানো নেটিভ গতির ক্যানভাস রেন্ডারিং উপহার দেয়, যা মোবাইল ও ওয়েব উভয় জগতকে ১ টি একক কম্পাইলার টুলচেনে সংযুক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart execution engine comparing JIT development cycle times against AOT production binary startup latency and throughput.',
        bn: 'Dart এক্সিকিউশন ইঞ্জিনের JIT ডেভেলপমেন্ট গতি বনাম AOT প্রোডাকশন রিলিজের পারফরম্যান্সের তুলনামূলক TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Dart Dual-Execution Engine: JIT Development vs AOT Production Compilation

export class DartExecutionEngineSimulator {
  // 1. Simulates Development JIT Mode inside the Dart VM
  public static runJITDevelopmentSession(codeEditCount: number): {
    mode: string;
    hotReloadDurationMs: number;
    statePreserved: boolean;
    vmOverheadBytes: number;
  } {
    // Sub-second hot reload: average 300ms to 450ms
    const reloadDuration = 350;
    return {
      mode: 'JIT (Dart VM)',
      hotReloadDurationMs: reloadDuration,
      statePreserved: true,
      vmOverheadBytes: 25000000 // ~25MB VM runtime overhead during debug
    };
  }

  // 2. Simulates Production AOT Native Compilation
  public static runAOTProductionBuild(): {
    mode: string;
    startupLatencyMs: number;
    framesPerSecond: number;
    binarySizeBytes: number;
    vmIncluded: boolean;
  } {
    // Instant startup with zero JIT compilation pause
    return {
      mode: 'AOT (Ahead-of-Time Native ARM64/x64)',
      startupLatencyMs: 16, // Sub-20ms instant launch
      framesPerSecond: 60,  // Rock-solid 60 FPS
      binarySizeBytes: 8500000, // ~8.5MB stripped standalone native binary
      vmIncluded: false // Virtual machine stripped completely!
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Dart JIT Development Engine ---');
const devSession = DartExecutionEngineSimulator.runJITDevelopmentSession(5);
console.log('Engine Mode:', devSession.mode);
console.log('Hot Reload Cycle Time:', devSession.hotReloadDurationMs, 'ms (< 500ms)'); // 350 ms
console.log('Was UI State Preserved?:', devSession.statePreserved); // true

console.log('\n--- 2. Testing Dart AOT Production Compiler ---');
const prodArtifact = DartExecutionEngineSimulator.runAOTProductionBuild();
console.log('Release Mode:', prodArtifact.mode);
console.log('Application Startup Latency:', prodArtifact.startupLatencyMs, 'ms'); // 16 ms
console.log('Rendering Target Speed:', prodArtifact.framesPerSecond, 'FPS'); // 60 FPS
console.log('Virtual Machine Stripped?:', !prodArtifact.vmIncluded); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Dart VM',
          def: {
            en: 'Virtual machine executing Dart code in development, offering dynamic compilation and state-preserving hot reload.',
            bn: 'ভার্চুয়াল মেশিন যা ডেভেলপমেন্টে দ্রুত কোড চালায় এবং স্টেট ঠিক রেখে তাৎক্ষণিক হট রিলোড দেয়।'
          }
        },
        {
          term: 'Just-In-Time (JIT)',
          def: {
            en: 'Compilation strategy translating code to machine instructions at runtime, enabling rapid developer iteration.',
            bn: 'কম্পাইলেশন কৌশল যা অ্যাপ চলার সময় কোড আপডেট করে দ্রুত পরীক্ষা-নিরীক্ষার সুযোগ দেয়।'
          }
        },
        {
          term: 'Ahead-Of-Time (AOT)',
          def: {
            en: 'Compilation strategy translating source code into direct native machine instructions prior to release execution.',
            bn: 'কম্পাইলেশন কৌশল যা রিলিজের আগেই সোর্স কোডকে সরাসরি নেটিভ মেশিন কোডে রূপান্তর করে গতি বাড়ায়।'
          }
        },
        {
          term: 'Hot Reload',
          def: {
            en: 'Sub-second development feature injecting source code updates directly into running memory without resetting state.',
            bn: 'ফিচার যা চলমান অ্যাপ বন্ধ না করেই সেকেন্ডের ভগ্নাংশে নতুন কোড মেমোরিতে যুক্ত করে আউটপুট দেখায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jit-hot-reload-mechanism-ex1',
      kind: 'mcq',
      topic: 'dart-jit-hot-reload-developer-productivity',
      question: {
        en: 'How does Dart\'s Just-In-Time (JIT) compilation enable sub-second Hot Reload during mobile application development?',
        bn: 'Dart-এর জাস্ট-ইন-টাইম (JIT) কম্পাইলেশন কীভাবে মোবাইল অ্যাপ ডেভেলপমেন্টের সময় সেকেন্ডের ভগ্নাংশে হট রিলোড নিশ্চিত করে?'
      },
      options: [
        {
          en: 'The Dart VM injects modified source code deltas directly into running memory in under 500 milliseconds without losing user interface state or restarting the app',
          bn: 'Dart VM ইউজার ইন্টারফেস স্টেট ঠিক রেখে এবং অ্যাপ রিস্টার্ট না করে ৫০০ মিলিসেকেন্ডেরও কম সময়ে সরাসরি চলমান মেমোরিতে কোডের পরিবর্তনগুলো যুক্ত করে'
        },
        {
          en: 'It accelerates the physical CPU clock frequency by 10 percent',
          bn: 'এটি সিপিইউ ঘড়ির গতি ১০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'It formats all Dart files with 2-space indentation automatically',
          bn: 'এটি সমস্ত Dart ফাইলকে স্বয়ংক্রিয়ভাবে ২-স্পেস ইন্ডেন্টেশন দিয়ে সাজায়'
        },
        {
          en: 'Hot Reload was deprecated in Dart 2.0',
          bn: 'Dart ২.০ সংস্করণে হট রিলোড বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'JIT injects updated code into the running VM without state loss in under 500ms.',
        bn: 'অ্যাপ বন্ধ না করে মেমোরিতে সরাসরি কোড ঢুকিয়ে দেওয়ার অনন্য প্রযুক্তি।'
      },
      explanation: {
        en: 'JIT compilation eliminates lengthy rebuild cycles. Code updates take effect in sub-second intervals while preserving current screen variables and navigational position.',
        bn: 'এর মাধ্যমে অ্যাপের বর্তমান অবস্থা অক্ষত রেখেই নিমেষের মধ্যে কোডের আউটপুট যাচাই করা যায়।'
      }
    },
    {
      id: 'aot-native-compilation-advantage-ex2',
      kind: 'mcq',
      topic: 'aot-native-compilation-instant-startup',
      question: {
        en: 'Why does Dart switch to Ahead-Of-Time (AOT) compilation for production release builds on iOS and Android?',
        bn: 'iOS এবং Android-এ প্রোডাকশন রিলিজের জন্য Dart কেন অ্যাহেড-অফ-টাইম (AOT) কম্পাইলেশন বেছে নেয়?'
      },
      options: [
        {
          en: 'It compiles source code directly into native ARM machine code, stripping the VM to deliver instant app startup and prevent runtime JIT warm-up frame drops',
          bn: 'এটি সোর্স কোডকে সরাসরি নেটিভ ARM মেশিন কোডে রূপান্তর করে এবং VM বাদ দিয়ে তাত্ক্ষণিক অ্যাপ চালু হওয়া ও মসৃণ রেন্ডারিং নিশ্চিত করে'
        },
        {
          en: 'It reduces the battery consumption of the phone by 90 percent',
          bn: 'এটি ফোনের ব্যাটারি খরচ ৯০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'It converts the application into an SQL database schema',
          bn: 'এটি অ্যাপ্লিকেশনটিকে একটি এসকিউএল ডাটাবেজ স্কিমায় রূপান্তর করে'
        },
        {
          en: 'AOT compilation is only supported on Linux servers',
          bn: 'AOT কম্পাইলেশন কেবল লিনাক্স সার্ভারে সমর্থিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'AOT produces standalone native machine instructions for instant startup.',
        bn: 'সরাসরি প্রসেসরের নিজস্ব মেশিন কোড তৈরি করায় কোনো ভার্চুয়াল মেশিন লাগে না।'
      },
      explanation: {
        en: 'AOT eliminates the heavy VM runtime in production. Standalone binaries execute directly on the physical processor, ensuring consistent 60 or 120 FPS frame rates.',
        bn: 'ফলে অ্যাপ চালু হওয়ার সময় কোনো বিলম্ব হয় না এবং প্রতি সেকেন্ডে ৬০ বা ১২০ ফ্রেম মসৃণ থাকে।'
      }
    },
    {
      id: 'main-function-entrypoint-contract-ex3',
      kind: 'mcq',
      topic: 'main-function-signature-and-top-level-scope',
      question: {
        en: 'What structural signature does every Dart program require as its definitive top-level entrypoint?',
        bn: 'প্রতিটি Dart প্রোগ্রামের মূল এন্ট্রি-পয়েন্ট হিসেবে কোন কাঠামোর টপ-লেভেল ফাংশনটি থাকা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'A top-level function named "void main()" or "void main(List<String> args)" that does not need to be enclosed inside a class',
          bn: '"void main()" বা "void main(List<String> args)" নামের একটি টপ-লেভেল ফাংশন যাকে কোনো ক্লাসের ভেতরে রাখার প্রয়োজন হয় না'
        },
        {
          en: 'A static class named "ProgramManager"',
          bn: '"ProgramManager" নামের একটি স্ট্যাটিক ক্লাস'
        },
        {
          en: 'A function named "runApplication()" returning a 32-bit integer',
          bn: '"runApplication()" নামের একটি ফাংশন যা ৩২-বিট পূর্ণসংখ্যা ফেরত দেয়'
        },
        {
          en: 'Dart programs do not have entrypoint functions',
          bn: 'Dart প্রোগ্রামে কোনো এন্ট্রি-পয়েন্ট ফাংশন থাকে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dart execution always begins at the top-level main() function.',
        bn: 'প্রোগ্রামের প্রথম লাইনটি শুরু হয় মূল main() ফাংশন থেকেই।'
      },
      explanation: {
        en: 'Dart programs begin execution at main(). Because Dart supports first-class top-level functions, main sits at the file root without requiring class-based boilerplate.',
        bn: 'অপ্রয়োজনীয় ক্লাসের ভেতর না লিখে সরাসরি ফাইলের শুরুতে main() লেখা যায়।'
      }
    },
    {
      id: 'compilation-targets-wasm-ex4',
      kind: 'mcq',
      topic: 'dart2wasm-webassembly-compilation-target',
      question: {
        en: 'What architectural performance breakthrough does compiling Dart to WebAssembly ("dart2wasm") bring to web applications?',
        bn: 'WebAssembly-তে Dart কম্পাইল করার সুবিধা ("dart2wasm") ওয়েব অ্যাপ্লিকেশনে কোন স্থাপত্যিক পারফরম্যান্স অগ্রগতি এনেছে?'
      },
      options: [
        {
          en: 'It produces compact Wasm bytecode executed directly by browser engines, unlocking near-native canvas rendering speed and 2x faster load times than dart2js',
          bn: 'এটি ব্রাউজার ইঞ্জিন দ্বারা সরাসরি চালিত সংক্ষিপ্ত Wasm বাইটকোড তৈরি করে, যা প্রায় নেটিভ গতির ক্যানভাস রেন্ডারিং এবং dart2js-এর চেয়ে ২ গুণ দ্রুত লোড নিশ্চিত করে'
        },
        {
          en: 'It deletes all CSS files from the web server',
          bn: 'এটি ওয়েব সার্ভার থেকে সমস্ত CSS ফাইল মুছে ফেলে'
        },
        {
          en: 'It turns the web browser into an SSH terminal',
          bn: 'এটি ওয়েব ব্রাউজারকে একটি এসএসএইচ টার্মিনালে রূপান্তর করে'
        },
        {
          en: 'WebAssembly compilation was deprecated in 2024',
          bn: '২০২৪ সালে WebAssembly কম্পাইলেশন বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'dart2wasm compiles directly to WebAssembly for near-native browser performance.',
        bn: 'ব্রাউজারে নেটিভ গতির গ্রাফিক্স ও গেমের মতো মসৃণ অভিজ্ঞতার জন্য Wasm ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'dart2wasm leverages native browser Wasm garbage collection, slashing runtime overhead and enabling Flutter Web apps to render complex UIs at native desktop speeds.',
        bn: 'এর মাধ্যমে ওয়েব অ্যাপগুলোও মোবাইলের মতোই দ্রুত গতিতে চলতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-darts-and-the-flight',
    title: {
      en: 'Dart Architecture & Runtime Quiz',
      bn: 'Dart আর্কিটেকচার এবং রানটাইম কুইজ'
    },
    questions: [
      {
        id: 'quiz-hot-reload-vs-hot-restart',
        kind: 'mcq',
        topic: 'hot-reload-vs-hot-restart-state-difference',
        question: {
          en: 'What is the precise behavioral difference between "Hot Reload" and "Hot Restart" in the Dart Virtual Machine?',
          bn: 'Dart ভার্চুয়াল মেশিনে "Hot Reload" এবং "Hot Restart"-এর মধ্যে সুনির্দিষ্ট আচরণগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'Hot Reload injects code changes while preserving current memory state; Hot Restart destroys and re-initializes all state variables from scratch while reloading the app',
            bn: 'হট রিলোড মেমোরির বর্তমান অবস্থা ঠিক রেখে কোডের পরিবর্তন যুক্ত করে; আর হট রিস্টার্ট মেমোরির সমস্ত মান মুছে দিয়ে শুরু থেকে নতুন করে অ্যাপটি চালু করে'
          },
          {
            en: 'Hot Reload only works on iOS, Hot Restart only works on Windows',
            bn: 'হট রিলোড কেবল iOS-এ চলে, আর হট রিস্টার্ট কেবল উইন্ডোজে চলে'
          },
          {
            en: 'Hot Restart converts all numbers into strings',
            bn: 'হট রিস্টার্ট সমস্ত সংখ্যাকে স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'Hot Reload and Hot Restart execute the exact same operation',
            bn: 'হট রিলোড এবং হট রিস্টার্ট হুবহু একই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hot Reload keeps current state; Hot Restart resets state to initial defaults.',
          bn: 'স্ক্রিনের তথ্য ধরে রাখতে রিলোড এবং সবকিছু নতুন করে শুরু করতে রিস্টার্ট লাগে।'
        },
        explanation: {
          en: 'Hot Reload updates widget trees without touching existing variables. When architectural changes alter global state or initializers, Hot Restart resets state cleanly.',
          bn: 'ফলে ছোট পরিবর্তনের জন্য রিলোড এবং বড় স্টেট পরিবর্তনের জন্য রিস্টার্ট ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-dart2js-minification-tree-shaking',
        kind: 'mcq',
        topic: 'dart2js-tree-shaking-and-minification',
        question: {
          en: 'How does the "dart2js" production compiler minimize JavaScript bundle size for production web deployment?',
          bn: 'প্রোডাকশন ওয়েব ডিপ্লয়মেন্টের জন্য "dart2js" কম্পাইলার কীভাবে জাভাস্ক্রিপ্ট ফাইলের আকার সংকুচিত করে?'
        },
        options: [
          {
            en: 'Through whole-program dead code elimination (tree shaking) and minification, purging all uncalled classes, methods, and libraries from the output bundle',
            bn: 'হোল-প্রোগ্রাম ট্রি কাঁপিয়ে (tree shaking) অপ্রয়োজনীয় কোড মুছে ফেলা এবং মিনিফিকেশনের মাধ্যমে, যা অব্যবহৃত মেথড ও ক্লাস বাদ দিয়ে বান্ডেল ছোট করে'
          },
          {
            en: 'By compressing the JavaScript into an MP3 audio file',
            bn: 'জাভাস্ক্রিপ্টকে একটি এমপি৩ অডিও ফাইলে রূপান্তর করে'
          },
          {
            en: 'By disabling garbage collection in Google Chrome',
            bn: 'গুগল ক্রোমে মেমোরি মুক্ত করা বন্ধ করে দিয়ে'
          },
          {
            en: 'dart2js does not optimize web files',
            bn: 'dart2js ওয়েব ফাইল কোনো অপটিমাইজ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tree shaking removes unused code from production bundles.',
          bn: 'যেসব কোড বা লাইব্রেরি কখনোই ব্যবহার হয় না সেগুলোকে ফাইল থেকে ছেঁটে ফেলা হয়।'
        },
        explanation: {
          en: 'Tree shaking inspects the entrypoint call graph. Any library function not reachable from main() is stripped, preventing large third-party packages from bloating web assets.',
          bn: 'এর মাধ্যমে ব্রাউজারে দ্রুত পেজ লোড নিশ্চিত হয় এবং ব্যান্ডউইথ সাশ্রয় হয়।'
        }
      },
      {
        id: 'quiz-tree-shaking-reflection-prohibition',
        kind: 'mcq',
        topic: 'dart-reflection-dart-mirrors-prohibition-in-flutter',
        question: {
          en: 'Why is runtime reflection via "dart:mirrors" strictly disabled in Flutter and AOT-compiled Dart applications?',
          bn: 'Flutter এবং AOT-কম্পাইল্ড Dart অ্যাপ্লিকেশনে কেন "dart:mirrors"-এর মাধ্যমে রানটাইম রিফ্লেকশন কঠোরভাবে নিষিদ্ধ করা হয়েছে?'
        },
        options: [
          {
            en: 'Because runtime reflection requires preserving the entire symbol table and class graph, making aggressive AOT tree-shaking and dead code elimination impossible',
            bn: 'কারণ রানটাইম রিফ্লেকশনের জন্য সমস্ত ক্লাস ও সিম্বল মেমোরিতে ধরে রাখতে হয়, যা AOT কম্পাইলারের পক্ষে অব্যবহৃত কোড ছেঁটে ফেলা সম্পূর্ণ অসম্ভব করে তোলে'
          },
          {
            en: 'Because reflection only functions on 16-bit MS-DOS',
            bn: 'কারণ রিফ্লেকশন কেবল ১৬-বিট এমএস-ডসে কাজ করে'
          },
          {
            en: 'Because reflection was banned by the World Wide Web Consortium',
            bn: 'কারণ ডব্লিউ৩সি কর্তৃক রিফ্লেকশন নিষিদ্ধ করা হয়েছিল'
          },
          {
            en: 'dart:mirrors runs 100x faster than standard code',
            bn: 'dart:mirrors সাধারণ কোডের চেয়ে ১০০ গুণ দ্রুত চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reflection prevents the compiler from knowing what code can be safely deleted.',
          bn: 'রানটাইমে যেকোনো কোড ডাকার সুযোগ থাকলে কম্পাইলার কোনো কোড মুছতে পারে না।'
        },
        explanation: {
          en: 'AOT relies on tree shaking to produce lean binaries. Because reflection can invoke any method dynamically by name, the compiler would be forced to bundle all code, ballooning app sizes.',
          bn: 'তাই অ্যাপের সাইজ ছোট রাখতে রিফ্লেকশনের বদলে কোড জেনারেশন ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-dart-snapshot-formats',
        kind: 'mcq',
        topic: 'dart-kernel-ast-dill-snapshots',
        question: {
          en: 'What is the "kernel snapshot" (.dill format) utilized internally by the Dart build pipeline?',
          bn: 'Dart বিল্ড পাইপলাইনে অভ্যন্তরীণভাবে ব্যবহৃত "কার্নেল স্ন্যাপশট" (.dill ফরম্যাট) মূলত কী?'
        },
        options: [
          {
            en: 'An intermediate binary representation of the fully type-checked Dart Abstract Syntax Tree (AST) that serves as the universal input for both VM JIT and native AOT compilers',
            bn: 'সম্পূর্ণ টাইপ-পরীক্ষিত Dart অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রির (AST) একটি মধ্যবর্তী বাইনারি রূপ যা VM JIT এবং নেটিভ AOT উভয়ের জন্যই প্রধান ইনপুট হিসেবে কাজ করে'
          },
          {
            en: 'An encrypted operating system partition',
            bn: 'একটি এনক্রিপ্ট করা অপারেটিং সিস্টেম পার্টিশন'
          },
          {
            en: 'A vector graphics format used for rendering icons',
            bn: 'আইকন আঁকার জন্য ব্যবহৃত একটি ভেক্টর গ্রাফিক্স ফরম্যাট'
          },
          {
            en: 'The dill format was deprecated in Dart 1.0',
            bn: 'Dart ১.০ সংস্করণে ডিল ফরম্যাট বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Kernel (.dill) is the universal intermediate AST representation across Dart tools.',
          bn: 'সব কম্পাইলার ব্যাকএন্ডের জন্য সাধারণ মধ্যবর্তী ভাষা হিসেবে এটি কাজ করে।'
        },
        explanation: {
          en: 'The common front-end parses and type-checks Dart source into Kernel AST (.dill). This unified format is then fed to the VM, AOT compiler, or JS transpiler deterministically.',
          bn: 'ফলে প্রতিটি প্ল্যাটফর্মের জন্য আলাদা করে সোর্স কোড পার্স করার ঝামেলা দূর হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'types-and-the-var',
    title: {
      en: 'Static Types, Final vs Const & Pattern Records',
      bn: 'স্ট্যাটিক টাইপস, Final বনাম Const এবং প্যাটার্ন রেকর্ডস'
    }
  }
};
