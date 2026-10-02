import type { Lesson } from '../../../lib/types';

export const ShipsAndTheShipLesson: Lesson = {
  slug: 'ships-and-the-ship',
  tech: 'logging',
  title: {
    en: 'Network Shipping and Resilience — Syslog, OTLP, Kafka, and Backpressure',
    bn: 'নেটওয়ার্ক শিপিং ও টেকসই ব্যবস্থা — Syslog, OTLP, কাফকা ও ব্যাকপ্রেশার',
  },
  summary: {
    en: 'Master enterprise log shipping across networks: evaluate transport protocols (Syslog, OpenTelemetry OTLP, gRPC), buffer extreme ingestion spikes with Apache Kafka shock absorbers, enforce mTLS encryption, and implement exponential backoff with jitter against downstream rate limits.',
    bn: 'নেটওয়ার্ক জুড়ে এন্টারপ্রাইজ লগ শিপিং আয়ত্ত করুন: ট্রান্সপোর্ট প্রোটোকল (Syslog, OTLP, gRPC), অ্যাপাচি কাফকা দিয়ে ইনজেশন স্পাইক বাফারিং, mTLS এনক্রিপশন এবং ডাউনস্ট্রিম রেট লিমিটের বিরুদ্ধে এক্সপোনেনশিয়াল ব্যাকঅফ প্রয়োগ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Network transports, message buses, and backpressure', bn: 'WHAT — নেটওয়ার্ক ট্রান্সপোর্ট, মেসেজ বাস ও ব্যাকপ্রেশার' },
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit terabytes of operational telemetry from distributed server fleets to centralized indexing clusters, network transport resilience dictates whether your logging pipeline survives real-world infrastructure failures. Transporting logs over raw networks introduces serious hazards: transient connectivity partitions, TCP socket exhaustion, and downstream backend throttling. Modern production architectures rely on standardized protocols like OpenTelemetry (OTLP) and TLS-encrypted Syslog, paired with distributed message queues like Apache Kafka acting as intermediate shock absorbers. By implementing exponential backoff with jitter and decoupling producers from consumer indexing rates, you ensure that network slowdowns never drop data or crash upstream applications.',
        bn: 'যখন আপনি ডিস্ট্রিবিউটেড সার্ভার ফ্লিট থেকে কেন্দ্রীয় ইনডেক্সিং ক্লাস্টারে টেরাবাইট টেলিমেট্রি পাঠান, তখন নেটওয়ার্ক ট্রান্সপোর্টের স্থায়িত্বই নির্ধারণ করে আপনার পাইপলাইন টিকে থাকবে কিনা। খোলা নেটওয়ার্কে লগ পাঠানোতে অনেক ঝুঁকি থাকে: সাময়িক সংযোগ বিচ্ছিন্নতা, টিসিপি সকেট সংকট এবং ডাউনস্ট্রিম সার্ভারের ধীরগতি। আধুনিক প্রোডাকশন আর্কিটেকচার OpenTelemetry (OTLP) এবং TLS-এনক্রিপ্টেড Syslog এর মতো প্রমিত প্রোটোকল ব্যবহার করে এবং অ্যাপাচি কাফকার মতো মেসেজ কিউকে মধ্যবর্তী বাফার হিসেবে কাজে লাগায়। জিটারযুক্ত এক্সপোনেনশিয়াল ব্যাকঅফ এবং উৎপাদককে গ্রাহকের প্রক্রিয়াকরণের গতি থেকে আলাদা রাখার মাধ্যমে যেকোনো নেটওয়ার্ক সংকটেও ডেটা সুরক্ষিত থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Log shippers routing through Kafka shock absorber to indexing cluster', bn: 'কাফকা বাফারের মাধ্যমে ইনডেক্সিং ক্লাস্টারে লগ শিপিংয়ের প্রবাহ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Log shipping and Kafka shock absorber diagram">
<rect x="20" y="40" width="135" height="135" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="87" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">LOG SHIPPERS</text>
<text x="30" y="95" font-family="monospace" font-size="8" fill="currentColor">OTLP (gRPC / mTLS)</text>
<text x="30" y="115" font-family="monospace" font-size="8" fill="currentColor">Syslog (RFC 5424)</text>
<text x="30" y="140" font-size="8" fill="#2563eb">Exponential backoff</text>
<text x="30" y="158" font-size="8" fill="#2563eb">250ms & 500ms jitter</text>

<line x1="155" y1="107" x2="205" y2="107" stroke="#2563eb" stroke-width="2"/>
<polygon points="205,103 215,107 205,111" fill="#2563eb"/>

<rect x="215" y="40" width="190" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">KAFKA SHOCK ABSORBER</text>
<text x="225" y="92" font-size="8" fill="#166534">8 distributed partitions</text>
<text x="225" y="112" font-size="8" fill="#166534">25MB/s per partition</text>
<text x="225" y="132" font-size="8" fill="#166534">200MB/s total capacity</text>
<text x="225" y="155" font-size="8" fill="#166534">Stores 7 days of logs</text>

<line x1="405" y1="107" x2="460" y2="107" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,103 470,107 460,111" fill="#16a34a"/>

<rect x="470" y="45" width="145" height="125" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="542" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">CONSUMER GROUP</text>
<text x="480" y="98" font-size="8" fill="#6b21a8">Elasticsearch / Loki</text>
<text x="480" y="118" font-size="8" fill="#166534">Controlled pull rate</text>
<text x="480" y="142" font-size="8" fill="#6b21a8">Zero data loss on outage</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Kafka absorbs 200MB/s spikes across 8 partitions protecting downstream consumers</text>
</svg>`,
      caption: {
        en: 'Shippers use jittered retries (250ms and 500ms summing to 750ms across 2 retries) to push to 8 Kafka partitions providing 200MB/s total ingestion capacity (25MB/s each).',
        bn: 'শিপাররা জিটারযুক্ত রিট্রাই (২৫০ms ও ৫০০ms মিলে ২টি রিট্রাইয়ে মোট ৭৫০ms) ব্যবহার করে ৮টি কাফকা পার্টিশনে মোট ২০০MB/s গতিতে লগ পাঠায় (প্রতিটিতে ২৫MB/s)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'OpenTelemetry Protocol (OTLP)',
          def: {
            en: 'A vendor-neutral telemetry transport protocol encoding logs, metrics, and traces over high-performance gRPC or HTTP protobuf.',
            bn: 'উচ্চ-গতির gRPC বা HTTP প্রোটোবাফের মাধ্যমে লগ, মেট্রিক্স ও ট্রেস পাঠানোর জন্য তৈরি একটি উন্মুক্ত প্রোটোকল।',
          },
        },
        {
          term: 'Kafka shock absorber',
          def: {
            en: 'A distributed message broker partition topology that decouples log shipping ingestion spikes from indexing cluster capacity.',
            bn: 'একটি ডিস্ট্রিবিউটেড মেসেজ ব্রোকার কাঠামো যা হঠাৎ বেড়ে যাওয়া লগের চাপকে ইনডেক্সিং ক্লাস্টারের প্রক্রিয়াকরণ থেকে আলাদা রাখে।',
          },
        },
        {
          term: 'Exponential backoff with jitter',
          def: {
            en: 'A retry algorithm that exponentially delays successive reconnection attempts randomized with random jitter to prevent thundering herd spikes.',
            bn: 'একটি রিট্রাই অ্যালগরিদম যা নেটওয়ার্কের ভিড় এড়াতে দ্বিগুণ বিলম্ব এবং কিছুটা এলোমেলো সময়ের ব্যবধানে পুনরায় চেষ্টা করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Decoupled ingestion and outage survival', bn: 'কেন — সংযোগহীন ইনজেশন ও আউটেজ থেকে সুরক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Survive cluster upgrades: Kafka retains days of pending logs while downstream Elasticsearch or Loki clusters perform zero-downtime rolling upgrades.', bn: 'ক্লাস্টার আপগ্রেডে নিরাপত্তা: ডাউনস্ট্রিম ক্লাস্টার আপগ্রেড করার সময়ও কাফকা সমস্ত লগ জমিয়ে রেখে শতভাগ ডেটা সুরক্ষা নিশ্চিত করে।' },
        { en: 'Eliminate thundering herd failures: random jitter spreads reconnection attempts across time so recovered gateways are not immediately overloaded.', bn: 'নেটওয়ার্ক জ্যাম রোধ: র্যান্ডম জিটার রিট্রাইয়ের সময়কে ছড়িয়ে দেয় যাতে গেটওয়ে চালু হওয়া মাত্র পুনরায় ক্র্যাশ না করে।' },
        { en: 'Regulatory transport encryption: TLS and mTLS encrypt logs in flight, ensuring corporate compliance across multi-cloud network boundaries.', bn: 'নিরাপদ এনক্রিপশন: mTLS নেটওয়ার্ক চলাকালে সমস্ত লগ ডেটা এনক্রিপ্ট করে বিভিন্ন ক্লাউডের মধ্যেও ডেটার পূর্ণ নিরাপত্তা দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Hardening log shipping in 4 steps', bn: 'HOW — ৪টি ধাপে টেকসই লগ শিপিং' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Select transport', bn: '১. ট্রান্সপোর্ট নির্বাচন' }, text: { en: 'Use OTLP/gRPC for high throughput and HTTPS for simple proxies.', bn: 'উচ্চ গতির জন্য OTLP/gRPC এবং সাধারণ প্রক্সির জন্য HTTPS বেছে নিন।' } },
        { title: { en: '2. Enforce mTLS', bn: '২. mTLS বাধ্যতামূলককরণ' }, text: { en: 'Distribute client and server certificates for mutual authentication.', bn: 'পারস্পরিক প্রমাণের জন্য ক্লায়েন্ট ও সার্ভার সার্টিফিকেট বিতরণ করুন।' } },
        { title: { en: '3. Route via Kafka', bn: '৩. কাফকা বাফার প্রয়োগ' }, text: { en: 'Partition log topics by service name to balance cluster load.', bn: 'সার্ভিসের নাম অনুযায়ী টপিক ভাগ করে লোড ব্যালেন্স করুন।' } },
        { title: { en: '4. Implement jittered retries', bn: '৪. জিটার রিট্রাই প্রয়োগ' }, text: { en: 'Apply randomized exponential backoff on HTTP 429 and 503 errors.', bn: 'এইচটিটিপি ৪২৯ বা ৫০৩ এররে র্যান্ডম এক্সপোনেনশিয়াল ব্যাকঅফ ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'network_shipping_sim.js',
      code: `// Simulated network log shipping retry and Kafka buffering
const maxRetries = 3;
let initialBackoffMs = 100; // ms
const jitterMultiplier = 1.25;

// Calculated retry backoff schedule across 2 retry attempts
const retry1Delay = Math.round(initialBackoffMs * 2 * jitterMultiplier); // 250ms
const retry2Delay = Math.round(initialBackoffMs * 4 * jitterMultiplier); // 500ms
const totalRetryDelay = retry1Delay + retry2Delay; // 750ms

// Kafka partition throughput
const activeKafkaPartitions = 8;
const throughputPerPartition = 25; // MB/s
const totalClusterIngestCapacity = activeKafkaPartitions * throughputPerPartition; // 200 MB/s

console.log("Network Log Shipping Simulation:");
console.log("Retry delays: " + retry1Delay + "ms and " + retry2Delay + "ms (total " + totalRetryDelay + "ms across 2 retries)");
console.log("Kafka partitions: " + activeKafkaPartitions + ", Throughput per partition: " + throughputPerPartition + "MB/s");
console.log("Total cluster ingest capacity: " + totalClusterIngestCapacity + "MB/s across " + activeKafkaPartitions + " partitions");

// Output:
// Network Log Shipping Simulation:
// Retry delays: 250ms and 500ms (total 750ms across 2 retries)
// Kafka partitions: 8, Throughput per partition: 25MB/s
// Total cluster ingest capacity: 200MB/s across 8 partitions`,
      caption: {
        en: 'The simulation logs retry delays of 250ms and 500ms (summing to 750ms across 2 retries). 8 Kafka partitions at 25MB/s provide a total cluster ingest capacity of 200MB/s.',
        bn: 'সিমুলেশনটি ২৫০ms ও ৫০০ms রিট্রাই বিলম্ব (২টি রিট্রাইয়ে মোট ৭৫০ms) রেকর্ড করে। প্রতিটিতে ২৫MB/s সহ ৮টি কাফকা পার্টিশন মোট ২০০MB/s ইনজেশন ক্ষমতা প্রদান করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive network shipping lab', bn: 'INSIDE — জীবন্ত নেটওয়ার্ক শিপিং ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test network shipping mechanics live. Successive retry delays of 250ms and 500ms combine for a total of 750ms across 2 retries, mitigating gateway congestion. Simultaneously, 8 distributed Kafka partitions handle 25MB/s each, aggregating to 200MB/s of total cluster ingest capacity across 8 partitions. Message buses protect downstream clusters from peak ingestion spikes.',
        bn: 'নেটওয়ার্ক শিপিং সরাসরি পরীক্ষা করুন। ২৫০ms ও ৫০০ms এর ধারাবাহিক রিট্রাই বিলম্ব ২টি রিট্রাইয়ে মোট ৭৫০ms সময় নেয়, যা গেটওয়ের ওপর চাপ কমায়। একই সাথে ৮টি কাফকা পার্টিশনের প্রতিটি ২৫MB/s ধারণ করে ৮টি পার্টিশনে মোট ২০০MB/s ইনজেশন ক্ষমতা নিশ্চিত করে। মেসেজ বাস ইনজেশনের তীব্র চাপ থেকে সার্চ ক্লাস্টারকে রক্ষা করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Shipping lab (inspect retries, press Run)', bn: 'Shipping lab (রিট্রাই পরীক্ষা করুন, Run)' },
      html: '<h3>Network Log Shipping Pipeline</h3>\n<pre id="out"></pre>\n<p>Jittered exponential backoff and Kafka throughput.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const r1 = 250;\nconst r2 = 500;\nconst totDelay = r1 + r2;\nconst parts = 8;\nconst perPart = 25;\nconst cap = parts * perPart;\nconsole.log("cap: " + cap);\ndocument.getElementById("out").textContent = "Retries: " + r1 + "ms + " + r2 + "ms = " + totDelay + "ms · Partitions: " + parts + " · Ingest: " + cap + "MB/s (2 retries across 8 partitions ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Network shipping rules', bn: 'ফলাফল — নেটওয়ার্ক শিপিংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always decouple with a message bus at scale: Kafka or Kinesis allows search clusters to index logs at their own pace without dropping records.', bn: 'বড় সিস্টেমে মেসেজ বাস ব্যবহার করুন: কাফকা বা কাইনেসিস সার্চ ক্লাস্টারকে তার নিজস্ব গতিতে ডেটা প্রসেস করার সুযোগ দেয়।' },
        { en: 'Never retry without jitter: deterministic exponential backoff synchronizes retry spikes, causing repeated gateway brownouts.', bn: 'জিটার ছাড়া কখনোই রিট্রাই করবেন না: ফিক্সড রিট্রাই হাজার হাজার সার্ভিসের ট্রাফিক একসাথে পাঠিয়ে গেটওয়ে ক্র্যাশ করিয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common shipping pitfalls', bn: 'ডিবাগ — শিপিংয়ের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'UDP Syslog packet loss under network congestion', bn: 'নেটওয়ার্ক জ্যামের সময় UDP Syslog এ ডেটা হারিয়ে যাওয়া' },
      text: {
        en: 'Legacy Syslog over UDP (port 514) drops packets silently without informing the sender when network switches or routers become saturated. Cure: upgrade legacy syslog endpoints to TCP with TLS (port 6514) or modern OTLP/gRPC to ensure delivery receipts.',
        bn: 'ইউডিপি (পোর্ট ৫১৪) দিয়ে সাধারণ Syslog পাঠালে নেটওয়ার্ক জ্যামে কোনো নোটিশ ছাড়াই প্যাকেট হারিয়ে যায়। প্রতিকার: সর্বদা টিসিপি ও টিএলএসযুক্ত Syslog (পোর্ট ৬৫১৪) অথবা আধুনিক OTLP/gRPC ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Snappy compression for low CPU overhead', bn: 'কম সিপিইউ খরচে স্ন্যাপি কম্প্রেশন' },
      text: {
        en: 'While gzip offers high compression ratios, it is CPU-heavy. Log shipping pipelines targeting high throughput (such as Kafka or Loki push) use Google Snappy or LZ4 compression, delivering 4x faster compression speeds with minimal CPU impact.',
        bn: 'জিজিপ ভালো কম্প্রেশন দিলেও প্রচুর সিপিইউ ব্যবহার করে। উচ্চ-গতির পাইপলাইনে গুগল স্ন্যাপি (Snappy) বা LZ4 ব্যবহার করলে ৪ গুণ দ্রুত গতিতে লগ পাঠানো সম্ভব হয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production shipping topologies', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল শিপিং পরিকাঠামো' },
    },
    {
      type: 'list',
      items: [
        { en: 'Uber Chaperone: Kafka-based audit telemetry pipeline tracking billions of ride events with guaranteed at-least-once delivery.', bn: 'Uber Chaperone: কাফকা-ভিত্তিক অডিট পাইপলাইন যা নিশ্চিতভাবে শত শত কোটি রাইড ইভেন্ট কোনো তথ্য না হারিয়ে ট্র্যাক করে।' },
        { en: 'LinkedIn log pipeline: pioneered Apache Kafka originally to ingest billions of daily user activity log streams across data centers.', bn: 'LinkedIn লগ পাইপলাইন: বিশ্বব্যাপী ব্যবহারকারীদের প্রতিদিন শত শত কোটি অ্যাক্টিভিটি লগ সংগ্রহের জন্যই মূলত অ্যাপাচি কাফকা আবিষ্কার করেছিল।' },
        { en: 'OpenTelemetry Collector Gateway: central proxy tier that terminates mTLS, authenticates tenant tokens, and routes OTLP batches to backend stores.', bn: 'OTel কালেক্টর গেটওয়ে: একটি কেন্দ্রীয় প্রক্সি যা ক্লায়েন্ট প্রমাণীকরণ করে এবং OTLP ব্যাচগুলোকে বিভিন্ন ডেটাবেসে ভাগ করে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Search and Query Engines', bn: 'পরবর্তী পাঠ — অনুসন্ধান ও কুয়েরি ইঞ্জিন' },
    },
    {
      type: 'para',
      text: {
        en: 'With network shipping and message buses mastered, Lesson 6 explores central indexing and search engines: comparing Elasticsearch inverted indexes against Grafana Loki index-free chunk streaming and mastering LogQL queries.',
        bn: 'নেটওয়ার্ক শিপিং ও মেসেজ বাস আয়ত্ত করার পর, পাঠ ৬ কেন্দ্রীয় ইনডেক্সিং ও সার্চ ইঞ্জিন শেখাবে: ইলাস্টিকসার্চ ইনভার্টেড ইনডেক্স বনাম গ্রাফানা লোকির ইনডেক্স-মুক্ত চাঙ্ক স্ট্রিমিং এবং LogQL কুয়েরি।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-shp-ex-1',
      kind: 'mcq',
      topic: 'kafka-buffer-role',
      question: {
        en: 'What architectural role does an Apache Kafka cluster serve when placed between edge log shippers and centralized search engines?',
        bn: 'এজ লগ শিপার এবং কেন্দ্রীয় সার্চ ইঞ্জিনের মাঝে অ্যাপাচি কাফকা ক্লাস্টার বসালে তা কোন আর্কিটেকচারাল ভূমিকা পালন করে?',
      },
      options: [
        {
          en: 'It acts as an intermediate shock absorber, absorbing extreme log ingestion spikes and allowing search clusters to ingest at a controlled pace without dropping data',
          bn: 'এটি একটি মধ্যবর্তী বাফার হিসেবে কাজ করে, হঠাৎ তৈরি হওয়া লগের বিশাল চাপ গ্রহণ করে সার্চ ক্লাস্টারকে তার সুবিধাজনক গতিতে ডেটা প্রসেস করতে সাহায্য করে',
        },
        {
          en: 'It permanently compresses all logs into black-and-white PDF files',
          bn: 'এটি সমস্ত লগকে সাদাকালো পিডিএফ ফাইলে রূপান্তর করে',
        },
        {
          en: 'It shuts down the client mobile applications to save network data',
          bn: 'এটি ডেটা সাশ্রয়ের জন্য ব্যবহারকারীর মোবাইল অ্যাপ বন্ধ করে দেয়',
        },
        {
          en: 'It converts HTTP requests into audio signals for copper telephone lines',
          bn: 'এটি এইচটিটিপি রিকোয়েস্টকে টেলিফোন লাইনের অডিও সিগন্যালে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'Kafka decouples ingestion spikes from indexing.', bn: 'কাফকা ইনজেশনের চাপকে ইনডেক্সিং থেকে আলাদা করে।' },
      explanation: {
        en: 'Kafka absorbs incoming telemetry spikes and queues batches durably, protecting downstream indexing databases from overload.',
        bn: 'কাফকা হঠাৎ আসা লগের অতিরিক্ত চাপ ধারণ করে রাখে এবং ডাউনস্ট্রিম ডেটাবেসকে অতিরিক্ত চাপ থেকে সুরক্ষিত রাখে।',
      },
    },
    {
      id: 'log-shp-ex-2',
      kind: 'mcq',
      topic: 'shipping-sim-metrics',
      question: {
        en: 'In our code walkthrough, what were the 2 retry delays (and their total delay), and what was the total cluster ingest capacity across the 8 Kafka partitions?',
        bn: 'আমাদের কোড আলোচনায় ২টি রিট্রাই বিলম্ব (এবং তাদের মোট সময়) কত ছিল এবং ৮টি কাফকা পার্টিশনে মোট ক্লাস্টার ধারণক্ষমতা কত ছিল?',
      },
      options: [
        { en: 'Retry delays = 250ms and 500ms (total 750ms across 2 retries); cluster capacity = 200MB/s across 8 partitions', bn: 'রিট্রাই বিলম্ব = ২৫০ms ও ৫০০ms (২টি রিট্রাইয়ে মোট ৭৫০ms); ৮টি পার্টিশনে ক্লাস্টার ক্ষমতা = ২০০MB/s' },
        { en: 'Retry delays = 100ms and 100ms (total 200ms across 2 retries); cluster capacity = 50MB/s across 8 partitions', bn: 'রিট্রাই বিলম্ব = ১০০ms ও ১০০ms (২টি রিট্রাইয়ে মোট ২০০ms); ৮টি পার্টিশনে ক্লাস্টার ক্ষমতা = ৫০MB/s' },
        { en: 'Retry delays = 50ms and 50ms (total 100ms across 2 retries); cluster capacity = 10MB/s across 1 partition', bn: 'রিট্রাই বিলম্ব = ৫০ms ও ৫০ms (২টি রিট্রাইয়ে মোট ১০০ms); ১টি পার্টিশনে ক্লাস্টার ক্ষমতা = ১০MB/s' },
        { en: 'Retry delays = 0ms and 0ms (total 0ms across 0 retries); cluster capacity = 0MB/s across 0 partitions', bn: 'রিট্রাই বিলম্ব = ০ms ও ০ms (০টি রিট্রাইয়ে মোট ০ms); ০টি পার্টিশনে ক্লাস্টার ক্ষমতা = ০MB/s' },
      ],
      answer: 0,
      hint: { en: '250 + 500 = 750ms; 8 * 25 = 200MB/s.', bn: '২৫০ + ৫০০ = ৭৫০ms; ৮ * ২৫ = ২০০MB/s।' },
      explanation: {
        en: 'The simulation calculated retry delays of 250ms and 500ms (750ms across 2 retries) and 8 partitions * 25MB/s = 200MB/s capacity.',
        bn: 'সিমুলেশনটিতে ২৫০ms ও ৫০০ms রিট্রাই (২টি রিট্রাইয়ে ৭৫০ms) এবং ৮টি পার্টিশনে ২৫MB/s করে মোট ২০০MB/s ক্ষমতা হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'log-shp-ex-3',
      kind: 'mcq',
      topic: 'jittered-backoff-advantage',
      question: {
        en: 'Why is adding random jitter to exponential backoff algorithms mandatory in large-scale log shipping networks?',
        bn: 'বৃহৎ পরিসরের লগ শিপিং নেটওয়ার্কে এক্সপোনেনশিয়াল ব্যাকঅফের সাথে র্যান্ডম জিটার যুক্ত করা কেন বাধ্যতামূলক?',
      },
      options: [
        {
          en: 'It desynchronizes retry attempts across thousands of client nodes, preventing thundering herd request spikes from immediately crashing a recovering server',
          bn: 'এটি হাজার হাজার নোডের রিট্রাই করার সময়কে ছড়িয়ে দেয়, ফলে সুস্থ হয়ে ওঠা সার্ভারের ওপর একযোগে ট্রাফিকের ধাক্কা এসে পুনরায় ক্র্যাশ করে না',
        },
        {
          en: 'It doubles the physical battery life of client computers',
          bn: 'এটি ক্লায়েন্ট কম্পিউটারের ব্যাটারি ব্যাকআপ দ্বিগুণ করে',
        },
        {
          en: 'It automatically translates logs into different languages',
          bn: 'এটি স্বয়ংক্রিয়ভাবে লগগুলোকে বিভিন্ন ভাষায় অনুবাদ করে',
        },
        {
          en: 'It changes the color of terminal text automatically',
          bn: 'এটি টার্মিনাল টেক্সটের রঙ নিজে থেকে পরিবর্তন করে',
        },
      ],
      answer: 0,
      hint: { en: 'Jitter eliminates synchronized retry spikes.', bn: 'জিটার সমান্তরাল রিট্রাইয়ের তীব্র ভিড় দূর করে।' },
      explanation: {
        en: 'Without jitter, all failed clients retry simultaneously at identical intervals, overloading recovering servers in waves.',
        bn: 'জিটার না থাকলে সমস্ত ব্যর্থ ক্লায়েন্ট একই সময়ে রিট্রাই করে, যা নতুন করে চালু হওয়া সার্ভারকে আবার বিকল করে দেয়।',
      },
    },
    {
      id: 'log-shp-ex-4',
      kind: 'predict',
      topic: 'otlp-acronym-expansion',
      question: {
        en: 'What 4-letter acronym denotes the official OpenTelemetry transport protocol (e.g. OTLP)?',
        bn: 'কোন ৪-অক্ষরের সংক্ষিপ্ত রূপটি অফিশিয়াল ওপেনটেলিমেট্রি ট্রান্সপোর্ট প্রোটোকলকে নির্দেশ করে (যেমন OTLP)?',
      },
      answer: 'OTLP',
      accept: ['OTLP', 'otlp'],
      hint: { en: 'OpenTelemetry Protocol = O-T-L-P.', bn: 'OpenTelemetry Protocol = O-T-L-P।' },
      explanation: {
        en: 'OTLP stands for OpenTelemetry Protocol, the standardized transport format for metrics, logs, and traces.',
        bn: 'OTLP হলো OpenTelemetry Protocol, যা মেট্রিক্স, লগ ও ট্রেস পাঠানোর আন্তর্জাতিক স্বীকৃত মান।',
      },
    },
  ],
  quiz: {
    id: 'ships-ship-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'log-shp-q1',
        kind: 'mcq',
        topic: 'udp-vs-tcp-syslog',
        question: {
          en: 'What dangerous vulnerability occurs when using traditional UDP Syslog (port 514) under heavy production traffic conditions?',
          bn: 'প্রোডাকশনে অতিরিক্ত ট্রাফিকের সময় সাধারণ UDP Syslog (পোর্ট ৫১৪) ব্যবহার করলে কী মারাত্মক ঝুঁকি তৈরি হয়?',
        },
        options: [
          {
            en: 'UDP is connectionless with no delivery acknowledgement, so network switches silently drop log packets during congestion without notifying the sender',
            bn: 'UDP কানেকশনহীন হওয়ায় কোনো ডেলিভারি নিশ্চয়তা থাকে না, ফলে নেটওয়ার্ক জ্যাম হলে রাউটার কোনো বার্তা না দিয়েই প্যাকেটগুলো ফেলে দেয়',
          },
          {
            en: 'UDP Syslog causes the server motherboard to catch fire',
            bn: 'UDP Syslog সার্ভারের মাদারবোর্ডে আগুন ধরিয়ে দেয়',
          },
          {
            en: 'The operating system kernel will be uninstalled automatically',
            bn: 'অপারেটিং সিস্টেম কার্নেল নিজে থেকে মুছে যাবে',
          },
          {
            en: 'All network cables will be physically locked',
            bn: 'সমস্ত নেটওয়ার্ক ক্যাবল শারীরিকভাবে লক হয়ে যাবে',
          },
        ],
        answer: 0,
        hint: { en: 'UDP drops packets silently during congestion.', bn: 'ইউডিপি জ্যামের সময় কোনো নোটিশ ছাড়াই প্যাকেট বাতিল করে।' },
        explanation: {
          en: 'UDP lacks flow control and delivery guarantees; network bottlenecks cause silent telemetry packet loss.',
          bn: 'ইউডিপিতে কোনো ফ্লো কন্ট্রোল বা প্রাপ্তিস্বীকার না থাকায় নেটওয়ার্ক ভিড়ে অজান্তেই মূল্যবান লগ হারিয়ে যায়।',
        },
      },
      {
        id: 'log-shp-q2',
        kind: 'mcq',
        topic: 'total-delay-sum-check',
        question: {
          en: 'In our code walkthrough, what was the total retry delay computed from retry1Delay (250ms) plus retry2Delay (500ms)?',
          bn: 'আমাদের কোড আলোচনায় retry1Delay (২৫০ms) এবং retry2Delay (৫০০ms) যোগ করে মোট কত বিলম্ব হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '750ms across 2 retries', bn: '২টি রিট্রাইয়ে ৭৫০ms' },
          { en: '1000ms across 2 retries', bn: '২টি রিট্রাইয়ে ১০০০ms' },
          { en: '100ms across 1 retry', bn: '১টি রিট্রাইয়ে ১০০ms' },
          { en: '0ms across 0 retries', bn: '০টি রিট্রাইয়ে ০ms' },
        ],
        answer: 0,
        hint: { en: '250 + 500 = 750.', bn: '২৫০ + ৫০০ = ৭৫০।' },
        explanation: {
          en: 'The simulation resolved retry delays of 250ms and 500ms, summing to 750ms total delay across 2 retries.',
          bn: 'সিমুলেশনটি ২৫০ms ও ৫০০ms রিট্রাই যোগ করে ২টি রিট্রাইয়ে মোট ৭৫০ms বিলম্ব নির্ধারণ করেছিল।',
        },
      },
      {
        id: 'log-shp-q3',
        kind: 'mcq',
        topic: 'snappy-vs-gzip-compression',
        question: {
          en: 'Why do high-throughput log shipping pipelines prefer Snappy or LZ4 compression over gzip during network transport?',
          bn: 'উচ্চ-গতির লগ শিপিং পাইপলাইনে নেটওয়ার্ক ট্রান্সপোর্টের সময় জিজিপের চেয়ে স্ন্যাপি (Snappy) বা LZ4 কম্প্রেশন কেন বেশি পছন্দ করা হয়?',
        },
        options: [
          {
            en: 'Snappy and LZ4 achieve 4x faster compression throughput with minimal CPU overhead, preventing high log volumes from starving application CPU cycles',
            bn: 'স্ন্যাপি ও LZ4 অত্যন্ত কম সিপিইউ খরচে ৪ গুণ দ্রুত গতিতে ডেটা সংকুচিত করে, ফলে লগের কারণে অ্যাপ্লিকেশনের সিপিইউ সংকট তৈরি হয় না',
          },
          {
            en: 'gzip was completely banned by internet standards in 2021',
            bn: '২০২১ সালে ইন্টারনেট স্ট্যান্ডার্ড থেকে জিজিপ সম্পূর্ণ নিষিদ্ধ করা হয়েছে',
          },
          {
            en: 'Snappy converts all log messages into pure numbers',
            bn: 'স্ন্যাপি সমস্ত লগ মেসেজকে সংখ্যায় রূপান্তর করে',
          },
          {
            en: 'gzip increases the file size of text logs by 500%',
            bn: 'জিজিপ টেক্সট লগের আকার ৫০০% বাড়িয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Snappy prioritizes speed and low CPU usage.', bn: 'স্ন্যাপি দ্রুত গতি ও কম সিপিইউ খরচকে অগ্রাধিকার দেয়।' },
        explanation: {
          en: 'Snappy provides blazing fast compression speed at reasonable compression ratios, saving CPU in high-velocity pipelines.',
          bn: 'স্ন্যাপি দ্রুততম গতিতে কম্প্রেশন সম্পন্ন করে, যা উচ্চ-গতির সিস্টেমে সিপিইউ খরচ উল্লেখযোগ্যভাবে কমায়।',
        },
      },
      {
        id: 'log-shp-q4',
        kind: 'predict',
        topic: 'mutual-tls-abbreviation',
        question: {
          en: 'What security abbreviation describes mutual certificate authentication between both log shipper client and ingestion server (e.g. mTLS)?',
          bn: 'লগ শিপার ক্লায়েন্ট এবং ইনজেশন সার্ভার উভয়ের পারস্পরিক সার্টিফিকেট প্রমাণের নিরাপত্তা ব্যবস্থাকে সংক্ষেপে কী বলা হয় (যেমন mTLS)?',
        },
        answer: 'mTLS',
        accept: ['mTLS', 'mtls', 'Mutual TLS'],
        hint: { en: 'Mutual TLS = m-T-L-S.', bn: 'Mutual TLS = m-T-L-S।' },
        explanation: {
          en: 'mTLS (mutual TLS) authenticates both the client shipper and the receiving server, encrypting all log transport traffic.',
          bn: 'mTLS ক্লায়েন্ট শিপার ও সার্ভার উভয়কে যাচাই করে এবং সমস্ত লগ পরিবহনকে সম্পূর্ণ এনক্রিপ্ট করে রাখে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'searches-and-the-search',
    title: { en: 'Search and Query Engines', bn: 'অনুসন্ধান ও কুয়েরি ইঞ্জিন' },
  },
};
