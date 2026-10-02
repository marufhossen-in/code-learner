import type { Lesson } from '../../../lib/types';

export const linkBazaarLesson: Lesson = {
  slug: 'the-link-bazaar',
  tech: 'rest',
  title: {
    en: 'The Link Bazaar: HATEOAS, HAL & Hypermedia-Driven APIs',
    bn: 'লিংক বাজার: HATEOAS, HAL ও হাইপারমিডিয়া-চালিত API'
  },
  summary: {
    en: 'Master Level 3 REST architectural hypermedia across 10 structured topics. Understand HATEOAS (Hypermedia As The Engine Of Application State) and decoupling client navigation from hardcoded URLs. Master link anatomy: href, rel, and IANA relations. Explore the Hypertext Application Language (HAL) with _links and _embedded. Model finite-state machines where available links dynamically adapt to resource states. Compare HAL with Siren action schemas. Understand CURIE namespaces and build production HAL formatters in Express.',
    bn: '১০টি সুসংগঠিত পয়েন্টে লেভেল ৩ REST হাইপারমিডিয়া আর্কিটেকচার আয়ত্ত করুন। HATEOAS-এর সাহায্যে ক্লায়েন্টকে হার্ডকোডেড ইউআরআই থেকে মুক্ত রাখার কৌশল বুঝুন। লিংকের গঠন জানুন: href, rel এবং IANA স্ট্যান্ডার্ড রিলেশন। HAL ফরম্যাটের _links ও _embedded আয়ত্ত করুন। ফাইনাইট-স্টেট মেশিন মডেলিং শিখুন যেখানে স্টেট পরিবর্তনের সাথে সাথে লিংকের তালিকা নিজে থেকেই পরিবর্তিত হয়। Siren বনাম HAL তুলনা, CURIE নেমস্পেস এবং এক্সপ্রেস HAL ফরম্যাটার বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-contract-court',
    tech: 'rest',
    title: {
      en: 'The Contract Court: OpenAPI 3.1, JSON Schema & Contract Testing',
      bn: 'চুক্তি-দরবার: OpenAPI 3.1, JSON Schema ও চুক্তিভিত্তিক টেস্টিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The HATEOAS Philosophy: State Engines Driven by Hypermedia', bn: '১. HATEOAS দর্শন: হাইপারমিডিয়া-চালিত প্রয়োগ-অবস্থা' } },
    {
      type: 'para',
      text: {
        en: 'HATEOAS (Hypermedia As The Engine Of Application State) is the defining constraint of Level 3 REST (Representational State Transfer) in the Richardson Maturity Model. In a true hypermedia API, the client does not hardcode URL paths. Instead, the server dynamically provides clickable affordances (links) indicating every valid action the client can execute from its current state.',
        bn: 'রিচার্ডসন ম্যাচিউরিটি মডেলে লেভেল ৩ REST (Representational State Transfer)-এর প্রধান শর্ত হলো HATEOAS (Hypermedia As The Engine Of Application State)। বিশুদ্ধ হাইপারমিডিয়া এপিআইতে ক্লায়েন্ট কোনো ইউআরএল মুখস্থ করে রাখে না। বরং সার্ভার প্রতিটি রেসপন্সের সাথে বৈধ পরবর্তী লিংকগুলো পাঠিয়ে দেয়, যা দেখে ক্লায়েন্ট বুঝতে পারে বর্তমানে কী কী কাজ করা সম্ভব।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `The Richardson Maturity Model:
Level 0: The Swamp of POX (Single endpoint, RPC over HTTP POST)
Level 1: Resources (Individual URIs for resources: /orders, /users)
Level 2: HTTP Verbs (GET, POST, PUT, DELETE + standard HTTP status codes)
Level 3: Hypermedia Controls (HATEOAS: Self-describing links and affordances)`,
      caption: {
        en: 'HATEOAS represents the pinnacle of REST maturity, turning responses into state machines.',
        bn: 'HATEOAS রেসপন্সকে ফাইনাইট-স্টেট মেশিনে রূপান্তর করে REST-এর পূর্ণাঙ্গ রূপ দেয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Fragility of Hardcoded URLs: Decoupling Clients', bn: '২. হার্ডকোডেড লিংকের ভঙ্গুরতা: ক্লায়েন্টকে স্বাধীন করা' } },
    {
      type: 'para',
      text: {
        en: 'Traditional client applications construct URL strings manually: api.com/orders/ + id + /cancel. If the backend team reorganizes its routing structure, all mobile and web clients immediately crash. With HATEOAS, the client simply discovers the link labeled rel="cancel" inside the response payload, immune to path renames.',
        bn: 'সাধারণ ক্লায়েন্ট কোড হাত দিয়ে লিংক বানায়: api.com/orders/ + id + /cancel। ব্যাকএন্ডে কোনো রাউটের নাম পরিবর্তন করলেই সব মোবাইল ও ওয়েব অ্যাপ ক্র্যাশ করে। HATEOAS পদ্ধতিতে ক্লায়েন্ট শুধু rel="cancel" নামের লিংকটি খুঁজে নিয়ে কল করে, ফলে ব্যাকএন্ডে যেকোনো পাথ পাল্টালেও ক্লায়েন্ট অক্ষত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ FRAGILE: Client hardcodes brittle URL structures
const cancelUrl = \`https://api.codeshikhon.com/v1/orders/\${orderId}/cancel\`;

// ✅ RESILIENT: Client follows hypermedia relation dynamically
async function cancelOrder(orderResponse) {
  const cancelLink = orderResponse._links?.cancel?.href;
  if (!cancelLink) {
    throw new Error("Action not permitted: Order cannot be canceled in its current state");
  }
  return fetch(cancelLink, { method: "POST" });
}`,
      caption: {
        en: 'Clients following hypermedia relations survive backend routing migrations without code updates.',
        bn: 'হাইপারমিডিয়া লিংক অনুসরণ করলে ব্যাকএন্ড রুট পাল্টালেও ক্লায়েন্ট কোড ভাঙবে না।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HATEOAS Application State Engine Transitions', bn: 'HATEOAS প্রয়োগ অবস্থা ইঞ্জিনের রূপান্তর চিত্র' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="HATEOAS state transitions driven by hypermedia links"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="310" height="200" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="170" y="40" text-anchor="middle" font-weight="bold" fill="#f59e0b">State 1: Order "pending_payment"</text><rect x="30" y="55" width="280" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="45" y="75" font-weight="bold">self: /orders/42</text><text x="45" y="90" font-size="10">Canonical address of current entity</text><rect x="30" y="105" width="280" height="45" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="45" y="125" font-weight="bold" fill="#10b981">pay: /orders/42/payment</text><text x="45" y="140" font-size="10" fill="#10b981">• Affordance active: payment accepted</text><rect x="30" y="158" width="280" height="45" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="45" y="178" font-weight="bold" fill="#ef4444">cancel: /orders/42/cancellation</text><text x="45" y="193" font-size="10" fill="#ef4444">• Affordance active: cancellation allowed</text><rect x="375" y="15" width="310" height="200" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="530" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">State 2: Order "shipped"</text><rect x="390" y="55" width="280" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="405" y="75" font-weight="bold">self: /orders/42</text><text x="405" y="90" font-size="10">Same canonical identity</text><rect x="390" y="105" width="280" height="45" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="405" y="125" font-weight="bold" fill="#3b82f6">track: /shipments/trk_99</text><text x="405" y="140" font-size="10" fill="#3b82f6">• New affordance: live courier tracking</text><rect x="390" y="158" width="280" height="45" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1"/><text x="405" y="178" font-weight="bold" fill="#8b5cf6">return: /orders/42/returns</text><text x="405" y="193" font-size="10" fill="#8b5cf6">• Affordance unlocked: initiate return</text></g></svg>`,
      caption: {
        en: 'The server dictates valid next actions dynamically through contextual links as the resource transitions states.',
        bn: 'রিসোর্সের অবস্থা পরিবর্তনের সাথে সাথে সার্ভার লিংকের মাধ্যমে পরবর্তী কাজের সুযোগগুলো জানিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Anatomy of a Hypermedia Link: href, rel & type', bn: '৩. হাইপারমিডিয়া লিংকের গঠন: href, rel ও type' } },
    {
      type: 'para',
      text: {
        en: 'A standard hypermedia link contains three core components: 1) href: The target URI destination; 2) rel (relation): The machine-readable contract explaining why the link exists and what it represents; 3) type: The expected media type (e.g. application/json).',
        bn: 'একটি স্ট্যান্ডার্ড হাইপারমিডিয়া লিংকে তিনটি মূল অংশ থাকে: ১) href: গন্তব্যস্থলের সঠিক লিংক; ২) rel (রিলেশন): লিংকটির উদ্দেশ্য ব্যাখ্যা করা মেশিন-পাঠযোগ্য নাম; ৩) type: রেসপন্সের ফরম্যাট বা মিডিয়া টাইপ (যেমন application/json)।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "href": "https://api.codeshikhon.com/v1/orders/8842/invoice",
  "rel": "https://api.codeshikhon.com/rels/invoice",
  "type": "application/pdf",
  "title": "Download Official Tax Invoice PDF"
}`,
      caption: {
        en: 'The rel attribute serves as the contract key for machine clients.',
        bn: 'মেশিন ক্লায়েন্টের জন্য rel অ্যাট্রিবিউটটি মূল চাবি হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The HAL Standard: _links and _embedded Specifications', bn: '৪. HAL স্ট্যান্ডার্ড: _links ও _embedded স্পেসিফিকেশন' } },
    {
      type: 'para',
      text: {
        en: 'Hypertext Application Language (HAL) is the most widely adopted JSON hypermedia format. It reserves two top-level keys: _links (a dictionary of link objects keyed by relation name, with self always required) and _embedded (a container for child resources bundled to prevent extra network round-trips). Its media type is application/hal+json.',
        bn: 'Hypertext Application Language (HAL) হলো সবচেয়ে জনপ্রিয় হাইপারমিডিয়া ফরম্যাট। এতে দুটি বিশেষ প্রোপার্টি থাকে: _links (সব লিংকের অবজেক্ট, যেখানে self থাকা আবশ্যক) এবং _embedded (একসাথে পাঠানো চাইল্ড ডেটা, যা অতিরিক্ত নেটওয়ার্ক কল কমায়)। এর মিডিয়া টাইপ হলো application/hal+json।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "_links": {
    "self": { "href": "/api/v1/orders/8842" },
    "customer": { "href": "/api/v1/customers/101" },
    "payment": { "href": "/api/v1/orders/8842/pay" }
  },
  "id": 8842,
  "total": 4500,
  "status": "pending_payment",
  "_embedded": {
    "items": [
      {
        "_links": { "self": { "href": "/api/v1/items/99" } },
        "name": "Mechanical Keyboard",
        "price": 4500
      }
    ]
  }
}`,
      caption: {
        en: 'HAL standardizes link directories alongside inline embedded resource collections.',
        bn: 'HAL লিংকের তালিকা এবং ভেতরের চাইল্ড ডেটাকে একটি বিশ্বমানের কাঠামোতে সাজিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Dynamic State Machines: Enforcing Business Invariants via Links', bn: '৫. ডায়নামিক স্টেট মেশিন: লিংকের সাহায্যে বিজনেস লজিক প্রয়োগ' } },
    {
      type: 'para',
      text: {
        en: 'HATEOAS enables the backend to govern user interface states without hardcoded client logic. When an order is "unpaid", the server includes a "pay" link and a "cancel" link. Once paid, the server omits the "pay" link and adds a "refund" link. The client simply renders UI buttons for whatever relations exist in the response.',
        bn: 'HATEOAS-এর মাধ্যমে ব্যাকএন্ড সরাসরি ক্লায়েন্টের ইউজার ইন্টারফেস নিয়ন্ত্রণ করতে পারে। কোনো অর্ডার "unpaid" অবস্থায় থাকলে সার্ভার "pay" ও "cancel" লিংক পাঠায়। পেমেন্ট সম্পন্ন হলে "pay" লিংকটি নিজে থেকেই মুছে গিয়ে "refund" লিংক চলে আসে। ক্লায়েন্ট অ্যাপ শুধু রেসপন্সে থাকা লিংকের ওপর ভিত্তি করে বাটনের রূপ বদলায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express generating dynamic state-based affordance links:
function formatOrderHAL(order) {
  const links = {
    self: { href: \`/orders/\${order.id}\` }
  };

  // State-driven affordances:
  if (order.status === "pending_payment") {
    links.pay = { href: \`/orders/\${order.id}/payments\`, method: "POST" };
    links.cancel = { href: \`/orders/\${order.id}/cancellation\`, method: "POST" };
  } else if (order.status === "paid") {
    links.ship = { href: \`/orders/\${order.id}/shipment\`, method: "POST" };
    links.receipt = { href: \`/orders/\${order.id}/receipt\`, method: "GET" };
  }

  return { id: order.id, status: order.status, total: order.total, _links: links };
}

const unpaid = formatOrderHAL({ id: 1, status: "pending_payment", total: 1200 });
console.log("Unpaid order affordances:", Object.keys(unpaid._links)); // [ 'self', 'pay', 'cancel' ]`,
      caption: {
        en: 'State machine affordances adapt dynamically to resource lifecycle states.',
        bn: 'স্টেট মেশিনের লিংকগুলো অর্ডারের বর্তমান অবস্থার ওপর ভিত্তি করে নিজে থেকে বদলে যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Siren Specification vs HAL: Rich Action Schemas', bn: '৬. Siren বনাম HAL স্পেসিফিকেশন: সম্পূর্ণ অ্যাকশন স্কিমা' } },
    {
      type: 'para',
      text: {
        en: 'While HAL is lightweight and simple, it lacks a standardized way to describe form inputs and HTTP methods. The Siren specification (application/vnd.siren+json) solves this by defining explicit "actions". A Siren action provides the target href, the HTTP method (e.g. POST), and input field schemas with names, types, and validation rules.',
        bn: 'HAL সহজ হলেও এতে মেথড বা ফর্ম ইনপুট বর্ণনা করার সুনির্দিষ্ট উপায় নেই। Siren স্পেসিফিকেশন (application/vnd.siren+json) পূর্ণাঙ্গ "actions" সংজ্ঞায়িত করে এটি সমাধান করেছে। Siren অ্যাকশনে লিংকের পাশাপাশি কোন মেথড (যেমন POST) ব্যবহার করতে হবে এবং কী কী ইনপুট ফিল্ড পাঠাতে হবে তার বিস্তারিত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "class": ["order"],
  "properties": { "id": 8842, "status": "unpaid" },
  "actions": [
    {
      "name": "pay-order",
      "title": "Submit Credit Card Payment",
      "method": "POST",
      "href": "/api/v1/orders/8842/pay",
      "type": "application/json",
      "fields": [
        { "name": "cardNumber", "type": "text" },
        { "name": "cvv", "type": "text" }
      ]
    }
  ]
}`,
      caption: {
        en: 'Siren actions describe complete interactive form submission contracts.',
        bn: 'Siren অ্যাকশন সরাসরি ইন্টারঅ্যাকটিভ ফর্ম সাবমিশন স্কিমা সরবরাহ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Standard IANA Link Relations: Interoperable Navigation', bn: '৭. স্ট্যান্ডার্ড IANA লিংক রিলেশনস: সার্বজনীন নেভিগেশন' } },
    {
      type: 'para',
      text: {
        en: 'To prevent developers from inventing arbitrary relation names, IANA maintains an official registry of standard link relations. Common standard relations include: self (canonical URI of this resource), collection (parent collection), next and prev (pagination), canonical (preferred URL), and edit (resource update endpoint).',
        bn: 'ইচ্ছামতো নাম তৈরি করা ঠেকাতে IANA একটি আন্তর্জাতিক লিংক রিলেশন রেজিস্ট্রি বজায় রাখে। বহুল ব্যবহৃত কিছু স্ট্যান্ডার্ড রিলেশন হলো: self (বর্তমান ফাইলের মূল লিংক), collection (প্যারেন্ট কালেকশন), next ও prev (পেজিনেশন), canonical (অফিসিয়াল লিংক) এবং edit (সম্পাদনার লিংক)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+--------------------+-----------------------------------------------------+
| IANA Relation      | Semantic Purpose                                    |
+--------------------+-----------------------------------------------------+
| self               | The canonical URI of this representation            |
| collection         | The parent collection holding this entity           |
| next / prev        | The next or previous page in a sequential collection|
| first / last       | The boundaries of a paginated set                   |
| author             | Link pointing to the creator of this resource       |
| edit               | Endpoint used to modify this representation         |
+--------------------+-----------------------------------------------------+`,
      caption: {
        en: 'Using standard IANA relations ensures client libraries understand link semantics out of the box.',
        bn: 'IANA স্ট্যান্ডার্ড রিলেশন ব্যবহার করলে ক্লায়েন্ট কোনো কনফিগারেশন ছাড়াই লিংক বুঝে নেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. CURIEs: Namespacing Custom Link Relations', bn: '৮. CURIEs: কাস্টম লিংক রিলেশনের নেমস্পেস তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'When creating custom application-specific relations not present in the IANA registry, HAL uses Compact URIs (CURIEs). A CURIE establishes a base documentation URI template, allowing compact namespaced relations like ea:invoice that expand to full documentation links.',
        bn: 'IANA তালিকায় নেই এমন নিজস্ব বিশেষ রিলেশন তৈরির জন্য HAL-এ Compact URIs (CURIEs) ব্যবহার করা হয়। CURIE একটি মূল ডকুমেন্টেশন লিংকের প্রিফিক্স নির্ধারণ করে, ফলে সংক্ষেপে ea:invoice লিখলে তা স্বয়ংক্রিয়ভাবে বিস্তারিত ডকুমেন্টেশন লিংকে পরিণত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "_links": {
    "curies": [
      {
        "name": "codeshikhon",
        "href": "https://api.codeshikhon.com/rels/{rel}",
        "templated": true
      }
    ],
    "self": { "href": "/orders/8842" },
    "codeshikhon:cancel": { "href": "/orders/8842/cancel" }
  }
}`,
      caption: {
        en: 'CURIEs map compact namespace prefixes to human-readable API documentation URLs.',
        bn: 'CURIE সংক্ষিপ্ত নেমস্পেসকে পূর্ণাঙ্গ এপিআই ডকুমেন্টেশন লিংকের সাথে মিলিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. The Pragmatic Trade-offs: Bandwidth Chattiness vs Discovery', bn: '৯. বাস্তব লাভ-ক্ষতির হিসাব: ব্যান্ডউইথ খরচ বনাম আবিষ্কারের সুবিধা' } },
    {
      type: 'para',
      text: {
        en: 'While HATEOAS provides pristine decoupling, it carries real trade-offs. Attaching detailed _links and actions to every array item bloats JSON payload sizes by 30-50%. For private single-page apps built by the same team, teams frequently omit HATEOAS. For public, multi-vendor APIs, HATEOAS delivers unmatched long-term resilience.',
        bn: 'HATEOAS অত্যন্ত শক্তিশালী হলেও এর কিছু বাস্তব সীমাবদ্ধতা রয়েছে। প্রতিটি অ্যারে আইটেমে বিস্তারিত _links যুক্ত করলে জেসন ফাইলের আকার ৩০-৫০% পর্যন্ত বেড়ে যায়। নিজস্ব টিমের অভ্যন্তরীণ অ্যাপগুলোতে অনেকেই তাই HATEOAS বাদ দেন। তবে পাবলিক এবং দীর্ঘমেয়াদী এপিআই-র জন্য HATEOAS সেরা নির্ভরযোগ্যতা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `WHEN TO ADOPT FULL HATEOAS:
✅ Public developer ecosystems where client SDKs must survive API redesigns
✅ Multi-step business processes with dynamic user permissions and complex state rules

WHEN TO USE PRAGMATIC LEAN REST:
⚠️ High-frequency internal microservices requiring microsecond serialization
⚠️ Single-page apps (React/Vue) where client and backend ship in the same deployment`,
      caption: {
        en: 'Balance architectural purity against network bandwidth and serialization overhead.',
        bn: 'আর্কিটেকচারাল বিশুদ্ধতা এবং নেটওয়ার্ক ব্যান্ডউইথ খরচের মধ্যে ভারসাম্য রক্ষা করুন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Production HAL Resource Formatter in Express', bn: '১০. এক্সপ্রেস-এ পূর্ণাঙ্গ HAL ফরম্যাটার বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'A production HAL formatter attaches the mandatory self link, resolves contextual action affordances, and sets the standardized application/hal+json content type.',
        bn: 'একটি প্রোডাকশন HAL ফরম্যাটার প্রতিটি ডেটায় বাধ্যতামূলক self লিংক জোড়ে, প্রাসঙ্গিক অ্যাকশন লিংক যুক্ত করে এবং সঠিক application/hal+json হেডার নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";
const app = express();

function toHalOrder(order, baseUrl = "https://api.codeshikhon.com") {
  return {
    id: order.id,
    amount: order.amount,
    status: order.status,
    _links: {
      self: { href: \`\${baseUrl}/orders/\${order.id}\` },
      collection: { href: \`\${baseUrl}/orders\` },
      ...(order.status === "unpaid" && {
        pay: { href: \`\${baseUrl}/orders/\${order.id}/payments\`, method: "POST" }
      })
    }
  };
}

app.get("/orders/:id", (req, res) => {
  const order = { id: req.params.id, amount: 2500, status: "unpaid" };
  const halPayload = toHalOrder(order);

  // Set official HAL media type:
  res.type("application/hal+json").json(halPayload);
});

console.log("HAL resource formatted with compliant self links and media type");
// Output: HAL resource formatted with compliant self links and media type`,
      caption: {
        en: 'A clean HAL formatting utility that guarantees valid link dictionaries and content-type headers.',
        bn: 'একটি পরিচ্ছন্ন HAL ফরম্যাটার যা সঠিক লিংক ডিকশনারি ও কনটেন্ট-টাইপ হেডার নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rst-lnk-ex1',
      kind: 'predict',
      topic: 'rest: HATEOAS self relation name',
      question: {
        en: 'In hypermedia formats like HAL, which mandatory link relation name identifies the canonical URI of the current resource itself?',
        bn: 'HAL-এর মতো হাইপারমিডিয়া ফরম্যাটে কোন বাধ্যতামূলক লিংক রিলেশনটি বর্তমান রিসোর্সের নিজস্ব ক্যানোনিকাল ইউআরআই নির্দেশ করে?'
      },
      code: `/* Mandatory link relation for the current representation: */
/* "_links": { "____": { "href": "/orders/10" } } */`,
      answer: 'self',
      accept: ['self'],
      hint: {
        en: 'The self relation.',
        bn: 'self রিলেশন।'
      },
      explanation: {
        en: 'The self relation is mandatory in HAL and RFC specifications to identify the resource\'s own address.',
        bn: 'self হলো হাইপারমিডিয়ার সবচেয়ে গুরুত্বপূর্ণ বাধ্যতামূলক রিলেশন যা ফাইলের নিজস্ব ঠিকানা বোঝায়।'
      }
    },
    {
      id: 'rst-lnk-ex2',
      kind: 'mcq',
      topic: 'rest: HAL official media type',
      question: {
        en: 'What is the official IANA MIME content-type header for documents formatted according to the HAL (Hypertext Application Language) JSON standard?',
        bn: 'HAL (Hypertext Application Language) স্ট্যান্ডার্ডে তৈরি JSON ফাইলের জন্য অফিসিয়াল IANA MIME কনটেন্ট-টাইপ কোনটি?'
      },
      options: [
        { en: 'application/hal+json', bn: 'application/hal+json' },
        { en: 'application/json+links', bn: 'application/json+links' },
        { en: 'text/hateoas', bn: 'text/hateoas' },
        { en: 'application/vnd.rest+json', bn: 'application/vnd.rest+json' }
      ],
      answer: 0,
      hint: {
        en: 'application/hal+json.',
        bn: 'application/hal+json.'
      },
      explanation: {
        en: 'application/hal+json is the registered media type for HAL documents with embedded links.',
        bn: 'application/hal+json হলো HAL ফরম্যাটের জন্য আনুষ্ঠানিকভাবে নিবন্ধিত মিডিয়া টাইপ।'
      }
    },
    {
      id: 'rst-lnk-ex3',
      kind: 'mcq',
      topic: 'rest: HATEOAS primary benefit',
      question: {
        en: 'What is the main architectural benefit of implementing HATEOAS in web APIs?',
        bn: 'ওয়েব এপিআইতে HATEOAS বাস্তবায়নের প্রধান আর্কিটেকচারাল সুবিধা কোনটি?'
      },
      options: [
        { en: 'It decouples client applications from hardcoded URLs, allowing servers to evolve paths and workflows dynamically', bn: 'এটি ক্লায়েন্ট অ্যাপকে হার্ডকোডেড লিংক থেকে মুক্ত করে, ফলে সার্ভার রুট বা কাজের ধারা নির্বিঘ্নে বদলাতে পারে' },
        { en: 'It makes database queries run 10x faster', bn: 'ডাটাবেস কোয়েরি ১০ গুণ দ্রুত চালায়' },
        { en: 'It encrypts the payload with RSA keys', bn: 'RSA কি দিয়ে পেলোড এনক্রিপ্ট করে' },
        { en: 'It replaces HTML CSS styling', bn: 'এটি এইচটিএমএল সিএসএস প্রতিস্থাপন করে' }
      ],
      answer: 0,
      hint: {
        en: 'Decouples client from hardcoded URLs.',
        bn: 'ক্লায়েন্টকে হার্ডকোডেড লিংক থেকে মুক্ত করে।'
      },
      explanation: {
        en: 'HATEOAS enables hypermedia-driven discovery, freeing clients from brittle hardcoded route dependencies.',
        bn: 'HATEOAS ক্লায়েন্টকে স্বাধীন করে যাতে ব্যাকএন্ড রুট পাল্টালেও ক্লায়েন্ট কোড নষ্ট না হয়।'
      }
    }
  ],
  quiz: {
    id: 'rst-lnk-quiz',
    title: { en: 'HATEOAS & HAL Hypermedia Architecture Quiz', bn: 'HATEOAS ও HAL হাইপারমিডিয়া আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'rlq1',
        kind: 'mcq',
        topic: 'rest: HAL _embedded purpose',
        question: {
          en: 'In the HAL standard, what is the specific role of the "_embedded" property?',
          bn: 'HAL স্ট্যান্ডার্ডে "_embedded" প্রোপার্টির সুনির্দিষ্ট ভূমিকা কী?'
        },
        options: [
          { en: 'To nest related child resources inside the primary representation, eliminating round-trip underfetching', bn: 'মূল রেসপন্সের ভেতরেই সম্পর্কিত চাইল্ড ডেটাকে সংযুক্ত করা, যাতে অতিরিক্ত নেটওয়ার্ক কল এড়ানো যায়' },
          { en: 'To embed YouTube videos into JSON', bn: 'জেসনে ইউটিউব ভিডিও রাখা' },
          { en: 'To store encryption secrets', bn: 'এনক্রিপশন কি সেভ রাখা' },
          { en: 'To write CSS stylesheets', bn: 'সিএসএস কোড লেখা' }
        ],
        answer: 0,
        hint: {
          en: 'Nests related child entities directly.',
          bn: 'সম্পর্কিত চাইল্ড ডেটা সরাসরি সংযুক্ত করে।'
        },
        explanation: {
          en: 'The _embedded key holds representations of related resources directly within the payload to optimize network transfer efficiency.',
          bn: '_embedded প্রোপার্টির ভেতরে চাইল্ড অবজেক্টগুলো সরাসরি দিয়ে দেওয়া হয় যাতে আলাদা করে কল করতে না হয়।'
        }
      },
      {
        id: 'rlq2',
        kind: 'mcq',
        topic: 'rest: Siren vs HAL actions',
        question: {
          en: 'What feature does the Siren hypermedia format provide that is missing in the base HAL specification?',
          bn: 'Siren হাইপারমিডিয়া ফরম্যাটে এমন কোন সুবিধা রয়েছে যা সাধারণ HAL স্পেসিফিকেশনে নেই?'
        },
        options: [
          { en: 'Full action schemas specifying HTTP methods (POST, PUT), form field names, and input types', bn: 'পূর্ণাঙ্গ অ্যাকশন স্কিমা যেখানে HTTP মেথড (POST, PUT), ফর্ম ফিল্ডের নাম এবং ইনপুট টাইপ সংজ্ঞায়িত থাকে' },
          { en: 'Support for SQL queries in URLs', bn: 'লিংকের ভেতর এসকিউএল সাপোর্ট' },
          { en: 'Automatic server deployment', bn: 'সার্ভার অটো ডিপ্লয়মেন্ট' },
          { en: 'Python compilation', bn: 'পাইথন কম্পাইলেশন' }
        ],
        answer: 0,
        hint: {
          en: 'Action schemas with methods and form fields.',
          bn: 'মেথড ও ফর্ম ফিল্ডসহ অ্যাকশন স্কিমা।'
        },
        explanation: {
          en: 'Siren explicitly models interactive operations using "actions", defining the required HTTP method and form input fields.',
          bn: 'Siren সরাসরি অ্যাকশনের ভেতর মেথড ও ইনপুট ফিল্ড বলে দিয়ে সম্পূর্ণ ফর্মের মতো কাজ করে।'
        }
      },
      {
        id: 'rlq3',
        kind: 'mcq',
        topic: 'rest: RFC 6570 uri templates in HAL',
        question: {
          en: 'When a hypermedia link contains query variable parameters (e.g. "/users{?page,limit}"), which boolean property must be set in HAL?',
          bn: 'একটি হাইপারমিডিয়া লিংকে যখন পরিবর্তনশীল কুয়েরি প্যারামিটার থাকে (যেমন "/users{?page,limit}"), তখন HAL ফরম্যাটে কোন বুলিয়ান প্রোপার্টিটি চালু করতে হয়?'
        },
        options: [
          { en: '"templated": true (indicating an RFC 6570 URI template)', bn: '"templated": true (যা RFC 6570 URI টেমপ্লেট নির্দেশ করে)' },
          { en: '"dynamic": 1', bn: '"dynamic": 1' },
          { en: '"regex": true', bn: '"regex": true' },
          { en: '"variable": true', bn: '"variable": true' }
        ],
        answer: 0,
        hint: {
          en: 'The templated boolean flag.',
          bn: 'templated বুলিয়ান ফ্ল্যাগ।'
        },
        explanation: {
          en: 'HAL mandates setting "templated: true" whenever a link href is an RFC 6570 URI template requiring client expansion.',
          bn: 'HAL নিয়ম অনুযায়ী লিংকে ভ্যারিয়েবল থাকলে এবং RFC ৬৫৭০ টেমপ্লেট হলে "templated: true" ফ্ল্যাগ যোগ করে ক্লায়েন্টকে সতর্ক করা হয়।'
        }
      },
      {
        id: 'rlq4',
        kind: 'mcq',
        topic: 'rest: hateoas runtime adaptability',
        question: {
          en: 'How does HATEOAS allow an engineering team to modify their backend URL routes without breaking third-party mobile applications?',
          bn: 'HATEOAS কীভাবে মোবাইল অ্যাপকে ক্ষতিগ্রস্ত না করে এপিআই রুট পরিবর্তন করার চমৎকার সুবিধা দেয়?'
        },
        options: [
          { en: 'Mobile apps navigate by named relation keys (rel) rather than hardcoded URLs, adapting automatically to whatever href the server returns', bn: 'মোবাইল অ্যাপ হার্ডকোডেড লিংকের বদলে নির্দিষ্ট রিলেশন নাম (rel) দিয়ে চলে, ফলে সার্ভার নতুন ঠিকানা দিলেও অ্যাপ নির্বিঘ্নে কাজ করে' },
          { en: 'By forcing users to re-download the app from the store every day', bn: 'প্রতিদিন প্লেস্টোর থেকে অ্যাপ নতুন করে ইনস্টল করিয়ে' },
          { en: 'By disabling API authentication', bn: 'নিরাপত্তা ব্যবস্থা বন্ধ করে' },
          { en: 'By converting all URLs to IP addresses', bn: 'সব লিংক আইপি অ্যাড্রেসে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Clients follow relation names rather than hardcoded URLs.',
          bn: 'ক্লায়েন্ট হার্ডকোডেড লিংকের বদলে রিলেশন কি অনুসরণ করে।'
        },
        explanation: {
          en: 'Because clients discover URLs dynamically through rel keys, route reorganizations on the server occur transparently with zero client code breaks.',
          bn: 'যেহেতু ক্লায়েন্ট রুট মুখস্থ রাখে না বরং সার্ভারের দেওয়া লিংক অনুসরণ করে, তাই ব্যাকএন্ড ইচ্ছামতো রুট পরিবর্তন করতে পারে।'
        }
      }
    ]
  }
};
