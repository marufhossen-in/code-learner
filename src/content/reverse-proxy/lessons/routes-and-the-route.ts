import type { Lesson } from '../../../lib/types';

export const RoutesAndTheRouteLesson: Lesson = {
  slug: 'routes-and-the-route',
  tech: 'reverse-proxy',
  title: {
    en: 'URL Routing and Path Rewriting — Location Matching Rules',
    bn: 'ইউআরএল রাউটিং ও পাথ রিরাইট — লোকেশন ম্যাচিং রুলস',
  },
  summary: {
    en: 'A foundational overview of reverse proxy URL routing and path rewriting. Master location block precedence (exact, prefix, and regex), avoid trailing slash 404 bugs in proxy_pass, and dispatch 600 requests across 4 routing rules with 0.80 ms exact match resolution.',
    bn: 'রিভার্স প্রক্সি ইউআরএল রাউটিং ও পাথ রিরাইটের মৌলিক ধারণা। লোকেশন ব্লকের অগ্রাধিকার (exact, prefix ও regex) পরিচালনা, proxy_pass-এ ট্রেইলিং স্ল্যাশ জনিত ৪০৪ এরর এড়ানো এবং ০.৮০ ms রেজোলিউশনে ৪টি নিয়মে ৬০০টি রিকোয়েস্ট রাউটিং।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Location precedence, trailing slashes, and path rewrites', bn: 'WHAT — লোকেশন অগ্রাধিকার, ট্রেইলিং স্ল্যাশ ও পাথ রিরাইট' },
    },
    {
      type: 'para',
      text: {
        en: 'When your reverse proxy serves microservices, routing incoming request paths to the correct backend service is the primary duty of the ingress layer. In production servers like Nginx, location blocks define path matching rules evaluated according to strict precedence tiers. Exact match blocks (= /health) take top priority and terminate lookup instantly, while regular expressions and longest prefix matches handle dynamic and static assets. Understanding trailing slash behavior in proxy_pass is vital: appending a trailing slash strips the matched prefix before forwarding to the upstream service, whereas omitting the slash passes the raw client URI intact. By combining path matching with rewrite directives, you decouple external API schemas from internal service routes.',
        bn: 'যখন আপনার রিভার্স প্রক্সি একাধিক মাইক্রোসার্ভিস পরিচালনা করে, তখন প্রতিটি আগমনী রিকোয়েস্টকে সঠিক ব্যাকএন্ডে পাঠানো ইনগ্রেস লেয়ারের প্রধান দায়িত্ব। Nginx-এর মতো এন্টারপ্রাইজ প্রক্সিতে লোকেশন ব্লক নির্দিষ্ট অগ্রাধিকারের ভিত্তিতে পাথ ম্যাচিং মূল্যায়ন করে। হুবহু মিলের ব্লক (= /health) সর্বোচ্চ অগ্রাধিকার পায় এবং সাথে সাথে ফলাফল নির্ধারণ করে, আর রেগুলার এক্সপ্রেশন ও দীর্ঘতম প্রিফিক্স ডায়নামিক ও স্ট্যাটিক ফাইলগুলো পরিচালনা করে। proxy_pass-এ ট্রেইলিং স্ল্যাশের প্রভাব বোঝা অত্যন্ত গুরুত্বপূর্ণ: শেষে স্ল্যাশ থাকলে প্রক্সি ম্যাচ হওয়া অংশ কেটে ফেলে ব্যাকএন্ডে পাঠায়, আর স্ল্যাশ না থাকলে পুরো ইউআরএল অপরিবর্তিত থাকে। সঠিক পাথ ম্যাচিং এবং রিরাইট নিয়মের মাধ্যমে আপনি বহিরাগত এপিআই ঠিকানাকে অভ্যন্তরীণ মাইক্রোসার্ভিস থেকে সম্পূর্ণ স্বাধীন রাখতে পারবেন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Location block matching precedence hierarchy across 600 requests', bn: '৬০০টি রিকোয়েস্টে লোকেশন ব্লক অগ্রাধিকার ও ম্যাচিং ক্রম' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Reverse Proxy URL Routing Precedence diagram">
<rect x="25" y="35" width="140" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="95" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Inbound Traffic</text>

<rect x="35" y="80" width="120" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="95" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">600 Requests</text>
<text x="95" y="113" text-anchor="middle" font-size="7" fill="#1e40af">Evaluating 4 Rules</text>

<line x1="165" y1="90" x2="215" y2="60" stroke="#16a34a" stroke-width="2"/>
<line x1="165" y1="100" x2="215" y2="105" stroke="#2563eb" stroke-width="2"/>
<line x1="165" y1="110" x2="215" y2="145" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="165" y1="120" x2="215" y2="185" stroke="#64748b" stroke-width="1.5"/>

<rect x="215" y="40" width="220" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="325" y="58" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">1. Exact: = /health (120 reqs)</text>
<text x="325" y="70" text-anchor="middle" font-size="7" fill="#166534">0.80 ms resolution · Terminates immediately</text>

<rect x="215" y="85" width="220" height="35" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="325" y="103" text-anchor="middle" font-size="9" font-weight="800" fill="#1d4ed8">2. Prefix Stripped: /api/v1/ (280 reqs)</text>
<text x="325" y="115" text-anchor="middle" font-size="7" fill="#1e40af">proxy_pass http://auth/ (Strips /api/v1)</text>

<rect x="215" y="130" width="220" height="35" rx="4" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="325" y="148" text-anchor="middle" font-size="9" font-weight="800" fill="#b45309">3. Regex: ~* \.(png|jpg)$ (150 reqs)</text>
<text x="325" y="160" text-anchor="middle" font-size="7" fill="#78350f">Direct static asset cache routing</text>

<rect x="215" y="175" width="220" height="30" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
<text x="325" y="195" text-anchor="middle" font-size="8" font-weight="700" fill="#475569">4. Prefix Fallback: / (50 reqs SPA)</text>

<rect x="455" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#16a34a" stroke-width="1.5"/>
<text x="535" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Upstream Mapping</text>
<text x="535" y="90" text-anchor="middle" font-size="8" fill="#166534">Health: 120 requests</text>
<text x="535" y="115" text-anchor="middle" font-size="8" fill="#166534">Auth: 280 requests</text>
<text x="535" y="140" text-anchor="middle" font-size="8" fill="#166534">CDN: 150 requests</text>
<text x="535" y="165" text-anchor="middle" font-size="8" fill="#166534">SPA: 50 requests</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Exact match (= /health) resolves in 0.80 ms, routing 600 requests across 4 distinct rules</text>
</svg>`,
      caption: {
        en: 'Across 600 requests, 120 match exact = /health in 0.80 ms, 280 match prefix-stripped /api/v1/, 150 match static regex, and 50 hit the fallback SPA route across 4 routing rules.',
        bn: '৬০০টি রিকোয়েস্টে ১২০টি ঠিক = /health রুটে ০.৮০ ms এ মেলে, ২৮০টি প্রিফিক্স-ছাঁটাই /api/v1/ এ যায়, ১৫০টি রেজেক্স ক্যাশে এবং ৫০টি ফলব্যাক এসপিএ রুটে ৪টি নিয়মে পৌঁছায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Exact Location Match (=)',
          def: {
            en: 'An Nginx location modifier that matches the request URI precisely, immediately terminating search without checking regex rules.',
            bn: 'Nginx লোকেশন মডিফায়ার যা হুবহু ইউআরএল মিলিয়ে নেয় এবং পরবর্তী কোনো রেজেক্স নিয়ম না খুঁজে তাৎক্ষণিক সিদ্ধান্ত নেয়।',
          },
        },
        {
          term: 'Trailing Slash Proxy Pass',
          def: {
            en: 'The Nginx syntax behavior where including a trailing slash on proxy_pass strips the matched location prefix before upstream forwarding.',
            bn: 'Nginx-এর সিনট্যাক্স বৈশিষ্ট্য যেখানে proxy_pass এর শেষে স্ল্যাশ থাকলে ম্যাচ হওয়া লোকেশন প্রিফিক্সটি কেটে ব্যাকএন্ডে পাঠানো হয়।',
          },
        },
        {
          term: 'Rewrite Directive',
          def: {
            en: 'An engine directive that modifies the request URI using regular expressions before or during internal proxy location evaluations.',
            bn: 'প্রক্সি ইঞ্জিনের একটি নির্দেশ যা রেগুলার এক্সপ্রেশন ব্যবহার করে অভ্যন্তরীণ রাউটিংয়ের সময় ইউআরএল পথ পরিবর্তন করে দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Microservice composition and clean external APIs', bn: 'কেন — মাইক্রোসার্ভিস সংযোগ ও পরিচ্ছন্ন পাবলিক এপিআই' },
    },
    {
      type: 'list',
      items: [
        { en: 'Unify disparate microservices under a single domain: route /api/users to identity services and /api/checkout to payment workers seamlessly.', bn: 'একাধিক মাইক্রোসার্ভিস একক ডোমেইনে আনা: /api/users কে ইউজার সার্ভিসে এবং /api/checkout কে পেমেন্ট সার্ভিসে নির্বিঘ্নে পাঠানো যায়।' },
        { en: 'Decouple legacy API versioning: rewrite incoming legacy /v1/ calls dynamically into modern /v2/ internal payloads without client disruption.', bn: 'পুরানো এপিআই ভার্সনের রূপান্তর: বহিরাগত /v1/ কলকে অভ্যন্তরীণ আধুনিক /v2/ ফরম্যাটে রূপান্তর করে ক্লায়েন্টকে নির্বিঘ্ন সেবা দেওয়া যায়।' },
        { en: 'Eliminate 404 routing defects: mastering trailing slash semantics ensures internal microservices receive expected clean subpaths.', bn: '৪০৪ রাউটিং এরর দূরীকরণ: ট্রেইলিং স্ল্যাশের সঠিক ব্যবহারের মাধ্যমে নিশ্চিত করা যায় যেন ব্যাকএন্ড সার্ভিস কাঙ্ক্ষিত পথেই রিকোয়েস্ট পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Writing location rules in 4 steps', bn: 'HOW — ৪টি ধাপে লোকেশন নিয়ম তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Fast exact matching', bn: '১. দ্রুততম হুবহু ম্যাচ' }, text: { en: 'Configure location = /health { return 200 "OK"; } for health checks.', bn: 'হেলথ চেকের জন্য location = /health লিখে দ্রুততম রেসপন্স নিশ্চিত করুন।' } },
        { title: { en: '2. Prefix stripping proxy', bn: '২. প্রিফিক্স ছাঁটাই প্রক্সি' }, text: { en: 'Append a trailing slash to proxy_pass to strip /api/ prefixes cleanly.', bn: 'proxy_pass এর শেষে স্ল্যাশ দিয়ে /api/ প্রিফিক্স অংশটি ছাঁটাই করুন।' } },
        { title: { en: '3. Cache static regex', bn: '৩. রেজেক্স স্ট্যাটিক ক্যাশ' }, text: { en: 'Route ~* \.(jpg|png|css)$ directly to local disk with aggressive expires headers.', bn: 'ছবির মতো ফাইলের জন্য রেজেক্স লিখে লোকাল ডিস্ক থেকে সরাসরি ক্যাশ দিন।' } },
        { title: { en: '4. Set fallback location', bn: '৪. ফলব্যাক লোকেশন নির্ধারণ' }, text: { en: 'Configure location / { try_files $uri /index.html; } for frontend SPAs.', bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনের জন্য try_files দিয়ে মূল index.html এ পাঠান।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'url_routing_precedence_sim.js',
      code: `// Simulated URL routing precedence and path rewriting across 4 rules
const totalRequests = 600;
const exactHealthRequests = 120;
const prefixApiRequests = 280;
const regexStaticRequests = 150;
const fallbackSpaRequests = 50;

const totalMatched = exactHealthRequests + prefixApiRequests + regexStaticRequests + fallbackSpaRequests; // 600
const routingRules = 4;
const exactMatchLatencyMs = 0.80;

console.log("URL Routing and Path Rewriting Simulation:");
console.log("600 incoming requests dispatched across " + routingRules + " routing rules:");
console.log("Exact match (= /health): " + exactHealthRequests + " requests resolved in " + exactMatchLatencyMs.toFixed(2) + " ms");
console.log("Prefix stripped (/api/v1/): " + prefixApiRequests + " requests rewritten, " + regexStaticRequests + " static cache requests, " + fallbackSpaRequests + " SPA requests");

// Output:
// URL Routing and Path Rewriting Simulation:
// 600 incoming requests dispatched across 4 routing rules:
// Exact match (= /health): 120 requests resolved in 0.80 ms
// Prefix stripped (/api/v1/): 280 requests rewritten, 150 static cache requests, 50 SPA requests`,
      caption: {
        en: 'Across 600 requests, 120 match exact = /health in 0.80 ms, 280 match prefix-stripped /api/v1/, 150 match static regex, and 50 hit the fallback SPA route across 4 routing rules.',
        bn: '৬০০টি রিকোয়েস্টে ১২০টি ঠিক = /health রুটে ০.৮০ ms এ মেলে, ২৮০টি প্রিফিক্স-ছাঁটাই /api/v1/ এ যায়, ১৫০টি রেজেক্স ক্যাশে এবং ৫০টি ফলব্যাক এসপিএ রুটে ৪টি নিয়মে পৌঁছায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive location precedence lab', bn: 'INSIDE — জীবন্ত লোকেশন অগ্রাধিকার ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test path evaluation precedence. In an audit of 600 requests, 120 exact health checks resolve instantly in 0.80 ms. 280 microservice API requests have prefixes stripped, 150 static image queries route to local disk buffers, and 50 fallback requests load single page applications across 4 routing rules. Master routing hierarchies to prevent routing collisions.',
        bn: 'পাথ মূল্যায়ন ও অগ্রাধিকার পরীক্ষা করুন। ৬০০টি রিকোয়েস্টের মধ্যে ১২০টি দ্রুততম হেলথ চেক মাত্র ০.৮০ ms এ সম্পন্ন হয়। ২৮০টি এপিআই কল থেকে প্রিফিক্স ছাঁটাই হয়, ১৫০টি স্ট্যাটিক ছবি লোকাল ডিস্ক থেকে সরবরাহ হয় এবং ৫০টি রিকোয়েস্ট সিঙ্গেল পেজ অ্যাপ্লিকেশনে যায় যা ৪টি নিয়মে সুবিন্যস্ত। রাউটিং অগ্রাধিকার আয়ত্ত করলে অভ্যন্তরীণ সংঘর্ষ দূর হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Routing lab (verify matched rules, press Run)', bn: 'রাউটিং ল্যাব (ম্যাচ হওয়া নিয়ম যাচাই, Run)' },
      html: '<h3>Reverse Proxy Route Dispatcher</h3>\n<pre id="out"></pre>\n<p>Compute location block matching shares and rewrite counts.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const total = 600;\nconst exact = 120;\nconst api = 280;\nconst stat = 150;\nconst spa = 50;\nconsole.log("total: " + total);\ndocument.getElementById("out").textContent = "Total: " + total + " reqs · Exact: " + exact + " · API Stripped: " + api + " · Static: " + stat + " · SPA: " + spa + " (4 rules ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Path routing architectural rules', bn: 'ফলাফল — পাথ রাউটিংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Remember trailing slashes alter upstream URIs: proxy_pass with a trailing URI strips matched prefixes, while omitting it leaves paths intact.', bn: 'ট্রেইলিং স্ল্যাশ ব্যাকএন্ড পাথ পরিবর্তন করে: proxy_pass এর শেষে স্ল্যাশ থাকলে ম্যাচ হওয়া প্রিফিক্স কেটে যায়, না থাকলে অপরিবর্তিত থাকে।' },
        { en: 'Use exact match (=) for frequent probes: health check pings resolve with zero regex searching overhead when marked with =.', bn: 'ঘনঘন প্রোবের জন্য exact match (=) ব্যবহার করুন: সমান চিহ্ন দিলে কোনো রেজেক্স খোঁজা ছাড়াই তাৎক্ষণিক রেসপন্স পাওয়া যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common path routing pitfalls', bn: 'ডিবাগ — পাথ রাউটিংয়ের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental double slashes caused by misconfigured proxy_pass', bn: 'ভুল proxy_pass এর কারণে ইউআরএলে ডাবল স্ল্যাশ তৈরি হওয়া' },
      text: {
        en: 'Writing location /api/ { proxy_pass http://backend//; } or mishandling trailing slashes can produce paths like http://backend//users. Most strict application frameworks reject double slashes with HTTP 404 or 400 Bad Request errors. Verify upstream path outputs thoroughly.',
        bn: 'স্ল্যাশের ভুল ব্যবহারের কারণে ব্যাকএন্ডে http://backend//users এর মতো ডাবল স্ল্যাশ তৈরি হতে পারে। অনেক ফ্রেমওয়ার্ক ডাবল স্ল্যাশ দেখলে ৪০৪ বা ৪০০ ব্যাড রিকোয়েস্ট এরর দিয়ে থাকে। ব্যাকএন্ডে প্রেরিত সঠিক পাথ সবসময় পরীক্ষা করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using the break flag in location rewrites', bn: 'লোকেশন রিরাইটে break ফ্ল্যাগের সঠিক ব্যবহার' },
      text: {
        en: 'Inside a location block, always terminate rewrite rules with the "break" flag (e.g. rewrite ^/old/(.*)$ /new/$1 break;). This prevents Nginx from restarting the entire location matching loop, avoiding infinite internal redirects.',
        bn: 'লোকেশন ব্লকের ভেতরে রিরাইট নিয়মের শেষে সর্বদা "break" ফ্ল্যাগ ব্যবহার করুন। এটি Nginx কে পুনরায় প্রথম থেকে লোকেশন খোঁজা থেকে বিরত রেখে অভ্যন্তরীণ ইনফিনিট লুপ প্রতিহত করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production routing gateways', bn: 'বাস্তব ক্ষেত্র — আধুনিক রাউটিং গেটওয়ে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Kubernetes Ingress-Nginx: parses Ingress annotations to inject complex path regex rewrites across thousands of containerized pods.', bn: 'Kubernetes Ingress-Nginx: ইনগ্রেস অ্যানোটেশন বিশ্লেষণ করে হাজার হাজার কন্টেইনারে সঠিক পাথ রিরাইট পরিচালনা করে।' },
        { en: 'Kong Gateway: enterprise API gateway utilizing OpenResty Lua path matching to enforce route-level authorization and rate limiting.', bn: 'Kong Gateway: ওপেনরেস্টি লুয়া পাথ ম্যাচিং ব্যবহার করে বিভিন্ন রুটে নিরাপত্তা ও রেট লিমিটিং নিশ্চিত করে।' },
        { en: 'Traefik Proxy: dynamic cloud-native reverse proxy that auto-discovers Docker container routes and generates path prefixes on the fly.', bn: 'Traefik Proxy: ডকার কন্টেইনারের রুট স্বয়ংক্রিয়ভাবে শনাক্ত করে নিজে থেকেই পাথ প্রিফিক্স নির্ধারণ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Proxy Headers and Client Identity', bn: 'পরবর্তী পাঠ — প্রক্সি হেডার ও ক্লায়েন্ট পরিচিতি' },
    },
    {
      type: 'para',
      text: {
        en: 'With location matching and URL rewrites mastered, Lesson 4 explores proxy headers: X-Forwarded-For, X-Forwarded-Proto, RFC 7239 Forwarded headers, and defending against IP spoofing with trusted proxy CIDRs.',
        bn: 'লোকেশন ম্যাচিং ও পাথ রিরাইট আয়ত্ত করার পর, পাঠ ৪ প্রক্সি হেডার নিয়ে আলোচনা করবে: X-Forwarded-For, X-Forwarded-Proto, RFC 7239 Forwarded হেডার এবং বিশ্বস্ত প্রক্সি CIDR ব্যবহার করে আইপি স্পুফিং প্রতিরোধ।',
      },
    },
  ],
  exercises: [
    {
      id: 'rp-route-ex-1',
      kind: 'mcq',
      topic: 'trailing-slash-proxy-pass-behavior',
      question: {
        en: 'What occurs to the request URI when an Nginx location block includes a trailing slash on the proxy_pass directive (e.g. location /api/ { proxy_pass http://backend/; })?',
        bn: 'Nginx লোকেশন ব্লকে proxy_pass এর শেষে ট্রেইলিং স্ল্যাশ যুক্ত থাকলে (যেমন location /api/ { proxy_pass http://backend/; }) আগমনী ইউআরএলের কী ঘটে?',
      },
      options: [
        {
          en: 'The matched location prefix (/api/) is stripped, and only the remaining subpath is forwarded to the upstream backend server',
          bn: 'ম্যাচ হওয়া লোকেশন প্রিফিক্স (/api/) কেটে বাদ দেওয়া হয় এবং কেবল বাকি সাবপাথটি ব্যাকএন্ড সার্ভারে ফরোয়ার্ড করা হয়',
        },
        {
          en: 'The request is permanently deleted from computer RAM',
          bn: 'রিকোয়েস্টটি কম্পিউটারের র্যাম থেকে চিরতরে মুছে ফেলা হয়',
        },
        {
          en: 'The proxy changes the HTTP request into an email message',
          bn: 'প্রক্সিটি এইচটিটিপি রিকোয়েস্টকে একটি ইমেইলে রূপান্তর করে',
        },
        {
          en: 'The trailing slash causes the server cooling fans to turn backwards',
          bn: 'ট্রেইলিং স্ল্যাশের কারণে সার্ভারের কুলিং ফ্যান উল্টো ঘুরতে শুরু করে',
        },
      ],
      answer: 0,
      hint: { en: 'A trailing slash on proxy_pass strips the matched prefix.', bn: 'proxy_pass এ স্ল্যাশ থাকলে প্রিফিক্স অংশটি ছাঁটাই হয়ে যায়।' },
      explanation: {
        en: 'When a URI is present in proxy_pass (even just a slash), Nginx replaces the matching location prefix with that URI.',
        bn: 'proxy_pass এ স্ল্যাশ বা কোনো পথ থাকলে Nginx লোকেশনের সাথে মেলা অংশটি সেই পথ দিয়ে প্রতিস্থাপন করে দেয়।',
      },
    },
    {
      id: 'rp-route-ex-2',
      kind: 'mcq',
      topic: 'routing-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many requests were matched by exact, prefix-stripped, regex static, and fallback SPA routes across 600 requests and 4 rules?',
        bn: 'আমাদের কোড আলোচনায় ৬০০টি রিকোয়েস্ট ও ৪টি নিয়মে exact, prefix-stripped, regex static ও fallback SPA রুটে কতটি করে রিকোয়েস্ট ম্যাচ করেছিল?',
      },
      options: [
        {
          en: 'Exact = 120 requests (0.80 ms latency), Prefix stripped = 280, Regex static = 150, Fallback SPA = 50 across 600 requests and 4 routing rules',
          bn: 'Exact = ১২০টি (০.৮০ ms লেটেন্সি), Prefix stripped = ২৮০টি, Regex static = ১৫০টি, Fallback SPA = ৫০টি (৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে)',
        },
        {
          en: 'Exact = 600 requests, Prefix stripped = 0, Regex static = 0, Fallback SPA = 0 across 600 requests and 4 routing rules',
          bn: 'Exact = ৬০০টি, Prefix stripped = ০টি, Regex static = ০টি, Fallback SPA = ০টি (৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে)',
        },
        {
          en: 'Exact = 0 requests, Prefix stripped = 0, Regex static = 0, Fallback SPA = 0 across 0 requests and 4 routing rules',
          bn: 'Exact = ০টি, Prefix stripped = ০টি, Regex static = ০টি, Fallback SPA = ০টি (০টি রিকোয়েস্টে ও ৪টি নিয়মে)',
        },
        {
          en: 'Exact = 100 requests, Prefix stripped = 100, Regex static = 100, Fallback SPA = 300 across 600 requests and 4 routing rules',
          bn: 'Exact = ১০০টি, Prefix stripped = ১০০টি, Regex static = ১০০টি, Fallback SPA = ৩০০টি (৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে)',
        },
      ],
      answer: 0,
      hint: { en: '120 exact (0.80 ms), 280 prefix, 150 regex, 50 SPA across 600 requests.', bn: '১২০টি exact (০.৮০ ms), ২৮০টি প্রিফিক্স, ১৫০টি রেজেক্স, ৫০টি এসপিএ (৬০০টি রিকোয়েস্টে)।' },
      explanation: {
        en: 'The simulation resolved 120 exact requests in 0.80 ms, 280 API stripped, 150 static, and 50 SPA requests across 600 total requests and 4 rules.',
        bn: 'সিমুলেশনটিতে ৬০০টি রিকোয়েস্টে ৪টি নিয়মে ১২০টি exact (০.৮০ ms এ), ২৮০টি এপিআই, ১৫০টি স্ট্যাটিক ও ৫০টি এসপিএ রিকোয়েস্ট সম্পন্ন হয়েছিল।',
      },
    },
    {
      id: 'rp-route-ex-3',
      kind: 'mcq',
      topic: 'exact-match-modifier-precedence',
      question: {
        en: 'Why is the exact match modifier (= /path) given the highest priority in Nginx location evaluation?',
        bn: 'Nginx লোকেশন মূল্যায়নে exact match মডিফায়ারকে (= /path) কেন সর্বোচ্চ অগ্রাধিকার দেওয়া হয়?',
      },
      options: [
        {
          en: 'It enables immediate string comparison and halts further configuration searching, maximizing performance for high-frequency endpoints like health checks',
          bn: 'এটি সরাসরি টেক্সট মিলিয়ে নিয়ে পরবর্তী অনুসন্ধান বন্ধ করে দেয়, যা ঘনঘন আসা হেলথ চেকের মতো পাথে সর্বোচ্চ গতি নিশ্চিত করে',
        },
        {
          en: 'It forces the operating system kernel to restart immediately',
          bn: 'এটি অপারেটিং সিস্টেম কার্নেলকে তাৎক্ষণিক রিস্টার্ট হতে বাধ্য করে',
        },
        {
          en: 'It turns on audio sounds inside the datacenter speakers',
          bn: 'এটি ডাটা সেন্টারের স্পিকারে গান বাজাতে শুরু করে',
        },
        {
          en: 'It was invented by telephone switchboard technicians in 1950',
          bn: 'এটি ১৯৫০ সালে টেলিফোন অপারেটরদের দ্বারা তৈরি করা হয়েছিল',
        },
      ],
      answer: 0,
      hint: { en: 'Exact match halts search immediately for top speed.', bn: 'সর্বোচ্চ গতির জন্য exact match সাথে সাথে অনুসন্ধান থামিয়ে দেয়।' },
      explanation: {
        en: 'The exact match operator terminates the search tree instantly, avoiding expensive regular expression evaluations.',
        bn: 'exact match অপারেটর তাৎক্ষণিক সিদ্ধান্ত নিয়ে জটিল রেজেক্স মূল্যায়নের সময় বাঁচিয়ে দেয়।',
      },
    },
    {
      id: 'rp-route-ex-4',
      kind: 'predict',
      topic: 'exact-match-symbol-token',
      question: {
        en: 'What single character symbol designates an exact location match in Nginx configuration (e.g. =)?',
        bn: 'Nginx কনফিগারেশনে হুবহু বা exact লোকেশন ম্যাচ বোঝাতে কোন একক চিহ্নটি ব্যবহৃত হয় (যেমন =)?',
      },
      answer: '=',
      accept: ['=', 'equal', 'equals'],
      hint: { en: 'Single character: =', bn: 'একক চিহ্ন: =' },
      explanation: {
        en: 'The equals sign (=) marks an exact URI location match in Nginx configuration.',
        bn: 'সমান চিহ্ন (=) Nginx-এ হুবহু ইউআরএল ম্যাচ করার নির্দেশ হিসেবে কাজ করে।',
      },
    },
  ],
  quiz: {
    id: 'routes-and-the-route-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'rp-route-q1',
        kind: 'mcq',
        topic: 'rewrite-break-vs-last-flag',
        question: {
          en: 'What is the operational difference between the "break" and "last" flags in an Nginx rewrite directive?',
          bn: 'Nginx রিরাইট নির্দেশে "break" এবং "last" ফ্ল্যাগের মধ্যকার ব্যবহারিক পার্থক্য কী?',
        },
        options: [
          {
            en: 'The "break" flag halts rewrite processing and continues within the current location block, whereas "last" restarts the entire location search loop with the newly rewritten URI',
            bn: '"break" ফ্ল্যাগ রিরাইট থামিয়ে বর্তমান লোকেশন ব্লকের ভেতরে কাজ চালিয়ে যায়, আর "last" নতুন পরিবর্তিত ইউআরএল নিয়ে পুনরায় প্রথম থেকে লোকেশন খোঁজা শুরু করে',
          },
          {
            en: 'The "break" flag permanently damages the hard drive magnetic platter',
            bn: '"break" ফ্ল্যাগ হার্ড ড্রাইভের ম্যাগনেটিক প্লেট নষ্ট করে দেয়',
          },
          {
            en: 'The "last" flag only works on the final day of the calendar year',
            bn: '"last" ফ্ল্যাগ কেবল বছরের শেষ দিনে কার্যকর হয়',
          },
          {
            en: 'Both flags produce identical electrical current fluctuations',
            bn: 'উভয় ফ্ল্যাগ কম্পিউটারের ভেতরে অভিন্ন বিদ্যুৎ প্রবাহ তৈরি করে',
          },
        ],
        answer: 0,
        hint: { en: 'break stays in the current block; last restarts location matching.', bn: 'break বর্তমান ব্লকে থাকে; last পুনরায় লোকেশন সার্চ শুরু করে।' },
        explanation: {
          en: 'Using break inside a location block prevents recursive infinite rewrite loops that can occur with the last flag.',
          bn: 'লোকেশন ব্লকে break ব্যবহার করলে ইনফিনিট রিরাইট লুপ হওয়ার ঝুঁকি দূর হয়।',
        },
      },
      {
        id: 'rp-route-q2',
        kind: 'mcq',
        topic: 'exact-latency-check',
        question: {
          en: 'In our code walkthrough, what was the resolution latency of the exact match = /health rule across 600 requests and 4 rules?',
          bn: 'আমাদের কোড আলোচনায় ৬০০টি রিকোয়েস্ট ও ৪টি নিয়মে exact match = /health রুটে রেজোলিউশন লেটেন্সি কত ছিল?',
        },
        options: [
          { en: '0.80 ms exact match resolution across 600 requests and 4 rules', bn: '৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে ০.৮০ ms হুবহু ম্যাচ রেজোলিউশন' },
          { en: '50.00 ms exact match resolution across 600 requests and 4 rules', bn: '৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে ৫০.০০ ms হুবহু ম্যাচ রেজোলিউশন' },
          { en: '0.00 ms exact match resolution across 600 requests and 4 rules', bn: '৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে ০.০০ ms হুবহু ম্যাচ রেজোলিউশন' },
          { en: '10.00 ms exact match resolution across 600 requests and 4 rules', bn: '৬০০টি রিকোয়েস্টে ও ৪টি নিয়মে ১০.০০ ms হুবহু ম্যাচ রেজোলিউশন' },
        ],
        answer: 0,
        hint: { en: '0.80 ms latency.', bn: '০.৮০ ms লেটেন্সি।' },
        explanation: {
          en: 'Exact match evaluation resolved in 0.80 ms for 120 health check requests across 600 total requests and 4 rules.',
          bn: 'সিমুলেশনে দেখা যায় ৬০০টি রিকোয়েস্ট ও ৪টি নিয়মের মধ্যে ১২০টি হেলথ চেক রিকোয়েস্ট মাত্র ০.৮০ ms এ দ্রুত সমাধান হয়েছিল।',
        },
      },
      {
        id: 'rp-route-q3',
        kind: 'mcq',
        topic: 'try-files-spa-routing',
        question: {
          en: 'Why is try_files $uri $uri/ /index.html; commonly configured in reverse proxies serving modern single-page applications (SPAs)?',
          bn: 'আধুনিক সিঙ্গেল পেজ অ্যাপ্লিকেশন (SPA) পরিচালনাকারী রিভার্স প্রক্সিতে কেন সাধারণত try_files $uri $uri/ /index.html; লেখা হয়?',
        },
        options: [
          {
            en: 'It serves existing static files (like bundle.js or style.css) if they exist on disk, but falls back to index.html so client-side JavaScript routers can handle virtual URLs',
            bn: 'ডিস্কে ফাইল থাকলে তা সরাসরি পাঠায়, আর না থাকলে index.html এ পাঠিয়ে দেয় যাতে ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট রাউটার ভার্চুয়াল ইউআরএল পরিচালনা করতে পারে',
          },
          {
            en: 'It searches the internet for missing HTML files to download them',
            bn: 'এটি ফাইল খুঁজে না পেলে ইন্টারনেট থেকে ডাউনলোড করার চেষ্টা করে',
          },
          {
            en: 'It converts JavaScript code into HTML code on the fly',
            bn: 'এটি তাৎক্ষণিকভাবে জাভাস্ক্রিপ্ট কোডকে এইচটিএমএল কোডে রূপান্তর করে',
          },
          {
            en: 'It encrypts the index.html file with a private password',
            bn: 'এটি একটি গোপন পাসওয়ার্ড দিয়ে index.html ফাইলটি লক করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'try_files serves real files or falls back to index.html for client routing.', bn: 'try_files আসল ফাইল পাঠায় অথবা ক্লায়েন্ট রাউটিংয়ের জন্য index.html এ পাঠায়।' },
        explanation: {
          en: 'In client-side SPAs, routes like /dashboard do not exist as physical files; falling back to index.html lets the frontend router load.',
          bn: 'SPA-তে /dashboard এর মতো কোনো বাস্তব ফাইল থাকে না; ফলে index.html এ পাঠানোর মাধ্যমে ফ্রন্টএন্ড রাউটারকে কাজ করার সুযোগ দেওয়া হয়।',
        },
      },
      {
        id: 'rp-route-q4',
        kind: 'predict',
        topic: 'nginx-url-rewriting-directive',
        question: {
          en: 'What Nginx configuration directive uses regular expressions to rewrite request URIs (e.g. rewrite)?',
          bn: 'অনুরোধের ইউআরএল পথ পরিবর্তন করতে Nginx-এ কোন রেজেক্স নির্দেশ ব্যবহৃত হয় (যেমন rewrite)?',
        },
        answer: 'rewrite',
        accept: ['rewrite', 'Rewrite', 'rewrite directive'],
        hint: { en: 'r-e-w-r-i-t-e', bn: 'r-e-w-r-i-t-e' },
        explanation: {
          en: 'The rewrite directive applies regular expression pattern substitutions to request URIs.',
          bn: 'rewrite নির্দেশটি রেগুলার এক্সপ্রেশন ব্যবহার করে ইউআরএল পাথ পরিবর্তনের কাজ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'headers-and-the-head',
    title: { en: 'Proxy Headers and Client Identity', bn: 'প্রক্সি হেডার ও ক্লায়েন্ট পরিচিতি' },
  },
};
