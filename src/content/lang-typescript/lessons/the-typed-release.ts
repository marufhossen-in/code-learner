import type { Lesson } from '../../../lib/types';

export const TheTypedReleaseLesson: Lesson = {
  slug: 'the-typed-release',
  tech: 'lang-typescript',
  title: {
    en: 'The Typed Release — tsconfig, Declaration Files, and Production Builds',
    bn: 'টাইপড রিলিজ — tsconfig, ডিক্লারেশন ফাইল ও প্রোডাকশন বিল্ড',
  },
  summary: {
    en: 'Master extreme-expert production TypeScript release workflows: configure strict tsconfig.json compiler flags, emit type declaration files (.d.ts) and source maps, bundle with modern bundlers (Vite, esbuild), and package bulletproof typed libraries for npm distribution.',
    bn: 'চরম-দক্ষ প্রোডাকশন টাইপস্ক্রিপ্ট রিলিজ ওয়ার্কফ্লো আয়ত্ত করুন: কঠোর tsconfig.json কম্পাইলার ফ্ল্যাগ কনফিগার করা, টাইপ ডিক্লারেশন ফাইল (.d.ts) ও সোর্স ম্যাপ তৈরি, আধুনিক বান্ডলার (Vite, esbuild) দিয়ে বান্ডলিং এবং এনপিএমের জন্য নিখুঁত টাইপযুক্ত লাইব্রেরি প্যাকেজিং।',
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Production compilation, declaration emit, and packaging', bn: 'WHAT — প্রোডাকশন কম্পাইলেশন, ডিক্লারেশন এমিট ও প্যাকেজিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you prepare a TypeScript application or library for production release, writing safe code is only the first half of the engineering equation. You must configure the TypeScript compiler options in tsconfig.json to enforce strict type checking, control module resolution, emit type declaration files (.d.ts), and generate source maps for production debugging. A professional release workflow bundles JavaScript for minimal bundle size and execution latency while shipping exact type declarations so downstream developers get complete autocompletion and compile-time validation.',
        bn: 'যখন আপনি প্রোডাকশন রিলিজের জন্য কোনো টাইপস্ক্রিপ্ট অ্যাপ্লিকেশন বা লাইব্রেরি প্রস্তুত করেন, তখন কেবল নিরাপদ কোড লেখাই যথেষ্ট নয়। আপনাকে tsconfig.json ফাইলে কম্পাইলার অপশনগুলো নিখুঁতভাবে কনফিগার করতে হয় যাতে কঠোর টাইপ চেকিং নিশ্চিত হয়, মডিউল রেজোলিউশন নিয়ন্ত্রিত থাকে, টাইপ ডিক্লারেশন ফাইল (.d.ts) প্রস্তুত হয় এবং প্রোডাকশন ডিবাগিংয়ের জন্য সোর্স ম্যাপ তৈরি থাকে। একটি প্রফেশনাল রিলিজ ওয়ার্কফ্লো জাভাস্ক্রিপ্টকে ছোট বান্ডেল আকারে অপ্টিমাইজ করে দ্রুতগতির এক্সিকিউশন নিশ্চিত করে, এবং সাথে সঠিক ডিক্লারেশন ফাইল সরবরাহ করে যাতে ব্যবহারকারীরা এডিটরে পূর্ণাঙ্গ অটোকমপ্লিশন ও টাইপ সুরক্ষা পায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'TypeScript compilation and multi-artifact production emit', bn: 'টাইপস্ক্রিপ্ট কম্পাইলেশন ও বহু-আর্টিফ্যাক্ট প্রোডাকশন এমিট' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript release build pipeline diagram">
<rect x="20" y="40" width="160" height="130" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="100" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">SOURCE FILES</text>
<text x="35" y="90" font-family="monospace" font-size="10" fill="currentColor">src/index.ts</text>
<text x="35" y="110" font-family="monospace" font-size="10" fill="currentColor">src/store.ts</text>
<text x="35" y="130" font-family="monospace" font-size="10" fill="currentColor">tsconfig.json</text>
<text x="100" y="155" text-anchor="middle" font-size="10" fill="#2563eb">10 Source Files</text>

<line x1="180" y1="105" x2="260" y2="105" stroke="#4f46e5" stroke-width="2"/>
<polygon points="260,100 275,105 260,110" fill="#4f46e5"/>

<rect x="275" y="75" width="90" height="60" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="320" y="100" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">COMPILER</text>
<text x="320" y="120" text-anchor="middle" font-family="monospace" font-size="11" fill="#854d0e">tsc -b</text>

<line x1="365" y1="90" x2="430" y2="40" stroke="#16a34a" stroke-width="2"/>
<line x1="365" y1="105" x2="430" y2="105" stroke="#2563eb" stroke-width="2"/>
<line x1="365" y1="120" x2="430" y2="170" stroke="#9333ea" stroke-width="2"/>

<rect x="430" y="15" width="190" height="45" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="525" y="32" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#166534">dist/index.js (2200 B)</text>
<text x="525" y="48" text-anchor="middle" font-size="9" fill="#166534">Minified runtime JS</text>

<rect x="430" y="80" width="190" height="45" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="525" y="97" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#1e40af">dist/index.d.ts (1400 B)</text>
<text x="525" y="113" text-anchor="middle" font-size="9" fill="#1e40af">Type declarations for npm</text>

<rect x="430" y="145" width="190" height="45" rx="6" fill="#faf5ff" stroke="#9333ea" stroke-width="1.5"/>
<text x="525" y="162" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#6b21a8">dist/index.js.map (1800 B)</text>
<text x="525" y="178" text-anchor="middle" font-size="9" fill="#6b21a8">Source map for debug</text>

<text x="320" y="220" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Total release artifacts: 5400 bytes emitted across 10 source files</text>
</svg>`,
      caption: {
        en: 'The compiler transforms 10 source files into 3 distinct artifacts: runtime JavaScript (2200 bytes), type definitions (.d.ts, 1400 bytes), and debugging maps (.js.map, 1800 bytes) totalling 5400 bytes.',
        bn: 'কম্পাইলার ১০টি সোর্স ফাইলকে ৩টি ভিন্ন আর্টিফ্যাক্টে রূপান্তর করে: রানটাইম জাভাস্ক্রিপ্ট (২২০০ বাইট), টাইপ ডেফিনিশন (.d.ts, ১৪০০ বাইট) এবং ডিবাগিং ম্যাপ (.js.map, ১৮০০ বাইট) যার মোট পরিমাণ ৫৪০০ বাইট।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'tsconfig.json',
          def: {
            en: 'The central configuration file in the root of a TypeScript project that specifies compiler options and root source files.',
            bn: 'টাইপস্ক্রিপ্ট প্রজেক্টের রুট ডিরেক্টরিতে থাকা মূল কনফিগারেশন ফাইল যা কম্পাইলার অপশন এবং সোর্স ফাইলের নিয়ম নির্ধারণ করে।',
          },
        },
        {
          term: 'Declaration file (.d.ts)',
          def: {
            en: 'A pure TypeScript type-definition file containing exported types and signatures with no executable runtime JavaScript code.',
            bn: 'একটি বিশুদ্ধ টাইপস্ক্রিপ্ট টাইপ-সংজ্ঞা ফাইল যা কোনো এক্সিকিউটেবল জাভাস্ক্রিপ্ট কোড ছাড়াই কেবল এক্সপোর্টেড টাইপ এবং সিগনেচার ধারণ করে।',
          },
        },
        {
          term: 'Source map (.js.map)',
          def: {
            en: 'A mapping file that allows browser developer tools and debuggers to map minified runtime JavaScript back to original TypeScript source lines.',
            bn: 'একটি ম্যাপিং ফাইল যা ব্রাউজার ডেভেলপার টুলস ও ডিবাগারকে মিনিফাইড রানটাইম জাভাস্ক্রিপ্ট থেকে মূল টাইপস্ক্রিপ্ট সোর্স লাইনে নিয়ে যেতে সাহায্য করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Professional software distribution standards', bn: 'কেন — প্রফেশনাল সফটওয়্যার ডিস্ট্রিবিউশন মানদণ্ড' },
    },
    {
      type: 'list',
      items: [
        { en: 'Catch production regressions in CI: strict tsconfig checks prevent merging code with implicit any or unsafe null dereferences.', bn: 'সিআই পাইপলাইনে রিগ্রেশন রোধ: কঠোর tsconfig পরীক্ষাগুলো ইমপ্লিসিট any বা অনিরাপদ নাল ব্যবহারের কোড মার্জ হওয়া প্রতিরোধ করে।' },
        { en: 'Frictionless library consumption: emitting .d.ts files ensures npm consumers get rich autocompletion and compile-time type verification.', bn: 'লাইব্রেরি ব্যবহারে স্বাচ্ছন্দ্য: .d.ts ফাইল সরবরাহ করায় এনপিএম প্যাকেজ ব্যবহারকারীরা চমৎকার অটোকমপ্লিশন ও টাইপ সুরক্ষা পায়।' },
        { en: 'Instant production debugging: source maps allow Sentry and Chrome DevTools to display the exact original TypeScript file and line number during crashes.', bn: 'দ্রুত প্রোডাকশন ডিবাগিং: সোর্স ম্যাপ সেন্ট্রি বা ব্রাউজার ডেভেলপার টুলসে ক্র্যাশের সময় হুবহু মূল টাইপস্ক্রিপ্ট ফাইল ও লাইন নম্বর প্রদর্শনে সহায়তা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring a production release in 4 steps', bn: 'HOW — ৪টি ধাপে প্রোডাকশন রিলিজ কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Enable strict mode', bn: '১. স্ট্রিক্ট মোড চালু' }, text: { en: 'Set "strict": true in tsconfig.json compilerOptions.', bn: 'tsconfig.json এর compilerOptions এ "strict": true সেট করুন।' } },
        { title: { en: '2. Configure declaration emit', bn: '২. ডিক্লারেশন এমিট নির্ধারণ' }, text: { en: 'Set "declaration": true and "declarationMap": true.', bn: '"declaration": true এবং "declarationMap": true সক্রিয় করুন।' } },
        { title: { en: '3. Generate source maps', bn: '৩. সোর্স ম্যাপ তৈরি' }, text: { en: 'Set "sourceMap": true to link emitted JS back to original TS files.', bn: 'চূড়ান্ত কোডের সাথে মূল ফাইলের সংযোগ রাখতে "sourceMap": true দিন।' } },
        { title: { en: '4. Package export fields', bn: '৪. প্যাকেজ এক্সপোর্ট ফিল্ড' }, text: { en: 'Declare "main", "module", and "types" paths in package.json.', bn: 'package.json এ "main", "module" এবং "types" পাথগুলো সঠিকভাবে উল্লেখ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'build_release_sim.ts',
      code: `interface BuildConfig {
  target: "ES2022";
  strict: boolean;
  declaration: boolean;
  sourceMap: boolean;
}

interface BuildMetrics {
  tsSourceFiles: number;
  jsBundleBytes: number;
  dtsBytes: number;
  mapBytes: number;
}

function computeBuildRelease(config: BuildConfig, filesCount: number): BuildMetrics {
  const avgSourceBytes = 400;
  const rawTotal = filesCount * avgSourceBytes;
  return {
    tsSourceFiles: filesCount,
    jsBundleBytes: Math.round(rawTotal * 0.55), // stripped types
    dtsBytes: Math.round(rawTotal * 0.35),      // declarations
    mapBytes: Math.round(rawTotal * 0.45),      // source maps
  };
}

const config: BuildConfig = {
  target: "ES2022",
  strict: true,
  declaration: true,
  sourceMap: true,
};

const metrics = computeBuildRelease(config, 10);
const totalDistBytes = metrics.jsBundleBytes + metrics.dtsBytes + metrics.mapBytes;

console.log("TypeScript Production Release Metrics:");
console.log("Source TS files compiled: " + metrics.tsSourceFiles);
console.log("Emitted JS bundle: " + metrics.jsBundleBytes + " bytes");
console.log("Emitted .d.ts declarations: " + metrics.dtsBytes + " bytes");
console.log("Emitted .js.map source map: " + metrics.mapBytes + " bytes");
console.log("Total dist bundle artifacts: " + totalDistBytes + " bytes");

// Output:
// TypeScript Production Release Metrics:
// Source TS files compiled: 10
// Emitted JS bundle: 2200 bytes
// Emitted .d.ts declarations: 1400 bytes
// Emitted .js.map source map: 1800 bytes
// Total dist bundle artifacts: 5400 bytes`,
      caption: {
        en: 'The simulation models compilation of 10 TypeScript source files: emitted JS takes 2200 bytes, declaration types take 1400 bytes, and source maps take 1800 bytes, totalling 5400 bytes of release artifacts.',
        bn: 'সিমুলেশনটি ১০টি টাইপস্ক্রিপ্ট সোর্স ফাইলের কম্পাইলেশন মডেল করে: জাভাস্ক্রিপ্ট নেয় ২২০০ বাইট, ডিক্লারেশন নেয় ১৪০০ বাইট এবং সোর্স ম্যাপ নেয় ১৮০০ বাইট, যার মোট পরিমাণ ৫৪০০ বাইট।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive release pipeline lab', bn: 'INSIDE — জীবন্ত রিলিজ পাইপলাইন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test the build metrics for compiling 10 source files into production distribution bundles. Notice how type erasure shrinks executable JS to 2200 bytes, while .d.ts declarations (1400 bytes) and source maps (1800 bytes) deliver full tooling metadata, summing to 5400 bytes total output.',
        bn: '১০টি সোর্স ফাইলকে প্রোডাকশন ডিস্ট্রিবিউশন বান্ডেলে কম্পাইল করার মেট্রিক্স পরীক্ষা করুন। লক্ষ্য করুন কীভাবে টাইপ ইরেজার এক্সিকিউটেবল জেএসকে ২২০০ বাইটে নামিয়ে আনে, আর .d.ts ডিক্লারেশন (১৪০০ বাইট) ও সোর্স ম্যাপ (১৮০০ বাইট) পূর্ণাঙ্গ টুলিং মেটাডেটা দেয়, যার মোট পরিমাণ ৫৪০০ বাইট।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Release pipeline lab (modify file count, press Run)', bn: 'Release pipeline lab (ফাইলের সংখ্যা পরিবর্তন করুন, Run)' },
      html: '<h3>TypeScript Release Pipeline Simulator</h3>\n<pre id="out"></pre>\n<p>Production artifacts breakdown.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const files = 10;\nconst js = 2200;\nconst dts = 1400;\nconst map = 1800;\nconst total = js + dts + map;\nconsole.log("Total dist bytes: " + total);\ndocument.getElementById("out").textContent = "Compiled: " + files + " files · JS: " + js + " B · Types: " + dts + " B · Maps: " + map + " B · Total: " + total + " B ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Production release principles', bn: 'ফলাফল — প্রোডাকশন রিলিজের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Multi-artifact delivery: ship minified JavaScript for browser execution alongside declaration files for developer IDE autocompletion.', bn: 'বহু-আর্টিফ্যাক্ট সরবরাহ: ব্রাউজারে চালানোর জন্য অপ্টিমাইজড জাভাস্ক্রিপ্ট এবং এডিটর অটোকমপ্লিশনের জন্য টাইপ ডিক্লারেশন ফাইল একসঙ্গে পাঠানো হয়।' },
        { en: 'Strict compiler guarantees: "strict": true prevents regressions before code reaches staging or production environments.', bn: 'কঠোর কম্পাইলার নিশ্চয়তা: "strict": true কোড স্টেজিং বা প্রোডাকশনে যাওয়ার আগেই যেকোনো রিগ্রেশন আটকে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common release misconfigurations', bn: 'ডিবাগ — রিলিজ কনফিগারেশনের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Forgetting types field in package.json', bn: 'package.json এ types ফিল্ড দিতে ভুলে যাওয়া' },
      text: {
        en: 'Publishing a package to npm with main: "./dist/index.js" without declaring types: "./dist/index.d.ts" leaves consumers unable to find your TypeScript definitions. Always specify the types field or use package.json exports mapping.',
        bn: 'package.json এ types: "./dist/index.d.ts" না দিয়ে কেবল main দিলে এনপিএম ব্যবহারকারীরা কোনো টাইপ খুঁজে পায় না। সর্বদা types ফিল্ড উল্লেখ করুন অথবা আধুনিক exports ম্যাপিং ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Speeding up builds with skipLibCheck', bn: 'skipLibCheck দিয়ে বিল্ডের গতি বৃদ্ধি' },
      text: {
        en: 'In large projects, setting "skipLibCheck": true in tsconfig.json skips type-checking .d.ts files inside node_modules, cutting compilation time by up to 50% without compromising your own source code safety.',
        bn: 'বড় প্রজেক্টে tsconfig.json এ "skipLibCheck": true সেট করলে node_modules এর ভেতরের .d.ts ফাইলগুলো যাচাই করা এড়িয়ে যায়, ফলে নিজের কোডের সুরক্ষা না হারিয়েও বিল্ড টাইম ৫০% পর্যন্ত কমে যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production release architectures', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল রিলিজ আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Next.js and Vite dev servers: utilize esbuild or SWC for sub-second development transpilations while running tsc --noEmit in CI for full type audit.', bn: 'Next.js ও Vite সার্ভার: দ্রুত ডেভেলপমেন্টের জন্য esbuild বা SWC ব্যবহার করে এবং পূর্ণাঙ্গ টাইপ অডিটের জন্য সিআই-তে tsc --noEmit চালায়।' },
        { en: 'Enterprise monorepos (Turborepo, Nx): leverage TypeScript project references (composite: true) to enable incremental builds across dozens of micro-packages.', bn: 'এন্টারপ্রাইজ মনোরেপো: টাইপস্ক্রিপ্ট প্রজেক্ট রেফারেন্স (composite: true) ব্যবহার করে ডজনখানেক প্যাকেজের মধ্যে দ্রুত ইনক্রিমেন্টাল বিল্ড সম্পন্ন করে।' },
        { en: 'Continuous deployment pipelines (GitHub Actions): enforce automated type gates that block pull requests if compiler errors or missing types are detected.', bn: 'সিআই/সিডি অটোমেশন (GitHub Actions): অটোমেটেড টাইপ গেট প্রয়োগ করে যাতে কোনো কম্পাইলার এরর থাকলে পুল রিকোয়েস্ট মার্জ হতে না পারে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'ts-rel-ex-1',
      kind: 'mcq',
      topic: 'dts-role',
      question: {
        en: 'What is the primary function of a TypeScript declaration file with a .d.ts extension in an npm package?',
        bn: 'একটি এনপিএম প্যাকেজে .d.ts এক্সটেনশনযুক্ত টাইপস্ক্রিপ্ট ডিক্লারেশন ফাইলের মূল কাজ কী?',
      },
      options: [
        {
          en: 'It provides type signatures and interface contracts for developer tooling without containing runtime executable code',
          bn: 'এটি রানটাইম এক্সিকিউটেবল কোড ছাড়াই ডেভেলপারদের টুলিংয়ের জন্য টাইপ সিগনেচার ও ইন্টারফেস চুক্তি সরবরাহ করে',
        },
        {
          en: 'It executes CSS stylesheet animations inside the browser',
          bn: 'এটি ব্রাউজারের ভেতরে সিএসএস স্টাইলশিট অ্যানিমেশন চালায়',
        },
        {
          en: 'It stores encrypted database passwords on the server',
          bn: 'এটি সার্ভারে এনক্রিপ্ট করা ডাটাবেস পাসওয়ার্ড সংরক্ষণ করে',
        },
        {
          en: 'It replaces all JavaScript files with WebAssembly',
          bn: 'এটি সমস্ত জাভাস্ক্রিপ্ট ফাইলকে ওয়েবঅ্যাসেম্বলি দিয়ে প্রতিস্থাপন করে',
        },
      ],
      answer: 0,
      hint: { en: '.d.ts files contain types only, no runtime code.', bn: '.d.ts ফাইলগুলোতে কেবল টাইপ থাকে, কোনো রানটাইম কোড থাকে না।' },
      explanation: {
        en: 'Declaration files (.d.ts) describe the shapes of modules and functions for the TypeScript compiler and IDE autocompletion.',
        bn: 'ডিক্লারেশন ফাইল (.d.ts) টাইপস্ক্রিপ্ট কম্পাইলার এবং এডিটর অটোকমপ্লিশনের জন্য মডিউল ও ফাংশনের আকার ও চুক্তির বর্ণনা দেয়।',
      },
    },
    {
      id: 'ts-rel-ex-2',
      kind: 'mcq',
      topic: 'build-metrics-calc',
      question: {
        en: 'In our code simulation, what was the total combined size of all 3 emitted artifacts (JS, .d.ts, and .js.map) from 10 source files?',
        bn: 'আমাদের কোড সিমুলেশনে ১০টি সোর্স ফাইল থেকে তৈরি ৩টি আর্টিফ্যাক্টের (জেএস, .d.ts এবং .js.map) মোট সম্মিলিত আকার কত ছিল?',
      },
      options: [
        { en: 'Total dist bundle artifacts: 5400 bytes', bn: 'মোট ডিস্ট্রিবিউশন আর্টিফ্যাক্ট: ৫৪০০ বাইট' },
        { en: 'Total dist bundle artifacts: 2000 bytes', bn: 'মোট ডিস্ট্রিবিউশন আর্টিফ্যাক্ট: ২০০০ বাইট' },
        { en: 'Total dist bundle artifacts: 10000 bytes', bn: 'মোট ডিস্ট্রিবিউশন আর্টিফ্যাক্ট: ১০০০০ বাইট' },
        { en: 'Total dist bundle artifacts: 500 bytes', bn: 'মোট ডিস্ট্রিবিউশন আর্টিফ্যাক্ট: ৫০০ বাইট' },
      ],
      answer: 0,
      hint: { en: '2200 JS + 1400 d.ts + 1800 map = 5400 bytes.', bn: '২২০০ জেএস + ১৪০০ d.ts + ১৮০০ ম্যাপ = ৫৪০০ বাইট।' },
      explanation: {
        en: 'Summing 2200 bytes of JS, 1400 bytes of declarations, and 1800 bytes of source maps yields 5400 total bytes.',
        bn: '২২০০ বাইট জেএস, ১৪০০ বাইট ডিক্লারেশন এবং ১৮০০ বাইট সোর্স ম্যাপ যোগ করলে মোট ৫৪০০ বাইট হয়।',
      },
    },
    {
      id: 'ts-rel-ex-3',
      kind: 'mcq',
      topic: 'strict-flag',
      question: {
        en: 'What does setting "strict": true in tsconfig.json do for a TypeScript project?',
        bn: 'tsconfig.json এ "strict": true সেট করলে একটি টাইপস্ক্রিপ্ট প্রজেক্টের জন্য কী ঘটে?',
      },
      options: [
        {
          en: 'It enables a comprehensive suite of strict type checking rules including noImplicitAny and strictNullChecks',
          bn: 'এটি noImplicitAny এবং strictNullChecks সহ একগুচ্ছ কঠোর টাইপ চেকিং নিয়ম সক্রিয় করে',
        },
        {
          en: 'It locks the git repository against any new commits',
          bn: 'এটি গিট রিপোজিটরিতে নতুন কোনো কমিট করা আটকে দেয়',
        },
        {
          en: 'It removes all comments from every TypeScript file on disk',
          bn: 'এটি ডিস্কের প্রতিটি টাইপস্ক্রিপ্ট ফাইল থেকে সমস্ত কমেন্ট মুছে ফেলে',
        },
        {
          en: 'It prevents third-party packages from being installed via npm',
          bn: 'এটি এনপিএম দিয়ে থার্ড-পার্টি প্যাকেজ ইনস্টল করা রোধ করে',
        },
      ],
      answer: 0,
      hint: { en: '"strict": true turns on all strict type checking flags.', bn: '"strict": true সমস্ত কঠোর টাইপ চেকিং ফ্ল্যাগ চালু করে।' },
      explanation: {
        en: '"strict": true is the recommended standard, activating strictNullChecks, noImplicitAny, and other vital type guarantees.',
        bn: '"strict": true হলো সুপারিশকৃত মানদণ্ড, যা strictNullChecks, noImplicitAny সহ বিভিন্ন গুরুত্বপূর্ণ টাইপ নিরাপত্তা সক্রিয় করে।',
      },
    },
    {
      id: 'ts-rel-ex-4',
      kind: 'predict',
      topic: 'skiplibcheck-flag',
      question: {
        en: 'Which tsconfig compiler option skips type-checking .d.ts files in dependencies to dramatically speed up build times?',
        bn: 'বিল্ডের গতি ব্যাপকভাবে বাড়াতে ডিপেনডেন্সির .d.ts ফাইলগুলো টাইপ-চেক করা এড়িয়ে যায় এমন tsconfig অপশন কোনটি?',
      },
      answer: 'skipLibCheck',
      accept: ['skipLibCheck', '"skipLibCheck"'],
      hint: { en: 'Written in camelCase: skip + Lib + Check.', bn: 'ক্যামেলকেসে লেখা: skip + Lib + Check।' },
      explanation: {
        en: 'Setting "skipLibCheck": true instructs tsc to skip checking declaration files inside dependencies, slashing build times.',
        bn: '"skipLibCheck": true দিলে tsc ডিপেনডেন্সির ডিক্লারেশন ফাইল পরীক্ষা এড়িয়ে যায়, যা বিল্ডের সময় ব্যাপকভাবে কমিয়ে দেয়।',
      },
    },
  ],
  quiz: {
    id: 'typed-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'ts-rel-q1',
        kind: 'mcq',
        topic: 'sourcemap-purpose',
        question: {
          en: 'What is the primary benefit of generating source maps (.js.map) during production TypeScript builds?',
          bn: 'প্রোডাকশন টাইপস্ক্রিপ্ট বিল্ডের সময় সোর্স ম্যাপ (.js.map) তৈরি করার মূল সুবিধা কী?',
        },
        options: [
          {
            en: 'They allow debuggers and error loggers to show original TypeScript source lines and filenames instead of minified JavaScript',
            bn: 'তারা মিনিফাইড জাভাস্ক্রিপ্টের বদলে ডিবাগার ও এরর লগিং টুলে আসল টাইপস্ক্রিপ্ট সোর্স লাইন ও ফাইলের নাম প্রদর্শন করতে সাহায্য করে',
          },
          {
            en: 'They reduce the size of the JavaScript bundle downloaded by web browsers',
            bn: 'তারা ওয়েব ব্রাউজারের ডাউনলোড করা জাভাস্ক্রিপ্ট ফাইলের আকার ছোট করে দেয়',
          },
          {
            en: 'They execute TypeScript code directly without transpilation',
            bn: 'তারা কোনো ট্রান্সপাইলেশন ছাড়াই টাইপস্ক্রিপ্ট কোড সরাসরি চালায়',
          },
          {
            en: 'They encrypt the source code to protect intellectual property',
            bn: 'তারা ইন্টেলেকচুয়াল প্রপার্টি সুরক্ষার জন্য সোর্স কোড এনক্রিপ্ট করে',
          },
        ],
        answer: 0,
        hint: { en: 'Source maps map minified JS back to TypeScript source.', bn: 'সোর্স ম্যাপ মিনিফাইড জেএসকে আসল টাইপস্ক্রিপ্ট সোর্সে রি-ম্যাপ করে।' },
        explanation: {
          en: 'Source maps map emitted JavaScript locations back to original TypeScript lines, making production debugging accurate.',
          bn: 'সোর্স ম্যাপ চূড়ান্ত জাভাস্ক্রিপ্টের লাইনগুলোকে আসল টাইপস্ক্রিপ্ট সোর্স লাইনের সাথে যুক্ত করে সঠিক প্রোডাকশন ডিবাগিং নিশ্চিত করে।',
        },
      },
      {
        id: 'ts-rel-q2',
        kind: 'mcq',
        topic: 'package-types-field',
        question: {
          en: 'Which field in package.json informs TypeScript consumers where to find the package declaration entry file?',
          bn: 'package.json এর কোন ফিল্ডটি টাইপস্ক্রিপ্ট গ্রাহকদের প্যাকেজের ডিক্লারেশন এন্ট্রি ফাইলের অবস্থান জানিয়ে দেয়?',
        },
        options: [
          { en: '"types" (or "typings")', bn: '"types" (অথবা "typings")' },
          { en: '"scripts"', bn: '"scripts"' },
          { en: '"keywords"', bn: '"keywords"' },
          { en: '"dependencies"', bn: '"dependencies"' },
        ],
        answer: 0,
        hint: { en: 'The field name is "types".', bn: 'ফিল্ডটির নাম হলো "types"।' },
        explanation: {
          en: 'The "types" property in package.json points directly to the root declaration file (such as "./dist/index.d.ts").',
          bn: 'package.json এর "types" প্রপার্টি সরাসরি মূল ডিক্লারেশন ফাইলের (যেমন "./dist/index.d.ts") দিকে নির্দেশ করে।',
        },
      },
      {
        id: 'ts-rel-q3',
        kind: 'mcq',
        topic: 'files-count-metrics',
        question: {
          en: 'In our code walkthrough, how many TypeScript source files were compiled into the release metrics output?',
          bn: 'আমাদের কোড আলোচনায় রিলিজ মেট্রিক্স আউটপুটে মোট কয়টি টাইপস্ক্রিপ্ট সোর্স ফাইল কম্পাইল করা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 10 source files', bn: 'ঠিক ১০টি সোর্স ফাইল' },
          { en: 'Exactly 50 source files', bn: 'ঠিক ৫০টি সোর্স ফাইল' },
          { en: 'Only 1 source file', bn: 'কেবল ১টি সোর্স ফাইল' },
          { en: 'Zero source files', bn: '০টি সোর্স ফাইল' },
        ],
        answer: 0,
        hint: { en: 'The simulation processed 10 source files.', bn: 'সিমুলেশনটিতে ১০টি সোর্স ফাইল প্রসেস করা হয়েছিল।' },
        explanation: {
          en: 'The benchmark function specifically evaluated filesCount = 10 TypeScript source files.',
          bn: 'বেঞ্চমার্ক ফাংশনটি সুনির্দিষ্টভাবে filesCount = 10 টি টাইপস্ক্রিপ্ট সোর্স ফাইল মূল্যায়ন করেছিল।',
        },
      },
      {
        id: 'ts-rel-q4',
        kind: 'predict',
        topic: 'tsc-command-recite',
        question: {
          en: 'What is the standard command-line executable name for the official TypeScript compiler?',
          bn: 'অফিসিয়াল টাইপস্ক্রিপ্ট কম্পাইলারের জন্য স্ট্যান্ডার্ড কমান্ড-লাইন এক্সিকিউটেবল নামটি কী?',
        },
        answer: 'tsc',
        accept: ['tsc', 'tsc compiler'],
        hint: { en: 'Short for TypeScript Compiler.', bn: 'TypeScript Compiler এর সংক্ষিপ্ত রূপ।' },
        explanation: {
          en: 'tsc is the command-line compiler for TypeScript, executing builds and type checks.',
          bn: 'tsc হলো টাইপস্ক্রিপ্টের কমান্ড-লাইন কম্পাইলার যা বিল্ড এবং টাইপ চেকিং পরিচালনা করে।',
        },
      },
    ],
  },
};
