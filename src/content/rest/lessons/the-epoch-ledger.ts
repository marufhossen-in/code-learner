import type { Lesson } from '../../../lib/types';

export const epochLedgerLesson: Lesson = {
  slug: 'the-epoch-ledger',
  tech: 'rest',
  title: {
    en: 'The Epoch Ledger: API Versioning Strategies, Evolution & Deprecation',
    bn: 'যুগ-খাতা: API সংস্করণ কৌশল, বিবর্তন ও অবচয়'
  },
  summary: {
    en: 'Master API versioning and backward compatibility across 10 structured topics. Understand breaking vs additive changes and the Tolerant Reader pattern. Compare the four versioning strategies: URI path, custom headers, content negotiation media types, and date-based pinning. Learn standard deprecation protocols using RFC 8594 Deprecation and Sunset headers. Implement simulated brownouts, 410 Gone retirements, and multi-version Express routing middleware.',
    bn: '১০টি সুসংগঠিত পয়েন্টে API সংস্করণ (versioning) এবং পশ্চাৎমুখী সামঞ্জস্য (backward compatibility) আয়ত্ত করুন। ব্রেকিং বনাম নন-ব্রেকিং পরিবর্তন এবং টলারেন্ট রিডার প্যাটার্ন বুঝুন। চারটি মূল সংস্করণ পদ্ধতির তুলনা শিখুন: ইউআরআই পাথ, কাস্টম হেডার, কনটেন্ট নেগোসিয়েশন মিডিয়া টাইপ এবং তারিখ-ভিত্তিক পিনিং। RFC 8594 Deprecation এবং Sunset হেডারের সাহায্যে অবচয় প্রোটোকল শিখুন। ব্রাউনআউট পরীক্ষা, ৪১০ Gone সমাধি এবং এক্সপ্রেস ভার্সনিং মিডলওয়্যার বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-link-bazaar',
    tech: 'rest',
    title: {
      en: 'The Link Bazaar: HATEOAS, HAL & Hypermedia-Driven APIs',
      bn: 'লিংক বাজার: HATEOAS, HAL ও হাইপারমিডিয়া-চালিত API'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The API Contract: Promises Made to Independent Strangers', bn: '১. API চুক্তি: স্বাধীন দূরবর্তী ক্লায়েন্টের সাথে প্রতিশ্রুতি' } },
    {
      type: 'para',
      text: {
        en: 'An API is not internal code; it is a legally binding wire contract published to external consumers. You cannot coordinate deployments with every third-party mobile app, partner server, or automated script. Modifying existing response schemas without a disciplined versioning strategy breaks production clients worldwide.',
        bn: 'এপিআই কোনো অভ্যন্তরীণ কোড নয়; এটি বহির্বিশ্বের দূরবর্তী ব্যবহারকারীদের সাথে একটি আনুষ্ঠানিক প্রযুক্তিগত চুক্তি। আপনি ইচ্ছা করলেই প্রতিটি মোবাইল অ্যাপ বা পার্টনার কোম্পানির সার্ভারের ডিপ্লয়মেন্ট নিয়ন্ত্রণ করতে পারবেন না। সুনির্দিষ্ট সংস্করণ নীতি ছাড়া রেসপন্স কাঠামো পরিবর্তন করলে দুনিয়াজোড়া ক্লায়েন্ট অ্যাপ্লিকেশন ভেঙে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `THE LIFECYCLE OF AN API CONTRACT:
v1 (Published) ----> v1 (Additive Growth) ----> v1 (Deprecated + Sunset Notice) ----> v1 (410 Gone)
                           |
                           +---> v2 (New Major Era with Breaking Changes)`,
      caption: {
        en: 'APIs manage overlapping version eras so consumers upgrade on their own schedules.',
        bn: 'এপিআই একাধিক সংস্করণ একসাথে সচল রাখে যাতে ব্যবহারকারীরা সময় নিয়ে আপগ্রেড করতে পারে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Breaking vs Additive Changes: The Evolution Matrix', bn: '২. ব্রেকিং বনাম নন-ব্রেকিং পরিবর্তন: বিবর্তনের নিয়মাবলি' } },
    {
      type: 'para',
      text: {
        en: 'Changes to an API fall into two categories: Additive (non-breaking) and Breaking. Additive changes introduce new optional fields, new endpoints, or optional query parameters without disturbing existing fields. Breaking changes remove fields, rename properties, change data types, or enforce stricter validation.',
        bn: 'এপিআই পরিবর্তন মূলত দুই ধরনের হয়: সংযোজনমূলক (non-breaking) এবং বিধ্বংসী (breaking)। সংযোজনমূলক পরিবর্তনে নতুন কোনো অপশনাল ফিল্ড, নতুন এন্ডপয়েন্ট বা কুয়েরি প্যারামিটার যোগ করা হয় যা আগের কাজ নষ্ট করে না। আর ব্রেকিং পরিবর্তনে বিদ্যমান ফিল্ড মুছে ফেলা, নাম বদলানো বা ডাটা টাইপ পরিবর্তন করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+-----------------------+------------------------------------------+-----------------------+
| Change Type           | Concrete Example                         | Version Impact        |
+-----------------------+------------------------------------------+-----------------------+
| Add Optional Field    | Adding "discountCode": null to checkout  | Non-breaking (Minor)  |
| Add New Endpoint      | Adding POST /api/v1/invoices             | Non-breaking (Minor)  |
| Rename Field          | Renaming "user_name" to "username"       | BREAKING (Requires v2)|
| Change Data Type      | Changing "price": 500 to "price": "500"  | BREAKING (Requires v2)|
| Stricter Validation   | Making optional "phone" field mandatory  | BREAKING (Requires v2)|
+-----------------------+------------------------------------------+-----------------------+`,
      caption: {
        en: 'Any change that forces clients to modify their existing parser logic is a breaking change.',
        bn: 'যে পরিবর্তনের কারণে ক্লায়েন্টের পার্সিং কোড পরিবর্তন করতে হয় তা-ই ব্রেকিং চেঞ্জ।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'API Evolution & Deprecation Lifecycle Timeline', bn: 'API বিবর্তন ও অবচয় জীবনচক্রের সময়রেখা' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="API Deprecation and Versioning Lifecycle"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="200" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="350" y="38" text-anchor="middle" font-weight="bold">API Evolution &amp; Sunsetting Lifecycle Timeline</text><rect x="30" y="55" width="145" height="145" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="102" y="75" text-anchor="middle" font-weight="bold" fill="#10b981">Phase 1: Active</text><text x="102" y="95" text-anchor="middle" font-size="11">Production General</text><text x="102" y="125" text-anchor="middle" font-size="10">200 OK responses</text><text x="102" y="140" text-anchor="middle" font-size="10">Regular additive</text><text x="102" y="155" text-anchor="middle" font-size="10">schema updates</text><text x="102" y="185" text-anchor="middle" font-size="9" fill="#10b981">Full SLA support</text><rect x="195" y="55" width="145" height="145" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="267" y="75" text-anchor="middle" font-weight="bold" fill="#f59e0b">Phase 2: Deprecated</text><text x="267" y="95" text-anchor="middle" font-size="11">RFC 8594 Headers</text><text x="267" y="125" text-anchor="middle" font-size="10">Deprecation: true</text><text x="267" y="140" text-anchor="middle" font-size="10">Sunset: &lt;date&gt;</text><text x="267" y="155" text-anchor="middle" font-size="10">Link to migration docs</text><text x="267" y="185" text-anchor="middle" font-size="9" fill="#f59e0b">Warning state</text><rect x="360" y="55" width="145" height="145" rx="6" fill="none" stroke="#f97316" stroke-width="1"/><text x="432" y="75" text-anchor="middle" font-weight="bold" fill="#f97316">Phase 3: Brownouts</text><text x="432" y="95" text-anchor="middle" font-size="11">Controlled Failures</text><text x="432" y="125" text-anchor="middle" font-size="10">Scheduled brownout</text><text x="432" y="140" text-anchor="middle" font-size="10">410 Gone errors</text><text x="432" y="155" text-anchor="middle" font-size="10">Exposes rogue clients</text><text x="432" y="185" text-anchor="middle" font-size="9" fill="#f97316">Drill rehearsal</text><rect x="525" y="55" width="145" height="145" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="597" y="75" text-anchor="middle" font-weight="bold" fill="#ef4444">Phase 4: Sunset</text><text x="597" y="95" text-anchor="middle" font-size="11">Permanent EOL</text><text x="597" y="125" text-anchor="middle" font-size="10">HTTP 410 Gone</text><text x="597" y="140" text-anchor="middle" font-size="10">All legacy routes</text><text x="597" y="155" text-anchor="middle" font-size="10">decommissioned</text><text x="597" y="185" text-anchor="middle" font-size="9" fill="#ef4444">Endpoint retired</text></g></svg>`,
      caption: {
        en: 'Formal deprecation progresses across active warning, scheduled brownouts, and final sunset termination.',
        bn: 'এপিআই অবচয় সচেতনতামূলক সতর্কতা, ব্রাউনআউট মহড়া এবং স্থায়ীভাবে বন্ধের ধাপগুলো অনুসরণ করে পরিচালিত হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Tolerant Reader Pattern: Defensive Client Parsing', bn: '৩. টলারেন্ট রিডার প্যাটার্ন: ক্লায়েন্টের সহনশীল পার্সিং' } },
    {
      type: 'para',
      text: {
        en: 'The Tolerant Reader pattern mandates that client applications must only extract the specific fields they require and silently ignore unknown properties. If a client crashes whenever an unannounced new field appears in a JSON payload, it violates tolerant design, turning benign backend improvements into client outages.',
        bn: 'টলারেন্ট রিডার (Tolerant Reader) প্যাটার্ন নির্দেশ করে যে ক্লায়েন্ট সফটওয়্যার শুধুমাত্র তার প্রয়োজনীয় ফিল্ডগুলো পড়বে এবং বাকি অচেনা প্রোপার্টিগুলো নিরাপদে উপেক্ষা করবে। নতুন কোনো ফিল্ড দেখলেই যদি ক্লায়েন্ট অ্যাপ ক্র্যাশ করে, তবে তা বাজে ডিজাইনের লক্ষণ যা নিরীহ পরিবর্তনকেও বিপদে রূপ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Resilient client parsing using object destructuring:
function parseUser(apiPayload) {
  // Extract strictly what we need; ignore any new fields!
  const { id, username, email } = apiPayload;
  return { id, username, email };
}

// Server adds new additive field "loyaltyTier":
const backendV15Response = {
  id: 101,
  username: "tariq",
  email: "tariq@example.com",
  loyaltyTier: "Platinum" // Ignored gracefully by client!
};

console.log("Parsed user successfully:", parseUser(backendV15Response));
// Output: Parsed user successfully: { id: 101, username: 'tariq', email: 'tariq@example.com' }`,
      caption: {
        en: 'Tolerant readers extract known keys and gracefully ignore forward-compatible additions.',
        bn: 'টলারেন্ট রিডার শুধু পরিচিত ডেটা পড়ে এবং নতুন ডেটাকে সুন্দরভাবে গ্রহণ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Four Versioning Strategies: Path, Header, Media & Query', bn: '৪. চারটি সংস্করণ কৌশল: পাথ, হেডার, মিডিয়া ও কোয়েরি' } },
    {
      type: 'para',
      text: {
        en: 'Industry architectures version APIs using four distinct vehicles: 1) URI Path (/v1/users): Clear, easily testable in browsers, and straightforward to route in reverse proxies. 2) Custom Header (X-API-Version: 2): Keeps URIs clean but makes browser testing harder. 3) Content Negotiation (Accept: application/vnd.company.v1+json): Pure RESTful media typing. 4) Query / Date Pinning (?v=2026-09-01): Stripe style, pinned to registration date.',
        bn: 'ইন্ডাস্ট্রিতে এপিআই সংস্করণ করার চারটি প্রধান পদ্ধতি রয়েছে: ১) ইউআরআই পাথ (/v1/users): সবচেয়ে সহজ, ব্রাউজারে টেস্টযোগ্য এবং প্রক্সিতে রুট করা সুবিধাজনক। ২) কাস্টম হেডার (X-API-Version: 2): লিংক পরিষ্কার রাখে কিন্তু ব্রাউজারে টেস্ট করা কঠিন। ৩) মিডিয়া টাইপ (Accept: application/vnd.company.v1+json): বিশুদ্ধ REST নিয়ম। ৪) তারিখ বা কোয়েরি পিনিং (?v=2026-09-01): স্ট্রাইপের মতো ইউজার নিবন্ধনের তারিখের সাথে যুক্ত।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+----------------------+-------------------------------------------+-----------------------------------+
| Strategy             | Syntax Example                            | Primary Trade-off                 |
+----------------------+-------------------------------------------+-----------------------------------+
| 1. URI Path          | GET /api/v1/orders                        | Pragmatic, visible, cache-friendly|
| 2. Custom Header     | X-API-Version: 2                          | Clean URLs, but requires Vary     |
| 3. Media Type        | Accept: application/vnd.acme.v2+json      | REST pure, but tooling friction   |
| 4. Date Pinning      | Stripe-Version: 2026-09-01                | Immutable default, zero surprises |
+----------------------+-------------------------------------------+-----------------------------------+`,
      caption: {
        en: 'URI Path versioning remains the dominant choice due to routing transparency and cache simplicity.',
        bn: 'রাউটিংয়ের স্বচ্ছতা এবং ক্যাশিং সুবিধার কারণে ইউআরআই পাথ ভার্সনিং বিশ্বজুড়ে সর্বাধিক ব্যবহৃত।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Standard Deprecation Headers: RFC 8594 Sunset & Deprecation', bn: '৫. স্ট্যান্ডার্ড অবচয় হেডার: RFC 8594 Sunset ও Deprecation' } },
    {
      type: 'para',
      text: {
        en: 'Do not deprecate endpoints using silent blog posts. RFC 8594 introduces formal HTTP response headers: Deprecation: true (or an RFC 3339 date when deprecation began) and Sunset: <http-date> announcing the exact timestamp when the endpoint will be permanently terminated. Clients read these headers in CI/CD pipelines to catch retiring endpoints.',
        bn: 'শুধুমাত্র ব্লগে লিখে এপিআই বন্ধ করবেন না। RFC ৮৫৯৪ স্ট্যান্ডার্ড এইচটিটিপি হেডার চালু করেছে: Deprecation: true (অথবা RFC ৩৩৩৯ তারিখ) এবং Sunset: <http-date> যা জানিয়ে দেয় ঠিক কোন তারিখে এন্ডপয়েন্টটি চিরতরে বন্ধ করে দেওয়া হবে। ক্লায়েন্ট ডেভেলপাররা এই হেডার দেখে স্বয়ংক্রিয় অ্যালার্ম সেট করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Calling deprecated v1 endpoint: */
GET /api/v1/payments HTTP/1.1
Host: api.codeshikhon.com

/* Server serves data while formally announcing deprecation: */
HTTP/1.1 200 OK
Content-Type: application/json
Deprecation: @1759000000
Sunset: Sat, 26 Dec 2026 23:59:59 GMT
Link: <https://api.codeshikhon.com/v2/payments>; rel="successor-version",
      <https://docs.codeshikhon.com/migration-v2>; rel="deprecation"`,
      caption: {
        en: 'Sunset headers deliver machine-readable countdowns to legacy API decommissions.',
        bn: 'Sunset হেডার পুরনো এপিআই বন্ধের নির্দিষ্ট কাউন্টডাউন মেশিন-পাঠযোগ্য ফরম্যাটে জানিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Link Rel Successor-Version Pattern', bn: '৬. Link Rel Successor-Version প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'When deprecating an endpoint, use the Link header with rel="successor-version" to point clients directly to the replacement endpoint. Additionally, attach rel="deprecation" pointing to the migration documentation guide. Automated API linters crawl these relations to notify engineering teams of pending upgrades.',
        bn: 'কোনো এন্ডপয়েন্ট বন্ধের তালিকায় রাখলে Link হেডারে rel="successor-version" দিয়ে পরবর্তী নতুন এন্ডপয়েন্টের ঠিকানা জানিয়ে দিতে হয়। পাশাপাশি rel="deprecation" দিয়ে মাইগ্রেশন নির্দেশিকার লিঙ্ক দেওয়া উচিত। স্বয়ংক্রিয় সফটওয়্যার এই রিলেশন দেখে ইঞ্জিনিয়ারিং টিমকে আপগ্রেড করতে সতর্ক করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `Link: </v2/invoices>; rel="successor-version"
Link: <https://api.example.com/docs/v2-migration>; rel="deprecation"

Relation "successor-version": Names the exact resource replacing this deprecated era.
Relation "deprecation": Links to human-readable instructions detailing required payload changes.`,
      caption: {
        en: 'Standard link relations automate API discovery and streamline version upgrades.',
        bn: 'স্ট্যান্ডার্ড লিংক রিলেশন স্বয়ংক্রিয়ভাবে নতুন সংস্করণের সন্ধান দেয় এবং আপগ্রেড সহজ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Phased Sunset Lifecycles: Brownouts & The 410 Gone Interment', bn: '৭. পর্যায়ক্রমিক বন্ধের ধাপ: ব্রাউনআউট পরীক্ষা ও ৪১০ Gone সমাধি' } },
    {
      type: 'para',
      text: {
        en: 'Decommissioning follows a strict phased lifecycle. First, broadcast Sunset and Deprecation headers 6 to 12 months ahead. Second, conduct scheduled brownouts to surface unmigrated legacy scripts. Finally, permanently retire endpoints using 410 Gone.',
        bn: 'পুরনো এপিআই বন্ধের একটি সুনির্দিষ্ট পর্যায়ক্রমিক নিয়ম আছে। প্রথমত, ৬ থেকে ১২ মাস আগে Sunset ও Deprecation হেডার চালু করুন। দ্বিতীয়ত, দিনে ১৫ মিনিটের জন্য ব্রাউনআউট তৈরি করে অবহেলিত ক্লায়েন্টদের সতর্ক করুন। পরিশেষে, ৪১০ Gone দিয়ে এন্ডপয়েন্ট চিরতরে বন্ধ করুন।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Request hitting permanently retired v1 endpoint: */
GET /api/v1/tokens HTTP/1.1
Host: api.codeshikhon.com

/* Server refuses with definitive 410 Gone status: */
HTTP/1.1 410 Gone
Content-Type: application/problem+json

{
  "type": "https://api.codeshikhon.com/errors/version-retired",
  "title": "API Version Retired",
  "status": 410,
  "detail": "API v1 was decommissioned on 2026-09-01. Please migrate to v2.",
  "instance": "/api/v1/tokens"
}`,
      caption: {
        en: 'HTTP 410 Gone confirms permanent retirement, preventing useless client retry loops.',
        bn: 'HTTP ৪১০ নিশ্চিত করে যে সার্ভিসটি চিরতরে বন্ধ, ফলে ক্লায়েন্ট অহেতুক রিট্রাই চালায় না।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Multi-Version Routing in Reverse Proxies and Gateways', bn: '৮. রিভার্স প্রক্সি ও গেটওয়েতে মাল্টি-ভার্সন রাউটিং' } },
    {
      type: 'para',
      text: {
        en: 'At scale, separate major versions should run as independent microservices behind an API gateway (e.g. Nginx, Kong, Envoy). The gateway inspects the URI path prefix or version header and routes traffic to the appropriate isolated service pool without coupling codebases.',
        bn: 'বড় সিস্টেমে প্রতিটি প্রধান সংস্করণকে আলাদা মাইক্রোসার্ভিস হিসেবে চালানো উচিত। এপিআই গেটওয়ে (যেমন Nginx বা Kong) ইনকামিং রিকোয়েস্টের পাথ বা হেডার পরীক্ষা করে নির্দিষ্ট সার্ভিস পুলে ট্রাফিক পাঠিয়ে দেয়, ফলে পুরনো ও নতুন কোড সম্পূর্ণ পৃথক থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `Nginx Multi-Version Routing Configuration:
location /api/v1/ {
    proxy_pass http://legacy_v1_backend_upstream;
    add_header Deprecation "true" always;
}

location /api/v2/ {
    proxy_pass http://modern_v2_backend_upstream;
}`,
      caption: {
        en: 'Reverse proxies cleanly decouple legacy and modern service implementations.',
        bn: 'রিভার্স প্রক্সি পুরনো ও নতুন সার্ভিসের কোডবেস সম্পূর্ণ আলাদা রেখে ট্রাফিক ভাগ করে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Data Model Adapters: Bridging Legacy & Modern Payloads', bn: '৯. ডাটা মডেল অ্যাডাপ্টার: পুরনো ও নতুন পেলোডের মেলবন্ধন' } },
    {
      type: 'para',
      text: {
        en: 'When a single backend handles multiple versions, use Adapter (Transformer) functions. The database stores the modern schema, while adapters serialize outgoing data into legacy v1 structures or modern v2 contracts depending on the active route context.',
        bn: 'যখন একটিমাত্র ব্যাকএন্ড সার্ভিস একাধিক ভার্সন সামলায়, তখন অ্যাডাপ্টার বা ট্রান্সফরমার ফাংশন ব্যবহার করতে হয়। ডাটাবেসে আধুনিক স্কিমায় ডেটা থাকে, আর অ্যাডাপ্টার রুট অনুযায়ী ডেটাকে পুরনো v1 কিংবা আধুনিক v2 আকারে রূপান্তর করে ক্লায়েন্টকে সরবরাহ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Adapter transforming modern database entity to legacy v1 response:
const modernRecord = {
  id: 42,
  given_name: "Tanvir",
  family_name: "Hasan",
  phone_e164: "+8801700000000"
};

function toV1User(record) {
  // Legacy v1 combined name into a single "name" string
  return {
    id: record.id,
    name: \`\${record.given_name} \${record.family_name}\`,
    phone: record.phone_e164
  };
}

console.log("Transformed legacy v1 contract:", toV1User(modernRecord));
// Output: Transformed legacy v1 contract: { id: 42, name: 'Tanvir Hasan', phone: '+8801700000000' }`,
      caption: {
        en: 'Adapters allow modern databases to continuously support legacy client contracts.',
        bn: 'অ্যাডাপ্টার আধুনিক ডাটাবেস কাঠামো অক্ষত রেখেই পুরনো ক্লায়েন্টকে ডেটা পাঠাতে পারে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Deprecation & Brownout Middleware in Express', bn: '১০. এক্সপ্রেস-এ অবচয় ও ব্রাউনআউট মিডলওয়্যার তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'A production Express deprecation middleware applies RFC 8594 headers automatically and can trigger simulated brownout errors during scheduled testing windows.',
        bn: 'একটি প্রোডাকশন এক্সপ্রেস মিডলওয়্যার নিজে থেকেই RFC 8594 হেডার যুক্ত করে এবং নির্ধারিত সময়ে পরীক্ষামূলক ব্রাউনআউট এরর ছুড়ে দিয়ে সিস্টেম পরীক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const app = express();

function createDeprecationMiddleware(sunsetDate, successorUrl, isBrownoutActive = false) {
  return (req, res, next) => {
    // 1. Attach standard RFC 8594 headers
    res.set("Deprecation", "true");
    res.set("Sunset", new Date(sunsetDate).toUTCString());
    res.set("Link", \`<\${successorUrl}>; rel="successor-version"\`);

    // 2. Scheduled brownout simulation:
    if (isBrownoutActive) {
      return res.status(503).json({
        error: "Brownout Test: Legacy v1 endpoint temporarily unavailable. Migrate to v2."
      });
    }

    next();
  };
}

const v1Deprecation = createDeprecationMiddleware("2026-12-31T23:59:59Z", "/api/v2/orders", false);
app.use("/api/v1", v1Deprecation);

console.log("Deprecation middleware active with compliant RFC 8594 headers");
// Output: Deprecation middleware active with compliant RFC 8594 headers`,
      caption: {
        en: 'Deprecation middleware automates header compliance and enables scheduled brownout drills.',
        bn: 'অবচয় মিডলওয়্যার স্বয়ংক্রিয়ভাবে হেডার ম্যানেজ করে এবং ব্রাউনআউট মহড়া চালাতে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-epc-ex1',
      kind: 'predict',
      topic: 'rest: RFC 8594 retirement status code',
      question: {
        en: 'Which HTTP status code should be returned when an obsolete API version is permanently retired and will never return?',
        bn: 'কোনো পুরনো এপিআই সংস্করণ যখন চিরতরে বন্ধ করে দেওয়া হয় এবং আর কখনোই ফিরবে না, তখন কোন HTTP স্ট্যাটাস কোড প্রদান করা উচিত?'
      },
      code: `/* Permanent endpoint retirement status code: */
/* HTTP/1.1 ___ Gone */`,
      answer: '410',
      accept: ['410'],
      hint: {
        en: 'Status 410.',
        bn: 'স্ট্যাটাস ৪১০।'
      },
      explanation: {
        en: 'HTTP 410 Gone indicates that the target resource was intentionally removed and is permanently unavailable.',
        bn: 'HTTP 410 Gone নির্দেশ করে যে রিসোর্সটি ইচ্ছা করেই চিরতরে সরিয়ে নেওয়া হয়েছে।'
      }
    },
    {
      id: 'rst-epc-ex2',
      kind: 'mcq',
      topic: 'rest: RFC 8594 sunset header',
      question: {
        en: 'Which standard HTTP response header announces the scheduled date and time when an API version will be permanently shut down?',
        bn: 'কোন স্ট্যান্ডার্ড HTTP রেসপন্স হেডারটি নির্দিষ্ট তারিখ ও সময় জানিয়ে দেয় যখন একটি এপিআই সংস্করণ চিরতরে বন্ধ করা হবে?'
      },
      options: [
        { en: 'Sunset', bn: 'Sunset' },
        { en: 'Expire-Time', bn: 'Expire-Time' },
        { en: 'Terminate-At', bn: 'Terminate-At' },
        { en: 'Retire-Date', bn: 'Retire-Date' }
      ],
      answer: 0,
      hint: {
        en: 'The Sunset header.',
        bn: 'Sunset হেডার।'
      },
      explanation: {
        en: 'RFC 8594 defines the Sunset header to communicate the precise future moment of resource deprecation and shutdown.',
        bn: 'RFC 8594 স্ট্যান্ডার্ড অনুযায়ী Sunset হেডারে এপিআই বন্ধের ভবিষ্যৎ তারিখ ও সময় উল্লেখ থাকে।'
      }
    },
    {
      id: 'rst-epc-ex3',
      kind: 'mcq',
      topic: 'rest: tolerant reader rule',
      question: {
        en: 'What is the primary instruction of the Tolerant Reader pattern for API client developers?',
        bn: 'এপিআই ক্লায়েন্ট ডেভেলপারদের জন্য টলারেন্ট রিডার (Tolerant Reader) প্যাটার্নের মূল নির্দেশ কী?'
      },
      options: [
        { en: 'Extract strictly required properties and gracefully ignore any unrecognized additive fields in response payloads', bn: 'শুধুমাত্র প্রয়োজনীয় ডেটা গ্রহণ করা এবং রেসপন্সে আসা যেকোনো নতুন অচেনা প্রোপার্টি নিরাপদে উপেক্ষা করা' },
        { en: 'Throw fatal exceptions on unexpected JSON keys', bn: 'অপ্রত্যাশিত কি পেলে মারাত্মক এরর দেওয়া' },
        { en: 'Never parse JSON strings', bn: 'জেসন কখনোই পার্স না করা' },
        { en: 'Hardcode database table schemas on the client', bn: 'ক্লায়েন্টে ডাটাবেস স্কিমা হার্ডকোড করা' }
      ],
      answer: 0,
      hint: {
        en: 'Ignore unrecognized fields gracefully.',
        bn: 'অচেনা ফিল্ড নিরাপদে উপেক্ষা করুন।'
      },
      explanation: {
        en: 'Tolerant readers decouple clients from additive backend changes, ensuring new fields do not trigger client-side crashes.',
        bn: 'টলারেন্ট রিডার ক্লায়েন্টকে নিরাপদ রাখে যাতে ব্যাকএন্ডে নতুন ডেটা যোগ হলেও অ্যাপ ক্র্যাশ না করে।'
      }
    }
  ],
  quiz: {
    id: 'rst-epc-quiz',
    title: { en: 'API Versioning & Evolution Strategies Quiz', bn: 'API সংস্করণ ও বিবর্তন কৌশল কুইজ' },
    questions: [
      {
        id: 'req1',
        kind: 'mcq',
        topic: 'rest: API brownout purpose',
        question: {
          en: 'In API lifecycle management, what is the purpose of conducting a scheduled "Brownout"?',
          bn: 'এপিআই পরিচালনায় নির্ধারিত "ব্রাউনআউট" (Brownout) মহড়া চালানোর মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To temporarily simulate outage failures on deprecated endpoints, exposing unmonitored client integrations before final retirement', bn: 'অবচয়প্রাপ্ত এন্ডপয়েন্টে সাময়িক বিভ্রাট তৈরি করে দেখে নেওয়া কোন কোন পুরনো ক্লায়েন্ট এখনো আপগ্রেড করেনি' },
          { en: 'To lower server electricity bills', bn: 'সার্ভারের বিদ্যুৎ খরচ কমানো' },
          { en: 'To change server domain names', bn: 'সার্ভার ডোমেইন পরিবর্তন করা' },
          { en: 'To delete git branches', bn: 'গিট ব্রাঞ্চ মুছে ফেলা' }
        ],
        answer: 0,
        hint: {
          en: 'Exposes unmigrated legacy clients before final shutdown.',
          bn: 'স্থায়ী বন্ধের আগেই অন-আপগ্রেডেড ক্লায়েন্টগুলোকে শনাক্ত করে।'
        },
        explanation: {
          en: 'Brownouts intentionally trigger controlled temporary errors to alert teams of dependent systems that ignored deprecation notices.',
          bn: 'ব্রাউনআউট সাময়িক এরর তৈরি করে ডেভেলপারদের ঘুম ভাঙায় যাতে তারা চিরতরে বন্ধ হওয়ার আগেই নতুন ভার্সনে চলে আসে।'
        }
      },
      {
        id: 'req2',
        kind: 'mcq',
        topic: 'rest: additive change definition',
        question: {
          en: 'Which of the following modifications is considered an Additive (non-breaking) change in a REST API?',
          bn: 'নিচের কোন পরিবর্তনটি REST এপিআইতে একটি সংযোজনমূলক (নন-ব্রেকিং) পরিবর্তন হিসেবে গণ্য হয়?'
        },
        options: [
          { en: 'Adding a new optional attribute to a JSON response payload', bn: 'JSON রেসপন্সে একটি নতুন অপশনাল প্রোপার্টি যোগ করা' },
          { en: 'Changing a numeric ID into an alphanumeric string', bn: 'সংখ্যার আইডির বদলে আলফানিউমেরিক স্ট্রিং দেওয়া' },
          { en: 'Deleting an existing property', bn: 'বিদ্যমান কোনো প্রোপার্টি মুছে ফেলা' },
          { en: 'Changing HTTP status from 200 to 500', bn: 'HTTP স্ট্যাটাস ২০০ থেকে ৫০০ করা' }
        ],
        answer: 0,
        hint: {
          en: 'Adding optional attributes is backward-compatible.',
          bn: 'ঐচ্ছিক প্রোপার্টি যোগ করা সম্পূর্ণ নিরাপদ।'
        },
        explanation: {
          en: 'Adding new optional fields is backward-compatible for compliant tolerant clients and does not break existing parsing logic.',
          bn: 'নতুন অপশনাল ফিল্ড যোগ করলে পুরনো ক্লায়েন্ট কোড না ভেঙেই কাজ চালিয়ে যেতে পারে।'
        }
      },
      {
        id: 'req3',
        kind: 'mcq',
        topic: 'rest: 410 gone vs 404 not found',
        question: {
          en: 'Why is "HTTP 410 Gone" specifically recommended over "HTTP 404 Not Found" when an old API endpoint is permanently decommissioned?',
          bn: 'পুরনো এপিআই এন্ডপয়েন্ট স্থায়ীভাবে বন্ধ করে দেওয়ার ক্ষেত্রে "HTTP 404 Not Found"-এর বদলে "HTTP 410 Gone" কেন বিশেষভাবে নির্দেশিত?'
        },
        options: [
          { en: '410 explicitly confirms the resource once existed but has been permanently purged, advising automated crawlers and clients never to request it again', bn: '৪১০ স্পষ্টভাবে জানায় যে লিংকটি একসময় ছিল কিন্তু এখন চিরতরে বন্ধ, ফলে ক্লায়েন্ট বা রোবট আর কখনই পুনরায় রিকোয়েস্ট করবে না' },
          { en: 'Because 410 automatically reboots the router', bn: '৪১০ নিজে থেকে রাউটার রিবুট করে' },
          { en: 'Because 404 only works for HTML files', bn: '৪০৪ শুধু এইচটিএমএল ফাইলের জন্য' },
          { en: '410 is an internal database code', bn: '৪১০ ডাটাবেসের অভ্যন্তরীণ কোড' }
        ],
        answer: 0,
        hint: {
          en: 'Signifies intentional, permanent retirement.',
          bn: 'ইচ্ছাকৃত ও স্থায়ীভাবে বন্ধ হওয়া নির্দেশ করে।'
        },
        explanation: {
          en: 'HTTP 410 Gone indicates permanent removal, instructing caches and automated clients to purge references and cease automated polling.',
          bn: 'HTTP ৪১০ নিশ্চিত করে যে লিংকটি উদ্দেশ্যপ্রণোদিতভাবে আজীবনের জন্য মুছে ফেলা হয়েছে।'
        }
      },
      {
        id: 'req4',
        kind: 'mcq',
        topic: 'rest: custom vendor media type versioning',
        question: {
          en: 'What is the syntax convention for versioning REST resources via Content Negotiation using custom vendor media types?',
          bn: 'কনটেন্ট নেগোশিয়েশনে কাস্টম ভেন্ডর মিডিয়া টাইপ দিয়ে এপিআই ভার্সন নিয়ন্ত্রণের সঠিক রূপ কোনটি?'
        },
        options: [
          { en: 'Accept: application/vnd.company.v2+json', bn: 'Accept: application/vnd.company.v2+json' },
          { en: 'Version: 2.0.0-final', bn: 'Version: 2.0.0-final' },
          { en: 'Cookie: api_version=2', bn: 'Cookie: api_version=2' },
          { en: 'User-Agent: API-Version-2', bn: 'User-Agent: API-Version-2' }
        ],
        answer: 0,
        hint: {
          en: 'Vendor media type syntax (application/vnd.*).',
          bn: 'ভেন্ডর মিডিয়া টাইপ সিনট্যাক্স (application/vnd.*)।'
        },
        explanation: {
          en: 'Custom vendor media types (application/vnd.company.v2+json) allow resource URLs to stay unversioned while the representation varies by request header.',
          bn: 'ভেন্ডর মিডিয়া টাইপ ইউআরএল অপরিবর্তিত রেখে হেডারের মাধ্যমে রেসপন্সের বিভিন্ন ভার্সন ডেলিভারি করার সুযোগ দেয়।'
        }
      }
    ]
  }
};
