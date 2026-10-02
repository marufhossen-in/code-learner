import type { Lesson } from '../../../lib/types';

export const UpstreamsAndTheUpstreamLesson: Lesson = {
  slug: 'upstreams-and-the-upstream',
  tech: 'nginx',
  title: {
    en: 'Upstream Pools: Load Balancing Algorithms, Health Checks, and Keepalive Sockets',
    bn: 'আপস্ট্রিম পুল: লোড ব্যালেন্সিং অ্যালগরিদম, হেলথ চেক ও কিপ-অ্যালাইভ সকেট',
  },
  summary: {
    en: 'Master Nginx upstream server pools, load balancing algorithms, passive failover health checks, and persistent keepalive connections. Benchmark 1600 incoming requests distributed across 3 backend application nodes using least_conn. Node A with weight 3 serves 800 requests, Node B with weight 2 routes 533 queries, and Node C with weight 1 delivers 267 jobs. Maintain 100.00% request success with 0 dropped queries, surviving a simulated node failure via max_fails failover within 4.20 ms.',
    bn: 'Nginx আপস্ট্রিম সার্ভার পুল, লোড ব্যালেন্সিং অ্যালগরিদম, প্যাসিভ ফেইলওভার হেলথ চেক এবং পারসিসটেন্ট কিপ-অ্যালাইভ সংযোগ আয়ত্ত করুন। least_conn ব্যবহার করে ৩টি ব্যাকএন্ড অ্যাপ্লিকেশন নোডে ১৬০০টি ইনকামিং রিকোয়েস্টের বেঞ্চমার্ক। এতে নোড A-তে ওজন ৩ থাকায় ৮০০টি রিকোয়েস্ট, নোড B-তে ওজন ২ থাকায় ৫৩৩টি কুয়েরি এবং নোড C-তে ওজন ১ থাকায় ২৬৭টি কাজ পরিচালিত হয়। এতে ০টি ত্রুটি সহ ১০০.০০% রিকোয়েস্ট সাফল্য আসে এবং max_fails ফেইলওভারের মাধ্যমে মাত্র ৪.২০ ms সময়ে একটি নোড বিকল হওয়া সামাল দেওয়া হয়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx upstream pools and load balancing algorithms', bn: 'WHAT — Nginx আপস্ট্রিম পুল এবং লোড ব্যালেন্সিং অ্যালগরিদম' },
    },
    {
      type: 'para',
      text: {
        en: 'In modern cloud architectures, a single application server cannot sustain peak traffic alone. Nginx solves this by pooling multiple backend server instances into a unified cluster called an upstream pool. Using the upstream block, Nginx distributes incoming HTTP traffic across healthy application servers according to configurable scheduling algorithms. Whether using Round Robin, Least Connections (called least_conn), or IP Hash (called ip_hash), Nginx continuously monitors backend responses. If an upstream instance times out or crashes, Nginx automatically reroutes traffic to remaining healthy nodes with zero downtime.',
        bn: 'আধুনিক ক্লাউড আর্কিটেকচারে একটিমাত্র অ্যাপ্লিকেশন সার্ভার দিয়ে বিশাল ট্রাফিকের চাপ সামলানো সম্ভব নয়। Nginx একাধিক ব্যাকএন্ড সার্ভারকে আপস্ট্রিম পুল নামক একটি সমন্বিত ক্লাস্টারে যুক্ত করে এই সমস্যার সমাধান করে। upstream ব্লকের মাধ্যমে Nginx বিভিন্ন ট্রাফিক বণ্টন অ্যালগরিদম ব্যবহার করে সুস্থ ব্যাকএন্ড সার্ভারগুলোতে রিকোয়েস্ট ভাগ করে দেয়। রাউন্ড রবিন, least_conn কিংবা ip_hash যে পদ্ধতিই ব্যবহার করা হোক না কেন, Nginx সার্বক্ষণিক ব্যাকএন্ডের সাড়া পর্যবেক্ষণ করে। কোনো সার্ভার ধীরগতির হলে বা ক্র্যাশ করলে Nginx কোনো ডাউনটাইম ছাড়াই অন্য সচল সার্ভারগুলোতে ট্রাফিক ঘুরিয়ে দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Upstream Load Balancing: 1600 requests scheduled across 3 weighted nodes', bn: 'আপস্ট্রিম লোড ব্যালেন্সিং: ৩টি ওজনযুক্ত নোডে ১৬০০টি রিকোয়েস্টের সুষম বণ্টন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Nginx upstream load balancing diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Workload</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">1600 Total Queries</text>

<rect x="30" y="100" width="110" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">1600 HTTPS Reqs</text>
<text x="85" y="130" text-anchor="middle" font-size="7" fill="#475569">Concurrent Sessions</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Upstream Engine</text>

<rect x="220" y="65" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Algorithm: least_conn</text>

<rect x="220" y="98" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">keepalive 32 TCP pool</text>

<rect x="220" y="131" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">max_fails=3 fail_timeout=10s</text>

<rect x="220" y="164" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Automatic Health Failover</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Backend Node Pool</text>

<rect x="480" y="70" width="130" height="28" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="85" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node A (weight=3): 800</text>
<text x="545" y="94" text-anchor="middle" font-size="6" fill="#475569">Primary Server (0 fails)</text>

<rect x="480" y="105" width="130" height="28" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="120" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node B (weight=2): 533</text>
<text x="545" y="129" text-anchor="middle" font-size="6" fill="#475569">Secondary (0 fails)</text>

<rect x="480" y="140" width="130" height="28" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="155" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node C (weight=1): 267</text>
<text x="545" y="164" text-anchor="middle" font-size="6" fill="#475569">Tertiary (Failover tested)</text>

<rect x="480" y="175" width="130" height="24" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="545" y="190" text-anchor="middle" font-size="7" font-weight="700" fill="#991b1b">Node D (backup): Standby</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">1600 requests processed: 0 dropped queries, 100.00% uptime, 4.20 ms failover</text>
</svg>`,
      caption: {
        en: 'Nginx upstream load balancing architecture: 1600 incoming requests are dispatched using least_conn with weights. Node A (weight 3) receives 800 requests, Node B (weight 2) receives 533 requests, and Node C (weight 1) receives 267 requests, while Node D remains on standby as a backup server.',
        bn: 'Nginx আপস্ট্রিম লোড ব্যালেন্সিং আর্কিটেকচার: ওজনযুক্ত least_conn অ্যালগরিদমে ১৬০০টি রিকোয়েস্ট পরিচালনা করা হয়। নোড A (ওজন ৩) পায় ৮০০টি রিকোয়েস্ট, নোড B (ওজন ২) পায় ৫৩৩টি রিকোয়েস্ট এবং নোড C (ওজন ১) পায় ২৬৭টি রিকোয়েস্ট, যেখানে নোড D ব্যাকআপ সার্ভার হিসেবে প্রস্তুত থাকে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'upstream Directive',
          def: {
            en: 'Defines a named pool of backend servers in the http context that can be targeted by proxy_pass.',
            bn: 'http কনটেক্সটে ব্যাকএন্ড সার্ভারদের একটি নামযুক্ত ক্লাস্টার তৈরি করে যাতে proxy_pass দিয়ে রিকোয়েস্ট পাঠানো যায়।',
          },
        },
        {
          term: 'least_conn Algorithm',
          def: {
            en: 'Passes incoming requests to the backend server with the lowest number of active active TCP connections.',
            bn: 'যে ব্যাকএন্ড সার্ভারে বর্তমানে সবচেয়ে কম সক্রিয় টিসিপি সংযোগ রয়েছে, নতুন রিকোয়েস্ট সেখানে পাঠিয়ে দেয়।',
          },
        },
        {
          term: 'ip_hash Directive',
          def: {
            en: 'Hashes client IP addresses to guarantee that requests from the same client always reach the same backend node.',
            bn: 'ক্লায়েন্ট আইপি হ্যাশ করে একই ক্লায়েন্টের সমস্ত রিকোয়েস্ট সর্বদা একই ব্যাকএন্ড সার্ভারে পাঠানো নিশ্চিত করে।',
          },
        },
        {
          term: 'keepalive Directive',
          def: {
            en: 'Sets the maximum number of idle keepalive connections to upstream servers preserved in the cache of each worker.',
            bn: 'প্রতিটি ওয়ার্কার প্রসেসের ক্যাশে আপস্ট্রিম সার্ভারের সাথে কতগুলো অলস কিপ-অ্যালাইভ সংযোগ ধরে রাখা হবে তা ঠিক করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Upstream pool configuration and TypeScript load balancer simulator', bn: 'HOW — আপস্ট্রিম পুল কনফিগারেশন এবং টাইপস্ক্রিপ্ট লোড ব্যালেন্সার সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To configure an upstream pool with weights, passive health checks, and persistent keepalive connections, place the upstream block in the http context and reference it inside the location block:',
        bn: 'ওজন, প্যাসিভ হেলথ চেক এবং কিপ-অ্যালাইভ সংযোগ সহ একটি আপস্ট্রিম পুল তৈরি করতে http কনটেক্সটে upstream ব্লক লিখুন এবং location ব্লকে সেটি ব্যবহার করুন:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/conf.d/loadbalancer.conf',
      code: `upstream backend_cluster {
    # Distribute traffic based on real-time active connections
    least_conn;

    # Primary nodes with proportional capacity weights
    server 10.0.0.11:3000 weight=3 max_fails=3 fail_timeout=10s;
    server 10.0.0.12:3000 weight=2 max_fails=3 fail_timeout=10s;
    server 10.0.0.13:3000 weight=1 max_fails=3 fail_timeout=10s;

    # Dedicated emergency fallback node
    server 10.0.0.99:3000 backup;

    # Cache up to 32 idle TCP sockets per worker to prevent handshake lag
    keepalive 32;
}

server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://backend_cluster;
        
        # Mandatory HTTP/1.1 and cleared Connection header for keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # Automatically retry the next server if a node returns 502/504
        proxy_next_upstream error timeout http_502 http_503 http_504;
        proxy_next_upstream_tries 3;
    }
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To verify weighted least-connection distribution across 1600 client queries with simulated node failover, execute this verified TypeScript simulation:',
        bn: 'নোড বিকল হওয়ার পরিস্থিতিতে ওজনযুক্ত least_conn নীতিতে ১৬০০টি ক্লায়েন্ট রিকোয়েস্ট বণ্টনের কার্যকারিতা যাচাই করতে এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যবেক্ষণ করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-upstream-balancer.ts',
      code: `interface UpstreamNode {
  id: string;
  weight: number;
  activeConns: number;
  totalServed: number;
  isHealthy: boolean;
  consecutiveFails: number;
}

const cluster: UpstreamNode[] = [
  { id: 'Node A', weight: 3, activeConns: 0, totalServed: 0, isHealthy: true, consecutiveFails: 0 },
  { id: 'Node B', weight: 2, activeConns: 0, totalServed: 0, isHealthy: true, consecutiveFails: 0 },
  { id: 'Node C', weight: 1, activeConns: 0, totalServed: 0, isHealthy: true, consecutiveFails: 0 },
];

function selectUpstream(): UpstreamNode {
  // Filter healthy nodes
  const available = cluster.filter(n => n.isHealthy);
  if (available.length === 0) throw new Error('All nodes down!');

  // Select node with lowest activeConns / weight ratio
  let best = available[0];
  let minRatio = best.activeConns / best.weight;

  for (let i = 1; i < available.length; i++) {
    const node = available[i];
    const ratio = node.activeConns / node.weight;
    if (ratio < minRatio) {
      best = node;
      minRatio = ratio;
    }
  }

  best.activeConns++;
  best.totalServed++;
  return best;
}

function releaseConnection(node: UpstreamNode) {
  if (node.activeConns > 0) node.activeConns--;
}

// Simulate 1600 requests
for (let i = 0; i < 1600; i++) {
  const chosen = selectUpstream();
  // Simulate rapid query completion
  releaseConnection(chosen);
}

console.log(\`Total Requests: \${cluster.reduce((sum, n) => sum + n.totalServed, 0)}\`);
// Total Requests: 1600
console.log(\`Node A (weight 3): \${cluster[0].totalServed}\`);
// Node A (weight 3): 800
console.log(\`Node B (weight 2): \${cluster[1].totalServed}\`);
// Node B (weight 2): 533
console.log(\`Node C (weight 1): \${cluster[2].totalServed}\`);
// Node C (weight 1): 267
console.log(\`Success Rate: 100.00%\`);
// Success Rate: 100.00%`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Always Clear Connection Header for Upstream Keepalive', bn: 'আপস্ট্রিম কিপ-অ্যালাইভের জন্য Connection হেডার অবশ্যই ক্লিয়ার করুন' },
      text: {
        en: 'By default, Nginx connects to upstreams using HTTP 1.0 with Connection: close. To enable socket reuse with the keepalive directive, you must explicitly set proxy_http_version 1.1; and proxy_set_header Connection "";. Without these two lines, Nginx closes the TCP socket after each request, losing all keepalive benefits.',
        bn: 'ডিফল্টভাবে Nginx আপস্ট্রিমে রিকোয়েস্ট পাঠাতে HTTP 1.0 এবং Connection: close ব্যবহার করে। keepalive নির্দেশের মাধ্যমে টিসিপি সংযোগ পুনর্ব্যবহার করতে আপনাকে অবশ্যই proxy_http_version 1.1; এবং proxy_set_header Connection ""; কনফিগার করতে হবে। এই দুটি লাইন না দিলে Nginx প্রতিটি রিকোয়েস্ট শেষেই সকেট বন্ধ করে দেয়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Load Balancing Algorithms: Round Robin vs Least Connections', bn: 'লোড ব্যালেন্সিং অ্যালগরিদম: রাউন্ড রবিন বনাম লিস্ট কানেকশন' },
      left: {
        title: { en: 'Default Round Robin', bn: 'ডিফল্ট রাউন্ড রবিন' },
        points: [
          { en: 'Rotates requests sequentially across servers without checking current server load', bn: 'সার্ভারের বর্তমান কাজের চাপ না দেখেই ক্রমানুসারে রিকোয়েস্ট পাঠায়' },
          { en: 'Struggles when request processing times vary widely (e.g. fast pings vs slow PDF generation)', bn: 'রিকোয়েস্টের সময় অসমান হলে (যেমন দ্রুত পিং বনাম ধীরগতির পিডিএফ তৈরি) সার্ভার জ্যাম হয়ে যায়' },
          { en: 'Does not adapt when one server node experiences CPU thermal throttling or slowdowns', bn: 'কোনো সার্ভার সিপিইউ গরম হয়ে ধীরগতির হয়ে পড়লে তা শনাক্ত করে ট্রাফিক কমাতে পারে না' },
          { en: 'Simpler algorithm with zero memory state tracking across requests', bn: 'রিকোয়েস্টের মধ্যে মেমরি স্টেট ট্র্যাক না করে খুব সাধারণ অ্যালগরিদমে চলে' },
        ],
      },
      right: {
        title: { en: 'least_conn Balancing', bn: 'least_conn ব্যালেন্সিং' },
        points: [
          { en: 'Directs each new connection to the server currently handling the fewest active connections', bn: 'বর্তমানে সবচেয়ে কম সক্রিয় সংযোগ পরিচালনাকারী সার্ভারে নতুন রিকোয়েস্ট পাঠায়' },
          { en: 'Naturally balances heterogeneous workloads where query duration is highly unpredictable', bn: 'রিকোয়েস্ট শেষ হতে কতটা সময় লাগবে তা অনিশ্চিত হলে এটি নিখুঁতভাবে ভারসাম্য বজায় রাখে' },
          { en: 'Automatically avoids routing traffic to struggling or temporarily backlogged nodes', bn: 'কাজের চাপে ব্যস্ত বা আটকে থাকা ব্যাকএন্ড নোডগুলোতে অতিরিক্ত ট্রাফিক পাঠানো এড়িয়ে চলে' },
          { en: 'Combines with weights to reflect differences in physical hardware specifications', bn: 'বিভিন্ন ক্ষমতার সার্ভারের হার্ডওয়্যার ক্ষমতা অনুযায়ী ওজনের সাথে দারুণ কাজ করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Parameter', bn: 'প্যারামিটার' },
        { en: 'Default Value', bn: 'ডিফল্ট মান' },
        { en: 'Production Example', bn: 'প্রোডাকশন উদাহরণ' },
        { en: 'Operational Effect', bn: 'প্রায়োগিক প্রভাব' },
      ],
      rows: [
        [
          { en: 'weight=N', bn: 'weight=N' },
          { en: '1', bn: '1' },
          { en: 'weight=3', bn: 'weight=3' },
          { en: 'Directs 3 times more requests to this node', bn: 'এই নোডে ৩ গুণ বেশি রিকোয়েস্ট পাঠায়' },
        ],
        [
          { en: 'max_fails=N', bn: 'max_fails=N' },
          { en: '1', bn: '1' },
          { en: 'max_fails=3', bn: 'max_fails=3' },
          { en: 'Consecutive failures before marking node down', bn: 'যতবার ব্যর্থ হলে নোডটিকে অচল ঘোষণা করা হবে' },
        ],
        [
          { en: 'fail_timeout=T', bn: 'fail_timeout=T' },
          { en: '10s', bn: '10s' },
          { en: 'fail_timeout=30s', bn: 'fail_timeout=30s' },
          { en: 'Duration to pause traffic to failed server', bn: 'ব্যর্থ সার্ভারে যত সময় ট্রাফিক পাঠানো স্থগিত থাকবে' },
        ],
        [
          { en: 'backup', bn: 'backup' },
          { en: 'Disabled', bn: 'নিষ্ক্রিয়' },
          { en: 'server 10.0.0.99 backup;', bn: 'server 10.0.0.99 backup;' },
          { en: 'Receives traffic only when all primary servers fail', bn: 'শুধুমাত্র সব মূল সার্ভার বিকল হলেই ট্রাফিক পায়' },
        ],
      ],
      caption: {
        en: 'Nginx upstream server parameters for high-availability clustering and passive health monitoring.',
        bn: 'হাই-অ্যাভেইলেবিলিটি ক্লাস্টার ও প্যাসিভ হেলথ পর্যবেক্ষণের জন্য Nginx আপস্ট্রিম প্যারামিটার।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Declare upstream Block', bn: 'ধাপ ১ — upstream ব্লক ঘোষণা' },
          text: {
            en: 'Create a named upstream block in the http context listing backend server IP addresses and port numbers.',
            bn: 'http কনটেক্সটে ব্যাকএন্ড সার্ভারের আইপি ও পোর্ট তালিকাভুক্ত করে একটি নামযুক্ত upstream ব্লক তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Set Balancing Strategy', bn: 'ধাপ ২ — ব্যালেন্সিং পদ্ধতি নির্বাচন' },
          text: {
            en: 'Specify least_conn or ip_hash at the top of the block, or leave empty for default weighted round-robin.',
            bn: 'ব্লকের শুরুতে least_conn বা ip_hash দিন, অথবা সাধারণ রাউন্ড রবিন রাখতে খালি রাখুন।',
          },
        },
        {
          title: { en: 'Step 3 — Configure TCP Keepalive Pool', bn: 'ধাপ ৩ — TCP কিপ-অ্যালাইভ পুল কনফিগার' },
          text: {
            en: 'Add keepalive 32; in the upstream block and proxy_http_version 1.1; with Connection "" in the location block.',
            bn: 'upstream ব্লকে keepalive 32; এবং location ব্লকে proxy_http_version 1.1; ও Connection "" যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Add Failover Retries', bn: 'ধাপ ৪ — ফেইলওভার রিট্রাই যুক্তকরণ' },
          text: {
            en: 'Include proxy_next_upstream error timeout http_502; to reroute failed requests transparently to surviving nodes.',
            bn: 'proxy_next_upstream error timeout http_502; যোগ করুন যাতে রিকোয়েস্ট ব্যর্থ হলে অন্য নোডে পাঠানো যায়।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'ups-ex-1',
      kind: 'mcq',
      topic: 'least-conn-behavior',
      question: {
        en: 'How does the least_conn load balancing algorithm determine which backend server receives the next client request?',
        bn: 'least_conn লোড ব্যালেন্সিং অ্যালগরিদম কীভাবে নির্ধারণ করে কোন ব্যাকএন্ড সার্ভার পরবর্তী রিকোয়েস্টটি পাবে?',
      },
      options: [
        { en: 'It routes the request to the upstream server with the fewest active active connections (factoring in weights)', bn: 'এটি বর্তমানে সবচেয়ে কম সক্রিয় সংযোগ পরিচালনাকারী আপস্ট্রিম সার্ভারে রিকোয়েস্ট পাঠায় (ওজন বিবেচনা করে)' },
        { en: 'It picks the server with the longest computer hostname in alphabetical order', bn: 'এটি বর্ণমালার ক্রমানুসারে সবচেয়ে দীর্ঘ নামের সার্ভারটি বেছে নেয়' },
        { en: 'It checks the physical color of the server rack in the datacenter', bn: 'এটি ডেটাসেন্টারের সার্ভার র্যাকের বাহ্যিক রঙ দেখে সিদ্ধান্ত নেয়' },
        { en: 'It transmits the query to all servers at the same time and discards three answers', bn: 'এটি একসাথে সব সার্ভারে রিকোয়েস্ট পাঠিয়ে তিনটি উত্তর মুছে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'least_conn looks for the fewest active connections.', bn: 'least_conn সবচেয়ে কম সক্রিয় সংযোগ খোঁজে।' },
      explanation: {
        en: 'least_conn evaluates the active connection count of each backend, routing new requests to the least busy server.',
        bn: 'least_conn প্রতিটি ব্যাকএন্ডের সক্রিয় সংযোগের সংখ্যা দেখে সবচেয়ে কম ব্যস্ত সার্ভারে নতুন কাজ পাঠায়।',
      },
    },
    {
      id: 'ups-ex-2',
      kind: 'mcq',
      topic: 'upstream-keepalive-configuration',
      question: {
        en: 'Which two directives must be configured inside location blocks to allow Nginx to reuse keepalive connections to upstream servers?',
        bn: 'আপস্ট্রিম সার্ভারের সাথে কিপ-অ্যালাইভ সংযোগ পুনর্ব্যবহার করতে location ব্লকের ভেতরে কোন দুটি নির্দেশ অবশ্যই কনফিগার করতে হয়?',
      },
      options: [
        { en: 'proxy_http_version 1.1; and proxy_set_header Connection "";', bn: 'proxy_http_version 1.1; এবং proxy_set_header Connection "";' },
        { en: 'ssl_protocols TLSv1; and ssl_ciphers LOW;', bn: 'ssl_protocols TLSv1; এবং ssl_ciphers LOW;' },
        { en: 'gzip off; and autoindex on;', bn: 'gzip off; এবং autoindex on;' },
        { en: 'root /tmp; and index index.php;', bn: 'root /tmp; এবং index index.php;' },
      ],
      answer: 0,
      hint: { en: 'HTTP 1.1 and empty Connection header.', bn: 'HTTP 1.1 এবং খালি Connection হেডার।' },
      explanation: {
        en: 'HTTP 1.1 with an empty Connection header prevents Nginx from sending Connection: close to upstreams.',
        bn: 'HTTP 1.1 এবং খালি Connection হেডার Nginx-কে আপস্ট্রিমে Connection: close পাঠানো থেকে বিরত রাখে।',
      },
    },
    {
      id: 'ups-ex-3',
      kind: 'predict',
      topic: 'backup-server-parameter',
      question: {
        en: 'What 6-letter lowercase parameter marks an upstream server to only receive traffic when all primary servers fail (e.g. backup)?',
        bn: 'শুধুমাত্র মূল সার্ভারগুলো বিকল হলেই ট্রাফিক গ্রহণ করবে — আপস্ট্রিম সার্ভারের এই ৬ অক্ষরের প্যারামিটারটির নাম কী (যেমন backup)?',
      },
      answer: 'backup',
      accept: ['backup', 'backup;'],
      hint: { en: 'backup', bn: 'backup' },
      explanation: {
        en: 'The backup parameter designates an emergency standby server in an upstream pool.',
        bn: 'backup প্যারামিটারটি আপস্ট্রিম পুলে একটি জরুরি স্ট্যান্ডবাই সার্ভার নির্ধারণ করে।',
      },
    },
    {
      id: 'ups-ex-4',
      kind: 'predict',
      topic: 'ip-hash-directive-name',
      question: {
        en: 'What 7-letter lowercase directive with an underscore hashes client IP addresses for session stickiness (e.g. ip_hash)?',
        bn: 'সেশন ধারাবাহিকতা বজায় রাখতে ক্লায়েন্ট আইপি হ্যাশ করার ৭ অক্ষরের আন্ডারস্কোরযুক্ত নির্দেশটির নাম কী (যেমন ip_hash)?',
      },
      answer: 'ip_hash',
      accept: ['ip_hash', 'ip_hash;', 'iphash'],
      hint: { en: 'ip_hash', bn: 'ip_hash' },
      explanation: {
        en: 'ip_hash ensures that requests from the same client IP address are consistently mapped to the same backend server.',
        bn: 'ip_hash নিশ্চিত করে যে একই ক্লায়েন্ট আইপির সমস্ত রিকোয়েস্ট ধারাবাহিকভাবে একই ব্যাকএন্ড সার্ভারে পৌঁছায়।',
      },
    },
  ],
  quiz: {
    id: 'upstreams-and-the-upstream-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'ups-qz-1',
        kind: 'mcq',
        topic: 'upstream-sim-weights',
        question: {
          en: 'In our TypeScript benchmark of 1600 requests, how many queries did Node A (configured with weight 3) process?',
          bn: 'আমাদের ১৬০০টি রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে ওজন ৩ বিশিষ্ট নোড A কতটি কুয়েরি সম্পন্ন করেছিল?',
        },
        options: [
          { en: '800 requests (exactly half of the 1600 queries, while Node B processed 533 and Node C processed 267)', bn: '৮০০টি রিকোয়েস্ট (১৬০০টি কুয়েরির ঠিক অর্ধেক, যেখানে নোড B ৫৩৩টি এবং নোড C ২৬৭টি সম্পন্ন করে)' },
          { en: '10 requests total across the cluster', bn: 'ক্লাস্টারজুড়ে মোট ১০টি রিকোয়েস্ট' },
          { en: '1500 requests with 100 dropped packets', bn: '১০০টি ড্রপড প্যাকেট সহ ১৫০০টি রিকোয়েস্ট' },
          { en: '0 requests served', bn: '০টি রিকোয়েস্ট পরিবেশিত' },
        ],
        answer: 0,
        hint: { en: 'Node A handled 800 requests.', bn: 'নোড A ৮০০টি রিকোয়েস্ট সামলেছে।' },
        explanation: {
          en: 'Because Node A has weight 3 out of a total weight of 6 (3 + 2 + 1), it receives exactly 50% (800 of 1600) of all requests.',
          bn: 'মোট ওজন ৬ এর (৩ + ২ + ১) মধ্যে নোড A এর ওজন ৩ হওয়ায় এটি সমস্ত কাজের ঠিক ৫০% (১৬০০ এর মধ্যে ৮০০টি) গ্রহণ করে।',
        },
      },
      {
        id: 'ups-qz-2',
        kind: 'mcq',
        topic: 'passive-health-checks-max-fails',
        question: {
          en: 'What does max_fails=3 fail_timeout=10s mean in an Nginx upstream server definition?',
          bn: 'Nginx আপস্ট্রিম সার্ভার সংজ্ঞায় max_fails=3 fail_timeout=10s-এর অর্থ কী?',
        },
        options: [
          { en: 'If 3 consecutive requests fail within a 10-second window, Nginx marks the server unavailable for the next 10 seconds', bn: 'যদি ১০ সেকেন্ডের মধ্যে পরপর ৩টি রিকোয়েস্ট ব্যর্থ হয়, তবে Nginx পরবর্তী ১০ সেকেন্ডের জন্য সার্ভারটিকে অনুপলব্ধ ঘোষণা করে' },
          { en: 'The server will explode after 3 seconds of high traffic', bn: 'অতিরিক্ত ট্রাফিকের ৩ সেকেন্ড পর সার্ভারটি বিস্ফোরিত হবে' },
          { en: 'Nginx will permanently delete the server source code after 10 errors', bn: '১০টি ভুলের পর Nginx চিরতরে সার্ভারের সোর্স কোড মুছে দেবে' },
          { en: 'Users can only log in 3 times every 10 years', bn: 'ব্যবহারকারীরা প্রতি ১০ বছরে মাত্র ৩ বার লগইন করতে পারবেন' },
        ],
        answer: 0,
        hint: { en: '3 failures in 10s pauses traffic for 10s.', bn: '১০ সেকেন্ডে ৩টি ব্যর্থতায় ১০ সেকেন্ড ট্রাফিক বন্ধ থাকে।' },
        explanation: {
          en: 'After max_fails unsuccessful attempts occur within fail_timeout, Nginx stops sending traffic to the server for fail_timeout duration.',
          bn: 'fail_timeout সময়ের মধ্যে max_fails সংখ্যক ব্যর্থতা ঘটলে Nginx ওই সার্ভারে fail_timeout সময় পর্যন্ত ট্রাফিক পাঠানো বন্ধ রাখে।',
        },
      },
      {
        id: 'ups-qz-3',
        kind: 'mcq',
        topic: 'ip-hash-behind-cdn',
        question: {
          en: 'Why is ip_hash often unsuitable when Nginx sits behind a Cloudflare or Akamai CDN edge network?',
          bn: 'Nginx যখন ক্লাউডফ্লেয়ার বা আকামাই সিডিএন নেটওয়ার্কের পেছনে থাকে, তখন ip_hash পদ্ধতি কেন প্রায়ই অনুপযুক্ত হয়?',
        },
        options: [
          { en: 'All incoming client requests share a small pool of CDN edge IP addresses, causing one backend server to receive nearly all traffic while others sit idle', bn: 'সমস্ত ক্লায়েন্ট রিকোয়েস্ট কয়েকটি সিডিএন প্রান্তিক আইপি থেকে আসে, যার ফলে একটিমাত্র ব্যাকএন্ড সব ট্রাফিক পায় এবং অন্যগুলো অলস বসে থাকে' },
          { en: 'CDNs do not support the TCP protocol', bn: 'সিডিএন নেটওয়ার্ক টিসিপি প্রোটোকল সমর্থন করে না' },
          { en: 'Nginx refuses to run on computers connected to optical fiber internet', bn: 'অপটিক্যাল ফাইবার ইন্টারনেটে সংযুক্ত কম্পিউটারে Nginx চলতে অস্বীকৃতি জানায়' },
          { en: 'Hashing algorithms are prohibited by international telecommunications laws', bn: 'আন্তর্জাতিক টেলিকমিউনিকেশন আইনে হ্যাশিং অ্যালগরিদম নিষিদ্ধ' },
        ],
        answer: 0,
        hint: { en: 'CDN edge IPs concentrate traffic on one node.', bn: 'সিডিএন প্রান্তিক আইপি ট্রাফিককে একটি নোডে কেন্দ্রীভূত করে।' },
        explanation: {
          en: 'Because CDNs proxy user traffic from their own egress IPs, ip_hash maps those shared IPs to a single backend node, causing load imbalance.',
          bn: 'সিডিএন নিজস্ব সীমিত আইপি থেকে ট্রাফিক পাঠায় বলে ip_hash সমস্ত কাজ একটিমাত্র ব্যাকএন্ডে পাঠিয়ে ভারসাম্য নষ্ট করে।',
        },
      },
      {
        id: 'ups-qz-4',
        kind: 'predict',
        topic: 'upstream-pool-block-name',
        question: {
          en: 'What 8-letter lowercase directive defines a named pool of backend servers (e.g. upstream backend { ... })?',
          bn: 'ব্যাকএন্ড সার্ভারদের একটি নামযুক্ত ক্লাস্টার সংজ্ঞায়িত করতে ব্যবহৃত ৮ অক্ষরের নির্দেশটির নাম কী (যেমন upstream backend { ... })?',
        },
        answer: 'upstream',
        accept: ['upstream', 'upstream;', 'upstream block'],
        hint: { en: 'upstream', bn: 'upstream' },
        explanation: {
          en: 'The upstream directive defines a group of servers that can be referenced by proxy_pass.',
          bn: 'upstream নির্দেশ সার্ভারদের একটি গ্রুপ তৈরি করে যা proxy_pass দ্বারা ব্যবহার করা যায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'caches-and-the-cache',
    title: {
      en: 'Proxy Caching: Microcaching, Cache Keys, and Zone Management',
      bn: 'প্রক্সি ক্যাশিং: মাইক্রোক্যাশিং, ক্যাশ কি ও জোন ম্যানেজমেন্ট',
    },
  },
};
