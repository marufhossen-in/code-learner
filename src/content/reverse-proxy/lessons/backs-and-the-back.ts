import type { Lesson } from '../../../lib/types';

export const BacksAndTheBackLesson: Lesson = {
  slug: 'backs-and-the-back',
  tech: 'reverse-proxy',
  title: {
    en: 'Upstream Backend Pools — Balancing and Buffer Offloading',
    bn: 'আপস্ট্রিম ব্যাকএন্ড পুল — ব্যালেন্সিং ও বাফার অফলোডিং',
  },
  summary: {
    en: 'A foundational overview of upstream backend pools and reverse proxy load balancing. Master weighted round robin, least connections, and ip_hash balancing algorithms, and configure proxy buffering to offload slow mobile clients, saving 245 ms of backend thread lock time across 3 upstream nodes.',
    bn: 'আপস্ট্রিম ব্যাকএন্ড পুল ও রিভার্স প্রক্সি লোড ব্যালেন্সিংয়ের মৌলিক ধারণা। ওয়েটেড রাউন্ড রবিন, লিস্ট কানেকশন ও ip_hash অ্যালগরিদম পরিচালনা এবং ধীরগতির মোবাইল ক্লায়েন্টদের জন্য প্রক্সি বাফারিং কনফিগার করে ৩টি নোডে প্রতি থ্রেডে ২৪৫ ms সময় সাশ্রয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Upstream pools, balancing algorithms, and response buffering', bn: 'WHAT — আপস্ট্রিম পুল, ব্যালেন্সিং অ্যালগরিদম ও রেসপন্স বাফারিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When your backend applications scale across multiple servers, a reverse proxy distributes incoming requests across an upstream server pool. In production engines like Nginx, HAProxy, and Envoy, upstream definitions group backend instances under a unified routing target. By selecting appropriate load balancing algorithms, you match traffic distribution to your workload characteristics. Weighted round robin routes proportionally more requests to high-capacity hardware, while least-connections directs traffic to nodes with the fewest active tasks. Crucially, reverse proxies provide response buffering: reading full application responses over fast local datacenter networks in milliseconds, storing payloads in proxy memory buffers, and streaming data gradually to slow mobile clients. This decouples fast application runtimes from sluggish consumer network connections.',
        bn: 'যখন আপনার ব্যাকএন্ড অ্যাপ্লিকেশন একাধিক সার্ভারে বিস্তৃত হয়, তখন একটি রিভার্স প্রক্সি আগমনী সমস্ত রিকোয়েস্ট একটি আপস্ট্রিম সার্ভার পুলে সুষমভাবে ভাগ করে দেয়। Nginx, HAProxy এবং Envoy-এর মতো এন্টারপ্রাইজ ইঞ্জিনে আপস্ট্রিম ব্লকের মাধ্যমে একাধিক ব্যাকএন্ড নোডকে একটি অভিন্ন রাউটিং ঠিকানায় একত্রিত করা হয়। কাজের ধরনের উপর ভিত্তি করে সঠিক ব্যালেন্সিং অ্যালগরিদম নির্বাচন করা হয়। ওয়েটেড রাউন্ড রবিন শক্তিশালী হার্ডওয়্যারে আনুপাতিক হারে বেশি রিকোয়েস্ট পাঠায়, আর লিস্ট-কানেকশন সবচেয়ে কম ব্যস্ত নোডে ট্রাফিক পরিচালনা করে। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো প্রক্সি বাফারিং: রিভার্স প্রক্সি ডাটা সেন্টারের দ্রুতগতির নেটওয়ার্ক দিয়ে মাত্র কয়েক মিলিসেকেন্ডে ব্যাকএন্ডের সম্পূর্ণ রেসপন্স নিজের মেমরিতে জমা করে এবং মোবাইল ক্লায়েন্টকে ধীরে ধীরে পাঠায়। ফলে ব্যাকএন্ড সার্ভার দীর্ঘ সময় ক্লায়েন্টের জন্য আটকে না থেকে দ্রুত পরবর্তী কাজ শুরু করতে পারে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Upstream weighted balancing and response buffer offload timeline', bn: 'আপস্ট্রিম ওয়েটেড ব্যালেন্সিং ও রেসপন্স বাফার অফলোডের সময়রেখা' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Upstream Backend Pool Balancing and Buffer Offloading diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Reverse Proxy Gateway</text>

<rect x="35" y="75" width="140" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="105" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">500 Inbound Requests</text>
<text x="105" y="108" text-anchor="middle" font-size="7" fill="#1e40af">Weighted Balancing Engine</text>

<rect x="35" y="125" width="140" height="60" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="105" y="145" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Proxy Buffering Active</text>
<text x="105" y="160" text-anchor="middle" font-size="7" fill="#166534">Backend freed in 5 ms</text>
<text x="105" y="175" text-anchor="middle" font-size="7" fill="#166534">+245 ms saved vs slow client</text>

<line x1="185" y1="85" x2="235" y2="70" stroke="#16a34a" stroke-width="2"/>
<line x1="185" y1="105" x2="235" y2="120" stroke="#3b82f6" stroke-width="1.5"/>
<line x1="185" y1="125" x2="235" y2="165" stroke="#3b82f6" stroke-width="1.5"/>

<rect x="235" y="45" width="180" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="325" y="65" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Server A: weight 3 (60.00%)</text>
<text x="325" y="80" text-anchor="middle" font-size="8" fill="#166534">300 requests dispatched</text>

<rect x="235" y="100" width="180" height="45" rx="4" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
<text x="325" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#334155">Server B: weight 1 (20.00%)</text>
<text x="325" y="135" text-anchor="middle" font-size="8" fill="#64748b">100 requests dispatched</text>

<rect x="235" y="155" width="180" height="45" rx="4" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
<text x="325" y="175" text-anchor="middle" font-size="9" font-weight="700" fill="#334155">Server C: weight 1 (20.00%)</text>
<text x="325" y="190" text-anchor="middle" font-size="8" fill="#64748b">100 requests dispatched</text>

<rect x="445" y="35" width="170" height="165" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="530" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">Slow Consumer Offload</text>
<text x="530" y="90" text-anchor="middle" font-size="8" fill="#78350f">Mobile 4G: 250 ms transfer</text>
<text x="530" y="120" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Backend thread unblocked</text>
<text x="530" y="150" text-anchor="middle" font-size="7" fill="#64748b">Proxy trickles buffer</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Weighted pool dispatches 300 requests to Server A while saving 245 ms backend lock time</text>
</svg>`,
      caption: {
        en: 'The upstream pool dispatches 300 requests (60.00%) to Server A, 100 (20.00%) to Server B, and 100 to Server C across 500 requests. Proxy buffering frees backend threads in 5 ms versus 250 ms slow client time (+245 ms saved across 3 nodes).',
        bn: 'আপস্ট্রিম পুলটি ৫০০ রিকোয়েস্টে সার্ভার A তে ৩০০টি (৬০.০০%), B তে ১০০টি (২০.০০%) এবং C তে ১০০টি রিকোয়েস্ট পাঠায়। প্রক্সি বাফারিং ২৫০ ms ধীরগতির ক্লায়েন্টের বদলে ৫ ms এই ব্যাকএন্ড থ্রেড মুক্ত করে (৩টি নোডে +২৪৫ ms সাশ্রয়)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Upstream Pool',
          def: {
            en: 'A named configuration block in a reverse proxy defining a collection of backend servers that fulfill incoming proxied requests.',
            bn: 'রিভার্স প্রক্সির একটি কনফিগারেশন ব্লক যা প্রক্সাইড রিকোয়েস্ট সম্পন্নকারী ব্যাকএন্ড সার্ভারগুলোর সমষ্টিকে সংজ্ঞায়িত করে।',
          },
        },
        {
          term: 'Weighted Round Robin',
          def: {
            en: 'A load balancing algorithm that rotates requests sequentially among servers in proportion to assigned numerical capacity weights.',
            bn: 'একটি লোড ব্যালেন্সিং অ্যালগরিদম যা নির্ধারিত ধারণক্ষমতার ওজনের অনুপাতে পর্যায়ক্রমে সার্ভারগুলোতে রিকোয়েস্ট পাঠায়।',
          },
        },
        {
          term: 'Proxy Buffering',
          def: {
            en: 'The mechanism where the reverse proxy quickly downloads backend responses into internal buffers, releasing backend workers immediately.',
            bn: 'কৌশল যার মাধ্যমে রিভার্স প্রক্সি ব্যাকএন্ডের রেসপন্স দ্রুত মেমরিতে নিয়ে ব্যাকএন্ড ওয়ার্কারকে তাৎক্ষণিক মুক্ত করে দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Resource optimization and slow client protection', bn: 'কেন — সক্ষমতার সর্বোচ্চ ব্যবহার ও ধীরগতির ক্লায়েন্ট থেকে সুরক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Protect backend runtimes from slow network clients: streaming large responses through proxy buffers prevents slow mobile 4G downloads from tying up Node.js or Python application threads for hundreds of milliseconds.', bn: 'ধীরগতির ক্লায়েন্ট থেকে ব্যাকএন্ড রক্ষা: প্রক্সি বাফারিং ব্যবহারের ফলে মোবাইল ইন্টারনেটের দীর্ঘ ডাউনলোডের কারণে ব্যাকএন্ড অ্যাপ্লিকেশনের মূল্যবান থ্রেড শত শত মিলিসেকেন্ড আটকে থাকে না।' },
        { en: 'Match server load to physical hardware capability: weighted balancing assigns 3x more traffic to 16-core servers than older 4-core worker nodes.', bn: 'হার্ডওয়্যার সক্ষমতা অনুযায়ী ট্রাফিক ভাগ: ওয়েটেড ব্যালেন্সিংয়ের মাধ্যমে শক্তিশালী ১৬-কোর সার্ভারে দুর্বল ৪-কোর সার্ভারের চেয়ে ৩ গুণ বেশি ট্রাফিক পাঠানো যায়।' },
        { en: 'Prevent uneven hot-spotting with least-connections: long-lived transactions automatically divert fresh requests toward idle backend servers.', bn: 'সার্ভারের একমুখী চাপ রোধ: লিস্ট-কানেকশন অ্যালগরিদম জটিল বা দীর্ঘমেয়াদী কাজ চলাকালীন নতুন রিকোয়েস্টগুলোকে কম ব্যস্ত সার্ভারে পাঠিয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring upstream pools in 4 steps', bn: 'HOW — ৪টি ধাপে আপস্ট্রিম পুল কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare upstream block', bn: '১. আপস্ট্রিম ব্লক ঘোষণা' }, text: { en: 'Specify upstream backend_pool in the http configuration context.', bn: 'http কনটেক্সটের ভেতরে upstream backend_pool ব্লক লিখুন।' } },
        { title: { en: '2. Assign server weights', bn: '২. সার্ভারের ওজন নির্ধারণ' }, text: { en: 'Add server nodes with weight=3 for primary hosts and weight=1 for secondary.', bn: 'প্রধান সার্ভারের জন্য weight=3 এবং সাধারণ নোডের জন্য weight=1 দিন।' } },
        { title: { en: '3. Enable proxy buffering', bn: '৩. প্রক্সি বাফারিং সক্রিয়করণ' }, text: { en: 'Configure proxy_buffering on; and proxy_buffers 8 16k; inside location blocks.', bn: 'লোকেশন ব্লকে proxy_buffering on; এবং বাফারের আকার নির্ধারণ করুন।' } },
        { title: { en: '4. Pass traffic to pool', bn: '৪. পুলে ট্রাফিক ফরোয়ার্ড করা' }, text: { en: 'Route inbound requests with proxy_pass http://backend_pool;.', bn: 'proxy_pass http://backend_pool; নির্দেশের মাধ্যমে রিকোয়েস্ট পুলে পাঠান।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'upstream_balancing_sim.js',
      code: `// Simulated upstream weighted balancing and response buffer offload
const totalRequests = 500;
const weightA = 3;
const weightB = 1;
const weightC = 1;
const totalWeight = weightA + weightB + weightC; // 5

const reqA = Math.round((weightA / totalWeight) * totalRequests); // 300
const reqB = Math.round((weightB / totalWeight) * totalRequests); // 100
const reqC = Math.round((weightC / totalWeight) * totalRequests); // 100

const pctA = (reqA / totalRequests) * 100; // 60.00%
const pctB = (reqB / totalRequests) * 100; // 20.00%

// Buffering metrics
const backendDurationMs = 5;
const slowClientDurationMs = 250;
const threadTimeSavedMs = slowClientDurationMs - backendDurationMs; // 245 ms
const upstreamNodes = 3;

console.log("Upstream Balancing and Buffering Simulation:");
console.log("Pool distribution: Server A " + reqA + " requests (" + pctA.toFixed(2) + "%), Server B " + reqB + " (" + pctB.toFixed(2) + "%), Server C " + reqC + " across " + totalRequests + " requests");
console.log("Proxy buffering: backend freed in " + backendDurationMs + " ms vs slow client " + slowClientDurationMs + " ms (+" + threadTimeSavedMs + " ms saved per thread across " + upstreamNodes + " nodes)");

// Output:
// Upstream Balancing and Buffering Simulation:
// Pool distribution: Server A 300 requests (60.00%), Server B 100 (20.00%), Server C 100 across 500 requests
// Proxy buffering: backend freed in 5 ms vs slow client 250 ms (+245 ms saved per thread across 3 nodes)`,
      caption: {
        en: 'The upstream pool dispatches 300 requests (60.00%) to Server A, 100 (20.00%) to Server B, and 100 to Server C across 500 requests. Proxy buffering frees backend threads in 5 ms versus 250 ms slow client time (+245 ms saved across 3 nodes).',
        bn: 'আপস্ট্রিম পুলটি ৫০০ রিকোয়েস্টে সার্ভার A তে ৩০০টি (৬০.০০%), B তে ১০০টি (২০.০০%) এবং C তে ১০০টি রিকোয়েস্ট পাঠায়। প্রক্সি বাফারিং ২৫০ ms ধীরগতির ক্লায়েন্টের বদলে ৫ ms এই ব্যাকএন্ড থ্রেড মুক্ত করে (৩টি নোডে +২৪৫ ms সাশ্রয়)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive upstream balancing and buffering lab', bn: 'INSIDE — জীবন্ত আপস্ট্রিম ব্যালেন্সিং ও বাফারিং ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test upstream capacity management and buffer economics. Distributing 500 requests across weight 3 and weight 1 targets directs 300 requests (60.00%) to Server A and 100 requests (20.00%) to Server B and C. In response delivery, proxy buffering downloads the response in 5 ms, sparing application threads from a 250 ms client download and saving 245 ms per request across 3 nodes. This dramatically increases backend concurrency.',
        bn: 'আপস্ট্রিম ব্যালেন্সিং ও বাফারিংয়ের দক্ষতা পরীক্ষা করুন। ৫০০টি রিকোয়েস্ট ৩ ও ১ ওজনের সার্ভারগুলোতে বণ্টন করলে সার্ভার A পায় ৩০০টি (৬০.০০%) এবং B ও C পায় ১০০টি করে (২০.০০%)। রেসপন্স প্রদানের ক্ষেত্রে প্রক্সি বাফারিং মাত্র ৫ ms এ সম্পূর্ণ ডেটা নামিয়ে নিয়ে ২৫০ ms ধীরগতির ক্লায়েন্ট কানেকশন থেকে ব্যাকএন্ডকে বাঁচায় এবং ৩টি নোডে প্রতি রিকোয়েস্টে ২৪৫ ms সময় বাঁচায়। এটি ব্যাকএন্ডের ধারণক্ষমতা বহুগুণ বাড়িয়ে দেয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Upstream lab (verify request distribution, press Run)', bn: 'আপস্ট্রিম ল্যাব (রিকোয়েস্ট বণ্টন দেখুন, Run)' },
      html: '<h3>Upstream Weighted Pool Calculator</h3>\n<pre id="out"></pre>\n<p>Compute proportional request shares and buffer latency gains.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const total = 500;\nconst wA = 3;\nconst wB = 1;\nconst wC = 1;\nconst totW = wA + wB + wC;\nconst reqA = Math.round((wA / totW) * total);\nconst savedMs = 250 - 5;\nconsole.log("reqA: " + reqA);\ndocument.getElementById("out").textContent = "Total: " + total + " reqs · Node A: " + reqA + " (60%) · Nodes B & C: 100 each · Thread Saved: +" + savedMs + " ms (3 nodes ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Upstream pool operational guidelines', bn: 'ফলাফল — আপস্ট্রিম পুল পরিচালনার সোনালী নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Keep proxy buffering enabled for standard REST APIs: allow reverse proxies to absorb backend responses instantly so application runtimes stay unblocked.', bn: 'স্ট্যান্ডার্ড REST এপিআই-এর জন্য প্রক্সি বাফারিং চালু রাখুন: প্রক্সিকে দ্রুত রেসপন্স সংগ্রহ করতে দিন যাতে ব্যাকএন্ড অ্যাপ্লিকেশন মুক্ত থাকে।' },
        { en: 'Disable proxy buffering for Server-Sent Events (SSE) and streaming: set proxy_buffering off; when transmitting real-time chunked data streams.', bn: 'রিয়েল-টাইম স্ট্রিমিং বা SSE-এর জন্য বাফারিং বন্ধ করুন: তাৎক্ষণিক ডেটা প্রবাহ অক্ষুণ্ণ রাখতে proxy_buffering off; কনফিগার করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common upstream load balancing traps', bn: 'ডিবাগ — আপস্ট্রিম পুলের সাধারণ সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Disabling proxy buffering unintentionally causing upstream thread exhaustion', bn: 'ভুলবশত প্রক্সি বাফারিং বন্ধ করে ব্যাকএন্ড থ্রেড আটকে রাখার ঝুঁকি' },
      text: {
        en: 'If proxy_buffering is disabled, Nginx passes chunks synchronously to the client as fast as the client can read them. When thousands of slow 3G mobile devices download large JSON responses, your application server worker pool will run out of available threads and reject new traffic.',
        bn: 'যদি প্রক্সি বাফারিং বন্ধ রাখা হয়, তবে ক্লায়েন্ট যত ধীরে পড়বে ব্যাকএন্ডকেও তত ধীরে ডেটা পাঠাতে হবে। হাজার হাজার ধীরগতির মোবাইল ফোন ডেটা ডাউনলোড করলে অ্যাপ্লিকেশনের সব থ্রেড শেষ হয়ে যাবে এবং নতুন রিকোয়েস্ট এরর দিতে থাকবে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring proxy_next_upstream for instantaneous failover', bn: 'তাৎক্ষণিক ফেইলওভারের জন্য proxy_next_upstream ব্যবহার' },
      text: {
        en: 'Add proxy_next_upstream error timeout http_502 http_503; to location blocks. If an upstream backend server panics or crashes, the reverse proxy re-dispatches the client request to a sibling node before returning any error to the user.',
        bn: 'লোকেশন ব্লকে proxy_next_upstream error timeout http_502 http_503; যুক্ত করুন। কোনো ব্যাকএন্ড সার্ভার ক্র্যাশ করলে প্রক্সি গ্রাহককে এরর না দেখিয়ে সাথে সাথে পাশের সুস্থ সার্ভারে রিকোয়েস্টটি পাঠিয়ে দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production upstream architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক আপস্ট্রিম ক্লাস্টার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Nginx upstream hash: hashes request URLs to route cache hits to dedicated Memcached nodes, boosting cache hit rates to over 95%.', bn: 'Nginx আপস্ট্রিম হ্যাশ: ইউআরএল হ্যাশ করে নির্দিষ্ট ক্যাশ নোডে ট্রাফিক পাঠায়, যা ক্যাশ হিট রেট ৯৫% এর উপরে নিয়ে যায়।' },
        { en: 'HAProxy leastconn: balances long-lived WebSocket sessions across clusters of chat microservices based on actual connected clients.', bn: 'HAProxy leastconn: সরাসরি সক্রিয় ব্যবহারকারীর সংখ্যার উপর ভিত্তি করে চ্যাট সার্ভারে লং-লিভড ওয়েবসকেট সেশন সুষম বণ্টন করে।' },
        { en: 'Envoy Maglev hashing: Google-designed consistent hashing algorithm ensuring minimal cache disruption when upstream nodes are added or removed.', bn: 'Envoy Maglev হ্যাশিং: গুগলের তৈরি কনসিস্টেন্ট হ্যাশিং অ্যালগরিদম যা কোনো নোড সরানো বা যোগ করা হলেও ক্যাশ ব্যবস্থাকে প্রায় অক্ষত রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — URL Routing and Path Rewriting', bn: 'পরবর্তী পাঠ — ইউআরএল রাউটিং ও পাথ রিরাইট' },
    },
    {
      type: 'para',
      text: {
        en: 'With upstream server pools and response buffering mastered, Lesson 3 examines URL routing: prefix locations, regular expression matching precedence, path rewrites, and trailing slash nuances in reverse proxies.',
        bn: 'আপস্ট্রিম পুল ও রেসপন্স বাফারিং আয়ত্ত করার পর, পাঠ ৩ ইউআরএল রাউটিং শেখাবে: প্রিফিক্স লোকেশন, রেজেক্স ম্যাচিং অগ্রাধিকার, পাথ রিরাইট এবং রিভার্স প্রক্সিতে ট্রেইলিং স্ল্যাশ ব্যবহারের সূক্ষ্মতা।',
      },
    },
  ],
  exercises: [
    {
      id: 'rp-back-ex-1',
      kind: 'mcq',
      topic: 'least-connections-algorithm',
      question: {
        en: 'When is the Least Connections (least_conn) balancing algorithm preferred over standard Round Robin?',
        bn: 'সাধারণ রাউন্ড রবিন অ্যালগরিদমের তুলনায় কখন লিস্ট কানেকশন (least_conn) অ্যালগরিদম বেশি উপযোগী?',
      },
      options: [
        {
          en: 'When backend requests have highly variable processing durations (such as complex database reports versus quick health checks), ensuring heavily loaded servers do not receive new tasks',
          bn: 'যখন বিভিন্ন রিকোয়েস্ট সম্পন্ন হতে ভিন্ন ভিন্ন সময় লাগে (যেমন জটিল ডেটাবেস রিপোর্ট বনাম দ্রুতগতির হেলথ চেক), যাতে ব্যস্ত সার্ভারে অতিরিক্ত কাজের বোঝা না চাপে',
        },
        {
          en: 'When all backend servers are permanently powered off',
          bn: 'যখন সমস্ত ব্যাকএন্ড সার্ভার স্থায়ীভাবে বন্ধ করে রাখা হয়',
        },
        {
          en: 'When clients only connect using analog telephone dial-up modems',
          bn: 'যখন ক্লায়েন্টরা কেবল এনালগ ডায়াল-আপ মডেমের মাধ্যমে যুক্ত হয়',
        },
        {
          en: 'When the reverse proxy is written entirely in assembly language',
          bn: 'যখন রিভার্স প্রক্সিটি সম্পূর্ণ অ্যাসেম্বলি ভাষায় কোড করা হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Least connections adapts to uneven request processing times.', bn: 'লিস্ট কানেকশন অসম কাজের চাপ সুন্দরভাবে সমন্বয় করে।' },
      explanation: {
        en: 'Least connections distributes traffic based on active in-flight requests, preventing slow long-running tasks from piling up on one node.',
        bn: 'লিস্ট কানেকশন তাৎক্ষণিক চলমান রিকোয়েস্ট সংখ্যা বিচার করে নতুন ট্রাফিক কম ব্যস্ত সার্ভারে পাঠায়।',
      },
    },
    {
      id: 'rp-back-ex-2',
      kind: 'mcq',
      topic: 'upstream-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many requests were dispatched to Server A, B, and C out of 500 requests, and how much backend thread time was saved by proxy buffering across 3 nodes?',
        bn: 'আমাদের কোড আলোচনায় ৫০০টি রিকোয়েস্টের মধ্যে সার্ভার A, B ও C-তে কতটি করে রিকোয়েস্ট গিয়েছিল এবং ৩টি নোডে প্রক্সি বাফারিংয়ের মাধ্যমে কতটুকু থ্রেড সময় সাশ্রয় হয়েছিল?',
      },
      options: [
        {
          en: 'Server A = 300 requests (60.00%), Server B = 100 (20.00%), Server C = 100 across 500 requests; backend freed in 5 ms vs slow client 250 ms (+245 ms saved per thread across 3 nodes)',
          bn: 'সার্ভার A = ৩০০টি রিকোয়েস্ট (৬০.০০%), B = ১০০টি (২০.০০%), C = ১০০টি (৫০০ রিকোয়েস্টে); ২৫০ ms ধীরগতির ক্লায়েন্টের বিপরীতে ৫ ms এ ব্যাকএন্ড মুক্ত (৩টি নোডে প্রতি থ্রেডে +২৪৫ ms সাশ্রয়)',
        },
        {
          en: 'Server A = 500 requests (100.00%), Server B = 0 (0.00%), Server C = 0 across 500 requests; 0 ms saved per thread across 3 nodes',
          bn: 'সার্ভার A = ৫০০টি রিকোয়েস্ট (১০০.০০%), B = ০টি (০.০০%), C = ০টি (৫০০ রিকোয়েস্টে); ৩টি নোডে প্রতি থ্রেডে ০ ms সাশ্রয়',
        },
        {
          en: 'Server A = 0 requests (0.00%), Server B = 0 (0.00%), Server C = 0 across 0 requests; 0 ms saved per thread across 3 nodes',
          bn: 'সার্ভার A = ০টি রিকোয়েস্ট (০.০০%), B = ০টি (০.০০%), C = ০টি (০ রিকোয়েস্টে); ৩টি নোডে প্রতি থ্রেডে ০ ms সাশ্রয়',
        },
        {
          en: 'Server A = 100 requests (20.00%), Server B = 200 (40.00%), Server C = 200 across 500 requests; 50 ms saved per thread across 3 nodes',
          bn: 'সার্ভার A = ১০০টি রিকোয়েস্ট (২০.০০%), B = ২০০টি (৪০.০০%), C = ২০০টি (৫০০ রিকোয়েস্টে); ৩টি নোডে প্রতি থ্রেডে ৫০ ms সাশ্রয়',
        },
      ],
      answer: 0,
      hint: { en: '300, 100, 100 requests; 250 - 5 = 245 ms saved.', bn: '৩০০, ১০০, ১০০ রিকোয়েস্ট; ২৫০ - ৫ = ২৪৫ ms সাশ্রয়।' },
      explanation: {
        en: 'Server A received 300 requests (weight 3/5 = 60.00%), while proxy buffering saved 245 ms of application thread blocking time across 3 nodes.',
        bn: 'সার্ভার A ৩০০টি রিকোয়েস্ট (৬০.০০%) পেয়েছিল এবং প্রক্সি বাফারিং ৩টি নোডে অ্যাপ্লিকেশনের ২৪৫ ms থ্রেড লকিং সময় বাঁচিয়েছিল।',
      },
    },
    {
      id: 'rp-back-ex-3',
      kind: 'mcq',
      topic: 'proxy-buffering-benefit',
      question: {
        en: 'Why does enabling proxy buffering on a reverse proxy protect backend application servers from slow mobile clients?',
        bn: 'রিভার্স প্রক্সিতে প্রক্সি বাফারিং চালু রাখলে তা কেন ব্যাকএন্ড অ্যাপ্লিকেশনকে ধীরগতির মোবাইল ক্লায়েন্ট থেকে রক্ষা করে?',
      },
      options: [
        {
          en: 'The proxy quickly reads the entire response from the backend over high-speed local datacenter networks in milliseconds, freeing the application worker thread immediately while trickling data to the slow client',
          bn: 'প্রক্সি কয়েক মিলিসেকেন্ডের মধ্যে হাই-স্পিড লোকাল নেটওয়ার্কে ব্যাকএন্ডের পুরো রেসপন্স মেমরিতে নিয়ে ব্যাকএন্ড থ্রেড মুক্ত করে এবং ক্লায়েন্টকে ধীরে ধীরে ডেটা পাঠায়',
        },
        {
          en: 'It compresses the internet data packets into zip archives on disk',
          bn: 'এটি ইন্টারনেটের ডেটা প্যাকেটগুলোকে ডিস্কে জিপ ফাইলে রূপান্তর করে রাখে',
        },
        {
          en: 'It disconnects the client before any data can be transferred',
          bn: 'কোনো ডেটা পাঠানোর আগেই এটি ক্লায়েন্টের সংযোগ কেটে দেয়',
        },
        {
          en: 'It reboots the operating system after each HTTP response',
          bn: 'প্রতিটি এইচটিটিপি রেসপন্সের পর এটি অপারেটিং সিস্টেম রিস্টার্ট করে',
        },
      ],
      answer: 0,
      hint: { en: 'Proxy buffering decouples fast backends from slow clients.', bn: 'প্রক্সি বাফারিং দ্রুতগতির ব্যাকএন্ডকে ধীরগতির ক্লায়েন্ট থেকে বিচ্ছিন্ন করে।' },
      explanation: {
        en: 'Without proxy buffering, backend threads remain blocked for the full duration of a client download, wasting application memory.',
        bn: 'বাফারিং না থাকলে পুরো ক্লায়েন্ট ডাউনলোড শেষ না হওয়া পর্যন্ত ব্যাকএন্ড থ্রেড আটকে থাকে, যা মেমরির ব্যাপক অপচয় ঘটায়।',
      },
    },
    {
      id: 'rp-back-ex-4',
      kind: 'predict',
      topic: 'nginx-upstream-directive-name',
      question: {
        en: 'What Nginx configuration directive defines a pool of backend servers (e.g. upstream)?',
        bn: 'ব্যাকএন্ড সার্ভারের একটি পুল সংজ্ঞায়িত করতে Nginx-এ কোন কনফিগারেশন নির্দেশ ব্যবহৃত হয় (যেমন upstream)?',
      },
      answer: 'upstream',
      accept: ['upstream', 'Upstream', 'upstream block'],
      hint: { en: 'u-p-s-t-r-e-a-m', bn: 'u-p-s-t-r-e-a-m' },
      explanation: {
        en: 'The upstream directive defines named server clusters in Nginx configuration files.',
        bn: 'Nginx কনফিগারেশন ফাইলে সার্ভার ক্লাস্টার নির্ধারণ করতে upstream নির্দেশটি ব্যবহৃত হয়।',
      },
    },
  ],
  quiz: {
    id: 'backs-and-the-back-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'rp-back-q1',
        kind: 'mcq',
        topic: 'proxy-next-upstream-failover',
        question: {
          en: 'What is the purpose of the proxy_next_upstream directive in reverse proxy configuration?',
          bn: 'রিভার্স প্রক্সি কনফিগারেশনে proxy_next_upstream নির্দেশের কাজ কী?',
        },
        options: [
          {
            en: 'It instructs the proxy to transparently retry a client request on another backend server if the initially selected server fails or returns HTTP 502/503 errors',
            bn: 'প্রাথমিকভাবে নির্বাচিত সার্ভার ব্যর্থ হলে বা HTTP 502/503 এরর দিলে ক্লায়েন্টের রিকোয়েস্টটি অন্য কোনো ব্যাকএন্ড সার্ভারে স্বয়ংক্রিয়ভাবে পুনরায় পাঠানোর নির্দেশ দেয়',
          },
          {
            en: 'It permanently deletes failing servers from the company inventory',
            bn: 'এটি ব্যর্থ সার্ভারগুলোকে কোম্পানির সম্পদ তালিকা থেকে চিরতরে মুছে দেয়',
          },
          {
            en: 'It turns on the emergency siren in the datacenter hallway',
            bn: 'এটি ডাটা সেন্টারের করিডোরে জরুরি সাইরেন বাজাতে শুরু করে',
          },
          {
            en: 'It cancels all ongoing credit card transactions automatically',
            bn: 'এটি চলমান সমস্ত ক্রেডিট কার্ড লেনদেন নিজে থেকেই বাতিল করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'proxy_next_upstream provides seamless failover to sibling nodes.', bn: 'proxy_next_upstream স্বয়ংক্রিয়ভাবে পাশের সুস্থ সার্ভারে রিকোয়েস্ট পাঠায়।' },
        explanation: {
          en: 'proxy_next_upstream allows client requests to succeed seamlessly on sibling nodes even during individual backend server crashes.',
          bn: 'proxy_next_upstream ব্যবহারের ফলে কোনো ব্যাকএন্ড সার্ভার ক্র্যাশ করলেও ক্লায়েন্ট কোনো বাধা ছাড়াই পাশের সুস্থ নোড থেকে সেবা পায়।',
        },
      },
      {
        id: 'rp-back-q2',
        kind: 'mcq',
        topic: 'thread-time-saved-check',
        question: {
          en: 'In our code walkthrough, how much application thread locking time was saved by proxy buffering compared to direct slow client streaming across 3 nodes?',
          bn: 'আমাদের কোড আলোচনায় ৩টি নোডে ধীরগতির ক্লায়েন্ট স্ট্রিমিংয়ের তুলনায় প্রক্সি বাফারিংয়ের মাধ্যমে অ্যাপ্লিকেশনের কতটুকু থ্রেড লকিং সময় বাঁচানো গিয়েছিল?',
        },
        options: [
          { en: '+245 ms saved per thread across 3 nodes (250 ms client download minus 5 ms backend delivery)', bn: '৩টি নোডে প্রতি থ্রেডে +২৪৫ ms সাশ্রয় (২৫০ ms ক্লায়েন্ট ডাউনলোড বিয়োগ ৫ ms ব্যাকএন্ড ডেলিভারি)' },
          { en: '+1000 ms saved across 3 nodes', bn: '৩টি নোডে +১০০০ ms সাশ্রয়' },
          { en: '+0 ms saved across 3 nodes', bn: '৩টি নোডে +০ ms সাশ্রয়' },
          { en: '+10 ms saved across 3 nodes', bn: '৩টি নোডে +১০ ms সাশ্রয়' },
        ],
        answer: 0,
        hint: { en: '250 - 5 = 245 ms saved.', bn: '২৫০ - ৫ = ২৪৫ ms সাশ্রয়।' },
        explanation: {
          en: 'Proxy buffering consumed the response in 5 ms, saving 245 ms of blocking time compared to a 250 ms mobile client download.',
          bn: 'প্রক্সি বাফারিং মাত্র ৫ ms এ রেসপন্স গ্রহণ করে ২৫০ ms মোবাইল ডাউনলোডের তুলনায় ব্যাকএন্ডের ২৪৫ ms সময় বাঁচায়।',
        },
      },
      {
        id: 'rp-back-q3',
        kind: 'mcq',
        topic: 'when-to-disable-proxy-buffering',
        question: {
          en: 'For which architectural workload must proxy buffering be explicitly turned OFF (proxy_buffering off;)?',
          bn: 'কোন ধরণের আর্কিটেকচারাল কাজের ক্ষেত্রে প্রক্সি বাফারিং স্পষ্টভাবে বন্ধ রাখা বাধ্যতামূলক (proxy_buffering off;)?',
        },
        options: [
          {
            en: 'Real-time Server-Sent Events (SSE) and live event streaming, where responses must be pushed immediately to the client in real-time chunks without waiting for buffer completion',
            bn: 'রিয়েল-টাইম Server-Sent Events (SSE) ও লাইভ স্ট্রিমিং, যেখানে বাফার পূর্ণ হওয়ার অপেক্ষা না করে প্রতিটি চাঙ্ক তাৎক্ষণিকভাবে ক্লায়েন্টের কাছে পৌঁছে দিতে হয়',
          },
          {
            en: 'Static HTML documentation pages',
            bn: 'সাধারণ স্ট্যাটিক এইচটিএমএল ডকুমেন্টেশন পেজ',
          },
          {
            en: 'Standard JSON REST API responses under 10 kilobytes',
            bn: '১০ কিলোবাইটের নিচের সাধারণ JSON REST API রেসপন্স',
          },
          {
            en: 'JPEG photo downloads on desktop browsers',
            bn: 'ডেস্কটপ ব্রাউজারে জেপেগ ছবি ডাউনলোড',
          },
        ],
        answer: 0,
        hint: { en: 'Streaming and SSE require unbuffered real-time transmission.', bn: 'স্ট্রিমিং ও SSE-তে রিয়েল-টাইম প্রেরণের জন্য বাফারিং বন্ধ রাখতে হয়।' },
        explanation: {
          en: 'Buffering prevents real-time data from reaching SSE clients because the proxy will hold chunks until the buffer threshold is reached.',
          bn: 'বাফারিং চালু থাকলে প্রক্সি বাফার পূর্ণ না হওয়া পর্যন্ত ডেটা ক্লায়েন্টকে পাঠায় না, যা রিয়েল-টাইম স্ট্রিমিং নষ্ট করে।',
        },
      },
      {
        id: 'rp-back-q4',
        kind: 'predict',
        topic: 'ip-hash-directive-token',
        question: {
          en: 'What two-word Nginx upstream directive hashes client IP addresses to ensure session persistence to backend nodes (e.g. ip_hash)?',
          bn: 'ক্লায়েন্টের আইপি অ্যাড্রেস হ্যাশ করে ব্যাকএন্ডে সেশন বজায় রাখতে Nginx আপস্ট্রিমে কোন নির্দেশটি লেখা হয় (যেমন ip_hash)?',
        },
        answer: 'ip_hash',
        accept: ['ip_hash', 'ip_hash;', 'IP Hash'],
        hint: { en: 'i-p-_-h-a-s-h', bn: 'i-p-_-h-a-s-h' },
        explanation: {
          en: 'The ip_hash directive routes client requests based on their IP address to guarantee consistent backend routing.',
          bn: 'ip_hash নির্দেশ ক্লায়েন্টের আইপি হ্যাশ করে প্রতিবার একই ব্যাকএন্ড সার্ভারে রিকোয়েস্ট পাঠায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'routes-and-the-route',
    title: { en: 'URL Routing and Path Rewriting', bn: 'ইউআরএল রাউটিং ও পাথ রিরাইট' },
  },
};
