import type { Lesson } from '../../../lib/types';

export const TheJavaReleaseLesson: Lesson = {
  slug: 'the-java-release',
  tech: 'lang-java',
  title: {
    en: 'The Modern Java Release Cadence, Toolchains & Tuning',
    bn: 'আধুনিক জাভা রিলিজ পদ্ধতি, টুলচেইন এবং টিউনিং'
  },
  summary: {
    en: 'Navigate the modern enterprise Java release ecosystem. Understand the predictable 6-month feature release cycle and 2-year Long-Term Support (LTS) roadmap (versions 8, 11, 17, 21), standardize builds with wrappers, execute test suites with JUnit 5, and optimize container JVM memory.',
    bn: 'আধুনিক এন্টারপ্রাইজ জাভা রিলিজ ইকোসিস্টেম আয়ত্ত করুন। সুনির্দিষ্ট ৬ মাসের ফিচার রিলিজ চক্র ও ২ বছরের লং-টার্ম সাপোর্ট (LTS) রোডম্যাপ (সংস্করণ ৮, ১১, ১৭, ২১), প্রমিত বিল্ড, JUnit 5 টেস্ট এবং কনটেইনার মেমোরি অপটিমাইজেশন শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'modern-release-cadence-and-lts-heading',
      text: {
        en: 'The 6-Month Time-Based Cadence and 2-Year LTS Releases',
        bn: '৬ মাসের সুনির্দিষ্ট রিলিজ চক্র এবং ২ বছরের LTS রোডম্যাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, Java releases took 3 to 4 years of uncertain development, causing massive migrations between Java 6, 7, and 8. Following Java 9, Oracle and the OpenJDK community transitioned to a predictable, time-driven release model: a new major feature version of Java is delivered every 6 months (every March and September). To provide stability for enterprise mission-critical infrastructure, a Long-Term Support (LTS) release arrives every 2 years. Landmark LTS versions include Java 8, 11, 17, and 21. Non-LTS releases serve as production-ready stepping stones allowing early adoption of language preview features.',
        bn: 'ঐতিহাসিকভাবে জাভার নতুন সংস্করণ আসতে ৩ থেকে ৪ বছর লেগে যেতো, যার ফলে জাভা ৬, ৭ এবং ৮ এর মধ্যে আপগ্রেড করা অত্যন্ত জটিল ছিল। জাভা ৯ এর পর ওরাকল এবং OpenJDK কমিউনিটি একটি সময়-ভিত্তিক সুনির্দিষ্ট রিলিজ মডেলে স্থানান্তরিত হয়: প্রতি ৬ মাস পরপর (প্রতি মার্চ ও সেপ্টেম্বরে) জাভার একটি নতুন সংস্করণ উন্মুক্ত করা হয়। এন্টারপ্রাইজ অবকাঠামোতে দীর্ঘমেয়াদী স্থিতিশীলতা বজায় রাখতে প্রতি ২ বছর পরপর একটি লং-টার্ম সাপোর্ট (LTS) রিলিজ মুক্তি পায়। উল্লেখযোগ্য LTS সংস্করণগুলো হলো জাভা ৮, ১১, ১৭ এবং ২১। নন-এলটিএস সংস্করণগুলো পরীক্ষামূলক ও নতুন ফিচার আগাম পরখ করার চমৎকার সুযোগ তৈরি করে দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Modern Java production delivery pipeline: 6-month release cadence, standardized Maven/Gradle wrappers, automated test suites, and container-aware JVM flags.',
        bn: 'চিত্র ১: আধুনিক জাভা প্রোডাকশন ডেলিভারি পাইপলাইন: ৬ মাসের রিলিজ চক্র, প্রমিত বিল্ড র‍্যাপার, স্বয়ংক্রিয় টেস্টিং এবং কনটেইনার-সচেতন JVM ফ্ল্যাগ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">MODERN JAVA RELEASE PIPELINE: 6-MONTH CADENCE &amp; JVM TUNING</text>

  <!-- Step 1: Release Cadence -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Release Cadence</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Every 6 Months (Mar/Sep)</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">2-Year LTS Roadmap</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">LTS: 8, 11, 17, 21</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Predictable Velocity</text>
  </g>

  <!-- Step 2: Build Wrappers -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Build Wrappers</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">./mvnw or ./gradlew</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Exact Toolchain Lock</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero Host Tool Install</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Reproducible CI/CD</text>
  </g>

  <!-- Step 3: Automated Testing -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Automated Testing</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">JUnit 5 Jupiter API</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">@ParameterizedTest</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">AssertJ Fluent Match</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Deterministic Green</text>
  </g>

  <!-- Step 4: Container JVM Tuning -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. JVM Tuning</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="8" font-family="monospace">-XX:+UseContainerSupport</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">MaxRAMPercentage=75</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">Low-Latency G1 / ZGC</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero OOMKilled Pods</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'toolchain-wrappers-and-jvm-tuning-heading',
      text: {
        en: 'Standardized Build Wrappers (mvnw/gradlew) and Container JVM Flags',
        bn: 'প্রমিত বিল্ড র‍্যাপার (mvnw/gradlew) এবং কনটেইনার JVM ফ্ল্যাগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To eliminate "works on my machine" inconsistencies across development teams and CI/CD runners, production projects use Maven Wrappers (./mvnw) or Gradle Wrappers (./gradlew). The wrapper script checks the repository\'s configuration, automatically downloads the exact required version of the build tool, and executes the build without requiring host-level tool installations. In production containerized deployments (such as Kubernetes pods), modern Java (Java 10+) defaults to "-XX:+UseContainerSupport". Developers set "-XX:MaxRAMPercentage=75.0" to dynamically allocate 75 percent of the cgroup memory limit to the JVM heap, leaving the remaining 25 percent for off-heap metaspace, stack frames, and native driver allocations.',
        bn: 'ডেভেলপারদের নিজস্ব কম্পিউটার এবং CI/CD সার্ভারের মধ্যে টুল সংস্করণের অমিল দূর করতে আধুনিক প্রোডাকশন প্রজেক্টে ম্যাভেন র‍্যাপার (./mvnw) বা গ্রেডল র‍্যাপার (./gradlew) ব্যবহার করা হয়। এই র‍্যাপার স্ক্রিপ্টটি সিস্টেমে আগে থেকে কোনো সফটওয়্যার ইনস্টল করা ছাড়াই প্রজেক্টের জন্য নির্ধারিত সঠিক সংস্করণের বিল্ড টুল নিজে থেকে ডাউনলোড করে নির্বিঘ্নে কোড বিল্ড করে। কুবারনেটিসের মতো কনটেইনার পরিবেশে আধুনিক জাভা (জাভা ১০+) ডিফল্টভাবে "-XX:+UseContainerSupport" সক্রিয় রাখে। এর সাথে "-XX:MaxRAMPercentage=75.0" ফ্ল্যাগ ব্যবহার করে কনটেইনারের মোট মেমোরির ৭৫ শতাংশ হিপের জন্য বরাদ্দ করা হয় এবং বাকি ২৫ শতাংশ মেটাস্পেস ও নেটিভ ড্রাইভারের সুরক্ষার জন্য সংরক্ষিত রাখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java build wrapper verification, JUnit 5 test suite execution, and container-aware memory allocation calculation.',
        bn: 'জাভা বিল্ড র‍্যাপার যাচাই, JUnit 5 টেস্ট স্যুট এবং কনটেইনার হিপ মেমোরি বরাদ্দের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Java Build Wrapper, Test Runner & Container JVM Sizing

export interface TestResult {
  testName: string;
  passed: boolean;
  durationMs: number;
}

export class JavaBuildToolSimulator {
  private testSuites: TestResult[] = [];

  // Simulating ./mvnw verify or ./gradlew check
  public executeBuildPipeline(): { testsPassed: number; buildSuccess: boolean } {
    console.log('[Wrapper] Verified locked build tool version (Maven 3.9.6)...');
    
    // Simulating JUnit 5 Jupiter tests
    this.testSuites.push({ testName: 'testUserAuthentication()', passed: true, durationMs: 14 });
    this.testSuites.push({ testName: 'testOrderTransactionCommit()', passed: true, durationMs: 28 });
    this.testSuites.push({ testName: 'testVirtualThreadHighLoad()', passed: true, durationMs: 45 });

    const allPassed = this.testSuites.every(t => t.passed);
    return { testsPassed: this.testSuites.length, buildSuccess: allPassed };
  }

  // Calculating adaptive JVM heap size based on cgroup memory limit and MaxRAMPercentage
  public calculateContainerHeap(cgroupLimitMb: number, ramPercentage: number): { heapMb: number; offHeapMb: number } {
    const heapMb = Math.round((cgroupLimitMb * ramPercentage) / 100);
    const offHeapMb = cgroupLimitMb - heapMb;
    return { heapMb, offHeapMb };
  }
}

// Execution demonstration
const simulator = new JavaBuildToolSimulator();
const buildReport = simulator.executeBuildPipeline();

console.log('Automated Tests Executed:', buildReport.testsPassed); // 3
console.log('Build Pipeline Status:', buildReport.buildSuccess); // true

// Simulating 1000MB Kubernetes Pod with 75% MaxRAMPercentage
const memorySizing = simulator.calculateContainerHeap(1000, 75);
console.log('Allocated JVM Heap Memory (MB):', memorySizing.heapMb); // 750
console.log('Reserved Off-Heap Memory (MB):', memorySizing.offHeapMb); // 250`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'LTS (Long-Term Support)',
          def: {
            en: 'Major Java release designated every 2 years receiving multi-year enterprise production security updates.',
            bn: 'প্রতি ২ বছর পরপর প্রকাশিত প্রধান জাভা সংস্করণ যা বহু বছর ধরে প্রোডাকশন সিকিউরিটি আপডেট লাভ করে।'
          }
        },
        {
          term: 'Build Wrapper',
          def: {
            en: 'Self-bootstrapping script (mvnw/gradlew) locking the build tool version directly in source control.',
            bn: 'স্ক্রিপ্ট যা প্রজেক্টের ভেতরেই সঠিক সংস্করণের বিল্ড টুল সংরক্ষণ ও নিজে নিজে ডাউনলোড করে পরিচালনা করে।'
          }
        },
        {
          term: 'JUnit 5',
          def: {
            en: 'Industry-standard testing framework for modern Java applications supporting parameterized and dynamic tests.',
            bn: 'আধুনিক জাভা অ্যাপ্লিকেশনের স্বয়ংক্রিয় টেস্টিং ফ্রেমওয়ার্ক যা প্যারামিটারাইজড টেস্ট সমর্থন করে।'
          }
        },
        {
          term: 'UseContainerSupport',
          def: {
            en: 'JVM flag enabled by default since Java 10 that reads cgroup RAM/CPU limits inside Docker and Kubernetes.',
            bn: 'জাভা ১০+ এ ডিফল্ট সক্রিয় থাকা ফ্ল্যাগ যা ডকার বা কুবারনেটিস কনটেইনারের র্যাম ও সিপিইউ সীমা শনাক্ত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'java-lts-release-interval-ex1',
      kind: 'mcq',
      topic: 'java-lts-cadence-timeline',
      question: {
        en: 'Under the modern release cadence, how frequently does the OpenJDK community release a Long-Term Support (LTS) version of Java?',
        bn: 'আধুনিক রিলিজ পদ্ধতি অনুসারে, OpenJDK কমিউনিটি প্রতি কত বছর পরপর একটি লং-টার্ম সাপোর্ট (LTS) সংস্করণ প্রকাশ করে?'
      },
      options: [
        { en: 'Every 2 years (with feature releases every 6 months)', bn: 'প্রতি ২ বছর পরপর (এবং প্রতি ৬ মাস পরপর সাধারণ ফিচার রিলিজ)' },
        { en: 'Every 10 years', bn: 'প্রতি ১০ বছর পরপর' },
        { en: 'Every month', bn: 'প্রতি মাসে' },
        { en: 'There are no LTS releases in Java', bn: 'জাভাতে কোনো এলটিএস সংস্করণ নেই' }
      ],
      answer: 0,
      hint: {
        en: 'LTS releases arrive every 2 years: 11, 17, 21.',
        bn: 'এলটিএস সংস্করণ প্রতি ২ বছর পরপর আসে: ১১, ১৭, ২১।'
      },
      explanation: {
        en: 'Java delivers a major feature release every 6 months and designates an LTS release every 2 years for enterprise adoption.',
        bn: 'প্রতি ৬ মাসে নতুন ফিচার আসে এবং প্রতি ২ বছরে প্রোডাকশনের জন্য দীর্ঘমেয়াদী এলটিএস সংস্করণ নির্ধারিত হয়।'
      }
    },
    {
      id: 'build-wrapper-benefit-reproducibility-ex2',
      kind: 'mcq',
      topic: 'build-wrappers-mvnw-gradlew-benefits',
      question: {
        en: 'What is the primary operational advantage of executing builds using "./mvnw" or "./gradlew" instead of global system commands?',
        bn: 'সিস্টেমে ইনস্টল করা গ্লোবাল কমান্ডের বদলে "./mvnw" বা "./gradlew" র‍্যাপার ব্যবহার করে বিল্ড চালানোর মূল সুবিধা কী?'
      },
      options: [
        {
          en: 'It guarantees that every developer and CI/CD agent builds with the exact same pinned tool version, without requiring manual pre-installation on the host machine',
          bn: 'এটি নিশ্চিত করে যে প্রতিটি ডেভেলপার এবং CI/CD এজেন্ট অবিকল একই সংস্করণের বিল্ড টুল ব্যবহার করছে, মেশিনে আগে থেকে কিছু ইনস্টল না থাকলেও চলে'
        },
        {
          en: 'It makes all compiled code execute 10 times faster',
          bn: 'এটি সমস্ত কম্পাইল্ড কোডকে ১০ গুণ দ্রুত চালায়'
        },
        {
          en: 'Wrappers automatically convert Java to JavaScript',
          bn: 'র‍্যাপার নিজে থেকেই জাভাকে জাভাস্ক্রিপ্টে রূপান্তর করে'
        },
        {
          en: 'It encrypts the entire source directory with AES-256',
          bn: 'এটি পুরো সোর্স ডিরেক্টরি AES-256 দিয়ে এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Wrappers lock the toolchain version in version control.',
        bn: 'র‍্যাপার বিল্ড টুলের সংস্করণ প্রজেক্টের সাথে লক করে রাখে।'
      },
      explanation: {
        en: 'Wrappers self-bootstrap the correct build tool version, preventing build discrepancies between developer machines and automated pipelines.',
        bn: 'সবার মেশিনে একই সংস্করণ নিশ্চিত করে র‍্যাপার যেকোনো বিল্ড কনফ্লিক্ট পুরোপুরি প্রতিরোধ করে।'
      }
    },
    {
      id: 'container-jvm-ram-percentage-flag-ex3',
      kind: 'mcq',
      topic: 'jvm-maxrampercentage-container-sizing',
      question: {
        en: 'Which JVM flag adaptively configures maximum heap memory based on the container cgroup limit rather than host physical RAM?',
        bn: 'হোস্টের মোট র্যাম না দেখে কনটেইনারের মেমোরি সীমার ওপর ভিত্তি করে হিপ নির্ধারণ করতে কোন JVM ফ্ল্যাগটি ব্যবহৃত হয়?'
      },
      options: [
        { en: '-XX:MaxRAMPercentage=75.0', bn: '-XX:MaxRAMPercentage=75.0' },
        { en: '-XX:DisableHeapMemory', bn: '-XX:DisableHeapMemory' },
        { en: '-XX:SetUnlimitedRAM', bn: '-XX:SetUnlimitedRAM' },
        { en: '-XX:IgnoreContainers', bn: '-XX:IgnoreContainers' }
      ],
      answer: 0,
      hint: {
        en: 'MaxRAMPercentage dynamically sizes the heap as a percentage of container limits.',
        bn: 'MaxRAMPercentage কনটেইনারের সীমার শতকরা হার হিসেবে হিপ নির্ধারণ করে।'
      },
      explanation: {
        en: '-XX:MaxRAMPercentage calculates heap allocation adaptively against container cgroup limits, preventing out-of-memory container kills.',
        bn: 'এটি কনটেইনারের নির্দিষ্ট মেমোরি মেনে হিপ সাইজ ঠিক করে যাতে কুবারনেটিসে পড ক্র্যাশ না করে।'
      }
    },
    {
      id: 'junit-5-jupiter-test-annotation-ex4',
      kind: 'mcq',
      topic: 'junit5-jupiter-test-annotation',
      question: {
        en: 'Which package and annotation designate a standard unit test method in modern JUnit 5?',
        bn: 'আধুনিক JUnit 5 এ সাধারণ ইউনিট টেস্ট মেথড চিহ্নিত করতে কোন প্যাকেজ এবং অ্যানোটেশনটি ব্যবহৃত হয়?'
      },
      options: [
        { en: '@org.junit.jupiter.api.Test', bn: 'অ্যানোটেশন: @org.junit.jupiter.api.Test' },
        { en: '@org.junit.Test (JUnit 4 legacy)', bn: 'পুরনো: @org.junit.Test (JUnit 4 legacy)' },
        { en: '@java.lang.UnitTest', bn: 'অ্যানোটেশন: @java.lang.UnitTest' },
        { en: '@System.TestRunner', bn: 'সিস্টেম: @System.TestRunner' }
      ],
      answer: 0,
      hint: {
        en: 'JUnit 5 is built upon the Jupiter engine API.',
        bn: 'JUnit 5 আধুনিক জুপিটার এপিআই ইঞ্জিনের ওপর ভিত্তি করে তৈরি।'
      },
      explanation: {
        en: 'JUnit 5 uses org.junit.jupiter.api.Test, distinguishing modern test suites from legacy JUnit 4 org.junit.Test.',
        bn: 'JUnit 5 এ টেস্ট মেথড ঘোষণার সঠিক অ্যানোটেশন হলো org.junit.jupiter.api.Test, যা পুরনো JUnit 4 থেকে আলাদা।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-java-release',
    title: {
      en: 'The Modern Java Release & Toolchains Mastery Quiz',
      bn: 'আধুনিক জাভা রিলিজ এবং টুলচেইন কুইজ'
    },
    questions: [
      {
        id: 'quiz-preview-features-flag-semantics',
        kind: 'mcq',
        topic: 'preview-features-enable-preview-flag',
        question: {
          en: 'Why must developers pass "--enable-preview" to both javac and java when experimenting with preview language features in non-LTS releases?',
          bn: 'নন-এলটিএস সংস্করণে পরীক্ষামূলক প্রিভিউ ফিচার ব্যবহারের সময় javac এবং java উভয়টিতেই "--enable-preview" ফ্ল্যাগ পাস করা কেন আবশ্যক?'
        },
        options: [
          {
            en: 'Because preview features are fully specified and implemented but subject to API refinement; the explicit flag prevents accidental production reliance on unstable APIs',
            bn: 'কারণ প্রিভিউ ফিচারগুলো পুরোপুরি কার্যকর হলেও ভবিষ্যৎ সংস্করণে সামান্য পরিবর্তিত হতে পারে; এই ফ্ল্যাগ অসাবধানতাবশত প্রোডাকশনে অপরিবর্তিত এপিআই ব্যবহার রোধ করে'
          },
          {
            en: 'Because the JVM cannot run without this flag enabled',
            bn: 'কারণ এই ফ্ল্যাগ ছাড়া JVM চালানোই অসম্ভব'
          },
          {
            en: 'It deletes all existing compiled class files from the system',
            bn: 'এটি সিস্টেম থেকে সমস্ত কম্পাইল্ড ক্লাস ফাইল মুছে ফেলে'
          },
          {
            en: 'Preview features only run on Linux servers',
            bn: 'প্রিভিউ ফিচার কেবল লিনাক্স সার্ভারেই চলতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preview flags safeguard production code from non-finalized specifications.',
          bn: 'প্রিভিউ ফ্ল্যাগ নিশ্চিত করে যে ডেভেলপার সচেতনভাবে পরীক্ষামূলক ফিচার ব্যবহার করছেন।'
        },
        explanation: {
          en: 'Java mandates --enable-preview so teams deliberately acknowledge that preview APIs may evolve before final LTS stabilization.',
          bn: 'ফিচারটি স্থায়ী রূপ পাওয়ার আগে যাতে অসাবধানতাবশত প্রোডাকশনে না চলে যায় সেজন্য এই ফ্ল্যাগ জরুরি।'
        }
      },
      {
        id: 'quiz-zgc-garbage-collector-low-latency',
        kind: 'mcq',
        topic: 'zgc-low-latency-garbage-collector',
        question: {
          en: 'What is the primary performance characteristic of the Z Garbage Collector (ZGC) introduced as production-ready in Java 15+?',
          bn: 'জাভা ১৫+ এ প্রোডাকশন-রেডি হিসেবে যুক্ত Z Garbage Collector (ZGC) এর প্রধান পারফরম্যান্স বৈশিষ্ট্য কী?'
        },
        options: [
          {
            en: 'Sub-millisecond pause times regardless of heap size (even on terabyte-scale heaps), performing nearly all GC work concurrently with application threads',
            bn: 'হিপ সাইজ যত বড় বা টেরাবাইট আকারের হলেও সাব-মিলি-সেকেন্ড পজ টাইম, কারণ এটি অ্যাপ্লিকেশন থ্রেডের সমান্তরালে প্রায় সব কাজ সম্পন্ন করে'
          },
          {
            en: 'It eliminates the need for computer RAM completely',
            bn: 'এটি মেমোরির প্রয়োজনীয়তা পুরোপুরি নির্মূল করে দেয়'
          },
          {
            en: 'ZGC increases pause times to 5 minutes for deep cleaning',
            bn: 'ZGC পরিষ্কারের জন্য পজ টাইম বাড়িয়ে ৫ মিনিট করে'
          },
          {
            en: 'ZGC only collects String objects',
            bn: 'ZGC কেবল স্ট্রিং অবজেক্ট পরিষ্কার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ZGC is engineered for ultra-low pause times under 1 millisecond.',
          bn: 'ZGC তৈরি করা হয়েছে ১ মিলি-সেকেন্ডের কম অতি-স্বল্প পজ টাইমের জন্য।'
        },
        explanation: {
          en: 'ZGC is a scalable low-latency garbage collector maintaining sub-millisecond maximum pause times even across multi-terabyte heaps.',
          bn: 'ZGC সুবিশাল হিপ মেমোরিতেও অ্যাপ্লিকেশন না থামিয়ে সাব-মিলি-সেকেন্ডে কাজ সম্পন্ন করে।'
        }
      },
      {
        id: 'quiz-multi-release-jar-mrjar-mechanics',
        kind: 'mcq',
        topic: 'multi-release-jars-mrjar-specification',
        question: {
          en: 'How does a Multi-Release JAR (MRJAR, introduced in Java 9) allow a library to support both legacy and modern Java runtimes in a single archive?',
          bn: 'জাভা ৯ এ প্রবর্তিত Multi-Release JAR (MRJAR) কীভাবে একটি একক প্যাকেজে পুরনো এবং আধুনিক উভয় জাভা সংস্করণ সমর্থন করতে দেয়?'
        },
        options: [
          {
            en: 'It stores bytecode under "META-INF/versions/{N}/"; the JVM automatically executes newer Java N classes if running on version N or higher, falling back to base classes on older JVMs',
            bn: 'এটি "META-INF/versions/{N}/" ডিরেক্টরিতে বাইটকোড রাখে; JVM সংস্করণ N বা তার বেশি হলে স্বয়ংক্রিয়ভাবে নতুন ক্লাস চালায়, আর পুরনো সংস্করণে বেস ক্লাস চালায়'
          },
          {
            en: 'It recompiles all source code into C++ at startup',
            bn: 'এটি শুরুর সময় সমস্ত সোর্স কোড সি++ এ নতুন করে কম্পাইল করে'
          },
          {
            en: 'It splits the JAR into 10 separate physical files on disk',
            bn: 'এটি ডিস্কে JAR টিকে ১০ টি আলাদা ফাইলে বিভক্ত করে দেয়'
          },
          {
            en: 'MRJAR was removed from the Java language specification',
            bn: 'MRJAR জাভা স্পেসিফিকেশন থেকে মুছে ফেলা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'MRJARs use versioned folders inside META-INF to serve release-specific classes.',
          bn: 'MRJAR প্যাকেজে META-INF ফোল্ডারে নির্দিষ্ট সংস্করণের জন্য তৈরি ক্লাস সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'MRJARs enable library maintainers to bundle Java 8, 11, 17, and 21 optimized bytecode within one unified JAR distribution.',
          bn: 'একটি প্যাকেজের মধ্যেই বিভিন্ন সংস্করণের অপটিমাইজড কোড রেখে বহুমুখী সাপোর্ট নিশ্চিত করা যায়।'
        }
      },
      {
        id: 'quiz-appcds-shared-archive-deployment',
        kind: 'mcq',
        topic: 'appcds-shared-archive-kubernetes-startup',
        question: {
          en: 'What advantage does using Application Class Data Sharing (AppCDS) provide when autoscaling microservices on Kubernetes?',
          bn: 'কুবারনেটিসে মাইক্রোসার্ভিস দ্রুত স্কেল করার সময় Application Class Data Sharing (AppCDS) কী সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It creates a shared memory-mapped archive of pre-parsed classes, dramatically cutting container cold-start time and reducing memory footprint across multiple pods',
            bn: 'এটি আগে থেকে পার্স করা ক্লাসের একটি শেয়ার্ড মেমোরি ফাইল তৈরি করে, ফলে পডের কোল্ড-স্টার্ট সময় নাটকীয়ভাবে কমে এবং মেমোরি খরচ হ্রাস পায়'
          },
          {
            en: 'It eliminates the need for Kubernetes completely',
            bn: 'এটি কুবারনেটিসের প্রয়োজনীয়তা সম্পূর্ণ দূর করে দেয়'
          },
          {
            en: 'It deletes all log files from disk after 1 second',
            bn: 'এটি ১ সেকেন্ড পর সমস্ত লগ ফাইল মুছে ফেলে'
          },
          {
            en: 'AppCDS only works on 8-bit embedded processors',
            bn: 'AppCDS কেবল ৮-বিট প্রসেসরে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'AppCDS shares pre-loaded class metadata directly into memory.',
          bn: 'AppCDS প্রসেস করা ক্লাস সরাসরি শেয়ার্ড মেমোরিতে ম্যাপ করে দ্রুত শুরু নিশ্চিত করে।'
        },
        explanation: {
          en: 'AppCDS dumps shared class metadata into a memory-mapped file, bypassing class verification and loading overhead on container startup.',
          bn: 'শেয়ার্ড আর্কাইভ ব্যবহার করার ফলে ক্লাসের লোডিং সময় বেঁচে যায় এবং মাইক্রোসার্ভিস মুহূর্তে চালু হয়।'
        }
      }
    ]
  }
};
