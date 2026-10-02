import type { Lesson } from '../../../lib/types';

export const TheDartReleaseLesson: Lesson = {
  slug: 'the-dart-release',
  tech: 'dart',
  title: {
    en: 'The Dart 3 Production Pipeline, Ahead-of-Time (AOT) & Wasm',
    bn: 'Dart ৩ প্রোডাকশন পাইপলাইন, Ahead-of-Time (AOT) এবং Wasm'
  },
  summary: {
    en: 'Master the complete production deployment lifecycle of Dart 3 applications. Understand Ahead-of-Time (AOT) native compilation (dart compile exe), WebAssembly (Wasm) web compilation delivering 2x to 3x framerate improvements over legacy JavaScript targets, aggressive tree shaking stripping unreachable bytecode, unit and integration testing pipelines with mockito, and production profiling.',
    bn: 'Dart ৩ অ্যাপ্লিকেশন ডিপ্লয়মেন্ট এবং প্রোডাকশন ইঞ্জিনিয়ারিং সম্পূর্ণ আয়ত্ত করুন। Ahead-of-Time (AOT) নেটিভ মেশিন কোড কম্পাইলেশন (dart compile exe), ওয়েবঅ্যাসেম্বলি (Wasm) ওয়েব কম্পাইলেশন যা জাভাস্ক্রিপ্টের চেয়ে ২ থেকে ৩ গুণ দ্রুত ফ্রেমরেট প্রদান করে, অনুৎপাদনশীল কোড দূরীকরণে ট্রি-শেকিং, mockito ভিত্তিক টেস্ট পাইপলাইন এবং প্রোডাকশন প্রোফাইলিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'aot-native-and-wasm-pipeline-heading',
      text: {
        en: 'The Production Compilation Engine: Native AOT and WebAssembly (Wasm)',
        bn: 'প্রোডাকশন কম্পাইলেশন ইঞ্জিন: নেটিভ AOT এবং ওয়েবঅ্যাসেম্বলি (Wasm)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Shipping enterprise software demands sub-millisecond cold startup times, compact binary footprints, and predictable runtime execution. While development mode utilizes a Just-in-Time (JIT) virtual machine to provide rapid hot reload, production Dart (Google\'s multi-platform client language) compiles into raw machine code. Running "dart compile exe" invokes Ahead-of-Time (AOT) compilation, synthesizing an independent native binary containing a tailored minimal runtime without external dependencies. For browser deployments, Dart 3 introduces native WebAssembly (WasmGC) compilation ("dart compile wasm"), unlocking 2 to 3 times smoother rendering speeds than legacy JavaScript.',
        bn: 'বৃহৎ প্রতিষ্ঠানে সফটওয়্যার রিলিজের ক্ষেত্রে তাৎক্ষণিক স্টার্টআপ, ছোট সাইজ এবং নির্ভরযোগ্য পারফরম্যান্স অপরিহার্য। ডেভেলপমেন্টের সময় Just-in-Time (JIT) ভার্চুয়াল মেশিন দিয়ে দ্রুত হট রিলোড পাওয়া গেলেও প্রোডাকশনে Dart (গুগলের মাল্টি-প্ল্যাটফর্ম ক্লায়েন্ট ভাষা) সরাসরি মেশিন কোডে রূপান্তরিত হয়। "dart compile exe" কমান্ডের মাধ্যমে Ahead-of-Time (AOT) কম্পাইলেশন চালানো হয়, যা কোনো বাহ্যিক নির্ভরতা ছাড়া একটি সম্পূর্ণ স্বাধীন নেটিভ বাইনারি তৈরি করে। এছাড়া ওয়েব ডিপ্লয়মেন্টের জন্য Dart ৩ সরাসরি ওয়েবঅ্যাসেম্বলি (WasmGC) কম্পাইলেশন ("dart compile wasm") সমর্থন করে, যা পুরনো জাভাস্ক্রিপ্ট কোডের চেয়ে ২ থেকে ৩ গুণ মসৃণ রেন্ডারিং স্পিড দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Dart 3 production compilation architecture: aggressive tree shaking routes code to native AOT binaries, WasmGC web modules, or JS fallbacks.',
        bn: 'চিত্র ১: Dart ৩ প্রোডাকশন কম্পাইলেশন আর্কিটেকচার: ট্রি-শেকিং অপটিমাইজার সোর্স কোডকে নেটিভ AOT বাইনারি, WasmGC ওয়েব মডিউল বা জেএস সংস্করণে রূপান্তর করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART 3 PRODUCTION COMPILATION PIPELINE</text>

  <!-- Left: Source & Tree Shaker -->
  <g transform="translate(30, 65)">
    <rect width="220" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="220" height="30" rx="8" fill="#0284c7" />
    <text x="110" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Dart Source Code</text>

    <rect x="15" y="45" width="190" height="50" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">Sound Null Safety</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">Global Whole-Program AST</text>

    <rect x="15" y="105" width="190" height="80" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Tree-Shaking Optimizer</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif">Walks reachable call graph</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="9" font-family="sans-serif">Strips dead code &amp; types</text>
    <text x="25" y="180" fill="#34d399" font-size="8" font-family="sans-serif">Minimal binary footprint</text>
  </g>

  <!-- Middle Target 1: Native AOT -->
  <g transform="translate(285, 65)">
    <rect width="250" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="250" height="28" rx="8" fill="#059669" />
    <text x="125" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Native AOT Binary</text>

    <text x="15" y="48" fill="#34d399" font-size="10" font-family="monospace">dart compile exe main.dart</text>
    <text x="15" y="68" fill="#cbd5e1" font-size="9" font-family="sans-serif">Self-contained ARM64 / x86_64 ELF</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">Zero VM overhead, instant cold start</text>
    <text x="15" y="100" fill="#38bdf8" font-size="9" font-family="sans-serif">Targets: CLI, Microservices, Mobile</text>
  </g>

  <!-- Middle Target 2: WebAssembly WasmGC -->
  <g transform="translate(285, 190)">
    <rect width="250" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="250" height="28" rx="8" fill="#d97706" />
    <text x="125" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. WebAssembly (WasmGC)</text>

    <text x="15" y="48" fill="#fbbf24" font-size="10" font-family="monospace">dart compile wasm main.dart</text>
    <text x="15" y="68" fill="#cbd5e1" font-size="9" font-family="sans-serif">Standard Wasm with Browser GC</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">2x-3x higher framerate vs JavaScript</text>
    <text x="15" y="100" fill="#34d399" font-size="9" font-family="sans-serif">Smooth 60/120 fps browser graphics</text>
  </g>

  <!-- Right: Verification & Testing -->
  <g transform="translate(565, 65)">
    <rect width="245" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="245" height="30" rx="8" fill="#7c3aed" />
    <text x="122" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Automated CI/CD Gates</text>

    <rect x="15" y="45" width="215" height="50" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="monospace">dart test --coverage</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">Unit, Widget, and Mockito suites</text>

    <rect x="15" y="105" width="215" height="115" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Production Guarantees</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif">• 100% Sound null safety checked</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Strict analysis lints enforced</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Deterministic hermetic build artifacts</text>
    <text x="25" y="205" fill="#38bdf8" font-size="9" font-family="sans-serif">• Continuous production deploy</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'testing-mocking-and-deployment-heading',
      text: {
        en: 'Testing Pyramid, Mocking Boundaries, and Production Hardening',
        bn: 'টেস্টিং পিরামিড, মকিং বাউন্ডারি এবং প্রোডাকশন হার্ডেনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production resilience depends on an automated test pyramid combining fast unit tests with mock boundaries and full integration suites. Dart provides the official "test" runner with built-in async support, group nesting, and code coverage extraction via "dart test --coverage". By generating strongly typed test doubles through "mockito" and annotations like "@GenerateMocks([HttpClient])", engineers isolate network latency and flaky external endpoints from local test runs. Combined with static analysis rules defined in "analysis_options.yaml", Dart ensures that only verified, zero-defect code reaches production infrastructure.',
        bn: 'প্রোডাকশনের দৃঢ়তা নির্ভর করে একটি সমন্বিত টেস্ট পিরামিডের ওপর যা দ্রুতগতির ইউনিট টেস্ট, মকিং এবং ইন্টিগ্রেশন টেস্টের সমন্বয়ে গড়ে ওঠে। Dart নিজস্ব অফিসিয়াল "test" রানার প্রদান করে যা অ্যাসিনক্রোনাস টেস্ট, গ্রুপ নেস্টিং এবং "dart test --coverage" কমান্ডের মাধ্যমে কোড কভারেজ পরিমাপের সুবিধা দেয়। "mockito" এবং "@GenerateMocks([HttpClient])" অ্যানোটেশন দিয়ে শক্তিশালী টেস্ট ডাবল তৈরি করে নেটওয়ার্ক নির্ভরতা ও তৃতীয় পক্ষের এপিআই সমস্যা লোকাল টেস্ট থেকে আলাদা রাখা হয়। সাথে "analysis_options.yaml" ফাইলের কঠোর লিন্ট নিয়ম যুক্ত হয়ে নিশ্চিত করে যে কোনো ত্রুটিযুক্ত কোড প্রোডাকশনে যেতে পারবে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart compilation pipelines comparing AOT Native, WebAssembly (WasmGC), and JavaScript targets.',
        bn: 'AOT নেটিভ, ওয়েবঅ্যাসেম্বলি (WasmGC) এবং জাভাস্ক্রিপ্ট টার্গেটের তুলনা করে তৈরি Dart কম্পাইলেশন পাইপলাইনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Dart 3 Production Compilation Targets and Metrics

export type CompilationTarget = 'aot-native' | 'wasm-gc' | 'javascript';

export interface CompilationResult {
  target: CompilationTarget;
  executableName: string;
  binarySizeBytes: number;
  coldStartupLatencyMs: number;
  framerateSmoothnessScore: number; // 60 or 120 fps fidelity
  treeShakingEfficiencyPercent: number;
}

export class DartReleasePipeline {
  // Simulates tree shaking and compilation across production targets
  public static compile(sourceLines: number, target: CompilationTarget): CompilationResult {
    // Tree shaking removes ~65% of unused framework dependencies
    const treeShakedLines = Math.round(sourceLines * 0.35);

    switch (target) {
      case 'aot-native':
        return {
          target,
          executableName: 'server_app.exe',
          binarySizeBytes: 12500000, // ~12.5 MB self-contained binary
          coldStartupLatencyMs: 15,  // Instant machine code execution
          framerateSmoothnessScore: 100, // 100% native CPU speed
          treeShakingEfficiencyPercent: 65
        };

      case 'wasm-gc':
        return {
          target,
          executableName: 'web_app.wasm',
          binarySizeBytes: 3200000,  // ~3.2 MB compact Wasm binary
          coldStartupLatencyMs: 80,  // Fast Wasm instantiation
          framerateSmoothnessScore: 98,  // 2x-3x faster than JS (smooth 60/120fps)
          treeShakingEfficiencyPercent: 65
        };

      case 'javascript':
        return {
          target,
          executableName: 'legacy_app.js',
          binarySizeBytes: 5800000,  // ~5.8 MB minified JS
          coldStartupLatencyMs: 320, // JS parsing and JIT warmup latency
          framerateSmoothnessScore: 68,  // Susceptible to garbage collection frame drops
          treeShakingEfficiencyPercent: 55
        };
    }
  }
}

// Execution Demonstration
console.log('--- 1. Testing Dart 3 Native AOT Compilation ---');
const nativeResult = DartReleasePipeline.compile(50000, 'aot-native');
console.log('Target:', nativeResult.target); // aot-native
console.log('Output Executable:', nativeResult.executableName); // server_app.exe
console.log('Cold Startup Latency (ms):', nativeResult.coldStartupLatencyMs); // 15
console.log('Tree Shaking Removed (%):', nativeResult.treeShakingEfficiencyPercent); // 65

console.log('\n--- 2. Testing Dart 3 WebAssembly (WasmGC) Compilation ---');
const wasmResult = DartReleasePipeline.compile(50000, 'wasm-gc');
console.log('Target:', wasmResult.target); // wasm-gc
console.log('Output Binary:', wasmResult.executableName); // web_app.wasm
console.log('Binary Size (Bytes):', wasmResult.binarySizeBytes); // 3200000
console.log('Smoothness Score:', wasmResult.framerateSmoothnessScore); // 98

console.log('\n--- 3. Testing Legacy JavaScript Fallback ---');
const jsResult = DartReleasePipeline.compile(50000, 'javascript');
console.log('Target:', jsResult.target); // javascript
console.log('JS Cold Startup Latency (ms):', jsResult.coldStartupLatencyMs); // 320`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'AOT Compilation',
          def: {
            en: 'Ahead-of-Time compilation converting Dart directly to native CPU machine instructions before deployment.',
            bn: 'ডিপ্লয়মেন্টের আগেই Dart কোড সরাসরি প্রসেসরের মেশিন কোডে রূপান্তর করার পদ্ধতি।'
          }
        },
        {
          term: 'WebAssembly (WasmGC)',
          def: {
            en: 'Modern browser compilation target integrating with host garbage collection for high-performance web graphics.',
            bn: 'আধুনিক ব্রাউজার টার্গেট যা সরাসরি ব্রাউজারের গার্বেজ কালেক্টরে চলে উচ্চগতির গ্রাফিক্স দেয়।'
          }
        },
        {
          term: 'Tree Shaking',
          def: {
            en: 'Dead-code elimination stripping unreachable functions and types to produce minimal binary payloads.',
            bn: 'অব্যবহৃত ও অপ্রয়োজনীয় কোড ছেঁটে ফেলে বাইনারি ফাইলের আকার ক্ষুদ্রতম করার অপটিমাইজেশন।'
          }
        },
        {
          term: 'Automated Testing Pyramid',
          def: {
            en: 'Engineering hierarchy of unit tests, widget tests, and integration tests ensuring regression safety.',
            bn: 'ইউনিট টেস্ট, উইজেট টেস্ট এবং ইন্টিগ্রেশন টেস্টের সমন্বয় যা সফটওয়্যারকে বাগ-মুক্ত রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dart-aot-vs-jit-production-ex1',
      kind: 'mcq',
      topic: 'aot-vs-jit-execution-modes',
      question: {
        en: 'What architectural advantage does Ahead-of-Time (AOT) compilation ("dart compile exe") provide in production compared to Just-in-Time (JIT) execution?',
        bn: 'Just-in-Time (JIT) পদ্ধতির তুলনায় Ahead-of-Time (AOT) কম্পাইলেশন ("dart compile exe") প্রোডাকশনে কোন স্থাপত্যিক সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It directly synthesizes machine code before runtime, delivering instant cold startup times, predictable execution speeds, and elimination of the Dart VM overhead',
          bn: 'এটি রানটাইমের আগেই সরাসরি মেশিন কোড তৈরি করে দেয়, ফলে অ্যাপ তাৎক্ষণিকভাবে চালু হয়, পারফরম্যান্স অনুমানযোগ্য হয় এবং Dart ভার্চুয়াল মেশিনের বাড়তি খরচ দূর হয়'
        },
        {
          en: 'It allows editing source code while the app is in the hands of end users',
          bn: 'এটি ব্যবহারকারীর হাতে থাকা অবস্থাতেই অ্যাপের কোড এডিট করার সুযোগ দেয়'
        },
        {
          en: 'It makes network requests completely free of telecommunication charges',
          bn: 'এটি ইন্টারনেট কলগুলোকে সমস্ত টেলিকম চার্জ থেকে সম্পূর্ণ ফ্রি করে'
        },
        {
          en: 'AOT compilation was removed from Dart in version 3.0',
          bn: 'Dart ৩.০ সংস্করণে AOT কম্পাইলেশন সম্পূর্ণ বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'AOT compiles ahead of execution into raw machine code with no JIT warmup penalty.',
        bn: 'আগে থেকেই মেশিন কোড তৈরি থাকায় কোনো ওয়ার্মআপ বা বিলম্ব ছাড়াই সাথে সাথে চলে।'
      },
      explanation: {
        en: 'JIT provides instant hot reloading during development, but AOT produces optimized native machine code for production deployment, ensuring instant launch and low memory usage.',
        bn: 'ডেভেলপমেন্টে দ্রুত কাজের জন্য JIT এবং প্রোডাকশনে দ্রুত লঞ্চ ও কম মেমোরির জন্য AOT ব্যবহার করা হয়।'
      }
    },
    {
      id: 'dart-wasm-gc-web-evolution-ex2',
      kind: 'mcq',
      topic: 'dart-wasm-gc-browser-performance',
      question: {
        en: 'How does Dart 3 WebAssembly (WasmGC) compilation ("dart compile wasm") surpass legacy JavaScript compilation ("dart2js") for web applications?',
        bn: 'Dart ৩ ওয়েবঅ্যাসেম্বলি (WasmGC) কম্পাইলেশন ("dart compile wasm") কীভাবে ওয়েব অ্যাপ্লিকেশনে পুরনো জাভাস্ক্রিপ্ট ("dart2js")-এর চেয়ে উন্নত পারফরম্যান্স দেয়?'
      },
      options: [
        {
          en: 'It compiles directly to compact Wasm binary instructions integrated with browser garbage collection, delivering 2x to 3x higher rendering framerates with virtually zero frame drops',
          bn: 'এটি ব্রাউজারের গার্বেজ কালেক্টরের সাথে যুক্ত কম্প্যাক্ট Wasm বাইনারিতে রূপান্তর করে, যা কোনো ফ্রেম ড্রপ ছাড়াই ২ থেকে ৩ গুণ বেশি ফ্রেমরেট প্রদান করে'
        },
        {
          en: 'It converts web browsers into microwave ovens',
          bn: 'এটি ওয়েব ব্রাউজারকে মাইক্রোওয়েভ ওভেনে রূপান্তর করে'
        },
        {
          en: 'It eliminates the need for HTML and CSS entirely from the internet',
          bn: 'এটি ইন্টারনেট থেকে এইচটিএমএল এবং সিএসএস-এর প্রয়োজনীয়তা মুছে দেয়'
        },
        {
          en: 'Wasm compilation does not run on Google Chrome or Safari',
          bn: 'Wasm কম্পাইলেশন গুগল ক্রোম বা সাফারিতে চলে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'WasmGC runs near-native binary code on browsers without JavaScript interpreter latency.',
        bn: 'জাভাস্ক্রিপ্টের অনুবাদ বিলম্ব এড়িয়ে সরাসরি ব্রাউজার ইঞ্জিনে বিদ্যুৎ গতিতে চলে।'
      },
      explanation: {
        en: 'WasmGC allows Dart to target WebAssembly while utilizing the browser native garbage collector directly, eliminating overhead and ensuring consistent 60fps or 120fps UI animations.',
        bn: 'ফলে ব্রাউজারেও মোবাইল অ্যাপের মতোই নিখুঁত এবং মসৃণ ১২০ ফ্রেম পার সেকেন্ডের অভিজ্ঞতা পাওয়া যায়।'
      }
    },
    {
      id: 'tree-shaking-compiler-optimization-ex3',
      kind: 'mcq',
      topic: 'tree-shaking-dead-code-elimination',
      question: {
        en: 'What mechanism enables Dart production compilers to achieve aggressive tree shaking when building deployable artifacts?',
        bn: 'ডিপ্লয়যোগ্য অ্যাপ তৈরির সময় কোন ব্যবস্থার কারণে Dart প্রোডাকশন কম্পাইলার অত্যন্ত সফলভাবে ট্রি-শেকিং সম্পন্ন করতে পারে?'
      },
      options: [
        {
          en: 'Sound static typing and whole-program reachability analysis allow the compiler to mathematically prove which functions and classes are never invoked, stripping them from the final binary',
          bn: 'নিখুঁত স্ট্যাটিক টাইপিং এবং পুরো প্রোগ্রামের প্রবাহ বিশ্লেষণ কম্পাইলারকে প্রমাণ করতে সাহায্য করে কোন মেথড বা ক্লাস কখনোই কল হবে না, ফলে অপ্রয়োজনীয় অংশ বাদ দেওয়া সম্ভব হয়'
        },
        {
          en: 'It deletes half of the user source code files at random',
          bn: 'এটি এলোমেলোভাবে ব্যবহারকারীর অর্ধেক সোর্স কোড মুছে ফেলে'
        },
        {
          en: 'It asks the developer to manually delete unneeded lines via a pop-up window',
          bn: 'এটি ডেভেলপারকে পপ-আপের মাধ্যমে অপ্রয়োজনীয় লাইন ম্যানুয়ালি ডিলিট করতে বলে'
        },
        {
          en: 'Tree shaking is only possible in interpreted scripting languages',
          bn: 'ট্রি-শেকিং কেবল ইন্টারপ্রেটেড স্ক্রিপ্টিং ভাষাতেই সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sound types allow the compiler to identify and remove all unreachable functions.',
        bn: 'যে কোড কখনোই চলবে না, তাকে গাণিতিকভাবে চিহ্নিত করে ফেলে দেওয়া হয়।'
      },
      explanation: {
        en: 'Because Dart enforces sound type guarantees and forbids unconstrained dynamic reflection in AOT, the compiler walks the complete call tree and eliminates unused library code.',
        bn: 'এর ফলে বিশাল লাইব্রেরি ইমপোর্ট করলেও কেবল ব্যবহৃত কোডটুকুই চূড়ান্ত অ্যাপে যুক্ত হয়।'
      }
    },
    {
      id: 'mockito-unit-test-isolation-ex4',
      kind: 'mcq',
      topic: 'mockito-unit-test-isolation-mock-doubles',
      question: {
        en: 'Why is mocking third-party services with "mockito" essential when structuring professional Dart unit tests?',
        bn: 'পেশাদার Dart ইউনিট টেস্ট লেখার সময় "mockito" দিয়ে বাইরের সার্ভিস মক করা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It creates deterministic test doubles that simulate network responses and errors in memory without sending real HTTP requests or relying on live databases',
          bn: 'এটি মেমরিতে কৃত্রিম টেস্ট ডাবল তৈরি করে যা বাস্তব ইন্টারনেট কল বা ডেটাবেস ছাড়াই যেকোনো রেসপন্স বা এরর সফলভাবে সিমুলেট করে টেস্ট করতে দেয়'
        },
        {
          en: 'It encrypts test results to prevent competitors from reading them',
          bn: 'এটি টেস্ট রেজাল্ট এনক্রিপ্ট করে যেন প্রতিযোগীরা পড়তে না পারে'
        },
        {
          en: 'It converts test files into executable Windows screensavers',
          bn: 'এটি টেস্ট ফাইলগুলোকে এক্সিকিউটেবল উইন্ডোজ স্ক্রিনসেভারে পরিণত করে'
        },
        {
          en: 'Mocking is prohibited in Flutter enterprise applications',
          bn: 'Flutter এন্টারপ্রাইজ অ্যাপ্লিকেশনে মকিং করা সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mocking isolates unit tests from external networks and databases.',
        bn: 'বাইরের সার্ভার ডাউন থাকলেও যেন লোকাল কম্পিউটারে টেস্ট নির্ভুল ও দ্রুত চলে।'
      },
      explanation: {
        en: 'Unit tests must be fast, deterministic, and isolated. Mockito simulates backend responses and edge cases (timeouts, 500 errors) reliably in milliseconds.',
        bn: 'ফলে ইন্টারনেট সংযোগ ছাড়াই প্রতিটি কোড ব্রাঞ্চের কার্যকারিতা নির্ভুলভাবে যাচাই করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-dart-release',
    title: {
      en: 'Dart Production, AOT & Wasm Quiz',
      bn: 'Dart প্রোডাকশন, AOT এবং Wasm কুইজ'
    },
    questions: [
      {
        id: 'quiz-dart-compile-commands-matrix',
        kind: 'mcq',
        topic: 'dart-compile-subcommands-targets',
        question: {
          en: 'Which command compiles a Dart application into a standalone native executable for the host operating system without requiring an installed Dart SDK on the deployment machine?',
          bn: 'সার্ভারে কোনো Dart এসডিকে ইনস্টল না থাকা সত্ত্বেও কোন কমান্ডটি Dart কোডকে সরাসরি অপারেটিং সিস্টেমের জন্য একটি স্বয়ংসম্পূর্ণ নেটিভ এক্সিকিউটেবলে রূপান্তর করে?'
        },
        options: [
          {
            en: 'dart compile exe <entrypoint.dart>',
            bn: 'dart compile exe <entrypoint.dart>'
          },
          {
            en: 'dart run --simulate-browser',
            bn: 'dart run --simulate-browser'
          },
          {
            en: 'dart convert --to-python',
            bn: 'dart convert --to-python'
          },
          {
            en: 'dart debug --fast',
            bn: 'dart debug --fast'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use "dart compile exe" to generate self-contained binaries.',
          bn: 'সার্ভারে সরাসরি চালানোর মতো সেলফ-কন্টেইন্ড বাইনারি বানাতে এই কমান্ড ব্যবহার করা হয়।'
        },
        explanation: {
          en: '"dart compile exe" compiles your Dart code into a standalone machine executable containing a minimal runtime kernel, deployable directly into minimal Docker containers.',
          bn: 'এর ফলে ডকার বা সার্ভারে কোনো Dart রানটাইম ছাড়াই নিমেষে অ্যাপ চালু করা যায়।'
        }
      },
      {
        id: 'quiz-lcov-code-coverage-ci',
        kind: 'mcq',
        topic: 'lcov-code-coverage-pipeline-metrics',
        question: {
          en: 'How do engineering teams enforce test thoroughness in continuous integration (CI) pipelines using Dart\'s built-in coverage tools?',
          bn: 'ইঞ্জিনিয়ারিং টিমগুলো কীভাবে Dart-এর বিল্ট-ইন কভারেজ টুল ব্যবহার করে সিআই (CI) পাইপলাইনে টেস্টের নির্ভরযোগ্যতা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Running "dart test --coverage" generates an LCOV tracefile measuring exact line execution percentages, failing pull requests that fall below defined thresholds',
            bn: '"dart test --coverage" কমান্ড দিয়ে LCOV ফাইল তৈরি করা হয় যা কোডের প্রতিটি লাইনের টেস্ট কভারেজ মেপে নির্ধারিত সীমার নিচে নামলে পুল রিকোয়েস্ট আটকে দেয়'
          },
          {
            en: 'By sending a fax to the repository owner after every commit',
            bn: 'প্রতিটি কমিটের পর রিপোজিটরির মালিককে একটি ফ্যাক্স পাঠিয়ে'
          },
          {
            en: 'By prohibiting tests from running more than 1 second per year',
            bn: 'প্রতি বছর ১ সেকেন্ডের বেশি টেস্ট রান করা নিষিদ্ধ করার মাধ্যমে'
          },
          {
            en: 'Code coverage cannot be measured in Dart applications',
            bn: 'Dart অ্যাপ্লিকেশনে কোড কভারেজ পরিমাপ করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'dart test --coverage outputs LCOV reports for CI gating.',
          bn: 'কোডের কত শতাংশ টেস্ট করা হয়েছে তা মেপে আনটেস্টেড কোড প্রোডাকশনে যাওয়া আটকায়।'
        },
        explanation: {
          en: 'Dart generates standard LCOV coverage files that integrate with GitHub Actions, GitLab CI, and Codecov to ensure high software quality standards before merging.',
          bn: 'ফলে কোনো ডেভেলপার টেস্ট ছাড়া নতুন কোড যোগ করলে সিস্টেম তা স্বয়ংক্রিয়ভাবে সতর্ক করে।'
        }
      },
      {
        id: 'quiz-analysis-options-strict-modes',
        kind: 'mcq',
        topic: 'analysis-options-yaml-strict-lints',
        question: {
          en: 'What is the function of enabling "strict-casts", "strict-inference", and "strict-raw-types" in analysis_options.yaml?',
          bn: 'analysis_options.yaml ফাইলে "strict-casts", "strict-inference" এবং "strict-raw-types" চালু করার কাজ কী?'
        },
        options: [
          {
            en: 'It completely disallows implicit dynamic casts and unparameterized generics, enforcing rigorous compile-time type safety throughout the codebase',
            bn: 'এটি যেকোনো অস্পষ্ট dynamic কাস্ট এবং জেনেরিকের খালি ব্যবহার নিষিদ্ধ করে পুরো কোডবেসে কঠোর কম্পাইল-টাইম টাইপ সেফটি নিশ্চিত করে'
          },
          {
            en: 'It forces the operating system to shut down whenever a warning occurs',
            bn: 'ওয়ার্নিং দেখা দিলেই এটি অপারেটিং সিস্টেম বন্ধ করতে বাধ্য করে'
          },
          {
            en: 'It converts all variable names into uppercase Latin characters',
            bn: 'এটি সমস্ত ভ্যারিয়েবলের নাম বড় হাতের ল্যাটিন অক্ষরে রূপান্তর করে'
          },
          {
            en: 'strict flags were deprecated in Dart 2.0',
            bn: 'Dart ২.০ সংস্করণে strict ফ্ল্যাগগুলো বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Strict flags force full type annotations and forbid implicit dynamic types.',
          bn: 'টাইপ সিস্টেমে কোনো ফাঁকফোকর না রেখে শতভাগ স্পষ্ট ও নিরাপদ কোড নিশ্চিত করার নিয়ম।'
        },
        explanation: {
          en: 'Strict analysis flags eliminate silent implicit conversions to dynamic, catching subtle type bugs at compile time instead of at 2 AM in production.',
          bn: 'এর ফলে কোনো অপ্রত্যাশিত ডেটা টাইপ ঢুকে রানটাইমে ক্র্যাশ হওয়ার ঝুঁকি শূন্যে নেমে আসে।'
        }
      },
      {
        id: 'quiz-dart-devtools-memory-profiling',
        kind: 'mcq',
        topic: 'dart-devtools-timeline-memory-profiling',
        question: {
          en: 'Which integrated suite provides CPU flame graphs, memory allocation heap snapshots, and network inspection for Dart and Flutter production profiling?',
          bn: 'Dart এবং Flutter প্রোডাকশন প্রোফাইলিংয়ের জন্য CPU ফ্লেমগ্রাফ, মেমোরি হিপ স্ন্যাপশট এবং নেটওয়ার্ক ইন্সপেকশন প্রদান করে কোন ইন্টিগ্রেটেড টুল?'
        },
        options: [
          {
            en: 'Dart DevTools (a browser-based diagnostic and performance telemetry suite)',
            bn: 'Dart DevTools (ব্রাউজার-ভিত্তিক একটি ডায়াগনস্টিক এবং পারফরম্যান্স টেলিমেট্রি স্যুট)'
          },
          {
            en: 'The Windows Calculator application',
            bn: 'উইন্ডোজ ক্যালকুলেটর অ্যাপ্লিকেশন'
          },
          {
            en: 'A standard text editor find-and-replace dialog',
            bn: 'সাধারণ টেক্সট এডিটর ফাইন্ড-অ্যান্ড-রিপ্লেস ডায়ালগ'
          },
          {
            en: 'Dart DevTools requires a paid monthly enterprise license',
            bn: 'Dart DevTools ব্যবহারের জন্য মাসিক অর্থপ্রদানের লাইসেন্স প্রয়োজন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dart DevTools is the official suite for profiling CPU, memory, and network.',
          bn: 'মেমোরি লিক এবং স্লো ফ্রেমরেট শনাক্ত করে দূর করার শক্তিশালী অফিসিয়াল টুল।'
        },
        explanation: {
          en: 'Dart DevTools connects to running Dart applications via VM service protocols, allowing engineers to diagnose memory leaks, optimize render passes, and profile asynchronous event timelines.',
          bn: 'এর মাধ্যমে অ্যাপের কোথায় কত মেমোরি খরচ হচ্ছে এবং ফ্রেম ড্রপ কেন হচ্ছে তা নিখুঁতভাবে দেখা যায়।'
        }
      }
    ]
  }
};
