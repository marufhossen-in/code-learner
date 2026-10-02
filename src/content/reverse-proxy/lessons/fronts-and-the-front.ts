import type { Lesson } from '../../../lib/types';

export const FrontsAndTheFrontLesson: Lesson = {
  slug: 'fronts-and-the-front',
  tech: 'reverse-proxy',
  title: {
    en: 'Reverse Proxy Fundamentals — Edge Ingress and Origin Shielding',
    bn: 'রিভার্স প্রক্সি পরিচিতি — এজ ইনগ্রেস ও অরিজিন সার্ভার সুরক্ষা',
  },
  summary: {
    en: 'A beginner introduction to reverse proxies and edge ingress architecture. Understand how reverse proxies intercept client traffic on port 443, shield internal origin servers across 2 network zones, compress 1000 client connections into 4 keepalive upstream sockets (99.60% reduction), and block unauthorized probes with 1.20 ms proxy overhead.',
    bn: 'রিভার্স প্রক্সি ও এজ ইনগ্রেস আর্কিটেকচারের প্রাথমিক পরিচিতি। রিভার্স প্রক্সি কীভাবে ৪৪৩ পোর্টে ট্রাফিক গ্রহণ করে, ২টি নেটওয়ার্ক জোনে মূল সার্ভার রক্ষা করে, ১০০০টি ক্লায়েন্ট সংযোগকে ৪টি কিপ-অ্যালাইভ সকেটে সংকুচিত করে (৯৯.৬০% হ্রাস) এবং ১.২০ ms প্রক্সি লেটেন্সিতে ৪২টি অননুমোদিত অনুসন্ধান প্রতিরোধ করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Front proxies, edge ingress, and origin shielding', bn: 'WHAT — ফ্রন্ট প্রক্সি, এজ ইনগ্রেস ও অরিজিন সার্ভার সুরক্ষা' },
    },
    {
      type: 'para',
      text: {
        en: 'When you expose backend applications to the public internet, routing user traffic directly to origin application servers creates severe security risks and scalability limits. A reverse proxy acts as an intelligent intermediary standing between external clients and your private internal web servers. Unlike a forward proxy that masks client identities when accessing external websites, a reverse proxy shields backend servers from direct internet exposure. The reverse proxy accepts inbound connections on public ports, performs cryptographic handshakes, inspects request headers, and dispatches cleaned requests to private application instances. By intercepting traffic at the edge, a reverse proxy centralizes firewall defenses, mitigates volumetric attacks, and optimizes network connection efficiency.',
        bn: 'যখন আপনি পাবলিক ইন্টারনেটে কোনো ব্যাকএন্ড অ্যাপ্লিকেশন উন্মুক্ত করেন, তখন ব্যবহারকারীদের ট্রাফিক সরাসরি মূল অ্যাপ্লিকেশনে পাঠানো গুরুতর নিরাপত্তা ঝুঁকি তৈরি করে। রিভার্স প্রক্সি এমন একটি সমন্বয়কারী গেটওয়ে যা বহিরাগত ইন্টারনেট ক্লায়েন্ট এবং আপনার অভ্যন্তরীণ প্রাইভেট সার্ভারের মাঝখানে অবস্থান করে। ফরওয়ার্ড প্রক্সি যেখানে ক্লায়েন্টের পরিচয় গোপন রেখে ইন্টারনেটে যায়, রিভার্স প্রক্সি সেখানে উল্টো ব্যাকএন্ড সার্ভারগুলোকে বহিরাগত উন্মোচন থেকে রক্ষা করে। এটি পাবলিক পোর্টে রিকোয়েস্ট গ্রহণ করে, এনক্রিপশন সমাধান করে, হেডার যাচাই করে এবং অভ্যন্তরীণ নেটওয়ার্কে নিরাপদ অ্যাপ্লিকেশন সার্ভারে ডেটা পৌঁছে দেয়। এজে ট্রাফিক আটকে রিভার্স প্রক্সি ফায়ারওয়াল শক্তিশালী করে, সাইবার আক্রমণ ঠেকায় এবং নেটওয়ার্ক সংযোগের গতিশীলতা বৃদ্ধি করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Reverse proxy edge ingress and private VPC origin isolation', bn: 'রিভার্স প্রক্সি এজ ইনগ্রেস ও প্রাইভেট নেটওয়ার্ক আইসোলেশন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Reverse Proxy Edge Ingress and Origin Shielding diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">Public Internet</text>

<rect x="35" y="80" width="140" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">1000 Client Requests</text>
<text x="105" y="113" text-anchor="middle" font-size="7" fill="#dc2626">Public TLS Connections</text>

<text x="105" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#b91c1c">42 blocked probes</text>
<text x="105" y="175" text-anchor="middle" font-size="7" fill="#64748b">Port scans & floods</text>

<line x1="185" y1="100" x2="235" y2="100" stroke="#2563eb" stroke-width="2"/>
<polygon points="235,96 245,100 235,104" fill="#2563eb"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Reverse Proxy (DMZ)</text>

<rect x="255" y="80" width="160" height="45" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Public Port 443 Terminated</text>
<text x="335" y="115" text-anchor="middle" font-size="8" fill="#1e40af">1.20 ms proxy latency</text>

<text x="335" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Connection Pooling Engine</text>
<text x="335" y="175" text-anchor="middle" font-size="7" fill="#166534">99.60% connection reduction</text>

<line x1="425" y1="100" x2="475" y2="100" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,96 485,100 475,104" fill="#16a34a"/>

<rect x="485" y="35" width="130" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="550" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Private VPC Subnet</text>

<rect x="495" y="80" width="110" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="550" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Origin App Node</text>
<text x="550" y="115" text-anchor="middle" font-size="7" fill="#166534">4 Keepalive Sockets</text>

<text x="550" y="160" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">IP Hidden (10.0.1.50)</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Reverse proxy compresses 1000 client TLS sockets into 4 keepalive connections across 2 network zones</text>
</svg>`,
      caption: {
        en: 'The reverse proxy terminates 1000 HTTPS client connections at the public edge, offloading them into 4 keepalive sockets (99.60% connection reduction), blocking 42 unauthorized probes with 1.20 ms latency across 2 network zones.',
        bn: 'রিভার্স প্রক্সি পাবলিক এজে ১০০০টি এইচটিটিপিএস ক্লায়েন্ট সংযোগ গ্রহণ করে ৪টি কিপ-অ্যালাইভ সকেটে রূপান্তর করে (৯৯.৬০% হ্রাস), যা ২টি নেটওয়ার্ক জোনে ১.২০ ms লেটেন্সিতে ৪২টি অননুমোদিত অনুসন্ধান প্রতিরোধ করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Reverse Proxy',
          def: {
            en: 'An intermediary server positioned in front of origin web applications to intercept incoming requests, enforce security, and distribute traffic.',
            bn: 'একটি মধ্যবর্তী সার্ভার যা ব্যাকএন্ড ওয়েব অ্যাপ্লিকেশনের সামনে থেকে আগমনী রিকোয়েস্ট গ্রহণ, নিরাপত্তা নিশ্চিত এবং ট্রাফিক বণ্টন করে।',
          },
        },
        {
          term: 'Origin Shielding',
          def: {
            en: 'The security practice of concealing private backend IP addresses behind edge reverse proxies to prevent direct network attacks.',
            bn: 'সরাসরি সাইবার আক্রমণ রোধ করতে এজ রিভার্স প্রক্সির পেছনে অভ্যন্তরীণ ব্যাকএন্ড সার্ভারের গোপন আইপি অ্যাড্রেস লুকিয়ে রাখার কৌশল।',
          },
        },
        {
          term: 'Connection Pooling',
          def: {
            en: 'Maintaining persistent reusable TCP connections between the reverse proxy and upstream origin servers to avoid repeated handshake overhead.',
            bn: 'রিভার্স প্রক্সি এবং ব্যাকএন্ড সার্ভারের মধ্যে স্থায়ী টিসিপি সংযোগ বজায় রাখা যাতে বারবার নতুন হ্যান্ডশেকের বিলম্ব এড়ানো যায়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Edge security, caching, and connection efficiency', bn: 'কেন — এজ নিরাপত্তা, ক্যাশিং ও সংযোগের দক্ষতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent direct origin exploitation: shielding backend IP addresses prevents port scanning, direct TCP floods, and unpatched application exploits.', bn: 'মূল সার্ভারে সরাসরি আক্রমণ রোধ: ব্যাকএন্ডের অভ্যন্তরীণ আইপি গোপন রাখলে অনাকাঙ্ক্ষিত পোর্ট স্ক্যানিং ও ডিরেক্ট নেটওয়ার্ক আক্রমণ বন্ধ থাকে।' },
        { en: 'Slash backend connection overhead: compressing 1000 client TCP sockets into 4 pooled keepalive connections reduces memory usage on Node.js and Python origins.', bn: 'ব্যাকএন্ড সার্ভারের লোড হ্রাস: ১০০০টি ক্লায়েন্ট কানেকশনকে ৪টি কিপ-অ্যালাইভ সকেটে সংকুচিত করলে ব্যাকএন্ড অ্যাপ্লিকেশনের মেমরি খরচ কমে।' },
        { en: 'Centralize SSL and WAF enforcement: edge proxies terminate TLS certificates and inspect malicious payloads before requests ever touch application code.', bn: 'কেন্দ্রীয় নিরাপত্তা ও এনক্রিপশন: অ্যাপ্লিকেশনে প্রবেশের আগেই রিভার্স প্রক্সি সমস্ত TLS এনক্রিপশন এবং ক্ষতিকারক রিকোয়েস্ট যাচাই করে ফিল্টার করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring a front reverse proxy in 4 steps', bn: 'HOW — ৪টি ধাপে ফ্রন্ট রিভার্স প্রক্সি কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Listen on public edge ports', bn: '১. পাবলিক এজে পোর্ট লিসেন করা' }, text: { en: 'Configure the proxy to bind ports 80 and 443 on public facing interfaces.', bn: 'পাবলিক নেটওয়ার্ক ইন্টারফেসে ৮০ ও ৪৪৩ পোর্টে রিকোয়েস্ট গ্রহণের ব্যবস্থা করুন।' } },
        { title: { en: '2. Declare upstream origin targets', bn: '২. আপস্ট্রিম ব্যাকএন্ড নির্ধারণ' }, text: { en: 'Define internal private IP addresses hosting the application workloads.', bn: 'অভ্যন্তরীণ প্রাইভেট সাবনেটে চলমান অ্যাপ্লিকেশন সার্ভারের আইপি ও পোর্ট যুক্ত করুন।' } },
        { title: { en: '3. Enable upstream keepalive pooling', bn: '৩. কিপ-অ্যালাইভ পুলিং চালু করা' }, text: { en: 'Configure keepalive 32; inside upstream blocks to reuse TCP sockets.', bn: 'আপস্ট্রিম ব্লকে keepalive 32 লিখে ব্যাকএন্ডের সাথে স্থায়ী সকেট সংযোগ ধরে রাখুন।' } },
        { title: { en: '4. Pass proxy headers', bn: '৪. প্রক্সি হেডার ফরোয়ার্ড করা' }, text: { en: 'Forward Host, X-Real-IP, and X-Forwarded-For headers to preserve client identity.', bn: 'ক্লায়েন্টের প্রকৃত পরিচয় ধরে রাখতে Host, X-Real-IP ও X-Forwarded-For হেডার পাঠান।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'reverse_proxy_ingress_sim.js',
      code: `// Simulated reverse proxy edge ingress, connection pooling, and shielding
const incomingRequests = 1000;
const directOriginConnections = incomingRequests; // 1000 without proxy

const pooledUpstreamConnections = 4;
const connectionReductionPct = Math.round((1 - (pooledUpstreamConnections / directOriginConnections)) * 10000) / 100; // 99.60%

const blockedPortScans = 42;
const edgeProcessingLatencyMs = 1.20;
const securityZones = 2; // Public DMZ and Private VPC

console.log("Reverse Proxy Ingress and Origin Shielding Simulation:");
console.log("Client traffic: " + incomingRequests + " HTTPS requests terminated at edge proxy");
console.log("Origin offload: " + directOriginConnections + " client connections compressed into " + pooledUpstreamConnections + " keepalive connections (" + connectionReductionPct.toFixed(2) + "% reduction)");
console.log("Security audit: blocked " + blockedPortScans + " unauthorized probes with " + edgeProcessingLatencyMs.toFixed(2) + " ms proxy latency across " + securityZones + " network zones");

// Output:
// Reverse Proxy Ingress and Origin Shielding Simulation:
// Client traffic: 1000 HTTPS requests terminated at edge proxy
// Origin offload: 1000 client connections compressed into 4 keepalive connections (99.60% reduction)
// Security audit: blocked 42 unauthorized probes with 1.20 ms proxy latency across 2 network zones`,
      caption: {
        en: 'The reverse proxy terminates 1000 HTTPS client connections at the public edge, offloading them into 4 keepalive sockets (99.60% connection reduction), blocking 42 unauthorized probes with 1.20 ms latency across 2 network zones.',
        bn: 'রিভার্স প্রক্সি পাবলিক এজে ১০০০টি এইচটিটিপিএস ক্লায়েন্ট সংযোগ গ্রহণ করে ৪টি কিপ-অ্যালাইভ সকেটে রূপান্তর করে (৯৯.৬০% হ্রাস), যা ২টি নেটওয়ার্ক জোনে ১.২০ ms লেটেন্সিতে ৪২টি অননুমোদিত অনুসন্ধান প্রতিরোধ করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive reverse proxy connection offload lab', bn: 'INSIDE — জীবন্ত রিভার্স প্রক্সি কানেকশন অফলোড ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test reverse proxy ingress metrics and origin protection. Accepting 1000 client requests at the edge allows the proxy to compress 1000 direct connections into 4 keepalive sockets, achieving a 99.60% reduction in origin socket overhead. Concurrently, the proxy blocks 42 unauthorized probes with only 1.20 ms processing latency across 2 network zones. Origin shielding is fundamental to robust cloud infrastructure.',
        bn: 'রিভার্স প্রক্সি ইনগ্রেস এবং অরিজিন সুরক্ষার কার্যকারিতা পরীক্ষা করুন। এজে ১০০০টি ক্লায়েন্ট রিকোয়েস্ট গ্রহণ করায় প্রক্সি ১০০০টি ডিরেক্ট সংযোগকে মাত্র ৪টি কিপ-অ্যালাইভ সকেটে রূপান্তর করে অরিজিন সকেটের চাপ ৯৯.৬০% কমিয়ে দেয়। একই সাথে প্রক্সি মাত্র ১.২০ ms প্রক্রিয়াকরণ লেটেন্সিতে ২টি নেটওয়ার্ক জোনে ৪২টি অননুমোদিত অনুসন্ধান প্রতিহত করে। ক্লাউড অবকাঠামো সুরক্ষিত রাখতে অরিজিন শিল্ডিং অপরিহার্য।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Proxy ingress lab (verify socket reduction, press Run)', bn: 'প্রক্সি ইনগ্রেস ল্যাব (সকেট হ্রাস যাচাই, Run)' },
      html: '<h3>Reverse Proxy Connection Offload Monitor</h3>\n<pre id="out"></pre>\n<p>Compute socket reduction efficiency and edge ingress latency.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const incoming = 1000;\nconst pooled = 4;\nconst redPct = ((1 - (pooled / incoming)) * 100).toFixed(2);\nconst blocked = 42;\nconsole.log("reduction: " + redPct + "%");\ndocument.getElementById("out").textContent = "Incoming: " + incoming + " clients · Pooled: " + pooled + " sockets · Reduced: " + redPct + "% · Blocked Probes: " + blocked + " (2 zones ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Reverse proxy architectural rules', bn: 'ফলাফল — রিভার্স প্রক্সি স্থাপত্যের মূল নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never expose origin servers directly to public DNS: always place an edge reverse proxy or load balancer in front of private subnets.', bn: 'কখনোই পাবলিক ডিএনএসে মূল ব্যাকএন্ড সার্ভার উন্মুক্ত করবেন না: প্রাইভেট সাবনেটের সামনে সর্বদা রিভার্স প্রক্সি ব্যবহার করুন।' },
        { en: 'Always enable HTTP keepalive on upstreams: keeping persistent TCP sockets alive eliminates handshake latency on high-traffic microservices.', bn: 'আপস্ট্রিমে সর্বদা HTTP কিপ-অ্যালাইভ চালু রাখুন: স্থায়ী সকেট বজায় রাখলে মাইক্রোসার্ভিসে প্রতি রিকোয়েস্টে নতুন কানেকশন তৈরির লেটেন্সি দূর হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common reverse proxy ingress pitfalls', bn: 'ডিবাগ — রিভার্স প্রক্সির সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Forgetting to increase worker_rlimit_nofile in Nginx', bn: 'Nginx-এ worker_rlimit_nofile ফাইল ডেসক্রিপ্টর সীমা না বাড়ানো' },
      text: {
        en: 'By default, Linux limits processes to 1024 open file descriptors. Because every proxied request occupies 2 sockets, an overloaded reverse proxy will fail with open file descriptor exhaustion unless worker_rlimit_nofile is raised to 65535.',
        bn: 'সাধারণত লিনাক্সে প্রতি প্রসেসে সর্বোচ্চ ১০২৪টি ফাইল ডেসক্রিপ্টর খোলা যায়। যেহেতু প্রতি প্রক্সাইড রিকোয়েস্টে ২টি সকেট লাগে, তাই অতিরিক্ত ট্রাফিকে Nginx ক্র্যাশ করতে পারে যদি না worker_rlimit_nofile বাড়িয়ে ৬৫৫৩৫ করা হয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Verifying proxy syntax before reloading configuration', bn: 'কনফিগারেশন রিলোডের পূর্বে সিনট্যাক্স যাচাই করা' },
      text: {
        en: 'Always run nginx -t before invoking systemctl reload nginx. This validates configuration syntax and prevents accidentally taking down public ingress with typographical errors.',
        bn: 'সার্ভিস রিলোড করার আগে সর্বদা nginx -t কমান্ড চালিয়ে সিনট্যাক্স ঠিক আছে কিনা পরীক্ষা করে নিন, যা ভুল কনফিগারেশনের কারণে সাইট ডাউন হওয়া থেকে রক্ষা করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production reverse proxy deployments', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল রিভার্স প্রক্সি ব্যবস্থা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Nginx: powers over 30% of web servers worldwide as a high-performance event-driven reverse proxy and HTTP cache.', bn: 'Nginx: উচ্চ-গতির ইভেন্ট-চালিত রিভার্স প্রক্সি হিসেবে বিশ্বব্যাপী ৩০% এর বেশি ওয়েব সার্ভার পরিচালনায় নিয়োজিত।' },
        { en: 'Envoy Proxy: modern C++ L7 proxy designed for cloud-native service meshes, powering Lyft, Kubernetes Ingress, and Istio.', bn: 'Envoy Proxy: ক্লাউড-নেটিভ সার্ভিস মেশের জন্য নির্মিত আধুনিক লেয়ার ৭ প্রক্সি যা কুবারনেটিস ও ইস্টিওতে ইনগ্রেস হিসেবে ব্যবহৃত হয়।' },
        { en: 'HAProxy: specialized high-availability reverse proxy renowned for sub-millisecond TCP and HTTP load distribution under extreme load.', bn: 'HAProxy: অত্যন্ত নির্ভরযোগ্য রিভার্স প্রক্সি যা উচ্চ ট্রাফিকের মুখে মিলি-সেকেন্ডের নিচে টিসিপি ও এইচটিটিপি ট্রাফিক বণ্টন করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Upstream Backend Pools and Load Balancing', bn: 'পরবর্তী পাঠ — আপস্ট্রিম ব্যাকএন্ড পুল ও লোড ব্যালেন্সিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With edge ingress and origin shielding mastered, Lesson 2 explores upstream server pools: round-robin balancing, least-connections scheduling, ip_hash session routing, and tuning upstream buffer queues.',
        bn: 'এজ ইনগ্রেস ও অরিজিন শিল্ডিং আয়ত্ত করার পর, পাঠ ২ আপস্ট্রিম সার্ভার পুল নিয়ে আলোচনা করবে: রাউন্ড-রবিন ব্যালেন্সিং, লিস্ট-কানেকশন শিডিউলিং, ip_hash সেশন রাউটিং এবং আপস্ট্রিম বাফার কিউ টিউনিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'rp-front-ex-1',
      kind: 'mcq',
      topic: 'forward-vs-reverse-proxy-distinction',
      question: {
        en: 'What architectural role distinguishes a Reverse Proxy from a traditional Forward Proxy?',
        bn: 'ঐতিহ্যবাহী ফরওয়ার্ড প্রক্সির তুলনায় রিভার্স প্রক্সির মূল কাঠামোগত ভূমিকা কোনটি?',
      },
      options: [
        {
          en: 'A reverse proxy sits in front of backend origin servers to intercept inbound internet requests, whereas a forward proxy sits in front of client devices to intercept outbound requests',
          bn: 'রিভার্স প্রক্সি ব্যাকএন্ড অরিজিন সার্ভারের সামনে বসে বহিরাগত আগমনী রিকোয়েস্ট গ্রহণ করে, আর ফরওয়ার্ড প্রক্সি ক্লায়েন্ট ডিভাইসের সামনে বসে বহির্গামী রিকোয়েস্ট গ্রহণ করে',
        },
        {
          en: 'A reverse proxy only operates when the computer monitor is turned backwards',
          bn: 'রিভার্স প্রক্সি কেবল তখনই কাজ করে যখন কম্পিউটার মনিটর পেছন দিকে ঘোরানো থাকে',
        },
        {
          en: 'A reverse proxy requires physical cash payments for each transferred packet',
          bn: 'রিভার্স প্রক্সির মাধ্যমে স্থানান্তরিত প্রতিটি প্যাকেটের জন্য সরাসরি নগদ টাকা দিতে হয়',
        },
        {
          en: 'A forward proxy is used exclusively on passenger airplanes',
          bn: 'ফরওয়ার্ড প্রক্সি কেবল যাত্রীবাহী বিমানে ব্যবহৃত হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Reverse proxies shield servers; forward proxies shield clients.', bn: 'রিভার্স প্রক্সি সার্ভার রক্ষা করে; ফরওয়ার্ড প্রক্সি ক্লায়েন্ট রক্ষা করে।' },
      explanation: {
        en: 'Reverse proxies act on behalf of destination servers, shielding their private IP addresses from internet clients.',
        bn: 'রিভার্স প্রক্সি গন্তব্য সার্ভারের পক্ষ হয়ে কাজ করে বহিরাগত ক্লায়েন্টের কাছ থেকে সার্ভারের প্রকৃত আইপি লুকিয়ে রাখে।',
      },
    },
    {
      id: 'rp-front-ex-2',
      kind: 'mcq',
      topic: 'proxy-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many incoming client connections were compressed into how many keepalive upstream sockets, and what was the percentage reduction across 2 network zones?',
        bn: 'আমাদের কোড আলোচনায় কতগুলো আগমনী ক্লায়েন্ট সংযোগকে কতগুলো কিপ-অ্যালাইভ সকেটে রূপান্তর করা হয়েছিল এবং ২টি নেটওয়ার্ক জোনে কত শতাংশ হ্রাস অর্জিত হয়েছিল?',
      },
      options: [
        {
          en: '1000 client connections compressed into 4 keepalive sockets (99.60% connection reduction, blocking 42 probes with 1.20 ms latency across 2 network zones)',
          bn: '১০০০টি ক্লায়েন্ট সংযোগ ৪টি কিপ-অ্যালাইভ সকেটে সংকুচিত (৯৯.৬০% সংযোগ হ্রাস, ২টি নেটওয়ার্ক জোনে ১.২০ ms লেটেন্সিতে ৪২টি অনুসন্ধান প্রতিহত)',
        },
        {
          en: '100 client connections compressed into 50 sockets (50.00% connection reduction across 2 network zones)',
          bn: '১০০টি ক্লায়েন্ট সংযোগ ৫০টি সকেটে সংকুচিত (২টি নেটওয়ার্ক জোনে ৫০.০০% সংযোগ হ্রাস)',
        },
        {
          en: '0 client connections compressed into 0 sockets (0.00% connection reduction across 2 network zones)',
          bn: '০টি ক্লায়েন্ট সংযোগ ০টি সকেটে সংকুচিত (২টি নেটওয়ার্ক জোনে ০.০০% সংযোগ হ্রাস)',
        },
        {
          en: '500 client connections compressed into 500 sockets (0.00% connection reduction across 2 network zones)',
          bn: '৫০০টি ক্লায়েন্ট সংযোগ ৫০০টি সকেটে সংকুচিত (২টি নেটওয়ার্ক জোনে ০.০০% সংযোগ হ্রাস)',
        },
      ],
      answer: 0,
      hint: { en: '1000 down to 4 sockets = 99.60% reduction.', bn: '১০০০ থেকে ৪টি সকেটে রূপান্তর = ৯৯.৬০% সাশ্রয়।' },
      explanation: {
        en: 'The simulation demonstrated that 1000 client TLS requests were multiplexed across 4 keepalive sockets, achieving a 99.60% origin connection reduction.',
        bn: 'সিমুলেশনে দেখা যায় ১০০০টি ক্লায়েন্ট রিকোয়েস্টকে ৪টি কিপ-অ্যালাইভ সকেটে পাঠিয়ে ব্যাকএন্ড সংযোগের চাপ ৯৯.৬০% কমিয়ে আনা হয়।',
      },
    },
    {
      id: 'rp-front-ex-3',
      kind: 'mcq',
      topic: 'origin-shielding-security-benefit',
      question: {
        en: 'Why is origin shielding an essential security practice in enterprise cloud deployments?',
        bn: 'এন্টারপ্রাইজ ক্লাউড সিস্টেমে অরিজিন শিল্ডিং কেন একটি অত্যন্ত জরুরি নিরাপত্তা কৌশল?',
      },
      options: [
        {
          en: 'It hides internal private IP addresses from public internet visibility, preventing direct network-layer port scanning, SYN floods, and unauthenticated exploits',
          bn: 'এটি অভ্যন্তরীণ প্রাইভেট আইপিগুলোকে ইন্টারনেটের দৃষ্টি থেকে লুকিয়ে রাখে, যা সরাসরি পোর্ট স্ক্যানিং, SYN ফ্লাড এবং অননুমোদিত আক্রমণ প্রতিহত করে',
        },
        {
          en: 'It changes the font color of internal terminal logs to green',
          bn: 'এটি অভ্যন্তরীণ টার্মিনাল লগের লেখার রঙ সবুজ করে দেয়',
        },
        {
          en: 'It accelerates electricity through Ethernet cables by 500%',
          bn: 'এটি ইথারনেট কেবলের ভেতরের বিদ্যুৎ প্রবাহ ৫০০% দ্রুত করে',
        },
        {
          en: 'It automatically translates SQL queries into French',
          bn: 'এটি স্বয়ংক্রিয়ভাবে এসকিউএল কুয়েরি ফরাসি ভাষায় অনুবাদ করে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Hiding origin IPs prevents direct network-layer attacks.', bn: 'অরিজিন আইপি গোপন রাখলে সরাসরি আক্রমণ প্রতিহত হয়।' },
      explanation: {
        en: 'Origin shielding ensures that external traffic can only enter via hardened edge reverse proxies that inspect and sanitize requests.',
        bn: 'অরিজিন শিল্ডিং নিশ্চিত করে যে বহিরাগত ট্রাফিক কেবল সুরক্ষিত এজ প্রক্সির মধ্য দিয়েই প্রবেশ করতে পারবে।',
      },
    },
    {
      id: 'rp-front-ex-4',
      kind: 'predict',
      topic: 'standard-https-port-number',
      question: {
        en: 'What standard port number is used by reverse proxies to terminate encrypted HTTPS traffic from public clients (e.g. 443)?',
        bn: 'পাবলিক ক্লায়েন্টদের এনক্রিপ্ট করা HTTPS ট্রাফিক গ্রহণ করতে রিভার্স প্রক্সিগুলো কোন প্রমিত পোর্ট নম্বর ব্যবহার করে (যেমন 443)?',
      },
      answer: '443',
      accept: ['443', 'port 443', 'Port 443'],
      hint: { en: 'Standard HTTPS port is 443.', bn: 'প্রমিত HTTPS পোর্ট হলো ৪৪৩।' },
      explanation: {
        en: 'Port 443 is the universally standard port for encrypted TLS/HTTPS web traffic.',
        bn: '৪৪৩ হলো এনক্রিপ্ট করা TLS/HTTPS ওয়েব ট্রাফিকের জন্য নির্ধারিত প্রমিত পোর্ট।',
      },
    },
  ],
  quiz: {
    id: 'fronts-and-the-front-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'rp-front-q1',
        kind: 'mcq',
        topic: 'connection-pooling-mechanism',
        question: {
          en: 'How does enabling HTTP keepalive connection pooling on an edge reverse proxy improve backend performance?',
          bn: 'এজ রিভার্স প্রক্সিতে HTTP কিপ-অ্যালাইভ কানেকশন পুলিং সক্রিয় রাখলে ব্যাকএন্ড পারফরম্যান্স কীভাবে বৃদ্ধি পায়?',
        },
        options: [
          {
            en: 'By keeping persistent TCP sockets open to backend servers, eliminating repetitive three-way TCP handshakes and TLS renegotiation latency on every request',
            bn: 'ব্যাকএন্ড সার্ভারের সাথে স্থায়ী টিসিপি সকেট খোলা রেখে, যা প্রতিটি রিকোয়েস্টে নতুন ৩-ওয়ে হ্যান্ডশেক ও TLS নেগোসিয়েশনের বিলম্ব দূর করে',
          },
          {
            en: 'By downloading the entire internet into computer RAM during startup',
            bn: 'সার্ভার চালু হওয়ার সময় পুরো ইন্টারনেট কম্পিউটারের র্যামে ডাউনলোড করে রেখে',
          },
          {
            en: 'By deleting all database records every 60 seconds to save space',
            bn: 'জায়গা বাঁচাতে প্রতি ৬০ সেকেন্ড অন্তর সব ডেটাবেস রেকর্ড মুছে দিয়ে',
          },
          {
            en: 'By replacing optical fiber lines with copper telephone cables',
            bn: 'অপটিক্যাল ফাইবার কেবলের বদলে তামার টেলিফোন তার ব্যবহার করে',
          },
        ],
        answer: 0,
        hint: { en: 'Keepalive reuses existing TCP connections.', bn: 'কিপ-অ্যালাইভ বিদ্যমান টিসিপি সংযোগ পুনঃব্যবহার করে।' },
        explanation: {
          en: 'Reusing persistent upstream connections eliminates the latency tax of establishing a new TCP session for each client request.',
          bn: 'বিদ্যমান সংযোগ পুনঃব্যবহার করলে প্রতিবার নতুন টিসিপি সেশন খোলার বাড়তি সময় ও সার্ভারের মেমরির অপচয় রোধ হয়।',
        },
      },
      {
        id: 'rp-front-q2',
        kind: 'mcq',
        topic: 'proxy-latency-check',
        question: {
          en: 'In our code walkthrough, what was the edge processing latency overhead introduced by the reverse proxy while blocking 42 unauthorized probes across 2 network zones?',
          bn: 'আমাদের কোড আলোচনায় ২টি নেটওয়ার্ক জোনে ৪২টি অননুমোদিত অনুসন্ধান প্রতিহত করার সময় রিভার্স প্রক্সিটি কত প্রক্রিয়াকরণ লেটেন্সি যোগ করেছিল?',
        },
        options: [
          { en: '1.20 ms proxy processing latency across 2 network zones', bn: '২টি নেটওয়ার্ক জোনে ১.২০ ms প্রক্সি প্রসেসিং লেটেন্সি' },
          { en: '100.00 ms proxy processing latency across 2 network zones', bn: '২টি নেটওয়ার্ক জোনে ১০০.০০ ms প্রক্সি প্রসেসিং লেটেন্সি' },
          { en: '0.00 ms proxy processing latency across 2 network zones', bn: '২টি নেটওয়ার্ক জোনে ০.০০ ms প্রক্সি প্রসেসিং লেটেন্সি' },
          { en: '500.00 ms proxy processing latency across 2 network zones', bn: '২টি নেটওয়ার্ক জোনে ৫০০.০০ ms প্রক্সি প্রসেসিং লেটেন্সি' },
        ],
        answer: 0,
        hint: { en: '1.20 ms latency overhead.', bn: '১.২০ ms লেটেন্সি ওভারহেড।' },
        explanation: {
          en: 'The simulation recorded a lightweight 1.20 ms edge processing latency overhead across 2 network zones.',
          bn: 'সিমুলেশনটিতে দেখা যায় ২টি নেটওয়ার্ক জোনে রিভার্স প্রক্সি মাত্র ১.২০ ms অতি-স্বল্প লেটেন্সি ওভারহেড যোগ করে।',
        },
      },
      {
        id: 'rp-front-q3',
        kind: 'mcq',
        topic: 'dmz-network-architecture',
        question: {
          en: 'What is a Demilitarized Zone (DMZ) in reverse proxy network architecture?',
          bn: 'রিভার্স প্রক্সি নেটওয়ার্ক আর্কিটেকচারে Demilitarized Zone (DMZ) বলতে কী বোঝায়?',
        },
        options: [
          {
            en: 'A perimeter network subnet that exposes public-facing reverse proxies to the internet while isolating internal private databases and application servers behind firewalls',
            bn: 'একটি পেরিমিটার নেটওয়ার্ক সাবনেট যা পাবলিকমুখী রিভার্স প্রক্সিকে ইন্টারনেটের সাথে যুক্ত রাখে এবং অভ্যন্তরীণ ডেটাবেস ও মূল সার্ভারকে ফায়ারওয়ালের পেছনে আলাদা রাখে',
          },
          {
            en: 'A physical military bunker where servers are guarded by armed soldiers',
            bn: 'একটি সামরিক বাঙ্কার যেখানে সশস্ত্র সেনা দ্বারা সার্ভার পাহারা দেওয়া হয়',
          },
          {
            en: 'A software setting that disables all passwords on the server',
            bn: 'একটি সফটওয়্যার সেটিং যা সার্ভারের সমস্ত পাসওয়ার্ড বন্ধ করে দেয়',
          },
          {
            en: 'A zone in the datacenter where coffee drinking is strictly prohibited',
            bn: 'ডাটা সেন্টারের একটি অংশ যেখানে কফি খাওয়া সম্পূর্ণ নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: { en: 'A DMZ isolates public ingress from private backends.', bn: 'DMZ পাবলিক ইনগ্রেসকে প্রাইভেট ব্যাকএন্ড থেকে আলাদা রাখে।' },
        explanation: {
          en: 'The DMZ creates a buffer layer: if a reverse proxy is compromised, the attacker still faces secondary firewalls protecting the private network.',
          bn: 'DMZ একটি মধ্যবর্তী নিরাপত্তা স্তর তৈরি করে যাতে এজ প্রক্সির ক্ষতি হলেও অভ্যন্তরীণ প্রাইভেট নেটওয়ার্ক অক্ষত থাকে।',
        },
      },
      {
        id: 'rp-front-q4',
        kind: 'predict',
        topic: 'dmz-acronym-token',
        question: {
          en: 'What three-letter acronym identifies the perimeter network zone hosting edge reverse proxies (e.g. DMZ)?',
          bn: 'এজ রিভার্স প্রক্সি ধারণকারী পেরিমিটার নেটওয়ার্ক অঞ্চলকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা প্রকাশ করা হয় (যেমন DMZ)?',
        },
        answer: 'DMZ',
        accept: ['DMZ', 'dmz', 'Demilitarized Zone'],
        hint: { en: 'D-M-Z', bn: 'D-M-Z' },
        explanation: {
          en: 'DMZ stands for Demilitarized Zone, the subnetwork separating public internet ingress from private backends.',
          bn: 'DMZ হলো Demilitarized Zone, যা বহিরাগত ইন্টারনেট এবং অভ্যন্তরীণ গোপন সার্ভারের মধ্যে সীমানা প্রাচীর হিসেবে কাজ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'backs-and-the-back',
    title: { en: 'Upstream Backend Pools and Load Balancing', bn: 'আপস্ট্রিম ব্যাকএন্ড পুল ও লোড ব্যালেন্সিং' },
  },
};
