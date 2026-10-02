import type { Lesson } from '../../../lib/types';

export const DnsServersLesson: Lesson = {
  slug: 'dns-servers',
  tech: 'dns',
  title: {
    en: 'DNS Server Architectures: Authoritative, Recursive & Anycast BGP',
    bn: 'ডিএনএস সার্ভার আর্কিটেকচার: অথরিটেটিভ, রিকার্সিভ এবং এনিকাস্ট BGP'
  },
  summary: {
    en: 'Explore the server infrastructure powering global domain resolution. Understand Primary Master and Secondary Slave replication via AXFR and IXFR over TCP. Analyze server daemon implementations including BIND 9, Unbound, PowerDNS, and CoreDNS. Master BGP Anycast routing, which maps 13 logical root server IP identities to over 1500 physical server nodes worldwide for low latency and DDoS absorption.',
    bn: 'বৈশ্বিক ডোমেন রেজোলিউশন পরিচালনাকারী সার্ভার অবকাঠামো অনুসন্ধান করুন। TCP এর মাধ্যমে AXFR এবং IXFR ব্যবহার করে প্রাইমারি মাস্টার ও সেকেন্ডারি স্লেভ রেপ্লিকেশন বুঝুন। BIND 9, Unbound, PowerDNS এবং CoreDNS সহ প্রধান সার্ভার ডিমনগুলো বিশ্লেষণ করুন। BGP এনিকাস্ট রাউটিং আয়ত্ত করুন, যা মাত্র ১৩ টি লজিক্যাল রুট সার্ভার আইপিকে বিশ্বজুড়ে ১৫০০ টিরও বেশি ফিজিক্যাল সার্ভার নোডে বিস্তৃত করে নিম্ন লেটেন্সি ও ডিডস প্রতিরোধ নিশ্চিত করে।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'server-topologies-authoritative-vs-recursive',
      text: {
        en: 'Server Topologies: Authoritative versus Recursive Roles',
        bn: 'সার্ভার টপোলজি: অথরিটেটিভ বনাম রিকার্সিভ ভূমিকা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy enterprise web applications, you encounter two distinct types of DNS servers: Authoritative Nameservers and Recursive Resolvers. Confusing these two architectures is one of the most common mistakes in systems engineering, as each serves a completely different role in network topology.',
        bn: 'আপনি যখন এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন পরিচালনা করেন, তখন আপনি মূলত ২ ধরনের ডিএনএস সার্ভারের মুখোমুখি হন: অথরিটেটিভ নেমসার্ভার এবং রিকার্সিভ রিজলভার। সিস্টেম ইঞ্জিনিয়ারিংয়ে এই দুটি আর্কিটেকচারকে গুলিয়ে ফেলা ১ টি অত্যন্ত সাধারণ ভুল, কারণ নেটওয়ার্ক টপোলজিতে এদের প্রত্যেকের কাজের ভূমিকা সম্পূর্ণ আলাদা।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Authoritative Nameservers hold the definitive source-of-truth records for a domain zone (such as example.com). They respond only to queries concerning their assigned domains, returning direct answers or referral delegations. In contrast, Recursive Resolvers (such as Cloudflare 1.1.1.1 or Google 8.8.8.8) receive queries from end-user stub clients, traverse the global internet naming hierarchy, and cache the responses.',
        bn: 'অথরিটেটিভ নেমসার্ভার কোনো ডোমেন জোনের ( যেমন example.com ) চূড়ান্ত সত্য রেকর্ডগুলো ধারণ করে। এরা কেবল তাদের জন্য নির্ধারিত ডোমেনের অনুরোধেই সাড়া দেয় এবং সরাসরি উত্তর বা রেফারাল প্রদান করে। অন্যদিকে রিকার্সিভ রিজলভারগুলো ( যেমন ক্লাউডফ্লেয়ার ১.১.১.১ বা গুগল ৮.৮.৮.৮ ) ব্যবহারকারীদের স্টাব ক্লায়েন্ট থেকে কোয়েরি গ্রহণ করে, ইন্টারনেটের বিভিন্ন স্তরে ঘুরে সঠিক উত্তর সংগ্রহ করে এবং ক্যাশে জমা রাখে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Primary Master & Secondary Slave Architecture',
            bn: '১. প্রাইমারি মাস্টার এবং সেকেন্ডারি স্লেভ আর্কিটেকচার'
          },
          text: {
            en: 'To eliminate single points of failure, zones deploy at least 2 authoritative nameservers. The Primary Master holds the editable zone file. Secondary Slaves replicate records over TCP port 53 using Authoritative Zone Transfers: full transfers via AXFR or incremental diffs via IXFR.',
            bn: 'সিঙ্গেল পয়েন্ট অব ফেইলিউর এড়াতে প্রতিটি জোনে কমপক্ষে ২ টি অথরিটেটিভ নেমসার্ভার থাকে। প্রাইমারি মাস্টার মূল সম্পাদনাযোগ্য জোন ফাইল সংরক্ষণ করে। সেকেন্ডারি স্লেভ সার্ভারগুলো TCP পোর্ট ৫৩ এর মাধ্যমে অথরিটেটিভ জোন ট্রান্সফার সম্পন্ন করে: AXFR দিয়ে সম্পূর্ণ জোন অথবা IXFR দিয়ে বর্ধিত পরিবর্তন কপি করে।'
          },
        },
        {
          title: {
            en: '2. BIND 9 (Berkeley Internet Name Domain)',
            bn: '২. BIND 9 ( বার্কলে ইন্টারনেট নেম ডোমেন )'
          },
          text: {
            en: 'Developed at UC Berkeley in the 1980s, BIND 9 is the reference software implementation of the DNS protocol. It supports authoritative zones, recursive caching, DNSSEC validation, and response rate limiting (RRL).',
            bn: '১৯৮০-এর দশকে ইউসি বার্কলেতে তৈরি BIND 9 হলো ডিএনএস প্রোটোকলের ঐতিহাসিক রেফারেন্স সফটওয়্যার। এটি অথরিটেটিভ জোন, রিকার্সিভ ক্যাশিং, DNSSEC যাচাইকরণ এবং রেসপন্স রেট লিমিটিং (RRL) সমর্থন করে।'
          },
        },
        {
          title: {
            en: '3. CoreDNS & Cloud-Native Service Discovery',
            bn: '৩. CoreDNS এবং ক্লাউড-নেটিভ সার্ভিস ডিসকভারি'
          },
          text: {
            en: 'Written in Go, CoreDNS is the default cluster DNS daemon in Kubernetes. It uses a lightweight plugin chain to dynamically resolve Kubernetes pod service names (such as service.namespace.svc.cluster.local) into internal pod IP addresses.',
            bn: 'গো ভাষায় লিখিত CoreDNS হলো কুবারনেটিসের ডিফল্ট ক্লাস্টার ডিএনএস ডিমন। এটি প্লাগইন চেইনের সাহায্যে কুবারনেটিস পড সার্ভিসের নামকে ( যেমন service.namespace.svc.cluster.local ) তাৎক্ষণিকভাবে অভ্যন্তরীণ আইপিতে রূপান্তর করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Unicast versus BGP Anycast Routing & Root Server Topology',
        bn: 'ইউনিকাস্ট বনাম BGP এনিকাস্ট রাউটিং এবং রুট সার্ভার টপোলজি'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Comparison between Unicast routing and BGP Anycast routing across multiple continents">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">UNICAST VS BGP ANYCAST ARCHITECTURE (13 ROOT SERVERS)</text>
  
  <!-- Left Side: Unicast Architecture -->
  <g transform="translate(40, 50)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="180" y="28" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">TRADITIONAL UNICAST ROUTING</text>
    <text x="180" y="46" fill="#94a3b8" font-size="10" text-anchor="middle">1 IP Address = Exactly 1 Physical Server</text>
    
    <!-- Single Server in NY -->
    <rect x="110" y="70" width="140" height="65" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="180" y="95" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">New York Server</text>
    <text x="180" y="115" fill="#cbd5e1" font-size="10" text-anchor="middle">IP: 198.41.0.4</text>
    
    <!-- Clients Routing -->
    <rect x="25" y="170" width="310" height="45" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="40" y="192" fill="#cbd5e1" font-size="10">London Client -> NY Server (80ms Latency)</text>
    <text x="40" y="206" fill="#94a3b8" font-size="9">Cross-Atlantic Fiber Route</text>
    
    <rect x="25" y="225" width="310" height="45" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="40" y="247" fill="#ef4444" font-size="10">Dhaka Client -> NY Server (220ms Latency!)</text>
    <text x="40" y="261" fill="#94a3b8" font-size="9">Severe geographic delay</text>
    
    <rect x="25" y="280" width="310" height="45" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="180" y="302" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">DDoS Vulnerability: Single Point of Failure</text>
    <text x="180" y="316" fill="#cbd5e1" font-size="9" text-anchor="middle">Traffic concentrated on 1 physical datacenter</text>
  </g>
  
  <!-- Right Side: Anycast Architecture -->
  <g transform="translate(440, 50)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="180" y="28" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">BGP ANYCAST ROUTING</text>
    <text x="180" y="46" fill="#94a3b8" font-size="10" text-anchor="middle">1 IP Address = Hundreds of Edge Nodes Globally</text>
    
    <!-- 3 Edge Servers -->
    <g transform="translate(15, 65)">
      <rect x="0" y="0" width="100" height="60" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="50" y="24" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Node: London</text>
      <text x="50" y="44" fill="#38bdf8" font-size="9" text-anchor="middle">IP: 198.41.0.4</text>
      
      <rect x="115" y="0" width="100" height="60" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="165" y="24" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Node: Tokyo</text>
      <text x="165" y="44" fill="#38bdf8" font-size="9" text-anchor="middle">IP: 198.41.0.4</text>
      
      <rect x="230" y="0" width="100" height="60" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="280" y="24" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Node: Dhaka</text>
      <text x="280" y="44" fill="#38bdf8" font-size="9" text-anchor="middle">IP: 198.41.0.4</text>
    </g>
    
    <!-- Anycast Routing Outcomes -->
    <rect x="25" y="145" width="310" height="45" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="40" y="167" fill="#10b981" font-size="10">London Client -> Local London Node (4ms)</text>
    <text x="40" y="181" fill="#cbd5e1" font-size="9">Internet BGP routes to shortest hop path</text>
    
    <rect x="25" y="200" width="310" height="45" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="40" y="222" fill="#10b981" font-size="10">Dhaka Client -> Local Dhaka Node (6ms)</text>
    <text x="40" y="236" fill="#cbd5e1" font-size="9">Zero trans-oceanic latency delay!</text>
    
    <!-- Anycast DDoS Absorption -->
    <rect x="25" y="255" width="310" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="180" y="278" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Massive DDoS Traffic Absorption</text>
    <text x="180" y="296" fill="#cbd5e1" font-size="9" text-anchor="middle">Attack volume is dispersed across 1500+ nodes</text>
    <text x="180" y="312" fill="#94a3b8" font-size="9" text-anchor="middle">Global network stays resilient and operational</text>
  </g>
</svg>`,
      caption: {
        en: 'Unicast concentrates traffic on one server; BGP Anycast announces 1 IP address across hundreds of edge nodes, delivering sub-10ms response times.',
        bn: 'ইউনিকাস্ট একটি সার্ভারে সমস্ত ট্রাফিক পাঠায়; BGP এনিকাস্ট ১ টি আইপি ঠিকানাকে শত শত এজ নোডে ছড়িয়ে দিয়ে ১০ মিলিসেকেন্ডেরও কম সময়ে সেবা দেয়।'
      },
    },
    {
      type: 'heading',
      id: 'bgp-anycast-root-servers',
      text: {
        en: 'BGP Anycast Routing & The 13 Logical DNS Root Servers',
        bn: 'BGP এনিকাস্ট রাউটিং এবং ১৩ টি লজিক্যাল ডিএনএস রুট সার্ভার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A foundational mystery of the internet is why there are only 13 logical root server IP addresses (named a.root-servers.net through m.root-servers.net). The answer stems from the legacy 512-byte UDP packet limit: in an unextended DNS query response, 13 server names, IPv4 addresses, and header flags fit snugly inside 512 bytes. Adding a 14th address would cause packet truncation and force lookups to fail over to TCP.',
        bn: 'ইন্টারনেটের একটি মৌলিক প্রশ্ন হলো কেন রুট সার্ভারের লজিক্যাল আইপি ঠিকানা মাত্র ১৩ টি ( a.root-servers.net থেকে m.root-servers.net নামে পরিচিত )। এর উত্তর নিহিত আছে প্রাচীন ৫১২ বাইটের UDP প্যাকেট সীমার মাঝে: একটি সাধারণ ডিএনএস রেসপন্সে ১৩ টি সার্ভারের নাম, IPv4 ঠিকানা এবং হেডার ফ্ল্যাগ ঠিক ৫১২ বাইটের মধ্যে এঁটে যায়। ১৪তম কোনো ঠিকানা যোগ করলে প্যাকেট ট্রাংকেটেড হয়ে যেত এবং বাধ্য হয়ে TCP-তে যেতে হতো।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To scale beyond 13 physical computers, network engineers adopted BGP Anycast routing. Under Anycast, routers in over 1500 independent data centers around the globe announce identical IP addresses for the 13 root server identities. When a recursive resolver in Tokyo, London, or Dhaka sends a query to 198.41.0.4 (a.root-servers.net), internet routing protocols steer the packet to the nearest physical datacenter in that region, delivering sub-10ms latency.',
        bn: '১৩ টি সাধারণ কম্পিউটারের সীমাবদ্ধতা কাটিয়ে উঠতে নেটওয়ার্ক প্রকৌশলীরা BGP এনিকাস্ট রাউটিং গ্রহণ করেন। এনিকাস্টের মাধ্যমে বিশ্বব্যাপী ১৫০০ টিরও বেশি স্বাধীন ডাটা সেন্টারের রাউটারগুলো এই ১৩ টি রুট সার্ভার আইপি সমান্তরালভাবে প্রচার করে। টোকিও, লন্ডন বা ঢাকার কোনো রিকার্সিভ রিজলভার যখন 198.41.0.4 ( a.root-servers.net ) ঠিকানায় কোয়েরি পাঠায়, তখন ইন্টারনেট রাউটিং প্রোটোকল স্বয়ংক্রিয়ভাবে প্যাকেটটিকে ওই অঞ্চলের নিকটতম ডাটা সেন্টারে পৌঁছে দেয়, যা ১০ মিলিসেকেন্ডেরও কম লেটেন্সি নিশ্চিত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'anycast-router-sim.js',
      code: `// Deterministic Simulation of BGP Anycast DNS Routing
// Routes global client queries to the topologically closest Anycast edge node

class AnycastNetwork {
  constructor(ipAddress) {
    this.anycastIp = ipAddress;
    // Edge nodes distributed across 3 global regions
    this.edgeNodes = [
      { city: 'Singapore', region: 'Asia-Pacific', latencies: { 'Dhaka': 35, 'Tokyo': 65, 'Berlin': 160 } },
      { city: 'Frankfurt', region: 'Europe',       latencies: { 'Dhaka': 130, 'Tokyo': 190, 'Berlin': 8 } },
      { city: 'New York',  region: 'Americas',     latencies: { 'Dhaka': 210, 'Tokyo': 170, 'Berlin': 85 } },
    ];
  }

  // Simulates BGP shortest-path routing
  routeQuery(clientCity) {
    let closestNode = null;
    let lowestLatency = Infinity;

    for (const node of this.edgeNodes) {
      const latency = node.latencies[clientCity];
      if (latency !== undefined && latency < lowestLatency) {
        lowestLatency = latency;
        closestNode = node;
      }
    }

    return {
      client: clientCity,
      queriedAnycastIp: this.anycastIp,
      routedToCity: closestNode.city,
      region: closestNode.region,
      latencyMs: lowestLatency,
    };
  }
}

// Test Anycast routing from 3 global clients
const rootServerA = new AnycastNetwork('198.41.0.4'); // a.root-servers.net

console.log('=== BGP Anycast DNS Query Routing ===');
const clients = ['Dhaka', 'Berlin', 'Tokyo'];

for (const client of clients) {
  const result = rootServerA.routeQuery(client);
  console.log('Client: ' + result.client.padEnd(8) +
              ' -> Anycast IP ' + result.queriedAnycastIp +
              ' -> Routed to: ' + result.routedToCity.padEnd(10) +
              ' (' + result.latencyMs + ' ms)');
}

console.log('\\nBenefit: All clients query the exact same IP, but receive localized low-latency responses!');`,
      caption: {
        en: 'The simulation shows BGP Anycast routing clients in Dhaka, Berlin, and Tokyo to their closest regional nodes on a shared IP.',
        bn: 'সিমুলেশনটি দেখায় কীভাবে BGP এনিকাস্ট একই আইপিতে ঢাকা, বার্লিন ও টোকিওর ক্লায়েন্টদের তাদের নিকটতম নোডে পাঠায়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The Danger of Open Recursive Resolvers',
        bn: 'ওপেন রিকার্সিভ রিজলভারের মারাত্মক ঝুঁকি'
      },
      text: {
        en: 'Never configure an authoritative nameserver to answer recursive queries from the public internet. An Open Recursive Resolver allows attackers to spoof victim IP addresses and send small 60-byte queries that trigger massive 3000-byte DNSSEC responses (a 50x amplification attack). These DNS Amplification DDoS floods weaponize misconfigured servers against third-party targets. Always restrict recursion to trusted internal IP ranges using Access Control Lists.',
        bn: 'পাবলিক ইন্টারনেটের জন্য আপনার অথরিটেটিভ নেমসার্ভারে কখনো ওপেন রিকার্সিভ কোয়েরি চালু রাখবেন না। একটি ওপেন রিকার্সিভ রিজলভার থাকলে আক্রমণকারীরা ভুক্তভোগীর ভুয়া আইপি ব্যবহার করে ছোট ৬০ বাইটের অনুরোধ পাঠিয়ে বিশাল ৩০০০ বাইটের উত্তর তৈরি করে ( ৫০ গুণ বিবর্ধন আক্রমণ )। এই ডিএনএস অ্যামপ্লিফিকেশন ডিডস আক্রমণগুলো ভুল কনফিগার করা সার্ভারকে সাইবার যুদ্ধের হাতিয়ারে পরিণত করে। সর্বদা অ্যাক্সেস কন্ট্রোল লিস্টের মাধ্যমে অভ্যন্তরীণ নেটওয়ার্কেই রিকার্সন সীমাবদ্ধ রাখুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-srv-ex-1',
      kind: 'predict',
      question: {
        en: 'How many unique logical root nameserver identities exist in the global Domain Name System architecture (labeled letters a through m)? (13). Type the number.',
        bn: 'গ্লোবাল ডোমেন নেম সিস্টেম আর্কিটেকচারে কয়টি অনন্য লজিক্যাল রুট নেমসার্ভার পরিচয় বিদ্যমান থাকে ( ইংরেজি বর্ণ a থেকে m পর্যন্ত চিহ্নিত )? ( ১৩ টি )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '13',
      hint: {
        en: 'Count letters a through m: exactly 13 logical root server identities.',
        bn: 'ইংরেজি বর্ণমালা a থেকে m পর্যন্ত গণনা করুন: ঠিক ১৩ টি লজিক্যাল রুট সার্ভার পরিচয়।'
      },
      explanation: {
        en: 'There are 13 logical root nameservers (a.root-servers.net to m.root-servers.net), constrained by the legacy 512-byte UDP packet size limit.',
        bn: 'প্রাচীন ৫১২ বাইটের UDP প্যাকেট আকারের সীমাবদ্ধতার কারণে ঠিক ১৩ টি লজিক্যাল রুট নেমসার্ভার ( a.root-servers.net থেকে m.root-servers.net ) রয়েছে।'
      },
    },
    {
      id: 'dns-srv-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which routing architecture enables a single IP address to be announced simultaneously from hundreds of global data centers, routing users to the nearest physical node?',
        bn: 'কোন রাউটিং আর্কিটেকচারের সাহায্যে একটি একক আইপি ঠিকানাকে বিশ্বজুড়ে শত শত ডাটা সেন্টার থেকে একসাথে প্রচার করে ব্যবহারকারীকে নিকটতম নোডে পাঠানো হয়?'
      },
      options: [
        {
          en: 'BGP Anycast routing',
          bn: 'BGP এনিকাস্ট ( Anycast ) রাউটিং',
        },
        {
          en: 'Point-to-Point Dialup Protocol',
          bn: 'পয়েন্ট-টু-পয়েন্ট ডায়ালআপ প্রোটোকল',
        },
        {
          en: 'Unicast Static Addressing',
          bn: 'ইউনিকাস্ট স্ট্যাটিক অ্যাড্রেসিং',
        },
        {
          en: 'Bluetooth Low Energy Pairing',
          bn: 'ব্লুটুথ লো এনার্জি পেয়ারিং',
        },
      ],
      answer: 0,
      hint: {
        en: 'Border Gateway Protocol (BGP) Anycast delivers packets to the topologically closest node.',
        bn: 'বর্ডার গেটওয়ে প্রোটোকল (BGP) এনিকাস্ট প্যাকেটকে সবচেয়ে কাছের নোডে পৌঁছে দেয়।',
      },
      explanation: {
        en: 'BGP Anycast allows multiple geographically dispersed servers to share one IP. Upstream internet routers automatically steer traffic along the shortest network path.',
        bn: 'BGP এনিকাস্ট একাধিক ভৌগোলিক সার্ভারকে একই আইপি শেয়ার করার সুযোগ দেয় এবং ইন্টারনেট রাউটার স্বয়ংক্রিয়ভাবে সংক্ষিপ্ততম পথে ট্রাফিক পাঠায়।'
      },
    },
    {
      id: 'dns-srv-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which transport protocol and port number are utilized for authoritative master-to-secondary DNS zone transfers (AXFR)?',
        bn: 'অথরিটেটিভ মাস্টার থেকে সেকেন্ডারি সার্ভারে সম্পূর্ণ ডিএনএস জোন ট্রান্সফারের (AXFR) জন্য কোন ট্রান্সপোর্ট প্রোটোকল ও পোর্ট ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'TCP port 53',
          bn: 'TCP পোর্ট ৫৩',
        },
        {
          en: 'UDP port 67',
          bn: 'UDP পোর্ট ৬৭',
        },
        {
          en: 'HTTP port 80',
          bn: 'HTTP পোর্ট ৮০',
        },
        {
          en: 'FTP port 21',
          bn: 'FTP পোর্ট ২১',
        },
      ],
      answer: 0,
      hint: {
        en: 'Zone transfers require reliable stream delivery, which uses TCP port 53.',
        bn: 'জোন ট্রান্সফারের জন্য নির্ভরযোগ্য স্ট্রিম ট্রান্সপোর্টের প্রয়োজন হয়, যা TCP পোর্ট ৫৩ ব্যবহার করে।',
      },
      explanation: {
        en: 'Zone transfers (AXFR and IXFR) transmit large quantities of records reliably over connection-oriented TCP port 53.',
        bn: 'জোন ট্রান্সফার ( AXFR এবং IXFR ) প্রচুর পরিমাণ রেকর্ড নির্ভরযোগ্যভাবে আদান-প্রদান করতে কানেকশন-ওরিয়েন্টেড TCP পোর্ট ৫৩ ব্যবহার করে।'
      },
    },
    {
      id: 'dns-srv-ex-4',
      kind: 'predict',
      question: {
        en: 'If a primary master nameserver uses AXFR to perform a full replication of a zone containing 50 resource records to a secondary server, how many records are transferred in total? (50). Type the number.',
        bn: 'যদি একটি প্রাইমারি মাস্টার নেমসার্ভার AXFR ব্যবহার করে ৫০ টি রিসোর্স রেকর্ড সম্বলিত একটি সম্পূর্ণ জোন সেকেন্ডারি সার্ভারে রেপ্লিকেট করে, তবে মোট কতটি রেকর্ড স্থানান্তরিত হয়? ( ৫০ টি )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '50',
      hint: {
        en: 'A full AXFR transfer replicates every record in the zone: 50 records.',
        bn: 'একটি সম্পূর্ণ AXFR ট্রান্সফার জোনের প্রতিটি রেকর্ড কপি করে: ৫০ টি রেকর্ড।'
      },
      explanation: {
        en: 'AXFR (Authoritative Zone Transfer) is a complete full replication of all 50 resource records in the zone file.',
        bn: 'AXFR হলো সম্পূর্ণ জোন রেপ্লিকেশন যা জোন ফাইলের সমস্ত ৫০ টি রিসোর্স রেকর্ড একযোগে স্থানান্তর করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'DNS Server Architectures Quiz',
      bn: 'ডিএনএস সার্ভার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'dns-srv-qz-1',
        kind: 'mcq',
        topic: 'open-recursive-resolver-amplification-danger',
        question: {
          en: 'Why is running an "Open Recursive Resolver" accessible to the public internet considered a dangerous security hazard?',
          bn: 'পাবলিক ইন্টারনেটে উন্মুক্ত একটি "ওপেন রিকার্সিভ রিজলভার" চালানোকে কেন মারাত্মক নিরাপত্তা ঝুঁকি হিসেবে বিবেচনা করা হয়?'
        },
        options: [
          {
            en: 'Attackers can spoof victim IP addresses and send small UDP queries that trigger massive DNSSEC responses, generating devastating DDoS reflection amplification attacks',
            bn: 'আক্রমণকারীরা ভুক্তভোগীর আইপি জাল করে ছোট UDP কোয়েরি পাঠিয়ে বিশাল ডিএনএস রেসপন্স তৈরি করতে পারে, যা মারাত্মক ডিডস অ্যামপ্লিফিকেশন হামলা ঘটায়',
          },
          {
            en: 'It causes computer cooling fans to consume twice as much electricity',
            bn: 'এর ফলে কম্পিউটার কুলিং ফ্যান দ্বিগুণ বিদ্যুৎ খরচ করতে শুরু করে',
          },
          {
            en: 'Because open resolvers permanently delete all email messages sent over the web',
            bn: 'কারণ উন্মুক্ত রিজলভারগুলো ওয়েবের সমস্ত পাঠানো ইমেইল বার্তা স্থায়ীভাবে মুছে ফেলে',
          },
          {
            en: 'It forces server hard drives to switch from binary to decimal numbers',
            bn: 'এটি সার্ভারের হার্ড ড্রাইভকে বাইনারি থেকে দশমিকে রূপান্তর করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'DNS amplification attacks exploit open resolvers to overwhelm third-party targets.',
          bn: 'ডিএনএস অ্যামপ্লিফিকেশন আক্রমণগুলো উন্মুক্ত রিজলভারের সুযোগ নিয়ে তৃতীয় পক্ষকে বিপর্যস্ত করে।',
        },
        explanation: {
          en: 'Open recursive resolvers allow attackers to amplify attack traffic by up to 50 times using spoofed UDP source addresses, bombarding victims with unrequested data.',
          bn: 'ওপেন রিকার্সিভ রিজলভার আক্রমণকারীদের ভুয়া UDP আইপি ব্যবহার করে ৫০ গুণ পর্যন্ত ট্রাফিক বিবর্ধন করার সুযোগ দেয়, যা ভুক্তভোগীর সার্ভার ডাউন করে দেয়।'
        },
      },
      {
        id: 'dns-srv-qz-2',
        kind: 'mcq',
        topic: 'bgp-anycast-ddos-resilience',
        question: {
          en: 'How does BGP Anycast architecture provide massive resilience against Distributed Denial of Service (DDoS) attacks for the 13 logical root servers?',
          bn: 'BGP এনিকাস্ট আর্কিটেকচার কীভাবে ১৩ টি লজিক্যাল রুট সার্ভারকে ডিস্ট্রিবিউটেড ডিনায়াল অব সার্ভিস (DDoS) আক্রমণ থেকে অভূতপূর্ব নিরাপত্তা প্রদান করে?'
        },
        options: [
          {
            en: 'Malicious attack traffic is automatically sinkholed and dispersed across hundreds of global physical edge nodes locally, preventing any single datacenter from being overwhelmed',
            bn: 'হামলার ক্ষতিকর ট্রাফিক স্বয়ংক্রিয়ভাবে বিশ্বজুড়ে শত শত ফিজিক্যাল এজ নোডে স্থানীয়ভাবে বিভক্ত ও শোষিত হয়ে যায়, যা কোনো একক ডাটা সেন্টারকে ডাউন হতে দেয় না',
          },
          {
            en: 'It shuts down internet access in countries where attacks originate',
            bn: 'এটি যে দেশ থেকে আক্রমণ আসছে সেখানে ইন্টারনেট সেবা সম্পূর্ণরূপে বন্ধ করে দেয়',
          },
          {
            en: 'It converts malicious UDP packets into harmless audio files',
            bn: 'এটি আক্রমণকারী UDP প্যাকেটগুলোকে ক্ষতিকরতাহীন অডিও ফাইলে রূপান্তর করে',
          },
          {
            en: 'It increases the physical thickness of undersea fiber optic cables',
            bn: 'এটি সমুদ্রের তলদেশের ফাইবার অপটিক কেবলের শারীরিক পুরুত্ব বৃদ্ধি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Anycast distributes attack volume geographically across many physical server clusters.',
          bn: 'এনিকাস্ট ভৌগোলিকভাবে অনেকগুলো ফিজিক্যাল সার্ভার ক্লাস্টারের মাঝে আক্রমণের চাপ ছড়িয়ে দেয়।',
        },
        explanation: {
          en: 'With Anycast, attack traffic originating in different continents is absorbed by local regional nodes. Legitimate users in other continents experience zero service interruption.',
          bn: 'এনিকাস্টের কারণে বিভিন্ন মহাদেশের আক্রমণের চাপ সংশ্লিষ্ট অঞ্চলের লোকাল নোডেই শোষিত হয়ে যায়। অন্যান্য অঞ্চলের বৈধ ব্যবহারকারীরা কোনো বিঘ্ন ছাড়াই সেবা পান।'
        },
      },
      {
        id: 'dns-srv-qz-3',
        kind: 'mcq',
        topic: 'dns-notify-mechanism-rfc1996',
        question: {
          en: 'What protocol mechanism under RFC 1996 immediately alerts secondary slave nameservers when a zone is edited on the primary master?',
          bn: 'RFC 1996 অনুসারে কোন প্রোটোকল মেকানিজম প্রাইমারি মাস্টারে জোন পরিবর্তন হওয়ামাত্র সেকেন্ডারি স্লেভ সার্ভারগুলোকে তাৎক্ষণিকভাবে সতর্ক করে?'
        },
        options: [
          {
            en: 'DNS NOTIFY',
            bn: 'DNS NOTIFY',
          },
          {
            en: 'FTP UPLOAD',
            bn: 'FTP UPLOAD',
          },
          {
            en: 'SSH TERMINAL',
            bn: 'SSH TERMINAL',
          },
          {
            en: 'SMTP EMAIL',
            bn: 'SMTP EMAIL',
          },
        ],
        answer: 0,
        hint: {
          en: 'The standard DNS protocol extension for master-to-slave change notifications.',
          bn: 'মাস্টার থেকে স্লেভে পরিবর্তনের বার্তা পাঠানোর আদর্শ ডিএনএস প্রোটোকল এক্সটেনশন।',
        },
        explanation: {
          en: 'DNS NOTIFY sends an unsolicited message from master to slaves whenever the zone serial number changes, prompting the slave to initiate an immediate IXFR/AXFR zone transfer.',
          bn: 'সিরিয়াল নম্বর বাড়লে DNS NOTIFY মাস্টার থেকে স্লেভে সতর্কবার্তা পাঠায়, যা স্লেভকে সাথে সাথে IXFR বা AXFR জোন ট্রান্সফার শুরু করার নির্দেশ দেয়।'
        },
      },
      {
        id: 'dns-srv-qz-4',
        kind: 'mcq',
        topic: 'why-thirteen-root-servers-512-bytes',
        question: {
          en: 'What historical technological constraint originally capped the number of logical DNS root nameservers at exactly 13?',
          bn: 'কোন ঐতিহাসিক প্রযুক্তিগত সীমাবদ্ধতার কারণে মূলত লজিক্যাল ডিএনএস রুট নেমসার্ভারের সংখ্যা ঠিক ১৩ টিতে নির্ধারিত হয়েছিল?'
        },
        options: [
          {
            en: 'The legacy 512-byte payload limit for unfragmented UDP packets, which could fit exactly 13 server names, IPv4 addresses, and protocol headers',
            bn: 'অবিভক্ত UDP প্যাকেটের প্রাচীন ৫১২-বাইট পেলোড সীমা, যার ভেতর ঠিক ১৩ টি সার্ভারের নাম, IPv4 ঠিকানা এবং প্রোটোকল হেডার এঁটে যেত',
          },
          {
            en: 'The number of computer chips manufactured in the United States in 1983',
            bn: '১৯৮৩ সালে মার্কিন যুক্তরাষ্ট্রে প্রস্তুত করা মোট কম্পিউটার চিপের সংখ্যা',
          },
          {
            en: 'Because computer programming languages could only count up to 13',
            bn: 'কারণ কম্পিউটার প্রোগ্রামিং ভাষাগুলো কেবল ১৩ পর্যন্ত গণনা করতে সক্ষম ছিল',
          },
          {
            en: 'The number of keys on the first mechanical typewriter invented in 1868',
            bn: '১৮৬৮ সালে উদ্ভাবিত প্রথম যান্ত্রিক টাইপরাইটারের কি বা বাটনের সংখ্যা',
          },
        ],
        answer: 0,
        hint: {
          en: 'The 512-byte UDP packet size limit in original RFC 1035.',
          bn: 'মূল RFC 1035-এ উল্লেখিত ৫১২ বাইটের UDP প্যাকেট আকারের সীমাবদ্ধতা।',
        },
        explanation: {
          en: 'A standard DNS response listing root server names and IP addresses had to fit within the 512-byte UDP limit without triggering truncation. 13 was the mathematical maximum.',
          bn: 'রুট সার্ভারের নাম ও আইপি সম্বলিত একটি স্ট্যান্ডার্ড ডিএনএস রেসপন্সকে ট্রাংকেশন এড়াতে ৫১২ বাইটের ভেতর হতে হতো, যার সর্বোচ্চ গাণিতিক সীমা ছিল ১৩ টি সার্ভার।'
        },
      },
    ],
  },
  next: {
    slug: 'dns-security',
    title: {
      en: 'DNS Security: DNSSEC, DoH & DoT Protocols',
      bn: 'ডিএনএস নিরাপত্তা: DNSSEC, DoH এবং DoT প্রোটোকল'
    },
  },
};
