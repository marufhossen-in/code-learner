import type { Lesson } from '../../../lib/types';

export const TheNugetServeLesson: Lesson = {
  slug: 'the-nuget-serve',
  tech: 'csharp',
  title: {
    en: 'NuGet Packaging, xUnit Testing & Production Deployment',
    bn: 'NuGet প্যাকেজিং, xUnit টেস্টিং এবং প্রোডাকশন ডিপ্লয়মেন্ট'
  },
  summary: {
    en: 'Package and deploy enterprise C# solutions to production: manage dependencies with NuGet and central package management (Directory.Packages.props), write robust automated tests using xUnit, and publish self-contained trimmed single-file executables with Native AOT.',
    bn: 'এন্টারপ্রাইজ C# সলিউশন প্যাকেজ করে প্রোডাকশনে ডিপ্লয় করুন: NuGet এবং সেন্ট্রাল প্যাকেজ ম্যানেজমেন্ট দিয়ে ডিপেনডেন্সি পরিচালনা, xUnit দিয়ে স্বয়ংক্রিয় টেস্ট লিখন এবং Native AOT দিয়ে সেলফ-কনটেইন্ড ট্রিমড একক এক্সিকিউটেবল তৈরি।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'nuget-packaging-and-central-management-heading',
      text: {
        en: 'The NuGet Package Ecosystem and Central Package Management',
        bn: 'NuGet প্যাকেজ ইকোসিস্টেম এবং সেন্ট্রাল প্যাকেজ ম্যানেজমেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Building scalable enterprise systems requires modularizing functionality into reusable class libraries. NuGet is the official package manager for .NET, distributing compiled assemblies and type metadata packed in .nupkg zip archives. In large enterprise solutions containing 10 or more interconnected projects, individual .csproj files can drift, causing version conflicts across shared libraries. Modern .NET resolves this using Central Package Management (CPM). By declaring package versions inside a root Directory.Packages.props file, all projects reference dependencies uniformly, guaranteeing build repeatability across continuous delivery pipelines.',
        bn: 'স্কেলেবল এন্টারপ্রাইজ সফটওয়্যার তৈরির জন্য কার্যকারিতাকে বিভিন্ন পুনঃব্যবহারযোগ্য ক্লাস লাইব্রেরিতে বিভক্ত করতে হয়। NuGet হলো .NET-এর অফিশিয়াল প্যাকেজ ম্যানেজার, যা কম্পাইল করা অ্যাসেম্বলি এবং মেটাডেটাকে .nupkg জিপ ফাইলে বিতরণ করে। ১০ বা তার বেশি ইন্টারকানেক্টেড প্রজেক্ট সম্বলিত বৃহৎ এন্টারপ্রাইজ সিস্টেমে প্রতিটি .csproj ফাইলে আলাদা সংস্করণ লিখলে কনফ্লিক্ট দেখা দেয়। আধুনিক .NET সেন্ট্রাল প্যাকেজ ম্যানেজমেন্ট (CPM) এর মাধ্যমে এই সমস্যার সমাধান করেছে। রুট ডিরেক্টরিতে Directory.Packages.props ফাইলের ভেতর একবার সংস্করণ উল্লেখ করলে সব প্রজেক্ট একই সংস্করণ ব্যবহার করে, যা সিআই/সিডি বিল্ডে শতভাগ সামঞ্জস্য বজায় রাখে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of C# packaging and release: From modular class libraries through xUnit test automation, NuGet distribution, and production deployment.',
        bn: 'চিত্র ১: C# প্যাকেজিং এবং রিলিজ পাইপলাইনের পূর্ণাঙ্গ কার্যপ্রবাহ: মডুলার লাইব্রেরি থেকে xUnit টেস্ট অটোমেশন, NuGet প্যাকেজ বিতরণ এবং প্রোডাকশন ডিপ্লয়মেন্ট।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# PACKAGING, XUNIT TEST &amp; PRODUCTION RELEASE PIPELINE</text>

  <!-- Step 1: Solution Source -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Modular Source</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Solution (.sln)</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">10+ Class Libraries</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Directory.Packages</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Central Management</text>
  </g>

  <!-- Step 2: Automated Tests -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Automated Tests</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">xUnit Test Suite</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">[Fact] &amp; [Theory]</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Assert.Equal(a, b)</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Regression Defense</text>
  </g>

  <!-- Step 3: NuGet Package -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. NuGet Package</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">dotnet pack</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">App.1.0.0.nupkg</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">SemVer 3-Part Spec</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Reusable Artifact</text>
  </g>

  <!-- Step 4: Native AOT Release -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Production Ship</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">dotnet publish</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">PublishAot=true</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Single Native Binary</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Cloud Container Ready</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'xunit-testing-and-native-aot-heading',
      text: {
        en: 'Automated Testing with xUnit and Production Native AOT Publishing',
        bn: 'xUnit দিয়ে স্বয়ংক্রিয় টেস্টিং এবং প্রোডাকশন নেটিভ AOT পাবলিশিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Enterprise engineering demands reliable automated regression testing. The modern standard in the .NET ecosystem is xUnit. Developers decorate test methods with [Fact] for invariant single-scenario assertions and [Theory] paired with [InlineData] to evaluate parameterized input matrices. When deploying cloud applications, developers execute "dotnet publish". Adding "/p:PublishSingleFile=true" bundles dependencies into an isolated single executable. In .NET 8, enabling "/p:PublishAot=true" compiles the application into a standalone native binary, delivering instant sub-millisecond cold starts and eliminating the requirement for an installed .NET runtime on host servers.',
        bn: 'এন্টারপ্রাইজ সফটওয়্যার ইঞ্জিনিয়ারিংয়ে স্বয়ংক্রিয় রিগ্রেশন টেস্টিং একটি অপরিহার্য শর্ত। .NET ইকোসিস্টেমে এর প্রধান মানদণ্ড হলো xUnit ফ্রেমওয়ার্ক। ডেভেলপাররা সাধারণ অপরিবর্তনীয় টেস্টের জন্য [Fact] অ্যানোটেশন ব্যবহার করেন এবং বিভিন্ন ইনপুট ডেটাসেট একসাথে পরীক্ষার জন্য [Theory] এর সাথে [InlineData] ব্যবহার করেন। ক্লাউড সার্ভারে অ্যাপ্লিকেশন পাঠাতে "dotnet publish" কমান্ড চালানো হয়। "/p:PublishSingleFile=true" ফ্ল্যাগ সমস্ত ডিপেনডেন্সিকে একটি একক এক্সিকিউটেবলে বান্ডেল করে দেয়। তাছাড়া .NET ৮ সংস্করণে "/p:PublishAot=true" যুক্ত করলে অ্যাপটি অপারেটিং সিস্টেমের সরাসরি নেটিভ বাইনারিতে পরিণত হয়, যা সাব-মিলিসেকেন্ডে বিদ্যুৎ গতিতে চালু হয় এবং সার্ভারে কোনো .NET রানটাইম ইনস্টল রাখার বাধ্যবাধকতা থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of an xUnit test runner executing [Fact] and parameterized [Theory] test matrices, validating assertion outcomes.',
        bn: 'xUnit টেস্ট রানার সিমুলেশন যা [Fact] এবং [Theory] প্যারামিটারাইজড টেস্ট ম্যাট্রিক্স চালিয়ে অ্যাসার্শনের সত্যতা যাচাই করে।'
      },
      code: `// Simulation of C# xUnit Test Runner and Test Case Assertions

export interface TestCase {
  name: string;
  kind: 'Fact' | 'Theory';
  inputs?: any[];
  run: (...args: any[]) => void;
}

export class XUnitTestRunnerSimulator {
  private passed: number = 0;
  private failed: number = 0;

  public runTest(test: TestCase): void {
    try {
      if (test.kind === 'Fact') {
        test.run();
        this.passed++;
        console.log('[xUnit [Fact] Passed]:', test.name);
      } else if (test.kind === 'Theory' && test.inputs) {
        for (const inputRow of test.inputs) {
          test.run(...inputRow);
        }
        this.passed++;
        console.log('[xUnit [Theory] Matrix Passed]:', test.name);
      }
    } catch (err: any) {
      this.failed++;
      console.log('[xUnit FAILED]:', test.name, '-', err.message);
    }
  }

  public getSummary(): { passed: number; failed: number } {
    return { passed: this.passed, failed: this.failed };
  }
}

// Business method under test: discount calculation
function computeDiscount(years: number): number {
  return years >= 5 ? 20 : 10;
}

// Execution demonstration
const runner = new XUnitTestRunnerSimulator();

// 1. [Fact] invariant test
runner.runTest({
  name: 'NewCustomer_GetsStandardDiscount_Fact',
  kind: 'Fact',
  run: () => {
    const discount = computeDiscount(2);
    if (discount !== 10) throw new Error('Expected 10 but got ' + discount);
  }
});

// 2. [Theory] parameterized matrix test
runner.runTest({
  name: 'CustomerDiscount_EvaluatesAcrossTiers_Theory',
  kind: 'Theory',
  inputs: [
    [1, 10], // 1 year -> 10%
    [5, 20], // 5 years -> 20%
    [8, 20]  // 8 years -> 20%
  ],
  run: (years: number, expected: number) => {
    const actual = computeDiscount(years);
    if (actual !== expected) throw new Error('Failed for years ' + years);
  }
});

const summary = runner.getSummary();
console.log('Total Automated Tests Passed:', summary.passed); // 2
console.log('Total Automated Tests Failed:', summary.failed); // 0`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'NuGet',
          def: {
            en: 'The standard package manager for .NET, publishing and consuming reusable compiled libraries packaged in .nupkg archives.',
            bn: '.NET-এর অফিসিয়াল প্যাকেজ ম্যানেজার যা .nupkg ফরম্যাটে লাইব্রেরি শেয়ার ও ব্যবহার করার সুবিধা দেয়।'
          }
        },
        {
          term: 'Central Package Management',
          def: {
            en: 'Feature managing dependency versions across multiple projects from a single root Directory.Packages.props configuration file.',
            bn: 'সুবিধা যা একটি মাত্র ফাইলের মাধ্যমে সলিউশনের সমস্ত প্রজেক্টের প্যাকেজ সংস্করণ এক জায়গা থেকে নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'xUnit',
          def: {
            en: 'Leading open-source unit testing framework in .NET utilizing [Fact] and [Theory] attributes for test automation.',
            bn: '.NET-এর আধুনিক টেস্টিং ফ্রেমওয়ার্ক যা [Fact] এবং [Theory] দিয়ে স্বয়ংক্রিয় ইউনিট টেস্ট নিশ্চিত করে।'
          }
        },
        {
          term: 'Native AOT',
          def: {
            en: 'Ahead-of-Time compilation model compiling C# directly into a self-contained native executable without a JIT compiler.',
            bn: 'কম্পাইলেশন মডেল যা কোনো JIT কম্পাইলার ছাড়াই C# অ্যাপকে সরাসরি নেটিভ একক এক্সিকিউটেবলে পরিণত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'xunit-fact-vs-theory-ex1',
      kind: 'mcq',
      topic: 'xunit-fact-vs-theory-distinction',
      question: {
        en: 'What is the distinction between the [Fact] and [Theory] attributes in the xUnit testing framework?',
        bn: 'xUnit টেস্টিং ফ্রেমওয়ার্কে [Fact] এবং [Theory] অ্যানোটেশনের মধ্যে মূল পার্থক্য কী?'
      },
      options: [
        {
          en: '[Fact] tests an invariant scenario that is always true with no parameters; [Theory] tests a parameterized suite executed against multiple data sets via [InlineData]',
          bn: '[Fact] এমন একটি অপরিবর্তনীয় দৃশ্যপট পরীক্ষা করে যা কোনো প্যারামিটার ছাড়াই চলে; আর [Theory] হলো [InlineData] দিয়ে একাধিক ইনপুটের ওপর চালিত একটি প্যারামিটারাইজড টেস্ট'
        },
        {
          en: '[Fact] runs in production while [Theory] runs only on development laptops',
          bn: '[Fact] প্রোডাকশনে চলে আর [Theory] কেবল ডেভেলপারের ল্যাপটপে চলে'
        },
        {
          en: '[Fact] is written in C++ and [Theory] is written in C#',
          bn: '[Fact] লেখা হয় C++ এ এবং [Theory] লেখা হয় C# এ'
        },
        {
          en: 'Both attributes behave identically with zero differences',
          bn: 'উভয় অ্যানোটেশন অবিকল একই এবং এদের মাঝে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: '[Fact] is for parameterless tests; [Theory] accepts parameter data rows.',
        bn: '[Fact] একক টেস্টের জন্য; [Theory] একাধিক ইনপুটের সমন্বয়ে টেস্ট চালাতে ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Use [Fact] for standard invariant tests. Use [Theory] with [InlineData] or [MemberData] to test multiple data variations.',
        bn: 'প্যারামিটারহীন সাধারণ টেস্টে [Fact] এবং বিভিন্ন ইনপুটের ক্ষেত্রে [Theory] ব্যবহার করাই xUnit-এর স্ট্যান্ডার্ড।'
      }
    },
    {
      id: 'central-package-management-benefits-ex2',
      kind: 'mcq',
      topic: 'central-package-management-consistency',
      question: {
        en: 'What problem does Central Package Management (Directory.Packages.props) eliminate across multi-project .NET solutions?',
        bn: 'একাধিক প্রজেক্টযুক্ত .NET সলিউশনে সেন্ট্রাল প্যাকেজ ম্যানেজমেন্ট (Directory.Packages.props) কোন সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It eliminates version drift by defining package versions in one centralized root file, ensuring all projects reference identical library versions',
          bn: 'এটি একটিমাত্র কেন্দ্রীয় রুট ফাইলে প্যাকেজের সংস্করণ নির্দিষ্ট করে ভার্সন বৈষম্য দূর করে, যার ফলে সব প্রজেক্ট একই সংস্করণ ব্যবহার করে'
        },
        {
          en: 'It deletes all third-party libraries from the internet',
          bn: 'এটি ইন্টারনেট থেকে সমস্ত থার্ড-পার্টি লাইব্রেরি মুছে ফেলে'
        },
        {
          en: 'It compresses C# code into encrypted MP4 video files',
          bn: 'এটি C# কোডকে এনক্রিপ্ট করা MP4 ভিডিওতে রূপান্তর করে'
        },
        {
          en: 'Central Package Management restricts solutions to 1 project maximum',
          bn: 'সেন্ট্রাল প্যাকেজ ম্যানেজমেন্ট সলিউশনকে সর্বোচ্চ ১ টি প্রজেক্টে সীমাবদ্ধ রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'CPM locks dependency versions centrally in Directory.Packages.props.',
        bn: 'CPM একটিমাত্র ফাইলে সব ডিপেনডেন্সির সংস্করণ নির্দিষ্ট করে শৃঙ্খলা বজায় রাখে।'
      },
      explanation: {
        en: 'CPM prevents projects from referencing conflicting library versions, simplifying upgrades and stabilizing enterprise CI/CD builds.',
        bn: 'বিভিন্ন প্রজেক্টে আলাদা আলাদা ভার্সন ব্যবহারের ভুল ভেঙে এটি পুরো সলিউশনে নিখুঁত সামঞ্জস্য নিশ্চিত করে।'
      }
    },
    {
      id: 'native-aot-publish-flag-csharp-ex3',
      kind: 'mcq',
      topic: 'native-aot-publish-flag-submillisecond-boot',
      question: {
        en: 'Which CLI flag passed to "dotnet publish" compiles a C# application into a self-contained Native AOT executable without a JIT compiler?',
        bn: '"dotnet publish" কমান্ডে কোন ফ্ল্যাগটি দিলে C# অ্যাপ্লিকেশন কোনো JIT কম্পাইলার ছাড়াই সরাসরি স্বয়ংসম্পূর্ণ Native AOT বাইনারিতে কম্পাইল হয়?'
      },
      options: [
        { en: '/p:PublishAot=true', bn: '/p:PublishAot=true ফ্ল্যাগ' },
        { en: '/p:MakeItFast=true', bn: '/p:MakeItFast=true ফ্ল্যাগ' },
        { en: '/p:DisableCompiler=true', bn: '/p:DisableCompiler=true ফ্ল্যাগ' },
        { en: '/p:RunInCloud=true', bn: '/p:RunInCloud=true ফ্ল্যাগ' }
      ],
      answer: 0,
      hint: {
        en: 'PublishAot=true triggers Native Ahead-Of-Time compilation.',
        bn: 'PublishAot=true ফ্ল্যাগটি নেটিভ অ্যাহেড-অব-টাইম কম্পাইলেশন চালু করে।'
      },
      explanation: {
        en: 'PublishAot=true compiles intermediate IL ahead of time directly to native CPU machine code, removing the JIT compiler and speeding cold starts.',
        bn: 'এই ফ্ল্যাগটি দিলে অ্যাপ্লিকেশন অপারেটিং সিস্টেমের সরাসরি মেশিন কোডে তৈরি হয় এবং দ্রুততম গতিতে চালু হয়।'
      }
    },
    {
      id: 'semantic-versioning-three-parts-ex4',
      kind: 'mcq',
      topic: 'semantic-versioning-major-minor-patch',
      question: {
        en: 'In the Semantic Versioning 2.0 specification used by NuGet packages (MAJOR.MINOR.PATCH), when must the MAJOR version number be incremented?',
        bn: 'NuGet প্যাকেজে ব্যবহৃত Semantic Versioning ২.০ স্পেসিফিকেশনে (MAJOR.MINOR.PATCH) কখন MAJOR সংস্করণ নম্বর বৃদ্ধি করতে হয়?'
      },
      options: [
        {
          en: 'When making incompatible, breaking API changes that will break existing client code upon upgrading',
          bn: 'যখন এমন কোনো ব্রেকিং পরিবর্তন আনা হয় যা আপগ্রেড করার সাথে সাথে পুরোনো ক্লায়েন্ট কোডকে অচল বা ক্ষতিগ্রস্ত করতে পারে'
        },
        {
          en: 'Whenever a small bug fix is released',
          bn: 'যখন কোনো ছোটখাটো বাগ ফিক্স করা হয়'
        },
        {
          en: 'On the first day of every month',
          bn: 'প্রতি মাসের প্রথম দিনে'
        },
        {
          en: 'The MAJOR version can never be changed in NuGet',
          bn: 'NuGet-এ MAJOR সংস্করণ কখনো পরিবর্তন করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Major versions signal breaking API modifications.',
        bn: 'ব্রেকিং বা সামঞ্জস্যহীন পরিবর্তনের সংকেত দিতে Major সংস্করণ বৃদ্ধি করা হয়।'
      },
      explanation: {
        en: 'SemVer dictates: MAJOR for breaking changes, MINOR for backwards-compatible features, and PATCH for backwards-compatible bug fixes.',
        bn: 'ব্রেকিং পরিবর্তনের জন্য MAJOR, নতুন কিন্তু নিরাপদ ফিচারের জন্য MINOR এবং বাগ ফিক্সের জন্য PATCH ব্যবহার করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-nuget-serve',
    title: {
      en: 'C# NuGet Packaging, Testing & Production Release Quiz',
      bn: 'C# NuGet প্যাকেজিং, টেস্টিং এবং প্রোডাকশন রিলিজ কুইজ'
    },
    questions: [
      {
        id: 'quiz-trimming-dead-code-elimination',
        kind: 'mcq',
        topic: 'trimming-dead-code-elimination-native-publishing',
        question: {
          en: 'What does IL Trimming (/p:PublishTrimmed=true) do during self-contained .NET application publishing?',
          bn: 'সেলফ-কনটেইন্ড .NET অ্যাপ্লিকেশন পাবলিশ করার সময় IL Trimming (/p:PublishTrimmed=true) কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It analyzes application call graphs and strips unused framework classes and methods from the final binary, dramatically shrinking disk and container sizes',
            bn: 'এটি অ্যাপ্লিকেশনের কল-গ্রাফ বিশ্লেষণ করে চূড়ান্ত বাইনারি থেকে অব্যবহৃত সমস্ত ফ্রেমওয়ার্ক ক্লাস ও মেথড ছেঁটে ফেলে, ফলে ফাইলের আকার অনেক ছোট হয়'
          },
          {
            en: 'It deletes all user database records before publishing',
            bn: 'এটি পাবলিশ করার আগেই সমস্ত ডেটাবেস রেকর্ড মুছে ফেলে'
          },
          {
            en: 'It limits program execution to 60 seconds maximum',
            bn: 'এটি প্রোগ্রাম চলার সময়কে সর্বোচ্চ ৬০ সেকেন্ডে সীমাবদ্ধ করে'
          },
          {
            en: 'Trimming only works on desktop Windows systems',
            bn: 'ট্রিমিং কেবল ডেস্কটপ উইন্ডোজ সিস্টেমে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trimming removes unreferenced code to produce lean binaries.',
          bn: 'ট্রিমিং অপ্রয়োজনীয় ও অবিক্রীত কোড বাদ দিয়ে হালকা ও দ্রুতগামী ফাইল তৈরি করে।'
        },
        explanation: {
          en: 'Trimming performs static reachability analysis, discarding unreachable bytecode and reducing container image download and deployment times.',
          bn: 'ক্লাউড কনটেইনারের সাইজ ছোট রাখতে এবং মেমোরি বাঁচাতে ট্রিমড পাবলিশিং অত্যন্ত উপযোগী।'
        }
      },
      {
        id: 'quiz-deterministic-builds-continuous-integration',
        kind: 'mcq',
        topic: 'deterministic-builds-ci-pipelines',
        question: {
          en: 'Why is setting "<ContinuousIntegrationBuild>true</ContinuousIntegrationBuild>" an enterprise best practice in automated CI/CD pipelines?',
          bn: 'স্বয়ংক্রিয় CI/CD পাইপলাইনে "<ContinuousIntegrationBuild>true</ContinuousIntegrationBuild>" নির্ধারণ করা একটি এন্টারপ্রাইজ উত্তম রীতি কেন?'
        },
        options: [
          {
            en: 'It enables deterministic builds, normalizing physical source file paths and ensuring that identical Git commit commits produce bit-for-bit identical compiled binaries',
            bn: 'এটি ডিটারমিনিস্টিক বিল্ড নিশ্চিত করে, স্থানীয় ফাইলের পাথ স্বাভাবিক করে এবং একই গিট কমিটের জন্য হুবহু বিট-টু-বিট অবিকল বাইনারি তৈরি করে'
          },
          {
            en: 'It doubles the speed of network download servers',
            bn: 'এটি নেটওয়ার্ক ডাউনলোড সার্ভারের গতি দ্বিগুণ করে'
          },
          {
            en: 'It disables all automated tests to make builds faster',
            bn: 'এটি দ্রুত বিল্ড করার জন্য সমস্ত স্বয়ংক্রিয় টেস্ট বন্ধ করে দেয়'
          },
          {
            en: 'ContinuousIntegrationBuild was deprecated in modern C#',
            bn: 'আধুনিক C#-এ ContinuousIntegrationBuild বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deterministic builds guarantee identical binaries across machines.',
          bn: 'ডিটারমিনিস্টিক বিল্ড বিভিন্ন মেশিনে একই কোড থেকে অবিকল একই বাইনারি পাওয়ার নিশ্চয়তা দেয়।'
        },
        explanation: {
          en: 'Normalizing build paths guarantees reproducible, tamper-evident binaries across different continuous integration build agents.',
          bn: 'নিরাপত্তা অডিট এবং সঠিক ট্রেসিংয়ের জন্য এই সেটিংটি এন্টারপ্রাইজ সিস্টেমে অত্যন্ত গুরুত্বপূর্ণ।'
        }
      },
      {
        id: 'quiz-sourcelink-debugging-nuget-packages',
        kind: 'mcq',
        topic: 'sourcelink-debugging-nuget-packages',
        question: {
          en: 'What developer experience advantage does SourceLink provide when consuming published NuGet packages in development environments?',
          bn: 'ডেভেলপমেন্টের সময় প্রকাশিত NuGet প্যাকেজ ব্যবহারের ক্ষেত্রে SourceLink কোন অসাধারণ সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It embeds source control metadata inside debugging symbols (PDBs), allowing IDE debuggers like Visual Studio and Rider to seamlessly step into third-party library source code directly from GitHub',
            bn: 'এটি ডিবাগিং সিম্বলের (PDB) ভেতর সোর্স কোডের তথ্য যুক্ত করে, যার ফলে IDE দিয়ে সরাসরি গিটহাব থেকে লাইব্রেরির আসল সোর্স কোডে স্টেপ-ইন করে ডিবাগ করা যায়'
          },
          {
            en: 'It encrypts source code into 256-bit hash codes',
            bn: 'এটি সোর্স কোডকে ২৫৬-বিট হ্যাশ কোডে রূপান্তর করে'
          },
          {
            en: 'SourceLink automatically writes unit tests for all classes',
            bn: 'SourceLink নিজে থেকেই সব ক্লাসের জন্য ইউনিট টেস্ট লিখে দেয়'
          },
          {
            en: 'SourceLink was deleted from .NET in 2021',
            bn: '২০২১ সালে .NET থেকে SourceLink মুছে ফেলা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SourceLink allows debuggers to download exact source files from Git.',
          bn: 'SourceLink প্যাকেজের লাইব্রেরি কোডের ভেতর সরাসরি ঢুকে বাগ খোঁজার সুবিধা দেয়।'
        },
        explanation: {
          en: 'SourceLink connects compiled NuGet binaries to their remote repository, enabling effortless stepping and inspection during debugging sessions.',
          bn: 'কোনো লাইব্রেরির ভেতর কী ঘটছে তা পুঙ্খানুপুঙ্খ ডিবাগ করতে SourceLink ডেভেলপারদের প্রিয় সঙ্গী।'
        }
      },
      {
        id: 'quiz-nuget-lock-files-reproducibility',
        kind: 'mcq',
        topic: 'nuget-packages-lock-json-reproducibility',
        question: {
          en: 'What critical security and reproducibility protection does enabling NuGet lock files ("packages.lock.json") provide?',
          bn: 'NuGet লক ফাইল ("packages.lock.json") চালু করলে কোন অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা ও রিলিজ সুরক্ষা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It locks the exact transitive dependency tree and cryptographic hashes, preventing unexpected downstream dependency modifications and supply chain attacks during builds',
            bn: 'এটি সমস্ত ডিপেনডেন্সি ও ক্রিপ্টোগ্রাফিক হ্যাশ স্থায়ীভাবে নির্দিষ্ট করে রাখে, ফলে বিল্ডের সময় কোনো ক্ষতিকর কোড অনুপ্রবেশ বা সাপ্লাই-চেইন আক্রমণ ঘটতে পারে না'
          },
          {
            en: 'It locks the computer keyboard during compilation',
            bn: 'এটি কম্পাইল করার সময় কম্পিউটারের কিবোর্ড লক করে দেয়'
          },
          {
            en: 'It makes all NuGet packages completely free of charge',
            bn: 'এটি সমস্ত NuGet প্যাকেজকে সম্পূর্ণ বিনামূল্যে করে তোলে'
          },
          {
            en: 'Lock files only run on Windows 98 operating systems',
            bn: 'লক ফাইল কেবল উইন্ডোজ ৯৮ অপারেটিং সিস্টেমে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lock files pin transitive dependencies and package hashes.',
          bn: 'লক ফাইল ডিপেনডেন্সির হ্যাশ মিলিয়ে নিশ্চিত করে যে হুবহু সঠিক প্যাকেজই নামানো হয়েছে।'
        },
        explanation: {
          en: 'Lock files guarantee that builds restore identical dependencies everywhere, thwarting malicious upstream dependency tampering.',
          bn: 'সাপ্লাই-চেইন আক্রমণ থেকে বাঁচতে এবং সর্বত্র একই সফটওয়্যার পেতে প্যাকেজ লক ফাইল আবশ্যক।'
        }
      }
    ]
  }
};
