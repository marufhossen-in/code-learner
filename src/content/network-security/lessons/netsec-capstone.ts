import type { Lesson } from '../../../lib/types';

export const NetsecCapstoneLesson: Lesson = {
  slug: 'netsec-capstone',
  tech: 'network-security',
  title: {
    en: 'Network Security Capstone: Hardening Enterprise Infrastructure & Zero Trust',
    bn: 'নেটওয়ার্ক সিকিউরিটি ক্যাপস্টোন: এন্টারপ্রাইজ ইনফ্রাস্ট্রাকচার সুরক্ষিতকরণ ও জিরো ট্রাস্ট'
  },
  summary: {
    en: 'Synthesize every layer of defense-in-depth into an enterprise Zero Trust Network Architecture (ZTNA). Integrate default-deny ingress firewalls, stateful connection tracking, WireGuard cryptokey tunnels, in-line deep packet inspection IPS, 3-tier micro-segmentation, and edge DDoS rate limiting. Inspect an executable Node.js posture auditor evaluating 5 security pillars: an initial unmitigated volumetric flood scores 4/5 = 0.80 (HOLD), and deploying Anycast edge scrubbing achieves a perfect 5/5 = 1.00 (SHIP).',
    bn: 'ডিফেন্স-ইন-ডেপথের প্রতিটি স্তরকে সমন্বয় করে একটি এন্টারপ্রাইজ জিরো ট্রাস্ট নেটওয়ার্ক আর্কিটেকচার (ZTNA) গড়ে তুলুন। ডিফল্ট-ডিনায় ইনগ্রেস ফায়ারওয়াল, স্টেটফুল কানেকশন ট্র্যাকিং, ওয়্যারগার্ড এনক্রিপ্টেড টানেল, ইন-লাইন ডিপ প্যাকেট ইন্সপেকশন আইপিএস, ৩-স্তরীয় মাইক্রো-সেগমেন্টেশন এবং ডিডিওএস রেট লিমিটিং একত্রিত করুন। ৫ টি নিরাপত্তা পিলার মূল্যায়নকারী একটি কার্যকর Node.js অডিটর পরীক্ষা করুন: প্রাথমিক দুর্বলতায় স্কোর হয় ৪/৫ = ০.৮০ (HOLD), এবং এজ স্ক্রাবিং যুক্ত করার পর পূর্ণাঙ্গ ৫/৫ = ১.০০ (SHIP) অর্জন করে।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'zero-trust-and-defense-in-depth',
      text: {
        en: 'Enterprise Defense-in-Depth: Implementing NIST Zero Trust Architecture',
        bn: 'এন্টারপ্রাইজ ডিফেন্স-ইন-ডেপথ: নিস্ট (NIST) জিরো ট্রাস্ট আর্কিটেকচার বাস্তবায়ন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Traditional castle-and-moat security assumed that anyone inside the corporate intranet was trustworthy. Modern enterprise networks reject this assumption. They follow the Zero Trust architecture defined by the National Institute of Standards and Technology (NIST). Under Zero Trust, the core mantra is "Never trust, always verify." No network segment is implicitly safe, whether packets originate from an employee laptop or a cloud database.',
        bn: 'ঐতিহ্যবাহী নিরাপত্তা ব্যবস্থার ধারণা ছিল যে অফিসের অভ্যন্তরীণ নেটওয়ার্কের ভেতরে থাকা প্রতিটি কম্পিউটার নিরাপদ। আধুনিক এন্টারপ্রাইজ নেটওয়ার্ক এই ধারণা প্রত্যাখ্যান করে। এগুলো যুক্তরাষ্ট্রের ন্যাশনাল ইনস্টিটিউট অব স্ট্যান্ডার্ডস অ্যান্ড টেকনোলজি (NIST) নির্দেশিত জিরো ট্রাস্ট নীতিমালা মেনে চলে। জিরো ট্রাস্টের মূল কথা হলো "কাউকে অন্ধভাবে বিশ্বাস করো না, প্রতিবার যাচাই করো।" কোনো নেটওয়ার্ক অঞ্চলই স্বয়ংক্রিয়ভাবে নিরাপদ নয়, তা কর্মীর ল্যাপটপ হোক কিংবা ক্লাউড ডাটাবেজ হোক।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A battle-tested network posture requires multiple overlapping defensive layers so that the failure of any single firewall, proxy, or secret key does not result in total infrastructure compromise. By orchestrating packet filtering, cryptographic routing, deep packet inspection, and micro-segmentation, defenders construct an uncompromising defense-in-depth perimeter.',
        bn: 'একটি মজবুত নিরাপত্তা ব্যবস্থার জন্য একাধিক সমান্তরাল স্তরের প্রতিরক্ষা প্রয়োজন, যাতে একটি ফায়ারওয়াল বা এনক্রিপশন কি কোনোভাবে ব্যর্থ হলেও পুরো পরিকাঠামো হ্যাক না হয়। প্যাকেট ফিল্টারিং, ক্রিপ্টোগ্রাফিক রাউটিং, ডিপ প্যাকেট ইন্সপেকশন এবং মাইক্রো-সেগমেন্টেশনের সমন্বয়ে একটি দুর্ভেদ্য ডিফেন্স-ইন-ডেপথ সীমানা তৈরি করা হয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Ingress & Stateful Perimeter',
            bn: '১. ইনগ্রেস ও স্টেটফুল পেরিমিটার'
          },
          text: {
            en: 'Enforces default-deny on all 65535 ports. Maintains conntrack state tables to drop spoofed unsolicited packets and INVALID TCP states before internal routing.',
            bn: '৬৫৫৩৫ টি পোর্টে ডিফল্ট-ডিনায় নীতি কার্যকর করে। অভ্যন্তরীণ রাউটিংয়ে পৌঁছানোর আগেই ভুয়া ও INVALID টিসিপি প্যাকেট ফেলে দিতে কনট্র্যাক টেবিল ব্যবহার করে।'
          },
        },
        {
          title: {
            en: '2. Cryptokey WireGuard Overlay',
            bn: '২. ক্রিপ্টোকি ওয়্যারগার্ড ওভারলে'
          },
          text: {
            en: 'Connects branch offices and remote engineers over ChaCha20-Poly1305 authenticated tunnels. Silently drops any frame lacking a valid cryptographic signature.',
            bn: 'শাখা অফিস এবং প্রকৌশলীদের ChaCha20-Poly1305 এনক্রিপ্টেড টানেলের মাধ্যমে যুক্ত করে। বৈধ ডিজিটাল স্বাক্ষরবিহীন যেকোনো প্যাকেটকে তাৎক্ষণিক বাতিল করে।'
          },
        },
        {
          title: {
            en: '3. Micro-segmentation & DPI IPS',
            bn: '৩. মাইক্রো-সেগমেন্টেশন ও ডিপিআই আইপিএস'
          },
          text: {
            en: 'Isolates web, app, and data tiers across distinct VLANs. In-line Suricata engines inspect Layer 7 payloads to block exploit probes and lateral movement.',
            bn: 'ওয়েব, অ্যাপ্লিকেশন এবং ডাটাবেজ স্তরগুলোকে পৃথক ভিএলএএনে আলাদা করে। ইন-লাইন সুরিকাটা ইঞ্জিন লেয়ার ৭ পেলোড পরীক্ষা করে ম্যালওয়্যার ও পার্শ্বীয় আক্রমণ ঠেকায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Enterprise Security Posture Reckoning: 4/5 = 0.80 HOLD vs 5/5 = 1.00 SHIP',
        bn: 'এন্টারপ্রাইজ সিকিউরিটি নিরীক্ষা: ৪/৫ = ০.৮০ HOLD বনাম ৫/৫ = ১.০০ SHIP'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Enterprise security capstone posture reckoning showing 4/5 hold upgraded to 5/5 ship">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ZERO TRUST DEFENSE-IN-DEPTH: 5 PILLAR ENTERPRISE AUDIT</text>
  
  <!-- Left Side: Initial Audit (4/5 = 0.80 HOLD) -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#d97706"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">INITIAL AUDIT: 4/5 = 0.80 [STATUS: HOLD ✗]</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 1: Ingress Edge Firewall [✓ PASS]</text>
      <text x="12" y="34" fill="#34d399" font-size="8">Default-deny active; drops unpermitted probes</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="70" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 2: Cryptokey VPN Tunnels [✓ PASS]</text>
      <text x="12" y="86" fill="#34d399" font-size="8">WireGuard authenticated peer endpoints</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="122" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 3: In-line DPI / IPS [✓ PASS]</text>
      <text x="12" y="138" fill="#34d399" font-size="8">Suricata active; drops SQL injection & exploits</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="174" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 4: 3-Tier Segmentation [✓ PASS]</text>
      <text x="12" y="190" fill="#34d399" font-size="8">VLAN 10/20/30 isolation blocks lateral movement</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="226" fill="#fca5a5" font-size="8.5" font-weight="bold">Pillar 5: Volumetric Edge Defense [✗ FAIL]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Gap: No edge DDoS rate limiter deployed</text>
    </g>
  </g>
  
  <!-- Right Side: Remediated Audit (5/5 = 1.00 SHIP) -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HARDENED AUDIT: 5/5 = 1.00 [STATUS: SHIP ✓]</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 1: Ingress Edge Firewall [✓ PASS]</text>
      <text x="12" y="34" fill="#34d399" font-size="8">Default-deny active; drops unpermitted probes</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="70" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 2: Cryptokey VPN Tunnels [✓ PASS]</text>
      <text x="12" y="86" fill="#34d399" font-size="8">WireGuard authenticated peer endpoints</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="122" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 3: In-line DPI / IPS [✓ PASS]</text>
      <text x="12" y="138" fill="#34d399" font-size="8">Suricata active; drops SQL injection & exploits</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="174" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 4: 3-Tier Segmentation [✓ PASS]</text>
      <text x="12" y="190" fill="#34d399" font-size="8">VLAN 10/20/30 isolation blocks lateral movement</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="226" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 5: Volumetric Edge Defense [✓ REMEDIATED]</text>
      <text x="12" y="242" fill="#34d399" font-size="8">Token Bucket rate limiter active (Capacity: 100/s)</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Every single defensive pillar must pass: closing the fifth gap unlocks the production deployment status</text>
</svg>`,
      caption: {
        en: 'The capstone defense engine evaluates 5 enterprise security pillars: initial score 4/5 = 0.80 requires remediation (HOLD); closing the DDoS gap achieves 5/5 = 1.00 (SHIP).',
        bn: 'ক্যাপস্টোন ডিফেন্স ইঞ্জিন ৫ টি নিরাপত্তা স্তর মূল্যায়ন করে: প্রাথমিক স্কোর ৪/৫ = ০.৮০ সংশোধনের নির্দেশ দেয় (HOLD); ডিডিওএস প্রতিরক্ষা যুক্ত করে ৫/৫ = ১.০০ (SHIP) অর্জন করা হয়।'
      },
    },
    {
      type: 'heading',
      id: 'enterprise-capstone-auditor-code',
      text: {
        en: 'Building an Enterprise Security Posture Scoring Engine in Node.js',
        bn: 'Node.js-এ এন্টারপ্রাইজ সিকিউরিটি নিরীক্ষা ও স্কোরিং ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'enterprise-posture-scoring.js',
      code: `// Deterministic Enterprise Network Security Posture & Compliance Auditor
class EnterpriseSecurityAuditor {
  constructor(pillars) {
    this.pillars = pillars;
  }

  // Audit all security pillars and compute compliance score
  auditPosture() {
    let passedCount = 0;
    const details = this.pillars.map((pillar, idx) => {
      const isPassed = pillar.status === 'PASS';
      if (isPassed) passedCount++;
      return {
        pillarNumber: idx + 1,
        title: pillar.title,
        layer: pillar.layer,
        status: pillar.status,
        scoreValue: isPassed ? 1.0 : 0.0,
        remediationNote: pillar.remediationNote
      };
    });

    const totalCount = this.pillars.length;
    const scoreFraction = (passedCount / totalCount).toFixed(2);
    const deploymentVerdict = parseFloat(scoreFraction) >= 0.90 ? 'SHIP' : 'HOLD';

    return {
      totalCount,
      passedCount,
      failedCount: totalCount - passedCount,
      scoreFraction,
      deploymentVerdict,
      details
    };
  }
}

// 5 Core Pillars of Enterprise Defense-in-Depth
const enterprisePillars = [
  { title: 'Ingress Edge Firewall', layer: 'L3/L4 Perimeter', status: 'PASS', remediationNote: 'Default-deny active' },
  { title: 'Remote Access WireGuard', layer: 'L3 Encrypted VPN', status: 'PASS', remediationNote: 'Cryptokey routing active' },
  { title: 'In-line DPI Intrusion Prevention', layer: 'L7 Deep Packet', status: 'PASS', remediationNote: 'Suricata SID engine active' },
  { title: 'Three-Tier Segmentation', layer: 'L2/L3 Isolation', status: 'PASS', remediationNote: 'VLAN and NetworkPolicy active' },
  { title: 'Edge DDoS Rate Limiting', layer: 'L4/L7 Scrubbing', status: 'FAIL', remediationNote: 'Origin directly exposed to flood' }
];

const auditor = new EnterpriseSecurityAuditor(enterprisePillars);

console.log('=== Stage 1: Initial Security Posture Audit ===\\n');
const initialAudit = auditor.auditPosture();
initialAudit.details.forEach(p => {
  const symbol = p.status === 'PASS' ? '[✓]' : '[✗]';
  console.log(\`\${symbol} Pillar \${p.pillarNumber}: \${p.title.padEnd(32)} -> \${p.status}\`);
  console.log(\`    Layer:       \${p.layer}\`);
  console.log(\`    Remediation: \${p.remediationNote}\\n\`);
});

console.log(\`Initial Score: \${initialAudit.passedCount}/\${initialAudit.totalCount} = \${initialAudit.scoreFraction}\`);
console.log(\`Verdict:       \${initialAudit.deploymentVerdict} (Gaps exist; do not deploy)\\n\`);

// Remediate Pillar 5 by deploying Token Bucket DDoS protection
console.log('=== Stage 2: Remediating Edge DDoS Protection ===\\n');
enterprisePillars[4].status = 'PASS';
enterprisePillars[4].remediationNote = 'Anycast Token Bucket rate limiter deployed';

const finalAudit = auditor.auditPosture();
console.log(\`Remediated Score: \${finalAudit.passedCount}/\${finalAudit.totalCount} = \${finalAudit.scoreFraction}\`);
console.log(\`Final Verdict:    \${finalAudit.deploymentVerdict} (Production Hardened!)\`);`,
      caption: {
        en: 'The capstone auditor inspects 5 security pillars: the initial gap scores 4/5 = 0.80 (HOLD); deploying the edge rate limiter achieves 5/5 = 1.00 (SHIP).',
        bn: 'ক্যাপস্টোন অডিটর ৫ টি নিরাপত্তা পিলার পরীক্ষা করে: প্রাথমিক দুর্বলতায় স্কোর হয় ৪/৫ = ০.৮০ (HOLD); এজ রেট লিমিটার চালু করার পর ৫/৫ = ১.০০ (SHIP) অর্জিত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Weakest Link Principle in Enterprise Security',
        bn: 'এন্টারপ্রাইজ সিকিউরিটিতে সবচেয়ে দুর্বল লিঙ্কের নীতি'
      },
      text: {
        en: 'Security is non-linear: an organization that successfully deploys advanced WireGuard encryption, next-gen intrusion prevention, and micro-segmentation can still be knocked offline if it neglects edge DDoS defense. Adversaries do not attack your strongest firewall; they actively probe for the single unmonitored port or unsegmented subnet. True defense-in-depth requires eliminating single points of failure across all 5 operational pillars.',
        bn: 'নিরাপত্তা ব্যবস্থা কখনোই একমুখী নয়: একটি প্রতিষ্ঠান ওয়্যারগার্ড এনক্রিপশন, নেক্সট-জেন অনুপ্রবেশ প্রতিরোধ ব্যবস্থা এবং মাইক্রো-সেগমেন্টেশন চালু রাখার পরেও ডিডিওএস প্রতিরক্ষা অবহেলা করলে পুরো সাইট অচল হয়ে যেতে পারে। আক্রমণকারীরা আপনার সবচেয়ে শক্তিশালী ফায়ারওয়ালে আঘাত করে না; তারা একটিমাত্র অরক্ষিত পোর্ট বা দুর্বল সাবনেট খুঁজে বের করে। প্রকৃত সুরক্ষার জন্য ৫ টি পিলারের প্রতিটি স্তরে কোনো ত্রুটি রাখা যাবে না।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-capstone-ex-1',
      kind: 'predict',
      topic: 'initial-passed-pillars-count',
      question: {
        en: 'In the initial audit of the 5 enterprise security pillars, how many pillars PASSED inspection before the edge DDoS gap was remediated? (4). Type the number.',
        bn: '৫ টি এন্টারপ্রাইজ সিকিউরিটি পিলারের প্রাথমিক নিরীক্ষায় এজ ডিডিওএস ত্রুটি সমাধানের আগে সর্বমোট কয়টি পিলার PASSED অবস্থায় ছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 pillars passed initially.',
        bn: 'প্রাথমিকভাবে ঠিক ৪ টি পিলার পাস করেছিল।'
      },
      explanation: {
        en: 'In the initial audit, 4 pillars passed (ingress firewall, WireGuard VPN, DPI IPS, and segmentation). Only the DDoS rate limiting pillar failed.',
        bn: 'প্রাথমিক অডিটে ৪ টি পিলার পাস করেছিল (ইনগ্রেস ফায়ারওয়াল, ভিপিএন, আইপিএস এবং সেগমেন্টেশন)। কেবল ডিডিওএস পিলারটি ব্যর্থ হয়েছিল।'
      },
    },
    {
      id: 'netsec-capstone-ex-2',
      kind: 'mcq',
      topic: 'zero-trust-never-trust-always-verify',
      question: {
        en: 'What is the core operational principle of NIST Zero Trust Architecture (ZTNA)?',
        bn: 'নিস্ট (NIST) জিরো ট্রাস্ট আর্কিটেকচারের (ZTNA) মূল পরিচালনা নীতি কোনটি?'
      },
      options: [
        {
          en: '"Never trust, always verify" — eliminating implicit trust based solely on physical or network location, and requiring continuous identity and policy verification for every transaction',
          bn: '"কাউকে অন্ধভাবে বিশ্বাস করো না, প্রতিবার যাচাই করো" — কেবল ফিজিক্যাল বা অভ্যন্তরীণ অবস্থানের ভিত্তিতে বিশ্বাস করার নিয়ম বাতিল করে প্রতিটি রিকোয়েস্টে পরিচয় ও নিরাপত্তা নীতি ক্রমাগত যাচাই করা',
        },
        {
          en: 'Trusting any computer connected to the office Wi-Fi network without requiring passwords',
          bn: 'অফিসের ওয়াইফাইয়ের সাথে যুক্ত যেকোনো কম্পিউটারকে পাসওয়ার্ড ছাড়াই সম্পূর্ণ বিশ্বাস করা',
        },
        {
          en: 'Turning off all firewalls on holidays to allow maximum internet speed',
          bn: 'সর্বোচ্চ ইন্টারনেট গতির জন্য ছুটির দিনগুলোতে সমস্ত ফায়ারওয়াল বন্ধ রাখা',
        },
        {
          en: 'Replacing all computer monitors with touchscreens every six months',
          bn: 'প্রতি ছয় মাস অন্তর অফিসের সব কম্পিউটার মনিটর পরিবর্তন করে টাচস্ক্রিন বসানো',
        },
      ],
      answer: 0,
      hint: {
        en: 'Zero Trust eliminates implicit trust and verifies every request.',
        bn: 'জিরো ট্রাস্ট পরোক্ষ বিশ্বাস দূর করে প্রতিটি রিকোয়েস্ট যাচাই করে।'
      },
      explanation: {
        en: 'Under Zero Trust, internal lateral connections are treated with the exact same skepticism as connections arriving from the public internet.',
        bn: 'জিরো ট্রাস্ট নীতিতে অভ্যন্তরীণ নেটওয়ার্কের সংযোগগুলোকেও বাইরের ইন্টারনেটের মতোই কঠোরভাবে যাচাই করা হয়।'
      },
    },
    {
      id: 'netsec-capstone-ex-3',
      kind: 'mcq',
      topic: 'defense-in-depth-failure-resilience',
      question: {
        en: 'Why is Defense-in-Depth superior to relying on a single perimeter firewall?',
        bn: 'একটিমাত্র পেরিমিটার ফায়ারওয়ালের ওপর নির্ভর করার চেয়ে ডিফেন্স-ইন-ডেপথ কেন অনেক বেশি কার্যকর?'
      },
      options: [
        {
          en: 'Defense-in-depth implements multiple overlapping defensive controls across layers; if an attacker bypasses the edge firewall via a zero-day exploit, internal segmentation and host IPS prevent lateral movement and data exfiltration',
          bn: 'ডিফেন্স-ইন-ডেপথ বিভিন্ন স্তরে একাধিক সুরক্ষা ব্যবস্থা স্থাপন করে; আক্রমণকারী কোনো জিরো-ডে দুর্বলতা দিয়ে প্রান্তিক ফায়ারওয়াল পার হলেও অভ্যন্তরীণ সেগমেন্টেশন ও হোস্ট আইপিএস তাকে ডাটা চুরি করতে বাধা দেয়',
        },
        {
          en: 'Because defense-in-depth eliminates the need for software updates',
          bn: 'কারণ ডিফেন্স-ইন-ডেপথ থাকলে সফটওয়্যারে কোনো আপডেট দেওয়ার প্রয়োজন হয় না',
        },
        {
          en: 'Because defense-in-depth makes internet connections completely free of charge',
          bn: 'কারণ ডিফেন্স-ইন-ডেপথ থাকলে ইন্টারনেটের বিল সম্পূর্ণ ফ্রি হয়ে যায়',
        },
        {
          en: 'Because defense-in-depth requires fewer computer memory chips',
          bn: 'কারণ ডিফেন্স-ইন-ডেপথ পদ্ধতিতে কম্পিউটারে কম মেমোরি চিপের প্রয়োজন হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Layered defenses ensure that breaching one barrier does not grant full access.',
        bn: 'একাধিক স্তরের প্রতিরক্ষা নিশ্চিত করে যে একটি বাধা পার হলেও পূর্ণ নিয়ন্ত্রণ পাওয়া সম্ভব নয়।'
      },
      explanation: {
        en: 'A single point of defense creates a catastrophic failure mode. Layered defenses buy defenders time to detect, contain, and remediate intrusions.',
        bn: 'একটিমাত্র বাধা ব্যর্থ হলে পুরো সিস্টেম হ্যাক হয়ে যায়। একাধিক স্তরের সুরক্ষা অনুপ্রবেশ ঠেকানোর পর্যাপ্ত সময় দেয়।'
      },
    },
    {
      id: 'netsec-capstone-ex-4',
      kind: 'predict',
      topic: 'final-passed-pillars-count',
      question: {
        en: 'How many of the 5 security pillars PASSED after deploying the edge DDoS rate limiter, achieving the SHIP production verdict? (5). Type the number.',
        bn: 'এজ ডিডিওএস রেট লিমিটার চালু করার পর ৫ টি পিলারের মধ্যে সর্বমোট কয়টি পিলার PASSED হয় এবং উৎপাদনের জন্য SHIP সনদ লাভ করে? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'All 5 pillars passed in the final audit.',
        bn: 'চূড়ান্ত অডিটে ৫ টি পিলারের সবগুলোই পাস করেছিল।'
      },
      explanation: {
        en: 'With all 5 pillars passing inspection (5/5 = 1.00), the enterprise network security posture qualifies for the SHIP production deployment status.',
        bn: 'সবকটি ৫ টি পিলার পরীক্ষায় উত্তীর্ণ হওয়ায় (৫/৫ = ১.০০), এন্টারপ্রাইজ নেটওয়ার্কটি প্রোডাকশনের জন্য SHIP স্ট্যাটাস লাভ করে।'
      },
    },
  ],
  quiz: {
    id: 'netsec-capstone-quiz',
    title: {
      en: 'Enterprise Network Security Architecture & Defense Capstone Quiz',
      bn: 'এন্টারপ্রাইজ নেটওয়ার্ক সিকিউরিটি আর্কিটেকচার ও ডিফেন্স ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'netsec-cap-qz-1',
        kind: 'mcq',
        topic: 'mutual-tls-service-mesh',
        question: {
          en: 'How does Mutual TLS (mTLS) within a Kubernetes service mesh enforce Zero Trust for internal microservices?',
          bn: 'কুবারনেটিস সার্ভিস মেশে মিউচুয়াল টিএলএস (mTLS) কীভাবে অভ্যন্তরীণ মাইক্রোসার্ভিসের জন্য জিরো ট্রাস্ট নিরাপত্তা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Both client and server present X.509 cryptographic certificates to verify each other identity, encrypting all east-west pod-to-pod traffic and enforcing cryptographic access policies',
            bn: 'ক্লায়েন্ট এবং সার্ভার উভয়ই একে অপরের পরিচয় যাচাই করতে X.509 ক্রিপ্টোগ্রাফিক সার্টিফিকেট প্রদান করে, যা অভ্যন্তরীণ পড-টু-পড ট্রাফিক এনক্রিপ্ট করে এবং কঠোর অনুমোদন নীতি প্রয়োগ করে',
          },
          {
            en: 'It prints secret paper certificates that engineers store in filing cabinets',
            bn: 'এটি কাগজের সার্টিফিকেট প্রিন্ট করে যা প্রকৌশলীরা ফাইলিং ক্যাবিনেটে জমা রাখেন',
          },
          {
            en: 'It accelerates processor speeds by replacing operating system kernels',
            bn: 'এটি অপারেটিং সিস্টেম কার্নেল বদলে দিয়ে প্রসেসরের গতি বৃদ্ধি করে',
          },
          {
            en: 'It allows computers to run without cooling fans or heat sinks',
            bn: 'এটি কুলিং ফ্যান ছাড়াই কম্পিউটারকে ঠান্ডা রাখতে সাহায্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'mTLS authenticates both sides of internal microservice connections using certificates.',
          bn: 'mTLS সার্টিফিকেটের মাধ্যমে সংযোগের উভয় প্রান্ত যাচাই ও এনক্রিপ্ট করে।'
        },
        explanation: {
          en: 'In traditional TLS, only the server proves its identity. mTLS ensures that compromised internal pods cannot impersonate authorized services.',
          bn: 'সাধারণ TLS-এ কেবল সার্ভারের পরিচয় দেখা হয়। mTLS ক্লায়েন্ট এবং সার্ভার উভয়কেই যাচাই করে অভ্যন্তরীণ প্রতারণা ঠেকায়।'
        },
      },
      {
        id: 'netsec-cap-qz-2',
        kind: 'mcq',
        topic: 'software-defined-perimeter-sdp',
        question: {
          en: 'What is a Software-Defined Perimeter (SDP), and how does it prevent adversary port scanning of enterprise infrastructure?',
          bn: 'সফটওয়্যার-ডিফাইন্ড পেরিমিটার (SDP) কী এবং এটি কীভাবে এন্টারপ্রাইজ পরিকাঠামোয় আক্রমণকারীদের পোর্ট স্ক্যানিং প্রতিহত করে?'
        },
        options: [
          {
            en: 'SDP creates a dynamic, invisible network perimeter where gateways drop all unsolicited packets by default, keeping servers completely dark and undiscoverable until an authorized client successfully completes pre-authentication',
            bn: 'SDP একটি গতিশীল ও অদৃশ্য নেটওয়ার্ক সীমানা তৈরি করে যেখানে গেটওয়ে সমস্ত অনাহূত প্যাকেট ডিফল্টভাবে বাতিল করে দেয়, ফলে অনুমোদিত ক্লায়েন্ট প্রি-অথেনটিকেশন সম্পন্ন না করা পর্যন্ত সার্ভারটি সম্পূর্ণ অদৃশ্য থাকে',
          },
          {
            en: 'It builds a concrete physical perimeter wall around company buildings',
            bn: 'এটি কোম্পানির ভবনের চারপাশে একটি শক্ত কংক্রিটের নিরাপত্তা প্রাচীর নির্মাণ করে',
          },
          {
            en: 'It converts digital data cables into wireless radio signals',
            bn: 'এটি ডিজিটাল ডাটা ক্যাবলগুলোকে ওয়্যারলেস রেডিও সিগন্যালে রূপান্তরিত করে',
          },
          {
            en: 'It forces employees to change their login passwords every twenty minutes',
            bn: 'এটি প্রতি বিশ মিনিট অন্তর কর্মীদের পাসওয়ার্ড পরিবর্তন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SDP makes infrastructure invisible to unauthorized users until authenticated.',
          bn: 'প্রি-অথেনটিকেশনের আগে SDP সার্ভারকে স্ক্যানার বা বহিরাগতদের কাছে সম্পূর্ণ অদৃশ্য রাখে।'
        },
        explanation: {
          en: 'SDP implements "authenticate-first, connect-second." Adversary port scans receive zero responses, finding nothing to probe or exploit.',
          bn: 'SDP পদ্ধতিতে আগে যাচাই, পরে সংযোগ নীতি মানা হয়। এর ফলে স্ক্যানার কোনো খোলা পোর্ট দেখতে পায় না।'
        },
      },
      {
        id: 'netsec-cap-qz-3',
        kind: 'mcq',
        topic: 'egress-filtering-c2-prevention',
        question: {
          en: 'Why is strict Egress Filtering equally as important as Ingress Filtering in defending enterprise networks?',
          bn: 'এন্টারপ্রাইজ নেটওয়ার্ক সুরক্ষায় ইনগ্রেস ফিল্টারিংয়ের মতো ইগ্রেস (Egress) ফিল্টারিংও সমান গুরুত্বপূর্ণ কেন?'
        },
        options: [
          {
            en: 'Egress filtering restricts outbound outbound connections to only verified ports and destinations, preventing compromised internal servers from beaconing to attacker Command and Control (C2) servers or exfiltrating stolen databases',
            bn: 'ইগ্রেস ফিল্টারিং অভ্যন্তরীণ সার্ভার থেকে বাইরের সংযোগগুলোকে কেবল অনুমোদিত পোর্ট ও গন্তব্যে সীমাবদ্ধ করে, যার ফলে কোনো সার্ভার হ্যাক হলেও তা হ্যাকারের কমান্ড অ্যান্ড কন্ট্রোল (C2) সার্ভারে যোগাযোগ করতে বা ডাটা চুরি করতে পারে না',
          },
          {
            en: 'Egress filtering reduces company electricity bills by twenty percent',
            bn: 'ইগ্রেস ফিল্টারিং কোম্পানির বিদ্যুৎ বিল বিশ শতাংশ পর্যন্ত হ্রাস করতে পারে',
          },
          {
            en: 'Egress filtering automatically rewrites internal application source code',
            bn: 'ইগ্রেস ফিল্টারিং স্বয়ংক্রিয়ভাবে অ্যাপ্লিকেশনের সোর্স কোড পুনরায় লিখে দেয়',
          },
          {
            en: 'Egress filtering speeds up office mouse cursor movements',
            bn: 'ইগ্রেস ফিল্টারিং অফিসের মাউস কার্সারের গতি বৃদ্ধি করে থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Egress filtering stops malware from communicating with external C2 servers.',
          bn: 'ইগ্রেস ফিল্টারিং বহিরাগত ম্যালওয়্যার কন্ট্রোল সার্ভারের সাথে ডাটা আদান-প্রদান আটকে দেয়।'
        },
        explanation: {
          en: 'Even if an adversary lands malware inside an enterprise host, egress filtering blocking non-standard outbound ports prevents the malware from receiving commands or uploading data.',
          bn: 'সার্ভারে ম্যালওয়্যার ঢুকলেও কঠোর ইগ্রেস ফিল্টারিং থাকলে হ্যাকার দূর থেকে নিয়ন্ত্রণ করতে বা ডাটা বের করে নিতে পারে না।'
        },
      },
      {
        id: 'netsec-cap-qz-4',
        kind: 'mcq',
        topic: 'bastion-jump-host-security',
        question: {
          en: 'What architectural role does a hardened Bastion Host (Jump Box) play in an enterprise network, and how should it be secured?',
          bn: 'এন্টারপ্রাইজ নেটওয়ার্কে একটি সুরক্ষিত ব্যাস্টিয়ন হোস্ট (Bastion Host / Jump Box) কী ভূমিকা পালন করে এবং কীভাবে এটিকে সুরক্ষিত রাখা উচিত?'
        },
        options: [
          {
            en: 'It serves as a single, heavily audited proxy gateway through which administrators must authenticate via MFA and hardware keys before accessing segmented internal production subnets',
            bn: 'এটি একটি একক, অত্যন্ত কঠোরভাবে নিরীক্ষিত প্রক্সি গেটওয়ে হিসেবে কাজ করে যার মাধ্যমে প্রশাসকদের এমএফএ (MFA) ও হার্ডওয়্যার কি দিয়ে প্রবেশ করে অভ্যন্তরীণ সাবনেটে কাজ করতে হয়',
          },
          {
            en: 'It is a storage room where old desktop computers are recycled',
            bn: 'এটি এমন একটি গুদাম ঘর যেখানে পুরানো কম্পিউটার রিসাইকেল করার জন্য রাখা হয়',
          },
          {
            en: 'It is a high-speed router used exclusively for streaming video games',
            bn: 'এটি একটি উচ্চগতির রাউটার যা কেবল ভিডিও গেম খেলার কাজে ব্যবহৃত হয়',
          },
          {
            en: 'It is a public Wi-Fi hotspot installed in the corporate cafeteria',
            bn: 'এটি কর্মীদের ক্যাফেটেরিয়ায় ইনস্টল করা একটি পাবলিক উন্মুক্ত ওয়াইফাই হটস্পট',
          },
        ],
        answer: 0,
        hint: {
          en: 'Bastion hosts act as the single controlled entry point for administrative access.',
          bn: 'প্রশাসনিক কাজের জন্য ব্যাস্টিয়ন হোস্ট একমাত্র নিয়ন্ত্রিত ও নিরীক্ষিত প্রবেশদ্বার হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'Direct SSH access to backend database or application hosts is disabled; administrators must pass through the bastion host with multi-factor authentication and session recording.',
          bn: 'ডাটাবেজে সরাসরি এসএসএইচ সংযোগ বন্ধ রাখা হয়; মাল্টি-ফ্যাক্টর অথেনটিকেশন ও সেশন রেকর্ডিং সহ ব্যাস্টিয়ন হয়েই কেবল প্রবেশ করা যায়।'
        },
      },
    ],
  },
};
