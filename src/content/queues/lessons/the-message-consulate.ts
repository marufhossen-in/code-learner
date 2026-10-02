import type { Lesson } from '../../../lib/types';

export const theMessageConsulateLesson: Lesson = {
  slug: 'the-message-consulate',
  tech: 'queues',
  title: {
    en: 'Distributed Message Queues — Brokers, Delivery Semantics, and DLQs',
    bn: 'ডিস্ট্রিবিউটেড মেসেজ কিউ: ব্রোকার, ডেলিভারি সিম্যান্টিক্স এবং ডিএলকিউ'
  },
  summary: {
    en: 'When queue producers and consumers run on independent servers across an unreliable network, data structures evolve into distributed message brokers like Kafka, RabbitMQ, and AWS SQS. We examine the fundamental delivery semantics—at-most-once versus at-least-once—and prove why idempotency keys are mandatory to protect against duplicate processing. We analyze dead-letter queues (DLQs) with exponential backoff to handle poison-pill messages, and explain how hash-partitioning preserves strict FIFO ordering per entity while enabling massive horizontal scalability.',
    bn: 'যখন কিউয়ের উৎপাদক এবং ভোক্তা একটি অনির্ভরযোগ্য নেটওয়ার্কের মাধ্যমে ভিন্ন ভিন্ন সার্ভারে চলে, তখন সাধারণ ডেটা কাঠামো কাফকা, র্যাবিটএমকিউ এবং এডাব্লিউএস এসকিউএসের মতো ডিস্ট্রিবিউটেড মেসেজ ব্রোকারে রূপান্তরিত হয়। আমরা মৌলিক বিতরণ নীতি—সর্বাধিক-একবার বনাম অন্ততপক্ষে-একবার—পর্যালোচনা করি এবং প্রমাণ করি কেন সদৃশ বার্তা প্রক্রিয়াকরণ রোধে আইডেমপোটেন্সি কি বাধ্যতামূলক। আমরা বিষাক্ত বার্তা মোকাবিলায় এক্সপোনেনশিয়াল ব্যাকঅফসহ ডেড-লেটার কিউ (DLQ) বিশ্লেষণ করি এবং দেখাই কীভাবে হ্যাশ পার্টিশনিং অনুভূমিক স্কেলিং নিশ্চিত করে সত্তাপ্রতি কঠোর ফিফো ক্রম বজায় রাখে।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-bfs-tide',
    tech: 'queues',
    title: {
      en: 'Breadth-First Search — Level-Order Traversal and Shortest Path Exploration',
      bn: 'ব্রেডথ-ফার্স্ট সার্চ: লেভেল-অর্ডার ট্রাভার্সাল এবং শর্টেস্ট পাথ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'distributed-message-paradigm',
      text: {
        en: 'Decoupling Systems Across Unreliable Networks',
        bn: 'অনির্ভরযোগ্য নেটওয়ার্কে স্বাধীন সিস্টেমের সংযোগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An in-memory queue lives within a single operating system process. If that server loses power or restarts, all queued items disappear from memory. Furthermore, if a web API directly waits for a payment gateway or heavy document generator across the network, user requests block and time out when downstream services slow down.',
        bn: 'একটি ইন-মেমোরি কিউ একটি একক অপারেটিং সিস্টেম প্রসেসের ভেতরে অবস্থান করে। যদি সেই সার্ভারের বিদ্যুৎ চলে যায় বা রিস্টার্ট হয়, তবে কিউতে থাকা সমস্ত তথ্য মেমোরি থেকে মুছে যায়। তাছাড়া যদি একটি ওয়েব এপিআই নেটওয়ার্কের ওপারে পেমেন্ট গেটওয়ে বা ডকুমেন্ট জেনারেটরের জন্য সরাসরি অপেক্ষা করে, তবে ডাউনস্ট্রিম সার্ভিস ধীরগতির হলে ব্যবহারকারীর রিকোয়েস্ট আটকে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Distributed message queues decouple producers from consumers across the network. Producers publish messages to an independent cluster of brokers, such as Apache Kafka, RabbitMQ, or AWS SQS. The broker commits messages to persistent storage, guaranteeing that consumers can safely fetch and process jobs at their own pace.',
        bn: 'ডিস্ট্রিবিউটেড মেসেজ কিউ নেটওয়ার্কের মাধ্যমে উৎপাদক এবং ভোক্তাকে একে অপরের থেকে সম্পূর্ণ স্বাধীন করে দেয়। উৎপাদকরা অ্যাপাচি কাফকা, র্যাবিটএমকিউ বা এডাব্লিউএস এসকিউএসের মতো স্বাধীন ব্রোকার ক্লাস্টারে বার্তা পাঠায়। ব্রোকার বার্তাগুলো ডিস্কে সংরক্ষণ করে রাখে, যা নিশ্চিত করে যে ভোক্তারা তাদের নিজস্ব গতিতে কাজ গ্রহণ ও সম্পন্ন করতে পারবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'message-broker',
          def: {
            en: 'A distributed software intermediary that receives messages from producers, persists them durably, and routes them to consumers.',
            bn: 'এমন এক মধ্যবর্তী নেটওয়ার্ক সফটওয়্যার যা উৎপাদক থেকে বার্তা গ্রহণ করে, ডিস্কে সংরক্ষণ করে এবং ভোক্তাদের কাছে পৌঁছে দেয়।'
          }
        },
        {
          term: 'at-least-once',
          def: {
            en: 'A delivery guarantee where the broker repeatedly delivers a message until the consumer acknowledges it, risking duplicates.',
            bn: 'এমন এক বিতরণ নিশ্চয়তা যেখানে ভোক্তা প্রাপ্তি স্বীকার না করা পর্যন্ত ব্রোকার বার্তা পাঠাতেই থাকে, ফলে সদৃশ বার্তার ঝুঁকি থাকে।'
          }
        },
        {
          term: 'idempotency-key',
          def: {
            en: 'A unique request identifier attached to a message ensuring repeated processing produces the exact same side-effect without duplicates.',
            bn: 'বার্তায় যুক্ত একটি অনন্য শনাক্তকারী যা নিশ্চিত করে যে একই বার্তা বারবার প্রসেস হলেও সিস্টেমে কোনো বাড়তি পার্শ্বপ্রতিক্রিয়া হবে না।'
          }
        },
        {
          term: 'dead-letter-queue',
          def: {
            en: 'A secondary queue where permanently failing or malformed messages are routed after exceeding maximum retry attempts.',
            bn: 'এমন একটি মাধ্যমিক কিউ যেখানে বারবার ব্যর্থ হওয়া বা ত্রুটিপূর্ণ বার্তাগুলো সর্বোচ্চ পুনঃচেষ্টার পর আলাদা করে সরিয়ে রাখা হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'queue'
    },
    {
      type: 'heading',
      id: 'delivery-semantics-and-idempotency',
      text: {
        en: 'Delivery Semantics Comparison: At-Most-Once vs At-Least-Once',
        bn: 'বিতরণ নীতির তুলনা: সর্বাধিক-একবার বনাম অন্ততপক্ষে-একবার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Due to network partitions and packet loss, achieving true exactly-once delivery across distributed nodes is impossible without heavy coordination. In at-most-once delivery, messages are sent without acknowledgments; network failures mean lost data, but duplicates never happen. In at-least-once delivery, brokers retry until an acknowledgment is received, guaranteeing zero data loss at the expense of duplicate deliveries.',
        bn: 'নেটওয়ার্কের সংযোগ বিচ্ছিন্নতা এবং প্যাকেট ড্রপের কারণে ভারী সমন্বয় ছাড়া ডিস্ট্রিবিউটেড নোডগুলোর মধ্যে অবিকল-একবার বিতরণ অর্জন করা অসম্ভব। সর্বাধিক-একবার (at-most-once) পদ্ধতিতে কোনো প্রাপ্তি স্বীকার ছাড়া বার্তা পাঠানো হয়; নেটওয়ার্কে ব্যর্থতা হলে বার্তা হারিয়ে যায় কিন্তু সদৃশ বার্তা তৈরি হয় না। অন্যদিকে অন্ততপক্ষে-একবার (at-least-once) পদ্ধতিতে প্রাপ্তি স্বীকার না পাওয়া পর্যন্ত ব্রোকার পুনরায় চেষ্টা করে, যা শূন্য ডেটা ক্ষতি নিশ্চিত করলেও সদৃশ বার্তার ঝুঁকি তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To make at-least-once delivery safe, consumers must be idempotent. An idempotent consumer records an idempotency key (such as a UUID) in a database table before executing business actions. If a duplicate message arrives with the same key, the consumer acknowledges the broker immediately and skips duplicate execution, preventing double payments or duplicate shipments.',
        bn: 'অন্ততপক্ষে-একবার পদ্ধতিকে নিরাপদ করতে ভোক্তাদের আইডেমপোটেন্ট হতে হয়। একজন আইডেমপোটেন্ট ভোক্তা ব্যবসায়িক কাজ সম্পাদনের আগে একটি আইডেমপোটেন্সি কি (যেমন ইউইউআইডি) ডাটাবেস টেবিলে সংরক্ষণ করে। একই কি যুক্ত কোনো সদৃশ বার্তা আবার এলে ভোক্তা সাথে সাথে ব্রোকারকে স্বীকৃতি জানায় এবং পুনরায় কাজ করা এড়িয়ে চলে, যা একই অর্ডারে দুইবার পেমেন্ট কেটে নেওয়া রোধ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Delivery Strategy', bn: 'বিতরণ কৌশল' },
        { en: 'Network Partition Behavior', bn: 'নেটওয়ার্ক বিঘ্নে আচরণ' },
        { en: 'Duplicate Risk', bn: 'সদৃশ বার্তার ঝুঁকি' },
        { en: 'Production Application', bn: 'উৎপাদনমুখী প্রয়োগ' }
      ],
      rows: [
        [
          { en: 'At-Most-Once (Fire & Forget)', bn: 'সর্বাধিক-একবার (পাঠাও এবং ভুলে যাও)' },
          { en: 'Messages dropped silently', bn: 'বার্তা নীরবে হারিয়ে যায়' },
          { en: '0 duplicates guaranteed', bn: '০ সদৃশ বার্তার নিশ্চয়তা' },
          { en: 'Live telemetry, game player coordinates', bn: 'রিয়েল-টাইম মেট্রিক্স, গেম প্লেয়ারের স্থানাঙ্ক' }
        ],
        [
          { en: 'At-Least-Once (Standard)', bn: 'অন্ততপক্ষে-একবার (স্ট্যান্ডার্ড)' },
          { en: 'Redelivered until acknowledged', bn: 'স্বীকৃতি না পাওয়া পর্যন্ত পুনরায় পাঠানো হয়' },
          { en: 'Duplicates guaranteed on network timeouts', bn: 'নেটওয়ার্ক টাইমআউটে সদৃশ বার্তা অবধারিত' },
          { en: 'Email dispatch, push notifications', bn: 'ইমেইল পাঠানো, পুশ নোটিফিকেশন' }
        ],
        [
          { en: 'At-Least-Once + Idempotency', bn: 'অন্ততপক্ষে-একবার + আইডেমপোটেন্সি' },
          { en: 'Redelivered safely with deduplication', bn: 'ডুপ্লিকেট শনাক্ত করে নিরাপদে পুনরায় বিতরণ' },
          { en: '0 duplicate side effects', bn: '০ সদৃশ পার্শ্বপ্রতিক্রিয়া' },
          { en: 'Credit card charges, bank transfers', bn: 'ক্রেডিট কার্ড পেমেন্ট, ব্যাংক ট্রান্সফার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'broker-dlq-impl',
      text: {
        en: 'Executable Message Broker with DLQ and Idempotency',
        bn: 'ডিএলকিউ এবং আইডেমপোটেন্সিসহ সম্পূর্ণ ব্রোকার বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models an at-least-once message broker. Message 101 succeeds on attempt 1. Message 102 is a network duplicate sharing the same idempotency key and is safely skipped. Message 103 contains corrupted data; after failing 3 consecutive attempts, it is automatically routed to the Dead-Letter Queue (DLQ).',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি অন্ততপক্ষে-একবার বিতরণ পদ্ধতির মেসেজ ব্রোকারকে মডেল করে। বার্তা ১০১ প্রথম প্রচেষ্টাতেই সফল হয়। বার্তা ১০২ একই আইডেমপোটেন্সি কি বহন করায় সদৃশ হিসেবে নিরাপদে এড়িয়ে যাওয়া হয়। বার্তা ১০৩ এর ডেটা ত্রুটিপূর্ণ হওয়ায় টানা ৩ বার ব্যর্থ হওয়ার পর স্বয়ংক্রিয়ভাবে ডেড-লেটার কিউ (DLQ)-তে চলে যায়।'
      }
    },
    {
      type: 'code',
      code: `class MessageBroker {
  constructor(maxRetries = 3) {
    this.queue = [];
    this.dlq = [];
    this.maxRetries = maxRetries;
    this.processedKeys = new Set();
  }

  publish(id, idempotencyKey, payload, failAttempts = 0) {
    this.queue.push({ id, idempotencyKey, payload, attempts: 0, failAttempts });
  }

  processQueue(consumerFn) {
    const log = [];
    while (this.queue.length > 0) {
      const msg = this.queue.shift();
      msg.attempts++;

      // Idempotency check: prevent duplicate execution
      if (this.processedKeys.has(msg.idempotencyKey)) {
        log.push(\`[SKIP DUPLICATE] Msg \${msg.id} with key \${msg.idempotencyKey} already applied\`);
        continue;
      }

      // Simulate consumer work and intentional failures
      const success = consumerFn(msg);
      if (success) {
        this.processedKeys.add(msg.idempotencyKey);
        log.push(\`[SUCCESS] Msg \${msg.id} processed on attempt \${msg.attempts}\`);
      } else {
        if (msg.attempts < this.maxRetries) {
          log.push(\`[RETRY] Msg \${msg.id} failed attempt \${msg.attempts}, re-enqueuing\`);
          this.queue.push(msg); // Re-enqueue for retry
        } else {
          log.push(\`[DLQ ROUTE] Msg \${msg.id} exceeded max retries (\${msg.attempts}), moved to DLQ\`);
          this.dlq.push(msg);
        }
      }
    }
    return log;
  }
}

const broker = new MessageBroker(3);

// 1. Normal order creation
broker.publish(101, 'key-order-101', { action: 'pay', amount: 250 }, 0);
// 2. Duplicate order creation (same idempotency key)
broker.publish(102, 'key-order-101', { action: 'pay', amount: 250 }, 0);
// 3. Poison pill message (fails every attempt)
broker.publish(103, 'key-order-103', { action: 'corrupt_data' }, 99);

const executionLog = broker.processQueue((msg) => {
  return msg.attempts > msg.failAttempts;
});

executionLog.forEach((line) => console.log(line));
// Output: [SUCCESS] Msg 101 processed on attempt 1
// Output: [SKIP DUPLICATE] Msg 102 with key key-order-101 already applied
// Output: [RETRY] Msg 103 failed attempt 1, re-enqueuing
// Output: [RETRY] Msg 103 failed attempt 2, re-enqueuing
// Output: [DLQ ROUTE] Msg 103 exceeded max retries (3), moved to DLQ

console.log('Primary queue length:', broker.queue.length);
// Output: Primary queue length: 0

console.log('DLQ message count:', broker.dlq.length);
// Output: DLQ message count: 1

console.log('Dead-lettered ID:', broker.dlq[0].id);
// Output: Dead-lettered ID: 103`
    },
    {
      type: 'heading',
      id: 'partitioning-and-ordering',
      text: {
        en: 'Preserving FIFO Ordering at Scale via Partitioning',
        bn: 'পার্টিশনিংয়ের মাধ্যমে বৃহৎ পরিসরে ফিফো ক্রম রক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A single global queue cannot scale horizontally because every worker contends for the exact same queue head and tail pointers. Modern brokers like Kafka solve this by partitioning topics into independent shards. Messages are routed using a hash of an entity key, such as hash(userId) % numPartitions.',
        bn: 'একটিমাত্র বৈশ্বিক কিউ অনুভূমিকভাবে স্কেল করতে পারে না কারণ সমস্ত কর্মী একই হেড এবং টেইল পয়েন্টারের ওপর চাপ তৈরি করে। কাফকার মতো আধুনিক ব্রোকারগুলো টপিককে একাধিক স্বাধীন পার্টিশনে বিভক্ত করে এর সমাধান করে। বার্তাগুলোকে একটি নির্দিষ্ট সত্তার চাবির হ্যাশ ব্যবহার করে নির্দিষ্ট পার্টিশনে পাঠানো হয়, যেমন hash(userId) % numPartitions।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This architectural design guarantees that all events for a specific user are appended to the exact same partition in strict chronological FIFO order. Concurrently, different partitions are consumed in parallel across dozens of independent consumer servers without lock contention.',
        bn: 'এই স্থাপত্য কৌশলটি নিশ্চিত করে যে একজন নির্দিষ্ট ব্যবহারকারীর সমস্ত ইভেন্ট কঠোর ফিফো ক্রমানুসারে একই পার্টিশনে জমা হয়। একই সাথে ডজন ডজন স্বাধীন কনজিউমার সার্ভার কোনো লক কনটেনশন ছাড়াই সমান্তরালভাবে ভিন্ন ভিন্ন পার্টিশন প্রসেস করতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Independent lifecycles: Distributed brokers decouple producers and consumers across network boundaries and server restarts.',
          bn: 'স্বাধীন জীবনচক্র: ডিস্ট্রিবিউটেড ব্রোকার নেটওয়ার্কের সীমানা পেরিয়ে সার্ভার রিস্টার্ট হলেও উৎপাদক ও ভোক্তাকে সংযুক্ত রাখে।'
        },
        {
          en: 'At-least-once default: Modern distributed systems choose at-least-once delivery with zero data loss over fragile exactly-once assumptions.',
          bn: 'অন্ততপক্ষে-একবার স্ট্যান্ডার্ড: আধুনিক ডিস্ট্রিবিউটেড সিস্টেম অনির্ভরযোগ্য হুবহু-একবারের বদলে শূন্য ডেটা হারানোর নিশ্চয়তাসম্পন্ন অন্ততপক্ষে-একবার নীতি বেছে নেয়।'
        },
        {
          en: 'Mandatory idempotency: Unique idempotency keys prevent duplicate payments and duplicate mutations when network timeouts trigger retries.',
          bn: 'বাধ্যতামূলক আইডেমপোটেন্সি: অনন্য আইডেমপোটেন্সি কি নিশ্চিত করে যে নেটওয়ার্ক টাইমআউটে পুনরায় চেষ্টা করা হলেও গ্রাহকের কাছ থেকে দুইবার টাকা কাটা হবে না।'
        },
        {
          en: 'Dead-letter isolation: Routing persistently failing messages to a DLQ unblocks primary pipelines and gives engineers an audit trail.',
          bn: 'ডেড-লেটার পৃথকীকরণ: বারবার ব্যর্থ হওয়া বার্তাগুলোকে ডিএলকিউতে সরিয়ে নিলে প্রধান পাইপলাইন সচল থাকে এবং সমস্যা তদন্ত করা সহজ হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'mc-ex1',
      kind: 'mcq',
      topic: 'delivery-guarantees',
      question: {
        en: 'Why is at-least-once delivery paired with an idempotency key considered the gold standard for financial payment systems?',
        bn: 'আর্থিক পেমেন্ট সিস্টেমে কেন আইডেমপোটেন্সি কি-সহ অন্ততপক্ষে-একবার বিতরণ পদ্ধতিকে গোল্ড স্ট্যান্ডার্ড বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'It guarantees zero dropped transactions while ensuring network retry duplicates never result in double charges',
          bn: 'এটি কোনো লেনদেন হারিয়ে যাওয়া রোধ করে এবং নিশ্চিত করে যে নেটওয়ার্কের কারণে পুনরায় পাঠানো হলেও গ্রাহকের থেকে দুইবার টাকা কাটা হবে না'
        },
        {
          en: 'It compresses HTTP requests by 90 percent over cellular modems',
          bn: 'এটি সেলুলার মডেমের মাধ্যমে এইচটিটিপি রিকোয়েস্টের আকার ৯০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'It eliminates the need for SQL database transactions and backup disks',
          bn: 'এটি এসকিউএল ডাটাবেস ট্রানজেকশন এবং ব্যাকআপ ডিস্কের প্রয়োজনীয়তা দূর করে'
        },
        {
          en: 'It allows computers to process credit cards without electricity',
          bn: 'এটি বিদ্যুৎ ছাড়াই কম্পিউটারকে ক্রেডিট কার্ড প্রসেস করার সুযোগ দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when a timeout occurs: was the money transferred or did the network drop?',
        bn: 'টাইমআউট হলে কী ঘটে ভাবুন: টাকা কি সত্যিই কাটা হয়েছে নাকি নেটওয়ার্ক সংযোগ বিচ্ছিন্ন হয়েছে?'
      },
      explanation: {
        en: 'If an acknowledgment is lost, the broker redelivers the message. The consumer checks the idempotency key and skips duplicate execution, preventing duplicate charges.',
        bn: 'যদি একনলেজমেন্ট হারিয়ে যায়, ব্রোকার আবার বার্তা পাঠায়। ভোক্তা আইডেমপোটেন্সি কি দেখে দ্বিতীয়বার কাজ করা থামায়, ফলে দ্বিগুণ চার্জ হয় না।'
      }
    },
    {
      id: 'mc-ex2',
      kind: 'mcq',
      topic: 'dlq-purpose',
      question: {
        en: 'What critical danger occurs if a distributed queue lacks a Dead-Letter Queue (DLQ) when a corrupted message is published?',
        bn: 'একটি ডিস্ট্রিবিউটেড কিউতে একটি ত্রুটিপূর্ণ বার্তা এলে যদি ডেড-লেটার কিউ (DLQ) না থাকে তবে কী মারাত্মক বিপদ ঘটতে পারে?'
      },
      options: [
        {
          en: 'Head-of-Line blocking: the poison-pill message fails repeatedly, triggering endless crash-and-retry loops that block all valid messages behind it',
          bn: 'হেড-অফ-লাইন ব্লকিং: বিষাক্ত বার্তাটি বারবার ক্র্যাশ করে এবং অনন্ত পুনঃচেষ্টার লুপে পড়ে পেছনের সমস্ত বৈধ বার্তাকে আটকে দেয়'
        },
        {
          en: 'The broker hard drive automatically reformats to FAT32',
          bn: 'ব্রোকারের হার্ড ড্রাইভ স্বয়ংক্রিয়ভাবে এফএটি৩২ ফরম্যাটে রূপান্তর হয়ে যায়'
        },
        {
          en: 'Consumer machines permanently burn out their CPU silicon transistors',
          bn: 'ভোক্তা মেশিনের সিপিইউ সিলিকন ট্রানজিস্টর স্থায়ীভাবে পুড়ে নষ্ট হয়ে যায়'
        },
        {
          en: 'All network routers switch from IPv6 back to IPv4',
          bn: 'সমস্ত নেটওয়ার্ক রাউটার আইপিভি৬ থেকে আইপিভি৪-এ ফিরে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a bad message causes the consumer to throw an unhandled error on every attempt, what happens to messages waiting behind it?',
        bn: 'একটি খারাপ বার্তা যদি প্রতিবার ভোক্তার মধ্যে ইরর তৈরি করে, তবে পেছনের অপেক্ষমাণ বার্তাগুলোর কী দশা হবে?'
      },
      explanation: {
        en: 'A poison-pill message will be retried infinitely, holding up the queue consumer. A DLQ catches unprocessable messages after a threshold, allowing normal traffic to proceed.',
        bn: 'বিষাক্ত বার্তা অনন্তকাল ধরে চেষ্টা হতে থাকলে পুরো কিউ অচল হয়ে পড়ে। ডিএলকিউ নির্দিষ্ট চেষ্টা পর এটিকে সরিয়ে নিয়ে সাধারণ ট্র্যাফিক সচল রাখে।'
      }
    },
    {
      id: 'mc-ex3',
      kind: 'mcq',
      topic: 'partition-key-ordering',
      question: {
        en: 'How does an event-streaming system like Apache Kafka maintain FIFO ordering while scaling horizontally across dozens of machines?',
        bn: 'অ্যাপাচি কাফকার মতো একটি ইভেন্ট স্ট্রিমিং সিস্টেম কীভাবে ডজন ডজন মেশিনে স্কেল করার পাশাপাশি ফিফো ক্রম অক্ষুণ্ন রাখে?'
      },
      options: [
        {
          en: 'It partitions the topic by an entity key, guaranteeing strict FIFO order within each partition while consuming multiple partitions in parallel',
          bn: 'এটি কোনো সত্তা বা আইডির ভিত্তিতে টপিককে পার্টিশন করে, ফলে প্রতি পার্টিশনে কঠোর ফিফো ক্রম বজায় থাকে এবং একাধিক পার্টিশন সমান্তরালে চলে'
        },
        {
          en: 'It slows down all consumer servers to match the speed of the slowest 1990s modem',
          bn: 'এটি ১৯৯০ এর দশকের সবচেয়ে মন্থর মডেমের গতির সাথে মিল রেখে সব ভোক্তা সার্ভারকে ধীর করে দেয়'
        },
        {
          en: 'It sorts the entire global database from scratch after every single message',
          bn: 'এটি প্রতিটি বার্তার পর সমগ্র বৈশ্বিক ডাটাবেসকে নতুন করে সর্ট করে'
        },
        {
          en: 'It bans producers from sending more than 1 message per hour',
          bn: 'এটি প্রতি ঘণ্টায় ১টির বেশি বার্তা পাঠানো উৎপাদকদের জন্য নিষিদ্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'All events for customer 101 go to partition 2, while events for customer 102 go to partition 5.',
        bn: 'গ্রাহক ১০১ এর সব ইভেন্ট পার্টিশন ২ এ যায় এবং গ্রাহক ১০২ এর সব ইভেন্ট পার্টিশন ৫ এ যায়।'
      },
      explanation: {
        en: 'Key-based partitioning isolates order constraints to individual entities, allowing massive concurrency across distinct partitions without ordering collisions.',
        bn: 'চাবিভিত্তিক পার্টিশনিং ক্রমের নিয়মকে প্রতিটি সত্তার মধ্যে সীমাবদ্ধ রাখে, ফলে কোনো সংঘর্ষ ছাড়াই বিপুল সংখ্যক সমান্তরাল কাজ চালানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'message-consulate-quiz',
    title: {
      en: 'Distributed Message Queues Quiz',
      bn: 'ডিস্ট্রিবিউটেড মেসেজ কিউ কুইজ'
    },
    questions: [
      {
        id: 'mc-q1',
        kind: 'mcq',
        topic: 'at-least-once-duplicate-trigger',
        question: {
          en: 'In an at-least-once queueing system, what common network event triggers a duplicate message delivery?',
          bn: 'একটি অন্ততপক্ষে-একবার কিউ সিস্টেমে কোন সাধারণ নেটওয়ার্ক ঘটনাটি সদৃশ বার্তা বিতরণের কারণ হয়?'
        },
        options: [
          {
            en: 'The consumer successfully finishes the job, but the network drops its acknowledgment (ACK) packet before reaching the broker',
            bn: 'ভোক্তা কাজটি সফলভাবে শেষ করে কিন্তু তার প্রাপ্তি স্বীকার (ACK) প্যাকেট ব্রোকারে পৌঁছানোর আগেই নেটওয়ার্কে হারিয়ে যায়'
          },
          {
            en: 'The server power supply runs out of clock cycles',
            bn: 'সার্ভারের পাওয়ার সাপ্লাই ক্লক সাইকেল শেষ করে ফেলে'
          },
          {
            en: 'The database table runs a SELECT query with a LIMIT clause',
            bn: 'ডাটাবেস টেবিল একটি লিমিট ক্লজসহ সিলেক্ট কুয়েরি চালায়'
          },
          {
            en: 'The broker converts all numbers into floating-point decimals',
            bn: 'ব্রোকার সমস্ত সংখ্যাকে ফ্লোটিং পয়েন্ট দশমিকে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If the broker never hears back from the consumer within its timeout window, what must it assume?',
          bn: 'নির্দিষ্ট সময়ের মধ্যে ভোক্তা থেকে কোনো সাড়া না পেলে ব্রোকার কী ধরে নেবে?'
        },
        explanation: {
          en: 'When the ACK is dropped, the broker assumes the consumer crashed and redelivers the message, leading to a duplicate delivery.',
          bn: 'প্রাপ্তি স্বীকার হারিয়ে গেলে ব্রোকার মনে করে ভোক্তা ক্র্যাশ করেছে এবং পুনরায় বার্তা পাঠায়, যার ফলে সদৃশ বার্তা তৈরি হয়।'
        }
      },
      {
        id: 'mc-q2',
        kind: 'mcq',
        topic: 'exponential-backoff',
        question: {
          en: 'Why do production queue workers utilize exponential backoff (e.g., retrying after 1s, then 2s, then 4s) when redelivering failed jobs?',
          bn: 'ব্যর্থ কাজ পুনরায় চেষ্টা করার সময় উৎপাদনমুখী কিউ কর্মীরা কেন এক্সপোনেনশিয়াল ব্যাকঅফ (যেমন ১ সেকেন্ড, তারপর ২ সেকেন্ড, তারপর ৪ সেকেন্ড পর চেষ্টা) ব্যবহার করে?'
        },
        options: [
          {
            en: 'To give downstream systems time to recover from temporary outages without overwhelming them with an immediate flood of retries',
            bn: 'তাৎক্ষণিক পুনঃচেষ্টার ঢল দিয়ে বিপর্যস্ত না করে সাময়িক ত্রুটি থেকে ডাউনস্ট্রিম সিস্টেমকে পুনরুদ্ধারের সময় দিতে'
          },
          {
            en: 'To prevent JavaScript numbers from becoming negative',
            bn: 'জাভাস্ক্রিপ্ট সংখ্যাগুলো যাতে ঋণাত্মক না হয় তা নিশ্চিত করতে'
          },
          {
            en: 'Because computer processors cannot calculate retry times under 1 second',
            bn: 'কারণ কম্পিউটার প্রসেসর ১ সেকেন্ডের নিচে পুনঃচেষ্টা সময় হিসাব করতে পারে না'
          },
          {
            en: 'To ensure messages are permanently erased from disk',
            bn: 'ডিস্ক থেকে বার্তাগুলো যাতে স্থায়ীভাবে মুছে যায় তা নিশ্চিত করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a database crashed from high load, hammering it every millisecond will prevent it from ever rebooting.',
          bn: 'অতিরিক্ত চাপে ডাটাবেস ক্র্যাশ করলে প্রতি মিলিলাইলে আঘাত করলে এটি কখনোই চালু হতে পারবে না।'
        },
        explanation: {
          en: 'Exponential backoff spreads out retry attempts, dampening stampeding herds and allowing overloaded services to recover gracefully.',
          bn: 'এক্সপোনেনশিয়াল ব্যাকঅফ পুনঃচেষ্টার ব্যবধান বাড়িয়ে দেয়, যা আকস্মিক ট্র্যাফিক স্পাইক প্রশমিত করে এবং সিস্টেমকে ঘুরে দাঁড়াতে সহায়তা করে।'
        }
      },
      {
        id: 'mc-q3',
        kind: 'mcq',
        topic: 'broker-durability',
        question: {
          en: 'What primary storage mechanism allows distributed brokers like Kafka or RabbitMQ to survive sudden server restarts without losing messages?',
          bn: 'কোন প্রাথমিক সংরক্ষণ ব্যবস্থার কারণে কাফকা বা র্যাবিটএমকিউ-এর মতো ব্রোকার হঠাৎ সার্ভার রিস্টার্ট হলেও বার্তা হারায় না?'
        },
        options: [
          {
            en: 'Persisting messages to non-volatile disk storage (such as append-only write-ahead logs) and replicating across cluster nodes',
            bn: 'নন-ভোলাটাইল ডিস্ক স্টোরেজে বার্তা সংরক্ষণ করা (যেমন অ্যাপেন্ড-অনলি রাইট-অ্যাহেড লগ) এবং ক্লাস্টার নোডগুলোতে প্রতিলিপি রাখা'
          },
          {
            en: 'Holding messages strictly in L1 CPU cache memory',
            bn: 'কেবলমাত্র এল১ সিপিইউ ক্যাশ মেমোরিতে বার্তা ধরে রাখা'
          },
          {
            en: 'Writing messages to optical compact discs (CD-ROMs) in real time',
            bn: 'রিয়েল টাইমে অপটিক্যাল কমপ্যাক্ট ডিস্কে বার্তা লিখে রাখা'
          },
          {
            en: 'Broadcasting messages over FM radio frequencies',
            bn: 'এফএম রেডিও তরঙ্গের মাধ্যমে বার্তা সম্প্রচার করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where does durable data live when electrical power is cut?',
          bn: 'বিদ্যুৎ চলে গেলেও স্থায়ী ডেটা কোথায় সংরক্ষিত থাকে?'
        },
        explanation: {
          en: 'Writing messages to persistent disk logs and synchronizing them across quorum replicas ensures data survives broker crashes.',
          bn: 'ডিস্ক লগে বার্তা লিখে রাখা এবং কোরাম নোডগুলোতে সিঙ্ক করার ফলে ব্রোকার ক্র্যাশ করলেও ডেটা অক্ষত থাকে।'
        }
      },
      {
        id: 'mc-q4',
        kind: 'mcq',
        topic: 'at-most-once-suitability',
        question: {
          en: 'Under which scenario is at-most-once message delivery preferred over at-least-once delivery?',
          bn: 'কোন পরিস্থিতিতে অন্ততপক্ষে-একবার বিতরণের চেয়ে সর্বাধিক-একবার বিতরণ বেশি গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'High-frequency telemetry where an occasional lost data point is completely harmless, but processing delayed duplicates harms real-time accuracy',
            bn: 'উচ্চগতির রিয়েল-টাইম টেলিমিতি যেখানে মাঝে মাঝে কিছু ডেটা হারালে কোনো ক্ষতি নেই কিন্তু পুরনো সদৃশ তথ্য এলে সঠিকতা বিঘ্নিত হয়'
          },
          {
            en: 'Bank account funds transfers and salary payouts',
            bn: 'ব্যাংক অ্যাকাউন্টের তহবিল স্থানান্তর এবং বেতন প্রদান'
          },
          {
            en: 'E-commerce checkout shopping cart payment authorizations',
            bn: 'ই-কমার্স চেকআউট কেনাকাটার পেমেন্ট অনুমোদন'
          },
          {
            en: 'Database master-slave replication transactions',
            bn: 'ডাটাবেস মাস্টার-স্লেভ প্রতিলিপিকরণ লেনদেন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of GPS coordinates of a car moving at 100 km/h: is a 5-second-old replayed coordinate useful?',
          bn: 'ঘণ্টায় ১০০ কিমি গতিতে চলা গাড়ির জিপিএস অবস্থানের কথা ভাবুন: ৫ সেকেন্ড পুরনো পজিশন পুনরায় পেলে কি কোনো লাভ হবে?'
        },
        explanation: {
          en: 'In high-throughput sensor streams, freshness matters more than completeness. Dropping a frame is acceptable, but replaying stale coordinates creates confusion.',
          bn: 'উচ্চগতির সেন্সর স্ট্রিমে তথ্যের তাজাত্ব সবচেয়ে গুরুত্বপূর্ণ। একটি ফ্রেম বাদ পড়া সমস্যা নয়, তবে পুরনো স্থানাঙ্ক পুনরায় চালানো বিভ্রান্তি তৈরি করে।'
        }
      }
    ]
  }
};
