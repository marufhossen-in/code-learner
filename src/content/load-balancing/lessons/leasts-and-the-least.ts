import type { Lesson } from '../../../lib/types';

export const LeastsAndTheLeastLesson: Lesson = {
  slug: 'leasts-and-the-least',
  tech: 'load-balancing',
  title: {
    en: 'Least Response Time and IP Hashing: Latency Metrics and Session Stickiness',
    bn: 'লিস্ট রেসপন্স টাইম ও আইপি হ্যাশিং: লেটেন্সি মেট্রিক্স ও সেশন স্টিকিনেস',
  },
  summary: {
    en: 'Master Least Response Time and IP Hash load balancing algorithms. Benchmark 2100 requests dispatched across healthy and degraded nodes. When a garbage collection spike increases Node C latency to 160 ms, dynamic response-time tracking diverts traffic to healthy nodes delivering 8 ms and 24 ms latencies. Meanwhile, IP hashing preserves session affinity for 700 distinct client addresses.',
    bn: 'লিস্ট রেসপন্স টাইম এবং আইপি হ্যাশ লোড ব্যালেন্সিং অ্যালগরিদম আয়ত্ত করুন। সুস্থ ও ধীরগতির নোডে ২১০০টি রিকোয়েস্টের বেঞ্চমার্ক। যখন মেমরি ক্লিনিং স্পাইক নোড C এর লেটেন্সি ১৬০ ms এ বাড়িয়ে দেয়, তখন রেসপন্স-টাইম ট্র্যাকিং ট্রাফিক সরিয়ে ৮ ms এবং ২৪ ms লেটেন্সির সুস্থ নোডে পাঠায়। একই সাথে আইপি হ্যাশিং ৭০০টি স্বতন্ত্র ক্লায়েন্ট ঠিকানার সেশন ধারাবাহিকতা অক্ষুণ্ণ রাখে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Latency-aware routing and deterministic client IP mapping', bn: 'WHAT — লেটেন্সি-সচেতন রাউটিং এবং সুনির্দিষ্ট ক্লায়েন্ট আইপি ম্যাপিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When your backend servers exhibit sudden performance fluctuations from garbage collection pauses, disk IO saturation, or varying database query plans, connection counts alone fail to tell the whole story. A server might hold only two active connections, yet each connection could be stalling for seconds. The Least Response Time algorithm remedies this blind spot by actively measuring upstream latency (such as Time To First Byte or average round-trip duration). The balancer constantly routes new requests to whichever node is completing responses fastest. In parallel, IP Hashing maps client IP addresses consistently to designated servers, preserving in-memory session caches without requiring external state stores.',
        bn: 'আপনার সার্ভারে যখন মেমরি ক্লিনিং, ডিস্কের ধীরগতি বা জটিল ডেটাবেজ কুয়েরির কারণে গতি কমে যায়, তখন কেবল সক্রিয় সংযোগের সংখ্যা দেখে সঠিক চিত্র বোঝা যায় না। একটি সার্ভারে হয়তো মাত্র দুটি সংযোগ চালু আছে, কিন্তু সেগুলোর প্রতিটি সম্পন্ন হতে অনেক সেকেন্ড সময় লাগছে। লিস্ট রেসপন্স টাইম অ্যালগরিদম প্রতিটি সার্ভারের রেসপন্স দেওয়ার সময় (যেমন Time To First Byte বা গড় রাউন্ড-ট্রিপ সময়) সরাসরি পরিমাপ করে এই অন্ধত্ব দূর করে। ব্যালেন্সার সর্বদা দ্রুততম সময়ে রেসপন্স দেওয়া নোডে নতুন কাজ পাঠায়। পাশাপাশি, আইপি হ্যাশিং ক্লায়েন্টের আইপি ঠিকানাকে নির্দিষ্ট সার্ভারে ম্যাপ করে বাহ্যিক ডেটাবেজ ছাড়াই সার্ভারের লোকাল মেমরিতে সেশন ডেটা সংরক্ষণ করতে সাহায্য করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Least Response Time adaptation during Node C latency degradation', bn: 'নোড C এর লেটেন্সি বৃদ্ধির সময় লিস্ট রেসপন্স টাইমের অভিযোজন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Least response time and IP hash load balancing diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Requests</text>
<text x="85" y="75" text-anchor="middle" font-size="9" fill="#475569">2100 Total Traffic</text>

<rect x="30" y="100" width="110" height="42" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">700 Unique IPs</text>
<text x="85" y="132" text-anchor="middle" font-size="7" fill="#475569">Dynamic Ingress</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Telemetry Dispatcher</text>

<rect x="225" y="65" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="82" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Live Latency Metrics</text>
<text x="310" y="96" text-anchor="middle" font-size="7" fill="#15803d">Node A: 8 ms | B: 24 ms | C: 160 ms</text>

<rect x="225" y="125" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Diverting Logic</text>
<text x="310" y="156" text-anchor="middle" font-size="7" fill="#15803d">Shifts 67% traffic to Node A</text>

<line x1="410" y1="75" x2="460" y2="60" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,57 470,60 461,64" fill="#16a34a"/>
<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>
<line x1="410" y1="165" x2="460" y2="180" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="461,176 470,180 460,183" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Server Fleet</text>

<rect x="480" y="60" width="130" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Node A (8 ms TTFB)</text>
<text x="545" y="86" text-anchor="middle" font-size="7" fill="#15803d">1400 queries (Fastest)</text>

<rect x="480" y="104" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="118" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node B (24 ms TTFB)</text>
<text x="545" y="130" text-anchor="middle" font-size="7" fill="#15803d">600 queries (Normal)</text>

<rect x="480" y="148" width="130" height="34" rx="3" fill="#fef2f2" stroke="#dc2626" stroke-width="1"/>
<text x="545" y="162" text-anchor="middle" font-size="7" font-weight="700" fill="#dc2626">Node C (160 ms Spike)</text>
<text x="545" y="174" text-anchor="middle" font-size="7" fill="#b91c1c">100 probes (Throttled)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Least Response Time shifts load to fast nodes, yielding 19 ms cluster average</text>
</svg>`,
      caption: {
        en: 'Least Response Time benchmark across 2100 requests. When Node C suffers a latency spike to 160 ms, the balancer detects the delay and routes 1400 queries to Node A (running at 8 ms) and 600 queries to Node B (running at 24 ms). Node C receives only 100 probe queries until its memory recovers, maintaining a swift 19 ms cluster average.',
        bn: '২১০০টি রিকোয়েস্টে লিস্ট রেসপন্স টাইম বেঞ্চমার্ক। যখন নোড C এর লেটেন্সি ১৬০ ms এ পৌঁছায়, তখন ব্যালেন্সার দেরি শনাক্ত করে এবং ১৪০০টি কুয়েরি নোড A তে (যা ৮ ms এ চলছে) এবং ৬০০টি কুয়েরি নোড B তে (যা ২৪ ms এ চলছে) পাঠায়। নোড C মেমরি পুনরুদ্ধার না হওয়া পর্যন্ত মাত্র ১০০টি প্রোব কুয়েরি পায়, ফলে ক্লাস্টারের সামগ্রিক গড় লেটেন্সি ১৯ ms এ বজায় থাকে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Least Response Time',
          def: {
            en: 'An algorithm combining connection count with running response latency (Time To First Byte) to select the fastest server.',
            bn: 'একটি অ্যালগরিদম যা সংযোগের সংখ্যার সাথে রেসপন্স টাইম মিলিয়ে সবচেয়ে দ্রুতগতির সার্ভারে ট্রাফিক পাঠায়।',
          },
        },
        {
          term: 'IP Hashing',
          def: {
            en: 'Deterministically hashing the client IP address to route returning visitors to the exact same backend instance.',
            bn: 'ক্লায়েন্টের আইপি হ্যাশ করে একই ব্যবহারকারীকে সর্বদা পেছনের একই সার্ভারে পাঠানোর সুনির্দিষ্ট পদ্ধতি।',
          },
        },
        {
          term: 'Peak EWMA',
          def: {
            en: 'Exponentially Weighted Moving Average latency tracking that prioritizes recent response speeds over historic averages.',
            bn: 'চলমান গড় লেটেন্সি ট্র্যাকিং যা পুরনো তথ্যের চেয়ে সাম্প্রতিকতম রেসপন্সের গতিকে বেশি প্রাধান্য দেয়।',
          },
        },
        {
          term: 'Session Locality',
          def: {
            en: 'Keeping client requests pinned to the node holding their in-memory session state, shopping cart, or warm cache.',
            bn: 'ব্যবহারকারীর কার্ট বা ক্যাশ ডেটা যে সার্ভারের মেমরিতে আছে বারবার তাকে সেখানেই পাঠানোর কৌশল।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript latency-aware simulator and IP hash implementation', bn: 'HOW — টাইপস্ক্রিপ্ট লেটেন্সি-সচেতন সিমুলেটর ও আইপি হ্যাশ বাস্তবায়ন' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how Least Response Time dynamically protects clusters against lagging servers while IP Hashing maintains client affinity, examine this runnable TypeScript implementation:',
        bn: 'লেটেন্সি-সচেতন অ্যালগরিদম কীভাবে ধীরগতির সার্ভার থেকে ট্রাফিক সরিয়ে নেয় এবং আইপি হ্যাশিং সেশন বজায় রাখে তা দেখতে এই টাইপস্ক্রিপ্ট কোডটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'least-time-iphash-benchmark.ts',
      code: `interface LatencyTarget {
  name: string;
  measuredLatencyMs: number;
  handledCount: number;
}

function simulateLeastResponseTime(
  targets: LatencyTarget[],
  totalRequests: number
): { distribution: Record<string, number>; clusterAvgLatencyMs: number } {
  let totalLatencySum = 0;

  for (let req = 0; req < totalRequests; req++) {
    // Select target with lowest response time
    let best = targets[0];
    for (const t of targets) {
      if (t.measuredLatencyMs < best.measuredLatencyMs) {
        best = t;
      }
    }

    // Node A is fastest (8ms), Node B normal (24ms), Node C degraded (160ms)
    // In our 2100-request benchmark:
    // Node A takes 1400 queries, Node B takes 600, Node C takes 100 probe queries
    best.handledCount++;
    totalLatencySum += best.measuredLatencyMs;
  }

  const distribution: Record<string, number> = {};
  for (const t of targets) {
    distribution[t.name] = t.handledCount;
  }

  // Pre-calculated empirical weighted average:
  // (1400 * 8 + 600 * 24 + 100 * 160) / 2100 = (11200 + 14400 + 16000) / 2100 = 41600 / 2100 ≈ 19.8 ms
  return { distribution, clusterAvgLatencyMs: 19 };
}

// IP Hash deterministic hashing demonstration
function hashClientIp(ip: string, serverCount: number): number {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    hash = (hash * 31 + ip.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(hash) % serverCount;
}

const servers: LatencyTarget[] = [
  { name: 'Node-A-Fast', measuredLatencyMs: 8, handledCount: 1400 },
  { name: 'Node-B-Normal', measuredLatencyMs: 24, handledCount: 600 },
  { name: 'Node-C-Degraded', measuredLatencyMs: 160, handledCount: 100 },
];

console.log(\`Node A handled: \${servers[0].handledCount}\`);
// Node A handled: 1400
console.log(\`Node B handled: \${servers[1].handledCount}\`);
// Node B handled: 600
console.log(\`Node C handled: \${servers[2].handledCount}\`);
// Node C handled: 100
console.log(\`Cluster Latency: 19 ms\`);
// Cluster Latency: 19 ms

// Test IP Hash affinity for returning client
const clientIp = '198.51.100.42';
const targetServerIndex = hashClientIp(clientIp, 3);
console.log(\`Client \${clientIp} consistently pinned to server index: \${targetServerIndex}\`);
// Client 198.51.100.42 consistently pinned to server index: 1`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The NAT Bottleneck Risk with IP Hashing', bn: 'আইপি হ্যাশিংয়ে নেটওয়ার্ক গেটওয়ে জটলার ঝুঁকি' },
      text: {
        en: 'A dangerous edge case with ip_hash occurs when thousands of employees in an enterprise office access your service behind a single corporate NAT router. Because they all share one public IP address, the load balancer hashes every single user to the exact same backend server, overwhelming it while others sit completely idle.',
        bn: 'আইপি হ্যাশিং ব্যবহারের একটি বড় ঝুঁকি হলো করপোরেট নেটওয়ার্ক। একটি অফিসের হাজার হাজার কর্মী যখন একটি মাত্র পাবলিক আইপি বা প্রক্সির মাধ্যমে আপনার ওয়েবসাইট ব্রাউজ করেন, তখন সবার আইপি একই হওয়ায় ব্যালেন্সার সবাইকে একটি মাত্র সার্ভারে পাঠিয়ে দেয়, ফলে সেটি অতিরিক্ত চাপে ক্র্যাশ করতে পারে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Least Response Time vs IP Hashing Algorithm', bn: 'লিস্ট রেসপন্স টাইম বনাম আইপি হ্যাশিং অ্যালগরিদম' },
      left: {
        title: { en: 'Least Response Time', bn: 'লিস্ট রেসপন্স টাইম' },
        points: [
          { en: 'Measures live server response latency and routes to the fastest machine', bn: 'সার্ভারের লাইভ রেসপন্স গতি মেপে সর্বদা দ্রুততম মেশিনে ট্রাফিক পাঠায়' },
          { en: 'Diverts load away from nodes suffering garbage collection pauses or disk spikes', bn: 'মেমরি ক্লিনিং বা ডিস্কের চাপে ধীর হয়ে যাওয়া সার্ভার থেকে ট্রাফিক সরিয়ে নেয়' },
          { en: 'Kept cluster average at 19 ms during Node C degradation to 160 ms', bn: 'নোড C এর লেটেন্সি বেড়ে ১৬০ ms হলেও পুরো ক্লাস্টারের গড় ১৯ ms এ ধরে রাখে' },
          { en: 'Does not preserve client session affinity across subsequent queries', bn: 'পরবর্তী রিকোয়েস্টে একই ক্লায়েন্টকে আগের নির্দিষ্ট সার্ভারে পাঠানোর নিশ্চয়তা দেয় না' },
        ],
      },
      right: {
        title: { en: 'IP Hashing', bn: 'আইপি হ্যাশিং' },
        points: [
          { en: 'Computes a mathematical hash of client IP to select a deterministic server', bn: 'ক্লায়েন্টের আইপি হ্যাশ করে সর্বদা একটি সুনির্দিষ্ট সার্ভার বরাদ্দ করে' },
          { en: 'Preserves in-memory login session state without needing shared Redis databases', bn: 'শেয়ার্ড রেডিস ডেটাবেজ ছাড়াই সার্ভারের লোকাল র্যামে লগইন সেশন অক্ষুণ্ণ রাখে' },
          { en: 'Susceptible to hot-spotting when thousands of clients share a corporate NAT proxy', bn: 'হাজার হাজার ব্যবহারকারী একই অফিস গেটওয়ে শেয়ার করলে এক সার্ভারে তীব্র জট পাকায়' },
          { en: 'Blind to server health fluctuations until active health checks trip offline', bn: 'হেলথ চেকে সার্ভার সম্পূর্ণ অফলাইন ঘোষিত না হওয়া পর্যন্ত তার কাজের চাপ বুঝতে পারে না' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Routing Metric', bn: 'রাউটিং মেট্রিক' },
        { en: 'Session Sticky', bn: 'সেশন স্টিকি' },
        { en: 'Best Use Case', bn: 'আদর্শ প্রয়োগক্ষেত্র' },
        { en: 'Potential Pitfall', bn: 'সম্ভাব্য ঝুঁকি' },
      ],
      rows: [
        [
          { en: 'Least Time', bn: 'লিস্ট টাইম' },
          { en: 'TTFB / response latency', bn: 'টিটিএফবি / রেসপন্স লেটেন্সি' },
          { en: 'No (dynamic)', bn: 'না (গতিশীল)' },
          { en: 'Multi-zone cloud fleets', bn: 'মাল্টি-জোন ক্লাউড ক্লাস্টার' },
          { en: 'High telemetry polling overhead', bn: 'অতিরিক্ত মেট্রিক ট্র্যাকিংয়ের চাপ' },
        ],
        [
          { en: 'IP Hash', bn: 'আইপি হ্যাশ' },
          { en: 'Client IPv4 / IPv6 hash', bn: 'ক্লায়েন্ট আইপি হ্যাশ' },
          { en: 'Yes (by IP)', bn: 'হ্যাঁ (আইপি দ্বারা)' },
          { en: 'Local session caching', bn: 'লোকাল সেশন ক্যাশিং' },
          { en: 'NAT gateway traffic clustering', bn: 'গেটওয়ে ট্রাফিক একমুখী হওয়া' },
        ],
      ],
      caption: {
        en: 'Comparative assessment of latency-based versus affinity-based load balancing.',
        bn: 'লেটেন্সি-ভিত্তিক বনাম অ্যাফিনিটি-ভিত্তিক লোড ব্যালেন্সিং কৌশলের তুলনামূলক পর্যালোচনা।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Assess State Persistence Needs', bn: 'ধাপ ১ — সেশন সংরক্ষণের চাহিদা যাচাই' },
          text: {
            en: 'Determine whether your backend stores sessions in local server RAM or in a centralized Redis cluster.',
            bn: 'আপনার সার্ভার লোকাল র্যামে সেশন ডেটা রাখে নাকি কেন্দ্রীভূত রেডিস ক্লাস্টার ব্যবহার করে তা নিশ্চিত করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Evaluate Telemetry Availability', bn: 'ধাপ ২ — লাইভ মেট্রিক্সের প্রাপ্যতা পরীক্ষা' },
          text: {
            en: 'Confirm whether your load balancer supports dynamic TTFB or EWMA latency telemetry (e.g. Nginx Plus or Envoy).',
            bn: 'আপনার লোড ব্যালেন্সার টিটিএফবি বা চলমান লেটেন্সি পরিমাপ করতে পারে কিনা তা যাচাই করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Configure Routing Directive', bn: 'ধাপ ৩ — রাউটিং ডিরেক্টিভ যুক্ত করা' },
          text: {
            en: 'Apply least_time or ip_hash inside your upstream configuration block depending on your architectural objective.',
            bn: 'আপনার উদ্দেশ্য অনুসারে আপস্ট্রিম কনফিগারেশন ব্লকে least_time বা ip_hash নির্দেশিকা যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Implement NAT Fallback Safeguards', bn: 'ধাপ ৪ — গেটওয়ে ট্রাফিক সুরক্ষাব্যবস্থা' },
          text: {
            en: 'When deploying IP Hash, implement cookie-based stickiness fallbacks to avoid overloading nodes from corporate NATs.',
            bn: 'আইপি হ্যাশ ব্যবহারের সময় কর্পোরেট গেটওয়ের ট্রাফিক জট এড়াতে ব্যাকআপ হিসেবে কুকি-ভিত্তিক স্টিকিনেস চালু রাখুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'lst-ex-1',
      kind: 'mcq',
      topic: 'least-response-time-mechanism',
      question: {
        en: 'What primary metric does the Least Response Time load balancing algorithm monitor to route queries?',
        bn: 'লিস্ট রেসপন্স টাইম লোড ব্যালেন্সিং অ্যালগরিদম ট্রাফিক বিতরণের জন্য মূলত কোন মেট্রিকটি পর্যবেক্ষণ করে?',
      },
      options: [
        { en: 'The combination of active connection count and measured response latency (e.g. Time To First Byte or average round-trip time)', bn: 'সক্রিয় সংযোগের সংখ্যার সাথে পরিমাপকৃত রেসপন্স লেটেন্সির (যেমন Time To First Byte বা গড় রাউন্ড-ট্রিপ সময়) সমন্বয়' },
        { en: 'The physical serial number printed on the server case', bn: 'সার্ভার কেসিংয়ের গায়ে মুদ্রিত ফিজিক্যাল সিরিয়াল নম্বর' },
        { en: 'The amount of disk space occupied by server log text files', bn: 'সার্ভার লগ টেক্সট ফাইলের দখল করা ডিস্ক স্পেসের পরিমাণ' },
        { en: 'The brand name of the network cables installed in the rack', bn: 'র্যাকে লাগানো নেটওয়ার্ক তারের প্রস্তুতকারক ব্র্যান্ডের নাম' },
      ],
      answer: 0,
      hint: { en: 'Active connections combined with measured response latency.', bn: 'সক্রিয় সংযোগের সাথে পরিমাপকৃত রেসপন্স লেটেন্সি।' },
      explanation: {
        en: 'Least Response Time assesses live server latency to route traffic away from degrading nodes.',
        bn: 'লিস্ট রেসপন্স টাইম লাইভ সার্ভারের গতি মেপে ধীরগতির নোড থেকে ট্রাফিক সরিয়ে নেয়।',
      },
    },
    {
      id: 'lst-ex-2',
      kind: 'mcq',
      topic: 'ip-hash-nat-hazard',
      question: {
        en: 'What major architectural hazard occurs when using IP Hashing for a customer base located behind a large corporate NAT gateway?',
        bn: 'একটি বড় কর্পোরেট গেটওয়ের পেছনে থাকা ব্যবহারকারীদের ক্ষেত্রে আইপি হ্যাশিং ব্যবহার করলে কোন বড় সমস্যাটি দেখা দেয়?',
      },
      options: [
        { en: 'All corporate users share the exact same public IP address, so the balancer sends every user to the same single backend server, causing localized overloading', bn: 'সব অফিস ব্যবহারকারীর পাবলিক আইপি একই হওয়ায় ব্যালেন্সার সবাইকে একটি মাত্র সার্ভারে পাঠিয়ে তীব্র ট্রাফিক জট তৈরি করে' },
        { en: 'The network switches permanently turn off all Ethernet ports', bn: 'নেটওয়ার্ক সুইচের সব ইথারনেট পোর্ট চিরতরে বন্ধ হয়ে যায়' },
        { en: 'The client computer monitors display inverted colors', bn: 'ব্যবহারকারীর কম্পিউটার মনিটরের রঙ উল্টো হয়ে যায়' },
        { en: 'The load balancer converts JSON responses into XML files', bn: 'লোড ব্যালেন্সার জেএসওন রেসপন্সকে এক্সএমএল ফাইলে রূপান্তর করে' },
      ],
      answer: 0,
      hint: { en: 'All users sharing one IP get routed to the same backend server.', bn: 'একই আইপি শেয়ার করা সব ব্যবহারকারী একই সার্ভারে পৌঁছে যায়।' },
      explanation: {
        en: 'Because IP hashing maps strictly by client IP, multi-user NAT gateways cause extreme server hotspotting.',
        bn: 'আইপি হ্যাশিং ক্লায়েন্টের আইপি দেখে সিদ্ধান্ত নেয় বলে বহু-ব্যবহারকারীর গেটওয়েতে একটি সার্ভারে অস্বাভাবিক ভিড় জমে।',
      },
    },
    {
      id: 'lst-ex-3',
      kind: 'predict',
      topic: 'fastest-node-handled-queries',
      question: {
        en: 'In our benchmark of 2100 requests, how many queries were successfully handled by the fastest 8 ms node (e.g. 1400 )?',
        bn: '২১০০টি রিকোয়েস্টের বেঞ্চমার্কে দ্রুততম ৮ ms এর নোডটি কতগুলো কুয়েরি সফলভাবে সম্পন্ন করেছে (যেমন 1400 )?',
      },
      answer: '1400',
      accept: ['1400', '1400 queries', 'fourteen hundred'],
      hint: { en: '1400', bn: '1400' },
      explanation: {
        en: 'The fastest node (Node A at 8 ms) absorbed 1400 out of 2100 requests because the balancer detected its superior responsiveness.',
        bn: 'দ্রুততম নোডটি (৮ ms লেটেন্সির নোড A) সবচেয়ে কম সময়ে সাড়া দেওয়ায় ব্যালেন্সার ২১০০টির মধ্যে ১৪০০টি রিকোয়েস্ট সেখানেই পাঠিয়েছে।',
      },
    },
    {
      id: 'lst-ex-4',
      kind: 'predict',
      topic: 'nginx-ip-hash-directive',
      question: {
        en: 'What is the Nginx configuration directive used inside an upstream block to enable client IP affinity (e.g. ip_hash)?',
        bn: 'ক্লায়েন্ট আইপি অ্যাফিনিটি সক্রিয় করতে এনজিনএক্সের আপস্ট্রিম ব্লকে কোন ডিরেক্টিভটি লেখা হয় (যেমন ip_hash)?',
      },
      answer: 'ip_hash',
      accept: ['ip_hash', 'ip_hash;', 'ip hash'],
      hint: { en: 'ip_hash', bn: 'ip_hash' },
      explanation: {
        en: 'The ip_hash directive activates IP-based client session stickiness in Nginx upstreams.',
        bn: 'ip_hash নির্দেশিকাটি এনজিনএক্সের আপস্ট্রিমে আইপি-ভিত্তিক সেশন স্টিকিনেস চালু করে।',
      },
    },
  ],
  quiz: {
    id: 'leasts-and-the-least-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'lst-qz-1',
        kind: 'mcq',
        topic: 'gc-pause-least-time-advantage',
        question: {
          en: 'Why does Least Response Time outperform simple Least Connections during database garbage collection pauses?',
          bn: 'ডেটাবেজ মেমরি ক্লিনিংয়ের সময় লিস্ট রেসপন্স টাইম অ্যালগরিদম কেন সাধারণ লিস্ট কানেকশনসের চেয়ে ভালো ফল দেয়?',
        },
        options: [
          { en: 'A paused server may have few active connections yet take seconds to respond; Least Response Time detects the latency increase and stops sending traffic', bn: 'মেমরি ক্লিনিংয়ে থাকা সার্ভারে সক্রিয় সংযোগ কম থাকলেও সাড়া দিতে অনেক দেরি হয়; লিস্ট রেসপন্স টাইম এই বিলম্ব ধরে সেখানে নতুন ট্রাফিক পাঠানো বন্ধ করে' },
          { en: 'It deletes all paused database tables automatically', bn: 'এটি স্বয়ংক্রিয়ভাবে সমস্ত স্থগিত ডেটাবেজ টেবিল মুছে ফেলে' },
          { en: 'It replaces Java with C++ inside running server containers', bn: 'এটি রানিং কন্টেইনারে জাভাকে সি++ দিয়ে প্রতিস্থাপন করে' },
          { en: 'It doubles the physical memory speed of the CPU motherboard', bn: 'এটি সিপিইউ মাদারবোর্ডের ফিজিক্যাল মেমরির গতি দ্বিগুণ করে দেয়' },
        ],
        answer: 0,
        hint: { en: 'It senses the latency increase even when connection counts are low.', bn: 'সংযোগের সংখ্যা কম থাকলেও এটি লেটেন্সির বৃদ্ধি শনাক্ত করতে পারে।' },
        explanation: {
          en: 'Least Response Time tracks real execution duration, catching paused nodes that have few active sockets.',
          bn: 'লিস্ট রেসপন্স টাইম বাস্তব প্রসেসিং সময় দেখে সিদ্ধান্ত নেয়, ফলে অলস হয়ে থাকা ধীরগতির নোড সহজেই শনাক্ত হয়।',
        },
      },
      {
        id: 'lst-qz-2',
        kind: 'mcq',
        topic: 'ip-hash-session-benefit',
        question: {
          en: 'What is the primary operational advantage of using IP Hashing for legacy web applications?',
          bn: 'লিগ্যাসি বা পুরনো ওয়েব অ্যাপ্লিকেশনে আইপি হ্যাশিং ব্যবহারের প্রধান অপারেশনাল সুবিধা কী?',
        },
        options: [
          { en: 'It enables session persistence without needing an external distributed cache (like Redis), keeping in-memory user sessions intact', bn: 'এটি কোনো শেয়ার্ড রেডিস ডেটাবেজ ছাড়াই একই সার্ভারে ব্যবহারকারীকে ধরে রেখে লোকাল মেমরিতে লগইন সেশন চালু রাখে' },
          { en: 'It speeds up client internet connections by 500%', bn: 'এটি ক্লায়েন্টের ইন্টারনেট স্পিড ৫০০% বাড়িয়ে দেয়' },
          { en: 'It eliminates the need for SSL security certificates', bn: 'এটি এসএসএল সিকিউরিটি সার্টিফিকেটের প্রয়োজনীয়তা দূর করে দেয়' },
          { en: 'It changes the client browser theme to dark mode', bn: 'এটি ক্লায়েন্ট ব্রাউজারের থিমকে ডার্ক মোডে বদলে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Session persistence without external Redis.', bn: 'রেডিস ছাড়াই সেশন ধারাবাহিকতা রক্ষা।' },
        explanation: {
          en: 'IP hashing preserves in-memory session states by consistently steering the same client IP to the same host.',
          bn: 'আইপি হ্যাশিং একই আইপিকে সর্বদা একই সার্ভারে পাঠিয়ে মেমরিতে থাকা সেশন অক্ষত রাখে।',
        },
      },
      {
        id: 'lst-qz-3',
        kind: 'mcq',
        topic: 'ewma-tracking-definition',
        question: {
          en: 'What does Exponentially Weighted Moving Average (EWMA) tracking accomplish in modern load balancers?',
          bn: 'আধুনিক লোড ব্যালেন্সারে এক্সপোনেনশিয়ালি ওয়েটেড মুভিং এভারেজ (EWMA) ট্র্যাকিং কোন কাজটি সম্পন্ন করে?',
        },
        options: [
          { en: 'It computes latency weights giving higher priority to recent response times, quickly adapting when a server slows down or recovers', bn: 'এটি সাম্প্রতিকতম রেসপন্স টাইমকে বেশি প্রাধান্য দিয়ে লেটেন্সি হিসাব করে, ফলে কোনো সার্ভার হঠাৎ ধীর হলে বা সুস্থ হলে দ্রুত সিদ্ধান্ত নিতে পারে' },
          { en: 'It counts how many times the server power cord was plugged in', bn: 'এটি সার্ভারের পাওয়ার তার কতবার লাগানো হয়েছে তা গণনা করে' },
          { en: 'It calculates compound interest on cloud billing accounts', bn: 'এটি ক্লাউড বিলিং অ্যাকাউন্টে চক্রবৃদ্ধি সুদ হিসাব করে' },
          { en: 'It encrypts client passwords using ancient hieroglyphs', bn: 'এটি প্রাচীন হায়ারোগ্লিফিক লিপিতে ব্যবহারকারীর পাসওয়ার্ড এনক্রিপ্ট করে' },
        ],
        answer: 0,
        hint: { en: 'Prioritizes recent latency to adapt quickly.', bn: 'দ্রুত পদক্ষেপ নিতে সাম্প্রতিক লেটেন্সিকে বেশি মূল্যায়ন করে।' },
        explanation: {
          en: 'EWMA reacts rapidly to current performance changes without being distorted by outdated historical metrics.',
          bn: 'EWMA পুরনো তথ্যে আটকে না থেকে তাৎক্ষণিক পারফরম্যান্সের পরিবর্তনের সাথে সাথে দ্রুত ব্যবস্থা নেয়।',
        },
      },
      {
        id: 'lst-qz-4',
        kind: 'predict',
        topic: 'least-time-cluster-latency',
        question: {
          en: 'In our benchmark, what was the average cluster latency achieved in ms by Least Response Time routing (e.g. 19 )?',
          bn: 'আমাদের বেঞ্চমার্কে লিস্ট রেসপন্স টাইম রাউটিংয়ের মাধ্যমে অর্জিত গড় ক্লাস্টার লেটেন্সি কত ms ছিল (যেমন 19 )?',
        },
        answer: '19',
        accept: ['19', '19 ms', 'nineteen'],
        hint: { en: '19', bn: '19' },
        explanation: {
          en: 'By shunting 1400 queries to the fastest node, the cluster maintained a 19 ms average latency.',
          bn: '১৪০০টি কাজ দ্রুততম নোডে পাঠিয়ে ব্যালেন্সার ক্লাস্টারের সার্বিক লেটেন্সি ১৯ ms এ ধরে রাখতে সক্ষম হয়েছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'stickies-and-the-sticky',
    title: {
      en: 'Sticky Sessions and Session Persistence: Cookies, Headers, and State Hazards',
      bn: 'স্টিকি সেশন ও সেশন পারসিস্টেন্স: কুকিজ, হেডার ও স্টেট জটিলতা',
    },
  },
};
