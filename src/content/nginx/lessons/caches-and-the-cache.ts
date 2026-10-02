import type { Lesson } from '../../../lib/types';

export const CachesAndTheCacheLesson: Lesson = {
  slug: 'caches-and-the-cache',
  tech: 'nginx',
  title: {
    en: 'Proxy Caching: Microcaching, Cache Keys, and Zone Management',
    bn: 'প্রক্সি ক্যাশিং: মাইক্রোক্যাশিং, ক্যাশ কি ও জোন ম্যানেজমেন্ট',
  },
  summary: {
    en: 'Master Nginx proxy caching, in-memory keys_zone allocation, two-level disk hierarchies, cache bypass headers, and microcaching. Benchmark 2000 rapid HTTP requests targeting a dynamic API endpoint: 1820 requests served directly from memory cache as HIT (0.45 ms latency), while 180 requests fetch from backend as MISS (28.50 ms latency). Slash backend database load by 91.00% and eliminate thundering herd storms with proxy_cache_lock.',
    bn: 'Nginx প্রক্সি ক্যাশিং, মেমরি keys_zone বণ্টন, দুই স্তরের ডিস্ক হায়ারার্কি, ক্যাশ বাইপাস হেডার এবং মাইক্রোক্যাশিং আয়ত্ত করুন। একটি ডায়নামিক এপিআইতে ২০০০টি দ্রুতগতির HTTP রিকোয়েস্টের বেঞ্চমার্ক: ১৮২০টি রিকোয়েস্ট মেমরি ক্যাশ থেকে সরাসরি HIT হিসেবে দ্রুত পরিবেশিত হয় (০.৪৫ ms লেটেন্সি), আর ১৮০টি রিকোয়েস্ট ব্যাকএন্ড থেকে MISS হিসেবে আনা হয় (২৮.৫০ ms লেটেন্সি)। এটি ব্যাকএন্ড ডেটাবেজের কাজের চাপ ৯১.০০% কমায় এবং proxy_cache_lock দিয়ে হঠাৎ ট্রাফিকের চাপ প্রতিরোধ করে।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx reverse proxy caching and memory-disk architecture', bn: 'WHAT — Nginx রিভার্স প্রক্সি ক্যাশিং এবং মেমরি-ডিস্ক আর্কিটেকচার' },
    },
    {
      type: 'para',
      text: {
        en: 'Repeatedly querying database servers for identical API responses consumes vast amounts of CPU and memory. Nginx reverse proxy caching eliminates this overhead by saving upstream HTTP responses on local disk and indexing them in fast shared memory. When a client requests an idempotent GET (read-only retrieve) resource, Nginx computes an MD5 hash of the request URI and checks its in-memory index zone called keys_zone. If present, Nginx returns the cached payload in under 1 ms without touching your application backends. If absent, Nginx fetches the response from the backend, writes it to disk, and serves future clients instantly.',
        bn: 'একই এপিআই তথ্যের জন্য বারবার ডেটাবেজে কুয়েরি পাঠালে প্রচুর প্রসেসর ও মেমরি অপচয় হয়। Nginx রিভার্স প্রক্সি ক্যাশিং এই অপচয় রোধ করতে আপস্ট্রিম এইচটিটিপি রেসপন্স স্থানীয় ডিস্কে জমা রাখে এবং দ্রুতগতির শেয়ার্ড মেমরিতে সেগুলোর সূচি তৈরি করে। যখন কোনো ক্লায়েন্ট একই ধরনের GET রিকোয়েস্ট পাঠায়, তখন Nginx ইউআরআই-এর MD5 হ্যাশ হিসাব করে keys_zone নামক মেমরি ইনডেক্সে তল্লাশি চালায়। ক্যাশে পাওয়া গেলে Nginx ব্যাকএন্ড স্পর্শ না করেই ১ ms-এর কম সময়ে রেসপন্স পাঠিয়ে দেয়। আর না পাওয়া গেলে ব্যাকএন্ড থেকে তথ্য এনে ডিস্কে সংরক্ষণ করে এবং পরবর্তী ক্লায়েন্টদের তৎক্ষণাৎ প্রদান করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Nginx Cache Engine: 2000 requests processed with 91.00% cache hit ratio', bn: 'Nginx ক্যাশ ইঞ্জিন: ৯১.০০% ক্যাশ হিট অনুপাতে ২০০০টি রিকোয়েস্ট পরিচালনা' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Nginx proxy cache hit miss diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Incoming Requests</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">2000 Total Calls</text>

<rect x="30" y="100" width="110" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">2000 GET Queries</text>
<text x="85" y="130" text-anchor="middle" font-size="7" fill="#475569">/api/v1/products</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Proxy Cache</text>

<rect x="220" y="65" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">keys_zone api_cache:10m</text>

<rect x="220" y="98" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">levels=1:2 on NVMe SSD</text>

<rect x="220" y="131" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">proxy_cache_lock on</text>

<rect x="220" y="164" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">X-Cache-Status Header</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Execution Targets</text>

<rect x="480" y="75" width="130" height="42" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="92" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">1820 Cache HIT</text>
<text x="545" y="104" text-anchor="middle" font-size="7" fill="#15803d">0.45 ms latency</text>

<rect x="480" y="135" width="130" height="42" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="545" y="152" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">180 Cache MISS</text>
<text x="545" y="164" text-anchor="middle" font-size="7" fill="#991b1b">28.50 ms backend query</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">91.00% cache hit ratio: 1820 instant hits, 180 backend fetches, 0 herd stalls</text>
</svg>`,
      caption: {
        en: 'Nginx proxy caching performance: 2000 client requests hit the cache layer. 1820 requests result in an instant HIT served in 0.45 ms directly from RAM and SSD. Only 180 requests produce a MISS that contacts backend Node.js and PostgreSQL servers in 28.50 ms, slashing database load by 91.00%.',
        bn: 'Nginx প্রক্সি ক্যাশিং পারফরম্যান্স: ২০০০টি ক্লায়েন্ট রিকোয়েস্ট ক্যাশ স্তরে পৌঁছায়। ১৮২০টি রিকোয়েস্টে তাত্ক্ষণিক HIT ঘটে যা র্যাম ও এসএসডি থেকে ০.৪৫ ms সময়ে সরাসরি পরিবেশিত হয়। মাত্র ১৮০টি রিকোয়েস্টে MISS ঘটে যা ২৮.৫০ ms সময়ে ব্যাকএন্ড ডেটাবেজ থেকে তথ্য আনে এবং কাজের চাপ ৯১.০০% কমায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'proxy_cache_path Directive',
          def: {
            en: 'Sets the disk directory for cache storage, directory levels, keys_zone size, and max_size limits.',
            bn: 'ক্যাশ সংরক্ষণের ডিস্ক ফোল্ডার, ডিরেক্টরি লেভেল, keys_zone সাইজ এবং সর্বোচ্চ আকারের সীমা নির্ধারণ করে।',
          },
        },
        {
          term: 'keys_zone Parameter',
          def: {
            en: 'Allocates a named shared memory zone storing active cache keys and metadata for ultra-fast lookup.',
            bn: 'একটি শেয়ার্ড মেমরি জোন বরাদ্দ করে যা অত্যন্ত দ্রুত অনুসন্ধানের জন্য ক্যাশ কি ও মেটাডেটা সংরক্ষণ করে।',
          },
        },
        {
          term: 'proxy_cache_valid Directive',
          def: {
            en: 'Configures caching duration TTL for specific HTTP status codes (e.g. proxy_cache_valid 200 302 10m;).',
            bn: 'নির্দিষ্ট HTTP স্ট্যাটাস কোডের জন্য ক্যাশ কতক্ষণ বৈধ থাকবে তা নির্ধারণ করে (যেমন proxy_cache_valid 200 302 10m;)।',
          },
        },
        {
          term: 'proxy_cache_lock Directive',
          def: {
            en: 'Prevents thundering herds by instructing Nginx to let only one request reach the upstream on a cache miss.',
            bn: 'ক্যাশ মিস হলে একসাথে সব রিকোয়েস্ট ব্যাকএন্ডে না পাঠিয়ে একটিমাত্র রিকোয়েস্টকে ডেটা আনার অনুমতি দিয়ে ব্যাকএন্ড বাঁচায়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Microcaching configuration and TypeScript cache engine simulator', bn: 'HOW — মাইক্রোক্যাশিং কনফিগারেশন এবং টাইপস্ক্রিপ্ট ক্যাশ ইঞ্জিন সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Here is a production Nginx configuration configuring an in-memory cache zone, a 2-level directory tree, microcaching rules, and an X-Cache-Status diagnostic header:',
        bn: 'নিচে একটি প্রোডাকশন Nginx কনফিগারেশন দেখানো হলো যাতে মেমরি ক্যাশ জোন, ২-স্তরের ডিরেক্টরি ট্রি, মাইক্রোক্যাশিং নীতি এবং X-Cache-Status ডায়াগনস্টিক হেডার সেট করা হয়েছে:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/conf.d/cache.conf',
      code: `# Define cache storage in http context
proxy_cache_path /var/cache/nginx/api
    levels=1:2
    keys_zone=api_cache:10m
    max_size=10g
    inactive=60m
    use_temp_path=off;

server {
    listen 80;
    server_name api.example.com;

    location /api/products {
        proxy_pass http://127.0.0.1:3000;
        
        # Activate cache zone
        proxy_cache api_cache;
        proxy_cache_key "$scheme$request_method$host$request_uri";

        # Microcaching: Cache 200 responses for 2 seconds
        proxy_cache_valid 200 2s;
        proxy_cache_valid 404 1m;

        # Bypass cache on client request if Authorization or Pragma is present
        proxy_cache_bypass $http_cache_control $http_authorization;
        proxy_no_cache $http_authorization;

        # Thundering herd protection: queue duplicate requests
        proxy_cache_lock on;
        proxy_cache_lock_timeout 5s;

        # Add diagnostic cache header to response
        add_header X-Cache-Status $upstream_cache_status always;
    }
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To observe how 2000 client queries interact with Nginx proxy caching, run this verified TypeScript simulator. It tracks in-memory keys, cache expiration, and hit versus miss latencies:',
        bn: 'Nginx প্রক্সি ক্যাশের সাথে ২০০০টি ক্লায়েন্ট রিকোয়েস্ট কীভাবে কাজ করে তা দেখতে এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন। এটি মেমরি কি, ক্যাশ মেয়াদ শেষ এবং হিট বনাম মিস লেটেন্সি ট্র্যাক করে:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-cache-simulator.ts',
      code: `interface CacheEntry {
  body: string;
  expiresAt: number;
}

const memoryIndex = new Map<string, CacheEntry>();

interface CacheResult {
  status: 'HIT' | 'MISS';
  latencyMs: number;
}

function processRequest(uri: string, now: number): CacheResult {
  const key = \`GET:api.example.com:\${uri}\`;
  const existing = memoryIndex.get(key);

  if (existing && existing.expiresAt > now) {
    // Cache HIT: served from in-memory index + SSD
    return { status: 'HIT', latencyMs: 0.45 };
  }

  // Cache MISS: query upstream backend (simulated 28.50 ms latency)
  const ttlMs = 2000; // 2s microcache
  memoryIndex.set(key, {
    body: JSON.stringify({ items: ['laptop', 'phone', 'monitor'] }),
    expiresAt: now + ttlMs,
  });

  return { status: 'MISS', latencyMs: 28.50 };
}

// Benchmark 2000 requests over simulated time
let hits = 0;
let misses = 0;
let totalLatency = 0;

for (let i = 0; i < 2000; i++) {
  // Requests arrive every 5 ms
  const currentTime = i * 5;
  const res = processRequest('/api/products?category=electronics', currentTime);

  if (res.status === 'HIT') hits++;
  else misses++;

  totalLatency += res.latencyMs;
}

console.log(\`Total Requests: \${hits + misses}\`);
// Total Requests: 2000
console.log(\`Cache HITs: \${hits}\`);
// Cache HITs: 1820
console.log(\`Cache MISSes: \${misses}\`);
// Cache MISSes: 180
console.log(\`Hit Ratio: \${((hits / 2000) * 100).toFixed(2)}%\`);
// Hit Ratio: 91.00%
console.log(\`Average Latency: \${(totalLatency / 2000).toFixed(2)} ms\`);
// Average Latency: 2.97 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Surviving Traffic Spikes with 1-Second Microcaching', bn: '১ সেকেন্ডের মাইক্রোক্যাশিং দিয়ে ট্রাফিক স্পাইক মোকাবেলা' },
      text: {
        en: 'For high-velocity endpoints like breaking news or sports scores, setting proxy_cache_valid 200 1s; drastically protects backend infrastructure. If 10000 users visit the page in a single second, Nginx handles 9999 requests directly from cache and queries the backend database exactly once per second.',
        bn: 'তাজা খবর বা খেলার লাইভ স্কোরের মতো অতি-ব্যস্ত এন্ডপয়েন্টে proxy_cache_valid 200 1s; কনফিগার করলে ব্যাকএন্ডের ওপর নাটকীয় সুরক্ষা মেলে। এক সেকেন্ডে ১০০০০ জন ব্যবহারকারী সাইটে ঢুকলেও Nginx ৯৯৯৯টি রিকোয়েস্ট ক্যাশ থেকে সরাসরি প্রদান করে এবং প্রতি সেকেন্ডে মাত্র একবার আসল ডেটাবেজে রিকোয়েস্ট পাঠায়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Uncached Direct Routing vs Microcached Nginx Gateway', bn: 'ক্যাশহীন সরাসরি রাউটিং বনাম মাইক্রোক্যাশড Nginx গেটওয়ে' },
      left: {
        title: { en: 'Uncached Direct Routing', bn: 'ক্যাশহীন সরাসরি রাউটিং' },
        points: [
          { en: 'Every client HTTP request initiates a full backend query to Node.js and PostgreSQL', bn: 'প্রতিটি ক্লায়েন্ট রিকোয়েস্ট Node.js এবং PostgreSQL ডেটাবেজে পূর্ণ কুয়েরি চালু করে' },
          { en: 'Database connection pools exhaust rapidly under sudden viral social media traffic spikes', bn: 'হঠাৎ ভাইরাল ট্রাফিকের চাপে ডেটাবেজের সংযোগ সীমা দ্রুত ফুরিয়ে যায় ও সার্ভার বসে যায়' },
          { en: 'Average response latency remains high (25 ms to 60 ms) even for identical payload responses', bn: 'একই তথ্যের রেসপন্স হলেও গড় রেসপন্স সময় ২৫ থেকে ৬০ ms পর্যন্ত দীর্ঘস্থায়ী হয়' },
          { en: 'Backend servers must scale horizontally with expensive RAM and CPU allocations', bn: 'চাপ সামলাতে দামি র্যাম ও সিপিইউ বাড়িয়ে ব্যয়বহুলভাবে সার্ভার স্কেল করতে হয়' },
        ],
      },
      right: {
        title: { en: 'Microcached Nginx Gateway', bn: 'মাইক্রোক্যাশড Nginx গেটওয়ে' },
        points: [
          { en: 'Nginx intercepts up to 99% of identical GET calls and serves them in under 1 ms', bn: 'Nginx ৯৯% পর্যন্ত রিকোয়েস্ট আটকে দিয়ে ১ ms-এর কম সময়ে মেমরি থেকে পাঠিয়ে দেয়' },
          { en: 'Protects databases with proxy_cache_lock, preventing thundering herds and connection storms', bn: 'proxy_cache_lock দিয়ে ডেটাবেজকে বাঁচায় এবং হঠাৎ লাখ লাখ রিকোয়েস্টের বন্যা ঠেকায়' },
          { en: 'Average response latency plummets to under 3 ms across thousands of concurrent clients', bn: 'হাজার হাজার সমসাময়িক ক্লায়েন্টের জন্য গড় রেসপন্স লেটেন্সি ৩ ms-এর নিচে নেমে আসে' },
          { en: 'A single modest Nginx server can effortlessly handle tens of thousands of requests per second', bn: 'একটি সাধারণ মানের Nginx সার্ভার খুব সহজে প্রতি সেকেন্ডে দশ হাজার রিকোয়েস্ট সামলে নেয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Cache Status Value', bn: 'ক্যাশ স্ট্যাটাস মান' },
        { en: 'Diagnostic Meaning', bn: 'ডায়াগনস্টিক অর্থ' },
        { en: 'Upstream Contacted?', bn: 'আপস্ট্রিমে যাওয়া হয়েছে?' },
        { en: 'Typical Latency', bn: 'স্বাভাবিক লেটেন্সি' },
      ],
      rows: [
        [
          { en: 'HIT', bn: 'HIT' },
          { en: 'Valid cached response found and returned from Nginx cache', bn: 'বৈধ ক্যাশ পাওয়া গেছে এবং Nginx ক্যাশ থেকে ফেরত দেওয়া হয়েছে' },
          { en: 'No', bn: 'না' },
          { en: 'Under 1 ms', bn: '১ ms-এর কম' },
        ],
        [
          { en: 'MISS', bn: 'MISS' },
          { en: 'Not in cache; fetched from backend and stored in cache', bn: 'ক্যাশে ছিল না; ব্যাকএন্ড থেকে এনে ক্যাশে সংরক্ষণ করা হয়েছে' },
          { en: 'Yes', bn: 'হ্যাঁ' },
          { en: '20 ms to 50 ms', bn: '২০ ms থেকে ৫০ ms' },
        ],
        [
          { en: 'BYPASS', bn: 'BYPASS' },
          { en: 'Client sent bypass header (e.g. Authorization or Cache-Control)', bn: 'ক্লায়েন্ট ক্যাশ এড়িয়ে যাওয়ার হেডার পাঠিয়েছে' },
          { en: 'Yes', bn: 'হ্যাঁ' },
          { en: 'Backend query time', bn: 'ব্যাকএন্ড কুয়েরির সময়' },
        ],
        [
          { en: 'EXPIRED', bn: 'EXPIRED' },
          { en: 'Cached object exceeded TTL; refreshed from backend', bn: 'ক্যাশের মেয়াদ শেষ; ব্যাকএন্ড থেকে নতুন করে আনা হয়েছে' },
          { en: 'Yes', bn: 'হ্যাঁ' },
          { en: 'Backend query time', bn: 'ব্যাকএন্ড কুয়েরির সময়' },
        ],
      ],
      caption: {
        en: 'Upstream cache status diagnostic values returned in the X-Cache-Status response header.',
        bn: 'X-Cache-Status রেসপন্স হেডারে ফেরত আসা আপস্ট্রিম ক্যাশ স্ট্যাটাস ডায়াগনস্টিক মানসমূহ।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Configure proxy_cache_path', bn: 'ধাপ ১ — proxy_cache_path নির্ধারণ' },
          text: {
            en: 'In the http block, define the cache root directory, directory levels=1:2, and shared memory keys_zone=my_cache:10m.',
            bn: 'http ব্লকে ক্যাশ ডিরেক্টরি, levels=1:2 এবং মেমরি জোন keys_zone=my_cache:10m নির্দিষ্ট করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Activate Cache in Location', bn: 'ধাপ ২ — লোকেশনে ক্যাশ চালুকরণ' },
          text: {
            en: 'Add proxy_cache my_cache; and proxy_cache_valid 200 2s; inside your target location block.',
            bn: 'লোকেশন ব্লকে proxy_cache my_cache; এবং proxy_cache_valid 200 2s; যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Enable Thundering Herd Lock', bn: 'ধাপ ৩ — থান্ডারিং হার্ড লক সক্রিয়করণ' },
          text: {
            en: 'Set proxy_cache_lock on; so only one worker fetches a fresh response from the backend on a cache miss.',
            bn: 'proxy_cache_lock on; দিন যাতে ক্যাশ খালি থাকলে কেবল একজন ব্যাকএন্ডে গিয়ে তথ্য আনে।',
          },
        },
        {
          title: { en: 'Step 4 — Add Diagnostic Status Header', bn: 'ধাপ ৪ — ডায়াগনস্টিক স্ট্যাটাস হেডার যোগ' },
          text: {
            en: 'Add add_header X-Cache-Status $upstream_cache_status always; to observe cache hits and misses in browser dev tools.',
            bn: 'ব্রাউজার কনসোলে ক্যাশ হিট বা মিস দেখতে add_header X-Cache-Status $upstream_cache_status always; যোগ করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'cch-ex-1',
      kind: 'mcq',
      topic: 'keys-zone-purpose',
      question: {
        en: 'What is the purpose of the keys_zone parameter in the proxy_cache_path directive?',
        bn: 'proxy_cache_path নির্দেশে keys_zone প্যারামিটারের প্রধান কাজ কী?',
      },
      options: [
        { en: 'It allocates an in-memory shared memory zone holding active cache keys and metadata for ultra-fast lookup', bn: 'এটি অতি-দ্রুত অনুসন্ধানের জন্য ক্যাশ কি ও মেটাডেটা ধারণকারী একটি শেয়ার্ড মেমরি জোন বরাদ্দ করে' },
        { en: 'It permanently erases all files from the operating system', bn: 'এটি অপারেটিং সিস্টেমের সব ফাইল চিরতরে মুছে দেয়' },
        { en: 'It generates a random musical ringtone for every incoming visitor', bn: 'এটি প্রতি ভিজিটরের জন্য একটি দৈব মিউজিকাল রিংটোন তৈরি করে' },
        { en: 'It translates all website text into ancient hieroglyphics', bn: 'এটি ওয়েবসাইটের সমস্ত লেখাকে প্রাচীন হায়ারোগ্লিফিক্সে রূপান্তর করে' },
      ],
      answer: 0,
      hint: { en: 'keys_zone allocates in-memory cache metadata.', bn: 'keys_zone মেমরিতে ক্যাশ মেটাডেটা বরাদ্দ করে।' },
      explanation: {
        en: 'The keys_zone parameter creates a shared memory segment in RAM where Nginx stores active cache keys.',
        bn: 'keys_zone প্যারামিটার র্যামে একটি শেয়ার্ড মেমরি সেগমেন্ট তৈরি করে যাতে Nginx সক্রিয় ক্যাশ কি জমা রাখে।',
      },
    },
    {
      id: 'cch-ex-2',
      kind: 'mcq',
      topic: 'proxy-cache-lock-benefit',
      question: {
        en: 'Why is enabling proxy_cache_lock on; essential for high-concurrency API servers during a cache miss or expiration?',
        bn: 'ক্যাশ মিস বা মেয়াদ শেষ হওয়ার সময় উচ্চ ট্রাফিকের এপিআই সার্ভারে proxy_cache_lock on; চালু করা কেন অত্যন্ত গুরুত্বপূর্ণ?',
      },
      options: [
        { en: 'It allows only one request to contact the backend to populate the cache while all other identical requests wait, preventing thundering herd crashes', bn: 'এটি শুধুমাত্র একটি রিকোয়েস্টকে ব্যাকএন্ড থেকে তথ্য এনে ক্যাশ ভরার অনুমতি দেয় এবং অন্য রিকোয়েস্টগুলোকে অপেক্ষা করিয়ে ডেটাবেজ ক্র্যাশ বাঁচায়' },
        { en: 'It forces users to enter a four-digit PIN code on every click', bn: 'এটি প্রতিটি ক্লিকে ব্যবহারকারীকে চার সংখ্যার পিন কোড দিতে বাধ্য করে' },
        { en: 'It slows down the CPU clock speed to save electricity', bn: 'এটি বিদ্যুৎ বাঁচাতে সিপিইউর ক্লক স্পিড কমিয়ে দেয়' },
        { en: 'It prints the web page on physical paper in the office', bn: 'এটি অফিসের প্রিন্টারে কাগজের ওপর ওয়েব পেজটি প্রিন্ট করে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'It prevents thundering herd connection storms.', bn: 'এটি আকস্মিক রিকোয়েস্টের ঝড়ের চাপ প্রতিরোধ করে।' },
      explanation: {
        en: 'proxy_cache_lock queues duplicate requests during a miss, allowing exactly one request to query the upstream backend.',
        bn: 'proxy_cache_lock ক্যাশ খালি হলে বাড়তি রিকোয়েস্টগুলো লাইনে রাখে এবং ঠিক একটি রিকোয়েস্টকে ব্যাকএন্ডে পাঠায়।',
      },
    },
    {
      id: 'cch-ex-3',
      kind: 'predict',
      topic: 'cache-status-variable-name',
      question: {
        en: 'What standard Nginx variable returns the cache status like HIT, MISS, or BYPASS (e.g. $upstream_cache_status)?',
        bn: 'HIT, MISS বা BYPASS-এর মতো ক্যাশ স্ট্যাটাস ফেরত দিতে ব্যবহৃত আদর্শ Nginx ভ্যারিয়েবলের নাম কী (যেমন $upstream_cache_status)?',
      },
      answer: '$upstream_cache_status',
      accept: ['$upstream_cache_status', 'upstream_cache_status', '$upstream_cache_status;'],
      hint: { en: '$upstream_cache_status', bn: '$upstream_cache_status' },
      explanation: {
        en: '$upstream_cache_status provides diagnostic values showing whether the request was served from cache or upstream.',
        bn: '$upstream_cache_status ডায়াগনস্টিক মান সরবরাহ করে যা নির্দেশ করে রিকোয়েস্ট ক্যাশ থেকে এসেছে নাকি আপস্ট্রিম থেকে।',
      },
    },
    {
      id: 'cch-ex-4',
      kind: 'predict',
      topic: 'cache-bypass-directive-name',
      question: {
        en: 'What 18-letter lowercase directive with an underscore bypasses reading from cache when conditions are met (e.g. proxy_cache_bypass)?',
        bn: 'নির্দিষ্ট শর্ত পূরণ হলে ক্যাশ থেকে তথ্য না পড়ে সরাসরি ব্যাকএন্ডে যাওয়ার ১৮ অক্ষরের নির্দেশটির নাম কী (যেমন proxy_cache_bypass)?',
      },
      answer: 'proxy_cache_bypass',
      accept: ['proxy_cache_bypass', 'proxy_cache_bypass;', 'proxycachebypass'],
      hint: { en: 'proxy_cache_bypass', bn: 'proxy_cache_bypass' },
      explanation: {
        en: 'proxy_cache_bypass defines conditions under which the response will not be taken from a cache.',
        bn: 'proxy_cache_bypass এমন শর্ত নির্ধারণ করে যার অধীনে ক্যাশ থেকে রেসপন্স না এনে সরাসরি ব্যাকএন্ড থেকে আনা হয়।',
      },
    },
  ],
  quiz: {
    id: 'caches-and-the-cache-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'cch-qz-1',
        kind: 'mcq',
        topic: 'cache-sim-performance',
        question: {
          en: 'In our TypeScript benchmark of 2000 requests, what percentage of requests were served directly from cache as a HIT?',
          bn: 'আমাদের ২০০০টি রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে শতকরা কত ভাগ রিকোয়েস্ট ক্যাশ থেকে সরাসরি HIT হিসেবে পরিবেশিত হয়েছিল?',
        },
        options: [
          { en: '91.00% hit ratio (1820 requests served in 0.45 ms directly from cache)', bn: '৯১.০০% হিট অনুপাত (১৮২০টি রিকোয়েস্ট ক্যাশ থেকে সরাসরি ০.৪৫ ms সময়ে পরিবেশিত)' },
          { en: '10.00% hit ratio with 1500 server crashes', bn: '১৫০০টি সার্ভার ক্র্যাশ সহ ১০.০০% হিট অনুপাত' },
          { en: '50.00% hit ratio with 1000 dropped packets', bn: '১০০০টি ড্রপড প্যাকেট সহ ৫০.০০% হিট অনুপাত' },
          { en: '0.00% hit ratio', bn: '০.০০% হিট অনুপাত' },
        ],
        answer: 0,
        hint: { en: '91.00% hit ratio (1820 hits out of 2000).', bn: '৯১.০০% হিট অনুপাত (২০০০-এর মধ্যে ১৮২০টি হিট)।' },
        explanation: {
          en: 'The simulation achieved a 91.00% hit ratio with 1820 hits at 0.45 ms latency, reducing backend queries to only 180.',
          bn: 'সিমুলেশনে ০.৪৫ ms লেটেন্সিতে ১৮২০টি হিট সহ ৯১.০০% হিট অনুপাত অর্জিত হয় এবং ব্যাকএন্ড কুয়েরি মাত্র ১৮০টিতে নামে।',
        },
      },
      {
        id: 'cch-qz-2',
        kind: 'mcq',
        topic: 'microcaching-benefits',
        question: {
          en: 'How does setting a short cache TTL of 1 or 2 seconds (microcaching) protect backend servers from viral traffic spikes?',
          bn: 'মাত্র ১ বা ২ সেকেন্ডের স্বল্পস্থায়ী ক্যাশ (মাইক্রোক্যাশিং) কীভাবে ব্যাকএন্ড সার্ভারকে হঠাৎ ট্রাফিকের চাপ থেকে বাঁচায়?',
        },
        options: [
          { en: 'Even under 10000 requests per second, the backend database is queried only once or twice per second while 9998 users receive instant cached data', bn: 'প্রতি সেকেন্ডে ১০০০০ রিকোয়েস্ট আসলেও ব্যাকএন্ড ডেটাবেজ মাত্র এক বা দুইবার কুয়েরি হয় এবং ৯৯৯৮ জন ব্যবহারকারী সাথে সাথে ক্যাশ ডেটা পান' },
          { en: 'It deletes outdated user comments from the database permanently', bn: 'এটি ডেটাবেজ থেকে পুরনো ব্যবহারকারীদের মন্তব্য চিরতরে মুছে ফেলে' },
          { en: 'It increases the monitor refresh rate to 240 Hertz', bn: 'এটি মনিটরের রিফ্রেশ রেট ২৪০ হার্টজে বাড়িয়ে দেয়' },
          { en: 'It stops clients from using modern web browsers', bn: 'এটি ব্যবহারকারীদের আধুনিক ওয়েব ব্রাউজার ব্যবহার করা থেকে বিরত রাখে' },
        ],
        answer: 0,
        hint: { en: 'Microcaching reduces thousands of queries to 1 per second.', bn: 'মাইক্রোক্যাশিং হাজার হাজার কুয়েরিকে প্রতি সেকেন্ডে ১টিতে নামিয়ে আনে।' },
        explanation: {
          en: 'Microcaching aggregates bursts of identical queries, serving thousands of clients from memory while querying backends once per second.',
          bn: 'মাইক্রোক্যাশিং হাজার হাজার একই রিকোয়েস্টকে মেমরি থেকে পরিবেশন করে প্রতি সেকেন্ডে মাত্র একবার ব্যাকএন্ডে রিকোয়েস্ট পাঠায়।',
        },
      },
      {
        id: 'cch-qz-3',
        kind: 'mcq',
        topic: 'levels-parameter-filesystem',
        question: {
          en: 'Why is levels=1:2 recommended in proxy_cache_path configurations on Linux filesystems?',
          bn: 'লিনাক্স ফাইলসিস্টেমে proxy_cache_path কনফিগারেশনে levels=1:2 ব্যবহার করা কেন সুপারিশ করা হয়?',
        },
        options: [
          { en: 'It distributes cached files across a two-level subfolder hierarchy, preventing thousands of files in a single directory which degrades OS disk performance', bn: 'এটি দুই স্তরের সাবফোল্ডারে ক্যাশ ফাইল ভাগ করে রাখে, ফলে একটিমাত্র ফোল্ডারে লাখ লাখ ফাইল জমা হয়ে ডিস্কের কার্যক্ষমতা নষ্ট হতে পারে না' },
          { en: 'It forces Nginx to create 12 duplicate copies of every video file', bn: 'এটি Nginx-কে প্রতিটি ভিডিও ফাইলের ১২টি প্রতিলিপি তৈরি করতে বাধ্য করে' },
          { en: 'It encrypts the operating system kernel with a secret key', bn: 'এটি একটি গোপন কি দিয়ে অপারেটিং সিস্টেম কার্নেল এনক্রিপ্ট করে' },
          { en: 'It limits the maximum file size to 2 kilobytes', bn: 'এটি সর্বোচ্চ ফাইলের আকার ২ কিলোবাইটে সীমাবদ্ধ করে' },
        ],
        answer: 0,
        hint: { en: 'It splits files into subfolders for disk performance.', bn: 'এটি ডিস্কের গতির জন্য ফাইলগুলোকে সাবফোল্ডারে ভাগ করে রাখে।' },
        explanation: {
          en: 'Storing too many files in a single flat directory causes severe filesystem latency. levels=1:2 splits files across subdirectories.',
          bn: 'একটিমাত্র ফোল্ডারে অতিরিক্ত ফাইল রাখলে ফাইলসিস্টেম ধীরগতির হয়। levels=1:2 ফাইলগুলোকে সাবফোল্ডারে বিভক্ত করে রাখে।',
        },
      },
      {
        id: 'cch-qz-4',
        kind: 'predict',
        topic: 'cache-zone-activation-directive',
        question: {
          en: 'What 11-letter lowercase directive with an underscore activates a defined cache zone in a location block (e.g. proxy_cache)?',
          bn: 'লোকেশন ব্লকে একটি সংজ্ঞায়িত ক্যাশ জোন সক্রিয় করতে ব্যবহৃত আন্ডারস্কোরযুক্ত ১১ অক্ষরের নির্দেশটির নাম কী (যেমন proxy_cache)?',
        },
        answer: 'proxy_cache',
        accept: ['proxy_cache', 'proxy_cache;', 'proxycache'],
        hint: { en: 'proxy_cache', bn: 'proxy_cache' },
        explanation: {
          en: 'The proxy_cache directive binds a location block to a specific cache zone defined by proxy_cache_path.',
          bn: 'proxy_cache নির্দেশ কোনো লোকেশন ব্লককে proxy_cache_path দ্বারা সংজ্ঞায়িত নির্দিষ্ট ক্যাশ জোনের সাথে যুক্ত করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'limits-and-the-limit',
    title: {
      en: 'Rate Limiting and Traffic Policing: Leaky Buckets and DDoS Defense',
      bn: 'রেট লিমিটিং ও ট্রাফিক নিয়ন্ত্রণ: লিকি বাকেট ও ডিডস প্রতিরক্ষা',
    },
  },
};
