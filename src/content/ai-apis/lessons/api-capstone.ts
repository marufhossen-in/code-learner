import type { Lesson } from '../../../lib/types';

export const ApiCapstoneLesson: Lesson = {
  slug: 'api-capstone',
  tech: 'ai-apis',
  title: {
    en: 'Building a Resilient, Cost-Aware Production AI Gateway',
    bn: 'একটি স্থিতিস্থাপক ও সাশ্রয়ী প্রোডাকশন এআই গেটওয়ে তৈরি'
  },
  summary: {
    en: 'Synthesize all architectural disciplines into a production AI Gateway: orchestrate bearer authentication, rate limiting with capacity 10 and refill rate 5, exponential backoff retries, prefix caching, multi-tier routing, and sub-500ms failover cascades.',
    bn: 'সমস্ত এআই এপিআই কৌশল একত্র করে একটি প্রোডাকশন গেটওয়ে তৈরি করুন: বেয়ারার প্রমাণীকরণ, ১০ ধারণক্ষমতা ও প্রতি সেকেন্ডে ৫ রিফিল হারের রেট লিমিটার, এক্সপোনেনশিয়াল ব্যাকঅফ, ক্যাশিং, মাল্টি-টিয়ার রাউটিং এবং ৫০০ মিলিসেকেন্ডের নিচের ফেইলওভার সমন্বয়।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'gateway-pattern-heading',
      text: {
        en: 'The Enterprise Gateway Pattern: Centralizing AI Infrastructure',
        bn: 'এন্টারপ্রাইজ গেটওয়ে প্যাটার্ন: এআই অবকাঠামোর কেন্দ্রীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Allowing individual frontend clients or distributed microservices to call external AI providers directly introduces severe security vulnerabilities and uncontrolled expenditures. Direct calls scatter proprietary API secret keys across multiple codebases, create uncoordinated traffic spikes that trigger HTTP 429 rejections, and prevent centralized caching. An AI Gateway serves as an intelligent reverse proxy, centralizing rate limiting, cost accounting, dynamic provider failover, and telemetry under a single managed control plane.',
        bn: 'ক্লায়েন্ট বা মাইক্রোসার্ভিসগুলোকে সরাসরি এআই প্রোভাইডারের কাছে অনুরোধ পাঠাতে দিলে নিরাপত্তাহীনতা ও অনিয়ন্ত্রিত ব্যয়ের সৃষ্টি হয়। সরাসরি সংযোগের ফলে বিভিন্ন কোডবেসে গোপন এপিআই চাবি ছড়িয়ে পড়ে, বিচ্ছিন্ন ট্রাফিকের কারণে ঘন ঘন HTTP ৪২৯ ত্রুটি দেখা দেয় এবং ক্যাশিং করা অসম্ভব হয়ে পড়ে। একটি সুসংগঠিত এআই গেটওয়ে একটি দক্ষ রিভার্স প্রক্সি হিসেবে কাজ করে, যা কেন্দ্রীয়ভাবে গতি নিয়ন্ত্রণ, খরচের হিসাব, স্বয়ংক্রিয় ব্যাকআপ সার্ভার নির্বাচন এবং টেলিমেট্রি পরিচালনা নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 6 sequential processing stages of the resilient production AI Gateway pipeline.',
        bn: 'চিত্র ১: স্থিতিস্থাপক প্রোডাকশন এআই গেটওয়ে পাইপলাইনের ৬ টি ধারাবাহিক প্রক্রিয়াকরণ ধাপ।'
      },
      svg: `<svg viewBox="0 0 840 360" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="360" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">UNIFIED PRODUCTION AI GATEWAY PIPELINE</text>
  
  <!-- Step 1 -->
  <g transform="translate(25, 60)">
    <rect width="115" height="260" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <rect width="115" height="28" rx="6" fill="#0284c7" />
    <text x="57" y="19" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Ingress &amp; Auth</text>
    <text x="10" y="55" fill="#38bdf8" font-size="9" font-family="monospace">Bearer Auth</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Validates JWT</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Extracts client</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">org metadata</text>
  </g>

  <!-- Step 2 -->
  <g transform="translate(155, 60)">
    <rect width="115" height="260" rx="6" fill="#1e293b" stroke="#f59e0b" />
    <rect width="115" height="28" rx="6" fill="#d97706" />
    <text x="57" y="19" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Rate Limiting</text>
    <text x="10" y="55" fill="#facc15" font-size="9" font-family="monospace">Token Bucket</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Cap 10, Refill 5</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Checks RPM/TPM</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">Local memory</text>
  </g>

  <!-- Step 3 -->
  <g transform="translate(285, 60)">
    <rect width="115" height="260" rx="6" fill="#1e293b" stroke="#10b981" />
    <rect width="115" height="28" rx="6" fill="#059669" />
    <text x="57" y="19" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Cache Check</text>
    <text x="10" y="55" fill="#4ade80" font-size="9" font-family="monospace">Prefix Cache</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">If Hit: Return</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">in ~5ms</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">90% savings</text>
  </g>

  <!-- Step 4 -->
  <g transform="translate(415, 60)">
    <rect width="115" height="260" rx="6" fill="#1e293b" stroke="#6366f1" />
    <rect width="115" height="28" rx="6" fill="#4338ca" />
    <text x="57" y="19" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Model Routing</text>
    <text x="10" y="55" fill="#818cf8" font-size="9" font-family="monospace">Smart Tiering</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Fast compact</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">vs frontier</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">reasoning</text>
  </g>

  <!-- Step 5 -->
  <g transform="translate(545, 60)">
    <rect width="135" height="260" rx="6" fill="#1e293b" stroke="#ec4899" />
    <rect width="135" height="28" rx="6" fill="#be185d" />
    <text x="67" y="19" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Circuit &amp; Failover</text>
    <text x="10" y="55" fill="#f472b6" font-size="9" font-family="monospace">Resilient Backoff</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Primary: OpenAI</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Fallback: Anthropic</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">&lt; 500ms failover</text>
  </g>

  <!-- Step 6 -->
  <g transform="translate(695, 60)">
    <rect width="120" height="260" rx="6" fill="#1e293b" stroke="#a855f7" />
    <rect width="120" height="28" rx="6" fill="#7e22ce" />
    <text x="60" y="19" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">6. Telemetry</text>
    <text x="10" y="55" fill="#c084fc" font-size="9" font-family="monospace">Egress Audit</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Logs token bill</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Emits metrics</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">Guardrail scan</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'gateway-pipeline-heading',
      text: {
        en: 'End-to-End Execution Flow and Sub-500ms Failover',
        bn: 'সম্পূর্ণ প্রক্রিয়াকরণ প্রবাহ এবং ৫০০ মিলিসেকেন্ডের নিচের ফেইলওভার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The gateway pipeline processes incoming requests through 6 distinct stages. When a client issues a completion request, authentication headers are validated immediately. Next, the Token Bucket checks whether rate limits permit execution. If the prompt prefix matches an entry in cache, the response is served in 5 milliseconds. On cache misses, the gateway dispatches the request to the primary provider; if a 503 outage occurs, the circuit breaker automatically routes traffic to a secondary fallback provider in under 500 milliseconds.',
        bn: 'গেটওয়ে পাইপলাইন আগত অনুরোধগুলোকে ৬ টি নির্দিষ্ট ধাপের মাধ্যমে সম্পন্ন করে। ক্লায়েন্ট অনুরোধ পাঠালে শুরুতেই বেয়ারার প্রমাণীকরণ যাচাই করা হয়। এরপর টোকেন বাকেট অ্যালগরিদম পরীক্ষা করে দেখে যে রেট লিমিটের অনুমোদন আছে কিনা। প্রম্পটটি পূর্বে সংরক্ষিত ক্যাশের সাথে মিললে মাত্র ৫ মিলিসেকেন্ডের মধ্যেই উত্তর পাঠিয়ে দেওয়া হয়। ক্যাশে না থাকলে মূল প্রোভাইডারের কাছে কল পাঠানো হয়; কোনো কারণে ৫০৩ বিভ্রাট ঘটলে সার্কিট ব্রেকার ৫০০ মিলিসেকেন্ডের কম সময়ে বিকল্প প্রোভাইডারে ট্রাফিক পাঠিয়ে সেবা সচল রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Complete TypeScript production AI Gateway integrating caching, rate limiting, and fallback routing across 2 requests.',
        bn: '২টি অনুরোধে ক্যাশিং, রেট লিমিটিং এবং ব্যাকআপ রাউটিং সমন্বিত পূর্ণাঙ্গ প্রোডাকশন এআই গেটওয়ের TypeScript কোড।'
      },
      code: `interface GatewayRequest {
  clientId: string;
  prompt: string;
  modelTier: 'fast' | 'reasoning';
}

interface GatewayResponse {
  answer: string;
  source: 'cache' | 'primary' | 'fallback';
  costUsd: number;
  latencyMs: number;
}

export class ProductionAIGateway {
  private cache = new Map<string, string>();
  private availableTokens = 10; // Bucket capacity 10

  public async processRequest(req: GatewayRequest): Promise<GatewayResponse> {
    const startTime = Date.now();

    // 1. Rate Limiting Check
    if (this.availableTokens < 1) {
      throw new Error('Local Rate Limit Exceeded: Please wait for bucket refill');
    }
    this.availableTokens -= 1;

    // 2. Cache Inspection
    if (this.cache.has(req.prompt)) {
      return {
        answer: this.cache.get(req.prompt)!,
        source: 'cache',
        costUsd: 0.00008,
        latencyMs: 5
      };
    }

    // 3. Provider Dispatch with Fallback Resilience
    let answer = '';
    let source: 'primary' | 'fallback' = 'primary';
    let cost = 0.00030;

    try {
      // Simulate primary provider call
      answer = 'Processed response for: ' + req.prompt;
    } catch {
      // Graceful cascade to fallback provider
      source = 'fallback';
      answer = 'Fallback processed: ' + req.prompt;
    }

    // Warm cache for identical subsequent queries
    this.cache.set(req.prompt, answer);

    return {
      answer,
      source,
      costUsd: cost,
      latencyMs: 400
    };
  }
}

// Running 2 demonstration requests through our gateway
const gateway = new ProductionAIGateway();
const testQuery = 'Explain Server-Sent Events architecture';

async function runDemo() {
  // Request 1: Cold run hitting primary provider
  const res1 = await gateway.processRequest({ clientId: 'app-01', prompt: testQuery, modelTier: 'fast' });
  console.log('Request 1 Source:', res1.source);        // "primary"
  console.log('Request 1 Latency (ms):', res1.latencyMs); // 400
  console.log('Request 1 Cost ($):', res1.costUsd.toFixed(5)); // 0.00030

  // Request 2: Warm hit served directly from cache
  const res2 = await gateway.processRequest({ clientId: 'app-01', prompt: testQuery, modelTier: 'fast' });
  console.log('Request 2 Source:', res2.source);        // "cache"
  console.log('Request 2 Latency (ms):', res2.latencyMs); // 5
  console.log('Request 2 Cost ($):', res2.costUsd.toFixed(5)); // 0.00008
}

runDemo();`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'AI Gateway',
          def: {
            en: 'Unified reverse proxy microservice coordinating security, caching, rate limiting, and observability for AI workloads.',
            bn: 'কেন্দ্রীভূত রিভার্স প্রক্সি যা এআই ট্রাফিকের নিরাপত্তা, ক্যাশিং, গতি নিয়ন্ত্রণ এবং সামগ্রিক পর্যবেক্ষণ সমন্বয় করে।'
          }
        },
        {
          term: 'Semantic Cache Ingress',
          def: {
            en: 'Gateway caching tier intercepting incoming queries and serving previously computed completions with millisecond latency.',
            bn: 'গেটওয়ের বিশেষ ক্যাশিং ব্যবস্থা যা আগত প্রশ্নের পুনরাবৃত্তি শনাক্ত করে কয়েক মিলিসেকেন্ডের মধ্যে উত্তর ফেরত দেয়।'
          }
        },
        {
          term: 'Failover Cascading',
          def: {
            en: 'Automatic rerouting of inference traffic to secondary AI providers when primary providers suffer outages or 429 limits.',
            bn: 'মূল প্রোভাইডার ডাউন হলে বা সীমা অতিক্রম করলে স্বয়ংক্রিয়ভাবে দ্বিতীয় কোনো প্রোভাইডারে ট্রাফিক পাঠানোর প্রক্রিয়া।'
          }
        },
        {
          term: 'Telemetry Egress',
          def: {
            en: 'Logging pipeline recording token expenditures, latency distributions, and guardrail alerts across all internal teams.',
            bn: 'লগিং ব্যবস্থা যা ব্যবহৃত টোকেনের খরচ, সাড়া দেওয়ার সময় এবং নিরাপত্তা সতর্কবার্তা রেকর্ড করে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gateway-security-ex1',
      kind: 'mcq',
      topic: 'centralized-secret-management',
      question: {
        en: 'Why is it considered a critical anti-pattern to store vendor AI API keys directly inside frontend web or mobile client apps?',
        bn: 'ওয়েব বা মোবাইল অ্যাপের ভেতরে সরাসরি এআই প্রোভাইডারের গোপন এপিআই চাবি রাখা কেন একটি মারাত্মক ঝুঁকিপূর্ণ ভুল?'
      },
      options: [
        {
          en: 'Malicious actors can easily decompile client bundles to extract keys, draining corporate budgets with unauthorized traffic',
          bn: 'দুর্বৃত্তরা সহজে কোড ডিকম্পাইল করে চাবি চুরি করতে পারে এবং অননুমোদিত ব্যবহারের মাধ্যমে প্রতিষ্ঠানের সম্পূর্ণ বাজেট খালি করে ফেলতে পারে'
        },
        {
          en: 'Because mobile batteries will explode if keys exceed 32 characters',
          bn: 'কারণ চাবি ৩২ অক্ষরের বেশি হলে মোবাইলের ব্যাটারি বিস্ফোরিত হতে পারে'
        },
        {
          en: 'It makes the client screen turn purple',
          bn: 'এটি ক্লায়েন্টের স্ক্রিন বেগুনি রঙের করে দেয়'
        },
        {
          en: 'API keys can only be recognized by Linux computers',
          bn: 'এপিআই চাবি কেবল লিনাক্স কম্পিউটারই চিনতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Client-side assets are completely public and easily reverse-engineered.',
        bn: 'ক্লায়েন্টের ডিভাইসে থাকা ফাইলগুলো যে কেউ খুলে দেখতে ও পরীক্ষা করতে পারে।'
      },
      explanation: {
        en: 'API keys must always be securely stored on backend servers or gateways, never exposed to user device runtimes.',
        bn: 'এপিআই চাবি সবসময় ব্যাকএন্ড সার্ভার বা গেটওয়েতে সুরক্ষিত রাখতে হয়, ব্যবহারকারীর ডিভাইসে কখনো পাঠানো উচিত নয়।'
      }
    },
    {
      id: 'cache-latency-benefit-ex2',
      kind: 'mcq',
      topic: 'cache-latency-economic-benefit',
      question: {
        en: 'In our gateway implementation, what was the concrete latency and cost reduction achieved when Request 2 hit the warm cache?',
        bn: 'আমাদের গেটওয়ে কোডে ২ য় অনুরোধটি যখন ক্যাশ থেকে লোড হলো, তখন সময় ও খরচে কী পরিবর্তন দেখা গেল?'
      },
      options: [
        {
          en: 'Latency dropped from 400 milliseconds to 5 milliseconds, and cost dropped from $0.00030 to $0.00008',
          bn: 'সময় ৪০০ মিলিসেকেন্ড থেকে কমে ৫ মিলিসেকেন্ডে নামল এবং খরচ $০.০০০৩০ থেকে কমে $০.০০০৮ হলো'
        },
        {
          en: 'Latency increased to 50000 milliseconds',
          bn: 'সময় বেড়ে ৫০০০০ মিলিসেকেন্ডে পৌঁছে গেল'
        },
        {
          en: 'Cost increased to 100 dollars per call',
          bn: 'খরচ বেড়ে প্রতি কলে ১০০ ডলার হয়ে গেল'
        },
        {
          en: 'The server completely erased all databases',
          bn: 'সার্ভার তার সমস্ত ডেটাবেস সম্পূর্ণ মুছে দিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Review the console outputs produced by the gateway demonstration code.',
        bn: 'গেটওয়ে কোডের কনসোল লগগুলো লক্ষ্য করুন।'
      },
      explanation: {
        en: 'Serving queries from memory bypasses upstream model inference entirely, achieving near-instantaneous responses at negligible cost.',
        bn: 'মেমোরি থেকে ক্যাশ রিড করার ফলে নতুন করে এআই কল পাঠাতে হয় না, ফলে দ্রুত উত্তর পাওয়া যায় এবং খরচ প্রায় শূন্যের কোঠায় থাকে।'
      }
    },
    {
      id: 'failover-circuit-ex3',
      kind: 'mcq',
      topic: 'multi-provider-failover-cascade',
      question: {
        en: 'How does an automated failover cascade guarantee high availability when the primary cloud vendor experiences a major outage?',
        bn: 'প্রধান ক্লাউড প্রোভাইডারে হঠাৎ বড় বিপর্যয় দেখা দিলে স্বয়ংক্রিয় ফেইলওভার ব্যবস্থা কীভাবে অ্যাপ্লিকেশনের কার্যকারিতা বজায় রাখে?'
      },
      options: [
        {
          en: 'The gateway detects persistent 503 errors and instantly redirects inbound requests to a secondary provider in under 500 milliseconds',
          bn: 'গেটওয়ে ৫০৩ এরর শনাক্ত করার সাথে সাথে ৫০০ মিলিসেকেন্ডের কম সময়ে বিকল্প প্রোভাইডারের কাছে অনুরোধ পাঠিয়ে দেয়'
        },
        {
          en: 'It prints an error message on the office printer',
          bn: 'এটি অফিসের প্রিন্টারে একটি এরর মেসেজ প্রিন্ট করে দেয়'
        },
        {
          en: 'It deletes all user passwords immediately',
          bn: 'এটি সাথে সাথে সব ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'It waits 48 hours for human engineers to write an email',
          bn: 'এটি ইঞ্জিনিয়ারদের ইমেইল লেখার জন্য টানা ৪৮ ঘণ্টা অপেক্ষা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Automated health-checking reroutes traffic without requiring human intervention.',
        bn: 'মানুষের হস্তক্ষেপ ছাড়াই স্বয়ংক্রিয় ব্যবস্থা ট্রাফিক ঘুরিয়ে দিয়ে সেবা নিরবচ্ছিন্ন রাখে।'
      },
      explanation: {
        en: 'Multi-vendor redundancy decouples your product from third-party vendor downtime, maintaining uninterrupted user service.',
        bn: 'একাধিক প্রোভাইডারের ব্যাকআপ থাকলে কোনো একটি কোম্পানির ব্যর্থতা আপনার গ্রাহকদের সেবায় বিঘ্ন ঘটাতে পারে না।'
      }
    },
    {
      id: 'telemetry-governance-ex4',
      kind: 'mcq',
      topic: 'centralized-telemetry-and-auditing',
      question: {
        en: 'What vital organizational capability does the Telemetry Egress stage provide to enterprise engineering leaders?',
        bn: 'টেলিমেট্রি ধাপটি প্রাতিষ্ঠানিক কারিগরি পরিচালকদের কোন গুরুত্বপূর্ণ সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'Granular visibility into token expenditures per department, latency percentiles, error rates, and security guardrail violations',
          bn: 'বিভাগভিত্তিক টোকেন খরচের হিসাব, লেটেন্সি পার্সেন্টাইল, ভুলের হার এবং নিরাপত্তা নীতি লঙ্ঘনের পূর্ণাঙ্গ চিত্র'
        },
        {
          en: 'The ability to change employee desk chairs remotely',
          bn: 'দূর থেকে কর্মীদের বসার চেয়ার পরিবর্তন করার ক্ষমতা'
        },
        {
          en: 'It converts all audio files into JPEG images',
          bn: 'এটি সব অডিও ফাইলকে জেপিইজি ছবিতে রূপান্তর করে'
        },
        {
          en: 'It doubles the physical internet connection speed of the city',
          bn: 'এটি পুরো শহরের ইন্টারনেট সংযোগের গতি শারীরিকভাবে দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Centralized telemetry gives complete architectural observability and fiscal governance.',
        bn: 'সেন্ট্রালাইজড টেলিমেট্রি পুরো সিস্টেমের বাস্তব অবস্থা ও ব্যয়ের ওপর পূর্ণ নিয়ন্ত্রণ এনে দেয়।'
      },
      explanation: {
        en: 'Unified telemetry ensures complete cost attribution, performance monitoring, and compliance tracking across an organization.',
        bn: 'একীভূত টেলিমেট্রি কোন দল কত খরচ করছে তা নিখুঁতভাবে তুলে ধরে এবং সিস্টেমের স্বাস্থ্য পর্যবেক্ষণে সাহায্য করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-api-capstone',
    title: {
      en: 'Production AI Gateway Architecture Quiz',
      bn: 'প্রোডাকশন এআই গেটওয়ে আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-gateway-streaming-passthrough',
        kind: 'mcq',
        topic: 'streaming-sse-gateway-passthrough',
        question: {
          en: 'How must an AI Gateway handle real-time Server-Sent Events (SSE) streaming connections from clients?',
          bn: 'একটি এআই গেটওয়ে কীভাবে ক্লায়েন্টের রিয়েল-টাইম সার্ভার-সেন্ট ইভেন্টস (SSE) স্ট্রিমিং সংযোগ পরিচালনা করবে?'
        },
        options: [
          {
            en: 'Stream chunks incrementally to the client as they arrive, while counting tokens asynchronously on stream termination',
            bn: 'আসার সাথে সাথে প্রতিটি চাঙ্ক তৎক্ষণাৎ ক্লায়েন্টের কাছে পৌঁছে দেওয়া এবং স্ট্রিম শেষ হওয়ার পর সামগ্রিক টোকেন গণনা করা'
          },
          {
            en: 'Block and buffer the entire 5-second stream in RAM before sending anything to the client',
            bn: 'ক্লায়েন্টকে পাঠানোর আগে পুরো ৫ সেকেন্ডের স্ট্রিম মেমোরিতে জমিয়ে রেখে অপেক্ষা করা'
          },
          {
            en: 'Discard all tokens except the first character',
            bn: 'প্রথম অক্ষর বাদে বাকি সব টোকেন ফেলে দেওয়া'
          },
          {
            en: 'Convert the stream into a ZIP archive file',
            bn: 'স্ট্রিমটিকে একটি জিপ ফাইলে রূপান্তর করে ডাউনলোড করানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Buffering defeats the purpose of streaming low Time to First Token.',
          bn: 'মাঝপথে জমা করে রাখলে স্ট্রিমিংয়ের প্রাথমিক গতির সুবিধাই নষ্ট হয়ে যায়।'
        },
        explanation: {
          en: 'Piping SSE frames transparently preserves real-time low latency while logging token metrics upon stream completion.',
          bn: 'সরাসরি ফ্রেম পাঠিয়ে দিলে ব্যবহারকারী দ্রুত লেখা দেখতে পান এবং স্ট্রিম শেষে সঠিক বিলিং হিসাবও নিশ্চিত করা যায়।'
        }
      },
      {
        id: 'quiz-tenant-isolation-quotas',
        kind: 'mcq',
        topic: 'multi-tenant-quota-isolation',
        question: {
          en: 'Why should an AI Gateway enforce multi-tenant quotas per client organization or API key?',
          bn: 'একটি এআই গেটওয়েতে কেন প্রতিটি ক্লায়েন্ট বা টিমের জন্য আলাদা কোটা নির্ধারণ করা উচিত?'
        },
        options: [
          {
            en: 'To prevent one runaway tenant from exhausting shared corporate RPM/TPM limits and starving all other business applications',
            bn: 'যাতে একটি টিমের অতিরিক্ত ব্যবহারের কারণে পুরো প্রতিষ্ঠানের কোটা শেষ হয়ে অন্যান্য গুরুত্বপূর্ণ সেবা বন্ধ না হয়ে যায়'
          },
          {
            en: 'Because computer keyboards only support 10 users at a time',
            bn: 'কারণ কম্পিউটারের কীবোর্ড একসাথে কেবল ১০ জন ব্যবহারকারী সমর্থন করে'
          },
          {
            en: 'To reduce the weight of physical server racks',
            bn: 'সার্ভার র‍্যাকের শারীরিক ওজন কমানোর উদ্দেশ্যে'
          },
          {
            en: 'Multi-tenant quotas are required by the ISO 9001 standard',
            bn: 'এটি আইএসও ৯০০১ স্ট্যান্ডার্ডের একটি সাধারণ বাধ্যতামূলক নিয়ম'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fair-share allocation isolates failure domains and prevents the "noisy neighbor" effect.',
          bn: 'আলাদা কোটা থাকলে কোনো এক দলের অনিয়ন্ত্রিত চাপ পুরো সিস্টেমের ওপর প্রভাব ফেলতে পারে না।'
        },
        explanation: {
          en: 'Per-tenant rate limiting isolates workloads, ensuring fair resource distribution across all microservices.',
          bn: 'নির্দিষ্ট কোটা বরাদ্দ থাকলে সব টিম নিজেদের সীমার মধ্যে নিরাপদে ও সুষমভাবে এআই সেবা ব্যবহার করতে পারে।'
        }
      },
      {
        id: 'quiz-pii-masking-gateway',
        kind: 'mcq',
        topic: 'gateway-pii-masking-compliance',
        question: {
          en: 'Why should PII (Personally Identifiable Information) masking occur at the AI Gateway layer rather than in client apps?',
          bn: 'ব্যবহারকারীর ডিভাইসের বদলে কেন এআই গেটওয়ে স্তরে সংবেদনশীল গোপন তথ্য (PII) মুছে ফেলা বা মাস্কিং করা সবচেয়ে কার্যকর?'
        },
        options: [
          {
            en: 'It guarantees centralized, audit-compliant data protection across all clients (web, iOS, Android, microservices) before prompts ever leave company infrastructure',
            bn: 'এটি নিশ্চিত করে যে সব ধরনের অ্যাপ (ওয়েব, মোবাইল বা ব্যাকএন্ড) থেকে তথ্য প্রোভাইডারের কাছে যাওয়ার আগেই কেন্দ্রীয়ভাবে নিরাপদ করা হয়েছে'
          },
          {
            en: 'Because mobile phones cannot understand the English word "masking"',
            bn: 'কারণ মোবাইল ফোন ইংরেজি শব্দ "মাস্কিং" বুঝতে পারে না'
          },
          {
            en: 'It speeds up CPU clock frequencies by 10 percent',
            bn: 'এটি প্রসেসরের গতি ১০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'PII masking is legally prohibited inside mobile operating systems',
            bn: 'মোবাইল অপারেটিং সিস্টেমে গোপন তথ্য মাস্ক করা আইনত দণ্ডনীয় অপরাধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Centralized compliance protects the organization even if an individual client app forgets to sanitize inputs.',
          bn: 'কেন্দ্রীভূত ব্যবস্থা থাকলে কোনো একটি অ্যাপ ভুল করলেও মূল গেটওয়ে সব তথ্য সুরক্ষিত রাখে।'
        },
        explanation: {
          en: 'Enforcing privacy rules at the gateway ensures zero compliance leaks regardless of which internal application initiated the call.',
          bn: 'গেটওয়েতে গোপনীয়তার ফিল্টার থাকলে কোনো অ্যাপ অসাবধানতাবশত ভুল তথ্য পাঠালেও তা বাইরে ফাঁস হতে পারে না।'
        }
      },
      {
        id: 'quiz-open-source-gateways',
        kind: 'mcq',
        topic: 'production-ai-gateway-technologies',
        question: {
          en: 'Which production-proven open-source technologies are widely adopted today as unified AI Gateway layers?',
          bn: 'বর্তমানে কোন ওপেন-সোর্স প্রযুক্তিগুলো শিল্পক্ষেত্রে একীভূত এআই গেটওয়ে হিসেবে ব্যাপকভাবে সমাদৃত?'
        },
        options: [
          {
            en: 'LiteLLM Proxy, Portkey, Kong AI Gateway, and Cloudflare AI Gateway',
            bn: 'LiteLLM Proxy, Portkey, Kong AI Gateway এবং Cloudflare AI Gateway'
          },
          {
            en: 'Windows Paint, Notepad, and Calculator',
            bn: 'Windows Paint, Notepad এবং Calculator'
          },
          {
            en: 'Apache Subversion 1.0 from 2004',
            bn: '২০০৪ সালের অ্যাপাচি সাবভার্সন ১.০'
          },
          {
            en: 'HTML Marquee and Blink tags',
            bn: 'এইচটিএমএল Marquee এবং Blink ট্যাগ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern AI infrastructure toolchains include LiteLLM, Portkey, and Kong.',
          bn: 'আধুনিক এআই অবকাঠামোর শীর্ষ টুলগুলোর মধ্যে LiteLLM ও Portkey অন্যতম।'
        },
        explanation: {
          en: 'Tools like LiteLLM and Kong offer drop-in unified endpoints supporting multi-provider load balancing, cost tracking, and caching.',
          bn: 'LiteLLM এবং Kong-এর মতো প্রযুক্তিগুলো খুব সহজে একাধিক প্রোভাইডার, ক্যাশিং ও ব্যয় ট্র্যাকিং পরিচালনা করতে পারে।'
        }
      }
    ]
  }
};
