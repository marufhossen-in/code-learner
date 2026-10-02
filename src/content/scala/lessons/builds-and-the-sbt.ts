import type { Lesson } from '../../../lib/types';

export const BuildsAndTheSbtLesson: Lesson = {
  slug: 'builds-and-the-sbt',
  tech: 'scala',
  title: {
    en: 'Build Tooling with sbt: Multi-Module Projects & Dependencies',
    bn: 'sbt দিয়ে বিল্ড টুলিং: মাল্টি-মডিউল প্রজেক্ট ও ডিপেন্ডেন্সি'
  },
  summary: {
    en: 'Master the Scala Build Tool (sbt): project layout (src/main/scala), build.sbt declarative DSL, dependency resolution (%% cross-versioning), multi-module architectures, and continuous testing.',
    bn: 'স্কালা বিল্ড টুল (sbt) এ দক্ষতা: প্রজেক্ট লেআউট (src/main/scala), build.sbt ডিক্লেয়ারেটিভ DSL, ডিপেন্ডেন্সি রেজোলিউশন (%% ক্রস-ভার্সনিং), মাল্টি-মডিউল আর্কিটেকচার এবং কন্টিনিউয়াস টেস্টিং।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'sbt-fundamentals',
      text: {
        en: '1. What is sbt? The Standard Scala Build Tool',
        bn: '১. sbt কী? মানসম্মত স্কালা বিল্ড টুল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you develop professional Scala software, sbt (Scala Build Tool) orchestrates your compilation, testing, dependency resolution, and deployment pipelines. Built specifically for Scala and Java, sbt maintains an in-memory incremental compiler daemon called Zinc that recompiles only modified source files in sub-second times.',
        bn: 'যখন আপনি পেশাদার স্কালা সফটওয়্যার তৈরি করেন, sbt (Scala Build Tool) আপনার কম্পাইলেশন, টেস্টিং, ডিপেন্ডেন্সি এবং ডেপ্লয়মেন্ট পাইপলাইন পরিচালনা করে। স্কালা ও জাভার জন্য বিশেষভাবে তৈরি sbt জিঙ্ক (Zinc) নামক ইন-মেমরি ইনক্রিমেন্টাল কম্পাইলার ডেমন ব্যবহার করে, যা ফাইল পরিবর্তনের পর মাত্র কয়েক মিলিসেকেন্ডে কেবল পরিবর্তিত অংশ কম্পাইল করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'sbt projects follow standard directory conventions:',
        bn: 'sbt প্রজেক্টগুলো মানসম্মত ডিরেক্টরি কাঠামো অনুসরণ করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. src/main/scala/: Houses application Scala source code files.',
          bn: '১. src/main/scala/: অ্যাপ্লিকেশনের মূল স্কালা সোর্স কোড ফাইল সংরক্ষণ করে।'
        },
        {
          en: '2. src/test/scala/: Houses automated unit tests (e.g. MUnit, ScalaTest, Weaver).',
          bn: '২. src/test/scala/: স্বয়ংক্রিয় ইউনিট টেস্ট কোড (যেমন MUnit, ScalaTest) ধারণ করে।'
        },
        {
          en: '3. build.sbt: The root declarative build definition written in Scala DSL.',
          bn: '৩. build.sbt: স্কালা DSL দিয়ে লেখা মূল ডিক্লেয়ারেটিভ বিল্ড কনফিগারেশন ফাইল।'
        },
        {
          en: '4. project/build.properties: Pinpoints the exact sbt version (e.g. sbt.version=1.9.8) to guarantee 100% reproducible builds across team machines.',
          bn: '৪. project/build.properties: নির্দিষ্ট sbt সংস্করণ (যেমন sbt.version=1.9.8) লক করে রাখে যাতে যেকোনো মেশিনে হুবহু একই বিল্ড তৈরি হয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'sbt-architecture-diagram',
      title: {
        en: 'sbt Build Architecture: build.sbt, %% Cross-Versioning & Multi-Modules',
        bn: 'sbt বিল্ড আর্কিটেকচার: build.sbt, %% ক্রস-ভার্সনিং ও মাল্টি-মডিউল'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">sbt Build Tool: Settings, Dependencies &amp; Multi-Modules</text>' +
          '<!-- Column 1: Dependency Cross-Versioning -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. DEPENDENCY RESOLUTION: % vs %%</text>' +
            '<rect x="15" y="45" width="330" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="66" fill="#38bdf8" font-size="10" font-weight="bold">Java Library (Single %):</text>' +
            '<text x="25" y="86" fill="#cbd5e1" font-size="9" font-family="monospace">"org.postgresql" % "postgresql" % "42.7.2"</text>' +
            '<text x="25" y="104" fill="#94a3b8" font-size="8">&#x2192; Downloads postgresql-42.7.2.jar directly</text>' +
            '<rect x="15" y="130" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="152" fill="#10b981" font-size="10" font-weight="bold">Scala Library (Double %% Cross-Version):</text>' +
            '<text x="25" y="172" fill="#cbd5e1" font-size="9" font-family="monospace">"org.typelevel" %% "cats-core" % "2.10.0"</text>' +
            '<text x="25" y="190" fill="#34d399" font-size="8">&#x2192; Appends scala binary version automatically:</text>' +
            '<text x="25" y="204" fill="#facc15" font-size="8" font-family="monospace">&#x2192; cats-core_3-2.10.0.jar (for Scala 3)</text>' +
            '<rect x="15" y="225" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="248" fill="#fbbf24" font-size="10" font-weight="bold">Zinc Incremental Compiler:</text>' +
            '<text x="25" y="268" fill="#cbd5e1" font-size="9">&#x2022; Tracks AST symbol dependencies across files</text>' +
            '<text x="25" y="288" fill="#38bdf8" font-size="9">&#x2022; Recompiles in ~300ms instead of 30s cold builds</text>' +
          '</g>' +
          '<!-- Column 2: Multi-Module Architecture -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. MULTI-MODULE PROJECT DAG</text>' +
            '<!-- Root Project -->' +
            '<rect x="100" y="45" width="160" height="40" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="180" y="70" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">root (aggregate)</text>' +
            '<!-- Connecting lines -->' +
            '<path d="M 150 85 L 85 125" stroke="#64748b" stroke-width="2"/>' +
            '<path d="M 210 85 L 275 125" stroke="#64748b" stroke-width="2"/>' +
            '<!-- Submodule 1: API -->' +
            '<rect x="25" y="125" width="130" height="50" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="90" y="147" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">api (HTTP REST)</text>' +
            '<text x="90" y="163" fill="#94a3b8" font-size="8" text-anchor="middle">dependsOn(core)</text>' +
            '<!-- Submodule 2: Worker -->' +
            '<rect x="205" y="125" width="130" height="50" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="270" y="147" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">worker (Streams)</text>' +
            '<text x="270" y="163" fill="#94a3b8" font-size="8" text-anchor="middle">dependsOn(core)</text>' +
            '<!-- Connecting lines to Core -->' +
            '<path d="M 90 175 L 150 210" stroke="#64748b" stroke-width="2"/>' +
            '<path d="M 270 175 L 210 210" stroke="#64748b" stroke-width="2"/>' +
            '<!-- Shared Submodule: Core -->' +
            '<rect x="100" y="210" width="160" height="45" rx="6" fill="#0f172a" stroke="#10b981"/>' +
            '<text x="180" y="232" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">core (Domain / DB)</text>' +
            '<text x="180" y="246" fill="#94a3b8" font-size="8" text-anchor="middle">Shared case classes</text>' +
            '<rect x="15" y="270" width="330" height="40" rx="6" fill="#0f172a"/>' +
            '<text x="180" y="295" fill="#facc15" font-size="9" text-anchor="middle">Continuous Watching: sbt ~testQuick runs tests on save</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'dependency-management',
      text: {
        en: '2. Dependency Resolution: Single % vs Double %%',
        bn: '২. ডিপেন্ডেন্সি রেজোলিউশন: একক % বনাম ডাবল %%'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A foundational concept in sbt is understanding how binary cross-versioning operates. Java libraries have a single universal binary format, but Scala libraries must be compiled specifically for each binary Scala release (such as 2.13 or 3):',
        bn: 'sbt এর একটি গুরুত্বপূর্ণ বিষয় হলো বাইনারি ক্রস-ভার্সনিং কীভাবে কাজ করে তা বোঝা। জাভা লাইব্রেরির একটি একক বাইনারি ফরম্যাট থাকে, কিন্তু স্কালা লাইব্রেরিগুলোকে প্রতিটি স্কালা বাইনারি সংস্করণের (যেমন ২.১৩ বা ৩) জন্য আলাদাভাবে কম্পাইল করতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Single Percent (%): Used for Java dependencies (e.g. "org.postgresql" % "postgresql" % "42.7.2"). sbt fetches the artifact verbatim without altering the artifact ID.',
          bn: '১. একক পারসেন্ট (%): জাভা লাইব্রেরির জন্য ব্যবহৃত হয় (যেমন "org.postgresql" % "postgresql" % "42.7.2")। sbt নাম পরিবর্তন না করে সরাসরি আর্টিফ্যাক্ট ডাউনলোড করে।'
        },
        {
          en: '2. Double Percent (%%): Used for Scala dependencies (e.g. "org.typelevel" %% "cats-core" % "2.10.0"). sbt automatically appends the active Scala binary version (e.g. cats-core_3 for Scala 3) to the artifact ID.',
          bn: '২. ডাবল পারসেন্ট (%%): স্কালা লাইব্রেরির জন্য ব্যবহৃত হয় (যেমন "org.typelevel" %% "cats-core" % "2.10.0")। sbt স্বয়ংক্রিয়ভাবে আর্টিফ্যাক্টের নামের শেষে বর্তমান স্কালা ভার্সন (যেমন স্কালা ৩ এর জন্য cats-core_3) যুক্ত করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'multimodule-and-commands',
      text: {
        en: '3. Multi-Module Builds and Continuous Workflow',
        bn: '৩. মাল্টি-মডিউল বিল্ড এবং কন্টিনিউয়াস ওয়ার্কফ্লো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large enterprise architectures divide projects into submodules (such as core domain, api web services, and worker queues) using lazy val definitions and .dependsOn(core). By running sbt with a leading tilde (~), commands watch files continuously: ~testQuick automatically detects changed files, runs only their impacted unit tests, and gives instant feedback within 500 milliseconds.',
        bn: 'বড় এন্টারপ্রাইজ প্রজেক্টে কোডকে একাধিক সাব-মডিউলে (যেমন core, api এবং worker) ভাগ করতে lazy val এবং .dependsOn(core) ব্যবহৃত হয়। কমান্ডের শুরুতে টিল্ডা (~) দিলে sbt ফাইল পরিবর্তন পর্যবেক্ষণ করতে থাকে: যেমন ~testQuick ফাইল সেভ হওয়ার সাথে সাথে মাত্র ৫০০ মিলিসেকেন্ডের মধ্যে সংশ্লিষ্ট টেস্টগুলো রান করে ফলাফল জানিয়ে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. sbt Build Engine Simulator in TypeScript',
        bn: '৪. TypeScript এ sbt বিল্ড ইঞ্জিন সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates sbt project dependency resolution (with single % vs double %% cross-versioning), multi-module dependency graphs, and automated task execution:',
        bn: 'নিচের TypeScript প্রোগ্রামটি sbt প্রজেক্টের ডিপেন্ডেন্সি রেজোলিউশন (একক % বনাম ডাবল %% ক্রস-ভার্সনিং), মাল্টি-মডিউল গ্রাফ এবং স্বয়ংক্রিয় বিল্ড টাস্কের কার্যপদ্ধতি প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of sbt build configuration, %% cross-versioning, and multi-module task execution.',
        bn: 'sbt বিল্ড কনফিগারেশন, %% ক্রস-ভার্সনিং এবং মাল্টি-মডিউল টাস্কের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala Build Tool (sbt) Configuration & Cross-Versioning

interface SbtDependency {
  org: string;
  name: string;
  version: string;
  isScalaLib: boolean;
}

class SbtProject {
  public dependencies: SbtDependency[] = [];
  public dependenciesOn: SbtProject[] = [];

  constructor(
    public readonly name: string,
    public readonly scalaVersion: string
  ) {}

  // Single % : Java dependency
  addJavaDep(org: string, name: string, version: string): SbtProject {
    this.dependencies.push({ org, name, version, isScalaLib: false });
    return this;
  }

  // Double %% : Scala dependency (cross-versioned)
  addScalaDep(org: string, name: string, version: string): SbtProject {
    this.dependencies.push({ org, name, version, isScalaLib: true });
    return this;
  }

  dependsOn(other: SbtProject): SbtProject {
    this.dependenciesOn.push(other);
    return this;
  }

  // Resolve Maven artifact file names
  resolveArtifacts(): string[] {
    const binaryVersion = this.scalaVersion.startsWith('3') ? '_3' : '_2.13';
    return this.dependencies.map((dep) => {
      const artifactSuffix = dep.isScalaLib ? binaryVersion : '';
      return dep.org + ':' + dep.name + artifactSuffix + ':' + dep.version + '.jar';
    });
  }

  // Compile task simulation
  compile(): { project: string; status: string; totalDeps: number } {
    let totalDeps = this.dependencies.length;
    for (const upstream of this.dependenciesOn) {
      totalDeps += upstream.dependencies.length;
    }
    return {
      project: this.name,
      status: 'Compiled 0 errors',
      totalDeps
    };
  }
}

// Demonstration
// 1. Configure Multi-Module Project (core and api)
const coreModule = new SbtProject('my-core', '3.3.1')
  .addScalaDep('org.typelevel', 'cats-core', '2.10.0')
  .addJavaDep('org.postgresql', 'postgresql', '42.7.2');

const apiModule = new SbtProject('my-api', '3.3.1')
  .addScalaDep('com.softwaremill.sttp.tapir', 'tapir-core', '1.9.0')
  .dependsOn(coreModule);

// 2. Resolve cross-versioned dependencies
const coreArtifacts = coreModule.resolveArtifacts();
console.log('Core resolved artifacts count: ' + coreArtifacts.length); // -> 2
console.log('Scala cross-versioned cats artifact: ' + coreArtifacts[0]); // -> org.typelevel:cats-core_3:2.10.0.jar
console.log('Java postgresql artifact: ' + coreArtifacts[1]); // -> org.postgresql:postgresql:42.7.2.jar

// 3. Compile tasks
const coreBuild = coreModule.compile();
const apiBuild = apiModule.compile();

console.log('Core compile status: ' + coreBuild.status + ' (' + coreBuild.totalDeps + ' dependencies)');
console.log('API compile status: ' + apiBuild.status + ' (' + apiBuild.totalDeps + ' transitive dependencies)');`
    }
  ],
  exercises: [
    {
      id: 'sbt-ex-1',
      kind: 'mcq',
      question: {
        en: 'In an sbt build.sbt file, what is the critical difference between the single % and double %% dependency operators?',
        bn: 'sbt এর build.sbt ফাইলে একক % এবং ডাবল %% ডিপেন্ডেন্সি অপারেটরের মধ্যে প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'Single % is for Java libraries; double %% is for Scala libraries, automatically appending the Scala binary version (e.g. _3)',
          bn: 'একক % জাভা লাইব্রেরির জন্য; ডাবল %% স্কালা লাইব্রেরির জন্য যা স্বয়ংক্রিয়ভাবে স্কালা বাইনারি ভার্সন (যেমন _3) যুক্ত করে'
        },
        {
          en: 'Single % only works in debug mode; double %% only works in release mode',
          bn: 'একক % কেবল ডিবাগ মোডে চলে; ডাবল %% কেবল রিলিজ মোডে চলে'
        },
        {
          en: 'Single % downloads source code; double %% downloads compiled binaries',
          bn: 'একক % সোর্স কোড ডাউনলোড করে; ডাবল %% কম্পাইল্ড বাইনারি ডাউনলোড করে'
        },
        {
          en: 'Double %% is an obsolete operator removed in Scala 3',
          bn: 'ডাবল %% একটি সেকেলে অপারেটর যা স্কালা ৩ থেকে মুছে ফেলা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Double %% handles binary cross-versioning for Scala libraries.',
        bn: 'ডাবল %% স্কালা লাইব্রেরির বাইনারি ক্রস-ভার্সনিং পরিচালনা করে।'
      },
      explanation: {
        en: 'The %% operator cross-versions the dependency by appending the active Scala binary version (such as _3 or _2.13), ensuring binary compatibility with the compiler.',
        bn: '%% অপারেটর লাইব্রেরির নামের শেষে কম্পাইলারের সক্রিয় বাইনারি সংস্করণ যোগ করে বাইনারি সামঞ্জস্য বজায় রাখে।'
      }
    },
    {
      id: 'sbt-ex-2',
      kind: 'mcq',
      question: {
        en: 'What occurs when prefixing an sbt command with a tilde character (e.g. ~testQuick or ~compile)?',
        bn: 'sbt কমান্ডের শুরুতে টিল্ডা চিহ্ন দিলে (যেমন ~testQuick বা ~compile) কী ঘটে?'
      },
      options: [
        {
          en: 'sbt enters continuous watch mode, automatically re-running the command whenever source files on disk change',
          bn: 'sbt কন্টিনিউয়াস ওয়াচ মোডে প্রবেশ করে, ডিস্কে কোনো সোর্স ফাইল পরিবর্তন হলেই স্বয়ংক্রিয়ভাবে কমান্ডটি পুনরায় চালায়'
        },
        {
          en: 'It deletes all target files and resets git history',
          bn: 'এটি تمام টার্গেট ফাইল মুছে ফেলে এবং গিট হিস্ট্রি রিসেট করে'
        },
        {
          en: 'It pauses the terminal session for 60 seconds',
          bn: 'এটি ৬০ সেকেন্ডের জন্য টার্মিনাল সেশন থামিয়ে রাখে'
        },
        {
          en: 'It runs the build inside an encrypted Docker container',
          bn: 'এটি একটি এনক্রিপ্ট করা ডকার কনটেইনারে বিল্ড চালায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The tilde activates continuous build monitoring on file save.',
        bn: 'টিল্ডা ফাইল সেভ হওয়ার সাথে সাথে কন্টিনিউয়াস বিল্ড সক্রিয় করে।'
      },
      explanation: {
        en: 'Prefixing commands with ~ triggers sbt\'s file-watching daemon, re-executing the task incrementally every time source code changes are detected.',
        bn: 'কমান্ডের পূর্বে ~ দিলে sbt ফাইল পর্যবেক্ষণ চালু করে এবং কোড সেভ হওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে ইনক্রিমেন্টাল বিল্ড সম্পন্ন করে।'
      }
    },
    {
      id: 'sbt-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why is setting the sbt version in project/build.properties a critical engineering standard for production teams?',
        bn: 'project/build.properties ফাইলে নির্দিষ্ট sbt সংস্করণ উল্লেখ করা প্রোডাকশন টিমের জন্য কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'It guarantees deterministic, identical builds across all developer laptops and CI/CD servers regardless of globally installed sbt versions',
          bn: 'এটি গ্লোবাল sbt সংস্করণ যাই থাকুক না কেন تمام ডেভেলপার ল্যাপটপ এবং CI/CD সার্ভারে হুবহু একই ও নির্ভরযোগ্য বিল্ড নিশ্চিত করে'
        },
        {
          en: 'It is the only place where the operating system license key can be stored',
          bn: 'এটি একমাত্র স্থান যেখানে অপারেটিং সিস্টেম লাইসেন্স কি সংরক্ষণ করা যায়'
        },
        {
          en: 'It makes the Java virtual machine run 2 times faster',
          bn: 'এটি জাভা ভার্চুয়াল মেশিনকে ২ গুণ দ্রুত চালায়'
        },
        {
          en: 'It turns off unit test failures permanently',
          bn: 'এটি চিরতরে ইউনিট টেস্ট ফেইলিউর বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pinning versions ensures 100% build reproducibility.',
        bn: 'ভার্সন লক করা ১০০% নির্ভরযোগ্য ও পুনরুৎপাদনযোগ্য বিল্ড নিশ্চিত করে।'
      },
      explanation: {
        en: 'project/build.properties locks the exact sbt launcher version, preventing subtle build discrepancies between different team members and automated CI pipelines.',
        bn: 'project/build.properties নির্দিষ্ট sbt সংস্করণ লক করে ডেভেলপার ও CI/CD পাইপলাইনের মধ্যে অনাকাঙ্ক্ষিত অসঙ্গতি দূর করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-builds-and-the-sbt',
    title: {
      en: 'sbt and Scala Build Tooling Quiz',
      bn: 'sbt এবং স্কালা বিল্ড টুলিং কুইজ'
    },
    questions: [
      {
        id: 'sbt-q1',
        kind: 'mcq',
        question: {
          en: 'What is the name of the high-speed incremental compiler daemon used by sbt to avoid full recompilations?',
          bn: 'সম্পূর্ণ প্রজেক্ট পুনরায় কম্পাইল না করে দ্রুত ইনক্রিমেন্টাল কম্পাইলেশন নিশ্চিত করতে sbt কোন কম্পাইলার ডেমন ব্যবহার করে?'
        },
        options: [
          {
            en: 'Zinc',
            bn: 'Zinc (জিঙ্ক)'
          },
          {
            en: 'Copper',
            bn: 'Copper (কপার)'
          },
          {
            en: 'Titanium',
            bn: 'Titanium (টাইটানিয়াম)'
          },
          {
            en: 'Mercury',
            bn: 'Mercury (মার্কারি)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Named after the metallic chemical element with atomic number 30.',
          bn: 'পারমাণবিক সংখ্যা ৩০ বিশিষ্ট ধাতুর নামে নামকরণ করা হয়েছে।'
        },
        explanation: {
          en: 'Zinc is sbt\'s incremental compiler engine. It analyzes dependency relations between source files and only recompiles files affected by changes.',
          bn: 'Zinc হলো sbt এর ইনক্রিমেন্টাল কম্পাইলার যা সোর্স ফাইলের আন্তঃসম্পর্ক বিশ্লেষণ করে কেবল পরিবর্তিত অংশটুকু দ্রুত কম্পাইল করে।'
        }
      },
      {
        id: 'sbt-q2',
        kind: 'mcq',
        question: {
          en: 'In an sbt build definition, what is the difference between a SettingKey and a TaskKey?',
          bn: 'একটি sbt বিল্ড ডেফিনিশনে SettingKey এবং TaskKey এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'A SettingKey is computed once during project loading, while a TaskKey is executed anew on demand every time it is invoked',
            bn: 'SettingKey প্রজেক্ট লোডের সময় একবার হিসাব হয়, আর TaskKey প্রতিবার ডাকার সময় নতুন করে কার্যকর হয়'
          },
          {
            en: 'SettingKey is written in Java while TaskKey is written in C',
            bn: 'SettingKey জাভাতে লেখা আর TaskKey সি-তে লেখা'
          },
          {
            en: 'TaskKey cannot produce return values',
            bn: 'TaskKey কোনো রিটার্ন মান তৈরি করতে পারে না'
          },
          {
            en: 'SettingKey only works in multi-module projects',
            bn: 'SettingKey কেবল মাল্টি-মডিউল প্রজেক্টে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Settings are static configuration; tasks are executable actions.',
          bn: 'সেটিংস হলো স্ট্যাটিক কনফিগারেশন; টাস্ক হলো সম্পাদনযোগ্য কাজ।'
        },
        explanation: {
          en: 'SettingKeys (like name or scalaVersion) evaluate once at build configuration load time. TaskKeys (like compile or test) execute their actions dynamically on each call.',
          bn: 'SettingKey প্রজেক্ট শুরুর সময় একবার মূল্যায়িত হয়, আর TaskKey (যেমন compile বা test) প্রতিবার ডাকার সময় পুনরায় কার্যকর হয়।'
        }
      },
      {
        id: 'sbt-q3',
        kind: 'mcq',
        question: {
          en: 'Which sbt command opens an interactive Scala REPL terminal with all project dependencies and compiled classes pre-loaded?',
          bn: 'প্রজেক্টের সমস্ত ডিপেন্ডেন্সি এবং কম্পাইল্ড ক্লাস লোড করা অবস্থায় একটি ইন্টারঅ্যাক্টিভ স্কালা REPL টার্মিনাল খুলতে কোন sbt কমান্ডটি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'console',
            bn: 'console'
          },
          {
            en: 'repl_start',
            bn: 'repl_start'
          },
          {
            en: 'interactive_mode',
            bn: 'interactive_mode'
          },
          {
            en: 'shell_prompt',
            bn: 'shell_prompt'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard command is console.',
          bn: 'মানসম্মত কমান্ডটি হলো console।'
        },
        explanation: {
          en: 'Running sbt console starts an interactive Scala REPL session with the project\'s compiled classpath and libraries loaded.',
          bn: 'sbt console কমান্ডটি প্রজেক্টের সমস্ত লাইব্রেরি সহ তাৎক্ষণিক কোড পরীক্ষার জন্য একটি স্কালা REPL খোলে।'
        }
      },
      {
        id: 'sbt-q4',
        kind: 'mcq',
        question: {
          en: 'How do you configure a root project in sbt to aggregate submodules so that running "compile" compiles all submodules together?',
          bn: 'sbt তে রুট প্রজেক্ট কনফিগার করার সময় "compile" চালালে تمام সাব-মডিউল একসাথে কম্পাইল হওয়ার জন্য কোন মেথডটি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'lazy val root = (project in file(".")).aggregate(core, api)',
            bn: 'lazy val root = (project in file(".")).aggregate(core, api)'
          },
          {
            en: 'root.mergeAll(core, api)',
            bn: 'root.mergeAll(core, api)'
          },
          {
            en: 'root.zipModules(core, api)',
            bn: 'root.zipModules(core, api)'
          },
          {
            en: 'root.joinSubprojects(core, api)',
            bn: 'root.joinSubprojects(core, api)'
          }
        ],
        answer: 0,
        hint: {
          en: 'aggregate forwards root commands to submodules.',
          bn: 'aggregate রুট প্রজেক্টের কমান্ডগুলোকে সাব-মডিউলে পাঠিয়ে দেয়।'
        },
        explanation: {
          en: 'The aggregate method causes tasks invoked on the root project to be automatically forwarded and executed across the aggregated subprojects.',
          bn: 'aggregate মেথড ব্যবহারের ফলে রুট প্রজেক্টে কোনো কমান্ড (যেমন compile বা test) চালালে তা স্বয়ংক্রিয়ভাবে সমস্ত সাব-মডিউলে কার্যকর হয়।'
        }
      },
      {
        id: 'sbt-q5',
        kind: 'mcq',
        question: {
          en: 'Where does sbt store downloaded third-party Ivy/Maven dependency JARs on your local machine?',
          bn: 'আপনার লোকাল মেশিনে sbt ডাউনলোড করা থার্ড-পার্টি Ivy/Maven ডিপেন্ডেন্সি জারগুলো কোথায় সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'In the local user cache directory (e.g. ~/.cache/coursier/ or ~/.ivy2/cache/)',
            bn: 'লোকাল ব্যবহারকারীর ক্যাশ ডিরেক্টরিতে (যেমন ~/.cache/coursier/ অথবা ~/.ivy2/cache/)'
          },
          {
            en: 'Directly in the operating system /tmp folder, erased on reboot',
            bn: 'সরাসরি অপারেটিং সিস্টেমের /tmp ফোল্ডারে, যা রিবুট করলে মুছে যায়'
          },
          {
            en: 'Inside the git .git/objects repository',
            bn: 'গিটের .git/objects রিপোজিটরির ভেতরে'
          },
          {
            en: 'On a floppy disk drive',
            bn: 'ফ্লপি ডিস্ক ড্রাইভে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern sbt uses Coursier cache in user home.',
          bn: 'আধুনিক sbt ব্যবহারকারীর হোম ডিরেক্টরিতে Coursier ক্যাশ ব্যবহার করে।'
        },
        explanation: {
          en: 'sbt leverages Coursier or Ivy to store resolved dependencies in the user\'s home directory cache, sharing artifacts across all local projects.',
          bn: 'sbt লাইব্রেরিগুলোকে ব্যবহারকারীর হোম ডিরেক্টরির ক্যাশে সংরক্ষণ করে যাতে একই মেশিনের অন্য প্রজেক্টে তা পুনরায় ডাউনলোড করতে না হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-scala-release',
    title: {
      en: 'Production Scala & Capstone: Fat JARs, GraalVM & Cloud Microservices',
      bn: 'প্রোডাকশন স্কালা এবং ক্যাপস্টোন: ফ্যাট জার, GraalVM ও ক্লাউড মাইক্রোসার্ভিস'
    }
  }
};
