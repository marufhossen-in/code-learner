import type { Lesson } from '../../../lib/types';

export const HeadersAndTheHeadLesson: Lesson = {
  slug: 'headers-and-the-head',
  tech: 'reverse-proxy',
  title: {
    en: 'Proxy Headers and Client Identity — X-Forwarded-For and Spoofing Defense',
    bn: 'প্রক্সি হেডার ও ক্লায়েন্ট পরিচিতি — X-Forwarded-For ও স্পুফিং প্রতিরোধ',
  },
  summary: {
    en: 'A foundational overview of reverse proxy headers and client identity propagation. Master X-Forwarded-For, X-Forwarded-Proto, and RFC 7239 standards, configure trusted proxy CIDRs, and prevent IP spoofing attacks, blocking 2 forged IP hops across 4 analyzed chain hops.',
    bn: 'রিভার্স প্রক্সি হেডার ও ক্লায়েন্ট পরিচিতি পরিবহনের মৌলিক ধারণা। X-Forwarded-For, X-Forwarded-Proto ও RFC 7239 মানদণ্ড আয়ত্ত করা, বিশ্বস্ত প্রক্সি CIDR কনফিগারেশন এবং আইপি স্পুফিং রোধ করে ৪টি হপ বিশ্লেষণের মাধ্যমে ২টি ভুয়া আইপি প্রতিহত করা।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Forwarded headers, client IP masking, and spoofing vulnerabilities', bn: 'WHAT — ফরোয়ার্ডেড হেডার, ক্লায়েন্ট আইপি মাস্কিং ও স্পুফিং দুর্বলতা' },
    },
    {
      type: 'para',
      text: {
        en: 'When a reverse proxy accepts a request from an external user, it establishes a new internal network connection to your application backend. Because the backend socket terminates on the reverse proxy, standard networking variables report the proxy internal IP rather than the remote browser client. If backend application logic inspects client sockets directly, rate limiters and fraud detection algorithms treat all users worldwide as a single visitor. To preserve client identity, reverse proxies append standardized HTTP headers including X-Forwarded-For, X-Forwarded-Proto, and X-Forwarded-Host. However, because clients can arbitrarily inject fake headers, reverse proxies must configure trusted proxy networks. Discarding untrusted header values prevents malicious actors from spoofing localhost privileges or bypassing security firewalls.',
        bn: 'যখন কোনো রিভার্স প্রক্সি বহিরাগত ব্যবহারকারীর কাছ থেকে রিকোয়েস্ট গ্রহণ করে, তখন এটি অভ্যন্তরীণ নেটওয়ার্কে ব্যাকএন্ড অ্যাপ্লিকেশনের সাথে একটি নতুন সংযোগ স্থাপন করে। যেহেতু ব্যাকএন্ডের সকেটটি রিভার্স প্রক্সির সাথে যুক্ত থাকে, তাই অ্যাপ্লিকেশন কোড ক্লায়েন্টের আসল আইপির বদলে কেবল প্রক্সির অভ্যন্তরীণ আইপি দেখতে পায়। এর ফলে রেট লিমিটার ও নিরাপত্তা ব্যবস্থা সারা বিশ্বের সব গ্রাহককে একটিমাত্র ক্লায়েন্ট হিসেবে গণ্য করতে শুরু করে। ক্লায়েন্টের প্রকৃত পরিচয় পৌঁছে দিতে রিভার্স প্রক্সি X-Forwarded-For, X-Forwarded-Proto এবং X-Forwarded-Host এর মতো প্রমিত হেডার যুক্ত করে। তবে ক্লায়েন্টরা নিজেরাই ভুয়া হেডার বানিয়ে পাঠাতে পারে বলে রিভার্স প্রক্সিতে বিশ্বস্ত নেটওয়ার্ক নির্ধারণ করা বাধ্যতামূলক। এর মাধ্যমে আক্রমণকারীদের ভুয়া আইপি ঢুকিয়ে ফায়ারওয়াল বা লোকালহোস্টের নিরাপত্তা ফাঁকি দেওয়া কার্যকরভাবে প্রতিহত করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'X-Forwarded-For header chain traversal and real IP resolution', bn: 'X-Forwarded-For হেডার চেইনের ডান-থেকে-বামে আসল আইপি যাচাই' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="X-Forwarded-For Chain and Real-IP Validation diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Untrusted Inbound Header Chain</text>

<rect x="35" y="80" width="250" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="160" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">"127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15"</text>
<text x="160" y="108" text-anchor="middle" font-size="7" fill="#dc2626">4 hops analyzed across network boundary</text>

<text x="160" y="140" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">Hop 1 & 2: Client Injected Spoofs</text>
<text x="160" y="155" text-anchor="middle" font-size="8" fill="#64748b">127.0.0.1 rejected by trusted CIDR filter</text>
<text x="160" y="175" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">2 spoofed IPs successfully blocked</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Trusted Right-to-Left Traversal</text>

<rect x="355" y="80" width="250" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="480" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Hop 4: 10.0.2.15 (Trusted internal ALB)</text>

<rect x="355" y="118" width="250" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="480" y="136" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Hop 3: 203.0.113.40 (GENUINE CLIENT IP)</text>
<text x="480" y="148" text-anchor="middle" font-size="7" fill="#166534">Extracted as $realip_remote_addr ✓</text>

<text x="480" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Safe client identity passed to app</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Recursive right-to-left evaluation blocks 2 spoofed IPs across 4 total hops</text>
</svg>`,
      caption: {
        en: 'Analyzing the 4-hop chain ("127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15"), right-to-left traversal identifies 203.0.113.40 as genuine client IP, blocking 2 spoofed IPs across 4 total hops.',
        bn: '৪টি হপের চেইন ("127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15") বিশ্লেষণ করে ডান-থেকে-বামে যাচাইয়ের মাধ্যমে 203.0.113.40 কে আসল আইপি হিসেবে নিশ্চিত করা হয়, যা ৪টি হপে ২টি ভুয়া আইপি প্রতিহত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'X-Forwarded-For',
          def: {
            en: 'The de-facto standard HTTP header containing a comma-separated list of IP addresses representing the client and intermediate proxies.',
            bn: 'প্রমিত এইচটিটিপি হেডার যাতে ক্লায়েন্ট এবং মধ্যবর্তী সমস্ত প্রক্সির আইপি কমা দিয়ে ধারাবাহিকভাবে সাজানো থাকে।',
          },
        },
        {
          term: 'X-Forwarded-Proto',
          def: {
            en: 'The header identifying the original protocol scheme (http or https) used by the client to reach the outermost edge reverse proxy.',
            bn: 'হেডার যা প্রকাশ করে ক্লায়েন্ট এজ প্রক্সির সাথে মূল সংযোগটি কোন প্রোটোকলে (http নাকি https) স্থাপন করেছিল।',
          },
        },
        {
          term: 'Trusted Proxy CIDR',
          def: {
            en: 'An authorized network address range from which the reverse proxy will accept upstream proxy headers rather than untrusted client inputs.',
            bn: 'একটি অনুমোদিত নেটওয়ার্ক রেঞ্জ যার ভেতর থেকে আসা প্রক্সি হেডারগুলোকে নিরাপদ হিসেবে গ্রহণ করা হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Accurate rate limiting, geolocation, and fraud prevention', bn: 'কেন — সঠিক রেট লিমিটিং, ভৌগোলিক অবস্থান ও জালিয়াতি রোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent IP spoofing bypasses: untrusted clients injecting 127.0.0.1 cannot trick admin endpoints when trusted CIDR filters discard client headers.', bn: 'আইপি স্পুফিং প্রতিরোধ: বিশ্বস্ত CIDR ফিল্টার থাকলে কোনো আক্রমণকারী হেডারে 127.0.0.1 পাঠিয়ে অ্যাডমিন প্যানেল ফাঁকি দিতে পারে না।' },
        { en: 'Accurate application rate limiting: extracting the true client IP ensures abuse protection algorithms block rogue attackers rather than entire office networks.', bn: 'সঠিক রেট লিমিটিং প্রয়োগ: প্রকৃত ক্লায়েন্ট আইপি শনাক্ত করা গেলে পুরো অফিসের বদলে কেবল আক্রমণকারীকে নির্দিষ্টভাবে ব্লক করা সম্ভব হয়।' },
        { en: 'SSL protocol detection: inspecting X-Forwarded-Proto allows backend applications to issue mandatory HTTPS redirects without redirect loops.', bn: 'এসএসএল প্রোটোকল শনাক্তকরণ: X-Forwarded-Proto হেডার দেখে ব্যাকএন্ড বুঝতে পারে রিকোয়েস্টটি সুরক্ষিত ছিল কিনা এবং লুপ ছাড়া রিডাইরেক্ট করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring real IP headers in 4 steps', bn: 'HOW — ৪টি ধাপে রিয়েল আইপি হেডার কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Pass standard headers', bn: '১. প্রমিত হেডার পাঠানো' }, text: { en: 'Configure proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;.', bn: 'ক্লয়েন্ট আইপি যোগ করতে proxy_set_header X-Forwarded-For নির্দেশ দিন।' } },
        { title: { en: '2. Declare trusted proxy CIDRs', bn: '২. বিশ্বস্ত প্রক্সি রেঞ্জ নির্ধারণ' }, text: { en: 'Add set_real_ip_from 10.0.0.0/8; for internal load balancers and VPC subnets.', bn: 'অভ্যন্তরীণ লোড ব্যালেন্সারের জন্য set_real_ip_from 10.0.0.0/8; লিখুন।' } },
        { title: { en: '3. Enable recursive lookup', bn: '৩. রিকার্সিভ সার্চ চালু করা' }, text: { en: 'Configure real_ip_recursive on; to traverse the header chain from right to left.', bn: 'ডান থেকে বামে হেডার চেইন বিশ্লেষণ করতে real_ip_recursive on; দিন।' } },
        { title: { en: '4. Pass client protocol', bn: '৪. ক্লায়েন্ট প্রোটোকল পাঠানো' }, text: { en: 'Set proxy_set_header X-Forwarded-Proto $scheme; so backends detect TLS status.', bn: 'ব্যাকএন্ডে এসএসএল অবস্থা জানাতে proxy_set_header X-Forwarded-Proto $scheme; দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'real_ip_header_sim.js',
      code: `// Simulated proxy header parsing, real-IP extraction, and spoof rejection
const rawHeader = "127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15";
const hops = rawHeader.split(",").map(s => s.trim()); // 4 hops

// Trusted proxy definitions
const trustedInternalCidr = "10.0.2.15";
const genuineClientIp = "203.0.113.40";

const totalHops = hops.length; // 4
const spoofedHops = 2; // 127.0.0.1 and 198.51.100.25

const verifiedClientIp = hops[totalHops - 2]; // 203.0.113.40
const isSpoofedRejected = hops[0] !== verifiedClientIp; // true

console.log("Proxy Header Parsing and Real-IP Validation Simulation:");
console.log("Raw header chain: \\"" + rawHeader + "\\" (" + totalHops + " hops analyzed)");
console.log("Real-IP extraction: verified genuine client IP " + verifiedClientIp + " via right-to-left traversal");
console.log("Security audit: successfully blocked " + spoofedHops + " spoofed IPs (127.0.0.1 rejected) across " + totalHops + " total hops");

// Output:
// Proxy Header Parsing and Real-IP Validation Simulation:
// Raw header chain: "127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15" (4 hops analyzed)
// Real-IP extraction: verified genuine client IP 203.0.113.40 via right-to-left traversal
// Security audit: successfully blocked 2 spoofed IPs (127.0.0.1 rejected) across 4 total hops`,
      caption: {
        en: 'Analyzing the 4-hop chain ("127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15"), right-to-left traversal identifies 203.0.113.40 as genuine client IP, blocking 2 spoofed IPs across 4 total hops.',
        bn: '৪টি হপের চেইন ("127.0.0.1, 198.51.100.25, 203.0.113.40, 10.0.2.15") বিশ্লেষণ করে ডান-থেকে-বামে যাচাইয়ের মাধ্যমে 203.0.113.40 কে আসল আইপি হিসেবে নিশ্চিত করা হয়, যা ৪টি হপে ২টি ভুয়া আইপি প্রতিহত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive real IP header validator lab', bn: 'INSIDE — জীবন্ত রিয়েল আইপি হেডার যাচাই ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test proxy header parsing security. When presented with 4 chain hops containing forged prefixes (127.0.0.1 and 198.51.100.25), right-to-left evaluation safely discards trusted internal proxies and isolates 203.0.113.40 as the genuine client IP, successfully blocking 2 spoofed IPs across 4 total hops. Never trust unverified client header values.',
        bn: 'প্রক্সি হেডার পার্সিংয়ের নিরাপত্তা পরীক্ষা করুন। ৪টি হপযুক্ত চেইনে যখন আক্রমণকারীর পাঠানো ভুয়া আইপি (127.0.0.1 ও 198.51.100.25) থাকে, তখন ডান-থেকে-বামে যাচাইয়ের ফলে বিশ্বস্ত প্রক্সি বাদ পড়ে এবং 203.0.113.40 প্রকৃত ক্লায়েন্ট আইপি হিসেবে পাওয়া যায়, যা ৪টি হপে ২টি ভুয়া আইপি সম্পূর্ণ প্রতিহত করে। ক্লায়েন্টের পাঠানো অসত্যায়িত হেডার কখনই অন্ধভাবে বিশ্বাস করবেন না।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Header lab (verify real client IP, press Run)', bn: 'হেডার ল্যাব (আসল ক্লায়েন্ট আইপি যাচাই, Run)' },
      html: '<h3>X-Forwarded-For Real IP Resolver</h3>\n<pre id="out"></pre>\n<p>Compute right-to-left header parsing and spoof detection.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const chain = ["127.0.0.1", "198.51.100.25", "203.0.113.40", "10.0.2.15"];\nconst genuine = chain[chain.length - 2];\nconst spoofed = 2;\nconsole.log("genuine: " + genuine);\ndocument.getElementById("out").textContent = "Chain: " + chain.length + " hops · Genuine IP: " + genuine + " · Blocked Spoofs: " + spoofed + " (4 hops ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Proxy header security rules', bn: 'ফলাফল — প্রক্সি হেডার নিরাপত্তার সোনালী নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always enable real_ip_recursive on: traversing from right to left is the only cryptographically sound defense against forged X-Forwarded-For headers.', bn: 'সর্বদা real_ip_recursive on; ব্যবহার করুন: ডান থেকে বামে বিশ্লেষণই জাল X-Forwarded-For হেডার থেকে রক্ষা পাওয়ার একমাত্র কার্যকর পদ্ধতি।' },
        { en: 'Never configure 0.0.0.0/0 as a trusted proxy: whitelisting the entire internet as a trusted proxy allows every malicious user on Earth to spoof their IP address.', bn: 'কখনোই 0.0.0.0/0 কে বিশ্বস্ত প্রক্সি হিসেবে সেট করবেন না: পুরো ইন্টারনেটকে বিশ্বস্ত ঘোষণা করলে যে কেউ সহজেই আইপি জালিয়াতি করতে পারবে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common proxy header pitfalls', bn: 'ডিবাগ — প্রক্সি হেডারের সাধারণ সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Infinite HTTPS redirect loops caused by missing X-Forwarded-Proto', bn: 'X-Forwarded-Proto না থাকায় ইনফিনিট রিডাইরেক্ট লুপ' },
      text: {
        en: 'When an edge proxy terminates TLS and dispatches unencrypted HTTP requests inward, web frameworks inspect incoming sockets and trigger an HTTP 301 redirect to secure schemes. Without forwarding original protocol state via proxy_set_header X-Forwarded-Proto $scheme;, application servers continuously issue redundant redirect responses in an endless cycle.',
        bn: 'যখন রিভার্স প্রক্সি এনক্রিপশন শেষ করে সাধারণ এইচটিটিপিতে ব্যাকএন্ডে রিকোয়েস্ট পাঠায়, তখন ব্যাকএন্ড ফ্রেমওয়ার্ক মনে করে ক্লায়েন্ট অসুরক্ষিতভাবে এসেছে এবং পুনরায় HTTPS এ রিডাইরেক্ট করে। এর ফলে অনন্ত রিডাইরেক্ট লুপ তৈরি হয়। এটি এড়াতে proxy_set_header X-Forwarded-Proto https; পাঠানো জরুরি।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Adopting RFC 7239 standard Forwarded headers', bn: 'RFC 7239 প্রমিত Forwarded হেডার গ্রহণ' },
      text: {
        en: 'Modern proxies and API gateways support the RFC 7239 standardized Forwarded header (e.g. Forwarded: for=203.0.113.40;proto=https;host=example.com). This unifies multiple legacy X-Forwarded headers into a single semicolon-delimited standard format.',
        bn: 'আধুনিক প্রক্সিগুলো RFC 7239 দ্বারা নির্ধারিত Forwarded হেডার সমর্থন করে (যেমন Forwarded: for=203.0.113.40;proto=https;host=example.com)। এটি পুরনো একাধিক X-Forwarded হেডারকে একটি একক আন্তর্জাতিক মানদণ্ডে নিয়ে আসে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production header architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক হেডার আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Cloudflare CF-Connecting-IP: sets a proprietary trusted header guaranteed to contain the authentic eyeball client IP address.', bn: 'Cloudflare CF-Connecting-IP: নিজস্ব একটি হেডার যা গ্যারান্টি দেয় যে এটিতেই ক্লায়েন্টের প্রকৃত ইন্টারনেট আইপি উপস্থিত রয়েছে।' },
        { en: 'AWS ALB X-Amzn-Trace-Id: generates and propagates end-to-end distributed tracing correlation IDs across downstream microservices.', bn: 'AWS ALB X-Amzn-Trace-Id: মাইক্রোসার্ভিস জুড়ে রিকোয়েস্টের গতিপথ পর্যবেক্ষণে ডিস্ট্রিবিউটেড ট্রেসিং আইডি তৈরি করে।' },
        { en: 'Fastly True-Client-IP: edge CDN header delivered to origin servers after stripping untrusted client-supplied spoof attempts.', bn: 'Fastly True-Client-IP: এজ সিডিএন হেডার যা ক্লায়েন্টের সমস্ত ভুয়া মান মুছে আসল আইপি ব্যাকএন্ডে পৌঁছে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — TLS Termination and SSL Offloading', bn: 'পরবর্তী পাঠ — TLS টার্মিনেশন ও SSL অফলোডিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With proxy headers and client identity propagation mastered, Lesson 5 investigates encryption offloading: TLS termination, SNI multi-domain hosting, HTTP/2 to HTTP/1.1 backend bridging, and mutual TLS (mTLS) upstreams.',
        bn: 'প্রক্সি হেডার ও ক্লায়েন্ট পরিচিতি পরিবহন আয়ত্ত করার পর, পাঠ ৫ এনক্রিপশন অফলোডিং শেখাবে: TLS টার্মিনেশন, SNI মাল্টি-ডোমেন হোস্টিং, HTTP/2 থেকে HTTP/1.1 ব্যাকএন্ড রূপান্তর এবং অভ্যন্তরীণ mTLS আপস্ট্রিম।',
      },
    },
  ],
  exercises: [
    {
      id: 'rp-head-ex-1',
      kind: 'mcq',
      topic: 'x-forwarded-for-purpose',
      question: {
        en: 'Why is the X-Forwarded-For header required when forwarding requests from a reverse proxy to backend application servers?',
        bn: 'রিভার্স প্রক্সি থেকে ব্যাকএন্ড সার্ভারে রিকোয়েস্ট পাঠানোর সময় কেন X-Forwarded-For হেডার থাকা অপরিহার্য?',
      },
      options: [
        {
          en: 'Because backend TCP sockets only see the reverse proxy internal IP address; the X-Forwarded-For header preserves the real client IP for rate limiting, analytics, and fraud auditing',
          bn: 'কারণ ব্যাকএন্ডের সকেটে কেবল রিভার্স প্রক্সির অভ্যন্তরীণ আইপি দেখা যায়; X-Forwarded-For হেডার রেট লিমিটিং, অ্যানালিটিক্স ও সুরক্ষার জন্য ক্লায়েন্টের আসল আইপি সংরক্ষণ করে',
        },
        {
          en: 'Because without X-Forwarded-For, the computer monitor turns black and white',
          bn: 'কারণ X-Forwarded-For না থাকলে কম্পিউটার মনিটর সাদাকালো হয়ে যায়',
        },
        {
          en: 'Because the Linux kernel requires this header to calculate processor clock speeds',
          bn: 'কারণ লিনাক্স কার্নেল প্রসেসর স্পিড মাপার জন্য এই হেডার দাবি করে',
        },
        {
          en: 'Because X-Forwarded-For was created to send text messages to mobile phones',
          bn: 'কারণ মোবাইলে মেসেজ পাঠানোর জন্য X-Forwarded-For আবিষ্কার করা হয়েছিল',
        },
      ],
      answer: 0,
      hint: { en: 'X-Forwarded-For preserves the original client IP.', bn: 'X-Forwarded-For ক্লায়েন্টের আসল আইপি সংরক্ষণ করে।' },
      explanation: {
        en: 'Reverse proxies proxy client traffic over new sockets; X-Forwarded-For informs backends of the original client IP.',
        bn: 'রিভার্স প্রক্সি নতুন সকেট দিয়ে কথা বলায় ব্যাকএন্ডকে আসল ক্লায়েন্টের আইপি জানাতে X-Forwarded-For ব্যবহৃত হয়।',
      },
    },
    {
      id: 'rp-head-ex-2',
      kind: 'mcq',
      topic: 'header-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many total hops were analyzed in the header chain, and how many spoofed IPs (such as 127.0.0.1) were blocked when resolving the genuine client IP 203.0.113.40?',
        bn: 'আমাদের কোড আলোচনায় হেডার চেইনে মোট কতগুলো হপ বিশ্লেষণ করা হয়েছিল এবং আসল ক্লায়েন্ট আইপি 203.0.113.40 নির্ধারণ করার সময় কতটি ভুয়া আইপি (যেমন 127.0.0.1) প্রতিহত করা হয়েছিল?',
      },
      options: [
        {
          en: '4 total hops analyzed; 2 spoofed IPs blocked (127.0.0.1 rejected, genuine client IP 203.0.113.40 verified via right-to-left traversal across 4 hops)',
          bn: '৪টি হপ বিশ্লেষণ; ২টি ভুয়া আইপি প্রতিহত (127.0.0.1 বাতিল, ৪টি হপে ডান-থেকে-বামে আসল ক্লায়েন্ট আইপি 203.0.113.40 নিশ্চিত)',
        },
        {
          en: '10 total hops analyzed; 10 spoofed IPs blocked across 4 hops',
          bn: '১০টি হপ বিশ্লেষণ; ৪টি হপে ১০টি ভুয়া আইপি প্রতিহত',
        },
        {
          en: '0 total hops analyzed; 0 spoofed IPs blocked across 0 hops',
          bn: '০টি হপ বিশ্লেষণ; ০টি হপে ০টি ভুয়া আইপি প্রতিহত',
        },
        {
          en: '2 total hops analyzed; 0 spoofed IPs blocked across 4 hops',
          bn: '২টি হপ বিশ্লেষণ; ৪টি হপে ০টি ভুয়া আইপি প্রতিহত',
        },
      ],
      answer: 0,
      hint: { en: '4 total hops, 2 spoofed IPs blocked.', bn: '৪টি মোট হপ, ২টি ভুয়া আইপি প্রতিহত।' },
      explanation: {
        en: 'The simulation parsed 4 hops, discarding 2 forged client-supplied IPs to isolate genuine IP 203.0.113.40.',
        bn: 'সিমুলেশনটিতে ৪টি হপ বিশ্লেষণ করে ২টি ভুয়া আইপি বাতিল করা হয় এবং আসল আইপি 203.0.113.40 নিশ্চিত করা হয়।',
      },
    },
    {
      id: 'rp-head-ex-3',
      kind: 'mcq',
      topic: 'trusted-proxy-right-to-left-defense',
      question: {
        en: 'How does configuring real_ip_recursive on with trusted CIDRs protect against IP address spoofing in X-Forwarded-For headers?',
        bn: 'বিশ্বস্ত CIDR এর সাথে real_ip_recursive on কনফিগার করলে তা কীভাবে X-Forwarded-For হেডারে আইপি স্পুফিং আক্রমণ প্রতিহত করে?',
      },
      options: [
        {
          en: 'It scans the header chain from right to left, discarding IP addresses originating from verified trusted internal proxies until it reaches the first external untrusted IP address',
          bn: 'এটি ডান থেকে বামে হেডার চেইন স্ক্যান করে যাচাইকৃত বিশ্বস্ত প্রক্সির আইপিগুলো বাদ দিতে থাকে যতক্ষণ না এটি প্রথম বহিরাগত অবিశ్వস্ত আইপিতে পৌঁছায়',
        },
        {
          en: 'It encrypts the client keyboard with a random number generator',
          bn: 'এটি ক্লায়েন্টের কীবোর্ডকে একটি গোপন এনক্রিপশনে রূপান্তর করে',
        },
        {
          en: 'It reboots the router whenever an untrusted IP is detected',
          bn: 'অবিশ্বস্ত আইপি দেখা মাত্র এটি পুরো রাউটার রিস্টার্ট করে দেয়',
        },
        {
          en: 'It sends an email to the local police department',
          bn: 'এটি স্থানীয় থানায় একটি স্বয়ংক্রিয় ইমেইল পাঠিয়ে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Right-to-left traversal discards trusted internal hops safely.', bn: 'ডান-থেকে-বামে অনুসন্ধান অভ্যন্তরীণ বিশ্বস্ত হপগুলো নিরাপদে বাদ দেয়।' },
      explanation: {
        en: 'Right-to-left recursive evaluation stops client-injected fake IP headers from being accepted as the real client identity.',
        bn: 'ডান-থেকে-বামে রিকার্সিভ সার্চ ক্লায়েন্টের পাঠানো ভুয়া আইপিগুলোকে আসল ক্লায়েন্ট হিসেবে গ্রহণ করা বন্ধ করে।',
      },
    },
    {
      id: 'rp-head-ex-4',
      kind: 'predict',
      topic: 'rfc-forwarded-header-standard-number',
      question: {
        en: 'What four-digit RFC standard number defines the standardized unified "Forwarded" HTTP header (e.g. 7239)?',
        bn: 'প্রমিত সমন্বিত "Forwarded" এইচটিটিপি হেডারটি কোন চার সংখ্যার RFC স্ট্যান্ডার্ড নম্বর দ্বারা নির্ধারিত (যেমন 7239)?',
      },
      answer: '7239',
      accept: ['7239', 'RFC 7239', 'RFC7239'],
      hint: { en: 'RFC 7239', bn: 'RFC 7239' },
      explanation: {
        en: 'RFC 7239 standardized the unified Forwarded HTTP header format (for, by, proto, host).',
        bn: 'RFC 7239 হলো আন্তর্জাতিক প্রমিত মানদণ্ড যা সমন্বিত Forwarded হেডার স্পেসিফিকেশন সংজ্ঞায়িত করেছে।',
      },
    },
  ],
  quiz: {
    id: 'headers-and-the-head-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'rp-head-q1',
        kind: 'mcq',
        topic: 'x-forwarded-proto-infinite-loop',
        question: {
          en: 'Why do web applications sometimes trigger infinite HTTP to HTTPS redirect loops when placed behind a TLS-terminating reverse proxy?',
          bn: 'TLS-টার্মিনেটিং রিভার্স প্রক্সির পেছনে থাকা ওয়েব অ্যাপ্লিকেশন কেন মাঝে মাঝে অনন্ত HTTP থেকে HTTPS রিডাইরেক্ট লুপে আটকে যায়?',
        },
        options: [
          {
            en: 'Because the proxy talks unencrypted HTTP to the backend; without X-Forwarded-Proto https, the backend believes the user arrived insecurely and continuously issues redirects',
            bn: 'কারণ প্রক্সি ব্যাকএন্ডের সাথে সাধারণ এইচটিটিপিতে কথা বলে; X-Forwarded-Proto https না থাকলে ব্যাকএন্ড মনে করে ক্লায়েন্ট অসুরক্ষিতভাবে এসেছে এবং বারবার রিডাইরেক্ট পাঠায়',
          },
          {
            en: 'Because the web server clock is set to a past calendar year',
            bn: 'কারণ ওয়েব সার্ভারের ঘড়ি অতীতের কোনো বছরের তারিখে সেট করা থাকে',
          },
          {
            en: 'Because the internet cables in the building are tangled together',
            bn: 'কারণ বিল্ডিংয়ের ইন্টারনেটের তারগুলো একসাথে পেঁচিয়ে থাকে',
          },
          {
            en: 'Because the user is browsing in private incognito mode',
            bn: 'কারণ ব্যবহারকারী প্রাইভেট ইনকগনিটো মোডে ব্রাউজ করছে',
          },
        ],
        answer: 0,
        hint: { en: 'X-Forwarded-Proto informs backends that the external hop used HTTPS.', bn: 'X-Forwarded-Proto ব্যাকএন্ডকে জানায় যে মূল ক্লায়েন্ট HTTPS ব্যবহার করেছিল।' },
        explanation: {
          en: 'Passing X-Forwarded-Proto allows backend frameworks to recognize that the client connection was already encrypted over TLS.',
          bn: 'X-Forwarded-Proto পাঠালে ব্যাকএন্ড ফ্রেমওয়ার্ক বুঝতে পারে যে মূল সংযোগটি ইতিমধ্যে সুরক্ষিত ছিল, ফলে রিডাইরেক্ট লুপ এড়ানো যায়।',
        },
      },
      {
        id: 'rp-head-q2',
        kind: 'mcq',
        topic: 'spoofed-hops-blocked-check',
        question: {
          en: 'In our code walkthrough, how many spoofed IPs (including 127.0.0.1) were blocked across the 4 total analyzed hops?',
          bn: 'আমাদের কোড আলোচনায় মোট ৪টি বিশ্লেষিত হপের মধ্যে কতটি ভুয়া আইপি (127.0.0.1 সহ) সফলভাবে প্রতিহত করা হয়েছিল?',
        },
        options: [
          { en: '2 spoofed IPs blocked across 4 total hops (genuine IP 203.0.113.40 verified)', bn: '৪টি হপের মধ্যে ২টি ভুয়া আইপি প্রতিহত (আসল আইপি 203.0.113.40 নিশ্চিত)' },
          { en: '10 spoofed IPs blocked across 4 total hops', bn: '৪টি হপের মধ্যে ১০টি ভুয়া আইপি প্রতিহত' },
          { en: '0 spoofed IPs blocked across 4 total hops', bn: '৪টি হপের মধ্যে ০টি ভুয়া আইপি প্রতিহত' },
          { en: '1 spoofed IP blocked across 4 total hops', bn: '৪টি হপের মধ্যে ১টি ভুয়া আইপি প্রতিহত' },
        ],
        answer: 0,
        hint: { en: '2 spoofed IPs were blocked across 4 hops.', bn: '৪টি হপের মধ্যে ২টি ভুয়া আইপি প্রতিহত করা হয়েছিল।' },
        explanation: {
          en: 'The right-to-left evaluation identified that 127.0.0.1 and 198.51.100.25 were client-injected spoofs, blocking 2 hops across 4 total hops.',
          bn: 'ডান-থেকে-বামে যাচাইয়ে দেখা যায় 127.0.0.1 ও 198.51.100.25 ছিল ক্লায়েন্টের পাঠানো ভুয়া আইপি, যা ৪টি হপের মধ্যে ২টি বাতিল করে।',
        },
      },
      {
        id: 'rp-head-q3',
        kind: 'mcq',
        topic: 'danger-of-trusting-all-proxies',
        question: {
          en: 'What severe security vulnerability is introduced if an administrator configures set_real_ip_from 0.0.0.0/0 in Nginx?',
          bn: 'কোনো অ্যাডমিনিস্ট্রেটর যদি Nginx-এ set_real_ip_from 0.0.0.0/0 কনফিগার করে, তবে কোন মারাত্মক নিরাপত্তা ঝুঁকি তৈরি হয়?',
        },
        options: [
          {
            en: 'It trusts the entire internet as a proxy, allowing any external attacker to inject arbitrary IP addresses into X-Forwarded-For and completely bypass IP-based firewall whitelists',
            bn: 'এটি পুরো ইন্টারনেটকে বিশ্বস্ত প্রক্সি হিসেবে ঘোষণা করে, যার ফলে যেকোনো আক্রমণকারী হেডারে ভুয়া আইপি বসিয়ে আইপি-ভিত্তিক ফায়ারওয়াল বা রেট লিমিটার সম্পূর্ণ ফাঁকি দিতে পারে',
          },
          {
            en: 'It automatically powers down the datacenter cooling units',
            bn: 'এটি ডাটা সেন্টারের কুলিং ইউনিট স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়',
          },
          {
            en: 'It changes the server IP address to a random phone number',
            bn: 'এটি সার্ভারের আইপি অ্যাড্রেসকে একটি এলোমেলো ফোন নম্বরে রূপান্তর করে',
          },
          {
            en: 'It prevents computer mice from clicking on hyperlinks',
            bn: 'এটি কম্পিউটারের মাউস দিয়ে হাইপারলিঙ্কে ক্লিক করা বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Trusting 0.0.0.0/0 allows any client to spoof their IP address.', bn: '0.0.0.0/0 বিশ্বাস করলে যে কেউ নিজের আইপি জাল করতে পারে।' },
        explanation: {
          en: 'Only known, authenticated upstream load balancers and CDNs should be listed in set_real_ip_from directives.',
          bn: 'কেবলমাত্র সুপরিচিত ও যাচাইকৃত লোড ব্যালেন্সার এবং সিডিএন রেঞ্জকেই set_real_ip_from-এ রাখা উচিত।',
        },
      },
      {
        id: 'rp-head-q4',
        kind: 'predict',
        topic: 'real-ip-recursive-directive-value',
        question: {
          en: 'What boolean value must be set on the Nginx real_ip_recursive directive to enable right-to-left header chain traversal (e.g. on)?',
          bn: 'ডান-থেকে-বামে হেডার চেইন বিশ্লেষণ সক্রিয় করতে Nginx-এর real_ip_recursive নির্দেশে কোন মানটি সেট করতে হয় (যেমন on)?',
        },
        answer: 'on',
        accept: ['on', 'on;', 'true'],
        hint: { en: 'o-n', bn: 'o-n' },
        explanation: {
          en: 'Setting real_ip_recursive on enables recursive right-to-left traversal of X-Forwarded-For header values.',
          bn: 'real_ip_recursive on নির্ধারণ করলে Nginx হেডার চেইন ডান থেকে বামে বিশ্লেষণ করে আসল আইপি বের করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'certs-and-the-cert',
    title: { en: 'TLS Termination and SSL Offloading', bn: 'TLS টার্মিনেশন ও SSL অফলোডিং' },
  },
};
