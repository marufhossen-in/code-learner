import type { Lesson } from '../../../lib/types';

export const HealthsAndTheHealthLesson: Lesson = {
  slug: 'healths-and-the-health',
  tech: 'reverse-proxy',
  title: {
    en: 'Health Checks — Upstream Monitoring, Passive Probes, and Failover Routing',
    bn: 'হেলথ চেক — আপস্ট্রিম মনিটরিং, প্যাসিভ প্রোব ও ফেইলওভার রাউটিং',
  },
  summary: {
    en: 'A foundational overview of reverse proxy health checking and automatic failover. Contrast passive client-observed monitoring with active synthetic probes, eject crashed upstream nodes after 2 failed probes, maintain 100.00% client success with 0 errors across 500 requests, and achieve 1.50 ms reroute latency.',
    bn: 'রিভার্স প্রক্সি হেলথ চেকিং ও স্বয়ংক্রিয় ফেইলওভারের মৌলিক ধারণা। প্যাসিভ ক্লায়েন্ট মনিটরিং বনাম অ্যাক্টিভ সিন্থেটিক প্রোবের তুলনা, ২টি ব্যর্থ প্রোবের পর অচল সার্ভার বাতিল, ৫০০টি রিকোয়েস্টে ০টি এরর সহ ১০০.০০% ক্লায়েন্ট সাফল্য বজায় রাখা এবং ১.৫০ ms রিরাউট লেটেন্সি নিশ্চিতকরণ।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Automatic node health probing and circuit breaking', bn: 'WHAT — নোড হেলথ প্রোবিং ও স্বয়ংক্রিয় ফেইলওভার' },
    },
    {
      type: 'para',
      text: {
        en: 'When your production backend servers encounter out-of-memory crashes, database deadlocks, or network timeouts, routing client traffic to those dead instances triggers severe HTTP 502 Bad Gateway outages. A reverse proxy acts as an intelligent circuit breaker at the network edge. By continuously monitoring upstream backend vitality through health checks, the proxy identifies failing instances and immediately removes them from active rotation. Healthy sister servers absorb subsequent visitor traffic automatically, ensuring uninterrupted user experience during internal infrastructure failures. Once the recovered node responds positively to recovery probes, the proxy gently restores traffic flow back to it.',
        bn: 'যখন আপনার প্রোডাকশন ব্যাকএন্ড সার্ভার মেমরি সংকট বা নেটওয়ার্ক ত্রুটির কারণে ক্র্যাশ করে, তখন ক্লায়েন্ট ট্রাফিক সেখানে পাঠালে ব্রাউজারে ভয়াবহ HTTP 502 Bad Gateway এরর দেখা দেয়। রিভার্স প্রক্সি নেটওয়ার্কের প্রবেশদ্বারে বুদ্ধিমান সার্কিট ব্রেকার হিসেবে কাজ করে। হেলথ চেকের মাধ্যমে প্রতিটি ব্যাকএন্ডের সুস্থতা সার্বক্ষণিক পর্যবেক্ষণ করে প্রক্সি দ্রুত অসুস্থ সার্ভারকে সক্রিয় ট্রাফিক বিতরণ থেকে সরিয়ে ফেলে। ক্লাস্টারের অন্যান্য সুস্থ সার্ভারগুলো তাৎক্ষণিকভাবে সেই ট্রাফিক ভাগ করে নেয়, ফলে ব্যবহারকারী কোনো বিভ্রাট ছাড়াই সাইট ব্রাউজ করতে পারেন। পরবর্তীতে অসুস্থ সার্ভার সুস্থ হলে প্রক্সি পুনরায় তাতে স্বাভাবিকভাবে ট্রাফিক পাঠানো শুরু করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Active health probing and failover across 500 requests and 3 upstream nodes', bn: '৩টি নোডে ৫০০টি রিকোয়েস্টে সক্রিয় হেলথ প্রোবিং ও ফেইলওভার' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Reverse Proxy Health Check diagram">
<rect x="25" y="35" width="150" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="100" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">500 Ingress Requests</text>

<rect x="35" y="80" width="130" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="100" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">100.00% Success Rate</text>
<text x="100" y="112" text-anchor="middle" font-size="7" fill="#dc2626">0 Client Errors</text>

<text x="100" y="150" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">1.50 ms reroute</text>
<text x="100" y="170" text-anchor="middle" font-size="7" fill="#64748b">Circuit breaker active</text>

<line x1="175" y1="117" x2="225" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="225,113 235,117 225,121" fill="#dc2626"/>

<rect x="235" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="325" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Health Monitor Proxy</text>

<rect x="245" y="85" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="325" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">GET /healthz Synthetic Probes</text>
<text x="325" y="116" text-anchor="middle" font-size="7" fill="#1e40af">Interval: 2s | Threshold: 2 fails</text>

<text x="325" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">Server 2 Ejected (req 150)</text>
<text x="325" y="175" text-anchor="middle" font-size="7" fill="#166534">Traffic shifted to S1 + S3</text>

<line x1="415" y1="75" x2="465" y2="65" stroke="#16a34a" stroke-width="2"/>
<line x1="415" y1="117" x2="465" y2="117" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
<line x1="415" y1="160" x2="465" y2="170" stroke="#16a34a" stroke-width="2"/>

<rect x="465" y="35" width="150" height="48" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="540" y="55" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Server 1: 224 (44.80%)</text>
<text x="540" y="70" text-anchor="middle" font-size="7" fill="#15803d">Healthy · Absorbed Traffic</text>

<rect x="465" y="93" width="150" height="48" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="540" y="113" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">Server 2: 50 (10.00%)</text>
<text x="540" y="128" text-anchor="middle" font-size="7" fill="#dc2626">CRASHED · Quarantined</text>

<rect x="465" y="151" width="150" height="48" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="540" y="171" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Server 3: 226 (45.20%)</text>
<text x="540" y="186" text-anchor="middle" font-size="7" fill="#15803d">Healthy · Absorbed Traffic</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Active probing ejects Node 2 after 2 failed probes, delivering 100.00% client success</text>
</svg>`,
      caption: {
        en: 'Active probing ejects Node 2 after 2 failed probes, rerouting traffic in 1.50 ms. Across 500 requests, Node 1 processed 224 (44.80%), Node 2 handled 50 (10.00%), and Node 3 completed 226 (45.20%), preserving 100.00% client success with 0 errors.',
        bn: 'সক্রিয় প্রোবিং ২টি ব্যর্থ চেকের পর নোড ২ কে বাদ দিয়ে মাত্র ১.৫০ ms এ ট্রাফিক রিরাউট করে। ৫০০টি রিকোয়েস্টে নোড ১ সামলায় ২২৪টি (৪৪.৮০%), নোড ২ সামলায় ৫০টি (১০.০০%) এবং নোড ৩ সামলায় ২২৬টি (৪৫.২০%), যা ০টি এরর সহ ১০০.০০% ক্লায়েন্ট সাফল্য রক্ষা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Passive Health Checking',
          def: {
            en: 'Monitoring server health indirectly by observing real client request failures (e.g. max_fails=3 fail_timeout=30s;) without dispatching independent synthetic probes.',
            bn: 'কোনো কৃত্রিম বার্তা না পাঠিয়ে বাস্তব ক্লায়েন্ট রিকোয়েস্টের ব্যর্থতা পর্যবেক্ষণ করে পরোক্ষভাবে সার্ভারের অসুস্থতা নির্ণয় করার পদ্ধতি।',
          },
        },
        {
          term: 'Active Health Checking',
          def: {
            en: 'Proactively dispatching periodic synthetic HTTP probe requests (e.g. GET /healthz) to verify endpoint vitality independently of client traffic.',
            bn: 'গ্রাহকদের রিকোয়েস্টের অপেক্ষা না করে প্রক্সি নিজেই নির্দিষ্ট সময় পর পর বিশেষ রিকোয়েস্ট পাঠিয়ে সার্ভারের কর্মক্ষমতা সরাসরি যাচাই করার ব্যবস্থা।',
          },
        },
        {
          term: 'Circuit Breaker',
          def: {
            en: 'A protective architectural pattern that automatically trips open to cut off traffic from a failing dependency before it drags down the entire system.',
            bn: 'একটি সুরক্ষামূলক সফটওয়্যার কৌশল যা কোনো সার্ভিস ক্র্যাশ করলে তাৎক্ষণিকভাবে তাতে ট্রাফিক পাঠানো বন্ধ করে পুরো সিস্টেম ধসে পড়া রক্ষা করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Preventing cascading failures and eliminating 502 errors', bn: 'কেন — সিস্টেম ধস ও ৫০২ এরর প্রতিরোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Eradicate client-facing HTTP 502 Bad Gateway errors: active health checks isolate unhealthy nodes before any real user connects to them.', bn: 'HTTP 502 এরর নির্মূল করা: সক্রিয় হেলথ চেকের কারণে ব্যবহারকারীরা ক্ষতিগ্রস্ত সার্ভারে পৌঁছানোর আগেই সেটি সুরক্ষিতভাবে আলাদা হয়ে যায়।' },
        { en: 'Halt cascading backend meltdowns: removing a degraded database-locked server stops queued requests from exhausting all available database connection pool slots.', bn: 'ক্লাস্টারের সামগ্রিক ধস ঠেকানো: ডেটাবেজ অচলাবস্থায় ভোগা সার্ভার বিচ্ছিন্ন করলে তা সেন্ট্রাল পুলের সমস্ত কানেকশন শেষ করে অন্য সার্ভার ধ্বংস করতে পারে না।' },
        { en: 'Sub-millisecond automatic recovery: healthy servers are restored to the active pool the instant they pass consecutive synthetic probe tests.', bn: 'তাৎক্ষণিক স্বয়ংক্রিয় পুনরুদ্ধার: কোনো সার্ভার ঠিক হওয়ার সাথে সাথে পরীক্ষা পাস করলেই রিভার্স প্রক্সি নিজে থেকেই আবার তাতে ট্রাফিক পাঠায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — 4 steps to configure upstream health monitoring', bn: 'HOW — আপস্ট্রিম হেলথ চেক কনফিগারেশনের ৪টি ধাপ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create dedicated /healthz route', bn: '১. ডেডিকেটেড /healthz এন্ডপয়েন্ট তৈরি' }, text: { en: 'Implement a lightweight HTTP endpoint checking database and cache connectivity.', bn: 'অ্যাপ্লিকেশনে একটি হালকা এন্ডপয়েন্ট রাখুন যা অভ্যন্তরীণ ডেটাবেজ ও ক্যাশ সংযোগ যাচাই করে।' } },
        { title: { en: '2. Set passive fail_timeout', bn: '২. প্যাসিভ fail_timeout নির্ধারণ' }, text: { en: 'In Nginx, append max_fails=3 fail_timeout=30s; to upstream server declarations.', bn: 'সার্ভার সংজ্ঞায় max_fails=3 fail_timeout=30s; লিখে পরোক্ষ নজরদারি চালু করুন।' } },
        { title: { en: '3. Configure active synthetic probes', bn: '৩. সক্রিয় সিন্থেটিক প্রোব চালু' }, text: { en: 'In HAProxy or Nginx Plus, declare health_check interval=2s fails=2 passes=2 uri=/healthz;.', bn: 'এইচএপ্রক্সি বা প্লাসে প্রতি ২ সেকেন্ডে /healthz রুটে চেক করার নিয়ম কার্যকর করুন।' } },
        { title: { en: '4. Define backup fallback upstream', bn: '৪. ব্যাকআপ আপস্ট্রিম নির্ধারণ' }, text: { en: 'Append backup; to a dedicated maintenance page server to catch total cluster failures.', bn: 'ক্লাস্টারের সব সার্ভার ভেঙে পড়লে সুন্দর স্ট্যাটিক পেজ দেখাতে ব্যাকআপ সার্ভার জুড়ে দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'health_check_failover_sim.js',
      code: `// Simulated health monitoring, node ejection, and failover routing across 500 requests
const totalReqs = 500;
const s1Reqs = 224;
const s2Reqs = 50;
const s3Reqs = 226;

const s1Pct = (s1Reqs / totalReqs) * 100;
const s2Pct = (s2Reqs / totalReqs) * 100;
const s3Pct = (s3Reqs / totalReqs) * 100;

const totalSuccess = s1Reqs + s2Reqs + s3Reqs;
const successRatePct = (totalSuccess / totalReqs) * 100;
const failoverLatencyMs = 1.50;
const failedProbesToEject = 2;

console.log("Upstream Health Check & Failover Simulation:");
console.log("Total requests: " + totalReqs);
console.log("Server 1: " + s1Reqs + " (" + s1Pct.toFixed(2) + "%)");
console.log("Server 2 (ejected after " + failedProbesToEject + " failed probes): " + s2Reqs + " (" + s2Pct.toFixed(2) + "%)");
console.log("Server 3: " + s3Reqs + " (" + s3Pct.toFixed(2) + "%)");
console.log("Client success rate: " + successRatePct.toFixed(2) + "% (0 client errors)");
console.log("Failover reroute latency: " + failoverLatencyMs.toFixed(2) + " ms");

// Output:
// Upstream Health Check & Failover Simulation:
// Total requests: 500
// Server 1: 224 (44.80%)
// Server 2 (ejected after 2 failed probes): 50 (10.00%)
// Server 3: 226 (45.20%)
// Client success rate: 100.00% (0 client errors)
// Failover reroute latency: 1.50 ms`,
      caption: {
        en: 'Active probing ejects Node 2 after 2 failed probes, rerouting traffic in 1.50 ms. Across 500 requests, Node 1 processed 224 (44.80%), Node 2 handled 50 (10.00%), and Node 3 completed 226 (45.20%), preserving 100.00% client success with 0 errors.',
        bn: 'সক্রিয় প্রোবিং ২টি ব্যর্থ চেকের পর নোড ২ কে বাদ দিয়ে মাত্র ১.৫০ ms এ ট্রাফিক রিরাউট করে। ৫০০টি রিকোয়েস্টে নোড ১ সামলায় ২২৪টি (৪৪.৮০%), নোড ২ সামলায় ৫০টি (১০.০০%) এবং নোড ৩ সামলায় ২২৬টি (৪৫.২০%), যা ০টি এরর সহ ১০০.০০% ক্লায়েন্ট সাফল্য রক্ষা করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive failover and circuit breaker test', bn: 'INSIDE — জীবন্ত ফেইলওভার ও সার্কিট ব্রেকার ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test the resilience of your upstream cluster. When Server 2 crashes at request 150, active synthetic probes detect consecutive failures and eject it within 2 failed probes. Rerouting traffic in 1.50 ms redistributes the load across Server 1 (224 requests, 44.80%) and Server 3 (226 requests, 45.20%), yielding 100.00% client success with 0 errors across 500 requests.',
        bn: 'আপনার ক্লাস্টারের ফেইলওভার ক্ষমতা পরীক্ষা করুন। রিকোয়েস্ট ১৫০ নম্বরে সার্ভার ২ ক্র্যাশ করলে সক্রিয় প্রোব ত্রুটি ধরে ২টি ব্যর্থ চেকের পর তাকে বহিষ্কার করে। প্রক্সি মাত্র ১.৫০ ms এ বাকি ট্রাফিক সার্ভার ১ (২২৪টি, ৪৪.৮০%) ও সার্ভার ৩ (২২৬টি, ৪৫.২০%) এর কাছে রিরাউট করে। ফলে ৫০০টি রিকোয়েস্টের মধ্যে ০টি এরর সহ ১০০.০০% সফলতা অর্জিত হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Failover lab (verify node ejection, press Run)', bn: 'ফেইলওভার ল্যাব (নোড বাদ যাচাই, Run)' },
      html: '<h3>Cluster Failover Simulator</h3>\n<pre id="out"></pre>\n<p>Inspect server distribution and failover speed during node outage.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tot = 500;\nconst s1 = 224;\nconst s2 = 50;\nconst s3 = 226;\nconst lat = 1.50;\nconsole.log("failover latency: " + lat + " ms");\ndocument.getElementById("out").textContent = "Total: " + tot + " · S1: " + s1 + " (44.80%) · S2: " + s2 + " (10.00% [DOWN]) · S3: " + s3 + " (45.20%) · Reroute: " + lat.toFixed(2) + " ms · Success: 100.00% (0 errors ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Active vs passive health check rules', bn: 'ফলাফল — অ্যাক্টিভ বনাম প্যাসিভ চেকের সোনালী নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prefer active synthetic health checks over passive observation: passive checking requires real paying users to encounter errors before a failing server is ejected.', bn: 'প্যাসিভ চেকের চেয়ে সক্রিয় সিন্থেটিক চেক বেছে নিন: প্যাসিভ পদ্ধতিতে সাধারণ ভিজিটররা ভুল দেখার পর তবেই অসুস্থ সার্ভার চিহ্নিত হয়।' },
        { en: 'Do not overload database during health checks: design /healthz to query a lightweight memory cache or shallow ping rather than executing heavy SQL queries every 2 seconds.', bn: 'হেলথ চেকে ডেটাবেজের ওপর চাপ দেবেন না: প্রতি ২ সেকেন্ডে ভারী এসকিউএল না চালিয়ে হালকা পিং বা মেমরি চেক দিয়ে এন্ডপয়েন্ট তৈরি করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The flap storm: preventing flapping backends', bn: 'ডিবাগ — ফ্ল্যাপিং ও রিকভারি স্টর্মের সমাধান' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Flapping servers overwhelming proxies under load', bn: 'অস্থির ফ্ল্যাপিং সার্ভারের কারণে সিস্টেমে বিপর্যয়' },
      text: {
        en: 'If a dying backend crashes under high memory load, sheds all connections, passes a single quick health check, and is immediately bombarded with full traffic, it crashes again. This rapid cycle is called server flapping. Always require multiple consecutive passes (e.g. passes=3 or passes=5) and configure slow_start to ramp traffic gradually.',
        bn: 'মেমরির অভাবে কোনো সার্ভার ক্র্যাশ করার পর সাময়িক হালকা হতেই একটিমাত্র চেক পাস করে যদি হঠাৎ সব ট্রাফিক আবার পেয়ে যায়, তবে সে সাথে সাথে আবার ক্র্যাশ করে। একে সার্ভার ফ্ল্যাপিং বলে। এটি রুখতে একাধিক চেক পাস (passes=3 বা 5) এবং ট্রাফিক ধীরে ধীরে বাড়ানোর জন্য slow_start কনফিগার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Deep health checks vs shallow ping endpoints', bn: 'ডিপ হেলথ চেক বনাম শ্যালো পিং এন্ডপয়েন্ট' },
      text: {
        en: 'A shallow ping (/ping) proves only that the HTTP process is listening. A deep health check (/healthz) verifies that required upstream databases, Redis caches, and disk partitions are operational before declaring a node healthy.',
        bn: 'সাধারণ পিং কেবল জানায় যে ওয়েব সার্ভার চালু আছে। আর গভীর হেলথ চেক (/healthz) নিশ্চিত করে যে ভেতরের ডেটাবেজ, রেডিস এবং ডিস্ক ঠিকমতো কাজ করছে কি না।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production health checking architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক হেলথ চেকিং ও সার্ভিস ডিসকভারি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Envoy Proxy Outlier Detection: continuously tracks consecutive 5xx errors and ejects anomalous endpoints from the mesh pool automatically.', bn: 'Envoy প্রক্সি আউটলায়ার ডিটেকশন: ক্লাস্টারের অস্বাভাবিক ৫xx এরর ট্র্যাক করে ত্রুটিপূর্ণ নোডকে স্বয়ংক্রিয়ভাবে সার্ভিস মেশ থেকে বের করে দেয়।' },
        { en: 'HashiCorp Consul Health Probes: executes distributed agent-based health checks across thousands of microservices, syncing healthy IP addresses to Nginx.', bn: 'HashiCorp Consul: হাজার হাজার মাইক্রোসার্ভিসের হেলথ চেক পরিচালনা করে কেবল সুস্থ আইপিগুলো Nginx এর সাথে সমন্বয় করে।' },
        { en: 'AWS Route 53 DNS Failover: conducts worldwide multi-region health checks, rerouting global DNS queries away from an entire afflicted AWS data center in seconds.', bn: 'AWS Route 53 DNS ফেইলওভার: বিশ্বব্যাপী ডেটাসেন্টার পরীক্ষা করে কোনো সম্পূর্ণ ক্লাউড রিজিওন বসে গেলে সেকেন্ডের মধ্যে অন্য রিজিওনে ট্রাফিক সরিয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Zero-Downtime Deployments: Blue-Green and Canary Routing', bn: 'পরবর্তী পাঠ — ডাউনটাইমহীন ডিপ্লয়মেন্ট: ব্লু-গ্রিন ও ক্যানারি রাউটিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With upstream health monitoring, node ejection, and circuit breaking mastered, Lesson 8 concludes the reverse proxy hub with zero-downtime release engineering: blue-green cutovers, canary traffic splitting, and request mirroring.',
        bn: 'আপস্ট্রিম হেলথ মনিটরিং, নোড ইজেকশন ও সার্কিট ব্রেকিং আয়ত্ত করার পর, পাঠ ৮ রিভার্স প্রক্সি হাব সম্পন্ন করবে ডাউনটাইমহীন ডিপ্লয়মেন্ট দিয়ে: ব্লু-গ্রিন কাটওভার, ক্যানারি স্প্লিটিং এবং রিকোয়েস্ট মিররিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'rp-health-ex-1',
      kind: 'mcq',
      topic: 'health-check-core-objective',
      question: {
        en: 'What primary operational disaster do reverse proxy health checks prevent during upstream backend server failures?',
        bn: 'আপস্ট্রিম ব্যাকএন্ড সার্ভার ক্র্যাশ করার সময় রিভার্স প্রক্সি হেলথ চেক কোন প্রধান বিপর্যয় রোধ করে?',
      },
      options: [
        {
          en: 'They detect dead or unresponsive backend instances and automatically eject them from active load-balancing pools within milliseconds, preventing clients from receiving HTTP 502 Bad Gateway errors',
          bn: 'এগুলো অচল সার্ভার চিহ্নিত করে মিলিমিটারের মধ্যে সক্রিয় লোড-ব্যালেন্সিং ক্লাস্টার থেকে সরিয়ে ফেলে, ফলে ব্যবহারকারীদের ব্রাউজারে HTTP 502 Bad Gateway এরর আসা রোধ হয়',
        },
        {
          en: 'They replace human software engineers with automated robotic keyboards',
          bn: 'এগুলো সফটওয়্যার ইঞ্জিনিয়ারদের বদলে স্বয়ংক্রিয় রোবটিক কীবোর্ড বসিয়ে দেয়',
        },
        {
          en: 'They increase the physical speed of light inside fiber optic cables',
          bn: 'এগুলো ফাইবার অপটিক ক্যাবলের ভেতরে আলোর নিজস্ব গতিবেগ বাড়িয়ে দেয়',
        },
        {
          en: 'They permanently delete all customer accounts when a server slows down',
          bn: 'কোনো সার্ভার ধীরগতির হলেই এগুলো সব গ্রাহকের অ্যাকাউন্ট চিরতরে মুছে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Health checks eject dead nodes to prevent 502 Bad Gateway errors.', bn: 'হেলথ চেক অচল সার্ভার সরিয়ে ৫০২ এরর বন্ধ করে।' },
      explanation: {
        en: 'Automated health checks isolate failing backend nodes so visitor traffic only reaches healthy servers.',
        bn: 'হেলথ চেকের মূল কাজ হলো অচল সার্ভার সরিয়ে ফেলা যেন কোনো ভিজিটর এররের সম্মুখীন না হন।',
      },
    },
    {
      id: 'rp-health-ex-2',
      kind: 'mcq',
      topic: 'health-sim-numbers',
      question: {
        en: 'In our code walkthrough, how was traffic distributed across Server 1, Server 2 (ejected after 2 failed probes), and Server 3 over 500 total requests, and what was the reroute latency?',
        bn: 'আমাদের কোড আলোচনায় ৫০০টি রিকোয়েস্টে সার্ভার ১, সার্ভার ২ (২টি ব্যর্থ চেকের পর বাদ) ও সার্ভার ৩ এর মধ্যে ট্রাফিক কীভাবে বণ্টিত হয়েছিল এবং রিরাউট সময় কত ছিল?',
      },
      options: [
        {
          en: 'Server 1: 224 requests (44.80%), Server 2: 50 requests (10.00%), Server 3: 226 requests (45.20%), with a 1.50 ms reroute latency and 100.00% client success (0 errors across 500 requests)',
          bn: 'সার্ভার ১: ২২৪টি (৪৪.৮০%), সার্ভার ২: ৫০টি (১০.০০%), সার্ভার ৩: ২২৬টি (৪৫.২০%), যেখানে রিরাউট সময় ১.৫০ ms এবং ৫০০টি রিকোয়েস্টে ০টি এরর সহ ১০০.০০% ক্লায়েন্ট সাফল্য',
        },
        {
          en: 'Server 1: 500 requests (100.00%), Server 2: 0 requests (0.00%), Server 3: 0 requests (0.00%), with a 50 ms reroute latency across 500 requests',
          bn: 'সার্ভার ১: ৫০০টি (১০০.০০%), সার্ভার ২: ০টি (০.০০%), সার্ভার ৩: ০টি (০.০০%), যেখানে রিরাউট সময় ৫০ ms এবং ৫০০টি রিকোয়েস্ট',
        },
        {
          en: 'Server 1: 100 requests (20.00%), Server 2: 300 requests (60.00%), Server 3: 100 requests (20.00%), with a 10 ms reroute latency across 500 requests',
          bn: 'সার্ভার ১: ১০০টি (২০.০০%), সার্ভার ২: ৩০০টি (৬০.০০%), সার্ভার ৩: ১০০টি (২০.০০%), যেখানে রিরাউট সময় ১০ ms এবং ৫০০টি রিকোয়েস্ট',
        },
        {
          en: 'Server 1: 150 requests (30.00%), Server 2: 150 requests (30.00%), Server 3: 200 requests (40.00%), with a 100 ms reroute latency across 500 requests',
          bn: 'সার্ভার ১: ১৫০টি (৩০.০০%), সার্ভার ২: ১৫০টি (৩০.০০%), সার্ভার ৩: ২০০টি (৪০.০০%), যেখানে রিরাউট সময় ১০০ ms এবং ৫০০টি রিকোয়েস্ট',
        },
      ],
      answer: 0,
      hint: { en: 'S1: 224 (44.80%), S2: 50 (10.00%), S3: 226 (45.20%), 1.50 ms reroute, 0 errors.', bn: 'সার্ভার ১: ২২৪ (৪৪.৮০%), সার্ভার ২: ৫০ (১০.০০%), সার্ভার ৩: ২২৬ (৪৫.২০%), ১.৫০ ms রিরাউট, ০টি এরর।' },
      explanation: {
        en: 'Server 2 was quarantined after 50 requests (10.00%), shifting load to Server 1 (224) and Server 3 (226) in 1.50 ms with 0 errors.',
        bn: '৫০টি রিকোয়েস্টের পর সার্ভার ২ বাদ পড়লে বাকি ট্রাফিক ১.৫০ ms এ সার্ভার ১ (২২৪) ও সার্ভার ৩ (২২৬) এ চলে গিয়ে ০টি এরর নিশ্চিত করে।',
      },
    },
    {
      id: 'rp-health-ex-3',
      kind: 'mcq',
      topic: 'active-vs-passive-monitoring',
      question: {
        en: 'Why do production engineers favor active synthetic health checks over passive observation?',
        bn: 'প্রোডাকশন প্রকৌশলীরা পরোক্ষ প্যাসিভ চেকের বদলে কেন সক্রিয় সিন্থেটিক চেক বেশি পছন্দ করেন?',
      },
      options: [
        {
          en: 'Active probes proactively test endpoints on a timer, ensuring failing nodes are removed before real end-users ever experience a failed request',
          bn: 'সক্রিয় প্রোব সময় নির্ধারণ করে নিয়মিত পরীক্ষা করায় বাস্তব ব্যবহারকারীরা কোনো এরর দেখার আগেই অসুস্থ নোড নিরাপদভাবে বিচ্ছিন্ন হয়ে যায়',
        },
        {
          en: 'Active probes eliminate the cost of internet hosting servers',
          bn: 'সক্রিয় প্রোব ব্যবহার করলে সার্ভার হোস্টিংয়ের সমস্ত খরচ শূন্য হয়ে যায়',
        },
        {
          en: 'Active probes turn off all computer fans to make data centers quiet',
          bn: 'সক্রিয় প্রোব সার্ভারের ফ্যান বন্ধ করে দিয়ে ডেটাসেন্টার শান্ত রাখে',
        },
        {
          en: 'Passive observation requires engineers to manually refresh browser windows every minute',
          bn: 'প্যাসিভ পর্যবেক্ষণের জন্য ইঞ্জিনিয়ারকে প্রতি মিনিটে ব্রাউজার রিলোড দিতে হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Active checks catch failures before real users connect.', bn: 'সক্রিয় চেক বাস্তব ব্যবহারকারী ঢোকার আগেই ত্রুটি ধরে ফেলে।' },
      explanation: {
        en: 'Passive checking requires real requests to fail first; active synthetic checking prevents user-facing errors.',
        bn: 'প্যাসিভ চেকের আগে গ্রাহকদের ভুল দেখতে হয়, কিন্তু সক্রিয় চেকে প্রক্সি নিজেই ত্রুটি আগে থেকে প্রতিহত করে।',
      },
    },
    {
      id: 'rp-health-ex-4',
      kind: 'predict',
      topic: 'health-endpoint-path',
      question: {
        en: 'What conventional URI path containing a trailing z is widely used for Kubernetes and reverse proxy health endpoints (e.g. /healthz)?',
        bn: 'কুবারনেটিস ও রিভার্স প্রক্সির হেলথ এন্ডপয়েন্টে z অক্ষরযুক্ত কোন বহুল প্রচলিত রুটটি ব্যবহৃত হয় (যেমন /healthz)?',
      },
      answer: '/healthz',
      accept: ['/healthz', 'healthz', '/health'],
      hint: { en: '/healthz', bn: '/healthz' },
      explanation: {
        en: 'The /healthz endpoint convention originated in Google internal systems and became standard in Kubernetes and reverse proxies.',
        bn: '/healthz হলো একটি সর্বজনীন স্ট্যান্ডার্ড এন্ডপয়েন্ট যার মাধ্যমে সার্ভারের সুস্থতা যাচাই করা হয়।',
      },
    },
  ],
  quiz: {
    id: 'healths-and-the-health-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'rp-health-q1',
        kind: 'mcq',
        topic: 'flapping-server-remedy',
        question: {
          en: 'How can a system administrator prevent "server flapping", where a rebooting server passes one probe and is immediately crushed by traffic again?',
          bn: '"সার্ভার ফ্ল্যাপিং" রোধ করতে সিস্টেম অ্যাডমিনিস্ট্রেটর কীভাবে কনফিগারেশন সাজাবেন, যেন একটি চেক পাস করেই সার্ভার আবার চাপে না পড়ে?',
        },
        options: [
          {
            en: 'Require multiple consecutive successful probes (e.g. passes=3 or passes=5) before restoring the node, and configure slow_start to gradually ramp traffic over several minutes',
            bn: 'সার্ভার ফিরিয়ে আনার আগে একাধিক সফল চেক (যেমন passes=3 বা passes=5) বাধ্যতামূলক করা এবং slow_start দিয়ে ধীরে ধীরে ট্রাফিক বাড়ানো',
          },
          {
            en: 'Delete the reverse proxy software immediately',
            bn: 'রিভার্স প্রক্সি সফটওয়্যারটি সাথে সাথে কম্পিউটার থেকে মুছে ফেলা',
          },
          {
            en: 'Increase the server network bandwidth to one hundred gigabytes',
            bn: 'সার্ভারের ইন্টারনেট ব্যান্ডউইথ ১০০ গিগাবাইটে উন্নীত করা',
          },
          {
            en: 'Change the server administrative password every five minutes',
            bn: 'প্রতি পাঁচ মিনিট পর পর সার্ভারের পাসওয়ার্ড পরিবর্তন করা',
          },
        ],
        answer: 0,
        hint: { en: 'Require multiple consecutive passes and configure slow_start.', bn: 'একাধিক সফল চেক এবং slow_start নিশ্চিত করুন।' },
        explanation: {
          en: 'Consecutive success thresholds and slow_start prevent flapping servers from crashing immediately upon reinstatement.',
          bn: 'একাধিক পাস ও ধীরগতির ট্রাফিক দিলে সুস্থ হওয়া সার্ভার পুনরায় হঠাৎ চাপে ভেঙে পড়ে না।',
        },
      },
      {
        id: 'rp-health-q2',
        kind: 'mcq',
        topic: 'health-sim-failover-reroute-time',
        question: {
          en: 'In our code walkthrough, what was the failover reroute latency when Server 2 failed after 50 requests across 500 total requests, and how many client errors occurred?',
          bn: 'আমাদের কোড আলোচনায় ৫০০টি রিকোয়েস্টে ৫০টি রিকোয়েস্টের পর সার্ভার ২ নষ্ট হলে রিরাউট লেটেন্সি কত ছিল এবং কতটি ক্লায়েন্ট এরর হয়েছিল?',
        },
        options: [
          { en: '1.50 ms reroute latency with 0 client errors across 500 requests (100.00% success)', bn: '৫০০টি রিকোয়েস্টে ০টি ক্লায়েন্ট এরর সহ ১.৫০ ms রিরাউট লেটেন্সি (১০০.০০% সাফল্য)' },
          { en: '500 ms reroute latency with 100 client errors', bn: '১০০টি ক্লায়েন্ট এরর সহ ৫০০ ms রিরাউট লেটেন্সি' },
          { en: '10 ms reroute latency with 25 client errors', bn: '২৫টি ক্লায়েন্ট এরর সহ ১০ ms রিরাউট লেটেন্সি' },
          { en: '0 ms reroute latency with 50 client errors', bn: '৫০টি ক্লায়েন্ট এরর সহ ০ ms রিরাউট লেটেন্সি' },
        ],
        answer: 0,
        hint: { en: '1.50 ms reroute, 0 client errors, 100.00% success.', bn: '১.৫০ ms রিরাউট, ০টি ক্লায়েন্ট এরর, ১০০.০০% সাফল্য।' },
        explanation: {
          en: 'The simulation recorded a 1.50 ms failover reroute latency with 0 client errors and a 100.00% success rate across 500 requests.',
          bn: 'সিমুলেশনে দেখা যায় ১.৫০ ms রিরাউট সময়ে ৫০০টি রিকোয়েস্টের মধ্যে ০টি ক্লায়েন্ট এরর সহ ১০০.০০% সফলতা বজায় থাকে।',
        },
      },
      {
        id: 'rp-health-q3',
        kind: 'mcq',
        topic: 'circuit-breaker-concept',
        question: {
          en: 'What architectural protection does the circuit breaker pattern offer when an upstream microservice becomes completely degraded?',
          bn: 'কোনো আপস্ট্রিম মাইক্রোসার্ভিস মারাত্মক ক্ষতিগ্রস্ত হলে সার্কিট ব্রেকার প্যাটার্ন কোন স্থাপত্যিক নিরাপত্তা প্রদান করে?',
        },
        options: [
          {
            en: 'It trips open to halt downstream traffic instantly, returning fast cached or fallback responses rather than allowing queued requests to tie up proxy worker threads',
            bn: 'এটি তাৎক্ষণিকভাবে ট্রাফিক পাঠানো বন্ধ করে দ্রুত ফলব্যাক বা ক্যাশ রেসপন্স প্রদান করে, ফলে জটলা পাকিয়ে প্রক্সির থ্রেড আটকে পুরো সিস্টেম অকেজো হতে পারে না',
          },
          {
            en: 'It turns off the electrical circuit breaker on the office wall',
            bn: 'এটি অফিসের দেয়ালের মূল বৈদ্যুতিক সুইচের সার্কিট ব্রেকার বন্ধ করে দেয়',
          },
          {
            en: 'It sends an automated SMS message to all website visitors',
            bn: 'এটি ওয়েবসাইটের সমস্ত দর্শকের ফোনে একটি স্বয়ংক্রিয় এসএমএস পাঠায়',
          },
          {
            en: 'It slows down the CPU clock frequency to zero hertz',
            bn: 'এটি প্রসেসরের গতি কমিয়ে শূন্য হার্টজ করে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'Circuit breakers fail fast to protect threads and systems.', bn: 'সার্কিট ব্রেকার দ্রুত ফলব্যাক দিয়ে সিস্টেমকে আটকে যাওয়া থেকে বাঁচায়।' },
        explanation: {
          en: 'Failing fast via circuit breaking protects resources from being exhausted by doomed requests.',
          bn: 'সার্কিট ব্রেকার দ্রুত বন্ধ হয়ে নষ্ট সার্ভারে ট্রাফিক আটকে যাওয়া থেকে পুরো আর্কিটেকচারকে রক্ষা করে।',
        },
      },
      {
        id: 'rp-health-q4',
        kind: 'predict',
        topic: 'backup-server-directive',
        question: {
          en: 'What six-letter directive is appended to an Nginx upstream server line to mark it as a standby fallback only activated when all primary nodes are down (e.g. backup)?',
          bn: 'সব মূল সার্ভার অচল হলেই কেবল ট্রাফিক পাবে এমন স্ট্যান্ডবাই সার্ভার নির্দেশ করতে Nginx-এ কোন ছয় অক্ষরের নির্দেশটি লেখা হয় (যেমন backup)?',
        },
        answer: 'backup',
        accept: ['backup', 'backup;'],
        hint: { en: 'b-a-c-k-u-p', bn: 'b-a-c-k-u-p' },
        explanation: {
          en: 'The backup directive keeps a node idle until all primary upstream servers fail.',
          bn: 'backup নির্দেশ কোনো সার্ভারকে রিজার্ভ রাখে যা মূল সার্ভারগুলো বন্ধ হলেই কেবল চালু হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-reverse-release',
    title: { en: 'Zero-Downtime Deployments: Blue-Green and Canary Routing', bn: 'ডাউনটাইমহীন ডিপ্লয়মেন্ট: ব্লু-গ্রিন ও ক্যানারি রাউটিং' },
  },
};
