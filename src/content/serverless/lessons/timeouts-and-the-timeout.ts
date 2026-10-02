import type { Lesson } from '../../../lib/types';

export const TimeoutsAndTheTimeoutLesson: Lesson = {
  slug: 'timeouts-and-the-timeout',
  tech: 'serverless',
  title: {
    en: 'Execution Timeouts & Memory — CPU Scaling and Cost Optimization',
    bn: 'এক্সিকিউশন টাইমআউট ও মেমরি — সিপিইউ স্কেলিং ও খরচ অপ্টিমাইজেশন',
  },
  summary: {
    en: 'A foundational overview of serverless execution timeouts and memory tuning. Benchmark 500 invocations comparing 256 MB (1200 ms, 3 timeouts, 99.40% success) against 1769 MB (1 full vCPU, 200 ms, 0 timeouts, 100.00% success). Save 1000 ms per execution (6x faster, an 83.33% duration reduction) and prevent gateway timeout errors.',
    bn: 'সার্ভারলেস এক্সিকিউশন টাইমআউট ও মেমরি টিউনিংয়ের মৌলিক ধারণা। ৫০০টি ইনভোকেশনে ২৫৬ মেগাবাইট (১২০০ ms, ৩টি টাইমআউট, ৯৯.৪০% সাফল্য) বনাম ১৭৬৯ মেগাবাইটের (১টি পূর্ণ vCPU, ২০০ ms, ০টি টাইমআউট, ১০০.০০% সাফল্য) তুলনা। প্রতি এক্সিকিউশনে ১০০০ ms সাশ্রয় (৬ গুণ দ্রুত, ৮৩.৩৩% সময় হ্রাস) এবং গেটওয়ে টাইমআউট প্রতিরোধ।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Execution time limits and memory allocation levers', bn: 'WHAT — এক্সিকিউশন সময়সীমা ও মেমরি বরাদ্দের ক্ষমতা' },
    },
    {
      type: 'para',
      text: {
        en: 'When your serverless functions execute in production, the cloud provider enforces strict maximum runtime durations known as execution timeouts. In AWS (Amazon Web Services) Lambda, timeouts can be configured from 1 second up to 15 minutes, while API Gateway imposes an unchangeable 29-second ceiling. If your code runs past its configured limit, the runtime halts your function abruptly. Crucially, memory is the primary lever that controls computational power. Increasing allocated RAM scales CPU allocation, network throughput, and disk bandwidth in direct linear proportion. Allocating 1769 MB unlocks an entire dedicated vCPU, slashing runtimes for CPU-intensive tasks and preventing catastrophic timeout crashes.',
        bn: 'যখন আপনার সার্ভারলেস ফাংশন প্রোডাকশনে চলে, তখন ক্লাউড প্ল্যাটফর্ম এক্সিকিউশন টাইমআউট নামক একটি নির্দিষ্ট সময়সীমা কঠোরভাবে প্রয়োগ করে। AWS (Amazon Web Services) Lambda-তে এই সময়সীমা ১ সেকেন্ড থেকে সর্বোচ্চ ১৫ মিনিট পর্যন্ত নির্ধারণ করা যায়, যেখানে API Gateway সর্বোচ্চ ২৯ সেকেন্ডের কঠোর সীমা রাখে। আপনার কোড নির্ধারিত সময়ের মধ্যে শেষ না হলে রানটাইম সাথে সাথে ফাংশনটি বন্ধ করে দেয়। সার্ভারলেস সিস্টেমে মেমরি হলো প্রসেসরের গতি নিয়ন্ত্রণের প্রধান চাবিকাঠি। মেমরি বাড়ালে আনুপাতিক হারে সিপিইউ এবং নেটওয়ার্কের ক্ষমতা বৃদ্ধি পায়। ১৭৬৯ মেগাবাইট মেমরি দিলে একটি সম্পূর্ণ ভার্চুয়াল প্রসেসর পাওয়া যায়, যা জটিল হিসাব দ্রুত সম্পন্ন করে অনাকাঙ্ক্ষিত টাইমআউট প্রতিরোধ করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Memory & timeout benchmark: 256 MB (1200 ms) vs 1769 MB 1 vCPU (200 ms)', bn: 'মেমরি ও টাইমআউট তুলনা: ২৫৬ MB (১২০০ ms) বনাম ১৭৬৯ MB ১টি vCPU (২০০ ms)' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Serverless Memory and Timeout diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">500 Invocations</text>

<rect x="35" y="80" width="140" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="96" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Config A: 256 MB RAM</text>
<text x="105" y="108" text-anchor="middle" font-size="7" fill="#dc2626">1200 ms (3 timeouts)</text>

<rect x="35" y="125" width="140" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="105" y="141" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Config B: 1769 MB RAM</text>
<text x="105" y="153" text-anchor="middle" font-size="7" fill="#15803d">200 ms (1 dedicated vCPU)</text>

<text x="105" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">+1000 ms saved (6x faster)</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Compute Scaling</text>

<rect x="255" y="78" width="160" height="40" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="335" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">256 MB: Shared CPU Core</text>
<text x="335" y="108" text-anchor="middle" font-size="7" fill="#78350f">High latency · 99.40% success</text>

<rect x="255" y="125" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">1769 MB: 1 Full vCPU Core</text>
<text x="335" y="155" text-anchor="middle" font-size="7" fill="#1e40af">Fast execution · 100.00% success</text>

<text x="335" y="185" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">83.33% duration drop</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">System Reliability</text>

<rect x="485" y="80" width="120" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Zero Outages</text>
<text x="545" y="113" text-anchor="middle" font-size="7" fill="#166534">0 timeouts on Config B</text>

<text x="545" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Identical Total Cost</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Allocating 1769 MB speeds up compute 6x (+1000 ms saved), eliminating timeouts</text>
</svg>`,
      caption: {
        en: 'Benchmarking 500 invocations: 256 MB RAM took 1200 ms with 3 timeouts (99.40% success). Allocating 1769 MB (1 full vCPU) reduced runtime to 200 ms (+1000 ms saved, 6x faster, an 83.33% duration drop) with 0 timeouts (100.00% success).',
        bn: '৫০০টি ইনভোকেশনে ২৫৬ মেগাবাইটে ১২০০ ms লেগে ৩টি টাইমআউট হয় (৯৯.৪০% সাফল্য)। ১৭৬৯ মেগাবাইট (১টি সম্পূর্ণ vCPU) বরাদ্দ করায় সময় কমে ২০০ ms হয় (+১০০০ ms সাশ্রয়, ৬ গুণ দ্রুত, ৮৩.৩৩% সময় হ্রাস) এবং ০টি টাইমআউট সহ ১০০.০০% সফলতা নিশ্চিত হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Execution Timeout',
          def: {
            en: 'The hard upper limit on how long a serverless function is allowed to run before the cloud runtime forcibly terminates its process.',
            bn: 'সার্ভারলেস ফাংশন সর্বোচ্চ কত সময় চলতে পারবে তার কঠোর সীমা, যা পার হলে ক্লাউড রানটাইম সাথে সাথে প্রসেস বন্ধ করে দেয়।',
          },
        },
        {
          term: 'Dedicated vCPU Threshold (1769 MB)',
          def: {
            en: 'The exact memory allocation in AWS Lambda where a function transitions from a fractional shared CPU slice to 1 full dedicated virtual CPU.',
            bn: 'AWS Lambda-এর সুনির্দিষ্ট মেমরি সীমা (১৭৬৯ মেগাবাইট) যেখানে পৌঁছালে একটি ফাংশন শেয়ার্ড সিপিইউ থেকে ১টি পূর্ণ ডেডিকেটেড ভার্চুয়াল প্রসেসর পায়।',
          },
        },
        {
          term: 'Lambda Power Tuning',
          def: {
            en: 'An open-source optimization framework that executes functions across diverse memory tiers to discover the cheapest and fastest configuration.',
            bn: 'একটি ওপেন-সোর্স অপ্টিমাইজেশন পদ্ধতি যা বিভিন্ন মেমরিতে ফাংশন চালিয়ে সবচেয়ে সাশ্রয়ী ও দ্রুতগতির কনফিগারেশন খুঁজে বের করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The serverless cost-performance paradox', bn: 'কেন — সার্ভারলেস খরচ ও পারফরম্যান্সের আপাত বৈপরীত্য' },
    },
    {
      type: 'list',
      items: [
        { en: 'More memory can cost less money: because billing equals memory multiplied by duration, a 6x faster execution on 1769 MB often costs less than slow runs on 256 MB.', bn: 'মেমরি বাড়ালে খরচ কম হতে পারে: বিলিং হয় মেমরি ও সময়ের গুণফলে; ১৭৬৯ মেগাবাইটে কাজ ৬ গুণ দ্রুত শেষ হওয়ায় ২৫৬ মেগাবাইটের চেয়ে মোট খরচ কমে যেতে পারে।' },
        { en: 'Eradicate customer-facing HTTP 504 Gateway Timeouts: setting timeouts safely below API Gateway 29-second ceiling ensures clean error returns.', bn: 'HTTP 504 এরর নির্মূল করা: API Gateway-এর ২৯ সেকেন্ড সীমার নিচে টাইমআউট রাখলে ব্যবহারকারী বিভ্রান্ত না হয়ে স্পষ্ট বার্তা পান।' },
        { en: 'Faster multithreaded processing: allocating above 1769 MB grants up to 6 vCPUs, accelerating cryptographic encryption and image transformations.', bn: 'মাল্টিথ্রেডিং সুবিধা: ১৭৬৯ মেগাবাইটের বেশি দিলে ৬টি পর্যন্ত প্রসেসর কোর পাওয়া যায়, যা ভারী এনক্রিপশন ও ছবি প্রসেসিং নিমেষে সম্পন্ন করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Optimizing memory and timeouts in 4 steps', bn: 'HOW — ৪টি ধাপে মেমরি ও টাইমআউট অপ্টিমাইজেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Benchmark with Power Tuning', bn: '১. পাওয়ার টিউনিং দিয়ে পরীক্ষা' }, text: { en: 'Run AWS Lambda Power Tuning across memory values from 128 MB to 3008 MB to graph cost vs speed.', bn: '১২৮ থেকে ৩০০৮ মেগাবাইট পর্যন্ত মেমরি দিয়ে কোড পরীক্ষা করে খরচ ও গতির লেখচিত্র বিশ্লেষণ করুন।' } },
        { title: { en: '2. Align with dedicated vCPU (1769 MB)', bn: '২. ১টি সম্পূর্ণ vCPU তে সেট করা' }, text: { en: 'For compute-heavy algorithms, configure MemorySize: 1769 to unlock 1 full dedicated vCPU core.', bn: 'ভারী গাণিতিক কাজের জন্য মেমরি ১৭৬৯ মেগাবাইটে সেট করে ১টি পূর্ণ প্রসেসর কোর নিশ্চিত করুন।' } },
        { title: { en: '3. Set defensive timeout limits', bn: '৩. নিরাপদ টাইমআউট নির্ধারণ' }, text: { en: 'For web APIs behind API Gateway, configure Timeout: 25 to fail before the 29-second gateway limit.', bn: 'এপিআই গেটওয়ের ২৯ সেকেন্ড সীমার আগেই নিরাপদ থাকতে টাইমআউট ২৫ সেকেন্ড নির্ধারণ করুন।' } },
        { title: { en: '4. Monitor duration in CloudWatch', bn: '৪. ক্লাউডওয়াচে মনিটরিং' }, text: { en: 'Review Billed Duration and Max Memory Used metrics in CloudWatch Logs to identify overprovisioning.', bn: 'লগে আসল ব্যবহৃত মেমরি ও সময় দেখে অপ্রয়োজনীয় বাড়তি মেমরি কমিয়ে আনুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'memory_timeout_tuning_sim.js',
      code: `// Simulated serverless memory allocation and execution timeout benchmark across 500 invocations
const invocations = 500;
const memA_MB = 256;
const durA_ms = 1200;
const timeoutsA = 3;

const memB_MB = 1769;
const durB_ms = 200;
const timeoutsB = 0;

const durationSavedMs = durA_ms - durB_ms; // 1000 ms
const durationReductionPct = (durationSavedMs / durA_ms) * 100; // 83.33%
const speedMultiplier = durA_ms / durB_ms; // 6x

const successRateA = ((invocations - timeoutsA) / invocations) * 100; // 99.40%
const successRateB = ((invocations - timeoutsB) / invocations) * 100; // 100.00%

console.log("Memory & Timeout Benchmark across " + invocations + " invocations:");
console.log("Config A (256 MB): " + durA_ms + " ms duration, " + timeoutsA + " timeouts (" + successRateA.toFixed(2) + "% success)");
console.log("Config B (1769 MB, 1 vCPU): " + durB_ms + " ms duration (" + speedMultiplier + "x faster, +" + durationSavedMs + " ms saved / " + durationReductionPct.toFixed(2) + "% duration drop), " + timeoutsB + " timeouts (" + successRateB.toFixed(2) + "% success)");

// Output:
// Memory & Timeout Benchmark across 500 invocations:
// Config A (256 MB): 1200 ms duration, 3 timeouts (99.40% success)
// Config B (1769 MB, 1 vCPU): 200 ms duration (6x faster, +1000 ms saved / 83.33% duration drop), 0 timeouts (100.00% success)`,
      caption: {
        en: 'Benchmarking 500 invocations: 256 MB RAM took 1200 ms with 3 timeouts (99.40% success). Allocating 1769 MB (1 full vCPU) reduced runtime to 200 ms (+1000 ms saved, 6x faster, an 83.33% duration drop) with 0 timeouts (100.00% success).',
        bn: '৫০০টি ইনভোকেশনে ২৫৬ মেগাবাইটে ১২০০ ms লেগে ৩টি টাইমআউট হয় (৯৯.৪০% সাফল্য)। ১৭৬৯ মেগাবাইট (১টি সম্পূর্ণ vCPU) বরাদ্দ করায় সময় কমে ২০০ ms হয় (+১০০০ ms সাশ্রয়, ৬ গুণ দ্রুত, ৮৩.৩৩% সময় হ্রাস) এবং ০টি টাইমআউট সহ ১০০.০০% সফলতা নিশ্চিত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive memory and timeout benchmark', bn: 'INSIDE — জীবন্ত মেমরি ও টাইমআউট সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine computational scaling across 500 invocations. At 256 MB RAM, execution takes 1200 ms with 3 timeout failures (99.40% success). Raising memory to 1769 MB (1 dedicated vCPU) accelerates processing to 200 ms (+1000 ms saved, 6x faster, an 83.33% duration drop) with 0 timeouts (100.00% success), providing higher reliability at identical cost.',
        bn: '৫০০টি ইনভোকেশনের মেমরি স্কেলিং পর্যালোচনা করুন। ২৫৬ মেগাবাইটে প্রতিটি কাজ শেষ হতে ১২০০ ms লেগে ৩টি টাইমআউট ব্যর্থতা ঘটে (৯৯.৪০% সাফল্য)। মেমরি বাড়িয়ে ১৭৬৯ মেগাবাইটে (১টি ডেডিকেটেড vCPU) নিলে সময় কমে ২০০ ms এ দাঁড়ায় (+১০০০ ms সাশ্রয়, ৬ গুণ দ্রুত, ৮৩.৩৩% সময় হ্রাস) এবং ০টি টাইমআউট সহ ১০০.০০% সফলতা বজায় থাকে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Timeout lab (verify speedup, press Run)', bn: 'টাইমআউট ল্যাব (গতি বৃদ্ধি যাচাই, Run)' },
      html: '<h3>Memory & Timeout Benchmark</h3>\n<pre id="out"></pre>\n<p>Compute execution duration savings and dedicated vCPU throughput.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const dA = 1200;\nconst dB = 200;\nconst saved = dA - dB;\nconsole.log("duration saved: " + saved + " ms");\ndocument.getElementById("out").textContent = "256 MB: " + dA + " ms (3 timeouts) · 1769 MB: " + dB + " ms (1 vCPU, 0 timeouts) · Saved: +" + saved + " ms (6x faster, 83.33% drop ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Memory and timeout configuration rules', bn: 'ফলাফল — মেমরি ও টাইমআউট কনফিগারেশনের সোনালী নিয়মাবলী' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never configure functions with default 3-second timeouts in production: transient database queries or API latency can cause sudden cascading timeout failures.', bn: 'প্রোডাকশনে ডিফল্ট ৩ সেকেন্ড টাইমআউট রাখবেন না: ডেটাবেজ সাময়িক ধীরগতির হলেই ফাংশনগুলো একের পর এক টাইমআউট খেয়ে বন্ধ হয়ে যাবে।' },
        { en: 'Right-size compute around 1769 MB for CPU workloads: granting 1 dedicated vCPU eliminates CPU throttling while reducing execution duration.', bn: 'ভারী কাজের জন্য ১৭৬৯ মেগাবাইট মেমরি ব্যবহার করুন: ১টি সম্পূর্ণ ভার্চুয়াল প্রসেসর পাওয়ার কারণে কোড অনেক দ্রুত চলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The timeout cascading failure', bn: 'ডিবাগ — টাইমআউট বিপর্যয় ও প্রতিকার' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Upstream API Gateway 29-second ceiling mismatch', bn: 'API Gateway-এর ২৯ সেকেন্ড সীমার সাথে ল্যাম্বডার অসামঞ্জস্য' },
      text: {
        en: 'If you set your Lambda function timeout to 60 seconds behind an Amazon API Gateway REST API, API Gateway drops the HTTP client connection after exactly 29 seconds with an HTTP 504 Gateway Timeout. The Lambda function continues running in the background for another 31 seconds, wasting cloud compute budget on an orphaned client request! Always set Lambda timeout to 25 seconds or less for synchronous web APIs.',
        bn: 'যদি API Gateway-এর পেছনে থাকা ল্যাম্বডার টাইমআউট ৬০ সেকেন্ড সেট করা হয়, তবে ২৯ সেকেন্ড পরই API Gateway সংযোগ কেটে দিয়ে HTTP 504 এরর দেখাবে। অথচ ল্যাম্বডা পেছনের ব্যাকগ্রাউন্ডে আরো ৩১ সেকেন্ড অযথা চলবে এবং আপনার টাকা নষ্ট করবে! ওয়েব এপিআইয়ের জন্য ল্যাম্বডার টাইমআউট সর্বদা ২৫ সেকেন্ড বা তার নিচে রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using Graviton (arm64) architecture to slash bills by 20%', bn: 'Graviton (arm64) প্রসেসর ব্যবহার করে ২০% খরচ কমানো' },
      text: {
        en: 'Switching your Lambda function architecture from x86_64 to arm64 (AWS Graviton2) delivers up to 19% better performance at a 20% lower price per millisecond. For Node.js and Python microservices, this transition requires zero code changes.',
        bn: 'ল্যাম্বডা ফাংশনের প্রসেসর x86 থেকে arm64 (AWS Graviton) এ পরিবর্তন করলে কোডের কোনো পরিবর্তন ছাড়াই প্রায় ১৯% দ্রুত পারফরম্যান্স পাওয়া যায় এবং বিলিং খরচ ২০% কমে যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production cost optimization stories', bn: 'বাস্তব ক্ষেত্র — আধুনিক এন্টারপ্রাইজ খরচ অপ্টিমাইজেশন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Autodesk 3D Rendering: reduced serverless image conversion costs by 40% and improved latency by upgrading memory to 1769 MB (1 vCPU) on Graviton2.', bn: 'অটোডেস্ক: গ্রাভিটন প্রসেসরে মেমরি ১৭৬৯ মেগাবাইটে (১টি vCPU) বাড়িয়ে তাদের ৩ডি ইমেজ রেন্ডারিং খরচ ৪০% কমিয়ে এনেছে।' },
        { en: 'Liberty Mutual Insurance: benchmarked thousands of enterprise microservices with Lambda Power Tuning, saving over half a million dollars annually.', bn: 'লিবার্টি মিউচুয়াল ইন্স্যুরেন্স: পাওয়ার টিউনিং দিয়ে হাজার হাজার ফাংশনের মেমরি নিখুঁত করে বছরে লাখ লাখ ডলার সাশ্রয় করেছে।' },
        { en: 'Financial Modeling at Scale: leverages multiple CPU cores above 3008 MB memory to parallelize Monte Carlo risk simulations across thousands of serverless workers.', bn: 'ফিনান্সিয়াল রিস্ক সিমুলেশন: দ্রুততম সময়ে জটিল গাণিতিক হিসাব সম্পন্ন করতে ৩০০৮ মেগাবাইটের বেশি মেমরি ব্যবহার করে একাধিক সিপিইউ কোরের সুবিধা নেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Packaging: Zip Bundles vs Container Images & Lambda Layers', bn: 'পরবর্তী পাঠ — প্যাকেজিং: জিপ বান্ডল বনাম কনটেইনার ইমেজ ও ল্যাম্বডা লেয়ার' },
    },
    {
      type: 'para',
      text: {
        en: 'With resource sizing and timeout management mastered, Lesson 7 examines packaging strategies: slim zip deployment packages, shared Lambda Layers, and building OCI container images for serverless runtimes.',
        bn: 'রিসোর্স সাইজিং ও টাইমআউট পরিচালনা আয়ত্ত করার পর, পাঠ ৭ প্যাকেজিং কৌশল শেখাবে: হালকা জিপ বান্ডল, শেয়ার্ড ল্যাম্বডা লেয়ার এবং কনটেইনার ইমেজ তৈরি।',
      },
    },
  ],
  exercises: [
    {
      id: 'srv-time-ex-1',
      kind: 'mcq',
      topic: 'memory-cpu-correlation',
      question: {
        en: 'How does configuring memory allocation in AWS Lambda directly impact the compute capabilities of your function?',
        bn: 'AWS Lambda-তে মেমরি বরাদ্দ বাড়ালে তা কীভাবে সরাসরি ফাংশনের কম্পিউট ক্ষমতা বৃদ্ধি করে?',
      },
      options: [
        {
          en: 'Lambda allocates CPU power, network bandwidth, and disk I/O in direct linear proportion to configured memory, with 1769 MB unlocking exactly 1 full dedicated virtual CPU core',
          bn: 'মেমরির সাথে আনুপাতিক হারে ল্যাম্বডা সিপিইউ ক্ষমতা, নেটওয়ার্ক স্পিড ও ডিস্ক ব্যান্ডউইথ বাড়ায়, যেখানে ১৭৬৯ মেগাবাইট বরাদ্দ করলে ১টি সম্পূর্ণ ডেডিকেটেড ভার্চুয়াল প্রসেসর পাওয়া যায়',
        },
        {
          en: 'Memory allocation only changes the background color of the AWS management console',
          bn: 'মেমরি বাড়ালে কেবল ক্লাউড ম্যানেজমেন্ট কনসোলের ব্যাকগ্রাউন্ড রঙ পরিবর্তিত হয়',
        },
        {
          en: 'Allocating more memory makes the computer run on solar battery power',
          bn: 'বেশি মেমরি বরাদ্দ দিলে কম্পিউটার সৌর ব্যাটারির শক্তিতে চলতে শুরু করে',
        },
        {
          en: 'Memory allocation has zero effect on CPU speed or function execution duration',
          bn: 'সিপিইউর গতি বা কাজের সময়ের ওপর মেমরির কোনো ধরনের প্রভাব নেই',
        },
      ],
      answer: 0,
      hint: { en: 'Memory scales CPU linearly; 1769 MB = 1 dedicated vCPU.', bn: 'মেমরির সাথে সিপিইউ বাড়ে; ১৭৬৯ মেগাবাইট = ১টি ডেডিকেটেড vCPU।' },
      explanation: {
        en: 'In serverless runtimes, memory is the master lever controlling CPU, network bandwidth, and IOPS.',
        bn: 'সার্ভারলেসে মেমরি হলো প্রধান নিয়ন্ত্রণ যা প্রসেসর ক্ষমতা ও নেটওয়ার্কের গতি নিয়ন্ত্রণ করে।',
      },
    },
    {
      id: 'srv-time-ex-2',
      kind: 'mcq',
      topic: 'time-sim-numbers',
      question: {
        en: 'In our code walkthrough, how much execution duration was saved by upgrading memory from 256 MB (1200 ms, 3 timeouts) to 1769 MB (200 ms, 1 vCPU) across 500 invocations, and what was the duration reduction?',
        bn: 'আমাদের কোড আলোচনায় ৫০০টি ইনভোকেশনে মেমরি ২৫৬ মেগাবাইট (১২০০ ms, ৩টি টাইমআউট) থেকে ১৭৬৯ মেগাবাইটে (২০০ ms, ১টি vCPU) বাড়িয়ে কত সময় সাশ্রয় হয়েছিল এবং শতকরা কতটুকু সময় কমেছিল?',
      },
      options: [
        {
          en: 'Saved 1000 ms per invocation (6x faster, an 83.33% duration drop), eliminating all 3 timeouts to achieve 100.00% success across 500 invocations',
          bn: 'প্রতিবারে ১০০০ ms সাশ্রয় (৬ গুণ দ্রুত, ৮৩.৩৩% সময় হ্রাস), ৩টি টাইমআউট সম্পূর্ণ দূর করে ৫০০টি ইনভোকেশনে ১০০.০০% সফলতা নিশ্চিত হয়েছে',
        },
        {
          en: 'Saved 0 ms; all 500 invocations timed out with 50 errors',
          bn: '০ ms সাশ্রয়; ৫০টি এরর সহ ৫০০টি ইনভোকেশনের সবকয়টি টাইমআউট খেয়েছে',
        },
        {
          en: 'Saved 200 ms with 20 timeouts across 500 invocations',
          bn: '৫০০টি ইনভোকেশনে ২০টি টাইমআউট সহ ২০০ ms সাশ্রয়',
        },
        {
          en: 'Saved 50 ms with 10 timeouts across 500 invocations',
          bn: '৫০০টি ইনভোকেশনে ১০টি টাইমআউট সহ ৫০ ms সাশ্রয়',
        },
      ],
      answer: 0,
      hint: { en: '1200 - 200 = 1000 ms saved (6x faster, 83.33% drop), 0 timeouts.', bn: '১২০০ - ২০০ = ১০০০ ms সাশ্রয় (৬ গুণ দ্রুত, ৮৩.৩৩% হ্রাস), ০টি টাইমআউট।' },
      explanation: {
        en: 'Allocating 1769 MB reduced execution time from 1200 ms to 200 ms (1000 ms saved, 83.33% drop), preventing all 3 timeouts.',
        bn: '১৭৬৯ মেগাবাইট মেমরির কারণে সময় ১২০০ ms থেকে ২০০ ms এ নেমে ১০০০ ms সময় বাঁচায় এবং ৩টি টাইমআউট প্রতিহত করে।',
      },
    },
    {
      id: 'srv-time-ex-3',
      kind: 'mcq',
      topic: 'api-gateway-timeout-mismatch',
      question: {
        en: 'Why is setting a Lambda function timeout greater than 29 seconds behind an Amazon API Gateway REST API considered an anti-pattern?',
        bn: 'Amazon API Gateway REST API-এর পেছনে থাকা ল্যাম্বডা ফাংশনের টাইমআউট ২৯ সেকেন্ডের বেশি রাখা কেন একটি মারাত্মক ভুল?',
      },
      options: [
        {
          en: 'Because API Gateway enforces a hard unchangeable 29-second ceiling; if the function takes longer, API Gateway closes the connection with an HTTP 504 error while the Lambda continues running wasted in the background',
          bn: 'কারণ API Gateway-এর সর্বোচ্চ সময়সীমা ২৯ সেকেন্ড; ফাংশন এর চেয়ে বেশি সময় নিলে গেটওয়ে সংযোগ বিচ্ছিন্ন করে ৫০৪ এরর দেয় এবং পেছনের ল্যাম্বডা অযথা চলে ক্লাউডের টাকা অপচয় করে',
        },
        {
          en: 'Because API Gateway deletes the database tables after 29 seconds',
          bn: 'কারণ ২৯ সেকেন্ড পর API Gateway ডেটাবেজ টেবিল মুছে ফেলে',
        },
        {
          en: 'Because computers cannot count higher than twenty-nine seconds',
          bn: 'কারণ কম্পিউটার ২৯ সেকেন্ডের বেশি সময় গণনা করতে পারে না',
        },
        {
          en: 'Because longer timeouts cause optical fiber cables to melt',
          bn: 'কারণ বেশি সময় ধরে ফাংশন চললে অপটিক্যাল ফাইবার তার গলে যায়',
        },
      ],
      answer: 0,
      hint: { en: 'API Gateway times out after 29s, orphaning background Lambda runs.', bn: 'গেটওয়ে ২৯ সেকেন্ডে বন্ধ হয়ে পেছনের ল্যাম্বডাকে অর্থহীনভাবে চালিয়ে রাখে।' },
      explanation: {
        en: 'API Gateway hard limits client connections to 29 seconds; Lambda timeouts for synchronous APIs should stay below 25 seconds.',
        bn: 'এপিআই গেটওয়ের ২৯ সেকেন্ডের কঠোর সীমার কারণে সিনক্রোনাস এপিআইতে ল্যাম্বডার টাইমআউট ২৫ সেকেন্ডের নিচে রাখা উচিত।',
      },
    },
    {
      id: 'srv-time-ex-4',
      kind: 'predict',
      topic: 'dedicated-vcpu-memory-megabytes',
      question: {
        en: 'How many megabytes of memory must be allocated to an AWS Lambda function to receive exactly one full dedicated vCPU (e.g. 1769)?',
        bn: 'AWS Lambda ফাংশনে ঠিক ১টি সম্পূর্ণ ডেডিকেটেড ভার্চুয়াল প্রসেসর (vCPU) পেতে কত মেগাবাইট মেমরি বরাদ্দ করতে হয় (যেমন 1769)?',
      },
      answer: '1769',
      accept: ['1769', '1769 MB', '1,769', '1,769 MB'],
      hint: { en: '1769', bn: '1769' },
      explanation: {
        en: 'At 1769 MB of memory, AWS Lambda assigns the equivalent of one full dedicated vCPU.',
        bn: '১৭৬৯ মেগাবাইট মেমরিতে ল্যাম্বডা ১টি পূর্ণ ডেডিকেটেড ভার্চুয়াল সিপিইউ প্রদান করে।',
      },
    },
  ],
  quiz: {
    id: 'timeouts-and-the-timeout-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'srv-time-q1',
        kind: 'mcq',
        topic: 'power-tuning-cost-paradox',
        question: {
          en: 'Why can allocating more memory to a compute-intensive serverless function actually result in a lower total cloud bill?',
          bn: 'ভারী গাণিতিক কাজের সার্ভারলেস ফাংশনে মেমরি বাড়িয়ে দিলে কীভাবে সামগ্রিক ক্লাউড বিল উল্টো কমে যেতে পারে?',
        },
        options: [
          {
            en: 'Because billing is calculated as memory multiplied by execution duration; if giving 4x memory finishes the job 6x faster, the duration drops faster than the price per millisecond increases',
            bn: 'কারণ বিলিং নির্ধারিত হয় মেমরি ও সময়ের গুণফলে; ৪ গুণ মেমরি দিলে যদি কাজ ৬ গুণ দ্রুত শেষ হয়, তবে বাড়তি মেমরির খরচের চেয়ে সময়ের সাশ্রয় বেশি হওয়ায় মোট বিল কমে যায়',
          },
          {
            en: 'Because cloud providers offer free electricity to functions with more memory',
            bn: 'কারণ বেশি মেমরি ব্যবহারকারী ফাংশনকে ক্লাউড প্রোভাইডার বিনামূল্যে বিদ্যুৎ দেয়',
          },
          {
            en: 'Because more memory automatically deletes all log files to save money',
            bn: 'কারণ বেশি মেমরি দিলে ফাংশন নিজে থেকেই সব লগ মুছে টাকা বাঁচায়',
          },
          {
            en: 'Because higher memory settings allow software engineers to pay in local currency',
            bn: 'কারণ বেশি মেমরি দিলে সফটওয়্যার ইঞ্জিনিয়ার স্থানীয় মুদ্রায় বিল দিতে পারেন',
          },
        ],
        answer: 0,
        hint: { en: 'Duration drops faster than the GB-second price increases.', bn: 'মেমরি বাড়ালে কাজ অনেক দ্রুত শেষ হয়ে মোট বিল কমে যায়।' },
        explanation: {
          en: 'Compute billing is duration times memory; when speedup outpaces the memory price increase, net costs decrease.',
          bn: 'মেমরি বাড়ানোর ফলে সময় অনেক বেশি কমে গেলে সামগ্রিক বিলিং কম আসে।',
        },
      },
      {
        id: 'srv-time-q2',
        kind: 'mcq',
        topic: 'time-sim-latency-drop-check',
        question: {
          en: 'In our code walkthrough, what was the execution duration of Config B (1769 MB, 1 vCPU) compared to Config A (256 MB) across 500 invocations, and how many timeouts occurred on Config B?',
          bn: 'আমাদের কোড আলোচনায় ৫০০টি ইনভোকেশনে কনফিগ এ-র (২৫৬ MB) তুলনায় কনফিগ বি-তে (১৭৬৯ MB, ১টি vCPU) কাজের সময় কত ছিল এবং কনফিগ বি-তে কয়টি টাইমআউট হয়েছিল?',
        },
        options: [
          { en: '200 ms on Config B vs 1200 ms on Config A (6x faster, +1000 ms saved, 83.33% duration drop) with 0 timeouts (100.00% success across 500 invocations)', bn: 'কনফিগ এ-র ১২০০ ms এর তুলনায় কনফিগ বি-তে মাত্র ২০০ ms (৬ গুণ দ্রুত, +১০০০ ms সাশ্রয়, ৮৩.৩৩% সময় হ্রাস) এবং ০টি টাইমআউট (৫০০টি ইনভোকেশনে ১০০.০০% সফলতা)' },
          { en: '1200 ms on Config B with 50 timeouts across 500 invocations', bn: '৫০০টি ইনভোকেশনে ৫০টি টাইমআউট সহ কনফিগ বি-তে ১২০০ ms' },
          { en: '500 ms on Config B with 20 timeouts across 500 invocations', bn: '৫০০টি ইনভোকেশনে ২০টি টাইমআউট সহ কনফিগ বি-তে ৫০০ ms' },
          { en: '1000 ms on Config B with 10 timeouts across 500 invocations', bn: '৫০০টি ইনভোকেশনে ১০টি টাইমআউট সহ কনফিগ বি-তে ১০০০ ms' },
        ],
        answer: 0,
        hint: { en: '200 ms vs 1200 ms (+1000 ms saved, 6x faster), 0 timeouts.', bn: '২০০ ms বনাম ১২০০ ms (+১০০০ ms সাশ্রয়, ৬ গুণ দ্রুত), ০টি টাইমআউট।' },
        explanation: {
          en: 'Config B resolved in 200 ms vs 1200 ms on Config A, saving 1000 ms with 0 timeouts and 100.00% success.',
          bn: 'কনফিগ বি ১২০০ ms এর বদলে মাত্র ২০০ ms এ কাজ শেষ করে ১০০০ ms সময় বাঁচায় এবং ০টি টাইমআউট নিশ্চিত করে।',
        },
      },
      {
        id: 'srv-time-q3',
        kind: 'mcq',
        topic: 'graviton-arm64-benefit',
        question: {
          en: 'What architectural and economic advantage does switching serverless runtimes from x86_64 to arm64 (AWS Graviton) provide?',
          bn: 'সার্ভারলেস রানটাইমে x86_64 প্রসেসরের বদলে arm64 (AWS Graviton) ব্যবহার করলে কোন স্থাপত্যিক ও অর্থনৈতিক সুবিধা পাওয়া যায়?',
        },
        options: [
          {
            en: 'It delivers up to 19% better performance at a 20% lower price per millisecond of compute, requiring zero code changes for interpreted languages like Node.js and Python',
            bn: 'এটি প্রায় ১৯% দ্রুত পারফরম্যান্স প্রদান করার পাশাপাশি প্রতি মিলিসেকেন্ডে ২০% কম খরচে সেবা দেয়, যা Node.js ও Python-এর মতো ভাষায় কোডের কোনো পরিবর্তন ছাড়াই কার্যকর হয়',
          },
          {
            en: 'It turns the physical server room into a wireless internet antenna',
            bn: 'এটি সার্ভার রুমকে একটি ওয়্যারলেস ইন্টারনেট অ্যান্টেনার রূপ দেয়',
          },
          {
            en: 'It automatically translates English code into Japanese',
            bn: 'এটি কোডের সমস্ত ইংরেজি ভাষাকে জাপানি ভাষায় রূপান্তর করে ফেলে',
          },
          {
            en: 'It eliminates the need for software engineers to write unit tests',
            bn: 'এটি ডেভেলপারদের ইউনিট টেস্ট লেখার প্রয়োজনীয়তা চিরতরে দূর করে',
          },
        ],
        answer: 0,
        hint: { en: 'Arm64 gives up to 19% better performance at 20% lower cost.', bn: 'Arm64 ২০% কম খরচে ১৯% পর্যন্ত বেশি গতি প্রদান করে।' },
        explanation: {
          en: 'AWS Graviton (arm64) provides superior compute efficiency, cutting cloud bills by 20% with zero code friction.',
          bn: 'Graviton আর্কিটেকচার কম খরচে বেশি ক্ষমতা দেওয়ায় ২০% ক্লাউড খরচ কমে যায়।',
        },
      },
      {
        id: 'srv-time-q4',
        kind: 'predict',
        topic: 'maximum-lambda-timeout-minutes',
        question: {
          en: 'What is the absolute maximum execution timeout limit in minutes supported by an AWS Lambda function (e.g. 15)?',
          bn: 'একটি AWS Lambda ফাংশনের জন্য সর্বোচ্চ কত মিনিট পর্যন্ত এক্সিকিউশন টাইমআউট নির্ধারণ করা সম্ভব (যেমন 15)?',
        },
        answer: '15',
        accept: ['15', '15 minutes', '15m', '900 seconds'],
        hint: { en: '15 minutes', bn: '15 minutes' },
        explanation: {
          en: 'AWS Lambda permits function execution timeouts up to a maximum of 15 minutes (900 seconds).',
          bn: 'AWS Lambda-তে একটি ফাংশন সর্বোচ্চ ১৫ মিনিট (৯০০ সেকেন্ড) পর্যন্ত চলতে পারে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'zips-and-the-zip',
    title: { en: 'Packaging: Zip Bundles vs Container Images & Lambda Layers', bn: 'প্যাকেজিং: জিপ বান্ডল বনাম কনটেইনার ইমেজ ও ল্যাম্বডা লেয়ার' },
  },
};
