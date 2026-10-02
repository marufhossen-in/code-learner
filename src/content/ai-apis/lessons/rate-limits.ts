import type { Lesson } from '../../../lib/types';

export const RateLimitsLesson: Lesson = {
  slug: 'rate-limits',
  tech: 'ai-apis',
  title: {
    en: 'Rate Limiting, Concurrency & Token Bucket Algorithms',
    bn: 'রেট লিমিটিং, কনকারেন্সি এবং টোকেন বাকেট অ্যালগরিদম'
  },
  summary: {
    en: 'Master client-side traffic shaping: understand Requests Per Minute (RPM) and Tokens Per Minute (TPM) dual limits, implement the Token Bucket rate limiting algorithm with continuous refill rates, monitor x-ratelimit headers, and throttle bulk batch processing.',
    bn: 'ক্লায়েন্ট-সাইড ট্রাফিক নিয়ন্ত্রণ আয়ত্ত করুন: রিকোয়েস্ট পার মিনিট (RPM) এবং টোকেন পার মিনিট (TPM) দ্বিমুখী সীমা অনুধাবন, ধারাবাহিক রিফিল সহ টোকেন বাকেট অ্যালগরিদম বাস্তবায়ন, x-ratelimit হেডার পর্যবেক্ষণ এবং বাল্ক ব্যাচ প্রসেসিং থ্রটলিং।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'rpm-vs-tpm-heading',
      text: {
        en: 'The Dual Constraint Problem: Requests Per Minute vs Tokens Per Minute',
        bn: 'দ্বিমুখী সীমাবদ্ধতা: প্রতি মিনিটে অনুরোধ বনাম প্রতি মিনিটে টোকেন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike traditional web APIs (Application Programming Interfaces that connect software) that throttle traffic solely by HTTP request count, AI providers enforce two simultaneous thresholds: Requests Per Minute (RPM) and Tokens Per Minute (TPM). An organization might have an allowance of 500 RPM and 100000 TPM. If a developer dispatches just 3 concurrent requests carrying a 30000-token document each, the system consumes 90000 tokens within 1 second. Even though RPM utilization is under 1%, the 100000 TPM quota is exhausted, triggering instant HTTP 429 rejections.',
        bn: 'সাধারণ ওয়েব এপিআই (সফটওয়্যারের মধ্যে সংযোগ স্থাপনকারী প্রোগ্রামিং ইন্টারফেস) কেবল অনুরোধের সংখ্যার ওপর ভিত্তি করে ট্রাফিক নিয়ন্ত্রণ করলেও এআই প্রোভাইডাররা একসাথে ২ টি সীমা প্রয়োগ করে: প্রতি মিনিটে অনুরোধ বা আরপিএম (RPM) এবং প্রতি মিনিটে টোকেন বা টিপিএম (TPM)। একটি প্রতিষ্ঠানের সীমা হয়তো ৫০০ আরপিএম এবং ১০০০০০ টিপিএম হতে পারে। এখন একজন ডেভেলপার যদি মাত্র ৩টি সমান্তরাল অনুরোধ পাঠান যার প্রতিটিতে ৩০০০০ টোকেনের দীর্ঘ নথি রয়েছে, তবে ১ সেকেন্ডেই ৯০০০০ টোকেন খরচ হয়ে যায়। ফলে আরপিএম ১% এর নিচে থাকা সত্ত্বেও ১০০০০০ টিপিএম কোটা শেষ হয়ে তাৎক্ষণিক HTTP ৪২৯ এরর দেখা দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The Token Bucket algorithm maintaining smooth traffic flow with capacity 10 and refill rate 5.',
        bn: 'চিত্র ১: টোকেন বাকেট অ্যালগরিদম যা ১০ ধারণক্ষমতা এবং প্রতি সেকেন্ডে ৫ রিফিল গতিতে ট্রাফিক মসৃণ রাখে।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">TOKEN BUCKET RATE LIMITING ARCHITECTURE</text>
  
  <!-- Inflow Refill -->
  <g transform="translate(40, 60)">
    <rect width="220" height="250" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="220" height="36" rx="8" fill="#0284c7" />
    <text x="110" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Continuous Refill 💧</text>
    
    <text x="15" y="75" fill="#38bdf8" font-size="11" font-family="monospace">Refill Rate: 5 per sec</text>
    <rect x="15" y="90" width="190" height="60" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="115" fill="#cbd5e1" font-size="10" font-family="monospace">Tokens drip continuously</text>
    <text x="25" y="135" fill="#94a3b8" font-size="9" font-family="monospace">into bucket buffer</text>
    
    <rect x="15" y="170" width="190" height="60" rx="5" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="195" fill="#4ade80" font-size="10" font-family="sans-serif" font-weight="bold">Capacity Cap: 10</text>
    <text x="25" y="215" fill="#94a3b8" font-size="9" font-family="monospace">Overflow discarded safely</text>
  </g>

  <!-- Bucket Core -->
  <g transform="translate(300, 60)">
    <rect width="240" height="250" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="240" height="36" rx="8" fill="#d97706" />
    <text x="120" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. The Token Bucket 🪣</text>
    
    <rect x="20" y="60" width="200" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" />
    <!-- Visual Tokens -->
    <circle cx="50" cy="90" r="12" fill="#facc15" />
    <circle cx="85" cy="90" r="12" fill="#facc15" />
    <circle cx="120" cy="90" r="12" fill="#facc15" />
    <circle cx="155" cy="90" r="12" fill="#facc15" />
    <circle cx="190" cy="90" r="12" fill="#facc15" />
    <circle cx="50" cy="130" r="12" fill="#facc15" />
    <circle cx="85" cy="130" r="12" fill="#facc15" />
    <circle cx="120" cy="130" r="12" fill="#facc15" />
    
    <text x="120" y="170" fill="#facc15" font-size="11" font-family="monospace" text-anchor="middle">Available Tokens: 8 / 10</text>
    <text x="20" y="225" fill="#cbd5e1" font-size="10" font-family="sans-serif">Request costs 1 to N tokens</text>
  </g>

  <!-- Decision Outflow -->
  <g transform="translate(580, 60)">
    <rect width="220" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="220" height="36" rx="8" fill="#059669" />
    <text x="110" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Execution Gate 🚦</text>
    
    <rect x="15" y="65" width="190" height="70" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="90" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">If Tokens &gt;= Cost:</text>
    <text x="25" y="110" fill="#cbd5e1" font-size="10" font-family="monospace">Deduct tokens &amp; PASS</text>
    <text x="25" y="125" fill="#94a3b8" font-size="9" font-family="monospace">Zero network 429 errors</text>
    
    <rect x="15" y="150" width="190" height="75" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="175" fill="#f87171" font-size="11" font-family="sans-serif" font-weight="bold">If Empty:</text>
    <text x="25" y="195" fill="#cbd5e1" font-size="10" font-family="monospace">Queue in local memory</text>
    <text x="25" y="210" fill="#facc15" font-size="9" font-family="sans-serif">Wait for bucket refill</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'token-bucket-mechanics-heading',
      text: {
        en: 'Proactive Traffic Shaping and Monitoring Rate Limit Headers',
        bn: 'আগাম ট্রাফিক নিয়ন্ত্রণ এবং রেট লিমিট হেডার পর্যবেক্ষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Waiting to receive an HTTP 429 error before slowing down is an unstable anti-pattern that burns round-trip latency and risks temporary IP blacklisting. Instead, production systems inspect standard response headers such as x-ratelimit-remaining-requests and x-ratelimit-remaining-tokens. By feeding these metrics into a local Token Bucket rate limiter, the client shapes its outbound traffic proactively, queueing excess tasks in memory and never exceeding cloud provider quotas.',
        bn: 'সার্ভার থেকে HTTP ৪২৯ এরর না পাওয়া পর্যন্ত ট্রাফিক না কমানো একটি ক্ষতিকর পদ্ধতি যা অহেতুক সময় নষ্ট করে এবং সাময়িক আইপি ব্লক হওয়ার ঝুঁকি তৈরি করে। পরিবর্তে প্রোডাকশন সিস্টেমে x-ratelimit-remaining-requests এবং x-ratelimit-remaining-tokens এর মতো হেডারগুলো নিয়মিত পাঠ করা হয়। এই তথ্য লোকাল টোকেন বাকেট অ্যালগরিদমে যুক্ত করে ক্লায়েন্ট আগাম ট্রাফিক নিয়ন্ত্রণ করে এবং অতিরিক্ত অনুরোধগুলোকে লোকাল মেমোরি কিউতে জমিয়ে রেখে প্রোভাইডারের কোটা অতিক্রম করা প্রতিরোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of a Token Bucket rate limiter managing concurrency across 4 requests.',
        bn: '৪টি অনুরোধের জন্য ট্রাফিক গতি নিয়ন্ত্রণকারী টোকেন বাকেট অ্যালগরিদমের TypeScript কোড।'
      },
      code: `export class TokenBucketLimiter {
  private capacity: number;
  private refillRatePerSec: number;
  private tokens: number;
  private lastRefillTimestamp: number;

  constructor(capacity: number = 10, refillRatePerSec: number = 5) {
    this.capacity = capacity;
    this.refillRatePerSec = refillRatePerSec;
    this.tokens = capacity;
    this.lastRefillTimestamp = Date.now();
  }

  private refill(): void {
    const now = Date.now();
    const elapsedSeconds = (now - this.lastRefillTimestamp) / 1000;
    const tokensToAdd = elapsedSeconds * this.refillRatePerSec;

    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefillTimestamp = now;
  }

  public tryAcquire(cost: number = 1): boolean {
    this.refill();
    if (this.tokens >= cost) {
      this.tokens -= cost;
      return true;
    }
    return false;
  }

  public getAvailableTokens(): number {
    this.refill();
    return Math.floor(this.tokens);
  }
}

// Instantiate bucket: capacity 10 tokens, refills 5 per second
const limiter = new TokenBucketLimiter(10, 5);

// Simulate sending 4 rapid requests in sequence
const results: boolean[] = [];
for (let i = 1; i <= 4; i++) {
  const allowed = limiter.tryAcquire(2); // Each request costs 2 tokens
  results.push(allowed);
}

console.log('All 4 Requests Permitted:', results.every(r => r === true)); // true
console.log('Remaining Tokens in Bucket:', limiter.getAvailableTokens());   // 2`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Token Bucket Algorithm',
          def: {
            en: 'Traffic-shaping algorithm accumulating tokens at a steady rate and spending them to admit bursts of requests smoothly.',
            bn: 'ট্রাফিক নিয়ন্ত্রণ অ্যালগরিদম যা নির্দিষ্ট গতিতে টোকেন জমা করে এবং সেই টোকেন খরচের মাধ্যমে ট্রাফিকের সাময়িক চাপ সামাল দেয়।'
          }
        },
        {
          term: 'Requests Per Minute',
          def: {
            en: 'Upstream rate limit ceiling restricting the total count of distinct HTTP calls permitted within any 60-second window.',
            bn: 'সার্ভারের গতি নিয়ন্ত্রক সীমা যা যেকোনো ৬০ সেকেন্ডের মধ্যে মোট কতটি আলাদা HTTP কল করা যাবে তা নির্ধারণ করে।'
          }
        },
        {
          term: 'Tokens Per Minute',
          def: {
            en: 'Cumulative volume ceiling governing the aggregate sum of prompt and completion tokens processed every 60 seconds.',
            bn: 'মোট আয়তন সীমা যা প্রতি ৬০ সেকেন্ডে প্রক্রিয়াজাত ইনপুট ও আউটপুট টোকেনের সামগ্রিক সংখ্যা নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'Rate Limit Headers',
          def: {
            en: 'HTTP response metadata informing clients of current remaining capacity and the exact duration until quota reset.',
            bn: 'HTTP রেসপন্স মেটাডেটা যা ক্লায়েন্টকে অবশিষ্ট কোটা এবং কোটা পুনরায় চালুর নির্দিষ্ট সময় জানিয়ে দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dual-limit-breach-ex1',
      kind: 'mcq',
      topic: 'tpm-vs-rpm-exhaustion',
      question: {
        en: 'How can an application with an allowance of 500 RPM receive an HTTP 429 error after sending only 3 requests?',
        bn: '৫০০ আরপিএম সীমা থাকা সত্ত্বেও মাত্র ৩টি অনুরোধ পাঠানোর পরই একটি অ্যাপ্লিকেশন কীভাবে HTTP ৪২৯ এরর পেতে পারে?'
      },
      options: [
        {
          en: 'The 3 requests contained massive prompts that exhausted the Tokens Per Minute (TPM) quota despite low request count',
          bn: 'অনুরোধের সংখ্যা কম হলেও ওই ৩টি অনুরোধে বিশাল প্রম্পট থাকায় তা প্রতি মিনিটের টোকেন সীমা (TPM) শেষ করে দিয়েছে'
        },
        {
          en: 'Because the internet cables were physically unplugged',
          bn: 'কারণ ইন্টারনেটের তার শারীরিকভাবে খুলে ফেলা হয়েছিল'
        },
        {
          en: 'The client computer monitor turned off',
          bn: 'ক্লায়েন্টের কম্পিউটার মনিটর বন্ধ হয়ে গিয়েছিল'
        },
        {
          en: 'HTTP 429 means the request was 100 percent successful',
          bn: 'HTTP ৪২৯ মানে অনুরোধটি শতভাগ সফল হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'AI providers enforce limits on both call count and aggregate token volume simultaneously.',
        bn: 'এআই প্রোভাইডাররা কল সংখ্যা এবং টোকেন সংখ্যা উভয় সীমার ওপর ভিত্তি করে নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'TPM limits are triggered by token volume regardless of whether your RPM utilization is well under the ceiling.',
        bn: 'আরপিএম সীমার অনেক নিচে থাকলেও প্রম্পটের অতিরিক্ত আকারের কারণে টিপিএম সীমা অতিক্রান্ত হতে পারে।'
      }
    },
    {
      id: 'token-bucket-benefit-ex2',
      kind: 'mcq',
      topic: 'token-bucket-burst-tolerance',
      question: {
        en: 'What unique operational capability does the Token Bucket algorithm possess compared to a rigid Leaky Bucket?',
        bn: 'একটি সাধারণ লিকি বাকেটের তুলনায় টোকেন বাকেট অ্যালগরিদমের বিশেষ কোন কার্যক্ষম সুবিধা রয়েছে?'
      },
      options: [
        {
          en: 'It permits sudden bursts of traffic up to the bucket capacity while maintaining a smooth average processing rate over time',
          bn: 'এটি বাকেটের ধারণক্ষমতা পর্যন্ত ট্রাফিকের হঠাৎ চাপ সামাল দেওয়ার সুযোগ দেয় এবং সময়ের সাথে সামগ্রিক গড় গতি ঠিক রাখে'
        },
        {
          en: 'It requires zero bytes of memory storage',
          bn: 'এটির জন্য কোনো মেমোরি বা স্টোরেজের প্রয়োজন হয় না'
        },
        {
          en: 'It doubles the speed of client Wi-Fi networks',
          bn: 'এটি ক্লায়েন্টের ওয়াই-ফাই নেটওয়ার্কের গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'It translates all incoming text into French',
          bn: 'এটি সমস্ত আগত লেখাকে ফরাসি ভাষায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Accumulated tokens can be spent simultaneously to handle legitimate user bursts.',
        bn: 'জমে থাকা টোকেনগুলো একসাথে খরচ করে ট্রাফিকের হঠাৎ আসা চাপ সহজে সামাল দেওয়া যায়।'
      },
      explanation: {
        en: 'Token buckets allow bursts up to capacity while enforcing long-term rate limits via continuous token drip refills.',
        bn: 'টোকেন বাকেট নির্দিষ্ট সীমা পর্যন্ত আকস্মিক ট্রাফিক গ্রহণ করতে পারে এবং একটানা রিফিলের মাধ্যমে দীর্ঘমেয়াদী গতি বজায় রাখে।'
      }
    },
    {
      id: 'proactive-vs-reactive-ex3',
      kind: 'mcq',
      topic: 'proactive-client-side-rate-limiting',
      question: {
        en: 'Why is client-side rate limiting vastly superior to waiting for upstream servers to return HTTP 429?',
        bn: 'সার্ভারের HTTP ৪২৯ এররের জন্য অপেক্ষা করার চেয়ে ক্লায়েন্ট-সাইডে আগাম গতি নিয়ন্ত্রণ করা কেন অনেক বেশি শ্রেয়?'
      },
      options: [
        {
          en: 'It avoids wasted round-trip network latency, prevents server IP throttling, and provides predictable queue times for users',
          bn: 'এটি অহেতুক নেটওয়ার্ক লেটেন্সি রোধ করে, সার্ভার আইপি ব্লক হওয়া আটকায় এবং ব্যবহারকারীকে সুশৃঙ্খল কিউ সুবিধা দেয়'
        },
        {
          en: 'It completely eliminates the cost of electricity',
          bn: 'এটি বিদ্যুৎ বিল পুরোপুরি দূর করে দেয়'
        },
        {
          en: 'It turns all text fonts into Comic Sans',
          bn: 'এটি সব লেখার ফন্ট কমিক স্যান্সে বদলে দেয়'
        },
        {
          en: 'It deletes the application source code from GitHub',
          bn: 'এটি গিটহাব থেকে অ্যাপ্লিকেশনের সোর্স কোড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Shaping outbound traffic locally prevents hitting provider penalty walls.',
        bn: 'নিজের প্রান্ত থেকে ট্রাফিকের গতি সাজিয়ে নিলে প্রোভাইডারের জরিমানার মুখে পড়তে হয় না।'
      },
      explanation: {
        en: 'Local queuing absorbs spikes cleanly, ensuring API keys stay in good standing with upstream cloud vendors.',
        bn: 'লোকাল কিউ ট্রাফিকের ধাক্কা সামলে নিয়ে এপিআই চাবির সুনাম অক্ষুণ্ণ রাখে এবং নির্ভরযোগ্য সেবা প্রদান করে।'
      }
    },
    {
      id: 'headers-monitoring-ex4',
      kind: 'mcq',
      topic: 'ratelimit-response-headers-interpretation',
      question: {
        en: 'Which HTTP response header tells the client exactly how many tokens can still be consumed before hitting rate limits?',
        bn: 'কোন HTTP রেসপন্স হেডারটি ক্লায়েন্টকে জানায় যে রেট লিমিট শেষ হওয়ার আগে আর ঠিক কতটি টোকেন ব্যবহার করা যাবে?'
      },
      options: [
        { en: 'x-ratelimit-remaining-tokens', bn: 'x-ratelimit-remaining-tokens' },
        { en: 'Content-Length', bn: 'Content-Length' },
        { en: 'Server-Status-OK', bn: 'Server-Status-OK' },
        { en: 'x-user-password-hash', bn: 'x-user-password-hash' }
      ],
      answer: 0,
      hint: {
        en: 'Look for standard provider rate limit headers starting with x-ratelimit-.',
        bn: 'x-ratelimit- দিয়ে শুরু হওয়া আদর্শ প্রোভাইডার হেডারটি লক্ষ্য করুন।'
      },
      explanation: {
        en: 'x-ratelimit-remaining-tokens exposes remaining token budget, allowing client rate limiters to adjust dynamically.',
        bn: 'x-ratelimit-remaining-tokens হেডার অবশিষ্ট টোকেন কোটা প্রকাশ করে, যা দেখে ক্লায়েন্ট গতি নিয়ন্ত্রণ করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-rate-limits',
    title: {
      en: 'Rate Limiting and Concurrency Architecture Quiz',
      bn: 'রেট লিমিটিং এবং কনকারেন্সি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-batch-bulk-orchestration',
        kind: 'mcq',
        topic: 'bulk-batch-processing-throttling',
        question: {
          en: 'When processing an offline batch job of 100000 customer reviews, how should requests be orchestrated?',
          bn: '১০০০০০ গ্রাহকের মতামতের মতো বিশাল ব্যাচ প্রসেসিংয়ের কাজ করার সময় অনুরোধগুলো কীভাবে পরিচালনা করা উচিত?'
        },
        options: [
          {
            en: 'Through a concurrency-limited worker pool (e.g. p-limit with concurrency 10) pacing calls to match RPM/TPM ceilings',
            bn: 'কনকারেন্সি-নিয়ন্ত্রিত কর্মী দলের (যেমন ১০ কনকারেন্সির p-limit) মাধ্যমে আরপিএম ও টিপিএম সীমার সাথে সামঞ্জস্য রেখে চালানো'
          },
          {
            en: 'Fire all 100000 fetch calls simultaneously using Promise.all in a single millisecond',
            bn: 'এক মিলিসেকেন্ডে Promise.all ব্যবহার করে ১০০০০০ কল একসাথে পাঠিয়ে দেওয়া'
          },
          {
            en: 'Run 1 request per week to finish the batch in 2000 years',
            bn: 'প্রতি সপ্তাহে ১টি করে অনুরোধ পাঠিয়ে ২০০০ বছরে কাজ শেষ করা'
          },
          {
            en: 'Convert all reviews into binary audio and call customer phones',
            bn: 'সব মতামতকে অডিও ফাইলে রূপান্তর করে গ্রাহকের ফোনে কল দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bounded concurrency workers prevent overwhelming both client memory and provider rate limiters.',
          bn: 'নির্দিষ্ট সীমার কনকারেন্সি ব্যবহার করলে মেমোরি ওভারফ্লো এবং সার্ভারের রেট লিমিট দুটোই এড়ানো যায়।'
        },
        explanation: {
          en: 'Worker pools maintain optimal steady-state throughput without triggering mass HTTP 429 rejections.',
          bn: 'নিয়ন্ত্রিত কর্মী দল একটানা সর্বোচ্চ গতিতে কাজ সম্পন্ন করে ৪২৯ এররে পড়ার ঝুঁকি এড়িয়ে চলে।'
        }
      },
      {
        id: 'quiz-distributed-rate-limiting',
        kind: 'mcq',
        topic: 'distributed-redis-rate-limiting',
        question: {
          en: 'In a microservice cluster where 20 stateless server pods share a single AI API key, where should the rate limiter state reside?',
          bn: 'যেখানে ২০টি আলাদা সার্ভার একটিমাত্র এআই এপিআই চাবি ব্যবহার করে, সেখানে রেট লিমিটারের হিসাব কোথায় সংরক্ষণ করা উচিত?'
        },
        options: [
          {
            en: 'In a centralized distributed in-memory datastore like Redis using atomic Lua scripts or sliding window counters',
            bn: 'রেডিসের (Redis) মতো একটি কেন্দ্রীভূত মেমোরি স্টোরে পারমাণবিক লুয়া স্ক্রিপ্ট বা স্লাইডিং উইন্ডো কাউন্টার ব্যবহার করে'
          },
          {
            en: 'In static text files stored on local USB thumb drives',
            bn: 'লোকাল ইউএসবি পেনড্রাইভে টেক্সট ফাইল আকারে'
          },
          {
            en: 'Inside the client browser cookies',
            bn: 'ব্যবহারকারীর ব্রাউজারের কুকির ভেতরে'
          },
          {
            en: 'No state is needed; each pod can send unlimited traffic independently',
            bn: 'কোনো হিসাবের প্রয়োজন নেই; প্রতিটি সার্ভার যত ইচ্ছা কল পাঠাতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiple independent pods require a centralized coordinated counter to avoid collective quota breaches.',
          bn: 'একাধিক সার্ভারের সম্মিলিত সীমা ঠিক রাখতে একটি কেন্দ্রীভূত সমন্বিত ব্যবস্থা অপরিহার্য।'
        },
        explanation: {
          en: 'Centralized datastores coordinate token consumption across multi-instance clusters, enforcing global rate caps.',
          bn: 'রেডিসের মতো সেন্ট্রালাইজড স্টোর সমস্ত সার্ভারের কল সংখ্যা একসাথে মিলিয়ে সঠিক বিশ্বব্যাপী কোটা রক্ষা করে।'
        }
      },
      {
        id: 'quiz-tier-upgrades-leverage',
        kind: 'mcq',
        topic: 'provider-tier-elevation',
        question: {
          en: 'How do cloud AI providers typically allow organizations to elevate their baseline RPM and TPM rate limit tiers?',
          bn: 'ক্লাউড এআই প্রোভাইডাররা সাধারণত কীভাবে প্রতিষ্ঠানগুলোকে তাদের আরপিএম এবং টিপিএম সীমা বাড়ানোর সুযোগ দেয়?'
        },
        options: [
          {
            en: 'By establishing positive payment history, prepaying billing credits, or requesting enterprise enterprise tier elevations',
            bn: 'সুনামের সাথে নিয়মিত বিল পরিশোধ করে, আগাম ক্রেডিট জমা রেখে অথবা প্রাতিষ্ঠানিক টিয়ার আপগ্রেডের আবেদন জানিয়ে'
          },
          {
            en: 'By guessing the secret password of the provider CEO',
            bn: 'প্রোভাইডারের প্রধান নির্বাহীর গোপন পাসওয়ার্ড অনুমান করে'
          },
          {
            en: 'By unplugging client monitors overnight',
            bn: 'রাতে অফিসের সব কম্পিউটারের মনিটর বন্ধ রেখে'
          },
          {
            en: 'Rate limits can never be changed for any organization under any circumstances',
            bn: 'কোনো অবস্থাতেই কোনো প্রতিষ্ঠানের জন্য রেট লিমিট কখনো পরিবর্তন করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Providers grant higher throughput to accounts that demonstrate verified financial reliability.',
          bn: 'যেসব অ্যাকাউন্ট নিয়মিত বিল পরিশোধের সুনাম প্রমাণ করে প্রোভাইডার তাদের উচ্চগতির কোটা বরাদ্দ দেয়।'
        },
        explanation: {
          en: 'Proven usage and credit pre-funding graduate organizations into higher throughput tiers with generous limits.',
          bn: 'নিয়মিত ব্যবহার ও আর্থিক স্বচ্ছতা প্রতিষ্ঠানগুলোকে উচ্চতর টিয়ারে উন্নীত করে উচ্চ ট্রাফিকের সুযোগ তৈরি করে দেয়।'
        }
      },
      {
        id: 'quiz-openai-batch-api-cost',
        kind: 'mcq',
        topic: 'asynchronous-batch-endpoints',
        question: {
          en: 'What is the primary architectural advantage of using asynchronous Batch APIs for non-realtime evaluations and offline tasks?',
          bn: 'তাৎক্ষণিক প্রয়োজন নেই এমন অফলাইন কাজ এবং মূল্যায়নের জন্য অ্যাসিনক্রোনাস ব্যাচ এপিআই ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'They provide a separate, massive rate limit pool and offer a 50 percent discount on token pricing in exchange for 24-hour turnaround',
            bn: 'তারা ২৪ ঘণ্টার মধ্যে উত্তর দেওয়ার শর্তে একটি আলাদা বিশাল রেট লিমিট কোটা এবং টোকেন মূল্যে ৫০ শতাংশ সাশ্রয় দেয়'
          },
          {
            en: 'They guarantee response delivery within 10 microseconds',
            bn: 'তারা ১০ মাইক্রোসেকেন্ডের মধ্যে উত্তর পাওয়ার নিশ্চয়তা দেয়'
          },
          {
            en: 'They run without consuming any electricity or hardware',
            bn: 'তারা কোনো বিদ্যুৎ বা হার্ডওয়্যার খরচ না করেই কাজ সম্পন্ন করে'
          },
          {
            en: 'They allow running unsupported programming languages in browser tabs',
            bn: 'তারা ব্রাউজারে অপ্রচলিত প্রোগ্রামিং ভাষা চালানোর অনুমতি দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Batch APIs trade immediate turnaround for significant cost discounts and dedicated quotas.',
          bn: 'ব্যাচ এপিআই তাৎক্ষণিক উত্তরের বদলে বিশাল মূল্যছাড় এবং আলাদা কোটার সুবিধা দেয়।'
        },
        explanation: {
          en: 'Batch endpoints process offline workloads during low-demand GPU hours, offering 50% cost savings without depleting live RPM/TPM.',
          bn: 'অ্যাসিনক্রোনাস ব্যাচ অফ-পিক সময়ে কাজ সম্পন্ন করে ৫০% অর্থ সাশ্রয় করে এবং লাইভ সিস্টেমের কোটা অক্ষত রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'api-capstone',
    title: {
      en: 'Building a Resilient, Cost-Aware Production AI Gateway',
      bn: 'একটি স্থিতিস্থাপক ও সাশ্রয়ী প্রোডাকশন এআই গেটওয়ে তৈরি'
    }
  }
};
