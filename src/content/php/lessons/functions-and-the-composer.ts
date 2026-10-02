import type { Lesson } from '../../../lib/types';

export const FunctionsAndTheComposerLesson: Lesson = {
  slug: 'functions-and-the-composer',
  tech: 'php',
  title: {
    en: 'Functions, Namespaces, Modern Packaging & Composer',
    bn: 'ফাংশন, নেমস্পেস, আধুনিক প্যাকেজিং এবং কম্পোজার'
  },
  summary: {
    en: 'Master modern PHP modularity: function signatures with type hints, variadics (...$items), named arguments, anonymous closures and short arrow functions (fn() => ...), PSR-4 namespace autoloading, and Composer dependency management.',
    bn: 'আধুনিক পিএইচপির মডুলারিটি আয়ত্ত করুন: টাইপ হিন্টযুক্ত ফাংশন, ভ্যারিয়াডিক (...$items), নেমড আর্গুমেন্ট, অ্যানোনিমাস ক্লোজার এবং শর্ট অ্যারো ফাংশন (fn() => ...), PSR-4 নেমস্পেস অটোলোডিং এবং কম্পোজার ডিপেন্ডেন্সি ম্যানেজমেন্ট।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'modern-functions-heading',
      text: {
        en: 'Type-Hinted Signatures, Named Arguments, and Arrow Functions',
        bn: 'টাইপ-হিন্টযুক্ত স্বাক্ষর, নেমড আর্গুমেন্ট এবং অ্যারো ফাংশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the server runtime) functions enforce strict contracts through scalar type hints and explicit return types. PHP 8 introduced named arguments, allowing callers to pass arguments based on parameter names (such as taxRate: 0.15) rather than rigid positional order, making optional parameters easy to customize without passing nulls. For functional pipelines, short arrow functions using the fn() => syntax automatically capture enclosing variables by value without requiring explicit use ($var) statements.',
        bn: 'পিএইচপির (সার্ভার রানটাইম) আধুনিক ফাংশন স্কেলার টাইপ হিন্ট এবং স্পষ্ট রিটার্ন টাইপের মাধ্যমে কোডের নির্ভরযোগ্যতা নিশ্চিত করে। পিএইচপি ৮ এ নেমড আর্গুমেন্টের সুবিধা যুক্ত হয়েছে, যার ফলে প্যারামিটারের অবস্থানের ওপর নির্ভর না করে সরাসরি নাম উল্লেখ করে (যেমন taxRate: 0.15) আর্গুমেন্ট পাঠানো যায়। এর ফলে মাঝের অপশনাল মানগুলোতে অযথা null না পাঠিয়েও পছন্দমতো আর্গুমেন্ট পাঠানো সম্ভব হয়। ফাংশনাল কোডের জন্য fn() => সিনট্যাক্সের শর্ট অ্যারো ফাংশন স্বয়ংক্রিয়ভাবে বাইরের ভেরিয়েবলকে ক্যাপচার করে, আলাদাভাবে use ($var) লেখার দরকার হয় না।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architecture of Composer PSR-4 class resolution mapping namespaces to filesystem directory trees.',
        bn: 'চিত্র ১: কম্পোজার PSR-4 ক্লাস রেজোলিউশন আর্কিটেকচার যা নেমস্পেসকে ফাইলের ডিরেক্টরি কাঠামোর সাথে মিলিয়ে দেয়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">COMPOSER PSR-4 AUTOLOADING ARCHITECTURE</text>

  <!-- Step 1: composer.json Definition -->
  <g transform="translate(30, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. composer.json</text>
    
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">PSR-4 Mapping</text>
    <rect x="10" y="70" width="150" height="95" rx="5" fill="#0f172a" />
    <text x="15" y="90" fill="#cbd5e1" font-size="8" font-family="monospace">"autoload": {</text>
    <text x="22" y="105" fill="#cbd5e1" font-size="8" font-family="monospace">  "psr-4": {</text>
    <text x="28" y="120" fill="#38bdf8" font-size="8" font-family="monospace">    "App\\\\":</text>
    <text x="35" y="135" fill="#38bdf8" font-size="8" font-family="monospace">    "src/"</text>
    <text x="22" y="150" fill="#cbd5e1" font-size="8" font-family="monospace">  }</text>
    <text x="15" y="160" fill="#cbd5e1" font-size="8" font-family="monospace">}</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">Root namespace prefix</text>
  </g>

  <!-- Step 2: Instantiation -->
  <g transform="translate(230, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#d97706" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Application Code</text>
    
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">new Keyword</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Code requests class:</text>
    <rect x="10" y="90" width="150" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="110" fill="#fbbf24" font-size="8" font-family="monospace">new App\\Services\\</text>
    <text x="15" y="125" fill="#fbbf24" font-size="8" font-family="monospace">PaymentService()</text>
    <text x="15" y="145" fill="#cbd5e1" font-size="8" font-family="monospace">Class not in RAM</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">Triggers spl_autoload</text>
  </g>

  <!-- Step 3: Autoloader Engine -->
  <g transform="translate(430, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#059669" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. PSR-4 Resolver</text>
    
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">vendor/autoload.php</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Translates separators:</text>
    <rect x="10" y="90" width="150" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="110" fill="#34d399" font-size="8" font-family="monospace">App\\ =&gt; src/</text>
    <text x="15" y="125" fill="#34d399" font-size="8" font-family="monospace">\\ =&gt; /</text>
    <text x="15" y="145" fill="#34d399" font-size="8" font-family="monospace">Append .php</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">Finds filesystem path</text>
  </g>

  <!-- Step 4: Just-In-Time Inclusion -->
  <g transform="translate(630, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#db2777" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Filesystem Require</text>
    
    <text x="12" y="55" fill="#f472b6" font-size="10" font-family="monospace">Disk Require</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Requires file directly:</text>
    <rect x="10" y="90" width="160" height="65" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">require_once</text>
    <text x="15" y="125" fill="#f472b6" font-size="8" font-family="monospace">'src/Services/'</text>
    <text x="15" y="140" fill="#f472b6" font-size="8" font-family="monospace">'PaymentService.php'</text>
    <text x="12" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Zero manual requires</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'namespaces-composer-heading',
      text: {
        en: 'Namespaces, PSR-4 Standards, and the Composer Ecosystem',
        bn: 'নেমস্পেস, PSR-4 মান এবং কম্পোজার ইকোসিস্টেম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In large applications, identical class names would inevitably collide without encapsulation. Namespaces (such as namespace App\\Services;) create distinct organizational compartments. The PHP-FIG PSR-4 standard links namespaces directly to filesystem folders: the prefix App\\ points to the src/ directory. Instead of manually writing dozens of require statements, developers simply execute require "vendor/autoload.php"; once. Composer manages package installations, generates lockfiles (composer.lock) for reproducible builds, and optimizes classmaps with composer dump-autoload -o.',
        bn: 'বড় অ্যাপ্লিকেশনে একই নামের দুটি ক্লাস তৈরি হলে জটিলতা এড়াতে নেমস্পেস ব্যবহার করা হয়। নেমস্পেস (যেমন namespace App\\Services;) কোডকে আলাদা লজিক্যাল ফোল্ডারে সুসজ্জিত করে। পিএইচপির প্রাতিষ্ঠানিক PSR-4 মান সরাসরি নেমস্পেসের সাথে ফাইলের ডিরেক্টরি কাঠামোকে যুক্ত করে: ফলে App\\ প্রিফিক্স সরাসরি src/ ডিরেক্টরি নির্দেশ করে। শত শত ফাইলে বারবার require লেখার বদলে শুরুতে কেবল একবার require "vendor/autoload.php"; যুক্ত করলেই সব ক্লাস স্বয়ংক্রিয়ভাবে লোড হয়। কম্পোজার প্যাকেজ ইনস্টলেশন, composer.lock দিয়ে নির্ভুল বিল্ড নিশ্চিতকরণ এবং অপ্টিমাইজেশনের সব কাজ নিখুঁতভাবে পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PSR-4 autoloader path resolution and PHP 8 typed calculation functions.',
        bn: 'PSR-4 অটোলোডার পাথ রূপান্তর এবং পিএইচপি ৮ টাইপযুক্ত গণনার সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PSR-4 Autoloading and Named Parameter functions in TypeScript
interface Psr4Config {
  prefix: string;
  baseDir: string;
}

export class Psr4AutoloaderSimulator {
  private mappings: Psr4Config[] = [];

  public addNamespace(prefix: string, baseDir: string): void {
    this.mappings.push({ prefix, baseDir });
  }

  public resolveFilePath(fullyQualifiedClassName: string): string | null {
    for (const mapping of this.mappings) {
      if (fullyQualifiedClassName.startsWith(mapping.prefix)) {
        const relativeClass = fullyQualifiedClassName.slice(mapping.prefix.length);
        const relativePath = relativeClass.replace(/\\\\/g, '/') + '.php';
        return mapping.baseDir + '/' + relativePath;
      }
    }
    return null;
  }
}

// Higher-order price calculator simulating PHP typed functions
export function calculateTierPrice(baseAmount: number, taxRate: number = 0.15): number {
  return +(baseAmount * (1.0 + taxRate)).toFixed(2);
}

// 1. Setup autoloader with App\\ pointing to src
const autoloader = new Psr4AutoloaderSimulator();
autoloader.addNamespace('App\\\\', 'src');

// 2. Resolve 2 class names into filesystem paths
const paymentClassPath = autoloader.resolveFilePath('App\\\\Services\\\\PaymentGateway');
const userModelPath = autoloader.resolveFilePath('App\\\\Models\\\\User');

console.log('Payment Class Resolved Path:', paymentClassPath); // "src/Services/PaymentGateway.php"
console.log('User Model Resolved Path:', userModelPath); // "src/Models/User.php"

// 3. Process 3 pricing tiers using default and custom tax
const tier1 = calculateTierPrice(100); // 115 with 15% default tax
const tier2 = calculateTierPrice(200, 0.20); // 240 with 20% custom tax
const tier3 = calculateTierPrice(300); // 345 with 15% default tax

console.log('Calculated Tiers:', tier1, tier2, tier3); // 115 240 345`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Named Arguments',
          def: {
            en: 'Syntax allowing callers to pass function parameters by identifier name rather than strict positional order.',
            bn: 'সিনট্যাক্স যার মাধ্যমে আর্গুমেন্টের অবস্থানের তোয়াক্কা না করে সরাসরি প্যারামিটারের নাম উল্লেখ করে মান পাঠানো যায়।'
          }
        },
        {
          term: 'Arrow Function',
          def: {
            en: 'Concise closure syntax (fn($x) => $expr) that returns single expressions and automatically captures outer scope variables by value.',
            bn: 'সংক্ষিপ্ত ক্লোজার কাঠামো যা একটি একক এক্সপ্রেশন রিটার্ন করে এবং স্বয়ংক্রিয়ভাবে বাইরের ভেরিয়েবলকে ক্যাপচার করে।'
          }
        },
        {
          term: 'PSR-4 Standard',
          def: {
            en: 'Standard specification mapping namespace prefixes directly to corresponding filesystem directory hierarchies for automated class loading.',
            bn: 'আদর্শ স্ট্যান্ডার্ড যা স্বয়ংক্রিয় ক্লাস লোডিংয়ের সুবিধার্থে নেমস্পেসকে ফাইলের ডিরেক্টরি পাথের সাথে সমন্বয় করে।'
          }
        },
        {
          term: 'Composer Lockfile',
          def: {
            en: 'File (composer.lock) recording exact pinned versions and commit hashes of installed dependencies for reproducible deployments.',
            bn: 'ফাইল (composer.lock) যা ডিপেন্ডেন্সির নির্দিষ্ট সংস্করণ ও হ্যাশ রেকর্ড করে রেখে সব মেশিনে হুবহু একই ইনস্টলেশন নিশ্চিত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'named-arguments-benefits-ex1',
      kind: 'mcq',
      topic: 'php-named-arguments',
      question: {
        en: 'What is a major advantage of PHP 8 named arguments when calling functions with many optional parameters?',
        bn: 'অনেকগুলো অপশনাল প্যারামিটারযুক্ত ফাংশন কলের ক্ষেত্রে পিএইচপি ৮ নেমড আর্গুমেন্টের প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'You can pass only the specific optional parameters you care about by name, skipping default parameters without passing empty null placeholders',
          bn: 'মাঝের ডিফল্ট প্যারামিটারগুলোতে অযথা null না পাঠিয়ে কেবল নির্দিষ্ট যে প্যারামিটারটি পরিবর্তন দরকার সরাসরি তার নাম উল্লেখ করে মান পাঠানো যায়'
        },
        {
          en: 'It doubles the network speed of the web browser',
          bn: 'এটি ওয়েব ব্রাউজারের নেটওয়ার্ক গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'It translates function names into French automatically',
          bn: 'এটি ফাংশনের নাম স্বয়ংক্রিয়ভাবে ফরাসি ভাষায় রূপান্তর করে'
        },
        {
          en: 'Named arguments prevent functions from returning any value',
          bn: 'নেমড আর্গুমেন্ট ফাংশনকে যেকোনো মান ফেরত দেওয়া থেকে বিরত রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Named arguments liberate callers from positional order and empty placeholder arguments.',
        bn: 'নেমড আর্গুমেন্ট প্যারামিটারের ক্রম মেনে চলার ঝামেলা এবং ফাঁকা প্লেসহোল্ডার দেওয়ার প্রয়োজন দূর করে।'
      },
      explanation: {
        en: 'Named arguments allow selective overrides (e.g. setCookie(name: "id", secure: true)), skipping intervening defaults.',
        bn: 'নেমড আর্গুমেন্ট নির্দিষ্ট প্যারামিটারে সরাসরি মান পাঠাতে সাহায্য করে, ফলে মাঝের ডিফল্ট মানগুলো লেখার প্রয়োজন হয় না।'
      }
    },
    {
      id: 'arrow-functions-scope-capture-ex2',
      kind: 'mcq',
      topic: 'arrow-functions-closure-scope',
      question: {
        en: 'How do PHP short arrow functions (fn() => ...) handle variables declared in the surrounding parent scope?',
        bn: 'পিএইচপি শর্ট অ্যারো ফাংশন (fn() => ...) কীভাবে বাইরের প্যারেন্ট স্কোপের ভেরিয়েবলগুলোকে ব্যবহার করে?'
      },
      options: [
        {
          en: 'They automatically capture variables from the parent scope by-value without needing an explicit use ($var) clause',
          bn: 'কোনো explicit use ($var) ক্লজ ছাড়াই এগুলো স্বয়ংক্রিয়ভাবে বাইরের স্কোপের ভেরিয়েবলগুলোকে বাই-ভ্যালু হিসেবে ক্যাপচার করে'
        },
        {
          en: 'They delete all parent variables from memory',
          bn: 'এগুলো মেমোরি থেকে প্যারেন্ট স্কোপের সমস্ত ভেরিয়েবল মুছে ফেলে'
        },
        {
          en: 'They cannot read any variable outside the function brackets',
          bn: 'এগুলো ফাংশন ব্র্যাকেটের বাইরের কোনো ভেরিয়েবল কখনোই পড়তে পারে না'
        },
        {
          en: 'They convert all numbers into strings',
          bn: 'এগুলো সমস্ত সংখ্যাকে স্ট্রিংয়ে পরিণত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Arrow functions feature implicit by-value binding of outer variables.',
        bn: 'অ্যারো ফাংশন বাইরের ভেরিয়েবলকে স্বয়ংক্রিয়ভাবে বাই-ভ্যালু হিসেবে গ্রহণ করে।'
      },
      explanation: {
        en: 'Arrow functions automatically bind outer variables by value, making inline callbacks clean and concise.',
        bn: 'অ্যারো ফাংশন বাইরের ভেরিয়েবলকে স্বয়ংক্রিয়ভাবে গ্রহণ করায় কোড অত্যন্ত পরিচ্ছন্ন ও সংক্ষিপ্ত হয়।'
      }
    },
    {
      id: 'composer-lock-purpose-ex3',
      kind: 'mcq',
      topic: 'composer-lock-reproducibility',
      question: {
        en: 'Why is committing composer.lock to version control considered an industry best practice?',
        bn: 'ভার্সন কন্ট্রোলে composer.lock ফাইলটি কমিট করা কেন সফটওয়্যার ইন্ডাস্ট্রির একটি সর্বোত্তম অনুশীলন?'
      },
      options: [
        {
          en: 'It guarantees that every developer and production server installs the exact same pinned dependency versions, preventing unexpected breakage from downstream updates',
          bn: 'এটি নিশ্চিত করে যে প্রতিটি ডেভেলপার এবং প্রোডাকশন সার্ভার হুবহু একই সংস্করণের ডিপেন্ডেন্সি ইনস্টল করবে, ফলে অনাকাঙ্ক্ষিত আপডেটে কোড ভেঙে পড়ার ঝুঁকি থাকে না'
        },
        {
          en: 'It encrypts the PHP source code so competitors cannot read it',
          bn: 'এটি পিএইচপি সোর্স কোডকে এনক্রিপ্ট করে রাখে যাতে প্রতিযোগীরা পড়তে না পারে'
        },
        {
          en: 'It saves server battery life by 50 percent',
          bn: 'এটি সার্ভারের ব্যাটারি লাইফ ৫০ শতাংশ বাঁচায়'
        },
        {
          en: 'It is required by the Windows operating system license',
          bn: 'উইন্ডোজ অপারেটিং সিস্টেমের লাইসেন্সের জন্য এটি বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'The lockfile freezes the dependency tree to precise cryptographic release versions.',
        bn: 'লকফাইল ডিপেন্ডেন্সির নির্দিষ্ট সংস্করণকে লক করে রাখে যাতে সব পরিবেশে একই কোড চলে।'
      },
      explanation: {
        en: 'composer.lock guarantees deterministic dependency resolution across team environments and production deployments.',
        bn: 'composer.lock নিশ্চিত করে যে টিমের সকল সদস্য ও সার্ভারে অবিকল একই লাইব্রেরি ভার্সন ব্যবহৃত হচ্ছে।'
      }
    },
    {
      id: 'psr-4-namespace-structure-ex4',
      kind: 'mcq',
      topic: 'psr-4-autoloading-convention',
      question: {
        en: 'Under PSR-4 autoloading with "App\\\\": "src/", what filesystem path corresponds to the class App\\Services\\Mailer?',
        bn: 'PSR-4 অটোলোডিংয়ে "App\\\\": "src/" কনফিগারেশন থাকলে App\\Services\\Mailer ক্লাসটির ফাইল পাথ কোনটি হবে?'
      },
      options: [
        { en: 'src/Services/Mailer.php', bn: 'src/Services/Mailer.php' },
        { en: 'src/App/Services/Mailer.php', bn: 'src/App/Services/Mailer.php' },
        { en: 'vendor/Mailer.php', bn: 'vendor/Mailer.php' },
        { en: 'public/App_Services_Mailer.php', bn: 'public/App_Services_Mailer.php' }
      ],
      answer: 0,
      hint: {
        en: 'PSR-4 replaces the prefix "App\\" with "src/", turns remaining backslashes into slashes, and appends ".php".',
        bn: 'PSR-4 "App\\" এর বদলে "src/" বসায়, ব্যাকস্ল্যাশগুলোকে স্লাশে পরিণত করে এবং শেষে ".php" যুক্ত করে।'
      },
      explanation: {
        en: 'PSR-4 maps the prefix App\\ to src/, resulting directly in src/Services/Mailer.php.',
        bn: 'PSR-4 প্রিফিক্স App\\ কে src/ এ রূপান্তর করে, ফলে ফাইল পাথ হয় src/Services/Mailer.php।'
      }
    }
  ],
  quiz: {
    id: 'quiz-functions-and-the-composer',
    title: {
      en: 'PHP Modern Modularity and Composer Quiz',
      bn: 'পিএইচপি আধুনিক মডুলারিটি এবং কম্পোজার কুইজ'
    },
    questions: [
      {
        id: 'quiz-dump-autoload-optimization',
        kind: 'mcq',
        topic: 'composer-dump-autoload-optimized',
        question: {
          en: 'What does running composer dump-autoload -o (or --optimize) achieve for production servers?',
          bn: 'প্রোডাকশন সার্ভারে composer dump-autoload -o (বা --optimize) কমান্ডটি চালালে কী লাভ হয়?'
        },
        options: [
          {
            en: 'It converts PSR-4 rules into an authoritative static array classmap in memory, eliminating filesystem disk lookups when resolving classes',
            bn: 'এটি সমস্ত PSR-4 নিয়মকে একটি একক স্ট্যাটিক মেমোরি ক্লাস ম্যাপে রূপান্তর করে, যার ফলে ক্লাস খোঁজার জন্য ডিস্কে ফাইল সার্চ করার সময় বাঁচে'
          },
          {
            en: 'It deletes all third-party libraries to free up disk storage',
            bn: 'এটি ডিস্কের জায়গা খালি করতে সমস্ত থার্ড-পার্টি লাইব্রেরি মুছে ফেলে'
          },
          {
            en: 'It compiles PHP files directly into machine binary .exe files',
            bn: 'এটি পিএইচপি ফাইলগুলোকে সরাসরি মেশিন বাইনারি .exe ফাইলে কম্পাইল করে'
          },
          {
            en: 'It restarts the Nginx web server automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে Nginx ওয়েব সার্ভার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Optimized classmaps resolve class lookups through fast array indexing rather than disk probing.',
          bn: 'অপ্টিমাইজড ক্লাস ম্যাপ ডিস্কে খোঁজার বদলে দ্রুত মেমোরি হ্যাশ টেবিল থেকে ক্লাসের অবস্থান নিশ্চিত করে।'
        },
        explanation: {
          en: 'The -o flag builds a comprehensive classmap array, yielding significant performance gains on high-traffic sites.',
          bn: '-o ফ্ল্যাগ একটি সম্পূর্ণ ক্লাস ম্যাপ তৈরি করে, যা প্রোডাকশন সার্ভারের পারফরম্যান্স লক্ষণীয়ভাবে বাড়িয়ে দেয়।'
        }
      },
      {
        id: 'quiz-variadic-parameters-splat',
        kind: 'mcq',
        topic: 'php-variadic-functions',
        question: {
          en: 'In function recordScores(int ...$scores), what data type does $scores hold inside the function body?',
          bn: 'function recordScores(int ...$scores) ফাংশনে $scores ভেরিয়েবলটি ফাংশনের ভেতরে কোন ডেটা টাইপ হিসেবে অবস্থান করে?'
        },
        options: [
          {
            en: 'An indexed array containing all the integer arguments passed by the caller',
            bn: 'কলারের পাঠানো সমস্ত পূর্ণসংখ্যা আর্গুমেন্ট ধারণকারী একটি ইনডেক্সড অ্যারে'
          },
          {
            en: 'A comma-separated string',
            bn: 'কমাযুক্ত একটি সাধারণ টেক্সট স্ট্রিং'
          },
          {
            en: 'A boolean true or false flag',
            bn: 'একটি বুলিয়ান true অথবা false ফ্ল্যাগ'
          },
          {
            en: 'A database resource pointer',
            bn: 'একটি ডেটাবেস রিসোর্স পয়েন্টার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Variadic splat syntax (...$arg) gathers multiple arguments into an indexed array.',
          bn: 'ভ্যারিয়াডিক সিনট্যাক্স (...$arg) একাধিক আর্গুমেন্টকে একটি সাধারণ ইনডেক্সড অ্যারেতে রূপান্তর করে।'
        },
        explanation: {
          en: 'The ... operator bundles arbitrary numbers of arguments into an array while type-checking each element.',
          bn: '... অপারেটর প্রতিটি উপাদানের টাইপ পরীক্ষা করে একাধিক আর্গুমেন্টকে একটি অ্যারেতে সাজিয়ে দেয়।'
        }
      },
      {
        id: 'quiz-pass-by-reference-ampersand',
        kind: 'mcq',
        topic: 'pass-by-reference-semantics',
        question: {
          en: 'What occurs when a parameter is preceded by an ampersand: function increment(int &$counter)?',
          bn: 'যখন কোনো প্যারামিটারের পূর্বে একটি অ্যান্ড চিহ্ন থাকে (যেমন function increment(int &$counter)), তখন কী ঘটে?'
        },
        options: [
          {
            en: 'The argument is passed by reference, meaning modifications made to $counter directly alter the original variable in the caller scope',
            bn: 'আর্গুমেন্টটি রেফারেন্স আকারে পাঠানো হয়, ফলে ফাংশনের ভেতর $counter পরিবর্তন করলে বাইরের মূল ভেরিয়েবলটিও সরাসরি পরিবর্তিত হয়'
          },
          {
            en: 'The function can only be executed once per calendar year',
            bn: 'ফাংশনটি বছরে কেবল একবারই চালানো সম্ভব হয়'
          },
          {
            en: 'The argument is automatically converted into an XML node',
            bn: 'আর্গুমেন্টটি স্বয়ংক্রিয়ভাবে একটি XML নোডে রূপান্তরিত হয়'
          },
          {
            en: 'The function ignores the parameter completely',
            bn: 'ফাংশনটি এই প্যারামিটারটিকে পুরোপুরি উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The & symbol signifies reference passing rather than standard copy-on-write by-value passing.',
          bn: '& প্রতীক নির্দেশ করে যে মানের অনুলিপি না বানিয়ে সরাসরি মূল ভেরিয়েবলের রেফারেন্স ব্যবহার করা হচ্ছে।'
        },
        explanation: {
          en: 'Passing by reference binds the parameter directly to the caller variable storage cell.',
          bn: 'রেফারেন্স দিয়ে পাঠালে ফাংশনের ভেতরের পরিবর্তন বাইরের মূল ভেরিয়েবলকে প্রভাবিত করে।'
        }
      },
      {
        id: 'quiz-namespace-aliasing-use',
        kind: 'mcq',
        topic: 'use-namespace-aliasing',
        question: {
          en: 'How do you resolve a naming conflict if two external libraries both define a Logger class?',
          bn: 'দুটি বাহ্যিক লাইব্রেরি উভয়েই যদি একটি Logger ক্লাস প্রদান করে, তবে কীভাবে নামের সংঘর্ষ সমাধান করবেন?'
        },
        options: [
          {
            en: 'Alias one of the classes using the "as" keyword: use VendorA\\Logger; use VendorB\\Logger as CloudLogger;',
            bn: '"as" কিওয়ার্ড দিয়ে যেকোনো একটি ক্লাসের বিকল্প নাম (অ্যালিয়াস) তৈরি করে: use VendorA\\Logger; use VendorB\\Logger as CloudLogger;'
          },
          {
            en: 'Delete one of the two libraries from the server hard drive',
            bn: 'সার্ভারের হার্ডডিস্ক থেকে যেকোনো একটি লাইব্রেরি মুছে ফেলে'
          },
          {
            en: 'Combine both classes by copy-pasting their code into index.php',
            bn: 'উভয় ক্লাসের কোড কপি করে index.php ফাইলে একসাথে পেস্ট করে'
          },
          {
            en: 'PHP crashes and cannot run when two classes share a name',
            bn: 'একই নামের দুটি ক্লাস থাকলে পিএইচপি সবসময় ক্র্যাশ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "as" keyword provides local aliasing to prevent namespace collisions.',
          bn: '"as" কিওয়ার্ড লোকালভাবে ক্লাসের নতুন নাম দিয়ে একই নামের ক্লাসের দ্বন্দ্ব দূর করে।'
        },
        explanation: {
          en: 'Aliasing with "as" allows multiple identically named classes to coexist smoothly in the same file.',
          bn: '"as" কিওয়ার্ড ব্যবহারের মাধ্যমে একই ফাইলে একই নামের একাধিক ক্লাস নির্বিঘ্নে একসাথে ব্যবহার করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'objects-and-the-request',
    title: {
      en: 'Object-Oriented PHP & PDO Database Architecture',
      bn: 'অবজেক্ট-ওরিয়েন্টেড পিএইচপি এবং PDO ডেটাবেস আর্কিটেকচার'
    }
  }
};
