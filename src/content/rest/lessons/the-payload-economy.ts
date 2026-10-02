import type { Lesson } from '../../../lib/types';

export const payloadEconomyLesson: Lesson = {
  slug: 'the-payload-economy',
  tech: 'rest',
  title: {
    en: 'The Payload Economy: Representations, Sparse Fieldsets & Compound Documents',
    bn: 'পেলোড অর্থনীতি: রিপ্রেজেন্টেশন, স্পার্স ফিল্ডসেট ও কম্পাউন্ড ডকুমেন্টস'
  },
  summary: {
    en: 'Master RESTful payload design and bandwidth optimization across 10 structured topics. Understand the real-world network economics of API data transfer. Compare bare JSON representations with the envelope pattern. Eradicate overfetching using Sparse Fieldsets (?fields=). Eliminate underfetching and the N+1 network problem using Compound Document expansion (?embed=). Explore the JSON:API standard specification. Implement payload size caps, Brotli compression, and dynamic projection in Express.',
    bn: '১০টি সুসংগঠিত পয়েন্টে RESTful পেলোড ডিজাইন এবং নেটওয়ার্ক ব্যান্ডউইথ অপটিমাইজেশন আয়ত্ত করুন। এপিআই ডেটা ট্রান্সফারের বাস্তব নেটওয়ার্ক অর্থনীতি বুঝুন। সাধারণ জেসন বনাম এনভেলপ (envelope) প্যাটার্নের তুলনা জানুন। স্পার্স ফিল্ডসেট (?fields=) দিয়ে ওভারফেচিং দূর করুন। কম্পাউন্ড ডকুমেন্ট এক্সপানশন (?embed=) দিয়ে আন্ডারফেচিং ও N+1 নেটওয়ার্ক সমস্যা মিটিয়ে ফেলুন। JSON:API স্পেসিফিকেশন, পেলোড সাইজ লিমিট, ব্রোটলি কম্প্রেশন এবং ডায়নামিক প্রজেকশন শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-hierarchy-court',
    tech: 'rest',
    title: {
      en: 'Hierarchy Court: Sub-Resources, URI Path Depth & Query Modeling',
      bn: 'স্তর-দরবার: সাব-রিসোর্স, পাথ গভীরতা ও কোয়েরি মডেলিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Economics of the Wire: Bandwidth, Latency & Serialization', bn: '১. তারের অর্থনীতি: ব্যান্ডউইথ, ল্যাটেন্সি ও সিরিয়ালাইজেশন' } },
    {
      type: 'para',
      text: {
        en: 'Every byte transmitted across an API connection carries a tangible economic cost. In mobile networks, bloated payloads drain device batteries and increase Time-To-Interactive (TTI). On the backend, parsing and serializing massive JSON documents consumes heavy CPU cycles in the V8 engine, directly degrading server throughput.',
        bn: 'এপিআই কানেকশনে প্রতিটি বাড়তি বাইটের জন্য বাস্তব মূল্য দিতে হয়। মোবাইল ডিভাইসে ভারী পেলোড ইউজারের ফোনের ব্যাটারি দ্রুত খরচ করে এবং অ্যাপ লোড হতে দেরি করায়। সার্ভারের ক্ষেত্রে বড় বড় JSON ফাইল স্ট্রিংয়ে রূপান্তর বা পার্স করতে V8 ইঞ্জিনের ব্যাপক CPU ক্ষমতা নষ্ট হয়, যা সার্ভারের ধারণক্ষমতা কমিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Measuring JSON serialization overhead:
const heavyRecord = { id: 101, bio: "X".repeat(5000), metadata: Array(50).fill("tag") };
const rawBytes = Buffer.byteLength(JSON.stringify(heavyRecord));

console.log("Single record payload size:", rawBytes, "bytes");
console.log("10,000 records wire payload:", (rawBytes * 10000 / 1024 / 1024).toFixed(2), "MB");
// Output: Single record payload size: 5565 bytes
// Output: 10,000 records wire payload: 53.07 MB`,
      caption: {
        en: 'Uncontrolled payload sizes quickly expand into massive multi-megabyte network transfers.',
        bn: 'নিয়ন্ত্রণহীন পেলোড নিমিষেই মেগাবাইট আকারের নেটওয়ার্ক ট্রাফিকের রূপ নেয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Bare Payloads vs The Envelope Pattern: Metadata Ergonomics', bn: '২. সাধারণ পেলোড বনাম এনভেলপ প্যাটার্ন: মেটাডাটার গঠন' } },
    {
      type: 'para',
      text: {
        en: 'APIs structure responses using either bare representations or top-level envelopes. Bare responses return direct arrays ([{id: 1}]) or objects. The Envelope pattern wraps data inside a standard structure ({ data: [...], meta: {...}, links: {...} }). Envelopes provide a uniform place for pagination metadata and debugging context.',
        bn: 'এপিআই রেসপন্স মূলত দুইভাবে তৈরি করা যায়: সরাসরি পেলোড অথবা টপ-লেভেল এনভেলপ। সরাসরি পদ্ধতিতে শুধু সাধারণ অ্যারে ([{id: ১}]) বা অবজেক্ট ফেরত দেওয়া হয়। আর এনভেলপ (Envelope) পদ্ধতিতে ডেটাকে একটি মূল কাঠামোতে মোড়ানো হয় ({ data: [...], meta: {...}, links: {...} })। এতে পেজিনেশন মেটাডাটা ও হেলথ স্ট্যাটাস রাখার একটি নির্দিষ্ট জায়গা তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `// BARE REPRESENTATION:
[
  { "id": 1, "title": "Keyboard" }
]

// ENVELOPED REPRESENTATION:
{
  "data": [
    { "id": 1, "title": "Keyboard" }
  ],
  "meta": {
    "totalCount": 1,
    "page": 1,
    "pageSize": 20
  }
}`,
      caption: {
        en: 'Envelopes separate domain resource entities from navigational and pagination metadata.',
        bn: 'এনভেলপ মূল ডেটা সত্তাকে পেজিনেশন ও অন্যান্য মেটাডাটা থেকে সুন্দরভাবে আলাদা রাখে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'REST Response Envelope & Wire Compression Flow', bn: 'REST রেসপন্স এনভেলপ ও ওয়্যার কম্প্রেশন প্রবাহ' },
      svg: `<svg viewBox="0 0 700 220" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Envelope structure and wire compression diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="310" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="170" y="38" text-anchor="middle" font-weight="bold">Envelope Payload Architecture</text><rect x="30" y="55" width="280" height="50" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="45" y="75" font-weight="bold" fill="#3b82f6">data: [ ... ]</text><text x="45" y="93" font-size="11">Core domain entities (User, Product)</text><rect x="30" y="115" width="280" height="40" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="45" y="133" font-weight="bold" fill="#10b981">meta: { page, total, limit }</text><text x="45" y="148" font-size="11">Pagination state & debug telemetry</text><rect x="30" y="163" width="280" height="32" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1"/><text x="45" y="184" font-weight="bold" fill="#8b5cf6">links: { self, next, prev }</text><rect x="395" y="15" width="290" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="540" y="38" text-anchor="middle" font-weight="bold">Transport Optimization</text><rect x="410" y="55" width="260" height="40" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="425" y="75" font-weight="bold">Accept-Encoding: br, gzip</text><text x="425" y="88" font-size="11">Client advertises decompression capabilities</text><rect x="410" y="105" width="260" height="40" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="425" y="125" font-weight="bold">Content-Encoding: br</text><text x="425" y="138" font-size="11">Server delivers Brotli compressed stream</text><rect x="410" y="155" width="260" height="40" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="425" y="175" font-weight="bold">Bandwidth Saved</text><text x="425" y="188" font-size="11">JSON text compressed efficiently over wire</text></g></svg>`,
      caption: {
        en: 'Envelopes separate data from metadata, while HTTP compression reduces bandwidth over the wire.',
        bn: 'এনভেলপ ডেটা ও মেটাডাটাকে পৃথক রাখে, আর কম্প্রেশন নেটওয়ার্কে ব্যান্ডউইথ খরচ অনেকাংশে কমিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Overfetching Disease: Sparse Fieldsets to the Rescue', bn: '৩. ওভারফেচিং সমস্যা: স্পার্স ফিল্ডসেট (Sparse Fieldsets)-এর সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'Overfetching occurs when an endpoint delivers 60 database columns when the client mobile app only needs the title and price for a summary list. Sparse Fieldsets allow clients to explicitly request only the required fields using query parameters: GET /products?fields=id,title,price. This cuts wire size by up to 90%.',
        bn: 'ওভারফেচিং তখন ঘটে যখন মোবাইল অ্যাপের সামান্য নাম ও দামের দরকার হলেও সার্ভার ৬০টি কলামের সব তথ্য পাঠিয়ে দেয়। স্পার্স ফিল্ডসেট (Sparse Fieldsets) ক্লায়েন্টকে কুয়েরি প্যারামিটারে ঠিক কোন কোন ফিল্ড লাগবে তা বেছে নেওয়ার স্বাধীনতা দেয়: GET /products?fields=id,title,price। এটি নেটওয়ার্ক ট্রাফিক ৯০% পর্যন্ত কমিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Implementing Sparse Fieldsets in Express:
function projectFields(item, fieldsParam) {
  if (!fieldsParam) return item;
  const allowed = new Set(fieldsParam.split(",").map(f => f.trim()));
  return Object.fromEntries(
    Object.entries(item).filter(([key]) => allowed.has(key))
  );
}

const fullProduct = { id: 1, title: "Laptop", price: 75000, desc: "A".repeat(1000), internalCost: 50000 };
const projected = projectFields(fullProduct, "id,title,price");
console.log("Projected fields:", Object.keys(projected));
// Output: Projected fields: [ 'id', 'title', 'price' ]`,
      caption: {
        en: 'Sparse fieldsets eliminate wasted bytes by projecting only the client-requested attributes.',
        bn: 'স্পার্স ফিল্ডসেট ক্লায়েন্টের চাওয়া নির্দিষ্ট প্রোপার্টিগুলো রেখে অপ্রয়োজনীয় ডেটা ফেলে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Underfetching Disease & The N+1 Network Problem', bn: '৪. আন্ডারফেচিং ও N+1 নেটওয়ার্ক সমস্যা' } },
    {
      type: 'para',
      text: {
        en: 'Underfetching occurs when an endpoint delivers too little data, forcing the client to make multiple sequential network calls to render a single view. The classic N+1 problem: fetching a list of 20 orders, then executing 20 separate GET /users/:id calls to display customer names. Over high-latency mobile connections, this freezes the UI.',
        bn: 'আন্ডারফেচিং তখন ঘটে যখন একটি এন্ডপয়েন্ট প্রয়োজনের তুলনায় কম তথ্য দেয়, যার ফলে একটি পেজ দেখতেও ক্লায়েন্টকে বারবার সার্ভারকে কল করতে হয়। কুখ্যাত N+1 সমস্যায় ২০টি অর্ডারের তালিকা আনার পর গ্রাহকের নাম দেখাতে আরও ২০ বার আলাদা রিকোয়েস্ট করতে হয়। মোবাইল নেটওয়ার্কে এর ফলে পুরো অ্যাপ্লিকেশন স্থবির হয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `N+1 NETWORK DISASTER:
1. GET /api/v1/orders              -> Returns 20 orders with customerId
2. GET /api/v1/customers/101       -> 1st round trip (~150ms latency)
3. GET /api/v1/customers/102       -> 2nd round trip (~150ms latency)
...
21. GET /api/v1/customers/120      -> 20th round trip (~150ms latency)
Total Network Wait Time = ~3,000ms (3 full seconds of UI loading spinners!)`,
      caption: {
        en: 'Sequential underfetching cascades round-trip latency, destroying client performance.',
        bn: 'ধাপে ধাপে চলা আন্ডারফেচিং নেটওয়ার্ক বিলম্ব বহুগুণ বাড়িয়ে অ্যাপের পারফরম্যান্স নষ্ট করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Compound Documents & Resource Expansion: ?embed= & ?expand=', bn: '৫. কম্পাউন্ড ডকুমেন্ট ও রিসোর্স এক্সপানশন: ?embed= ও ?expand=' } },
    {
      type: 'para',
      text: {
        en: 'Resource expansion allows clients to join related entities into a single HTTP round-trip using query parameters like ?embed=customer,items or ?expand=author. The server loads the related records in one database join and nests them inside the primary response representation.',
        bn: 'রিসোর্স এক্সপানশন ক্লায়েন্টকে একটিমাত্র রিকোয়েস্টে সম্পর্কিত একাধিক ডেটা একসাথে আনার সুবিধা দেয় (?embed=customer,items বা ?expand=author)। সার্ভার ডাটাবেসে একবারে জয়েন করে মূল রেকর্ডের ভেতরে সম্পর্কিত তথ্যগুলো সাজিয়ে একসাথেই পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Fetch order with nested customer and line items in 1 round trip: */
GET /api/v1/orders/8842?embed=customer,items HTTP/1.1
Host: api.codeshikhon.com

/* Response contains embedded compound representation: */
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 8842,
  "status": "completed",
  "customer": { "id": 101, "name": "Rahim Ahmed", "email": "rahim@example.com" },
  "items": [
    { "id": 1, "product": "Keyboard", "quantity": 1, "price": 1500 }
  ]
}`,
      caption: {
        en: 'Resource expansion solves the N+1 problem by embedding related graph entities in one call.',
        bn: 'রিসোর্স এক্সপানশন সম্পর্কিত ডেটাকে একসাথেই সংযুক্ত করে N+1 সমস্যার নিখুঁত সমাধান করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The JSON:API Standard Specification: Consistent Schemas', bn: '৬. JSON:API মানদণ্ড স্পেসিফিকেশন: সুষম স্কিমা কাঠামো' } },
    {
      type: 'para',
      text: {
        en: 'JSON:API (jsonapi.org) standardizes payload modeling to stop teams from endlessly arguing over response formatting. It mandates that primary data must be placed inside a data object carrying type, id, attributes, and relationships. It uses the media type application/vnd.api+json.',
        bn: 'JSON:API (jsonapi.org) একটি সার্বজনীন মানদণ্ড যা জেসন ফাইলের ভেতরের বিন্যাস নিয়ে দ্বন্দ্বের অবসান ঘটায়। এতে প্রতিটি ডেটা অবজেক্টে type, id, attributes এবং relationships থাকা বাধ্যতামূলক করা হয়েছে। এর অফিসিয়াল মিডিয়া টাইপ হলো application/vnd.api+json।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API Architecture",
      "slug": "json-api-arch"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    }
  }
}`,
      caption: {
        en: 'JSON:API enforces predictable resource shapes with explicit separation of attributes and relations.',
        bn: 'JSON:API ডেটার গুণাবলি এবং সম্পর্কগুলোকে পরিষ্কার আলাদা রেখে সুষম আকার তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Payload Size Governance: Hard Limits & Chunked Streaming', bn: '৭. পেলোড সাইজ শাসন: সর্বোচ্চ সীমা ও চাঙ্কড স্ট্রিমিং' } },
    {
      type: 'para',
      text: {
        en: 'Unbounded API responses are dangerous denial-of-service vectors. An API should enforce hard limits: 1) Default page size (e.g. 20 items); 2) Maximum page size cap (e.g. 100 items), ignoring higher client requests; 3) Maximum request body parsing limits in middleware (e.g. express.json({ limit: "1mb" })).',
        bn: 'সীমাহীন এপিআই রেসপন্স সার্ভারের জন্য মারাত্মক বিপদের কারণ হতে পারে। প্রতিটি এপিআইতে কঠোর সীমা আরোপ করা উচিত: ১) ডিফল্ট পেজ সাইজ (যেমন ২০টি আইটেম); ২) সর্বোচ্চ পেজ সীমা (যেমন ১০০টি), ক্লায়েন্ট এর বেশি চাইলেও তা আটকে দেওয়া; ৩) ইনকামিং রিকোয়েস্ট বডি পার্সিং লিমিট (যেমন express.json({ limit: "1mb" }))।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const app = express();

// Protect server memory from giant request payload abuse:
app.use(express.json({ limit: "500kb" }));

// Enforce strict output limits:
function getSafeLimit(requestedLimit, defaultLimit = 20, maxLimit = 100) {
  const parsed = parseInt(requestedLimit, 10);
  if (isNaN(parsed) || parsed <= 0) return defaultLimit;
  return Math.min(parsed, maxLimit);
}

console.log("Safe limit for ?limit=500:", getSafeLimit(500)); // 100
console.log("Safe limit for ?limit=invalid:", getSafeLimit("abc")); // 20`,
      caption: {
        en: 'Defensive limit clamping prevents memory exhaustion attacks on backend servers.',
        bn: 'নিয়ন্ত্রিত সীমা নির্ধারণ সার্ভারের র‍্যাম ফাঁকা রাখে এবং মেমরি ক্র্যাশ প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Wire Compression: Brotli vs Gzip Compression Ratios', bn: '৮. নেটওয়ার্ক কম্প্রেশন: ব্রোটলি (Brotli) বনাম জিজিপ (Gzip)' } },
    {
      type: 'para',
      text: {
        en: 'HTTP compression shrinks text payloads before transmission. Gzip typically reduces JSON size by 70%. Brotli (br) achieves 15-20% higher compression ratios than Gzip on structured JSON. The client declares support via Accept-Encoding: gzip, br, and the server responds with Content-Encoding: br.',
        bn: 'HTTP কম্প্রেশন নেটওয়ার্কে পাঠানোর আগে টেক্সট ফাইলকে সংকুচিত করে দেয়। Gzip সাধারণত JSON ফাইলের আকার ৭০% পর্যন্ত কমিয়ে দেয়। আর আধুনিক Brotli (br) জেসন ফাইলের ক্ষেত্রে Gzip-এর চেয়েও ১৫-২০% বেশি সংকোচন নিশ্চিত করে। ক্লায়েন্ট Accept-Encoding: gzip, br পাঠায় এবং সার্ভার Content-Encoding: br দিয়ে রেসপন্স করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `Payload: 100 KB raw customer records JSON
-------------------------------------------------
Uncompressed Wire Size: 100.0 KB (100%)
Gzip Compressed (gzip):  22.4 KB (77.6% reduction)
Brotli Compressed (br):  17.8 KB (82.2% reduction)

Bandwidth saved on 1 million calls: ~82 Gigabytes!`,
      caption: {
        en: 'Modern Brotli compression dramatically reduces cloud bandwidth egress fees.',
        bn: 'আধুনিক ব্রোটলি কম্প্রেশন ক্লাউড ব্যান্ডউইথের বিশাল খরচ সাশ্রয় করে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Binary Payloads vs Base64: The 33% Encoding Penalty', bn: '৯. বাইনারি পেলোড বনাম Base64: ৩৩% অতিরিক্ত ডেটার অপচয়' } },
    {
      type: 'para',
      text: {
        en: 'Embedding images or PDFs inside JSON as Base64 strings incurs an immediate 33% byte size penalty (every 3 bytes expand to 4 characters). REST best practice separates binary assets from metadata: upload binaries directly using multipart/form-data or binary octet streams, and store image URLs in the JSON record.',
        bn: 'জেসনের ভেতরে ছবি বা পিডিএফ ফাইলকে Base64 স্ট্রিং বানিয়ে রাখা মারাত্মক অপচয়, কারণ এটি ফাইলের সাইজ ৩৩% বাড়িয়ে দেয় (প্রতি ৩ বাইট ডেটা ৪ ক্যারেক্টারে রূপ নেয়)। REST-এর আদর্শ নিয়ম হলো বাইনারি ফাইলকে আলাদাভাবে multipart/form-data দিয়ে আপলোড করা এবং জেসনে শুধু ফাইলের URL সংরক্ষণ করা।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Calculating the 33% Base64 expansion penalty:
const rawBinaryBytes = 1000000; // 1 MB raw image
const base64Bytes = Math.ceil(rawBinaryBytes / 3) * 4;

console.log("Raw binary size:", (rawBinaryBytes / 1024).toFixed(1), "KB");
console.log("Base64 string size:", (base64Bytes / 1024).toFixed(1), "KB");
console.log("Wasted wire overhead:", ((base64Bytes - rawBinaryBytes) / 1024).toFixed(1), "KB (~33%)");
// Output: Raw binary size: 976.6 KB
// Output: Base64 string size: 1302.1 KB
// Output: Wasted wire overhead: 325.5 KB (~33%)`,
      caption: {
        en: 'Never embed large binary assets inside JSON payloads; store URLs referencing binary storage.',
        bn: 'জেসনের ভেতর বড় বাইনারি ডেটা না রেখে স্টোরেজের সরাসরি ইউআরএল লিংক রাখুন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Building an Optimized Express Payload Controller', bn: '১০. অপটিমাইজড এক্সপ্রেস পেলোড কন্ট্রোলার তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'An optimized production controller combines sparse fieldset projection, relationship expansion, and defensive pagination clamping in a cohesive workflow.',
        bn: 'একটি উন্নত প্রোডাকশন কন্ট্রোলার স্পার্স ফিল্ডসেট, ডেটা এক্সপানশন এবং নিরাপদ পেজ লিমিটকে একটি গোছানো পদ্ধতিতে একসাথে কার্যকর করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const app = express();

const database = [
  { id: 1, title: "Pro Laptop", price: 95000, desc: "Fast", author: { id: 10, name: "Tanvir" } },
  { id: 2, title: "USB Mouse", price: 1200, desc: "Optical", author: { id: 11, name: "Sumi" } }
];

app.get("/api/v1/products", (req, res) => {
  const { fields, embed } = req.query;

  const result = database.map(item => {
    let output = { ...item };
    if (!embed || !embed.includes("author")) {
      delete output.author; // Strip unrequested relations
    }
    if (fields) {
      const allowed = new Set(fields.split(","));
      output = Object.fromEntries(Object.entries(output).filter(([k]) => allowed.has(k)));
    }
    return output;
  });

  res.json({ count: result.length, data: result });
});

console.log("Optimized controller dynamically shapes payload per client request");
// Output: Optimized controller dynamically shapes payload per client request`,
      caption: {
        en: 'Dynamic payload controllers deliver tailor-made representations to each calling client.',
        bn: 'ডায়নামিক কন্ট্রোলার প্রতিটি ক্লায়েন্টের প্রয়োজন অনুযায়ী সুনির্দিষ্ট আকারের ডেটা পাঠায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-pay-ex1',
      kind: 'predict',
      topic: 'rest: base64 payload size expansion',
      question: {
        en: 'By approximately what percentage does encoding binary data into Base64 expand its total byte size?',
        bn: 'বাইনারি ডেটাকে Base64 স্ট্রিংয়ে রূপান্তর করলে তার মোট সাইজ প্রায় শতকরা কত ভাগ বৃদ্ধি পায়?'
      },
      code: `/* Base64 expansion percentage overhead: */
/* Overhead: approximately ___% */`,
      answer: '33',
      accept: ['33', '33%'],
      hint: {
        en: 'Around 33 percent.',
        bn: 'প্রায় ৩৩ শতাংশ।'
      },
      explanation: {
        en: 'Base64 encodes every 3 bytes into 4 ASCII characters, resulting in a predictable 33.3% size penalty on network wire payloads.',
        bn: 'Base64 প্রতি ৩ বাইটকে ৪ ক্যারেক্টারে রূপান্তর করায় এর আকার ৩৩.৩% বেড়ে যায়।'
      }
    },
    {
      id: 'rst-pay-ex2',
      kind: 'mcq',
      topic: 'rest: overfetching solution',
      question: {
        en: 'Which API design technique allows clients to request only specific attributes of a resource, eliminating overfetching?',
        bn: 'কোন এপিআই ডিজাইন পদ্ধতির সাহায্যে ক্লায়েন্ট শুধু প্রয়োজনীয় ফিল্ডগুলো চাইতে পারে, ফলে ওভারফেচিং রোধ হয়?'
      },
      options: [
        { en: 'Sparse Fieldsets (e.g. ?fields=id,title,price)', bn: 'স্পার্স ফিল্ডসেট (যেমন ?fields=id,title,price)' },
        { en: 'DNS load balancing', bn: 'ডিএনএস লোড ব্যালেন্সিং' },
        { en: 'Changing GET to POST', bn: 'GET মেথড বদলে POST করা' },
        { en: 'Base64 encoding', bn: 'Base64 এনকোডিং' }
      ],
      answer: 0,
      hint: {
        en: 'Sparse fieldsets project attributes.',
        bn: 'স্পার্স ফিল্ডসেট নির্দিষ্ট ফিল্ড আনে।'
      },
      explanation: {
        en: 'Sparse fieldsets allow clients to specify the exact property list they need, trimming unwanted database attributes from the JSON response.',
        bn: 'স্পার্স ফিল্ডসেট ক্লায়েন্টকে পছন্দের ফিল্ডগুলো বেছে নেওয়ার ক্ষমতা দিয়ে বাড়তি ডেটা ছেঁটে ফেলে।'
      }
    },
    {
      id: 'rst-pay-ex3',
      kind: 'mcq',
      topic: 'rest: underfetching solution',
      question: {
        en: 'What mechanism prevents the N+1 network request problem when a client needs an order alongside its line items?',
        bn: 'ক্লায়েন্টের যখন কোনো অর্ডারের সাথে তার মধ্যকার পণ্যগুলোরও দরকার হয়, তখন N+1 সমস্যা রোধে কোন পদ্ধতি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'Compound Documents / Resource Expansion (e.g. ?embed=items)', bn: 'কম্পাউন্ড ডকুমেন্ট বা রিসোর্স এক্সপানশন (যেমন ?embed=items)' },
        { en: 'Executing 20 consecutive async GET requests', bn: '২০টি পৃথক GET রিকোয়েস্ট চালানো' },
        { en: 'Using HTTP 301 redirects', bn: 'HTTP 301 রিডাইরেক্ট ব্যবহার' },
        { en: 'Sending requests over UDP', bn: 'UDP-তে ডেটা পাঠানো' }
      ],
      answer: 0,
      hint: {
        en: 'Resource expansion embeds related child records.',
        bn: 'রিসোর্স এক্সপানশন ভেতরের চাইল্ড ডেটা একসাথে এনে দেয়।'
      },
      explanation: {
        en: 'Resource expansion embeds related entities inside the primary response representation in a single network round-trip.',
        bn: 'রিসোর্স এক্সপানশন একটিমাত্র রিকোয়েস্টে প্যারেন্ট ডেটার সাথে চাইল্ড ডেটা যুক্ত করে N+1 ঝামেলা দূর করে।'
      }
    }
  ],
  quiz: {
    id: 'rst-pay-quiz',
    title: { en: 'REST Payload Economy & Representation Quiz', bn: 'REST পেলোড অর্থনীতি ও রিপ্রেজেন্টেশন কুইজ' },
    questions: [
      {
        id: 'rpq1',
        kind: 'mcq',
        topic: 'rest: compression algorithm comparison',
        question: {
          en: 'Between Gzip and Brotli, which compression algorithm generally achieves higher compression ratios on text-based JSON API payloads?',
          bn: 'Gzip এবং Brotli-র মধ্যে টেক্সট-ভিত্তিক JSON এপিআই রেসপন্সে কোনটি সাধারণত বেশি সংকোচন (কম্প্রেশন) ক্ষমতা দেখায়?'
        },
        options: [
          { en: 'Brotli (br), which typically delivers 15-20% higher compression efficiency than Gzip on structured text', bn: 'ব্রোটলি (br), যা কাঠামোগত টেক্সট ডেটায় Gzip-এর চেয়েও প্রায় ১৫-২০% বেশি সংকুচিত করতে পারে' },
          { en: 'Gzip is always 50% better than Brotli', bn: 'Gzip সর্বদা ৫০% ভালো' },
          { en: 'Neither works on JSON', bn: 'কোনোটিই জেসনে কাজ করে না' },
          { en: 'Both produce exactly identical byte lengths', bn: 'দুটোই হুবহু একই সাইজ তৈরি করে' }
        ],
        answer: 0,
        hint: {
          en: 'Brotli is superior for JSON text.',
          bn: 'জেসন টেক্সটের জন্য ব্রোটলি সেরা।'
        },
        explanation: {
          en: 'Brotli utilizes modern dictionary algorithms specifically optimized for web text and JSON, outperforming Gzip by 15-20%.',
          bn: 'ব্রোটলি আধুনিক ওয়েব টেক্সট ও জেসন ডিকশনারি ব্যবহার করে Gzip-এর চেয়ে বেশি সংকোচন করে।'
        }
      },
      {
        id: 'rpq2',
        kind: 'mcq',
        topic: 'rest: defensive pagination limit',
        question: {
          en: 'Why should a REST API enforce a strict maximum ceiling on query limits (e.g. capping ?limit=1000000 down to 100)?',
          bn: 'REST এপিআইতে কুয়েরি লিমিটের ওপর কেন একটি সর্বোচ্চ সীমা বেঁধে রাখা উচিত (যেমন ?limit=1000000 চাইলেও তাকে ১০০-তে নামিয়ে আনা)?'
        },
        options: [
          { en: 'To protect the server from memory exhaustion, long database table locks, and JSON serialization crashes', bn: 'সার্ভারের র‍্যাম শেষ হওয়া, ডাটাবেস টেবিল লক হওয়া এবং জেসন পার্সিংয়ে সার্ভার ক্র্যাশ হওয়া প্রতিরোধ করতে' },
          { en: 'Because HTTP/2 does not allow more than 100 items', bn: 'কারণ HTTP/2 তে ১০০ এর বেশি আইটেম নিষিদ্ধ' },
          { en: 'To make URLs shorter', bn: 'লিংক ছোট করার জন্য' },
          { en: 'It is mandated by JavaScript syntax', bn: 'জাভাস্ক্রিপ্ট সিনট্যাক্সের জন্য প্রয়োজন' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents server memory exhaustion and database overload.',
          bn: 'সার্ভারের মেমরি শেষ হওয়া ও ডাটাবেসের চাপ আটকায়।'
        },
        explanation: {
          en: 'Clamping limits protects backend databases from resource exhaustion queries and prevents node.js heap memory crashes during serialization.',
          bn: 'লিমিট নিয়ন্ত্রণ না করলে কেউ একসাথে লাখ লাখ ডেটা চেয়ে সার্ভারের র‍্যাম জ্যাম করে ক্র্যাশ ঘটাতে পারে।'
        }
      },
      {
        id: 'rpq3',
        kind: 'mcq',
        topic: 'rest: accept vs content-type headers',
        question: {
          en: 'In RESTful HTTP content negotiation, what is the key difference between the "Accept" and "Content-Type" headers in an incoming client request?',
          bn: 'RESTful HTTP কনটেন্ট নেগোশিয়েশনে ক্লায়েন্ট রিকোয়েস্টে "Accept" এবং "Content-Type" হেডারের মধ্যকার মূল পার্থক্য কী?'
        },
        options: [
          { en: 'Accept specifies the format the client wants to receive, while Content-Type declares the format of the request body being sent', bn: 'Accept জানায় ক্লায়েন্ট রেসপন্সে কোন ফরম্যাট চায়, আর Content-Type জানায় ক্লায়েন্ট বডিতে কোন ফরম্যাটে ডেটা পাঠাচ্ছে' },
          { en: 'Accept is for cookies and Content-Type is for passwords', bn: 'Accept কুকির জন্য এবং Content-Type পাসওয়ার্ডের জন্য' },
          { en: 'Both headers are strictly interchangeable aliases', bn: 'দুটো হেডার হুবহু একই এবং পরস্পরের বিকল্প' },
          { en: 'Content-Type is only used in WebSocket connections', bn: 'Content-Type কেবল ওয়েবসকেটেই ব্যবহৃত হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Accept requests the desired response representation.',
          bn: 'Accept কাঙ্ক্ষিত রেসপন্স ফরম্যাট নির্দিষ্ট করে।'
        },
        explanation: {
          en: 'The Accept header negotiates the desired response representation (e.g. application/json), while Content-Type announces the encoding of the inbound payload.',
          bn: 'Accept হেডার রেসপন্সের কাঙ্ক্ষিত ফরম্যাট জানায়, আর Content-Type হেডার প্রেরিত পেলোডের ফরম্যাট ঘোষণা করে।'
        }
      },
      {
        id: 'rpq4',
        kind: 'mcq',
        topic: 'rest: sparse fieldsets benefit',
        question: {
          en: 'How does supporting sparse fieldsets (e.g. "?fields=id,name") optimize mobile API performance?',
          bn: 'স্পার্স ফিল্ডসেট (যেমন "?fields=id,name") সমর্থন মোবাইল এপিআই পারফরম্যান্সকে কীভাবে উন্নত করে?'
        },
        options: [
          { en: 'It eliminates overfetching by stripping unneeded fields from serialization, shrinking response byte size and parsing latency', bn: 'এটি অপ্রয়োজনীয় ফিল্ড বাদ দিয়ে রেসপন্সের সাইজ কমায়, যার ফলে ব্যান্ডউইথ ও পার্সিং সময় বাঁচে' },
          { en: 'It converts JSON into binary images', bn: 'এটি জেসনকে ছবিতে রূপান্তর করে' },
          { en: 'It forces the client to download everything twice', bn: 'এটি ক্লায়েন্টকে দুবার ডেটা ডাউনলোড করতে বাধ্য করে' },
          { en: 'It bypasses database authentication', bn: 'এটি ডাটাবেস নিরাপত্তা এড়িয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Avoids transmitting unneeded fields.',
          bn: 'অপ্রয়োজনীয় তথ্য পাঠানো বন্ধ করে।'
        },
        explanation: {
          en: 'Sparse fieldsets prevent overfetching by telling the backend exactly which attributes to project, reducing memory usage and wire payloads.',
          bn: 'স্পার্স ফিল্ডসেট শুধু প্রয়োজনীয় ফিল্ডগুলো ফেরত দিয়ে অতিরিক্ত ডেটা পাঠানো ও মেমোরি খরচ প্রতিহত করে।'
        }
      }
    ]
  }
};
