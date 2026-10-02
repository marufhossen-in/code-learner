import type { Lesson } from '../../../lib/types';

export const TheJarServeLesson: Lesson = {
  slug: 'the-jar-serve',
  tech: 'java',
  title: {
    en: 'Packaging, JLink Runtimes & Cloud Deployment',
    bn: 'প্যাকেজিং, JLink রানটাইম এবং ক্লাউড ডিপ্লয়মেন্ট'
  },
  summary: {
    en: 'Deliver production-grade Java applications: master Maven/Gradle dependency management, construct standalone executable fat/uber JARs, shrink JVM distributions down to minimal custom runtimes with JLink, and package cloud-native Docker container images with multi-stage builds.',
    bn: 'প্রোডাকশন-মানের জাভা অ্যাপ্লিকেশন ডেলিভারি শিখুন: Maven/Gradle ডিপেন্ডেন্সি ম্যানেজমেন্ট, এক্সিকিউটেবল ফ্যাট বা uber JAR তৈরি, JLink দিয়ে ন্যূনতম কাস্টম JVM রানটাইম প্যাকেজিং এবং মাল্টি-স্টেজ ডকার কনটেইনার ডিপ্লয়মেন্ট।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'maven-packaging-fat-jar-heading',
      text: {
        en: 'Build Automation, Dependency Scopes, and Executable Fat JARs',
        bn: 'বিল্ড অটোমেশন, ডিপেন্ডেন্সি স্কোপ এবং এক্সিকিউটেবল ফ্যাট JAR'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Enterprise Java software delivery relies on build automation frameworks like Apache Maven (configured via pom.xml) and Gradle. In Maven, dependencies are scoped into compile, provided, runtime, or test. To deploy a microservice as a self-contained unit, plugins like maven-shade-plugin assemble an "executable fat JAR" (or uber-JAR). This single archive bundles all compiled application bytecode, third-party libraries, and a META-INF/MANIFEST.MF file declaring the Main-Class entry point, allowing operations teams to launch the service anywhere via a single command: "java -jar \'app.jar\'".',
        bn: 'এন্টারপ্রাইজ জাভা সফটওয়্যার ডেলিভারি প্রধানত Apache Maven (pom.xml দ্বারা কনফিগার করা) বা Gradle এর মতো আধুনিক বিল্ড টুলের ওপর নির্ভর করে। ম্যাভেনে বিভিন্ন ডিপেন্ডেন্সিকে compile, provided, runtime বা test স্কোপে সাজানো হয়। কোনো মাইক্রোসার্ভিস সহজে ডিপ্লয় করতে maven-shade-plugin এর মাধ্যমে একটি স্বনির্ভর "executable fat JAR" (বা uber-JAR) তৈরি করা হয়। এই একটি একক প্যাকেজের মধ্যে অ্যাপ্লিকেশনের সব কম্পাইল্ড কোড, বাহ্যিক লাইব্রেরি এবং META-INF/MANIFEST.MF ফাইলে Main-Class নির্দেশ করা থাকে, ফলে সার্ভারে শুধুমাত্র "java -jar \'app.jar\'" কমান্ড চালিয়েই পুরো সার্ভিস চালু করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete software delivery lifecycle: From Maven build and test verification, to JLink runtime minimization and multi-stage Docker containerization.',
        bn: 'চিত্র ১: পূর্ণাঙ্গ সফটওয়্যার ডেলিভারি চক্র: ম্যাভেন বিল্ড ও পরীক্ষা থেকে শুরু করে JLink রানটাইম সংকোচন এবং মাল্টি-স্টেজ ডকার কনটেইনারাইজেশন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA PRODUCTION DELIVERY: MAVEN, JLINK &amp; CONTAINERIZATION</text>

  <!-- Step 1: Maven Build -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Build &amp; Test</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">mvn clean verify</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Unit &amp; Int Tests</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Dependencies Resolved</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Automated Quality Gate</text>
  </g>

  <!-- Step 2: Fat JAR Assembly -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Fat JAR Package</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">app.jar Artifact</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">All Libs + Classes</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Main-Class Manifest</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Self-Contained Executable</text>
  </g>

  <!-- Step 3: JLink Runtime -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. JLink Shrinking</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">jlink --strip-debug</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">JDK 350MB -&gt; 40MB</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Custom Minimal JRE</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Trimmed Unused Modules</text>
  </g>

  <!-- Step 4: Docker Cloud Container -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Cloud Container</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Multi-Stage Docker</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">500MB -&gt; 45MB Image</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Distroless / Alpine</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero CVE Footprint</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'jlink-and-docker-containers-heading',
      text: {
        en: 'JLink Modular Runtimes and Multi-Stage Cloud Containerization',
        bn: 'JLink মডুলার রানটাইম এবং মাল্টি-স্টেজ ক্লাউড কনটেইনারাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard JDK installations occupy over 350 megabytes of disk space, bundling legacy desktop GUI frameworks and enterprise CORBA components rarely needed in modern microservices. Java 9 introduced the Java Platform Module System (JPMS) and the "jlink" tool, enabling developers to generate a custom, stripped-down JRE containing solely the specific modules required by their application (such as java.base, java.net.http, and java.sql). By combining jlink with multi-stage Docker builds, production container image sizes shrink from 500 megabytes down to just 45 megabytes, dramatically accelerating Kubernetes pod deployment and reducing vulnerability exposure.',
        bn: 'একটি পূর্ণাঙ্গ স্ট্যান্ডার্ড JDK সাধারণত ৩৫০ মেগাবাইটের বেশি ডিস্ক স্পেস দখল করে, যার মধ্যে ডেস্কটপ গ্রাফিক্স বা পুরনো অপ্রয়োজনীয় বহু মডিউল থাকে। জাভা ৯ এ জাভা প্ল্যাটফর্ম মডিউল সিস্টেম (JPMS) এবং "jlink" টুল যুক্ত হয়, যা ডেভেলপারদের শুধু প্রয়োজনীয় মডিউলগুলো (যেমন java.base, java.net.http, এবং java.sql) নিয়ে একটি অতি ক্ষুদ্র কাস্টম JRE তৈরি করার সুবিধা দেয়। ডকারের মাল্টি-স্টেজ বিল্ডের সাথে jlink ব্যবহার করলে ক্লাউড কনটেইনারের সাইজ ৫০০ মেগাবাইট থেকে কমে মাত্র ৪৫ মেগাবাইটে নেমে আসে। এর ফলে কুবারনেটিসে পডের ডিপ্লয়মেন্ট বহুগুণ দ্রুত হয় এবং নিরাপত্তার ঝুঁকি হ্রাস পায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java Maven build lifecycle, artifact verification, JLink image reduction, and multi-stage container assembly.',
        bn: 'জাভা ম্যাভেন বিল্ড লাইফসাইকেল, JLink রানটাইম সংকোচন এবং ডকার ইমেজ অ্যাসেম্বলির TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Java Maven Build Lifecycle, JLink Optimization & Container Packaging

export interface BuildPhaseResult {
  phase: string;
  passed: boolean;
  artifactSizeMb: number;
}

export class JavaBuildPipelineSimulator {
  private phases: BuildPhaseResult[] = [];

  public compileSources(): void {
    console.log('[Maven] Compiling Java source files to bytecode classes...');
    this.phases.push({ phase: 'compile', passed: true, artifactSizeMb: 5 });
  }

  public runTests(): void {
    console.log('[Maven] Executing JUnit 5 unit and integration tests...');
    this.phases.push({ phase: 'test', passed: true, artifactSizeMb: 5 });
  }

  public packageFatJar(): void {
    console.log('[Maven] Shading dependencies into executable fat JAR...');
    this.phases.push({ phase: 'package', passed: true, artifactSizeMb: 35 });
  }

  public runJlinkOptimization(): { standardJdkSize: number; customJreSize: number } {
    const standardJdkSize = 350;
    const customJreSize = 40;
    console.log('[JLink] Stripping unused modules (desktop GUI, corba)...');
    console.log('[JLink] Reduced runtime from ' + standardJdkSize + 'MB to ' + customJreSize + 'MB');
    return { standardJdkSize, customJreSize };
  }

  public assembleDockerContainer(customJreMb: number, fatJarMb: number): number {
    const baseOsMb = 5; // distroless base layer
    const totalImageMb = baseOsMb + customJreMb + fatJarMb;
    console.log('[Docker] Final cloud container image assembled: ' + totalImageMb + 'MB');
    return totalImageMb;
  }
}

// Executing build pipeline demonstration
const pipeline = new JavaBuildPipelineSimulator();
pipeline.compileSources();
pipeline.runTests();
pipeline.packageFatJar();
const { customJreSize } = pipeline.runJlinkOptimization();
const containerSize = pipeline.assembleDockerContainer(customJreSize, 35);
console.log('Final Production Container Size (MB):', containerSize); // 80`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Fat JAR / Uber-JAR',
          def: {
            en: 'Single standalone executable archive bundling compiled application classes and all runtime dependencies.',
            bn: 'একটি একক স্বয়ংসম্পূর্ণ এক্সিকিউটেবল ফাইল যাতে অ্যাপ্লিকেশনের সব কোড এবং লাইব্রেরি একীভূত থাকে।'
          }
        },
        {
          term: 'Maven',
          def: {
            en: 'Industry-standard build automation tool managing dependency resolution, test execution, and deployment artifacts.',
            bn: 'বিশ্বমানের বিল্ড অটোমেশন টুল যা ডিপেন্ডেন্সি রেজোলিউশন, টেস্টিং এবং প্যাকেজিং পরিচালনা করে।'
          }
        },
        {
          term: 'JLink',
          def: {
            en: 'Java tool introduced in Java 9 that links required modules into a custom minimal runtime environment.',
            bn: 'জাভা ৯ এ প্রবর্তিত টুল যা কেবল প্রয়োজনীয় মডিউলগুলো নিয়ে ক্ষুদ্র কাস্টম রানটাইম তৈরি করে।'
          }
        },
        {
          term: 'Multi-Stage Docker Build',
          def: {
            en: 'Docker pattern separating heavy build-time tools from the minimal final production container image.',
            bn: 'ডকার প্যাটার্ন যা বিল্ডের ভারী টুল বাদ দিয়ে শুধু প্রয়োজনীয় ফাইল নিয়ে ক্ষুদ্র প্রোডাকশন ইমেজ তৈরি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fat-jar-manifest-main-class-ex1',
      kind: 'mcq',
      topic: 'fat-jar-manifest-configuration',
      question: {
        en: 'Which configuration entry inside META-INF/MANIFEST.MF allows a JAR to be executed using "java -jar app.jar"?',
        bn: 'META-INF/MANIFEST.MF ফাইলের কোন কনফিগারেশন এন্ট্রির কারণে "java -jar app.jar" কমান্ড দিয়ে একটি JAR সরাসরি চালানো যায়?'
      },
      options: [
        { en: 'Main-Class: com.example.Application', bn: 'ম্যানিফেস্ট এন্ট্রি: Main-Class: com.example.Application' },
        { en: 'Start-File: Application.class', bn: 'স্টার্ট ফাইল: Start-File: Application.class' },
        { en: 'Java-Entry-Script: run.sh', bn: 'স্ক্রিপ্ট এন্ট্রি: Java-Entry-Script: run.sh' },
        { en: 'Root-Execute: true', bn: 'রুট এক্সিকিউট: Root-Execute: true' }
      ],
      answer: 0,
      hint: {
        en: 'The Main-Class manifest attribute specifies the class containing public static void main.',
        bn: 'Main-Class অ্যাট্রিবিউটটি main মেথডযুক্ত ক্লাসের সম্পূর্ণ নাম নির্দেশ করে।'
      },
      explanation: {
        en: 'The JVM reads "Main-Class" from the manifest to locate the public static void main entry point when invoked via java -jar.',
        bn: 'java -jar চালালে JVM ম্যানিফেস্টের Main-Class পড়ে প্রোগ্রামটির প্রবেশদ্বার খুঁজে বের করে।'
      }
    },
    {
      id: 'maven-dependency-scope-test-ex2',
      kind: 'mcq',
      topic: 'maven-dependency-scopes-test',
      question: {
        en: 'What occurs when a library in Maven is declared with "<scope>test</scope>" (such as JUnit or Mockito)?',
        bn: 'ম্যাভেনে কোনো লাইব্রেরিকে "<scope>test</scope>" ঘোষণা করলে (যেমন JUnit বা Mockito) কী ঘটে?'
      },
      options: [
        {
          en: 'It is available only during test compilation and test execution, and is completely omitted from the final production JAR artifact',
          bn: 'এটি কেবল টেস্ট কম্পাইল ও টেস্ট চলার সময় ব্যবহৃত হয় এবং চূড়ান্ত প্রোডাকশন JAR প্যাকেজে এটিকে অন্তর্ভুক্ত করা হয় না'
        },
        {
          en: 'It is compiled into every production Docker container image',
          bn: 'এটি প্রতিটি প্রোডাকশন ডকার ইমেজের সাথে যুক্ত হয়'
        },
        {
          en: 'The Maven build aborts with an error',
          bn: 'ম্যাভেন বিল্ড এরর দিয়ে বন্ধ হয়ে যায়'
        },
        {
          en: 'It deletes all existing unit tests',
          bn: 'এটি সব ইউনিট টেস্ট মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Test scope excludes libraries from production distribution artifacts.',
        bn: 'টেস্ট স্কোপের লাইব্রেরি প্রোডাকশন প্যাকেজ থেকে বাদ দিয়ে ফাইলের সাইজ ছোট রাখে।'
      },
      explanation: {
        en: 'The test scope restricts dependencies to test compilation and execution, keeping production deliverables lean and clean.',
        bn: 'টেস্ট স্কোপ নিশ্চিত করে যে টেস্টিং লাইব্রেরিগুলো প্রোডাকশন কোডে ঢুকে অনাবশ্যক ভারী করবে না।'
      }
    },
    {
      id: 'jlink-custom-runtime-benefits-ex3',
      kind: 'mcq',
      topic: 'jlink-modular-runtime-slimming',
      question: {
        en: 'What is the primary advantage of employing "jlink" to create a custom runtime image for cloud deployments?',
        bn: 'ক্লাউড ডিপ্লয়মেন্টের জন্য কাস্টম রানটাইম ইমেজ তৈরি করতে "jlink" ব্যবহারের প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'It strips unused JDK modules, shrinking runtime footprint from over 350 megabytes to under 40 megabytes for faster startup and minimal attack surface',
          bn: 'এটি অপ্রয়োজনীয় মডিউলগুলো বাদ দিয়ে রানটাইম সাইজ ৩৫০ মেগাবাইট থেকে কমিয়ে ৪০ মেগাবাইটের নিচে নামিয়ে আনে, যা দ্রুত শুরু হয় এবং নিরাপত্তা ঝুঁকি কমায়'
        },
        {
          en: 'It converts Java bytecode directly into Python scripts',
          bn: 'এটি জাভা বাইটকোডকে সরাসরি পাইথন স্ক্রিপ্টে রূপান্তর করে'
        },
        {
          en: 'It eliminates the need for any CPU hardware',
          bn: 'এর ফলে কোনো সিপিইউ হার্ডওয়্যারের প্রয়োজন পড়ে না'
        },
        {
          en: 'It automatically fixes all logical software bugs in code',
          bn: 'এটি কোডের সমস্ত লজিক্যাল ভুল নিজে থেকেই সমাধান করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'JLink creates a modular JVM containing only referenced modules.',
        bn: 'JLink শুধুমাত্র কোডে ব্যবহৃত নির্দিষ্ট মডিউলগুলো নিয়ে অতি ক্ষুদ্র JVM রানটাইম তৈরি করে।'
      },
      explanation: {
        en: 'JLink packages only required modules into a custom JRE, yielding tiny, fast, and secure container images.',
        bn: 'JLink রানটাইমকে হালকা করে তোলে, ফলে ক্লাউডে ইমেজ ডাউনলোড ও স্টার্টআপ অত্যন্ত দ্রুত সম্পন্ন হয়।'
      }
    },
    {
      id: 'docker-multi-stage-build-isolation-ex4',
      kind: 'mcq',
      topic: 'docker-multi-stage-build-cleanliness',
      question: {
        en: 'Why is a multi-stage Docker build recommended for packaging Java cloud microservices?',
        bn: 'জাভা ক্লাউড মাইক্রোসার্ভিস প্যাকেজিংয়ে মাল্টি-স্টেজ ডকার বিল্ড ব্যবহারের পরামর্শ দেওয়া হয় কেন?'
      },
      options: [
        {
          en: 'The build tools (Maven, full JDK) remain isolated in the builder stage, ensuring only the lightweight compiled JAR and minimal JRE reach the final production container',
          bn: 'বিল্ড টুলগুলো (Maven, full JDK) বিল্ডার স্টেজেই বিচ্ছিন্ন থাকে, ফলে চূড়ান্ত প্রোডাকশন কনটেইনারে কেবল হালকা JAR এবং ক্ষুদ্র JRE স্থান পায়'
        },
        {
          en: 'It allows Docker containers to run without any operating system kernel',
          bn: 'এটি ওএস কার্নেল ছাড়াই ডকার কনটেইনার চালানোর সুযোগ দেয়'
        },
        {
          en: 'It automatically backs up all files to personal floppy disks',
          bn: 'এটি স্বয়ংক্রিয়ভাবে সব ফাইল ফ্লপি ডিস্কে ব্যাকআপ রাখে'
        },
        {
          en: 'Multi-stage builds are mandated by international copyright laws',
          bn: 'আন্তর্জাতিক আইন অনুযায়ী মাল্টি-স্টেজ বিল্ড বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multi-stage builds leave compilation tools out of the production image.',
        bn: 'মাল্টি-স্টেজ বিল্ড ভারী কম্পাইলার বাদ দিয়ে শুধু তৈরি হওয়া প্যাকেজটি প্রোডাকশন ইমেজে রাখে।'
      },
      explanation: {
        en: 'Separating the build environment from runtime production images drastically reduces image size and eliminates security vulnerabilities.',
        bn: 'বিল্ড পরিবেশ ও প্রোডাকশন পরিবেশ আলাদা রাখায় ইমেজ অত্যন্ত নিরাপদ এবং হালকা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-jar-serve',
    title: {
      en: 'Packaging, JLink & Deployment Mastery Quiz',
      bn: 'প্যাকেজিং, JLink এবং ডিপ্লয়মেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-docker-caching-maven-dependencies',
        kind: 'mcq',
        topic: 'docker-layer-caching-dependencies',
        question: {
          en: 'In a Dockerfile for a Maven Java project, why should "COPY pom.xml ." and "mvn dependency:go-offline" execute BEFORE "COPY src ./src"?',
          bn: 'ম্যাভেন জাভা প্রজেক্টের Dockerfile এ "COPY src ./src" এর পূর্বে "COPY pom.xml ." এবং "mvn dependency:go-offline" চালানো উচিত কেন?'
        },
        options: [
          {
            en: 'To leverage Docker layer caching: dependencies are downloaded once and cached as long as pom.xml does not change, avoiding slow re-downloads on every source code edit',
            bn: 'ডকার লেয়ার ক্যাশিং কাজে লাগানোর জন্য: pom.xml অপরিবর্তিত থাকলে সব ডিপেন্ডেন্সি ক্যাশ হয়ে থাকে এবং কোড বদলালেও বারবার নতুন করে ডাউনলোড করার সময় নষ্ট হয় না'
          },
          {
            en: 'Because Docker fails to build if source files are copied first',
            bn: 'কারণ সোর্স কোড আগে কপি করলে ডকার বিল্ড হতে পারে না'
          },
          {
            en: 'pom.xml must always be compiled into machine code before src files',
            bn: 'সোর্স ফাইলের আগে pom.xml কে মেশিন কোডে কম্পাইল করা জরুরি'
          },
          {
            en: 'It encrypts the source code repository',
            bn: 'এটি সোর্স কোডের রিপোজিটরি এনক্রিপ্ট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Docker caches layers based on file change detection.',
          bn: 'ডকার ফাইলের পরিবর্তনের ওপর ভিত্তি করে লেয়ার ক্যাশ করে বিল্ডের সময় বাঁচায়।'
        },
        explanation: {
          en: 'Separating dependency resolution from source code copy maximizes Docker build cache reuse, drastically cutting build duration.',
          bn: 'ডিপেন্ডেন্সি আগে ডাউনলোড করে ক্যাশ রাখলে যেকোনো কোড পরিবর্তনে বিল্ড সেকেন্ডের মধ্যে সম্পন্ন হয়।'
        }
      },
      {
        id: 'quiz-jvm-container-memory-limits-cgroups',
        kind: 'mcq',
        topic: 'jvm-cgroups-container-memory-awareness',
        question: {
          en: 'What JVM flag or feature ensures modern Java (Java 10+) correctly respects container memory limits (cgroups) inside Kubernetes without getting OOMKilled?',
          bn: 'কুবারনেটিসে OOMKilled না হয়ে আধুনিক জাভা (জাভা ১০+) কনটেইনারের মেমোরি লিমিট (cgroups) সঠিকভাবে অনুসরণ করছে তা কোন ফিচার নিশ্চিত করে?'
        },
        options: [
          {
            en: 'UseContainerSupport (enabled by default in modern JVMs) along with -XX:MaxRAMPercentage to adaptively scale heap within container cgroup limits',
            bn: 'UseContainerSupport (আধুনিক JVM-এ ডিফল্ট সক্রিয়) এবং -XX:MaxRAMPercentage যা কনটেইনারের cgroup সীমার মধ্যে স্বয়ংক্রিয়ভাবে হিপ মেমোরি বরাদ্দ করে'
          },
          {
            en: '-XX:DisableMemoryProtection',
            bn: '-XX:DisableMemoryProtection'
          },
          {
            en: 'Setting the JVM heap size to infinite',
            bn: 'JVM হিপ সাইজ অসীম হিসেবে নির্ধারণ করা'
          },
          {
            en: 'Running Java as the root operating system user',
            bn: 'জাভাকে রুট ইউজার হিসেবে রান করানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'UseContainerSupport makes the JVM aware of cgroup memory and CPU limits.',
          bn: 'UseContainerSupport ফিচারটি JVM কে কনটেইনারের র্যাম ও সিপিইউ সীমা সম্পর্কে সচেতন করে।'
        },
        explanation: {
          en: 'Modern Java includes native container support, detecting cgroup limits instead of physical host RAM, preventing out-of-memory kernel kills.',
          bn: 'এটি হোস্টের মোট মেমোরি না দেখে কনটেইনারের নির্দিষ্ট মেমোরি সীমা মেনে হিপ বরাদ্দ করে।'
        }
      },
      {
        id: 'quiz-cds-class-data-sharing-startup',
        kind: 'mcq',
        topic: 'appcds-class-data-sharing-startup-time',
        question: {
          en: 'How does Application Class Data Sharing (AppCDS) improve Java application startup time in serverless and container environments?',
          bn: 'সার্ভারলেস এবং কনটেইনার সিস্টেমে Application Class Data Sharing (AppCDS) কীভাবে জাভা অ্যাপ্লিকেশনের শুরুর গতি বাড়ায়?'
        },
        options: [
          {
            en: 'It pre-parses and dumps classes into a memory-mapped archive file at build time, allowing the JVM to map them directly into memory at startup without parsing overhead',
            bn: 'এটি বিল্ড করার সময়ই ক্লাসগুলোকে পার্স করে মেমোরি-ম্যাপড আর্কাইভে সংরক্ষণ করে, ফলে শুরুতে JVM কোনো অতিরিক্ত পার্সিং ছাড়াই সরাসরি তা লোড করতে পারে'
          },
          {
            en: 'It disables all garbage collection during startup',
            bn: 'এটি শুরুর সময় গারবেজ কালেকশন সম্পূর্ণ বন্ধ রাখে'
          },
          {
            en: 'It deletes uncalled methods from the compiled bytecode',
            bn: 'এটি অপ্রয়োজনীয় মেথডগুলো বাইটকোড থেকে মুছে ফেলে'
          },
          {
            en: 'It converts Java into C++ at startup',
            bn: 'এটি শুরুর সময় জাভাকে সি++ এ রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'AppCDS pre-processes classes into a memory-mapped shared archive.',
          bn: 'AppCDS ক্লাসগুলোকে আগেই প্রসেস করে শেয়ার্ড মেমোরি ফাইলে প্রস্তুত রাখে।'
        },
        explanation: {
          en: 'AppCDS dumps shared class metadata into a fast archive file, significantly reducing class verification and loading times on cold starts.',
          bn: 'শেয়ার্ড আর্কাইভ ফাইল সরাসরি মেমোরিতে ম্যাপ হওয়ায় কোল্ড স্টার্টের সময় নাটকীয়ভাবে কমে যায়।'
        }
      },
      {
        id: 'quiz-graalvm-native-image-aot-tradeoff',
        kind: 'mcq',
        topic: 'graalvm-native-image-aot-tradeoffs',
        question: {
          en: 'What is the trade-off when compiling Java to a standalone binary with GraalVM Native Image Ahead-of-Time (AOT) compilation?',
          bn: 'GraalVM Native Image Ahead-of-Time (AOT) দিয়ে জাভাকে সরাসরি বাইনারিতে রূপান্তর করার সুবিধা ও অসুবিধার সমন্বয় কোনটি?'
        },
        options: [
          {
            en: 'Instant sub-millisecond startup and near-zero memory footprint, traded off against longer build times and restricted dynamic reflection/runtime bytecode generation',
            bn: 'মুহূর্তের মধ্যে মিলি-সেকেন্ডে স্টার্টআপ এবং অতি সামান্য মেমোরি খরচ, তবে বিনিময়ে লম্বা বিল্ড সময় এবং ডায়নামিক রিফ্লেকশন ব্যবহারে কঠোর সীমাবদ্ধতা থাকে'
          },
          {
            en: 'Zero internet connectivity is permitted during runtime',
            bn: 'রানটাইমে কোনো ইন্টারনেট সংযোগ রাখা যায় না'
          },
          {
            en: 'The application runs 10 times slower than Python',
            bn: 'অ্যাপ্লিকেশন পাইথনের চেয়ে ১০ গুণ ধীরগতির হয়ে যায়'
          },
          {
            en: 'Native images only run on Windows 95 operating systems',
            bn: 'নেটিভ ইমেজ কেবল উইন্ডোজ ৯৫ সিস্টেমে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'GraalVM AOT provides instant startup but requires build-time closed-world reflection configuration.',
          bn: 'GraalVM দ্রুত স্টার্টআপ দিলেও বিল্ডের সময় রিফ্লেকশনের জন্য বিশেষ কনফিগারেশন প্রয়োজন হয়।'
        },
        explanation: {
          en: 'Native Image produces immediate startup and low memory usage, but requires closed-world analysis and configuration for reflection and dynamic proxies.',
          bn: 'AOT কম্পাইলেশন মুহূর্তে অ্যাপ চালু করে এবং মেমোরি বাঁচায়, তবে ডায়নামিক রিফ্লেকশনের ক্ষেত্রে পূর্বপ্রস্তুতি লাগে।'
        }
      }
    ]
  }
};
