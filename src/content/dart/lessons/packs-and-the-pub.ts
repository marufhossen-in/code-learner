import type { Lesson } from '../../../lib/types';

export const PacksAndThePubLesson: Lesson = {
  slug: 'packs-and-the-pub',
  tech: 'dart',
  title: {
    en: 'Package Management with Pub, Pubspec & Build Systems',
    bn: 'Pub, Pubspec এবং বিল্ড সিস্টেমের মাধ্যমে প্যাকেজ ম্যানেজমেন্ট'
  },
  summary: {
    en: 'Master the Dart package ecosystem and code generation tooling. Understand declarative manifests in pubspec.yaml, navigate semantic versioning (SemVer) with caret constraints (^1.2.0), lock reproducible dependency graphs via pubspec.lock, leverage build_runner for compile-time code generation (JSON serialization, Freezed), and organize modular monorepos.',
    bn: 'Dart প্যাকেজ ইকোসিস্টেম এবং কোড জেনারেশন টুলিং সম্পূর্ণ আয়ত্ত করুন। pubspec.yaml ফাইলের ডিক্লেয়ারেটিভ ম্যানিফেস্ট, ক্যারেট অপারেটর (^1.2.0) সহ সেমভার (SemVer) সংস্করণ নিয়ন্ত্রণ, pubspec.lock দিয়ে পুনরাবৃত্তিযোগ্য ডিপেন্ডেন্সি লক, build_runner দিয়ে কম্পাইল-টাইম কোড জেনারেশন (JSON serialization, Freezed) এবং মডুলার মনোরেপো আর্কিটেকচার।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'pub-manifest-and-semver-heading',
      text: {
        en: 'The Pub Ecosystem, pubspec.yaml, and Semantic Versioning',
        bn: 'Pub ইকোসিস্টেম, pubspec.yaml এবং সিম্যান্টিক ভার্সনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Managing external libraries across collaborative enterprise teams requires deterministic dependency resolution and transparent version contracts. In Dart (Google\'s client-optimized compiled programming language), packages are coordinated through the official Pub toolchain. Every Dart project is governed by a declarative "pubspec.yaml" manifest declaring metadata, SDK constraints, production dependencies, and developer tooling. Dart strictly adheres to Semantic Versioning (SemVer) comprising 3 numeric components: Major, Minor, and Patch. Through the caret operator ("^2.4.0"), developers permit non-breaking minor updates while guarding against breaking changes, recording the exact resolved tree in "pubspec.lock".',
        bn: 'বড় প্রতিষ্ঠানে বিভিন্ন টিমের মাঝে বাইরের লাইব্রেরি ব্যবহারের ক্ষেত্রে সুনির্দিষ্ট ডিপেন্ডেন্সি রেজোলিউশন এবং নির্ভরযোগ্য ভার্সন চুক্তি অত্যন্ত গুরুত্বপূর্ণ। কিন্তু Dart (ক্লায়েন্ট অ্যাপের জন্য গুগলের তৈরি অপটিমাইজড কম্পাইল্ড ভাষা)-এ প্যাকেজ ব্যবস্থাপনা পরিচালিত হয় নিজস্ব অফিসিয়াল Pub টুলচেনের মাধ্যমে। প্রতিটি Dart প্রজেক্ট "pubspec.yaml" নামের একটি ডিক্লেয়ারেটিভ ম্যানিফেস্ট ফাইলের ওপর ভিত্তি করে পরিচালিত হয় যাতে মেটাডেটা, এসডিকে শর্ত এবং ডিপেন্ডেন্সি তালিকা থাকে। Dart কঠোরভাবে সিম্যান্টিক ভার্সনিং (SemVer) মেনে চলে যার মধ্যে ৩ টি সংখ্যা থাকে: মেজর, মাইনর এবং প্যাচ। ক্যারেট অপারেটরের ("^2.4.0") মাধ্যমে ডেভেলপাররা কোনো ব্রেকিং পরিবর্তন ছাড়া নিরাপদ আপডেট গ্রহণ করেন এবং চূড়ান্ত হিসাবটি "pubspec.lock" ফাইলে সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Dart dependency resolution and build_runner code generation pipeline producing companion part files (.g.dart) with zero runtime reflection.',
        bn: 'চিত্র ১: Dart ডিপেন্ডেন্সি রেজোলিউশন এবং build_runner কোড জেনারেশন পাইপলাইন যা কোনো রানটাইম রিফ্লেকশন ছাড়াই সহযোগী ফাইল (.g.dart) তৈরি করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART PUB RESOLUTION &amp; BUILD_RUNNER CODE GENERATION</text>

  <!-- Left: pubspec.yaml resolution -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Dependency Resolution &amp; Lockfile</text>

    <!-- Source -->
    <rect x="15" y="45" width="330" height="50" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">dependencies:</text>
    <text x="35" y="83" fill="#cbd5e1" font-size="10" font-family="monospace">http: ^1.2.0  # &gt;=1.2.0 &lt;2.0.0</text>

    <!-- Lockfile -->
    <rect x="15" y="105" width="330" height="45" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="monospace">pubspec.lock Generated</text>
    <text x="25" y="140" fill="#cbd5e1" font-size="9" font-family="sans-serif">Pins exact git/pub commit hashes</text>

    <!-- Benefit -->
    <rect x="15" y="160" width="330" height="60" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Hermetic Build Guarantee:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">All teammates and CI servers compile 100% identical source trees</text>
  </g>

  <!-- Right: build_runner code generation -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. build_runner Compile-Time Generation</text>

    <!-- Input file -->
    <rect x="15" y="45" width="335" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">@JsonSerializable() class User { ... }</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">part 'user.g.dart'; // Companion part file</text>

    <!-- Generator command -->
    <rect x="15" y="98" width="335" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">dart run build_runner build</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Synthesizes user.g.dart serialization bytecode</text>

    <!-- Benefit -->
    <rect x="15" y="160" width="335" height="60" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="182" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Zero Reflection Penalty:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Compile-time code synthesis preserves AOT tree shaking</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'build-runner-and-code-generation-heading',
      text: {
        en: 'Compile-Time Code Generation with build_runner and Part Files',
        bn: 'build_runner এবং পার্ট ফাইল দিয়ে কম্পাইল-টাইম কোড জেনারেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because runtime reflection (dart:mirrors) is strictly forbidden in AOT-compiled Flutter applications to allow tree-shaking, automated serialization requires compile-time code generation. The Dart community solves this through "build_runner". Using meta-programming annotations (like @JsonSerializable or @freezed), developers declare data contracts alongside a "part" directive pointing to a companion file ("part \'user.g.dart\';"). Executing "dart run build_runner build" parses the Dart Abstract Syntax Tree and automatically synthesizes strongly typed fromJson and toJson routines. The generated file shares the library scope seamlessly, delivering effortless serialization with zero runtime reflection overhead.',
        bn: 'যেহেতু ট্রি-শেকিং ও অ্যাপের সাইজ ছোট রাখতে AOT-কম্পাইল্ড Flutter অ্যাপ্লিকেশনে রানটাইম রিফ্লেকশন নিষিদ্ধ, তাই ডেটা রূপান্তরের জন্য কম্পাইল-টাইম কোড জেনারেশন ব্যবহার করা হয়। Dart কমিউনিটি "build_runner"-এর মাধ্যমে এই সমাধান প্রদান করে। মেটা-প্রোগ্রামিং অ্যানোটেশন (যেমন @JsonSerializable বা @freezed) ব্যবহারের পাশাপাশি ডেভেলপাররা "part" ডিরেক্টিভ লিখে একটি সহযোগী ফাইল লিংক করেন ("part \'user.g.dart\';")। "dart run build_runner build" কমান্ডটি Dart AST বিশ্লেষণ করে স্বয়ংক্রিয়ভাবে টাইপ-সেফ fromJson এবং toJson মেথড লিখে দেয়। তৈরি হওয়া ফাইলটি মূল ক্লাসের লাইব্রেরি স্কোপ নিখুঁতভাবে শেয়ার করে, যা কোনো রিফ্লেকশন খরচ ছাড়াই সর্বোচ্চ দ্রুতগতির সিরিয়ালাইজেশন নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart pub SemVer dependency resolution with caret ranges, lockfile pinning, and build_runner code generation.',
        bn: 'Dart pub সেমভার ডিপেন্ডেন্সি রেজোলিউশন, লকফাইল পিনিং এবং build_runner কোড জেনারেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Dart Pub Dependency Resolution and build_runner Code Generation

export interface SemVerPackage {
  name: string;
  caretConstraint: string; // e.g. "^1.2.0"
  availableVersions: string[];
}

export class DartPubResolverEngine {
  // Simulates Caret Operator (^X.Y.Z) resolution:
  // ^1.2.0 allows >= 1.2.0 and < 2.0.0
  public static resolveCaret(constraint: string, available: string[]): string {
    const minVersion = constraint.replace('^', '');
    const major = parseInt(minVersion.split('.')[0], 10);

    const validVersions = available.filter(v => {
      const vMajor = parseInt(v.split('.')[0], 10);
      return vMajor === major && v >= minVersion;
    });

    // Return the highest matching non-breaking version
    return validVersions.sort().reverse()[0] ?? minVersion;
  }

  // Simulates build_runner compile-time code synthesis for @JsonSerializable()
  public static generateSerializationPartFile(className: string, fields: { name: string; type: string }[]): {
    partFileName: string;
    synthesizedLines: number;
    reflectionUsed: boolean;
  } {
    const partFileName = className.toLowerCase() + '.g.dart';
    // Each field generates serializer and deserializer mappings
    const lineCount = fields.length * 4 + 10;

    return {
      partFileName,
      synthesizedLines: lineCount,
      reflectionUsed: false // Zero runtime reflection!
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Pub SemVer Caret Resolution ---');
const httpPackage: SemVerPackage = {
  name: 'http',
  caretConstraint: '^1.2.0',
  availableVersions: ['1.1.0', '1.2.0', '1.2.2', '1.3.0', '2.0.0']
};

const resolvedVersion = DartPubResolverEngine.resolveCaret(httpPackage.caretConstraint, httpPackage.availableVersions);
console.log('Package Requested Constraint:', httpPackage.caretConstraint); // ^1.2.0
console.log('Highest Non-Breaking Version Resolved in pubspec.lock:', resolvedVersion); // 1.3.0

console.log('\n--- 2. Testing build_runner Compile-Time Code Generation ---');
const userFields = [
  { name: 'id', type: 'int' },
  { name: 'name', type: 'String' },
  { name: 'email', type: 'String' },
  { name: 'isActive', type: 'bool' }
];

const genResult = DartPubResolverEngine.generateSerializationPartFile('UserDTO', userFields);
console.log('Generated Companion Part File:', genResult.partFileName); // userdto.g.dart
console.log('Synthesized Serialization Lines of Code:', genResult.synthesizedLines); // 26
console.log('Runtime Reflection Required?:', genResult.reflectionUsed); // false (Zero reflection penalty!)`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Pub Package Manager',
          def: {
            en: 'Official package manager for Dart handling repository downloads, dependency resolution, and script execution.',
            bn: 'অফিসিয়াল প্যাকেজ ম্যানেজার যা রিপোজিটরি থেকে কোড ডাউনলোড, ভার্সন সমন্বয় ও স্ক্রিপ্ট চালায়।'
          }
        },
        {
          term: 'Caret Constraint (^)',
          def: {
            en: 'Version operator allowing non-breaking minor and patch upgrades up to the next major release (e.g. ^1.2.0).',
            bn: 'ভার্সন অপারেটর যা পরবর্তী মেজর ভার্সনের আগ পর্যন্ত সব নিরাপদ মাইনর ও প্যাচ আপডেট গ্রহণের অনুমতি দেয়।'
          }
        },
        {
          term: 'pubspec.lock',
          def: {
            en: 'Lockfile generated by Pub pinning exact dependency versions and hashes for reproducible hermetic builds.',
            bn: 'লকফাইল যা সমস্ত প্যাকেজের সঠিক ভার্সন ও হ্যাশ পিন করে রেখে প্রতিটি মেশিনে হুবহু এক বিল্ড নিশ্চিত করে।'
          }
        },
        {
          term: 'build_runner',
          def: {
            en: 'Dart toolchain utility orchestrating compile-time code generation for JSON serialization and immutable state.',
            bn: 'টুলচেন ইউটিলিটি যা কোনো রানটাইম রিফ্লেকশন ছাড়াই বিল্ডের সময় স্বয়ংক্রিয় কোড জেনারেশন চালায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caret-operator-semver-meaning-ex1',
      kind: 'mcq',
      topic: 'caret-operator-semantic-versioning-range',
      question: {
        en: 'What exact version range is accepted when specifying "http: ^1.2.0" in a Dart pubspec.yaml file?',
        bn: 'Dart pubspec.yaml ফাইলে "http: ^1.2.0" লিখলে সুনির্দিষ্টভাবে কোন ভার্সন সীমাটি গৃহীত হয়?'
      },
      options: [
        {
          en: 'Any version greater than or equal to 1.2.0 and strictly less than 2.0.0 (>=1.2.0 <2.0.0), allowing non-breaking updates while blocking breaking changes',
          bn: '১.২.০-এর সমান বা বড় এবং কঠোরভাবে ২.০.০-এর ছোট যেকোনো ভার্সন (>=1.2.0 <2.0.0), যা কোনো ব্রেকিং পরিবর্তন ছাড়া নিরাপদ আপডেট দেয়'
        },
        {
          en: 'Strictly version 1.2.0 only, forbidding all patch updates',
          bn: 'কঠোরভাবে কেবল ১.২.০ ভার্সন এবং অন্য কোনো আপডেট নিষিদ্ধ'
        },
        {
          en: 'Any version ever released up to version 100.0.0',
          bn: '১০০.০.০ ভার্সন পর্যন্ত প্রকাশিত যেকোনো সংস্করণ'
        },
        {
          en: 'Caret syntax was deprecated in Dart 2.0',
          bn: 'Dart ২.০ সংস্করণে ক্যারেট সিনট্যাক্স বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The caret operator (^X.Y.Z) permits updates up to, but not including, the next major version X+1.0.0.',
        bn: 'মেজর ভার্সন না বদলানো পর্যন্ত সব নিরাপদ মাইনর আপডেট গ্রহণ করাই এর কাজ।'
      },
      explanation: {
        en: 'Caret syntax prevents catastrophic breaking changes by locking the major version boundary, automatically incorporating non-breaking bug fixes and features.',
        bn: 'এর মাধ্যমে অ্যাপের কোড না ভেঙে স্বয়ংক্রিয়ভাবে বাগ ফিক্স ও নতুন ফিচার পাওয়া যায়।'
      }
    },
    {
      id: 'pubspec-lock-reproducible-builds-ex2',
      kind: 'mcq',
      topic: 'pubspec-lock-source-control-reproducible-builds',
      question: {
        en: 'Why is committing "pubspec.lock" to version control (Git) standard best practice for application projects?',
        bn: 'অ্যাপ্লিকেশন প্রজেক্টের জন্য কেন "pubspec.lock" ফাইলটি গিট (Git) ভার্সন কন্ট্রোলে জমা রাখা আদর্শ সেরা পদ্ধতি?'
      },
      options: [
        {
          en: 'It pins the exact resolved versions and content hashes of all direct and transitive dependencies, ensuring 100% reproducible builds across all developer workstations and CI servers',
          bn: 'এটি সমস্ত সরাসরি ও পরোক্ষ প্যাকেজের সঠিক ভার্সন ও হ্যাশ পিন করে রাখে, ফলে সব সহকর্মী ও সিআই সার্ভারে ১০০% হুবহু একই বিল্ড নিশ্চিত হয়'
        },
        {
          en: 'It accelerates internet Wi-Fi download speeds by 5x',
          bn: 'এটি ইন্টারনেট ডাউনলোডের গতি ৫ গুণ বৃদ্ধি করে'
        },
        {
          en: 'It deletes all temporary image caches from the computer',
          bn: 'এটি কম্পিউটার থেকে সমস্ত অস্থায়ী ছবি মুছে ফেলে'
        },
        {
          en: 'pubspec.lock should never be committed to Git under any circumstances',
          bn: 'pubspec.lock কখনোই গিটে জমা রাখা উচিত নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The lockfile guarantees that every machine compiles identical dependency versions.',
        bn: 'আমার কম্পিউটারে চলে কিন্তু অন্যের কম্পিউটারে চলে না—এই কুখ্যাত সমস্যা দূর করে লকফাইল।'
      },
      explanation: {
        en: 'Without pubspec.lock, two engineers running "pub get" on different days might get differing minor versions. Committing the lockfile guarantees deterministic builds.',
        bn: 'ফলে প্রতিটি মেশিনে হুবহু একই প্যাকেজ ডাউনলোড হয়ে অনাকাঙ্ক্ষিত বাগ রোধ হয়।'
      }
    },
    {
      id: 'build-runner-part-directive-ex3',
      kind: 'mcq',
      topic: 'build-runner-part-directive-library-scope',
      question: {
        en: 'How does the "part" directive (e.g. "part \'user.g.dart\';") allow generated serialization code to access private members of a Dart class?',
        bn: '"part" ডিরেক্টিভ (যেমন "part \'user.g.dart\';") কীভাবে জেনারেট করা কোডকে Dart ক্লাসের প্রাইভেট ফিল্ড অ্যাক্সেস করার সুবিধা দেয়?'
      },
      options: [
        {
          en: 'The part file becomes an integral physical extension of the same library, granting it full direct access to private members prefixed with an underscore',
          bn: 'পার্ট ফাইলটি একই লাইব্রেরির অবিচ্ছেদ্য অংশে পরিণত হয়, যার ফলে এটি আন্ডারস্কোরযুক্ত প্রাইভেট মেম্বারগুলোতেও সরাসরি অ্যাক্সেস লাভ করে'
        },
        {
          en: 'It decrypts private members using an RSA certificate',
          bn: 'এটি একটি আরএসএ সার্টিফিকেট দিয়ে প্রাইভেট মেম্বার আনলক করে'
        },
        {
          en: 'It converts private members into public global variables',
          bn: 'এটি প্রাইভেট মেম্বারকে পাবলিক গ্লোবাল ভ্যারিয়েবলে রূপান্তর করে'
        },
        {
          en: 'Part files cannot access private members in Dart',
          bn: 'Dart-এ পার্ট ফাইল কোনো প্রাইভেট মেম্বার অ্যাক্সেস করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Part files belong to the same library scope and share private member access.',
        bn: 'একই পরিবারের সদস্যের মতো একে অপরের ব্যক্তিগত ফিল্ড সরাসরি দেখতে ও ব্যবহার করতে পারে।'
      },
      explanation: {
        en: 'In Dart, privacy is at the library level, not class level. Because a part file is compiled as part of the host library, generated code can read private fields seamlessly.',
        bn: 'ফলে কোনো বাড়তি গেটার-সেটার ছাড়াই জেনারেট করা কোড নিখুঁতভাবে সিরিয়ালাইজ করতে পারে।'
      }
    },
    {
      id: 'dependencies-vs-dev-dependencies-ex4',
      kind: 'mcq',
      topic: 'dependencies-vs-dev-dependencies-packaging',
      question: {
        en: 'What is the architectural distinction between "dependencies" and "dev_dependencies" in a pubspec.yaml file?',
        bn: 'একটি pubspec.yaml ফাইলে "dependencies" এবং "dev_dependencies"-এর মধ্যে স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: '"dependencies" are bundled into the production release application; "dev_dependencies" are utilized strictly for local development, testing, and code generation',
          bn: '"dependencies" চূড়ান্ত প্রোডাকশন অ্যাপের বাইনারিতে যুক্ত হয়; আর "dev_dependencies" কেবল লোকাল ডেভেলপমেন্ট, টেস্টিং এবং কোড জেনারেশনে ব্যবহৃত হয়'
        },
        {
          en: 'dev_dependencies run exclusively on Linux supercomputers',
          bn: 'dev_dependencies কেবল লিনাক্স সুপারকম্পিউটারে চলে'
        },
        {
          en: 'dependencies are deleted whenever the app restarts',
          bn: 'অ্যাপ রিস্টার্ট করলেই dependencies মুছে যায়'
        },
        {
          en: 'There is zero difference between dependencies and dev_dependencies',
          bn: 'dependencies এবং dev_dependencies-এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'dev_dependencies are tools for building and testing, not shipped in release binaries.',
        bn: 'রিলিজ অ্যাপের সাইজ ছোট রাখতে বিল্ড ও টেস্ট টুলগুলো dev_dependencies-এ রাখা হয়।'
      },
      explanation: {
        en: 'Tools like build_runner and test frameworks belong in dev_dependencies so they never inflate production APK download sizes for end users.',
        bn: 'এর মাধ্যমে অপ্রয়োজনীয় প্যাকেজ প্রোডাকশন অ্যাপে ঢুকে অ্যাপের সাইজ বাড়ানো বন্ধ হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-packs-and-the-pub',
    title: {
      en: 'Dart Pub & Build Runner Quiz',
      bn: 'Dart Pub এবং বিল্ড রানার কুইজ'
    },
    questions: [
      {
        id: 'quiz-pub-cache-global-sharing',
        kind: 'mcq',
        topic: 'pub-cache-system-wide-disk-deduplication',
        question: {
          en: 'How does the central ".pub-cache" directory prevent wasting gigabytes of disk space across multiple Dart and Flutter projects on a developer machine?',
          bn: 'ডেভেলপারের কম্পিউটারে একাধিক Dart ও Flutter প্রজেক্টের মাঝে কেন্দ্রীয় ".pub-cache" ডিরেক্টরি কীভাবে গিগাবাইট ডিস্ক অপচয় রোধ করে?'
        },
        options: [
          {
            en: 'It downloads each package version once globally to a system cache, linking it across projects rather than duplicating copies inside every project directory',
            bn: 'এটি প্রতিটি প্যাকেজ ভার্সন বিশ্বব্যাপী একবারই সিস্টেম ক্যাশে ডাউনলোড করে এবং বিভিন্ন প্রজেক্টে লিংক করে দেয়, ফলে প্রতি ফোল্ডারে কপি করার অপচয় বন্ধ হয়'
          },
          {
            en: 'It deletes all user photos from the testing device',
            bn: 'এটি টেস্টিং ডিভাইস থেকে ব্যবহারকারীর সমস্ত ছবি মুছে ফেলে'
          },
          {
            en: 'It compresses Dart files into MP4 video format',
            bn: 'এটি Dart ফাইলগুলোকে এমপি৪ ভিডিও ফরম্যাটে সংকুচিত করে'
          },
          {
            en: 'The pub cache was deprecated in Dart 2.12',
            bn: 'Dart ২.১২ সংস্করণে পাব ক্যাশ বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pub caches packages globally in a central directory to avoid duplicate downloads.',
          bn: 'একবার ডাউনলোড করে শত প্রজেক্টে শেয়ার করার বুদ্ধিমান ব্যবস্থা।'
        },
        explanation: {
          en: 'Unlike Node.js node_modules that duplicates dependencies per repository, Pub maintains a system-wide cache, saving dozens of gigabytes of SSD storage.',
          bn: 'ফলে প্রতি প্রজেক্টে বিশাল ফোল্ডার তৈরি না হয়ে প্রচুর ডিস্ক স্পেস সাশ্রয় হয়।'
        }
      },
      {
        id: 'quiz-build-runner-watch-mode',
        kind: 'mcq',
        topic: 'build-runner-watch-incremental-compilation',
        question: {
          en: 'What efficiency advantage does running "dart run build_runner watch" offer during active development over running "build"?',
          bn: 'সক্রিয় ডেভেলপমেন্টের সময় "build" চালানোর চেয়ে "dart run build_runner watch" চালানো কোন পারফরম্যান্স সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It runs a persistent background daemon that monitors filesystem changes, incrementally regenerating only the specific part files whose source annotations changed',
            bn: 'এটি ব্যাকগ্রাউন্ডে চালু থেকে ফাইল পরিবর্তন পর্যবেক্ষণ করে এবং পুরো প্রজেক্ট নতুন করে না বানিয়ে কেবল পরিবর্তিত ফাইলের সহযোগী পার্ট ফাইলগুলো পুনরায় তৈরি করে'
          },
          {
            en: 'It doubles the physical battery percentage of the laptop',
            bn: 'এটি ল্যাপটপের ব্যাটারি চার্জের শতকরা হার দ্বিগুণ করে দেয়'
          },
          {
            en: 'It disables all compiler error messages',
            bn: 'এটি সমস্ত কম্পাইলার এরর মেসেজ বন্ধ করে দেয়'
          },
          {
            en: 'watch mode was removed in Dart 3.0',
            bn: 'Dart ৩.০ সংস্করণে watch মোড বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'watch mode incrementally regenerates only files that change.',
          bn: 'বারবার পুরো প্রজেক্ট বিল্ড না করে শুধু বদলানো ফাইলটুকু নিমেষে তৈরি করার উপায়।'
        },
        explanation: {
          en: 'build_runner watch avoids full codebase scans by maintaining an in-memory dependency graph, regenerating companion .g.dart files in sub-second intervals on file save.',
          bn: 'এর মাধ্যমে ডেভেলপার সেভ করা মাত্রই সেকেন্ডের ভগ্নাংশে নতুন কোড তৈরি হয়ে যায়।'
        }
      },
      {
        id: 'quiz-git-path-dependency-overrides',
        kind: 'mcq',
        topic: 'dependency-overrides-debugging-forks',
        question: {
          en: 'When is using "dependency_overrides" in pubspec.yaml appropriate in professional Dart engineering?',
          bn: 'পেশাদার Dart ইঞ্জিনিয়ারিংয়ে কখন pubspec.yaml ফাইলে "dependency_overrides" ব্যবহার করা যথাযথ?'
        },
        options: [
          {
            en: 'Temporarily pointing a dependency to a local fork or experimental git branch during development or debugging without waiting for a formal upstream Pub release',
            bn: 'কোনো প্যাকেজের অফিসিয়াল রিলিজের অপেক্ষা না করে সাময়িকভাবে লোকাল ফোল্ডার বা নিজস্ব গিট ব্রাঞ্চের কোড লিংক করে পরীক্ষা বা ডিবাগ করার জন্য'
          },
          {
            en: 'To disable sound null safety across the entire application',
            bn: 'পুরো অ্যাপ্লিকেশনের জন্য সাউন্ড নাল সেফটি বন্ধ করতে'
          },
          {
            en: 'To make apps run without an operating system',
            bn: 'অপারেটিং সিস্টেম ছাড়াই অ্যাপ চালানোর জন্য'
          },
          {
            en: 'dependency_overrides is strictly forbidden in Dart projects',
            bn: 'Dart প্রজেক্টে dependency_overrides ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'dependency_overrides forces Pub to resolve specific local paths or git commits.',
          bn: 'প্যাকেজের কোনো বাগ নিজের মতো ঠিক করে সাথে সাথে টেস্ট করার চমৎকার মাধ্যম।'
        },
        explanation: {
          en: 'dependency_overrides lets developers test bug fixes on local clones of third-party libraries. However, it should be removed before publishing packages to pub.dev.',
          bn: 'ফলে মূল প্যাকেজের আপডেট আসার আগেই নিজের প্রজেক্টের কাজ নির্বিঘ্নে চালিয়ে নেওয়া যায়।'
        }
      },
      {
        id: 'quiz-freezed-union-types-code-generation',
        kind: 'mcq',
        topic: 'freezed-package-sealed-union-types',
        question: {
          en: 'What architectural power does the popular "freezed" code generator package bring to Dart domain modeling?',
          bn: 'জনপ্রিয় "freezed" কোড জেনারেটর প্যাকেজটি Dart ডোমেন মডেলিংয়ে কোন স্থাপত্যিক ক্ষমতা যোগ করে?'
        },
        options: [
          {
            en: 'It automatically synthesizes immutable data classes, deep copyWith() methods, structural value equality, and union/pattern matching methods with zero boilerplate',
            bn: 'এটি স্বয়ংক্রিয়ভাবে অপরিবর্তনীয় ডেটা ক্লাস, ডিপ copyWith() মেথড, কাঠামোগত সমতা এবং ইউনিয়ন টাইপের জন্য প্যাটার্ন ম্যাচিং মেথড তৈরি করে দেয় কোনো বাড়তি কোড ছাড়া'
          },
          {
            en: 'It freezes the device processor at zero degrees Celsius',
            bn: 'এটি ডিভাইসের প্রসেসরকে শূন্য ডিগ্রি সেলসিয়াসে জমিয়ে রাখে'
          },
          {
            en: 'It converts the application into a static HTML webpage',
            bn: 'এটি অ্যাপ্লিকেশনটিকে একটি স্ট্যাটিক এইচটিএমএল ওয়েবপেজে রূপান্তর করে'
          },
          {
            en: 'The freezed package was banned by Google in 2024',
            bn: '২০২৪ সালে গুগল freezed প্যাকেজ নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Freezed generates immutable union models, deep copying, and pattern matching.',
          bn: 'ডেটা ক্লাসের সমতা, কপি এবং স্টেট ম্যানেজমেন্টের সমস্ত বয়লারপ্লেট দূর করার সেরা প্যাকেজ।'
        },
        explanation: {
          en: 'Freezed is the standard for immutable domain modeling in Flutter (especially with Bloc/Riverpod), generating copyWith and when/map methods that ensure strict immutability.',
          bn: 'এর মাধ্যমে জটিল স্টেট ম্যানেজমেন্ট কোড অত্যন্ত পরিষ্কার, নিরাপদ ও বাগ-মুক্ত রাখা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-dart-release',
    title: {
      en: 'The Dart 3 Production Pipeline, Ahead-of-Time (AOT) & Wasm',
      bn: 'Dart ৩ প্রোডাকশন পাইপলাইন, Ahead-of-Time (AOT) এবং Wasm'
    }
  }
};
