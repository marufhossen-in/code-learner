import type { Lesson } from '../../../lib/types';

export const SecheadersCapstoneLesson: Lesson = {
  slug: 'secheaders-capstone',
  tech: 'web-security',
  title: {
    en: 'Web Security Architecture Capstone: The 6-Point Security Audit',
    bn: 'ওয়েব সিকিউরিটি আর্কিটেকচার ক্যাপস্টোন: ৬-দফা নিরাপত্তা অডিট'
  },
  summary: {
    en: 'Synthesize the entire web application security architecture into an automated 6-pillar defense-in-depth audit. Evaluate ingress traffic inspection, TLS transport encryption, Same-Origin Policy boundaries, Cross-Site Scripting sanitization, CSRF token validation, and declarative HTTP security headers. Experience how a baseline audit with 5 passing pillars out of 6 (score 0.83) receives an uncompromising HOLD verdict, and witness how welding the final sagging wall achieves a unanimous 6 out of 6 SHIP verdict.',
    bn: 'পুরো ওয়েব অ্যাপ্লিকেশন নিরাপত্তা আর্কিটেকচারকে একটি স্বয়ংক্রিয় ৬-দফা বহুস্তরীয় নিরাপত্তা অডিটে একত্রিত করুন। ট্রাফিক ফিল্টারিং, TLS ট্রান্সপোর্ট এনক্রিপশন, সেম-অরিজিন পলিসি সীমানা, ক্রস-সাইট স্ক্রিপ্টিং স্যানিটাইজেশন, CSRF টোকেন যাচাই এবং ঘোষণামূলক HTTP সিকিউরিটি হেডার মূল্যায়ন করুন। কীভাবে ৬ টির মধ্যে ৫ টি স্তম্ভ পাস থাকা সত্ত্বেও (স্কোর ০.৮৩) সিস্টেমটি আপসহীন HOLD রায় পায় এবং কীভাবে দুর্বল প্রাচীরটি মেরামত করে সর্বসম্মত ৬ এর মধ্যে ৬ অর্জন করে SHIP রায় পাওয়া যায় তা প্রত্যক্ষ করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'holistic-defense-matrix',
      text: {
        en: 'The Holistic Security Fortress: Why Averages Hide Breaches',
        bn: 'সার্বিক নিরাপত্তা দুর্গ: কেন গড় স্কোর ঝুঁকি লুকিয়ে রাখে'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you secure a modern production web application, you must remember that automated adversaries never attack your strongest defensive wall. Attackers methodically probe every layer of your infrastructure, searching for the single forgotten endpoint, the unescaped user parameter, or the missing response header that permits exploitation.',
        bn: 'যখন আপনি একটি আধুনিক প্রোডাকশন ওয়েব অ্যাপ্লিকেশনকে সুরক্ষিত করেন, তখন মনে রাখবেন যে স্বয়ংক্রিয় আক্রমণকারীরা কখনোই আপনার সবচেয়ে শক্তিশালী দেয়ালে আঘাত হানে না। আক্রমণকারীরা অত্যন্ত সুশৃঙ্খলভাবে পরিকাঠামোর প্রতিটি স্তর পরীক্ষা করে একমাত্র ভুলে যাওয়া এন্ডপয়েন্ট, এনকোড না করা প্যারামিটার বা বাদ পড়ে যাওয়া রেসপন্স হেডার খুঁজে বের করার চেষ্টা করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A defense-in-depth architecture requires full unanimity across all 6 core security pillars. If 5 pillars are completely impervious but the 6th pillar sags (for example, missing HTTP security headers with a score of 0.83), the architecture cannot be safely deployed to production. Security engineering demands an absolute standard: 5 out of 6 results in a HOLD verdict, while a unanimous 6 out of 6 earns a SHIP verdict.',
        bn: 'একটি কার্যকর বহুস্তরীয় প্রতিরক্ষা আর্কিটেকচারের জন্য ৬ টি প্রধান নিরাপত্তা স্তম্ভের প্রতিটিতেই নিখুঁত সর্বসম্মতি প্রয়োজন। যদি ৫ টি স্তম্ভ সম্পূর্ণ সুরক্ষিত থাকে কিন্তু ৬ নম্বর স্তম্ভটি দুর্বল হয় (উদাহরণস্বরূপ, ০.৮৩ স্কোরসহ সিকিউরিটি হেডারের অনুপস্থিতি), তবে অ্যাপ্লিকেশনটি প্রোডাকশনে প্রকাশ করা নিরাপদ নয়। সিকিউরিটি ইঞ্জিনিয়ারিংয়ে কোনো আপস নেই: ৬ টির মধ্যে ৫ টি পাস করলে রায় হয় HOLD, আর ৬ টির মধ্যে ৬ টি পাস করলেই কেবল SHIP রায় পাওয়া যায়।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'The 6-Pillar Fortress Audit: Baseline HOLD (0.83) vs Hardened SHIP (1.00)',
        bn: '৬-দফা দুর্গ অডিট: বেসলাইন HOLD (০.৮৩) বনাম সুরক্ষিত SHIP (১.০০)'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Web security fortress audit showing 6 defensive pillars transitioning from HOLD to SHIP">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">WEB SECURITY ARCHITECTURE: 6-PILLAR COMPLIANCE AUDIT</text>
  
  <!-- Left Side: Baseline Audit (5/6 Passed -> 0.83 HOLD) -->
  <g transform="translate(35, 55)">
    <rect width="370" height="345" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#dc2626"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">BASELINE AUDIT: 5/6 ≈ 0.83 -> VERDICT: HOLD [✗]</text>
    
    <g transform="translate(15, 45)">
      <rect width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="22" fill="#6ee7b7" font-size="8.5" font-weight="bold">1. Ingress Filter: Blocked hostile bot probes [PASS ✓]</text>
      
      <rect y="42" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="64" fill="#6ee7b7" font-size="8.5" font-weight="bold">2. TLS & HSTS: AES-256-GCM sealed [PASS ✓]</text>
      
      <rect y="84" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="106" fill="#6ee7b7" font-size="8.5" font-weight="bold">3. Origin & CORS: Scheme/host/port matched [PASS ✓]</text>
      
      <rect y="126" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="148" fill="#6ee7b7" font-size="8.5" font-weight="bold">4. XSS Sanitization: 5 payloads neutralized [PASS ✓]</text>
      
      <rect y="168" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="190" fill="#6ee7b7" font-size="8.5" font-weight="bold">5. CSRF Defense: Synchronizer tokens active [PASS ✓]</text>
      
      <rect y="210" width="340" height="36" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="232" fill="#fca5a5" font-size="8.5" font-weight="bold">6. Security Headers: Missing nosniff & referrer [FAIL ✗]</text>
      
      <rect y="254" width="340" height="32" rx="5" fill="#450a0a"/>
      <text x="170" y="275" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">HOLD: Sagging wall blocks production deploy</text>
    </g>
  </g>
  
  <!-- Right Side: Hardened Audit (6/6 Passed -> 1.00 SHIP) -->
  <g transform="translate(435, 55)">
    <rect width="370" height="345" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HARDENED AUDIT: 6/6 = 1.00 -> VERDICT: SHIP [✓]</text>
    
    <g transform="translate(15, 45)">
      <rect width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="22" fill="#6ee7b7" font-size="8.5" font-weight="bold">1. Ingress Filter: Blocked hostile bot probes [PASS ✓]</text>
      
      <rect y="42" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="64" fill="#6ee7b7" font-size="8.5" font-weight="bold">2. TLS & HSTS: AES-256-GCM sealed [PASS ✓]</text>
      
      <rect y="84" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="106" fill="#6ee7b7" font-size="8.5" font-weight="bold">3. Origin & CORS: Scheme/host/port matched [PASS ✓]</text>
      
      <rect y="126" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="148" fill="#6ee7b7" font-size="8.5" font-weight="bold">4. XSS Sanitization: 5 payloads neutralized [PASS ✓]</text>
      
      <rect y="168" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="190" fill="#6ee7b7" font-size="8.5" font-weight="bold">5. CSRF Defense: Synchronizer tokens active [PASS ✓]</text>
      
      <rect y="210" width="340" height="36" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="232" fill="#6ee7b7" font-size="8.5" font-weight="bold">6. Security Headers: All 5 headers deployed [PASS ✓]</text>
      
      <rect y="254" width="340" height="32" rx="5" fill="#064e3b"/>
      <text x="170" y="275" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">SHIP: Unanimous fortress security approved</text>
    </g>
  </g>
  
  <text x="420" y="420" fill="#94a3b8" font-size="10" text-anchor="middle">Welding the final sagging wall upgrades the architectural verdict from HOLD (0.83) to SHIP (1.00)</text>
</svg>`,
      caption: {
        en: 'The capstone audit evaluates a baseline system passing 5 out of 6 pillars (score 0.83, HOLD) against a hardened system where all 6 pillars succeed (score 1.00, SHIP).',
        bn: 'ক্যাপস্টোন অডিটে ৬ টির মধ্যে ৫ টি স্তম্ভ পাস থাকা বেসলাইন সিস্টেম (স্কোর ০.৮৩, HOLD) এবং ৬ টির সবকয়টি সফল হওয়া সুরক্ষিত সিস্টেমের (স্কোর ১.০০, SHIP) তুলনা দেখানো হয়েছে।'
      },
    },
    {
      type: 'heading',
      id: 'six-fortress-pillars',
      text: {
        en: 'The Six Architectural Fortress Pillars Reviewed',
        bn: 'দুর্গের ৬ টি আর্কিটেকচারাল নিরাপত্তা স্তম্ভের পর্যালোচনা'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Ingress Traffic Filter',
            bn: '১. ইনগ্রেস ট্রাফিক ফিল্টার'
          },
          text: {
            en: 'Adheres to the default-deny principle. Inspects incoming request paths, dropping automated SQL injection and path traversal scanning bots with HTTP 400 or 403.',
            bn: 'ডিফল্ট-ডিনাই নীতি অনুসরণ করে। আগত রিকোয়েস্টের পাথ পরীক্ষা করে স্বয়ংক্রিয় এসকিউএল ইনজেকশন বা পাথ ট্রাভার্সাল স্ক্যানিং বটগুলোকে সরাসরি HTTP ৪০০ বা ৪০৩ দিয়ে বাতিল করে।'
          },
        },
        {
          title: {
            en: '2. Transport Layer Security & HSTS',
            bn: '২. ট্রান্সপোর্ট লেয়ার সিকিউরিটি এবং HSTS'
          },
          text: {
            en: 'Enforces TLS 1.3 with AES-256-GCM authenticated encryption and 1-year HSTS headers, guaranteeing confidentiality, message integrity, and resistance to SSLstrip.',
            bn: 'AES-256-GCM এনক্রিপশনসহ TLS ১.৩ এবং ১ বছরের HSTS হেডার প্রয়োগ করে গোপনীয়তা, ডেটার অখণ্ডতা এবং SSL-স্ট্রিপিং প্রতিরোধ নিশ্চিত করে।'
          },
        },
        {
          title: {
            en: '3. Origin Boundary & CORS Isolation',
            bn: '৩. অরিজিন সীমানা এবং CORS আইসোলেশন'
          },
          text: {
            en: 'Strictly verifies the 3-part origin tuple (Scheme, Host, Port). Forbids wildcard origins when passing session credentials.',
            bn: '৩ টি উপাদানযুক্ত অরিজিন টাপল (স্কিম, হোস্ট, পোর্ট) কঠোরভাবে যাচাই করে। সেশন ক্রেডেনশিয়াল ব্যবহারের সময় কোনো ওয়াইল্ডকার্ড অরিজিন নিষিদ্ধ করে।'
          },
        },
        {
          title: {
            en: '4. XSS Neutralization & Escaping',
            bn: '৪. XSS নিষ্ক্রিয়করণ এবং এসকেপিং'
          },
          text: {
            en: 'Converts untrusted input into inert HTML entities. Mandates HttpOnly cookies to keep session identifiers inaccessible to JavaScript execution.',
            bn: 'অনিরাপদ ইনপুটকে নিষ্ক্রিয় এইচটিএমএল এন্টিটিতে রূপান্তর করে। সেশন আইডিকে জাভাস্ক্রিপ্টের নাগালের বাইরে রাখতে HttpOnly কুকি বাধ্যতামূলক করে।'
          },
        },
        {
          title: {
            en: '5. CSRF Synchronizer Tokens & SameSite',
            bn: '৫. CSRF সিঙ্ক্রোনাইজার টোকেন এবং SameSite'
          },
          text: {
            en: 'Requires unguessable secret tokens on state-changing POST requests and sets SameSite=Lax on cookies to stop ambient cookie exploitation.',
            bn: 'স্টেট-পরিবর্তনকারী POST রিকোয়েস্টে গোপন টোকেন নিশ্চিত করে এবং কুকিতে SameSite=Lax সেট করে অননুমোদিত বহিরাগত আক্রমণ প্রতিহত করে।'
          },
        },
        {
          title: {
            en: '6. Declarative Security Headers',
            bn: '৬. ঘোষণামূলক সিকিউরিটি হেডার'
          },
          text: {
            en: 'Deploys all 5 mandatory response headers: CSP, HSTS, X-Frame-Options (or frame-ancestors), X-Content-Type-Options (nosniff), and Referrer-Policy.',
            bn: 'সকল ৫ টি বাধ্যতামূলক রেসপন্স হেডার মোতায়েন করে: CSP, HSTS, X-Frame-Options (বা frame-ancestors), X-Content-Type-Options (nosniff) এবং Referrer-Policy।'
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'capstone-audit-engine-code',
      text: {
        en: 'Building the Full-Stack Fortress Security Auditor in Node.js',
        bn: 'Node.js-এ ফুল-স্ট্যাক দুর্গ নিরাপত্তা অডিটর তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'fortress-security-auditor.js',
      code: `// Comprehensive 6-Pillar Web Security Architecture Auditor Engine
class FortressSecurityAuditor {
  auditSystem(architecture) {
    const checks = [
      {
        name: '1. Ingress Traffic Filter',
        passed: Boolean(architecture.ingressTrafficFilterActive)
      },
      {
        name: '2. Transport Layer Security & HSTS',
        passed: Boolean(architecture.tlsEnabled && architecture.hstsPreloadActive)
      },
      {
        name: '3. SOP & CORS Origin Isolation',
        passed: Boolean(architecture.corsStrictNoWildcardCredentials)
      },
      {
        name: '4. Contextual XSS Sanitization',
        passed: Boolean(architecture.xssEscaping && architecture.httpOnlyCookies)
      },
      {
        name: '5. CSRF Synchronizer Tokens',
        passed: Boolean(architecture.csrfTokensEnforced && architecture.sameSiteLax)
      },
      {
        name: '6. Declarative Response Headers',
        passed: architecture.securityHeaderScore === 1.0
      }
    ];

    const passedCount = checks.filter(c => c.passed).length;
    const totalCount = checks.length;
    const score = Number((passedCount / totalCount).toFixed(2));
    const verdict = passedCount === totalCount ? 'SHIP' : 'HOLD';

    return { totalCount, passedCount, score, verdict, checks };
  }
}

const auditor = new FortressSecurityAuditor();

// 1. Evaluate baseline production system (5 passing pillars, 1 sagging wall)
const baselineArchitecture = {
  ingressTrafficFilterActive: true,
  tlsEnabled: true,
  hstsPreloadActive: true,
  corsStrictNoWildcardCredentials: true,
  xssEscaping: true,
  httpOnlyCookies: true,
  csrfTokensEnforced: true,
  sameSiteLax: true,
  securityHeaderScore: 0.60 // Sagging wall: missing nosniff and referrer headers!
};

console.log('=== Step 1: Baseline Architecture Security Audit ===');
const baselineReport = auditor.auditSystem(baselineArchitecture);
baselineReport.checks.forEach(c => {
  console.log(\`\${c.name.padEnd(36)} -> \${c.passed ? '[PASS ✓]' : '[FAIL ✗]'}\`);
});
console.log('\\nBaseline Pillars Passed:', baselineReport.passedCount, '/', baselineReport.totalCount);
console.log('Baseline Fortress Score:', baselineReport.score, '(5/6 ≈ 0.83)');
console.log('Production Gate Verdict:', baselineReport.verdict, '(Deployment Blocked)');

// 2. Harden the sagging wall (weld security headers to 1.00)
console.log('\\n=== Step 2: Hardening the Sagging Wall ===');
const hardenedArchitecture = {
  ...baselineArchitecture,
  securityHeaderScore: 1.00 // Deployed all 5 required security headers!
};

const hardenedReport = auditor.auditSystem(hardenedArchitecture);
hardenedReport.checks.forEach(c => {
  console.log(\`\${c.name.padEnd(36)} -> \${c.passed ? '[PASS ✓]' : '[FAIL ✗]'}\`);
});
console.log('\\nHardened Pillars Passed:', hardenedReport.passedCount, '/', hardenedReport.totalCount);
console.log('Hardened Fortress Score:', hardenedReport.score, '(6/6 = 1.00)');
console.log('Production Gate Verdict:', hardenedReport.verdict, '(Approved for Production Launch)');`,
      caption: {
        en: 'The capstone auditor demonstrates that 5 out of 6 passing pillars (score 0.83) receives a HOLD verdict, and hardening all 6 pillars (score 1.00) earns a SHIP verdict.',
        bn: 'ক্যাপস্টোন অডিটর দেখায় যে ৬ টির মধ্যে ৫ টি পাস থাকলে (স্কোর ০.৮৩) HOLD রায় পাওয়া যায়, এবং ৬ টি স্তম্ভই সুরক্ষিত করলে (স্কোর ১.০০) SHIP রায় অর্জিত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Continuous Security: Integrating Automated Audits into CI/CD Pipelines',
        bn: 'ধারাবাহিক নিরাপত্তা: সিআই/সিডি পাইপলাইনে স্বয়ংক্রিয় অডিট অন্তর্ভুক্তি'
      },
      text: {
        en: 'Real-world software development moves fast. A fortress that is fully secure today can accidentally regress next week after a routine dependency update or configuration change. Elite engineering organizations embed automated security auditors directly into continuous integration pipelines (GitHub Actions, GitLab CI). If any pull request causes the 6-pillar score to drop below 1.00, the deployment gate automatically triggers a HOLD, keeping production invulnerable.',
        bn: 'বাস্তব সফটওয়্যার ডেভেলপমেন্ট অত্যন্ত দ্রুত গতিতে এগিয়ে চলে। আজকের একটি সম্পূর্ণ সুরক্ষিত অ্যাপ্লিকেশন পরের সপ্তাহে কোনো ডিপেন্ডেন্সি আপডেট বা কনফিগারেশন ভুলের কারণে ঝুঁকির মুখে পড়তে পারে। দক্ষ ইঞ্জিনিয়ারিং প্রতিষ্ঠানগুলো তাদের সিআই/সিডি পাইপলাইনে (GitHub Actions, GitLab CI) সরাসরি এই ধরনের স্বয়ংক্রিয় নিরাপত্তা অডিটর যুক্ত রাখে। যদি কোনো পুল রিকোয়েস্টের কারণে ৬-দফা স্কোর ১.০০ এর নিচে নেমে যায়, তবে পাইপলাইন স্বয়ংক্রিয়ভাবে HOLD রায় দিয়ে প্রোডাকশনে কোড যাওয়া আটকে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'sechead-cap-ex-1',
      kind: 'predict',
      topic: 'baseline-pillars-passed-count',
      question: {
        en: 'In the baseline architecture audit, how many of the 6 defensive fortress pillars passed verification? (5). Type the number.',
        bn: 'প্রাথমিক আর্কিটেকচার অডিটে ৬ টি দুর্গ নিরাপত্তা স্তম্ভের মধ্যে সর্বমোট কয়টি সফলভাবে পাস করেছিল? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'Exactly 5 pillars passed.',
        bn: 'ঠিক ৫ টি স্তম্ভ পাস করেছিল।'
      },
      explanation: {
        en: 'Out of 6 pillars, 5 passed verification while the security headers pillar failed, resulting in a score of 5/6 ≈ 0.83 and a HOLD verdict.',
        bn: '৬ টির মধ্যে ৫ টি স্তম্ভ পাস করে এবং সিকিউরিটি হেডার স্তম্ভটি ব্যর্থ হওয়ায় স্কোর হয় ৫/৬ ≈ ০.৮৩ এবং রায় হয় HOLD।'
      },
    },
    {
      id: 'sechead-cap-ex-2',
      kind: 'mcq',
      topic: 'why-unanimity-required-in-security',
      question: {
        en: 'Why does web security architecture mandate unanimous compliance across all 6 pillars rather than accepting a high average score like 0.83?',
        bn: 'ওয়েব সিকিউরিটি আর্কিটেকচারে ০.৮৩ এর মতো ভালো গড় স্কোর মেনে না নিয়ে কেন ৬ টি স্তম্ভের প্রতিটিতেই নিখুঁত সর্বসম্মতি বাধ্যতামূলক করা হয়?'
      },
      options: [
        {
          en: 'Because attackers do not need to defeat all defenses; a single sagging wall (such as missing security headers or unescaped inputs) gives adversaries a complete foothold to bypass other security layers',
          bn: 'কারণ আক্রমণকারীদের সমস্ত প্রতিরক্ষা ভাঙতে হয় না; একটিমাত্র দুর্বল দেয়াল (যেমন অনুপস্থিত সিকিউরিটি হেডার বা এনকোড না করা ইনপুট) পেলেই তারা অন্য সমস্ত নিরাপত্তাকে পাশ কাটিয়ে সিস্টেম দখল করে নিতে পারে',
        },
        {
          en: 'Because computer hardware cannot store numbers that have decimals',
          bn: 'কারণ কম্পিউটার হার্ডওয়্যার দশমিকযুক্ত সংখ্যা মেমোরিতে জমা রাখতে পারে না',
        },
        {
          en: 'Because security auditors are legally required to work six hours every day',
          bn: 'কারণ নিরাপত্তা অডিটরদের প্রতিদিন ছয় ঘণ্টা কাজ করার আইনি বাধ্যবাধকতা থাকে',
        },
        {
          en: 'Because web browsers only display websites that have six pages',
          bn: 'কারণ ওয়েব ব্রাউজার কেবল ছয়টি পেজ থাকা ওয়েবসাইটগুলোই প্রদর্শন করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'A single flaw compromises the entire security posture.',
        bn: 'একটিমাত্র দুর্বলতাই পুরো নিরাপত্তা ব্যবস্থাকে অকেজো করে দিতে যথেষ্ট।'
      },
      explanation: {
        en: 'Security is defined by the weakest link. A 0.83 score means 17% of attack vectors remain wide open to automated adversary exploitation.',
        bn: 'নিরাপত্তা নির্ধারিত হয় সবচেয়ে দুর্বল অংশ দ্বারা। ০.৮৩ স্কোরের অর্থ হলো ১৭% আক্রমণের পথ এখনো উন্মুক্ত রয়ে গেছে।'
      },
    },
    {
      id: 'sechead-cap-ex-3',
      kind: 'mcq',
      topic: 'hardening-workflow-remediation',
      question: {
        en: 'What specific engineering action converted the sagging 6th pillar from FAIL to PASS, unlocking the final SHIP verdict?',
        bn: 'কোন নির্দিষ্ট প্রকৌশল পদক্ষেপটি দুর্বল ৬ নম্বর স্তম্ভটিকে FAIL থেকে PASS-এ উন্নীত করে চূড়ান্ত SHIP রায় এনে দিয়েছিল?'
      },
      options: [
        {
          en: 'Deploying security middleware that configures all 5 mandatory security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options: nosniff, and Referrer-Policy), raising the header compliance score from 0.60 to 1.00',
          bn: 'সিকিউরিটি মিডলওয়্যার যুক্ত করা যা সমস্ত ৫ টি বাধ্যতামূলক সিকিউরিটি হেডার (CSP, HSTS, X-Frame-Options, X-Content-Type-Options: nosniff এবং Referrer-Policy) কনফিগার করে হেডার স্কোর ০.৬০ থেকে ১.০০-এ উন্নীত করেছে',
        },
        {
          en: 'Replacing the website database with an offline spreadsheet file',
          bn: 'ওয়েবসাইটের ডাটাবেজ পরিবর্তন করে একটি অফলাইন স্প্রেডশিট ফাইল ব্যবহার করা',
        },
        {
          en: 'Changing the color of all web server cables to bright green',
          bn: 'ওয়েব সার্ভারের সমস্ত তারের রঙ উজ্জ্বল সবুজ রঙে বদলে দেওয়া',
        },
        {
          en: 'Restarting the client laptop computer six consecutive times',
          bn: 'ক্লায়েন্টের ল্যাপটপ কম্পিউটার পরপর ছয়বার রিস্টার্ট দেওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'Adding the missing security headers welded the final sagging wall.',
        bn: 'অনুপস্থিত সিকিউরিটি হেডারগুলো যুক্ত করার মাধ্যমেই শেষ দুর্বল প্রাচীরটি মেরামত করা হয়েছিল।'
      },
      explanation: {
        en: 'Manning the 2 empty header posts (nosniff and referrer) brought the 6th pillar to 1.00, satisfying unanimous fortress security.',
        bn: '২ টি খালি থাকা হেডার পোস্ট পূরণ করায় ৬ নম্বর স্তম্ভটি ১.০০ অর্জন করে এবং পুরো দুর্গটি সুরক্ষিত হয়।'
      },
    },
    {
      id: 'sechead-cap-ex-4',
      kind: 'predict',
      topic: 'hardened-pillars-passed-count',
      question: {
        en: 'After hardening the sagging wall, how many of the 6 defensive fortress pillars passed verification to earn the SHIP verdict? (6). Type the number.',
        bn: 'দুর্বল প্রাচীর মেরামত করার পর ৬ টি দুর্গ নিরাপত্তা স্তম্ভের মধ্যে সর্বমোট কয়টি পাস করে SHIP রায় অর্জন করেছিল? ( ৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '6',
      hint: {
        en: 'All 6 pillars passed.',
        bn: 'সবকয়টি অর্থাৎ ৬ টি স্তম্ভই পাস করেছিল।'
      },
      explanation: {
        en: 'All 6 pillars achieved unanimous compliance (6/6 = 1.00), earning the coveted SHIP production verdict.',
        bn: 'সবকয়টি অর্থাৎ ৬ টি স্তম্ভই সম্পূর্ণ সুরক্ষা নিশ্চিত করায় (৬/৬ = ১.০০) বহুপ্রতীক্ষিত SHIP প্রোডাকশন রায় অর্জিত হয়।'
      },
    },
  ],
  quiz: {
    id: 'secheaders-capstone-quiz',
    title: {
      en: 'Web Security Architecture Capstone Certification Quiz',
      bn: 'ওয়েব সিকিউরিটি আর্কিটেকচার ক্যাপস্টোন সার্টিফিকেশন কুইজ'
    },
    questions: [
      {
        id: 'sechead-cap-qz-1',
        kind: 'mcq',
        topic: 'defense-in-depth-redundancy',
        question: {
          en: 'What is the architectural purpose of Defense-in-Depth in web application engineering?',
          bn: 'ওয়েব অ্যাপ্লিকেশন ইঞ্জিনিয়ারিংয়ে বহুস্তরীয় প্রতিরক্ষা (Defense-in-Depth) এর মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'Placing multiple independent layers of security controls throughout the system so that if one defensive layer is bypassed or fails, subsequent layers prevent total compromise',
            bn: 'সিস্টেমের বিভিন্ন স্তরে একাধিক স্বাধীন নিরাপত্তা নিয়ন্ত্রণ স্থাপন করা যাতে একটি নিরাপত্তা স্তর কোনোভাবে ব্যর্থ বা বাইপাস হলেও পরবর্তী স্তরগুলো সামগ্রিক ক্ষতি রুখে দিতে পারে',
          },
          {
            en: 'Installing six different antivirus applications on the same desktop computer',
            bn: 'একই ডেস্কটপ কম্পিউটারে ছয়টি ভিন্ন অ্যান্টিভাইরাস সফটওয়্যার ইনস্টল করা',
          },
          {
            en: 'Running database servers without connecting them to electric power',
            bn: 'বৈদ্যুতিক সংযোগ ছাড়াই ডাটাবেজ সার্ভার চালু রাখা',
          },
          {
            en: 'Restricting web developers to writing code only in uppercase letters',
            bn: 'ওয়েব ডেভেলপারদের কেবল বড় হাতের ইংরেজি অক্ষরে কোড লেখার নিয়ম জারি করা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Multiple independent layers ensure that no single failure leads to breach.',
          bn: 'একাধিক স্বাধীন স্তর নিশ্চিত করে যে একটি ব্যর্থ হলেও পুরো সিস্টেম ধ্বংস হয় না।'
        },
        explanation: {
          en: 'Defense-in-depth ensures that an XSS bug is mitigated by HttpOnly cookies and CSP, or a CSRF flaw is mitigated by SameSite cookies.',
          bn: 'বহুস্তরীয় প্রতিরক্ষা নিশ্চিত করে যে XSS হলেও HttpOnly তা ঠেকায়, কিংবা CSRF চেষ্টা SameSite কুকি দিয়ে আটকে যায়।'
        },
      },
      {
        id: 'sechead-cap-qz-2',
        kind: 'mcq',
        topic: 'zero-trust-principle',
        question: {
          en: 'How does the "Zero Trust" security model apply to modern web architecture and microservices?',
          bn: 'আধুনিক ওয়েব আর্কিটেকচার এবং মাইক্রোসার্ভিসে "জিরো ট্রাস্ট" (Zero Trust) নিরাপত্তা মডেল কীভাবে প্রযোজ্য হয়?'
        },
        options: [
          {
            en: 'Never trust, always verify: treating internal network traffic with the same level of suspicion as public internet traffic, requiring mutual authentication and authorization on every request',
            bn: 'কাউকে অন্ধবিশ্বাস নয়, সর্বদা যাচাই: অভ্যন্তরীণ নেটওয়ার্কের ট্রাফিককেও বাইরের পাবলিক ইন্টারনেটের মতোই সন্দেহভাজন হিসেবে দেখা এবং প্রতিটি রিকোয়েস্টে পারস্পরিক প্রমাণীকরণ ও অনুমোদন নিশ্চিত করা',
          },
          {
            en: 'Deleting all database user accounts at midnight every evening',
            bn: 'প্রতিদিন মধ্যরাতে ডাটাবেজের সমস্ত ইউজার অ্যাকাউন্ট নিজে থেকে মুছে ফেলা',
          },
          {
            en: 'Requiring software engineers to surrender their laptops every Friday',
            bn: 'প্রতি শুক্রবার সফটওয়্যার ইঞ্জিনিয়ারদের ল্যাপটপ জমা দেওয়ার নিয়ম করা',
          },
          {
            en: 'Turning off all computer screens when employees leave their desks',
            bn: 'কর্মীরা ডেস্ক ছেড়ে যাওয়ার সময় সমস্ত কম্পিউটার স্ক্রিন বন্ধ করে দেওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero trust verifies identity and authorization on every internal and external call.',
          bn: 'জিরো ট্রাস্ট অভ্যন্তরীণ ও বহিরাগত প্রতিটি রিকোয়েস্টে পরিচয় ও অনুমোদন যাচাই করে।'
        },
        explanation: {
          en: 'Perimeter-only defense is obsolete. Zero Trust mandates authentication, encryption (mTLS), and least privilege across every internal microservice hop.',
          bn: 'শুধু বাইরের বর্ডারে পাহারা দেওয়া এখন অচল। জিরো ট্রাস্ট প্রতিটি সার্ভিসের মধ্যে mTLS এবং ন্যূনতম অধিকার নীতি প্রয়োগ করে।'
        },
      },
      {
        id: 'sechead-cap-qz-3',
        kind: 'mcq',
        topic: 'incident-response-and-logging',
        question: {
          en: 'Why is centralized security logging and real-time alerting critical alongside preventative defenses?',
          bn: 'প্রতিরোধমূলক ব্যবস্থার পাশাপাশি সেন্ট্রালাইজড সিকিউরিটি লগিং এবং রিয়েল-টাইম অ্যালার্ট কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'Preventative controls stop known attacks, but centralized logging provides visibility into novel exploit patterns, detects brute-force campaigns, and enables rapid incident response',
            bn: 'প্রতিরোধমূলক ব্যবস্থা পরিচিত আক্রমণ আটকায়, কিন্তু সেন্ট্রালাইজড লগিং নতুন ধরনের আক্রমণের লক্ষণ ধরতে সাহায্য করে, ব্রুট-ফোর্স প্রচেষ্টা সনাক্ত করে এবং দ্রুত ব্যবস্থা নেওয়ার সুযোগ দেয়',
          },
          {
            en: 'Because log files make web servers run ten percent colder',
            bn: 'কারণ লগ ফাইলের উপস্থিতি ওয়েব সার্ভারের তাপমাত্রা দশ শতাংশ কমিয়ে দেয়',
          },
          {
            en: 'Because logging requires purchasing new computer monitors every month',
            bn: 'কারণ লগিং ব্যবস্থার জন্য প্রতি মাসে নতুন কম্পিউটার মনিটর কেনার প্রয়োজন হয়',
          },
          {
            en: 'Because web browsers refuse to load pages unless log files are public',
            bn: 'কারণ লগ ফাইল সবার জন্য উন্মুক্ত না থাকলে ওয়েব ব্রাউজার পেজ লোড করতে অস্বীকৃতি জানায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Logs give observability and forensic evidence during active attacks.',
          bn: 'লগ সক্রিয় আক্রমণের সময় পর্যবেক্ষণ এবং তদন্তের জন্য প্রমাণ সরবরাহ করে।'
        },
        explanation: {
          en: 'Without structured logging, an organization has no way to know if an adversary is probing defenses or has successfully extracted data.',
          bn: 'সুশৃঙ্খল লগিং না থাকলে কোনো আক্রমণকারী ভেতরে ঢুকে ডেটা চুরি করছে কি না তা বোঝার কোনো উপায় থাকে না।'
        },
      },
      {
        id: 'sechead-cap-qz-4',
        kind: 'mcq',
        topic: 'least-privilege-and-default-deny',
        question: {
          en: 'How do the principles of "Least Privilege" and "Default Deny" reinforce one another in high-security web applications?',
          bn: 'উচ্চ-নিরাপত্তাযুক্ত ওয়েব অ্যাপ্লিকেশনে "ন্যূনতম অধিকার" (Least Privilege) এবং "ডিফল্ট ডিনাই" (Default Deny) নীতি দুটি কীভাবে একে অপরকে শক্তিশালী করে?'
        },
        options: [
          {
            en: 'Default Deny ensures that all access is blocked unless explicitly permitted by an audited rule, and Least Privilege ensures that permitted users and services possess only the exact minimal permissions required for their task',
            bn: 'ডিফল্ট ডিনাই নিশ্চিত করে যে স্পষ্ট নিয়ম বা অনুমতি ছাড়া সকল অ্যাক্সেস বন্ধ থাকবে, আর ন্যূনতম অধিকার নিশ্চিত করে যে অনুমোদিত ইউজার বা সার্ভিস কেবল তাদের কাজের জন্য যতটুকু অধিকার দরকার ঠিক ততটুকুই পাবে',
          },
          {
            en: 'They restrict all computer passwords to four characters or fewer',
            bn: 'তারা সমস্ত কম্পিউটারের পাসওয়ার্ড চার অক্ষর বা তার কম হতে বাধ্য করে',
          },
          {
            en: 'They force computer network routers to transmit data only on weekends',
            bn: 'তারা ইন্টারনেটের রাউটারকে কেবল ছুটির দিনগুলোতে ডেটা আদান-প্রদান করতে বাধ্য করে',
          },
          {
            en: 'They require software developers to change programming languages every month',
            bn: 'তারা সফটওয়্যার ডেভেলপারদের প্রতি মাসে প্রোগ্রামিং ভাষা পরিবর্তন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Default Deny closes all doors; Least Privilege opens only the necessary keyhole.',
          bn: 'ডিফল্ট ডিনাই সব দরজা বন্ধ রাখে; আর ন্যূনতম অধিকার কেবল প্রয়োজনীয় চাবির ছিদ্রটুকু খোলে।'
        },
        explanation: {
          en: 'Together, they minimize the blast radius of any compromised component. Even if an attacker gains entry, restrictive boundaries prevent lateral movement.',
          bn: 'উভয় নীতি একসাথে কোনো ঝুঁকি তৈরি হলে তার ক্ষতির পরিধি সর্বনিম্ন রাখে। হ্যাকার কোনোভাবে ঢুকলেও অন্য অংশে ছড়াতে পারে না।'
        },
      },
    ],
  },
};
