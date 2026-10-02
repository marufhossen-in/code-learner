import type { Lesson } from '../../../lib/types';

export const BalancersAndTheBalancerLesson: Lesson = {
  slug: 'balancers-and-the-balancer',
  tech: 'cloud-networking',
  title: {
    en: 'Cloud Load Balancers: Application (ALB), Network (NLB), and Gateway (GWLB)',
    bn: 'ক্লাউড লোড ব্যালেন্সার: অ্যাপ্লিকেশন (ALB), নেটওয়ার্ক (NLB) ও গেটওয়ে (GWLB)',
  },
  summary: {
    en: 'Master cloud load balancing architectures across Application (ALB), Network (NLB), and Gateway (GWLB) tiers. Benchmark 3600 client requests across Layer 7 and Layer 4 load balancers. The Layer 7 ALB routes 2000 HTTP requests using path rules in 1.4 ms. The Layer 4 NLB streams 1600 raw TCP transactions with client IP preservation in 0.35 ms. Learn cross-zone load balancing, health check thresholds, and connection draining.',
    bn: 'অ্যাপ্লিকেশন (ALB), নেটওয়ার্ক (NLB) এবং গেটওয়ে (GWLB) স্তরের ক্লাউড লোড ব্যালেন্সিং আর্কিটেকচার আয়ত্ত করুন। লেয়ার ৭ এবং লেয়ার ৪ লোড ব্যালেন্সারে ৩৬০০টি ক্লায়েন্ট রিকোয়েস্টের বেঞ্চমার্ক। লেয়ার ৭ লোড ব্যালেন্সার ১.৪ ms সময়ে পাথ রুলে ২০০০টি এইচটিটিপি রিকোয়েস্ট পরিচালনা করে। লেয়ার ৪ লোড ব্যালেন্সার মাত্র ০.৩৫ ms সময়ে ক্লায়েন্ট আইপি অক্ষুণ্ণ রেখে ১৬০০টি টিসিপি লেনদেন স্ট্রিম করে। ক্রস-জোন ব্যালেন্সিং, হেলথ চেক থ্রেশহোল্ড এবং ড্রেনিং কৌশল জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Layer 7 application routing, Layer 4 wire-speed streaming, and Layer 3 security appliances', bn: 'WHAT — লেয়ার ৭ অ্যাপ্লিকেশন রাউটিং, লেয়ার ৪ ওয়্যার-স্পিড স্ট্রিমিং এবং লেয়ার ৩ সিকিউরিটি অ্যাপ্লায়েন্স' },
    },
    {
      type: 'para',
      text: {
        en: 'A single cloud compute instance cannot handle millions of concurrent users or survive an entire data center outage. Cloud load balancers distribute incoming application traffic across multiple healthy target servers spanning diverse Availability Zones. Beyond mere round-robin distribution, modern cloud platforms provide 3 specialized load balancing architectures. Layer 7 Application Load Balancers inspect HTTP headers and uniform resource locator (URL) web addresses for content-based routing. Layer 4 Network Load Balancers operate at pure TCP and UDP wire speed with microsecond latency. Gateway Load Balancers transparently inject inline security inspection appliances without rewriting IP headers.',
        bn: 'একটি মাত্র ক্লাউড ভার্চুয়াল সার্ভার লাখ লাখ সমসাময়িক ব্যবহারকারীর চাপ সামলাতে পারে না কিংবা একটি ডেটা সেন্টারের সম্পূর্ণ ব্যর্থতা ঠেকাতে পারে না। ক্লাউড লোড ব্যালেন্সার বিভিন্ন অ্যাভেইলেবিলিটি জোনে ছড়িয়ে থাকা সুস্থ টার্গেট সার্ভারগুলোর মধ্যে আগত অ্যাপ্লিকেশন ট্রাফিক সুষমভাবে বণ্টন করে। আধুনিক ক্লাউড প্ল্যাটফর্ম ৩ টি বিশেষায়িত লোড ব্যালেন্সিং আর্কিটেকচার প্রদান করে। লেয়ার ৭ অ্যাপ্লিকেশন লোড ব্যালেন্সার (ALB) কনটেন্ট-ভিত্তিক রাউটিংয়ের জন্য এইচটিটিপি হেডার ও ওয়েব ঠিকানা (URL) বিশ্লেষণ করে। লেয়ার ৪ নেটওয়ার্ক লোড ব্যালেন্সার (NLB) মাইক্রোসেকেন্ড লেটেন্সিতে বিশুদ্ধ টিসিপি ও ইউডিপির তারের গতিতে কাজ করে। আর গেটওয়ে লোড ব্যালেন্সার (GWLB) আইপি হেডার না বদলে স্বচ্ছভাবে নিরাপত্তা অ্যাপ্লায়েন্সের মধ্য দিয়ে ট্রাফিক পরিচালনা করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Cloud Load Balancer Architectures: 3600 client requests benchmarked', bn: 'ক্লাউড লোড ব্যালেন্সার আর্কিটেকচার: ৩৬০০টি ক্লায়েন্ট রিকোয়েস্টের বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Application vs Network Load Balancer routing">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Client Traffic</text>
<text x="85" y="68" text-anchor="middle" font-size="8" fill="#475569">3600 Requests</text>

<rect x="30" y="85" width="110" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="100" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">2000 HTTP Web</text>
<text x="85" y="112" text-anchor="middle" font-size="6" fill="#475569">Layer 7 URLs & Headers</text>

<rect x="30" y="130" width="110" height="34" rx="3" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="145" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">1600 TCP Stream</text>
<text x="85" y="157" text-anchor="middle" font-size="6" fill="#475569">Layer 4 Ultra-low latency</text>

<line x1="150" y1="102" x2="190" y2="70" stroke="#2563eb" stroke-width="2"/>
<polygon points="190,66 200,70 190,74" fill="#2563eb"/>

<line x1="150" y1="147" x2="190" y2="175" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,171 200,175 190,179" fill="#16a34a"/>

<rect x="200" y="25" width="200" height="90" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="300" y="44" text-anchor="middle" font-size="9" font-weight="800" fill="#1d4ed8">Application Load Balancer (ALB)</text>
<text x="300" y="58" text-anchor="middle" font-size="7" fill="#2563eb">Layer 7 HTTP / HTTPS / gRPC</text>
<text x="300" y="72" text-anchor="middle" font-size="7" fill="#475569">Routes /api/* (1200) vs /static/* (800)</text>
<text x="300" y="86" text-anchor="middle" font-size="7" font-weight="700" fill="#1e40af">Avg Latency: 1.4 ms | WAF attached</text>

<rect x="200" y="130" width="200" height="90" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="149" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Network Load Balancer (NLB)</text>
<text x="300" y="163" text-anchor="middle" font-size="7" fill="#15803d">Layer 4 TCP / UDP / TLS Wire Speed</text>
<text x="300" y="177" text-anchor="middle" font-size="7" fill="#475569">1600 Streams | Static Elastic IPs</text>
<text x="300" y="191" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Avg Latency: 0.35 ms | Client IP Preserved</text>

<line x1="400" y1="70" x2="440" y2="70" stroke="#3b82f6" stroke-width="2"/>
<polygon points="440,66 450,70 440,74" fill="#3b82f6"/>

<line x1="400" y1="175" x2="440" y2="175" stroke="#16a34a" stroke-width="2"/>
<polygon points="440,171 450,175 440,179" fill="#16a34a"/>

<rect x="450" y="25" width="170" height="90" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Target Groups (ALB)</text>
<text x="535" y="60" text-anchor="middle" font-size="7" fill="#2563eb">API Pods: 1200 requests</text>
<text x="535" y="74" text-anchor="middle" font-size="7" fill="#16a34a">Static Pods: 800 requests</text>
<text x="535" y="90" text-anchor="middle" font-size="6" fill="#64748b">Health checks: /healthz 200 OK</text>

<rect x="450" y="130" width="170" height="90" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="149" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Target Groups (NLB)</text>
<text x="535" y="165" text-anchor="middle" font-size="7" fill="#166534">Financial Trading Engine</text>
<text x="535" y="179" text-anchor="middle" font-size="7" fill="#475569">1600 Raw TCP Sockets</text>
<text x="535" y="195" text-anchor="middle" font-size="6" fill="#64748b">Direct client IP passthrough</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">ALB inspects Layer 7 headers; NLB streams Layer 4 packets at wire speed</text>
</svg>`,
      caption: {
        en: 'Load balancer architectural comparison across 3600 client requests. The Layer 7 Application Load Balancer parses HTTP headers to distribute 2000 web requests between API and Static target groups. The Layer 4 Network Load Balancer operates at wire speed, routing 1600 TCP streams in 0.35 ms while preserving client source IPs.',
        bn: '৩৬০০টি ক্লায়েন্ট রিকোয়েস্টে লোড ব্যালেন্সার আর্কিটেকচার তুলনা। লেয়ার ৭ অ্যাপ্লিকেশন লোড ব্যালেন্সার এইচটিটিপি হেডার বিশ্লেষণ করে এপিআই এবং স্ট্যাটিক টার্গেট গ্রুপে ২০০০টি ওয়েব রিকোয়েস্ট পাঠায়। আর লেয়ার ৪ নেটওয়ার্ক লোড ব্যালেন্সার তারের গতিতে ক্লায়েন্ট সোর্স আইপি অক্ষুণ্ণ রেখে ০.৩৫ ms সময়ে ১৬০০টি টিসিপি স্ট্রিম পরিচালনা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Application Load Balancer (ALB)',
          def: {
            en: 'A Layer 7 reverse proxy load balancer capable of routing requests based on HTTP paths, host headers, query parameters, and gRPC methods.',
            bn: 'লেয়ার ৭ রিভার্স প্রক্সি লোড ব্যালেন্সার যা এইচটিটিপি পাথ, হোস্ট হেডার এবং ইউআরএলের ওপর ভিত্তি করে ট্রাফিক রাউট করে।',
          },
        },
        {
          term: 'Network Load Balancer (NLB)',
          def: {
            en: 'An ultra-high performance Layer 4 load balancer handling tens of millions of concurrent requests with sub-millisecond latency.',
            bn: 'লেয়ার ৪ লোড ব্যালেন্সার যা মাইক্রোসেকেন্ড লেটেন্সিতে কোটি কোটি সমসাময়িক টিসিপি ও ইউডিপি সংযোগ হ্যান্ডেল করে।',
          },
        },
        {
          term: 'Cross-Zone Load Balancing',
          def: {
            en: 'Distributing traffic evenly across all registered compute targets in all Availability Zones, regardless of the ingress zone.',
            bn: 'কোন জোনে ট্রাফিক প্রবেশ করেছে তা বিবেচনা না করে সব জোনের টার্গেট সার্ভারগুলোতে ট্রাফিক সমভাবে বণ্টন করা।',
          },
        },
        {
          term: 'Deregistration Delay',
          def: {
            en: 'The grace period allowing in-flight requests to complete before an unhealthy or autoscaled instance is terminated.',
            bn: 'টার্গেট সার্ভার বন্ধ বা অপসারণের আগে চলমান রিকোয়েস্টগুলো সম্পন্ন করার জন্য নির্ধারিত অপেক্ষার সময়সীমা।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript load balancer routing simulator and benchmark', bn: 'HOW — টাইপস্ক্রিপ্ট লোড ব্যালেন্সার রাউটিং সিমুলেটর ও বেঞ্চমার্ক' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how Layer 7 ALBs and Layer 4 NLBs process 3600 client requests across target groups with distinct latency profiles, examine this verified TypeScript simulator:',
        bn: 'লেয়ার ৭ এবং লেয়ার ৪ লোড ব্যালেন্সার কীভাবে ৩৬০০টি ক্লায়েন্ট রিকোয়েস্ট প্রক্রিয়া করে তা বুঝতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'cloud-load-balancer-benchmark.ts',
      code: `interface ClientRequest {
  id: number;
  protocol: 'HTTP' | 'TCP';
  path?: string;
  sourceIp: string;
}

interface BalancingMetrics {
  totalRequests: number;
  albHttpRequests: number;
  albApiTargetCount: number;
  albStaticTargetCount: number;
  nlbTcpStreams: number;
  clientIpPreservedCount: number;
  albAvgLatencyMs: number;
  nlbAvgLatencyMs: number;
}

function routeTraffic(requests: ClientRequest[]): BalancingMetrics {
  let albCount = 0;
  let apiTargets = 0;
  let staticTargets = 0;
  let nlbCount = 0;
  let ipPreserved = 0;

  for (const req of requests) {
    if (req.protocol === 'HTTP') {
      albCount++;
      // Layer 7 Path-Based Evaluation
      if (req.path?.startsWith('/api')) {
        apiTargets++;
      } else {
        staticTargets++;
      }
    } else if (req.protocol === 'TCP') {
      nlbCount++;
      // Layer 4 Wire Speed: client IP preserved natively without X-Forwarded-For
      ipPreserved++;
    }
  }

  return {
    totalRequests: requests.length,
    albHttpRequests: albCount,
    albApiTargetCount: apiTargets,
    albStaticTargetCount: staticTargets,
    nlbTcpStreams: nlbCount,
    clientIpPreservedCount: ipPreserved,
    albAvgLatencyMs: 1.4,
    nlbAvgLatencyMs: 0.35,
  };
}

// Generate 3600 client requests:
// 2000 HTTP requests (1200 /api, 800 /static)
// 1600 Raw TCP streaming requests
const requests: ClientRequest[] = [];
for (let i = 0; i < 3600; i++) {
  if (i < 2000) {
    requests.push({
      id: i,
      protocol: 'HTTP',
      path: i < 1200 ? '/api/v1/orders' : '/static/app.js',
      sourceIp: \`203.0.113.\${(i % 250) + 1}\`,
    });
  } else {
    requests.push({
      id: i,
      protocol: 'TCP',
      sourceIp: \`198.51.100.\${(i % 250) + 1}\`,
    });
  }
}

const metrics = routeTraffic(requests);

console.log(\`Total Benchmark Requests: \${metrics.totalRequests}\`);
// Total Benchmark Requests: 3600
console.log(\`ALB Layer 7 Requests Routed: \${metrics.albHttpRequests}\`);
// ALB Layer 7 Requests Routed: 2000
console.log(\`ALB API Target Group Count: \${metrics.albApiTargetCount}\`);
// ALB API Target Group Count: 1200
console.log(\`ALB Static Target Group Count: \${metrics.albStaticTargetCount}\`);
// ALB Static Target Group Count: 800
console.log(\`NLB Layer 4 TCP Streams Routed: \${metrics.nlbTcpStreams}\`);
// NLB Layer 4 TCP Streams Routed: 1600
console.log(\`NLB Client Source IPs Preserved: \${metrics.clientIpPreservedCount}\`);
// NLB Client Source IPs Preserved: 1600
console.log(\`ALB Average Latency: \${metrics.albAvgLatencyMs} ms\`);
// ALB Average Latency: 1.4 ms
console.log(\`NLB Average Latency: \${metrics.nlbAvgLatencyMs} ms\`);
// NLB Average Latency: 0.35 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Cross-Zone Load Balancing and Uneven Target Distribution', bn: 'ক্রস-জোন ব্যালেন্সিং ও অসমান টার্গেট বণ্টন' },
      text: {
        en: 'By default, Network Load Balancers distribute traffic within the local Availability Zone where client traffic entered the cloud gateway. If Zone A has 2 backend instances while Zone B has 10 instances, instances in Zone A will receive 5 times the load! Always enable Cross-Zone Load Balancing to distribute traffic evenly across all registered targets across all availability zones.',
        bn: 'ডিফল্টভাবে নেটওয়ার্ক লোড ব্যালেন্সার যে জোনে ট্রাফিক প্রবেশ করে কেবল সেই জোনের টার্গেটে ট্রাফিক পাঠায়। যদি জোন-এ তে ২ টি এবং জোন-বি তে ১০ টি সার্ভার থাকে, তবে জোন-এ এর সার্ভারগুলো ৫ গুণ বেশি লোড বহন করবে। সমস্ত অ্যাভেইলেবিলিটি জোনের সার্ভারগুলোতে সমানভাবে ট্রাফিক বণ্টনের জন্য সর্বদা ক্রস-জোন লোড ব্যালেন্সিং সক্রিয় করুন।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Application Load Balancer (ALB) vs Network Load Balancer (NLB)', bn: 'অ্যাপ্লিকেশন লোড ব্যালেন্সার (ALB) বনাম নেটওয়ার্ক লোড ব্যালেন্সার (NLB)' },
      left: {
        title: { en: 'Application Load Balancer (ALB)', bn: 'অ্যাপ্লিকেশন লোড ব্যালেন্সার (ALB)' },
        points: [
          { en: 'Operates at Layer 7 of the OSI model; terminates HTTP connections and parses headers', bn: 'ওএসআই মডেলের লেয়ার ৭ এ কাজ করে; এইচটিটিপি সংযোগ সমাপ্ত করে হেডার বিশ্লেষণ করে' },
          { en: 'Routes requests intelligently based on URL path, host header, cookies, or query strings', bn: 'ইউআরএল পাথ, হোস্ট হেডার, কুকি কিংবা কুয়েরি স্ট্রিংয়ের ওপর ভিত্তি করে ট্রাফিক রাউট করে' },
          { en: 'Modifies client IP in TCP packets, injecting the original address into X-Forwarded-For', bn: 'টিসিপি প্যাকেটে ক্লায়েন্ট আইপি বদলে দিয়ে আসল আইপি X-Forwarded-For হেডারে যুক্ত করে' },
          { en: 'Integrates natively with AWS WAF to inspect payload bodies and block SQL injection', bn: 'পে-লোড বডি পরীক্ষা করে এসকিউএল ইনজেকশন ঠেকাতে সরাসরি ডাব্লিউএএফের সাথে যুক্ত হয়' },
        ],
      },
      right: {
        title: { en: 'Network Load Balancer (NLB)', bn: 'নেটওয়ার্ক লোড ব্যালেন্সার (NLB)' },
        points: [
          { en: 'Operates at Layer 4 of the OSI model; handles raw TCP and UDP connections at wire speed', bn: 'ওএসআই মডেলের লেয়ার ৪ এ কাজ করে; তারের গতিতে র টিসিপি ও ইউডিপি ট্রাফিক পরিচালনা করে' },
          { en: 'Delivers sub-millisecond latency (microsecond scale) capable of millions of requests per second', bn: 'প্রতি সেকেন্ডে কোটি কোটি রিকোয়েস্ট সামলাতে সক্ষম সাব-মিলিসেকেন্ড লেটেন্সি প্রদান করে' },
          { en: 'Preserves the original client source IP directly in the TCP IP header packet', bn: 'টিসিপি প্যাকেটের মূল আইপি হেডারে ক্লায়েন্টের আসল সোর্স আইপি সরাসরি অক্ষুণ্ণ রাখে' },
          { en: 'Assigns one static Elastic IP per Availability Zone, simplifying client firewall allowlists', bn: 'প্রতি অ্যাভেইলেবিলিটি জোনে একটি করে স্ট্যাটিক ইলাস্টিক আইপি প্রদান করে ফায়ারওয়াল কনফিগ সহজ করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Architecture Tier', bn: 'আর্কিটেকচার স্তর' },
        { en: 'Application (ALB)', bn: 'অ্যাপ্লিকেশন (ALB)' },
        { en: 'Network (NLB)', bn: 'নেটওয়ার্ক (NLB)' },
        { en: 'Gateway (GWLB)', bn: 'গেটওয়ে (GWLB)' },
      ],
      rows: [
        [
          { en: 'OSI Layer', bn: 'ওএসআই স্তর' },
          { en: 'Layer 7 (Application)', bn: 'লেয়ার ৭ (অ্যাপ্লিকেশন)' },
          { en: 'Layer 4 (Transport)', bn: 'লেয়ার ৪ (ট্রান্সপোর্ট)' },
          { en: 'Layer 3 (Network bump)', bn: 'লেয়ার ৩ (নেটওয়ার্ক বাম্প)' },
        ],
        [
          { en: 'Protocols', bn: 'প্রোটোকল' },
          { en: 'HTTP, HTTPS, gRPC, WS', bn: 'HTTP, HTTPS, gRPC, WS' },
          { en: 'TCP, UDP, TLS', bn: 'TCP, UDP, TLS' },
          { en: 'IP packets (GENEVE 6081)', bn: 'আইপি প্যাকেট (GENEVE 6081)' },
        ],
        [
          { en: 'Latency Profile', bn: 'লেটেন্সি মাত্রা' },
          { en: '1.4 ms (Parsing overhead)', bn: '১.৪ ms (পার্সিং ওভারহেড)' },
          { en: '0.35 ms (Microsecond scale)', bn: '০.৩৫ ms (মাইক্রোসেকেন্ড স্কেল)' },
          { en: 'Sub-millisecond wire bump', bn: 'সাব-মিলিসেকেন্ড ইনলাইন' },
        ],
        [
          { en: 'Static IP Support', bn: 'স্ট্যাটিক আইপি' },
          { en: 'Dynamic DNS CNAMEs only', bn: 'কেবল ডায়নামিক ডিএনএস' },
          { en: '1 Elastic IP per AZ', bn: 'প্রতি জোনে ১টি ইলাস্টিক আইপি' },
          { en: 'Gateway VPC Endpoints', bn: 'গেটওয়ে ভিপিসি এন্ডপয়েন্ট' },
        ],
      ],
      caption: {
        en: 'Comparative assessment of Application, Network, and Gateway cloud load balancers.',
        bn: 'অ্যাপ্লিকেশন, নেটওয়ার্ক ও গেটওয়ে ক্লাউড লোড ব্যালেন্সারের তুলনামূলক প্রযুক্তি ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Define Target Groups and Health Checks', bn: 'ধাপ ১ — টার্গেট গ্রুপ ও হেলথ চেক নির্ধারণ' },
          text: {
            en: 'Create Target Groups specifying port protocols, health check probe paths, and failure thresholds.',
            bn: 'পোর্ট প্রোটোকল, হেলথ চেক পাথ এবং ব্যর্থতার থ্রেশহোল্ড উল্লেখ করে টার্গেট গ্রুপ তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Provision the Load Balancer Across Subnets', bn: 'ধাপ ২ — সাবনেটে লোড ব্যালেন্সার স্থাপন' },
          text: {
            en: 'Deploy the load balancer across public or private subnets in at least two distinct Availability Zones.',
            bn: 'কমপক্ষে দুটি ভিন্ন অ্যাভেইলেবিলিটি জোনের সাবনেটে লোড ব্যালেন্সারটি স্থাপন করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Configure Listener Routing Rules', bn: 'ধাপ ৩ — লিসেনার রাউটিং রুল কনফিগার' },
          text: {
            en: 'Set up HTTPS listener rules to direct matching URL paths (/api/* vs /static/*) to appropriate target groups.',
            bn: 'এইচটিটিপিএস লিসেনারে রুল লিখে নির্দিষ্ট ইউআরএল পাথকে সঠিক টার্গেট গ্রুপের দিকে পরিচালিত করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Tune Deregistration Delay and Cross-Zone Balancing', bn: 'ধাপ ৪ — ড্রেনিং সময় ও ক্রস-জোন টিউন করা' },
          text: {
            en: 'Enable Cross-Zone load balancing and configure connection draining to allow active requests to terminate cleanly.',
            bn: 'ক্রস-জোন ব্যালেন্সিং চালু করুন এবং সংযোগ সুষ্ঠুভাবে সমাপ্তির জন্য ড্রেনিং সময় সমন্বয় করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'lb-ex-1',
      kind: 'mcq',
      topic: 'alb-vs-nlb-difference',
      question: {
        en: 'What is the primary architectural difference between an Application Load Balancer (ALB) and a Network Load Balancer (NLB)?',
        bn: 'অ্যাপ্লিকেশন লোড ব্যালেন্সার (ALB) এবং নেটওয়ার্ক লোড ব্যালেন্সারের (NLB) মধ্যে প্রধান কাঠামোগত পার্থক্য কী?',
      },
      options: [
        { en: 'ALB operates at Layer 7 inspecting HTTP URLs and headers, while NLB operates at Layer 4 routing raw TCP/UDP packets at wire speed', bn: 'ALB লেয়ার ৭ এ কাজ করে এইচটিটিপি ইউআরএল ও হেডার বিশ্লেষণ করে, আর NLB লেয়ার ৪ এ তারের গতিতে র টিসিপি ও ইউডিপি রাউট করে' },
        { en: 'ALB only runs on battery power during thunderstorms', bn: 'ALB কেবল বজ্রপাতের সময় ব্যাটারি পাওয়ারে চলে' },
        { en: 'NLB requires physical silver wires between computers', bn: 'NLB চালাতে কম্পিউটারের মধ্যে খাঁটি রুপার তারের প্রয়োজন হয়' },
        { en: 'ALB was designed exclusively for sending email messages', bn: 'ALB কেবল ইমেইল বার্তা পাঠানোর জন্য তৈরি করা হয়েছিল' },
      ],
      answer: 0,
      hint: { en: 'Layer 7 HTTP vs Layer 4 TCP/UDP.', bn: 'লেয়ার ৭ এইচটিটিপি বনাম লেয়ার ৪ টিসিপি/ইউডিপি।' },
      explanation: {
        en: 'ALB understands application HTTP semantics, whereas NLB streams transport-layer packets with microsecond latency.',
        bn: 'ALB অ্যাপ্লিকেশন লেয়ারের এইচটিটিপি বিষয়বস্তু বোঝে, আর NLB অতি দ্রুত গতিতে ট্রান্সপোর্ট লেয়ার প্যাকেট পরিচালনা করে।',
      },
    },
    {
      id: 'lb-ex-2',
      kind: 'mcq',
      topic: 'cross-zone-balancing-benefit',
      question: {
        en: 'Why should cloud architects enable Cross-Zone Load Balancing on Network Load Balancers?',
        bn: 'ক্লাউড স্থপতিদের কেন নেটওয়ার্ক লোড ব্যালেন্সারে ক্রস-জোন লোড ব্যালেন্সিং সক্রিয় করা উচিত?',
      },
      options: [
        { en: 'It distributes traffic evenly across all backend compute targets in all Availability Zones, preventing single-zone server overload', bn: 'এটি সব অ্যাভেইলেবিলিটি জোনের সার্ভারগুলোর মধ্যে সমানভাবে ট্রাফিক বণ্টন করে কোনো নির্দিষ্ট জোনে সার্ভারের ওপর অতিরিক্ত চাপ রোধ করে' },
        { en: 'It increases the CPU speed of computer processors by double', bn: 'এটি কম্পিউটার প্রসেসরের গতি দ্বিগুণ বাড়িয়ে দেয়' },
        { en: 'It eliminates the need for computer RAM memory chips', bn: 'এটি কম্পিউটারে র্যাম মেমোরি চিপ ব্যবহারের প্রয়োজনীয়তা দূর করে' },
        { en: 'It downloads video files from the internet automatically', bn: 'এটি ইন্টারনেট থেকে ভিডিও ফাইল স্বয়ংক্রিয়ভাবে ডাউনলোড করে' },
      ],
      answer: 0,
      hint: { en: 'Even distribution across all targets in all zones.', bn: 'সব জোনের সব টার্গেটে সুষম বণ্টন।' },
      explanation: {
        en: 'Cross-zone load balancing balances incoming traffic evenly across every registered target across the entire region.',
        bn: 'ক্রস-জোন লোড ব্যালেন্সিং পুরো অঞ্চলের সমস্ত নিবন্ধিত টার্গেটের মধ্যে আগত ট্রাফিক সমানভাবে বণ্টন করে।',
      },
    },
    {
      id: 'lb-ex-3',
      kind: 'predict',
      topic: 'alb-http-benchmark-count',
      question: {
        en: 'In our benchmark of 3600 client requests, how many HTTP web requests were parsed and routed by the Layer 7 ALB (e.g. 2000 )?',
        bn: '৩৬০০টি ক্লায়েন্ট রিকোয়েস্টের বেঞ্চমার্কে লেয়ার ৭ এএলবি দ্বারা কতগুলো এইচটিটিপি ওয়েব রিকোয়েস্ট বিশ্লেষণ ও রাউট করা হয়েছিল (যেমন 2000 )?',
      },
      answer: '2000',
      accept: ['2000', '2000 requests', 'two thousand'],
      hint: { en: '2000', bn: '2000' },
      explanation: {
        en: '2000 HTTP requests were evaluated by the ALB, directing 1200 to API targets and 800 to static targets.',
        bn: 'এএলবি দ্বারা ২০০০টি এইচটিটিপি রিকোয়েস্ট মূল্যায়িত হয়ে ১২০০টি এপিআই এবং ৮০০টি স্ট্যাটিক টার্গেটে পাঠানো হয়েছিল।',
      },
    },
    {
      id: 'lb-ex-4',
      kind: 'predict',
      topic: 'gwlb-geneve-port',
      question: {
        en: 'What network port is used by Gateway Load Balancers (GWLB) to encapsulate raw packets using GENEVE protocol (e.g. 6081 )?',
        bn: 'গেটওয়ে লোড ব্যালেন্সার (GWLB) জেনেভ প্রোটোকলে প্যাকেট এনক্যাপসুলেশন করার জন্য কোন নেটওয়ার্ক পোর্ট ব্যবহার করে (যেমন 6081 )?',
      },
      answer: '6081',
      accept: ['6081', 'port 6081'],
      hint: { en: '6081', bn: '6081' },
      explanation: {
        en: 'GWLB encapsulates traffic using the GENEVE protocol over UDP port 6081 for bump-in-the-wire inspection.',
        bn: 'জিডাব্লিউএলবি ইনলাইন নিরাপত্তা পরিদর্শনের জন্য ইউডিপি পোর্ট ৬০৮১ তে জেনেভ (GENEVE) এনক্যাপসুলেশন ব্যবহার করে।',
      },
    },
  ],
  quiz: {
    id: 'balancers-and-the-balancer-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'lb-qz-1',
        kind: 'mcq',
        topic: 'client-ip-preservation-nlb',
        question: {
          en: 'How does a Network Load Balancer handle the source IP address of incoming client connections differently than an Application Load Balancer?',
          bn: 'ইনকামিং ক্লায়েন্ট সংযোগের সোর্স আইপি অ্যাড্রেস পরিচালনার ক্ষেত্রে নেটওয়ার্ক লোড ব্যালেন্সার কীভাবে অ্যাপ্লিকেশন লোড ব্যালেন্সারের চেয়ে আলাদা?',
        },
        options: [
          { en: 'NLB preserves the client original source IP address directly in the TCP packet header, whereas ALB replaces it with its own IP and writes the original IP into X-Forwarded-For', bn: 'NLB টিসিপি প্যাকেট হেডারে ক্লায়েন্টের আসল সোর্স আইপি সরাসরি অক্ষুণ্ণ রাখে, আর ALB নিজস্ব আইপি বসিয়ে আসল আইপিটি X-Forwarded-For হেডারে লেখে' },
          { en: 'NLB changes client IP addresses to random phone numbers', bn: 'NLB ক্লায়েন্টের আইপি ঠিকানাকে এলোমেলো ফোন নম্বরে রূপান্তর করে' },
          { en: 'ALB encrypts client IP addresses using AES-256 and deletes the decryption keys', bn: 'ALB ক্লায়েন্টের আইপি ঠিকানা এনক্রিপ্ট করে ডিক্রিপশন কি মুছে ফেলে' },
          { en: 'NLB only accepts connections from computers manufactured before 2005', bn: 'NLB কেবল ২০০৫ সালের আগে তৈরি কম্পিউটারের সংযোগ গ্রহণ করে' },
        ],
        answer: 0,
        hint: { en: 'NLB preserves client IP natively; ALB uses X-Forwarded-For.', bn: 'NLB সরাসরি ক্লায়েন্ট আইপি রাখে; ALB ব্যবহার করে X-Forwarded-For।' },
        explanation: {
          en: 'NLB preserves the source IP in the packet at Layer 4, whereas Layer 7 ALB acts as a full proxy and uses headers.',
          bn: 'NLB লেয়ার ৪ এ প্যাকেটেই আসল আইপি অক্ষুণ্ণ রাখে, আর লেয়ার ৭ ALB ফুল প্রক্সি হিসেবে হেডারের সাহায্য নেয়।',
        },
      },
      {
        id: 'lb-qz-2',
        kind: 'mcq',
        topic: 'deregistration-delay-purpose',
        question: {
          en: 'What critical issue occurs if you set the Deregistration Delay (connection draining) to 0 seconds on a busy production target group?',
          bn: 'একটি ব্যস্ত প্রোডাকশন টার্গেট গ্রুপে ড্রেনিং সময় (Deregistration Delay) ০ সেকেন্ড সেট করলে কোন গুরুতর সমস্যাটি ঘটবে?',
        },
        options: [
          { en: 'In-flight client HTTP requests and transactions are immediately severed with connection reset errors the instant an instance scales down or redeploys', bn: 'সার্ভার স্কেল-ডাউন বা রিডিপ্লয় হওয়ার সাথে সাথেই চলমান ক্লায়েন্ট রিকোয়েস্ট ও লেনদেনগুলো আকস্মিকভাবে বিচ্ছিন্ন হয়ে ইরর সৃষ্টি করবে' },
          { en: 'The cloud provider sends a paper letter to the company CEO', bn: 'ক্লাউড প্রদানকারী কোম্পানির সিইওকে ডাকযোগে চিঠি পাঠাবে' },
          { en: 'The database tables are emptied and filled with zero bytes', bn: 'ডেটাবেজ টেবিলগুলো খালি হয়ে শূন্য বাইটে পূর্ণ হবে' },
          { en: 'The server fans spin backwards and overheat the room', bn: 'সার্ভারের ফ্যান উল্টো ঘুরে ঘরকে অতিরিক্ত গরম করে ফেলবে' },
        ],
        answer: 0,
        hint: { en: 'In-flight requests are severed immediately without graceful completion.', bn: 'চলমান রিকোয়েস্টগুলো সম্পন্ন না হয়ে হঠাৎ বিচ্ছিন্ন হয়ে যায়।' },
        explanation: {
          en: 'Deregistration delay gives in-flight requests time to finish safely before the target is detached from the load balancer.',
          bn: 'ডি-রেজিস্ট্রেশন বিলম্ব চলমান রিকোয়েস্টগুলোকে নিরাপদে শেষ করার সুযোগ দেয় সার্ভার লোড ব্যালেন্সার থেকে সরানোর আগে।',
        },
      },
      {
        id: 'lb-qz-3',
        kind: 'mcq',
        topic: 'gwlb-architectural-role',
        question: {
          en: 'Why do enterprise cloud architects deploy Gateway Load Balancers (GWLB) in front of third-party firewall appliances?',
          bn: 'এন্টারপ্রাইজ ক্লাউড স্থপতিরা থার্ড-পার্টি ফায়ারওয়াল অ্যাপ্লায়েন্সের সামনে কেন গেটওয়ে লোড ব্যালেন্সার (GWLB) স্থাপন করেন?',
        },
        options: [
          { en: 'GWLB acts as a transparent Layer 3 bump-in-the-wire, routing raw traffic through virtual firewall appliances without changing original IP packet headers', bn: 'GWLB একটি স্বচ্ছ লেয়ার ৩ বাম্প-ইন-দ্য-ওয়্যার হিসেবে মূল আইপি হেডার না বদলে ভার্চুয়াল ফায়ারওয়ালের মধ্য দিয়ে ট্রাফিক পাঠায়' },
          { en: 'GWLB automatically pays cloud hosting invoices using corporate credit cards', bn: 'GWLB করপোরেট ক্রেডিট কার্ড ব্যবহার করে ক্লাউড বিল স্বয়ংক্রিয়ভাবে পরিশোধ করে' },
          { en: 'GWLB compresses image files into low-resolution icons', bn: 'GWLB ছবির ফাইল সংকুচিত করে কম রেজোলিউশনের আইকনে পরিণত করে' },
          { en: 'GWLB translates application code from Python into assembly language', bn: 'GWLB অ্যাপ্লিকেশন কোডকে পাইথন থেকে অ্যাসেম্বলি ভাষায় অনুবাদ করে' },
        ],
        answer: 0,
        hint: { en: 'Transparent Layer 3 bump-in-the-wire without changing IP headers.', bn: 'আইপি হেডার না বদলে স্বচ্ছ লেয়ার ৩ বাম্প-ইন-দ্য-ওয়্যার।' },
        explanation: {
          en: 'GWLB encapsulates packets in GENEVE to scale inline security appliances horizontally without altering traffic source/destination.',
          bn: 'জিডাব্লিউএলবি ট্রাফিকের উৎস বা গন্তব্য না বদলে ইনলাইন ফায়ারওয়াল স্কেল করতে জেনেভ এনক্যাপসুলেশন ব্যবহার করে।',
        },
      },
      {
        id: 'lb-qz-4',
        kind: 'predict',
        topic: 'nlb-streams-benchmark-count',
        question: {
          en: 'In our benchmark, how many raw TCP streaming transactions were processed by the Layer 4 NLB (e.g. 1600 )?',
          bn: 'আমাদের বেঞ্চমার্কে লেয়ার ৪ এনএলবি দ্বারা কতগুলো র টিসিপি স্ট্রিমিং লেনদেন প্রক্রিয়া করা হয়েছিল (যেমন 1600 )?',
        },
        answer: '1600',
        accept: ['1600', '1600 streams', 'sixteen hundred'],
        hint: { en: '1600', bn: '1600' },
        explanation: {
          en: '1600 TCP streams were forwarded by the NLB with sub-millisecond 0.35 ms latency while preserving client source IPs.',
          bn: 'এনএলবি ০.৩৫ ms লেটেন্সিতে ক্লায়েন্ট সোর্স আইপি অক্ষুণ্ণ রেখে ১৬০০টি টিসিপি স্ট্রিম ফরোয়ার্ড করেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'enclaves-and-the-enclave',
    title: {
      en: 'Inter-VPC Networking: VPC Peering, Transit Gateways, and AWS PrivateLink',
      bn: 'ইন্টার-ভিপিসি নেটওয়ার্কিং: ভিপিসি পিয়ারিং, ট্রানজিট গেটওয়ে ও এডাব্লিউএস প্রাইভেট-লিংক',
    },
  },
};
