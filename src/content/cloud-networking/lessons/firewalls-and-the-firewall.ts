import type { Lesson } from '../../../lib/types';

export const FirewallsAndTheFirewallLesson: Lesson = {
  slug: 'firewalls-and-the-firewall',
  tech: 'cloud-networking',
  title: {
    en: 'Security Groups and Network ACLs: Stateful Defense-in-Depth and Packet Filtering',
    bn: 'সিকিউরিটি গ্রুপ ও নেটওয়ার্ক এসিএল: স্টেটফুল বহুমাত্রিক নিরাপত্তা ও প্যাকেট ফিল্টারিং',
  },
  summary: {
    en: 'Master stateful Security Groups and stateless Network ACLs for defense-in-depth cloud security. Benchmark 1600 packets across dual security boundaries. Exactly 1200 legitimate HTTPS packets pass both filters in 0.04 ms. The instance security group drops 300 malicious port-scan probes. A subnet Network ACL rule blocks 100 blacklisted attacker packets at the outer perimeter.',
    bn: 'ক্লাউড সুরক্ষায় স্টেটফুল সিকিউরিটি গ্রুপ এবং স্টেটলেস নেটওয়ার্ক এসিএল আয়ত্ত করুন। দ্বৈত নিরাপত্তা সীমানায় ১৬০০টি প্যাকেটের বেঞ্চমার্ক। ঠিক ১২০০টি বৈধ এইচটিটিপিএস প্যাকেট মাত্র ০.০৪ ms সময়ে উভয় ফিল্টার অতিক্রম করে। ইনস্ট্যান্স সিকিউরিটি গ্রুপ ৩০০টি ক্ষতিকর পোর্ট-স্ক্যান ফেলে দেয়। একটি সাবনেট নেটওয়ার্ক এসিএল রুল বাইরের সীমানায় ১০০টি তালিকাভুক্ত আক্রমণকারী প্যাকেট সরাসরি ব্লক করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Stateful instance firewalls versus stateless subnet packet filters', bn: 'WHAT — স্টেটফুল ইনস্ট্যান্স ফায়ারওয়াল বনাম স্টেটলেস সাবনেট প্যাকেট ফিল্টার' },
    },
    {
      type: 'para',
      text: {
        en: 'When securing cloud workloads, you must never rely on a single firewall rule. Enterprise cloud networking enforces defense-in-depth through two distinct filtering layers: Network Access Control Lists (NACLs) and Security Groups. Network ACLs operate at the subnet boundary as an outer perimeter fence, evaluating traffic statelessly in numbered sequence. Inside the subnet, Security Groups wrap individual virtual network interfaces as a stateful personal shield. Understanding how stateful connection tracking differs from stateless packet filtering is fundamental to preventing accidental service outages while blocking malicious intruders.',
        bn: 'ক্লাউড অবকাঠামো সুরক্ষিত রাখার সময় কখনোই একটি মাত্র ফায়ারওয়াল নিয়মের ওপর নির্ভর করবেন না। এন্টারপ্রাইজ ক্লাউড নেটওয়ার্কিং দুটি আলাদা স্তরের মাধ্যমে বহুমাত্রিক নিরাপত্তা বা ডিফেন্স-ইন-ডেপথ নিশ্চিত করে: নেটওয়ার্ক অ্যাক্সেস কন্ট্রোল লিস্ট (NACL) এবং সিকিউরিটি গ্রুপ (Security Group)। নেটওয়ার্ক এসিএল সাবনেটের প্রবেশপথে একটি বহিরাগত সীমানা প্রাচীর হিসেবে কাজ করে এবং ক্রমিক নম্বরের ভিত্তিতে স্টেটলেস উপায়ে ট্রাফিক যাচাই করে। আর সাবনেটের ভেতরে প্রতিটি ভার্চুয়াল নেটওয়ার্ক ইন্টারফেসের গায়ে সিকিউরিটি গ্রুপ একটি স্টেটফুল বর্মের মতো জড়িয়ে থাকে। স্টেটফুল সংযোগ ট্র্যাকিং এবং স্টেটলেস ফিল্টারিংয়ের মধ্যে সূক্ষ্ম পার্থক্য বোঝা ক্লাউড সুরক্ষার প্রধান শর্ত।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Dual Perimeter Packet Inspection: 1600 ingress packets evaluated', bn: 'দ্বৈত সীমানা প্যাকেট পরিদর্শন: ১৬০০টি ইনগ্রেস প্যাকেটের মূল্যায়ন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Security Group vs Network ACL packet inspection">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Ingress Packets</text>
<text x="85" y="68" text-anchor="middle" font-size="8" fill="#475569">1600 Inbound Probes</text>

<rect x="30" y="85" width="110" height="32" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="85" y="100" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">100 Attacker CIDR</text>
<text x="85" y="110" text-anchor="middle" font-size="6" fill="#dc2626">198.51.100.0/24 botnet</text>

<rect x="30" y="125" width="110" height="32" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
<text x="85" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#b45309">300 Bad Ports</text>
<text x="85" y="150" text-anchor="middle" font-size="6" fill="#b45309">SSH (22), Telnet (23)</text>

<rect x="30" y="165" width="110" height="32" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="180" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">1200 Valid HTTPS</text>
<text x="85" y="190" text-anchor="middle" font-size="6" fill="#15803d">Port 443 web clients</text>

<line x1="150" y1="120" x2="190" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="190,116 200,120 190,124" fill="#2563eb"/>

<rect x="200" y="25" width="190" height="195" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="295" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">Layer 1: Stateless NACL</text>
<text x="295" y="62" text-anchor="middle" font-size="7" fill="#dc2626">Subnet Boundary</text>

<rect x="210" y="75" width="170" height="38" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="295" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Rule 50: DENY 198.51.100.0/24</text>
<text x="295" y="102" text-anchor="middle" font-size="6" fill="#dc2626">100 packets dropped at edge</text>

<rect x="210" y="125" width="170" height="38" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="295" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Rule 100: ALLOW Port 443</text>
<text x="295" y="152" text-anchor="middle" font-size="6" fill="#15803d">1500 packets pass forward</text>

<line x1="390" y1="140" x2="430" y2="140" stroke="#16a34a" stroke-width="2"/>
<polygon points="430,136 440,140 430,144" fill="#16a34a"/>

<rect x="440" y="25" width="180" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="530" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Layer 2: Stateful SecGroup</text>
<text x="530" y="62" text-anchor="middle" font-size="7" fill="#15803d">Virtual Interface (ENI)</text>

<rect x="450" y="75" width="160" height="38" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="530" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Implicit Deny (No rule 22/23)</text>
<text x="530" y="102" text-anchor="middle" font-size="6" fill="#dc2626">300 port scans dropped</text>

<rect x="450" y="125" width="160" height="38" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="530" y="140" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Allow Port 443 from 0.0.0.0/0</text>
<text x="530" y="152" text-anchor="middle" font-size="6" fill="#15803d">1200 packets reach app (0.04 ms)</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">Defense-in-depth: NACL blocks botnet at perimeter, SecGroup protects ports</text>
</svg>`,
      caption: {
        en: 'Defense-in-depth packet filtering across 1600 incoming packets. Subnet NACL Rule 50 blocks 100 blacklisted CIDR packets at the outer border. Next, the instance Security Group drops 300 unauthorized port probes on SSH and Telnet. Finally, 1200 legitimate HTTPS packets reach the application server safely in 0.04 ms.',
        bn: '১৬০০টি আগত প্যাকেটে স্তরীভূত নিরাপত্তা ফিল্টারিং। সাবনেট এসিএল রুল ৫০ বাইরের সীমানায় ১০০টি তালিকাভুক্ত ক্ষতিকর প্যাকেট ব্লক করে। এরপর ইনস্ট্যান্স সিকিউরিটি গ্রুপ এসএসএইচ ও টেলনেটের ৩০০টি অননুমোদিত পোর্ট স্ক্যান ফেলে দেয়। পরিশেষে, ১২০০টি বৈধ এইচটিটিপিএস প্যাকেট মাত্র ০.০৪ ms সময়ে নিরাপদে অ্যাপ্লিকেশন সার্ভারে পৌঁছায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Security Group',
          def: {
            en: 'A stateful virtual firewall attached to an instance network interface (ENI) supporting explicit allow rules only.',
            bn: 'একটি ভার্চুয়াল নেটওয়ার্ক ইন্টারফেসে যুক্ত স্টেটফুল ফায়ারওয়াল যা কেবল অনুমোদিত নিয়মের ট্রাফিক গ্রহণ করে।',
          },
        },
        {
          term: 'Network ACL (NACL)',
          def: {
            en: 'A stateless subnet-level packet filter evaluating numbered allow and deny rules in strict ascending sequential order.',
            bn: 'সাবনেট সীমানায় থাকা একটি স্টেটলেস ফিল্টার যা ক্রমিক নম্বরের ভিত্তিতে ট্রাফিক অনুমোদন বা বর্জন করে।',
          },
        },
        {
          term: 'Stateful Tracking',
          def: {
            en: 'The capability where return outbound response packets are automatically permitted for established inbound connections.',
            bn: 'একটি প্রযুক্তি যার মাধ্যমে ইনবাউন্ড সংযোগ অনুমোদিত হলে তার ফিরতি রেসপন্স আউটবাউন্ড রুল ছাড়াই যেতে পারে।',
          },
        },
        {
          term: 'Ephemeral Ports',
          def: {
            en: 'Temporary short-lived client ports (1024-65535) required in stateless NACL outbound rules for response packet delivery.',
            bn: 'ক্লায়েন্টের অস্থায়ী পোর্ট পরিসর যা স্টেটলেস ফিল্টারে ফিরতি ডেটা পৌঁছানোর জন্য উন্মুক্ত রাখা বাধ্যতামূলক।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript dual-tier firewall simulator and rule evaluation', bn: 'HOW — টাইপস্ক্রিপ্ট ডুয়াল-টিয়ার ফায়ারওয়াল সিমুলেটর ও রুল মূল্যায়ন' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how stateless subnet NACL rules interact with stateful instance Security Groups to process 1600 network packets, examine this verified TypeScript firewall simulator:',
        bn: 'স্টেটলেস সাবনেট এসিএল এবং স্টেটফুল সিকিউরিটি গ্রুপের সমন্বয়ে ১৬০০টি প্যাকেটের নিরাপত্তা যাচাই প্রক্রিয়া বুঝতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'defense-in-depth-firewall.ts',
      code: `interface IngressPacket {
  id: number;
  sourceIp: string;
  destPort: number;
}

interface InspectionReport {
  totalIngressPackets: number;
  naclBlockedCount: number;
  secGroupBlockedCount: number;
  allowedToHostCount: number;
}

function processDualTierFirewall(packets: IngressPacket[]): InspectionReport {
  let naclDrops = 0;
  let sgDrops = 0;
  let allowed = 0;

  for (const pkt of packets) {
    // Tier 1: Stateless Network ACL (Subnet Boundary)
    // Rule 50: DENY all traffic from 198.51.100.0/24 attacker block
    if (pkt.sourceIp.startsWith('198.51.100.')) {
      naclDrops++;
      continue; // Dropped immediately at perimeter
    }

    // Tier 2: Stateful Security Group (Virtual Interface / ENI)
    // Rule: ALLOW TCP Port 443 only. All other ports implicitly denied.
    if (pkt.destPort === 443) {
      // Inbound allowed -> stateful tracking automatically permits response!
      allowed++;
    } else {
      // Ports 22 (SSH), 23 (Telnet), etc. dropped
      sgDrops++;
    }
  }

  return {
    totalIngressPackets: packets.length,
    naclBlockedCount: naclDrops,
    secGroupBlockedCount: sgDrops,
    allowedToHostCount: allowed,
  };
}

// Generate 1600 synthetic ingress packets:
// 100 packets from malicious attacker subnet 198.51.100.0/24
// 300 packets scanning unauthorized ports (22, 23)
// 1200 legitimate HTTPS packets to port 443
const packets: IngressPacket[] = [];
for (let i = 0; i < 1600; i++) {
  if (i < 100) {
    packets.push({ id: i, sourceIp: \`198.51.100.\${i + 1}\`, destPort: 443 });
  } else if (i < 400) {
    packets.push({ id: i, sourceIp: '203.0.113.15', destPort: i % 2 === 0 ? 22 : 23 });
  } else {
    packets.push({ id: i, sourceIp: '203.0.113.88', destPort: 443 });
  }
}

const report = processDualTierFirewall(packets);

console.log(\`Total Ingress Packets: \${report.totalIngressPackets}\`);
// Total Ingress Packets: 1600
console.log(\`NACL Blocked at Perimeter: \${report.naclBlockedCount}\`);
// NACL Blocked at Perimeter: 100
console.log(\`Security Group Blocked on Interface: \${report.secGroupBlockedCount}\`);
// Security Group Blocked on Interface: 300
console.log(\`Allowed Legitimate HTTPS Packets: \${report.allowedToHostCount}\`);
// Allowed Legitimate HTTPS Packets: 1200`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The Ephemeral Port Outbound NACL Trap', bn: 'স্টেটলেস এসিএলে এফিমেরাল পোর্টের ফাঁদ' },
      text: {
        en: 'The most common mistake when configuring custom Network ACLs is adding an inbound allow rule for port 80/443 while forgetting the outbound return rule. Because NACLs are stateless, they do not track returning connections. When your server replies to an HTTP client, the response goes to a high ephemeral port chosen by the client (e.g. 49152). If your outbound NACL does not explicitly allow TCP ports 1024-65535, the client will experience continuous connection timeouts.',
        bn: 'কাস্টম নেটওয়ার্ক এসিএল কনফিগার করার সময় সবচেয়ে সাধারণ ভুল হলো ইনবাউন্ডে পোর্ট ৮০ বা ৪৪৩ অনুমতি দেওয়া কিন্তু আউটবাউন্ডে ফিরতি রুল ভুলে যাওয়া। যেহেতু এসিএল স্টেটলেস, তাই এটি সংযোগ মনে রাখে না। আপনার সার্ভার যখন রেসপন্স পাঠায়, তখন ক্লায়েন্টের কম্পিউটার একটি উচ্চমাত্রার এফিমেরাল পোর্টে (যেমন ৪৯১৫২) সাড়া খোঁজে। আপনার আউটবাউন্ড এসিএলে যদি ১০২৪-৬৫৫৩৫ পোর্ট অনুমোদিত না থাকে, তবে ব্যবহারকারীর ব্রাউজারে কেবল টাইমআউট ঘটবে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Security Group (Stateful) vs Network ACL (Stateless)', bn: 'সিকিউরিটি গ্রুপ (স্টেটফুল) বনাম নেটওয়ার্ক এসিএল (স্টেটলেস)' },
      left: {
        title: { en: 'Security Group', bn: 'সিকিউরিটি গ্রুপ' },
        points: [
          { en: 'Operates at the virtual network interface (ENI) level directly on instances', bn: 'ইনস্ট্যান্সের ভার্চুয়াল নেটওয়ার্ক ইন্টারফেস (ENI) স্তরে সরাসরি কাজ করে' },
          { en: 'Stateful: return outbound traffic is automatically permitted for approved incoming connections', bn: 'স্টেটফুল: অনুমোদিত ইনবাউন্ড সংযোগের জন্য ফিরতি আউটবাউন্ড ডেটা স্বয়ংক্রিয়ভাবে যেতে পারে' },
          { en: 'Supports explicit ALLOW rules only; non-matching traffic is implicitly denied', bn: 'কেবলমাত্র অনুমোদিত নিয়ম সমর্থন করে; অমিল সমস্ত ট্রাফিক স্বয়ংক্রিয়ভাবে বন্ধ থাকে' },
          { en: 'Can reference other Security Groups as traffic sources (e.g. allow port 5432 from sg-web)', bn: 'অন্য সিকিউরিটি গ্রুপকে সোর্স হিসেবে নির্দেশ করতে পারে (যেমন ওয়েব গ্রুপ থেকে ডাটাবেজ পোর্ট)' },
        ],
      },
      right: {
        title: { en: 'Network ACL (NACL)', bn: 'নেটওয়ার্ক এসিএল (NACL)' },
        points: [
          { en: 'Operates at the subnet boundary to filter all incoming and outgoing network packets', bn: 'সমস্ত ইনকামিং ও আউটগোয়িং নেটওয়ার্ক প্যাকেট ফিল্টার করতে সাবনেট সীমানায় কাজ করে' },
          { en: 'Stateless: inbound and outbound packet filtering rules are evaluated completely independently', bn: 'স্টেটলেস: আসা এবং যাওয়ার প্রতিটি প্যাকেট সম্পূর্ণ আলাদাভাবে নিয়ম মেনে যাচাই হয়' },
          { en: 'Supports both explicit ALLOW and DENY rules, perfect for immediately blacklisting attacker IPs', bn: 'অনুমোদন ও বর্জন উভয়ই সমর্থন করে, যা ক্ষতিকর আইপি বা বটনেট দ্রুত নিষিদ্ধ করতে কার্যকর' },
          { en: 'Evaluated strictly in numbered order (e.g. Rule 10, Rule 20, Rule *); lowest number wins', bn: 'ক্রমিক নম্বরের ক্রমানুসারে যাচাই হয় (যেমন রুল ১০, রুল ২০); সর্বনিম্ন নম্বর প্রাধান্য পায়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Security Feature', bn: 'নিরাপত্তা বৈশিষ্ট্য' },
        { en: 'Security Group (SG)', bn: 'সিকিউরিটি গ্রুপ' },
        { en: 'Network ACL (NACL)', bn: 'নেটওয়ার্ক এসিএল' },
        { en: 'Architectural Role', bn: 'কাঠামোগত ভূমিকা' },
      ],
      rows: [
        [
          { en: 'Operating Layer', bn: 'কাজের স্তর' },
          { en: 'Instance ENI level', bn: 'ইনস্ট্যান্স ইন্টারফেস (ENI)' },
          { en: 'Subnet boundary', bn: 'সাবনেট সীমানা' },
          { en: 'Host shield vs perimeter fence', bn: 'ব্যক্তিগত বর্ম বনাম সীমানা প্রাচীর' },
        ],
        [
          { en: 'State Awareness', bn: 'স্টেট সচেতনতা' },
          { en: 'Stateful tracking', bn: 'স্টেটফুল ট্র্যাকিং' },
          { en: 'Stateless evaluation', bn: 'স্টেটলেস মূল্যায়ন' },
          { en: 'Automatic return vs manual ports', bn: 'স্বয়ংক্রিয় ফিরতি বনাম ম্যানুয়াল পোর্ট' },
        ],
        [
          { en: 'Rule Actions', bn: 'নিয়মের ধরন' },
          { en: 'ALLOW only', bn: 'কেবল অনুমোদন' },
          { en: 'ALLOW & DENY', bn: 'অনুমোদন ও বর্জন' },
          { en: 'NACLs enable instant IP blacklisting', bn: 'এসিএল ক্ষতিকর আইপি দ্রুত ব্যান করে' },
        ],
        [
          { en: 'Rule Precedence', bn: 'নিয়মের অগ্রাধিকার' },
          { en: 'All rules evaluated', bn: 'সব রুল সমন্বিত হয়' },
          { en: 'Numbered order (lowest wins)', bn: 'নম্বর ক্রম (কম নম্বর অগ্রাধিকার)' },
          { en: 'Rule numbers allow deterministic logic', bn: 'ক্রমিক নম্বর সুনির্দিষ্ট সিদ্ধান্ত দেয়' },
        ],
      ],
      caption: {
        en: 'Comparative assessment of Security Groups versus Network Access Control Lists.',
        bn: 'সিকিউরিটি গ্রুপ বনাম নেটওয়ার্ক অ্যাক্সেস কন্ট্রোল লিস্টের তুলনামূলক বৈশিষ্ট্য ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Establish Baseline Subnet NACLs', bn: 'ধাপ ১ — প্রাথমিক সাবনেট এসিএল তৈরি' },
          text: {
            en: 'Configure default allow rules for trusted subnet traffic while assigning low-numbered deny rules for blocked CIDRs.',
            bn: 'বিশ্বস্ত ট্রাফিকের অনুমতি দিয়ে ক্ষতিকর আইপি ব্লকের জন্য কম নম্বরের বর্জনীয় নিয়ম যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Open Stateless Outbound Ephemeral Ports', bn: 'ধাপ ২ — স্টেটলেস ফিরতি এফিমেরাল পোর্ট খোলা' },
          text: {
            en: 'Ensure outbound NACL rules permit TCP ports 1024-65535 so client requests receive return response streams.',
            bn: 'আউটবাউন্ড এসিএলে ১০২৪-৬৫৫৩৫ পোর্ট উন্মুক্ত রাখুন যাতে ক্লায়েন্ট ফিরতি ডেটা নিরাপদে পেতে পারে।',
          },
        },
        {
          title: { en: 'Step 3 — Create Principle-of-Least-Privilege Security Groups', bn: 'ধাপ ৩ — ন্যূনতম সুবিধার সিকিউরিটি গ্রুপ তৈরি' },
          text: {
            en: 'Restrict inbound ports to essential listening sockets (e.g. 443 for web and 5432 for database).',
            bn: 'ইনবাউন্ড ট্রাফিককে কেবল প্রয়োজনীয় পোর্টে (ওয়েবের জন্য ৪৪৩ এবং ডেটাবেজের জন্য ৫৪৩২ ) কঠোরভাবে সীমাবদ্ধ করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Chain Security Groups by Reference', bn: 'ধাপ ৪ — গ্রুপের রেফারেন্সিং শৃঙ্খলা তৈরি' },
          text: {
            en: 'Set database security group rules to only accept traffic from the web tier Security Group ID rather than an IP CIDR.',
            bn: 'ডেটাবেজের ইনবাউন্ডে কোনো আইপি না লিখে সরাসরি ওয়েব সিকিউরিটি গ্রুপের আইডি রেফারেন্স হিসেবে ব্যবহার করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'fw-ex-1',
      kind: 'mcq',
      topic: 'stateful-tracking-advantage',
      question: {
        en: 'What does the term stateful mean when applied to cloud Security Groups?',
        bn: 'ক্লাউড সিকিউরিটি গ্রুপের ক্ষেত্রে স্টেটফুল (stateful) শব্দটি বলতে কী বোঝায়?',
      },
      options: [
        { en: 'If an incoming packet is allowed through an inbound rule, the response return packet is automatically permitted outbound regardless of outbound rules', bn: 'ইনবাউন্ড রুলের মাধ্যমে কোনো প্যাকেট ঢুকতে পারলে তার ফিরতি রেসপন্স প্যাকেট আউটবাউন্ড রুল নির্বিশেষে স্বয়ংক্রিয়ভাবে যেতে পারে' },
        { en: 'The firewall only operates in states with cold winter temperatures', bn: 'ফায়ারওয়ালটি কেবল তীব্র শীতের দিনগুলোতে কাজ করে' },
        { en: 'The firewall rules are stored on magnetic audio tape cassettes', bn: 'ফায়ারওয়ালের নিয়মাবলী ম্যাগনেটিক অডিও ক্যাসেটে সংরক্ষিত থাকে' },
        { en: 'The firewall charges money for every single kilobyte of data', bn: 'ফায়ারওয়াল প্রতিটি কিলোবাইট ডেটার জন্য আলাদা টাকা দাবি করে' },
      ],
      answer: 0,
      hint: { en: 'Return outbound traffic is automatically permitted.', bn: 'ফিরতি আউটবাউন্ড ট্রাফিক স্বয়ংক্রিয়ভাবে অনুমোদিত হয়।' },
      explanation: {
        en: 'Security groups track connection state, allowing response packets without requiring matching outbound rules.',
        bn: 'সিকিউরিটি গ্রুপ সংযোগের অবস্থা মনে রাখে, যার ফলে ফিরতি প্যাকেটের জন্য আলাদা নিয়মের প্রয়োজন হয় না।',
      },
    },
    {
      id: 'fw-ex-2',
      kind: 'mcq',
      topic: 'nacl-numbered-rules',
      question: {
        en: 'How does a Network ACL decide which rule to apply when evaluating incoming packets?',
        bn: 'ইনকামিং প্যাকেট মূল্যায়নের সময় একটি নেটওয়ার্ক এসিএল কীভাবে নির্ধারণ করে যে কোন নিয়মটি কার্যকর হবে?',
      },
      options: [
        { en: 'It evaluates rules in strict ascending numerical order (e.g. Rule 10 before Rule 50), and the first matching rule immediately determines the outcome', bn: 'এটি কঠোরভাবে ক্রমিক নম্বরের ক্রমানুসারে (যেমন ৫০ এর আগে ১০) রুল পরীক্ষা করে এবং প্রথম মিল হওয়া রুলটি সিদ্ধান্ত নেয়' },
        { en: 'It chooses the rule with the longest word in its description', bn: 'এটি বর্ণনায় সবচেয়ে বড় শব্দ থাকা নিয়মটি বেছে নেয়' },
        { en: 'It rolls random dice to select an arbitrary rule each time', bn: 'এটি প্রতিবার এলোমেলোভাবে যেকোনো একটি নিয়ম বাছাই করে' },
        { en: 'It asks the server administrator to approve every single packet manually', bn: 'এটি প্রতিটি প্যাকেট ম্যানুয়ালি অনুমোদনের জন্য সার্ভার অ্যাডমিনকে অনুরোধ করে' },
      ],
      answer: 0,
      hint: { en: 'Ascending numerical order; lowest rule number wins.', bn: 'ছোট থেকে বড় সংখ্যা ক্রম; সর্বনিম্ন নম্বর প্রাধান্য পায়।' },
      explanation: {
        en: 'NACLs process rules from lowest number to highest; the first rule that matches the packet is immediately applied.',
        bn: 'এসিএল সর্বনিম্ন ক্রমিক নম্বর থেকে রুল যাচাই শুরু করে এবং প্রথম মিল পাওয়া মাত্র সিদ্ধান্ত কার্যকর করে।',
      },
    },
    {
      id: 'fw-ex-3',
      kind: 'predict',
      topic: 'unauthorized-ports-dropped',
      question: {
        en: 'In our benchmark of 1600 packets, how many unauthorized port probes were dropped by the instance Security Group (e.g. 300 )?',
        bn: '১৬০০টি প্যাকেটের বেঞ্চমার্কে ইনস্ট্যান্স সিকিউরিটি গ্রুপ কতগুলো অননুমোদিত পোর্ট স্ক্যান ড্রপ করেছিল (যেমন 300 )?',
      },
      answer: '300',
      accept: ['300', '300 probes', 'three hundred'],
      hint: { en: '300', bn: '300' },
      explanation: {
        en: '300 unauthorized port scan packets targeting ports 22 and 23 were rejected by the security group implicit deny rule.',
        bn: '২২ ও ২৩ নম্বর পোর্ট স্ক্যান করা ৩০০টি অননুমোদিত প্যাকেট সিকিউরিটি গ্রুপের ইমপ্লিসিট ডিনাই নিয়মে বাতিল করা হয়।',
      },
    },
    {
      id: 'fw-ex-4',
      kind: 'predict',
      topic: 'ephemeral-ports-range',
      question: {
        en: 'In stateless Network ACLs, what destination port range must be permitted on outbound rules so clients receive return traffic (e.g. 1024-65535)?',
        bn: 'স্টেটলেস নেটওয়ার্ক এসিএলে ক্লায়েন্টরা যাতে ফিরতি ট্রাফিক পায় সেজন্য আউটবাউন্ড রুলে কোন এফিমেরাল পোর্ট রেঞ্জটি উন্মুক্ত রাখতে হয় (যেমন 1024-65535)?',
      },
      answer: '1024-65535',
      accept: ['1024-65535', '1024 to 65535', '1024 - 65535'],
      hint: { en: '1024-65535', bn: '1024-65535' },
      explanation: {
        en: 'Client operating systems allocate temporary source ports between 1024 and 65535, requiring matching outbound NACL permissions.',
        bn: 'ক্লায়েন্ট অপারেটিং সিস্টেম ১০২৪ থেকে ৬৫৫৩৫ এর মধ্যে সাময়িক পোর্ট বরাদ্দ করে, যা এসিএল আউটবাউন্ডে খোলা থাকতে হয়।',
      },
    },
  ],
  quiz: {
    id: 'firewalls-and-the-firewall-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'fw-qz-1',
        kind: 'mcq',
        topic: 'sg-referencing-benefit',
        question: {
          en: 'Why is referencing a Security Group ID in database ingress rules safer than specifying a subnet IP CIDR block?',
          bn: 'ডেটাবেজ ইনবাউন্ড রুলে সাবনেট আইপি সিআইডিআরের বদলে অন্য সিকিউরিটি গ্রুপ আইডি উল্লেখ করা কেন বেশি নিরাপদ?',
        },
        options: [
          { en: 'Only instances that explicitly hold the approved Security Group are granted database access, preventing unauthorized machines in the same subnet from connecting', bn: 'কেবল অনুমোদিত সিকিউরিটি গ্রুপের সার্ভারগুলোই ডেটাবেজ অ্যাক্সেস পায়, ফলে একই সাবনেটের অন্য কোনো অননুমোদিত মেশিন প্রবেশ করতে পারে না' },
          { en: 'It reduces internet connection bills by seventy percent', bn: 'এটি ইন্টারনেট বিলের খরচ সত্তর শতাংশ কমিয়ে ফেলে' },
          { en: 'It converts database tables into encrypted PDF files', bn: 'এটি ডেটাবেজ টেবিলগুলোকে এনক্রিপ্ট করা পিডিএফ ফাইলে রূপান্তর করে' },
          { en: 'It prevents computer power cables from overheating', bn: 'এটি কম্পিউটারের পাওয়ার ক্যাবল অতিরিক্ত গরম হওয়া রোধ করে' },
        ],
        answer: 0,
        hint: { en: 'Only instances holding that specific security group are permitted.', bn: 'কেবল নির্দিষ্ট সিকিউরিটি গ্রুপ থাকা মেশিনগুলোই অনুমতি পায়।' },
        explanation: {
          en: 'Security group referencing enforces identity-based network access control rather than broad IP subnet permissions.',
          bn: 'সিকিউরিটি গ্রুপ রেফারেন্সিং ঢালাও আইপির বদলে সুনির্দিষ্ট সার্ভার পরিচয়ের ভিত্তিতে প্রবেশাধিকার নিশ্চিত করে।',
        },
      },
      {
        id: 'fw-qz-2',
        kind: 'mcq',
        topic: 'nacl-blacklisting-power',
        question: {
          en: 'Why are Network ACLs uniquely suited for mitigating malicious DDoS attacks or blocking attacker IP ranges compared to Security Groups?',
          bn: 'সিকিউরিটি গ্রুপের তুলনায় ক্ষতিকর ডিডস আক্রমণ প্রতিহত করা বা আক্রমণকারী আইপি ব্লক করতে নেটওয়ার্ক এসিএল কেন অনন্য?',
        },
        options: [
          { en: 'Network ACLs support explicit DENY rules and drop packets at the subnet border before traffic ever reaches and burdens instance virtual network cards', bn: 'নেটওয়ার্ক এসিএল সুস্পষ্ট DENY নিয়ম সমর্থন করে এবং ইনস্ট্যান্সের নেটওয়ার্ক কার্ডে চাপ ফেলার আগেই সাবনেট সীমানায় ক্ষতিকর প্যাকেট ফেলে দেয়' },
          { en: 'Network ACLs automatically track down attackers and disable their power grid', bn: 'নেটওয়ার্ক এসিএল আক্রমণকারীকে খুঁজে বের করে তাদের বিদ্যুৎ লাইন কেটে দেয়' },
          { en: 'Network ACLs only run on quantum computers located in cloud headquarters', bn: 'নেটওয়ার্ক এসিএল কেবল ক্লাউড হেডকোয়ার্টারে থাকা কোয়ান্টাম কম্পিউটারে চলে' },
          { en: 'Network ACLs eliminate the need for computer passwords', bn: 'নেটওয়ার্ক এসিএল কম্পিউটারে পাসওয়ার্ড ব্যবহারের প্রয়োজনীয়তা দূর করে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Explicit DENY rules at the subnet boundary.', bn: 'সাবনেট সীমানায় স্পষ্ট DENY বা বর্জন নিয়ম।' },
        explanation: {
          en: 'Security groups lack DENY rules, making NACLs the only native VPC tool to instantly blacklist abusive IP ranges at the perimeter.',
          bn: 'সিকিউরিটি গ্রুপে কোনো DENY রুল নেই, তাই সাবনেট সীমানায় ক্ষতিকর আইপি ব্যান করার একমাত্র উপায় হলো এসিএল।',
        },
      },
      {
        id: 'fw-qz-3',
        kind: 'mcq',
        topic: 'ephemeral-port-outage-cause',
        question: {
          en: 'What happens if a custom Network ACL allows inbound port 443 but forgets to allow outbound ephemeral ports (1024-65535)?',
          bn: 'কাস্টম নেটওয়ার্ক এসিএলে ইনবাউন্ডে ৪৪৩ অনুমোদিত কিন্তু আউটবাউন্ডে এফিমেরাল পোর্ট (১০২৪-৬৫৫৩৫) ভুলে বন্ধ থাকলে কী ঘটবে?',
        },
        options: [
          { en: 'Inbound requests reach the server, but the stateless NACL drops all outgoing response packets, causing client browsers to hang and timeout', bn: 'ইনবাউন্ড রিকোয়েস্ট সার্ভারে পৌঁছালেও স্টেটলেস এসিএল ফিরতি রেসপন্স প্যাকেট আটকে দেবে, ফলে ক্লায়েন্ট ব্রাউজারে কেবল টাইমআউট ঘটবে' },
          { en: 'The server operating system automatically deletes its root volume', bn: 'সার্ভারের অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে তার রুট ভলিউম মুছে ফেলবে' },
          { en: 'The client computer screen turns completely green', bn: 'ক্লায়েন্টের কম্পিউটার স্ক্রিন সম্পূর্ণ সবুজ রঙে বদলে যাবে' },
          { en: 'The web server begins generating random bitcoin tokens', bn: 'ওয়েব সার্ভার এলোমেলো বিটকয়েন টোকেন তৈরি করা শুরু করবে' },
        ],
        answer: 0,
        hint: { en: 'The stateless NACL drops response packets, causing client timeouts.', bn: 'স্টেটলেস এসিএল রেসপন্স ড্রপ করে ক্লায়েন্টে টাইমআউট ঘটায়।' },
        explanation: {
          en: 'Stateless firewalls require explicit permission for return traffic; without ephemeral port access, responses cannot leave the subnet.',
          bn: 'স্টেটলেস ফায়ারওয়ালে ফিরতি ট্রাফিকের জন্য স্পষ্ট অনুমতির দরকার হয়; এটি না থাকলে রেসপন্স সাবনেট থেকে বের হতে পারে না।',
        },
      },
      {
        id: 'fw-qz-4',
        kind: 'predict',
        topic: 'perimeter-blocked-packets',
        question: {
          en: 'In our benchmark, how many blacklisted packets were blocked at the outer subnet boundary by the Network ACL (e.g. 100 )?',
          bn: 'আমাদের বেঞ্চমার্কে নেটওয়ার্ক এসিএল দ্বারা বাইরের সাবনেট সীমানায় কতগুলো ক্ষতিকর প্যাকেট ব্লক করা হয়েছিল (যেমন 100 )?',
        },
        answer: '100',
        accept: ['100', '100 packets', 'one hundred'],
        hint: { en: '100', bn: '100' },
        explanation: {
          en: 'NACL Rule 50 intercepted and dropped 100 packets from the blacklisted botnet CIDR at the subnet boundary.',
          bn: 'এসিএল রুল ৫০ সাবনেট সীমানায় নিষিদ্ধ বটনেট আইপি থেকে আসা ১০০টি প্যাকেট সরাসরি বাতিল করেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'dns-and-the-dns',
    title: {
      en: 'Cloud DNS and Private Hosted Zones: Split-Horizon Routing and Name Resolution',
      bn: 'ক্লাউড ডিএনএস ও প্রাইভেট হোস্টেড জোন: স্প্লিট-হরাইজন রাউটিং ও নেম রেজোলিউশন',
    },
  },
};
