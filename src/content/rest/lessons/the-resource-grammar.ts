import type { Lesson } from '../../../lib/types';

export const resourceGrammarLesson: Lesson = {
  slug: 'the-resource-grammar',
  tech: 'rest',
  title: {
    en: 'REST Resource Grammar: Nouns, URIs & HTTP Method Semantics',
    bn: 'REST রিসোর্স ব্যাকরণ: বিশেষ্য, URI ও HTTP মেথডের সঠিক নিয়ম'
  },
  summary: {
    en: 'Master foundational REST API resource design across 10 structured topics. Understand Roy Fielding’s Representational State Transfer philosophy. Learn why URIs must model nouns rather than actions. Master collection and item archetypes. Map CRUD operations to GET, POST, PUT, PATCH, and DELETE. Eradicate RPC-over-HTTP anti-patterns. Master RESTful status codes including 201 Created and 204 No Content. Eliminate the dangerous "200 OK with error body" anti-pattern and build clean Express routers.',
    bn: '১০টি সুসংগঠিত পয়েন্টে REST API-র মূল রিসোর্স ডিজাইন নীতি আয়ত্ত করুন। রয় ফিল্ডিংয়ের Representational State Transfer দর্শন বুঝুন। URI-তে ক্রিয়ার বদলে কেন কেবল বিশেষ্য (noun) ব্যবহার করতে হয় তা জানুন। কালেকশন ও সিঙ্গেল আইটেম কাঠামোর নিয়ম শিখুন। CRUD অপারেশনগুলোকে GET, POST, PUT, PATCH ও DELETE-এর সাথে সঠিকভাবে মেলান। RPC-over-HTTP ভুল দূর করুন। ২০১ Created ও ২০৪ No Content সহ RESTful স্ট্যাটাস কোড আয়ত্ত করুন এবং "২০০ OK-র ভেতর এরর" পাঠানো বন্ধ করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-payload-economy',
    tech: 'rest',
    title: {
      en: 'The Payload Economy: Representations, Sparse Fieldsets & Compound Documents',
      bn: 'পেলোড অর্থনীতি: রিপ্রেজেন্টেশন, স্পার্স ফিল্ডসেট ও কম্পাউন্ড ডকুমেন্টস'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Philosophy of REST: Representational State Transfer', bn: '১. REST-এর দর্শন: রিপ্রেজেন্টেশনাল স্টেট ট্রান্সফার' } },
    {
      type: 'para',
      text: {
        en: 'REST (Representational State Transfer) was introduced by Roy Fielding in 2000 as an architectural style for distributed hypermedia systems. Rather than treating the web as a remote procedure call (RPC) mechanism, REST models systems as a universe of uniquely addressable resources whose representations (JSON, XML) are transferred across a stateless network.',
        bn: '২০০০ সালে ড. রয় ফিল্ডিং ডিস্ট্রিবিউটেড ওয়েব সিস্টেমের জন্য REST (Representational State Transfer) আর্কিটেকচার প্রস্তাব করেন। ওয়েবকে কোনো রিমোট ফাংশন কল (RPC) হিসেবে না দেখে, REST পুরো সিস্টেমকে সুনির্দিষ্ট ঠিকানাযুক্ত রিসোর্সের ভাণ্ডার হিসেবে দেখে যার রূপান্তর (JSON, XML) একটি স্টেটলেস নেটওয়ার্কের ওপর দিয়ে স্থানান্তরিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+-------------------------------------------------------------+
| REST Six Architectural Constraints:                         |
| 1. Client-Server Separation: UI concerns separated from data|
| 2. Statelessness: Each request contains all context needed   |
| 3. Cacheability: Responses must define cache directives     |
| 4. Layered System: Intermediaries (proxies, CDNs) invisible  |
| 5. Uniform Interface: Standardized URIs, verbs, and media   |
| 6. Code on Demand (Optional): Executable code transmission  |
+-------------------------------------------------------------+`,
      caption: {
        en: 'The uniform interface constraint guarantees interoperability across all HTTP clients.',
        bn: 'ইউনিফর্ম ইন্টারফেস সব ধরনের এইচটিটিপি ক্লায়েন্টের মধ্যে নিরবচ্ছিন্ন ডেটা আদান-প্রদান নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Resources as Nouns: Verbs Belong Strictly to HTTP Methods', bn: '২. বিশেষ্য হিসেবে রিসোর্স: ক্রিয়া থাকবে শুধুই HTTP মেথডে' } },
    {
      type: 'para',
      text: {
        en: 'In RESTful design, a URI represents an identity, not an action. Therefore, URIs must exclusively consist of nouns (e.g. /products, /users, /orders). The actions performed on those entities belong entirely to standard HTTP verbs. Putting verbs inside URIs (like /api/createProduct or /api/getUsers) violates the fundamental grammar of REST.',
        bn: 'RESTful ডিজাইনে একটি URI কোনো কাজের নির্দেশ নয়, বরং একটি সত্তার পরিচয় বহন করে। তাই URI-তে সর্বদা বিশেষ্য (যেমন /products, /users, /orders) থাকতে হয়। ওই ডেটার ওপর কী কাজ চালানো হবে তা পুরোপুরি নির্ধারণ করে HTTP মেথড। লিংকের ভেতর কোনো ক্রিয়া (যেমন /createProduct বা /getUsers) যুক্ত করা REST নিয়মের পরিপন্থী।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ FLAWED (RPC with verb leaks):
GET  /api/getAllProducts
POST /api/createNewProduct
POST /api/deleteProductById?id=42

✅ RESTFUL (Plural noun URIs + HTTP verb contracts):
GET    /api/products       (Fetch collection)
POST   /api/products       (Create new product)
GET    /api/products/42    (Fetch specific item)
PUT    /api/products/42    (Replace item)
DELETE /api/products/42    (Remove item)`,
      caption: {
        en: 'REST separates resource identity (URI nouns) from state operations (HTTP verbs).',
        bn: 'REST রিসোর্সের পরিচয় (URI বিশেষ্য) এবং অপারেশনের মেথড (HTTP ক্রিয়া)-কে আলাদা রাখে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'REST Method Semantics & Resource Target Grid', bn: 'REST মেথড সেমান্টিক্স ও রিসোর্স টার্গেট গ্রিড' },
      svg: `<svg viewBox="0 0 700 240" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="REST Method Semantics Matrix"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="210" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="55" x2="685" y2="55" stroke="currentColor" stroke-width="1"/><line x1="110" y1="15" x2="110" y2="225" stroke="currentColor" stroke-width="1"/><line x1="220" y1="15" x2="220" y2="225" stroke="currentColor" stroke-width="1"/><line x1="330" y1="15" x2="330" y2="225" stroke="currentColor" stroke-width="1"/><line x1="470" y1="15" x2="470" y2="225" stroke="currentColor" stroke-width="1"/><line x1="580" y1="15" x2="580" y2="225" stroke="currentColor" stroke-width="1"/><text x="62" y="38" text-anchor="middle" font-weight="bold">Verb</text><text x="165" y="38" text-anchor="middle" font-weight="bold">Safe?</text><text x="275" y="38" text-anchor="middle" font-weight="bold">Idempotent?</text><text x="400" y="38" text-anchor="middle" font-weight="bold">Target Example</text><text x="525" y="38" text-anchor="middle" font-weight="bold">Status</text><text x="632" y="38" text-anchor="middle" font-weight="bold">Semantics</text><text x="62" y="85" text-anchor="middle" font-weight="bold" fill="#10b981">GET</text><text x="165" y="85" text-anchor="middle">Yes</text><text x="275" y="85" text-anchor="middle">Yes</text><text x="400" y="85" text-anchor="middle">/api/v1/orders</text><text x="525" y="85" text-anchor="middle">200 OK</text><text x="632" y="85" text-anchor="middle">Read only</text><text x="62" y="120" text-anchor="middle" font-weight="bold" fill="#3b82f6">POST</text><text x="165" y="120" text-anchor="middle">No</text><text x="275" y="120" text-anchor="middle">No</text><text x="400" y="120" text-anchor="middle">/api/v1/orders</text><text x="525" y="120" text-anchor="middle">201 Created</text><text x="632" y="120" text-anchor="middle">New entity</text><text x="62" y="155" text-anchor="middle" font-weight="bold" fill="#f59e0b">PUT</text><text x="165" y="155" text-anchor="middle">No</text><text x="275" y="155" text-anchor="middle">Yes</text><text x="400" y="155" text-anchor="middle">/api/v1/orders/42</text><text x="525" y="155" text-anchor="middle">200 / 204</text><text x="632" y="155" text-anchor="middle">Replace full</text><text x="62" y="190" text-anchor="middle" font-weight="bold" fill="#8b5cf6">PATCH</text><text x="165" y="190" text-anchor="middle">No</text><text x="275" y="190" text-anchor="middle">Conditional</text><text x="400" y="190" text-anchor="middle">/api/v1/orders/42</text><text x="525" y="190" text-anchor="middle">200 OK</text><text x="632" y="190" text-anchor="middle">Modify parts</text></g></svg>`,
      caption: {
        en: 'Safe methods never mutate server state; idempotent methods can be repeated safely without altered side effects.',
        bn: 'নিরাপদ মেথড সার্ভারের ডেটা পরিবর্তন করে না; আইডেমপোটেন্ট মেথড বারবার চালালেও সার্ভারের একই ফলাফল বজায় থাকে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Collection vs Item Archetypes: The Plural Standard', bn: '৩. কালেকশন বনাম আইটেম কাঠামো: বহুবচনের মানদণ্ড' } },
    {
      type: 'para',
      text: {
        en: 'RESTful resource corridors alternate between collections and items. By global industry consensus, collections are named using plural nouns (/customers). Appending an identifier addresses a specific item within that collection (/customers/101). Sub-resources follow the exact same alternating rhythm (/customers/101/invoices).',
        bn: 'RESTful লিংকের পথ কালেকশন এবং আইটেমের মধ্যে পর্যায়ক্রমে আবর্তিত হয়। বিশ্বজনীন নিয়ম অনুযায়ী কালেকশনের নাম বহুবচনে লিখতে হয় (/customers)। সেই নামের শেষে আইডি যোগ করলে নির্দিষ্ট একটি আইটেম নির্দেশিত হয় (/customers/101)। সাব-রিসোর্সগুলোও ঠিক এই একই নিয়মে তৈরি হয় (/customers/101/invoices)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `Collection URI:  /api/v1/orders
                 |---> Represents the entire collection of orders

Item URI:        /api/v1/orders/8842
                 |---> Represents a single specific order entity

Sub-resource:    /api/v1/orders/8842/items
                 |---> Represents the collection of items inside order 8842`,
      caption: {
        en: 'Corridors maintain a strict alternating rhythm: collection -> item -> sub-collection.',
        bn: 'লিংকের পথ সর্বদা নিয়ম মেনে চলে: কালেকশন -> সিঙ্গেল আইটেম -> সাব-কালেকশন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Mapping CRUD to HTTP Verbs: Semantics & Guarantees', bn: '৪. CRUD-এর সাথে HTTP মেথডের ম্যাপিং: অর্থ ও নিরাপত্তা' } },
    {
      type: 'para',
      text: {
        en: 'Every standard database CRUD operation maps to a distinct HTTP verb with explicit safety and idempotency guarantees. POST creates an entity under a parent collection. GET safely reads entities. PUT completely replaces an entity at a known URI. PATCH applies partial delta changes. DELETE permanently removes an entity.',
        bn: 'ডাটাবেসের প্রতিটি সাধারণ CRUD অপারেশন নির্দিষ্ট HTTP মেথডের সাথে সম্পর্কযুক্ত থাকে। POST কালেকশনের ভেতর নতুন রেকর্ড তৈরি করে। GET নিরাপদে ডেটা পড়ে। PUT কোনো নির্দিষ্ট লিংকে পুরো ডেটা প্রতিস্থাপন করে। PATCH আংশিক ডেটা আপডেট করে। আর DELETE কোনো রেকর্ড চিরতরে মুছে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// HTTP verb contracts in Express.js:
import express from "express";
const app = express();
app.use(express.json());

const store = new Map([[1, { id: 1, title: "Learn REST", completed: false }]]);

// Read (Safe + Idempotent)
app.get("/tasks/:id", (req, res) => {
  const task = store.get(Number(req.params.id));
  task ? res.json(task) : res.status(404).json({ error: "Task not found" });
});

// Full Replacement (Idempotent)
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedTask = { id, title: req.body.title, completed: Boolean(req.body.completed) };
  store.set(id, updatedTask);
  res.json(updatedTask);
});

// Partial Delta Update (Non-idempotent by default)
app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = store.get(id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  if (req.body.completed !== undefined) task.completed = req.body.completed;
  res.json(task);
});`,
      caption: {
        en: 'Express routes faithfully implement the precise semantic contract of each HTTP verb.',
        bn: 'এক্সপ্রেস রাউটার প্রতিটি HTTP মেথডের নির্দিষ্ট নিয়ম পুঙ্খানুপুঙ্খভাবে কার্যকর করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The RPC-over-HTTP Anti-Pattern: Verb Leaks and Cache Destruction', bn: '৫. RPC-over-HTTP অ্যান্টি-প্যাটার্ন: লিংকে ক্রিয়া ঢুকিয়ে ক্যাশ নষ্ট করা' } },
    {
      type: 'para',
      text: {
        en: 'When developers funnel all requests through POST /api/do or embed actions inside GET requests (e.g. GET /users/42/delete), they recreate RPC (Remote Procedure Call) disguised as HTTP. This destroys browser caching, confuses CDNs, and exposes mutating operations to automated crawlers that prefetch GET links.',
        bn: 'ডেভেলপাররা যখন সব কাজ POST /api/do দিয়ে চালায় বা GET লিংকের ভেতর কাজ ঢুকিয়ে দেয় (যেমন GET /users/42/delete), তখন তারা মূলত HTTP-র বদলে RPC চালাচ্ছে। এর ফলে ব্রাউজার ক্যাশিং নষ্ট হয়, সিডিএন অকেজো হয়ে পড়ে এবং ব্রাউজারের স্বয়ংক্রিয় প্রিফেচ বট ভুল করে ডেটা ডিলিট করে দিতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `DISASTER SCENARIO: Mutating GET request in the wild
Client HTML: <a href="/invoices/102/cancel">Cancel Invoice</a>
Bot Action: Googlebot or Bingbot crawls page and pre-fetches all <a> links
Result: Every customer invoice is canceled automatically without human intention!

RULE: Never use GET for actions that mutate state. Mutation requires POST/PUT/DELETE.`,
      caption: {
        en: 'Crawlers and browser prefetchers execute GET links; never anchor mutations to GET.',
        bn: 'সার্চ ইঞ্জিন বট নিজে থেকেই সব GET লিংকে ঢোকে; তাই GET-এ ডেটা পরিবর্তনের কাজ রাখা নিষিদ্ধ।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The REST Status Code Contract: Semantic Honesty', bn: '৬. REST স্ট্যাটাস কোডের চুক্তি: সঠিক স্ট্যাটাস কোড প্রদান' } },
    {
      type: 'para',
      text: {
        en: 'RESTful services communicate operational outcomes using standard HTTP status codes. A successful entity creation returns 201 Created alongside a Location header pointing to the newly minted item. Successful deletion returns 204 No Content. State collisions return 409 Conflict, and invalid input payloads return 422 Unprocessable Entity.',
        bn: 'RESTful সার্ভার কাজের ফলাফল জানাতে স্ট্যান্ডার্ড HTTP স্ট্যাটাস কোড ব্যবহার করে। নতুন ডেটা তৈরি হলে ২০১ Created-এর সাথে Location হেডারে নতুন লিংকের ঠিকানা দিতে হয়। সফলভাবে মুছে গেলে ২০৪ No Content ফেরত দিতে হয়। কনফ্লিক্ট হলে ৪০৯ এবং ডাটা ভ্যালিডেশন ব্যর্থ হলে ৪২২ Unprocessable Entity ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Creating a new article: */
POST /api/v1/articles HTTP/1.1
Host: api.codeshikhon.com
Content-Type: application/json

{"title": "Mastering REST Design"}

/* Server returns 201 Created with canonical Location header: */
HTTP/1.1 201 Created
Location: /api/v1/articles/942
Content-Type: application/json

{"id": 942, "title": "Mastering REST Design", "createdAt": "2026-09-26T10:00:00Z"}`,
      caption: {
        en: 'Status 201 confirms creation and supplies the canonical URL in the Location header.',
        bn: '২০১ স্ট্যাটাস ডেটা তৈরির সত্যতা জানায় এবং Location হেডারে নতুন লিঙ্কটি দিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The "200 OK with Error" Anti-Pattern: Blinding the Infrastructure', bn: '৭. "২০০ OK-র ভেতর এরর" অ্যান্টি-প্যাটার্ন: সিস্টেমকে বিভ্রান্ত করা' } },
    {
      type: 'para',
      text: {
        en: 'A toxic habit among inexperienced developers is returning HTTP 200 OK for failed operations, burying error details inside the JSON body: {"status": "error", "code": 404}. This destroys infrastructure visibility: API gateways cannot report error spikes, monitoring alerts stay silent, and CDNs cache the error as a valid response.',
        bn: 'একটি ক্ষতিকর অভ্যাস হলো সব ব্যর্থ অপারেশনেও HTTP 200 OK পাঠিয়ে বডির ভেতরে এরর লেখা: {"status": "error", "code": 404}। এটি পুরো সিস্টেমকে অন্ধ করে দেয়: এপিআই গেটওয়ে এরর ট্র্যাক করতে পারে না, মনিটরিং অ্যালার্ম বাজে না এবং সিডিএন প্রক্সি এই ভুল রেসপন্সটিকে সফল মনে করে ক্যাশ করে ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ THE 200-OK LIE:
// res.status(200).json({ success: false, error: "Record not found" });
// Monitoring tools (Datadog, Prometheus) record a 100% success rate!

// ✅ THE RESTFUL TRUTH:
function getArticle(req, res) {
  const article = findArticle(req.params.id);
  if (!article) {
    // Return honest 404 with standard RFC 9457 problem details
    return res.status(404).json({
      type: "https://api.codeshikhon.com/errors/not-found",
      title: "Article Not Found",
      status: 404,
      detail: \`No article matches identifier \${req.params.id}\`
    });
  }
  res.json(article);
}`,
      caption: {
        en: 'Honest HTTP status codes ensure reverse proxies, loggers, and monitoring trigger accurately.',
        bn: 'সঠিক এইচটিটিপি স্ট্যাটাস কোড সিডিএন, প্রক্সি ও অ্যালার্ম সিস্টেমকে সজাগ রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. URI Typography Conventions: Hyphens, Lowercase & Clean Slugs', bn: '৮. URI টাইপোগ্রাফি নিয়মাবলি: হাইফেন, ছোট হাতের অক্ষর ও স্ল্যাশ' } },
    {
      type: 'para',
      text: {
        en: 'Industry standards mandate predictable URI typography. Always use lowercase characters to avoid casing mismatches. Separate words with hyphens (kebab-case: /user-profiles), never underscores. Omit trailing slashes and file extensions.',
        bn: 'RFC 3986 অনুযায়ী URI পাথ কেস-সেনসিটিভ। আধুনিক মানদণ্ড অনুযায়ী ক্যাপিটাল লেটার এড়িয়ে সর্বদা ছোট হাতের অক্ষর ব্যবহার করুন। একাধিক শব্দের মাঝে হাইফেন (kebab-case: /user-profiles) দিন, আন্ডারস্কোর বা camelCase নয়। শেষে অপ্রয়োজনীয় স্ল্যাশ ও ফাইল এক্সটেনশন বাদ দিন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ BAD URI DESIGNS:
/api/UserProfiles/        (Mixed case + trailing slash)
/api/user_profiles.json   (Underscores + file extension)
/api/getUserOrders?uId=12 (Embedded verb + camelCase query)

✅ CLEAN RESTFUL URIS:
/api/v1/user-profiles
/api/v1/users/12/orders`,
      caption: {
        en: 'Predictable URI typography prevents routing ambiguity and parsing defects.',
        bn: 'সুন্দর ও সুস্পষ্ট ইউআরআই টাইপোগ্রাফি রাউটিং জটিলতা এবং পার্সিং ভুল চিরতরে দূর করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Self-Describing Messages & Media Negotiation', bn: '৯. স্ব-বর্ণনামূলক মেসেজ ও মিডিয়া নেগোসিয়েশন' } },
    {
      type: 'para',
      text: {
        en: 'A foundational tenet of REST is that every message must be self-describing. The client and server agree on format using HTTP headers. The client sends Accept: application/json to express data preferences, while the server attaches Content-Type: application/json; charset=utf-8 to describe the response bytes.',
        bn: 'REST-এর একটি প্রধান স্তম্ভ হলো প্রতিটি মেসেজ নিজে থেকেই নিজের পরিচয় দেবে। ক্লায়েন্ট ও সার্ভার হেডারের সাহায্যে ফরম্যাট ঠিক করে। ক্লায়েন্ট Accept: application/json পাঠিয়ে জানায় সে কী ধরনের ফরম্যাট চায়, আর সার্ভার Content-Type: application/json; charset=utf-8 পাঠিয়ে নিশ্চিত করে সে জেসন পাঠিয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client announces expected media representation: */
GET /api/v1/reports/sales HTTP/1.1
Host: api.codeshikhon.com
Accept: application/json

/* Server confirms wire encoding via Content-Type: */
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Vary: Accept

{"totalRevenue": 450000, "currency": "BDT"}`,
      caption: {
        en: 'Self-describing headers allow clients and intermediaries to safely parse payload representations.',
        bn: 'স্ব-বর্ণনামূলক হেডার ক্লায়েন্ট ও প্রক্সিকে পেলোড সঠিকভাবে পার্স করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production REST Router: The Complete Express Architecture', bn: '১০. প্রোডাকশন REST রাউটার: সম্পূর্ণ এক্সপ্রেস আর্কিটেকচার' } },
    {
      type: 'para',
      text: {
        en: 'A production-grade REST router brings all these principles together: plural noun endpoints, correct HTTP verbs, accurate status codes (201 with Location, 204 for delete), and clean input validation error handling with 400 and 404 responses.',
        bn: 'একটি প্রোডাকশন-গ্রেড REST রাউটার এই সব মূলনীতিকে একসাথে প্রয়োগ করে: বহুবচনে রিসোর্সের নাম, সঠিক HTTP মেথড, নির্ভুল স্ট্যাটাস কোড (Location হেডারসহ ২০১, ডিলিটের জন্য ২০৪ কোড) এবং ৪০০ ও ৪০৪ দিয়ে পরিচ্ছন্ন এরর হ্যান্ডলিং।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const router = express.Router();

let products = [
  { id: 1, name: "Keyboard", price: 1500 },
  { id: 2, name: "Mouse", price: 800 }
];

// GET /products - List collection
router.get("/products", (req, res) => {
  res.json({ count: products.length, data: products });
});

// POST /products - Create new entity (Returns 201 + Location)
router.post("/products", (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== "number") {
    return res.status(400).json({ error: "Name and numeric price required" });
  }
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201)
     .location(\`/api/v1/products/\${newProduct.id}\`)
     .json(newProduct);
});

// DELETE /products/:id - Remove entity (Returns 204 No Content)
router.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send(); // 204 carries empty body by specification
});`,
      caption: {
        en: 'A complete RESTful resource controller adhering strictly to RFC HTTP specifications.',
        bn: 'একটি সম্পূর্ণ RESTful রিসোর্স কন্ট্রোলার যা RFC এইচটিটিপি স্পেসিফিকেশন সম্পূর্ণ মেনে চলে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-gra-ex1',
      kind: 'predict',
      topic: 'rest: created resource status code',
      question: {
        en: 'What HTTP status code must a RESTful server return upon successfully creating a new resource via POST?',
        bn: 'POST রিকোয়েস্টের মাধ্যমে সফলভাবে নতুন রিসোর্স তৈরি হলে RESTful সার্ভারকে কোন HTTP স্ট্যাটাস কোড পাঠাতে হয়?'
      },
      code: `/* Successful resource creation response */
/* HTTP/1.1 ___ Created */`,
      answer: '201',
      accept: ['201'],
      hint: {
        en: 'Status 201.',
        bn: 'স্ট্যাটাস ২০১।'
      },
      explanation: {
        en: 'HTTP 201 Created signifies that the request succeeded and resulted in the creation of a new resource.',
        bn: 'HTTP 201 Created নিশ্চিত করে যে রিকোয়েস্ট সফল হয়েছে এবং একটি নতুন ডেটা রেকর্ড তৈরি হয়েছে।'
      }
    },
    {
      id: 'rst-gra-ex2',
      kind: 'mcq',
      topic: 'rest: URI design best practice',
      question: {
        en: 'Which of the following URIs adheres strictly to RESTful resource modeling conventions?',
        bn: 'নিচের কোন URI-টি RESTful রিসোর্স মডেলিংয়ের সার্বজনীন মানদণ্ড সবচেয়ে নিখুঁতভাবে মেনে চলে?'
      },
      options: [
        { en: '/api/v1/orders/104/items', bn: '/api/v1/orders/104/items' },
        { en: '/api/v1/getOrders?orderId=104', bn: '/api/v1/getOrders?orderId=104' },
        { en: '/api/v1/orders_delete/104', bn: '/api/v1/orders_delete/104' },
        { en: '/api/v1/create_new_order.json', bn: '/api/v1/create_new_order.json' }
      ],
      answer: 0,
      hint: {
        en: 'Plural nouns with hierarchical relationship.',
        bn: 'বহুবচনের বিশেষ্য এবং সঠিক হায়ারার্কি।'
      },
      explanation: {
        en: '/api/v1/orders/104/items uses clean plural nouns to identify the sub-resource collection without leaking verbs.',
        bn: '/api/v1/orders/104/items কোনো ক্রিয়া যুক্ত না করে সুন্দর বহুবচন বিশেষ্য দিয়ে রিসোর্স নির্দেশ করেছে।'
      }
    },
    {
      id: 'rst-gra-ex3',
      kind: 'mcq',
      topic: 'rest: 204 no content semantics',
      question: {
        en: 'What is unique about the HTTP 204 No Content response commonly returned after a successful DELETE?',
        bn: 'সফল DELETE অপারেশনের পর সাধারণত পাঠানো HTTP 204 No Content রেসপন্সের বিশেষ বৈশিষ্ট্য কী?'
      },
      options: [
        { en: 'It must not include any message body payload whatsoever', bn: 'এর সাথে কোনো মেসেজ বডি বা পেলোড থাকা সম্পূর্ণরূপে নিষিদ্ধ' },
        { en: 'It requires a password in the headers', bn: 'হেডারে পাসওয়ার্ড থাকতে হয়' },
        { en: 'It automatically refreshes the DNS records', bn: 'ডিএনএস স্বয়ংক্রিয়ভাবে রিফ্রেশ হয়' },
        { en: 'It is only supported in Python', bn: 'এটি শুধু পাইথনে কাজ করে' }
      ],
      answer: 0,
      hint: {
        en: 'Carries no body payload.',
        bn: 'কোনো বডি পেলোড বহন করে না।'
      },
      explanation: {
        en: 'RFC 9110 specifies that a 204 No Content response indicates success while strictly prohibiting any response body payload.',
        bn: 'RFC ৯১১০ নিয়ম অনুযায়ী ২০৪ স্ট্যাটাস কোড সফল নির্দেশ করে কিন্তু এতে কোনো বডি ডেটা পাঠানো যায় না।'
      }
    }
  ],
  quiz: {
    id: 'rst-gra-quiz',
    title: { en: 'REST Resource Grammar & URI Design Quiz', bn: 'REST রিসোর্স ব্যাকরণ ও URI ডিজাইন কুইজ' },
    questions: [
      {
        id: 'rgq1',
        kind: 'mcq',
        topic: 'rest: 200 with error anti-pattern',
        question: {
          en: 'Why is returning "HTTP 200 OK" with an error object inside the body considered a dangerous anti-pattern?',
          bn: 'বডির ভেতরে এরর থাকা সত্ত্বেও "HTTP 200 OK" পাঠানো কেন একটি মারাত্মক ক্ষতিকর অ্যান্টি-প্যাটার্ন?'
        },
        options: [
          { en: 'It blinds reverse proxies, CDNs, API gateways, and APM monitoring tools from recognizing and alerting on failure spikes', bn: 'এটি রিভার্স প্রক্সি, সিডিএন, এপিআই গেটওয়ে এবং মনিটরিং টুলগুলোকে ব্যর্থতার আসল হার বুঝতে বাধা দেয়' },
          { en: 'It makes the database explode', bn: 'ডাটাবেস ভেঙে যায়' },
          { en: 'Because browsers cannot parse JSON inside 200', bn: 'ব্রাউজার ২০০ কোডে জেসন পার্স করতে পারে না' },
          { en: 'It makes the network speed slower by 90%', bn: 'নেটওয়ার্ক ৯০% ধীরগতির হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Blinds monitoring and caching layers.',
          bn: 'মনিটরিং ও ক্যাশিং স্তরকে অন্ধ করে দেয়।'
        },
        explanation: {
          en: 'Intermediary infrastructure (monitoring tools, CDNs, error trackers) rely exclusively on HTTP status codes to assess health and route requests.',
          bn: 'সিস্টেমের স্বাস্থ্য পর্যবেক্ষণ এবং সিডিএন ক্যাশিংয়ের পুরো নিয়ম এইচটিটিপি স্ট্যাটাস কোডের ওপর নির্ভর করে চলে।'
        }
      },
      {
        id: 'rgq2',
        kind: 'mcq',
        topic: 'rest: location header with 201',
        question: {
          en: 'When a REST API returns "201 Created", which response header should point to the newly created entity?',
          bn: 'REST এপিআই যখন "201 Created" পাঠায়, তখন সদ্য তৈরি হওয়া রিসোর্সের লিংক দিতে কোন হেডার ব্যবহার করা উচিত?'
        },
        options: [
          { en: 'Location', bn: 'Location' },
          { en: 'Destination', bn: 'Destination' },
          { en: 'Link-Target', bn: 'Link-Target' },
          { en: 'Content-Address', bn: 'Content-Address' }
        ],
        answer: 0,
        hint: {
          en: 'The Location header.',
          bn: 'Location হেডার।'
        },
        explanation: {
          en: 'The Location header provides the canonical URI of the newly created resource following a 201 Created response.',
          bn: '২০১ রেসপন্সের পর নতুন রিসোর্সটির সঠিক ইউআরআই জানাতে Location হেডার ব্যবহৃত হয়।'
        }
      },
      {
        id: 'rgq3',
        kind: 'mcq',
        topic: 'rest: method idempotency comparison',
        question: {
          en: 'Which HTTP method is inherently non-idempotent, meaning repeating the identical request multiple times produces cumulative side effects?',
          bn: 'কোন HTTP মেথডটি সহজাতভাবে নন-আইডেমপোটেন্ট, অর্থাৎ একই রিকোয়েস্ট বারবার পাঠালে সার্ভারে অতিরিক্ত বা দ্বিগুণ প্রভাব পড়ে?'
        },
        options: [
          { en: 'POST (creates a new child resource on each subsequent request)', bn: 'POST (প্রতিবার পাঠালে একটি করে নতুন রিসোর্স তৈরি হয়)' },
          { en: 'GET (reads the same representation)', bn: 'GET (একই তথ্য একাধিকবার পড়ে)' },
          { en: 'PUT (replaces the destination entity with identical state)', bn: 'PUT (গন্তব্যের ডেটাকে হুবহু প্রতিস্থাপন করে)' },
          { en: 'DELETE (deleting an already deleted ID remains deleted)', bn: 'DELETE (মুছে ফেলা আইডি পুনরায় মুছলেও ডেটা মোছাই থাকে)' }
        ],
        answer: 0,
        hint: {
          en: 'Creates a new entry on each call.',
          bn: 'প্রতিটি রিকোয়েস্টে নতুন এন্ট্রি তৈরি করে।'
        },
        explanation: {
          en: 'POST is non-idempotent because dispatching five identical POST requests results in five separate records in the database.',
          bn: 'POST নন-আইডেমপোটেন্ট কারণ ৫টি অভিন্ন POST পাঠালে ডাটাবেসে ৫টি পৃথক রেকর্ড সংরক্ষিত হয়।'
        }
      },
      {
        id: 'rgq4',
        kind: 'mcq',
        topic: 'rest: plural noun uri convention',
        question: {
          en: 'Which of the following URIs strictly complies with RESTful plural noun conventions without verb leaking?',
          bn: 'নিচের কোন URI-টি ভার্ব বা ক্রিয়ামুক্ত থেকে বিশুদ্ধ RESTful বহুবচন বিশেষ্য নিয়ম মেনে চলে?'
        },
        options: [
          { en: 'GET /api/v1/articles/99/comments', bn: 'GET /api/v1/articles/99/comments' },
          { en: 'POST /api/v1/getCommentsByArticleId?id=99', bn: 'POST /api/v1/getCommentsByArticleId?id=99' },
          { en: 'GET /api/v1/fetch-article-data/99', bn: 'GET /api/v1/fetch-article-data/99' },
          { en: 'POST /api/v1/article/99/deleteComment', bn: 'POST /api/v1/article/99/deleteComment' }
        ],
        answer: 0,
        hint: {
          en: 'Uses plural nouns with hierarchical scoping and standard verbs.',
          bn: 'বহুবচন বিশেষ্য এবং স্ট্যান্ডার্ড মেথড ব্যবহার করে।'
        },
        explanation: {
          en: 'Plural nouns (/articles/99/comments) clearly denote the target sub-collection while HTTP GET handles retrieval without verb pollution.',
          bn: 'বহুবচন নাম (/articles/99/comments) সাব-কালেকশনকে নির্ভুলভাবে চিহ্নিত করে এবং GET মেথড ডেটা আনার কাজ সম্পন্ন করে।'
        }
      }
    ]
  }
};
