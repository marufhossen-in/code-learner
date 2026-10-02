import type { Lesson } from '../../../lib/types';

export const ReleaseAndTheRunLesson: Lesson = {
  slug: 'release-and-the-run',
  tech: 'dotnet',
  title: {
    en: 'Production Publishing, Multi-Stage Docker & Native AOT',
    bn: 'প্রোডাকশন পাবলিশিং, মাল্টি-স্টেজ ডকার এবং Native AOT'
  },
  summary: {
    en: 'Ship high-performance .NET cloud containers to production. Master dotnet publish optimization flags (Single-File, ReadyToRun, ILLink trimming), containerize applications with multi-stage non-root Docker builds and Chiseled Ubuntu, and eliminate cold starts using Native AOT compilation.',
    bn: 'প্রোডাকশন ক্লাউডে উচ্চগতির .NET কনটেইনার ডেপ্লয় করুন। dotnet publish এর অপটিমাইজেশন ফ্ল্যাগ (Single-File, ReadyToRun, ILLink trimming), নন-রুট মাল্টি-স্টেজ ডকার বিল্ড ও Chiseled উবুন্টু এবং Native AOT কম্পাইলেশন দিয়ে কোল্ড স্টার্ট দূরীকরণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'publishing-modes-and-native-aot-heading',
      text: {
        en: 'Publishing Topologies: Self-Contained, Trimming, and Native AOT',
        bn: 'পাবলিশিং টপোলজি: Self-Contained, Trimming এবং Native AOT'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying high-efficiency cloud workloads in the .NET (cross-platform managed runtime) ecosystem requires selecting the right compilation topology. Developers run "dotnet publish -c Release -r linux-x64" with flags tailored to target environments. Framework-Dependent deployments rely on a pre-installed host runtime, keeping deployment artifacts small. In contrast, Self-Contained deployments package the runtime directly with the application, guaranteeing consistent execution across diverse Linux distributions. Enabling ILLink (intermediate language trimmer) trimming removes unused framework methods to shrink binary sizes. For serverless microservices requiring instant execution, .NET supports Native AOT (ahead-of-time compilation), generating pure machine code that eliminates JIT (just-in-time) overhead and starts in under 15 milliseconds.',
        bn: 'আধুনিক .NET (ক্রস-প্ল্যাটফর্ম ম্যানেজড রানটাইম) ইকোসিস্টেমে উচ্চগতির ক্লাউড সার্ভিস ডেপ্লয় করতে সঠিক কম্পাইলেশন টপোলজি নির্বাচন অপরিহার্য। ডেভেলপাররা পরিবেশের ওপর ভিত্তি করে "dotnet publish -c Release -r linux-x64" কমান্ডের সাথে বিভিন্ন অপটিমাইজেশন ফ্ল্যাগ ব্যবহার করেন। Framework-Dependent ডেপ্লয়মেন্ট সার্ভারের পূর্ব-ইনস্টল করা রানটাইমের ওপর নির্ভর করে রিলিজ ফাইলের আকার ছোট রাখে। অপরদিকে Self-Contained ডেপ্লয়মেন্ট অ্যাপ্লিকেশনের সাথেই রানটাইমকে যুক্ত করে দেয়, যা যেকোনো লিনাক্স ডিস্ট্রিবিউশনে একই কার্যক্ষমতা নিশ্চিত করে। ILLink (ইন্টারমিডিয়েট ল্যাঙ্গুয়েজ ট্রিমার) অপ্রয়োজনীয় কোড ছেঁটে বাইনারির আকার সংকুচিত করে। আর সার্ভারলেস মাইক্রোসার্ভিসের জন্য .NET-এ রয়েছে Native AOT (অ্যাহেড-অব-টাইম কম্পাইলেশন), যা কোনো জেআইটি (JIT - জাস্ট-ইন-টাইম) ছাড়া সরাসরি মেশিন কোড তৈরি করে ১৫ মিলিসেকেন্ডের কম সময়ে অ্যাপ চালু করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-stage cloud production pipeline: From C# source to multi-stage Docker compilation, Chiseled container packaging, and Native AOT execution.',
        bn: 'চিত্র ১: ৪-ধাপের ক্লাউড প্রোডাকশন পাইপলাইন: C# সোর্স কোড থেকে মাল্টি-স্টেজ ডকার বিল্ড, Chiseled কনটেইনার প্যাকেজিং এবং Native AOT এক্সিকিউশন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">.NET CLOUD PRODUCTION CONTAINER PIPELINE</text>

  <!-- Step 1: SDK Build -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Build SDK Stage</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">mcr.microsoft/dotnet/sdk:8.0</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Compiles C# and NuGets</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Heavy 800MB Tooling</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Build Environment Only</text>
  </g>

  <!-- Step 2: Publish & Trim -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Publish &amp; Trimming</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">dotnet publish -c Release</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">/p:PublishAot=true</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Dead Code Stripped</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Direct Native Binary</text>
  </g>

  <!-- Step 3: Chiseled Container -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Chiseled Container</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">aspnet:8.0-chiseled</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">No Shell, No Package Mgr</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">UID 1654 Non-Root</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero-Vulnerability Base</text>
  </g>

  <!-- Step 4: Production Run -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Production Run</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Sub-15ms Startup</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">30MB Working Set</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">Instant Cloud Autoscaling</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Max Performance</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'docker-and-chiseled-containers-heading',
      text: {
        en: 'Multi-Stage Docker Builds and Chiseled Ubuntu Hardening',
        bn: 'মাল্টি-স্টেজ ডকার বিল্ড এবং Chiseled উবুন্টু নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Container security standards mandate separating compilation tools from runtime environments. Production Dockerfiles use multi-stage builds: Stage 1 uses the 800MB .NET SDK image to restore dependencies and compile binaries. Stage 2 copies only the published artifacts into an ultra-slim runtime image. Microsoft provides "Chiseled" Ubuntu base images (such as aspnet:8.0-chiseled). Chiseled images strip out the Bash shell, the package manager, and all extraneous Linux utilities, shrinking container sizes from 220MB down to 35MB. Furthermore, the container executes under a built-in non-root user (UID 1654), eliminating container breakout vulnerabilities and adhering to zero-trust cloud security standards.',
        bn: 'কনটেইনারের নিরাপত্তা নিশ্চিত করতে কম্পাইল করার সফটওয়্যারকে প্রোডাকশন রানটাইম থেকে আলাদা রাখা বাধ্যতামূলক। আধুনিক ডকারফাইলে মাল্টি-স্টেজ বিল্ড পদ্ধতি ব্যবহৃত হয়: স্টেজ ১ এ ৮০০ মেগাবাইটের .NET SDK ইমেজ দিয়ে ডিপেনডেন্সি ও বাইনারি কম্পাইল করা হয়। স্টেজ ২ এ কেবলমাত্র প্রকাশিত বাইনারি ফাইলগুলোকে একটি অত্যন্ত হালকা রানটাইম ইমেজে কপি করা হয়। মাইক্রোসফট এজন্য "Chiseled" উবুন্টু বেস ইমেজ (যেমন aspnet:8.0-chiseled) প্রদান করেছে। Chiseled ইমেজ থেকে বাশ শেল, প্যাকেজ ম্যানেজার ও সমস্ত অপ্রয়োজনীয় টুল সরিয়ে ফেলা হয়েছে, যা কনটেইনারের আকার ২২০ মেগাবাইট থেকে ৩৫ মেগাবাইটে নামিয়ে আনে। উপরন্তু কনটেইনারটি বিল্ট-ইন নন-রুট ব্যবহারকারী (UID ১৬৫৪) দ্বারা পরিচালিত হওয়ায় হ্যাকিংয়ের ঝুঁকি শূন্যের কোঠায় নেমে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of .NET deployment topologies: Evaluating artifact size, memory footprint, and cold start latency across Framework-Dependent, Self-Contained, and Native AOT modes.',
        bn: '.NET ডেপ্লয়মেন্ট টপোলজি, বাইনারি আকার, র্যাম ব্যবহার এবং কোল্ড স্টার্ট সময়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of .NET Production Publishing Topologies

export interface PublishingModeStats {
  modeName: string;
  binarySizeMb: number;
  memoryFootprintMb: number;
  coldStartLatencyMs: number;
  requiresInstalledDotnet: boolean;
}

export class ProductionTopologyAnalyzer {
  public evaluateTopology(mode: 'FDD' | 'SCD_Trimmed' | 'NativeAOT'): PublishingModeStats {
    switch (mode) {
      case 'FDD':
        return {
          modeName: 'Framework-Dependent Deployment',
          binarySizeMb: 12,
          memoryFootprintMb: 85,
          coldStartLatencyMs: 250,
          requiresInstalledDotnet: true
        };
      case 'SCD_Trimmed':
        return {
          modeName: 'Self-Contained (Trimmed & SingleFile)',
          binarySizeMb: 45,
          memoryFootprintMb: 65,
          coldStartLatencyMs: 140,
          requiresInstalledDotnet: false
        };
      case 'NativeAOT':
        return {
          modeName: 'Native Ahead-Of-Time (AOT)',
          binarySizeMb: 28,
          memoryFootprintMb: 30,
          coldStartLatencyMs: 15,
          requiresInstalledDotnet: false
        };
    }
  }
}

// Execution demonstration
const analyzer = new ProductionTopologyAnalyzer();

console.log('--- .NET Production Topology Comparison ---');
const standard = analyzer.evaluateTopology('FDD');
console.log(\`[Mode: \${standard.modeName}] Cold Start: \${standard.coldStartLatencyMs}ms, Size: \${standard.binarySizeMb}MB\`);

const aot = analyzer.evaluateTopology('NativeAOT');
console.log(\`[Mode: \${aot.modeName}] Cold Start: \${aot.coldStartLatencyMs}ms, Size: \${aot.binarySizeMb}MB\`);
console.log('Native AOT Startup Speedup Factor:', Math.round(standard.coldStartLatencyMs / aot.coldStartLatencyMs), 'times faster'); // 17`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Self-Contained Deployment',
          def: {
            en: 'Deployment mode packaging the .NET runtime and BCL assemblies together with the application for isolated execution.',
            bn: 'ডেপ্লয়মেন্ট পদ্ধতি যা রানটাইম ও লাইব্রেরিগুলোকে সরাসরি অ্যাপ্লিকেশনের সাথে যুক্ত করে সম্পূর্ণ স্বাধীনভাবে চালায়।'
          }
        },
        {
          term: 'ILLink Trimming',
          def: {
            en: 'Dead code elimination tool that analyzes assembly call graphs and strips unreferenced types and IL methods.',
            bn: 'টুল যা কোড পর্যালোচনা করে অব্যবহৃত মেথড ও ক্লাসগুলোকে ছেঁটে বাইনারির আকার ছোট করে।'
          }
        },
        {
          term: 'Native AOT',
          def: {
            en: 'Ahead-Of-Time compilation mode converting C# directly into native machine code, bypassing JIT and reducing cold start to milliseconds.',
            bn: 'সরাসরি মেশিন কোডে কম্পাইল করার আধুনিক ব্যবস্থা যা জেআইটি ছাড়া কয়েক মিলিসেকেন্ডে অ্যাপ চালু করে।'
          }
        },
        {
          term: 'Chiseled Containers',
          def: {
            en: 'Ultra-minimal distroless Ubuntu container images with zero package managers or shells, running as non-root users.',
            bn: 'মাইক্রোসফট ও ক্যানোনিকালের অতি-সংক্ষিপ্ত ডকার ইমেজ যাতে কোনো শেল বা প্যাকেজ ম্যানেজার থাকে না এবং যা নন-রুট ব্যবহারকারীতে চলে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'native-aot-benefits-ex1',
      kind: 'mcq',
      topic: 'native-aot-sub-millisecond-cold-start',
      question: {
        en: 'What is the primary operational advantage of compiling an ASP.NET Core microservice with Native AOT ("/p:PublishAot=true")?',
        bn: 'Native AOT ("/p:PublishAot=true") দিয়ে একটি ASP.NET Core মাইক্রোসার্ভিস কম্পাইল করার মূল অপারেশনাল সুবিধা কী?'
      },
      options: [
        {
          en: 'It compiles directly to native processor machine instructions, bypassing the JIT compiler, achieving cold start times under 15 milliseconds and cutting memory usage down to 30 megabytes',
          bn: 'এটি সরাসরি প্রসেসরের মেশিন কোডে রূপান্তরিত হয়, যা কোনো জেআইটি (JIT) ছাড়া ১৫ মিলিসেকেন্ডের কম সময়ে কোল্ড স্টার্ট নিশ্চিত করে এবং মেমোরি খরচ ৩০ মেগাবাইটে নামিয়ে আনে'
        },
        {
          en: 'It encrypts all database tables automatically',
          bn: 'এটি ডেটাবেসের সমস্ত টেবিল স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করে'
        },
        {
          en: 'Native AOT applications can only run when connected to the internet',
          bn: 'Native AOT অ্যাপ্লিকেশন কেবল ইন্টারনেটের সাথে যুক্ত থাকলেই চলতে পারে'
        },
        {
          en: 'It eliminates the need to write unit tests',
          bn: 'এটি ইউনিট টেস্ট লেখার প্রয়োজনীয়তা দূর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Native AOT eliminates JIT compilation latency and cuts working set memory dramatically.',
        bn: 'কোনো রানটাইম জেআইটি না থাকায় অ্যাপ্লিকেশন পলকের মধ্যে চালু হয় এবং খুব সামান্য র্যাম ব্যবহার করে।'
      },
      explanation: {
        en: 'Native AOT produces self-contained machine code. Because no JIT compiler or IL bytecode interpreter is required at runtime, startup is immediate and memory overhead is minuscule.',
        bn: 'সার্ভারলেস ফাংশন ও ক্লাউড অটো-স্কেলিংয়ের জন্য Native AOT অসাধারণ গতি ও সাশ্রয় নিশ্চিত করে।'
      }
    },
    {
      id: 'chiseled-containers-security-advantages-ex2',
      kind: 'mcq',
      topic: 'chiseled-containers-zero-cve-non-root',
      question: {
        en: 'Why do cloud security teams advocate using Microsoft\'s "Chiseled" Ubuntu container images for ASP.NET Core production workloads?',
        bn: 'ক্লাউড সিকিউরিটি টিমগুলো ASP.NET Core প্রোডাকশনের জন্য মাইক্রোসফটের "Chiseled" উবুন্টু কনটেইনার ব্যবহারের পরামর্শ কেন দেয়?'
      },
      options: [
        {
          en: 'They strip out the package manager (apt), bash shells, and unnecessary Linux binaries, shrinking image sizes to 35 megabytes and running as non-root (UID 1654) to eliminate Common Vulnerabilities and Exposures (CVEs)',
          bn: 'তারা প্যাকেজ ম্যানেজার (apt), বাশ শেল ও অপ্রয়োজনীয় লিনাক্স ফাইল মুছে ফেলে আকার ৩৫ মেগাবাইটে কমিয়ে আনে এবং নন-রুট (UID ১৬৫৪) ব্যবহারকারীতে চলে সমস্ত নিরাপত্তা ঝুঁকি (CVEs) দূর করে'
        },
        {
          en: 'Chiseled containers double the bandwidth speed of local WiFi routers',
          bn: 'Chiseled কনটেইনার ওয়াইফাই রাউটারের ব্যান্ডউইথ দ্বিগুণ করে দেয়'
        },
        {
          en: 'They can only be deployed on physical mainframe computers',
          bn: 'এগুলো কেবল ফিজিক্যাল মেইনফ্রেম কম্পিউটারে ডেপ্লয় করা যায়'
        },
        {
          en: 'Chiseled images are exclusively compatible with Node.js',
          bn: 'Chiseled ইমেজ কেবলমাত্র Node.js এর সাথে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Chiseled images remove shells and package managers, preventing attacker execution.',
        bn: 'কোনো শেল বা প্যাকেজ ম্যানেজার না থাকায় হ্যাকারদের পক্ষে কনটেইনারে আক্রমণ চালানো অসম্ভব হয়ে পড়ে।'
      },
      explanation: {
        en: 'Without a shell or package manager, attackers cannot download exploits or execute arbitrary scripts, reducing the vulnerability surface to virtually zero.',
        bn: 'অপ্রয়োজনীয় সব উপাদান বাদ দেওয়ায় ইমেজ যেমন দ্রুত ডাউনলোড হয়, তেমনি সর্বোচ্চ নিরাপত্তাও নিশ্চিত থাকে।'
      }
    },
    {
      id: 'illink-trimming-reflection-warnings-ex3',
      kind: 'mcq',
      topic: 'illink-trimming-reflection-dangers',
      question: {
        en: 'What hazard can occur when enabling ILLink assembly trimming ("/p:PublishTrimmed=true") if code relies on dynamic reflection without source generation?',
        bn: 'সোর্স জেনারেটর ছাড়া কোডে ডায়নামিক রিফ্লেকশন থাকলে ILLink ট্রিমার ("/p:PublishTrimmed=true") সক্রিয় করলে কোন বিপর্যয় ঘটতে পারে?'
      },
      options: [
        {
          en: 'The trimmer cannot statically detect dynamically reflected methods and properties during build time, stripping them from the published binary and causing runtime MissingMethodException crashes',
          bn: 'ট্রিমার বিল্ড করার সময় রিফ্লেকশনের মাধ্যমে ডাকা মেথড বা প্রপার্টিগুলো বুঝতে পারে না, ফলে সেগুলোকে বাদ দিয়ে দেয় এবং রানটাইমে MissingMethodException দিয়ে অ্যাপ ক্র্যাশ করে'
        },
        {
          en: 'The operating system monitor displays inverted colors',
          bn: 'কম্পিউটারের ডিসপ্লে উল্টো রঙ প্রদর্শন করতে শুরু করে'
        },
        {
          en: 'The computer keyboard stops functioning',
          bn: 'কম্পিউটারের কিবোর্ড কাজ করা বন্ধ করে দেয়'
        },
        {
          en: 'Trimming only operates on text and markdown files',
          bn: 'ট্রিমিং কেবল টেক্সট এবং মার্কডাউন ফাইলে কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trimmers strip code they cannot prove is referenced; dynamic reflection requires Trimming Annotations.',
        bn: 'যে কোডের স্পষ্ট রেফারেন্স ট্রিমার খুঁজে পায় না তা বাদ পড়ে যায়; তাই রিফ্লেকশনে বিশেষ সতর্কতা বা সোর্স জেনারেটর দরকার।'
      },
      explanation: {
        en: 'ILLink relies on static call-graph analysis. Dynamic reflection must be accompanied by trimming attributes (such as [DynamicallyAccessedMembers]) or Roslyn source generators.',
        bn: 'আধুনিক C# সোর্স জেনারেটর ব্যবহার করলে কম্পাইলের সময়ই স্পষ্ট কোড তৈরি হয় এবং ট্রিমারে কোনো বাগ হয় না।'
      }
    },
    {
      id: 'multi-stage-docker-sdk-separation-ex4',
      kind: 'mcq',
      topic: 'multistage-docker-build-separation',
      question: {
        en: 'Why is separating the .NET SDK image from the final ASP.NET runtime image using multi-stage Docker builds an industry best practice?',
        bn: 'মাল্টি-স্টেজ ডকার বিল্ড ব্যবহার করে .NET SDK ইমেজকে চূড়ান্ত ASP.NET রানটাইম ইমেজ থেকে আলাদা রাখা কেন সফটওয়্যার শিল্পের সর্বোত্তম প্র্যাকটিস?'
      },
      options: [
        {
          en: 'It prevents heavy compilers, build dependencies, and source files from bloating the production container, drastically reducing deployment image size and closing security attack vectors',
          bn: 'এটি ভারী কম্পাইলার, বিল্ড টুলস এবং সোর্স কোডকে প্রোডাকশন কনটেইনারে যাওয়া থেকে বিরত রাখে, যা ইমেজের আকার কমিয়ে দেয় এবং নিরাপত্তা ফাঁকফোকর বন্ধ করে'
        },
        {
          en: 'Docker only allows 1 stage per container configuration',
          bn: 'ডকার প্রতি কনটেইনারে কেবল ১ টি স্টেজ সমর্থন করে'
        },
        {
          en: 'Multi-stage builds format the host server hard drive',
          bn: 'মাল্টি-স্টেজ বিল্ড সার্ভারের মূল হার্ড ড্রাইভ ফরম্যাট করে দেয়'
        },
        {
          en: 'Separation is only required for Python web applications',
          bn: 'পৃথকীকরণ কেবল পাইথন ওয়েব অ্যাপ্লিকেশনে বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multi-stage builds leave compiler bloat behind, shipping only the compiled binaries.',
        bn: 'বিল্ড শেষ হওয়ার পর ভারী কম্পাইলার ফেলে দিয়ে শুধু প্রস্তুত বাইনারি নিয়ে রানটাইম তৈরি করা হয়।'
      },
      explanation: {
        en: 'The SDK image is typically 800MB+ with compilers and debugging tools. Multi-stage builds ship only the lean compiled application and runtime, saving bandwidth and hardening security.',
        bn: 'প্রোডাকশনে সোর্স কোড বা কম্পাইলার না পাঠিয়ে শুধু এক্সিকিউটেবল বাইনারি পাঠানোই সুরক্ষিত নিয়ম।'
      }
    }
  ],
  quiz: {
    id: 'quiz-release-and-the-run',
    title: {
      en: 'Production Release, Docker & Native AOT Quiz',
      bn: 'প্রোডাকশন রিলিজ, ডকার এবং Native AOT কুইজ'
    },
    questions: [
      {
        id: 'quiz-readytorun-r2r-compilation',
        kind: 'mcq',
        topic: 'readytorun-r2r-ahead-of-time-compilation',
        question: {
          en: 'What problem does ReadyToRun (R2R) compilation ("/p:PublishReadyToRun=true") solve in ASP.NET Core applications?',
          bn: 'ASP.NET Core অ্যাপ্লিকেশনে ReadyToRun (R2R) কম্পাইলেশন ("/p:PublishReadyToRun=true") কোন সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It pre-compiles IL bytecode into native machine instructions at publish time, reducing the startup latency caused by the JIT compiler during application cold start while preserving full CLR flexibility',
            bn: 'এটি পাবলিশ করার সময়ই IL বাইটকোডকে সরাসরি প্রসেসরের মেশিন কোডে প্রাক-কম্পাইল করে রাখে, যার ফলে অ্যাপ চালুর সময় জেআইটি (JIT) কম্পাইলারের জন্য কোনো দেরি হয় না কিন্তু পুরো CLR-এর সুবিধাও অক্ষুণ্ণ থাকে'
          },
          {
            en: 'It deletes all compiled DLL files from disk',
            bn: 'এটি ডিস্ক থেকে সমস্ত কম্পাইল্ড ডিএলএল মুছে ফেলে'
          },
          {
            en: 'R2R forces the application to run exclusively on 16-bit processors',
            bn: 'R2R অ্যাপ্লিকেশনটিকে কেবল ১৬-বিট প্রসেসরে চলতে বাধ্য করে'
          },
          {
            en: 'ReadyToRun was deprecated in .NET Core 3.1',
            bn: '.NET Core ৩.১ সংস্করণে ReadyToRun বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ReadyToRun pre-compiles native machine code to speed up startup while keeping full JIT fallback.',
          bn: 'ReadyToRun অ্যাপ চালুর মুহূর্তের কম্পাইলেশন সময় বাঁচিয়ে দ্রুত সার্ভার সচল করে।'
        },
        explanation: {
          en: 'R2R embeds native code alongside IL bytecode. When the CLR launches, it executes the pre-compiled native code immediately without waiting for JIT compilation.',
          bn: 'প্রথম রিকোয়েস্টে যেন কোনো ল্যাগ বা বিরতি না থাকে, সেজন্য কোড আগে থেকেই রেডি থাকে।'
        }
      },
      {
        id: 'quiz-singlefile-packaging-virtual-bundle',
        kind: 'mcq',
        topic: 'single-file-publishing-virtual-bundle',
        question: {
          en: 'How does modern .NET Single-File publishing ("/p:PublishSingleFile=true") package an application containing dozens of dependent NuGet DLLs?',
          bn: 'আধুনিক .NET Single-File পাবলিশিং ("/p:PublishSingleFile=true") কীভাবে ডজন ডজন নির্ভরশীল নুগেট DLL সম্বলিত অ্যাপ্লিকেশনকে প্যাকেজ করে?'
        },
        options: [
          {
            en: 'It packs managed DLLs and native libraries into a single binary executable, extracting or loading assemblies directly from a virtual bundle in memory without polluting the disk filesystem',
            bn: 'এটি সমস্ত ম্যানেজড DLL এবং নেটিভ লাইব্রেরিকে একটিমাত্র বাইনারি ফাইলে একীভূত করে এবং ডিস্কে ফাইল না ছড়িয়ে মেমোরির ভার্চুয়াল বান্ডেল থেকে সরাসরি লোড করে চালায়'
          },
          {
            en: 'It converts all DLL files into a ZIP archive requiring manual user extraction',
            bn: 'এটি সব ফাইলকে জিপ ফাইলে রূপান্তর করে যা ব্যবহারকারীকে নিজে আনজিপ করতে হয়'
          },
          {
            en: 'It sends the code to an FTP server on the internet',
            bn: 'এটি কোড ইন্টারনেটের একটি এফটিপি সার্ভারে পাঠিয়ে দেয়'
          },
          {
            en: 'Single-File publishing is only available for console applications on macOS',
            bn: 'Single-File পাবলিশিং কেবল ম্যাক ওএসের কনসোল অ্যাপে সীমাবদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single-file embeds assemblies into one unified executable binary.',
          bn: 'Single-file সমস্ত নির্ভরতাকে একটিমাত্র পোর্টেবল এক্সিকিউটেবল ফাইলে রূপান্তর করে।'
        },
        explanation: {
          en: 'Since .NET 5+, single-file binaries load embedded assemblies directly from memory without extracting them to temporary directories, enhancing security and speed.',
          bn: 'সার্ভারে শুধু একটি ফাইল কপি করলেই পুরো অ্যাপ্লিকেশন কোনো নির্ভরতা ছাড়াই সুন্দরভাবে চলতে পারে।'
        }
      },
      {
        id: 'quiz-graceful-shutdown-kubernetes-sigterm',
        kind: 'mcq',
        topic: 'kubernetes-sigterm-graceful-shutdown',
        question: {
          en: 'How should an ASP.NET Core container respond when receiving a SIGTERM signal during a rolling deployment in a Kubernetes cluster?',
          bn: 'কুবারনেটিস ক্লাস্টারে রোলিং ডেপ্লয়মেন্ট চলাকালে একটি ASP.NET Core কনটেইনার SIGTERM সিগন্যাল পেলে কীভাবে প্রতিক্রিয়া জানানো উচিত?'
        },
        options: [
          {
            en: 'Kestrel stops accepting new TCP connections, waits for inflight HTTP requests to complete within the shutdown timeout window, flushes telemetry and logs, and cleanly closes background services',
            bn: 'Kestrel নতুন টিসিপি সংযোগ গ্রহণ বন্ধ করে দেয়, চলমান এইচটিটিপি রিকোয়েস্টগুলো সম্পন্ন করার জন্য নির্ধারিত সময় অপেক্ষা করে, সমস্ত টেলিমেট্রি লগ সেভ করে এবং ব্যাকগ্রাউন্ড সার্ভিসগুলো নিরাপদভাবে বন্ধ করে'
          },
          {
            en: 'The server reboots immediately and drops all active database connections',
            bn: 'সার্ভার অবিলম্বে রিবুট হয় এবং সমস্ত সক্রিয় ডেটাবেস সংযোগ বিচ্ছিন্ন করে দেয়'
          },
          {
            en: 'It emits an audible beep through the computer speaker',
            bn: 'এটি কম্পিউটারের স্পিকারে একটি বিপ শব্দ তৈরি করে'
          },
          {
            en: 'ASP.NET Core applications do not listen to operating system signals',
            bn: 'ASP.NET Core অ্যাপ্লিকেশন অপারেটিং সিস্টেমের কোনো সিগন্যাল গ্রহণ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'SIGTERM triggers graceful shutdown to finish inflight requests cleanly.',
          bn: 'SIGTERM পাওয়ার পর মাঝপথে চলা রিকোয়েস্টগুলোকে নিরাপদে সম্পন্ন করতে সময় দেওয়া হয়।'
        },
        explanation: {
          en: 'The Generic Host listens for SIGTERM. It coordinates with IHostApplicationLifetime to finish active transactions and flush logs before terminating the process.',
          bn: 'ব্যবহারকারীর লেনদেন মাঝপথে বাতিল না করে নিরাপদে সম্পন্ন করা নিশ্চিত করতে এটি অপরিহার্য।'
        }
      },
      {
        id: 'quiz-forwarded-headers-reverse-proxy',
        kind: 'mcq',
        topic: 'forwarded-headers-nginx-ingress-ssl',
        question: {
          en: 'Why is configuring "app.UseForwardedHeaders()" essential when deploying an ASP.NET Core API behind an NGINX reverse proxy or Kubernetes Ingress controller?',
          bn: 'একটি NGINX রিভার্স প্রক্সি বা কুবারনেটিস ইনগ্রেস কন্ট্রোলারের পেছনে ASP.NET Core এপিআই ডেপ্লয় করার সময় "app.UseForwardedHeaders()" কনফিগার করা কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'The reverse proxy terminates SSL and forwards requests over internal HTTP; UseForwardedHeaders reads X-Forwarded-For and X-Forwarded-Proto to reconstruct the original client IP and HTTPS scheme',
            bn: 'রিভার্স প্রক্সি SSL শেষ করে ভেতরের সার্ভারে সাধারণ HTTP পাঠায়; UseForwardedHeaders X-Forwarded-For এবং X-Forwarded-Proto পড়ে আসল ক্লায়েন্ট আইপি ও HTTPS স্কিম পুনরুদ্ধার করে'
          },
          {
            en: 'It accelerates the physical Ethernet network card',
            bn: 'এটি ফিজিক্যাল ইথারনেট নেটওয়ার্ক কার্ডের গতি বাড়ায়'
          },
          {
            en: 'It converts reverse proxy logs into PDF documents',
            bn: 'এটি রিভার্স প্রক্সির লগকে পিডিএফ নথিতে রূপান্তর করে'
          },
          {
            en: 'Forwarded headers are only needed on Windows IIS servers',
            bn: 'ফরোয়ার্ডেড হেডার কেবল উইন্ডোজ আইআইএস সার্ভারে প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'UseForwardedHeaders restores client IP and HTTPS scheme from proxy headers.',
          bn: 'প্রক্সির পেছনের সার্ভার যেন আসল ব্যবহারকারীর আইপি ও HTTPS সিকিউরিটি স্কিম বুঝতে পারে, সেজন্য এটি লাগে।'
        },
        explanation: {
          en: 'Without ForwardedHeadersMiddleware, redirect URIs, OAuth callbacks, and security rate limiters will incorrectly see the internal proxy IP and plain HTTP scheme.',
          bn: 'OAuth লগইন এবং সিকিউরিটি অডিটে আসল ক্লায়েন্ট আইপি শনাক্ত করতে এটি কনফিগার করা বাধ্যতামূলক।'
        }
      }
    ]
  }
};
