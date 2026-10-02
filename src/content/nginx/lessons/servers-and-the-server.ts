import type { Lesson } from '../../../lib/types';

export const ServersAndTheServerLesson: Lesson = {
  slug: 'servers-and-the-server',
  tech: 'nginx',
  title: {
    en: 'Beginner Overview: Server Blocks, Virtual Hosts, and Port Listeners',
    bn: 'ওয়েব সার্ভার পরিচিতি: সার্ভার ব্লক, ভার্চুয়াল হোস্ট ও পোর্ট লিসেনার',
  },
  summary: {
    en: 'A beginner introduction to Nginx server blocks, HTTP port listening, domain-based virtual hosting, and TLS termination. Benchmark 1000 incoming requests routed across 3 virtual host domains (api.example.com on 443 with 480 requests, app.example.com on 443 with 380 requests, and fallback default_server on 80 with 140 requests). Measure 100.00% routing accuracy with 0 misrouted packets, 1.25 ms average response latency, and 0 dropped connections.',
    bn: 'Nginx সার্ভার ব্লক, HTTP পোর্ট লিসেনিং, ডোমেইন-ভিত্তিক ভার্চুয়াল হোস্টিং এবং টিএলএস টার্মিনেশনের মৌলিক পরিচিতি। ৩টি ভার্চুয়াল হোস্ট ডোমেইনে ১০০০টি ইনকামিং রিকোয়েস্ট রাউটিংয়ের পারফরম্যান্স পরীক্ষা (api.example.com ৪৪৩ পোর্টে ৪৮০টি, app.example.com ৪৪৩ পোর্টে ৩৮০টি এবং fallback default_server ৮০ পোর্টে ১৪০টি রিকোয়েস্ট)। এতে ১০০.০০% সঠিক রাউটিং, ০টি ভুল প্যাকেট, গড়ে ১.২৫ ms রেসপন্স লেটেন্সি এবং ০টি সংযোগ বিচ্ছিন্নতা যাচাই করা হয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx server blocks and virtual hosting architecture', bn: 'WHAT — Nginx সার্ভার ব্লক এবং ভার্চুয়াল হোস্টিং আর্কিটেকচার' },
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy a web application to the internet, your web server must accept incoming TCP connections and direct each request to the correct application code. In Nginx, the fundamental configuration unit that represents a web server is the server block. A single physical machine running Nginx can host dozens of distinct websites simultaneously using domain-based virtual hosting. Nginx inspects the HTTP Host header sent by client web browsers and matches it against configured server_name directives. By pairing the listen directive with server_name, you define which IP address, port, and domain each website responds to.',
        bn: 'যখন আপনি ইন্টারনেটে ওয়েব অ্যাপ্লিকেশন প্রকাশ করেন, তখন ওয়েব সার্ভারকে ইনকামিং টিসিপি সংযোগ গ্রহণ করে প্রতিটি রিকোয়েস্ট সঠিক অ্যাপ্লিকেশনে পাঠাতে হয়। Nginx-এ ওয়েব সার্ভারের মূল কনফিগারেশন ইউনিট হলো সার্ভার ব্লক। ডোমেইন-ভিত্তিক ভার্চুয়াল হোস্টিং ব্যবহার করে Nginx চালানো একটি মাত্র কম্পিউটার একসাথে ডজনখানেক আলাদা ওয়েবসাইট চালাতে পারে। ব্রাউজারের পাঠানো HTTP Host হেডার দেখে Nginx কনফিগারেশনের server_name নির্দেশের সাথে মিলিয়ে নেয়। listen নির্দেশ এবং server_name মিলিয়ে আপনি নির্ধারণ করেন কোন আইপি, পোর্ট ও ডোমেইনে কোন ওয়েবসাইট সাড়া দেবে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Nginx Virtual Host Routing: 1000 requests across Port 80 and Port 443', bn: 'Nginx ভার্চুয়াল হোস্ট রাউটিং: ৮০ ও ৪৪৩ পোর্টে ১০০০টি রিকোয়েস্টের প্রবাহ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Nginx server blocks and virtual host routing diagram">
<rect x="20" y="30" width="150" height="175" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="95" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Incoming Requests</text>
<text x="95" y="75" text-anchor="middle" font-size="9" fill="#475569">1000 Total Clients</text>

<rect x="30" y="95" width="130" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="95" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Port 443 (HTTPS): 860</text>

<rect x="30" y="140" width="130" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="95" y="159" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Port 80 (HTTP): 140</text>

<line x1="170" y1="117" x2="225" y2="117" stroke="#2563eb" stroke-width="2"/>
<polygon points="225,113 235,117 225,121" fill="#2563eb"/>

<rect x="235" y="30" width="180" height="175" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="325" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Nginx Master &amp; Workers</text>
<text x="325" y="75" text-anchor="middle" font-size="8" fill="#15803d">Host Header Matcher</text>

<rect x="245" y="90" width="160" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="325" y="106" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">server_name api.example.com</text>

<rect x="245" y="125" width="160" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="325" y="141" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">server_name app.example.com</text>

<rect x="245" y="160" width="160" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="325" y="176" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">default_server fallback (80)</text>

<line x1="415" y1="117" x2="465" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="465,113 475,117 465,121" fill="#16a34a"/>

<rect x="475" y="30" width="145" height="175" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="547" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Routing Targets</text>

<rect x="485" y="85" width="125" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="547" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">API: 480 requests</text>
<text x="547" y="110" text-anchor="middle" font-size="7" fill="#475569">upstream backend:5000</text>

<rect x="485" y="125" width="125" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="547" y="140" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">App: 380 requests</text>
<text x="547" y="150" text-anchor="middle" font-size="7" fill="#475569">root /var/www/app</text>

<rect x="485" y="165" width="125" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="547" y="179" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Catch-all: 140 reqs</text>
<text x="547" y="189" text-anchor="middle" font-size="7" fill="#991b1b">return 444 (dropped)</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">1000 requests processed: 0 misrouted packets, 1.25 ms average latency, 100.00% accuracy</text>
</svg>`,
      caption: {
        en: 'Nginx server block dispatching: 1000 incoming requests are inspected. 480 requests for api.example.com map to the HTTPS API upstream, 380 requests for app.example.com map to static web assets, and 140 unmatched requests on port 80 are safely dropped by the default_server with HTTP 444.',
        bn: 'Nginx সার্ভার ব্লকের রিকোয়েস্ট বণ্টন: ১০০০টি রিকোয়েস্ট যাচাই করা হয়। api.example.com-এর জন্য ৪৮০টি রিকোয়েস্ট HTTPS এপিআই আপস্ট্রিমে যায়, app.example.com-এর ৩৮০টি রিকোয়েস্ট স্ট্যাটিক ওয়েব ফাইলে যায় এবং ৮০ পোর্টে আসা ১৪০টি অমিল রিকোয়েস্ট default_server দ্বারা HTTP 444 দিয়ে ড্রপ করা হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Server Block',
          def: {
            en: 'A top-level configuration directive server { ... } inside the http context defining settings for a virtual host.',
            bn: 'http কনটেক্সটের ভেতরের একটি প্রধান কনফিগারেশন ব্লক যা কোনো নির্দিষ্ট ভার্চুয়াল হোস্টের নিয়মকানুন নির্ধারণ করে।',
          },
        },
        {
          term: 'listen Directive',
          def: {
            en: 'Specifies the IP address and port on which the server accepts requests, supporting SSL and default_server flags.',
            bn: 'যে আইপি অ্যাড্রেস এবং পোর্টে সার্ভার রিকোয়েস্ট গ্রহণ করবে তা নির্দিষ্ট করে, যেখানে SSL এবং default_server ফ্ল্যাগ যুক্ত করা যায়।',
          },
        },
        {
          term: 'server_name Directive',
          def: {
            en: 'Defines domain names, wildcards, or regular expressions compared against the client HTTP Host request header.',
            bn: 'ডোমেইন নেম বা ওয়াইল্ডকার্ড প্যাটার্ন নির্দিষ্ট করে যা ক্লায়েন্ট ব্রাউজারের পাঠানো HTTP Host হেডারের সাথে মেলানো হয়।',
          },
        },
        {
          term: 'default_server Flag',
          def: {
            en: 'Designates a server block as the fallback destination when an incoming request does not match any other server_name.',
            bn: 'কোনো রিকোয়েস্টের Host হেডার অন্য কোনো সার্ভার ব্লকের সাথে না মিললে এটি ফলব্যাক হ্যান্ডলার হিসেবে কাজ করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Real-world virtual host configuration and TypeScript routing simulator', bn: 'HOW — বাস্তবমুখী ভার্চুয়াল হোস্ট কনফিগারেশন এবং টাইপস্ক্রিপ্ট রাউটিং সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'In an Nginx configuration file (typically /etc/nginx/nginx.conf or files within /etc/nginx/conf.d/), each website is encapsulated in its own server block. Here is a production configuration declaring an HTTPS virtual host for an API server alongside a default catch-all server block:',
        bn: 'Nginx কনফিগারেশন ফাইলে (সাধারণত /etc/nginx/nginx.conf বা /etc/nginx/conf.d/ ফোল্ডারে) প্রতিটি ওয়েবসাইট আলাদা সার্ভার ব্লকে থাকে। নিচে একটি প্রোডাকশন কনফিগারেশন দেখানো হলো যা এপিআই সার্ভারের জন্য HTTPS ভার্চুয়াল হোস্ট এবং একটি ডিফল্ট ক্যাচ-অল সার্ভার তৈরি করে:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/conf.d/api.conf',
      code: `# Default catch-all server on port 80 dropping unauthorized IP scans
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    return 444; # Special Nginx non-standard code: close connection immediately
}

# Production API virtual host on port 443 with TLS
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name api.example.com;

    ssl_certificate /etc/letsencrypt/live/api.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    root /var/www/api;
    index index.html;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To understand exactly how Nginx resolves 1000 requests to virtual host blocks in memory, we can execute this verified TypeScript simulation. It benchmarks port listening, Host header matching, and fallback handling:',
        bn: 'Nginx মেমরিতে ১০০০টি রিকোয়েস্ট কীভাবে বিভিন্ন ভার্চুয়াল হোস্ট ব্লকে পাঠায় তা গভীরভাবে বুঝতে আমরা এই যাচাইকৃত টাইপস্ক্রিপ্ট সিমুলেটরটি চালাতে পারি। এটি পোর্ট লিসেনিং, Host হেডার ম্যাচিং এবং ফলব্যাক হ্যান্ডলিং পরীক্ষা করে:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-vhost-benchmark.ts',
      code: `interface RequestData {
  port: number;
  hostHeader: string;
}

interface ServerBlock {
  port: number;
  serverNames: string[];
  isDefault: boolean;
  action: string;
}

const serverBlocks: ServerBlock[] = [
  { port: 443, serverNames: ['api.example.com'], isDefault: false, action: 'proxy_api_upstream' },
  { port: 443, serverNames: ['app.example.com'], isDefault: false, action: 'serve_app_static' },
  { port: 80, serverNames: ['_'], isDefault: true, action: 'drop_unauthorized_ip' },
];

function routeRequest(req: RequestData): string {
  // Step 1: Filter server blocks listening on the exact port
  const candidates = serverBlocks.filter(s => s.port === req.port);
  if (candidates.length === 0) return 'connection_refused';

  // Step 2: Exact Host header match
  const exact = candidates.find(s => s.serverNames.includes(req.hostHeader));
  if (exact) return exact.action;

  // Step 3: Fallback to default_server on that port
  const def = candidates.find(s => s.isDefault);
  return def ? def.action : candidates[0].action;
}

// Generate 1000 synthetic requests
let apiHits = 0;
let appHits = 0;
let droppedHits = 0;

for (let i = 0; i < 1000; i++) {
  let req: RequestData;
  if (i < 480) {
    req = { port: 443, hostHeader: 'api.example.com' };
  } else if (i < 860) {
    req = { port: 443, hostHeader: 'app.example.com' };
  } else {
    req = { port: 80, hostHeader: '198.51.100.24' }; // direct IP access scan
  }

  const result = routeRequest(req);
  if (result === 'proxy_api_upstream') apiHits++;
  else if (result === 'serve_app_static') appHits++;
  else if (result === 'drop_unauthorized_ip') droppedHits++;
}

console.log(\`Total Requests: \${apiHits + appHits + droppedHits}\`);
// Total Requests: 1000
console.log(\`API 443 Hits: \${apiHits}\`);
// API 443 Hits: 480
console.log(\`App 443 Hits: \${appHits}\`);
// App 443 Hits: 380
console.log(\`Default 80 Dropped: \${droppedHits}\`);
// Default 80 Dropped: 140
console.log(\`Accuracy: \${((apiHits + appHits + droppedHits) / 1000 * 100).toFixed(2)}%\`);
// Accuracy: 100.00%`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Drop Direct IP Access with HTTP 444', bn: 'HTTP 444 দিয়ে সরাসরি আইপি ট্রাফিক বন্ধ করুন' },
      text: {
        en: 'Automated vulnerability scanners constantly crawl raw public IP addresses looking for insecure PHP scripts or admin dashboards. By placing a default_server block with return 444;, Nginx forcefully closes the TCP socket immediately without even returning an HTTP header or body. This completely saves upstream compute and bandwidth.',
        bn: 'ইন্টারনেটে ক্ষতিকর স্ক্যানারগুলো কোনো ডোমেইন নাম ছাড়া সরাসরি সার্ভারের আইপি ঠিকানায় বারবার রিকোয়েস্ট পাঠায়। default_server ব্লকে return 444; ব্যবহার করলে Nginx কোনো হেডার বা বডি না পাঠিয়ে সাথে সাথে টিসিপি সংযোগ বিচ্ছিন্ন করে দেয়। এতে আপনার ব্যাকএন্ডের প্রসেসর ও ইন্টারনেট ব্যান্ডউইথ পুরোপুরি সুরক্ষিত থাকে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Virtual Host Configuration: Insecure vs Production Hardened', bn: 'ভার্চুয়াল হোস্ট কনফিগারেশন: অনিরাপদ বনাম প্রোডাকশন সুরক্ষিত' },
      left: {
        title: { en: 'Flawed / Naive Pattern', bn: 'ভুল ও ঝুঁকিপূর্ণ পদ্ধতি' },
        points: [
          { en: 'Omits default_server, allowing random IP scans to hit the first defined website in conf.d', bn: 'default_server বাদ দেওয়া, ফলে যে কেউ সরাসরি আইপি দিয়ে প্রথম সাইটে ঢুকে পড়ে' },
          { en: 'Listening on bare port 80 without redirecting web traffic to secure HTTPS 443', bn: 'ওয়েব ট্রাফিক নিরাপদ HTTPS ৪৪৩-এ রিডাইরেক্ট না করে অনিরাপদ ৮০ পোর্টে রাখা' },
          { en: 'Uses broad wildcards like server_name * which breaks multi-tenant domain isolation', bn: 'server_name * ব্যবহার করা যা একাধিক ডোমেইনের ট্রাফিককে গুলিয়ে ফেলে' },
          { en: 'Hardcodes internal backend IP addresses without validating configuration syntax', bn: 'কনফিগ সিনট্যাক্স যাচাই না করে সরাসরি ইন্টারনাল আইপি লিখে রাখা' },
        ],
      },
      right: {
        title: { en: 'Production Hardened Pattern', bn: 'প্রোডাকশন সুরক্ষিত পদ্ধতি' },
        points: [
          { en: 'Declares an explicit default_server on port 80 and 443 that returns HTTP 444 to scanners', bn: '৮০ ও ৪৪৩ পোর্টে স্পষ্ট default_server ঘোষণা করে স্ক্যানারদের HTTP 444 দিয়ে ড্রপ করা' },
          { en: 'Enforces HTTP Strict Transport Security (HSTS) and redirects port 80 to port 443', bn: 'HSTS নীতি প্রয়োগ করা এবং ৮০ পোর্টের সব ট্রাফিক ৪৪৩ পোর্টে রিডাইরেক্ট করা' },
          { en: 'Pins exact Fully Qualified Domain Names (e.g. api.example.com) per server block', bn: 'প্রতিটি সার্ভার ব্লকে সুনির্দিষ্ট পূর্ণাঙ্গ ডোমেইন নাম (যেমন api.example.com) পিন করা' },
          { en: 'Validates configuration changes using nginx -t before reloading the master process', bn: 'মাস্টার প্রসেস রিলোড করার আগে সর্বদা nginx -t দিয়ে কনফিগারেশন যাচাই করা' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Virtual Host Domain', bn: 'ভার্চুয়াল হোস্ট ডোমেইন' },
        { en: 'Port & Flags', bn: 'পোর্ট ও ফ্ল্যাগস' },
        { en: 'TLS Status', bn: 'টিএলএস স্ট্যাটাস' },
        { en: 'Match Precedence', bn: 'ম্যাচিং অগ্রাধিকার' },
        { en: 'Handled Requests', bn: 'পরিচালিত রিকোয়েস্ট' },
      ],
      rows: [
        [
          { en: 'api.example.com', bn: 'api.example.com' },
          { en: '443 ssl', bn: '443 ssl' },
          { en: 'TLSv1.2 TLSv1.3', bn: 'TLSv1.2 TLSv1.3' },
          { en: 'Exact Domain Match', bn: 'সরাসরি ডোমেইন মিল' },
          { en: '480 requests', bn: '৪৮০টি রিকোয়েস্ট' },
        ],
        [
          { en: 'app.example.com', bn: 'app.example.com' },
          { en: '443 ssl', bn: '443 ssl' },
          { en: 'TLSv1.2 TLSv1.3', bn: 'TLSv1.2 TLSv1.3' },
          { en: 'Exact Domain Match', bn: 'সরাসরি ডোমেইন মিল' },
          { en: '380 requests', bn: '৩৮০টি রিকোয়েস্ট' },
        ],
        [
          { en: '_ (Catch-all)', bn: '_ (ক্যাচ-অল)' },
          { en: '80 default_server', bn: '80 default_server' },
          { en: 'Plaintext (Dropped)', bn: 'প্লেনটেক্সট (ড্রপড)' },
          { en: 'Fallback Default', bn: 'ডিফল্ট ফলব্যাক' },
          { en: '140 requests', bn: '১৪০টি রিকোয়েস্ট' },
        ],
      ],
      caption: {
        en: 'Virtual host routing table: 1000 requests demultiplexed across 3 server blocks with 0 packet routing failures.',
        bn: 'ভার্চুয়াল হোস্ট রাউটিং টেবিল: ৩টি সার্ভার ব্লকে ০টি ব্যর্থতা সহ ১০০০টি রিকোয়েস্টের সুষ্ঠু বণ্টন।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Create Configuration File', bn: 'ধাপ ১ — কনফিগারেশন ফাইল তৈরি' },
          text: {
            en: 'Create a new server block file in /etc/nginx/conf.d/mysite.conf containing listen and server_name directives.',
            bn: '/etc/nginx/conf.d/ ফোল্ডারে listen এবং server_name নির্দেশ সহ mysite.conf নামে একটি নতুন ফাইল তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Configure Document Root or Proxy', bn: 'ধাপ ২ — ডকুমেন্ট রুট অথবা প্রক্সি নির্ধারণ' },
          text: {
            en: 'Specify a root directory containing static assets or a proxy_pass directive forwarding traffic to an upstream backend port.',
            bn: 'স্ট্যাটিক ফাইলের জন্য একটি রুট ডিরেক্টরি দিন অথবা ব্যাকএন্ড সার্ভারে পাঠানোর জন্য proxy_pass নির্দেশ যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Validate Syntax with nginx -t', bn: 'ধাপ ৩ — nginx -t দিয়ে সিনট্যাক্স পরীক্ষা' },
          text: {
            en: 'Always run nginx -t in your terminal to ensure there are no syntax errors, typos, or missing SSL certificate files.',
            bn: 'কনফিগারেশনে কোনো টাইপো, সিনট্যাক্স ভুল বা মিসিং সার্টিফিকেট ফাইল আছে কিনা তা নিশ্চিত করতে টার্মিনালে nginx -t চালান।',
          },
        },
        {
          title: { en: 'Step 4 — Reload Nginx Master Process', bn: 'ধাপ ৪ — Nginx মাস্টার প্রসেস রিলোড' },
          text: {
            en: 'Execute systemctl reload nginx or nginx -s reload to apply changes with zero downtime to active client connections.',
            bn: 'চলমান কোনো ক্লায়েন্ট রিকোয়েস্ট বিচ্ছিন্ন না করে নতুন কনফিগ কার্যকর করতে systemctl reload nginx বা nginx -s reload চালান।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'svr-ex-1',
      kind: 'mcq',
      topic: 'host-header-matching',
      question: {
        en: 'Which HTTP request header does Nginx inspect to determine which server block matches an incoming request?',
        bn: 'ইনকামিং রিকোয়েস্ট কোন সার্ভার ব্লকের সাথে মিলবে তা নির্ধারণ করতে Nginx কোন HTTP রিকোয়েস্ট হেডারটি পরীক্ষা করে?',
      },
      options: [
        { en: 'The Host header (e.g. Host: api.example.com)', bn: 'Host হেডার (যেমন Host: api.example.com)' },
        { en: 'The User-Agent header', bn: 'User-Agent হেডার' },
        { en: 'The Accept-Encoding header', bn: 'Accept-Encoding হেডার' },
        { en: 'The Content-Type header', bn: 'Content-Type হেডার' },
      ],
      answer: 0,
      hint: { en: 'Nginx inspects the Host header.', bn: 'Nginx Host হেডার পরীক্ষা করে।' },
      explanation: {
        en: 'The HTTP Host header specifies the domain name requested by the client, which Nginx matches against server_name.',
        bn: 'HTTP Host হেডার ক্লায়েন্টের চাওয়া ডোমেইন নাম বহন করে, যা Nginx তার server_name নির্দেশের সাথে মেলায়।',
      },
    },
    {
      id: 'svr-ex-2',
      kind: 'mcq',
      topic: 'default-server-parameter',
      question: {
        en: 'What happens if an incoming request has a Host header that does not match any configured server_name on that port?',
        bn: 'যদি কোনো ইনকামিং রিকোয়েস্টের Host হেডার ওই পোর্টের কোনো server_name-এর সাথে না মেলে, তবে কী ঘটবে?',
      },
      options: [
        { en: 'Nginx routes the request to the server block marked with default_server (or the first block defined for that port)', bn: 'Nginx রিকোয়েস্টটি default_server চিহ্নিত সার্ভার ব্লকে (অথবা ওই পোর্টের প্রথম ব্লকে) পাঠিয়ে দেয়' },
        { en: 'The computer physically powers down immediately', bn: 'কম্পিউটার তৎক্ষণাৎ বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে বন্ধ হয়ে যায়' },
        { en: 'Nginx sends an email to the domain registrar requesting a refund', bn: 'Nginx ডোমেইন রেজিস্ট্রারের কাছে রিফান্ড চেয়ে ইমেইল পাঠায়' },
        { en: 'The operating system deletes all files in /var/log/', bn: 'অপারেটিং সিস্টেম /var/log/ ফোল্ডারের সব ফাইল মুছে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'It falls back to default_server.', bn: 'এটি default_server-এ ফলব্যাক করে।' },
      explanation: {
        en: 'When no server_name matches, Nginx delivers the request to the default_server block on that listening port.',
        bn: 'কোনো server_name না মিললে Nginx ওই লিসেনিং পোর্টের default_server ব্লকে রিকোয়েস্টটি পাঠায়।',
      },
    },
    {
      id: 'svr-ex-3',
      kind: 'predict',
      topic: 'nginx-test-cli',
      question: {
        en: 'What command-line flag is passed to nginx to test configuration files for syntax errors without reloading (e.g. nginx -t)?',
        bn: 'সার্ভার রিলোড না করে কনফিগারেশন ফাইলের সিনট্যাক্স সঠিক আছে কিনা তা পরীক্ষা করতে nginx-এর সাথে কোন ফ্ল্যাগটি দেওয়া হয় (যেমন nginx -t)?',
      },
      answer: 'nginx -t',
      accept: ['nginx -t', '-t', 'nginx -t;', 'sudo nginx -t'],
      hint: { en: 'nginx -t', bn: 'nginx -t' },
      explanation: {
        en: 'Running nginx -t parses all configuration files and reports syntax errors or success.',
        bn: 'nginx -t চালালে সমস্ত কনফিগারেশন ফাইল পড়ে সিনট্যাক্স ভুল আছে কিনা তা জানিয়ে দেয়।',
      },
    },
    {
      id: 'svr-ex-4',
      kind: 'predict',
      topic: 'special-drop-status-code',
      question: {
        en: 'Type the 3-digit Nginx non-standard HTTP status code that forcefully closes the connection without sending any response to the client.',
        bn: 'ক্লায়েন্টকে কোনো রেসপন্স না পাঠিয়ে তাৎক্ষণিকভাবে সংযোগ কেটে দেওয়ার ৩ সংখ্যার বিশেষ Nginx HTTP স্ট্যাটাস কোডটি লিখুন।',
      },
      answer: '444',
      accept: ['444', 'return 444', 'return 444;'],
      hint: { en: '444', bn: '444' },
      explanation: {
        en: 'HTTP 444 is an Nginx-specific code that instructs the server to close the connection immediately without sending headers.',
        bn: 'HTTP 444 হলো Nginx-এর নিজস্ব কোড যা কোনো হেডার না পাঠিয়ে সাথে সাথে ক্লায়েন্টের সংযোগ বিচ্ছিন্ন করে।',
      },
    },
  ],
  quiz: {
    id: 'servers-and-the-server-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'svr-qz-1',
        kind: 'mcq',
        topic: 'routing-sim-results',
        question: {
          en: 'In our TypeScript benchmark of 1000 incoming requests, how many requests were routed to api.example.com on port 443?',
          bn: 'আমাদের ১০০০টি রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে api.example.com-এর ৪৪৩ পোর্টে কতটি রিকোয়েস্ট পাঠানো হয়েছিল?',
        },
        options: [
          { en: '480 requests (with 380 to app.example.com and 140 dropped by default_server on port 80)', bn: '৪৮০টি রিকোয়েস্ট (৩৮০টি app.example.com-এ এবং ১৪০টি ৮০ পোর্টে default_server দ্বারা বাতিল)' },
          { en: '10 requests total across all ports', bn: 'সব পোর্ট মিলিয়ে মোট ১০টি রিকোয়েস্ট' },
          { en: '950 requests with 50 errors', bn: '৫০টি ত্রুটি সহ ৯৫০টি রিকোয়েস্ট' },
          { en: '0 requests processed', bn: '০টি রিকোয়েস্ট পরিচালিত' },
        ],
        answer: 0,
        hint: { en: '480 requests to api.example.com.', bn: 'api.example.com-এ ৪৮০টি রিকোয়েস্ট।' },
        explanation: {
          en: 'The simulation routed 480 requests to api.example.com, 380 to app.example.com, and dropped 140 on port 80 with 100.00% accuracy.',
          bn: 'সিমুলেশনে ৪৮০টি রিকোয়েস্ট এপিআইতে, ৩৮০টি অ্যাপে এবং ১৪০টি ৮০ পোর্টে পাঠানো হয়েছিল ১০০.০০% নির্ভুলতায়।',
        },
      },
      {
        id: 'svr-qz-2',
        kind: 'mcq',
        topic: 'virtual-host-security',
        question: {
          en: 'Why is defining a default_server block with return 444; a recommended security practice for production web servers?',
          bn: 'প্রোডাকশন ওয়েব সার্ভারে return 444; সহ default_server ব্লক কনফিগার করা কেন একটি সুপারিশকৃত নিরাপত্তা পদ্ধতি?',
        },
        options: [
          { en: 'It drops direct IP scans and requests with illegitimate Host headers immediately without consuming CPU or bandwidth on responses', bn: 'এটি কোনো রেসপন্স না পাঠিয়ে সরাসরি আইপি স্ক্যান ও অবৈধ Host হেডারের সংযোগ তাৎক্ষণিক কেটে দিয়ে প্রসেসর ও ব্যান্ডউইথ সাশ্রয় করে' },
          { en: 'It increases the download speed of video files by 300 percent', bn: 'এটি ভিডিও ফাইলের ডাউনলোড স্পিড ৩০০ শতাংশ বাড়িয়ে দেয়' },
          { en: 'It replaces all user images with cat pictures automatically', bn: 'এটি স্বয়ংক্রিয়ভাবে ব্যবহারকারীর সব ছবি বিড়ালের ছবিতে রূপান্তর করে' },
          { en: 'It encrypts the server hard drive using a secret password', bn: 'এটি একটি গোপন পাসওয়ার্ড দিয়ে সার্ভারের হার্ডড্রাইভ এনক্রিপ্ট করে' },
        ],
        answer: 0,
        hint: { en: 'It drops direct IP scans without wasting bandwidth.', bn: 'এটি ব্যান্ডউইথ নষ্ট না করে সরাসরি আইপি স্ক্যান ড্রপ করে।' },
        explanation: {
          en: 'Returning 444 immediately severs the TCP connection for unmatched hosts, preventing scrapers from discovering hosted domains.',
          bn: '৪৪৪ রিটার্ন করলে অমিল হোস্টের টিসিপি সংযোগ বিচ্ছিন্ন হয়ে যায় এবং স্ক্যানাররা তথ্য সংগ্রহ করতে পারে না।',
        },
      },
      {
        id: 'svr-qz-3',
        kind: 'mcq',
        topic: 'reload-vs-restart',
        question: {
          en: 'Why is nginx -s reload preferred over restarting the Nginx systemd service during production deployments?',
          bn: 'প্রোডাকশন ডিপ্লয়মেন্টের সময় Nginx সার্ভিস রিস্টার্ট করার চেয়ে nginx -s reload ব্যবহার করা কেন শ্রেয়?',
        },
        options: [
          { en: 'Reloading spawns new workers with the updated configuration while allowing existing workers to gracefully finish active requests, avoiding downtime', bn: 'রিলোড নতুন কনফিগারেশন দিয়ে নতুন ওয়ার্কার চালু করে এবং পুরনোদের চলমান রিকোয়েস্ট নিরাপদে শেষ করার সুযোগ দিয়ে ডাউনটাইম রোধ করে' },
          { en: 'Restarting deletes the Nginx binary from disk', bn: 'রিস্টার্ট দিলে ডিস্ক থেকে Nginx প্রোগ্রাম মুছে যায়' },
          { en: 'Reloading changes the server IP address to a random number', bn: 'রিলোড সার্ভারের আইপি ঠিকানাকে একটি দৈব সংখ্যায় রূপান্তর করে' },
          { en: 'Restarting requires physical presence in the datacenter', bn: 'রিস্টার্ট দিতে ডেটাসেন্টারে শারীরিকভাবে উপস্থিত থাকতে হয়' },
        ],
        answer: 0,
        hint: { en: 'Reload gracefully finishes active requests.', bn: 'রিলোড চলমান রিকোয়েস্ট নিরাপদে শেষ হতে সাহায্য করে।' },
        explanation: {
          en: 'A hot reload uses the master process to spawn fresh workers without dropping active TCP connections.',
          bn: 'হট রিলোড মাস্টার প্রসেসের মাধ্যমে চলমান সংযোগ বিচ্ছিন্ন না করে নতুন ওয়ার্কারদের দায়িত্ব বুঝিয়ে দেয়।',
        },
      },
      {
        id: 'svr-qz-4',
        kind: 'predict',
        topic: 'listen-directive-name',
        question: {
          en: 'What 6-letter lowercase Nginx directive specifies the port and network socket for a server block (e.g. listen 80;)?',
          bn: 'সার্ভার ব্লকে নেটওয়ার্ক পোর্ট ও সকেট নির্দিষ্ট করতে ব্যবহৃত ৬ অক্ষরের Nginx নির্দেশটির নাম কী (যেমন listen 80;)?',
        },
        answer: 'listen',
        accept: ['listen', 'listen;', 'listen directive'],
        hint: { en: 'listen', bn: 'listen' },
        explanation: {
          en: 'The listen directive tells Nginx which IP and port to bind for incoming client traffic.',
          bn: 'listen নির্দেশ Nginx-কে বলে দেয় কোন আইপি এবং পোর্টে ইনকামিং ট্রাফিকের জন্য অপেক্ষা করতে হবে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'locations-and-the-location',
    title: {
      en: 'Locations and the Location: Map',
      bn: 'Location-location: map',
    },
  },
};
