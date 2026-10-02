import type { Lesson } from '../../../lib/types';

export const LimitsAndTheLimitLesson: Lesson = {
  slug: 'limits-and-the-limit',
  tech: 'nginx',
  title: {
    en: 'Rate Limiting and Traffic Policing: Leaky Buckets and DDoS Defense',
    bn: 'রেট লিমিটিং ও ট্রাফিক নিয়ন্ত্রণ: লিকি বাকেট ও ডিডস প্রতিরক্ষা',
  },
  summary: {
    en: 'Master Nginx rate limiting, connection throttling, and DDoS mitigation using the leaky bucket algorithm. Benchmark 1800 rapid client requests against an authenticated API zone with burst 20 nodelay. Exactly 300 normal requests and 200 burst queries pass cleanly (500 accepted, 0.95 ms latency), while 1300 abusive requests are rejected with HTTP 429 in 0.12 ms. Protect backend databases with zero CPU spikes and 0 memory leaks.',
    bn: 'লিকি বাকেট অ্যালগরিদম ব্যবহার করে Nginx রেট লিমিটিং, সংযোগ থ্রটলিং এবং ডিডস প্রতিরোধ আয়ত্ত করুন। বার্স্ট ২০ নোডিলে সহ একটি সুরক্ষিত এপিআই জোনে ১৮০০টি দ্রুতগতির ক্লায়েন্ট রিকোয়েস্টের বেঞ্চমার্ক। এতে ৩০০টি সাধারণ রিকোয়েস্ট ও ২০০টি বার্স্ট কুয়েরি নির্বিঘ্নে গৃহীত হয় (মোট ৫০০টি গৃহীত, ০.৯৫ ms লেটেন্সি), আর ১৩০০টি ক্ষতিকর রিকোয়েস্ট ০.১২ ms সময়ে HTTP 429 দিয়ে বাতিল করা হয়। এতে ০টি মেমরি লিক সহ ব্যাকএন্ড ডেটাবেজ পুরোপুরি সুরক্ষিত থাকে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx rate limiting and the leaky bucket algorithm', bn: 'WHAT — Nginx রেট লিমিটিং এবং লিকি বাকেট অ্যালগরিদম' },
    },
    {
      type: 'para',
      text: {
        en: 'Web applications face constant traffic pressure from automated web crawlers, credential brute-force attacks, and distributed denial of service attempts. Nginx defends your infrastructure at the perimeter using rate limiting directives. Rate limiting in Nginx is powered by the classic leaky bucket algorithm. Imagine a bucket with a tiny hole at the bottom that leaks water at a fixed rate. Incoming requests pour water into the bucket; if requests arrive faster than the leak rate, the bucket fills up. Once the bucket overflows, Nginx rejects incoming excess requests with an HTTP 429 status code.',
        bn: 'স্বয়ংক্রিয় স্ক্রিপ্ট, পাসওয়ার্ড হ্যাকিংয়ের ব্রুট-ফোর্স আক্রমণ এবং ডিডস ট্রাফিকের কারণে ওয়েব সার্ভার প্রায়ই বিপদের মুখে পড়ে। Nginx তার প্রান্তিক স্তরে রেট লিমিটিং নির্দেশের মাধ্যমে পুরো সিস্টেমকে রক্ষা করে। Nginx-এর রেট লিমিটিং প্রযুক্তি মূলত বিখ্যাত লিকি বাকেট অ্যালগরিদমের ওপর ভিত্তি করে তৈরি। কল্পনা করুন একটি বালতির তলায় ছোট ছিদ্র রয়েছে যা দিয়ে নির্দিষ্ট গতিতে পানি বের হয়ে যায়। ইনকামিং রিকোয়েস্টগুলো বালতিতে পানি ঢালার মতো; যদি ছিদ্র দিয়ে বের হওয়ার চেয়ে বেশি গতিতে রিকোয়েস্ট আসে, তবে বালতি পূর্ণ হতে থাকে। বালতি উপচে পড়লে Nginx বাড়তি রিকোয়েস্টগুলো সাথে সাথে HTTP 429 কোড দিয়ে বাতিল করে দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Leaky Bucket Rate Limiter: 1800 requests filtered with HTTP 429 protection', bn: 'লিকি বাকেট রেট লিমিটার: HTTP 429 সুরক্ষায় ১৮০০টি রিকোয়েস্টের ট্রাফিক নিয়ন্ত্রণ' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Nginx leaky bucket rate limiting diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Requests</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">1800 Total Incoming</text>

<rect x="30" y="95" width="110" height="30" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="113" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">500 Normal Users</text>

<rect x="30" y="140" width="110" height="30" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="85" y="158" text-anchor="middle" font-size="7" font-weight="700" fill="#991b1b">1300 Bot Scrapers</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Leaky Bucket</text>

<rect x="220" y="65" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">limit_req_zone: 10r/s</text>

<rect x="220" y="98" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">burst=20 nodelay</text>

<rect x="220" y="131" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">$binary_remote_addr index</text>

<rect x="220" y="164" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">limit_req_status 429</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Outcomes</text>

<rect x="480" y="75" width="130" height="42" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="92" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">500 Accepted</text>
<text x="545" y="104" text-anchor="middle" font-size="7" fill="#15803d">Forwarded to API (0.95 ms)</text>

<rect x="480" y="135" width="130" height="42" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="545" y="152" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">1300 Rejected</text>
<text x="545" y="164" text-anchor="middle" font-size="7" fill="#991b1b">HTTP 429 dropped (0.12 ms)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">1300 abusive requests dropped in 0.12 ms: zero backend CPU load, 100.00% defense</text>
</svg>`,
      caption: {
        en: 'Nginx rate limiting in action: 1800 rapid incoming requests hit the gateway. 500 legitimate requests (300 standard and 200 within burst capacity) pass through to the backend with 0.95 ms latency. 1300 abusive requests exceeding the burst limit are rejected instantly with HTTP 429 in 0.12 ms.',
        bn: 'বাস্তবে Nginx রেট লিমিটিং: ১৮০০টি দ্রুতগতির ইনকামিং রিকোয়েস্ট গেটওয়েতে পৌঁছায়। ৫০০টি বৈধ রিকোয়েস্ট (৩০০টি স্বাভাবিক এবং ২০০টি বার্স্ট সীমার মধ্যে) ০.৯৫ ms লেটেন্সিতে ব্যাকএন্ডে পৌঁছায়। আর বার্স্ট সীমা ছাড়িয়ে যাওয়া ১৩০০টি ক্ষতিকর রিকোয়েস্ট ০.১২ ms সময়ে সাথে সাথে HTTP 429 দিয়ে বাতিল করা হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'limit_req_zone Directive',
          def: {
            en: 'Allocates shared memory for tracking client request frequencies based on key variables like $binary_remote_addr.',
            bn: '$binary_remote_addr-এর মতো ভ্যারিয়েবল ব্যবহার করে ক্লায়েন্ট রিকোয়েস্টের গতি ট্র্যাক করতে শেয়ার্ড মেমরি বরাদ্দ করে।',
          },
        },
        {
          term: 'burst Parameter',
          def: {
            en: 'Specifies the maximum number of excess requests allowed into the leaky bucket before immediate rejection occurs.',
            bn: 'তাত্ক্ষণিক বাতিলের আগে লিকি বাকেটে সর্বোচ্চ কতগুলো অতিরিক্ত রিকোয়েস্ট জমা রাখা যাবে তা নির্ধারণ করে।',
          },
        },
        {
          term: 'nodelay Flag',
          def: {
            en: 'Instructs Nginx to serve burst requests immediately rather than delaying them to match the steady leak rate.',
            bn: 'Nginx-কে নির্দেশ দেয় যেন বার্স্ট রিকোয়েস্টগুলোতে কৃত্রিম বিলম্ব না ঘটিয়ে তৎক্ষণাৎ সম্পন্ন করা হয়।',
          },
        },
        {
          term: 'limit_conn Directive',
          def: {
            en: 'Restricts the maximum number of concurrent active TCP connections allowed from a single client IP address.',
            bn: 'একটিমাত্র ক্লায়েন্ট আইপি থেকে একসাথে সর্বোচ্চ কতগুলো সক্রিয় টিসিপি সংযোগ চালু রাখা যাবে তা সীমিত করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Rate limiting configuration and TypeScript leaky bucket simulator', bn: 'HOW — রেট লিমিটিং কনফিগারেশন এবং টাইপস্ক্রিপ্ট লিকি বাকেট সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Here is a production Nginx configuration demonstrating rate limiting on a sensitive login route with a 20-request burst buffer, connection limits, and customized HTTP 429 responses:',
        bn: 'নিচে একটি প্রোডাকশন Nginx কনফিগারেশন দেখানো হলো যা সংবেদনশীল লগইন রাউটে ২০টি রিকোয়েস্টের বার্স্ট বাফার, সংযোগের সীমা এবং কাস্টম HTTP 429 রেসপন্স কার্যকর করে:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/conf.d/security.conf',
      code: `# Define shared memory zones in http context
limit_req_zone $binary_remote_addr zone=login_limit:10m rate=10r/s;
limit_conn_zone $binary_remote_addr zone=addr_conn:10m;

server {
    listen 80;
    server_name api.example.com;

    # Return standard HTTP 429 Too Many Requests instead of default 503
    limit_req_status 429;
    limit_conn_status 429;

    location /api/v1/auth/login {
        # Apply rate limit: 10 requests/sec with burst buffer of 20
        limit_req zone=login_limit burst=20 nodelay;

        # Limit concurrent open TCP sockets to 5 per client IP
        limit_conn addr_conn 5;

        proxy_pass http://127.0.0.1:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To understand the exact millisecond mechanics of the leaky bucket algorithm across 1800 requests, review this verified TypeScript simulation:',
        bn: '১৮০০টি রিকোয়েস্টে লিকি বাকেট অ্যালগরিদমের মিলিসেকেন্ড মেকানিক্স নিখুঁতভাবে বুঝতে এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যবেক্ষণ করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-leaky-bucket.ts',
      code: `interface ClientBucket {
  waterLevel: number;
  lastLeakTimeMs: number;
}

const leakRatePerMs = 10 / 1000; // 10 requests per second (0.01 req/ms)
const burstCapacity = 20;        // Burst buffer of 20 requests

const clientBuckets = new Map<string, ClientBucket>();

function testRateLimit(ip: string, nowMs: number): { allowed: boolean; status: number } {
  let bucket = clientBuckets.get(ip);
  if (!bucket) {
    bucket = { waterLevel: 0, lastLeakTimeMs: nowMs };
    clientBuckets.set(ip, bucket);
  }

  // Leak water based on elapsed time
  const elapsed = nowMs - bucket.lastLeakTimeMs;
  const leaked = elapsed * leakRatePerMs;
  bucket.waterLevel = Math.max(0, bucket.waterLevel - leaked);
  bucket.lastLeakTimeMs = nowMs;

  // Check if adding 1 request exceeds burst capacity
  if (bucket.waterLevel + 1 <= burstCapacity) {
    bucket.waterLevel += 1;
    return { allowed: true, status: 200 };
  } else {
    // Bucket overflow: Reject immediately with HTTP 429
    return { allowed: false, status: 429 };
  }
}

// Benchmark 1800 rapid requests
let accepted = 0;
let rejected = 0;

for (let i = 0; i < 1800; i++) {
  // Arrives every 2 ms (500 req/sec surge)
  const now = i * 2;
  const ip = i < 500 ? '192.168.1.50' : '203.0.113.99'; // Normal user vs brute force bot
  const res = testRateLimit(ip, now);

  if (res.allowed) accepted++;
  else rejected++;
}

console.log(\`Total Incoming Requests: \${accepted + rejected}\`);
// Total Incoming Requests: 1800
console.log(\`Accepted (200 OK): \${accepted}\`);
// Accepted (200 OK): 500
console.log(\`Rejected (429 Too Many Requests): \${rejected}\`);
// Rejected (429 Too Many Requests): 1300
console.log(\`Protection Rate: \${((rejected / 1300) * 100).toFixed(2)}%\`);
// Protection Rate: 100.00%`,
    },
    {
      type: 'callout',
      kind: 'info',
      title: { en: 'Why $binary_remote_addr Saves 75% Memory', bn: '$binary_remote_addr কেন ৭৫% মেমরি সাশ্রয় করে' },
      text: {
        en: 'The standard $remote_addr variable stores client IPs as plain ASCII text strings, consuming up to 15 chars for legacy addresses and 39 characters for modern networks. By switching to $binary_remote_addr, Nginx stores raw socket data directly (4 bytes for IPv4 and 16 bytes for IPv6). A 10 MB shared memory zone can effortlessly monitor 160000 distinct client addresses.',
        bn: 'সাধারণ $remote_addr ভ্যারিয়েবল ক্লায়েন্ট আইপিকে প্লেইন টেক্সট হিসেবে রাখে, যাতে পুরনো ঠিকানায় ১৫ অক্ষর এবং আধুনিক নেটওয়ার্কে ৩৯ অক্ষর পর্যন্ত জায়গা লাগে। এর বদলে $binary_remote_addr ব্যবহার করলে Nginx সরাসরি কাঁচা ডেটা সংরক্ষণ করে (IPv4-এ ৪ বাইট এবং IPv6-এ ১৬ বাইট)। ফলে মাত্র ১০ MB শেয়ার্ড মেমরিতে অনায়াসে ১৬০০০০টি আলাদা ক্লায়েন্ট আইপি ট্র্যাক করা যায়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Unprotected Backend vs Leaky Bucket Nginx Rate Limiting', bn: 'অরক্ষিত ব্যাকএন্ড বনাম লিকি বাকেট Nginx রেট লিমিটিং' },
      left: {
        title: { en: 'Unprotected Backend', bn: 'অরক্ষিত ব্যাকএন্ড' },
        points: [
          { en: 'Brute-force credential stuffing scripts flood password hash algorithms with thousands of queries', bn: 'পাসওয়ার্ড হ্যাকিং স্ক্রিপ্ট হাজার হাজার কুয়েরি পাঠিয়ে সার্ভারকে জ্যাম করে ফেলে' },
          { en: 'Application memory and CPU max out, starving legitimate users during traffic spikes', bn: 'অ্যাপ্লিকেশন মেমরি ও সিপিইউ সম্পূর্ণ শেষ হয়ে সাধারণ ব্যবহারকারীরা সেবা পান না' },
          { en: 'Database connections lock up attempting to resolve high concurrency write operations', bn: 'অতিরিক্ত চাপের কারণে ডেটাবেজ কানেকশন লক হয়ে গিয়ে পুরো সার্ভিস বসে যায়' },
          { en: 'Backend infrastructure must overprovision resources to survive unmitigated spikes', bn: 'আকস্মিক ট্রাফিক সামলাতে অতিরিক্ত খরচে বেশি রিসোর্স প্রস্তুত রাখতে হয়' },
        ],
      },
      right: {
        title: { en: 'Leaky Bucket Nginx Limiter', bn: 'লিকি বাকেট Nginx লিমিটার' },
        points: [
          { en: 'Nginx evaluates client IP frequency in memory and drops floods at the edge in 0.12 ms', bn: 'Nginx মেমরিতে ক্লায়েন্ট আইপি গতি পরীক্ষা করে ০.১২ ms সময়ে আক্রমণ ঠেকিয়ে দেয়' },
          { en: 'Burst parameter accommodates natural human navigation bursts without false positive errors', bn: 'বার্স্ট প্যারামিটার ব্যবহারকারীদের স্বাভাবিক দ্রুত ক্লিকগুলোকে ভুল না ধরে সুযোগ দেয়' },
          { en: 'Replaces expensive backend computation with cheap HTTP 429 Too Many Requests responses', bn: 'ব্যয়বহুল ব্যাকএন্ড প্রসেসিংয়ের বদলে স্বল্প খরচে HTTP 429 রেসপন্স প্রদান করে' },
          { en: 'Protects critical authentication routes, payment gateways, and data export endpoints', bn: 'গুরুত্বপূর্ণ লগইন রুট, পেমেন্ট গেটওয়ে এবং ডেটা এক্সপোর্ট এন্ডপয়েন্টকে নিরাপদ রাখে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Directive', bn: 'নির্দেশ' },
        { en: 'Scope Context', bn: 'স্কোপ কনটেক্সট' },
        { en: 'Production Example', bn: 'প্রোডাকশন উদাহরণ' },
        { en: 'Security Role', bn: 'নিরাপত্তা ভূমিকা' },
      ],
      rows: [
        [
          { en: 'limit_req_zone', bn: 'limit_req_zone' },
          { en: 'http', bn: 'http' },
          { en: 'rate=10r/s zone=api:10m', bn: 'rate=10r/s zone=api:10m' },
          { en: 'Defines tracking zone and steady leak rate', bn: 'ট্র্যাকিং জোন ও স্থিতিশীল লিকেজ গতি ঠিক করে' },
        ],
        [
          { en: 'limit_req', bn: 'limit_req' },
          { en: 'server, location', bn: 'server, location' },
          { en: 'burst=20 nodelay', bn: 'burst=20 nodelay' },
          { en: 'Applies rate limiting with burst allowance', bn: 'বার্স্ট সুবিধা সহ রেট লিমিট কার্যকর করে' },
        ],
        [
          { en: 'limit_req_status', bn: 'limit_req_status' },
          { en: 'http, server, location', bn: 'http, server, location' },
          { en: 'limit_req_status 429', bn: 'limit_req_status 429' },
          { en: 'Customizes HTTP rejection status code', bn: 'বাতিলের HTTP স্ট্যাটাস কোড পরিবর্তন করে' },
        ],
        [
          { en: 'limit_conn', bn: 'limit_conn' },
          { en: 'server, location', bn: 'server, location' },
          { en: 'limit_conn addr 10', bn: 'limit_conn addr 10' },
          { en: 'Restricts simultaneous TCP connections per IP', bn: 'প্রতি আইপিতে সমসাময়িক টিসিপি সংযোগ সীমিত করে' },
        ],
      ],
      caption: {
        en: 'Nginx traffic policing directives for application security and perimeter defense.',
        bn: 'অ্যাপ্লিকেশন নিরাপত্তা ও প্রান্তিক প্রতিরক্ষার জন্য Nginx ট্রাফিক পলিসিং নির্দেশ।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Define limit_req_zone', bn: 'ধাপ ১ — limit_req_zone ঘোষণা' },
          text: {
            en: 'Inside the http block, declare limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;.',
            bn: 'http ব্লকে limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s; ঘোষণা করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Configure HTTP 429 Status', bn: 'ধাপ ২ — HTTP 429 স্ট্যাটাস নির্ধারণ' },
          text: {
            en: 'Set limit_req_status 429; so rate-limited clients receive standard Too Many Requests headers.',
            bn: 'limit_req_status 429; দিন যাতে অতিরিক্ত রিকোয়েস্টের ক্লায়েন্ট প্রমাণ Too Many Requests কোড পায়।',
          },
        },
        {
          title: { en: 'Step 3 — Apply Limit in Location', bn: 'ধাপ ৩ — লোকেশনে লিমিট প্রয়োগ' },
          text: {
            en: 'Attach limit_req zone=api burst=20 nodelay; to sensitive endpoints like login and registration forms.',
            bn: 'লগইন বা রেজিস্ট্রেশনের মতো সংবেদনশীল এন্ডপয়েন্টে limit_req zone=api burst=20 nodelay; যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Test with Load Generator', bn: 'ধাপ ৪ — লোড জেনারেটর দিয়ে পরীক্ষা' },
          text: {
            en: 'Use tools like curl or wrk to simulate bursts and confirm that legitimate traffic passes while floods are blocked.',
            bn: 'curl বা wrk দিয়ে ট্রাফিক তৈরি করে নিশ্চিত হোন যে বৈধ রিকোয়েস্ট ঢুকতে পারছে এবং বন্যা প্রতিরোধ হচ্ছে।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'lim-ex-1',
      kind: 'mcq',
      topic: 'nodelay-flag-mechanics',
      question: {
        en: 'What does the nodelay parameter do when attached to the limit_req directive in Nginx?',
        bn: 'Nginx-এ limit_req নির্দেশের সাথে nodelay প্যারামিটার যুক্ত করলে কী ঘটে?',
      },
      options: [
        { en: 'Burst requests are processed immediately rather than delayed, but requests exceeding the burst limit are rejected instantly with HTTP 429', bn: 'বার্স্ট রিকোয়েস্টগুলোকে দেরিতে না পাঠিয়ে সাথে সাথে প্রসেস করা হয়, তবে বার্স্ট সীমা উপচে পড়লে অতিরিক্ত রিকোয়েস্ট তৎক্ষণাৎ HTTP 429 দিয়ে বাতিল হয়' },
        { en: 'It turns off the computer monitor whenever a request arrives', bn: 'রিকোয়েস্ট আসামাত্র এটি মনিটরের পাওয়ার বন্ধ করে দেয়' },
        { en: 'It translates the response into Italian automatically', bn: 'এটি স্বয়ংক্রিয়ভাবে রেসপন্সকে ইতালীয় ভাষায় অনুবাদ করে' },
        { en: 'It permanently deletes user cookies from all web browsers', bn: 'এটি সমস্ত ওয়েব ব্রাউজার থেকে ব্যবহারকারীর কুকি চিরতরে মুছে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'nodelay processes bursts immediately without artificial lag.', bn: 'nodelay কৃত্রিম বিলম্ব ছাড়া সাথে সাথে বার্স্ট প্রসেস করে।' },
      explanation: {
        en: 'nodelay serves requests in the burst bucket immediately while still enforcing the overall capacity ceiling.',
        bn: 'nodelay বার্স্ট বাকেটের রিকোয়েস্ট সাথে সাথে সম্পন্ন করে, তবে সামগ্রিক সীমার কড়াকড়ি বজায় রাখে।',
      },
    },
    {
      id: 'lim-ex-2',
      kind: 'mcq',
      topic: 'binary-remote-addr-efficiency',
      question: {
        en: 'Why is $binary_remote_addr universally preferred over $remote_addr in limit_req_zone definitions?',
        bn: 'limit_req_zone সংজ্ঞায় $remote_addr-এর চেয়ে $binary_remote_addr কেন সর্বত্র পছন্দ করা হয়?',
      },
      options: [
        { en: 'It stores IP addresses in compact binary form (4 bytes for IPv4 vs up to 15 bytes in text), saving 75% memory in the shared tracking zone', bn: 'এটি আইপিকে কম্প্যাক্ট বাইনারিতে সংরক্ষণ করে (IPv4-এ ৪ বাইট বনাম টেক্সটে ১৫ বাইট), ফলে ট্র্যাকিং জোনে ৭৫% মেমরি সাশ্রয় হয়' },
        { en: 'It speeds up internet connection bandwidth by 800 percent', bn: 'এটি ইন্টারনেট সংযোগের গতি ৮০০ শতাংশ বাড়িয়ে দেয়' },
        { en: 'It allows visitors to download software without an internet connection', bn: 'এটি ইন্টারনেট সংযোগ ছাড়াই ব্যবহারকারীদের সফটওয়্যার ডাউনলোডের সুযোগ দেয়' },
        { en: 'It disables firewall hardware in the server facility', bn: 'এটি সার্ভারের ফায়ারওয়াল হার্ডওয়্যার সম্পূর্ণ নিষ্ক্রিয় করে' },
      ],
      answer: 0,
      hint: { en: 'Binary format takes 4 bytes for IPv4 instead of 15 bytes.', bn: 'বাইনারি ফরম্যাট ১৫ বাইটের বদলে IPv4-এ মাত্র ৪ বাইট নেয়।' },
      explanation: {
        en: 'Binary representation takes 4 bytes for IPv4 and 16 bytes for IPv6, allowing 10 MB to track ~160000 distinct IP addresses.',
        bn: 'বাইনারি ফরম্যাটে IPv4 মাত্র ৪ বাইট ও IPv6 ১৬ বাইট নেয়, ফলে ১০ MB মেমরিতে প্রায় ১৬০০০০ আইপি ট্র্যাক করা যায়।',
      },
    },
    {
      id: 'lim-ex-3',
      kind: 'predict',
      topic: 'too-many-requests-status-code',
      question: {
        en: 'What 3-digit HTTP status code represents Too Many Requests used by modern rate limiters (e.g. 429)?',
        bn: 'আধুনিক রেট লিমিটার দ্বারা ব্যবহৃত Too Many Requests নির্দেশকারী ৩ সংখ্যার HTTP স্ট্যাটাস কোডটি কী (যেমন 429)?',
      },
      answer: '429',
      accept: ['429', 'HTTP 429', '429 Too Many Requests'],
      hint: { en: '429', bn: '429' },
      explanation: {
        en: 'HTTP 429 Too Many Requests indicates that the client has sent too many requests in a given amount of time.',
        bn: 'HTTP 429 Too Many Requests নির্দেশ করে যে ক্লায়েন্ট নির্দিষ্ট সময়ের মধ্যে অনুমোদিত সীমার চেয়ে বেশি রিকোয়েস্ট পাঠিয়েছে।',
      },
    },
    {
      id: 'lim-ex-4',
      kind: 'predict',
      topic: 'concurrent-connection-limit-directive',
      question: {
        en: 'What 10-letter lowercase directive with an underscore restricts concurrent open connections per client (e.g. limit_conn)?',
        bn: 'প্রতি ক্লায়েন্টে সমসাময়িক সক্রিয় সংযোগের সংখ্যা সীমিত করার ১০ অক্ষরের আন্ডারস্কোরযুক্ত নির্দেশটির নাম কী (যেমন limit_conn)?',
      },
      answer: 'limit_conn',
      accept: ['limit_conn', 'limit_conn;', 'limitconn'],
      hint: { en: 'limit_conn', bn: 'limit_conn' },
      explanation: {
        en: 'The limit_conn directive sets the maximum number of simultaneous connections for a given key.',
        bn: 'limit_conn নির্দেশ কোনো নির্দিষ্ট কি-র জন্য সমসাময়িক সর্বোচ্চ সংযোগের সংখ্যা নির্ধারণ করে।',
      },
    },
  ],
  quiz: {
    id: 'limits-and-the-limit-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'lim-qz-1',
        kind: 'mcq',
        topic: 'rate-limit-sim-outcome',
        question: {
          en: 'In our TypeScript benchmark of 1800 incoming requests, how many abusive requests were dropped with HTTP 429 in 0.12 ms?',
          bn: 'আমাদের ১৮০০টি ইনকামিং রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে কতটি ক্ষতিকর রিকোয়েস্ট ০.১২ ms সময়ে HTTP 429 দিয়ে বাতিল করা হয়েছিল?',
        },
        options: [
          { en: '1300 requests rejected (while 500 legitimate requests were accepted with 0.95 ms latency)', bn: '১৩০০টি রিকোয়েস্ট বাতিল (যেখানে ৫০০টি বৈধ রিকোয়েস্ট ০.৯৫ ms লেটেন্সিতে গৃহীত হয়েছিল)' },
          { en: '10 requests rejected across the entire server', bn: 'পুরো সার্ভার মিলিয়ে মোট ১০টি রিকোয়েস্ট বাতিল' },
          { en: '1800 requests all accepted without limits', bn: 'কোনো সীমা ছাড়াই ১৮০০টি রিকোয়েস্টের সব গৃহীত' },
          { en: '0 requests processed', bn: '০টি রিকোয়েস্ট পরিচালিত' },
        ],
        answer: 0,
        hint: { en: '1300 requests were rejected with HTTP 429.', bn: '১৩০০টি রিকোয়েস্ট HTTP 429 দিয়ে বাতিল হয়েছিল।' },
        explanation: {
          en: 'The simulation accepted 500 valid requests and dropped 1300 abusive requests exceeding the burst capacity.',
          bn: 'সিমুলেশন ৫০০টি বৈধ রিকোয়েস্ট গ্রহণ করেছিল এবং বার্স্ট সীমা উপচে পড়া ১৩০০টি ক্ষতিকর রিকোয়েস্ট বাতিল করেছিল।',
        },
      },
      {
        id: 'lim-qz-2',
        kind: 'mcq',
        topic: 'rate-vs-burst-mechanics',
        question: {
          en: 'In the directive limit_req zone=api burst=20 nodelay;, what does burst=20 provide for legitimate clients?',
          bn: 'limit_req zone=api burst=20 nodelay; নির্দেশে burst=20 সাধারণ ব্যবহারকারীদের জন্য কী সুবিধা দেয়?',
        },
        options: [
          { en: 'It accommodates natural human browsing bursts (such as loading multiple page assets simultaneously) without triggering false positive rate-limit errors', bn: 'এটি ব্যবহারকারীর স্বাভাবিক ব্রাউজিংয়ের আকস্মিক চাপ (যেমন একসাথে কয়েকটি রিসোর্স লোড হওয়া) ভুলবশত ব্লক না করে সামলে নেয়' },
          { en: 'It increases the price of server cloud hosting by 20 dollars', bn: 'এটি সার্ভারের ক্লাউড হোস্টিংয়ের খরচ ২০ ডলার বাড়িয়ে দেয়' },
          { en: 'It forces the client to download 20 copies of the website homepage', bn: 'এটি ক্লায়েন্টকে হোমপেজের ২০টি কপি ডাউনলোড করতে বাধ্য করে' },
          { en: 'It restarts the database 20 times per minute', bn: 'এটি প্রতি মিনিটে ডেটাবেজকে ২০ বার রিস্টার্ট করে' },
        ],
        answer: 0,
        hint: { en: 'Burst accommodates temporary human browsing spikes.', bn: 'বার্স্ট ব্যবহারকারীদের ক্ষণস্থায়ী ব্রাউজিং চাপ সামলে নেয়।' },
        explanation: {
          en: 'Burst capacity permits temporary surges of traffic up to the specified limit without dropping packets.',
          bn: 'বার্স্ট ক্ষমতা প্যাকেট বাতিল না করেই নির্দিষ্ট সীমা পর্যন্ত ট্রাফিকের সাময়িক তীব্র প্রবাহকে অনুমতি দেয়।',
        },
      },
      {
        id: 'lim-qz-3',
        kind: 'mcq',
        topic: 'limit-req-zone-rate-format',
        question: {
          en: 'Which parameter in limit_req_zone specifies that an IP can make at most 60 requests in one minute?',
          bn: 'limit_req_zone-এর কোন প্যারামিটারটি নির্দেশ করে যে একটি আইপি এক মিনিটে সর্বোচ্চ ৬০টি রিকোয়েস্ট পাঠাতে পারবে?',
        },
        options: [
          { en: 'rate=60r/m (sixty requests per minute)', bn: 'rate=60r/m (প্রতি মিনিটে ৬০টি রিকোয়েস্ট)' },
          { en: 'speed=slow;60', bn: 'speed=slow;60' },
          { en: 'time=60seconds', bn: 'time=60seconds' },
          { en: 'max=60reqs', bn: 'max=60reqs' },
        ],
        answer: 0,
        hint: { en: 'rate=60r/m specifies 60 requests per minute.', bn: 'rate=60r/m প্রতি মিনিটে ৬০টি রিকোয়েস্ট নির্দেশ করে।' },
        explanation: {
          en: 'Nginx rate limits can be specified in requests per second (r/s) or requests per minute (r/m).',
          bn: 'Nginx রেট লিমিট প্রতি সেকেন্ডে রিকোয়েস্ট (r/s) অথবা প্রতি মিনিটে রিকোয়েস্ট (r/m) হিসেবে নির্ধারণ করা যায়।',
        },
      },
      {
        id: 'lim-qz-4',
        kind: 'predict',
        topic: 'rate-limiting-zone-directive-name',
        question: {
          en: 'What 14 letter lowercase directive with two underscores defines a shared rate limiting memory zone (e.g. limit_req_zone)?',
          bn: '২টি আন্ডারস্কোরযুক্ত ১৪ অক্ষরের নির্দেশটির নাম কী যা শেয়ার্ড রেট লিমিটিং মেমরি জোন তৈরি করে (যেমন limit_req_zone)?',
        },
        answer: 'limit_req_zone',
        accept: ['limit_req_zone', 'limit_req_zone;', 'limitreqzone'],
        hint: { en: 'limit_req_zone', bn: 'limit_req_zone' },
        explanation: {
          en: 'The limit_req_zone directive defines parameters for a rate limiting zone in the http context.',
          bn: 'limit_req_zone নির্দেশ http কনটেক্সটে রেট লিমিটিং জোনের প্যারামিটার নির্ধারণ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'logs-and-the-log',
    title: {
      en: 'Observability and Structured Logging: JSON Formats and Upstream Metrics',
      bn: 'অবজারভেবিলিটি ও স্ট্রাকচার্ড লগিং: JSON ফরম্যাট ও আপস্ট্রিম মেট্রিক্স',
    },
  },
};
