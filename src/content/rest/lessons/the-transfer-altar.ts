import type { Lesson } from '../../../lib/types';

export const transferAltarLesson: Lesson = {
  slug: 'the-transfer-altar',
  tech: 'rest',
  title: {
    en: 'The Transfer Altar: PUT, PATCH, Async 202 & Richardson Maturity Synthesis',
    bn: 'স্থানান্তর-বেদি: PUT, PATCH, অ্যাসিনক্রোনাস ২০২ ও রিচার্ডসন ম্যাচিউরিটি সংশ্লেষ'
  },
  summary: {
    en: 'Master state transfer mutations, patch dialects, and complete REST architectural synthesis across 10 structured topics. Understand why PUT requires complete replacement. Compare RFC 7396 JSON Merge Patch with atomic RFC 6902 JSON Patch operations. Handle long-running operations asynchronously using 202 Accepted and job polling. Enforce optimistic locking with If-Match. Synthesize the four levels of the Richardson Maturity Model into an end-to-end production Express architecture.',
    bn: '১০টি সুসংগঠিত পয়েন্টে স্টেট ট্রান্সফার রূপান্তর, প্যাচ উপভাষা এবং সম্পূর্ণ REST আর্কিটেকচারাল সংশ্লেষ আয়ত্ত করুন। PUT কেন সম্পূর্ণ প্রতিস্থাপন দাবি করে তা বুঝুন। RFC 7396 JSON Merge Patch-এর সাথে পারমাণবিক RFC 6902 JSON Patch-এর তুলনা শিখুন। ২০২ Accepted ও জব পোলিং দিয়ে দীর্ঘমেয়াদী কাজ অ্যাসিনক্রোনাসভাবে হ্যান্ডেল করুন। If-Match দিয়ে অপটিমিস্টিক লকিং প্রয়োগ করুন। রিচার্ডসন ম্যাচিউরিটি মডেলের ৪টি স্তরকে একটি পূর্ণাঙ্গ প্রোডাকশন এক্সপ্রেস আর্কিটেকচারে রূপ দিন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-problem-docket',
    tech: 'rest',
    title: {
      en: 'The Problem Docket: RFC 7807, RFC 9457 & RESTful Error Architecture',
      bn: 'সমস্যা-দস্তুর: RFC 7807, RFC 9457 ও RESTful এরর আর্কিটেকচার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Meaning of State Transfer: Representations as Intended Reality', bn: '১. স্টেট ট্রান্সফারের মূল অর্থ: রূপায়ণই কাঙ্ক্ষিত বাস্তব' } },
    {
      type: 'para',
      text: {
        en: 'In REST, clients do not issue remote imperative commands (such as calling `updateEmail()`). Instead, clients submit a representation of the desired next state of the resource. The server validates that representation, performs the necessary database mutations, and effects the state transfer.',
        bn: 'REST আর্কিটেকচারে ক্লায়েন্ট কোনো দূরবর্তী নির্দেশ পাঠায় না (যেমন `updateEmail()` ফাংশন চালানো)। বরং ক্লায়েন্ট রিসোর্সের পরবর্তী কাঙ্ক্ষিত রূপ কেমন হবে তার একটি প্রতিচ্ছবি বা রিপ্রেজেন্টেশন জমা দেয়। সার্ভার সেই রিপ্রেজেন্টেশনটি যাচাই করে ডাটাবেসে প্রয়োজনীয় পরিবর্তন ঘটিয়ে স্টেট ট্রান্সফার সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `CLIENT INTENT                       SERVER STATE TRANSFER
[Representation of User 42] ----> [Validates schema & permissions]
{ name: "Tanvir", role: "admin" }  [Applies changes atomically to DB]
                                  [Emits 200 OK + updated representation]`,
      caption: {
        en: 'State transfer operates by submitting declarative representations of target resource states.',
        bn: 'স্টেট ট্রান্সফার রিসোর্সের কাঙ্ক্ষিত পরবর্তী অবস্থার রূপায়ণ জমা দেওয়ার মাধ্যমে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. PUT as Whole-Truth Replacement: The Complete Overwrite Law', bn: '২. সম্পূর্ণ প্রতিস্থাপন হিসেবে PUT: পূর্ণ সত্যের বিধান' } },
    {
      type: 'para',
      text: {
        en: 'HTTP PUT is defined as a total replacement operation. The submitted representation replaces the resource at that URI in its entirety. If a client submits a PUT with only the "name" field, all other existing attributes (e.g. bio, age, phone) are considered deliberately omitted and wiped clean.',
        bn: 'HTTP PUT হলো সম্পূর্ণ প্রতিস্থাপনের একটি মেথড। প্রেরিত রিপ্রেজেন্টেশনটি ওই লিংকের পুরো রিসোর্সটিকে পুরোপুরি নতুন করে লিখে দেয়। ক্লায়েন্ট যদি PUT রিকোয়েস্টে শুধুমাত্র "name" পাঠায়, তবে ডাটাবেসে থাকা আগের অন্যান্য সব ফিল্ড (যেমন bio, age, phone) ইচ্ছা করেই মুছে ফেলা হয়েছে বলে ধরে নেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Initial Resource in Database:
let user = { id: 101, name: "Sakib", bio: "Software Engineer", age: 28 };

// ❌ DANGEROUS PARTIAL PUT MISTAKE:
function handlePut(reqBody) {
  // Whole-truth replacement: Omitted fields are not preserved!
  user = { id: user.id, ...reqBody };
}

handlePut({ name: "Sakib Al Hasan" });
console.log("Resource after careless PUT:", user);
// Output: Resource after careless PUT: { id: 101, name: 'Sakib Al Hasan' }
// Notice: 'bio' and 'age' were completely wiped out!`,
      caption: {
        en: 'PUT replaces the entire entity; omitted properties are retracted by definition.',
        bn: 'PUT পুরো অবজেক্ট প্রতিস্থাপন করে; অনুল্লিখিত প্রোপার্টিগুলো মুছে যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. JSON Merge Patch (RFC 7396): The Simple Partial Delta', bn: '৩. JSON Merge Patch (RFC 7396): সহজ আংশিক পরিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'To update only selected fields without overwriting the entire resource, HTTP uses PATCH. RFC 7396 defines JSON Merge Patch using the media type application/merge-patch+json. Its rules are elegant: 1) Specified fields are updated; 2) Unspecified fields remain untouched; 3) Setting a property explicitly to null deletes it.',
        bn: 'পুরো ফাইল না মুছে শুধুমাত্র নির্দিষ্ট কিছু ফিল্ড আংশিক আপডেট করার জন্য PATCH মেথড ব্যবহার করা হয়। RFC 7396 স্ট্যান্ডার্ডে JSON Merge Patch সংজ্ঞায়িত হয়েছে (মিডিয়া টাইপ: application/merge-patch+json)। এর নিয়ম খুবই চমৎকার: ১) যেসব ফিল্ড দেওয়া হয় সেগুলো আপডেট হয়; ২) বাকি ফিল্ডগুলো অপরিবর্তিত থাকে; ৩) কোনো প্রোপার্টির মান null দিলে সেটি মুছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `PATCH /api/v1/users/101 HTTP/1.1
Host: api.codeshikhon.com
Content-Type: application/merge-patch+json

{
  "name": "Sakib Al Hasan",
  "bio": null
}

/* Server updates name to "Sakib Al Hasan", deletes bio, and retains age untouched! */`,
      caption: {
        en: 'JSON Merge Patch updates present keys and deletes keys explicitly assigned null.',
        bn: 'JSON Merge Patch উপস্থিত কি-গুলো আপডেট করে এবং null দিলে তা ডিলিট করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. JSON Patch (RFC 6902): Surgical Atomic Patch Scripts', bn: '৪. JSON Patch (RFC 6902): সুনির্দিষ্ট পারমাণবিক প্যাচ স্ক্রিপ্ট' } },
    {
      type: 'para',
      text: {
        en: 'JSON Merge Patch cannot modify individual array elements without replacing the entire array. RFC 6902 defines JSON Patch (application/json-patch+json) as an atomic array of operations: add, remove, replace, move, copy, and test. The test operation acts as an atomic precondition, failing the entire script if state drifted.',
        bn: 'পুরো অ্যারে প্রতিস্থাপন না করে ভেতরের নির্দিষ্ট কোনো আইটেম আপডেট করতে JSON Merge Patch পারে না। RFC 6902 স্ট্যান্ডার্ডে তৈরি JSON Patch (application/json-patch+json) একটি পারমাণবিক অপারেশন অ্যারে: add, remove, replace, move, copy এবং test। test অপারেশনটি শর্ত পরীক্ষা করে; শর্ত না মিললে পুরো প্যাচ বাতিল হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `[
  { "op": "test", "path": "/status", "value": "draft" },
  { "op": "replace", "path": "/status", "value": "published" },
  { "op": "add", "path": "/tags/1", "value": "featured" },
  { "op": "remove", "path": "/temporaryNotes" }
]`,
      caption: {
        en: 'JSON Patch executes an atomic sequence of surgical document mutations.',
        bn: 'JSON Patch দলিলের ভেতর নিখুঁত অপারেশনের একটি পারমাণবিক ধারা কার্যকর করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Controller Actions: Handling Non-CRUD Business Workflows', bn: '৫. কন্ট্রোলার অ্যাকশন: নন-CRUD ব্যবসায়িক প্রক্রিয়াকরণ' } },
    {
      type: 'para',
      text: {
        en: 'Real-world business processes like checking out, canceling an order, or transferring funds cannot always be modeled as simple field updates. When modeling actions, use two approved RESTful approaches: 1) Model sub-resource creation (POST /orders/42/cancellations); or 2) A declared controller action (POST /orders/42/cancel). Always use POST for state transitions.',
        bn: 'বাস্তব জীবনের কিছু কাজ যেমন পেমেন্ট সম্পন্ন করা, অর্ডার বাতিল করা বা টাকা পাঠানোকে সাধারণ ফিল্ড এডিট দিয়ে বোঝানো যায় না। এ ধরনের ক্ষেত্রে দুটি অনুমোদিত পদ্ধতি রয়েছে: ১) সাব-রিসোর্স তৈরি করা (POST /orders/42/cancellations); অথবা ২) সুনির্দিষ্ট কন্ট্রোলার অ্যাকশন (POST /orders/42/cancel)। স্টেট পরিবর্তনের ক্ষেত্রে সর্বদা POST ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `APPROACH A: Sub-resource creation (Pure REST):
POST /api/v1/orders/101/cancellations
Body: { "reason": "Customer changed mind" }
Response: 201 Created + Location: /orders/101/cancellations/1

APPROACH B: Controller Action (Pragmatic REST):
POST /api/v1/orders/101/cancel
Body: { "reason": "Customer changed mind" }
Response: 200 OK + updated order representation`,
      caption: {
        en: 'Controller actions model complex business operations that transcend simple attribute writes.',
        bn: 'কন্ট্রোলার অ্যাকশন জটিল ব্যবসায়িক অপারেশনগুলোকে সুন্দরভাবে পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Asynchronous Processing: HTTP 202 Accepted & Job Polling', bn: '৬. অ্যাসিনক্রোনাস প্রসেসিং: HTTP 202 Accepted ও জব পোলিং' } },
    {
      type: 'para',
      text: {
        en: 'Operations that take seconds or minutes to complete (like video transcoding, batch CSV exports, or AI generation) must never block the synchronous HTTP connection. The server immediately returns HTTP 202 Accepted alongside a Location header pointing to a status polling resource (/jobs/9941).',
        bn: 'যেসব কাজ শেষ হতে কয়েক সেকেন্ড বা মিনিট সময় লাগে (যেমন ভিডিও কনভার্ট করা, বাল্ক এক্সেল ফাইল এক্সপোর্ট বা এআই ছবি তৈরি) সেগুলোকে সাধারণ এইচটিটিপি সংযোগে আটকে রাখা অনুচিত। সার্ভার সঙ্গে সঙ্গে HTTP 202 Accepted ফেরত দেয় এবং Location হেডারে একটি জব ট্র্যাকিং লিংক প্রদান করে (/jobs/9941)।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Initial mutation triggering heavy background job: */
POST /api/v1/video-exports HTTP/1.1
Host: api.codeshikhon.com

/* Server accepts task and delegates to worker queue: */
HTTP/1.1 202 Accepted
Location: /api/v1/jobs/export_8842
Retry-After: 10

/* Client polls job status resource until completion: */
GET /api/v1/jobs/export_8842 HTTP/1.1
-> HTTP/1.1 200 OK
   {"status": "completed", "downloadUrl": "/downloads/video-hd.mp4"}`,
      caption: {
        en: 'HTTP 202 Accepted decouples long-running work from synchronous network connections.',
        bn: 'HTTP ২০২ দীর্ঘমেয়াদী কাজকে সমলয় নেটওয়ার্ক সংযোগ থেকে আলাদা করে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Optimistic Locking: Preventing Lost Updates with If-Match', bn: '৭. অপটিমিস্টিক লকিং: If-Match দিয়ে ডেটা নষ্ট হওয়া রোধ' } },
    {
      type: 'para',
      text: {
        en: 'When updating resources via PUT or PATCH, concurrent clients can overwrite each other (lost updates). The server assigns a strong ETag to the resource. When mutating, the client supplies If-Match: "etag_val". If another user updated the entity in the meantime, the server halts execution with HTTP 412 Precondition Failed.',
        bn: 'PUT বা PATCH দিয়ে ডেটা আপডেটের সময় দুজন ইউজার একসাথে কাজ করলে একজনের ডেটা মুছে যেতে পারে (lost updates)। সার্ভার ডেটাতে একটি ETag সংযুক্ত করে। আপডেট পাঠানোর সময় ক্লায়েন্ট If-Match: "etag_val" পাঠায়। মাঝপথে অন্য কেউ ফাইল বদলে দিলে সার্ভার HTTP 412 Precondition Failed দিয়ে রিকোয়েস্ট আটকে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Simulating optimistic concurrency guard in Express:
function updateUserWithEtag(existingUser, req, res) {
  const ifMatch = req.headers["if-match"];
  if (!ifMatch || ifMatch !== existingUser.etag) {
    return res.status(412).json({
      error: "Precondition Failed: Resource was modified by another client. Re-fetch before updating."
    });
  }

  // Update resource and generate fresh ETag:
  existingUser.name = req.body.name;
  existingUser.etag = '"v' + Date.now() + '"';
  res.set("ETag", existingUser.etag).json(existingUser);
}

console.log("Optimistic locking halts conflicting concurrent mutations safely");
// Output: Optimistic locking halts conflicting concurrent mutations safely`,
      caption: {
        en: 'If-Match prevents concurrent overwrites without requiring heavy database row locks.',
        bn: 'If-Match ডাটাবেস রো লক না করেই একাধিক ইউজারের পরিবর্তনের সংঘর্ষ প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. The Richardson Maturity Model: Synthesis of All 4 Levels', bn: '৮. রিচার্ডসন ম্যাচিউরিটি মডেল: ৪টি স্তরের পূর্ণাঙ্গ সংশ্লেষ' } },
    {
      type: 'para',
      text: {
        en: 'The Richardson Maturity Model grades APIs into four ascending tiers of REST compliance. Level 0 uses a single URI for RPC over POST. Level 1 introduces discrete resource URIs. Level 2 adopts standard HTTP verbs with proper status codes. Level 3 introduces hypermedia controls (HATEOAS).',
        bn: 'রিচার্ডসন ম্যাচিউরিটি মডেল এপিআইকে ৪টি ধাপে মূল্যায়ন করে। লেভেল ০ একটিমাত্র লিংক ও POST দিয়ে আরপিসি চালায়। লেভেল ১ প্রতিটি ডেটার জন্য আলাদা লিংক দেয়। লেভেল ২ অর্থবহ HTTP মেথড ও স্ট্যাটাস কোড ব্যবহার করে। লেভেল ৩ হাইপারমিডিয়া নিয়ন্ত্রণ (HATEOAS) চালু করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+---------+----------------------------------+-----------------------------------------------+
| Level   | Architectural Characteristic     | Concrete Pattern                              |
+---------+----------------------------------+-----------------------------------------------+
| Level 0 | Swamp of Plain Old XML (RPC)     | POST /api/service { action: "getUser" }       |
| Level 1 | Individual Resource URIs         | /users/1, /orders/42                          |
| Level 2 | Standard HTTP Verbs + Statuses   | GET /orders/42 (200), DELETE /orders/42 (204) |
| Level 3 | Hypermedia Controls (HATEOAS)    | Responses include "_links" and action schemes |
+---------+----------------------------------+-----------------------------------------------+`,
      caption: {
        en: 'The four levels trace the evolutionary journey from RPC to fully autonomous hypermedia REST.',
        bn: 'এই চারটি স্তর সাধারণ আরপিসি থেকে পূর্ণাঙ্গ হাইপারমিডিয়া রেস্টের বিবর্তন নির্দেশ করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Richardson Maturity Model Progression', bn: 'রিচার্ডসন ম্যাচিউরিটি মডেলের স্তরবিন্যাস' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Richardson Maturity Model 4 Levels"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="155" height="195" rx="8" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="92" y="40" text-anchor="middle" font-weight="bold" fill="#ef4444">Level 0: RPC</text><text x="92" y="65" text-anchor="middle" font-size="11">Single URI endpoint</text><text x="92" y="85" text-anchor="middle" font-size="11">POST /api/service</text><text x="92" y="125" text-anchor="middle" font-size="11">HTTP as a crude</text><text x="92" y="145" text-anchor="middle" font-size="11">transport tunnel</text><text x="92" y="180" text-anchor="middle" font-size="10" fill="#ef4444">• Swamp of POX</text><rect x="185" y="15" width="155" height="195" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="262" y="40" text-anchor="middle" font-weight="bold" fill="#f59e0b">Level 1: Resources</text><text x="262" y="65" text-anchor="middle" font-size="11">Individual URIs</text><text x="262" y="85" text-anchor="middle" font-size="11">/orders/42, /users/7</text><text x="262" y="125" text-anchor="middle" font-size="11">Separate addresses</text><text x="262" y="145" text-anchor="middle" font-size="11">for distinct entities</text><text x="262" y="180" text-anchor="middle" font-size="10" fill="#f59e0b">• Still single verb</text><rect x="355" y="15" width="155" height="195" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="432" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">Level 2: Verbs</text><text x="432" y="65" text-anchor="middle" font-size="11">Standard HTTP verbs</text><text x="432" y="85" text-anchor="middle" font-size="11">GET, POST, PUT, DEL</text><text x="432" y="125" text-anchor="middle" font-size="11">Accurate status codes</text><text x="432" y="145" text-anchor="middle" font-size="11">200, 201, 204, 404</text><text x="432" y="180" text-anchor="middle" font-size="10" fill="#3b82f6">• Standard REST</text><rect x="525" y="15" width="160" height="195" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="605" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">Level 3: HATEOAS</text><text x="605" y="65" text-anchor="middle" font-size="11">Hypermedia controls</text><text x="605" y="85" text-anchor="middle" font-size="11">_links &amp; affordances</text><text x="605" y="125" text-anchor="middle" font-size="11">Autonomous engines</text><text x="605" y="145" text-anchor="middle" font-size="11">Self-navigating state</text><text x="605" y="180" text-anchor="middle" font-size="10" fill="#10b981">• Pure REST ideal</text></g></svg>`,
      caption: {
        en: 'The Richardson Maturity Model traces progression from monolithic RPC tunnels to self-describing hypermedia state engines.',
        bn: 'রিচার্ডসন ম্যাচিউরিটি মডেল একক আরপিসি টানেল থেকে পূর্ণাঙ্গ হাইপারমিডিয়া স্টেট ইঞ্জিনের বিবর্তন তুলে ধরে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Idempotency Keys on Mutations: The Safety Net', bn: '৯. মিউটেশনে আইডেমপোটেন্সি কি: চূড়ান্ত নিরাপত্তা জাল' } },
    {
      type: 'para',
      text: {
        en: 'Non-idempotent operations like POST /checkout or POST /refunds must be fortified against network retry duplicates. The client generates an Idempotency-Key UUID. The server stores the first execution result and returns the identical cached response on subsequent retries without double-charging.',
        bn: 'নন-আইডেমপোটেন্ট অপারেশনগুলোতে (যেমন পেমেন্ট বা রিফান্ড) নেটওয়ার্ক ড্রপের পর ডুপ্লিকেট রোধ করা আবশ্যক। ক্লায়েন্ট একটি Idempotency-Key UUID পাঠায়। সার্ভার প্রথমবার কাজটি সম্পাদন করে রেজাল্ট সংরক্ষণ করে এবং পরবর্তীতে রিট্রাই আসলে নতুন করে চার্জ না করে আগের রেসপন্সটি ফিরিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express idempotency deduplication check:
const idempotencyStore = new Map();

function executeWithIdempotency(key, handlerFn) {
  if (idempotencyStore.has(key)) {
    return { ...idempotencyStore.get(key), replayed: true };
  }
  const result = handlerFn();
  idempotencyStore.set(key, result);
  return { ...result, replayed: false };
}

const key = "tx_99812";
const call1 = executeWithIdempotency(key, () => ({ chargeId: "ch_1", amount: 500 }));
const call2 = executeWithIdempotency(key, () => ({ chargeId: "ch_2", amount: 500 }));

console.log("Call 1 replayed:", call1.replayed); // false
console.log("Call 2 replayed:", call2.replayed); // true (Double charge prevented!)`,
      caption: {
        en: 'Idempotency keys ensure at-most-once execution for mutating HTTP actions.',
        bn: 'আইডেমপোটেন্সি কি নিশ্চিত করে পরিবর্তনশীল অ্যাকশনগুলো কেবল একবারই কার্যকর হবে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production REST Synthesis: Complete Express Architecture', bn: '১০. প্রোডাকশন REST সংশ্লেষ: সম্পূর্ণ এক্সপ্রেস আর্কিটেকচার' } },
    {
      type: 'para',
      text: {
        en: 'A production-grade RESTful architecture synthesizes all constraints: noun URIs, correct HTTP verbs, RFC 7396 Merge Patch, RFC 9457 error contracts, and RFC 8288 hypermedia links.',
        bn: 'একটি প্রোডাকশন-গ্রেড আর্কিটেকচার সব নিয়মকে একসাথে রূপ দেয়: বিশেষ্য ইউআরআই, সঠিক এইচটিটিপি মেথড, RFC 7396 Merge Patch, RFC 9457 এরর ফরম্যাট এবং RFC 8288 হাইপারমিডিয়া লিংক।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const app = express();
app.use(express.json());

let articles = [
  { id: 1, title: "Mastering REST", content: "Architecture Guide", published: true }
];

// RFC 7396 Merge Patch Implementation:
app.patch("/api/v1/articles/:id", (req, res) => {
  const article = articles.find(a => a.id === Number(req.params.id));
  if (!article) {
    return res.status(404).type("application/problem+json").json({
      type: "https://api.codeshikhon.com/errors/not-found",
      title: "Article Not Found",
      status: 404
    });
  }

  // Merge patch rules:
  for (const [key, value] of Object.entries(req.body)) {
    if (value === null) {
      delete article[key]; // null deletes key
    } else {
      article[key] = value; // present updates key
    }
  }

  res.json({
    data: article,
    _links: { self: { href: \`/api/v1/articles/\${article.id}\` } }
  });
});

console.log("Production REST synthesis router ready");
// Output: Production REST synthesis router ready`,
      caption: {
        en: 'A unified REST controller adhering to all RFC specifications and Richardson maturity tiers.',
        bn: 'একটি সমন্বিত REST কন্ট্রোলার যা সব RFC নিয়ম ও রিচার্ডসন মডেল নিখুঁতভাবে মেনে চলে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-alt-ex1',
      kind: 'predict',
      topic: 'rest: RFC 7396 delete key value',
      question: {
        en: 'In an RFC 7396 JSON Merge Patch payload, what special value must be assigned to an object property to indicate that it should be deleted?',
        bn: 'RFC 7396 JSON Merge Patch পেলোডে কোনো অবজেক্টের প্রোপার্টি মুছে ফেলতে হলে তার মান কী দিতে হয়?'
      },
      code: `/* Delete the "nickname" property via JSON Merge Patch: */
/* { "nickname": ____ } */`,
      answer: 'null',
      accept: ['null'],
      hint: {
        en: 'The null value.',
        bn: 'null মান।'
      },
      explanation: {
        en: 'RFC 7396 specifies that assigning null to a property instructs the server to delete that key from the target resource.',
        bn: 'RFC 7396 নিয়ম অনুযায়ী কোনো প্রোপার্টির মান null দিলে সার্ভার সেই কি-টি সম্পূর্ণ মুছে ফেলে।'
      }
    },
    {
      id: 'rst-alt-ex2',
      kind: 'mcq',
      topic: 'rest: async long running job status code',
      question: {
        en: 'Which HTTP status code should be returned immediately when a mutating request initiates a long-running asynchronous background job?',
        bn: 'কোনো রিকোয়েস্টে দীর্ঘ সময় লাগা ব্যাকগ্রাউন্ড জব শুরু হলে সার্ভার তৎক্ষণাৎ কোন HTTP স্ট্যাটাস কোড প্রদান করবে?'
      },
      options: [
        { en: '202 Accepted', bn: '202 Accepted' },
        { en: '200 OK', bn: '200 OK' },
        { en: '204 No Content', bn: '204 No Content' },
        { en: '304 Not Modified', bn: '304 Not Modified' }
      ],
      answer: 0,
      hint: {
        en: 'Status 202.',
        bn: 'স্ট্যাটাস ২০২।'
      },
      explanation: {
        en: 'HTTP 202 Accepted indicates that the request has been accepted for processing, but the processing has not been completed.',
        bn: 'HTTP 202 Accepted জানায় যে কাজটি গৃহীত হয়েছে কিন্তু ব্যাকগ্রাউন্ডে প্রক্রিয়াধীন রয়েছে।'
      }
    },
    {
      id: 'rst-alt-ex3',
      kind: 'mcq',
      topic: 'rest: Richardson Level 3 definition',
      question: {
        en: 'In the Richardson Maturity Model, what capability distinguishes a Level 3 API from a Level 2 API?',
        bn: 'রিচার্ডসন ম্যাচিউরিটি মডেলে কোন বিশেষ সুবিধাটি লেভেল ৩ এপিআই-কে লেভেল ২ থেকে আলাদা ও শ্রেষ্ঠ করে?'
      },
      options: [
        { en: 'Hypermedia Controls (HATEOAS): Responses deliver self-describing navigation links and dynamic affordances', bn: 'হাইপারমিডিয়া কন্ট্রোলস (HATEOAS): রেসপন্সে স্ব-বর্ণনামূলক নেভিগেশন লিংক এবং পরবর্তী কাজের সুযোগ দেওয়া' },
        { en: 'Using GraphQL instead of HTTP', bn: 'HTTP-র বদলে GraphQL ব্যবহার' },
        { en: 'Writing the API in Rust', bn: 'রাস্টে এপিআই লেখা' },
        { en: 'Using WebSocket connections', bn: 'ওয়েবসকেট সংযোগ ব্যবহার' }
      ],
      answer: 0,
      hint: {
        en: 'Hypermedia controls (HATEOAS).',
        bn: 'হাইপারমিডিয়া কন্ট্রোলস (HATEOAS)।'
      },
      explanation: {
        en: 'Level 3 introduces hypermedia controls (HATEOAS), allowing clients to discover valid state transitions directly within representations.',
        bn: 'লেভেল ৩ হাইপারমিডিয়া নিয়ন্ত্রণ চালু করে যা রেসপন্সের ভেতর থেকেই পরবর্তী সব কাজের সন্ধান দেয়।'
      }
    }
  ],
  quiz: {
    id: 'rst-alt-quiz',
    title: { en: 'REST Synthesis, Mutations & Richardson Maturity Quiz', bn: 'REST সংশ্লেষ, মিউটেশন ও রিচার্ডসন ম্যাচিউরিটি কুইজ' },
    questions: [
      {
        id: 'raq1',
        kind: 'mcq',
        topic: 'rest: PUT vs PATCH semantics',
        question: {
          en: 'What is the fundamental difference between HTTP PUT and HTTP PATCH?',
          bn: 'HTTP PUT এবং HTTP PATCH-এর মধ্যকার মৌলিক পার্থক্য কোনটি?'
        },
        options: [
          { en: 'PUT completely replaces the target resource (omitted fields are wiped); PATCH applies a partial delta update', bn: 'PUT পুরো রিসোর্সকে প্রতিস্থাপন করে (অনুল্লিখিত ফিল্ডগুলো মুছে যায়); আর PATCH শুধু আংশিক ডেটা আপডেট করে' },
          { en: 'PUT is only for images; PATCH is only for numbers', bn: 'PUT শুধু ছবির জন্য; PATCH শুধু সংখ্যার জন্য' },
          { en: 'PATCH is completely deprecated in modern web standards', bn: 'আধুনিক ওয়েবে PATCH সম্পূর্ণ নিষিদ্ধ' },
          { en: 'Both behave identically under all RFC rules', bn: 'দুটোই সব ক্ষেত্রে হুবহু এক' }
        ],
        answer: 0,
        hint: {
          en: 'PUT is full replacement; PATCH is partial delta.',
          bn: 'PUT হলো পুরো প্রতিস্থাপন; PATCH হলো আংশিক পরিবর্তন।'
        },
        explanation: {
          en: 'PUT replaces the entire document at that URL. PATCH applies partial modifications to an existing resource without dropping unspecified fields.',
          bn: 'PUT পুরো ফাইল মুছে নতুন করে লেখে; আর PATCH পুরনো ডেটা ঠিক রেখে শুধু চাওয়া অংশটুকু বদলায়।'
        }
      },
      {
        id: 'raq2',
        kind: 'mcq',
        topic: 'rest: JSON Patch test operation purpose',
        question: {
          en: 'In an RFC 6902 JSON Patch document, what is the critical role of the "test" operation?',
          bn: 'RFC 6902 JSON Patch ডকুমেন্টে "test" অপারেশনের গুরুত্বপূর্ণ ভূমিকা কী?'
        },
        options: [
          { en: 'It asserts a precondition on the target document; if the test value does not match current state, the entire patch is aborted atomically', bn: 'এটি দলিলের ওপর একটি পূর্বশর্ত যাচাই করে; শর্ত না মিললে পুরো প্যাচ অপারেশনটি সাথে সাথে বাতিল হয়ে যায়' },
          { en: 'To run unit tests on the server', bn: 'সার্ভারে ইউনিট টেস্ট চালানো' },
          { en: 'To check if the database is MySQL', bn: 'ডাটাবেস মাইএসকিউএল কিনা তা দেখা' },
          { en: 'To measure network ping latency', bn: 'নেটওয়ার্কের পিং স্পিড মাপা' }
        ],
        answer: 0,
        hint: {
          en: 'Enforces atomic document preconditions.',
          bn: 'পারমাণবিক পূর্বশর্ত কার্যকর করে।'
        },
        explanation: {
          en: 'The test operation enforces optimistic concurrency at the document level: if the tested field fails to match, the patch aborts with no side effects.',
          bn: 'test অপারেশন নিশ্চিত করে যে ডেটা কাঙ্ক্ষিত অবস্থায় না থাকলে কোনো ভুল পরিবর্তন কার্যকর হবে না।'
        }
      },
      {
        id: 'raq3',
        kind: 'mcq',
        topic: 'rest: async 202 job polling pattern',
        question: {
          en: 'When an API accepts an expensive background task (like video transcoding), which HTTP status code and response header should it return to guide client polling?',
          bn: 'এপিআই যখন কোনো ভারী ব্যাকগ্রাউন্ড কাজ (যেমন ভিডিও কনভার্সন) গ্রহণ করে, তখন ক্লায়েন্টকে পোলিং করতে কোন স্ট্যাটাস কোড ও হেডার ফেরত দেওয়া উচিত?'
        },
        options: [
          { en: 'HTTP 202 Accepted with a Location header pointing to the job status URL', bn: 'HTTP 202 Accepted এবং কাজের স্ট্যাটাস লিংক নির্দেশ করতে Location হেডার' },
          { en: 'HTTP 200 OK with the finished video immediately', bn: 'অবিলম্বে সম্পন্ন ভিডিওসহ HTTP 200 OK' },
          { en: 'HTTP 404 Not Found until the job completes', bn: 'কাজ শেষ না হওয়া পর্যন্ত HTTP 404 Not Found' },
          { en: 'HTTP 500 Internal Server Error', bn: 'ব্যর্থতার জন্য HTTP 500 Internal Server Error' }
        ],
        answer: 0,
        hint: {
          en: '202 Accepted with status Location.',
          bn: 'Location হেডারসহ ২০২ Accepted।'
        },
        explanation: {
          en: 'HTTP 202 Accepted signals asynchronous queuing; the Location header provides the status endpoint for polling or webhook callbacks.',
          bn: 'HTTP ২০২ কাজ গ্রহণের সিগন্যাল দেয় এবং Location হেডার পরবর্তী স্ট্যাটাস চেক করার ইউআরআই জানিয়ে দেয়।'
        }
      },
      {
        id: 'raq4',
        kind: 'mcq',
        topic: 'rest: idempotency-key header',
        question: {
          en: 'Why is an Idempotency-Key header crucial when processing financial payment requests over HTTP POST?',
          bn: 'HTTP POST দিয়ে আর্থিক লেনদেনের রিকোয়েস্ট পাঠানোর সময় Idempotency-Key হেডার কেন অত্যন্ত জরুরি?'
        },
        options: [
          { en: 'It allows clients to safely retry requests after network timeouts without accidentally charging the customer multiple times', bn: 'এটি নেটওয়ার্ক সংযোগ বিচ্ছিন্ন হলে নিরাপদে রিকোয়েস্ট রিট্রাই করার সুবিধা দেয় যাতে ইউজারের কাছ থেকে একাধিকবার টাকা না কাটে' },
          { en: 'It makes the payment free of tax', bn: 'এটি পেমেন্ট ট্যাক্সমুক্ত করে' },
          { en: 'It bypasses bank password checks', bn: 'এটি ব্যাংকের পাসওয়ার্ড এড়িয়ে যায়' },
          { en: 'It converts USD into Euros', bn: 'এটি মুদ্রার রূপান্তর ঘটায়' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents duplicate charges on retries.',
          bn: 'পুনরায় চেষ্টার সময় ডুপ্লিকেট পেমেন্ট আটকায়।'
        },
        explanation: {
          en: 'An Idempotency-Key guarantees that even if a dropped connection triggers ten retries, the server executes the payment exactly once.',
          bn: 'Idempotency-Key নিশ্চিত করে যে সংযোগ কেটে গিয়ে ১০ বার রিট্রাই হলেও সার্ভার পেমেন্টটি কেবল একবারই কার্যকর করবে।'
        }
      }
    ]
  }
};
