import type { Lesson } from '../../../lib/types';

export const TheCrateServeLesson: Lesson = {
  slug: 'the-crate-serve',
  tech: 'rust',
  title: {
    en: 'Production Microservice with Axum & Tokio',
    bn: 'Axum এবং Tokio দিয়ে প্রোডাকশন মাইক্রোসার্ভিস'
  },
  summary: {
    en: 'Construct an enterprise-grade REST microservice in Rust. Learn how Axum pairs with Tokio to achieve sub-millisecond p99 latencies, master extractor patterns for type-safe requests, implement distributed tracing with the tracing crate, and containerize static binaries via multi-stage Alpine Docker builds.',
    bn: 'Rust-এ এন্টারপ্রাইজ-গ্রেড REST মাইক্রোসার্ভিস তৈরি করুন। Axum এবং Tokio কীভাবে সাব-মিলিসেকেন্ড p99 লেটেন্সি অর্জন করে, টাইপ-নিরাপদ রিকোয়েস্টের জন্য এক্সট্র্যাক্টর প্যাটার্ন, tracing ক্রেট দিয়ে ডিস্ট্রিবিউটেড ট্রেসিং এবং মাল্টি-স্টেজ ডকার বিল্ডের মাধ্যমে ক্ষুদ্র স্ট্যাটিক বাইনারি কন্টেইনারাইজেশন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'axum-routing-extractors-heading',
      text: {
        en: 'The Axum Web Framework, Routing, and Type-Safe Extractors',
        bn: 'Axum ওয়েব ফ্রেমওয়ার্ক, রাউটিং এবং টাইপ-নিরাপদ এক্সট্র্যাক্টর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Building high-throughput network backends requires an architecture that combines maximum CPU efficiency with reliable type safety. In Rust (the memory-safe systems programming language), the premier web framework is Axum, developed by the official Tokio team. Axum leverages the Tower middleware ecosystem to deliver blazing HTTP throughput with sub-millisecond p99 latencies. Instead of relying on dynamic runtime reflection, Axum utilizes type-safe extractors. Handlers declare exact typed arguments such as "Json<Payload>", "Path<Uuid>", or "State<Arc<AppState>>". The compiler verifies during compilation that incoming HTTP payloads can be deserialized safely. If an incoming request fails schema validation, Axum rejects the request automatically with an HTTP 422 or 400 status before handler execution begins.',
        bn: 'উচ্চ-গতির নেটওয়ার্ক ব্যাকএন্ড তৈরিতে সর্বোচ্চ সিপিইউ দক্ষতার সাথে কঠোর টাইপ নিরাপত্তা নিশ্চিত করা প্রয়োজন। Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা)-এর সবচেয়ে জনপ্রিয় আধুনিক ওয়েব ফ্রেমওয়ার্ক হলো Axum, যা অফিশিয়াল টোকিও টিম তৈরি করেছে। এটি টাওয়ার (Tower) মিডলওয়্যারের ওপর ভর করে সাব-মিলিসেকেন্ড p99 লেটেন্সিতে অসাধারণ এইচটিটিপি থ্রুপুট প্রদান করে। কোনো ধীরগতির রানটাইম রিফ্লেকশনের বদলে Axum টাইপ-নিরাপদ এক্সট্র্যাক্টর ব্যবহার করে। হ্যান্ডলারের প্যারামিটারে "Json<Payload>", "Path<Uuid>" বা "State<Arc<AppState>>" সরাসরি লিখে দেওয়া যায়। কম্পাইলেশনের সময় কম্পাইলার যাচাই করে নেয় যে আগত ডেটা নিরাপদে ডেসিরিয়ালাইজ করা সম্ভব কিনা। রিকোয়েস্টের ডেটা স্কিমার সাথে না মিললে Axum নিজে থেকেই হ্যান্ডলার চলার আগেই HTTP 422 বা 400 স্ট্যাটাস দিয়ে তা প্রত্যাখ্যান করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: High-throughput Axum microservice request lifecycle: Inbound TCP packet on port 3000 processed across Tower middleware, type extractors, and atomic application state.',
        bn: 'চিত্র ১: উচ্চ-গতির Axum মাইক্রোসার্ভিস রিকোয়েস্ট জীবনচক্র: পোর্ট 3000 এ আগত টিসিপি প্যাকেট টাওয়ার মিডলওয়্যার, টাইপ এক্সট্র্যাক্টর এবং অ্যাপ্লিকেশন স্টেটের মধ্য দিয়ে নির্বাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">AXUM PRODUCTION ASYNC PIPELINE ARCHITECTURE</text>

  <!-- Step 1: Client Request -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client Request</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">POST /orders</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Port 3000</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">JSON Body</text>

    <text x="15" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif">TCP Connection</text>
  </g>

  <!-- Step 2: Tokio Worker -->
  <g transform="translate(190, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Tokio Dispatch</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Work Stealing</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Async Polling</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Green Task</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Sub-ms Latency</text>
  </g>

  <!-- Step 3: Tower Middleware -->
  <g transform="translate(350, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#059669" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Tower Layer</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">TraceMiddleware</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Req-ID &amp; Spans</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Rate Limiter</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Allocation</text>
  </g>

  <!-- Step 4: Axum Extractors -->
  <g transform="translate(520, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#9333ea" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Extractors</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Json&lt;Payload&gt;</text>
    <text x="15" y="85" fill="#c084fc" font-size="8" font-family="monospace">State&lt;Arc&lt;App&gt;&gt;</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Typed Validation</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Compile-Time Check</text>
  </g>

  <!-- Step 5: Final Response -->
  <g transform="translate(680, 65)">
    <rect width="135" height="235" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="2" />
    <rect width="135" height="30" rx="8" fill="#be123c" />
    <text x="67" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. 201 Created</text>

    <rect x="10" y="45" width="115" height="50" rx="5" fill="#0f172a" stroke="#e11d48" />
    <text x="15" y="68" fill="#fb7185" font-size="9" font-family="monospace">StatusCode 201</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Order Committed</text>

    <rect x="10" y="105" width="115" height="40" rx="5" fill="#0f172a" stroke="#e11d48" />
    <text x="15" y="130" fill="#fb7185" font-size="9" font-family="monospace">JSON Response</text>

    <text x="15" y="215" fill="#fb7185" font-size="10" font-family="sans-serif">Memory Dropped</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'observability-and-containerization-heading',
      text: {
        en: 'Distributed Tracing and Multi-Stage Container Packaging',
        bn: 'ডিস্ট্রিবিউটেড ট্রেসিং এবং মাল্টি-স্টেজ কন্টেইনার প্যাকেজিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production microservice clusters, diagnosing latency regressions demands structured observability. The "tracing" crate provides hierarchical spans and contextual events that propagate correlation identifiers across asynchronous await boundaries. When combined with OpenTelemetry, traces flow seamlessly to platforms like Jaeger or Datadog. For enterprise deployment, engineers package Rust binaries using multi-stage Docker builds. The compilation stage utilizes a musl or Alpine Rust toolchain with compiler stripping enabled. The finalized production image copies solely the isolated static executable into a minimal Alpine or scratch container, yielding an immutable, battle-tested image footprint measuring under 20 megabytes with zero dynamic library dependencies.',
        bn: 'প্রোডাকশন মাইক্রোসার্ভিস ক্লাস্টারে লেটেন্সি সমস্যা নির্ণয়ে স্ট্রাকচার্ড অবজারভেবিলিটি অপরিহার্য। "tracing" ক্রেট স্তরভিত্তিক স্প্যান এবং প্রাসঙ্গিক ইভেন্ট তৈরি করে, যা অ্যাসিঙ্ক্রোনাস await সীমানার মাঝেও রিকোয়েস্ট আইডি অক্ষুণ্ন রাখে। ওপেনটেলিমেট্রির সাহায্যে এই ট্রেসগুলো সরাসরি Jaeger বা Datadog-এর মতো প্ল্যাটফর্মে চলে যায়। এন্টারপ্রাইজ ডিপ্লয়মেন্টের জন্য ইঞ্জিনিয়াররা মাল্টি-স্টেজ ডকার বিল্ড ব্যবহার করেন। প্রথম ধাপে musl বা Alpine টুলচেইনে কম্পাইলার স্ট্রিপিং চালিয়ে স্ট্যাটিক বাইনারি তৈরি করা হয়। চূড়ান্ত ধাপে কেবল সেই বিচ্ছিন্ন এক্সিকিউটেবল ফাইলটি একটি অতি ক্ষুদ্র Alpine বা scratch কন্টেইনারে কপি করা হয়, যা কোনো ডায়নামিক লাইব্রেরির ওপর নির্ভর না করে মাত্র ২০ মেগাবাইটের নিচে একটি দুর্ভেদ্য ইমেজ সরবরাহ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Axum router, type extractors, and Tower middleware request processing.',
        bn: 'Axum রাউটার, টাইপ এক্সট্র্যাক্টর এবং টাওয়ার মিডলওয়্যার রিকোয়েস্ট প্রক্রিয়াকরণের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Axum Type-Safe Web Router and Tower Middleware Pipeline

export interface HttpRequest {
  method: 'GET' | 'POST';
  path: string;
  headers: Record<string, string>;
  bodyJson?: unknown;
}

export interface HttpResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

// Simulated App State (Arc<AppState>)
export interface SharedAppState {
  serverName: string;
  orderCounter: number;
}

export class SimulatedAxumMicroservice {
  private state: SharedAppState = {
    serverName: 'orders-v1',
    orderCounter: 1000
  };

  // Simulated Handler: async fn create_order(State(state), Json(payload))
  public async handlePostOrder(
    req: HttpRequest,
    requestId: string
  ): Promise<HttpResponse> {
    console.log('[Tower Tracing] Span entered for request ID:', requestId);

    // Simulated Json<Payload> Type Extractor Validation
    const payload = req.bodyJson as { itemId?: string; quantity?: number };
    if (!payload || !payload.itemId || typeof payload.quantity !== 'number') {
      console.log('[Axum Extractor] Schema mismatch! Rejecting with 422 Unprocessable Entity.');
      return {
        statusCode: 422,
        headers: { 'x-request-id': requestId },
        body: JSON.stringify({ error: 'Invalid order schema' })
      };
    }

    // Atomic State Mutation (simulating Mutex lock)
    this.state.orderCounter += 1;
    const newOrderId = 'ORD-' + this.state.orderCounter;

    console.log('[Handler Success] Created order:', newOrderId, 'for item:', payload.itemId);
    return {
      statusCode: 201,
      headers: {
        'content-type': 'application/json',
        'x-request-id': requestId
      },
      body: JSON.stringify({
        orderId: newOrderId,
        status: 'Confirmed',
        quantity: payload.quantity
      })
    };
  }

  // Simulated Tower Middleware Pipeline
  public async dispatch(req: HttpRequest): Promise<HttpResponse> {
    const startTime = Date.now();
    const requestId = 'req-trace-' + Math.floor(Math.random() * 9000 + 1000);

    let response: HttpResponse;
    if (req.method === 'POST' && req.path === '/orders') {
      response = await this.handlePostOrder(req, requestId);
    } else {
      response = {
        statusCode: 404,
        headers: { 'x-request-id': requestId },
        body: JSON.stringify({ error: 'Endpoint Not Found' })
      };
    }

    const durationMs = Date.now() - startTime;
    console.log('[Tower Logger] Handled', req.method, req.path, '->', response.statusCode, 'in', durationMs, 'ms');
    return response;
  }
}

// Execution Demonstration
const service = new SimulatedAxumMicroservice();

// Request 1: Valid Order Request on port 3000
service.dispatch({
  method: 'POST',
  path: '/orders',
  headers: { host: 'localhost:3000' },
  bodyJson: { itemId: 'sku-9872', quantity: 3 }
}).then(res => {
  console.log('Client Response 1 Status:', res.statusCode); // 201
  console.log('Client Response 1 Body:', res.body);
});

// Request 2: Malformed Payload testing Type Extractor Rejection
service.dispatch({
  method: 'POST',
  path: '/orders',
  headers: { host: 'localhost:3000' },
  bodyJson: { invalidField: true }
}).then(res => {
  console.log('Client Response 2 Status:', res.statusCode); // 422
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Axum Web Framework',
          def: {
            en: 'High-performance ergonomic Rust web framework built by Tokio utilizing type-safe extractors and Tower middleware.',
            bn: 'টোকিও নির্মিত উচ্চ-কর্মক্ষমতার Rust ওয়েব ফ্রেমওয়ার্ক যা টাইপ-নিরাপদ এক্সট্র্যাক্টর ও টাওয়ার মিডলওয়্যার ব্যবহার করে।'
          }
        },
        {
          term: 'Type-Safe Extractor',
          def: {
            en: 'Axum handler parameter pattern that statically parses and validates HTTP request segments before the handler executes.',
            bn: 'হ্যান্ডলার প্যারামিটার যা হ্যান্ডলার চলার আগেই ইনকামিং এইচটিটিপি ডেটা নির্ভুলভাবে পার্স এবং যাচাই করে নেয়।'
          }
        },
        {
          term: 'Tower Middleware',
          def: {
            en: 'Modular composable middleware standard in the Tokio ecosystem for rate-limiting, tracing, timeouts, and metrics.',
            bn: 'টোকিও ইকোসিস্টেমের মডুলার মিডলওয়্যার স্ট্যান্ডার্ড যা রেট লিমিটিং, ট্রেসিং এবং মেট্রিক্সে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Multi-Stage Container',
          def: {
            en: 'Docker build pattern that compiles in a heavy toolchain environment and exports only a tiny stripped static binary.',
            bn: 'ডকার বিল্ড পদ্ধতি যা ভারী টুলে কম্পাইল শেষে কেবল একটি ক্ষুদ্র স্ট্যাটিক বাইনারি চূড়ান্ত ইমেজে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'axum-type-safe-extractor-rejection-ex1',
      kind: 'mcq',
      topic: 'axum-type-safe-extractors-schema-validation',
      question: {
        en: 'What occurs when an incoming HTTP request payload fails to deserialize into the typed "Json<T>" extractor declared in an Axum handler?',
        bn: 'কোনো ইনকামিং এইচটিটিপি রিকোয়েস্ট পেলোড যখন Axum হ্যান্ডলারে ঘোষিত টাইপড "Json<T>" এক্সট্র্যাক্টরে পার্স হতে ব্যর্থ হয়, তখন কী ঘটে?'
      },
      options: [
        {
          en: 'Axum rejects the request immediately with an HTTP 422 or 400 status before the handler function body ever runs, preventing corrupted state execution',
          bn: 'হ্যান্ডলার ফাংশন চলার আগেই Axum তাৎক্ষণিকভাবে রিকোয়েস্টটি প্রত্যাখ্যান করে HTTP 422 বা 400 স্ট্যাটাস পাঠায়, যা ত্রুটিপূর্ণ ডেটা রোধ করে'
        },
        {
          en: 'The server restarts the operating system',
          bn: 'সার্ভার অপারেটিং সিস্টেম রিস্টার্ট দেয়'
        },
        {
          en: 'The handler executes anyway with all fields set to null',
          bn: 'সব ফিল্ডে null বসিয়ে হ্যান্ডলার জোরপূর্বক চালু হয়'
        },
        {
          en: 'Axum was deprecated in favor of PHP CGI scripts',
          bn: 'Axum বাতিল করে PHP CGI স্ক্রিপ্ট চালু করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Axum extractors enforce strict schema verification before executing handler logic.',
        bn: 'ভুল ডেটা থাকলে হ্যান্ডলারের কোড চলার আগেই তা রিজেক্ট হয়ে যায়।'
      },
      explanation: {
        en: 'Extractors act as type-level gatekeepers. If JSON deserialization fails, Axum aborts the request and responds with a 422 Unprocessable Entity error without running developer code.',
        bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের ভেতরে কোনো ত্রুটিপূর্ণ বা ক্ষতিকর ডেটা ঢুকতে পারে না।'
      }
    },
    {
      id: 'arc-app-state-concurrency-ex2',
      kind: 'mcq',
      topic: 'arc-app-state-thread-safe-sharing',
      question: {
        en: 'Why is application state encapsulated within "Arc<AppState>" when passed to Axum routers using "Router::with_state"?',
        bn: 'Axum রাউটারে "Router::with_state" দিয়ে পাঠানোর সময় কেন অ্যাপ্লিকেশন স্টেটকে "Arc<AppState>"-এর ভেতর রাখা হয়?'
      },
      options: [
        {
          en: 'Arc provides thread-safe atomic reference counting, allowing thousands of concurrent Tokio worker threads to share immutable access to database pools without cloning data',
          bn: 'Arc থ্রেড-সেফ অ্যাটমিক রেফারেন্স কাউন্টিং প্রদান করে, যার ফলে হাজার হাজার কনকারেন্ট টোকিও ওয়ার্কার থ্রেড ডেটা ক্লোন না করেই ডেটাবেজ পুল শেয়ার করতে পারে'
        },
        {
          en: 'Arc converts all database connections into 16-bit floating point numbers',
          bn: 'Arc সমস্ত ডেটাবেজ কানেকশনকে ১৬-বিট ফ্লোটিং সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'Because Tokio forbids structs with more than 2 fields',
          bn: 'কারণ টোকিওতে ২ টির বেশি ফিল্ডযুক্ত স্ট্রাক্ট ব্যবহার নিষিদ্ধ'
        },
        {
          en: 'Arc is only required when compiling for Windows 95',
          bn: 'Arc কেবল উইন্ডোজ ৯৫-এর জন্য কোড তৈরি করার সময় লাগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Arc (Atomic Reference Counted) shares memory across multi-threaded workers safely.',
        bn: 'মাল্টি-থ্রেডেড সার্ভারে নিরাপদে মেমোরি শেয়ার করতে Arc ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Tokio distributes requests across multiple worker threads. Wrapping shared resources (like SQL connection pools) in Arc allows cheap thread-safe pointer sharing across cores.',
        bn: 'ফলে মেমোরি কপি না করেই প্রতিটি কোর দক্ষতার সাথে কানেকশন ব্যবহার করতে পারে।'
      }
    },
    {
      id: 'docker-multi-stage-minimal-image-ex3',
      kind: 'mcq',
      topic: 'docker-multi-stage-musl-static-binary-footprint',
      question: {
        en: 'How do multi-stage Docker builds achieve production container image footprints measuring under 20 megabytes for Rust microservices?',
        bn: 'মাল্টি-স্টেজ ডকার বিল্ড কীভাবে Rust মাইক্রোসার্ভিসের জন্য ২০ মেগাবাইটের নিচে প্রোডাকশন কন্টেইনার ইমেজ তৈরি করে?'
      },
      options: [
        {
          en: 'The build stage compiles a statically linked, stripped musl binary; the final image stage copies solely that raw binary into a minimal Alpine or scratch container with zero build bloat',
          bn: 'বিল্ড ধাপে একটি স্ট্যাটিকালি লিঙ্কড এবং স্ট্রিপড musl বাইনারি তৈরি হয়; চূড়ান্ত ধাপে কোনো বাড়তি ফাইল ছাড়াই কেবল সেই বাইনারি একটি অতি ক্ষুদ্র Alpine বা scratch কন্টেইনারে রাখা হয়'
        },
        {
          en: 'By compressing the container using 7-Zip with ultra compression',
          bn: '৭-জিপ আল্ট্রা কম্প্রেশন দিয়ে কন্টেইনার কম্প্রেস করে'
        },
        {
          en: 'By removing the Rust compiler while code is running in production',
          bn: 'প্রোডাকশনে কোড চলাকালীন Rust কম্পাইলার মুছে ফেলে'
        },
        {
          en: 'Minimal containers are forbidden in cloud Kubernetes clusters',
          bn: 'ক্লাউড কুবারনেটিস ক্লাস্টারে ছোট কন্টেইনার ব্যবহার নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multi-stage builds discard the compiler and source code, keeping only the stripped static binary.',
        bn: 'ভারী বিল্ড টুল বাদ দিয়ে শুধু তৈরি হওয়া এক্সিকিউটেবল ফাইলটি চূড়ান্ত ইমেজে রাখা হয়।'
      },
      explanation: {
        en: 'Statically linked binaries require no external shared libraries or runtime engines. Placing the binary in an empty scratch container yields tiny, secure, hardened production images.',
        bn: 'অপ্রয়োজনীয় লাইব্রেরি না থাকায় নিরাপত্তার ঝুঁকি কমে এবং নিমিষেই সার্ভারে ডিপ্লয় হয়।'
      }
    },
    {
      id: 'tracing-crate-structured-logging-ex4',
      kind: 'mcq',
      topic: 'tracing-crate-spans-distributed-observability',
      question: {
        en: 'What architectural power does the "tracing" crate provide over standard console "println!" statements in distributed asynchronous systems?',
        bn: 'ডিস্ট্রিবিউটেড অ্যাসিঙ্ক্রোনাস সিস্টেমে সাধারণ "println!"-এর তুলনায় "tracing" ক্রেট কোন স্থাপত্যিক ক্ষমতা প্রদান করে?'
      },
      options: [
        {
          en: 'It structures telemetry into hierarchical, time-tracked spans and contextual events that maintain trace context across asynchronous await suspension points',
          bn: 'এটি স্তরভিত্তিক সময়-শনাক্তকারী স্প্যান এবং প্রাসঙ্গিক ইভেন্টে টেলিমেট্রি সাজায়, যা অ্যাসিঙ্ক await বিরতির মাঝেও ট্রেস আইডি অক্ষুণ্ন রাখে'
        },
        {
          en: 'It draws 3D graphics inside the server terminal',
          bn: 'এটি সার্ভার টার্মিনালের ভেতরে ত্রিমাত্রিক গ্রাফিক্স আঁকে'
        },
        {
          en: 'It translates log messages into 10 foreign languages automatically',
          bn: 'এটি স্বয়ংক্রিয়ভাবে লগ মেসেজগুলোকে ১০ টি বিদেশি ভাষায় অনুবাদ করে'
        },
        {
          en: 'The tracing crate was replaced by raw socket logging in Rust 2021',
          bn: 'Rust ২০২১ সংস্করণে tracing বাদ দিয়ে র সকেট লগিং আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tracing preserves contextual spans across asynchronous suspension points.',
        bn: 'অ্যাসিঙ্ক কোডের জটিল ধাপেও কোন রিকোয়েস্ট কোথায় থেমেছে তা ট্র্যাক রাখা যায়।'
      },
      explanation: {
        en: 'In asynchronous code, multiple tasks interleave concurrently on the same thread. Tracing spans attach context (like user ID and request ID) to log lines, enabling distributed tracing.',
        bn: 'ফলে হাজার হাজার রিকোয়েস্টের ভিড়েও নির্দিষ্ট ব্যবহারকারীর গতিবিধি নির্ভুলভাবে দেখা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-crate-serve',
    title: {
      en: 'Rust Axum & Production Microservices Quiz',
      bn: 'Rust Axum এবং প্রোডাকশন মাইক্রোসার্ভিস কুইজ'
    },
    questions: [
      {
        id: 'quiz-tower-service-builder-middleware-order',
        kind: 'mcq',
        topic: 'tower-service-builder-middleware-stacking-order',
        question: {
          en: 'Why is the sequential order of middleware declared in Tower\'s "ServiceBuilder" critical to server security and performance?',
          bn: 'টাওয়ারের "ServiceBuilder"-এ মিডলওয়্যারের ধারাবাহিক ক্রম সার্ভারের নিরাপত্তা ও পারফরম্যান্সের জন্য কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'Middleware executes top-to-bottom on incoming requests and bottom-to-top on outgoing responses; placing rate limiters before deserializers prevents denial-of-service attacks',
            bn: 'মিডলওয়্যার ইনকামিং রিকোয়েস্টে ওপর থেকে নিচে এবং আউটগোয়িং রেসপন্সে নিচ থেকে ওপরে চলে; ডেসিরিয়ালাইজারের আগে রেট লিমিটার বসালে সার্ভার আক্রমণ থেকে সুরক্ষিত থাকে'
          },
          {
            en: 'Tower middleware order has zero effect on execution flow',
            bn: 'টাওয়ার মিডলওয়্যারের ক্রমের কোড চলার ওপর কোনো প্রভাব নেই'
          },
          {
            en: 'Middleware must always be listed in alphabetical order',
            bn: 'মিডলওয়্যারকে সর্বদা বর্ণানুক্রমিকভাবে সাজিয়ে লিখতে হয়'
          },
          {
            en: 'ServiceBuilder requires exactly 10 layers to compile',
            bn: 'কম্পাইল হতে ServiceBuilder-এ ঠিক ১০ টি লেয়ার থাকতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Early middleware handles protection (rate limiting, timeouts) before expensive parsing.',
          bn: 'ব্যয়বহুল পার্সিং করার আগেই অপ্রয়োজনীয় ট্রাফিক আটকে সার্ভার হালকা রাখা হয়।'
        },
        explanation: {
          en: 'By positioning rate limiting, request validation, and tracing outer to request parsing, bad actors are rejected before burning CPU cycles parsing large JSON bodies.',
          bn: 'ফলে ক্ষতিকর রিকোয়েস্টগুলো শুরুতেই বাদ পড়ে মূল অ্যাপ্লিকেশনের গতি অক্ষুণ্ন থাকে।'
        }
      },
      {
        id: 'quiz-graceful-shutdown-tokio-signal',
        kind: 'mcq',
        topic: 'axum-graceful-shutdown-tokio-signal',
        question: {
          en: 'How does an Axum microservice implement graceful shutdown when receiving a SIGTERM signal in Kubernetes?',
          bn: 'কুবারনেটিসে SIGTERM সংকেত পাওয়ার পর একটি Axum মাইক্রোসার্ভিস কীভাবে গ্রেসফুল শাটডাউন বাস্তবায়ন করে?'
        },
        options: [
          {
            en: 'By binding "axum::serve(...).with_graceful_shutdown(signal)", allowing in-flight requests to complete before closing database connections and terminating the process',
            bn: '"axum::serve(...).with_graceful_shutdown(signal)" ব্যবহার করে, যা বর্তমান রিকোয়েস্টগুলো সম্পন্ন হওয়ার পর ডেটাবেজ কানেকশন বন্ধ করে প্রসেস শেষ করে'
          },
          {
            en: 'By cutting off server power instantly with a hardware switch',
            bn: 'একটি হার্ডওয়্যার সুইচ দিয়ে সার্ভারের বিদ্যুৎ তাৎক্ষণিকভাবে বন্ধ করে দিয়ে'
          },
          {
            en: 'By sending an SMS message to the data center technicians',
            bn: 'ডাটা সেন্টারের টেকনিশিয়ানদের মোবাইলে একটি এসএমএস পাঠিয়ে'
          },
          {
            en: 'Graceful shutdown is impossible in containerized environments',
            bn: 'কন্টেইনারাইজড পরিবেশে গ্রেসফুল শাটডাউন করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'with_graceful_shutdown drains active requests before closing sockets.',
          bn: 'চলমান সব রিকোয়েস্ট সফলভাবে শেষ করার পর শান্তভাবে সার্ভার বন্ধ হয়।'
        },
        explanation: {
          en: 'Graceful shutdown prevents dropped client connections during rolling deployments, draining pending requests and cleanly releasing resources before termination.',
          bn: 'নতুন সংস্করণ ডিপ্লয় করার সময় গ্রাহকদের কোনো রিকোয়েস্ট ড্রপ হয় না।'
        }
      },
      {
        id: 'quiz-sqlx-compile-time-query-verification',
        kind: 'mcq',
        topic: 'sqlx-compile-time-checked-queries',
        question: {
          en: 'What unique architectural benefit does the "SQLx" crate offer to Rust microservice database interactions?',
          bn: 'Rust মাইক্রোসার্ভিস ডাটাবেজ যোগাযোগের ক্ষেত্রে "SQLx" ক্রেট কোন অনন্য স্থাপত্যিক সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It verifies raw SQL queries against a live or cached database schema at compile-time, ensuring zero syntax errors or column type mismatches before deployment',
            bn: 'এটি বিল্ড করার সময়ই লাইভ বা ক্যাশড ডাটাবেজ স্কিমার সাথে র এসকিউএল কোয়েরি মিলিয়ে দেখে, যা ডিপ্লয়ের আগেই কোনো ভুল সিনট্যাক্স বা কলাম টাইপ অসঙ্গতি রোধ করে'
          },
          {
            en: 'It converts SQL databases into static CSV files on disk',
            bn: 'এটি এসকিউএল ডাটাবেজকে ডিস্কে স্ট্যাটিক সিএসভি ফাইলে রূপান্তর করে'
          },
          {
            en: 'It encrypts all database tables using a 10-digit PIN',
            bn: 'এটি ১০-সংখ্যার পিন ব্যবহার করে ডাটাবেজের সব টেবিল এনক্রিপ্ট করে'
          },
          {
            en: 'SQLx was deprecated in modern Rust',
            bn: 'আধুনিক Rust-এ SQLx বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SQLx validates SQL queries at compile-time.',
          bn: 'কোড কম্পাইল করার সময়ই এসকিউএল কোয়েরির নির্ভুলতা প্রমাণ করা হয়।'
        },
        explanation: {
          en: 'Through procedural macros, SQLx connects to your schema during "cargo build", validating SQL syntax and ensuring Rust return types strictly match database column types.',
          bn: 'ফলে ডাটাবেজের নাম বা টাইপ ভুল থাকলে কোড কম্পাইলই হবে না, যা শতভাগ নির্ভরযোগ্যতা দেয়।'
        }
      },
      {
        id: 'quiz-cargo-audit-vulnerability-scanning',
        kind: 'mcq',
        topic: 'cargo-audit-security-vulnerability-detection',
        question: {
          en: 'Why is "cargo audit" integrated into continuous integration (CI) pipelines for enterprise Rust microservices?',
          bn: 'এন্টারপ্রাইজ Rust মাইক্রোসার্ভিসের সিআই (CI) পাইপলাইনে কেন "cargo audit" যুক্ত করা বাধ্যতামূলক করা হয়?'
        },
        options: [
          {
            en: 'It scans the project\'s "Cargo.lock" against the RustSec Advisory Database, immediately flagging crates with known security vulnerabilities (CVEs) or unmaintained dependencies',
            bn: 'এটি RustSec অ্যাডভাইজরি ডাটাবেজের সাথে প্রজেক্টের "Cargo.lock" মিলিয়ে দেখে, যার ফলে নিরাপত্তা দুর্বলতা (CVE) বা অবহেলিত ক্রেট থাকলে সঙ্গে সঙ্গে ধরা পড়ে'
          },
          {
            en: 'It verifies that developers paid their monthly code license dues',
            bn: 'এটি যাচাই করে যে ডেভেলপাররা তাদের মাসিক কোড লাইসেন্স ফি পরিশোধ করেছেন কিনা'
          },
          {
            en: 'It calculates the monetary cost of electricity used by the server',
            bn: 'সার্ভারের ব্যবহৃত বিদ্যুতের আর্থিক খরচ হিসাব করতে এটি লাগে'
          },
          {
            en: 'cargo audit was removed from the Rust toolchain in 2022',
            bn: '২০২২ সালে Rust টুলচেইন থেকে cargo audit বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'cargo audit scans dependencies for published security advisories (CVEs).',
          bn: 'লাইব্রেরিগুলোতে কোনো প্রকাশিত নিরাপত্তা ত্রুটি আছে কিনা তা পরীক্ষা করতে এটি লাগে।'
        },
        explanation: {
          en: 'Automated vulnerability scanning with cargo audit prevents supply chain attacks by failing pull requests whenever a vulnerable transitive dependency is introduced.',
          bn: 'সাপ্লাই চেইন অ্যাটাক প্রতিরোধ করে প্রোডাকশন সিস্টেমকে সর্বদা নিরাপদ রাখতে এটি ভূমিকা রাখে।'
        }
      }
    ]
  }
};
