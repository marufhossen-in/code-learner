import type { Lesson } from '../../../lib/types';

export const IdsIpsLesson: Lesson = {
  slug: 'ids-ips',
  tech: 'network-security',
  title: {
    en: 'Intrusion Detection (IDS) & Prevention (IPS): Signatures & Heuristics',
    bn: 'অনুপ্রবেশ সনাক্তকরণ (IDS) ও প্রতিরোধ (IPS): সিগনেচার ও হিউরিস্টিকস'
  },
  summary: {
    en: 'Master deep packet inspection technologies across enterprise networks. Understand the critical architectural distinction between passive out-of-band Intrusion Detection Systems (IDS) that alert without blocking, and active in-line Intrusion Prevention Systems (IPS) that terminate hostile sessions in real time. Compare signature-based pattern matching (Snort and Suricata rules) with statistical anomaly detection. Inspect an executable Node.js deep packet engine evaluating 5 network events: 4 benign transactions pass peacefully, and 1 SQL injection probe is blocked with a security alarm.',
    bn: 'এন্টারপ্রাইজ নেটওয়ার্কে ডিপ প্যাকেট ইন্সপেকশন প্রযুক্তি আয়ত্ত করুন। ট্রাফিকের গতি না থামিয়ে সতর্কতা পাঠানো প্যাসিভ ইন্ট্রুশন ডিটেকশন সিস্টেম (IDS) এবং ক্ষতিকর সেশন সরাসরি বিচ্ছিন্নকারী অ্যাক্টিভ ইন-লাইন ইন্ট্রুশন প্রিভেনশন সিস্টেমের (IPS) মধ্যকার পার্থক্য বুঝুন। সিগনেচারভিত্তিক প্যাটার্ন ম্যাচিং (Snort ও Suricata রুলস) এবং স্ট্যাটিস্টিক্যাল অ্যানোমালি ডিটেকশনের তুলনা করুন। ৫ টি নেটওয়ার্ক ইভেন্ট মূল্যায়নকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৪ টি ক্ষতিকরহীন লেনদেন নিরাপদে প্রবেশ করে এবং ১ টি এসকিউএল ইনজেকশন আক্রমণ সতর্কবার্তাসহ সরাসরি ব্লক হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'ids-vs-ips-architecture',
      text: {
        en: 'Watching the Wire: Intrusion Detection (IDS) vs Intrusion Prevention (IPS)',
        bn: 'তারের ওপর নজরদারি: অনুপ্রবেশ সনাক্তকরণ (IDS) বনাম অনুপ্রবেশ প্রতিরোধ (IPS)'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Standard layer 4 firewalls only inspect packet headers (IP addresses and port numbers). If an attacker sends a malicious SQL injection exploit hidden inside legitimate HTTP port 80 traffic, a firewall permits the packet. To inspect the application payload inside network packets, organizations deploy Intrusion Detection and Prevention Systems.',
        bn: 'সাধারণ লেয়ার ৪ ফায়ারওয়াল কেবল প্যাকেট হেডার (আইপি ঠিকানা ও পোর্ট নম্বর) পরীক্ষা করে। কোনো আক্রমণকারী যদি বৈধ HTTP পোর্ট ৮০ এর ভেতর ক্ষতিকর এসকিউএল ইনজেকশন কোড লুকিয়ে পাঠায়, তবে সাধারণ ফায়ারওয়াল তা বুঝতে না পেরে ভেতরে ঢুকতে দেয়। নেটওয়ার্ক প্যাকেটের ভেতরের মূল অ্যাপ্লিকেশন ডেটা বা পেলোড পরীক্ষা করতে প্রতিষ্ঠানগুলো অনুপ্রবেশ সনাক্তকরণ ও প্রতিরোধ ব্যবস্থা ব্যবহার করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The operational distinction between IDS and IPS lies in network placement. An Intrusion Detection System (IDS) sits out-of-band, receiving mirrored network traffic via SPAN ports or hardware taps; it logs threats and notifies security analysts without affecting live traffic flow. An Intrusion Prevention System (IPS) sits directly in-line on the network wire, analyzing packets in real time and immediately dropping hostile packets or sending TCP resets (RST) to terminate attacks.',
        bn: 'IDS এবং IPS এর মধ্যে ব্যবহারিক পার্থক্য হলো নেটওয়ার্কে এদের বসার অবস্থান। ইন্ট্রুশন ডিটেকশন সিস্টেম (IDS) নেটওয়ার্কের মূল পথের বাইরে বা আউট-অব-ব্যান্ডে থাকে এবং স্প্যান পোর্টের মাধ্যমে ট্রাফিকের কপি সংগ্রহ করে; এটি কোনো বিঘ্ন না ঘটিয়ে হুমকি সনাক্ত করে অ্যানালিস্টদের সতর্কবার্তা পাঠায়। অন্যদিকে ইন্ট্রুশন প্রিভেনশন সিস্টেম (IPS) সরাসরি মূল ট্রাফিকের মাঝে বা ইন-লাইনে বসে, এবং কোনো আক্রমণ সনাক্ত হওয়া মাত্রই ক্ষতিকর প্যাকেট ড্রপ করে বা টিসিপি রিসেট পাঠিয়ে সেশন বিচ্ছিন্ন করে দেয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Signature-Based Detection',
            bn: '১. সিগনেচারভিত্তিক সনাক্তকরণ'
          },
          text: {
            en: 'Scans packet bytes against massive rule libraries of known attack patterns (like Snort or Suricata SIDs). Fast and reliable with virtually zero false positives for known CVE exploits.',
            bn: 'পরিচিত আক্রমণের বিশাল রুল লাইব্রেরির (যেমন Snort বা Suricata রুলস) সাথে প্যাকেটের বাইটগুলো মেলায়। অত্যন্ত দ্রুতগতির এবং পরিচিত দুর্বলতার ক্ষেত্রে নির্ভুল সনাক্তকরণ নিশ্চিত করে।'
          },
        },
        {
          title: {
            en: '2. Anomaly-Based Heuristic Detection',
            bn: '২. অ্যানোমালিভিত্তিক হিউরিস্টিক সনাক্তকরণ'
          },
          text: {
            en: 'Establishes statistical baselines of normal network behavior (e.g. baseline bandwidth, typical packet sizes). Flags abnormal deviations, enabling discovery of novel zero-day attacks.',
            bn: 'স্বাভাবিক নেটওয়ার্ক আচরণের পরিসংখ্যানগত বেসলাইন (যেমন সাধারণ ব্যান্ডউইথ ও প্যাকেটের আকার) তৈরি করে। অস্বাভাবিক কোনো বিচ্যুতি ঘটলে তা নতুন জিরো-ডে আক্রমণ হিসেবে সনাক্ত করতে পারে।'
          },
        },
        {
          title: {
            en: '3. In-Line Enforcement Action',
            bn: '৩. ইন-লাইন প্রয়োগ পদক্ষেপ'
          },
          text: {
            en: 'When a signature matches, the IPS immediately executes an automated mitigation: dropping the offending packet, blacklisting the source IP, or issuing bilateral TCP RST flags.',
            bn: 'যখন কোনো ক্ষতিকর সিগনেচার মিলে যায়, তখন IPS তৎক্ষণাৎ স্বয়ংক্রিয় ব্যবস্থা নেয়: প্যাকেট ফেলে দেওয়া, আক্রমণকারীর আইপি কালোতালিকাভুক্ত করা অথবা টিসিপি রিসেট পাঠানো।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'In-Line IPS Inspection Gateway: 4 Benign Events vs 1 Hostile Probe',
        bn: 'ইন-লাইন IPS ইন্সপেকশন গেটওয়ে: ৪ টি স্বাভাবিক ইভেন্ট বনাম ১ টি ক্ষতিকর আক্রমণ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="In-line intrusion prevention system evaluating 5 network events: 4 pass and 1 is blocked">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">INTRUSION DETECTION & PREVENTION (IDS/IPS) INSPECTION ENGINE</text>
  
  <!-- Active Signature Banner -->
  <rect x="35" y="48" width="770" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="50" y="75" fill="#94a3b8" font-size="11" font-weight="bold">ACTIVE SIGNATURE:</text>
  <text x="180" y="75" fill="#ef4444" font-size="11" font-weight="bold">SID 10001: SQLi Probe /(%27|')\s*(or|OR)\s*.*=.*--/i [CRITICAL SEVERITY]</text>
  
  <!-- Left Side: 5 Network Events -->
  <g transform="translate(35, 105)">
    <rect width="370" height="290" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="30" rx="8" fill="#0284c7"/>
    <text x="185" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 ARRIVING NETWORK TRAFFIC EVENTS</text>
    
    <g transform="translate(12, 40)">
      <rect width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="18" fill="#ffffff" font-size="8.5" font-weight="bold">1. Web Event: GET /index.html</text>
      <text x="10" y="32" fill="#94a3b8" font-size="8">Payload: Normal static web page request</text>
      
      <rect y="48" width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="66" fill="#ffffff" font-size="8.5" font-weight="bold">2. Mail Event: MAIL FROM: user@corp</text>
      <text x="10" y="80" fill="#94a3b8" font-size="8">Payload: RFC-compliant SMTP envelope handshake</text>
      
      <rect y="96" width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="114" fill="#ffffff" font-size="8.5" font-weight="bold">3. DNS Event: Query api.example.com</text>
      <text x="10" y="128" fill="#94a3b8" font-size="8">Payload: Standard A record hostname lookup</text>
      
      <rect y="144" width="346" height="42" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="162" fill="#ffffff" font-size="8.5" font-weight="bold">4. SSH Event: SSH-2.0-OpenSSH_9.0</text>
      <text x="10" y="176" fill="#94a3b8" font-size="8">Payload: Secure shell banner initialization</text>
      
      <rect y="192" width="346" height="42" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="210" fill="#fca5a5" font-size="8.5" font-weight="bold">5. Hostile Event: GET /login?user=' OR 1=1--</text>
      <text x="10" y="224" fill="#ef4444" font-size="8">Payload: Automated SQL injection attack probe</text>
    </g>
  </g>
  
  <!-- Right Side: In-Line IPS Decisions -->
  <g transform="translate(435, 105)">
    <rect width="370" height="290" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="30" rx="8" fill="#059669"/>
    <text x="185" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">IPS VERDICTS: 4 PASS [✓] | 1 BLOCKED [✗]</text>
    
    <g transform="translate(12, 40)">
      <rect width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">1. PASS: No hostile signatures [✓]</text>
      <text x="10" y="32" fill="#34d399" font-size="8">Action: Forwarded to web application pool</text>
      
      <rect y="48" width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="66" fill="#6ee7b7" font-size="8.5" font-weight="bold">2. PASS: No hostile signatures [✓]</text>
      <text x="10" y="80" fill="#34d399" font-size="8">Action: Forwarded to internal mail server</text>
      
      <rect y="96" width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="114" fill="#6ee7b7" font-size="8.5" font-weight="bold">3. PASS: No hostile signatures [✓]</text>
      <text x="10" y="128" fill="#34d399" font-size="8">Action: Forwarded to authoritative DNS resolver</text>
      
      <rect y="144" width="346" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="162" fill="#6ee7b7" font-size="8.5" font-weight="bold">4. PASS: No hostile signatures [✓]</text>
      <text x="10" y="176" fill="#34d399" font-size="8">Action: Forwarded to bastion SSH gateway</text>
      
      <rect y="192" width="346" height="42" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="210" fill="#fca5a5" font-size="8.5" font-weight="bold">5. BLOCK: MATCH SID 10001 (SQLi) [✗]</text>
      <text x="10" y="224" fill="#ef4444" font-size="8">Action: Packet dropped in-line & alert sent to SIEM</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">In-line IPS engines terminate hostile payloads before the attack bytes ever reach database sockets</text>
</svg>`,
      caption: {
        en: 'The IPS inspects 5 incoming network events: 4 benign events pass safely, and 1 SQL injection probe matching SID 10001 is dropped in-line with an alarm.',
        bn: 'আইপিএস ৫ টি আগত নেটওয়ার্ক ইভেন্ট পরীক্ষা করে: ৪ টি ক্ষতিকরহীন ইভেন্ট নিরাপদে প্রবেশ করে এবং SID 10001 সিগনেচারের সাথে মেলা ১ টি এসকিউএল ইনজেকশন সরাসরি বাতিল হয়।'
      },
    },
    {
      type: 'heading',
      id: 'ips-engine-code',
      text: {
        en: 'Building an In-Line Intrusion Prevention Engine in Node.js',
        bn: 'Node.js-এ ইন-লাইন ইন্ট্রুশন প্রিভেনশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'intrusion-prevention-engine.js',
      code: `// Deterministic In-Line Intrusion Prevention System (IPS) Engine
class IntrusionPreventionEngine {
  constructor() {
    // Signature database modeled after Snort / Suricata rules
    this.signatureDatabase = [
      {
        sid: 10001,
        name: 'SQL Injection Authentication Bypass Probe',
        pattern: /(?:%27|\\x27)\\s*(?:or|OR)\\s*.*=.*--?/i,
        severity: 'CRITICAL',
        category: 'Web Application Exploit'
      },
      {
        sid: 10002,
        name: 'Directory Path Traversal Attempt',
        pattern: /(?:\\.\\.\\/|\\.\\.\\\\){2,}/,
        severity: 'HIGH',
        category: 'File System Probe'
      }
    ];
  }

  // Deep Packet Inspection of arriving payload bytes
  inspectPacket(event) {
    for (const rule of this.signatureDatabase) {
      if (rule.pattern.test(event.payload)) {
        return {
          verdict: 'BLOCK',
          alarmRaised: true,
          sid: rule.sid,
          ruleName: rule.name,
          severity: rule.severity,
          reason: \`ALERT [SID \${rule.sid}] (\${rule.severity}): \${rule.name}\`
        };
      }
    }

    // Packet payload exhibits no hostile signatures
    return {
      verdict: 'PASS',
      alarmRaised: false,
      reason: 'Payload inspected cleanly; no hostile signatures detected'
    };
  }
}

const ips = new IntrusionPreventionEngine();

// 5 distinct network traffic events inspected in real-time
const trafficEvents = [
  {
    name: 'Public Web Application Visitor',
    protocol: 'TCP',
    port: 80,
    payload: 'GET /index.html HTTP/1.1\\r\\nHost: shop.example.com\\r\\n\\r\\n'
  },
  {
    name: 'Corporate Mail Relay Envelope',
    protocol: 'TCP',
    port: 25,
    payload: 'MAIL FROM:<alice@corp.example>\\r\\nRCPT TO:<bob@corp.example>\\r\\n'
  },
  {
    name: 'Authoritative DNS Query Record',
    protocol: 'UDP',
    port: 53,
    payload: 'DNS Query: api.example.com (Type A, Class IN)'
  },
  {
    name: 'Admin Secure Shell Handshake',
    protocol: 'TCP',
    port: 22,
    payload: 'SSH-2.0-OpenSSH_9.0 Protocol Negotiation'
  },
  {
    name: 'Adversary SQL Injection Probe',
    protocol: 'TCP',
    port: 80,
    payload: "GET /login?user=' OR 1=1-- HTTP/1.1\\r\\nHost: shop.example.com\\r\\n\\r\\n"
  }
];

let totalPassed = 0;
let totalBlocked = 0;

console.log('=== In-Line IPS Deep Packet Inspection Stream ===\\n');
trafficEvents.forEach((ev, index) => {
  const result = ips.inspectPacket(ev);
  if (result.verdict === 'PASS') {
    totalPassed++;
    console.log(\`[\${index + 1}] PASS  [✓]: \${ev.name} (Port \${ev.port}/\${ev.protocol})\`);
    console.log(\`    Verdict: \${result.reason}\\n\`);
  } else {
    totalBlocked++;
    console.log(\`[\${index + 1}] BLOCK [✗]: \${ev.name} (Port \${ev.port}/\${ev.protocol})\`);
    console.log(\`    Threat:  \${result.reason}\\n\`);
  }
});

console.log('=== IPS Inspection Summary ===');
console.log('Total Events Inspected: ', trafficEvents.length);
console.log('Benign Packets Passed:  ', totalPassed);
console.log('Hostile Attacks Dropped:', totalBlocked);`,
      caption: {
        en: 'The IPS inspects 5 network events: 4 benign events pass safely, and 1 SQL injection probe matching SID 10001 is dropped in-line.',
        bn: 'আইপিএস ইঞ্জিনটি ৫ টি নেটওয়ার্ক ইভেন্ট পরীক্ষা করে: ৪ টি ক্ষতিকরহীন ইভেন্ট নিরাপদে প্রবেশ করে এবং SID 10001 সিগনেচারের সাথে মেলা ১ টি এসকিউএল ইনজেকশন আক্রমণ বাতিল হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Threat of False Positives in In-Line Prevention',
        bn: 'ইন-লাইন প্রতিরোধে ফলস পজিটিভের মারাত্মক ঝুঁকি'
      },
      text: {
        en: 'While an IPS effectively drops attacks, an overly aggressive or poorly tested signature rule can cause catastrophic false positives, blocking legitimate paying customers or critical API traffic. In production, security teams first run new detection rules in passive IDS mode (alert only). Once rules are verified against real network traffic and tuned to eliminate false positives, they are promoted to active in-line IPS blocking mode.',
        bn: 'যদিও আইপিএস কার্যকরভাবে আক্রমণ প্রতিহত করে, তবুও কোনো ত্রুটিপূর্ণ বা অপরীক্ষিত সিগনেচার রুল মারাত্মক ফলস পজিটিভ তৈরি করতে পারে, যার ফলে আসল গ্রাহক বা প্রয়োজনীয় এপিআই কল বন্ধ হয়ে যেতে পারে। প্রোডাকশনে সিকিউরিটি টিমগুলো প্রথমে নতুন নিয়মগুলোকে প্যাসিভ IDS মোডে (কেবল সতর্কবার্তা) কয়েক দিন পরীক্ষা করে। বাস্তব ট্রাফিকে কোনো ভুল অ্যালার্ম নেই তা নিশ্চিত হওয়ার পরই নিয়মগুলোকে অ্যাক্টিভ ইন-লাইন IPS ব্লকিং মোডে উন্নীত করা হয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-ids-ex-1',
      kind: 'predict',
      topic: 'benign-events-count',
      question: {
        en: 'Out of the 5 network traffic events evaluated by the in-line IPS engine, how many benign events passed safely without matching hostile signatures? (4). Type the number.',
        bn: 'ইন-লাইন আইপিএস ইঞ্জিনে মূল্যায়িত ৫ টি নেটওয়ার্ক ট্রাফিক ইভেন্টের মধ্যে সর্বমোট কয়টি ক্ষতিকরহীন ইভেন্ট কোনো ক্ষতিকর সিগনেচারের সাথে না মিলে নিরাপদে পাস করেছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 benign events passed.',
        bn: 'ঠিক ৪ টি স্বাভাবিক ইভেন্ট পাস করেছিল।'
      },
      explanation: {
        en: 'Out of 5 events, 4 passed: Web, Mail, DNS, and SSH. The single SQL injection probe was blocked.',
        bn: '৫ টির মধ্যে ৪ টি পাস করে: ওয়েব, ইমেইল, ডিএনএস এবং এসএসএইচ। কেবল ১ টি এসকিউএল ইনজেকশন আক্রমণ আটকে যায়।'
      },
    },
    {
      id: 'netsec-ids-ex-2',
      kind: 'mcq',
      topic: 'ids-vs-ips-placement',
      question: {
        en: 'What is the fundamental architectural difference between an IDS and an IPS in network topology placement?',
        bn: 'নেটওয়ার্ক টপোলজিতে বসার অবস্থানের ক্ষেত্রে একটি IDS এবং একটি IPS এর মধ্যকার মূল আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'An IDS sits out-of-band on a passive SPAN mirror port to monitor and alert without affecting traffic, whereas an IPS sits directly in-line in the packet path to actively drop malicious traffic in real-time',
          bn: 'একটি IDS ট্রাফিকের গতিতে প্রভাব না ফেলে কেবল পর্যবেক্ষণ ও সতর্কবার্তা পাঠাতে আউট-অব-ব্যান্ডে স্প্যান পোর্টে বসে, আর একটি IPS ক্ষতিকর ট্রাফিক তৎক্ষণাৎ ড্রপ করতে সরাসরি মূল তারের মাঝে বা ইন-লাইনে বসে',
        },
        {
          en: 'An IDS is made of plastic while an IPS is made of metal',
          bn: 'একটি IDS প্লাস্টিক দিয়ে তৈরি হয় যেখানে একটি IPS ধাতু বা মেটাল দিয়ে তৈরি',
        },
        {
          en: 'An IPS can only run on battery power during storms',
          bn: 'একটি IPS কেবল দুর্যোগপূর্ণ আবহাওয়ায় ব্যাটারি শক্তিতে চলতে পারে',
        },
        {
          en: 'An IDS only operates during nighttime hours',
          bn: 'একটি IDS কেবল রাতের বেলা কাজ করতে পারে',
        },
      ],
      answer: 0,
      hint: {
        en: 'IDS is passive out-of-band (alerting); IPS is active in-line (blocking).',
        bn: 'IDS প্যাসিভ আউট-অব-ব্যান্ড (সতর্কবার্তা); IPS অ্যাক্টিভ ইন-লাইন (ব্লকিং)।'
      },
      explanation: {
        en: 'If an IDS fails, traffic continues uninterrupted. If an in-line IPS fails without a hardware bypass switch, the entire network link goes down.',
        bn: 'IDS বন্ধ হলেও ইন্টারনেট চলে। কিন্তু বাইপাস সুইচ ছাড়া ইন-লাইন IPS বন্ধ হয়ে গেলে পুরো নেটওয়ার্ক সংযোগ বিচ্ছিন্ন হয়ে পড়ে।'
      },
    },
    {
      id: 'netsec-ids-ex-3',
      kind: 'mcq',
      topic: 'signature-vs-anomaly-detection',
      question: {
        en: 'What is the operational trade-off between Signature-Based Detection and Anomaly-Based Heuristic Detection?',
        bn: 'সিগনেচারভিত্তিক সনাক্তকরণ এবং অ্যানোমালিভিত্তিক হিউরিস্টিক সনাক্তকরণের মধ্যে ব্যবহারিক সুবিধা ও অসুবিধার ভারসাম্য কী?'
      },
      options: [
        {
          en: 'Signature detection has zero false positives for known threats but cannot detect novel zero-day attacks; anomaly detection catches zero-days by monitoring behavioral deviations but produces more false positives',
          bn: 'সিগনেচার সনাক্তকরণ পরিচিত হুমকির ক্ষেত্রে নিখুঁতভাবে কাজ করে কিন্তু নতুন জিরো-ডে আক্রমণ ধরতে পারে না; অন্যদিকে অ্যানোমালি সনাক্তকরণ অস্বাভাবিক আচরণ দেখে জিরো-ডে ধরে কিন্তু বেশি ফলস পজিটিভ তৈরি করে',
        },
        {
          en: 'Signature detection slows down computer monitors by eighty percent',
          bn: 'সিগনেচার সনাক্তকরণ কম্পিউটার মনিটরের গতি আশি শতাংশ কমিয়ে দেয়',
        },
        {
          en: 'Anomaly detection requires servers to use paper punch cards',
          bn: 'অ্যানোমালি সনাক্তকরণ চালানোর জন্য সার্ভারে কাগজের পাঞ্চ কার্ড ব্যবহার করতে হয়',
        },
        {
          en: 'Signature detection is only legal in five countries globally',
          bn: 'সিগনেচার সনাক্তকরণ সারা বিশ্বের মাত্র পাঁচটি দেশে আইনিভাবে বৈধ',
        },
      ],
      answer: 0,
      hint: {
        en: 'Signatures are precise for known threats; anomalies catch new threats but raise false alarms.',
        bn: 'সিগনেচার পরিচিত হুমকির জন্য নিখুঁত; অ্যানোমালি নতুন আক্রমণ ধরে কিন্তু ভুল অ্যালার্ম দেয়।'
      },
      explanation: {
        en: 'Modern SOCs combine both approaches: signatures block millions of commodity script scans, while anomaly engines detect subtle advanced persistent threats (APTs).',
        bn: 'আধুনিক সিকিউরিটি টিম উভয় পদ্ধতি একসাথে চালায়: সিগনেচার দিয়ে সাধারণ স্ক্যান রোখে, আর অ্যানোমালি দিয়ে জটিল গুপ্ত আক্রমণ সনাক্ত করে।'
      },
    },
    {
      id: 'netsec-ids-ex-4',
      kind: 'predict',
      topic: 'blocked-attacks-count',
      question: {
        en: 'How many hostile network attacks were dropped in-line by the IPS engine matching known attack signatures? (1). Type the number.',
        bn: 'পরিচিত আক্রমণ সিগনেচারের সাথে মেলায় আইপিএস ইঞ্জিন দ্বারা সরাসরি ইন-লাইনে সর্বমোট কয়টি ক্ষতিকর আক্রমণ বাতিল হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Exactly 1 hostile probe was dropped.',
        bn: 'ঠিক ১ টি ক্ষতিকর আক্রমণ বাতিল হয়েছিল।'
      },
      explanation: {
        en: 'The SQL injection probe (SID 10001) was detected in the payload and blocked in-line.',
        bn: 'পেলোডের মধ্যে এসকিউএল ইনজেকশন আক্রমণ (SID 10001) সনাক্ত হওয়ায় তা ইন-লাইনে ব্লক হয়।'
      },
    },
  ],
  quiz: {
    id: 'ids-ips-quiz',
    title: {
      en: 'Intrusion Detection & Prevention Architecture Quiz',
      bn: 'অনুপ্রবেশ সনাক্তকরণ ও প্রতিরোধ আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'netsec-ids-qz-1',
        kind: 'mcq',
        topic: 'span-port-mirroring-limitations',
        question: {
          en: 'What is a major technical limitation of using a switch SPAN (Port Mirroring) port for passive network monitoring under high traffic loads?',
          bn: 'অতিরিক্ত ট্রাফিকের চাপের সময় প্যাসিভ নেটওয়ার্ক নজরদারির জন্য সুইচের SPAN (পোর্ট মিররিং) পোর্ট ব্যবহারের প্রধান কারিগরি সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'SPAN ports drop mirrored packets when switch backplane or port bandwidth becomes congested, causing the monitoring IDS to miss active exploit attempts during high-throughput saturation',
            bn: 'সুইচ ব্যাকপ্লেন বা পোর্টের ব্যান্ডউইথে জট তৈরি হলে SPAN পোর্ট নিজে থেকেই মিরর করা প্যাকেট ফেলে দেয়, যার ফলে চরম চাপের সময় নজরদারি করা IDS আসল আক্রমণ ধরতে ব্যর্থ হতে পারে',
          },
          {
            en: 'SPAN ports cause the network cables to heat up and catch fire',
            bn: 'SPAN পোর্টের কারণে ইন্টারনেটের তার অতিরিক্ত গরম হয়ে আগুন ধরে যায়',
          },
          {
            en: 'SPAN ports change the text color of emails to orange',
            bn: 'SPAN পোর্ট ইমেইলের সমস্ত লেখার রঙ কমলা রঙে রূপান্তর করে দেয়',
          },
          {
            en: 'SPAN ports are legally forbidden on optical fiber networks',
            bn: 'অপটিক্যাল ফাইবার নেটওয়ার্কে SPAN পোর্টের ব্যবহার আইনত সম্পূর্ণ নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: {
          en: 'Switches drop SPAN mirror traffic first when congested to prioritize live data.',
          bn: 'জট লাগলে সুইচ আসল ডেটা বাঁচিয়ে রাখতে সবার আগে SPAN ট্রাফিক ড্রপ করে।'
        },
        explanation: {
          en: 'Switches prioritize production forwarding over SPAN mirroring. Hardware Test Access Points (TAPs) provide zero-loss optical replication without switch packet drops.',
          bn: 'সুইচ সর্বদা আসল ডেটা পাঠানোকে অগ্রাধিকার দেয়। প্যাকেট ড্রপ এড়াতে উচ্চগতির নেটওয়ার্কে হার্ডওয়্যার TAP ব্যবহার করা হয়।'
        },
      },
      {
        id: 'netsec-ids-qz-2',
        kind: 'mcq',
        topic: 'snort-rule-anatomy',
        question: {
          en: 'In Snort/Suricata rule syntax (e.g. alert tcp any any -> 192.168.1.0/24 80 (msg:"..."; content:"..."; sid:10001;)), what is the purpose of the "sid" option?',
          bn: 'Snort/Suricata রুল সিনট্যাক্সে (যেমন alert tcp any any -> 192.168.1.0/24 80 (msg:"..."; content:"..."; sid:10001;)) "sid" অপশনটির উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'The Snort Rule ID (SID): a globally unique numeric identifier assigned to the signature to track alert telemetry and manage rule versioning across security teams',
            bn: 'Snort রুল আইডি (SID): প্রতিটি সিগনেচারকে দেওয়া একটি স্বতন্ত্র অনন্য সংখ্যাসূচক পরিচয় যা অ্যালার্ট ট্র্যাকিং এবং সিকিউরিটি টিমের রুল সংস্করণ পরিচালনায় ব্যবহৃত হয়',
          },
          {
            en: 'The serial number of the computer motherboard running the engine',
            bn: 'ইঞ্জিনটি চালনাকারী কম্পিউটারের মাদারবোর্ডের সিরিয়াল নম্বর',
          },
          {
            en: 'The length of the ethernet cable measured in centimeters',
            bn: 'সেন্টিমিটারে পরিমাপ করা ইথারনেট তারের শারীরিক দৈর্ঘ্য',
          },
          {
            en: 'The number of seconds before the server computer shuts down',
            bn: 'সার্ভার কম্পিউটারটি বন্ধ হওয়ার আগে অবশিষ্ট সেকেন্ডের সংখ্যা',
          },
        ],
        answer: 0,
        hint: {
          en: 'SID uniquely identifies each signature rule across rulebases.',
          bn: 'SID প্রতিটি সিগনেচার নিয়মকে স্বতন্ত্রভাবে চিহ্নিত করে।'
        },
        explanation: {
          en: 'SIDs under 1000000 are reserved for official Snort rules; IDs 1000000 and higher are used for custom internal corporate rules.',
          bn: '১০০০০০০ এর নিচের SID অফিসিয়াল নিয়মের জন্য এবং ১০০০০০০ এর ওপরের SID নিজস্ব কাস্টম নিয়মের জন্য নির্ধারিত।'
        },
      },
      {
        id: 'netsec-ids-qz-3',
        kind: 'mcq',
        topic: 'tcp-rst-injection-mitigation',
        question: {
          en: 'How does an out-of-band IDS disrupt an ongoing malicious TCP session without sitting directly in-line on the network wire?',
          bn: 'একটি আউট-অব-ব্যান্ড IDS সরাসরি মূল তারের মাঝে না বসেও কীভাবে চলমান একটি ক্ষতিকর টিসিপি সেশন ধ্বংস করতে পারে?'
        },
        options: [
          {
            en: 'By performing "TCP Reset (RST) Injection": spoofing a forged TCP packet with the RST flag set to both the client and server with matching sequence numbers, causing both ends to immediately tear down the socket',
            bn: '"TCP Reset (RST) Injection" এর মাধ্যমে: সঠিক সিকোয়েন্স নম্বর মিলিয়ে ক্লায়েন্ট ও সার্ভার উভয় প্রান্তে RST ফ্ল্যাগযুক্ত ভুয়া প্যাকেট পাঠানো, যার ফলে উভয় প্রান্ত তাৎক্ষণিকভাবে সকেট সংযোগ বন্ধ করে দেয়',
          },
          {
            en: 'By cutting off the electric power supply to the building router',
            bn: 'ভবনের রাউটারের বিদ্যুৎ সরবরাহ সাময়িকভাবে বন্ধ করে দেওয়ার মাধ্যমে',
          },
          {
            en: 'By sending a warning email to the internet service provider',
            bn: 'ইন্টারনেট সার্ভিস প্রোভাইডারকে একটি সতর্কতামূলক ইমেইল পাঠানোর মাধ্যমে',
          },
          {
            en: 'By playing a loud siren sound through the office speakers',
            bn: 'অফিসের স্পিকার দিয়ে বিকট সাইরেন বাজিয়ে কর্মচারীদের সতর্ক করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Injecting spoofed TCP RST packets tricks endpoints into closing the socket.',
          bn: 'ভুয়া টিসিপি RST প্যাকেট ঢুকিয়ে উভয় পক্ষকে সেশন বন্ধ করতে বাধ্য করা হয়।'
        },
        explanation: {
          en: 'TCP RST injection lets an out-of-band IDS kill connections. However, if the attacker payload has already been delivered, RST injection cannot undo the compromise.',
          bn: 'RST ইনজেকশন সংযোগ কেটে দেয়। তবে প্যাকেট আগেই সার্ভারে পৌঁছে গেলে তা কোনো ক্ষতি রুখতে পারে না, এজন্য ইন-লাইন IPS বেশি নিরাপদ।'
        },
      },
      {
        id: 'netsec-ids-qz-4',
        kind: 'mcq',
        topic: 'tls-encryption-ids-challenge',
        question: {
          en: 'Why has the universal adoption of TLS 1.3 encryption created a major operational challenge for traditional network IDS/IPS appliances?',
          bn: 'TLS ১.৩ এনক্রিপশনের সর্বজনীন ব্যবহার ঐতিহ্যবাহী নেটওয়ার্ক IDS/IPS যন্ত্রপাতির জন্য কেন একটি বিশাল ব্যবহারিক চ্যালেঞ্জ তৈরি করেছে?'
        },
        options: [
          {
            en: 'Because TLS 1.3 encrypts packet payloads end-to-end with forward secrecy; without deploying enterprise SSL decryption proxies or endpoint agents, network IDS engines cannot inspect the plaintext payload for attack signatures',
            bn: 'কারণ TLS ১.৩ ফরোয়ার্ড সিক্রেসিসহ সম্পূর্ণ ডেটা এনক্রিপ্ট করে ফেলে; ডেডিকেটেড ডিক্রিপশন প্রক্সি বা এন্ডপয়েন্ট এজেন্ট ছাড়া নেটওয়ার্ক IDS এনক্রিপ্ট করা পেলোডের ভেতরের ক্ষতিকর সিগনেচার দেখতে পারে না',
          },
          {
            en: 'Because TLS 1.3 makes computer network cables physically thicker',
            bn: 'কারণ TLS ১.৩ ইন্টারনেটের তারের শারীরিক পুরুত্ব বাড়িয়ে দেয়',
          },
          {
            en: 'Because web browsers refuse to load pages on computers running Linux',
            bn: 'কারণ লিনাক্স চালিত কম্পিউটারে ব্রাউজার পেজ লোড করতে অস্বীকৃতি জানায়',
          },
          {
            en: 'Because TLS 1.3 requires servers to be located in cold rooms',
            bn: 'কারণ TLS ১.৩ চালাতে সার্ভারকে অত্যন্ত ঠাণ্ডা ঘরে রাখতে হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Payload encryption hides text from wire inspectors unless decrypted at a proxy.',
          bn: 'এনক্রিপশন তারের পরিদর্শকের চোখ থেকে টেক্সট লুকিয়ে ফেলে যদি না প্রক্সিতে খোলা হয়।'
        },
        explanation: {
          en: 'Modern security architectures combine perimeter TLS inspection proxies with Endpoint Detection and Response (EDR) to inspect commands directly in process memory.',
          bn: 'আধুনিক আর্কিটেকচার তাই নেটওয়ার্কের পাশাপাশি এন্ডপয়েন্টে (EDR) নজরদারি রাখে যাতে প্রসেস মেমরিতেই ক্ষতিকর কোড ধরা যায়।'
        },
      },
    ],
  },
  next: {
    slug: 'network-segmentation',
    title: {
      en: 'Zero Trust Network Architecture: DMZ, VLANs & Microsegmentation',
      bn: 'জিরো ট্রাস্ট নেটওয়ার্ক আর্কিটেকচার: ডিএমজেড, ভিএলএএন এবং মাইক্রোসেগমেন্টেশন'
    },
  },
};
