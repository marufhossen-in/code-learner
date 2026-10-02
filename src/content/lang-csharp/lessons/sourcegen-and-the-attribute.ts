import type { Lesson } from '../../../lib/types';

export const SourcegenAndTheAttributeLesson: Lesson = {
  slug: 'sourcegen-and-the-attribute',
  tech: 'lang-csharp',
  title: {
    en: 'Roslyn Source Generators & Custom Attributes',
    bn: 'Roslyn সোর্স জেনারেটর এবং কাস্টম অ্যাট্রিবিউটস'
  },
  summary: {
    en: 'Master compile-time metaprogramming in modern C#. Explore custom attributes (AttributeTargets, AttributeUsage), understand the Roslyn compiler compilation pipeline, build high-performance incremental source generators with IIncrementalGenerator, and replace runtime reflection with zero-cost compile-time code synthesis.',
    bn: 'আধুনিক C#-এ কম্পাইল-টাইম মেটাপ্রোগ্রামিং আয়ত্ত করুন। কাস্টম অ্যাট্রিবিউটস (AttributeTargets, AttributeUsage), Roslyn কম্পাইলারের কম্পাইলেশন পাইপলাইন, IIncrementalGenerator দিয়ে উচ্চগতির ইনক্রিমেন্টাল সোর্স জেনারেটর এবং ধীরগতির রানটাইম রিফ্লেকশনের বদলে কোড সিন্থেসিস।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'roslyn-pipeline-and-source-generators-heading',
      text: {
        en: 'The Roslyn Compilation Pipeline and Source Generators',
        bn: 'Roslyn কম্পাইলেশন পাইপলাইন এবং সোর্স জেনারেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern C# (the managed object-oriented language), metaprogramming has shifted from slow runtime reflection to compile-time source generation. The C# Roslyn compiler exposes its internal compilation pipeline as a developer API. Developers annotate domain classes with custom attributes derived from "System.Attribute". Instead of scanning these attributes at runtime via reflection, Roslyn Source Generators inspect user syntax trees during build time. The generator extracts semantic symbols, synthesizes additional C# source code programmatically, and emits new files directly into the active compilation with zero runtime performance penalty.',
        bn: 'আধুনিক C# (ম্যানেজড অবজেক্ট-ওরিয়েন্টেড ভাষা) মেটাপ্রোগ্রামিংকে ধীরগতির রানটাইম রিফ্লেকশন থেকে সরিয়ে কম্পাইল-টাইম সোর্স জেনারেশনে রূপান্তর করেছে। C# Roslyn কম্পাইলার তার অভ্যন্তরীণ কম্পাইলেশন পাইপলাইনকে ডেভেলপারদের জন্য উন্মুক্ত করেছে। ডেভেলপাররা "System.Attribute" থেকে তৈরি কাস্টম অ্যাট্রিবিউট দিয়ে ক্লাস বা মেথড চিহ্নিত করেন। রানটাইমে রিফ্লেকশন দিয়ে খোঁজার বদলে Roslyn সোর্স জেনারেটর বিল্ডের সময়ই সিনট্যাক্স ট্রি পর্যালোচনা করে। জেনারেটর শব্দার্থিক প্রতীক বিশ্লেষণ করে স্বয়ংক্রিয়ভাবে নতুন C# সোর্স কোড তৈরি করে এবং কোনো পারফরম্যান্স ক্ষতি ছাড়াই মূল কম্পাইলেশনে যুক্ত করে দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The Roslyn incremental source generator architecture: From annotated C# source to semantic inspection and compile-time code synthesis.',
        bn: 'চিত্র ১: Roslyn ইনক্রিমেন্টাল সোর্স জেনারেটর আর্কিটেকচার: অ্যাট্রিবিউট চিহ্নিত C# কোড থেকে শব্দার্থিক বিশ্লেষণ এবং কম্পাইল-টাইমে নতুন কোড সিন্থেসিস।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ROSLYN INCREMENTAL SOURCE GENERATOR ARCHITECTURE</text>

  <!-- Step 1: Annotated Source -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. User C# Code</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">[GenerateMapper]</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">public partial class User</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Syntax Tree Node</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Declarative Metadata</text>
  </g>

  <!-- Step 2: Incremental Pipeline -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Roslyn Filter</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">CreateSyntaxProvider</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Filters [GenerateMapper]</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Cached Pipeline Model</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Sub-Millisecond IDE</text>
  </g>

  <!-- Step 3: Semantic Analysis -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Semantic Model</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">INamedTypeSymbol</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Inspects Props &amp; Types</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Compile-Time Types</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">100% Type-Safe Data</text>
  </g>

  <!-- Step 4: Emitted Source -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Emitted C#</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">User.g.cs Generated</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Static Mapping Code</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Zero Reflection Run</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Native AOT Ready</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'iincrementalgenerator-and-aot-heading',
      text: {
        en: 'IIncrementalGenerator and Native AOT Readiness',
        bn: 'IIncrementalGenerator এবং Native AOT প্রস্তুতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Early versions of source generators suffered from high build latency in large solutions. In .NET 6, Microsoft introduced the "IIncrementalGenerator" interface. Incremental generators divide compilation work into fine-grained pipeline stages with built-in value caching. If a developer edits a method body inside a class, the incremental engine reuses previously cached semantic symbols without re-generating mapper code, keeping Visual Studio snappy. Furthermore, Source Generators are the fundamental cornerstone of Native AOT in modern .NET. By replacing runtime System.Reflection with static, strongly typed C# source code, the compiler eliminates dynamic metadata lookups completely.',
        bn: 'সোর্স জেনারেটরের প্রাথমিক সংস্করণগুলো বড় প্রজেক্টে বিল্ড টাইম কিছুটা বাড়িয়ে দিত। .NET ৬ সংস্করণে মাইক্রোসফট "IIncrementalGenerator" ইন্টারফেস প্রবর্তন করে। ইনক্রিমেন্টাল জেনারেটর কম্পাইলেশন কাজকে ছোট ছোট স্তরে ভাগ করে এবং সেগুলোকে ক্যাশ করে রাখে। ডেভেলপার কোডের কোনো অংশ পরিবর্তন করলে জেনারেটর পুরনো ক্যাশ ব্যবহার করে নিমেষেই কাজ সারে, ফলে আইডিই থাকে অত্যন্ত দ্রুতগতির। উপরন্তু আধুনিক .NET-এ Native AOT সফল করার মূল ভিত্তিই হলো এই সোর্স জেনারেটর। রানটাইমে System.Reflection দিয়ে অবজেক্ট খোঁজার বদলে এটি কম্পাইলের সময়ই স্পষ্ট C# কোড তৈরি করে দেয়, যা কোনো রানটাইম রিফ্লেকশন ছাড়াই সরাসরি মেশিন কোডে রূপান্তরিত হতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Roslyn incremental source generator pipeline: Filtering annotated classes and synthesizing static mapping C# code.',
        bn: 'Roslyn ইনক্রিমেন্টাল সোর্স জেনারেটর পাইপলাইন, ক্লাস ফিল্টারিং এবং স্ট্যাটিক ম্যাপিং কোড সিন্থেসিসের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Roslyn Incremental Source Generator Pipeline

export interface ClassMetadata {
  name: string;
  hasGenerateMapperAttribute: boolean;
  properties: { name: string; type: string }[];
}

export class RoslynSourceGeneratorSimulator {
  // Step 1: Synthesizing C# code during compilation
  public generateMapperSource(targetClass: ClassMetadata): string {
    if (!targetClass.hasGenerateMapperAttribute) return '';

    let code = '// <auto-generated by RoslynSourceGenerator/>\\n';
    code += 'public static class ' + targetClass.name + 'MapperExtensions {\\n';
    code += '  public static ' + targetClass.name + 'Dto ToDto(this ' + targetClass.name + ' entity) =>\\n';
    code += '    new ' + targetClass.name + 'Dto(\\n';

    const propAssignments = targetClass.properties.map(p => '      ' + p.name + ': entity.' + p.name);
    code += propAssignments.join(',\\n') + '\\n';
    code += '    );\\n';
    code += '}\\n';

    return code;
  }
}

// Execution demonstration
const generator = new RoslynSourceGeneratorSimulator();

// Annotated User entity definition
const userEntityClass: ClassMetadata = {
  name: 'UserProfile',
  hasGenerateMapperAttribute: true,
  properties: [
    { name: 'Id', type: 'int' },
    { name: 'Username', type: 'string' },
    { name: 'ActiveRole', type: 'string' }
  ]
};

// Emitting static compiled C# source code at build time
const generatedCs = generator.generateMapperSource(userEntityClass);
console.log('--- Emitted C# Source File (UserProfile.g.cs) ---');
console.log(generatedCs);

// Verification metrics
console.log('Class Properties Mapped at Compile Time:', userEntityClass.properties.length); // 3
console.log('Generated Code Line Count:', generatedCs.split('\\n').length); // 8`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Roslyn Compiler',
          def: {
            en: 'Open-source C# compiler platform exposing syntax trees, semantic models, and source emission APIs.',
            bn: 'ওপেন-সোর্স C# কম্পাইলার প্ল্যাটফর্ম যা সিনট্যাক্স ট্রি, অর্থপূর্ণ প্রতীক এবং কোড তৈরির এপিআই উন্মুক্ত করে।'
          }
        },
        {
          term: 'Source Generator',
          def: {
            en: 'Compiler plugin inspecting user code during compilation to synthesize additional C# source files seamlessly.',
            bn: 'কম্পাইলার প্লাগইন যা কোড তৈরির সময় সিনট্যাক্স পর্যালোচনা করে অতিরিক্ত C# ফাইল তৈরি করে দেয়।'
          }
        },
        {
          term: 'IIncrementalGenerator',
          def: {
            en: 'High-performance generator interface introduced in .NET 6 using cached pipeline stages to prevent IDE compilation lag.',
            bn: '.NET ৬-এর জেনারেটর ইন্টারফেস যা ক্যাশিং ব্যবহারের মাধ্যমে দ্রুত আইডিই পারফরম্যান্স নিশ্চিত করে।'
          }
        },
        {
          term: 'Semantic Model',
          def: {
            en: 'Roslyn API providing rich compile-time symbol and type binding information for syntax tree elements.',
            bn: 'Roslyn এপিআই যা সিনট্যাক্স ট্রির প্রতিটি উপাদানের সঠিক ডেটা টাইপ ও মেম্বার সংক্রান্ত তথ্য দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'source-generator-vs-reflection-ex1',
      kind: 'mcq',
      topic: 'source-generator-vs-runtime-reflection',
      question: {
        en: 'Why do modern .NET libraries replace runtime System.Reflection with Roslyn Source Generators for serialization and dependency injection?',
        bn: 'আধুনিক .NET লাইব্রেরিগুলো সিরিয়ালাইজেশন এবং ডিপেনডেন্সি ইনজেকশনের জন্য রানটাইম System.Reflection-এর বদলে Roslyn সোর্স জেনারেটর কেন ব্যবহার করে?'
      },
      options: [
        {
          en: 'Source generators execute at compile time to produce static C# code, eliminating runtime reflection startup overhead, reducing memory allocations, and enabling Native AOT compatibility',
          bn: 'সোর্স জেনারেটর কম্পাইল করার সময়ই স্পষ্ট C# কোড তৈরি করে ফেলে, যা রানটাইমে রিফ্লেকশনের ধীরগতি দূর করে, মেমোরি খরচ কমায় এবং Native AOT সামঞ্জস্যতা নিশ্চিত করে'
        },
        {
          en: 'Because reflection only works on Windows 98 computers',
          bn: 'কারণ রিফ্লেকশন কেবল উইন্ডোজ ৯৮ কম্পিউটারে চলে'
        },
        {
          en: 'Source generators turn off the computer CPU fan',
          bn: 'সোর্স জেনারেটর কম্পিউটারের ফ্যান বন্ধ করে দেয়'
        },
        {
          en: 'Reflection was completely deleted from C# 10',
          bn: 'C# ১০ সংস্করণে রিফ্লেকশন পুরোপুরি মুছে ফেলা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Source generators emit static C# at build time, bypassing runtime reflection.',
        bn: 'বিল্ডের সময়ই কোড প্রস্তুত হয়ে যাওয়ায় রানটাইমে রিফ্লেকশনের কোনো দরকার থাকে না।'
      },
      explanation: {
        en: 'Runtime reflection requires scanning metadata and compiling dynamic delegates, adding startup latency and memory overhead. Source generators write clean C# at build time.',
        bn: 'কোড সরাসরি কম্পাইল হয়ে বাইনারির অংশ হওয়ায় অ্যাপ্লিকেশন দ্রুত চালু হয়।'
      }
    },
    {
      id: 'iincrementalgenerator-caching-ex2',
      kind: 'mcq',
      topic: 'iincrementalgenerator-pipeline-caching',
      question: {
        en: 'What architectural advantage does "IIncrementalGenerator" introduce over the legacy "ISourceGenerator" interface in .NET 6?',
        bn: '.NET ৬ সংস্করণে পুরনো "ISourceGenerator"-এর তুলনায় "IIncrementalGenerator" কোন স্থাপত্যিক সুবিধা যোগ করেছে?'
      },
      options: [
        {
          en: 'It establishes a pipeline with value-based caching at each transformation step; if source changes do not affect inspected symbols, execution of downstream generator steps is skipped entirely',
          bn: 'এটি প্রতিটি ধাপে ক্যাশিং ব্যবস্থা চালু করে; সোর্স কোডের পরিবর্তন যদি সংশ্লিষ্ট সিম্বলকে প্রভাবিত না করে, তবে পেছনের জেনারেটর ধাপগুলো আর রান না করে সময় বাঁচায়'
        },
        {
          en: 'It formats source code files using uppercase letters',
          bn: 'এটি সোর্স কোডের সমস্ত ফাইল বড় হাতের অক্ষরে রূপান্তর করে'
        },
        {
          en: 'It limits the number of C# classes to 10',
          bn: 'এটি C# ক্লাসের সংখ্যা ১০ টিতে সীমাবদ্ধ করে'
        },
        {
          en: 'Incremental generators only run when connected to Wi-Fi',
          bn: 'ইনক্রিমেন্টাল জেনারেটর কেবল ওয়াইফাই সংযোগ থাকলে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'IIncrementalGenerator caches pipeline states to optimize IDE typing speed.',
        bn: 'ক্যাশিংয়ের কারণে কোড টাইপ করার সময় ভিজ্যুয়াল স্টুডিওতে কোনো ল্যাগ বা দেরি হয় না।'
      },
      explanation: {
        en: 'ISourceGenerator re-ran on every keystroke in the IDE. IIncrementalGenerator uses fine-grained caching to ensure generation only runs when relevant syntax changes.',
        bn: 'আইডিইতে কোড লেখার অভিজ্ঞতা দ্রুত ও মসৃণ রাখতে এই ইনক্রিমেন্টাল ক্যাশিং অপরিহার্য।'
      }
    },
    {
      id: 'attributeusage-targets-ex3',
      kind: 'mcq',
      topic: 'attributeusage-attributetargets-valid-locations',
      question: {
        en: 'What does decorating a custom attribute with "[AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = false)]" enforce?',
        bn: 'একটি কাস্টম অ্যাট্রিবিউটের ওপর "[AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = false)]" দিলে কী নিয়ম আরোপিত হয়?'
      },
      options: [
        {
          en: 'The attribute can ONLY be placed on class or struct declarations, and applying it more than once to the same target generates a compilation error',
          bn: 'অ্যাট্রিবিউটটি কেবলমাত্র class অথবা struct-এর ওপর ব্যবহার করা যাবে, এবং একই ক্লাসে একাধিকবার ব্যবহার করার চেষ্টা করলে কম্পাইলার এরর দেবে'
        },
        {
          en: 'The attribute can be placed on any file including images and MP3 songs',
          bn: 'অ্যাট্রিবিউটটি ছবি এবং অডিও গান সহ যেকোনো ফাইলে বসানো যাবে'
        },
        {
          en: 'It encrypts the attribute using a 128-bit key',
          bn: 'এটি ১২৮-বিট কি দিয়ে অ্যাট্রিবিউটটি এনক্রিপ্ট করে'
        },
        {
          en: 'AllowMultiple defaults to true in all C# versions',
          bn: 'সমস্ত C# সংস্করণে AllowMultiple এর ডিফল্ট মান true থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'AttributeUsage restricts where and how many times an attribute can be applied.',
        bn: 'AttributeUsage অ্যাট্রিবিউট প্রয়োগের স্থান ও ব্যবহারের সংখ্যা কঠোরভাবে নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'AttributeUsage is a meta-attribute specifying valid target language constructs (methods, classes, properties) and whether multiple occurrences are permitted.',
        bn: 'ভুল স্থানে বা ভুলভাবে অ্যাট্রিবিউট প্রয়োগ ঠেকাতে কম্পাইলার এই নিয়ম ব্যবহার করে।'
      }
    },
    {
      id: 'source-generated-system-text-json-ex4',
      kind: 'mcq',
      topic: 'system-text-json-source-generator-native-aot',
      question: {
        en: 'Why is using "[JsonSerializable(typeof(User))]" with System.Text.Json source generation mandatory for high-performance Native AOT applications?',
        bn: 'উচ্চগতির Native AOT অ্যাপ্লিকেশনের জন্য System.Text.Json সোর্স জেনারেশন সহ "[JsonSerializable(typeof(User))]" ব্যবহার করা কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Native AOT binaries strip out dynamic reflection metadata; source generators pre-compile JSON serialization logic into static C# code during build time, guaranteeing zero-reflection operation',
          bn: 'Native AOT বাইনারি থেকে ডায়নামিক রিফ্লেকশনের মেটাডেটা ছেঁটে ফেলা হয়; সোর্স জেনারেটর বিল্ডের সময়ই সিরিয়ালাইজেশন কোড লিখে ফেলে, যা কোনো রিফ্লেকশন ছাড়াই সরাসরি কাজ চালায়'
        },
        {
          en: 'Because JSON serialization is impossible without an external Python script',
          bn: 'কারণ পাইথন স্ক্রিপ্ট ছাড়া জেসন সিরিয়ালাইজেশন অসম্ভব'
        },
        {
          en: 'It compresses JSON text into a binary ZIP file',
          bn: 'এটি জেসন টেক্সটকে জিপ ফাইলে সংকুচিত করে'
        },
        {
          en: 'JsonSerializable only works on Linux Ubuntu servers',
          bn: 'JsonSerializable কেবল লিনাক্স উবুন্টু সার্ভারে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Source generation writes static serialization code ahead of time for AOT readiness.',
        bn: 'AOT কম্পাইলারে রানটাইম রিফ্লেকশন বন্ধ থাকায় বিল্ডের সময়ই কোড তৈরি করে রাখা আবশ্যক।'
      },
      explanation: {
        en: 'Standard System.Text.Json relies on runtime reflection to discover properties. Source generators write strongly typed Utf8JsonWriter code at build time, fully AOT-compliant.',
        bn: 'এর ফলে মেমোরি খরচ শূন্যে নেমে আসে এবং চোখের পলকে জেসন প্রসেসিং সম্পন্ন হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-sourcegen-and-the-attribute',
    title: {
      en: 'Roslyn Source Generators & Metaprogramming Quiz',
      bn: 'Roslyn সোর্স জেনারেটর এবং মেটাপ্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-partial-classes-source-generation-requirement',
        kind: 'mcq',
        topic: 'partial-classes-source-generator-extension',
        question: {
          en: 'Why must target C# classes be declared with the "partial" keyword when augmenting them with methods generated by a Roslyn Source Generator?',
          bn: 'যখন কোনো Roslyn সোর্স জেনারেটর দিয়ে ক্লাসে অতিরিক্ত মেথড যোগ করা হয়, তখন মূল C# ক্লাসে "partial" কিওয়ার্ড থাকা কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'The "partial" modifier allows a single class definition to be split across multiple separate C# source files, allowing generated code to add methods into the exact same type',
            bn: '"partial" মডিফায়ার একটি একক ক্লাসের কোডকে একাধিক পৃথক C# ফাইলে লেখার অনুমতি দেয়, যার ফলে জেনারেটর নিজের ফাইল থেকে ঠিক একই ক্লাসে নতুন মেথড যোগ করতে পারে'
          },
          {
            en: 'Because C# classes without "partial" cannot be instantiated',
            bn: 'কারণ "partial" ছাড়া C# ক্লাসের কোনো অবজেক্ট তৈরি করা যায় না'
          },
          {
            en: 'Partial forces the class to run in multiple threads simultaneously',
            bn: 'Partial ক্লাসটিকে একসাথে একাধিক থ্রেডে চলতে বাধ্য করে'
          },
          {
            en: 'Partial is only required when compiling on Apple Mac computers',
            bn: 'Partial কেবল অ্যাপল ম্যাক কম্পিউটারে কম্পাইল করার সময় লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Partial classes allow compiler-generated code to augment user-written code in the same type.',
          bn: 'একই ক্লাস দুই জায়গায় লিখে কম্পাইলারের মাধ্যমে জোড়া লাগাতে "partial" আবশ্যক।'
        },
        explanation: {
          en: 'Source generators cannot modify user-written files; they can only add new files. The "partial" keyword allows the generated file to contribute members to the user\'s class.',
          bn: 'ইউজারের ফাইল স্পর্শ না করে নতুন মেথড যোগ করার এটিই সবচেয়ে মার্জিত কৌশল।'
        }
      },
      {
        id: 'quiz-syntax-tree-vs-semantic-model',
        kind: 'mcq',
        topic: 'syntaxtree-vs-semanticmodel-difference',
        question: {
          en: 'In Roslyn compiler APIs, what is the fundamental difference between a "SyntaxTree" and a "SemanticModel"?',
          bn: 'Roslyn কম্পাইলার এপিআই-তে একটি "SyntaxTree" এবং একটি "SemanticModel"-এর মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'SyntaxTree represents the lexical tokens, grammar structure, and text of code; SemanticModel answers questions about what those tokens mean (resolving symbols, type bindings, and namespace resolution)',
            bn: 'SyntaxTree কোডের আক্ষরিক গঠন, ব্যাকরণ ও টেক্সট নির্দেশ করে; আর SemanticModel সেই প্রতীকগুলোর আসল অর্থ (টাইপ বাইন্ডিং, মেম্বার তথ্য ও নেমস্পেস) উদ্ধার করে প্রকাশ করে'
          },
          {
            en: 'SyntaxTree is written in C++; SemanticModel is written in Java',
            bn: 'SyntaxTree C++ এ লেখা; SemanticModel জাভাতে লেখা'
          },
          {
            en: 'SemanticModel only operates on SQL database queries',
            bn: 'SemanticModel কেবল এসকিউএল ডেটাবেস কুয়েরিতে কাজ করে'
          },
          {
            en: 'There is zero difference between SyntaxTree and SemanticModel',
            bn: 'SyntaxTree এবং SemanticModel এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Syntax is grammar and text; Semantics is meaning, types, and symbol binding.',
          bn: 'সিনট্যাক্স হলো কোডের বাহ্যিক গঠন, আর সিম্যান্টিকস হলো কোডের ভেতরের গভীর অর্থ ও ডেটা টাইপ।'
        },
        explanation: {
          en: 'SyntaxTrees are fast, pure syntactic representations. The SemanticModel queries the Roslyn symbol table to determine the exact type and inheritance graph of identifiers.',
          bn: 'একটি ভেরিয়েবল কোন ক্লাসের তা নিখুঁতভাবে জানতে SemanticModel ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-source-generator-analyzer-packaging',
        kind: 'mcq',
        topic: 'source-generator-nuget-analyzer-packaging',
        question: {
          en: 'How must a Roslyn Source Generator project be packaged inside a NuGet package so that consuming applications execute it at compile time?',
          bn: 'একটি Roslyn সোর্স জেনারেটর প্রজেক্টকে কীভাবে নুগেট প্যাকেজের ভেতর সাজাতে হয় যাতে তা ব্যবহারকারী অ্যাপ্লিকেশনের বিল্ড টাইমে রান করে?'
        },
        options: [
          {
            en: 'The generator assembly must be placed in the "analyzers/dotnet/cs" directory inside the package, with "PrivateAssets=all" so it does not become a runtime dependency',
            bn: 'জেনারেটর অ্যাসেম্বলিকে প্যাকেজের "analyzers/dotnet/cs" ডিরেক্টরিতে রাখতে হয় এবং "PrivateAssets=all" দিয়ে নিশ্চিত করতে হয় যেন এটি কোনো রানটাইম নির্ভরতা না হয়'
          },
          {
            en: 'It must be saved inside the Windows desktop recycle bin',
            bn: 'এটি উইন্ডোজের রিসাইকেল বিনে সংরক্ষণ করতে হয়'
          },
          {
            en: 'The generator must be converted into an MP4 video file',
            bn: 'জেনারেটরটিকে একটি এমপিফোর ভিডিও ফাইলে রূপান্তর করতে হয়'
          },
          {
            en: 'Source generators cannot be distributed via NuGet packages',
            bn: 'সোর্স জেনারেটর নুগেট প্যাকেজের মাধ্যমে বিতরণ করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Roslyn generators ship as analyzer assemblies, running inside the compiler.',
          bn: 'কম্পাইলারের প্লাগইন হিসেবে রান করার জন্য প্যাকেজের "analyzers" ফোল্ডারে এটি স্থাপন করা নিয়ম।'
        },
        explanation: {
          en: 'Generators execute inside the compiler process during build. Packaging them under "analyzers/dotnet/cs" instructs the build toolchain to load them as Roslyn extensions.',
          bn: 'এর ফলে প্রোডাকশন বাইনারিতে কোনো বাড়তি ডিএলএল ছাড়াই বিল্ডের সময় কোড তৈরি হয়ে যায়।'
        }
      },
      {
        id: 'quiz-generatedregex-performance-gain',
        kind: 'mcq',
        topic: 'generatedregex-attribute-source-generator-csharp11',
        question: {
          en: 'What architectural performance benefit does the "[GeneratedRegex(...)]" source generator provide in C# 11 over "new Regex(...)"?',
          bn: 'C# ১১-এর "[GeneratedRegex(...)]" সোর্স জেনারেটর ঐতিহ্যবাহী "new Regex(...)"-এর তুলনায় কোন স্থাপত্যিক পারফরম্যান্স সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It converts regular expressions into an optimized C# state-machine method at compile time, eliminating regex interpretation overhead, eliminating runtime regex compilation latency, and enabling Native AOT',
            bn: 'এটি বিল্ডের সময়ই রেগুলার এক্সপ্রেশনকে একটি উচ্চগতির C# স্টেট-মেশিন মেথডে রূপান্তর করে, যা কোনো ইন্টারপ্রিটেশন বা রানটাইম কম্পাইলেশন ছাড়াই Native AOT-তে বিদ্যুৎ গতিতে চলে'
          },
          {
            en: 'It slows down regex searches to save electricity',
            bn: 'এটি বিদ্যুৎ সাশ্রয় করতে অনুসন্ধানের গতি কমিয়ে দেয়'
          },
          {
            en: 'It deletes non-matching strings from the hard drive',
            bn: 'এটি অমিল স্ট্রিংগুলোকে হার্ড ড্রাইভ থেকে মুছে ফেলে'
          },
          {
            en: 'GeneratedRegex only works with numerical digits',
            bn: 'GeneratedRegex কেবল সংখ্যাসূচক ডিজিট নিয়ে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: '[GeneratedRegex] compiles regexes into dedicated C# state machines at build time.',
          bn: 'কম্পাইল-টাইমেই পুরো রেজেক্স স্টেট মেশিন কোড আকারে তৈরি হওয়ায় রানটাইমে কোনো বাড়তি সময় লাগে না।'
        },
        explanation: {
          en: 'Runtime Regex.CompileToAssembly was deprecated because it required Reflection.Emit. [GeneratedRegex] emits clear C# code at build time, yielding peak speed and full AOT safety.',
          bn: 'টেক্সট ভ্যালিডেশন এবং প্যাটার্ন খোঁজার এটিই আধুনিক C#-এর সবচেয়ে দ্রুতগতির ব্যবস্থা।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-sharp-release',
    title: {
      en: 'Release Optimization, Native AOT & Trimming',
      bn: 'রিলিজ অপটিমাইজেশন, Native AOT এবং ট্রিমিং'
    }
  }
};
