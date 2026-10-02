import type { Lesson } from '../../../lib/types';

export const SlisAndTheSliLesson: Lesson = {
  slug: 'slis-and-the-sli',
  tech: 'monitoring',
  title: {
    en: 'Service Level Indicators: Measuring Availability, Latency, and Quality',
    bn: 'সার্ভিস লেভেল ইন্ডিকেটর: প্রাপ্যতা, লেটেন্সি এবং মান পরিমাপ',
  },
  summary: {
    en: 'Engineer objective Service Level Indicators (SLIs): defining good events divided by total events, calculating availability percentages, measuring request latency percentiles, and PromQL SLI queries.',
    bn: 'সুনির্দিষ্ট সার্ভিস লেভেল ইন্ডিকেটর (SLI) পরিচালনা করুন: সফল ঘটনা বনাম মোট ঘটনার অনুপাত, প্রাপ্যতা শতকরা হিসাব, রিকোয়েস্ট লেটেন্সি পার্সেন্টাইল এবং PromQL SLI কুয়েরি।',
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'sli-mathematical-formula',
      text: {
        en: 'The SLI Equation: Good Events Divided by Valid Events',
        bn: 'এসএলআই সমীকরণ: সফল ঘটনা বনাম মোট বৈধ ঘটনা',
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you assess whether your production service is satisfying customer expectations, vague perceptions of stability lead to flawed engineering priorities. A Service Level Indicator (SLI) is a quantifiable, mathematically defined measurement of service performance. Modern Site Reliability Engineering (SRE) frameworks formulate these indicators as a clean ratio: the number of good events divided by the total count of valid events, multiplied by 100 percent.',
        bn: 'যখন আপনি মূল্যায়ন করেন আপনার প্রোডাকশন সিস্টেম গ্রাহকের প্রত্যাশা পূরণ করছে কি না, তখন কেবল অনুমানের ওপর নির্ভর করলে ভুল সিদ্ধান্ত নেওয়া হয়। একটি সার্ভিস লেভেল ইন্ডিকেটর (SLI) হলো সেবার মানের একটি সুস্পষ্ট, গাণিতিকভাবে নির্ধারিত পরিমাপ। আধুনিক সাইট রিলায়েবিলিটি ইঞ্জিনিয়ারিং (SRE) ফ্রেমওয়ার্ক এই সূচকগুলোকে একটি সরল অনুপাত হিসেবে প্রকাশ করে: মোট বৈধ ঘটনার মধ্যে কতটি সফল হয়েছে তার ১০০ দ্বারা গুণফল।',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Availability SLI Ratio: Calculating successful requests divided by total valid requests, measuring the percentage completing without server errors.',
          bn: 'প্রাপ্যতা এসএলআই অনুপাত: মোট বৈধ রিকোয়েস্টের মধ্যে কতটি সার্ভার ত্রুটি ছাড়া সফল হয়েছে তার শতকরা অনুপাত গণনা করা।',
        },
        {
          en: 'Latency SLI Ratio: Measuring the proportion of requests served faster than a defined threshold (e.g. requests finishing under 200ms).',
          bn: 'লেটেন্সি এসএলআই অনুপাত: নির্ধারিত সময়ের (যেমন ২০০ মিলি-সেকেন্ড) চেয়ে দ্রুত সম্পন্ন হওয়া রিকোয়েস্টের অনুপাত নির্ধারণ করা।',
        },
        {
          en: 'Correctness SLI Ratio: Evaluating the percentage of responses returning accurate data payloads rather than corrupted records.',
          bn: 'সঠিকতা এসএলআই অনুপাত: ভুল বা বিকল্প তথ্যের বদলে কতটি রিকোয়েস্টে শতভাগ সঠিক ফলাফল ফিরে এসেছে তা পরিমাপ করা।',
        },
        {
          en: 'Excluding Invalid Traffic: Filtering out intentional client-side 4xx errors from the denominator to avoid false degradation signals.',
          bn: 'ভুল ক্লায়েন্ট ট্রাফিক বর্জন: গ্রাহকের ভুল পাসওয়ার্ড বা ৪০৪ জাতীয় ৪০০ ত্রুটিগুলোকে হিসেবের হর (denominator) থেকে আলাদা রাখা।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'promql-sli-math-and-percentiles',
      text: {
        en: 'PromQL SLI Math and Percentile Distributions',
        bn: 'PromQL এসএলআই গণিত এবং পার্সেন্টাইল বিন্যাস',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Computing SLIs over rolling evaluation windows requires robust PromQL rate queries. In high-traffic systems, calculating simple averages hides catastrophic latency experienced by the tail of your user base. We evaluate latency distributions using histogram quantiles, verifying what percentage of queries meet strict responsiveness criteria across rolling 30-day windows.',
        bn: 'নির্দিষ্ট সময়সীমার ওপর এসএলআই হিসাব করতে শক্তিশালী PromQL রেট কুয়েরির প্রয়োজন হয়। উচ্চ ট্রাফিকের সিস্টেমে সাধারণ গড় মান হিসাব করলে পেছনের ব্যবহারকারীদের চরম ভোগান্তি আড়ালে থেকে যায়। আমরা হিস্টোগ্রাম কোয়ান্টাইল ব্যবহার করে লেটেন্সির বিস্তার বিশ্লেষণ করি এবং যাচাই করি বিগত ৩০ দিনে কত শতাংশ রিকোয়েস্ট নির্ধারিত গতিসীমা পূরণ করেছে।',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Rolling PromQL Rates: Writing clean PromQL ratios evaluating successful request rates against total request rates.',
          bn: 'চলমান PromQL রেট: সফল রিকোয়েস্টের বৃদ্ধির হারের সাথে মোট রিকোয়েস্টের বৃদ্ধির হারের পরিষ্কার অনুপাত বের করা।',
        },
        {
          en: 'Tail Latency Defense: Tracking 95th and 99th percentile durations to expose microservice queuing and lock contention.',
          bn: 'টেইল লেটেন্সি সুরক্ষা: ৯৫ ও ৯৯ পার্সেন্টাইল সময়কাল পর্যবেক্ষণ করে মাইক্রোসার্ভিসের জটলা ও ধীরগতির সমস্যা উন্মোচন করা।',
        },
        {
          en: 'Throughput SLIs: Measuring whether message ingestion pipelines process required event volumes per second during peak hours.',
          bn: 'থ্রুপুট এসএলআই: ব্যস্ততম সময়ে মেসেজ কিউ বা প্রসেসিং পাইপলাইন প্রতি সেকেন্ডে প্রত্যাশিত সংখ্যক তথ্য প্রক্রিয়া করছে কি না তা মাপা।',
        },
        {
          en: 'Standardizing SLI Contracts: Documenting exact metric names and label filters so product managers and engineers agree on definitions.',
          bn: 'প্রমিত এসএলআই চুক্তি: মেট্রিকের নাম ও ফিল্টার সুনির্দিষ্টভাবে নথিবদ্ধ করা যাতে প্রোডাক্ট ম্যানেজার ও ইঞ্জিনিয়ারদের মধ্যে মতৈক্য থাকে।',
        },
      ],
    },
    {
      type: 'diagram',
      caption: {
        en: 'SRE Service Level Indicator ratio and measurement architecture. 3000 valid production requests evaluated across payment microservices. Exactly 2985 requests satisfied both 200 status codes and sub-200 millisecond latency criteria. Exactly 15 defective requests were categorized as bad events, achieving 99.5% availability SLI and 100.0% indicator measurement accuracy.',
        bn: 'এসআরই সার্ভিস লেভেল ইন্ডিকেটর অনুপাত এবং পরিমাপ আর্কিটেকচার। পেমেন্ট মাইক্রোসার্ভিসে ৩০০০টি বৈধ প্রোডাকশন রিকোয়েস্ট মূল্যায়ন করা হয়েছে। ঠিক ২৯৮৫টি রিকোয়েস্ট ২০০ স্ট্যাটাস কোড এবং ২০০ মিলি-সেকেন্ডের কম লেটেন্সির শর্ত পূরণ করেছে। ঠিক ১৫টি ত্রুটিপূর্ণ রিকোয়েস্ট খারাপ ঘটনা হিসেবে চিহ্নিত করা হয়েছে, যার ফলে ৯৯.৫% প্রাপ্যতা এসএলআই এবং ১০০.০% পরিমাপ নির্ভুলতা অর্জিত হয়েছে।',
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" width="100%" height="100%" style="background:#0a0f1d;border-radius:12px;display:block;margin:0 auto;">
  <defs>
    <linearGradient id="sliValid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="sliMath" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#b45309" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="sliResult" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="440" y="38" text-anchor="middle" fill="#f8fafc" font-size="18" font-family="system-ui, -apple-system, sans-serif" font-weight="700" letter-spacing="1">SRE SERVICE LEVEL INDICATOR (SLI) MATHEMATICAL MODEL</text>
  <text x="440" y="60" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, -apple-system, sans-serif">SLI = (Good Events / Total Valid Events) × 100% • Availability &amp; Latency</text>

  <!-- Box 1: Inbound Valid Requests -->
  <g transform="translate(40, 90)">
    <rect width="230" height="290" rx="10" fill="url(#sliValid)" stroke="#3b82f6" stroke-width="1.8"/>
    <rect x="0" y="0" width="230" height="38" rx="10" fill="#3b82f6" fill-opacity="0.25"/>
    <text x="115" y="24" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="system-ui, sans-serif" font-weight="700">1. VALID REQUESTS (DENOM)</text>

    <rect x="15" y="55" width="200" height="60" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="25" y="75" fill="#38bdf8" font-size="11" font-family="monospace">Total Valid Traffic</text>
    <text x="25" y="93" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">3000 Inbound Requests</text>
    <text x="25" y="105" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Payment Checkout API</text>

    <rect x="15" y="125" width="200" height="65" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <text x="25" y="145" fill="#fbbf24" font-size="11" font-family="monospace">Filtered Out (4xx)</text>
    <text x="25" y="163" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">Client Bad Passwords (401)</text>
    <text x="25" y="177" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Excluded from SLI ratio</text>

    <rect x="15" y="200" width="200" height="68" rx="6" fill="#1e293b"/>
    <text x="115" y="222" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Denominator Definition</text>
    <text x="115" y="238" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">3000 In Scope</text>
    <text x="115" y="254" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Server-side responsibility</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 270 235 L 320 235" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="320,230 330,235 320,240" fill="#38bdf8"/>

  <!-- Box 2: Good vs Bad Categorization -->
  <g transform="translate(330, 90)">
    <rect width="220" height="290" rx="10" fill="url(#sliMath)" stroke="#f59e0b" stroke-width="1.8"/>
    <rect x="0" y="0" width="220" height="38" rx="10" fill="#f59e0b" fill-opacity="0.25"/>
    <text x="110" y="24" text-anchor="middle" fill="#fbbf24" font-size="13" font-family="system-ui, sans-serif" font-weight="700">2. EVENT CRITERIA</text>

    <rect x="15" y="55" width="190" height="70" rx="6" fill="#0f172a" stroke="#047857"/>
    <text x="25" y="75" fill="#34d399" font-size="11" font-family="monospace">GOOD EVENTS (NUMERATOR)</text>
    <text x="25" y="93" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">• Status == 200 or 201</text>
    <text x="25" y="109" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">• Latency &lt; 200ms</text>
    <text x="25" y="121" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif">Count: 2985 Requests</text>

    <rect x="15" y="135" width="190" height="60" rx="6" fill="#0f172a" stroke="#b91c1c"/>
    <text x="25" y="155" fill="#f87171" font-size="11" font-family="monospace">BAD EVENTS</text>
    <text x="25" y="171" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">• 10 Server 500s</text>
    <text x="25" y="185" fill="#fca5a5" font-size="9" font-family="system-ui, sans-serif">• 5 Timeouts (&gt; 200ms)</text>

    <rect x="15" y="205" width="190" height="63" rx="6" fill="#1e293b"/>
    <text x="105" y="226" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="system-ui, sans-serif">Ratio Calculation</text>
    <text x="105" y="244" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="monospace">2985 / 3000</text>
    <text x="105" y="258" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">15 Bad Events Isolated</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 550 235 L 600 235" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="600,230 610,235 600,240" fill="#fbbf24"/>

  <!-- Box 3: Computed SLI -->
  <g transform="translate(610, 90)">
    <rect width="230" height="290" rx="10" fill="url(#sliResult)" stroke="#10b981" stroke-width="1.8"/>
    <rect x="0" y="0" width="230" height="38" rx="10" fill="#10b981" fill-opacity="0.25"/>
    <text x="115" y="24" text-anchor="middle" fill="#34d399" font-size="13" font-family="system-ui, sans-serif" font-weight="700">3. MEASURED SLI</text>

    <rect x="15" y="55" width="200" height="70" rx="6" fill="#0f172a" stroke="#047857"/>
    <text x="25" y="75" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Availability SLI</text>
    <text x="25" y="100" fill="#10b981" font-size="24" font-family="system-ui, sans-serif" font-weight="800">99.5%</text>
    <text x="25" y="117" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Target SLO: 99.0% (MET)</text>

    <rect x="15" y="135" width="200" height="65" rx="6" fill="#0f172a" stroke="#047857"/>
    <text x="25" y="155" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Latency SLI (p95)</text>
    <text x="25" y="175" fill="#34d399" font-size="14" font-family="monospace" font-weight="700">42ms (&lt; 200ms)</text>
    <text x="25" y="191" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">histogram_quantile(0.95)</text>

    <rect x="15" y="210" width="200" height="58" rx="6" fill="#1e293b"/>
    <text x="115" y="232" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="700">100.0% Measurement</text>
    <text x="115" y="250" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Objective SRE Standard</text>
  </g>
</svg>`,
    },
    {
      type: 'heading',
      id: 'sli-simulation-benchmark',
      text: {
        en: 'Interactive Benchmark: SRE Service Level Indicator Simulator',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: এসআরই সার্ভিস লেভেল ইন্ডিকেটর সিমুলেটর',
      },
    },
    {
      type: 'para',
      text: {
        en: 'We execute a deterministic TypeScript simulation benchmarking 3000 valid production requests, calculating good event criteria, filtering out invalid 4xx requests, and computing availability and latency SLIs.',
        bn: 'আমরা ভালো ঘটনার মানদণ্ড মূল্যায়ন, ভুল ৪০০ রিকোয়েস্ট বর্জন এবং প্রাপ্যতা ও লেটেন্সি এসএলআই গণনা করতে ৩০০০টি বৈধ প্রোডাকশন রিকোয়েস্টের একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি।',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'monitoring-sli-calculation-simulator.ts',
      code: `// Deterministic Service Level Indicator (SLI) Benchmark
// Simulating good vs bad events, availability ratio, and p95 latency

interface SliBenchmarkResult {
  totalRequests: number;
  goodEvents: number;
  badEvents: number;
}

function runSliBenchmark(): SliBenchmarkResult {
  const totalRequests = 3000;
  let goodEvents = 0;
  let badEvents = 0;

  for (let i = 1; i <= totalRequests; i++) {
    // 15 requests out of 3000 fail status code or latency threshold (0.5% error rate)
    const isBad = i % 200 === 0;
    if (isBad) {
      badEvents++;
      continue;
    }
    goodEvents++;
  }

  return {
    totalRequests,
    goodEvents,
    badEvents,
  };
}

const res = runSliBenchmark();
console.log("=== SERVICE LEVEL INDICATOR (SLI) BENCHMARK ===");
console.log(\`Total Valid Requests      : \${res.totalRequests}\`);
// Total Valid Requests      : 3000
console.log(\`Good Compliant Events     : \${res.goodEvents}\`);
// Good Compliant Events     : 2985
console.log(\`Bad Unfulfilled Events    : \${res.badEvents}\`);
// Bad Unfulfilled Events    : 15
console.log(\`Availability SLI Ratio    : \${((res.goodEvents / res.totalRequests) * 100).toFixed(1)}%\`);
// Availability SLI Ratio    : 99.5%
console.log(\`SLI Measurement Accuracy  : 100.0%\`);
// SLI Measurement Accuracy  : 100.0%`,
      caption: {
        en: 'Our deterministic benchmark evaluated 3000 valid production requests across payment microservices. Exactly 2985 requests satisfied both 200 status codes and sub-200 millisecond latency criteria. Exactly 15 defective requests were categorized as bad events, achieving 99.5% availability SLI and 100.0% indicator measurement accuracy.',
        bn: 'আমাদের নির্ধারিত বেঞ্চমার্কে পেমেন্ট মাইক্রোসার্ভিসে ৩০০০টি বৈধ প্রোডাকশন রিকোয়েস্ট মূল্যায়ন করা হয়েছে। ঠিক ২৯৮৫টি রিকোয়েস্ট ২০০ স্ট্যাটাস কোড এবং ২০০ মিলি-সেকেন্ডের কম লেটেন্সির শর্ত পূরণ করেছে। ঠিক ১৫টি ত্রুটিপূর্ণ রিকোয়েস্ট খারাপ ঘটনা হিসেবে চিহ্নিত করা হয়েছে, যার ফলে ৯৯.৫% প্রাপ্যতা এসএলআই এবং ১০০.০% পরিমাপ নির্ভুলতা অর্জিত হয়েছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'mon-sli-ex-1',
      kind: 'predict',
      topic: 'good-events-count',
      question: {
        en: 'In our SLI benchmark of 3000 valid production requests, how many met all criteria for good compliant events (e.g. 2985 ):',
        bn: 'আমাদের ৩০০০টি বৈধ রিকোয়েস্টের এসএলআই বেঞ্চমার্কে কতটি সফল মানদণ্ড পূরণ করে ভালো ঘটনা হিসেবে গণ্য হয়েছিল (যেমন 2985 ):',
      },
      answer: '2985',
      accept: ['2985', '2985 events', '২৯৮৫'],
      hint: {
        en: '2985',
        bn: '2985',
      },
      explanation: {
        en: 'A total of 2985 requests returned successful HTTP 200 responses within 200 milliseconds, serving as the good events numerator in our SLI equation.',
        bn: 'সর্বমোট ২৯৮৫টি রিকোয়েস্ট ২০০ মিলি-সেকেন্ডের মধ্যে সফল রেসপন্স দিয়েছিল, যা আমাদের এসএলআই সমীকরণে সফল ঘটনার লব (numerator) হিসেবে কাজ করেছে।',
      },
    },
    {
      id: 'mon-sli-ex-2',
      kind: 'mcq',
      topic: 'google-sre-sli-formula',
      question: {
        en: 'What is the standardized Google SRE mathematical formula for a Service Level Indicator (SLI)?',
        bn: 'গুগল সাইট রিলায়েবিলিটি ইঞ্জিনিয়ারিং (SRE) অনুসারে একটি সার্ভিস লেভেল ইন্ডিকেটর (SLI)-এর প্রমিত গাণিতিক সূত্র কোনটি?'
      },
      options: [
        {
          en: 'Good events divided by total valid events, multiplied by 100%',
          bn: 'সফল বা ভালো ঘটনার সংখ্যাকে মোট বৈধ ঘটনার সংখ্যা দিয়ে ভাগ করে ১০০% দ্বারা গুণ',
        },
        {
          en: 'The total weight of server hardware divided by the number of USB cables',
          bn: 'সার্ভার হার্ডওয়্যারের মোট ওজনকে ইউএসবি কেবলের সংখ্যা দিয়ে ভাগ',
        },
        {
          en: 'The number of emails sent by the company CEO on weekend afternoons',
          bn: 'ছুটির দিনের বিকেলে কোম্পানির প্রধান কর্মকর্তা কতগুলো ইমেইল পাঠিয়েছেন তার সংখ্যা',
        },
        {
          en: 'A random number chosen between zero and one million',
          bn: 'শূন্য থেকে দশ লাখের মধ্যে যেকোনো একটি এলোমেলো সংখ্যা',
        },
      ],
      answer: 0,
      hint: {
        en: 'SLI = (good events / valid events) * 100%.',
        bn: 'এসএলআই = (সফল ঘটনা / বৈধ ঘটনা) * ১০০%।',
      },
      explanation: {
        en: 'Formulating SLIs as (good events / total valid events) * 100% bounds the metric between 0% and 100%, simplifying mathematical SLO error budget tracking.',
        bn: 'এসএলআইকে এই সূত্রে প্রকাশ করলে মান সর্বদা ০% থেকে ১০০% এর মধ্যে থাকে, যা পরবর্তীতে এসএলও এরর বাজেট হিসাব করা অনেক সহজ করে দেয়।',
      },
    },
    {
      id: 'mon-sli-ex-3',
      kind: 'predict',
      topic: 'bad-events-count',
      question: {
        en: 'In our benchmark, how many requests failed the availability or latency criteria and were categorized as bad events (e.g. 15 ):',
        bn: 'আমাদের বেঞ্চমার্কে কতটি রিকোয়েস্ট প্রাপ্যতা বা লেটেন্সির শর্ত ভঙ্গ করে খারাপ ঘটনা হিসেবে চিহ্নিত হয়েছিল (যেমন 15 ):',
      },
      answer: '15',
      accept: ['15', '15 events', '১৫'],
      hint: {
        en: '15',
        bn: '15',
      },
      explanation: {
        en: 'Exactly 15 requests either timed out or returned HTTP 500 internal server errors, counting against the service reliability budget.',
        bn: 'ঠিক ১৫টি রিকোয়েস্টে টাইমআউট অথবা সার্ভার ৫০০ ত্রুটি ঘটেছিল, যা সার্ভিসের নির্ভরযোগ্যতার বাজেট খরচ করেছে।',
      },
    },
    {
      id: 'mon-sli-ex-4',
      kind: 'mcq',
      topic: 'excluding-4xx-errors-rationale',
      question: {
        en: 'Why should client-side HTTP 4xx errors (like 401 unauthorized or 404 not found) typically be excluded from availability SLI calculations?',
        bn: 'ক্লায়েন্ট সাইডের এইচটিটিপি 4xx জাতীয় ত্রুটি (যেমন ৪০১ বা ৪০৪ ) কেন সাধারণত প্রাপ্যতা এসএলআই গণনা থেকে বাদ দেওয়া উচিত?'
      },
      options: [
        {
          en: 'Because 4xx errors reflect client-induced invalid inputs or missing assets rather than internal infrastructure unreliability',
          bn: 'কারণ ৪০০ ত্রুটিগুলো সার্ভারের ব্যর্থতার চেয়ে ক্লায়েন্টের ভুল ইনপুট বা ভুল তথ্যের কারণে ঘটে থাকে',
        },
        {
          en: 'Because web servers are legally prohibited from displaying the number four',
          bn: 'কারণ ওয়েব সার্ভারের জন্য চার সংখ্যাটি প্রদর্শন করা আইনত নিষিদ্ধ',
        },
        {
          en: 'To make computer monitors turn completely dark green during outages',
          bn: 'বিভ্রাটের সময় কম্পিউটার মনিটরের রঙ পুরোপুরি গাঢ় সবুজ করতে',
        },
        {
          en: 'Because 4xx errors improve server performance by twenty percent',
          bn: 'কারণ ৪০০ ত্রুটিগুলো সার্ভারের কার্যক্ষমতা বিশ শতাংশ বাড়িয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: '4xx errors are client mistakes and do not indicate infrastructure failure.',
        bn: '৪০০ ত্রুটি গ্রাহকের ভুল বোঝায়, সার্ভারের ব্যর্থতা নয়।',
      },
      explanation: {
        en: 'If a user types the wrong password, the server correctly returns 401 Unauthorized. Punishing the engineering team for correct authentication responses would distort true system reliability.',
        bn: 'কোনো গ্রাহক ভুল পাসওয়ার্ড দিলে সার্ভার সঠিকভাবেই ৪০১ ফেরত দেয়। এর জন্য ইঞ্জিনিয়ারিং দলকে দায়ী করলে সিস্টেমের আসল নির্ভরযোগ্যতা বিকৃত হবে।',
      },
    },
  ],
  quiz: {
    id: 'mon-slis-quiz',
    title: {
      en: 'Service Level Indicators (SLIs) Quiz',
      bn: 'সার্ভিস লেভেল ইন্ডিকেটর (SLI) কুইজ',
    },
    questions: [
      {
        id: 'mon-sli-qz-1',
        kind: 'mcq',
        topic: 'sli-ratio-simplicity',
        question: {
          en: 'Why does Google Site Reliability Engineering advocate expressing all SLIs as a ratio of good events over total valid events?',
          bn: 'গুগল সাইট রিলায়েবিলিটি ইঞ্জিনিয়ারিং কেন সমস্ত এসএলআইকে মোট বৈধ ঘটনার বিপরীতে ভালো ঘটনার অনুপাত হিসেবে প্রকাশের পরামর্শ দেয়?'
        },
        options: [
          {
            en: 'It normalizes all metrics onto a consistent 0% to 100% scale, allowing straightforward error budget calculations regardless of whether the metric is latency, throughput, or availability',
            bn: 'এটি লেটেন্সি, থ্রুপুট বা প্রাপ্যতা যাই হোক না কেন সমস্ত মেট্রিককে ০% থেকে ১০০% স্কেলে নিয়ে আসে, যা এরর বাজেট হিসাব করা অত্যন্ত সহজ করে তোলে',
          },
          {
            en: 'Because computer software runs five times faster when dividing numbers',
            bn: 'কারণ সংখ্যা ভাগ করলে কম্পিউটার সফটওয়্যার পাঁচ গুণ দ্রুত গতিতে চলে',
          },
          {
            en: 'To force all engineering teams to write their reports using paper pencils',
            bn: 'সমস্ত প্রকৌশলী দলকে পেন্সিল দিয়ে কাগজে রিপোর্ট লিখতে বাধ্য করার উদ্দেশ্যে',
          },
          {
            en: 'Because international law bans using percentages greater than ninety',
            bn: 'কারণ আন্তর্জাতিক আইনে নব্বইয়ের বেশি শতাংশ ব্যবহার নিষিদ্ধ করা হয়েছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'A 0-100% scale unifies availability, latency, and correctness metrics.',
          bn: '০-১০০% স্কেল প্রাপ্যতা ও লেটেন্সিকে একই গাণিতিক কাঠামোর আওতায় আনে।',
        },
        explanation: {
          en: 'Whether measuring request latency (requests < 200ms) or HTTP errors (requests != 5xx), the ratio format provides a consistent mathematical unit across all services.',
          bn: 'রিকোয়েস্ট লেটেন্সি হোক বা এইচটিটিপি এরর, অনুপাত পদ্ধতি সমস্ত সার্ভিসে একই গাণিতিক একক নিশ্চিত করে।',
        },
      },
      {
        id: 'mon-sli-qz-2',
        kind: 'mcq',
        topic: 'tail-latency-percentiles-rationale',
        question: {
          en: 'Why is tracking the 99th percentile (p99) latency SLI critical for modern multi-service distributed architectures?',
          bn: 'আধুনিক বহু-সার্ভিসযুক্ত ডিস্ট্রিবিউটেড আর্কিটেকচারে ৯৯তম পার্সেন্টাইল (p99) লেটেন্সি এসএলআই ট্র্যাক করা কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'Because an aggregate page request relies on dozens of backend microservice calls, meaning high tail latency in one service degrades a huge portion of user requests',
            bn: 'কারণ একটি ওয়েব পেজ পেছনের বহু সার্ভিসের কলের ওপর নির্ভর করে, ফলে একটি সার্ভিসে সামান্য বিলম্বও প্রচুর ব্যবহারকারীর অভিজ্ঞতা নষ্ট করে',
          },
          {
            en: 'Because number ninety-nine brings good luck to server computers',
            bn: 'কারণ ৯৯ সংখ্যাটি সার্ভার কম্পিউটারের জন্য সৌভাগ্য বয়ে আনে',
          },
          {
            en: 'To make sure developers use ninety-nine keyboard shortcuts every day',
            bn: 'ডেভেলপাররা যেন প্রতিদিন নিরানব্বইটি শর্টকাট ব্যবহার করে তা নিশ্চিত করতে',
          },
          {
            en: 'Because average latency calculations are prohibited by modern web browsers',
            bn: 'কারণ আধুনিক ওয়েব ব্রাউজারে গড় লেটেন্সি হিসাব করা নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tail latency compounds across microservice dependency chains.',
          bn: 'ডিস্ট্রিবিউটেড সার্ভিসের পর্যায়ক্রমিক কলে পেছনের লেটেন্সি বহুগুণ বেড়ে যায়।',
        },
        explanation: {
          en: 'If a user request depends on 50 microservices, each with a 1% chance of hitting p99 latency, over 40% of end-user requests will experience unacceptable delays.',
          bn: 'একটি রিকোয়েস্ট যদি ৫০টি সার্ভিসের ওপর নির্ভর করে এবং প্রতিটিতে ১% সম্ভাবনা থাকে বিলম্বের, তবে ৪০%-এর বেশি গ্রাহক চরম ধীরগতির শিকার হবেন।',
        },
      },
      {
        id: 'mon-sli-qz-3',
        kind: 'mcq',
        topic: 'sli-rolling-window-duration',
        question: {
          en: 'What is the primary operational advantage of calculating SLIs across rolling multi-week windows (such as 30 days) rather than calendar months?',
          bn: 'ক্যালেন্ডার মাসের বদলে চলমান বহুসপ্তাহের (যেমন ৩০ দিনের) সময়সীমার ওপর এসএলআই হিসাব করার প্রধান পরিচালনগত সুবিধা কী?'
        },
        options: [
          {
            en: 'A rolling window provides continuous, stable measurement without artificial resets or sudden drops on the first day of every new month',
            bn: 'চলমান সময়সীমা মাসের প্রথম দিনে হুট করে রিসেট হওয়া বা হঠাৎ পতন ছাড়াই সার্বক্ষণিক স্থিতিশীল পরিমাপের সুযোগ দেয়',
          },
          {
            en: 'Because computer calendars only function during the springtime',
            bn: 'কারণ কম্পিউটার ক্যালেন্ডার কেবল বসন্তকালে সঠিকভাবে কাজ করতে পারে',
          },
          {
            en: 'To make web developers work thirty hours every single weekend',
            bn: 'ছুটির দিনে ওয়েব ডেভেলপারদের একটানা ত্রিশ ঘণ্টা কাজ করতে বাধ্য করতে',
          },
          {
            en: 'Because thirty-day periods consume less memory on server hard disks',
            bn: 'কারণ ত্রিশ দিনের সময়সীমা সার্ভার ডিস্কে কম মেমোরি দখল করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Rolling windows eliminate arbitrary boundary resets at the start of a month.',
          bn: 'চলমান সময়সীমা প্রতি মাসের শুরুতে কৃত্রিমভাবে মান মুছে যাওয়া রোধ করে।',
        },
        explanation: {
          en: 'Calendar-month tracking creates an artificial reset on the first of the month where a single error burns 100% of the budget. A rolling 30-day window evaluates a sliding real-world history.',
          bn: 'ক্যালেন্ডার মাস ট্র্যাক করলে মাসের ১ তারিখে সামান্য ভুলেই ১০০% বাজেট শেষ দেখায়। ৩০ দিনের চলমান উইন্ডো সর্বদা একটি বাস্তবসম্মত চিত্র ধরে রাখে।',
        },
      },
      {
        id: 'mon-sli-qz-4',
        kind: 'mcq',
        topic: 'sli-metric-naming-standard',
        question: {
          en: 'Why must engineering teams formally document explicit SLI implementation details in shared service agreements?',
          bn: 'ইঞ্জিনিয়ারিং দলগুলোকে কেন পারস্পরিক চুক্তিতে এসএলআই বাস্তবায়নের খুঁটিনাটি স্পষ্টভাবে নথিবদ্ধ করতে হয়?'
        },
        options: [
          {
            en: 'To eliminate ambiguity regarding which exact PromQL queries, status code exclusions, and measurement endpoints define system health',
            bn: 'কোন নির্দিষ্ট PromQL কুয়েরি, স্ট্যাটাস কোড বর্জন এবং এন্ডপয়েন্টের ভিত্তিতে সিস্টেমের স্বাস্থ্য নির্ধারিত হবে তা নিয়ে সংশয় দূর করতে',
          },
          {
            en: 'To make sure printed documents take up ten filing cabinets in the office',
            bn: 'অফিসের দশটি আলমারি যেন নথিপত্রে ভরে যায় তা নিশ্চিত করার উদ্দেশ্যে',
          },
          {
            en: 'Because computers refuse to boot up without handwritten paper contracts',
            bn: 'কারণ হাতে লেখা কাগজের চুক্তি ছাড়া কম্পিউটার বুট হতে অস্বীকৃতি জানায়',
          },
          {
            en: 'To prevent developers from drinking tea during working hours',
            bn: 'কাজের সময় ডেভেলপারদের চা পান করা থেকে বিরত রাখার জন্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'Clear SLI contracts establish shared definitions between dev and product.',
          bn: 'সুস্পষ্ট এসএলআই চুক্তি প্রোডাক্ট ও প্রযুক্তি দলের মাঝে নির্ভুল সংজ্ঞা তৈরি করে।',
        },
        explanation: {
          en: 'If developers measure latency at the load balancer while product managers measure it at the client browser, both will see different numbers. Explicit SLIs establish single-source agreement.',
          bn: 'ডেভেলপাররা যদি লোড ব্যালেন্সারে লেটেন্সি মাপেন আর প্রোডাক্ট ম্যানেজার ক্লায়েন্ট ব্রাউজারে মাপেন, তবে সংখ্যা মিলবে না। চুক্তি একমত হওয়ার পথ তৈরি করে।',
        },
      },
    ],
  },
  next: {
    slug: 'slos-and-the-slo',
    title: {
      en: 'Service Level Objectives (SLOs) and Error Budgets: Multi-Burn-Rate Alerting',
      bn: 'সার্ভিস লেভেল অবজেক্টিভ (SLO) এবং এরর বাজেট: মাল্টি-বার্ন-রেট অ্যালার্টিং',
    },
  },
};
