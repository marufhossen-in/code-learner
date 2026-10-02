import type { Lesson } from '../../../lib/types';

export const ComposersAndTheAutoloadLesson: Lesson = {
  slug: 'composers-and-the-autoload',
  tech: 'lang-php',
  title: {
    en: 'Composer, PSR-4 Autoloading & Namespaces',
    bn: 'কম্পোজার, PSR-4 অটোলোডিং এবং নেমস্পেস'
  },
  summary: {
    en: 'Master modern PHP package architecture: declare hierarchical namespaces to prevent naming collisions, configure PSR-4 autoloading inside composer.json, understand composer.lock deterministic builds, and optimize production autoloader classmaps with composer dump-autoload -o.',
    bn: 'আধুনিক পিএইচপি প্যাকেজ আর্কিটেকচার আয়ত্ত করুন: নেমিং কলিশন রোধে নেমস্পেস ঘোষণা, composer.json ফাইলে PSR-4 অটোলোডিং কনফিগারেশন, composer.lock এর গুরুত্ব এবং composer dump-autoload -o দিয়ে ক্লাস-ম্যাপ অপ্টিমাইজেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'namespaces-and-psr4-autoloading-heading',
      text: {
        en: 'Hierarchical Namespaces and the PSR-4 Autoloading Standard',
        bn: 'নেমস্পেস হায়ারার্কি এবং PSR-4 অটোলোডিং স্ট্যান্ডার্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In large-scale PHP applications, naming collisions between distinct libraries are eliminated through namespaces declared at the very top of each file (such as namespace App\\Services;). The Framework Interoperability Group (PHP-FIG) PSR-4 standard formalizes the mapping between fully qualified class namespaces and filesystem directory structures: a vendor prefix like "App\\\\" is mapped directly to a base directory like "src/". By including the generated Composer autoloader script (`vendor/autoload.php`), PHP automatically loads required classes on demand without manual require statements.',
        bn: 'বৃহৎ পিএইচপি অ্যাপ্লিকেশনে বিভিন্ন লাইব্রেরির মধ্যে একই নামের সংঘাত দূর করতে প্রতিটি ফাইলের শুরুতে নেমস্পেস ঘোষণা করা হয় (যেমন namespace App\\Services;)। Framework Interoperability Group (PHP-FIG) এর PSR-4 স্ট্যান্ডার্ড সুনির্দিষ্টভাবে নেমস্পেসের সাথে ফাইল সিস্টেমের ডিরেক্টরি পাথ মিলিয়ে কাজ করে: যেমন "App\\\\" প্রিফিক্সটি সরাসরি "src/" ফোল্ডারের সাথে সংযুক্ত থাকে। অ্যাপ্লিকেশনে কেবল কম্পোজারের অটোলোডার স্ক্রিপ্টটি (`vendor/autoload.php`) যুক্ত করলেই পিএইচপি কোনো ম্যানুয়াল require ছাড়াই স্বয়ংক্রিয়ভাবে প্রয়োজনীয় ক্লাসগুলো লোড করে নেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: PSR-4 automated class resolution mapping fully qualified namespace tokens into filesystem script paths.',
        bn: 'চিত্র ১: PSR-4 স্ট্যান্ডার্ডের মাধ্যমে নেমস্পেস থেকে ফাইল ডিরেক্টরি পাথে স্বয়ংক্রিয় ক্লাস লোডিংয়ের চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PSR-4 COMPOSER AUTOLOADING RESOLUTION PIPELINE</text>

  <!-- Step 1: Instantiate -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Request Class</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">new \\App\\Services\\</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Auth\\LoginService()</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Class not in RAM</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Triggers spl_autoload</text>
  </g>

  <!-- Step 2: Composer Lookup -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. PSR-4 Mapping</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Prefix: "App\\"</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">Base: "src/"</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Subpath: Services/Auth</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Transforms \\ to /</text>
  </g>

  <!-- Step 3: Filesystem Inclusion -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Filesystem Path</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">src/Services/Auth/</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">LoginService.php</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">require_once file</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Exact disk match</text>
  </g>

  <!-- Step 4: Class Ready -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Loaded Class</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Compiled into RAM</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">Methods callable</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Cached in OPcache</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Instant execution</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'composer-dependency-management-heading',
      text: {
        en: 'Dependency Lockfiles, Semantic Versioning, and Classmap Optimization',
        bn: 'ডিপেন্ডেন্সি লকফাইল, সেমান্টিক ভার্সনিং এবং ক্লাস-ম্যাপ অপ্টিমাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Composer manages third-party libraries using 2 critical configuration files: composer.json (which declares dependencies, version constraints, and autoload mappings) and composer.lock (which pins the exact commit hashes and versions installed). In production deployment environments, running composer dump-autoload -o (or --optimize) scans all PSR-4 namespaces ahead of time and builds a static classmap array in memory, eliminating filesystem disk lookups and speeding up response times.',
        bn: 'কম্পোজার মূলত ২ টি প্রধান কনফিগারেশন ফাইলের মাধ্যমে থার্ড-পার্টি লাইব্রেরি পরিচালনা করে: composer.json (যা প্যাকেজ ডিপেন্ডেন্সি, ভার্সন ও অটোলোড রুলস নির্ধারণ করে) এবং composer.lock (যা ইনস্টল করা প্যাকেজের সুনির্দিষ্ট ভার্সন ও হ্যাশ পিন করে রাখে)। প্রোডাকশনে ডিপ্লয় করার সময় composer dump-autoload -o কমান্ডটি চালালে এটি সমস্ত PSR-4 নেমস্পেস স্ক্যান করে মেমোরিতে একটি স্ট্যাটিক ক্লাস-ম্যাপ তৈরি করে রাখে, যার ফলে ডিস্কে ফাইল খোঁজার প্রয়োজন হয় না এবং সার্ভারের গতি বহুগুণ বৃদ্ধি পায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PSR-4 namespace prefix resolution and classmap lookups.',
        bn: 'PSR-4 নেমস্পেস প্রিফিক্স সমাধান এবং ক্লাস-ম্যাপ লুকআপের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Composer PSR-4 Autoloader Resolution in TypeScript

export class ComposerAutoloaderSimulator {
  // PSR-4 namespace prefix mapping configuration
  private prefixes: Map<string, string> = new Map([
    ['App\\\\', 'src/'],
    ['Monolog\\\\', 'vendor/monolog/monolog/src/Monolog/']
  ]);

  // Optimized classmap for production (O(1) resolution)
  private classmap: Map<string, string> = new Map();

  // Simulating: composer dump-autoload -o
  public optimizeClassmap(): void {
    this.classmap.set('App\\\\Services\\\\AuthService', 'src/Services/AuthService.php');
    this.classmap.set('App\\\\Models\\\\User', 'src/Models/User.php');
  }

  // Resolve fully qualified class name to disk file path
  public resolveClass(className: string): string | null {
    // 1. Check optimized classmap first (O(1))
    if (this.classmap.has(className)) {
      return this.classmap.get(className)!;
    }

    // 2. Fall back to dynamic PSR-4 directory mapping
    for (const [prefix, baseDir] of this.prefixes.entries()) {
      if (className.startsWith(prefix)) {
        const subClass = className.slice(prefix.length);
        const filePath = baseDir + subClass.replace(/\\\\/g, '/') + '.php';
        return filePath;
      }
    }

    return null; // Class not found
  }
}

// Executing demonstrations
const loader = new ComposerAutoloaderSimulator();

// Dynamic PSR-4 mapping
const path1 = loader.resolveClass('App\\\\Controllers\\\\HomeController');
console.log('Dynamic PSR-4 Path:', path1); // "src/Controllers/HomeController.php"

// Optimize classmap for production
loader.optimizeClassmap();
const path2 = loader.resolveClass('App\\\\Services\\\\AuthService');
console.log('Optimized Classmap Path:', path2); // "src/Services/AuthService.php"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Namespace',
          def: {
            en: 'Syntactic boundary container organizing related code elements and preventing name collisions across packages.',
            bn: 'সিনট্যাক্স কাঠামো যা কোডকে বিভিন্ন ভাগে সুবিন্যস্ত করে এবং একই নামের একাধিক ক্লাসের সংঘাত দূর করে।'
          }
        },
        {
          term: 'PSR-4 Standard',
          def: {
            en: 'PHP Framework Interoperability Group specification mapping namespaces directly to filesystem directory trees.',
            bn: 'পিএইচপি-এফআইজি এর প্রাতিষ্ঠানিক মানদণ্ড যা নেমস্পেসের সাথে ডিস্কের ফোল্ডার পাথের সরাসরি সংযোগ ঘটায়।'
          }
        },
        {
          term: 'composer.lock',
          def: {
            en: 'Version lockfile recording exact package commit hashes to ensure 100% reproducible environments across team deployments.',
            bn: 'লকফাইল যা ইনস্টল করা প্যাকেজের নির্ভুল ভার্সন সংরক্ষণ করে যাতে সব সার্ভারে হুবহু একই কোড রান করে।'
          }
        },
        {
          term: 'Classmap Optimization',
          def: {
            en: 'Process creating a flat PHP array mapping every class directly to its absolute path to eliminate filesystem stats in production.',
            bn: 'প্রোডাকশনের বিশেষ ব্যবস্থা যা প্রতিটি ক্লাসের জন্য সরাসরি ফাইল পাথের তালিকা তৈরি করে সর্বোচ্চ গতি নিশ্চিত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'psr4-autoloading-mapping-ex1',
      kind: 'mcq',
      topic: 'psr4-namespace-directory-mapping',
      question: {
        en: 'Given "autoload": { "psr-4": { "App\\\\": "src/" } }, where must class App\\Http\\Controllers\\Api\\OrderController be stored on disk?',
        bn: '"autoload": { "psr-4": { "App\\\\": "src/" } } নিয়মানুযায়ী App\\Http\\Controllers\\Api\\OrderController ক্লাসটি ডিস্কের কোন পাথে থাকা আবশ্যক?',
        topic: 'psr4-file-location'
      },
      options: [
        { en: 'src/Http/Controllers/Api/OrderController.php', bn: 'src/Http/Controllers/Api/OrderController.php' },
        { en: 'app/OrderController.php', bn: 'app/OrderController.php' },
        { en: 'src/OrderController.php', bn: 'src/OrderController.php' },
        { en: 'vendor/App/OrderController.php', bn: 'vendor/App/OrderController.php' }
      ],
      answer: 0,
      hint: {
        en: 'PSR-4 swaps the "App\\" namespace prefix with "src/" and turns backslashes into slashes.',
        bn: 'PSR-4 এ "App\\" অংশটি "src/" দ্বারা প্রতিস্থাপিত হয় এবং ব্যাকস্ল্যাশগুলো সাধারণ স্ল্যাশে পরিণত হয়।'
      },
      explanation: {
        en: 'The prefix "App\\" maps to "src/", so sub-namespaces "Http/Controllers/Api/" form the exact relative subdirectories.',
        bn: 'App\\ অংশটি src/ এ রূপান্তরিত হয়ে পরবর্তী সাব-নেমস্পেসগুলো সুনির্দিষ্ট ফোল্ডারে পরিণত হয়।'
      }
    },
    {
      id: 'composer-lock-version-control-ex2',
      kind: 'mcq',
      topic: 'composer-lock-git-commit',
      question: {
        en: 'Why must composer.lock always be committed to Git repositories for web application projects?',
        bn: 'ওয়েব অ্যাপ্লিকেশন প্রজেক্টের ক্ষেত্রে composer.lock ফাইলটি গিট রিপোজিটরিতে কমিট করা আবশ্যক কেন?'
      },
      options: [
        {
          en: 'It guarantees that every developer and production server installs the identical package versions and dependencies down to the exact commit hash',
          bn: 'এটি নিশ্চিত করে যে প্রতিটি ডেভেলপার এবং প্রোডাকশন সার্ভারে হুবহু একই ভার্সন ও হ্যাশের প্যাকেজ ইনস্টল হবে'
        },
        {
          en: 'Git rejects commits that do not include composer.lock',
          bn: 'composer.lock না থাকলে গিট কোনো কমিট গ্রহণ করে না'
        },
        {
          en: 'It compresses the application code by 80 percent',
          bn: 'এটি অ্যাপ্লিকেশনের আকার ৮০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'composer.lock is required by the Linux terminal',
          bn: 'লিনাক্স টার্মিনালের জন্য composer.lock থাকা আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'composer.lock locks specific package versions, preventing unintentional breaking updates on deploy.',
        bn: 'composer.lock প্যাকেজের সুনির্দিষ্ট ভার্সন লক করে রাখে, ফলে সার্ভারে অনাকাঙ্ক্ষিত পরিবর্তন ঘটে না।'
      },
      explanation: {
        en: 'Committing composer.lock guarantees deterministic dependency trees across staging, local, and production environments.',
        bn: 'লকফাইল কমিট করলে সব পরিবেশে হুবহু এক রকম প্যাকেজ ইনস্টল নিশ্চিত হয়।'
      }
    },
    {
      id: 'composer-dump-autoload-optimize-ex3',
      kind: 'mcq',
      topic: 'composer-dump-autoload-optimize-flag',
      question: {
        en: 'What performance benefit does executing "composer dump-autoload -o" provide in production environments?',
        bn: 'প্রোডাকশন পরিবেশে "composer dump-autoload -o" কমান্ডটি চালালে কী কর্মক্ষমতা সুবিধা পাওয়া যায়?'
      },
      options: [
        {
          en: 'It converts PSR-4 namespace rules into a static classmap array in memory, converting filesystem file-checks into high-speed O(1) array lookups',
          bn: 'এটি PSR-4 নিয়মগুলোকে মেমোরিতে একটি স্ট্যাটিক ক্লাস-ম্যাপ অ্যারেতে রূপান্তর করে, যার ফলে ডিস্কে ফাইল না খুঁজে সরাসরি দ্রুত O(1) গতিতে ক্লাস পাওয়া যায়'
        },
        {
          en: 'It deletes the vendor folder from the server',
          bn: 'এটি সার্ভার থেকে ভেন্ডর ফোল্ডার মুছে ফেলে'
        },
        {
          en: 'It doubles the network internet speed',
          bn: 'এটি ইন্টারনেট সংযোগের গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'It restarts the database server',
          bn: 'এটি ডেটাবেস সার্ভার রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The -o flag instructs Composer to build an authoritative, optimized classmap array.',
        bn: '-o ফ্ল্যাগটি কম্পোজারকে সব ক্লাসের সরাসরি মেমোরি ম্যাপিং তৈরি করার নির্দেশ দেয়।'
      },
      explanation: {
        en: 'Classmap optimization avoids costly filesystem stat() checks, reducing response latency.',
        bn: 'ক্লাস-ম্যাপ অপ্টিমাইজেশন ডিস্কে ফাইল খোঁজার সময় বাঁচিয়ে অ্যাপ্লিকেশনের রেসপন্স দ্রুত করে।'
      }
    },
    {
      id: 'spl-autoload-register-functionality-ex4',
      kind: 'mcq',
      topic: 'spl-autoload-register-mechanism',
      question: {
        en: 'What native PHP core function does Composer internally call to register its autoloader callback?',
        bn: 'কম্পোজার তার অটোলোডার কলব্যাক কার্যকর করতে পিএইচপির কোন নেটিভ কোর ফাংশনটি অভ্যন্তরীণভাবে ব্যবহার করে?'
      },
      options: [
        { en: 'spl_autoload_register()', bn: 'spl_autoload_register()' },
        { en: 'register_all_classes()', bn: 'register_all_classes()' },
        { en: 'include_all_files()', bn: 'include_all_files()' },
        { en: 'load_namespaces()', bn: 'load_namespaces()' }
      ],
      answer: 0,
      hint: {
        en: 'Standard PHP Library (SPL) provides the hook function for registering class autoloaders.',
        bn: 'স্ট্যান্ডার্ড পিএইচপি লাইব্রেরি (এসপিএল) অটোলোডার রেজিস্টার করার এই মেথডটি সরবরাহ করে।'
      },
      explanation: {
        en: 'spl_autoload_register() prepends or appends custom loader functions triggered whenever an undefined class is invoked.',
        bn: 'কোনো অবজেক্ট তৈরির সময় ক্লাস না পেলে spl_autoload_register() এ যুক্ত ফাংশনটি স্বয়ংক্রিয়ভাবে চালু হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-composers-and-the-autoload',
    title: {
      en: 'PHP Composer and PSR-4 Autoloading Quiz',
      bn: 'পিএইচপি কম্পোজার এবং PSR-4 অটোলোডিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-composer-install-vs-update',
        kind: 'mcq',
        topic: 'composer-install-vs-update-behavior',
        question: {
          en: 'How does running "composer install" differ from running "composer update"?',
          bn: '"composer install" চালানো এবং "composer update" চালানোর মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'install reads the lockfile strictly without altering package versions, while update resolves latest version constraints in composer.json and regenerates composer.lock',
            bn: 'install কোনো ভার্সন পরিবর্তন না করে সরাসরি লকফাইল অনুসরণ করে, আর update নতুন ভার্সন পরীক্ষা করে composer.lock ফাইলটি পুনরায় তৈরি করে'
          },
          {
            en: 'There is zero difference; they are exact aliases',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা হুবহু একই'
          },
          {
            en: 'update deletes the application source code from disk',
            bn: 'update ডিস্ক থেকে অ্যাপ্লিকেশনের সোর্স কোড মুছে ফেলে'
          },
          {
            en: 'install only works on desktop computers',
            bn: 'install কেবল ডেস্কটপ কম্পিউটারে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'install respects lockfiles; update recalculates and upgrades dependencies.',
          bn: 'install সর্বদা লকফাইল মেনে চলে; আর update প্যাকেজ আপগ্রেড করে লকফাইল বদলায়।'
        },
        explanation: {
          en: 'Always run composer install in CI/CD and production to prevent unexpected dependency version drift.',
          bn: 'সার্ভার ও ডিপ্লয়মেন্টে সর্বদা composer install চালানো উচিত যাতে অনাকাঙ্ক্ষিত নতুন ভার্সন ইনস্টল না হয়।'
        }
      },
      {
        id: 'quiz-require-dev-dependencies-purpose',
        kind: 'mcq',
        topic: 'composer-require-dev-section',
        question: {
          en: 'What is the purpose of the "require-dev" section in composer.json?',
          bn: 'composer.json ফাইলে "require-dev" সেকশনটির মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It isolates development and testing tools (like PHPUnit) that should be omitted in production using "composer install --no-dev"',
            bn: 'এটি ডেভেলপমেন্ট ও টেস্টিং টুলগুলোকে (যেমন PHPUnit) আলাদা রাখে যা "composer install --no-dev" দিয়ে প্রোডাকশনে বাদ দেওয়া যায়'
          },
          {
            en: 'It stores developer passwords securely',
            bn: 'এটি ডেভেলপারদের পাসওয়ার্ড নিরাপদে সংরক্ষণ করে'
          },
          {
            en: 'It compiles PHP code into Java bytecode',
            bn: 'এটি পিএইচপি কোডকে জাভা বাইটকোডে রূপান্তর করে'
          },
          {
            en: 'It is a deprecated configuration ignored by modern Composer',
            bn: 'এটি একটি পুরানো নিয়ম যা আধুনিক কম্পোজার সম্পূর্ণ উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'require-dev packages are meant solely for local testing and code analysis.',
          bn: 'require-dev মূলত স্থানীয় পরীক্ষা এবং কোড যাচাইয়ের লাইব্রেরির জন্য ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Excluding dev dependencies via --no-dev keeps production deployment images lightweight and secure.',
          bn: '--no-dev ফ্ল্যাগ ব্যবহার করে প্রোডাকশন সার্ভারে অপ্রয়োজনীয় টেস্টিং প্যাকেজ বাদ রাখা যায়।'
        }
      },
      {
        id: 'quiz-caret-version-constraint-meaning',
        kind: 'mcq',
        topic: 'composer-semver-caret-operator',
        question: {
          en: 'In composer.json, what versions does the constraint "^2.4" permit during package updates?',
          bn: 'composer.json এ "^2.4" কনস্ট্রেইন্ট প্যাকেজ আপডেটের সময় কোন ভার্সনগুলোর অনুমতি দেয়?'
        },
        options: [
          {
            en: 'Any version >= 2.4.0 and < 3.0.0, allowing non-breaking minor and patch updates while blocking breaking major releases',
            bn: '>= 2.4.0 থেকে < 3.0.0 পর্যন্ত যেকোনো ভার্সন, যা নিরাপদ মাইনর ও প্যাচ আপডেট দেয় কিন্তু ব্রেকিং মেজরের ঝুঁকি রোধ করে'
          },
          {
            en: 'Only exactly version 2.4.0 and nothing else',
            bn: 'কেবলমাত্র হুবহু 2.4.0 ভার্সন'
          },
          {
            en: 'Any version up to 20.4',
            bn: '20.4 পর্যন্ত যেকোনো ভার্সন'
          },
          {
            en: 'All versions including future 4.0 releases',
            bn: 'ভবিষ্যতের 4.0 সহ যেকোনো রিলিজ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The caret (^) permits backward-compatible updates up to the next major version boundary.',
          bn: 'ক্যারেট (^) চিহ্ন পরবর্তী মেজর ভার্সনের আগ পর্যন্ত সব নিরাপদ আপডেটের অনুমতি দেয়।'
        },
        explanation: {
          en: 'Under Semantic Versioning, ^2.4 allows all non-breaking updates within the 2.x release line.',
          bn: 'সেমান্টিক ভার্সনিং অনুসারে ^2.4 যেকোনো সামঞ্জস্যপূর্ণ 2.x সংস্করণে আপডেটের সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-vendor-autoload-single-point-of-entry',
        kind: 'mcq',
        topic: 'vendor-autoload-entrypoint',
        question: {
          en: 'Where does Composer place the primary autoloader script that applications include to load dependencies?',
          bn: 'কম্পোজার মূল অটোলোডার স্ক্রিপ্টটি কোথায় তৈরি করে যা অ্যাপ্লিকেশনে যুক্ত করে সব প্যাকেজ ব্যবহার করা হয়?'
        },
        options: [
          { en: 'vendor/autoload.php', bn: 'vendor/autoload.php' },
          { en: 'src/autoload.php', bn: 'src/autoload.php' },
          { en: 'composer/loader.php', bn: 'composer/loader.php' },
          { en: 'public/index.php', bn: 'public/index.php' }
        ],
        answer: 0,
        hint: {
          en: 'All Composer assets and loaders reside within the vendor folder.',
          bn: 'কম্পোজারের যাবতীয় প্যাকেজ এবং লোডার vendor ফোল্ডারের ভেতর সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'require_once "vendor/autoload.php"; is the universal entry point bootstrapping all Composer dependencies.',
          bn: 'require_once "vendor/autoload.php"; হলো কম্পোজারের সমস্ত লাইব্রেরি ব্যবহারের সার্বজনীন প্রবেশদ্বার।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-php-release',
    title: {
      en: 'Modern PHP 8 Features, Performance & Release Lifecycle',
      bn: 'আধুনিক পিএইচপি ৮ সুবিধাসমূহ, পারফরম্যান্স এবং রিলিজ লাইফসাইকেল'
    }
  }
};
