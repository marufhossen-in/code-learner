import type { Lesson } from '../../../lib/types';

export const SecurityMisconfigLesson: Lesson = {
  slug: 'security-misconfig',
  tech: 'owasp',
  title: {
    en: 'Security Misconfiguration: Hardening Defaults, Headers & Cloud Storage',
    bn: 'সিকিউরিটি মিসকনফিগারেশন: ডিফল্ট সেটিংস, হেডার ও ক্লাউড স্টোরেজ সুরক্ষা'
  },
  summary: {
    en: 'Master defensive system hardening against Security Misconfiguration (OWASP A05:2021). Understand why default framework configurations prioritize developer convenience over production security. Learn how verbose stack traces, directory listings, default admin credentials, and unhardened HTTP response headers provide attackers with high-value reconnaissance intelligence. Inspect an executable Node.js hardening auditor evaluating 4 server settings: 3 hardened configurations pass, while 1 exposed admin dashboard fails.',
    bn: 'সিকিউরিটি মিসকনফিগারেশন (OWASP A05:2021) প্রতিহত করার জন্য সিস্টেম হার্ডেনিং কৌশল আয়ত্ত করুন। ফ্রেমওয়ার্কের ডিফল্ট সেটিংস কেন নিরাপত্তার চেয়ে ডেভেলপারদের সুবিধার দিকে বেশি লক্ষ্য রাখে তা জানুন। বিস্তারিত স্ট্যাক ট্রেস, ডিরেক্টরি লিস্টিং, ডিফল্ট অ্যাডমিন পাসওয়ার্ড এবং অনিরাপদ এইচটিএমএল হেডার কীভাবে আক্রমণকারীকে গুরুত্বপূর্ণ গোপন তথ্য ফাঁস করে দেয় তা বিশ্লেষণ করুন। ৪ টি সার্ভার কনফিগারেশন নিরীক্ষাকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি সুরক্ষিত সেটিং পাস করলেও ১ টি উন্মুক্ত অ্যাডমিন ড্যাশবোর্ড ব্যর্থ হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'why-defaults-betray-security',
      text: {
        en: 'The Threat of Insecure Defaults: Why Frameworks Ship Vulnerable',
        bn: 'অরক্ষিত ডিফল্ট সেটিংসের ঝুঁকি: কেন ফ্রেমওয়ার্কগুলো অনিরাপদ অবস্থায় আসে'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When software vendors create frameworks and servers, their out-of-the-box defaults prioritize rapid onboarding. Debuggers print rich stack traces, directory listings show all uploaded files, and administrative panels ship with well-known default passwords like "admin/admin". If you deploy these services to the public internet without hardening them, attackers exploit these defaults immediately.',
        bn: 'সফটওয়্যার ভেন্ডররা যখন ফ্রেমওয়ার্ক বা সার্ভার তৈরি করে, তখন তাদের ডিফল্ট সেটিংস নতুন ডেভেলপারদের কাজ সহজ করার উদ্দেশ্যে সাজানো থাকে। ডিবাগার বিস্তারিত এরর মেসেজ দেখায়, ডিরেক্টরি লিস্টিং সব আপলোড করা ফাইল দেখায় এবং অ্যাডমিন প্যানেল "admin/admin" এর মতো পরিচিত পাসওয়ার্ড দিয়ে আসে। কোনো পরিবর্তন বা হার্ডেনিং ছাড়া এগুলো ইন্টারনেটে ডিপ্লয় করলে আক্রমণকারীরা খুব সহজেই সার্ভার দখল করে নেয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Security misconfigurations can occur at every tier of the application stack. This includes unpatched operating systems, overly permissive cloud storage bucket policies, verbose HTTP error pages, and missing security headers like HSTS and CSP. Hardening requires defining automated configuration baselines that reject unauthenticated access and suppress debugging information.',
        bn: 'অ্যাপ্লিকেশনের যেকোনো স্তরেই মিসকনফিগারেশন হতে পারে। পুরানো অপারেটিং সিস্টেম, ক্লাউড স্টোরেজ বা এস-থ্রি (S3) বাকেটের উন্মুক্ত অনুমতি, বিস্তারিত এরর পেজ এবং HSTS বা CSP এর মতো নিরাপত্তা হেডারের অনুপস্থিতি এর অন্যতম কারণ। সুরক্ষার জন্য স্বয়ংক্রিয় কনফিগারেশন বেসলাইন তৈরি করা প্রয়োজন যা অননুমোদিত অ্যাক্সেস বাতিল করে এবং সমস্ত ডিবাগ তথ্য গোপন রাখে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Suppress Detailed Stack Traces',
            bn: '১. বিস্তারিত স্ট্যাক ট্রেস গোপন রাখা'
          },
          text: {
            en: 'Production servers must return generic HTTP 500 error pages. Leaking internal file paths, database queries, and library versions gives attackers exact blueprints for targeted exploits.',
            bn: 'প্রোডাকশন সার্ভারে সাধারণ HTTP 500 এরর পেজ দেখাতে হবে। ফাইলের অভ্যন্তরীণ পাথ, ডাটাবেজ কোয়েরি বা প্যাকেজের সংস্করণ ফাঁস হলে আক্রমণকারীর জন্য সুনির্দিষ্ট আক্রমণ চালানো সহজ হয়ে যায়।'
          },
        },
        {
          title: {
            en: '2. Disable Directory Listing',
            bn: '২. ডিরেক্টরি লিস্টিং বন্ধ করা'
          },
          text: {
            en: 'Web servers must disable directory browsing (e.g. Options -Indexes in Apache). Without this, attackers can crawl and download backup files (.bak, .env, or database dumps).',
            bn: 'ওয়েব সার্ভারে ডিরেক্টরি ব্রাউজিং বন্ধ রাখতে হবে। এটি চালু থাকলে আক্রমণকারী সহজেই ব্যাকআপ ফাইল (.bak, .env বা ডাটাবেজ ডাম্প) খুঁজে বের করে ডাউনলোড করে নিতে পারে।'
          },
        },
        {
          title: {
            en: '3. Enforce Hardened Security Headers',
            bn: '৩. সুরক্ষিত সিকিউরিটি হেডার প্রয়োগ'
          },
          text: {
            en: 'Deploy Helmet in Express or configure Nginx to inject X-Content-Type-Options: nosniff, Strict-Transport-Security, and X-Frame-Options: DENY on all responses.',
            bn: 'Express-এ Helmet বা Nginx-এ কনফিগার করে প্রতিটি রেসপন্সে nosniff, HSTS এবং X-Frame-Options: DENY হেডার যুক্ত করে ব্রাউজার নিরাপত্তা নিশ্চিত করুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Production Hardening Audit: 3 Hardened Settings vs 1 Exposed Admin Console',
        bn: 'প্রোডাকশন হার্ডেনিং নিরীক্ষা: ৩ টি সুরক্ষিত সেটিং বনাম ১ টি উন্মুক্ত অ্যাডমিন কনসোল'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Security misconfiguration audit evaluating 4 settings with 3 hardened and 1 exposed">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PRODUCTION SERVER HARDENING & CONFIGURATION AUDIT</text>
  
  <!-- Left Side: Evaluated Configuration Settings -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 PRODUCTION SETTINGS EVALUATED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Setting 1: DEBUG_MODE</text>
      <text x="12" y="36" fill="#ffffff" font-size="8">Value: OFF (false)</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Verbose development logging suppressed</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Setting 2: DIRECTORY_LISTING</text>
      <text x="12" y="104" fill="#ffffff" font-size="8">Value: OFF (Options -Indexes)</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Prevents automated file enumeration across assets</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Setting 3: DETAILED_STACK_TRACES</text>
      <text x="12" y="172" fill="#ffffff" font-size="8">Value: OFF (Sanitized Generic 500)</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Database schema and file paths hidden</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Setting 4: ADMIN_PANEL_OPEN [EXPOSED AJAR]</text>
      <text x="12" y="240" fill="#ffffff" font-size="8">Value: ON (Bound to 0.0.0.0 on default /admin)</text>
      <text x="12" y="254" fill="#fecaca" font-size="7.5">Critical: Publicly accessible without IP allowlist or MFA!</text>
    </g>
  </g>
  
  <!-- Right Side: Hardening Engine Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HARDENING VERDICTS: 3 TIGHT | 1 AJAR</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PASSED [✓] (Hardened & Tight)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Memory dumps and runtime internals protected</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Minimizes adversary reconnaissance capabilities</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">2. PASSED [✓] (Hardened & Tight)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Web server returns HTTP 403 on raw directory paths</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Hidden upload folders cannot be crawled</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">3. PASSED [✓] (Hardened & Tight)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Exceptions log internally to private datadog stream</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Public clients receive: "An internal error occurred"</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">4. VULNERABLE [✗ DOOR LEFT AJAR]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Adversaries target admin dashboard with brute-force</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">Remediation: Restrict to internal VPN and enforce MFA</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Every unhardened default represents an open doorway: lockdown requires enforcing automated CIS benchmarks</text>
</svg>`,
      caption: {
        en: 'The configuration auditor evaluates 4 server settings: 3 hardened configurations pass inspection, and 1 exposed administrative console fails.',
        bn: 'কনফিগারেশন অডিটর ৪ টি সার্ভার সেটিং মূল্যায়ন করে: ৩ টি সুরক্ষিত কনফিগারেশন পরীক্ষায় উত্তীর্ণ হয় এবং ১ টি উন্মুক্ত অ্যাডমিন কনসোল ব্যর্থ হয়।'
      },
    },
    {
      type: 'heading',
      id: 'configuration-auditor-code-engine',
      text: {
        en: 'Building an Automated Configuration Hardening Auditor in Node.js',
        bn: 'Node.js-এ স্বয়ংক্রিয় কনফিগারেশন হার্ডেনিং অডিটর তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'configuration-hardening-auditor.js',
      code: `// Deterministic Server Configuration Hardening & Misconfiguration Auditor
class ConfigurationHardeningAuditor {
  // Evaluates server settings against security baselines
  auditSetting(configItem) {
    if (configItem.status === 'HARDENED') {
      return {
        key: configItem.key,
        value: configItem.value,
        verdict: 'PASSED',
        securityLevel: 'TIGHT',
        details: configItem.explanation
      };
    } else {
      return {
        key: configItem.key,
        value: configItem.value,
        verdict: 'VULNERABLE',
        securityLevel: 'AJAR',
        details: configItem.explanation
      };
    }
  }
}

const auditor = new ConfigurationHardeningAuditor();

// 4 distinct server configuration settings audited for production readiness
const serverConfiguration = [
  { key: 'DEBUG_MODE', value: 'OFF (false)', status: 'HARDENED', explanation: 'Verbose runtime debug logging disabled; prevents memory dumps' },
  { key: 'DIRECTORY_LISTING', value: 'OFF (disabled)', status: 'HARDENED', explanation: 'Directory browsing disabled; prevents asset enumeration' },
  { key: 'DETAILED_STACK_TRACES', value: 'OFF (generic 500)', status: 'HARDENED', explanation: 'Production exception handler returns sanitized errors; database schema hidden' },
  { key: 'ADMIN_PANEL_OPEN', value: 'ON (publicly accessible)', status: 'AJAR', explanation: 'Admin portal exposed on default /admin route without IP allowlist or MFA' }
];

let hardenedSettingsCount = 0;
let misconfiguredSettingsCount = 0;

console.log('=== Production Server Configuration & Hardening Audit ===\\n');
serverConfiguration.forEach((item, index) => {
  const result = auditor.auditSetting(item);

  if (result.verdict === 'PASSED') {
    hardenedSettingsCount++;
    console.log(\`[\${index + 1}] TIGHT [✓]: \${result.key}\`);
    console.log(\`    Value:   \${result.value}\`);
    console.log(\`    Status:  \${result.verdict} (\${result.details})\\n\`);
  } else {
    misconfiguredSettingsCount++;
    console.log(\`[\${index + 1}] AJAR  [✗]: \${result.key}\`);
    console.log(\`    Value:   \${result.value}\`);
    console.log(\`    Status:  \${result.verdict} (\${result.details})\\n\`);
  }
});

console.log('=== Configuration Audit Summary ===');
console.log('Total Settings Audited:  ', serverConfiguration.length);
console.log('Hardened Settings (Pass):', hardenedSettingsCount);
console.log('Misconfigured (Fail):    ', misconfiguredSettingsCount);`,
      caption: {
        en: 'The configuration auditor inspects 4 server settings: 3 hardened settings pass cleanly, while 1 exposed admin console fails.',
        bn: 'কনফিগারেশন অডিটর ৪ টি সার্ভার সেটিং পরীক্ষা করে: ৩ টি সুরক্ষিত সেটিং সফল হয়, আর ১ টি উন্মুক্ত অ্যাডমিন কনসোল ব্যর্থ হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Danger of Public Cloud Storage Buckets (AWS S3 & GCP)',
        bn: 'পাবলিক ক্লাউড স্টোরেজ বাকেটের মারাত্মক ঝুঁকি (AWS S3 ও GCP)'
      },
      text: {
        en: 'A massive percentage of real-world data leaks involve misconfigured cloud storage buckets. Cloud providers historically allowed buckets to be configured with public read access. If a developer forgets to apply private access controls, automated scanners locate the bucket. Attackers then download customer database backups and confidential files within minutes.',
        bn: 'বাস্তব জীবনের সিংহভাগ বড় ডাটা ফাঁসের ঘটনা ঘটে ভুলভাবে কনফিগার করা ক্লাউড স্টোরেজ বাকেটের কারণে। ক্লাউড সেবাদাতারা একসময় বাকেটে সবার জন্য উন্মুক্ত পড়ার অনুমতি দিত। ডেভেলপার যদি ব্যক্তিগত অ্যাক্সেস কন্ট্রোল প্রয়োগ করতে ভুলে যান, তবে স্বয়ংক্রিয় স্ক্যানারগুলো বাকেটটি খুঁজে বের করে ফেলে। এর ফলে আক্রমণকারীরা মাত্র কয়েক মিনিটে সমস্ত ডাটাবেজ ব্যাকআপ ও গ্রাহকদের গোপন ফাইল ডাউনলোড করে নিতে পারে।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-misconfig-ex-1',
      kind: 'predict',
      topic: 'hardened-settings-count',
      question: {
        en: 'In the production server hardening audit of the 4 configuration settings, how many settings were securely configured and verified as PASSED? (3). Type the number.',
        bn: '৪ টি কনফিগারেশন সেটিংয়ের প্রোডাকশন হার্ডেনিং নিরীক্ষায় সর্বমোট কয়টি সেটিং সঠিকভাবে কনফিগার করা ছিল এবং PASSED হিসেবে উত্তীর্ণ হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 settings were securely hardened.',
        bn: 'ঠিক ৩ টি সেটিং নিরাপদে সুরক্ষিত ছিল।'
      },
      explanation: {
        en: 'Three settings passed: DEBUG_MODE was disabled, DIRECTORY_LISTING was disabled, and DETAILED_STACK_TRACES was disabled.',
        bn: '৩ টি সেটিং পাস করেছিল: DEBUG_MODE বন্ধ ছিল, DIRECTORY_LISTING বন্ধ ছিল এবং DETAILED_STACK_TRACES বন্ধ ছিল।'
      },
    },
    {
      id: 'owasp-misconfig-ex-2',
      kind: 'mcq',
      topic: 'verbose-stack-trace-leakage',
      question: {
        en: 'Why is printing detailed stack traces on production web application error pages considered a severe security misconfiguration?',
        bn: 'প্রোডাকশন ওয়েব অ্যাপ্লিকেশনের এরর পেজে বিস্তারিত স্ট্যাক ট্রেস প্রদর্শন করাকে কেন মারাত্মক সিকিউরিটি মিসকনফিগারেশন হিসেবে বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'Stack traces reveal internal server file system paths, database schema structure, underlying framework versions, and code logic, giving attackers the exact reconnaissance intelligence needed to craft targeted exploits',
          bn: 'স্ট্যাক ট্রেস সার্ভারের অভ্যন্তরীণ ফাইল সিস্টেমের পাথ, ডাটাবেজের টেবিল কাঠামো, ফ্রেমওয়ার্কের সঠিক সংস্করণ এবং কোডের অভ্যন্তরীণ লজিক ফাঁস করে দেয়, যা দেখে আক্রমণকারী সহজেই সুনির্দিষ্ট আক্রমণ চালাতে পারে',
        },
        {
          en: 'Because stack traces consume twenty percent more internet bandwidth',
          bn: 'কারণ স্ট্যাক ট্রেস বিশ শতাংশ বেশি ইন্টারনেট ব্যান্ডউইথ খরচ করে',
        },
        {
          en: 'Because stack traces change the computer desktop background to red',
          bn: 'কারণ স্ট্যাক ট্রেস কম্পিউটার ডেস্কটপের ব্যাকগ্রাউন্ডের রঙ লাল বানিয়ে দেয়',
        },
        {
          en: 'Because stack traces make mouse clicks louder on mechanical keyboards',
          bn: 'কারণ স্ট্যাক ট্রেস মেকানিক্যাল কীবোর্ডে মাউস ক্লিকের শব্দ বাড়িয়ে তোলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Stack traces leak internal paths, framework versions, and database schemas.',
        bn: 'স্ট্যাক ট্রেস অভ্যন্তরীণ পাথ, ফ্রেমওয়ার্কের সংস্করণ এবং ডাটাবেজ স্কিমা ফাঁস করে।'
      },
      explanation: {
        en: 'In production, catch all unhandled errors and return a sanitized, generic error ID while logging the full trace privately to internal monitoring systems.',
        bn: 'প্রোডাকশনে সব এরর ধরে নিয়ে ব্যবহারকারীকে সাধারণ একটি এরর আইডি দেখাতে হবে এবং মূল এররটি অভ্যন্তরীণ প্রাইভেট লগে সংরক্ষণ করতে হবে।'
      },
    },
    {
      id: 'owasp-misconfig-ex-3',
      kind: 'mcq',
      topic: 'hsts-header-protection',
      question: {
        en: 'What critical protection does the HTTP Strict-Transport-Security (HSTS) header provide against network attackers?',
        bn: 'এইচটিটিপি স্ট্রিক্ট-ট্রান্সপোর্ট-সিকিউরিটি (HSTS) হেডার নেটওয়ার্ক আক্রমণকারীদের বিরুদ্ধে কোন অত্যন্ত গুরুত্বপূর্ণ সুরক্ষা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'HSTS instructs the browser to communicate exclusively over encrypted HTTPS connections, preventing SSL-stripping and man-in-the-middle downgrade attacks on insecure public Wi-Fi networks',
          bn: 'HSTS ব্রাউজারকে নির্দেশ দেয় সর্বদা এনক্রিপ্ট করা HTTPS সংযোগে যোগাযোগ করতে, ফলে উন্মুক্ত ওয়াইফাই নেটওয়ার্কে SSL-স্ট্রিপিং এবং ম্যান-ইন-দ্য-মিডল ডাউনগ্রেড আক্রমণ প্রতিরোধ করা সম্ভব হয়',
        },
        {
          en: 'HSTS deletes spam emails before they reach the user inbox',
          bn: 'HSTS ইনবক্সে পৌঁছানোর আগেই সমস্ত স্প্যাম ইমেইল মুছে ফেলে',
        },
        {
          en: 'HSTS increases server processor clock speeds by ten percent',
          bn: 'HSTS সার্ভার প্রসেসরের ক্লক স্পিড দশ শতাংশ বৃদ্ধি করে',
        },
        {
          en: 'HSTS replaces web page fonts with monospace characters',
          bn: 'HSTS ওয়েব পেজের সমস্ত ফন্টকে মোনোস্পেস ক্যারেক্টারে বদলে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'HSTS forces HTTPS and prevents SSL-stripping downgrade attacks.',
        bn: 'HSTS ব্রাউজারকে কেবল HTTPS ব্যবহারে বাধ্য করে ডাউনগ্রেড আক্রমণ ঠেকায়।'
      },
      explanation: {
        en: 'Without HSTS, an attacker on the same local network can intercept the initial HTTP redirect, stripping encryption and reading traffic in cleartext.',
        bn: 'HSTS না থাকলে একই নেটওয়ার্কের হ্যাকার প্রাথমিক রিডাইরেক্ট আটকে দিয়ে এনক্রিপশন বাতিল করে প্লেইনটেক্সটে ডাটা পড়ে নিতে পারে।'
      },
    },
    {
      id: 'owasp-misconfig-ex-4',
      kind: 'predict',
      topic: 'misconfigured-settings-count',
      question: {
        en: 'How many of the 4 server settings remained insecurely configured with default exposures and FAILED the production audit? (1). Type the number.',
        bn: '৪ টি সার্ভার সেটিংয়ের মধ্যে সর্বমোট কয়টি সেটিং ডিফল্ট উন্মুক্ত অবস্থায় অনিরাপদ থেকে গিয়েছিল এবং প্রোডাকশন নিরীক্ষায় FAILED হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 setting was misconfigured.',
        bn: 'কেবলমাত্র ১ টি সেটিং ভুলভাবে কনফিগার করা ছিল।'
      },
      explanation: {
        en: 'Only Setting 4 (ADMIN_PANEL_OPEN) failed because the administrative console was left publicly exposed on the default /admin route without access restrictions.',
        bn: 'কেবল ৪ নম্বর সেটিং (ADMIN_PANEL_OPEN) ব্যর্থ হয়েছিল কারণ কোনো বাধা ছাড়াই ডিফল্ট /admin রাউটে অ্যাডমিন প্যানেল উন্মুক্ত রাখা হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'security-misconfig-quiz',
    title: {
      en: 'Security Misconfiguration & System Hardening Quiz',
      bn: 'সিকিউরিটি মিসকনফিগারেশন ও সিস্টেম হার্ডেনিং কুইজ'
    },
    questions: [
      {
        id: 'owasp-misc-qz-1',
        kind: 'mcq',
        topic: 'server-tokens-banner-suppression',
        question: {
          en: 'Why do security professionals recommend disabling server identification banners (e.g. Server: Apache/2.4.41 or X-Powered-By: Express)?',
          bn: 'নিরাপত্তা বিশেষজ্ঞরা কেন সার্ভার পরিচিতি ব্যানারগুলো (যেমন Server: Apache/2.4.41 বা X-Powered-By: Express) বন্ধ রাখার পরামর্শ দেন?'
        },
        options: [
          {
            en: 'Hiding server software and exact version numbers denies automated reconnaissance bots information about specific unpatched CVEs, increasing the time and effort required for an attack',
            bn: 'সার্ভার সফটওয়্যার ও সংস্করণের সঠিক নাম লুকিয়ে রাখলে স্বয়ংক্রিয় স্ক্যানারগুলো সুনির্দিষ্ট দুর্বলতা বা CVE খুঁজে পেতে ব্যর্থ হয়, যার ফলে আক্রমণের প্রচেষ্টা অনেক কঠিন হয়ে পড়ে',
          },
          {
            en: 'Because server banners consume twenty percent of computer RAM',
            bn: 'কারণ সার্ভার ব্যানার কম্পিউটারের বিশ শতাংশ র‍্যাম খরচ করে ফেলে',
          },
          {
            en: 'Because banners make websites load ten seconds slower',
            bn: 'কারণ ব্যানারের কারণে ওয়েবসাইট লোড হতে দশ সেকেন্ড বেশি সময় লাগে',
          },
          {
            en: 'Because government regulations prohibit showing software brand names',
            bn: 'কারণ সরকারি আইনে সফটওয়্যারের ব্র্যান্ডের নাম প্রদর্শন নিষিদ্ধ করা হয়েছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Disabling banners suppresses reconnaissance data about specific software versions.',
          bn: 'ব্যানার বন্ধ রাখলে সফটওয়্যার সংস্করণ সম্পর্কে তথ্য পাওয়া যায় না।'
        },
        explanation: {
          en: 'While banner suppression is "defense by obscurity", removing them prevents automated Masscan and Shodan crawlers from indexing your server as an easy target.',
          bn: 'এটি একমাত্র সমাধান না হলেও, ব্যানার বন্ধ রাখলে স্বয়ংক্রিয় বট বা শোডান স্ক্যানার আপনার সার্ভারকে সহজ শিকার হিসেবে চিহ্নিত করতে পারে না।'
        },
      },
      {
        id: 'owasp-misc-qz-2',
        kind: 'mcq',
        topic: 'cors-wildcard-origin-with-credentials',
        question: {
          en: 'Why do modern web browsers reject configurations where Access-Control-Allow-Origin: * is paired with Access-Control-Allow-Credentials: true?',
          bn: 'আধুনিক ওয়েব ব্রাউজারগুলো কেন এমন কনফিগারেশন প্রত্যাখ্যান করে যেখানে Access-Control-Allow-Origin: * এর সাথে Access-Control-Allow-Credentials: true একসাথে রাখা হয়?'
        },
        options: [
          {
            en: 'Permitting any arbitrary origin in the world to make credentialed requests would allow malicious websites to steal private user sessions and personal data indiscriminately across the entire internet',
            bn: 'বিশ্বের যেকোনো অরিজিনকে ব্যবহারকারীর লগইন ক্রেডেনশিয়াল সহ রিকোয়েস্ট করার অনুমতি দিলে ক্ষতিকর ওয়েবসাইটগুলো খুব সহজেই পুরো ইন্টারনেটের যে কারো ব্যক্তিগত ডাটা চুরি করতে পারত',
          },
          {
            en: 'Because the wildcard character requires too much CPU power to parse',
            bn: 'কারণ ওয়াইল্ডকার্ড স্টার চিহ্নটি পার্স করতে প্রসেসরের অতিরিক্ত ক্ষমতা প্রয়োজন হয়',
          },
          {
            en: 'Because credentials can only travel across fiber optic internet cables',
            bn: 'কারণ ক্রেডেনশিয়াল কেবল অপটিক্যাল ফাইবার ক্যাবলের মধ্য দিয়ে চলতে পারে',
          },
          {
            en: 'Because credentials expire after two seconds when wildcards are present',
            bn: 'কারণ ওয়াইল্ডকার্ড থাকলে ক্রেডেনশিয়াল মাত্র দুই সেকেন্ড পর মেয়াদোত্তীর্ণ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Allowing wildcard origins with credentials would completely destroy web isolation.',
          bn: 'ওয়াইল্ডকার্ডের সাথে ক্রেডেনশিয়াল ব্যবহারের অনুমতি দিলে ওয়েব নিরাপত্তা সম্পূর্ণ ধ্বংস হয়ে যেত।'
        },
        explanation: {
          en: 'The W3C CORS specification explicitly forbids this combination to prevent catastrophic cross-origin session theft.',
          bn: 'W3C স্পেসিফিকেশনে এই মারাত্মক সংমিশ্রণটি সরাসরি নিষিদ্ধ করা হয়েছে যাতে ব্রাউজার কুকি চুরি বন্ধ থাকে।'
        },
      },
      {
        id: 'owasp-misc-qz-3',
        kind: 'mcq',
        topic: 'cis-benchmarks-automated-auditing',
        question: {
          en: 'What are Center for Internet Security (CIS) Benchmarks, and how do security teams use them in production infrastructure?',
          bn: 'সেন্টার ফর ইন্টারনেট সিকিউরিটি (CIS) বেঞ্চমার্ক কী এবং প্রোডাকশন ইনফ্রাস্ট্রাকচারে সিকিউরিটি টিম কীভাবে এগুলো ব্যবহার করে?'
        },
        options: [
          {
            en: 'Consensus-based, globally recognized configuration guidelines for hardening operating systems, databases, and cloud platforms against misconfigurations, audited automatically via infrastructure-as-code scanners',
            bn: 'আন্তর্জাতিকভাবে স্বীকৃত কনফিগারেশন নির্দেশিকা যা অপারেটিং সিস্টেম, ডাটাবেজ ও ক্লাউড প্ল্যাটফর্মের মিসকনফিগারেশন দূর করতে সাহায্য করে এবং ইনফ্রাস্ট্রাকচার-অ্যাজ-কোড স্ক্যানারের মাধ্যমে স্বয়ংক্রিয়ভাবে অডিট করা যায়',
          },
          {
            en: 'Speed tests that measure the download speed of computer monitors',
            bn: 'কম্পিউটার মনিটরের ডাউনলোড স্পিড পরিমাপ করার বিশেষ স্পিড টেস্ট',
          },
          {
            en: 'Physical weight scales used to weigh server racks before installation',
            bn: 'সার্ভার র্যাক বসানোর আগে তার ওজন পরিমাপ করার ফিজিক্যাল দাঁড়িপাল্লা',
          },
          {
            en: 'Software programs that generate random passwords every ten minutes',
            bn: 'সফটওয়্যার যা প্রতি দশ মিনিট পর পর এলোমেলো পাসওয়ার্ড তৈরি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'CIS benchmarks provide standardized baseline configurations for system hardening.',
          bn: 'CIS বেঞ্চমার্ক সিস্টেম হার্ডেনিংয়ের জন্য সুনির্দিষ্ট মানদণ্ড সরবরাহ করে।'
        },
        explanation: {
          en: 'CIS benchmarks offer step-by-step checklists (e.g. disabling root SSH login, enforcing file permission masks) to eliminate human error during provisioning.',
          bn: 'CIS বেঞ্চমার্ক ধাপে ধাপে নির্দেশনা দেয় (যেমন রুট এসএসএইচ বন্ধ করা, ফাইল পারমিশন ঠিক করা) যাতে সার্ভার তৈরিতে কোনো মানুষের ভুল না থাকে।'
        },
      },
      {
        id: 'owasp-misc-qz-4',
        kind: 'mcq',
        topic: 'x-content-type-options-nosniff',
        question: {
          en: 'What attack vector is neutralized by adding the "X-Content-Type-Options: nosniff" response header?',
          bn: '"X-Content-Type-Options: nosniff" রেসপন্স হেডার যুক্ত করার মাধ্যমে কোন আক্রমণটি প্রতিহত করা হয়?'
        },
        options: [
          {
            en: 'MIME-type sniffing attacks, where the browser ignores the declared Content-Type (such as text/plain) and sniffs the payload content, executing malicious HTML or JavaScript uploaded as a profile image',
            bn: 'MIME-টাইপ স্নিফিং আক্রমণ, যেখানে ব্রাউজার ঘোষিত Content-Type (যেমন text/plain) উপেক্ষা করে ভেতরের কনটেন্ট বিশ্লেষণ করে ইমেজ বা টেক্সট হিসেবে আপলোড করা ক্ষতিকর জাভাস্ক্রিপ্ট কোড চালিয়ে দেয়',
          },
          {
            en: 'An attack that deletes all printer drivers from the network',
            bn: 'এমন আক্রমণ যা নেটওয়ার্কের সমস্ত প্রিন্টার ড্রাইভার মুছে ফেলে',
          },
          {
            en: 'An attack that disconnects external USB mouse cables',
            bn: 'এমন আক্রমণ যা কম্পিউটারের সাথে যুক্ত ইউএসবি মাউসের তার খুলে ফেলে',
          },
          {
            en: 'An attack that changes screen brightness to zero percent',
            bn: 'এমন আক্রমণ যা মনিটরের উজ্জ্বলতা শূন্য শতাংশে নামিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'nosniff forces the browser to strictly honor the declared Content-Type header.',
          bn: 'nosniff ব্রাউজারকে ঘোষিত Content-Type কঠোরভাবে মেনে চলতে বাধ্য করে।'
        },
        explanation: {
          en: 'Without nosniff, older browsers would execute HTML embedded inside a file served as image/jpeg if it contained a <script> tag.',
          bn: 'nosniff না থাকলে ব্রাউজার ছবির ফাইলের ভেতর স্ক্রিপ্ট ট্যাগ দেখলে ছবি না দেখিয়ে কোডটি চালিয়ে এক্সএসএস ঘটাতে পারত।'
        },
      },
    ],
  },
  next: {
    slug: 'vulnerable-components',
    title: {
      en: 'Vulnerable & Outdated Components: SBOM & Supply Chain Security',
      bn: 'অরক্ষিত ও পুরানো প্যাকেজ: SBOM ও সাপ্লাই চেইন নিরাপত্তা'
    },
  },
};
