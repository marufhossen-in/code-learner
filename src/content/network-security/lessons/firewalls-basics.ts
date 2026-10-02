import type { Lesson } from '../../../lib/types';

export const FirewallsBasicsLesson: Lesson = {
  slug: 'firewalls-basics',
  tech: 'network-security',
  title: {
    en: 'Stateful vs Stateless Firewalls: Connection Tracking (conntrack) & Rule Chains',
    bn: 'স্টেটফুল বনাম স্টেটলেস ফায়ারওয়াল: কানেকশন ট্র্যাকিং (conntrack) এবং রুল চেইন'
  },
  summary: {
    en: 'Master the architectural differences between stateless packet filters and stateful inspection firewalls. Understand why stateless filtering forces networks to open dangerous ephemeral port ranges, while stateful firewalls track TCP 3-way handshakes using dynamic connection tracking tables (conntrack). Explore the 4 canonical connection states (NEW, ESTABLISHED, RELATED, INVALID). Inspect an executable Node.js stateful firewall evaluating 5 network packets: 4 packets pass through state-aware rules, and 1 unauthorized legacy FTP probe is dropped.',
    bn: 'স্টেটলেস প্যাকেট ফিল্টার এবং স্টেটফুল ইন্সপেকশন ফায়ারওয়ালের মধ্যে আর্কিটেকচারাল পার্থক্যগুলো আয়ত্ত করুন। স্টেটলেস ফিল্টারিং কেন বিশাল সংখ্যক পোর্ট খোলা রাখতে বাধ্য করে এবং স্টেটফুল ফায়ারওয়াল কীভাবে ডায়নামিক কানেকশন ট্র্যাকিং টেবিল (conntrack) দিয়ে টিসিপি ৩-ওয়ে হ্যান্ডশেক পর্যবেক্ষণ করে তা বুঝুন। ৪ টি প্রধান কানেকশন স্টেট (NEW, ESTABLISHED, RELATED, INVALID) জানুন। ৫ টি নেটওয়ার্ক প্যাকেট মূল্যায়নকারী একটি কার্যকর Node.js স্টেটফুল ফায়ারওয়াল পরীক্ষা করুন: ৪ টি প্যাকেট স্টেট-সচেতন নিয়মে অনুমোদিত হয় এবং ১ টি অননুমোদিত পুরানো এফটিপি অনুসন্ধান বাতিল হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'stateless-vs-stateful-architecture',
      text: {
        en: 'The Evolution of Network Firewalls: From Stateless Filters to Stateful Inspection',
        bn: 'নেটওয়ার্ক ফায়ারওয়ালের বিবর্তন: স্টেটলেস ফিল্টার থেকে স্টেটফুল ইন্সপেকশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build a firewall to protect internal network services, the simplest approach is a stateless packet filter. A stateless filter inspects every incoming packet in isolation against static rules. However, because it has no memory of past communication, return packets from legitimate outbound requests look identical to unprompted adversary attacks.',
        bn: 'যখন আপনি অভ্যন্তরীণ নেটওয়ার্ক সার্ভিসগুলোকে রক্ষা করতে একটি ফায়ারওয়াল তৈরি করেন, তখন সবচেয়ে সহজ পদ্ধতি হলো স্টেটলেস প্যাকেট ফিল্টার। একটি স্টেটলেস ফিল্টার পূর্ববর্তী যোগাযোগের কোনো ইতিহাস না রেখে প্রতিটি প্যাকেটকে সম্পূর্ণ আলাদাভাবে পরীক্ষা করে। তবে এটি অতীতের সেশন মনে রাখতে পারে না বলে বৈধ বহির্গামী রিকোয়েস্টের ফিরতি প্যাকেট এবং আক্রমণকারীর নতুন অনাকাঙ্ক্ষিত আক্রমণের মধ্যে কোনো পার্থক্য বুঝতে পারে না।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To allow external web servers to reply to internal clients, stateless firewalls are forced to open thousands of high-numbered ephemeral ports (ports 1024 to 65535). In contrast, a stateful inspection firewall maintains a dynamic in-memory connection tracking table (conntrack), tracking the TCP 3-way handshake and automatically admitting return traffic on existing sessions while keeping all unsolicited ports permanently locked.',
        bn: 'অভ্যন্তরীণ ক্লায়েন্টের রিকোয়েস্টের উত্তর বাইরে থেকে গ্রহণ করার জন্য স্টেটলেস ফায়ারওয়াল হাজার হাজার অনির্ধারিত পোর্ট (পোর্ট ১০২৪ থেকে ৬৫৫৩৫) খোলা রাখতে বাধ্য হয়। এর বিপরীতে স্টেটফুল ইন্সপেকশন ফায়ারওয়াল মেমোরিতে একটি গতিশীল কানেকশন ট্র্যাকিং টেবিল (conntrack) বজায় রাখে, যা টিসিপি ৩-ওয়ে হ্যান্ডশেক পর্যবেক্ষণ করে বিদ্যমান সেশনের ফিরতি প্যাকেট নিজে থেকেই প্রবেশ করতে দেয় এবং অনাকাঙ্ক্ষিত সব পোর্ট চিরতরে বন্ধ রাখে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. The NEW State',
            bn: '১. NEW স্টেট'
          },
          text: {
            en: 'A packet initiating a fresh connection attempt, such as an initial TCP SYN packet. Must match an explicit allow rule (e.g. port 80 or 443) or be dropped.',
            bn: 'একটি নতুন সংযোগ শুরুর প্যাকেট, যেমন প্রাথমিক টিসিপি সিন (SYN) প্যাকেট। এটি প্রবেশ করতে হলে অবশ্যই একটি স্পষ্ট অনুমতি নিয়মের (যেমন পোর্ট ৮০ বা ৪৪৩) সাথে মিলতে হয়, অন্যথায় বাতিল হয়।'
          },
        },
        {
          title: {
            en: '2. The ESTABLISHED State',
            bn: '২. ESTABLISHED স্টেট'
          },
          text: {
            en: 'Packets belonging to an active, ongoing connection that has successfully exchanged bidirectional traffic. Handled efficiently at the top of the rule chain.',
            bn: 'একটি সক্রিয় চলমান সেশনের অন্তর্ভুক্ত প্যাকেট যা উভয়মুখী ট্রাফিক বিনিময় সম্পন্ন করেছে। এটি ফায়ারওয়াল রুল চেইনের সবার ওপরে দ্রুততম গতিতে প্রসেস করা হয়।'
          },
        },
        {
          title: {
            en: '3. The RELATED State',
            bn: '৩. RELATED স্টেট'
          },
          text: {
            en: 'Packets initiating a new auxiliary connection that is logically associated with an established connection (such as FTP data channels or ICMP error notifications).',
            bn: 'একটি নতুন সহায়ক সংযোগের প্যাকেট যা পূর্বে প্রতিষ্ঠিত কোনো সংযোগের সাথে যুক্ত (যেমন এফটিপি ডেটা চ্যানেল বা কোনো আইসিএমপি এরর নোটিফিকেশন)।'
          },
        },
        {
          title: {
            en: '4. The INVALID State',
            bn: '৪. INVALID স্টেট'
          },
          text: {
            en: 'Packets with malformed headers, out-of-order sequence numbers, or corrupted TCP flags that cannot be associated with any valid communication; dropped immediately.',
            bn: 'ত্রুটিপূর্ণ হেডার, ভুল সিকোয়েন্স নম্বর বা বিকৃত টিসিপি ফ্ল্যাগযুক্ত প্যাকেট যা কোনো বৈধ যোগাযোগের সাথে মেলে না; ফায়ারওয়াল এগুলো তৎক্ষণাৎ ড্রপ করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Stateful Connection Tracking & Rule Chain: 4 Allowed vs 1 Dropped Packet',
        bn: 'স্টেটফুল কানেকশন ট্র্যাকিং এবং রুল চেইন: ৪ টি অনুমোদিত বনাম ১ টি বাতিল প্যাকেট'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Stateful inspection firewall tracking connection table and evaluating 5 packets">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">STATEFUL FIREWALL ARCHITECTURE: CONNTRACK & RULE CHAINS</text>
  
  <!-- Conntrack Table Banner -->
  <rect x="35" y="48" width="770" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="50" y="75" fill="#94a3b8" font-size="11" font-weight="bold">CONNTRACK TABLE:</text>
  <text x="180" y="75" fill="#38bdf8" font-size="11" font-weight="bold">10.0.0.15:49152 &lt;--&gt; 198.51.100.10:443 [ESTABLISHED, TCP 3-Way Handshake Verified]</text>
  
  <!-- Left Side: Incoming Packets -->
  <g transform="translate(35, 105)">
    <rect width="370" height="290" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="30" rx="8" fill="#0284c7"/>
    <text x="185" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 ARRIVING NETWORK PACKETS</text>
    
    <g transform="translate(12, 40)">
      <rect width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="18" fill="#ffffff" font-size="8.5" font-weight="bold">1. Port 80/TCP (Web Client)</text>
      <text x="10" y="32" fill="#94a3b8" font-size="8">State: NEW (Initial HTTP request)</text>
      
      <rect y="48" width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="66" fill="#ffffff" font-size="8.5" font-weight="bold">2. Port 443/TCP (Secure Visitor)</text>
      <text x="10" y="80" fill="#94a3b8" font-size="8">State: NEW (Initial TLS connection)</text>
      
      <rect y="96" width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="114" fill="#ffffff" font-size="8.5" font-weight="bold">3. Port 49152/TCP (Return Traffic)</text>
      <text x="10" y="128" fill="#38bdf8" font-size="8">State: ESTABLISHED (Matches conntrack entry!)</text>
      
      <rect y="144" width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="162" fill="#ffffff" font-size="8.5" font-weight="bold">4. Port 53/UDP (DNS Query)</text>
      <text x="10" y="176" fill="#94a3b8" font-size="8">State: NEW (Resolving domain record)</text>
      
      <rect y="192" width="346" height="42" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="210" fill="#fca5a5" font-size="8.5" font-weight="bold">5. Port 21/TCP (Insecure FTP Probe)</text>
      <text x="10" y="224" fill="#ef4444" font-size="8">State: NEW (Hostile scanner port knock)</text>
    </g>
  </g>
  
  <!-- Right Side: Stateful Rule Evaluation -->
  <g transform="translate(435, 105)">
    <rect width="370" height="290" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="30" rx="8" fill="#059669"/>
    <text x="185" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">STATEFUL CHAIN VERDICTS: 4 PASS | 1 DROP</text>
    
    <g transform="translate(12, 40)">
      <rect width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">1. Rule 2 MATCH: ACCEPT Port 80</text>
      <text x="10" y="32" fill="#34d399" font-size="8">Action: Added to conntrack table -> PASS</text>
      
      <rect y="48" width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="66" fill="#6ee7b7" font-size="8.5" font-weight="bold">2. Rule 3 MATCH: ACCEPT Port 443</text>
      <text x="10" y="80" fill="#34d399" font-size="8">Action: Added to conntrack table -> PASS</text>
      
      <rect y="96" width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="114" fill="#6ee7b7" font-size="8.5" font-weight="bold">3. Rule 1 MATCH: ACCEPT ESTABLISHED</text>
      <text x="10" y="128" fill="#34d399" font-size="8">Action: Return packet permitted on port 49152 -> PASS</text>
      
      <rect y="144" width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="162" fill="#6ee7b7" font-size="8.5" font-weight="bold">4. Rule 4 MATCH: ACCEPT Port 53 UDP</text>
      <text x="10" y="176" fill="#34d399" font-size="8">Action: DNS query forwarded to resolver -> PASS</text>
      
      <rect y="192" width="346" height="42" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="210" fill="#fca5a5" font-size="8.5" font-weight="bold">5. NO MATCH: Default-Deny DROP</text>
      <text x="10" y="224" fill="#ef4444" font-size="8">Action: Port 21 dropped silently -> DROP</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Rule 1 permits established return packets, eliminating the need to leave ephemeral ports open</text>
</svg>`,
      caption: {
        en: 'The stateful firewall uses conntrack to recognize return packet 3 as ESTABLISHED, allowing 4 legitimate packets and dropping 1 unauthorized FTP probe.',
        bn: 'স্টেটফুল ফায়ারওয়ালটি conntrack ব্যবহার করে ৩ নম্বর ফিরতি প্যাকেটকে ESTABLISHED হিসেবে সনাক্ত করে ৪ টি বৈধ প্যাকেট অনুমোদন করে এবং ১ টি অননুমোদিত এফটিপি অনুসন্ধান বাতিল করে।'
      },
    },
    {
      type: 'heading',
      id: 'stateful-firewall-engine-code',
      text: {
        en: 'Building an Executable Stateful Firewall Engine in Node.js',
        bn: 'Node.js-এ কার্যকর স্টেটফুল ফায়ারওয়াল ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'stateful-firewall-engine.js',
      code: `// Deterministic Stateful Inspection Firewall Engine with Conntrack
class StatefulFirewall {
  constructor() {
    // Dynamic connection tracking table (conntrack)
    this.conntrackTable = new Map();

    // Ordered firewall rule chain
    this.rules = [
      {
        id: 1,
        action: 'ACCEPT',
        state: 'ESTABLISHED',
        label: 'Accept Tracked Established Connections'
      },
      {
        id: 2,
        action: 'ACCEPT',
        protocol: 'TCP',
        port: 80,
        state: 'NEW',
        label: 'Permit Inbound HTTP Web Traffic'
      },
      {
        id: 3,
        action: 'ACCEPT',
        protocol: 'TCP',
        port: 443,
        state: 'NEW',
        label: 'Permit Inbound HTTPS Web Traffic'
      },
      {
        id: 4,
        action: 'ACCEPT',
        protocol: 'UDP',
        port: 53,
        state: 'NEW',
        label: 'Permit Outbound DNS Queries'
      }
      // Rule 5: Default-Deny Policy
    ];
  }

  // Inspect and process incoming network packet
  evaluatePacket(packet) {
    const forwardKey = \`\${packet.sourceIp}:\${packet.sourcePort}->\${packet.destIp}:\${packet.destPort}/\${packet.protocol}\`;
    const reverseKey = \`\${packet.destIp}:\${packet.destPort}->\${packet.sourceIp}:\${packet.sourcePort}/\${packet.protocol}\`;

    // 1. Determine connection state via conntrack table
    let currentState = packet.state;
    if (this.conntrackTable.has(forwardKey) || this.conntrackTable.has(reverseKey)) {
      currentState = 'ESTABLISHED';
    }

    // 2. Evaluate against ordered rule chain
    for (const rule of this.rules) {
      if (rule.state === 'ESTABLISHED' && currentState === 'ESTABLISHED') {
        return {
          verdict: 'ACCEPT',
          rule: rule.label,
          state: currentState,
          reason: 'Matches active session in conntrack table'
        };
      }

      const matchProtocol = !rule.protocol || rule.protocol === packet.protocol;
      const matchPort = !rule.port || rule.port === packet.destPort;
      const matchState = !rule.state || rule.state === currentState;

      if (matchProtocol && matchPort && matchState) {
        if (currentState === 'NEW') {
          // Register newly authorized connection in conntrack
          this.conntrackTable.set(forwardKey, { establishedAt: Date.now() });
        }
        return {
          verdict: 'ACCEPT',
          rule: rule.label,
          state: currentState,
          reason: \`Explicit permit on port \${packet.destPort}/\${packet.protocol}\`
        };
      }
    }

    // Default-Deny drop
    return {
      verdict: 'DROP',
      rule: 'Default-Deny Policy',
      state: currentState,
      reason: \`No permit rule matched port \${packet.destPort}/\${packet.protocol}\`
    };
  }
}

const firewall = new StatefulFirewall();

// Pre-register an existing outbound HTTPS session in conntrack
firewall.conntrackTable.set('10.0.0.15:49152->198.51.100.10:443/TCP', {
  establishedAt: Date.now()
});

// 5 distinct incoming network packets
const packets = [
  {
    name: 'Public Web Client',
    protocol: 'TCP',
    destPort: 80,
    sourcePort: 52140,
    sourceIp: '198.51.100.12',
    destIp: '10.0.0.5',
    state: 'NEW'
  },
  {
    name: 'Secure Web Visitor',
    protocol: 'TCP',
    destPort: 443,
    sourcePort: 52141,
    sourceIp: '198.51.100.14',
    destIp: '10.0.0.5',
    state: 'NEW'
  },
  {
    name: 'Return Packet on Tracked Session',
    protocol: 'TCP',
    destPort: 49152,
    sourcePort: 443,
    sourceIp: '198.51.100.10',
    destIp: '10.0.0.15',
    state: 'ESTABLISHED'
  },
  {
    name: 'DNS Query Resolver',
    protocol: 'UDP',
    destPort: 53,
    sourcePort: 53530,
    sourceIp: '198.51.100.80',
    destIp: '10.0.0.53',
    state: 'NEW'
  },
  {
    name: 'Insecure FTP Port Probe',
    protocol: 'TCP',
    destPort: 21,
    sourcePort: 60120,
    sourceIp: '203.0.113.88',
    destIp: '10.0.0.5',
    state: 'NEW'
  }
];

let acceptedCount = 0;
let droppedCount = 0;

console.log('=== Stateful Firewall Rule Chain Evaluation ===\\n');
packets.forEach((pkt, index) => {
  const result = firewall.evaluatePacket(pkt);
  if (result.verdict === 'ACCEPT') {
    acceptedCount++;
    console.log(\`[\${index + 1}] ACCEPT [✓]: \${pkt.name} (\${pkt.protocol} port \${pkt.destPort}, State: \${result.state})\`);
    console.log(\`    Rule:   \${result.rule}\`);
    console.log(\`    Reason: \${result.reason}\\n\`);
  } else {
    droppedCount++;
    console.log(\`[\${index + 1}] DROP   [✗]: \${pkt.name} (\${pkt.protocol} port \${pkt.destPort}, State: \${result.state})\`);
    console.log(\`    Rule:   \${result.rule}\`);
    console.log(\`    Reason: \${result.reason}\\n\`);
  }
});

console.log('=== Stateful Firewall Audit Summary ===');
console.log('Total Packets Inspected: ', packets.length);
console.log('Accepted Packets (Pass): ', acceptedCount);
console.log('Dropped Packets (Block): ', droppedCount);`,
      caption: {
        en: 'The stateful firewall processes 5 incoming packets: 4 are accepted (including return traffic on tracked port 49152) and 1 unauthorized FTP probe is dropped.',
        bn: 'স্টেটফুল ফায়ারওয়ালটি ৫ টি আগত প্যাকেট প্রসেস করে: ৪ টি গৃহীত হয় (ট্র্যাক করা পোর্ট ৪৯১৫২-র ফিরতি ট্রাফিকসহ) এবং ১ টি অননুমোদিত এফটিপি অনুসন্ধান বাতিল হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Rule Shadowing: Why Rule Order Determines Firewall Security',
        bn: 'রুল শ্যাডোয়িং: কেন নিয়মের ক্রম ফায়ারওয়ালের নিরাপত্তা নির্ধারণ করে'
      },
      text: {
        en: 'Firewalls evaluate rule chains using first-match semantics. A dangerous configuration mistake is "Rule Shadowing": if a broad allow rule (e.g. ACCEPT all traffic from 10.0.0.0/8) is placed before a restrictive drop rule (e.g. DROP traffic from suspicious host 10.0.0.99), the drop rule will never execute because the broad allow rule matches first! Always place specific, restrictive rules higher in the chain than broad catch-all rules.',
        bn: 'ফায়ারওয়ালগুলো ফার্স্ট-ম্যাচ সেমান্টিক্সে রুল চেইন মূল্যায়ন করে। একটি বিপজ্জনক ভুল হলো "রুল শ্যাডোয়িং": যদি একটি বিস্তৃত অনুমোদনের নিয়ম (যেমন 10.0.0.0/8 থেকে আসা সব ট্রাফিক ACCEPT) কোনো কঠোর ড্রপ নিয়মের (যেমন সন্দেহভাজন 10.0.0.99 ড্রপ) ওপরে রাখা হয়, তবে ড্রপ নিয়মটি কখনোই কাজ করবে না কারণ ওপরের নিয়মটি আগেই মিলে যাবে! সর্বদা নির্দিষ্ট ও কঠোর নিয়মগুলোকে চেইনের ওপরের দিকে এবং সাধারণ নিয়মগুলোকে নিচের দিকে রাখুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-fw-ex-1',
      kind: 'predict',
      topic: 'accepted-packets-count',
      question: {
        en: 'Out of the 5 network packets evaluated by the stateful firewall, how many packets were accepted and permitted through the rule chain? (4). Type the number.',
        bn: 'স্টেটফুল ফায়ারওয়ালে মূল্যায়িত ৫ টি নেটওয়ার্ক প্যাকেটের মধ্যে সর্বমোট কয়টি প্যাকেট রুল চেইনের মাধ্যমে গৃহীত ও অনুমোদিত হয়েছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 packets were accepted.',
        bn: 'ঠিক ৪ টি প্যাকেট গৃহীত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 5 packets, 4 were accepted: HTTP (80), HTTPS (443), DNS (53), and the return traffic on tracked ephemeral port 49152.',
        bn: '৫ টির মধ্যে ৪ টি গৃহীত হয়েছিল: HTTP (৮০), HTTPS (৪৪৩), DNS (৫৩) এবং ট্র্যাক করা সেশনের ফিরতি পোর্ট ৪৯১৫২।'
      },
    },
    {
      id: 'netsec-fw-ex-2',
      kind: 'mcq',
      topic: 'conntrack-return-traffic-advantage',
      question: {
        en: 'How does connection tracking (conntrack) in stateful firewalls eliminate the vulnerability of open ephemeral ports?',
        bn: 'স্টেটফুল ফায়ারওয়ালে কানেকশন ট্র্যাকিং (conntrack) কীভাবে উন্মুক্ত এফেমারাল পোর্টের দুর্বলতা দূর করে?'
      },
      options: [
        {
          en: 'It dynamically admits incoming return packets on high-numbered ports only when they match an existing, active outbound session recorded in the conntrack table, keeping all unsolicited ports closed',
          bn: 'এটি কেবল তখনই উচ্চ-নম্বরযুক্ত পোর্টের ফিরতি প্যাকেট প্রবেশ করতে দেয় যখন তা conntrack টেবিলে থাকা বিদ্যমান সক্রিয় সেশনের সাথে মিলে যায়, ফলে বাইরের অনাকাঙ্ক্ষিত সমস্ত পোর্ট চিরতরে বন্ধ থাকে',
        },
        {
          en: 'It accelerates hard drive reading speeds by fifty percent',
          bn: 'এটি হার্ডড্রাইভের ডেটা পড়ার গতি পঞ্চাশ শতাংশ বৃদ্ধি করে',
        },
        {
          en: 'It changes the screen resolution of computer monitors automatically',
          bn: 'এটি কম্পিউটার মনিটরের স্ক্রিন রেজোলিউশন নিজে থেকেই পরিবর্তন করে দেয়',
        },
        {
          en: 'It forces network cables to transmit data only during sunny days',
          bn: 'এটি ইন্টারনেটের তারকে কেবল রৌদ্রোজ্জ্বল দিনে ডেটা পরিবহন করতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Conntrack remembers outbound connections, so return packets pass without open ports.',
        bn: 'Conntrack বহির্গামী সেশন মনে রাখে, তাই পোর্ট খোলা না রেখেই ফিরতি প্যাকেট প্রবেশ করতে পারে।'
      },
      explanation: {
        en: 'Stateless firewalls must leave ports 1024-65535 open for return packets. Stateful firewalls close all unsolicited ports, admitting return traffic dynamically.',
        bn: 'স্টেটলেস ফায়ারওয়ালকে ফিরতি প্যাকেটের জন্য বিশাল পোর্ট রেঞ্জ খোলা রাখতে হয়। স্টেটফুল ফায়ারওয়াল তা বন্ধ রেখে কেবল ট্র্যাক করা প্যাকেট ঢুকতে দেয়।'
      },
    },
    {
      id: 'netsec-fw-ex-3',
      kind: 'mcq',
      topic: 'rule-order-first-match',
      question: {
        en: 'Why is placing the "ACCEPT state ESTABLISHED,RELATED" rule at the very top of a firewall rule chain an industry best practice?',
        bn: 'ফায়ারওয়াল রুল চেইনের একেবারে শীর্ষে "ACCEPT state ESTABLISHED,RELATED" নিয়মটি রাখা কেন একটি বিশ্বস্ত সেরা প্র্যাকটিস?'
      },
      options: [
        {
          en: 'Because established connections represent over 95% of ongoing network packet volume; matching them at rule 1 avoids evaluating dozens of subsequent rules, drastically reducing CPU processing overhead',
          bn: 'কারণ চলমান নেটওয়ার্ক ট্রাফিকের ৯৫% এরও বেশি প্যাকেট থাকে প্রতিষ্ঠিত সেশনের; প্রথম নিয়মেই এগুলো মিলে যাওয়ায় পরবর্তী নিয়মগুলো আর পরীক্ষা করতে হয় না, যা প্রসেসরের কাজের চাপ বহুগুণ কমিয়ে দেয়',
        },
        {
          en: 'Because the rule only works if written on line number one',
          bn: 'কারণ নিয়মটি কেবল এক নম্বর লাইনে লিখলেই কাজ করতে পারে',
        },
        {
          en: 'Because it cools down the physical temperature of the server chassis',
          bn: 'কারণ এটি সার্ভারের বডির শারীরিক তাপমাত্রা কমিয়ে দিতে সাহায্য করে',
        },
        {
          en: 'Because it doubles the memory capacity of the firewall router',
          bn: 'কারণ এটি ফায়ারওয়াল রাউটারের মেমোরি ক্ষমতা দ্বিগুণ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: '95% of packets are established traffic; matching them first saves CPU cycles.',
        bn: '৯৫% প্যাকেটই চলমান সেশনের; প্রথমে এগুলো মিলিয়ে নিলে প্রসেসরের শক্তি বাঁচে।'
      },
      explanation: {
        en: 'In high-throughput environments processing millions of packets per second, matching ESTABLISHED traffic at rule 1 maximizes packet forwarding throughput.',
        bn: 'প্রতি সেকেন্ডে লাখ লাখ প্যাকেট প্রসেস করার সময় এক নম্বর রুলে ESTABLISHED ট্রাফিক ফিল্টার করলে ফায়ারওয়ালের গতি সর্বোচ্চ থাকে।'
      },
    },
    {
      id: 'netsec-fw-ex-4',
      kind: 'predict',
      topic: 'dropped-packets-count',
      question: {
        en: 'How many of the 5 evaluated incoming network packets were dropped by the stateful firewall due to matching no permit rules? (1). Type the number.',
        bn: 'মূল্যায়িত ৫ টি আগত নেটওয়ার্ক প্যাকেটের মধ্যে সর্বমোট কয়টি প্যাকেট কোনো অনুমোদিত নিয়মে না মেলায় স্টেটফুল ফায়ারওয়াল দ্বারা বাতিল হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Exactly 1 unauthorized FTP probe was dropped.',
        bn: 'ঠিক ১ টি অননুমোদিত এফটিপি অনুসন্ধান বাতিল হয়েছিল।'
      },
      explanation: {
        en: 'The unauthorized FTP probe targeting port 21 was not present in the conntrack table and had no allow rule, so it was dropped.',
        bn: 'পোর্ট ২১-এ আসা অননুমোদিত এফটিপি প্যাকেটটি conntrack টেবিলে ছিল না এবং কোনো অনুমোদিত নিয়মও পায়নি, তাই ড্রপ হয়।'
      },
    },
  ],
  quiz: {
    id: 'firewalls-basics-quiz',
    title: {
      en: 'Stateful vs Stateless Firewalls Architecture Quiz',
      bn: 'স্টেটফুল বনাম স্টেটলেস ফায়ারওয়াল আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'netsec-fw-qz-1',
        kind: 'mcq',
        topic: 'conntrack-table-exhaustion',
        question: {
          en: 'What is a "Conntrack Table Exhaustion" attack (such as a massive SYN flood), and how does it threaten a stateful firewall?',
          bn: '"কানেকশন ট্র্যাকিং টেবিল এক্সহশন" (Conntrack Table Exhaustion) আক্রমণ কী এবং এটি কীভাবে স্টেটফুল ফায়ারওয়ালের জন্য হুমকি তৈরি করে?'
        },
        options: [
          {
            en: 'An attacker floods the firewall with millions of spoofed TCP SYN packets, filling up the finite memory allocated for the conntrack table and causing the firewall to drop legitimate new connections',
            bn: 'আক্রমণকারী লাখ লাখ ভুয়া টিসিপি সিন (SYN) প্যাকেট পাঠিয়ে conntrack টেবিলের জন্য নির্ধারিত মেমোরি সম্পূর্ণ ভরিয়ে ফেলে, যার ফলে ফায়ারওয়াল নতুন বৈধ সংযোগ গ্রহণ করতে না পেরে ড্রপ করতে থাকে',
          },
          {
            en: 'An attacker steals the physical power cable of the datacenter router',
            bn: 'আক্রমণকারী ডেটা সেন্টার রাউটারের আসল বৈদ্যুতিক তার চুরি করে নিয়ে যায়',
          },
          {
            en: 'An attack that deletes all text documents stored on office laptops',
            bn: 'এমন একটি আক্রমণ যা অফিসের ল্যাপটপে থাকা সমস্ত টেক্সট ফাইল মুছে ফেলে',
          },
          {
            en: 'An attack that forces computer keyboards to type random numbers',
            bn: 'এমন একটি আক্রমণ যা কিবোর্ড থেকে এলোমেলো সংখ্যা টাইপ হতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Flooding SYN packets fills the finite state table, denying new connections.',
          bn: 'সিন ফ্লাড মেমোরির টেবিল ভরিয়ে ফেলে নতুন সংযোগ আটকে দেয়।'
        },
        explanation: {
          en: 'Because state tracking consumes RAM per connection, high-volume floods can exhaust table limits. Engineers mitigate this using SYN cookies (syncookies) and stateless edge scrubbing.',
          bn: 'যেহেতু প্রতিটি কানেকশন ট্র্যাকিংয়ে মেমোরি খরচ হয়, তাই সিন ফ্লাড টেবিল উপচে ফেলে। সিন কুকি (syncookies) ব্যবহার করে এই বিপদ সামলানো হয়।'
        },
      },
      {
        id: 'netsec-fw-qz-2',
        kind: 'mcq',
        topic: 'syncookies-defense',
        question: {
          en: 'How do TCP SYN Cookies protect stateful servers and firewalls against SYN flood denial-of-service attacks?',
          bn: 'টিসিপি সিন কুকি (TCP SYN Cookies) কীভাবে সিন ফ্লাড ডিনায়েল-অব-সার্ভিস আক্রমণ থেকে সার্ভার ও ফায়ারওয়ালকে রক্ষা করে?'
        },
        options: [
          {
            en: 'Instead of allocating state memory upon receiving a SYN packet, the server encodes the connection state cryptographically into the Initial Sequence Number (ISN) of the SYN-ACK, allocating memory only after a valid ACK is returned',
            bn: 'সিন (SYN) প্যাকেট আসার সাথে সাথে মেমোরি বরাদ্দ না করে সার্ভার কানেকশন স্টেটকে এনকোড করে সিন-অ্যাক (SYN-ACK) এর ইনিশিয়াল সিকোয়েন্স নম্বরে (ISN) পাঠিয়ে দেয়, এবং কেবল তখনই মেমোরি দেয় যখন ক্লায়েন্ট সঠিক ACK ফেরত পাঠায়',
          },
          {
            en: 'By baking edible chocolate cookies for system administrators',
            bn: 'সিস্টেম প্রশাসকদের জন্য সুস্বাদু চকোলেট কুকি তৈরি করার মাধ্যমে',
          },
          {
            en: 'By blocking all network traffic worldwide for twenty-four hours',
            bn: 'চব্বিশ ঘণ্টার জন্য সারা বিশ্বের সমস্ত নেটওয়ার্ক ট্রাফিক বন্ধ করে দেওয়ার মাধ্যমে',
          },
          {
            en: 'By slowing down server cooling fans during attack floods',
            bn: 'আক্রমণ চলাকালীন সার্ভারের কুলিং ফ্যানের গতি কমিয়ে দেওয়ার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SYN cookies avoid allocating RAM until the 3-way handshake completes with an ACK.',
          bn: 'সিন কুকি ক্লায়েন্টের চূড়ান্ত ACK না আসা পর্যন্ত কোনো মেমোরি বরাদ্দ করে না।'
        },
        explanation: {
          en: 'SYN cookies allow servers to handle millions of spoofed SYN packets without exhausting conntrack memory, maintaining availability for real users.',
          bn: 'সিন কুকি মেমোরি খরচ না করেই লাখ লাখ ভুয়া সিন প্যাকেট সামলাতে পারে, ফলে আসল ব্যবহারকারীরা সংযোগ পেতে পারেন।'
        },
      },
      {
        id: 'netsec-fw-qz-3',
        kind: 'mcq',
        topic: 'iptables-vs-nftables',
        question: {
          en: 'Why has "nftables" replaced legacy "iptables" as the modern packet classification framework in modern Linux kernels?',
          bn: 'আধুনিক লিনাক্স কার্নেলে প্যাকেট ক্লাসিফিকেশনের ক্ষেত্রে কেন পুরানো "iptables" এর স্থান দখল করেছে আধুনিক "nftables"?'
        },
        options: [
          {
            en: 'nftables unifies IPv4, IPv6, ARP, and bridging into a single framework with a compact bytecode virtual machine, eliminating redundant rule evaluations and providing atomic rule set updates',
            bn: 'nftables একটি একক কাঠামোর মধ্যে IPv4, IPv6, ARP এবং ব্রিজ ফিল্টারিং একত্রিত করে একটি হালকা বাইটকোট ভার্চুয়াল মেশিন দিয়ে চালায়, যা পুনরাবৃত্তিমূলক চেকিং দূর করে এবং এক নিমেষে সম্পূর্ণ রুলসেট আপডেট করে',
          },
          {
            en: 'Because iptables was banned by international law in 2020',
            bn: 'কারণ ২০২০ সালে আন্তর্জাতিক আইনে iptables ব্যবহার নিষিদ্ধ করা হয়েছিল',
          },
          {
            en: 'Because nftables only runs on smartphones and tablet computers',
            bn: 'কারণ nftables কেবল স্মার্টফোন ও ট্যাবলেট কম্পিউটারে চলতে পারে',
          },
          {
            en: 'Because iptables requires computer screens to have blue backgrounds',
            bn: 'কারণ iptables চালাতে কম্পিউটারের স্ক্রিনে নীল ব্যাকগ্রাউন্ড থাকা বাধ্যতামূলক',
          },
        ],
        answer: 0,
        hint: {
          en: 'nftables provides a unified VM bytecode engine and atomic rule updates.',
          bn: 'nftables একটি একক বাইটকোড ইঞ্জিন এবং একবারে রুল আপডেটের সুবিধা দেয়।'
        },
        explanation: {
          en: 'iptables required separate tools (iptables, ip6tables, arptables, ebtables). nftables consolidates all packet filtering into a unified high-performance kernel engine.',
          bn: 'iptables-এ আইপিভি৪, আইপিভি৬ এবং এআরপির জন্য আলাদা টুল দরকার হতো। nftables সবগুলোকে একটি একক উচ্চগতির কার্নেল ইঞ্জিনে একত্রিত করেছে।'
        },
      },
      {
        id: 'netsec-fw-qz-4',
        kind: 'mcq',
        topic: 'application-layer-gateway-alg',
        question: {
          en: 'What is the role of an Application Layer Gateway (ALG) helper in stateful network firewalls?',
          bn: 'স্টেটফুল নেটওয়ার্ক ফায়ারওয়ালে অ্যাপ্লিকেশন লেয়ার গেটওয়ে (ALG) হেল্পারের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It inspects multi-port application protocols (like FTP or SIP) that negotiate secondary dynamic data ports inside payload text, dynamically adding RELATED conntrack rules to permit the data channels',
            bn: 'এটি মাল্টি-পোর্ট প্রোটোকল (যেমন FTP বা SIP) পর্যবেক্ষণ করে যা পেলোডের ভেতরে দ্বিতীয় ডায়নামিক ডাটা পোর্টের সিদ্ধান্ত নেয়, এবং স্বয়ংক্রিয়ভাবে RELATED রুল তৈরি করে সেই সেকেন্ডারি চ্যানেল অনুমোদন করে',
          },
          {
            en: 'It changes the language of the operating system to German',
            bn: 'এটি অপারেটিং সিস্টেমের ভাষা জার্মান ভাষায় রূপান্তর করে দেয়',
          },
          {
            en: 'It increases the physical length of ethernet cables by five meters',
            bn: 'এটি ইথারনেট তারের শারীরিক দৈর্ঘ্য পাঁচ মিটার পর্যন্ত বাড়িয়ে দেয়',
          },
          {
            en: 'It shuts down database servers whenever an email is sent',
            bn: 'কোনো ইমেইল পাঠানো মাত্রই এটি ডাটাবেজ সার্ভার বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'ALGs dynamically open related ports for protocols like FTP that negotiate secondary channels.',
          bn: 'ALG এফটিপির মতো জটিল প্রোটোকলের জন্য গতিশীলভাবে সেকেন্ডারি ডাটা পোর্ট খুলে দেয়।'
        },
        explanation: {
          en: 'FTP control traffic is on port 21, but data transfers occur on negotiated ephemeral ports. ALGs read the PORT/PASV command and add temporary RELATED rules to conntrack.',
          bn: 'এফটিপি পোর্ট ২১-এ নিয়ন্ত্রণ রাখে কিন্তু ডেটা পাঠায় অন্য পোর্টে। ALG সেই কমান্ড পড়ে নিজে থেকেই সাময়িক RELATED রুল যোগ করে।'
        },
      },
    ],
  },
  next: {
    slug: 'vpns-tunnels',
    title: {
      en: 'VPN Architectures: IPsec, OpenVPN & WireGuard Cryptokey Routing',
      bn: 'ভিপিএন আর্কিটেকচার: আইপিসেক, ওপেনভিপিএন এবং ওয়্যারগার্ড ক্রিপ্টোকি রাউটিং'
    },
  },
};
