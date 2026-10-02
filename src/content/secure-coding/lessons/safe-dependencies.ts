import type { Lesson } from '../../../lib/types';

export const SafeDependenciesLesson: Lesson = {
  slug: 'safe-dependencies',
  tech: 'secure-coding',
  title: {
    en: 'Safe Dependencies: Supply Chain Security & Package Auditing',
    bn: 'নিরাপদ ডিপেন্ডেন্সি: সফটওয়্যার সাপ্লাই চেইন নিরাপত্তা এবং প্যাকেজ অডিটিং'
  },
  summary: {
    en: 'Secure your software supply chain against malicious packages, dependency confusion attacks, and known CVE vulnerabilities. Learn how modern applications inherit transitive risks from thousands of nested third-party modules. Master npm audit scanners, lockfile integrity hashes (SHA-512), Software Bill of Materials generation, automated dependency updates with Dependabot, and vendoring isolation strategies.',
    bn: 'ক্ষতিকর প্যাকেজ, ডিপেন্ডেন্সি কনফিউশন আক্রমণ এবং পরিচিত CVE দুর্বলতা থেকে আপনার সফটওয়্যার সাপ্লাই চেইন সুরক্ষিত রাখুন। হাজার হাজার নেস্টেড থার্ড-পার্টি মডিউল ব্যবহারের ফলে আধুনিক অ্যাপ্লিকেশনে ট্রানজিটিভ ঝুঁকি কীভাবে সৃষ্টি হয় তা বুঝুন। npm audit স্ক্যানার, লকফাইলের ইন্টিগ্রিটি হ্যাশ (SHA-৫১২), সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM), ডিপেন্ডাবটের মাধ্যমে স্বয়ংক্রিয় আপডেট এবং প্যাকেজ আইসোলেশন কৌশল আয়ত্ত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'software-supply-chain-vulnerability',
      text: {
        en: 'The Threat of Untrusted Open Source Dependencies',
        bn: 'অবিশ্বস্ত ওপেন সোর্স ডিপেন্ডেন্সির মারাত্মক ঝুঁকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you install a package from npm or crates.io, you execute third-party code with the full permissions of your local machine. Today, open-source dependencies account for over 80 percent of modern codebase lines.',
        bn: 'যখন আপনি npm বা crates.io থেকে কোনো প্যাকেজ ইনস্টল করেন, তখন আপনি সম্পূর্ণ মেশিনের ক্ষমতার সাথে থার্ড-পার্টি কোড চালান। বর্তমানে আধুনিক অ্যাপ্লিকেশন কোডের ৮০ শতাংশেরও বেশি লাইন আসে ওপেন-সোর্স ডিপেন্ডেন্সি থেকে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'While open source accelerates development, it introduces severe supply chain hazards: malicious maintainer takeovers, typosquatting packages designed to mimic popular libraries, and compromised install scripts that exfiltrate environment secrets. Even a tiny single-function package can introduce transitive vulnerabilities that compromise production infrastructure. A defensive supply chain strategy verifies integrity hashes and audits dependencies continuously.',
        bn: 'ওপেন সোর্স সফটওয়্যার তৈরিকে দ্রুত করলেও এটি সাপ্লাই চেইনের বড় বিপদ ডেকে আনে: মূল নির্মাতার অ্যাকাউন্ট হ্যাক, জনপ্রিয় লাইব্রেরির নামে ভুয়া টাইপোস্কোয়াটিং প্যাকেজ এবং ইনস্টলের সময় রান করা গোপন স্ক্রিপ্ট যা সিস্টেমের পাসওয়ার্ড চুরি করে নেয়। এমনকি একটি ছোট লাইব্রেরিও গভীর ট্রানজিটিভ দুর্বলতা এনে পুরো সার্ভার ধ্বংস করতে পারে। একটি সঠিক সাপ্লাই চেইন কৌশল সর্বদা ক্রিপ্টোগ্রাফিক হ্যাশ যাচাই করে এবং নিয়মিত প্যাকেজ অডিট করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Automated Vulnerability Auditing',
            bn: '১. স্বয়ংক্রিয় ভালনারেবিলিটি অডিটিং'
          },
          text: {
            en: 'Integrate automated vulnerability scanners (such as npm audit and Snyk) into continuous integration pipelines to fail builds whenever critical security flaws are detected in the dependency graph.',
            bn: 'কন্টিনিউয়াস ইন্টিগ্রেশন (CI) পাইপলাইনে npm audit বা Snyk-এর মতো স্বয়ংক্রিয় স্ক্যানার যুক্ত করুন, যাতে কোনো গুরুত্বপূর্ণ নিরাপত্তা ত্রুটি ধরা পড়লে সাথে সাথে বিল্ড আটকে যায়।'
          },
        },
        {
          title: {
            en: '2. Deterministic Lockfiles and Integrity Hashes',
            bn: '২. সুনির্দিষ্ট লকফাইল এবং ইন্টিগ্রিটি হ্যাশ'
          },
          text: {
            en: 'Always commit package-lock.json to version control and run npm ci in production to guarantee that installed tarballs match cryptographic SHA-512 hashes identically across all machines.',
            bn: 'সর্বদা package-lock.json গিটহাবে সংরক্ষণ করুন এবং সার্ভারে npm ci চালান, যা নিশ্চিত করে প্রতিটি প্যাকেজ ক্রিপ্টোগ্রাফিক SHA-৫১২ হ্যাশের সাথে হুবহু মিলে যাচ্ছে।'
          },
        },
        {
          title: {
            en: '3. Suppressing Malicious Lifecycle Scripts',
            bn: '৩. ক্ষতিকর ইনস্টল স্ক্রিপ্ট বন্ধ রাখা'
          },
          text: {
            en: 'Untrusted npm packages frequently misuse install hooks to execute arbitrary bash commands. Use the flag --ignore-scripts in untrusted environments to block unauthorized code execution.',
            bn: 'অপরিচিত প্যাকেজগুলো প্রায়ই ইনস্টল হুকের অপব্যবহার করে ক্ষতিকর কমান্ড চালায়। অননুমোদিত কোড এক্সিকিউশন রুখতে --ignore-scripts ফ্ল্যাগ ব্যবহার করে প্যাকেজ নামান।'
          },
        },
        {
          title: {
            en: '4. Software Bill of Materials (SBOM) Tracking',
            bn: '৪. সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) পর্যবেক্ষণ'
          },
          text: {
            en: 'Maintain an automated inventory of all open-source components and transitive libraries used across your fleet, enabling rapid containment when zero-day advisories emerge.',
            bn: 'আপনার সিস্টেমে ব্যবহৃত সমস্ত ওপেন-সোর্স লাইব্রেরির একটি স্বয়ংক্রিয় ক্যাটালগ (SBOM) সংরক্ষণ করুন, যা নতুন কোনো বড় নিরাপত্তা দুর্বলতা দেখা দিলে দ্রুত সমাধানে সাহায্য করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Software Supply Chain Defense Funnel: From Registry to Production Container',
        bn: 'সফটওয়্যার সাপ্লাই চেইন ফিল্টার: পাবলিক রেজিস্ট্রি থেকে প্রোডাকশন কন্টেইনার পর্যন্ত'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Software supply chain defense funnel showing public registry threats, lockfile verification, vulnerability scanning, and isolated build">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SOFTWARE SUPPLY CHAIN SECURITY &amp; INTEGRITY PIPELINE</text>
  
  <!-- Left: Public Registry Threats -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="115" y="24" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">PUBLIC REGISTRIES (npm)</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="130" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#ef4444" font-size="10" font-weight="bold">SUPPLY CHAIN THREATS</text>
      <text x="15" y="44" fill="#fca5a5" font-size="8">• Typosquatting (e.g. crossenv)</text>
      <text x="15" y="62" fill="#fca5a5" font-size="8">• Malicious postinstall scripts</text>
      <text x="15" y="80" fill="#fca5a5" font-size="8">• Account hijacking / CVEs</text>
      <text x="15" y="98" fill="#fca5a5" font-size="8">• Dependency confusion</text>
      <text x="15" y="116" fill="#cbd5e1" font-size="8">1 pkg pulls 50+ transitive libs</text>
      
      <rect y="150" width="200" height="140" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="100" y="175" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">POTENTIAL DAMAGE</text>
      <text x="15" y="200" fill="#fca5a5" font-size="8">• Steals .env and SSH keys</text>
      <text x="15" y="218" fill="#fca5a5" font-size="8">• Backdoors server runtime</text>
      <text x="15" y="236" fill="#fca5a5" font-size="8">• Cryptojacking botnets</text>
      <text x="15" y="254" fill="#fca5a5" font-size="8">• Complete host takeover</text>
      <text x="15" y="272" fill="#cbd5e1" font-size="8">Without writing any app bugs!</text>
    </g>
  </g>
  
  <!-- Middle: Defensive Pipeline Stages -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">DEFENSIVE CI/CD GATES</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="95" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="22" fill="#38bdf8" font-size="10" font-weight="bold">1. LOCKFILE INTEGRITY</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="9">npm ci (never npm install)</text>
      <text x="15" y="60" fill="#6ee7b7" font-size="8">Verifies sha512-... checksums</text>
      <text x="15" y="78" fill="#cbd5e1" font-size="8">Rejects modified package tarballs</text>
      
      <rect y="105" width="240" height="95" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="127" fill="#f59e0b" font-size="10" font-weight="bold">2. SCRIPT SUPPRESSION</text>
      <text x="15" y="147" fill="#cbd5e1" font-size="9">npm ci --ignore-scripts</text>
      <text x="15" y="163" fill="#6ee7b7" font-size="8">Blocks postinstall shell execution</text>
      <text x="15" y="181" fill="#cbd5e1" font-size="8">Protects CI agent and developer host</text>
      
      <rect y="210" width="240" height="90" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="232" fill="#10b981" font-size="10" font-weight="bold">3. VULNERABILITY GATE</text>
      <text x="15" y="252" fill="#cbd5e1" font-size="8">npm audit --audit-level=high</text>
      <text x="15" y="268" fill="#cbd5e1" font-size="8">Scans known CVE vulnerability DB</text>
      <text x="15" y="286" fill="#6ee7b7" font-size="8">Fails pipeline on critical flaws</text>
    </g>
  </g>
  
  <!-- Right: Verified Production Artifact -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">HARDENED CONTAINER</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="150" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="10" font-weight="bold">VERIFIED REPOSITORY</text>
      <text x="15" y="44" fill="#6ee7b7" font-size="8">✓ Exact pinned versions</text>
      <text x="15" y="62" fill="#6ee7b7" font-size="8">✓ SHA-512 hashes matched</text>
      <text x="15" y="80" fill="#6ee7b7" font-size="8">✓ Zero unapproved scripts run</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8">✓ 0 High / Critical CVEs</text>
      <text x="15" y="116" fill="#6ee7b7" font-size="8">✓ Automated SBOM generated</text>
      <text x="15" y="134" fill="#cbd5e1" font-size="8">Ready for production runtime</text>
      
      <rect y="165" width="200" height="125" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="190" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">SUPPLY CHAIN VERIFIED</text>
      <text x="15" y="215" fill="#cbd5e1" font-size="8">• Repeatable builds</text>
      <text x="15" y="233" fill="#cbd5e1" font-size="8">• Immune to tampering</text>
      <text x="15" y="251" fill="#cbd5e1" font-size="8">• Fast security patch audit</text>
      <text x="15" y="269" fill="#10b981" font-size="8">• Zero unexpected surprises</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Defend your software supply chain: lockfile checksums, script execution suppression, and automated vulnerability scanning</text>
</svg>`,
      caption: {
        en: 'The complete supply chain security pipeline: deterministic lockfile verification, lifecycle script blocking, and automated CVE gates.',
        bn: 'সম্পূর্ণ সাপ্লাই চেইন সিকিউরিটি পাইপলাইন: সুনির্দিষ্ট লকফাইল হ্যাশ যাচাইকরণ, ইনস্টল স্ক্রিপ্ট নিষ্ক্রিয়করণ এবং স্বয়ংক্রিয় CVE স্ক্যানার।'
      },
    },
    {
      type: 'heading',
      id: 'supply-chain-auditor-code',
      text: {
        en: 'Implementing an Automated Lockfile Auditor in Node.js',
        bn: 'Node.js-এ স্বয়ংক্রিয় লকফাইল অডিটর তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how modern dependency scanning tools detect weak hashes, suspicious install hooks, and known CVE advisories, inspect the following auditing engine. It scans dependency metadata to flag risks before code enters production.',
        bn: 'আধুনিক ডিপেন্ডেন্সি স্ক্যানিং টুলগুলো কীভাবে দুর্বল হ্যাশ, বিপজ্জনক ইনস্টল স্ক্রিপ্ট এবং পরিচিত CVE ত্রুটি শনাক্ত করে তা দেখতে নিচের অডিট ইঞ্জিনটি লক্ষ্য করুন। এটি কোড প্রোডাকশনে যাওয়ার আগেই ঝুঁকি শনাক্ত করে সতর্ক করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'supply-chain-auditor.js',
      code: `// Automated Software Supply Chain & Lockfile Integrity Auditor

class SupplyChainAuditor {
  constructor(vulnerabilityAdvisoryDb) {
    this.advisories = vulnerabilityAdvisoryDb;
  }

  auditManifest(dependencies) {
    const findings = [];

    for (const [name, meta] of Object.entries(dependencies)) {
      // Check 1: Cryptographic integrity hash verification (SHA-512)
      if (!meta.integrity || !meta.integrity.startsWith('sha512-')) {
        findings.push({
          package: name,
          severity: 'HIGH',
          reason: 'Missing or weak integrity hash; vulnerable to CDN MITM tampering.'
        });
      }

      // Check 2: Unauthorized postinstall lifecycle scripts
      if (meta.hasInstallScripts === true) {
        findings.push({
          package: name,
          severity: 'CRITICAL',
          reason: 'Package executes arbitrary install lifecycle scripts. Requires --ignore-scripts.'
        });
      }

      // Check 3: Known CVE vulnerability advisory database lookup
      const knownThreat = this.advisories[name];
      if (knownThreat && knownThreat.vulnerableVersions.includes(meta.version)) {
        findings.push({
          package: name,
          severity: knownThreat.severity,
          reason: knownThreat.cve + ': ' + knownThreat.title
        });
      }
    }

    return {
      totalAudited: Object.keys(dependencies).length,
      vulnerabilitiesFound: findings.length,
      isClean: findings.length === 0,
      report: findings
    };
  }
}

// Simulated Vulnerability Advisory Database (e.g. GitHub Advisory Database)
const mockAdvisoryDatabase = {
  'legacy-query-parser': {
    cve: 'CVE-2023-45133',
    severity: 'HIGH',
    title: 'Prototype Pollution via unflatten helper',
    vulnerableVersions: ['1.2.0', '1.2.1']
  }
};

const auditor = new SupplyChainAuditor(mockAdvisoryDatabase);

console.log('=== Step 1: Auditing Lockfile Dependencies ===');
const mockLockfileDependencies = {
  'zod': {
    version: '3.22.4',
    integrity: 'sha512-sha512-mockZodChecksumValidHashValid1234567890==',
    hasInstallScripts: false
  },
  'legacy-query-parser': {
    version: '1.2.0',
    integrity: 'sha512-sha512-mockLegacyHashValidChecksum0987654321==',
    hasInstallScripts: false
  },
  'sketchy-helper': {
    version: '0.0.1',
    integrity: 'sha1-weakHashUsedLegacy==',
    hasInstallScripts: true
  }
};

const auditResult = auditor.auditManifest(mockLockfileDependencies);
console.log('Audit Summary: ' + auditResult.vulnerabilitiesFound + ' vulnerabilities found across ' + auditResult.totalAudited + ' packages.');
console.log('\\nDetailed Findings:');
for (const finding of auditResult.report) {
  console.log('[' + finding.severity + '] ' + finding.package + ': ' + finding.reason);
}`,
      caption: {
        en: 'The auditor checks lockfile checksums, detects suspicious install lifecycle scripts, and matches versions against known CVEs.',
        bn: 'অডিটরটি লকফাইল চেকসাম যাচাই করে, ক্ষতিকর ইনস্টল স্ক্রিপ্ট শনাক্ত করে এবং পরিচিত CVE তালিকার সাথে সংস্করণ মিলিয়ে দেখে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'The Threat of postinstall Scripts on Developer Workstations',
        bn: 'ডেভেলপারদের কম্পিউটারে postinstall স্ক্রিপ্টের মারাত্মক ঝুঁকি'
      },
      text: {
        en: 'By default, package managers execute preinstall and postinstall scripts declared inside package.json during installation. Attackers exploit this design to run obfuscated shell commands that read developer SSH keys, steal local .env credentials, and establish persistent backdoors before a single line of application logic ever runs! In automated CI/CD pipelines, always run npm ci with the --ignore-scripts flag to prevent unauthorized code execution.',
        bn: 'ডিফল্টভাবে প্যাকেজ ম্যানেজার ইনস্টলেশনের সময় package.json-এ থাকা preinstall এবং postinstall স্ক্রিপ্ট চালিয়ে দেয়। আক্রমণকারীরা এই সুবিধার অপব্যবহার করে ক্ষতিকর কমান্ড চালায় যা ডেভেলপারের SSH চাবি বা লোকাল .env ফাইলের গোপন তথ্য চুরি করে নেয়—এমনকি আপনার মূল কোড চালু হওয়ার আগেই! অটোমেটেড CI/CD পাইপলাইনে ক্ষতিকর কোড চালানো আটকাতে সর্বদা --ignore-scripts ফ্ল্যাগ দিয়ে npm ci চালান।'
      },
    },
  ],
  exercises: [
    {
      id: 'safe-dep-ex-1',
      kind: 'predict',
      topic: 'open-source-prevalence',
      question: {
        en: 'If open-source dependencies account for over 80 percent of modern application codebases, what is that percentage number? (80). Type the number.',
        bn: 'আধুনিক অ্যাপ্লিকেশন কোডের যদি ৮০ শতাংশেরও বেশি ওপেন-সোর্স লাইব্রেরি থেকে আসে, তবে সেই শতকরা সংখ্যাটি কত? ( ৮০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '80',
      hint: {
        en: 'The percentage is 80.',
        bn: 'শতকরা হারটি হলো ৮০।'
      },
      explanation: {
        en: 'Over 80 percent of typical modern enterprise codebases consists of third-party open-source dependencies.',
        bn: 'আধুনিক বাণিজ্যিক সফটওয়্যারের ৮০ শতাংশেরও বেশি কোড মূলত তৃতীয় পক্ষের তৈরি ওপেন-সোর্স লাইব্রেরি।'
      },
    },
    {
      id: 'safe-dep-ex-2',
      kind: 'mcq',
      topic: 'npm-ci-lockfile-integrity',
      question: {
        en: 'Why is npm ci strictly preferred over npm install in automated CI/CD build environments?',
        bn: 'স্বয়ংক্রিয় CI/CD বিল্ড পাইপলাইনে npm install-এর চেয়ে npm ci কঠোরভাবে কেন পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'npm ci strictly installs the exact versions recorded in package-lock.json without modifying the lockfile, verifying SHA-512 cryptographic checksums to guarantee identical, tamper-proof builds',
          bn: 'npm ci লকফাইল পরিবর্তন না করে package-lock.json-এ থাকা হুবহু নির্দিষ্ট সংস্করণগুলো নামায় এবং ক্রিপ্টোগ্রাফিক SHA-৫১২ চেকসাম মিলিয়ে অবিকৃত বিল্ড নিশ্চিত করে',
        },
        {
          en: 'Because npm ci doubles the battery life of the developer laptop',
          bn: 'কারণ npm ci ডেভেলপারের ল্যাপটপের ব্যাটারির আয়ু দ্বিগুণ করে দেয়',
        },
        {
          en: 'Because npm ci automatically writes database queries without typing',
          bn: 'কারণ npm ci কোনো টাইপিং ছাড়াই নিজে নিজে ডাটাবেজ কুয়েরি লিখে ফেলে',
        },
        {
          en: 'Because npm install only works on computers located in Canada',
          bn: 'কারণ npm install কেবল কানাডায় অবস্থিত কম্পিউটারগুলোতেই কাজ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'npm ci guarantees reproducible builds matching the lockfile checksums.',
        bn: 'npm ci লকফাইলের চেকসাম মিলিয়ে সর্বত্র একই রকম নিরাপদ বিল্ড নিশ্চিত করে।',
      },
      explanation: {
        en: 'npm install can resolve floating semver ranges differently, whereas npm ci strictly enforces package-lock.json.',
        bn: 'npm install অনিচ্ছাকৃত নতুন ভার্সন নামিয়ে ঝুঁকি তৈরি করতে পারে, কিন্তু npm ci কঠোরভাবে লকফাইল মেনে চলে।'
      },
    },
    {
      id: 'safe-dep-ex-3',
      kind: 'mcq',
      topic: 'ignore-scripts-mitigation',
      question: {
        en: 'How does running npm install with the --ignore-scripts flag protect developer laptops and build machines?',
        bn: '--ignore-scripts ফ্ল্যাগ ব্যবহার করে npm install চালালে কীভাবে ডেভেলপারের ল্যাপটপ এবং বিল্ড সার্ভার সুরক্ষিত থাকে?'
      },
      options: [
        {
          en: 'It suppresses the automatic execution of package preinstall and postinstall scripts, preventing malicious packages from running hostile shell commands that exfiltrate secrets',
          bn: 'এটি প্যাকেজের ভেতরে থাকা preinstall বা postinstall স্ক্রিপ্ট চলা বন্ধ করে দেয়, ফলে ক্ষতিকর কোনো প্যাকেজ গোপনে কমান্ড চালিয়ে তথ্য চুরি করতে পারে না',
        },
        {
          en: 'It cleans dust particles out of the computer CPU cooling fan',
          bn: 'এটি কম্পিউটারের কুলিং ফ্যান থেকে সমস্ত ধুলাবালি পরিষ্কার করে দেয়',
        },
        {
          en: 'It turns the developer computer monitor display upside down',
          bn: 'এটি ডেভেলপারের কম্পিউটারের পর্দার ডিসপ্লে উল্টো দিকে ঘুরিয়ে দেয়',
        },
        {
          en: 'It permanently disables the computer keyboard sound effects',
          bn: 'এটি কম্পিউটারের কিবোর্ডের টাইপিং সাউন্ড চিরতরে বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: '--ignore-scripts blocks automatic execution of lifecycle scripts.',
        bn: '--ignore-scripts লাইফসাইকেল স্ক্রিপ্টের স্বয়ংক্রিয় চলা পুরোপুরি আটকে দেয়।',
      },
      explanation: {
        en: 'Package lifecycle scripts execute with full user privileges. Disabling them eliminates the most common npm malware execution vector.',
        bn: 'প্যাকেজের নিজস্ব স্ক্রিপ্ট ইউজারের পূর্ণ ক্ষমতায় চলে। এটি বন্ধ রাখলে ম্যালওয়্যার চালানোর প্রধান পথ রুদ্ধ হয়।'
      },
    },
    {
      id: 'safe-dep-ex-4',
      kind: 'predict',
      topic: 'supply-chain-defense-pillars',
      question: {
        en: 'How many primary pillars (Automated Scanning, Lockfiles, Ignore Scripts, SBOM) defend the software supply chain? (4). Type the number.',
        bn: 'সফটওয়্যার সাপ্লাই চেইন সুরক্ষার প্রধান ভিত্তি ( স্বয়ংক্রিয় অডিট, লকফাইল হ্যাশ, স্ক্রিপ্ট ব্লকিং, SBOM ট্র্যাকিং ) সর্বমোট কয়টি? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Count the 4 architectural pillars.',
        bn: '৪ টি মূল ভিত্তি গণনা করুন।'
      },
      explanation: {
        en: 'The 4 supply chain pillars protect projects from malicious packages across registries and builds.',
        bn: 'এই ৪ টি ভিত্তি রেজিস্ট্রি থেকে শুরু করে চূড়ান্ত বিল্ড পর্যন্ত সফটওয়্যারকে ক্ষতিকর প্যাকেজ থেকে রক্ষা করে।'
      },
    },
  ],
  quiz: {
    id: 'safe-dependencies-quiz',
    title: {
      en: 'Software Supply Chain Security Quiz',
      bn: 'সফটওয়্যার সাপ্লাই চেইন নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'safe-dep-qz-1',
        kind: 'mcq',
        topic: 'dependency-confusion',
        question: {
          en: 'What is a dependency confusion attack in enterprise software engineering?',
          bn: 'বাণিজ্যিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ডিপেন্ডেন্সি কনফিউশন আক্রমণ কী?'
        },
        options: [
          {
            en: 'An attacker registers an identical package name on a public registry (such as npm) with a higher version number than a private internal company package, causing build systems to fetch the malicious public package',
            bn: 'আক্রমণকারী পাবলিক রেজিস্ট্রিতে কোনো কোম্পানির অভ্যন্তরীণ প্যাকেজের হুবহু একই নামে উচ্চতর ভার্সন আপলোড করে, ফলে বিল্ড সিস্টেম বিভ্রান্ত হয়ে ক্ষতিকর পাবলিক প্যাকেজটি নামিয়ে ফেলে',
          },
          {
            en: 'When two developers accidentally save two files with the same filename in Git',
            bn: 'যখন দুজন ডেভেলপার ভুলবশত গিটে একই নামের দুটি ফাইল সেভ করে',
          },
          {
            en: 'When a computer runs out of physical memory and freezes the screen',
            bn: 'যখন কম্পিউটারের মেমোরি শেষ হয়ে গিয়ে পর্দা পুরোপুরি জমে যায়',
          },
          {
            en: 'When internet cables get physically tangled under a work desk',
            bn: 'কাজের টেবিলের নিচে যখন ইন্টারনেটের অনেক তার পরস্পরের সাথে পেঁচিয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Attackers claim internal package names on public registries with higher version numbers.',
          bn: 'আক্রমণকারীরা একই নামে পাবলিক সাইটে বেশি ভার্সন দিয়ে ক্ষতিকর প্যাকেজ বসিয়ে দেয়।',
        },
        explanation: {
          en: 'Package managers prioritize public registries unless explicitly scoped to private registries (e.g., @company/pkg). Attackers exploit this behavior to inject malicious code.',
          bn: 'স্কোপিং না থাকলে প্যাকেজ ম্যানেজার পাবলিক সাইটের নতুন ভার্সন আগে নামায়। হ্যাকাররা এই সুযোগে তাদের কোড ঢুকিয়ে দেয়।'
        },
      },
      {
        id: 'safe-dep-qz-2',
        kind: 'mcq',
        topic: 'typosquatting-mitigation',
        question: {
          en: 'What is typosquatting in package management registries like npm and PyPI?',
          bn: 'npm বা PyPI-এর মতো প্যাকেজ রেজিস্ট্রিতে টাইপোস্কোয়াটিং আক্রমণ কী?'
        },
        options: [
          {
            en: 'Publishing malicious packages with names that deliberately mimic common typos of popular libraries (e.g. "crossenv" for "cross-env" or "requsts" for "requests") to trick developers into installing malware',
            bn: 'জনপ্রিয় লাইব্রেরির নামের বানানে সামান্য ভুল রেখে ক্ষতিকর প্যাকেজ আপলোড করা ( যেমন "cross-env" এর বদলে "crossenv" ) যাতে ডেভেলপাররা ভুল বানানে তা ইনস্টল করে প্রতারিত হয়',
          },
          {
            en: 'A software bug that types extra exclamation marks in code comments',
            bn: 'একটি কোডিং বাগ যা কমেন্টের ভেতরে নিজে নিজেই অতিরিক্ত আশ্চর্যবোধক চিহ্ন বসায়',
          },
          {
            en: 'A tool that automatically checks English spelling in documentation',
            bn: 'এমন একটি টুল যা ডকুমেন্টেশনের ইংরেজি বানান স্বয়ংক্রিয়ভাবে পরীক্ষা করে',
          },
          {
            en: 'A keyboard defect where typing too fast skips letters',
            bn: 'কিবোর্ডের একটি যান্ত্রিক ত্রুটি যার কারণে খুব দ্রুত টাইপ করলে অক্ষর বাদ পড়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Attackers create packages with misspelled names of popular libraries.',
          bn: 'আক্রমণকারীরা জনপ্রিয় লাইব্রেরির নামের সামান্য ভুল বানানে ক্ষতিকর প্যাকেজ বানায়।',
        },
        explanation: {
          en: 'Developers frequently mistype package names. Typosquatters register these misspelled variants containing info-stealing scripts.',
          bn: 'ডেভেলপাররা অনেক সময় বানানে ভুল করেন। টাইপোস্কোয়াটাররা সেই ভুল নামের সুযোগ নিয়ে ক্ষতিকর কোড ঢুকিয়ে দেয়।'
        },
      },
      {
        id: 'safe-dep-qz-3',
        kind: 'mcq',
        topic: 'integrity-hash-guarantee',
        question: {
          en: 'What critical security guarantee is provided by the integrity field (SHA-512) in package-lock.json?',
          bn: 'package-lock.json ফাইলের integrity ফিল্ড (SHA-৫১২) কোন অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা নিশ্চয়তা প্রদান করে?'
        },
        options: [
          {
            en: 'It cryptographically verifies that the downloaded package tarball has not been altered, hijacked, or tampered with on the registry CDN since the lockfile was generated',
            bn: 'এটি ক্রিপ্টোগ্রাফিকভাবে নিশ্চিত করে যে ডাউনলোড করা প্যাকেজটি লকফাইল তৈরির পর থেকে সিডিএন বা সার্ভারে কেউ কোনোভাবে পরিবর্তন বা বিকৃত করেনি',
          },
          {
            en: 'It accelerates the physical broadband internet speed by thirty percent',
            bn: 'এটি স্থানীয় ব্রডব্যান্ড ইন্টারনেটের গতি শতকরা ৩০ ভাগ বাড়িয়ে দেয়',
          },
          {
            en: 'It translates the package documentation into sixty foreign languages',
            bn: 'এটি প্যাকেজের যাবতীয় নির্দেশিকা ৬০ টি বিদেশি ভাষায় অনুবাদ করে দেয়',
          },
          {
            en: 'It reduces the electrical power consumed by computer RAM chips',
            bn: 'এটি কম্পিউটারের র‍্যাম মেমোরির ব্যবহৃত বিদ্যুতের খরচ কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Integrity hashes prove downloaded code matches the exact original snapshot.',
          bn: 'ইন্টিগ্রিটি হ্যাশ প্রমাণ করে যে ডাউনলোড করা কোড মূল ফাইলের সাথে অবিকল এক।',
        },
        explanation: {
          en: 'If an attacker compromises an npm account and overwrites a published version, the SHA-512 checksum mismatch causes npm ci to abort immediately.',
          bn: 'হ্যাকাররা কোনো ভার্সনের কোড বদলে দিলে SHA-৫১২ হ্যাশ না মেলায় npm ci সাথে সাথে ইন্সটলেশন বাতিল করে দেয়।'
        },
      },
      {
        id: 'safe-dep-qz-4',
        kind: 'mcq',
        topic: 'sbom-importance',
        question: {
          en: 'What is a Software Bill of Materials (SBOM) and why is it essential for enterprise incident response?',
          bn: 'সফটওয়্যার বিল অব ম্যাটেরিয়ালস (SBOM) কী এবং জরুরি নিরাপত্তা তদন্তে এটি কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'An SBOM is a comprehensive, machine-readable inventory of all direct and transitive third-party libraries and versions in an application, allowing security teams to identify vulnerable systems within minutes of a zero-day disclosure',
            bn: 'SBOM হলো অ্যাপ্লিকেশনে ব্যবহৃত সমস্ত লাইব্রেরির একটি পূর্ণাঙ্গ ও কম্পিউটার-পঠনযোগ্য তালিকা, যার মাধ্যমে নতুন কোনো বিপজ্জনক জিরো-ডে দুর্বলতা প্রকাশের কয়েক মিনিটের মধ্যে আক্রান্ত সিস্টেমগুলো চিহ্নিত করা সম্ভব হয়',
          },
          {
            en: 'A monthly invoice sent to software companies for internet bandwidth',
            bn: 'ইন্টারনেট ব্যান্ডউইথের ব্যবহারের জন্য সফটওয়্যার কোম্পানিকে পাঠানো মাসিক বিলের কাগজ',
          },
          {
            en: 'A list of computer hardware monitors owned by an engineering department',
            bn: 'ইঞ্জিনিয়ারিং বিভাগের মালিকানাধীন সমস্ত কম্পিউটার মনিটরের একটি হিসাবের তালিকা',
          },
          {
            en: 'A paper contract signed between software developers and project managers',
            bn: 'সফটওয়্যার ডেভেলপার ও প্রজেক্ট ম্যানেজারের মধ্যে স্বাক্ষরিত কাগজের চুক্তিপত্র',
          },
        ],
        answer: 0,
        hint: {
          en: 'An SBOM lists all third-party components, enabling rapid vulnerability tracking.',
          bn: 'SBOM সমস্ত উপাদান তালিকাভুক্ত করে দ্রুত নিরাপত্তা ত্রুটি শনাক্তে সহায়তা করে।',
        },
        explanation: {
          en: 'When vulnerabilities like Log4j or Heartbleed are announced, an accurate SBOM allows immediate discovery of every affected microservice.',
          bn: 'নতুন কোনো গুরুতর দুর্বলতা দেখা দিলে SBOM-এর মাধ্যমে দ্রুত জানা যায় কোন কোন সার্ভিসে সেই দুর্বল লাইব্রেরিটি চলছে।'
        },
      },
    ],
  },
  next: {
    slug: 'crypto-pitfalls',
    title: {
      en: 'Cryptographic Pitfalls: Salted Hashes, IVs & Constant-Time Verification',
      bn: 'ক্রিপ্টোগ্রাফিক ফাঁদ: সল্টেড হ্যাশ, IV এবং কনস্ট্যান্ট-টাইম যাচাই'
    },
  },
};
