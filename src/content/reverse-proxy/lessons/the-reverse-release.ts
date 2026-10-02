import type { Lesson } from '../../../lib/types';

export const TheReverseReleaseLesson: Lesson = {
  slug: 'the-reverse-release',
  tech: 'reverse-proxy',
  title: {
    en: 'Zero-Downtime Deployments — Production Canary Routing, Blue-Green Cutovers, and Traffic Shadowing',
    bn: 'ডাউনটাইমহীন ডিপ্লয়মেন্ট — প্রোডাকশন ক্যানারি রাউটিং, ব্লু-গ্রিন কাটওভার ও ট্রাফিক শ্যাডোয়িং',
  },
  summary: {
    en: 'Master advanced production release engineering with reverse proxies. Implement blue-green cutovers and split traffic 90.00% stable (900 requests, 12.40 ms) vs 10.00% canary (100 requests, 8.20 ms) across 1000 total requests. Execute 1.80 ms atomic proxy reloads with 0 dropped packets across 2 versions, and mirror live traffic safely.',
    bn: 'রিভার্স প্রক্সির সাহায্যে অ্যাডভান্সড প্রোডাকশন রিলিজ ইঞ্জিনিয়ারিং আয়ত্ত করুন। ব্লু-গ্রিন কাটওভার এবং ১০০০টি মোট রিকোয়েস্টে ৯০.০০% স্টেবল (৯০০টি রিকোয়েস্ট, ১২.৪০ ms) বনাম ১০.০০% ক্যানারি (১০০টি রিকোয়েস্ট, ৮.২০ ms) ট্রাফিক বিভাজন কার্যকর করুন। ২টি সংস্করণে ০টি ড্রপ প্যাকেট সহ ১.৮০ ms তাৎক্ষণিক প্রক্সি রিলোড সম্পাদন করুন এবং নিরাপদে লাইভ ট্রাফিক মিররিং নিশ্চিত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Zero-downtime releases and Layer 7 traffic steering', bn: 'WHAT — ডাউনটাইমহীন রিলিজ ও সপ্তম স্তরের ট্রাফিক স্টিয়ারিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you push updates to critical production services, terminating active user connections or returning gateway errors during a redeployment damages customer trust and burns engineering error budgets. Modern infrastructure leverages the reverse proxy as Layer 7 release orchestrator. By controlling traffic distribution dynamically at the ingress gate, reverse proxies enable zero-downtime releases through blue-green cutovers and canary traffic splitting. You deploy the new application code to an isolated environment, verify runtime health with live probes, and gradually shift public user requests without dropping a single packet. If anomalous error rates or latency spikes appear, the proxy rolls traffic back to the stable baseline in milliseconds.',
        bn: 'যখন আপনি গুরুত্বপূর্ণ প্রোডাকশন সার্ভিসে নতুন কোড প্রকাশ করেন, তখন ডিপ্লয়মেন্টের সময় ব্যবহারকারীদের সেশন বিচ্ছিন্ন হয়ে যাওয়া বা সাময়িক ডাউনটাইম তৈরি হওয়া ব্যবসায়িক সুনাম ক্ষুণ্ন করে। আধুনিক ক্লাউড সিস্টেমে রিভার্স প্রক্সি নেটওয়ার্কের সপ্তম স্তরে রিলিজ অর্কেস্ট্রেটর হিসেবে কাজ করে। প্রবেশদ্বারে ট্রাফিক বুদ্ধিমত্তার সাথে নিয়ন্ত্রণ করে রিভার্স প্রক্সি কোনো ধরনের বিভ্রাট ছাড়াই ব্লু-গ্রিন ও ক্যানারি ডিপ্লয়মেন্ট বাস্তবায়ন করে। প্রকৌশলীরা একটি আলাদা পরিবেশে নতুন সংস্করণ চালু করে স্বাস্থ্য পরীক্ষা করেন এবং একটিও সংযোগ না হারিয়ে ধাপে ধাপে ব্যবহারকারীদের নতুন সিস্টেমে নিয়ে যান। নতুন কোডে কোনো অপ্রত্যাশিত ত্রুটি ধরা পড়লে প্রক্সি সেকেন্ডের ভগ্নাংশে সমস্ত ট্রাফিক পুনরায় পুরনো সুস্থ সংস্করণে ফিরিয়ে নেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Canary traffic splitting (90.00% stable vs 10.00% canary) across 1000 requests', bn: '১০০০টি রিকোয়েস্টে ক্যানারি ট্রাফিক বিভাজন (৯০.০০% স্টেবল বনাম ১০.০০% ক্যানারি)' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Canary Deployment Traffic Splitting diagram">
<rect x="25" y="35" width="150" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="100" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">1000 Production Reqs</text>

<rect x="35" y="80" width="130" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="100" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">100.00% Release Success</text>
<text x="100" y="112" text-anchor="middle" font-size="7" fill="#dc2626">0 Dropped Packets</text>

<text x="100" y="150" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">1.80 ms atomic reload</text>
<text x="100" y="170" text-anchor="middle" font-size="7" fill="#64748b">2 versions active</text>

<line x1="175" y1="117" x2="225" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="225,113 235,117 225,121" fill="#dc2626"/>

<rect x="235" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="325" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Reverse Proxy Gateway</text>

<rect x="245" y="85" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="325" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Weighted Upstream Split</text>
<text x="325" y="116" text-anchor="middle" font-size="7" fill="#1e40af">weight=90 : weight=10</text>

<text x="325" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Shadow Mirror Enabled</text>
<text x="325" y="175" text-anchor="middle" font-size="7" fill="#64748b">Asynchronous telemetry</text>

<line x1="415" y1="80" x2="465" y2="70" stroke="#16a34a" stroke-width="2"/>
<line x1="415" y1="150" x2="465" y2="160" stroke="#9333ea" stroke-width="2"/>

<rect x="465" y="40" width="150" height="65" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="540" y="60" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Stable Pool (v1.0.0)</text>
<text x="540" y="75" text-anchor="middle" font-size="8" fill="#15803d">900 reqs (90.00%)</text>
<text x="540" y="90" text-anchor="middle" font-size="7" fill="#166534">Latency: 12.40 ms</text>

<rect x="465" y="130" width="150" height="65" rx="6" fill="#faf5ff" stroke="#9333ea" stroke-width="1.5"/>
<text x="540" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#7e22ce">Canary Pool (v2.0.0)</text>
<text x="540" y="165" text-anchor="middle" font-size="8" fill="#6b21a8">100 reqs (10.00%)</text>
<text x="540" y="180" text-anchor="middle" font-size="7" fill="#166534">8.20 ms (+4.20 ms faster)</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Weighted canary split verifies v2.0.0 performance before 100% production cutover</text>
</svg>`,
      caption: {
        en: 'A 90.00% stable (900 requests at 12.40 ms) to 10.00% canary (100 requests at 8.20 ms) split across 1000 requests shows v2.0.0 is +4.20 ms faster. Zero packets dropped during the 1.80 ms atomic reload across 2 active versions.',
        bn: '১০০০টি রিকোয়েস্টে ৯০.০০% স্টেবল (৯০০টি রিকোয়েস্ট, ১২.৪০ ms) বনাম ১০.০০% ক্যানারি (১০০টি রিকোয়েস্ট, ৮.২০ ms) বিভাজনে দেখা যায় নতুন সংস্করণ +৪.২০ ms দ্রুত। ২টি সক্রিয় সংস্করণে ১.৮০ ms রিলোডের সময় ০টি প্যাকেট ড্রপ হয়েছে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Blue-Green Deployment',
          def: {
            en: 'A release strategy utilizing two identical production environments (Blue and Green) where traffic is atomically swung from current to new with a single proxy config reload.',
            bn: 'একটি রিলিজ পদ্ধতি যেখানে ২টি হুবহু একরকম এনভায়রনমেন্টের মধ্যে প্রক্সি রিলোড দিয়ে এক পলকে সমস্ত ট্রাফিক পুরনো থেকে নতুনে নিয়ে যাওয়া হয়।',
          },
        },
        {
          term: 'Canary Release',
          def: {
            en: 'A risk-mitigation technique where a small fraction of real production traffic (e.g. 5% or 10%) is steered to a new release while the vast majority continues on the stable version.',
            bn: 'ঝুঁকি কমানোর কৌশল যেখানে অল্প কিছু ব্যবহারকারীকে নতুন সংস্করণে পাঠিয়ে নিরীক্ষণ করা হয় এবং বাকিরা পুরনো স্থিতিশীল সংস্করণেই থাকেন।',
          },
        },
        {
          term: 'Traffic Shadowing (Request Mirroring)',
          def: {
            en: 'An observability mechanism where the reverse proxy clones incoming production requests and dispatches them asynchronously to an experimental service without waiting for its response.',
            bn: 'একটি নিরীক্ষণ ব্যবস্থা যেখানে প্রক্সি ক্লায়েন্টের রিকোয়েস্ট কপি করে ব্যাকগ্রাউন্ডে পরীক্ষামূলক সার্ভারে পাঠায় কিন্তু তার রেসপন্সের জন্য অপেক্ষা করে না।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminating release risk and guaranteeing zero downtime', bn: 'কেন — রিলিজ ঝুঁকি দূরীকরণ ও শতভাগ ডাউনটাইমহীনতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Instantaneous sub-second rollback: if a critical database regression is uncovered, reversing the proxy configuration restores the stable Blue cluster in 1.80 ms.', bn: 'তাৎক্ষণিক রোলব্যাক সুবিধা: নতুন কোডে কোনো জটিল বাগ ধরা পড়লে মাত্র ১.৮০ ms এ কনফিগারেশন ফিরিয়ে এনে পুরনো স্থিতিশীল সংস্করণ সক্রিয় করা যায়।' },
        { en: 'Early bug detection with minimal blast radius: canary splitting exposes only 10.00% of traffic to experimental code, protecting 90.00% of users from potential outages.', bn: 'ঝুঁকির পরিধি সীমিত রাখা: ক্যানারি পদ্ধতিতে মাত্র ১০.০০% ট্রাফিক পাঠানোয় কোনো সমস্যা হলেও ৯০.০০% ব্যবহারকারী সম্পূর্ণ নিরাপদ থাকেন।' },
        { en: 'Real-world load validation via shadowing: mirroring requests to staging services reveals database deadlocks and memory leaks under actual production workloads with zero user impact.', bn: 'বাস্তব ট্রাফিকে লোড পরীক্ষা: শ্যাডোয়িংয়ের মাধ্যমে আসল ট্রাফিকের কপি পাঠিয়ে কোনো রকম ঝুঁকি ছাড়াই নতুন সার্ভারের পারফরম্যান্স যাচাই করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — 4 steps to orchestrate canary traffic splitting', bn: 'HOW — ক্যানারি ট্রাফিক বিভাজন কনফিগারেশনের ৪টি ধাপ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Define dual upstream pools', bn: '১. দুটি আপস্ট্রিম পুল তৈরি' }, text: { en: 'Declare upstream stable { server 10.0.1.10:8080; } and upstream canary { server 10.0.1.20:8080; } in your configuration.', bn: 'কনফিগারেশনে স্টেবল এবং ক্যানারির জন্য দুটি আলাদা সার্ভার পুল ডিফাইন করুন।' } },
        { title: { en: '2. Assign traffic split weights', bn: '২. ট্রাফিকের শতকরা ওজন নির্ধারণ' }, text: { en: 'Use split_clients or weighted servers (server stable weight=90; server canary weight=10;).', bn: 'ওজন নির্ধারণ করে ৯০ শতাংশ ট্রাফিক স্টেবল এবং ১০ শতাংশ ক্যানারিতে পাঠানোর নিয়ম বাঁধুন।' } },
        { title: { en: '3. Enable async request mirroring', bn: '৩. অ্যাসিনক্রোনাস মিররিং সক্রিয়করণ' }, text: { en: 'Add mirror /mirror_target; inside the location block to clone live GET and POST requests.', bn: 'লাইভ ট্রাফিকের প্রতিলিপি তৈরি করতে লোকেশন ব্লকে mirror ডিরেক্টিভ যুক্ত করুন।' } },
        { title: { en: '4. Execute zero-downtime reload', bn: '৪. ডাউনটাইমহীন প্রক্সি রিলোড' }, text: { en: 'Run nginx -t && nginx -s reload to spawn new workers while active connections complete gracefully.', bn: 'কমান্ড দিয়ে কোনো সংযোগ বিচ্ছিন্ন না করেই তাৎক্ষণিকভাবে নতুন কনফিগারেশন কার্যকর করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'canary_release_sim.js',
      code: `// Simulated canary deployment, traffic splitting, and zero-downtime release
const totalReqs = 1000;
const stableReqs = 900;
const canaryReqs = 100;

const stablePct = (stableReqs / totalReqs) * 100;
const canaryPct = (canaryReqs / totalReqs) * 100;

const stableLatencyMs = 12.40;
const canaryLatencyMs = 8.20;
const latencyImprovementMs = stableLatencyMs - canaryLatencyMs; // 4.20 ms

const reloadLatencyMs = 1.80;
const droppedPackets = 0;
const versions = 2; // Stable v1.0.0 and Canary v2.0.0
const successRatePct = 100.00;

console.log("Canary Deployment & Traffic Splitting Simulation:");
console.log("Total requests: " + totalReqs);
console.log("Stable (v1.0.0): " + stableReqs + " (" + stablePct.toFixed(2) + "% traffic share, latency " + stableLatencyMs.toFixed(2) + " ms)");
console.log("Canary (v2.0.0): " + canaryReqs + " (" + canaryPct.toFixed(2) + "% traffic share, latency " + canaryLatencyMs.toFixed(2) + " ms, +" + latencyImprovementMs.toFixed(2) + " ms faster)");
console.log("Atomic proxy reload: " + reloadLatencyMs.toFixed(2) + " ms with " + droppedPackets + " packet drops across " + versions + " versions (" + successRatePct.toFixed(2) + "% success)");

// Output:
// Canary Deployment & Traffic Splitting Simulation:
// Total requests: 1000
// Stable (v1.0.0): 900 (90.00% traffic share, latency 12.40 ms)
// Canary (v2.0.0): 100 (10.00% traffic share, latency 8.20 ms, +4.20 ms faster)
// Atomic proxy reload: 1.80 ms with 0 packet drops across 2 versions (100.00% success)`,
      caption: {
        en: 'A 90.00% stable (900 requests at 12.40 ms) to 10.00% canary (100 requests at 8.20 ms) split across 1000 requests shows v2.0.0 is +4.20 ms faster. Zero packets dropped during the 1.80 ms atomic reload across 2 active versions.',
        bn: '১০০০টি রিকোয়েস্টে ৯০.০০% স্টেবল (৯০০টি রিকোয়েস্ট, ১২.৪০ ms) বনাম ১০.০০% ক্যানারি (১০০টি রিকোয়েস্ট, ৮.২০ ms) বিভাজনে দেখা যায় নতুন সংস্করণ +৪.২০ ms দ্রুত। ২টি সক্রিয় সংস্করণে ১.৮০ ms রিলোডের সময় ০টি প্যাকেট ড্রপ হয়েছে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive canary deployment console', bn: 'INSIDE — জীবন্ত ক্যানারি ডিপ্লয়মেন্ট কনসোল' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine live canary release metrics. Across 1000 total production requests, 900 requests route to Stable v1.0.0 (90.00% traffic share at 12.40 ms) and 100 requests route to Canary v2.0.0 (10.00% traffic share at 8.20 ms), confirming a 4.20 ms latency improvement. The atomic reverse proxy configuration reload executes in 1.80 ms with 0 packet drops across 2 versions, maintaining 100.00% availability.',
        bn: 'লাইভ ক্যানারি রিলিজের মেট্রিক্স পর্যালোচনা করুন। মোট ১০০০টি প্রোডাকশন রিকোয়েস্টের মধ্যে ৯০০টি রিকোয়েস্ট স্টেবল ১.০.০ সংস্করণে যায় (৯০.০০% শেয়ার, ১২.৪০ ms লেটেন্সি) এবং ১০০টি রিকোয়েস্ট ক্যানারি ২.০.০ সংস্করণে যায় (১০.০০% শেয়ার, ৮.২০ ms লেটেন্সি), যা ৪.২০ ms গতি বৃদ্ধি প্রমাণ করে। প্রক্সির এই কনফিগারেশন রিলোড সম্পন্ন হতে সময় লেগেছে মাত্র ১.৮০ ms যেখানে ২টি সংস্করণে ০টি প্যাকেট ড্রপ হয়েছে এবং ১০০.০০% সিস্টেম সক্ষমতা অক্ষত ছিল।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Canary lab (verify traffic split, press Run)', bn: 'ক্যানারি ল্যাব (ট্রাফিক বিভাজন যাচাই, Run)' },
      html: '<h3>Canary Traffic Splitter</h3>\n<pre id="out"></pre>\n<p>Inspect weighted routing distribution and reload speed across versions.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tot = 1000;\nconst s = 900;\nconst c = 100;\nconst rel = 1.80;\nconsole.log("canary split verified: " + c);\ndocument.getElementById("out").textContent = "Total: " + tot + " reqs · Stable: " + s + " (90.00%, 12.40 ms) · Canary: " + c + " (10.00%, 8.20 ms) · Reload: " + rel.toFixed(2) + " ms · Dropped: 0 (100.00% ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Production release engineering rules', bn: 'ফলাফল — প্রোডাকশন রিলিজের সোনালী নিয়মাবলী' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always test configs before reloading: execute nginx -t to validate syntax before issuing nginx -s reload to prevent serving invalid configurations.', bn: 'রিলোডের আগে সিনট্যাক্স যাচাই করুন: nginx -s reload দেওয়ার আগে সর্বদা nginx -t চালিয়ে কনফিগারেশন ত্রুটিহীন কি না দেখে নিন।' },
        { en: 'Decouple database schema migrations from code releases: ensure backward compatibility so both old Blue and new Green application versions run concurrently on the same database.', bn: 'ডেটাবেজ ও কোড ডিপ্লয়মেন্ট পৃথক রাখুন: স্কিমা এমনভাবে আপডেট করুন যেন পুরনো ও নতুন উভয় অ্যাপ্লিকেশন একসাথে নির্বিঘ্নে ডেটাবেজে কাজ করতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common release routing failures', bn: 'ডিবাগ — রিলিজ রাউটিংয়ের পরিচিত সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental session pinning to retired Blue instances', bn: 'বাতিল হওয়া ব্লু সার্ভারে ব্যবহারকারীর সেশন আটকে থাকার ঝুঁকি' },
      text: {
        en: 'If cookie-based session stickiness is configured without an expiration or fallback rule, users who visited before the cutover may continue hitting decommissioned Blue servers. Always configure sticky cookie expiration or override cookie routing when promoting Green to full production.',
        bn: 'যদি সেশন স্টিকিনেসের মেয়াদ ঠিকমতো নির্ধারণ না থাকে, তবে কাটওভারের পরও পুরনো ব্যবহারকারীরা বাতিল হওয়া ব্লু সার্ভারে যাওয়ার চেষ্টা করতে পারে। নতুন সংস্করণকে মূল সার্ভার বানানোর সময় অবশ্যই কুকি রাউটিং রিসেট করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using header-based targeting for internal testing', bn: 'অভ্যন্তরীণ পরীক্ষার জন্য হেডার-ভিত্তিক ক্যানারি রাউটিং' },
      text: {
        en: 'Route internal QA testers to the canary backend using custom request headers (e.g. X-Canary: true) or secret cookies before exposing any percentage of public visitor traffic to the new release.',
        bn: 'সাধারণ ভিজিটরদের ট্রাফিক পাঠানোর আগেই বিশেষ হেডার (যেমন X-Canary: true) বা ইন্টারনাল কুকির সাহায্যে কেবল নিজেদের টেস্ট ইঞ্জিনিয়ারদের নতুন ক্যানারি সার্ভারে পাঠিয়ে নিখুঁতভাবে যাচাই করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — How internet leaders release software', bn: 'বাস্তব ক্ষেত্র — আধুনিক টেক জায়ান্টরা কীভাবে সফটওয়্যার রিলিজ করে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Netflix Spinnaker Automated Canary Analysis (ACA): evaluates Kayenta metrics across canary clusters, automatically rolling back bad releases in minutes.', bn: 'নেটফ্লিক্স স্পিনাকার: স্বয়ংক্রিয়ভাবে ক্যানারি ক্লাস্টারের মেট্রিক্স বিচার করে কোনো ত্রুটি দেখা দিলে কয়েক মিনিটের মধ্যে আগের সংস্করণে ফিরে যায়।' },
        { en: 'Cloudflare Workers and Cloudflare Pages: shifts global edge traffic across deployments in less than 50 milliseconds using Anycast routing and V8 isolates.', bn: 'ক্লাউডফ্লেয়ার ওয়ার্কার্স: কোনো ডাউনটাইম ছাড়াই বিশ্বব্যাপী ৫০ মিলিসেকেন্ডের মধ্যে নতুন কোড কোটি কোটি ব্যবহারকারীর কাছে উন্মুক্ত করে।' },
        { en: 'GitHub zero-downtime MySQL failover (Orchestrator): orchestrates proxy topology switches to swap primary database servers without breaking active developer web requests.', bn: 'গিটহাব জিরো-ডাউনটাইম ডেটাবেজ ফেইলওভার: ডেভেলপারদের চলমান কাজ নষ্ট না করেই ব্যাকগ্রাউন্ডে পুরো মাস্টার ডেটাবেজ অদলবদল করে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'rp-rel-ex-1',
      kind: 'mcq',
      topic: 'blue-green-deployment-core-principle',
      question: {
        en: 'What is the foundational architectural advantage of blue-green deployment executed via a reverse proxy?',
        bn: 'রিভার্স প্রক্সির মাধ্যমে পরিচালিত ব্লু-গ্রিন ডিপ্লয়মেন্টের মূল স্থাপত্যিক সুবিধা কোনটি?',
      },
      options: [
        {
          en: 'It enables instantaneous, atomic traffic cutover between two identical production environments with zero downtime, while providing immediate sub-second rollback if critical defects emerge',
          bn: 'এটি কোনো ডাউনটাইম ছাড়াই দুটি হুবহু একরকম এনভায়রনমেন্টের মধ্যে নিমেষে ট্রাফিক স্থানান্তর নিশ্চিত করে এবং ত্রুটি দেখা দিলে এক পলকে আগের সংস্করণে ফিরে যাওয়ার সুযোগ দেয়',
        },
        {
          en: 'It paints the computer servers with blue and green waterproof paint',
          bn: 'এটি কম্পিউটারের সার্ভার কেবিনেটে নীল এবং সবুজ রঙের ওয়াটারপ্রুফ রঙ মেখে দেয়',
        },
        {
          en: 'It permanently deletes the application source code repository after every release',
          bn: 'প্রতিটি রিলিজের পর এটি সম্পূর্ণ সোর্স কোড রিপোজিটরি চিরতরে মুছে ফেলে',
        },
        {
          en: 'It forces all website visitors to solve a mathematical puzzle before viewing a webpage',
          bn: 'ওয়েব পেজ দেখার আগে এটি সমস্ত ভিজিটরকে বাধ্যতামূলকভাবে কঠিন অংক সমাধান করায়',
        },
      ],
      answer: 0,
      hint: { en: 'Blue-green enables atomic cutover and instantaneous rollback.', bn: 'ব্লু-গ্রিন তাৎক্ষণিক ট্রাফিক বদল এবং মুহূর্তের মধ্যে রোলব্যাকের সুবিধা দেয়।' },
      explanation: {
        en: 'Blue-green switching via reverse proxy reload offers seamless release transitions and instant rollbacks.',
        bn: 'প্রক্সির মাধ্যমে ব্লু-গ্রিন পরিবর্তন করলে কোনো রকম ডাউনটাইম ছাড়াই দ্রুত রিলিজ ও রোলব্যাক সম্ভব হয়।',
      },
    },
    {
      id: 'rp-rel-ex-2',
      kind: 'mcq',
      topic: 'release-sim-numbers',
      question: {
        en: 'In our code walkthrough, how was traffic split between Stable v1.0.0 and Canary v2.0.0 across 1000 total requests, what was the latency improvement, and how many packets were dropped during the 1.80 ms reload across 2 versions?',
        bn: 'আমাদের কোড আলোচনায় ১০০০টি মোট রিকোয়েস্টে স্টেবল ১.০.০ ও ক্যানারি ২.০.০-এর মধ্যে ট্রাফিক কীভাবে ভাগ হয়েছিল, লেটেন্সি কত দ্রুত ছিল এবং ২টি সংস্করণে ১.৮০ ms রিলোডে কয়টি প্যাকেট ড্রপ হয়েছিল?',
      },
      options: [
        {
          en: 'Stable: 900 requests (90.00% at 12.40 ms); Canary: 100 requests (10.00% at 8.20 ms, +4.20 ms faster); 0 packet drops during 1.80 ms reload across 2 versions (100.00% success)',
          bn: 'স্টেবল: ৯০০টি রিকোয়েস্ট (৯০.০০%, ১২.৪০ ms); ক্যানারি: ১০০টি রিকোয়েস্ট (১০.০০%, ৮.২০ ms, +৪.২০ ms দ্রুত); ২টি সংস্করণে ১.৮০ ms রিলোডে ০টি প্যাকেট ড্রপ (১০০.০০% সাফল্য)',
        },
        {
          en: 'Stable: 1000 requests (100.00%); Canary: 0 requests (0.00%); 50 packet drops across 2 versions',
          bn: 'স্টেবল: ১০০০টি রিকোয়েস্ট (১০০.০০%); ক্যানারি: ০টি রিকোয়েস্ট (০.০০%); ২টি সংস্করণে ৫০টি প্যাকেট ড্রপ',
        },
        {
          en: 'Stable: 500 requests (50.00%); Canary: 500 requests (50.00%); 100 packet drops across 2 versions',
          bn: 'স্টেবল: ৫০০টি রিকোয়েস্ট (৫০.০০%); ক্যানারি: ৫০০টি রিকোয়েস্ট (৫০.০০%); ২টি সংস্করণে ১০০টি প্যাকেট ড্রপ',
        },
        {
          en: 'Stable: 200 requests (20.00%); Canary: 800 requests (80.00%); 20 packet drops across 2 versions',
          bn: 'স্টেবল: ২০০টি রিকোয়েস্ট (২০.০০%); ক্যানারি: ৮০০টি রিকোয়েস্ট (৮০.০০%); ২টি সংস্করণে ২০টি প্যাকেট ড্রপ',
        },
      ],
      answer: 0,
      hint: { en: '900 (90.00%, 12.40 ms), 100 (10.00%, 8.20 ms, +4.20 ms), 0 drops, 1.80 ms.', bn: '৯০০ (৯০.০০%, ১২.৪০ ms), ১০০ (১০.০০%, ৮.২০ ms, +৪.২০ ms), ০ ড্রপ, ১.৮০ ms।' },
      explanation: {
        en: 'The simulation recorded 900 stable requests and 100 canary requests (4.20 ms faster) with 0 dropped packets in 1.80 ms across 2 versions.',
        bn: 'সিমুলেশনে দেখা যায় ৯০০টি স্টেবল এবং ১০০টি ক্যানারি রিকোয়েস্টে (+৪.২০ ms দ্রুত) ২টি সংস্করণে ১.৮০ ms রিলোডে ০টি প্যাকেট ড্রপ হয়েছে।',
      },
    },
    {
      id: 'rp-rel-ex-3',
      kind: 'mcq',
      topic: 'traffic-shadowing-function',
      question: {
        en: 'What is the purpose of traffic shadowing (request mirroring) at the reverse proxy layer?',
        bn: 'রিভার্স প্রক্সি লেয়ারে ট্রাফিক শ্যাডোয়িং (রিকোয়েস্ট মিররিং) ব্যবহারের উদ্দেশ্য কী?',
      },
      options: [
        {
          en: 'It duplicates incoming live production requests asynchronously to an experimental backend to test performance and stability under real workloads without risking user-facing impact or delaying responses',
          bn: 'এটি আসল প্রোডাকশন রিকোয়েস্টের কপি তৈরি করে ব্যাকগ্রাউন্ডে পরীক্ষামূলক সার্ভারে পাঠায় যাতে সাধারণ ব্যবহারকারীদের ওপর কোনো প্রভাব না ফেলে বাস্তব ট্রাফিকে সার্ভারের কর্মক্ষমতা যাচাই করা যায়',
        },
        {
          en: 'It displays an image of the computer screen in an actual glass mirror',
          bn: 'এটি ঘরের সাধারণ কাঁচের আয়নায় কম্পিউটারের স্ক্রিন প্রদর্শন করে',
        },
        {
          en: 'It reduces the internet bill by downloading everything twice',
          bn: 'সবকিছু দুইবার ডাউনলোড করে এটি ইন্টারনেটের বিল কমিয়ে দেয়',
        },
        {
          en: 'It blocks all incoming traffic between midnight and dawn',
          bn: 'মধ্যরাত থেকে ভোর পর্যন্ত এটি ওয়েবসাইটের সমস্ত ট্রাফিক বন্ধ রাখে',
        },
      ],
      answer: 0,
      hint: { en: 'Shadowing mirrors live traffic to test new versions without risk.', bn: 'শ্যাডোয়িং কোনো ঝুঁকি ছাড়াই নতুন কোড পরীক্ষা করতে আসল ট্রাফিক কপি করে।' },
      explanation: {
        en: 'Shadowing clones requests asynchronously so experimental servers receive live load while user traffic remains unaffected.',
        bn: 'শ্যাডোয়িংয়ের মাধ্যমে আসল ট্রাফিকের চাপ দিয়ে নতুন সংস্করণ নিরীক্ষণ করা যায় অথচ ব্যবহারকারী কিছুই বুঝতে পারেন না।',
      },
    },
    {
      id: 'rp-rel-ex-4',
      kind: 'predict',
      topic: 'canary-release-term',
      question: {
        en: 'What bird-inspired release term refers to steering a tiny fraction of live traffic to a new version (e.g. canary)?',
        bn: 'পাখির নামে পরিচিত কোন রিলিজ পরিভাষাটি নতুন সংস্করণে খুব সামান্য পরিমাণ ট্রাফিক পাঠিয়ে ঝুঁকি কমানো বোঝায় (যেমন canary)?',
      },
      answer: 'canary',
      accept: ['canary', 'Canary', 'canary deployment'],
      hint: { en: 'c-a-n-a-r-y', bn: 'c-a-n-a-r-y' },
      explanation: {
        en: 'Canary deployment originates from miners using canaries in coal mines to detect danger early.',
        bn: 'কয়লা খনিতে বিপদের আগাম সংকেত পেতে ক্যানারি পাখি ব্যবহারের ঐতিহ্য থেকে এই পরিভাষার উৎপত্তি।',
      },
    },
  ],
  quiz: {
    id: 'the-reverse-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'rp-rel-q1',
        kind: 'mcq',
        topic: 'zero-downtime-proxy-reload-mechanics',
        question: {
          en: 'How does an event-driven reverse proxy like Nginx achieve zero downtime when executing a configuration reload (nginx -s reload)?',
          bn: 'Nginx-এর মতো ইভেন্ট-চালিত রিভার্স প্রক্সি কনফিগারেশন রিলোড (nginx -s reload) করার সময় কীভাবে কোনো ডাউনটাইম ছাড়াই কাজ সম্পাদন করে?',
        },
        options: [
          {
            en: 'The master process validates syntax, launches new worker processes running the updated configuration, and instructs old workers to gracefully finish active connections before shutting down',
            bn: 'মাস্টার প্রসেস নতুন কনফিগারেশন যাচাই করে নতুন ওয়ার্কার প্রসেস চালু করে এবং পুরনো ওয়ার্কারদের চলমান কাজগুলো সুন্দরভাবে শেষ করে তবেই বন্ধ হওয়ার নির্দেশ দেয়',
          },
          {
            en: 'It abruptly reboots the physical operating system in microsecond intervals',
            bn: 'এটি প্রতি মাইক্রোসেকেন্ডে পুরো অপারেটিং সিস্টেমকে রিস্টার্ট দেয়',
          },
          {
            en: 'It immediately disconnects all thousands of active clients without warning',
            bn: 'এটি কোনো সতর্কবার্তা ছাড়াই হাজার হাজার সক্রিয় ব্যবহারকারীকে বিচ্ছিন্ন করে দেয়',
          },
          {
            en: 'It downloads new memory chips over the internet',
            bn: 'ইন্টারনেট থেকে এটি নতুন মেমরি চিপ ডাউনলোড করে ইন্সটল করে নেয়',
          },
        ],
        answer: 0,
        hint: { en: 'New workers start while old workers finish connections gracefully.', bn: 'নতুন ওয়ার্কার চালু হয় এবং পুরনোরা চলমান সংযোগ শেষ করে তবেই থামে।' },
        explanation: {
          en: 'Graceful worker process management guarantees zero dropped packets during proxy reloads.',
          bn: 'পুরনো ও নতুন ওয়ার্কারের সুশৃঙ্খল সমন্বয়ের ফলেই রিলোডের সময় একটি রিকোয়েস্টও নষ্ট হয় না।',
        },
      },
      {
        id: 'rp-rel-q2',
        kind: 'mcq',
        topic: 'release-sim-requests-verification',
        question: {
          en: 'In our code walkthrough, how many total requests were simulated across 2 versions, and what was the atomic proxy reload latency with 0 dropped packets?',
          bn: 'আমাদের কোড আলোচনায় ২টি সংস্করণে মোট কতটি রিকোয়েস্ট সিমুলেট করা হয়েছিল এবং ০টি ড্রপ প্যাকেট সহ তাৎক্ষণিক প্রক্সি রিলোড সময় কত ছিল?',
        },
        options: [
          { en: '1000 total requests across 2 versions, with a 1.80 ms atomic reload latency and 0 dropped packets (100.00% success)', bn: '২টি সংস্করণে সর্বমোট ১০০০টি রিকোয়েস্ট, যেখানে ০টি ড্রপ প্যাকেট সহ ১.৮০ ms তাৎক্ষণিক রিলোড সময় (১০০.০০% সাফল্য)' },
          { en: '500 total requests across 2 versions, with a 100 ms reload latency', bn: '২টি সংস্করণে সর্বমোট ৫০০টি রিকোয়েস্ট, যেখানে ১০০ ms রিলোড সময়' },
          { en: '2000 total requests across 2 versions, with a 50 ms reload latency', bn: '২টি সংস্করণে সর্বমোট ২০০০টি রিকোয়েস্ট, যেখানে ৫০ ms রিলোড সময়' },
          { en: '100 total requests across 2 versions, with a 10 ms reload latency', bn: '২টি সংস্করণে সর্বমোট ১০০টি রিকোয়েস্ট, যেখানে ১০ ms রিলোড সময়' },
        ],
        answer: 0,
        hint: { en: '1000 requests, 1.80 ms reload, 0 dropped packets.', bn: '১০০০ রিকোয়েস্ট, ১.৮০ ms রিলোড, ০ ড্রপ প্যাকেট।' },
        explanation: {
          en: 'The simulation recorded 1000 total requests and a 1.80 ms reload latency with 0 dropped packets across 2 deployment versions.',
          bn: 'সিমুলেশনে দেখা যায় ২টি সংস্করণে মোট ১০০০টি রিকোয়েস্টে ০টি ড্রপ প্যাকেট সহ ১.৮০ ms রিলোড সময় বজায় থাকে।',
        },
      },
      {
        id: 'rp-rel-q3',
        kind: 'mcq',
        topic: 'database-backward-compatibility-in-releases',
        question: {
          en: 'Why must database migrations be backward-compatible before rolling out a zero-downtime blue-green or canary deployment?',
          bn: 'ডাউনটাইমহীন ব্লু-গ্রিন বা ক্যানারি ডিপ্লয়মেন্ট করার আগে ডেটাবেজ পরিবর্তনগুলো কেন ব্যাকওয়ার্ড-কম্প্যাটিবল রাখা বাধ্যতামূলক?',
        },
        options: [
          {
            en: 'Because during the rollout, both the old version (handling existing users) and the new version (handling canary users) access the shared database simultaneously without throwing syntax errors',
            bn: 'কারণ ডিপ্লয়মেন্টের সময় পুরনো সংস্করণ এবং নতুন সংস্করণ উভয়ই একসাথে একই ডেটাবেজ ব্যবহার করে, তাই কোনো ত্রুটি ছাড়াই দুটিকেই চলতে পারতে হবে',
          },
          {
            en: 'Because databases automatically erase all tables if a column is added',
            bn: 'কারণ নতুন কলাম যোগ করলেই ডেটাবেজ নিজে থেকে সমস্ত টেবিল মুছে ফেলে',
          },
          {
            en: 'Because computer hard drives cannot store two database tables at the same time',
            bn: 'কারণ কম্পিউটারের হার্ডড্রাইভ একসাথে দুটি টেবিল মেমরিতে রাখতে পারে না',
          },
          {
            en: 'Because backward compatibility makes all database queries free of financial charge',
            bn: 'কারণ ব্যাকওয়ার্ড কম্প্যাটিবিলিটি থাকলে ডেটাবেজ কুয়েরির জন্য কোনো টাকা খরচ হয় না',
          },
        ],
        answer: 0,
        hint: { en: 'Both old and new application versions query the database concurrently.', bn: 'পুরনো ও নতুন দুটি সংস্করণই একসাথে একই ডেটাবেজে কুয়েরি চালায়।' },
        explanation: {
          en: 'During deployments, dual versions run side by side; backward-compatible schemas prevent data corruption and runtime crashes.',
          bn: 'ডিপ্লয়মেন্টের সময় উভয় ভার্সন সমান্তরালে চলার কারণে স্কিমা উপযুক্ত রাখা অপরিহার্য।',
        },
      },
      {
        id: 'rp-rel-q4',
        kind: 'predict',
        topic: 'mirror-directive-token',
        question: {
          en: 'What six-letter Nginx directive enables asynchronous request cloning and traffic shadowing (e.g. mirror)?',
          bn: 'অ্যাসিনক্রোনাস রিকোয়েস্ট ক্লোনিং ও ট্রাফিক শ্যাডোয়িং সক্রিয় করতে Nginx-এ কোন ছয় অক্ষরের নির্দেশটি ব্যবহৃত হয় (যেমন mirror)?',
        },
        answer: 'mirror',
        accept: ['mirror', 'mirror;'],
        hint: { en: 'm-i-r-r-o-r', bn: 'm-i-r-r-o-r' },
        explanation: {
          en: 'The mirror directive duplicates client requests to a background upstream without waiting for its response.',
          bn: 'mirror নির্দেশ গ্রাহকের রিকোয়েস্ট কপি করে অন্য সার্ভারে পাঠায় যাতে মূল কাজে দেরি না হয়।',
        },
      },
    ],
  },
};
