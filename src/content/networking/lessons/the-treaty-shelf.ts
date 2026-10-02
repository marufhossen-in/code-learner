import type { Lesson } from '../../../lib/types';

export const theTreatyShelfLesson: Lesson = {
  slug: 'the-treaty-shelf',
  tech: 'networking',
  title: {
    en: 'Protocol Contracts — HTTP Semantics, WebSockets, SSE, and gRPC',
    bn: 'প্রোটোকল চুক্তি: এইচটিটিপি সেমান্টিকস, ওয়েবসকেট, এসএসই এবং জিআরপিসি'
  },
  summary: {
    en: 'Modern web architectures rely on strict protocol contracts to coordinate communication between clients and distributed servers. This lesson breaks down the full spectrum of networking contracts: HTTP verb semantics (safe, idempotent, and cacheable operations), status code families, and header negotiation rules. We then evaluate real-time and streaming protocols side by side: HTTP/2 binary multiplexing, HTTP/3 QUIC streams, full-duplex WebSockets for bi-directional interactions, Server-Sent Events (SSE) for unidirectional push streams, and high-performance gRPC with Protocol Buffers for internal microservices.',
    bn: 'আধুনিক ওয়েব আর্কিটেকচার ক্লায়েন্ট এবং ডিস্ট্রিবিউটেড সার্ভারের মধ্যে সমন্বয়ের জন্য সুস্পষ্ট প্রোটোকল চুক্তির ওপর নির্ভর করে। এই পাঠে নেটওয়ার্কিং চুক্তির সম্পূর্ণ ক্ষেত্রটি বিস্তারিতভাবে উন্মোচন করা হয়েছে: এইচটিটিপি মেথড সেমান্টিকস (নিরাপদ, আইডেমপোটেন্ট ও ক্যাশযোগ্য অপারেশন), স্ট্যাটাস কোড পরিবার এবং হেডার আলোচনা। পাশাপাশি রিয়েল-টাইম এবং স্ট্রিমিং প্রোটোকলগুলোর তুলনামূলক বিশ্লেষণ করা হয়েছে: এইচটিটিপি/২ বাইনারি মাল্টিপ্লেক্সিং, এইচটিটিপি/৩ কুইক (QUIC) স্ট্রিম, দ্বি-মুখী যোগাযোগের জন্য ফুল-ডুপ্লেক্স ওয়েবসকেট, একমুখী পুশ স্ট্রিমের জন্য সার্ভার-সেন্ট ইভেন্টস (SSE), এবং অভ্যন্তরীণ মাইক্রোসার্ভিসের উচ্চগতির জন্য প্রোটোকল বাফারসমৃদ্ধ জিআরপিসি।'
  },
  minutes: 30,
  nextLesson: {
    slug: 'the-incident-watchtower',
    tech: 'networking',
    title: {
      en: 'The Incident Watchtower — Observability, Metrics, and Network Diagnostics',
      bn: 'ইনসিডেন্ট ওয়াচটাওয়ার: অবজার্ভেবিলিটি, মেট্রিক্স ও নেটওয়ার্ক ডায়াগনস্টিকস'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'http-semantics-and-contracts',
      text: {
        en: 'HTTP Method Semantics: Safe, Idempotent, and Cacheable',
        bn: 'এইচটিটিপি মেথড সেমান্টিকস: নিরাপদ, আইডেমপোটেন্ট ও ক্যাশযোগ্য'
      }
    },
    {
      type: 'para',
      text: {
        en: "Every communication contract in web networking begins with clear method semantics defining safety and idempotency. Safe methods (such as 'GET' and 'HEAD') retrieve representations without altering server resource state, allowing intermediate proxies and browser caches to store responses freely.",
        bn: "ওয়েব নেটওয়ার্কিংয়ের প্রতিটি যোগাযোগ চুক্তি মেথড সেমান্টিকস দ্বারা সংজ্ঞায়িত নিরাপত্তা ও আইডেমপোটেন্সির ওপর ভিত্তি করে প্রতিষ্ঠিত। নিরাপদ মেথড (যেমন 'GET' এবং 'HEAD') সার্ভারের ডাটা পরিবর্তন না করে তথ্য সংগ্রহ করে, যার ফলে মধ্যবর্তী প্রক্সি ও ব্রাউজার ক্যাশ কোনো বাধা ছাড়াই ডাটা জমা রাখতে পারে।"
      }
    },
    {
      type: 'para',
      text: {
        en: 'Idempotent methods (PUT, DELETE, and safe methods) guarantee that making identical requests 1 time or 10 times produces the exact same server resource state. Non-idempotent operations (POST and PATCH) can create duplicate resources or side-effects if retried blindly. Distributed applications enforce idempotency using unique Idempotency-Key request headers.',
        bn: 'আইডেমপোটেন্ট মেথড (যেমন PUT ও DELETE) নিশ্চয়তা দেয় যে রিকোয়েস্ট ১ বার বা ১০ বার পাঠালেও সার্ভারের চূড়ান্ত অবস্থা হুবহু একই থাকে। অন্যদিকে নন-আইডেমপোটেন্ট অপারেশন (যেমন POST ও PATCH) অসতর্কভাবে পুনরায় পাঠালে ডুপ্লিকেট সম্পদ বা অবাঞ্ছিত পার্শ্বপ্রতিক্রিয়া তৈরি হতে পারে। ডিস্ট্রিবিউটেড অ্যাপ্লিকেশনগুলো তাই Idempotency-Key হেডার ব্যবহার করে নিরাপদ কার্যসম্পাদন নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'safe-methods',
          def: {
            en: 'HTTP methods like GET and HEAD that inspect state without modifying server data.',
            bn: 'জিইটি (GET) এবং হেডের (HEAD) মতো মেথড যা সার্ভারের ডাটা পরিবর্তন না করে কেবল তথ্য প্রদর্শন করে।'
          }
        },
        {
          term: 'idempotent-methods',
          def: {
            en: 'Operations like PUT and DELETE where executing the request multiple times produces the exact same server state as executing it once.',
            bn: 'এমন অপারেশন যেখানে একাধিকবার রিকোয়েস্ট পাঠালেও সার্ভারের চূড়ান্ত অবস্থা একবার পাঠানোর মতোই অপরিবর্তিত থাকে।'
          }
        },
        {
          term: 'websockets',
          def: {
            en: 'A persistent, full-duplex TCP protocol initiated via an HTTP upgrade handshake, enabling continuous bidirectional messaging.',
            bn: 'এইচটিটিপি আপগ্রেড হ্যান্ডশেকের মাধ্যমে প্রতিষ্ঠিত একটি দীর্ঘস্থায়ী দ্বি-মুখী ফুল-ডুপ্লেক্স সংযোগ।'
          }
        },
        {
          term: 'server-sent-events',
          def: {
            en: 'A lightweight HTTP streaming standard that pushes unidirectional real-time event streams from server to client.',
            bn: 'একটি হালকা এইচটিটিপি স্ট্রিমিং স্ট্যান্ডার্ড যা সার্ভার থেকে ক্লায়েন্টে একমুখী রিয়েল-টাইম ডেটা পাঠায়।'
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
      id: 'protocols-comparison-table',
      text: {
        en: 'Comparison Matrix: REST vs WebSockets vs SSE vs gRPC',
        bn: 'তুলনামূলক ম্যাট্রিক্স: রেস্ট, ওয়েবসকেট, এসএসই এবং জিআরপিসি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the optimal network protocol depends on communication directionality, framing overhead, serialization efficiency, and proxy compatibility.',
        bn: 'সঠিক নেটওয়ার্ক প্রোটোকল নির্বাচন নির্ভর করে যোগাযোগের অভিমুখ, ফ্রেমের ওভারহেড, সিরিয়ালাইজেশন দক্ষতা এবং প্রক্সির সামঞ্জস্যতার ওপর।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Protocol & Standard', bn: 'প্রোটোকল ও স্ট্যান্ডার্ড' },
        { en: 'Transport & Direction', bn: 'ট্রান্সপোর্ট ও দিক' },
        { en: 'Latency & Framing Overhead', bn: 'লেটেন্সি ও ফ্রেমের খরচ' },
        { en: 'Ideal Production Use Case', bn: 'প্রোডাকশনের আদর্শ ব্যবহার' }
      ],
      rows: [
        [
          { en: 'HTTP/1.1 REST', bn: 'এইচটিটিপি/১.১ রেস্ট' },
          { en: 'TCP; Unidirectional request-response', bn: 'টিসিপি; একমুখী রিকোয়েস্ট-রেসপন্স' },
          { en: 'High header overhead per request; HoL blocking', bn: 'প্রতি রিকোয়েস্টে বড় হেডার খরচ; HoL ব্লকিং' },
          { en: 'Stateless public web APIs and basic CRUD endpoints', bn: 'সাধারণ পাবলিক ওয়েব এপিআই ও সিআরইউডি এন্ডপয়েন্ট' }
        ],
        [
          { en: 'HTTP/2 & HTTP/3', bn: 'এইচটিটিপি/২ ও এইচটিটিপি/৩' },
          { en: 'TCP (H2) or UDP QUIC (H3); Multiplexed', bn: 'টিসিপি (H2) অথবা ইউডিপি QUIC (H3); মাল্টিপ্লেক্সড' },
          { en: 'Binary framing; compressed HPACK/QPACK headers', bn: 'বাইনারি ফ্রেম; কমপ্রেসড হেডার' },
          { en: 'High-throughput modern web applications and asset delivery', bn: 'আধুনিক উচ্চগতির ওয়েব অ্যাপ্লিকেশন ও অ্যাসেট সরবরাহ' }
        ],
        [
          { en: 'WebSockets (RFC 6455)', bn: 'ওয়েবসকেট (RFC 6455)' },
          { en: 'Persistent TCP; Full-duplex bidirectional', bn: 'দীর্ঘস্থায়ী টিসিপি; সম্পূর্ণ দ্বি-মুখী যোগাযোগ' },
          { en: 'Ultra-low 2-byte frame overhead; sub-millisecond', bn: 'মাত্র ২-বাইট ফ্রেম হেডার; সাব-মিলিসেকেন্ড লেটেন্সি' },
          { en: 'Multiplayer games, chat rooms, collaborative canvases', bn: 'মাল্টিপ্লেয়ার গেম, লাইভ চ্যাট ও শেয়ার্ড হোয়াইটবোর্ড' }
        ],
        [
          { en: 'Server-Sent Events (SSE)', bn: 'সার্ভার-সেন্ট ইভেন্টস (SSE)' },
          { en: 'Standard HTTP; Unidirectional server-to-client', bn: 'সাধারণ এইচটিটিপি; সার্ভার থেকে ক্লায়েন্টে একমুখী' },
          { en: 'Text stream (text/event-stream); native auto-reconnect', bn: 'টেক্সট স্ট্রিম; ব্রাউজারে স্বয়ংক্রিয় রিকানেক্ট সুবিধা' },
          { en: 'AI LLM token streaming, live stock tickers, metrics feeds', bn: 'এআই টোকেন স্ট্রিমিং, লাইভ স্টক প্রাইস ও নোটিফিকেশন' }
        ],
        [
          { en: 'gRPC (Protocol Buffers)', bn: 'জিআরপিসি (প্রোটোকল বাফার)' },
          { en: 'HTTP/2; Bidirectional streaming RPC', bn: 'এইচটিটিপি/২; দ্বি-মুখী স্ট্রিমিং আরপিসি' },
          { en: 'Compact binary Protobuf serialization; high speed', bn: 'অত্যন্ত কম্প্যাক্ট বাইনারি ডাটা; সর্বোচ্চ গতি' },
          { en: 'Internal microservice communication and low-latency IPC', bn: 'অভ্যন্তরীণ মাইক্রোসার্ভিস যোগাযোগ ও ব্যাকএন্ড সার্ভিস' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-idempotency-code',
      text: {
        en: 'Executable HTTP Idempotency Key Processor',
        bn: 'এইচটিটিপি আইডেমপোটেন্সি কি প্রসেসরের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how distributed payment gateways use idempotency keys to ensure that retried network requests never double-charge customers.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি প্রদর্শন করে কীভাবে ডিস্ট্রিবিউটেড পেমেন্ট গেটওয়ে আইডেমপোটেন্সি কি ব্যবহার করে নিশ্চিত করে যে নেটওয়ার্ক ড্রপের কারণে পুনরায় পাঠানো রিকোয়েস্ট গ্রাহকের কাছ থেকে দ্বিতীয়বার টাকা কেটে না নেয়।'
      }
    },
    {
      type: 'code',
      code: `// Simulating HTTP Idempotency Key Handling
interface PaymentRequest {
  idempotencyKey: string;
  amount: number;
  userId: string;
}

interface PaymentResult {
  status: 'processed' | 'cached';
  transactionId: string;
  amount: number;
}

class PaymentGateway {
  private ledger: Map<string, PaymentResult> = new Map();
  private txCounter: number = 1000;

  processPayment(req: PaymentRequest): PaymentResult {
    // If idempotency key was already seen, return the cached result
    if (this.ledger.has(req.idempotencyKey)) {
      const cached = this.ledger.get(req.idempotencyKey)!;
      return { ...cached, status: 'cached' };
    }

    // Otherwise, execute the real transaction and record the result
    this.txCounter += 1;
    const newResult: PaymentResult = {
      status: 'processed',
      transactionId: \`tx-\${this.txCounter}\`,
      amount: req.amount
    };
    this.ledger.set(req.idempotencyKey, newResult);
    return newResult;
  }
}

const gateway = new PaymentGateway();
const req: PaymentRequest = { idempotencyKey: 'idem-key-842', amount: 50, userId: 'user-42' };

const attempt1 = gateway.processPayment(req);
const attempt2 = gateway.processPayment(req);

console.log('Attempt 1:', attempt1.status, attempt1.transactionId, attempt1.amount);
console.log('Attempt 2:', attempt2.status, attempt2.transactionId, attempt2.amount);

// prints: Attempt 1: processed tx-1001 50
// prints: Attempt 2: cached tx-1001 50`
    },
    {
      type: 'heading',
      id: 'status-codes-and-errors',
      text: {
        en: 'Status Code Families and Resilient Network Error Handling',
        bn: 'স্ট্যাটাস কোড পরিবার এবং নির্ভরযোগ্য নেটওয়ার্ক এরর হ্যান্ডলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'HTTP status codes form a contract between client and server. Status families include 2xx for success, 3xx for redirects, 4xx for client errors, and 5xx for server faults. Distributed systems must distinguish between retryable errors (such as 429 Too Many Requests or 503 Service Unavailable with exponential backoff) and non-retryable errors (such as 400 Bad Request or 401 Unauthorized), avoiding self-inflicted denial-of-service retry storms.',
        bn: 'এইচটিটিপি স্ট্যাটাস কোড ক্লায়েন্ট ও সার্ভারের মধ্যকার আনুষ্ঠানিক চুক্তির রায় প্রদান করে। স্ট্যাটাস পরিবারের মধ্যে রয়েছে সফলতার জন্য ২xx, রিডাইরেকশনের জন্য ৩xx, ক্লায়েন্ট ভুলের জন্য ৪xx এবং সার্ভার ব্যর্থতার জন্য ৫xx। ডিস্ট্রিবিউটেড সিস্টেমে পুনরায় চেষ্টাযোগ্য এরর এবং স্থায়ী এররের মধ্যে পার্থক্য বজায় রাখতে হয়। উদাহরণস্বরূপ 429 Too Many Requests বা 503 Service Unavailable এর বেলায় ব্যাকঅফ দিয়ে পুনরায় চেষ্টা করা যায়। কিন্তু 400 Bad Request বা 401 Unauthorized এর মতো স্থায়ী ভুলে অন্ধভাবে রিট্রাই করলে সিস্টেমে অপ্রয়োজনীয় চাপ তৈরি হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Safe vs Idempotent: Safe methods never mutate state; idempotent methods can be repeated safely without extra mutations.',
          bn: 'নিরাপদ বনাম আইডেমপোটেন্ট: নিরাপদ মেথড ডাটা বদলায় না; আর আইডেমপোটেন্ট মেথড বারবার চালালেও সার্ভারের অবস্থা অপরিবর্তিত থাকে।'
        },
        {
          en: 'WebSockets for true duplex: Choose WebSockets when clients and servers both need continuous, low-latency push messaging.',
          bn: 'দ্বি-মুখী যোগাযোগের জন্য ওয়েবসকেট: ক্লায়েন্ট ও সার্ভার উভয়েরই তাৎক্ষণিক মেসেজ পাঠানোর প্রয়োজন হলে ওয়েবসকেট ব্যবহার করুন।'
        },
        {
          en: 'SSE for server streaming: Choose SSE for unidirectional text push like LLM streaming, benefiting from native browser reconnects.',
          bn: 'সার্ভার স্ট্রিমিংয়ে এসএসই: এআই টোকেন বা একমুখী আপডেটের জন্য এসএসই সেরা, যা ব্রাউজারের নিজস্ব রিকানেক্ট সুবিধা পায়।'
        },
        {
          en: 'Idempotency keys prevent double-charging: Always require unique idempotency tokens on payment and creation APIs.',
          bn: 'আইডেমপোটেন্সি কি দ্বিগুণ পেমেন্ট ঠেকায়: পেমেন্ট ও রিসোর্স তৈরির এপিআইতে সর্বদা ইউনিক আইডেমপোটেন্সি টোকেন ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'treaty-shelf-ex1',
      kind: 'mcq',
      topic: 'http-idempotency-definition',
      question: {
        en: 'Which of the following HTTP methods is defined by RFC specifications as idempotent?',
        bn: 'আরএফসি স্পেসিফিকেশন অনুযায়ী নিচের কোন এইচটিটিপি মেথডটি আইডেমপোটেন্ট হিসেবে সংজ্ঞায়িত?'
      },
      options: [
        {
          en: 'PUT and DELETE',
          bn: 'PUT এবং DELETE'
        },
        {
          en: 'POST only',
          bn: 'কেবল POST'
        },
        {
          en: 'PATCH only',
          bn: 'কেবল PATCH'
        },
        {
          en: 'None of the above',
          bn: 'উপরের কোনোটিই নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Replacing a resource (PUT) or removing it (DELETE) produces the same end state whether executed once or ten times.',
        bn: 'কোনো ফাইল প্রতিস্থাপন করা (PUT) বা মুছে ফেলা (DELETE) একবার বা দশবার চালালেও ফলাফল একই থাকে।'
      },
      explanation: {
        en: 'PUT and DELETE are idempotent by specification; repeated invocations yield identical resulting server state.',
        bn: 'স্পেসিফিকেশন অনুসারে PUT এবং DELETE আইডেমপোটেন্ট; একাধিকবার চালালেও সার্ভারের চূড়ান্ত অবস্থা একই থাকে।'
      }
    },
    {
      id: 'treaty-shelf-ex2',
      kind: 'mcq',
      topic: 'websocket-upgrade-handshake',
      question: {
        en: 'How does a browser client initiate a persistent WebSocket connection with an HTTP server?',
        bn: 'একটি ব্রাউজার ক্লায়েন্ট কীভাবে একটি এইচটিটিপি সার্ভারের সাথে দীর্ঘস্থায়ী ওয়েবসকেট সংযোগ শুরু করে?'
      },
      options: [
        {
          en: 'It sends a standard HTTP GET request with Upgrade: websocket and Connection: Upgrade headers, receiving an HTTP 101 Switching Protocols response',
          bn: 'এটি Upgrade: websocket এবং Connection: Upgrade হেডারসহ সাধারণ HTTP GET পাঠায় এবং HTTP 101 Switching Protocols রেসপন্স লাভ করে'
        },
        {
          en: 'By sending an encrypted email to the network administrator',
          bn: 'নেটওয়ার্ক অ্যাডমিনিস্ট্রেটরের কাছে একটি এনক্রিপ্ট করা ইমেইল পাঠিয়ে'
        },
        {
          en: 'By downloading a 500-megabyte executable binary file',
          bn: 'একটি ৫০০-মেগাবাইটের এক্সিকিউটেবল বাইনারি ফাইল ডাউনলোড করে'
        },
        {
          en: 'By resetting the local computer operating system to factory settings',
          bn: 'স্থানীয় কম্পিউটারের অপারেটিং সিস্টেম ফ্যাক্টরি রিসেট করার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The WebSocket handshake starts on regular port 80 or 443 with an HTTP request asking to upgrade the protocol.',
        bn: 'ওয়েবসকেট হ্যান্ডশেক সাধারণ ৮০ বা ৪৪৩ পোর্টে প্রোটোকল আপগ্রেড করার এইচটিটিপি রিকোয়েস্ট দিয়ে শুরু হয়।'
      },
      explanation: {
        en: 'The HTTP 101 Switching Protocols handshake promotes the existing TCP socket to the bidirectional WebSocket framing protocol.',
        bn: 'HTTP 101 সুইচিং প্রোটোকলস বিদ্যমান টিসিপি সকেটকে দ্বি-মুখী ওয়েবসকেট প্রোটোকলে রূপান্তর করে।'
      }
    },
    {
      id: 'treaty-shelf-ex3',
      kind: 'mcq',
      topic: 'sse-vs-websocket-streaming',
      question: {
        en: 'Why is Server-Sent Events (SSE) often preferred over WebSockets for AI LLM token streaming applications?',
        bn: 'এআই লার্জ ল্যাঙ্গুয়েজ মডেলের টোকেন স্ট্রিমিং অ্যাপ্লিকেশনের জন্য কেন প্রায়শই ওয়েবসকেটের চেয়ে সার্ভার-সেন্ট ইভেন্টস (SSE) অধিক পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'Because token streaming is strictly unidirectional (server to client), runs over plain HTTP with built-in browser auto-reconnection, and requires no custom binary socket infrastructure',
          bn: 'কারণ টোকেন স্ট্রিমিং সম্পূর্ণরূপে একমুখী (সার্ভার থেকে ক্লায়েন্টে), সাধারণ এইচটিটিপির ওপর চলে যাতে ব্রাউজারের অটো-রিকানেক্ট সুবিধা থাকে এবং কোনো জটিল সকেট অবকাঠামোর প্রয়োজন হয় না'
        },
        {
          en: 'Because WebSockets can only transmit letters of the alphabet in uppercase',
          bn: 'কারণ ওয়েবসকেট কেবল বড় হাতের ইংরেজি অক্ষর পাঠাতে পারে'
        },
        {
          en: 'Because SSE works without using any internet cables or routers',
          bn: 'কারণ SSE কোনো ইন্টারনেট ক্যাবল বা রাউটার ছাড়াই কাজ করতে পারে'
        },
        {
          en: 'Because SSE encrypts text using 1024-bit quantum algorithms',
          bn: 'কারণ SSE টেক্সট ডাটাকে ১০২৪-বিট কোয়ান্টাম অ্যালগরিদম দিয়ে এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'When the client does not need to send messages back to the server over the same stream, SSE provides simplicity and built-in HTTP resilience.',
        bn: 'একই পাইপ দিয়ে ক্লায়েন্টের কোনো ডাটা পাঠানোর দরকার না থাকলে এসএসই এর সরলতা ও সাধারণ এইচটিটিপি সুবিধা অতুলনীয়।'
      },
      explanation: {
        en: 'SSE simplifies streaming architecture for unidirectional workloads by operating over standard HTTP with native EventSource support.',
        bn: 'এসএসই সাধারণ এইচটিটিপির ওপর চলে একমুখী কাজের ক্ষেত্রে স্থাপত্যকে অত্যন্ত সহজ ও নির্ভরযোগ্য করে তোলে।'
      }
    },
    {
      id: 'treaty-shelf-ex4',
      kind: 'mcq',
      topic: 'http-429-rate-limiting',
      question: {
        en: 'When a client receives an HTTP 429 Too Many Requests status code, what response header dictates how long the client should wait before retrying?',
        bn: 'একটি ক্লায়েন্ট যখন HTTP 429 Too Many Requests স্ট্যাটাস কোড পায়, তখন কোন রেসপন্স হেডার ক্লায়েন্টকে পুনরায় চেষ্টা করার আগে কতক্ষণ অপেক্ষা করতে হবে তা জানিয়ে দেয়?'
      },
      options: [
        {
          en: 'Retry-After',
          bn: 'Retry-After'
        },
        {
          en: 'Cache-Control',
          bn: 'Cache-Control'
        },
        {
          en: 'Content-Encoding',
          bn: 'Content-Encoding'
        },
        {
          en: 'Access-Control-Allow-Origin',
          bn: 'Access-Control-Allow-Origin'
        }
      ],
      answer: 0,
      hint: {
        en: 'This standard header provides either a number of seconds or an HTTP date string.',
        bn: 'এই স্ট্যান্ডার্ড হেডারটিতে অপেক্ষার সেকেন্ড সংখ্যা বা একটি নির্দিষ্ট সময় উল্লেখ থাকে।'
      },
      explanation: {
        en: 'The Retry-After header informs the client how many seconds to pause before sending subsequent requests, preventing server overload.',
        bn: 'Retry-After হেডার ক্লায়েন্টকে পরবর্তী রিকোয়েস্ট পাঠানোর আগে কত সেকেন্ড থামতে হবে তা নির্দিষ্ট করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-treaty-shelf-quiz',
    title: {
      en: 'Protocol Contracts and Network Semantics Quiz',
      bn: 'প্রোটোকল চুক্তি ও নেটওয়ার্ক সেমান্টিকস কুইজ'
    },
    questions: [
      {
        id: 'ts-q1',
        kind: 'mcq',
        topic: 'http-304-not-modified',
        question: {
          en: 'Under what condition does an origin server return an HTTP 304 Not Modified status code?',
          bn: 'কোন শর্তে একটি অরিজিন সার্ভার HTTP 304 Not Modified স্ট্যাটাস কোড প্রদান করে?'
        },
        options: [
          {
            en: 'When a conditional GET request containing If-None-Match or If-Modified-Since matches the current server representation, indicating cached content is still fresh',
            bn: 'যখন If-None-Match বা If-Modified-Since সম্বলিত কন্ডিশনাল রিকোয়েস্টের সাথে সার্ভারের ডাটা হুবহু মিলে যায়, যার অর্থ ক্যাশ করা ফাইল এখনও সম্পূর্ণ সতেজ'
          },
          {
            en: 'When the server hard drive has run out of storage space',
            bn: 'যখন সার্ভারের হার্ড ড্রাইভে খালি জায়গা ফুরিয়ে যায়'
          },
          {
            en: 'When the user types an incorrect password three times',
            bn: 'যখন ব্যবহারকারী পরপর তিনবার ভুল পাসওয়ার্ড প্রদান করে'
          },
          {
            en: 'When the requested website has been deleted permanently from the Internet',
            bn: 'যখন কাঙ্ক্ষিত ওয়েবসাইটটি ইন্টারনেট থেকে স্থায়ীভাবে মুছে ফেলা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The server sends 304 without a response body, saving bandwidth because the browser already has the byte-for-byte identical asset.',
          bn: 'সার্ভার কোনো বডি ছাড়া খালি 304 পাঠায় কারণ ব্রাউজারে ইতিমধ্যেই সঠিক ফাইলটি ক্যাশ করা আছে।'
        },
        explanation: {
          en: 'HTTP 304 validates cache freshness without retransmitting response payloads, minimizing bandwidth consumption.',
          bn: 'HTTP 304 কোনো নতুন ডাটা না পাঠিয়ে ব্রাউজারের ক্যাশ ফাইল সতেজ বলে নিশ্চিত করে ব্যান্ডউইথ সাশ্রয় করে।'
        }
      },
      {
        id: 'ts-q2',
        kind: 'mcq',
        topic: 'grpc-protobuf-advantages',
        question: {
          en: 'What primary performance advantage does gRPC with Protocol Buffers provide over standard JSON REST APIs in microservice architectures?',
          bn: 'মাইক্রোসার্ভিস আর্কিটেকচারে সাধারণ JSON REST এপিআই-এর তুলনায় প্রোটোকল বাফারসহ gRPC কোন প্রধান পারফরম্যান্স সুবিধা দেয়?'
        },
        options: [
          {
            en: 'Compact binary serialization and strongly-typed code generation that drastically reduce payload byte size and CPU serialization overhead',
            bn: 'কম্প্যাক্ট বাইনারি সিরিয়ালাইজেশন এবং স্ট্রংলি-টাইপড কোড জেনারেশন যা পে-লোডের আকার এবং সিপিইউ পার্সিং সময় নাটকীয়ভাবে কমায়'
          },
          {
            en: 'gRPC runs directly on optical lasers without using electricity',
            bn: 'gRPC বিদ্যুৎ ছাড়া সরাসরি অপটিক্যাল লেজারের ওপর কাজ করে'
          },
          {
            en: 'gRPC converts all database queries into Python code automatically',
            bn: 'gRPC সমস্ত ডেটাবেস কুয়েরিকে স্বয়ংক্রিয়ভাবে পাইথন কোডে রূপান্তর করে'
          },
          {
            en: 'gRPC eliminates the need for computer RAM in servers',
            bn: 'gRPC ব্যবহারের ফলে সার্ভারে কোনো র‍্যাম মেমরির প্রয়োজন হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'JSON sends verbose ASCII text with repeated field names. Protobuf encodes fields into tiny binary tags.',
          bn: 'জেসন বড় টেক্সট আকারে ফিল্ডের নাম বারবার পাঠায়, আর প্রোটোবাফ ছোট বাইনারি ট্যাগ ব্যবহার করে ডাটা সংকুচিত করে।'
        },
        explanation: {
          en: 'Protobuf binary framing achieves 5x to 10x faster serialization and significantly smaller network footprints than text JSON.',
          bn: 'প্রোটোবাফের বাইনারি ফরম্যাট টেক্সট জেসনের চেয়ে ৫ থেকে ১০ গুণ দ্রুত পার্স হয় এবং ব্যান্ডউইথ খরচ অনেক কমায়।'
        }
      },
      {
        id: 'ts-q3',
        kind: 'mcq',
        topic: 'http2-head-of-line-blocking-quic',
        question: {
          en: 'Why does HTTP/3 (built on UDP and QUIC) solve the remaining Head-of-Line (HoL) blocking problem present in HTTP/2?',
          bn: 'এইচটিটিপি/৩ (ইউডিপি এবং কুইকের ওপর নির্মিত) কেন এইচটিটিপি/২-তে বিদ্যমান হেড-অব-লাইন (HoL) ব্লকিং সমস্যার সম্পূর্ণ সমাধান করে?'
        },
        options: [
          {
            en: 'In HTTP/2, all multiplexed streams share a single TCP connection, so a lost TCP packet stalls all streams; QUIC handles loss per stream independently over UDP',
            bn: 'এইচটিটিপি/২-তে সব স্ট্রিম একটি মাত্র টিসিপি কানেকশন শেয়ার করে, তাই একটি প্যাকেট হারালে সব স্ট্রিম আটকে যায়; কিন্তু QUIC ইউডিপির ওপর প্রতিটি স্ট্রিমকে স্বাধীনভাবে পরিচালনা করে'
          },
          {
            en: 'Because QUIC operates without using any network packets',
            bn: 'কারণ QUIC কোনো প্রকার নেটওয়ার্ক প্যাকেট ব্যবহার না করেই চলে'
          },
          {
            en: 'Because HTTP/3 forces all clients to use satellite links',
            bn: 'কারণ এইচটিটিপি/৩ সমস্ত ক্লায়েন্টকে স্যাটেলাইট সংযোগ ব্যবহার করতে বাধ্য করে'
          },
          {
            en: 'HTTP/3 removes encryption entirely to speed up transmission',
            bn: 'এইচটিটিপি/৩ গতি বাড়াতে সমস্ত সিকিউরিটি এনক্রিপশন তুলে দিয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'TCP guarantees ordered byte delivery. If byte 100 is lost, byte 200 cannot be delivered even if it belongs to a different HTTP/2 stream.',
          bn: 'টিসিপি ক্রমানুসারে ডাটা প্রদান করে। ১০০ নম্বর প্যাকেট হারালে ২০০ নম্বর প্যাকেট ভিন্ন স্ট্রিমের হলেও আটকে থাকে; QUIC এটি সমাধান করেছে।'
        },
        explanation: {
          en: 'QUIC provides independent stream delivery over UDP, so packet drops on one stream never stall unrelated multiplexed streams.',
          bn: 'QUIC প্রতিটি স্ট্রিমের প্যাকেট ক্ষতিকে স্বাধীনভাবে দেখে, ফলে একটি স্ট্রিমের জ্যাম অন্য কোনো স্ট্রিমকে প্রভাবিত করতে পারে না।'
        }
      },
      {
        id: 'ts-q4',
        kind: 'mcq',
        topic: 'idempotency-key-network-retry',
        question: {
          en: 'In distributed systems, what is the critical architectural purpose of an Idempotency-Key HTTP header on POST payment endpoints?',
          bn: 'ডিস্ট্রিবিউটেড সিস্টেমে POST পেমেন্ট এন্ডপয়েন্টে Idempotency-Key এইচটিটিপি হেডার ব্যবহারের মূল স্থাপত্যিক উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It enables safe retries across flaky networks by allowing the server to recognize duplicate requests and return the original cached transaction result without re-executing charges',
            bn: 'এটি দুর্বল নেটওয়ার্কে নিরাপদ রিট্রাই নিশ্চিত করে, যার ফলে সার্ভার ডুপ্লিকেট রিকোয়েস্ট চিনে ফেলে পুনরায় টাকা না কেটে পূর্বে সংরক্ষিত রেজাল্ট ফেরত দিতে পারে'
          },
          {
            en: 'It encrypts the user credit card number with a random password',
            bn: 'এটি একটি এলোমেলো পাসওয়ার্ড দিয়ে ক্রেডিট কার্ড নম্বর এনক্রিপ্ট করে'
          },
          {
            en: 'It forces the client browser to reboot immediately',
            bn: 'এটি ক্লায়েন্টের ব্রাউজারকে সাথে সাথে রিবুট হতে বাধ্য করে'
          },
          {
            en: 'It prints an invoice on the customer physical printer',
            bn: 'এটি গ্রাহকের ফিজিক্যাল প্রিন্টারে সরাসরি একটি রসিদ প্রিন্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a mobile network drops just as a payment completes, the app retries. The key prevents charging the card a second time.',
          bn: 'পেমেন্ট হওয়ার মুহূর্তে নেটওয়ার্ক চলে গেলে অ্যাপ আবার পাঠায়। আইডেমপোটেন্সি কি নিশ্চিত করে যেন দ্বিতীয়বার টাকা না কাটে।'
        },
        explanation: {
          en: 'Idempotency keys decouple network delivery uncertainty from financial transaction safety, guaranteeing exact-once processing semantics.',
          bn: 'আইডেমপোটেন্সি কি নেটওয়ার্কের অনিশ্চয়তা সত্ত্বেও আর্থিক লেনদেনের নিরাপত্তা নিশ্চিত করে ডুপ্লিকেট চার্জিং সম্পূর্ণভাবে প্রতিহত করে।'
        }
      }
    ]
  }
};
