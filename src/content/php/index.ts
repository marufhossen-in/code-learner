import type { Hub } from '../../lib/types';
import { TheEmbeddedScriptLesson } from './lessons/the-embedded-script';
import { TypesAndTheLooseEngineLesson } from './lessons/types-and-the-loose-engine';
import { ArraysThatDoEverythingLesson } from './lessons/arrays-that-do-everything';
import { FormsAndSuperglobalsLesson } from './lessons/forms-and-superglobals';
import { FunctionsAndTheComposerLesson } from './lessons/functions-and-the-composer';
import { ObjectsAndTheRequestLesson } from './lessons/objects-and-the-request';
import { SessionsAndSecurityLesson } from './lessons/sessions-and-security';
import { TheClassicServeLesson } from './lessons/the-classic-serve';

export const phpHub: Hub = {
  slug: 'php',
  name: 'PHP',
  icon: '🐘',
  tagline: {
    en: 'Master modern server-side PHP: from web request lifecycles and strict typing to arrays, superglobals, object-oriented PDO databases, and production PHP-FPM deployment.',
    bn: 'আধুনিক সার্ভার-সাইড পিএইচপি আয়ত্ত করুন: ওয়েব রিকোয়েস্ট লাইফসাইকেল ও কঠোর টাইপিং থেকে শুরু করে অ্যারে, সুপারগ্লোবাল, অবজেক্ট-ওরিয়েন্টেড PDO ডেটাবেস এবং প্রোডাকশন PHP-FPM ডিপ্লয়মেন্ট।'
  },
  intro: {
    en: 'PHP powers over 75% of web application backends globally. Modern PHP has evolved far beyond early template scripts into a high-performance, strictly typed engine featuring JIT compilation, Composer dependency orchestration, and robust object-oriented architectures. This comprehensive 8-lesson curriculum guides you from the request-response lifecycle and strict type coercion to array functional pipelines, secure form validation, PDO parameterized database queries, session hardening, and OPcache production tuning.',
    bn: 'বিশ্বের ৭৫% এর বেশি ওয়েব অ্যাপ্লিকেশন ব্যাকএন্ড পিএইচপির ওপর চলে। আধুনিক পিএইচপি প্রাথমিক স্ক্রিপ্টিং ভাষা থেকে বিবর্তিত হয়ে JIT কম্পাইলেশন, কম্পোজার প্যাকেজ ব্যবস্থাপনা এবং শক্তিশালী অবজেক্ট-ওরিয়েন্টেড আর্কিটেকচার সমৃদ্ধ একটি উচ্চ-কার্যক্ষমতাসম্পন্ন ভাষায় পরিণত হয়েছে। এই পূর্ণাঙ্গ ৮ পাঠের ট্র্যাকে রিকোয়েস্ট-রেসপন্স লাইফসাইকেল ও কঠোর টাইপিং থেকে শুরু করে অ্যারে ট্রান্সফরমেশন, নিরাপদ ফর্ম প্রসেসিং, PDO প্যারামিটারাইজড ডেটাবেস কোয়েরি, সেশন সিকিউরিটি এবং OPcache প্রোডাকশন টিউনিং ধাপে ধাপে শেখানো হয়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Server Foundations, Types & Core Syntax',
        bn: 'ধাপ ১: সার্ভার ভিত্তি, টাইপ সিস্টেম এবং মৌলিক সিনট্যাক্স'
      },
      items: [
        {
          en: 'The Embedded Script: Web server execution lifecycles, <?php tags, output echoing, and file inclusion rules (Lesson 1)',
          bn: 'অন্তর্ভুক্ত স্ক্রিপ্ট: ওয়েব সার্ভার এক্সিকিউশন লাইফসাইকেল, <?php ট্যাগ, আউটপুট ইকো এবং ফাইল ইনক্লুডের নিয়ম (পাঠ ১)'
        },
        {
          en: 'Types & The Strict Engine: Scalar typing, declare(strict_types=1), null coalescing, and match expressions (Lesson 2)',
          bn: 'টাইপ সিস্টেম ও কঠোর ইঞ্জিন: স্কেলার টাইপিং, declare(strict_types=1), নাল কোলেসিং এবং ম্যাচ এক্সপ্রেশন (পাঠ ২)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Data Structures & Request Processing',
        bn: 'ধাপ ২: ডেটা স্ট্রাকচার এবং রিকোয়েস্ট প্রসেসিং'
      },
      items: [
        {
          en: 'Arrays That Do Everything: Ordered lists, associative hash maps, destructuring, and functional array pipelines (Lesson 3)',
          bn: 'সব কাজের অ্যারে: ইনডেক্সড তালিকা, অ্যাসোসিয়েটিভ হ্যাশ ম্যাপ, ডিস্ট্রাকচারিং এবং ফাংশনাল অ্যারে পাইপলাইন (পাঠ ৩)'
        },
        {
          en: 'Forms & Superglobals: Request inspection via $_GET and $_POST, input sanitization, and CSRF token defenses (Lesson 4)',
          bn: 'ফর্ম এবং সুপারগ্লোবাল: $_GET ও $_POST দিয়ে রিকোয়েস্ট পরীক্ষা, ইনপুট স্যানিটাইজেশন এবং CSRF প্রতিরোধ (পাঠ ৪)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Modular Architecture, OOP & Databases',
        bn: 'ধাপ ৩: মডুলার আর্কিটেকচার, অবজেক্ট-ওরিয়েন্টেড ও ডেটাবেস'
      },
      items: [
        {
          en: 'Functions & Composer: Modern closures, PSR-4 namespace autoloading, and package dependency management (Lesson 5)',
          bn: 'ফাংশন এবং কম্পোজার: আধুনিক ক্লোজার, PSR-4 নেমস্পেস অটোলোডিং এবং প্যাকেজ ডিপেন্ডেন্সি ম্যানেজমেন্ট (পাঠ ৫)'
        },
        {
          en: 'Objects & PDO Databases: Classes, constructor property promotion, PDO prepared statements, and transactions (Lesson 6)',
          bn: 'অবজেক্ট এবং PDO ডেটাবেস: ক্লাস, কনস্ট্রাক্টর প্রমোশন, PDO প্রিপেয়ার্ড স্টেটমেন্ট এবং ট্রানজ্যাকশন (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: State Security & High-Performance Production',
        bn: 'ধাপ ৪: স্টেট সিকিউরিটি এবং হাই-পারফরম্যান্স প্রোডাকশন'
      },
      items: [
        {
          en: 'Sessions & Web Security: Session fixation prevention, password hashing with Argon2id, and cookie flags (Lesson 7)',
          bn: 'সেশন এবং ওয়েব সিকিউরিটি: সেশন ফিক্সেশন প্রতিরোধ, Argon2id দিয়ে পাসওয়ার্ড হ্যাশিং এবং কুকি ফ্ল্যাগ (পাঠ ৭)'
        },
        {
          en: 'The Classic Serve Capstone: PHP-FPM FastCGI proxying, OPcache bytecode pre-compilation, and RESTful API architecture (Lesson 8)',
          bn: 'প্রোডাকশন সার্ভ ক্যাপস্টোন: PHP-FPM ফাস্ট-সিজিআই প্রক্সি, OPcache বাইটকোড কম্পাইলেশন এবং RESTful এপিআই আর্কিটেকচার (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheEmbeddedScriptLesson,
    TypesAndTheLooseEngineLesson,
    ArraysThatDoEverythingLesson,
    FormsAndSuperglobalsLesson,
    FunctionsAndTheComposerLesson,
    ObjectsAndTheRequestLesson,
    SessionsAndSecurityLesson,
    TheClassicServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Project 1: Secure User Authentication and Session Portal',
        bn: 'প্রজেক্ট ১: নিরাপদ ব্যবহারকারী প্রমাণীকরণ এবং সেশন পোর্টাল'
      },
      brief: {
        en: 'Build a production-grade authentication gateway using PHP 8.2 and PDO SQLite. Implement strict password hashing with password_hash, enforce session regeneration via session_regenerate_id(true), secure cookie headers (HttpOnly, Secure, SameSite=Strict), and reject invalid CSRF tokens across 5 protected endpoints.',
        bn: 'পিএইচপি ৮.২ এবং PDO SQLite ব্যবহার করে একটি প্রোডাকশন মানের প্রমাণীকরণ গেটওয়ে তৈরি করুন। password_hash দিয়ে পাসওয়ার্ড হ্যাশিং, session_regenerate_id(true) দিয়ে সেশন পুনর্নবায়ন, সুরক্ষিত কুকি হেডার (HttpOnly, Secure, SameSite=Strict) এবং ৫ টি সুরক্ষিত এন্ডপয়েন্টে CSRF ফিল্টারিং বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Project 2: Modular RESTful Product Inventory API with Composer',
        bn: 'প্রজেক্ট ২: কম্পোজার ভিত্তিক মডুলার RESTful পণ্য ইনভেন্টরি এপিআই'
      },
      brief: {
        en: 'Architect a clean RESTful microservice implementing PSR-4 namespace autoloading via Composer. Handle JSON request payloads, execute atomic database balance modifications using PDO transactions, and return structured HTTP status codes across 100 inventory products.',
        bn: 'কম্পোজারের মাধ্যমে PSR-4 নেমস্পেস অটোলোডিং বাস্তবায়ন করে একটি পরিচ্ছন্ন RESTful মাইক্রোসার্ভিস তৈরি করুন। JSON রিকোয়েস্ট পেলোড প্রসেসিং, PDO ট্রানজ্যাকশন দিয়ে ডেটাবেস ব্যালেন্স আপডেট এবং ১০০ টি ইনভেন্টরি পণ্যের ক্ষেত্রে সঠিক HTTP স্ট্যাটাস কোড প্রদান করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always declare strict types at the very top of every PHP file (declare(strict_types=1);) to prevent dangerous silent type coercion.',
      bn: 'অনাকাঙ্ক্ষিত টাইপ কনভার্সন এড়াতে প্রতিটি পিএইচপি ফাইলের একেবারে শুরুতে সর্বদা declare(strict_types=1); ঘোষণা করুন।'
    },
    {
      en: 'Never concatenate raw user input into SQL queries; always bind parameters through PDO prepared statements to completely eliminate SQL injection vulnerabilities.',
      bn: 'এসকিউএল কোয়েরিতে ব্যবহারকারীর ইনপুট কখনো সরাসরি যুক্ত করবেন না; এসকিউএল ইনজেকশন পুরোপুরি ঠেকাতে সর্বদা PDO প্রিপেয়ার্ড স্টেটমেন্টে প্যারামিটার বাইন্ড করুন।'
    },
    {
      en: 'Sanitize all dynamic output rendered into HTML views using htmlspecialchars($var, ENT_QUOTES, "UTF-8") to prevent Cross-Site Scripting (XSS).',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) রোধ করতে এইচটিএমএল ভিউতে আউটপুট দেখানোর সময় সর্বদা htmlspecialchars($var, ENT_QUOTES, "UTF-8") ব্যবহার করুন।'
    },
    {
      en: 'Enable OPcache in production environments to pre-compile PHP source scripts into shared memory bytecode, avoiding redundant disk parsing on every HTTP request.',
      bn: 'প্রোডাকশন সার্ভারে OPcache সক্রিয় রাখুন যাতে প্রতিটি অনুরোধে স্ক্রিপ্ট বারবার ডিস্ক থেকে পার্স না করে শেয়ার্ড মেমোরি থেকে দ্রুত চালানো যায়।'
    },
    {
      en: 'Regenerate session identifiers upon user login using session_regenerate_id(true) and enforce HttpOnly, Secure, and SameSite cookie attributes.',
      bn: 'লগইনের সাথে সাথে session_regenerate_id(true) কল করে সেশন আইডি পরিবর্তন করুন এবং কুকিতে HttpOnly, Secure ও SameSite অ্যাট্রিবিউট নিশ্চিত করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the operational difference between the include, require, include_once, and require_once statements in PHP?',
        bn: 'পিএইচপিতে include, require, include_once এবং require_once স্টেটমেন্টের মধ্যে মূল কার্যক্ষম পার্থক্য কী?'
      },
      a: {
        en: 'Both include and require inject external file contents into the current script. However, if the target file is missing, include emits an E_WARNING and continues execution, whereas require emits a fatal E_COMPILE_ERROR and halts the script immediately. The _once variants maintain an internal tracking table of included files; if a file has already been loaded, subsequent calls are silently skipped, preventing duplicate class or function declaration crashes.',
        bn: 'include এবং require উভয়ই বর্তমান স্ক্রিপ্টে বাহ্যিক ফাইলের কোড যুক্ত করে। কিন্তু ফাইল না পাওয়া গেলে include কেবল একটি ওয়ার্নিং (E_WARNING) দিয়ে বাকি কোড চালানো অব্যাহত রাখে, আর require একটি মারাত্মক ফ্যাটাল এরর (E_COMPILE_ERROR) দিয়ে সাথে সাথে স্ক্রিপ্ট বন্ধ করে দেয়। _once যুক্ত ভ্যারিয়েন্টগুলো পূর্বে লোড হওয়া ফাইলের হিসাব রাখে; ফলে কোনো ফাইল ইতিমধ্যে লোড হয়ে থাকলে তা পুনরায় লোড করা এড়িয়ে গিয়ে ডুপ্লিকেট ক্লাস বা ফাংশন ঘোষণার ক্র্যাশ রোধ করে।'
      }
    },
    {
      q: {
        en: 'How does PHP manage memory lifecycle and garbage collection during web request processing?',
        bn: 'ওয়েব রিকোয়েস্ট প্রসেসিং চলাকালীন পিএইচপি কীভাবে মেমোরি লাইফসাইকেল এবং গার্বেজ কালেকশন পরিচালনা করে?'
      },
      a: {
        en: 'PHP uses a Share-Nothing architectural model. For each incoming HTTP request, the PHP-FPM worker allocates an isolated memory pool for variables and resources. Variables utilize Reference Counting (refcount). When a variable refcount drops to 0, memory is immediately reclaimed. Cyclic object references are detected by a synchronous cycle collector. Crucially, when the HTTP response finishes, PHP completely destroys the entire request memory arena, eliminating long-running memory leaks.',
        bn: 'পিএইচপি "শেয়ার-নাথিং" আর্কিটেকচারাল মডেল অনুসরণ করে। প্রতিটি আগত HTTP অনুরোধের জন্য PHP-FPM কর্মী সার্ভার আলাদা মেমোরি বরাদ্দ করে। ভেরিয়েবলগুলো রেফারেন্স কাউন্টিং (refcount) পদ্ধতিতে মেমোরি ধরে রাখে; কাউন্ট ০ হলে মেমোরি সাথে সাথে মুক্ত হয়। চক্রাকার রেফারেন্সের জন্য সাইকেল কালেক্টর কাজ করে। সবচেয়ে গুরুত্বপূর্ণ হলো, অনুরোধ শেষ হওয়ার সাথে সাথে পিএইচপি পুরো রিকোয়েস্ট মেমোরি সম্পূর্ণ পরিষ্কার করে দেয়, ফলে মেমোরি লিকের কোনো ঝুঁকি থাকে না।'
      }
    },
    {
      q: {
        en: 'Why is PDO (PHP Data Objects) preferred over the legacy mysqli extension in enterprise applications?',
        bn: 'এন্টারপ্রাইজ অ্যাপ্লিকেশনে পুরোনো mysqli এক্সটেনশনের চেয়ে PDO (PHP Data Objects) কেন বেশি গ্রহণযোগ্য?'
      },
      a: {
        en: 'PDO provides a unified, database-agnostic data access abstraction layer supporting 12 different database drivers (including MySQL, PostgreSQL, SQLite, and Oracle) through an identical API interface. In contrast, mysqli binds exclusively to MySQL. Furthermore, PDO supports named parameter binding (:username, :id) rather than confusing question mark placeholders, robust object-oriented error handling via PDOException, and seamless object hydration directly into domain classes.',
        bn: 'PDO একটি সার্বজনীন ডেটাবেস অ্যাবস্ট্রাকশন লেয়ার যা একই এপিআই ইন্টারফেসের মাধ্যমে ১২ টি ভিন্ন ডেটাবেস ড্রাইভার (MySQL, PostgreSQL, SQLite, Oracle ইত্যাদি) সমর্থন করে। অন্যদিকে mysqli কেবল MySQL-এর জন্যই সীমাবদ্ধ। তাছাড়া PDO প্রশ্নবোধক চিহ্নের বদলে অর্থপূর্ণ নেমড প্যারামিটার বাইন্ডিং (:username, :id), শক্তিশালী PDOException ভিত্তিক ত্রুটি ব্যবস্থাপনা এবং কোয়েরির ফলাফলকে সরাসরি অবজেক্ট ক্লাসে রূপান্তরের সুবিধা দেয়।'
      }
    },
    {
      q: {
        en: 'How does OPcache dramatically accelerate PHP application throughput in production environments?',
        bn: 'প্রোডাকশন সার্ভারে OPcache কীভাবে পিএইচপি অ্যাপ্লিকেশনের গতি ও সক্ষমতা বহুগুণ বৃদ্ধি করে?'
      },
      a: {
        en: 'Under standard execution, the Zend Engine must read the PHP script from disk, perform lexical analysis, parse tokens into an Abstract Syntax Tree (AST), and compile it into Zend Opcodes on every single HTTP request. OPcache eliminates this overhead by compiling the script once and storing the compiled bytecode in shared memory (SHM). Subsequent requests execute pre-compiled bytecode directly from RAM, reducing CPU utilization by up to 70% and slashing response latency.',
        bn: 'সাধারণ অবস্থায় প্রতিবার অনুরোধ এলে জেন্ড ইঞ্জিনকে ডিস্ক থেকে ফাইল পড়ে লেক্সিক্যাল অ্যানালাইসিস, সিনট্যাক্স ট্রি তৈরি এবং জেন্ড অপকোডে কম্পাইল করতে হয়। OPcache প্রথমবার স্ক্রিপ্টটি কম্পাইল করে সেই বাইটকোড শেয়ার্ড মেমোরিতে (RAM) সংরক্ষণ করে রাখে। পরবর্তী প্রতিটি অনুরোধ ডিস্কে হাত না দিয়ে সরাসরি মেমোরি থেকে অপকোড চালায়, যা প্রসেসরের কাজের চাপ ৭০% পর্যন্ত কমিয়ে দেয় এবং সাড়া দেওয়ার গতি বহুগুণ বাড়ায়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Volume Content Platforms: Running WordPress or Drupal backed by PHP-FPM and OPcache serving millions of cached pages daily.',
      bn: 'বিশাল কনটেন্ট প্ল্যাটফর্ম: PHP-FPM এবং OPcache দ্বারা পরিচালিত ওয়ার্ডপ্রেস বা ড্রুপাল যা প্রতিদিন লাখ লাখ ক্যাশড পাতা পরিবেশন করে।'
    },
    {
      en: 'E-Commerce Infrastructure: Powering Magento and WooCommerce transaction engines with ACID-compliant PDO database transactions.',
      bn: 'ই-কমার্স অবকাঠামো: লেনদেনের নির্ভরযোগ্যতা রক্ষায় ACID-সমর্থিত PDO ট্রানজ্যাকশন দ্বারা চালিত ম্যাগেন্টো ও উইকমার্স ইঞ্জিন।'
    },
    {
      en: 'Microservice APIs: High-speed JSON endpoints built on modern PHP 8.3 frameworks (Laravel, Symfony) processing thousands of requests per second.',
      bn: 'মাইক্রোসার্ভিস এপিআই: আধুনিক পিএইচপি ৮.৩ ফ্রেমওয়ার্কে (যেমন লারাভেল, সিম্ফনি) নির্মিত দ্রুতগতির JSON এন্ডপয়েন্ট যা প্রতি সেকেন্ডে হাজার হাজার কল প্রসেস করে।'
    },
    {
      en: 'Enterprise SaaS Portals: Multi-tenant subscription dashboards enforcing strict session isolation, CSRF validation, and Argon2id security.',
      bn: 'প্রাতিষ্ঠানিক সাস পোর্টাল: মাল্টি-টেন্যান্ট প্ল্যাটফর্ম যা কঠোর সেশন সুরক্ষা, CSRF ফিল্টারিং এবং Argon2id নিরাপত্তা নিশ্চিত করে।'
    }
  ]
};
