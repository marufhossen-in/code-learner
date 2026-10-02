import type { Lesson } from '../../../lib/types';

export const twoPhaseDuelLesson: Lesson = {
  slug: 'the-two-phase-duel',
  tech: 'distributed-systems',
  title: {
    en: 'Distributed Transactions — 2PC, 3PC, and the Saga Pattern',
    bn: 'বিতরণকৃত ট্রানজ্যাকশন: ২PC, ৩PC এবং সাগা প্যাটার্ন'
  },
  summary: {
    en: 'When a business workflow spans multiple independent databases or microservices, traditional single-node ACID atomicity breaks down. The Two-Phase Commit (2PC) protocol guarantees atomic consensus across distributed participants using Prepare and Commit phases, but introduces a fatal blocking vulnerability if the coordinator crashes while cohorts hold exclusive locks. Three-Phase Commit (3PC) alleviates blocking in crash-stop models but remains vulnerable to network partitions. To achieve high scalability and fault tolerance in modern microservice architectures, engineers adopt the Saga Pattern, decomposing atomic transactions into chains of local ACID transactions paired with explicit compensating actions.',
    bn: 'যখন কোনো ব্যবসায়িক প্রক্রিয়া একাধিক স্বাধীন ডেটাবেস বা মাইক্রোসার্ভিস জুড়ে কাজ করে, তখন চিরাচরিত একক মেশিনের ACID নীতি কার্যকর থাকে না। টু-ফেজ কমিট (2PC) প্রোটোকল প্রিপেয়ার এবং কমিট এই দুই ধাপের মাধ্যমে সবার মধ্যে সমন্বয় নিশ্চিত করে, তবে নোডগুলো লক ধরে থাকা অবস্থায় কোঅর্ডিনেটর ক্র্যাশ করলে সিস্টেমটি অনির্দিষ্টকালের জন্য ব্লক হয়ে যাওয়ার ঝুঁকিতে পড়ে। থ্রি-ফেজ কমিট (3PC) ক্র্যাশ-স্টপ মডেলে ব্লকিং সমস্যা কিছুটা কমালেও নেটওয়ার্ক পার্টিশনের মুখে ব্যর্থ হয়। আধুনিক মাইক্রোসার্ভিস আর্কিটেকচারে উচ্চ স্কেলেবিলিটি এবং স্থায়িত্ব নিশ্চিত করতে ইঞ্জিনিয়াররা সাগা প্যাটার্ন (Saga Pattern) ব্যবহার করেন, যা প্রতিটি পদক্ষেপের জন্য পরিপূরক ক্ষতিপূরণমূলক অ্যাকশন (Compensating Actions) যুক্ত করে।'
  },
  minutes: 29,
  nextLesson: {
    slug: 'distributed-systems-capstone',
    tech: 'distributed-systems',
    title: {
      en: 'Distributed Systems Capstone — Architecting Resilient Scale',
      bn: 'বিতরণকৃত সিস্টেম ক্যাপস্টোন: নির্ভরযোগ্য ক্লাউড আর্কিটেকচার'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'distributed-transactions-problem',
      text: {
        en: 'The Challenge of Distributed Atomicity Across Services',
        bn: 'সার্ভিসজুড়ে বিতরণকৃত অ্যাটোমিসিটির চ্যালেঞ্জ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build an online checkout system, an order must simultaneously debit customer money, reserve warehouse stock, and create a shipping manifest across three independent databases. If the warehouse database crashes after payment is collected, how do you prevent the customer from paying for missing inventory?',
        bn: 'যখন আপনি একটি অনলাইন চেকআউট সিস্টেম তৈরি করেন, তখন ৩টি স্বাধীন ডেটাবেসে একসাথে গ্রাহকের টাকা কাটা, গুদামের পণ্য সংরক্ষণ এবং শিপিং নিশ্চিত করতে হয়। টাকা কাটার পর যদি গুদামের ডেটাবেস ক্র্যাশ করে, তবে গ্রাহক যাতে পণ্য ছাড়া টাকা না হারান তা কীভাবে নিশ্চিত করবেন?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a single relational database, ACID transactions provide all-or-nothing atomicity using local write-ahead logging. But in a distributed system where separate databases live on different physical servers, coordinating this atomicity requires specialized distributed transaction protocols.',
        bn: 'একটি একক রিলেশনাল ডেটাবেসে ACID ট্রানজ্যাকশন স্থানীয় লগের মাধ্যমে সব-বা-কিছু-নয় অ্যাটোমিসিটি প্রদান করে। কিন্তু একটি বিতরণকৃত সিস্টেমে যেখানে পৃথক ডেটাবেসগুলো ভিন্ন ভিন্ন ফিজিক্যাল সার্ভারে থাকে, সেখানে এই সমন্বয় বজায় রাখতে বিশেষ প্রোটোকলের প্রয়োজন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'distributed-transaction',
          def: {
            en: 'A transaction executing across multiple physical databases requiring all-or-nothing atomic commitment.',
            bn: 'একাধিক স্বাধীন ডেটাবেসে পরিচালিত এমন একটি ট্রানজ্যাকশন যেখানে সবগুলোতে সফল হতে হবে নতুবা কোনোটিতেই পরিবর্তন হবে না।'
          }
        },
        {
          term: 'two-phase-commit',
          def: {
            en: 'A consensus protocol where a coordinator polls participants in Phase 1 (Prepare) and commands final commit/abort in Phase 2.',
            bn: 'একটি প্রোটোকল যেখানে কোঅর্ডিনেটর ১ম ধাপে (প্রিপেয়ার) সবার সম্মতি নেয় এবং ২য় ধাপে (কমিট) চূড়ান্ত নির্দেশ দেয়।'
          }
        },
        {
          term: 'blocking-vulnerability',
          def: {
            en: 'The architectural flaw in 2PC where participant nodes hold resource locks indefinitely if the coordinator fails during commit.',
            bn: '2PC এর একটি মারাত্মক দুর্বলতা যেখানে কমিটের সময় কোঅর্ডিনেটর ক্র্যাশ করলে অন্যান্য নোড লক ধরে রেখে চিরতরে আটকে থাকে।'
          }
        },
        {
          term: 'saga-pattern',
          def: {
            en: 'An architectural pattern coordinating a sequence of local transactions with automated compensating transactions to handle rollbacks.',
            bn: 'এমন একটি স্থাপত্য কাঠামো যা স্থানীয় ট্রানজ্যাকশনের একটি ধারাবাহিক শৃঙ্খল এবং ত্রুটির ক্ষেত্রে স্বয়ংক্রিয় ক্ষতিপূরণমূলক পদক্ষেপ পরিচালনা করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: '2pc-vs-sagas-table',
      text: {
        en: 'Transaction Protocol Comparison: 2PC vs Sagas',
        bn: 'ট্রানজ্যাকশন প্রোটোকলের তুলনা: ২PC বনাম সাগা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding the contrasting guarantees of 2PC and Sagas helps architects design systems that scale across microservice boundaries.',
        bn: '২PC এবং সাগার পার্থক্যের বৈশিষ্ট্যগুলো জানলে আর্কিটেক্টরা এমন সিস্টেম ডিজাইন করতে পারেন যা মাইক্রোসার্ভিসের সীমানা পেরিয়ে সফলভাবে কাজ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Dimension', bn: 'পরিমাপ / মাত্রা' },
        { en: 'Two-Phase Commit (2PC)', bn: 'টু-ফেজ কমিট (২PC)' },
        { en: 'Saga Pattern (Sagas)', bn: 'সাগা প্যাটার্ন (Sagas)' }
      ],
      rows: [
        [
          { en: 'Consistency Guarantee', bn: 'ধারাবাহিকতার নিশ্চয়তা' },
          { en: 'Strict ACID with immediate linearizability', bn: 'তাৎক্ষণিক লিনিয়ারাইজ্যাবিলিটি সহ কঠোর ACID' },
          { en: 'Eventual consistency with visible interim state', bn: 'সাময়িক মধ্যবর্তী অবস্থা সহ ইভেনচুয়াল ধারাবাহিকতা' }
        ],
        [
          { en: 'Resource Locking', bn: 'রিসোর্স লকিং' },
          { en: 'Holds exclusive database locks during both phases', bn: 'উভয় ধাপেই ডেটাবেসের এক্সক্লুসিভ লক ধরে রাখে' },
          { en: 'Zero distributed locks; commits local state immediately', bn: 'কোনো ডিস্ট্রিবিউটেড লক নেই; স্থানীয়ভাবে সাথে সাথে কমিট' }
        ],
        [
          { en: 'Rollback Mechanism', bn: 'রোলব্যাক কৌশল' },
          { en: 'Automatic database undo log rollback', bn: 'ডেটাবেসের আনডু লগের মাধ্যমে স্বয়ংক্রিয় রোলব্যাক' },
          { en: 'Explicit forward compensating actions (e.g. refunds)', bn: 'স্পষ্ট ক্ষতিপূরণমূলক পদক্ষেপ (যেমন রিফান্ড দেওয়া)' }
        ],
        [
          { en: 'Microservices Scalability', bn: 'মাইক্রোসার্ভিসের সক্ষমতা' },
          { en: 'Poor: high lock contention and coordinator bottleneck', bn: 'দুর্বল: লকিং ও সমন্বয়কারীর কারণে গতি কমে যায়' },
          { en: 'High: asynchronously decoupled microservices', bn: 'উচ্চ: বার্তা প্রেরণের মাধ্যমে স্বাধীন মাইক্রোসার্ভিস' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-saga-code',
      text: {
        en: 'Executable Saga Pattern Orchestrator Implementation',
        bn: 'সাগা প্যাটার্ন অর্কেস্ট্রেটর ও ক্ষতিপূরণমূলক পদক্ষেপের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an Orchestrated Saga. Step 1 charges customer payment successfully. When Step 2 fails because warehouse inventory is out of stock, the orchestrator automatically invokes Step 1’s compensating transaction to refund the payment.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি অর্কেস্ট্রেটেড সাগা বাস্তবায়ন করে। ধাপ ১ এ গ্রাহকের পেমেন্ট সফলভাবে কেটে নেওয়া হয়। ধাপ ২ এ গুদামে স্টক না থাকায় ব্যর্থ হলে, অর্কেস্ট্রেটর স্বয়ংক্রিয়ভাবে ধাপ ১ এর ক্ষতিপূরণমূলক অ্যাকশন ডেকে পেমেন্ট রিফান্ড করে দেয়।'
      }
    },
    {
      type: 'code',
      code: `class SagaOrchestrator {
  constructor() {
    this.steps = [];
  }

  addStep(name, execute, compensate) {
    this.steps.push({ name, execute, compensate });
  }

  async run() {
    const executed = [];
    for (const step of this.steps) {
      const success = step.execute();
      if (success) {
        executed.push(step);
      } else {
        // Step failed: compensate executed steps in reverse order
        for (let i = executed.length - 1; i >= 0; i--) {
          executed[i].compensate();
        }
        return { success: false, failedAt: step.name };
      }
    }
    return { success: true };
  }
}

const saga = new SagaOrchestrator();
let paymentCharged = false;
let inventoryReserved = false;

saga.addStep(
  'Payment',
  () => { paymentCharged = true; return true; },
  () => { paymentCharged = false; }
);

saga.addStep(
  'Inventory',
  () => { return false; }, // Simulate out-of-stock failure
  () => { inventoryReserved = false; }
);

saga.run().then(res => {
  console.log('Saga status:', res.success ? 'Success' : 'Rolled back');
  // Output: Saga status: Rolled back
  console.log('Payment refunded via compensation:', paymentCharged === false);
  // Output: Payment refunded via compensation: true
});`
    },
    {
      type: 'heading',
      id: 'choreography-vs-orchestration',
      text: {
        en: 'Saga Architectures: Choreography vs Orchestration',
        bn: 'সাগা কাঠামো: কোরিওগ্রাফি বনাম অর্কেস্ট্রেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Saga workflows are deployed in two styles. In Choreography, services communicate through decentralized event streams (e.g. Apache Kafka or RabbitMQ) where each service listens for events and publishes follow-ups. In Orchestration, a dedicated central state machine (such as Temporal or AWS Step Functions) coordinates all execution steps, simplifying monitoring and retry management.',
        bn: 'সাগা প্রক্রিয়া দুটি পদ্ধতিতে বাস্তবায়ন করা হয়। কোরিওগ্রাফিতে সার্ভিসগুলো বিকেন্দ্রীভূত ইভেন্ট স্ট্রিম (যেমন অ্যাপাচি কাফকা বা র্যাবিটএমকিউ) এর মাধ্যমে যোগাযোগ করে, যেখানে প্রতিটি সার্ভিস ইভেন্ট শুনে পরবর্তী কাজ করে। আর অর্কেস্ট্রেশনে একটি কেন্দ্রীয় স্টেট মেশিন (যেমন টেম্পোরাল বা এডব্লিউএস স্টেপ ফাংশন) সমস্ত পদক্ষেপের সমন্বয় ঘটায়, যা মনিটরিং এবং পুনরায় চেষ্টার প্রক্রিয়া সহজ করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Distributed ACID limits: 2PC guarantees atomicity across nodes but introduces severe coordinator blocking risks.',
          bn: 'ডিস্ট্রিবিউটেড ACID এর সীমা: ২PC নোডজুড়ে অ্যাটোমিসিটি নিশ্চিত করে কিন্তু কোঅর্ডিনেটরের ব্লকিং ঝুঁকি তৈরি করে।'
        },
        {
          en: 'Sagas eliminate locks: Sagas break workflows into local transactions, releasing locks immediately to maximize throughput.',
          bn: 'সাগা লকিং দূর করে: সাগা কাজগুলোকে স্থানীয় ট্রানজ্যাকশনে ভাগ করে দ্রুত লক মুক্ত করে থ্রুপুট বাড়িয়ে দেয়।'
        },
        {
          en: 'Compensating actions: Sagas achieve rollback through semantic compensations (e.g. refunds or cancellations).',
          bn: 'ক্ষতিপূরণমূলক অ্যাকশন: সাগায় কোনো ত্রুটি ঘটলে আগের পদক্ষেপগুলো ক্ষতিপূরণমূলক কাজের (যেমন রিফান্ড) মাধ্যমে বাতিল হয়।'
        },
        {
          en: 'Choreography vs Orchestration: Choreography suits simple event pub/sub, while Orchestration excels at complex workflows.',
          bn: 'কোরিওগ্রাফি বনাম অর্কেস্ট্রেশন: সাধারণ কাজের জন্য কোরিওগ্রাফি এবং জটিল ব্যবসায়িক প্রক্রিয়ার জন্য অর্কেস্ট্রেশন সেরা।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tpd-ex1',
      kind: 'mcq',
      topic: '2pc-blocking-vulnerability',
      question: {
        en: 'Why is Two-Phase Commit (2PC) considered a "blocking" protocol in distributed systems?',
        bn: 'বিতরণকৃত সিস্টেমে টু-ফেজ কমিটকে (২PC) কেন একটি "ব্লকিং" প্রোটোকল বলা হয়?'
      },
      options: [
        {
          en: 'If the coordinator crashes after participants vote YES but before sending COMMIT, participants must wait holding locks indefinitely',
          bn: 'অংশগ্রহণকারীরা হ্যাঁ ভোট দেওয়ার পর কোঅর্ডিনেটর কমিট পাঠানোর আগেই ক্র্যাশ করলে অন্য নোডগুলোকে অনির্দিষ্টকাল লক ধরে অপেক্ষা করতে হয়'
        },
        {
          en: 'Because it blocks all network traffic on port 80',
          bn: 'কারণ এটি পোর্ট ৮০ এর সমস্ত নেটওয়ার্ক ট্রাফিক ব্লক করে'
        },
        {
          en: 'Because participants are deleted after 2 minutes',
          bn: 'কারণ ২ মিনিট পর সমস্ত অংশগ্রহণকারী নোড মুছে যায়'
        },
        {
          en: 'Because database queries are executed in reverse order',
          bn: 'কারণ ডেটাবেস কুয়েরিগুলো উল্টো ক্রমে কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a participant unilaterally decide to abort or commit if it cannot reach the coordinator?',
        bn: 'কোঅর্ডিনেটরের সাথে যোগাযোগ না থাকলে কোনো অংশগ্রহণকারী নোড কি নিজে নিজে কমিট বা বাতিল করতে পারে?'
      },
      explanation: {
        en: 'Participants cannot unilaterally commit (the coordinator may have aborted) or abort (the coordinator may have committed), blocking indefinitely.',
        bn: 'অংশগ্রহণকারীরা নিজে একা কমিট বা বাতিল করতে পারে না, কারণ কোঅর্ডিনেটর অন্য সিদ্ধান্ত নিয়ে থাকতে পারে। ফলে তারা আটকে থাকে।'
      }
    },
    {
      id: 'tpd-ex2',
      kind: 'mcq',
      topic: 'saga-compensating-transaction',
      question: {
        en: 'In the Saga pattern, what is the role of a "Compensating Transaction"?',
        bn: 'সাগা প্যাটার্নে একটি "কম্পেনসেটিং ট্রানজ্যাকশন" (ক্ষতিপূরণমূলক পদক্ষেপ) এর ভূমিকা কী?'
      },
      options: [
        {
          en: 'To semantically undo the effects of a previously committed local transaction when a subsequent step in the saga fails',
          bn: 'সাগার পরবর্তী কোনো পদক্ষেপে ত্রুটি হলে পূর্বে সফল হওয়া স্থানীয় ট্রানজ্যাকশনের প্রভাবকে অর্থপূর্ণভাবে বাতিল বা আগের অবস্থায় ফিরিয়ে আনা'
        },
        {
          en: 'To double the amount of money in the customer’s bank account',
          bn: 'গ্রাহকের ব্যাংক অ্যাকাউন্টের টাকার পরিমাণ দ্বিগুণ করা'
        },
        {
          en: 'To encrypt database passwords with SHA-256',
          bn: 'ডেটাবেসের পাসওয়ার্ড SHA-256 দিয়ে এনক্রিপ্ট করা'
        },
        {
          en: 'To restart the server hardware automatically',
          bn: 'সার্ভার হার্ডওয়্যার স্বয়ংক্রিয়ভাবে রিস্টার্ট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'If charging a credit card succeeded, what compensating action undoes that charge?',
        bn: 'ক্রেডিট কার্ড থেকে টাকা কাটার পর তা আগের অবস্থায় ফেরাতে কোন ক্ষতিপূরণমূলক ব্যবস্থা নেওয়া হয়?'
      },
      explanation: {
        en: 'A compensating action applies the semantic inverse of an action, such as issuing a refund after an unauthorized payment.',
        bn: 'ক্ষতিপূরণমূলক পদক্ষেপ পূর্বের কাজের বিপরীত অ্যাকশন প্রয়োগ করে, যেমন টাকা কাটার বিপরীতে রিফান্ড প্রদান করা।'
      }
    },
    {
      id: 'tpd-ex3',
      kind: 'mcq',
      topic: 'saga-lack-of-isolation',
      question: {
        en: 'Which ACID property does the Saga pattern trade away in exchange for high availability and throughput?',
        bn: 'উচ্চ প্রাপ্যতা এবং গতির বিনিময়ে সাগা প্যাটার্ন ACID এর কোন বৈশিষ্ট্যটি শিথিল বা ত্যাগ করে?'
      },
      options: [
        {
          en: 'Isolation (I), because local transactions commit immediately and intermediate states are visible to other concurrent requests',
          bn: 'আইসোলেশন (I), কারণ স্থানীয় ট্রানজ্যাকশনগুলো সাথে সাথে কমিট হয় এবং মধ্যবর্তী অবস্থা অন্যান্য অনুরোধের কাছে দৃশ্যমান থাকে'
        },
        {
          en: 'Durability (D), data is lost on every restart',
          bn: 'স্থায়িত্ব (D), প্রতিটি রিস্টার্টে ডাটা মুছে যায়'
        },
        {
          en: 'Atomicity, sagas never roll back failed steps',
          bn: 'অ্যাটোমিসিটি, সাগা কখনো ব্যর্থ কাজ রোলব্যাক করে না'
        },
        {
          en: 'Consistency, databases stop using data types',
          bn: 'ধারাবাহিকতা, ডেটাবেস ডাটা টাইপ ব্যবহার বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Since locks are released after each local step, can another user see that inventory was reserved before the saga finished?',
        bn: 'প্রতিটি ধাপের পর লক মুক্ত হয়ে যাওয়ায় অন্য কেউ কি দেখতে পারে যে পণ্যটি সাময়িক বুক করা হয়েছে?'
      },
      explanation: {
        en: 'Sagas sacrifice database-level isolation. An interim state can be observed by concurrent clients before the full saga completes.',
        bn: 'সাগা ডেটাবেস স্তরের আইসোলেশন ত্যাগ করে, ফলে সাগা পুরো শেষ হওয়ার আগেই অন্যান্য ক্লায়েন্ট মধ্যবর্তী অবস্থা দেখতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'the-two-phase-duel-quiz',
    title: {
      en: 'Distributed Transactions and Sagas Quiz',
      bn: 'বিতরণকৃত ট্রানজ্যাকশন ও সাগা কুইজ'
    },
    questions: [
      {
        id: 'tpd-q1',
        kind: 'mcq',
        topic: 'orchestration-vs-choreography',
        question: {
          en: 'What is a major architectural advantage of Saga Orchestration over Saga Choreography in complex business workflows?',
          bn: 'জটিল ব্যবসায়িক প্রক্রিয়ার ক্ষেত্রে সাগা কোরিওগ্রাফির তুলনায় সাগা অর্কেস্ট্রেশনের প্রধান স্থাপত্যিক সুবিধা কী?'
        },
        options: [
          {
            en: 'A centralized state machine provides explicit visibility into workflow state, error handling, and prevents cyclical event spaghetti',
            bn: 'একটি কেন্দ্রীয় স্টেট মেশিন কাজের প্রতিটি ধাপ ও ত্রুটির স্পষ্ট মনিটরিং দেয় এবং জটিল ইভেন্টের জটলা রোধ করে'
          },
          {
            en: 'It reduces network bandwidth to exactly 0 bytes',
            bn: 'এটি নেটওয়ার্ক ব্যান্ডউইথ ঠিক ০ বাইটে নামিয়ে আনে'
          },
          {
            en: 'It eliminates the need for database backups',
            bn: 'এটি ডেটাবেস ব্যাকআপের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'Orchestration makes all services run on the same computer',
            bn: 'অর্কেস্ট্রেশন সমস্ত সার্ভিসকে একই কম্পিউটারে চালাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In choreography, tracking a transaction that touches 10 services requires inspecting 10 separate event topics.',
          bn: 'কোরিওগ্রাফিতে ১০টি সার্ভিসের ট্রানজ্যাকশন ট্র্যাক করতে ১০টি আলাদা ইভেন্ট দেখতে হয়।'
        },
        explanation: {
          en: 'Orchestrators centralize workflow coordination, making state inspection, retries, and compensation logic maintainable.',
          bn: 'অর্কেস্ট্রেটর কাজের সমস্ত সমন্বয় এক জায়গায় রাখে, ফলে মনিটরিং ও ক্ষতিপূরণমূলক পদক্ষেপ পরিচালনা সহজ হয়।'
        }
      },
      {
        id: 'tpd-q2',
        kind: 'mcq',
        topic: '2pc-phase1-voting',
        question: {
          en: 'During Phase 1 (Prepare) of a Two-Phase Commit, what commitment does a participant node make when it votes YES?',
          bn: 'টু-ফেজ কমিটের ১ম ধাপে (প্রিপেয়ার) কোনো অংশগ্রহণকারী নোড "হ্যাঁ" ভোট দিলে সে কী অঙ্গীকার করে?'
        },
        options: [
          {
            en: 'It promises that it has written undo/redo logs and acquired locks, guaranteeing it can commit if commanded, even after a crash',
            bn: 'সে অঙ্গীকার করে যে সে আনডু/রিডু লগ লিখেছে এবং লক নিয়েছে, ফলে নির্দেশ পেলে ক্র্যাশ করার পরও সে কমিট করতে সক্ষম হবে'
          },
          {
            en: 'It immediately sends the committed data to the client browser',
            bn: 'সে সাথে সাথে কমিট করা ডাটা ক্লায়েন্ট ব্রাউজারে পাঠিয়ে দেয়'
          },
          {
            en: 'It deletes all rows from the target table',
            bn: 'সে টার্গেট টেবিলের সমস্ত সারি মুছে ফেলে'
          },
          {
            en: 'It disconnects its network cable for 10 seconds',
            bn: 'সে ১০ সেকেন্ডের জন্য তার নেটওয়ার্ক তার বিচ্ছিন্ন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A YES vote is an irrevocable promise to commit upon receiving the coordinator’s command.',
          bn: 'একটি "হ্যাঁ" ভোট হলো কোঅর্ডিনেটরের নির্দেশ পাওয়ামাত্র কমিট করার একটি অপরিবর্তনীয় প্রতিশ্রুতি।'
        },
        explanation: {
          en: 'Voting YES guarantees that the node has persisted all log entries to disk and holds locks necessary to execute the commit.',
          bn: 'হ্যাঁ ভোট নিশ্চিত করে যে নোডটি সমস্ত লগ ডিস্কে সংরক্ষণ করেছে এবং কমিট করার জন্য প্রয়োজনীয় লক ধরে রেখেছে।'
        }
      },
      {
        id: 'tpd-q3',
        kind: 'mcq',
        topic: 'three-phase-commit-limitation',
        question: {
          en: 'Why is Three-Phase Commit (3PC) rarely deployed in real-world Internet and cloud production systems despite avoiding blocking under node crashes?',
          bn: 'নোড ক্র্যাশের সময় ব্লকিং এড়াতে সক্ষম হওয়া সত্ত্বেও বাস্তব ক্লাউড সিস্টেমে থ্রি-ফেজ কমিট (৩PC) কেন খুব কম ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'It only works under fail-stop models with synchronous clocks; under network partitions, it can still produce split-brain inconsistencies',
            bn: 'এটি কেবল সিঙ্ক্রোনাস ঘড়ি সহ ফেইল-স্টপ মডেলে কাজ করে; কিন্তু নেটওয়ার্ক পার্টিশন ঘটলে এটি অসঙ্গতি ও স্প্লিট-ব্রেইন তৈরি করতে পারে'
          },
          {
            en: 'It requires 300 servers to run even 1 simple query',
            bn: '১টি সাধারণ কুয়েরি চালাতেও এর ৩০০টি সার্ভার প্রয়োজন হয়'
          },
          {
            en: 'The source code of 3PC was deleted from the internet',
            bn: '৩PC এর সোর্স কোড ইন্টারনেট থেকে মুছে ফেলা হয়েছে'
          },
          {
            en: 'It cannot store numbers with decimal points',
            bn: 'এটি দশমিক সংখ্যা সংরক্ষণ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: '3PC assumes network delays have a known upper bound. Can cloud networks guarantee bounded message delays during partitions?',
          bn: '৩PC ধরে নেয় নেটওয়ার্কের সর্বোচ্চ বিলম্ব জানা আছে। ক্লাউড নেটওয়ার্ক কি পার্টিশনের সময় বিলম্বের নিশ্চয়তা দিতে পারে?'
        },
        explanation: {
          en: '3PC relies on synchronous timeout assumptions. If a network partition occurs, different partitions make contradictory commit/abort decisions.',
          bn: '৩PC নির্দিষ্ট টাইমআউটের ওপর নির্ভরশীল। নেটওয়ার্ক বিভাজন ঘটলে বিভিন্ন অংশ বিপরীতমুখী সিদ্ধান্ত নিয়ে ডাটা নষ্ট করতে পারে।'
        }
      },
      {
        id: 'tpd-q4',
        kind: 'mcq',
        topic: 'idempotent-compensations',
        question: {
          en: 'Why must compensating transactions in a Saga pattern be engineered to be strictly Idempotent?',
          bn: 'সাগা প্যাটার্নে ক্ষতিপূরণমূলক পদক্ষেপগুলোকে কেন কঠোরভাবে আইডেমপোটেন্ট (Idempotent) হিসেবে তৈরি করতে হয়?'
        },
        options: [
          {
            en: 'Because network retries may execute the compensation multiple times, and executing it repeatedly must produce the exact same outcome as once',
            bn: 'কারণ নেটওয়ার্কের কারণে ক্ষতিপূরণমূলক পদক্ষেপটি একাধিকবার চলতে পারে এবং বারবার চললেও যেন একবার চলার সমান ফলাফলই বজায় থাকে'
          },
          {
            en: 'To make the database queries execute 10 times faster',
            bn: 'ডেটাবেস কুয়েরি ১০ গুণ দ্রুত চালানোর জন্য'
          },
          {
            en: 'Because idempotent code uses 0 bytes of disk space',
            bn: 'কারণ আইডেমপোটেন্ট কোড ডিস্কে ০ বাইট জায়গা নেয়'
          },
          {
            en: 'To prevent users from opening multiple browser tabs',
            bn: 'ব্যবহারকারী যাতে একাধিক ব্রাউজার ট্যাব খুলতে না পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a refund call times out, the orchestrator retries. What happens if the refund function is not idempotent?',
          bn: 'একটি রিফান্ডের কল টাইমআউট হলে তা আবার চালানো হয়। রিফান্ড আইডেমপোটেন্ট না হলে গ্রাহকের অ্যাকাউন্টে কী হবে?'
        },
        explanation: {
          en: 'Idempotency ensures that retried compensation requests (e.g., refunding an order) do not erroneously execute duplicate side-effects.',
          bn: 'আইডেমপোটেন্সি নিশ্চিত করে যে পুনরায় চেষ্টা করা ক্ষতিপূরণমূলক অনুরোধ গ্রাহককে একাধিকবার অনাকাঙ্ক্ষিত রিফান্ড দিয়ে ক্ষতি করবে না।'
        }
      }
    ]
  }
};
