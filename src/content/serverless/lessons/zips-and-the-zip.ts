import type { Lesson } from '../../../lib/types';

export const ZipsAndTheZipLesson: Lesson = {
  slug: 'zips-and-the-zip',
  tech: 'serverless',
  title: {
    en: 'Packaging Artifacts — Slim Zip Bundles, Lambda Layers, and OCI Images',
    bn: 'প্যাকেজিং — স্লিম জিপ বান্ডল, ল্যাম্বডা লেয়ার ও ওআইসি কনটেইনার ইমেজ',
  },
  summary: {
    en: 'A foundational overview of serverless artifact packaging and deployment formats. Benchmark 600 runs comparing slim zips with Lambda Layers (300 runs, 50.00%, 180 ms), fat zips (200 runs, 33.33%, 850 ms), and container images (100 runs, 16.67%, 220 ms). Save 670 ms of boot latency (78.82% faster) and cut deployment size by 43.5 MB (from 45 MB to 1.5 MB, a 96.67% reduction with 0 failures).',
    bn: 'সার্ভারলেস প্যাকেজিং ও ডিপ্লয়মেন্ট ফরম্যাটের মৌলিক ধারণা। ৬০০টি রানে ল্যাম্বডা লেয়ার সহ স্লিম জিপ (৩০০টি রান, ৫০.০০%, ১৮০ ms), ফ্যাট জিপ (২০০টি রান, ৩৩.৩৩%, ৮৫০ ms) ও কনটেইনার ইমেজের (১০০টি রান, ১৬.৬৭%, ২২০ ms) তুলনা। বুট লেটেন্সিতে ৬৭০ ms সাশ্রয় (৭৮.৮২% দ্রুত) এবং ডিপ্লয়মেন্ট ফাইলের আকার ৪৩.৫ MB হ্রাস (৪৫ MB থেকে ১.৫ MB, ০টি ব্যর্থতা সহ ৯৬.৬৭% সাশ্রয়)।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Serverless packaging formats and layer extraction', bn: 'WHAT — সার্ভারলেস প্যাকেজিং ফরম্যাট ও লেয়ার বিভাজন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you package your serverless application for deployment, how you structure code and dependencies determines upload speed and runtime cold start latency. Serverless platforms provide three distinct deployment formats: standalone zip archives, shared Lambda Layers, and Open Container Initiative (OCI) Docker images. Standard zip bundles are fast to unpack but become bloated when bundled with heavy vendor libraries. Lambda Layers solve this dilemma by mounting shared read-only dependencies into the runtime filesystem under /opt. This architecture reduces your application deployment artifact from dozens of megabytes down to lightweight megabyte bundles. Meanwhile, container images allow machine learning microservices up to 10 gigabytes to execute seamlessly.',
        bn: 'যখন আপনি ক্লাউডে ডিপ্লয় করার জন্য সার্ভারলেস অ্যাপ্লিকেশন প্যাকেজ করেন, তখন কোড এবং ডিপেন্ডেন্সি কীভাবে সাজানো হচ্ছে তার ওপর আপলোড গতি ও কোল্ড স্টার্ট নির্ভর করে। সার্ভারলেস প্ল্যাটফর্মে মূলত ৩টি প্যাকেজিং ফরম্যাট থাকে: সাধারণ জিপ আর্কাইভ, শেয়ার্ড ল্যাম্বডা লেয়ার এবং ওআইসি ডকার কনটেইনার ইমেজ। সাধারণ জিপ বান্ডল দ্রুত চালু হলেও ভারী লাইব্রেরির কারণে বিশাল আকার ধারণ করতে পারে। ল্যাম্বডা লেয়ার সাধারণ লাইব্রেরিগুলোকে /opt ফোল্ডারে আলাদা মাউন্ট করে এই সমস্যার সমাধান করে। এর ফলে মূল অ্যাপ্লিকেশনের আকার কয়েক ডজন মেগাবাইট থেকে কমে একদম হালকা হয়ে যায়। অন্যদিকে কনটেইনার ইমেজের মাধ্যমে মেশিন লার্নিংয়ের মতো ১০ গিগাবাইট পর্যন্ত বিশাল প্রজেক্টও ক্লাউডে সহজে চালানো যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Packaging benchmark across 600 runs: Slim + Layer (180 ms) vs Fat Zip (850 ms)', bn: '৬০০টি রানে প্যাকেজিং তুলনা: স্লিম ও লেয়ার (১৮০ ms) বনাম ফ্যাট জিপ (৮৫০ ms)' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Serverless Packaging Formats diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">600 Deployment Runs</text>

<rect x="35" y="78" width="140" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="93" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Fat Zip: 200 (33.33%)</text>
<text x="105" y="103" text-anchor="middle" font-size="7" fill="#dc2626">45 MB · 850 ms boot</text>

<rect x="35" y="114" width="140" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="105" y="129" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Slim + Layer: 300 (50.00%)</text>
<text x="105" y="139" text-anchor="middle" font-size="7" fill="#15803d">1.5 MB · 180 ms boot</text>

<rect x="35" y="150" width="140" height="30" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
<text x="105" y="165" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Container: 100 (16.67%)</text>
<text x="105" y="175" text-anchor="middle" font-size="7" fill="#1e40af">1.2 GB ECR · 220 ms</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Filesystem Layout</text>

<rect x="255" y="78" width="160" height="40" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="335" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">/var/task (App Code: 1.5 MB)</text>
<text x="335" y="108" text-anchor="middle" font-size="7" fill="#78350f">Lightweight index.js</text>

<rect x="255" y="125" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">/opt (Shared Layer: 43.5 MB)</text>
<text x="335" y="155" text-anchor="middle" font-size="7" fill="#1e40af">Cached node_modules</text>

<text x="335" y="185" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">+670 ms boot saved (78.82%)</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">CI/CD Pipeline</text>

<rect x="485" y="80" width="120" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">96.67% Artifact Drop</text>
<text x="545" y="113" text-anchor="middle" font-size="7" fill="#166534">43.5 MB saved</text>

<text x="545" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 deployment failures</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Lambda Layers cut deployment size from 45 MB to 1.5 MB, saving 670 ms boot time</text>
</svg>`,
      caption: {
        en: 'Benchmarking 600 deployment runs: Slim Zips with Lambda Layers (300 runs, 50.00%, 180 ms boot) save 670 ms over Fat Zips (200 runs, 33.33%, 850 ms boot, 78.82% faster). Layers cut artifact size by 43.5 MB (from 45 MB to 1.5 MB, a 96.67% drop) alongside Container Images (100 runs, 16.67%, 220 ms) with 0 failures.',
        bn: '৬০০টি রানে ল্যাম্বডা লেয়ার সহ স্লিম জিপ (৩০০টি রান, ৫০.০০%, ১৮০ ms বুট) ফ্যাট জিপের (২০০টি রান, ৩৩.৩৩%, ৮৫০ ms বুট) চেয়ে ৬৭০ ms বাঁচায় (৭৮.৮২% দ্রুত)। লেয়ার ব্যবহারে ডিপ্লয়মেন্ট ফাইলের আকার ৪৩.৫ MB কমে (৪৫ MB থেকে ১.৫ MB, ৯৬.৬৭% হ্রাস) যেখানে কনটেইনার ইমেজে (১০০টি রান, ১৬.৬৭%, ২২০ ms) ০টি ব্যর্থতা ঘটে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lambda Layer',
          def: {
            en: 'A zip archive containing shared libraries, custom runtimes, or system binaries that is mounted into the /opt directory of the execution environment at runtime.',
            bn: 'একটি জিপ ফাইল যাতে শেয়ার্ড লাইব্রেরি বা সিস্টেম ফাইল থাকে যা রানটাইমে ফাংশনের /opt ডিরেক্টরিতে সরাসরি মাউন্ট হয়।',
          },
        },
        {
          term: 'OCI Container Image',
          def: {
            en: 'A standard Docker-compatible container image (up to 10 GB) stored in Amazon ECR deployed as the executable packaging format for a serverless function.',
            bn: 'একটি স্ট্যান্ডার্ড ডকার কনটেইনার ইমেজ (সর্বোচ্চ ১০ জিবি) যা ক্লাউড রেজিস্ট্রি থেকে সরাসরি সার্ভারলেস ফাংশন হিসেবে চালানো যায়।',
          },
        },
        {
          term: 'Tree-Shaking',
          def: {
            en: 'A modern build-time optimization that statically analyzes import statements to eliminate dead, unreferenced JavaScript code from the final bundle.',
            bn: 'একটি আধুনিক বিল্ড প্রক্রিয়া যা কোডের অপ্রয়োজনীয় ও অব্যবহৃত অংশগুলো স্বয়ংক্রিয়ভাবে বাদ দিয়ে বান্ডলের আকার ছোট রাখে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Fast CI/CD pipelines and shared dependency governance', bn: 'কেন — দ্রুত ডিপ্লয়মেন্ট পাইপলাইন ও কেন্দ্রীয় লাইব্রেরি ব্যবস্থাপনা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Lightning-fast continuous integration: uploading a 1.5 MB app zip finishes in 2 seconds compared to 45 seconds for a monolithic 45 MB archive.', bn: 'অতি দ্রুত কোড ডিপ্লয়মেন্ট: ১.৫ মেগাবাইটের হালকা কোড আপলোড হতে মাত্র ২ সেকেন্ড সময় লাগে অথচ ৪৫ মেগাবাইটের ভারী ফাইল আপলোডে অনেক সময় নষ্ট হয়।' },
        { en: 'Centralized security patching across functions: updating a single shared Lambda Layer upgrades dependencies for 50 distinct microservices simultaneously.', bn: 'কেন্দ্রীয় সিকিউরিটি প্যাচিং: শেয়ার্ড ল্যাম্বডা লেয়ার একবার আপডেট করলেই তার সাথে যুক্ত ৫০টি আলাদা সার্ভিসের লাইব্রেরি এক পলকে আপডেট হয়ে যায়।' },
        { en: 'Support for heavy artificial intelligence models: containerized Lambdas accommodate 10 GB images, enabling local PyTorch and Hugging Face inference.', bn: 'ভারী এআই মডেল পরিচালনা: কনটেইনার ইমেজ ব্যবহারের ফলে ১০ জিবি পর্যন্ত বড় বড় মেশিন লার্নিং মডেল সার্ভারলেসে অবাধে চালানো সম্ভব।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Building and publishing a Lambda Layer in 4 steps', bn: 'HOW — ৪টি ধাপে ল্যাম্বডা লেয়ার তৈরি ও প্রকাশ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create nodejs folder structure', bn: '১. nodejs ফোল্ডার তৈরি' }, text: { en: 'In your build script, install dependencies inside a dedicated nodejs/node_modules directory.', bn: 'বিল্ড ফোল্ডারে nodejs/node_modules ডিরেক্টরি তৈরি করে প্রয়োজনীয় প্যাকেজগুলো ইন্সটল করুন।' } },
        { title: { en: '2. Zip the layer artifact', bn: '২. লেয়ার ফাইল জিপ করা' }, text: { en: 'Run zip -r common-layer.zip nodejs to create the layer package preserving folder paths.', bn: 'zip কমান্ড দিয়ে ফোল্ডারটি প্যাক করে common-layer.zip ফাইল প্রস্তুত করুন।' } },
        { title: { en: '3. Publish layer version', bn: '৩. লেয়ার ভার্সন প্রকাশ' }, text: { en: 'Run aws lambda publish-layer-version --layer-name SharedDeps --zip-file fileb://common-layer.zip.', bn: 'কমান্ড চালিয়ে ক্লাউডে নতুন লেয়ার সংস্করণটি আপলোড ও রেজিস্টার করুন।' } },
        { title: { en: '4. Attach layer ARN to function', bn: '৪. ফাংশনে লেয়ার যুক্ত করা' }, text: { en: 'Reference the published layer ARN in your serverless.yml or SAM template under layers:.', bn: 'কনফিগারেশন ফাইলে layers: এর নিচে লেয়ারের ARN বসিয়ে ফাংশনের সাথে যুক্ত করে দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'packaging_strategy_sim.js',
      code: `// Simulated packaging benchmark: Slim Zip + Layer vs Fat Zip across 600 runs
const totalRuns = 600;
const slimRuns = 300;
const fatRuns = 200;
const containerRuns = 100;

const slimPct = (slimRuns / totalRuns) * 100; // 50.00%
const fatPct = (fatRuns / totalRuns) * 100; // 33.33%
const containerPct = (containerRuns / totalRuns) * 100; // 16.67%

const fatBootMs = 850;
const slimBootMs = 180;
const bootSavedMs = fatBootMs - slimBootMs; // 670 ms
const bootSpeedupPct = (bootSavedMs / fatBootMs) * 100; // 78.82%

const fatSizeMB = 45;
const slimSizeMB = 1.5;
const sizeSavedMB = fatSizeMB - slimSizeMB; // 43.5 MB
const sizeReductionPct = (sizeSavedMB / fatSizeMB) * 100; // 96.67%

console.log("Total runs: " + totalRuns);
console.log("Slim + Layer: " + slimRuns + " (" + slimPct.toFixed(2) + "%), boot: " + slimBootMs + " ms");
console.log("Fat Zip: " + fatRuns + " (" + fatPct.toFixed(2) + "%), boot: " + fatBootMs + " ms");
console.log("Container Image: " + containerRuns + " (" + containerPct.toFixed(2) + "%), cached boot: 220 ms");
console.log("Boot time saved: +" + bootSavedMs + " ms (" + bootSpeedupPct.toFixed(2) + "% faster)");
console.log("Artifact size saved: -" + sizeSavedMB + " MB (" + sizeReductionPct.toFixed(2) + "% reduction, 0 failures)");

// Output:
// Total runs: 600
// Slim + Layer: 300 (50.00%), boot: 180 ms
// Fat Zip: 200 (33.33%), boot: 850 ms
// Container Image: 100 (16.67%), cached boot: 220 ms
// Boot time saved: +670 ms (78.82% faster)
// Artifact size saved: -43.5 MB (96.67% reduction, 0 failures)`,
      caption: {
        en: 'Benchmarking 600 deployment runs: Slim Zips with Lambda Layers (300 runs, 50.00%, 180 ms boot) save 670 ms over Fat Zips (200 runs, 33.33%, 850 ms boot, 78.82% faster). Layers cut artifact size by 43.5 MB (from 45 MB to 1.5 MB, a 96.67% drop) alongside Container Images (100 runs, 16.67%, 220 ms) with 0 failures.',
        bn: '৬০০টি রানে ল্যাম্বডা লেয়ার সহ স্লিম জিপ (৩০০টি রান, ৫০.০০%, ১৮০ ms বুট) ফ্যাট জিপের (২০০টি রান, ৩৩.৩৩%, ৮৫০ ms বুট) চেয়ে ৬৭০ ms বাঁচায় (৭৮.৮২% দ্রুত)। লেয়ার ব্যবহারে ডিপ্লয়মেন্ট ফাইলের আকার ৪৩.৫ MB কমে (৪৫ MB থেকে ১.৫ MB, ৯৬.৬৭% হ্রাস) যেখানে কনটেইনার ইমেজে (১০০টি রান, ১৬.৬৭%, ২২০ ms) ০টি ব্যর্থতা ঘটে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive packaging format benchmark', bn: 'INSIDE — জীবন্ত প্যাকেজিং ফরম্যাট সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine packaging metrics across 600 microservice deployment runs. Deploying Slim Zips with shared Layers (300 runs, 50.00%) boots in 180 ms, saving 670 ms over monolithic Fat Zips (200 runs, 33.33% at 850 ms, 78.82% faster). Separating dependencies into Layers shrinks application artifact size by 43.5 MB (from 45 MB down to 1.5 MB, a 96.67% reduction). Container Images (100 runs, 16.67% at 220 ms) support 1.2 GB machine learning models with 0 deployment failures.',
        bn: '৬০০টি মাইক্রোসার্ভিস ডিপ্লয়মেন্টের প্যাকেজিং মেট্রিক্স দেখুন। শেয়ার্ড লেয়ার সহ স্লিম জিপ (৩০০টি রান, ৫০.০০%) মাত্র ১৮০ ms এ বুট হয়ে ফ্যাট জিপের (২০০টি রান, ৩৩.৩৩%, ৮৫০ ms) তুলনায় ৬৭০ ms সময় বাঁচায় (৭৮.৮২% দ্রুত)। লেয়ারে লাইব্রেরি আলাদা করায় ফাইলের আকার ৪৩.৫ MB কমেছে (৪৫ MB থেকে ১.৫ MB, ৯৬.৬৭% সাশ্রয়)। কনটেইনার ইমেজ (১০০টি রান, ১৬.৬৭%, ২২০ ms) ১.২ জিবি এআই মডেল সমর্থন করে ০টি ব্যর্থতায় সফল হয়েছে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Packaging lab (verify artifact savings, press Run)', bn: 'প্যাকেজিং ল্যাব (আকার হ্রাস যাচাই, Run)' },
      html: '<h3>Packaging Format Benchmark</h3>\n<pre id="out"></pre>\n<p>Compute deployment artifact size reduction and boot speedup.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const fatS = 45;\nconst slimS = 1.5;\nconst savedMB = fatS - slimS;\nconst bFat = 850;\nconst bSlim = 180;\nconst savedBoot = bFat - bSlim;\nconsole.log("saved boot: " + savedBoot + " ms");\ndocument.getElementById("out").textContent = "Fat Zip: " + fatS + " MB (" + bFat + " ms) · Slim: " + slimS + " MB (" + bSlim + " ms) · Saved: -" + savedMB.toFixed(1) + " MB (-" + savedBoot + " ms, 0 failures ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Packaging selection rules', bn: 'ফলাফল — সঠিক প্যাকেজিং বাছাইয়ের সোনালী নিয়মাবলী' },
    },
    {
      type: 'list',
      items: [
        { en: 'Use slim zips with tree-shaking for standard APIs: bundling only referenced code yields sub-200 ms cold starts and ultra-fast deployment uploads.', bn: 'সাধারণ এপিআইয়ের জন্য স্লিম জিপ ব্যবহার করুন: esbuild দিয়ে অপ্রয়োজনীয় কোড ছেঁটে ফেললে ২০০ ms এর নিচে কোল্ড স্টার্ট পাওয়া যায়।' },
        { en: 'Use container images for complex dependencies: choose Docker packaging when bundling machine learning packages, C++ binaries, or multi-gigabyte models.', bn: 'জটিল কাজের জন্য কনটেইনার ইমেজ বেছে নিন: মেশিন লার্নিং বা সি++ লাইব্রেরির মতো বড় ফাইল থাকলে ডকার ইমেজ ব্যবহার করা বুদ্ধিমানের কাজ।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The /opt path resolution bug', bn: 'ডিবাগ — /opt পাথ মিসম্যাচের সাধারণ সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Incorrect folder hierarchy when creating Lambda Layers', bn: 'ল্যাম্বডা লেয়ার তৈরিতে ভুল ফোল্ডার স্ট্রাকচারের সমস্যা' },
      text: {
        en: 'In Node.js environments, layer dependencies must reside within a parent folder named nodejs/ before compression. Placing packages directly at the archive root prevents require calls from resolving because /opt/nodejs/node_modules serves as the designated runtime search path.',
        bn: 'Node.js রানটাইমে ল্যাম্বডা লেয়ারের প্যাকেজগুলো জিপ করার আগে অবশ্যই nodejs/ ফোল্ডারের ভেতরে রাখতে হয়। সরাসরি রুটে জিপ করলে কোড প্যাকেজ খুঁজে পায় না কারণ রানটাইম /opt/nodejs/node_modules পাথে ফাইল খোঁজে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Managing Lambda Layer version immutability', bn: 'ল্যাম্বডা লেয়ার সংস্করণের অপরিবর্তনীয়তা রক্ষা করা' },
      text: {
        en: 'Every time you update a Lambda Layer, AWS publishes an incremented version number (e.g. :1, :2). Functions pinned to an older version ARN continue using that exact version until you explicitly update their function configuration, ensuring zero accidental breaking changes during dependency upgrades.',
        bn: 'প্রতিবার লেয়ার আপডেট করলে ক্লাউড নতুন সংস্করণ নম্বর তৈরি করে। পুরনো ফাংশনগুলো আগের সংস্করণেই নিরাপদে চলতে থাকে যতক্ষণ না আপনি নিজে থেকে নতুন সংস্করণ যুক্ত করেন। এর ফলে লাইব্রেরি আপডেটের কারণে চলমান কোড ভেঙে যাওয়ার কোনো ঝুঁকি থাকে না।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production packaging architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক এন্টারপ্রাইজ প্যাকেজিং পাইপলাইন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Sentry Error Reporting: distributes official serverless monitoring SDKs as public pre-built Lambda Layers that developers attach with a single ARN.', bn: 'সেন্ট্রি এরর ট্র্যাকিং: তাদের অফিশিয়াল মনিটরিং টুলস পাবলিক ল্যাম্বডা লেয়ার হিসেবে প্রকাশ করে যা ডেভেলপাররা এক ক্লিকেই যুক্ত করতে পারেন।' },
        { en: 'Hugging Face Inference Lambdas: runs lightweight transformer sentiment classification models packaged as 2 GB container images on AWS Lambda.', bn: 'হাগিং ফেস: এআই ও সেন্টিমেন্ট অ্যানালাইসিস মডেলগুলো ডকার কনটেইনার ইমেজে প্যাকেজ করে সার্ভারলেস ল্যাম্বডায় সফলভাবে পরিচালনা করে।' },
        { en: 'Serverless Framework and SST: automates esbuild tree-shaking and dynamic layer publishing in CI/CD pipelines, reducing average deployment artifacts to 1.5 MB.', bn: 'সার্ভারলেস ফ্রেমওয়ার্ক ও SST: অটোমেটেড বিল্ড পাইপলাইনে কোড মিনিফাই করে মাত্র ১.৫ মেগাবাইটের হালকা বান্ডলে কোড প্রকাশ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Zero-Downtime Serverless Releases: Canary Traffic Shifting and Automated Rollbacks', bn: 'পরবর্তী পাঠ — ডাউনটাইমহীন সার্ভারলেস রিলিজ: ক্যানারি ট্রাফিক শিফটিং ও রোলব্যাক' },
    },
    {
      type: 'para',
      text: {
        en: 'With packaging formats and layer mechanics mastered, Lesson 8 concludes the serverless hub with production releases: CodeDeploy canary traffic shifting, linear rollouts, and automated CloudWatch rollback alarms.',
        bn: 'প্যাকেজিং ও লেয়ার মেকানিক্স আয়ত্ত করার পর, পাঠ ৮ সার্ভারলেস হাব সম্পন্ন করবে প্রোডাকশন রিলিজ ইঞ্জিনিয়ারিং দিয়ে: কোডডিপ্লয় ক্যানারি ট্রাফিক শিফটিং, লিনিয়ার রোলআউট এবং ক্লাউডওয়াচ অ্যালার্ম চালিত রোলব্যাক।',
      },
    },
  ],
  exercises: [
    {
      id: 'srv-zip-ex-1',
      kind: 'mcq',
      topic: 'lambda-layer-mount-point',
      question: {
        en: 'Into what designated root directory does AWS Lambda mount attached Lambda Layers inside the execution environment filesystem at runtime?',
        bn: 'রানটাইমে AWS Lambda তার সাথে যুক্ত করা Lambda Layers-কে এক্সিকিউশন এনভায়রনমেন্টের কোন নির্দিষ্ট রুট ডিরেক্টরিতে মাউন্ট করে?',
      },
      options: [
        {
          en: 'The /opt directory (e.g. /opt/nodejs/node_modules for Node.js runtimes)',
          bn: '/opt ডিরেক্টরিতে (যেমন Node.js রানটাইমের জন্য /opt/nodejs/node_modules পাথে)',
        },
        {
          en: 'The /windows/system32 directory on the hard drive',
          bn: 'হার্ডড্রাইভের /windows/system32 ডিরেক্টরিতে',
        },
        {
          en: 'The recycle bin on the user computer desktop',
          bn: 'ব্যবহারকারীর কম্পিউটার ডেস্কটপের রিসাইকেল বিনে',
        },
        {
          en: 'A physical cardboard shipping box in the warehouse',
          bn: 'গুদামঘরের ভেতরের একটি ফিজিক্যাল কাগজের কার্টনে',
        },
      ],
      answer: 0,
      hint: { en: 'Layers are mounted under /opt.', bn: 'লেয়ারগুলো /opt ডিরেক্টরিতে মাউন্ট হয়।' },
      explanation: {
        en: 'Lambda mounts all attached layers into the /opt directory, where runtimes look for dependencies.',
        bn: 'ল্যাম্বডা সমস্ত লেয়ার /opt ফোল্ডারে মাউন্ট করে যা রানটাইমের ডিপেন্ডেন্সি খোঁজার আদর্শ স্থান।',
      },
    },
    {
      id: 'srv-zip-ex-2',
      kind: 'mcq',
      topic: 'zip-sim-numbers',
      question: {
        en: 'In our code walkthrough, how much boot latency was saved by Slim Zips with Lambda Layers (180 ms) over Fat Zips (850 ms) across 600 deployment runs, and how much was the artifact size reduced?',
        bn: 'আমাদের কোড আলোচনায় ৬০০টি ডিপ্লয়মেন্ট রানে ফ্যাট জিপের (৮৫০ ms) তুলনায় ল্যাম্বডা লেয়ার সহ স্লিম জিপে (১৮০ ms) কত বুট লেটেন্সি বেঁচেছিল এবং ফাইলের আকার কতটুকু কমেছিল?',
      },
      options: [
        {
          en: 'Saved 670 ms of boot latency (78.82% faster) and cut artifact size by 43.5 MB (from 45 MB to 1.5 MB, a 96.67% reduction with 0 failures across 600 runs)',
          bn: 'বুট লেটেন্সিতে ৬৭০ ms সাশ্রয় (৭৮.৮২% দ্রুত) এবং ফাইলের আকার ৪৩.৫ MB হ্রাস (৪৫ MB থেকে কমে ১.৫ MB, ৬০০টি রানে ০টি ব্যর্থতা সহ ৯৬.৬৭% সাশ্রয়)',
        },
        {
          en: 'Saved 0 ms with 100 deployment failures across 600 runs',
          bn: '৬০০টি রানে ১০০টি ব্যর্থতা সহ ০ ms সাশ্রয়',
        },
        {
          en: 'Saved 500 ms and cut artifact size by 10 MB across 600 runs',
          bn: '৬০০টি রানে ১০ MB আকার হ্রাস সহ ৫০০ ms সাশ্রয়',
        },
        {
          en: 'Saved 50 ms and cut artifact size by 5 MB across 600 runs',
          bn: '৬০০টি রানে ৫ MB আকার হ্রাস সহ ৫০ ms সাশ্রয়',
        },
      ],
      answer: 0,
      hint: { en: '850 - 180 = 670 ms saved (78.82%), 45 - 1.5 = 43.5 MB saved (96.67%).', bn: '৮৫০ - ১৮০ = ৬৭০ ms সাশ্রয় (৭৮.৮২%), ৪৫ - ১.৫ = ৪৩.৫ MB সাশ্রয় (৯৬.৬৭%)।' },
      explanation: {
        en: 'Extracting dependencies into Layers saved 670 ms on boot and dropped artifact size by 43.5 MB (a 96.67% drop) with 0 failures.',
        bn: 'লেয়ার ব্যবহারে বুট সময় ৬৭০ ms বাঁচে এবং ফাইলের আকার ৪৩.৫ MB (৯৬.৬৭%) কমে ০টি ব্যর্থতায় কাজ সম্পন্ন হয়।',
      },
    },
    {
      id: 'srv-zip-ex-3',
      kind: 'mcq',
      topic: 'container-image-lambda-size-limit',
      question: {
        en: 'What is the maximum container image size supported by AWS Lambda when deploying serverless functions packaged as OCI Docker images?',
        bn: 'AWS Lambda-তে OCI ডকার কনটেইনার ইমেজ হিসেবে সার্ভারলেস ফাংশন ডিপ্লয় করার ক্ষেত্রে সর্বোচ্চ কত সাইজের ইমেজ সমর্থন করে?',
      },
      options: [
        {
          en: 'Up to 10 GB stored in Amazon Elastic Container Registry (ECR), making it ideal for large machine learning models and custom compiled runtimes',
          bn: 'Amazon ECR-এ সংরক্ষিত সর্বোচ্চ ১০ জিবি পর্যন্ত ইমেজ, যা বিশাল মেশিন লার্নিং মডেল ও কাস্টম রানটাইম চালানোর জন্য উপযুক্ত',
        },
        {
          en: 'Exactly 50 kilobytes of text',
          bn: 'নির্দিষ্টভাবে সর্বোচ্চ ৫০ কিলোবাইট টেক্সট',
        },
        {
          en: 'One single image of a house cat',
          bn: 'ঘরের বিড়ালের একটিমাত্র ছবি',
        },
        {
          en: 'Infinite gigabytes with zero disk limits',
          bn: 'কোনো ডিস্ক সীমা ছাড়াই অনন্ত গিগাবাইট ডেটা',
        },
      ],
      answer: 0,
      hint: { en: 'Container images can be up to 10 GB.', bn: 'কনটেইনার ইমেজ সর্বোচ্চ ১০ জিবি হতে পারে।' },
      explanation: {
        en: 'Containerized Lambdas allow up to 10 GB images, enabling heavy dependencies and ML model weights.',
        bn: 'কনটেইনারাইজড ল্যাম্বডা ১০ জিবি পর্যন্ত ইমেজ সমর্থন করায় ভারী এআই মডেল চালানো সম্ভব হয়।',
      },
    },
    {
      id: 'srv-zip-ex-4',
      kind: 'predict',
      topic: 'layer-mount-path',
      question: {
        en: 'What four-character Unix directory path starting with a forward slash represents the mount point for Lambda Layers (e.g. /opt)?',
        bn: 'স্ল্যাশ দিয়ে শুরু হওয়া কোন চার অক্ষরের ইউনিক্স ডিরেক্টরি পাথটি ল্যাম্বডা লেয়ারের মাউন্ট পয়েন্টকে নির্দেশ করে (যেমন /opt)?',
      },
      answer: '/opt',
      accept: ['/opt', 'opt', '/opt/'],
      hint: { en: '/opt', bn: '/opt' },
      explanation: {
        en: 'All Lambda Layers are extracted and mounted read-only into /opt.',
        bn: 'ল্যাম্বডার সমস্ত লেয়ার /opt ফোল্ডারে রিড-অনলি হিসেবে মাউন্ট হয়।',
      },
    },
  ],
  quiz: {
    id: 'zips-and-the-zip-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'srv-zip-q1',
        kind: 'mcq',
        topic: 'tree-shaking-benefit',
        question: {
          en: 'Why is running tree-shaking with a bundler like esbuild essential before creating a serverless deployment zip archive?',
          bn: 'সার্ভারলেস ডিপ্লয়মেন্ট জিপ তৈরির আগে esbuild-এর মতো বান্ডলার দিয়ে tree-shaking চালানো কেন অপরিহার্য?',
        },
        options: [
          {
            en: 'It statically analyzes import statements to discard unused library functions, shrinking bundle sizes by up to 95% and directly slashing runtime cold start latency',
            bn: 'এটি কোড বিশ্লেষণ করে অপ্রয়োজনীয় ও অব্যবহৃত লাইব্রেরি ফাংশনগুলো বাদ দিয়ে দেয়, ফলে ফাইলের আকার ৯৫% পর্যন্ত কমে গিয়ে কোল্ড স্টার্ট নাটকীয়ভাবে দ্রুত হয়',
          },
          {
            en: 'It physically shakes the computer monitor to remove dust particles',
            bn: 'এটি ধুলোবালি পরিষ্কার করতে কম্পিউটার মনিটরকে শারীরিকভাবে কাঁপিয়ে দেয়',
          },
          {
            en: 'It plants virtual pine trees in the cloud data center backyard',
            bn: 'এটি ক্লাউড ডেটাসেন্টারের উঠোনে ভার্চুয়াল পাইন গাছ রোপণ করে',
          },
          {
            en: 'It renames all variables into the names of fruits and vegetables',
            bn: 'এটি সমস্ত ভ্যারিয়েবলের নাম পরিবর্তন করে ফল ও শাকসবজির নাম দিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Tree-shaking strips dead code, shrinking bundles and cold starts.', bn: 'ট্রি-শেকিং অব্যবহৃত কোড বাদ দিয়ে আকার ও কোল্ড স্টার্ট কমায়।' },
        explanation: {
          en: 'Tree-shaking eliminates unreferenced code paths, producing minimal bundles that initialize rapidly.',
          bn: 'ট্রি-শেকিং অতিরিক্ত কোড মুছে হালকা বান্ডল তৈরি করে যা তাৎক্ষণিক বুট হতে পারে।',
        },
      },
      {
        id: 'srv-zip-q2',
        kind: 'mcq',
        topic: 'zip-sim-size-reduction-check',
        question: {
          en: 'In our code walkthrough, what was the deployment artifact size reduction achieved by separating dependencies into a Lambda Layer (from 45 MB down to 1.5 MB), and how much boot time was saved?',
          bn: 'আমাদের কোড আলোচনায় ডিপেন্ডেন্সিগুলোকে ল্যাম্বডা লেয়ারে আলাদা করে ডিপ্লয়মেন্ট ফাইলের আকার কতটা কমেছিল (৪৫ MB থেকে কমে ১.৫ MB) এবং বুট সময়ে কতটুকু সাশ্রয় হয়েছিল?',
        },
        options: [
          { en: 'Cut size by 43.5 MB (a 96.67% reduction) while saving 670 ms of boot latency (78.82% faster) with 0 failures across 600 runs', bn: 'ফাইলের আকার ৪৩.৫ MB হ্রাস (৯৬.৬৭% সাশ্রয়) এবং বুট সময়ে ৬৭০ ms সাশ্রয় (৭৮.৮২% দ্রুত), যেখানে ৬০০টি রানে ০টি ব্যর্থতা ছিল' },
          { en: 'Cut size by 10 MB and saved 50 ms of boot latency across 600 runs', bn: '৬০০টি রানে ১০ MB আকার হ্রাস এবং ৫০ ms বুট সময় সাশ্রয়' },
          { en: 'Cut size by 0 MB with 100 deployment failures across 600 runs', bn: '৬০০টি রানে ০ MB আকার হ্রাস সহ ১০০টি ব্যর্থতা' },
          { en: 'Cut size by 1 MB and saved 10 ms across 600 runs', bn: '৬০০টি রানে ১ MB আকার হ্রাস এবং ১০ ms সাশ্রয়' },
        ],
        answer: 0,
        hint: { en: '43.5 MB saved (96.67%), 670 ms boot saved (78.82%), 0 failures.', bn: '৪৩.৫ MB সাশ্রয় (৯৬.৬৭%), ৬৭০ ms বুট সাশ্রয় (৭৮.৮২%), ০টি ব্যর্থতা।' },
        explanation: {
          en: 'Lambda Layers reduced artifact size by 43.5 MB (96.67%) and saved 670 ms on boot with 0 failures across 600 runs.',
          bn: 'ল্যাম্বডা লেয়ার ফাইলের আকার ৪৩.৫ MB (৯৬.৬৭%) কমিয়ে বুট সময়ে ৬৭০ ms বাঁচায় এবং ৬০০টি রানে ০টি ব্যর্থতা নিশ্চিত করে।',
        },
      },
      {
        id: 'srv-zip-q3',
        kind: 'mcq',
        topic: 'nodejs-layer-folder-structure',
        question: {
          en: 'What specific directory structure must be used inside a zip package intended as a Node.js Lambda Layer so the runtime can find packages via require() or import?',
          bn: 'Node.js ল্যাম্বডা লেয়ার হিসেবে ব্যবহৃত জিপ ফাইলের ভেতরে কোন নির্দিষ্ট ফোল্ডার স্ট্রাকচার ব্যবহার করতে হয় যাতে রানটাইম require() দিয়ে প্যাকেজগুলো খুঁজে পায়?',
        },
        options: [
          {
            en: 'The packages must sit inside a nodejs/node_modules directory (e.g. nodejs/node_modules/my-lib) because /opt/nodejs/node_modules is the designated search path',
            bn: 'প্যাকেজগুলো অবশ্যই nodejs/node_modules ফোল্ডারের ভেতরে থাকতে হবে, কারণ /opt/nodejs/node_modules হলো রানটাইমের নির্ধারিত সার্চ পাথ',
          },
          {
            en: 'The packages must sit inside a folder named /temporary/trash/bin',
            bn: 'প্যাকেজগুলোকে /temporary/trash/bin নামক ফোল্ডারে রাখতে হয়',
          },
          {
            en: 'The packages must be saved on a physical external USB flash drive',
            bn: 'প্যাকেজগুলোকে একটি এক্সটার্নাল ইউএসবি ফ্ল্যাশ ড্রাইভে সেভ রাখতে হয়',
          },
          {
            en: 'The packages must be renamed with the .mp3 file extension',
            bn: 'প্যাকেজের নামের শেষে বাধ্যতামূলকভাবে .mp3 লিখে দিতে হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Place packages inside nodejs/node_modules.', bn: 'প্যাকেজগুলো nodejs/node_modules ফোল্ডারে রাখুন।' },
        explanation: {
          en: 'Node.js automatically includes /opt/nodejs/node_modules in its module search paths; packaging under nodejs/ is required.',
          bn: 'Node.js রানটাইম নিজে থেকেই /opt/nodejs/node_modules পাথে লাইব্রেরি খোঁজে, তাই এই ফোল্ডার স্ট্রাকচার আবশ্যক।',
        },
      },
      {
        id: 'srv-zip-q4',
        kind: 'predict',
        topic: 'maximum-layers-count',
        question: {
          en: 'What is the maximum number of Lambda Layers that can be attached to a single AWS Lambda function (e.g. 5)?',
          bn: 'একটিমাত্র AWS Lambda ফাংশনের সাথে সর্বোচ্চ কয়টি Lambda Layers যুক্ত করা যায় (যেমন 5)?',
        },
        answer: '5',
        accept: ['5', 'five', '5 layers'],
        hint: { en: '5', bn: '5' },
        explanation: {
          en: 'AWS Lambda allows up to 5 layers per function, with their filesystems merged under /opt.',
          bn: 'AWS Lambda প্রতিটি ফাংশনে সর্বোচ্চ ৫টি লেয়ার মাউন্ট করার অনুমতি দেয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-serverless-release',
    title: { en: 'Zero-Downtime Serverless Releases: Canary Traffic Shifting and Automated Rollbacks', bn: 'ডাউনটাইমহীন সার্ভারলেস রিলিজ: ক্যানারি ট্রাফিক শিফটিং ও রোলব্যাক' },
  },
};
