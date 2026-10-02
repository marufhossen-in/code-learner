import type { Lesson } from '../../../lib/types';

export const MeetNetsecLesson: Lesson = {
  slug: 'meet-netsec',
  tech: 'network-security',
  title: {
    en: 'Overview of Network Security: What is Network Security, Packet Filtering & Ingress Inspection',
    bn: 'নেটওয়ার্ক সিকিউরিটির সার্বিক পরিচিতি: নেটওয়ার্ক সিকিউরিটি কী, প্যাকেট ফিল্টারিং ও ইনগ্রেস নিরীক্ষণ'
  },
  summary: {
    en: 'Begin your tour of enterprise network security architecture. Understand how internet-facing routers and edge firewalls establish defensive perimeters to protect internal subnets. Discover how ingress packet filters inspect IP protocol headers and transport port numbers against strict rule chains. Explore an executable Node.js packet filter evaluating 5 incoming network packets: 4 legitimate packets (web, mail, DNS, and admin SSH) pass safely, while 1 insecure legacy Telnet probe is dropped at the border.',
    bn: 'এন্টারপ্রাইজ নেটওয়ার্ক সিকিউরিটি আর্কিটেকচারের সফর শুরু করুন। ইন্টারনেট-মুখী রাউটার এবং এজ ফায়ারওয়াল কীভাবে অভ্যন্তরীণ সাবনেটগুলোকে সুরক্ষিত রাখতে প্রতিরক্ষা প্রাচীর গড়ে তোলে তা জানুন। ইনগ্রেস প্যাকেট ফিল্টার কীভাবে আইপি প্রোটোকল হেডার এবং ট্রান্সপোর্ট পোর্ট নম্বর যাচাই করে তা শিখুন। ৫ টি আগত নেটওয়ার্ক প্যাকেট মূল্যায়নকারী একটি কার্যকর Node.js ফিল্টার পরীক্ষা করুন: ৪ টি বৈধ প্যাকেট (ওয়েব, ইমেইল, ডিএনএস ও অ্যাডমিন এসএসএইচ) সফলভাবে প্রবেশ করে এবং ১ টি অনিরাপদ পুরানো টেলনেট অনুসন্ধান সীমান্তে সরাসরি বাতিল হয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'network-perimeters-and-threats',
      text: {
        en: 'The Network Battlefield: Securing Ingress and Egress Boundaries',
        bn: 'নেটওয়ার্ক যুদ্ধক্ষেত্র: ইনগ্রেস ও এগ্রেস সীমানা সুরক্ষিত রাখা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you connect an enterprise server or corporate datacenter to the public internet, your infrastructure is exposed to millions of automated scans every hour. Malicious bots continuously probe every IP address and port to find unpatched network daemons, unencrypted protocols, and exposed administration interfaces.',
        bn: 'যখন আপনি কোনো এন্টারপ্রাইজ সার্ভার বা কর্পোরেট ডেটা সেন্টারকে পাবলিক ইন্টারনেটের সাথে যুক্ত করেন, তখন আপনার পরিকাঠামো প্রতি ঘণ্টায় লাখ লাখ স্বয়ংক্রিয় স্ক্যানের মুখোমুখি হয়। ক্ষতিকর বটগুলো ক্রমাগত প্রতিটি আইপি অ্যাড্রেস ও পোর্ট পরীক্ষা করে অরক্ষিত নেটওয়ার্ক সার্ভিস, আন-এনক্রিপ্টেড প্রোটোকল এবং উন্মুক্ত অ্যাডমিন ইন্টারফেস খুঁজে বের করার চেষ্টা করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Network security establishes defensive barriers at your network perimeter. By inspecting ingress (inbound) and egress (outbound) packets at the network layer, edge routers and firewalls ensure that only authorized protocols reach designated servers, dropping hostile probes before they ever touch application code.',
        bn: 'নেটওয়ার্ক সিকিউরিটি আপনার নেটওয়ার্কের প্রবেশদ্বারে মজবুত প্রতিরক্ষা দেয়াল তৈরি করে। নেটওয়ার্ক লেয়ারে ইনগ্রেস (আগত) এবং এগ্রেস (বহির্গামী) প্যাকেটগুলো পুঙ্খানুপুঙ্খভাবে নিরীক্ষণ করে এজ রাউটার ও ফায়ারওয়াল নিশ্চিত করে যে কেবল অনুমোদিত প্রোটোকলই উদ্দিষ্ট সার্ভারে পৌঁছাতে পারবে, যার ফলে আক্রমণকারীর ক্ষতিকর প্যাকেট অ্যাপ্লিকেশন কোড ছোঁয়ার আগেই ধ্বংস হয়ে যায়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Packet Header Inspection',
            bn: '১. প্যাকেট হেডার নিরীক্ষণ'
          },
          text: {
            en: 'The edge filter examines the 5-tuple of every arriving IP packet: source IP, destination IP, protocol (TCP or UDP), source port, and destination port.',
            bn: 'এজ ফিল্টার প্রতিটি আগত আইপি প্যাকেটের ৫ টি মূল উপাদান পরীক্ষা করে: সোর্স আইপি, ডেস্টিনেশন আইপি, প্রোটোকল (টিসিপি বা ইউডিপি), সোর্স পোর্ট এবং ডেস্টিনেশন পোর্ট।'
          },
        },
        {
          title: {
            en: '2. Ordered Rule Evaluation',
            bn: '২. সুশৃঙ্খল রুল মূল্যায়ন'
          },
          text: {
            en: 'The filter checks rules from top to bottom. As soon as a packet satisfies a matching criteria (e.g. TCP port 80 for public web), the associated action is executed immediately.',
            bn: 'ফিল্টার ওপর থেকে নিচে ক্রমানুসারে নিয়মগুলো মেলায়। কোনো প্যাকেট একটি নিয়মের সাথে মিলে যাওয়া মাত্রই (যেমন পাবলিক ওয়েবের জন্য টিসিপি পোর্ট ৮০) তাৎক্ষণিকভাবে সেই অ্যাকশন কার্যকর হয়।'
          },
        },
        {
          title: {
            en: '3. Default-Deny Finality',
            bn: '৩. ডিফল্ট-ডিনাই চূড়ান্ত সিদ্ধান্ত'
          },
          text: {
            en: 'If a packet traverses all explicit allow rules without a match, it hits the final default-deny rule and is silently dropped or rejected at the boundary.',
            bn: 'যদি কোনো প্যাকেট পূর্ববর্তী অনুমোদনের সব নিয়ম পার হয়েও কোনো মিল না পায়, তবে তা শেষ মাথায় থাকা ডিফল্ট-ডিনাই নিয়মে আঘাত করে এবং নীরবে প্রত্যাখ্যাত হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Perimeter Ingress Packet Filter: 4 Allowed vs 1 Blocked Packet',
        bn: 'পেরিমিটার ইনগ্রেস প্যাকেট ফিল্টার: ৪ টি অনুমোদিত বনাম ১ টি ব্লক প্যাকেট'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Ingress packet filter evaluating 5 packets: 4 pass and 1 is dropped">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">EDGE PERIMETER PACKET FILTER: INGRESS TRAFFIC INSPECTION</text>
  
  <!-- Incoming Packets Box -->
  <g transform="translate(35, 55)">
    <rect width="365" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="365" height="32" rx="8" fill="#0284c7"/>
    <text x="182" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 INCOMING INGRESS PACKETS</text>
    
    <g transform="translate(12, 45)">
      <!-- P1 -->
      <rect width="341" height="48" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="20" fill="#ffffff" font-size="9" font-weight="bold">Packet 1: Port 80/TCP (Web Client)</text>
      <text x="12" y="36" fill="#94a3b8" font-size="8.5">Public internet traffic to HTTP web server</text>
      
      <!-- P2 -->
      <rect y="54" width="341" height="48" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="74" fill="#ffffff" font-size="9" font-weight="bold">Packet 2: Port 25/TCP (Mail Relay)</text>
      <text x="12" y="90" fill="#94a3b8" font-size="8.5">External SMTP relay delivering corporate email</text>
      
      <!-- P3 -->
      <rect y="108" width="341" height="48" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="128" fill="#ffffff" font-size="9" font-weight="bold">Packet 3: Port 53/UDP (DNS Resolver)</text>
      <text x="12" y="144" fill="#94a3b8" font-size="8.5">Inbound domain lookup query</text>
      
      <!-- P4 -->
      <rect y="162" width="341" height="48" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="182" fill="#ffffff" font-size="9" font-weight="bold">Packet 4: Port 22/TCP (SSH Bastion)</text>
      <text x="12" y="198" fill="#94a3b8" font-size="8.5">Source IP 10.0.0.50 (Whitelisted Admin Bastion)</text>
      
      <!-- P5 -->
      <rect y="216" width="341" height="48" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="236" fill="#fca5a5" font-size="9" font-weight="bold">Packet 5: Port 23/TCP (Insecure Telnet)</text>
      <text x="12" y="252" fill="#ef4444" font-size="8.5">Hostile internet scan searching for cleartext shell</text>
    </g>
  </g>
  
  <!-- Filter Decisions Box -->
  <g transform="translate(440, 55)">
    <rect width="365" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="365" height="32" rx="8" fill="#059669"/>
    <text x="182" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">FILTER VERDICTS: 4 PASS [✓] | 1 BLOCK [✗]</text>
    
    <g transform="translate(12, 45)">
      <!-- V1 -->
      <rect width="341" height="48" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PASS: Port 80 Allowed</text>
      <text x="12" y="36" fill="#34d399" font-size="8.5">Action: Forward to DMZ Web Reverse Proxy</text>
      
      <!-- V2 -->
      <rect y="54" width="341" height="48" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="74" fill="#6ee7b7" font-size="9" font-weight="bold">2. PASS: Port 25 Allowed</text>
      <text x="12" y="90" fill="#34d399" font-size="8.5">Action: Forward to Inbound Mail Appliance</text>
      
      <!-- V3 -->
      <rect y="108" width="341" height="48" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="128" fill="#6ee7b7" font-size="9" font-weight="bold">3. PASS: Port 53 Allowed</text>
      <text x="12" y="144" fill="#34d399" font-size="8.5">Action: Forward to Authoritative DNS Daemon</text>
      
      <!-- V4 -->
      <rect y="162" width="341" height="48" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="182" fill="#6ee7b7" font-size="9" font-weight="bold">4. PASS: Port 22 Allowed (Source Matched)</text>
      <text x="12" y="198" fill="#34d399" font-size="8.5">Action: Authorized Admin Shell Session Granted</text>
      
      <!-- V5 -->
      <rect y="216" width="341" height="48" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="236" fill="#fca5a5" font-size="9" font-weight="bold">5. BLOCK: Port 23 Dropped (Default-Deny)</text>
      <text x="12" y="252" fill="#ef4444" font-size="8.5">Action: Packet Silently Discarded at Perimeter</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Every unauthenticated, unwhitelisted network port is dropped without generating an ICMP reply</text>
</svg>`,
      caption: {
        en: 'The edge packet filter processes 5 incoming packets: 4 legitimate packets pass through approved ports, and 1 hostile Telnet probe is dropped by default-deny.',
        bn: 'এজ প্যাকেট ফিল্টারটি ৫ টি আগত প্যাকেট প্রসেস করে: ৪ টি বৈধ প্যাকেট অনুমোদিত পোর্টে প্রবেশ করে এবং ১ টি ক্ষতিকর টেলনেট অনুসন্ধান ডিফল্ট-ডিনাই নিয়মে বাতিল হয়।'
      },
    },
    {
      type: 'heading',
      id: 'packet-filter-engine-code',
      text: {
        en: 'Building an Ingress Packet Filter Engine in Node.js',
        bn: 'Node.js-এ ইনগ্রেস প্যাকেট ফিল্টার ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'packet-filter-engine.js',
      code: `// Deterministic Perimeter Ingress Packet Filter Engine
class IngressPacketFilter {
  constructor() {
    // Ordered Access Control List (ACL) rule chain
    this.rules = [
      {
        protocol: 'TCP',
        port: 80,
        source: '*',
        action: 'PASS',
        service: 'HTTP Web Traffic'
      },
      {
        protocol: 'TCP',
        port: 25,
        source: '*',
        action: 'PASS',
        service: 'SMTP Mail Gateway'
      },
      {
        protocol: 'UDP',
        port: 53,
        source: '*',
        action: 'PASS',
        service: 'DNS Query Resolver'
      },
      {
        protocol: 'TCP',
        port: 22,
        source: '10.0.0.50',
        action: 'PASS',
        service: 'Bastion SSH Administration'
      }
      // Note: Default-Deny catches everything else!
    ];
  }

  // Inspect 5-tuple against ordered rule chain
  evaluatePacket(packet) {
    for (const rule of this.rules) {
      const matchProtocol = rule.protocol === packet.protocol;
      const matchPort = rule.port === packet.destPort;
      const matchSource = rule.source === '*' || rule.source === packet.sourceIp;

      if (matchProtocol && matchPort && matchSource) {
        return {
          verdict: 'PASS',
          matchedRule: rule.service,
          reason: \`Explicit permit: \${rule.service} on port \${rule.port}/\${rule.protocol}\`
        };
      }
    }

    // Default-Deny drop
    return {
      verdict: 'BLOCK',
      matchedRule: 'Default-Deny Policy',
      reason: \`No permit rule matched port \${packet.destPort}/\${packet.protocol} from \${packet.sourceIp}\`
    };
  }
}

const filter = new IngressPacketFilter();

// 5 distinct incoming network packets arriving at perimeter interface
const incomingPackets = [
  {
    name: 'Public Web Visitor',
    protocol: 'TCP',
    destPort: 80,
    sourceIp: '198.51.100.12'
  },
  {
    name: 'Corporate Mail Relay',
    protocol: 'TCP',
    destPort: 25,
    sourceIp: '198.51.100.45'
  },
  {
    name: 'DNS Query Resolver',
    protocol: 'UDP',
    destPort: 53,
    sourceIp: '198.51.100.89'
  },
  {
    name: 'Admin Secure Shell',
    protocol: 'TCP',
    destPort: 22,
    sourceIp: '10.0.0.50'
  },
  {
    name: 'Hostile Telnet Probe',
    protocol: 'TCP',
    destPort: 23,
    sourceIp: '203.0.113.99'
  }
];

let totalPassed = 0;
let totalBlocked = 0;

console.log('=== Evaluating 5 Ingress Network Packets ===\\n');
incomingPackets.forEach((pkt, index) => {
  const result = filter.evaluatePacket(pkt);
  if (result.verdict === 'PASS') {
    totalPassed++;
    console.log(\`[\${index + 1}] PERMITTED [✓]: \${pkt.name} (\${pkt.protocol} port \${pkt.destPort})\`);
    console.log(\`    Rule: \${result.reason}\\n\`);
  } else {
    totalBlocked++;
    console.log(\`[\${index + 1}] BLOCKED   [✗]: \${pkt.name} (\${pkt.protocol} port \${pkt.destPort})\`);
    console.log(\`    Rule: \${result.reason}\\n\`);
  }
});

console.log('=== Ingress Filter Audit Summary ===');
console.log('Total Packets Inspected:', incomingPackets.length);
console.log('Permitted Packets:     ', totalPassed);
console.log('Blocked Hostile Probes: ', totalBlocked);`,
      caption: {
        en: 'The packet filter evaluates 5 incoming network packets: 4 are permitted by matching explicit rules, and 1 hostile Telnet probe is blocked by default-deny.',
        bn: 'প্যাকেট ফিল্টারটি ৫ টি আগত নেটওয়ার্ক প্যাকেট মূল্যায়ন করে: ৪ টি সুনির্দিষ্ট নিয়মের মাধ্যমে অনুমোদিত হয় এবং ১ টি ক্ষতিকর টেলনেট অনুসন্ধান ডিফল্ট-ডিনাই দিয়ে ব্লক হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Inherent Danger of Plaintext Management Protocols',
        bn: 'আন-এনক্রিপ্টেড ম্যানেজমেন্ট প্রোটোকলের মারাত্মক বিপদ'
      },
      text: {
        en: 'Never expose legacy plaintext protocols like Telnet (port 23), FTP (port 21), or unencrypted HTTP (port 80) for administrative access. Any adversary monitoring traffic on transit routers or local Wi-Fi can capture usernames and passwords directly from unencrypted packet payloads. Always mandate SSH (port 22) or WireGuard VPN tunnels with strong cryptographic key pairs for server administration.',
        bn: 'প্রশাসনিক কাজের জন্য টেলনেট (পোর্ট ২৩), এফটিপি (পোর্ট ২১) বা আন-এনক্রিপ্টেড HTTP (পোর্ট ৮০) এর মতো পুরানো প্রোটোকল কখনোই খোলা রাখবেন না। ট্রানজিট রাউটার বা লোকাল ওয়াইফাইতে থাকা যেকোনো আক্রমণকারী আন-এনক্রিপ্টেড প্যাকেট থেকে সরাসরি ইউজারনেম ও পাসওয়ার্ড চুরি করে নিতে পারে। সার্ভার প্রশাসনের জন্য সর্বদা শক্তিশালী কি-পেয়ারযুক্ত SSH (পোর্ট ২২) বা ওয়্যারগার্ড ভিপিএন টানেল ব্যবহার করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-meet-ex-1',
      kind: 'predict',
      topic: 'permitted-packets-count',
      question: {
        en: 'Out of the 5 incoming network packets evaluated by the perimeter filter, how many packets matched explicit permit rules and passed safely? (4). Type the number.',
        bn: 'পেরিমিটার ফিল্টারে মূল্যায়িত ৫ টি আগত নেটওয়ার্ক প্যাকেটের মধ্যে সর্বমোট কয়টি প্যাকেট সুনির্দিষ্ট অনুমোদিত নিয়মের সাথে মিলে নিরাপদে প্রবেশ করেছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 legitimate packets were permitted.',
        bn: 'ঠিক ৪ টি বৈধ প্যাকেট অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 5 packets, 4 passed: Web (port 80), Mail (port 25), DNS (port 53), and Bastion SSH (port 22).',
        bn: '৫ টির মধ্যে ৪ টি পাস করে: ওয়েব (পোর্ট ৮০), মেইল (পোর্ট ২৫), ডিএনএস (পোর্ট ৫৩) এবং ব্যাস্টিয়ন এসএসএইচ (পোর্ট ২২)।'
      },
    },
    {
      id: 'netsec-meet-ex-2',
      kind: 'mcq',
      topic: 'default-deny-principle',
      question: {
        en: 'Why is the Default-Deny principle mandatory for enterprise network firewalls and access control lists?',
        bn: 'এন্টারপ্রাইজ নেটওয়ার্ক ফায়ারওয়াল এবং অ্যাক্সেস কন্ট্রোল লিস্টে কেন ডিফল্ট-ডিনাই নীতি বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'It ensures that all unspecified network traffic is automatically blocked; administrators only open specific audited ports, preventing accidental exposure of newly installed services',
          bn: 'এটি নিশ্চিত করে যে অনুল্লিখিত সমস্ত নেটওয়ার্ক ট্রাফিক স্বয়ংক্রিয়ভাবে ব্লক থাকবে; প্রশাসকেরা কেবল নির্দিষ্ট পরীক্ষিত পোর্টগুলোই খোলেন, যার ফলে নতুন কোনো সার্ভিস অসাবধানতাবশত উন্মুক্ত হয়ে পড়ে না',
        },
        {
          en: 'It turns off the electrical power to all computers in the building after work hours',
          bn: 'এটি কাজের সময় শেষে ভবনের সমস্ত কম্পিউটারের বৈদ্যুতিক সংযোগ বন্ধ করে দেয়',
        },
        {
          en: 'It restricts the length of domain names to ten characters maximum',
          bn: 'এটি ডোমেইন নামের দৈর্ঘ্য সর্বোচ্চ দশ অক্ষরে সীমাবদ্ধ রাখে',
        },
        {
          en: 'It forces network cables to transmit data only in one direction',
          bn: 'এটি ইন্টারনেটের তারকে কেবল একদিকে ডেটা পাঠাতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Default-deny blocks all traffic unless an explicit rule authorizes it.',
        bn: 'ডিফল্ট-ডিনাই স্পষ্ট অনুমতি ছাড়া সমস্ত ট্রাফিক স্বয়ংক্রিয়ভাবে বন্ধ রাখে।'
      },
      explanation: {
        en: 'A default-allow stance is disastrous: any rogue or test database listening on a port becomes instantly reachable globally. Default-deny guarantees defense-in-depth.',
        bn: 'ডিফল্ট-অ্যালাউ মারাত্মক ঝুঁকিপূর্ণ: যেকোনো পরীক্ষামূলক ডাটাবেজ তৎক্ষণাৎ সারা বিশ্বের জন্য উন্মুক্ত হয়ে যায়। ডিফল্ট-ডিনাই কঠোর নিরাপত্তা নিশ্চিত করে।'
      },
    },
    {
      id: 'netsec-meet-ex-3',
      kind: 'mcq',
      topic: 'packet-5-tuple',
      question: {
        en: 'What 5 attributes compose the classic "5-Tuple" examined by layer 4 packet filtering firewalls?',
        bn: 'লেয়ার ৪ প্যাকেট ফিল্টারিং ফায়ারওয়ালে পরীক্ষিত ক্লাসিক "৫-টাপল" (5-Tuple) কোন ৫ টি বৈশিষ্ট্য নিয়ে গঠিত?'
      },
      options: [
        {
          en: 'Source IP Address, Destination IP Address, Transport Protocol (TCP or UDP), Source Port, and Destination Port',
          bn: 'সোর্স আইপি অ্যাড্রেস, ডেস্টিনেশন আইপি অ্যাড্রেস, ট্রান্সপোর্ট প্রোটোকল (টিসিপি বা ইউডিপি), সোর্স পোর্ট এবং ডেস্টিনেশন পোর্ট',
        },
        {
          en: 'Keyboard brand, monitor resolution, mouse speed, desk height, and room temperature',
          bn: 'কিবোর্ডের ব্র্যান্ড, মনিটরের রেজোলিউশন, মাউসের গতি, টেবিলের উচ্চতা এবং ঘরের তাপমাত্রা',
        },
        {
          en: 'Operating system version, hard drive capacity, memory speed, processor cores, and fan noise',
          bn: 'অপারেটিং সিস্টেম সংস্করণ, হার্ডড্রাইভ ধারণক্ষমতা, মেমোরির গতি, প্রসেসর কোর এবং কুলিং ফ্যানের শব্দ',
        },
        {
          en: 'HTML title, CSS stylesheet, JavaScript bundle, JPEG image, and PDF download',
          bn: 'এইচটিএমএল টাইটেল, সিএসএস স্টাইলশিট, জাভাস্ক্রিপ্ট বান্ডেল, জেপিইজি ইমেজ এবং পিডিএফ ফাইল',
        },
      ],
      answer: 0,
      hint: {
        en: 'Source/dest IP, protocol, and source/dest port define the 5-tuple.',
        bn: 'সোর্স/ডেস্টিনেশন আইপি, প্রোটোকল এবং সোর্স/ডেস্টিনেশন পোর্ট নিয়ে ৫-টাপল গঠিত হয়।'
      },
      explanation: {
        en: 'Network layer filters make forwarding decisions based on this exact 5-tuple without needing to inspect deep application payload bytes.',
        bn: 'প্যাকেট ফিল্টারগুলো পুরো অ্যাপ্লিকেশন পেলোড না খুলেই এই ৫-টাপলের ওপর ভিত্তি করে প্যাকেট পাঠানো বা ব্লক করার সিদ্ধান্ত নেয়।'
      },
    },
    {
      id: 'netsec-meet-ex-4',
      kind: 'predict',
      topic: 'blocked-packets-count',
      question: {
        en: 'How many of the 5 evaluated incoming packets were dropped by the default-deny perimeter policy? (1). Type the number.',
        bn: 'মূল্যায়িত ৫ টি আগত প্যাকেটের মধ্যে সর্বমোট কয়টি প্যাকেট ডিফল্ট-ডিনাই পেরিমিটার পলিসির মাধ্যমে বাতিল হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Exactly 1 hostile probe was dropped.',
        bn: 'ঠিক ১ টি ক্ষতিকর অনুসন্ধান বাতিল হয়েছিল।'
      },
      explanation: {
        en: 'The insecure Telnet probe (port 23) matched no explicit allow rule and was dropped by default-deny.',
        bn: 'অনিরাপদ টেলনেট অনুসন্ধান (পোর্ট ২৩) কোনো অনুমোদিত নিয়মে না মেলায় ডিফল্ট-ডিনাই দ্বারা বাতিল হয়।'
      },
    },
  ],
  quiz: {
    id: 'meet-netsec-quiz',
    title: {
      en: 'Network Security Fundamentals & Ingress Inspection Quiz',
      bn: 'নেটওয়ার্ক সিকিউরিটি পরিচিতি ও ইনগ্রেস নিরীক্ষণ কুইজ'
    },
    questions: [
      {
        id: 'netsec-meet-qz-1',
        kind: 'mcq',
        topic: 'telnet-vs-ssh-security',
        question: {
          en: 'Why is Telnet (port 23) considered an unacceptable security risk in production networks compared to SSH (port 22)?',
          bn: 'প্রোডাকশন নেটওয়ার্কে SSH (পোর্ট ২২) এর তুলনায় টেলনেট (পোর্ট ২৩) কেন সম্পূর্ণ অগ্রহণযোগ্য নিরাপত্তা ঝুঁকি হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: 'Telnet transmits all keystrokes, usernames, and passwords in unencrypted plaintext across the wire, whereas SSH establishes an encrypted tunnel using authenticated cryptographic keys',
            bn: 'টেলনেট সমস্ত কিবোর্ড টাইপিং, ইউজারনেম এবং পাসওয়ার্ড নেটওয়ার্কের মধ্য দিয়ে সম্পূর্ণ খোলা প্লেইনটেক্সট আকারে পাঠায়, যেখানে SSH ক্রিপ্টোগ্রাফিক কি ব্যবহার করে একটি এনক্রিপ্ট করা নিরাপদ টানেল তৈরি করে',
          },
          {
            en: 'Because Telnet only works on computers manufactured before the year 1990',
            bn: 'কারণ টেলনেট কেবল ১৯৯০ সালের আগে তৈরি হওয়া কম্পিউটারগুলোতে চলতে পারে',
          },
          {
            en: 'Because Telnet causes computer screens to turn black and white',
            bn: 'কারণ টেলনেট কম্পিউটার স্ক্রিনকে সাদা-কালো রঙে রূপান্তর করে দেয়',
          },
          {
            en: 'Because SSH is twice as loud as Telnet when typing commands',
            bn: 'কারণ কমান্ড টাইপ করার সময় SSH টেলনেটের চেয়ে দ্বিগুণ বেশি শব্দ উৎপন্ন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Telnet lacks encryption; anyone sniffing packets reads credentials in cleartext.',
          bn: 'টেলনেটে কোনো এনক্রিপশন থাকে না; প্যাকেট স্নাইফ করলেই সব পাসওয়ার্ড সরাসরি দেখা যায়।'
        },
        explanation: {
          en: 'Telnet protocol was designed in an era when networks were trusted. Modern networks mandate SSH to defeat passive packet sniffing and man-in-the-middle attacks.',
          bn: 'টেলনেট তৈরি হয়েছিল যখন ইন্টারনেট সম্পূর্ণ নিরাপদ ছিল। আজকের বৈরি নেটওয়ার্কে পাসওয়ার্ড চুরি ঠেকাতে SSH বাধ্যতামূলক।'
        },
      },
      {
        id: 'netsec-meet-qz-2',
        kind: 'mcq',
        topic: 'osi-layer-security-responsibilities',
        question: {
          en: 'At which layer of the OSI model does an IP packet filtering firewall operate, and what is its primary limitation?',
          bn: 'ওএসআই (OSI) মডেলের কোন লেয়ারে একটি আইপি প্যাকেট ফিল্টারিং ফায়ারওয়াল কাজ করে এবং এর প্রধান সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'It operates at Layer 3 (Network) and Layer 4 (Transport); its limitation is that it cannot inspect application-layer payloads (Layer 7) to detect SQL injection or malware hidden inside allowed ports',
            bn: 'এটি লেয়ার ৩ (নেটওয়ার্ক) এবং লেয়ার ৪ (ট্রান্সপোর্ট)-এ কাজ করে; এর সীমাবদ্ধতা হলো এটি অনুমোদিত পোর্টের ভেতর দিয়ে আসা এসকিউএল ইনজেকশন বা ক্ষতিকর ম্যালওয়্যার সনাক্ত করতে অ্যাপ্লিকেশন পেলোড (লেয়ার ৭) পরীক্ষা করতে পারে না',
          },
          {
            en: 'It operates at Layer 1 (Physical) and only checks whether the network cable is plugged in',
            bn: 'এটি লেয়ার ১ (ফিজিক্যাল)-এ কাজ করে এবং কেবল ইন্টারনেটের তার সংযুক্ত আছে কি না তা দেখে',
          },
          {
            en: 'It operates at Layer 2 and only checks the color of the computer monitor',
            bn: 'এটি লেয়ার ২-এ কাজ করে এবং কেবল কম্পিউটার মনিটরের রঙ পরীক্ষা করে',
          },
          {
            en: 'It operates on the server cooling fan to adjust its rotation speed',
            bn: 'এটি সার্ভারের কুলিং ফ্যানে কাজ করে এর ঘূর্ণন গতি নিয়ন্ত্রণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Layer 3/4 packet filters inspect IP/port headers, not application payloads.',
          bn: 'লেয়ার ৩/৪ ফিল্টার কেবল আইপি ও পোর্ট হেডার দেখে, ভেতরের অ্যাপ্লিকেশন ডেটা নয়।'
        },
        explanation: {
          en: 'Packet filters are fast and efficient, but an attack sent to port 80 (like XSS or SQLi) passes straight through. Web Application Firewalls (WAF) operate at Layer 7 to inspect payloads.',
          bn: 'প্যাকেট ফিল্টার দ্রুতগতির হলেও পোর্ট ৮০-তে পাঠানো ক্ষতিকর স্ক্রিপ্ট বা কোড থামাতে পারে না। সেজন্য লেয়ার ৭-এ কাজ করা WAF প্রয়োজন হয়।'
        },
      },
      {
        id: 'netsec-meet-qz-3',
        kind: 'mcq',
        topic: 'bastion-host-architecture',
        question: {
          en: 'What is the architectural purpose of a "Bastion Host" (or Jump Box) in an enterprise perimeter defense strategy?',
          bn: 'এন্টারপ্রাইজ পেরিমিটার ডিফেন্স কৌশলে একটি "ব্যাস্টিয়ন হোস্ট" (Bastion Host বা Jump Box) এর মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'A hardened, heavily monitored server acting as the single authorized gateway through which administrators access private internal servers, keeping all internal SSH ports closed to the public internet',
            bn: 'একটি অত্যন্ত সুরক্ষিত ও সার্বক্ষণিক নজরদারিতে থাকা সার্ভার যা একমাত্র অনুমোদিত গেটওয়ে হিসেবে কাজ করে এবং যার মধ্য দিয়ে প্রশাসকেরা অভ্যন্তরীণ সার্ভার অ্যাক্সেস করেন, ফলে অভ্যন্তরীণ সব এসএসএইচ পোর্ট পাবলিক ইন্টারনেটে বন্ধ রাখা যায়',
          },
          {
            en: 'A server designed to download computer games for office staff during lunch breaks',
            bn: 'একটি সার্ভার যা দুপুরের বিরতির সময় অফিস কর্মীদের জন্য কম্পিউটার গেম ডাউনলোড করে',
          },
          {
            en: 'A backup power generator that provides electricity during stormy weather',
            bn: 'একটি ব্যাকআপ বিদ্যুৎ জেনারেটর যা দুর্যোগপূর্ণ আবহাওয়ায় বিদ্যুৎ সরবরাহ করে',
          },
          {
            en: 'A software program that automatically translates documents into French',
            bn: 'একটি সফটওয়্যার যা স্বয়ংক্রিয়ভাবে সমস্ত ডকুমেন্ট ফরাসি ভাষায় অনুবাদ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Bastion hosts funnel all admin access through one tightly audited gateway.',
          bn: 'ব্যাস্টিয়ন হোস্ট সমস্ত অ্যাডমিন অ্যাক্সেসকে একটিমাত্র কঠোরভাবে নজরদারি করা গেটওয়ে দিয়ে পরিচালনা করে।'
        },
        explanation: {
          en: 'Rather than exposing port 22 on 50 database and app servers, engineers expose only the single hardened bastion host protected with MFA and key-based authentication.',
          bn: '৫০টি সার্ভারে পোর্ট ২২ উন্মুক্ত না রেখে কেবল একটি সুরক্ষিত ব্যাস্টিয়ন হোস্ট খোলা রাখা হয় যা টু-ফ্যাক্টর ও কি-অথেন্টিকেশনে সুরক্ষিত থাকে।'
        },
      },
      {
        id: 'netsec-meet-qz-4',
        kind: 'mcq',
        topic: 'silent-drop-vs-reject',
        question: {
          en: 'Why do high-security network firewalls prefer "DROP" (silent discard) over "REJECT" (sending an ICMP port unreachable response) for unauthorized traffic?',
          bn: 'অননুমোদিত ট্রাফিকের ক্ষেত্রে উচ্চ-নিরাপত্তাযুক্ত ফায়ারওয়ালগুলো কেন "REJECT" (ICMP পোর্ট আনরিচেবল মেসেজ পাঠানো) এর চেয়ে "DROP" (নীরবে প্যাকেট ফেলে দেওয়া) বেশি পছন্দ করে?'
        },
        options: [
          {
            en: 'DROP gives zero feedback to port scanners, forcing hostile automated bots to wait for connection timeouts and slowing down reconnaissance sweeps while revealing nothing about firewall existence',
            bn: 'DROP পোর্ট স্ক্যানারকে কোনো উত্তর দেয় না, যার ফলে আক্রমণকারী বটগুলোকে টাইমআউটের জন্য দীর্ঘক্ষণ অপেক্ষা করতে হয় এবং স্ক্যানিংয়ের গতি মারাত্মক ধীর হয়ে যায়, এমনকি ফায়ারওয়ালের উপস্থিতিও টের পাওয়া যায় না',
          },
          {
            en: 'Because DROP requires ten times less electrical voltage to operate',
            bn: 'কারণ DROP চালাতে দশ গুণ কম বৈদ্যুতিক ভোল্টেজের প্রয়োজন হয়',
          },
          {
            en: 'Because REJECT causes computer monitors to turn purple',
            bn: 'কারণ REJECT কম্পিউটারের মনিটরকে বেগুনি রঙে রূপান্তর করে দেয়',
          },
          {
            en: 'Because DROP automatically speeds up typing speed on keyboards',
            bn: 'কারণ DROP কিবোর্ডে টাইপ করার গতি নিজে থেকেই বাড়িয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'DROP leaves scanners hanging in timeout; REJECT informs them the port is actively closed.',
          bn: 'DROP আক্রমণকারীকে টাইমআউটে আটকে রাখে; আর REJECT জানায় যে পোর্টটি বন্ধ রাখা হয়েছে।'
        },
        explanation: {
          en: 'REJECT tells an attacker an active firewall responded. DROP creates a black hole: the scanner must wait 30-60 seconds per port, making mass reconnaissance painfully expensive.',
          bn: 'REJECT আক্রমণকারীকে জানিয়ে দেয় ফায়ারওয়াল আছে। কিন্তু DROP একটি ব্ল্যাক হোল তৈরি করে স্ক্যানারকে প্রতিটি পোর্টের জন্য দীর্ঘক্ষণ অপেক্ষা করায়।'
        },
      },
    ],
  },
  next: {
    slug: 'firewalls-basics',
    title: {
      en: 'Stateful vs Stateless Firewalls: Connection Tracking & Rule Chains',
      bn: 'স্টেটফুল বনাম স্টেটলেস ফায়ারওয়াল: কানেকশন ট্র্যাকিং ও রুল চেইন'
    },
  },
};
