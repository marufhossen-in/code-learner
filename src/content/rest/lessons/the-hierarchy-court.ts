import type { Lesson } from '../../../lib/types';

export const hierarchyCourtLesson: Lesson = {
  slug: 'the-hierarchy-court',
  tech: 'rest',
  title: {
    en: 'Hierarchy Court: Sub-Resources, URI Path Depth & Query Modeling',
    bn: 'স্তর-দরবার: সাব-রিসোর্স, পাথ গভীরতা ও কোয়েরি মডেলিং'
  },
  summary: {
    en: 'Master hierarchical REST API URL design across 10 structured topics. Understand the foundational principle: Path is Identity, Query is Presentation. Learn when to model child entities as sub-resources versus independent collections. Avoid the deep nesting trap by implementing the shallow URL pattern. Compare UUIDs with natural slugs. Master singleton resources like /me and protect them from CDN cache poisoning. Build nested Express routers with mergeParams.',
    bn: '১০টি সুসংগঠিত পয়েন্টে হায়ারার্কিকাল REST API ডিজাইন আয়ত্ত করুন। মূল নীতিটি জানুন: পাথ হলো পরিচয়, আর কোয়েরি হলো উপস্থাপনা। কখন সাব-রিসোর্স ব্যবহার করতে হবে আর কখন স্বাধীন কালেকশন তৈরি করতে হবে তা শিখুন। শ্যালো ইউআরআই প্যাটার্ন প্রয়োগ করে অতিরিক্ত ডিপ-নেসটিং এর জটিলতা এড়ান। UUID বনাম স্লাগের তুলনা করুন। /me-এর মতো সিঙ্গেলটন রিসোর্স তৈরি ও সিডিএন ক্যাশ পয়জনিং ঠেকানো শিখুন। mergeParams দিয়ে এক্সপ্রেস নেস্টেড রাউটার বানান।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-transfer-altar',
    tech: 'rest',
    title: {
      en: 'The Transfer Altar: PUT, PATCH, Async 202 & Richardson Maturity Synthesis',
      bn: 'স্থানান্তর-বেদি: PUT, PATCH, অ্যাসিনক্রোনাস ২০২ ও রিচার্ডসন ম্যাচিউরিটি সংশ্লেষ'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Golden Law: Path is Identity, Query is Presentation', bn: '১. স্বর্ণালী নিয়ম: পাথ হলো পরিচয়, কোয়েরি হলো উপস্থাপনা' } },
    {
      type: 'para',
      text: {
        en: 'The question mark (?) forms the strictest boundary in REST (Representational State Transfer) architecture. Everything to the left of the question mark identifies which resource is being addressed. Everything to the right of the question mark specifies how that representation should be presented (filters, pagination, sorting, or field projections).',
        bn: 'REST (Representational State Transfer) আর্কিটেকচারে প্রশ্নবোধক চিহ্ন (?) একটি সুনির্দিষ্ট সীমারেখা তৈরি করে। প্রশ্নবোধক চিহ্নের বাম পাশের সবকিছু নির্দেশ করে কোন নির্দিষ্ট রিসোর্সকে ডাকা হচ্ছে। আর ডান পাশের সবকিছু নির্দেশ করে সেই ডেটাকে কীভাবে উপস্থাপন করা হবে (যেমন ফিল্টার, পেজিনেশন, শর্টিং বা নির্দিষ্ট ফিল্ড দেখানো)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `https://api.codeshikhon.com/v1/orders/8842/items?status=shipped&limit=10&sort=-created_at
\\_____________________________________________/ \\_______________________________________/
               PATH (Identity)                              QUERY (Presentation)
Identifies exactly which resource exists:          Dictates presentation format:
- Order 8842                                      - Filter: status=shipped
- Collection of items inside that order           - Limit: 10 items
                                                  - Sort: newest first`,
      caption: {
        en: 'Path components name the resource; query parameters shape and filter the representation.',
        bn: 'পাথ রিসোর্সের নাম নির্ধারণ করে; কোয়েরি প্যারামিটার ডেটা ফিল্টার ও প্রদর্শন রূপ সাজায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Sub-Resources vs Sovereign Collections: Lifecycle Dependency', bn: '২. সাব-রিসোর্স বনাম স্বাধীন কালেকশন: জীবনচক্রের নির্ভরতা' } },
    {
      type: 'para',
      text: {
        en: 'A child entity should only be modeled as a sub-resource (/orders/42/items) when it has a strict lifecycle dependency on the parent. An order item cannot exist without an order; if the order is deleted, the item vanishes. Conversely, independent entities (like /products or /users) must live at top-level collections.',
        bn: 'একটি চাইল্ড ডেটাকে তখনই সাব-রিসোর্স (/orders/42/items) বানানো উচিত যখন তার অস্তিত্ব অভিভাবক ডেটার ওপর সম্পূর্ণ নির্ভরশীল হয়। অর্ডার ছাড়া অর্ডার আইটেম থাকতে পারে না; অর্ডার মুছে গেলে আইটেমও মুছে যায়। পক্ষান্তরে, যেসব সত্তা স্বাধীনভাবে বাঁচে (যেমন /products বা /users), সেগুলোকে সর্বদা শীর্ষ স্তরের কালেকশনে রাখতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `✅ CORRECT: Strict Parent-Child Lifecycle
POST /orders/42/items         (Order item cannot exist without Order 42)
GET  /articles/99/comments    (Comment belongs exclusively to Article 99)

❌ ANTI-PATTERN: Sovereign Entities trapped in sub-paths
GET  /categories/5/products   (Products exist independently of categories!)
✅ BETTER: Sovereign collection with query filter:
GET  /products?category=5`,
      caption: {
        en: 'Use sub-resources for strict lifecycle ownership; use query parameters for loose associations.',
        bn: 'সম্পূর্ণ নির্ভরশীল সম্পর্কের জন্য সাব-রিসোর্স এবং সাধারণ সম্পর্কের জন্য কোয়েরি প্যারামিটার ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Deep Nesting Trap: Maximum Two-Hop Rule', bn: '৩. অতিরিক্ত নেস্টিংয়ের ফাঁদ: সর্বোচ্চ দুই-ধাপের নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'Nesting URLs more than two levels deep produces an unmaintainable architectural anti-pattern. A corridor like /orgs/1/departments/4/teams/9/projects/12/tasks/88 is fragile: every URL change cascades across clients, authorization checks must verify five ancestor levels, and routing becomes an absolute nightmare.',
        bn: 'দুই স্তরের বেশি গভীর ইউআরআই তৈরি করা একটি মারাত্মক ক্ষতিকর অ্যান্টি-প্যাটার্ন। /orgs/1/departments/4/teams/9/projects/12/tasks/88-এর মতো দীর্ঘ লিংক অত্যন্ত ভঙ্গুর: কোনো প্যারেন্ট আইডি বদলালে সব লিংক নষ্ট হয়, পারমিশন মেলাতে ৫টি ধাপ চেক করতে হয় এবং রাউটিং জটিল হয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ FRAGILE: 5-level deep nested corridor:
/companies/3/branches/12/departments/4/employees/99/paystubs/2026

✅ CLEAN & RESILIENT: Maximum 2-level depth:
Top-level collection:
GET /paystubs/84120

Or scoped by immediate direct owner:
GET /employees/99/paystubs`,
      caption: {
        en: 'Limit URL hierarchy to a maximum of two levels (collection/id/sub-collection).',
        bn: 'ইউআরআই পাথ সর্বোচ্চ দুই স্তরে (কালেকশন/আইডি/সাব-কালেকশন) সীমাবদ্ধ রাখুন।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Deep Nesting vs Shallow URL Architecture', bn: 'ডিপ নেস্টিং বনাম শ্যালো URL আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Comparison between deep nesting and shallow URL pattern"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="320" height="200" rx="8" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="175" y="40" text-anchor="middle" font-weight="bold" fill="#ef4444">Anti-Pattern: Deep Nesting (>2 levels)</text><rect x="30" y="55" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="75" font-size="11">/orgs/1/teams/4/projects/12/tasks/88</text><text x="40" y="90" font-size="10" fill="#ef4444">• Cascading URL brittleness</text><rect x="30" y="105" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="125" font-size="11">4 Parent existence checks per query</text><text x="40" y="140" font-size="10" fill="#ef4444">• High database join latency</text><rect x="30" y="155" width="290" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="175" font-size="11">Complex authorization chains</text><text x="40" y="192" font-size="10" fill="#ef4444">• Client routing tightly coupled</text><rect x="365" y="15" width="320" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="525" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">Recommended: Shallow URL Pattern</text><rect x="380" y="55" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="75" font-size="11">POST /projects/12/tasks</text><text x="390" y="90" font-size="10" fill="#10b981">• Create task in project context</text><rect x="380" y="105" width="290" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="125" font-size="11">GET /tasks/88  |  PATCH /tasks/88</text><text x="390" y="140" font-size="10" fill="#10b981">• Direct O(1) item lookup by primary ID</text><rect x="380" y="155" width="290" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="175" font-size="11">GET /tasks?project_id=12&amp;status=open</text><text x="390" y="192" font-size="10" fill="#10b981">• Filter presentation via query params</text></g></svg>`,
      caption: {
        en: 'The shallow URL pattern creates resources in context but addresses existing items directly at root collections.',
        bn: 'শ্যালো প্যাটার্নে প্যারেন্টের অধীনে রিসোর্স তৈরি হলেও বিদ্যমান আইটেমকে সরাসরি নিজস্ব কালেকশনে কল করা হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Shallow URL Pattern: Nest for Creation, Direct for Action', bn: '৪. শ্যালো ইউআরএল প্যাটার্ন: তৈরির সময় নেস্টেড, অ্যাকশনে সরাসরি' } },
    {
      type: 'para',
      text: {
        en: 'The industry-standard solution to the deep nesting trap is the Shallow URL Pattern. You nest URLs when creating a resource under a parent (POST /orders/42/items) or listing them in context (GET /orders/42/items). Once the child entity possesses its own unique ID, you address it directly at the root (GET /items/101, DELETE /items/101).',
        bn: 'ডিপ নেস্টিং এড়ানোর বিশ্বমানের সমাধান হলো Shallow URL Pattern। নতুন ডেটা তৈরি (POST /orders/42/items) বা প্যারেন্টের অধীন দেখার জন্য (GET /orders/42/items) নেস্টেড লিংক ব্যবহার করুন। কিন্তু চাইল্ড ডেটার নিজস্ব আইডি তৈরি হয়ে গেলে পরবর্তী কাজের জন্য সরাসরি মূল লিংকে ডাকুন (GET /items/101, DELETE /items/101)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Shallow Route Design in Express:
import express from "express";
const app = express();

// 1. Nested: Scoped listing and creation
app.get("/orders/:orderId/items", (req, res) => {
  res.json({ message: \`Listing items for order \${req.params.orderId}\` });
});
app.post("/orders/:orderId/items", (req, res) => {
  res.status(201).json({ message: \`Created item under order \${req.params.orderId}\` });
});

// 2. Shallow: Direct item manipulation via global item ID
app.get("/items/:itemId", (req, res) => {
  res.json({ message: \`Fetched item \${req.params.itemId} directly\` });
});
app.delete("/items/:itemId", (req, res) => {
  res.status(204).send();
});`,
      caption: {
        en: 'The shallow pattern keeps item mutation routes short and decoupled from parent hierarchy.',
        bn: 'শ্যালো প্যাটার্ন চাইল্ড আইটেমের রুটগুলোকে সংক্ষিপ্ত এবং প্যারেন্ট থেকে স্বাধীন রাখে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Identifiers: UUIDs vs Incremental Integers vs Vanity Slugs', bn: '৫. আইডেন্টিফায়ার: UUID বনাম ইনক্রিমেন্টাল পূর্ণসংখ্যা বনাম স্লাগ' } },
    {
      type: 'para',
      text: {
        en: 'Resource identifiers determine URL permanence. Auto-incrementing integers (/users/42) are readable but expose business metrics to scraping (competitors can deduce total orders). UUIDs (/orders/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d) prevent enumeration attacks. Human-readable slugs (/articles/learn-rest) are ideal for public SEO.',
        bn: 'রিসোর্স আইডি নির্ধারণ করে ইউআরআই কতটা স্থায়ী ও নিরাপদ হবে। ক্রমান্বয়ে বাড়া পূর্ণসংখ্যা (/users/42) সহজ হলেও ব্যবসায়িক গোপনীয়তা ফাঁস করে (প্রতিযোগী বুঝতে পারে মোট কয়টি অর্ডার হয়েছে)। UUID ব্যবহার করলে এ ধরনের অনুমানের আক্রমণ রোধ হয়। আর ব্লগ বা নিউজের জন্য সুন্দর স্লাগ (/articles/learn-rest) এসইও-র জন্য চমৎকার।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+--------------------+-----------------------+------------------------------------------+
| Identifier Type    | Example URI           | Best Use Case                            |
+--------------------+-----------------------+------------------------------------------+
| Integer Sequence   | /api/v1/invoices/1042 | Internal admin tools, legacy DBs         |
| UUID v4 / v7       | /api/v1/orders/f47ac1 | Public APIs, distributed microservices   |
| Vanity Slug        | /posts/mastering-http | Public content, blogs, SEO landing pages |
+--------------------+-----------------------+------------------------------------------+`,
      caption: {
        en: 'Select identifier strategies based on security requirements and indexing visibility.',
        bn: 'নিরাপত্তা এবং সার্চ ইঞ্জিনের প্রয়োজনীয়তার ওপর ভিত্তি করে আইডি নির্ধারণ করুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Singleton Resources: The Exceptions to the Plural Rule', bn: '৬. সিঙ্গেলটন রিসোর্স: বহুবচন নিয়মের যৌক্তিক ব্যতিক্রম' } },
    {
      type: 'para',
      text: {
        en: 'Singleton resources represent entities where only one instance exists in the current context. Examples include /me (the currently authenticated user profile) or /settings (the active application configuration). Unlike collections, singletons are named using singular nouns and do not append identifier path parameters.',
        bn: 'সিঙ্গেলটন রিসোর্স হলো এমন সত্তা যার নির্দিষ্ট কনটেক্সটে একটিমাত্র রূপ থাকে। উদাহরণস্বরূপ: /me (বর্তমানে লগইন থাকা ব্যবহারকারীর প্রোফাইল) অথবা /settings (অ্যাপ্লিকেশনের কনফিগারেশন)। সাধারণ কালেকশনের মতো এদের শেষে কোনো আইডি দিতে হয় না এবং এগুলো একবচনে লেখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Fetching the caller’s own identity: */
GET /api/v1/me HTTP/1.1
Host: api.codeshikhon.com
Authorization: Bearer valid_token_for_alice

/* Server returns Alice’s record without requiring her ID in the path: */
HTTP/1.1 200 OK
Content-Type: application/json

{"id": 401, "username": "alice", "role": "admin"}`,
      caption: {
        en: 'Singletons serve as context-sensitive aliases for the current authenticated principal.',
        bn: 'সিঙ্গেলটন বর্তমান লগইন থাকা ব্যবহারকারীর কনটেক্সট অনুযায়ী তথ্য প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Caching Hazards with Singletons: The /me CDN Poisoning Trap', bn: '৭. সিঙ্গেলটনে ক্যাশিং ঝুঁকি: /me এবং সিডিএন ক্যাশ পয়জনিং' } },
    {
      type: 'para',
      text: {
        en: 'Singletons like /me present a severe CDN security hazard. Because the URI /me is identical for all users, if a shared edge proxy caches Alice’s /me response, Bob will receive Alice’s private account details. To prevent cache poisoning, singleton responses must carry Cache-Control: private, no-store or Vary: Authorization.',
        bn: '/me-এর মতো সিঙ্গেলটন সিডিএন ক্যাশিংয়ের ক্ষেত্রে মারাত্মক নিরাপত্তা ঝুঁকি তৈরি করে। সবার জন্যই লিংকটি এক (/me)। তাই সিডিএন যদি এলিসের রেসপন্স ক্যাশ করে রাখে, তবে বব /me লোড করলে এলিসের গোপন ডেটা দেখতে পাবে। এটি রোধে /me-তে অবশ্যই Cache-Control: private, no-store বা Vary: Authorization হেডার দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Secure Express singleton handler:
app.get("/api/v1/me", (req, res) => {
  // CRITICAL: Prevent shared CDNs from caching personal aliases!
  res.set("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.set("Vary", "Authorization");

  const user = req.user; // Derived from Bearer JWT
  res.json({ id: user.id, email: user.email });
});

console.log("Singletons require explicit private cache guards");
// Output: Singletons require explicit private cache guards`,
      caption: {
        en: 'Explicit private cache directives prevent shared edge caches from leaking personal data.',
        bn: 'প্রাইভেট ক্যাশ নির্দেশিকা নিশ্চিত করে যে শেয়ার্ড সিডিএন অন্য ইউজারের তথ্য ফাঁস করবে না।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Filtering vs Sub-Resource Anti-Pattern: Smuggling in Paths', bn: '৮. ফিল্টারিং বনাম সাব-রিসোর্স ভুল: পাথে ফিল্টার ঢুকিয়ে দেওয়া' } },
    {
      type: 'para',
      text: {
        en: 'Never create custom path segments to represent filters or status queries (e.g. /users/active or /orders/status/shipped). This fractures RESTful resource identity and explodes the routing table. Filters belong strictly in query parameters (?status=active).',
        bn: 'কোনো ফিল্টার বা স্ট্যাটাস বোঝানোর জন্য কখনো নতুন পাথ তৈরি করবেন না (যেমন /users/active বা /orders/status/shipped)। এটি রিসোর্সের একক পরিচয় ভেঙে দেয় এবং রাউটিং জটিল করে তোলে। ফিল্টারিংয়ের সঠিক নিয়ম হলো কুয়েরি প্যারামিটার ব্যবহার করা (?status=active)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ FLAWED (Smuggling query filters into URL path):
GET /api/v1/orders/status/pending
GET /api/v1/users/role/moderator/city/dhaka
GET /api/v1/products/in-stock/price-under-1000

✅ RESTFUL (Query parameters for all dimensional filters):
GET /api/v1/orders?status=pending
GET /api/v1/users?role=moderator&city=dhaka
GET /api/v1/products?in_stock=true&max_price=1000`,
      caption: {
        en: 'Reserve paths for entity naming; delegate all multidimensional filtering to query strings.',
        bn: 'পাথ শুধুমাত্র রিসোর্সের নাম নির্ধারণে রাখুন; সব ধরনের ফিল্টারিং কুয়েরি স্ট্রিংয়ে রাখুন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Multi-Tenant Scoping: Path Prefixes vs Custom Headers', bn: '৯. মাল্টি-টেন্যান্ট স্কোপিং: পাথ প্রিফিক্স বনাম কাস্টম হেডার' } },
    {
      type: 'para',
      text: {
        en: 'In multi-tenant SaaS applications, tenant isolation can be modeled in two ways. Path-scoped corridors (/orgs/acme/projects) make tenant boundaries visible in URLs. Alternatively, header scoping (X-Tenant-ID) preserves clean generic paths while enforcing tenant context at the gateway.',
        bn: 'মাল্টি-টেন্যান্ট ক্লাউড অ্যাপ্লিকেশনে প্রতিষ্ঠানভেদে ডেটা আলাদা রাখার দুটি পদ্ধতি আছে। পাথ-স্কোপড করিডোরে (/orgs/acme/projects) লিংকের ভেতরেই প্রতিষ্ঠানের নাম থাকে। আবার হেডার স্কোপিংয়ে (X-Tenant-ID) লিঙ্ক ছোট রেখে গেটওয়ে লেভেলে প্রতিষ্ঠানভিত্তিক নিরাপত্তা প্রয়োগ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Multi-tenant resolution middleware:
function tenantMiddleware(req, res, next) {
  // Extract tenant from custom header or JWT token:
  const tenantId = req.headers["x-tenant-id"] || req.user?.tenantId;
  if (!tenantId) {
    return res.status(400).json({ error: "Missing required X-Tenant-ID header" });
  }
  req.tenantId = tenantId;
  next();
}

console.log("Tenant scoping can be decoupled from URL paths");
// Output: Tenant scoping can be decoupled from URL paths`,
      caption: {
        en: 'Header-based scoping keeps URIs clean and avoids excessive path nesting in SaaS apps.',
        bn: 'হেডার-ভিত্তিক স্কোপিং SaaS অ্যাপে ইউআরআই পরিষ্কার রাখে এবং অপ্রয়োজনীয় নেস্টিং কমায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Nested Routers: Express mergeParams', bn: '১০. নেস্টেড রাউটার বাস্তবায়ন: Express mergeParams' } },
    {
      type: 'para',
      text: {
        en: 'When constructing sub-resource routers in Express, parent route parameters (like :orderId) are inaccessible to child routers by default. Activating the mergeParams flag solves this boundary by bridging upstream URL tokens directly into req.params.',
        bn: 'এক্সপ্রেসে সাব-রিসোর্স রাউটার বানানোর সময় প্যারেন্ট রুটের প্যারামিটার (যেমন :orderId) সাধারণ অবস্থায় চাইল্ড রাউটারে পাওয়া যায় না। mergeParams ফ্ল্যাগটি চালু করলে এই বাধা কেটে যায় এবং প্যারেন্টের ইউআরএল টোকেনগুলো সরাসরি req.params-এ সংযুক্ত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";

const app = express();

// Child router MUST enable mergeParams to read :orderId from parent:
const itemRouter = express.Router({ mergeParams: true });

itemRouter.get("/", (req, res) => {
  // Successfully reads :orderId from parent URL mount!
  res.json({ orderId: req.params.orderId, items: ["Item A", "Item B"] });
});

// Parent router mounts child at sub-resource path:
app.use("/orders/:orderId/items", itemRouter);

console.log("mergeParams: true preserves parent route context across sub-routers");
// Output: mergeParams: true preserves parent route context across sub-routers`,
      caption: {
        en: 'mergeParams: true enables clean modularization of sub-resource routes.',
        bn: 'mergeParams: true সাব-রিসোর্স রাউটগুলোকে সুন্দরভাবে মডুলার রাখতে সাহায্য করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-hrc-ex1',
      kind: 'predict',
      topic: 'rest: express mergeParams option',
      question: {
        en: 'Which boolean option must be passed to express.Router() so that child routers can access URL parameters defined on parent routes?',
        bn: 'প্যারেন্ট রুটের প্যারামিটার চাইল্ড রাউটারে ব্যবহার করার জন্য express.Router()-এ কোন বুলিয়ান অপশনটি চালু করতে হয়?'
      },
      code: `/* Enable parent parameter inheritance: */
/* const childRouter = express.Router({ ___________: true }); */`,
      answer: 'mergeParams',
      accept: ['mergeParams', 'mergeParams: true'],
      hint: {
        en: 'mergeParams.',
        bn: 'mergeParams.'
      },
      explanation: {
        en: 'Passing mergeParams: true preserves the req.params values from the parent router when mounting child sub-routes.',
        bn: 'mergeParams: true অপশনটি প্যারেন্ট রাউটারের প্যারামিটার চাইল্ডের কাছে পৌঁছে দেয়।'
      }
    },
    {
      id: 'rst-hrc-ex2',
      kind: 'mcq',
      topic: 'rest: query vs path separation',
      question: {
        en: 'According to RESTful hierarchy principles, where should resource status filtering (such as filtering orders by "shipped") be specified?',
        bn: 'RESTful হায়ারার্কি নীতি অনুযায়ী কোনো রিসোর্সের অবস্থা ফিল্টার করতে (যেমন "shipped" অর্ডার খোঁজা) কোথায় উল্লেখ করা উচিত?'
      },
      options: [
        { en: 'In query parameters: GET /orders?status=shipped', bn: 'কোয়েরি প্যারামিটারে: GET /orders?status=shipped' },
        { en: 'In path segments: GET /orders/status/shipped', bn: 'পাথ সেগমেন্টে: GET /orders/status/shipped' },
        { en: 'In a POST request body', bn: 'POST রিকোয়েস্ট বডিতে' },
        { en: 'In the User-Agent header', bn: 'User-Agent হেডারে' }
      ],
      answer: 0,
      hint: {
        en: 'Query is presentation; path is identity.',
        bn: 'কোয়েরি হলো প্রেজেন্টেশন; পাথ হলো আইডেন্টিটি।'
      },
      explanation: {
        en: 'Paths identify resources; query parameters filter and format representations without fracturing resource identity.',
        bn: 'পাথ রিসোর্সের পরিচয় বহন করে; ফিল্টার সংক্রান্ত সব কাজ কুয়েরি প্যারামিটারে থাকা উচিত।'
      }
    },
    {
      id: 'rst-hrc-ex3',
      kind: 'mcq',
      topic: 'rest: shallow url pattern advantage',
      question: {
        en: 'What is the primary advantage of adopting the Shallow URL Pattern (/items/42 instead of /orgs/1/depts/2/teams/5/items/42)?',
        bn: 'শ্যালো ইউআরএল প্যাটার্ন (/items/42) ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        { en: 'It eliminates fragile deep URL coupling, simplifies routing, and shortens authorization check chains', bn: 'এটি অতিরিক্ত গভীর লিংকের জটিলতা দূর করে, রাউটিং সহজ করে এবং পারমিশন চেকিং সংক্ষিপ্ত রাখে' },
        { en: 'It makes images load faster', bn: 'ছবি দ্রুত লোড করায়' },
        { en: 'It requires no database', bn: 'ডাটাবেস ছাড়া কাজ করে' },
        { en: 'It automatically encrypts the network packet', bn: 'প্যাকেট নিজে থেকে এনক্রিপ্ট হয়' }
      ],
      answer: 0,
      hint: {
        en: 'Eliminates deep URL coupling.',
        bn: 'গভীর লিংকের জটিলতা দূর করে।'
      },
      explanation: {
        en: 'The shallow URL pattern avoids deep hierarchical dependencies while providing straightforward, resilient resource addressability.',
        bn: 'শ্যালো প্যাটার্ন গভীর নেস্টিংয়ের ঝামেলা মিটিয়ে সরাসরি রিসোর্সের ঠিকানা তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'rst-hrc-quiz',
    title: { en: 'REST Hierarchy & URL Modeling Quiz', bn: 'REST হায়ারার্কি ও URL মডেলিং কুইজ' },
    questions: [
      {
        id: 'rhq1',
        kind: 'mcq',
        topic: 'rest: singleton CDN caching risk',
        question: {
          en: 'Why must singleton endpoints like "/api/v1/me" include "Cache-Control: private, no-store" or "Vary: Authorization"?',
          bn: '"/api/v1/me"-এর মতো সিঙ্গেলটন এন্ডপয়েন্টে কেন "Cache-Control: private, no-store" বা "Vary: Authorization" দেওয়া জরুরি?'
        },
        options: [
          { en: 'To prevent shared edge CDNs from caching one user\'s personal profile and serving it to other users (cache poisoning)', bn: 'শেয়ার্ড সিডিএন যেন একজনের ব্যক্তিগত প্রোফাইল ক্যাশ করে অন্য ইউজারের কাছে পাঠিয়ে না দেয় (ক্যাশ পয়জনিং রোধে)' },
          { en: 'Because browsers cannot parse singleton JSON without it', bn: 'ব্রাউজার এটি ছাড়া জেসন পার্স করতে পারে না' },
          { en: 'To increase database connection pool limits', bn: 'ডাটাবেস কানেকশন বাড়ানোর জন্য' },
          { en: 'It is required by CSS stylesheets', bn: 'সিএসএসের জন্য প্রয়োজন' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents personal data leaks through shared CDNs.',
          bn: 'শেয়ার্ড সিডিএনের মাধ্যমে ব্যক্তিগত তথ্য ফাঁস রোধ করে।'
        },
        explanation: {
          en: 'Without private cache controls, shared CDNs might store the response for /me under a common URL key and serve private user data to subsequent callers.',
          bn: 'ক্যাশ কন্ট্রোল না থাকলে সিডিএন একজনের প্রোফাইল অন্য আরেকজনকে দেখিয়ে দিতে পারে।'
        }
      },
      {
        id: 'rhq2',
        kind: 'mcq',
        topic: 'rest: maximum nesting depth',
        question: {
          en: 'What is the generally accepted maximum recommended path depth for RESTful resource corridors before decoupling with shallow routes?',
          bn: 'শ্যালো রুটে ভাগ করার আগে RESTful রিসোর্সের ক্ষেত্রে সাধারণত সর্বোচ্চ কয়টি ধাপের পাথ নেস্টিং অনুমোদিত?'
        },
        options: [
          { en: '2 levels (e.g. /parents/:id/children)', bn: '২টি স্তর (যেমন /parents/:id/children)' },
          { en: '10 levels', bn: '১০টি স্তর' },
          { en: 'Unlimited levels', bn: 'সীমাহীন স্তর' },
          { en: '0 levels (no sub-resources allowed)', bn: '০ স্তর (কোনো সাব-রিসোর্স থাকবে না)' }
        ],
        answer: 0,
        hint: {
          en: 'Maximum of 2 levels.',
          bn: 'সর্বোচ্চ ২ স্তর।'
        },
        explanation: {
          en: 'Corridors deeper than two levels degrade maintainability and performance; decouple deeper relationships into top-level collections with query filters.',
          bn: 'দুই স্তরের বেশি গভীর হলে রক্ষণাবেক্ষণ ও পারফরম্যান্স নষ্ট হয়; তাই অতিরিক্ত স্তরগুলোকে আলাদা কালেকশনে রাখা উচিত।'
        }
      },
      {
        id: 'rhq3',
        kind: 'mcq',
        topic: 'rest: express router mergeParams',
        question: {
          en: 'Why is "{ mergeParams: true }" essential when nesting Express sub-routers (e.g. app.use("/users/:userId/orders", orderRouter))?',
          bn: 'এক্সপ্রেসে সাব-রাউটার নেস্টিং করার সময় (যেমন app.use("/users/:userId/orders", orderRouter)) "{ mergeParams: true }" কেন আবশ্যক?'
        },
        options: [
          { en: 'Without it, parent URL tokens like req.params.userId are completely inaccessible to handlers inside the child router', bn: 'এটি ছাড়া চাইল্ড রাউটারের হ্যান্ডলারগুলো প্যারেন্ট লিংকের req.params.userId অ্যাক্সেস করতে পারে না' },
          { en: 'It compresses route strings with Gzip', bn: 'এটি রাউট স্ট্রিং জিজিপ দিয়ে ছোট করে' },
          { en: 'It connects the router directly to MongoDB', bn: 'এটি রাউটারকে সরাসরি মঙ্গোডিবিতে যুক্ত করে' },
          { en: 'It converts GET requests into POST requests', bn: 'এটি GET রিকোয়েস্টকে POST-এ রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Enables child routers to access parent URL parameters.',
          bn: 'চাইল্ড রাউটারকে প্যারেন্ট রুটের প্যারামিটার ব্যবহারের সুযোগ দেয়।'
        },
        explanation: {
          en: 'By default, Express isolates router parameter scopes; mergeParams: true merges upstream route parameters into the child req.params dictionary.',
          bn: 'সাধারণ অবস্থায় এক্সপ্রেস সাব-রাউটারকে আলাদা রাখে; mergeParams: true প্যারেন্টের সব প্যারামিটার চাইল্ডের কাছে উন্মুক্ত করে দেয়।'
        }
      },
      {
        id: 'rhq4',
        kind: 'mcq',
        topic: 'rest: uuid vs slug in public uris',
        question: {
          en: 'What major security advantage do UUIDs (v4 or v7) offer over auto-incrementing sequential integers (1, 2, 3...) in public resource URIs?',
          bn: 'পাবলিক রিসোর্স ইউআরআইতে ক্রমিক সংখ্যার (১, ২, ৩...) বদলে UUID (v4 বা v7) ব্যবহারের প্রধান নিরাপত্তা সুবিধা কী?'
        },
        options: [
          { en: 'UUIDs prevent enumeration attacks and object ID scraping (BOLA / IDOR vulnerabilities)', bn: 'UUID ক্রমিক অনুমানভিত্তিক আক্রমণ (ইনামারেশন) এবং অবজেক্ট স্ক্র্যাপিং বা IDOR ত্রুটি প্রতিহত করে' },
          { en: 'UUIDs take zero bytes in database storage', bn: 'UUID ডাটাবেসে শূন্য বাইট জায়গা নেয়' },
          { en: 'UUIDs run 10 times faster than integers', bn: 'UUID পূর্ণসংখ্যার চেয়ে ১০ গুণ দ্রুত চলে' },
          { en: 'Integers are rejected by HTTP standard proxies', bn: 'এইচটিটিপি প্রক্সি পূর্ণসংখ্যা বাতিল করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents guessing next entity IDs.',
          bn: 'পরবর্তী আইডির অনুমানভিত্তিক হ্যাকিং রোধ করে।'
        },
        explanation: {
          en: 'Sequential integer IDs let attackers enumerate entire userbases by querying consecutive numbers; 128-bit random UUIDs render guessing impossible.',
          bn: 'ক্রমিক সংখ্যায় ১, ২, ৩ অনুমান করে সব ইউজারের ডেটা চুরি করা সহজ; ১২৮-বিট র্যান্ডম UUID সেই অনুমান সম্পূর্ণ অসম্ভব করে তোলে।'
        }
      }
    ]
  }
};
