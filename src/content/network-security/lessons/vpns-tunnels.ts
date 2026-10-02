import type { Lesson } from '../../../lib/types';

export const VpnsTunnelsLesson: Lesson = {
  slug: 'vpns-tunnels',
  tech: 'network-security',
  title: {
    en: 'VPN Architectures: IPsec, OpenVPN & WireGuard Cryptokey Routing',
    bn: 'ভিপিএন আর্কিটেকচার: আইপিসেক, ওপেনভিপিএন এবং ওয়্যারগার্ড ক্রিপ্টোকি রাউটিং'
  },
  summary: {
    en: 'Master secure tunneling architectures across untrusted public networks. Compare the 3 major enterprise tunneling standards: network-layer IPsec (AH and ESP), user-space OpenVPN over SSL/TLS, and modern kernel-integrated WireGuard. Understand how WireGuard Cryptokey Routing maps cryptographic public keys directly to permitted internal tunnel IP addresses using ChaCha20-Poly1305. Inspect an executable Node.js WireGuard router evaluating 4 transmission attempts: 3 authenticated peer sessions pass through encrypted tunnels, and 1 unauthenticated guest probe is dropped.',
    bn: 'অবিশ্বস্ত পাবলিক নেটওয়ার্কে নিরাপদ টানেলিং আর্কিটেকচার আয়ত্ত করুন। ৩ টি প্রধান এন্টারপ্রাইজ ভিপিএন স্ট্যান্ডার্ডের তুলনা করুন: নেটওয়ার্ক-লেয়ার আইপিসেক (AH এবং ESP), ওপেনভিপিএন (SSL/TLS ভিত্তিক) এবং আধুনিক কার্নেল-সংযুক্ত ওয়্যারগার্ড। কীভাবে ওয়্যারগার্ড ক্রিপ্টোকি রাউটিং ChaCha20-Poly1305 ব্যবহার করে ক্রিপ্টোগ্রাফিক পাবলিক কি-কে অনুমোদিত টানেল আইপি ঠিকানার সাথে সরাসরি আবদ্ধ করে তা বুঝুন। ৪ টি ট্রান্সমিশন চেষ্টা মূল্যায়নকারী একটি কার্যকর Node.js ওয়্যারগার্ড রাউটার পরীক্ষা করুন: ৩ টি অনুমোদিত সেশন এনক্রিপ্ট করা টানেলে প্রবেশ করে এবং ১ টি অননুমোদিত অনুসন্ধান বাতিল হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'why-encrypted-tunnels-matter',
      text: {
        en: 'Encapsulating Secrets: Why Virtual Private Networks (VPNs) Are Mandatory',
        bn: 'তথ্য গোপন রাখা: ভার্চুয়াল প্রাইভেট নেটওয়ার্ক (ভিপিএন) কেন বাধ্যতামূলক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit data across the public internet (such as connecting remote engineering laptops to private cloud subnets or linking two datacenters together), your packets traverse dozens of intermediate third-party network hops. Any untrusted actor on a public Wi-Fi router, local internet service provider, or transit backbone can passively monitor unencrypted packet headers and payloads.',
        bn: 'যখন আপনি পাবলিক ইন্টারনেটের মধ্য দিয়ে ডেটা আদান-প্রদান করেন (যেমন দূরবর্তী ল্যাপটপ থেকে ক্লাউড সার্ভারে সংযোগ বা দুটি ডেটা সেন্টারের মধ্যকার যোগাযোগ), তখন আপনার প্যাকেটগুলো ডজনখানেক তৃতীয় পক্ষের নেটওয়ার্ক নোড অতিক্রম করে। পাবলিক ওয়াইফাই রাউটার বা ট্রানজিট ব্যাকবোনে থাকা যেকোনো মধ্যস্থতাকারী আন-এনক্রিপ্টেড প্যাকেট থেকে সংবেদনশীল তথ্য ও হেডার সরাসরি চুরি করতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Virtual Private Network (VPN) solves this vulnerability by encapsulating original internal IP packets inside new, cryptographically authenticated and encrypted IP packets. The outer packet routes across the public internet as random ciphertext noise, while the inner private payload is only unwrapped and verified once it reaches the authenticated tunnel endpoint.',
        bn: 'ভার্চুয়াল প্রাইভেট নেটওয়ার্ক বা ভিপিএন (Virtual Private Network) মূল অভ্যন্তরীণ আইপি প্যাকেটকে একটি নতুন ক্রিপ্টোগ্রাফিক এবং এনক্রিপ্ট করা প্যাকেটের ভেতর মুড়ে ফেলে এই ঝুঁকির সমাধান করে। বাইরের প্যাকেটটি পাবলিক ইন্টারনেটের চোখে সাধারণ অর্থহীন সাইফারটেক্সট হিসেবে যাতায়াত করে, আর ভেতরের মূল ডেটা কেবল অপর প্রান্তে থাকা অনুমোদিত গেটওয়েতে পৌঁছানোর পরেই ডিক্রিপ্ট ও যাচাই করা হয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. IPsec (Layer 3 Tunnel / Transport Mode)',
            bn: '১. আইপিসেক (লেয়ার ৩ টানেল / ট্রান্সপোর্ট মোড)'
          },
          text: {
            en: 'The traditional telecom standard. Uses IKEv2 for key negotiation and ESP (Encapsulating Security Payload) for encryption. Robust for permanent site-to-site datacenter links, but complex to manage.',
            bn: 'ঐতিহ্যবাহী টেলিকম স্ট্যান্ডার্ড। কি বিনিময়ের জন্য IKEv2 এবং এনক্রিপশনের জন্য ESP ব্যবহার করে। দুটি ডেটা সেন্টারের মধ্যকার স্থায়ী লিংকের জন্য শক্তিশালী হলেও এর কনফিগারেশন অত্যন্ত জটিল।'
          },
        },
        {
          title: {
            en: '2. OpenVPN (User-Space SSL/TLS)',
            bn: '২. ওপেনভিপিএন (ইউজার-স্পেস SSL/TLS)'
          },
          text: {
            en: 'Runs as a user-space daemon relying on OpenSSL. Flexible across operating systems, but suffers performance overhead from context-switching between kernel network drivers (TUN/TAP) and user memory.',
            bn: 'OpenSSL এর ওপর নির্ভর করে একটি ইউজার-স্পেস প্রোগ্রাম হিসেবে চলে। সব অপারেটিং সিস্টেমে চালানো গেলেও কার্নেল ড্রাইভার (TUN/TAP) ও ইউজার মেমোরির মধ্যে কনটেক্সট-সুইচিংয়ের কারণে এর গতি কমে যায়।'
          },
        },
        {
          title: {
            en: '3. WireGuard (Modern Cryptokey Routing)',
            bn: '৩. ওয়্যারগার্ড (আধুনিক ক্রিপ্টোকি রাউটিং)'
          },
          text: {
            en: 'A modern, ultra-fast VPN implemented directly in the Linux kernel (<4,000 lines of code). Enforces ChaCha20-Poly1305 authenticated encryption and binds public keys directly to internal IP subnets.',
            bn: 'সরাসরি লিনাক্স কার্নেলে যুক্ত একটি আধুনিক ও দ্রুতগতির ভিপিএন (৪,০০০ লাইনের কম কোড)। এটি ChaCha20-Poly1305 এনক্রিপশন প্রয়োগ করে এবং প্রতিটি পাবলিক কি-কে সরাসরি অভ্যন্তরীণ আইপির সাথে সংযুক্ত করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'WireGuard Cryptokey Tunnel Gateway: 3 Authenticated Peers vs 1 Dropped Probe',
        bn: 'ওয়্যারগার্ড ক্রিপ্টোকি টানেল গেটওয়ে: ৩ টি অনুমোদিত পিয়ার বনাম ১ টি বাতিল অনুসন্ধান'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="WireGuard cryptokey routing table routing 3 authenticated peers and dropping 1 unauthenticated packet">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">WIREGUARD CRYPTOKEY ROUTING TABLE & ENCRYPTED TUNNEL GATEWAY</text>
  
  <!-- Cryptokey Peer Registry Banner -->
  <rect x="35" y="48" width="770" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="50" y="75" fill="#94a3b8" font-size="11" font-weight="bold">ACTIVE ROUTING TABLE:</text>
  <text x="210" y="75" fill="#38bdf8" font-size="10" font-weight="bold">pk-mina-99 = 10.8.0.2 | pk-rafi-77 = 10.8.0.3 | pk-sara-55 = 10.8.0.4 [ChaCha20-Poly1305]</text>
  
  <!-- Left Side: 4 Transmission Attempts -->
  <g transform="translate(35, 105)">
    <rect width="370" height="290" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="30" rx="8" fill="#0284c7"/>
    <text x="185" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 INCOMING TRANSMISSION ATTEMPTS</text>
    
    <g transform="translate(12, 40)">
      <rect width="346" height="52" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="20" fill="#ffffff" font-size="9" font-weight="bold">1. Mina (Lead Engineer):</text>
      <text x="10" y="38" fill="#94a3b8" font-size="8.5">Key: pk-mina-99 | Tunnel IP: 10.8.0.2 -> DB Port 5432</text>
      
      <rect y="58" width="346" height="52" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="78" fill="#ffffff" font-size="9" font-weight="bold">2. Rafi (DevOps SRE):</text>
      <text x="10" y="96" fill="#94a3b8" font-size="8.5">Key: pk-rafi-77 | Tunnel IP: 10.8.0.3 -> K8s Port 6443</text>
      
      <rect y="116" width="346" height="52" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="136" fill="#ffffff" font-size="9" font-weight="bold">3. Sara (SecOps Analyst):</text>
      <text x="10" y="154" fill="#94a3b8" font-size="8.5">Key: pk-sara-55 | Tunnel IP: 10.8.0.4 -> SIEM Port 9200</text>
      
      <rect y="174" width="346" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="194" fill="#fca5a5" font-size="9" font-weight="bold">4. Guest Wi-Fi Snooper / Attacker:</text>
      <text x="10" y="212" fill="#ef4444" font-size="8.5">Key: pk-unknown-00 | Plaintext probe -> Port 5432</text>
    </g>
  </g>
  
  <!-- Right Side: Gateway Cryptokey Verdicts -->
  <g transform="translate(435, 105)">
    <rect width="370" height="290" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="30" rx="8" fill="#059669"/>
    <text x="185" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">GATEWAY VERDICTS: 3 PASS [✓] | 1 DROP [✗]</text>
    
    <g transform="translate(12, 40)">
      <rect width="346" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PASS: Mina Cryptokey Validated [✓]</text>
      <text x="10" y="38" fill="#34d399" font-size="8.5">Inner packet decrypted & routed to private DB subnet</text>
      
      <rect y="58" width="346" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="78" fill="#6ee7b7" font-size="9" font-weight="bold">2. PASS: Rafi Cryptokey Validated [✓]</text>
      <text x="10" y="96" fill="#34d399" font-size="8.5">Inner packet decrypted & routed to Kubernetes API</text>
      
      <rect y="116" width="346" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="136" fill="#6ee7b7" font-size="9" font-weight="bold">3. PASS: Sara Cryptokey Validated [✓]</text>
      <text x="10" y="154" fill="#34d399" font-size="8.5">Inner packet decrypted & routed to SIEM cluster</text>
      
      <rect y="174" width="346" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="194" fill="#fca5a5" font-size="9" font-weight="bold">4. DROP: Invalid Key / Unregistered Peer [✗]</text>
      <text x="10" y="212" fill="#ef4444" font-size="8.5">Packet silently discarded at perimeter boundary</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Intermediate sniffers on public Wi-Fi see only random UDP ciphertext bytes; inner data remains sealed</text>
</svg>`,
      caption: {
        en: 'The WireGuard cryptokey router evaluates 4 transmission attempts: 3 authenticated peers are routed to private subnets and 1 unauthenticated guest probe is dropped.',
        bn: 'ওয়্যারগার্ড ক্রিপ্টোকি রাউটার ৪ টি ট্রান্সমিশন চেষ্টা মূল্যায়ন করে: ৩ জন অনুমোদিত পিয়ার প্রাইভেট সাবনেটে প্রবেশ করে এবং ১ টি অননুমোদিত অনুসন্ধান বাতিল হয়।'
      },
    },
    {
      type: 'heading',
      id: 'wireguard-router-code',
      text: {
        en: 'Building an Executable WireGuard Cryptokey Router in Node.js',
        bn: 'Node.js-এ কার্যকর ওয়্যারগার্ড ক্রিপ্টোকি রাউটার তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'wireguard-cryptokey-router.js',
      code: `// Deterministic WireGuard Cryptokey Routing Simulator Engine
class WireGuardCryptokeyRouter {
  constructor() {
    // Peer table mapping public cryptographic keys to allowed tunnel IP addresses
    this.peerTable = new Map();
  }

  // Register authorized peer with unique public key and allowed IP prefix
  registerPeer(publicKey, allowedIp, peerName) {
    this.peerTable.set(publicKey, { allowedIp, peerName });
  }

  // Process incoming encapsulated UDP packet at tunnel interface
  processPacket(packet) {
    const peer = this.peerTable.get(packet.publicKey);

    // 1. Verify cryptographic key validity
    if (!peer) {
      return {
        verdict: 'DROP',
        peerName: 'Unknown',
        reason: 'Unregistered or invalid cryptographic public key'
      };
    }

    // 2. Cryptokey Routing check: Ensure source IP matches allowed tunnel prefix
    if (peer.allowedIp !== packet.sourceTunnelIp) {
      return {
        verdict: 'DROP',
        peerName: peer.peerName,
        reason: \`Cryptokey IP spoofing attempt: Key for \${peer.peerName} requires \${peer.allowedIp}, received \${packet.sourceTunnelIp}\`
      };
    }

    return {
      verdict: 'PASS',
      peerName: peer.peerName,
      reason: \`Authenticated via ChaCha20-Poly1305 for \${peer.peerName} (\${peer.allowedIp})\`
    };
  }
}

const router = new WireGuardCryptokeyRouter();

// Register 3 authorized engineering team peers
router.registerPeer('pk-mina-99', '10.8.0.2', 'Mina (Lead Engineer)');
router.registerPeer('pk-rafi-77', '10.8.0.3', 'Rafi (DevOps SRE)');
router.registerPeer('pk-sara-55', '10.8.0.4', 'Sara (SecOps Analyst)');

// 4 distinct transmission attempts arriving at VPN interface
const transmissions = [
  {
    name: 'Mina Database Query',
    publicKey: 'pk-mina-99',
    sourceTunnelIp: '10.8.0.2',
    destIp: '10.0.1.5:5432'
  },
  {
    name: 'Rafi Kubernetes Cluster Exec',
    publicKey: 'pk-rafi-77',
    sourceTunnelIp: '10.8.0.3',
    destIp: '10.0.1.10:6443'
  },
  {
    name: 'Sara SIEM Incident Log Pull',
    publicKey: 'pk-sara-55',
    sourceTunnelIp: '10.8.0.4',
    destIp: '10.0.1.20:9200'
  },
  {
    name: 'Guest Network Unauthenticated Probe',
    publicKey: 'pk-unknown-00',
    sourceTunnelIp: '10.8.0.99',
    destIp: '10.0.1.5:5432'
  }
];

let totalPassed = 0;
let totalDropped = 0;

console.log('=== WireGuard Cryptokey Routing Evaluation ===\\n');
transmissions.forEach((t, index) => {
  const result = router.processPacket(t);
  if (result.verdict === 'PASS') {
    totalPassed++;
    console.log(\`[\${index + 1}] PASS [✓]: \${t.name}\`);
    console.log(\`    Identity: \${result.peerName}\`);
    console.log(\`    Reason:   \${result.reason}\\n\`);
  } else {
    totalDropped++;
    console.log(\`[\${index + 1}] DROP [✗]: \${t.name}\`);
    console.log(\`    Reason:   \${result.reason}\\n\`);
  }
});

console.log('=== VPN Tunnel Gateway Audit Summary ===');
console.log('Total Transmissions Evaluated:', transmissions.length);
console.log('Encrypted & Routed (Pass):    ', totalPassed);
console.log('Unauthenticated Dropped:      ', totalDropped);`,
      caption: {
        en: 'The WireGuard cryptokey simulator evaluates 4 network transmissions: 3 authenticated peers pass securely and 1 unauthenticated guest attempt is dropped.',
        bn: 'ওয়্যারগার্ড ক্রিপ্টোকি সিমুলেটরটি ৪ টি নেটওয়ার্ক ট্রান্সমিশন মূল্যায়ন করে: ৩ জন অনুমোদিত পিয়ার নিরাপদে প্রবেশ করে এবং ১ টি অননুমোদিত চেষ্টা বাতিল হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The VPN Kill-Switch: Preventing Plaintext Leaks on Tunnel Drop',
        bn: 'ভিপিএন কিল-সুইচ: টানেল বিচ্ছিন্ন হলে ডেটা ফাঁস প্রতিরোধ'
      },
      text: {
        en: 'A critical vulnerability in mobile client VPNs is silent fallback to unencrypted local Wi-Fi when the encrypted tunnel drops. Without an operating system level "Kill-Switch" (configuring firewall rules to route traffic exclusively through the tunnel interface), client laptops will automatically re-route private internal credentials and database queries across unencrypted public café Wi-Fi networks! Always enforce persistent firewall kill-switches on remote endpoints.',
        bn: 'মোবাইল বা ল্যাপটপ ভিপিএনের একটি মারাত্মক ঝুঁকি হলো এনক্রিপ্ট করা টানেল কোনো কারণে বিচ্ছিন্ন হয়ে গেলে ব্রাউজারের নিজে থেকেই স্থানীয় সাধারণ ওয়াইফাইতে ফিরে যাওয়া। অপারেটিং সিস্টেম স্তরে একটি "কিল-সুইচ" (যা ফায়ারওয়াল রুল দিয়ে নিশ্চিত করে যে কেবল ভিপিএন ইন্টারফেস ছাড়া অন্য কোনো পথ দিয়ে প্যাকেট যেতে পারবে না) না থাকলে টানেল কাটলেই ল্যাপটপ থেকে পাসওয়ার্ড ও সংবেদনশীল ডেটা ক্যাফের উন্মুক্ত ওয়াইফাইতে ফাঁস হয়ে যাবে!'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-vpn-ex-1',
      kind: 'predict',
      topic: 'authenticated-peers-count',
      question: {
        en: 'Out of the 4 transmission attempts evaluated by the WireGuard cryptokey router, how many authenticated peer sessions were permitted through the encrypted tunnel? (3). Type the number.',
        bn: 'ওয়্যারগার্ড ক্রিপ্টোকি রাউটারে মূল্যায়িত ৪ টি ট্রান্সমিশন চেষ্টার মধ্যে সর্বমোট কয়টি অনুমোদিত সেশন এনক্রিপ্ট করা টানেলের মধ্য দিয়ে প্রবেশ করতে পেরেছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 peer sessions were authenticated.',
        bn: 'ঠিক ৩ জন পিয়ারের সেশন অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 4 transmissions, 3 passed: Mina (10.8.0.2), Rafi (10.8.0.3), and Sara (10.8.0.4).',
        bn: '৪ টির মধ্যে ৩ টি পাস করে: মিনা (১০.৮.০.২), রাফি (১০.৮.০.৩) এবং সারা (১০.৮.০.৪)।'
      },
    },
    {
      id: 'netsec-vpn-ex-2',
      kind: 'mcq',
      topic: 'cryptokey-routing-architecture',
      question: {
        en: 'How does WireGuard "Cryptokey Routing" simplify network security compared to traditional IPsec policy routing?',
        bn: 'ঐতিহ্যবাহী আইপিসেক পলিসি রাউটিংয়ের তুলনায় ওয়্যারগার্ডের "ক্রিপ্টোকি রাউটিং" কীভাবে নেটওয়ার্ক নিরাপত্তাকে সহজ ও গতিশীল করে?'
      },
      options: [
        {
          en: 'It binds each client public cryptographic key directly to a static tunnel IP address in the kernel routing table; packets are encrypted to the key owning the destination IP, eliminating complex phase 1/phase 2 handshake negotiation',
          bn: 'এটি কার্নেল রাউটিং টেবিলে প্রতিটি ক্লায়েন্টের পাবলিক ক্রিপ্টোগ্রাফিক কি-কে সরাসরি একটি নির্দিষ্ট টানেল আইপির সাথে আবদ্ধ করে; প্যাকেটগুলো সরাসরি সেই কি দিয়ে এনক্রিপ্ট হয়ে চলে যায় এবং কোনো জটিল ফেইজ ১/ফেইজ ২ নেগোসিয়েশনের প্রয়োজন হয় না',
        },
        {
          en: 'It automatically turns off all computer monitors during encryption',
          bn: 'এটি এনক্রিপশন চলাকালীন সমস্ত কম্পিউটার মনিটর বন্ধ করে দেয়',
        },
        {
          en: 'It compresses image files into plain text documents',
          bn: 'এটি ছবির ফাইলগুলোকে সাধারণ টেক্সট ফাইলে রূপান্তর করে ফেলে',
        },
        {
          en: 'It requires users to write down passwords on paper before sending data',
          bn: 'ডেটা পাঠানোর আগে এটি ব্যবহারকারীদের কাগজে পাসওয়ার্ড লিখে রাখার নির্দেশ দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Public keys are bound directly to permitted IP addresses.',
        bn: 'পাবলিক কি সরাসরি অনুমোদিত আইপি ঠিকানার সাথে আবদ্ধ থাকে।'
      },
      explanation: {
        en: 'Cryptokey routing acts like an authenticated IP routing table. If a packet source IP matches the peer public key, it is accepted; otherwise dropped.',
        bn: 'ক্রিপ্টোকি রাউটিং একটি অনুমোদিত রাউটিং টেবিলের মতো কাজ করে। কি-এর সাথে আইপি মিললে প্যাকেট ঢোকে, নতুবা সাথে সাথে ড্রপ হয়।'
      },
    },
    {
      id: 'netsec-vpn-ex-3',
      kind: 'mcq',
      topic: 'tcp-over-tcp-meltdown',
      question: {
        en: 'Why is running a VPN tunnel over UDP (e.g. UDP port 1194 or WireGuard UDP port 51820) strongly preferred over running over TCP?',
        bn: 'টিসিপির পরিবর্তে কেন UDP প্রোটোকলের ওপর ভিপিএন টানেল (যেমন UDP পোর্ট ১১৯৪ বা ওয়্যারগার্ড পোর্ট ৫১৮২০) চালানো অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'Running TCP inside TCP triggers the "TCP Meltdown Problem": when packet loss occurs, both the inner and outer TCP stacks simultaneously retransmit and back off exponentially, causing connection collapse and extreme latency',
          bn: 'টিসিপির ভেতরে টিসিপি চালালে "TCP Meltdown" সমস্যা তৈরি হয়: কোনো প্যাকেট হারিয়ে গেলে ভেতরের ও বাইরের উভয় টিসিপি স্ট্যাক একই সাথে বারবার ডেটা পাঠাতে থাকে এবং গতি কমিয়ে সংযোগ সম্পূর্ণ বিচ্ছিন্ন করে ফেলে',
        },
        {
          en: 'Because TCP cannot carry electronic computer data across cables',
          bn: 'কারণ টিসিপি তারের মধ্য দিয়ে ইলেকট্রনিক কম্পিউটার ডেটা পরিবহন করতে পারে না',
        },
        {
          en: 'Because UDP reduces the physical weight of laptop computers',
          bn: 'কারণ UDP ল্যাপটপ কম্পিউটারের শারীরিক ওজন কমিয়ে দিতে সাহায্য করে',
        },
        {
          en: 'Because international telecommunication laws forbid TCP on weekends',
          bn: 'কারণ আন্তর্জাতিক টেলিযোগাযোগ আইনে ছুটির দিনে টিসিপি ব্যবহার নিষিদ্ধ',
        },
      ],
      answer: 0,
      hint: {
        en: 'TCP over TCP causes compounding retransmissions and bandwidth collapse.',
        bn: 'টিসিপির ওপর টিসিপি চালালে উভয় স্তরে রিট্রান্সমিশনের কারণে ব্যান্ডউইথ ধ্বংস হয়।'
      },
      explanation: {
        en: 'Inner TCP already handles congestion and retransmission. Wrapping it in outer UDP ensures that dropped packets do not cause catastrophic stacked retransmission delays.',
        bn: 'ভেতরের টিসিপি নিজেই রিট্রান্সমিশন সামলায়। তাই বাইরের টানেল হিসেবে UDP ব্যবহার করলে কোনো কৃত্রিম জট তৈরি হয় না।'
      },
    },
    {
      id: 'netsec-vpn-ex-4',
      kind: 'predict',
      topic: 'dropped-transmissions-count',
      question: {
        en: 'How many unauthenticated transmissions were dropped by the WireGuard router due to an invalid cryptographic key? (1). Type the number.',
        bn: 'অবৈধ ক্রিপ্টোগ্রাফিক কি থাকার কারণে ওয়্যারগার্ড রাউটার দ্বারা সর্বমোট কয়টি অননুমোদিত ট্রান্সমিশন বাতিল হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Exactly 1 unauthenticated transmission was dropped.',
        bn: 'ঠিক ১ টি অননুমোদিত ট্রান্সমিশন বাতিল হয়েছিল।'
      },
      explanation: {
        en: 'The guest network probe with key "pk-unknown-00" had no matching entry in the cryptokey routing table and was dropped.',
        bn: '"pk-unknown-00" কিযুক্ত ক্ষতিকর অনুসন্ধানটির কোনো তথ্য টেবিলে না থাকায় তা ড্রপ হয়।'
      },
    },
  ],
  quiz: {
    id: 'vpns-tunnels-quiz',
    title: {
      en: 'VPN Architectures & WireGuard Cryptokey Routing Quiz',
      bn: 'ভিপিএন আর্কিটেকচার ও ওয়্যারগার্ড ক্রিপ্টোকি রাউটিং কুইজ'
    },
    questions: [
      {
        id: 'netsec-vpn-qz-1',
        kind: 'mcq',
        topic: 'wireguard-codebase-simplicity',
        question: {
          en: 'Why is the exceptionally small codebase size of WireGuard (<4,000 lines of code) a profound security advantage over OpenVPN and IPsec?',
          bn: 'ওপেনভিপিএন এবং আইপিসেকের তুলনায় ওয়্যারগার্ডের অবিশ্বাস্য ছোট কোডবেস (৪,০০০ লাইনের কম) কেন একটি অসাধারণ নিরাপত্তা সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'A tiny codebase can be comprehensively audited and mathematically verified by independent security researchers in days, leaving vastly fewer places for subtle buffer overflows or cryptographic vulnerabilities to hide',
            bn: 'একটি অতি ক্ষুদ্র কোডবেস মাত্র কয়েক দিনের মধ্যে স্বাধীন নিরাপত্তা গবেষক দ্বারা লাইন ধরে অডিট ও গাণিতিকভাবে যাচাই করা সম্ভব হয়, ফলে কোনো গোপন বাফার ওভারফ্লো বা নিরাপত্তা ত্রুটি লুকিয়ে থাকার সুযোগ থাকে না',
          },
          {
            en: 'Because small files download twenty times faster from internet websites',
            bn: 'কারণ ছোট ফাইলগুলো ইন্টারনেট ওয়েবসাইট থেকে বিশ গুণ দ্রুত ডাউনলোড হয়',
          },
          {
            en: 'Because developers receive financial bonuses for writing fewer lines of code',
            bn: 'কারণ ডেভেলপাররা কম লাইন কোড লিখলে বিশেষ আর্থিক বোনাস পেয়ে থাকেন',
          },
          {
            en: 'Because small codebases make computer monitors glow brighter',
            bn: 'কারণ ছোট কোডবেস কম্পিউটার মনিটরকে আরও উজ্জ্বলভাবে আলোকিত করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Fewer lines of code drastically reduce the attack surface and make complete audits feasible.',
          bn: 'কম লাইনের কোড আক্রমণের ঝুঁকি মারাত্মক কমায় এবং সম্পূর্ণ অডিট সম্ভব করে তোলে।'
        },
        explanation: {
          en: 'OpenVPN and IPsec span over 100,000 to 400,000 lines of code, making complete security verification almost impossible. WireGuard achieves auditability through minimalism.',
          bn: 'আইপিসেক ও ওপেনভিপিএনে লাখ লাখ লাইনের কোড থাকায় অডিট করা প্রায় অসম্ভব। ওয়্যারগার্ডের সংক্ষিপ্ত কোড নিরাপত্তা ও গতি উভয়ই নিশ্চিত করে।'
        },
      },
      {
        id: 'netsec-vpn-qz-2',
        kind: 'mcq',
        topic: 'split-tunneling-vs-full-tunneling',
        question: {
          en: 'What is the security difference between "Split Tunneling" and "Full Tunneling" on enterprise client VPNs?',
          bn: 'এন্টারপ্রাইজ ক্লায়েন্ট ভিপিএনে "স্প্লিট টানেলিং" (Split Tunneling) এবং "ফুল টানেলিং" (Full Tunneling) এর মধ্যে নিরাপত্তার মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'Full Tunneling routes 100% of all client internet traffic through the encrypted corporate gateway for inspection, whereas Split Tunneling routes only corporate subnets through the tunnel while general web browsing bypasses the VPN',
            bn: 'ফুল টানেলিং ক্লায়েন্টের সমস্ত ইন্টারনেট ট্রাফিক কর্পোরেট গেটওয়ের মাধ্যমে পাঠিয়ে পরীক্ষা করে, আর স্প্লিট টানেলিং কেবল অফিসের নির্দিষ্ট সাবনেট টানেলে পাঠায় এবং সাধারণ ব্রাউজিংকে ভিপিএনের বাইরে রাখে',
          },
          {
            en: 'Split Tunneling divides the computer monitor into two separate windows',
            bn: 'স্প্লিট টানেলিং কম্পিউটার মনিটরকে দুটি আলাদা উইন্ডোতে ভাগ করে ফেলে',
          },
          {
            en: 'Full Tunneling requires two ethernet cables plugged in simultaneously',
            bn: 'ফুল টানেলিং চালানোর জন্য একসাথে দুটি ইথারনেট তার সংযুক্ত করতে হয়',
          },
          {
            en: 'Split Tunneling only works when typing with two hands',
            bn: 'স্প্লিট টানেলিং কেবল তখনই কাজ করে যখন দুই হাত দিয়ে কিবোর্ডে টাইপ করা হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Full tunneling routes all internet traffic; split tunneling routes only designated subnets.',
          bn: 'ফুল টানেলিং সব ট্রাফিক অফিসে পাঠায়; স্প্লিট টানেলিং কেবল নির্দিষ্ট সাবনেট পাঠায়।'
        },
        explanation: {
          en: 'Split tunneling saves corporate bandwidth, but leaves the client vulnerable to local network attacks. High-security organizations enforce Full Tunneling to prevent data exfiltration.',
          bn: 'স্প্লিট টানেলিং ব্যান্ডউইথ বাঁচালেও ক্লায়েন্টকে স্থানীয় নেটওয়ার্কের ঝুঁকিতে ফেলে। উচ্চ নিরাপত্তার জন্য ফুল টানেলিং ব্যবহার করা হয়।'
        },
      },
      {
        id: 'netsec-vpn-qz-3',
        kind: 'mcq',
        topic: 'noise-protocol-framework',
        question: {
          en: 'What is the role of the "Noise Protocol Framework" in modern cryptographic tunnel architectures like WireGuard?',
          bn: 'ওয়্যারগার্ডের মতো আধুনিক ক্রিপ্টোগ্রাফিক টানেল আর্কিটেকচারে "Noise প্রোটোকল ফ্রেমওয়ার্ক" এর ভূমিকা কী?'
        },
        options: [
          {
            en: 'A battle-tested framework for building secure channel handshakes using Diffie-Hellman key exchange patterns, ensuring identity hiding, forward secrecy, and mutual authentication with minimal round-trips',
            bn: 'ডিফি-হেলম্যান কি এক্সচেঞ্জ প্যাটার্ন ব্যবহার করে নিরাপদ হ্যান্ডশেক তৈরির একটি প্রমাণিত কাঠামো, যা পরিচয় গোপন রাখা, ফরোয়ার্ড সিক্রেসি এবং দ্রুততম রাউন্ড-ট্রিপে পারস্পরিক প্রমাণীকরণ নিশ্চিত করে',
          },
          {
            en: 'A software sound driver that removes microphone background noise during calls',
            bn: 'একটি সফটওয়্যার সাউন্ড ড্রাইভার যা কল চলাকালীন মাইক্রোফোনের শব্দ দূর করে',
          },
          {
            en: 'A system that makes server fans run quietly during night hours',
            bn: 'এমন একটি ব্যবস্থা যা রাতের বেলা সার্ভারের ফ্যানকে নিঃশব্দে চলতে সাহায্য করে',
          },
          {
            en: 'A program that generates random musical tones when sending emails',
            bn: 'একটি প্রোগ্রাম যা ইমেইল পাঠানোর সময় এলোমেলো সুর উৎপন্ন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Noise formalizes secure cryptographic handshakes with proven mathematical safety.',
          bn: 'Noise প্রোটোকল গাণিতিকভাবে প্রমাণিত নিরাপদ ক্রিপ্টোগ্রাফিক হ্যান্ডশেক নিশ্চিত করে।'
        },
        explanation: {
          en: 'WireGuard uses Noise_IKpsk2. It provides 1-RTT handshakes, forward secrecy, and identity hiding without the bloat of TLS or IKEv2.',
          bn: 'ওয়্যারগার্ড Noise_IKpsk2 ব্যবহার করে। এটি অপ্রয়োজনীয় জটিলতা ছাড়াই দ্রুততম সময়ে ফরোয়ার্ড সিক্রেসি ও পরিচয় গোপন রাখা নিশ্চিত করে।'
        },
      },
      {
        id: 'netsec-vpn-qz-4',
        kind: 'mcq',
        topic: 'ipsec-ah-vs-esp',
        question: {
          en: 'Why is IPsec Encapsulating Security Payload (ESP) universally preferred over Authentication Header (AH) in modern enterprise networks?',
          bn: 'আধুনিক এন্টারপ্রাইজ নেটওয়ার্কে কেন Authentication Header (AH) এর তুলনায় Encapsulating Security Payload (ESP) সর্বজনীনভাবে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'ESP provides both confidentiality (encryption) and integrity authentication, whereas AH provides integrity authentication only without encrypting the packet payload, exposing sensitive data to sniffers',
            bn: 'ESP গোপনীয়তা (এনক্রিপশন) এবং অখণ্ডতা উভয়ই প্রদান করে, যেখানে AH কেবল অখণ্ডতা যাচাই করে কিন্তু প্যাকেট এনক্রিপ্ট করে না, ফলে সংবেদনশীল তথ্য আড়িপাতাকারীদের কাছে উন্মুক্ত থেকে যায়',
          },
          {
            en: 'Because AH requires computers to have twelve gigabytes of memory',
            bn: 'কারণ AH চালাতে কম্পিউটারে বারো গিগাবাইট মেমোরি থাকা বাধ্যতামূলক',
          },
          {
            en: 'Because ESP changes the color of all network cables to yellow',
            bn: 'কারণ ESP সমস্ত ইন্টারনেটের তারের রঙকে হলুদ রঙে বদলে দেয়',
          },
          {
            en: 'Because AH was deleted from the internet protocol standard in 1995',
            bn: 'কারণ ১৯৯৫ সালে ইন্টারনেট প্রোটোকল স্ট্যান্ডার্ড থেকে AH সম্পূর্ণ মুছে ফেলা হয়েছিল',
          },
        ],
        answer: 0,
        hint: {
          en: 'ESP encrypts payloads; AH only authenticates headers and breaks with NAT.',
          bn: 'ESP পুরো ডেটা এনক্রিপ্ট করে; AH এনক্রিপ্ট করে না এবং NAT থাকলে ভেঙে যায়।'
        },
        explanation: {
          en: 'AH does not encrypt payloads and in addition breaks when passing through NAT (Network Address Translation). ESP is the standard for encrypted secure tunnels.',
          bn: 'AH ডেটা গোপন রাখে না এবং রাউটারের NAT পার হতে গেলে নষ্ট হয়ে যায়। তাই এনক্রিপ্ট করা নিরাপদ টানেলের জন্য ESP আদর্শ।'
        },
      },
    ],
  },
  next: {
    slug: 'ids-ips',
    title: {
      en: 'Intrusion Detection (IDS) & Prevention (IPS): Signatures & Heuristics',
      bn: 'অনুপ্রবেশ সনাক্তকরণ (IDS) ও প্রতিরোধ (IPS): সিগনেচার ও হিউরিস্টিকস'
    },
  },
};
