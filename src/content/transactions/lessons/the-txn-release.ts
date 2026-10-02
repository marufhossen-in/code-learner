import type { Lesson } from '../../../lib/types';

export const TheTxnReleaseLesson: Lesson = {
  slug: 'the-txn-release',
  tech: 'transactions',
  title: {
    en: 'Production Transaction Engineering & Distributed Sagas',
    bn: 'প্রোডাকশন ট্রানজ্যাকশন ইঞ্জিনিয়ারিং ও ডিস্ট্রিবিউটেড সাগা'
  },
  summary: {
    en: 'Master transaction engineering in distributed microservices: Two-Phase Commit (2PC) limitations, Compensating Transactions, Choreography vs Orchestration Sagas, and the Transactional Outbox Pattern.',
    bn: 'ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসে ট্রানজ্যাকশন ইঞ্জিনিয়ারিং আয়ত্ত করুন: ২-ফেজ কমিটের (2PC) সীমাবদ্ধতা, কম্পেনসেটিং ট্রানজ্যাকশন, কোরিওগ্রাফি বনাম অর্কেস্ট্রেশন সাগা এবং ট্রানজ্যাকশনাল আউটবক্স প্যাটার্ন।'
  },
  minutes: 29,
  blocks: [
    {
      type: 'heading',
      id: 'transactions-in-distributed-systems',
      text: {
        en: 'The Breakdown of ACID in Cloud Microservices',
        bn: 'ক্লাউড মাইক্রোসার্ভিসে ACID নিয়মের রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your application runs on a single database, transactions provide rock-solid guarantees through local memory locks and write-ahead logging. As your architecture grows, modern cloud systems split into dozens of distributed microservices, each managing its own isolated private database. In this decentralized world, a single SQL transaction cannot coordinate changes across different network nodes.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন একটি একক ডাটাবেসে চলে, তখন লোকাল মেমরি লক এবং লগিংয়ের সাহায্যে ট্রানজ্যাকশনগুলো শতভাগ নির্ভরযোগ্য সুরক্ষা দেয়। কিন্তু সিস্টেম বড় হওয়ার সাথে সাথে আধুনিক ক্লাউড আর্কিটেকচার ডজন ডজন ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসে বিভক্ত হয়ে পড়ে, যেখানে প্রতিটি সার্ভিসের নিজস্ব আলাদা ডাটাবেস থাকে। এই বিকেন্দ্রীভূত ব্যবস্থায় একটিমাত্র SQL ট্রানজ্যাকশন দিয়ে ভিন্ন ভিন্ন নেটওয়ার্ক নোডের পরিবর্তনগুলো নিয়ন্ত্রণ করা সম্ভব নয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Distributed Two-Phase Commit (2PC) protocols attempt to maintain ACID across networks, but they suffer from high latency and blocking coordinator failures. To preserve system scalability without risking data corruption, distributed architectures adopt the Saga Pattern: replacing atomic distributed locks with a choreographed sequence of local transactions and compensating rollbacks.',
        bn: 'ডিস্ট্রিবিউটেড টু-ফেজ কমিট (2PC) প্রোটোকল নেটওয়ার্ক জুড়ে ACID রক্ষার চেষ্টা করলেও তা তীব্র ল্যাটেন্সি ও সমন্বয়কারীর ব্যর্থতায় স্থবির হয়ে পড়ে। সিস্টেমের কর্মক্ষমতা ধরে রেখে ডাটা বিকৃতি রোধ করতে আধুনিক আর্কিটেকচার সাগা প্যাটার্ন (Saga Pattern) গ্রহণ করে: এটি ডিস্ট্রিবিউটেড লকের বদলে ধারাবাহিক লোকাল লেনদেন ও সমন্বিত ক্ষতিপূরণ প্রক্রিয়ার সমন্বয়ে কাজ সম্পন্ন করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Distributed Saga Pattern: Forward Execution vs Backward Compensation',
        bn: 'ডিস্ট্রিবিউটেড সাগা প্যাটার্ন: ফরোয়ার্ড এক্সিকিউশন বনাম ব্যাকওয়ার্ড ক্ষতিপূরণ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Distributed Saga Pattern Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Top Flow: Forward Transactions -->
  <text x="370" y="30" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Forward Transaction Flow (Normal Path)</text>

  <!-- Step 1: Order Service -->
  <g transform="translate(40, 50)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="90" y="25" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">T1: Order Service</text>
    <text x="90" y="45" fill="#cbd5e1" font-size="9" text-anchor="middle">Insert Order (PENDING)</text>
    <text x="90" y="62" fill="#94a3b8" font-size="9" text-anchor="middle">Local DB 1 Commit [OK]</text>
  </g>

  <!-- Arrow T1 -> T2 -->
  <path d="M 225 87 L 275 87" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Step 2: Payment Service -->
  <g transform="translate(280, 50)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="90" y="25" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">T2: Payment Service</text>
    <text x="90" y="45" fill="#cbd5e1" font-size="9" text-anchor="middle">Charge Card $500</text>
    <text x="90" y="62" fill="#94a3b8" font-size="9" text-anchor="middle">Local DB 2 Commit [OK]</text>
  </g>

  <!-- Arrow T2 -> T3 -->
  <path d="M 465 87 L 515 87" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Step 3: Inventory Service (FAILS!) -->
  <g transform="translate(520, 50)">
    <rect width="180" height="75" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
    <text x="90" y="25" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">T3: Inventory Service</text>
    <text x="90" y="45" fill="#fecaca" font-size="9" text-anchor="middle">Reserve Warehouse Items</text>
    <text x="90" y="62" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">OUT OF STOCK (ABORT!)</text>
  </g>

  <!-- Bottom Flow: Backward Compensating Transactions -->
  <text x="370" y="165" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">Backward Compensating Flow (Failure Rollback)</text>

  <!-- C2: Refund Payment -->
  <g transform="translate(280, 185)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="90" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">C2: Refund Payment</text>
    <text x="90" y="45" fill="#cbd5e1" font-size="9" text-anchor="middle">Refund $500 to Card</text>
    <text x="90" y="62" fill="#94a3b8" font-size="9" text-anchor="middle">Reverses business effect</text>
  </g>

  <!-- Arrow C2 <- T3 -->
  <path d="M 610 130 Q 610 160 465 220" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="4 3" />

  <!-- Arrow C2 -> C1 -->
  <path d="M 275 220 L 225 220" stroke="#f87171" stroke-width="2" />

  <!-- C1: Cancel Order -->
  <g transform="translate(40, 185)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="90" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">C1: Cancel Order</text>
    <text x="90" y="45" fill="#cbd5e1" font-size="9" text-anchor="middle">Update Order (CANCELLED)</text>
    <text x="90" y="62" fill="#94a3b8" font-size="9" text-anchor="middle">System reaches consistency</text>
  </g>

  <!-- Bottom Key Note -->
  <g transform="translate(40, 275)">
    <rect width="660" height="42" rx="4" fill="#020617" stroke="#334155" stroke-width="1" />
    <text x="20" y="26" fill="#94a3b8" font-size="10">Sagas maintain Eventual Consistency via semantic undo actions rather than physical database-level rollbacks.</text>
  </g>
</svg>`,
      caption: {
        en: 'The Distributed Saga pattern: failure in Inventory (T3) triggers compensating transactions C2 (Refund) and C1 (Cancel) in reverse order.',
        bn: 'ডিস্ট্রিবিউটেড সাগা প্যাটার্ন: ইনভেন্টরি সার্ভিসে (T3) ব্যর্থতা ঘটলে বিপরীত ক্রমে ক্ষতিপূরণমূলক লেনদেন C2 (টাকা ফেরত) এবং C1 (অর্ডার বাতিল) সম্পন্ন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Saga Pattern',
          def: {
            en: 'An architectural pattern managing distributed transactions through a sequence of local transactions, coordinated via events or an orchestrator.',
            bn: 'একটি ডিস্ট্রিবিউটেড আর্কিটেকচার যা ইভেন্ট বা সমন্বয়কারীর সাহায্যে একাধিক লোকাল লেনদেন পরিচালনা করে সামগ্রিক নিরাপত্তা দেয়।'
          }
        },
        {
          term: 'Compensating Transaction',
          def: {
            en: 'An explicit backward business operation that semantically reverses the real-world side effects of a previously committed local transaction.',
            bn: 'একটি স্পষ্ট ব্যবসায়িক অপারেশন যা পূর্বে সম্পন্ন হওয়া কোনো লোকাল লেনদেনের বাস্তব প্রভাবকে সুশৃঙ্খলভাবে বাতিল করে দেয়।'
          }
        },
        {
          term: 'Transactional Outbox Pattern',
          def: {
            en: 'A reliability pattern writing outgoing integration messages to an outbox table in the SAME database transaction as domain entities, preventing dual-write inconsistencies.',
            bn: 'একটি নির্ভরযোগ্য ডিজাইন প্যাটার্ন যা মেসেজ ব্রোকারে পাঠানোর বার্তাগুলোকে মূল ডাটার সাথে একই ট্রানজ্যাকশনে একটি আউটবক্স টেবিলে সেভ করে।'
          }
        },
        {
          term: 'Idempotency Key',
          def: {
            en: 'A unique client-provided request identifier ensuring that duplicate retried network requests execute business actions exactly once.',
            bn: 'ক্লায়েন্ট প্রেরিত একটি অনন্য পরিচয় টোকেন যা নিশ্চিত করে যে নেটওয়ার্কে বারবার একই রিকোয়েস্ট পাঠালেও কাজটি কেবল একবারই সম্পন্ন হবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'saga-orchestration-vs-choreography',
      text: {
        en: 'Saga Flavors: Choreography vs Centralized Orchestration',
        bn: 'সাগার ২টি রূপ: কোরিওগ্রাফি বনাম কেন্দ্রীভূত অর্কেস্ট্রেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1987, computer scientists Hector Garcia-Molina and Kenneth Salem published their groundbreaking paper defining the Saga pattern. Modern systems implement Sagas through two distinct topologies: Choreography and Orchestration. In Choreography, microservices listen to domain events via message brokers like Apache Kafka and independently trigger their respective next steps without a centralized manager.',
        bn: '১৯৮৭ সালে কম্পিউটার বিজ্ঞানী হেক্টর গার্সিয়া-মোলিনা এবং কেনেথ সালেম তাদের যুগান্তকারী গবেষণাপত্রে সাগা প্যাটার্ন সংজ্ঞায়িত করেন। আধুনিক সফটওয়্যারগুলো ২টি ভিন্ন উপায়ে সাগা বাস্তবায়ন করে: কোরিওগ্রাফি এবং অর্কেস্ট্রেশন। কোরিওগ্রাফিতে কোনো কেন্দ্রীয় পরিচালক থাকে না; মাইক্রোসার্ভিসগুলো অ্যাপাচি কাফকার মতো মেসেজ ব্রোকারের ইভেন্ট শুনে নিজেরাই নিজেদের পরবর্তী কাজ শুরু করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Orchestration, a dedicated Saga Orchestrator (such as Temporal or AWS Step Functions) centrally commands participating services. The orchestrator tracks overall workflow state in its own database, issues direct execution instructions, and automatically fires compensating transactions in reverse order if any downstream service reports an error.',
        bn: 'অর্কেস্ট্রেশনে একটি কেন্দ্রীয় সাগা অর্কেস্ট্রেটর (যেমন Temporal বা AWS Step Functions) تمام অংশগ্রহণকারী সার্ভিসকে নির্দেশনা পাঠায়। অর্কেস্ট্রেটর নিজস্ব ডাটাবেসে কাজের সামগ্রিক অগ্রগতি লিখে রাখে, সরাসরি কাজের আদেশ দেয় এবং শেষের দিকে কোনো সার্ভিস ব্যর্থ হলে স্বয়ংক্রিয়ভাবে উল্টো দিক থেকে সমস্ত ক্ষতিপূরণ বা রিফান্ড সম্পন্ন করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-saga-engine',
      text: {
        en: 'Executable Distributed Saga Orchestrator Engine',
        bn: 'রানযোগ্য ডিস্ট্রিবিউটেড সাগা অর্কেস্ট্রেটর ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js distributed saga engine orchestrating an e-commerce checkout across 3 microservices: Order Service, Payment Service, and Inventory Service. When inventory runs out, the orchestrator triggers compensating transactions in reverse sequence: refunding $500 on the payment gateway and marking order #101 as cancelled.',
        bn: 'নিচে ৩টি মাইক্রোসার্ভিসের (অর্ডার, পেমেন্ট এবং ইনভেন্টরি সার্ভিস) সমন্বয়ে কেনাকাটা পরিচালনাকারী একটি সম্পূর্ণ Node.js ডিস্ট্রিবিউটেড সাগা ইঞ্জিন দেওয়া হলো। পণ্যের মজুদ ফুরিয়ে গেলে অর্কেস্ট্রেটর বিপরীত ক্রমে ক্ষতিপূরণ কার্যকর করে: পেমেন্ট গেটওয়েতে ৫০০ ডলার রিফান্ড করে এবং ১০১ নম্বর অর্ডারটি সফলভাবে বাতিল করে সমতা ফিরিয়ে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Distributed Saga Orchestrator executing forward transactions and reversing failure via compensating steps',
        bn: 'ফরোয়ার্ড লেনদেন সম্পন্নকারী এবং ব্যর্থতায় ক্ষতিপূরণমূলক পদক্ষেপ দিয়ে রিভার্সকারী ডিস্ট্রিবিউটেড সাগা অর্কেস্ট্রেটর'
      },
      code: `// Distributed Saga Orchestration Coordinator
class DistributedSaga {
  constructor() {
    this.compensations = [];
    this.auditLog = [];
  }

  executeStep(serviceName, forwardAction, compensatingAction) {
    this.auditLog.push(\`FORWARD: \${serviceName}\`);
    // Prepend compensating action to run in reverse order upon failure
    this.compensations.unshift({ serviceName, compensate: compensatingAction });
    forwardAction();
  }

  compensateAll() {
    for (const item of this.compensations) {
      this.auditLog.push(\`COMPENSATE: \${item.serviceName}\`);
      item.compensate();
    }
  }
}

// Simulated Microservice Database States
let orderRecord = { id: 101, status: 'NONE' };
let paymentLedger = { chargedAmount: 0 };
let warehouseStock = { available: 0 }; // Out of stock!

const checkoutSaga = new DistributedSaga();

// Step 1: Order Service creates tentative order
checkoutSaga.executeStep(
  'OrderService',
  () => { orderRecord = { id: 101, status: 'CREATED_PENDING' }; },
  () => { orderRecord = { id: 101, status: 'CANCELLED_OUT_OF_STOCK' }; }
);
console.log(\`[Saga Orchestrator] Step 1: Created order #101; Step 2: Charged payment of $500.\`);

// Step 2: Payment Service charges credit card
checkoutSaga.executeStep(
  'PaymentService',
  () => { paymentLedger.chargedAmount = 500; },
  () => { paymentLedger.chargedAmount = 0; } // Refund $500
);

// Step 3: Inventory Service attempts to reserve items
let isInventoryAvailable = warehouseStock.available > 0;
if (!isInventoryAvailable) {
  console.log(\`[Saga Orchestrator] Step 3: Inventory reservation failed (Out of stock); triggering compensating transactions.\`);
  checkoutSaga.compensateAll();
}

const isSystemConsistent = orderRecord.status === 'CANCELLED_OUT_OF_STOCK' && paymentLedger.chargedAmount === 0;
console.log(\`[Saga Orchestrator] Compensating Step 2: Refunded $500; Compensating Step 1: Cancelled order #101 (1/1: \${isSystemConsistent}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Dual-Write Problem and the Outbox Solution',
        bn: 'ডুয়েল-রাইট সমস্যা এবং আউটবক্স সমাধান'
      },
      text: {
        en: 'A notorious distributed bug occurs when updating a local database and emitting a Kafka event in separate operations: if the server crashes in between, the database has committed changes but Kafka never received the message. The Transactional Outbox Pattern solves this by inserting the event into an "outbox" SQL table inside the exact same database transaction, where a CDC tool (like Debezium) streams it reliably.',
        bn: 'ডিস্ট্রিবিউটেড সিস্টেমের একটি পরিচিত বিপদ হলো ডাটাবেসে ডাটা আপডেট করে আলাদাভাবে কাফকায় মেসেজ পাঠানো: মাঝখানে সার্ভার ক্র্যাশ করলে ডাটাবেসে পরিবর্তন থেকে গেলেও কাফকা কোনো বার্তা পায় না। ট্রানজ্যাকশনাল আউটবক্স প্যাটার্ন মূল ডাটা এবং মেসেজকে একই ডাটাবেস ট্রানজ্যাকশনে একটি "আউটবক্স" টেবিলে লিখে এই বিপদ পুরোপুরি দূর করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Saga Failure Compensation Predictor',
        bn: 'সাগা ক্ষতিপূরণ ফলাফল পূর্বাভাসক'
      },
      description: {
        en: 'Test distributed compensation: verify that money is refunded and order cancelled when a downstream microservice fails.',
        bn: 'ডিস্ট্রিবিউটেড ক্ষতিপূরণ পরীক্ষা করুন: শেষের মাইক্রোসার্ভিস ব্যর্থ হলে টাকা ফেরত এবং অর্ডার বাতিল নিশ্চিত করুন।'
      },
      code: `function runSagaCheckout(inventoryCount) {
  let orderState = 'PENDING';
  let balanceDeducted = 0;

  // Step 1 & 2 succeed
  orderState = 'ORDER_CREATED';
  balanceDeducted = 100;

  // Step 3: Inventory check
  if (inventoryCount === 0) {
    // Compensations fire
    balanceDeducted = 0; // Refund
    orderState = 'ORDER_CANCELLED';
  }

  return { orderState, balanceDeducted };
}

console.log('Out of Stock Outcome:', runSagaCheckout(0));`,
      tests: [
        {
          name: {
            en: 'Triggers compensation to refund money and cancel order',
            bn: 'ক্ষতিপূরণ সক্রিয় করে টাকা ফেরত দেয় এবং অর্ডার বাতিল করে'
          },
          expected: 'Out of Stock Outcome: { orderState: \'ORDER_CANCELLED\', balanceDeducted: 0 }'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-rel-ex-1',
      kind: 'mcq',
      topic: 'saga-compensating-transaction-role',
      question: {
        en: 'In the Saga architectural pattern, what is the specific role of a Compensating Transaction?',
        bn: 'সাগা আর্কিটেকচারাল প্যাটার্নে একটি কম্পেনসেটিং বা ক্ষতিপূরণমূলক ট্রানজ্যাকশনের সুনির্দিষ্ট ভূমিকা কী?'
      },
      options: [
        {
          en: 'To semantically undo the real-world business side-effects of an earlier committed local transaction when a downstream step subsequently fails',
          bn: 'পরবর্তী কোনো ধাপ ব্যর্থ হলে পূর্বে সফলভাবে সম্পন্ন হওয়া লোকাল লেনদেনের বাস্তব ব্যবসায়িক প্রভাবকে সুশৃঙ্খলভাবে বাতিল করা'
        },
        {
          en: 'To double the speed of network routers across the datacenter',
          bn: 'ডাটা সেন্টারের সমস্ত নেটওয়ার্ক রাউটারের গতি দ্বিগুণ করা'
        },
        {
          en: 'To delete all user photos from database cloud storage',
          bn: 'ডাটাবেস ক্লাউড স্টোরেজ থেকে সমস্ত ব্যবহারকারীর ছবি মুছে ফেলা'
        },
        {
          en: 'To turn off all computers at 5:00 PM every weekday',
          bn: 'প্রতিটি কর্মদিবসে বিকেল ৫:০০ টায় সমস্ত কম্পিউটার বন্ধ করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compensating transactions undo already committed steps (e.g., refund a charged card).',
        bn: 'কম্পেনসেটিং ট্রানজ্যাকশন পূর্বে কমিট হওয়া কাজ বাতিল করে (যেমন টাকা ফেরত দেওয়া)।'
      },
      explanation: {
        en: 'Because local transactions commit immediately in a saga, an abort cannot physically roll them back. Instead, explicit business compensations (like refunding a credit card) undo their effects.',
        bn: 'সাগাতে প্রতিটি লোকাল কাজ সাথে সাথে কমিট হয়ে যায় বলে সাধারণ রোলব্যাক সম্ভব হয় না। এর বদলে সুনির্দিষ্ট ক্ষতিপূরণমূলক কাজের মাধ্যমে পূর্বের কাজের প্রভাব মুছে ফেলা হয়।'
      }
    },
    {
      id: 'txn-rel-ex-2',
      kind: 'mcq',
      topic: 'transactional-outbox-pattern-purpose',
      question: {
        en: 'Which critical consistency hazard does the Transactional Outbox Pattern eliminate in event-driven microservices?',
        bn: 'ইভেন্ট-চালিত মাইক্রোসার্ভিসে ট্রানজ্যাকশনাল আউটবক্স প্যাটার্ন কোন মারাত্মক অসঙ্গতি দূর করে?'
      },
      options: [
        {
          en: 'The Dual-Write Problem: where a local database transaction commits but the network crashes before the message can be published to Apache Kafka',
          bn: 'ডুয়েল-রাইট সমস্যা: যেখানে লোকাল ডাটাবেস ট্রানজ্যাকশন কমিট হয়ে যায় কিন্তু অ্যাপাচি কাফকাতে বার্তা পাঠানোর আগেই নেটওয়ার্ক ক্র্যাশ করে'
        },
        {
          en: 'Users forgetting their account passwords on mobile apps',
          bn: 'মোবাইল অ্যাপে ব্যবহারকারীদের নিজস্ব অ্যাকাউন্টের পাসওয়ার্ড ভুলে যাওয়া'
        },
        {
          en: 'The computer screen flickering when displaying bright images',
          bn: 'উজ্জ্বল ছবি প্রদর্শনের সময় কম্পিউটার স্ক্রিন কাঁপতে থাকা'
        },
        {
          en: 'SQL queries requiring more than 5 words to write',
          bn: 'SQL কোয়েরি লিখতে ৫টির বেশি শব্দের প্রয়োজন হওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dual-write: updating the database and publishing an event must happen atomically.',
        bn: 'ডুয়েল-রাইট: ডাটাবেস আপডেট এবং ইভেন্ট প্রকাশ একসাথে অ্যাটমিকভাবে হতে হবে।'
      },
      explanation: {
        en: 'By writing events into an outbox table within the same transaction that updates business data, the outbox pattern guarantees atomic message persistence without distributed 2PC.',
        bn: 'মূল ডাটা পরিবর্তনের সাথেই একই ট্রানজ্যাকশনে ইভেন্টটিকে একটি আউটবক্স টেবিলে সেভ করে এই প্যাটার্ন শতভাগ নিশ্চিত বার্তা প্রেরণ সম্ভব করে তোলে।'
      }
    },
    {
      id: 'txn-rel-ex-3',
      kind: 'mcq',
      topic: 'idempotency-key-network-retries',
      question: {
        en: 'Why must payment and financial APIs require an Idempotency-Key header on all mutable POST requests?',
        bn: 'পেমেন্ট এবং আর্থিক API-গুলোতে সমস্ত পরিবর্তনশীল POST রিকোয়েস্টে কেন Idempotency-Key হেডার থাকা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'To guarantee that if a network timeout occurs and the client retries the request, the server identifies the duplicate key and does not double-charge the customer',
          bn: 'যাতে নেটওয়ার্ক টাইমআউটের কারণে ক্লায়েন্ট পুনরায় রিকোয়েস্ট পাঠালে সার্ভার ডুপ্লিকেট কি চিনে নিয়ে গ্রাহকের কাছ থেকে দুইবার টাকা না কাটে'
        },
        {
          en: 'To make the credit card numbers look more attractive on statements',
          bn: 'ব্যাংক স্টেটমেন্টে ক্রেডিট কার্ড নম্বর দেখতে আরও সুন্দর লাগার জন্য'
        },
        {
          en: 'To compress the JSON body into a ZIP archive automatically',
          bn: 'JSON বডিকে স্বয়ংক্রিয়ভাবে একটি ZIP ফাইলে কম্প্রেস করার জন্য'
        },
        {
          en: 'Because HTTP standards forbid POST requests without keys',
          bn: 'কারণ HTTP মানদণ্ডে কোনো কি ছাড়া POST রিকোয়েস্ট পাঠানো নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Idempotency ensures repeated execution produces the exact same result once.',
        bn: 'আইডেমপোটেন্সি নিশ্চিত করে যে একাধিকবার চেষ্টা করলেও কাজটি কেবল একবারই ঘটবে।'
      },
      explanation: {
        en: 'Network failures are ambiguous: did the server crash before charging, or did the response drop after charging? Idempotency keys let clients retry safely without danger of double-billing.',
        bn: 'নেটওয়ার্ক বিচ্ছিন্ন হলে বোঝা কঠিন টাকা কেটেছে নাকি কাটেনি। আইডেমপোটেন্সি কি থাকার ফলে নির্ভয়ে পুনরায় রিকোয়েস্ট পাঠানো যায় এবং দ্বিগুণ টাকা কাটার কোনো ভয় থাকে না।'
      }
    },
    {
      id: 'txn-rel-ex-4',
      kind: 'mcq',
      topic: 'two-phase-commit-cloud-failure',
      question: {
        en: 'Why is distributed Two-Phase Commit (2PC) rarely used in modern high-scale cloud microservices?',
        bn: 'আধুনিক উচ্চ স্কেলের ক্লাউড মাইক্রোসার্ভিসে কেন ডিস্ট্রিবিউটেড টু-ফেজ কমিট (2PC) প্রায় কখনোই ব্যবহার করা হয় না?'
      },
      options: [
        {
          en: 'Because 2PC is a blocking protocol: if the central coordinator crashes or a network partition occurs during the prepare phase, participating nodes remain locked indefinitely, collapsing throughput',
          bn: 'কারণ 2PC একটি ব্লকিং প্রোটোকল: কেন্দ্রীয় সমন্বয়কারী ক্র্যাশ করলে বা নেটওয়ার্ক বিচ্ছিন্ন হলে تمام নোড চিরতরে লক হয়ে থাকে যা সিস্টেমের গতি ধ্বংস করে দেয়'
        },
        {
          en: 'Because 2PC was banned by international computer laws in 2000',
          bn: 'কারণ ২০০০ সালে আন্তর্জাতিক কম্পিউটার আইনে 2PC নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'Because 2PC only works on computers manufactured before 1970',
          bn: 'কারণ 2PC কেবল ১৯৭০ সালের আগের পুরনো কম্পিউটারে চলতে পারে'
        },
        {
          en: 'Because cloud data centers do not allow cables longer than 1 meter',
          bn: 'কারণ ক্লাউড ডাটা সেন্টারে ১ মিটারের চেয়ে লম্বা তার ব্যবহার নিষেধ'
        }
      ],
      answer: 0,
      hint: {
        en: '2PC is a blocking protocol vulnerable to network partitions and coordinator crashes.',
        bn: '2PC একটি ব্লকিং প্রোটোকল যা সমন্বয়কারীর ক্র্যাশ বা নেটওয়ার্ক সমস্যায় পুরো সিস্টেমকে আটকে রাখে।'
      },
      explanation: {
        en: '2PC requires unanimous node agreement and holds pessimistic locks across network boundaries. Any network hiccup stalls the entire cluster, making it impractical for cloud scale.',
        bn: '2PC تمام নোডের শতভাগ সম্মতি দাবি করে এবং নেটওয়ার্ক জুড়ে ভারী লক ধরে রাখে। সামান্য নেটওয়ার্ক জটিলতাও পুরো ক্লাস্টারকে অচল করে দেয়, তাই ক্লাউডে এটি ব্যবহার করা হয় না।'
      }
    }
  ],
  quiz: {
    id: 'the-txn-release-quiz',
    title: {
      en: 'Production Transaction Engineering Quiz',
      bn: 'প্রোডাকশন ট্রানজ্যাকশন ইঞ্জিনিয়ারিং কুইজ'
    },
    questions: [
      {
        id: 'txn-rel-qz-1',
        kind: 'mcq',
        topic: 'saga-inventors-publication-year',
        question: {
          en: 'Who invented the Saga concept for handling long-lived transactions, and in which year was it published?',
          bn: 'দীর্ঘমেয়াদী ট্রানজ্যাকশন পরিচালনার জন্য সাগা (Saga) ধারণাটি কারা উদ্ভাবন করেছিলেন এবং কোন সালে এটি প্রকাশিত হয়েছিল?'
        },
        options: [
          {
            en: 'Hector Garcia-Molina and Kenneth Salem in 1987',
            bn: 'হেক্টর গার্সিয়া-মোলিনা এবং কেনেথ সালেম ১৯৮৭ সালে'
          },
          {
            en: 'Tim Berners-Lee in 1991',
            bn: 'টিম বার্নার্স-লি ১৯৯১ সালে'
          },
          {
            en: 'Dennis Ritchie and Ken Thompson in 1972',
            bn: 'ডেনিস রিচি এবং কেন থম্পসন ১৯৭২ সালে'
          },
          {
            en: 'James Gosling while inventing Java in 1995',
            bn: 'জেমস গসলিং ১৯৯৫ সালে জাভা তৈরির সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Garcia-Molina and Salem published the Saga pattern in 1987.',
          bn: 'গার্সিয়া-মোলিনা এবং সালেম ১৯৮৭ সালে সাগা প্যাটার্ন প্রকাশ করেন।'
        },
        explanation: {
          en: 'Hector Garcia-Molina and Kenneth Salem published "Sagas" in 1987 at Princeton University, introducing the idea of breaking long-lived transactions into sequences of smaller compensated transactions.',
          bn: 'হেক্টর গার্সিয়া-মোলিনা এবং কেনেথ সালেম ১৯৮৭ সালে প্রিন্সটন বিশ্ববিদ্যালয় থেকে "সাগাস" প্রকাশ করেন এবং দীর্ঘ ট্রানজ্যাকশনকে ছোট ছোট ক্ষতিপূরণযোগ্য লেনদেনে রূপান্তরের পথ দেখান।'
        }
      },
      {
        id: 'txn-rel-qz-2',
        kind: 'mcq',
        topic: 'cdc-change-data-capture-outbox',
        question: {
          en: 'How does Change Data Capture (CDC, using tools like Debezium) complement the Transactional Outbox Pattern in production architectures?',
          bn: 'প্রোডাকশন আর্কিটেকচারে চেঞ্জ ডাটা ক্যাপচার (CDC, যেমন Debezium) কীভাবে ট্রানজ্যাকশনাল আউটবক্স প্যাটার্নকে শক্তিশালী করে?'
        },
        options: [
          {
            en: 'It directly reads database Write-Ahead Logs (WAL) in the background and reliably streams new outbox records into Apache Kafka without requiring applications to poll the database',
            bn: 'এটি ব্যাকগ্রাউন্ডে সরাসরি ডাটাবেসের রাইট-অ্যাহেড লগ (WAL) পড়ে এবং কোনো অতিরিক্ত কোয়েরি ছাড়াই নির্ভরযোগ্যভাবে নতুন আউটবক্স রেকর্ড কাফকাতে পাঠিয়ে দেয়'
          },
          {
            en: 'It deletes all rows in the outbox table every 2 seconds',
            bn: 'এটি প্রতি ২ সেকেন্ড পর পর আউটবক্স টেবিলের تمام রো মুছে ফেলে'
          },
          {
            en: 'It prints copies of all database logs to physical PDF files',
            bn: 'এটি تمام ডাটাবেস লগকে ফিজিক্যাল PDF ফাইলে প্রিন্ট করে রাখে'
          },
          {
            en: 'It requires all microservices to use the same database password',
            bn: 'এতে সমস্ত মাইক্রোসার্ভিসকে একই ডাটাবেস পাসওয়ার্ড ব্যবহার করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CDC tails the WAL to publish outbox events asynchronously and reliably.',
          bn: 'CDC ডাটাবেস লগ (WAL) পর্যবেক্ষণ করে আউটবক্স ইভেন্টগুলোকে কাফকাতে পাঠায়।'
        },
        explanation: {
          en: 'CDC avoids database polling overhead. Tools like Debezium read Postgres WAL directly, ensuring zero message loss and sub-second publishing latency.',
          bn: 'CDC ডাটাবেসের ওপর অতিরিক্ত কোয়েরির চাপ তৈরি করে না। Debezium সরাসরি Postgres WAL থেকে বিদ্যুৎ গতিতে কোনো বার্তা না হারিয়েই কাফকাতে ডাটা পৌঁছে দেয়।'
        }
      },
      {
        id: 'txn-rel-qz-3',
        kind: 'mcq',
        topic: 'saga-orchestrator-frameworks',
        question: {
          en: 'Which modern workflow orchestration engines are widely adopted in enterprise systems to manage stateful distributed Sagas with automated retries and compensations?',
          bn: 'স্বয়ংক্রিয় ক্ষতিপূরণ ও রিট্রাই সহ ডিস্ট্রিবিউটেড সাগা পরিচালনার জন্য কোন আধুনিক ওয়ার্কফ্লো ইঞ্জিনগুলো শিল্পক্ষেত্রে ব্যাপকভাবে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Temporal.io, Cadence, and AWS Step Functions',
            bn: 'Temporal.io, Cadence এবং AWS Step Functions'
          },
          {
            en: 'Microsoft Paint and Adobe Photoshop',
            bn: 'মাইক্রোসফট পেইন্ট এবং অ্যাডোবি ফটোশপ'
          },
          {
            en: 'Notepad.exe and Google Chrome',
            bn: 'নোটপ্যাড এবং গুগল ক্রোম'
          },
          {
            en: 'VLC Media Player and Spotify',
            bn: 'ভিএলসি মিডিয়া প্লেয়ার এবং স্পটিফাই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Temporal and Step Functions are standard distributed workflow engines.',
          bn: 'Temporal এবং Step Functions হলো বহুল ব্যবহৃত ডিস্ট্রিবিউটেড ওয়ার্কফ্লো ইঞ্জিন।'
        },
        explanation: {
          en: 'Temporal and AWS Step Functions provide persistent workflow state, automatic compensation triggers, and fault-tolerant retry timers for enterprise saga execution.',
          bn: 'Temporal এবং AWS Step Functions দীর্ঘমেয়াদী সাগা পরিচালনায় স্থায়ী স্টেট, স্বয়ংক্রিয় ক্ষতিপূরণ এবং ক্র্যাশ-প্রতিরোধী নির্ভরযোগ্য ব্যবস্থা প্রদান করে।'
        }
      },
      {
        id: 'txn-rel-qz-4',
        kind: 'mcq',
        topic: 'eventual-consistency-business-acceptability',
        question: {
          en: 'Why do major real-world companies like Amazon and Uber embrace Eventual Consistency and Sagas over strict distributed locking?',
          bn: 'আমাজন এবং উবারের মতো বৃহৎ বৈশ্বিক প্রতিষ্ঠানগুলো কেন কঠোর ডিস্ট্রিবিউটেড লকিংয়ের বদলে ইভেনচুয়াল কনসিস্টেন্সি ও সাগাকে বেছে নিয়েছে?'
        },
        options: [
          {
            en: 'Because eventual consistency allows systems to achieve virtually unlimited horizontal scale, 99.999% uptime availability, and global responsiveness by trading off momentary synchronization delays',
            bn: 'কারণ সামান্য সময়ের ব্যবধান মেনে নিয়ে এটি সিস্টেমকে প্রায় সীমাহীন অনুভূমিক স্কেলিং, ৯৯.৯৯৯% সার্বক্ষণিক প্রাপ্যতা এবং বৈশ্বিক গতি অর্জনের সুযোগ দেয়'
          },
          {
            en: 'Because eventual consistency saves money on office furniture',
            bn: 'কারণ ইভেনচুয়াল কনসিস্টেন্সি অফিসের আসবাবপত্রের খরচ বাঁচিয়ে দেয়'
          },
          {
            en: 'Because their engineers do not understand how relational databases work',
            bn: 'কারণ তাদের ইঞ্জিনিয়াররা রিলেশনাল ডাটাবেস কীভাবে কাজ করে তা বোঝেন না'
          },
          {
            en: 'Because strict transactions are illegal in the United States',
            bn: 'কারণ যুক্তরাষ্ট্রে কঠোর ট্রানজ্যাকশন ব্যবহার করা আইনত নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Scale and uptime: global systems cannot afford blocking distributed locks.',
          bn: 'স্কেলিং ও সার্বক্ষণিক সচল থাকা: বিশ্বব্যাপী চলা সিস্টেম লকের কারণে থমকে যেতে পারে না।'
        },
        explanation: {
          en: 'At Amazon and Uber scale, global network latencies make distributed locks impossible. Sagas permit services to accept orders non-stop while reconciling states through asynchronous compensation.',
          bn: 'আমাজন ও উবারের বিশাল পরিসরে ডিস্ট্রিবিউটেড লক দিয়ে কাজ করা অসম্ভব। সাগা প্যাটার্ন সার্ভিসগুলোকে না থামিয়েই নিরবচ্ছিন্ন অর্ডার গ্রহণ এবং পরবর্তীতে ক্ষতিপূরণের মাধ্যমে সামঞ্জস্য রক্ষার সুযোগ দেয়।'
        }
      }
    ]
  }
};
