import type { Lesson } from '../../../lib/types';

export const OwaspCapstoneLesson: Lesson = {
  slug: 'owasp-capstone',
  tech: 'owasp',
  title: {
    en: 'OWASP Capstone: Enterprise Web Application Security Assessment & Defense',
    bn: 'ওওয়াস্প ক্যাপস্টোন: এন্টারপ্রাইজ ওয়েব সিকিউরিটি মূল্যায়ন ও সমন্বিত প্রতিরক্ষা'
  },
  summary: {
    en: 'Synthesize the core controls of the Open Worldwide Application Security Project (OWASP) into a unified enterprise defense-in-depth posture. Integrate parameterized query execution, server-side object ownership verification, contextual output encoding, supply chain SBOM auditing, and login rate limiting. Inspect an executable Node.js posture auditor evaluating 5 security pillars: an initial unthrottled login endpoint scores 4/5 = 0.80 (HOLD), and deploying authentication rate limiting achieves a perfect 5/5 = 1.00 (SHIP).',
    bn: 'ওপেন ওয়ার্ল্ডওয়াইড অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্টের (OWASP) প্রধান নিরাপত্তা নীতিগুলোকে সমন্বয় করে একটি সুদৃঢ় ডিফেন্স-ইন-ডেপথ পরিকাঠামো তৈরি করুন। প্যারামিটারাইজড কোয়েরি, সার্ভার-সাইড অবজেক্ট মালিকানা যাচাই, কনটেক্সচুয়াল আউটপুট এনকোডিং, সাপ্লাই চেইন SBOM অডিট এবং লগইন রেট লিমিটিং একত্রিত করুন। ৫ টি নিরাপত্তা পিলার মূল্যায়নকারী একটি কার্যকর Node.js অডিটর পরীক্ষা করুন: প্রাথমিক দুর্বলতায় স্কোর হয় ৪/৫ = ০.৮০ (HOLD), এবং রেট লিমিটিং চালুর পর পূর্ণাঙ্গ ৫/৫ = ১.০০ (SHIP) অর্জিত হয়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'holistic-enterprise-security',
      text: {
        en: 'Enterprise Web Application Security: Orchestrating Defense-in-Depth',
        bn: 'এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন নিরাপত্তা: সমন্বিত ডিফেন্স-ইন-ডেপথ ব্যবস্থা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you secure enterprise web applications, you cannot rely on any single defensive control. The Open Worldwide Application Security Project (OWASP) establishes that security is a systemic architectural discipline. A website with flawless SQL parameterized queries can still suffer disastrous data compromise if its access control logic permits Insecure Direct Object References (IDOR).',
        bn: 'এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন সুরক্ষিত করার সময় আপনি একটিমাত্র নিরাপত্তা ব্যবস্থার ওপর কখনোই নির্ভর করতে পারেন না। ওপেন ওয়ার্ল্ডওয়াইড অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্ট (OWASP) নির্দেশ করে যে নিরাপত্তা হলো একটি সামগ্রিক আর্কিটেকচারাল অনুশাসন। একটি ওয়েবসাইটে নিখুঁত প্যারামিটারাইজড কোয়েরি থাকলেও যদি তার অ্যাক্সেস কন্ট্রোলে আইডিওআর (IDOR) দুর্বলতা থাকে, তবে পুরো সিস্টেম সহজেই হ্যাক হয়ে যেতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A battle-tested production posture requires defense-in-depth across the entire application lifecycle. This involves combining secure coding practices, automated SAST code analysis, third-party dependency scanning, dynamic vulnerability probing, and hardened infrastructure baselines. Every single tier must pass rigorous auditing before software qualifies for production release.',
        bn: 'উৎপাদনমুখী সফটওয়্যারের জন্য পুরো অ্যাপ্লিকেশন লাইফসাইকেল জুড়ে একাধিক সমান্তরাল স্তরের প্রতিরক্ষা প্রয়োজন। এর মধ্যে রয়েছে সুরক্ষিত কোডিং, স্বয়ংক্রিয় SAST কোড বিশ্লেষণ, ডিপেন্ডেন্সি স্ক্যানিং, ডাইনামিক অনুপ্রবেশ পরীক্ষা এবং সুরক্ষিত সার্ভার বেসলাইন। সফটওয়্যারটি বাজারে ছাড়ার আগে এর প্রতিটি স্তরে কঠোর নিরাপত্তা নিরীক্ষায় উত্তীর্ণ হওয়া বাধ্যতামূলক।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Data & Persistence Layer (A03)',
            bn: '১. ডাটা ও পারসিস্টেন্স লেয়ার (A03)'
          },
          text: {
            en: 'Enforces parameterized prepared statements across all database queries. Raw string concatenation is permanently banned, guaranteeing immunity to SQL and command injection.',
            bn: 'ডাটাবেজের সমস্ত কোয়েরিতে প্যারামিটারাইজড প্রিপেয়ার্ড স্টেটমেন্ট নিশ্চিত করে। সরাসরি স্ট্রিং কনক্যাটেনেশন নিষিদ্ধ করে এসকিউএল ও কমান্ড ইনজেকশন পুরোপুরি প্রতিহত করা হয়।'
          },
        },
        {
          title: {
            en: '2. Business Logic & Access Control (A01)',
            bn: '২. বিজনেস লজিক ও অ্যাক্সেস কন্ট্রোল (A01)'
          },
          text: {
            en: 'Enforces server-side tenant and user ownership validation on every endpoint. Client-supplied IDs are never trusted without cryptographic session verification.',
            bn: 'প্রতিটি এন্ডপয়েন্টে সার্ভার-সাইড টেন্যান্ট ও ইউজার মালিকানা যাচাই করে। সেশনের পরিচয় যাচাই ছাড়া ক্লায়েন্টের পাঠানো আইডির ওপর কোনো বিশ্বাস স্থাপন করা হয় না।'
          },
        },
        {
          title: {
            en: '3. Client Rendering & Authentication (A03/A07)',
            bn: '৩. ক্লায়েন্ট রেন্ডারিং ও প্রমাণীকরণ (A03/A07)'
          },
          text: {
            en: 'Neutralizes XSS using contextual output encoding and strict CSP headers. Secures authentication gates with adaptive password hashing and aggressive brute-force rate limiting.',
            bn: 'আউটপুট এনকোডিং ও কঠোর সিএসপি দিয়ে এক্সএসএস বন্ধ করে। অ্যাডাপটিভ পাসওয়ার্ড হ্যাশিং এবং ব্রুট-ফোর্স রেট লিমিটিং দিয়ে লগইন গেটওয়ে সুরক্ষিত রাখে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Enterprise Security Posture Audit: 4/5 = 0.80 HOLD vs 5/5 = 1.00 SHIP',
        bn: 'এন্টারপ্রাইজ সিকিউরিটি নিরীক্ষা: ৪/৫ = ০.৮০ HOLD বনাম ৫/৫ = ১.০০ SHIP'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="OWASP capstone enterprise posture audit showing 4/5 hold upgraded to 5/5 ship">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ENTERPRISE OWASP AUDIT: 5 PILLAR SECURITY POSTURE ASSESSMENT</text>
  
  <!-- Left Side: Initial Audit (4/5 = 0.80 HOLD) -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#d97706"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">INITIAL AUDIT: 4/5 = 0.80 [STATUS: HOLD ✗]</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 1: Parameterized Queries [✓ PASS]</text>
      <text x="12" y="34" fill="#34d399" font-size="8">Prepared statements active; SQL AST protected</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="70" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 2: Object Ownership Guard [✓ PASS]</text>
      <text x="12" y="86" fill="#34d399" font-size="8">Server-side checks eliminate IDOR data leaks</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="122" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 3: Client Encoding &amp; CSP [✓ PASS]</text>
      <text x="12" y="138" fill="#34d399" font-size="8">Contextual escaping and strict CSP block XSS</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="174" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 4: SBOM Dependency Health [✓ PASS]</text>
      <text x="12" y="190" fill="#34d399" font-size="8">0 High/Critical CVEs across package lockfiles</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="226" fill="#fca5a5" font-size="8.5" font-weight="bold">Pillar 5: Login Rate Limiter &amp; MFA [✗ FAIL]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Critical: Login gateway allows unthrottled attempts!</text>
    </g>
  </g>
  
  <!-- Right Side: Remediated Audit (5/5 = 1.00 SHIP) -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HARDENED AUDIT: 5/5 = 1.00 [STATUS: SHIP ✓]</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 1: Parameterized Queries [✓ PASS]</text>
      <text x="12" y="34" fill="#34d399" font-size="8">Prepared statements active; SQL AST protected</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="70" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 2: Object Ownership Guard [✓ PASS]</text>
      <text x="12" y="86" fill="#34d399" font-size="8">Server-side checks eliminate IDOR data leaks</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="122" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 3: Client Encoding &amp; CSP [✓ PASS]</text>
      <text x="12" y="138" fill="#34d399" font-size="8">Contextual escaping and strict CSP block XSS</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="174" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 4: SBOM Dependency Health [✓ PASS]</text>
      <text x="12" y="190" fill="#34d399" font-size="8">0 High/Critical CVEs across package lockfiles</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="226" fill="#6ee7b7" font-size="8.5" font-weight="bold">Pillar 5: Login Rate Limiter &amp; MFA [✓ REMEDIATED]</text>
      <text x="12" y="242" fill="#34d399" font-size="8">Rate limiter active: Locks account after 5 attempts</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Every security control must pass unanimously: resolving the fifth gap unlocks production deployment approval</text>
</svg>`,
      caption: {
        en: 'The OWASP capstone auditor inspects 5 security pillars: initial score 4/5 = 0.80 requires remediation (HOLD); resolving the login throttling gap achieves 5/5 = 1.00 (SHIP).',
        bn: 'ওওয়াস্প ক্যাপস্টোন অডিটর ৫ টি নিরাপত্তা পিলার পরীক্ষা করে: প্রাথমিক স্কোর ৪/৫ = ০.৮০ সংশোধনের নির্দেশ দেয় (HOLD); লগইন রেট লিমিটিং যুক্ত করার পর ৫/৫ = ১.০০ (SHIP) অর্জিত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'capstone-scoring-code-engine',
      text: {
        en: 'Building an Enterprise Web Security Compliance Auditor in Node.js',
        bn: 'Node.js-এ এন্টারপ্রাইজ ওয়েব সিকিউরিটি কমপ্লায়েন্স অডিটর তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'enterprise-owasp-auditor.js',
      code: `// Deterministic Enterprise OWASP Security Posture & Compliance Auditor
class EnterpriseOwaspAuditor {
  constructor(pillars) {
    this.pillars = pillars;
  }

  // Audit all defensive pillars and calculate release verdict
  auditPosture() {
    let passedCount = 0;
    const auditDetails = this.pillars.map((pillar, idx) => {
      const isPassed = pillar.status === 'PASS';
      if (isPassed) passedCount++;

      return {
        pillarNumber: idx + 1,
        title: pillar.title,
        category: pillar.category,
        status: pillar.status,
        scoreValue: isPassed ? 1.0 : 0.0,
        remediation: pillar.remediation
      };
    });

    const totalCount = this.pillars.length;
    const complianceScore = (passedCount / totalCount).toFixed(2);
    const releaseVerdict = parseFloat(complianceScore) >= 0.90 ? 'SHIP' : 'HOLD';

    return {
      totalCount,
      passedCount,
      failedCount: totalCount - passedCount,
      complianceScore,
      releaseVerdict,
      auditDetails
    };
  }
}

// 5 Core Pillars of Enterprise Web Application Defense
const enterprisePillars = [
  { title: 'Parameterized Database Queries', category: 'A03: Injection', status: 'PASS', remediation: 'Prepared statements active' },
  { title: 'Object Ownership Enforcement', category: 'A01: Access Control', status: 'PASS', remediation: 'Server-side IDOR check active' },
  { title: 'Client Output Encoding & CSP', category: 'A03: XSS', status: 'PASS', remediation: 'Strict CSP headers active' },
  { title: 'SBOM Supply Chain Health', category: 'A06: Vulnerable Packages', status: 'PASS', remediation: '0 High/Critical CVEs' },
  { title: 'Authentication Gatekeeper', category: 'A07: Identification', status: 'FAIL', remediation: 'Login lacks brute-force throttling' }
];

const auditor = new EnterpriseOwaspAuditor(enterprisePillars);

console.log('=== Stage 1: Initial OWASP Enterprise Security Audit ===\\n');
const initialAudit = auditor.auditPosture();
initialAudit.auditDetails.forEach(p => {
  const mark = p.status === 'PASS' ? '[✓]' : '[✗]';
  console.log(\`\${mark} Pillar \${p.pillarNumber}: \${p.title.padEnd(34)} -> \${p.status}\`);
  console.log(\`    Category:    \${p.category}\`);
  console.log(\`    Remediation: \${p.remediation}\\n\`);
});

console.log(\`Initial Compliance: \${initialAudit.passedCount}/\${initialAudit.totalCount} = \${initialAudit.complianceScore}\`);
console.log(\`Release Verdict:    \${initialAudit.releaseVerdict} (Critical gaps present; deployment blocked)\\n\`);

// Remediate Pillar 5 by deploying rate limiting and account lockout
console.log('=== Stage 2: Remediating Authentication Layer ===\\n');
enterprisePillars[4].status = 'PASS';
enterprisePillars[4].remediation = 'Rate limiter active (Max 5 attempts allowed)';

const finalAudit = auditor.auditPosture();
console.log(\`Remediated Score:   \${finalAudit.passedCount}/\${finalAudit.totalCount} = \${finalAudit.complianceScore}\`);
console.log(\`Final Verdict:      \${finalAudit.releaseVerdict} (Fully hardened; approved for production!)\`);`,
      caption: {
        en: 'The capstone auditor inspects 5 security pillars: the initial gap scores 4/5 = 0.80 (HOLD); resolving login throttling achieves 5/5 = 1.00 (SHIP).',
        bn: 'ক্যাপস্টোন অডিটর ৫ টি নিরাপত্তা পিলার পরীক্ষা করে: প্রাথমিক দুর্বলতায় স্কোর হয় ৪/৫ = ০.৮০ (HOLD); লগইন থ্রটলিং চালুর পর ৫/৫ = ১.০০ (SHIP) অর্জিত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Continuous Security: Audits Are a Lifestyle, Not a Milestone',
        bn: 'ধারাবাহিক নিরাপত্তা: অডিট কোনো একক মাইলফলক নয়, বরং জীবনযাত্রার অংশ'
      },
      text: {
        en: 'Passing an OWASP security audit today does not guarantee security tomorrow. New CVEs are disclosed daily, developers introduce new endpoints, and third-party dependencies release updates. Mature organizations treat security as an automated, continuous process: running daily vulnerability scans, monitoring production error logs for attack anomalies, and enforcing peer code reviews on every pull request.',
        bn: 'আজকের ওওয়াস্প অডিটে পাস করা মানেই কালকে সিস্টেম সম্পূর্ণ নিরাপদ থাকবে এমন কোনো নিশ্চয়তা নেই। প্রতিদিন নতুন নতুন CVE প্রকাশ পায়, নতুন এপিআই এন্ডপয়েন্ট তৈরি হয় এবং প্যাকেজ আপডেট আসে। পরিণত প্রতিষ্ঠানগুলো নিরাপত্তাকে একটি চলমান স্বয়ংক্রিয় প্রক্রিয়া হিসেবে পরিচালনা করে: প্রতিদিন দুর্বলতা স্ক্যান করা, প্রোডাকশন লগে সন্দেহজনক আক্রমণ পর্যবেক্ষণ করা এবং প্রতিটি কোড পরিবর্তনের জন্য সিকিউরিটি রিভিউ নিশ্চিত করা।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-capstone-ex-1',
      kind: 'predict',
      topic: 'initial-passed-pillars-count',
      question: {
        en: 'In the initial enterprise audit of the 5 OWASP security pillars, how many pillars PASSED inspection before the authentication gap was remediated? (4). Type the number.',
        bn: '৫ টি ওওয়াস্প নিরাপত্তা পিলারের প্রাথমিক নিরীক্ষায় প্রমাণীকরণ ত্রুটি সমাধানের আগে সর্বমোট কয়টি পিলার PASSED অবস্থায় ছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 pillars passed initially.',
        bn: 'প্রাথমিকভাবে ঠিক ৪ টি পিলার পাস করেছিল।'
      },
      explanation: {
        en: 'In the initial audit, 4 pillars passed (parameterized queries, ownership guard, client encoding, and SBOM health). Only authentication failed.',
        bn: 'প্রাথমিক অডিটে ৪ টি পিলার পাস করেছিল (প্যারামিটারাইজড কোয়েরি, ওনারশিপ গার্ড, ক্লায়েন্ট এনকোডিং এবং SBOM)। কেবল অথেনটিকেশন ব্যর্থ হয়েছিল।'
      },
    },
    {
      id: 'owasp-capstone-ex-2',
      kind: 'mcq',
      topic: 'defense-in-depth-interdependence',
      question: {
        en: 'Why is a defense-in-depth security architecture essential for enterprise web applications?',
        bn: 'এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশনের জন্য ডিফেন্স-ইন-ডেপথ সিকিউরিটি আর্কিটেকচার কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'No single security control is infallible; defense-in-depth implements multiple overlapping defensive layers so that the failure or bypass of any single defense does not result in total infrastructure compromise',
          bn: 'কোনো একক নিরাপত্তা ব্যবস্থাই ত্রুটিমুক্ত নয়; ডিফেন্স-ইন-ডেপথ পদ্ধতিতে একাধিক স্তরের সুরক্ষা স্থাপন করা হয় যাতে একটি স্তর কোনো কারণে ব্যর্থ হলেও পুরো পরিকাঠামো হ্যাক না হয়',
        },
        {
          en: 'Because defense-in-depth reduces company electricity consumption by half',
          bn: 'কারণ ডিফেন্স-ইন-ডেপথ কোম্পানির বিদ্যুৎ খরচ অর্ধেক কমিয়ে দেয়',
        },
        {
          en: 'Because defense-in-depth automatically writes marketing articles for social media',
          bn: 'কারণ ডিফেন্স-ইন-ডেপথ স্বয়ংক্রিয়ভাবে সোশ্যাল মিডিয়ার জন্য বিজ্ঞাপনী পোস্ট লেখে',
        },
        {
          en: 'Because defense-in-depth is only compatible with wireless computer mice',
          bn: 'কারণ ডিফেন্স-ইন-ডেপথ কেবল ওয়্যারলেস মাউসের সাথেই কাজ করতে পারে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Multiple layers ensure that a single failure does not compromise the whole system.',
        bn: 'একাধিক স্তর নিশ্চিত করে যে একটি ব্যর্থ হলেও পুরো সিস্টেম সুরক্ষিত থাকে।'
      },
      explanation: {
        en: 'For example, if an attacker discovers an XSS flaw, an HttpOnly cookie flag and a strict CSP header prevent session theft and external script execution.',
        bn: 'যেমন, কোনো কারণে এক্সএসএস দুর্বলতা থেকে গেলেও HttpOnly কুকি এবং কঠোর সিএসপি থাকলে হ্যাকার সেশন টোকেন চুরি করতে পারে না।'
      },
    },
    {
      id: 'owasp-capstone-ex-3',
      kind: 'mcq',
      topic: 'remediation-sla-by-severity',
      question: {
        en: 'What is a typical enterprise Remediation Service Level Agreement (SLA) for a Critical severity CVE (CVSS 9.0+)?',
        bn: 'একটি মারাত্মক ঝুঁকিপূর্ণ সিভিই (CVSS 9.0+) দুর্বলতার ক্ষেত্রে সাধারণ প্রাতিষ্ঠানিক সমাধান সময়সীমা (Remediation SLA) কেমন হওয়া উচিত?'
      },
      options: [
        {
          en: 'Emergency remediation within 24 to 48 hours, as critical vulnerabilities with public exploits present an imminent risk of automated enterprise compromise',
          bn: 'জরুরি ভিত্তিতে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে সমাধান করা, কারণ সর্বজনীন এক্সপ্লয়েট থাকা ক্রিটিক্যাল দুর্বলতাগুলো যেকোনো মুহূর্তে অটোমেটেড হ্যাকিংয়ের কারণ হতে পারে',
        },
        {
          en: 'Reviewing the vulnerability during next year annual shareholders meeting',
          bn: 'পরবর্তী বছরের বার্ষিক সাধারণ সভায় দুর্বলতাটি আলোচনা করা',
        },
        {
          en: 'Waiting six months for the computer operating system to expire',
          bn: 'অপারেটিং সিস্টেমের মেয়াদ ফুরানোর জন্য ছয় মাস অপেক্ষা করা',
        },
        {
          en: 'Ignoring the vulnerability unless customers complain on social media',
          bn: 'গ্রাহকরা অভিযোগ না করা পর্যন্ত দুর্বলতাটি সম্পূর্ণরূপে উপেক্ষা করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Critical vulnerabilities require emergency response within 24 to 48 hours.',
        bn: 'মারাত্মক দুর্বলতা ২৪ থেকে ৪৮ ঘণ্টার মধ্যে জরুরি ভিত্তিতে সমাধান করতে হয়।'
      },
      explanation: {
        en: 'High-severity flaws typically carry a 7-day SLA, medium-severity 30 days, while critical flaws demand immediate emergency hotfixing.',
        bn: 'হাই রিস্কের জন্য ৭ দিন, মিডিয়াম রিস্কের জন্য ৩০ দিন হলেও ক্রিটিক্যাল রিস্কের ক্ষেত্রে অবিলম্বে হটফিক্স দেওয়া আবশ্যক।'
      },
    },
    {
      id: 'owasp-capstone-ex-4',
      kind: 'predict',
      topic: 'final-passed-pillars-count',
      question: {
        en: 'How many of the 5 security pillars PASSED after deploying authentication rate limiting, achieving the SHIP production verdict? (5). Type the number.',
        bn: 'অথেনটিকেশন রেট লিমিটিং যুক্ত করার পর ৫ টি পিলারের মধ্যে সর্বমোট কয়টি পিলার PASSED হয় এবং উৎপাদনের জন্য SHIP সনদ লাভ করে? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'All 5 pillars passed in the final audit.',
        bn: 'চূড়ান্ত অডিটে ৫ টি পিলারের সবগুলোই পাস করেছিল।'
      },
      explanation: {
        en: 'With all 5 pillars passing inspection (5/5 = 1.00), the application security posture qualifies for the SHIP production deployment status.',
        bn: 'সবকটি ৫ টি পিলার পরীক্ষায় উত্তীর্ণ হওয়ায় (৫/৫ = ১.০০), অ্যাপ্লিকেশনটি উৎপাদনের জন্য SHIP স্ট্যাটাস লাভ করে।'
      },
    },
  ],
  quiz: {
    id: 'owasp-capstone-quiz',
    title: {
      en: 'Enterprise OWASP Compliance & Defense Capstone Quiz',
      bn: 'এন্টারপ্রাইজ ওওয়াস্প কমপ্লায়েন্স ও ডিফেন্স ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'owasp-cap-qz-1',
        kind: 'mcq',
        topic: 'stride-threat-modeling-framework',
        question: {
          en: 'What is the STRIDE threat modeling framework, and how does it assist software architects during application design?',
          bn: 'স্ট্রাইড (STRIDE) থ্রেট মডেলিং ফ্রেমওয়ার্ক কী এবং অ্যাপ্লিকেশন ডিজাইনের সময় এটি সফটওয়্যার আর্কিটেক্টদের কীভাবে সাহায্য করে?'
        },
        options: [
          {
            en: 'A security analysis framework categorizing threats into Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege, used to identify architectural design vulnerabilities before writing code',
            bn: 'একটি নিরাপত্তা ফ্রেমওয়ার্ক যা হুমকিগুলোকে স্পুফিং, ট্যাম্পারিং, অস্বীকার, তথ্য প্রকাশ, সেবা ব্যাহত ও অধিকার বৃদ্ধির ৬ টি শ্রেণীতে বিন্যস্ত করে কোড লেখার আগেই আর্কিটেকচারাল দুর্বলতা চিহ্নিত করতে সহায়তা করে',
          },
          {
            en: 'A programming language used for building database indexes',
            bn: 'ডাটাবেজের ইনডেক্স তৈরির কাজে ব্যবহৃত একটি বিশেষ প্রোগ্রামিং ভাষা',
          },
          {
            en: 'A tool that tests how fast computer cables conduct electricity',
            bn: 'এমন কোনো টুল যা পরীক্ষা করে তারের মধ্য দিয়ে বিদ্যুৎ কত দ্রুত প্রবাহিত হয়',
          },
          {
            en: 'A legal contract signed between computer hardware manufacturers',
            bn: 'কম্পিউটার হার্ডওয়্যার প্রস্তুতকারকদের মধ্যে স্বাক্ষরিত একটি আইনি চুক্তিপত্র',
          },
        ],
        answer: 0,
        hint: {
          en: 'STRIDE classifies 6 core threat types to design defenses pre-coding.',
          bn: 'STRIDE ৬ টি প্রধান ঝুঁকি শ্রেণীবদ্ধ করে কোড লেখার আগেই নিরাপত্তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Threat modeling using STRIDE catches design flaws (OWASP A04) during system design, eliminating expensive architectural rewrites later in production.',
          bn: 'সিস্টেম ডিজাইনের সময় STRIDE ব্যবহার করলে মৌলিক ডিজাইন ত্রুটিগুলো শুরুতেই ধরা পড়ে এবং পরবর্তীতে বড় ধরনের ক্ষয়ক্ষতি এড়ানো যায়।'
        },
      },
      {
        id: 'owasp-cap-qz-2',
        kind: 'mcq',
        topic: 'dast-scanner-ci-pipeline-fail',
        question: {
          en: 'How should continuous integration (CI) pipelines handle findings from automated DAST scanners (like OWASP ZAP)?',
          bn: 'স্বয়ংক্রিয় DAST স্ক্যানার (যেমন OWASP ZAP) থেকে প্রাপ্ত ফলাফল সিআই (CI) পাইপলাইনে কীভাবে পরিচালনা করা উচিত?'
        },
        options: [
          {
            en: 'The CI pipeline should automatically fail the build and block merging if any High or Critical vulnerabilities are detected, preventing vulnerable code from reaching production environments',
            bn: 'কোনো হাই বা ক্রিটিক্যাল দুর্বলতা ধরা পড়লে সিআই পাইপলাইনে স্বয়ংক্রিয়ভাবে বিল্ড বাতিল করে কোড মার্জ বন্ধ করে দিতে হবে, যাতে কোনো অরক্ষিত কোড প্রোডাকশনে যেতে না পারে',
          },
          {
            en: 'The pipeline should ignore the findings and delete the test logs',
            bn: 'পাইপলাইনের উচিত ফলাফল উপেক্ষা করা এবং টেস্ট লগ মুছে ফেলা',
          },
          {
            en: 'The pipeline should restart the computer monitor three times',
            bn: 'পাইপলাইনের উচিত কম্পিউটার মনিটর তিনবার রিস্টার্ট করা',
          },
          {
            en: 'The pipeline should convert all source code files into spreadsheet tables',
            bn: 'পাইপলাইনের উচিত সমস্ত সোর্স কোডকে স্প্রেডশীট ফাইলে বদলে দেওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Security gates in CI should fail builds on High and Critical vulnerabilities.',
          bn: 'সিআই পাইপলাইনে মারাত্মক দুর্বলতা পেলে বিল্ড আটকে দেওয়া উচিত।'
        },
        explanation: {
          en: 'Automated quality gates turn security policies into enforceable guardrails, ensuring that vulnerabilities are remediated before deployment.',
          bn: 'স্বয়ংক্রিয় সিকিউরিটি গেট নিশ্চিত করে যে ত্রুটিপূর্ণ কোড কোনোভাবেই প্রোডাকশন সার্ভারে পৌঁছাতে পারবে না।'
        },
      },
      {
        id: 'owasp-cap-qz-3',
        kind: 'mcq',
        topic: 'asvs-owasp-standard-verification',
        question: {
          en: 'What is the OWASP Application Security Verification Standard (ASVS), and what are its 3 verification levels?',
          bn: 'ওওয়াস্প অ্যাপ্লিকেশন সিকিউরিটি ভেরিফিকেশন স্ট্যান্ডার্ড (ASVS) কী এবং এর ৩ টি ভেরিফিকেশন লেভেল কী কী?'
        },
        options: [
          {
            en: 'A detailed framework of security requirements and controls: Level 1 for all software (opportunistic / automated testing), Level 2 for applications processing sensitive B2B/B2C transactions, and Level 3 for critical infrastructure and healthcare systems',
            bn: 'নিরাপত্তা নীতিমালা ও নিয়ন্ত্রণের একটি বিস্তারিত কাঠামো: লেভেল ১ সাধারণ সফটওয়্যারের জন্য, লেভেল ২ সংবেদনশীল আর্থিক বা ব্যবসায়িক লেনদেনের জন্য এবং লেভেল ৩ গুরুত্বপূর্ণ জাতীয় পরিকাঠামো ও স্বাস্থ্যসেবা ব্যবস্থার জন্য',
          },
          {
            en: 'A typing speed test for software engineers with three difficulty levels',
            bn: 'সফটওয়্যার ইঞ্জিনিয়ারদের জন্য তিনটি স্তরের টাইপিং স্পিড টেস্ট',
          },
          {
            en: 'A three-step guide to installing computer cooling fans',
            bn: 'কম্পিউটার কুলিং ফ্যান ইনস্টল করার তিন ধাপের নির্দেশিকা',
          },
          {
            en: 'A billing pricing tier for purchasing cloud server storage',
            bn: 'ক্লাউড স্টোরেজ কেনার জন্য তিনটি ভিন্ন মূল্যের তালিকা',
          },
        ],
        answer: 0,
        hint: {
          en: 'ASVS defines 3 levels of assurance from automated to mission-critical.',
          bn: 'ASVS সাধারণ পর্যায় থেকে শুরু করে অতি গুরুত্বপূর্ণ সিস্টেমের জন্য ৩ টি স্তর দেয়।'
        },
        explanation: {
          en: 'ASVS provides a granular checklist (over 280 verification requirements) helping architects specify and verify security controls throughout the project lifecycle.',
          bn: 'ASVS-এ ২৮০ টিরও বেশি যাচাইকরণ শর্ত থাকে যা ডেভেলপারদের শুরু থেকে শেষ পর্যন্ত পূর্ণাঙ্গ নিরাপত্তা নিশ্চিত করতে গাইড করে।'
        },
      },
      {
        id: 'owasp-cap-qz-4',
        kind: 'mcq',
        topic: 'zero-trust-application-perimeter',
        question: {
          en: 'In modern Zero Trust Application Architecture, why must microservices inside internal virtual private clouds (VPCs) authenticate each other?',
          bn: 'আধুনিক জিরো ট্রাস্ট আর্কিটেকচারে অভ্যন্তরীণ ক্লাউড নেটওয়ার্কের (VPC) ভেতরের মাইক্রোসার্ভিসগুলোকেও কেন একে অপরের পরিচয় যাচাই করতে হয়?'
        },
        options: [
          {
            en: 'Because an attacker who compromises an edge web server via SSRF or RCE can easily move laterally across unauthenticated internal services unless every internal microservice enforces mutual TLS (mTLS) and API token verification',
            bn: 'কারণ কোনো আক্রমণকারী এসএসআরএফ (SSRF) বা রিমোট কোড এক্সিকিউশনের মাধ্যমে প্রান্তিক ওয়েব সার্ভার দখল করলে অভ্যন্তরীণ সব সার্ভারে ছড়িয়ে পড়তে পারে, যদি না প্রতিটি মাইক্রোসার্ভিস মিউচুয়াল টিএলএস (mTLS) ও টোকেন যাচাই করে',
          },
          {
            en: 'Because internal microservices pay separate internet bills to telecom providers',
            bn: 'কারণ অভ্যন্তরীণ মাইক্রোসার্ভিসগুলোকে আলাদা আলাদা ইন্টারনেট বিল দিতে হয়',
          },
          {
            en: 'Because microservices cannot share the same computer memory chips',
            bn: 'কারণ মাইক্রোসার্ভিসগুলো একই মেমোরি চিপ ভাগাভাগি করতে পারে না',
          },
          {
            en: 'Because international law requires software to restart every four hours',
            bn: 'কারণ আন্তর্জাতিক আইনে প্রতি চার ঘণ্টা পর পর সফটওয়্যার রিস্টার্ট করার নিয়ম আছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero Trust eliminates implicit trust to stop lateral movement after a perimeter breach.',
          bn: 'জিরো ট্রাস্ট অভ্যন্তরীণ অন্ধবিশ্বাস দূর করে পার্শ্বীয় আক্রমণ প্রতিহত করে।'
        },
        explanation: {
          en: 'Zero Trust assumes the network is hostile. Authenticating every east-west RPC ensures that an edge compromise remains isolated to that single component.',
          bn: 'জিরো ট্রাস্ট ধরে নেয় পুরো নেটওয়ার্কই বিপজ্জনক। প্রতিটি অভ্যন্তরীণ সংযোগ যাচাই করলে কোনো একটি সার্ভার হ্যাক হলেও বাকিগুলো অক্ষত থাকে।'
        },
      },
    ],
  },
};
