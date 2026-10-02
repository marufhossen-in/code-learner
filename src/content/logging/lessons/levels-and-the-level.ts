import type { Lesson } from '../../../lib/types';

export const LevelsAndTheLevelLesson: Lesson = {
  slug: 'levels-and-the-level',
  tech: 'logging',
  title: {
    en: 'Severity Levels and Filtering — DEBUG, INFO, WARN, ERROR, and Dynamic Tuning',
    bn: 'সেভিয়ারিটি লেভেল ও ফিল্টারিং — DEBUG, INFO, WARN, ERROR ও ডায়নামিক টিউনিং',
  },
  summary: {
    en: 'Master enterprise log severity hierarchies: classify events appropriately across DEBUG, INFO, WARN, and ERROR, configure production threshold filters to eliminate noise, and implement dynamic runtime log level adjustment without restarting servers.',
    bn: 'এন্টারপ্রাইজ লগ সেভিয়ারিটি আয়ত্ত করুন: DEBUG, INFO, WARN ও ERROR এর মধ্যে সঠিকভাবে ইভেন্ট শ্রেণিবিভাগ, অপ্রয়োজনীয় ডেটা দূর করতে প্রোডাকশন থ্রেশহোল্ড এবং সার্ভার রিস্টার্ট ছাড়া ডায়নামিক লেভেল পরিবর্তনের কৌশল।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Severity taxonomy and threshold filtering', bn: 'WHAT — সেভিয়ারিটি শ্রেণিবিভাগ ও থ্রেশহোল্ড ফিল্টারিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you manage high-traffic services in production, balancing observability against storage costs requires a disciplined log severity taxonomy. If you log every event at the highest verbosity, noisy debug lines flood network aggregators and inflate cloud storage bills. Conversely, if you suppress critical diagnostic context, incident responders cannot determine the root cause during production outages. Standardized severity levels—spanning DEBUG, INFO, WARN, ERROR, and FATAL—provide a standardized ladder for filtering events. By configuring threshold levels and enabling dynamic runtime adjustments, engineering teams can inspect granular telemetry during active incidents without permanently running expensive verbose logging.',
        bn: 'যখন আপনি প্রোডাকশনে উচ্চ-ট্রাফিকের সার্ভিস পরিচালনা করেন, তখন অবজার্ভেবিলিটি ও স্টোরেজ খরচের ভারসাম্য বজায় রাখতে একটি সুশৃঙ্খল লগ সেভিয়ারিটি শ্রেণিবিভাগ অপরিহার্য। যদি আপনি প্রতিটি ছোটখাটো ঘটনা সর্বোচ্চ বিস্তারিতভাবে লগ করেন, তবে অপ্রয়োজনীয় ডিবাগ লাইন নেটওয়ার্ক ভরিয়ে ফেলে ক্লাউড স্টোরেজের খরচ বহুগুণ বাড়িয়ে দেবে। আবার অন্যদিকে যদি পর্যাপ্ত তথ্য না রাখেন, তবে সিস্টেম ডাউন হলে ইঞ্জিনিয়াররা সমস্যার মূল কারণ খুঁজে পাবেন না। DEBUG, INFO, WARN, ERROR ও FATAL—এই প্রমিত সেভিয়ারিটি লেভেলগুলো ফিল্টারিংয়ের একটি সুনির্দিষ্ট ধাপ তৈরি করে। সঠিক থ্রেশহোল্ড এবং ডায়নামিক লেভেলিংয়ের মাধ্যমে সমস্যা চলাকালীন সাময়িকভাবে বিস্তারিত লগ দেখে দ্রুত সমাধান করা সম্ভব হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Log severity hierarchy and production threshold filter', bn: 'লগ সেভিয়ারিটি স্তরক্রম ও প্রোডাকশন থ্রেশহোল্ড ফিল্টার' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Log severity levels hierarchy diagram">
<rect x="25" y="40" width="100" height="135" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
<text x="75" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#475569">DEBUG (10)</text>
<text x="35" y="95" font-size="9" fill="#64748b">Cache misses,</text>
<text x="35" y="115" font-size="9" fill="#64748b">variable states</text>
<text x="35" y="145" font-size="9" fill="#dc2626">✗ Suppressed</text>

<line x1="125" y1="107" x2="155" y2="107" stroke="#cbd5e1" stroke-width="2"/>

<rect x="155" y="40" width="105" height="135" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="207" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">INFO (20)</text>
<text x="165" y="95" font-size="9" fill="#2563eb">Login events,</text>
<text x="165" y="115" font-size="9" fill="#2563eb">job starts</text>
<text x="165" y="145" font-size="9" fill="#166534">✓ Prod Threshold</text>

<line x1="260" y1="107" x2="290" y2="107" stroke="#2563eb" stroke-width="2"/>

<rect x="290" y="40" width="105" height="135" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="342" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#854d0e">WARN (30)</text>
<text x="300" y="95" font-size="9" fill="#854d0e">Retries, near</text>
<text x="300" y="115" font-size="9" fill="#854d0e">memory limit</text>
<text x="300" y="145" font-size="9" fill="#166534">✓ Emitted</text>

<line x1="395" y1="107" x2="425" y2="107" stroke="#ca8a04" stroke-width="2"/>

<rect x="425" y="40" width="105" height="135" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="477" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">ERROR (40)</text>
<text x="435" y="95" font-size="9" fill="#991b1b">500 responses,</text>
<text x="435" y="115" font-size="9" fill="#991b1b">query crashes</text>
<text x="435" y="145" font-size="9" fill="#166534">✓ Pager alerts</text>

<line x1="530" y1="107" x2="555" y2="107" stroke="#dc2626" stroke-width="2"/>

<rect x="555" y="40" width="70" height="135" rx="6" fill="#7f1d1d" stroke="#450a0a" stroke-width="2"/>
<text x="590" y="65" text-anchor="middle" font-size="9" font-weight="800" fill="#fef2f2">FATAL (50)</text>
<text x="562" y="105" font-size="8" fill="#fef2f2">Panic / abort</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Production threshold at INFO suppresses 2 debug events while emitting 3 operational records</text>
</svg>`,
      caption: {
        en: 'Setting the production log threshold to INFO (rank 20) suppresses 2 noisy DEBUG events, emitting 3 higher-severity records (INFO, WARN, ERROR) with an aggregated weight of 90.',
        bn: 'প্রোডাকশন থ্রেশহোল্ড INFO (র‍্যাংক ২০) নির্ধারণ করলে ২টি অপ্রয়োজনীয় DEBUG ইভেন্ট আটকে যায় এবং ৩টি গুরুত্বপূর্ণ রেকর্ড (INFO, WARN, ERROR) মোট ৯০ ওয়েট নিয়ে প্রকাশিত হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Log severity level',
          def: {
            en: 'A standardized indicator categorizing the operational criticality and diagnostic importance of a log event.',
            bn: 'কোনো লগ ইভেন্টের অপারেশনাল গুরুত্ব এবং ডায়াগনস্টিক তাৎপর্য নির্দেশকারী একটি প্রমিত স্তর।'
          },
        },
        {
          term: 'Threshold filtering',
          def: {
            en: 'An operational rule that suppresses any log event whose numerical severity rank falls below a configured minimum level.',
            bn: 'একটি ফিল্টারিং নিয়ম যা নির্ধারিত ন্যূনতম স্তরের নিচের যেকোনো কম গুরুত্বপূর্ণ লগ ইভেন্টকে আটকে দেয়।'
          },
        },
        {
          term: 'Dynamic log leveling',
          def: {
            en: 'The capability to adjust active logging thresholds at runtime via admin endpoints or configuration flags without restarting the application.',
            bn: 'অ্যাপ্লিকেশন রিস্টার্ট না করেই এডমিন এপিআই বা কনফিগারেশন ফ্ল্যাগের সাহায্যে চালু অবস্থায় লগিং স্তর পরিবর্তন করার সুবিধা।'
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Cost control and rapid incident triage', bn: 'কেন — খরচ নিয়ন্ত্রণ ও দ্রুত ইনসিডেন্ট সমাধান' },
    },
    {
      type: 'list',
      items: [
        { en: 'Eliminate telemetry storage waste: suppressing DEBUG logs in production saves 70% or more of daily cloud ingestion costs.', bn: 'স্টোরেজ অপচয় রোধ: প্রোডাকশনে DEBUG লগ ফিল্টার করলে প্রতিদিনের ইনজেশন খরচ ৭০% বা তারও বেশি হ্রাস পায়।' },
        { en: 'Pinpoint critical failures fast: on-call engineers filter by level: "ERROR" to isolate real incidents without sorting through noise.', bn: 'দ্রুত সমস্যা চিহ্নিতকরণ: অন-কল ইঞ্জিনিয়াররা অপ্রয়োজনীয় ডেটা বাদ দিয়ে কেবল level: "ERROR" দিয়ে আসল সমস্যা চিহ্নিত করতে পারেন।' },
        { en: 'Targeted zero-downtime debugging: dynamic leveling lets operators enable verbose DEBUG logs for a single pod during active triage.', bn: 'ডাউনটাইম ছাড়া ডিবাগিং: ডায়নামিক লেভেলিংয়ের মাধ্যমে সমস্যা চলাকালীন রিস্টার্ট ছাড়াই একটি নির্দিষ্ট পডের জন্য DEBUG লগ চালু করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Managing log severity in 4 steps', bn: 'HOW — ৪টি ধাপে লগ সেভিয়ারিটি পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Classify event', bn: '১. ইভেন্ট শ্রেণিবিভাগ' }, text: { en: 'Pick DEBUG for state traces, INFO for milestones, and WARN for retries.', bn: 'ট্রেসের জন্য DEBUG, মাইলস্টোনের জন্য INFO এবং রিট্রাইয়ের জন্য WARN বেছে নিন।' } },
        { title: { en: '2. Reserve ERROR/FATAL', bn: '২. ERROR ও FATAL এর ব্যবহার' }, text: { en: 'Use ERROR for failed transactions and FATAL for unrecoverable panics.', bn: 'ব্যর্থ ট্রানজ্যাকশনের জন্য ERROR এবং ক্র্যাশের জন্য FATAL ব্যবহার করুন।' } },
        { title: { en: '3. Set production threshold', bn: '৩. প্রোডাকশন থ্রেশহোল্ড নির্ধারণ' }, text: { en: 'Standardize on INFO as the default baseline production log level.', bn: 'প্রোডাকশনে ডিফল্ট লগ লেভেল হিসেবে সর্বদা INFO নির্ধারণ করে রাখুন।' } },
        { title: { en: '4. Support dynamic overrides', bn: '৪. ডায়নামিক ওভাররাইড সমর্থন' }, text: { en: 'Expose admin endpoints to flip log levels to DEBUG on demand.', bn: 'প্রয়োজনে সাথে সাথে DEBUG লেভেলে পরিবর্তনের জন্য এডমিন এপিআই রাখুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'log_level_filter_sim.js',
      code: `// Numerical ranking for log levels
const LEVEL_RANKS = { DEBUG: 10, INFO: 20, WARN: 30, ERROR: 40, FATAL: 50 };

// Sample incoming telemetry events stream
const incomingEvents = [
  { level: "DEBUG", msg: "Querying cache item 101" },
  { level: "DEBUG", msg: "Cache item 101 missed" },
  { level: "INFO",  msg: "Database connected successfully" },
  { level: "WARN",  msg: "Retry 1 of 3 on payment gateway" },
  { level: "ERROR", msg: "Payment auth failed 402" }
];

let threshold = "INFO"; // Threshold rank: 20
const emittedEvents = incomingEvents.filter(e => LEVEL_RANKS[e.level] >= LEVEL_RANKS[threshold]);
const suppressedCount = incomingEvents.length - emittedEvents.length; // 5 - 3 = 2
const emittedRanksSum = emittedEvents.reduce((acc, e) => acc + LEVEL_RANKS[e.level], 0); // 90

console.log("Log Severity Level Filtering Simulation:");
console.log("Total incoming events: " + incomingEvents.length + ", Emitted events: " + emittedEvents.length);
console.log("Suppressed debug events: " + suppressedCount + " at threshold: " + threshold);
console.log("Emitted severity weight: " + emittedRanksSum + " across 3 emitted events");

// Output:
// Log Severity Level Filtering Simulation:
// Total incoming events: 5, Emitted events: 3
// Suppressed debug events: 2 at threshold: INFO
// Emitted severity weight: 90 across 3 emitted events`,
      caption: {
        en: 'The simulation filters 5 incoming events at threshold INFO: 2 DEBUG events are suppressed while 3 higher-severity events (ranks 20, 30, 40) are emitted with total weight 90.',
        bn: 'সিমুলেশনটি INFO থ্রেশহোল্ডে ৫টি ইভেন্ট ফিল্টার করে: ২টি DEBUG ইভেন্ট আটকে যায় এবং ৩টি গুরুত্বপূর্ণ ইভেন্ট (র‍্যাংক ২০, ৩০, ৪০) মোট ৯০ ওয়েট নিয়ে প্রকাশিত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive severity filter lab', bn: 'INSIDE — জীবন্ত সেভিয়ারিটি ফিল্টার ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test log level filtering mechanics. Across 5 incoming telemetry events, an INFO threshold suppresses 2 verbose DEBUG lines while admitting 3 events (INFO, WARN, ERROR). The emitted events represent a combined severity weight of 90 across 3 emitted events. Adjusting the threshold demonstrates how operational noise is controlled.',
        bn: 'লগ লেভেল ফিল্টারিং পরীক্ষা করুন। ৫টি আগত টেলিমেট্রি ইভেন্টের মধ্যে INFO থ্রেশহোল্ড ২টি অপ্রয়োজনীয় DEBUG লাইন আটকে দেয় এবং ৩টি ইভেন্ট (INFO, WARN, ERROR) গ্রহণ করে। প্রকাশিত ইভেন্টগুলো ৩টি নির্গত ইভেন্টে মোট ৯০ সেভিয়ারিটি ওয়েট উপস্থাপন করে। থ্রেশহোল্ড পরিবর্তনের মাধ্যমে অপারেশনাল গোলমাল নিয়ন্ত্রণ করা যায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Severity lab (adjust threshold, press Run)', bn: 'Severity lab (থ্রেশহোল্ড পরিবর্তন করুন, Run)' },
      html: '<h3>Log Severity Level Filter</h3>\n<pre id="out"></pre>\n<p>Suppressing noisy telemetry below configured threshold.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const ranks = { DEBUG: 10, INFO: 20, WARN: 30, ERROR: 40 };\nconst events = ["DEBUG", "DEBUG", "INFO", "WARN", "ERROR"];\nconst emitted = events.filter(l => ranks[l] >= 20);\nconst suppressed = events.length - emitted.length;\nconst weight = emitted.reduce((acc, l) => acc + ranks[l], 0);\nconsole.log("weight: " + weight);\ndocument.getElementById("out").textContent = "Total: " + events.length + " · Emitted: " + emitted.length + " · Suppressed: " + suppressed + " · Weight: " + weight + " (3 emitted events ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Log level operational rules', bn: 'ফলাফল — লগ লেভেলের অপারেশনাল নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never alert on WARN logs: warnings signify handled anomalies; alerts should fire solely on actionable sustained ERROR spikes.', bn: 'কখনো WARN লগে অ্যালার্ট সেট করবেন না: ওয়ার্নিং হলো সমাধান হওয়া সমস্যা; অ্যালার্ট কেবল সমাধাযোগ্য ERROR বৃদ্ধির ওপর হওয়া উচিত।' },
        { en: 'Reserve FATAL for process exit: FATAL must immediately precede process termination so crashes are recorded clearly.', bn: 'প্রসেস বন্ধের জন্য FATAL বরাদ্দ রাখুন: FATAL এর পরপরই প্রসেস বন্ধ হওয়া উচিত যাতে ক্র্যাশ সুস্পষ্টভাবে চিহ্নিত থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common log level traps', bn: 'ডিবাগ — লগ লেভেলের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Alert fatigue caused by overusing ERROR for expected client 4xx errors', bn: 'সাধারণ ক্লায়েন্ট ৪xx ভুলের জন্য ERROR ব্যবহার করে অ্যালার্টের ভিড় তৈরি' },
      text: {
        en: 'Logging HTTP 404 (Not Found) or 401 (Unauthorized) at ERROR level triggers false alarms on PagerDuty during vulnerability scans. Cure: log client-side 4xx errors as WARN or INFO, reserving ERROR exclusively for unhandled 5xx server exceptions.',
        bn: 'এইচটিটিপি ৪০৪ বা ৪০১ এর মতো ক্লায়েন্ট ভুলকে ERROR লেভেলে লগ করলে সিকিউরিটি স্ক্যানের সময় অনর্থক ভুয়া অ্যালার্ট বেজে ওঠে। প্রতিকার: ৪xx ক্লায়েন্ট ভুলকে WARN বা INFO হিসেবে রাখুন এবং সার্ভারের ভেতরের ৫xx ভুলের জন্য ERROR বরাদ্দ রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Dynamic log level reset timers', bn: 'ডায়নামিক লগ লেভেল স্বয়ংক্রিয় রিসেট টাইমার' },
      text: {
        en: 'When enabling DEBUG mode via admin API during an outage, attach an automatic 15-minute expiration timer that reverts the logger back to INFO automatically, preventing accidental runaway storage bills if developers forget to turn it off.',
        bn: 'ইনসিডেন্ট চলাকালীন এডমিন এপিআই দিয়ে DEBUG মোড চালু করলে ১৫ মিনিটের একটি অটো-রিসেট টাইমার দিন যা পরে নিজে থেকেই INFO তে ফিরে যাবে, যাতে ভুলে গিয়ে অতিরিক্ত বিল না আসে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production severity management', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল সেভিয়ারিটি ব্যবস্থাপনা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Spring Boot Actuator: exposes /actuator/loggers endpoint allowing SREs to tune loggers across individual packages at runtime.', bn: 'Spring Boot Actuator: /actuator/loggers এপিআই দিয়ে রানিং অ্যাপে নির্দিষ্ট প্যাকেজের লগ লেভেল তাৎক্ষণিক পরিবর্তন করতে দেয়।' },
        { en: 'Envoy proxy dynamic tracing: dynamically elevates access logging verbosity for requests matching specific test header tokens.', bn: 'Envoy প্রক্সি ট্রেসিং: বিশেষ টেস্ট হেডারযুক্ত রিকোয়েস্টের জন্য স্বয়ংক্রিয়ভাবে বিস্তারিত লগ লেভেল চালু করে দেয়।' },
        { en: 'CloudWatch log subscription filters: filter log streams by pattern "[..., level = ERROR, ...]" to route errors directly to Lambda alerts.', bn: 'CloudWatch লগ ফিল্টার: কেবল ERROR লগগুলোকে আলাদা করে সরাসরি ল্যাম্বডা অ্যালার্টিং ফাংশনে পাঠিয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Serialization Formats and Standards', bn: 'পরবর্তী পাঠ — সিরিয়ালাইজেশন ফরম্যাট ও স্ট্যান্ডার্ড' },
    },
    {
      type: 'para',
      text: {
        en: 'With severity hierarchies and threshold filtering mastered, Lesson 3 investigates log serialization standards: comparing JSON, Logfmt, and Elastic Common Schema (ECS), and benchmarking serialization throughput.',
        bn: 'সেভিয়ারিটি ও থ্রেশহোল্ড আয়ত্ত করার পর, পাঠ ৩ লগ সিরিয়ালাইজেশন স্ট্যান্ডার্ড শেখাবে: JSON, Logfmt ও ইলাস্টিক কমন স্কিমা (ECS) এর তুলনা এবং সিরিয়ালাইজেশন স্পিড বেঞ্চমার্কিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-lvl-ex-1',
      kind: 'mcq',
      topic: 'level-hierarchy-order',
      question: {
        en: 'In modern enterprise logging systems, which sequence correctly lists the standard log levels in ascending order of operational severity?',
        bn: 'আধুনিক এন্টারপ্রাইজ লগিং সিস্টেমে নিচের কোন ক্রমটি সেভিয়ারিটির সঠিক ঊর্ধ্বক্রম নির্দেশ করে?',
      },
      options: [
        {
          en: 'DEBUG -> INFO -> WARN -> ERROR -> FATAL',
          bn: 'DEBUG -> INFO -> WARN -> ERROR -> FATAL',
        },
        {
          en: 'FATAL -> ERROR -> WARN -> INFO -> DEBUG',
          bn: 'FATAL -> ERROR -> WARN -> INFO -> DEBUG',
        },
        {
          en: 'ERROR -> DEBUG -> FATAL -> INFO -> WARN',
          bn: 'ERROR -> DEBUG -> FATAL -> INFO -> WARN',
        },
        {
          en: 'INFO -> FATAL -> DEBUG -> WARN -> ERROR',
          bn: 'INFO -> FATAL -> DEBUG -> WARN -> ERROR',
        },
      ],
      answer: 0,
      hint: { en: 'DEBUG is lowest; FATAL is highest.', bn: 'DEBUG সর্বনিম্ন; FATAL সর্বোচ্চ।' },
      explanation: {
        en: 'The standard hierarchy ascends from granular developer diagnostic (DEBUG) to catastrophic process crash (FATAL).',
        bn: 'আদর্শ সেভিয়ারিটি হায়ারার্কি বিস্তারিত ডেভেলপার ডিবাগ (DEBUG) থেকে শুরু হয়ে মারাত্মক ক্র্যাশ (FATAL) পর্যন্ত বিস্তৃত।',
      },
    },
    {
      id: 'log-lvl-ex-2',
      kind: 'mcq',
      topic: 'filter-sim-metrics',
      question: {
        en: 'In our code walkthrough, how many events were suppressed at threshold INFO from 5 incoming events, and what was the emitted severity weight across the 3 emitted events?',
        bn: 'আমাদের কোড আলোচনায় ৫টি আগত ইভেন্টের মধ্যে INFO থ্রেশহোল্ডে কয়টি ইভেন্ট ফিল্টার হয়েছিল এবং ৩টি নির্গত ইভেন্টে মোট সেভিয়ারিটি ওয়েট কত ছিল?',
      },
      options: [
        { en: '2 debug events suppressed, emitted severity weight = 90 across 3 emitted events', bn: '২টি ডিবাগ ইভেন্ট আটকে গেছে, ৩টি নির্গত ইভেন্টে মোট সেভিয়ারিটি ওয়েট = ৯০' },
        { en: '5 debug events suppressed, emitted severity weight = 300 across 5 emitted events', bn: '৫টি ডিবাগ ইভেন্ট আটকে গেছে, ৫টি নির্গত ইভেন্টে মোট সেভিয়ারিটি ওয়েট = ৩০০' },
        { en: '0 debug events suppressed, emitted severity weight = 10 across 1 emitted event', bn: '০টি ডিবাগ ইভেন্ট আটকে গেছে, ১টি নির্গত ইভেন্টে মোট সেভিয়ারিটি ওয়েট = ১০' },
        { en: '1 debug event suppressed, emitted severity weight = 0 across 0 emitted events', bn: '১টি ডিবাগ ইভেন্ট আটকে গেছে, ০টি নির্গত ইভেন্টে মোট সেভিয়ারিটি ওয়েট = ০' },
      ],
      answer: 0,
      hint: { en: '5 - 3 = 2 suppressed; 20 + 30 + 40 = 90 weight.', bn: '৫ - ৩ = ২টি ফিল্টার; ২০ + ৩০ + ৪০ = ৯০ ওয়েট।' },
      explanation: {
        en: 'The simulation suppressed 2 DEBUG events (rank 10), emitting INFO (20), WARN (30), and ERROR (40) summing to weight 90 across 3 events.',
        bn: 'সিমুলেশনটি ২টি DEBUG ইভেন্ট আটকে দিয়ে INFO (২০), WARN (৩০) ও ERROR (৪০) মিলিয়ে ৩টি ইভেন্টে মোট ৯০ ওয়েট হিসাব করেছিল।',
      },
    },
    {
      id: 'log-lvl-ex-3',
      kind: 'mcq',
      topic: 'dynamic-leveling-purpose',
      question: {
        en: 'Why is dynamic runtime log leveling preferred over restarting containers when investigating production bugs?',
        bn: 'প্রোডাকশনে বাগ তদন্তের সময় কন্টেইনার রিস্টার্ট করার চেয়ে ডায়নামিক রানটাইম লগ লেভেলিং কেন উত্তম?',
      },
      options: [
        {
          en: 'It enables immediate verbose DEBUG telemetry without dropping client traffic or erasing the in-memory bug state caused by a container reboot',
          bn: 'এটি কোনো ক্লায়েন্ট ট্রাফিক না থামিয়ে বা রিস্টার্টের ফলে মেমরি স্টেট মুছে না ফেলে সাথে সাথে বিস্তারিত DEBUG লগ দেখার সুযোগ দেয়',
        },
        {
          en: 'It permanently disables the firewall on the host operating system',
          bn: 'এটি হোস্ট অপারেটিং সিস্টেমের ফায়ারওয়াল চিরতরে বন্ধ করে দেয়',
        },
        {
          en: 'It automatically fixes the bug by editing the source code in Git',
          bn: 'এটি গিট রিপোজিটরিতে সোর্স কোড নিজে নিজে এডিট করে বাগ ঠিক করে ফেলে',
        },
        {
          en: 'Restarting containers causes the physical server hardware to melt',
          bn: 'কন্টেইনার রিস্টার্ট করলে ফিজিক্যাল সার্ভার হার্ডওয়্যার গলে যায়',
        },
      ],
      answer: 0,
      hint: { en: 'Rebooting wipes transient bug state.', bn: 'রিস্টার্ট দিলে মেমরির ত্রুটিপূর্ণ অবস্থা মুছে যেতে পারে।' },
      explanation: {
        en: 'Dynamic log leveling lets operators inspect live state without restarting containers and losing the active reproduction conditions.',
        bn: 'ডায়নামিক লগ লেভেলিং সিস্টেম রিস্টার্ট না করেই লাইভ অবস্থা পর্যবেক্ষণ করতে দেয়, ফলে সমস্যার আসল অবস্থা অক্ষত থাকে।',
      },
    },
    {
      id: 'log-lvl-ex-4',
      kind: 'predict',
      topic: 'default-production-level',
      question: {
        en: 'What standard log level is typically configured as the default baseline threshold for production environments (e.g. INFO)?',
        bn: 'প্রোডাকশন এনভায়রনমেন্টের জন্য ডিফল্ট বেসলাইন থ্রেশহোল্ড হিসেবে সাধারণত কোন আদর্শ লগ লেভেলটি কনফিগার করা হয় (যেমন INFO)?',
      },
      answer: 'INFO',
      accept: ['INFO', 'info'],
      hint: { en: 'INFO level balances visibility and cost.', bn: 'INFO লেভেল পর্যাপ্ত তথ্য ও খরচের মধ্যে ভারসাম্য রাখে।' },
      explanation: {
        en: 'INFO is the universal baseline production log level, suppressing verbose debug logs while recording operational milestones.',
        bn: 'INFO হলো প্রোডাকশন লগিংয়ের সার্বজনীন স্তর, যা অপ্রয়োজনীয় ডিবাগ তথ্য আটকে রেখে গুরুত্বপূর্ণ মাইলস্টোন রেকর্ড করে।',
      },
    },
  ],
  quiz: {
    id: 'levels-level-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'log-lvl-q1',
        kind: 'mcq',
        topic: 'alert-fatigue-prevention',
        question: {
          en: 'How should HTTP client 404 (Not Found) and 401 (Unauthorized) errors be logged to prevent pager alert fatigue?',
          bn: 'অন-কল ইঞ্জিনিয়ারের অযথা অ্যালার্ট ক্লান্তি রোধ করতে এইচটিটিপি ক্লায়েন্ট ৪০৪ বা ৪০১ ভুলগুলো কীভাবে লগ করা উচিত?',
        },
        options: [
          {
            en: 'Logged as WARN or INFO, reserving ERROR exclusively for unhandled 5xx server exceptions that require engineer intervention',
            bn: 'WARN বা INFO হিসেবে লগ করা এবং কেবল অপ্রত্যাশিত ৫xx সার্ভার ভুলের জন্য ERROR স্তরটি সংরক্ষণ করা যার সমাধান প্রয়োজন',
          },
          {
            en: 'Logged as FATAL to page the chief executive immediately',
            bn: 'FATAL হিসেবে লগ করে সাথে সাথে সিইওকে অ্যালার্ট পাঠানো',
          },
          {
            en: 'Completely omitted from all access logs',
            bn: 'অ্যাক্সেস লগ থেকে সম্পূর্ণ মুছে ফেলা',
          },
          {
            en: 'Sent to a public Twitter feed automatically',
            bn: 'টুইটারে স্বয়ংক্রিয়ভাবে টুইট করে দেওয়া',
          },
        ],
        answer: 0,
        hint: { en: 'Client 4xx errors should not fire page alerts.', bn: 'ক্লায়েন্ট ৪xx ভুল দিয়ে পেজার অ্যালার্ট বাজানো উচিত নয়।' },
        explanation: {
          en: 'Client errors (4xx) are outside service control and should not trigger ERROR alerts; reserve ERROR for server failures (5xx).',
          bn: 'ক্লায়েন্টের ভুল (৪xx) সার্ভারের নিয়ন্ত্রণবহির্ভূত হওয়ায় তা ERROR অ্যালার্ট তৈরি করা উচিত নয়; কেবল সার্ভার ভুলের (৫xx) জন্য ERROR রাখা উচিত।',
        },
      },
      {
        id: 'log-lvl-q2',
        kind: 'mcq',
        topic: 'weight-sum-verify',
        question: {
          en: 'In our code walkthrough, what was the total emitted severity weight computed from INFO (20), WARN (30), and ERROR (40)?',
          bn: 'আমাদের কোড আলোচনায় INFO (২০), WARN (৩০) এবং ERROR (৪০) যোগ করে মোট কত সেভিয়ারিটি ওয়েট পাওয়া গিয়েছিল?',
        },
        options: [
          { en: '90 across 3 emitted events', bn: '৩টি নির্গত ইভেন্টে ৯০' },
          { en: '150 across 3 emitted events', bn: '৩টি নির্গত ইভেন্টে ১৫০' },
          { en: '50 across 2 emitted events', bn: '২টি নির্গত ইভেন্টে ৫০' },
          { en: '0 across 0 emitted events', bn: '০টি নির্গত ইভেন্টে ০' },
        ],
        answer: 0,
        hint: { en: '20 + 30 + 40 = 90.', bn: '২০ + ৩০ + ৪০ = ৯০।' },
        explanation: {
          en: 'The simulation resolved emitted event ranks of 20, 30, and 40, resulting in a combined severity weight of 90 across 3 events.',
          bn: 'সিমুলেশনটিতে নির্গত ইভেন্টের র‍্যাংক ২০, ৩০ ও ৪০ যোগ করে ৩টি ইভেন্টে মোট ৯০ ওয়েট হিসাব করা হয়েছিল।',
        },
      },
      {
        id: 'log-lvl-q3',
        kind: 'mcq',
        topic: 'fatal-level-role',
        question: {
          en: 'Under what specific circumstance should a production service emit a log event at the FATAL severity level?',
          bn: 'কোন সুনির্দিষ্ট পরিস্থিতিতে একটি প্রোডাকশন সার্ভিসের FATAL সেভিয়ারিটি স্তরে লগ ইভেন্ট লেখা উচিত?',
        },
        options: [
          {
            en: 'When a catastrophic unrecoverable condition occurs (such as missing required configuration or database corruption) immediately preceding process termination',
            bn: 'যখন কোনো মারাত্মক ও অসমাধানযোগ্য বিপর্যয় ঘটে (যেমন অপরিহার্য কনফিগারেশন অনুপস্থিত থাকা) যার কারণে প্রসেস অবিলম্বে বন্ধ হয়ে যাবে',
          },
          {
            en: 'Whenever a user submits an incorrect password in a login form',
            bn: 'যখনই কোনো ব্যবহারকারী লগইন ফর্মে ভুল পাসওয়ার্ড দেয়',
          },
          {
            en: 'When an image fails to load on the website homepage',
            bn: 'হোমপেজে কোনো ছবি লোড হতে ব্যর্থ হলে',
          },
          {
            en: 'Every hour on the hour during routine cron runs',
            bn: 'নিয়মিত ক্রন জব চলার সময় প্রতি ঘন্টায় একবার করে',
          },
        ],
        answer: 0,
        hint: { en: 'FATAL immediately precedes process death.', bn: 'FATAL এর পরপরই প্রসেস বন্ধ হয়ে যায়।' },
        explanation: {
          en: 'FATAL indicates an unrecoverable failure where the application cannot continue operating and is shutting down.',
          bn: 'FATAL নির্দেশ করে এমন একটি বিপর্যয় যার পর অ্যাপ্লিকেশন আর চালানো সম্ভব নয় এবং প্রসেস বন্ধ হয়ে যাচ্ছে।',
        },
      },
      {
        id: 'log-lvl-q4',
        kind: 'predict',
        topic: 'unrecoverable-level-name',
        question: {
          en: 'What log severity level token designates an unrecoverable catastrophic failure terminating the application (e.g. FATAL)?',
          bn: 'কোন লগ সেভিয়ারিটি টোকেনটি অ্যাপ্লিকেশন বন্ধ করে দেওয়া মারাত্মক বিপর্যয়কে নির্দেশ করে (যেমন FATAL)?',
        },
        answer: 'FATAL',
        accept: ['FATAL', 'fatal', 'CRITICAL', 'critical'],
        hint: { en: 'F-A-T-A-L', bn: 'F-A-T-A-L' },
        explanation: {
          en: 'FATAL marks catastrophic failures terminating the application process.',
          bn: 'FATAL মারাত্মক বিপর্যয় চিহ্নিত করে যার ফলে অ্যাপ্লিকেশন প্রসেস সাথে সাথে বন্ধ হয়ে যায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'formats-and-the-format',
    title: { en: 'Serialization Formats and Standards', bn: 'সিরিয়ালাইজেশন ফরম্যাট ও স্ট্যান্ডার্ড' },
  },
};
