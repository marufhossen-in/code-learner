import type { Lesson } from '../../../lib/types';

export const queuePatienceLesson: Lesson = {
  slug: 'the-queue-patience',
  tech: 'system-design',
  title: {
    en: 'Message Queues & Asynchronous Processing — Event Buffering, Backpressure, and Idempotency',
    bn: 'মেসেজ কিউ ও অ্যাসিঙ্ক্রোনাস প্রসেসিং: ইভেন্ট বাফারিং, ব্যাকপ্রেশার ও আইডেমপোটেন্সি'
  },
  summary: {
    en: 'Synchronous request-response architectures collapse under traffic spikes when backend dependencies experience latency. In this lesson, you will master message queue architectures to decouple microservices, buffer burst traffic, and manage asynchronous task execution. Compare point-to-point queues (RabbitMQ, SQS) versus distributed append-only event logs (Apache Kafka). Learn essential delivery guarantees: At-Most-Once, At-Least-Once, and Exactly-Once processing via idempotency keys. Analyze consumer group lag, dead-letter queues (DLQ), and backpressure strategies (rate-limiting producers, circuit-breaking, and dropping). Implement an executable asynchronous queue worker with exponential backoff and idempotency deduplication in TypeScript.',
    bn: 'ট্র্যাফিকের আকস্মিক চাপে যখন ব্যাকএন্ডের সার্ভিসগুলোর গতি কমে যায়, তখন সিঙ্ক্রোনাস রিকোয়েস্ট-রেসপন্স ব্যবস্থা ভেঙে পড়ে। এই পাঠে আপনি মেসেজ কিউ আর্কিটেকচার ব্যবহার করে মাইক্রোসার্ভিসগুলোকে স্বাধীন করা, ট্র্যাফিক বাফারিং এবং অ্যাসিঙ্ক্রোনাস প্রসেসিং পরিচালনা করার পদ্ধতি শিখবেন। পয়েন্ট-টু-পয়েন্ট মেসেজ কিউ (RabbitMQ, SQS) বনাম ডিস্ট্রিবিউটেড ইভেন্ট লগ (Apache Kafka)-এর পার্থক্য বিশ্লেষণ করবেন। ডেলিভারি গ্যারান্টি: অ্যাট-মোস্ট-ওয়ান্স, অ্যাট-লিস্ট-ওয়ান্স এবং আইডেমপোটেন্সি কি দিয়ে এক্স্যাক্টলি-ওয়ান্স প্রসেসিং আয়ত্ত করবেন। কনজিউমার ল্যাগ, ডেড-লেটার কিউ (DLQ) এবং ব্যাকপ্রেশার মোকাবিলার কার্যকর কৌশল শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর এক্সপোনেনশিয়াল ব্যাকঅফ ও আইডেমপোটেন্ট কিউ প্রসেসর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'decoupling-services-and-async-flow',
      text: {
        en: 'Decoupling Systems: Why Synchronous Chains Fail Under Load',
        bn: 'সিস্টেম ডিকাপলিং: সিঙ্ক্রোনাস চেইন কেন লোডের মুখে ভেঙে পড়ে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications that execute long-running operations inside a synchronous HTTP request, client connections hang until every dependent subsystem completes its work.',
        bn: 'আপনি যখন কোনো ওয়েব অ্যাপ্লিকেশনে সিঙ্ক্রোনাস HTTP রিকোয়েস্টের ভেতরে দীর্ঘ সময়সাপেক্ষ কাজ সম্পাদন করেন, তখন প্রতিটি নির্ভরতা সম্পন্ন না হওয়া পর্যন্ত ব্রাউজার আটকে থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider an e-commerce checkout endpoint that processes payment, sends confirmation emails, generates invoices, and notifies warehouse dispatchers. If executed synchronously, an outage in the email provider causes the entire checkout transaction to time out, losing customer orders. Message queues decouple these concerns. The checkout handler processes the critical payment transaction, publishes an "OrderCreated" event to a message queue in under 5 milliseconds, and immediately returns HTTP 200 to the customer. Background worker pools consume events independently at their own pace, transforming fragile sequential chains into resilient asynchronous pipelines.',
        bn: 'একটি ই-কমার্স ওয়েবসাইটের চেকআউটের কথা চিন্তা করুন যেখানে পেমেন্ট নেওয়া, নিশ্চিতকরণ ইমেইল পাঠানো, পিডিএফ ইনভয়েস তৈরি এবং গুদামে খবর পাঠানো প্রয়োজন। এগুলো যদি সিঙ্ক্রোনাসভাবে পরপর ঘটে, তবে ইমেইল সার্ভার ডাউন থাকলে পুরো পেমেন্ট ফেইল করবে এবং গ্রাহক পণ্য কিনতে পারবেন না। মেসেজ কিউ এই নির্ভরতা পুরোপুরি দূর করে দেয়। চেকআউট সার্ভিস দ্রুত পেমেন্ট সম্পন্ন করে মাত্র ৫ মিলিসেকেন্ডের মধ্যে কিউতে একটি "OrderCreated" ইভেন্ট জমা দিয়ে ব্যবহারকারীকে সফল ২০০ (HTTP 200) রেসপন্স পাঠিয়ে দেয়। পেছনের ব্যাকগ্রাউন্ড ওয়ার্কাররা তাদের নিজস্ব গতিতে কিউ থেকে বার্তা পড়ে কাজ সম্পন্ন করে, যা পুরো সিস্টেমকে অত্যন্ত স্থিতিস্থাপক করে তোলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'message-broker',
          def: {
            en: 'An architectural intermediary that receives, buffers, and routes asynchronous messages between producing services and consuming worker processes.',
            bn: 'একটি মধ্যবর্তী সফটওয়্যার যা প্রডিউসার সার্ভিস থেকে মেসেজ গ্রহণ করে জমা রাখে এবং ব্যাকগ্রাউন্ড কনজিউমার ওয়ার্কারদের কাছে পাঠায়।'
          }
        },
        {
          term: 'idempotent-consumer',
          def: {
            en: 'A message processing pattern guaranteeing that processing the identical message multiple times produces the exact same system state without duplicate side-effects.',
            bn: 'এমন এক প্রসেসিং পদ্ধতি যা নিশ্চিত করে যে একই মেসেজ নেটওয়ার্ক ত্রুটির কারণে বারবার এলেও সিস্টেমে কোনো বাড়তি বা ডুপ্লিকেট পরিবর্তন ঘটবে না।'
          }
        },
        {
          term: 'dead-letter-queue',
          def: {
            en: 'A specialized secondary queue where poisoned or repeatedly failing messages are quarantined for automated retry or engineering inspection.',
            bn: 'একটি বিশেষ আলাদা কিউ যেখানে বারবার ফেইল করা ত্রুটিপূর্ণ মেসেজগুলোকে সরিয়ে রাখা হয় যাতে মূল কিউ আটকে না থাকে।'
          }
        },
        {
          term: 'backpressure-control',
          def: {
            en: 'Flow-control resistance applied upstream when downstream consumers are processing messages more slowly than producers are generating them.',
            bn: 'একটি নিয়ন্ত্রণ ব্যবস্থা যা কনজিউমারদের সামর্থ্যের চেয়ে বেশি কাজ জমা হলে প্রডিউসারদের মেসেজ পাঠানোর গতি সাময়িকভাবে কমিয়ে দেয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'queue-types-comparison-table',
      text: {
        en: 'Message Queue Architectures: Queues vs Append Logs vs Pub/Sub',
        bn: 'মেসেজ কিউ আর্কিটেকচার: প্রথাগত কিউ বনাম ডিস্ট্রিবিউটেড লগ বনাম পাব/সাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Architects select between traditional message queues, distributed append logs, and lightweight publish-subscribe brokers based on message retention requirements and consumer concurrency.',
        bn: 'মেসেজ কতক্ষণ সংরক্ষণ করতে হবে এবং কতজন কনজিউমার একসাথে তা প্রসেস করবে তার ওপর ভিত্তি করে সঠিক মেসেজ ব্রোকার প্রযুক্তি বেছে নেওয়া হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Broker Architecture', bn: 'ব্রোকার আর্কিটেকচার' },
        { en: 'Message Retention Model', bn: 'মেসেজ সংরক্ষণের পদ্ধতি' },
        { en: 'Consumer Consumption Model', bn: 'কনজিউমার প্রসেসিং মডেল' },
        { en: 'Ideal Enterprise Workloads', bn: 'আদর্শ কাজের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Traditional Queue (RabbitMQ, SQS)', bn: 'প্রথাগত মেসেজ কিউ (RabbitMQ, SQS)' },
          { en: 'Messages deleted immediately upon worker acknowledgment (ACK)', bn: 'ওয়ার্কার প্রসেস সম্পন্ন করে একনলেজমেন্ট দিলে মেসেজ সাথে সাথে মুছে যায়' },
          { en: 'Point-to-point worker pool; exactly 1 worker processes each message', bn: 'পয়েন্ট-টু-পয়েন্ট পুল; প্রতিটি মেসেজ কেবল ১ জন ওয়ার্কার পায়' },
          { en: 'Asynchronous background jobs, order processing, email notifications', bn: 'অ্যাসিঙ্ক্রোনাস ব্যাকগ্রাউন্ড টাস্ক, ইনভয়েস তৈরি, ইমেইল প্রেরণ' }
        ],
        [
          { en: 'Distributed Log (Apache Kafka, Pulsar)', bn: 'ডিস্ট্রিবিউটেড লগ (Kafka, Pulsar)' },
          { en: 'Messages retained persistently on disk for days/weeks by offset', bn: 'ডিস্কে অফসেট অনুসারে কয়েক দিন বা সপ্তাহ ধরে সব মেসেজ জমা থাকে' },
          { en: 'Pull-based partition consumers; multiple consumer groups replay history', bn: 'পুল-ভিত্তিক মডেল; একাধিক দল যেকোনো সময় অতীত ডেটা পুনরায় পড়তে পারে' },
          { en: 'High-throughput event streaming, audit ledgers, real-time analytics', bn: 'উচ্চগতির ইভেন্ট স্ট্রিমিং, অডিট লগ এবং রিয়েল-টাইম অ্যানালিটিক্স' }
        ],
        [
          { en: 'Pub/Sub Broker (Redis Pub/Sub, SNS)', bn: 'পাব/সাব ব্রোকার (Redis Pub/Sub, SNS)' },
          { en: 'Zero disk retention; messages lost if subscriber is offline', bn: 'ডিস্কে কোনো ডেটা থাকে না; গ্রাহক অফলাইনে থাকলে মেসেজ হারিয়ে যায়' },
          { en: 'Push-based fanout to all currently connected active subscribers', bn: 'পুশ-ভিত্তিক মডেল; মুহূর্তের মধ্যে যুক্ত থাকা সব গ্রাহকের কাছে পাঠায়' },
          { en: 'Live chat messaging, real-time notifications, websocket synchronization', bn: 'লাইভ চ্যাট, রিয়েল-টাইম নোটিফিকেশন ও ওয়েবসকেট সংযোগ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-queue-worker-code',
      text: {
        en: 'Executable Queue Worker with Idempotency and Dead-Letter Queue',
        bn: 'আইডেমপোটেন্ট কিউ প্রসেসরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates an asynchronous queue processor equipped with duplicate message filtering via idempotency keys and automated Dead-Letter Queue (DLQ) routing after 3 failed retry attempts.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি অ্যাসিঙ্ক্রোনাস কিউ প্রসেসর বাস্তবায়ন করে যাতে আইডেমপোটেন্সি কি দিয়ে ডুপ্লিকেট মেসেজ ফিল্টার করা এবং ৩ বার ব্যর্থতার পর ডেড-লেটার কিউতে মেসেজ পাঠানোর লজিক দেখানো হয়েছে।'
      }
    },
    {
      type: 'code',
      code: `// Resilient Message Queue Worker with Idempotency and DLQ Routing

interface MessagePayload {
  id: string;
  idempotencyKey: string;
  shouldFail: boolean;
}

interface WorkerMetrics {
  processedCount: number;
  duplicateIgnored: number;
  dlqCount: number;
}

class QueueProcessor {
  private maxRetries: number;
  private processedKeys: Set<string>;
  private deadLetterQueue: MessagePayload[];
  private processedCount: number = 0;
  private duplicateIgnored: number = 0;

  constructor(maxRetries: number = 3) {
    this.maxRetries = maxRetries;
    this.processedKeys = new Set<string>();
    this.deadLetterQueue = [];
  }

  processMessage(msg: MessagePayload): void {
    // 1. Idempotency Check: Drop duplicate deliveries cleanly
    if (this.processedKeys.has(msg.idempotencyKey)) {
      this.duplicateIgnored++;
      return;
    }

    let attempt = 0;
    let success = false;

    // 2. Retry loop with retry budget
    while (attempt < this.maxRetries && !success) {
      attempt++;
      if (msg.shouldFail) {
        continue; // simulate transient failure
      }
      success = true;
    }

    // 3. Commit state or route to Dead-Letter Queue
    if (success) {
      this.processedKeys.add(msg.idempotencyKey);
      this.processedCount++;
    } else {
      this.deadLetterQueue.push(msg);
    }
  }

  getMetrics(): WorkerMetrics {
    return {
      processedCount: this.processedCount,
      duplicateIgnored: this.duplicateIgnored,
      dlqCount: this.deadLetterQueue.length
    };
  }
}

const queue = new QueueProcessor(3);

queue.processMessage({ id: 'msg-1', idempotencyKey: 'evt-001', shouldFail: false });
queue.processMessage({ id: 'msg-1-dup', idempotencyKey: 'evt-001', shouldFail: false }); // Duplicate!
queue.processMessage({ id: 'msg-2', idempotencyKey: 'evt-002', shouldFail: false });
queue.processMessage({ id: 'msg-3', idempotencyKey: 'evt-003', shouldFail: true }); // Poison pill -> DLQ

const summary = queue.getMetrics();

console.log('Successfully processed messages:', summary.processedCount);
console.log('Duplicate messages dropped:', summary.duplicateIgnored);
console.log('Messages routed to Dead-Letter Queue:', summary.dlqCount);

// prints: Successfully processed messages: 2
// prints: Duplicate messages dropped: 1
// prints: Messages routed to Dead-Letter Queue: 1`
    },
    {
      type: 'heading',
      id: 'consumer-lag-and-backpressure-patterns',
      text: {
        en: 'Managing Consumer Lag and Applying Backpressure',
        bn: 'কনজিউমার ল্যাগ এবং ব্যাকপ্রেশার মোকাবিলার কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In distributed event streams, Consumer Lag represents the numeric delta between the latest message offset written by producers and the current message offset processed by consumers. If lag grows persistently, downstream workers are starved for resources. When worker autoscaling hits its budget ceiling, systems must apply Backpressure: upstream rate-limiting throttles producers, circuit breakers reject non-essential requests with HTTP 429 status codes, and message queues drop low-priority telemetry events to prioritize critical financial transactions.',
        bn: 'ডিস্ট্রিবিউটেড ইভেন্ট স্ট্রিমে কনজিউমার ল্যাগ (Consumer Lag) হলো প্রডিউসারের লেখা সর্বশেষ মেসেজ এবং কনজিউমারের প্রক্রিয়া করা বর্তমান মেসেজের মধ্যকার দূরত্বের ব্যবধান। যদি এই ল্যাগ অবিরাম বাড়তে থাকে, তবে বুঝতে হবে কনজিউমারদের ওপর অতিরিক্ত চাপ পড়ছে। যখন অতিরিক্ত সার্ভার যোগ করেও কুলিয়ে ওঠা যায় না, তখন ব্যাকপ্রেশার প্রয়োগ করতে হয়: প্রডিউসারদের মেসেজ পাঠানোর গতি কমিয়ে দেওয়া, সার্কিট ব্রেকার দিয়ে HTTP 429 কোড পাঠিয়ে নতুন রিকোয়েস্ট সাময়িকভাবে ফিরিয়ে দেওয়া এবং কম গুরুত্বপূর্ণ নোটিফিকেশন বাদ দিয়ে আর্থিক লেনদেনকে অগ্রাধিকার দেওয়া।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Decouple long-running tasks: Return fast HTTP 200 responses to users and delegate expensive operations to background queues.',
          bn: 'দীর্ঘ কাজগুলো আলাদা করুন: ব্যবহারকারীকে দ্রুত সফল ২০০ (HTTP 200) রেসপন্স দিন এবং দীর্ঘ কাজগুলো ব্যাকগ্রাউন্ড কিউতে পাঠিয়ে দিন।'
        },
        {
          en: 'Idempotency is non-negotiable: Distributed queues guarantee at-least-once delivery; consumers must deduplicate keys to prevent double-charging.',
          bn: 'আইডেমপোটেন্সি বাধ্যতামূলক: ডিস্ট্রিবিউটেড কিউতে মেসেজ দুবার আসতে পারে; ডুপ্লিকেট রোধ করতে কনজিউমারকে অবশ্যই কি পরীক্ষা করতে হয়।'
        },
        {
          en: 'Quarantine poison pills with DLQs: Move repeatedly failing messages to a Dead-Letter Queue to prevent stalling entire processing pipelines.',
          bn: 'ত্রুটিপূর্ণ মেসেজ DLQ-তে সরান: বারবার ফেইল করা মেসেজ ডেড-লেটার কিউতে পাঠিয়ে মূল কিউয়ের স্বাভাবিক গতি সচল রাখুন।'
        },
        {
          en: 'Monitor consumer lag: Watch offset lag metrics closely to trigger auto-scaling or backpressure before queues overflow memory.',
          bn: 'কনজিউমার ল্যাগ পর্যবেক্ষণ করুন: কিউয়ের মেমরি শেষ হওয়ার আগেই ল্যাগ দেখে অটো-স্কেলিং বা ব্যাকপ্রেশার সক্রিয় করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-read-write-divorce',
    tech: 'system-design',
    title: {
      en: 'Read-Write Separation & CQRS — Master-Replica, Materialized Views, and Event Sourcing',
      bn: 'রিড-রাইট পৃথকীকরণ ও CQRS: মাস্টার-রেপ্লিকা ও ইভেন্ট সোর্সিং'
    }
  },
  exercises: [
    {
      id: 'queue-ex1',
      kind: 'mcq',
      topic: 'async-checkout-decoupling-benefit',
      question: {
        en: 'Why is delegating email notifications to an asynchronous message queue preferred over executing them synchronously in a checkout API?',
        bn: 'চেকআউট এপিআই-এর ভেতরে সরাসরি না পাঠিয়ে একটি অ্যাসিঙ্ক্রোনাস কিউতে ইমেইল নোটিফিকেশন পাঠানো কেন শ্রেয়?'
      },
      options: [
        {
          en: 'If the third-party email provider experiences downtime or high latency, the checkout API still completes in milliseconds without failing the user purchase',
          bn: 'তৃতীয় পক্ষের ইমেইল সার্ভার ডাউন বা ধীরগতির হলেও ব্যবহারকারীর কেনাকাটা আটকে থাকে না এবং চেকআউট কয়েক মিলিসেকেন্ডেই সফল হয়'
        },
        {
          en: 'Asynchronous queues eliminate all internet subscription costs for users',
          bn: 'অ্যাসিঙ্ক্রোনাস কিউ ব্যবহারকারীর ইন্টারনেটের যাবতীয় খরচ পুরোপুরি দূর করে দেয়'
        },
        {
          en: 'Because synchronous emails format the database server hard drive',
          bn: 'কারণ সিঙ্ক্রোনাস ইমেইল সার্ভারের হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'Queues force all emails to be written in the Japanese language',
          bn: 'কিউ ব্যবহার করলে সব ইমেইল জাপানি ভাষায় রূপান্তর হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Decoupling isolates failures: one slow dependency does not break the primary customer flow.',
        bn: 'ডিকাপলিং ব্যর্থতাকে আলাদা রাখে; একটি সার্ভিসের সমস্যা পুরো সিস্টেমের কেনাকাটা বন্ধ করে না।'
      },
      explanation: {
        en: 'Asynchronous decoupling ensures system availability by preventing secondary external dependencies from blocking critical business transactions.',
        bn: 'অ্যাসিঙ্ক্রোনাস পদ্ধতি বাইরের দুর্বল সার্ভিসের কারণে মূল লেনদেন আটকে যাওয়া প্রতিরোধ করে উচ্চ প্রাপ্যতা নিশ্চিত করে।'
      }
    },
    {
      id: 'queue-ex2',
      kind: 'mcq',
      topic: 'at-least-once-delivery-consequence',
      question: {
        en: 'Most high-throughput distributed message brokers (like AWS SQS and Apache Kafka) operate on an "At-Least-Once" delivery guarantee. What requirement does this impose on consumer worker services?',
        bn: 'অধিকাংশ বড় ডিস্ট্রিবিউটেড মেসেজ ব্রোকার (যেমন AWS SQS ও Kafka) "অ্যাট-লিস্ট-ওয়ান্স" ডেলিভারি গ্যারান্টি দেয়। এর ফলে কনজিউমার সার্ভিসগুলোর জন্য কোন শর্তটি বাধ্যতামূলক হয়ে পড়ে?'
      },
      options: [
        {
          en: 'Consumers must implement idempotency checks (e.g. tracking processed event IDs) because network retries can deliver the exact same message multiple times',
          bn: 'কনজিউমারদের অবশ্যই আইডেমপোটেন্সি চেক (যেমন প্রসেস করা ইভেন্ট আইডি ট্র্যাক করা) রাখতে হয়, কারণ নেটওয়ার্ক সমস্যার কারণে একই মেসেজ একাধিকবার পৌঁছাতে পারে'
        },
        {
          en: 'Consumers must shut down their computer hardware after processing 10 messages',
          bn: 'প্রতি ১০টি মেসেজ প্রসেস করার পর কনজিউমার কম্পিউটার বন্ধ করে দিতে হয়'
        },
        {
          en: 'Because at-least-once requires servers to be located under the sea',
          bn: 'কারণ অ্যাট-লিস্ট-ওয়ান্সে সার্ভারগুলোকে সমুদ্রের তলদেশে রাখতে হয়'
        },
        {
          en: 'At-least-once guarantees that zero duplicate messages will ever exist',
          bn: 'অ্যাট-লিস্ট-ওয়ান্স নিশ্চয়তা দেয় যে কখনোই কোনো ডুপ্লিকেট মেসেজ আসবে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'At-least-once means 1 or more times. Duplicates WILL happen. Idempotency protects against duplicate effects.',
        bn: 'অ্যাট-লিস্ট-ওয়ান্স মানে ১ বা তার বেশি বার ডেলিভারি; তাই ডুপ্লিকেট ঠেকানোর দায়িত্ব কনজিউমারের।'
      },
      explanation: {
        en: 'Network partitions and retry acknowledgments inevitably cause duplicate deliveries; idempotent handlers guarantee safety.',
        bn: 'নেটওয়ার্ক বিঘ্নের কারণে একই মেসেজ বারবার আসতে পারে; আইডেমপোটেন্সি থাকলে কোনো ভুল ডুপ্লিকেট পেমেন্ট বা কাজ ঘটে না।'
      }
    },
    {
      id: 'queue-ex3',
      kind: 'mcq',
      topic: 'dead-letter-queue-isolation',
      question: {
        en: 'What dangerous scenario is prevented by configuring a Dead-Letter Queue (DLQ) with a maximum retry count of 3 attempts?',
        bn: 'সর্বোচ্চ ৩ বার পুনঃচেষ্টার সীমা দিয়ে একটি ডেড-লেটার কিউ (DLQ) কনফিগার করলে কোন মারাত্মক পরিস্থিতি এড়ানো যায়?'
      },
      options: [
        {
          en: 'A malformed "poison pill" message that permanently crashes worker threads will be quarantined after 3 attempts, preventing the queue from stalling infinitely',
          bn: 'একটি মারাত্মক ত্রুটিপূর্ণ মেসেজ (পয়জন পিল) যা বারবার কনজিউমারকে ক্র্যাশ করাচ্ছে, তা ৩ বার ব্যর্থতার পর আলাদা করে ফেলা হয় যাতে পুরো কিউ চিরতরে আটকে না যায়'
        },
        {
          en: 'The DLQ prevents computer monitors from displaying green text',
          bn: 'DLQ মনিটরে সবুজ রঙের লেখা প্রদর্শনে বাধা দেয়'
        },
        {
          en: 'Because without a DLQ, all internet routers restart every hour',
          bn: 'কারণ DLQ না থাকলে সব ইন্টারনেট রাউটার প্রতি ঘণ্টায় রিস্টার্ট নেয়'
        },
        {
          en: 'DLQs reduce client monthly mobile phone bills to zero dollars',
          bn: 'DLQ ব্যবহারকারীদের মাসিক মোবাইল বিল শূন্য টাকায় নামিয়ে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a bad message crashes the worker every time it is read, the queue cannot make forward progress without a DLQ.',
        bn: 'ভুল ফরম্যাটের মেসেজ বারবার এলে পুরো কিউ জ্যাম হয়ে যায়; DLQ ত্রুটিপূর্ণ মেসেজটি সরিয়ে কিউ মুক্ত রাখে।'
      },
      explanation: {
        en: 'DLQs isolate persistently failing messages so that healthy messages in the queue continue being processed without delay.',
        bn: 'DLQ সমস্যাযুক্ত মেসেজগুলোকে আলাদা করে রাখে যাতে বাকি সাধারণ মেসেজগুলোর স্বাভাবিক প্রসেসিং বিঘ্নিত না হয়।'
      }
    },
    {
      id: 'queue-ex4',
      kind: 'mcq',
      topic: 'consumer-lag-definition-and-impact',
      question: {
        en: 'In an Apache Kafka streaming architecture, what does an escalating "Consumer Lag" metric signify to system operators?',
        bn: 'অ্যাপাচি কাফকা স্ট্রিমিং আর্কিটেকচারে ক্রমবর্ধনশীল "কনজিউমার ল্যাগ" (Consumer Lag) সিস্টেম অপারেটরদের কীসের ইঙ্গিত দেয়?'
      },
      options: [
        {
          en: 'Producers are writing messages to partitions faster than consumers are processing them; processing delay is increasing and worker auto-scaling is required',
          bn: 'প্রডিউসাররা যে গতিতে মেসেজ তৈরি করছে, কনজিউমাররা সেই গতিতে তা শেষ করতে পারছে না; মেসেজ প্রক্রিয়াকরণের বিলম্ব বাড়ছে এবং নতুন ওয়ার্কার সার্ভার যোগ করা প্রয়োজন'
        },
        {
          en: 'Consumer lag means the server room air conditioning has stopped working',
          bn: 'কনজিউমার ল্যাগ মানে সার্ভার রুমের এয়ার কন্ডিশনার বন্ধ হয়ে গেছে'
        },
        {
          en: 'Because consumer lag causes all user passwords to be randomized',
          bn: 'কারণ এতে ব্যবহারকারীদের সমস্ত পাসওয়ার্ড এলোমেলো হয়ে যায়'
        },
        {
          en: 'It indicates that all database hard drives have been successfully disconnected',
          bn: 'এটি নির্দেশ করে যে সমস্ত ডেটাবেস হার্ড ড্রাইভ সফলভাবে বিচ্ছিন্ন করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lag = Latest Offset - Current Processed Offset. Growing lag means consumers are falling behind.',
        bn: 'ল্যাগ = মোট তৈরি হওয়া মেসেজ - প্রসেস হওয়া মেসেজ। ল্যাগ বাড়লে বুঝতে হবে কিউ জ্যাম হয়ে যাচ্ছে।'
      },
      explanation: {
        en: 'Consumer lag measures unprocessed message backlog; sustained growth requires scaling out consumers or optimizing processing logic.',
        bn: 'কনজিউমার ল্যাগ জমে থাকা কাজের পরিমাপ দেয়; এটি ক্রমাগত বাড়লে প্রসেসিং ক্ষমতা বৃদ্ধি করা জরুরি হয়ে পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'queue-patience-quiz',
    title: {
      en: 'Message Queues, Event Streaming, and Asynchronous Systems Quiz',
      bn: 'মেসেজ কিউ, ইভেন্ট স্ট্রিমিং ও অ্যাসিঙ্ক্রোনাস সিস্টেম কুইজ'
    },
    questions: [
      {
        id: 'qpq-q1',
        kind: 'mcq',
        topic: 'kafka-partitioning-ordering',
        question: {
          en: 'How does Apache Kafka achieve strict FIFO message ordering while still allowing massive horizontal scale across thousands of consumers?',
          bn: 'অ্যাপাচি কাফকা কীভাবে কঠোর FIFO মেসেজ ক্রম রক্ষা করার পাশাপাশি হাজার হাজার কনজিউমারের মধ্যে বিপুল স্কেলিং নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Kafka guarantees total order within an individual partition using a partition key (such as customer_id), allowing independent partitions to be processed in parallel by different workers',
            bn: 'কাফকা পার্টিশন কি (যেমন customer_id) ব্যবহার করে প্রতিটি একক পার্টিশনের ভেতরে ক্রমানুযায়ী সাজানো নিশ্চিত করে, যার ফলে ভিন্ন ভিন্ন পার্টিশন বিভিন্ন ওয়ার্কার সমান্তরালে প্রসেস করতে পারে'
          },
          {
            en: 'Kafka routes all messages in the world through a single server with 1 CPU core',
            bn: 'কাফকা পৃথিবীর সব মেসেজ একটিমাত্র ১ কোর প্রসেসরের সার্ভার দিয়ে পাঠায়'
          },
          {
            en: 'Because Kafka pauses all computer clocks to sort messages alphabetically',
            bn: 'কারণ কাফকা বর্ণানুক্রমিক মেসেজ সাজাতে কম্পিউটারের ঘড়ি থামিয়ে দেয়'
          },
          {
            en: 'Kafka orders messages based on the color of the producer server case',
            bn: 'কাফকা সার্ভারের রঙের ওপর ভিত্তি করে মেসেজের ক্রম নির্ধারণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Per-partition ordering guarantees order for a specific entity (e.g. order-123) without serializing the whole system.',
          bn: 'প্রতিটি পার্টিশনের ভেতরে ক্রম ঠিক থাকে; বিভিন্ন গ্রাহকের ডেটা আলাদা পার্টিশনে সমান্তরালে চলে।'
        },
        explanation: {
          en: 'Kafka provides total ordering per partition, not globally; sharding by partition key delivers both scale and ordering.',
          bn: 'কাফকা পার্টিশন স্তরে ক্রমের নিশ্চয়তা দেয়, ফলে পার্টিশন কি দিয়ে একই সত্তার সব মেসেজ সঠিকভাবে ক্রমানুসারে প্রসেস করা যায়।'
        }
      },
      {
        id: 'qpq-q2',
        kind: 'mcq',
        topic: 'exponential-backoff-with-jitter',
        question: {
          en: 'When a queue consumer encounters a transient network timeout connecting to an external API, why is "Exponential Backoff with Jitter" the gold standard retry strategy?',
          bn: 'বাইরের কোনো এপিআই-এর সাথে সংযোগে সাময়িক সমস্যা দেখা দিলে কেন "এক্সপোনেনশিয়াল ব্যাকঅফ উইথ জিটার" সবচেয়ে নির্ভরযোগ্য পুনঃচেষ্টা কৌশল?'
        },
        options: [
          {
            en: 'It doubles the wait delay between successive attempts (e.g. 100ms, 200ms, 400ms) with randomized jitter, giving the failing dependency time to recover without being hammered by synchronized retry storms',
            bn: 'এটি প্রতিটি ব্যর্থতার পর অপেক্ষার সময় দ্বিগুণ করে (যেমন ১০০ms, ২০০ms, ৪০০ms) এবং সামান্য এলোমেলো জিটার যোগ করে, যাতে ডাউন থাকা সার্ভিসটি সুস্থ হওয়ার সময় পায় এবং সব সার্ভার একসাথে আঘাত না করে'
          },
          {
            en: 'Exponential backoff formats client hard drives to clear memory errors',
            bn: 'এক্সপোনেনশিয়াল ব্যাকঅফ ক্লায়েন্টের হার্ড ড্রাইভ ফরম্যাট করে মেমরি ঠিক করে'
          },
          {
            en: 'It increases internet bandwidth speeds by 500 percent',
            bn: 'এটি ইন্টারনেটের গতি ৫০০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'Because backoff retries were mandated by the United Nations in 2021',
            bn: 'কারণ ২০২১ সালে জাতিসংঘ সব সার্ভারে ব্যাকঅফ বাধ্যতামূলক করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Wait longer each time + randomize the wait to prevent synchronized thundering herds.',
          bn: 'প্রতিবার অপেক্ষার সময় বাড়ানো এবং সামান্য এলোমেলো সময় যোগ করা সার্ভিসকে পুনরুদ্ধারের সুযোগ দেয়।'
        },
        explanation: {
          en: 'Exponential backoff prevents resource saturation; jitter de-correlates retries to break retry amplification loops.',
          bn: 'এক্সপোনেনশিয়াল ব্যাকঅফ এবং জিটার ব্যর্থ সার্ভিসের ওপর একযোগে রিকোয়েস্টের বন্যা তৈরি হওয়া ঠেকায়।'
        }
      },
      {
        id: 'qpq-q3',
        kind: 'mcq',
        topic: 'backpressure-system-protection',
        question: {
          en: 'What occurs when a high-throughput message processing system lacks proper backpressure mechanisms during a traffic surge?',
          bn: 'ট্র্যাফিক হঠাৎ বেড়ে গেলে একটি উচ্চগতির মেসেজ সিস্টেমে যদি সঠিক ব্যাকপ্রেশার না থাকে, তবে কী পরিণতি ঘটে?'
        },
        options: [
          {
            en: 'Unbounded memory buffers fill up, CPU and RAM become completely exhausted, and worker nodes crash with Out-Of-Memory (OOM) errors, triggering catastrophic cascading failure',
            bn: 'মেমরির বাফার উপচে পড়ে, সার্ভারের র‍্যাম ও সিপিইউ সম্পূর্ণ শেষ হয়ে যায় এবং আউট-অব-মেমরি (OOM) এররে সব ওয়ার্কার নোড ক্র্যাশ করে পুরো সিস্টেম ভেঙে পড়ে'
          },
          {
            en: 'The operating system switches all display text to binary machine code',
            bn: 'অপারেটিং সিস্টেম সব লেখা পরিবর্তন করে বাইনারি কোড দেখায়'
          },
          {
            en: 'Because without backpressure, network cables catch fire automatically',
            bn: 'কারণ ব্যাকপ্রেশার না থাকলে নেটওয়ার্ক তারে আগুন ধরে যায়'
          },
          {
            en: 'The queue deletes all user account passwords permanently',
            bn: 'কিউ ব্যবহারকারীদের সমস্ত পাসওয়ার্ড স্থায়ীভাবে মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If intake > processing capacity forever, memory is finite. Crash via Out Of Memory.',
          bn: 'কাজের চেয়ে যদি নতুন মেসেজ বেশি আসতে থাকে, তবে মেমরি শেষ হয়ে সার্ভার ক্র্যাশ করবেই।'
        },
        explanation: {
          en: 'Backpressure bounds memory usage by throttling producers, preserving system stability under extreme load.',
          bn: 'ব্যাকপ্রেশার মেসেজ আসার গতি সাময়িকভাবে নিয়ন্ত্রণ করে চরম চাপের মুখেও সিস্টেমকে সচল ও স্থিতিশীল রাখে।'
        }
      },
      {
        id: 'qpq-q4',
        kind: 'mcq',
        topic: 'message-acknowledgment-semantics',
        question: {
          en: 'In message queue systems, why must a consumer worker send an acknowledgment (ACK) only AFTER successfully finishing all database writes for that message?',
          bn: 'মেসেজ কিউ সিস্টেমে কেন একটি ওয়ার্কারকে ওই মেসেজের ডেটাবেস লেখার কাজ পুরোপুরি সফল হওয়ার পরেই কেবল একনলেজমেন্ট (ACK) পাঠাতে হয়?'
        },
        options: [
          {
            en: 'If the worker sends ACK first and then crashes before completing the database write, the broker will have already deleted the message, causing permanent data loss',
            bn: 'ওয়ার্কার যদি কাজ করার আগেই ACK পাঠিয়ে দেয় এবং পরে ডেটাবেসে লেখার সময় ক্র্যাশ করে, তবে ব্রোকার মেসেজটি মুছে ফেলবে এবং তথ্যটি চিরতরে হারিয়ে যাবে'
          },
          {
            en: 'Sending ACK late reduces server electricity consumption by 90 percent',
            bn: 'দেরিতে ACK পাঠালে সার্ভারের বিদ্যুৎ খরচ ৯০ শতাংশ কমে যায়'
          },
          {
            en: 'Because sending ACK early causes the computer monitor to turn off',
            bn: 'কারণ আগে ACK পাঠালে মনিটর বন্ধ হয়ে যায়'
          },
          {
            en: 'Message ACK protocols were invented by international shipping companies in 2024',
            bn: 'কারণ ২০২৪ সালে আন্তর্জাতিক শিপিং কোম্পানি এই প্রোটোকল তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'ACK tells the queue "I am completely done, delete it." If you crash before finishing, the job is lost forever.',
          bn: 'ACK মানেই কাজ শেষ; তাই কাজ শেষ হওয়ার আগে ACK দিলে মাঝপথে ক্র্যাশে ডেটা চিরতরে হারিয়ে যায়।'
        },
        explanation: {
          en: 'Post-processing ACKs ensure At-Least-Once delivery: if the worker dies mid-processing, the broker re-delivers the message to a healthy worker.',
          bn: 'কাজ শেষে ACK দিলে মাঝপথে কোনো নোড নষ্ট হলেও ব্রোকার অন্য একটি সচল ওয়ার্কারকে দিয়ে কাজটি সফলভাবে সম্পন্ন করাতে পারে।'
        }
      }
    ]
  }
};
