import type { Lesson } from '../../../lib/types';

export const TheScalaReleaseLesson: Lesson = {
  slug: 'the-scala-release',
  tech: 'scala',
  title: {
    en: 'Production Scala & Capstone: Fat JARs, GraalVM & Cloud Microservices',
    bn: 'প্রোডাকশন স্কালা এবং ক্যাপস্টোন: ফ্যাট জার, GraalVM ও ক্লাউড মাইক্রোসার্ভিস'
  },
  summary: {
    en: 'Deploy production Scala services: assembly fat JARs with sbt-assembly, compiling ahead-of-time native binaries with GraalVM, structuring Docker microservices, and implementing resilient Akka/Pekko systems.',
    bn: 'প্রোডাকশন স্কালা সার্ভিস ডেপ্লয়: sbt-assembly দিয়ে ফ্যাট জার (fat JAR), GraalVM দিয়ে নেটিভ বাইনারি কম্পাইলেশন, ডকার মাইক্রোসার্ভিস গঠন এবং Akka/Pekko দিয়ে সহনশীল ডিস্ট্রিবিউটেড সিস্টেম তৈরি।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'packaging-fat-jars',
      text: {
        en: '1. Production Packaging with sbt-assembly',
        bn: '১. sbt-assembly দিয়ে প্রোডাকশন ফ্যাট জার প্যাকেজিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When deploying Scala services to cloud environments, you need a self-contained deployable artifact. The industry standard tool is the sbt-assembly plugin, which bundles your compiled bytecode along with all transitive dependency libraries into a single executable "fat JAR" (uber-JAR).',
        bn: 'ক্লাউড পরিবেশে স্কালা সার্ভিস ডেপ্লয় করার জন্য একটি স্বয়ংসম্পূর্ণ ও এক্সিকিউটেবল আর্টিফ্যাক্ট প্রয়োজন হয়। এর মানসম্মত সমাধান হলো sbt-assembly প্লাগইন, যা আপনার কম্পাইল্ড বাইটকোড এবং সমস্ত লাইব্রেরি ডিপেন্ডেন্সিকে একত্রিত করে একটিমাত্র এক্সিকিউটেবল "ফ্যাট জার" (fat JAR)-এ রূপান্তর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A critical engineering responsibility when assembling fat JARs is configuring the assemblyMergeStrategy in build.sbt to resolve conflicts between duplicated resource files across third-party dependencies (such as merging Akka reference.conf files or discarding META-INF signature files).',
        bn: 'ফ্যাট জার তৈরির সময় একটি অত্যন্ত গুরুত্বপূর্ণ কাজ হলো build.sbt ফাইলে assemblyMergeStrategy কনফিগার করা; এর মাধ্যমে বিভিন্ন লাইব্রেরির মধ্যে তৈরি হওয়া ফাইল দ্বন্দ্ব (যেমন Akka এর reference.conf একত্রিত করা কিংবা META-INF এর অপ্রয়োজনীয় ফাইল বাদ দেওয়া) সঠিকভাবে সমাধান করা হয়।'
      }
    },
    {
      type: 'visual',
      id: 'production-scala-diagram',
      title: {
        en: 'Production Scala Deployment: Fat JAR vs GraalVM Native Image',
        bn: 'প্রোডাকশন স্কালা ডেপ্লয়মেন্ট: ফ্যাট জার বনাম GraalVM নেটিভ ইমেজ'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Production Scala Deployment Architectures</text>' +
          '<!-- Column 1: sbt-assembly Fat JAR -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. sbt-assembly (FAT JAR ON JVM)</text>' +
            '<rect x="15" y="45" width="330" height="90" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="10" font-weight="bold">Single Executable JAR Archive:</text>' +
            '<text x="25" y="88" fill="#cbd5e1" font-size="9">&#x2022; Application classes + all dependency JARs</text>' +
            '<text x="25" y="106" fill="#facc15" font-size="9" font-family="monospace">java -jar app-assembly-1.0.jar</text>' +
            '<rect x="15" y="145" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="168" fill="#10b981" font-size="10" font-weight="bold">JVM JIT Compilation Strengths:</text>' +
            '<text x="25" y="188" fill="#cbd5e1" font-size="9">&#x2022; HotSpot JIT optimizes hot loops dynamically</text>' +
            '<text x="25" y="206" fill="#cbd5e1" font-size="9">&#x2022; Peak throughput exceeds C++ for long-running jobs</text>' +
            '<rect x="15" y="240" width="330" height="70" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="262" fill="#94a3b8" font-size="9">Baseline RAM: ~300 MB JVM Heap</text>' +
            '<text x="25" y="280" fill="#94a3b8" font-size="9">Startup Latency: ~2.5 seconds</text>' +
          '</g>' +
          '<!-- Column 2: GraalVM Native Image -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. GraalVM AOT NATIVE BINARY</text>' +
            '<rect x="15" y="45" width="330" height="90" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#34d399" font-size="10" font-weight="bold">Ahead-of-Time (AOT) Compilation:</text>' +
            '<text x="25" y="88" fill="#cbd5e1" font-size="9">&#x2022; Direct machine code binary (ELF / Mach-O)</text>' +
            '<text x="25" y="106" fill="#facc15" font-size="9" font-family="monospace">./my-scala-service (No JVM required!)</text>' +
            '<rect x="15" y="145" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="168" fill="#fbbf24" font-size="10" font-weight="bold">Cloud-Native Serverless &amp; K8s:</text>' +
            '<text x="25" y="188" fill="#cbd5e1" font-size="9">&#x2022; Instant cold-start startup in &lt; 15ms</text>' +
            '<text x="25" y="206" fill="#cbd5e1" font-size="9">&#x2022; Zero JIT warm-up latency; perfect for AWS Lambda</text>' +
            '<rect x="15" y="240" width="330" height="70" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="262" fill="#34d399" font-size="9" font-weight="bold">Baseline RAM: ~25 MB (10x smaller)</text>' +
            '<text x="25" y="280" fill="#34d399" font-size="9" font-weight="bold">Startup Latency: ~12 milliseconds</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'graalvm-native-images',
      text: {
        en: '2. GraalVM Native Images for Sub-15ms Startup',
        bn: '২. ১৫ মিলিসেকেন্ডের কম স্টার্টআপের জন্য GraalVM নেটিভ ইমেজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For serverless environments like AWS Lambda or fast autoscaling Kubernetes clusters, standard JVM startup times (2 to 5 seconds) can be prohibitive. GraalVM Native Image analyzes the reachable code paths of your Scala application at build-time and compiles it ahead-of-time (AOT) into a standalone native machine binary.',
        bn: 'AWS Lambda বা দ্রুত অটোরিফ্রেশ হওয়া কুবারনেটিস ক্লাস্টারে প্রথাগত জেভিএমের ২ থেকে ৫ সেকেন্ডের স্টার্টআপ সময় অনেক বিলম্ব তৈরি করতে পারে। GraalVM Native Image বিল্ডের সময় আপনার স্কালা কোড বিশ্লেষণ করে একটি স্বয়ংসম্পূর্ণ নেটিভ মেশিন বাইনারি তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Native binaries require no JVM runtime, boot up in under 15 milliseconds, and consume as little as 25 megabytes of baseline RAM, achieving 10-fold operational cost savings in high-density container environments.',
        bn: 'নেটিভ বাইনারি চালাতে কোনো জেভিএম লাগে না, এটি ১৫ মিলিসেকেন্ডের কম সময়ে চালু হয় এবং মাত্র ২৫ মেগাবাইট র‍্যাম ব্যবহার করে, ফলে ক্লাউড কন্টেইনারের খরচ বিপুলভাবে সাশ্রয় হয়।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '3. Production Deployment Engine Simulator in TypeScript',
        bn: '৩. TypeScript এ প্রোডাকশন ডেপ্লয়মেন্ট ইঞ্জিন সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models production deployment metrics, comparing traditional JVM fat JAR execution against GraalVM native binary startup performance, memory footprints, and request handling:',
        bn: 'নিচের TypeScript প্রোগ্রামটি প্রোডাকশন ডেপ্লয়মেন্ট মডেল করে, যেখানে প্রথাগত জেভিএম ফ্যাট জার বনাম GraalVM নেটিভ বাইনারির স্টার্টআপ গতি, মেমরি ব্যবহার এবং রিকোয়েস্ট হ্যান্ডলিং তুলনা করা হয়েছে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Scala production deployment: JVM fat JAR vs GraalVM AOT native binary metrics.',
        bn: 'স্কালা প্রোডাকশন ডেপ্লয়মেন্ট: জেভিএম ফ্যাট জার বনাম GraalVM AOT নেটিভ বাইনারি মেট্রিক্সের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Production Scala Deployment: JVM Fat JAR vs GraalVM Native Binary

interface DeploymentTarget {
  name: string;
  startupLatencyMs: number;
  memoryFootprintMb: number;
  requiresJvm: boolean;
  peakRps: number;
}

class ScalaProductionMetrics {
  static evaluate(target: DeploymentTarget, incomingRequests: number) {
    const totalProcessingTimeSec = (incomingRequests / target.peakRps).toFixed(2);
    return {
      deployment: target.name,
      coldBootMs: target.startupLatencyMs,
      ramUsageMb: target.memoryFootprintMb,
      processingTimeForRequests: totalProcessingTimeSec + 's',
      standaloneBinary: !target.requiresJvm
    };
  }
}

// 1. Standard JVM Fat JAR with HotSpot JIT
const jvmFatJar: DeploymentTarget = {
  name: 'JVM Fat JAR (sbt-assembly)',
  startupLatencyMs: 2400,
  memoryFootprintMb: 320,
  requiresJvm: true,
  peakRps: 25000 // JIT achieves extreme peak throughput
};

// 2. GraalVM AOT Native Binary
const graalVmNative: DeploymentTarget = {
  name: 'GraalVM Native Image Binary',
  startupLatencyMs: 12,
  memoryFootprintMb: 28,
  requiresJvm: false,
  peakRps: 21000
};

// Demonstration
const jvmReport = ScalaProductionMetrics.evaluate(jvmFatJar, 100000);
const nativeReport = ScalaProductionMetrics.evaluate(graalVmNative, 100000);

console.log('--- JVM Fat JAR Deployment ---');
console.log('Cold Start Latency: ' + jvmReport.coldBootMs + ' ms'); // -> 2400 ms
console.log('Baseline RAM: ' + jvmReport.ramUsageMb + ' MB'); // -> 320 MB
console.log('Requires JVM Installed: ' + jvmFatJar.requiresJvm); // -> true

console.log('--- GraalVM Native Binary Deployment ---');
console.log('Cold Start Latency: ' + nativeReport.coldBootMs + ' ms'); // -> 12 ms
console.log('Baseline RAM: ' + nativeReport.ramUsageMb + ' MB'); // -> 28 MB
console.log('Standalone Binary (No JVM): ' + nativeReport.standaloneBinary); // -> true

const startupSpeedup = (jvmReport.coldBootMs / nativeReport.coldBootMs).toFixed(1);
console.log('GraalVM Native Startup Speedup: ' + startupSpeedup + 'x faster'); // -> 200.0x faster`
    }
  ],
  exercises: [
    {
      id: 'rel-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is a "fat JAR" (uber-JAR) created by the sbt-assembly plugin in Scala?',
        bn: 'স্কালাতে sbt-assembly প্লাগইন দিয়ে তৈরি হওয়া "ফ্যাট জার" (fat JAR বা uber-JAR) কী?'
      },
      options: [
        {
          en: 'A single self-contained executable JAR file containing your compiled project classes plus all extracted dependency libraries',
          bn: 'একটি একক স্বয়ংসম্পূর্ণ এক্সিকিউটেবল জার ফাইল যার মধ্যে আপনার কম্পাইল্ড ক্লাস এবং تمام ডিপেন্ডেন্সি লাইব্রেরি একসাথে থাকে'
        },
        {
          en: 'A JAR file that exceeds 10 gigabytes of size on disk',
          bn: 'একটি জার ফাইল যার আকার হার্ডডিস্কে ১০ গিগাবাইটের বেশি'
        },
        {
          en: 'A compressed video file recording the compilation process',
          bn: 'কম্পাইলেশন প্রক্রিয়া রেকর্ডকারী একটি সংকুচিত ভিডিও ফাইল'
        },
        {
          en: 'An encrypted backup file only readable by Apple macOS',
          bn: 'কেবল অ্যাপল ম্যাকওএস দিয়ে পড়া যায় এমন একটি এনক্রিপ্ট করা ফাইল'
        }
      ],
      answer: 0,
      hint: {
        en: 'A fat JAR packages application code and all dependencies into 1 file.',
        bn: 'ফ্যাট জার অ্যাপের কোড ও تمام লাইব্রেরিকে ১ টি ফাইলে প্যাক করে।'
      },
      explanation: {
        en: 'sbt-assembly unpacks all dependency JARs and repackages them alongside your application classes into a single standalone executable archive.',
        bn: 'sbt-assembly تمام লাইব্রেরিকে আনপ্যাক করে আপনার অ্যাপের ক্লাসের সাথে একটি একক এক্সিকিউটেবল জার ফাইলে সাজিয়ে দেয়।'
      }
    },
    {
      id: 'rel-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the primary operational benefit of compiling a Scala microservice into a GraalVM Native Image binary?',
        bn: 'একটি স্কালা মাইক্রোসার্ভিসকে GraalVM Native Image বাইনারিতে কম্পাইল করার প্রধান অপারেশনাল সুবিধা কী?'
      },
      options: [
        {
          en: 'Near-instantaneous startup times (under 15ms) and minimal baseline RAM footprint without requiring a JVM installed on the host',
          bn: '১৫ মিলিসেকেন্ডের কম দ্রুত স্টার্টআপ এবং অত্যন্ত কম র‍্যাম ব্যবহার, যার জন্য হোস্টে কোনো জেভিএম ইনস্টল থাকার প্রয়োজন নেই'
        },
        {
          en: 'It completely disables network firewalls for higher throughput',
          bn: 'উচ্চগতির জন্য এটি সমস্ত নেটওয়ার্ক ফায়ারওয়াল বন্ধ করে দেয়'
        },
        {
          en: 'It writes the application code in pure HTML5',
          bn: 'এটি অ্যাপ্লিকেশনের কোড খাঁটি HTML5 এ লিখে ফেলে'
        },
        {
          en: 'It allows the program to run with zero CPU usage',
          bn: 'এটি প্রোগ্রামকে শূন্য শতাংশ সিপিইউ ব্যবহার করে চলতে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ahead-of-time native compilation provides sub-second boot times.',
        bn: 'নেটিভ কম্পাইলেশন মিলিসেকেন্ডের মধ্যে অত্যন্ত দ্রুত সার্ভিস চালু করে।'
      },
      explanation: {
        en: 'GraalVM compiles bytecode directly to native machine code ahead-of-time (AOT), enabling lightning-fast container cold starts and minimal memory usage.',
        bn: 'GraalVM সরাসরি মেশিন কোডে বাইনারি তৈরি করে, ফলে জেভিএমের ওয়ার্ম-আপ ছাড়াই তাৎক্ষণিকভাবে সার্ভিস রান হয়।'
      }
    },
    {
      id: 'rel-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why is assemblyMergeStrategy critical when building sbt-assembly archives for enterprise Scala applications?',
        bn: 'এন্টারপ্রাইজ স্কালা অ্যাপ্লিকেশনের জন্য sbt-assembly দিয়ে বিল্ড তৈরির সময় assemblyMergeStrategy কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It dictates how to resolve duplicate file conflicts (such as reference.conf or META-INF files) across third-party dependency JARs',
          bn: 'এটি বিভিন্ন লাইব্রেরির মধ্যে তৈরি হওয়া ডুপ্লিকেট ফাইল দ্বন্দ্ব (যেমন reference.conf বা META-INF) কীভাবে সমাধান হবে তা নির্ধারণ করে'
        },
        {
          en: 'It automatically merges git branches without human intervention',
          bn: 'এটি মানুষের সাহায্য ছাড়াই স্বয়ংক্রিয়ভাবে গিট ব্রাঞ্চ মার্জ করে'
        },
        {
          en: 'It compresses JPEG images found inside resource folders',
          bn: 'এটি রিসোর্স ফোল্ডারের ভেতরের JPEG ছবি কম্প্রেস করে'
        },
        {
          en: 'It checks credit card numbers for billing verification',
          bn: 'এটি বিলিং যাচাইয়ের জন্য ক্রেডিট কার্ড নম্বর চেক করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Merge strategy resolves conflicting files from multiple dependencies.',
        bn: 'মার্জ স্ট্র্যাটেজি একাধিক ডিপেন্ডেন্সির মধ্যে একই নামের ফাইলের দ্বন্দ্ব মেটায়।'
      },
      explanation: {
        en: 'When unpacking dozens of JARs, identical files (like Akka configuration files or license files) collide. The merge strategy instructs sbt whether to merge, discard, or prioritize files.',
        bn: 'একাধিক লাইব্রেরি থেকে একই নামের ফাইল আসলে মার্জ স্ট্র্যাটেজি নির্দেশ করে কোনটি রাখতে হবে এবং কোনটি বাদ দিতে হবে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-scala-release',
    title: {
      en: 'Production Scala and Capstone Quiz',
      bn: 'প্রোডাকশন স্কালা এবং ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'rel-q1',
        kind: 'mcq',
        question: {
          en: 'In containerized production architectures, why are multi-stage Dockerfiles recommended for Scala projects?',
          bn: 'কনটেইনারাইজড প্রোডাকশন সিস্টেমে স্কালা প্রজেক্টের জন্য মাল্টি-স্টেজ ডকারফাইল কেন সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'They keep heavy build tools (sbt, compilers, caches) out of the final runtime image, producing compact and secure production containers',
            bn: 'তারা চূড়ান্ত রানটাইম ইমেজ থেকে ভারী বিল্ড টুল (sbt, কম্পাইলার, ক্যাশ) বাদ রেখে হালকা ও নিরাপদ প্রোডাকশন কনটেইনার তৈরি করে'
          },
          {
            en: 'They allow Docker to run on Apple watches',
            bn: 'তারা অ্যাপল ওয়াচে ডকার রান করার সুযোগ দেয়'
          },
          {
            en: 'They double the download speed of the internet connection',
            bn: 'তারা ইন্টারনেট কানেকশনের ডাউনলোডের গতি দ্বিগুণ করে দেয়'
          },
          {
            en: 'They convert all Scala code to JavaScript at runtime',
            bn: 'তারা রানটাইমে تمام স্কালা কোডকে জাভাস্ক্রিপ্টে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multi-stage separates build tooling from the lean runtime artifact.',
          bn: 'মাল্টি-স্টেজ বিল্ড পরিবেশ থেকে হালকা রানটাইম পরিবেশকে আলাদা রাখে।'
        },
        explanation: {
          en: 'Multi-stage builds compile code in a heavy JDK + sbt builder stage, then copy only the compiled fat JAR or native binary into a lean distroless/JRE image for deployment.',
          bn: 'মাল্টি-স্টেজ বিল্ডের মাধ্যমে ভারী বিল্ড টুল বাদ দিয়ে কেবল এক্সিকিউটেবল ফাইলটি নিয়ে খুব ছোট ও নিরাপদ কনটেইনার তৈরি করা যায়।'
        }
      },
      {
        id: 'rel-q2',
        kind: 'mcq',
        question: {
          en: 'What is the primary advantage of HotSpot JVM execution over ahead-of-time native compilation for high-throughput, 24/7 server workloads?',
          bn: 'সার্বক্ষণিক চলা উচ্চগতির সার্ভার ওয়ার্কলোডের জন্য GraalVM নেটিভ কম্পাইলেশনের চেয়ে হটস্পট জেভিএম এক্সিকিউশনের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'Adaptive JIT compilation uses runtime profiling to aggressively inline and optimize hot execution paths, often achieving higher peak throughput',
            bn: 'অ্যাডাপ্টিভ JIT কম্পাইলেশন রানটাইম প্রোফাইলিং ব্যবহার করে ঘনঘন চলা পাথগুলোকে অপ্টিমাইজ করে সর্বোচ্চ থ্রুপুট নিশ্চিত করতে পারে'
          },
          {
            en: 'JVM execution consumes zero CPU cycles',
            bn: 'জেভিএম এক্সিকিউশনে কোনো সিপিইউ শক্তি ব্যয় হয় না'
          },
          {
            en: 'JVM applications never need to be restarted for memory reasons',
            bn: 'মেমরির কারণে জেভিএম অ্যাপ্লিকেশন কখনোই রিস্টার্ট করতে হয় না'
          },
          {
            en: 'The JVM compiles directly to Python bytecode',
            bn: 'জেভিএম সরাসরি পাইথন বাইটকোডে কম্পাইল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'JIT compilation optimizes based on actual runtime workload characteristics.',
          bn: 'JIT কম্পাইলেশন বাস্তব কাজের চাপের ওপর ভিত্তি করে কোড অপ্টিমাইজ করে।'
        },
        explanation: {
          en: 'The HotSpot JIT compiler continuously inspects running execution paths, inlining methods and compiling hot machine loops for maximum steady-state throughput.',
          bn: 'HotSpot JIT কম্পাইলার দীর্ঘক্ষণ চলা অ্যাপ্লিকেশনে বাস্তব ডাটার ওপর ভিত্তি করে সর্বোচ্চ পারফরম্যান্স নিশ্চিত করে।'
        }
      },
      {
        id: 'rel-q3',
        kind: 'mcq',
        question: {
          en: 'Which popular Scala library describes HTTP API endpoints as first-class, type-safe Scala values that can auto-generate OpenAPI/Swagger documentation?',
          bn: 'কোন জনপ্রিয় স্কালা লাইব্রেরিটি HTTP API এন্ডপয়েন্টকে টাইপ-নিরাপদ মান হিসেবে প্রকাশ করে এবং স্বয়ংক্রিয়ভাবে OpenAPI/Swagger ডকুমেন্টেশন তৈরি করে?'
        },
        options: [
          {
            en: 'Tapir',
            bn: 'Tapir (ট্যাপির)'
          },
          {
            en: 'HtmlGenerator',
            bn: 'HtmlGenerator'
          },
          {
            en: 'SwaggerScript',
            bn: 'SwaggerScript'
          },
          {
            en: 'ApiCurl',
            bn: 'ApiCurl'
          }
        ],
        answer: 0,
        hint: {
          en: 'Named after the animal tapir (tapir-core).',
          bn: 'ট্যাপির (Tapir) নামক প্রাণীর নামে তৈরি লাইব্রেরি।'
        },
        explanation: {
          en: 'Tapir allows developers to describe endpoints as immutable values, decoupling API specification from server execution while automatically generating OpenAPI docs.',
          bn: 'Tapir এপিআই এন্ডপয়েন্টগুলোকে টাইপ-নিরাপদ ভ্যালু হিসেবে সংজ্ঞায়িত করে স্বয়ংক্রিয় সোয়াগার বা ওপেন-এপিআই ডকুমেন্টেশন বানায়।'
        }
      },
      {
        id: 'rel-q4',
        kind: 'mcq',
        question: {
          en: 'What JVM garbage collector is typically recommended for multi-gigabyte heap enterprise Scala services requiring sub-10ms pause latencies?',
          bn: '১০ মিলিসেকেন্ডের কম বিরতি নিশ্চিত করতে বিশাল হিপ বিশিষ্ট এন্টারপ্রাইজ স্কালা সার্ভিসের জন্য সাধারণত কোন জেভিএম গার্বেজ কালেক্টর সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'ZGC or Shenandoah (ultra-low-latency concurrent garbage collectors)',
            bn: 'ZGC অথবা Shenandoah (আল্ট্রা-লো-লেটেন্সি কনকারেন্ট গার্বেজ কালেক্টর)'
          },
          {
            en: 'The Serial GC from 1998',
            bn: '১৯৯৮ সালের সিরিয়াল GC'
          },
          {
            en: 'Disabling the garbage collector with -Xno-gc',
            bn: '-Xno-gc দিয়ে গার্বেজ কালেকশন বন্ধ করে দেওয়া'
          },
          {
            en: 'Allocating all memory to swap partition on disk',
            bn: 'সমস্ত মেমরি ডিস্কের সোয়াপ পার্টিশনে বরাদ্দ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern low-latency collectors perform concurrent compaction.',
          bn: 'আধুনিক লো-লেটেন্সি কালেক্টরগুলো কোনো কাজ না থামিয়েই সমান্তরালে মেমরি পরিষ্কার করে।'
        },
        explanation: {
          en: 'ZGC and Shenandoah are concurrent, generational garbage collectors that perform compaction concurrently with thread execution, keeping pause times under 10ms.',
          bn: 'ZGC এবং Shenandoah অ্যাপ্লিকেশনকে না থামিয়ে সমান্তরালে মেমরি কম্প্যাক্ট করে বিরতির সময় মাত্র কয়েক মিলিসেকেন্ডে নামিয়ে আনে।'
        }
      },
      {
        id: 'rel-q5',
        kind: 'mcq',
        question: {
          en: 'What fundamental design principle guarantees that Scala services remain resilient under heavy distributed loads?',
          bn: 'কোন মৌলিক ডিজাইন নীতি ভারী ডিস্ট্রিবিউটেড চাপের মধ্যেও স্কালা সার্ভিসগুলোকে সহনশীল ও নির্ভরযোগ্য রাখে?'
        },
        options: [
          {
            en: 'Immutability by default, pure functions without hidden side-effects, and explicit failure modeling with Either, Try, and Option',
            bn: 'ডিফল্ট ইমিউটেবিলিটি, পার্শ্বপ্রতিক্রিয়াহীন বিশুদ্ধ ফাংশন এবং Either, Try ও Option দিয়ে স্পষ্ট ত্রুটি পরিচালনা'
          },
          {
            en: 'Using global mutable static variables for all application state',
            bn: 'সমস্ত স্টেট পরিচালনার জন্য গ্লোবাল মিউটেবল স্ট্যাটিক ভেরিয়েবল ব্যবহার'
          },
          {
            en: 'Catching all exceptions with catch (e: Throwable) and doing nothing',
            bn: 'تمام এক্সেপশন ধরে কোনো ব্যবস্থা না নিয়ে চুপ থাকা'
          },
          {
            en: 'Restarting the computer server every 5 minutes',
            bn: 'প্রতি ৫ মিনিট পর পর কম্পিউটার সার্ভার রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Immutability and typed error modeling guarantee software resilience.',
          bn: 'ইমিউটেবিলিটি এবং টাইপযুক্ত ত্রুটি ব্যবস্থাপনাই সফটওয়্যারকে শক্তিশালী রাখে।'
        },
        explanation: {
          en: 'Combining immutability, thread-safe value sharing, pure functional pipelines, and monadic error containers (Either/Try/Option) ensures enterprise systems scale reliably with zero surprise state corruption.',
          bn: 'ইমিউটেবিলিটি এবং টাইপ-নিরাপদ এরর হ্যান্ডলিংয়ের যৌথ প্রয়োগ স্কালা সার্ভিসগুলোকে অত্যন্ত শক্তিশালী ও নির্ভরযোগ্য করে তোলে।'
        }
      }
    ]
  }
};
