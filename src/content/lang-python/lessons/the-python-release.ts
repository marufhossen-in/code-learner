import type { Lesson } from '../../../lib/types';

export const ThePythonReleaseLesson: Lesson = {
  slug: 'the-python-release',
  tech: 'lang-python',
  title: {
    en: 'Python Packaging, Virtual Environments & The GIL',
    bn: 'পাইথন প্যাকেজিং, ভার্চুয়াল এনভায়রনমেন্ট এবং GIL'
  },
  summary: {
    en: 'Master the Python deployment and packaging lifecycle: isolate dependencies with virtual environments (venv), configure pyproject.toml build tools, navigate the Global Interpreter Lock (GIL) and free-threaded Python 3.13, and manage the 5-year official release maintenance cycle.',
    bn: 'পাইথনের প্যাকেজিং ও ডিপ্লয়মেন্ট জীবনচক্র আয়ত্ত করুন: ভার্চুয়াল এনভায়রনমেন্ট (venv) দিয়ে ডিপেন্ডেন্সি পৃথকীকরণ, pyproject.toml বিল্ড কনফিগারেশন, গ্লোবাল ইন্টারপ্রেটার লক (GIL) ও ফ্রি-থ্রেডেড পাইথন ৩.১৩ এবং ৫ বছরের প্রাতিষ্ঠানিক রিলিজ লাইফসাইকেল।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'packaging-and-venvs-heading',
      text: {
        en: 'Virtual Environments (venv), Dependency Isolation, and pyproject.toml',
        bn: 'ভার্চুয়াল এনভায়রনমেন্ট (venv), ডিপেন্ডেন্সি পৃথকীকরণ এবং pyproject.toml'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Installing third-party packages directly into the operating system global site-packages directory inevitably triggers dependency version conflicts across projects. In Python (the modular scripting language), virtual environments create isolated filesystem directories containing dedicated Python binaries and package libraries using "python -m venv .venv". Modern Python packaging has standardized on pyproject.toml (governed by Python Enhancement Proposals (PEP 517 and PEP 621)), replacing legacy "setup.py" scripts with declarative metadata, build-backend definitions, and pinned dependencies.',
        bn: 'অপারেটিং সিস্টেমের মূল গ্লোবাল ডিরেক্টরিতে সরাসরি থার্ড-পার্টি প্যাকেজ ইনস্টল করলে বিভিন্ন প্রজেক্টের মাঝে ভার্সন সংঘাত দেখা দেয়। পাইথন (মডুলার স্ক্রিপ্টিং ভাষা) এ "python -m venv .venv" কমান্ড দিয়ে একটি সম্পূর্ণ আলাদা ভার্চুয়াল এনভায়রনমেন্ট তৈরি করা যায়, যার নিজস্ব পাইথন বাইনারি ও প্যাকেজ ফোল্ডার থাকে। আধুনিক পাইথন প্যাকেজিং ব্যবস্থা পুরানো "setup.py" ফাইলের বদলে সম্পূর্ণভাবে pyproject.toml স্ট্যান্ডার্ড (PEP 517 ও PEP 621) গ্রহণ করেছে, যা প্রজেক্টের বিবরণ, বিল্ড ব্যাকএন্ড ও ডিপেন্ডেন্সি সুন্দরভাবে সংরক্ষণ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural isolation of Python virtual environments and the transition to free-threaded CPython multi-core scaling.',
        bn: 'চিত্র ১: ভার্চুয়াল এনভায়রনমেন্টের মেমোরি পৃথকীকরণ এবং মাল্টি-কোর ব্যবহারের ক্ষেত্রে ফ্রি-থ্রেডেড CPython এর স্থাপত্যিক চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PYTHON PACKAGING &amp; RUNTIME THREADING ARCHITECTURE</text>

  <!-- Step 1: Virtual Env -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Isolated .venv</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">.venv/bin/python</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">.venv/lib/site-pkgs</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Zero Global Drift</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Sandboxed Env</text>
  </g>

  <!-- Step 2: pyproject.toml -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. pyproject.toml</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">[build-system]</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">requires = ["hatchling"]</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">PEP 621 Standard</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Declarative Config</text>
  </g>

  <!-- Step 3: CPython GIL -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Global Interpreter Lock</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Single Mutex Lock</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Protects ob_refcnt</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">1 Core at a time</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Standard CPython</text>
  </g>

  <!-- Step 4: Free-Threaded 3.13 -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Free-Threaded</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Python 3.13 Build</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">PEP 703 No-GIL</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Scales across Cores</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">True Parallelism</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'gil-evolution-and-release-lifecycle-heading',
      text: {
        en: 'The Global Interpreter Lock (GIL) and the 5-Year Maintenance Cadence',
        bn: 'গ্লোবাল ইন্টারপ্রেটার লক (GIL) এবং ৫ বছরের রক্ষণাবেক্ষণ চক্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For decades, the Global Interpreter Lock (GIL) protected CPython memory from race conditions by enforcing that only 1 native thread executes Python bytecode at any given moment. Starting with Python 3.13, PEP 703 introduced an experimental free-threaded build that eliminates the GIL, replacing global synchronization with thread-safe memory allocators and biased reference counting. The Python core team operates on an annual release cadence: a new minor version is released every October, receiving 5 years of total community support comprising active bug fixes and critical security patches.',
        bn: 'বহু বছর ধরে গ্লোবাল ইন্টারপ্রেটার লক (GIL) CPython-এর মেমোরি সুরক্ষার জন্য একটি মাত্র নেটিভ থ্রেডকে যেকোনো মুহূর্তে পাইথন বাইটকোড চালানোর অনুমতি দিয়ে এসেছে। তবে পাইথন ৩.১৩ সংস্করণে PEP 703 এর মাধ্যমে একটি পরীক্ষামূলক ফ্রি-থ্রেডেড বিল্ড আনা হয়েছে যা GIL সরিয়ে থ্রেড-সেফ মেমোরি বরাদ্দের সুযোগ দেয়। পাইথন কোর টিম প্রতি বছর অক্টোবর মাসে ১ টি করে নতুন মাইনর সংস্করণ প্রকাশ করে এবং প্রতিটি সংস্করণ সক্রিয় বাগ সংশোধন ও নিরাপত্তা প্যাচ সহ সর্বমোট ৫ বছরের প্রাতিষ্ঠানিক সাপোর্ট পেয়ে থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python virtual environment isolation and the 5-year release lifecycle support windows.',
        bn: 'পাইথন ভার্চুয়াল এনভায়রনমেন্ট পৃথকীকরণ এবং ৫ বছরের রিলিজ লাইফসাইকেলের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python Environment Isolation and 5-Year Release Lifecycle

export class PythonEnvironmentSimulator {
  // Simulating sys.prefix inside an activated virtual environment
  public static getEnvironmentPaths(venvName: string) {
    return {
      basePrefix: '/usr/local/bin/python3', // Global system interpreter
      prefix: \`/home/user/project/\${venvName}\`, // Sandboxed venv directory
      sitePackages: \`/home/user/project/\${venvName}/lib/python3.12/site-packages\`
    };
  }

  // Simulating the 5-year official release lifecycle
  public static getReleaseSupport(releaseYear: number) {
    const totalSupportYears = 5;
    return {
      releaseYear,
      endOfLifeYear: releaseYear + totalSupportYears,
      isActiveBugfix: (currentYear: number) => currentYear <= releaseYear + 1,
      isSecuritySupported: (currentYear: number) => currentYear <= releaseYear + totalSupportYears
    };
  }
}

// Executing demonstrations
const env = PythonEnvironmentSimulator.getEnvironmentPaths('.venv');
console.log('Isolated Venv Site-Packages:', env.sitePackages);

const py312Lifecycle = PythonEnvironmentSimulator.getReleaseSupport(2023);
console.log('Python 3.12 End of Life Year:', py312Lifecycle.endOfLifeYear); // 2028 (5 years total)
console.log('Supported in 2026:', py312Lifecycle.isSecuritySupported(2026)); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Environment (venv)',
          def: {
            en: 'Self-contained filesystem directory tree containing a Python installation for a specific version and isolated third-party libraries.',
            bn: 'স্বয়ংসম্পূর্ণ ফোল্ডার যা কোনো প্রজেক্টের জন্য নির্দিষ্ট পাইথন সংস্করণ এবং আলাদা লাইব্রেরি সংরক্ষণ করে।'
          }
        },
        {
          term: 'pyproject.toml',
          def: {
            en: 'Universal configuration file specifying project build system, dependency requirements, and tool settings.',
            bn: 'সার্বজনীন কনফিগারেশন ফাইল যা প্রজেক্টের প্যাকেজিং, বিল্ড সিস্টেম এবং ডিপেন্ডেন্সি সুনির্দিষ্টভাবে নির্ধারণ করে।'
          }
        },
        {
          term: 'Global Interpreter Lock (GIL)',
          def: {
            en: 'CPython synchronization mutex ensuring only one OS thread executes Python bytecode at any moment to guard memory references.',
            bn: 'সিঙ্ক্রোনাইজেশন লক যা যেকোনো মুহূর্তে কেবল একটি থ্রেডকে পাইথন কোড চালানোর অনুমতি দিয়ে মেমোরি রক্ষা করে।'
          }
        },
        {
          term: 'Release Cadence',
          def: {
            en: 'Predictable schedule where Python releases a new minor version every October, supported for 5 years.',
            bn: 'পাইথনের সুনির্দিষ্ট বার্ষিক রিলিজ কাঠামো যা প্রতি অক্টোবরে নতুন সংস্করণ প্রকাশ করে ৫ বছর সাপোর্ট দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'python-venv-isolation-purpose-ex1',
      kind: 'mcq',
      topic: 'venv-dependency-isolation-purpose',
      question: {
        en: 'Why is developing Python applications inside dedicated virtual environments (python -m venv .venv) considered an industry standard?',
        bn: 'আলাদা ভার্চুয়াল এনভায়রনমেন্টে (python -m venv .venv) পাইথন অ্যাপ্লিকেশন তৈরি করা ইন্ডাস্ট্রির একটি আদর্শ নিয়ম কেন?'
      },
      options: [
        {
          en: 'It isolates project dependencies, preventing version conflicts with other projects or the operating system global site-packages',
          bn: 'এটি প্রজেক্টের ডিপেন্ডেন্সিগুলোকে আলাদা রাখে, ফলে অন্যান্য প্রজেক্ট বা সিস্টেমের মূল প্যাকেজের সাথে কোনো ভার্সন সংঘাত ঘটে না'
        },
        {
          en: 'It compresses the Python codebase by 70 percent',
          bn: 'এটি পাইথন কোডের আকার ৭০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Virtual environments eliminate the need to write unit tests',
          bn: 'ভার্চুয়াল এনভায়রনমেন্টে ইউনিট টেস্ট লেখার প্রয়োজন হয় না'
        },
        {
          en: 'Python code cannot execute on Linux without a virtual environment',
          bn: 'লিনাক্সে ভার্চুয়াল এনভায়রনমেন্ট ছাড়া পাইথন কোড রান করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Virtual environments sandbox dependencies per-project, preventing cross-project pollution.',
        bn: 'ভার্চুয়াল এনভায়রনমেন্ট প্রতিটি প্রজেক্টের প্যাকেজকে আলাদা রেখে সংঘাত প্রতিরোধ করে।'
      },
      explanation: {
        en: 'Virtual environments ensure projects declare and run on exact, self-contained dependency trees without global contamination.',
        bn: 'ভার্চুয়াল এনভায়রনমেন্ট কোনো গ্লোবাল ঝামেলা ছাড়াই প্রতিটি প্রজেক্টকে নিজস্ব স্বাধীন পরিবেশে চলার সুযোগ দেয়।'
      }
    },
    {
      id: 'pyproject-toml-standard-ex2',
      kind: 'mcq',
      topic: 'pyproject-toml-pep-standards',
      question: {
        en: 'What official configuration file has replaced legacy setup.py and requirements.txt for modern Python packaging standards?',
        bn: 'আধুনিক পাইথন প্যাকেজিং স্ট্যান্ডার্ডে পুরানো setup.py এবং requirements.txt এর বিকল্প হিসেবে কোন প্রাতিষ্ঠানিক ফাইলটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'pyproject.toml', bn: 'pyproject.toml' },
        { en: 'package.json', bn: 'package.json' },
        { en: 'composer.json', bn: 'composer.json' },
        { en: 'Cargo.toml', bn: 'Cargo.toml' }
      ],
      answer: 0,
      hint: {
        en: 'PEP 518 and PEP 621 established pyproject.toml as the universal packaging standard.',
        bn: 'PEP 518 ও PEP 621 যৌথভাবে pyproject.toml কে সার্বজনীন প্যাকেজিং ফাইল হিসেবে স্বীকৃতি দিয়েছে।'
      },
      explanation: {
        en: 'pyproject.toml is the standardized declarative configuration file for building, packaging, and dependency management.',
        bn: 'pyproject.toml হলো আধুনিক পাইথন প্যাকেজ পরিচালনা ও কনফিগারেশনের জন্য স্বীকৃত আদর্শ ফাইল।'
      }
    },
    {
      id: 'gil-multithreading-cpu-constraint-ex3',
      kind: 'mcq',
      topic: 'gil-cpu-bound-single-core-constraint',
      question: {
        en: 'How does the CPython Global Interpreter Lock (GIL) affect pure CPU-bound multi-threaded algorithms?',
        bn: 'CPython-এর গ্লোবাল ইন্টারপ্রেটার লক (GIL) প্রসেসর-নিবিড় মাল্টি-থ্রেডিং কাজের ওপর কীভাবে প্রভাব ফেলে?'
      },
      options: [
        {
          en: 'It restricts bytecode execution to only 1 CPU core at a time, preventing multi-threaded CPU speedups on multi-core hardware',
          bn: 'এটি যেকোনো মুহূর্তে মাত্র ১ টি সিপিইউ কোরে কোড কার্যকর করে, ফলে মাল্টি-কোর প্রসেসরেও মাল্টি-থ্রেডিংয়ের মাধ্যমে গতি বাড়ে না'
        },
        {
          en: 'It automatically distributes the threads across 100 cloud servers',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ১০০ ক্লাউড সার্ভারে থ্রেডগুলো ছড়িয়ে দেয়'
        },
        {
          en: 'It deletes threads that run longer than 1 second',
          bn: '১ সেকেন্ডের বেশি চলা থ্রেডগুলো এটি মুছে ফেলে'
        },
        {
          en: 'The GIL has zero effect on CPU-bound workloads',
          bn: 'সিপিইউ কাজের ওপর GIL এর কোনো প্রভাব নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'The GIL allows multiple threads to exist, but permits only one thread to execute Python bytecode concurrently.',
        bn: 'GIL একাধিক থ্রেড তৈরি করার সুযোগ দিলেও একসাথে কেবল একটি থ্রেডকেই কোড চালানোর অনুমতি দেয়।'
      },
      explanation: {
        en: 'Because the GIL serializes bytecode execution, CPU-bound multi-threaded programs cannot scale across multiple hardware cores in standard CPython.',
        bn: 'GIL এর কারণে স্ট্যান্ডার্ড CPython-এ মাল্টি-কোর প্রসেসরের পূর্ণ গতি ব্যবহার করতে multiprocessing বা ফ্রি-থ্রেডেড বিল্ড লাগে।'
      }
    },
    {
      id: 'python-official-release-support-duration-ex4',
      kind: 'mcq',
      topic: 'python-release-support-duration-years',
      question: {
        en: 'For how many total years does each official minor release of Python receive community maintenance support?',
        bn: 'পাইথনের প্রতিটি প্রাতিষ্ঠানিক মাইনর সংস্করণ কমিউনিটি থেকে সর্বমোট কত বছর সাপোর্ট পেয়ে থাকে?'
      },
      options: [
        {
          en: '5 years total: active development and bug fixes followed by critical security-only updates',
          bn: 'সর্বমোট ৫ বছর: প্রথমে সক্রিয় উন্নয়ন ও বাগ সংশোধন এবং পরবর্তীতে শুধুমাত্র গুরুত্বপূর্ণ সিকিউরিটি আপডেট'
        },
        {
          en: '1 year only',
          bn: 'কেবল ১ বছর'
        },
        {
          en: '15 years',
          bn: '১৫ বছর'
        },
        {
          en: 'Python releases are never updated after launch',
          bn: 'মুক্তির পর পাইথনে কখনো কোনো আপডেট আসে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each version receives 5 years of official maintenance before reaching End of Life (EOL).',
        bn: 'প্রতিটি পাইথন সংস্করণ ৫ বছর পর্যন্ত প্রাতিষ্ঠানিক রক্ষণাবেক্ষণ পেয়ে থাকে।'
      },
      explanation: {
        en: 'Python releases follow a strict 5-year maintenance calendar before reaching End of Life.',
        bn: 'পাইথন রিলিজ ক্যালেন্ডার অনুসারে ৫ বছর পর একটি সংস্করণকে আনুষ্ঠানিকভাবে সমাপ্ত ঘোষণা করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-python-release',
    title: {
      en: 'Python Packaging and Runtime Architecture Quiz',
      bn: 'পাইথন প্যাকেজিং এবং রানটাইম আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-free-threaded-python-pep703',
        kind: 'mcq',
        topic: 'pep703-free-threaded-cpython',
        question: {
          en: 'What architectural milestone does PEP 703 introduce in Python 3.13?',
          bn: 'পাইথন ৩.১৩ সংস্করণে PEP 703 কোন যুগান্তকারী স্থাপত্যিক পরিবর্তন এনেছে?'
        },
        options: [
          {
            en: 'An experimental free-threaded build that completely disables the Global Interpreter Lock (GIL), enabling true multi-threaded CPU parallel execution',
            bn: 'একটি পরীক্ষামূলক ফ্রি-থ্রেডেড বিল্ড যা গ্লোবাল ইন্টারপ্রেটার লক (GIL) পুরোপুরি নিষ্ক্রিয় করে সত্যিকারের মাল্টি-কোর সমান্তরাল গতি নিশ্চিত করে'
          },
          {
            en: 'It replaces CPython with a JavaScript interpreter',
            bn: 'এটি CPython কে জাভাস্ক্রিপ্ট ইন্টারপ্রেটার দিয়ে বদলে ফেলে'
          },
          {
            en: 'It requires all Python programs to be compiled into C binaries',
            bn: 'এটি সব পাইথন কোডকে সি বাইনারিতে কম্পাইল হতে বাধ্য করে'
          },
          {
            en: 'It bans all third-party libraries permanently',
            bn: 'এটি সব থার্ড-পার্টি লাইব্রেরি চিরতরে নিষিদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'PEP 703 makes the GIL optional, paving the way for multi-core threading without multiprocessing overhead.',
          bn: 'PEP 703 গ্লোবাল লক বাদ দিয়ে মাল্টিপ্রসেসিংয়ের ঝামেলা ছাড়াই মাল্টি-কোর থ্রেডিংয়ের পথ সুগম করে।'
        },
        explanation: {
          en: 'PEP 703 eliminates the GIL in free-threaded builds, allowing multi-threaded CPU workloads to scale linearly across CPU cores.',
          bn: 'ফ্রি-থ্রেডেড বিল্ডে GIL না থাকায় ভারী সিপিইউ কাজগুলো একাধিক প্রসেসর কোরে পূর্ণ গতিতে চলতে পারে।'
        }
      },
      {
        id: 'quiz-pip-freeze-vs-pip-compile-pinning',
        kind: 'mcq',
        topic: 'pip-compile-lockfile-reproducibility',
        question: {
          en: 'Why is using modern lockfiles (like poetry.lock or pip-tools pip-compile) superior to a simple "pip freeze > requirements.txt"?',
          bn: 'সাধারণ "pip freeze > requirements.txt" এর তুলনায় আধুনিক লকফাইল (যেমন poetry.lock বা pip-compile) ব্যবহার করা শ্রেষ্ঠ কেন?'
        },
        options: [
          {
            en: 'Lockfiles record sub-dependency trees, cryptographic hashes, and environment markers, guaranteeing 100% reproducible builds and preventing supply-chain tampering',
            bn: 'লকফাইল সাব-ডিপেন্ডেন্সি ট্রি, ক্রিপ্টোগ্রাফিক হ্যাশ এবং পরিবেশগত তথ্য সংরক্ষণ করে, ফলে হুবহু এক রকম ডিপ্লয়মেন্ট নিশ্চিত হয় এবং সাপ্লাই-চেইন আক্রমণ রোধ হয়'
          },
          {
            en: 'Lockfiles compress source files into MP3 audio',
            bn: 'লকফাইল সোর্স ফাইলকে এমপি৩ অডিওতে রূপান্তর করে'
          },
          {
            en: 'pip freeze is illegal on macOS',
            bn: 'ম্যাক অপারেটিং সিস্টেমে pip freeze ব্যবহার করা নিষিদ্ধ'
          },
          {
            en: 'There is zero difference between them',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lockfiles include cryptographic hashes and transitive dependency resolution.',
          bn: 'লকফাইল হ্যাশ ভ্যালু এবং নির্ভরশীল অন্যান্য সকল সাব-প্যাকেজের নির্ভুল তথ্য জমা রাখে।'
        },
        explanation: {
          en: 'Lockfiles pin exact hashes and transitive graphs, preventing breaking changes when sub-dependencies update.',
          bn: 'লকফাইল সুনির্দিষ্ট হ্যাশ পিন করে রাখে, ফলে কোনো সাব-প্যাকেজ আপডেট হলেও মূল অ্যাপ্লিকেশনে কোনো ত্রুটি ঘটে না।'
        }
      },
      {
        id: 'quiz-wheel-binary-distribution-format',
        kind: 'mcq',
        topic: 'python-wheel-distribution-format',
        question: {
          en: 'What advantage does distributing Python libraries as Wheel archives (.whl) provide over source distributions (.tar.gz)?',
          bn: 'সোর্স ডিস্ট্রিবিউশনের (.tar.gz) তুলনায় হুইল ফরম্যাটে (.whl) পাইথন লাইব্রেরি বিতরণ করার প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'Wheels are pre-built binary distributions that do not require local C compilation during installation, dramatically speeding up pip install times',
            bn: 'হুইল হলো আগে থেকেই কম্পাইল করা বাইনারি ফরম্যাট, ফলে ইনস্টল করার সময় ব্যবহারকারীর কম্পিউটারে সি কম্পাইল করতে হয় না এবং দ্রুত ইনস্টল হয়'
          },
          {
            en: 'Wheels can only be installed on mobile phones',
            bn: 'হুইল কেবল মোবাইল ফোনেই ইনস্টল করা যায়'
          },
          {
            en: 'Wheels run 10 times slower than source code',
            bn: 'হুইল সাধারণ সোর্স কোডের চেয়ে ১০ গুণ ধীরগতিতে চলে'
          },
          {
            en: 'Wheels delete the user\'s terminal history',
            bn: 'হুইল ব্যবহারকারীর টার্মিনাল হিস্টোরি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Wheels are ready-to-install packages that bypass compilation steps during pip install.',
          bn: 'হুইল আগে থেকেই তৈরি প্যাকেজ যা ইনস্টলের সময় কোনো বাড়তি কম্পাইলেশনের প্রয়োজন রাখে না।'
        },
        explanation: {
          en: 'Wheels skip the setup.py build step, enabling near-instant package installation in CI/CD pipelines.',
          bn: 'হুইল কম্পাইলেশন প্রক্রিয়া বাদ দিয়ে সিআই/সিডি পাইপলাইনে মুহূর্তের মধ্যে প্যাকেজ ইনস্টল নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-bytecode-pyc-cache-purpose',
        kind: 'mcq',
        topic: 'pyc-bytecode-cache-purpose',
        question: {
          en: 'What is the purpose of the compiled bytecode files (.pyc) stored inside the __pycache__ directory in Python?',
          bn: 'পাইথনে __pycache__ ডিরেক্টরির ভেতর সংরক্ষিত কম্পাইল করা বাইটকোড (.pyc) ফাইলগুলোর মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'They store precompiled bytecode so CPython can skip the source parsing and compilation stages on subsequent imports, accelerating program startup',
            bn: 'তারা পূর্বেই কম্পাইল করা বাইটকোড সংরক্ষণ করে রাখে যাতে পরবর্তীতে ফাইল ইমপোর্ট করার সময় পার্সিং ও কম্পাইলেশন এড়িয়ে দ্রুত প্রোগ্রাম চালু করা যায়'
          },
          {
            en: 'They are backup copies in case the source files are accidentally deleted',
            bn: 'সোর্স ফাইল অনিচ্ছাকৃত মুছে গেলে উদ্ধারের জন্য ব্যাকআপ কপি হিসেবে থাকে'
          },
          {
            en: 'They encrypt the code to prevent other developers from reading it',
            bn: 'অন্যরা যেন কোড পড়তে না পারে সেজন্য কোড এনক্রিপ্ট করে রাখে'
          },
          {
            en: 'They are required for running Python on Android devices',
            bn: 'অ্যান্ড্রয়েড ডিভাইসে পাইথন চালানোর জন্য তারা আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: '.pyc files cache bytecode to avoid parsing unchanged .py source files.',
          bn: '.pyc ফাইল বাইটকোড ক্যাশ করে রাখে যাতে অপরিবর্তিত সোর্স ফাইল পুনরায় পার্স করতে না হয়।'
        },
        explanation: {
          en: '__pycache__ stores bytecode matching the source timestamp, speeding up module import without altering runtime speed.',
          bn: '__pycache__ সোর্স ফাইলের সময় মিলিয়ে দ্রুত লোড নিশ্চিত করে, ফলে অ্যাপ্লিকেশনের শুরুর গতি বৃদ্ধি পায়।'
        }
      }
    ]
  }
};
