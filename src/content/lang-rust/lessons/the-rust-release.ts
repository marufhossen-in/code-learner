import type { Lesson } from '../../../lib/types';

export const TheRustReleaseLesson: Lesson = {
  slug: 'the-rust-release',
  tech: 'lang-rust',
  title: {
    en: 'Compiler Release Profiles & Microservice Packaging',
    bn: 'কম্পাইলার রিলিজ প্রোফাইল এবং মাইক্রোসার্ভিস প্যাকেজিং'
  },
  summary: {
    en: 'Master compiler optimization and container distribution for production Rust applications. Tune Cargo release profiles with opt-level = 3, Link-Time Optimization (lto = true), and codegen-units = 1. Construct minimal multi-stage Dockerfiles compiling against musl for static linking, implement distributed tracing with structured telemetry, and package hardened container images under 20 megabytes.',
    bn: 'প্রোডাকশন Rust অ্যাপ্লিকেশনের কম্পাইলার অপটিমাইজেশন এবং কন্টেইনার ডিস্ট্রিবিউশন আয়ত্ত করুন। opt-level = 3, Link-Time Optimization (lto = true) এবং codegen-units = 1 সহ কার্গো রিলিজ প্রোফাইল কনফিগারেশন। musl দিয়ে স্ট্যাটিক লিঙ্কযুক্ত মাল্টি-স্টেজ ডকারফাইল তৈরি, স্ট্রাকচার্ড টেলিমেট্রি সহ ডিস্ট্রিবিউটেড ট্রেসিং এবং ২০ মেগাবাইটের নিচে ক্ষুদ্র সুরক্ষিত কন্টেইনার প্যাকেজিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'compiler-optimization-and-lto-heading',
      text: {
        en: 'Compiler Optimization, Release Profiles & Whole-Program LTO',
        bn: 'কম্পাইলার অপটিমাইজেশন, রিলিজ প্রোফাইল এবং LTO'
      }
    },
    {
      type: 'para',
      text: {
        en: 'During local development, Cargo defaults to the dev profile: fast compilation times with debug symbols and zero optimization ("opt-level = 0"). Preparing an application for production requires unlocking the full power of the LLVM (optimizing compiler infrastructure) backend. In Rust (the memory-safe systems programming language), developers configure the "[profile.release]" section of Cargo.toml. Setting "opt-level = 3" directs the compiler to prioritize peak runtime throughput. Specifying "codegen-units = 1" merges parallel compilation blocks into a single unit, allowing Link-Time Optimization ("lto = true") to perform whole-program dead code elimination and cross-crate function inlining. Additionally, setting "panic = abort" removes stack unwinding tables, drastically reducing executable size.',
        bn: 'স্থানীয় ডেভেলপমেন্টের সময় কার্গো ডিফল্টভাবে ডেভ (dev) প্রোফাইল ব্যবহার করে: ডিবাগ সিম্বলসহ দ্রুত কম্পাইল সময় কিন্তু শূন্য অপটিমাইজেশন ("opt-level = 0")। কিন্তু প্রোডাকশনের জন্য অ্যাপ্লিকেশন প্রস্তুত করতে LLVM (অপটিমাইজিং কম্পাইলার অবকাঠামো) ব্যাকএন্ডের পূর্ণ ক্ষমতা ব্যবহার করা প্রয়োজন। Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা)-এ ডেভেলপাররা Cargo.toml ফাইলে "[profile.release]" সেকশন কনফিগার করেন। "opt-level = 3" সেট করলে কম্পাইলার সর্বোচ্চ রানটাইম গতিকে অগ্রাধিকার দেয়। "codegen-units = 1" দিলে সমান্তরাল কম্পাইলেশন ব্লকগুলো একটি ইউনিটে একত্রিত হয়, যা লিঙ্ক-টাইম অপটিমাইজেশনকে ("lto = true") পুরো প্রোগ্রামের অব্যবহৃত কোড মুছে ফেলতে এবং ক্রস-ক্রেট ফাংশন ইনলাইনিং করতে সহায়তা করে। তাছাড়া "panic = abort" সেট করলে স্ট্যাক আনওয়াইন্ডিং টেবিল বাদ পড়ে এক্সিকিউটেবল সাইজ অনেক কমে যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Production release pipeline: From Cargo source files through LLVM whole-program LTO to a statically linked musl binary packaged in a 20 MB scratch container.',
        bn: 'চিত্র ১: প্রোডাকশন রিলিজ পাইপলাইন: কার্গো সোর্স ফাইল থেকে LLVM হোল-প্রোগ্রাম LTO এর মাধ্যমে একটি ২০ মেগাবাইটের ক্ষুদ্র স্ক্র্যাচ কন্টেইনারে স্ট্যাটিক musl বাইনারি তৈরি।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST PRODUCTION RELEASE &amp; CONTAINERIZATION PIPELINE</text>

  <!-- Step 1: Cargo Source -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source Crate</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Cargo.toml</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Dependencies</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">cargo build --rel</text>

    <text x="15" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif">Deterministic Tree</text>
  </g>

  <!-- Step 2: LLVM LTO -->
  <g transform="translate(190, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. LLVM LTO</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">opt-level = 3</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">codegen-units = 1</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Cross-Crate Inline</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Peak Throughput</text>
  </g>

  <!-- Step 3: Musl Static Link -->
  <g transform="translate(350, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#059669" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Static Linking</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">x86_64-musl</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Zero glibc dep</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">strip = true</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Self-Contained</text>
  </g>

  <!-- Step 4: Multi-Stage Docker -->
  <g transform="translate(520, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#9333ea" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Docker Stage</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">FROM scratch</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">COPY bin</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">USER appuser</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">No Vulnerabilities</text>
  </g>

  <!-- Step 5: Final Container -->
  <g transform="translate(680, 65)">
    <rect width="135" height="235" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#be123c" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Final Image</text>

    <rect x="10" y="45" width="115" height="50" rx="5" fill="#0f172a" stroke="#e11d48" />
    <text x="15" y="68" fill="#fb7185" font-size="9" font-family="monospace">&lt; 20 MB Image</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Sub-5ms Boot</text>

    <rect x="10" y="105" width="115" height="40" rx="5" fill="#0f172a" stroke="#e11d48" />
    <text x="15" y="130" fill="#fb7185" font-size="9" font-family="monospace">Port 8080</text>

    <text x="15" y="215" fill="#fb7185" font-size="10" font-family="sans-serif">Enterprise Ready</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'multi-stage-docker-and-observability-heading',
      text: {
        en: 'Multi-Stage Docker Packaging and Structured Observability',
        bn: 'মাল্টি-স্টেজ ডকার প্যাকেজিং এবং স্ট্রাকচার্ড অবজারভেবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In cloud Kubernetes clusters, container image size directly dictates rollout latency and security attack surfaces. For enterprise deployments, engineers assemble multi-stage Docker builds. The initial build stage compiles source code inside a heavyweight Rust musl container with all optimizations enabled. The finalized image stage discards the entire compiler, package caches, and source files, copying solely the stripped static binary into a minimal scratch or Alpine container. This produces a hardened, production container footprint measuring under 20 megabytes that starts up in under 5 milliseconds. Coupled with structured tracing telemetry and Prometheus metrics, the resulting microservice provides complete operational transparency under heavy production workloads.',
        bn: 'ক্লাউড কুবারনেটিস ক্লাস্টারে কন্টেইনার ইমেজের সাইজ সরাসরি রোলআউট লেটেন্সি এবং নিরাপত্তা ঝুঁকি নিয়ন্ত্রণ করে। এন্টারপ্রাইজ ডিপ্লয়মেন্টের জন্য ইঞ্জিনিয়াররা মাল্টি-স্টেজ ডকার বিল্ড তৈরি করেন। প্রাথমিক বিল্ড ধাপে একটি ভারী Rust musl কন্টেইনারের ভেতর সমস্ত অপটিমাইজেশন অন করে কোড কম্পাইল করা হয়। চূড়ান্ত ধাপে কম্পাইলার, প্যাকেজ ক্যাশ ও সোর্স ফাইল বাদ দিয়ে শুধুমাত্র সেই স্ট্রিপড স্ট্যাটিক বাইনারিটি একটি খালি scratch বা Alpine কন্টেইনারে নেওয়া হয়। এর ফলে ২০ মেগাবাইটের নিচে একটি নিরাপদ প্রোডাকশন কন্টেইনার তৈরি হয় যা ৫ মিলিসেকেন্ডেরও কম সময়ে বুট নেয়। স্ট্রাকচার্ড ট্রেসিং এবং প্রমিথিউস মেট্রিক্স যুক্ত থাকার কারণে উচ্চ ট্রাফিকেও এই মাইক্রোসার্ভিস সম্পূর্ণ স্বচ্ছ ও পর্যবেক্ষণযোগ্য থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust release profile metrics, binary size reduction calculation, and microservice telemetry.',
        bn: 'Rust রিলিজ প্রোফাইল মেট্রিক্স, বাইনারি সাইজ হ্রাস এবং মাইক্রোসার্ভিস টেলিমেট্রির TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Compiler Release Profiles and Static Container Metrics

export interface BuildProfile {
  name: 'dev' | 'release_default' | 'release_hardened';
  optLevel: number;
  lto: boolean;
  codegenUnits: number;
  panicStrategy: 'unwind' | 'abort';
  stripSymbols: boolean;
}

export class RustReleaseOptimizer {
  // Simulating compilation metrics and output binary footprint
  public static calculateBuildMetrics(profile: BuildProfile): {
    estimatedBinaryMb: number;
    compilationTimeSeconds: number;
    runtimeThroughputRps: number;
  } {
    let baseSize = 85; // Unoptimized dev binary with full debug symbols
    let compileTime = 12; // Fast compilation
    let throughput = 15000; // Unoptimized baseline

    if (profile.optLevel === 3) {
      throughput += 45000;
      compileTime += 15;
    }

    if (profile.lto) {
      baseSize -= 25; // Whole-program dead code elimination
      compileTime += 30; // Heavy cross-crate analysis
      throughput += 12000;
    }

    if (profile.codegenUnits === 1) {
      compileTime += 20; // Single compilation thread optimizes more aggressively
    }

    if (profile.panicStrategy === 'abort') {
      baseSize -= 15; // Removes landing pad unwinding tables
    }

    if (profile.stripSymbols) {
      baseSize -= 30; // Strips debug symbol tables
    }

    return {
      estimatedBinaryMb: Math.max(12, baseSize),
      compilationTimeSeconds: compileTime,
      runtimeThroughputRps: throughput
    };
  }
}

// 1. Dev Profile (Fast build, large binary, baseline speed)
const devProfile: BuildProfile = {
  name: 'dev',
  optLevel: 0,
  lto: false,
  codegenUnits: 16,
  panicStrategy: 'unwind',
  stripSymbols: false
};

const devMetrics = RustReleaseOptimizer.calculateBuildMetrics(devProfile);
console.log('Dev Binary Size:', devMetrics.estimatedBinaryMb, 'MB'); // 85 MB
console.log('Dev Compile Time:', devMetrics.compilationTimeSeconds, 's'); // 12 s

// 2. Production Hardened Profile (opt-level 3, LTO fat, codegen-units 1, strip)
const prodProfile: BuildProfile = {
  name: 'release_hardened',
  optLevel: 3,
  lto: true,
  codegenUnits: 1,
  panicStrategy: 'abort',
  stripSymbols: true
};

const prodMetrics = RustReleaseOptimizer.calculateBuildMetrics(prodProfile);
console.log('Hardened Release Binary Size:', prodMetrics.estimatedBinaryMb, 'MB'); // 15 MB (< 20 MB container)
console.log('Throughput Gain:', prodMetrics.runtimeThroughputRps, 'requests/sec'); // 72000 RPS`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Link-Time Optimization (LTO)',
          def: {
            en: 'LLVM compilation stage performing whole-program analysis, cross-crate inlining, and aggressive dead code elimination.',
            bn: 'LLVM কম্পাইলেশন ধাপ যা পুরো প্রোগ্রাম বিশ্লেষণ করে সব ক্রেটের মধ্যে কোড ইনলাইন ও অপ্রয়োজনীয় কোড মুছে দেয়।'
          }
        },
        {
          term: 'Release Profile',
          def: {
            en: 'Cargo.toml settings targeting production builds with maximum compiler optimizations and stripped debug symbols.',
            bn: 'Cargo.toml সেটিংস যা সর্বোচ্চ অপটিমাইজেশন এবং অপ্রয়োজনীয় ডিবাগ সিম্বল মুছে প্রোডাকশন কোড তৈরি করে।'
          }
        },
        {
          term: 'Static Binary (musl)',
          def: {
            en: 'Executable compiled without dynamic C library dependencies, capable of running inside an empty scratch Docker container.',
            bn: 'কোনো ডায়নামিক লাইব্রেরি ছাড়া তৈরি এক্সিকিউটেবল যা একটি সম্পূর্ণ খালি স্ক্র্যাচ ডকার কন্টেইনারে চলতে সক্ষম।'
          }
        },
        {
          term: 'Distributed Tracing',
          def: {
            en: 'Telemetry architecture attaching request IDs and hierarchical timing spans across asynchronous microservice boundaries.',
            bn: 'টেলিমেট্রি ব্যবস্থা যা অ্যাসিঙ্ক্রোনাস মাইক্রোসার্ভিসের বিভিন্ন ধাপে রিকোয়েস্ট আইডি ও সময় ট্র্যাক করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'release-profile-lto-setting-ex1',
      kind: 'mcq',
      topic: 'cargo-release-profile-lto-configuration',
      question: {
        en: 'Which Cargo.toml setting instructs the compiler to perform whole-program cross-crate optimization during release builds?',
        bn: 'কোন Cargo.toml সেটিংসটি কম্পাইলারকে রিলিজ বিল্ডের সময় পুরো প্রোগ্রামের ক্রস-ক্রেট অপটিমাইজেশন চালাতে নির্দেশ দেয়?'
      },
      options: [
        {
          en: 'lto = true (or lto = "fat") alongside codegen-units = 1 in the [profile.release] table',
          bn: '[profile.release] টেবিলে codegen-units = 1 এর পাশাপাশি lto = true (বা lto = "fat")'
        },
        {
          en: 'opt-level = "debug" inside the [dependencies] section',
          bn: '[dependencies] সেকশনের ভেতরে opt-level = "debug"'
        },
        {
          en: 'debug = true with overflow-checks disabled',
          bn: 'overflow-checks বন্ধ রেখে debug = true'
        },
        {
          en: 'LTO was removed in Rust 2018',
          bn: 'Rust ২০১৮ সংস্করণে LTO বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'lto = true enables Link-Time Optimization.',
        bn: 'লিঙ্ক-টাইম অপটিমাইজেশন চালুর জন্য lto = true ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Setting lto = true merges LLVM bitcode across all dependent crates, unlocking deep cross-crate optimizations that dramatically improve throughput.',
        bn: 'এর ফলে সব লাইব্রেরির কোড একসাথে অপটিমাইজ হয়ে সর্বোচ্চ কার্যক্ষমতা নিশ্চিত হয়।'
      }
    },
    {
      id: 'musl-target-scratch-container-ex2',
      kind: 'mcq',
      topic: 'musl-static-linking-scratch-docker-image',
      question: {
        en: 'Why do production engineers target "x86_64-unknown-linux-musl" when building static Rust microservice binaries for Docker?',
        bn: 'ডকারের জন্য স্ট্যাটিক Rust মাইক্রোসার্ভিস বাইনারি তৈরির সময় ইঞ্জিনিয়াররা কেন "x86_64-unknown-linux-musl" টার্গেট করেন?'
      },
      options: [
        {
          en: 'Musl statically links all C runtime dependencies into the binary, allowing it to execute inside a completely empty "FROM scratch" Docker image',
          bn: 'Musl সমস্ত C রানটাইম ডিপেন্ডেন্সি বাইনারির সাথে স্ট্যাটিকালি লিঙ্ক করে, ফলে এটি সম্পূর্ণ খালি "FROM scratch" ডকার ইমেজে চলতে পারে'
        },
        {
          en: 'Musl multiplies server RAM by 2',
          bn: 'Musl সার্ভারের র‍্যাম দ্বিগুণ করে দেয়'
        },
        {
          en: 'Musl converts Rust into Python bytecode',
          bn: 'Musl কোডকে পাইথন বাইটকোডে রূপান্তর করে'
        },
        {
          en: 'Musl binaries require a full Ubuntu desktop installation to run',
          bn: 'Musl বাইনারি চালানোর জন্য সম্পূর্ণ উবুন্টু ডেস্কটপ প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Musl enables 100% static linking without dynamic glibc dependencies.',
        bn: 'কোনো গ্লিবসি লাইব্রেরি ছাড়াই পুরোপুরি স্বয়ংসম্পূর্ণ বাইনারি তৈরি করে Musl।'
      },
      explanation: {
        en: 'Standard Linux binaries rely on dynamic glibc shared libraries. Musl statically bundles the runtime, enabling minimal, zero-dependency container distribution.',
        bn: 'বাইরে থেকে কোনো লাইব্রেরি সংযোগ না লাগায় কন্টেইনারের আকার চরম ছোট হয়।'
      }
    },
    {
      id: 'panic-strategy-abort-binary-size-ex3',
      kind: 'mcq',
      topic: 'panic-strategy-abort-binary-size-savings',
      question: {
        en: 'How does configuring "panic = \'abort\'" in Cargo release profiles reduce binary size and improve security?',
        bn: 'কার্গো রিলিজ প্রোফাইলে "panic = \'abort\'" কনফিগার করলে কীভাবে বাইনারি সাইজ কমে এবং নিরাপত্তা বৃদ্ধি পায়?'
      },
      options: [
        {
          en: 'It eliminates the heavy stack unwinding and landing-pad tables from the executable, terminating the process immediately upon any panic',
          bn: 'এটি এক্সিকিউটেবল থেকে ভারী স্ট্যাক আনওয়াইন্ডিং ও ল্যান্ডিং-প্যাড টেবিল মুছে ফেলে এবং প্যানিক হওয়া মাত্রই প্রসেস বন্ধ করে দেয়'
        },
        {
          en: 'It encrypts the hard drive whenever a panic happens',
          bn: 'প্যানিক হওয়া মাত্র এটি হার্ড ড্রাইভ এনক্রিপ্ট করে'
        },
        {
          en: 'It disables all network sockets on port 8080',
          bn: 'এটি পোর্ট ৮০৮০ এর সমস্ত নেটওয়ার্ক সকেট বন্ধ করে দেয়'
        },
        {
          en: 'panic = "abort" was removed in Rust 2021',
          bn: 'Rust ২০২১ সংস্করণে panic = "abort" বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'panic = "abort" removes landing pad unwinding tables from the binary.',
        bn: 'স্ট্যাক আনওয়াইন্ডিংয়ের জটিল কোড বাদ দিয়ে সরাসরি প্রসেস বন্ধ করে সাইজ বাঁচায়।'
      },
      explanation: {
        en: 'Stack unwinding tables can occupy significant binary space. Aborting on panic strips these tables, yielding smaller binaries and predictable teardown in containers.',
        bn: 'কন্টেইনার পরিবেশে প্যানিক হলে তাৎক্ষণিক রিস্টার্ট বেশি নিরাপদ ও সুবিধাজনক।'
      }
    },
    {
      id: 'strip-symbols-production-hardening-ex4',
      kind: 'mcq',
      topic: 'compiler-strip-symbols-release-profile',
      question: {
        en: 'What architectural benefit is achieved by enabling "strip = true" in Cargo.toml release profiles?',
        bn: 'Cargo.toml রিলিজ প্রোফাইলে "strip = true" যুক্ত করলে কোন স্থাপত্যিক সুবিধা পাওয়া যায়?'
      },
      options: [
        {
          en: 'It automatically strips all debug symbols and function name tables from the compiled binary, reducing disk footprint by up to 40 percent without degrading runtime speed',
          bn: 'এটি কম্পাইল্ড বাইনারি থেকে সমস্ত ডিবাগ সিম্বল ও ফাংশনের নাম মুছে ফেলে, যা রানটাইম গতি অক্ষুণ্ন রেখে ডিস্কের সাইজ প্রায় ৪০ শতাংশ পর্যন্ত কমিয়ে আনে'
        },
        {
          en: 'It deletes all unit test files from the project directory',
          bn: 'এটি প্রজেক্ট ডিরেক্টরি থেকে সমস্ত ইউনিট টেস্ট ফাইল মুছে ফেলে'
        },
        {
          en: 'It formats the operating system kernel on launch',
          bn: 'চালু হওয়ার সময় এটি অপারেটিং সিস্টেম কার্নেল ফরম্যাট করে'
        },
        {
          en: 'strip = true is only supported on macOS systems',
          bn: 'strip = true কেবল ম্যাকওএস সিস্টেমে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stripping removes debug symbol tables from the final binary.',
        bn: 'উৎপাদিত সফটওয়্যার থেকে বাড়তি ডিবাগ নামগুলো সরিয়ে ফাইল হালকা করা হয়।'
      },
      explanation: {
        en: 'Debug symbols are essential for development but unnecessary for containerized execution. Stripping them saves tens of megabytes of image weight.',
        bn: 'ফলে প্রোডাকশন ইমেজের ওজন কমে এবং ক্লাউডে দ্রুত স্থাপন সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-rust-release',
    title: {
      en: 'Rust Release Optimization & Deployment Quiz',
      bn: 'Rust রিলিজ অপটিমাইজেশন এবং ডিপ্লয়মেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-codegen-units-throughput-tradeoff',
        kind: 'mcq',
        topic: 'codegen-units-compilation-vs-runtime-tradeoff',
        question: {
          en: 'What is the engineering trade-off of setting "codegen-units = 1" in Rust release configurations?',
          bn: 'Rust রিলিজ কনফিগারেশনে "codegen-units = 1" সেট করার ইঞ্জিনিয়ারিং ট্রেড-অফ কী?'
        },
        options: [
          {
            en: 'It increases compilation time because the compiler cannot parallelize code generation across multiple CPU cores, but produces faster and smaller machine code',
            bn: 'এটি কম্পাইলেশনের সময় বাড়িয়ে দেয় কারণ কম্পাইলার সমান্তরাল কোড তৈরি করতে পারে না, কিন্তু এটি আরও দ্রুত ও ক্ষুদ্র মেশিন কোড তৈরি করে'
          },
          {
            en: 'It limits the application to a single CPU core at runtime',
            bn: 'এটি রানটাইমে অ্যাপ্লিকেশনটিকে একটি একক সিপিইউ কোরে সীমাবদ্ধ করে'
          },
          {
            en: 'It forces all variables to be 32-bit floating point numbers',
            bn: 'এটি সমস্ত ভ্যারিয়েবলকে ৩২-বিট ফ্লোটিং সংখ্যা হতে বাধ্য করে'
          },
          {
            en: 'codegen-units = 1 was deprecated in Rust 2018',
            bn: 'Rust ২০১৮ সংস্করণে codegen-units = 1 বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'codegen-units = 1 trades slower build times for superior compiler optimization.',
          bn: 'বিল্ডে কিছুটা বাড়তি সময় লাগলেও তৈরি হওয়া অ্যাপটি সর্বোচ্চ অপটিমাইজেশন লাভ করে।'
        },
        explanation: {
          en: 'When codegen-units is greater than 1, LLVM divides code into chunks that cannot fully optimize each other. A single unit allows comprehensive global optimization.',
          bn: 'সব কোড এক সাথে বিবেচনা করায় কম্পাইলার সবচেয়ে সেরা কোড তৈরি করতে পারে।'
        }
      },
      {
        id: 'quiz-docker-layer-caching-cargo-chef',
        kind: 'mcq',
        topic: 'cargo-chef-docker-layer-caching',
        question: {
          en: 'Why do high-velocity DevOps engineering teams utilize "cargo-chef" in their Docker CI pipelines?',
          bn: 'উচ্চ-গতির ডেভঅপস ইঞ্জিনিয়ারিং দলগুলো কেন তাদের ডকার সিআই পাইপলাইনে "cargo-chef" ব্যবহার করে?'
        },
        options: [
          {
            en: 'It separates third-party dependency compilation from application source compilation, allowing Docker to cache expensive dependency builds across code changes',
            bn: 'এটি অ্যাপ্লিকেশন কোড থেকে তৃতীয় পক্ষের ডিপেন্ডেন্সি কম্পাইলেশন আলাদা করে, ফলে কোড পাল্টালেও ডকার আগের তৈরি করা লাইব্রেরি ক্যাশ থেকে দ্রুত ব্যবহার করতে পারে'
          },
          {
            en: 'It cooks organic meals for the server farm technicians',
            bn: 'এটি সার্ভার টেকনিশিয়ানদের জন্য খাবার রান্না করে'
          },
          {
            en: 'It translates Rust source files into HTML tables',
            bn: 'এটি Rust সোর্স কোডকে এইচটিএমএল টেবিলে রূপান্তর করে'
          },
          {
            en: 'cargo-chef was replaced by npm install in 2021',
            bn: '২০২১ সালে cargo-chef বাদ দিয়ে npm install আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'cargo-chef caches dependency compilation in Docker layers.',
          bn: 'ডিপেন্ডেন্সি আগে থেকে ক্যাশ করে রেখে কোড পরিবর্তনের বিল্ড কয়েক সেকেন্ডে শেষ করে।'
        },
        explanation: {
          en: 'Without cargo-chef, modifying one line of source code invalidates Docker cache and recompiles all 100+ dependencies. cargo-chef locks dependency caching.',
          bn: 'এর মাধ্যমে প্রতিবার সব লাইব্রেরি নতুন করে কম্পাইল করার বিশাল সময় অপচয় রোধ হয়।'
        }
      },
      {
        id: 'quiz-reproducible-builds-cargo-lock-ci',
        kind: 'mcq',
        topic: 'reproducible-builds-cargo-lock-locked-flag',
        question: {
          en: 'Why is "cargo build --locked" mandated in automated production continuous integration (CI) workflows?',
          bn: 'অটোমেটেড প্রোডাকশন কন্টিনিউয়াস ইন্টিগ্রেশন (CI) পাইপলাইনে কেন "cargo build --locked" বাধ্যতামূলক করা হয়?'
        },
        options: [
          {
            en: 'It forces Cargo to adhere strictly to the cryptographic versions pinned in "Cargo.lock" and fails immediately if the lockfile would be updated, guaranteeing 100 percent reproducible builds',
            bn: 'এটি কার্গোকে "Cargo.lock"-এ থাকা ক্রিপ্টোগ্রাফিক ভার্সন কঠোরভাবে মানতে বাধ্য করে এবং লকফাইল পরিবর্তনের চেষ্টা হলে ব্যর্থ হয়, যা ১০০ ভাগ নিখুঁত বিল্ড নিশ্চিত করে'
          },
          {
            en: 'It encrypts all network packets using RSA-4096',
            bn: 'এটি RSA-4096 ব্যবহার করে সমস্ত নেটওয়ার্ক প্যাকেট এনক্রিপ্ট করে'
          },
          {
            en: 'It disables multi-threading across all server cores',
            bn: 'এটি সার্ভারের সমস্ত কোরে মাল্টি-থ্রেডিং বন্ধ করে দেয়'
          },
          {
            en: '--locked was deprecated in Rust 2015',
            bn: 'Rust ২০১৫ সংস্করণে --locked বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '--locked prevents Cargo from quietly resolving newer dependency versions during CI.',
          bn: 'সার্ভারে নিজে থেকে কোনো নতুন বা অনির্ধারিত লাইব্রেরি ইনস্টল হওয়া আটকে দেয়।'
        },
        explanation: {
          en: 'If a dependency releases a breaking patch, standard cargo build might fetch it and alter the lockfile. The --locked flag aborts the build, preserving reproducibility.',
          bn: 'ফলে ডেভেলপমেন্টে যা পরীক্ষা করা হয়েছে, সার্ভারে ঠিক সেটাই কম্পাইল হয়।'
        }
      },
      {
        id: 'quiz-prometheus-metrics-telemetry-endpoint',
        kind: 'mcq',
        topic: 'prometheus-metrics-telemetry-endpoint-monitoring',
        question: {
          en: 'What architectural responsibility does exposing a "/metrics" endpoint fulfill in a production Rust microservice?',
          bn: 'একটি প্রোডাকশন Rust মাইক্রোসার্ভিসে "/metrics" এন্ডপয়েন্ট উন্মুক্ত রাখা কোন স্থাপত্যিক দায়িত্ব পালন করে?'
        },
        options: [
          {
            en: 'It provides Prometheus scrapers with real-time counters and histograms for request rates, error ratios, latency quantiles (p95/p99), and memory usage',
            bn: 'এটি প্রমিথিউস স্ক্র্যাপারকে রিকোয়েস্টের সংখ্যা, এরর অনুপাত, লেটেন্সি কোয়ান্টাইল (p95/p99) এবং মেমোরি ব্যবহারের রিয়েল-টাইম মেট্রিক্স সরবরাহ করে'
          },
          {
            en: 'It broadcasts live video of server hardware to YouTube',
            bn: 'এটি ইউটিউবে সার্ভার হার্ডওয়্যারের সরাসরি ভিডিও সম্প্রচার করে'
          },
          {
            en: 'It converts all incoming traffic into binary files',
            bn: 'এটি আগত সমস্ত ট্রাফিককে বাইনারি ফাইলে রূপান্তর করে'
          },
          {
            en: 'Metrics endpoints are forbidden in enterprise cloud infrastructures',
            bn: 'এন্টারপ্রাইজ ক্লাউডে মেট্রিক্স এন্ডপয়েন্ট ব্যবহার নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The /metrics endpoint exports Prometheus telemetry (p95/p99, error rates).',
          bn: 'সার্ভারের স্বাস্থ্য ও গতি রিয়েল-টাইমে পর্যবেক্ষণের জন্য মেট্রিক্স পাঠানো হয়।'
        },
        explanation: {
          en: 'Exposing Prometheus metrics enables automated alerting, autoscaling policies, and Grafana dashboard visualization of production service health.',
          bn: 'এর মাধ্যমে সমস্যা দেখা দেওয়া মাত্র অ্যালার্ট পাওয়া এবং স্বয়ংক্রিয় সার্ভার স্কেলিং সম্ভব হয়।'
        }
      }
    ]
  }
};
