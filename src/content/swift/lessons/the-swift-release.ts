import type { Lesson } from '../../../lib/types';

export const TheSwiftReleaseLesson: Lesson = {
  slug: 'the-swift-release',
  tech: 'swift',
  title: {
    en: 'Swift 6, Strict Concurrency & Production Tooling',
    bn: 'Swift ৬, স্ট্রিক্ট কনকারেন্সি এবং প্রোডাকশন টুলিং'
  },
  summary: {
    en: 'Master the Swift production release lifecycle. Navigate the major architectural upgrade to Swift 6 with compile-time complete data race safety and migrate legacy codebases with Complete Concurrency Checking. Leverage the Swift Package Manager (SPM) for modular dependency management, and optimize release binaries with Whole Module Optimization (WMO) and dead code stripping.',
    bn: 'Swift প্রোডাকশন রিলিজের জীবনচক্র সম্পূর্ণ আয়ত্ত করুন। কম্পাইল-টাইম ডেটা রেস নিরাপত্তা সহ Swift ৬-এর স্থাপত্যিক রূপান্তর এবং কমপ্লিট কনকারেন্সি চেকিং দিয়ে পুরোনো কোডবেস মাইগ্রেশন শিখুন। Swift Package Manager (SPM) দিয়ে মডুলার ডিপেন্ডেন্সি নিয়ন্ত্রণ এবং Whole Module Optimization (WMO) দিয়ে বাইনারি অপটিমাইজেশন নিশ্চিত করুন।'
  },
  minutes: 40,
  blocks: [
    {
      type: 'heading',
      id: 'swift-6-strict-concurrency-heading',
      text: {
        en: 'Swift 6 Complete Concurrency and Region-Based Isolation',
        bn: 'Swift ৬ কমপ্লিট কনকারেন্সি এবং অঞ্চল-ভিত্তিক আইসোলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying robust software requires deterministic compilation and reliable runtime safety guarantees. In Swift (Apple\'s type-safe compiled programming language), the milestone Swift 6 release establishes complete data race safety at build time. Earlier Swift editions permitted concurrent access warnings that could still slip into production binaries. Swift 6 elevates those warnings to fatal compile-time errors unless types adhere strictly to Sendable contracts. Crucially, Swift 6 introduces region-based isolation analysis. The compiler intelligently tracks the physical lifetime of memory allocations; if a non-Sendable object has no remaining references in its source region, the compiler safely permits sending it across concurrency boundaries without defensive cloning.',
        bn: 'নির্ভরযোগ্য সফটওয়্যার প্রকাশের জন্য সুনির্দিষ্ট কম্পাইলেশন এবং রানটাইম নিরাপত্তা নিশ্চয়তা অত্যন্ত জরুরি। কিন্তু Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ যুগান্তকারী Swift ৬ সংস্করণ বিল্ডের সময়ই সম্পূর্ণ ডেটা রেস সুরক্ষা প্রতিষ্ঠা করেছে। পূর্ববর্তী Swift সংস্করণগুলোতে কনকারেন্সি সম্পর্কিত সতর্কতা দেখা গেলেও অ্যাপ বিল্ড হতে বাধা থাকত না। Swift ৬-এ সেই সতর্কতাগুলোকে সরাসরি মারাত্মক কম্পাইল-টাইম এররে রূপান্তর করা হয়েছে, যা Sendable চুক্তি মানতে বাধ্য করে। সবচেয়ে গুরুত্বপূর্ণ হলো, Swift ৬ এতে অঞ্চল-ভিত্তিক আইসোলেশন বিশ্লেষণ এনেছে। কম্পাইলার মেমোরির জীবদ্দশা বুদ্ধিমানভাবে ট্র্যাক করে; কোনো ডেটার আগের অঞ্চলে আর কোনো রেফারেন্স না থাকলে বাড়তি ক্লোন ছাড়াই তাকে নিরাপদে অন্য থ্রেডে পাঠানো সম্ভব হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Swift production release pipeline transforming source code through 3 optimization stages into a data-race-free binary.',
        bn: 'চিত্র ১: Swift প্রোডাকশন রিলিজ পাইপলাইন যা সোর্স কোডকে ৩ টি অপটিমাইজেশন ধাপের মাধ্যমে ডেটা-রেসমুক্ত বাইনারিতে রূপান্তর করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT 6 PRODUCTION COMPILATION &amp; RELEASE PIPELINE</text>

  <!-- Stage 1: Source & Strict Concurrency Checking -->
  <g transform="translate(30, 65)">
    <rect width="225" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="225" height="30" rx="8" fill="#0284c7" />
    <text x="112" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stage 1: Strict Analysis</text>

    <text x="15" y="55" fill="#38bdf8" font-size="11" font-family="monospace">Swift 6 Compiler</text>
    <rect x="12" y="70" width="201" height="45" rx="5" fill="#0f172a" />
    <text x="20" y="90" fill="#34d399" font-size="10" font-family="sans-serif">Sendable Contract Audit</text>
    <text x="20" y="105" fill="#cbd5e1" font-size="9" font-family="sans-serif">Region-Based Isolation</text>

    <rect x="12" y="125" width="201" height="50" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="20" y="145" fill="#38bdf8" font-size="10" font-family="monospace">SIL Generation</text>
    <text x="20" y="162" fill="#cbd5e1" font-size="9" font-family="sans-serif">Swift Intermediate Language</text>

    <rect x="12" y="185" width="201" height="40" rx="5" fill="#0284c7" fill-opacity="0.2" />
    <text x="20" y="208" fill="#f8fafc" font-size="10" font-family="sans-serif" font-weight="bold">Zero Data Race Gate</text>
  </g>

  <!-- Stage 2: Whole Module Optimization (WMO) -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#d97706" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stage 2: WMO Optimization</text>

    <text x="15" y="55" fill="#fbbf24" font-size="11" font-family="monospace">Whole Module Mode (-O)</text>
    <rect x="12" y="70" width="206" height="45" rx="5" fill="#0f172a" />
    <text x="20" y="90" fill="#fbbf24" font-size="10" font-family="sans-serif">Cross-File Inlining</text>
    <text x="20" y="105" fill="#cbd5e1" font-size="9" font-family="sans-serif">Direct function jumps</text>

    <rect x="12" y="125" width="206" height="50" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="20" y="145" fill="#fbbf24" font-size="10" font-family="monospace">Devirtualization</text>
    <text x="20" y="162" fill="#cbd5e1" font-size="9" font-family="sans-serif">Existentials collapsed</text>

    <rect x="12" y="185" width="206" height="40" rx="5" fill="#d97706" fill-opacity="0.2" />
    <text x="20" y="208" fill="#f8fafc" font-size="10" font-family="sans-serif" font-weight="bold">Monomorphization Pass</text>
  </g>

  <!-- Stage 3: LLVM & Final Binary -->
  <g transform="translate(585, 65)">
    <rect width="225" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="225" height="30" rx="8" fill="#059669" />
    <text x="112" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stage 3: LLVM &amp; Strip</text>

    <text x="15" y="55" fill="#34d399" font-size="11" font-family="monospace">Linker &amp; Stripping</text>
    <rect x="12" y="70" width="201" height="45" rx="5" fill="#0f172a" />
    <text x="20" y="90" fill="#34d399" font-size="10" font-family="sans-serif">Dead Code Stripping</text>
    <text x="20" y="105" fill="#cbd5e1" font-size="9" font-family="sans-serif">Unused symbols purged</text>

    <rect x="12" y="125" width="201" height="50" rx="5" fill="#0f172a" stroke="#059669" />
    <text x="20" y="145" fill="#34d399" font-size="10" font-family="monospace">Mach-O App Binary</text>
    <text x="20" y="162" fill="#cbd5e1" font-size="9" font-family="sans-serif">Encrypted &amp; Signed</text>

    <rect x="12" y="185" width="201" height="40" rx="5" fill="#059669" fill-opacity="0.2" />
    <text x="20" y="208" fill="#f8fafc" font-size="10" font-family="sans-serif" font-weight="bold">Native CPU Performance</text>
  </g>

  <!-- Connectors -->
  <path d="M 255 175 L 305 175" stroke="#38bdf8" stroke-width="2" />
  <path d="M 535 175 L 585 175" stroke="#f59e0b" stroke-width="2" />
</svg>`
    },
    {
      type: 'heading',
      id: 'spm-and-binary-optimization-heading',
      text: {
        en: 'Swift Package Manager (SPM) and Release Binary Optimization',
        bn: 'Swift Package Manager (SPM) এবং রিলিজ বাইনারি অপটিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern Swift software architecture organizes modules through the official Swift Package Manager. Built on declarative "Package.swift" manifests, SPM provides cross-platform dependency resolution, semantic version constraints, and hermetic build configurations. When compiling release builds for production distribution, passing "-O" activates Whole Module Optimization (WMO). Instead of compiling each Swift file into an isolated object file in isolation, WMO compiles the entire module as a single compilation unit. This enables the compiler to aggressively inline functions across file boundaries, eliminate unreferenced existential boxes, and apply dead code stripping, shrinking binary footprint and slashing application launch time.',
        bn: 'আধুনিক Swift সফটওয়্যার আর্কিটেকচার নিজস্ব অফিসিয়াল Swift Package Manager-এর মাধ্যমে মডিউলগুলো সুসংগঠিত করে। বর্ণনামূলক "Package.swift" ফাইলের ওপর ভিত্তি করে SPM ক্রস-প্ল্যাটফর্ম ডিপেন্ডেন্সি রেজোলিউশন, সিম্যান্টিক ভার্সনিং এবং নির্ভরযোগ্য বিল্ড কনফিগারেশন সরবরাহ করে। প্রোডাকশন ডিস্ট্রিবিউশনের জন্য রিলিজ বিল্ড তৈরির সময় "-O" ফ্ল্যাগ Whole Module Optimization (WMO) সক্রিয় করে। প্রতিটি ফাইলকে বিচ্ছিন্নভাবে কম্পাইল করার বদলে WMO পুরো মডিউলটিকে একটি একক কম্পাইলেশন ইউনিট হিসেবে বিশ্লেষণ করে। এর ফলে কম্পাইলার বিভিন্ন ফাইলের মধ্যকার মেথড সরাসরি ইনলাইন করতে পারে, অব্যবহৃত এক্সিসটেনশিয়াল মেমোরি দূর করতে পারে এবং ডেড কোড মুছে ফেলে অ্যাপের সাইজ কমিয়ে দ্রুত চালু হওয়া নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift Package Manager dependency resolution, SemVer constraints, and WMO binary size optimization metrics.',
        bn: 'Swift Package Manager ডিপেন্ডেন্সি রেজোলিউশন, সেমভার শর্ত এবং WMO বাইনারি অপটিমাইজেশনের মেট্রিক রূপায়ণ।'
      },
      code: `// Simulation of Swift Package Manager (SPM) Resolution and Release Optimization Engine

export interface SwiftPackageTarget {
  name: string;
  version: string;
  sourceFileCount: number;
  unoptimizedKilobytes: number;
}

export class SwiftReleaseOptimizerEngine {
  // Simulates Whole Module Optimization (-O -whole-module-optimization)
  // Cross-file inlining + Devirtualization + Dead-strip
  public static optimizeTarget(target: SwiftPackageTarget): {
    name: string;
    originalKB: number;
    optimizedKB: number;
    reductionPercentage: number;
    inlinedFunctionCount: number;
  } {
    // Typical WMO achieves 25% to 35% size reduction and aggressive devirtualization
    const reductionRatio = 0.30; // 30% reduction
    const optimizedKB = Math.round(target.unoptimizedKilobytes * (1 - reductionRatio));
    const inlinedCount = target.sourceFileCount * 12;

    return {
      name: target.name,
      originalKB: target.unoptimizedKilobytes,
      optimizedKB,
      reductionPercentage: 30,
      inlinedFunctionCount: inlinedCount
    };
  }

  // Swift 6 Concurrency Audit Simulation
  public static auditSwift6Safety(classes: { name: string; isSendable: boolean; isActor: boolean }[]): {
    safeClasses: number;
    dataRaceErrors: number;
  } {
    let safeCount = 0;
    let errorCount = 0;

    for (const item of classes) {
      if (item.isSendable || item.isActor) {
        safeCount++;
      } else {
        // Swift 6 emits fatal error for non-Sendable types crossing boundaries
        errorCount++;
      }
    }

    return { safeClasses: safeCount, dataRaceErrors: errorCount };
  }
}

// Execution Demonstration
const networkingModule: SwiftPackageTarget = {
  name: 'CoreNetworkingKit',
  version: '2.1.0',
  sourceFileCount: 15,
  unoptimizedKilobytes: 400
};

console.log('Optimizing Target Module via Swift 6 WMO Pipeline:');
const metrics = SwiftReleaseOptimizerEngine.optimizeTarget(networkingModule);
console.log('Original Binary Footprint:', metrics.originalKB, 'KB'); // 400
console.log('Optimized Binary Footprint:', metrics.optimizedKB, 'KB'); // 280
console.log('Size Reduction Saved:', metrics.reductionPercentage, '%'); // 30
console.log('Total Cross-File Functions Inlined:', metrics.inlinedFunctionCount); // 180

// Swift 6 Concurrency Safety Verification
const projectTypes = [
  { name: 'UserSessionActor', isSendable: false, isActor: true },
  { name: 'AuthTokenDTO', isSendable: true, isActor: false },
  { name: 'UserProfileCache', isSendable: true, isActor: false },
  { name: 'LegacyConnectionPool', isSendable: false, isActor: false }
];

const audit = SwiftReleaseOptimizerEngine.auditSwift6Safety(projectTypes);
console.log('Safe Swift 6 Types:', audit.safeClasses); // 3
console.log('Data Race Violations Prevented:', audit.dataRaceErrors); // 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Swift 6 Language Mode',
          def: {
            en: 'Compiler mode enforcing complete compile-time data race safety and Sendable adherence across all tasks.',
            bn: 'কম্পাইলার মোড যা সমস্ত টাস্কে কম্পাইল-টাইম ডেটা রেস নিরাপত্তা এবং Sendable মান্যতা কঠোরভাবে প্রয়োগ করে।'
          }
        },
        {
          term: 'Region-Based Isolation',
          def: {
            en: 'Swift 6 flow analysis allowing non-Sendable values to cross concurrency boundaries when disconnected from prior memory.',
            bn: 'Swift ৬ অ্যানালিসিস যা ডেটা পুরোনো মেমোরি থেকে মুক্ত থাকলে ক্লোন ছাড়াই অন্য থ্রেডে স্থানান্তরের সুবিধা দেয়।'
          }
        },
        {
          term: 'Whole Module Optimization (WMO)',
          def: {
            en: 'Release compilation mode (-O) analyzing all files together to perform cross-file inlining and devirtualization.',
            bn: 'রিলিজ কম্পাইলেশন মোড যা সমস্ত ফাইল একসাথে বিশ্লেষণ করে ক্রস-ফাইল ইনলাইনিং ও গতি বৃদ্ধি নিশ্চিত করে।'
          }
        },
        {
          term: 'Swift Package Manager (SPM)',
          def: {
            en: 'Official Apple toolchain manager for compiling, distributing, and resolving modular Swift dependencies declarative.',
            bn: 'অ্যাপলের অফিসিয়াল টুলচেন ম্যানেজার যা বর্ণনামূলকভাবে মডুলার কোড ডিপেন্ডেন্সি ডাউনলোড ও বিল্ড করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'swift-6-data-race-safety-guarantee-ex1',
      kind: 'mcq',
      topic: 'swift-6-complete-concurrency-safety',
      question: {
        en: 'What is the most significant architectural milestone introduced by the Swift 6 compiler regarding concurrency?',
        bn: 'কনকারেন্সির ক্ষেত্রে Swift ৬ কম্পাইলার দ্বারা প্রবর্তিত সবচেয়ে উল্লেখযোগ্য স্থাপত্যিক অগ্রগতি কোনটি?'
      },
      options: [
        {
          en: 'Complete compile-time data race safety: concurrent mutations on non-Sendable shared state are converted into fatal compile-time errors',
          bn: 'বিল্ডের সময়ই সম্পূর্ণ ডেটা রেস নিরাপত্তা: নন-সেন্ডেবল শেয়ার্ড স্টেট পরিবর্তনের যেকোনো চেষ্টাকে সরাসরি মারাত্মক কম্পাইল এররে রূপান্তর করা হয়'
        },
        {
          en: 'Automatic translation of Swift code into Python 2.7',
          bn: 'Swift কোড স্বয়ংক্রিয়ভাবে পাইথন ২.৭-এ রূপান্তর'
        },
        {
          en: 'Banning of all structs and value types from the language',
          bn: 'ভাষা থেকে সমস্ত স্ট্রাক্ট এবং ভ্যালু টাইপ নিষিদ্ধ করা'
        },
        {
          en: 'Mandatory payment for every compiled source line',
          bn: 'প্রতিটি কম্পাইল্ড কোড লাইনের জন্য বাধ্যতামূলক অর্থ প্রদান'
        }
      ],
      answer: 0,
      hint: {
        en: 'Swift 6 guarantees data race freedom at compile time.',
        bn: 'অ্যাপ রিলিজ করার আগেই কম্পাইলার ডেটা রেসের সমস্ত সম্ভাবনা সমূলে ধ্বংস করে দেয়।'
      },
      explanation: {
        en: 'Swift 6 realizes the long-term vision of fearless concurrency. Data races cannot compile, guaranteeing safe multithreaded execution across Apple platforms and Linux servers.',
        bn: 'এর মাধ্যমে মাল্টিথ্রেডেড প্রোগ্রামে ডেটা হারানোর বা ক্র্যাশের ঝুঁকি কম্পাইল-টাইমেই শূন্যে নামিয়ে আনা হয়।'
      }
    },
    {
      id: 'region-based-isolation-mechanism-ex2',
      kind: 'mcq',
      topic: 'region-based-isolation-swift-6-transfer',
      question: {
        en: 'How does "Region-Based Isolation" in Swift 6 eliminate unnecessary cloning when passing non-Sendable values between concurrency boundaries?',
        bn: 'Swift ৬-এ "অঞ্চল-ভিত্তিক আইসোলেশন" কীভাবে নন-সেন্ডেবল ডেটা অন্য থ্রেডে পাঠানোর সময় অযথা ক্লোন করার ঝামেলা দূর করে?'
      },
      options: [
        {
          en: 'The compiler tracks reference lifetime and proves the value has no remaining references in its origin region, allowing it to safely "disconnect" and transfer',
          bn: 'কম্পাইলার রেফারেন্সের জীবদ্দশা পর্যবেক্ষণ করে এবং প্রমাণ করে যে পূর্বের অঞ্চলে কোনো রেফারেন্স বেঁচে নেই, ফলে এটি নিরাপদে "স্থানান্তরিত" হতে পারে'
        },
        {
          en: 'It encrypts the memory block with a 256-bit AES key',
          bn: 'এটি মেমোরি ব্লককে একটি ২৫৬-বিট এইএস কি দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It saves the object to an Amazon S3 cloud bucket',
          bn: 'এটি অবজেক্টটিকে একটি অ্যামাজন এস৩ ক্লাউড বাকেটে সংরক্ষণ করে'
        },
        {
          en: 'Region-based isolation was rejected from Swift 6',
          bn: 'Swift ৬ থেকে অঞ্চল-ভিত্তিক আইসোলেশন বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a value is proven disconnected from its origin region, it can safely transfer.',
        bn: 'আগের জায়গায় আর কোনো সংযোগ না থাকলে ডেটা নিরাপদে এক থ্রেড থেকে অন্য থ্রেডে চলে যেতে পারে।'
      },
      explanation: {
        en: 'Region-based isolation is a major usability leap in Swift 6. It avoids cumbersome defensive copying when the compiler can mathematically verify that only one task owns the value.',
        bn: 'ফলে বাড়তি মেমোরি খরচ না করেও সম্পূর্ণ নিরাপত্তা বজায় থাকে।'
      }
    },
    {
      id: 'whole-module-optimization-wmo-ex3',
      kind: 'mcq',
      topic: 'whole-module-optimization-compiler-inlining',
      question: {
        en: 'Why does enabling Whole Module Optimization (WMO) in release configurations produce significantly faster and smaller binaries than debug compilation?',
        bn: 'রিলিজ কনফিগারেশনে Whole Module Optimization (WMO) চালু করলে কেন ডিবাগ বিল্ডের চেয়ে অনেক দ্রুত এবং ছোট বাইনারি তৈরি হয়?'
      },
      options: [
        {
          en: 'It compiles all module files simultaneously into 1 unit, empowering the compiler to inline functions across files, collapse existential types, and strip dead code',
          bn: 'এটি সমস্ত ফাইলকে একসাথে ১ টি ইউনিটে কম্পাইল করে, যা ফাইল সীমানা পেরিয়ে মেথড সরাসরি ইনলাইন করতে, টাইপ বক্স সংকুচিত করতে এবং ডেড কোড মুছে ফেলতে সাহায্য করে'
        },
        {
          en: 'It removes all security certificates from the application',
          bn: 'এটি অ্যাপ্লিকেশন থেকে সমস্ত সিকিউরিটি সার্টিফিকেট মুছে ফেলে'
        },
        {
          en: 'It reduces the screen resolution of the iPhone to 480p',
          bn: 'এটি আইফোনের স্ক্রিন রেজোলিউশন ৪৮০পিতে কমিয়ে দেয়'
        },
        {
          en: 'WMO is only supported on Android devices',
          bn: 'WMO কেবল অ্যান্ড্রয়েড ডিভাইসে সমর্থিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'WMO analyzes the whole module at once, unlocking cross-file optimizations.',
        bn: 'আলাদা আলাদা না দেখে সব ফাইল একসাথে দেখে কম্পাইলার সর্বোচ্চ অপটিমাইজেশন চালায়।'
      },
      explanation: {
        en: 'In debug builds, files are compiled separately for speed. In release, WMO unlocks cross-file inlining and monomorphization, dramatically reducing function call overhead.',
        bn: 'এর ফলে প্রোডাকশন কোডের গতি বহুগুণ বৃদ্ধি পায় এবং মেমোরি খরচ কমে যায়।'
      }
    },
    {
      id: 'swift-package-manager-manifest-contract-ex4',
      kind: 'mcq',
      topic: 'package-swift-manifest-declarative-architecture',
      question: {
        en: 'What role does the "Package.swift" manifest fulfill within the Swift Package Manager ecosystem?',
        bn: 'Swift Package Manager ইকোসিস্টেমে "Package.swift" ম্যানিফেস্টটি কোন ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It is a declarative Swift source file defining the package products, executable and library targets, external dependencies, and minimum platform requirements',
          bn: 'এটি একটি বর্ণনামূলক Swift সোর্স ফাইল যা প্যাকেজ প্রোডাক্ট, এক্সিকিউটেবল ও লাইব্রেরি টার্গেট, এক্সটার্নাল ডিপেন্ডেন্সি এবং প্ল্যাটফর্মের ন্যূনতম প্রয়োজনীয়তা সংজ্ঞায়িত করে'
        },
        {
          en: 'It stores the user\'s Apple ID password in cleartext',
          bn: 'এটি ব্যবহারকারীর অ্যাপল আইডি পাসওয়ার্ড প্লেইনটেক্সটে সংরক্ষণ করে'
        },
        {
          en: 'It converts the app into an HTML webpage',
          bn: 'এটি অ্যাপটিকে একটি এইচটিএমএল ওয়েবপেজে রূপান্তর করে'
        },
        {
          en: 'Package.swift was deprecated in favor of CocoaPods in 2024',
          bn: '২০২৪ সালে Package.swift বাদ দিয়ে কোকোপডস ফিরিয়ে আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Package.swift is the declarative blueprint for an SPM package.',
        bn: 'কোন কোন লাইব্রেরি লাগবে এবং অ্যাপ কীভাবে বিল্ড হবে তার মূল নকশা থাকে এখানে।'
      },
      explanation: {
        en: 'Package.swift uses real Swift code to declaratively configure module boundaries, test targets, and third-party dependencies without third-party package managers.',
        bn: 'কোনো তৃতীয় পক্ষের প্যাকেজ ম্যানেজার ছাড়াই এটি সম্পূর্ণ বিল্ড সিস্টেম পরিচালনা করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-swift-release',
    title: {
      en: 'Swift 6 & Release Tooling Quiz',
      bn: 'Swift ৬ এবং রিলিজ টুলিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-swift-evolution-proposal-process',
        kind: 'mcq',
        topic: 'swift-evolution-proposals-open-source',
        question: {
          en: 'How are new syntax features, standard library types, and architectural changes introduced into Swift via the open-source community?',
          bn: 'ওপেন-সোর্স কমিউনিটির মাধ্যমে কীভাবে নতুন সিনট্যাক্স, স্ট্যান্ডার্ড লাইব্রেরি টাইপ এবং কাঠামোগত পরিবর্তন Swift-এ যুক্ত হয়?'
        },
        options: [
          {
            en: 'Through the Swift Evolution process (SE proposals), where formal designs are publicly reviewed, debated by the community, and accepted by the language core team',
            bn: 'Swift Evolution প্রক্রিয়ার (SE প্রস্তাবনা) মাধ্যমে, যেখানে আনুষ্ঠানিক ডিজাইন উন্মুক্তভাবে যাচাই, কমিউনিটি দ্বারা বিতর্ক এবং কোর টিম দ্বারা অনুমোদিত হয়'
          },
          {
            en: 'By voting on private social media chat channels',
            bn: 'প্রাইভেট সোশ্যাল মিডিয়া চ্যাটে ভোটের মাধ্যমে'
          },
          {
            en: 'Through lottery drawings held once every 4 years',
            bn: 'প্রতি ৪ বছরে একবার অনুষ্ঠিত লটারি ড্রয়ের মাধ্যমে'
          },
          {
            en: 'Apple engineers push changes without public notice',
            bn: 'অ্যাপল ইঞ্জিনিয়াররা কোনো নোটিশ ছাড়াই পরিবর্তন চাপিয়ে দেন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swift Evolution (SE proposals) governs language changes publicly.',
          bn: 'সবার জন্য উন্মুক্ত প্রস্তাবনা ও পর্যালোচনার মাধ্যমেই ভাষার উন্নয়ন ঘটে।'
        },
        explanation: {
          en: 'Swift Evolution ensures open, transparent language stewardship where every major language feature undergoes rigorous review before implementation.',
          bn: 'এর ফলে প্রতিটি নতুন ফিচার পুঙ্খানুপুঙ্খভাবে পরীক্ষিত হয়ে বিশ্বমানের নিরাপত্তা অর্জন করে।'
        }
      },
      {
        id: 'quiz-dead-code-stripping-linker-phase',
        kind: 'mcq',
        topic: 'dead-code-stripping-binary-size-optimization',
        question: {
          en: 'What optimization does the linker perform when the "-dead_strip" flag is engaged during production iOS compilation?',
          bn: 'প্রোডাকশন iOS কম্পাইলেশনের সময় "-dead_strip" ফ্ল্যাগ ব্যবহার করা হলে লিংকার কোন অপটিমাইজেশন সম্পাদন করে?'
        },
        options: [
          {
            en: 'It scans the compiled object graph and strips out all unreferenced functions, unreachable structs, and unused symbols from the final Mach-O binary',
            bn: 'এটি কম্পাইল্ড অবজেক্ট গ্রাফ স্ক্যান করে এবং অপ্রয়োজনীয় মেথড, অব্যবহৃত স্ট্রাক্ট ও অপ্রয়োজনীয় সিম্বলগুলো চূড়ান্ত Mach-O বাইনারি থেকে ছেঁটে ফেলে'
          },
          {
            en: 'It deletes all user photos from the testing device',
            bn: 'এটি টেস্টিং ডিভাইস থেকে ব্যবহারকারীর সমস্ত ছবি মুছে ফেলে'
          },
          {
            en: 'It permanently locks the source code in read-only mode',
            bn: 'এটি সোর্স কোডকে স্থায়ীভাবে রিড-অনলি মোডে লক করে দেয়'
          },
          {
            en: 'Dead code stripping was banned by Apple in 2021',
            bn: '২০২১ সালে অ্যাপল ডেড কোড স্ট্রিপিং নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dead code stripping purges unused symbols and functions from the binary.',
          bn: 'যেসব কোড বা লাইব্রেরি কখনোই ডাকা হয় না, সেগুলোকে বাইনারি থেকে পুরোপুরি বাদ দেওয়া হয়।'
        },
        explanation: {
          en: 'Dead code stripping ensures that unused library methods never inflate download sizes for mobile end users, yielding lean, responsive app binaries.',
          bn: 'এর ফলে ব্যবহারকারীদের জন্য অ্যাপ ডাউনলোডের সাইজ অনেক কমে যায়।'
        }
      },
      {
        id: 'quiz-swift-testing-framework-modern',
        kind: 'mcq',
        topic: 'swift-testing-framework-macro-based-modern',
        question: {
          en: 'What modern testing framework was introduced in Swift 6 to complement and modernize traditional XCTest test suites?',
          bn: 'চিরাচরিত XCTest টেস্ট স্যুটকে আধুনিকায়ন ও সমৃদ্ধ করতে Swift ৬-এ কোন আধুনিক টেস্টিং ফ্রেমওয়ার্ক আনা হয়েছে?'
        },
        options: [
          {
            en: 'The "Swift Testing" framework (@Test, #expect), offering expressive macro-based assertions, parameterized testing, and native async concurrency integration',
            bn: '"Swift Testing" ফ্রেমওয়ার্ক (@Test, #expect), যা ম্যাক্রো-ভিত্তিক সহজ অ্যাসার্শন, প্যারামিটারাইজড টেস্ট এবং নেটিভ অ্যাসিঙ্ক কনকারেন্সি ইন্টিগ্রেশন সরবরাহ করে'
          },
          {
            en: 'The JUnit4 framework written in Java 8',
            bn: 'জাভা ৮-এ লেখা JUnit4 ফ্রেমওয়ার্ক'
          },
          {
            en: 'The Selenium web automation browser driver',
            bn: 'সেলেনিয়াম ওয়েব অটোমেশন ব্রাউজার ড্রাইভার'
          },
          {
            en: 'Automated testing was removed from Swift 6',
            bn: 'Swift ৬ থেকে স্বয়ংক্রিয় টেস্টিং বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swift Testing uses modern macros like @Test and #expect.',
          bn: '@Test এবং #expect ম্যাক্রো দিয়ে আরও সহজে ও আধুনিক উপায়ে টেস্ট লেখা যায়।'
        },
        explanation: {
          en: 'Swift Testing replaces boilerplate subclassing with concise macros (@Test, #expect), providing rich failure diagnostics and built-in concurrency support.',
          bn: 'ফলে জটিল ক্লাস না লিখে সরাসরি আধুনিক সিনট্যাক্সে টেস্ট কেস সাজানো যায়।'
        }
      },
      {
        id: 'quiz-binary-frameworks-xcframework',
        kind: 'mcq',
        topic: 'xcframework-multiplatform-binary-packaging',
        question: {
          en: 'Why is the "XCFramework" format standard for distributing pre-compiled closed-source binary dependencies in the Apple ecosystem?',
          bn: 'অ্যাপল ইকোসিস্টেমে প্রি-কম্পাইল্ড বাইনারি ডিপেন্ডেন্সি বিতরণের জন্য কেন "XCFramework" ফরম্যাট স্ট্যান্ডার্ড?'
        },
        options: [
          {
            en: 'It packages binary slices for multiple platforms and architectures (iOS devices, iOS Simulators, macOS, visionOS) into a single bundle without slice collisions',
            bn: 'এটি একাধিক প্ল্যাটফর্ম এবং আর্কিটেকচারের (iOS ডিভাইস, সিমুলেটর, macOS, visionOS) জন্য বাইনারি স্লাইসগুলোকে কোনো সংঘাত ছাড়াই একটি একক বান্ডেলে ধারণ করে'
          },
          {
            en: 'It encrypts the entire iPhone hardware motherboard',
            bn: 'এটি সম্পূর্ণ আইফোন মাদারবোর্ড এনক্রিপ্ট করে রাখে'
          },
          {
            en: 'It converts the app into an Android APK bundle',
            bn: 'এটি অ্যাপটিকে একটি অ্যান্ড্রয়েড APK বান্ডেলে রূপান্তর করে'
          },
          {
            en: 'XCFramework was deprecated in iOS 14',
            bn: 'iOS ১৪ সংস্করণে XCFramework বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'XCFramework supports multi-platform and simulator/device binary packaging in one bundle.',
          bn: 'একই বান্ডেলের ভেতর আসল ডিভাইস ও কম্পিউটারের সিমুলেটর উভয়ের জন্য কোড সাজিয়ে রাখা যায়।'
        },
        explanation: {
          en: 'Unlike legacy "fat" universal frameworks, XCFramework cleanly partitions device and simulator architectures, enabling smooth distribution across Apple hardware.',
          bn: 'এর মাধ্যমে সব ধরনের অ্যাপল ডিভাইসে নিখুঁতভাবে প্রি-কম্পাইল্ড লাইব্রেরি বণ্টন করা যায়।'
        }
      }
    ]
  }
};
