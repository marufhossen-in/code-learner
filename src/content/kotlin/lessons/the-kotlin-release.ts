import type { Lesson } from '../../../lib/types';

export const TheKotlinReleaseLesson: Lesson = {
  slug: 'the-kotlin-release',
  tech: 'kotlin',
  title: {
    en: 'Kotlin 2.0 K2 Compiler, Tooling & Multiplatform',
    bn: 'Kotlin ২.০ K2 কম্পাইলার, টুলিং এবং মাল্টিপ্ল্যাটফর্ম'
  },
  summary: {
    en: 'Master the complete Kotlin production release ecosystem. Understand the architectural breakthrough of the Kotlin 2.0 K2 compiler with unified frontend analysis. Optimize Android and server binaries using ProGuard and R8 bytecode shrinking, configure modern Gradle build scripts, and share business logic across platforms with Kotlin Multiplatform (KMP).',
    bn: 'Kotlin প্রোডাকশন রিলিজের সম্পূর্ণ ইকোসিস্টেম আয়ত্ত করুন। একীভূত ফ্রন্টএন্ড বিশ্লেষণ সহ Kotlin ২.০ K2 কম্পাইলারের স্থাপত্যিক অগ্রগতি গভীরভাবে জানুন। ProGuard এবং R8 বাইটকোড শ্রিঙ্কিং দিয়ে অ্যাপের সাইজ কমানো, আধুনিক Gradle বিল্ড স্ক্রিপ্ট কনফিগারেশন এবং Kotlin Multiplatform (KMP) দিয়ে বিভিন্ন প্ল্যাটফর্মে ব্যবসায়িক লজিক শেয়ার করা শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'k2-compiler-unified-frontend-heading',
      text: {
        en: 'The Kotlin 2.0 K2 Compiler and Unified Frontend Architecture',
        bn: 'Kotlin ২.০ K2 কম্পাইলার এবং একীভূত ফ্রন্টএন্ড আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For several years, multiplatform language toolchains suffered from fragmented pipelines where different targets ran disparate semantic analyzers. In Kotlin (JetBrains\' modern statically typed programming language), this bottleneck was completely dismantled with the milestone Kotlin 2.0 release. At its core lies the revolutionary K2 compiler. K2 introduces a unified Frontend Intermediate Representation (FIR) that standardizes semantic checks, type inference, and syntax analysis across all target platforms. By pipelining build phases cleanly, the K2 compiler accelerates real-world compilation speeds by up to 2x while delivering identical behavior across JVM, JavaScript, Native, and WebAssembly targets.',
        bn: 'কয়েক বছর ধরে মাল্টিপ্ল্যাটফর্ম ভাষার টুলচেনগুলো বিভক্ত পাইপলাইনের সমস্যায় ভুগছিল, যেখানে প্রতিটি আলাদা টার্গেট ভিন্ন ভিন্ন সেমান্টিক অ্যানালাইজার চালাত। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ যুগান্তকারী Kotlin ২.০ সংস্করণের মাধ্যমে এই বাধা সম্পূর্ণ গুঁড়িয়ে দেওয়া হয়েছে। এর কেন্দ্রবিন্দুতে রয়েছে বৈপ্লবিক K2 কম্পাইলার। K2 একটি একীভূত Frontend Intermediate Representation (FIR) চালু করেছে যা সমস্ত প্ল্যাটফর্মের জন্য সিনট্যাক্স বিশ্লেষণ, টাইপ ইনফারেন্স এবং এরর চেকিংকে নিখুঁতভাবে প্রমিত করে। বিল্ড ধাপগুলোকে চমৎকার পাইপলাইনে সাজিয়ে K2 কম্পাইলার বাস্তব বিল্ডের গতি ২ গুণ পর্যন্ত বৃদ্ধি করেছে এবং JVM, JavaScript, Native ও WebAssembly টার্গেটে অভিন্ন আচরণ নিশ্চিত করেছে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Kotlin Multiplatform (KMP) architecture sharing business logic from commonMain across 3 native production targets: JVM, iOS Native, and WebAssembly.',
        bn: 'চিত্র ১: Kotlin Multiplatform (KMP) আর্কিটেকচার যা commonMain থেকে ৩ টি নেটিভ টার্গেটে (JVM, iOS Native এবং WebAssembly) কোড শেয়ার করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN 2.0 K2 COMPILER &amp; MULTIPLATFORM (KMP) PIPELINE</text>

  <!-- Top: Common Code Base -->
  <g transform="translate(195, 60)">
    <rect width="450" height="75" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="450" height="26" rx="8" fill="#0284c7" />
    <text x="225" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Shared Code: commonMain (Kotlin 2.0 K2)</text>

    <text x="20" y="48" fill="#38bdf8" font-size="10" font-family="monospace">Models | ViewModels | Repositories | Ktor HTTP Client</text>
    <text x="20" y="65" fill="#cbd5e1" font-size="9" font-family="sans-serif">100% Shared Business Logic &amp; Architecture</text>
  </g>

  <!-- Connectors -->
  <path d="M 270 135 L 145 175" stroke="#38bdf8" stroke-width="2" />
  <path d="M 420 135 L 420 175" stroke="#38bdf8" stroke-width="2" />
  <path d="M 570 135 L 695 175" stroke="#38bdf8" stroke-width="2" />

  <!-- Target 1: Android & JVM -->
  <g transform="translate(35, 175)">
    <rect width="220" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="220" height="26" rx="8" fill="#059669" />
    <text x="110" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Android &amp; JVM Target</text>

    <text x="15" y="48" fill="#34d399" font-size="10" font-family="monospace">Backend: JVM Bytecode</text>
    <rect x="12" y="58" width="196" height="38" rx="4" fill="#0f172a" />
    <text x="20" y="73" fill="#cbd5e1" font-size="9" font-family="sans-serif">R8 Optimizer &amp; Obfuscation</text>
    <text x="20" y="87" fill="#34d399" font-size="9" font-family="sans-serif">40% Binary Size Reduction</text>
    <text x="15" y="115" fill="#f8fafc" font-size="9" font-family="sans-serif">DEX / APK / JAR Binaries</text>
  </g>

  <!-- Target 2: iOS Native -->
  <g transform="translate(310, 175)">
    <rect width="220" height="130" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="220" height="26" rx="8" fill="#d97706" />
    <text x="110" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Apple iOS Native Target</text>

    <text x="15" y="48" fill="#fbbf24" font-size="10" font-family="monospace">Backend: Kotlin/Native LLVM</text>
    <rect x="12" y="58" width="196" height="38" rx="4" fill="#0f172a" />
    <text x="20" y="73" fill="#cbd5e1" font-size="9" font-family="sans-serif">Direct Mach-O Compilation</text>
    <text x="20" y="87" fill="#fbbf24" font-size="9" font-family="sans-serif">Zero JVM runtime required!</text>
    <text x="15" y="115" fill="#f8fafc" font-size="9" font-family="sans-serif">Xcode .xcframework Bundle</text>
  </g>

  <!-- Target 3: WebAssembly -->
  <g transform="translate(585, 175)">
    <rect width="220" height="130" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="220" height="26" rx="8" fill="#9333ea" />
    <text x="110" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. WebAssembly Target</text>

    <text x="15" y="48" fill="#c084fc" font-size="10" font-family="monospace">Backend: Kotlin/Wasm</text>
    <rect x="12" y="58" width="196" height="38" rx="4" fill="#0f172a" />
    <text x="20" y="73" fill="#cbd5e1" font-size="9" font-family="sans-serif">Direct Browser Wasm Binary</text>
    <text x="20" y="87" fill="#c084fc" font-size="9" font-family="sans-serif">Near-native Canvas rendering</text>
    <text x="15" y="115" fill="#f8fafc" font-size="9" font-family="sans-serif">Next-Gen Browser Web Apps</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'kmp-and-r8-shrinking-heading',
      text: {
        en: 'Kotlin Multiplatform (KMP) and Production R8 Bytecode Optimization',
        bn: 'Kotlin Multiplatform (KMP) এবং প্রোডাকশন R8 বাইটকোড অপটিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying high-quality software requires lean binary footprints and maximum code reuse across ecosystems. Through Kotlin Multiplatform, software engineering teams share up to 80 percent of their business logic, data models, and networking pipelines across Android, iOS, and Desktop while retaining completely native user interfaces. When platform-specific APIs are needed (such as local Bluetooth or biometric sensors), developers bridge implementations elegantly using the "expect" and "actual" declaration keywords. For production Android and server builds, Google\'s R8 compiler performs whole-program optimization, shrinking bytecode by stripping dead classes, inlining single-use methods, and obfuscating symbols to deliver compact, secure release artifacts.',
        bn: 'উচ্চমানের সফটওয়্যার প্রকাশের জন্য অ্যাপের আকার ছোট রাখা এবং বিভিন্ন ইকোসিস্টেমে কোডের সর্বোচ্চ পুনর্ব্যবহার নিশ্চিত করা অপরিহার্য। Kotlin Multiplatform-এর মাধ্যমে ইঞ্জিনিয়ারিং টিমগুলো অ্যান্ড্রয়েড, iOS এবং ডেস্কটপের মাঝে তাদের ব্যবসায়িক লজিক, ডেটা মডেল এবং নেটওয়ার্কিং কোডের ৮০ শতাংশ পর্যন্ত শেয়ার করতে পারে এবং একই সাথে সম্পূর্ণ নেটিভ ইউজার ইন্টারফেস বজায় রাখতে পারে। যখন প্ল্যাটফর্ম-নির্দিষ্ট কোনো এপিআই (যেমন ব্লুটুথ বা বায়োমেট্রিক সেন্সর) প্রয়োজন হয়, তখন ডেভেলপাররা "expect" এবং "actual" কি-ওয়ার্ড ব্যবহার করে চমৎকার সেতু তৈরি করেন। প্রোডাকশন অ্যান্ড্রয়েড ও সার্ভার রিলিজের জন্য গুগলের R8 কম্পাইলার অব্যবহৃত কোড মুছে ফেলে, মেথড ইনলাইন করে এবং নাম গোপন করে অ্যাপের আকার প্রায় ৪০ শতাংশ পর্যন্ত কমিয়ে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin Multiplatform (KMP) commonMain sharing, R8 bytecode shrinking metrics, and expected/actual platform bridges.',
        bn: 'Kotlin Multiplatform (KMP) কোড শেয়ারিং, R8 বাইটকোড শ্রিঙ্কিং মেট্রিক এবং expected/actual প্ল্যাটফর্ম ব্রিজের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Multiplatform (KMP) Architecture and R8 Release Optimization

export interface KMPTargetPlatform {
  name: string;
  runtimeType: 'JVM' | 'Native' | 'WebAssembly';
  binaryFormat: string;
}

// 1. Expected / Actual Mechanism Simulation
// commonMain declares expected platform contract
export interface ExpectedPlatformContract {
  getPlatformName(): string;
  getDeviceModel(): string;
}

// androidMain actual implementation
export class ActualAndroidPlatform implements ExpectedPlatformContract {
  public getPlatformName(): string { return 'Android SDK 34 (ART VM)'; }
  public getDeviceModel(): string { return 'Google Pixel Tablet'; }
}

// iosMain actual implementation
export class ActualIOSPlatform implements ExpectedPlatformContract {
  public getPlatformName(): string { return 'Apple iOS (Kotlin/Native LLVM)'; }
  public getDeviceModel(): string { return 'Apple iPhone 15 Pro'; }
}

// 2. R8 Bytecode Shrinking and Obfuscation Optimizer Simulation
export class R8BytecodeOptimizer {
  public static optimizeReleaseArtifact(input: {
    rawKilobytes: number;
    unusedClassCount: number;
    symbolCount: number;
  }): {
    originalKB: number;
    shrunkKB: number;
    reductionPercentage: number;
    purgedClasses: number;
  } {
    // R8 typically shrinks binaries by 35% to 45% through dead code elimination
    const reductionRatio = 0.40; // 40% reduction
    const shrunkKB = Math.round(input.rawKilobytes * (1 - reductionRatio));

    return {
      originalKB: input.rawKilobytes,
      shrunkKB,
      reductionPercentage: 40,
      purgedClasses: input.unusedClassCount
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing KMP Expected / Actual Multiplatform Resolution ---');
const androidPlatform: ExpectedPlatformContract = new ActualAndroidPlatform();
const iosPlatform: ExpectedPlatformContract = new ActualIOSPlatform();

console.log('[Target Android]', androidPlatform.getPlatformName(), '| Hardware:', androidPlatform.getDeviceModel());
console.log('[Target iOS]', iosPlatform.getPlatformName(), '| Hardware:', iosPlatform.getDeviceModel());

console.log('\n--- 2. Testing Production R8 Release Optimization Pipeline ---');
const buildMetrics = R8BytecodeOptimizer.optimizeReleaseArtifact({
  rawKilobytes: 12000, // 12 MB raw APK
  unusedClassCount: 450,
  symbolCount: 8900
});

console.log('Original Unoptimized Binary Footprint:', buildMetrics.originalKB, 'KB'); // 12000
console.log('R8 Shrunk Release Binary Footprint:', buildMetrics.shrunkKB, 'KB'); // 7200
console.log('Total Binary Size Saved:', buildMetrics.reductionPercentage, '%'); // 40
console.log('Dead Unused Classes Purged from Artifact:', buildMetrics.purgedClasses); // 450`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'K2 Compiler',
          def: {
            en: 'Unified compiler engine in Kotlin 2.0 delivering 2x compilation speedups and standardized frontend analysis.',
            bn: 'Kotlin ২.০-এর একীভূত কম্পাইলার যা দ্বিগুণ গতিতে কোড কম্পাইল করে এবং সব টার্গেটে অভিন্ন বিশ্লেষণ নিশ্চিত করে।'
          }
        },
        {
          term: 'Kotlin Multiplatform (KMP)',
          def: {
            en: 'Technology allowing developers to share common business logic across Android, iOS, Desktop, and Web targets.',
            bn: 'প্রযুক্তি যা অ্যান্ড্রয়েড, iOS, ডেস্কটপ ও ওয়েবের মধ্যে একক কোডবেস দিয়ে ব্যবসায়িক লজিক শেয়ার করতে দেয়।'
          }
        },
        {
          term: 'R8 Code Shrinker',
          def: {
            en: 'Google toolchain optimizer performing whole-program analysis to strip dead code, inline methods, and obfuscate names.',
            bn: 'গুগল অপটিমাইজার যা অব্যবহৃত কোড মুছে এবং ফাইল সংকুচিত করে প্রোডাকশন অ্যাপের সাইজ উল্লেখযোগ্যভাবে কমায়।'
          }
        },
        {
          term: 'Expected / Actual Mechanism',
          def: {
            en: 'Kotlin multiplatform declaration pattern bridging common declarations with native target implementations.',
            bn: 'মাল্টিপ্ল্যাটফর্ম ডিক্লারেশন পদ্ধতি যা কমন কোডের সাথে প্ল্যাটফর্ম-নির্দিষ্ট নেটিভ কোডের মেলবন্ধন ঘটায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'k2-compiler-speed-improvement-ex1',
      kind: 'mcq',
      topic: 'k2-compiler-frontend-speed-enhancements',
      question: {
        en: 'What architectural innovation in the Kotlin 2.0 K2 compiler enables build acceleration of up to 2x over Kotlin 1.x?',
        bn: 'Kotlin ২.০ K2 কম্পাইলারের কোন স্থাপত্যিক উদ্ভাবন Kotlin ১.x-এর তুলনায় বিল্ডের গতি ২ গুণ পর্যন্ত বৃদ্ধি করেছে?'
      },
      options: [
        {
          en: 'A completely redesigned Frontend Intermediate Representation (FIR) that unifies semantic analysis and pipelines compiler phases efficiently across all targets',
          bn: 'একটি সম্পূর্ণ নতুন Frontend Intermediate Representation (FIR) যা সমস্ত প্ল্যাটফর্মের সেমান্টিক বিশ্লেষণ ও কম্পাইলার পর্যায়গুলোকে একীভূত করেছে'
        },
        {
          en: 'It skips all type-checking routines completely',
          bn: 'এটি টাইপ চেকিং সম্পূর্ণভাবে বাদ দিয়ে দেয়'
        },
        {
          en: 'It requires 128 gigabytes of RAM to compile simple files',
          bn: 'সহজ ফাইল কম্পাইল করতে এটির ১২৮ গিগাবাইট র‍্যাম প্রয়োজন'
        },
        {
          en: 'The K2 compiler was deprecated in Kotlin 2.1',
          bn: 'Kotlin ২.১ সংস্করণে K2 কম্পাইলার বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'K2 standardizes frontend analysis with FIR, eliminating redundant compiler passes.',
        bn: 'একীভূত ফ্রন্টএন্ড তৈরির মাধ্যমে অপ্রয়োজনীয় বাড়তি ধাপ বাদ দেওয়ায় গতি দ্বিগুণ হয়েছে।'
      },
      explanation: {
        en: 'In Kotlin 1.x, compiler backends used separate frontends. K2 unifies semantic analysis into FIR, enabling aggressive caching and parallelism that cuts compilation time in half.',
        bn: 'ফলে বড় প্রজেক্টের কম্পাইলেশন সময় প্রায় অর্ধেক কমে গিয়ে ডেভেলপারদের উৎপাদনশীলতা বাড়ে।'
      }
    },
    {
      id: 'kmp-expected-actual-pattern-ex2',
      kind: 'mcq',
      topic: 'kmp-expected-actual-platform-binding',
      question: {
        en: 'How does the "expect" and "actual" declaration pattern function in a Kotlin Multiplatform (KMP) project?',
        bn: 'Kotlin Multiplatform (KMP) প্রজেক্টে "expect" এবং "actual" ডিক্লারেশন প্যাটার্ন কীভাবে কাজ করে?'
      },
      options: [
        {
          en: '"expect" declares a platform-agnostic API contract in commonMain; target modules (androidMain, iosMain) provide concrete "actual" implementations using native APIs',
          bn: '"expect" কমন কোডে (commonMain) প্ল্যাটফর্ম-নিরপেক্ষ চুক্তির ঘোষণা দেয়; আর নির্দিষ্ট মডিউলগুলো (androidMain, iosMain) নেটিভ এপিআই ব্যবহার করে "actual" বাস্তবায়ন তৈরি করে'
        },
        {
          en: 'It converts the app into an HTML web page automatically',
          bn: 'এটি অ্যাপটিকে স্বয়ংক্রিয়ভাবে একটি এইচটিএমএল ওয়েবপেজে রূপান্তর করে'
        },
        {
          en: 'It is only allowed when writing Python scripts',
          bn: 'এটি কেবল পাইথন স্ক্রিপ্ট লেখার সময় অনুমোদিত'
        },
        {
          en: 'expect and actual were replaced by C macros in Kotlin 2.0',
          bn: 'Kotlin ২.০ সংস্করণে expect ও actual বাদ দিয়ে C ম্যাক্রো আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'commonMain expects a declaration; platform modules provide the actual implementation.',
        bn: 'কমন কোডে নকশা থাকে, আর প্রতিটি ডিভাইস তার নিজস্ব ভাষায় আসল রূপ দেয়।'
      },
      explanation: {
        en: 'The expect/actual mechanism provides compile-time verified bridging to platform APIs (like iOS Keychain or Android Keystore) without runtime reflection overhead.',
        bn: 'এর মাধ্যমে কোনো রানটাইম রিফ্লেকশন খরচ ছাড়াই সরাসরি নেটিভ কোড ব্যবহার করা যায়।'
      }
    },
    {
      id: 'r8-optimizer-dead-code-stripping-ex3',
      kind: 'mcq',
      topic: 'r8-optimizer-dead-code-stripping-role',
      question: {
        en: 'What primary duty does Google\'s R8 code shrinker perform during production Android release compilation?',
        bn: 'প্রোডাকশন অ্যান্ড্রয়েড রিলিজ তৈরির সময় গুগলের R8 কোড শ্রিঙ্কার কোন প্রধান দায়িত্ব পালন করে?'
      },
      options: [
        {
          en: 'It analyzes the reachable call graph, strips unused classes and methods, inlines small functions, and obfuscates identifiers to reduce APK size by up to 40 percent',
          bn: 'এটি অবজেক্ট গ্রাফ বিশ্লেষণ করে অপ্রয়োজনীয় মেথড ও ক্লাস ছেঁটে ফেলে, মেথড ইনলাইন করে এবং নাম গোপন করে অ্যাপের সাইজ প্রায় ৪০ শতাংশ পর্যন্ত কমিয়ে আনে'
        },
        {
          en: 'It doubles the price of the app on Google Play',
          bn: 'এটি গুগল প্লে-তে অ্যাপের দাম দ্বিগুণ করে দেয়'
        },
        {
          en: 'It deletes all user photos from the testing smartphone',
          bn: 'এটি টেস্টিং স্মার্টফোন থেকে ব্যবহারকারীর সমস্ত ছবি মুছে ফেলে'
        },
        {
          en: 'R8 is only supported on Windows 98 computers',
          bn: 'R8 কেবল উইন্ডোজ ৯৮ কম্পিউটারে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'R8 shrinks, optimizes, and obfuscates bytecode for release builds.',
        bn: 'অব্যবহৃত কোড মুছে ফেলা এবং অ্যাপের সাইজ কমানোই এর মূল কাজ।'
      },
      explanation: {
        en: 'R8 eliminates dead code originating from large third-party libraries, shrinking download size and making reverse-engineering difficult through symbol obfuscation.',
        bn: 'ফলে অ্যাপের ডাউনলোড সাইজ অনেক কমে যায় এবং কোড রিভার্স-ইঞ্জিনিয়ারিং করা কঠিন হয়।'
      }
    },
    {
      id: 'kotlin-native-zero-jvm-dependency-ex4',
      kind: 'mcq',
      topic: 'kotlin-native-llvm-direct-compilation',
      question: {
        en: 'Why does Kotlin Multiplatform code compiled for iOS require zero JVM (Java Virtual Machine) installation on Apple devices?',
        bn: 'Apple ডিভাইসের জন্য তৈরি Kotlin Multiplatform কোড চলার সময় কেন কোনো JVM (জাভা ভার্চুয়াল মেশিন) ইনস্টল করার প্রয়োজন হয় না?'
      },
      options: [
        {
          en: 'Because Kotlin/Native compiles source code directly into native machine instructions (Mach-O binaries) via LLVM, producing standard iOS Apple frameworks',
          bn: 'কারণ Kotlin/Native এলএলভিএমের (LLVM) মাধ্যমে সরাসরি সোর্স কোডকে নেটিভ মেশিন নির্দেশে রূপান্তর করে স্ট্যান্ডার্ড অ্যাপল ফ্রেমওয়ার্ক তৈরি করে'
        },
        {
          en: 'Because Apple devices come preloaded with Java 8',
          bn: 'কারণ অ্যাপল ডিভাইসে আগে থেকেই জাভা ৮ দেওয়া থাকে'
        },
        {
          en: 'Because Kotlin code runs inside Safari web browser tabs only',
          bn: 'কারণ Kotlin কোড কেবল সাফারি ব্রাউজারের ট্যাবের ভেতর চলে'
        },
        {
          en: 'Kotlin cannot compile for iOS hardware',
          bn: 'Kotlin কখনোই iOS হার্ডওয়্যারের জন্য কোড তৈরি করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Kotlin/Native uses LLVM to compile directly into native Apple Mach-O binaries.',
        bn: 'সরাসরি প্রসেসরের নিজস্ব মেশিন কোডে রূপান্তরিত হওয়ায় কোনো ভার্চুয়াল মেশিন লাগে না।'
      },
      explanation: {
        en: 'Kotlin/Native compiles to native ARM64 binaries that link seamlessly with Swift and Objective-C, delivering native CPU execution speeds without VM overhead.',
        bn: 'এর ফলে কোনো ওভারহেড ছাড়াই সুইফটের মতোই শতভাগ নেটিভ গতি পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-kotlin-release',
    title: {
      en: 'Kotlin 2.0 & Production Release Tooling Quiz',
      bn: 'Kotlin ২.০ এবং প্রোডাকশন রিলিজ টুলিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-gradle-kotlin-dsl-advantages',
        kind: 'mcq',
        topic: 'gradle-kotlin-dsl-type-safety-ide',
        question: {
          en: 'Why do modern engineering teams migrate from Groovy build scripts to the Gradle Kotlin DSL ("build.gradle.kts")?',
          bn: 'আধুনিক ইঞ্জিনিয়ারিং টিমগুলো কেন গ্রুভি স্ক্রিপ্ট ছেড়ে Gradle Kotlin DSL ("build.gradle.kts") ব্যবহার শুরু করেছে?'
        },
        options: [
          {
            en: 'The Kotlin DSL provides compile-time type safety, rich IDE code-completion, error highlighting, and smooth refactoring within build scripts',
            bn: 'Kotlin DSL বিল্ড স্ক্রিপ্টের ভেতর কম্পাইল-টাইম টাইপ নিরাপত্তা, চমৎকার কোড অটো-কমপ্লিশন, এরর হাইলাইটিং এবং নিরাপদ রিফ্যাক্টরিং সুবিধা দেয়'
          },
          {
            en: 'It accelerates internet download speeds by 10 times',
            bn: 'এটি ইন্টারনেট ডাউনলোডের গতি ১০ গুণ বৃদ্ধি করে'
          },
          {
            en: 'It deletes all unit tests before compilation',
            bn: 'এটি কম্পাইলেশনের আগে সমস্ত ইউনিট টেস্ট মুছে ফেলে'
          },
          {
            en: 'build.gradle.kts scripts can only run on Linux servers',
            bn: 'build.gradle.kts স্ক্রিপ্ট কেবল লিনাক্স সার্ভারে চলতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Kotlin DSL brings full type safety and IDE autocompletion to Gradle builds.',
          bn: 'টাইপ নিরাপত্তা এবং আইডিই-এর সাহায্য নিয়ে আত্মবিশ্বাসের সাথে বিল্ড ফাইল লেখা যায়।'
        },
        explanation: {
          en: 'Unlike dynamically typed Groovy, build.gradle.kts validates plugin configurations at editing time, preventing frustrating build errors before execution.',
          bn: 'এর ফলে রান করার আগেই বিল্ড ফাইলের সমস্ত ভুল শনাক্ত করা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-compose-multiplatform-ui',
        kind: 'mcq',
        topic: 'compose-multiplatform-declarative-ui-sharing',
        question: {
          en: 'What architectural power does "Compose Multiplatform" add on top of Kotlin Multiplatform (KMP)?',
          bn: 'Kotlin Multiplatform (KMP)-এর ওপর "Compose Multiplatform" কোন বাড়তি স্থাপত্যিক ক্ষমতা যোগ করে?'
        },
        options: [
          {
            en: 'It allows sharing declarative user interface code across Android, iOS, Desktop, and Web using a single shared Jetpack Compose codebase',
            bn: 'এটি একটি একক Jetpack Compose কোডবেস ব্যবহার করে অ্যান্ড্রয়েড, iOS, ডেস্কটপ ও ওয়েবের মাঝে সম্পূর্ণ ইউজার ইন্টারফেস শেয়ার করার সুযোগ দেয়'
          },
          {
            en: 'It converts the phone display into an electronic ink reader',
            bn: 'এটি ফোনের ডিসপ্লেকে ইলেকট্রনিক ইংক রিডারে রূপান্তর করে'
          },
          {
            en: 'It limits mobile screen refresh rates to 15 frames per second',
            bn: 'এটি স্ক্রিন রিফ্রেশ রেট প্রতি সেকেন্ডে ১৫ ফ্রেমে সীমাবদ্ধ করে'
          },
          {
            en: 'Compose Multiplatform was banned by Google in 2024',
            bn: '২০২৪ সালে গুগল Compose Multiplatform নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
      hint: {
        en: 'Compose Multiplatform enables sharing 100% of UI code across multiple platforms.',
        bn: 'শুধু ব্যাকএন্ড লজিকই নয়, বরং সম্পূর্ণ স্ক্রিনের ১০০% ডিজাইনও এক কোড দিয়ে তৈরি করা যায়।'
      },
        explanation: {
          en: 'Compose Multiplatform extends KMP beyond business logic, rendering identical responsive UIs on iOS, Desktop, and Web with native Skia and Canvas rendering.',
          bn: 'ফলে প্রতিটি প্ল্যাটফর্মের জন্য আলাদা ইউআই লেখার সময় বেঁচে যায়।'
        }
      },
      {
        id: 'quiz-binary-compatibility-validator',
        kind: 'mcq',
        topic: 'binary-compatibility-validator-public-api-safety',
        question: {
          en: 'What risk does the JetBrains "Binary Compatibility Validator" tool prevent when releasing Kotlin library updates?',
          bn: 'Kotlin লাইব্রেরির নতুন সংস্করণ প্রকাশের সময় জেটব্রেইন্সের "Binary Compatibility Validator" টুলটি কোন ঝুঁকি রোধ করে?'
        },
        options: [
          {
            en: 'It verifies that public API signatures do not inadvertently break binary backward compatibility for downstream consumers who upgrade dependencies',
            bn: 'এটি নিশ্চিত করে যে পাবলিক এপিআই সিগনেচারের কোনো পরিবর্তন যেন নতুন সংস্করণে আসা গ্রাহকদের জন্য বাইনারি ব্যাকওয়ার্ড কম্প্যাটিবিলিটি নষ্ট না করে'
          },
          {
            en: 'It checks whether source files contain emojis',
            bn: 'সোর্স ফাইলে ইমোজি আছে কিনা তা পরীক্ষা করে'
          },
          {
            en: 'It automatically formats Markdown documentation into PDF',
            bn: 'এটি স্বয়ংক্রিয়ভাবে মার্কডাউন ডকুমেন্টেশনকে পিডিএফে রূপান্তর করে'
          },
          {
            en: 'The validator was deprecated in Kotlin 1.9',
            bn: 'Kotlin ১.৯ সংস্করণে ভ্যালিডেটর বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The validator prevents unintended breaking changes to public library APIs.',
          bn: 'নতুন ভার্সনে আপডেট করার সময় যাতে পুরোনো ক্লায়েন্টদের কোড ভেঙে না যায়, তা রক্ষা করে।'
        },
        explanation: {
          en: 'Accidental removal or modification of public methods causes LinkageError at runtime. The validator dumps API signatures and halts builds if breaking changes occur.',
          bn: 'এর মাধ্যমে লাইব্রেরি ব্যবহারকারীদের নির্ভরযোগ্য ও মসৃণ আপডেট উপহার দেওয়া যায়।'
        }
      },
      {
        id: 'quiz-ksp-symbol-processing-advantage',
        kind: 'mcq',
        topic: 'ksp-kotlin-symbol-processing-vs-kapt',
        question: {
          en: 'Why is Kotlin Symbol Processing (KSP) significantly faster than legacy KAPT (Kotlin Annotation Processing Tool)?',
          bn: 'ঐতিহ্যবাহী KAPT-এর চেয়ে Kotlin Symbol Processing (KSP) কেন উল্লেখযোগ্যভাবে দ্রুতগতির?'
        },
        options: [
          {
            en: 'KSP analyzes Kotlin source code directly via compiler symbols without generating intermediate Java stubs, accelerating annotation processing builds by up to 2x',
            bn: 'KSP কোনো মধ্যবর্তী জাভা স্টাব তৈরি না করেই সরাসরি কম্পাইলার সিম্বলের মাধ্যমে কোড বিশ্লেষণ করে, যা বিল্ডের গতি ২ গুণ পর্যন্ত বাড়িয়ে দেয়'
          },
          {
            en: 'KSP disables syntax validation during compilation',
            bn: 'কম্পাইলেশনের সময় KSP সিনট্যাক্স পরীক্ষা বন্ধ রাখে'
          },
          {
            en: 'KSP only runs on Linux supercomputers',
            bn: 'KSP কেবল লিনাক্স সুপারকম্পিউটারে চলে'
          },
          {
            en: 'KSP was deprecated in favor of Java APT in 2023',
            bn: '২০২৩ সালে KSP বাদ দিয়ে জাভা এপিটি ফিরিয়ে আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'KSP processes Kotlin AST directly without generating slow Java stubs.',
          bn: 'জাভা স্টাব তৈরির ভারী ধাপ এড়িয়ে সরাসরি Kotlin কোড নিয়ে কাজ করায় গতি দ্বিগুণ হয়।'
        },
        explanation: {
          en: 'KAPT required generating Java stubs for all Kotlin files so Java annotation processors could run. KSP understands Kotlin idiomatic types natively, slashing build times.',
          bn: 'এর ফলে রুম বা ড্যাগার-হিল্টের মতো লাইব্রেরির বিল্ড সময় নাটকীয়ভাবে কমে যায়।'
        }
      }
    ]
  }
};
