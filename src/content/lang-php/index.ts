import type { Hub } from '../../lib/types';
import { TagsAndTheEchoLesson } from './lessons/tags-and-the-echo';
import { VarsAndTheArrayLesson } from './lessons/vars-and-the-array';
import { FuncsAndTheScopeLesson } from './lessons/funcs-and-the-scope';
import { FormsAndThePostLesson } from './lessons/forms-and-the-post';
import { ClassesAndTheTraitLesson } from './lessons/classes-and-the-trait';
import { PdosAndTheQueryLesson } from './lessons/pdos-and-the-query';
import { ComposersAndTheAutoloadLesson } from './lessons/composers-and-the-autoload';
import { ThePhpReleaseLesson } from './lessons/the-php-release';

export const langPhpHub: Hub = {
  slug: 'lang-php',
  name: 'PHP Language',
  icon: '🐘',
  tagline: {
    en: 'Master the PHP language specification: syntax tokens, dynamic typing, array maps, function scopes, object-oriented traits, PDO databases, and modern PHP 8 language features.',
    bn: 'পিএইচপি ভাষার খুঁটিনাটি আয়ত্ত করুন: সিনট্যাক্স টোকেন, ডাইনামিক টাইপিং, অ্যারে হ্যাশ ম্যাপ, ফাংশন স্কোপ, অবজেক্ট-ওরিয়েন্টেড ট্রেইট, PDO ডেটাবেস এবং পিএইচপি ৮ এর আধুনিক সুবিধাসমূহ।'
  },
  intro: {
    en: 'PHP is a resilient general-purpose programming language powering backend services, CMS platforms, and enterprise microservices globally. With the introduction of PHP 8, the language gained JIT bytecode optimization, union types, constructor promotion, attributes, and fiber coroutines. This 8-lesson language track covers the core language specifications from syntax boundaries and memory structures to object models, database drivers, and package orchestration.',
    bn: 'পিএইচপি একটি শক্তিশালী ও বহুমুখী প্রোগ্রামিং ভাষা যা বিশ্বজুড়ে ব্যাকএন্ড সার্ভিস, সিএমএস প্ল্যাটফর্ম এবং এন্টারপ্রাইজ মাইক্রোসার্ভিস পরিচালনায় ব্যবহৃত হয়। পিএইচপি ৮ এর মাধ্যমে ভাষাটিতে JIT বাইটকোড অপ্টিমাইজেশন, ইউনিয়ন টাইপ, কনস্ট্রাক্টর প্রমোশন, অ্যাট্রিবিউট এবং ফাইবার করুটিন যুক্ত হয়েছে। এই ৮ পাঠের ট্র্যাকটিতে সিনট্যাক্স ও মেমোরি স্ট্রাকচার থেকে শুরু করে অবজেক্ট মডেল, ডেটাবেস ড্রাইভার এবং প্যাকেজ ব্যবস্থাপনা পর্যন্ত পিএইচপির সকল মৌলিক বৈশিষ্ট্য বিশদভাবে আলোচনা করা হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Syntax Foundations, Types & Array Structures',
        bn: 'ধাপ ১: সিনট্যাক্স ভিত্তি, টাইপ সিস্টেম এবং অ্যারে স্ট্রাকচার'
      },
      items: [
        {
          en: 'Tags & Echo: PHP tag delimiters, short-echo syntax, print constructs, and compiler output buffering (Lesson 1)',
          bn: 'ট্যাগ ও ইকো: পিএইচপি ট্যাগ সিনট্যাক্স, শর্ট-ইকো, প্রিন্ট কনস্ট্রাক্ট এবং কম্পাইলার আউটপুট বাফারিং (পাঠ ১)'
        },
        {
          en: 'Vars & Arrays: Dynamic typing, declare(strict_types=1), ordered hash tables, destructuring, and array operations (Lesson 2)',
          bn: 'ভেরিয়েবল ও অ্যারে: ডাইনামিক টাইপিং, declare(strict_types=1), হ্যাশ টেবিল, ডিস্ট্রাকচারিং এবং অ্যারে অপারেশন (পাঠ ২)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Functions, Variable Scope & HTTP Ingress',
        bn: 'ধাপ ২: ফাংশন, ভেরিয়েবল স্কোপ এবং HTTP ইনপুট'
      },
      items: [
        {
          en: 'Funcs & Scope: Lexical scopes, typed signatures, variadics, arrow closures, and reference passing (Lesson 3)',
          bn: 'ফাংশন ও স্কোপ: লেক্সিক্যাল স্কোপ, টাইপযুক্ত স্বাক্ষর, ভ্যারিয়াডিক, অ্যারো ক্লোজার এবং রেফারেন্স পাসিং (পাঠ ৩)'
        },
        {
          en: 'Forms & Post: Superglobals ($_POST, $_GET, $_FILES), raw input streams, and HTML entity sanitization (Lesson 4)',
          bn: 'ফর্ম ও পোস্ট: সুপারগ্লোবাল ($_POST, $_GET, $_FILES), ইনপুট স্ট্রিম এবং এইচটিএমএল এন্টিটি স্যানিটাইজেশন (পাঠ ৪)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Object-Oriented Architecture & Persistence',
        bn: 'ধাপ ৩: অবজেক্ট-ওরিয়েন্টেড আর্কিটেকচার এবং পারসিস্টেন্স'
      },
      items: [
        {
          en: 'Classes & Traits: Class structures, visibility modifiers, constructor promotion, inheritance, and trait mixins (Lesson 5)',
          bn: 'ক্লাস ও ট্রেইট: ক্লাস গঠন, ভিজিবিলিটি মডিফায়ার, কনস্ট্রাক্টর প্রমোশন, ইনহেরিটেন্স এবং ট্রেইট মিক্সিন (পাঠ ৫)'
        },
        {
          en: 'PDO & Queries: PDO abstraction, prepared statement binding, transaction isolation, and error modes (Lesson 6)',
          bn: 'PDO ও কুয়েরি: PDO অ্যাবস্ট্রাকশন, প্রিপেয়ার্ড স্টেটমেন্ট বাইন্ডিং, ট্রানজ্যাকশন আইসোলেশন এবং এরর মোড (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: Packaging, Modern Features & Releases',
        bn: 'ধাপ ৪: প্যাকেজিং, আধুনিক বৈশিষ্ট্য এবং রিলিজ লাইফসাইকেল'
      },
      items: [
        {
          en: 'Composer & Autoload: Namespace declarations, PSR-4 autoloading mechanisms, lockfiles, and package orchestration (Lesson 7)',
          bn: 'কম্পোজার ও অটোলোড: নেমস্পেস ঘোষণা, PSR-4 অটোলোডিং মেকানিজম, লকফাইল এবং প্যাকেজ ব্যবস্থাপনা (পাঠ ৭)'
        },
        {
          en: 'The PHP Release: PHP 8 match expressions, attributes, nullsafe chaining, JIT compiler, and language release lifecycle (Lesson 8)',
          bn: 'পিএইচপি রিলিজ: পিএইচপি ৮ ম্যাচ এক্সপ্রেশন, অ্যাট্রিবিউট, নালসেফ চেইনিং, JIT কম্পাইলার এবং রিলিজ লাইফসাইকেল (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TagsAndTheEchoLesson,
    VarsAndTheArrayLesson,
    FuncsAndTheScopeLesson,
    FormsAndThePostLesson,
    ClassesAndTheTraitLesson,
    PdosAndTheQueryLesson,
    ComposersAndTheAutoloadLesson,
    ThePhpReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Project 1: Secure Data Access Gateway with PDO and Traits',
        bn: 'প্রজেক্ট ১: PDO এবং ট্রেইট সমন্বয়ে নিরাপদ ডেটা অ্যাক্সেস গেটওয়ে'
      },
      brief: {
        en: 'Develop an object-oriented database access layer using PHP 8.2. Use traits for timestamp auditing, implement constructor property promotion across 5 domain entities, execute parameterized queries via PDO prepared statements, and enforce atomic commit and rollback transactions.',
        bn: 'পিএইচপি ৮.২ ব্যবহার করে একটি অবজেক্ট-ওরিয়েন্টেড ডেটাবেস অ্যাক্সেস লেয়ার তৈরি করুন। টাইমস্ট্যাম্প অডিটের জন্য ট্রেইট, ৫ টি ডোমেন মডেলে কনস্ট্রাক্টর প্রমোশন, PDO প্রিপেয়ার্ড স্টেটমেন্টের মাধ্যমে প্যারামিটারাইজড কোয়েরি এবং ট্রানজ্যাকশন বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Project 2: Modular Modern Package Library with PSR-4 Autoloading',
        bn: 'প্রজেক্ট ২: PSR-4 অটোলোডিং সমৃদ্ধ আধুনিক মডুলার প্যাকেজ লাইব্রেরি'
      },
      brief: {
        en: 'Structure an open-source PHP utility package adhering strictly to PSR-4 namespace standards. Implement Composer dependency definitions, arrow function collection filters, and PHP 8 match expressions across 50 unit test cases.',
        bn: 'PSR-4 নেমস্পেস স্ট্যান্ডার্ড কঠোরভাবে মেনে একটি ওপেন-সোর্স পিএইচপি ইউটিলিটি প্যাকেজ তৈরি করুন। কম্পোজার ডিপেন্ডেন্সি কনফিগারেশন, অ্যারো ফাংশন কালেকশন ফিল্টার এবং ৫০ টি ইউনিট টেস্টে পিএইচপি ৮ ম্যাচ এক্সপ্রেশন বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Declare strict types (declare(strict_types=1);) as the first statement in every file to eliminate implicit type coercion bugs.',
      bn: 'অনাকাঙ্ক্ষিত টাইপ কনভার্সন এড়াতে প্রতিটি ফাইলের প্রথম লাইনে সর্বদা declare(strict_types=1); ঘোষণা করুন।'
    },
    {
      en: 'Always bind SQL query values using PDO prepared statements (:param) to ensure complete immunity from SQL injection vulnerabilities.',
      bn: 'এসকিউএল ইনজেকশনের ঝুঁকি সম্পূর্ণ দূর করতে PDO প্রিপেয়ার্ড স্টেটমেন্টে সর্বদা প্যারামিটার বাইন্ড (:param) করুন।'
    },
    {
      en: 'Leverage PHP 8 constructor property promotion to declare and initialize class fields concisely in constructor signatures.',
      bn: 'কোড সংক্ষিপ্ত ও পরিচ্ছন্ন রাখতে কনস্ট্রাক্টর সিগনেচারের ভেতরেই পিএইচপি ৮ প্রোপার্টি প্রমোশন ব্যবহার করুন।'
    },
    {
      en: 'Escape all dynamic view outputs using htmlspecialchars($str, ENT_QUOTES, "UTF-8") to defend against Cross-Site Scripting (XSS).',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) রোধ করতে ভিউতে ডাইনামিক ডেটা দেখানোর সময় htmlspecialchars($str, ENT_QUOTES, "UTF-8") ব্যবহার করুন।'
    },
    {
      en: 'Adhere to the PSR-4 autoloading convention by aligning namespace hierarchies directly with filesystem directory paths.',
      bn: 'ডিরেক্টরি পাথের সাথে নেমস্পেস মিলিয়ে রেখে সর্বদা প্রাতিষ্ঠানিক PSR-4 অটোলোডিং নিয়ম মেনে চলুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What architectural improvements did the Zend Engine introduce with the JIT (Just-In-Time) compiler in PHP 8?',
        bn: 'পিএইচপি ৮ এ জেন্ড ইঞ্জিনের JIT (জাস্ট-ইন-টাইম) কম্পাইলার কোন স্থাপত্যিক উন্নতি এনেছে?'
      },
      a: {
        en: 'Traditionally, the Zend Engine compiles PHP scripts into intermediate Opcodes, which the Zend VM interprets instruction-by-instruction. The PHP 8 JIT compiler monitors frequently executed bytecode ("hot paths") and translates those Opcodes directly into raw CPU machine code at runtime. While standard I/O-bound web requests see modest 5% improvements due to network/database waits, CPU-intensive workloads such as mathematical analysis, image manipulation, and machine learning models experience up to a 300% throughput increase.',
        bn: 'ঐতিহ্যগতভাবে জেন্ড ইঞ্জিন পিএইচপি কোডকে অপকোডে রূপান্তর করে এবং ভার্চুয়াল মেশিন তা একে একে ব্যাখ্যা করে। পিএইচপি ৮ এর JIT কম্পাইলার বারবার ব্যবহৃত কোড ব্লকগুলোকে চিহ্নিত করে সরাসরি প্রসেসরের মেশিন কোডে কম্পাইল করে দেয়। সাধারণ ডেটাবেস বা নেটওয়ার্ক নির্ভর ওয়েব রিকোয়েস্টে এর প্রভাব ৫% এর কাছাকাছি হলেও গাণিতিক বিশ্লেষণ, ইমেজ প্রসেসিং এবং কৃত্রিম বুদ্ধিমত্তার মতো প্রসেসর-নির্ভর কাজে এটি ৩০০% পর্যন্ত গতি বৃদ্ধি করে।'
      }
    },
    {
      q: {
        en: 'How does PHP manage memory via reference counting and cyclic garbage collection?',
        bn: 'রেফারেন্স কাউন্টিং এবং সাইক্লিক গার্বেজ কালেকশনের মাধ্যমে পিএইচপি কীভাবে মেমোরি পরিচালনা করে?'
      },
      a: {
        en: 'Every variable in PHP points to an internal zval container holding a reference counter (refcount). When variables are assigned or passed to functions, refcount increments; when unset or falling out of scope, refcount decrements. If refcount hits 0, memory is immediately freed. For circular references (where Object A references Object B and Object B references Object A), a cyclic garbage collector buffers suspected zvals and executes cycle detection runs, releasing leaked memory without manual intervention.',
        bn: 'পিএইচপির প্রতিটি ভেরিয়েবল অভ্যন্তরীণভাবে একটি zval কন্টেইনার নির্দেশ করে যাতে রেফারেন্স কাউন্টার (refcount) থাকে। ভেরিয়েবল অন্য কোথাও অ্যাসাইন হলে refcount বাড়ে, আর স্কোপের বাইরে গেলে refcount কমে। কাউন্ট ০ হলে মেমোরি সাথে সাথে খালি হয়। চক্রাকার রেফারেন্সের ক্ষেত্রে (যেখানে অবজেক্ট A অবজেক্ট B কে এবং B অবজেক্ট A কে নির্দেশ করে) সাইকেল কালেক্টর সন্দেহভাজন অবজেক্টগুলো শনাক্ত করে মেমোরি মুক্ত করে দেয়।'
      }
    },
    {
      q: {
        en: 'What is the functional difference between an Interface and an Abstract Class in modern PHP?',
        bn: 'আধুনিক পিএইচপিতে ইন্টারফেস এবং অ্যাবস্ট্রাক্ট ক্লাসের মধ্যে কার্যকরী পার্থক্য কী?'
      },
      a: {
        en: 'An Interface acts as a pure public contract: it can declare public method signatures and constants, but cannot contain concrete method bodies or non-constant state properties. A single class can implement multiple interfaces. In contrast, an Abstract Class can provide both abstract method contracts and fully implemented concrete methods, complete with private or protected properties. PHP enforces single inheritance, meaning a class can only extend exactly 1 parent abstract class.',
        bn: 'ইন্টারফেস হলো মেথডের একটি বিশুদ্ধ চুক্তি: এতে পাবলিক মেথডের স্বাক্ষর ও কনস্ট্যান্ট থাকতে পারে, কিন্তু কোনো মেথড বডি বা নিজস্ব প্রপার্টি থাকতে পারে না। একটি ক্লাস একসাথে একাধিক ইন্টারফেস বাস্তবায়ন করতে পারে। অপরদিকে অ্যাবস্ট্রাক্ট ক্লাসে মেথডের চুক্তি ঘোষণার পাশাপাশি কোডের বাস্তবায়ন এবং নিজস্ব প্রপার্টি থাকতে পারে। পিএইচপিতে সিঙ্গেল ইনহেরিটেন্সের নিয়ম থাকায় একটি ক্লাস কেবল ১ টি প্যারেন্ট অ্যাবস্ট্রাক্ট ক্লাস থেকেই ইনহেরিট করতে পারে।'
      }
    },
    {
      q: {
        en: 'How do PHP 8 Attributes provide a superior alternative to legacy PHPDoc docblock annotations?',
        bn: 'পুরানো PHPDoc অ্যানোটেশনের তুলনায় পিএইচপি ৮ অ্যাট্রিবিউট কীভাবে একটি শ্রেষ্ঠ বিকল্প হিসেবে কাজ করে?'
      },
      a: {
        en: 'Prior to PHP 8, frameworks relied on docblock comment parsing (@Route("/api"), @ORM\\Column) via Doctrine Annotations, which required slow regex string scraping of comment tokens prone to silent syntax typos. PHP 8 introduced native First-Class Attributes (#[Route("/api")]), which are first-class language syntax parsed directly into the Abstract Syntax Tree (AST). They support typed parameters, compile-time validation, and high-speed introspection via PHP Reflection API without parsing text comments.',
        bn: 'পিএইচপি ৮ এর পূর্বে ফ্রেমওয়ার্কগুলো কমেন্টের ভেতরে ডকব্লক অ্যানোটেশন (@Route, @ORM\\Column) ব্যবহার করতো যা রেজেক্স দিয়ে পার্স করতে হতো এবং এতে টাইপিং ভুলের আশঙ্কা থাকতো। পিএইচপি ৮ এ নেটিভ অ্যাট্রিবিউট (#[Route("/api")]) প্রবর্তিত হয়েছে যা সরাসরি সিনট্যাক্স ট্রির অংশ হিসেবে কম্পাইল হয়। এগুলো টাইপযুক্ত প্যারামিটার সমর্থন করে এবং কমেন্ট পার্স করার ঝামেলা ছাড়াই রিফ্লেকশন এপিআই দিয়ে দ্রুতগতির ইন্ট্রোস্পেকশন সুবিধা দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Concurrency Web Services: Running high-speed RESTful API endpoints utilizing JIT compilation and OPcache shared memory.',
      bn: 'উচ্চ-গতির ওয়েব সার্ভিস: JIT কম্পাইলেশন এবং OPcache শেয়ার্ড মেমোরি দ্বারা চালিত দ্রুতগতির RESTful এপিআই এন্ডপয়েন্ট।'
    },
    {
      en: 'Enterprise Financial Engines: Executing multi-account balance ledgers with ACID-compliant PDO database transactions.',
      bn: 'প্রাতিষ্ঠানিক আর্থিক ইঞ্জিন: নির্ভরযোগ্য লেনদেন নিশ্চিত করতে ACID-সমর্থিত PDO ডেটাবেস ট্রানজ্যাকশন দ্বারা পরিচালিত ব্যালেন্স লেজার।'
    },
    {
      en: 'Open-Source Package Ecosystems: Developing modular Composer packages adhering strictly to PSR-4 autoloading and semver standards.',
      bn: 'ওপেন-সোর্স প্যাকেজ ইকোসিস্টেম: PSR-4 অটোলোডিং ও সেমেটিক ভার্সনিং মেনে চলা আধুনিক কম্পোজার প্যাকেজ লাইব্রেরি।'
    },
    {
      en: 'Content Management Platforms: Powering enterprise WordPress, Drupal, and custom headless CMS engines handling millions of daily visits.',
      bn: 'কনটেন্ট ম্যানেজমেন্ট প্ল্যাটফর্ম: প্রতিদিন লাখ লাখ ভিজিটর পরিচালনা করা আধুনিক ওয়ার্ডপ্রেস, ড্রুপাল ও হেডলেস সিএমএস ব্যাকএন্ড।'
    }
  ]
};
