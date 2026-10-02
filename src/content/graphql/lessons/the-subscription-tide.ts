import type { Lesson } from '../../../lib/types';

export const subscriptionTideLesson: Lesson = {
  slug: 'the-subscription-tide',
  tech: 'graphql',
  title: {
    en: 'Real-Time GraphQL — Subscriptions, WebSockets & Server-Sent Events (SSE)',
    bn: 'রিয়েল-টাইম GraphQL — সাবস্ক্রিপশন, ওয়েবসকেট ও সার্ভার-সেন্ট ইভেন্টস (SSE)'
  },
  summary: {
    en: 'Real-time collaborative applications require servers to push updates instantaneously rather than waiting for client polling. GraphQL Subscriptions represent the graph third primary operation alongside queries and mutations. By establishing persistent network channels using modern WebSocket standards like graphql-ws or unidirectional Server-Sent Events (SSE), subscriptions stream structured graph payloads directly to subscribed clients. On the backend, scalable subscription architectures decouple socket connection state from domain events using distributed message brokers like Redis Pub/Sub. Proper event sequencing—emitting domain events strictly after database transactions commit—prevents ghost updates and guarantees eventual consistency across distributed nodes.',
    bn: 'রিয়েল-টাইম অ্যাপ্লিকেশনে ক্লায়েন্টের বারবার অনুরোধের অপেক্ষায় না থেকে সার্ভারের তাৎক্ষণিক নতুন ডেটা পাঠানো প্রয়োজন হয়। কোয়েরি ও মিউটেশনের পাশাপাশি GraphQL সাবস্ক্রিপশন হলো গ্রাফের তৃতীয় প্রধান অপারেশন। আধুনিক graphql-ws ওয়েবসকেট বা একমুখী সার্ভার-সেন্ট ইভেন্টস (SSE)-এর মাধ্যমে সার্বক্ষণিক নেটওয়ার্ক সংযোগ স্থাপন করে সাবস্ক্রিপশন ক্লায়েন্টের কাছে সরাসরি ডেটা পাঠায়। ব্যাকএন্ডে স্কেলেবল সাবস্ক্রিপশন আর্কিটেকচার রেডিস পাব/সাব-এর মতো মেসেজ ব্রোকার ব্যবহারের মাধ্যমে সকেট কানেকশন স্টেটকে মূল বিজনেস লজিক থেকে সম্পূর্ণ আলাদা রাখে। ডেটাবেজ ট্রানজ্যাকশন সফলভাবে শেষ হওয়ার পরই কেবল ইভেন্ট প্রকাশ করা নিশ্চিত করে যে কোনো ক্লায়েন্ট ভুল বা অসঙ্গতিপূর্ণ ডেটা পাবে না।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Event-Driven Real-Time GraphQL Streams',
        bn: 'মূল ধারণা: ইভেন্ট-চালিত রিয়েল-টাইম GraphQL স্ট্রিম'
      }
    },
    {
      type: 'visual',
      id: 'events-arch'
    },
    {
      type: 'para',
      text: {
        en: 'When you build interactive applications like live chat, financial tickers, or collaborative editors, polling an API repeatedly burns server CPU and battery life. GraphQL Subscriptions solve this by establishing an event-driven channel where the server pushes real-time data to clients whenever specific events occur. Powered by modern protocols like graphql-ws and Server-Sent Events, subscriptions stream structured graph updates directly into client caches without requiring continuous manual refetching.',
        bn: 'যখন আপনি লাইভ চ্যাট, শেয়ার বাজার ট্র্যাকার বা রিয়েল-টাইম এডিটর অ্যাপ্লিকেশন তৈরি করেন, তখন বারবার এপিআই পোল করলে সার্ভার সিপিইউ ও ডিভাইসের ব্যাটারি দ্রুত ফুরিয়ে যায়। GraphQL সাবস্ক্রিপশন একটি ইভেন্ট-ভিত্তিক চ্যানেল তৈরি করে এই সমস্যার চমৎকার সমাধান দেয়, যেখানে সার্ভার নির্দিষ্ট ঘটনা ঘটামাত্র ক্লায়েন্টের কাছে সরাসরি নতুন ডেটা পুশ করে। আধুনিক graphql-ws ওয়েবসকেট প্রোটোকল এবং সার্ভার-সেন্ট ইভেন্টস (SSE)-এর সাহায্যে সাবস্ক্রিপশন ম্যানুয়াল রিফেচিং ছাড়াই ক্লায়েন্ট ক্যাশে সরাসরি ডেটা পৌঁছে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Subscription Operation',
          def: {
            en: 'The third GraphQL root operation defining a persistent event listener that pushes execution results over an open stream',
            bn: 'তৃতীয় GraphQL রুট অপারেশন যা একটি সার্বক্ষণিক ইভেন্ট লিসেনার তৈরি করে ওপেন স্ট্রিম দিয়ে ডেটা পাঠায়'
          }
        },
        {
          term: 'Single Root Field Rule',
          def: {
            en: 'The GraphQL specification constraint dictating that a subscription operation must declare exactly one root field per document',
            bn: 'GraphQL স্পেসিফিকেশনের নিয়ম যা নির্দেশ করে একটি সাবস্ক্রিপশন অপারেশনে ঠিক একটিমাত্র রুট ফিল্ড থাকতে পারবে'
          }
        },
        {
          term: 'graphql-ws Protocol',
          def: {
            en: 'The modern subprotocol for GraphQL over WebSockets featuring keep-alive heartbeats and clean connection lifecycle management',
            bn: 'ওয়েবসকেটে GraphQL চালানোর আধুনিক প্রোটোকল যা কিপ-অ্যালাইভ হার্টবিট ও পরিষ্কার কানেকশন লাইফসাইকেল নিশ্চিত করে'
          }
        },
        {
          term: 'Distributed Pub/Sub Broker',
          def: {
            en: 'A message bus like Redis or NATS that broadcasts topic events across all clustered backend instances serving client sockets',
            bn: 'রেডিস বা ন্যাটের মতো মেসেজ বাস যা ক্লাস্টার করা সমস্ত ব্যাকএন্ড সার্ভারে ইভেন্ট বার্তা দ্রুত ছড়িয়ে দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'single-root-field',
      text: {
        en: 'The Single Root Field Constraint and Selection Sets',
        bn: 'একক রুট ফিল্ডের বাধ্যবাধকতা ও সিলেকশন সেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike GraphQL queries which permit bundling dozens of unrelated root queries in a single document, the GraphQL specification mandates that a subscription operation must contain exactly one root field. This single root field acts as the event topic binding. If a client needs updates for both incoming chat messages and user status changes, it must open two distinct subscription operations.',
        bn: 'GraphQL কোয়েরিতে একাধিক সম্পর্কহীন ফিল্ড একসাথে চাওয়ার অনুমতি থাকলেও সাবস্ক্রিপশনের ক্ষেত্রে স্পেসিফিকেশন নির্দেশ করে যে ঠিক একটিমাত্র রুট ফিল্ড থাকতে হবে। এই একক ফিল্ডটি মূলত ইভেন্ট টপিকের সাথে যুক্ত থাকে। কোনো অ্যাপ যদি চ্যাট মেসেজ এবং ইউজারের অনলাইন স্ট্যাটাস উভয়টির আপডেট চায়, তবে তাকে অবশ্যই দুটি পৃথক সাবস্ক্রিপশন খুলতে হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a backend event occurs, the server retrieves the event payload and passes it as the root object into the subscription field selection set. The GraphQL execution engine then resolves all requested child fields before transmitting the formatted response frame over the wire, giving clients complete control over response shape.',
        bn: 'যখন কোনো ব্যাকএন্ড ইভেন্ট ঘটে, সার্ভার সেই ইভেন্টের ডেটাকে রুট অবজেক্ট হিসেবে সাবস্ক্রিপশন সিলেকশন সেটে পাঠায়। ইঞ্জিন তখন সমস্ত চাইল্ড ফিল্ড সমাধান করে সুবিন্যস্ত রেসপন্স ফ্রেম ক্লায়েন্টের কাছে পাঠায়, ফলে ক্লায়েন্ট তার প্রয়োজনমতো ফিল্ড বেছে নিতে পারে।'
      }
    },
    {
      type: 'heading',
      id: 'transport-layer',
      text: {
        en: 'Transport Protocols: WebSockets (graphql-ws) vs Server-Sent Events',
        bn: 'ট্রান্সপোর্ট প্রোটোকল: ওয়েবসকেট (graphql-ws) বনাম সার্ভার-সেন্ট ইভেন্টস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For many years, applications relied on the legacy subscriptions-transport-ws library, which is now deprecated. Modern GraphQL applications standardise on graphql-ws. This library establishes a bidirectional WebSocket handshake with connection_init and connection_ack messages, followed by automated ping-pong heartbeats to keep firewall connections alive.',
        bn: 'বহু বছর ধরে অ্যাপগুলো পুরোনো subscriptions-transport-ws লাইব্রেরির ওপর নির্ভর করত, যা এখন পুরোপুরি অবসরে গেছে। আধুনিক অ্যাপ্লিকেশনগুলো graphql-ws ব্যবহার করে। এই লাইব্রেরি connection_init এবং connection_ack বার্তার মাধ্যমে হ্যান্ডশেক সম্পন্ন করে এবং ফায়ারওয়ালে সংযোগ চালু রাখতে অটোমেটিক পিং-পং হার্টবিট পাঠায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'As an alternative, GraphQL over Server-Sent Events (SSE) has gained widespread adoption. Because SSE operates over standard unidirectional HTTP/2 streams, it easily traverses corporate proxies and cloud firewalls without protocol upgrading. Furthermore, browser EventSource clients automatically reconnect and pass Last-Event-ID headers for seamless event recovery.',
        bn: 'বিকল্প হিসেবে সার্ভার-সেন্ট ইভেন্টস (SSE)-এর ওপর GraphQL চালানো ব্যাপক জনপ্রিয়তা পেয়েছে। যেহেতু এসএসই সাধারণ একমুখী এইচটিটিপি/২ স্ট্রিমের মাধ্যমে চলে, তাই এটি কোনো প্রোটোকল পরিবর্তন ছাড়াই কর্পোরেট প্রক্সি ও ফায়ারওয়াল সহজেই পার হতে পারে। তাছাড়া ব্রাউজারের EventSource সংযোগ বিচ্ছিন্ন হলে স্বয়ংক্রিয়ভাবে Last-Event-ID পাঠিয়ে আবার যুক্ত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'pubsub-architecture',
      text: {
        en: 'Scaling Subscriptions: In-Memory PubSub vs Distributed Redis',
        bn: 'সাবস্ক্রিপশন স্কেলিং: ইন-মেমোরি পাব/সাব বনাম ডিস্ট্রিবিউটেড রেডিস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In local development, tutorials often employ an in-memory PubSub instance from graphql-subscriptions. However, in-memory event buses cannot scale horizontally. If User A is connected to Node 1 and User B is connected to Node 2, an event emitted on Node 1 will never reach User B.',
        bn: 'লোকাল ডেভেলপমেন্টের জন্য সাধারণত ইন-মেমোরি PubSub ব্যবহার করা হয়। কিন্তু একাধিক সার্ভার ক্লাস্টারে এটি অচল হয়ে পড়ে। ইউজার এ যদি সার্ভার ১-এর সাথে যুক্ত থাকে এবং ইউজার বি যদি সার্ভার ২-এর সাথে যুক্ত থাকে, তবে ১ নম্বর সার্ভারে ঘটা কোনো ঘটনা ২ নম্বরে থাকা ইউজারের কাছে কখনই পৌঁছাবে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production architectures solve this with distributed message brokers like Redis Pub/Sub, Redis Streams, or Apache Kafka. When a mutation executes, it commits the database transaction first and then publishes the event to Redis. Every server node subscribes to the Redis channel and forwards the event to its own local WebSocket clients.',
        bn: 'প্রোডাকশন আর্কিটেকচার এই সমস্যা মেটাতে রেডিস পাব/সাব বা কাফকার মতো ডিস্ট্রিবিউটেড মেসেজ ব্রোকার ব্যবহার করে। কোনো মিউটেশন চললে প্রথমে ডেটাবেজে ট্রানজ্যাকশন সেভ হয় এবং এরপর রেডিসে ইভেন্ট প্রকাশ করা হয়। ক্লাস্টারের প্রতিটি সার্ভার রেডিস থেকে সেই বার্তা গ্রহণ করে যার যার লোকাল ওয়েবসকেট ক্লায়েন্টদের কাছে পৌঁছে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Real-Time Communication Transports',
        bn: 'কাঠামোগত তুলনা: রিয়েল-টাইম যোগাযোগের ট্রান্সপোর্ট'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Transport Protocol', bn: 'ট্রান্সপোর্ট প্রোটোকল' },
        { en: 'Directionality', bn: 'যোগাযোগের দিক' },
        { en: 'Firewall & Proxy Traversal', bn: 'ফায়ারওয়াল ও প্রক্সি অতিক্রম' },
        { en: 'Connection Reconnect Handling', bn: 'পুনঃসংযোগ ব্যবস্থাপনা' }
      ],
      rows: [
        [
          { en: 'WebSockets (graphql-ws)', bn: 'ওয়েবসকেট (graphql-ws)' },
          { en: 'Full-duplex bidirectional stream over single TCP socket', bn: 'একটিমাত্র টিসিপি সকেটে সম্পূর্ণ দ্বিমুখী ডেটা প্রবাহ' },
          { en: 'Requires 101 Switching Protocols; sometimes blocked', bn: '১০১ প্রোটোকল সুইচিং লাগে; ফায়ারওয়ালে কখনো বাধা পায়' },
          { en: 'Managed at application layer with ping-pong heartbeats', bn: 'অ্যাপ্লিকেশন লেয়ারে পিং-পং হার্টবিট দিয়ে পরিচালিত হয়' }
        ],
        [
          { en: 'Server-Sent Events (SSE)', bn: 'সার্ভার-সেন্ট ইভেন্টস (SSE)' },
          { en: 'Unidirectional push from server to client over HTTP', bn: 'এইচটিটিপির মাধ্যমে সার্ভার থেকে ক্লায়েন্টে একমুখী পুশ' },
          { en: 'Seamless; functions over ordinary HTTP/1.1 and HTTP/2', bn: 'নিখুঁত; সাধারণ এইচটিটিপি পোর্টে অনায়াসে কাজ করে' },
          { en: 'Native browser reconnection with Last-Event-ID headers', bn: 'Last-Event-ID সহ ব্রাউজারের নিজস্ব স্বয়ংক্রিয় পুনঃসংযোগ' }
        ],
        [
          { en: 'Periodic HTTP Polling', bn: 'নিয়মিত এইচটিটিপি পোলিং' },
          { en: 'Request-response cycle initiated exclusively by client', bn: 'শুধুমাত্র ক্লায়েন্টের পাঠানো রিকোয়েস্ট-রেসপন্স চক্র' },
          { en: 'Identical to standard REST web traffic', bn: 'সাধারণ ওয়েব ট্রাফিকের মতোই কোনো বাধার সম্মুখীন হয় না' },
          { en: 'Stateless; client timers simply trigger new GET requests', bn: 'স্টেটলেস; টাইমার শেষ হলে কেবল নতুন রিকোয়েস্ট পাঠানো হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Subscription Broker & Teardown',
        bn: 'বাস্তব কোড সিমুলেশন: সাবস্ক্রিপশন ব্রোকার ও টিয়ারডাউন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of GraphQL Subscriptions & PubSub Broker in Node.js
import { EventEmitter } from 'events';

class SubscriptionBroker {
  private bus = new EventEmitter();
  public activeConnections = 0;

  // Publisher emits event strictly after transactional commit
  publish(topic: string, payload: any) {
    this.bus.emit(topic, payload);
  }

  // Client subscribes with a topic listener callback
  subscribe(topic: string, onNext: (frame: any) => void) {
    this.activeConnections++;
    const listener = (payload: any) => {
      // Simulate GraphQL execution of selection set over event payload
      const responseFrame = {
        data: {
          orderUpdated: {
            id: payload.id,
            status: payload.status,
            amount: payload.amount
          }
        }
      };
      onNext(responseFrame);
    };

    this.bus.on(topic, listener);

    // Return unsubscription teardown function
    return () => {
      this.bus.off(topic, listener);
      this.activeConnections--;
    };
  }
}

const broker = new SubscriptionBroker();
const topicName = 'ORDER_STATUS_42';
const receivedFrames: any[] = [];

// 1. Client opens subscription
const unsubscribe = broker.subscribe(topicName, (frame) => {
  receivedFrames.push(frame);
});

console.log('Active subscription connections:', broker.activeConnections);
// -> Active subscription connections: 1

// 2. Server publishes Event 1: Payment Confirmed (Amount 150)
broker.publish(topicName, { id: '42', status: 'CONFIRMED', amount: 150 });

// 3. Server publishes Event 2: Order Shipped (Amount 150)
broker.publish(topicName, { id: '42', status: 'SHIPPED', amount: 150 });

// 4. Client tears down subscription wire
unsubscribe();

// 5. Server publishes Event 3: Order Delivered (Client wire closed)
broker.publish(topicName, { id: '42', status: 'DELIVERED', amount: 150 });

console.log('Total frames received by subscriber:', receivedFrames.length);
// -> Total frames received by subscriber: 2
console.log('First event status:', receivedFrames[0].data.orderUpdated.status);
// -> First event status: CONFIRMED
console.log('Second event status:', receivedFrames[1].data.orderUpdated.status);
// -> Second event status: SHIPPED
console.log('Active connections after teardown:', broker.activeConnections);
// -> Active connections after teardown: 0`,
      caption: {
        en: 'Simulation: 1 active connection receives 2 events for order 42 with amount 150; tears down to 0 connections',
        bn: 'সিমুলেশন: ১ টি সক্রিয় সংযোগ অর্ডার ৪২ এর জন্য ১৫০ টাকার ২ টি ইভেন্ট পায়; সংযোগ কেটে দিলে ০ টি সংযোগে ফিরে আসে'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always emit domain events after database transaction commits. Emitting events inside an uncommitted transaction causes subscribers to query ghost records that roll back on failure.',
        bn: 'নিয়ম ১: ডেটাবেজ ট্রানজ্যাকশন সফলভাবে কমিট হওয়ার পরই কেবল ইভেন্ট প্রকাশ করুন। ট্রানজ্যাকশন শেষ হওয়ার আগে ইভেন্ট পাঠালে ক্লায়েন্ট এমন ভুয়া রেকর্ড দেখতে পারে যা ডেটাবেজে কখনো সেভই হয়নি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Migrate away from subscriptions-transport-ws to graphql-ws. The legacy protocol is unmaintained and susceptible to silent connection deadlocks across corporate proxy firewalls.',
        bn: 'নিয়ম ২: পুরোনো subscriptions-transport-ws পরিহার করে আধুনিক graphql-ws ব্যবহার করুন। পুরোনো লাইব্রেরিটি অনেক আগেই পরিত্যক্ত হয়েছে এবং প্রক্সি ফায়ারওয়ালে প্রায়শই নিঃশব্দে সংযোগ বিচ্ছিন্ন করে ফেলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use distributed Redis Pub/Sub in multi-server clusters. Never rely on default in-memory EventEmitter pubsub instances in production as they cannot share events across clustered server nodes.',
        bn: 'নিয়ম ৩: মাল্টি-সার্ভার ক্লাস্টারে ডিস্ট্রিবিউটেড রেডিস পাব/সাব ব্যবহার করুন। প্রোডাকশনে ভুলেও ইন-মেমোরি ইভেন্ট বাস রাখবেন না, কারণ তা এক সার্ভার থেকে অন্য সার্ভারে বার্তা পাঠাতে পারে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Implement heartbeat pings to detect half-open sockets. Periodically sending ping frames ensures that dead client connections are evicted promptly to prevent server memory bloat.',
        bn: 'নিয়ম ৪: সংযোগ সতেজ রাখতে নিয়মিত হার্টবিট পিং চালু রাখুন। নির্দিষ্ট সময় পরপর পিং ফ্রেম পাঠালে মৃত ক্লায়েন্ট সংযোগগুলো দ্রুত চিহ্নিত করে মেমোরি থেকে মুছে ফেলা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-sub-ex1',
      kind: 'mcq',
      topic: 'Single root field constraint in subscriptions',
      question: {
        en: 'Why does the GraphQL specification strictly mandate that a subscription operation have only one root field?',
        bn: 'GraphQL স্পেসিফিকেশন কেন কঠোরভাবে নির্দেশ করে যে একটি সাবস্ক্রিপশন অপারেশনে ঠিক একটিমাত্র রুট ফিল্ড থাকতে হবে?'
      },
      options: [
        {
          en: 'Because a subscription represents an individual event stream tied to a specific topic; allowing multiple root fields would create ambiguous event delivery semantics',
          bn: 'কারণ একটি সাবস্ক্রিপশন একটি নির্দিষ্ট টপিকের সাথে যুক্ত ইভেন্ট স্ট্রিমকে নির্দেশ করে; একাধিক রুট ফিল্ড থাকলে ইভেন্ট পৌঁছানোর নিয়মাবলি জটিল ও অস্পষ্ট হয়ে পড়বে'
        },
        {
          en: 'Because network cables can only transmit one character of text per second',
          bn: 'কারণ নেটওয়ার্কের তার প্রতি সেকেন্ডে কেবল একটি অক্ষর ডেটা পাঠাতে পারে'
        },
        {
          en: 'To prevent clients from reading JSON data inside web browsers',
          bn: 'যাতে ক্লায়েন্ট ব্রাউজারের ভেতরে জেএসন ডেটা পড়তে না পারে'
        },
        {
          en: 'Because server hard drives crash if a document contains more than 1 field',
          bn: 'কারণ ডকুমেন্টে ১ টির বেশি ফিল্ড থাকলে সার্ভারের হার্ডডিস্ক নষ্ট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A subscription is an event listener mapped to a single real-time stream topic.',
        bn: 'সাবস্ক্রিপশন হলো একটি একক রিয়েল-টাইম স্ট্রিম টপিকের সাথে যুক্ত ইভেন্ট লিসেনার।'
      },
      explanation: {
        en: 'Unlike queries which resolve once across multiple trees, subscriptions push events continuously. Restricting to one root field ensures clean 1-to-1 event stream semantics.',
        bn: 'কোয়েরি একবারে সম্পন্ন হলেও সাবস্ক্রিপশন সার্বক্ষণিক চলতে থাকে। তাই একটিমাত্র রুট ফিল্ড রাখলে প্রতিটি স্ট্রিমের দায়িত্ব ও নিয়ম পরিষ্কার থাকে।'
      }
    },
    {
      id: 'gql-sub-ex2',
      kind: 'mcq',
      topic: 'Database transaction timing for event publishing',
      question: {
        en: 'What dangerous defect occurs if a GraphQL server publishes a subscription event before the database transaction commits?',
        bn: 'ডেটাবেজ ট্রানজ্যাকশন কমিট হওয়ার আগেই কোনো GraphQL সার্ভার সাবস্ক্রিপশন ইভেন্ট প্রকাশ করলে কী মারাত্মক ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'Subscribers may receive notifications for ghost data that fails database constraints and rolls back, leading to permanent state inconsistencies',
          bn: 'গ্রাহকরা এমন ভুয়া তথ্যের নোটিফিকেশন পেয়ে যেতে পারে যা ডেটাবেজ কনস্ট্রেইন্টে ব্যর্থ হয়ে বাতিল বা রোলব্যাক হয়ে গেছে, ফলে তথ্যের অমিল তৈরি হয়'
        },
        {
          en: 'The server operating system automatically uninstalls the Node runtime',
          bn: 'সার্ভারের অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে নোড রানটাইম আনইনস্টল করে ফেলে'
        },
        {
          en: 'All client devices run out of battery in 3 seconds',
          bn: 'সমস্ত ক্লায়েন্ট ডিভাইসের ব্যাটারি ৩ সেকেন্ডে শেষ হয়ে যায়'
        },
        {
          en: 'The GraphQL schema file is permanently deleted from disk',
          bn: 'GraphQL স্কিমা ফাইলটি ডিস্ক থেকে চিরতরে মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a transaction rolls back after an event was already sent to users, what happens?',
        bn: 'ইভেন্ট পাঠানোর পর যদি ট্রানজ্যাকশন রোলব্যাক হয়ে যায়, তবে ব্যবহারকারী কী দেখতে পাবে?'
      },
      explanation: {
        en: 'If an event is published before the database commits and the commit then fails, clients receive notifications for state changes that never actually persisted in the database.',
        bn: 'কমিট হওয়ার আগে ইভেন্ট পাঠালে এবং পরে ডেটাবেজে ত্রুটির কারণে কমিট ব্যর্থ হলে, ক্লায়েন্টরা এমন তথ্যের নোটিফিকেশন পেয়ে যায় যা আসলে সেভই হয়নি।'
      }
    },
    {
      id: 'gql-sub-ex3',
      kind: 'mcq',
      topic: 'graphql-ws vs subscriptions-transport-ws',
      question: {
        en: 'Why should production GraphQL applications migrate from subscriptions-transport-ws to graphql-ws?',
        bn: 'প্রোডাকশন GraphQL অ্যাপ্লিকেশনে কেন subscriptions-transport-ws পরিহার করে graphql-ws ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'subscriptions-transport-ws is unmaintained and deprecated, whereas graphql-ws implements the modern GraphQL WebSocket specification with active heartbeats and robust connection handling',
          bn: 'subscriptions-transport-ws বহু আগে পরিত্যক্ত ও অবলুপ্ত হয়েছে, অপরদিকে graphql-ws আধুনিক স্পেসিফিকেশন, কার্যকর হার্টবিট ও চমৎকার সংযোগ নিরাপত্তা নিশ্চিত করে'
        },
        {
          en: 'graphql-ws eliminates the need for computer monitors in web development',
          bn: 'graphql-ws ওয়েব ডেভেলপমেন্টে কম্পিউটার মনিটরের প্রয়োজনীয়তা দূর করে দেয়'
        },
        {
          en: 'subscriptions-transport-ws is illegal under international maritime law',
          bn: 'আন্তর্জাতিক সমুদ্র আইনে subscriptions-transport-ws ব্যবহার বেআইনি'
        },
        {
          en: 'Because graphql-ws only works with Python programming code',
          bn: 'কারণ graphql-ws কেবল পাইথন প্রোগ্রামিং কোডের সাথেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'graphql-ws is the official modern protocol for GraphQL over WebSockets.',
        bn: 'graphql-ws হলো ওয়েবসকেটে GraphQL চালানোর বর্তমান অফিশিয়াল ও আধুনিক প্রোটোকল।'
      },
      explanation: {
        en: 'The older library suffers from unhandled disconnection states and memory leaks. The modern graphql-ws protocol standardises heartbeats and error termination.',
        bn: 'পুরোনো লাইব্রেরিতে সংযোগ বিচ্ছিন্নজনিত জটিলতা ও মেমোরি লিকের সমস্যা ছিল। আধুনিক graphql-ws প্রোটোকল হার্টবিট ও নিরাপদ এরর হ্যান্ডলিং নিশ্চিত করে।'
      }
    },
    {
      id: 'gql-sub-ex4',
      kind: 'mcq',
      topic: 'Server-Sent Events advantages for GraphQL',
      question: {
        en: 'What architectural advantage does Server-Sent Events (SSE) offer over WebSockets for GraphQL subscriptions?',
        bn: 'GraphQL সাবস্ক্রিপশনের ক্ষেত্রে ওয়েবসকেটের তুলনায় সার্ভার-সেন্ট ইভেন্টস (SSE) কী কাঠামোগত সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'SSE uses standard HTTP/1.1 or HTTP/2 streaming, traversing corporate firewalls and load balancers smoothly without requiring protocol upgrade handshakes',
          bn: 'এসএসই সাধারণ এইচটিটিপি/১.১ বা এইচটিটিপি/২ স্ট্রিমিং ব্যবহার করে, যা কোনো প্রোটোকল আপগ্রেড ছাড়াই ফায়ারওয়াল ও লোড ব্যালেন্সার অতিক্রম করতে পারে'
        },
        {
          en: 'SSE allows servers to run without any electricity',
          bn: 'এসএসই সার্ভারকে কোনো বিদ্যুৎ ছাড়াই চলতে সাহায্য করে'
        },
        {
          en: 'SSE guarantees that client Wi-Fi speeds increase tenfold',
          bn: 'এসএসই ক্লায়েন্টের ওয়াই-ফাই স্পিড দশগুণ বাড়িয়ে দেওয়ার গ্যারান্টি দেয়'
        },
        {
          en: 'SSE converts all relational databases into flat text files',
          bn: 'এসএসই সমস্ত রিলেশনাল ডেটাবেজকে সাধারণ টেক্সট ফাইলে পরিণত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard HTTP streaming bypasses WebSocket upgrade restrictions.',
        bn: 'সাধারণ এইচটিটিপি স্ট্রিমিং ওয়েবসকেট আপগ্রেডের জটিলতা এড়িয়ে চলে।'
      },
      explanation: {
        en: 'Because SSE runs over plain HTTP, it does not require the HTTP 101 protocol upgrade that some corporate proxies and security gateways block.',
        bn: 'যেহেতু এসএসই সাধারণ এইচটিটিপিতে চলে, তাই এতে ১০১ প্রোটোকল আপগ্রেড লাগে না যা অনেক সময় কর্পোরেট ফায়ারওয়ালে আটকে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-subscription-tide-quiz',
    title: {
      en: 'Real-Time GraphQL & Subscriptions Quiz',
      bn: 'রিয়েল-টাইম GraphQL ও সাবস্ক্রিপশন কুইজ'
    },
    questions: [
      {
        id: 'q-scaling-pubsub-redis',
        kind: 'mcq',
        topic: 'Clustered subscription architecture with Redis Pub/Sub',
        question: {
          en: 'Why is an external message broker like Redis Pub/Sub necessary when scaling GraphQL subscription servers horizontally across multiple Kubernetes pods?',
          bn: 'একাধিক কুবারনেটিস পডে GraphQL সাবস্ক্রিপশন সার্ভার স্কেল করার সময় রেডিস পাব/সাব-এর মতো এক্সটার্নাল মেসেজ ব্রোকার কেন প্রয়োজন?'
        },
        options: [
          {
            en: 'Pod instances maintain isolated local WebSocket connections; Redis acts as the central distributed message bus broadcasting events to all pods so connected clients receive their updates',
            bn: 'প্রতিটি পড তার নিজস্ব ওয়েবসকেট সংযোগ নিয়ন্ত্রণ করে; রেডিস একটি কেন্দ্রীয় মেসেজ বাস হিসেবে সমস্ত পডে ইভেন্ট ছড়িয়ে দেয় যাতে যেকোনো পডে থাকা ক্লায়েন্ট আপডেট পায়'
          },
          {
            en: 'Redis compiles JavaScript code into native machine assembly code',
            bn: 'রেডিস জাভাস্ক্রিপ্ট কোডকে মেশিনের নেটিভ অ্যাসেম্বলি কোডে রূপান্তর করে'
          },
          {
            en: 'Kubernetes does not permit any pod to communicate using TCP sockets',
            bn: 'কুবারনেটিস কোনো পডকে টিসিপি সকেট ব্যবহার করে যোগাযোগ করতে দেয় না'
          },
          {
            en: 'To encrypt WebSocket text frames with quantum keys',
            bn: 'ওয়েবসকেটের টেক্সট ফ্রেমগুলোকে কোয়ান্টাম কি দিয়ে এনক্রিপ্ট করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Clients are distributed across different server instances.',
          bn: 'ক্লায়েন্টরা ভিন্ন ভিন্ন সার্ভার পডের সাথে যুক্ত থাকে।'
        },
        explanation: {
          en: 'Without a shared message broker, an event triggered on Pod A cannot notify subscribers connected to Pod B. Redis ensures global event distribution across all cluster nodes.',
          bn: 'শেয়ার্ড মেসেজ ব্রোকার না থাকলে পড এ-তে ঘটা কোনো ঘটনার কথা পড বি জানতে পারবে না। রেডিস পুরো ক্লাস্টারের সমস্ত নোডে ইভেন্ট পৌঁছে দেয়।'
        }
      },
      {
        id: 'q-half-open-sockets-heartbeat',
        kind: 'mcq',
        topic: 'Detecting dead connections with keep-alive ping frames',
        question: {
          en: 'What problem occurs when a mobile client enters an elevator or tunnel without cleanly closing its WebSocket connection?',
          bn: 'কোনো মোবাইল ক্লায়েন্ট যদি ওয়েবসকেট সংযোগ সঠিকভাবে বন্ধ না করেই লিফট বা টানেলে ঢুকে পড়ে তবে সার্ভারে কী সমস্যা হয়?'
        },
        options: [
          {
            en: 'The server holds a "half-open" TCP socket in memory, continuing to push events and wasting RAM until a heartbeat ping timeout forcefully terminates the dead socket',
            bn: 'সার্ভার মেমোরিতে একটি অর্ধ-উন্মুক্ত টিসিপি সকেট ধরে রাখে এবং র্যাম নষ্ট করে ইভেন্ট পাঠাতে থাকে, যতক্ষণ না হার্টবিট পিং টাইমআউট সকেটটি জোরপূর্বক বন্ধ করে দেয়'
          },
          {
            en: 'The client phone immediately overheats and shuts down',
            bn: 'ক্লায়েন্টের মোবাইল ফোন সাথে সাথে অতিরিক্ত গরম হয়ে বন্ধ হয়ে যায়'
          },
          {
            en: 'The entire database drops all historical user records',
            bn: 'পুরো ডেটাবেজ থেকে সমস্ত ব্যবহারকারীর পুরোনো রেকর্ড মুছে যায়'
          },
          {
            en: 'The cellular network provider cancels the user subscription',
            bn: 'মোবাইল নেটওয়ার্ক কোম্পানি ব্যবহারকারীর সংযোগ বাতিল করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without heartbeats, ungraceful disconnections leave zombie sockets alive.',
          bn: 'হার্টবিট না থাকলে হঠাৎ সংযোগ বিচ্ছিন্ন হলেও সার্ভার সকেটটিকে জীবিত মনে করে রাখে।'
        },
        explanation: {
          en: 'Ungraceful disconnects leave sockets open on the server. Regular heartbeat ping frames detect unresponsive clients and clean up resources.',
          bn: 'হঠাৎ বিচ্ছিন্ন হওয়া সংযোগ সার্ভারে ঝুলে থাকে। নিয়মিত হার্টবিট পিং পাঠালে অনুত্তরিত ক্লায়েন্ট শনাক্ত করে সকেট বন্ধ করা যায়।'
        }
      },
      {
        id: 'q-last-event-id-recovery',
        kind: 'mcq',
        topic: 'Gap recovery using event cursors and Last-Event-ID',
        question: {
          en: 'How do production real-time architectures recover events missed by clients during intermittent network disconnections?',
          bn: 'সাময়িক নেটওয়ার্ক বিচ্ছিন্নতার সময় ক্লায়েন্টের মিস করা ইভেন্টগুলো প্রোডাকশন রিয়েল-টাইম আর্কিটেকচার কীভাবে উদ্ধার করে?'
        },
        options: [
          {
            en: 'By including a monotonically increasing event cursor or ID, allowing reconnecting clients to request missed events starting from their Last-Event-ID',
            bn: 'ধারাবাহিক ইভেন্ট কার্সার বা আইডি অন্তর্ভুক্ত করে, যার ফলে পুনরায় যুক্ত হওয়া ক্লায়েন্ট তাদের Last-Event-ID থেকে পরবর্তী মিস হওয়া ইভেন্ট চেয়ে নিতে পারে'
          },
          {
            en: 'By deleting the client user account and requiring a new sign-up',
            bn: 'ক্লায়েন্টের অ্যাকাউন্ট পুরোপুরি মুছে দিয়ে নতুন করে সাইন-আপ করতে বাধ্য করে'
          },
          {
            en: 'By rebooting the central cloud data center every 10 minutes',
            bn: 'প্রতি ১০ মিনিট পরপর কেন্দ্রীয় ক্লাউড ডেটা সেন্টার রিস্টার্ট করে'
          },
          {
            en: 'By forcing the user to retype their password for each missed event',
            bn: 'প্রতিটি মিস হওয়া ইভেন্টের জন্য ব্যবহারকারীকে আবার পাসওয়ার্ড দিতে বলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Event streams with sequential IDs let clients resume from where they left off.',
          bn: 'ধারাবাহিক আইডি সম্বলিত ইভেন্ট স্ট্রিম যেখান থেকে সংযোগ কেটেছিল সেখান থেকে পুনরায় শুরু করতে দেয়।'
        },
        explanation: {
          en: 'Event cursors ensure zero message loss. When reconnecting, the client passes its last received event ID, allowing the backend to replay missed events.',
          bn: 'ইভেন্ট কার্সার নিশ্চিত করে কোনো বার্তা যেন না হারায়। পুনঃসংযোগের সময় ক্লায়েন্ট তার শেষ পাওয়া আইডি পাঠালে সার্ভার মিস হওয়া ইভেন্টগুলো পুনরায় পাঠিয়ে দেয়।'
        }
      },
      {
        id: 'q-polling-vs-subscriptions-economics',
        kind: 'mcq',
        topic: 'Deciding between short polling and persistent subscriptions',
        question: {
          en: 'When is HTTP polling preferred over maintaining persistent WebSocket subscriptions in production?',
          bn: 'প্রোডাকশনে সার্বক্ষণিক ওয়েবসকেট সাবস্ক্রিপশন রাখার চেয়ে কখন সাধারণ এইচটিটিপি পোলিং অধিক উপযোগী?'
        },
        options: [
          {
            en: 'When updates happen infrequently (e.g. once every few hours) or when millions of passive users only need occasional updates without paying persistent connection memory overhead',
            bn: 'যখন আপডেট খুব কম ঘটে (যেমন কয়েক ঘণ্টায় একবার) অথবা যখন লক্ষ লক্ষ দর্শকের জন্য সার্বক্ষণিক সকেট মেমোরির খরচ না করে মাঝে মাঝে আপডেট দেখালেই চলে'
          },
          {
            en: 'Only when the server is operating on Windows 95',
            bn: 'কেবল তখনই যখন সার্ভারটি উইন্ডোজ ৯৫ অপারেটিং সিস্টেমে চলছে'
          },
          {
            en: 'When the application does not have a registered domain name',
            bn: 'যখন অ্যাপ্লিকেশনের কোনো নিবন্ধিত ডোমেন নাম থাকে না'
          },
          {
            en: 'Because WebSockets can only transmit images and never text',
            bn: 'কারণ ওয়েবসকেট কেবল ছবি পাঠাতে পারে কিন্তু টেক্সট পাঠাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the server memory cost of holding millions of open socket connections.',
          bn: 'লক্ষ লক্ষ সার্বক্ষণিক ওপেন সকেট ধরে রাখার সার্ভার মেমোরি খরচের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'Holding millions of idle WebSocket connections consumes heavy server RAM. For low-frequency updates, simple HTTP polling with cache headers is far more cost-effective.',
          bn: 'লক্ষ লক্ষ নিষ্ক্রিয় ওয়েবসকেট সকেট ধরে রাখলে সার্ভারের প্রচুর র্যাম খরচ হয়। কম কম্পাঙ্কের আপডেটের জন্য ক্যাশ হেডারসহ সাধারণ এইচটিটিপি পোলিং অনেক বেশি সাশ্রয়ী।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-federation-court',
    title: {
      en: 'Apollo Federation & Subgraphs — Gateway Routers, Entity Keys & Distributed Graphs',
      bn: 'অ্যাপোলো ফেডারেশন ও সাবগ্রাফ — গেটওয়ে রাউটার, এনটিটি কি ও ডিস্ট্রিবিউটেড গ্রাফ'
    }
  }
};
