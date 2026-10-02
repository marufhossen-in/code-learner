import type { Lesson } from '../../../lib/types';

export const PubsAndTheSubLesson: Lesson = {
  slug: 'pubs-and-the-sub',
  tech: 'redis',
  title: {
    en: 'Redis Pub/Sub & Keyspace Notifications: Real-Time Broadcasts',
    bn: 'Redis পাব/সাব ও কি-স্পেস নোটিফিকেশন: রিয়েল-টাইম ব্রডকাস্ট'
  },
  summary: {
    en: 'Master Redis real-time broadcast messaging and reactive notifications across 10 structured topics. Understand the fire-and-forget fan-out publish/subscribe model. Subscribe to channels using SUBSCRIBE and pattern-match with PSUBSCRIBE. Leverage modern sharded pub/sub via SPUBLISH to prevent cluster saturation. Manage client output buffer ceilings. Enable reactive keyspace notifications using notify-keyspace-events KEx. Intercept expiration events with __keyevent@0__:expired, and build production live chat dispatchers in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Redis রিয়েল-টাইম ব্রডকাস্ট মেসেজিং এবং রিঅ্যাক্টিভ নোটিফিকেশন আয়ত্ত করুন। ফায়ার-অ্যান্ড-ফরগেট ফ্যান-আউট পাব/সাব মডেলের গতি জানুন। SUBSCRIBE ও প্যাটার্নভিত্তিক PSUBSCRIBE দিয়ে চ্যানেল শুনুন। ক্লাস্টার ট্রাফিক অপচয় রোধে আধুনিক শার্ডেড পাব/সাব (SPUBLISH) ব্যবহার করুন। ক্লায়েন্ট বাফার সীমা নিয়ন্ত্রণ করুন। notify-keyspace-events KEx দিয়ে কি-স্পেস নোটিফিকেশন সক্রিয় করুন। __keyevent@0__:expired দিয়ে কি মেয়াদের ইভেন্ট ধরুন এবং Node.js-এ লাইভ চ্যাট ব্রডকাস্ট তৈরি করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'persists-and-the-snap',
    tech: 'redis',
    title: {
      en: 'Redis Persistence: RDB Snapshots, AOF Logs & Durability',
      bn: 'Redis পারসিস্টেন্স: RDB স্ন্যাপশট, AOF লগ ও স্থায়িত্ব'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Publish/Subscribe Model: Decoupled Fan-Out Messaging', bn: '১. পাবলিশ/সাবস্ক্রাইব মডেল: মুক্ত ফ্যান-আউট মেসেজিং' } },
    {
      type: 'para',
      text: {
        en: 'When you build real-time collaborative applications like live chat, multiplayer notifications, or financial tickers, direct point-to-point connections create spaghetti architecture. The Redis Pub/Sub engine decouples publishers from subscribers: publishers push messages to a named channel without knowing who (or how many) clients are listening.',
        bn: 'যখন আপনি লাইভ চ্যাট, মাল্টিপ্লেয়ার নোটিফিকেশন বা শেয়ার বাজারের মতো রিয়েল-টাইম অ্যাপ্লিকেশন তৈরি করেন, তখন সরাসরি এক-থেকে-এক সংযোগ ব্যবস্থায় জটিলতা দেখা দেয়। Redis পাব/সাব ইঞ্জিন মেসেজ প্রেরক (Publisher) এবং প্রাপকদের (Subscriber) সম্পূর্ণ স্বাধীন রাখে: প্রেরক নির্দিষ্ট চ্যানেলে মেসেজ পাঠায় এবং কতজন গ্রাহক শুনছে তা জানার প্রয়োজন হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `FAN-OUT BROADCAST TOPOLOGY:
                      [Publisher Service]
                               |
                   PUBLISH chat:room_99 "Hello!"
                               v
                    [Redis Channel: chat:room_99]
                    /          |          \\
                   v           v           v
             [Subscriber A] [Subscriber B] [Subscriber C]
             (Web Browser)  (Mobile App)   (Bot Logger)`,
      caption: {
        en: 'A single published message is instantaneously broadcast to all connected channel listeners.',
        bn: 'একটিমাত্র প্রকাশিত মেসেজ সাথে সাথে ওই চ্যানেলে যুক্ত সব গ্রাহকের কাছে পৌঁছে যায়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Pub/Sub Broadcast Flow & Pattern Subscriptions', bn: 'পাব/সাব ব্রডকাস্ট প্রবাহ ও প্যাটার্ন সাবস্ক্রিপশন' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis Pub Sub and pattern matching flow">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="150" height="90" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="75" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Publisher</text>
<text x="75" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">PUBLISH</text>
<text x="75" y="90" font-size="10" fill="#4ade80" text-anchor="middle">news:sports:live</text>

<path d="M155,65 L235,65" stroke="#38bdf8" stroke-width="2"/>

<rect x="240" y="20" width="190" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="335" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Redis Channel Router</text>
<text x="335" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Exact & Pattern Matches</text>
<text x="335" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Zero Disk Buffer</text>

<path d="M435,45 L505,30" stroke="#10b981" stroke-width="1.5"/>
<path d="M435,85 L505,100" stroke="#10b981" stroke-width="1.5"/>

<rect x="510" y="10" width="150" height="45" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
<text x="585" y="28" font-size="9" font-weight="700" fill="#fbbf24" text-anchor="middle">Exact Subscriber</text>
<text x="585" y="42" font-size="8" fill="#cbd5e1" text-anchor="middle">SUBSCRIBE news:sports:live</text>

<rect x="510" y="75" width="150" height="45" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
<text x="585" y="93" font-size="9" font-weight="700" fill="#fbbf24" text-anchor="middle">Pattern Subscriber</text>
<text x="585" y="107" font-size="8" fill="#cbd5e1" text-anchor="middle">PSUBSCRIBE news:*</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Core Messaging Commands: PUBLISH, SUBSCRIBE & UNSUBSCRIBE', bn: '২. মূল মেসেজিং কমান্ড: PUBLISH, SUBSCRIBE ও UNSUBSCRIBE' } },
    {
      type: 'para',
      text: {
        en: 'Interacting with Pub/Sub involves two simple primitives. The subscriber issues SUBSCRIBE channel_name, transforming that connection into a dedicated listening mode that accepts only subscription commands. The publisher calls PUBLISH channel_name message from any standard connection, returning the integer count of active recipients.',
        bn: 'পাব/সাব পরিচালনায় দুটি সহজ কমান্ড কাজ করে। গ্রাহক SUBSCRIBE channel_name চালালে সংযোগটি একটি বিশেষ লিসেনিং মোডে চলে যায় যেখানে শুধু সাবস্ক্রিপশন সংক্রান্ত কমান্ড চলে। আর প্রেরক যেকোনো সাধারণ কানেকশন থেকে PUBLISH channel_name message পাঠালে কতজন সক্রিয় গ্রাহক মেসেজটি পেয়েছে সেই সংখ্যাটি সাথে সাথে ফেরত আসে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Terminal 1: Subscribe to room:
SUBSCRIBE chat:general
# Output:
# 1) "subscribe"
# 2) "chat:general"
# 3) (integer) 1

# Terminal 2: Broadcast a message:
PUBLISH chat:general "Hello everyone!"
# Output: (integer) 1 (Number of clients that received the broadcast!)`,
      caption: {
        en: 'Publish returns the count of active subscribers that received the delivery.',
        bn: 'পাবলিশ কমান্ড সরাসরি জানায় কতজন সক্রিয় শ্রোতা মেসেজটি গ্রহণ করেছে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Pattern-Based Subscriptions: Wildcard Matching with PSUBSCRIBE', bn: '৩. প্যাটার্নভিত্তিক সাবস্ক্রিপশন: ওয়াইল্ডকার্ড ম্যাচিং' } },
    {
      type: 'para',
      text: {
        en: 'Applications frequently need to monitor entire groups of channels without maintaining individual subscriptions. The PSUBSCRIBE command accepts glob-style patterns using wildcards. For example, subscribing to orders:*:status captures events emitted across orders:101:status, orders:202:status, and all other order IDs dynamically.',
        bn: 'প্রায়ই প্রতিটি চ্যানেল আলাদাভাবে সাবস্ক্রাইব না করে সম্পূর্ণ একটি গ্রুপের সব চ্যানেল একসাথে শোনার প্রয়োজন হয়। PSUBSCRIBE কমান্ড ওয়াইল্ডকার্ড (*) প্যাটার্ন সমর্থন করে। যেমন orders:*:status শুনলে orders:101:status, orders:202:status সহ যেকোনো অর্ডারের ইভেন্ট নিজে থেকেই গ্রাহকের কাছে চলে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Listen to all regional weather alerts using glob pattern:
PSUBSCRIBE alerts:weather:*

# Sample received message format:
# 1) "pmessage"             <- Indicates pattern match
# 2) "alerts:weather:*"     <- Subscribed pattern
# 3) "alerts:weather:dhaka" <- Actual triggering channel
# 4) "Severe thunderstorm warning"`,
      caption: {
        en: 'Pattern matching captures events across dynamically generated channel namespaces.',
        bn: 'প্যাটার্ন ম্যাচিং স্বয়ংক্রিয়ভাবে তৈরি হওয়া শত শত ডায়নামিক চ্যানেল একবারে পর্যবেক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Sharded Pub/Sub in Redis 7+: SSUBSCRIBE & SPUBLISH', bn: '৪. Redis ৭+ ভার্সনে শার্ডেড পাব/সাব: SSUBSCRIBE ও SPUBLISH' } },
    {
      type: 'para',
      text: {
        en: 'In legacy Redis Clusters, standard PUBLISH commands were broadcast across every single node in the entire cluster, creating massive inter-node network saturation. Redis 7 introduced Sharded Pub/Sub (SSUBSCRIBE and SPUBLISH): messages are hashed to a specific cluster slot and routed strictly to the shard hosting that channel.',
        bn: 'পুরনো Redis ক্লাস্টারে সাধারণ PUBLISH কমান্ড পুরো ক্লাস্টারের প্রতিটি নোডে ব্রডকাস্ট হতো, ফলে সার্ভারগুলোর নিজেদের মধ্যে অতিরিক্ত ট্রাফিকের অপচয় ঘটত। Redis ৭ ভার্সনে শার্ডেড পাব/সাব (SSUBSCRIBE ও SPUBLISH) চালু হয়: এখানে চ্যানেলের নামের হ্যাশ বের করে মেসেজটি কেবল সেই নির্দিষ্ট শার্ড নোডেই পাঠানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Sharded Pub/Sub (Restricts message to the target cluster slot shard):
SSUBSCRIBE shard_channel:orders

# Publish strictly within matching shard without cluster-wide broadcast:
SPUBLISH shard_channel:orders "New order arrived"
# Output: (integer) 1`,
      caption: {
        en: 'Sharded Pub/Sub eliminates inter-node broadcast storms in high-throughput clusters.',
        bn: 'শার্ডেড পাব/সাব ক্লাস্টার সার্ভারগুলোর মাঝে অপ্রয়োজনীয় নেটওয়ার্ক ট্রাফিক অপচয় দূর করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Fire-and-Forget Limitations: Buffer Limits & Zero Persistence', bn: '৫. ফায়ার-অ্যান্ড-ফরগেট সীমাবদ্ধতা: বাফার সীমা ও স্থায়িত্বহীনতা' } },
    {
      type: 'para',
      text: {
        en: 'Redis Pub/Sub is strictly fire-and-forget: messages are never persisted to disk or buffered in RAM for offline clients. If a subscriber drops network connectivity for 100 milliseconds, all messages published during that outage are lost permanently. Furthermore, slow subscribers that fail to read buffers fast enough are disconnected via client-output-buffer-limit pubsub.',
        bn: 'Redis পাব/সাব সম্পূর্ণভাবে ফায়ার-অ্যান্ড-ফরগেট নীতিতে চলে: অফলাইন ক্লায়েন্টের জন্য মেসেজ কখনো ডিস্কে বা মেমরিতে জমা রাখা হয় না। কোনো গ্রাহক ১০০ মিলিসেকেন্ডের জন্যও বিচ্ছিন্ন হলে ওই সময়ের সব মেসেজ চিরতরে হারিয়ে যায়। এছাড়া ধীরগতির গ্রাহকের বাফার উপচে পড়লে client-output-buffer-limit pubsub নিয়মে সংযোগ বিচ্ছিন্ন করে দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Configuration inside redis.conf protecting memory from slow consumers:
# client-output-buffer-limit pubsub <hard-limit> <soft-limit> <soft-seconds>
client-output-buffer-limit pubsub 32mb 8mb 60

# If a subscriber output buffer exceeds 32 MB immediately,
# OR stays above 8 MB for 60 seconds, Redis terminates the client connection!`,
      caption: {
        en: 'Buffer limits prevent slow or hung subscribers from consuming infinite server RAM.',
        bn: 'বাফার সীমা নিশ্চিত করে ধীরগতির ক্লায়েন্ট যেন সার্ভারের সম্পূর্ণ র‍্যাম গ্রাস না করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Keyspace Notifications Architecture: Reactive Database Triggers', bn: '৬. কি-স্পেস নোটিফিকেশন আর্কিটেকচার: রিঅ্যাক্টিভ ডাটাবেস ট্রিগার' } },
    {
      type: 'para',
      text: {
        en: 'Keyspace Notifications allow clients to subscribe to Pub/Sub channels that broadcast internal database events in real-time. Whenever a key is modified, deleted, or expired, Redis emits an event notification. This transforms Redis into a reactive database, enabling event-driven cache invalidation and background webhooks.',
        bn: 'কি-স্পেস নোটিফিকেশন গ্রাহকদের এমন বিশেষ চ্যানেলে যুক্ত করে যা ডাটাবেসের অভ্যন্তরীণ পরিবর্তনগুলো রিয়েল-টাইমে জানিয়ে দেয়। যখনই কোনো কি আপডেট, ডিলিট বা মেয়াদোত্তীর্ণ হয়, Redis নিজে থেকেই একটি ইভেন্ট নোটিফিকেশন পাঠায়। এর ফলে Redis একটি রিঅ্যাক্টিভ ডাটাবেসে রূপ নেয় এবং ক্যাশ সিঙ্ক্রোনাইজেশন সহজ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `KEYSPACE CHANNELS DUALITY:
1. Keyspace Channel (Targeted at the key):
   __keyspace@0__:user:101 -> Emits operation: "set", "del", "expired"

2. Keyevent Channel (Targeted at the event):
   __keyevent@0__:expired  -> Emits the affected key: "user:101"`,
      caption: {
        en: 'Keyspace channels group by key name, while Keyevent channels group by operation type.',
        bn: 'কি-স্পেস চ্যানেল কি-র নাম ধরে এবং কি-ইভেন্ট চ্যানেল অপারেশনের ধরন ধরে মেসেজ দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Enabling Notifications with notify-keyspace-events', bn: '৭. notify-keyspace-events দিয়ে নোটিফিকেশন চালু করা' } },
    {
      type: 'para',
      text: {
        en: 'By default, keyspace notifications are disabled to save CPU cycles. Administrators enable them via notify-keyspace-events in redis.conf or online via CONFIG SET. Specifying KEx activates Keyevent notifications (E) for generic key events (g), string operations ($), and expiration events (x).',
        bn: 'প্রসেসর সাশ্রয়ের জন্য ডিফল্টভাবে কি-স্পেস নোটিফিকেশন বন্ধ থাকে। অ্যাডমিনরা redis.conf ফাইলে বা CONFIG SET দিয়ে notify-keyspace-events চালু করেন। KEx কনফিগারেশন দিলে সাধারণ কি-র পরিবর্তন এবং এক্সপায়ারি ইভেন্টগুলোর (x) জন্য স্বয়ংক্রিয় নোটিফিকেশন সক্রিয় হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Enable Keyspace and Keyevent notifications for Expiration events:
CONFIG SET notify-keyspace-events "KEx"

# Configuration options:
# K : Keyspace events (__keyspace@<db>__)
# E : Keyevent events (__keyevent@<db>__)
# x : Expired events (Events generated every time a key expires)
# $ : String commands`,
      caption: {
        en: 'The notify-keyspace-events string activates specific event categories selectively.',
        bn: 'notify-keyspace-events স্ট্রিং নির্দিষ্ট ক্যাটাগরির নোটিফিকেশনগুলো চালু করে দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Intercepting Expiration Events: __keyevent@0__:expired', bn: '৮. মেয়াদের ইভেন্ট ধরা: __keyevent@0__:expired' } },
    {
      type: 'para',
      text: {
        en: 'Once KEx is enabled, clients subscribe to the special channel __keyevent@0__:expired (where 0 is database index 0). Whenever a volatile key expires (via active sampling or passive access), Redis publishes the expired key name to this channel, allowing background workers to execute cleanup logic or synchronize secondary databases.',
        bn: 'KEx চালু করার পর ক্লায়েন্টরা __keyevent@0__:expired চ্যানেলে সাবস্ক্রাইব করে (০ হলো ডাটাবেস ইনডেক্স ০)। যখনই কোনো কি-র মেয়াদ শেষ হয়, Redis সাথে সাথে ওই কি-র নাম এই চ্যানেলে পাবলিশ করে। এর ফলে ব্যাকগ্রাউন্ড কর্মীরা সাথে সাথে পুরনো ডেটা পরিষ্কার বা সেকেন্ডারি ডাটাবেস আপডেট করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Terminal 1: Subscribe to expired events channel:
SUBSCRIBE __keyevent@0__:expired

# Terminal 2: Set a key that expires in 2 seconds:
SET order:draft_99 "in_progress" EX 2

# Output in Terminal 1 exactly 2 seconds later:
# 1) "message"
# 2) "__keyevent@0__:expired"
# 3) "order:draft_99" (The expired key name is delivered instantly!)`,
      caption: {
        en: 'Listening to expired events provides asynchronous triggers when temporary data times out.',
        bn: 'মেয়াদোত্তীর্ণ ইভেন্ট শুনে কোনো ডেটার মেয়াদ শেষ হওয়ামাত্র পরবর্তী কাজ শুরু করা যায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Pub/Sub vs Lists vs Streams: The Messaging Landscape', bn: '৯. পাব/সাব বনাম লিস্ট বনাম স্ট্রিম: তুলনামূলক বিশ্লেষণ' } },
    {
      type: 'para',
      text: {
        en: 'Understanding when to deploy Pub/Sub versus Lists or Streams prevents major architectural blunders: Use Pub/Sub for ephemeral live broadcasts where historic replay is unneeded (chat rooms, live dashboards). Use Lists for worker task queues where each job must be processed by one worker. Use Streams when message durability, replay, and consumer groups are mandatory.',
        bn: 'কখন পাব/সাব আর কখন লিস্ট বা স্ট্রিম ব্যবহার করবেন তা জানা স্থাপত্য ভুলের হাত থেকে বাঁচায়: যখন তাৎক্ষণিক লাইভ ব্রডকাস্ট দরকার কিন্তু ডেটা সেভ রাখার প্রয়োজন নেই (যেমন লাইভ চ্যাট বা রিয়েল-টাইম ড্যাশবোর্ড) তখন পাব/সাব বেছে নিন। সাধারণ কর্মী কিউয়ের জন্য লিস্ট এবং টেকসই ইভেন্ট লগ ও রিপ্লের জন্য স্ট্রিম ব্যবহার করুন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MESSAGING COMPARISON:
+-------------------+---------------------+---------------------+---------------------+
| Architectural Facet| Redis Pub/Sub       | Redis Lists         | Redis Streams       |
+-------------------+---------------------+---------------------+---------------------+
| Durability        | None (Transient)    | In-Memory Queue     | Durable Append Log  |
| Consumers         | All Active (Fan-out)| Exactly One Worker  | Consumer Groups     |
| Offline Delivery  | No (Dropped)        | Yes (Waits in RAM)  | Yes (Replayable)    |
| Message Replay    | Impossible          | Impossible          | Supported (XRANGE)  |
| Memory Overhead   | Zero Storage        | O(N) queued items   | O(N) stream items   |
+-------------------+---------------------+---------------------+---------------------+`,
      caption: {
        en: 'Pub/Sub delivers zero memory storage overhead at the cost of zero message durability.',
        bn: 'পাব/সাব কোনো মেমরি অপচয় ছাড়াই কাজ করে তবে এতে মেসেজ সংরক্ষণের সুযোগ থাকে না।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Live Chat Broadcaster in Node.js', bn: '১০. Node.js-এ লাইভ চ্যাট ব্রডকাস্টার তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Because a Redis connection entered into subscriber mode cannot issue standard data commands, production architectures maintain two separate client instances: one dedicated to publishing, and one dedicated to subscribing.',
        bn: 'সাবস্ক্রাইব মোডে থাকা কানেকশনে সাধারণ ডেটা কমান্ড চালানো যায় না বলে প্রোডাকশন আর্কিটেকচারে দুটি আলাদা ক্লায়েন্ট তৈরি করা হয়: একটি মেসেজ পাঠানোর জন্য এবং অন্যটি মেসেজ শোনার জন্য।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";

// Two independent client connections:
const publisher = new Redis("redis://127.0.0.1:6379");
const subscriber = new Redis("redis://127.0.0.1:6379");

// 1. Subscribe to chat channel:
await subscriber.subscribe("chat:global");

subscriber.on("message", (channel, message) => {
  console.log(\`Received broadcast on [\${channel}]: \${message}\`);
});

// 2. Publish message from separate client:
const listenersCount = await publisher.publish("chat:global", "Welcome to live chat!");
console.log("Broadcast received by active clients:", listenersCount);
// Output: Broadcast received by active clients: 1`,
      caption: {
        en: 'A production Pub/Sub pattern separating dedicated subscriber and publisher connections.',
        bn: 'একটি প্রোডাকশন পাব/সাব প্যাটার্ন যা পৃথক প্রেরক ও গ্রাহক সংযোগ নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-pub-ex1',
      kind: 'predict',
      topic: 'redis: publish return integer value',
      question: {
        en: 'What does the integer return value of the Redis PUBLISH command represent?',
        bn: 'Redis PUBLISH কমান্ড চালানোর পর প্রাপ্ত পূর্ণসংখ্যার মানটি কী নির্দেশ করে?'
      },
      code: `/* Return value of PUBLISH command: */
/* PUBLISH chat "hi" -> (integer) _ */`,
      answer: 'count',
      accept: ['count', 'subscribers', 'number of clients', 'recipients'],
      hint: {
        en: 'The count of clients that received the message.',
        bn: 'মেসেজটি গ্রহণ করা সক্রিয় গ্রাহকের সংখ্যা।'
      },
      explanation: {
        en: 'PUBLISH returns the integer count of active clients that were subscribed to the channel and received the broadcast.',
        bn: 'PUBLISH কমান্ড কতজন সক্রিয় গ্রাহক মেসেজটি গ্রহণ করেছে তার সংখ্যা ফেরত দেয়।'
      }
    },
    {
      id: 'red-pub-ex2',
      kind: 'mcq',
      topic: 'redis: pattern subscribe command',
      question: {
        en: 'Which command allows clients to subscribe to multiple channels matching a wildcard pattern (such as news:*)?',
        bn: 'ওয়াইল্ডকার্ড প্যাটার্ন মিলিয়ে একসাথে একাধিক চ্যানেলে সাবস্ক্রাইব করতে কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'PSUBSCRIBE', bn: 'PSUBSCRIBE' },
        { en: 'SUBSCRIBE', bn: 'SUBSCRIBE' },
        { en: 'SCAN', bn: 'SCAN' },
        { en: 'LISTEN', bn: 'LISTEN' }
      ],
      answer: 0,
      hint: {
        en: 'The PSUBSCRIBE command.',
        bn: 'PSUBSCRIBE কমান্ড।'
      },
      explanation: {
        en: 'PSUBSCRIBE matches channel names using glob-style wildcards, dispatching messages matching the pattern.',
        bn: 'PSUBSCRIBE ওয়াইল্ডকার্ড ব্যবহার করে প্যাটার্ন মিলে এমন সব চ্যানেলের মেসেজ নিয়ে আসে।'
      }
    },
    {
      id: 'red-pub-ex3',
      kind: 'mcq',
      topic: 'redis: offline subscriber message durability',
      question: {
        en: 'What happens to messages published to a Redis Pub/Sub channel while a subscriber client is temporarily disconnected?',
        bn: 'কোনো গ্রাহক সাময়িকভাবে অফলাইনে থাকা অবস্থায় একটি Redis পাব/সাব চ্যানেলে মেসেজ পাঠানো হলে কী ঘটে?'
      },
      options: [
        { en: 'The messages are permanently lost for that subscriber because Pub/Sub provides zero message buffering or persistence', bn: 'ওই গ্রাহকের জন্য মেসেজগুলো চিরতরে হারিয়ে যায় কারণ পাব/সাব কোনো ডেটা সেভ বা বাফার করে রাখে না' },
        { en: 'They are saved to a hard drive and replayed when the client reconnects', bn: 'হার্ডডিস্কে সেভ থাকে এবং পরে পুনরায় চালানো হয়' },
        { en: 'The server crashes with an error', bn: 'সার্ভার ক্র্যাশ করে' },
        { en: 'They are converted to SMS text messages', bn: 'এসএমএস হিসেবে পাঠানো হয়' }
      ],
      answer: 0,
      hint: {
        en: 'Messages are lost because Pub/Sub is fire-and-forget.',
        bn: 'পাব/সাব ফায়ার-অ্যান্ড-ফরগেট হওয়ায় মেসেজ হারিয়ে যায়।'
      },
      explanation: {
        en: 'Pub/Sub is purely fire-and-forget; Redis delivers only to currently connected sockets without buffering. Use Streams if replay is required.',
        bn: 'পাব/সাব কোনো বাফার রাখে না, তাই অফলাইনে থাকা গ্রাহকদের জন্য মেসেজ সাথে সাথে হারিয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'red-pub-quiz',
    title: { en: 'Redis Pub/Sub & Keyspace Notifications Quiz', bn: 'Redis পাব/সাব ও কি-স্পেস নোটিফিকেশন কুইজ' },
    questions: [
      {
        id: 'rpkq1',
        kind: 'mcq',
        topic: 'redis: keyspace notification configuration parameter',
        question: {
          en: 'Which configuration parameter must be enabled in Redis to activate reactive keyspace and keyevent notifications?',
          bn: 'রিঅ্যাক্টিভ কি-স্পেস এবং কি-ইভেন্ট নোটিফিকেশন চালু করতে Redis-এ কোন কনফিগারেশন প্যারামিটারটি সক্রিয় করতে হয়?'
        },
        options: [
          { en: 'notify-keyspace-events', bn: 'notify-keyspace-events' },
          { en: 'enable-pubsub-streams', bn: 'enable-pubsub-streams' },
          { en: 'maxmemory-eviction-notify', bn: 'maxmemory-eviction-notify' },
          { en: 'event-driven-redis', bn: 'event-driven-redis' }
        ],
        answer: 0,
        hint: {
          en: 'notify-keyspace-events parameter.',
          bn: 'notify-keyspace-events প্যারামিটার।'
        },
        explanation: {
          en: 'Setting notify-keyspace-events (e.g. to KEx) tells Redis to emit Pub/Sub events for database mutations and key expirations.',
          bn: 'notify-keyspace-events প্যারামিটার চালু করলে ডেটা পরিবর্তন বা মেয়াদের নোটিফিকেশন পাওয়া যায়।'
        }
      },
      {
        id: 'rpkq2',
        kind: 'mcq',
        topic: 'redis: sharded pubsub benefit',
        question: {
          en: 'What architectural problem does Sharded Pub/Sub (SPUBLISH / SSUBSCRIBE in Redis 7) solve in clustered deployments?',
          bn: 'ক্লাস্টার সার্ভারে শার্ডেড পাব/সাব (Redis ৭-এ SPUBLISH / SSUBSCRIBE) কোন স্থাপত্য সমস্যা সমাধান করে?'
        },
        options: [
          { en: 'It limits message routing strictly to the single cluster shard holding the channel, eliminating cluster-wide broadcast traffic storms', bn: 'মেসেজটি পুরো ক্লাস্টারে না ছড়িয়ে কেবল ওই চ্যানেলের নির্দিষ্ট শার্ডে সীমাবদ্ধ রাখে, ফলে ক্লাস্টারজুড়ে ট্রাফিকের ঝড় দূর হয়' },
          { en: 'It makes all messages permanent on magnetic tape', bn: 'সব মেসেজ স্থায়ী করে' },
          { en: 'It deletes expired passwords automatically', bn: 'পাসওয়ার্ড মুছে ফেলে' },
          { en: 'It allows Redis to run without RAM', bn: 'র‍্যাম ছাড়া রেডিস চালায়' }
        ],
        answer: 0,
        hint: {
          en: 'Eliminates cluster-wide broadcast storms.',
          bn: 'ক্লাস্টারজুড়ে ব্রডকাস্ট অপচয় রোধ করে।'
        },
        explanation: {
          en: 'Legacy Pub/Sub broadcasts every message to all nodes in a cluster. Sharded Pub/Sub binds channels to hash slots, preserving cluster bandwidth.',
          bn: 'শার্ডেড পাব/সাব পুরো ক্লাস্টারে মেসেজ না পাঠিয়ে নির্দিষ্ট স্লটে পাঠায়, ফলে ব্যান্ডের অপচয় রোধ হয়।'
        }
      },
      {
        id: 'rpkq3',
        kind: 'mcq',
        topic: 'redis: expired event channel name',
        question: {
          en: 'What is the channel name for intercepting key expiration events in the default database when keyevent notifications are enabled?',
          bn: 'ডিফল্ট ডাটাবেসে কি মেয়াদের ইভেন্টগুলো ধরার জন্য বিশেষ চ্যানেলটির নাম কী?'
        },
        options: [
          { en: '__keyevent@0__:expired', bn: '__keyevent@0__:expired' },
          { en: '__expired_keys__', bn: '__expired_keys__' },
          { en: 'sys:events:ttl', bn: 'sys:events:ttl' },
          { en: 'redis:timeout:channel', bn: 'redis:timeout:channel' }
        ],
        answer: 0,
        hint: {
          en: '__keyevent@0__:expired channel.',
          bn: '__keyevent@0__:expired চ্যানেল।'
        },
        explanation: {
          en: 'When keyevent notifications are active, Redis broadcasts the names of expired keys to __keyevent@<db>__:expired.',
          bn: '__keyevent@0__:expired চ্যানেলে মেয়াদ শেষ হওয়া কি-গুলোর নাম স্বয়ংক্রিয়ভাবে পাবলিশ হয়।'
        }
      },
      {
        id: 'rpkq4',
        kind: 'mcq',
        topic: 'redis: subscriber connection limitation',
        question: {
          en: 'Why must client applications maintain two separate Redis connections when implementing a Pub/Sub service?',
          bn: 'পাব/সাব সার্ভিস তৈরির সময় ক্লায়েন্ট অ্যাপ্লিকেশনকে কেন দুটি আলাদা Redis সংযোগ বজায় রাখতে হয়?'
        },
        options: [
          { en: 'Because once a connection enters subscriber mode, it can only send subscription commands and cannot execute regular data operations', bn: 'কারণ কোনো কানেকশন একবার সাবস্ক্রাইবার মোডে চলে গেলে তাতে আর সাধারণ ডেটা কমান্ড চালানো যায় না' },
          { en: 'Because Redis crashes if one connection sends multiple commands concurrently', bn: 'কারণ একই কানেকশনে একাধিক কমান্ড সমান্তরালে পাঠালে সার্ভার ক্র্যাশ করে' },
          { en: 'To double the download speed of web pages', bn: 'ডাউনলোড স্পিড দ্বিগুণ করার জন্য' },
          { en: 'Because one connection is for Python and the other is for Java', bn: 'একটি পাইথনের জন্য এবং অন্যটি জাভার জন্য' }
        ],
        answer: 0,
        hint: {
          en: 'Subscriber connections are restricted to subscription commands.',
          bn: 'সাবস্ক্রাইবার কানেকশন শুধু সাবস্ক্রিপশন কমান্ড চালাতে পারে।'
        },
        explanation: {
          en: 'A subscribed client enters a dedicated listening state, requiring a separate connection to issue SET, GET, or PUBLISH commands.',
          bn: 'সাবস্ক্রাইব করা কানেকশন লিসেনিং মোডে আটকে থাকে, তাই ডেটা অপারেশন চালাতে আলাদা সংযোগ আবশ্যক।'
        }
      }
    ]
  }
};
