import type { Lesson } from '../../../lib/types';

export const LinesAndTheLineLesson: Lesson = {
  slug: 'lines-and-the-line',
  tech: 'logging',
  title: {
    en: 'Log Lines and Events — Structured Telemetry, Schemas, and UTC Timestamps',
    bn: 'লগ লাইন ও ইভেন্ট — স্ট্রাকচার্ড টেলিমেট্রি, স্কিমা ও ইউটিসি টাইমস্ট্যাম্প',
  },
  summary: {
    en: 'A beginner introduction to enterprise logging fundamentals: understand why structured JSON events replace brittle plain text strings, standardize on ISO 8601 UTC timestamps, inject service metadata, and structure queryable key-value schemas.',
    bn: 'এন্টারপ্রাইজ লগিংয়ের প্রাথমিক পরিচিতি: ভঙ্গুর টেক্সট স্ট্রিংয়ের বদলে স্ট্রাকচার্ড জেসন ইভেন্ট ব্যবহারের কারণ, ISO 8601 ইউটিসি টাইমস্ট্যাম্পের প্রমিতকরণ, সার্ভিস মেটাডেটা যুক্ত করা এবং কুয়েরিযোগ্য কি-ভ্যালু স্কিমা গঠন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Structured events versus unstructured strings', bn: 'WHAT — স্ট্রাকচার্ড ইভেন্ট বনাম আনস্ট্রাকচার্ড স্ট্রিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you debug production incidents, monitor system health, or audit security events, individual log lines provide the fundamental record of what happened inside your software. In legacy applications, developers treated logs as plain unstructured text printed to console output. However, across modern distributed microservices, freeform strings are impossible to query, filter, or aggregate reliably. Modern engineering standards require structured logging: treating each event as a machine-readable document containing standardized severity levels, microsecond-precision universal timestamps (UTC), and explicit key-value fields. Standardizing these fields ensures every log line can be indexed, searched, and alerted on within milliseconds across terabytes of data.',
        bn: 'যখন আপনি প্রোডাকশন ইনসিডেন্ট ডিবাগ করেন, সিস্টেমের স্বাস্থ্য পর্যবেক্ষণ করেন বা নিরাপত্তা ইভেন্ট অডিট করেন, তখন প্রতিটি লগ লাইন আপনার সফটওয়্যারের অভ্যন্তরীণ কার্যকলাপের মূল রেকর্ড সরবরাহ করে। পুরনো সিস্টেমে ডেভেলপাররা লগকে কনসোলে প্রিন্ট করা সাধারণ টেক্সট হিসেবে দেখতেন। কিন্তু আধুনিক ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসে এমন উন্মুক্ত স্ট্রিং কার্যকরভাবে ফিল্টার বা কুয়েরি করা অসম্ভব। আধুনিক ইঞ্জিনিয়ারিং মানদণ্ডে স্ট্রাকচার্ড লগিং বাধ্যতামূলক: যেখানে প্রতিটি ইভেন্টকে প্রমিত সেভিয়ারিটি লেভেল, মাইক্রোসেকেন্ড-নির্ভুল ইউনিভার্সাল টাইমস্ট্যাম্প (UTC) এবং সুস্পষ্ট কি-ভ্যালু ফিল্ডসহ মেশিন-রিডেবল নথি হিসেবে বিবেচনা করা হয়। এটি নিশ্চিত করে যে টেরাবাইট ডেটার মধ্যেও চোখের পলকে যেকোনো লগ অনুসন্ধান করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Unstructured plain text line vs machine-readable JSON log record', bn: 'আনস্ট্রাকচার্ড টেক্সট লাইন বনাম মেশিন-পঠনযোগ্য জেসন লগ রেকর্ড' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Structured JSON log event vs unstructured text diagram">
<rect x="25" y="35" width="260" height="150" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="155" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">UNSTRUCTURED (LEGACY)</text>
<text x="35" y="90" font-family="monospace" font-size="9" fill="currentColor">console.log("[2026-09-28] User 42</text>
<text x="35" y="110" font-family="monospace" font-size="9" fill="currentColor">failed checkout on cart 108");</text>
<text x="35" y="135" font-size="9" fill="#dc2626">✗ Requires brittle regex parsers</text>
<text x="35" y="155" font-size="9" fill="#dc2626">✗ Cannot filter latency > 50ms</text>
<text x="35" y="170" font-size="9" fill="#dc2626">✗ Breaks when wording changes</text>

<line x1="285" y1="110" x2="345" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="345,106 355,110 345,114" fill="#4f46e5"/>

<rect x="355" y="35" width="260" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="485" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">STRUCTURED JSON (MODERN)</text>
<text x="365" y="85" font-family="monospace" font-size="8" fill="currentColor">{"timestamp":"2026-09-28T12:00:00Z",</text>
<text x="365" y="103" font-family="monospace" font-size="8" fill="currentColor"> "level":"INFO","service":"order-svc",</text>
<text x="365" y="121" font-family="monospace" font-size="8" fill="currentColor"> "userId":42,"cartItems":3,</text>
<text x="365" y="139" font-family="monospace" font-size="8" fill="currentColor"> "latencyMs":60,"status":200}</text>
<text x="365" y="165" font-size="9" fill="#166534">✓ Direct indexing of 8 attributes</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Structured JSON logs enable instant range filtering and automated observability</text>
</svg>`,
      caption: {
        en: 'Structured JSON log events organize 8 explicit fields including ISO 8601 UTC timestamps, service tags, and numeric metrics like 60ms latency across 3 cart items.',
        bn: 'স্ট্রাকচার্ড জেসন লগ ইভেন্ট ৮টি সুনির্দিষ্ট ফিল্ডে ISO 8601 ইউটিসি টাইমস্ট্যাম্প, সার্ভিস ট্যাগ এবং ৩টি কার্ট আইটেমে ৬০ মিলি সেকেন্ড ল্যাটেন্সির মতো ডেটা নিখুঁতভাবে সাজায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Structured log line',
          def: {
            en: 'A machine-readable log event formatted with explicit key-value fields (typically JSON) rather than freeform text.',
            bn: 'উন্মুক্ত টেক্সটের পরিবর্তে স্পষ্ট কি-ভ্যালু ফিল্ড (সাধারণত জেসন) দিয়ে সাজানো একটি মেশিন-পঠনযোগ্য লগ ইভেন্ট।',
          },
        },
        {
          term: 'ISO 8601 UTC timestamp',
          def: {
            en: 'An international standardized date-time format representing time in coordinated universal time (e.g. YYYY-MM-DDTHH:mm:ss.sssZ).',
            bn: 'একটি আন্তর্জাতিক প্রমিত তারিখ-সময় বিন্যাস যা সমন্বিত ইউনিভার্সাল সময়ে সময়কে প্রকাশ করে (যেমন YYYY-MM-DDTHH:mm:ss.sssZ)।',
          },
        },
        {
          term: 'Contextual metadata',
          def: {
            en: 'Domain-specific attributes (such as user IDs, tenant names, or IP addresses) attached to a log record to enrich diagnostics.',
            bn: 'ডিবাগিং সমৃদ্ধ করতে কোনো লগ রেকর্ডের সাথে যুক্ত করা নির্দিষ্ট ডোমেইন তথ্য (যেমন ইউজার আইডি বা আইপি অ্যাড্রেস)।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Machine readability and operational querying', bn: 'কেন — মেশিন-রিডেবিলিটি ও কুয়েরি সুবিধা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Instant range filtering: search engines like Elasticsearch filter latencyMs > 50 directly without scanning string patterns with regex.', bn: 'তাৎক্ষণিক রেঞ্জ ফিল্টারিং: ইলাস্টিকসার্চের মতো ইঞ্জিনগুলো কোনো রেজেক্স স্ক্যান ছাড়াই সরাসরি latencyMs > ৫০ ফিল্টার করতে পারে।' },
        { en: 'Flawless distributed chronology: standardizing on ISO 8601 UTC prevents timezone drift between cloud servers across regions.', bn: 'ত্রুটিহীন সময়ানুক্রম: ISO 8601 ইউটিসি ব্যবহার বিভিন্ন মহাদেশে অবস্থিত ক্লাউড সার্ভারগুলোর মধ্যকার টাইমজোন জটিলতা দূর করে।' },
        { en: 'Automated telemetry dashboards: metrics platforms ingest structured JSON fields to plot p99 latency graphs and error rates automatically.', bn: 'স্বয়ংক্রিয় টেলিমেট্রি ড্যাশবোর্ড: মেট্রিক্স প্ল্যাটফর্মগুলো সরাসরি জেসন ফিল্ড ব্যবহার করে ল্যাটেন্সি গ্রাফ ও এরর রেট তৈরি করতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Authoring structured log lines in 4 steps', bn: 'HOW — ৪টি ধাপে স্ট্রাকচার্ড লগ তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Timestamp with UTC', bn: '১. ইউটিসি টাইমস্ট্যাম্প' }, text: { en: 'Generate ISO 8601 timestamps using new Date().toISOString().', bn: 'new Date().toISOString() দিয়ে আদর্শ ISO 8601 টাইমস্ট্যাম্প তৈরি করুন।' } },
        { title: { en: '2. Tag severity level', bn: '২. সেভিয়ারিটি লেভেল' }, text: { en: 'Assign standard uppercase level tokens like INFO, WARN, or ERROR.', bn: 'INFO, WARN বা ERROR এর মতো আদর্শ বড় হাতের লেভেল ট্যাগ যুক্ত করুন।' } },
        { title: { en: '3. Attach service context', bn: '৩. সার্ভিস কনটেক্সট' }, text: { en: 'Embed service name, environment, and user identifiers.', bn: 'সার্ভিসের নাম, এনভায়রনমেন্ট ও ব্যবহারকারী শনাক্তকারী তথ্য যুক্ত করুন।' } },
        { title: { en: '4. Serialize to JSON', bn: '৪. জেসনে রূপান্তর' }, text: { en: 'Serialize to single-line JSON string without line breaks.', bn: 'কোনো লাইন ব্রেক ছাড়া এক লাইনের জেসন স্ট্রিংয়ে রূপান্তর করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'structured_line_sim.js',
      code: `// Simulated structured log event generation
const baseLatency = 45; // ms
const processingOverhead = 15; // ms
const totalEventLatency = baseLatency + processingOverhead; // 60ms

const logEvent = {
  timestamp: "2026-09-28T12:00:00.000Z",
  level: "INFO",
  service: "order-service",
  event: "checkout_completed",
  userId: 42,
  cartItemsCount: 3,
  latencyMs: totalEventLatency,
  status: 200
};

const jsonLine = JSON.stringify(logEvent);
const totalAttributesCount = Object.keys(logEvent).length;

console.log("Structured Log Event Simulation Results:");
console.log("Total event attributes: " + totalAttributesCount + " fields");
console.log("Recorded latency: " + logEvent.latencyMs + "ms across " + logEvent.cartItemsCount + " cart items");
console.log("JSON byte length: " + jsonLine.length + " bytes");

// Output:
// Structured Log Event Simulation Results:
// Total event attributes: 8 fields
// Recorded latency: 60ms across 3 cart items
// JSON byte length: 169 bytes`,
      caption: {
        en: 'The simulation serializes a structured event with 8 fields: 45ms base latency and 15ms overhead produce a 60ms recorded latency across 3 cart items, yielding 169 JSON bytes.',
        bn: 'সিমুলেশনটি ৮টি ফিল্ডের একটি স্ট্রাকচার্ড ইভেন্ট তৈরি করে: ৪৫ms বেস ল্যাটেন্সি ও ১৫ms ওভারহেড মিলে ৩টি কার্ট আইটেমে ৬০ms ল্যাটেন্সি এবং ১৬৯ বাইটের জেসন আউটপুট দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive structured event lab', bn: 'INSIDE — জীবন্ত স্ট্রাকচার্ড ইভেন্ট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect structured logging serialization live. Combining 45ms base latency with 15ms processing overhead produces a recorded latency of 60ms across 3 cart items. The resulting JSON document packages 8 distinct attributes into 169 serialized bytes with status 200. Every attribute is queryable by downstream aggregation engines.',
        bn: 'স্ট্রাকচার্ড লগিং রূপান্তর সরাসরি পর্যবেক্ষণ করুন। ৪৫ms বেস ল্যাটেন্সির সাথে ১৫ms প্রসেসিং ওভারহেড যোগ হয়ে ৩টি কার্ট আইটেমে ৬০ms ল্যাটেন্সি তৈরি করে। ফলে ৮টি স্বতন্ত্র ফিল্ডসহ ১৬৯ বাইটের জেসন ডকুমেন্ট উৎপন্ন হয় যার স্ট্যাটাস ২০০। প্রতিটি ফিল্ড কেন্দ্রীয় লগ ইঞ্জিনে সরাসরি অনুসন্ধানযোগ্য।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Logging lab (modify fields, press Run)', bn: 'Logging lab (ফিল্ড পরিবর্তন করুন, Run)' },
      html: '<h3>Structured JSON Log Generator</h3>\n<pre id="out"></pre>\n<p>Single-line JSON telemetry document.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const ev = { time: "2026-09-28T12:00:00.000Z", lvl: "INFO", svc: "order-service", lat: 45 + 15, items: 3, st: 200 };\nconst str = JSON.stringify(ev);\nconsole.log("len: " + str.length);\ndocument.getElementById("out").textContent = str + "\\n\\nFields: " + Object.keys(ev).length + " · Latency: " + ev.lat + "ms (3 items ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Structured logging design rules', bn: 'ফলাফল — স্ট্রাকচার্ড লগিং ডিজাইনের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'One event per line (NDJSON): emitting single-line JSON allows streaming collectors to process logs line-by-line without buffer deadlocks.', bn: 'প্রতি লাইনে একটি ইভেন্ট (NDJSON): এক লাইনের জেসন লগ পাঠালে কালেক্টর কোনো বাফার জটিলতা ছাড়াই সহজে প্রসেস করতে পারে।' },
        { en: 'Never mix formats on the same stream: avoid outputting plain text error traces alongside JSON events on standard stdout.', bn: 'একই স্ট্রিমে কখনো ফরম্যাট মেশাবেন না: স্ট্যান্ডার্ড আউটপুটে জেসন ইভেন্টের সাথে সাধারণ টেক্সট এরর স্ট্যাক ট্রেস মেলানো পরিহার করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common log line pitfalls', bn: 'ডিবাগ — লগ লাইন তৈরির সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Logging unredacted customer passwords or credit cards', bn: 'লগে পাসওয়ার্ড বা ক্রেডিট কার্ডের মতো গোপন তথ্য রাখা' },
      text: {
        en: 'Printing entire request bodies (JSON.stringify(req.body)) can leak customer authorization tokens, credit cards, or passwords into log storage, violating PCI-DSS and GDPR. Cure: implement key redaction masks for sensitive fields like password, token, and secret.',
        bn: 'সম্পূর্ণ রিকোয়েস্ট বডি সরাসরি লগ করলে পাসওয়ার্ড বা কার্ডের মতো স্পর্শকাতর তথ্য স্টোরেজে চলে যায়, যা আন্তর্জাতিক আইন লঙ্ঘন করে। প্রতিকার: password বা token এর মতো ফিল্ডগুলোর জন্য লগারে স্বয়ংক্রিয় মাস্কিং প্রয়োগ করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Multi-line stack trace corruption', bn: 'মাল্টি-লাইন স্ট্যাক ট্রেসের কারণে লগ বিভ্রাট' },
      text: {
        en: 'Uncaught exceptions printed with newlines split across 20 distinct log lines in centralized collectors, breaking event isolation. Cure: serialize error stacks as a single escaped string property within the structured JSON record.',
        bn: 'লাইন ব্রেকযুক্ত এরর স্ট্যাক ট্রেস কেন্দ্রীয় কালেক্টরে ২০টি আলাদা লগ লাইনে ভেঙে গিয়ে বিভ্রান্তি তৈরি করে। প্রতিকার: জেসন অবজেক্টের একটি একক স্ট্রিং ফিল্ডের ভেতরে এরর স্ট্যাককে এনকোড করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production logging architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল লগিং পাইপলাইন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Kubernetes container stdout: Docker and containerd write JSON log streams to host node disks for daemon collectors to tail.', bn: 'কুবারনেটিস কন্টেইনার লগ: ডকার ও কন্টেইনারডি জেসন লগ স্ট্রিং হিসেবে হোস্ট ডিস্কে লেখে যা নোড ডেমন কালেক্টর সংগ্রহ করে।' },
        { en: 'Elastic Common Schema (ECS): standardizes field naming across hundreds of global engineering teams for unified SIEM search.', bn: 'ইলাস্টিক কমন স্কিমা (ECS): বৃহৎ প্রতিষ্ঠানে নিরাপত্তা অডিটের জন্য শত শত টিমের ফিল্ডের নামকরণে অভিন্ন মান নিশ্চিত করে।' },
        { en: 'Pino and Zap high-speed loggers: optimized logging engines generating JSON strings with zero object allocation overhead in hot paths.', bn: 'Pino ও Zap দ্রুতগতির লগার: মেমরি অপচয় ছাড়াই উচ্চ-গতির অ্যাপ্লিকেশনে তাৎক্ষণিক জেসন স্ট্রিং তৈরি করতে সক্ষম।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Severity Levels and Filtering', bn: 'পরবর্তী পাঠ — সেভিয়ারিটি লেভেল ও ফিল্টারিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With structured schemas and timestamps mastered, Lesson 2 examines logging severity levels: DEBUG, INFO, WARN, ERROR, and FATAL, and how to tune ingestion thresholds dynamically.',
        bn: 'স্ট্রাকচার্ড স্কিমা ও টাইমস্ট্যাম্প আয়ত্ত করার পর, পাঠ ২ লগ সেভিয়ারিটি লেভেল শেখাবে: DEBUG, INFO, WARN, ERROR ও FATAL এবং কীভাবে গতিশীলভাবে ফিল্টারিং থ্রেশহোল্ড পরিবর্তন করা যায়।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-line-ex-1',
      kind: 'mcq',
      topic: 'structured-logging-benefit',
      question: {
        en: 'Why do modern distributed microservice architectures require structured JSON logging over plain text console strings?',
        bn: 'আধুনিক ডিস্ট্রিবিউটেড মাইক্রোসার্ভিস আর্কিটেকচারে সাধারণ টেক্সট স্ট্রিংয়ের বদলে স্ট্রাকচার্ড জেসন লগিং কেন বাধ্যতামূলক?',
      },
      options: [
        {
          en: 'Structured JSON allows downstream ingestion engines to index fields directly for instant range queries without brittle regex parsers',
          bn: 'স্ট্রাকচার্ড জেসন ডাউনস্ট্রিম ইঞ্জিনগুলোকে কোনো ভঙ্গুর রেজেক্স পার্সার ছাড়াই সরাসরি ফিল্ড ইনডেক্স ও ফিল্টার করার সুবিধা দেয়',
        },
        {
          en: 'Plain text files consume 10 times more hard drive space than JSON',
          bn: 'সাধারণ টেক্সট ফাইল জেসনের চেয়ে ১০ গুণ বেশি হার্ডড্রাইভ স্টোরেজ দখল করে',
        },
        {
          en: 'Modern computers cannot print English characters to terminal consoles',
          bn: 'আধুনিক কম্পিউটার টার্মিনালে ইংরেজি অক্ষর প্রিন্ট করতে পারে না',
        },
        {
          en: 'JSON logs automatically encrypt the host network adapter',
          bn: 'জেসন লগ স্বয়ংক্রিয়ভাবে হোস্ট নেটওয়ার্ক অ্যাডাপ্টার এনক্রিপ্ট করে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Structured fields enable instant indexing and filtering.', bn: 'স্ট্রাকচার্ড ফিল্ড তাৎক্ষণিক ইনডেক্স ও ফিল্টারিং সম্ভব করে।' },
      explanation: {
        en: 'Structured JSON treats logs as queryable data documents, allowing aggregation engines to index and query fields without regex.',
        bn: 'স্ট্রাকচার্ড জেসন লগকে কুয়েরিযোগ্য ডেটা হিসেবে বিবেচনা করে, ফলে রেজেক্স ছাড়াই ইঞ্জিনগুলো ফিল্ড ইনডেক্স করতে পারে।',
      },
    },
    {
      id: 'log-line-ex-2',
      kind: 'mcq',
      topic: 'line-sim-metrics',
      question: {
        en: 'In our code walkthrough, what was the total recorded latency across the 3 cart items, and how many total fields were structured in the log event?',
        bn: 'আমাদের কোড আলোচনায় ৩টি কার্ট আইটেমে মোট কত ল্যাটেন্সি রেকর্ড করা হয়েছিল এবং লগ ইভেন্টে মোট কয়টি ফিল্ড সাজানো ছিল?',
      },
      options: [
        { en: 'Total latency = 60ms across 3 cart items, with 8 structured fields', bn: '৩টি কার্ট আইটেমে মোট ল্যাটেন্সি = ৬০ms, এবং ৮টি সাজানো ফিল্ড' },
        { en: 'Total latency = 200ms across 5 cart items, with 12 structured fields', bn: '৫টি কার্ট আইটেমে মোট ল্যাটেন্সি = ২০০ms, এবং ১২টি সাজানো ফিল্ড' },
        { en: 'Total latency = 10ms across 1 cart item, with 2 structured fields', bn: '১টি কার্ট আইটেমে মোট ল্যাটেন্সি = ১০ms, এবং ২টি সাজানো ফিল্ড' },
        { en: 'Total latency = 0ms across 0 cart items, with 0 structured fields', bn: '০টি কার্ট আইটেমে মোট ল্যাটেন্সি = ০ms, এবং ০টি সাজানো ফিল্ড' },
      ],
      answer: 0,
      hint: { en: '45 + 15 = 60ms; 8 attributes.', bn: '৪৫ + ১৫ = ৬০ms; ৮টি ফিল্ড।' },
      explanation: {
        en: 'The simulation summed 45ms base latency and 15ms overhead to 60ms across 3 items, structuring 8 total fields.',
        bn: 'সিমুলেশনটিতে ৪৫ms বেস ল্যাটেন্সি ও ১৫ms ওভারহেড মিলে ৩টি আইটেমে মোট ৬০ms ল্যাটেন্সি এবং ৮টি ফিল্ড হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'log-line-ex-3',
      kind: 'mcq',
      topic: 'iso-utc-timestamp-importance',
      question: {
        en: 'Why is standardizing on ISO 8601 UTC timestamps critical across distributed microservice logging systems?',
        bn: 'ডিস্ট্রিবিউটেড মাইক্রোসার্ভিস লগিং ব্যবস্থায় ISO 8601 ইউটিসি টাইমস্ট্যাম্পের প্রমিতকরণ কেন অত্যন্ত জরুরি?',
      },
      options: [
        {
          en: 'It prevents chronological order confusion caused by differing local server timezones during incident cross-service triage',
          bn: 'এটি ইনসিডেন্ট তদন্তের সময় বিভিন্ন সার্ভারের স্থানীয় টাইমজোনের পার্থক্যের কারণে সময়ের বিভ্রান্তি দূর করে সঠিক সময়ানুক্রম রক্ষা করে',
        },
        {
          en: 'UTC timestamps make the network packets travel faster through fiber cables',
          bn: 'ইউটিসি টাইমস্ট্যাম্প অপটিক্যাল ফাইবারে নেটওয়ার্ক প্যাকেট দ্রুত পাঠায়',
        },
        {
          en: 'Local timestamps are completely forbidden by the Linux kernel',
          bn: 'লিনাক্স কার্নেলে স্থানীয় টাইমস্ট্যাম্প ব্যবহার সম্পূর্ণ নিষিদ্ধ',
        },
        {
          en: 'UTC automatically doubles the server CPU processing speed',
          bn: 'ইউটিসি স্বয়ংক্রিয়ভাবে সার্ভারের সিপিইউ গতি দ্বিগুণ করে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'UTC eliminates timezone drift.', bn: 'ইউটিসি টাইমজোন বিভ্রান্তি পুরোপুরি দূর করে।' },
      explanation: {
        en: 'Using ISO 8601 UTC ensures all log records across worldwide server clusters share a single chronological timeline.',
        bn: 'ISO 8601 ইউটিসি ব্যবহার নিশ্চিত করে যে বিশ্বজুড়ে ক্লাউড সার্ভারগুলোর সমস্ত লগ একটি অভিন্ন সময়রেখায় সাজানো থাকবে।',
      },
    },
    {
      id: 'log-line-ex-4',
      kind: 'predict',
      topic: 'streaming-json-format-term',
      question: {
        en: 'What newline-delimited format abbreviation describes emitting one complete JSON document per line for log streaming (e.g. NDJSON)?',
        bn: 'লগ স্ট্রিমিংয়ের জন্য প্রতি লাইনে একটি পূর্ণাঙ্গ জেসন ডকুমেন্ট লেখার নিউলাইন-ডিলিমিটেড ফরম্যাটকে সংক্ষেপে কী বলা হয় (যেমন NDJSON)?',
      },
      answer: 'NDJSON',
      accept: ['NDJSON', 'ndjson', 'JSON Lines', 'jsonl'],
      hint: { en: 'Newline Delimited JSON.', bn: 'Newline Delimited JSON.' },
      explanation: {
        en: 'NDJSON (Newline Delimited JSON) places each JSON object on its own line, enabling streaming ingestion by log shippers.',
        bn: 'NDJSON প্রতি লাইনে একটি করে জেসন রাখে, যা কালেক্টরদের কোনো জটিলতা ছাড়াই সহজে লগ স্ট্রিম করতে সাহায্য করে।',
      },
    },
  ],
  quiz: {
    id: 'lines-line-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'log-line-q1',
        kind: 'mcq',
        topic: 'data-leak-prevention',
        question: {
          en: 'What critical operational practice prevents data leaks and compliance violations when logging request payloads?',
          bn: 'রিকোয়েস্ট পেলোড লগ করার সময় ডেটা ফাঁস এবং আইনি লঙ্ঘন প্রতিরোধ করার সবচেয়ে গুরুত্বপূর্ণ নিয়ম কোনটি?',
        },
        options: [
          {
            en: 'Implementing automated redaction masks to replace sensitive tokens, passwords, and credit card numbers with masked placeholders',
            bn: 'লগারে স্বয়ংক্রিয় মাস্কিং ব্যবস্থা প্রয়োগ করে গোপন টোকেন, পাসওয়ার্ড ও ক্রেডিট কার্ডের নম্বর ঢেকে দেওয়া',
          },
          {
            en: 'Printing passwords in reverse alphabetical order',
            bn: 'পাসওয়ার্ডগুলো বিপরীত বর্ণানুক্রমিকভাবে প্রিন্ট করা',
          },
          {
            en: 'Deleting the log files after 5 seconds',
            bn: '৫ সেকেন্ড পর পর সমস্ত লগ ফাইল মুছে ফেলা',
          },
          {
            en: 'Converting credit card numbers to hex colors',
            bn: 'ক্রেডিট কার্ড নম্বরগুলোকে হেক্স কালার কোডে রূপান্তর করা',
          },
        ],
        answer: 0,
        hint: { en: 'Mask sensitive credentials before logging.', bn: 'লগ করার পূর্বেই গোপনীয় তথ্য মাস্ক করুন।' },
        explanation: {
          en: 'Automated redaction filters sensitive PII and authentication secrets before records reach persistent log stores.',
          bn: 'স্বয়ংক্রিয় মাস্কিং স্পর্শকাতর তথ্য স্টোরেজে পৌঁছানোর আগেই ফিল্টার করে ডেটা নিরাপত্তা নিশ্চিত করে।',
        },
      },
      {
        id: 'log-line-q2',
        kind: 'mcq',
        topic: 'latency-check-metric',
        question: {
          en: 'In our code walkthrough, what was the total latency computed from baseLatency (45ms) plus processingOverhead (15ms)?',
          bn: 'আমাদের কোড আলোচনায় baseLatency (৪৫ms) এবং processingOverhead (১৫ms) যোগ করে মোট কত ল্যাটেন্সি পাওয়া গিয়েছিল?',
        },
        options: [
          { en: '60ms across 3 cart items', bn: '৩টি কার্ট আইটেমে ৬০ms' },
          { en: '100ms across 3 cart items', bn: '৩টি কার্ট আইটেমে ১০০ms' },
          { en: '20ms across 1 cart item', bn: '১টি কার্ট আইটেমে ২০ms' },
          { en: '0ms across 0 cart items', bn: '০টি কার্ট আইটেমে ০ms' },
        ],
        answer: 0,
        hint: { en: '45 + 15 = 60.', bn: '৪৫ + ১৫ = ৬০।' },
        explanation: {
          en: 'The simulation resolved 45ms base latency and 15ms overhead, resulting in 60ms recorded latency across 3 cart items.',
          bn: 'সিমুলেশনটি ৪৫ms বেস ল্যাটেন্সি ও ১৫ms ওভারহেড যোগ করে ৩টি আইটেমে মোট ৬০ms ল্যাটেন্সি নির্ধারণ করেছিল।',
        },
      },
      {
        id: 'log-line-q3',
        kind: 'mcq',
        topic: 'multiline-stacktrace-handling',
        question: {
          en: 'How should exception stack traces be formatted inside structured JSON logs to prevent log corruption in centralized aggregators?',
          bn: 'কেন্দ্রীয় লগিং সিস্টেমে বিভ্রাট এড়াতে জেসন লগের ভেতরে এক্সেপশন স্ট্যাক ট্রেস কীভাবে ফরম্যাট করা উচিত?',
        },
        options: [
          {
            en: 'Encoded as a single escaped string property within the JSON document rather than raw unescaped newlines',
            bn: 'কাঁচা নতুন লাইনের বদলে জেসন ডকুমেন্টের ভেতরে একটি একক এস্কেপড স্ট্রিং প্রপার্টি হিসেবে এনকোড করা',
          },
          {
            en: 'Split across 50 separate UDP packets',
            bn: '৫০টি আলাদা ইউডিপি প্যাকেটে ভাগ করে দেওয়া',
          },
          {
            en: 'Printed directly to the physical server printer',
            bn: 'সার্ভারের প্রিন্টারে সরাসরি প্রিন্ট করে ফেলা',
          },
          {
            en: 'Omitted completely from all production systems',
            bn: 'প্রোডাকশন সিস্টেম থেকে এরর সম্পূর্ণ বাদ দিয়ে দেওয়া',
          },
        ],
        answer: 0,
        hint: { en: 'Keep the stack trace in a single escaped JSON property.', bn: 'স্ট্যাক ট্রেসকে একটি একক এস্কেপড জেসন প্রপার্টিতে রাখুন।' },
        explanation: {
          en: 'Escaping newlines inside a single JSON string property keeps the error event isolated to one line in streaming pipelines.',
          bn: 'জেসন স্ট্রিংয়ের ভেতরে নিউলাইন এস্কেপ করে রাখলে স্ট্যাক ট্রেস একটি একক লাইনে আবদ্ধ থাকে এবং পাইপলাইনে বিশৃঙ্খলা সৃষ্টি করে না।',
        },
      },
      {
        id: 'log-line-q4',
        kind: 'predict',
        topic: 'time-standard-number',
        question: {
          en: 'What standard ISO numerical designation specifies the international standard date-time format (e.g. ISO 8601)?',
          bn: 'কোন আদর্শ আইএসও সংখ্যাটি আন্তর্জাতিক প্রমিত তারিখ-সময় ফরম্যাটকে নির্দেশ করে (যেমন ISO 8601)?',
        },
        answer: '8601',
        accept: ['8601', 'ISO 8601', 'ISO-8601'],
        hint: { en: 'ISO 8...', bn: 'ISO 8...' },
        explanation: {
          en: 'ISO 8601 is the international standard for date and time representations.',
          bn: 'ISO 8601 হলো তারিখ ও সময় প্রকাশের আন্তর্জাতিক সর্বজনীন স্ট্যান্ডার্ড।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'levels-and-the-level',
    title: { en: 'Severity Levels and Filtering', bn: 'সেভিয়ারিটি লেভেল ও ফিল্টারিং' },
  },
};
