import type { Lesson } from '../../../lib/types';

export const ApiKeysTokensLesson: Lesson = {
  slug: 'api-keys-tokens',
  tech: 'authorization',
  title: {
    en: 'API Keys & Machine Tokens: Granular Scopes, Rotation & Delegation',
    bn: 'এপিআই কি এবং মেশিন টোকেন: সূক্ষ্ম স্কোপ, রোটেশন এবং ডেলিগেশন'
  },
  summary: {
    en: 'Master machine-to-machine (M2M) authorization with cryptographically secure API keys and service tokens. Discover why issuing wildcard "god-keys" across automated background services invites catastrophic organizational breaches. Learn how to implement granular OAuth-style scopes (e.g. read:reports vs write:*), hash API keys using SHA-256 before database persistence, and architect automated 90-day rotation schedules without downtime.',
    bn: 'ক্রিপ্টোগ্রাফিকভাবে সুরক্ষিত এপিআই কি এবং সার্ভিস টোকেন ব্যবহার করে মেশিন-টু-মেশিন (M2M) অথরাইজেশন আয়ত্ত করুন। স্বয়ংক্রিয় ব্যাকগ্রাউন্ড সার্ভিসের জন্য ওয়াইল্ডকার্ড বা "গড-কি" তৈরি করা কেন মারাত্মক নিরাপত্তা বিপর্যয় ডেকে আনে তা জানুন। সুনির্দিষ্ট স্কোপ প্রয়োগ ( যেমন write:* এর বদলে read:reports ), ডাটাবেজে সংরক্ষণের পূর্বে SHA-২৫৬ হ্যাশিং এবং কোনো বিরতি ছাড়াই স্বয়ংক্রিয় ৯০ দিনের রোটেশন শিডিউল বাস্তবায়ন করতে শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'machine-authorization-challenge',
      text: {
        en: 'The Machine Identity Challenge: Why Automated Systems Need Scopes',
        bn: 'মেশিন আইডেন্টিটির চ্যালেঞ্জ: স্বয়ংক্রিয় সিস্টেমে কেন স্কোপ অপরিহার্য'
      },
    },
    {
      type: 'para',
      text: {
        en: 'While human users log in interactively and can respond to multi-factor authentication challenges, automated machines (such as scheduled cron jobs, background microservices, and external webhook listeners) authenticate autonomously using API keys and service tokens. Because these tokens operate without human supervision, they represent high-value targets for attackers.',
        bn: 'সাধারণ ব্যবহারকারীরা যখন সরাসরি লগইন করেন এবং মাল্টি-ফ্যাক্টর অথেনটিকেশনের জবাব দিতে পারেন, তখন স্বয়ংক্রিয় রোবট বা মেশিনগুলো ( যেমন ক্রন জব, ব্যাকগ্রাউন্ড মাইক্রোসার্ভিস বা ওয়েবহুক লিসেনার ) এপিআই কি ও সার্ভিস টোকেন দিয়ে মানুষের হস্তক্ষেপ ছাড়াই নিজে নিজেই কাজ চালায়। মানুষের সার্বক্ষণিক নজরদারি না থাকায় এই টোকেনগুলো আক্রমণকারীদের কাছে অত্যন্ত আকর্ষণীয় লক্ষ্যবস্তু।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The most dangerous anti-pattern in machine authorization is issuing a wildcard "god-key" that has unrestricted root access across the entire platform (*). When a developer accidentally commits a god-key to a public GitHub repository or prints it in an unencrypted server log, the entire infrastructure is compromised. In contrast, assigning granular scopes limits the blast radius of any token leak.',
        bn: 'মেশিন অথরাইজেশনের সবচেয়ে মারাত্মক ভুল হলো প্ল্যাটফর্মের সব ক্ষমতার অধিকারী ওয়াইল্ডকার্ডযুক্ত একটি "গড-কি" তৈরি করা (*)। কোনো ডেভেলপার যদি ভুলবশত সেই গড-কি গিটহাবে পুশ করে দেন বা সার্ভার লগে প্রিন্ট করেন, তবে মুহূর্তেই পুরো অবকাঠামো হ্যাকারদের নিয়ন্ত্রণে চলে যায়। পক্ষান্তরে সুনির্দিষ্ট স্কোপ প্রয়োগ করলে টোকেন ফাঁস হলেও ক্ষতির পরিধি অত্যন্ত সীমিত থাকে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Structured Prefix Generation',
            bn: '১. সুগঠিত প্রিফিক্সযুক্ত কি তৈরি'
          },
          text: {
            en: 'Generate high-entropy random keys prefixed with an identifier (such as sk_live_...), enabling automated secret scanners (like GitHub Secret Scanning) to detect leaks instantly.',
            bn: 'একটি নির্দিষ্ট প্রিফিক্সযুক্ত ( যেমন sk_live_... ) উচ্চ-নিরাপত্তার র্যান্ডম কি তৈরি করুন, যা গিটহাবের মতো সিক্রেট স্ক্যানারগুলোকে কোনো কোড ফাঁসের ঘটনা সাথে সাথে সনাক্ত করতে সাহায্য করে।'
          },
        },
        {
          title: {
            en: '2. One-Way Cryptographic Hashing',
            bn: '২. একমুখী ক্রিপ্টোগ্রাফিক হ্যাশিং'
          },
          text: {
            en: 'Show the raw API key to the developer ONCE upon creation. Immediately compute its SHA-256 hash and persist only the hash in the database, never storing raw plaintext keys.',
            bn: 'তৈরির মুহূর্তে ডেভেলপারকে মাত্র একবারের জন্য মূল এপিআই কি প্রদর্শন করুন। সাথে সাথে এর SHA-২৫৬ হ্যাশ গণনা করে ডাটাবেজে কেবল হ্যাশটি সংরক্ষণ করুন, কখনোই প্লেইনটেক্সট কি জমা রাখবেন না।'
          },
        },
        {
          title: {
            en: '3. Granular Scoping & Least Privilege',
            bn: '৩. সুনির্দিষ্ট স্কোপ এবং ন্যূনতম অধিকার'
          },
          text: {
            en: 'Bind keys to narrow, verb-noun scopes (e.g. read:reports). Reject all requests attempting actions outside the explicitly declared scope set.',
            bn: 'প্রতিটি কি-কে সুনির্দিষ্ট কাজের স্কোপের সাথে বেঁধে দিন ( যেমন read:reports )। ঘোষিত স্কোপের বাইরের যেকোনো কাজের অনুরোধ সরাসরি প্রত্যাখ্যান করুন।'
          },
        },
        {
          title: {
            en: '4. Overlapping Key Rotation Schedules',
            bn: '৪. বিরতিহীন কি রোটেশন শিডিউল'
          },
          text: {
            en: 'Enforce scheduled rotation (such as every 90 days), maintaining an active dual-key grace period so production systems can transition smoothly without downtime.',
            bn: 'নিয়মিত রোটেশন ( যেমন প্রতি ৯০ দিনে ) প্রয়োগ করুন এবং একটি দ্বৈত-কি গ্রেস পিরিয়ড বজায় রাখুন যাতে কোনো সার্ভিস বন্ধ না করেই প্রোডাকশন মসৃণভাবে নতুন কি-তে স্থানান্তরিত হতে পারে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'API Key Security Architecture: 4 Keys Audited',
        bn: 'এপিআই কি নিরাপত্তা আর্কিটেকচার: ৪ টি চাবির অডিট'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="API key audit evaluating 4 machine keys showing 3 compliant scoped keys and 1 rejected god key">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MACHINE API KEY ARCHITECTURE &amp; LEAST-PRIVILEGE AUDIT</text>
  
  <!-- Left Side: Storage Security Architecture -->
  <g transform="translate(40, 55)">
    <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="125" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">API KEY STORAGE PROTOCOL</text>
    
    <g transform="translate(15, 45)">
      <rect width="220" height="70" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="10" y="20" fill="#38bdf8" font-size="9" font-weight="bold">KEY STRUCTURE:</text>
      <text x="10" y="38" fill="#f8fafc" font-size="8">sk_live_9a7b2c8f... (Secret)</text>
      <text x="10" y="56" fill="#cbd5e1" font-size="8">Prefixed for secret scanners</text>
      
      <rect y="85" width="220" height="85" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">DATABASE RECORD:</text>
      <text x="10" y="38" fill="#cbd5e1" font-size="8">key_hash: SHA256(raw_key)</text>
      <text x="10" y="56" fill="#cbd5e1" font-size="8">scopes: ["read:reports"]</text>
      <text x="10" y="74" fill="#10b981" font-size="8">Zero plaintext stored!</text>
      
      <rect y="185" width="220" height="95" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="110" y="210" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">ROTATION CYCLE</text>
      <text x="10" y="232" fill="#cbd5e1" font-size="8">• Scheduled: 90-day lifespans</text>
      <text x="10" y="250" fill="#cbd5e1" font-size="8">• Dual-key overlap period</text>
      <text x="10" y="268" fill="#34d399" font-size="8">• Zero service downtime</text>
    </g>
  </g>
  
  <!-- Right Side: 4 Keys Audited -->
  <g transform="translate(310, 55)">
    <rect width="490" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="245" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">SECURITY AUDIT OF 4 MACHINE KEYS</text>
    
    <!-- Key 1: Reporting Worker -->
    <g transform="translate(15, 45)">
      <rect width="460" height="48" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9.5" font-weight="bold">KEY 1: Reporting Worker</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Scope: ["read:reports"] → <tspan fill="#34d399" font-weight="bold">AUDIT PASS (Least Privilege Compliant) ✓</tspan></text>
    </g>
    
    <!-- Key 2: Ingestion Script -->
    <g transform="translate(15, 105)">
      <rect width="460" height="48" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9.5" font-weight="bold">KEY 2: Data Ingestion Script</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Scopes: ["read:reports", "write:reports"] → <tspan fill="#34d399" font-weight="bold">AUDIT PASS (Scoped) ✓</tspan></text>
    </g>
    
    <!-- Key 3: Dashboard Read-Only -->
    <g transform="translate(15, 165)">
      <rect width="460" height="48" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9.5" font-weight="bold">KEY 3: Dashboard Reader</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Scope: ["read:reports"] → <tspan fill="#34d399" font-weight="bold">AUDIT PASS (Least Privilege Compliant) ✓</tspan></text>
    </g>
    
    <!-- Key 4: Legacy Bot (God Key) -->
    <g transform="translate(15, 225)">
      <rect width="460" height="60" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
      <text x="15" y="20" fill="#fca5a5" font-size="9.5" font-weight="bold">KEY 4: Legacy Deploy Bot</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Scopes: ["*"] (Wildcard God-Key) → <tspan fill="#ef4444" font-weight="bold">AUDIT FAIL (REVOKE IMMEDIATELY) ✗</tspan></text>
      <text x="15" y="52" fill="#fca5a5" font-size="7.5">DANGER: Unrestricted access across all APIs violates least-privilege principles!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Audit outcome: 4 keys checked → 3 passed compliance, and 1 dangerous god-key was flagged for immediate revocation</text>
</svg>`,
      caption: {
        en: 'The security audit inspects 4 machine keys: 3 scoped keys pass compliance, while 1 wildcard god-key is flagged for immediate revocation.',
        bn: 'নিরাপত্তা অডিট ৪ টি মেশিন কি পরীক্ষা করে: ৩ টি সুনির্দিষ্ট স্কোপের কি পাস করে এবং ১ টি বিপজ্জনক গড-কি তাৎক্ষণিক বাতিলের নির্দেশ পায়।'
      },
    },
    {
      type: 'heading',
      id: 'api-key-manager-code',
      text: {
        en: 'Building an API Key Scoping & Audit Engine in Node.js',
        bn: 'Node.js-এ এপিআই কি স্কোপিং ও অডিট ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect how an enterprise API key manager creates structured keys, hashes them using SHA-256 for secure storage, validates scope permissions on incoming requests, and audits keys to flag dangerous wildcard god-keys.',
        bn: 'একটি এন্টারপ্রাইজ এপিআই কি ম্যানেজার কীভাবে প্রিফিক্সযুক্ত কি তৈরি করে, নিরাপদ সংরক্ষণের জন্য SHA-২৫৬ হ্যাশ করে, ইনকামিং রিকোয়েস্টে স্কোপ যাচাই করে এবং বিপজ্জনক ওয়াইল্ডকার্ড গড-কি সনাক্ত করে তা দেখুন।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'api-key-manager.js',
      code: `// Enterprise API Key Manager & Scope Auditor
const crypto = require('crypto');

class ApiKeyManager {
  constructor() {
    this.keyStore = new Map(); // SHA-256 Hash -> { id, name, scopes, active }
  }

  // Issue a new scoped key (stores only SHA-256 hash)
  createKey(name, scopes) {
    const rawSecret = crypto.randomBytes(24).toString('hex');
    const apiKey = 'sk_live_' + rawSecret;
    const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');

    this.keyStore.set(keyHash, {
      id: 'key_' + crypto.randomBytes(4).toString('hex'),
      name: name,
      scopes: new Set(scopes),
      active: true
    });

    return apiKey; // Return to caller once, never persisted in plaintext!
  }

  // Verify key hash and enforce granular scopes
  verify(apiKey, requiredScope) {
    const incomingHash = crypto.createHash('sha256').update(apiKey).digest('hex');
    const record = this.keyStore.get(incomingHash);

    if (!record || !record.active) {
      return { status: 401, allowed: false, error: 'Invalid or revoked API key.' };
    }

    // Default-Deny Scope Evaluation
    const hasScope = record.scopes.has(requiredScope) || record.scopes.has('*');
    if (!hasScope) {
      return {
        status: 403,
        allowed: false,
        error: 'Forbidden: Key ' + record.name + ' lacks required scope ' + requiredScope
      };
    }

    return { status: 200, allowed: true, keyName: record.name };
  }

  // Perform security audit across all registered keys
  auditKeys() {
    const auditReport = [];
    for (const [hash, record] of this.keyStore) {
      const isGodKey = record.scopes.has('*');
      auditReport.push({
        name: record.name,
        scopes: [...record.scopes],
        compliant: !isGodKey,
        verdict: isGodKey ? 'FAIL (God-Key)' : 'PASS (Scoped)'
      });
    }
    return auditReport;
  }
}

const manager = new ApiKeyManager();

// Create 4 distinct keys
const k1 = manager.createKey('Reporting Worker', ['read:reports']);
const k2 = manager.createKey('Data Ingestion Script', ['read:reports', 'write:reports']);
const k3 = manager.createKey('Dashboard Reader', ['read:reports']);
const k4 = manager.createKey('Legacy Deploy Bot', ['*']); // Unrestricted god-key

console.log('=== Step 1: Security Audit of 4 API Keys ===');
const auditResults = manager.auditKeys();
let passedCount = 0;
let failedCount = 0;

auditResults.forEach(item => {
  if (item.compliant) {
    passedCount += 1;
    console.log('[PASS] ' + item.name + ' scopes: [' + item.scopes.join(', ') + ']');
  } else {
    failedCount += 1;
    console.log('[FAIL] ' + item.name + ' scopes: [' + item.scopes.join(', ') + '] -> DANGEROUS GOD-KEY!');
  }
});

console.log('\\n=== Audit Summary ===');
console.log('Total Keys Audited: ' + auditResults.length);
console.log('Passed Compliance: ' + passedCount);
console.log('Flagged for Revocation: ' + failedCount);

console.log('\\n=== Step 2: Runtime Scope Enforcement ===');
console.log('Reporting Worker accessing read:reports: ', manager.verify(k1, 'read:reports').status);
console.log('Reporting Worker attempting write:reports:', manager.verify(k1, 'write:reports').status);`,
      caption: {
        en: 'The API key manager audits 4 machine tokens: 3 pass compliance, and 1 wildcard god-key is flagged for revocation.',
        bn: 'এপিআই কি ম্যানেজার ৪ টি মেশিন টোকেন অডিট করে: ৩ টি পাস করে এবং ১ টি বিপজ্জনক গড-কি বাতিলের জন্য চিহ্নিত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'Automated Secret Scanners in CI/CD Pipelines',
        bn: 'CI/CD পাইপলাইনে স্বয়ংক্রিয় সিক্রেট স্ক্যানার'
      },
      text: {
        en: 'Attackers continuously monitor public GitHub commits using automated scrapers that search for regexes matching sk_live_ and AWS access keys. Within 30 seconds of an accidental git push, automated bots discover and abuse leaked keys. Implement pre-commit hooks (such as TruffleHog or GitGuardian) and automated secret scanning in your continuous integration pipelines to block accidental commits before they leave developer workstations.',
        bn: 'আক্রমণকারীরা স্বয়ংক্রিয় বট ব্যবহার করে প্রতিনিয়ত পাবলিক গিটহাব পর্যবেক্ষণ করে sk_live_ বা এডব্লিউএস কীগুলোর মতো প্যাটার্ন খুঁজতে থাকে। ভুলবশত গিট পুশ করার মাত্র ৩০ সেকেন্ডের মধ্যে আক্রমণকারী বটগুলো ফাঁস হওয়া চাবি চুরি করে আক্রমণ শুরু করে দেয়। ডেভেলপারদের ওয়ার্কস্টেশন থেকে বের হওয়ার আগেই অসাবধানতাবশত পুশ ঠেকানোর জন্য প্রি-কমিট হুক ( যেমন TruffleHog বা GitGuardian ) এবং CI/CD পাইপলাইনে স্বয়ংক্রিয় সিক্রেট স্ক্যানার যুক্ত করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'api-key-ex-1',
      kind: 'predict',
      topic: 'api-keys-audited-failed-count',
      question: {
        en: 'Out of the 4 API keys evaluated during the security audit demonstration, how many keys failed compliance due to holding dangerous wildcard god-key permissions? (1). Type the number.',
        bn: 'নিরাপত্তা অডিটে মূল্যায়িত ৪ টি এপিআই কি-র মধ্যে বিপজ্জনক ওয়াইল্ডকার্ড গড-কি পারমিশন থাকার কারণে কয়টি কি ব্যর্থ বলে চিহ্নিত হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 key (Legacy Deploy Bot with [*]) failed.',
        bn: 'কেবল ১ টি কি ([*] যুক্ত লেগ্যাসি ডিপ্লয় বট) ব্যর্থ হয়েছিল।'
      },
      explanation: {
        en: 'Exactly 1 key (Key 4 for the Legacy Deploy Bot) failed the security audit because wildcard (*) permissions violate the Principle of Least Privilege.',
        bn: 'ঠিক ১ টি কি (৪ নম্বর কি) অডিটে ব্যর্থ হয়েছিল কারণ ওয়াইল্ডকার্ড (*) পারমিশন ন্যূনতম অধিকারের নীতি সরাসরি লঙ্ঘন করে।'
      },
    },
    {
      id: 'api-key-ex-2',
      kind: 'mcq',
      topic: 'plaintext-api-key-storage-risk',
      question: {
        en: 'Why is storing raw plaintext API keys in a database a catastrophic architectural vulnerability, and what is the standard remediation?',
        bn: 'ডাটাবেজে সরাসরি প্লেইনটেক্সট এপিআই কি সংরক্ষণ করা কেন একটি মারাত্মক নিরাপত্তা ত্রুটি এবং এর সঠিক সমাধান কী?'
      },
      options: [
        {
          en: 'Database backups or SQL injections expose plaintext keys immediately. The remediation is storing only SHA-256 hashes and showing raw keys once upon creation',
          bn: 'ডাটাবেজ ব্যাকআপ বা এসকিউএল ইনজেকশনে প্লেইনটেক্সট কি সরাসরি ফাঁস হয়ে যায়। এর সঠিক সমাধান হলো ডাটাবেজে কেবল SHA-২৫৬ হ্যাশ সংরক্ষণ করা এবং তৈরির সময় ডেভেলপারকে মাত্র একবার মূল কি দেখানো',
        },
        {
          en: 'Because plaintext keys cause computer monitors to flicker every twenty seconds',
          bn: 'কারণ প্লেইনটেক্সট কি-র ব্যবহারে প্রতি বিশ সেকেন্ড পরপর কম্পিউটারের মনিটর কাঁপতে থাকে',
        },
        {
          en: 'Because storing plaintext keys makes wireless computer mice run out of battery in one hour',
          bn: 'কারণ প্লেইনটেক্সট কি জমা রাখলে ওয়্যারলেস মাউসের ব্যাটারি এক ঘণ্টায় শেষ হয়ে যায়',
        },
        {
          en: 'Because operating systems refuse to boot if text files contain numbers',
          bn: 'কারণ টেক্সট ফাইলের মধ্যে সংখ্যা থাকলে অপারেটিং সিস্টেম চালু হতে অস্বীকৃতি জানায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Hash API keys before database storage just like user passwords.',
        bn: 'ব্যবহারকারীর পাসওয়ার্ডের মতোই ডাটাবেজে সংরক্ষণের আগে এপিআই কি হ্যাশ করে নিন।'
      },
      explanation: {
        en: 'Storing SHA-256 hashes ensures that even if a database table is dumped by attackers, the raw keys cannot be recovered or abused.',
        bn: 'SHA-২৫৬ হ্যাশ রাখায় ডাটাবেজ হ্যাক হলেও আক্রমণকারীরা মূল এপিআই কি উদ্ধার বা ব্যবহার করতে পারে না।'
      },
    },
    {
      id: 'api-key-ex-3',
      kind: 'mcq',
      topic: 'granular-scopes-blast-radius',
      question: {
        en: 'How does configuring granular scopes (e.g. read:reports) minimize the blast radius of an API key compromise compared to a wildcard god-key (*)?',
        bn: 'একটি ওয়াইল্ডকার্ড গড-কি-র (*) তুলনায় সুনির্দিষ্ট স্কোপ ( যেমন read:reports ) প্রয়োগ করা কীভাবে এপিআই কি ফাঁসের ক্ষতিকর প্রভাব সর্বনিম্ন রাখে?'
      },
      options: [
        {
          en: 'An attacker who steals a scoped read:reports key can only view report endpoints, but cannot modify database records, delete customer data, or access billing systems',
          bn: 'চুরি হওয়া কি-তে কেবল read:reports স্কোপ থাকলে আক্রমণকারী শুধু রিপোর্ট দেখতে পারবে, কিন্তু ডাটাবেজ পরিবর্তন, গ্রাহকের তথ্য মুছে ফেলা বা বিলিং সিস্টেমে কোনো হস্তক্ষেপ করতে পারবে না',
        },
        {
          en: 'It doubles the transmission speed of network cables across the office',
          bn: 'এটি অফিসের ইন্টারনেটের তারের ডেটা চলাচলের গতি দ্বিগুণ বাড়িয়ে দেয়',
        },
        {
          en: 'It turns the website background color into bright neon green',
          bn: 'এটি ওয়েবসাইটের ব্যাকগ্রাউন্ড রঙ উজ্জ্বল নিয়ন সবুজে রূপান্তর করে ফেলে',
        },
        {
          en: 'It forces computers to restart after every twenty-five minutes of usage',
          bn: 'এটি কম্পিউটারকে প্রতি পঁচিশ মিনিট পরপর নিজে নিজেই রিস্টার্ট হতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Granular scopes restrict stolen tokens to read-only or narrow operations.',
        bn: 'সুনির্দিষ্ট স্কোপ চুরি হওয়া টোকেনের ক্ষমতাকে কেবল সীমিত কাজের মধ্যে আটকে রাখে।'
      },
      explanation: {
        en: 'Limiting scope limits damage. Attackers holding narrow tokens cannot pivot to administrative actions or execute destructive mutations.',
        bn: 'সীমিত স্কোপ ক্ষয়ক্ষতি সীমিত রাখে। সংকীর্ণ স্কোপের টোকেন দিয়ে আক্রমণকারীরা ধ্বংসাত্মক কিছু করতে পারে না।'
      },
    },
    {
      id: 'api-key-ex-4',
      kind: 'predict',
      topic: 'api-keys-audited-passed-count',
      question: {
        en: 'Out of the 4 API keys evaluated during the security audit demonstration, how many keys passed compliance because they were scoped appropriately? (3). Type the number.',
        bn: 'নিরাপত্তা অডিটে মূল্যায়িত ৪ টি এপিআই কি-র মধ্যে যথোপযুক্ত স্কোপ থাকার কারণে কয়টি কি সফলভাবে পাস করেছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: '3 keys (Reporting Worker, Data Ingestion, Dashboard Reader) passed.',
        bn: '৩ টি কি (রিপোর্টিং ওয়ার্কার, ইনজেশন স্ক্রিপ্ট, ড্যাশবোর্ড রিডার) পাস করেছিল।'
      },
      explanation: {
        en: 'Keys 1, 2, and 3 were bound to explicit, narrow scopes and passed the least-privilege security audit.',
        bn: '১, ২ এবং ৩ নম্বর কি সুনির্দিষ্ট ও সীমিত স্কোপযুক্ত হওয়ায় নিরাপত্তা অডিটে সফলভাবে পাস করেছিল।'
      },
    },
  ],
  quiz: {
    id: 'api-keys-tokens-quiz',
    title: {
      en: 'API Keys & Machine Tokens Security Quiz',
      bn: 'এপিআই কি ও মেশিন টোকেন নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'api-key-qz-1',
        kind: 'mcq',
        topic: 'zero-downtime-key-rotation',
        question: {
          en: 'How do production engineering teams execute zero-downtime API key rotation across distributed microservices?',
          bn: 'ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসে কোনো বিরতি (Downtime) ছাড়াই কীভাবে প্রোডাকশন ইঞ্জিনিয়ারিং টিম এপিআই কি রোটেশন সম্পন্ন করে?'
        },
        options: [
          {
            en: 'By generating a new secondary API key while keeping the primary key active, updating the downstream client services to use the new key, and only revoking the old key after observing traffic fully migrate to the new key',
            bn: 'পুরোনো কি সচল রেখেই একটি নতুন দ্বিতীয় কি তৈরি করা, ক্লায়েন্ট সার্ভিসগুলোকে নতুন কি ব্যবহার করতে আপডেট করা এবং সমস্ত ট্রাফিক নতুন কি-তে সরে যাওয়ার পর নিশ্চিত হয়ে পুরোনো কি-টি বাতিল করা',
          },
          {
            en: 'By turning off all production servers for twelve consecutive hours on Monday morning',
            bn: 'সোমবার সকালে টানা বারো ঘণ্টার জন্য সমস্ত প্রোডাকশন সার্ভার বন্ধ করে রাখার মাধ্যমে',
          },
          {
            en: 'By printing the new API key on paper flyers and mailing them to employees',
            bn: 'কাগজের লিফলেটে নতুন এপিআই কি প্রিন্ট করে কর্মীদের ঠিকানায় ডাকযোগে পাঠানোর মাধ্যমে',
          },
          {
            en: 'By immediately deleting all active keys without warning any client services',
            bn: 'ক্লায়েন্ট সার্ভিসগুলোকে কোনো সংকেত না দিয়ে সাথে সাথে সচল সব কি মুছে ফেলার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Dual-key overlapping grace periods prevent service disruptions during rotation.',
          bn: 'দ্বৈত-কি ওভারল্যাপ গ্রেস পিরিয়ড রোটেশনের সময় সার্ভিসের কোনো বিঘ্ন ঘটতে দেয় না।'
        },
        explanation: {
          en: 'Zero-downtime rotation requires a grace period where both old and new keys are accepted until all clients migrate.',
          bn: 'জিরো-ডাউনটাইম রোটেশনে পুরোনো ও নতুন উভয় কি সাময়িকভাবে কার্যকর রাখতে হয় যাতে ক্লায়েন্ট নির্বিঘ্নে নতুন কি-তে চলে যেতে পারে।'
        },
      },
      {
        id: 'api-key-qz-2',
        kind: 'mcq',
        topic: 'structured-prefix-benefits',
        question: {
          en: 'Why do modern API platforms like Stripe, GitHub, and Slack prefix their API keys with recognizable strings (such as sk_live_, ghp_, or xoxb-)?',
          bn: 'স্ট্রাইপ, গিটহাব বা স্ল্যাকের মতো আধুনিক প্ল্যাটফর্মগুলো কেন তাদের এপিআই কি-তে সুনির্দিষ্ট প্রিফিক্স ( যেমন sk_live_, ghp_, বা xoxb- ) যুক্ত করে?'
        },
        options: [
          {
            en: 'Prefixes allow automated secret detection scanners (e.g. GitHub Secret Scanning) to reliably detect accidentally committed keys via simple regex patterns without generating high false-positive alert volumes',
            bn: 'প্রিফিক্স থাকার কারণে স্বয়ংক্রিয় সিক্রেট স্ক্যানারগুলো ( যেমন গিটহাব সিক্রেট স্ক্যানিং ) সাধারণ রেজেক্স দিয়ে ভুল অ্যালার্ট ছাড়াই তাৎক্ষণিকভাবে ফাঁস হওয়া কি সনাক্ত করে ব্লক করতে পারে',
          },
          {
            en: 'Prefixes make computer speakers play musical fanfare chords upon login',
            bn: 'প্রিফিক্সের ফলে লগইন করার সময় কম্পিউটারের স্পিকারে গানের সুর বাজতে থাকে',
          },
          {
            en: 'Prefixes double the physical size of server storage drives',
            bn: 'প্রিফিক্স সার্ভারের স্টোরেজ ড্রাইভের শারীরিক আকার দ্বিগুণ করে দেয়',
          },
          {
            en: 'Prefixes force web browser windows to turn into dark mode',
            bn: 'প্রিফিক্স ওয়েব ব্রাউজারের উইন্ডোকে নিজে থেকেই ডার্ক মোডে পরিবর্তন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Distinct prefixes enable high-fidelity automated leak detection.',
          bn: 'সুনির্দিষ্ট প্রিফিক্স ফাঁস হওয়া কি নিখুঁতভাবে স্বয়ংক্রিয় সনাক্তকরণের সুযোগ দেয়।'
        },
        explanation: {
          en: 'Random hex strings generate too many false positives. Prefixes like sk_live_ provide unambiguous signatures for automated security crawlers.',
          bn: 'শুধু র্যান্ডম সংখ্যার ওপর স্ক্যান চালালে অনেক ভুল সংকেত আসে। sk_live_ এর মতো প্রিফিক্স স্ক্যানারকে শতভাগ নির্ভুল ফলাফল দেয়।'
        },
      },
      {
        id: 'api-key-qz-3',
        kind: 'mcq',
        topic: 'ip-allowlisting-defense-in-depth',
        question: {
          en: 'How does IP allowlisting (CIDR restriction) provide critical defense-in-depth for backend service API keys?',
          bn: 'আইপি অ্যালাউলিস্টিং (CIDR রেস্ট্রিকশন) কীভাবে ব্যাকএন্ড সার্ভিস এপিআই কি-র জন্য অত্যন্ত গুরুত্বপূর্ণ বহুস্তরীয় নিরাপত্তা (Defense-in-Depth) নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Even if an attacker intercepts or steals a valid API key from code or logs, they cannot use it from their external machine because the API gateway strictly rejects requests originating outside the configured IP CIDR subnet',
            bn: 'আক্রমণকারী কোড বা লগ থেকে একটি সঠিক এপিআই কি চুরি করতে পারলেও নিজের কম্পিউটার থেকে তা ব্যবহার করতে পারবে না, কারণ এপিআই গেটওয়ে অনুমোদিত আইপি সাবনেটের বাইরের যেকোনো রিকোয়েস্ট সরাসরি আটকে দেবে',
          },
          {
            en: 'It increases the download speed of computer games by forty percent',
            bn: 'এটি কম্পিউটার গেম ডাউনলোডের গতি চল্লিশ শতাংশ পর্যন্ত বাড়িয়ে দেয়',
          },
          {
            en: 'It deletes all temporary cache files from developer laptops every hour',
            bn: 'এটি প্রতি ঘণ্টায় ডেভেলপারদের ল্যাপটপ থেকে সব অস্থায়ী ফাইল মুছে ফেলে',
          },
          {
            en: 'It forces computer keyboards to type exclusively in capital letters',
            bn: 'এটি কম্পিউটারের কিবোর্ডকে কেবল বড় হাতের অক্ষরে টাইপ হতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Network origin binding renders stolen keys useless outside allowed subnets.',
          bn: 'অনুমোদিত নেটওয়ার্কের বাইরে চুরি করা কি সম্পূর্ণ অকেজো হয়ে পড়ে।'
        },
        explanation: {
          en: 'Binding API keys to specific IP addresses creates a dual-layer requirement: the attacker must possess both the cryptographic secret AND control of the trusted network IP.',
          bn: 'নির্দিষ্ট আইপির সাথে কি বেঁধে দিলে আক্রমণকারীকে কি চুরির পাশাপাশি সেই সুরক্ষিত নেটওয়ার্কে প্রবেশ করতে হয়, যা প্রায় অসম্ভব।'
        },
      },
      {
        id: 'api-key-qz-4',
        kind: 'mcq',
        topic: 'm2m-token-delegation-oauth',
        question: {
          en: 'When microservices communicate autonomously in modern cloud systems, why is the OAuth 2.0 Client Credentials Grant preferred over static hardcoded API keys?',
          bn: 'আধুনিক ক্লাউডে মাইক্রোসার্ভিসগুলোর পারস্পরিক যোগাযোগের জন্য স্ট্যাটিক এপিআই কি-র চেয়ে OAuth ২.০ ক্লায়েন্ট ক্রেডেনশিয়াল গ্রান্ট কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'The Client Credentials grant exchanges long-lived client secrets for short-lived (e.g. 15-minute) cryptographically signed JWT access tokens containing exact scoped claims, meaning a stolen token expires rapidly',
            bn: 'ক্লায়েন্ট ক্রেডেনশিয়াল গ্রান্ট দীর্ঘস্থায়ী সিক্রেটের বিনিময়ে স্বল্পস্থায়ী ( যেমন ১৫ মিনিট ) ক্রিপ্টোগ্রাফিক সাইন করা এক্সেস টোকেন প্রদান করে, যার ফলে কোনো টোকেন চুরি হলেও তা দ্রুত মেয়াদোত্তীর্ণ হয়ে যায়',
          },
          {
            en: 'Because OAuth 2.0 makes server cooling fans turn off completely to save electricity',
            bn: 'কারণ বিদ্যুৎ সাশ্রয় করতে OAuth ২.০ সার্ভারের কুলিং ফ্যান সম্পূর্ণ বন্ধ করে দেয়',
          },
          {
            en: 'Because static API keys melt computer network cables after thirty days',
            bn: 'কারণ ত্রিশ দিন পর স্ট্যাটিক এপিআই কি ইন্টারনেটের তারকে গলিয়ে দিতে পারে',
          },
          {
            en: 'Because OAuth 2.0 eliminates the need for software developers in tech companies',
            bn: 'কারণ OAuth ২.০ প্রযুক্তি কোম্পানিগুলোতে সফটওয়্যার ডেভেলপারের প্রয়োজনীয়তা শেষ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Short-lived signed access tokens limit exposure compared to static permanent keys.',
          bn: 'স্থায়ী স্ট্যাটিক কি-র তুলনায় স্বল্পস্থায়ী সাইন করা টোকেন ফাঁসের ক্ষতি নগণ্য করে তোলে।'
        },
        explanation: {
          en: 'Static API keys are permanent until manually revoked. OAuth M2M tokens expire automatically every 15 minutes, drastically reducing exposure windows.',
          bn: 'স্ট্যাটিক কি নিজে বাতিল না করা পর্যন্ত সচল থাকে। অন্যদিকে OAuth টোকেন ১৫ মিনিট পর নিজে থেকেই অকেজো হয়ে নিরাপত্তার সর্বোচ্চ স্তর নিশ্চিত করে।'
        },
      },
    ],
  },
  next: {
    slug: 'authz-audit',
    title: {
      en: 'Authorization Auditing & Tamper-Proof Trails: Logging Decisions',
      bn: 'অথরাইজেশন অডিটিং ও ট্যাম্পার-প্রুফ ট্রেইল: সিদ্ধান্ত লগিং'
    },
  },
};
