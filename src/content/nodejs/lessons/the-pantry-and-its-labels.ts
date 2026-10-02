import type { Lesson } from '../../../lib/types';

export const ThePantryAndItsLabelsLesson: Lesson = {
  slug: 'the-pantry-and-its-labels',
  tech: 'nodejs',
  title: {
    en: 'Node.js Modules — CommonJS, ESM, and Package Management',
    bn: 'নোড.জেএস মডিউল: কমনজেএস, ইএসএম এবং প্যাকেজ ব্যবস্থাপনা'
  },
  summary: {
    en: 'Organizing code into modular components is fundamental to building scalable backend applications. Node.js supports two distinct module formats: legacy CommonJS (using require() and module.exports) and modern ECMAScript Modules (using import and export). While CommonJS executes synchronously with dynamic runtime loading, ESM is statically parsed before execution, enabling dead code elimination and native top-level await. The "type" field in package.json dictates whether .js files evaluate as CommonJS or ESM, with .cjs and .mjs extensions offering explicit file-level overrides. Modern Node.js encapsulates internal package files using the "exports" map, while resolving bare module names through an upward directory walk across node_modules.',
    bn: 'বৃহৎ ব্যাকএন্ড অ্যাপ্লিকেশন তৈরির জন্য কোডকে সুশৃঙ্খল মডিউলে বিভক্ত করা অপরিহার্য। নোড.জেএস দুটি প্রধান মডিউল সিস্টেম সমর্থন করে: ঐতিহ্যবাহী কমনজেএস (require() এবং module.exports) এবং আধুনিক ইসিএমএস্ক্রিপ্ট মডিউল বা ইএসএম (import এবং export)। কমনজেএস রানটাইমে সিঙ্ক্রোনাসভাবে কোড চালায়, অন্যদিকে ইএসএম কোড চলার পূর্বেই স্ট্যাটিকভাবে পার্স হয়, যা অপ্রয়োজনীয় কোড বর্জন (ট্রি-শেকিং) এবং শীর্ষ-স্তরের await সুবিধা দেয়। package.json ফাইলের "type" ফিল্ড নির্ধারণ করে .js ফাইলগুলো কোন মডিউল হিসেবে কাজ করবে, আর .cjs ও .mjs এক্সটেনশন দিয়ে প্রতিটি ফাইলের আচরণ নির্দিষ্ট করা যায়। আধুনিক নোড.জেএস "exports" ম্যাপের সাহায্যে প্যাকেজের অভ্যন্তরীণ ফাইল সুরক্ষিত রাখে এবং node_modules ফোল্ডারে ক্রমান্বয়ে অনুসন্ধান চালিয়ে মডিউল খুঁজে বের করে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-dining-rush',
    tech: 'nodejs',
    title: {
      en: 'Event Loop Deep Dive — Timers, Poll, and Microtasks',
      bn: 'ইভেন্ট লুপের গভীরে: টাইমার, পোল এবং মাইক্রোটাস্ক'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'two-module-systems',
      text: {
        en: 'The Two Worlds: CommonJS vs ECMAScript Modules (ESM)',
        bn: 'দুই মডিউল বিশ্ব: কমনজেএস (CJS) বনাম ইএসএম (ESM)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build software with Node.js, you break large files into cohesive modules that import and export functions. In 2009, JavaScript lacked a built-in module system, so Node.js created CommonJS (CJS) using require() and module.exports.',
        bn: 'যখন আপনি নোড.জেএস দিয়ে সফটওয়্যার তৈরি করেন, তখন বড় ফাইলগুলোকে ছোট ও পুনর্ব্যবহারযোগ্য মডিউলে ভাগ করা হয়। ২০০৯ সালে জাভাস্ক্রিপ্টে কোনো নিজস্ব মডিউল ব্যবস্থা ছিল না, তাই নোড.জেএস require() এবং module.exports এর সাহায্যে কমনজেএস (CJS) তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 2015, the official ECMAScript Modules (ESM) standard introduced import and export statements. CommonJS loads modules synchronously at runtime, which allows dynamic loading inside functions. In contrast, ESM is statically analyzed before execution, enabling bundlers to eliminate unused code and allowing top-level await.',
        bn: '২০১৫ সালে অফিসিয়াল ইসিএমএস্ক্রিপ্ট মডিউল (ইএসএম) স্ট্যান্ডার্ড আমদানি ও রপ্তানির জন্য import এবং export সিনট্যাক্স চালু করে। কমনজেএস রানটাইমে সিঙ্ক্রোনাসভাবে মডিউল লোড করে, যার ফলে ফাংশনের ভেতরেও শর্তসাপেক্ষে require() চালানো যায়। অন্যদিকে ইএসএম কোড এক্সিকিউশনের আগেই স্ট্যাটিকভাবে বিশ্লেষণ করা হয়, যা অপ্রয়োজনীয় কোড ছাঁটাই ও শীর্ষ-স্তরের await সমর্থন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'commonjs-modules',
          def: {
            en: 'The original synchronous module format in Node.js using require() to load modules and module.exports to share code.',
            bn: 'নোড.জেএসের আদি সিঙ্ক্রোনাস মডিউল ফরম্যাট যা require() দিয়ে মডিউল লোড করে এবং module.exports দিয়ে কোড শেয়ার করে।'
          }
        },
        {
          term: 'ecmascript-modules',
          def: {
            en: 'The official JavaScript standard module format using static import and export declarations.',
            bn: 'আধুনিক জাভাস্ক্রিপ্টের আদর্শ মডিউল ফরম্যাট যা স্ট্যাটিক import এবং export ডিক্লারেশন ব্যবহার করে।'
          }
        },
        {
          term: 'module-wrapper',
          def: {
            en: 'The internal IIFE function Node.js uses in CommonJS to inject exports, require, module, __filename, and __dirname.',
            bn: 'একটি অভ্যন্তরীণ IIFE ফাংশন যার মাধ্যমে নোড.জেএস কমনজেএসে exports, require, __filename ও __dirname ইনজেক্ট করে।'
          }
        },
        {
          term: 'package-exports-map',
          def: {
            en: 'A field in package.json that defines the public entry points of a library and restricts deep imports into internal files.',
            bn: 'package.json ফাইলের এমন একটি ফিল্ড যা প্যাকেজের পাবলিক এন্ট্রি পয়েন্ট নির্দিষ্ট করে এবং অভ্যন্তরীণ ফাইল সরাসরি অ্যাক্সেস করা রোধ করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'cjs-vs-esm-comparison-table',
      text: {
        en: 'Detailed Comparison: CommonJS vs ECMAScript Modules',
        bn: 'বিস্তারিত তুলনা: কমনজেএস বনাম ইসিএমএস্ক্রিপ্ট মডিউল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding the technical differences between CommonJS and ESM helps developers avoid runtime module resolution errors.',
        bn: 'কমনজেএস এবং ইএসএম এর মধ্যকার প্রযুক্তিগত পার্থক্যগুলো জানলে ডেভেলপাররা রানটাইমে মডিউল সম্পর্কিত ত্রুটি এড়াতে পারেন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature / Dimension', bn: 'বৈশিষ্ট্য / মাত্রা' },
        { en: 'CommonJS (CJS)', bn: 'কমনজেএস (CJS)' },
        { en: 'ECMAScript Modules (ESM)', bn: 'ইসিএমএস্ক্রিপ্ট মডিউল (ESM)' }
      ],
      rows: [
        [
          { en: 'Syntax Style', bn: 'সিনট্যাক্স স্টাইল' },
          { en: 'const math = require("./math")', bn: 'const math = require("./math")' },
          { en: 'import { add } from "./math.js"', bn: 'import { add } from "./math.js"' }
        ],
        [
          { en: 'Execution Timing', bn: 'এক্সিকিউশন সময়' },
          { en: 'Synchronous runtime execution and caching', bn: 'রানটাইমে সিঙ্ক্রোনাস লোডিং এবং ক্যাশিং' },
          { en: 'Static compile-time parsing with top-level await', bn: 'কম্পাইল-টাইম স্ট্যাটিক পার্সিং ও শীর্ষ await' }
        ],
        [
          { en: 'File Extension Requirement', bn: 'ফাইল এক্সটেনশনের বাধ্যবাধকতা' },
          { en: 'Optional: automatically tries .js, .json, and .node', bn: 'ঐচ্ছিক: স্বয়ংক্রিয়ভাবে .js, .json খোঁজে' },
          { en: 'Mandatory: relative imports must include .js explicitly', bn: 'বাধ্যতামূলক: আপেক্ষিক পাথে .js এক্সটেনশন আবশ্যক' }
        ],
        [
          { en: 'Directory Variables', bn: 'ডিরেক্টরি ভ্যারিয়েবল' },
          { en: '__dirname and __filename are injected natively', bn: '__dirname এবং __filename সরাসরি উপলব্ধ' },
          { en: 'Absent: derived via import.meta.url and fileURLToPath', bn: 'নেই: import.meta.url ও fileURLToPath দিয়ে বের করতে হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-module-cache-code',
      text: {
        en: 'Executable Module Cache and Lifecycle Implementation',
        bn: 'মডিউল ক্যাশিং এবং লাইফসাইকেলের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Node.js caches loaded modules. The first time a module is requested, Node.js compiles and executes it, storing the result in require.cache. Subsequent requires return the cached singleton instance immediately.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি প্রদর্শন করে কীভাবে নোড.জেএস মডিউল ক্যাশ করে। প্রথমবার কোনো মডিউল চাওয়া হলে নোড.জেএস তা চালিয়ে require.cache এ জমা রাখে। পরবর্তীতে সেই একই মডিউল চাইলে ক্যাশ থেকে সাথে সাথে সিঙ্গেলটন ইনস্ট্যান্স রিটার্ন করে।'
      }
    },
    {
      type: 'code',
      code: `class ModuleRegistry {
  constructor() {
    this.cache = new Map();
  }

  load(id, factory) {
    if (this.cache.has(id)) {
      return this.cache.get(id).exports;
    }
    const module = { exports: {} };
    this.cache.set(id, module);
    factory(module.exports, module);
    return module.exports;
  }
}

const registry = new ModuleRegistry();

// Define math module
registry.load('math', (exports, module) => {
  module.exports = {
    add: (a, b) => a + b
  };
});

const math1 = registry.load('math');
const math2 = registry.load('math');

console.log('Cached singleton instance:', math1 === math2);
// Output: Cached singleton instance: true
console.log('Calculation result 5 + 7:', math1.add(5, 7));
// Output: Calculation result 5 + 7: 12`
    },
    {
      type: 'heading',
      id: 'package-json-and-resolution',
      text: {
        en: 'Package.json Configuration and Module Resolution Rules',
        bn: 'Package.json কনফিগারেশন এবং মডিউল অনুসন্ধানের নিয়মাবলি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern Node.js, adding "type": "module" inside package.json instructs the runtime to treat all .js files as ESM. When importing built-in modules, prefixing the specifier with "node:" (such as node:fs or node:path) bypasses directory searches completely and prevents npm packages from maliciously shadowing core APIs.',
        bn: 'আধুনিক নোড.জেএসে package.json ফাইলে "type": "module" যুক্ত করলে সমস্ত .js ফাইলকে ইএসএম হিসেবে গণ্য করা হয়। বিল্ট-ইন মডিউল ব্যবহারের সময় নামের আগে "node:" (যেমন node:fs বা node:path) যুক্ত করলে ডিরেক্টরি খোঁজা পুরোপুরি বন্ধ হয় এবং ক্ষতিকর থার্ড-পার্টি প্যাকেজ মূল নোড এপিআইকে ঢেকে ফেলতে পারে না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Dual module standards: Node.js supports CommonJS (require) for legacy ecosystems and ESM (import) for modern codebases.',
          bn: 'দুটি মডিউল স্ট্যান্ডার্ড: নোড.জেএস পুরনো কোডের জন্য কমনজেএস (require) এবং আধুনিক কোডের জন্য ইএসএম (import) সমর্থন করে।'
        },
        {
          en: 'File extension control: .mjs forces ESM parsing, .cjs forces CommonJS parsing, and .js obeys package.json "type".',
          bn: 'এক্সটেনশনের ভূমিকা: .mjs ফাইল সর্বদা ইএসএম, .cjs ফাইল সর্বদা কমনজেএস, এবং .js ফাইল package.json এর "type" মেনে চলে।'
        },
        {
          en: 'Module caching efficiency: Once loaded, modules are cached as singletons in memory, avoiding redundant file executions.',
          bn: 'মডিউল ক্যাশিং সুবিধা: একবার লোড হওয়ার পর মডিউলগুলো মেমরিতে সংরক্ষিত থাকে, ফলে বারবার ফাইল পড়তে হয় না।'
        },
        {
          en: 'Core module security: Always use the node: prefix (e.g. node:path) to guarantee loading official core APIs securely.',
          bn: 'মূল মডিউলের সুরক্ষা: অফিসিয়াল বিল্ট-ইন এপিআই নিরাপদে ব্যবহারের জন্য সর্বদা node: প্রিফিক্স ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pl-ex1',
      kind: 'mcq',
      topic: 'package-json-type-module',
      question: {
        en: 'What occurs when you add "type": "module" to your package.json file?',
        bn: 'আপনার package.json ফাইলে "type": "module" যোগ করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Node.js treats all .js files within that package directory scope as ECMAScript Modules (ESM)',
          bn: 'নোড.জেএস সেই প্যাকেজের আওতাধীন সমস্ত .js ফাইলকে ইসিএমএস্ক্রিপ্ট মডিউল (ইএসএম) হিসেবে গণ্য করে'
        },
        {
          en: 'All JavaScript files are converted into Python scripts',
          bn: 'সমস্ত জাভাস্ক্রিপ্ট ফাইল পাইথন স্ক্রিপ্টে রূপান্তর করা হয়'
        },
        {
          en: 'The computer installs an external graphics card driver',
          bn: 'কম্পিউটার একটি এক্সটার্নাল গ্রাফিক্স কার্ডের ড্রাইভার ইনস্টল করে'
        },
        {
          en: 'It deletes the node_modules folder permanently',
          bn: 'এটি node_modules ফোল্ডারটি স্থায়ীভাবে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'By default without this field, Node.js treats .js files as CommonJS. What does setting type: module do?',
        bn: 'এই ফিল্ডটি ছাড়া ডিফল্টভাবে .js ফাইলগুলো কমনজেএস থাকে। type: module দিলে কী হয়?'
      },
      explanation: {
        en: '"type": "module" enables ESM syntax (import/export) for all .js files in the package directory hierarchy.',
        bn: '"type": "module" দিলে প্যাকেজের সমস্ত .js ফাইলে ইএসএম সিনট্যাক্স (import/export) সক্রিয় হয়।'
      }
    },
    {
      id: 'pl-ex2',
      kind: 'mcq',
      topic: 'dirname-in-esm',
      question: {
        en: 'How do you obtain the current directory path in an ECMAScript Module (ESM) where __dirname is undefined?',
        bn: 'যে ইসিএমএস্ক্রিপ্ট মডিউলে (ESM) __dirname কাজ করে না, সেখানে বর্তমান ডিরেক্টরির পাথ কীভাবে বের করা হয়?'
      },
      options: [
        {
          en: 'Using fileURLToPath(import.meta.url) combined with path.dirname() from the node:path module',
          bn: 'node:path থেকে path.dirname() এবং fileURLToPath(import.meta.url) এর সমন্বয়ে'
        },
        {
          en: 'By typing process.exit(0)',
          bn: 'process.exit(0) টাইপ করার মাধ্যমে'
        },
        {
          en: 'By reading the client’s web browser cookies',
          bn: 'ক্লায়েন্টের ওয়েব ব্রাউজারের কুকিজ পড়ার মাধ্যমে'
        },
        {
          en: 'It is impossible to know the directory path in ESM',
          bn: 'ইএসএমে ডিরেক্টরির পাথ বের করা কোনোভাবেই সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'import.meta.url provides the file:// URL of the current module. How do you convert that URL to a file path?',
        bn: 'import.meta.url বর্তমান ফাইলের URL দেয়। সেই URL কে পাথে রূপান্তর করতে কোন ফাংশন দরকার?'
      },
      explanation: {
        en: 'In ESM, import.meta.url provides the module URL, and fileURLToPath with path.dirname recreates the __dirname functionality.',
        bn: 'ইএসএমে import.meta.url এবং fileURLToPath ও path.dirname ব্যবহারের মাধ্যমে __dirname তৈরি করে নেওয়া হয়।'
      }
    },
    {
      id: 'pl-ex3',
      kind: 'mcq',
      topic: 'node-protocol-prefix-benefit',
      question: {
        en: 'What is the primary architectural security benefit of using the "node:" prefix when importing built-in modules (e.g. node:fs)?',
        bn: 'বিল্ট-ইন মডিউল ব্যবহারের সময় "node:" প্রিফিক্স (যেমন node:fs) ব্যবহারের মূল নিরাপত্তা সুবিধা কী?'
      },
      options: [
        {
          en: 'It explicitly declares that the module is a Node.js core module, preventing malicious third-party npm packages from shadowing core APIs',
          bn: 'এটি স্পষ্টভাবে ঘোষণা করে যে এটি নোড.জেএসের নিজস্ব কোর মডিউল, ফলে ক্ষতিকর কোনো থার্ড-পার্টি প্যাকেজ কোর এপিআইকে ঢেকে ফেলতে পারে না'
        },
        {
          en: 'It speeds up network download speeds by 50 percent',
          bn: 'এটি নেটওয়ার্কের ডাউনলোডের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It allows JavaScript to run without installing Node.js',
          bn: 'এটি নোড.জেএস ইনস্টল না করেই জাভাস্ক্রিপ্ট চালানোর সুবিধা দেয়'
        },
        {
          en: 'It converts the source code into binary assembly code',
          bn: 'এটি সোর্স কোডকে বাইনারি অ্যাসেম্বলি কোডে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a malicious package named "fs" exists in node_modules, bare require("fs") could be hijacked in legacy systems.',
        bn: 'যদি node_modules এ "fs" নামের কোনো ক্ষতিকর প্যাকেজ থাকে, তবে সরাসরি require("fs") করলে তা বিপদ ডেকে আনতে পারে।'
      },
      explanation: {
        en: 'The node: protocol immediately identifies core modules, avoiding node_modules directory walks and preventing package shadowing.',
        bn: 'node: প্রোটোকল সরাসরি কোর মডিউল লোড করে, যা ডিরেক্টরি খোঁজা এড়িয়ে প্যাকেজ হাইজ্যাকিং প্রতিরোধ করে।'
      }
    }
  ],
  quiz: {
    id: 'the-pantry-and-its-labels-quiz',
    title: {
      en: 'Node.js Modules and Resolution Quiz',
      bn: 'নোড.জেএস মডিউল এবং রেজোলিউশন কুইজ'
    },
    questions: [
      {
        id: 'pl-q1',
        kind: 'mcq',
        topic: 'mjs-and-cjs-file-extensions',
        question: {
          en: 'How do the .mjs and .cjs file extensions interact with the "type" field inside package.json?',
          bn: '.mjs এবং .cjs ফাইল এক্সটেনশনগুলো package.json ফাইলের "type" ফিল্ডের সাথে কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'They override package.json: .mjs is always treated as ESM and .cjs is always treated as CommonJS, regardless of package.json',
            bn: 'তারা package.json কে ওভাররাইড করে: package.json এ যাই থাকুক না কেন, .mjs সর্বদা ইএসএম এবং .cjs সর্বদা কমনজেএস হিসেবে কাজ করে'
          },
          {
            en: 'They are completely ignored by the Node.js runtime',
            bn: 'নোড.জেএস রানটাইম এদেরকে পুরোপুরি উপেক্ষা করে'
          },
          {
            en: 'They can only be used on Apple macOS operating systems',
            bn: 'তারা কেবল অ্যাপল ম্যাকওএস অপারেটিং সিস্টেমে ব্যবহার করা যায়'
          },
          {
            en: 'They automatically compress source code into zip archives',
            bn: 'তারা স্বয়ংক্রিয়ভাবে সোর্স কোডকে জিপ ফাইলে কম্প্রেস করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Explicit file extensions provide per-file overrides that supersede directory-level package.json settings.',
          bn: 'সুনির্দিষ্ট ফাইল এক্সটেনশন ডিরেক্টরি স্তরের সেটিংসকে ছাপিয়ে প্রতি ফাইলের নিজস্ব আচরণ ঠিক করে দেয়।'
        },
        explanation: {
          en: '.mjs explicitly forces ESM and .cjs explicitly forces CommonJS, providing deterministic cross-format compatibility.',
          bn: '.mjs স্পষ্টভাবে ইএসএম এবং .cjs স্পষ্টভাবে কমনজেএস নির্ধারণ করে, যা নির্ভরযোগ্য সামঞ্জস্য নিশ্চিত করে।'
        }
      },
      {
        id: 'pl-q2',
        kind: 'mcq',
        topic: 'module-caching-behavior',
        question: {
          en: 'What happens when a Node.js module is imported or required multiple times across different files in an application?',
          bn: 'একটি অ্যাপ্লিকেশনের বিভিন্ন ফাইলে একই নোড.জেএস মডিউল বারবার require বা import করলে কী ঘটে?'
        },
        options: [
          {
            en: 'The module code executes only once upon the first load, and all subsequent imports receive the cached exported object reference',
            bn: 'মডিউলটি কেবল প্রথমবার লোড হওয়ার সময় একবার কার্যকর হয় এবং পরবর্তী সমস্ত আমদানিতে সেই ক্যাশ অবজেক্টের রেফারেন্স ফেরত দেওয়া হয়'
          },
          {
            en: 'The file is re-read and executed from scratch on every single import',
            bn: 'প্রতিটি আমদানিতে ফাইলটি শুরু থেকে পুনরায় পড়ে চালানো হয়'
          },
          {
            en: 'The server crashes with a DuplicateModuleError exception',
            bn: 'সার্ভারটি DuplicateModuleError এরর দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'Node.js creates a new copy of the file on disk each time',
            bn: 'প্রতিবার নোড.জেএস ডিস্কে ফাইলটির একটি নতুন অনুলিপি তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modules behave as singletons in Node.js because the runtime maintains an internal cache of loaded modules.',
          bn: 'নোড.জেএসে মডিউলগুলো সিঙ্গেলটন হিসেবে কাজ করে কারণ রানটাইম লোড করা মডিউলের অভ্যন্তরীণ ক্যাশ বজায় রাখে।'
        },
        explanation: {
          en: 'Node.js caches loaded modules in memory by their resolved filename, ensuring stateful singletons and avoiding duplicate execution.',
          bn: 'নোড.জেএস মেমরিতে লোড করা মডিউল ক্যাশ করে রাখে, যা অপ্রয়োজনীয় পুনরায় চালনা বন্ধ করে কার্যক্ষমতা বৃদ্ধি করে।'
        }
      },
      {
        id: 'pl-q3',
        kind: 'mcq',
        topic: 'exports-field-encapsulation',
        question: {
          en: 'What architectural protection does the "exports" map in package.json provide for library authors?',
          bn: 'লাইব্রেরি নির্মাতাদের জন্য package.json ফাইলের "exports" ম্যাপ কোন স্থাপত্যিক সুরক্ষা প্রদান করে?'
        },
        options: [
          {
            en: 'It encapsulates the package by exposing only declared public entry points, preventing consumers from importing private internal files',
            bn: 'এটি প্যাকেজের কেবল অনুমোদিত পাবলিক পথগুলোকে প্রকাশ করে এবং অভ্যন্তরীণ ফাইলগুলো সরাসরি আমদানি করা থেকে বিরত রাখে'
          },
          {
            en: 'It encrypts the entire JavaScript source code with AES-256',
            bn: 'এটি সমস্ত জাভাস্ক্রিপ্ট সোর্স কোডকে AES-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It limits the library to 10 lines of code',
            bn: 'এটি লাইব্রেরির কোডকে সর্বোচ্চ ১০ লাইনে সীমাবদ্ধ করে'
          },
          {
            en: 'It publishes the package to npm automatically on every save',
            bn: 'প্রতিটি সেভে এটি প্যাকেজটি স্বয়ংক্রিয়ভাবে npm এ পাবলিশ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without an exports map, users could do require("mypkg/dist/internal/secret.js"), coupling their code to your internal refactoring.',
          bn: 'exports ম্যাপ না থাকলে যে কেউ আপনার লাইব্রেরির ভেতরের গোপন ফাইল সরাসরি অ্যাক্সেস করতে পারত।'
        },
        explanation: {
          en: 'The "exports" field establishes a clean public API boundary, preventing external projects from depending on internal file layouts.',
          bn: '"exports" ফিল্ড একটি পরিষ্কার পাবলিক এপিআই তৈরি করে, যা বাইরের প্রজেক্টকে অভ্যন্তরীণ কাঠামোর ওপর নির্ভর করা থেকে রক্ষা করে।'
        }
      },
      {
        id: 'pl-q4',
        kind: 'mcq',
        topic: 'top-level-await-support',
        question: {
          en: 'Which module system natively supports "top-level await" without requiring wrapping code inside an async IIFE function?',
          bn: 'কোন মডিউল সিস্টেম কোনো অ্যাসিঙ্ক IIFE ফাংশন ছাড়াই সরাসরি কোডের মূল স্তরে "শীর্ষ-স্তরের await" সমর্থন করে?'
        },
        options: [
          {
            en: 'ECMAScript Modules (ESM)',
            bn: 'ইসিএমএস্ক্রিপ্ট মডিউল (ESM)'
          },
          {
            en: 'CommonJS (CJS)',
            bn: 'কমনজেএস (CJS)'
          },
          {
            en: 'Plain text files with .txt extension',
            bn: '.txt এক্সটেনশন বিশিষ্ট সাধারণ টেক্সট ফাইল'
          },
          {
            en: 'Neither module system supports await anywhere',
            bn: 'কোনো মডিউল সিস্টেমেই await সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Because ESM is asynchronous by design, it can pause module evaluation until an awaited Promise resolves.',
          bn: 'ইএসএম অভ্যন্তরীণভাবে অ্যাসিঙ্ক্রোনাস হওয়ায় এটি কোনো প্রমিজ সমাধান না হওয়া পর্যন্ত মডিউল মূল্যায়ন স্থগিত রাখতে পারে।'
        },
        explanation: {
          en: 'ESM natively permits top-level await at the root scope of modules, making asynchronous initialization clean and concise.',
          bn: 'ইএসএম সরাসরি ফাইলের রুট স্তরে টপ-লেভেল await সমর্থন করে, যা অ্যাসিঙ্ক্রোনাস ডাটা লোডিং সহজ করে তোলে।'
        }
      }
    ]
  }
};
