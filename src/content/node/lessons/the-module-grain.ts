import type { Lesson } from '../../../lib/types';

export const moduleGrainLesson: Lesson = {
  slug: 'the-module-grain',
  tech: 'node',
  title: {
    en: 'Node.js Module Systems: CommonJS, ESM, Resolution & Interoperability',
    bn: 'Node.js মডিউল সিস্টেম: CommonJS, ESM, রেজোলিউশন ও ইন্টারঅপারেবিলিটি'
  },
  summary: {
    en: 'Master modern Node.js module architecture across 10 structured topics, from CommonJS to ECMAScript Modules (ESM). Learn require.cache singletons, top-level await, CJS/ESM interoperability, and dual-package exports maps.',
    bn: 'CommonJS থেকে শুরু করে ECMAScript Modules (ESM) পর্যন্ত 10 টি বিষয়ে Node.js মডিউল আর্কিটেকচার আয়ত্ত করুন। জানুন require.cache সিঙ্গলটন, টপ-লেভেল await, CJS/ESM সংহতি এবং ডুয়াল প্যাকেজ এক্সপোর্ট ম্যাপ।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-file-economy',
    title: {
      en: 'Node.js File System (fs), Buffers, Streams & Binary Data Pipelines',
      bn: 'Node.js ফাইল সিস্টেম (fs), বাফার্স, স্ট্রিমস ও বাইনারি ডেটা পাইপলাইন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. CommonJS (CJS) Fundamentals: require() and module.exports', bn: '১. CommonJS (CJS) মৌলিক ভিত্তি: require() ও module.exports' } },
    {
      type: 'para',
      text: {
        en: 'CommonJS was the original module system built into Node.js from its inception in 2009. In CommonJS, each JavaScript file is treated as a separate module. Modules export values by attaching properties to `module.exports` or assigning a single value/object to `module.exports` directly. Consuming files load modules synchronously using the `require()` function.',
        bn: '2009 সালে Node.js শুরু থেকেই এর ডিফল্ট মডিউল সিস্টেম ছিল CommonJS। এতে প্রতিটি জাভাস্ক্রিপ্ট ফাইল একটি আলাদা মডিউল হিসেবে কাজ করে। কোনো ফাইল থেকে ডেটা পাঠাতে `module.exports` এ প্রপার্টি যোগ করা হয় বা সরাসরি অবজেক্ট অ্যাসাইন করা হয়। অন্য ফাইলে এই ডেটা পেতে সিঙ্ক্রোনাস `require()` ফাংশন ব্যবহার করা হয়।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// math.cjs - Exporting functions via CommonJS:
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };

// app.cjs - Consuming with require():
// const { add, multiply } = require("./math.cjs");
console.log("Sum:", add(10, 5));        // Sum: 15
console.log("Product:", multiply(4, 5)); // Product: 20`,
      caption: {
        en: 'CommonJS uses module.exports to share code and synchronous require() to consume dependencies.',
        bn: 'CommonJS কোড শেয়ার করতে module.exports এবং আনতে সিঙ্ক্রোনাস require() ব্যবহার করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Hidden Module Wrapper Function', bn: '২. অদৃশ্য মডিউল র‍্যাপার ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'Before executing any CommonJS file, Node.js wraps its code inside an invisible function wrapper: (function(exports, require, module, __filename, __dirname) { ... }). This is why top-level variables remain scoped to their file instead of polluting the global namespace, and why __filename and __dirname are available without import.',
        bn: 'যেকোনো CommonJS ফাইল চালানোর আগে Node.js কোডটিকে একটি গোপন ফাংশনে মুড়ে দেয়: (function(exports, require, module, __filename, __dirname) { ... })। এই কারণেই ফাইলে ঘোষিত ভ্যারিয়েবল গ্লোবাল না হয়ে ফাইলে সীমাবদ্ধ থাকে এবং __filename ও __dirname সরাসরি ব্যবহার করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Node.js module wrapper signature:
import Module from "module";
console.log(Module.wrapper[0]); // "(function (exports, require, module, __filename, __dirname) { "
console.log(Module.wrapper[1]); // "\n});"

// Notice exports is simply a reference alias to module.exports:
// exports = { bad: true }; // ❌ Breaks link to module.exports!
// exports.good = true;     // ✅ Safe property attachment`,
      caption: {
        en: 'Node.js wraps CommonJS files inside a hidden function providing module-level isolation.',
        bn: 'Node.js গোপন ফাংশন র‍্যাপার দিয়ে ফাইলটিকে আইসোলেশন ও লোকাল ভ্যারিয়েবল প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Module Caching and Singleton Mechanics: require.cache', bn: '৩. মডিউল ক্যাশিং ও সিঙ্গলটন আচরণ: require.cache' } },
    {
      type: 'para',
      text: {
        en: 'Modules are evaluated and executed only once when first required. Node.js caches the returned module.exports object in the require.cache ledger keyed by the file absolute path. Subsequent require() calls for the same file return the cached instance instantaneously, enabling natural singleton patterns (such as shared database pools).',
        bn: 'যেকোনো মডিউল প্রথমবার require করার সময় মাত্র একবার এক্সিকিউট হয়। Node.js এর ফলাফল require.cache-এ ফাইলের এবসোলিউট পাথ কি (key) হিসেবে জমা রাখে। পরবর্তীতে যতবারই require করা হোক, ক্যাশ থেকেই একই অবজেক্ট ফিরে আসে। ফলে ডাটাবেস সংযোগ বা শেয়ার্ড মেমোরির মতো সিঙ্গলটন প্যাটার্ন সহজেই কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// db-pool.cjs:
class DatabasePool {
  constructor() {
    this.connectionId = Math.random();
  }
}
module.exports = new DatabasePool();

// app.cjs:
// const db1 = require("./db-pool.cjs");
// const db2 = require("./db-pool.cjs");
// console.log(db1 === db2); // true (Identical singleton instance!)
// console.log(Object.keys(require.cache).length > 0); // true`,
      caption: {
        en: 'require.cache ensures modules execute once and subsequent imports share the same instance.',
        bn: 'require.cache নিশ্চিত করে মডিউল একবারই চলে এবং পরবর্তী ইমপোর্টে একই অবজেক্ট শেয়ার হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. ECMAScript Modules (ESM): Standard Static Imports', bn: '৪. ECMAScript Modules (ESM): স্ট্যান্ডার্ড স্ট্যাটিক ইমপোর্ট' } },
    {
      type: 'para',
      text: {
        en: 'ECMAScript Modules (ESM) are the official JavaScript language standard for modular code. Unlike CommonJS, ESM imports and exports are static: they are analyzed and resolved before code execution begins. To enable ESM in Node.js, set "type": "module" in your package.json or name files with the .mjs extension.',
        bn: 'ECMAScript Modules (ESM) হলো জাভাস্ক্রিপ্টের অফিশিয়াল স্ট্যান্ডার্ড মডিউল পদ্ধতি। CommonJS-এর মতো রানটাইমে না হয়ে, ESM কোড রান হওয়ার আগেই স্ট্যাটিকভাবে পার্স ও রিজলভ হয়। Node.js-এ ESM চালু করতে package.json-এ "type": "module" দিতে হয় অথবা ফাইলের এক্সটেনশন .mjs রাখতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// utils.mjs - Named and default exports:
export const API_URL = "https://api.codeshikhon.com";

export function formatGreeting(name) {
  return \`Welcome, \${name}!\`;
}

export default function startEngine() {
  return "Engine running";
}

// consumer.mjs - Consuming via ESM import:
// import startEngine, { API_URL, formatGreeting } from "./utils.mjs";
console.log(API_URL); // "https://api.codeshikhon.com"
console.log(formatGreeting("Rahim")); // "Welcome, Rahim!"
console.log(startEngine()); // "Engine running"`,
      caption: {
        en: 'ESM provides clean named and default export syntax with static compile-time validation.',
        bn: 'ESM কম্পাইল টাইমে স্ট্যাটিক যাচাইসহ নেমড ও ডিফল্ট এক্সপোর্ট সিনট্যাক্স প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Top-Level Await: Boundary Synchronization in ESM', bn: '৫. টপ-লেভেল Await: ESM-এ মডিউল সীমানায় অ্যাসিঙ্ক ইনিশিয়ালাইজেশন' } },
    {
      type: 'para',
      text: {
        en: 'In ESM, await can be used directly at the top level of a module without wrapping it in an async function or IIFE. The importing module automatically pauses until the asynchronous top-level await in the dependency finishes. This simplifies database connection handshakes, remote secrets loading, and dynamic configuration.',
        bn: 'ESM মডিউলে কোনো async ফাংশন বা IIFE ছাড়াই সরাসরি ফাইলে await ব্যবহার করা যায়। ডিপেনডেন্সি ফাইলে টপ-লেভেল await শেষ না হওয়া পর্যন্ত প্রধান মডিউল অপেক্ষা করে। এর ফলে ডাটাবেস সংযোগ বা রিমোট কনফিগারেশন লোড করার মতো প্রাথমিক কাজগুলো অনেক পরিচ্ছন্নভাবে লেখা সম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// config.js (inside package with "type": "module"):
async function fetchServerPort() {
  return Promise.resolve(5199);
}

// Top-level await executed at module load boundary:
export const SERVER_PORT = await fetchServerPort();

console.log("Config initialized on port:", SERVER_PORT);
// Output: Config initialized on port: 5199`,
      caption: {
        en: 'Top-level await resolves asynchronous dependencies before dependent modules execute.',
        bn: 'টপ-লেভেল await প্রধান মডিউল চলার আগেই অ্যাসিনক্রোনাস কাজ সম্পন্ন হওয়া নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Module Interoperability: ESM and CommonJS Bridges', bn: '৬. মডিউল ইন্টারঅপারেবিলিটি: ESM ও CommonJS সংযোগ' } },
    {
      type: 'para',
      text: {
        en: 'Because CommonJS is synchronous while ESM is asynchronous, interoperability rules are strict: 1) An ESM module CAN import CommonJS modules via default import; 2) CommonJS CANNOT use synchronous require() to load ESM modules (throws ERR_REQUIRE_ESM). 3) CommonJS can load ESM asynchronously using dynamic import().',
        bn: 'CommonJS সিঙ্ক্রোনাস এবং ESM অ্যাসিনক্রোনাস হওয়ায় এদের সংযোগের সুনির্দিষ্ট নিয়ম আছে: ১) ESM মডিউল সহজে CommonJS ফাইলকে ডিফল্ট import দিয়ে আনতে পারে; ২) CommonJS ফাইলে সিঙ্ক require() দিয়ে ESM আনা যায় না (ERR_REQUIRE_ESM এরর দেয়). ৩) CommonJS ফাইলে ESM আনতে ডায়নামিক import() ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// In CommonJS file needing an ESM module:
async function loadESMPackage() {
  // Using dynamic import() expression in CommonJS:
  const { default: chalk } = await import("chalk");
  console.log("ESM chalk loaded dynamically inside CommonJS!");
}

// In ESM file loading CommonJS:
// import cjsModule from "./legacy.cjs";
// console.log("CJS loaded into ESM via default export synthesis");`,
      caption: {
        en: 'CommonJS uses dynamic import() to load modern ESM packages asynchronously.',
        bn: 'CommonJS ফাইল আধুনিক ESM প্যাকেজ লোড করতে অ্যাসিনক্রোনাস ডায়নামিক import() ব্যবহার করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Circular Dependency Hazards and Resolution', bn: '৭. সার্কুলার ডিপেনডেন্সি সমস্যা ও সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'A circular dependency occurs when Unit A requires Unit B, and Unit B mutually imports Unit A. Under CommonJS, this recursive cycle returns an incomplete, partially-evaluated export object, frequently causing undefined property errors at runtime. In ESM, live bindings maintain links, but uninitialized references trigger a ReferenceError during execution.',
        bn: 'যখন ইউনিট A ইউনিট B-কে চায় এবং ইউনিট B আবার ইউনিট A-কে চায়, তখন সার্কুলার ডিপেনডেন্সি তৈরি হয়। CommonJS-এ এটি অসম্পূর্ণ অবজেক্ট রিটার্ন করে ফলে রানটাইমে undefined এরর দেয়। ESM-এ লাইভ বাইন্ডিং কাজ করলেও ভ্যারিয়েবল ইনিশিয়ালাইজ না হলে রেফারেন্স এরর তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Circular dependency demonstration:
// a.cjs: const b = require('./b.cjs'); module.exports = { name: 'A', b };
// b.cjs: const a = require('./a.cjs'); module.exports = { name: 'B', a };

// When b.cjs is evaluated, a.cjs has only exported an empty object {}!
// Best practice: Refactor shared dependencies into a separate leaf module:
// leaf.cjs -> contains shared models/factories used by both A and B.

console.log("Refactoring cycles into leaf modules eliminates partial exports!");
// Output: Refactoring cycles into leaf modules eliminates partial exports!`,
      caption: {
        en: 'Avoid circular dependencies by extracting shared logic into separate leaf modules.',
        bn: 'শেয়ার্ড লজিক আলাদা লিফ (leaf) মডিউলে সরিয়ে সার্কুলার ডিপেনডেন্সি দূর করা হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Modern Package Exports Maps in package.json', bn: '৮. package.json-এ আধুনিক এক্সপোর্টস ম্যাপ' } },
    {
      type: 'para',
      text: {
        en: 'Modern npm packages use the "exports" field in package.json instead of legacy "main". The exports field defines strict entry points, encapsulates internal private modules, and supports conditional exports for different runtimes (Node.js, browsers) and module formats (import for ESM, require for CJS).',
        bn: 'আধুনিক npm প্যাকেজে পুরনো "main" ফিল্ডের পরিবর্তে শক্তিশালী "exports" ফিল্ড ব্যবহার করা হয়। এটি প্যাকেজের অভ্যন্তরীণ প্রাইভেট ফাইল সুরক্ষিত রাখে এবং ESM (import) ও CJS (require)-এর জন্য আলাদা এন্ট্রি পয়েন্ট নির্দিষ্ট করার সুবিধা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "name": "my-modern-library",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./helpers": {
      "import": "./dist/helpers.mjs"
    }
  }
}`,
      caption: {
        en: 'Package exports maps encapsulate internal files and provide conditional entry points for ESM and CJS.',
        bn: 'এক্সপোর্টস ম্যাপ প্যাকেজের অভ্যন্তরীণ ফাইল ঢেকে রাখে এবং ESM ও CJS-এর জন্য আলাদা পথ দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. The Module Resolution Algorithm', bn: '৯. মডিউল রেজোলিউশন অ্যালগরিদম' } },
    {
      type: 'para',
      text: {
        en: 'When resolving an identifier, Node.js follows a strict 3-step hierarchy: 1) Core Modules (e.g. "fs", "path", "http") always resolve immediately; 2) Relative / Absolute Paths (starting with "./", "../", or "/") look up local files on disk; 3) Bare Package Names (e.g. "express") search node_modules in the current folder, walking UP parent directories until reaching the filesystem root.',
        bn: 'কোনো মডিউল খোঁজার সময় Node.js ৩টি ক্রমানুযায়ী ধাপ অনুসরণ করে: ১) কোর মডিউল ("fs", "path", "http") সবার আগে পাওয়া যায়; ২) আপেক্ষিক পাথ ("./", "../") লোকাল ফাইলে খোঁজা হয়। ৩) সাধারণ প্যাকেজ নাম ("express") বর্তমান ফোল্ডারের node_modules থেকে শুরু করে রুট পর্যন্ত প্যারেন্ট ডিরেক্টরিতে খুঁজে দেখে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import path from "path";

// 1. Core module resolution:
console.log("Core module name:", path.basename("/src/index.js")); // "index.js"

// 2. Relative file resolution:
const relativeTarget = path.resolve("./package.json");
console.log("Target is absolute path:", path.isAbsolute(relativeTarget)); // true

// 3. node_modules lookup paths:
// console.log(module.paths); // Lists all ascending node_modules directories`,
      caption: {
        en: 'Node.js traverses parent directories ascendingly until matching packages in node_modules.',
        bn: 'Node.js ফোল্ডার ক্রমানুসারে ওপরের দিকে উঠে node_modules-এ প্যাকেজ সন্ধান করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Dual Package Hazard and Hybrid Publishing Patterns', bn: '১০. ডুয়াল প্যাকেজ হ্যাজার্ড ও হাইব্রিড পাবলিশিং' } },
    {
      type: 'para',
      text: {
        en: 'The Dual Package Hazard occurs when a library ships both ESM and CJS builds, and an application accidentally loads both versions simultaneously through different dependencies. This duplicates singletons and splits shared state. To prevent this, isolate all internal state into a shared CommonJS wrapper or ensure identical instances via global symbols.',
        bn: 'ডুয়াল প্যাকেজ হ্যাজার্ড তখন ঘটে যখন একটি লাইব্রেরি ESM এবং CJS উভয় ভার্সন রিলিজ করে এবং কোনো প্রজেক্ট দুটি ভার্সনই একসাথে লোড করে ফেলে। এর ফলে সিঙ্গলটন ডেটা ডুপ্লিকেট হয়ে মেমোরি দ্বিখণ্ডিত হয়। এটি রোধ করতে সমস্ত স্টেট কমন একটি CJS র‍্যাপারে রাখতে হয় বা গ্লোবাল সিম্বল ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Safe singleton state sharing across dual-package boundaries:
const GLOBAL_STORE_KEY = Symbol.for("codeshikhon.store.v1");

function getStoreInstance() {
  if (!globalThis[GLOBAL_STORE_KEY]) {
    globalThis[GLOBAL_STORE_KEY] = { counter: 0, items: [] };
  }
  return globalThis[GLOBAL_STORE_KEY];
}

const store = getStoreInstance();
store.counter += 1;
console.log("Cross-realm persistent counter:", store.counter); // 1`,
      caption: {
        en: 'Global symbols protect singletons from breaking across ESM and CommonJS dual package boundaries.',
        bn: 'গ্লোবাল সিম্বল ESM ও CJS দুই দুনিয়ার মাঝেও সিঙ্গলটন স্টেটকে অটুট রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-mod-ex1',
      kind: 'predict',
      topic: 'node: dynamic import in CommonJS',
      question: {
        en: 'Which built-in JavaScript keyword/function allows a CommonJS file to load an ECMAScript Module (ESM) asynchronously at runtime?',
        bn: 'CommonJS ফাইলে রানটাইমে অ্যাসিনক্রোনাসভাবে কোনো ESM মডিউল লোড করতে জাভাস্ক্রিপ্টের কোন বিল্ট-ইন ফাংশন/কিওয়ার্ড ব্যবহার করা হয়?'
      },
      code: `/* Loading an ESM package inside CommonJS */
/* const pkg = await ____________("some-esm-package"); */`,
      answer: 'import',
      accept: ['import', 'import()'],
      hint: {
        en: 'The dynamic import keyword.',
        bn: 'ডায়নামিক import কিওয়ার্ড।'
      },
      explanation: {
        en: 'Dynamic import() returns a Promise resolving to the module namespace, allowing CommonJS code to load ESM modules.',
        bn: 'ডায়নামিক import() একটি প্রমিজ দেয় যা CommonJS ফাইলের ভেতর থেকেও ESM লোড করতে পারে।'
      }
    },
    {
      id: 'nod-mod-ex2',
      kind: 'mcq',
      topic: 'node: enable ESM in package.json',
      question: {
        en: 'Which configuration in package.json tells Node.js to treat all .js files in the package as ECMAScript Modules (ESM)?',
        bn: 'package.json-এর কোন কনফিগারেশনটি Node.js-কে নির্দেশ দেয় যে সব .js ফাইলকে ECMAScript Module (ESM) হিসেবে গণ্য করতে হবে?'
      },
      options: [
        { en: '"type": "module"', bn: '"type": "module"' },
        { en: '"module": true', bn: '"module": true' },
        { en: '"esm": "enable"', bn: '"esm": "enable"' },
        { en: '"target": "es2022"', bn: '"target": "es2022"' }
      ],
      answer: 0,
      hint: {
        en: 'Setting the type property to module.',
        bn: 'টাইপ প্রপার্টিকে module সেট করা।'
      },
      explanation: {
        en: 'Setting "type": "module" in package.json enables native ESM syntax (import/export) for all .js files in that directory.',
        bn: 'package.json-এ "type": "module" দিলে সব .js ফাইলে সরাসরি import/export কাজ করে।'
      }
    },
    {
      id: 'nod-mod-ex3',
      kind: 'mcq',
      topic: 'node: hidden wrapper function parameters',
      question: {
        en: 'Which variables are provided by the CommonJS hidden function wrapper to every local file?',
        bn: 'CommonJS-এর গোপন ফাংশন র‍্যাপার প্রতিটি লোকাল ফাইলে কোন ভ্যারিয়েবলগুলো সরবরাহ করে?'
      },
      options: [
        { en: 'exports, require, module, __filename, __dirname', bn: 'exports, require, module, __filename, __dirname ভ্যারিয়েবলসমূহ' },
        { en: 'window, document, fetch, navigator', bn: 'window, document, fetch, navigator অবজেক্টসমূহ' },
        { en: 'import, export, default, from', bn: 'import, export, default, from কিওয়ার্ডসমূহ' },
        { en: 'process, global, Buffer only', bn: 'শুধুমাত্র process, global, Buffer' }
      ],
      answer: 0,
      hint: {
        en: 'The 5 arguments of the wrapper function.',
        bn: 'র‍্যাপার ফাংশনের ৫টি আর্গুমেন্ট।'
      },
      explanation: {
        en: 'Node.js wraps CommonJS files inside (function (exports, require, module, __filename, __dirname) { ... }), making these five parameters locally accessible.',
        bn: 'Node.js ফাইলটিকে (function (exports, require, module, __filename, __dirname) { ... }) দিয়ে ঘিরে রাখে বলেই এই ৫টি ভ্যারিয়েবল পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'nod-mod-quiz',
    title: { en: 'Node.js Module Systems Quiz', bn: 'Node.js মডিউল সিস্টেম কুইজ' },
    questions: [
      {
        id: 'nmq1',
        kind: 'mcq',
        topic: 'node: require.cache singleton behavior',
        question: {
          en: 'What happens when require("./service.cjs") is called three times in different files across a Node.js process?',
          bn: 'Node.js অ্যাপ্লিকেশনের বিভিন্ন ফাইলে তিনবার require("./service.cjs") কল করা হলে কী ঘটে?'
        },
        options: [
          { en: 'The file executes once on the first call; subsequent calls return the cached singleton instance from require.cache', bn: 'ফাইলটি প্রথমবার একবারই রান হয়; পরবর্তী কলগুলোতে require.cache থেকে সংরক্ষিত সিঙ্গলটন অবজেক্ট ফেরত আসে' },
          { en: 'The file executes 3 times, creating 3 completely separate instances', bn: 'ফাইলটি 3 বারই নতুন করে চলে 3 টি আলাদা ইনস্ট্যান্স তৈরি করে' },
          { en: 'Node.js throws a DuplicateModuleError', bn: 'Node.js একটি DuplicateModuleError ছুড়ে দেয়' },
          { en: 'The module cache is automatically wiped after 100 milliseconds', bn: '100 মিলিসেকেন্ড পর মডিউল ক্যাশ মুছে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Cached by absolute filename.',
          bn: 'এবসোলিউট নাম দিয়ে ক্যাশ করা থাকে।'
        },
        explanation: {
          en: 'Node.js caches loaded modules in require.cache by absolute filepath. Later imports resolve instantly without re-executing the code.',
          bn: 'Node.js একবার ফাইল লোড হলে তা require.cache-এ রেখে দেয়, তাই বারবার চালালেও একই অবজেক্ট পাওয়া যায়।'
        }
      },
      {
        id: 'nmq2',
        kind: 'mcq',
        topic: 'node: package.json exports field',
        question: {
          en: 'What is the main architectural benefit of using the modern "exports" field in package.json instead of "main"?',
          bn: 'package.json-এ পুরনো "main"-এর জায়গায় আধুনিক "exports" ফিল্ড ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          { en: 'It encapsulates internal modules preventing unintended deep imports and enables conditional ESM/CJS entry points', bn: 'এটি অভ্যন্তরীণ ফাইল লুকিয়ে রাখে এবং অনাকাঙ্ক্ষিত ইমপোর্ট আটকে ESM/CJS-এর জন্য আলাদা এন্ট্রি পয়েন্ট দেয়' },
          { en: 'It automatically minifies all JavaScript files', bn: 'এটি স্বয়ংক্রিয়ভাবে সব ফাইল মিনিফাই করে' },
          { en: 'It installs dependencies without internet', bn: 'ইন্টারনেট ছাড়াই প্যাকেজ ইনস্টল করে' },
          { en: 'It compiles JavaScript into C++ binary code', bn: 'জাভাস্ক্রিপ্টকে সি++ বাইনারিতে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Subpath encapsulation and conditional exports.',
          bn: 'অভ্যন্তরীণ ফাইল সুরক্ষা ও কন্ডিশনাল এক্সপোর্ট।'
        },
        explanation: {
          en: 'The exports field seals the package boundary, preventing consumers from reaching into arbitrary internal files, while supporting conditional exports for import and require.',
          bn: 'exports ফিল্ডের মাধ্যমে প্যাকেজের প্রাইভেট ফাইলগুলো নিরাপদ থাকে এবং CJS ও ESM-এর জন্য ভিন্ন ভিন্ন রুট দেওয়া যায়।'
        }
      },
      {
        id: 'nmq3',
        kind: 'mcq',
        topic: 'node: commonjs module wrapper function',
        question: {
          en: 'How does Node.js prevent variables declared at the top level of a CommonJS file from leaking into global scope?',
          bn: 'CommonJS ফাইলে ঘোষিত ভ্যারিয়েবলগুলো যাতে গ্লোবাল স্কোপে না ছড়ায় তা Node.js কীভাবে প্রতিরোধ করে?'
        },
        options: [
          { en: 'By wrapping file code inside an IIFE function signature: (function(exports, require, module, __filename, __dirname) { ... })', bn: 'ফাইলের কোডকে একটি ফাংশন র‍্যাপার দিয়ে ঘিরে: (function(exports, require, module, __filename, __dirname) { ... })' },
          { en: 'By compiling code directly into machine assembly before execution', bn: 'মেশিন কোডে রূপান্তর করে' },
          { en: 'By running each file in a separate child OS thread', bn: 'আলাদা থ্রেডে রান করে' },
          { en: 'By deleting variables after execution completes', bn: 'কাজ শেষ হলে ভ্যারিয়েবল মুছে দিয়ে' }
        ],
        answer: 0,
        hint: {
          en: 'Module wrapper function.',
          bn: 'মডিউল র‍্যাপার ফাংশন।'
        },
        explanation: {
          en: 'Before executing any CommonJS file, Node.js wraps its contents in a 5-argument wrapper function, keeping top-level declarations local to that file.',
          bn: 'ফাইল এক্সিকিউশনের পূর্বে Node.js কোডটিকে ৫ আর্গুমেন্টের র‍্যাপার ফাংশনে আবদ্ধ করে যাতে স্কোপ আলাদা থাকে।'
        }
      },
      {
        id: 'nmq4',
        kind: 'mcq',
        topic: 'node: esm top-level await',
        question: {
          en: 'What unique capability does ECMAScript Modules (ESM) offer regarding asynchronous initialization?',
          bn: 'অ্যাসিনক্রোনাস ইনিশিয়ালাইজেশনের ক্ষেত্রে ECMAScript Modules (ESM) কোন বিশেষ সুবিধা প্রদান করে?'
        },
        options: [
          { en: 'Top-Level Await allows using "await" directly at module root level without wrapping inside an async function', bn: 'টপ-লেভেল Await-এর মাধ্যমে কোনো async ফাংশন ছাড়াই সরাসরি মডিউলের মূল স্কোপে "await" ব্যবহার করা যায়' },
          { en: 'ESM executes all asynchronous promises synchronously', bn: 'সব প্রমিজ সিঙ্ক্রোনাস করে দেয়' },
          { en: 'ESM disables garbage collection during imports', bn: 'গারবেজ কালেকশন বন্ধ রাখে' },
          { en: 'ESM blocks other threads permanently', bn: 'অন্যান্য থ্রেডকে স্থায়ীভাবে বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Top-level await at module root.',
          bn: 'মডিউলের মূল স্কোপে সরাসরি await।'
        },
        explanation: {
          en: 'ESM natively supports top-level await, pausing the evaluation of dependent importing modules until the asynchronous operation resolves.',
          bn: 'ESM-এ সরাসরি await ব্যবহার করে ডাটাবেজ কানেকশন বা কনফিগ ফাইল লোড করা যায়, যা পুরো মডিউল লোডিং পাইপলাইনকে সহজ করে।'
        }
      }
    ]
  }
};
