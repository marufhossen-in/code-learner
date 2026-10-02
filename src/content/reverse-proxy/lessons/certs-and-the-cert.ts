import type { Lesson } from '../../../lib/types';

export const CertsAndTheCertLesson: Lesson = {
  slug: 'certs-and-the-cert',
  tech: 'reverse-proxy',
  title: {
    en: 'TLS Termination — SSL Offloading, SNI, and Handshake Acceleration',
    bn: 'TLS টার্মিনেশন — SSL অফলোডিং, SNI ও হ্যান্ডশেক গতিবৃদ্ধি',
  },
  summary: {
    en: 'A foundational overview of TLS termination and SSL offloading in reverse proxies. Understand asymmetric crypto handshakes, configure Server Name Indication (SNI) certificates, accelerate connections by 70 ms with TLS 1.3 (50 ms vs 120 ms), and achieve 85.00% session resumption across 2 supported TLS protocols.',
    bn: 'রিভার্স প্রক্সিতে TLS টার্মিনেশন ও SSL অফলোডিংয়ের মৌলিক ধারণা। ক্রিপ্টোগ্রাফিক হ্যান্ডশেক পরিচালনা, SNI সার্টিফিকেট কনফিগারেশন, TLS 1.3 এর মাধ্যমে ৭০ ms দ্রুত সংযোগ স্থাপন (১২০ ms এর বদলে ৫০ ms) এবং ২টি সমর্থিত প্রোটোকলে ৮৫.০০% সেশন রিজিউম নিশ্চিতকরণ।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — SSL offloading, asymmetric cryptography, and SNI routing', bn: 'WHAT — SSL অফলোডিং, ক্রিপ্টোগ্রাফি ও SNI রাউটিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When your websites serve encrypted HTTPS traffic, negotiating cryptographic parameters on every new visitor connection imposes heavy computational burdens. Performing RSA (Rivest–Shamir–Adleman) and elliptic-curve Diffie-Hellman asymmetric key exchanges consumes massive CPU cycles. In modern cloud architecture, reverse proxies execute TLS termination at the edge of the network. The proxy terminates client encryption on port 443, authenticates domain identity via public X.509 certificates, and decrypts incoming payloads. The proxy then forwards clean unencrypted traffic to backend application workers across secure private subnets. Additionally, Server Name Indication (SNI) enables the reverse proxy to host hundreds of distinct domains on a single public IP address, routing incoming handshakes to their matching SSL certificates dynamically.',
        bn: 'যখন আপনার ওয়েবসাইট সুরক্ষিত HTTPS ট্রাফিক পরিচালনা করে, তখন প্রতিটি নতুন সংযোগে ক্রিপ্টোগ্রাফিক প্যারামিটার নির্ধারণ প্রসেসরের উপর বিপুল চাপ ফেলে। RSA এবং এলিপ্টিক-কার্ভ কি এক্সচেঞ্জের মতো জটিল গাণিতিক হিসাব অ্যাপ্লিকেশনের মূল্যবান ক্ষমতা নষ্ট করে। আধুনিক ক্লাউড সিস্টেমে রিভার্স প্রক্সি নেটওয়ার্কের প্রবেশদ্বারে TLS টার্মিনেশন সম্পন্ন করে। প্রক্সি ৪৪৩ পোর্টে ক্লায়েন্টের এনক্রিপশন শেষ করে, পাবলিক সার্টিফিকেট দিয়ে ডোমেইনের পরিচয় নিশ্চিত করে এবং ডেটা ডিক্রিপ্ট করে। এরপর প্রক্সি সম্পূর্ণ প্লেইনটেক্সট বা হালকা এনক্রিপশনে অভ্যন্তরীণ সুরক্ষিত নেটওয়ার্কে ব্যাকএন্ড সার্ভারে ডেটা পাঠায়। এছাড়াও Server Name Indication (SNI) এর সাহায্যে একটিমাত্র পাবলিক আইপিতে শত শত ভিন্ন ডোমেইনের জন্য আলাদা আলাদা এসএসএল সার্টিফিকেট পরিচালনা করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'TLS termination edge offloading and 70 ms handshake acceleration', bn: 'TLS টার্মিনেশন এজ অফলোডিং ও ৭০ ms হ্যান্ডশেক গতিবৃদ্ধি' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Reverse Proxy TLS Termination diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Public Client (Port 443)</text>

<rect x="35" y="80" width="140" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">TLS 1.3: 50 ms (1-RTT)</text>
<text x="105" y="113" text-anchor="middle" font-size="7" fill="#dc2626">TLS 1.2: 120 ms (2-RTT)</text>

<text x="105" y="150" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">+70 ms saved on TLS 1.3</text>
<text x="105" y="170" text-anchor="middle" font-size="7" fill="#64748b">85.00% session cache hit</text>

<line x1="185" y1="100" x2="235" y2="100" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,96 245,100 235,104" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Reverse Proxy (Edge)</text>

<rect x="255" y="80" width="160" height="45" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="98" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">TLS Terminated & Decrypted</text>
<text x="335" y="113" text-anchor="middle" font-size="7" fill="#1e40af">SNI Multi-Domain Router</text>

<text x="335" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Asymmetric Crypto Absorbed</text>
<text x="335" y="175" text-anchor="middle" font-size="7" fill="#166534">0.00% app crypto load</text>

<line x1="425" y1="100" x2="475" y2="100" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,96 485,100 475,104" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Origin App Server</text>

<rect x="485" y="80" width="120" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Pure Business Logic</text>
<text x="545" y="113" text-anchor="middle" font-size="7" fill="#166534">5x throughput capacity</text>

<text x="545" y="160" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Fast Local Subnet</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">TLS termination offloads crypto to 0.00% on backends while TLS 1.3 cuts 70 ms latency</text>
</svg>`,
      caption: {
        en: 'TLS 1.3 completes in 50 ms versus 120 ms for TLS 1.2, saving +70 ms per handshake. Edge termination drops origin crypto overhead from 80.00% to 0.00% (5x capacity boost), with 85.00% session cache hits across 2 supported protocols.',
        bn: 'TLS 1.3 মাত্র ৫০ ms এ সম্পন্ন হয়ে TLS 1.2 এর ১২০ ms এর তুলনায় প্রতি হ্যান্ডশেকে +৭০ ms বাঁচায়। এজ টার্মিনেশন ব্যাকএন্ড ক্রিপ্টো খরচ ৮০.০০% থেকে ০.০০% এ নামিয়ে ৫ গুণ ক্ষমতা বাড়ায় এবং ২টি প্রোটোকলে ৮৫.০০% সেশন ক্যাশ হিট নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'TLS Termination',
          def: {
            en: 'The security practice of decrypting encrypted incoming TLS traffic at the reverse proxy layer before dispatching requests to internal backend servers.',
            bn: 'অভ্যন্তরীণ ব্যাকএন্ড সার্ভারে পাঠানোর পূর্বে রিভার্স প্রক্সি লেয়ারেই এনক্রিপ্ট করা ট্রাফিক ডিক্রিপ্ট সম্পন্ন করার কৌশল।',
          },
        },
        {
          term: 'Server Name Indication (SNI)',
          def: {
            en: 'A TLS protocol extension whereby the client indicates which hostname it is attempting to connect to at the start of the handshake.',
            bn: 'TLS প্রোটোকলের একটি বর্ধিতাংশ যার মাধ্যমে ক্লায়েন্ট হ্যান্ডশেকের শুরুতেই জানিয়ে দেয় সে কোন নির্দিষ্ট ডোমেইনে প্রবেশ করতে চায়।',
          },
        },
        {
          term: 'Mutual TLS (mTLS)',
          def: {
            en: 'A security mechanism where both the client and server exchange and verify each other X.509 digital certificates to establish zero-trust mutual authentication.',
            bn: 'একটি নিরাপত্তা ব্যবস্থা যেখানে উভয় পক্ষই একে অপরের ডিজিটাল সার্টিফিকেট যাচাই করে পারস্পরিক বিশ্বস্ততা প্রতিষ্ঠা করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Freeing application CPU and simplifying certificate management', bn: 'কেন — প্রসেসর মুক্ত রাখা ও সার্টিফিকেট ব্যবস্থাপনা সহজীকরণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Free application CPU for business transactions: offloading asymmetric handshakes drops worker crypto usage from 80.00% to 0.00%, multiplying request throughput by 5x.', bn: 'অ্যাপ্লিকেশনের ক্ষমতা মুক্ত রাখা: ক্রিপ্টোগ্রাফির ভার সরিয়ে নিলে ব্যাকএন্ডের খরচ ৮০.০০% থেকে ০.০০% এ নেমে আসে এবং সার্ভারের থ্রুপুট ৫ গুণ বেড়ে যায়।' },
        { en: 'Centralized certificate renewal: managing automated Let Encrypt certificates on a single proxy eliminates certificate management across hundreds of container pods.', bn: 'সহজ সার্টিফিকেট নবায়ন: শত শত সার্ভারে আলাদা সার্টিফিকেটের ঝামেলা দূর করে একটি কেন্দ্রীয় প্রক্সিতে স্বয়ংক্রিয় সার্টিফিকেট নবায়ন করা যায়।' },
        { en: 'Accelerate mobile connection speed: enabling TLS 1.3 cuts connection latency by 70 ms, delivering faster initial page loads to smartphone users.', bn: 'মোবাইল ব্যবহারকারীদের গতি বৃদ্ধি: আধুনিক TLS 1.3 সক্রিয় রাখলে হ্যান্ডশেক লেটেন্সি ৭০ ms কমে গিয়ে তাৎক্ষণিক ওয়েব পেজ লোড হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring TLS termination in 4 steps', bn: 'HOW — ৪টি ধাপে TLS টার্মিনেশন কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Bind port 443 ssl', bn: '১. ৪৪৩ ssl পোর্টে লিসেন করা' }, text: { en: 'Configure listen 443 ssl http2; inside the server configuration block.', bn: 'সার্ভার ব্লকে listen 443 ssl http2; লিখে সুরক্ষিত পোর্ট কার্যকর করুন।' } },
        { title: { en: '2. Provide certificate paths', bn: '২. সার্টিফিকেট ফাইল সংযুক্ত করা' }, text: { en: 'Declare ssl_certificate and ssl_certificate_key file locations on disk.', bn: 'পাবলিক সার্টিফিকেট ও প্রাইভেট কি ফাইলের সঠিক লোকেশন নির্দেশ করুন।' } },
        { title: { en: '3. Enforce modern ciphers', bn: '৩. আধুনিক প্রোটোকল নিশ্চিতকরণ' }, text: { en: 'Set ssl_protocols TLSv1.2 TLSv1.3; to block obsolete, insecure SSL versions.', bn: 'পুরনো ঝুঁকিপূর্ণ সংস্করণ বাদ দিয়ে কেবল TLS 1.2 ও TLS 1.3 অনুমতি দিন।' } },
        { title: { en: '4. Enable SSL session cache', bn: '৪. সেশন ক্যাশিং চালু করা' }, text: { en: 'Configure ssl_session_cache shared:SSL:10m; for fast 0-RTT session resumption.', bn: 'পুনরায় আসা ভিজিটরদের দ্রুত সংযুক্ত করতে ১০ মেগাবাইট সেশন ক্যাশ সেট করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'tls_offload_benchmark_sim.js',
      code: `// Simulated TLS termination, handshake acceleration, and crypto offload
const handshakesPerSec = 1000;
const tls12LatencyMs = 120;
const tls13LatencyMs = 50;
const latencySavedMs = tls12LatencyMs - tls13LatencyMs; // 70 ms

const directAppCryptoCpuPct = 80.00;
const offloadedAppCryptoCpuPct = 0.00;
const appThroughputMultiplier = 5;

const sessionResumptionRatePct = 85.00;
const protocolsSupported = 2; // TLS 1.2 and TLS 1.3

console.log("TLS Termination and Crypto Offload Simulation:");
console.log("Handshake benchmark: TLS 1.3 resolves in " + tls13LatencyMs + " ms vs TLS 1.2 in " + tls12LatencyMs + " ms (+" + latencySavedMs + " ms saved per handshake)");
console.log("Application CPU offload: crypto overhead dropped from " + directAppCryptoCpuPct.toFixed(2) + "% to " + offloadedAppCryptoCpuPct.toFixed(2) + "% (" + appThroughputMultiplier + "x throughput capacity)");
console.log("Session cache: " + sessionResumptionRatePct.toFixed(2) + "% resumption rate across " + protocolsSupported + " supported TLS protocols");

// Output:
// TLS Termination and Crypto Offload Simulation:
// Handshake benchmark: TLS 1.3 resolves in 50 ms vs TLS 1.2 in 120 ms (+70 ms saved per handshake)
// Application CPU offload: crypto overhead dropped from 80.00% to 0.00% (5x throughput capacity)
// Session cache: 85.00% resumption rate across 2 supported TLS protocols`,
      caption: {
        en: 'TLS 1.3 completes in 50 ms versus 120 ms for TLS 1.2, saving +70 ms per handshake. Edge termination drops origin crypto overhead from 80.00% to 0.00% (5x capacity boost), with 85.00% session cache hits across 2 supported protocols.',
        bn: 'TLS 1.3 মাত্র ৫০ ms এ সম্পন্ন হয়ে TLS 1.2 এর ১২০ ms এর তুলনায় প্রতি হ্যান্ডশেকে +৭০ ms বাঁচায়। এজ টার্মিনেশন ব্যাকএন্ড ক্রিপ্টো খরচ ৮০.০০% থেকে ০.০০% এ নামিয়ে ৫ গুণ ক্ষমতা বাড়ায় এবং ২টি প্রোটোকলে ৮৫.০০% সেশন ক্যাশ হিট নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive TLS handshake and crypto offload lab', bn: 'INSIDE — জীবন্ত TLS হ্যান্ডশেক ও অফলোড ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test TLS handshake acceleration and processor relief. Upgrading from TLS 1.2 (120 ms) to TLS 1.3 (50 ms) saves 70 ms of latency per visitor handshake. Meanwhile, terminating cryptography at the edge reduces application server crypto burden from 80.00% down to 0.00%, unlocking a 5x boost in business logic throughput while maintaining an 85.00% session cache hit rate across 2 supported protocols.',
        bn: 'TLS হ্যান্ডশেক ত্বরণ ও প্রসেসরের কাজের চাপ পরীক্ষা করুন। TLS 1.2 (১২০ ms) থেকে আধুনিক TLS 1.3 (৫০ ms) এ উন্নীত করলে প্রতি হ্যান্ডশেকে ৭০ ms সময় সাশ্রয় হয়। অন্যদিকে এজে ক্রিপ্টোগ্রাফি সমাপ্ত করায় ব্যাকএন্ডের অপ্রয়োজনীয় চাপ ৮০.০০% থেকে ০.০০% এ নেমে ৫ গুণ অতিরিক্ত গতি দেয় এবং ২টি সমর্থিত প্রোটোকলে ৮৫.০০% সেশন ক্যাশ হিট বজায় রাখে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'TLS lab (verify handshake speedup, press Run)', bn: 'TLS ল্যাব (হ্যান্ডশেক গতিবৃদ্ধি যাচাই, Run)' },
      html: '<h3>TLS Handshake & Offload Calculator</h3>\n<pre id="out"></pre>\n<p>Compute handshake round-trip savings and crypto offload gains.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const t12 = 120;\nconst t13 = 50;\nconst saved = t12 - t13;\nconst boost = 5;\nconsole.log("saved: " + saved + " ms");\ndocument.getElementById("out").textContent = "TLS 1.2: " + t12 + " ms · TLS 1.3: " + t13 + " ms · Latency Saved: +" + saved + " ms · App Boost: " + boost + "x (2 protocols ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — TLS termination architectural rules', bn: 'ফলাফল — TLS টার্মিনেশনের সোনালী নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always terminate TLS at edge reverse proxies: protect backend microservices from costly asymmetric cryptography handshakes.', bn: 'সর্বদা এজ রিভার্স প্রক্সিতে TLS সমাপ্ত করুন: ব্যাকএন্ড মাইক্রোসার্ভিসগুলোকে জটিল ক্রিপ্টোগ্রাফিক হ্যান্ডশেক থেকে মুক্ত রাখুন।' },
        { en: 'Enforce HSTS (HTTP Strict Transport Security): declare add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always; to prevent SSL-stripping man-in-the-middle attacks.', bn: 'HSTS নীতি কার্যকর করুন: কঠোর নিরাপত্তা হেডার পাঠিয়ে ক্লায়েন্টকে আজীবন কেবল HTTPS-এ প্রবেশ করতে বাধ্য করুন এবং ম্যান-ইন-দ্য-মিডল আক্রমণ প্রতিহত করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common SSL termination mistakes', bn: 'ডিবাগ — এসএসএল টার্মিনেশনের পরিচিত ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Missing intermediate CA certificates in ssl_certificate bundle', bn: 'সার্টিফিকেট ফাইলে ইন্টারমিডিয়েট CA সার্টিফিকেট যুক্ত না করার ভুল' },
      text: {
        en: 'If your ssl_certificate file contains only the server leaf certificate and omits intermediate CA certificates, modern desktop browsers may pass while mobile devices and curl throw "SSL certificate problem: unable to get local issuer certificate" errors. Always bundle fullchain.pem.',
        bn: 'যদি আপনার সার্টিফিকেট ফাইলে ইন্টারমিডিয়েট CA সার্টিফিকেট বাদ পড়ে, তবে কম্পিউটার ব্রাউজারে সাইট খুললেও মোবাইল ফোন বা এপিআই ক্লায়েন্ট "সার্টিফিকেট অচেনা" এরর দেবে। সর্বদা fullchain.pem ফাইলটি কনফিগারেশনে নির্দেশ করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Enabling OCSP Stapling for sub-millisecond certificate validation', bn: 'দ্রুত সার্টিফিকেট যাচাইয়ে OCSP Stapling চালু করা' },
      text: {
        en: 'Configure ssl_stapling on; and ssl_stapling_verify on;. This allows the reverse proxy to pre-fetch and cache certificate revocation proofs from the certificate authority, eliminating external client DNS lookups to revocation servers during TLS negotiation.',
        bn: 'ssl_stapling on; সক্রিয় রাখুন। এটি রিভার্স প্রক্সিকে আগে থেকেই সার্টিফিকেটের বৈধতার প্রমাণ ক্যাশ করে রাখতে দেয়, ফলে ক্লায়েন্টকে বাইরের কোনো সার্ভারে কুয়েরি পাঠিয়ে সময় নষ্ট করতে হয় না।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production TLS architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক TLS টার্মিনেশন পরিকাঠামো' },
    },
    {
      type: 'list',
      items: [
        { en: 'Let Encrypt and Certbot: automates ACME certificate issuance and 90-day renewal across millions of public Nginx reverse proxies worldwide.', bn: 'Let Encrypt ও Certbot: বিশ্বব্যাপী কোটি কোটি Nginx প্রক্সিতে সম্পূর্ণ বিনামূল্যে স্বয়ংক্রিয়ভাবে এসএসএল নবায়ন পরিচালনা করে।' },
        { en: 'AWS Certificate Manager (ACM): provisions and binds private TLS certificates directly to Application Load Balancers with zero manual key management.', bn: 'AWS Certificate Manager: কোনো প্রাইভেট কি না ছুঁয়েই সরাসরি ক্লাউড লোড ব্যালেন্সারে এসএসএল সার্টিফিকেট নিয়ন্ত্রণ করে।' },
        { en: 'Linkerd and Istio Service Mesh: terminates edge public TLS while automatically encrypting all internal pod-to-pod communications with mutual TLS (mTLS).', bn: 'ইস্টিও ও লিংকার্ড সার্ভিস মেশ: এজে পাবলিক ট্রাফিক টার্মিনেট করে অভ্যন্তরীণ সমস্ত পডের মধ্যে স্বয়ংক্রিয় mTLS নিরাপত্তা নিশ্চিত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Sticky Sessions and Session Affinity', bn: 'পরবর্তী পাঠ — স্টিকি সেশন ও সেশন অ্যাফিনিটি' },
    },
    {
      type: 'para',
      text: {
        en: 'With TLS termination and handshake mechanics mastered, Lesson 6 explores session affinity: cookie-based stickiness, IP hash persistence, connection draining, and the architectural trade-offs of stateful reverse proxies.',
        bn: 'TLS টার্মিনেশন ও হ্যান্ডশেক আয়ত্ত করার পর, পাঠ ৬ সেশন অ্যাফিনিটি শেখাবে: কুকি-ভিত্তিক স্টিকিনেস, আইপি হ্যাশ পারসিস্টেন্স, কানেকশন ড্রেইনিং এবং স্টেটফুল রিভার্স প্রক্সির স্থাপত্যিক সুবিধা-অসুবিধা।',
      },
    },
  ],
  exercises: [
    {
      id: 'rp-cert-ex-1',
      kind: 'mcq',
      topic: 'tls-termination-performance-benefit',
      question: {
        en: 'What primary performance advantage does TLS termination at the reverse proxy provide to application servers?',
        bn: 'রিভার্স প্রক্সিতে TLS টার্মিনেশন সম্পন্ন করলে তা অ্যাপ্লিকেশন সার্ভারগুলোকে কোন প্রধান পারফরম্যান্স সুবিধা প্রদান করে?',
      },
      options: [
        {
          en: 'It offloads computationally expensive RSA and elliptic-curve asymmetric cryptography from application worker processes, freeing CPU cycles exclusively for business logic',
          bn: 'এটি অ্যাপ্লিকেশন প্রসেস থেকে জটিল গাণিতিক ক্রিপ্টোগ্রাফির বোঝা সরিয়ে নেয়, ফলে প্রসেসরের সম্পূর্ণ ক্ষমতা কেবল কাজের লজিক সম্পাদনে ব্যবহৃত হতে পারে',
        },
        {
          en: 'It doubles the physical memory inside the computer server case',
          bn: 'এটি কম্পিউটার কেসিংয়ের ভেতরের ফিজিক্যাল মেমরি নিজে থেকেই দ্বিগুণ করে দেয়',
        },
        {
          en: 'It makes all web pages load without consuming any network bandwidth',
          bn: 'এটি কোনো ইন্টারনেট ব্যান্ডউইথ খরচ না করেই ওয়েব পেজ লোড করিয়ে দেয়',
        },
        {
          en: 'It prints user passwords directly to paper receipts',
          bn: 'এটি কাগজের রসিদে ব্যবহারকারীর পাসওয়ার্ড সরাসরি প্রিন্ট করে রাখে',
        },
      ],
      answer: 0,
      hint: { en: 'TLS termination offloads heavy cryptographic CPU burdens.', bn: 'TLS টার্মিনেশন জটিল ক্রিপ্টোগ্রাফির বোঝা সরিয়ে প্রসেসর মুক্ত করে।' },
      explanation: {
        en: 'Asymmetric cryptographic handshakes are CPU-intensive; terminating TLS at the proxy spares application runtimes.',
        bn: 'এনক্রিপশন সমাধান করা অত্যন্ত প্রসেসর-নির্ভর কাজ; প্রক্সিতে এটি শেষ করলে মূল অ্যাপ্লিকেশনের গতি বহুগুণ বাড়ে।',
      },
    },
    {
      id: 'rp-cert-ex-2',
      kind: 'mcq',
      topic: 'cert-sim-numbers',
      question: {
        en: 'In our code walkthrough, how much handshake latency was saved by upgrading from TLS 1.2 (120 ms) to TLS 1.3 (50 ms), and what was the application throughput capacity boost across 2 supported protocols?',
        bn: 'আমাদের কোড আলোচনায় TLS 1.2 (১২০ ms) থেকে TLS 1.3 (৫০ ms) এ উন্নীত করে কতটুকু হ্যান্ডশেক লেটেন্সি বাঁচানো হয়েছিল এবং ২টি সমর্থিত প্রোটোকলে অ্যাপ্লিকেশনের ক্ষমতা কত গুণ বৃদ্ধি পেয়েছিল?',
      },
      options: [
        {
          en: 'Saved 70 ms per handshake (50 ms vs 120 ms); crypto overhead dropped from 80.00% to 0.00% (5x throughput boost, 85.00% session cache hits across 2 supported protocols)',
          bn: 'প্রতি হ্যান্ডশেকে ৭০ ms সাশ্রয় (৫০ ms বনাম ১২০ ms); ক্রিপ্টো খরচ ৮০.০০% থেকে কমে ০.০০% (৫ গুণ থ্রুপুট বৃদ্ধি, ২টি সমর্থিত প্রোটোকলে ৮৫.০০% সেশন ক্যাশ হিট)',
        },
        {
          en: 'Saved 0 ms per handshake; crypto overhead remained at 100.00% (1x throughput boost across 2 supported protocols)',
          bn: 'প্রতি হ্যান্ডশেকে ০ ms সাশ্রয়; ক্রিপ্টো খরচ ১০০.০০% এ অপরিবর্তিত (২টি সমর্থিত প্রোটোকলে ১ গুণ থ্রুপুট)',
        },
        {
          en: 'Saved 1000 ms per handshake; crypto overhead dropped to 50.00% (2x throughput boost across 2 supported protocols)',
          bn: 'প্রতি হ্যান্ডশেকে ১০০০ ms সাশ্রয়; ক্রিপ্টো খরচ ৫০.০০% এ নেমেছে (২টি সমর্থিত প্রোটোকলে ২ গুণ থ্রুপুট)',
        },
        {
          en: 'Saved 10 ms per handshake; crypto overhead dropped to 70.00% (1.5x throughput boost across 2 supported protocols)',
          bn: 'প্রতি হ্যান্ডশেকে ১০ ms সাশ্রয়; ক্রিপ্টো খরচ ৭০.০০% এ নেমেছে (২টি সমর্থিত প্রোটোকলে ১.৫ গুণ থ্রুপুট)',
        },
      ],
      answer: 0,
      hint: { en: '120 - 50 = 70 ms saved, 5x boost, 85.00% cache.', bn: '১২০ - ৫০ = ৭০ ms সাশ্রয়, ৫ গুণ গতি, ৮৫.০০% ক্যাশ।' },
      explanation: {
        en: 'The simulation proved TLS 1.3 saved 70 ms of handshake time while proxy offload unlocked a 5x application capacity gain across 2 supported protocols.',
        bn: 'সিমুলেশনটিতে দেখা যায় TLS 1.3 হ্যান্ডশেকে ৭০ ms বাঁচায় এবং প্রক্সি অফলোডের মাধ্যমে ২টি প্রোটোকলে অ্যাপ্লিকেশনের ধারণক্ষমতা ৫ গুণ বাড়ে।',
      },
    },
    {
      id: 'rp-cert-ex-3',
      kind: 'mcq',
      topic: 'server-name-indication-purpose',
      question: {
        en: 'What architectural challenge does Server Name Indication (SNI) solve for reverse proxies hosting multiple HTTPS websites?',
        bn: 'একাধিক HTTPS ওয়েবসাইট পরিচালনাকারী রিভার্স প্রক্সির জন্য Server Name Indication (SNI) কোন গুরুত্বপূর্ণ সমস্যার সমাধান করে?',
      },
      options: [
        {
          en: 'It transmits the requested domain hostname during the initial unencrypted TLS ClientHello handshake, enabling the proxy to select and present the correct SSL certificate before HTTP headers are sent',
          bn: 'এটি প্রাথমিক আন-এনক্রিপ্টেড TLS ClientHello হ্যান্ডশেকের সময়ই কাঙ্ক্ষিত ডোমেইন নাম জানিয়ে দেয়, ফলে কোনো এইচটিটিপি হেডার পাওয়ার আগেই প্রক্সি সঠিক এসএসএল সার্টিফিকেট নির্বাচন করতে পারে',
        },
        {
          en: 'It translates domain names into telephone numbers',
          bn: 'এটি ডোমেইন নামকে টেলিফোন নম্বরে রূপান্তর করে দেয়',
        },
        {
          en: 'It prevents computer screens from going to sleep',
          bn: 'এটি কম্পিউটারের স্ক্রিন স্লিপ মোডে যাওয়া বন্ধ করে দেয়',
        },
        {
          en: 'It requires all internet users to type passwords in capital letters',
          bn: 'এটি সমস্ত ইন্টারনেট ব্যবহারকারীকে বড় হাতের অক্ষরে পাসওয়ার্ড লিখতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: { en: 'SNI sends the hostname in the TLS ClientHello to pick the cert.', bn: 'SNI সঠিক সার্টিফিকেট বাছাই করতে হ্যান্ডশেকের শুরুতেই ডোমেইন নাম পাঠায়।' },
      explanation: {
        en: 'Because TLS handshakes occur before HTTP Host headers are decrypted, SNI informs the proxy which certificate to present.',
        bn: 'যেহেতু এইচটিটিপি হেডার পড়ার আগেই এনক্রিপশন শুরু হয়, তাই কোন সার্টিফিকেট দেখাতে হবে তা জানতে SNI অপরিহার্য।',
      },
    },
    {
      id: 'rp-cert-ex-4',
      kind: 'predict',
      topic: 'sni-acronym-token',
      question: {
        en: 'What three-letter acronym identifies the TLS extension used to indicate the requested hostname during the initial handshake (e.g. SNI)?',
        bn: 'হ্যান্ডশেকের শুরুতে ক্লায়েন্ট কোন ডোমেইনে ঢুকতে চায় তা প্রকাশকারী TLS এক্সটেনশনকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা ডাকা হয় (যেমন SNI)?',
      },
      answer: 'SNI',
      accept: ['SNI', 'sni', 'Server Name Indication'],
      hint: { en: 'S-N-I', bn: 'S-N-I' },
      explanation: {
        en: 'SNI stands for Server Name Indication, allowing multi-tenant certificate hosting on a single IP.',
        bn: 'SNI হলো Server Name Indication, যার মাধ্যমে একক আইপিতে শত শত ভিন্ন ডোমেইনের সার্টিফিকেট রাখা যায়।',
      },
    },
  ],
  quiz: {
    id: 'certs-and-the-cert-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'rp-cert-q1',
        kind: 'mcq',
        topic: 'tls-13-performance-advantage',
        question: {
          en: 'Why does TLS 1.3 establish connections significantly faster than legacy TLS 1.2 over high-latency mobile networks?',
          bn: 'উচ্চ-লেটেন্সির মোবাইল নেটওয়ার্কে কেন পুরনো TLS 1.2 এর তুলনায় আধুনিক TLS 1.3 অনেক দ্রুত সংযোগ স্থাপন করে?',
        },
        options: [
          {
            en: 'TLS 1.3 reduces the handshake to a single round-trip time (1-RTT) by negotiating cryptographic keys concurrently with the initial hello message, and supports 0-RTT session resumption',
            bn: 'TLS 1.3 প্রথম বার্তার সাথেই এনক্রিপশন কি ঠিক করে পুরো হ্যান্ডশেককে মাত্র একটি রাউন্ড-ট্রিপে (1-RTT) সম্পন্ন করে এবং পুনরায় আসা ভিজিটরদের জন্য 0-RTT সমর্থন করে',
          },
          {
            en: 'TLS 1.3 bypasses all cryptographic mathematical security completely',
            bn: 'TLS 1.3 কোনো নিরাপত্তা পরীক্ষা না করেই সরাসরি ডেটা পাঠিয়ে দেয়',
          },
          {
            en: 'TLS 1.3 requires clients to connect through satellite dishes',
            bn: 'TLS 1.3 ব্যবহারের জন্য স্যাটেলাইট সংযোগ থাকা বাধ্যতামূলক',
          },
          {
            en: 'TLS 1.3 compresses all web images into black squares',
            bn: 'TLS 1.3 ওয়েব পেজের সব ছবিকে কালো চতুর্ভুজে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: { en: 'TLS 1.3 operates in 1-RTT (or 0-RTT for resumption).', bn: 'TLS 1.3 মাত্র ১টি রাউন্ড-ট্রিপে (বা ০ রাউন্ড-ট্রিপে) কাজ সম্পন্ন করে।' },
        explanation: {
          en: 'TLS 1.3 cuts round trips in half, reducing connection latency from 2-RTT down to 1-RTT on initial visits.',
          bn: 'TLS 1.3 নেটওয়ার্ক আদান-প্রদান অর্ধেক করে দিয়ে সংযোগের সময় প্রায় দ্বিগুণ দ্রুত করে তোলে।',
        },
      },
      {
        id: 'rp-cert-q2',
        kind: 'mcq',
        topic: 'handshake-latency-saved-check',
        question: {
          en: 'In our code walkthrough, how much handshake latency was saved by TLS 1.3 over TLS 1.2 across 2 supported protocols?',
          bn: 'আমাদের কোড আলোচনায় ২টি সমর্থিত প্রোটোকলে TLS 1.2 এর তুলনায় TLS 1.3 কতটুকু হ্যান্ডশেক সময় বাঁচিয়েছিল?',
        },
        options: [
          { en: '+70 ms saved per handshake (120 ms TLS 1.2 minus 50 ms TLS 1.3 across 2 protocols)', bn: '২টি প্রোটোকলে প্রতি হ্যান্ডশেকে +৭০ ms সাশ্রয় (১২০ ms TLS 1.2 বিয়োগ ৫০ ms TLS 1.3)' },
          { en: '+500 ms saved across 2 protocols', bn: '২টি প্রোটোকলে +৫০০ ms সাশ্রয়' },
          { en: '+0 ms saved across 2 protocols', bn: '২টি প্রোটোকলে +০ ms সাশ্রয়' },
          { en: '+10 ms saved across 2 protocols', bn: '২টি প্রোটোকলে +১০ ms সাশ্রয়' },
        ],
        answer: 0,
        hint: { en: '120 - 50 = 70 ms saved.', bn: '১২০ - ৫০ = ৭০ ms সাশ্রয়।' },
      explanation: {
        en: 'TLS 1.3 resolved in 50 ms versus 120 ms for TLS 1.2, achieving a 70 ms latency savings across 2 supported protocols.',
        bn: 'সিমুলেশনে দেখা যায় ২টি সমর্থিত প্রোটোকলে TLS 1.2 এর ১২০ ms এর তুলনায় TLS 1.3 মাত্র ৫০ ms এ সম্পন্ন হয়ে হ্যান্ডশেকে ৭০ ms সময় বাঁচায়।',
      },
      },
      {
        id: 'rp-cert-q3',
        kind: 'mcq',
        topic: 'ocsp-stapling-utility',
        question: {
          en: 'What performance bottleneck does enabling OCSP Stapling (ssl_stapling on;) eliminate during client TLS handshakes?',
          bn: 'ক্লায়েন্ট TLS হ্যান্ডশেকের সময় OCSP Stapling (ssl_stapling on;) সক্রিয় রাখলে কোন পারফরম্যান্স ঘাটতি দূর হয়?',
        },
        options: [
          {
            en: 'It prevents client browsers from having to contact third-party Certificate Authority servers to verify certificate validity, because the proxy attaches a cached, signed validity proof directly into the handshake',
            bn: 'এটি ক্লায়েন্ট ব্রাউজারকে সার্টিফিকেটের বৈধতা যাচাই করতে বাইরের কোনো থার্ড-পার্টি সিএ সার্ভারের সাথে যোগাযোগ করা থেকে বিরত রাখে, কারণ প্রক্সি নিজেই স্বাক্ষরিত প্রমাণ হ্যান্ডশেকে যুক্ত করে দেয়',
          },
          {
            en: 'It stops computer keyboards from sticking when typing passwords',
            bn: 'পাসওয়ার্ড টাইপ করার সময় এটি কীবোর্ড আটকে যাওয়া বন্ধ করে',
          },
          {
            en: 'It prevents computer memory chips from getting hot',
            bn: 'এটি কম্পিউটারের মেমরি চিপ অতিরিক্ত গরম হওয়া রোধ করে',
          },
          {
            en: 'It automatically translates HTML documents into PDF files',
            bn: 'এটি স্বয়ংক্রিয়ভাবে এইচটিএমএল ফাইলকে পিডিএফ ফাইলে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: { en: 'OCSP stapling caches certificate validation proofs at the proxy.', bn: 'OCSP stapling প্রক্সিতেই সার্টিফিকেটের বৈধতার প্রমাণ ক্যাশ করে রাখে।' },
        explanation: {
          en: 'OCSP stapling eliminates an external network request from the client to the CA, speeding up secure connection establishment.',
          bn: 'OCSP stapling ব্যবহারের ফলে ক্লায়েন্টকে বাইরের সিএ সার্ভারে যেতে হয় না, ফলে দ্রুততম সময়ে সুরক্ষিত সংযোগ তৈরি হয়।',
        },
      },
      {
        id: 'rp-cert-q4',
        kind: 'predict',
        topic: 'mtls-acronym-token',
        question: {
          en: 'What four-letter acronym designates mutual cryptographic authentication where both client and server present X.509 certificates (e.g. mTLS)?',
          bn: 'যেখানে ক্লায়েন্ট এবং সার্ভার উভয়ই একে অপরের ডিজিটাল সার্টিফিকেট যাচাই করে সেই পারস্পরিক এনক্রিপশনকে কোন চার অক্ষরের সংক্ষেপ দ্বারা ডাকা হয় (যেমন mTLS)?',
        },
        answer: 'mTLS',
        accept: ['mTLS', 'mtls', 'Mutual TLS'],
        hint: { en: 'm-T-L-S', bn: 'm-T-L-S' },
        explanation: {
          en: 'mTLS stands for Mutual TLS, providing two-way cryptographic identity verification between communicating services.',
          bn: 'mTLS হলো Mutual TLS, যা দুটি যোগাযোগকারী সার্ভিসের মধ্যে দ্বিমুখী সার্টিফিকেট যাচাই ও নিরাপত্তা নিশ্চিত করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'sessions-and-the-session',
    title: { en: 'Sticky Sessions and Session Affinity', bn: 'স্টিকি সেশন ও সেশন অ্যাফিনিটি' },
  },
};
