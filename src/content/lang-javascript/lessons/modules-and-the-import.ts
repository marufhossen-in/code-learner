import type { Lesson } from '../../../lib/types';

export const ModulesAndTheImportLesson: Lesson = {
  slug: 'modules-and-the-import',
  tech: 'lang-javascript',
  title: {
    en: 'Modules and the Import — ES Modules, Tree-Shaking, and Dynamic Imports',
    bn: 'মডিউল ও ইমপোর্ট — ইএস মডিউল, ট্রি-শেকিং ও ডায়নামিক ইমপোর্ট',
  },
  summary: {
    en: 'Master ECMAScript modules (ESM): structure clean codebases with named and default exports, leverage build-time tree-shaking to eliminate dead code, split bundles dynamically with import(), and bridge modern ESM with legacy CommonJS in production.',
    bn: 'ইসিএমএস্ক্রিপ্ট মডিউল (ইএসএম) আয়ত্ত করুন: নেমড ও ডিফল্ট এক্সপোর্ট দিয়ে কোডবেস সাজানো, অব্যবহৃত কোড বাদ দিতে ট্রি-শেকিং, import() দিয়ে ডায়নামিক বান্ডল স্প্লিটিং এবং প্রোডাকশনে লিগ্যাসি কমনজেএস এর সাথে সমন্বয়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Modular architecture and static dependency graphs', bn: 'WHAT — মডিউলার আর্কিটেকচার ও স্ট্যাটিক ডিপেনডেন্সি গ্রাফ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you architect scalable frontend applications and modular backend microservices, ES Modules provide the standardized foundation for organizing JavaScript into isolated, reusable units. Before the official language specification (ECMAScript), developers relied on disparate systems like CommonJS and AMD. Today, modern JavaScript natively implements ES Modules using static import and export declarations. Because the engine resolves these declarations at parse time before code executes, bundlers can build complete dependency graphs and perform tree-shaking to eliminate unused code. For massive codebases, dynamic import statements enable on-demand code-splitting to maintain fast initial load speeds.',
        bn: 'যখন আপনি বড় ফ্রন্টএন্ড অ্যাপ্লিকেশন এবং ব্যাকএন্ড মাইক্রোসার্ভিস তৈরি করেন, তখন ইএস মডিউল জাভাস্ক্রিপ্টকে স্বতন্ত্র ও পুনর্ব্যবহারযোগ্য এককে সাজানোর আদর্শ ভিত্তি প্রদান করে। অফিশিয়াল ভাষা স্পেসিফিকেশনের (ECMAScript) পূর্বে ডেভেলপাররা কমনজেএস বা এএমডির মতো ভিন্ন ব্যবস্থার ওপর নির্ভরশীল ছিলেন। বর্তমানে আধুনিক জাভাস্ক্রিপ্ট স্ট্যাটিক import ও export ঘোষণার মাধ্যমে সরাসরি ইএস মডিউল সমর্থন করে। কোড চলার পূর্বেই পার্স করার সময় ইঞ্জিন এই ঘোষণাগুলো যাচাই করে নেয়, ফলে আধুনিক বান্ডলাররা পূর্ণাঙ্গ ডিপেনডেন্সি গ্রাফ তৈরি করে অব্যবহৃত কোড ট্রি-শেকিংয়ের মাধ্যমে মুছে ফেলতে পারে। এছাড়া ডায়নামিক import স্টেটমেন্টের সাহায্যে সহজে কোড ভাগ করে দ্রুত লোড নিশ্চিত করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Static ESM dependency graph and tree-shaking elimination', bn: 'স্ট্যাটিক ইএসএম ডিপেনডেন্সি গ্রাফ ও ট্রি-শেকিং ছাঁটাই' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript ES modules tree-shaking diagram">
<rect x="30" y="45" width="160" height="130" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="110" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">app.js (ENTRY)</text>
<text x="40" y="100" font-family="monospace" font-size="9" fill="currentColor">import { add,</text>
<text x="40" y="118" font-family="monospace" font-size="9" fill="currentColor">  multiply }</text>
<text x="40" y="136" font-family="monospace" font-size="9" fill="currentColor">from './math.js';</text>

<line x1="190" y1="110" x2="260" y2="110" stroke="#2563eb" stroke-width="2"/>
<polygon points="260,106 270,110 260,114" fill="#2563eb"/>

<rect x="270" y="30" width="160" height="160" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="350" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">math.js (5 EXPORTS)</text>
<text x="280" y="75" font-family="monospace" font-size="9" fill="#166534">✓ export const add</text>
<text x="280" y="95" font-family="monospace" font-size="9" fill="#166534">✓ export const multiply</text>
<text x="280" y="115" font-family="monospace" font-size="9" fill="#166534">✓ export const calcTotal</text>
<text x="280" y="140" font-family="monospace" font-size="9" fill="#dc2626">✗ deadHelper (pruned)</text>
<text x="280" y="160" font-family="monospace" font-size="9" fill="#dc2626">✗ legacyParser (pruned)</text>

<line x1="430" y1="110" x2="480" y2="110" stroke="#16a34a" stroke-width="2"/>
<polygon points="480,106 490,110 480,114" fill="#16a34a"/>

<rect x="490" y="55" width="130" height="110" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="555" y="78" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">OUTPUT BUNDLE</text>
<text x="500" y="105" font-size="9" fill="#6b21a8">80KB (was 120KB)</text>
<text x="500" y="125" font-size="9" fill="#6b21a8">40KB saved</text>
<text x="500" y="145" font-size="9" fill="#166534">3 active functions</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Static ES module imports permit tree-shaking to drop 2 unreferenced exports</text>
</svg>`,
      caption: {
        en: 'Static imports in app.js allow bundlers to prune 2 dead helpers from math.js, shrinking the bundle from 120KB to 80KB across 3 active functions.',
        bn: 'app.js এর স্ট্যাটিক ইমপোর্ট বান্ডলারকে math.js থেকে ২টি অব্যবহৃত কোড বাদ দেওয়ার সুযোগ দেয়, ফলে ৩টি সচল ফাংশনসহ বান্ডল সাইজ ১২০KB থেকে ৮০KB তে নেমে আসে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ES Module (ESM)',
          def: {
            en: 'The official ECMAScript standard specification for modularizing JavaScript files with static import and export syntax.',
            bn: 'স্ট্যাটিক import ও export সিনট্যাক্স দিয়ে জাভাস্ক্রিপ্ট ফাইল মডিউলার করার জন্য অনুমোদিত সরকারি ইসিএমএস্ক্রিপ্ট স্ট্যান্ডার্ড।',
          },
        },
        {
          term: 'Tree-shaking',
          def: {
            en: 'An automated dead-code elimination process where bundlers inspect static ESM graphs and drop unreferenced export definitions.',
            bn: 'একটি স্বয়ংক্রিয় প্রক্রিয়া যেখানে বান্ডলার স্ট্যাটিক ইএসএম গ্রাফ বিশ্লেষণ করে কোনো কোডে ব্যবহার না হওয়া এক্সপোর্টগুলো বাদ দিয়ে দেয়।',
          },
        },
        {
          term: 'Dynamic import()',
          def: {
            en: 'A function-like syntax that loads a JavaScript module asynchronously on demand, returning a Promise that resolves to the module namespace.',
            bn: 'ফাংশনের মতো একটি সিনট্যাক্স যা প্রয়োজন অনুযায়ী অ্যাসিঙ্ক্রোনাসভাবে কোনো মডিউল লোড করে এবং মডিউলটি প্রমিজ হিসেবে ফেরত দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Static contracts and bundle optimization', bn: 'কেন — স্ট্যাটিক চুক্তি ও বান্ডল অপ্টিমাইজেশন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Deterministic dependency graphs: static ESM imports can be verified at build time before running single lines of application code.', bn: 'সুনির্দিষ্ট ডিপেনডেন্সি গ্রাফ: এক লাইন কোড চালানোর পূর্বেই বিল্ড টাইমে সমস্ত ইএসএম ইমপোর্ট যাচাই করে নেওয়া যায়।' },
        { en: 'Drastic bundle savings: tree-shaking prunes unused exports, saving dozens of kilobytes of client bandwidth over 3G/4G connections.', bn: 'ব্যাপক বান্ডল সাশ্রয়: ট্রি-শেকিং অব্যবহৃত এক্সপোর্ট ছেঁটে ফেলে মোবাইল নেটওয়ার্কে প্রচুর ক্লায়েন্ট ব্যান্ডউইথ সাশ্রয় করে।' },
        { en: 'Fast initial load times: dynamic imports allow applications to split large admin panels into lazy chunks loaded only when visited.', bn: 'দ্রুত ইনিশিয়াল লোড: ডায়নামিক ইমপোর্টের সাহায্যে বড় অ্যাডমিন প্যানেল আলাদা চাঙ্কে ভাগ করে কেবল প্রয়োজনের সময় লোড করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Structuring ES Modules in 4 steps', bn: 'HOW — ৪টি ধাপে ইএস মডিউল পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Named exports', bn: '১. নেমড এক্সপোর্ট' }, text: { en: 'Export individual functions using explicit export const declarations.', bn: 'স্পষ্ট export const ঘোষণা ব্যবহার করে স্বতন্ত্র ফাংশন এক্সপোর্ট করুন।' } },
        { title: { en: '2. Default exports', bn: '২. ডিফল্ট এক্সপোর্ট' }, text: { en: 'Designate the core module entity using export default.', bn: 'প্রধান উপাদান চিহ্নিত করতে export default ব্যবহার করুন।' } },
        { title: { en: '3. Static imports', bn: '৩. স্ট্যাটিক ইমপোর্ট' }, text: { en: 'Import specific utilities using import { ... } from statements.', bn: 'নির্দিষ্ট টুল আনতে import { ... } from স্টেটমেন্ট ব্যবহার করুন।' } },
        { title: { en: '4. Dynamic splitting', bn: '৪. ডায়নামিক স্প্লিটিং' }, text: { en: 'Load heavy routes asynchronously using await import("./chunk.js").', bn: 'ভারী রুট লোড করতে await import("./chunk.js") ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'esm_tree_shake_sim.js',
      code: `// Simulated module export registry and tree-shaking analyzer
const totalExportedFunctions = 5;
const activeImportedFunctions = 3; // add, multiply, calculateTotal
const deadCodePruned = totalExportedFunctions - activeImportedFunctions; // 2 unused

// Module metric simulation
const moduleBytesBefore = 120; // KB
const bundleBytesSaved = 40;   // KB pruned
const finalBundleBytes = moduleBytesBefore - bundleBytesSaved; // 80 KB

console.log("ES Modules Tree-Shaking Simulation:");
console.log("Exported functions: " + totalExportedFunctions + ", Active imports: " + activeImportedFunctions);
console.log("Pruned functions: " + deadCodePruned + ", Bundle reduction: " + bundleBytesSaved + "KB");
console.log("Final bundle size: " + finalBundleBytes + "KB across 3 active functions");

// Output:
// ES Modules Tree-Shaking Simulation:
// Exported functions: 5, Active imports: 3
// Pruned functions: 2, Bundle reduction: 40KB
// Final bundle size: 80KB across 3 active functions`,
      caption: {
        en: 'The simulation logs 5 exported functions where 3 are imported, causing 2 dead helpers to be pruned. The bundle shrinks from 120KB to 80KB saving 40KB across 3 active functions.',
        bn: 'সিমুলেশনটিতে ৫টি এক্সপোর্টের মধ্যে ৩টি ইমপোর্ট হওয়ায় ২টি অব্যবহৃত কোড বাদ দেওয়া হয়। ৩টি সচল ফাংশনসহ বান্ডল সাইজ ১২০KB থেকে কমে ৮০KB হয় এবং ৪০KB সাশ্রয় হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive tree-shaking analyzer', bn: 'INSIDE — জীবন্ত ট্রি-শেকিং অ্যানালাইজার' },
    },
    {
      type: 'para',
      text: {
        en: 'Test module optimization mechanics. Starting with 5 exported module helpers, importing only 3 functions allows bundlers to safely drop 2 dead utilities. This reduces bundle weight from 120KB to 80KB, saving 40KB of network payload across 3 active functions. Static analysis makes this dead code elimination possible.',
        bn: 'মডিউল অপ্টিমাইজেশন পরীক্ষা করুন। ৫টি এক্সপোর্ট করা ফাংশন থেকে মাত্র ৩টি ইমপোর্ট করলে বান্ডলার নিরাপদে বাকি ২টি কোড বাদ দিয়ে দেয়। ফলে বান্ডলের আকার ১২০KB থেকে ৮০KB তে নেমে ৩টি সচল ফাংশনে ৪০KB ব্যান্ডউইথ সাশ্রয় হয়। স্ট্যাটিক বিশ্লেষণের কারণেই এই ছাঁটাই সম্ভব হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Module lab (inspect bundle size, press Run)', bn: 'Module lab (বান্ডল সাইজ পরীক্ষা, Run)' },
      html: '<h3>JavaScript ES Module Bundler</h3>\n<pre id="out"></pre>\n<p>Dead code elimination through static tree-shaking.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tot = 5;\nconst act = 3;\nconst pruned = tot - act;\nconst saved = 40;\nconst size = 120 - saved;\nconsole.log("final: " + size);\ndocument.getElementById("out").textContent = "Total: " + tot + " · Active: " + act + " · Pruned: " + pruned + " · Final: " + size + "KB (saved " + saved + "KB across 3 functions ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Modular architecture rules', bn: 'ফলাফল — মডিউলার আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prefer named exports over default exports: named exports offer explicit autocomplete and prevent accidental renaming discrepancies across files.', bn: 'ডিফল্ট এক্সপোর্টের চেয়ে নেমড এক্সপোর্ট বেছে নিন: নেমড এক্সপোর্ট স্পষ্ট অটো-কমপ্লিট সুবিধা দেয় এবং ভুল নাম পরিবর্তনের ঝুঁকি রোধ করে।' },
        { en: 'ES Modules run in strict mode by default: the "use strict" directive is automatically enabled for all standard ES module files.', bn: 'ইএস মডিউল স্বয়ংক্রিয়ভাবে স্ট্রিক্ট মোডে চলে: প্রতিটি আদর্শ ইএস মডিউল ফাইলে "use strict" শুরু থেকেই চালু থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common module pitfalls', bn: 'ডিবাগ — মডিউল ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Circular dependency deadlocks in ES Modules', bn: 'ইএস মডিউলে সার্কুলার ডিপেনডেন্সি অচলাবস্থা' },
      text: {
        en: 'If file A imports from file B while B simultaneously depends on A, variables accessed during initial evaluation can trigger undefined references due to the temporal dead zone. Cure: decouple shared definitions into an independent third file C.',
        bn: 'যদি ফাইল A ফাইল B কে ইমপোর্ট করে এবং একই সাথে B আবার A এর ওপর নির্ভর করে, তবে টেম্পোরাল ডেড জোনের কারণে মান undefined হতে পারে। প্রতিকার: শেয়ার্ড কোড আলাদা তৃতীয় ফাইল C তে সরিয়ে আনুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Specifying file extensions in native browser ESM', bn: 'ব্রাউজার ইএসএম এ ফাইলের এক্সটেনশন উল্লেখ করা' },
      text: {
        en: 'Unlike Node.js bundler environments that automatically resolve ./math to ./math.js, native browser <script type="module"> tags require fully qualified file paths with extensions like import { add } from "./math.js".',
        bn: 'Node.js পরিবেশের মতো ব্রাউজার নিজে থেকে এক্সটেনশন অনুমান করে না; তাই ব্রাউজারে মডিউল ব্যবহারের সময় স্পষ্ট ফাইলের নামসহ import { add } from "./math.js" লেখা বাধ্যতামূলক।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production module systems', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল মডিউল আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Vite and Rollup: blazing-fast development servers leveraging native browser ES module imports for instant Hot Module Replacement.', bn: 'Vite ও Rollup: তাৎক্ষণিক হট মডিউল রিপ্লেসমেন্টের জন্য ব্রাউজারের নেটিভ ইএস মডিউল ব্যবহার করে দ্রুততম ডেভ সার্ভার তৈরি করে।' },
        { en: 'Next.js dynamic routing: dynamic import() splits page routes into independent JavaScript chunks, downloading code on page transition.', bn: 'Next.js ডায়নামিক রাউটিং: dynamic import() পেজ রাউটগুলোকে আলাদা জাভাস্ক্রিপ্ট চাঙ্কে ভাগ করে পেজ ভিজিটের সময় লোড করে।' },
        { en: 'Modern npm packages: dual-publishing exports maps in package.json to seamlessly support both import (ESM) and require (CommonJS).', bn: 'আধুনিক এনপিএম প্যাকেজ: package.json এর exports ফিল্ডের মাধ্যমে একই সাথে import (ESM) এবং require (CommonJS) সমর্থন নিশ্চিত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Iterables and Spread Protocols', bn: 'পরবর্তী পাঠ — ইটারেবল ও স্প্রেড প্রোটোকল' },
    },
    {
      type: 'para',
      text: {
        en: 'With modules and tree-shaking mastered, Lesson 6 investigates JavaScript iteration protocols: Symbol.iterator, custom iterable generators, the rest and spread operators, and memory implications of shallow object copying.',
        bn: 'মডিউল ও ট্রি-শেকিং আয়ত্ত করার পর, পাঠ ৬ জাভাস্ক্রিপ্ট ইটারেশন প্রোটোকল শেখাবে: Symbol.iterator, কাস্টম জেনারেটর, রেস্ট ও স্প্রেড অপারেটর এবং শ্যালো অবজেক্ট কপির মেমরি প্রভাব।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-mod-ex-1',
      kind: 'mcq',
      topic: 'tree-shaking-condition',
      question: {
        en: 'Why is static ES Module syntax (import/export) required for modern bundlers to perform effective tree-shaking?',
        bn: 'আধুনিক বান্ডলারগুলোতে কার্যকর ট্রি-শেকিং করার জন্য স্ট্যাটিক ইএস মডিউল সিনট্যাক্স (import/export) কেন অপরিহার্য?',
      },
      options: [
        {
          en: 'Static imports are deterministically analyzable at parse time before code executes, allowing bundlers to identify and strip unused exports',
          bn: 'কোড এক্সিকিউট হওয়ার পূর্বেই পার্স করার সময় স্ট্যাটিক ইমপোর্ট নিশ্চিতভাবে বিশ্লেষণ করা যায়, ফলে বান্ডলার অব্যবহৃত কোড শনাক্ত করে বাদ দিতে পারে',
        },
        {
          en: 'Dynamic imports use 10 times more hard drive storage space',
          bn: 'ডায়নামিক ইমপোর্ট ১০ গুণ বেশি হার্ডড্রাইভ স্টোরেজ দখল করে',
        },
        {
          en: 'Static syntax automatically minifies CSS stylesheets',
          bn: 'স্ট্যাটিক সিনট্যাক্স স্বয়ংক্রিয়ভাবে সিএসএস মিনিফাই করে',
        },
        {
          en: 'JavaScript engines delete CommonJS files on system boot',
          bn: 'সিস্টেম বুটের সময় জাভাস্ক্রিপ্ট ইঞ্জিন কমনজেএস ফাইল মুছে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Static structure enables build-time dependency analysis.', bn: 'স্ট্যাটিক কাঠামো বিল্ড টাইমে ডিপেনডেন্সি বিশ্লেষণের সুযোগ দেয়।' },
      explanation: {
        en: 'Because ESM imports and exports cannot be placed dynamically inside if conditions, bundlers can reliably prune unreferenced exports.',
        bn: 'যেহেতু ইএসএম ইমপোর্ট বা এক্সপোর্ট শর্তাধীন if ব্লকে রাখা যায় না, তাই বান্ডলার নিশ্চিতভাবে অব্যবহৃত কোড ছেঁটে ফেলতে পারে।',
      },
    },
    {
      id: 'js-mod-ex-2',
      kind: 'mcq',
      topic: 'tree-shake-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many functions were exported and pruned, and what was the final bundle size across the 3 active functions?',
        bn: 'আমাদের কোড আলোচনায় মোট কয়টি ফাংশন এক্সপোর্ট ও ছাঁটাই করা হয়েছিল এবং ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ কত ছিল?',
      },
      options: [
        { en: '5 exported, 2 pruned, final bundle size = 80KB across 3 active functions', bn: '৫টি এক্সপোর্ট, ২টি ছাঁটাই, ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ = ৮০KB' },
        { en: '10 exported, 5 pruned, final bundle size = 200KB across 5 active functions', bn: '১০টি এক্সপোর্ট, ৫টি ছাঁটাই, ৫টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ = ২০০KB' },
        { en: '1 exported, 0 pruned, final bundle size = 10KB across 1 active function', bn: '১টি এক্সপোর্ট, ০টি ছাঁটাই, ১টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ = ১০KB' },
        { en: '0 exported, 0 pruned, final bundle size = 0KB across 0 active functions', bn: '০টি এক্সপোর্ট, ০টি ছাঁটাই, ০টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ = ০KB' },
      ],
      answer: 0,
      hint: { en: '5 - 3 = 2 pruned; 120 - 40 = 80KB.', bn: '৫ - ৩ = ২টি ছাঁটাই; ১২০ - ৪০ = ৮০KB।' },
      explanation: {
        en: 'The simulation defined 5 exported utilities with 3 active imports, pruning 2 unused functions and reducing size from 120KB to 80KB.',
        bn: 'সিমুলেশনটিতে ৫টি এক্সপোর্টের ৩টি সচল থাকায় ২টি ছাঁটাই হয় এবং সাইজ ১২০KB থেকে ৮০KB তে নেমে আসে।',
      },
    },
    {
      id: 'js-mod-ex-3',
      kind: 'mcq',
      topic: 'dynamic-import-return',
      question: {
        en: 'What does invoking the dynamic import("./module.js") function return in JavaScript?',
        bn: 'জাভাস্ক্রিপ্টে ডায়নামিক import("./module.js") কল করলে কী ফেরত আসে?',
      },
      options: [
        {
          en: 'A Promise that resolves to the module namespace object containing all its exports',
          bn: 'একটি প্রমিজ যা মডিউলটির সমস্ত এক্সপোর্ট ধারণকারী নেমস্পেস অবজেক্ট হিসেবে নিষ্পত্তি হয়',
        },
        {
          en: 'A synchronous integer error code',
          bn: 'একটি সিঙ্ক্রোনাস পূর্ণসংখ্যা এরর কোড',
        },
        {
          en: 'A raw binary string containing machine code',
          bn: 'মেশিন কোডযুক্ত একটি অপরিশোধিত বাইনারি স্ট্রিং',
        },
        {
          en: 'A boolean value indicating whether the file exists',
          bn: 'ফাইলটি বিদ্যমান কিনা নির্দেশকারী একটি বুলিয়ান মান',
        },
      ],
      answer: 0,
      hint: { en: 'Dynamic import returns a Promise.', bn: 'ডায়নামিক ইমপোর্ট একটি প্রমিজ ফেরত দেয়।' },
      explanation: {
        en: 'Dynamic import() returns a Promise that loads the module asynchronously, resolving with its exported namespace.',
        bn: 'ডায়নামিক import() একটি প্রমিজ ফেরত দেয় যা মডিউলটি অ্যাসিঙ্ক উপায়ে লোড করে তার এক্সপোর্টগুলো সরবরাহ করে।',
      },
    },
    {
      id: 'js-mod-ex-4',
      kind: 'predict',
      topic: 'script-module-attribute',
      question: {
        en: 'What value must the type attribute have on an HTML script tag to execute the script as an ES Module (e.g. type="module")?',
        bn: 'একটি এইচটিএমএল স্ক্রিপ্ট ট্যাগকে ইএস মডিউল হিসেবে চালাতে type অ্যাট্রিবিউটের মান কী হতে হবে (যেমন type="module")?',
      },
      answer: 'module',
      accept: ['module', 'Module', '"module"'],
      hint: { en: '<script type="...">', bn: '<script type="...">' },
      explanation: {
        en: 'Setting type="module" instructs the browser to treat the file as an ECMAScript module with strict mode and top-level await.',
        bn: 'type="module" দিলে ব্রাউজার ফাইলটিকে স্ট্রিক্ট মোড এবং টপ-লেভেল await সহ ইএস মডিউল হিসেবে চালায়।',
      },
    },
  ],
  quiz: {
    id: 'modules-import-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'js-mod-q1',
        kind: 'mcq',
        topic: 'strict-mode-esm',
        question: {
          en: 'What is an important behavioral difference between traditional JavaScript scripts and native ES Modules?',
          bn: 'চিরাচরিত জাভাস্ক্রিপ্ট স্ক্রিপ্ট এবং নেটিভ ইএস মডিউলের মধ্যকার একটি গুরুত্বপূর্ণ আচরণগত পার্থক্য কী?',
        },
        options: [
          {
            en: 'ES Modules automatically execute in strict mode ("use strict") by default without requiring an explicit directive',
            bn: 'ইএস মডিউলগুলো কোনো নির্দেশ ছাড়াই শুরু থেকেই স্বয়ংক্রিয়ভাবে স্ট্রিক্ট মোডে ("use strict") চলে',
          },
          {
            en: 'ES Modules cannot declare functions or variables',
            bn: 'ইএস মডিউলে কোনো ফাংশন বা ভেরিয়েবল ঘোষণা করা যায় না',
          },
          {
            en: 'ES Modules run only on Sunday mornings',
            bn: 'ইএস মডিউল কেবল রবিবার সকালে চলে',
          },
          {
            en: 'ES Modules disable all mathematical operations',
            bn: 'ইএস মডিউল সমস্ত গাণিতিক অপারেশন বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'ES Modules are strictly scoped and strict by default.', bn: 'ইএস মডিউলগুলো শুরু থেকেই স্ট্রিক্ট মোডে থাকে।' },
        explanation: {
          en: 'ECMAScript specifications mandate that all ES modules execute strictly, forbidding accidental global leaks.',
          bn: 'ইসিএমএস্ক্রিপ্ট স্পেসিফিকেশন অনুযায়ী সমস্ত ইএস মডিউল স্ট্রিক্ট মোডে চলে, যা অসাবধানতাবশত গ্লোবাল ভেরিয়েবল তৈরি রোধ করে।',
        },
      },
      {
        id: 'js-mod-q2',
        kind: 'mcq',
        topic: 'bundle-savings-metric',
        question: {
          en: 'In our code walkthrough, how many kilobytes were pruned by tree-shaking, resulting in what final bundle size across the 3 active functions?',
          bn: 'আমাদের কোড আলোচনায় ট্রি-শেকিংয়ের মাধ্যমে কত কিলোবাইট ছাঁটাই হয়েছিল, যার ফলে ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ কত হয়েছিল?',
        },
        options: [
          { en: '40KB pruned, resulting in an 80KB final bundle across 3 active functions', bn: '৪০KB ছাঁটাই, ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ ৮০KB' },
          { en: '10KB pruned, resulting in a 110KB final bundle across 3 active functions', bn: '১০KB ছাঁটাই, ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ ১১০KB' },
          { en: '100KB pruned, resulting in a 20KB final bundle across 3 active functions', bn: '১০০KB ছাঁটাই, ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ ২০KB' },
          { en: '0KB pruned, resulting in a 120KB final bundle across 3 active functions', bn: '০KB ছাঁটাই, ৩টি সচল ফাংশনসহ চূড়ান্ত বান্ডল সাইজ ১২০KB' },
        ],
        answer: 0,
        hint: { en: '120 - 40 = 80KB.', bn: '১২০ - ৪০ = ৮০KB।' },
        explanation: {
          en: 'The simulation calculated a 40KB reduction from 120KB, leaving an 80KB bundle across 3 active functions.',
          bn: 'সিমুলেশনটি ১২০KB থেকে ৪০KB কমিয়ে ৩টি সচল ফাংশনে চূড়ান্ত বান্ডল সাইজ ৮০KB হিসাব করেছিল।',
        },
      },
      {
        id: 'js-mod-q3',
        kind: 'mcq',
        topic: 'circular-dependency-fix',
        question: {
          en: 'What architectural solution cleanly resolves circular dependency deadlocks between two ES modules A and B?',
          bn: 'দুটি ইএস মডিউল A ও B এর মধ্যকার সার্কুলার ডিপেনডেন্সি সংকট সুন্দরভাবে সমাধান করার আর্কিটেকচারাল উপায় কী?',
        },
        options: [
          {
            en: 'Extract the shared dependencies and interfaces into an independent third module C imported by both A and B',
            bn: 'শেয়ার্ড কোড ও ইন্টারফেস আলাদা তৃতীয় মডিউল C তে সরিয়ে এনে A ও B উভয় মডিউল থেকেই তা ইমপোর্ট করা',
          },
          {
            en: 'Concatenate all files in the project into a single 50,000-line script',
            bn: 'প্রজেক্টের সমস্ত ফাইল একত্রিত করে একটি একক ৫০,০০০ লাইনের স্ক্রিপ্ট তৈরি করা',
          },
          {
            en: 'Delete node_modules and never install packages again',
            bn: 'node_modules ফোল্ডারটি মুছে ফেলা এবং কখনো প্যাকেজ ইনস্টল না করা',
          },
          {
            en: 'Turn off TypeScript strict checking in tsconfig.json',
            bn: 'tsconfig.json এ টাইপস্ক্রিপ্ট স্ট্রিক্ট চেকিং বন্ধ করে দেওয়া',
          },
        ],
        answer: 0,
        hint: { en: 'Extract shared utilities into a third module.', bn: 'শেয়ার্ড কোড তৃতীয় একটি মডিউলে সরিয়ে নিন।' },
        explanation: {
          en: 'Extracting shared models into a common leaf module decouples mutual imports and eliminates circular dependencies.',
          bn: 'শেয়ার্ড মডেলগুলোকে আলাদা একটি সাধারণ মডিউলে স্থানান্তর করলে পারস্পরিক নির্ভরতা দূর হয়ে সাইক্লিক রেফারেন্স বন্ধ হয়।',
        },
      },
      {
        id: 'js-mod-q4',
        kind: 'predict',
        topic: 'dead-code-term',
        question: {
          en: 'What graphic botanical metaphor term describes eliminating unused exported modules from a production JavaScript bundle?',
          bn: 'প্রোডাকশন জাভাস্ক্রিপ্ট বান্ডল থেকে অব্যবহৃত এক্সপোর্ট করা কোড বাদ দেওয়াকে কোন উদ্ভিজ্জ উপমা নামে অভিহিত করা হয়?',
        },
        answer: 'Tree-shaking',
        accept: ['Tree-shaking', 'tree shaking', 'treeshaking'],
        hint: { en: 'Tree-...', bn: 'Tree-...' },
        explanation: {
          en: 'Tree-shaking metaphorically shakes the abstract syntax tree so that unused dead leaves (code) fall away.',
          bn: 'ট্রি-শেকিং উপমাটি সিনট্যাক্স ট্রি থেকে শুকনো পাতার মতো অব্যবহৃত কোড ঝেড়ে ফেলে দেওয়াকে বোঝায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'iterables-and-the-spread',
    title: { en: 'Iterables and Spread Protocols', bn: 'ইটারেবল ও স্প্রেড প্রোটোকল' },
  },
};
