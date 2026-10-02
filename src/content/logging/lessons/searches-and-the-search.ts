import type { Lesson } from '../../../lib/types';

export const SearchesAndTheSearchLesson: Lesson = {
  slug: 'searches-and-the-search',
  tech: 'logging',
  title: {
    en: 'Search and Query Engines — Elasticsearch, Grafana Loki, and LogQL',
    bn: 'অনুসন্ধান ও কুয়েরি ইঞ্জিন — ইলাস্টিকসার্চ, গ্রাফানা লোকি ও LogQL',
  },
  summary: {
    en: 'Master enterprise log indexing and query engines: compare full-text inverted indexes (Elasticsearch/OpenSearch) against label-indexed chunk storage (Grafana Loki), write high-performance LogQL queries, and eliminate runaway index storage costs.',
    bn: 'এন্টারপ্রাইজ লগ ইনডেক্সিং ও কুয়েরি ইঞ্জিন আয়ত্ত করুন: ফুল-টেক্সট ইনভার্টেড ইনডেক্স (ইলাস্টিকসার্চ/ওপেনসার্চ) বনাম লেবেল-ইনডেক্সড চাঙ্ক স্টোরেজ (গ্রাফানা লোকি), শক্তিশালী LogQL কুয়েরি এবং স্টোরেজ খরচ নিয়ন্ত্রণ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Inverted indexes versus label-indexed chunk streaming', bn: 'WHAT — ইনভার্টেড ইনডেক্স বনাম লেবেল-ইনডেক্সড চাঙ্ক স্ট্রিমিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When production systems experience performance degradation, your ability to diagnose root causes hinges entirely on the architecture of your log search engine. Historically, organizations indexed every field and term in inverted indexes using Lucene-based engines like Elasticsearch. While this approach enables lightning-fast arbitrary text search, maintaining full inverted indexes demands immense RAM and storage capacity equal to or exceeding the original data size. Modern cloud observability increasingly adopts index-free architectures pioneered by Grafana Loki: indexing only high-cardinality metadata labels while storing compressed raw log chunks in inexpensive object storage. Understanding how to query logs using LogQL and Lucene ensures your team balances query speed against infrastructure budgets.',
        bn: 'যখন প্রোডাকশন সিস্টেম ধীরগতির হয় বা আউটেজ ঘটে, তখন মূল কারণ দ্রুত খুঁজে বের করা সম্পূর্ণ নির্ভর করে আপনার লগ সার্চ ইঞ্জিনের কাঠামোর ওপর। অতীতে প্রতিষ্ঠানগুলো ইলাস্টিকসার্চের মতো ইঞ্জিনে প্রতিটি শব্দ ও ফিল্ডকে ইনভার্টেড ইনডেক্সে সংরক্ষণ করত। এই পদ্ধতিতে খুব দ্রুত যেকোনো শব্দ খোঁজা গেলেও এর জন্য প্রচুর র্যাম এবং মূল ডেটার চেয়েও বড় স্টোরেজ প্রয়োজন হয়। আধুনিক ক্লাউড আর্কিটেকচারে গ্রাফানা লোকির মতো লেবেল-ভিত্তিক ব্যবস্থা দ্রুত জনপ্রিয় হচ্ছে: যা সম্পূর্ণ টেক্সট ইনডেক্স না করে কেবল প্রয়োজনীয় লেবেল ইনডেক্স করে এবং বাকি ডেটা সস্তা অবজেক্ট স্টোরেজে সংকুচিত করে রাখে। LogQL এবং লুসিন কুয়েরি জানা থাকলে খরচ কমিয়ে সর্বোচ্চ দ্রুততায় ডেটা বিশ্লেষণ করা সম্ভব হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Elasticsearch full inverted index vs Grafana Loki label stream index', bn: 'ইলাস্টিকসার্চ ফুল ইনভার্টেড ইনডেক্স বনাম গ্রাফানা লোকি লেবেল ইনডেক্স' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Elasticsearch vs Grafana Loki log search index diagram">
<rect x="25" y="35" width="260" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="155" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">ELASTICSEARCH / OPENSEARCH</text>
<text x="35" y="85" font-size="9" fill="#2563eb">Raw data: 100GB</text>
<text x="35" y="105" font-size="9" fill="#1e40af">Inverted Index: 120GB (120%)</text>
<text x="35" y="125" font-size="9" fill="#2563eb">Indexes every single token</text>
<text x="35" y="145" font-size="9" fill="#166534">✓ Instant arbitrary word search</text>
<text x="35" y="165" font-size="9" fill="#dc2626">✗ Expensive RAM & SSD footprint</text>

<line x1="285" y1="110" x2="345" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="345,106 355,110 345,114" fill="#4f46e5"/>

<rect x="355" y="35" width="260" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="485" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">GRAFANA LOKI (INDEX-FREE)</text>
<text x="365" y="85" font-size="9" fill="#166534">Raw data: 100GB (in S3 chunks)</text>
<text x="365" y="105" font-size="9" fill="#166534">Label Index: 2GB (only 2%)</text>
<text x="365" y="125" font-size="9" fill="#166534">118GB storage savings</text>
<text x="365" y="145" font-size="9" fill="#166534">✓ 90% cheaper object storage</text>
<text x="365" y="165" font-size="9" fill="#166534">✓ Streamlined LogQL querying</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Loki indexes stream labels only, saving 118GB storage compared to inverted indexes</text>
</svg>`,
      caption: {
        en: 'For a 100GB dataset, Elasticsearch builds a 120GB inverted index while Grafana Loki indexes only labels (2GB), saving 118GB across 5 query records for a combined 122GB benchmark across 2 engines.',
        bn: '১০০GB ডেটাসেটের জন্য ইলাস্টিকসার্চ ১২০GB ইনভার্টেড ইনডেক্স তৈরি করে, যেখানে লোকি কেবল লেবেল ইনডেক্স করে (২GB), যা ৫টি কুয়েরি রেকর্ডে ১১৮GB সাশ্রয় এবং ২টি ইঞ্জিনে মোট ১২২GB আকার উপস্থাপন করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Inverted index',
          def: {
            en: 'A database index mapping individual words and tokens to the exact document IDs where they appear, powering full-text search.',
            bn: 'একটি ডেটাবেস ইনডেক্স যা প্রতিটি শব্দকে সেই শব্দ ধারণকারী সুনির্দিষ্ট ডকুমেন্টের আইডির সাথে মানচিত্রের মতো যুক্ত করে।',
          },
        },
        {
          term: 'Grafana Loki',
          def: {
            en: 'A horizontal log aggregation engine inspired by Prometheus that indexes only metadata labels rather than log line text.',
            bn: 'প্রমিথিউস অনুপ্রাণিত একটি লগ ইঞ্জিন যা সম্পূর্ণ টেক্সট ইনডেক্স না করে কেবল মেটাডেটা লেবেলগুলো ইনডেক্স করে।',
          },
        },
        {
          term: 'LogQL',
          def: {
            en: 'Grafana Loki query language combining label matchers, line filters, and JSON parsers to extract metrics from logs.',
            bn: 'গ্রাফানা লোকির একটি কুয়েরি ভাষা যা লেবেল ফিল্টার, লাইন সার্চ ও জেসন পার্সার সমন্বয় করে লগ থেকে তথ্য ও মেট্রিক্স বের করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Query ergonomics and massive infrastructure savings', bn: 'কেন — সহজ কুয়েরি ও বিশাল পরিকাঠামো সাশ্রয়' },
    },
    {
      type: 'list',
      items: [
        { en: 'Dramatically lower storage bills: storing compressed chunks in S3 cuts monthly log retention costs by 80% to 90% compared to hot SSD clusters.', bn: 'বিপুল খরচ হ্রাস: এস৩ অবজেক্ট স্টোরেজে সংকুচিত চাঙ্ক রাখলে ব্যয়বহুল এসএসডির তুলনায় ৮০% থেকে ৯০% খরচ কমে যায়।' },
        { en: 'Consistent observability experience: LogQL uses the exact same label selection syntax ({app="order-svc"}) as Prometheus PromQL.', bn: 'একীভূত অভিজ্ঞতা: LogQL প্রমিথিউসের PromQL এর মতোই একই লেবেল সিনট্যাক্স ({app="order-svc"}) ব্যবহার করে।' },
        { en: 'Rapid ad-hoc security audits: Lucene text queries allow security engineers to locate specific IP addresses across billions of historical lines.', bn: 'নিরাপত্তা অডিট: লুসিন টেক্সট কুয়েরির মাধ্যমে সিকিউরিটি টিম শত শত কোটি লাইনের মধ্য থেকেও নির্দিষ্ট আইপি খুঁজে বের করতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Querying logs with LogQL in 4 steps', bn: 'HOW — ৪টি ধাপে LogQL দিয়ে কুয়েরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Select stream', bn: '১. স্ট্রিম নির্বাচন' }, text: { en: 'Target logs using stream labels like {app="order-service", env="prod"}.', bn: '{app="order-service", env="prod"} লেবেল দিয়ে স্ট্রিম বাছাই করুন।' } },
        { title: { en: '2. Filter lines', bn: '২. লাইন ফিল্টারিং' }, text: { en: 'Filter line content with substring matchers like |= "error".', bn: '|= "error" অপারেটর দিয়ে নির্দিষ্ট শব্দযুক্ত লাইন ফিল্টার করুন।' } },
        { title: { en: '3. Parse JSON', bn: '৩. জেসন পার্সিং' }, text: { en: 'Pipe through | json to unpack fields into dynamic query variables.', bn: '| json দিয়ে ফিল্ডগুলোকে গতিশীল কুয়েরি ভেরিয়েবলে রূপান্তর করুন।' } },
        { title: { en: '4. Compute rate', bn: '৪. রেট গণনা' }, text: { en: 'Aggregate errors into rates with rate({app="order-svc"} |= "error" [5m]).', bn: 'rate(... [5m]) দিয়ে এরর ফ্রিকোয়েন্সি গণনা করে গ্রাফ তৈরি করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'log_search_query_sim.js',
      code: `// Simulated log search engine query and index sizing
const rawDatasetBytes = 100; // GB

// Inverted index footprint (Elasticsearch) vs Label index footprint (Loki)
const elasticIndexBytes = 120; // GB (120% of data)
const lokiIndexBytes = 2;     // GB (<2% of data)
const indexStorageSaved = elasticIndexBytes - lokiIndexBytes; // 118 GB saved
const scannedRecordsCount = 5;
const combinedIndexFootprint = elasticIndexBytes + lokiIndexBytes; // 122

console.log("Log Search and Query Engine Architecture Simulation:");
console.log("Raw dataset: " + rawDatasetBytes + "GB");
console.log("Elasticsearch index: " + elasticIndexBytes + "GB vs Loki index: " + lokiIndexBytes + "GB");
console.log("Storage savings: " + indexStorageSaved + "GB across " + scannedRecordsCount + " query records");
console.log("Combined index benchmark: " + combinedIndexFootprint + "GB across 2 indexing engines");

// Output:
// Log Search and Query Engine Architecture Simulation:
// Raw dataset: 100GB
// Elasticsearch index: 120GB vs Loki index: 2GB
// Storage savings: 118GB across 5 query records
// Combined index benchmark: 122GB across 2 indexing engines`,
      caption: {
        en: 'The simulation compares a 100GB dataset: Elasticsearch builds a 120GB inverted index, whereas Loki builds a 2GB label index, achieving 118GB of savings across 5 records for a 122GB combined footprint across 2 engines.',
        bn: 'সিমুলেশনটি ১০০GB ডেটাসেট তুলনা করে: ইলাস্টিকসার্চ ১২০GB ইনভার্টেড ইনডেক্স তৈরি করে আর লোকি মাত্র ২GB লেবেল ইনডেক্স করে, যা ৫টি রেকর্ডে ১১৮GB সাশ্রয় এবং ২টি ইঞ্জিনে মোট ১২২GB ফুটপ্রিন্ট নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive search engine comparison lab', bn: 'INSIDE — জীবন্ত সার্চ ইঞ্জিন তুলনা ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Compare indexing architectures directly. For 100GB of raw logs, maintaining full inverted indexes in Elasticsearch consumes 120GB of disk space. In contrast, Grafana Loki indexes only stream labels, requiring only 2GB and saving 118GB of expensive SSD capacity across 5 query records. The combined index footprint benchmarks at 122GB across 2 indexing engines.',
        bn: 'ইনডেক্সিং আর্কিটেকচার সরাসরি তুলনা করুন। ১০০GB কাঁচা লগের জন্য ইলাস্টিকসার্চের সম্পূর্ণ ইনভার্টেড ইনডেক্স ১২০GB জায়গা দখল করে। অন্যদিকে গ্রাফানা লোকি কেবল লেবেল ইনডেক্স করায় মাত্র ২GB জায়গা লাগে, যা ৫টি কুয়েরি রেকর্ডে ১১৮GB এসএসডি স্টোরেজ সাশ্রয় করে। ২টি ইনডেক্সিং ইঞ্জিনে সম্মিলিত আকার ১২২GB হিসেবে বেঞ্চমার্ক হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Search lab (compare index size, press Run)', bn: 'Search lab (ইনডেক্স সাইজ তুলনা, Run)' },
      html: '<h3>Log Search Indexing Benchmark</h3>\n<pre id="out"></pre>\n<p>Inverted index vs label-only chunk index.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const d = 100;\nconst es = 120;\nconst lk = 2;\nconst saved = es - lk;\nconst tot = es + lk;\nconsole.log("tot: " + tot);\ndocument.getElementById("out").textContent = "Data: " + d + "GB · Elasticsearch: " + es + "GB · Loki: " + lk + "GB · Saved: " + saved + "GB · Total: " + tot + "GB (5 query records across 2 engines ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Search engine architecture rules', bn: 'ফলাফল — সার্চ ইঞ্জিন আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Keep label cardinality low in Loki: never put dynamic high-cardinality values like user_id or order_id into Loki stream labels.', bn: 'লোকিতে লেবেল কার্ডিনালিটি কম রাখুন: user_id বা order_id এর মতো কোটি ভিন্ন মানযুক্ত ফিল্ড কখনো লোকি লেবেলে রাখবেন না।' },
        { en: 'Use LogQL line filters before parsing JSON: filter by string (|="error") before parsing (| json) to dramatically reduce CPU processing time.', bn: 'জেসন পার্স করার আগে লাইন ফিল্টার করুন: (| json) এর পূর্বেই (|="error") দিয়ে ফিল্টার করলে কুয়েরি অনেক দ্রুত চলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common log search traps', bn: 'ডিবাগ — লগ অনুসন্ধানের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'High cardinality explosion in Grafana Loki labels', bn: 'গ্রাফানা লোকি লেবেলে হাই কার্ডিনালিটি বিস্ফোরণ' },
      text: {
        en: 'Adding unique identifiers like user_id or IP address as Loki stream labels creates millions of tiny stream chunks, crashing the Loki ingester with out-of-memory errors. Cure: keep labels restricted to static properties like app, environment, and region, querying user IDs using line filters and JSON stages.',
        bn: 'user_id বা আইপি অ্যাড্রেসকে লোকির লেবেল হিসেবে ব্যবহার করলে লক্ষ লক্ষ আলাদা স্ট্রিম তৈরি হয়ে ইনজেস্টার ক্র্যাশ করে। প্রতিকার: লেবেল হিসেবে কেবল app বা environment এর মতো স্থির মান রাখুন এবং ভেতরের তথ্য জেসন ফিল্টারে খুঁজুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Partitioning Elasticsearch indexes by date and tier', bn: 'তারিখ ও স্তর অনুযায়ী ইলাস্টিকসার্চ ইনডেক্স ভাগ করা' },
      text: {
        en: 'Never store all logs in a single monolithic index. Use Index Lifecycle Management (ILM) to create daily rollover indexes (logs-order-svc-2026.09.28), seamlessly moving aged indexes from hot NVMe drives to warm SATA storage after 7 days.',
        bn: 'কখনোই একটি একক বিশাল ইনডেক্সে সমস্ত লগ রাখবেন না। দৈনিক ইনডেক্স তৈরি করুন এবং ৭ দিন পর পুরনো ইনডেক্সগুলো স্বয়ংক্রিয়ভাবে দ্রুতগতির ড্রাইভ থেকে সস্তা স্টোরেজে স্থানান্তর করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production search platforms', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল সার্চ ব্যবস্থা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Grafana Cloud: leverages Loki index-free chunk streaming to offer low-cost log observability integrated seamlessly with Prometheus.', bn: 'Grafana Cloud: প্রমিথিউসের সাথে সহজে সংহত করে কম খরচে লগ পর্যালোচনার জন্য লোকি প্রযুক্তি ব্যবহার করে।' },
        { en: 'AWS OpenSearch Service: managed distributed search clusters powering complex enterprise SIEM security auditing and fraud analytics.', bn: 'AWS OpenSearch: জটিল নিরাপত্তা অডিট এবং জালিয়াতি শনাক্তকরণের জন্য ব্যবহৃত পরিচালিত সার্চ ক্লাস্টার।' },
        { en: 'Kibana dashboards: interactive visualization suite providing rich heatmaps, geospatial IP maps, and transaction latency distributions.', bn: 'Kibana ড্যাশবোর্ড: লগের ডেটা থেকে তাৎক্ষণিক গ্রাফ, হিটম্যাপ ও ল্যাটেন্সি ডিস্ট্রিবিউশন প্রদর্শনের শক্তিশালী মাধ্যম।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Retention Policies and Compliance', bn: 'পরবর্তী পাঠ — রিটেনশন পলিসি ও কমপ্লায়েন্স' },
    },
    {
      type: 'para',
      text: {
        en: 'With search and query engines mastered, Lesson 7 explores log lifecycle management: configuring automated log rotation, transitioning aged chunks to S3 Glacier cold storage, and adhering to regulatory compliance standards like GDPR and HIPAA.',
        bn: 'অনুসন্ধান ও কুয়েরি ইঞ্জিন আয়ত্ত করার পর, পাঠ ৭ লগ লাইফসাইকেল শেখাবে: স্বয়ংক্রিয় লগ রোটেশন, পুরনো ডেটা এস৩ গ্লেসিয়ার কোল্ড স্টোরেজে স্থানান্তর এবং জিডিপিআর ও এইচআইপিএএ কমপ্লায়েন্স মানদণ্ড।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-srch-ex-1',
      kind: 'mcq',
      topic: 'loki-vs-elasticsearch-core',
      question: {
        en: 'What fundamental architectural difference allows Grafana Loki to achieve up to 90% lower storage costs than traditional Elasticsearch clusters?',
        bn: 'কোন মৌলিক আর্কিটেকচারাল পার্থক্যের কারণে গ্রাফানা লোকি প্রথাগত ইলাস্টিকসার্চ ক্লাস্টারের তুলনায় ৯০% পর্যন্ত কম স্টোরেজ খরচে চলে?',
      },
      options: [
        {
          en: 'Loki indexes only metadata stream labels rather than the full text of log lines, storing compressed raw chunks in inexpensive cloud object storage',
          bn: 'লোকি সম্পূর্ণ টেক্সট ইনডেক্স না করে কেবল মেটাডেটা লেবেলগুলো ইনডেক্স করে এবং সংকুচিত মূল লগ সস্তা ক্লাউড অবজেক্ট স্টোরেজে সংরক্ষণ করে',
        },
        {
          en: 'Loki deletes 90% of incoming logs on arrival to save space',
          bn: 'লোকি জায়গা বাঁচাতে আসার সাথে সাথেই ৯০% লগ মুছে ফেলে',
        },
        {
          en: 'Loki stores logs on physical paper in filing cabinets',
          bn: 'লোকি লগগুলোকে আলমারিতে কাগজের ফাইলে লিখে রাখে',
        },
        {
          en: 'Loki operates exclusively on quantum computing hardware',
          bn: 'লোকি কেবল কোয়ান্টাম কম্পিউটার হার্ডওয়্যারে চলে',
        },
      ],
      answer: 0,
      hint: { en: 'Loki indexes labels, not log content.', bn: 'লোকি কনটেন্ট নয়, কেবল লেবেল ইনডেক্স করে।' },
      explanation: {
        en: 'By indexing only metadata labels and storing compressed chunks in S3, Loki avoids massive inverted index storage overheads.',
        bn: 'কেবল মেটাডেটা লেবেল ইনডেক্স করে এবং এস৩ তে চাঙ্ক জমা রেখে লোকি বিশাল ইনভার্টেড ইনডেক্সের বাড়তি খরচ পুরোপুরি দূর করে।',
      },
    },
    {
      id: 'log-srch-ex-2',
      kind: 'mcq',
      topic: 'search-sim-savings',
      question: {
        en: 'In our code walkthrough for a 100GB dataset, how many gigabytes did the Elasticsearch index and Loki index require, and what was the storage saving?',
        bn: 'আমাদের কোড আলোচনায় ১০০GB ডেটাসেটের জন্য ইলাস্টিকসার্চ এবং লোকি ইনডেক্সে যথাক্রমে কত গিগাবাইট লেগেছিল এবং স্টোরেজ সাশ্রয় কত ছিল?',
      },
      options: [
        { en: 'Elasticsearch = 120GB, Loki = 2GB, storage saving = 118GB across 5 query records', bn: 'ইলাস্টিকসার্চ = ১২০GB, লোকি = ২GB, ৫টি কুয়েরি রেকর্ডে স্টোরেজ সাশ্রয় = ১১৮GB' },
        { en: 'Elasticsearch = 500GB, Loki = 200GB, storage saving = 300GB across 5 query records', bn: 'ইলাস্টিকসার্চ = ৫০০GB, লোকি = ২০০GB, ৫টি কুয়েরি রেকর্ডে স্টোরেজ সাশ্রয় = ৩০০GB' },
        { en: 'Elasticsearch = 10GB, Loki = 10GB, storage saving = 0GB across 5 query records', bn: 'ইলাস্টিকসার্চ = ১০GB, লোকি = ১০GB, ৫টি কুয়েরি রেকর্ডে স্টোরেজ সাশ্রয় = ০GB' },
        { en: 'Elasticsearch = 0GB, Loki = 0GB, storage saving = 0GB across 0 query records', bn: 'ইলাস্টিকসার্চ = ০GB, লোকি = ০GB, ০টি কুয়েরি রেকর্ডে স্টোরেজ সাশ্রয় = ০GB' },
      ],
      answer: 0,
      hint: { en: '120 - 2 = 118GB saved.', bn: '১২০ - ২ = ১১৮GB সাশ্রয়।' },
      explanation: {
        en: 'The simulation measured 120GB for Elasticsearch inverted index vs 2GB for Loki label index, saving 118GB across 5 records.',
        bn: 'সিমুলেশনটিতে ইলাস্টিকসার্চে ১২০GB এবং লোকিতে ২GB মেপে ৫টি রেকর্ডে মোট ১১৮GB স্টোরেজ সাশ্রয় পাওয়া গিয়েছিল।',
      },
    },
    {
      id: 'log-srch-ex-3',
      kind: 'mcq',
      topic: 'loki-label-cardinality-hazard',
      question: {
        en: 'Why is placing dynamic high-cardinality fields (like user_id, order_id, or request_ip) into Grafana Loki stream labels dangerous?',
        bn: 'user_id বা order_id এর মতো গতিশীল হাই-কার্ডিনালিটি ফিল্ডকে গ্রাফানা লোকির লেবেলে রাখা কেন বিপজ্জনক?',
      },
      options: [
        {
          en: 'It causes a cardinality explosion, creating millions of tiny independent streams that overwhelm the Loki index and crash ingesters',
          bn: 'এটি কার্ডিনালিটি বিস্ফোরণ ঘটায়, যার ফলে লক্ষ লক্ষ ক্ষুদ্র স্ট্রিম তৈরি হয়ে লোকির ইনডেক্স বিকল করে এবং ইনজেস্টার ক্র্যাশ করায়',
        },
        {
          en: 'It disconnects the server from the local power grid',
          bn: 'এটি সার্ভারকে বৈদ্যুতিক গ্রিড থেকে বিচ্ছিন্ন করে ফেলে',
        },
        {
          en: 'It changes the timezone of all user smartphones',
          bn: 'এটি সমস্ত ব্যবহারকারীর ফোনের টাইমজোন বদলে দেয়',
        },
        {
          en: 'It deletes all CSS files from the web application',
          bn: 'এটি ওয়েব অ্যাপ্লিকেশন থেকে সমস্ত সিএসএস ফাইল মুছে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'High cardinality creates too many streams.', bn: 'উচ্চ কার্ডিনালিটি অতিরিক্ত স্ট্রিম তৈরি করে সিস্টেম নষ্ট করে।' },
      explanation: {
        en: 'Loki creates an independent chunk stream for every unique label combination; high cardinality overwhelms memory and indexing.',
        bn: 'লোকি প্রতিটি আলাদা লেবেল কম্বিনেশনের জন্য স্বতন্ত্র স্ট্রিম তৈরি করে; উচ্চ কার্ডিনালিটি মেমরি শেষ করে সিস্টেম অচল করে দেয়।',
      },
    },
    {
      id: 'log-srch-ex-4',
      kind: 'predict',
      topic: 'loki-query-language-name',
      question: {
        en: 'What is the name of the Prometheus-inspired log query language used to query Grafana Loki (e.g. LogQL)?',
        bn: 'গ্রাফানা লোকিতে লগ অনুসন্ধানের জন্য ব্যবহৃত প্রমিথিউস-অনুপ্রাণিত কুয়েরি ভাষার নাম কী (যেমন LogQL)?',
      },
      answer: 'LogQL',
      accept: ['LogQL', 'logql', 'Logql'],
      hint: { en: 'L-o-g-Q-L', bn: 'L-o-g-Q-L' },
      explanation: {
        en: 'LogQL is the Grafana Loki query language modeled after Prometheus PromQL.',
        bn: 'LogQL হলো গ্রাফানা লোকির জন্য তৈরি বিশেষায়িত কুয়েরি ভাষা যা প্রমিথিউসের PromQL এর আদলে গঠিত।',
      },
    },
  ],
  quiz: {
    id: 'searches-search-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'log-srch-q1',
        kind: 'mcq',
        topic: 'inverted-index-strength',
        question: {
          en: 'What operational advantage does an Elasticsearch full inverted index provide over index-free chunk search?',
          bn: 'ইনডেক্স-মুক্ত চাঙ্ক সার্চের তুলনায় ইলাস্টিকসার্চের ফুল ইনভার্টেড ইনডেক্স কোন অপারেশনাল সুবিধা প্রদান করে?',
        },
        options: [
          {
            en: 'Instant, low-latency arbitrary word and regex searching across billions of historical log lines without scanning raw byte payloads',
            bn: 'কাঁচা বাইট পেলোড স্ক্যান না করেই শত শত কোটি ঐতিহাসিক লগ লাইনের মধ্য থেকে যেকোনো শব্দ বা রেজেক্স তাৎক্ষণিক খুঁজে বের করার সুবিধা',
          },
          {
            en: 'It eliminates the need for computer monitors in the server room',
            bn: 'এটি সার্ভার রুমে কোনো মনিটর রাখার প্রয়োজনীয়তা দূর করে',
          },
          {
            en: 'It reduces internet bandwidth costs by 100%',
            bn: 'এটি ইন্টারনেট ব্যান্ডউইথের খরচ শতভাগ কমিয়ে দেয়',
          },
          {
            en: 'It automatically writes software features without developer code',
            bn: 'এটি ডেভেলপার কোড ছাড়াই নিজে থেকে সফটওয়্যার ফিচার লিখে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'Inverted indexes provide instant arbitrary search.', bn: 'ইনভার্টেড ইনডেক্স তাৎক্ষণিক যেকোনো শব্দ খোঁজার সুযোগ দেয়।' },
        explanation: {
          en: 'Inverted indexes map terms directly to document IDs, enabling sub-second search across massive historical datasets.',
          bn: 'ইনভার্টেড ইনডেক্স শব্দকে সরাসরি ডকুমেন্টের সাথে সংযুক্ত রাখে, যার ফলে বিশাল ডেটাসেটেও চোখের পলকে অনুসন্ধান সম্পন্ন হয়।',
        },
      },
      {
        id: 'log-srch-q2',
        kind: 'mcq',
        topic: 'benchmark-sum-verify',
        question: {
          en: 'In our code walkthrough, what was the combined index benchmark computed from Elasticsearch index (120GB) plus Loki index (2GB)?',
          bn: 'আমাদের কোড আলোচনায় Elasticsearch index (১২০GB) এবং Loki index (২GB) যোগ করে মোট কত সম্মিলিত ইনডেক্স আকার পাওয়া গিয়েছিল?',
        },
        options: [
          { en: '122GB across 2 indexing engines', bn: '২টি ইনডেক্সিং ইঞ্জিনে ১২২GB' },
          { en: '200GB across 2 indexing engines', bn: '২টি ইনডেক্সিং ইঞ্জিনে ২০০GB' },
          { en: '50GB across 1 indexing engine', bn: '১টি ইনডেক্সিং ইঞ্জিনে ৫০GB' },
          { en: '0GB across 0 indexing engines', bn: '০টি ইনডেক্সিং ইঞ্জিনে ০GB' },
        ],
        answer: 0,
        hint: { en: '120 + 2 = 122.', bn: '১২০ + ২ = ১২২।' },
        explanation: {
          en: 'The simulation resolved 120GB for Elasticsearch and 2GB for Loki, producing a combined benchmark of 122GB across 2 engines.',
          bn: 'সিমুলেশনটিতে ইলাস্টিকসার্চে ১২০GB এবং লোকিতে ২GB যোগ করে ২টি ইঞ্জিনে মোট ১২২GB সম্মিলিত আকার পাওয়া গিয়েছিল।',
        },
      },
      {
        id: 'log-srch-q3',
        kind: 'mcq',
        topic: 'logql-optimization-order',
        question: {
          en: 'Why should LogQL queries place substring line filters (|= "error") before JSON parsing stages (| json)?',
          bn: 'LogQL কুয়েরিতে জেসন পার্সিং (| json) করার পূর্বেই কেন সাধারণ সাবস্ট্রিং লাইন ফিল্টার (|= "error") দেওয়া উচিত?',
        },
        options: [
          {
            en: 'It discards non-matching log lines immediately through fast byte comparisons, avoiding expensive JSON parsing across millions of irrelevant lines',
            bn: 'এটি দ্রুত বাইট তুলনার মাধ্যমে অমিল লাইনগুলো সাথে সাথে বাদ দিয়ে দেয়, ফলে অপ্রয়োজনীয় লক্ষ লক্ষ লাইনে ভারী জেসন পার্সিং করতে হয় না',
          },
          {
            en: 'Placing | json first deletes the database tables',
            bn: 'আগে | json দিলে ডেটাবেস টেবিল মুছে যায়',
          },
          {
            en: 'LogQL throws a syntax error if | json is placed at the end',
            bn: 'শেষে | json দিলে LogQL সিনট্যাক্স এরর দেখায়',
          },
          {
            en: 'Line filters invert the order of timestamps',
            bn: 'লাইন ফিল্টার টাইমস্ট্যাম্পের ক্রম উল্টে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Filter before parsing to save CPU.', bn: 'সিপিইউ বাঁচাতে পার্সিংয়ের আগেই ফিল্টার করুন।' },
        explanation: {
          en: 'Filtering lines first discards 99% of logs before engaging the slower JSON parser, speeding up query execution by 10x.',
          bn: 'আগে ফিল্টার করলে অপ্রয়োজনীয় ৯৯% লগ পার্সারের কাছে যাওয়ার আগেই বাদ পড়ে যায়, ফলে কুয়েরির গতি ১০ গুণ বৃদ্ধি পায়।',
        },
      },
      {
        id: 'log-srch-q4',
        kind: 'predict',
        topic: 'lucene-library-engine',
        question: {
          en: 'What Apache open-source Java full-text search library serves as the underlying core indexing engine behind Elasticsearch and OpenSearch (e.g. Lucene)?',
          bn: 'ইলাস্টিকসার্চ ও ওপেনসার্চের ভেতরের মূল ইনডেক্সিং ইঞ্জিন হিসেবে কোন অ্যাপাচি ওপেন সোর্স জাভা ফুল-টেক্সট লাইব্রেরিটি কাজ করে (যেমন Lucene)?',
        },
        answer: 'Lucene',
        accept: ['Lucene', 'lucene', 'Apache Lucene'],
        hint: { en: 'Apache L-u-c-e-n-e', bn: 'Apache L-u-c-e-n-e' },
        explanation: {
          en: 'Apache Lucene is the high-performance search library underlying Elasticsearch, OpenSearch, and Solr.',
          bn: 'অ্যাপাচি লুসিন (Lucene) হলো ইলাস্টিকসার্চ ও ওপেনসার্চের মূলে থাকা উচ্চ-ক্ষমতাসম্পন্ন সার্চ লাইব্রেরি।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'retains-and-the-retain',
    title: { en: 'Retention Policies and Compliance', bn: 'রিটেনশন পলিসি ও কমপ্লায়েন্স' },
  },
};
