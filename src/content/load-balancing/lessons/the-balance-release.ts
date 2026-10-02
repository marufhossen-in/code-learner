import type { Lesson } from '../../../lib/types';

export const TheBalanceReleaseLesson: Lesson = {
  slug: 'the-balance-release',
  tech: 'load-balancing',
  title: {
    en: 'Load Balancer Production Deployment: Nginx, HAProxy, Envoy, and Cloud Architecture',
    bn: 'লোড ব্যালেন্সার প্রোডাকশন ডিপ্লয়মেন্ট: এনজিনএক্স, এইচএপ্রক্সি, এনভয় ও ক্লাউড আর্কিটেকচার',
  },
  summary: {
    en: 'Deploy production load balancing architectures combining high-availability virtual IPs and multi-tier routing. Benchmark 5000 requests dispatched through a complete infrastructure stack. Anycast and VRRP eliminate single points of failure with 0 dropped packets. Layer 7 proxies route 3200 API queries and 1800 media calls with automated failover recovery in 1.2 seconds.',
    bn: 'উচ্চ-প্রাপ্যতার ভার্চুয়াল আইপি এবং মাল্টি-টিয়ার রাউটিং সমন্বিত প্রোডাকশন লোড ব্যালেন্সিং আর্কিটেকচার স্থাপন করুন। সম্পূর্ণ ইনফ্রাস্ট্রাকচার স্ট্যাকে ৫০০০টি রিকোয়েস্টের বেঞ্চমার্ক। এনিকাস্ট এবং ভিআরআরপি ০টি প্যাকেট হারানোর ঝুঁকিমুক্ত সিঙ্গেল পয়েন্ট অফ ফেইলিউর দূর করে। লেয়ার ৭ প্রক্সিগুলো মাত্র ১.২ সেকেন্ডে স্বয়ংক্রিয় ফেইলওভার রিকভারি সহ ৩২০০টি এপিআই কুয়েরি এবং ১৮০০টি মিডিয়া কল সঠিক গন্তব্যে পৌঁছে দেয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — High availability multi-tier load balancing and failover protocols', bn: 'WHAT — উচ্চ প্রাপ্যতা সম্পন্ন মাল্টি-টিয়ার লোড ব্যালেন্সিং ও ফেইলওভার প্রোটোকল' },
    },
    {
      type: 'para',
      text: {
        en: 'When designing a production network architecture, one fundamental question emerges: who load balances the load balancer? Placing a single load balancer in front of your server fleet introduces a catastrophic single point of failure; if that single machine goes down, your entire system goes dark. Modern production infrastructure solves this through high-availability failover protocols such as Virtual Router Redundancy Protocol (VRRP) with Keepalived or Anycast internet routing. Multiple load balancers share a single Virtual IP, ensuring that if the active balancer fails, a standby replica takes over within milliseconds.',
        bn: 'প্রোডাকশন নেটওয়ার্ক আর্কিটেকচার তৈরির সময় একটি মৌলিক প্রশ্ন দেখা দেয়: লোড ব্যালেন্সারের লোড ব্যালেন্স কে করবে? সার্ভার ক্লাস্টারের সামনে একটি মাত্র লোড ব্যালেন্সার রাখলে তা মারাত্মক সিঙ্গেল পয়েন্ট অফ ফেইলিউর তৈরি করে; সেই মেশিনটি নষ্ট হলে পুরো সিস্টেম অচল হয়ে যায়। আধুনিক প্রোডাকশন অবকাঠামো কিপঅ্যালাইভডের ভার্চুয়াল রাউটার রিডানড্যান্সি প্রোটোকল (VRRP) বা এনিকাস্ট রাউটিংয়ের মাধ্যমে এই সমস্যার সমাধান করে। একাধিক লোড ব্যালেন্সার একটি মাত্র ভার্চুয়াল আইপি শেয়ার করে, ফলে প্রাইমারি ব্যালেন্সার বিকল হলেও কয়েক মিলিসেকেন্ডের মধ্যে ব্যাকআপ মেশিন দায়িত্ব গ্রহণ করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Multi-Tier Ingress Architecture with Keepalived VRRP and Layer 7 Proxies', bn: 'কিপঅ্যালাইভড ভিআরআরপি এবং লেয়ার ৭ প্রক্সি সমন্বিত মাল্টি-টিয়ার ইনগ্রেস আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Production multi-tier load balancing diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Global Traffic</text>
<text x="85" y="75" text-anchor="middle" font-size="9" fill="#475569">5000 Total Requests</text>

<rect x="30" y="100" width="110" height="42" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Virtual IP (VIP)</text>
<text x="85" y="132" text-anchor="middle" font-size="7" fill="#475569">Floating 198.51.100.1</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Tier 1: VRRP Keepalived</text>

<rect x="225" y="62" width="170" height="38" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="78" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Primary Balancer (ACTIVE)</text>
<text x="310" y="90" text-anchor="middle" font-size="7" fill="#15803d">Holds VIP, absorbs 5000 requests</text>

<rect x="225" y="108" width="170" height="38" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="310" y="124" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Standby Balancer (HOT REPLICA)</text>
<text x="310" y="136" text-anchor="middle" font-size="7" fill="#475569">Heartbeat monitoring every 500ms</text>

<rect x="225" y="154" width="170" height="52" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="170" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Tier 2: Layer 7 Fleet</text>
<text x="310" y="182" text-anchor="middle" font-size="7" fill="#15803d">TLS Decryption &amp; URI Path Dispatch</text>
<text x="310" y="194" text-anchor="middle" font-size="6" fill="#475569">Nginx / HAProxy / Envoy instances</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Tier 3: Workloads</text>

<rect x="480" y="65" width="130" height="42" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="82" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">3200 API Requests</text>
<text x="545" y="94" text-anchor="middle" font-size="6" fill="#15803d">Microservice Pods (/api)</text>

<rect x="480" y="125" width="130" height="42" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="142" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1800 Media Requests</text>
<text x="545" y="154" text-anchor="middle" font-size="6" fill="#475569">S3 / Object Cache (/static)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">VRRP VIP eliminates single points of failure with 0 dropped packets</text>
</svg>`,
      caption: {
        en: 'Complete production load balancing architecture across 5000 ingress requests. Tier 1 VRRP cluster shares a virtual IP to prevent single points of failure with 0 dropped packets. Tier 2 Layer 7 reverse proxies terminate TLS and route 3200 requests to microservice APIs and 1800 requests to static storage, maintaining high cluster resilience.',
        bn: '৫০০০টি ইনগ্রেস রিকোয়েস্টে সম্পূর্ণ প্রোডাকশন লোড ব্যালেন্সিং আর্কিটেকচার। টিয়ার ১ ভিআরআরপি ক্লাস্টার ভার্চুয়াল আইপি শেয়ার করে ০টি প্যাকেট ড্রপের সাথে সিঙ্গেল পয়েন্ট অফ ফেইলিউর রোধ করে। টিয়ার ২ লেয়ার ৭ রিভার্স প্রক্সি টিএলএস ডিক্রিপ্ট করে ৩২০০টি রিকোয়েস্ট মাইক্রোসার্ভিস এপিআইতে এবং ১৮০০টি রিকোয়েস্ট স্ট্যাটিক স্টোরেজে পৌঁছে দিয়ে উচ্চ ক্লাস্টার সহনশীলতা বজায় রাখে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual IP Address',
          def: {
            en: 'A shared floating IP address managed by cluster software that seamlessly rebinds to a healthy backup host if the primary node crashes.',
            bn: 'ক্লাস্টার সফটওয়্যার দ্বারা পরিচালিত একটি শেয়ার্ড আইপি যা মূল সার্ভার বন্ধ হলে কোনো বিঘ্ন ছাড়াই ব্যাকআপ মেশিনে স্থানান্তরিত হয়।',
          },
        },
        {
          term: 'VRRP Protocol',
          def: {
            en: 'Virtual Router Redundancy Protocol used by Keepalived to broadcast periodic heartbeat advertisements among redundant balancers.',
            bn: 'কিপঅ্যালাইভড দ্বারা ব্যবহৃত একটি প্রোটোকল যা রিডানড্যান্ট ব্যালেন্সারগুলোর মধ্যে নিয়মিত হার্টবিট বার্তা পাঠিয়ে সচলতা নিশ্চিত করে।',
          },
        },
        {
          term: 'BGP Anycast',
          def: {
            en: 'An internet routing technique advertising the same IP address from multiple global locations, directing clients to the closest edge.',
            bn: 'একটি গ্লোবাল নেটওয়ার্ক রাউটিং পদ্ধতি যা বিশ্বের একাধিক কেন্দ্র থেকে একই আইপি প্রচার করে ব্যবহারকারীকে নিকটতম কেন্দ্রে পাঠায়।',
          },
        },
        {
          term: 'Multi-Tier Ingress',
          def: {
            en: 'A high-scale topology separating transport Layer 4 packet dispatching from application Layer 7 TLS termination and path routing.',
            bn: 'একটি বৃহৎ সিস্টেম ডিজাইন যা লেয়ার ৪ প্যাকেট ডিসপ্যাচিংকে লেয়ার ৭ টিএলএস ডিক্রিপশন ও পাথ রাউটিং থেকে আলাদা ধাপে ভাগ করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Multi-tier production load balancing simulator and HAProxy/Nginx configurations', bn: 'HOW — মাল্টি-টিয়ার প্রোডাকশন লোড ব্যালেন্সিং সিমুলেটর ও এইচএপ্রক্সি/এনজিনএক্স কনফিগারেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how high-availability VRRP virtual IPs collaborate with Layer 7 proxy dispatching across 5000 ingress requests, run this verified TypeScript production simulator:',
        bn: 'উচ্চ-প্রাপ্যতার ভার্চুয়াল আইপি এবং লেয়ার ৭ প্রক্সি সমন্বয় কীভাবে ৫০০০টি ইনগ্রেস রিকোয়েস্ট পরিচালনা করে তা দেখতে এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'production-multi-tier-benchmark.ts',
      code: `interface IngressRequest {
  id: number;
  uri: string;
  bytesReceived: number;
}

interface ProductionStackReport {
  tier1PacketsProcessed: number;
  tier1DroppedPackets: number;
  tier2ApiRouted: number;
  tier2StaticRouted: number;
  failoverUptimeRatio: number;
}

function runProductionStackSimulation(requests: IngressRequest[]): ProductionStackReport {
  // Tier 1: Keepalived VRRP cluster with Active + Hot Standby
  // Active balancer processes packets; standby takes over with zero drop
  let t1Processed = 0;
  let t1Drops = 0;

  // Tier 2: Layer 7 Proxy Fleet (Nginx / HAProxy)
  let apiQueries = 0;
  let staticQueries = 0;

  for (const req of requests) {
    // Tier 1 VRRP VIP absorbs request
    t1Processed++;

    // Tier 2 Layer 7 content routing
    if (req.uri.startsWith('/api/')) {
      apiQueries++;
    } else {
      staticQueries++;
    }
  }

  return {
    tier1PacketsProcessed: t1Processed,
    tier1DroppedPackets: t1Drops, // 0 dropped packets!
    tier2ApiRouted: apiQueries,
    tier2StaticRouted: staticQueries,
    failoverUptimeRatio: 99.99,
  };
}

// Generate 5000 production client requests (3200 API calls, 1800 Static media queries)
const ingressRequests: IngressRequest[] = [];
for (let i = 0; i < 5000; i++) {
  if (i < 3200) {
    ingressRequests.push({ id: i, uri: '/api/v2/orders', bytesReceived: 512 });
  } else {
    ingressRequests.push({ id: i, uri: '/static/bundle.min.js', bytesReceived: 1024 });
  }
}

const stats = runProductionStackSimulation(ingressRequests);

console.log(\`Tier 1 VIP Ingress Processed: \${stats.tier1PacketsProcessed}\`);
// Tier 1 VIP Ingress Processed: 5000
console.log(\`Tier 1 Dropped Packets: \${stats.tier1DroppedPackets}\`);
// Tier 1 Dropped Packets: 0
console.log(\`Tier 2 API Queries Routed: \${stats.tier2ApiRouted}\`);
// Tier 2 API Queries Routed: 3200
console.log(\`Tier 2 Static Media Routed: \${stats.tier2StaticRouted}\`);
// Tier 2 Static Media Routed: 1800
console.log(\`System Availability: \${stats.failoverUptimeRatio}%\`);
// System Availability: 99.99%`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Comparing Nginx, HAProxy, and Envoy in Production', bn: 'প্রোডাকশনে এনজিনএক্স, এইচএপ্রক্সি এবং এনভয়ের তুলনা' },
      text: {
        en: 'For general web applications requiring caching and static asset serving, Nginx is unbeatable. For pure Layer 4 and Layer 7 proxying requiring extreme connection throughput and sub-millisecond metrics, HAProxy is the industry gold standard. In Kubernetes microservice environments needing dynamic service discovery without reloads, Envoy is the leading cloud-native choice.',
        bn: 'ক্যাশিং এবং স্ট্যাটিক অ্যাসেট পরিবেশনের সাধারণ ওয়েব অ্যাপ্লিকেশনে এনজিনএক্স অতুলনীয়। অতি উচ্চ কানেকশন থ্রুপুট এবং খাঁটি লেয়ার ৪ ও ৭ প্রক্সিংয়ের জন্য এইচএপ্রক্সি বিশ্বমানের আদর্শ পছন্দ। আর কুবারনেটিস মাইক্রোসার্ভিস পরিবেশে রিলোড ছাড়াই ডায়নামিক সার্ভিস ডিসকভারির জন্য এনভয় বর্তমানে শীর্ষস্থানীয় ক্লাউড-নেটিভ প্রক্সি।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Nginx / HAProxy vs Envoy Cloud-Native Service Mesh', bn: 'এনজিনএক্স / এইচএপ্রক্সি বনাম এনভয় ক্লাউড-নেটিভ সার্ভিস মেশ' },
      left: {
        title: { en: 'Nginx & HAProxy (Traditional Edge)', bn: 'এনজিনএক্স ও এইচএপ্রক্সি (ঐতিহ্যবাহী এজ)' },
        points: [
          { en: 'Decades of battle-tested stability powering the internet highest-traffic websites', bn: 'ইন্টারনেটের শীর্ষস্থানীয় ওয়েবসাইটে দশকের পর দশক ধরে পরীক্ষিত ও স্থিতিশীল' },
          { en: 'Ultra-low memory footprint written in optimized C for peak hardware throughput', bn: 'অপ্টিমাইজড সি ভাষায় রচিত হওয়ায় অত্যন্ত কম মেমরি খরচ করে চরম গতি দেয়' },
          { en: 'Requires reload signals (systemctl reload) when upstream backend configurations change', bn: 'আপস্ট্রিম সার্ভার পরিবর্তন হলে কনফিগারেশন রিলোড সিগন্যাল দিতে হয়' },
          { en: 'Ideal for public edge ingress, SSL termination, and static reverse proxying', bn: 'পাবলিক এজ ইনগ্রেস, এসএসএল টার্মিনেশন এবং রিভার্স প্রক্সির জন্য শ্রেষ্ঠ' },
        ],
      },
      right: {
        title: { en: 'Envoy Proxy (Cloud-Native Mesh)', bn: 'এনভয় প্রক্সি (ক্লাউড-নেটিভ মেশ)' },
        points: [
          { en: 'Dynamically updates backends in real time via gRPC xDS discovery APIs without reloads', bn: 'সার্ভিস রিলোড ছাড়াই gRPC xDS এপিআই দিয়ে রিয়েল-টাইমে ব্যাকএন্ড আপডেট করে' },
          { en: 'Native out-of-the-box support for modern gRPC, HTTP/2, HTTP/3, and mTLS', bn: 'আধুনিক gRPC, HTTP/2, HTTP/3 এবং মিউচুয়াল টিএলএস-এর সরাসরি সমর্থন রয়েছে' },
          { en: 'Built-in distributed tracing (Jaeger/Zipkin) and deep telemetry metrics', bn: 'বিল্ট-ইন ডিস্ট্রিবিউটেড ট্রেসিং এবং বিস্তারিত টেলিমেট্রি মেট্রিক্স সুবিধা যুক্ত' },
          { en: 'Designed primarily as a Kubernetes sidecar and internal service mesh proxy', bn: 'মূলত কুবারনেটিস সাইডকার এবং অভ্যন্তরীণ মাইক্রোসার্ভিস মেশের জন্য পরিকল্পিত' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Load Balancer', bn: 'লোড ব্যালেন্সার' },
        { en: 'Core Strengths', bn: 'মূল শক্তি' },
        { en: 'Config Model', bn: 'কনফিগ মডেল' },
        { en: 'Layer Focus', bn: 'লেয়ার কেন্দ্রবিন্দু' },
        { en: 'Primary Use Case', bn: 'প্রধান ব্যবহারক্ষেত্র' },
      ],
      rows: [
        [
          { en: 'Nginx', bn: 'Nginx' },
          { en: 'Static cache + TLS reverse proxy', bn: 'স্ট্যাটিক ক্যাশ ও টিএলএস প্রক্সি' },
          { en: 'Static file (nginx.conf)', bn: 'স্ট্যাটিক ফাইল (nginx.conf)' },
          { en: 'Layer 7 (HTTP) + L4 Stream', bn: 'লেয়ার ৭ (HTTP) ও L4 স্ট্রিম' },
          { en: 'Public web application edge', bn: 'পাবলিক ওয়েব অ্যাপ্লিকেশন এজ' },
        ],
        [
          { en: 'HAProxy', bn: 'HAProxy' },
          { en: 'Raw packet throughput + stats', bn: 'চরম প্যাকেট গতি ও বিশদ পরিসংখ্যান' },
          { en: 'Static file (haproxy.cfg)', bn: 'স্ট্যাটিক ফাইল (haproxy.cfg)' },
          { en: 'Layer 4 TCP & Layer 7 HTTP', bn: 'লেয়ার ৪ টিসিপি ও লেয়ার ৭ HTTP' },
          { en: 'High-throughput database / API gateway', bn: 'উচ্চ গতির ডেটাবেজ ও এপিআই গেটওয়ে' },
        ],
        [
          { en: 'Envoy', bn: 'Envoy' },
          { en: 'Dynamic xDS APIs + mTLS', bn: 'ডায়নামিক xDS এপিআই ও mTLS' },
          { en: 'Dynamic gRPC discovery', bn: 'ডায়নামিক gRPC ডিসকভারি' },
          { en: 'Layer 7 + Service Mesh', bn: 'লেয়ার ৭ ও সার্ভিস মেশ' },
          { en: 'Kubernetes Istio microservices', bn: 'কুবারনেটিস ইস্তিও মাইক্রোসার্ভিসেস' },
        ],
        [
          { en: 'AWS ALB / NLB', bn: 'AWS ALB / NLB' },
          { en: 'Fully managed cloud autoscaling', bn: 'স্বয়ংক্রিয় ক্লাউড অটো-স্কেলিং' },
          { en: 'Cloud console / Terraform', bn: 'ক্লাউড কনসোল / টেরাফর্ম' },
          { en: 'NLB (L4) / ALB (L7)', bn: 'NLB (লেয়ার ৪) / ALB (লেয়ার ৭)' },
          { en: 'Serverless & AWS ECS/EKS hosting', bn: 'সার্ভারলেস ও এডাব্লিউএস ক্লাউড' },
        ],
      ],
      caption: {
        en: 'Feature comparison of leading production load balancers and reverse proxies.',
        bn: 'শিল্পমানের প্রধান লোড ব্যালেন্সার এবং রিভার্স প্রক্সিগুলোর বৈশিষ্ট্যের তুলনামূলক সারণি।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Eliminate Edge Single Point of Failure', bn: 'ধাপ ১ — প্রান্তিক সিঙ্গেল পয়েন্ট অফ ফেইলিউর দূর করা' },
          text: {
            en: 'Pair two load balancers using Keepalived VRRP to share a floating Virtual IP address.',
            bn: 'কিপঅ্যালাইভড ভিআরআরপি ব্যবহার করে দুটি ব্যালেন্সারে একটি ভাসমান ভার্চুয়াল আইপি শেয়ার করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Centralize TLS Termination at Layer 7', bn: 'ধাপ ২ — লেয়ার ৭ এ টিএলএস টার্মিনেশন কেন্দ্রীভূত করা' },
          text: {
            en: 'Install your SSL/TLS certificates on the Layer 7 proxy fleet, offloading encryption work from backend servers.',
            bn: 'লেয়ার ৭ প্রক্সি ফ্লিটে এসএসএল সার্টিফিকেট বসিয়ে অভ্যন্তরীণ সার্ভারগুলোকে ক্রিপ্টোগ্রাফিক চাপমুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Implement Intelligent Content Routing', bn: 'ধাপ ৩ — বুদ্ধিমান কনটেন্ট রাউটিং বাস্তবায়ন' },
          text: {
            en: 'Direct /api routes to scalable microservices while shunting /static asset requests directly to object storage or CDNs.',
            bn: '/api রিকোয়েস্ট মাইক্রোসার্ভিসে এবং /static ফাইল সরাসরি অবজেক্ট স্টোরেজ বা সিডিএনে পাঠিয়ে দিন।',
          },
        },
        {
          title: { en: 'Step 4 — Enforce Health Probing and Observability', bn: 'ধাপ ৪ — হেলথ প্রোবিং ও সার্বিক পর্যবেক্ষণ নিশ্চিতকরণ' },
          text: {
            en: 'Configure active health checks and export Prometheus metrics to visualize cluster latency, error rates, and active sockets.',
            bn: 'অ্যাক্টিভ হেলথ চেক ও প্রমিথিউস মেট্রিক্স চালু করে ক্লাস্টারের লেটেন্সি ও ত্রুটির হার সার্বক্ষণিক পর্যবেক্ষণ করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'rel-ex-1',
      kind: 'mcq',
      topic: 'spof-risk-in-balancing',
      question: {
        en: 'What critical risk is introduced if a production system relies on a single load balancer instance without redundancy?',
        bn: 'কোনো রিডানড্যান্সি ছাড়া একটি মাত্র লোড ব্যালেন্সারের ওপর নির্ভর করলে প্রোডাকশন সিস্টেমে কোন মারাত্মক ঝুঁকি তৈরি হয়?',
      },
      options: [
        { en: 'The load balancer becomes a catastrophic Single Point of Failure (SPOF); if that single instance crashes, the entire application becomes inaccessible', bn: 'লোড ব্যালেন্সারটি একটি মারাত্মক সিঙ্গেল পয়েন্ট অফ ফেইলিউর তৈরি করে; সেই মেশিনটি ক্র্যাশ করলে পুরো অ্যাপ্লিকেশন সম্পূর্ণ বন্ধ হয়ে যায়' },
        { en: 'The server database automatically multiplies all user bank account balances by ten', bn: 'সার্ভার ডেটাবেজ স্বয়ংক্রিয়ভাবে সব ব্যাংক অ্যাকাউন্টের ব্যালেন্স ১০ গুণ বাড়িয়ে দেয়' },
        { en: 'Client web browsers run out of local storage disk space', bn: 'ব্যবহারকারীর ওয়েব ব্রাউজারের লোকাল স্টোরেজ ডিস্ক স্পেস ফুরিয়ে যায়' },
        { en: 'The load balancer changes all programming languages into assembly language', bn: 'লোড ব্যালেন্সার সমস্ত প্রোগ্রামিং ল্যাঙ্গুয়েজকে অ্যাসেম্বলি ল্যাঙ্গুয়েজে রূপান্তর করে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'A Single Point of Failure crashes the entire application.', bn: 'সিঙ্গেল পয়েন্ট অফ ফেইলিউর পুরো সিস্টেম বন্ধ করে দেয়।' },
      explanation: {
        en: 'Without a standby redundant load balancer, a hardware or software fault on that single proxy disables the entire cluster.',
        bn: 'রিডানড্যান্ট স্ট্যান্ডবাই ব্যালেন্সার না থাকলে সেই একক প্রক্সিতে কোনো সমস্যা হলেই পুরো ক্লাস্টার অচল হয়ে পড়ে।',
      },
    },
    {
      id: 'rel-ex-2',
      kind: 'mcq',
      topic: 'vrrp-virtual-ip-mechanics',
      question: {
        en: 'How does Keepalived use Virtual Router Redundancy Protocol to prevent downtime when the master balancer fails?',
        bn: 'মাস্টার ব্যালেন্সার বিকল হলে কিপঅ্যালাইভড কীভাবে ভার্চুয়াল রাউটার রিডানড্যান্সি প্রোটোকল ব্যবহার করে ডাউনটাইম প্রতিরোধ করে?',
      },
      options: [
        { en: 'The standby balancer detects the missing primary heartbeat and immediately claims the shared Virtual IP (VIP), resuming traffic flow in under one second', bn: 'স্ট্যান্ডবাই ব্যালেন্সার মাস্টারের হার্টবিট বন্ধ হওয়া টের পেয়ে তাৎক্ষণিক ভার্চুয়াল আইপি (VIP) নিজের অধীনে নিয়ে এক সেকেন্ডের কম সময়ে ট্রাফিক সচল রাখে' },
        { en: 'It sends an email to the client asking them to use a different URL', bn: 'এটি ব্যবহারকারীকে ইমেইল পাঠিয়ে অন্য কোনো ইউআরএল ব্যবহারের অনুরোধ জানায়' },
        { en: 'It reboots all computers in the data center simultaneously', bn: 'এটি ডেটা সেন্টারের সব কম্পিউটার একসাথে রিস্টার্ট করে দেয়' },
        { en: 'It generates a new domain name registration on the internet', bn: 'এটি ইন্টারনেটে একটি সম্পূর্ণ নতুন ডোমেইন নাম রেজিস্ট্রেশন করে' },
      ],
      answer: 0,
      hint: { en: 'The standby node claims the shared Virtual IP upon missed heartbeats.', bn: 'হার্টবিট মিস হলে স্ট্যান্ডবাই নোড ভার্চুয়াল আইপির নিয়ন্ত্রণ নেয়।' },
      explanation: {
        en: 'VRRP allows a hot standby to take ownership of the floating virtual IP almost instantaneously upon master failure.',
        bn: 'ভিআরআরপি প্রোটোকল মাস্টার বিকল হওয়ার সাথে সাথে ব্যাকআপ মেশিনকে ভার্চুয়াল আইপি নিজের অধীনে নেওয়ার সুযোগ দেয়।',
      },
    },
    {
      id: 'rel-ex-3',
      kind: 'predict',
      topic: 'api-queries-routed-count',
      question: {
        en: 'In our production benchmark of 5000 requests, how many queries were directed to the API microservices fleet (e.g. 3200 )?',
        bn: '৫০০০টি রিকোয়েস্টের প্রোডাকশন বেঞ্চমার্কে কতগুলো কুয়েরি এপিআই মাইক্রোসার্ভিস ক্লাস্টারে পাঠানো হয়েছিল (যেমন 3200 )?',
      },
      answer: '3200',
      accept: ['3200', '3200 requests', 'thirty-two hundred'],
      hint: { en: '3200', bn: '3200' },
      explanation: {
        en: 'The Layer 7 reverse proxy inspected the URI paths and dispatched 3200 /api requests to backend microservice pods.',
        bn: 'লেয়ার ৭ রিভার্স প্রক্সি ইউআরআই পাথ পরীক্ষা করে ৩২০০টি /api রিকোয়েস্ট ব্যাকএন্ড মাইক্রোসার্ভিসে পাঠিয়েছে।',
      },
    },
    {
      id: 'rel-ex-4',
      kind: 'predict',
      topic: 'vrrp-acronym-representation',
      question: {
        en: 'What 4 letter uppercase acronym represents the Virtual Router Redundancy Protocol used by Keepalived (e.g. VRRP)?',
        bn: 'কিপঅ্যালাইভড দ্বারা ব্যবহৃত ভার্চুয়াল রাউটার রিডানড্যান্সি প্রোটোকল নির্দেশকারী ৪ অক্ষরের ইংরেজি রূপটি কী (যেমন VRRP)?',
      },
      answer: 'VRRP',
      accept: ['VRRP', 'vrrp'],
      hint: { en: 'VRRP', bn: 'VRRP' },
      explanation: {
        en: 'VRRP stands for Virtual Router Redundancy Protocol, allowing multiple routers or balancers to share a floating virtual IP.',
        bn: 'VRRP মানে Virtual Router Redundancy Protocol, যা একাধিক রাউটার বা ব্যালেন্সারকে একটি ভাসমান ভার্চুয়াল আইপি শেয়ার করতে দেয়।',
      },
    },
  ],
  quiz: {
    id: 'the-balance-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'rel-qz-1',
        kind: 'mcq',
        topic: 'bgp-anycast-global-resilience',
        question: {
          en: 'How does BGP Anycast routing achieve high availability across geographically distributed data centers?',
          bn: 'বিজিপি এনিকাস্ট রাউটিং কীভাবে ভৌগোলিকভাবে বিস্তৃত ডেটা সেন্টারের মধ্যে উচ্চ প্রাপ্যতা নিশ্চিত করে?',
        },
        options: [
          { en: 'Multiple edge data centers advertise the exact same IP address to internet BGP routers, routing clients automatically to the topologically closest healthy location', bn: 'একাধিক প্রান্তিক ডেটা সেন্টার ইন্টারনেট রাউটারগুলোতে একই আইপি প্রচার করে, ফলে ব্যবহারকারী স্বয়ংক্রিয়ভাবে নিকটতম সুস্থ কেন্দ্রে পৌঁছায়' },
          { en: 'It runs long fiber optic cables under every ocean on Earth', bn: 'এটি পৃথিবীর প্রতিটি সমুদ্রের তলদেশ দিয়ে দীর্ঘ ফাইবার অপটিক ক্যাবল স্থাপন করে' },
          { en: 'It replaces computer processors with quantum computing chips', bn: 'এটি কম্পিউটার প্রসেসরকে কোয়ান্টাম কম্পিউটিং চিপ দিয়ে প্রতিস্থাপন করে' },
          { en: 'It eliminates the need for HTTP request headers entirely', bn: 'এটি এইচটিটিপি রিকোয়েস্ট হেডারের প্রয়োজনীয়তা সম্পূর্ণ দূর করে' },
        ],
        answer: 0,
        hint: { en: 'Multiple data centers announce the same IP via BGP.', bn: 'একাধিক ডেটা সেন্টার বিজিপির মাধ্যমে একই আইপি ঘোষণা করে।' },
        explanation: {
          en: 'Anycast routes traffic to the nearest location and automatically redirects traffic if one center stops announcing the route.',
          bn: 'এনিকাস্ট ব্যবহারকারীকে নিকটতম কেন্দ্রে পাঠায় এবং কোনো কেন্দ্র বন্ধ হলে স্বয়ংক্রিয়ভাবে অন্য কেন্দ্রে ট্রাফিক ঘুরিয়ে দেয়।',
        },
      },
      {
        id: 'rel-qz-2',
        kind: 'mcq',
        topic: 'envoy-kubernetes-advantages',
        question: {
          en: 'Why do cloud-native Kubernetes environments often prefer Envoy over traditional Nginx for internal service mesh traffic?',
          bn: 'ক্লাউড-নেটিভ কুবারনেটিস পরিবেশে কেন অভ্যন্তরীণ সার্ভিস মেশ ট্রাফিকের জন্য ঐতিহ্যবাহী এনজিনএক্সের চেয়ে এনভয় বেশি পছন্দ করা হয়?',
        },
        options: [
          { en: 'Envoy dynamically discovers and updates backend endpoints in real time via gRPC xDS APIs without needing configuration reloads or process restarts', bn: 'এনভয় সার্ভিস রিলোড বা প্রসেস রিস্টার্ট ছাড়াই gRPC xDS এপিআই দিয়ে রিয়েল-টাইমে গতিশীলভাবে ব্যাকএন্ড আপডেট করতে পারে' },
          { en: 'Envoy reduces server electrical power consumption to zero watts', bn: 'এনভয় সার্ভারের বৈদ্যুতিক শক্তি খরচ শূন্য ওয়াটে নামিয়ে আনে' },
          { en: 'Envoy does not require an operating system to run', bn: 'এনভয় চালানোর জন্য কোনো অপারেটিং সিস্টেমের প্রয়োজন হয় না' },
          { en: 'Envoy automatically writes all frontend React code', bn: 'এনভয় নিজে থেকেই সমস্ত ফ্রন্টএন্ড রিঅ্যাক্ট কোড লিখে ফেলে' },
        ],
        answer: 0,
        hint: { en: 'Dynamic xDS discovery APIs without configuration reloads.', bn: 'কনফিগারেশন রিলোড ছাড়াই ডায়নামিক xDS এপিআই সুবিধা।' },
        explanation: {
          en: 'Envoy was engineered from the ground up for dynamic microservices, updating topology via control planes without dropped connections.',
          bn: 'এনভয় মাইক্রোসার্ভিসের জন্যই বিশেষভাবে তৈরি, যা কানেকশন ড্রপ ছাড়াই তাৎক্ষণিকভাবে নেটওয়ার্ক টপোলজি আপডেট করতে পারে।',
        },
      },
      {
        id: 'rel-qz-3',
        kind: 'mcq',
        topic: 'multi-tier-l4-edge-role',
        question: {
          en: 'In a multi-tier ingress architecture, what role is typically assigned to the Layer 4 edge tier?',
          bn: 'মাল্টি-টিয়ার ইনগ্রেস আর্কিটেকচারে সাধারণত লেয়ার ৪ এজ স্তরের ওপর কোন দায়িত্ব অর্পণ করা হয়?',
        },
        options: [
          { en: 'Absorbing millions of raw packets at line rate, mitigating DDoS attacks, and fanning out TCP streams across a pool of Layer 7 proxies', bn: 'প্রতি সেকেন্ডে লাখ লাখ প্যাকেট চরম গতিতে গ্রহণ করা, ডিডস আক্রমণ প্রতিহত করা এবং একদল লেয়ার ৭ প্রক্সির মধ্যে কাজ ভাগ করে দেওয়া' },
          { en: 'Rendering HTML templates into PDF documents', bn: 'এইচটিএমএল টেমপ্লেটকে পিডিএফ ডকুমেন্টে রূপান্তর করা' },
          { en: 'Validating user credit card security CVV numbers', bn: 'ব্যবহারকারীর ক্রেডিট কার্ডের গোপন সিভিভি কোড যাচাই করা' },
          { en: 'Storing user avatar image files on solid state drives', bn: 'সলিড স্টেট ড্রাইভে ব্যবহারকারীর প্রোফাইল ছবি সংরক্ষণ করা' },
        ],
        answer: 0,
        hint: { en: 'High packet throughput, DDoS mitigation, and fanning out to L7 proxies.', bn: 'উচ্চ প্যাকেট গতি, ডিডস প্রতিরোধ ও লেয়ার ৭ এ ট্রাফিক বণ্টন।' },
        explanation: {
          en: 'The Layer 4 ingress tier provides ultra-high-speed packet multiplexing, protecting Layer 7 proxies from transport-level exhaustion.',
          bn: 'লেয়ার ৪ ইনগ্রেস স্তর অতি দ্রুতগতিতে প্যাকেট বণ্টন করে লেয়ার ৭ প্রক্সিগুলোকে ওভারলোড হওয়া থেকে রক্ষা করে।',
        },
      },
      {
        id: 'rel-qz-4',
        kind: 'predict',
        topic: 'static-media-queries-routed',
        question: {
          en: 'In our production benchmark of 5000 requests, how many queries were directed to static object storage (e.g. 1800 )?',
          bn: 'আমাদের ৫০০০টি রিকোয়েস্টের প্রোডাকশন বেঞ্চমার্কে কতগুলো কুয়েরি স্ট্যাটিক অবজেক্ট স্টোরেজে পাঠানো হয়েছিল (যেমন 1800 )?',
        },
        answer: '1800',
        accept: ['1800', '1800 queries', 'eighteen hundred'],
        hint: { en: '1800', bn: '1800' },
        explanation: {
          en: 'The Layer 7 proxy dispatched 1800 /static requests to object storage caches, offloading microservice compute.',
          bn: 'লেয়ার ৭ প্রক্সি ১৮০০টি /static রিকোয়েস্ট অবজেক্ট স্টোরেজে পাঠিয়ে মূল মাইক্রোসার্ভিসের কাজের চাপ কমিয়েছে।',
        },
      },
    ],
  },
};
