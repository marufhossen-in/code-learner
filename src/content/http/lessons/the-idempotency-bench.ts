import type { Lesson } from '../../../lib/types';

export const theIdempotencyBenchLesson: Lesson = {
  slug: 'the-idempotency-bench',
  tech: 'http',
  title: {
    en: 'HTTP Idempotency, Safe Verbs & Distributed Retries',
    bn: 'HTTP আইডেমপোটেন্সি, নিরাপদ মেথড ও ডিস্ট্রিবিউটেড রিট্রাই'
  },
  summary: {
    en: 'Master HTTP idempotency, safe verbs, and resilient distributed retry architecture across 10 structured topics. Understand the mathematical invariant f(f(x)) = f(x) applied to server state. Learn why GET is safe for crawler prefetching. Master PUT replacement semantics and why DELETE 404 responses remain strictly idempotent. Solve the Two Generals network silence dilemma for POST using Idempotency-Key headers. Prevent lost updates with If-Match and 412 Precondition Failed. Implement exponential backoff with jitter and circuit breakers.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP আইডেমপোটেন্সি, নিরাপদ মেথড এবং ডিস্ট্রিবিউটেড রিট্রাই আর্কিটেকচার আয়ত্ত করুন। সার্ভার স্টেটের ক্ষেত্রে গাণিতিক সূত্র f(f(x)) = f(x)-এর প্রয়োগ বুঝুন। ক্রলার প্রিফেচিংয়ের জন্য GET কেন নিরাপদ তা জানুন। PUT-এর সম্পূর্ণ প্রতিস্থাপন এবং DELETE-এর দ্বিতীয় কল ৪০৪ হলেও কেন এটি আইডেমপোটেন্ট তা শিখুন। Idempotency-Key হেডার ব্যবহার করে POST রিকোয়েস্টে নেটওয়ার্ক সাইলেন্স ও ডাবল বিলিং রোধ করুন। If-Match ও ৪১২ Precondition Failed দিয়ে লস্ট-আপডেট ঠেকান। এক্সপোনেনশিয়াল ব্যাকঅফ, জিটার এবং সার্কিট ব্রেকার আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Mathematical Invariant: f(f(x)) = f(x)', bn: '১. গাণিতিক মূলনীতি: f(f(x)) = f(x)' } },
    {
      type: 'para',
      text: {
        en: 'In HTTP, an operation is idempotent if making identical requests multiple times produces the exact same server-side state as executing it once: f(f(x)) = f(x). Crucially, idempotency evaluates server resource state, NOT the response status code. A request can return different HTTP status codes on subsequent calls while remaining strictly idempotent.',
        bn: 'HTTP প্রোটোকলে কোনো অপারেশনকে আইডেমপোটেন্ট বলা হয় যদি একই রিকোয়েস্ট একাধিকবার চালালেও সার্ভারের চূড়ান্ত অবস্থা ঠিক প্রথমবারের মতোই অপরিবর্তিত থাকে: f(f(x)) = f(x)। বিশেষভাবে মনে রাখতে হবে, আইডেমপোটেন্সি সার্ভারের ভেতরের স্টেট যাচাই করে, রেসপন্স স্ট্যাটাস কোড নয়। বারবার কল করলে স্ট্যাটাস কোড ভিন্ন হলেও অপারেশনটি পুরোপুরি আইডেমপোটেন্ট থাকতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Mathematical simulation of idempotence vs non-idempotence:
let balance = 100;

// Non-idempotent: Repeated calls continuously mutate state!
function deductFee(amount) {
  balance -= amount;
  return balance;
}
console.log("Non-idempotent calls:", deductFee(10), deductFee(10)); // 90, 80

// Idempotent: Repeated calls converge to the identical state!
function setBalance(target) {
  balance = target;
  return balance;
}
console.log("Idempotent calls:", setBalance(100), setBalance(100)); // 100, 100`,
      caption: {
        en: 'Idempotent operations guarantee that repeated executions leave system state invariant.',
        bn: 'আইডেমপোটেন্ট অপারেশন নিশ্চিত করে যে বারবার চালালেও সিস্টেমের স্টেট একই থাকে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Safe Methods: GET, HEAD, OPTIONS & TRACE', bn: '২. নিরাপদ মেথড: GET, HEAD, OPTIONS ও TRACE' } },
    {
      type: 'para',
      text: {
        en: 'Safe methods are read-only operations defined in RFC 9110 (GET, HEAD, OPTIONS, TRACE). They guarantee zero observable side effects on server resources. Web crawlers, search engines, and browser prefetchers freely make safe requests in advance. Embedding state mutations inside GET requests (e.g. GET /logout or GET /delete-account) violates HTTP law.',
        bn: 'RFC 9110 অনুযায়ী নিরাপদ (Safe) মেথডগুলো হলো রিড-অনলি অপারেশন (GET, HEAD, OPTIONS, TRACE)। এগুলো সার্ভারের কোনো ডেটা বা স্টেট পরিবর্তন করে না। সার্চ ইঞ্জিন ও ব্রাউজার প্রিফেচার এই মেথডগুলো ইচ্ছামতো চালাতে পারে। GET মেথডের ভেতরে ডেটা ডিলিট বা লগআউট (যেমন GET /delete-account) রাখা ওয়েব আর্কিটেকচারের মারাত্মক নিয়মভঙ্গ।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Safe request: Crawlers and caches can execute freely: */
GET /articles/http-protocols HTTP/1.1
Host: codeshikhon.com

/* ❌ DANGEROUS ANTI-PATTERN: Mutating state via GET */
/* GET /users/logout?confirm=true HTTP/1.1 */
/* Browser prefetchers will accidentally log the user out! */

/* ✅ SECURE: Use POST for mutations */
POST /auth/logout HTTP/1.1
Host: codeshikhon.com`,
      caption: {
        en: 'Safe methods must never mutate state; automated link prefetchers run GET requests without user input.',
        bn: 'নিরাপদ মেথডে কখনোই ডেটা পরিবর্তন করা যাবে না; ব্রাউজার নিজে থেকেই GET প্রিফেচ চালায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Idempotent Modifying Methods: PUT & DELETE', bn: '৩. পরিবর্তনশীল আইডেমপোটেন্ট মেথড: PUT ও DELETE' } },
    {
      type: 'para',
      text: {
        en: 'PUT and DELETE are mutating methods that are strictly idempotent. PUT replaces an entire resource; writing document X to location Y ten times leaves document X at location Y. DELETE removes a resource; deleting user 42 once removes it (204 No Content), and deleting user 42 again yields 404 Not Found, but the final server state (user 42 does not exist) is unchanged.',
        bn: 'PUT এবং DELETE সার্ভারের ডেটা পরিবর্তন করে, কিন্তু এরা সম্পূর্ণ আইডেমপোটেন্ট। PUT পুরো ফাইল প্রতিস্থাপন করে; একই ফাইল ১০ বার (দশবার) পাঠালেও ফলাফল একই থাকে। DELETE রিসোর্স মুছে দেয়; ইউজার ৪২ কে একবার মুছলে ২০৪ হয়, ইউজার ৪২ কে দ্বিতীয়বার মুছতে গেলে ৪০৪ (Not Found) আসে, কিন্তু সার্ভারের চূড়ান্ত অবস্থা (ইউজার ৪২ নেই) একই থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* First DELETE call: Resource exists and is deleted */
DELETE /api/v1/posts/88 HTTP/1.1
Host: api.codeshikhon.com
-> HTTP/1.1 204 No Content

/* Second DELETE call: Resource already removed */
DELETE /api/v1/posts/88 HTTP/1.1
Host: api.codeshikhon.com
-> HTTP/1.1 404 Not Found

/* Invariant holds: Server state is identical after call 1 and call 2! */`,
      caption: {
        en: 'DELETE is idempotent despite returning different status codes on subsequent calls.',
        bn: 'পরবর্তী কলে ভিন্ন স্ট্যাটাস কোড এলেও DELETE সম্পূর্ণ আইডেমপোটেন্ট থাকে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Non-Idempotent Methods: POST & PATCH', bn: '৪. নন-আইডেমপোটেন্ট মেথড: POST ও PATCH' } },
    {
      type: 'para',
      text: {
        en: 'POST is non-idempotent by specification: each execution submits an entity to a processing handler, typically appending a new record or triggering an action. Running POST /charges ten times charges the credit card ten times. PATCH is also non-idempotent by default because delta instructions (e.g. increment counter by 1) produce different results when replayed.',
        bn: 'স্পেসিফিকেশন অনুযায়ী POST কোনোভাবেই আইডেমপোটেন্ট নয়: প্রতিবার চালালে নতুন রেকর্ড তৈরি হয় বা নতুন একশন ঘটে। POST /charges ১০ বার চালালে ইউজারের কার্ড থেকে ১০ বার টাকা কাটা যাবে। PATCH-ও ডিফল্টভাবে নন-আইডেমপোটেন্ট, কারণ আংশিক কমান্ড (যেমন সংখ্যা ১ বাড়াও) বারবার চালালে ফলাফল বেড়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Simulating POST append operations:
const database = [];

function handlePost(order) {
  // Appends new record on every invocation:
  database.push({ id: database.length + 1, ...order });
}

handlePost({ item: "Book", price: 20 });
handlePost({ item: "Book", price: 20 });
console.log("Total orders in database:", database.length); // 2 distinct orders!`,
      caption: {
        en: 'POST operations append records; replaying POST without deduplication causes data duplication.',
        bn: 'POST নতুন রেকর্ড যোগ করে; ডিডুপ্লিকেশন ছাড়া পুনরায় চালালে ডুপ্লিকেট ডেটা তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Network Silence Dilemma: Two Generals Problem', bn: '৫. নেটওয়ার্ক সাইলেন্স সমস্যা: টু জেনারেলস প্রবলেম' } },
    {
      type: 'para',
      text: {
        en: 'When a client issues a POST request and encounters a network timeout after 30 seconds, it has no way of knowing what occurred. Scenario A: The request packet dropped before reaching the server. Scenario B: The server executed the transaction, but crashed before sending the response. Scenario C: The server completed the transaction, but the response packet was lost in transit.',
        bn: 'ক্লায়েন্ট যখন POST পাঠিয়ে ৩০ সেকেন্ড পর টাইমআউট পায়, তখন ক্লায়েন্ট বুঝতে পারে না কী ঘটেছে। পরিস্থিতি ক: রিকোয়েস্ট সার্ভারে পৌঁছানোর আগেই কেটে গেছে। পরিস্থিতি খ: সার্ভার টাকা কেটেছে, কিন্তু রেসপন্স পাঠানোর আগেই সার্ভার ক্র্যাশ করেছে। পরিস্থিতি গ: সার্ভার কাজ শেষ করে রেসপন্স পাঠিয়েছিল কিন্তু নেটওয়ার্কে রেসপন্স হারিয়ে গেছে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `Client                      Network                      Server
  |                            |                            |
  |--- 1. POST /payments ----->|                            | (Dropped in transit?)
  |                            |--- 1. POST /payments ----->| (Executed on DB?)
  |                            |                            |
  |                            |<-- 2. HTTP 201 Created ----| (Response dropped?)
  |         TIMEOUT!           |                            |
  |                            |                            |
  V                            V                            V
Question: Should the client retry? Without idempotency keys, retry risks double billing!`,
      caption: {
        en: 'Network silence leaves clients blind; safe retries require application-level idempotency.',
        bn: 'নেটওয়ার্ক টাইমআউটে ক্লায়েন্ট অন্ধ হয়ে যায়; নিরাপদ রিট্রাইয়ের জন্য আইডেমপোটেন্সি কি আবশ্যক।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Architectural Solution: The Idempotency-Key Header', bn: '৬. আর্কিটেকচারাল সমাধান: Idempotency-Key হেডার' } },
    {
      type: 'para',
      text: {
        en: 'The industry-standard solution (RFC draft and Stripe design) introduces the Idempotency-Key header. Before sending a mutating request, the client generates a unique UUID for the logical operation. The server saves the initial execution result in a deduplication store. If a retry arrives with the identical key, the server replays the stored response without re-executing.',
        bn: 'এই সমস্যার আধুনিক সমাধান হলো Idempotency-Key হেডার (IETF ড্রাফট ও Stripe স্ট্যান্ডার্ড)। ক্লায়েন্ট যেকোনো লেনদেন শুরু করার আগে একটি অনন্য UUID তৈরি করে হেডারে পাঠায়। সার্ভার প্রথমবার কাজ সম্পন্ন করে ফলাফল ডাটাবেসে সেভ রাখে। পরবর্তীতে একই কি দিয়ে রিট্রাই আসলে নতুন করে কাজ না করে আগের রেসপন্সটি ফিরিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Initial mutation attempt with unique Idempotency-Key: */
POST /api/v1/charges HTTP/1.1
Host: api.codeshikhon.com
Idempotency-Key: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
Content-Type: application/json

{"amount": 5000, "currency": "BDT"}

/* Connection times out -> Client retries safely with the SAME key: */
POST /api/v1/charges HTTP/1.1
Host: api.codeshikhon.com
Idempotency-Key: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
Content-Type: application/json

{"amount": 5000, "currency": "BDT"}

/* Server returns cached original receipt without double-charging! */
HTTP/1.1 201 Created
Idempotency-Replayed: true`,
      caption: {
        en: 'Idempotency keys transform non-idempotent POST operations into safe retriable requests.',
        bn: 'আইডেমপোটেন্সি কি নন-আইডেমপোটেন্ট POST রিকোয়েস্টকে নিরাপদ রিট্রাইযোগ্য বানায়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Idempotency-Key Deduplication & Replay Protocol', bn: 'আইডেমপোটেন্সি কি ডুপ্লিকেট রোধ ও রিপ্লে প্রোটোকল' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Idempotency Key Deduplication Workflow"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="200" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="115" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">1. First Knock (Mint)</text><rect x="25" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="75" font-size="11">POST /charges</text><text x="35" y="90" font-size="10">Idempotency-Key: uuid-1</text><rect x="25" y="105" width="180" height="42" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="35" y="125" font-size="11" font-weight="bold">Acquires Lock &amp; Executes</text><text x="35" y="140" font-size="10">• Charges card 5000 BDT</text><rect x="25" y="155" width="180" height="48" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="35" y="175" font-size="11" font-weight="bold">Stores (Key, Hash, Receipt)</text><text x="35" y="192" font-size="10">Returns 201 Created</text><rect x="250" y="15" width="200" height="200" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">2. Network Retry (Replay)</text><rect x="260" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="75" font-size="11">Retry: POST /charges</text><text x="270" y="90" font-size="10">Same Idempotency-Key: uuid-1</text><rect x="260" y="105" width="180" height="42" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="270" y="125" font-size="11" font-weight="bold">Store Hits Key &amp; Matches Hash</text><text x="270" y="140" font-size="10">• Skips payment gateway call</text><rect x="260" y="155" width="180" height="48" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="270" y="175" font-size="11" font-weight="bold">Replays Cached 201 Receipt</text><text x="270" y="192" font-size="10">Zero double charge risk</text><rect x="485" y="15" width="200" height="200" rx="8" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="585" y="40" text-anchor="middle" font-weight="bold" fill="#ef4444">3. Conflict &amp; Tamper</text><rect x="495" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="75" font-size="11">Concurrent In-Flight Request</text><text x="505" y="90" font-size="10">• Lock active -&gt; 409 Conflict</text><rect x="495" y="105" width="180" height="48" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="505" y="125" font-size="11" font-weight="bold">Key Reused with New Body</text><text x="505" y="142" font-size="10">• Payload hash mismatch!</text><rect x="495" y="160" width="180" height="43" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="505" y="180" font-size="11" font-weight="bold">422 Unprocessable Entity</text><text x="505" y="195" font-size="9" fill="#ef4444">• Strict parameter protection</text></g></svg>`,
      caption: {
        en: 'The idempotency engine stores receipts against cryptographic payload hashes, replaying original outcomes and rejecting mismatched retries.',
        bn: 'আইডেমপোটেন্সি ইঞ্জিন ক্রিপ্টোগ্রাফিক হ্যাশের বিপরীতে পূর্বের রসিদ সংরক্ষণ করে, ফলে একই পেমেন্ট দুবার না হয়ে আগের ফলাফল ফেরত যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Concurrency, Key Collisions & 422 Unprocessable Entity', bn: '৭. কনকারেন্সি, কি কলিশন ও 422 Unprocessable Entity' } },
    {
      type: 'para',
      text: {
        en: 'Two critical edge cases must be handled in an idempotency key store. First, concurrent identical requests arriving within 20ms must acquire a distributed lock or return 409 Conflict until the first finishes. Second, if an existing key is reused with a different request payload, the server rejects it with HTTP 422 Unprocessable Entity.',
        bn: 'আইডেমপোটেন্সি কি ব্যবহারের ২টি সূক্ষ্ম দিক সামলাতে হয়। প্রথমত, ২০ মিলিসেকেন্ডের মধ্যে একই কি দিয়ে দুটি রিকোয়েস্ট আসলে দ্বিতীয়টিকে লক বা ৪০৯ Conflict দিয়ে আটকাতে হয়। দ্বিতীয়ত, পুরনো কি দিয়ে যদি সম্পূর্ণ ভিন্ন ডাটা পাঠানো হয়, তবে সার্ভার তাকে HTTP 422 Unprocessable Entity দিয়ে বাতিল করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express idempotency store validation logic:
const keyStore = new Map();

function handleIdempotentRequest(key, payload) {
  const existing = keyStore.get(key);
  if (existing) {
    if (JSON.stringify(existing.payload) !== JSON.stringify(payload)) {
      // Key reused for different request!
      return { status: 422, error: "Idempotency key payload mismatch" };
    }
    // Replay original response safely:
    return { status: 200, data: existing.response, replayed: true };
  }

  // Execute once and store:
  const response = { orderId: "ord_" + Math.random().toString(36).slice(2) };
  keyStore.set(key, { payload, response });
  return { status: 201, data: response, replayed: false };
}

const key = "key_998";
console.log(handleIdempotentRequest(key, { price: 50 }).status); // 201
console.log(handleIdempotentRequest(key, { price: 50 }).status); // 200 (Replayed)
console.log(handleIdempotentRequest(key, { price: 90 }).status); // 422 (Mismatch!)`,
      caption: {
        en: 'Reusing an idempotency key with modified payload parameters yields status 422.',
        bn: 'একই আইডেমপোটেন্সি কি দিয়ে ভিন্ন ডাটা পাঠালে ৪২২ স্ট্যাটাস এরর দেওয়া হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Optimistic Concurrency: If-Match & 412 Precondition Failed', bn: '৮. অপটিমিস্টিক কনকারেন্সি: If-Match ও 412 Precondition Failed' } },
    {
      type: 'para',
      text: {
        en: 'Idempotency governs retries of your own requests; Optimistic Concurrency governs race conditions between competing clients. If Alice and Bob both read document version "v1" and attempt to overwrite it, the second writer could silently overwrite the first. Using If-Match: "v1", the server rejects the late write with HTTP 412 Precondition Failed.',
        bn: 'আইডেমপোটেন্সি নিজের রিকোয়েস্টের রিট্রাই সামলায়; আর অপটিমিস্টিক কনকারেন্সি একাধিক ইউজারের রেষারেষি সামলায়। এলিস ও বব উভয়ে যদি ডকুমেন্টের "v1" ভার্সন পড়ে একই সাথে এডিট করে, তবে একজনের ডেটা হারিয়ে যেতে পারে। If-Match: "v1" হেডার দিলে সার্ভার দ্বিতীয় ব্যক্তির রিকোয়েস্ট HTTP 412 Precondition Failed দিয়ে আটকে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client attempts write with validator check: */
PUT /api/v1/inventory/laptop-pro HTTP/1.1
Host: api.codeshikhon.com
If-Match: "etag_version_3"
Content-Type: application/json

{"stock": 14}

/* If inventory was already updated to version 4 by another client: */
HTTP/1.1 412 Precondition Failed
Content-Type: application/json

{"error": "Resource was modified by another client. Re-fetch before updating."}`,
      caption: {
        en: 'HTTP 412 prevents the lost-update anomaly without needing heavy database row locks.',
        bn: 'HTTP ৪১২ ডাটাবেস রো লক ছাড়াই ডেটা হারিয়ে যাওয়া প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Retry Jurisprudence: Which Status Codes to Retry', bn: '৯. রিট্রাই আইন: কোন স্ট্যাটাস কোডগুলো রিট্রাই করা বৈধ' } },
    {
      type: 'para',
      text: {
        en: 'Not all failures should be retried. Re-attempting 4xx client errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 422 Unprocessable) is futile because identical requests will consistently fail. Retries should be reserved strictly for transient network errors (TCP connection resets, DNS drops) and transient server errors (502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout).',
        bn: 'সব ধরনের এররে রিট্রাই চালানো ঠিক নয়। ক্লায়েন্ট এরর 4xx (যেমন 400 Bad Request, 401 Unauthorized, 403 Forbidden, 422 Unprocessable) বারবার পাঠালে প্রতিবারই ব্যর্থ হবে। রিট্রাই শুধুমাত্র সাময়িক নেটওয়ার্ক সমস্যা এবং সার্ভারের অস্থায়ী সমস্যার ক্ষেত্রে (যেমন 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout) প্রযোজ্য।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function isRetriableStatus(statusCode) {
  // Safe to retry transient network/server failures:
  const retriable5xx = [502, 503, 504];
  if (retriable5xx.includes(statusCode)) return true;

  // Rate-limited requests are retriable only after Retry-After:
  if (statusCode === 429) return true;

  // Permanent client errors must NEVER be automatically retried:
  return false;
}

console.log("Retry 503 Service Unavailable:", isRetriableStatus(503)); // true
console.log("Retry 400 Bad Request:", isRetriableStatus(400));         // false
console.log("Retry 401 Unauthorized:", isRetriableStatus(401));        // false`,
      caption: {
        en: 'Never retry 4xx client validation errors; restrict retries to transient 5xx server issues.',
        bn: '৪xx ক্লায়েন্ট এররে কখনোই রিট্রাই করবেন না; শুধুমাত্র সাময়িক ৫xx এররে রিট্রাই করুন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Resilient Retry Architecture: Exponential Backoff, Jitter & Circuit Breakers', bn: '১০. উন্নত রিট্রাই আর্কিটেকচার: এক্সপোনেনশিয়াল ব্যাকঅফ, জিটার ও সার্কিট ব্রেকার' } },
    {
      type: 'para',
      text: {
        en: 'When millions of clients retry simultaneously at identical intervals, they cause a Thundering Herd that crashes recovering servers. Full Jitter randomizes retry intervals across the exponential backoff curve: delay = random(0, base * 2^attempt). In addition, Circuit Breakers temporarily stop all outgoing requests after repeated consecutive failures.',
        bn: 'সার্ভার রিস্টার্ট নেওয়ার সময় লক্ষ লক্ষ ক্লায়েন্ট যদি একই সেকেন্ডে রিট্রাই দেয়, তবে সার্ভার আবার ক্র্যাশ করে যাকে Thundering Herd বলে। Full Jitter ব্যাকঅফের সময়কে এলোমেলো করে: delay = random(0, base * 2^attempt)। এছাড়া ক্লায়েন্টে সার্কিট ব্রেকার রাখতে হয় যা ক্রমাগত ব্যর্থতায় সাময়িকভাবে সব রিকোয়েস্ট বন্ধ করে সার্ভারকে বাঁচায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Exponential backoff with Full Jitter:
function calculateBackoffWithJitter(attempt, baseDelayMs = 200, maxDelayMs = 10000) {
  const exponentialCap = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, attempt));
  // Full Jitter distributes wait time evenly across [0, exponentialCap]:
  const jitteredDelay = Math.floor(Math.random() * exponentialCap);
  return jitteredDelay;
}

for (let attempt = 0; attempt < 3; attempt++) {
  console.log(\`Attempt \${attempt + 1} jittered sleep:\`, calculateBackoffWithJitter(attempt), "ms");
}
// Output spreads retries across time, preventing synchronized thundering herds!`,
      caption: {
        en: 'Full jitter randomizes backoff delays, flattening synchronized retry spikes.',
        bn: 'ফুল জিটার রিট্রাইয়ের সময়কে এলোমেলো ছড়িয়ে দিয়ে সার্ভারের ট্রাফিক চাপ দূর করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-idm-ex1',
      kind: 'predict',
      topic: 'http: idempotency status code on precondition fail',
      question: {
        en: 'Which HTTP status code is returned when an "If-Match" header condition fails due to concurrent modification by another user?',
        bn: 'অন্য ইউজারের পরিবর্তনের কারণে "If-Match" হেডারের শর্ত ভঙ্গ হলে সার্ভার কোন HTTP স্ট্যাটাস কোড প্রদান করে?'
      },
      code: `/* Optimistic locking condition failed */
/* HTTP/1.1 ___ Precondition Failed */`,
      answer: '412',
      accept: ['412'],
      hint: {
        en: 'Status 412.',
        bn: 'স্ট্যাটাস ৪১২।'
      },
      explanation: {
        en: 'HTTP 412 Precondition Failed indicates that one or more conditions given in request headers (e.g. If-Match) evaluated to false on the server.',
        bn: 'HTTP 412 Precondition Failed নির্দেশ করে যে ১টি বা একাধিক শর্ত (যেমন If-Match) সার্ভারে মিথ্যা প্রমাণিত হয়েছে।'
      }
    },
    {
      id: 'htt-idm-ex2',
      kind: 'mcq',
      topic: 'http: safe methods property',
      question: {
        en: 'Which of the following HTTP methods is guaranteed to be Safe (read-only with no resource side effects)?',
        bn: 'নিচের কোন HTTP মেথডটি নিরাপদ বা Safe (রিড-অনলি এবং কোনো সাইড এফেক্ট নেই)?'
      },
      options: [
        { en: 'GET', bn: 'GET' },
        { en: 'POST', bn: 'POST' },
        { en: 'PUT', bn: 'PUT' },
        { en: 'PATCH', bn: 'PATCH' }
      ],
      answer: 0,
      hint: {
        en: 'GET is safe.',
        bn: 'GET নিরাপদ।'
      },
      explanation: {
        en: 'GET, HEAD, OPTIONS, and TRACE are designated as safe methods by RFC 9110 because their semantics do not alter server resource representations.',
        bn: 'RFC 9110 অনুযায়ী GET মেথড কোনো ডেটা পরিবর্তন করে না তাই এটি নিরাপদ।'
      }
    },
    {
      id: 'htt-idm-ex3',
      kind: 'mcq',
      topic: 'http: idempotency key header purpose',
      question: {
        en: 'Why do payment gateways like Stripe require an "Idempotency-Key" header on POST /charges requests?',
        bn: 'স্ট্রাইপের মতো পেমেন্ট গেটওয়েগুলো POST /charges রিকোয়েস্টে কেন "Idempotency-Key" হেডার বাধ্যতামূলক করে?'
      },
      options: [
        { en: 'To ensure network retries do not execute duplicate credit card charges for the same user transaction', bn: 'নেটওয়ার্ক বিচ্ছিন্নতার পর রিট্রাই হলেও যাতে একই পেমেন্টের জন্য ইউজারের কার্ড থেকে দুবার টাকা না কাটে' },
        { en: 'To compress the JSON body', bn: 'জেসন বডি কম্প্রেস করার জন্য' },
        { en: 'To authenticate the user password', bn: 'ইউজারের পাসওয়ার্ড যাচাই করতে' },
        { en: 'To convert the request to an image', bn: 'ছবিতে রূপান্তর করতে' }
      ],
      answer: 0,
      hint: {
        en: 'Prevents double charging on network drops.',
        bn: 'নেটওয়ার্ক ড্রপে দ্বিগুণ পেমেন্ট আটকায়।'
      },
      explanation: {
        en: 'Idempotency keys ensure that if a client retries after a network timeout, the server replays the existing payment result rather than creating a duplicate charge.',
        bn: 'আইডেমপোটেন্সি কি নিশ্চিত করে টাইমআউট হলে রিট্রাই করলেও সার্ভার আগের লেনদেন থেকেই ফলাফল দেয়, নতুন চার্জ করে না।'
      }
    }
  ],
  quiz: {
    id: 'htt-idm-quiz',
    title: { en: 'HTTP Idempotency & Distributed Retries Quiz', bn: 'HTTP আইডেমপোটেন্সি ও ডিস্ট্রিবিউটেড রিট্রাই কুইজ' },
    questions: [
      {
        id: 'hiq1',
        kind: 'mcq',
        topic: 'http: idempotency evaluation criteria',
        question: {
          en: 'Why is HTTP DELETE considered strictly idempotent even if the first request returns 200/204 and the second returns 404?',
          bn: 'প্রথম DELETE রিকোয়েস্টে ২০০/২০৪ এবং দ্বিতীয়টিতে ৪০৪ আসা সত্ত্বেও কেন DELETE মেথডকে সম্পূর্ণ আইডেমপোটেন্ট বলা হয়?'
        },
        options: [
          { en: 'Idempotency judges server resource state, not response status codes; after both requests, the resource remains deleted', bn: 'আইডেমপোটেন্সি সার্ভার স্টেট বিবেচনা করে, স্ট্যাটাস কোড নয়; উভয় রিকোয়েস্টের পরেই রিসোর্সটি সম্পূর্ণ অপসারিত অবস্থায় থাকে' },
          { en: 'Because 404 is a success code in HTTP/3', bn: 'কারণ HTTP/3 তে ৪০৪ সফল কোড' },
          { en: 'Because browsers ignore DELETE errors', bn: 'কারণ ব্রাউজার ডিলিট এরর উপেক্ষা করে' },
          { en: 'It is a flaw in the HTTP standard', bn: 'এটি স্ট্যান্ডার্ডের একটি ত্রুটি' }
        ],
        answer: 0,
        hint: {
          en: 'Evaluates state, not status code.',
          bn: 'স্ট্যাটাস নয়, স্টেট বিবেচনা করা হয়।'
        },
        explanation: {
          en: 'Idempotency requires f(f(x)) = f(x) on the system state. Once deleted, subsequent deletions leave the system in that exact same absent state.',
          bn: 'আইডেমপোটেন্সি সিস্টেমের স্টেট দিয়ে বিচার করা হয়। ফাইল মুছে যাওয়ার পর আবার মুছতে চাইলেও সার্ভারের অবস্থা অপরিবর্তিত থাকে।'
        }
      },
      {
        id: 'hiq2',
        kind: 'mcq',
        topic: 'http: thundering herd jitter',
        question: {
          en: 'What problem occurs when thousands of failing clients retry using exponential backoff WITHOUT jitter?',
          bn: 'হাজার হাজার ব্যর্থ ক্লায়েন্ট যদি জিটার (jitter) ছাড়া শুধুমাত্র এক্সপোনেনশিয়াল ব্যাকঅফ দিয়ে রিট্রাই চালায়, তবে কী সমস্যা ঘটে?'
        },
        options: [
          { en: 'All clients retry at the exact same synchronized timestamp intervals, creating periodic traffic spikes (Thundering Herd) that crash the recovering server', bn: 'সব ক্লায়েন্ট হুবহু একই সেকেন্ডে একসাথে রিকোয়েস্ট পাঠায় (Thundering Herd), যা সুস্থ হতে থাকা সার্ভারকে বারবার ক্র্যাশ করায়' },
          { en: 'The client memory fills up and crashes', bn: 'ক্লায়েন্টের র‍্যাম ভরে ক্র্যাশ করে' },
          { en: 'The connection switches to UDP', bn: 'কানেকশন UDP তে বদলে যায়' },
          { en: 'Requests become plain HTTP', bn: 'রিকোয়েস্ট আন-এনক্রিপ্টেড হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Synchronized thundering herd waves.',
          bn: 'একসাথে তৈরি হওয়া ট্রাফিক তরঙ্গের ধাক্কা।'
        },
        explanation: {
          en: 'Without jitter randomization, deterministic retry clocks synchronize across all clients, slamming the server with massive periodic request waves.',
          bn: 'জিটার না থাকলে সব ক্লায়েন্ট ঘড়ির কাঁটায় একই সময়ে সার্ভারে আঘাত হানে, ফলে সার্ভার আবার বন্ধ হয়ে যায়।'
        }
      },
      {
        id: 'hiq3',
        kind: 'mcq',
        topic: 'http: retry-after header client discipline',
        question: {
          en: 'When a server returns HTTP 503 Service Unavailable or 429 Too Many Requests with a "Retry-After" header, what must the client do?',
          bn: 'সার্ভার যখন "Retry-After" হেডারসহ HTTP 503 বা 429 পাঠায়, তখন ক্লায়েন্টের কী করা বাধ্যতামূলক?'
        },
        options: [
          { en: 'The client must pause and withhold any new retry attempts until the specified number of seconds or date has elapsed', bn: 'ক্লায়েন্টকে অবশ্যই নির্দিষ্ট সেকেন্ড বা সময় শেষ না হওয়া পর্যন্ত সমস্ত নতুন রিকোয়েস্ট থামিয়ে অপেক্ষা করতে হবে' },
          { en: 'The client should immediately flood the server with 100 requests', bn: 'সাথে সাথে ১০০টি রিকোয়েস্ট পাঠাতে হবে' },
          { en: 'The client should switch to FTP protocol', bn: 'এফটিপি প্রোটোকলে পরিবর্তন করতে হবে' },
          { en: 'The client should delete its local database', bn: 'লোকাল ডাটাবেস মুছে ফেলতে হবে' }
        ],
        answer: 0,
        hint: {
          en: 'Respect the backoff interval specified by the server.',
          bn: 'সার্ভারের দেওয়া অপেক্ষার সময় মেনে চলুন।'
        },
        explanation: {
          en: 'The Retry-After header provides authoritative backpressure guidance, preventing distributed client fleets from overwhelming a recovering server.',
          bn: 'Retry-After হেডার সার্ভারের পুনরুদ্ধারের সময় নির্ধারণ করে দেয়, যা অমান্য করলে সার্ভার সম্পূর্ণ অকেজো হয়ে যেতে পারে।'
        }
      },
      {
        id: 'hiq4',
        kind: 'mcq',
        topic: 'http: circuit breaker state transitions',
        question: {
          en: 'In high-availability HTTP microservice architectures, what is the role of a Circuit Breaker when consecutive requests repeatedly fail?',
          bn: 'উচ্চগতির মাইক্রোসার্ভিসে পরপর রিকোয়েস্ট ব্যর্থ হলে সার্কিট ব্রেকার (Circuit Breaker) কোন সুরক্ষামূলক ভূমিকা পালন করে?'
        },
        options: [
          { en: 'It trips into the "Open" state, immediately fast-failing outbound calls without consuming network sockets, allowing downstream services to recover', bn: 'এটি "Open" অবস্থায় চলে যায় এবং নেটওয়ার্ক সংযোগ নষ্ট না করে সাথে সাথে ব্যর্থ ঘোষণা করে, যাতে পেছনের সার্ভিসটি সুস্থ হওয়ার সময় পায়' },
          { en: 'It permanently shuts down the electrical power to the datacenter', bn: 'ডাটা সেন্টারের বিদ্যুৎ সংযোগ বন্ধ করে দেয়' },
          { en: 'It converts HTTP requests into SMS messages', bn: 'রিকোয়েস্টকে এসএমএসে রূপান্তর করে' },
          { en: 'It buys more RAM from cloud providers automatically', bn: 'ক্লাউড থেকে আরও র‍্যাম কিনে নেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Fast-fails requests to prevent cascading system collapse.',
          bn: 'সিস্টেমের সার্বিক পতন ঠেকাতে সাথে সাথে ফেইল ঘোষণা করে।'
        },
        explanation: {
          en: 'Circuit breakers prevent cascading failures by stopping calls to degraded dependencies until health probes verify recovery in the Half-Open state.',
          bn: 'সার্কিট ব্রেকার অসুস্থ সার্ভারে অযথা রিকোয়েস্ট পাঠিয়ে পুরো সিস্টেম ধসিয়ে দেওয়া প্রতিহত করে।'
        }
      }
    ]
  }
};
