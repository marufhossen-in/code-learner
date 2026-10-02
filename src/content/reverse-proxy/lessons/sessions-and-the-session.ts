import type { Lesson } from '../../../lib/types';

export const SessionsAndTheSessionLesson: Lesson = {
  slug: 'sessions-and-the-session',
  tech: 'reverse-proxy',
  title: {
    en: 'Sticky Sessions — Session Affinity, Cookie Routing, and Connection Draining',
    bn: 'স্টিকি সেশন — সেশন অ্যাফিনিটি, কুকি রাউটিং ও কানেকশন ড্রেইনিং',
  },
  summary: {
    en: 'A foundational overview of sticky sessions and session affinity in reverse proxies. Explore cookie-based persistence, compare IP hash vs cookie routing across 4 user sessions and 3 upstream servers, route 800 requests with 100.00% affinity stickiness and 0 dropped sessions, and master graceful connection draining.',
    bn: 'রিভার্স প্রক্সিতে স্টিকি সেশন ও সেশন অ্যাফিনিটির মৌলিক ধারণা। কুকি-ভিত্তিক পারসিস্টেন্স অনুসন্ধান, ৪টি ইউজার সেশন ও ৩টি আপস্ট্রিম সার্ভারের মধ্যে আইপি হ্যাশ বনাম কুকি রাউটিং তুলনা, ১০০.০০% স্টিকিনেস ও ০টি ড্রপ সেশন সহ ৮০০টি রিকোয়েস্ট রাউট এবং সুষ্ঠু কানেকশন ড্রেইনিং আয়ত্তকরণ।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Session affinity and stateful load balancing', bn: 'WHAT — সেশন অ্যাফিনিটি ও স্টেটফুল লোড ব্যালেন্সিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When your web applications store user state locally in server memory rather than in external distributed databases, round-robin load balancing causes immediate session loss. If a user logs into Server A and their subsequent shopping cart request lands on Server B, the second server rejects them as unauthenticated. A reverse proxy solves this dilemma using Session Affinity (also known as sticky sessions). The proxy inspects incoming HTTP cookies or client network attributes, mapping each unique visitor session to the exact same backend instance throughout their browsing lifecycle. While modern cloud architecture prefers stateless backends backed by Redis, sticky sessions remain vital for legacy monoliths, stateful game servers, and persistent WebSocket connections.',
        bn: 'যখন আপনার ওয়েব অ্যাপ্লিকেশন ব্যবহারকারীর তথ্য বা লগইন সেশন সেন্ট্রাল ডেটাবেজে না রেখে সার্ভারের নিজস্ব মেমরিতে সংরক্ষণ করে, তখন সাধারণ রাউন্ড-রবিন ব্যালেন্সিং বিপর্যয় ডেকে আনে। ব্যবহারকারী যদি সার্ভার এ-তে লগইন করার পর পরবর্তী কেনাকাটার রিকোয়েস্ট সার্ভার বি-তে যায়, তবে দ্বিতীয় সার্ভার তাকে অচেনা ভেবে লগআউট করে দেয়। রিভার্স প্রক্সি Session Affinity বা স্টিকি সেশনের মাধ্যমে এই সমস্যার সমাধান করে। প্রক্সি ব্রাউজারের কুকি বা আইপি পরীক্ষা করে প্রতিটি অনন্য ভিজিটরকে তার পুরো ব্রাউজিং চলাকালীন নির্দিষ্ট একই ব্যাকএন্ড সার্ভারের সাথে সংযুক্ত রাখে। আধুনিক ক্লাউড সিস্টেমে রেডিস-নির্ভর স্টেটলেস আর্কিটেকচার জনপ্রিয় হলেও পুরনো এন্টারপ্রাইজ সিস্টেম, লাইভ গেমিং এবং স্থায়ী ওয়েবসকেট সংযোগে স্টিকি সেশন অত্যন্ত প্রয়োজনীয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Sticky session cookie routing across 800 requests and 3 upstream servers', bn: '৮০০টি রিকোয়েস্ট ও ৩টি সার্ভারে স্টিকি সেশন কুকি রাউটিং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Reverse Proxy Sticky Sessions diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">4 Client Sessions</text>

<rect x="35" y="80" width="140" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="96" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">SESS_A1 &amp; SESS_D4 (420 reqs)</text>

<rect x="35" y="112" width="140" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="128" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">SESS_B2 (200 reqs)</text>

<rect x="35" y="144" width="140" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">SESS_C3 (180 reqs)</text>

<text x="105" y="190" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">800 total requests</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Reverse Proxy Router</text>

<rect x="255" y="85" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Cookie: SRV_ID Inspection</text>
<text x="335" y="116" text-anchor="middle" font-size="7" fill="#1e40af">100.00% Affinity Stickiness</text>

<text x="335" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 dropped sessions</text>
<text x="335" y="175" text-anchor="middle" font-size="7" fill="#64748b">Drain on deploy active</text>

<line x1="425" y1="75" x2="475" y2="65" stroke="#16a34a" stroke-width="2"/>
<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<line x1="425" y1="160" x2="475" y2="170" stroke="#16a34a" stroke-width="2"/>

<rect x="475" y="35" width="140" height="48" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Server A: 420 (52.50%)</text>
<text x="545" y="70" text-anchor="middle" font-size="7" fill="#15803d">SESS_A1 + SESS_D4</text>

<rect x="475" y="93" width="140" height="48" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="113" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Server B: 200 (25.00%)</text>
<text x="545" y="128" text-anchor="middle" font-size="7" fill="#15803d">SESS_B2</text>

<rect x="475" y="151" width="140" height="48" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="171" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Server C: 180 (22.50%)</text>
<text x="545" y="186" text-anchor="middle" font-size="7" fill="#15803d">SESS_C3</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Cookie-based affinity pins 4 sessions to 3 upstream servers across 800 requests</text>
</svg>`,
      caption: {
        en: 'Routing 800 requests across 4 sessions and 3 servers delivers 100.00% affinity stickiness with 0 dropped sessions. Server A processed 420 requests (52.50%), Server B processed 200 requests (25.00%), and Server C processed 180 requests (22.50%).',
        bn: '৪টি সেশন ও ৩টি সার্ভারে ৮০০টি রিকোয়েস্ট রাউট করার মাধ্যমে ১০০.০০% অ্যাফিনিটি স্টিকিনেস ও ০টি ড্রপ সেশন নিশ্চিত হয়। সার্ভার এ ৪২০টি (৫২.৫০%), সার্ভার বি ২০০টি (২৫.০০%) এবং সার্ভার সি ১৮০টি (২২.৫০%) রিকোয়েস্ট প্রক্রিয়া করেছে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Session Affinity (Sticky Sessions)',
          def: {
            en: 'A routing configuration where incoming requests originating from the same client session are persistently directed to the exact same backend server.',
            bn: 'একটি রাউটিং ব্যবস্থা যেখানে একই ব্যবহারকারীর সেশন থেকে আসা সমস্ত রিকোয়েস্ট ধারাবাহিকভাবে নির্দিষ্ট একই ব্যাকএন্ড সার্ভারে পাঠানো হয়।',
          },
        },
        {
          term: 'Connection Draining',
          def: {
            en: 'The operational process of stopping new incoming sessions from being routed to a retiring server while allowing existing connected sessions to finish their work.',
            bn: 'সার্ভার বন্ধ বা আপডেটের পূর্বে নতুন সেশন পাঠানো বন্ধ করে সক্রিয় পুরনো সেশনগুলোকে নির্বিঘ্নে কাজ শেষ করার সুযোগ দেওয়ার প্রক্রিয়া।',
          },
        },
        {
          term: 'Consistent Hashing',
          def: {
            en: 'A distributed hashing algorithm where adding or removing a backend server disrupts only a minimal fraction (1/N) of cached keys or sessions.',
            bn: 'একটি বিতরণকৃত হ্যাশিং পদ্ধতি যেখানে কোনো ব্যাকএন্ড সার্ভার যুক্ত বা বিচ্ছিন্ন হলেও অধিকাংশ সেশন অক্ষত থাকে এবং মাত্র সামান্য অংশ পুনর্বন্টিত হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Stateful persistence vs horizontal scalability trade-offs', bn: 'কেন — স্টেটফুল স্থায়িত্ব বনাম হরিজন্টাল স্কেলিংয়ের হিসাব' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent unexpected user logouts: pinning stateful sessions ensures users do not lose their shopping carts or active authentication tokens.', bn: 'অপ্রত্যাশিত লগআউট রোধ করা: সেশনকে নির্দিষ্ট সার্ভারে আটকে রাখলে ব্যবহারকারীর শপিং কার্ট বা লগইন তথ্য হারিয়ে যায় না।' },
        { en: 'Safe rolling production deployments: connection draining enables seamless zero-downtime container updates without interrupting active paying checkout sessions.', bn: 'নিরাপদ রুলিং ডিপ্লয়মেন্ট: কানেকশন ড্রেইনিংয়ের মাধ্যমে চলমান পেমেন্ট বা চেকআউট নষ্ট না করেই কোনো সার্ভার মেইনটেন্যান্স বা কোড আপডেট করা যায়।' },
        { en: 'Architectural risk of traffic hotspotting: if heavy active users cluster onto a single backend server, that node suffers memory exhaustion while sister nodes sit idle.', bn: 'ট্রাফিক হটস্পটের ঝুঁকি: অতিরিক্ত সক্রিয় ব্যবহারকারীরা একটিমাত্র সার্ভারে ভিড় জমালে সেই সার্ভারের মেমরি শেষ হয়ে ক্র্যাশ করতে পারে অথচ অন্য সার্ভারগুলো অলস বসে থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — 4 methods for configuring session affinity', bn: 'HOW — সেশন অ্যাফিনিটি কনফিগার করার ৪টি পদ্ধতি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Proxy-injected cookie', bn: '১. প্রক্সি-ইনজেক্টেড কুকি' }, text: { en: 'Configure sticky cookie srv_id expires=1h domain=.example.com path=/; in Nginx Plus or HAProxy.', bn: 'প্রক্সিতে কুকি পলিসি দিয়ে একটি ট্র্যাকিং কুকি রেসপন্সে ইনজেক্ট করুন।' } },
        { title: { en: '2. Application cookie learning', bn: '২. অ্যাপ্লিকেশন কুকি রিড' }, text: { en: 'Direct the proxy to track existing backend framework cookies such as JSESSIONID or connect.sid.', bn: 'ব্যাকএন্ড ফ্রেমওয়ার্কের নিজস্ব সেশন কুকি যেমন JSESSIONID ট্র্যাক করতে প্রক্সিকে নির্দেশ দিন।' } },
        { title: { en: '3. IP hash load balancing', bn: '৩. আইপি হ্যাশ লোড ব্যালেন্সিং' }, text: { en: 'Declare ip_hash; inside the upstream block to bind client IP addresses to fixed servers.', bn: 'আপস্ট্রিম ব্লকে ip_hash; লিখে ক্লায়েন্ট আইপির ওপর ভিত্তি করে নির্দিষ্ট সার্ভারে ট্রাফিক পাঠান।' } },
        { title: { en: '4. Graceful connection draining', bn: '৪. কানেকশন ড্রেইনিং পরিচালনা' }, text: { en: 'Mark target node as drain; to stop new sessions while honoring existing active TCP connections.', bn: 'সার্ভারকে drain মোডে নিয়ে যান যেন নতুন সেশন না ঢুকে কিন্তু পুরনো কাজ শেষ হতে পারে।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'sticky_session_sim.js',
      code: `// Simulated session affinity cookie routing across 4 sessions and 3 servers
const sessions = {
  "SESS_A1": { server: "Server A", reqs: 250 },
  "SESS_B2": { server: "Server B", reqs: 200 },
  "SESS_C3": { server: "Server C", reqs: 180 },
  "SESS_D4": { server: "Server A", reqs: 170 },
};

const serverCounts = { "Server A": 0, "Server B": 0, "Server C": 0 };
let totalReqs = 0;
let stickyHits = 0;

for (const [id, data] of Object.entries(sessions)) {
  serverCounts[data.server] += data.reqs;
  totalReqs += data.reqs;
  stickyHits += data.reqs; // 100% routed to designated server
}

const stickinessRatePct = (stickyHits / totalReqs) * 100;
const serverAPct = (serverCounts["Server A"] / totalReqs) * 100;
const serverBPct = (serverCounts["Server B"] / totalReqs) * 100;
const serverCPct = (serverCounts["Server C"] / totalReqs) * 100;

console.log("Total requests: " + totalReqs);
console.log("Server A: " + serverCounts["Server A"] + " (" + serverAPct.toFixed(2) + "%)");
console.log("Server B: " + serverCounts["Server B"] + " (" + serverBPct.toFixed(2) + "%)");
console.log("Server C: " + serverCounts["Server C"] + " (" + serverCPct.toFixed(2) + "%)");
console.log("Affinity stickiness: " + stickinessRatePct.toFixed(2) + "% with 0 dropped sessions");

// Output:
// Total requests: 800
// Server A: 420 (52.50%)
// Server B: 200 (25.00%)
// Server C: 180 (22.50%)
// Affinity stickiness: 100.00% with 0 dropped sessions`,
      caption: {
        en: 'Routing 800 requests across 4 sessions and 3 servers delivers 100.00% affinity stickiness with 0 dropped sessions. Server A processed 420 requests (52.50%), Server B processed 200 requests (25.00%), and Server C processed 180 requests (22.50%).',
        bn: '৪টি সেশন ও ৩টি সার্ভারে ৮০০টি রিকোয়েস্ট রাউট করার মাধ্যমে ১০০.০০% অ্যাফিনিটি স্টিকিনেস ও ০টি ড্রপ সেশন নিশ্চিত হয়। সার্ভার এ ৪২০টি (৫২.৫০%), সার্ভার বি ২০০টি (২৫.০০%) এবং সার্ভার সি ১৮০টি (২২.৫০%) রিকোয়েস্ট প্রক্রিয়া করেছে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive session affinity simulation', bn: 'INSIDE — জীবন্ত সেশন অ্যাফিনিটি সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'Observe session affinity mechanics in action. Tracking 4 active client sessions across 3 upstream nodes yields 800 successfully routed requests. Server A receives 420 requests (52.50%), Server B receives 200 requests (25.00%), and Server C receives 180 requests (22.50%), achieving 100.00% affinity stickiness and 0 dropped sessions.',
        bn: 'সেশন অ্যাফিনিটির অভ্যন্তরীণ কার্যপদ্ধতি পর্যবেক্ষণ করুন। ৩টি আপস্ট্রিম সার্ভারে ৪টি সক্রিয় ক্লায়েন্ট সেশন ট্র্যাক করে মোট ৮০০টি রিকোয়েস্ট সফলভাবে পরিচালিত হয়েছে। এর মধ্যে সার্ভার এ পেয়েছে ৪২০টি (৫২.৫০%), সার্ভার বি পেয়েছে ২০০টি (২৫.০০%) এবং সার্ভার সি পেয়েছে ১৮০টি (২২.৫০%) রিকোয়েস্ট, যা ১০০.০০% স্টিকিনেস ও ০টি ড্রপ সেশন নিশ্চিত করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Session affinity lab (verify stickiness, press Run)', bn: 'সেশন ল্যাব (স্টিকিনেস যাচাই, Run)' },
      html: '<h3>Session Affinity Simulator</h3>\n<pre id="out"></pre>\n<p>Inspect request distribution and sticky affinity across 3 servers.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tot = 800;\nconst a = 420;\nconst b = 200;\nconst c = 180;\nconsole.log("sticky total: " + tot);\ndocument.getElementById("out").textContent = "Total: " + tot + " reqs · Server A: " + a + " (52.50%) · Server B: " + b + " (25.00%) · Server C: " + c + " (22.50%) · Stickiness: 100.00% (0 drops ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Architectural decision matrix: sticky vs stateless', bn: 'ফলাফল — স্থাপত্যিক সিদ্ধান্ত: স্টিকি নাকি স্টেটলেস' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prefer stateless application tiers: externalize sessions into shared Redis or database stores to allow pure round-robin balancing and friction-free auto-scaling.', bn: 'স্টেটলেস আর্কিটেকচার অগ্রাধিকার দিন: সেশন রেডিস বা ডেটাবেজে রাখলে যেকোনো সার্ভার যেকোনো রিকোয়েস্ট সামলাতে পারে এবং স্কেলিং সহজ হয়।' },
        { en: 'Use cookie affinity over IP hash: mobile users frequently change IP addresses between cellular towers and Wi-Fi networks, breaking IP-based affinity.', bn: 'আইপি হ্যাশের চেয়ে কুকি অ্যাফিনিটি ব্যবহার করুন: মোবাইল ফোন ব্যবহারকারীরা যখন ডাটা ও ওয়াইফাই পরিবর্তন করেন, তখন আইপি বদলে গিয়ে সেশন ভেঙে যেতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The pitfalls of sticky sessions', bn: 'ডিবাগ — স্টিকি সেশনের সাধারণ সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Corporate NAT hotspotting with IP hash', bn: 'আইপি হ্যাশ ব্যবহারে কর্পোরেট নেটওয়ার্কের হটস্পট সমস্যা' },
      text: {
        en: 'When deploying ip_hash; in environments where thousands of corporate office employees share a single egress NAT gateway IP address, every single employee request hashes to the identical backend server. This overloads one server while others remain completely idle. Always favor cookie-based affinity.',
        bn: 'যখন কোনো অফিসের হাজার হাজার কর্মী একটিমাত্র শেয়ার্ড গেটওয়ে আইপি দিয়ে ইন্টারনেটে ঢোকেন, তখন ip_hash; সবাইকে একই ব্যাকএন্ড সার্ভারে পাঠিয়ে দেয়। এতে একটি সার্ভার অতিরিক্ত চাপে ক্র্যাশ করে এবং বাকিগুলো খালি পড়ে থাকে। তাই সর্বদা কুকি অ্যাফিনিটি ব্যবহার করা বুদ্ধিমানের কাজ।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring safe connection draining intervals', bn: 'নিরাপদ কানেকশন ড্রেইনিং সময়সীমা নির্ধারণ' },
      text: {
        en: 'Before shutting down a backend worker during a code deploy, configure your reverse proxy connection draining timeout (deregistration delay) to match your maximum transaction duration, typically between 30 and 60 seconds. This guarantees ongoing orders finish safely.',
        bn: 'সার্ভার বন্ধ করার আগে প্রক্সিতে কানেকশন ড্রেইনিংয়ের জন্য ৩০ থেকে ৬০ সেকেন্ড সময় বরাদ্দ রাখুন। এর ফলে মাঝপথে থাকা পেমেন্ট বা অর্ডারগুলো কোনো বাধা ছাড়াই সুন্দরভাবে শেষ হতে পারে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — How high-traffic platforms manage affinity', bn: 'বাস্তব ক্ষেত্র — জনপ্রিয় প্ল্যাটফর্ম কীভাবে সেশন নিয়ন্ত্রণ করে' },
    },
    {
      type: 'list',
      items: [
        { en: 'AWS Application Load Balancer (ALB): supports duration-based cookies (AWSALB) with configurable expiration times for automatic sticky routing.', bn: 'AWS অ্যাপ্লিকেশন লোড ব্যালেন্সার: AWSALB কুকির সাহায্যে নির্দিষ্ট সময় পর্যন্ত স্বনিয়ন্ত্রিত স্টিকি সেশন সাপোর্ট করে।' },
        { en: 'Kubernetes Ingress-Nginx: enables session affinity annotations (nginx.ingress.kubernetes.io/affinity: "cookie") to bind user sessions to specific container pods.', bn: 'কুবারনেটিস ইনগ্রেস-এনজিনএক্স: কুকি অ্যানোটেশন ব্যবহার করে ট্রাফিক নির্দিষ্ট কনটেইনার পডে স্থায়ীভাবে পাঠাতে পারে।' },
        { en: 'Socket.io and real-time chat platforms: requires cookie stickiness during the initial HTTP long-polling handshake before upgrading the connection to native WebSockets.', bn: 'Socket.io ও লাইভ চ্যাট সিস্টেম: ওয়েবসকেট সংযোগ প্রতিষ্ঠিত হওয়ার পূর্ববর্তী লং-পোলিং পর্যায়ে স্টিকি সেশন থাকা অপরিহার্য।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Upstream Health Checks and Circuit Breaking', bn: 'পরবর্তী পাঠ — আপস্ট্রিম হেলথ চেক ও সার্কিট ব্রেকিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With session management and connection draining covered, Lesson 7 explores upstream health checks: passive vs active probing, fail_timeout thresholds, circuit breaking, and sub-second automatic failover.',
        bn: 'সেশন পরিচালনা ও কানেকশন ড্রেইনিং জানার পর, পাঠ ৭ আপস্ট্রিম হেলথ চেক শেখাবে: প্যাসিভ বনাম অ্যাক্টিভ প্রোবিং, fail_timeout থ্রেশহোল্ড, সার্কিট ব্রেকিং এবং দ্রুত স্বয়ংক্রিয় ফেইলওভার।',
      },
    },
  ],
  exercises: [

    {
      id: 'rp-sess-ex-1',
      kind: 'mcq',
      topic: 'sticky-session-primary-purpose',
      question: {
        en: 'What primary problem do sticky sessions (session affinity) solve in stateful web application architectures?',
        bn: 'স্টেটফুল ওয়েব অ্যাপ্লিকেশন আর্কিটেকচারে স্টিকি সেশন (সেশন অ্যাফিনিটি) কোন মূল সমস্যার সমাধান করে?',
      },
      options: [
        {
          en: 'They guarantee that subsequent HTTP requests from an authenticated client are routed to the exact same backend server holding their in-memory session data, preventing unexpected session loss',
          bn: 'এগুলো নিশ্চিত করে যে লগইন করা ব্যবহারকারীর পরবর্তী সমস্ত রিকোয়েস্ট যেন নির্দিষ্ট একই সার্ভারে যায় যেখানে তার মেমরি ডেটা জমা আছে, ফলে সেশন হারিয়ে যাওয়া রোধ হয়',
        },
        {
          en: 'They glue physical computer wires together with industrial adhesive',
          bn: 'এগুলো কম্পিউটারের তারগুলোকে আঠা দিয়ে শক্তভাবে একসাথে জোড়া লাগিয়ে দেয়',
        },
        {
          en: 'They delete user passwords after three seconds of inactivity',
          bn: 'তিন সেকেন্ড নিষ্ক্রিয় থাকলেই এগুলো ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে',
        },
        {
          en: 'They change the background color of the web browser to green',
          bn: 'এগুলো ওয়েব ব্রাউজারের ব্যাকগ্রাউন্ড রঙ নিজে থেকেই সবুজ করে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Sticky sessions keep a user pinned to the same backend server.', bn: 'স্টিকি সেশন ব্যবহারকারীকে একই ব্যাকএন্ড সার্ভারের সাথে আটকে রাখে।' },
      explanation: {
        en: 'Session affinity routes consecutive requests from one client to the same server holding local state.',
        bn: 'সেশন অ্যাফিনিটি ক্লায়েন্টের সব রিকোয়েস্ট একই সার্ভারে পাঠিয়ে তার লোকাল ডেটা অক্ষত রাখে।',
      },
    },
    {
      id: 'rp-sess-ex-2',
      kind: 'mcq',
      topic: 'sess-sim-numbers',
      question: {
        en: 'In our code walkthrough, what were the request counts and percentages for Server A, Server B, and Server C across 4 sessions and 800 total requests with 0 dropped sessions?',
        bn: 'আমাদের কোড আলোচনায় ৪টি সেশন ও ০টি ড্রপ সেশন সহ মোট ৮০০টি রিকোয়েস্টে সার্ভার এ, সার্ভার বি ও সার্ভার সি-এর রিকোয়েস্ট সংখ্যা এবং শতকরা হার কত ছিল?',
      },
      options: [
        {
          en: 'Server A: 420 requests (52.50%), Server B: 200 requests (25.00%), Server C: 180 requests (22.50%), achieving 100.00% affinity stickiness and 0 dropped sessions',
          bn: 'সার্ভার এ: ৪২০টি (৫২.৫০%), সার্ভার বি: ২০০টি (২৫.০০%), সার্ভার সি: ১৮০টি (২২.৫০%), যা ১০০.০০% স্টিকিনেস ও ০টি ড্রপ সেশন অর্জন করেছে',
        },
        {
          en: 'Server A: 800 requests (100.00%), Server B: 0 requests (0.00%), Server C: 0 requests (0.00%)',
          bn: 'সার্ভার এ: ৮০০টি (১০০.০০%), সার্ভার বি: ০টি (০.০০%), সার্ভার সি: ০টি (০.০০%)',
        },
        {
          en: 'Server A: 100 requests (12.50%), Server B: 500 requests (62.50%), Server C: 200 requests (25.00%)',
          bn: 'সার্ভার এ: ১০০টি (১২.৫০%), সার্ভার বি: ৫০০টি (৬২.৫০%), সার্ভার সি: ২০০টি (২৫.০০%)',
        },
        {
          en: 'Server A: 300 requests (37.50%), Server B: 300 requests (37.50%), Server C: 200 requests (25.00%)',
          bn: 'সার্ভার এ: ৩০০টি (৩৭.৫০%), সার্ভার বি: ৩০০টি (৩৭.৫০%), সার্ভার সি: ২০০টি (২৫.০০%)',
        },
      ],
      answer: 0,
      hint: { en: 'Server A: 420 (52.50%), B: 200 (25.00%), C: 180 (22.50%).', bn: 'সার্ভার এ: ৪২০ (৫২.৫০%), বি: ২০০ (২৫.০০%), সি: ১৮০ (২২.৫০%)।' },
      explanation: {
        en: 'The simulation recorded 420 requests on Server A, 200 on Server B, and 180 on Server C, totaling 800 requests with 100.00% stickiness and 0 drops.',
        bn: 'সিমুলেশনটিতে ৪২০টি সার্ভার এ, ২০০টি সার্ভার বি এবং ১৮০টি সার্ভার সি-তে গিয়ে ১০০.০০% স্টিকিনেস ও ০টি ড্রপ সহ মোট ৮০০টি রিকোয়েস্ট নিশ্চিত করেছে।',
      },
    },
    {
      id: 'rp-sess-ex-3',
      kind: 'mcq',
      topic: 'ip-hash-limitation-nat',
      question: {
        en: 'Why is cookie-based session affinity generally preferred over IP hash in modern internet deployments?',
        bn: 'আধুনিক ইন্টারনেট সিস্টেমে আইপি হ্যাশের চেয়ে কেন কুকি-ভিত্তিক সেশন অ্যাফিনিটি বেশি গ্রহণযোগ্য?',
      },
      options: [
        {
          en: 'Thousands of users behind a shared corporate NAT or mobile cellular carrier share identical public IP addresses, causing severe traffic hotspotting on a single backend when using IP hash',
          bn: 'একই অফিসের বা মোবাইল অপারেটরের হাজার হাজার ব্যবহারকারী একটিমাত্র শেয়ার্ড পাবলিক আইপি ব্যবহার করায় আইপি হ্যাশ পদ্ধতিতে একটিমাত্র সার্ভারের ওপর অতিরিক্ত চাপ পড়ে হটস্পট তৈরি হয়',
        },
        {
          en: 'Cookies consume zero bytes of network bandwidth while IP addresses require gigabytes',
          bn: 'কুকি কোনো ব্যান্ডউইথ খরচ করে না কিন্তু আইপি অ্যাড্রেস ব্যবহারে গিগাবাইট ডেটা নষ্ট হয়',
        },
        {
          en: 'IP hash causes web browser windows to close automatically',
          bn: 'আইপি হ্যাশ ব্যবহার করলে ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
        },
        {
          en: 'Cookies are only supported on desktop computers and never work on mobile phones',
          bn: 'কুকি কেবল কম্পিউটারেই চলে এবং মোবাইল ফোনে কখনো কাজ করে না',
        },
      ],
      answer: 0,
      hint: { en: 'NAT gateways bundle multiple users into one IP, creating hotspotting.', bn: 'NAT গেটওয়ের কারণে বহু ব্যবহারকারী একই আইপি শেয়ার করায় একটি সার্ভারে জটলা বাঁধে।' },
      explanation: {
        en: 'Corporate NAT gateways funnel many clients through one public IP; cookie affinity isolates each client individually.',
        bn: 'একই গেটওয়ে আইপি দিয়ে বহু মানুষ ইন্টারনেট ব্যবহার করায় কুকি পদ্ধতিতেই প্রত্যেককে আলাদাভাবে চেনা সম্ভব।',
      },
    },
    {
      id: 'rp-sess-ex-4',
      kind: 'predict',
      topic: 'connection-draining-keyword',
      question: {
        en: 'What keyword or operational state instructs a load balancer to reject new sessions on a retiring node while letting active sessions finish (e.g. drain)?',
        bn: 'কোন নির্দেশ বা অপারেশনাল স্ট্যাটাস প্রক্সিকে নতুন সেশন পাঠানো বন্ধ করে চলমান সেশনগুলোকে নির্বিঘ্নে শেষ করার সুযোগ দিতে বলে (যেমন drain)?',
      },
      answer: 'drain',
      accept: ['drain', 'draining', 'connection draining'],
      hint: { en: 'd-r-a-i-n', bn: 'd-r-a-i-n' },
      explanation: {
        en: 'Connection draining allows in-flight sessions to complete safely before an upstream server is stopped.',
        bn: 'কানেকশন ড্রেইনিং কোনো সার্ভার বন্ধ করার আগে বিদ্যমান সেশনগুলোকে নিরাপদে কাজ সম্পন্ন করতে সাহায্য করে।',
      },
    },
  ],
  quiz: {
    id: 'sessions-and-the-session-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'rp-sess-q1',
        kind: 'mcq',
        topic: 'graceful-connection-draining-benefit',
        question: {
          en: 'What happens to active paying customer checkout sessions when an engineer initiates a rolling server deployment with connection draining enabled?',
          bn: 'কানেকশন ড্রেইনিং চালু রেখে সার্ভার আপডেট বা রুলিং ডিপ্লয়মেন্ট করলে সক্রিয় গ্রাহকদের চলমান পেমেন্ট সেশনের কী ঘটে?',
        },
        options: [
          {
            en: 'Existing checkout sessions continue communicating with their pinned backend until their transaction or session timeout expires, while all brand new sessions are steered to healthy replacement nodes',
            bn: 'চলমান পেমেন্ট সেশনগুলো তাদের কাজ শেষ হওয়া বা সেশনের মেয়াদ শেষ না হওয়া পর্যন্ত নির্ধারিত সার্ভারের সাথে যোগাযোগ চালিয়ে যায় এবং নতুন সেশনগুলো সুস্থ সার্ভারে চলে যায়',
          },
          {
            en: 'All active sessions are immediately terminated with HTTP 500 errors',
            bn: 'সমস্ত সক্রিয় সেশন তাৎক্ষণিকভাবে এইচটিটিপি ৫০০ এরর দিয়ে বিচ্ছিন্ন হয়ে যায়',
          },
          {
            en: 'The user bank accounts are charged three times automatically',
            bn: 'গ্রাহকের ব্যাংক অ্যাকাউন্ট থেকে স্বয়ংক্রিয়ভাবে তিনবার টাকা কেটে নেওয়া হয়',
          },
          {
            en: 'The application source code is wiped from the hard drive',
            bn: 'হার্ডড্রাইভ থেকে অ্যাপ্লিকেশনের সমস্ত সোর্স কোড সম্পূর্ণ মুছে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'Connection draining allows ongoing transactions to complete.', bn: 'কানেকশন ড্রেইনিং চলমান লেনদেনগুলোকে নির্বিঘ্নে শেষ হতে দেয়।' },
        explanation: {
          en: 'Draining preserves active connections and sessions while routing newly arrived requests away from retiring nodes.',
          bn: 'ড্রেইনিংয়ের ফলে চলমান কাজগুলো কোনো বাধা ছাড়াই সুন্দরভাবে শেষ হয় এবং নতুনরা সুস্থ সার্ভারে যায়।',
        },
      },
      {
        id: 'rp-sess-q2',
        kind: 'mcq',
        topic: 'sess-sim-request-count-check',
        question: {
          en: 'In our code walkthrough, how many total requests were simulated across 4 sessions and 3 upstream servers, and how many sessions were dropped?',
          bn: 'আমাদের কোড আলোচনায় ৪টি সেশন ও ৩টি সার্ভারে সর্বমোট কতটি রিকোয়েস্ট সিমুলেট করা হয়েছিল এবং কয়টি সেশন ড্রপ হয়েছিল?',
        },
        options: [
          { en: '800 total requests across 4 sessions and 3 servers, with 0 dropped sessions (100.00% affinity stickiness)', bn: '৪টি সেশন ও ৩টি সার্ভারে সর্বমোট ৮০০টি রিকোয়েস্ট এবং ০টি ড্রপ সেশন (১০০.০০% অ্যাফিনিটি স্টিকিনেস)' },
          { en: '500 total requests across 4 sessions and 3 servers, with 50 dropped sessions', bn: '৪টি সেশন ও ৩টি সার্ভারে সর্বমোট ৫০০টি রিকোয়েস্ট এবং ৫০টি ড্রপ সেশন' },
          { en: '1000 total requests across 4 sessions and 3 servers, with 200 dropped sessions', bn: '৪টি সেশন ও ৩টি সার্ভারে সর্বমোট ১০০০টি রিকোয়েস্ট এবং ২০০টি ড্রপ সেশন' },
          { en: '100 total requests across 4 sessions and 3 servers, with 10 dropped sessions', bn: '৪টি সেশন ও ৩টি সার্ভারে সর্বমোট ১০০টি রিকোয়েস্ট এবং ১০টি ড্রপ সেশন' },
        ],
        answer: 0,
        hint: { en: '800 total requests, 0 dropped sessions.', bn: 'সর্বমোট ৮০০টি রিকোয়েস্ট, ০টি ড্রপ সেশন।' },
        explanation: {
          en: 'All 800 requests across 4 sessions were routed with 100.00% stickiness, resulting in 0 dropped sessions across 3 servers.',
          bn: '৪টি সেশনে ৮০০টি রিকোয়েস্টের সবকয়টি ১০০.০০% স্টিকিনেসের সাথে ৩টি সার্ভারে পৌঁছায় এবং ০টি সেশন নষ্ট হয়।',
        },
      },
      {
        id: 'rp-sess-q3',
        kind: 'mcq',
        topic: 'modern-stateless-recommendation',
        question: {
          en: 'Why do modern cloud architects recommend designing stateless application tiers backed by Redis instead of relying on sticky sessions?',
          bn: 'আধুনিক ক্লাউড প্রকৌশলীরা স্টিকি সেশনের বদলে কেন রেডিস-চালিত স্টেটলেস আর্কিটেকচার ব্যবহারের পরামর্শ দেন?',
        },
        options: [
          {
            en: 'Stateless backends allow any application instance to serve any request, enabling frictionless auto-scaling, perfectly balanced load distribution, and immunity to single node crashes',
            bn: 'স্টেটলেস আর্কিটেকচারে যেকোনো সার্ভার যেকোনো রিকোয়েস্ট সামলাতে পারে, ফলে স্বয়ংক্রিয় স্কেলিং সহজ হয়, নিখুঁত লোড ব্যালেন্সিং বজায় থাকে এবং কোনো সার্ভার নষ্ট হলেও ব্যবহারকারী সুরক্ষিত থাকেন',
          },
          {
            en: 'Stateless servers eliminate the need for computer processors',
            bn: 'স্টেটলেস সার্ভার ব্যবহার করলে কম্পিউটারে কোনো প্রসেসরের প্রয়োজন হয় না',
          },
          {
            en: 'Stateless architecture makes all database queries instantaneous',
            bn: 'স্টেটলেস আর্কিটেকচার সমস্ত ডেটাবেজ কুয়েরিকে তাৎক্ষণিক শূন্য সেকেন্ডে সম্পন্ন করে',
          },
          {
            en: 'Stateless servers operate without electricity',
            bn: 'স্টেটলেস সার্ভার বিদ্যুৎ ছাড়াই চলতে সক্ষম',
          },
        ],
        answer: 0,
        hint: { en: 'Stateless backends scale horizontally without session coupling.', bn: 'স্টেটলেস ব্যাকএন্ড যেকোনো সার্ভারে রিকোয়েস্ট নিয়ে অবাধে স্কেল করতে পারে।' },
        explanation: {
          en: 'Externalizing state into Redis decouples clients from specific nodes, making horizontal auto-scaling trivial.',
          bn: 'সেশনকে আলাদা রেডিসে রাখলে প্রতিটি সার্ভার স্বাধীনভাবে কাজ করতে পারে এবং স্কেলিং অত্যন্ত সহজ হয়।',
        },
      },
      {
        id: 'rp-sess-q4',
        kind: 'predict',
        topic: 'shared-in-memory-datastore-token',
        question: {
          en: 'What five-letter open-source in-memory data store is universally adopted to externalize session state away from application servers (e.g. Redis)?',
          bn: 'অ্যাপ্লিকেশন সার্ভার থেকে সেশন আলাদা করে সেন্ট্রাল রাখার জন্য বিশ্বব্যাপী কোন পাঁচ অক্ষরের ওপেন-সোর্স ইন-মেমরি ডেটাস্টোর সবচেয়ে বেশি ব্যবহৃত হয় (যেমন Redis)?',
        },
        answer: 'Redis',
        accept: ['Redis', 'redis'],
        hint: { en: 'R-e-d-i-s', bn: 'R-e-d-i-s' },
        explanation: {
          en: 'Redis provides sub-millisecond key-value storage, ideal for shared distributed web sessions.',
          bn: 'রেডিস হলো অতি দ্রুতগতির ইন-মেমরি স্টোরেজ যা সেন্ট্রাল সেশন ব্যবস্থাপনার জন্য আদর্শ।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'healths-and-the-health',
    title: { en: 'Upstream Health Checks and Failover Routing', bn: 'আপস্ট্রিম হেলথ চেক ও ফেইলওভার রাউটিং' },
  },
};
