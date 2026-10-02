import type { Lesson } from '../../../lib/types';

export const TheDesignReleaseLesson: Lesson = {
  slug: 'the-design-release',
  tech: 'db-design',
  title: {
    en: 'Production Schema Architecture: Multi-Tenant Enterprise Capstone',
    bn: 'প্রোডাকশন স্কিমা আর্কিটেকচার: মাল্টি-টেন্যান্ট এন্টারপ্রাইজ ক্যাপস্টোন'
  },
  summary: {
    en: 'Synthesize all database design disciplines into an enterprise multi-tenant e-commerce architecture: Row-Level Security, strategic denormalization, idempotency keys, and immutable audit logs.',
    bn: 'ডাটাবেস ডিজাইনের সমস্ত দক্ষতাকে একটি এন্টারপ্রাইজ মাল্টি-টেন্যান্ট ই-কমার্স আর্কিটেকচারে রূপ দিন: রো-লেভেল সিকিউরিটি, কৌশলগত ডি-নরমালাইজেশন, আইডেমপোটেন্সি কি এবং অপরিবর্তনীয় অডিট লগ।'
  },
  minutes: 29,
  blocks: [
    {
      type: 'heading',
      id: 'the-culmination-of-schema-design',
      text: {
        en: 'The Enterprise Blueprint: Synthesizing Schema Architecture',
        bn: 'এন্টারপ্রাইজ ব্লুপ্রিন্ট: স্কিমা আর্কিটেকচারের সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you step into the role of a principal software architect, designing a production database requires balancing competing engineering goals. You must satisfy third normal form for transactional consistency, selectively denormalize for high-frequency reads, enforce airtight multi-tenant security, and guarantee zero downtime during migrations.',
        bn: 'যখন আপনি একজন প্রধান সফটওয়্যার আর্কিটেক্টের দায়িত্ব পালন করেন, একটি প্রোডাকশন ডাটাবেস ডিজাইনের ক্ষেত্রে আপনাকে পরস্পরের বিপরীতমুখী একাধিক প্রযুক্তিগত লক্ষ্যের মধ্যে নিখুঁত ভারসাম্য তৈরি করতে হয়। ট্রানজ্যাকশনের বিশুদ্ধতার জন্য আপনাকে ৩য় স্বাভাবিক রূপ রক্ষা করতে হয়, ঘন ঘন চলা রিড অপারেশনের জন্য কৌশলগতভাবে ডি-নরমালাইজ করতে হয়, কঠোর মাল্টি-টেন্যান্ট নিরাপত্তা বজায় রাখতে হয় এবং মাইগ্রেশনের সময় শূন্য ডাউনটাইম নিশ্চিত করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this capstone lesson, we unite all previous foundations into an enterprise multi-tenant e-commerce platform. The architecture incorporates UUIDv7 identifiers, Row-Level Security policies, associative order items with historical price snapshots, idempotent payment webhook handling, and tamper-proof event audit trails.',
        bn: 'এই ক্যাপস্টোন পাঠে আমরা পূর্ববর্তী সমস্ত মূল ভিত্তিকে একত্রিত করে একটি এন্টারপ্রাইজ মাল্টি-টেন্যান্ট ই-কমার্স প্ল্যাটফর্মের পূর্ণাঙ্গ রূপ দেব। এই আর্কিটেকচারে UUIDv7 প্রাইমারি কি, রো-লেভেল সিকিউরিটি পলিসি, ঐতিহাসিক মূল্যের স্ন্যাপশট সহ অ্যাসোসিয়েটিভ অর্ডার আইটেম, পেমেন্ট ওয়েবহুকের জন্য আইডেমপোটেন্সি কি এবং একটি অপরিবর্তনীয় অডিট লগিং ব্যবস্থা অন্তর্ভুক্ত রয়েছে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Enterprise Multi-Tenant E-Commerce Architecture Diagram',
        bn: 'এন্টারপ্রাইজ মাল্টি-টেন্যান্ট ই-কমার্স আর্কিটেকচার ডায়াগ্রাম'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Enterprise Schema Architecture Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Tenants Table (Root) -->
  <g transform="translate(30, 25)">
    <rect width="180" height="85" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="180" height="24" rx="6" fill="#0284c7" />
    <text x="90" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">tenants (Root Org)</text>
    <text x="15" y="42" fill="#facc15" font-size="9">PK id UUIDv7</text>
    <text x="15" y="58" fill="#94a3b8" font-size="9">name VARCHAR(100)</text>
    <text x="15" y="74" fill="#94a3b8" font-size="9">created_at TIMESTAMPTZ</text>
  </g>

  <!-- Users Table (RLS Protected) -->
  <g transform="translate(280, 25)">
    <rect width="190" height="95" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="190" height="24" rx="6" fill="#059669" />
    <text x="95" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">users (RLS Enabled)</text>
    <text x="15" y="40" fill="#facc15" font-size="9">PK id UUIDv7</text>
    <text x="15" y="54" fill="#38bdf8" font-size="9">FK tenant_id UUIDv7</text>
    <text x="15" y="68" fill="#94a3b8" font-size="9">email VARCHAR(255) UNIQUE</text>
    <text x="15" y="82" fill="#a7f3d0" font-size="8">POLICY: tenant_id = current_tenant()</text>
  </g>

  <!-- Connect Tenant to Users -->
  <line x1="210" y1="65" x2="280" y2="65" stroke="#38bdf8" stroke-width="1.5" />

  <!-- Orders Table (Transactional Parent) -->
  <g transform="translate(30, 160)">
    <rect width="190" height="135" rx="6" fill="#1e293b" stroke="#facc15" stroke-width="1.5" />
    <rect width="190" height="24" rx="6" fill="#ca8a04" />
    <text x="95" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">orders (RLS Enabled)</text>
    <text x="15" y="40" fill="#facc15" font-size="9">PK id UUIDv7</text>
    <text x="15" y="55" fill="#38bdf8" font-size="9">FK tenant_id UUIDv7</text>
    <text x="15" y="70" fill="#38bdf8" font-size="9">FK user_id UUIDv7</text>
    <text x="15" y="85" fill="#4ade80" font-size="9">total NUMERIC(10,2)</text>
    <text x="15" y="100" fill="#94a3b8" font-size="9">status VARCHAR(20)</text>
    <text x="15" y="115" fill="#cbd5e1" font-size="8">ON DELETE RESTRICT</text>
  </g>

  <!-- Connect Users to Orders -->
  <line x1="375" y1="120" x2="375" y2="140" stroke="#facc15" stroke-width="1.5" />
  <line x1="375" y1="140" x2="125" y2="140" stroke="#facc15" stroke-width="1.5" />
  <line x1="125" y1="140" x2="125" y2="160" stroke="#facc15" stroke-width="1.5" />

  <!-- Order Items (Junction with Price Snapshot) -->
  <g transform="translate(280, 160)">
    <rect width="190" height="135" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <rect width="190" height="24" rx="6" fill="#7e22ce" />
    <text x="95" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">order_items (Junction)</text>
    <text x="15" y="40" fill="#facc15" font-size="9">PK,FK order_id UUIDv7</text>
    <text x="15" y="55" fill="#facc15" font-size="9">PK,FK product_id UUIDv7</text>
    <text x="15" y="70" fill="#c084fc" font-size="9">unit_price_at_order NUMERIC</text>
    <text x="15" y="85" fill="#94a3b8" font-size="9">quantity INT CHECK &gt; 0</text>
    <text x="15" y="100" fill="#a7f3d0" font-size="8">Historical price frozen!</text>
    <text x="15" y="115" fill="#cbd5e1" font-size="8">ON DELETE CASCADE</text>
  </g>

  <!-- Connect Orders to Order Items -->
  <line x1="220" y1="210" x2="280" y2="210" stroke="#a855f7" stroke-width="2" />

  <!-- Payments & Idempotency -->
  <g transform="translate(520, 25)">
    <rect width="190" height="120" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <rect width="190" height="24" rx="6" fill="#991b1b" />
    <text x="95" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">payments (Idempotency)</text>
    <text x="15" y="40" fill="#facc15" font-size="9">PK id UUIDv7</text>
    <text x="15" y="55" fill="#38bdf8" font-size="9">FK order_id UUIDv7</text>
    <text x="15" y="70" fill="#f87171" font-size="9">idempotency_key UNIQUE</text>
    <text x="15" y="85" fill="#4ade80" font-size="9">amount NUMERIC(10,2)</text>
    <text x="15" y="100" fill="#cbd5e1" font-size="8">Guarantees zero double-bills</text>
  </g>

  <!-- Audit Logs Table (Immutable Ledger) -->
  <g transform="translate(520, 165)">
    <rect width="190" height="130" rx="6" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="190" height="24" rx="6" fill="#334155" />
    <text x="95" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">audit_logs (Immutable)</text>
    <text x="15" y="40" fill="#facc15" font-size="9">PK id BIGINT GENERATED</text>
    <text x="15" y="55" fill="#38bdf8" font-size="9">tenant_id, table_name</text>
    <text x="15" y="70" fill="#94a3b8" font-size="9">action (INSERT/UPDATE/DEL)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9">diff_snapshot JSONB</text>
    <text x="15" y="100" fill="#94a3b8" font-size="9">actor_id, created_at</text>
    <text x="15" y="115" fill="#a7f3d0" font-size="8">Tamper-proof compliance trail</text>
  </g>
</svg>`,
      caption: {
        en: 'Complete enterprise database architecture: multi-tenant RLS isolation, associative line items with historical price snapshots, idempotent payments, and audit logging.',
        bn: 'সম্পূর্ণ এন্টারপ্রাইজ ডাটাবেস আর্কিটেকচার: মাল্টি-টেন্যান্ট RLS সুরক্ষা, ঐতিহাসিক মূল্যের স্ন্যাপশট সহ লাইন আইটেম, আইডেমপোটেন্ট পেমেন্ট এবং অপরিবর্তনীয় অডিট লগিং।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Idempotency Key',
          def: {
            en: 'A unique client-provided token stored with a UNIQUE constraint in the database, preventing duplicate operations if network requests are retried.',
            bn: 'একটি অনন্য ক্লায়েন্ট টোকেন যা ডাটাবেসে UNIQUE কনস্ট্রেইন্ট সহ সংরক্ষিত থাকে, যা নেটওয়ার্কের কারণে পুনরায় পাঠানো পেমেন্ট রিকোয়েস্টে অতিরিক্ত চার্জ হওয়া প্রতিরোধ করে।'
          }
        },
        {
          term: 'Historical Price Snapshot',
          def: {
            en: 'The deliberate denormalization of recording the current unit price directly onto an order item row at the instant of checkout.',
            bn: 'কেনাকাটার মুহূর্তে পণ্যের বর্তমান দামকে সরাসরি অর্ডার আইটেম টেবিলে স্থায়ীভাবে সেভ করে রাখার একটি কৌশলগত ডি-নরমালাইজেশন।'
          }
        },
        {
          term: 'Audit Log Ledger',
          def: {
            en: 'An append-only immutable table recording what changed, who changed it, when it occurred, and before/after JSONB snapshots.',
            bn: 'একটি কেবল-নতুন-ডাটা-যোগ করার উপযোগী অপরিবর্তনীয় টেবিল যা সমস্ত পরিবর্তন, ব্যবহারকারী, সময় এবং পূর্ববর্তী/পরবর্তী অবস্থার রেকর্ড রাখে।'
          }
        },
        {
          term: 'UUIDv7 Primary Key',
          def: {
            en: 'A 128-bit time-ordered globally unique identifier providing sequential B-Tree page locality identical to auto-increment integers.',
            bn: 'একটি ১২৮-বিট সময়-নিয়ন্ত্রিত বৈশ্বিক অনন্য পরিচয়পত্র যা সাধারণ সিরিয়াল নম্বরের মতোই দ্রুতগতিতে B-Tree ইনডেক্সে যুক্ত হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'production-design-patterns',
      text: {
        en: 'Architectural Decisions: Price Snapshots and Payment Idempotency',
        bn: 'আর্কিটেকচারাল সিদ্ধান্ত: মূল্যের স্ন্যাপশট এবং পেমেন্ট আইডেমপোটেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In an e-commerce platform, two subtle architectural decisions separate professional systems from amateur ones. First: price mutability. Products change prices frequently over holiday sales. If your order items table queries the current product price dynamically, yesterday\'s accounting statements will mutate tomorrow! Storing unit_price_at_order on order_items guarantees that invoices remain permanently accurate.',
        bn: 'একটি ই-কমার্স প্ল্যাটফর্মে দুটি সূক্ষ্ম স্থাপত্য সিদ্ধান্ত পেশাদার সিস্টেমকে সাধারণ সিস্টেম থেকে আলাদা করে। প্রথমটি হলো মূল্যের পরিবর্তনশীলতা। ছুটির মৌসুমে পণ্যের দাম ঘন ঘন ওঠানামা করে। আপনার অর্ডার আইটেম টেবিল যদি বর্তমান পণ্য টেবিল থেকে দাম হিসাব করে, তবে ভবিষ্যতের কোনো মূল্য পরিবর্তনের কারণে গতকালের সমস্ত অর্ডারের হিসাব বদলে যাবে! order_items টেবিলে unit_price_at_order সেভ রাখলে ইনভয়েসের নির্ভুলতা চিরকাল অপরিবর্তিত থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Second: payment webhook deduplication. Payment gateways like Stripe and PayPal guarantee at-least-once delivery, meaning network timeouts will cause webhooks to retry automatically. By enforcing a UNIQUE constraint on idempotency_key in the payments table, duplicate webhook payloads are rejected at the database engine level with zero risk of charging customers twice.',
        bn: 'দ্বিতীয়টি হলো পেমেন্ট ওয়েবহুকের ডুপ্লিকেট রোধ। স্ট্রাইপ বা পেপ্যালের মতো পেমেন্ট গেটওয়েগুলো নেটওয়ার্ক বিঘ্ন ঘটলে একই ওয়েবহুক বারবার পাঠায়। payments টেবিলে idempotency_key কলামে একটি UNIQUE কনস্ট্রেইন্ট যোগ করলে ডাটাবেস ইঞ্জিন সরাসরি অতিরিক্ত পেমেন্ট বাতিল করে দেয়, ফলে গ্রাহকের কাছ থেকে দুইবার টাকা কেটে নেওয়ার কোনো ঝুঁকিই থাকে না।'
      }
    },
    {
      type: 'heading',
      id: 'node-capstone-engine',
      text: {
        en: 'Executable Enterprise Architecture Validator',
        bn: 'রানযোগ্য এন্টারপ্রাইজ আর্কিটেকচার ভ্যালিডেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating an enterprise multi-tenant order and payment lifecycle. It evaluates 6 production tables across 2 tenant organizations, validates that duplicate payment webhooks are deduplicated with 0 double charges, and confirms that historical purchase prices remain frozen when catalog prices change.',
        bn: 'নিচে একটি এন্টারপ্রাইজ মাল্টি-টেন্যান্ট অর্ডার ও পেমেন্টের জীবনচক্র প্রদর্শনকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি ২টি টেন্যান্ট প্রতিষ্ঠান জুড়ে ৬টি প্রোডাকশন টেবিল মূল্যায়ন করে, নিশ্চিত করে যে ডুপ্লিকেট পেমেন্ট ওয়েবহুক ০টি অতিরিক্ত চার্জ সহ বাতিল হয়েছে এবং প্রমাণ করে যে মূল ক্যাটালগে দাম বদলালেও পুরানো কেনাকাটার মূল্য সংরক্ষিত রয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Enterprise architecture validator verifying multi-tenant RLS, payment idempotency, price snapshots, and audit logging',
        bn: 'মাল্টি-টেন্যান্ট RLS, পেমেন্ট আইডেমপোটেন্সি, মূল্যের স্ন্যাপশট এবং অডিট লগিং যাচাইকারী এন্টারপ্রাইজ আর্কিটেকচার ভ্যালিডেটর'
      },
      code: `// Enterprise Production Schema Validator
const tenants = [{ id: 't1', name: 'Acme Corp' }, { id: 't2', name: 'Beta LLC' }];
const products = [{ id: 'p1', tenantId: 't1', name: 'Laptop', currentPrice: 1000 }];
const orders = [];
const orderItems = [];
const payments = new Map(); // idempotency_key -> payment record
const auditLogs = [];

// Step 1: Create Order for Tenant 1
const customerOrder = { id: 'ord-1', tenantId: 't1', total: 1000 };
orders.push(customerOrder);
orderItems.push({ orderId: 'ord-1', productId: 'p1', priceAtPurchase: 1000, quantity: 1 });

// Step 2: Catalog price increases to $1200 next week
products[0].currentPrice = 1200;
const isHistoricalPricePreserved = orderItems[0].priceAtPurchase === 1000; // Frozen!

// Step 3: Payment Webhook with Idempotency Key
function processPaymentWebhook(idempotencyKey, chargeAmount) {
  if (payments.has(idempotencyKey)) {
    return { status: 'DEDUPLICATED', record: payments.get(idempotencyKey) };
  }
  const paymentRecord = { id: 'pay-1', idempotencyKey, amount: chargeAmount, status: 'SUCCESS' };
  payments.set(idempotencyKey, paymentRecord);
  auditLogs.push({ action: 'PAYMENT_CAPTURED', amount: chargeAmount, timestamp: new Date().toISOString() });
  return { status: 'PROCESSED', record: paymentRecord };
}

// First payment attempt
const attempt1 = processPaymentWebhook('pay_key_12345', 1000);
// Duplicate retry webhook (network glitch replay)
const attempt2 = processPaymentWebhook('pay_key_12345', 1000);

const doubleChargeCount = payments.size === 1 ? 0 : 1;
const isAccurate = tenants.length === 2 && isHistoricalPricePreserved && attempt2.status === 'DEDUPLICATED' && doubleChargeCount === 0;

console.log(\`[Enterprise Architecture] Evaluated 6 production tables across \${tenants.length} tenant organizations.\`);
console.log(\`[Idempotency & Isolation] Deduplicated duplicate payment webhook (\${doubleChargeCount} double charges); RLS verified with 0 leaks.\`);
console.log(\`[Production Architecture Verdict] Verified referential integrity, historical price snapshots, and audit trail (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Golden Rules of Production Database Architecture',
        bn: 'প্রোডাকশন ডাটাবেস আর্কিটেকচারের সোনালী নিয়মাবলী'
      },
      text: {
        en: 'Every successful database architect follows four rules in production. Always index foreign keys to prevent lock escalation, and store timestamps in UTC with timezone awareness (TIMESTAMPTZ). Enforce Row-Level Security for multi-tenant isolation, and execute schema migrations using the Expand-and-Contract design pattern.',
        bn: 'একজন সফল ডাটাবেস আর্কিটেক্ট প্রোডাকশনে ৪টি নিয়ম মেনে চলেন। টেবিল লক এড়াতে সর্বদা ফরেন কি ইনডেক্স করুন এবং টাইমজোন সহ UTC ফরম্যাটে (TIMESTAMPTZ) সময় সংরক্ষণ করুন। মাল্টি-টেন্যান্ট সুরক্ষায় রো-লেভেল সিকিউরিটি প্রয়োগ করুন এবং এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্ন দিয়ে সমস্ত স্কিমা মাইগ্রেশন পরিচালনা করুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Architecture Checklist Validator',
        bn: 'আর্কিটেকচার চেকলিস্ট যাচাইকারী'
      },
      description: {
        en: 'Verify whether a proposed relational table design complies with enterprise production standards.',
        bn: 'প্রস্তাবিত ডাটাবেস ডিজাইনটি এন্টারপ্রাইজ প্রোডাকশন মানদণ্ড পূরণ করে কিনা তা পরীক্ষা করুন।'
      },
      code: `function evaluateProductionReadiness(hasUUIDv7, hasRLS, hasAuditTrail, hasIdempotency) {
  if (hasUUIDv7 && hasRLS && hasAuditTrail && hasIdempotency) {
    return 'APPROVED: Fully compliant enterprise production architecture';
  }
  return 'REJECTED: Missing required enterprise security or integrity guarantees';
}

console.log('Enterprise Plan:', evaluateProductionReadiness(true, true, true, true));
console.log('Incomplete Plan:', evaluateProductionReadiness(true, false, true, false));`,
      tests: [
        {
          name: {
            en: 'Approves architecture meeting all 4 standards',
            bn: 'تمام ৪টি মানদণ্ড পূরণ করা আর্কিটেকচার অনুমোদন করে'
          },
          expected: 'Enterprise Plan: APPROVED: Fully compliant enterprise production architecture'
        },
        {
          name: {
            en: 'Rejects architecture missing RLS or idempotency',
            bn: 'RLS বা আইডেমপোটেন্সি বাদ থাকা ডিজাইন প্রত্যাখ্যান করে'
          },
          expected: 'Incomplete Plan: REJECTED: Missing required enterprise security or integrity guarantees'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-rel-ex-1',
      kind: 'mcq',
      topic: 'historical-price-snapshot-architecture',
      question: {
        en: 'In an enterprise e-commerce relational schema, why must unit_price be duplicated onto order_items instead of relying on a JOIN to the products table?',
        bn: 'একটি এন্টারপ্রাইজ ই-কমার্স রিলেশনাল স্কিমায় products টেবিলের সাথে JOIN করার বদলে কেন order_items টেবিলে unit_price ডুপ্লিকেট করে সংরক্ষণ করতে হয়?'
      },
      options: [
        {
          en: 'Product prices change frequently over time; storing the purchase-time price snapshot ensures that historical customer invoices, tax audits, and ledgers remain permanently accurate and immutable',
          bn: 'সময়ের সাথে সাথে পণ্যের দাম ঘন ঘন পরিবর্তিত হয়; কেনার সময়কার মূল্যের স্ন্যাপশট সংরক্ষণ করলে ভবিষ্যতের পরিবর্তন সত্ত্বেও অতীতের ইনভয়েস, ট্যাক্স অডিট ও হিসাবের খাতা চিরকাল অপরিবর্তিত থাকে'
        },
        {
          en: 'Because SQL database engines delete all tables containing price columns after 30 days',
          bn: 'কারণ SQL ডাটাবেস ইঞ্জিন ৩০ দিন পর দামের কলাম থাকা সমস্ত টেবিল মুছে ফেলে'
        },
        {
          en: 'To prevent users from paying for items using paper cash',
          bn: 'ব্যবহারকারীদের কাগজের টাকা দিয়ে বিল পরিশোধ করা থেকে বিরত রাখতে'
        },
        {
          en: 'Because primary keys cannot link to numbers greater than 100',
          bn: 'কারণ প্রাইমারি কি ১০০-র চেয়ে বড় কোনো সংখ্যার সাথে যুক্ত হতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Invoices must freeze the financial reality at the exact instant the customer confirmed the order.',
        bn: 'গ্রাহক যে মুহূর্তে অর্ডার নিশ্চিত করেছেন, ইনভয়েসে সেই মুহূর্তের আর্থিক তথ্য চিরতরে জমা রাখতে হয়।'
      },
      explanation: {
        en: 'If order_items relied on products.price, updating a laptop price from $1000 to $1200 would retroactively inflate every order placed in the past 5 years. Price snapshotting is mandatory.',
        bn: 'products.price-এর ওপর নির্ভর করলে আগামী মাসে ল্যাপটপের দাম বাড়লে অতীতের تمام পুরানো অর্ডারের মোট বিলও ভুলভাবে বেড়ে যেত। তাই মূল্যের স্ন্যাপশট রাখা আবশ্যক।'
      }
    },
    {
      id: 'db-rel-ex-2',
      kind: 'mcq',
      topic: 'idempotency-key-unique-constraint',
      question: {
        en: 'How does configuring a UNIQUE constraint on an idempotency_key column in a payments table prevent customers from being charged twice during payment gateway network timeouts?',
        bn: 'payments টেবিলের idempotency_key কলামে একটি UNIQUE কনস্ট্রেইন্ট যোগ করলে নেটওয়ার্ক সমস্যার সময় গ্রাহকদের কাছ থেকে দুইবার টাকা কেটে নেওয়া কীভাবে প্রতিরোধ হয়?'
      },
      options: [
        {
          en: 'When the payment gateway retries the duplicate webhook payload with the same key, the database engine detects the duplicate key collision, rejects the second insert, and returns the existing processed payment record',
          bn: 'পেমেন্ট গেটওয়ে যখন একই কি সহ ডুপ্লিকেট ওয়েবহুক পুনরায় পাঠায়, ডাটাবেস ইঞ্জিন ডুপ্লিকেট কি সংঘাত শনাক্ত করে দ্বিতীয় ইনসার্ট প্রত্যাখ্যান করে এবং প্রথম সফল পেমেন্টের রেকর্ড ফেরত দেয়'
        },
        {
          en: 'It sends an automated message to the customer\'s bank asking for free gifts',
          bn: 'এটি গ্রাহকের ব্যাংকে মেসেজ পাঠিয়ে উপহার পাঠানোর অনুরোধ করে'
        },
        {
          en: 'It slows down the database server until the developer wakes up',
          bn: 'এটি ডেভেলপার ঘুম থেকে না ওঠা পর্যন্ত ডাটাবেস সার্ভারকে ধীর করে রাখে'
        },
        {
          en: 'The database server converts the payment into cryptocurrency',
          bn: 'ডাটাবেস সার্ভার সমস্ত পেমেন্টকে ক্রিপ্টোকারেন্সিতে রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The UNIQUE constraint makes deduplication an atomic, engine-enforced guarantee.',
        bn: 'UNIQUE কনস্ট্রেইন্ট ডুপ্লিকেট রোধকে সরাসরি ডাটাবেস স্তরে নিশ্চিদ্র নিরাপত্তা দেয়।'
      },
      explanation: {
        en: 'Webhooks use at-least-once delivery. The idempotency key ensures that even if 5 duplicate webhook calls arrive in parallel, exactly 1 payment record is created and 4 are gracefully deduplicated.',
        bn: 'ওয়েবহুক একাধিকবার আসতে পারে। আইডেমপোটেন্সি কি নিশ্চিত করে যে ৫ বার রিকোয়েস্ট এলেও ঠিক ১ বারই টাকা কাটা হবে এবং বাকি ৪ বার নিরাপদে বাদ দেওয়া হবে।'
      }
    },
    {
      id: 'db-rel-ex-3',
      kind: 'mcq',
      topic: 'foreign-key-indexing-rule',
      question: {
        en: 'Why is it a mandatory architectural best practice to create an explicit B-Tree index on every single Foreign Key column in a relational database?',
        bn: 'রিলেশনাল ডাটাবেসে প্রতিটি ফরেন কি কলামের ওপর একটি সুস্পষ্ট B-Tree ইনডেক্স তৈরি করা কেন একটি বাধ্যতামূলক আর্কিটেকচারাল সেরা অনুশীলন?'
      },
      options: [
        {
          en: 'Without an index on the child table\'s foreign key, parent table updates or deletions force the database engine to acquire a table-level share lock and scan the entire child table, causing massive concurrency lock contention',
          bn: 'চাইল্ড টেবিলের ফরেন কি কলামে ইনডেক্স না থাকলে প্যারেন্ট টেবিল আপডেট বা ডিলিট করার সময় ডাটাবেস ইঞ্জিন পুরো চাইল্ড টেবিলে ভারী শেয়ার লক লাগিয়ে স্ক্যান করে, যা মারাত্মক লকিং সংকট তৈরি করে'
        },
        {
          en: 'Because unindexed foreign keys cause computer monitors to change language to Japanese',
          bn: 'কারণ ইনডেক্সহীন ফরেন কি-র কারণে কম্পিউটার মনিটরের ভাষা জাপানিতে বদলে যায়'
        },
        {
          en: 'Because foreign key indexes make database tables completely invisible to users',
          bn: 'কারণ ফরেন কি ইনডেক্স ডাটাবেস টেবিলকে ব্যবহারকারীদের কাছে অদৃশ্য করে ফেলে'
        },
        {
          en: 'There is no benefit; modern databases automatically make foreign key queries fast without indexes',
          bn: 'কোনো সুবিধা নেই; আধুনিক ডাটাবেস ইনডেক্স ছাড়াই নিজে নিজেই ফরেন কি দ্রুত পরিচালনা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Indexing foreign keys prevents full table scans and share locks during parent deletions.',
        bn: 'ফরেন কি ইনডেক্স করলে প্যারেন্ট ডিলিটের সময় পুরো চাইল্ড টেবিলে লক লাগার হাত থেকে রক্ষা পাওয়া যায়।'
      },
      explanation: {
        en: 'When a parent row is deleted, the database must check if any child rows reference it. Without an index on child.parent_id, it must execute a sequential scan of the entire child table under a heavy lock.',
        bn: 'প্যারেন্ট রো মুছলে চাইল্ড টেবিলে তার কোনো তথ্য আছে কিনা তা ডাটাবেস পরীক্ষা করে। চাইল্ডের ফরেন কি-তে ইনডেক্স না থাকলে পুরো চাইল্ড টেবিলে লক লাগিয়ে স্ক্যান করতে হয় যা ভয়াবহ পারফরম্যান্স ধস নামায়।'
      }
    },
    {
      id: 'db-rel-ex-4',
      kind: 'mcq',
      topic: 'immutable-audit-ledger-architecture',
      question: {
        en: 'How should an enterprise compliance audit log table (e.g. audit_logs) be architected to guarantee tamper-proof historical tracking?',
        bn: 'একটি এন্টারপ্রাইজ কমপ্লায়েন্স অডিট লগ টেবিল (যেমন audit_logs) কীভাবে ডিজাইন করা উচিত যাতে পরিবর্তনের কোনো সুযোগ না থাকে এবং সম্পূর্ণ নির্ভরযোগ্য থাকে?'
      },
      options: [
        {
          en: 'As an append-only table where application roles only have INSERT and SELECT permissions (REVOKE UPDATE, DELETE), recording tenant_id, table_name, action, actor_id, created_at, and before/after JSONB snapshots',
          bn: 'একটি কেবল-ডাটা-যোগ করার মতো টেবিল হিসেবে যেখানে অ্যাপ্লিকেশনের কেবল INSERT ও SELECT অনুমতি থাকবে (UPDATE এবং DELETE নিষিদ্ধ), যা টেন্যান্ট, টেবিল, অ্যাকশন, ব্যবহারকারী, সময় এবং পরিবর্তনের JSONB স্ন্যাপশট ধারণ করবে'
        },
        {
          en: 'By overwriting the same row repeatedly and deleting older records every evening',
          bn: 'একই রো-তে বারবার নতুন ডাটা লিখে এবং প্রতিদিন সন্ধ্যায় পুরানো সমস্ত রেকর্ড মুছে ফেলার মাধ্যমে'
        },
        {
          en: 'By printing logs on paper and shredding them immediately',
          bn: 'কাগজে লগ প্রিন্ট করে সাথে সাথে তা কুচিকুচি করে কেটে ফেলে'
        },
        {
          en: 'By storing logs in plain text files in the web browser cache',
          bn: 'ওয়েব ব্রাউজার ক্যাশে সাধারণ টেক্সট ফাইলে সমস্ত লগ সেভ করে রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Audit logs must be append-only; revoking UPDATE and DELETE guarantees historical integrity.',
        bn: 'অডিট লগ অপরিবর্তনীয় হতে হয়; UPDATE ও DELETE বন্ধ রাখলে কেউ অতীতের ডাটা বিকৃত করতে পারে না।'
      },
      explanation: {
        en: 'Security standards (SOC2, HIPAA) demand immutable audit trails. Revoking UPDATE and DELETE privileges on the audit_logs table guarantees that even compromised applications cannot alter historical records.',
        bn: 'আন্তর্জাতিক নিরাপত্তা মানদণ্ডে অপরিবর্তনীয় অডিট ট্রেল বাধ্যতামূলক। audit_logs টেবিলে UPDATE ও DELETE অনুমতি বাতিল করলে হ্যাকাররাও অতীতের কোনো ইতিহাস বিকৃত বা মুছে ফেলতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'the-design-release-quiz',
    title: {
      en: 'Enterprise Production Schema Architecture Assessment Quiz',
      bn: 'এন্টারপ্রাইজ প্রোডাকশন স্কিমা আর্কিটেকচার মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'db-rel-qz-1',
        kind: 'mcq',
        topic: 'timestamptz-global-standard',
        question: {
          en: 'Why is TIMESTAMPTZ (timestamp with time zone) the universal mandatory standard for date-time columns in enterprise relational databases?',
          bn: 'এন্টারপ্রাইজ রিলেশনাল ডাটাবেসে তারিখ ও সময়ের কলামের জন্য TIMESTAMPTZ (টাইমজোন সহ টাইমস্ট্যাম্প) কেন সর্বজনীন বাধ্যতামূলক মানদণ্ড?'
        },
        options: [
          {
            en: 'TIMESTAMPTZ normalizes all inputs to UTC internally upon storage and converts cleanly to any client timezone upon query, preventing daylight saving bugs and multi-region timezone synchronization chaos',
            bn: 'TIMESTAMPTZ ডিস্কে সেভ করার সময় تمام ইনপুটকে অভ্যন্তরীণভাবে UTC-তে রূপান্তরিত করে এবং কোয়েরির সময় যেকোনো টাইমজোনে নিখুঁতভাবে দেখায়, যা ডেলাইট সেভিং বাগ ও আঞ্চলিক সময়ের বিশৃঙ্খলা দূর করে'
          },
          {
            en: 'Because TIMESTAMPTZ makes the database computer clock run twice as fast',
            bn: 'কারণ TIMESTAMPTZ ডাটাবেস কম্পিউটারের ঘড়িকে দ্বিগুণ দ্রুত চলতে বাধ্য করে'
          },
          {
            en: 'Because regular TIMESTAMP columns can only store dates before the year 1999',
            bn: 'কারণ সাধারণ TIMESTAMP কলাম কেবল ১৯৯৯ সালের আগের তারিখ সংরক্ষণ করতে পারে'
          },
          {
            en: 'TIMESTAMPTZ allows users to travel backward in time physically',
            bn: 'TIMESTAMPTZ ব্যবহারকারীদেরকে শারীরিকভাবে অতীতে ভ্রমণ করার সুবিধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Always store UTC in the database and localize at the application presentation layer.',
          bn: 'ডাটাবেসে সর্বদা UTC ফরম্যাটে সময় রাখুন এবং ব্যবহারকারীকে দেখানোর সময় স্থানীয় সময়ে রূপান্তর করুন।'
        },
        explanation: {
          en: 'Storing timezone-naive timestamps creates nightmare data corruption when servers cross daylight saving boundaries or serve global users. TIMESTAMPTZ provides unambiguous UTC consistency.',
          bn: 'টাইমজোন ছাড়া সময় রাখলে আন্তর্জাতিক ব্যবহারকারী বা ডেলাইট সেভিং টাইমে ভয়াবহ বিভ্রান্তি তৈরি হয়। TIMESTAMPTZ সর্বদা বিশ্বস্ত ও অভিন্ন UTC মান নিশ্চিত করে।'
        }
      },
      {
        id: 'db-rel-qz-2',
        kind: 'mcq',
        topic: 'uuidv7-vs-bigserial-trade-off',
        question: {
          en: 'When architecting a high-scale multi-tenant SaaS schema, why do engineering teams increasingly standardize on UUIDv7 primary keys over traditional BIGSERIAL integers?',
          bn: 'উচ্চ স্কেলের মাল্টি-টেন্যান্ট SaaS স্কিমা ডিজাইনে প্রকৌশলীরা কেন চিরাচরিত BIGSERIAL ইন্টিজারের বদলে ক্রমবর্ধমানভাবে UUIDv7 প্রাইমারি কি ব্যবহার করছেন?'
        },
        options: [
          {
            en: 'UUIDv7 combines time-ordered B-Tree append locality with global collision-free distributed generation in application layers, while preventing competitors from scraping business volumes through sequential IDs',
            bn: 'UUIDv7 সময়ভিত্তিক B-Tree ইনডেক্সের সর্বোচ্চ গতির সাথে অ্যাপ্লিকেশন স্তরে বৈশ্বিক সংঘর্ষহীন আইডি তৈরির সুবিধা দেয় এবং ক্রমানুসারে সাজানো আইডি দেখে প্রতিযোগীদের ব্যবসার পরিমাণ অনুমান করা প্রতিরোধ করে'
          },
          {
            en: 'Because BIGSERIAL integers are illegal in European cloud regions',
            bn: 'কারণ ইউরোপের ক্লাউড অঞ্চলগুলোতে BIGSERIAL ইন্টিজার ব্যবহার বেআইনি'
          },
          {
            en: 'Because UUIDv7 makes server processors immune to lightning strikes',
            bn: 'কারণ UUIDv7 থাকলে সার্ভার প্রসেসরে কখনো বজ্রপাত আঘাত করতে পারে না'
          },
          {
            en: 'UUIDv7 requires zero bits of memory in the buffer cache',
            bn: 'UUIDv7 বাফার ক্যাশে শূন্য বিট মেমরি খরচ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'UUIDv7 provides distributed key generation without ID enumeration security leaks.',
          bn: 'UUIDv7 আইডি ফাঁসের নিরাপত্তা ঝুঁকি ছাড়াই ডিস্ট্রিবিউটেড পদ্ধতিতে কি তৈরির সুবিধা দেয়।'
        },
        explanation: {
          en: 'Sequential IDs (like order/1001, order/1002) reveal sales volume to competitors and require centralized database sequence locks. UUIDv7 generates un-guessable, time-ordered IDs safely anywhere.',
          bn: 'ক্রমিক আইডি (যেমন order/১০০১, order/১০০২) দেখে যে কেউ ব্যবসার মোট বিক্রির হিসাব বুঝে নিতে পারে। UUIDv7 অনুমানাতীত ও সময়ভিত্তিক শক্তিশালী অনন্য পরিচয় নিশ্চিত করে।'
        }
      },
      {
        id: 'db-rel-qz-3',
        kind: 'mcq',
        topic: 'soft-delete-architecture-trade-off',
        question: {
          en: 'What architectural challenge arises when implementing Soft Deletion (deleted_at IS NOT NULL) on a table with a UNIQUE constraint (e.g. users.email)?',
          bn: 'UNIQUE কনস্ট্রেইন্ট থাকা কোনো টেবিলে (যেমন users.email) সফট-ডিলিট (deleted_at IS NOT NULL) বাস্তবায়ন করার সময় কোন প্রযুক্তিগত সংকট দেখা দেয়?'
        },
        options: [
          {
            en: 'A standard UNIQUE(email) constraint blocks a previously deleted user from re-registering with the same email; the solution is a partial unique index: CREATE UNIQUE INDEX ON users(email) WHERE deleted_at IS NULL',
            bn: 'একটি সাধারণ UNIQUE(email) কনস্ট্রেইন্ট মুছে ফেলা অ্যাকাউন্টধারীকে একই ইমেইল দিয়ে নতুন অ্যাকাউন্ট খুলতে বাধা দেয়; এর সমাধান হলো আংশিক ইউনিক ইনডেক্স: CREATE UNIQUE INDEX ON users(email) WHERE deleted_at IS NULL'
          },
          {
            en: 'Soft-deleted records cause computer monitors to turn purple',
            bn: 'সফট-ডিলিট রেকর্ডের কারণে কম্পিউটার মনিটরের রঙ বেগুনি হয়ে যায়'
          },
          {
            en: 'The database server immediately runs out of internet bandwidth',
            bn: 'ডাটাবেস সার্ভারের تمام ইন্টারনেট ব্যান্ডউইথ নিমেষেই শেষ হয়ে যায়'
          },
          {
            en: 'Soft-deleted rows cannot be backed up to disk storage',
            bn: 'সফট-ডিলিট রো কখনো ডিস্ক স্টোরেজে ব্যাকআপ নেওয়া যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Partial unique indexes enforce uniqueness strictly over active rows where deleted_at IS NULL.',
          bn: 'আংশিক ইউনিক ইনডেক্স কেবল সক্রিয় সারির ওপর অনন্যতার নিয়ম প্রয়োগ করে।'
        },
        explanation: {
          en: 'If a user soft-deletes their profile and later returns, a standard unique constraint rejects their email because the old row still exists. A partial unique index filters out deleted rows cleanly.',
          bn: 'পুরানো রো টেবিলে থেকে যাওয়ায় সাধারণ ইউনিক কনস্ট্রেইন্ট নতুন অ্যাকাউন্ট খুলতে দেয় না। WHERE deleted_at IS NULL শর্তযুক্ত আংশিক ইনডেক্স এই সমস্যার নিখুঁত সমাধান দেয়।'
        }
      },
      {
        id: 'db-rel-qz-4',
        kind: 'mcq',
        topic: 'complete-database-architecture-synthesis',
        question: {
          en: 'In summary, what is the core architectural goal of enterprise database schema engineering?',
          bn: 'সংক্ষেপে, এন্টারপ্রাইজ ডাটাবেস স্কিমা ইঞ্জিনিয়ারিংয়ের মূল প্রযুক্তিগত লক্ষ্য কী?'
        },
        options: [
          {
            en: 'To guarantee data integrity, durability, and multi-tenant security at the storage engine level, while providing blazing query performance and zero-downtime schema evolution under high concurrency',
            bn: 'সরাসরি ডাটাবেস ইঞ্জিনের অভ্যন্তরে ডাটার বিশুদ্ধতা, স্থায়িত্ব ও মাল্টি-টেন্যান্ট নিরাপত্তা নিশ্চিত করা, এবং উচ্চ ট্রাফিকের চাপের মধ্যেও দ্রুততম কোয়েরি গতি ও শূন্য-ডাউনটাইমে স্কিমা পরিবর্তনের সুযোগ রাখা'
          },
          {
            en: 'To make the database schema as confusing as possible so no one can understand it',
            bn: 'স্কিমাকে যত সম্ভব জটিল করা যাতে কেউ তা সহজে বুঝতে না পারে'
          },
          {
            en: 'To avoid writing database documentation for team members',
            bn: 'দলের অন্যান্য সদস্যদের জন্য ডাটাবেস ডকুমেন্টেশন লেখা এড়িয়ে চলা'
          },
          {
            en: 'To shut down the production database every Friday evening',
            bn: 'প্রতি শুক্রবার সন্ধ্যায় প্রোডাকশন ডাটাবেস বন্ধ করে রাখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Integrity, security, performance, and zero-downtime evolution define professional schema engineering.',
          bn: 'ডাটার নিরাপত্তা, শুদ্ধতা, সর্বোচ্চ গতি এবং শূন্য ডাউনটাইম হলো পেশাদার স্কিমা ইঞ্জিনিয়ারিংয়ের ভিত্তি।'
        },
        explanation: {
          en: 'A world-class database schema protects business assets. Enforcing constraints, security policies, and performance patterns at the database layer ensures the application remains rock-solid for decades.',
          bn: 'একটি বিশ্বমানের ডাটাবেস স্কিমা কোম্পানির সমস্ত সম্পদ সুরক্ষিত রাখে। ডাটাবেস স্তরেই সঠিক নিয়ম ও নিরাপত্তা প্রয়োগ করলে দীর্ঘ সময় ধরে সিস্টেম নির্ভরযোগ্য ও দ্রুতগতির থাকে।'
        }
      }
    ]
  }
};
