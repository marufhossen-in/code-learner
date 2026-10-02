import type { Lesson } from '../../../lib/types';

export const PortScanningLesson: Lesson = {
  slug: 'port-scanning',
  tech: 'network-security',
  title: {
    en: 'Port Scanning & Reconnaissance Defense: SYN Stealth & Knocking',
    bn: 'পোর্ট স্ক্যানিং ও রেকোনাইসেন্স প্রতিরক্ষা: SYN স্টিলথ ও নকিং'
  },
  summary: {
    en: 'Master the mechanics of network port scanning and defensive perimeter hardening. Understand how automated reconnaissance tools like Nmap sweep IP ranges to categorize transport ports into 3 standard states: OPEN (SYN-ACK), CLOSED (RST), and FILTERED (silent drop). Compare noisy TCP Connect scans with stealthy Half-Open SYN scans. Explore defensive port knocking and tarpitting. Inspect an executable Node.js scanner auditing 5 ports: 1 unencrypted service answers as OPEN, and 4 ports remain safely CLOSED or FILTERED.',
    bn: 'নেটওয়ার্ক পোর্ট স্ক্যানিং এবং পেরিমিটার সুরক্ষার কৌশলগুলো আয়ত্ত করুন। Nmap-এর মতো স্বয়ংক্রিয় স্ক্যানিং টুল কীভাবে আইপি রেঞ্জ পরীক্ষা করে পোর্টগুলোকে ৩ টি প্রধান স্টেটে (OPEN, CLOSED, FILTERED) ভাগ করে তা জানুন। ফুল টিসিপি কানেক্ট স্ক্যানের সাথে স্টিলথ হাফ-ওপেন সিন (SYN) স্ক্যানের তুলনা করুন। পোর্ট নকিং এবং টারপিটিং প্রতিরোধ কৌশল শিখুন। ৫ টি পোর্ট অডিটকারী একটি কার্যকর Node.js স্ক্যানার পরীক্ষা করুন: ১ টি আন-এনক্রিপ্টেড সার্ভিস OPEN উত্তর দেয় এবং ৪ টি পোর্ট নিরাপদে CLOSED বা FILTERED অবস্থায় থাকে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'reconnaissance-and-port-states',
      text: {
        en: 'Network Reconnaissance: How Adversaries Map Open Attack Surfaces',
        bn: 'নেটওয়ার্ক অনুসন্ধান: কীভাবে আক্রমণকারীরা উন্মুক্ত সার্ভিসগুলোর মানচিত্র তৈরি করে'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Before an adversary can exploit a network service or execute a vulnerability, they must locate an accessible target. In the initial reconnaissance phase of a cyber attack, adversaries use automated port scanners (such as Nmap or Masscan) to probe all 65535 TCP and UDP ports on your public IP addresses.',
        bn: 'কোনো নেটওয়ার্ক সার্ভিসকে হ্যাক করার আগে আক্রমণকারীকে অবশ্যই একটি প্রবেশযোগ্য লক্ষ্য খুঁজে বের করতে হয়। সাইবার আক্রমণের প্রাথমিক অনুসন্ধানের ধাপে আক্রমণকারীরা স্বয়ংক্রিয় পোর্ট স্ক্যানার (যেমন Nmap বা Masscan) ব্যবহার করে আপনার পাবলিক আইপির ৬৫৫৩৫ টি টিসিপি ও ইউডিপি পোর্ট পরীক্ষা করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Port scanning works by transmitting crafted probe packets and analyzing the response. RFC 793 defines 3 fundamental port states. An OPEN port responds with a TCP SYN-ACK indicating an active application daemon is listening. A CLOSED port responds with a TCP RST packet indicating the host is reachable but no service is bound. A FILTERED port produces no response at all because an edge firewall silently dropped the probe.',
        bn: 'পোর্ট স্ক্যানিং মূলত কৃত্রিম অনুসন্ধান প্যাকেট পাঠিয়ে তার উত্তর বিশ্লেষণের মাধ্যমে কাজ করে। RFC 793 অনুযায়ী পোর্টগুলোকে ৩ টি প্রধান স্টেটে ভাগ করা যায়। একটি OPEN পোর্ট TCP SYN-ACK দিয়ে উত্তর দেয় যার অর্থ সেখানে একটি সার্ভিস সচল রয়েছে। একটি CLOSED পোর্ট TCP RST পাঠিয়ে জানায় যে কম্পিউটারটি সচল থাকলেও ঐ পোর্টে কোনো সার্ভিস নেই। আর একটি FILTERED পোর্ট কোনো উত্তরই দেয় না কারণ ফায়ারওয়াল প্যাকেটটিকে নীরবে ফেলে দেয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. TCP Connect Scan (-sT)',
            bn: '১. টিসিপি কানেক্ট স্ক্যান (-sT)'
          },
          text: {
            en: 'Completes the entire TCP 3-way handshake (SYN -> SYN-ACK -> ACK). Leaves application connection logs in web server and database daemons, making it noisy and easily detected.',
            bn: 'পুরো টিসিপি ৩-ওয়ে হ্যান্ডশেক (SYN -> SYN-ACK -> ACK) সম্পন্ন করে। এটি অ্যাপ্লিকেশন লগে সংযোগের স্পষ্ট ছাপ রেখে যায় বলে সহজেই ধরা পড়ে যায়।'
          },
        },
        {
          title: {
            en: '2. TCP SYN Stealth Scan (-sS)',
            bn: '২. টিসিপি সিন স্টিলথ স্ক্যান (-sS)'
          },
          text: {
            en: 'Sends a SYN packet. When the target answers with SYN-ACK, the scanner immediately sends a RST packet instead of an ACK! The connection is terminated before reaching application memory, evading traditional logs.',
            bn: 'একটি SYN প্যাকেট পাঠায়। সার্ভার SYN-ACK দিয়ে উত্তর দেওয়া মাত্রই স্ক্যানার ACK না পাঠিয়ে সাথে সাথে RST পাঠিয়ে সংযোগ বিচ্ছিন্ন করে দেয়! এর ফলে অ্যাপ্লিকেশন মেমরিতে যাওয়ার আগেই হ্যান্ডশেক ভেঙে যায়।'
          },
        },
        {
          title: {
            en: '3. Defensive Port Knocking (SPA)',
            bn: '৩. প্রতিরক্ষামূলক পোর্ট নকিং (SPA)'
          },
          text: {
            en: 'Keeps critical administrative ports (e.g. port 22) in a completely FILTERED state. Only after a client transmits a secret sequence of knocks does the firewall dynamically open access for that IP.',
            bn: 'প্রশাসনিক পোর্টগুলোকে (যেমন পোর্ট ২২) সম্পূর্ণ FILTERED অবস্থায় লুকিয়ে রাখে। কেবল অনুমোদিত ক্লায়েন্ট নির্দিষ্ট গোপন ক্রমানুসারে প্যাকেট পাঠালেই ফায়ারওয়াল সাময়িকভাবে পোর্টটি খুলে দেয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'TCP Port Reconnaissance Audit: 1 Open Port vs 4 Closed and Filtered Ports',
        bn: 'টিসিপি পোর্ট অনুসন্ধান অডিট: ১ টি উন্মুক্ত পোর্ট বনাম ৪ টি বন্ধ ও ফিল্টার করা পোর্ট'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="TCP port scan audit showing 1 open port and 4 closed or filtered ports">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">TCP SYN STEALTH RECONNAISSANCE SCAN & PORT AUDIT</text>
  
  <!-- Left Side: Probe Targets -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 TARGET PORTS PROBED (SYN PROBE)</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="18" fill="#ffffff" font-size="8.5" font-weight="bold">Probe 1: Port 22/TCP (SSH Management)</text>
      <text x="12" y="34" fill="#94a3b8" font-size="8">Firewall drops SYN packet silently</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="70" fill="#ffffff" font-size="8.5" font-weight="bold">Probe 2: Port 25/TCP (SMTP Service)</text>
      <text x="12" y="86" fill="#94a3b8" font-size="8">No service listening; OS kernel replies</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="122" fill="#ffffff" font-size="8.5" font-weight="bold">Probe 3: Port 53/TCP (DNS Zone Transfer)</text>
      <text x="12" y="138" fill="#94a3b8" font-size="8">No service listening; OS kernel replies</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="174" fill="#fca5a5" font-size="8.5" font-weight="bold">Probe 4: Port 80/TCP (Insecure Web Daemon)</text>
      <text x="12" y="190" fill="#ef4444" font-size="8">Web daemon responds with SYN-ACK</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="226" fill="#ffffff" font-size="8.5" font-weight="bold">Probe 5: Port 443/TCP (Production HTTPS)</text>
      <text x="12" y="242" fill="#94a3b8" font-size="8">Restricted to internal corporate allowlist</text>
    </g>
  </g>
  
  <!-- Right Side: Scanner Response Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">AUDIT VERDICTS: 1 OPEN [✗] | 4 SECURE [✓]</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">1. FILTERED (Connection Timeout) [✓]</text>
      <text x="12" y="34" fill="#34d399" font-size="8">Stealth: Scanner waits 30s; service hidden</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="70" fill="#6ee7b7" font-size="8.5" font-weight="bold">2. CLOSED (RST Connection Refused) [✓]</text>
      <text x="12" y="86" fill="#34d399" font-size="8">Kernel confirms no listening process</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="122" fill="#6ee7b7" font-size="8.5" font-weight="bold">3. CLOSED (RST Connection Refused) [✓]</text>
      <text x="12" y="138" fill="#34d399" font-size="8">Kernel confirms no listening process</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="174" fill="#fca5a5" font-size="8.5" font-weight="bold">4. OPEN (SYN-ACK Received) [EXPOSED ✗]</text>
      <text x="12" y="190" fill="#ef4444" font-size="8">Vulnerability: Insecure plaintext HTTP exposed</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="226" fill="#6ee7b7" font-size="8.5" font-weight="bold">5. FILTERED (Connection Timeout) [✓]</text>
      <text x="12" y="242" fill="#34d399" font-size="8">Allowlist drop protects internal management</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">FILTERED ports drop probes without replying, exhausting scanner thread pools and hiding network services</text>
</svg>`,
      caption: {
        en: 'The port reconnaissance engine evaluates 5 ports: 1 unencrypted HTTP port is exposed as OPEN, and 4 ports are safely CLOSED or FILTERED.',
        bn: 'পোর্ট অনুসন্ধান ইঞ্জিন ৫ টি পোর্ট মূল্যায়ন করে: ১ টি আন-এনক্রিপ্টেড HTTP পোর্ট OPEN হিসেবে চিহ্নিত হয় এবং ৪ টি পোর্ট নিরাপদে CLOSED বা FILTERED থাকে।'
      },
    },
    {
      type: 'heading',
      id: 'port-scanner-simulator-code',
      text: {
        en: 'Building an Automated Port Reconnaissance Scanner in Node.js',
        bn: 'Node.js-এ স্বয়ংক্রিয় পোর্ট অনুসন্ধান স্ক্যানার তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'port-reconnaissance-scanner.js',
      code: `// Deterministic TCP SYN Stealth Port Reconnaissance Scanner Engine
class PortReconnaissanceScanner {
  constructor(targetServiceMap) {
    this.targetServices = targetServiceMap;
  }

  // Simulate TCP Half-Open SYN probe against target port
  probePort(port) {
    const service = this.targetServices[port];

    // Case 1: Service is listening and responds with SYN-ACK
    if (service && service.state === 'LISTEN') {
      return {
        port,
        state: 'OPEN',
        handshakeResponse: 'SYN-ACK',
        serviceName: service.name,
        securityFinding: service.isCleartext ? 'CRITICAL_PLAINTEXT_SERVICE' : 'ACCEPTABLE'
      };
    }

    // Case 2: Firewall drops packet with no ICMP or TCP response
    if (service && service.state === 'FILTERED') {
      return {
        port,
        state: 'FILTERED',
        handshakeResponse: 'TIMEOUT (Silent Drop)',
        serviceName: 'Firewall Protected',
        securityFinding: 'HARDENED_SILENT'
      };
    }

    // Case 3: Host kernel responds with TCP RST packet
    return {
      port,
      state: 'CLOSED',
      handshakeResponse: 'RST (Connection Refused)',
      serviceName: 'None (Inactive)',
      securityFinding: 'INACTIVE'
    };
  }
}

// Target server configuration with 1 vulnerable plaintext HTTP daemon
const serverConfiguration = {
  22: { state: 'FILTERED', name: 'SSH Bastion', isCleartext: false },
  25: { state: 'CLOSED', name: 'SMTP Gateway', isCleartext: false },
  53: { state: 'CLOSED', name: 'DNS Resolver', isCleartext: false },
  80: { state: 'LISTEN', name: 'Insecure HTTP Web Server', isCleartext: true },
  443: { state: 'FILTERED', name: 'HTTPS Production', isCleartext: false }
};

const scanner = new PortReconnaissanceScanner(serverConfiguration);
const portsToAudit = [22, 25, 53, 80, 443];

let totalOpen = 0;
let totalSecure = 0;

console.log('=== Automated Network Port Reconnaissance Audit ===\\n');
portsToAudit.forEach((port, index) => {
  const result = scanner.probePort(port);
  if (result.state === 'OPEN') {
    totalOpen++;
    console.log(\`[\${index + 1}] EXPOSED [✗]: Port \${result.port} -> \${result.state}\`);
    console.log(\`    Response: \${result.handshakeResponse}\`);
    console.log(\`    Service:  \${result.serviceName}\`);
    console.log(\`    Finding:  \${result.securityFinding}\\n\`);
  } else {
    totalSecure++;
    console.log(\`[\${index + 1}] SECURE  [✓]: Port \${result.port} -> \${result.state}\`);
    console.log(\`    Response: \${result.handshakeResponse}\`);
    console.log(\`    Service:  \${result.serviceName}\\n\`);
  }
});

console.log('=== Reconnaissance Audit Summary ===');
console.log('Total Ports Audited:          ', portsToAudit.length);
console.log('Exposed Open Services (Fix):  ', totalOpen);
console.log('Secure Closed/Filtered Ports: ', totalSecure);`,
      caption: {
        en: 'The port scanner tests 5 target ports: 1 unencrypted HTTP port is identified as OPEN and 4 ports remain safely CLOSED or FILTERED.',
        bn: 'পোর্ট স্ক্যানারটি ৫ টি পোর্ট পরীক্ষা করে: ১ টি আন-এনক্রিপ্টেড HTTP পোর্ট OPEN হিসেবে ধরা পড়ে এবং ৪ টি পোর্ট নিরাপদে CLOSED বা FILTERED থাকে।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Tarpitting (LaBrea): Defeating Mass Scanning Bots',
        bn: 'টারপিটিং (LaBrea): স্বয়ংক্রিয় স্ক্যানিং বটের আক্রমণ প্রতিহত করা'
      },
      text: {
        en: 'High-speed adversary scanners like ZMap can scan the entire IPv4 address space in under 45 minutes by sending asynchronous SYN probes. A powerful defensive technique is "Tarpitting" (implemented by Linux LaBrea or iptables TARPIT targets). When an unauthorized SYN probe arrives on an unused port, the tarpit completes the handshake and sets the TCP window size to zero, holding the attacker socket open for hours while exhausting their scanning bandwidth and connection limits.',
        bn: 'ZMap-এর মতো উচ্চগতির স্ক্যানার মাত্র ৪৫ মিনিটে পুরো ইন্টারনেটের আইপি স্ক্যান করতে পারে। একটি শক্তিশালী প্রতিরোধ কৌশল হলো "টারপিটিং" (Tarpitting)। যখন কোনো অননুমোদিত স্ক্যানার অপ্রয়োজনীয় পোর্টে সিন প্যাকেট পাঠায়, তখন টারপিট হ্যান্ডশেক তৈরি করে উইন্ডো সাইজ শূন্য করে দেয়; এর ফলে আক্রমণকারীর সংযোগ ঘণ্টার পর ঘণ্টা আটকে থাকে এবং তাদের স্ক্যানিং রিসোর্স সম্পূর্ণ অকেজো হয়ে পড়ে।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-scan-ex-1',
      kind: 'predict',
      topic: 'open-ports-count',
      question: {
        en: 'In the port reconnaissance audit of the 5 network ports, how many ports answered with a TCP SYN-ACK and were mapped as OPEN? (1). Type the number.',
        bn: '৫ টি নেটওয়ার্ক পোর্টের অনুসন্ধানে সর্বমোট কয়টি পোর্ট TCP SYN-ACK দিয়ে উত্তর দিয়েছিল এবং OPEN হিসেবে মানচিত্রভুক্ত হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 unencrypted port answered as OPEN.',
        bn: 'কেবলমাত্র ১ টি আন-এনক্রিপ্টেড পোর্ট OPEN হিসেবে উত্তর দিয়েছিল।'
      },
      explanation: {
        en: 'Out of 5 audited ports, only port 80 answered as OPEN; ports 25 and 53 were CLOSED, and ports 22 and 443 were FILTERED.',
        bn: '৫ টির মধ্যে কেবল পোর্ট ৮০ খোলা ছিল; পোর্ট ২৫ ও ৫৩ বন্ধ ছিল, আর পোর্ট ২২ ও ৪৪৩ ফিল্টার করা ছিল।'
      },
    },
    {
      id: 'netsec-scan-ex-2',
      kind: 'mcq',
      topic: 'syn-stealth-scan-mechanism',
      question: {
        en: 'Why is a TCP SYN scan (-sS) in Nmap known as a "Half-Open" stealth scan?',
        bn: 'Nmap-এ টিসিপি সিন স্ক্যানকে (-sS) কেন "হাফ-ওপেন" (Half-Open) স্টিলথ স্ক্যান বলা হয়?'
      },
      options: [
        {
          en: 'The scanner sends a SYN and awaits a SYN-ACK, but immediately replies with a RST packet instead of an ACK, tearing down the connection before the operating system passes it to application daemons',
          bn: 'স্ক্যানার একটি SYN পাঠিয়ে SYN-ACK এর জন্য অপেক্ষা করে, কিন্তু ACK না পাঠিয়ে সাথে সাথে RST প্যাকেট পাঠিয়ে সংযোগ বিচ্ছিন্ন করে দেয়, ফলে অপারেটিং সিস্টেম অ্যাপ্লিকেশনকে সংযোগের খবর দেওয়ার আগেই তা বাতিল হয়ে যায়',
        },
        {
          en: 'Because it only scans ports during daytime hours',
          bn: 'কারণ এটি কেবল দিনের বেলা পোর্ট স্ক্যান করে থাকে',
        },
        {
          en: 'Because it divides the network bandwidth by half',
          bn: 'কারণ এটি নেটওয়ার্কের ব্যান্ডউইথ অর্ধেক কমিয়ে দেয়',
        },
        {
          en: 'Because the scan requires two people typing commands at the same time',
          bn: 'কারণ এই স্ক্যান চালানোর জন্য একসাথে দুজনকে কমান্ড টাইপ করতে হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'It never sends the final ACK, avoiding application log generation.',
        bn: 'এটি কখনোই চূড়ান্ত ACK পাঠায় না, ফলে অ্যাপ্লিকেশনে কোনো লগ তৈরি হয় না।'
      },
      explanation: {
        en: 'By sending a RST instead of completing the handshake with an ACK, the scanner prevents application daemons from logging an established connection.',
        bn: 'ACK না পাঠিয়ে RST পাঠানোর কারণে কোনো পূর্ণাঙ্গ সেশন তৈরি হয় না, ফলে প্রচলিত অ্যাপ্লিকেশন লগে এই স্ক্যান ধরা পড়ে না।'
      },
    },
    {
      id: 'netsec-scan-ex-3',
      kind: 'mcq',
      topic: 'closed-vs-filtered-port-difference',
      question: {
        en: 'What is the operational difference between a CLOSED port and a FILTERED port during a network scan?',
        bn: 'নেটওয়ার্ক স্ক্যানের সময় একটি CLOSED পোর্ট এবং একটি FILTERED পোর্টের মধ্যকার ব্যবহারিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'A CLOSED port responds immediately with an active TCP RST packet indicating the host is live, whereas a FILTERED port drops the probe silently, forcing the scanner to wait for connection timeouts',
          bn: 'একটি CLOSED পোর্ট সাথে সাথে TCP RST প্যাকেট পাঠিয়ে জানিয়ে দেয় যে হোস্টটি সক্রিয় আছে, আর একটি FILTERED পোর্ট নীরবে প্যাকেট ফেলে দেয় যার ফলে স্ক্যানারকে টাইমআউটের জন্য দীর্ঘক্ষণ অপেক্ষা করতে হয়',
        },
        {
          en: 'A CLOSED port is painted black and a FILTERED port is painted green',
          bn: 'একটি CLOSED পোর্ট কালো রঙ করা থাকে আর একটি FILTERED পোর্ট সবুজ রঙ করা থাকে',
        },
        {
          en: 'A FILTERED port only works on computers connected to solar power',
          bn: 'একটি FILTERED পোর্ট কেবল সৌর শক্তিতে চলা কম্পিউটারে কাজ করতে পারে',
        },
        {
          en: 'A CLOSED port deletes user files from local hard drives',
          bn: 'একটি CLOSED পোর্ট লোকাল হার্ডড্রাইভ থেকে ব্যবহারকারীর ফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'CLOSED replies with RST; FILTERED drops silently and causes timeouts.',
        bn: 'CLOSED পোর্ট RST দিয়ে উত্তর দেয়; FILTERED পোর্ট নীরবে প্যাকেট ফেলে দিয়ে টাইমআউট ঘটায়।'
      },
      explanation: {
        en: 'Defenders prefer FILTERED ports: dropping packets without an RST forces automated reconnaissance bots to waste time waiting for timeouts across thousands of ports.',
        bn: 'নিরাপত্তার জন্য FILTERED পোর্ট উত্তম: উত্তর না দিলে আক্রমণকারীর স্ক্যানার হাজার হাজার পোর্টের জন্য আটকে থাকে।'
      },
    },
    {
      id: 'netsec-scan-ex-4',
      kind: 'predict',
      topic: 'secure-ports-count',
      question: {
        en: 'How many of the 5 audited network ports remained securely CLOSED or FILTERED without exposing listening application services? (4). Type the number.',
        bn: 'অডিট করা ৫ টি নেটওয়ার্ক পোর্টের মধ্যে সর্বমোট কয়টি পোর্ট কোনো উন্মুক্ত সার্ভিস প্রকাশ না করে নিরাপদে CLOSED বা FILTERED অবস্থায় ছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 ports were secure.',
        bn: 'ঠিক ৪ টি পোর্ট নিরাপদ অবস্থায় ছিল।'
      },
      explanation: {
        en: 'Out of 5 audited ports, 4 were secure (ports 22, 25, 53, and 443). Only the unencrypted HTTP web port 80 was exposed.',
        bn: '৫ টি পোর্টের মধ্যে ৪ টি নিরাপদ ছিল (পোর্ট ২২, ২৫, ৫৩ ও ৪৪৩)। কেবল আন-এনক্রিপ্টেড HTTP পোর্ট ৮০ উন্মুক্ত ছিল।'
      },
    },
  ],
  quiz: {
    id: 'port-scanning-quiz',
    title: {
      en: 'Port Scanning & Reconnaissance Architecture Quiz',
      bn: 'পোর্ট স্ক্যানিং ও রেকোনাইসেন্স আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'netsec-scan-qz-1',
        kind: 'mcq',
        topic: 'udp-scanning-difficulty',
        question: {
          en: 'Why is UDP port scanning significantly slower and more difficult to analyze than TCP port scanning?',
          bn: 'টিসিপি পোর্ট স্ক্যানিংয়ের তুলনায় কেন ইউডিপি (UDP) পোর্ট স্ক্যানিং অনেক বেশি ধীরগতির এবং বিশ্লেষণ করা কঠিন?'
        },
        options: [
          {
            en: 'UDP is connectionless and does not have a 3-way handshake; listening services often remain silent upon receiving a probe, and host operating systems strictly rate-limit ICMP Port Unreachable error replies',
            bn: 'UDP হলো কানেকশনলেস প্রোটোকল যার কোনো ৩-ওয়ে হ্যান্ডশেক নেই; অনেক সময় খোলা সার্ভিসও কোনো উত্তর দেয় না, এবং অপারেটিং সিস্টেমগুলো ICMP পোর্ট আনরিচেবল এরর রেসপন্স অত্যন্ত সীমিত হারে পাঠায়',
          },
          {
            en: 'Because UDP packets can only travel across copper cables and not fiber',
            bn: 'কারণ ইউডিপি প্যাকেট কেবল তামার তারে চলতে পারে, ফাইবারে নয়',
          },
          {
            en: 'Because UDP requires typing passwords before each packet',
            bn: 'কারণ ইউডিপিতে প্রতিটি প্যাকেট পাঠানোর আগে পাসওয়ার্ড টাইপ করতে হয়',
          },
          {
            en: 'Because international law permits UDP scans only on Fridays',
            bn: 'কারণ আন্তর্জাতিক আইনে কেবল শুক্রবার ইউডিপি স্ক্যান চালানোর অনুমতি রয়েছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'UDP services don\'t reply unless probed with specific application payloads.',
          bn: 'নির্দিষ্ট পেলোড না পাঠালে ইউডিপি সার্ভিস কোনো উত্তর দেয় না এবং ICMP রেট-লিমিট থাকে।'
        },
        explanation: {
          en: 'Linux kernels throttle ICMP unreachable packets to 1 per second. Scanning 65535 UDP ports would take over 18 hours unless customized application probes are used.',
          bn: 'লিনাক্স কার্নেল প্রতি সেকেন্ডে মাত্র ১ টি ICMP এরর পাঠায়। ফলে ৬৫৫৩৫ টি ইউডিপি পোর্ট স্ক্যান করতে ১৮ ঘণ্টারও বেশি সময় লেগে যায়।'
        },
      },
      {
        id: 'netsec-scan-qz-2',
        kind: 'mcq',
        topic: 'service-version-banner-grabbing',
        question: {
          en: 'What is "Banner Grabbing" during network reconnaissance, and how do attackers use it to locate exploitable vulnerabilities?',
          bn: 'নেটওয়ার্ক অনুসন্ধানের সময় "ব্যানার গ্র্যাবিং" (Banner Grabbing) কী এবং আক্রমণকারীরা কীভাবে এর মাধ্যমে দুর্বলতা খুঁজে বের করে?'
        },
        options: [
          {
            en: 'Connecting to an open port to read the text greeting emitted by the service (e.g. "Apache/2.4.41 (Ubuntu)"), allowing attackers to query vulnerability databases (CVEs) for matching unpatched exploits',
            bn: 'কোনো উন্মুক্ত পোর্টে সংযোগ করে সার্ভিসের প্রাথমিক টেক্সট বার্তা (যেমন "Apache/2.4.41 (Ubuntu)") পড়ে ফেলা, যার মাধ্যমে আক্রমণকারীরা সরাসরি CVE ডাটাবেজ খুঁজে দুর্বলতার এক্সপ্লয়েট বের করে নেয়',
          },
          {
            en: 'Stealing physical advertising banners hung outside the corporate office',
            bn: 'কর্পোরেট অফিসের বাইরে ঝুলানো ফিজিক্যাল বিজ্ঞাপনের ব্যানার চুরি করা',
          },
          {
            en: 'Taking a digital screenshot of the computer desktop wallpaper',
            bn: 'কম্পিউটার ডেস্কটপের ওয়ালপেপারের একটি স্ক্রিনশট ছবি তুলে রাখা',
          },
          {
            en: 'Changing the background color of web browser windows to red',
            bn: 'ওয়েব ব্রাউজার উইন্ডোর ব্যাকগ্রাউন্ডের রঙ লাল রঙে রূপান্তর করা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Services often leak their exact software name and version number upon connection.',
          bn: 'সংযোগ তৈরির সাথে সাথেই সার্ভিসগুলো তাদের সফটওয়্যারের সঠিক সংস্করণ জানিয়ে দেয়।'
        },
        explanation: {
          en: 'Security administrators harden services by suppressing detailed banners (e.g. setting ServerTokens Prod in Apache or server_tokens off in Nginx) to deny reconnaissance data.',
          bn: 'নিরাপত্তা নিশ্চিত করতে সার্ভারের সেটিংসে ব্যানার প্রদর্শন বন্ধ রাখা হয় যাতে আক্রমণকারী সফটওয়্যার সংস্করণ জানতে না পারে।'
        },
      },
      {
        id: 'netsec-scan-qz-3',
        kind: 'mcq',
        topic: 'single-packet-authorization-spa',
        question: {
          en: 'How does modern Single Packet Authorization (SPA) improve upon traditional multi-port knocking?',
          bn: 'ঐতিহ্যবাহী মাল্টি-পোর্ট নকিংয়ের তুলনায় আধুনিক সিঙ্গল প্যাকেট অথরাইজেশন (SPA) কীভাবে শ্রেষ্ঠত্ব অর্জন করে?'
        },
        options: [
          {
            en: 'SPA transmits a single cryptographically encrypted and HMAC-signed UDP packet containing the client identity and timestamp, preventing eavesdroppers from replaying the knock sequence',
            bn: 'SPA একটিমাত্র ক্রিপ্টোগ্রাফিকভাবে এনক্রিপ্ট করা এবং HMAC-স্বাক্ষরিত UDP প্যাকেট পাঠায় যাতে ক্লায়েন্টের পরিচয় ও টাইমস্ট্যাম্প থাকে, ফলে আড়িপাতাকারীরা নক সিকোয়েন্স রেকর্ড করে পুনরায় ব্যবহার করতে পারে না',
          },
          {
            en: 'SPA deletes all passwords from the client computer memory',
            bn: 'SPA ক্লায়েন্ট কম্পিউটারের মেমোরি থেকে সমস্ত পাসওয়ার্ড মুছে ফেলে',
          },
          {
            en: 'SPA speeds up processor clock speeds by thirty percent',
            bn: 'SPA প্রসেসরের ক্লক স্পিড ত্রিশ শতাংশ বৃদ্ধি করে',
          },
          {
            en: 'SPA allows computers to connect to the internet without network cables',
            bn: 'SPA কোনো তার বা ওয়াইফাই ছাড়াই কম্পিউটারকে ইন্টারনেটে যুক্ত হতে সাহায্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SPA uses cryptographic encryption and replay-resistant timestamps in one packet.',
          bn: 'SPA একটিমাত্র প্যাকেটে এনক্রিপশন এবং রিপ্লে-প্রতিরোধী টাইমস্ট্যাম্প ব্যবহার করে।'
        },
        explanation: {
          en: 'Traditional port knocking can be snooped and replayed. Tools like fwknop use SPA with GPG/Rijndael to authenticate clients before opening firewall ports.',
          bn: 'পুরানো পোর্ট নকিং আড়ি পেতে পুনরায় চালানো যেত। fwknop-এর মতো আধুনিক টুলে SPA এনক্রিপ্ট করা কি দিয়ে যাচাই করে পোর্ট খোলে।'
        },
      },
      {
        id: 'netsec-scan-qz-4',
        kind: 'mcq',
        topic: 'decoy-scanning-in-nmap',
        question: {
          en: 'What is the purpose of Nmap Decoy Scanning (-D RND:10) from an adversary perspective, and how do defenders detect it?',
          bn: 'আক্রমণকারীর দৃষ্টিকোণ থেকে Nmap ডিকয় স্ক্যানিংয়ের (-D RND:10) উদ্দেশ্য কী এবং রক্ষকেরা কীভাবে এটি সনাক্ত করেন?'
        },
        options: [
          {
            en: 'The scanner spoofs fake probe packets from ten random IP addresses alongside the real attacker IP, hiding the true source among innocent hosts; defenders detect it by analyzing traffic correlation and observing which IP completes the handshake',
            bn: 'স্ক্যানার নিজের আসল আইপির পাশাপাশি দশটি এলোমেলো আইপি থেকে ভুয়া প্যাকেট পাঠায় যাতে আসল আক্রমণকারীকে চেনা না যায়; রক্ষকেরা লক্ষ্য করেন কোন আইপিটি শেষ পর্যন্ত হ্যান্ডশেক সম্পন্ন করেছে',
          },
          {
            en: 'To speed up internet download speeds by twenty percent',
            bn: 'ইন্টারনেট ডাউনলোডের গতি বিশ শতাংশ পর্যন্ত বৃদ্ধি করার জন্য',
          },
          {
            en: 'To make computer monitors flash bright lights during scans',
            bn: 'স্ক্যান চলাকালীন কম্পিউটার মনিটরে উজ্জ্বল আলো চমকানোর জন্য',
          },
          {
            en: 'To change all text files on the computer into PDF documents',
            bn: 'কম্পিউটারের সমস্ত টেক্সট ফাইলকে পিডিএফ ফাইলে রূপান্তর করার জন্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'Decoys flood logs with fake IPs, but only the real IP can receive return packets.',
          bn: 'ডিকয় লগে ভুয়া আইপির বন্যা বইয়ে দেয়, কিন্তু কেবল আসল আইপিই উত্তর গ্রহণ করতে পারে।'
        },
        explanation: {
          en: 'Spoofed decoy IPs cannot receive return SYN-ACK packets due to internet routing. Only the true attacker IP responds with follow-up packets.',
          bn: 'ইন্টারনেট রাউটিংয়ের কারণে ভুয়া আইপিগুলো ফিরতি উত্তর পায় না। কেবল আসল আক্রমণকারীই পরবর্তী প্যাকেট পাঠায়, যা দেখে তাকে ধরা যায়।'
        },
      },
    ],
  },
  next: {
    slug: 'ddos-defense',
    title: {
      en: 'Distributed Denial of Service (DDoS): Floods & Mitigation',
      bn: 'ডিস্ট্রিবিউটেড ডিনায়েল অব সার্ভিস (DDoS): আক্রমণ ও প্রতিরোধ'
    },
  },
};
