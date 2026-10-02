import type { Lesson } from '../../../lib/types';

export const StreamsAndTheGroupLesson: Lesson = {
  slug: 'streams-and-the-group',
  tech: 'redis',
  title: {
    en: 'Redis Streams: Event Sourcing, Consumer Groups & PEL',
    bn: 'Redis স্ট্রিমস: ইভেন্ট সোর্সিং, কনজিউমার গ্রুপ ও PEL'
  },
  summary: {
    en: 'Master Redis Streams and distributed event-driven messaging across 10 structured topics. Understand radix tree append-only logs and millisecond entry IDs. Append stream entries and enforce retention limits with XADD and MAXLEN. Read streams with XRANGE and non-blocking XREAD. Coordinate horizontal scaling using Consumer Groups created with XGROUP. Track in-flight deliveries with the Pending Entries List (PEL). Acknowledge successful processing with XACK. Rescue abandoned tasks from crashed workers using XAUTOCLAIM, and isolate poison messages into Dead-Letter Queues.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Redis Streams এবং ডিস্ট্রিবিউটেড ইভেন্ট-ড্রিভেন মেসেজিং আয়ত্ত করুন। রেডিক্স ট্রি অ্যাপেন্ড-অনলি লগ ও মিলিসেকেন্ড এন্ট্রি আইডি বুঝুন। XADD ও MAXLEN দিয়ে নতুন ইভেন্ট যোগ এবং সাইজ নিয়ন্ত্রণ করুন। XRANGE ও XREAD দিয়ে স্ট্রিম পড়ুন। XGROUP দিয়ে কনজিউমার গ্রুপ তৈরি করে লোড ব্যালান্স করুন। পেন্ডিং এন্ট্রি লিস্ট (PEL) দিয়ে চলমান মেসেজ ট্র্যাক করুন। XACK দিয়ে সফল প্রসেসিং নিশ্চিত করুন। XAUTOCLAIM দিয়ে ক্র্যাশ করা কর্মীর মেসেজ উদ্ধার করুন এবং ডেড-লেটার কিউ তৈরি করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'pubs-and-the-sub',
    tech: 'redis',
    title: {
      en: 'Redis Pub/Sub & Keyspace Notifications: Real-Time Event Streams',
      bn: 'Redis পাব/সাব ও কি-স্পেস নোটিফিকেশন: রিয়েল-টাইম ইভেন্ট ব্রডকাস্ট'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Append-Only Log Paradigm: Radix Trees & Event Sourcing', bn: '১. অ্যাপেন্ড-অনলি লগ প্যারাডাইম: রেডিক্স ট্রি ও ইভেন্ট সোর্সিং' } },
    {
      type: 'para',
      text: {
        en: 'When you design distributed event-driven systems, standard Lists cannot provide message replay, multi-consumer tracking, or historical offset seeking. Redis Streams implement a durable, append-only log backed by memory-dense Radix Trees. Each entry represents an immutable historical event recorded chronologically.',
        bn: 'যখন আপনি ডিস্ট্রিবিউটেড ইভেন্ট-ড্রিভেন সিস্টেম ডিজাইন করেন, তখন সাধারণ লিস্টে মেসেজ পুনরায় পড়া, একাধিক ভোক্তা ট্র্যাক করা বা নির্দিষ্ট অফসেট খোঁজার সুবিধা থাকে না। Redis Streams একটি টেকসই অ্যাপেন্ড-অনলি লগ প্রদান করে যা মেমরি-দক্ষ রেডিক্স ট্রির (Radix Tree) ওপর কাজ করে। এর প্রতিটি এন্ট্রি সময়ানুসারে সংরক্ষিত একটি অপরিবর্তনশীল ঐতিহাসিক ঘটনাকে উপস্থাপন করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `REDIS STREAM LOG ARCHITECTURE:
Entry ID: 1727352000000-0  1727352000000-1  1727352005000-0
          +--------------+  +--------------+  +--------------+
... --->  | OrderPlaced  |->| PaymentDone  |->| OrderShipped |  ---> Head
          | id: 1042     |  | id: 1042     |  | id: 1042     |
          +--------------+  +--------------+  +--------------+
               ^                 ^
               |                 |
         Consumer A Offset  Consumer B Offset (Independent Reading Pointers!)`,
      caption: {
        en: 'Redis Streams provide durable chronological logs with independent consumer read offsets.',
        bn: 'রেডিস স্ট্রিমস প্রতিটি ভোক্তার জন্য আলাদা অফসেটসহ টেকসই লগ রেকর্ড রাখে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Consumer Group & Pending Entries List (PEL) Flow', bn: 'কনজিউমার গ্রুপ ও পেন্ডিং এন্ট্রি লিস্ট (PEL) আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis Consumer Group and PEL Flow">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="140" height="100" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="70" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Redis Stream</text>
<text x="70" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">orders:events</text>
<text x="70" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Append-only Log</text>

<path d="M145,70 L205,70" stroke="#38bdf8" stroke-width="2"/>

<rect x="210" y="20" width="180" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="300" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Consumer Group</text>
<text x="300" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">XREADGROUP</text>
<text x="300" y="90" font-size="9" fill="#fbbf24" text-anchor="middle">Maintains PEL Buffer</text>

<path d="M395,50 L475,35" stroke="#10b981" stroke-width="1.5"/>
<path d="M395,90 L475,105" stroke="#10b981" stroke-width="1.5"/>

<rect x="480" y="10" width="160" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
<text x="560" y="32" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Worker Consumer 1</text>
<text x="560" y="48" font-size="9" fill="#cbd5e1" text-anchor="middle">Acks with XACK</text>

<rect x="480" y="80" width="160" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
<text x="560" y="102" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Worker Consumer 2</text>
<text x="560" y="118" font-size="9" fill="#cbd5e1" text-anchor="middle">Acks with XACK</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Appending Entries with XADD & Managing Stream Length', bn: '২. XADD দিয়ে এন্ট্রি যোগ ও স্ট্রিমের আকার নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'New events are appended to a stream using the XADD command. Redis automatically generates a unique entry ID comprising the Unix epoch millisecond timestamp and a sequence number (e.g. 1727352000000-0). To prevent unbounded memory expansion, append MAXLEN ~ 1000 to prune older entries efficiently using approximate boundaries.',
        bn: 'স্ট্রিমে নতুন ইভেন্ট যুক্ত করতে XADD কমান্ড ব্যবহৃত হয়। Redis নিজে থেকেই একটি ইউনিক এন্ট্রি আইডি তৈরি করে যার প্রথম অংশে ইউনিক্স মিলিসেকেন্ড সময় এবং দ্বিতীয় অংশে একটি ক্রমিক নম্বর থাকে (যেমন 1727352000000-0)। মেমরি যাতে লাগামহীনভাবে না বাড়ে সেজন্য MAXLEN ~ 1000 যোগ করে পুরনো ডেটা সহজে ছেঁটে ফেলা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Append an order event (auto-generate ID using *):
XADD orders:stream * orderId 1042 customer "Rahim" amount 4500 status "paid"
# Output: "1727352000000-0"

# Append event while enforcing approximate cap of 1000 items:
XADD orders:stream MAXLEN ~ 1000 * orderId 1043 customer "Nadia" amount 1200 status "paid"

# Inspecting stream size:
XLEN orders:stream
# Output: (integer) 2`,
      caption: {
        en: 'XADD auto-generates monotonically increasing IDs that guarantee strict chronological ordering.',
        bn: 'XADD স্বয়ংক্রিয়ভাবে সময়ভিত্তিক ক্রমিক আইডি তৈরি করে কঠোর সময়ক্রম নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Reading Streams: XRANGE, XREVRANGE & Blocking XREAD', bn: '৩. স্ট্রিম পড়া: XRANGE, XREVRANGE ও ব্লকিং XREAD' } },
    {
      type: 'para',
      text: {
        en: 'Applications query chronological slices using XRANGE with start and end IDs (- and + represent negative and positive infinity). To stream events in real-time, XREAD listens for entries newer than a given ID. Adding BLOCK 5000 pauses the worker connection until new entries arrive, functioning as a non-polling reactive listener.',
        bn: 'নির্দিষ্ট সময়ের ডেটা স্লাইস পড়তে XRANGE কমান্ডে শুরুর ও শেষের আইডি দেওয়া হয় (- এবং + চিহ্ন দিয়ে ঋণাত্মক ও ধনাত্মক অসীম বোঝায়)। রিয়েল-টাইমে নতুন ইভেন্ট শুনতে XREAD ব্যবহৃত হয়। এর সাথে BLOCK 5000 যুক্ত করলে নতুন ডেটা না আসা পর্যন্ত সংযোগটি শান্তভাবে অপেক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Fetch all entries from beginning to end:
XRANGE orders:stream - + COUNT 2

# Blocking real-time listener (sleeps up to 5000 ms waiting for new entries):
# The "$" symbol means: "Listen strictly for entries added after this command runs"
XREAD BLOCK 5000 STREAMS orders:stream $
# Blocks until a producer writes to orders:stream!`,
      caption: {
        en: 'XREAD with BLOCK eliminates polling loops, streaming new events reactively as they occur.',
        bn: 'ব্লকিং XREAD কোনো লুপ না চালিয়েই নতুন ডেটা আসার সাথে সাথে রিয়েল-টাইমে পড়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Consumer Groups: Horizontal Worker Distribution', bn: '৪. কনজিউমার গ্রুপ: ওয়ার্কারদের মাঝে কাজের সুষম বণ্টন' } },
    {
      type: 'para',
      text: {
        en: 'When a single worker cannot keep pace with event ingestion, Consumer Groups allow multiple parallel workers to share the workload. Created via XGROUP CREATE, each message in the stream is delivered to exactly one consumer within the group, enabling horizontal processing scale without duplicate executions.',
        bn: 'যখন একজন কর্মীর পক্ষে সব ইভেন্ট প্রসেস করা সম্ভব হয় না, তখন কনজিউমার গ্রুপ একাধিক কর্মীকে সমান্তরালভাবে কাজের চাপ ভাগ করে নিতে সাহায্য করে। XGROUP CREATE দিয়ে তৈরি এই গ্রুপের প্রতিটি মেসেজ গ্রুপের যেকোনো একজন কর্মীর কাছেই পাঠানো হয়, ফলে কোনো কাজ দ্বিতীয়বার ডুপ্লিকেট হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create a consumer group starting from the beginning of the stream (ID: 0):
# Syntax: XGROUP CREATE <stream> <groupName> <ID|0|$> [MKSTREAM]

XGROUP CREATE orders:stream orders:group 0 MKSTREAM
# Output: OK (Group ready to dispatch messages to parallel workers!)`,
      caption: {
        en: 'Consumer Groups partition stream messages across a cluster of cooperating worker nodes.',
        bn: 'কনজিউমার গ্রুপ একটি স্ট্রিমের মেসেজগুলোকে সমবায়ীদের মাঝে সুষমভাবে ভাগ করে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Dispatching Messages: XREADGROUP & Special ID ">"', bn: '৫. মেসেজ বিতরণ: XREADGROUP ও বিশেষ আইডি ">"' } },
    {
      type: 'para',
      text: {
        en: 'Workers pull assigned jobs using XREADGROUP. Passing the special ID > instructs Redis to deliver only messages that have never been delivered to any consumer in the group. If an individual consumer specifies a numerical ID instead of >, Redis returns messages previously assigned to that consumer that remain unacknowledged.',
        bn: 'কর্মীরা XREADGROUP কমান্ড দিয়ে তাদের জন্য নির্ধারিত কাজ তুলে নেয়। বিশেষ আইডি > দিলে Redis এমন মেসেজ পাঠায় যা গ্রুপের অন্য কোনো কর্মী এখনো পায়নি। আর > না দিয়ে কোনো সংখ্যাক্রমিক আইডি দিলে ওই কর্মীর কাছে আগে পাঠানো কিন্তু এখনো আন-একনলেজড থাকা মেসেজগুলো ফেরত দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Worker 1 pulls up to 2 un-delivered jobs:
XREADGROUP GROUP orders:group worker_1 COUNT 2 STREAMS orders:stream >

# Sample response:
# 1) "orders:stream"
# 2) 1) 1) "1727352000000-0"
#       2) 1) "orderId" 2) "1042" 3) "amount" 4) "4500"`,
      caption: {
        en: 'The special ID ">" guarantees non-overlapping job dispatch across active group workers.',
        bn: 'বিশেষ আইডি ">" নিশ্চিত করে যেন প্রতিটি কর্মী সম্পূর্ণ নতুন ও অবণ্টিত কাজ পায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Pending Entries List (PEL): Guaranteeing Delivery', bn: '৬. পেন্ডিং এন্ট্রি লিস্ট (PEL): ডেলিভারির নিশ্চয়তা' } },
    {
      type: 'para',
      text: {
        en: 'When a worker receives a message via XREADGROUP, the message is not deleted. Instead, Redis copies the message reference into that consumer’s Pending Entries List (PEL). The PEL tracks which consumer owns the message, when it was delivered, and how many delivery attempts have occurred.',
        bn: 'XREADGROUP দিয়ে কোনো কর্মী মেসেজ গ্রহণ করলে সেটি মুছে যায় না। বরং Redis মেসেজের রেফারেন্সটি ওই কর্মীর পেন্ডিং এন্ট্রি লিস্টে (PEL) সংরক্ষণ করে। এই PEL ট্র্যাক করে কোন কর্মী মেসেজটি নিয়েছে, কখন পাঠানো হয়েছে এবং কতবার এটি ডেলিভারি দেওয়ার চেষ্টা করা হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting unacknowledged pending messages:
XPENDING orders:stream orders:group
# Output:
# 1) (integer) 1           <- Total pending messages in group
# 2) "1727352000000-0"     <- Smallest pending ID
# 3) "1727352000000-0"     <- Greatest pending ID
# 4) 1) 1) "worker_1"      <- Consumer holding the pending job
#       2) "1"             <- Count of pending jobs held`,
      caption: {
        en: 'The PEL prevents data loss by tracking all in-flight unacknowledged jobs.',
        bn: 'PEL প্রক্রিয়াধীন সব আন-একনলেজড কাজ ট্র্যাক করে ডেটা হারানো প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Acknowledging Processing Completion: XACK', bn: '৭. কাজ সম্পন্ন নিশ্চিতকরণ: XACK' } },
    {
      type: 'para',
      text: {
        en: 'Once a worker successfully completes the business transaction (e.g. charging credit card, updating database), it calls XACK with the message ID. Redis removes the entry from the PEL, marking the event as officially acknowledged. Failing to call XACK causes the PEL to grow indefinitely, leaking server memory.',
        bn: 'কোনো কর্মী সফলভাবে কাজ শেষ করার পর (যেমন পেমেন্ট নিশ্চিত করা বা ডাটাবেস আপডেট) মেসেজ আইডি দিয়ে XACK কমান্ড পাঠায়। তখন Redis ওই এন্ট্রিটি PEL থেকে মুছে ফেলে এবং কাজটি সফল ঘোষণা করে। XACK পাঠাতে ভুলে গেলে PEL মেমরি বাড়তে বাড়তে মেমরি লিক সৃষ্টি হতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Acknowledge successful processing of order event:
XACK orders:stream orders:group "1727352000000-0"
# Output: (integer) 1 (Message cleared cleanly from PEL!)

# Verifying PEL is now empty:
XPENDING orders:stream orders:group
# Output: (integer) 0`,
      caption: {
        en: 'Invoking XACK commits the task outcome, clearing the message from the PEL.',
        bn: 'XACK পাঠানোর মাধ্যমে কাজটির সমাপ্তি নিশ্চিত হয় এবং PEL খালি হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Crash Recovery: Rescuing Stalled Tasks with XAUTOCLAIM', bn: '৮. ক্র্যাশ রিকভারি: XAUTOCLAIM দিয়ে আটকে থাকা কাজ উদ্ধার' } },
    {
      type: 'para',
      text: {
        en: 'If worker 1 crashes while processing a job, the task sits abandoned in its PEL. Surviving workers identify stalled jobs whose idle time exceeds a threshold (e.g. 60000 ms) and claim ownership using XAUTOCLAIM. This transfers the job to an active worker, guaranteeing at-least-once processing durability.',
        bn: 'কোনো কাজ করার সময় ১ নম্বর কর্মী ক্র্যাশ করলে কাজটি তার PEL-এ আটকে থাকে। অন্যান্য জীবিত কর্মীরা ৬০ সেকেন্ডের বেশি (যেমন ৬০০০০ মিলিসেকেন্ড) অলস পড়ে থাকা মেসেজগুলো XAUTOCLAIM দিয়ে নিজেদের দায়িত্বে নিয়ে নেয়। এটি কাজটি সচল কর্মীর কাছে স্থানান্তর করে নিশ্চিত প্রসেসিং রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Automatically claim messages idle for more than 60,000 milliseconds:
# Syntax: XAUTOCLAIM <stream> <group> <consumer> <minIdleTime> <startID> [COUNT count]

XAUTOCLAIM orders:stream orders:group worker_2 60000 0-0 COUNT 10
# Returns reclaimed messages re-assigned cleanly to worker_2!`,
      caption: {
        en: 'XAUTOCLAIM automates orphan recovery, preventing dead workers from losing messages.',
        bn: 'XAUTOCLAIM মৃত কর্মীর আটকে থাকা কাজ স্বয়ংক্রিয়ভাবে অন্য কর্মীকে হস্তান্তর করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Dead-Letter Queues (DLQ) & Poison Message Mitigation', bn: '৯. ডেড-লেটার কিউ (DLQ) ও ত্রুটিপূর্ণ মেসেজ ব্যবস্থাপনা' } },
    {
      type: 'para',
      text: {
        en: 'A malformed payload that triggers an unhandled exception will cause every worker to crash repeatedly, entering an infinite poison pill loop. By inspecting the delivery counter in XPENDING or XAUTOCLAIM, workers detect when an event has failed more than 5 times. The worker writes it to a Dead-Letter Queue and executes XACK to purge it from the primary pipeline.',
        bn: 'কোনো ভুল ডেটাযুক্ত মেসেজের কারণে যদি বারবার কর্মীরা ক্র্যাশ করতে থাকে, তবে একটি অনন্ত বিষাক্ত চক্র তৈরি হয়। XPENDING বা XAUTOCLAIM-এর ডেলিভারি কাউন্টার দেখে যদি বোঝা যায় কোনো কাজ ৫ বারের বেশি চেষ্টা করেও ব্যর্থ হয়েছে, তবে কর্মী এটিকে ডেড-লেটার কিউতে পাঠিয়ে মূল পাইপলাইন থেকে XACK দিয়ে সরিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Detecting poison messages in stream processing:
async function handleDeadLetter(stream, group, entryId, payload, attempts, redis) {
  if (attempts > 5) {
    console.warn("Diverting poison pill message to Dead-Letter Queue:", entryId);
    // 1. Write to DLQ for manual inspection:
    await redis.xadd("orders:dlq", "*", "originalId", entryId, "payload", JSON.stringify(payload));
    // 2. Acknowledge and drop from primary stream:
    await redis.xack(stream, group, entryId);
    return true; // Successfully diverted
  }
  return false;
}`,
      caption: {
        en: 'Dead-Letter Queues quarantine corrupted payloads to prevent cluster-wide processing loops.',
        bn: 'ডেড-লেটার কিউ ত্রুটিপূর্ণ মেসেজকে আলাদা করে পুরো ক্লাস্টার ক্র্যাশ হওয়া রোধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Production Stream Consumer in Node.js', bn: '১০. Node.js-এ প্রোডাকশন স্ট্রিম কনজিউমার তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production consumer loop utilizing ioredis with consumer group initialization, blocking reads, task acknowledgments, and auto-claim recovery.',
        bn: 'নিচে ioredis ব্যবহার করে গ্রুপ ইনিশিয়ালাইজেশন, ব্লকিং রিড, XACK কনফার্মেশন ও অটো-ক্লেম সুবিধা সমৃদ্ধ একটি পূর্ণাঙ্গ প্রোডাকশন কনজিউমার কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";
const redis = new Redis("redis://127.0.0.1:6379");

async function runStreamConsumer(workerId = "worker_alpha") {
  // 1. Ensure consumer group exists:
  try {
    await redis.xgroup("CREATE", "orders:stream", "orders:group", "$", "MKSTREAM");
  } catch (err) {
    // BUSYGROUP Consumer Group already exists; proceed safely
  }

  while (true) {
    // 2. Pull new un-delivered jobs:
    const response = await redis.xreadgroup(
      "GROUP", "orders:group", workerId,
      "BLOCK", 2000,
      "COUNT", 1,
      "STREAMS", "orders:stream", ">"
    );

    if (response) {
      const [, entries] = response[0];
      for (const [id, fields] of entries) {
        console.log("Processing order event:", id, fields);
        // 3. Acknowledge on completion:
        await redis.xack("orders:stream", "orders:group", id);
      }
    }
  }
}

console.log("Production stream consumer worker listening for events");
// Output: Production stream consumer worker listening for events`,
      caption: {
        en: 'Production Redis Stream worker combining XREADGROUP, BLOCK, and XACK.',
        bn: 'XREADGROUP, BLOCK ও XACK সমন্বয়ে তৈরি নির্ভরযোগ্য প্রোডাকশন স্ট্রিম ওয়ার্কার।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-stm-ex1',
      kind: 'predict',
      topic: 'redis: consumer group un-delivered jobs special ID',
      question: {
        en: 'Which special single-character symbol is passed to XREADGROUP to instruct Redis to deliver only messages that have never been delivered to any consumer in the group?',
        bn: 'XREADGROUP কমান্ডে কোন বিশেষ একক-অক্ষরের চিহ্নটি পাঠালে Redis এমন মেসেজ দেয় যা গ্রুপের অন্য কোনো কর্মী এখনো পায়নি?'
      },
      code: `/* Special ID for never-delivered stream messages: */
/* Special Symbol: _ */`,
      answer: '>',
      accept: ['>', 'greater than', '> symbol'],
      hint: {
        en: 'The greater-than symbol (>).',
        bn: 'গ্রেটার-দ্যান চিহ্ন (>)।'
      },
      explanation: {
        en: 'The special ID ">" tells Redis to return only new, never-before-delivered stream messages to this consumer.',
        bn: 'বিশেষ চিহ্ন ">" নির্দেশ করে যেন এই কর্মীকে সম্পূর্ণ নতুন অবণ্টিত মেসেজ দেওয়া হয়।'
      }
    },
    {
      id: 'red-stm-ex2',
      kind: 'mcq',
      topic: 'redis: message acknowledgment command',
      question: {
        en: 'Which Redis command removes a processed message ID from the consumer group Pending Entries List (PEL)?',
        bn: 'কোন Redis কমান্ডটি প্রসেস করা মেসেজ আইডিকে কনজিউমার গ্রুপের পেন্ডিং এন্ট্রি লিস্ট (PEL) থেকে সফলভাবে মুছে দেয়?'
      },
      options: [
        { en: 'XACK', bn: 'XACK' },
        { en: 'XDEL', bn: 'XDEL' },
        { en: 'XREM', bn: 'XREM' },
        { en: 'XPOP', bn: 'XPOP' }
      ],
      answer: 0,
      hint: {
        en: 'The XACK command.',
        bn: 'XACK কমান্ড।'
      },
      explanation: {
        en: 'XACK acknowledges message processing, permanently purging the message entry from the group PEL.',
        bn: 'XACK কাজ সমাপ্তির নিশ্চয়তা দিয়ে মেসেজটিকে PEL থেকে সরিয়ে দেয়।'
      }
    },
    {
      id: 'red-stm-ex3',
      kind: 'mcq',
      topic: 'redis: stream entry ID anatomy',
      question: {
        en: 'What two values compose an auto-generated Redis Stream entry ID (such as 1727352000000-0)?',
        bn: 'স্বয়ংক্রিয়ভাবে তৈরি একটি Redis Stream এন্ট্রি আইডিতে (যেমন 1727352000000-0) কোন দুটি মান থাকে?'
      },
      options: [
        { en: 'Unix epoch millisecond timestamp and a sequence counter', bn: 'ইউনিক্স মিলিসেকেন্ড টাইমস্ট্যাম্প এবং একটি সিকোয়েন্স কাউন্টার' },
        { en: 'IPv4 address and port number', bn: 'আইপি অ্যাড্রেস এবং পোর্ট নম্বর' },
        { en: 'A random UUID string and user password', bn: 'র্যান্ডম ইউআইডি এবং ইউজার পাসওয়ার্ড' },
        { en: 'Database name and collection ID', bn: 'ডাটাবেস নাম এবং কালেকশন আইডি' }
      ],
      answer: 0,
      hint: {
        en: 'Millisecond timestamp and sequence counter.',
        bn: 'মিলিসেকেন্ড সময় এবং সিকোয়েন্স কাউন্টার।'
      },
      explanation: {
        en: 'A stream ID consists of the creation time in milliseconds followed by a hyphen and an incrementing sequence counter.',
        bn: 'স্ট্রিম আইডিতে সৃষ্টির মিলিসেকেন্ড সময় এবং হাইফেনের পর একটি ক্রমিক কাউন্টার থাকে।'
      }
    }
  ],
  quiz: {
    id: 'red-stm-quiz',
    title: { en: 'Redis Streams & Consumer Groups Quiz', bn: 'Redis স্ট্রিম ও কনজিউমার গ্রুপ কুইজ' },
    questions: [
      {
        id: 'rsmq1',
        kind: 'mcq',
        topic: 'redis: pending entries list function',
        question: {
          en: 'What is the role of the Pending Entries List (PEL) in Redis Consumer Groups?',
          bn: 'Redis কনজিউমার গ্রুপে পেন্ডিং এন্ট্রি লিস্টের (PEL) মূল ভূমিকা কী?'
        },
        options: [
          { en: 'To track in-flight messages delivered to consumers that have not yet been acknowledged with XACK', bn: 'কর্মীদের কাছে পাঠানো কিন্তু এখনো XACK দিয়ে নিশ্চিত না করা চলমান মেসেজগুলো ট্র্যাক করা' },
          { en: 'To store user passwords in plaintext', bn: 'ইউজার পাসওয়ার্ড সংরক্ষণ করা' },
          { en: 'To compress images into WebP format', bn: 'ছবি কমপ্রেস করা' },
          { en: 'To replace the Linux kernel', bn: 'লিনাক্স কার্নেল প্রতিস্থাপন করা' }
        ],
        answer: 0,
        hint: {
          en: 'Tracks unacknowledged delivered messages.',
          bn: 'আন-একনলেজড মেসেজগুলো ট্র্যাক করে।'
        },
        explanation: {
          en: 'The PEL prevents message loss by maintaining records of all unacknowledged jobs until workers invoke XACK.',
          bn: 'XACK না দেওয়া পর্যন্ত PEL প্রতিটি মেসেজের হিসাব রাখে যাতে কোনো কাজ হারিয়ে না যায়।'
        }
      },
      {
        id: 'rsmq2',
        kind: 'mcq',
        topic: 'redis: stalled message claiming command',
        question: {
          en: 'Which modern command rescues stalled, idle messages from dead or crashed consumers and reassigns them to active workers?',
          bn: 'মৃত বা ক্র্যাশ করা কর্মীর আটকে থাকা অলস মেসেজ উদ্ধার করে সক্রিয় কর্মীর কাছে হস্তান্তর করতে কোন আধুনিক কমান্ড ব্যবহৃত হয়?'
        },
        options: [
          { en: 'XAUTOCLAIM', bn: 'XAUTOCLAIM' },
          { en: 'XRESTORE', bn: 'XRESTORE' },
          { en: 'XRECOVER', bn: 'XRECOVER' },
          { en: 'XSTEAL', bn: 'XSTEAL' }
        ],
        answer: 0,
        hint: {
          en: 'XAUTOCLAIM command.',
          bn: 'XAUTOCLAIM কমান্ড।'
        },
        explanation: {
          en: 'XAUTOCLAIM scans the PEL for entries exceeding minimum idle time and transfers them to the invoking consumer in a single step.',
          bn: 'XAUTOCLAIM নির্দিষ্ট সময়ের বেশি অলস পড়ে থাকা মেসেজ খুঁজে সাথে সাথে নতুন কর্মীকে বুঝিয়ে দেয়।'
        }
      },
      {
        id: 'rsmq3',
        kind: 'mcq',
        topic: 'redis: stream retention limit parameter',
        question: {
          en: 'Which argument is passed to XADD to enforce an approximate cap on the total number of retained stream events?',
          bn: 'স্ট্রিমে মোট ইভেন্টের সংখ্যা নির্দিষ্ট সীমায় বেঁধে রাখতে XADD-এর সাথে কোন আর্গুমেন্টটি ব্যবহার করা হয়?'
        },
        options: [
          { en: 'MAXLEN ~ <threshold>', bn: 'MAXLEN ~ <সীমা>' },
          { en: 'LIMIT <count>', bn: 'LIMIT <গণনা>' },
          { en: 'EXPIRE <seconds>', bn: 'EXPIRE <সেকেন্ড>' },
          { en: 'PURGE_AFTER <number>', bn: 'PURGE_AFTER <সংখ্যা>' }
        ],
        answer: 0,
        hint: {
          en: 'MAXLEN ~ parameter.',
          bn: 'MAXLEN ~ প্যারামিটার।'
        },
        explanation: {
          en: 'MAXLEN ~ caps the stream length using approximate trimming, freeing memory without node splitting overhead.',
          bn: 'MAXLEN ~ আনুমানিক সীমা ব্যবহার করে পুরনো ডেটা সহজে মুছে মেমরি নিয়ন্ত্রণে রাখে।'
        }
      },
      {
        id: 'rsmq4',
        kind: 'mcq',
        topic: 'redis: poison pill message handling',
        question: {
          en: 'What architectural solution handles malformed stream payloads that cause repeated worker crashes beyond retry thresholds?',
          bn: 'বারবার চেষ্টার পরও ক্র্যাশ ঘটাতে থাকা ত্রুটিপূর্ণ বিষাক্ত মেসেজ মোকাবেলায় কোন স্থাপত্য সমাধানটি ব্যবহার করা হয়?'
        },
        options: [
          { en: 'Routing the failed event to a Dead-Letter Queue (DLQ) and acknowledging it with XACK to unblock the pipeline', bn: 'ব্যর্থ ইভেন্টটিকে একটি ডেড-লেটার কিউতে (DLQ) সরিয়ে নিয়ে XACK দিয়ে মূল পাইপলাইন সচল রাখা' },
          { en: 'Shutting down the entire Redis server indefinitely', bn: 'সার্ভার চিরতরে বন্ধ করে দেওয়া' },
          { en: 'Deleting all streams across the database', bn: 'সব স্ট্রিম মুছে ফেলা' },
          { en: 'Retrying the exact same job endlessly in a tight loop', bn: 'একই কাজ লুপে বারবার চেষ্টা করা' }
        ],
        answer: 0,
        hint: {
          en: 'Route to Dead-Letter Queue and call XACK.',
          bn: 'ডেড-লেটার কিউতে সরিয়ে XACK পাঠান।'
        },
        explanation: {
          en: 'Diverting poison pill messages to a Dead-Letter Queue isolates corrupted records, allowing workers to proceed safely.',
          bn: 'ডেড-লেটার কিউ ত্রুটিপূর্ণ ডেটাকে আলাদা করে রাখে যাতে পাইপলাইনের অন্য সব কাজ নিরাপদে চলতে পারে।'
        }
      }
    ]
  }
};
