import type { Lesson } from '../../../lib/types';

export const MeetOwaspLesson: Lesson = {
  slug: 'meet-owasp',
  tech: 'owasp',
  title: {
    en: 'Meet OWASP: An Overview of the Top 10 Web Vulnerabilities',
    bn: 'ওওয়াস্প পরিচিতি: টপ ১০ ওয়েব দুর্বলতার সংক্ষিপ্ত রূপরেখা'
  },
  summary: {
    en: 'A foundational overview of the Open Worldwide Application Security Project (OWASP) and the methodology behind the globally recognized OWASP Top 10 web application security standard. Learn how vulnerability prevalence and exploitability metrics categorize security flaws. Compare perimeter defenses with application-layer vulnerabilities. Inspect an executable Node.js audit engine evaluating 5 sampled risk categories: 4 categories are safely GUARDED, while 1 cryptographic failure exposes plaintext sensitive data requiring immediate remediation.',
    bn: 'ওপেন ওয়ার্ল্ডওয়াইড অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্টের (OWASP) মৌলিক রূপরেখা এবং বিশ্বব্যাপী সমাদৃত ওওয়াস্প টপ ১০ ওয়েব নিরাপত্তা মানদণ্ডের পেছনের পদ্ধতি জানুন। কীভাবে দুর্বলতার প্রকোপ ও তীব্রতা বিশ্লেষণ করে নিরাপত্তা ত্রুটিগুলো বিন্যস্ত করা হয় তা শিখুন। পেরিমিটার ফায়ারওয়ালের সাথে অ্যাপ্লিকেশন স্তরের দুর্বলতার তুলনা করুন। ৫ টি ওওয়াস্প ঝুঁকি ক্যাটাগরি নিরীক্ষাকারী একটি কার্যকর Node.js অডিট ইঞ্জিন পরীক্ষা করুন: ৪ টি ক্যাটাগরি নিরাপদে GUARDED অবস্থায় থাকলেও ১ টি ক্রিপ্টোগ্রাফিক ত্রুটি প্লেইনটেক্সট ডাটা প্রকাশ করে দেয় যা তাৎক্ষণিক সংশোধন প্রয়োজন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-owasp-and-top-10',
      text: {
        en: 'What is OWASP: The Global Gold Standard for Application Security',
        bn: 'ওওয়াস্প কী: অ্যাপ্লিকেশন নিরাপত্তার আন্তর্জাতিক স্বর্ণমান'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Open Worldwide Application Security Project (OWASP) is an international non-profit foundation dedicated to improving the security of software. Established in 2001, OWASP operates on an open-source, vendor-neutral model, providing free security guidelines, testing frameworks (such as OWASP ZAP), and educational standards to developers worldwide.',
        bn: 'ওপেন ওয়ার্ল্ডওয়াইড অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্ট (OWASP) হলো সফটওয়্যার নিরাপত্তা বৃদ্ধির লক্ষ্যে গঠিত একটি আন্তর্জাতিক অলাভজনক সংস্থা। ২০০১ সালে প্রতিষ্ঠিত এই সংস্থাটি ওপেন সোর্স ও নিরপেক্ষভাবে কাজ করে ডেভেলপারদের জন্য বিনামূল্যের নির্দেশিকা, নিরাপত্তা টেস্টিং টুল (যেমন OWASP ZAP) এবং মানদণ্ড তৈরি করে থাকে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The flagship document produced by the community is the OWASP Top 10. Rather than representing theoretical concerns, the Top 10 is synthesized from empirical telemetry across hundreds of thousands of web applications and millions of identified vulnerabilities. It aggregates Common Weakness Enumerations (CWEs) into 10 high-level categories based on incidence rates, exploitability, and organizational impact.',
        bn: 'সংস্থাটির প্রধান প্রকাশনা হলো "OWASP Top 10"। এটি কোনো তাত্ত্বিক অনুমান নয়, বরং লক্ষ লক্ষ ওয়েব অ্যাপ্লিকেশনের বাস্তব সিকিউরিটি অডিট থেকে প্রাপ্ত ডাটা বিশ্লেষণের মাধ্যমে তৈরি করা হয়। বিভিন্ন সাধারণ দুর্বলতার তালিকা (CWE) একত্রিত করে ঝুঁকি, আক্রমণের মাত্রা এবং ক্ষতির পরিমাণের ওপর ভিত্তি করে ১০ টি প্রধান ক্যাটাগরিতে এই তালিকা প্রকাশ করা হয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. A01: Broken Access Control',
            bn: '১. A01: ব্রোকেন অ্যাক্সেস কন্ট্রোল'
          },
          text: {
            en: 'The number one risk affecting over 94% of tested applications. Occurs when authorization checks are missing, allowing standard users to access administrator records or other users private data (IDOR).',
            bn: 'সর্বাধিক দেখা যাওয়া এক নম্বর ঝুঁকি যা ৯৪% অ্যাপ্লিকেশনে বিদ্যমান। সার্ভারে পর্যাপ্ত অনুমোদন যাচাই না থাকলে সাধারণ ব্যবহারকারীরা অ্যাডমিনের তথ্য বা অন্য গ্রাহকের ব্যক্তিগত ডাটা (IDOR) দেখে ফেলতে পারে।'
          },
        },
        {
          title: {
            en: '2. A02: Cryptographic Failures',
            bn: '২. A02: ক্রিপ্টোগ্রাফিক ব্যর্থতা'
          },
          text: {
            en: 'Formerly known as Sensitive Data Exposure. Occurs when passwords, credit cards, or health records are transmitted in cleartext or stored using obsolete algorithms like MD5 or DES without salting.',
            bn: 'পূর্বে যা সংবেদনশীল ডাটা প্রকাশ নামে পরিচিত ছিল। পাসওয়ার্ড, ক্রেডিট কার্ড বা ব্যক্তিগত তথ্য প্লেইনটেক্সটে পাঠানো হলে কিংবা MD5 ও DES-এর মতো পুরানো অ্যালগরিদমে সংরক্ষণ করলে এই ঝুঁকি তৈরি হয়।'
          },
        },
        {
          title: {
            en: '3. A03: Injection Attacks',
            bn: '৩. A03: ইনজেকশন আক্রমণ'
          },
          text: {
            en: 'Occurs when untrusted user input is concatenated directly into interpreter commands (SQL queries, LDAP searches, or shell calls), tricking the interpreter into running unauthorized code.',
            bn: 'ব্যবহারকারীর কাঁচা ইনপুট সরাসরি এসকিউএল কোয়েরি বা অপারেটিং সিস্টেম কমান্ডের সাথে জোড়া দিলে ইন্টারপ্রেটার বিভ্রান্ত হয়ে ক্ষতিকর কোড বা ডাটাবেজ কমান্ড চালিয়ে ফেলে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'OWASP Risk Evaluation: 4 Guarded Categories vs 1 Exposed Vulnerability',
        bn: 'ওওয়াস্প ঝুঁকি নিরীক্ষা: ৪ টি সুরক্ষিত ক্যাটাগরি বনাম ১ টি উন্মুক্ত দুর্বলতা'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="OWASP application security audit evaluating 5 categories with 4 guarded and 1 vulnerable">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">OWASP TOP 10 RISK EVALUATION & COMPLIANCE AUDIT</text>
  
  <!-- Left Box: Audited Categories -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 SAMPLED RISK CATEGORIES AUDITED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="18" fill="#ffffff" font-size="8.5" font-weight="bold">1. A01:2021 - Broken Access Control</text>
      <text x="12" y="34" fill="#94a3b8" font-size="8">Checks: Multi-tenant RBAC middleware enforced</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="70" fill="#ffffff" font-size="8.5" font-weight="bold">2. A03:2021 - Injection (SQL / Shell)</text>
      <text x="12" y="86" fill="#94a3b8" font-size="8">Checks: Parameterized prepared statements</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="122" fill="#ffffff" font-size="8.5" font-weight="bold">3. A04:2021 - Insecure Design</text>
      <text x="12" y="138" fill="#94a3b8" font-size="8">Checks: Threat modeling & architectural boundaries</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="174" fill="#ffffff" font-size="8.5" font-weight="bold">4. A05:2021 - Security Misconfiguration</text>
      <text x="12" y="190" fill="#94a3b8" font-size="8">Checks: Security headers & stack traces hidden</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="226" fill="#fca5a5" font-size="8.5" font-weight="bold">5. A02:2021 - Cryptographic Failures [GAP]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Checks: Plaintext credit cards stored in database!</text>
    </g>
  </g>
  
  <!-- Right Box: Audit Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">COMPLIANCE VERDICTS: 4 GUARDED | 1 OPEN</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="18" fill="#6ee7b7" font-size="8.5" font-weight="bold">1. GUARDED [✓] (CWE-200 / CWE-284)</text>
      <text x="12" y="34" fill="#34d399" font-size="8">IDOR prevented: All routes check tenant ownership</text>
      
      <rect y="52" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="70" fill="#6ee7b7" font-size="8.5" font-weight="bold">2. GUARDED [✓] (CWE-89 / CWE-78)</text>
      <text x="12" y="86" fill="#34d399" font-size="8">Code & data separation prevents syntax hijacking</text>
      
      <rect y="104" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="122" fill="#6ee7b7" font-size="8.5" font-weight="bold">3. GUARDED [✓] (CWE-1059)</text>
      <text x="12" y="138" fill="#34d399" font-size="8">Plausible threat vectors mitigated pre-coding</text>
      
      <rect y="156" width="346" height="46" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="174" fill="#6ee7b7" font-size="8.5" font-weight="bold">4. GUARDED [✓] (CWE-16)</text>
      <text x="12" y="190" fill="#34d399" font-size="8">Default credentials altered; CSP & HSTS enforced</text>
      
      <rect y="208" width="346" height="46" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="226" fill="#fca5a5" font-size="8.5" font-weight="bold">5. VULNERABLE [✗] (CWE-312 / CWE-327)</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Critical: Unencrypted sensitive data at rest!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">OWASP provides a focused prioritization matrix: remediating the single cryptographic failure protects user data</text>
</svg>`,
      caption: {
        en: 'The OWASP evaluation engine tests 5 critical vulnerability categories: 4 categories are safely GUARDED, and 1 cryptographic failure requires immediate remediation.',
        bn: 'ওওয়াস্প নিরীক্ষা ইঞ্জিন ৫ টি ক্যাটাগরি পরীক্ষা করে: ৪ টি ক্যাটাগরি নিরাপদে GUARDED অবস্থায় থাকলেও ১ টি ক্রিপ্টোগ্রাফিক ত্রুটি অবিলম্বে সংশোধন করা প্রয়োজন।'
      },
    },
    {
      type: 'heading',
      id: 'owasp-evaluator-engine-code',
      text: {
        en: 'Building an OWASP Vulnerability Triage Engine in Node.js',
        bn: 'Node.js-এ ওওয়াস্প দুর্বলতা নিরীক্ষা ও ট্রায়াজ ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'owasp-risk-triage.js',
      code: `// Deterministic OWASP Top 10 Security Triage & Evaluation Engine
class OwaspSecurityTriage {
  constructor(categories) {
    this.categories = categories;
  }

  // Audit application against sampled OWASP categories
  evaluatePosture() {
    let guardedCount = 0;
    const findings = this.categories.map((item, index) => {
      const isGuarded = item.status === 'GUARDED';
      if (isGuarded) guardedCount++;

      return {
        itemNumber: index + 1,
        owaspCode: item.code,
        categoryName: item.name,
        cweIdentifier: item.cwe,
        status: item.status,
        auditDetail: item.detail,
        severity: isGuarded ? 'LOW' : 'CRITICAL'
      };
    });

    const totalEvaluated = this.categories.length;
    return {
      totalEvaluated,
      guardedCount,
      vulnerableCount: totalEvaluated - guardedCount,
      findings
    };
  }
}

// 5 Sampled OWASP Categories under audit
const sampledCategories = [
  { code: 'A01:2021', name: 'Broken Access Control', cwe: 'CWE-200', status: 'GUARDED', detail: 'RBAC middleware validates tenant UUID on each request' },
  { code: 'A03:2021', name: 'Injection', cwe: 'CWE-89', status: 'GUARDED', detail: 'Database queries use parameterized prepared statements' },
  { code: 'A04:2021', name: 'Insecure Design', cwe: 'CWE-1059', status: 'GUARDED', detail: 'Threat modeling and rate-limiting limits enforced' },
  { code: 'A05:2021', name: 'Security Misconfiguration', cwe: 'CWE-16', status: 'GUARDED', detail: 'Hardened HTTP headers; verbose stack traces disabled' },
  { code: 'A02:2021', name: 'Cryptographic Failures', cwe: 'CWE-312', status: 'VULNERABLE', detail: 'Plaintext card numbers stored in database table!' }
];

const triageEngine = new OwaspSecurityTriage(sampledCategories);
const report = triageEngine.evaluatePosture();

console.log('=== OWASP Application Security Posture Audit ===\\n');
report.findings.forEach(f => {
  const mark = f.status === 'GUARDED' ? '[✓]' : '[✗]';
  console.log(\`\${mark} \${f.owaspCode} - \${f.categoryName}\`);
  console.log(\`    Status:   \${f.status} (\${f.cweIdentifier}) [Severity: \${f.severity}]\`);
  console.log(\`    Finding:  \${f.auditDetail}\\n\`);
});

console.log('=== Audit Summary ===');
console.log('Categories Evaluated: ', report.totalEvaluated);
console.log('Safely Guarded:       ', report.guardedCount);
console.log('Critical Gaps to Fix: ', report.vulnerableCount);`,
      caption: {
        en: 'The triage engine evaluates 5 sampled OWASP risk categories: 4 categories are safely GUARDED and 1 cryptographic failure is flagged for remediation.',
        bn: 'ট্রায়াজ ইঞ্জিন ৫ টি ওওয়াস্প ঝুঁকি ক্যাটাগরি মূল্যায়ন করে: ৪ টি ক্যাটাগরি নিরাপদে GUARDED থাকে এবং ১ টি ক্রিপ্টোগ্রাফিক ত্রুটি সমাধানের জন্য চিহ্নিত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Perimeter Firewalls Cannot Stop Application-Layer Flaws',
        bn: 'পেরিমিটার ফায়ারওয়াল অ্যাপ্লিকেশন স্তরের দুর্বলতা ঠেকাতে পারে না'
      },
      text: {
        en: 'A common misconception among junior developers is assuming that network firewalls (like iptables or AWS Security Groups) provide adequate application security. Network firewalls must permit legitimate HTTP traffic over port 443. Once an HTTPS packet passes the firewall and enters the web server, the firewall has zero insight into whether an SQL injection string or IDOR parameter is embedded in the JSON payload. Defense requires application-level controls.',
        bn: 'অনেকে ভুল ধারণা করেন যে নেটওয়ার্ক ফায়ারওয়াল (যেমন iptables বা AWS সিকিউরিটি গ্রুপ) থাকলেই অ্যাপ্লিকেশন সুরক্ষিত। ওয়েব সেবা দিতে গেলে ফায়ারওয়ালে ৪৪৩ পোর্ট খোলা রাখতেই হয়। কিন্তু যখন কোনো ইনকামিং রিকোয়েস্ট ফায়ারওয়াল পার হয়ে সার্ভারে ঢোকে, তখন ফায়ারওয়ালের পক্ষে বোঝা সম্ভব নয় যে বডির ভেতরের ডাটা সাধারণ টেক্সট নাকি ক্ষতিকর এসকিউএল ইনজেকশন। এর জন্য কোড ও অ্যাপ্লিকেশন স্তরেই নিরাপত্তা নিশ্চিত করতে হয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-meet-ex-1',
      kind: 'predict',
      topic: 'guarded-categories-count',
      question: {
        en: 'In the OWASP security audit of 5 sampled categories, how many categories were safely configured and verified as GUARDED? (4). Type the number.',
        bn: '৫ টি ওওয়াস্প ক্যাটাগরির নিরাপত্তা নিরীক্ষায় সর্বমোট কয়টি ক্যাটাগরি সঠিকভাবে কনফিগার করা ছিল এবং GUARDED হিসেবে প্রমাণিত হয়েছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Exactly 4 categories were securely guarded.',
        bn: 'ঠিক ৪ টি ক্যাটাগরি নিরাপদে সুরক্ষিত ছিল।'
      },
      explanation: {
        en: 'Out of 5 audited categories, 4 were guarded (access control, injection, insecure design, and security misconfiguration). Only cryptographic failures failed.',
        bn: '৫ টি ক্যাটাগরির মধ্যে ৪ টি সুরক্ষিত ছিল (অ্যাক্সেস কন্ট্রোল, ইনজেকশন, ইনসিকিউর ডিজাইন এবং সিকিউরিটি মিসকনফিগারেশন)। কেবল ক্রিপ্টোগ্রাফিক ব্যর্থতা দেখা গিয়েছিল।'
      },
    },
    {
      id: 'owasp-meet-ex-2',
      kind: 'mcq',
      topic: 'owasp-a01-broken-access-dominance',
      question: {
        en: 'Why did Broken Access Control rise to the #1 position in the OWASP Top 10?',
        bn: 'ওওয়াস্প টপ ১০ তালিকায় ব্রোকেন অ্যাক্সেস কন্ট্রোল (Broken Access Control) কেন শীর্ষ ১ নম্বর অবস্থানে উঠে এসেছে?'
      },
      options: [
        {
          en: 'Telemetry from extensive application security testing revealed that broken access control flaws were present in over 94% of tested applications, allowing attackers to access unauthorized data across user and administrative accounts',
          bn: 'ব্যাপক অ্যাপ্লিকেশন সিকিউরিটি টেস্টিংয়ের ডাটা বিশ্লেষণ করে দেখা গেছে যে ৯৪% অ্যাপ্লিকেশনেই অ্যাক্সেস কন্ট্রোল ত্রুটি ছিল, যার ফলে আক্রমণকারীরা সহজেই অন্য ব্যবহারকারী বা অ্যাডমিনের তথ্য দেখে নিতে পারে',
        },
        {
          en: 'Because access control locks physical doors using iron keys',
          bn: 'কারণ অ্যাক্সেস কন্ট্রোল লোহার চাবি দিয়ে অফিসের দরজা আটকে রাখে',
        },
        {
          en: 'Because access control was invented only last year',
          bn: 'কারণ অ্যাক্সেস কন্ট্রোল পদ্ধতিটি মাত্র গত বছর আবিষ্কৃত হয়েছে',
        },
        {
          en: 'Because access control makes websites load ten times faster',
          bn: 'কারণ অ্যাক্সেস কন্ট্রোল ব্যবহারের ফলে ওয়েবসাইট দশ গুণ দ্রুত লোড হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'It was identified in over 94% of audited enterprise applications.',
        bn: 'নিরীক্ষা করা ৯৪% এন্টারপ্রাইজ অ্যাপ্লিকেশনেই এই দুর্বলতা পাওয়া গিয়েছিল।'
      },
      explanation: {
        en: 'While SQL injection can be neutralized systematically via ORMs, access control requires customized business logic verification on every single endpoint, making human omission common.',
        bn: 'এসকিউএল ইনজেকশন ওআরএম ব্যবহারের মাধ্যমে সহজেই রোধ করা গেলেও, অ্যাক্সেস কন্ট্রোলের জন্য প্রতিটি এন্ডপয়েন্টে আলাদা লজিক লিখতে হয় যাতে প্রায়ই ভুল থেকে যায়।'
      },
    },
    {
      id: 'owasp-meet-ex-3',
      kind: 'mcq',
      topic: 'cwe-vs-owasp-difference',
      question: {
        en: 'What is the structural relationship between Common Weakness Enumeration (CWE) and the OWASP Top 10?',
        bn: 'কমন উইকনেস এনিউমারেশন (CWE) এবং ওওয়াস্প (OWASP) টপ ১০ এর মধ্যকার কাঠামোগত সম্পর্ক কী?'
      },
      options: [
        {
          en: 'CWE is a comprehensive dictionary of hundreds of specific individual software weaknesses; the OWASP Top 10 clusters related CWEs into 10 prioritized strategic categories based on real-world impact',
          bn: 'CWE হলো শত শত নির্দিষ্ট সফটওয়্যার দুর্বলতার একটি পূর্ণাঙ্গ অভিধান; আর ওওয়াস্প টপ ১০ বাস্তব ক্ষয়ক্ষতি ও ঝুঁকির ওপর ভিত্তি করে সম্পর্কিত CWE গুলোকে ১০ টি প্রধান কৌশলগত ক্যাটাগরিতে গুচ্ছভুক্ত করে',
        },
        {
          en: 'CWE is a computer programming language while OWASP is a database engine',
          bn: 'CWE হলো একটি প্রোগ্রামিং ভাষা আর ওওয়াস্প হলো একটি ডাটাবেজ ইঞ্জিন',
        },
        {
          en: 'CWE only applies to mainframe hardware built before 1980',
          bn: 'CWE কেবল ১৯৮০ সালের আগে তৈরি মেইনফ্রেম কম্পিউটারে প্রযোজ্য',
        },
        {
          en: 'OWASP replaced all computer operating systems with Linux',
          bn: 'ওওয়াস্প সমস্ত অপারেটিং সিস্টেম বদলে সেখানে লিনাক্স বসিয়ে দিয়েছে',
        },
      ],
      answer: 0,
      hint: {
        en: 'CWE lists specific atomic weaknesses; OWASP aggregates them into 10 risk categories.',
        bn: 'CWE নির্দিষ্ট দুর্বলতাগুলো তালিকাভুক্ত করে; ওওয়াস্প সেগুলোকে ১০ টি ঝুঁকি গ্রুপে সাজায়।'
      },
      explanation: {
        en: 'For example, OWASP category A03 (Injection) encompasses dozens of specific CWEs including CWE-89 (SQLi), CWE-78 (OS Command Injection), and CWE-77 (Command Injection).',
        bn: 'উদাহরণস্বরূপ, ওওয়াস্পের A03 (ইনজেকশন) ক্যাটাগরির ভেতরে CWE-89 (SQLi) এবং CWE-78 (কমান্ড ইনজেকশন) সহ বহু নির্দিষ্ট দুর্বলতা অন্তর্ভুক্ত থাকে।'
      },
    },
    {
      id: 'owasp-meet-ex-4',
      kind: 'predict',
      topic: 'vulnerable-categories-count',
      question: {
        en: 'How many of the 5 sampled categories contained an active vulnerability requiring immediate architectural remediation? (1). Type the number.',
        bn: '৫ টি ওওয়াস্প ক্যাটাগরির মধ্যে সর্বমোট কয়টি ক্যাটাগরিতে সক্রিয় দুর্বলতা ছিল যা অবিলম্বে সমাধান করা প্রয়োজন? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 category had a critical vulnerability.',
        bn: 'কেবলমাত্র ১ টি ক্যাটাগরিতে মারাত্মক দুর্বলতা ছিল।'
      },
      explanation: {
        en: 'Only category A02 (Cryptographic Failures) was vulnerable due to storing plaintext payment details. The other 4 categories were securely guarded.',
        bn: 'প্লেইনটেক্সট পেমেন্ট তথ্য রাখার কারণে কেবল ক্যাটাগরি A02 (ক্রিপ্টোগ্রাফিক ব্যর্থতা) অরক্ষিত ছিল। বাকি ৪ টি ক্যাটাগরি সুরক্ষিত ছিল।'
      },
    },
  ],
  quiz: {
    id: 'meet-owasp-quiz',
    title: {
      en: 'OWASP Top 10 Taxonomy & Risk Modeling Quiz',
      bn: 'ওওয়াস্প টপ ১০ শ্রেণিবিন্যাস ও ঝুঁকি মডেলিং কুইজ'
    },
    questions: [
      {
        id: 'owasp-meet-qz-1',
        kind: 'mcq',
        topic: 'owasp-zap-automated-dast-role',
        question: {
          en: 'What role does the OWASP Zed Attack Proxy (ZAP) play in modern software security development lifecycles (DevSecOps)?',
          bn: 'আধুনিক সফটওয়্যার ডেভেলপমেন্ট লাইফসাইকেলে (DevSecOps) ওওয়াস্প জেড অ্যাটাক প্রক্সি (OWASP ZAP) কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It acts as an automated Dynamic Application Security Testing (DAST) scanner that probes running web applications from the outside to discover vulnerabilities like XSS, missing headers, and SQL injection in CI/CD pipelines',
            bn: 'এটি একটি স্বয়ংক্রিয় ডাইনামিক অ্যাপ্লিকেশন সিকিউরিটি টেস্টিং (DAST) স্ক্যানার যা চলমান অ্যাপ্লিকেশনকে বাইরে থেকে আক্রমণ করে এক্সএসএস, মিসিং হেডার এবং এসকিউএল ইনজেকশনের মতো দুর্বলতাগুলো সিআই/সিডি পাইপলাইনে স্বয়ংক্রিয়ভাবে চিহ্নিত করে',
          },
          {
            en: 'It is a text editor designed to replace Visual Studio Code',
            bn: 'এটি একটি টেক্সট এডিটর যা ভিজ্যুয়াল স্টুডিও কোডের বিকল্প হিসেবে তৈরি করা হয়েছে',
          },
          {
            en: 'It connects laptop computers to Wi-Fi printers automatically',
            bn: 'এটি ল্যাপটপ কম্পিউটারকে স্বয়ংক্রিয়ভাবে ওয়াইফাই প্রিন্টারের সাথে যুক্ত করে',
          },
          {
            en: 'It backs up employee photographs to external flash memory drives',
            bn: 'এটি কর্মীদের ব্যক্তিগত ছবিগুলো এক্সটার্নাল মেমোরি ড্রাইভে ব্যাকআপ রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'ZAP performs automated dynamic web vulnerability scanning.',
          bn: 'ZAP চলমান ওয়েবসাইটে স্বয়ংক্রিয় ডাইনামিক দুর্বলতা স্ক্যানিং পরিচালনা করে।'
        },
        explanation: {
          en: 'ZAP can be integrated into GitHub Actions or GitLab CI to intercept HTTP traffic, simulate real-world attacks, and fail build jobs when high-risk vulnerabilities are detected.',
          bn: 'ZAP-কে গিটহাব অ্যাকশনস বা সিআই পাইপলাইনে যুক্ত করে ক্ষতিকর রিকোয়েস্ট পাঠিয়ে টেস্ট করা হয় এবং কোনো ত্রুটি পেলে বিল্ড আটকে দেওয়া যায়।'
        },
      },
      {
        id: 'owasp-meet-qz-2',
        kind: 'mcq',
        topic: 'sast-vs-dast-difference',
        question: {
          en: 'How does Static Application Security Testing (SAST) differ from Dynamic Application Security Testing (DAST)?',
          bn: 'স্ট্যাটিক অ্যাপ্লিকেশন সিকিউরিটি টেস্টিং (SAST) এবং ডাইনামিক অ্যাপ্লিকেশন সিকিউরিটি টেস্টিং (DAST) এর মধ্যকার পার্থক্য কী?'
        },
        options: [
          {
            en: 'SAST analyzes source code without executing it (white-box inside-out analysis), whereas DAST tests a running compiled application from the outside by sending malicious requests without access to source code (black-box outside-in analysis)',
            bn: 'SAST কোড না চালিয়েই সরাসরি সোর্স কোড বিশ্লেষণ করে ত্রুটি খোঁজে (হোয়াইট-বক্স বিশ্লেষণ), আর DAST সোর্স কোড ছাড়াই চলমান অ্যাপ্লিকেশনকে বাইরে থেকে আক্রমণকারী সেজে ক্ষতিকর রিকোয়েস্ট পাঠিয়ে টেস্ট করে (ব্ল্যাক-বক্স বিশ্লেষণ)',
          },
          {
            en: 'SAST is only used on weekends while DAST is used on weekdays',
            bn: 'SAST কেবল ছুটির দিনে ব্যবহার করা হয় আর DAST কার্যদিবসে চালানো হয়',
          },
          {
            en: 'SAST tests computer monitor displays while DAST tests mouse clicks',
            bn: 'SAST কম্পিউটার মনিটর পরীক্ষা করে আর DAST মাউসের ক্লিক পরীক্ষা করে',
          },
          {
            en: 'SAST deletes old files while DAST creates new folders',
            bn: 'SAST পুরানো ফাইল মুছে ফেলে আর DAST নতুন ফোল্ডার তৈরি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SAST inspects resting source code; DAST attacks running HTTP servers.',
          bn: 'SAST কোডের লেখা পরীক্ষা করে; DAST চলমান ওয়েব সার্ভারকে বাইরে থেকে আক্রমণ করে।'
        },
        explanation: {
          en: 'Mature security programs combine both: SAST (e.g. Semgrep, SonarQube) finds unescaped variables in code, while DAST (e.g. OWASP ZAP) discovers runtime configuration and deployment flaws.',
          bn: 'একটি পূর্ণাঙ্গ নিরাপত্তা ব্যবস্থায় উভয় পদ্ধতি ব্যবহার করা হয়: SAST কোডের ভুল খুঁজে দেয়, আর DAST সার্ভারের মিসকনফিগারেশন ধরে ফেলে।'
        },
      },
      {
        id: 'owasp-meet-qz-3',
        kind: 'mcq',
        topic: 'threat-modeling-in-insecure-design',
        question: {
          en: 'Why cannot security bugs categorized under A04: Insecure Design be solved by simply patching code implementation errors?',
          bn: 'A04: ইনসিকিউর ডিজাইন ক্যাটাগরির নিরাপত্তা ত্রুটিগুলো কেন কেবল কোডের বাগ ঠিক করে সমাধান করা যায় না?'
        },
        options: [
          {
            en: 'Insecure design represents fundamental flaws in architecture and business requirements (e.g. missing security controls in system specifications); a perfect implementation of a flawed design remains vulnerable',
            bn: 'ইনসিকিউর ডিজাইন মূলত সিস্টেমের আর্কিটেকচার এবং ব্যবসায়িক নীতিমালার মৌলিক ত্রুটি (যেমন ডিজাইনে নিরাপত্তা বিবেচনাই না রাখা); একটি ত্রুটিপূর্ণ ডিজাইনে নিখুঁত কোড লিখলেও পুরো সিস্টেম অনিরাপদ থেকে যায়',
          },
          {
            en: 'Because insecure design only affects computer keyboards and mice',
            bn: 'কারণ ইনসিকিউর ডিজাইন কেবল কম্পিউটার কীবোর্ড এবং মাউসের ক্ষতি করে',
          },
          {
            en: 'Because computer hardware cannot run software with secure designs',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার সুরক্ষিত ডিজাইনের সফটওয়্যার চালাতে পারে না',
          },
          {
            en: 'Because designing software is forbidden under international copyright law',
            bn: 'কারণ আন্তর্জাতিক কপিরাইট আইনে সফটওয়্যার ডিজাইন করা নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: {
          en: 'Design flaws occur in architecture before any code is written.',
          bn: 'ডিজাইন ত্রুটি কোড লেখার আগেই আর্কিটেকচার তৈরির সময় ঘটে থাকে।'
        },
        explanation: {
          en: 'For example, designing a password reset system that only asks for a mother maiden name is inherently insecure, no matter how bug-free the Node.js implementation is.',
          bn: 'উদাহরণস্বরূপ, মায়ের নাম জিজ্ঞাসা করে পাসওয়ার্ড রিসেট করার আর্কিটেকচার তৈরি করলে কোডে কোনো বাগ না থাকলেও ডিজাইনগত কারণেই অ্যাকাউন্ট হ্যাক হতে পারে।'
        },
      },
      {
        id: 'owasp-meet-qz-4',
        kind: 'mcq',
        topic: 'shift-left-security-philosophy',
        question: {
          en: 'What does the security concept of "Shift Left" mean in modern software engineering teams?',
          bn: 'আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিং টিমে নিরাপত্তার ক্ষেত্রে "শিফট লেফট" (Shift Left) ধারণাটির অর্থ কী?'
        },
        options: [
          {
            en: 'Integrating security practices, automated testing, and threat modeling early in the software development lifecycle (planning and coding) rather than waiting for production deployment or post-release penetration tests',
            bn: 'উৎপাদন বা ডিপ্লয়মেন্টের পর পেনিট্রেশন টেস্টের জন্য অপেক্ষা না করে সফটওয়্যার তৈরির শুরুতেই (প্ল্যানিং ও কোডিংয়ের ধাপে) নিরাপত্তা যাচাই, অটোমেটেড টেস্টিং এবং থ্রেট মডেলিং অন্তর্ভুক্ত করা',
          },
          {
            en: 'Moving all computer desktop monitors to the left side of office desks',
            bn: 'অফিসের সমস্ত কম্পিউটার মনিটর টেবিলের বাম পাশে সরিয়ে নেওয়া',
          },
          {
            en: 'Typing code using only the left hand on keyboard keys',
            bn: 'কীবোর্ডে কেবল বাম হাত দিয়ে সমস্ত কোড টাইপ করার নিয়ম করা',
          },
          {
            en: 'Writing software documentation in languages written from right to left',
            bn: 'সফটওয়্যারের ডকুমেন্টেশন কেবল ডান থেকে বামে লেখা ভাষায় তৈরি করা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Shift Left means catching security vulnerabilities as early as possible.',
          bn: 'শিফট লেফট মানে হলো কোড তৈরির শুরুতেই দুর্বলতাগুলো চিহ্নিত ও সমাধান করা।'
        },
        explanation: {
          en: 'Fixing a flaw in production is estimated to be 30x to 100x more expensive than catching it during the initial design or pull-request phase.',
          bn: 'প্রোডাকশনে যাওয়ার পর কোনো নিরাপত্তা ত্রুটি সমাধান করার খরচ কোড লেখার সময় তা ঠিক করার চেয়ে ৩০ থেকে ১০০ গুণ বেশি।'
        },
      },
    ],
  },
  next: {
    slug: 'injection-attacks',
    title: {
      en: 'Injection Attacks: SQL Injection, OS Commands & Prepared Statements',
      bn: 'ইনজেকশন আক্রমণ: এসকিউএল ইনজেকশন, ওএস কমান্ড ও প্রিপেয়ার্ড স্টেটমেন্ট'
    },
  },
};
