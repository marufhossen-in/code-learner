import type { Lesson } from '../../../lib/types';

export const DnsCapstoneLesson: Lesson = {
  slug: 'dns-capstone',
  tech: 'dns',
  title: {
    en: 'Production DNS Architecture & Global Traffic Engineering Capstone',
    bn: 'প্রোডাকশন ডিএনএস আর্কিটেকচার এবং গ্লোবাল ট্রাফিক ইঞ্জিনিয়ারিং ক্যাপস্টোন'
  },
  summary: {
    en: 'Synthesize the complete Domain Name System stack into an enterprise-grade global traffic management architecture. Master Geolocation routing using EDNS Client Subnet, automate multi-cloud failover with synthetic health probes, configure split-horizon internal and external DNS topologies, and debug production anomalies using advanced command-line diagnostic tools like dig and nslookup.',
    bn: 'সম্পূর্ণ ডোমেন নেম সিস্টেম স্ট্যাককে একটি এন্টারপ্রাইজ মানের গ্লোবাল ট্রাফিক ম্যানেজমেন্ট আর্কিটেকচারে রূপান্তর করুন। EDNS ক্লায়েন্ট সাবনেট ব্যবহার করে জিওলোকেশন রাউটিং আয়ত্ত করুন, স্বয়ংক্রিয় সিন্থেটিক হেলথ চেক সহ মাল্টি-ক্লাউড ফেইলওভার পরিচালনা করুন, স্প্লিট-হরাইজন অভ্যন্তরীণ ও বাহ্যিক ডিএনএস টপোলজি কনফিগার করুন এবং dig ও nslookup সহ আধুনিক কমান্ড-লাইন ডায়াগনস্টিক টুলের সাহায্যে জটিল প্রোডাকশন সমস্যা সমাধান করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'global-traffic-management-dns',
      text: {
        en: 'Global Traffic Management: DNS as the Global Load Balancer',
        bn: 'গ্লোবাল ট্রাফিক ম্যানেজমেন্ট: বিশ্বজনীন লোড ব্যালেন্সার হিসেবে ডিএনএস'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In modern cloud architectures, DNS is much more than a static lookup table. When millions of global users connect to your platform, you cannot route everyone to a single data center. Intelligent authoritative nameservers function as global load balancers, dynamically inspecting client network origins and directing traffic to the healthiest regional cluster.',
        bn: 'আধুনিক ক্লাউড আর্কিটেকচারে ডিএনএস কেবল একটি সাধারণ স্ট্যাটিক ডাটাবেস নয়। যখন বিশ্বজুড়ে লাখ লাখ ব্যবহারকারী আপনার প্ল্যাটফর্মে যুক্ত হন, তখন সবাইকে একটিমাত্র ডাটা সেন্টারে পাঠানো অসম্ভব। বুদ্ধিমান অথরিটেটিভ নেমসার্ভারগুলো গ্লোবাল লোড ব্যালেন্সার হিসেবে কাজ করে, যা ব্যবহারকারীর ভৌগোলিক নেটওয়ার্ক অবস্থান বুঝে স্বয়ংক্রিয়ভাবে নিকটতম ক্লাস্টারে ট্রাফিক পরিচালিত করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Traditionally, GeoDNS suffered from a major blind spot: the authoritative nameserver only saw the IP address of the intermediate recursive resolver, not the end user. If a user in Dhaka used a recursive resolver located in the United States, GeoDNS mistakenly routed them across the Pacific Ocean! The EDNS Client Subnet extension (ECS, standardized in RFC 7871) resolved this by forwarding the client anonymized subnet (e.g. /24 prefix) inside the query payload, allowing sub-50ms geographic precision.',
        bn: 'ঐতিহ্যবাহী জিওডিএনএস একটি বড় সীমাবদ্ধতার শিকার ছিল: অথরিটেটিভ নেমসার্ভার কেবল মধ্যবর্তী রিকার্সিভ রিজলভারের আইপি দেখতে পেত, আসল ব্যবহারকারীর আইপি নয়। ঢাকার কোনো ব্যবহারকারী যদি যুক্তরাষ্ট্রে অবস্থিত কোনো পাবলিক রিজলভার ব্যবহার করত, তবে জিওডিএনএস ভুল করে তাকে প্রশান্ত মহাসাগর পাড়ি দিয়ে আমেরিকান সার্ভারে পাঠাত! EDNS ক্লায়েন্ট সাবনেট ( ECS, যা RFC 7871-এ বর্ণিত ) কোয়েরির ভেতর ব্যবহারকারীর গোপনীয়তাহীন নেটওয়ার্ক প্রিফিক্স ( যেমন /24 সাবনেট ) যুক্ত করে এই সমস্যার সমাধান করেছে, যা ৫০ মিলিসেকেন্ডেরও কম লেটেন্সির সঠিক আঞ্চলিক রাউটিং নিশ্চিত করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Enterprise GeoDNS Routing, Automated Health Probes & Split-Horizon Topology',
        bn: 'এন্টারপ্রাইজ জিওডিএনএস রাউটিং, স্বয়ংক্রিয় হেলথ চেক এবং স্প্লিট-হরাইজন টপোলজি'
      },
      svg: `<svg viewBox="0 0 840 450" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Enterprise global DNS architecture featuring GeoDNS routing, ECS subnets, synthetic health monitoring, and split horizon DNS">
  <rect width="840" height="450" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ENTERPRISE GEODNS ROUTING &amp; MULTI-CLOUD FAILOVER TOPOLOGY</text>
  
  <!-- Client In Dhaka -->
  <g transform="translate(30, 50)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="26" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">CLIENT IN DHAKA</text>
    <text x="90" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">IP: 103.205.71.88</text>
    <text x="90" y="60" fill="#10b981" font-size="9" text-anchor="middle">ECS: 103.205.71.0/24</text>
  </g>
  
  <!-- Arrow to GeoDNS -->
  <line x1="210" y1="87" x2="310" y2="87" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="310,87 300,82 300,92" fill="#38bdf8"/>
  <text x="260" y="78" fill="#38bdf8" font-size="9" text-anchor="middle">Query + ECS</text>
  
  <!-- Authoritative GeoDNS Engine -->
  <g transform="translate(310, 50)">
    <rect width="220" height="85" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="110" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">GEODNS DECISION ENGINE</text>
    <text x="110" y="42" fill="#cbd5e1" font-size="9" text-anchor="middle">Evaluates ECS: South Asia</text>
    <text x="110" y="58" fill="#cbd5e1" font-size="9" text-anchor="middle">Checks Realtime Health Probes</text>
    <text x="110" y="74" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Routes to Singapore (30ms)</text>
  </g>
  
  <!-- Target Regional Datacenters -->
  <!-- 1. Singapore DC (Primary) -->
  <g transform="translate(600, 45)">
    <rect width="210" height="70" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="105" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">SINGAPORE DC (ACTIVE)</text>
    <text x="105" y="42" fill="#cbd5e1" font-size="10" text-anchor="middle">IP: 103.205.71.50 • 30ms</text>
    <text x="105" y="58" fill="#10b981" font-size="9" text-anchor="middle">Health Check: 200 OK (Healthy)</text>
  </g>
  
  <!-- 2. Frankfurt DC (Backup Failover) -->
  <g transform="translate(600, 130)">
    <rect width="210" height="70" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
    <text x="105" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">FRANKFURT DC (STANDBY)</text>
    <text x="105" y="42" fill="#cbd5e1" font-size="10" text-anchor="middle">IP: 194.109.6.99 • 135ms</text>
    <text x="105" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Automated Failover Target</text>
  </g>
  
  <!-- Connectors from GeoDNS to DCs -->
  <line x1="530" y1="75" x2="600" y2="75" stroke="#10b981" stroke-width="2"/>
  <line x1="530" y1="105" x2="600" y2="160" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3"/>
  
  <!-- Split Horizon Section -->
  <g transform="translate(30, 220)">
    <rect width="780" height="205" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="390" y="26" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">SPLIT-HORIZON (SPLIT-BRAIN) DNS ARCHITECTURE</text>
    
    <!-- Internal Query Box -->
    <rect x="25" y="45" width="350" height="135" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="200" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">INTERNAL CLIENT (Inside Corporate VPC)</text>
    <text x="40" y="95" fill="#cbd5e1" font-size="10">Query: db.internal.example.com</text>
    <text x="40" y="118" fill="#10b981" font-size="11" font-weight="bold">Resolved: 10.0.4.15 (Private RFC 1918 IP)</text>
    <text x="40" y="142" fill="#94a3b8" font-size="9">Direct gigabit speed • Zero public internet exposure</text>
    <text x="40" y="158" fill="#38bdf8" font-size="9">Shielded from external port scans and sniffing</text>
    
    <!-- External Query Box -->
    <rect x="405" y="45" width="350" height="135" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="580" y="70" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">EXTERNAL PUBLIC CLIENT (Internet)</text>
    <text x="420" y="95" fill="#cbd5e1" font-size="10">Query: db.internal.example.com</text>
    <text x="420" y="118" fill="#ef4444" font-size="11" font-weight="bold">Resolved: NXDOMAIN or 198.51.100.2 (WAF Proxy)</text>
    <text x="420" y="142" fill="#94a3b8" font-size="9">Private network infrastructure completely invisible</text>
    <text x="420" y="158" fill="#ef4444" font-size="9">Eliminates private topology leaks across WAN</text>
  </g>
</svg>`,
      caption: {
        en: 'Enterprise DNS architectures combine ECS geographic routing, sub-30-second health check failover, and split-horizon private VPC isolation.',
        bn: 'এন্টারপ্রাইজ ডিএনএস আর্কিটেকচার ECS ভৌগোলিক রাউটিং, ৩০ সেকেন্ডেরও কম সময়ে হেলথ চেক ফেইলওভার এবং স্প্লিট-হরাইজন ভিপিসি আইসোলেশন নিশ্চিত করে।'
      },
    },
    {
      type: 'heading',
      id: 'dig-diagnostic-debugging',
      text: {
        en: 'Production Troubleshooting with the "dig" Diagnostic Utility',
        bn: '"dig" ডায়াগনস্টিক ইউটিলিটির সাহায্যে প্রোডাকশন ত্রুটি সমাধান'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The definitive diagnostic tool for DNS engineers is dig (Domain Information Groper). Unlike basic web tools that mask raw DNS responses, dig displays raw packet headers, response status codes, TTL countdowns, and authority records directly from the network wire.',
        bn: 'ডিএনএস প্রকৌশলীদের জন্য প্রধান ডায়াগনস্টিক টুল হলো dig ( Domain Information Groper )। সাধারণ ওয়েব টুলের মতো জটিলতা না লুকিয়ে dig সরাসরি নেটওয়ার্ক ওয়্যার থেকে র ডিএনএস প্যাকেট হেডার, রেসপন্স স্ট্যাটাস কোড, TTL কাউন্টডাউন এবং অথরিটি রেকর্ড প্রদর্শন করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Mastering 4 essential dig invocations is mandatory for systems engineers: "dig +trace" walks the delegation path from the 13 root servers down to your zone, instantly revealing broken nameserver delegations. "dig +dnssec" inspects RRSIG signatures and the Authenticated Data (AD) flag. "dig +subnet" tests how your GeoDNS rules respond to clients across different continents. Finally, "dig @nameserver" queries a specific server directly, bypassing intermediate recursive caches during live migrations.',
        bn: 'সিস্টেম প্রকৌশলীদের জন্য ৪ টি প্রধান dig কমান্ড আয়ত্ত করা আবশ্যক: "dig +trace" ১৩ টি রুট সার্ভার থেকে শুরু করে আপনার জোন পর্যন্ত প্রতিটি ধাপ পর্যবেক্ষণ করে তাৎক্ষণিকভাবে নেমসার্ভার ডেলিগেশনের ভুল চিহ্নিত করে। "dig +dnssec" RRSIG স্বাক্ষর ও অথেনটিকেটেড ডাটা (AD) ফ্ল্যাগ যাচাই করে। "dig +subnet" বিভিন্ন মহাদেশের ক্লায়েন্টদের ক্ষেত্রে আপনার জিওডিএনএস নিয়মগুলো পরীক্ষা করে। পরিশেষে "dig @nameserver" মধ্যবর্তী ক্যাশ এড়িয়ে সরাসরি নির্দিষ্ট কোনো নেমসার্ভারে সরাসরি কোয়েরি পাঠায়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'enterprise-geodns-router.js',
      code: `// Deterministic Enterprise GeoDNS Global Traffic Router & Health Probe Simulator
// Routes by client geographic subnet and fails over automatically during outages

class EnterpriseGeoDnsRouter {
  constructor() {
    this.ttlSeconds = 30; // Short 30s TTL for fast failover
    this.clusters = {
      'ap-south':  { city: 'Singapore', ip: '103.205.71.50', healthy: true },
      'eu-west':   { city: 'Frankfurt', ip: '194.109.6.99',  healthy: true },
      'us-east':   { city: 'Virginia',  ip: '198.51.100.10', healthy: true },
    };

    // Client subnet to region mapping
    this.subnetRoutingTable = {
      '103.205.71.0/24': 'ap-south', // Dhaka / South Asia
      '194.109.6.0/24':  'eu-west',  // Berlin / Europe
      '198.51.100.0/24': 'us-east',  // New York / Americas
    };
  }

  // Active health probe simulation
  setClusterHealth(regionKey, isHealthy) {
    if (this.clusters[regionKey]) {
      this.clusters[regionKey].healthy = isHealthy;
    }
  }

  // Resolve query with EDNS Client Subnet (ECS)
  resolve(domain, clientSubnet) {
    const preferredRegion = this.subnetRoutingTable[clientSubnet] || 'us-east';
    let targetCluster = this.clusters[preferredRegion];
    let isFailover = false;

    // Automated failover if primary cluster is unhealthy
    if (!targetCluster.healthy) {
      isFailover = true;
      // Secondary fallback cluster
      targetCluster = this.clusters['eu-west'].healthy ? this.clusters['eu-west'] : this.clusters['us-east'];
    }

    return {
      domain,
      clientSubnet,
      resolvedIp: targetCluster.ip,
      routedCity: targetCluster.city,
      ttl: this.ttlSeconds,
      isFailover,
    };
  }
}

const geoDns = new EnterpriseGeoDnsRouter();
const dhakaSubnet = '103.205.71.0/24';

console.log('=== Normal GeoDNS Resolution (All Datacenters Healthy) ===');
const query1 = geoDns.resolve('api.example.com', dhakaSubnet);
console.log('Client Subnet :', query1.clientSubnet);
console.log('Routed City   :', query1.routedCity, '(' + query1.resolvedIp + ')');
console.log('Failover Active:', query1.isFailover);

console.log('\\n=== Simulating Outage: Singapore Datacenter Fails Health Check ===');
geoDns.setClusterHealth('ap-south', false);

const query2 = geoDns.resolve('api.example.com', dhakaSubnet);
console.log('Client Subnet :', query2.clientSubnet);
console.log('Routed City   :', query2.routedCity, '(' + query2.resolvedIp + ')');
console.log('Failover Active:', query2.isFailover, '-> Traffic rerouted automatically within 30 seconds!');`,
      caption: {
        en: 'The GeoDNS simulator routes queries using ECS client subnets and executes automated failover within 30 seconds during an outage.',
        bn: 'জিওডিএনএস সিমুলেটর ECS ক্লায়েন্ট সাবনেট ব্যবহার করে কোয়েরি পাঠায় এবং দুর্যোগের সময় ৩০ সেকেন্ডের মধ্যে স্বয়ংক্রিয় ফেইলওভার নিশ্চিত করে।'
      },
    },
    {
      type: 'callout',
      kind: 'success',
      title: {
        en: 'Split-Horizon DNS: Protecting Enterprise Internal Networks',
        bn: 'স্প্লিট-হরাইজন ডিএনএস: অভ্যন্তরীণ এন্টারপ্রাইজ নেটওয়ার্কের নিরাপত্তা'
      },
      text: {
        en: 'Split-Horizon DNS configures your nameservers to return different responses based on the source IP of the query. When an employee on the corporate Wi-Fi accesses git.company.com, the nameserver returns an internal private IP (10.0.5.20), routing traffic directly over high-speed LAN without traversing the public internet. When external public users query the same name, the server returns NXDOMAIN or a protected public reverse proxy, completely hiding your internal infrastructure topology.',
        bn: 'স্প্লিট-হরাইজন ডিএনএস কোয়েরির সোর্স আইপির ওপর ভিত্তি করে ভিন্ন ভিন্ন উত্তর প্রদানের জন্য নেমসার্ভার কনফিগার করে। অফিসের ওয়াইফাইতে থাকা কোনো কর্মী যখন git.company.com অ্যাক্সেস করেন, তখন নেমসার্ভার একটি অভ্যন্তরীণ প্রাইভেট আইপি ( 10.0.5.20 ) প্রদান করে, যা সাধারণ ইন্টারনেটে না গিয়ে সরাসরি উচ্চগতির ল্যানের মাধ্যমে ট্রাফিক পাঠায়। বাইরের পাবলিক ব্যবহারকারীরা একই নাম অনুসন্ধান করলে সার্ভার NXDOMAIN বা সুরক্ষিত রিভার্স প্রক্সি রিটার্ন করে, যা আপনার ভেতরের সমস্ত গোপন নেটওয়ার্ক আর্কিটেকচার লুকিয়ে রাখে।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-cap-ex-1',
      kind: 'predict',
      question: {
        en: 'If a synthetic health probe pings an API endpoint every 10 seconds and requires 3 consecutive failures before triggering automated DNS failover, how many seconds must elapse before the unhealthy endpoint is removed? (10 * 3 = 30). Type the number.',
        bn: 'যদি একটি সিন্থেটিক হেলথ চেক প্রতি ১০ সেকেন্ড পর পর এপিআই পরীক্ষা করে এবং স্বয়ংক্রিয় ডিএনএস ফেইলওভার শুরু করার জন্য টানা ৩ বার ব্যর্থতার প্রয়োজন হয়, তবে ক্ষতিগ্রস্ত সার্ভারটি সরানোর আগে মোট কত সেকেন্ড সময় অতিক্রান্ত হবে? ( ১০ * ৩ = ৩০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '30',
      hint: {
        en: 'Multiply 10-second probe interval by 3 consecutive failure thresholds: 30 seconds.',
        bn: '১০ সেকেন্ডের ব্যবধানকে টানা ৩ বারের ব্যর্থতার সীমা দিয়ে গুণ করুন: ৩০ সেকেন্ড।'
      },
      explanation: {
        en: 'With a 10-second probe cycle and a 3-strike policy, the health checker confirms the outage and triggers failover in exactly 30 seconds.',
        bn: '১০ সেকেন্ডের ব্যবধান এবং টানা ৩ বার ব্যর্থতার নিয়মে ঠিক ৩০ সেকেন্ডের মধ্যে সার্ভার ডাউন নিশ্চিত হয়ে ফেইলওভার কার্যকর হয়।'
      },
    },
    {
      id: 'dns-cap-ex-2',
      kind: 'mcq',
      question: {
        en: 'What critical capability does the EDNS Client Subnet (ECS / RFC 7871) extension provide to authoritative GeoDNS nameservers?',
        bn: 'EDNS ক্লায়েন্ট সাবনেট ( ECS / RFC 7871 ) এক্সটেনশন অথরিটেটিভ জিওডিএনএস নেমসার্ভারকে কোন অত্যন্ত গুরুত্বপূর্ণ সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It forwards the client anonymized IP subnet prefix inside the query, enabling the nameserver to route the user to the closest regional datacenter regardless of where their recursive resolver is located',
          bn: 'এটি কোয়েরির ভেতরে ব্যবহারকারীর গোপনীয়তাহীন আইপি সাবনেট প্রিফিক্স পাঠিয়ে দেয়, যার ফলে রিকার্সিভ রিজলভার যেখানেই থাকুক না কেন সার্ভার ব্যবহারকারীকে নিকটতম ডাটা সেন্টারে পাঠাতে পারে',
        },
        {
          en: 'It permanently formats the user computer hard drive in case of copyright violations',
          bn: 'কপিরাইট লঙ্ঘনের ক্ষেত্রে এটি ব্যবহারকারীর কম্পিউটার হার্ড ড্রাইভ স্থায়ীভাবে ফরম্যাট করে দেয়',
        },
        {
          en: 'It increases the physical voltage running through computer power supply units',
          bn: 'এটি কম্পিউটারের পাওয়ার সাপ্লাই ইউনিটের ভেতর দিয়ে প্রবাহিত বৈদ্যুতিক ভোল্টেজ বৃদ্ধি করে',
        },
        {
          en: 'It translates all website text into international Morse code',
          bn: 'এটি সমস্ত ওয়েবসাইটের লেখাকে আন্তর্জাতিক মোর্স কোডে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Passing client subnet information enables accurate geographic routing despite distant resolvers.',
        bn: 'ক্লায়েন্ট সাবনেটের তথ্য দূরবর্তী রিজলভার থাকা সত্ত্বেও সঠিক ভৌগোলিক রাউটিং সম্ভব করে।',
      },
      explanation: {
        en: 'Without ECS, GeoDNS can only see the recursive resolver IP. ECS passes the client /24 subnet, enabling sub-50ms regional steering.',
        bn: 'ECS না থাকলে জিওডিএনএস কেবল রিজলভারের আইপি দেখতে পায়। ECS ক্লায়েন্টের /24 সাবনেট পাঠিয়ে সঠিক আঞ্চলিক রাউটিং নিশ্চিত করে।'
      },
    },
    {
      id: 'dns-cap-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the operational function of Split-Horizon (Split-Brain) DNS in enterprise cloud infrastructure?',
        bn: 'এন্টারপ্রাইজ ক্লাউড অবকাঠামোতে স্প্লিট-হরাইজন ( স্প্লিট-ব্রেন ) ডিএনএসের কাজের ভূমিকা কী?'
      },
      options: [
        {
          en: 'Serving different DNS answers based on whether the query originates from an internal private network (returning private LAN IPs) or the public internet (returning public IPs or NXDOMAIN)',
          bn: 'কোয়েরিটি কোনো অভ্যন্তরীণ প্রাইভেট নেটওয়ার্ক থেকে এসেছে ( প্রাইভেট ল্যান আইপি প্রদান ) নাকি সাধারণ ইন্টারনেট থেকে এসেছে ( পাবলিক আইপি বা NXDOMAIN প্রদান ) তার ওপর ভিত্তি করে ভিন্ন উত্তর দেওয়া',
        },
        {
          en: 'Splitting computer monitors into two equal horizontal display halves',
          bn: 'কম্পিউটার মনিটরকে দুটি সমান অনুভূমিক ডিসপ্লে অংশে বিভক্ত করা',
        },
        {
          en: 'Doubling the mechanical rotation speed of cooling fans inside server racks',
          bn: 'সার্ভার র‍্যাকের ভেতরের কুলিং ফ্যানের মেকানিক্যাল ঘূর্ণন গতি দ্বিগুণ করা',
        },
        {
          en: 'Dividing network bandwidth equally between desktop and mobile devices',
          bn: 'ডেস্কটপ এবং মোবাইল ডিভাইসের মাঝে নেটওয়ার্ক ব্যান্ডউইথ সমান দুই ভাগে ভাগ করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Providing distinct internal and external views of the same domain name.',
        bn: 'একই ডোমেন নামের জন্য অভ্যন্তরীণ ও বাহ্যিক নেটওয়ার্কে পৃথক দৃশ্য বা উত্তর প্রদান।',
      },
      explanation: {
        en: 'Split-Horizon DNS presents private RFC 1918 addresses to internal staff and public endpoints to the outside world, isolating sensitive topology.',
        bn: 'স্প্লিট-হরাইজন ডিএনএস অভ্যন্তরীণ কর্মীদের জন্য প্রাইভেট আইপি এবং বাইরের বিশ্বের জন্য পাবলিক আইপি সরবরাহ করে গোপনীয়তা রক্ষা করে।'
      },
    },
    {
      id: 'dns-cap-ex-4',
      kind: 'predict',
      question: {
        en: 'If a high-availability GeoDNS service sets a TTL of 30 seconds, how many seconds will client devices at most cache an IP address before re-evaluating endpoint health? (30). Type the number.',
        bn: 'যদি একটি উচ্চপ্রাপ্যতার জিওডিএনএস পরিষেবা ৩০ সেকেন্ডের TTL নির্ধারণ করে, তবে ক্লায়েন্ট ডিভাইসগুলো সর্বোচ্চ কত সেকেন্ড কোনো আইপি ক্যাশে রাখবে? ( ৩০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '30',
      hint: {
        en: 'The cache expiration matches the 30-second TTL.',
        bn: 'ক্যাশের স্থায়িত্বকাল ৩০ সেকেন্ডের TTL এর সমান।'
      },
      explanation: {
        en: 'A 30-second TTL bounds downstream caching to at most 30 seconds, guaranteeing rapid traffic failover during cloud outages.',
        bn: '৩০ সেকেন্ডের TTL ক্যাশের সর্বোচ্চ মেয়াদ ৩০ সেকেন্ডে সীমাবদ্ধ রাখে, যা সার্ভার ডাউন হলে অতি দ্রুত ট্রাফিক অন্য ক্লাস্টারে সরাতে সাহায্য করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Production DNS Architecture Capstone Quiz',
      bn: 'প্রোডাকশন ডিএনএস আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'dns-cap-qz-1',
        kind: 'mcq',
        topic: 'dig-trace-flag-purpose',
        question: {
          en: 'How does the "+trace" command-line flag in the "dig" diagnostic utility assist engineers during DNS troubleshooting?',
          bn: '"dig" ডায়াগনস্টিক ইউটিলিটিতে "+trace" কমান্ড-লাইন ফ্ল্যাগ প্রকৌশলীদের ডিএনএস সমস্যা সমাধানে কীভাবে সাহায্য করে?'
        },
        options: [
          {
            en: 'It bypasses all local recursive resolver caches and iteratively traverses the entire delegation path starting from the 13 root nameservers down to the authoritative answer, exposing broken delegations',
            bn: 'এটি সমস্ত লোকাল রিকার্সিভ ক্যাশ এড়িয়ে ১৩ টি রুট নেমসার্ভার থেকে শুরু করে অথরিটেটিভ উত্তর পর্যন্ত প্রতিটি ডেলিগেশন ধাপ সরাসরি প্রদর্শন করে ত্রুটি শনাক্ত করে',
          },
          {
            en: 'It traces the physical location of the computer keyboard using GPS coordinates',
            bn: 'এটি জিপিএস কোঅর্ডিনেট ব্যবহার করে কম্পিউটার কিবোর্ডের শারীরিক অবস্থান শনাক্ত করে',
          },
          {
            en: 'It measures the electrical resistance of the ethernet copper wires',
            bn: 'এটি ইথারনেট তামার তারের বৈদ্যুতিক রোধ পরিমাপ করে',
          },
          {
            en: 'It plays an audio recording of the domain name pronunciation through the speakers',
            bn: 'এটি স্পিকারের মাধ্যমে ডোমেন নামের সঠিক উচ্চারণের অডিও বাজায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Iterative root-to-leaf traversal displaying every referral step.',
          bn: 'রুট থেকে শুরু করে প্রতিটি রেফারাল ধাপ সরাসরি প্রদর্শনকারী ইটারেটিভ ট্রাভার্সাল।',
        },
        explanation: {
          en: 'By querying root, TLD, and authoritative servers step-by-step, "dig +trace" isolates exactly which server in the delegation chain is failing or misconfigured.',
          bn: '"dig +trace" ধাপে ধাপে রুট, TLD এবং অথরিটেটিভ সার্ভারে কোয়েরি চালিয়ে স্পষ্ট দেখিয়ে দেয় ডেলিগেশন চেইনের কোন সার্ভারে সমস্যা হচ্ছে।'
        },
      },
      {
        id: 'dns-cap-qz-2',
        kind: 'mcq',
        topic: 'ecs-absence-geodns-failure',
        question: {
          en: 'What routing failure occurs in Geolocation DNS when the recursive resolver does NOT support EDNS Client Subnet (ECS)?',
          bn: 'রিকার্সিভ রিজলভার যদি EDNS ক্লায়েন্ট সাবনেট (ECS) সমর্থন না করে, তবে জিওলোকেশন ডিএনএসে কোন রাউটিং ত্রুটি ঘটে?'
        },
        options: [
          {
            en: 'The authoritative nameserver routes traffic based on the geographic location of the recursive resolver rather than the actual user, causing severe cross-continental latency for users with distant resolvers',
            bn: 'অথরিটেটিভ নেমসার্ভার আসল ব্যবহারকারীর বদলে রিকার্সিভ রিজলভারের ভৌগোলিক অবস্থানের ওপর ভিত্তি করে ট্রাফিক পাঠায়, যা দূরবর্তী রিজলভার ব্যবহারকারীদের ক্ষেত্রে মাত্রাতিরিক্ত লেটেন্সি তৈরি করে',
          },
          {
            en: 'The client computer screen freezes permanently until rebooted',
            bn: 'কম্পিউটার রিবুট না করা পর্যন্ত ক্লায়েন্টের মনিটর স্ক্রিন স্থায়ীভাবে আটকে থাকে',
          },
          {
            en: 'All internet web browsers automatically unregister domain names',
            bn: 'সমস্ত ইন্টারনেট ওয়েব ব্রাউজার স্বয়ংক্রিয়ভাবে ডোমেন নাম বাতিল করে দেয়',
          },
          {
            en: 'The Wi-Fi router deletes its internal firmware operating system',
            bn: 'ওয়াইফাই রাউটার তার অভ্যন্তরীণ ফার্মওয়্যার অপারেটিং সিস্টেম মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Routing based on resolver location instead of actual user location.',
          bn: 'আসল ব্যবহারকারীর বদলে রিজলভারের অবস্থানের ওপর ভিত্তি করে ভুল রাউটিং।',
        },
        explanation: {
          en: 'Without ECS, nameservers only see the resolver source IP. If a user in London uses a resolver in Australia, they will be routed to an Australian data center.',
          bn: 'ECS না থাকলে নেমসার্ভার কেবল রিজলভারের আইপি দেখতে পায়। লন্ডনের ব্যবহারকারী অস্ট্রেলিয়ার রিজলভার ব্যবহার করলে তাকে ভুল করে অস্ট্রেলিয়ার সার্ভারে পাঠিয়ে দেওয়া হবে।'
        },
      },
      {
        id: 'dns-cap-qz-3',
        kind: 'mcq',
        topic: 'dns-global-failover-mechanism',
        question: {
          en: 'How does DNS-based global load balancing execute zero-downtime traffic failover when a primary regional datacenter experiences an outage?',
          bn: 'একটি প্রধান আঞ্চলিক ডাটা সেন্টার অচল হয়ে পড়লে ডিএনএস-ভিত্তিক গ্লোবাল লোড ব্যালেন্সিং কীভাবে জিরো-ডাউনটাইম ট্রাফিক ফেইলওভার সম্পন্ন করে?'
        },
        options: [
          {
            en: 'Synthetic health monitors detect failing HTTP probes and automatically alter authoritative DNS records to return the standby datacenter IP, which clients adopt within a low 30-second TTL window',
            bn: 'সিন্থেটিক হেলথ মনিটর এইচটিটিপি ব্যর্থতা শনাক্ত করে স্বয়ংক্রিয়ভাবে অথরিটেটিভ ডিএনএস রেকর্ডে বিকল্প ডাটা সেন্টারের আইপি বসিয়ে দেয়, যা কম ৩০-সেকেন্ড TTL-এর কারণে ক্লায়েন্টরা দ্রুত গ্রহণ করে',
          },
          {
            en: 'By physically moving server racks across international borders via cargo airplanes',
            bn: 'পণ্যবাহী বিমানে করে সার্ভার র‍্যাক এক দেশ থেকে অন্য দেশে শারীরিকভাবে স্থানান্তর করে',
          },
          {
            en: 'By cutting off electrical power to all customer smartphones simultaneously',
            bn: 'একযোগে সমস্ত গ্রাহকের স্মার্টফোনের বৈদ্যুতিক সংযোগ বিচ্ছিন্ন করে দিয়ে',
          },
          {
            en: 'By sending paper letters to every user requesting them to type a new IP address',
            bn: 'চিঠির মাধ্যমে প্রতিটি ব্যবহারকারীকে নতুন আইপি টাইপ করার অনুরোধ পাঠিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Health checks update authoritative DNS records paired with short TTL countdowns.',
          bn: 'হেলথ চেক স্বয়ংক্রিয়ভাবে রেকর্ড পরিবর্তন করে যা ছোট TTL-এর কারণে দ্রুত কার্যকর হয়।',
        },
        explanation: {
          en: 'When health probes fail, authoritative DNS dynamically replaces the unhealthy IP with a healthy standby IP. With a 30s TTL, global traffic migrates almost instantly.',
          bn: 'হেলথ চেক ব্যর্থ হলে ডিএনএস সার্ভার স্বয়ংক্রিয়ভাবে সচল সার্ভারের আইপি প্রদান করে। ৩০ সেকেন্ডের ছোট TTL-এর ফলে বিশ্বব্যাপী ট্রাফিক পলকের মধ্যে সরে যায়।'
        },
      },
      {
        id: 'dns-cap-qz-4',
        kind: 'mcq',
        topic: 'dnssec-authenticated-data-ad-flag',
        question: {
          en: 'What specific flag in a DNS response header indicates that the returned records have been cryptographically validated by DNSSEC against an authenticated chain of trust?',
          bn: 'ডিএনএস রেসপন্স হেডারের কোন সুনির্দিষ্ট ফ্ল্যাগটি নির্দেশ করে যে ফেরত আসা রেকর্ডগুলো একটি বিশ্বস্ত চেইনের বিপরীতে DNSSEC দ্বারা ক্রিপ্টোগ্রাফিকভাবে যাচাই করা হয়েছে?'
        },
        options: [
          {
            en: 'The Authenticated Data (AD) flag',
            bn: 'অথেনটিকেটেড ডাটা ( AD ) ফ্ল্যাগ',
          },
          {
            en: 'The Recursive Available (RA) flag',
            bn: 'রিকার্সিভ অ্যাভেইলেবল ( RA ) ফ্ল্যাগ',
          },
          {
            en: 'The Truncation (TC) flag',
            bn: 'ট্রাংকেশন ( TC ) ফ্ল্যাগ',
          },
          {
            en: 'The Authoritative Answer (AA) flag',
            bn: 'অথরিটেটিভ অ্যান্সার ( AA ) ফ্ল্যাগ',
          },
        ],
        answer: 0,
        hint: {
          en: 'AD stands for Authenticated Data in DNSSEC responses.',
          bn: 'DNSSEC রেসপন্সে AD হলো Authenticated Data এর সংক্ষিপ্ত রূপ।',
        },
        explanation: {
          en: 'When a security-aware recursive resolver validates the complete cryptographic chain of trust (RRSIG, DNSKEY, DS), it sets the AD (Authenticated Data) bit to 1 in the response header.',
          bn: 'নিরাপত্তা-সচেতন রিকার্সিভ রিজলভার যখন সম্পূর্ণ ক্রিপ্টোগ্রাফিক ট্রাস্ট চেইন সফলভাবে যাচাই করে, তখন এটি রেসপন্স হেডারে AD ( Authenticated Data ) বিটের মান 1 সেট করে দেয়।'
        },
      },
    ],
  },
};
