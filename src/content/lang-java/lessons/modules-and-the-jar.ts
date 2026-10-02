import type { Lesson } from '../../../lib/types';

export const ModulesAndTheJarLesson: Lesson = {
  slug: 'modules-and-the-jar',
  tech: 'lang-java',
  title: {
    en: 'JPMS Modules, Encapsulation & JLink Packaging',
    bn: 'JPMS মডিউল, এনক্যাপসুলেশন এবং JLink প্যাকেজিং'
  },
  summary: {
    en: 'Master the Java Platform Module System (JPMS) introduced in Java 9: configure module-info.java declarations, enforce strong boundary encapsulation with exports and requires, permit reflection via opens directives, and produce lean custom cloud runtimes using JLink.',
    bn: 'জাভা ৯ এ প্রবর্তিত জাভা প্ল্যাটফর্ম মডিউল সিস্টেম (JPMS) আয়ত্ত করুন: module-info.java কনফিগারেশন, exports এবং requires দিয়ে সীমানা এনক্যাপসুলেশন, opens দিয়ে নিয়ন্ত্রিত রিফ্লেকশন এবং JLink দিয়ে ক্ষুদ্র কাস্টম ক্লাউড রানটাইম তৈরি।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'jpms-and-module-info-heading',
      text: {
        en: 'The Java Platform Module System (JPMS) and Strong Encapsulation',
        bn: 'জাভা প্ল্যাটফর্ম মডিউল সিস্টেম (JPMS) এবং কঠোর এনক্যাপসুলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Prior to Java 9, the global classpath suffered from "JAR hell". Missing dependencies produced runtime NoClassDefFoundErrors only after application boot. Furthermore, any public class could be accessed by external classes, breaking encapsulation. Java 9 introduced the Java Platform Module System (JPMS) to resolve these architecture weaknesses. Each module defines a root descriptor file called module-info. In this descriptor, "requires" statements declare upstream dependencies verified at startup. Meanwhile, "exports" statements declare exactly which packages are visible to consumers.',
        bn: 'জাভা ৯ এর পূর্বে ফ্ল্যাট ক্লাসপাথের কারণে বিভিন্ন লাইব্রেরির মধ্যে দ্বন্দ্ব তৈরি হতো। কোনো ডিপেন্ডেন্সি মিসিং থাকলে অ্যাপ চালু হওয়ার পর হঠাৎ রানটাইমে NoClassDefFoundError ঘটতো। তাছাড়া যেকোনো পাবলিক ক্লাসকে বহিরাগত কোড সরাসরি কল করে অভ্যন্তরীণ সুরক্ষা নষ্ট করতে পারতো। জাভা ৯ এ এই সমস্যাগুলো সমাধান করতে জাভা প্ল্যাটফর্ম মডিউল সিস্টেম (JPMS) প্রবর্তন করা হয়। প্রতিটি মডিউলে একটি রুট ডেসক্রিপ্টর ফাইল থাকে। এখানে "requires" দিয়ে অন্য কোন মডিউলের ওপর নির্ভর করা হচ্ছে তা নির্ধারণ করা হয়। অন্যদিকে "exports" দিয়ে সুনির্দিষ্ট কোন প্যাকেজগুলো বাইরের ক্লাসের কাছে দৃশ্যমান থাকবে তা ঘোষণা করা হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of Java 9+ JPMS modular systems: Descriptor boundaries, strong encapsulation, reflection management, and JLink runtime pruning.',
        bn: 'চিত্র ১: জাভা ৯+ JPMS মডিউল আর্কিটেকচার: মডিউল ডেসক্রিপ্টর, কঠোর এনক্যাপসুলেশন, রিফ্লেকশন নিয়ন্ত্রণ এবং JLink রানটাইম সংকোচন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA MODULE SYSTEM (JPMS) &amp; JLINK CUSTOM RUNTIME PIPELINE</text>

  <!-- Step 1: module-info.java -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Module Descriptor</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">module com.app {</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">  requires java.sql;</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">exports com.app.api;</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Explicit Boundaries</text>
  </g>

  <!-- Step 2: Strong Encapsulation -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Encapsulation</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Hides com.app.internal</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">IllegalAccessError</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Blocks Unsafe Access</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Classpath Leaks</text>
  </g>

  <!-- Step 3: Opens for Reflection -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Deep Reflection</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">opens com.app.model</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">  to com.fasterxml...</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Controlled Frameworks</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Safe Spring/Jackson</text>
  </g>

  <!-- Step 4: JLink Custom Runtime -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. JLink Packaging</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">jlink --strip-debug</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">350MB -&gt; 40MB</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Custom Minimal JRE</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Cloud Container Ready</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'reflection-opens-and-jlink-heading',
      text: {
        en: 'Reflection Permissions with Opens and Custom JLink Cloud Packaging',
        bn: 'Opens দিয়ে রিফ্লেকশন নিয়ন্ত্রণ এবং কাস্টম JLink ক্লাউড প্যাকেজিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Enterprise frameworks like Spring Boot, Hibernate, and Jackson rely heavily on deep runtime reflection to inspect private fields and serialize JSON. Under JPMS strong encapsulation, reflective access across module boundaries throws InaccessibleObjectException. To permit reflection without exposing packages at compile time, modules declare "opens <package>" or qualified opens like "opens com.app.model to com.fasterxml.jackson.databind". Furthermore, because JPMS models the exact module dependency graph, developers can use the "jlink" tool to assemble a custom, self-contained JRE stripped of unreferenced modules. This reduces runtime size from 350 megabytes to 40 megabytes, minimizing attack surfaces in Docker containers.',
        bn: 'স্প্রিং বুট, হাইবারনেট বা জ্যাকসনের মতো জনপ্রিয় ফ্রেমওয়ার্কগুলো অবজেক্ট থেকে জেসন তৈরি বা ডিপেন্ডেন্সি ইনজেকশনের জন্য রানটাইম রিফ্লেকশনের ওপর গভীরভাবে নির্ভরশীল। JPMS-এর কঠোর এনক্যাপসুলেশনের কারণে অনুমতি ছাড়া রিফ্লেকশন চালাতে গেলে InaccessibleObjectException ঘটে। কম্পাইল টাইমে কোড উন্মুক্ত না করে শুধুমাত্র রানটাইমে রিফ্লেকশন ব্যবহারের অনুমতি দিতে "opens <package>" অথবা সুনির্দিষ্ট মডিউলের জন্য "opens com.app.model to com.fasterxml.jackson.databind" নির্দেশ ব্যবহার করা হয়। তাছাড়া যেহেতু মডিউলের নির্ভরতার পুরো গ্রাফটি পরিষ্কার থাকে, তাই "jlink" টুল ব্যবহার করে অপ্রয়োজনীয় মডিউল বাদ দিয়ে একটি স্বনির্ভর কাস্টম JRE তৈরি করা যায়। এর ফলে রানটাইমের সাইজ ৩৫০ মেগাবাইট থেকে কমে মাত্র ৪০ মেগাবাইটে নেমে আসে এবং ডকার কনটেইনারের সুরক্ষা নিশ্চিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java 9+ JPMS module graph resolution, exports encapsulation check, and JLink runtime pruning.',
        bn: 'জাভা ৯+ JPMS মডিউল গ্রাফ রেজোলিউশন, এনক্যাপসুলেশন যাচাই এবং JLink প্যাকেজিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Java Platform Module System (JPMS) and JLink Pruning

export interface ModuleDescriptor {
  name: string;
  requires: string[];
  exports: string[];
  opens: string[];
  sizeMb: number;
}

export class ModuleGraphSimulator {
  private registeredModules: Map<string, ModuleDescriptor> = new Map();

  public register(mod: ModuleDescriptor): void {
    this.registeredModules.set(mod.name, mod);
  }

  // Verifying compile-time access across module boundaries
  public canAccess(caller: string, targetModule: string, targetPackage: string): boolean {
    const callerMod = this.registeredModules.get(caller);
    const targetMod = this.registeredModules.get(targetModule);
    if (!callerMod || !targetMod) return false;

    // Must declare requires and target must export the package
    const hasRequires = callerMod.requires.includes(targetModule);
    const isExported = targetMod.exports.includes(targetPackage);
    return hasRequires && isExported;
  }

  // Simulating JLink runtime shrinking: includes only reachable transitive modules
  public assembleCustomRuntime(rootModuleName: string): { modules: string[]; totalSizeMb: number } {
    const included = new Set<string>();
    const queue = [rootModuleName];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (!included.has(current)) {
        included.add(current);
        const desc = this.registeredModules.get(current);
        if (desc) {
          for (const dep of desc.requires) {
            if (!included.has(dep)) queue.push(dep);
          }
        }
      }
    }

    let totalMb = 0;
    for (const modName of included) {
      totalMb += this.registeredModules.get(modName)?.sizeMb ?? 0;
    }
    return { modules: Array.from(included), totalSizeMb: totalMb };
  }
}

// Execution demonstration
const graph = new ModuleGraphSimulator();
graph.register({ name: 'java.base', requires: [], exports: ['java.lang', 'java.util'], opens: [], sizeMb: 30 });
graph.register({ name: 'java.sql', requires: ['java.base'], exports: ['java.sql'], opens: [], sizeMb: 10 });
graph.register({ name: 'com.app.core', requires: ['java.base', 'java.sql'], exports: ['com.app.api'], opens: ['com.app.model'], sizeMb: 5 });

const canReadPublicApi = graph.canAccess('com.app.core', 'java.sql', 'java.sql');
console.log('Access to Exported java.sql Permitted:', canReadPublicApi); // true

const runtime = graph.assembleCustomRuntime('com.app.core');
console.log('JLink Minimal Runtime Modules:', runtime.modules); // ['com.app.core', 'java.base', 'java.sql']
console.log('JLink Minimal Runtime Size (MB):', runtime.totalSizeMb); // 45`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'JPMS',
          def: {
            en: 'Java Platform Module System introduced in Java 9 providing strong architectural encapsulation and explicit dependencies.',
            bn: 'জাভা ৯ এ প্রবর্তিত মডিউল সিস্টেম যা শক্তিশালী স্থাপত্য এনক্যাপসুলেশন এবং নির্ভরতা নিয়ন্ত্রণ নিশ্চিত করে।'
          }
        },
        {
          term: 'module-info.java',
          def: {
            en: 'Root descriptor declaring module dependencies (requires), exported APIs (exports), and reflection access (opens).',
            bn: 'রুট ডেসক্রিপ্টর ফাইল যাতে মডিউলের নির্ভরতা, এক্সপোর্ট করা এপিআই এবং রিফ্লেকশনের অনুমতি ঘোষণা থাকে।'
          }
        },
        {
          term: 'opens directive',
          def: {
            en: 'Module declaration granting deep runtime reflection access to frameworks while preventing compile-time coupling.',
            bn: 'মডিউল নির্দেশ যা কম্পাইল টাইমে আবদ্ধ না করে ফ্রেমওয়ার্ককে রানটাইমে রিফ্লেকশন করার অনুমতি দেয়।'
          }
        },
        {
          term: 'jlink',
          def: {
            en: 'Java command-line tool creating custom minimal runtimes containing only referenced modules and stripping unused JDK bloat.',
            bn: 'কমান্ড-লাইন টুল যা শুধুমাত্র কোডে ব্যবহৃত নির্দিষ্ট মডিউলগুলো নিয়ে অতি ক্ষুদ্র কাস্টম রানটাইম তৈরি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jpms-version-introduction-ex1',
      kind: 'mcq',
      topic: 'jpms-java9-release-timeline',
      question: {
        en: 'In which version of Java was the Java Platform Module System (Project Jigsaw) officially introduced?',
        bn: 'কোন জাভা সংস্করণে আনুষ্ঠানিকভাবে জাভা প্ল্যাটফর্ম মডিউল সিস্টেম (Project Jigsaw) প্রবর্তন করা হয়?'
      },
      options: [
        { en: 'Java 9', bn: 'Java 9' },
        { en: 'Java 8', bn: 'Java 8' },
        { en: 'Java 11', bn: 'Java 11' },
        { en: 'Java 17', bn: 'Java 17' }
      ],
      answer: 0,
      hint: {
        en: 'Java 9 modularized the JDK core and introduced module-info.java.',
        bn: 'জাভা ৯ জেডিকে-কে মডিউলারাইজ করে এবং module-info.java ফাইলের সূচনা করে।'
      },
      explanation: {
        en: 'Java 9 released JPMS (Project Jigsaw), transitioning Java from monolithic classpath archives to modular boundaries.',
        bn: 'জাভা ৯ মনোলিথিক ক্লাসপাথ বাদ দিয়ে মডিউল সিস্টেম প্রবর্তন করে।'
      }
    },
    {
      id: 'module-descriptor-file-name-ex2',
      kind: 'mcq',
      topic: 'module-info-descriptor-naming',
      question: {
        en: 'What is the required exact file name for declaring a module descriptor at the source root in Java?',
        bn: 'জাভাতে সোর্স রুটে মডিউল ডেসক্রিপ্টর ঘোষণার জন্য ফাইলের সুনির্দিষ্ট নাম কী হতে হয়?'
      },
      options: [
        { en: 'module-info.java', bn: 'module-info.java' },
        { en: 'package-info.java', bn: 'package-info.java' },
        { en: 'ModuleConfig.java', bn: 'ModuleConfig.java' },
        { en: 'manifest.json', bn: 'manifest.json' }
      ],
      answer: 0,
      hint: {
        en: 'The compiler looks for module-info.java at the package root.',
        bn: 'কম্পাইলার সোর্স রুটে module-info.java নামের সুনির্দিষ্ট ফাইলটি খোঁজে।'
      },
      explanation: {
        en: 'The Java compiler and runtime recognize module-info.java as the module declaration containing requires and exports statements.',
        bn: 'module-info.java ফাইলের ভেতর মডিউলের সমস্ত রুলস ও ডিপেন্ডেন্সি লেখা হয়।'
      }
    },
    {
      id: 'opens-directive-purpose-reflection-ex3',
      kind: 'mcq',
      topic: 'jpms-opens-directive-reflection',
      question: {
        en: 'Why do frameworks like Spring and Jackson require packages to be declared with "opens" in module-info.java?',
        bn: 'স্প্রিং বা জ্যাকসনের মতো ফ্রেমওয়ার্কগুলোর জন্য module-info.java তে প্যাকেজ "opens" ঘোষণা করা কেন প্রয়োজন?'
      },
      options: [
        {
          en: 'To grant runtime deep reflection access to private fields and constructors without exposing the package at compile time',
          bn: 'কম্পাইল টাইমে কোড উন্মুক্ত না করেই প্রাইভেট ফিল্ড ও কনস্ট্রাক্টরে রানটাইমে রিফ্লেকশনের প্রবেশাধিকার দেওয়ার জন্য'
        },
        {
          en: 'To make the Java source file free of charge',
          bn: 'জাভা সোর্স ফাইলটি বিনামূল্যে ব্যবহারযোগ্য করতে'
        },
        {
          en: 'To convert the module into an operating system kernel',
          bn: 'মডিউলটিকে একটি অপারেটিং সিস্টেম কার্নেলে রূপান্তর করতে'
        },
        {
          en: 'opens is only required on Windows systems',
          bn: 'opens কেবল উইন্ডোজ অপারেটিং সিস্টেমে আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Opens permits reflective access at runtime while keeping compile-time encapsulation.',
        bn: 'Opens রানটাইমে রিফ্লেকশনের সুবিধা দেয় কিন্তু কম্পাইল টাইমে এনক্যাপসুলেশন বজায় রাখে।'
      },
      explanation: {
        en: 'The "opens" directive permits frameworks to reflectively inspect private members, preventing InaccessibleObjectExceptions.',
        bn: 'ফ্রেমওয়ার্কের অটোমেশনের সুবিধার্থে রানটাইম রিফ্লেকশনের জন্য opens ডিরেক্টিভ দরকার।'
      }
    },
    {
      id: 'jlink-output-distribution-ex4',
      kind: 'mcq',
      topic: 'jlink-tool-custom-jre-generation',
      question: {
        en: 'What does the "jlink" tool produce when executed with an application module and its transitive dependencies?',
        bn: 'একটি অ্যাপ্লিকেশন মডিউল এবং তার ডিপেন্ডেন্সিগুলোর ওপর "jlink" টুল চালালে এটি কী তৈরি করে?'
      },
      options: [
        {
          en: 'A fully standalone, minimal custom Java Runtime Environment (JRE) containing solely the modules needed by the application',
          bn: 'একটি সম্পূর্ণ স্বনির্ভর ও ন্যূনতম কাস্টম জাভা রানটাইম (JRE), যাতে শুধুমাত্র অ্যাপ্লিকেশনের প্রয়োজনীয় মডিউলগুলোই থাকে'
        },
        {
          en: 'A plain text HTML document',
          bn: 'একটি সাধারণ টেক্সট এইচটিএমএল ডকুমেন্ট'
        },
        {
          en: 'A Python script that replaces Java entirely',
          bn: 'একটি পাইথন স্ক্রিপ্ট যা জাভাকে প্রতিস্থাপন করে'
        },
        {
          en: 'An MP3 audio recording of the code',
          bn: 'কোডের একটি অডিও রেকর্ডিং'
        }
      ],
      answer: 0,
      hint: {
        en: 'JLink creates a lightweight custom JRE distribution tailored to the app.',
        bn: 'JLink অ্যাপ্লিকেশনের চাহিদামাফিক ক্ষুদ্র কাস্টম JRE তৈরি করে।'
      },
      explanation: {
        en: 'jlink links application modules with necessary JDK platform modules into an optimized minimal runtime image.',
        bn: 'JLink ভারী অপ্রয়োজনীয় মডিউল বাদ দিয়ে অতি ক্ষুদ্র ও দ্রুতগতির রানটাইম উপহার দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-modules-and-the-jar',
    title: {
      en: 'Java JPMS Modules & JLink Packaging Mastery Quiz',
      bn: 'জাভা JPMS মডিউল এবং JLink প্যাকেজিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-requires-transitive-implied-readability',
        kind: 'mcq',
        topic: 'requires-transitive-implied-readability',
        question: {
          en: 'What is the effect of using "requires transitive <module>" instead of a simple "requires <module>" in a module declaration?',
          bn: 'মডিউল ঘোষণায় সাধারণ "requires <module>" এর বদলে "requires transitive <module>" ব্যবহারের প্রভাব কী?'
        },
        options: [
          {
            en: 'Any downstream module that requires this module automatically gains readability of the transitive module without needing to declare it explicitly',
            bn: 'যেকোনো পরবর্তী মডিউল যা এই মডিউলটিকে নির্ভর করে, সে স্পষ্টভাবে ঘোষণা না করেই স্বয়ংক্রিয়ভাবে ট্রানজিটিভ মডিউলটির অ্যাক্সেস পেয়ে যায়'
          },
          {
            en: 'It deletes the module from the hard drive after compilation',
            bn: 'কম্পাইল করার পর এটি হার্ড ড্রাইভ থেকে মডিউলটি মুছে ফেলে'
          },
          {
            en: 'It converts all methods into static methods',
            bn: 'এটি সব মেথডকে স্ট্যাটিক মেথডে রূপান্তর করে'
          },
          {
            en: 'requires transitive is deprecated in Java 17',
            bn: 'জাভা ১৭ এ requires transitive বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Transitive readability cascades dependencies to consumers.',
          bn: 'ট্রানজিটিভ রিডাবিলিটি নির্ভরতাকে পরবর্তী ক্লায়েন্টদের কাছে পৌঁছে দেয়।'
        },
        explanation: {
          en: 'requires transitive grants implied readability: callers inherit access to returned types without adding separate requires statements.',
          bn: 'ট্রানজিটিভ ডিক্লেয়ারেশনের ফলে ক্লায়েন্টকে বারবার একই ডিপেন্ডেন্সি আলাদা করে লিখতে হয় না।'
        }
      },
      {
        id: 'quiz-unnamed-module-classpath-backward-compat',
        kind: 'mcq',
        topic: 'unnamed-module-classpath-bridge',
        question: {
          en: 'What is the "Unnamed Module" in Java 9+ and how does it preserve backward compatibility for legacy non-modular JARs?',
          bn: 'জাভা ৯+ এ "Unnamed Module" কী এবং এটি কীভাবে পুরনো নন-মডিউলার JAR ফাইলের ব্যাকওয়ার্ড কম্প্যাটিবিলিটি রক্ষা করে?'
        },
        options: [
          {
            en: 'All classes loaded from the traditional classpath are grouped into the Unnamed Module, which can read all modules and exports all its packages to avoid breaking legacy code',
            bn: 'সনাতন ক্লাসপাথ থেকে লোড হওয়া সমস্ত ক্লাসকে Unnamed Module-এ রাখা হয়, যা সব মডিউল পড়তে পারে এবং নিজের সব প্যাকেজ উন্মুক্ত রাখে যাতে পুরনো কোড না ভাঙে'
          },
          {
            en: 'It is a special module that shuts down the operating system',
            bn: 'এটি একটি বিশেষ মডিউল যা অপারেটিং সিস্টেম বন্ধ করে দেয়'
          },
          {
            en: 'The unnamed module was removed in Java 11',
            bn: 'জাভা ১১ এ unnamed module মুছে ফেলা হয়েছে'
          },
          {
            en: 'It only allows classes that have no names',
            bn: 'এটি কেবল নামহীন ক্লাসগুলোকে লোড হতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Unnamed Module acts as an open bridge for legacy classpath JARs.',
          bn: 'Unnamed Module পুরনো ক্লাসপাথের লাইব্রেরিগুলোর জন্য উন্মুক্ত সেতু হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'Classes on the classpath reside in the Unnamed Module, maintaining full backward compatibility with pre-Java-9 applications.',
          bn: 'পুরনো কোডের সামঞ্জস্য রক্ষার স্বার্থেই ক্লাসপাথের উপাদানগুলোকে Unnamed Module এ রেখে নির্বিঘ্নে চলতে দেওয়া হয়।'
        }
      },
      {
        id: 'quiz-jlink-strip-debug-compression',
        kind: 'mcq',
        topic: 'jlink-strip-debug-and-compression-flags',
        question: {
          en: 'How do flags like "--strip-debug" and "--compress 2" optimize a custom JRE generated via jlink?',
          bn: 'jlink দিয়ে কাস্টম JRE তৈরির সময় "--strip-debug" এবং "--compress 2" ফ্ল্যাগগুলো কীভাবে সাইজ অপটিমাইজ করে?'
        },
        options: [
          {
            en: 'They remove debug symbols, compiler line numbers, and zip-compress modules, reducing overall image size significantly for production Docker deployments',
            bn: 'তারা ডিবাগ সিম্বল ও অপ্রয়োজনীয় মেটাডেটা মুছে ফেলে এবং জিপ-কম্প্রেশন করে প্রোডাকশন ডকার ইমেজের সাইজ নাটকীয়ভাবে ছোট করে'
          },
          {
            en: 'They convert the code into assembly language',
            bn: 'তারা কোডকে সরাসরি অ্যাসেম্বলি ল্যাঙ্গুয়েজে বদলে ফেলে'
          },
          {
            en: 'They disable all networking capabilities in the JVM',
            bn: 'তারা JVM এর সব নেটওয়ার্কিং সুবিধা বন্ধ করে দেয়'
          },
          {
            en: 'They encrypt the JRE using blockchain technology',
            bn: 'তারা ব্লকচেইন প্রযুক্তি দিয়ে রানটাইম এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stripping debug symbols cuts non-essential byte metadata for lean containers.',
          bn: 'ডিবাগ সিম্বল বাদ দিলে মেমোরির অপচয় দূর হয়ে ক্লাউড কনটেইনারের সাইজ কমে।'
        },
        explanation: {
          en: 'JLink optimization flags strip developer debug tables and compress byte buffers, producing minimal runtime artifacts.',
          bn: 'এই ফ্ল্যাগগুলো প্রোডাকশনের অপ্রয়োজনীয় তথ্য ফেলে দিয়ে ইমেজকে ক্লাউড ডিপ্লয়মেন্টের জন্য নিখুঁত হালকা করে তোলে।'
        }
      },
      {
        id: 'quiz-circular-dependencies-forbidden-jpms',
        kind: 'mcq',
        topic: 'jpms-cyclic-dependencies-forbidden',
        question: {
          en: 'What occurs if ModuleA requires ModuleB and ModuleB requires ModuleA in a Java 9+ modular project?',
          bn: 'জাভা ৯+ মডিউলার প্রজেক্টে যদি ModuleA নির্ভর করে ModuleB এর ওপর এবং ModuleB নির্ভর করে ModuleA এর ওপর, তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The Java compiler immediately aborts with a compilation error: cyclic dependencies are strictly forbidden in JPMS',
            bn: 'জাভা কম্পাইলার তাৎক্ষণিকভাবে কম্পাইল এরর দিয়ে কাজ বন্ধ করে: কারণ JPMS-এ চক্রাকার নির্ভরতা বা সাইক্লিক ডিপেন্ডেন্সি কঠোরভাবে নিষিদ্ধ'
          },
          {
            en: 'The JVM runs smoothly by merging both into one file',
            bn: 'JVM কোনো সমস্যা ছাড়াই উভয়টিকে এক ফাইলে যুক্ত করে রান করে'
          },
          {
            en: 'The compiler sends an alert email to the developer',
            bn: 'কম্পাইলার ডেভেলপারকে একটি ইমেইল সতর্কতা পাঠায়'
          },
          {
            en: 'Circular dependencies are encouraged as a best practice in JPMS',
            bn: 'JPMS এ চক্রাকার নির্ভরতা একটি প্রশংসনীয় ভালো অভ্যাস'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cyclic module dependencies violate Directed Acyclic Graph (DAG) requirements.',
          bn: 'চক্রাকার নির্ভরতা মডিউল সিস্টেমের মূল নিয়ম ভঙ্গ করায় কম্পাইলার তা নিষিদ্ধ ঘোষণা করে।'
        },
        explanation: {
          en: 'JPMS enforces a Directed Acyclic Graph (DAG) of modules; cyclic dependencies prevent deterministic startup ordering and fail to compile.',
          bn: 'সিস্টেমের সুশৃঙ্খল শুরুর জন্য কোনো চক্রাকার নির্ভরতা অনুমোদন করা হয় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'sealed-and-the-pattern',
    title: {
      en: 'Sealed Types, Record Patterns & Exhaustive Switch',
      bn: 'সিলড টাইপস, রেকর্ড প্যাটার্ন এবং এক্সহস্টিভ switch'
    }
  }
};
