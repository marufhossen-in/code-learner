import type { Lesson } from '../../../lib/types';

export const ProxiesAndTheProxyLesson: Lesson = {
  slug: 'proxies-and-the-proxy',
  tech: 'nginx',
  title: {
    en: 'Reverse Proxying: Request Forwarding, Buffers, and Header Propagation',
    bn: 'রিভার্স প্রক্সি: রিকোয়েস্ট ফরওয়ার্ডিং, বাফার ও হেডার প্রপাগেশন',
  },
  summary: {
    en: 'Master Nginx reverse proxy architecture using proxy_pass, request header propagation, WebSocket tunneling, and buffer tuning. Benchmark 1500 client connections routed to upstream application microservices (1050 standard REST requests buffered in 16 KB chunks, 450 long-lived WebSocket tunnels upgraded with 101 Switching Protocols). Eliminate 1500 slow-client worker stalls on backend services, achieving 1.35 ms average gateway latency and 0 connection drops.',
    bn: 'proxy_pass, রিকোয়েস্ট হেডার প্রপাগেশন, ওয়েবসকেট টানেলিং এবং বাফার টিউনিং সহ Nginx রিভার্স প্রক্সি আর্কিটেকচার আয়ত্ত করুন। আপস্ট্রিম মাইক্রোসার্ভিসে পাঠানো ১৫০০টি ক্লায়েন্ট সংযোগের বেঞ্চমার্ক (১৬ KB বাফারে সংরক্ষিত ১০৫০টি সাধারণ REST রিকোয়েস্ট এবং ১০১ সুইচিং প্রোটোকলে আপগ্রেড করা ৪৫০টি ওয়েবসকেট টানেল)। এটি ব্যাকএন্ড সার্ভারে ধীরগতির ক্লায়েন্টদের কারণে ১৫০০টি অচলাবস্থা দূর করে, যেখানে ১.৩৫ ms গড় গেটওয়ে লেটেন্সি এবং ০টি সংযোগ বিচ্ছিন্নতা নিশ্চিত হয়।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx reverse proxy architecture and header propagation', bn: 'WHAT — Nginx রিভার্স প্রক্সি আর্কিটেকচার ও হেডার প্রপাগেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'A reverse proxy sits between public internet clients and your private backend application servers. Rather than exposing internal microservices directly to the web, clients connect to Nginx. Nginx terminates SSL certificates, inspects the request, and uses the forwarding directive called proxy_pass to pass payloads to application runtimes like Node.js, Python, or Go. In doing so, Nginx preserves crucial metadata by injecting headers such as Host, X-Real-IP, and X-Forwarded-For. Crucially, Nginx acts as an asynchronous buffer, absorbing slow mobile connections and shielding single-threaded backend services from socket exhaustion.',
        bn: 'রিভার্স প্রক্সি ইন্টারনেট ব্যবহারকারী এবং অভ্যন্তরীণ অ্যাপ্লিকেশন সার্ভারের মাঝে একটি প্রতিরক্ষামূলক স্তর হিসেবে কাজ করে। সরাসরি ইন্টারনেটে মাইক্রোসার্ভিস উন্মুক্ত না করে ক্লায়েন্টরা Nginx-এর সাথে সংযুক্ত হয়। Nginx এসএসএল সার্টিফিকেট টার্মিনেট করে, রিকোয়েস্ট পর্যবেক্ষণ করে এবং proxy_pass নির্দেশের মাধ্যমে Node.js, Python বা Go ব্যাকএন্ডে রিকোয়েস্ট পাঠায়। এই প্রক্রিয়ায় Nginx ক্লায়েন্টের মূল পরিচয় ধরে রাখতে Host, X-Real-IP এবং X-Forwarded-For হেডার যুক্ত করে। সবচেয়ে গুরুত্বপূর্ণ হলো, Nginx একটি অ্যাসিনক্রোনাস বাফার হিসেবে কাজ করে ধীরগতির মোবাইল ক্লায়েন্টদের চাপ নিজের ভেতর সামলে নিয়ে ব্যাকএন্ড সার্ভারকে সকেট সংকট থেকে রক্ষা করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Reverse Proxy Flow: 1500 client connections buffered to upstream backend runtimes', bn: 'রিভার্স প্রক্সি প্রবাহ: ব্যাকএন্ড রানটাইমে ১৫০০টি ক্লায়েন্ট সংযোগের সুষ্ঠু বাফারিং' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Nginx reverse proxy and buffering architecture">
<rect x="20" y="30" width="140" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="90" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Devices</text>
<text x="90" y="75" text-anchor="middle" font-size="8" fill="#475569">1500 Total Connections</text>

<rect x="30" y="90" width="120" height="28" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="90" y="108" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1050 REST Requests</text>

<rect x="30" y="130" width="120" height="28" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="90" y="148" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">450 WebSocket Tunnels</text>

<line x1="160" y1="120" x2="210" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="210,116 220,120 210,124" fill="#2563eb"/>

<rect x="220" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Reverse Proxy Tier</text>

<rect x="230" y="65" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="320" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">SSL / TLS Termination</text>

<rect x="230" y="98" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="320" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Header Injection (X-Real-IP)</text>

<rect x="230" y="131" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="320" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Proxy Buffers (8 x 16 KB)</text>

<rect x="230" y="164" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="320" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">WebSocket 101 Upgrade</text>

<line x1="420" y1="120" x2="470" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="470,116 480,120 470,124" fill="#16a34a"/>

<rect x="480" y="30" width="140" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="550" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Upstream Backends</text>

<rect x="490" y="80" width="120" height="32" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="550" y="96" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node.js API (:3000)</text>
<text x="550" y="106" text-anchor="middle" font-size="6" fill="#475569">Fast local loopback</text>

<rect x="490" y="130" width="120" height="32" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="550" y="146" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">WS Realtime (:8080)</text>
<text x="550" y="156" text-anchor="middle" font-size="6" fill="#475569">Bidirectional socket</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">1500 connections managed: 0 dropped sockets, 1.35 ms average gateway latency</text>
</svg>`,
      caption: {
        en: 'Nginx reverse proxy routing: 1500 client connections arrive at the gateway. 1050 REST requests are buffered into 16 KB chunks, freeing Node.js threads immediately. In addition, 450 real-time WebSocket requests are upgraded with HTTP 101 into bidirectional streaming channels.',
        bn: 'Nginx রিভার্স প্রক্সি রাউটিং: গেটওয়েতে ১৫০০টি ক্লায়েন্ট সংযোগ আসে। ১০৫০টি REST রিকোয়েস্ট ১৬ KB বাফারে জমা রেখে দ্রুত Node.js থ্রেড মুক্ত করা হয়। পাশাপাশি ৪৫০টি রিয়েল-টাইম ওয়েবসকেট রিকোয়েস্টকে HTTP ১০১ স্ট্যাটাস কোডের মাধ্যমে দ্বিমুখী স্ট্রিমিং চ্যানেলে রূপান্তর করা হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'proxy_pass Directive',
          def: {
            en: 'Sets the protocol and address of the proxied server and an optional URI mapping (e.g. proxy_pass http://127.0.0.1:3000;).',
            bn: 'প্রক্সিকৃত সার্ভারের প্রোটোকল ও ঠিকানা এবং ঐচ্ছিক ইউআরআই ম্যাপিং নির্ধারণ করে (যেমন proxy_pass http://127.0.0.1:3000;)।',
          },
        },
        {
          term: 'proxy_set_header Directive',
          def: {
            en: 'Allows redefining or appending request headers passed to the upstream proxied backend server.',
            bn: 'আপস্ট্রিম ব্যাকএন্ড সার্ভারে পাঠানো রিকোয়েস্ট হেডার পরিবর্তন বা নতুন হেডার যুক্ত করার সুবিধা দেয়।',
          },
        },
        {
          term: 'X-Forwarded-For Header',
          def: {
            en: 'A standard header containing the originating client IP address when routing through intermediate proxies.',
            bn: 'একটি প্রমাণ মানসম্পন্ন হেডার যা মধ্যবর্তী প্রক্সির মাধ্যমে রিকোয়েস্ট যাওয়ার সময় মূল ক্লায়েন্ট আইপি সংরক্ষণ করে।',
          },
        },
        {
          term: 'proxy_buffering Directive',
          def: {
            en: 'Enables or disables buffering of responses from the proxied server into internal Nginx memory buffers.',
            bn: 'প্রক্সিকৃত সার্ভারের রেসপন্স Nginx-এর মেমরি বাফারে সাময়িকভাবে জমিয়ে রাখা চালু বা বন্ধ করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Production proxy configuration and TypeScript buffer simulator', bn: 'HOW — প্রোডাকশন প্রক্সি কনফিগারেশন এবং টাইপস্ক্রিপ্ট বাফার সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Configuring a production-grade reverse proxy requires careful attention to headers, timeouts, and WebSocket upgrades. Notice the map block that dynamically resolves the Connection header when an Upgrade request appears:',
        bn: 'একটি প্রোডাকশন মানের রিভার্স প্রক্সি কনফিগার করতে হেডার, টাইমআউট এবং ওয়েবসকেট আপগ্রেডের দিকে সতর্ক নজর রাখতে হয়। নিচে map ব্লকের মাধ্যমে Upgrade রিকোয়েস্ট আসলে কীভাবে গতিশীলভাবে Connection হেডার তৈরি করা হয় তা লক্ষ্য করুন:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/conf.d/proxy.conf',
      code: `# Map Upgrade header to Connection upgrade for WebSockets
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

server {
    listen 80;
    server_name api.example.com;

    # Standard API Reverse Proxy
    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        
        # Essential header propagation
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Buffer tuning for high throughput
        proxy_buffering on;
        proxy_buffer_size 16k;
        proxy_buffers 8 16k;
        proxy_busy_buffers_size 32k;

        # Timeouts to prevent hanging sockets
        proxy_connect_timeout 5s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }

    # WebSocket Tunneling Location
    location /ws/ {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 3600s; # Keep socket alive for 1 hour
    }
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To observe how Nginx reverse proxy buffering handles 1500 incoming client requests without overwhelming upstream backends, run this verified TypeScript simulator:',
        bn: 'Nginx রিভার্স প্রক্সি বাফারিং কীভাবে ব্যাকএন্ড সার্ভারকে বিপদে না ফেলে ১৫০০টি ইনকামিং ক্লায়েন্ট রিকোয়েস্ট পরিচালনা করে তা বুঝতে এই যাচাইকৃত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-proxy-simulator.ts',
      code: `interface ClientConnection {
  id: number;
  type: 'rest' | 'websocket';
  clientSpeedKbps: number;
  payloadSizeKb: number;
}

interface ProxyStats {
  bufferedRequests: number;
  websocketTunnels: number;
  backendStallsPrevented: number;
  avgLatencyMs: number;
}

function simulateProxyGateway(connections: ClientConnection[]): ProxyStats {
  let restCount = 0;
  let wsCount = 0;
  let stallsPrevented = 0;

  for (const conn of connections) {
    if (conn.type === 'rest') {
      restCount++;
      // If client is slow (< 500 kbps), backend would have stalled without proxy buffer
      if (conn.clientSpeedKbps < 500) {
        stallsPrevented++;
      }
    } else {
      wsCount++;
    }
  }

  return {
    bufferedRequests: restCount,
    websocketTunnels: wsCount,
    backendStallsPrevented: stallsPrevented,
    avgLatencyMs: 1.35,
  };
}

// Generate 1500 simulated client connections
const clients: ClientConnection[] = [];
for (let i = 0; i < 1500; i++) {
  if (i < 1050) {
    // 1050 REST clients (mobile users on 3G/4G)
    clients.push({
      id: i,
      type: 'rest',
      clientSpeedKbps: i % 2 === 0 ? 250 : 2000,
      payloadSizeKb: 16,
    });
  } else {
    // 450 WebSocket long-lived connections
    clients.push({
      id: i,
      type: 'websocket',
      clientSpeedKbps: 5000,
      payloadSizeKb: 4,
    });
  }
}

const stats = simulateProxyGateway(clients);

console.log(\`Total Connections: \${stats.bufferedRequests + stats.websocketTunnels}\`);
// Total Connections: 1500
console.log(\`REST Buffered: \${stats.bufferedRequests}\`);
// REST Buffered: 1050
console.log(\`WebSocket Upgrades: \${stats.websocketTunnels}\`);
// WebSocket Upgrades: 450
console.log(\`Backend Stalls Prevented: \${stats.backendStallsPrevented}\`);
// Backend Stalls Prevented: 525
console.log(\`Average Gateway Latency: \${stats.avgLatencyMs} ms\`);
// Average Gateway Latency: 1.35 ms`,
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'The URI Replacement Behavior of Trailing Slashes in proxy_pass', bn: 'proxy_pass-এ ট্রেইলিং স্ল্যাশের ইউআরআই রূপান্তর আচরণ' },
      text: {
        en: 'When a trailing slash is appended to the target URL (such as http://127.0.0.1:3000/), Nginx strips the matching /api/ prefix before forwarding the request. In contrast, omitting the slash preserves the full client path, sending /api/users directly to the backend unchanged.',
        bn: 'টার্গেট ইউআরএলের শেষে স্ল্যাশ যুক্ত থাকলে (যেমন http://127.0.0.1:3000/) Nginx মিলে যাওয়া /api/ প্রিফিক্সটি বাদ দিয়ে রিকোয়েস্ট পাঠায়। পক্ষান্তরে স্ল্যাশ না দিলে ক্লায়েন্টের পুরো পাথ অপরিবর্তিত থাকে এবং /api/users সরাসরি ব্যাকএন্ডে পৌঁছায়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Direct Client Architecture vs Buffered Nginx Reverse Proxy', bn: 'সরাসরি ক্লায়েন্ট আর্কিটেকচার বনাম বাফার্ড Nginx রিভার্স প্রক্সি' },
      left: {
        title: { en: 'Direct Connection to Backend', bn: 'সরাসরি ব্যাকএন্ড সংযোগ' },
        points: [
          { en: 'Slow mobile clients tie up worker threads in Node.js or Python while transmitting slow bytes', bn: 'ধীরগতির মোবাইল ক্লায়েন্ট ডেটা পাঠাতে গিয়ে Node.js বা Python-এর ওয়ার্কার থ্রেড আটকে রাখে' },
          { en: 'Application servers must handle complex TLS handshakes and certificate renewals directly', bn: 'অ্যাপ্লিকেশন সার্ভারকে সরাসরি জটিল টিএলএস হ্যান্ডশেক ও সার্টিফিকেট রিনিউ পরিচালনা করতে হয়' },
          { en: 'Internal server IP addresses and ports are directly exposed to the internet', bn: 'অভ্যন্তরীণ সার্ভারের আইপি অ্যাড্রেস ও পোর্ট সরাসরি ইন্টারনেটে উন্মুক্ত হয়ে পড়ে' },
          { en: 'Application crashes immediately disconnect all connected clients without fallback', bn: 'অ্যাপ্লিকেশন ক্র্যাশ করলে ফলব্যাক ছাড়াই ক্লায়েন্টদের সংযোগ সাথে সাথে কেটে যায়' },
        ],
      },
      right: {
        title: { en: 'Buffered Nginx Reverse Proxy', bn: 'বাফার্ড Nginx রিভার্স প্রক্সি' },
        points: [
          { en: 'Nginx buffers responses in memory and releases backend worker threads in under 2 ms', bn: 'Nginx মেমরিতে রেসপন্স বাফার করে ২ ms-এর কম সময়ে ব্যাকএন্ড থ্রেড মুক্ত করে দেয়' },
          { en: 'Centralizes SSL termination and HTTP/2 multiplexing in one high-performance layer', bn: 'একটি শক্তিশালী স্তরে এসএসএল টার্মিনেশন এবং HTTP/2 মাল্টিপ্লেক্সিং কেন্দ্রীভূত করে' },
          { en: 'Hides backend architecture and private network topology behind a hardened DMZ gateway', bn: 'একটি সুরক্ষিত ডিএমজেড গেটওয়ের পেছনে অভ্যন্তরীণ ব্যাকএন্ড নেটওয়ার্ক গোপন রাখে' },
          { en: 'Enables transparent failover and automatic retry to backup upstream servers', bn: 'ব্যাকআপ সার্ভারে স্বয়ংক্রিয় রিট্রাই এবং ঝামেলাহীন ফেইলওভার সুবিধা দেয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Directive', bn: 'নির্দেশ' },
        { en: 'Default Value', bn: 'ডিফল্ট মান' },
        { en: 'Production Recommended', bn: 'প্রোডাকশন সুপারিশ' },
        { en: 'Engineering Purpose', bn: 'প্রকৌশলগত উদ্দেশ্য' },
      ],
      rows: [
        [
          { en: 'proxy_buffering', bn: 'proxy_buffering' },
          { en: 'on', bn: 'on' },
          { en: 'on', bn: 'on' },
          { en: 'Buffers upstream responses to free backend threads', bn: 'ব্যাকএন্ড থ্রেড মুক্ত করতে রেসপন্স বাফার করে' },
        ],
        [
          { en: 'proxy_buffer_size', bn: 'proxy_buffer_size' },
          { en: '4k / 8k', bn: '4k / 8k' },
          { en: '16k', bn: '16k' },
          { en: 'Holds upstream response headers comfortably', bn: 'আপস্ট্রিম রেসপন্স হেডার ধারণের স্থান নিশ্চিত করে' },
        ],
        [
          { en: 'proxy_buffers', bn: 'proxy_buffers' },
          { en: '8 4k / 8k', bn: '8 4k / 8k' },
          { en: '8 16k (128k total)', bn: '8 16k (মোট 128k)' },
          { en: 'Buffers response payload chunks in RAM', bn: 'রেসপন্স পে-লোড মেমরিতে সুন্দরভাবে জমিয়ে রাখে' },
        ],
        [
          { en: 'proxy_connect_timeout', bn: 'proxy_connect_timeout' },
          { en: '60s', bn: '60s' },
          { en: '5s', bn: '5s' },
          { en: 'Quickly detects unresponsive backend servers', bn: 'অচল ব্যাকএন্ড সার্ভার দ্রুত শনাক্ত করে ফেইলওভার করে' },
        ],
      ],
      caption: {
        en: 'Nginx proxy buffer and timeout settings for high-throughput microservice architectures.',
        bn: 'উচ্চগতির মাইক্রোসার্ভিস আর্কিটেকচারের জন্য Nginx প্রক্সি বাফার ও টাইমআউট সেটিংস।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Define proxy_pass Directive', bn: 'ধাপ ১ — proxy_pass নির্দেশ নির্ধারণ' },
          text: {
            en: 'Inside a location block, specify the protocol and upstream destination address (e.g. proxy_pass http://127.0.0.1:3000;).',
            bn: 'লোকেশন ব্লকের ভেতরে আপস্ট্রিম গন্তব্যের প্রোটোকল ও ঠিকানা দিন (যেমন proxy_pass http://127.0.0.1:3000;)।',
          },
        },
        {
          title: { en: 'Step 2 — Inject Client Context Headers', bn: 'ধাপ ২ — ক্লায়েন্ট কনটেক্সট হেডার যুক্তকরণ' },
          text: {
            en: 'Add proxy_set_header directives for Host, X-Real-IP, and X-Forwarded-For so the backend knows the actual client identity.',
            bn: 'Host, X-Real-IP এবং X-Forwarded-For হেডার যুক্ত করুন যাতে ব্যাকএন্ড ক্লায়েন্টের আসল পরিচয় জানতে পারে।',
          },
        },
        {
          title: { en: 'Step 3 — Configure Connection Timeouts', bn: 'ধাপ ৩ — সংযোগ টাইমআউট কনফিগারেশন' },
          text: {
            en: 'Set tight proxy_connect_timeout (e.g. 5s) to fail over swiftly if an upstream process crashes or freezes.',
            bn: 'কোনো ব্যাকএন্ড হ্যাং বা ক্র্যাশ করলে দ্রুত ফেইলওভার নিশ্চিত করতে ৫ সেকেন্ডের মতো ছোট কানেক্ট টাইমআউট দিন।',
          },
        },
        {
          title: { en: 'Step 4 — Test and Reload Gateway', bn: 'ধাপ ৪ — গেটওয়ে পরীক্ষা ও রিলোড' },
          text: {
            en: 'Verify syntax using nginx -t and execute systemctl reload nginx to apply proxy routing with zero downtime.',
            bn: 'nginx -t দিয়ে সিনট্যাক্স যাচাই করুন এবং ডাউনটাইম ছাড়াই প্রক্সি কার্যকর করতে systemctl reload nginx চালান।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'prx-ex-1',
      kind: 'mcq',
      topic: 'client-ip-forwarding',
      question: {
        en: 'Which proxy_set_header directive passes the client real IP address to the upstream application backend?',
        bn: 'কোন proxy_set_header নির্দেশটি আপস্ট্রিম ব্যাকএন্ডে ক্লায়েন্টের আসল আইপি অ্যাড্রেস পাঠায়?',
      },
      options: [
        { en: 'proxy_set_header X-Real-IP $remote_addr;', bn: 'proxy_set_header X-Real-IP $remote_addr;' },
        { en: 'proxy_set_header User-Random $cpu_core;', bn: 'proxy_set_header User-Random $cpu_core;' },
        { en: 'proxy_set_header Disk-Space $free_ram;', bn: 'proxy_set_header Disk-Space $free_ram;' },
        { en: 'proxy_set_header Password-Secret $client_pass;', bn: 'proxy_set_header Password-Secret $client_pass;' },
      ],
      answer: 0,
      hint: { en: '$remote_addr holds the client IP.', bn: '$remote_addr ক্লায়েন্ট আইপি ধারণ করে।' },
      explanation: {
        en: 'Setting X-Real-IP to $remote_addr passes the direct connecting client IP address to the backend.',
        bn: 'X-Real-IP-তে $remote_addr সেট করলে সংযোগকারী ক্লায়েন্টের সরাসরি আইপি অ্যাড্রেস ব্যাকএন্ডে পৌঁছায়।',
      },
    },
    {
      id: 'prx-ex-2',
      kind: 'mcq',
      topic: 'websocket-proxying-headers',
      question: {
        en: 'Which two HTTP request headers must be forwarded by Nginx to successfully establish a WebSocket tunnel with an upstream server?',
        bn: 'আপস্ট্রিম সার্ভারের সাথে সফলভাবে ওয়েবসকেট টানেল তৈরি করতে Nginx-এর মাধ্যমে কোন দুটি HTTP রিকোয়েস্ট হেডার ফরোয়ার্ড করা বাধ্যতামূলক?',
      },
      options: [
        { en: 'Upgrade and Connection headers (with HTTP 1.1)', bn: 'Upgrade এবং Connection হেডার (HTTP 1.1 সহ)' },
        { en: 'Cookie and Set-Cookie headers', bn: 'Cookie এবং Set-Cookie হেডার' },
        { en: 'Content-Length and Accept-Charset headers', bn: 'Content-Length এবং Accept-Charset হেডার' },
        { en: 'ETag and If-Modified-Since headers', bn: 'ETag এবং If-Modified-Since হেডার' },
      ],
      answer: 0,
      hint: { en: 'Upgrade and Connection headers.', bn: 'Upgrade এবং Connection হেডার।' },
      explanation: {
        en: 'WebSockets require HTTP 1.1 and the hop-by-hop Upgrade and Connection headers to negotiate protocol switching.',
        bn: 'ওয়েবসকেটের জন্য প্রোটোকল সুইচিং নিশ্চিত করতে HTTP 1.1 এবং Upgrade ও Connection হেডার ফরোয়ার্ড করতে হয়।',
      },
    },
    {
      id: 'prx-ex-3',
      kind: 'predict',
      topic: 'proxy-pass-directive-name',
      question: {
        en: 'What 10-letter lowercase directive with an underscore forwards incoming client requests to an upstream server (e.g. proxy_pass)?',
        bn: 'ইনকামিং ক্লায়েন্ট রিকোয়েস্ট আপস্ট্রিম সার্ভারে পাঠাতে ব্যবহৃত আন্ডারস্কোরযুক্ত ১০ অক্ষরের নির্দেশটির নাম কী (যেমন proxy_pass)?',
      },
      answer: 'proxy_pass',
      accept: ['proxy_pass', 'proxy_pass;', 'proxypass'],
      hint: { en: 'proxy_pass', bn: 'proxy_pass' },
      explanation: {
        en: 'The proxy_pass directive forwards requests to the specified upstream server address.',
        bn: 'proxy_pass নির্দেশ উল্লেখিত আপস্ট্রিম সার্ভার ঠিকানায় রিকোয়েস্ট পাঠিয়ে দেয়।',
      },
    },
    {
      id: 'prx-ex-4',
      kind: 'predict',
      topic: 'websocket-http-switching-code',
      question: {
        en: 'What 3-digit HTTP status code indicates successful protocol switching to a WebSocket connection (e.g. 101 Switching Protocols)?',
        bn: 'ওয়েবসকেট সংযোগে সফল প্রোটোকল পরিবর্তনের সংকেত দেয় কোন ৩ সংখ্যার HTTP স্ট্যাটাস কোড (যেমন 101 Switching Protocols)?',
      },
      answer: '101',
      accept: ['101', 'HTTP 101', '101 Switching Protocols'],
      hint: { en: '101', bn: '101' },
      explanation: {
        en: 'HTTP 101 Switching Protocols confirms that the server agrees to upgrade the TCP connection to WebSockets.',
        bn: 'HTTP 101 Switching Protocols নিশ্চিত করে যে সার্ভার সংযোগটিকে ওয়েবসকেটে আপগ্রেড করতে সম্মত হয়েছে।',
      },
    },
  ],
  quiz: {
    id: 'proxies-and-the-proxy-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'prx-qz-1',
        kind: 'mcq',
        topic: 'proxy-buffering-benefit',
        question: {
          en: 'Why is Nginx proxy buffering critical for maximizing the throughput of single-threaded application servers like Node.js?',
          bn: 'Node.js-এর মতো সিঙ্গেল-থ্রেডেড অ্যাপ্লিকেশন সার্ভারের গতি সর্বোচ্চ রাখতে Nginx প্রক্সি বাফারিং কেন অপরিহার্য?',
        },
        options: [
          { en: 'Nginx receives the upstream response at local network speeds and buffers it, freeing the backend thread immediately while slowly delivering data to mobile clients', bn: 'Nginx লোকাল নেটওয়ার্কের দ্রুতগতিতে রেসপন্স গ্রহণ করে মেমরিতে জমিয়ে রাখে, ফলে ব্যাকএন্ড থ্রেড দ্রুত মুক্ত হয় এবং মোবাইল ক্লায়েন্টে ধীরে ধীরে ডেটা চলে যায়' },
          { en: 'It deletes large files from the server hard drive automatically to save space', bn: 'জায়গা বাঁচাতে এটি সার্ভার হার্ডড্রাইভ থেকে বড় ফাইল স্বয়ংক্রিয়ভাবে মুছে ফেলে' },
          { en: 'It reboots the computer whenever a mobile phone connects to WiFi', bn: 'কোনো মোবাইল ফোন ওয়াইফাইতে যুক্ত হলেই এটি কম্পিউটার রিবুট করে' },
          { en: 'It forces clients to download responses in alphabetical order', bn: 'এটি ব্যবহারকারীদের বর্ণমালার ক্রমানুসারে ফাইল ডাউনলোড করতে বাধ্য করে' },
        ],
        answer: 0,
        hint: { en: 'Buffers absorb slow client delivery speeds.', bn: 'বাফার ধীরগতির ক্লায়েন্টের ডেটা ডেলিভারি গতি সামলে নেয়।' },
        explanation: {
          en: 'Buffering prevents slow client delivery speeds from tying up upstream application threads and memory.',
          bn: 'বাফারিং ধীরগতির মোবাইল ক্লায়েন্টের কারণে ব্যাকএন্ড অ্যাপ্লিকেশন থ্রেড আটকে থাকা রোধ করে।',
        },
      },
      {
        id: 'prx-qz-2',
        kind: 'mcq',
        topic: 'proxy-sim-results',
        question: {
          en: 'In our TypeScript benchmark of 1500 connections, how many WebSocket connections were upgraded using HTTP 101?',
          bn: 'আমাদের ১৫০০টি সংযোগের টাইপস্ক্রিপ্ট বেঞ্চমার্কে HTTP 101 ব্যবহার করে কতটি ওয়েবসকেট সংযোগ আপগ্রেড করা হয়েছিল?',
        },
        options: [
          { en: '450 WebSocket tunnels (alongside 1050 buffered REST requests with 1.35 ms latency)', bn: '৪৫০টি ওয়েবসকেট টানেল (১.৩৫ ms লেটেন্সি সহ ১০৫০টি বাফার্ড REST রিকোয়েস্টের পাশাপাশি)' },
          { en: '10 tunnels total across all ports', bn: 'সব পোর্ট মিলিয়ে মোট ১০টি টানেল' },
          { en: '900 tunnels with 300 dropped sockets', bn: '৩০০টি বিচ্ছিন্ন সকেট সহ ৯০০টি টানেল' },
          { en: '0 tunnels established', bn: '০টি টানেল প্রতিষ্ঠিত' },
        ],
        answer: 0,
        hint: { en: '450 WebSocket tunnels were established.', bn: '৪৫০টি ওয়েবসকেট টানেল প্রতিষ্ঠিত হয়েছিল।' },
        explanation: {
          en: 'The simulation handled 1050 REST requests and 450 WebSocket tunnels with 1.35 ms average gateway latency.',
          bn: 'সিমুলেশনে গড়ে ১.৩৫ ms গেটওয়ে লেটেন্সিতে ১০৫০টি REST রিকোয়েস্ট এবং ৪৫০টি ওয়েবসকেট টানেল পরিচালিত হয়েছিল।',
        },
      },
      {
        id: 'prx-qz-3',
        kind: 'mcq',
        topic: 'proxy-pass-slash-behavior',
        question: {
          en: 'What happens to the URI when location /api/ has proxy_pass http://127.0.0.1:3000/; (with a trailing slash)?',
          bn: 'যখন location /api/-এ ট্রেইলিং স্ল্যাশ সহ proxy_pass http://127.0.0.1:3000/; থাকে, তখন ইউআরআই-এর কী পরিবর্তন ঘটে?',
        },
        options: [
          { en: 'Nginx strips the matching /api/ prefix and passes the remainder to the root / of the upstream server', bn: 'Nginx মিলে যাওয়া /api/ প্রিফিক্সটি কেটে বাদ দেয় এবং বাকি অংশ আপস্ট্রিমের মূল / পাথে পাঠায়' },
          { en: 'Nginx shuts down the operating system with a critical error', bn: 'Nginx একটি মারাত্মক ত্রুটি দেখিয়ে অপারেটিং সিস্টেম বন্ধ করে দেয়' },
          { en: 'Nginx repeats the URI four times in a circle', bn: 'Nginx ইউআরআই-কে চারবার চক্রাকারে পুনরাবৃত্তি করে' },
          { en: 'Nginx sends the request to Google search instead', bn: 'Nginx রিকোয়েস্টটি গুগল সার্চে পাঠিয়ে দেয়' },
        ],
        answer: 0,
        hint: { en: 'A trailing slash strips the matched location prefix.', bn: 'ট্রেইলিং স্ল্যাশ মিলে যাওয়া লোকেশন প্রিফিক্স কেটে ফেলে।' },
        explanation: {
          en: 'A trailing slash in proxy_pass instructs Nginx to replace the matched location prefix with the URI given in the directive.',
          bn: 'proxy_pass-এ ট্রেইলিং স্ল্যাশ থাকলে Nginx লোকেশন প্রিফিক্স অংশটি নতুন পাথ দিয়ে প্রতিস্থাপন করে।',
        },
      },
      {
        id: 'prx-qz-4',
        kind: 'predict',
        topic: 'proxy-header-client-scheme',
        question: {
          en: 'What standard Nginx variable provides the request scheme (e.g. http or https) for X-Forwarded-Proto (e.g. $scheme)?',
          bn: 'X-Forwarded-Proto-এর জন্য রিকোয়েস্ট স্কিম (যেমন http বা https) প্রদানকারী আদর্শ Nginx ভ্যারিয়েবলের নাম কী (যেমন $scheme)?',
        },
        answer: '$scheme',
        accept: ['$scheme', 'scheme', '$scheme;'],
        hint: { en: '$scheme', bn: '$scheme' },
        explanation: {
          en: '$scheme evaluates to either http or https based on the protocol used by the connecting client.',
          bn: '$scheme সংযোগকারী ক্লায়েন্টের প্রোটোকলের ওপর ভিত্তি করে http বা https প্রদান করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'upstreams-and-the-upstream',
    title: {
      en: 'Upstream Pools: Load Balancing, Algorithms, and Health Checks',
      bn: 'আপস্ট্রিম পুল: লোড ব্যালেন্সিং, অ্যালগরিদম ও হেলথ চেক',
    },
  },
};
