import type { Hub } from '../../lib/types';
import { LinesAndTheLineLesson } from './lessons/lines-and-the-line';
import { LevelsAndTheLevelLesson } from './lessons/levels-and-the-level';
import { FormatsAndTheFormatLesson } from './lessons/formats-and-the-format';
import { AggregatesAndTheAggregateLesson } from './lessons/aggregates-and-the-aggregate';
import { ShipsAndTheShipLesson } from './lessons/ships-and-the-ship';
import { SearchesAndTheSearchLesson } from './lessons/searches-and-the-search';
import { RetainsAndTheRetainLesson } from './lessons/retains-and-the-retain';
import { TheLoggingReleaseLesson } from './lessons/the-logging-release';

export const loggingHub: Hub = {
  slug: 'logging',
  name: 'Logging',
  icon: '🧾',
  tagline: {
    en: 'Master enterprise logging from structured JSON events and severity levels to high-throughput log shipping, Grafana Loki indexing, S3 cold tiering, and distributed correlation tracking.',
    bn: 'স্ট্রাকচার্ড জেসন ইভেন্ট ও সেভিয়ারিটি লেভেল থেকে শুরু করে উচ্চ-গতির লগ শিপিং, গ্রাফানা লোকি ইনডেক্সিং, এস৩ কোল্ড টিয়ারিং এবং ডিস্ট্রিবিউটেড কোরিলেশন ট্র্যাকিং পর্যন্ত এন্টারপ্রাইজ লগিং আয়ত্ত করুন।',
  },
  intro: {
    en: 'Logging is the foundational pillar of production software observability, security auditing, and incident diagnosis. In distributed cloud environments, unstructured plain text print statements fail to scale across hundreds of microservices. Modern engineering organizations demand structured JSON telemetry tagged with microsecond-precision UTC timestamps, standardized severity levels (DEBUG through FATAL), distributed correlation IDs, and automated redaction of sensitive credentials. This curriculum covers end-to-end logging engineering: from instrumenting application loggers to deploying lightweight collectors (Vector, Fluent Bit), managing backpressure across network shippers, querying terabytes of logs with LogQL and Elasticsearch, and enforcing regulatory retention compliance.',
    bn: 'লগিং হলো প্রোডাকশন সফটওয়্যারের অবজার্ভেবিলিটি, সিকিউরিটি অডিটিং এবং ইনসিডেন্ট ডায়াগনসিসের প্রধান ভিত্তি। ডিস্ট্রিবিউটেড ক্লাউড আর্কিটেকচারে সাধারণ আনস্ট্রাকচার্ড টেক্সট প্রিন্ট স্টেটমেন্ট শত শত মাইক্রোসার্ভিসের ক্ষেত্রে অকার্যকর হয়ে পড়ে। আধুনিক ইঞ্জিনিয়ারিং সিস্টেমে মাইক্রোসেকেন্ড-নির্ভুল ইউটিসি টাইমস্ট্যাম্প, প্রমিত সেভিয়ারিটি লেভেল (DEBUG থেকে FATAL), ডিস্ট্রিবিউটেড কোরিলেশন আইডি এবং পাসওয়ার্ড বা গোপন তথ্যের স্বয়ংক্রিয় ফিল্টারিংসহ স্ট্রাকচার্ড জেসন লগ প্রয়োজন হয়। এই পাঠ্যক্রমটি শুরু থেকে শেষ পর্যন্ত পূর্ণাঙ্গ লগিং আর্কিটেকচার শেখায়: অ্যাপ্লিকেশন লগার তৈরি থেকে শুরু করে ভেক্টর বা ফ্লুয়েন্ট বিটের মতো কালেক্টর স্থাপন, নেটওয়ার্ক শিপারের ব্যাকপ্রেশার ব্যবস্থাপনা, LogQL ও ইলাস্টিকসার্চ দিয়ে টেরাবাইট লগ অনুসন্ধান এবং ডেটা রিটেনশন নীতি প্রয়োগ।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Fundamentals of Structured Telemetry', bn: 'ধাপ ১ — স্ট্রাকচার্ড টেলিমেট্রির মূল ভিত্তি' },
      items: [
        { en: 'Lines, schemas, and timestamps: structured events vs unstructured strings (Lesson 1)', bn: 'লাইন, স্কিমা ও টাইমস্ট্যাম্প: স্ট্রাকচার্ড ইভেন্ট বনাম আনস্ট্রাকচার্ড টেক্সট (পাঠ ১)' },
        { en: 'Severity levels and thresholds: DEBUG, INFO, WARN, ERROR, and dynamic tuning (Lesson 2)', bn: 'সেভিয়ারিটি লেভেল ও থ্রেশহোল্ড: DEBUG, INFO, WARN, ERROR ও ডায়নামিক টিউনিং (পাঠ ২)' },
        { en: 'Serializers and standards: JSON, Logfmt, and Elastic Common Schema (Lesson 3)', bn: 'সিরিয়ালাইজার ও ফরম্যাট: JSON, Logfmt ও ইলাস্টিক কমন স্কিমা (পাঠ ৩)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Ingestion, Shipping, and Indexing', bn: 'ধাপ ২ — ইনজেশন, শিপিং ও ইনডেক্সিং' },
      items: [
        { en: 'Aggregation and collector sidecars: Vector, Fluent Bit, and memory buffering (Lesson 4)', bn: 'অ্যাগ্রিগেশন ও কালেক্টর সাইডকার: Vector, Fluent Bit ও মেমরি বাফারিং (পাঠ ৪)' },
        { en: 'Network shipping and resilience: Syslog, OTLP, Kafka buffers, and backpressure (Lesson 5)', bn: 'নেটওয়ার্ক শিপিং ও টেকসই ব্যবস্থা: Syslog, OTLP, কাফকা বাফার ও ব্যাকপ্রেশার (পাঠ ৫)' },
        { en: 'Search and query architectures: Elasticsearch inverted indexes and Grafana Loki (Lesson 6)', bn: 'অনুসন্ধান ও কুয়েরি আর্কিটেকচার: ইলাস্টিকসার্চ ইনভার্টেড ইনডেক্স ও গ্রাফানা লোকি (পাঠ ৬)' },
      ],
    },
    {
      title: { en: 'Stage 3 — Retention, Compliance, and Production Operations', bn: 'ধাপ ৩ — রিটেনশন, কমপ্লায়েন্স ও প্রোডাকশন অপারেশন' },
      items: [
        { en: 'Lifecycle, tiering, and compliance: rotation, S3 Glacier archiving, and GDPR (Lesson 7)', bn: 'লাইফসাইকেল, টিয়ারিং ও কমপ্লায়েন্স: রোটেশন, এস৩ গ্লেসিয়ার আর্কাইভিং ও জিডিপিআর (পাঠ ৭)' },
        { en: 'Production release: distributed correlation IDs, tracing bridges, and alerting (Lesson 8)', bn: 'প্রোডাকশন রিলিজ: ডিস্ট্রিবিউটেড কোরিলেশন আইডি, ট্রেসিং ব্রিজ ও অ্যালার্টিং (পাঠ ৮)' },
      ],
    },
  ],
  lessons: [
    LinesAndTheLineLesson,
    LevelsAndTheLevelLesson,
    FormatsAndTheFormatLesson,
    AggregatesAndTheAggregateLesson,
    ShipsAndTheShipLesson,
    SearchesAndTheSearchLesson,
    RetainsAndTheRetainLesson,
    TheLoggingReleaseLesson,
  ],
  references: [],
  projects: [
    {
      title: { en: 'Project 1 — High-Throughput Structured Logger with Correlation Context', bn: 'প্রজেক্ট ১ — কোরিলেশন কনটেক্সটযুক্ত উচ্চ-গতির স্ট্রাকচার্ড লগার' },
      brief: {
        en: 'Build a production-grade asynchronous structured JSON logging library with zero dependencies. Support ISO 8601 UTC timestamps, custom key-value metadata, request correlation ID propagation via AsyncLocalStorage, and automatic regex redaction of credit cards and API keys. Deliverable: a battle-tested logging module with complete unit tests and microbenchmarks.',
        bn: 'কোনো বাড়তি লাইব্রেরি ছাড়া একটি প্রোডাকশন-গ্রেড অ্যাসিঙ্ক্রোনাস স্ট্রাকচার্ড জেসন লগিং লাইব্রেরি তৈরি করুন। ISO 8601 ইউটিসি টাইমস্ট্যাম্প, কাস্টম কি-ভ্যালু মেটাডেটা, AsyncLocalStorage দিয়ে রিকোয়েস্ট কোরিলেশন আইডি পরিচালনা এবং ক্রেডিট কার্ড ও এপিআই কি ফিল্টার করার ব্যবস্থা যুক্ত করুন। আউটপুট: পূর্ণাঙ্গ টেস্ট এবং বেঞ্চমার্কযুক্ত একটি নির্ভরযোগ্য লগিং মডিউল।',
      },
    },
    {
      title: { en: 'Project 2 — Centralized Log Pipeline with Vector and Grafana Loki', bn: 'প্রজেক্ট ২ — ভেক্টর ও গ্রাফানা লোকি দিয়ে কেন্দ্রীয় লগ পাইপলাইন' },
      brief: {
        en: 'Deploy a centralized logging infrastructure on Kubernetes: run Vector as a DaemonSet to collect container stdout logs, parse JSON payloads, enrich records with pod metadata, and ship compressed chunks to Grafana Loki with S3 cold tiering. Deliverable: complete declarative Vector and Loki configurations with Grafana dashboard queries.',
        bn: 'কুবারনেটিসে একটি কেন্দ্রীয় লগিং পাইপলাইন স্থাপন করুন: কন্টেইনার লগ সংগ্রহের জন্য Vector কে DaemonSet হিসেবে চালান, জেসন পেলোড পার্স করুন, পড মেটাডেটা যুক্ত করুন এবং এস৩ কোল্ড টিয়ারিংসহ গ্রাফানা লোকিতে সংকুচিত লগ পাঠান। আউটপুট: গ্রাফানা ড্যাশবোর্ড কুয়েরিসহ সম্পূর্ণ ডিক্লারেটিভ কনফিগারেশন ফাইল।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always log in structured JSON: key-value format enables automated indexing, search filtering, and metric extraction without brittle regexes.',
      bn: 'সর্বদা স্ট্রাকচার্ড জেসনে লগ লিখুন: কি-ভ্যালু ফরম্যাট ভঙ্গুর রেজেক্স ছাড়া স্বয়ংক্রিয় ইনডেক্সিং, ফিল্টারিং ও মেট্রিক সংগ্রহের সুযোগ দেয়।',
    },
    {
      en: 'Inject correlation IDs into every log line: trace requests seamlessly as they traverse multiple backend microservices and databases.',
      bn: 'প্রতিটি লগ লাইনে কোরিলেশন আইডি যুক্ত করুন: মাইক্রোসার্ভিস ও ডেটাবেস জুড়ে রিকোয়েস্টের যাত্রা নিরবচ্ছিন্নভাবে ট্র্যাক করুন।',
    },
    {
      en: 'Never log secrets, authorization tokens, or customer PII: enforce automated redaction masks at the logger library boundary.',
      bn: 'কখনো গোপন পাসওয়ার্ড, টোকেন বা ব্যবহারকারীর ব্যক্তিগত তথ্য লগ করবেন না: লগার লাইব্রেরির প্রবেশমুখেই স্বয়ংক্রিয় মাস্কিং প্রয়োগ করুন।',
    },
    {
      en: 'Enforce tiered retention policies: store hot indexed logs for 7-14 days and transition compressed archives to S3 Glacier for audit compliance.',
      bn: 'স্তরভিত্তিক রিটেনশন নীতি প্রয়োগ করুন: দ্রুত খোঁজার জন্য ৭-১৪ দিন হট স্টোরেজে রাখুন এবং কমপ্লায়েন্সের জন্য পুরনো লগ এস৩ গ্লেসিয়ারে পাঠান।',
    },
  ],
  interview: [
    {
      q: {
        en: 'Why is structured logging in JSON format preferred over plain text logging in production cloud architectures?',
        bn: 'প্রোডাকশন ক্লাউড আর্কিটেকচারে সাধারণ প্লেইন টেক্সট লগের চেয়ে স্ট্রাকচার্ড জেসন ফরম্যাট কেন বেশি পছন্দ করা হয়?',
      },
      a: {
        en: 'Plain text logs (e.g. "User 123 logged in from 10.0.0.1") require brittle, slow, CPU-intensive regular expressions to parse during ingestion. Any minor code change in wording breaks downstream dashboards and alert filters. In contrast, structured JSON logs (e.g. {"event":"user_login","user_id":123,"ip":"10.0.0.1"}) treat telemetry as first-class queryable data. Centralized engines like Elasticsearch, OpenSearch, and ClickHouse ingest JSON directly into schema fields, enabling instantaneous range queries, aggregations, and metric dashboards with zero ingestion parsing overhead.',
        bn: 'সাধারণ টেক্সট লগ (যেমন "User 123 logged in from 10.0.0.1") বিশ্লেষণ করতে ইনজেশনের সময় জটিল ও ধীরগতির রেজেক্স পার্সার প্রয়োজন হয়। ডেভেলপারের কথার সামান্য পরিবর্তনেই ডাউনস্ট্রিম ড্যাশবোর্ড বা অ্যালার্ট নষ্ট হয়ে যেতে পারে। অন্যদিকে স্ট্রাকচার্ড জেসন লগ (যেমন {"event":"user_login","user_id":123,"ip":"10.0.0.1"}) লগগুলোকে কুয়েরিযোগ্য ডেটা হিসেবে সংরক্ষণ করে। ইলাস্টিকসার্চ, ওপেনসার্চ বা ক্লিকহাউসের মতো আধুনিক ইঞ্জিনগুলো সরাসরি জেসন ফিল্ড ইনডেক্স করে, ফলে কোনো বাড়তি পার্সিং ছাড়াই তাৎক্ষণিক ফিল্টারিং, গ্রুপিং এবং ড্যাশবোর্ড তৈরি করা সম্ভব হয়।',
      },
    },
    {
      q: {
        en: 'What is a correlation ID (or trace ID), and how does it solve distributed debugging across microservices?',
        bn: 'কোরিলেশন আইডি (বা ট্রেস আইডি) কী এবং এটি কীভাবে মাইক্রোসার্ভিস জুড়ে ডিস্ট্রিবিউটেড ডিবাগিং সমস্যার সমাধান করে?',
      },
      a: {
        en: 'A correlation ID is a globally unique identifier (such as a UUIDv4) generated at the system entry boundary (API gateway or frontend). The gateway injects it into HTTP request headers (e.g. X-Correlation-ID) and each downstream microservice propagates it across network calls and message queues. Every service includes this correlation ID in every structured log line it writes. During an incident, an engineer can query a single correlation ID in Grafana Loki or Elasticsearch to retrieve the complete chronological execution narrative across all 50 microservices involved in serving that single request.',
        bn: 'কোরিলেশন আইডি হলো সিস্টেমের প্রবেশমুখে (এপিআই গেটওয়ে বা ফ্রন্টএন্ড) তৈরি হওয়া একটি অনন্য শনাক্তকারী (যেমন UUIDv4)। গেটওয়ে এটিকে এইচটিটিপি রিকোয়েস্ট হেডারে (যেমন X-Correlation-ID) যুক্ত করে এবং পরবর্তী প্রতিটি মাইক্রোসার্ভিস নেটওয়ার্ক কল ও মেসেজ কিউয়ের মাধ্যমে তা প্রবাহিত করে। প্রতিটি সার্ভিস তার প্রতিটি লগ লাইনে এই কোরিলেশন আইডিটি লিখে রাখে। সিস্টেমে কোনো সমস্যা দেখা দিলে একজন ইঞ্জিনিয়ার কেবল একটিমাত্র কোরিলেশন আইডি দিয়ে সার্চ করলেই ওই একটি রিকোয়েস্ট পরিবেশনকারী সমস্ত সার্ভিসের টাইমলাইন একসাথে দেখতে পান।',
      },
    },
    {
      q: {
        en: 'How do log levels (DEBUG, INFO, WARN, ERROR, FATAL) guide production operations, and why is dynamic log leveling crucial?',
        bn: 'লগ লেভেলগুলো (DEBUG, INFO, WARN, ERROR, FATAL) কীভাবে প্রোডাকশন অপারেশন পরিচালনা করে এবং ডায়নামিক লগ লেভেলিং কেন জরুরি?',
      },
      a: {
        en: 'Log levels classify the operational significance of events: DEBUG captures verbose diagnostic telemetry for development; INFO records routine business lifecycle events; WARN flags unexpected recoverable conditions; ERROR marks failed operations requiring attention; and FATAL denotes catastrophic crashes aborting the process. Running DEBUG level in production floods network collectors and inflates storage costs by gigabytes per hour. Dynamic log leveling allows operators to change the active threshold from INFO to DEBUG at runtime via HTTP admin endpoints or feature flags for a specific tenant or pod without restarting the process.',
        bn: 'লগ লেভেল ইভেন্টের গুরুত্ব শ্রেণিবিভাগ করে: DEBUG ডেভেলপমেন্টের জন্য বিস্তারিত তথ্য রাখে; INFO স্বাভাবিক ব্যবসায়িক কার্যক্রম রেকর্ড করে; WARN অপ্রত্যাশিত কিন্তু স্বয়ংক্রিয়ভাবে ঠিক হওয়া সমস্যা নির্দেশ করে; ERROR ব্যর্থ কাজ চিহ্নিত করে যা সমাধান করা প্রয়োজন; এবং FATAL প্রসেস বন্ধ করে দেওয়া মারাত্মক ক্র্যাশ বোঝায়। প্রোডাকশনে সর্বদা DEBUG চালালে প্রচুর অপ্রয়োজনীয় লগ তৈরি হয়ে স্টোরেজ খরচ বহুগুণ বাড়িয়ে দেয়। ডায়নামিক লগ লেভেলিংয়ের মাধ্যমে সার্ভিস রিস্টার্ট না করেই এডমিন এপিআই বা কনফিগারেশন ফ্ল্যাগের সাহায্যে সাময়িকভাবে লেভেল INFO থেকে DEBUG এ পরিবর্তন করা যায়।',
      },
    },
    {
      q: {
        en: 'What is the difference between push and pull log collection architectures, and how do collectors prevent backpressure from crashing apps?',
        bn: 'পুশ এবং পুল লগ কালেকশন আর্কিটেকচারের মধ্যে পার্থক্য কী এবং কালেক্টর কীভাবে ব্যাকপ্রেশার থেকে অ্যাপ্লিকেশনকে ক্র্যাশ হওয়া থেকে রক্ষা করে?',
      },
      a: {
        en: 'In push architectures, applications stream logs directly to remote endpoints over TCP, UDP, or HTTP. If the central log aggregator slows down, network backpressure can block application threads or exhaust memory buffers. In modern pull/sidecar architectures, applications write logs asynchronously to local stdout or disk files; a lightweight local daemon (Vector or Fluent Bit) tails these files, buffers events in local disk-backed queues, and ships compressed batches upstream. If the central aggregator suffers an outage, the disk buffer absorbs spikes without blocking the core application or dropping logs.',
        bn: 'পুশ আর্কিটেকচারে অ্যাপ্লিকেশন সরাসরি রিমোট সার্ভারে নেটওয়ার্কের মাধ্যমে লগ পাঠায়। কেন্দ্রীয় লগার ধীরগতির হলে নেটওয়ার্ক ব্যাকপ্রেশার মূল অ্যাপ্লিকেশনের থ্রেড আটকে দিতে পারে বা মেমরি শেষ করে দিতে পারে। অন্যদিকে আধুনিক সাইডকার বা পুল মডেলে অ্যাপ্লিকেশন লোকাল stdout বা ফাইলে দ্রুত লগ লেখে; ভেক্টর বা ফ্লুয়েন্ট বিটের মতো হালকা এজেন্ট ফাইলগুলো রিড করে লোকাল ডিস্ক বাফারে জমা রাখে এবং ব্যাচ আকারে পাঠায়। কেন্দ্রীয় সার্ভার ডাউন হলেও এই ডিস্ক বাফার লগ ধারণ করে রাখে, ফলে মূল অ্যাপ্লিকেশনে কোনো বিঘ্ন ঘটে না।',
      },
    },
  ],
  realWorld: [
    {
      company: 'Netflix',
      description: {
        en: 'Ingests petabytes of structured telemetry daily using Vector and Kafka pipelines to power automated failover and chaos experiments across AWS regions.',
        bn: 'এডব্লিউএস রিজিয়ন জুড়ে স্বয়ংক্রিয় ফেইলওভার ও কেওস ইঞ্জিনিয়ারিং চালাতে ভেক্টর ও কাফকা পাইপলাইনের মাধ্যমে প্রতিদিন পেটাবেট স্ট্রাকচার্ড লগ প্রসেস করে।',
      },
    },
    {
      company: 'Uber',
      description: {
        en: 'Tracks billions of real-time ride transactions, payment authorizations, and GPS telemetry events using distributed correlation IDs across microservices.',
        bn: 'মাইক্রোসার্ভিস জুড়ে ডিস্ট্রিবিউটেড কোরিলেশন আইডি ব্যবহার করে প্রতিদিন শত শত কোটি রাইড লেনদেন, পেমেন্ট ও জিপিএস ইভেন্ট নিরাপদে ট্র্যাক করে।',
      },
    },
    {
      company: 'Datadog & Grafana Labs',
      description: {
        en: 'Provide enterprise cloud observability platforms that index, compress, and visualize trillions of operational log records with microsecond latency.',
        bn: 'এন্টারপ্রাইজ ক্লাউড প্ল্যাটফর্ম সরবরাহ করে যা মাইক্রোসেকেন্ড ল্যাটেন্সিতে ট্রিলিয়ন ট্রিলিয়ন অপারেশনাল লগ ইনডেক্স, কম্প্রেস ও ভিজ্যুয়ালাইজ করে।',
      },
    },
  ],
};
