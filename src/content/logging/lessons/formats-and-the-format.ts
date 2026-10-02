import type { Lesson } from '../../../lib/types';

export const FormatsAndTheFormatLesson: Lesson = {
  slug: 'formats-and-the-format',
  tech: 'logging',
  title: {
    en: 'Serialization Formats — JSON, Logfmt, and Semantic Schemas',
    bn: 'সিরিয়ালাইজেশন ফরম্যাট — JSON, Logfmt ও সিম্যান্টিক স্কিমা',
  },
  summary: {
    en: 'Master log serialization standards: evaluate trade-offs between JSON and CLI-friendly Logfmt, adopt industry schemas like Elastic Common Schema (ECS), prevent index field collisions, and optimize serialization throughput in high-velocity microservices.',
    bn: 'লগ সিরিয়ালাইজেশন স্ট্যান্ডার্ড আয়ত্ত করুন: JSON বনাম CLI-বান্ধব Logfmt এর সুবিধা-অসুবিধা, ইলাস্টিক কমন স্কিমা (ECS) এর মতো সর্বজনীন স্ট্যান্ডার্ড প্রয়োগ, ফিল্ডের সংঘাত দূর করা এবং উচ্চ-গতির সিস্টেমে সিরিয়ালাইজেশন অপ্টিমাইজেশন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Serializers, representations, and semantic schemas', bn: 'WHAT — সিরিয়ালাইজার, ফরম্যাট ও সিম্যান্টিক স্কিমা' },
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit operational telemetry across disparate distributed systems, selecting the appropriate log serialization format dictates both ingestion throughput and cross-team query ergonomics. While plain text was the historical baseline, modern cloud infrastructure relies primarily on two serialized representations: structured JSON and key-value Logfmt. JSON provides native support for nested metadata and seamless ingestion into modern document databases, while Logfmt offers human readability in command-line terminals. However, without unified semantic conventions across services—such as Elastic Common Schema—different teams invent competing names for identical attributes, causing index field collisions. Standardizing formats and semantic naming guarantees every service emits consistent, high-speed telemetry.',
        bn: 'যখন আপনি বিভিন্ন ডিস্ট্রিবিউটেড সিস্টেমের মধ্যে অপারেশনাল টেলিমেট্রি পাঠান, তখন উপযুক্ত সিরিয়ালাইজেশন ফরম্যাট নির্বাচন ইনজেশন স্পিড এবং কুয়েরির সুবিধা নির্ধারণ করে। পূর্বে সাধারণ টেক্সট ব্যবহার হলেও আধুনিক ক্লাউড পরিকাঠামো প্রধানত দুটি সিরিয়ালাইজড ফরম্যাটের ওপর নির্ভর করে: স্ট্রাকচার্ড জেসন এবং কি-ভ্যালু Logfmt। জেসন নেস্টেড মেটাডেটা এবং ডেটাবেসে সরাসরি ইনজেশন সমর্থন করে, আর Logfmt টার্মিনাল কনসোলে মানুষের সহজে পড়ার সুবিধা দেয়। কিন্তু দলগুলোর মধ্যে ইলাস্টিক কমন স্কিমার মতো অভিন্ন নিয়ম না থাকলে একই ফিল্ডের জন্য ভিন্ন ভিন্ন নাম তৈরি হয়ে ইনডেক্সে সংঘাত সৃষ্টি হয়। অভিন্ন ফরম্যাট ও নাম নিশ্চিত করলে সমগ্র সিস্টেম জুড়ে নির্ভরযোগ্য টেলিমেট্রি বজায় থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'JSON nested document representation vs compact Logfmt stream', bn: 'জেসন নেস্টেড ডকুমেন্ট বনাম সংক্ষিপ্ত Logfmt স্ট্রিম' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JSON vs Logfmt log serialization format diagram">
<rect x="25" y="35" width="260" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="155" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">JSON FORMAT (135 BYTES)</text>
<text x="35" y="85" font-family="monospace" font-size="8" fill="currentColor">{"@timestamp":"2026-09-28T12:00:00Z",</text>
<text x="35" y="103" font-family="monospace" font-size="8" fill="currentColor"> "log.level":"INFO",</text>
<text x="35" y="121" font-family="monospace" font-size="8" fill="currentColor"> "service.name":"auth-service",</text>
<text x="35" y="139" font-family="monospace" font-size="8" fill="currentColor"> "user.id":42,"http.response.status_code":200}</text>
<text x="35" y="165" font-size="9" fill="#2563eb">✓ Native nested arrays and documents</text>

<line x1="285" y1="110" x2="345" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="345,106 355,110 345,114" fill="#4f46e5"/>

<rect x="355" y="35" width="260" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="485" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">LOGFMT FORMAT (85 BYTES)</text>
<text x="365" y="90" font-family="monospace" font-size="8" fill="currentColor">time="2026-09-28T12:00:00Z" level=INFO</text>
<text x="365" y="110" font-family="monospace" font-size="8" fill="currentColor">service=auth-service user_id=42 status=200</text>
<text x="365" y="145" font-size="9" fill="#166534">✓ 50 bytes smaller footprint</text>
<text x="365" y="165" font-size="9" fill="#166534">✓ Clean grep/awk terminal inspection</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Both formats serialize 5 ECS semantic fields into standard structured streams</text>
</svg>`,
      caption: {
        en: 'JSON serializes 5 semantic fields into 135 bytes with nested object capabilities, while Logfmt condenses the payload to 85 bytes (saving 50 bytes) for CLI human readability.',
        bn: 'জেসন ৫টি ফিল্ডকে নেস্টেড সমর্থনসহ ১৩৫ বাইটে রূপান্তর করে, আর Logfmt ৫০ বাইট সাশ্রয় করে ৮৫ বাইটে সংকুচিত করে টার্মিনালে সহজে পড়ার সুবিধা দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Logfmt',
          def: {
            en: 'A concise logging format that represents events as space-delimited key=value pairs, optimized for CLI readability.',
            bn: 'একটি সংক্ষিপ্ত লগিং ফরম্যাট যা ইভেন্টগুলোকে স্পেস দিয়ে পৃথক করা key=value জোড়ায় উপস্থাপন করে এবং টার্মিনালে সহজে পড়া যায়।',
          },
        },
        {
          term: 'Elastic Common Schema (ECS)',
          def: {
            en: 'An open-source specification defining a common set of field names and data types for log records across an organization.',
            bn: 'একটি ওপেন-সোর্স স্পেসিফিকেশন যা প্রতিষ্ঠানে বিভিন্ন টিমের লগের ফিল্ডের নাম ও ডেটা টাইপের অভিন্ন মানদণ্ড নির্ধারণ করে।',
          },
        },
        {
          term: 'Field explosion',
          def: {
            en: 'A storage defect where unstandardized field naming (e.g. userId vs user_id vs uid) generates thousands of competing index keys.',
            bn: 'এমন একটি স্টোরেজ সমস্যা যেখানে অনিয়ন্ত্রিত ফিল্ডের নামের কারণে ইনডেক্সে হাজার হাজার পরস্পরবিরোধী কি তৈরি হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Cross-service consistency and payload efficiency', bn: 'কেন — আন্তঃসার্ভিস সামঞ্জস্য ও পেলোড দক্ষতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Single query language across stacks: ECS naming ensures querying user.id works identically across Go, Node.js, and Java services.', bn: 'সার্বজনীন কুয়েরি: ECS নাম ব্যবহার নিশ্চিত করে যে user.id কুয়েরি করলে Go, Node.js ও Java সব সার্ভিসের লগ একসাথে পাওয়া যায়।' },
        { en: 'Prevent database mapping crashes: standardized schemas prevent conflicting data types where one team sends status as a string and another sends an integer.', bn: 'ম্যাপিং সংঘাত দূরীকরণ: অভিন্ন স্কিমা ডাটা টাইপের গোলমাল রোধ করে (যেমন এক দল স্ট্রিং পাঠালে অন্য দল ইন্টিজার পাঠালে ইনডেক্স ক্র্যাশ হয় না)।' },
        { en: 'Optimized network bandwidth: choosing Logfmt or minified JSON cuts 30% to 50% of raw uncompressed log bytes over internal cluster networks.', bn: 'নেটওয়ার্ক ব্যান্ডউইথ সাশ্রয়: উপযুক্ত ফরম্যাট বেছে নিলে ক্লাস্টার নেটওয়ার্কে অপ্রয়োজনীয় লগের আকার ৩০% থেকে ৫০% পর্যন্ত হ্রাস পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Standardizing formats in 4 steps', bn: 'HOW — ৪টি ধাপে ফরম্যাট নির্ধারণ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Select format', bn: '১. ফরম্যাট নির্বাচন' }, text: { en: 'Use JSON for cloud ingestion pipelines and Logfmt for local development.', bn: 'ক্লাউড পাইপলাইনের জন্য JSON এবং লোকাল কনসোলের জন্য Logfmt বাছুন।' } },
        { title: { en: '2. Enforce ECS keys', bn: '২. ECS ফিল্ড প্রয়োগ' }, text: { en: 'Standardize on official keys like @timestamp, service.name, and log.level.', bn: '@timestamp, service.name এবং log.level এর মতো নির্ধারিত কি ব্যবহার করুন।' } },
        { title: { en: '3. Limit nesting', bn: '৩. নেস্টিং সীমাবদ্ধকরণ' }, text: { en: 'Keep JSON depth below 3 levels to prevent Elasticsearch mapping sprawl.', bn: 'ম্যাপিং জটিলতা রোধ করতে জেসন নেস্টিং সর্বোচ্চ ৩ স্তরের নিচে রাখুন।' } },
        { title: { en: '4. Fast serialization', bn: '৪. দ্রুত সিরিয়ালাইজেশন' }, text: { en: 'Utilize high-speed serializers (Pino or fast-json-stringify) in hot paths.', bn: 'উচ্চ গতির জন্য Pino বা fast-json-stringify এর মতো লগার ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'serialization_format_sim.js',
      code: `// 1. JSON representation
const jsonRecord = {
  "@timestamp": "2026-09-28T12:00:00.000Z",
  "log.level": "INFO",
  "service.name": "auth-service",
  "user.id": 42,
  "http.response.status_code": 200
};
const jsonPayload = JSON.stringify(jsonRecord);

// 2. Logfmt representation
const logfmtPayload = \`time="\${jsonRecord["@timestamp"]}" level=\${jsonRecord["log.level"]} service=\${jsonRecord["service.name"]} user_id=\${jsonRecord["user.id"]} status=\${jsonRecord["http.response.status_code"]}\`;

const jsonBytes = jsonPayload.length;
const logfmtBytes = logfmtPayload.length;
const byteDifference = jsonBytes - logfmtBytes; // 50 bytes saved
const totalComparedBytes = jsonBytes + logfmtBytes; // 220

console.log("Log Serialization Format Comparison:");
console.log("JSON bytes: " + jsonBytes + "B, Logfmt bytes: " + logfmtBytes + "B");
console.log("Byte difference: " + byteDifference + "B across 5 ECS fields");
console.log("Total compared payload footprint: " + totalComparedBytes + "B across 2 formats");

// Output:
// Log Serialization Format Comparison:
// JSON bytes: 135B, Logfmt bytes: 85B
// Byte difference: 50B across 5 ECS fields
// Total compared payload footprint: 220B across 2 formats`,
      caption: {
        en: 'The simulation serializes 5 ECS fields: JSON requires 135 bytes while Logfmt requires 85 bytes, demonstrating a 50-byte saving and a 220-byte combined footprint across 2 formats.',
        bn: 'সিমুলেশনটি ৫টি ECS ফিল্ড সিরিয়ালাইজ করে: জেসনে ১৩৫ বাইট এবং Logfmt এ ৮৫ বাইট লাগে, যা ৫০ বাইট সাশ্রয় এবং ২টি ফরম্যাটে মোট ২২০ বাইট ফুটপ্রিন্ট নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive format comparison lab', bn: 'INSIDE — জীবন্ত ফরম্যাট তুলনা ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Compare serialization formats live. The JSON payload consumes 135 bytes for 5 ECS fields, while the Logfmt format condenses the record to 85 bytes. This produces a 50-byte difference and a total combined footprint of 220 bytes across 2 formats. Testing both illustrates the trade-off between nested metadata support and raw stream compactness.',
        bn: 'সরাসরি সিরিয়ালাইজেশন ফরম্যাট তুলনা করুন। ৫টি ECS ফিল্ডের জন্য জেসন পেলোড ১৩৫ বাইট গ্রহণ করে, যেখানে Logfmt রেকর্ডটিকে ৮৫ বাইটে সংকুচিত করে। এটি ৫০ বাইটের পার্থক্য এবং ২টি ফরম্যাটে মোট ২২০ বাইট সম্মিলিত আকার তৈরি করে। উভয় ফরম্যাট পরীক্ষা করলে নেস্টেড মেটাডেটা সমর্থন এবং কমপ্যাক্ট আকারের মধ্যকার পার্থক্য স্পষ্ট হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Format lab (inspect payloads, press Run)', bn: 'Format lab (পেলোড পরীক্ষা করুন, Run)' },
      html: '<h3>Log Serialization Formats</h3>\n<pre id="out"></pre>\n<p>Comparing JSON and Logfmt payload footprints.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const jb = 135;\nconst lb = 85;\nconst diff = jb - lb;\nconst tot = jb + lb;\nconsole.log("tot: " + tot);\ndocument.getElementById("out").textContent = "JSON: " + jb + "B · Logfmt: " + lb + "B · Difference: " + diff + "B · Total: " + tot + "B (5 ECS fields across 2 formats ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Format selection rules', bn: 'ফলাফল — ফরম্যাট নির্বাচনের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Choose JSON for central aggregation: modern search platforms (OpenSearch, Loki) parse JSON natively with zero custom parser regexes.', bn: 'কেন্দ্রীয় সিস্টেমের জন্য জেসন বাছুন: আধুনিক সার্চ প্ল্যাটফর্মগুলো কোনো রেজেক্স ছাড়াই সরাসরি জেসন পার্স করতে পারে।' },
        { en: 'Adopt semantic conventions early: enforce naming standards before teams publish diverging field names across dozens of repos.', bn: 'প্রথম থেকেই মানদণ্ড প্রয়োগ করুন: বিভিন্ন রিপোজিটরিতে ফিল্ডের নামের অমিল ঘটার আগেই কোম্পানির নির্ধারিত নাম বাধ্যতামূলক করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common serialization traps', bn: 'ডিবাগ — সিরিয়ালাইজেশনের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Mapping collision when data types diverge for the same field', bn: 'একই ফিল্ডে ভিন্ন ডেটা টাইপের কারণে ম্যাপিং সংঘাত' },
      text: {
        en: 'If Service A outputs a numeric status code (200) while Service B records a text string ("200 OK") for the same field, Elasticsearch throws a strict mapping explosion error and drops logs from Service B. Cure: enforce strict TypeScript interfaces or JSON schema validation at the logging library wrapper.',
        bn: 'যদি সার্ভিস A স্ট্যাটাস কোড সংখ্যা হিসেবে পাঠায় আর সার্ভিস B একই ফিল্ডে টেক্সট স্ট্রিং পাঠায়, তবে ইলাস্টিকসার্চ ম্যাপিং এরর তৈরি করে সার্ভিস B এর লগ বাতিল করে দেয়। প্রতিকার: লগার লাইব্রেরিতে কঠোর টাইপস্ক্রিপ্ট ইন্টারফেস প্রয়োগ করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Preventing hot-path CPU bottlenecks with fast serializers', bn: 'দ্রুতগতির সিরিয়ালাইজার দিয়ে সিপিইউ বাধার সমাধান' },
      text: {
        en: 'Standard JSON.stringify performs synchronous blocking reflection across object keys. In high-velocity microservices processing 50,000 requests per second, use schema-compiled serializers like fast-json-stringify to achieve 3x higher throughput with zero event loop blocking.',
        bn: 'সাধারণ JSON.stringify অবজেক্টের ওপর সিঙ্ক্রোনাস ব্লক করে কাজ করে। প্রতি সেকেন্ডে ৫০,০০০ রিকোয়েস্ট পরিচালনা করা সার্ভিসে fast-json-stringify এর মতো লগার ব্যবহার করলে ৩ গুণ বেশি গতি পাওয়া যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production format standards', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল ফরম্যাট মানদণ্ড' },
    },
    {
      type: 'list',
      items: [
        { en: 'Heroku log drains: pioneered the Logfmt convention for simple unix-philosophy command-line pipeline streaming.', bn: 'Heroku লগ ড্রেন: ইউনিক্স কমান্ড-লাইন পাইপলাইনের জন্য সহজে পড়ার উপযোগী Logfmt ধারণার প্রবর্তন করেছিল।' },
        { en: 'OpenTelemetry (OTel) log data model: specifies unified resource and scope attributes compatible with both Prometheus metrics and Jaeger traces.', bn: 'ওপেনটেলিমেট্রি (OTel): মেট্রিক্স ও ট্রেসের সাথে পুরোপুরি সামঞ্জস্যপূর্ণ একটি সমন্বিত রিসোর্স এবং স্কোপ ডেটা মডেল সরবরাহ করে।' },
        { en: 'Winston and Morgan Node.js loggers: widely deployed frameworks offering swappable format formatters between JSON and colorized CLI text.', bn: 'Winston ও Morgan লগার: জেসন এবং টার্মিনাল টেক্সটের মধ্যে সহজেই পরিবর্তন করার সুবিধাযুক্ত জনপ্রিয় ফ্রেমওয়ার্ক।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Aggregation and Buffering Collectors', bn: 'পরবর্তী পাঠ — অ্যাগ্রিগেশন ও বাফারিং কালেক্টর' },
    },
    {
      type: 'para',
      text: {
        en: 'With serialization formats and schemas mastered, Lesson 4 explores log collection architectures: running Vector and Fluent Bit sidecars, managing in-memory and disk-backed buffers, and protecting services against backpressure.',
        bn: 'সিরিয়ালাইজেশন ফরম্যাট ও স্কিমা আয়ত্ত করার পর, পাঠ ৪ লগ কালেকশন আর্কিটেকচার শেখাবে: Vector ও Fluent Bit সাইডকার স্থাপন, মেমরি ও ডিস্ক বাফারিং এবং ব্যাকপ্রেশার থেকে সার্ভিস রক্ষা করা।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-fmt-ex-1',
      kind: 'mcq',
      topic: 'ecs-purpose',
      question: {
        en: 'What primary problem does the Elastic Common Schema (ECS) specification solve in large distributed enterprise environments?',
        bn: 'বৃহৎ ডিস্ট্রিবিউটেড এন্টারপ্রাইজ পরিবেশে ইলাস্টিক কমন স্কিমা (ECS) কোন প্রধান সমস্যার সমাধান করে?',
      },
      options: [
        {
          en: 'It standardizes field names and data types across all services, preventing index field explosion and mapping collisions',
          bn: 'এটি সমস্ত সার্ভিসের ফিল্ডের নাম ও ডেটা টাইপ প্রমিত করে, ফলে ইনডেক্সে ফিল্ডের সংঘাত ও বিশৃঙ্খলা দূর হয়',
        },
        {
          en: 'It doubles the physical internet speed between office computers',
          bn: 'এটি অফিসের কম্পিউটারগুলোর মধ্যকার ইন্টারনেট স্পিড দ্বিগুণ করে',
        },
        {
          en: 'It deletes all user passwords from the database permanently',
          bn: 'এটি ডেটাবেস থেকে ব্যবহারকারীর পাসওয়ার্ড চিরতরে মুছে দেয়',
        },
        {
          en: 'It converts JavaScript code into Python automatically',
          bn: 'এটি জাভাস্ক্রিপ্ট কোডকে স্বয়ংক্রিয়ভাবে পাইথনে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'ECS standardizes field names across an enterprise.', bn: 'ECS প্রতিষ্ঠানে ফিল্ডের নামের অভিন্ন মান নিশ্চিত করে।' },
      explanation: {
        en: 'ECS standardizes field definitions across teams, preventing mapping collisions where different services use conflicting types for the same concept.',
        bn: 'ECS টিমের মধ্যে ফিল্ডের নামকরণ নির্দিষ্ট করে দেয়, ফলে বিভিন্ন সার্ভিসের মধ্যে ডেটা টাইপের সংঘাত ঘটে না।',
      },
    },
    {
      id: 'log-fmt-ex-2',
      kind: 'mcq',
      topic: 'format-byte-difference',
      question: {
        en: 'In our code walkthrough, how many bytes did JSON and Logfmt consume for the 5 ECS fields, and what was their byte difference?',
        bn: 'আমাদের কোড আলোচনায় ৫টি ECS ফিল্ডের জন্য JSON এবং Logfmt যথাক্রমে কত বাইট গ্রহণ করেছিল এবং তাদের বাইটের পার্থক্য কত ছিল?',
      },
      options: [
        { en: 'JSON = 135B, Logfmt = 85B, byte difference = 50B across 5 ECS fields', bn: 'JSON = ১৩৫B, Logfmt = ৮৫B, ৫টি ECS ফিল্ডে বাইটের পার্থক্য = ৫০B' },
        { en: 'JSON = 300B, Logfmt = 200B, byte difference = 100B across 5 ECS fields', bn: 'JSON = ৩০০B, Logfmt = ২০০B, ৫টি ECS ফিল্ডে বাইটের পার্থক্য = ১০০B' },
        { en: 'JSON = 50B, Logfmt = 50B, byte difference = 0B across 5 ECS fields', bn: 'JSON = ৫০B, Logfmt = ৫০B, ৫টি ECS ফিল্ডে বাইটের পার্থক্য = ০B' },
        { en: 'JSON = 0B, Logfmt = 0B, byte difference = 0B across 0 ECS fields', bn: 'JSON = ০B, Logfmt = ০B, ০টি ECS ফিল্ডে বাইটের পার্থক্য = ০B' },
      ],
      answer: 0,
      hint: { en: '135 - 85 = 50 bytes.', bn: '১৩৫ - ৮৫ = ৫০ বাইট।' },
      explanation: {
        en: 'The simulation measured 135 bytes for JSON and 85 bytes for Logfmt, demonstrating a 50-byte difference across 5 fields.',
        bn: 'সিমুলেশনটিতে জেসনে ১৩৫ বাইট এবং Logfmt এ ৮৫ বাইট রেকর্ড করে ৫টি ফিল্ডে ৫০ বাইটের সাশ্রয় পাওয়া গিয়েছিল।',
      },
    },
    {
      id: 'log-fmt-ex-3',
      kind: 'mcq',
      topic: 'logfmt-format-trait',
      question: {
        en: 'What distinguishing structural characteristic identifies the Logfmt logging format?',
        bn: 'কোন কাঠামোগত বৈশিষ্ট্য দিয়ে Logfmt লগিং ফরম্যাটকে শনাক্ত করা যায়?',
      },
      options: [
        {
          en: 'Space-delimited key=value pairs that are easily readable and parseable in Unix command-line terminals',
          bn: 'স্পেস দিয়ে আলাদা করা key=value জোড়া যা ইউনিক্স কমান্ড-লাইন টার্মিনালে সহজে পড়া ও পার্স করা যায়',
        },
        {
          en: 'Binary data encoded using Base64 with no spaces',
          bn: 'কোনো স্পেস ছাড়া Base64 এ এনকোড করা বাইনারি ডেটা',
        },
        {
          en: 'XML tags with hierarchical document schemas',
          bn: 'স্তরবিন্যস্ত ডকুমেন্ট স্কিমাযুক্ত এক্সএমএল ট্যাগ',
        },
        {
          en: 'CSV rows with commas but no column header names',
          bn: 'কলামের নাম ছাড়া কমা দিয়ে আলাদা করা সিএসভি সারি',
        },
      ],
      answer: 0,
      hint: { en: 'Logfmt uses key=value pairs.', bn: 'Logfmt ফরম্যাটে key=value জোড়া থাকে।' },
      explanation: {
        en: 'Logfmt outputs space-separated key=value pairs, combining structured data with CLI readability.',
        bn: 'Logfmt স্পেস দিয়ে আলাদা করা key=value প্রকাশ করে, যা স্ট্রাকচার্ড ডেটার সাথে টার্মিনালে পড়ার সুবিধা দেয়।',
      },
    },
    {
      id: 'log-fmt-ex-4',
      kind: 'predict',
      topic: 'common-schema-short-acronym',
      question: {
        en: 'What 3-letter acronym designates the Elastic Common Schema open specification (e.g. ECS)?',
        bn: 'কোন ৩-অক্ষরের সংক্ষিপ্ত রূপটি ইলাস্টিক কমন স্কিমা ওপেন স্পেসিফিকেশনকে নির্দেশ করে (যেমন ECS)?',
      },
      answer: 'ECS',
      accept: ['ECS', 'ecs'],
      hint: { en: 'Elastic Common Schema = E-C-S.', bn: 'ইলাস্টিক কমন স্কিমা = E-C-S।' },
      explanation: {
        en: 'ECS stands for Elastic Common Schema, the cross-industry standard for log attribute naming.',
        bn: 'ECS হলো Elastic Common Schema, যা লগ ফিল্ডের নামকরণের জন্য আন্তর্জাতিকভাবে ব্যবহৃত মানদণ্ড।',
      },
    },
  ],
  quiz: {
    id: 'formats-format-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'log-fmt-q1',
        kind: 'mcq',
        topic: 'mapping-collision-hazard',
        question: {
          en: 'What operational disaster occurs in search clusters like Elasticsearch when two microservices log the same field name with conflicting data types?',
          bn: 'ইলাস্টিকসার্চের মতো সার্চ ক্লাস্টারে কী ধরনের বিপর্যয় ঘটে যখন দুটি মাইক্রোসার্ভিস একই ফিল্ডে ভিন্ন ভিন্ন ডেটা টাইপ পাঠায়?',
        },
        options: [
          {
            en: 'A mapping conflict error occurs, causing the cluster to reject and drop incoming log documents from the conflicting service',
            bn: 'ম্যাপিং সংঘাত দেখা দেয়, যার ফলে ক্লাস্টারটি পরবর্তীতে আসা বিরোধপূর্ণ সার্ভিসের সমস্ত লগ গ্রহণ না করে বাতিল করে দেয়',
          },
          {
            en: 'The operating system hard drive runs out of physical electricity',
            bn: 'অপারেটিং সিস্টেমের হার্ডড্রাইভে ফিজিক্যাল বিদ্যুৎ শেষ হয়ে যায়',
          },
          {
            en: 'All client passwords are automatically posted to the company Slack',
            bn: 'সমস্ত ক্লায়েন্ট পাসওয়ার্ড কোম্পানির স্ল্যাকে নিজে নিজে পোস্ট হয়ে যায়',
          },
          {
            en: 'The server fans rotate in the opposite direction',
            bn: 'সার্ভারের ফ্যানগুলো উল্টো দিকে ঘুরতে শুরু করে',
          },
        ],
        answer: 0,
        hint: { en: 'Mapping conflicts cause rejected log documents.', bn: 'ম্যাপিং সংঘাতের কারণে লগ ডকুমেন্ট বাতিল হয়ে যায়।' },
        explanation: {
          en: 'A mapping collision occurs when a field is defined as an integer in the index but a new document supplies a string, causing indexing rejections.',
          bn: 'ম্যাপিং সংঘাত ঘটে যখন একটি ফিল্ড ইনডেক্সে ইন্টিজার হলেও নতুন ডকুমেন্টে স্ট্রিং হিসেবে আসে, ফলে ক্লাস্টার লগ বাদ দিয়ে দেয়।',
        },
      },
      {
        id: 'log-fmt-q2',
        kind: 'mcq',
        topic: 'total-footprint-verify',
        question: {
          en: 'In our code walkthrough, what was the total combined footprint computed from JSON bytes (135B) plus Logfmt bytes (85B)?',
          bn: 'আমাদের কোড আলোচনায় JSON (১৩৫B) এবং Logfmt (৮৫B) যোগ করে মোট কত সম্মিলিত ফুটপ্রিন্ট পাওয়া গিয়েছিল?',
        },
        options: [
          { en: '220B across 2 formats', bn: '২টি ফরম্যাটে মোট ২২০B' },
          { en: '500B across 2 formats', bn: '২টি ফরম্যাটে মোট ৫০০B' },
          { en: '100B across 1 format', bn: '১টি ফরম্যাটে মোট ১০০B' },
          { en: '0B across 0 formats', bn: '০টি ফরম্যাটে মোট ০B' },
        ],
        answer: 0,
        hint: { en: '135 + 85 = 220.', bn: '১৩৫ + ৮৫ = ২২০।' },
        explanation: {
          en: 'The simulation resolved 135 bytes for JSON and 85 bytes for Logfmt, summing to 220 bytes across 2 formats.',
          bn: 'সিমুলেশনটিতে জেসনে ১৩৫ বাইট এবং Logfmt এ ৮৫ বাইট যোগ করে ২টি ফরম্যাটে মোট ২২০ বাইট হিসাব করা হয়েছিল।',
        },
      },
      {
        id: 'log-fmt-q3',
        kind: 'mcq',
        topic: 'json-nesting-tradeoff',
        question: {
          en: 'What architectural tradeoff must engineers weigh when deciding to use deeply nested objects inside structured JSON logs?',
          bn: 'স্ট্রাকচার্ড জেসন লগের ভেতরে বহুস্তরীয় নেস্টেড অবজেক্ট ব্যবহারের সময় ইঞ্জিনিয়ারদের কোন আর্কিটেকচারাল দিকটি বিবেচনা করতে হয়?',
        },
        options: [
          {
            en: 'Deep nesting enriches context but dramatically increases index complexity and risks hitting search cluster field limits',
            bn: 'গভীর নেস্টিং প্রচুর তথ্য দেওয়ার সুযোগ দিলেও তা ইনডেক্সের জটিলতা বাড়ায় এবং ক্লাস্টারের ফিল্ড সীমা অতিক্রম করার ঝুঁকি তৈরি করে',
          },
          {
            en: 'Nested JSON cannot be transmitted across Ethernet cables',
            bn: 'নেস্টেড জেসন ইথারনেট ক্যাবলের মাধ্যমে পাঠানো সম্ভব নয়',
          },
          {
            en: 'Nested objects disable all JavaScript string methods',
            bn: 'নেস্টেড অবজেক্ট জাভাস্ক্রিপ্টের সমস্ত স্ট্রিং মেথড বন্ধ করে দেয়',
          },
          {
            en: 'Deep nesting reduces computer RAM by 50% permanently',
            bn: 'গভীর নেস্টিং কম্পিউটারের র্যাম স্থায়ীভাবে ৫০% কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Nesting adds context but risks field sprawl.', bn: 'নেস্টিং তথ্য বাড়ায় তবে ইনডেক্সের আকারও ফুলিয়ে দেয়।' },
        explanation: {
          en: 'Excessive nesting creates sprawling index hierarchies that degrade search cluster performance; keep nesting shallow.',
          bn: 'অতিরিক্ত নেস্টিং সার্চ ক্লাস্টারের কার্যক্ষমতা কমিয়ে দেয়; তাই নেস্টিং সর্বদা অগভীর রাখা উচিত।',
        },
      },
      {
        id: 'log-fmt-q4',
        kind: 'predict',
        topic: 'json-alternative-format-name',
        question: {
          en: 'What Heroku-popularized key-value log format separates space-delimited attributes without curly braces (e.g. Logfmt)?',
          bn: 'হেরোকুর জনপ্রিয় করা কোন কি-ভ্যালু লগ ফরম্যাটে কার্লি ব্র্যাকেট ছাড়াই স্পেস দিয়ে অ্যাট্রিবিউট আলাদা করা হয় (যেমন Logfmt)?',
        },
        answer: 'Logfmt',
        accept: ['Logfmt', 'logfmt', 'LogFmt'],
        hint: { en: 'L-o-g-f-m-t', bn: 'L-o-g-f-m-t' },
        explanation: {
          en: 'Logfmt is the key-value text format widely adopted for command-line log ergonomics.',
          bn: 'Logfmt হলো একটি কি-ভ্যালু টেক্সট ফরম্যাট যা কমান্ড-লাইনে সহজে লগের তথ্য বিশ্লেষণের জন্য সুপরিচিত।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'aggregates-and-the-aggregate',
    title: { en: 'Aggregation and Buffering Collectors', bn: 'অ্যাগ্রিগেশন ও বাফারিং কালেক্টর' },
  },
};
