import type { Lesson } from '../../../lib/types';

export const SecureCodeCapstoneLesson: Lesson = {
  slug: 'secure-code-capstone',
  tech: 'secure-coding',
  title: {
    en: 'Secure Coding Capstone: End-to-End Defensive Architecture',
    bn: 'সিকিউর কোডিং ক্যাপস্টোন: শুরু থেকে শেষ পূর্ণাঙ্গ প্রতিরক্ষামূলক আর্কিটেকচার'
  },
  summary: {
    en: 'Synthesize all defensive programming principles into a hardened, production-grade microservice gateway. Combine positive schema allowlists, contextual output encoding, zero-leakage secret handling, centralized error sanitization, software supply chain auditing, and authenticated cryptography into a unified defense-in-depth pipeline capable of repelling hostile penetration attempts.',
    bn: 'ডিফেন্সিভ প্রোগ্রামিংয়ের সমস্ত নীতি একত্র করে একটি সুরক্ষিত ও আধুনিক প্রোডাকশন-গ্রেড মাইক্রোসার্ভিস গেটওয়ে তৈরি করুন। পজিটিভ স্কিমা অ্যালাউলিস্ট, কনটেক্সচুয়াল আউটপুট এনকোডিং, তথ্য ফাঁসরোধ সিক্রেট হ্যান্ডলিং, সেন্ট্রালাইজড এরর স্যানিটাইজেশন, সাপ্লাই চেইন অডিটিং এবং অথেনটিকেটেড ক্রিপ্টোগ্রাফিকে একটি সমন্বিত মাল্টি-লেয়ার ডিফেন্স পাইপলাইনে প্রয়োগ করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-culmination-defensive-architecture',
      text: {
        en: 'The Culmination: Unifying All Defensive Layers',
        bn: 'চূড়ান্ত সমন্বয়: সমস্ত প্রতিরক্ষামূলক স্তরের একীকরণ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build production software, true application security never relies on a single protective wall. A hardened microservice architecture coordinates all defensive layers simultaneously so that if any single mechanism falters, the remaining layers withstand the assault.',
        bn: 'যখন আপনি প্রোডাকশন সফটওয়্যার তৈরি করেন, তখন সত্যিকারের নিরাপত্তা কখনোই একটিমাত্র সুরক্ষার ওপর নির্ভর করে না। একটি শক্তিশালী মাইক্রোসার্ভিস আর্কিটেকচার একই সাথে সমস্ত প্রতিরক্ষামূলক স্তর পরিচালনা করে, যাতে কোনো একটি স্তর ব্যর্থ হলেও বাকি স্তরগুলো যেকোনো আক্রমণ রুখে দিতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In this capstone, you unify every principle explored across this track into a production-grade defensive gateway. This pipeline validates incoming payloads with strict schemas and verifies bearer credentials using constant-time checks. It encrypts sensitive records with AES-256-GCM, scrubs secrets from telemetry logs, and isolates unexpected faults at a centralized boundary.',
        bn: 'এই ক্যাপস্টোন পাঠে আপনি এই ট্র্যাকে শেখা প্রতিটি নীতিকে একটি বাস্তব প্রোডাকশন-গ্রেড গেটওয়েতে রূপ দেবেন। এই পাইপলাইনটি কঠোর স্কিমা দিয়ে ইনপুট যাচাই করে এবং কনস্ট্যান্ট-টাইম অ্যালগরিদম দিয়ে টোকেন প্রমাণ করে। এটি AES-২৫৬-GCM দিয়ে গোপনীয় তথ্য এনক্রিপ্ট করে, লগ থেকে পাসওয়ার্ড আড়াল করে এবং কেন্দ্রীয় বাউন্ডারির মাধ্যমে সমস্ত এররকে নিরাপদ রাখে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Ingestion Boundary and Schema Filter',
            bn: '১. ইনপুট বাউন্ডারি এবং স্কিমা ফিল্টার'
          },
          text: {
            en: 'Enforce a strict 100KB payload limit, strip unapproved fields, and validate character formats using positive regex allowlists while rejecting prototype pollution attempts.',
            bn: 'কঠোর ১০০ কিলোবাইট সাইজ সীমা প্রয়োগ করুন, অননুমোদিত ফিল্ড বাতিল করুন এবং প্রোটোটাইপ পলিউশন ঠেকিয়ে পজিটিভ রেজেক্স দিয়ে ডাটা যাচাই করুন।'
          },
        },
        {
          title: {
            en: '2. Cryptographic Authentication & Timing Defense',
            bn: '২. ক্রিপ্টোগ্রাফিক লগইন ও টাইমিং প্রতিরক্ষা'
          },
          text: {
            en: 'Inspect Bearer authorization tokens using constant-time buffer equality to eliminate microsecond timing leaks during credential verification.',
            bn: 'টোকেন যাচাইয়ের সময় কনস্ট্যান্ট-টাইম বাফার চেকার ব্যবহার করুন যাতে মাইক্রোসেকেন্ড সময়ের ব্যবধান মেপে কোনো তথ্য চুরি করা না যায়।'
          },
        },
        {
          title: {
            en: '3. Authenticated Cryptography at Rest (AES-256-GCM)',
            bn: '৩. অথেনটিকেটেড এনক্রিপশন (AES-২৫৬-GCM)'
          },
          text: {
            en: 'Encrypt confidential records at rest using AES-256-GCM, generating a fresh 12-byte random IV for every transaction to guarantee confidentiality and tamper resistance.',
            bn: 'গোপনীয় তথ্য সংরক্ষণে AES-২৫৬-GCM ব্যবহার করুন এবং প্রতিবার একটি নতুন ১২ বাইট র্যান্ডম IV তৈরি করে তথ্যের গোপনীয়তা ও অবিকৃত অবস্থা নিশ্চিত করুন।'
          },
        },
        {
          title: {
            en: '4. Contextual Sanitization and Output Encoding',
            bn: '৪. কনটেক্সচুয়াল স্যানিটাইজেশন ও আউটপুট এনকোডিং'
          },
          text: {
            en: 'Before reflecting any user-supplied strings into web views, apply contextual escaping matching the target browser parsing context (HTML body, attributes, scripts, or URLs).',
            bn: 'ওয়েব পেজে ব্যবহারকারীর কোনো ডাটা দেখানোর আগে ব্রাউজারের সুনির্দিষ্ট কনটেক্সটের ( বডি, অ্যাট্রিবিউট বা স্ক্রিপ্ট ) সাথে মিলিয়ে এনকোডিং প্রয়োগ করুন।'
          },
        },
        {
          title: {
            en: '5. Centralized Error Boundary & Log Scrubbing',
            bn: '৫. সেন্ট্রালাইজড এরর বাউন্ডারি ও লগ স্ক্রাবিং'
          },
          text: {
            en: 'Catch unexpected runtime faults, generate a correlation tracking ID, scrub passwords and tokens from internal logs, and return clean generic HTTP 500 JSON to clients.',
            bn: 'যেকোনো অপ্রত্যাশিত ক্র্যাশ আটকে দিন, ট্র্যাকিং রিকোয়েস্ট আইডি তৈরি করুন, লগ থেকে পাসওয়ার্ড গোপন রাখুন এবং ক্লায়েন্টকে নিরাপদ সাধারণ ৫০০ এরর প্রদান করুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Complete 5-Layer Defense-in-Depth Architecture Pipeline',
        bn: 'সম্পূর্ণ ৫-স্তরী বহুস্তর বিশিষ্ট প্রতিরক্ষামূলক আর্কিটেকচার পাইপলাইন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="End to end defensive pipeline showing ingestion filter, constant-time auth, AEAD encryption, contextual output encoding, and error boundary">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">END-TO-END DEFENSE-IN-DEPTH GATEWAY ARCHITECTURE</text>
  
  <!-- Ingestion -->
  <g transform="translate(30, 48)">
    <rect width="140" height="350" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="70" y="24" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">LAYER 1</text>
    <text x="70" y="38" fill="#f8fafc" font-size="9" text-anchor="middle">INGESTION</text>
    
    <g transform="translate(10, 50)">
      <rect width="120" height="70" rx="4" fill="#0f172a"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8">• 100KB Size Cap</text>
      <text x="10" y="36" fill="#6ee7b7" font-size="8">• Canonicalize</text>
      <text x="10" y="52" fill="#6ee7b7" font-size="8">• Schema Allow</text>
      
      <rect y="80" width="120" height="85" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#ef4444" font-size="8" font-weight="bold">BLOCKED:</text>
      <text x="10" y="36" fill="#fca5a5" font-size="7">• Large DoS bodies</text>
      <text x="10" y="52" fill="#fca5a5" font-size="7">• Mass assignment</text>
      <text x="10" y="68" fill="#fca5a5" font-size="7">• Prototype inject</text>
    </g>
  </g>
  
  <!-- Auth -->
  <g transform="translate(185, 48)">
    <rect width="140" height="350" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="24" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">LAYER 2</text>
    <text x="70" y="38" fill="#f8fafc" font-size="9" text-anchor="middle">AUTHENTICATION</text>
    
    <g transform="translate(10, 50)">
      <rect width="120" height="70" rx="4" fill="#0f172a"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8">• Bearer Check</text>
      <text x="10" y="36" fill="#6ee7b7" font-size="8">• timingSafeEqual</text>
      <text x="10" y="52" fill="#6ee7b7" font-size="8">• CSPRNG Token</text>
      
      <rect y="80" width="120" height="85" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#ef4444" font-size="8" font-weight="bold">BLOCKED:</text>
      <text x="10" y="36" fill="#fca5a5" font-size="7">• Timing side-chans</text>
      <text x="10" y="52" fill="#fca5a5" font-size="7">• Math.random()</text>
      <text x="10" y="68" fill="#fca5a5" font-size="7">• User enumeration</text>
    </g>
  </g>
  
  <!-- Crypto -->
  <g transform="translate(340, 48)">
    <rect width="150" height="350" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="75" y="24" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">LAYER 3</text>
    <text x="75" y="38" fill="#f8fafc" font-size="9" text-anchor="middle">CRYPTOGRAPHY</text>
    
    <g transform="translate(10, 50)">
      <rect width="130" height="70" rx="4" fill="#0f172a"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8">• AES-256-GCM</text>
      <text x="10" y="36" fill="#6ee7b7" font-size="8">• Fresh 12-byte IV</text>
      <text x="10" y="52" fill="#6ee7b7" font-size="8">• 16-byte Auth Tag</text>
      
      <rect y="80" width="130" height="85" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#ef4444" font-size="8" font-weight="bold">BLOCKED:</text>
      <text x="10" y="36" fill="#fca5a5" font-size="7">• Ciphertext tamper</text>
      <text x="10" y="52" fill="#fca5a5" font-size="7">• IV reuse leaks</text>
      <text x="10" y="68" fill="#fca5a5" font-size="7">• Plaintext storage</text>
    </g>
  </g>
  
  <!-- Output -->
  <g transform="translate(505, 48)">
    <rect width="145" height="350" rx="6" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <text x="72" y="24" fill="#818cf8" font-size="10" font-weight="bold" text-anchor="middle">LAYER 4</text>
    <text x="72" y="38" fill="#f8fafc" font-size="9" text-anchor="middle">OUTPUT ENCODE</text>
    
    <g transform="translate(10, 50)">
      <rect width="125" height="70" rx="4" fill="#0f172a"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8">• Contextual Escape</text>
      <text x="10" y="36" fill="#6ee7b7" font-size="8">• textContent APIs</text>
      <text x="10" y="52" fill="#6ee7b7" font-size="8">• CSP Nonces</text>
      
      <rect y="80" width="125" height="85" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#ef4444" font-size="8" font-weight="bold">BLOCKED:</text>
      <text x="10" y="36" fill="#fca5a5" font-size="7">• Script injections</text>
      <text x="10" y="52" fill="#fca5a5" font-size="7">• Attribute breakout</text>
      <text x="10" y="68" fill="#fca5a5" font-size="7">• javascript: URLs</text>
    </g>
  </g>
  
  <!-- Boundary -->
  <g transform="translate(665, 48)">
    <rect width="145" height="350" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
    <text x="72" y="24" fill="#ec4899" font-size="10" font-weight="bold" text-anchor="middle">LAYER 5</text>
    <text x="72" y="38" fill="#f8fafc" font-size="9" text-anchor="middle">ERROR BOUNDARY</text>
    
    <g transform="translate(10, 50)">
      <rect width="125" height="70" rx="4" fill="#0f172a"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8">• Correlation ID</text>
      <text x="10" y="36" fill="#6ee7b7" font-size="8">• Log Scrubbing</text>
      <text x="10" y="52" fill="#6ee7b7" font-size="8">• Fail-Closed</text>
      
      <rect y="80" width="125" height="85" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#ef4444" font-size="8" font-weight="bold">BLOCKED:</text>
      <text x="10" y="36" fill="#fca5a5" font-size="7">• Leaked stacktrace</text>
      <text x="10" y="52" fill="#fca5a5" font-size="7">• Server paths</text>
      <text x="10" y="68" fill="#fca5a5" font-size="7">• Schema discovery</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">The 5 defensive layers operate in harmony: every request is filtered, authenticated, encrypted, encoded, and scrubbed</text>
</svg>`,
      caption: {
        en: 'The unified 5-layer pipeline: strict input filtering, constant-time auth, AEAD encryption, contextual output encoding, and centralized error handling.',
        bn: 'সমন্বিত ৫-স্তরী পাইপলাইন: কঠোর ইনপুট ফিল্টারিং, কনস্ট্যান্ট-টাইম লগইন, AEAD এনক্রিপশন, কনটেক্সচুয়াল আউটপুট এনকোডিং এবং কেন্দ্রীয় এরর ব্যবস্থাপনা।'
      },
    },
    {
      type: 'heading',
      id: 'hardened-gateway-code',
      text: {
        en: 'The Hardened Microservice Gateway Engine',
        bn: 'নিরাপদ মাইক্রোসার্ভিস গেটওয়ে ইঞ্জিন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how these 5 protective mechanisms collaborate to form an impenetrable software boundary, inspect the following complete microservice gateway. It processes incoming transactions through each defensive layer sequentially.',
        bn: 'এই ৫ টি প্রতিরক্ষামূলক ব্যবস্থা কীভাবে একসাথে কাজ করে একটি দুর্ভেদ্য সফটওয়্যার বাউন্ডারি তৈরি করে তা দেখতে নিচের পূর্ণাঙ্গ গেটওয়ে কোডটি লক্ষ্য করুন। এটি প্রতিটি ইনকামিং ট্রানজেকশনকে ক্রমান্বয়ে প্রতিটি স্তরের মধ্য দিয়ে চালনা করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'defensive-production-gateway.js',
      code: `// Enterprise Defensive Microservice Gateway Pipeline
const crypto = require('crypto');

class DefensiveProductionGateway {
  constructor(validBearerToken) {
    this.expectedTokenBuf = Buffer.from(validBearerToken);
    this.encryptionKey = crypto.randomBytes(32); // AES-256 Key
  }

  processTransaction(authHeader, rawJsonPayload) {
    const correlationId = 'req-' + Math.random().toString(36).substring(2, 9);

    try {
      // LAYER 1: Authentication & Constant-Time Verification
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { status: 401, error: 'Unauthorized request', requestId: correlationId };
      }
      const token = authHeader.slice(7);
      const tokenBuf = Buffer.from(token);

      if (tokenBuf.length !== this.expectedTokenBuf.length || !crypto.timingSafeEqual(tokenBuf, this.expectedTokenBuf)) {
        return { status: 401, error: 'Invalid credentials', requestId: correlationId };
      }

      // LAYER 2: Input Ingestion & Schema Allowlist
      if (!rawJsonPayload || typeof rawJsonPayload !== 'object' || Array.isArray(rawJsonPayload)) {
        return { status: 400, error: 'Malformed JSON payload', requestId: correlationId };
      }

      // Reject prototype keys
      if (rawJsonPayload.__proto__ !== Object.prototype) {
        return { status: 400, error: 'Security violation: prototype tampering blocked', requestId: correlationId };
      }

      const rawUsername = rawJsonPayload.username;
      if (typeof rawUsername !== 'string' || !/^[a-zA-Z0-9_]{3,16}$/.test(rawUsername)) {
        return { status: 400, error: 'Username must be 3-16 alphanumeric characters', requestId: correlationId };
      }

      // LAYER 3: Authenticated Cryptography at Rest (AES-256-GCM)
      const iv = crypto.randomBytes(12);
      const cipher = crypto.createCipheriv('aes-256-gcm', this.encryptionKey, iv);
      let encryptedPayload = cipher.update(JSON.stringify(rawJsonPayload), 'utf8', 'hex');
      encryptedPayload += cipher.final('hex');
      const authTag = cipher.getAuthTag().toString('hex');

      // LAYER 4: Output Encoding (Safe reflection)
      const safeDisplayUsername = rawUsername
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // LAYER 5: Centralized Logging with Scrubbing
      console.log('[AUDIT LOG] ' + JSON.stringify({
        requestId: correlationId,
        user: safeDisplayUsername,
        action: 'TRANSACTION_SUCCESS',
        ciphertextLength: encryptedPayload.length
      }));

      return {
        status: 200,
        data: {
          username: safeDisplayUsername,
          storageReceipt: encryptedPayload.slice(0, 16) + '...',
          iv: iv.toString('hex'),
          authTag: authTag
        },
        requestId: correlationId
      };
    } catch (unhandledException) {
      // Central Error Boundary catches crashes; masks internals
      console.error('[CRASH LOG] ' + correlationId + ': ' + unhandledException.message);
      return {
        status: 500,
        error: 'An internal error occurred. Please contact support.',
        requestId: correlationId
      };
    }
  }
}

const masterToken = 'super-secret-auth-bearer-token-32!';
const gateway = new DefensiveProductionGateway(masterToken);

console.log('=== Scenario 1: Rejecting Invalid Auth Token (Timing-Safe) ===');
const res1 = gateway.processTransaction('Bearer wrong-password-xyz', { username: 'alice' });
console.log('Result:', res1);

console.log('\\n=== Scenario 2: Rejecting Script Injection Payload ===');
const res2 = gateway.processTransaction('Bearer ' + masterToken, { username: '<script>alert(1)</script>' });
console.log('Result:', res2);

console.log('\\n=== Scenario 3: Successfully Processing Valid Request ===');
const res3 = gateway.processTransaction('Bearer ' + masterToken, { username: 'alice_crypto' });
console.log('Result:', res3);`,
      caption: {
        en: 'The gateway validates authentication, checks schemas, encrypts data at rest, and intercepts faults cleanly.',
        bn: 'গেটওয়েটি প্রমাণীকরণ যাচাই করে, স্কিমা পরীক্ষা করে, ডাটা এনক্রিপ্ট করে এবং যেকোনো এরর সফলভাবে নিয়ন্ত্রণ করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'The Zero Trust Architecture Mindset in Enterprise Systems',
        bn: 'বাণিজ্যিক সিস্টেমে জিরো ট্রাস্ট আর্কিটেকচারের দৃষ্টিভঙ্গি'
      },
      text: {
        en: 'Security is not a single feature to complete; it is an ongoing discipline of assuming breach. Treat internal microservices as if they were running directly on the public internet. Authenticate every call using mutual TLS (mTLS), validate schemas across every inter-service boundary, rotate cryptographic keys every 90 days, and audit third-party dependencies continuously. When every system boundary operates with zero implicit trust, single-point vulnerabilities cannot compromise the fleet.',
        bn: 'নিরাপত্তা কোনো এককালীন ফিচার নয়; এটি হলো যেকোনো সময় সিস্টেম আক্রান্ত হতে পারে—এই মানসিকতা বজায় রাখার শৃঙ্খলা। ভেতরের মাইক্রোসার্ভিসগুলোকে এমনভাবে বিবেচনা করুন যেন সেগুলো উন্মুক্ত ইন্টারনেটে চলছে। প্রতিটি সার্ভিসের মধ্যে মিউচুয়াল TLS (mTLS) দিয়ে অথেনটিকেশন নিশ্চিত করুন, প্রতি ৯০ দিনে ক্রিপ্টোগ্রাফিক চাবি পরিবর্তন করুন এবং নিয়মিত থার্ড-পার্টি লাইব্রেরি অডিট করুন। যখন সিস্টেমে কোনো অন্ধ বিশ্বাস থাকে না, তখন ছোটখাটো ত্রুটি পুরো নেটওয়ার্ককে ক্ষতিগ্রস্ত করতে পারে না।'
      },
    },
  ],
  exercises: [
    {
      id: 'cap-sec-ex-1',
      kind: 'predict',
      topic: 'capstone-defensive-layers',
      question: {
        en: 'How many primary defensive layers (Ingestion, Auth, Cryptography, Output, Error Boundary) form this unified architecture? (5). Type the number.',
        bn: 'এই সমন্বিত আর্কিটেকচারে সর্বমোট কয়টি প্রধান প্রতিরক্ষামূলক স্তর ( ইনপুট, লগইন, ক্রিপ্টোগ্রাফি, আউটপুট, এরর বাউন্ডারি ) গঠন করা হয়েছে? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'Count the 5 architectural layers.',
        bn: '৫ টি আর্কিটেকচারাল স্তর গণনা করুন।'
      },
      explanation: {
        en: 'The 5 coordinated layers ensure defense-in-depth from incoming request parsing to persistent storage and error reporting.',
        bn: 'এই ৫ টি সমন্বিত স্তর ইনপুট পার্সিং থেকে শুরু করে ডাটা সংরক্ষণ ও এরর হ্যান্ডলিং পর্যন্ত বহুস্তরী নিরাপত্তা দেয়।'
      },
    },
    {
      id: 'cap-sec-ex-2',
      kind: 'mcq',
      topic: 'zero-trust-architecture-model',
      question: {
        en: 'Why must enterprise cloud architectures adhere to the Zero Trust security model?',
        bn: 'বাণিজ্যিক ক্লাউড আর্কিটেকচারে জিরো ট্রাস্ট নিরাপত্তা মডেল অনুসরণ করা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Zero Trust assumes adversaries are already present within internal network perimeters, requiring continuous cryptographic authentication and boundary validation for every internal service transaction',
          bn: 'জিরো ট্রাস্ট ধরে নেয় যে আক্রমণকারীরা ইতিমধ্যেই অভ্যন্তরীণ নেটওয়ার্কে প্রবেশ করে থাকতে পারে, ফলে প্রতিটি সার্ভিসের প্রতিটি লেনদেনের জন্য অবিরাম ক্রিপ্টোগ্রাফিক যাচাই বাধ্যতামূলক হয়',
        },
        {
          en: 'Because Zero Trust allows computers to operate without electrical energy',
          bn: 'কারণ জিরো ট্রাস্ট কম্পিউটারগুলোকে বিদ্যুৎ সংযোগ ছাড়াই চলার সুযোগ করে দেয়',
        },
        {
          en: 'Because Zero Trust prevents computer displays from ever getting dusty',
          bn: 'কারণ জিরো ট্রাস্ট কম্পিউটার মনিটরে ধুলাবালি জমা স্থায়ীভাবে বন্ধ করে দেয়',
        },
        {
          en: 'Because Zero Trust reduces developer typing speed by fifty percent',
          bn: 'কারণ জিরো ট্রাস্ট ডেভেলপারের টাইপিং গতি শতকরা ৫০ ভাগ কমিয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Zero Trust eliminates implicit perimeter trust, validating every request.',
        bn: 'জিরো ট্রাস্ট কোনো অন্ধ বিশ্বাস রাখে না এবং প্রতিটি রিকোয়েস্ট যাচাই করে।',
      },
      explanation: {
        en: 'Perimeter defenses fail when a single internal device is compromised. Zero Trust ensures defense-in-depth across all service hops.',
        bn: 'ভেতরের একটি ডিভাইস হ্যাক হলেও জিরো ট্রাস্টের কারণে পুরো সিস্টেমের ক্ষতি রোধ করা সম্ভব হয়।'
      },
    },
    {
      id: 'cap-sec-ex-3',
      kind: 'mcq',
      topic: 'centralized-error-boundary',
      question: {
        en: 'What happens when an unexpected database exception is caught by the gateway central error boundary?',
        bn: 'গেটওয়ের সেন্ট্রাল এরর বাউন্ডারিতে কোনো অপ্রত্যাশিত ডাটাবেজ ক্র্যাশ ধরা পড়লে কী ঘটে?'
      },
      options: [
        {
          en: 'The boundary writes full diagnostic error details and correlation IDs to private telemetry logs while returning a safe, generic HTTP 500 error to the client',
          bn: 'বাউন্ডারিটি প্রাইভেট সার্ভার লগে সম্পূর্ণ স্ট্যাক ট্রেস এবং রিকোয়েস্ট আইডি সংরক্ষণ করে এবং ক্লায়েন্টকে একটি নিরাপদ ও সাধারণ HTTP ৫০০ এরর ফেরত পাঠায়',
        },
        {
          en: 'The server hard drive is physically ejected from the rack into the air',
          bn: 'সার্ভারের হার্ড ড্রাইভটি র্যাক থেকে শূন্যে ছিটকে বাইরে বেরিয়ে আসে',
        },
        {
          en: 'The website automatically deletes all registered user accounts forever',
          bn: 'ওয়েবসাইটটি নিজে থেকেই সমস্ত নিবন্ধিত ইউজার একাউন্ট চিরতরে মুছে ফেলে',
        },
        {
          en: 'All internet network cables change color from blue to red',
          bn: 'সমস্ত ইন্টারনেট নেটওয়ার্ক কেবলের রঙ নীল থেকে লাল হয়ে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'The boundary sanitizes client errors while logging raw traces internally.',
        bn: 'বাউন্ডারি ক্লায়েন্টের এররকে নিরীহ বানায় এবং আসল তথ্য সার্ভার লগে রাখে।',
      },
      explanation: {
        en: 'Central error handling safeguards internal filesystem paths and queries from public exposure while keeping full traces for support engineers.',
        bn: 'কেন্দ্রীয় এরর হ্যান্ডলিং অভ্যন্তরীণ ফাইল পাথ গোপন রেখে ইঞ্জিনিয়ারদের তদন্তের জন্য প্রাইভেট লগে তথ্য রাখে।'
      },
    },
    {
      id: 'cap-sec-ex-4',
      kind: 'predict',
      topic: 'compliance-key-rotation',
      question: {
        en: 'If an enterprise compliance policy requires cryptographic key rotation every 90 days, how many days is that interval? (90). Type the number.',
        bn: 'কোনো প্রতিষ্ঠানের নীতিমালায় যদি প্রতি ৯০ দিনে ক্রিপ্টোগ্রাফিক চাবি পরিবর্তনের নির্দেশ থাকে, তবে সেই বিরতি কত দিনের? ( ৯০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '90',
      hint: {
        en: 'The rotation schedule is 90 days.',
        bn: 'রোটেশন সূচি হলো ৯০ দিন।'
      },
      explanation: {
        en: 'Regular 90-day key rotations limit the exposure window if an encryption key is ever leaked without detection.',
        bn: 'নিয়মিত ৯০ দিনের রোটেশন নীতি কোনো চাবি অজান্তে ফাঁস হলেও সম্ভাব্য বিপদের সময়সীমা কমিয়ে আনে।'
      },
    },
  ],
  quiz: {
    id: 'secure-code-capstone-quiz',
    title: {
      en: 'Secure Coding Capstone Architecture Quiz',
      bn: 'সিকিউর কোডিং ক্যাপস্টোন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'cap-sec-qz-1',
        kind: 'mcq',
        topic: 'defense-in-depth-combination',
        question: {
          en: 'How does combining input allowlisting with contextual output encoding provide true Defense-in-Depth against cross-site scripting?',
          bn: 'ইনপুট অ্যালাউলিস্টের সাথে কনটেক্সচুয়াল আউটপুট এনকোডিং একত্র করলে কীভাবে XSS-এর বিরুদ্ধে সত্যিকারের বহুস্তরী প্রতিরক্ষা তৈরি হয়?'
        },
        options: [
          {
            en: 'Input allowlisting prevents malicious syntax characters from entering the database, while output encoding guarantees that even if hostile data bypassed validation, it renders inertly as display text in the browser',
            bn: 'ইনপুট অ্যালাউলিস্ট ডাটাবেজে ক্ষতিকর কোড ঢোকা শুরুতেই আটকে দেয়, আর আউটপুট এনকোডিং নিশ্চিত করে যে কোনো ডাটা ভুলবশত ভ্যালিডেশন এড়িয়ে গেলেও ব্রাউজারে তা কেবল সাধারণ লেখা হিসেবেই রেন্ডার হবে',
          },
          {
            en: 'Because combining them eliminates the need for computer monitors',
            bn: 'কারণ এদের একত্র করলে কম্পিউটারের কোনো মনিটরের প্রয়োজন থাকে না',
          },
          {
            en: 'Because input allowlisting makes website text thirty percent larger',
            bn: 'কারণ ইনপুট অ্যালাউলিস্ট ওয়েবসাইটের লেখার আকার ৩০ শতাংশ বড় করে দেয়',
          },
          {
            en: 'Because output encoding changes the internet protocol into Morse code',
            bn: 'কারণ আউটপুট এনকোডিং পুরো ইন্টারনেট প্রটোকলকে মোর্স কোডে বদলে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Input allowlists restrict data entry; output encoding neutralizes rendering.',
          bn: 'ইনপুট ফিল্টার ডাটা ঢোকা আটকায়; আউটপুট এনকোডিং পেজে দেখানোকে নিরাপদ করে।',
        },
        explanation: {
          en: 'Relying on either layer alone leaves single points of failure. The combination ensures complete containment at both ends.',
          bn: 'যেকোনো একটির ওপর নির্ভর করা বিপজ্জনক। উভয় স্তর একসাথে থাকলে শুরু এবং শেষ দুই প্রান্তেই সম্পূর্ণ নিরাপত্তা নিশ্চিত হয়।'
        },
      },
      {
        id: 'cap-sec-qz-2',
        kind: 'mcq',
        topic: 'zero-trust-mtls',
        question: {
          en: 'Why is mutual TLS (mTLS) combined with token authentication considered essential under Zero Trust microservices?',
          bn: 'জিরো ট্রাস্ট মাইক্রোসার্ভিসে টোকেন অথেনটিকেশনের সাথে মিউচুয়াল TLS (mTLS) ব্যবহার করা কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'mTLS cryptographically authenticates both client and server microservices using X.509 certificates and encrypts internal traffic in transit, while tokens verify specific end-user permissions',
            bn: 'mTLS উভয় মাইক্রোসার্ভিসের নিজস্ব পরিচয় সার্টিফিকেট দিয়ে যাচাই করে এবং অভ্যন্তরীণ নেটওয়ার্ক ট্রাফিক এনক্রিপ্ট করে, আর টোকেন সুনির্দিষ্ট ব্যবহারকারীর অনুমতি নিশ্চিত করে',
          },
          {
            en: 'Because mTLS makes computer cooling fans completely silent',
            bn: 'কারণ mTLS কম্পিউটারের কুলিং ফ্যানের শব্দ সম্পূর্ণ বন্ধ করে দেয়',
          },
          {
            en: 'Because certificates replace the need for computer programming languages',
            bn: 'কারণ ডিজিটাল সার্টিফিকেট কম্পিউটার প্রোগ্রামিং ভাষার প্রয়োজনীয়তা শেষ করে দেয়',
          },
          {
            en: 'Because mTLS makes website links open in separate windows',
            bn: 'কারণ mTLS ওয়েবসাইটের সমস্ত লিংক আলাদা নতুন উইন্ডোতে খুলে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'mTLS proves service identity and encrypts traffic; tokens authorize user actions.',
          bn: 'mTLS সার্ভিসের পরিচয় প্রমাণ করে ডাটা এনক্রিপ্ট করে; টোকেন ইউজারের অনুমতি নিশ্চিত করে।',
        },
        explanation: {
          en: 'Even inside the VPC, traffic can be snooped if unencrypted. mTLS authenticates both endpoints and encrypts all service-to-service transit.',
          bn: 'ক্লাউড নেটওয়ার্কের ভেতরেও ডাটা চুরি হতে পারে। mTLS সার্ভিসের পরিচয় ও গোপনীয়তা দুই-ই নিশ্চিত করে।'
        },
      },
      {
        id: 'cap-sec-qz-3',
        kind: 'mcq',
        topic: 'correlation-id-observability',
        question: {
          en: 'How do correlation request IDs balance security obfuscation with operational engineering efficiency?',
          bn: 'কোরিলেশন রিকোয়েস্ট আইডি কীভাবে তথ্যের গোপনীয়তা রক্ষা এবং সাপোর্ট ইঞ্জিনিয়ারদের কাজের দক্ষতার মধ্যে ভারসাম্য তৈরি করে?'
        },
        options: [
          {
            en: 'Clients receive an opaque token to reference when opening support tickets, while engineers use that exact token to search internal private log stores for full stack traces and diagnostic variables',
            bn: 'ক্লায়েন্ট একটি আপাত-অর্থহীন ট্র্যাকিং আইডি পায় যা দিয়ে তারা সাপোর্টে যোগাযোগ করতে পারে, আর ইঞ্জিনিয়াররা সেই একই আইডি দিয়ে প্রাইভেট লগে খুঁজে সম্পূর্ণ স্ট্যাক ট্রেস দেখতে পান',
          },
          {
            en: 'Correlation IDs turn off internet connections whenever an error happens',
            bn: 'কোনো এরর ঘটলেই কোরিলেশন আইডি ইন্টারনেট সংযোগ সাথে সাথে বন্ধ করে দেয়',
          },
          {
            en: 'Correlation IDs automatically translate SQL queries into spoken audio',
            bn: 'কোরিলেশন আইডি ডাটাবেজ কুয়েরিকে স্বয়ংক্রিয়ভাবে মানুষের কণ্ঠস্বরে রূপান্তর করে',
          },
          {
            en: 'Correlation IDs prevent the computer processor from ever heating up',
            bn: 'কোরিলেশন আইডি কম্পিউটারের প্রসেসর অতিরিক্ত গরম হওয়া চিরতরে রোধ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Correlation IDs allow engineers to locate detailed logs without public leakage.',
          bn: 'রিকোয়েস্ট আইডি তথ্য ফাঁস না করে সাপোর্ট ইঞ্জিনিয়ারদের নিখুঁত অনুসন্ধানে সাহায্য করে।',
        },
        explanation: {
          en: 'Attackers see no filesystem or database hints in the opaque ID, but engineers have complete observability in private observability platforms.',
          bn: 'হ্যাকাররা সাধারণ আইডি থেকে কোনো তথ্য জানতে পারে না, অথচ প্রকৌশলীরা প্রাইভেট লগে সম্পূর্ণ ডায়াগনস্টিক পান।'
        },
      },
      {
        id: 'cap-sec-qz-4',
        kind: 'mcq',
        topic: 'supply-chain-defense-strategy',
        question: {
          en: 'What is the most effective ongoing strategy for protecting enterprise systems against zero-day supply chain vulnerabilities?',
          bn: 'নতুন কোনো জিরো-ডে সফটওয়্যার সাপ্লাই চেইন দুর্বলতা থেকে বাণিজ্যিক সিস্টেমকে রক্ষা করার সবচেয়ে কার্যকর নিয়মিত কৌশল কোনটি?'
        },
        options: [
          {
            en: 'Automating Software Bill of Materials (SBOM) generation, continuously monitoring registry security advisories, enforcing lockfile SHA-512 hashes with npm ci, and running automated dependency update PRs with Dependabot',
            bn: 'স্বয়ংক্রিয় SBOM তৈরি করা, নিয়মিত সিকিউরিটি নোটিশ পর্যবেক্ষণ করা, npm ci দিয়ে SHA-৫১২ হ্যাশ নিশ্চিত করা এবং ডিপেন্ডাবটের মাধ্যমে স্বয়ংক্রিয়ভাবে ডিপেন্ডেন্সি আপডেট করা',
          },
          {
            en: 'Never updating any software packages for twenty consecutive years',
            bn: 'টানা ২০ বছর ধরে সফটওয়্যারের কোনো প্যাকেজ বা লাইব্রেরি কখনোই আপডেট না করা',
          },
          {
            en: 'Disabling computer antivirus software to make build pipelines run faster',
            bn: 'বিল্ড পাইপলাইনের গতি বাড়ানোর উদ্দেশ্যে কম্পিউটারের অ্যান্টিভাইরাস বন্ধ করে রাখা',
          },
          {
            en: 'Deleting the package.json file before compiling applications',
            bn: 'অ্যাপ্লিকেশন কম্পাইল করার ঠিক আগে package.json ফাইলটি মুছে ফেলা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Continuous SBOM tracking, lockfile integrity, and automated security updates defeat supply chain risks.',
          bn: 'নিয়মিত SBOM ট্র্যাকিং, লকফাইল হ্যাশ এবং অটোমেটেড আপডেট সাপ্লাই চেইন ঝুঁকি হ্রাস করে।',
        },
        explanation: {
          en: 'Supply chain defense requires a continuous pipeline: verified lockfiles, reproducible builds, and automated vulnerability scanning with prompt patching.',
          bn: 'সাপ্লাই চেইন নিরাপত্তায় নিয়মিত লকফাইল যাচাই, অপরিবর্তনীয় বিল্ড এবং তাৎক্ষণিক প্যাচিংয়ের সমন্বিত পাইপলাইন অপরিহার্য।'
        },
      },
    ],
  },
};
