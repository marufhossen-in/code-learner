import type { Lesson } from '../../../lib/types';

export const ListsAndTheQueueLesson: Lesson = {
  slug: 'lists-and-the-queue',
  tech: 'redis',
  title: {
    en: 'Redis Lists & Queues: LPUSH, RPOP & Blocking Workers',
    bn: 'Redis লিস্ট ও কিউ: LPUSH, RPOP ও ব্লকিং ওয়ার্কার'
  },
  summary: {
    en: 'Master Redis Lists and distributed message queuing architectures across 10 structured topics. Understand double-ended linked list mechanics and the underlying quicklist memory structure. Execute O(1) head and tail operations using LPUSH, RPUSH, LPOP, and RPOP. Slice elements with LRANGE and constrain ring buffer sizes using LTRIM. Implement fault-tolerant worker pipelines with atomic LMOVE. Eliminate CPU polling loops with blocking BRPOP. Build prioritized multi-queue dispatchers and compare Lists with Streams.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Redis লিস্ট এবং ডিস্ট্রিবিউটেড মেসেজ কিউ আর্কিটেকচার আয়ত্ত করুন। ডাবল-এন্ডেড লিঙ্কড লিস্ট এবং কুইকলিস্ট মেমরি কাঠামো বুঝুন। LPUSH, RPUSH, LPOP এবং RPOP দিয়ে O(1) গতিতে কাজ সম্পন্ন করুন। LRANGE দিয়ে স্লাইসিং এবং LTRIM দিয়ে রিং বাফারের আকার স্থির রাখুন। অ্যাটমিক LMOVE দিয়ে ব্যর্থতা-সহনশীল ওয়ার্কার পাইপলাইন তৈরি করুন। ব্লকিং BRPOP দিয়ে সার্ভারের অযথা প্রসেসর অপচয় রোধ করুন। প্রায়োরিটি কিউ ডিসপ্যাচার বানান এবং লিস্ট বনাম স্ট্রিমের পার্থক্য জানুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'sets-and-the-member',
    tech: 'redis',
    title: {
      en: 'Redis Sets & Sorted Sets: Sets, ZSETs & Leaderboards',
      bn: 'Redis সেট ও সর্টেড সেট: সেট, ZSET ও লিডারবোর্ড'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Double-Ended Linked List: O(1) Head & Tail Mechanics', bn: '১. ডাবল-এন্ডেড লিঙ্কড লিস্ট: দুই প্রান্তের O(1) মেকানিক্স' } },
    {
      type: 'para',
      text: {
        en: 'When you build asynchronous background worker queues, traditional SQL tables require heavy locking and polling index scans. In Redis, a List is implemented as a doubly linked list of byte arrays. Inserting or popping elements at the head or tail completes in constant O(1) time, regardless of whether the list holds 10 items or millions of items.',
        bn: 'যখন আপনি ব্যাকগ্রাউন্ড ওয়ার্কার কিউ তৈরি করেন, তখন সাধারণ এসকিউএল টেবিলগুলো ইনডেক্স স্ক্যান ও রো লকিংয়ের কারণে ধীরগতির হয়ে পড়ে। Redis-এ লিস্ট ডেটা টাইপটি একটি ডাবল-এন্ডেড লিঙ্কড লিস্ট হিসেবে তৈরি। এতে শুরুতে বা শেষে ডেটা যোগ করা ও তুলে নেওয়ার কাজ সর্বদা ধ্রুব O(1) গতিতে সম্পন্ন হয়, তা এতে ১০টি উপাদান থাকুক বা লাখ লাখ উপাদান থাকুক।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `REDIS DOUBLY LINKED LIST TOPOLOGY:
          Head (Left)                               Tail (Right)
               |                                         |
               v                                         v
         +-----------+   next    +-----------+   next    +-----------+
  nil <--| Payload A | <=======> | Payload B | <=======> | Payload C | --> nil
         +-----------+   prev    +-----------+   prev    +-----------+
               ^                                         ^
             LPUSH                                     RPUSH
             LPOP                                      RPOP`,
      caption: {
        en: 'Doubly linked lists provide constant-time mutations at both ends without array copying.',
        bn: 'ডাবলি লিঙ্কড লিস্ট কোনো অ্যারে কপি ছাড়াই দুই প্রান্তে তাৎক্ষণিক ডেটা পরিবর্তনের সুবিধা দেয়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Producer-Consumer Message Queue Architecture', bn: 'প্রোডিউসার-কনজিউমার মেসেজ কিউ আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis Producer Consumer Queue Flow">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="150" height="90" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="75" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">API Producer</text>
<text x="75" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Sends Task Payload</text>
<text x="75" y="90" font-size="10" fill="#4ade80" text-anchor="middle">LPUSH tasks:queue</text>

<path d="M155,65 L245,65" stroke="#38bdf8" stroke-width="2"/>
<text x="200" y="58" font-size="9" fill="#38bdf8" text-anchor="middle">LPUSH</text>

<rect x="250" y="20" width="180" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="340" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Redis List: tasks:queue</text>
<text x="340" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">[Job 3, Job 2, Job 1]</text>
<text x="340" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">FIFO In-Memory Queue</text>

<path d="M435,65 L515,65" stroke="#f59e0b" stroke-width="2"/>
<text x="475" y="58" font-size="9" fill="#fbbf24" text-anchor="middle">BRPOP</text>

<rect x="520" y="20" width="140" height="90" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="590" y="45" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Worker Process</text>
<text x="590" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">BRPOP timeout 0</text>
<text x="590" y="90" font-size="9" fill="#86efac" text-anchor="middle">Sleeps until pushed</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Core Push & Pop Operations: LPUSH, RPUSH, LPOP, RPOP', bn: '২. মূল পুশ ও পপ অপারেশন: LPUSH, RPUSH, LPOP, RPOP' } },
    {
      type: 'para',
      text: {
        en: 'Redis provides symmetrical operations for both ends of the list. LPUSH and RPUSH insert elements onto the left (head) or right (tail) of the list. LPOP and RPOP extract and remove elements from either side. By pairing LPUSH with RPOP, developers construct standard First-In-First-Out (FIFO) processing pipelines.',
        bn: 'Redis লিস্টের উভয় প্রান্তে ব্যবহারের জন্য সমন্বিত কমান্ড প্রদান করে। LPUSH এবং RPUSH যথাক্রমে বাম (হেড) ও ডান (টেইল) প্রান্তে উপাদান যোগ করে। LPOP এবং RPOP উভয় দিক থেকে উপাদান বের করে এনে মুছে দেয়। LPUSH-এর সাথে RPOP মেলানোর মাধ্যমে ডেভেলপাররা সাধারণ ফার্স্ট-ইন-ফার্স্ট-আউট (FIFO) পাইপলাইন তৈরি করেন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Pushing tasks into the queue:
LPUSH orders:queue "order_101" "order_102" "order_103"
# Output: (integer) 3

# Popping oldest item from the right side (FIFO):
RPOP orders:queue
# Output: "order_101"

# Querying current list length:
LLEN orders:queue
# Output: (integer) 2`,
      caption: {
        en: 'Combining LPUSH and RPOP implements standard FIFO queuing semantics.',
        bn: 'LPUSH এবং RPOP একসাথে ব্যবহার করে আদর্শ ফিফো (FIFO) কিউ তৈরি করা যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Range Slicing & Subsets: LRANGE & LINDEX', bn: '৩. রেঞ্জ স্লাইসিং ও সাবসেট: LRANGE ও LINDEX' } },
    {
      type: 'para',
      text: {
        en: 'To inspect elements without consuming or modifying the list, LRANGE retrieves items within specified zero-based start and stop indices. Specifying negative indices allows reading relative to the tail (-1 references the last element). LINDEX retrieves an element at a specific index offset in O(N) time.',
        bn: 'লিস্টের কোনো ডেটা না মুছে ভেতরের উপাদান দেখতে LRANGE কমান্ড ব্যবহৃত হয়, যা ০-ভিত্তিক ইনডেক্স ধরে ডেটা আনে। ঋণাত্মক ইনডেক্স দিয়ে শেষের দিক থেকেও পড়া যায় (-১ মানে সর্বশেষ উপাদান)। আর LINDEX নির্দিষ্ট ইনডেক্সের উপাদানটি O(N) সময়ে খুঁজে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Retrieve first 3 items (indices 0 through 2):
LRANGE orders:queue 0 2
# Output:
# 1) "order_103"
# 2) "order_102"

# Retrieve all elements in the entire list:
LRANGE orders:queue 0 -1

# Inspect element at index 0:
LINDEX orders:queue 0
# Output: "order_103"`,
      caption: {
        en: 'LRANGE 0 -1 returns all members, while index ranges extract localized slices.',
        bn: 'LRANGE 0 -1 সম্পূর্ণ লিস্ট এবং নির্দিষ্ট রেঞ্জ আংশিক অংশ প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Capping Lists & Circular Buffers with LTRIM', bn: '৪. LTRIM দিয়ে সাইজ নিয়ন্ত্রণ ও সার্কুলার বাফার' } },
    {
      type: 'para',
      text: {
        en: 'In high-throughput logging or social activity feeds, lists can expand infinitely and exhaust server memory. The LTRIM command trims an existing list to contain only the specified range of elements. Pairing LPUSH with LTRIM guarantees a strict upper boundary (such as keeping the latest 100 log lines).',
        bn: 'লগিং বা অ্যাক্টিভিটি ফিডে লিস্ট বাড়তে বাড়তে সার্ভারের মেমরি শেষ করে দিতে পারে। LTRIM কমান্ড একটি লিস্টকে নির্দিষ্ট রেঞ্জের মধ্যে সীমাবদ্ধ রাখে এবং বাকি সব পুরনো ডেটা ছেঁটে ফেলে। LPUSH-এর সাথে LTRIM ব্যবহার করে সহজেই সর্বোচ্চ সীমা বেঁধে রাখা যায় (যেমন সর্বশেষ ১০০টি লগ রাখা)।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Push new log event:
LPUSH system:logs "User 1042 logged in"

# Trim list to retain strictly the most recent 100 entries:
LTRIM system:logs 0 99

# The list never grows past 100 elements, protecting RAM capacity!
LLEN system:logs
# Output: (integer) 100`,
      caption: {
        en: 'Pairing LPUSH with LTRIM constructs bounded fixed-size ring buffers in memory.',
        bn: 'LPUSH এবং LTRIM একসাথে মেমরিতে নির্দিষ্ট আকারের রিং বাফার তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Reliable Worker Queues: Atomic LMOVE & RPOPLPUSH', bn: '৫. নির্ভরযোগ্য ওয়ার্কার কিউ: অ্যাটমিক LMOVE ও RPOPLPUSH' } },
    {
      type: 'para',
      text: {
        en: 'When a worker pops a task with RPOP and subsequently crashes during processing, that task is lost permanently. The LMOVE command (and legacy RPOPLPUSH) atomically pops an item from a source list and pushes it to a destination processing list in a single step. Once processed, the worker removes the job from the processing list.',
        bn: 'কোনো ওয়ার্কার RPOP দিয়ে টাস্ক তুলে নেওয়ার পর যদি প্রসেস করার সময় ক্র্যাশ করে, তবে সেই কাজটি চিরতরে হারিয়ে যায়। এই সমস্যা সমাধানে LMOVE কমান্ড এক নিমিষে মূল কিউ থেকে টাস্ক তুলে একটি প্রসেসিং কিউতে স্থানান্তর করে। কাজ সফলভাবে সম্পন্ন হলে ওয়ার্কার প্রসেসিং কিউ থেকে কাজটি মুছে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Atomically move job from tasks:queue to tasks:processing:
# Syntax: LMOVE <source> <destination> <LEFT|RIGHT> <LEFT|RIGHT>

LMOVE tasks:queue tasks:processing RIGHT LEFT
# Output: "order_102"

# If worker crashes, tasks:processing still holds "order_102" for recovery!
# Upon successful completion, acknowledge and remove:
LREM tasks:processing 1 "order_102"
# Output: (integer) 1`,
      caption: {
        en: 'Atomic LMOVE prevents task loss during unexpected worker hardware or software crashes.',
        bn: 'অ্যাটমিক LMOVE ওয়ার্কার ক্র্যাশ করলেও কোনো কাজ হারিয়ে যাওয়া থেকে সুরক্ষা দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Blocking Operations: Eliminating Polling with BRPOP', bn: '৬. ব্লকিং অপারেশন: BRPOP দিয়ে পোলিং দূরীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'Polling a queue repeatedly with RPOP in a while-true loop consumes 100 percent of CPU cycles and floods Redis with millions of empty requests. Blocking operations like BRPOP and BLMOVE put the worker connection to sleep until a producer pushes a new element or a timeout expires, cutting CPU usage to zero.',
        bn: 'একটি সাধারণ লুপে বারবার RPOP চালিয়ে কিউ চেক করলে প্রসেসরের ১০০ শতাংশ অপচয় হয় এবং সার্ভারে লাখ লাখ নিরর্থক রিকোয়েস্ট জমা হয়। BRPOP এবং BLMOVE কমান্ড কোনো কাজ না থাকলে ওয়ার্কারকে শান্তভাবে ঘুমিয়ে রাখে যতক্ষণ না নতুন কোনো কাজ আসে বা টাইমআউট শেষ হয়, যা প্রসেসরের চাপ শূন্যে নামিয়ে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Blocking pop from tail with 0 timeout (blocks indefinitely until work arrives):
BRPOP tasks:queue 0

# Sample output when producer pushes an item:
# 1) "tasks:queue"
# 2) "order_998" (Returned in microseconds without CPU spin!)`,
      caption: {
        en: 'Blocking operations sleep on socket poll events, eliminating wasteful busy-wait polling.',
        bn: 'ব্লকিং অপারেশন সকেটে ডেটার অপেক্ষা করে ঘুমিয়ে থেকে অযথা প্রসেসর ঘোরা বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Multi-Queue Priority Dispatching', bn: '৭. একাধিক কিউতে প্রায়োরিটি ডিসপ্যাচিং' } },
    {
      type: 'para',
      text: {
        en: 'BRPOP accepts multiple source lists ordered by priority. Redis checks the lists from left to right: if the high-priority queue contains elements, it pops immediately. Only when high-priority queues are completely empty does Redis fall back to normal or low-priority lists.',
        bn: 'BRPOP কমান্ডে প্রায়োরিটি অনুসারে সাজিয়ে একাধিক লিস্টের নাম দেওয়া যায়। Redis বাম থেকে ডানে ক্রমানুসারে লিস্টগুলো পরীক্ষা করে: হাই-প্রায়োরিটি কিউতে কোনো কাজ থাকলে এটি সাথে সাথে তা তুলে নেয়। শুধু হাই-প্রায়োরিটি কিউ পুরোপুরি খালি থাকলেই Redis সাধারণ বা লো-প্রায়োরিটি কিউ থেকে কাজ গ্রহণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Prioritized consumption:
# Checks queue:critical first, then queue:standard, then queue:bulk:
BRPOP queue:critical queue:standard queue:bulk 0

# If queue:critical has 1 item, it is returned immediately!`,
      caption: {
        en: 'Listing multiple queues in BRPOP creates strict priority tiers for background workers.',
        bn: 'BRPOP-এ একাধিক কিউ দিলে ওয়ার্কাররা অগ্রাধিকার মেনে গুরুত্বপূর্ণ কাজ আগে সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Internal Architecture: The Quicklist Optimization', bn: '৮. অভ্যন্তরীণ গঠন: কুইকলিস্ট অপ্টিমাইজেশন' } },
    {
      type: 'para',
      text: {
        en: 'A pure linked list wastes massive memory because every node requires forward and backward 64-bit pointers. Redis optimizes this by using a Quicklist: a linked list of contiguous listpack nodes. This hybrid design delivers O(1) mutations while preserving dense cache locality in RAM.',
        bn: 'একটি বিশুদ্ধ লিঙ্কড লিস্টে প্রতিটি নোডের জন্য দুটি ৬৪-বিট পয়েন্টার লাগায় প্রচুর মেমরি নষ্ট হয়। Redis এই সমস্যা সমাধানে কুইকলিস্ট (Quicklist) ব্যবহার করে: এটি মূলত ছোট ছোট সংকুচিত listpack বাফারের একটি লিঙ্কড লিস্ট। এই হাইব্রিড ডিজাইন O(1) গতির সাথে চমৎকার মেমরি সাশ্রয় নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting encoding of a Redis List:
OBJECT ENCODING tasks:queue
# Output: "quicklist"

# Tuning quicklist compression depth in redis.conf:
# list-compress-depth 1 # Compresses interior list nodes with LZF algorithm!`,
      caption: {
        en: 'The quicklist architecture merges linked lists and memory-dense listpacks.',
        bn: 'কুইকলিস্ট লিঙ্কড লিস্ট ও ঘন মেমরি বাফারের মেলবন্ধনে তৈরি।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Lists vs Streams vs Pub/Sub: Architectural Decision Matrix', bn: '৯. লিস্ট বনাম স্ট্রিম বনাম পাব/সাব: সিদ্ধান্ত ম্যাট্রিক্স' } },
    {
      type: 'para',
      text: {
        en: 'Selecting the proper messaging primitive is vital: Lists are ideal for simple job queues where each task is processed by exactly one worker. Pub/Sub broadcasts transient events to all active subscribers without persistence. Streams provide durable logs with consumer groups, message replay, and acknowledgment tracking.',
        bn: 'সঠিক মেসেজিং টুল নির্বাচন করা অত্যন্ত জরুরি: সাধারণ কাজের কিউ যেখানে প্রতিটি কাজ একজন ওয়ার্কার একবারই করবে তার জন্য লিস্ট আদর্শ। পাব/সাব কোনো ডেটা সেভ না রেখে সরাসরি সক্রিয় শ্রোতাদের মাঝে ব্রডকাস্ট করে। আর স্ট্রিম কনজিউমার গ্রুপ, মেসেজ রিপ্লে এবং কাজের নিশ্চয়তাসহ পূর্ণাঙ্গ টেকসই লগ প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MESSAGING PRIMITIVES COMPARISON:
+-------------------+--------------------+--------------------+--------------------+
| Feature           | Redis Lists        | Redis Pub/Sub      | Redis Streams      |
+-------------------+--------------------+--------------------+--------------------+
| Delivery Pattern  | Point-to-Point     | Fan-Out Broadcast  | Consumer Groups    |
| Persistence       | Yes (In RAM)       | No (Fire-&-Forget) | Yes (Append Log)   |
| Acknowledgments   | Manual via LMOVE   | None               | Built-in (XACK)    |
| Message Replay    | No (Popped=Gone)   | No                 | Yes (Offset Seek)  |
| Best Use Case     | Worker Job Queues  | Live Chat / Alerts | Event Sourcing Bus |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Choose Lists for worker job distribution and Streams for complex event sourcing.',
        bn: 'সাধারণ ওয়ার্কার কিউয়ের জন্য লিস্ট এবং জটিল ইভেন্ট লগের জন্য স্ট্রিম বেছে নিন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Resilient Worker Queue in Node.js', bn: '১০. Node.js-এ নিরাপদ ওয়ার্কার কিউ বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a fault-tolerant worker consumer module utilizing ioredis with blocking BRPOP and crash recovery semantics.',
        bn: 'নিচে ioredis ব্যবহার করে ব্লকিং BRPOP এবং ক্র্যাশ রিকভারি সুবিধা সমৃদ্ধ একটি পূর্ণাঙ্গ ওয়ার্কার কনজিউমার কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";

const redisClient = new Redis("redis://127.0.0.1:6379");
const workerClient = new Redis("redis://127.0.0.1:6379"); // Dedicated connection for blocking calls

async function startWorker() {
  console.log("Worker listening for background jobs...");

  while (true) {
    // 1. Block indefinitely until a job appears in tasks:queue:
    const [, jobData] = await workerClient.brpop("tasks:queue", 0);
    const job = JSON.parse(jobData);

    try {
      console.log("Processing task:", job.id);
      // Execute actual business workload here...
    } catch (err) {
      console.error("Task failed, pushing to dead-letter queue:", err);
      await redisClient.lpush("tasks:dead_letter", jobData);
    }
  }
}

console.log("Production worker dispatcher ready for resilient queue processing");
// Output: Production worker dispatcher ready for resilient queue processing`,
      caption: {
        en: 'A production Node.js worker leveraging BRPOP on a dedicated blocking connection.',
        bn: 'একটি প্রোডাকশন Node.js ওয়ার্কার যা আলাদা সংযোগে BRPOP দিয়ে কাজ গ্রহণ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-lst-ex1',
      kind: 'predict',
      topic: 'redis: list head insertion time complexity',
      question: {
        en: 'What is the algorithmic time complexity for inserting an element to the head or tail of a Redis List using LPUSH or RPUSH?',
        bn: 'LPUSH বা RPUSH ব্যবহার করে একটি Redis লিস্টের শুরুতে বা শেষে উপাদান যোগ করার অ্যালগরিদমিক টাইম কমপ্লেক্সিটি কত?'
      },
      code: `/* Time complexity of LPUSH / RPUSH: */
/* Complexity = O(_) */`,
      answer: '1',
      accept: ['1', 'O(1)', 'O( 1 )'],
      hint: {
        en: 'Constant time O(1).',
        bn: 'ধ্রুব সময় O(1)।'
      },
      explanation: {
        en: 'Because Redis Lists are implemented as doubly linked quicklists, head and tail insertions execute in constant O(1) time.',
        bn: 'লিস্ট ডাবলি লিঙ্কড কুইকলিস্ট হওয়ায় শুরুতে বা শেষে ডেটা যোগ করা ধ্রুব O(1) সময়ে শেষ হয়।'
      }
    },
    {
      id: 'red-lst-ex2',
      kind: 'mcq',
      topic: 'redis: atomic queue transfer command',
      question: {
        en: 'Which Redis command atomically pops an element from a source list and pushes it to a destination processing list to prevent data loss during worker crashes?',
        bn: 'ওয়ার্কার ক্র্যাশ করলেও ডেটা হারিয়ে যাওয়া রোধ করতে কোন Redis কমান্ডটি এক নিমিষে সোর্স কিউ থেকে ডেটা তুলে প্রসেসিং কিউতে পাঠায়?'
      },
      options: [
        { en: 'LMOVE', bn: 'LMOVE' },
        { en: 'RPOP', bn: 'RPOP' },
        { en: 'LPUSH', bn: 'LPUSH' },
        { en: 'LTRIM', bn: 'LTRIM' }
      ],
      answer: 0,
      hint: {
        en: 'The LMOVE command.',
        bn: 'LMOVE কমান্ড।'
      },
      explanation: {
        en: 'LMOVE atomically moves an element from source to destination without an intermediate vulnerable state.',
        bn: 'LMOVE কোনো মধ্যবর্তী ঝুঁকি ছাড়াই এক কিউ থেকে অন্য কিউতে ডেটা সরিয়ে নেয়।'
      }
    },
    {
      id: 'red-lst-ex3',
      kind: 'mcq',
      topic: 'redis: blocking pop benefit',
      question: {
        en: 'What is the primary operational advantage of using BRPOP instead of continuous polling with RPOP?',
        bn: 'ধারাবাহিক লুপে RPOP পোলিং চালানোর বদলে BRPOP ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        { en: 'It puts the client connection to sleep until a task arrives, completely eliminating wasted CPU polling cycles', bn: 'কোনো কাজ না থাকলে এটি সংযোগটিকে ঘুমিয়ে রাখে, ফলে প্রসেসরের কোনো অযথা অপচয় হয় না' },
        { en: 'It encrypts the payload with TLS', bn: 'ডেটা এনক্রিপ্ট করে' },
        { en: 'It automatically scales the database to 10 servers', bn: 'ডাটাবেস ১০টি সার্ভারে বাড়িয়ে দেয়' },
        { en: 'It converts the list to a MySQL table', bn: 'লিস্টকে মাইএসকিউএল টেবিলে রূপান্তর করে' }
      ],
      answer: 0,
      hint: {
        en: 'Eliminates busy-wait CPU polling cycles.',
        bn: 'অযথা প্রসেসর অপচয় দূর করে।'
      },
      explanation: {
        en: 'BRPOP suspends the client socket on the I/O event multiplexer until an item is pushed, achieving zero CPU overhead while idle.',
        bn: 'BRPOP কোনো কাজ না থাকা অবস্থায় প্রসেসরের ওপর কোনো চাপ না ফেলে শান্তভাবে অপেক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'red-lst-quiz',
    title: { en: 'Redis Lists & Message Queues Quiz', bn: 'Redis লিস্ট ও মেসেজ কিউ কুইজ' },
    questions: [
      {
        id: 'rlq1',
        kind: 'mcq',
        topic: 'redis: circular ring buffer command',
        question: {
          en: 'Which Redis command is paired with LPUSH to trim a list and enforce a strict maximum size (creating a circular buffer)?',
          bn: 'একটি লিস্টের সর্বোচ্চ আকার নিয়ন্ত্রণ করে সার্কুলার বাফার তৈরি করতে LPUSH-এর সাথে কোন কমান্ডটি ব্যবহার করা হয়?'
        },
        options: [
          { en: 'LTRIM', bn: 'LTRIM' },
          { en: 'LPOP', bn: 'LPOP' },
          { en: 'LCUT', bn: 'LCUT' },
          { en: 'LDEL', bn: 'LDEL' }
        ],
        answer: 0,
        hint: {
          en: 'LTRIM command.',
          bn: 'LTRIM কমান্ড।'
        },
        explanation: {
          en: 'LTRIM trims the list to the specified range, discarding older elements beyond the threshold.',
          bn: 'LTRIM নির্দিষ্ট রেঞ্জের বাইরের পুরনো উপাদানগুলো ছেঁটে ফেলে দিয়ে আকার নিয়ন্ত্রণে রাখে।'
        }
      },
      {
        id: 'rlq2',
        kind: 'mcq',
        topic: 'redis: multi-queue priority ordering',
        question: {
          en: 'When invoking "BRPOP high normal low 0", in what order does Redis check the queues for available tasks?',
          bn: '"BRPOP high normal low 0" কমান্ড দিলে Redis কোন ক্রমে কিউগুলোতে কাজ খোঁজে?'
        },
        options: [
          { en: 'Strictly from left to right: high first, then normal, then low', bn: 'কঠোরভাবে বাম থেকে ডানে: প্রথমে high, তারপর normal, তারপর low' },
          { en: 'Randomly among all three queues', bn: 'তিনটি কিউয়ের মধ্যে এলোমেলোভাবে' },
          { en: 'Alphabetically based on queue names', bn: 'নামের বর্ণমালার ক্রমানুসারে' },
          { en: 'It pops an element from all three queues simultaneously', bn: 'একসাথে তিনটি কিউ থেকেই ডেটা তোলে' }
        ],
        answer: 0,
        hint: {
          en: 'Evaluates left to right according to parameter order.',
          bn: 'প্যারামিটারের ক্রম অনুযায়ী বাম থেকে ডানে দেখে।'
        },
        explanation: {
          en: 'Redis checks list arguments from left to right, returning from the first non-empty list encountered.',
          bn: 'Redis বাম থেকে ডানে দেখে প্রথম যে কিউতে কাজ পায় সেখান থেকেই ডেটা ফেরত দেয়।'
        }
      },
      {
        id: 'rlq3',
        kind: 'mcq',
        topic: 'redis: quicklist internal encoding structure',
        question: {
          en: 'What data structure does Redis utilize internally to optimize memory and minimize pointer overhead for Lists?',
          bn: 'পয়েন্টারের অপচয় কমাতে এবং মেমরি বাঁচাতে Redis অভ্যন্তরীণভাবে লিস্টের জন্য কোন ডেটা স্ট্রাকচার ব্যবহার করে?'
        },
        options: [
          { en: 'Quicklist (a linked list of compact listpack memory chunks)', bn: 'কুইকলিস্ট (সংকুচিত listpack মেমরি চাঙ্কের একটি লিঙ্কড লিস্ট)' },
          { en: 'An uncompressed binary search tree', bn: 'আনকমপ্রেসড বাইনারি সার্চ ট্রি' },
          { en: 'A SQLite relational database', bn: 'একটি এসকিউলাইট ডাটাবেস' },
          { en: 'A flat CSV text file', bn: 'একটি প্লেইন সিএসভি ফাইল' }
        ],
        answer: 0,
        hint: {
          en: 'Quicklist architecture.',
          bn: 'কুইকলিস্ট আর্কিটেকচার।'
        },
        explanation: {
          en: 'The quicklist architecture links contiguous listpacks together, combining fast mutations with high RAM density.',
          bn: 'কুইকলিস্ট লিঙ্কড লিস্ট ও ঘন মেমরি বাফারের সমন্বয়ে দ্রুতগতি ও মেমরি সাশ্রয় নিশ্চিত করে।'
        }
      },
      {
        id: 'rlq4',
        kind: 'mcq',
        topic: 'redis: list vs streams message delivery',
        question: {
          en: 'When should a software architect choose Redis Streams over Redis Lists for messaging?',
          bn: 'কখন একজন সফটওয়্যার আর্কিটেক্ট মেসেজিংয়ের জন্য সাধারণ লিস্টের বদলে Redis Streams বেছে নেবেন?'
        },
        options: [
          { en: 'When consumer groups, message persistence, historical replay, and acknowledgment tracking are required', bn: 'যখন কনজিউমার গ্রুপ, মেসেজের স্থায়িত্ব, অতীতের ডেটা পুনরায় পড়া এবং প্রসেসিং নিশ্চিতকরণ (XACK) প্রয়োজন হয়' },
          { en: 'Only when running Redis on smartphones', bn: 'শুধুমাত্র স্মার্টফোনে রেডিস চালালে' },
          { en: 'When messages must be discarded immediately without reading', bn: 'না পড়েই মেসেজ মুছে ফেলতে চাইলে' },
          { en: 'There is no difference between them', bn: 'উভয়ের মাঝে কোনো তফাৎ নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Choose Streams for consumer groups and historical message replay.',
          bn: 'কনজিউমার গ্রুপ ও মেসেজ রিপ্লের জন্য স্ট্রিম বেছে নিন।'
        },
        explanation: {
          en: 'Streams offer append-only logs, consumer groups, and offset seeking, while Lists serve point-to-point worker queues.',
          bn: 'লিস্ট সাধারণ ওয়ার্কার কিউয়ের জন্য ভালো, আর জটিল ইভেন্ট লগ ও কনজিউমার গ্রুপের জন্য স্ট্রিম আবশ্যক।'
        }
      }
    ]
  }
};
