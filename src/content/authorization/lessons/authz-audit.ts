import type { Lesson } from '../../../lib/types';

export const AuthzAuditLesson: Lesson = {
  slug: 'authz-audit',
  tech: 'authorization',
  title: {
    en: 'Authorization Auditing & Tamper-Proof Trails: Logging Decisions',
    bn: 'অথরাইজেশন অডিটিং ও ট্যাম্পার-প্রুফ ট্রেইল: সিদ্ধান্ত লগিং'
  },
  summary: {
    en: 'Understand why silent authorization denials protect attackers rather than systems. When attackers probe API architectures, their preliminary footprints appear as anomalous clusters of HTTP 403 Forbidden responses. Discover how enterprise telemetry pipelines record every access evaluation across 5 critical parameters. Implement cryptographically hash-chained, append-only audit logs where tampering with even a single historical decision breaks downstream verification.',
    bn: 'কেন নীরব অথরাইজেশন প্রত্যাখ্যান সিস্টেমের চেয়ে আক্রমণকারীকে বেশি সুরক্ষা দেয় তা জানুন। আক্রমণকারীরা যখন এপিআইতে অনুপ্রবেশের চেষ্টা করে, তখন তাদের প্রাথমিক পদচিহ্ন অস্বাভাবিক HTTP ৪০৩ ফরবিডেন এররের মাধ্যমে প্রকাশ পায়। এন্টারপ্রাইজ টেলিমেট্রি পাইপলাইন কীভাবে ৫ টি গুরুত্বপূর্ণ প্যারামিটারে প্রতিটি এক্সেস মূল্যায়ন রেকর্ড করে তা শিখুন। ক্রিপ্টোগ্রাফিক হ্যাশ-চেইনযুক্ত অ্যাপেন্ড-অনলি অডিট লগ বাস্তবায়ন করুন যেখানে অতীতের একটিমাত্র তথ্য বিকৃত করলেও পুরো চেইনের সত্যতা বিনষ্ট হয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'telemetry-and-silent-denials',
      text: {
        en: 'Why Denials Must Testify: The Danger of Silent Security Rejections',
        bn: 'প্রত্যাখ্যানের সাক্ষ্য কেন জরুরি: নীরব নিরাপত্তা বর্জনের বিপদ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When attackers attempt to penetrate an enterprise infrastructure, they do not possess valid credentials or known paths. Instead, they scan routes, test administrative parameters, fuzz object identifiers, and probe privilege escalation vectors. Every blocked probe generates an HTTP 403 Forbidden response.',
        bn: 'আক্রমণকারীরা যখন কোনো এন্টারপ্রাইজ সিস্টেমে ঢোকার চেষ্টা করে, তখন তাদের কাছে কোনো সঠিক অনুমতি বা পাসওয়ার্ড থাকে না। বরং তারা বিভিন্ন রুট স্ক্যান করে, অ্যাডমিন প্যারামিটার পরীক্ষা করে, অবজেক্ট আইডি অনুমান করে এবং ক্ষমতা বৃদ্ধির দুর্বলতা খোঁজে। প্রতিটি ব্যর্থ চেষ্টার বিপরীতে একটি করে HTTP ৪০৩ ফরবিডেন এরর তৈরি হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'If your application silently rejects unauthorized calls without logging the event, attackers enjoy complete invisibility. Denials are the footprints of an intrusion. Industry compliance standards (such as SOC2, HIPAA, PCI-DSS, and ISO 27001) mandate that every authorization decision—both ALLOW and DENY—must produce a structured, immutable telemetry event.',
        bn: 'আপনার অ্যাপ্লিকেশন যদি কোনো লগ তৈরি না করেই অননুমোদিত কলগুলোকে নীরবে আটকে দেয়, তবে আক্রমণকারী সম্পূর্ণ গোপনে তার নজরদারি চালিয়ে যাওয়ার সুযোগ পায়। অস্বীকৃতি বা রিজেকশন হলো অনুপ্রবেশকারীর রেখে যাওয়া পদচিহ্ন। আন্তর্জাতিক মানদণ্ডগুলো ( যেমন SOC2, HIPAA, PCI-DSS এবং ISO 27001 ) বাধ্যতামূলক করে যে প্রতিটি অনুমোদন ও অস্বীকৃতির (ALLOW এবং DENY) বিপরীতে একটি সুসংগঠিত ও অপরিবর্তনীয় অডিট লগ তৈরি করতে হবে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Timestamp & Request Context Capture',
            bn: '১. সময় এবং রিকোয়েস্টের প্রেক্ষাপট গ্রহণ'
          },
          text: {
            en: 'Record the precise UTC timestamp, client IP address, correlation trace ID, and originating user agent.',
            bn: 'সঠিক ইউটিসি সময়, ক্লায়েন্টের আইপি ঠিকানা, ট্রেস আইডি এবং ব্রাউজার ইউজার এজেন্টের তথ্য সংরক্ষণ করুন।'
          },
        },
        {
          title: {
            en: '2. Actor & Target Object Attribution',
            bn: '২. ব্যবহারকারী এবং উদ্দিষ্ট তথ্যের বিবরণ'
          },
          text: {
            en: 'Capture authenticated subject attributes (userId, activeRole) alongside resource target metadata (documentId, tenantId).',
            bn: 'ব্যবহারকারীর বৈশিষ্ট্য (userId, activeRole) এবং উদ্দিষ্ট তথ্যের মেটাডেটা (documentId, tenantId) একসাথে ধারণ করুন।'
          },
        },
        {
          title: {
            en: '3. Explicit Verdict & Rule Attribution',
            bn: '৩. সুনির্দিষ্ট রায় এবং নিয়মের বিবরণ'
          },
          text: {
            en: 'Record the binary verdict (ALLOW or DENY) and record the exact policy rule or missing permission that dictated the verdict.',
            bn: 'চূড়ান্ত সিদ্ধান্ত (ALLOW বা DENY) এবং যে নিয়মের কারণে এই রায় দেওয়া হয়েছে তা স্পষ্টভাবে লগে লিখুন।'
          },
        },
        {
          title: {
            en: '4. Cryptographic Hash-Chaining',
            bn: '৪. ক্রিপ্টোগ্রাফিক হ্যাশ-চেইনিং'
          },
          text: {
            en: 'Compute the SHA-256 hash of the record combined with the previous record hash, creating an append-only, tamper-evident log chain.',
            bn: 'পূর্ববর্তী লগের হ্যাশের সাথে বর্তমান লগের ডেটা যুক্ত করে একটি SHA-২৫৬ হ্যাশ তৈরি করুন, যা একটি অপরিবর্তনীয় ও ট্যাম্পার-প্রুফ চেইন গঠন করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Cryptographic Hash-Chained Audit Trail: 5 Decisions Verified',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ-চেইনযুক্ত অডিট ট্রেইল: ৫ টি সিদ্ধান্তের যাচাই'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Cryptographic hash chained audit log showing 5 decisions linked together with SHA256 hashes">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">TAMPER-EVIDENT HASH-CHAINED AUDIT TRAIL</text>
  
  <!-- Chain of 5 Log Entries -->
  <g transform="translate(30, 50)">
    <!-- Entry 0 -->
    <g transform="translate(0, 0)">
      <rect width="145" height="260" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <rect width="145" height="26" rx="6" fill="#065f46"/>
      <text x="72" y="18" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">BLOCK 0 (ALLOW)</text>
      <text x="8" y="42" fill="#38bdf8" font-size="8">actor: Alice (admin)</text>
      <text x="8" y="58" fill="#cbd5e1" font-size="8">action: publish</text>
      <text x="8" y="74" fill="#cbd5e1" font-size="8">target: doc_101</text>
      <text x="8" y="90" fill="#6ee7b7" font-size="8.5" font-weight="bold">verdict: ALLOW ✓</text>
      
      <rect x="5" y="110" width="135" height="60" rx="4" fill="#0f172a"/>
      <text x="10" y="125" fill="#94a3b8" font-size="7.5">prevHash: "00000..."</text>
      <text x="10" y="145" fill="#fcd34d" font-size="7.5">hash: "a4f8c1..."</text>
      <text x="72" y="240" fill="#10b981" font-size="8" text-anchor="middle">✓ Validated</text>
    </g>
    
    <!-- Entry 1 -->
    <g transform="translate(158, 0)">
      <rect width="145" height="260" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <rect width="145" height="26" rx="6" fill="#065f46"/>
      <text x="72" y="18" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">BLOCK 1 (ALLOW)</text>
      <text x="8" y="42" fill="#38bdf8" font-size="8">actor: Bob (editor)</text>
      <text x="8" y="58" fill="#cbd5e1" font-size="8">action: publish</text>
      <text x="8" y="74" fill="#cbd5e1" font-size="8">target: doc_102</text>
      <text x="8" y="90" fill="#6ee7b7" font-size="8.5" font-weight="bold">verdict: ALLOW ✓</text>
      
      <rect x="5" y="110" width="135" height="60" rx="4" fill="#0f172a"/>
      <text x="10" y="125" fill="#94a3b8" font-size="7.5">prevHash: "a4f8c1..."</text>
      <text x="10" y="145" fill="#fcd34d" font-size="7.5">hash: "b7e2d9..."</text>
      <text x="72" y="240" fill="#10b981" font-size="8" text-anchor="middle">✓ Validated</text>
    </g>
    
    <!-- Entry 2 (DENY) -->
    <g transform="translate(316, 0)">
      <rect width="145" height="260" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
      <rect width="145" height="26" rx="6" fill="#991b1b"/>
      <text x="72" y="18" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">BLOCK 2 (DENY)</text>
      <text x="8" y="42" fill="#38bdf8" font-size="8">actor: Charlie (viewer)</text>
      <text x="8" y="58" fill="#cbd5e1" font-size="8">action: publish</text>
      <text x="8" y="74" fill="#cbd5e1" font-size="8">target: doc_103</text>
      <text x="8" y="90" fill="#f87171" font-size="8.5" font-weight="bold">verdict: DENY ✗</text>
      
      <rect x="5" y="110" width="135" height="60" rx="4" fill="#0f172a"/>
      <text x="10" y="125" fill="#94a3b8" font-size="7.5">prevHash: "b7e2d9..."</text>
      <text x="10" y="145" fill="#fcd34d" font-size="7.5">hash: "c3a9f0..."</text>
      <text x="72" y="240" fill="#ef4444" font-size="8" text-anchor="middle">Footprint Recorded!</text>
    </g>
    
    <!-- Entry 3 -->
    <g transform="translate(474, 0)">
      <rect width="145" height="260" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <rect width="145" height="26" rx="6" fill="#065f46"/>
      <text x="72" y="18" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">BLOCK 3 (ALLOW)</text>
      <text x="8" y="42" fill="#38bdf8" font-size="8">actor: Alice (admin)</text>
      <text x="8" y="58" fill="#cbd5e1" font-size="8">action: delete</text>
      <text x="8" y="74" fill="#cbd5e1" font-size="8">target: doc_104</text>
      <text x="8" y="90" fill="#6ee7b7" font-size="8.5" font-weight="bold">verdict: ALLOW ✓</text>
      
      <rect x="5" y="110" width="135" height="60" rx="4" fill="#0f172a"/>
      <text x="10" y="125" fill="#94a3b8" font-size="7.5">prevHash: "c3a9f0..."</text>
      <text x="10" y="145" fill="#fcd34d" font-size="7.5">hash: "d81b4e..."</text>
      <text x="72" y="240" fill="#10b981" font-size="8" text-anchor="middle">✓ Validated</text>
    </g>
    
    <!-- Entry 4 -->
    <g transform="translate(632, 0)">
      <rect width="145" height="260" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <rect width="145" height="26" rx="6" fill="#065f46"/>
      <text x="72" y="18" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">BLOCK 4 (ALLOW)</text>
      <text x="8" y="42" fill="#38bdf8" font-size="8">actor: Bob (editor)</text>
      <text x="8" y="58" fill="#cbd5e1" font-size="8">action: write</text>
      <text x="8" y="74" fill="#cbd5e1" font-size="8">target: doc_105</text>
      <text x="8" y="90" fill="#6ee7b7" font-size="8.5" font-weight="bold">verdict: ALLOW ✓</text>
      
      <rect x="5" y="110" width="135" height="60" rx="4" fill="#0f172a"/>
      <text x="10" y="125" fill="#94a3b8" font-size="7.5">prevHash: "d81b4e..."</text>
      <text x="10" y="145" fill="#fcd34d" font-size="7.5">hash: "e93f7a..."</text>
      <text x="72" y="240" fill="#10b981" font-size="8" text-anchor="middle">✓ Validated</text>
    </g>
  </g>
  
  <!-- Tamper-evident proof box -->
  <g transform="translate(30, 325)">
    <rect width="775" height="75" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="20" y="24" fill="#fcd34d" font-size="10" font-weight="bold">CRYPTOGRAPHIC TAMPER-DETECTION PROOF:</text>
    <text x="20" y="44" fill="#cbd5e1" font-size="8.5">If an attacker modifies Block 2 to disguise their denial as an ALLOW, SHA256(Block 2) changes completely.</text>
    <text x="20" y="62" fill="#ef4444" font-size="8.5">Because Block 3 embeds prevHash = c3a9f0..., the chain immediately breaks at Block 3, triggering security alarms!</text>
  </g>
  
  <text x="420" y="418" fill="#94a3b8" font-size="10" text-anchor="middle">Total: 5 decisions logged → 4 ALLOW, 1 DENY. Completeness: 5/5 (100% audit coverage)</text>
</svg>`,
      caption: {
        en: 'The tamper-evident audit log chains 5 decisions with SHA-256 hashes: 4 ALLOW and 1 DENY footprint are permanently sealed.',
        bn: 'ট্যাম্পার-প্রুফ অডিট লগটি SHA-২৫৬ হ্যাশ দিয়ে ৫ টি সিদ্ধান্ত চেইনে বেঁধে রাখে: ৪ টি ALLOW এবং ১ টি DENY পদচিহ্ন স্থায়ীভাবে সংরক্ষিত।'
      },
    },
    {
      type: 'heading',
      id: 'hash-chained-logger-code',
      text: {
        en: 'Building an Append-Only Audit Logger in Node.js',
        bn: 'Node.js-এ অ্যাপেন্ড-অনলি অডিট লগার তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect this implementation of a cryptographically verified audit trail. Notice how each record embeds the SHA-256 hash of its predecessor, and how the verifyIntegrity method immediately pinpoints malicious record tampering.',
        bn: 'ক্রিপ্টোগ্রাফিক যাচাইযুক্ত একটি অডিট ট্রেইলের কোডটি লক্ষ্য করুন। দেখুন কীভাবে প্রতিটি রেকর্ড তার পূর্ববর্তী রেকর্ডের SHA-২৫৬ হ্যাশ বহন করে এবং কীভাবে verifyIntegrity মেথড তাৎক্ষণিকভাবে যেকোনো অবৈধ তথ্য বিকৃতি শনাক্ত করে ফেলে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'audit-trail-engine.js',
      code: `// Cryptographically Chained Append-Only Audit Trail
const crypto = require('crypto');

class CryptographicAuditLog {
  constructor() {
    this.chain = [];
    this.genesisHash = '0000000000000000000000000000000000000000000000000000000000000000';
  }

  // Append a new tamper-evident audit decision
  logDecision(actor, role, action, resource, decision, reason = '') {
    const prevHash = this.chain.length === 0 ? this.genesisHash : this.chain[this.chain.length - 1].hash;
    const timestamp = new Date().toISOString();

    const payload = JSON.stringify({
      index: this.chain.length,
      timestamp: timestamp,
      actor: actor,
      role: role,
      action: action,
      resource: resource,
      decision: decision,
      reason: reason,
      prevHash: prevHash
    });

    const hash = crypto.createHash('sha256').update(payload).digest('hex');

    const entry = {
      index: this.chain.length,
      timestamp: timestamp,
      actor: actor,
      role: role,
      action: action,
      resource: resource,
      decision: decision,
      reason: reason,
      prevHash: prevHash,
      hash: hash
    };

    this.chain.push(entry);
    return entry;
  }

  // Cryptographically verify entire audit chain
  verifyIntegrity() {
    for (let i = 0; i < this.chain.length; i++) {
      const current = this.chain[i];
      const expectedPrevHash = i === 0 ? this.genesisHash : this.chain[i - 1].hash;

      // Check 1: Pointer link to previous record
      if (current.prevHash !== expectedPrevHash) {
        return { intact: false, error: 'Chain broken at block ' + i + ': previous hash mismatch!' };
      }

      // Check 2: Content tamper check
      const payload = JSON.stringify({
        index: current.index,
        timestamp: current.timestamp,
        actor: current.actor,
        role: current.role,
        action: current.action,
        resource: current.resource,
        decision: current.decision,
        reason: current.reason,
        prevHash: current.prevHash
      });

      const recomputedHash = crypto.createHash('sha256').update(payload).digest('hex');
      if (recomputedHash !== current.hash) {
        return { intact: false, error: 'Tamper detected at block ' + i + ': record content was modified!' };
      }
    }

    return { intact: true, totalEntries: this.chain.length };
  }
}

const audit = new CryptographicAuditLog();

console.log('=== Step 1: Logging 5 Authorization Decisions ===');
audit.logDecision('Alice', 'admin', 'documents:publish', 'doc_101', 'ALLOW');
audit.logDecision('Bob', 'editor', 'documents:publish', 'doc_102', 'ALLOW');
audit.logDecision('Charlie', 'viewer', 'documents:publish', 'doc_103', 'DENY', 'Viewer lacks publish rights');
audit.logDecision('Alice', 'admin', 'documents:delete', 'doc_104', 'ALLOW');
audit.logDecision('Bob', 'editor', 'documents:write', 'doc_105', 'ALLOW');

console.log('Decisions logged: 5 (4 ALLOW, 1 DENY)');
console.log('Initial Chain Integrity Check:', audit.verifyIntegrity());

console.log('\\n=== Step 2: Attacker Tampering Simulation ===');
// Attacker tries to erase their footprint by modifying Block 2 to ALLOW
audit.chain[2].decision = 'ALLOW';
const tamperCheck = audit.verifyIntegrity();
console.log('Integrity Check After Tampering:', tamperCheck);`,
      caption: {
        en: 'The audit log records 5 events and immediately flags tampering when Block 2 is modified.',
        bn: 'অডিট লগটি ৫ টি ঘটনা রেকর্ড করে এবং ব্লক ২ পরিবর্তন করার সাথে সাথেই তা চিহ্নিত করে ফেলে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Denial Spike Alerting: Detecting Intruders in Real Time',
        bn: 'ডিনাই স্পাইক অ্যালার্ট: রিয়েল-টাইমে অনুপ্রবেশকারী সনাক্তকরণ'
      },
      text: {
        en: 'An occasional 403 Forbidden is normal human error (e.g. a user bookmarking an old URL). However, when a single IP address or user account generates 50 authorization denials within a 2-minute window, it indicates an automated crawler scanning for privilege escalation or IDOR vulnerabilities. Connect your audit logs to metrics monitoring (Prometheus, Datadog) and trigger automated WAF rate-limiting whenever denial rates spike above 5 times the baseline.',
        bn: 'মাঝে মধ্যে একটি ৪০৩ ফরবিডেন এরর আসা স্বাভাবিক মানুষের ভুল ( যেমন পুরানো বুকমার্কে ক্লিক করা )। কিন্তু কোনো নির্দিষ্ট আইপি বা অ্যাকাউন্ট থেকে যদি ২ মিনিটের মধ্যে ৫০ টি ডিনাই এরর আসে, তবে তা কোনো আক্রমণকারীর অনুপ্রবেশ বা IDOR দুর্বলতা খোঁজার স্পষ্ট লক্ষণ। আপনার অডিট লগকে মনিটরিং ব্যবস্থার ( প্রমিথিউস বা ডেটাডগ ) সাথে সংযুক্ত করুন এবং ডিনাই সংখ্যা স্বাভাবিকের চেয়ে ৫ গুণ বাড়লেই স্বয়ংক্রিয় WAF রেট-লিমিট চালু করে আক্রমণ আটকে দিন।'
      },
    },
  ],
  exercises: [
    {
      id: 'authz-aud-ex-1',
      kind: 'predict',
      topic: 'audit-log-denials-recorded-count',
      question: {
        en: 'Out of the 5 authorization decisions recorded in this audit demonstration, how many requests resulted in a logged DENY verdict? (1). Type the number.',
        bn: 'এই অডিট পরীক্ষায় রেকর্ড করা ৫ টি অথরাইজেশন সিদ্ধান্তের মধ্যে কয়টি রিকোয়েস্ট লগে DENY রায় পেয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 decision (Charlie attempting publish) was DENY.',
        bn: 'কেবল ১ টি সিদ্ধান্ত (চার্লির প্রকাশের চেষ্টা) DENY হয়েছিল।'
      },
      explanation: {
        en: 'Block 2 recorded exactly 1 DENY decision when Charlie (viewer) attempted an unauthorized document publication.',
        bn: 'ব্লক ২ এর মধ্যে ঠিক ১ টি DENY সিদ্ধান্ত রেকর্ড করা হয়েছিল যখন চার্লি (ভিউয়ার) অননুমোদিতভাবে ডকুমেন্ট প্রকাশের চেষ্টা করেছিল।'
      },
    },
    {
      id: 'authz-aud-ex-2',
      kind: 'mcq',
      topic: 'silent-denial-security-hazard',
      question: {
        en: 'Why is silently rejecting unauthorized requests without generating audit log events considered a dangerous security defect?',
        bn: 'কোনো অডিট লগ তৈরি না করেই অননুমোদিত রিকোয়েস্টকে নীরবে বাতিল করা কেন বিপজ্জনক নিরাপত্তা ত্রুটি হিসেবে বিবেচিত হয়?'
      },
      options: [
        {
          en: 'Because reconnaissance probes and automated privilege escalation attacks go completely undetected by security teams, allowing attackers to map vulnerabilities with zero resistance or alarms',
          bn: 'কারণ আক্রমণকারীদের প্রাথমিক অনুসন্ধান এবং স্বয়ংক্রিয় ক্ষমতা বৃদ্ধির চেষ্টাগুলো নিরাপত্তা টিমের কাছে সম্পূর্ণ অদৃশ্য থেকে যায়, ফলে আক্রমণকারী কোনো বাধা ছাড়াই সিস্টেমের দুর্বলতাগুলো চিহ্নিত করার সুযোগ পায়',
        },
        {
          en: 'Because silent rejections cause computer monitors to turn completely upside down',
          bn: 'কারণ কোনো এরর না দেখালে কম্পিউটারের মনিটর পুরোপুরি উল্টো হয়ে যায়',
        },
        {
          en: 'Because web browser windows automatically close when an error is omitted',
          bn: 'কারণ কোনো এরর না থাকলে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
        },
        {
          en: 'Because silent denials make wireless computer keyboards type numbers backward',
          bn: 'কারণ নীরব প্রত্যাখ্যানের ফলে ওয়্যারলেস কিবোর্ডে সংখ্যাগুলো উল্টোভাবে টাইপ হতে থাকে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Denials are intrusion footprints; without logs, attacks are invisible.',
        bn: 'অস্বীকৃতি হলো অনুপ্রবেশের পদচিহ্ন; লগ না থাকলে আক্রমণ অদৃশ্য থেকে যায়।'
      },
      explanation: {
        en: 'Attackers generate high volumes of 403 Forbidden errors when probing endpoints. Logging denials provides immediate visibility into intrusion attempts.',
        bn: 'আক্রমণ চালানোর সময় প্রচুর ৪০৩ এরর তৈরি হয়। এগুলো লগে ধরে রাখলে অনুপ্রবেশের ঘটনা সাথে সাথে চোখে পড়ে।'
      },
    },
    {
      id: 'authz-aud-ex-3',
      kind: 'mcq',
      topic: 'hash-chaining-integrity-guarantee',
      question: {
        en: 'How does cryptographic hash-chaining guarantee the integrity of an audit trail against malicious insider tampering?',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ-চেইনিং কীভাবে অভ্যন্তরীণ কোনো ব্যক্তির অসৎ হস্তক্ষেপের বিরুদ্ধে অডিট ট্রেইলের সত্যতা রক্ষা করে?'
      },
      options: [
        {
          en: 'Each record embeds the SHA-256 hash of the preceding record; altering or deleting any historical entry changes its hash, which immediately invalidates all downstream hash pointers across the entire chain',
          bn: 'প্রতিটি রেকর্ডে তার পূর্ববর্তী রেকর্ডের SHA-২৫৬ হ্যাশ যুক্ত থাকে; কোনো পুরানো তথ্য পরিবর্তন বা মুছে ফেললে তার হ্যাশ বদলে যায়, যার ফলে পুরো চেইনের পরবর্তী সমস্ত লিংক মুহূর্তেই অকার্যকর ও জাল হিসেবে ধরা পড়ে',
        },
        {
          en: 'It doubles the physical memory size of server solid state drives',
          bn: 'এটি সার্ভারের সলিড স্টেট ড্রাইভের শারীরিক মেমোরির আকার দ্বিগুণ করে দেয়',
        },
        {
          en: 'It turns the operating system desktop wallpaper bright blue',
          bn: 'এটি অপারেটিং সিস্টেমের ডেস্কটপের ব্যাকগ্রাউন্ড ছবি উজ্জ্বল নীল রঙে রূপান্তর করে',
        },
        {
          en: 'It forces computers to restart after every fifteen minutes of usage',
          bn: 'এটি কম্পিউটারকে প্রতি পনেরো মিনিট পর পর নিজে নিজে রিস্টার্ট হতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Modifying any block breaks the cryptographic chain of all subsequent blocks.',
        bn: 'যেকোনো একটি ব্লক পরিবর্তন করলে তার পরের সমস্ত ব্লকের ক্রিপ্টোগ্রাফিক চেইন ভেঙে যায়।'
      },
      explanation: {
        en: 'Hash-chaining provides mathematical tamper-evidence. An adversary cannot modify a record without recomputing every subsequent hash up to the chain tip.',
        bn: 'হ্যাশ-চেইনিং গাণিতিকভাবে তথ্য বিকৃতি প্রমাণ করে। একটি রেকর্ড পরিবর্তন করলে পরবর্তী প্রতিটি হ্যাশ নতুন করে তৈরি না করা পর্যন্ত জালিয়াতি লুকানো যায় না।'
      },
    },
    {
      id: 'authz-aud-ex-4',
      kind: 'predict',
      topic: 'audit-log-allows-recorded-count',
      question: {
        en: 'Out of the 5 authorization decisions recorded in this audit demonstration, how many requests resulted in a logged ALLOW verdict? (4). Type the number.',
        bn: 'এই অডিট পরীক্ষায় রেকর্ড করা ৫ টি অথরাইজেশন সিদ্ধান্তের মধ্যে কয়টি রিকোয়েস্ট লগে ALLOW রায় পেয়েছিল? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: '4 requests (Alice twice, Bob twice) were allowed.',
        bn: '৪ টি রিকোয়েস্ট (অ্যালিস দুবার, বব দুবার) অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Blocks 0, 1, 3, and 4 recorded valid ALLOW decisions for authorized actions taken by Alice and Bob.',
        bn: 'ব্লক ০, ১, ৩ এবং ৪ অ্যালিস ও ববের অনুমোদিত কাজের জন্য বৈধ ALLOW সিদ্ধান্ত রেকর্ড করেছিল।'
      },
    },
  ],
  quiz: {
    id: 'authz-audit-quiz',
    title: {
      en: 'Authorization Auditing & Security Telemetry Quiz',
      bn: 'অথরাইজেশন অডিটিং ও সিকিউরিটি টেলিমেট্রি কুইজ'
    },
    questions: [
      {
        id: 'authz-aud-qz-1',
        kind: 'mcq',
        topic: 'worm-storage-concept',
        question: {
          en: 'What is WORM (Write Once, Read Many) storage, and why is it standard practice for enterprise compliance log retention?',
          bn: 'WORM (Write Once, Read Many) স্টোরেজ কী এবং এন্টারপ্রাইজ কমপ্লায়েন্স লগের জন্য এটি কেন আন্তর্জাতিক মান হিসেবে বিবেচিত?'
        },
        options: [
          {
            en: 'Storage architecture (like AWS S3 Object Lock) that physically prevents log records from being modified or deleted by anyone—including root administrators—for a legally mandated retention duration',
            bn: 'এমন একটি স্টোরেজ ব্যবস্থা ( যেমন AWS S3 Object Lock ) যা নির্দিষ্ট আইনি সময়সীমার জন্য সিস্টেমের রুট অ্যাডমিনসহ কারও দ্বারাই কোনো লগ পরিবর্তন বা মুছে ফেলা শারীরিকভাবে সম্পূর্ণ অসম্ভব করে তোলে',
          },
          {
            en: 'A type of computer cable that carries internet signals through underground water pipes',
            bn: 'এক ধরনের ইন্টারনেটের তার যা মাটির নিচের পানির পাইপের ভেতর দিয়ে ডেটা পরিবহন করে',
          },
          {
            en: 'A software bug that causes computer speakers to play insect chirping sounds',
            bn: 'এমন একটি সফটওয়্যার বাগ যার ফলে কম্পিউটারের স্পিকার থেকে পোকার ডাকের মতো শব্দ হয়',
          },
          {
            en: 'An operating system feature that restarts computer processors every twenty hours',
            bn: 'অপারেটিং সিস্টেমের এমন একটি বৈশিষ্ট্য যা প্রতি বিশ ঘণ্টা পর পর কম্পিউটার রিস্টার্ট দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'WORM storage guarantees that logs cannot be erased even by compromised root accounts.',
          bn: 'WORM স্টোরেজ নিশ্চিত করে যে হ্যাক হওয়া রুট অ্যাকাউন্ট দিয়েও কোনো লগ মুছে ফেলা অসম্ভব।'
        },
        explanation: {
          en: 'WORM storage guarantees legal admissibility and audit compliance. Attackers with stolen credentials cannot erase their tracks.',
          bn: 'WORM স্টোরেজ অডিট কমপ্লায়েন্স নিশ্চিত করে। হ্যাকারের হাতে রুট পাসওয়ার্ড থাকলেও সে অপরাধের প্রমাণ মুছতে পারে না।'
        },
      },
      {
        id: 'authz-aud-qz-2',
        kind: 'mcq',
        topic: 'siem-denial-spike-detection',
        question: {
          en: 'How do SIEM (Security Information and Event Management) platforms detect active brute-force or IDOR vulnerability scans using authorization audit telemetry?',
          bn: 'SIEM (Security Information and Event Management) প্ল্যাটফর্মগুলো কীভাবে অথরাইজেশন অডিট টেলিমেট্রি ব্যবহার করে ব্রুট-ফোর্স বা IDOR দুর্বলতা খোঁজার আক্রমণ শনাক্ত করে?'
        },
        options: [
          {
            en: 'By establishing historical baseline denial rates and triggering automated high-priority alerts whenever an IP address or user account experiences a sudden statistical spike in HTTP 403 Forbidden events',
            bn: 'স্বাভাবিক অস্বীকৃতির একটি গড় হার নির্ধারণ করে এবং কোনো নির্দিষ্ট আইপি বা অ্যাকাউন্ট থেকে হঠাৎ করে HTTP ৪০৩ ফরবিডেন এররের তীব্র বৃদ্ধি (স্পাইক) দেখা দিলেই স্বয়ংক্রিয় উচ্চ-সতর্কবার্তা চালু করে',
          },
          {
            en: 'By making computer monitors display five colors at the same second',
            bn: 'কম্পিউটারের মনিটরে একই সেকেন্ডে পাঁচটি ভিন্ন রঙ প্রদর্শন করানোর মাধ্যমে',
          },
          {
            en: 'By shutting down all office lights whenever a user enters a password',
            bn: 'ব্যবহারকারী পাসওয়ার্ড টাইপ করার সাথে সাথে অফিসের সমস্ত বাতি নিভিয়ে দিয়ে',
          },
          {
            en: 'By changing keyboard keycaps from black plastic to white metal',
            bn: 'কিবোর্ডের বোতামগুলোকে কালো প্লাস্টিক থেকে সাদা ধাতুতে রূপান্তরিত করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Statistical spikes in 403 Forbidden errors signify automated vulnerability scanning.',
          bn: '৪০৩ ফরবিডেন এররের অস্বাভাবিক বৃদ্ধি স্বয়ংক্রিয় হ্যাকিং চেষ্টার স্পষ্ট ইঙ্গিত।'
        },
        explanation: {
          en: 'Sudden clusters of 403 errors reveal attackers testing parameters. Real-time alerting allows automated defensive isolation before breaches occur.',
          bn: 'পরপর অনেক ৪০৩ এরর আসা হ্যাকারদের প্যারামিটার খোঁজার প্রমাণ। রিয়েল-টাইম অ্যালার্ট ক্ষতি হওয়ার আগেই আক্রমণকারীকে ব্লক করার সুযোগ দেয়।'
        },
      },
      {
        id: 'authz-aud-qz-3',
        kind: 'mcq',
        topic: 'correlation-trace-ids',
        question: {
          en: 'What is the role of a Correlation ID (Trace ID) in distributed microservice authorization audit logging?',
          bn: 'ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসের অথরাইজেশন অডিট লগে কোরিলেশন আইডি বা ট্রেস আইডির (Trace ID) ভূমিকা কী?'
        },
        options: [
          {
            en: 'A unique identifier generated at the API gateway and propagated across all downstream microservice hops, allowing security incident investigators to reconstruct the exact end-to-end journey of a single user request across dozens of independent services',
            bn: 'একটি অনন্য শনাক্তকারী যা এপিআই গেটওয়েতে তৈরি হয়ে পরবর্তী প্রতিটি মাইক্রোসার্ভিসে বাহিত হয়, ফলে কোনো নিরাপত্তা ঘটনা ঘটলে তদন্তকারীরা ডজন ডজন সার্ভিসের মধ্য দিয়ে যাওয়া একটি রিকোয়েস্টের শুরু থেকে শেষ পর্যন্ত পুরো গতিপথ পুঙ্খানুপুঙ্খভাবে মেলাতে পারেন',
          },
          {
            en: 'It increases the processing speed of database hard drives by fifty percent',
            bn: 'এটি ডাটাবেজ হার্ডড্রাইভের প্রসেসিং গতি পঞ্চাশ শতাংশ পর্যন্ত বাড়িয়ে দেয়',
          },
          {
            en: 'It turns off the cooling fans of server microprocessors to save energy',
            bn: 'এটি বিদ্যুৎ সাশ্রয় করতে সার্ভারের মাইক্রোপ্রসেসরের কুলিং ফ্যান বন্ধ করে দেয়',
          },
          {
            en: 'It forces developers to write code exclusively using lowercase letters',
            bn: 'এটি ডেভেলপারদের কেবল ছোট হাতের অক্ষর দিয়ে কোড লিখতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Correlation IDs tie together log lines generated across multiple microservices.',
          bn: 'কোরিলেশন আইডি একাধিক মাইক্রোসার্ভিসের ছড়িয়ে থাকা সব লগকে একসাথে জোড়া লাগায়।'
        },
        explanation: {
          en: 'In distributed systems, a single request touches multiple services. Correlation IDs allow auditors to trace the entire transaction lifecycle seamlessly.',
          bn: 'ডিস্ট্রিবিউটেড সিস্টেমে একটি কল অনেক সার্ভিসে যায়। ট্রেস আইডি ছাড়া ঘটনার পূর্ণাঙ্গ চিত্র বের করা অসম্ভব।'
        },
      },
      {
        id: 'authz-aud-qz-4',
        kind: 'mcq',
        topic: 'pii-redaction-in-audit-logs',
        question: {
          en: 'Why must audit logging pipelines strictly sanitize and redact sensitive PII (Personally Identifiable Information) before writing audit records?',
          bn: 'অডিট রেকর্ড সংরক্ষণের আগে কেন অডিট পাইপলাইনে সংবেদনশীল ব্যক্তিগত তথ্য (PII) অবশ্যই সেনিটাইজ এবং বাদ (Redact) দিতে হয়?'
        },
        options: [
          {
            en: 'To prevent audit logs themselves from becoming high-risk breach targets; logs must record who acted on what resource without recording raw passwords, credit cards, or decrypted personal identification secrets',
            bn: 'অডিট লগ যেন নিজেই তথ্য ফাঁসের মারাত্মক ঝুঁকির কারণ না হয়ে ওঠে; লগে কে কোন তথ্যে কাজ করেছে তা থাকবে কিন্তু মূল পাসওয়ার্ড, ক্রেডিট কার্ড বা ব্যক্তিগত গোপন তথ্য কোনো অবস্থাতেই থাকবে না',
          },
          {
            en: 'Because writing personal names makes computer network cables heat up dangerously',
            bn: 'কারণ মানুষের নাম লিখলে ইন্টারনেটের তার অতিরিক্ত গরমে পুড়ে যেতে পারে',
          },
          {
            en: 'Because operating systems delete all files whose names contain vowels',
            bn: 'কারণ নামের মধ্যে স্বরবর্ণ থাকা সমস্ত ফাইল অপারেটিং সিস্টেম মুছে ফেলে',
          },
          {
            en: 'Because web browser tabs freeze when user email addresses are stored in text files',
            bn: 'কারণ টেক্সট ফাইলে ইমেইল ঠিকানা জমা রাখলে ব্রাউজারের ট্যাব নিজে থেকেই ফ্রিজ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Audit what happened without leaking raw sensitive credentials in logs.',
          bn: 'কী ঘটেছে তা লগে রেকর্ড করুন কিন্তু কোনো সংবেদনশীল গোপন তথ্য কখনোই প্রকাশ করবেন না।'
        },
        explanation: {
          en: 'Logs are widely accessible to engineers and auditors. Storing raw credentials or PII in logs violates GDPR and creates secondary security vulnerabilities.',
          bn: 'লগ অনেকেই দেখতে পান। লগে কাঁচা পাসওয়ার্ড বা সংবেদনশীল ডেটা রাখা আইন লঙ্ঘন এবং আরেকটি বড় নিরাপত্তা ঝুঁকি তৈরি করে।'
        },
      },
    ],
  },
  next: {
    slug: 'authz-capstone',
    title: {
      en: 'Enterprise Access Control Architecture: The Capstone Pipeline',
      bn: 'এন্টারপ্রাইজ এক্সেস কন্ট্রোল আর্কিটেকচার: ক্যাপস্টোন পাইপলাইন'
    },
  },
};
