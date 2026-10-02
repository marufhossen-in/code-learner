import type { Lesson } from '../../../lib/types';

export const TheScriptReleaseLesson: Lesson = {
  slug: 'the-script-release',
  tech: 'lang-javascript',
  title: {
    en: 'The Script Release — Modern Bundlers, Minification, and Production Artifacts',
    bn: 'স্ক্রিপ্ট রিলিজ — আধুনিক বান্ডলার, মিনিফিকেশন ও প্রোডাকশন রিলিজ',
  },
  summary: {
    en: 'An advanced production guide to JavaScript deployment: configure modern build pipelines (Vite, Rollup, esbuild), minify assets with AST transformers, generate secure production source maps, enforce bundle size budgets, and achieve tree-shaken, cache-busted releases.',
    bn: 'জাভাস্ক্রিপ্ট ডিপ্লয়মেন্টের একটি উন্নত প্রোডাকশন গাইড: আধুনিক বিল্ড পাইপলাইন (Vite, Rollup, esbuild) কনফিগারেশন, এএসটি ট্রান্সফর্মার দিয়ে মিনিফিকেশন, নিরাপদ সোর্স ম্যাপ তৈরি, বান্ডল সাইজ বাজেট এবং ক্যাশ-বাস্টিং রিলিজ প্রস্তুতি।',
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Compilation pipelines, minification, and release artifacts', bn: 'WHAT — কম্পাইলেশন পাইপলাইন, মিনিফিকেশন ও রিলিজ উপাদান' },
    },
    {
      type: 'para',
      text: {
        en: 'When you take modern JavaScript applications from local development into production environments, crafting optimized production releases is the final crucial engineering discipline. Modern web architectures do not ship raw development files to users; instead, build tools such as Vite, Rollup, and esbuild transform your modular source tree into optimized bundles. During this release pipeline, compilers strip unused dead code, transform high-level language constructs into backwards-compatible syntax, and compress identifiers through minification. Generating production source maps enables pinpoint error debugging in monitoring systems without exposing readable source code to clients. Mastering this pipeline ensures your applications deliver minimal latency and rock-solid reliability at scale.',
        bn: 'যখন আপনি স্থানীয় ডেভেলপমেন্ট থেকে প্রোডাকশন পরিবেশে জাভাস্ক্রিপ্ট অ্যাপ্লিকেশন স্থানান্তর করেন, তখন অপ্টিমাইজড প্রোডাকশন রিলিজ তৈরি করা একটি অত্যন্ত গুরুত্বপূর্ণ ইঞ্জিনিয়ারিং ধাপ। আধুনিক ওয়েব আর্কিটেকচার কখনোই সরাসরি অপরিশোধিত ডেভেলপমেন্ট ফাইল ব্যবহারকারীদের কাছে পাঠায় না; বরং Vite, Rollup বা esbuild এর মতো বিল্ড টুলগুলো আপনার সম্পূর্ণ মডিউলার সোর্স কোডকে অপ্টিমাইজড বান্ডলে রূপান্তর করে। এই রিলিজ পাইপলাইনে কম্পাইলার অব্যবহৃত কোড ছেঁটে ফেলে, আধুনিক সিনট্যাক্সকে ব্যাকওয়ার্ড-কম্প্যাটিবল করে এবং মিনিফিকেশনের মাধ্যমে ফাইলের আকার সংকুচিত করে। প্রোডাকশন সোর্স ম্যাপ তৈরি করলে ক্লায়েন্টের কাছে মূল কোড প্রকাশ না করেই এরর মনিটরিং সিস্টেমে সুনির্দিষ্ট লাইন শনাক্ত করা সম্ভব হয়। এই পাইপলাইন আয়ত্ত করা অ্যাপ্লিকেশনকে দ্রুততম গতি ও সর্বোচ্চ নির্ভরযোগ্যতা প্রদান করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Production pipeline compressing raw source to hashed minified artifacts', bn: 'র সোর্স কোড সংকুচিত করে হ্যাশযুক্ত মিনিফাইড রিলিজ তৈরির পাইপলাইন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript production build pipeline diagram">
<rect x="25" y="40" width="150" height="135" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="100" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">RAW SOURCE (240KB)</text>
<text x="35" y="95" font-family="monospace" font-size="9" fill="currentColor">src/index.js</text>
<text x="35" y="115" font-family="monospace" font-size="9" fill="currentColor">src/utils.js</text>
<text x="35" y="135" font-family="monospace" font-size="9" fill="currentColor">src/components.js</text>
<text x="35" y="158" font-size="9" fill="#2563eb">Unminified dev code</text>

<line x1="175" y1="107" x2="235" y2="107" stroke="#4f46e5" stroke-width="2"/>
<polygon points="235,103 245,107 235,111" fill="#4f46e5"/>

<rect x="245" y="40" width="165" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="327" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">VITE / ROLLUP BUILD</text>
<text x="255" y="95" font-size="9" fill="#166534">1. Tree-shaking</text>
<text x="255" y="115" font-size="9" fill="#166534">2. Minify: 160KB saved</text>
<text x="255" y="135" font-size="9" fill="#166534">3. Content hash injection</text>
<text x="255" y="155" font-size="9" fill="#166534">4. Source map (.map)</text>

<line x1="410" y1="107" x2="470" y2="107" stroke="#16a34a" stroke-width="2"/>
<polygon points="470,103 480,107 470,111" fill="#16a34a"/>

<rect x="480" y="40" width="140" height="135" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="550" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">RELEASE (3 FILES)</text>
<text x="490" y="92" font-family="monospace" font-size="8" fill="currentColor">app.8f4c.js (80KB)</text>
<text x="490" y="112" font-family="monospace" font-size="8" fill="currentColor">app.8f4c.js.map</text>
<text x="490" y="132" font-family="monospace" font-size="8" fill="currentColor">style.4e2a.css</text>
<text x="490" y="155" font-size="8" fill="#166534">Gzip: 24KB (104 total)</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Compilers transform raw development source into minified, hashed production assets</text>
</svg>`,
      caption: {
        en: 'The build pipeline compresses 240KB of raw development source down to an 80KB minified asset (24KB gzipped) across 3 build artifacts, achieving a 160KB saving.',
        bn: 'বিল্ড পাইপলাইনটি ২৪০KB র ডেভেলপমেন্ট কোডকে সংকুচিত করে ৩টি আর্টফ্যাক্টে ৮০KB মিনিফাইড ফাইলে (২৪KB জিজিপ) পরিণত করে মোট ১৬০KB সাশ্রয় নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Minification',
          def: {
            en: 'The process of removing unnecessary characters (whitespace, comments) and shortening variable names without altering functionality.',
            bn: 'ফাংশনাল কোনো পরিবর্তন না করে ফাইলের আকার কমাতে অপ্রয়োজনীয় অক্ষর (হোয়াইটস্পেস, কমেন্ট) মোছা এবং ভেরিয়েবলের নাম ছোট করার প্রক্রিয়া।',
          },
        },
        {
          term: 'Source map',
          def: {
            en: 'A JSON-formatted mapping file that links minified, compiled production code back to its original authored source lines.',
            bn: 'একটি জেসন ফরম্যাটের ফাইল যা মিনিফাইড কম্পাইল করা কোডকে তার মূল রচিত সোর্স কোড লাইনের সাথে মানচিত্রের মতো সংযুক্ত করে।',
          },
        },
        {
          term: 'Content hashing',
          def: {
            en: 'Appending a cryptographic digest of file contents to release filenames (e.g. app.9c1b.js) to enable permanent HTTP caching.',
            bn: 'স্থায়ী এইচটিটিপি ব্রাউজার ক্যাশিংয়ের জন্য ফাইলের নামের সাথে কনটেন্টের ক্রিপ্টোগ্রাফিক হ্যাশ যুক্ত করার পদ্ধতি (যেমন app.9c1b.js)।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Performance budgets and production reliability', bn: 'কেন — পারফরম্যান্স বাজেট ও প্রোডাকশন নির্ভরযোগ্যতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Instant time-to-interactive: reducing initial bundle weight shrinks parse and execution latency on low-end mobile devices.', bn: 'দ্রুততম ইন্টারঅ্যাক্টিভ সময়: প্রাথমিক বান্ডল সাইজ কমলে সাধারণ মোবাইল ডিভাইসে পার্সিং এবং এক্সিকিউশনের সময় অনেকটাই কমে আসে।' },
        { en: 'Impenetrable caching: content hashing ensures clients never download stale cached files when bugs are patched in new releases.', bn: 'নিখুঁত ক্যাশিং: কনটেন্ট হ্যাশিং নিশ্চিত করে যে নতুন রিলিজ দিলে ব্রাউজার কখনো পুরনো ক্যাশ করা ফাইল ব্যবহার করবে না।' },
        { en: 'Sentry and Datadog traceability: private source maps let production crash reporters decode obfuscated stack traces instantly.', bn: 'সঠিক স্ট্যাক ট্রেস ডিকোড: প্রাইভেট সোর্স ম্যাপ ব্যবহার করে সেন্ট্রি বা ডেটাডগে মিনিফাইড কোডের ক্র্যাশ আসল লাইনে শনাক্ত করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Packaging releases in 4 steps', bn: 'HOW — ৪টি ধাপে প্রোডাকশন রিলিজ প্রস্তুত' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Configure Vite/Rollup', bn: '১. বান্ডলার কনফিগারেশন' }, text: { en: 'Define entry points and target browser compatibility matrix.', bn: 'এন্ট্রি পয়েন্ট এবং ব্রাউজার সামঞ্জস্য তালিকা নির্ধারণ করুন।' } },
        { title: { en: '2. Execute tree-shaking', bn: '২. ট্রি-শেকিং পরিচালনা' }, text: { en: 'Let the bundler eliminate unreferenced exports automatically.', bn: 'বান্ডলারকে অব্যবহৃত কোডগুলো স্বয়ংক্রিয়ভাবে বাদ দিতে দিন।' } },
        { title: { en: '3. Minify and hash', bn: '৩. মিনিফিকেশন ও হ্যাশিং' }, text: { en: 'Compress identifiers and inject cryptographic content hashes.', bn: 'ভেরিয়েবলের নাম ছোট করুন এবং ক্রিপ্টোগ্রাফিক হ্যাশ যুক্ত করুন।' } },
        { title: { en: '4. Upload source maps', bn: '৪. সোর্স ম্যাপ আপলোড' }, text: { en: 'Push source map artifacts to monitoring tools and audit budgets.', bn: 'মনিটরিং সিস্টেমে সোর্স ম্যাপ আপলোড করে সাইজ বাজেট পরীক্ষা করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'production_release_sim.js',
      code: `// Simulated production asset build and compression pipeline
const rawSourceBytes = 240; // KB
const minifiedBytes = 80;   // KB after minification
const gzippedBytes = 24;    // KB after gzip compression

const totalReductionBytes = rawSourceBytes - minifiedBytes; // 160 KB saved
const buildArtifactsCount = 3; // main.js, vendor.js, app.css
const finalMetricSum = minifiedBytes + gzippedBytes; // 104

console.log("JavaScript Production Build Pipeline Simulation:");
console.log("Raw source: " + rawSourceBytes + "KB -> Minified: " + minifiedBytes + "KB -> Gzip: " + gzippedBytes + "KB");
console.log("Minification savings: " + totalReductionBytes + "KB across " + buildArtifactsCount + " artifacts");
console.log("Combined production footprint: " + finalMetricSum + "KB across 2 compressed stages");

// Output:
// JavaScript Production Build Pipeline Simulation:
// Raw source: 240KB -> Minified: 80KB -> Gzip: 24KB
// Minification savings: 160KB across 3 artifacts
// Combined production footprint: 104KB across 2 compressed stages`,
      caption: {
        en: 'The simulation logs a raw 240KB codebase reduced to 80KB minified and 24KB gzipped, saving 160KB across 3 artifacts for a combined 104KB compressed footprint across 2 stages.',
        bn: 'সিমুলেশনটি ২৪০KB সোর্স কোডকে ৮০KB মিনিফাইড এবং ২৪KB জিজিপে সংকুচিত করে ৩টি আর্টফ্যাক্টে ১৬০KB সাশ্রয় এবং ২টি ধাপে মোট ১০৪KB ফুটপ্রিন্ট নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive build pipeline lab', bn: 'INSIDE — জীবন্ত বিল্ড পাইপলাইন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect production bundling metrics. Compressing 240KB of raw development source yields an 80KB minified asset that further condenses to 24KB under gzip. This achieves 160KB in direct savings across 3 artifacts, generating a combined 104KB footprint across 2 compressed stages. Notice how build pipelines transform and shrink assets for fast distribution.',
        bn: 'প্রোডাকশন বান্ডলিং মেট্রিক্স পরীক্ষা করুন। ২৪০KB সোর্স কোড সংকুচিত হয়ে ৮০KB মিনিফাইড এবং জিজিপে ২৪KB তে পরিণত হয়। এটি ৩টি আর্টফ্যাক্টে সরাসরি ১৬০KB সাশ্রয় করে এবং ২টি সংকুচিত ধাপে মোট ১০৪KB ফুটপ্রিন্ট তৈরি করে। লক্ষ্য করুন কীভাবে বিল্ড পাইপলাইন দ্রুত বিতরণের জন্য ফাইলগুলোকে প্রস্তুত করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Release lab (audit build sizes, press Run)', bn: 'Release lab (বিল্ড সাইজ নিরীক্ষা, Run)' },
      html: '<h3>JavaScript Production Release Pipeline</h3>\n<pre id="out"></pre>\n<p>Minification and compression metrics.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const raw = 240;\nconst min = 80;\nconst gz = 24;\nconst saved = raw - min;\nconst comb = min + gz;\nconsole.log("comb: " + comb);\ndocument.getElementById("out").textContent = "Raw: " + raw + "KB · Minified: " + min + "KB · Gzip: " + gz + "KB · Saved: " + saved + "KB · Total Footprint: " + comb + "KB (3 files ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Production release rules', bn: 'ফলাফল — প্রোডাকশন রিলিজের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never publish source maps publicly: host source maps on a private error-reporting server or VPN to protect proprietary logic.', bn: 'কখনো সর্বজনীনভাবে সোর্স ম্যাপ প্রকাশ করবেন না: গোপনীয় কোড রক্ষা করতে সোর্স ম্যাপ অভ্যন্তরীণ সেন্ট্রি বা ভিপিএনে সংরক্ষণ করুন।' },
        { en: 'Set explicit performance budgets: configure CI pipelines to fail if production JavaScript bundles exceed strict size limits.', bn: 'সুনির্দিষ্ট পারফরম্যান্স বাজেট নির্ধারণ করুন: প্রোডাকশন বান্ডল সাইজ সীমা অতিক্রম করলে সিআই পাইপলাইন ফেইল করানোর ব্যবস্থা রাখুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common release pitfalls', bn: 'ডিবাগ — রিলিজ তৈরির সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental inclusion of devDependencies in client bundles', bn: 'ক্লায়েন্ট বান্ডলে অসাবধানতাবশত devDependencies যুক্ত হওয়া' },
      text: {
        en: 'Importing testing utilities (such as vitest or jest-mock) inside production source files causes bundlers to bundle thousands of test helper lines into the final bundle. Verify dependencies with npx vite-bundle-visualizer before shipping.',
        bn: 'প্রোডাকশন সোর্স ফাইলে টেস্ট হেল্পার (যেমন vitest) ইমপোর্ট করলে হাজার হাজার অপ্রয়োজনীয় লাইন মূল বান্ডলে ঢুকে পড়ে। রিলিজের পূর্বে npx vite-bundle-visualizer দিয়ে বান্ডল যাচাই করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Aggressive browser caching via immutable Cache-Control', bn: 'অপরিবর্তনীয় Cache-Control দিয়ে দ্রুততম ব্রাউজার ক্যাশিং' },
      text: {
        en: 'Because content-hashed files (such as main.c7a8.js) have unique names for every build, web servers can safely serve them with Cache-Control: max-age=31536000, immutable, completely eliminating repeat HTTP requests for returning visitors.',
        bn: 'যেহেতু হ্যাশযুক্ত ফাইলের (যেমন main.c7a8.js) নাম প্রতিটি পরিবর্তনের সাথে বদলে যায়, তাই ওয়েব সার্ভারে Cache-Control: max-age=31536000, immutable হেডার দিয়ে এক বছরের জন্য ক্যাশ করা নিরাপদ।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production release architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল রিলিজ সিস্টেম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Cloudflare Pages and Vercel: globally distributed CDNs serving pre-compressed Brotli JavaScript assets with instantaneous edge cache invalidation.', bn: 'Cloudflare Pages ও Vercel: বিশ্বব্যাপী ব্রোটলি সংকুচিত জাভাস্ক্রিপ্ট বিতরণ করে এজ ক্যাশ দিয়ে তাৎক্ষণিক লোড নিশ্চিত করে।' },
        { en: 'Rollbar and Sentry integration: CI deployment hooks upload production source maps during build pipelines, deleting them from client dist folders.', bn: 'Sentry ইন্টিগ্রেশন: সিআই বিল্ড পাইপলাইনে সোর্স ম্যাপ আপলোড করে ক্লায়েন্ট ফাইল থেকে তা মুছে ফেলে কোড গোপন রাখে।' },
        { en: 'Lighthouse CI audits: automatic performance scoring checks bundle sizes and Total Blocking Time (TBT) on every pull request.', bn: 'Lighthouse সিআই অডিট: প্রতিটি পুল রিকোয়েস্টে স্বয়ংক্রিয়ভাবে বান্ডল সাইজ এবং ব্লকিং টাইম নিরীক্ষা করে পারফরম্যান্স বজায় রাখে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'js-rel-ex-1',
      kind: 'mcq',
      topic: 'source-map-purpose',
      question: {
        en: 'What primary role does a production source map (.map file) fulfill in a modern JavaScript web deployment?',
        bn: 'আধুনিক জাভাস্ক্রিপ্ট ওয়েব ডিপ্লয়মেন্টে প্রোডাকশন সোর্স ম্যাপ (.map ফাইল) কোন মূল দায়িত্বটি পালন করে?',
      },
      options: [
        {
          en: 'It maps minified, obfuscated production stack traces back to original readable source code lines during error debugging',
          bn: 'এটি এরর ডিবাগিংয়ের সময় মিনিফাইড ও সংকুচিত স্ট্যাক ট্রেসকে মূল পঠনযোগ্য সোর্স কোড লাইনের সাথে মানচিত্রের মতো সংযুক্ত করে',
        },
        {
          en: 'It doubles the physical battery life of the client laptop',
          bn: 'এটি ক্লায়েন্টের ল্যাপটপের ব্যাটারি ব্যাকআপ দ্বিগুণ করে দেয়',
        },
        {
          en: 'It automatically translates English comments into Bengali',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ইংরেজি কমেন্টগুলোকে বাংলায় অনুবাদ করে',
        },
        {
          en: 'It compiles JavaScript code into CSS stylesheets',
          bn: 'এটি জাভাস্ক্রিপ্ট কোডকে সিএসএস স্টাইলশিটে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'Source maps map compiled code back to source lines.', bn: 'সোর্স ম্যাপ কম্পাইল করা কোডকে আসল লাইনে সংযুক্ত করে।' },
      explanation: {
        en: 'Source maps let error monitoring tools translate minified production errors into the exact source file and line where the error occurred.',
        bn: 'সোর্স ম্যাপ এরর মনিটরিং টুলকে মিনিফাইড কোডের ভুলকে মূল সোর্স ফাইলের সুনির্দিষ্ট লাইনে চিহ্নিত করতে সাহায্য করে।',
      },
    },
    {
      id: 'js-rel-ex-2',
      kind: 'mcq',
      topic: 'bundle-savings-calculation',
      question: {
        en: 'In our code walkthrough, how many kilobytes were saved through minification from the 240KB raw source, and what was the combined footprint across the 2 compressed stages?',
        bn: 'আমাদের কোড আলোচনায় ২৪০KB সোর্স কোড থেকে মিনিফিকেশনের মাধ্যমে কত কিলোবাইট সাশ্রয় হয়েছিল এবং ২টি সংকুচিত ধাপে মোট ফুটপ্রিন্ট কত ছিল?',
      },
      options: [
        { en: '160KB saved across 3 artifacts; combined footprint = 104KB across 2 compressed stages', bn: '৩টি আর্টফ্যাক্টে ১৬০KB সাশ্রয়; ২টি সংকুচিত ধাপে মোট ফুটপ্রিন্ট = ১০৪KB' },
        { en: '10KB saved across 1 artifact; combined footprint = 200KB across 2 compressed stages', bn: '১টি আর্টফ্যাক্টে ১০KB সাশ্রয়; ২টি সংকুচিত ধাপে মোট ফুটপ্রিন্ট = ২০০KB' },
        { en: '50KB saved across 2 artifacts; combined footprint = 500KB across 2 compressed stages', bn: '২টি আর্টফ্যাক্টে ৫০KB সাশ্রয়; ২টি সংকুচিত ধাপে মোট ফুটপ্রিন্ট = ৫০০KB' },
        { en: '0KB saved across 0 artifacts; combined footprint = 0KB across 0 compressed stages', bn: '০টি আর্টফ্যাক্টে ০KB সাশ্রয়; ০টি সংকুচিত ধাপে মোট ফুটপ্রিন্ট = ০KB' },
      ],
      answer: 0,
      hint: { en: '240 - 80 = 160KB; 80 + 24 = 104KB.', bn: '২৪০ - ৮০ = ১৬০KB; ৮০ + ২৪ = ১০৪KB।' },
      explanation: {
        en: 'The simulation subtracted 80KB from 240KB to save 160KB, summing 80KB minified + 24KB gzipped = 104KB across 2 stages.',
        bn: 'সিমুলেশনটিতে ২৪০KB থেকে ৮০KB বাদ দিয়ে ১৬০KB সাশ্রয় এবং ৮০KB মিনিফাইড + ২৪KB জিজিপ = ২টি ধাপে মোট ১০৪KB ফুটপ্রিন্ট হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'js-rel-ex-3',
      kind: 'mcq',
      topic: 'content-hashing-benefit',
      question: {
        en: 'Why do modern bundlers inject cryptographic content hashes into production filenames (e.g. main.8f4c2b.js)?',
        bn: 'আধুনিক বান্ডলারগুলো প্রোডাকশন ফাইলের নামের সাথে কেন ক্রিপ্টোগ্রাফিক কনটেন্ট হ্যাশ যুক্ত করে (যেমন main.8f4c2b.js)?',
      },
      options: [
        {
          en: 'It allows web servers to declare immutable HTTP caching while guaranteeing users receive new files whenever code changes',
          bn: 'এটি ওয়েব সার্ভারকে স্থায়ী এইচটিটিপি ক্যাশিং ব্যবহারের সুযোগ দেয় এবং কোড পরিবর্তন হলে ব্যবহারকারী যাতে নতুন ফাইল পায় তা নিশ্চিত করে',
        },
        {
          en: 'It encrypts the JavaScript code against virus scanners',
          bn: 'এটি ভাইরাস স্ক্যানারের হাত থেকে কোড এনক্রিপ্ট করে রাখে',
        },
        {
          en: 'It reduces the cost of electricity needed to run the server',
          bn: 'এটি সার্ভার চালানোর জন্য প্রয়োজনীয় বিদ্যুৎ খরচ কমায়',
        },
        {
          en: 'It converts JavaScript functions into C++ binary files',
          bn: 'এটি জাভাস্ক্রিপ্ট ফাংশনকে সি++ বাইনারি ফাইলে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'Content hashing solves cache busting.', bn: 'কনটেন্ট হ্যাশিং ক্যাশ বাস্টিং সমস্যার নিখুঁত সমাধান দেয়।' },
      explanation: {
        en: 'Content hashes change only when the file contents change, enabling aggressive browser caching without risk of stale assets.',
        bn: 'কনটেন্ট হ্যাশ কেবল ফাইলের ভেতরের পরিবর্তন হলেই বদলে যায়, ফলে পুরনো ফাইলের ভয় ছাড়াই দীর্ঘমেয়াদী ক্যাশিং সম্ভব হয়।',
      },
    },
    {
      id: 'js-rel-ex-4',
      kind: 'predict',
      topic: 'http-cache-header-directive',
      question: {
        en: 'What directive can be added to the Cache-Control header for content-hashed assets to indicate the file will never change (e.g. immutable)?',
        bn: 'কনটেন্ট-হ্যাশযুক্ত ফাইলের ক্ষেত্রে ফাইলটি আর কখনো পরিবর্তিত হবে না নির্দেশ করতে Cache-Control হেডারে কোন নির্দেশিকাটি যোগ করা যায় (যেমন immutable)?',
      },
      answer: 'immutable',
      accept: ['immutable', 'Immutable'],
      hint: { en: 'Cache-Control: max-age=31536000, ...', bn: 'Cache-Control: max-age=31536000, ...' },
      explanation: {
        en: 'The immutable directive tells browsers that the response body will not be modified over time, avoiding conditional revalidations.',
        bn: 'immutable নির্দেশিকা ব্রাউজারকে জানিয়ে দেয় যে ফাইলটির কনটেন্ট ভবিষ্যতে বদলাবে না, ফলে বাড়তি রিকোয়েস্ট বেঁচে যায়।',
      },
    },
  ],
  quiz: {
    id: 'script-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'js-rel-q1',
        kind: 'mcq',
        topic: 'minification-process',
        question: {
          en: 'What transformations are performed by modern minifiers like esbuild or Terser during a JavaScript production build?',
          bn: 'জাভাস্ক্রিপ্ট প্রোডাকশন বিল্ডের সময় esbuild বা Terser এর মতো আধুনিক মিনিফায়ারগুলো কী ধরনের পরিবর্তন ঘটায়?',
        },
        options: [
          {
            en: 'They strip comments and whitespace, mangle local identifier names to short tokens, and eliminate unreachable dead code',
            bn: 'তারা কমেন্ট ও হোয়াইটস্পেস মুছে ফেলে, ভেরিয়েবলের নাম ছোট টোকেনে রূপান্তর করে এবং অপ্রয়োজনীয় কোড ছেঁটে ফেলে',
          },
          {
            en: 'They delete all semicolons and curly brackets to break parsing',
            bn: 'তারা সমস্ত সেমিকোলন ও ব্র্যাকেট মুছে ফেলে কোড অচল করে দেয়',
          },
          {
            en: 'They convert JavaScript variables into SQL database tables',
            bn: 'তারা জাভাস্ক্রিপ্ট ভেরিয়েবলগুলোকে এসকিউএল টেবিলে রূপান্তর করে',
          },
          {
            en: 'They add audio narration tracks to every function',
            bn: 'তারা প্রতিটি ফাংশনে অডিও ট্র্যাক যুক্ত করে',
          },
        ],
        answer: 0,
        hint: { en: 'Minification reduces file size without changing logic.', bn: 'মিনিফিকেশন কোনো লজিক না বদলে ফাইলের আকার কমিয়ে দেয়।' },
        explanation: {
          en: 'Minification removes comments and formatting while shortening variable identifiers to shrink payload sizes.',
          bn: 'মিনিফিকেশন কমেন্ট ও ফরম্যাটিং মুছে এবং ভেরিয়েবলের নাম ছোট করে ফাইলের ওজন বহুলাংশে হ্রাস করে।',
        },
      },
      {
        id: 'js-rel-q2',
        kind: 'mcq',
        topic: 'metric-sum-verify',
        question: {
          en: 'In our code walkthrough, what was the combined footprint computed from minifiedBytes (80) plus gzippedBytes (24)?',
          bn: 'আমাদের কোড আলোচনায় minifiedBytes (৮০) এবং gzippedBytes (২৪) যোগ করে মোট কত ফুটপ্রিন্ট হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '104KB across 2 compressed stages', bn: '২টি সংকুচিত ধাপে ১০৪KB' },
          { en: '200KB across 2 compressed stages', bn: '২টি সংকুচিত ধাপে ২০০KB' },
          { en: '50KB across 1 compressed stage', bn: '১টি সংকুচিত ধাপে ৫০KB' },
          { en: '0KB across 0 compressed stages', bn: '০টি সংকুচিত ধাপে ০KB' },
        ],
        answer: 0,
        hint: { en: '80 + 24 = 104.', bn: '৮০ + ২৪ = ১০৪।' },
        explanation: {
          en: 'The simulation resolved minifiedBytes (80KB) and gzippedBytes (24KB), producing a combined footprint of 104KB across 2 stages.',
          bn: 'সিমুলেশনটি ৮০KB মিনিফাইড এবং ২৪KB জিজিপ যোগ করে ২টি ধাপে মোট ১০৪KB ফুটপ্রিন্ট হিসাব করেছিল।',
        },
      },
      {
        id: 'js-rel-q3',
        kind: 'mcq',
        topic: 'source-map-security',
        question: {
          en: 'Why is publishing production source maps (.map files) to a publicly accessible web server discouraged in commercial applications?',
          bn: 'বাণিজ্যিক ওয়েবসাইটে সর্বজনীনভাবে প্রোডাকশন সোর্স ম্যাপ (.map ফাইল) হোস্ট করা কেন অনুৎসাহিত করা হয়?',
        },
        options: [
          {
            en: 'Public source maps allow competitors and reverse-engineers to reconstruct the exact proprietary source code in developer tools',
            bn: 'সর্বজনীন সোর্স ম্যাপ যেকোনো প্রতিযোগী বা আক্রমণকারীকে ব্রাউজার ডেভটুলসে মূল রচিত গোপনীয় কোড দেখার সুযোগ করে দেয়',
          },
          {
            en: 'Source maps cause the server hard drive to overheat',
            bn: 'সোর্স ম্যাপের কারণে সার্ভারের হার্ডড্রাইভ অতিরিক্ত গরম হয়ে যায়',
          },
          {
            en: 'Browsers refuse to render HTML if a source map is found',
            bn: 'সোর্স ম্যাপ পাওয়া গেলে ব্রাউজার এইচটিএমএল রেন্ডার করতে অস্বীকৃতি জানায়',
          },
          {
            en: 'Source maps consume 90% of user cellular data automatically',
            bn: 'সোর্স ম্যাপ ব্যবহারকারীর ৯০% মোবাইল ডেটা খরচ করে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'Keep source maps private to protect source code.', bn: 'কোডের গোপনীয়তা রক্ষায় সোর্স ম্যাপ ব্যক্তিগত রাখুন।' },
        explanation: {
          en: 'Exposing source maps makes authored proprietary code easily readable in browser DevTools; upload them privately to error services.',
          bn: 'সোর্স ম্যাপ উন্মুক্ত থাকলে ব্রাউজারে মূল সোর্স কোড সহজেই পড়া যায়; তাই এগুলো কেবল প্রাইভেট সার্ভারে আপলোড করা উচিত।',
        },
      },
      {
        id: 'js-rel-q4',
        kind: 'predict',
        topic: 'modern-dev-bundler',
        question: {
          en: 'What blazing-fast modern build tool created by Evan You powers development via native ES modules and bundles with Rollup (e.g. Vite)?',
          bn: 'Evan You এর তৈরি কোন আধুনিক অতি-দ্রুতগতির বিল্ড টুলটি নেটিভ ইএস মডিউলে ডেভেলপমেন্ট পরিচালনা করে এবং Rollup দিয়ে প্রোডাকশন বান্ডল তৈরি করে (যেমন Vite)?',
        },
        answer: 'Vite',
        accept: ['Vite', 'vite'],
        hint: { en: 'French word for "fast".', bn: 'ফরাসি শব্দ যার অর্থ "দ্রুত"।' },
        explanation: {
          en: 'Vite leverages native browser ESM during development for instant server start, bundling with Rollup for production.',
          bn: 'Vite দ্রুত ডেভ স্টার্টের জন্য ব্রাউজারের নেটিভ ইএসএম এবং প্রোডাকশন বান্ডলিংয়ের জন্য Rollup ব্যবহার করে।',
        },
      },
    ],
  },
};
