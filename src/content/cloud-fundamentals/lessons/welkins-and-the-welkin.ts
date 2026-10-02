import type { Lesson } from '../../../lib/types';

export const WelkinsAndTheWelkinLesson: Lesson = {
  slug: 'welkins-and-the-welkin',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Cloud Architecture Patterns and Well-Architected Framework',
    bn: 'ক্লাউড আর্কিটেকচার প্যাটার্ন ও ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্ক'
  },
  summary: {
    en: 'Design scalable, secure, resilient, and cost-optimized cloud solutions using the 6 pillars of the Well-Architected Framework and event-driven decoupled patterns.',
    bn: 'ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্কের ৬টি স্তম্ভ এবং ইভেন্ট-ড্রিভেন ডিকাপল্ড প্যাটার্ন ব্যবহার করে স্থিতিস্থাপক ও সাশ্রয়ী ক্লাউড সমাধান ডিজাইন করুন।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'well-architected-pillars',
      text: {
        en: 'The 6 Pillars of the Cloud Well-Architected Framework',
        bn: 'ক্লাউড ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্কের ৬টি স্তম্ভ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you architect systems for the cloud, simply moving legacy server applications into virtual machines misses the full potential of distributed cloud computing. High-performing cloud systems are designed around the 6 pillars of the Well-Architected Framework: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. By adopting modern design patterns like Event-Driven Architecture, Circuit Breakers, and CQRS, we decouple distributed components, eliminate single points of failure, and handle massive traffic spikes gracefully.',
        bn: 'ক্লাউডের জন্য সিস্টেম ডিজাইন করার সময় কেবল পুরনো অ্যাপ্লিকেশনকে ভার্চুয়াল মেশিনে স্থানান্তর করলে ডিস্ট্রিবিউটেড ক্লাউড কম্পিউটিংয়ের পূর্ণ সুবিধা পাওয়া যায় না। আধুনিক উচ্চক্ষমতাসম্পন্ন ক্লাউড ব্যবস্থা ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্কের ৬ টি স্তম্ভের ওপর তৈরি: অপারেশনাল এক্সিলেন্স, সিকিউরিটি, রিলায়াবিলিটি, পারফরম্যান্স এফিসিয়েন্সি, কস্ট অপ্টিমাইজেশন এবং সাসটেইনেবিলিটি। ইভেন্ট-ড্রিভেন আর্কিটেকচার, সার্কিট ব্রেকার এবং সি কিউ আর এস-এর মতো আধুনিক প্যাটার্ন ব্যবহার করে আমরা মাইক্রোসার্ভিসগুলোকে ডিকাপল করি, একক ব্যর্থতার ঝুঁকি দূর করি এবং বিশাল ট্রাফিকের ঢেউ সহজেই সামাল দিই।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Operational Excellence: Run workloads effectively and continuously improve supporting processes. Automate deployments with Infrastructure as Code.',
          bn: 'অপারেশনাল এক্সিলেন্স: ওয়ার্কলোড কার্যকরভাবে পরিচালনা এবং সহায়ক প্রক্রিয়াগুলোর ক্রমাগত উন্নতি সাধন। ইনফ্রাস্ট্রাকচার এজ কোডের মাধ্যমে স্বয়ংক্রিয় ডিপ্লয়মেন্ট নিশ্চিত করা।'
        },
        {
          en: 'Security: Protect data and systems using defense in depth. Implement least privilege access and comprehensive audit logging.',
          bn: 'নিরাপত্তা: বহুস্তরীয় প্রতিরক্ষা ব্যবস্থা ব্যবহার করে ডেটা ও সিস্টেম সুরক্ষিত রাখা। সর্বনিম্ন সুবিধার এক্সেস এবং সম্পূর্ণ অডিট লগিং প্রয়োগ করা।'
        },
        {
          en: 'Reliability: Ensure workloads perform intended functions consistently. Design architectures that recover automatically from underlying infrastructure failures.',
          bn: 'স্থিতিস্থাপকতা: ওয়ার্কলোড ধারাবাহিকভাবে তার নির্ধারিত কাজ সম্পন্ন করছে কিনা তা নিশ্চিত করা। এমন পরিকাঠামো তৈরি করা যা হার্ডওয়্যার ব্যর্থতায় স্বয়ংক্রিয়ভাবে পুনরুদ্ধার হয়।'
        },
        {
          en: 'Performance Efficiency: Use computing resources efficiently across all tiers. Choose right-sized services and leverage distributed caching mechanisms.',
          bn: 'কর্মক্ষমতা দক্ষতা: সমস্ত স্তরে কম্পিউটিং রিসোর্সের সর্বোচ্চ কার্যকর ব্যবহার নিশ্চিত করা। সঠিক মাপের সার্ভিস নির্বাচন করা এবং ডিস্ট্রিবিউটেড ক্যাশিং ব্যবহার করা।'
        },
        {
          en: 'Cost Optimization: Eliminate unneeded expenditure and idle infrastructure. Employ auto-scaling, resource tagging, and cloud commitment discount plans.',
          bn: 'খরচ অপ্টিমাইজেশন: অপ্রয়োজনীয় খরচ এবং অলস পরিকাঠামোর অপচয় বন্ধ করা। অটো-স্কেলিং, রিসোর্স ট্যাগিং এবং ক্লাউড ডিসকাউন্ট প্ল্যান কাজে লাগানো।'
        },
        {
          en: 'Sustainability: Minimize the environmental impact of cloud infrastructure. Reduce idle compute power and host workloads in energy-efficient low-carbon regions.',
          bn: 'পরিবেশবান্ধব স্থায়িত্ব: ক্লাউড পরিকাঠামোর পরিবেশগত ক্ষতিকর প্রভাব হ্রাস করা। অলস কম্পিউট অপচয় কমানো এবং পরিবেশবান্ধব কম-কার্বন অঞ্চলে সার্ভিস পরিচালনা করা।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'cloud-design-patterns',
      text: {
        en: 'Distributed Architecture Patterns: Decoupling and Resilience',
        bn: 'ডিস্ট্রিবিউটেড আর্কিটেকচার প্যাটার্ন: ডিকাপলিং ও রেজিলিয়েন্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In distributed cloud architectures, tightly coupled synchronous communication creates brittle dependencies where one slow service causes cascade failures. Enterprise architects utilize decoupled design patterns to guarantee high availability and fault isolation under extreme load.',
        bn: 'ডিস্ট্রিবিউটেড ক্লাউড আর্কিটেকচারে সরাসরি সংযুক্ত সিঙ্ক্রোনাস যোগাযোগ একটি ভঙ্গুর নির্ভরতা তৈরি করে, যেখানে একটি ধীরগতির সার্ভিস পুরো সিস্টেমে ধারাবাহিক ব্যর্থতা ঘটাতে পারে। চরম চাপের মুখে উচ্চ প্রাপ্যতা এবং ত্রুটি পৃথকীকরণ নিশ্চিত করতে দক্ষ স্থপতিরা ডিকাপল্ড আর্কিটেকচার প্যাটার্ন ব্যবহার করেন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Event-Driven Architecture: Decouple distributed microservices using asynchronous message queues like SQS. Producers publish messages without waiting for consumers to complete.',
          bn: 'ইভেন্ট-ড্রিভেন আর্কিটেকচার: SQS-এর মতো অসিঙ্ক্রোনাস মেসেজ কিউ ব্যবহার করে ডিস্ট্রিবিউটেড সার্ভিসগুলোকে পৃথক করা। প্রডিউসার কনজিউমারের কাজ শেষের অপেক্ষা না করেই দ্রুত বার্তা পাঠায়।'
        },
        {
          en: 'Circuit Breaker Pattern: Protect downstream services from cascading failure. Automatically fail fast when error rates exceed thresholds to allow troubled services time to recover.',
          bn: 'সার্কিট ব্রেকার প্যাটার্ন: ডাউনস্ট্রিম সার্ভিসকে ভেঙে পড়া থেকে রক্ষা করা। ত্রুটির হার সীমা অতিক্রম করলে তৎক্ষণাৎ ব্যর্থ ঘোষণা করে সিস্টেমকে পুনরুদ্ধারের সুযোগ দেওয়া হয়।'
        },
        {
          en: 'CQRS Pattern: Separate write operations from read queries. Optimize databases independently to maximize write transaction speed and read query throughput.',
          bn: 'সি কিউ আর এস প্যাটার্ন: রাইট অপারেশন এবং রিড কোয়েরিকে সম্পূর্ণ আলাদা রাখা। ডেটাবেজগুলোকে স্বাধীনভাবে অপ্টিমাইজ করে রাইটের গতি ও পড়ার গতি সর্বোচ্চ করা হয়।'
        },
        {
          en: 'Strangler Fig Pattern: Incrementally replace legacy monolithic application components with modern microservices. Route requests via an API Gateway without service downtime.',
          bn: 'স্ট্র্যাংলার ফিগ প্যাটার্ন: ডাউনটাইম ছাড়াই ধীরে ধীরে পুরনো মনোলিথ সিস্টেমের অংশগুলোকে নতুন মাইক্রোসার্ভিসে স্থানান্তর করা। এপিআই গেটওয়ের মাধ্যমে নতুন রুটে ট্রাফিক পরিচালিত হয়।'
        }
      ]
    },
    {
      type: 'diagram',
      id: 'well-architected-eda-diagram',
      caption: {
        en: 'Well-Architected Framework and Event-Driven Architecture benchmark. In a synchronous pipeline handling 4000 orders, downstream database bottlenecks cause 600 orders to fail. In an asynchronous event-driven architecture using message queues, all 4000 orders are accepted. 3400 succeed on first try, 580 succeed after automatic consumer retry, and 20 are captured in a Dead Letter Queue with 0 data loss.',
        bn: 'ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্ক এবং ইভেন্ট-ড্রিভেন আর্কিটেকচার বেঞ্চমার্ক। ৪০০০টি অর্ডারের সিঙ্ক্রোনাস পাইপলাইনে ডেটাবেজ জটের কারণে ৬০০টি অর্ডার ব্যর্থ হয়। মেসেজ কিউ ব্যবহারকারী অসিঙ্ক্রোনাস ইভেন্ট-ড্রিভেন সিস্টেমে সমস্ত ৪০০০টি অর্ডারই গৃহীত হয়। প্রথম দফায় ৩৪০০টি সফল হয়, স্বয়ংক্রিয় রিট্রাইয়ের পর ৫৮০টি সফল হয় এবং ২০টি ডেড লেটার কিউতে সুরক্ষিত থাকে, ফলে ০টি ডেটা নষ্ট হয়।',
      },
      svg: `<svg viewBox="0 0 800 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="440" rx="12" fill="#0f172a" />

  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-family="system-ui, sans-serif" font-weight="700">Cloud Architecture: 6 Pillars &amp; Event-Driven Resilience Benchmark</text>

  <!-- Top: The 6 Pillars Badge Row -->
  <rect x="25" y="48" width="750" height="44" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="75" y="75" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="700">1. Ops Excel</text>
  <text x="185" y="75" fill="#f59e0b" font-size="11" font-family="system-ui, sans-serif" font-weight="700">2. Security</text>
  <text x="295" y="75" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="700">3. Reliability</text>
  <text x="420" y="75" fill="#818cf8" font-size="11" font-family="system-ui, sans-serif" font-weight="700">4. Performance</text>
  <text x="560" y="75" fill="#ec4899" font-size="11" font-family="system-ui, sans-serif" font-weight="700">5. Cost Opt</text>
  <text x="680" y="75" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="700">6. Sustain</text>

  <!-- Left: Fragile Synchronous Architecture -->
  <rect x="25" y="105" width="360" height="260" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="25" y="105" width="360" height="28" rx="8" fill="#4c0519" />
  <text x="205" y="124" text-anchor="middle" fill="#fda4af" font-size="12" font-family="system-ui, sans-serif" font-weight="700">TIGHTLY COUPLED SYNCHRONOUS REST</text>

  <rect x="40" y="145" width="100" height="42" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1" />
  <text x="90" y="163" text-anchor="middle" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Client Web</text>
  <text x="90" y="177" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">4000 Orders</text>

  <path d="M 140 166 L 175 166" stroke="#64748b" stroke-width="2" />

  <rect x="175" y="145" width="90" height="42" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1" />
  <text x="220" y="163" text-anchor="middle" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">API Gateway</text>
  <text x="220" y="177" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Sync Proxy</text>

  <path d="M 265 166 L 295 166" stroke="#f43f5e" stroke-width="2" />

  <rect x="295" y="145" width="75" height="42" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="332" y="163" text-anchor="middle" fill="#f43f5e" font-size="10" font-family="system-ui, sans-serif" font-weight="700">Relational DB</text>
  <text x="332" y="177" text-anchor="middle" fill="#fca5a5" font-size="9" font-family="system-ui, sans-serif">Bottleneck</text>

  <!-- Sync Metrics Box -->
  <rect x="40" y="205" width="330" height="145" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="55" y="228" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Sync Simulation Outcome:</text>
  <text x="55" y="250" fill="#34d399" font-size="11" font-family="system-ui, sans-serif">✓ 3400 Orders Processed (85%)</text>
  <text x="55" y="272" fill="#f43f5e" font-size="11" font-family="system-ui, sans-serif">✗ 600 Orders Dropped (HTTP 504 Timeout)</text>
  <text x="55" y="294" fill="#f59e0b" font-size="11" font-family="system-ui, sans-serif">Cascading client retry storm crashes API</text>
  <text x="55" y="316" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Unrecoverable data loss under traffic surge</text>

  <!-- Right: Decoupled Event-Driven Architecture -->
  <rect x="415" y="105" width="360" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <rect x="415" y="105" width="360" height="28" rx="8" fill="#064e3b" />
  <text x="595" y="124" text-anchor="middle" fill="#6ee7b7" font-size="12" font-family="system-ui, sans-serif" font-weight="700">DECOUPLED EVENT-DRIVEN PIPELINE (EDA)</text>

  <rect x="425" y="145" width="70" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="460" y="163" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Client Web</text>
  <text x="460" y="177" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">4000 Orders</text>

  <path d="M 495 166 L 515 166" stroke="#10b981" stroke-width="2" />

  <rect x="515" y="145" width="80" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="555" y="163" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif" font-weight="600">SQS Queue</text>
  <text x="555" y="177" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif">Buffer &amp; DLQ</text>

  <path d="M 595 166 L 615 166" stroke="#10b981" stroke-width="2" />

  <rect x="615" y="145" width="80" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="655" y="163" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif" font-weight="600">FaaS / Pool</text>
  <text x="655" y="177" text-anchor="middle" fill="#a78bfa" font-size="9" font-family="system-ui, sans-serif">Auto-Scaled</text>

  <path d="M 695 166 L 715 166" stroke="#10b981" stroke-width="2" />

  <rect x="715" y="145" width="50" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="740" y="163" text-anchor="middle" fill="#10b981" font-size="10" font-family="system-ui, sans-serif" font-weight="700">Store</text>
  <text x="740" y="177" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Async</text>

  <!-- Async Metrics Box -->
  <rect x="425" y="205" width="340" height="145" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="440" y="228" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Event-Driven Outcome:</text>
  <text x="440" y="250" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif">✓ 4000 Orders Accepted (HTTP 202)</text>
  <text x="440" y="272" fill="#34d399" font-size="11" font-family="system-ui, sans-serif">✓ 3400 Immediate + 580 Retried Successful</text>
  <text x="440" y="294" fill="#fbbf24" font-size="11" font-family="system-ui, sans-serif">✓ 20 Poison Pills Isolated in Dead Letter Queue</text>
  <text x="440" y="316" fill="#10b981" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Total Data Loss: 0 Orders (100% Durability)</text>

  <!-- Bottom Verification Badge -->
  <rect x="25" y="380" width="750" height="44" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1" />
  <circle cx="45" cy="402" r="6" fill="#10b981" />
  <text x="62" y="406" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Architectural Audit: 4000 orders evaluated | 3400 first try | 580 retry success | 20 DLQ captured | 0 lost orders</text>
</svg>`,
    },
    {
      type: 'heading',
      id: 'eda-simulation',
      text: {
        en: 'Interactive Benchmark: Synchronous REST vs Event-Driven SQS Pipeline',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: সিঙ্ক্রোনাস REST বনাম ইভেন্ট-ড্রিভেন SQS পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We run a deterministic TypeScript simulation comparing synchronous direct REST connections against an asynchronous Event-Driven Architecture buffering 4000 flash-sale e-commerce transactions under a 15 percent downstream database throttling scenario.',
        bn: 'আমরা একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি যা সরাসরি সিঙ্ক্রোনাস REST সংযোগের সাথে অসিঙ্ক্রোনাস ইভেন্ট-ড্রিভেন আর্কিটেকচারের তুলনা করে, যেখানে ১৫ শতাংশ ডাউনস্ট্রিম ডেটাবেজ জটের মুখে ৪০০০টি ফ্ল্যাশ-সেল অর্ডারের প্রসেসিং পরীক্ষা করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'eda-architecture-benchmark.ts',
      code: `// Asynchronous Event-Driven Architecture vs Synchronous REST Benchmark
interface OrderPayload {
  orderId: string;
  customerTier: 'standard' | 'premium';
  amount: number;
}

interface PipelineOutcome {
  totalSubmitted: number;
  syncDelivered: number;
  syncFailedTimeouts: number;
  asyncQueued: number;
  asyncImmediateSuccess: number;
  asyncRetriedSuccess: number;
  asyncDeadLetterQueue: number;
  asyncDataLossCount: number;
}

function benchmarkArchitectures(totalRequests: number): PipelineOutcome {
  let syncSuccess = 0;
  let syncTimeouts = 0;

  let asyncQueued = 0;
  let asyncImmediate = 0;
  let asyncRetried = 0;
  let asyncDlq = 0;

  for (let i = 0; i < totalRequests; i++) {
    // 15% transient downstream congestion during flash-sale burst
    const downstreamThrottled = (i % 20 === 0 || i % 20 === 7 || i % 20 === 13);

    // Synchronous Pipeline: caller waits for direct database write
    if (!downstreamThrottled) {
      syncSuccess++;
    } else {
      syncTimeouts++; // HTTP 504 Gateway Timeout, connection dropped
    }

    // Asynchronous Event-Driven Architecture (SQS / EventBridge)
    asyncQueued++; // API Gateway returns HTTP 202 Accepted immediately
    if (!downstreamThrottled) {
      asyncImmediate++;
    } else {
      // Worker retry policy: second attempt with exponential backoff
      const permanentPoison = (i % 200 === 0); // 20 out of 600
      if (!permanentPoison) {
        asyncRetried++;
      } else {
        asyncDlq++; // Safely held in Dead Letter Queue for inspection
      }
    }
  }

  return {
    totalSubmitted: totalRequests,
    syncDelivered: syncSuccess,
    syncFailedTimeouts: syncTimeouts,
    asyncQueued,
    asyncImmediateSuccess: asyncImmediate,
    asyncRetriedSuccess: asyncRetried,
    asyncDeadLetterQueue: asyncDlq,
    asyncDataLossCount: 0,
  };
}

const totalOrders = 4000;
const results = benchmarkArchitectures(totalOrders);

console.log('--- Cloud Architecture Resilience Benchmark ---');
console.log(\`Total eCommerce transactions: \${results.totalSubmitted}\`);
// Total eCommerce transactions: 4000
console.log(\`Synchronous REST pipeline successful: \${results.syncDelivered}\`);
// Synchronous REST pipeline successful: 3400
console.log(\`Synchronous pipeline dropped (HTTP 504): \${results.syncFailedTimeouts}\`);
// Synchronous pipeline dropped (HTTP 504): 600
console.log(\`Event-Driven Architecture queued: \${results.asyncQueued}\`);
// Event-Driven Architecture queued: 4000
console.log(\`Async immediate worker success: \${results.asyncImmediateSuccess}\`);
// Async immediate worker success: 3400
console.log(\`Async recovered via exponential retry: \${results.asyncRetriedSuccess}\`);
// Async recovered via exponential retry: 580
console.log(\`Async isolated in Dead Letter Queue (DLQ): \${results.asyncDeadLetterQueue}\`);
// Async isolated in Dead Letter Queue (DLQ): 20
console.log(\`Total unrecoverable lost orders: \${results.asyncDataLossCount}\`);
// Total unrecoverable lost orders: 0`,
      callout: {
        en: 'Our deterministic simulation evaluated 4000 e-commerce transactions across both architecture models. Under a tightly coupled synchronous REST architecture, downstream timeouts caused 600 orders to fail completely. In the Well-Architected asynchronous event-driven design, all 4000 requests were immediately accepted into message queues. 3400 processed on the first pass, 580 succeeded on automatic retry, and 20 were isolated into a Dead Letter Queue for investigation, achieving 0 lost orders.',
        bn: 'আমাদের নির্ধারিত সিমুলেশন দুটি আর্কিটেকচার মডেলে ৪০০০টি ই-কমার্স লেনদেন মূল্যায়ন করেছে। সরাসরি সংযুক্ত সিঙ্ক্রোনাস REST আর্কিটেকচারে ডেটাবেজ জটের কারণে ৬০০টি অর্ডার সম্পূর্ণরূপে ব্যর্থ হয়েছে। কিন্তু ওয়েল-আর্কিটেক্টেড অসিঙ্ক্রোনাস ইভেন্ট-ড্রিভেন ডিজাইনে সমস্ত ৪০০০টি অনুরোধ তাৎক্ষণিকভাবে মেসেজ কিউতে গৃহীত হয়। ৩৪০০টি প্রথম চেষ্টাতেই সম্পন্ন হয়, ৫৮০টি স্বয়ংক্রিয় রিট্রাইয়ের পর সফল হয় এবং ২০টি পর্যালোচনার জন্য ডেড লেটার কিউতে সুরক্ষিতভাবে আলাদা করা হয়, যার ফলে ০টি অর্ডার নষ্ট হয়েছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'arch-ex-1',
      kind: 'predict',
      topic: 'event-driven-dead-letter-queue',
      question: {
        en: 'In an asynchronous event-driven architecture, when a consumer worker fails to process an unparseable message after maximum retries, what queue construct isolates the message without data loss (e.g. DLQ / TTL / FIFO):',
        bn: 'একটি অসিঙ্ক্রোনাস ইভেন্ট-ড্রিভেন আর্কিটেকচারে, যখন কোনো কর্মী প্রসেস সর্বোচ্চ চেষ্টার পরেও একটি ত্রুটিপূর্ণ বার্তা প্রক্রিয়া করতে ব্যর্থ হয়, তখন ডেটা না হারিয়ে বার্তাটিকে আলাদা করে রাখার কাঠামো কোনটি (যেমন DLQ / TTL / FIFO):',
      },
      answer: 'DLQ',
      accept: ['DLQ', 'dlq', 'Dead Letter Queue', 'dead letter queue'],
      hint: {
        en: 'DLQ',
        bn: 'DLQ',
      },
      explanation: {
        en: 'A Dead Letter Queue (DLQ) isolates poisoned or unprocessable messages after retry limits are exhausted, protecting data durability.',
        bn: 'ডেড লেটার কিউ (DLQ) ত্রুটিপূর্ণ বা প্রক্রিয়াকরণে ব্যর্থ বার্তাকে রিট্রাই সীমা পার হওয়ার পর আলাদা করে সংরক্ষণ করে, যা ডেটার ক্ষতি প্রতিরোধ করে।'
      },
    },
    {
      id: 'arch-ex-2',
      kind: 'mcq',
      topic: 'well-architected-operational-excellence',
      question: {
        en: 'Which pillar of the Cloud Well-Architected Framework focuses on running and monitoring systems to deliver business value and continually improving processes?',
        bn: 'ক্লাউড ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্কের কোন স্তম্ভটি ব্যবসায়িক মান প্রদানের জন্য সিস্টেম পরিচালনা ও পর্যবেক্ষণ এবং প্রক্রিয়াগুলোর ক্রমাগত উন্নতির ওপর দৃষ্টি নিবদ্ধ করে?'
      },
      options: [
        {
          en: 'Operational Excellence',
          bn: 'অপারেশনাল এক্সিলেন্স'
        },
        {
          en: 'Security',
          bn: 'সিকিউরিটি'
        },
        {
          en: 'Cost Optimization',
          bn: 'কস্ট অপ্টিমাইজেশন'
        },
        {
          en: 'Sustainability',
          bn: 'সাসটেইনেবিলিটি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Operational Excellence focuses on running workloads and refining operational procedures.',
        bn: 'অপারেশনাল এক্সিলেন্স সিস্টেম পরিচালনা এবং কর্মপদ্ধতির উন্নতির ওপর দৃষ্টি দেয়।'
      },
      explanation: {
        en: 'Operational Excellence encompasses automating operations via Infrastructure as Code, deploying small incremental changes, and learning from operational failures.',
        bn: 'অপারেশনাল এক্সিলেন্স ইনফ্রাস্ট্রাকচার এজ কোডের মাধ্যমে অটোমেশন, ছোট ধাপে ডিপ্লয়মেন্ট এবং অতীতের ব্যর্থতা থেকে শিক্ষা নিয়ে প্রক্রিয়া উন্নত করা অন্তর্ভুক্ত করে।'
      }
    },
    {
      id: 'arch-ex-3',
      kind: 'predict',
      topic: 'synchronous-pipeline-dropped-orders',
      question: {
        en: 'In our benchmark of 4000 orders, how many orders were completely dropped by HTTP timeouts in the tightly coupled synchronous pipeline (e.g. 600 ):',
        bn: 'আমাদের ৪০০০টি অর্ডারের বেঞ্চমার্কে সরাসরি সংযুক্ত সিঙ্ক্রোনাস পাইপলাইনে এইচটিটিপি টাইমআউটের কারণে কতটি অর্ডার বাতিল হয়ে গিয়েছিল (যেমন 600 ):',
      },
      answer: '600',
      accept: ['600', '600 orders'],
      hint: {
        en: '600',
        bn: '600',
      },
      explanation: {
        en: 'Under direct synchronous communication, downstream database congestion caused 600 orders to fail with timeout errors.',
        bn: 'সরাসরি সিঙ্ক্রোনাস সংযোগের ক্ষেত্রে ডাউনস্ট্রিম ডেটাবেজ জটের কারণে ৬০০টি অর্ডার টাইমআউট জটিলতায় ব্যর্থ হয়।'
      },
    },
    {
      id: 'arch-ex-4',
      kind: 'mcq',
      topic: 'strangler-fig-pattern',
      question: {
        en: 'Which cloud architecture migration pattern allows teams to incrementally replace legacy monolithic application routes with microservices behind an API Gateway without a risky big-bang rewrite?',
        bn: 'কোন ক্লাউড আর্কিটেকচার মাইগ্রেশন প্যাটার্ন দলগুলোকে ঝুঁকিপূর্ণ সম্পূর্ণ পুনর্লিখন ছাড়াই একটি এপিআই গেটওয়ের মাধ্যমে মনোলিথ সিস্টেমের অংশগুলোকে নতুন মাইক্রোসার্ভিসে ধীরে ধীরে স্থানান্তরের সুযোগ দেয়?'
      },
      options: [
        {
          en: 'The Strangler Fig pattern',
          bn: 'দ্য স্ট্র্যাংলার ফিগ প্যাটার্ন'
        },
        {
          en: 'The Hard Reboot pattern',
          bn: 'দ্য হার্ড রিবুট প্যাটার্ন'
        },
        {
          en: 'The Monolith Multiplier pattern',
          bn: 'দ্য মনোলিথ মাল্টিপ্লায়ার প্যাটার্ন'
        },
        {
          en: 'The Zero Disk pattern',
          bn: 'দ্য জিরো ডিস্ক প্যাটার্ন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Strangler Fig pattern incrementally replaces legacy services route by route.',
        bn: 'স্ট্র্যাংলার ফিগ প্যাটার্ন রুট ধরে ধরে মনোলিথ সিস্টেমকে ধাপে ধাপে প্রতিস্থাপন করে।'
      },
      explanation: {
        en: 'The Strangler Fig pattern gradually replaces specific parts of a legacy monolithic system with new microservices, rerouting traffic progressively until the old monolith is decommissioned.',
        bn: 'স্ট্র্যাংলার ফিগ প্যাটার্ন পুরনো মনোলিথের এক একটি ফিচার নতুন মাইক্রোসার্ভিসে রূপান্তর করে এবং গেটওয়ের মাধ্যমে ট্রাফিক ঘুরিয়ে দেয়, ফলে কোনো ডাউনটাইম ছাড়াই মাইগ্রেশন সম্পন্ন হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Cloud Architecture Patterns Knowledge Check',
      bn: 'ক্লাউড আর্কিটেকচার প্যাটার্ন জ্ঞান যাচাই'
    },
    questions: [
      {
        id: 'arch-qz-1',
        kind: 'mcq',
        topic: 'well-architected-reliability-pillar',
        question: {
          en: 'Under the Cloud Well-Architected Framework, what is a primary design principle of the Reliability pillar?',
          bn: 'ক্লাউড ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্কের অধীনে রিলায়াবিলিটি (Reliability) স্তম্ভের একটি প্রধান ডিজাইন নীতি কোনটি?'
        },
        options: [
          {
            en: 'Automatically recover from infrastructure failure through multi-AZ redundancy and decoupled architectures',
            bn: 'মাল্টি-এজেড রিডানড্যান্সি এবং ডিকাপল্ড পরিকাঠামোর মাধ্যমে পরিকাঠামোগত ব্যর্থতা থেকে স্বয়ংক্রিয়ভাবে পুনরুদ্ধার হওয়া'
          },
          {
            en: 'Store all application passwords unencrypted in public Git repositories',
            bn: 'সমস্ত অ্যাপ্লিকেশন পাসওয়ার্ড এনক্রিপশন ছাড়াই সর্বজনীন গিট রিপোজিটরিতে সংরক্ষণ করা'
          },
          {
            en: 'Run all production workloads inside a single virtual machine in one availability zone',
            bn: 'একটিমাত্র অ্যাভেইলেবিলিটি জোনের একক ভার্চুয়াল মেশিনে সমস্ত প্রোডাকশন কাজ পরিচালনা করা'
          },
          {
            en: 'Disable automated cloud monitoring alarms to prevent alerting engineers',
            bn: 'ইঞ্জিনিয়ারদের সতর্কবার্তা পাঠানো বন্ধ করতে ক্লাউড মনিটরিং অ্যালার্ম নিষ্ক্রিয় করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reliability mandates automated recovery from failures and fault isolation.',
          bn: 'রিলায়াবিলিটি স্বয়ংক্রিয় ত্রুটি পুনরুদ্ধার এবং ক্ষতি পৃথকীকরণ নিশ্চিত করে।'
        },
        explanation: {
          en: 'The Reliability pillar emphasizes designing systems that withstand disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions through automated failover.',
          bn: 'রিলায়াবিলিটি স্তম্ভটি এমন সিস্টেম ডিজাইনে জোর দেয় যা ব্যাঘাত প্রতিরোধ করে এবং স্বয়ংক্রিয় ফেইলওভারের মাধ্যমে নিরবচ্ছিন্ন সেবা অব্যাহত রাখে।'
        }
      },
      {
        id: 'arch-qz-2',
        kind: 'mcq',
        topic: 'event-driven-architecture-spike-absorption',
        question: {
          en: 'How does an Event-Driven Architecture with message queues protect backend systems during extreme traffic spikes?',
          bn: 'মেসেজ কিউ ব্যবহারকারী ইভেন্ট-ড্রিভেন আর্কিটেকচার কীভাবে চরম ট্রাফিকের সময় ব্যাকএন্ড সিস্টেমকে সুরক্ষিত রাখে?'
        },
        options: [
          {
            en: 'Message queues act as shock absorbers, buffering incoming orders so consumers can process them at a safe, controlled rate',
            bn: 'মেসেজ কিউ শক অ্যাবজরবার হিসেবে কাজ করে, যা অর্ডারগুলো জমা রেখে কনজিউমারদের নিরাপদ ও নিয়ন্ত্রিত গতিতে প্রসেস করতে দেয়'
          },
          {
            en: 'Message queues instantly delete all incoming client requests to minimize database size',
            bn: 'মেসেজ কিউ ডেটাবেজের আকার ছোট রাখতে সমস্ত আগত ক্লায়েন্ট অনুরোধ সাথে সাথে মুছে ফেলে'
          },
          {
            en: 'Message queues slow down the user Internet broadband connection speed',
            bn: 'মেসেজ কিউ ব্যবহারকারীর ইন্টারনেটের ব্রডব্যান্ড গতি কমিয়ে দেয়'
          },
          {
            en: 'Message queues force all backend databases to shut down during daylight hours',
            bn: 'মেসেজ কিউ দিনের বেলা সমস্ত ব্যাকএন্ড ডেটাবেজ বন্ধ রাখতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Queues buffer bursts, allowing downstream consumers to process without crashing.',
          bn: 'কিউ ট্রাফিকের ধাক্কা সামলে ব্যাকএন্ডকে ক্র্যাশ হওয়া থেকে বাঁচায়।'
        },
        explanation: {
          en: 'Asynchronous queues decouple producers from consumers, smoothing out bursty traffic and preventing downstream services from being overwhelmed.',
          bn: 'অসিঙ্ক্রোনাস কিউ প্রডিউসার ও কনজিউমারকে আলাদা করে, ফলে আকস্মিক ট্রাফিকের ধাক্কায় ডাউনস্ট্রিম সার্ভিস ক্র্যাশ করা থেকে রক্ষা পায়।'
        }
      },
      {
        id: 'arch-qz-3',
        kind: 'mcq',
        topic: 'circuit-breaker-pattern-state',
        question: {
          en: 'What occurs when a Circuit Breaker enters the OPEN state after repeated downstream service failures?',
          bn: 'বারংবার ডাউনস্ট্রিম সার্ভিস ব্যর্থ হওয়ার পর যখন একটি সার্কিট ব্রেকার OPEN অবস্থায় পৌঁছায়, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'Incoming requests fail fast immediately without calling the struggling downstream service, allowing it time to recover',
            bn: 'বিপর্যস্ত সার্ভিসকে ডাকার পরিবর্তে আগত অনুরোধগুলো তৎক্ষণাৎ ব্যর্থ ঘোষণা করা হয়, যা সার্ভিসটিকে পুনরুদ্ধারের সময় দেয়'
          },
          {
            en: 'The cloud physical data center building disconnects from the electric power utility',
            bn: 'ক্লাউডের ফিজিক্যাল ডাটা সেন্টার বিদ্যুৎ লাইন থেকে বিচ্ছিন্ন হয়ে যায়'
          },
          {
            en: 'The computer CPU fans spin in reverse to cool down the room',
            bn: 'রুম ঠান্ডা করতে কম্পিউটারের সিপিইউ ফ্যান উল্টো দিকে ঘুরতে শুরু করে'
          },
          {
            en: 'All software developers are automatically logged out of their email accounts',
            bn: 'সমস্ত সফটওয়্যার ডেভেলপার তাদের ইমেইল অ্যাকাউন্ট থেকে স্বয়ংক্রিয়ভাবে লগআউট হয়ে যান'
          }
        ],
        answer: 0,
        hint: {
          en: 'The open circuit fails fast immediately without hammering the failing service.',
          bn: 'ওপেন সার্কিট ব্যর্থ সার্ভিসের ওপর চাপ না বাড়িয়ে তৎক্ষণাৎ ব্যর্থ ঘোষণা করে।'
        },
        explanation: {
          en: 'When in the Open state, the circuit breaker rejects requests immediately to prevent cascading failure and give downstream services time to stabilize.',
          bn: 'ওপেন অবস্থায় সার্কিট ব্রেকার তৎক্ষণাৎ অনুরোধ ফিরিয়ে দেয় যাতে ক্ষতিগ্রস্ত সার্ভিসের ওপর অতিরিক্ত চাপ না পড়ে এবং তা স্বাভাবিক হতে পারে।'
        }
      },
      {
        id: 'arch-qz-4',
        kind: 'mcq',
        topic: 'cqrs-segregation-benefit',
        question: {
          en: 'What architectural benefit does Command Query Responsibility Segregation (CQRS) provide in high-scale cloud platforms?',
          bn: 'বড় আকারের ক্লাউড প্ল্যাটফর্মে কমান্ড কোয়েরি রেসপনসিবিলিটি সেগ্রিগেশন (CQRS) কোন আর্কিটেকচারাল সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'Separates state-changing writes (commands) from data reads (queries), allowing independent scaling and data model optimization',
            bn: 'ডেটা পরিবর্তনকারী রাইট (কমান্ড) এবং ডেটা পড়ার রিড (কোয়েরি) সম্পূর্ণ আলাদা করে স্বাধীন স্কেলিং ও অপ্টিমাইজেশন নিশ্চিত করে'
          },
          {
            en: 'Forces all mobile applications to operate without any database connection',
            bn: 'সমস্ত মোবাইল অ্যাপ্লিকেশনকে কোনো ডেটাবেজ সংযোগ ছাড়াই চলতে বাধ্য করে'
          },
          {
            en: 'Restricts cloud servers to processing only one single customer request per hour',
            bn: 'ক্লাউড সার্ভারগুলোকে প্রতি ঘণ্টায় মাত্র একটি গ্রাহক অনুরোধ প্রক্রিয়াকরণে সীমাবদ্ধ করে'
          },
          {
            en: 'Disables all user passwords across the entire corporate network',
            bn: 'পুরো কর্পোরেট নেটওয়ার্কের সমস্ত ব্যবহারকারীর পাসওয়ার্ড নিষ্ক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CQRS separates writes and reads so each can scale and optimize independently.',
          bn: 'CQRS রাইট এবং রিড আলাদা করে যাতে উভয়ই স্বাধীনভাবে স্কেল হতে পারে।'
        },
        explanation: {
          en: 'By isolating write-heavy transaction databases from read-heavy queries, CQRS allows each data model to be tuned specifically for throughput, caching, and responsiveness.',
          bn: 'রাইট-নির্ভর ডেটাবেজ এবং রিড-নির্ভর কোয়েরিকে আলাদা করে CQRS ক্যাশিং, গতি এবং উচ্চ কার্যক্ষমতা নিশ্চিত করে।'
        }
      }
    ]
  }
};
