import type { Lesson } from '../../../lib/types';

export const TheProductionServeLesson: Lesson = {
  slug: 'the-production-serve',
  tech: 'spring',
  title: {
    en: 'Production Readiness, GraalVM Native & Docker',
    bn: 'প্রোডাকশন প্রস্তুতি, GraalVM নেটিভ এবং ডকার'
  },
  summary: {
    en: 'Deploy high-performance Spring Boot applications to production: leverage Ahead-of-Time (AOT) compilation and GraalVM native images for instant startup under 50ms and minimal memory footprints, build multi-stage Docker container images with layered JARs, and configure container-aware JVM memory flags.',
    bn: 'প্রোডাকশনে উচ্চগতির স্প্রিং বুট অ্যাপ্লিকেশন ডিপ্লয় করুন: Ahead-of-Time (AOT) কম্পাইলেশন এবং GraalVM নেটিভ ইমেজ দিয়ে ৫০ মিলিসেকেন্ডের নিচে তাৎক্ষণিক স্টার্টআপ ও সামান্য মেমোরি খরচ, লেয়ার্ড জার সহ মাল্টি-স্টেজ ডকার কনটেইনার এবং কনটেইনার-সচেতন JVM মেমোরি ফ্ল্যাগ কনফিগারেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'aot-compilation-and-graalvm-native-heading',
      text: {
        en: 'Ahead-of-Time (AOT) Compilation and GraalVM Native Images',
        bn: 'অ্যাহেড-অব-টাইম (AOT) কম্পাইলেশন এবং GraalVM নেটিভ ইমেজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional JVM (Java Virtual Machine) microservices rely on dynamic Just-In-Time (JIT) compilation, scanning classpaths, evaluating reflection, and generating dynamic proxies during startup. While JIT provides peak throughput after warm-up, it results in slow startup times (10 to 30 seconds) and substantial memory footprints (300 to 500 MB). Spring Boot 3 addresses this with native Ahead-of-Time (AOT) processing and GraalVM Native Image compilation. Under the "closed-world assumption", the Spring AOT engine evaluates all configuration classes and bean wiring at build time. GraalVM compiles the application directly into a standalone machine executable binary. The result: sub-second or sub-50ms cold starts and memory footprints as low as 35 MB, making Spring Boot ideal for Kubernetes horizontal auto-scaling and serverless environments.',
        bn: 'সনাতন JVM (Java Virtual Machine) মাইক্রোসার্ভিস ডায়নামিক Just-In-Time (JIT) কম্পাইলেশনের ওপর নির্ভর করে, যা বুট হওয়ার সময় ক্লাসপাথ স্ক্যান করে, জাভা রিফ্লেকশন বিশ্লেষণ করে এবং রানটাইম প্রক্সি তৈরি করে। দীর্ঘক্ষণ চলার পর JIT চমৎকার গতি দিলেও শুরুতে চালু হতে ১০ থেকে ৩০ সেকেন্ড সময় নেয় এবং ৩০০ থেকে ৫০০ মেগাবাইট মেমোরি খরচ করে। স্প্রিং বুট ৩ এই সমস্যার সমাধানে Ahead-of-Time (AOT) প্রসেসিং এবং GraalVM Native Image কম্পাইলেশন প্রবর্তন করেছে। "closed-world assumption" এর আওতায় স্প্রিং AOT ইঞ্জিন বিল্ড করার সময়ই সমস্ত বিন ও কনফিগারেশন বিশ্লেষণ করে নেয়। GraalVM পুরো অ্যাপকে অপারেটিং সিস্টেমের জন্য একটি একক স্বাধীন বাইনারি ফাইলে রূপান্তর করে। এর ফলে অ্যাপ্লিকেশন ৫০ মিলিসেকেন্ডের নিচে চালু হয় এবং মাত্র ৩৫ মেগাবাইট মেমোরিতে রান করে, যা কুবারনেটিস অটো-স্কেলিং এবং সার্ভারলেসের জন্য অত্যন্ত কার্যকর।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle comparison: Traditional JVM bytecode interpretation vs GraalVM Ahead-of-Time compilation to native machine binary.',
        bn: 'চিত্র ১: আর্কিটেকচারাল তুলনামূলক পাইপলাইন: প্রচলিত JVM বাইটকোড রানটাইম বনাম GraalVM এর AOT কম্পাইলেশন দিয়ে তৈরি সরাসরি নেটিভ বাইনারি।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING BOOT 3: JVM JIT VS GRAALVM AOT NATIVE PIPELINE</text>

  <!-- Step 1: Java Source Code -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Build Time AOT</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Spring Boot 3 AOT</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Static Bean Analysis</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Closed World Eval</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Ahead-Of-Time Engine</text>
  </g>

  <!-- Step 2: GraalVM Substrate VM -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. GraalVM Compiler</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Substrate VM Native</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Dead Code Stripping</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Static Linking</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Native Machine Code</text>
  </g>

  <!-- Step 3: Standalone Executable -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Native Executable</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Zero JVM Required</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Single Linux ELF</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">35 MB RAM Baseline</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Ultra Lean Footprint</text>
  </g>

  <!-- Step 4: Instant Container Scale -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Instant Startup</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">&lt; 50ms Startup</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Zero JIT Warmup</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">K8s Pod Ready</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Instant Elastic Scale</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'docker-layered-jars-and-jvm-tuning-heading',
      text: {
        en: 'Multi-Stage Docker Builds, Layered JARs, and Container JVM Tuning',
        bn: 'মাল্টি-স্টেজ ডকার বিল্ড, লেয়ার্ড জার এবং কনটেইনার JVM টিউনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For standard JVM container deployments, dumping an entire monolithic "fat JAR" into a single Docker layer causes huge rebuild overhead because every code change forces Docker to upload all third-party dependencies again. Spring Boot resolves this with "Layered JARs". Running "java -Djarmode=layertools -jar app.jar extract" splits the JAR into 4 distinct physical directories: dependencies, spring-boot-loader, snapshot-dependencies, and application code. In the Dockerfile, unchanging dependencies are copied first, allowing Docker caching to reuse layers and reducing image build and push times to seconds. In production container runtimes, configuring "-XX:+UseContainerSupport" and "-XX:MaxRAMPercentage=75.0" prevents Kubernetes OOMKilled crashes by aligning JVM heap limits with container cgroup memory constraints.',
        bn: 'সাধারণ JVM কনটেইনার তৈরির সময় পুরো একটি বিশাল "fat JAR" সরাসরি ডকার ইমেজে বসালে বিল্ড প্রক্রিয়া অযথা ধীরগতির হয়ে যায়, কারণ সামান্য কোড বদলালেও ডকারকে পুরো লাইব্রেরি নতুন করে আপলোড করতে হয়। স্প্রিং বুট এর জন্য "Layered JARs" প্রযুক্তি উদ্ভাবন করেছে। "java -Djarmode=layertools -jar app.jar extract" কমান্ড চালালে জার ফাইলটি ৪ টি আলাদা ফোল্ডারে ভাগ হয়ে যায়: dependencies, spring-boot-loader, snapshot-dependencies এবং application কোড। ডকারফাইলে অপরিবর্তনীয় লাইব্রেরিগুলো আগে কপি করলে ডকার ক্যাশ সেগুলো পুনরায় ব্যবহার করে, ফলে ইমেজ তৈরির সময় কয়েক সেকেন্ডে নেমে আসে। তাছাড়া প্রোডাকশনে "-XX:+UseContainerSupport" এবং "-XX:MaxRAMPercentage=75.0" ফ্ল্যাগ ব্যবহার করলে কুবারনেটিসের cgroup মেমোরির সাথে JVM সামঞ্জস্য রেখে চলে এবং মেমোরির অভাবে অপ্রত্যাশিত ক্র্যাশ হওয়া প্রতিরোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation comparing JVM JIT vs GraalVM Native Image cold start latency, memory consumption, and container heap allocation calculations.',
        bn: 'JVM JIT বনাম GraalVM নেটিভ ইমেজের স্টার্টআপ গতি, মেমোরি খরচ এবং কনটেইনার মেমোরি বরাদ্দের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of JVM JIT vs GraalVM Native Deployment Profiles

export interface RuntimeMetrics {
  mode: 'JVM_JIT' | 'GRAALVM_NATIVE';
  startupTimeMs: number;
  memoryUsageMb: number;
  binarySizeMb: number;
}

export class ProductionRuntimeBenchmark {
  public static compareRuntimes(): RuntimeMetrics[] {
    return [
      {
        mode: 'JVM_JIT',
        startupTimeMs: 4200,
        memoryUsageMb: 380,
        binarySizeMb: 65
      },
      {
        mode: 'GRAALVM_NATIVE',
        startupTimeMs: 48,
        memoryUsageMb: 38,
        binarySizeMb: 85
      }
    ];
  }

  // Simulating -XX:MaxRAMPercentage=75.0 inside a 1000 MB container cgroup
  public static calculateContainerHeap(containerLimitMb: number, maxRamPercentage: number): { heapLimitMb: number; nativeReservedMb: number } {
    const heapLimitMb = (containerLimitMb * maxRamPercentage) / 100;
    const nativeReservedMb = containerLimitMb - heapLimitMb;
    return { heapLimitMb, nativeReservedMb };
  }
}

// Execution demonstration
const benchmarks = ProductionRuntimeBenchmark.compareRuntimes();
const jvm = benchmarks[0];
const nativeImg = benchmarks[1];

console.log('JVM JIT Cold Startup (ms):', jvm.startupTimeMs); // 4200
console.log('GraalVM Native Cold Startup (ms):', nativeImg.startupTimeMs); // 48
console.log('GraalVM Memory Usage (MB):', nativeImg.memoryUsageMb); // 38

// Calculating container memory allocation for 1000 MB pod with 75% heap limit
const memCalc = ProductionRuntimeBenchmark.calculateContainerHeap(1000, 75);
console.log('Allocated JVM Heap (MB):', memCalc.heapLimitMb); // 750
console.log('Reserved Non-Heap OS Memory (MB):', memCalc.nativeReservedMb); // 250`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'GraalVM Native Image',
          def: {
            en: 'Ahead-of-Time compiler technology that compiles Spring Boot applications directly into standalone OS native executables.',
            bn: 'অ্যাহেড-অব-টাইম কম্পাইলার যা স্প্রিং বুট অ্যাপকে কোনো JVM ছাড়াই সরাসরি অপারেটিং সিস্টেমের নেটিভ এক্সিকিউটেবলে পরিণত করে।'
          }
        },
        {
          term: 'AOT (Ahead-of-Time)',
          def: {
            en: 'Build-time optimization engine that evaluates beans, properties, and reflection ahead of time to enable instant startup.',
            bn: 'বিল্ড-টাইম অপটিমাইজেশন যা চালুর আগেই সমস্ত বিন ও রিফ্লেকশন বিশ্লেষণ করে তাৎক্ষণিক স্টার্টআপ নিশ্চিত করে।'
          }
        },
        {
          term: 'Layered JARs',
          def: {
            en: 'Spring Boot packaging technique separating dependencies from application code to maximize Docker cache hit rates.',
            bn: 'স্প্রিং বুট প্যাকেজিং প্রযুক্তি যা লাইব্রেরি ও অ্যাপ্লিকেশন কোড আলাদা করে ডকার ক্যাশের সুবিধা বহুগুণ বাড়িয়ে দেয়।'
          }
        },
        {
          term: '-XX:MaxRAMPercentage',
          def: {
            en: 'JVM configuration flag dynamically computing maximum heap size as a percentage of the container cgroup memory limit.',
            bn: 'JVM ফ্ল্যাগ যা কনটেইনারের মোট মেমোরির নির্দিষ্ট শতকরা হারে হিপ সাইজ নির্ধারণ করে মেমোরি ক্র্যাশ ঠেকায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'graalvm-native-startup-speed-ex1',
      kind: 'mcq',
      topic: 'graalvm-native-subsecond-startup',
      question: {
        en: 'What is the primary architectural operational advantage of compiling a Spring Boot 3 application to a GraalVM Native Image?',
        bn: 'স্প্রিং বুট ৩ অ্যাপ্লিকেশনকে GraalVM Native Image এ রূপান্তর করার প্রধান আর্কিটেকচারাল সুবিধা কী?'
      },
      options: [
        {
          en: 'Near-instantaneous startup times (under 50ms) and dramatically lower base memory consumption, ideal for serverless and rapid auto-scaling',
          bn: '৫০ মিলিসেকেন্ডের নিচে প্রায় তাৎক্ষণিক স্টার্টআপ এবং অত্যন্ত কম মেমোরি খরচ, যা সার্ভারলেস ও দ্রুত অটো-স্কেলিংয়ের জন্য আদর্শ'
        },
        {
          en: 'It makes the Java source code unreadable to all humans',
          bn: 'এটি জাভা সোর্স কোড মানুষের জন্য অপাঠ্য করে তোলে'
        },
        {
          en: 'It eliminates the need for any unit tests or QA',
          bn: 'এটি কোনো ইউনিট টেস্টের প্রয়োজনীয়তা পুরোপুরি দূর করে'
        },
        {
          en: 'Native images only run on Windows 95 operating systems',
          bn: 'নেটিভ ইমেজ কেবল উইন্ডোজ ৯৫ অপারেটিং সিস্টেমে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'GraalVM Native eliminates JIT warmup and classloading latency.',
        bn: 'GraalVM ক্লাস লোডিং এবং JIT ওয়ার্ম-আপের সময় নষ্ট না করে চোখের পলকে চালু হয়।'
      },
      explanation: {
        en: 'Ahead-of-time compiled native images boot in tens of milliseconds because reflection and initialization have already been pre-computed.',
        bn: 'বিল্ডের সময়ই সব প্রাক-গণনা সম্পন্ন হওয়ায় নেটিভ ইমেজ প্রায় শূন্য লেটেন্সিতে রান করতে পারে।'
      }
    },
    {
      id: 'layered-jars-docker-cache-ex2',
      kind: 'mcq',
      topic: 'layered-jars-docker-caching-efficiency',
      question: {
        en: 'How do Spring Boot Layered JARs improve the efficiency of Docker image builds and continuous deployment pipelines?',
        bn: 'স্প্রিং বুট Layered JARs কীভাবে ডকার ইমেজ তৈরি এবং সিআই/সিডি পাইপলাইনের গতি কয়েক গুণ বাড়িয়ে দেয়?'
      },
      options: [
        {
          en: 'By isolating third-party dependencies from application code so that Docker caches heavy dependency layers, only rebuilding the lightweight application layer when code changes',
          bn: 'ভারী লাইব্রেরি ও অ্যাপ্লিকেশন কোড আলাদা লেয়ারে বিভক্ত করে, ফলে কোড বদলালেও ডকার লাইব্রেরিগুলো ক্যাশ থেকে নিয়ে কেবল ছোট অ্যাপ লেয়ারটি দ্রুত বিল্ড করে'
        },
        {
          en: 'By encrypting the Docker container with a 256-bit AES key',
          bn: 'ডকার কনটেইনারকে একটি ২৫৬-বিট কি দিয়ে এনক্রিপ্ট করার মাধ্যমে'
        },
        {
          en: 'Layered JARs decrease the physical file size of PNG images',
          bn: 'লেয়ার্ড জার ফাইলের ভেতর থাকা ছবির আকার ছোট করে দেয়'
        },
        {
          en: 'Layered JARs remove the need for a Dockerfile entirely',
          bn: 'লেয়ার্ড জার ব্যবহার করলে কোনো ডকারফাইল লিখতে হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Layered JARs maximize Docker caching by placing slowly changing dependencies before application classes.',
        bn: 'অপরিবর্তনীয় লাইব্রেরিগুলো আলাদা রেখে লেয়ার্ড জার ডকার ক্যাশের নিখুঁত ব্যবহার নিশ্চিত করে।'
      },
      explanation: {
        en: 'Docker builds only update changed layers. Layering ensures that bulky dependencies are cached across successive application deployments.',
        bn: 'ঘন ঘন কোড বদলালেও লাইব্রেরি পুনরায় ডাউনলোড না হওয়ায় ডিপ্লয়মেন্ট কয়েক সেকেন্ডে শেষ হয়।'
      }
    },
    {
      id: 'jvm-max-ram-percentage-container-ex3',
      kind: 'mcq',
      topic: 'jvm-max-ram-percentage-flag',
      question: {
        en: 'Why is "-XX:MaxRAMPercentage=75.0" preferred over hardcoded heap limits like "-Xmx1g" when running Java in Kubernetes containers?',
        bn: 'কুবারনেটিস কনটেইনারে জাভা চালানোর সময় "-Xmx1g" এর বদলে "-XX:MaxRAMPercentage=75.0" ব্যবহার করা কেন বেশি সুবিধাজনক?'
      },
      options: [
        {
          en: 'It automatically scales the JVM heap proportionally if Kubernetes pod memory limits are adjusted, while leaving 25 percent headroom for OS, Metaspace, and thread stacks',
          bn: 'কুবারনেটিস পডের মেমোরি সীমা কমানো বা বাড়ানো হলে এটি স্বয়ংক্রিয়ভাবে হিপ সাইজ সমন্বয় করে, এবং মেটাস্পেস ও থ্রেড স্ট্যাকের জন্য ২৫ শতাংশ মেমোরি ফাঁকা রাখে'
        },
        {
          en: 'It limits the CPU usage to exactly 75 percent',
          bn: 'এটি সিপিইউ ব্যবহার ঠিক ৭৫ শতাংশে সীমাবদ্ধ রাখে'
        },
        {
          en: 'MaxRAMPercentage guarantees that no memory leaks can ever occur in Java',
          bn: 'MaxRAMPercentage গ্যারান্টি দেয় যে জাভাতে কখনো কোনো মেমোরি লিক হবে না'
        },
        {
          en: 'Hardcoded limits are forbidden by Java compilers',
          bn: 'জাভা কম্পাইলারে ফিক্সড মেমোরি সীমা নির্ধারণ করা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'MaxRAMPercentage dynamically adapts to container cgroup limits.',
        bn: 'MaxRAMPercentage কনটেইনারের মোট মেমোরির সাথে সংগতি রেখে স্বয়ংক্রিয়ভাবে হিপ নির্ধারণ করে।'
      },
      explanation: {
        en: 'Configuring MaxRAMPercentage allows pod memory adjustments in Kubernetes manifests without changing Java entrypoint flags.',
        bn: 'পডের মেমোরি বাড়ালে বা কমালে কোড না বদলেই জাভা স্বয়ংক্রিয়ভাবে সঠিক মেমোরি বরাদ্দ করে নেয়।'
      }
    },
    {
      id: 'closed-world-assumption-graalvm-ex4',
      kind: 'mcq',
      topic: 'closed-world-assumption-mechanics',
      question: {
        en: 'What is the "closed-world assumption" enforced during GraalVM Native Image compilation of Spring applications?',
        bn: 'স্প্রিং অ্যাপ্লিকেশনে GraalVM Native Image কম্পাইলেশনের সময় প্রযুক্ত "closed-world assumption" নীতিটির অর্থ কী?'
      },
      options: [
        {
          en: 'The compiler assumes that all classes, methods, and reflection targets reachable at runtime are known and analyzable at build time; unreferenced dynamic code is stripped',
          bn: 'কম্পাইলার ধরে নেয় যে রানটাইমে ব্যবহৃত হতে পারে এমন সমস্ত ক্লাস, মেথড এবং রিফ্লেকশন বিল্ডের সময়ই জানা আছে; অপ্রয়োজনীয় বা অজানা কোড পুরোপুরি মুছে ফেলা হয়'
        },
        {
          en: 'The server must not be connected to the internet during execution',
          bn: 'অ্যাপ্লিকেশন চলার সময় সার্ভারকে ইন্টারনেটের বাইরে অফলাইনে থাকতে হবে'
        },
        {
          en: 'The database must reside on the same motherboard as the processor',
          bn: 'ডেটাবেসকে প্রসেসরের একই মাদারবোর্ডে অবস্থান করতে হবে'
        },
        {
          en: 'Closed-world means the application source code is completely secret',
          bn: 'Closed-world মানে হলো অ্যাপ্লিকেশনের সোর্স কোড সম্পূর্ণ গোপন'
        }
      ],
      answer: 0,
      hint: {
        en: 'All runtime code paths must be discoverable ahead of time at build compilation.',
        bn: 'রানটাইমে যা যা লাগবে তার সবকিছু বিল্ডের সময়ই কম্পাইলারের গোচরে থাকতে হয়।'
      },
      explanation: {
        en: 'Under the closed-world assumption, unreachable code is aggressively pruned, and any dynamic reflection requires explicit build-time native hints.',
        bn: 'অপ্রয়োজনীয় কোড ছেঁটে ফেলে ইমেজ ছোট করার জন্যই এই কঠোর নীতি মেনে চলা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-production-serve',
    title: {
      en: 'Spring Boot Production Readiness & Cloud Native Quiz',
      bn: 'স্প্রিং বুট প্রোডাকশন প্রস্তুতি এবং ক্লাউড নেটিভ কুইজ'
    },
    questions: [
      {
        id: 'quiz-native-reflection-runtime-hints',
        kind: 'mcq',
        topic: 'runtime-hints-native-reflection',
        question: {
          en: 'In Spring Boot 3 AOT, how do developers inform GraalVM about dynamic classes accessed via reflection or serialization that cannot be statically discovered?',
          bn: 'স্প্রিং বুট ৩ AOT-তে যে সমস্ত ক্লাস রিফ্লেকশন বা সিরিয়ালাইজেশনের মাধ্যমে চলে এবং বিল্ডে সরাসরি ধরা পড়ে না, সেগুলোর কথা GraalVM-কে কীভাবে জানানো হয়?'
        },
        options: [
          {
            en: 'By implementing RuntimeHintsRegistrar and registering reflection, resource, or serialization hints with the RuntimeHints API',
            bn: 'RuntimeHintsRegistrar ইন্টারফেস ইমপ্লিমেন্ট করে RuntimeHints এপিআই এর মাধ্যমে প্রয়োজনীয় রিফ্লেকশন ও সিরিয়ালাইজেশন নির্দেশিকা নিবন্ধন করে'
          },
          {
            en: 'By disabling the Java Virtual Machine compiler',
            bn: 'জাভা ভার্চুয়াল মেশিন কম্পাইলার নিষ্ক্রিয় করে দিয়ে'
          },
          {
            en: 'By writing SQL queries inside the application.properties file',
            bn: 'application.properties ফাইলের ভেতর এসকিউএল কুয়েরি লিখে'
          },
          {
            en: 'GraalVM automatically detects every dynamic string reflection without any configuration',
            bn: 'GraalVM কোনো কনফিগারেশন ছাড়াই যেকোনো ডায়নামিক রিফ্লেকশন নিজে থেকেই খুঁজে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'RuntimeHintsRegistrar provides explicit hints for dynamic reflection to GraalVM.',
          bn: 'RuntimeHintsRegistrar এর মাধ্যমে স্প্রিং GraalVM কে ডায়নামিক রিফ্লেকশনের আগাম ধারণা দেয়।'
        },
        explanation: {
          en: 'Because GraalVM prunes unreferenced bytecode, RuntimeHints explicitly instruct the native compiler to retain classes invoked via dynamic reflection.',
          bn: 'অপরিচিত ভেবে কোনো প্রয়োজনীয় ক্লাস যেন বাদ না যায়, সেজন্য RuntimeHints দিয়ে কম্পাইলারকে স্পষ্ট নির্দেশনা দেওয়া হয়।'
        }
      },
      {
        id: 'quiz-docker-multi-stage-build-security',
        kind: 'mcq',
        topic: 'multi-stage-docker-build-security-benefit',
        question: {
          en: 'What fundamental security and size advantage does a multi-stage Docker build provide when packaging Spring Boot microservices?',
          bn: 'স্প্রিং বুট মাইক্রোসার্ভিস প্যাকেজ করার সময় মাল্টি-স্টেজ ডকার বিল্ড কোন মৌলিক নিরাপত্তা ও সাইজ সুবিধা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'The build SDK (JDK, Maven/Gradle, compilers) remains in the builder stage, and only the lightweight JRE runtime and compiled JAR are copied to the minimal final production container',
            bn: 'বিল্ড করার ভারী SDK (JDK, Maven বা Gradle) প্রথম স্টেজে থেকে যায় এবং শুধুমাত্র হালকা JRE এবং তৈরি হওয়া জার ফাইলটি চূড়ান্ত প্রোডাকশন ইমেজে কপি করা হয়'
          },
          {
            en: 'Multi-stage builds automatically generate free SSL certificates',
            bn: 'মাল্টি-স্টেজ বিল্ড স্বয়ংক্রিয়ভাবে বিনামূল্যে এসএসএল সার্টিফিকেট তৈরি করে'
          },
          {
            en: 'It compresses the Linux kernel by 90 percent',
            bn: 'এটি লিনাক্স কার্নেলকে ৯০ শতাংশ সংকুচিত করে'
          },
          {
            en: 'Multi-stage builds are only allowed on ARM64 chips',
            bn: 'মাল্টি-স্টেজ বিল্ড কেবল ARM64 প্রসেসরে চালানোর অনুমতি আছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multi-stage builds exclude build compilers and package managers from production images.',
          bn: 'চূড়ান্ত ইমেজে কম্পাইলার ও অপ্রয়োজনীয় বিল্ড ফাইল না রেখে এটি নিরাপত্তা ঝুঁকি কমায়।'
        },
        explanation: {
          en: 'Excluding build tools minimizes attack surface area and dramatically shrinks Docker image sizes, boosting deployment speed and security posture.',
          bn: 'অপ্রয়োজনীয় কম্পাইলার ও ক্যাশ বাদ যাওয়ায় ইমেজ যেমন সুরক্ষিত থাকে, তেমনি ডাউনলোডের গতিও বাড়ে।'
        }
      },
      {
        id: 'quiz-cds-class-data-sharing-performance',
        kind: 'mcq',
        topic: 'class-data-sharing-cds-spring-boot',
        question: {
          en: 'What is Class Data Sharing (CDS) in modern Spring Boot 3 on standard OpenJDK HotSpot JVMs, and what benefit does it deliver?',
          bn: 'সাধারণ OpenJDK HotSpot JVM-এ আধুনিক স্প্রিং বুট ৩ এর Class Data Sharing (CDS) প্রযুক্তি কী সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It pre-processes application classes into a shared memory archive dump during build, reducing JVM startup time by up to 50 percent and saving shared memory across containers',
            bn: 'এটি ক্লাসপাথের ক্লাসগুলোকে আগেই প্রসেস করে একটি শেয়ার্ড মেমোরি আর্কাইভ ডাম্প তৈরি করে রাখে, ফলে চালুর সময় ৫০ শতাংশ পর্যন্ত কমে যায় এবং কনটেইনার জুড়ে মেমোরি সাশ্রয় হয়'
          },
          {
            en: 'CDS is a cloud database service offered by Oracle',
            bn: 'CDS হলো ওরাকলের একটি ক্লাউড ডেটাবেস সার্ভিস'
          },
          {
            en: 'CDS converts Java classes into C++ header files',
            bn: 'CDS জাভা ক্লাসগুলোকে C++ হেডার ফাইলে রূপান্তর করে'
          },
          {
            en: 'Class Data Sharing only works with Java 8',
            bn: 'Class Data Sharing কেবল জাভা ৮ সংস্করণে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CDS archives loaded class metadata, speeding up JVM bootstrap without requiring GraalVM.',
          bn: 'CDS ক্লাস মেটাডেটা ক্যাশ করে রাখে, ফলে GraalVM ছাড়াও সাধারণ JVM এর স্টার্টআপ বহুগুণ দ্রুত হয়।'
        },
        explanation: {
          en: 'Spring Boot 3.3+ provides built-in support for CDS archives, offering a sweet spot of rapid startup improvement on standard HotSpot JVMs.',
          bn: 'স্ট্যান্ডার্ড ওপেনজেডিকে-তেই স্টার্টআপ দ্রুত করার জন্য CDS একটি চমৎকার ও সহজ উপায়।'
        }
      },
      {
        id: 'quiz-jvm-container-support-cgroups',
        kind: 'mcq',
        topic: 'usecontainersupport-cgroups-memory-limit',
        question: {
          en: 'What disaster occurs if an older JVM without container awareness runs inside a container with a 1GB memory limit on a 64GB host machine?',
          bn: 'কনটেইনার-সচেতনতা ছাড়া কোনো পুরোনো JVM যদি ৬৪ গিগাবাইট হোস্ট মেশিনের ওপর মাত্র ১ গিগাবাইট সীমার কনটেইনারে চলে, তবে কী বিপর্যয় ঘটে?'
        },
        options: [
          {
            en: 'The JVM detects 64GB total host RAM, allocates a default heap far exceeding the 1GB cgroup limit, and gets instantly killed by the Linux kernel OOMKiller (exit code 137)',
            bn: 'JVM পুরো হোস্টের ৬৪ জিবি র্যাম শনাক্ত করে এবং ১ জিবির চেয়ে অনেক বড় হিপ বরাদ্দ করতে গিয়ে লিনাক্স কার্নেলের OOMKiller দ্বারা নির্দয়ভাবে সাথে সাথে বন্ধ (exit code 137) হয়ে যায়'
          },
          {
            en: 'The host operating system automatically upgrades its physical RAM',
            bn: 'হোস্ট অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে ফিজিক্যাল র্যাম বাড়িয়ে নেয়'
          },
          {
            en: 'The container becomes invisible to all network traffic',
            bn: 'কনটেইনারটি সমস্ত নেটওয়ার্ক ট্রাফিকের কাছে অদৃশ্য হয়ে যায়'
          },
          {
            en: 'The JVM switches to single-threaded mode permanently',
            bn: 'JVM চিরতরে একক-থ্রেড মোডে চলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without container awareness, the JVM reads total host memory and violates cgroup caps.',
          bn: 'কনটেইনার সচেতন না হলে JVM ভুল করে হোস্ট মেশিনের পুরো মেমোরি ধরে নিয়ে সীমা অতিক্রম করে।'
        },
        explanation: {
          en: 'Container support ensures the JVM reads cgroup quotas rather than raw physical host specs, avoiding kernel out-of-memory termination.',
          bn: 'মেমোরি সীমা ঠিকভাবে না চিনলে কুবারনেটিসে পড ক্র্যাশ অনিবার্য; তাই কনটেইনার সাপোর্ট ফ্ল্যাগ অত্যন্ত প্রয়োজনীয়।'
        }
      }
    ]
  }
};
