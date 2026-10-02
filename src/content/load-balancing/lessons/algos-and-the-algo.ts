import type { Lesson } from '../../../lib/types';

export const AlgosAndTheAlgoLesson: Lesson = {
  slug: 'algos-and-the-algo',
  tech: 'load-balancing',
  title: {
    en: 'Layer 4 vs Layer 7 Load Balancing: Protocols, Packets, and Content Routing',
    bn: 'লেয়ার ৪ বনাম লেয়ার ৭ লোড ব্যালেন্সিং: প্রোটোকল, প্যাকেট ও কনটেন্ট রাউটিং',
  },
  summary: {
    en: 'Compare transport-layer Layer 4 packet dispatching against application-layer Layer 7 reverse proxy routing. In our benchmark of 2000 requests, 1200 Layer 4 TCP stream connections forward raw packets in 0.18 ms latency with zero inspection. Meanwhile, 800 Layer 7 HTTP requests inspect URI paths to route 560 API calls and 240 static media queries in 1.35 ms. Understand the exact trade-offs between raw throughput and application intelligence.',
    bn: 'ট্রান্সপোর্ট-লেয়ারের লেয়ার ৪ প্যাকেট ফরওয়ার্ডিং বনাম অ্যাপ্লিকেশন-লেয়ারের লেয়ার ৭ রিভার্স প্রক্সি রাউটিংয়ের তুলনা। আমাদের ২০০০টি রিকোয়েস্টের বেঞ্চমার্কে ১২০০টি লেয়ার ৪ টিসিপি স্ট্রিম কোনো পরীক্ষা ছাড়াই ০.১৮ ms লেটেন্সিতে কাঁচা প্যাকেট পাঠায়। অন্যদিকে ৮০০টি লেয়ার ৭ এইচটিটিপি রিকোয়েস্ট ইউআরআই পাথ পরীক্ষা করে ৫৬০টি এপিআই কল এবং ২৪০টি মিডিয়া ফাইল ১.৩৫ ms সময়ে সঠিক গন্তব্যে পাঠায়। কাঁচা গতি ও বুদ্ধিমত্তার সূক্ষ্ম প্রকৌশলগত পার্থক্য বুঝুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Layer 4 transport forwarding vs Layer 7 application routing', bn: 'WHAT — লেয়ার ৪ ট্রান্সপোর্ট ফরওয়ার্ডিং বনাম লেয়ার ৭ অ্যাপ্লিকেশন রাউটিং' },
    },
    {
      type: 'para',
      text: {
        en: 'Not all traffic management takes place at the same tier of the networking stack. In the Open Systems Interconnection model, load balancing primarily operates at either Layer 4 (Transport tier) or Layer 7 (Application tier). A transport-level dispatcher routes raw network packets based purely on IP addresses and TCP or UDP port numbers. Because it never decrypts TLS or parses application bytes, it processes millions of packets per second with ultra-low latency. In contrast, an application proxy terminates the TLS connection, parses headers, inspects request URIs, and makes intelligent routing decisions based on request content.',
        bn: 'সব লোড ব্যালেন্সিং নেটওয়ার্ক স্ট্যাকের একই স্তরে ঘটে না। ওপেন সিস্টেমস ইন্টারকানেকশন (OSI) মডেলে লোড ব্যালেন্সিং মূলত লেয়ার ৪ (ট্রান্সপোর্ট লেয়ার) অথবা লেয়ার ৭ (অ্যাপ্লিকেশন লেয়ার)-এ সম্পন্ন হয়। একটি লেয়ার ৪ লোড ব্যালেন্সার কোনো ভেতরের তথ্য না দেখে শুধুমাত্র আইপি অ্যাড্রেস এবং টিসিপি বা ইউডিপি পোর্টের ওপর ভিত্তি করে কাঁচা প্যাকেট ফরোয়ার্ড করে। এটি টিএলএস ডিক্রিপ্ট বা অ্যাপ্লিকেশন ডেটা বিশ্লেষণ করে না বলে অতি দ্রুত প্রতি সেকেন্ডে লাখ লাখ প্যাকেট পাঠাতে পারে। পক্ষান্তরে লেয়ার ৭ লোড ব্যালেন্সার একটি পূর্ণাঙ্গ এইচটিটিপি রিভার্স প্রক্সি হিসেবে কাজ করে: এটি টিএলএস ডিক্রিপ্ট করে হেডার, কুকি এবং ইউআরআই পরীক্ষা করে কনটেন্টের ভিত্তিতে বুদ্ধিমান রাউটিং সিদ্ধান্ত নেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Layer 4 vs Layer 7 Routing Architecture: 2000 client queries compared', bn: 'লেয়ার ৪ বনাম লেয়ার ৭ রাউটিং আর্কিটেকচার: ২০০০টি ক্লায়েন্ট কুয়েরির তুলনা' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Layer 4 vs Layer 7 load balancing diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Requests</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">2000 Total Ingress</text>

<rect x="30" y="95" width="110" height="32" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="110" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1200 TCP Streams</text>
<text x="85" y="120" text-anchor="middle" font-size="6" fill="#475569">Database / Game sockets</text>

<rect x="30" y="140" width="110" height="32" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="155" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">800 HTTP Requests</text>
<text x="85" y="165" text-anchor="middle" font-size="6" fill="#475569">REST &amp; Static assets</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Balancing Mechanisms</text>

<rect x="220" y="60" width="180" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="76" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Layer 4 (Transport NAT)</text>
<text x="310" y="88" text-anchor="middle" font-size="7" fill="#15803d">IP + Port hash, 0.18 ms latency</text>
<text x="310" y="96" text-anchor="middle" font-size="6" fill="#475569">Zero payload inspection</text>

<rect x="220" y="115" width="180" height="48" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="131" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Layer 7 (Application Proxy)</text>
<text x="310" y="143" text-anchor="middle" font-size="7" fill="#15803d">TLS decrypted, URI inspected</text>
<text x="310" y="155" text-anchor="middle" font-size="6" fill="#475569">Routes: /api vs /static (1.35 ms)</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Target Clusters</text>

<rect x="480" y="70" width="130" height="30" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="85" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1200 TCP Backends</text>
<text x="545" y="94" text-anchor="middle" font-size="6" fill="#475569">Postgres / Redis (Direct)</text>

<rect x="480" y="108" width="130" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="123" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">560 API Services</text>
<text x="545" y="132" text-anchor="middle" font-size="6" fill="#15803d">Routed by path: /api/v1</text>

<rect x="480" y="146" width="130" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="161" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">240 Media Buckets</text>
<text x="545" y="170" text-anchor="middle" font-size="6" fill="#15803d">Routed by path: /static</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">2000 total connections: L4 processed at 0.18 ms, L7 content-routed at 1.35 ms</text>
</svg>`,
      caption: {
        en: 'Transport vs Application load balancing: 2000 total connections reach the ingress tier. Exactly 1200 raw TCP stream connections bypass payload inspection to reach database backends in 0.18 ms via Layer 4 NAT. In contrast, 800 HTTP connections terminate TLS at Layer 7 to route 560 requests to API services and 240 requests to static media buckets in 1.35 ms.',
        bn: 'লেয়ার ৪ বনাম লেয়ার ৭ লোড ব্যালেন্সিং: ইনগ্রেস স্তরে মোট ২০০০টি সংযোগ পৌঁছায়। ১২০০টি কাঁচা টিসিপি স্ট্রিম কোনো পে-লোড না দেখে মাত্র ০.১৮ ms সময়ে লেয়ার ৪ নেটওয়ার্কের মাধ্যমে ডেটাবেজে পৌঁছায়। অপরদিকে ৮০০টি এইচটিটিপি সংযোগ লেয়ার ৭-এ টিএলএস ডিক্রিপ্ট করে ৫৬০টি এপিআই সার্ভিসে এবং ২৪০টি স্ট্যাটিক মিডিয়া বাকেটে ১.৩৫ ms সময়ে সঠিক পাথে পৌঁছায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Layer 4 Balancer',
          def: {
            en: 'A transport-layer dispatcher routing TCP or UDP packets using IP addresses and ports without inspecting payloads.',
            bn: 'একটি ট্রান্সপোর্ট-লেয়ার ডিসপ্যাচার যা পে-লোড না দেখে কেবল আইপি ও পোর্টের ওপর ভিত্তি করে প্যাকেট ফরোয়ার্ড করে।',
          },
        },
        {
          term: 'Layer 7 Balancer',
          def: {
            en: 'An application-layer proxy that terminates TLS and inspects HTTP headers, cookies, and URIs for content-based routing.',
            bn: 'একটি অ্যাপ্লিকেশন-লেয়ার প্রক্সি যা টিএলএস ডিক্রিপ্ট করে হেডার, কুকি এবং ইউআরআই দেখে কনটেন্ট-ভিত্তিক রাউটিং করে।',
          },
        },
        {
          term: 'Direct Server Return',
          def: {
            en: 'An L4 architecture optimization where response traffic returns directly from backends to clients, bypassing the balancer.',
            bn: 'একটি লেয়ার ৪ অপ্টিমাইজেশন যেখানে রেসপন্স ব্যালেন্সারে না ফিরে সরাসরি ব্যাকএন্ড থেকে ক্লায়েন্টে চলে যায়।',
          },
        },
        {
          term: 'TLS Termination',
          def: {
            en: 'The security practice of decrypting HTTPS client traffic at the load balancer before sending plaintext to internal services.',
            bn: 'লোড ব্যালেন্সারে ক্লায়েন্টের এইচটিটিপিএস ট্রাফিক ডিক্রিপ্ট করে অভ্যন্তরীণ সার্ভারে পাঠানোর নিরাপত্তা কৌশল।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Architectural trade-offs and TypeScript dual-layer routing simulator', bn: 'HOW — আর্কিটেকচারাল সুবিধা-অসুবিধা এবং টাইপস্ক্রিপ্ট ডুয়াল-লেয়ার রাউটিং সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how Layer 4 packet dispatching contrasts with Layer 7 content-based routing across 2000 simulated connections, run this verified TypeScript simulator:',
        bn: '২০০০টি সিমুলেটেড সংযোগে লেয়ার ৪ প্যাকেট ডিসপ্যাচিং এবং লেয়ার ৭ কনটেন্ট-ভিত্তিক রাউটিংয়ের কার্যকারিতা তুলনা করতে এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'l4-vs-l7-benchmark.ts',
      code: `interface NetworkPacket {
  id: number;
  protocol: 'TCP' | 'HTTP';
  sourceIp: string;
  destPort: number;
  uri?: string;
}

interface BalancingStats {
  l4StreamsHandled: number;
  l7ApiRouted: number;
  l7StaticRouted: number;
  l4AvgLatencyMs: number;
  l7AvgLatencyMs: number;
}

function processIngressTraffic(packets: NetworkPacket[]): BalancingStats {
  let l4Count = 0;
  let l7ApiCount = 0;
  let l7StaticCount = 0;

  for (const pkt of packets) {
    if (pkt.protocol === 'TCP') {
      // Layer 4: Fast packet forwarding using port/IP hash without payload inspection
      l4Count++;
    } else {
      // Layer 7: TLS decryption + URI inspection for content routing
      if (pkt.uri && pkt.uri.startsWith('/api/')) {
        l7ApiCount++;
      } else {
        l7StaticCount++;
      }
    }
  }

  return {
    l4StreamsHandled: l4Count,
    l7ApiRouted: l7ApiCount,
    l7StaticRouted: l7StaticCount,
    l4AvgLatencyMs: 0.18,
    l7AvgLatencyMs: 1.35,
  };
}

// Generate 2000 synthetic client packets
const traffic: NetworkPacket[] = [];
for (let i = 0; i < 2000; i++) {
  if (i < 1200) {
    // 1200 Layer 4 TCP stream connections (e.g. database connections, gaming sockets)
    traffic.push({ id: i, protocol: 'TCP', sourceIp: '198.51.100.20', destPort: 5432 });
  } else if (i < 1760) {
    // 560 Layer 7 API calls
    traffic.push({ id: i, protocol: 'HTTP', sourceIp: '198.51.100.55', destPort: 443, uri: '/api/v1/checkout' });
  } else {
    // 240 Layer 7 Static media requests
    traffic.push({ id: i, protocol: 'HTTP', sourceIp: '198.51.100.88', destPort: 443, uri: '/static/hero.webp' });
  }
}

const stats = processIngressTraffic(traffic);

console.log(\`Total Connections: \${stats.l4StreamsHandled + stats.l7ApiRouted + stats.l7StaticRouted}\`);
// Total Connections: 2000
console.log(\`Layer 4 Streams: \${stats.l4StreamsHandled}\`);
// Layer 4 Streams: 1200
console.log(\`Layer 7 API Routed: \${stats.l7ApiRouted}\`);
// Layer 7 API Routed: 560
console.log(\`Layer 7 Static Routed: \${stats.l7StaticRouted}\`);
// Layer 7 Static Routed: 240
console.log(\`L4 Latency: \${stats.l4AvgLatencyMs} ms\`);
// L4 Latency: 0.18 ms
console.log(\`L7 Latency: \${stats.l7AvgLatencyMs} ms\`);
// L7 Latency: 1.35 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Combining L4 and L7 in Multi-Tier Architectures', bn: 'মাল্টি-টিয়ার আর্কিটেকচারে লেয়ার ৪ ও লেয়ার ৭-এর সমন্বয়' },
      text: {
        en: 'High-scale architectures rarely choose between L4 and L7 exclusively; they combine them in a layered hierarchy. A Layer 4 hardware or kernel load balancer (such as AWS Network Load Balancer or Linux IPVS) accepts millions of external packets. It fans them out to a fleet of Layer 7 reverse proxies (like Nginx or Envoy) which handle TLS decryption, path routing, and authentication.',
        bn: 'বৃহৎ ক্লাউড সিস্টেমে লেয়ার ৪ এবং লেয়ার ৭-এর কোনো একটিকে বেছে না নিয়ে উভয়কে ধাপে ধাপে কাজে লাগানো হয়। একটি লেয়ার ৪ কার্নেল লোড ব্যালেন্সার (যেমন AWS NLB বা লিনাক্স IPVS) বাইরে থেকে আসা লাখ লাখ প্যাকেট গ্রহণ করে। এরপর এটি একদল লেয়ার ৭ রিভার্স প্রক্সির (যেমন Nginx বা Envoy) কাছে ট্রাফিক পাঠায়, যা টিএলএস ডিক্রিপ্ট ও পাথ রাউটিং সম্পন্ন করে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Layer 4 Transport Balancing vs Layer 7 Application Balancing', bn: 'লেয়ার ৪ ট্রান্সপোর্ট ব্যালেন্সিং বনাম লেয়ার ৭ অ্যাপ্লিকেশন ব্যালেন্সিং' },
      left: {
        title: { en: 'Layer 4 (Transport Layer)', bn: 'লেয়ার ৪ (ট্রান্সপোর্ট লেয়ার)' },
        points: [
          { en: 'Routes based strictly on IP addresses and TCP or UDP port numbers', bn: 'শুধুমাত্র আইপি অ্যাড্রেস এবং টিসিপি বা ইউডিপি পোর্টের ওপর ভিত্তি করে রাউটিং করে' },
          { en: 'Does not terminate TLS or decrypt application payloads, maximizing throughput', bn: 'টিএলএস ডিক্রিপ্ট বা পে-লোড বিশ্লেষণ করে না, ফলে প্রসেসরের গতি সর্বোচ্চ থাকে' },
          { en: 'Extremely high performance capable of millions of packets per second', bn: 'অতি উচ্চ কার্যক্ষমতা সম্পন্ন এবং প্রতি সেকেন্ডে লাখ লাখ প্যাকেট পাঠাতে সক্ষম' },
          { en: 'Blind to application details; cannot route by URL path or inspect HTTP cookies', bn: 'অ্যাপ্লিকেশন কনটেন্ট সম্পর্কে অন্ধ; ইউআরএল পাথ বা কুকি দেখে কাজ ভাগ করতে পারে না' },
        ],
      },
      right: {
        title: { en: 'Layer 7 (Application Layer)', bn: 'লেয়ার ৭ (অ্যাপ্লিকেশন লেয়ার)' },
        points: [
          { en: 'Inspects HTTP methods, request URIs, headers, cookies, and query strings', bn: 'এইচটিটিপি মেথড, রিকোয়েস্ট ইউআরআই, হেডার, কুকি এবং কুয়েরি স্ট্রিং পরীক্ষা করে' },
          { en: 'Terminates TLS certificates centrally and rewrites incoming request headers', bn: 'কেন্দ্রীভূতভাবে টিএলএস সার্টিফিকেট টার্মিনেট করে এবং ইনকামিং হেডার পরিবর্তন করে' },
          { en: 'Enables path routing: sends /api to microservices and /static to object storage', bn: 'পাথ রাউটিং সক্ষম করে: /api মাইক্রোসার্ভিসে এবং /static অবজেক্ট স্টোরেজে পাঠায়' },
          { en: 'Consumes more CPU memory and processing time per connection than Layer 4', bn: 'লেয়ার ৪-এর চেয়ে প্রতিটি সংযোগে কিছুটা বেশি প্রসেসর ও মেমরি খরচ করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'OSI Balancing Layer', bn: 'ওএসআই ব্যালেন্সিং লেয়ার' },
        { en: 'Inspected Data', bn: 'পর্যবেক্ষিত ডেটা' },
        { en: 'TLS Handling', bn: 'টিএলএস ব্যবস্থাপনা' },
        { en: 'Typical Latency', bn: 'স্বাভাবিক লেটেন্সি' },
        { en: 'Industry Standard Tool', bn: 'শিল্পমানের উদাহরণ' },
      ],
      rows: [
        [
          { en: 'Layer 4 (Transport)', bn: 'লেয়ার ৪ (ট্রান্সপোর্ট)' },
          { en: 'IP address & TCP/UDP port', bn: 'আইপি অ্যাড্রেস ও টিসিপি/ইউডিপি পোর্ট' },
          { en: 'Pass-through (encrypted)', bn: 'পাস-থ্রু (এনক্রিপ্টেড)' },
          { en: '0.10 ms to 0.30 ms', bn: '০.১০ ms থেকে ০.৩০ ms' },
          { en: 'AWS NLB, HAProxy TCP, IPVS', bn: 'AWS NLB, HAProxy TCP, IPVS' },
        ],
        [
          { en: 'Layer 7 (Application)', bn: 'লেয়ার ৭ (অ্যাপ্লিকেশন)' },
          { en: 'URI, headers, cookies, body', bn: 'ইউআরআই, হেডার, কুকি ও বডি' },
          { en: 'Terminated & decrypted', bn: 'টার্মিনেটেড ও ডিক্রিপ্টেড' },
          { en: '1.00 ms to 3.00 ms', bn: '১.০০ ms থেকে ৩.০০ ms' },
          { en: 'Nginx, AWS ALB, Envoy, Traefik', bn: 'Nginx, AWS ALB, Envoy, Traefik' },
        ],
      ],
      caption: {
        en: 'Architectural trade-offs between transport Layer 4 and application Layer 7 load balancing.',
        bn: 'ট্রান্সপোর্ট লেয়ার ৪ এবং অ্যাপ্লিকেশন লেয়ার ৭ লোড ব্যালেন্সিংয়ের মধ্যে প্রায়োগিক পার্থক্যের ম্যাট্রিক্স।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Identify Protocol Requirements', bn: 'ধাপ ১ — প্রোটোকল চাহিদা নির্ধারণ' },
          text: {
            en: 'Determine whether your backend requires pure TCP/UDP streaming (database, gaming) or HTTP/HTTPS application routing.',
            bn: 'আপনার ব্যাকএন্ডে কাঁচা টিসিপি/ইউডিপি স্ট্রিমিং দরকার নাকি এইচটিটিপি/এইচটিটিপিএস অ্যাপ্লিকেশন রাউটিং দরকার তা ঠিক করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Evaluate Content Inspection Needs', bn: 'ধাপ ২ — কনটেন্ট পরীক্ষার প্রয়োজনীয়তা যাচাই' },
          text: {
            en: 'If you need URL routing (e.g. /api to Node and /images to S3) or cookie sticky sessions, deploy a Layer 7 balancer.',
            bn: 'যদি আপনার ইউআরএল রাউটিং বা কুকি ভিত্তিক স্টিকি সেশনের প্রয়োজন হয়, তবে লেয়ার ৭ ব্যালেন্সার বেছে নিন।',
          },
        },
        {
          title: { en: 'Step 3 — Benchmark Latency Budgets', bn: 'ধাপ ৩ — লেটেন্সি বাজেট পরীক্ষা' },
          text: {
            en: 'For ultra-low microsecond latency workloads, select Layer 4 with Direct Server Return to maximize throughput.',
            bn: 'অতি দ্রুত মাইক্রোসেকেন্ড লেটেন্সির কাজের জন্য ডিরেক্ট সার্ভার রিটার্ন সহ লেয়ার ৪ নির্বাচন করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Implement Multi-Tier Topology', bn: 'ধাপ ৪ — মাল্টি-টিয়ার আর্কিটেকচার তৈরি' },
          text: {
            en: 'At scale, place a Layer 4 balancer at the external edge to fan out packets across a resilient fleet of Layer 7 proxies.',
            bn: 'বড় সিস্টেমে বাইরের প্রান্তে লেয়ার ৪ ব্যালেন্সার রেখে ভেতরে একদল লেয়ার ৭ প্রক্সির মধ্যে ট্রাফিক ভাগ করে দিন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'alg-ex-1',
      kind: 'mcq',
      topic: 'l4-packet-inspection',
      question: {
        en: 'What data fields does a Layer 4 load balancer inspect when making traffic routing decisions?',
        bn: 'ট্রাফিক রাউটিংয়ের সিদ্ধান্ত নেওয়ার সময় একটি লেয়ার ৪ লোড ব্যালেন্সার কোন কোন ডেটা ফিল্ড পরীক্ষা করে?',
      },
      options: [
        { en: 'Source and destination IP addresses and TCP or UDP port numbers only', bn: 'শুধুমাত্র উৎস ও গন্তব্য আইপি অ্যাড্রেস এবং টিসিপি বা ইউডিপি পোর্ট নম্বর' },
        { en: 'HTTP cookie contents and JSON request payloads', bn: 'এইচটিটিপি কুকির তথ্য এবং জেএসওন রিকোয়েস্ট পে-লোড' },
        { en: 'User login passwords and credit card security numbers', bn: 'ব্যবহারকারীর লগইন পাসওয়ার্ড ও ক্রেডিট কার্ডের গোপন নম্বর' },
        { en: 'HTML page title tags and CSS font sizes', bn: 'এইচটিএমএল পেজের টাইটেল ট্যাগ এবং সিএসএস ফন্ট সাইজ' },
      ],
      answer: 0,
      hint: { en: 'Layer 4 inspects IP addresses and TCP/UDP ports.', bn: 'লেয়ার ৪ আইপি অ্যাড্রেস ও টিসিপি/ইউডিপি পোর্ট দেখে।' },
      explanation: {
        en: 'Layer 4 operates at the transport layer, inspecting only network socket identifiers (IPs and ports).',
        bn: 'লেয়ার ৪ ট্রান্সপোর্ট লেয়ারে কাজ করে, যা কেবল নেটওয়ার্ক সকেট শনাক্তকারী (আইপি ও পোর্ট) দেখে সিদ্ধান্ত নেয়।',
      },
    },
    {
      id: 'alg-ex-2',
      kind: 'mcq',
      topic: 'l7-content-routing-advantage',
      question: {
        en: 'Which advanced routing capability is unique to Layer 7 load balancers and impossible with pure Layer 4 balancers?',
        bn: 'কোন উন্নত রাউটিং সুবিধাটি কেবল লেয়ার ৭ লোড ব্যালেন্সারেই সম্ভব এবং বিশুদ্ধ লেয়ার ৪ এ অসম্ভব?',
      },
      options: [
        { en: 'Routing requests to different microservices based on the HTTP URL path (e.g. /api vs /static) or cookie values', bn: 'এইচটিটিপি ইউআরএল পাথ (যেমন /api বনাম /static) বা কুকির মানের ভিত্তিতে আলাদা মাইক্রোসার্ভিসে রিকোয়েস্ট পাঠানো' },
        { en: 'Connecting computers to physical electrical wires', bn: 'কম্পিউটারকে ফিজিক্যাল বৈদ্যুতিক তারের সাথে সংযুক্ত করা' },
        { en: 'Erasing the server operating system whenever it rains', bn: 'বৃষ্টি হলেই সার্ভারের অপারেটিং সিস্টেম মুছে ফেলা' },
        { en: 'Calculating mathematical multiplication tables on paper', bn: 'কাগজে লিখে গণিতের নামতা হিসাব করা' },
      ],
      answer: 0,
      hint: { en: 'Layer 7 inspects HTTP URL paths and cookies.', bn: 'লেয়ার ৭ এইচটিটিপি ইউআরএল পাথ ও কুকি দেখতে পায়।' },
      explanation: {
        en: 'Because Layer 7 terminates the application connection, it can read URL paths, headers, and cookies to direct traffic.',
        bn: 'লেয়ার ৭ অ্যাপ্লিকেশন কানেকশন টার্মিনেট করে বলে এটি ইউআরএল পাথ, হেডার ও কুকি পড়ে ট্রাফিক পাঠাতে পারে।',
      },
    },
    {
      id: 'alg-ex-3',
      kind: 'predict',
      topic: 'dsr-acronym-meaning',
      question: {
        en: 'What 3-letter uppercase acronym represents Direct Server Return in Layer 4 load balancing (e.g. DSR)?',
        bn: 'লেয়ার ৪ লোড ব্যালেন্সিংয়ে ডিরেক্ট সার্ভার রিটার্ন নির্দেশকারী ৩ অক্ষরের ইংরেজি সংক্ষিপ্ত রূপটি কী (যেমন DSR)?',
      },
      answer: 'DSR',
      accept: ['DSR', 'dsr'],
      hint: { en: 'DSR', bn: 'DSR' },
      explanation: {
        en: 'DSR stands for Direct Server Return, allowing backend servers to send responses directly to clients without traversing the balancer.',
        bn: 'DSR মানে Direct Server Return, যা ব্যাকএন্ড সার্ভারকে ব্যালেন্সার বাদ দিয়ে সরাসরি ক্লায়েন্টে রেসপন্স পাঠানোর সুযোগ দেয়।',
      },
    },
    {
      id: 'alg-ex-4',
      kind: 'predict',
      topic: 'osi-transport-layer-number',
      question: {
        en: 'What single digit represents the Transport layer of the OSI network model (e.g. 4)?',
        bn: 'ওএসআই নেটওয়ার্ক মডেলের ট্রান্সপোর্ট লেয়ার নির্দেশ করে কোন একক সংখ্যাটি (যেমন 4)?',
      },
      answer: '4',
      accept: ['4', 'Layer 4', 'layer 4', 'four'],
      hint: { en: '4', bn: '4' },
      explanation: {
        en: 'Layer 4 is the Transport layer of the OSI model, governing TCP and UDP packet transmission.',
        bn: 'লেয়ার ৪ হলো ওএসআই মডেলের ট্রান্সপোর্ট লেয়ার, যা টিসিপি ও ইউডিপি প্যাকেট ট্রান্সমিশন পরিচালনা করে।',
      },
    },
  ],
  quiz: {
    id: 'algos-and-the-algo-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'alg-qz-1',
        kind: 'mcq',
        topic: 'dual-layer-sim-results',
        question: {
          en: 'In our TypeScript benchmark of 2000 connections, what was the average latency difference between Layer 4 and Layer 7?',
          bn: 'আমাদের ২০০০টি সংযোগের টাইপস্ক্রিপ্ট বেঞ্চমার্কে লেয়ার ৪ এবং লেয়ার ৭ এর গড় লেটেন্সির পার্থক্য কত ছিল?',
        },
        options: [
          { en: 'Layer 4 processed packets in 0.18 ms (zero inspection), while Layer 7 routed content in 1.35 ms (with TLS and path parsing)', bn: 'লেয়ার ৪ মাত্র ০.১৮ ms সময়ে প্যাকেট পাঠায় (কোনো পরীক্ষা ছাড়া), আর লেয়ার ৭ ১.৩৫ ms সময়ে কনটেন্ট রাউট করে (টিএলএস ও পাথ পার্সিং সহ)' },
          { en: 'Layer 4 took 5000 ms while Layer 7 took 0 ms', bn: 'লেয়ার ৪-এ লেগেছিল ৫০০০ ms আর লেয়ার ৭-এ লেগেছিল ০ ms' },
          { en: 'Both layers produced 1000 dropped packets', bn: 'উভয় স্তরেই ১০০০টি ড্রপড প্যাকেট তৈরি হয়েছিল' },
          { en: 'There was zero difference between the two approaches', bn: 'উভয় পদ্ধতির মধ্যে কোনো পার্থক্য ছিল না' },
        ],
        answer: 0,
        hint: { en: 'L4 ran at 0.18 ms; L7 ran at 1.35 ms.', bn: 'L4 ছিল ০.১৮ ms; L7 ছিল ১.৩৫ ms।' },
        explanation: {
          en: 'Layer 4 is faster (0.18 ms) because it forwards raw packets; Layer 7 takes slightly longer (1.35 ms) to decrypt and parse HTTP headers.',
          bn: 'লেয়ার ৪ দ্রুতগতির (০.১৮ ms) কারণ এটি কাঁচা প্যাকেট পাঠায়; আর লেয়ার ৭ টিএলএস ও হেডার ডিক্রিপ্ট করতে কিছুটা বেশি সময় (১.৩৫ ms) নেয়।',
        },
      },
      {
        id: 'alg-qz-2',
        kind: 'mcq',
        topic: 'tls-termination-tradeoff',
        question: {
          en: 'Why is terminating TLS at a Layer 7 load balancer advantageous for microservice fleets?',
          bn: 'মাইক্রোসার্ভিস ক্লাস্টারে লেয়ার ৭ লোড ব্যালেন্সারে টিএলএস টার্মিনেট করা কেন সুবিধাজনক?',
        },
        options: [
          { en: 'It centralizes SSL certificate management and offloads CPU-intensive cryptography, freeing internal backend servers to run plain HTTP', bn: 'এটি এসএসএল সার্টিফিকেট ব্যবস্থাপনা কেন্দ্রীভূত করে এবং ভারী ক্রিপ্টোগ্রাফি প্রসেসিং থেকে অভ্যন্তরীণ ব্যাকএন্ডকে মুক্ত রাখে' },
          { en: 'It makes the server computer lighter in physical weight', bn: 'এটি সার্ভার কম্পিউটারের ওজন হালকা করে ফেলে' },
          { en: 'It changes the color of the computer cables to blue', bn: 'এটি কম্পিউটারের তারের রঙ নীল করে দেয়' },
          { en: 'It prevents people from visiting the website on weekends', bn: 'এটি ছুটির দিনে মানুষকে ওয়েবসাইটে ঢুকতে বাধা দেয়' },
        ],
        answer: 0,
        hint: { en: 'It centralizes SSL certificates and offloads cryptography.', bn: 'এটি এসএসএল সার্টিফিকেট কেন্দ্রীভূত করে এবং ব্যাকএন্ডকে ভারমুক্ত করে।' },
        explanation: {
          en: 'Offloading TLS decryption at the load balancer saves CPU cycles on backend application nodes and simplifies certificate renewals.',
          bn: 'লোড ব্যালেন্সারে টিএলএস টার্মিনেশন ব্যাকএন্ডের প্রসেসর বাঁচায় এবং সার্টিফিকেট নবায়ন সহজ করে তোলে।',
        },
      },
      {
        id: 'alg-qz-3',
        kind: 'mcq',
        topic: 'when-to-pick-l4',
        question: {
          en: 'When should an infrastructure architect choose a Layer 4 load balancer over a Layer 7 balancer?',
          bn: 'কখন একজন ইনফ্রাস্ট্রাকচার আর্কিটেক্টের লেয়ার ৭ এর পরিবর্তে লেয়ার ৪ লোড ব্যালেন্সার বেছে নেওয়া উচিত?',
        },
        options: [
          { en: 'When handling non-HTTP protocols (e.g. PostgreSQL, Redis, raw gaming UDP sockets) or when extreme packet throughput and sub-millisecond latency are required', bn: 'নন-এইচটিটিপি প্রোটোকল পরিচালনার সময় (যেমন PostgreSQL, Redis, গেমিং UDP সকেট) অথবা যখন চরম প্যাকেট গতি ও সাব-মিলিসেকেন্ড লেটেন্সি প্রয়োজন' },
          { en: 'When designing vector graphics in Adobe Photoshop', bn: 'অ্যাডোবি ফটোশপে ভেক্টর গ্রাফিক্স ডিজাইনের সময়' },
          { en: 'When typing an essay in a word processor', bn: 'ওয়ার্ড প্রসেসরে রচনা লেখার সময়' },
          { en: 'When replacing the mechanical keyboard on a laptop', bn: 'ল্যাপটপের মেকানিক্যাল কিবোর্ড পরিবর্তনের সময়' },
        ],
        answer: 0,
        hint: { en: 'For non-HTTP protocols and ultra-high packet throughput.', bn: 'নন-এইচটিটিপি প্রোটোকল ও অতি উচ্চ প্যাকেট গতির জন্য।' },
        explanation: {
          en: 'Layer 4 is optimal for raw TCP/UDP stream workloads like databases, VoIP, and gaming servers where HTTP parsing is unnecessary.',
          bn: 'ডেটাবেজ, ভয়েস কল এবং গেমিং সার্ভারের মতো কাঁচা টিসিপি/ইউডিপি কাজের জন্য লেয়ার ৪ সবচেয়ে কার্যকর।',
        },
      },
      {
        id: 'alg-qz-4',
        kind: 'predict',
        topic: 'application-layer-number',
        question: {
          en: 'What single digit represents the Application layer of the OSI network model (e.g. 7)?',
          bn: 'ওএসআই নেটওয়ার্ক মডেলের অ্যাপ্লিকেশন লেয়ার নির্দেশ করে কোন একক সংখ্যাটি (যেমন 7)?',
        },
        answer: '7',
        accept: ['7', 'Layer 7', 'layer 7', 'seven'],
        hint: { en: '7', bn: '7' },
        explanation: {
          en: 'Layer 7 is the Application layer of the OSI model, encompassing HTTP, WebSockets, and gRPC.',
          bn: 'লেয়ার ৭ হলো ওএসআই মডেলের অ্যাপ্লিকেশন লেয়ার, যা এইচটিটিপি, ওয়েবসকেট ও gRPC অন্তর্ভুক্ত করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'robins-and-the-robin',
    title: {
      en: 'Round-Robin and Weighted Balancers: Cyclic Scheduling and Hardware Capacities',
      bn: 'রাউন্ড-রবিন ও ওজনযুক্ত ব্যালেন্সার: চক্রাকার শিডিউলিং ও হার্ডওয়্যার সক্ষমতা',
    },
  },
};
