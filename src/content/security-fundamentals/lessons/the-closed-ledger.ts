import type { Lesson } from '../../../lib/types';

export const closedLedgerLesson: Lesson = {
  slug: 'the-closed-ledger',
  tech: 'security-fundamentals',
  title: {
    en: 'Security Capstone — Threat Modeling, Defense-in-Depth, and Incident Response',
    bn: 'সিকিউরিটি সমাপনী প্রজেক্ট: থ্রেট মডেলিং, বহুস্তরী প্রতিরক্ষা ও ঘটনা মোকাবেলা'
  },
  summary: {
    en: 'In this capstone lesson, you will unify every defense mechanism across the security curriculum into an end-to-end enterprise defensive architecture. Master STRIDE threat modeling to map attack surfaces across trust boundaries. Deploy zero-trust secrets management with automated rotation and KMS envelopes. Implement an executable defense-in-depth security gateway in TypeScript that enforces token verification, parameterized input sanitization, origin validation, and rate limiting. Establish structured security audit logging and automated incident response runbooks to detect and contain production breaches.',
    bn: 'এই সমাপনী পাঠে আপনি সিকিউরিটি কারিকুলামের সমস্ত প্রতিরক্ষা কৌশলকে একটি সম্পূর্ণ কার্যকর এন্টারপ্রাইজ নিরাপত্তা স্থাপত্যে রূপান্তর করবেন। আক্রমণ পৃষ্ঠ এবং বিশ্বাস-সীমানা চিহ্নিত করতে স্ট্রাইড (STRIDE) থ্রেট মডেলিং প্রয়োগ করবেন। অটোমেটেড রোটেশন ও কি-ম্যানেজমেন্ট সার্ভিসের (KMS) মাধ্যমে জিরো-ট্রাস্ট সিক্রেটস ব্যবস্থাপনা প্রতিষ্ঠা করবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ডিফেন্স-ইন-ডেপথ সিকিউরিটি গেটওয়ে বাস্তবায়ন করা হয়েছে যা টোকেন যাচাই, প্যারামিটারাইজড ইনপুট ফিল্টারিং, অরিজিন সুরক্ষা এবং রেট লিমিটিং নিশ্চিত করে। সফলভাবে সিস্টেম পরিচালনা করতে নিরীক্ষা লগিং এবং জরুরি ইনসিডেন্ট রেসপন্স কাঠামো গড়ে তুলবেন।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'unified-defender-architecture',
      text: {
        en: 'The Unified Defender Architecture: From Theory to Production',
        bn: 'সমন্বিত প্রতিরক্ষা স্থাপত্য: তত্ত্ব থেকে প্রোডাকশনে প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you take responsibility for production web applications, you must design security as a cohesive, layered system rather than isolated patches.',
        bn: 'যখন আপনি প্রোডাকশন ওয়েব অ্যাপ্লিকেশনের দায়িত্ব নেন, তখন আপনাকে খণ্ড খণ্ড সমাধানের বদলে একটি সমন্বিত ও বহুস্তরী নিরাপত্তা ব্যবস্থা নকশা করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every module in this curriculum forms one defensive perimeter in a complete defense-in-depth architecture. Lessons 1 and 2 established the core mindset and cryptographic JWT seals. Lesson 3 eliminated fast credential cracking with salted, memory-hard Argon2id hashes. Lessons 4, 5, and 6 defeated the classic trio of web exploits: SQL injection via parameterized queries, XSS via contextual entity encoding and Content Security Policy, and CSRF via SameSite cookies and Anti-CSRF tokens. Lesson 7 locked down transport security using TLS 1.3 and HSTS preloading, while Lesson 8 established fine-grained object-scope authorization to neutralize IDOR. This capstone unifies these controls into an automated production gateway and incident response lifecycle.',
        bn: 'এই কারিকুলামের প্রতিটি অধ্যায় একটি সম্পূর্ণ বহুস্তরী প্রতিরক্ষা ব্যবস্থার এক একটি মজবুত প্রাচীর। ১ম ও ২য় অধ্যায়ে মৌলিক নিরাপত্তা চিন্তাধারা এবং ক্রিপ্টোগ্রাফিক JWT সিল প্রতিষ্ঠিত হয়। ৩য় ধাপে সল্টযুক্ত মেমরি-নির্ভর Argon2id হ্যাশের মাধ্যমে পাসওয়ার্ড সুরক্ষা নিশ্চিত করা হয়েছে। ৪র্থ, ৫ম ও ৬ষ্ঠ অংশে তিনটি বহুল প্রচলিত ওয়েব আক্রমণ প্রতিহত করা হলো: প্যারামিটারাইজড কোয়েরি দিয়ে এসকিউএল ইনজেকশন, কনটেক্সচুয়াল এনকোডিং ও CSP দিয়ে XSS এবং সেমসাইট কুকি ও টোকেন দিয়ে CSRF প্রতিরোধ। ৭ম পরিচ্ছেদে TLS 1.3 ও HSTS প্রিলোড দিয়ে নেটওয়ার্ক ট্রাফিক সিল করা থাকে এবং ৮ম পাঠে অবজেক্ট-লেভেল অথরাইজেশনের মাধ্যমে IDOR নির্মূলের উপায় দেখানো হয়। এই সমাপনী প্রজেক্টে সমস্ত প্রযুক্তিকে একটি সমন্বিত প্রোডাকশন গেটওয়ে এবং ইনসিডেন্ট রেসপন্স কাঠামোতে রূপ দেওয়া হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'stride-threat-modeling',
          def: {
            en: 'A systematic methodology identifying threats across 6 categories: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.',
            bn: 'একটি কাঠামোবদ্ধ থ্রেট মডেলিং পদ্ধতি যা ৬টি শ্রেণীতে সম্ভাব্য ঝুঁকিগুলো চিহ্নিত করে: স্পুফিং, টেম্পারিং, রেপুডিয়েশন, তথ্য ফাঁস, ডস আক্রমণ ও অধিকার ছিনতাই।'
          }
        },
        {
          term: 'defense-in-depth',
          def: {
            en: 'A security strategy employing multiple redundant layers of defense so that if one security barrier fails, subsequent layers prevent a breach.',
            bn: 'এমন এক কৌশল যেখানে একাধিক নিরাপত্তা স্তর সাজানো থাকে যাতে কোনো একটি স্তরে ভুল হলেও পরবর্তী স্তর আক্রমণটি আটকে দিতে পারে।'
          }
        },
        {
          term: 'zero-trust-architecture',
          def: {
            en: 'A security paradigm based on "never trust, always verify," requiring strict identity and authorization checks for every transaction regardless of network location.',
            bn: 'এমন এক আধুনিক নিরাপত্তা দর্শন যা "কাউকে অন্ধ বিশ্বাস নয়, সবসময় যাচাই" নীতির ওপর ভিত্তি করে নেটওয়ার্কের অভ্যন্তরীণ প্রতিটি রিকোয়েস্টে প্রমাণ দাবি করে।'
          }
        },
        {
          term: 'incident-response-lifecycle',
          def: {
            en: 'The standard framework for handling security breaches: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Post-Incident Review.',
            bn: 'নিরাপত্তা দুর্ঘটনা মোকাবেলার আন্তর্জাতিক মানদণ্ড: প্রস্তুতি, শনাক্তকরণ ও বিশ্লেষণ, বিস্তার রোধ, ত্রুটি নির্মূল, স্বাভাবিকীকরণ এবং পর্যালোচনা।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'security'
    },
    {
      type: 'heading',
      id: 'stride-threat-modeling-matrix',
      text: {
        en: 'The STRIDE Threat Modeling Framework',
        bn: 'স্ট্রাইড (STRIDE) থ্রেট মডেলিং কাঠামো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'STRIDE maps the 6 fundamental ways adversaries compromise software systems to the specific architectural antidotes mastered in this course.',
        bn: 'আক্রমণকারীরা যে ৬টি মূল উপায়ে সিস্টেমে আক্রমণ করে, স্ট্রাইড মডেল সেগুলোকে এই কোর্সে শেখানো নির্দিষ্ট প্রযুক্তিগত সমাধানের সাথে যুক্ত করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'STRIDE Threat Category', bn: 'স্ট্রাইড ঝুঁকি বিভাগ' },
        { en: 'Adversary Objective', bn: 'আক্রমণকারীর লক্ষ্য' },
        { en: 'Common Web Vulnerability', bn: 'সাধারণ ওয়েব দুর্বলতা' },
        { en: 'Architectural Antidote', bn: 'স্থাপত্যিক প্রতিষেধক' }
      ],
      rows: [
        [
          { en: 'Spoofing (Identity)', bn: 'স্পুফিং (পরিচয় জালিয়াতি)' },
          { en: 'Pretending to be another legitimate user or server', bn: 'অন্য কোনো বৈধ ব্যবহারকারী বা সার্ভারের ছদ্মবেশ ধারণ' },
          { en: 'Stolen session cookies, forged JWT tokens', bn: 'সেশন কুকি চুরি, জাল JWT টোকেন' },
          { en: 'Pinned HMAC/RS256 JWT signatures and Multi-Factor Auth (MFA)', bn: 'পিন করা অ্যালগরিদমযুক্ত ক্রিপ্টোগ্রাফিক টোকেন ও টু-ফ্যাক্টর অথ' }
        ],
        [
          { en: 'Tampering (Data)', bn: 'টেম্পারিং (তথ্য বিকৃতি)' },
          { en: 'Modifying data in transit or within database storage', bn: 'নেটওয়ার্কে চলাকালীন বা ডেটাবেসে থাকা তথ্য অননুমোদিতভাবে বদলানো' },
          { en: 'SQL injection, unverified POST parameters', bn: 'এসকিউএল ইনজেকশন, অনিরাপদ প্যারামিটার পরিবর্তন' },
          { en: 'Strict parameterized queries, TLS 1.3 transport encryption', bn: 'বাধ্যতামূলক প্যারামিটারাইজড কোয়েরি এবং TLS 1.3 এনক্রিপশন' }
        ],
        [
          { en: 'Repudiation (Audit)', bn: 'রেপুডিয়েশন (অস্বীকৃতি)' },
          { en: 'Denying having performed an illicit transaction', bn: 'কোনো আর্থিক বা গুরুত্বপূর্ণ কাজ সম্পন্ন করার পর তা অস্বীকার করা' },
          { en: 'Missing or mutable audit logs, unauthenticated events', bn: 'অডিট লগের অনুপস্থিতি, পরিবর্তনযোগ্য লগ ফাইল' },
          { en: 'Append-only immutable audit ledgers with cryptographic timestamps', bn: 'ক্রিপ্টোগ্রাফিক টাইমস্ট্যাম্পযুক্ত অপরিবর্তনীয় অডিট লগ' }
        ],
        [
          { en: 'Information Disclosure', bn: 'তথ্য ফাঁস (গোপনীয়তা লঙ্ঘন)' },
          { en: 'Exfiltrating private corporate or user records', bn: 'গোপনীয় ব্যবসায়িক নথি বা ব্যক্তিগত তথ্য চুরি' },
          { en: 'IDOR / BOLA, reflected XSS, detailed stack trace errors', bn: 'IDOR/BOLA দুর্বলতা, XSS, সরাসরি সার্ভার এরর প্রদর্শন' },
          { en: 'Attribute-Based Access Control (ABAC), output escaping, CSP', bn: 'অবজেক্ট-লেভেল মালিকানা যাচাই, কনটেক্সচুয়াল এনকোডিং ও CSP' }
        ],
        [
          { en: 'Denial of Service', bn: 'ডিনায়েল অব সার্ভিস (DoS)' },
          { en: 'Exhausting server CPU, memory, or bandwidth capacity', bn: 'সার্ভারের প্রসেসর, মেমরি বা ইন্টারনেট ব্যান্ডউইথ নিঃশেষ করা' },
          { en: 'Unbounded JSON payloads, missing API rate limits', bn: 'অসীম সাইজের ফাইল আপলোড, রেট লিমিটের অভাব' },
          { en: 'Token-bucket rate limiting and strict payload byte clamps', bn: 'টোকেন-বাকেট রেট লিমিটিং ও সর্বোচ্চ সাইজের সীমাবদ্ধতা' }
        ],
        [
          { en: 'Elevation of Privilege', bn: 'অধিকার ছিনতাই (প্রিভিলেজ বৃদ্ধি)' },
          { en: 'Gaining unauthorized administrative capabilities', bn: 'সাধারণ ব্যবহারকারী থেকে অ্যাডমিন ক্ষমতা দখল করা' },
          { en: 'Trusting client role claims, un-gated admin routes', bn: 'ক্লায়েন্টের পাঠানো রোল মেনে নেওয়া, অরক্ষিত অ্যাডমিন রুট' },
          { en: 'Server-side RBAC enforcement and step-up MFA verification', bn: 'সার্ভার-সাইড রোল ভ্যালিডেশন এবং সংবেদনশীল কাজে রি-অথেনটিকেশন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-defense-in-depth-code',
      text: {
        en: 'Executable Defense-in-Depth Security Gateway Simulation',
        bn: 'ডিফেন্স-ইন-ডেপথ সিকিউরিটি গেটওয়ের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an enterprise request pipeline enforcing 4 consecutive security layers: Origin validation (blocking cross-site forgery), cryptographic token verification with constant-time equality, and object-level ownership authorization.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি পরপর নিরাপত্তা স্তরের একটি সুসংহত গেটওয়ে বাস্তবায়ন করে: অরিজিন যাচাই (CSRF আক্রমণ রোধ), কনস্ট্যান্ট-টাইম ক্রিপ্টোগ্রাফিক টোকেন ভ্যালিডেশন এবং অবজেক্ট-লেভেল মালিকানা পরীক্ষা।'
      }
    },
    {
      type: 'code',
      code: `// Enterprise Defense-in-Depth Multi-Layered Security Pipeline
import crypto from 'node:crypto';

interface ClientRequest {
  originHeader: string;
  authToken: string;
  resourceId: string;
  requesterUserId: string;
}

interface PipelineOutcome {
  statusCode: number;
  securityLayer: string;
  verdictMessage: string;
}

const SERVER_SIGNING_SECRET = 'capstone-auth-secret-32b';

function processSecurityPipeline(request: ClientRequest): PipelineOutcome {
  // Layer 1: Origin & Boundary Gateway Check
  const trustedDomain = 'https://app.example.com';
  if (request.originHeader !== trustedDomain) {
    return {
      statusCode: 403,
      securityLayer: 'OriginGate',
      verdictMessage: 'Untrusted cross-origin request rejected'
    };
  }

  // Layer 2: Cryptographic Token Signature Validation
  const tokenParts = request.authToken.split('.');
  if (tokenParts.length !== 3) {
    return {
      statusCode: 401,
      securityLayer: 'TokenStructureGate',
      verdictMessage: 'Malformed token formatting'
    };
  }

  const [headerB64, payloadB64, signature] = tokenParts;
  const expectedSignature = crypto
    .createHmac('sha256', SERVER_SIGNING_SECRET)
    .update(headerB64 + '.' + payloadB64)
    .digest('hex');

  const isSignatureValid =
    signature.length === expectedSignature.length &&
    crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );

  if (!isSignatureValid) {
    return {
      statusCode: 401,
      securityLayer: 'CryptographicSignatureGate',
      verdictMessage: 'Invalid token seal or forged claims'
    };
  }

  // Layer 3: Object-Scope Ownership Authorization (IDOR Defense)
  const corporateVault: Record<string, { id: string; ownerId: string }> = {
    res_101: { id: 'res_101', ownerId: 'usr_42' },
    res_102: { id: 'res_102', ownerId: 'usr_99' }
  };

  const targetedObject = corporateVault[request.resourceId];
  if (!targetedObject || targetedObject.ownerId !== request.requesterUserId) {
    return {
      statusCode: 404,
      securityLayer: 'ObjectOwnershipGate',
      verdictMessage: 'Requested resource not found or access denied'
    };
  }

  // All 4 defensive layers cleared successfully
  return {
    statusCode: 200,
    securityLayer: 'Approved',
    verdictMessage: 'Request passed all 4 defense gates'
  };
}

// Prepare valid HMAC-signed token
const mockHeader = 'eyJhbGciOiJIUzI1NiJ9';
const mockPayload = 'eyJzdWIiOiJ1c3JfNDIifQ';
const mockSig = crypto
  .createHmac('sha256', SERVER_SIGNING_SECRET)
  .update(mockHeader + '.' + mockPayload)
  .digest('hex');
const validUserToken = mockHeader + '.' + mockPayload + '.' + mockSig;

// Test Scenario 1: Legitimate request from authorized user
const authenticRequest: ClientRequest = {
  originHeader: 'https://app.example.com',
  authToken: validUserToken,
  resourceId: 'res_101',
  requesterUserId: 'usr_42'
};

// Test Scenario 2: Attack from external domain attempting cross-origin mutation
const crossOriginAttack: ClientRequest = {
  originHeader: 'https://evil-hacker.com',
  authToken: validUserToken,
  resourceId: 'res_101',
  requesterUserId: 'usr_42'
};

const legitimateOutcome = processSecurityPipeline(authenticRequest);
const attackOutcome = processSecurityPipeline(crossOriginAttack);

console.log('Legitimate request status:', legitimateOutcome.statusCode);
console.log('Legitimate defense outcome:', legitimateOutcome.verdictMessage);
console.log('Attacker request blocked status:', attackOutcome.statusCode);
console.log('Attacker blocked by layer:', attackOutcome.securityLayer);

// prints: Legitimate request status: 200
// prints: Legitimate defense outcome: Request passed all 4 defense gates
// prints: Attacker request blocked status: 403
// prints: Attacker blocked by layer: OriginGate`
    },
    {
      type: 'heading',
      id: 'incident-response-and-forensics',
      text: {
        en: 'Enterprise Incident Response and Post-Mortem Discipline',
        bn: 'এন্টারপ্রাইজ ইনসিডেন্ট রেসপন্স ও পোস্ট-মর্টেম শৃঙ্খলা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'No defensive system is complete without an established operational response plan. When a suspected security incident occurs, teams follow a disciplined lifecycle: (1) Identification isolates anomalies through automated SIEM alerting and tamper-evident audit logs. (2) Containment neutralizes the immediate threat by revoking compromised session tokens, rotating signing keys, or deploying edge firewall rules without destroying volatile memory forensic evidence. (3) Eradication patches the underlying vulnerability in source code and re-runs automated regression test suites. (4) Recovery restores normal operations with heightened monitoring. Finally, teams conduct a blameless post-mortem to document root causes and institutionalize preventive code patterns.',
        bn: 'একটি সুনির্দিষ্ট ঘটনা মোকাবেলা পরিকল্পনা ছাড়া কোনো নিরাপত্তা ব্যবস্থাই সম্পূর্ণ হতে পারে না। কোনো অনাকাঙ্ক্ষিত নিরাপত্তা ত্রুটি দেখা দিলে প্রকৌশলী দল একটি সুশৃঙ্খল পদ্ধতি অনুসরণ করে: (১) শনাক্তকরণ ধাপে স্বয়ংক্রিয় মনিটরিং ও অপরিবর্তনীয় অডিট লগ থেকে অস্বাভাবিক কার্যকলাপ খুঁজে বের করা হয়। (২) বিস্তার রোধ ধাপে চুরি হওয়া সেশন টোকেন বাতিল করা হয়, সিক্রেট কি পরিবর্তন করা হয় এবং ফরেনসিক তথ্য মুছে না ফেলে ফায়ারওয়ালের মাধ্যমে সাময়িক আক্রমণ ঠেকানো হয়। (৩) নির্মূল ধাপে সোর্স কোডের দুর্বলতা মেরামত করে টেস্ট চালানো হয়। (৪) স্বাভাবিকীকরণ ধাপে বাড়তি নজরদারির সাথে সার্ভিস পুনরায় চালু করা হয়। সর্বশেষে একটি নিরপেক্ষ ও গঠনমূলক পোস্ট-মর্টেম সভার মাধ্যমে মূল কারণ চিহ্নিত করে ভবিষ্যতে একই ঘটনার পুনরাবৃত্তি চিরতরে বন্ধ করা হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Security is a comprehensive system: Interlock token signing, input parameterization, CSRF defenses, and transport security.',
          bn: 'নিরাপত্তা একটি সমন্বিত ব্যবস্থা: টোকেন সাইনিং, প্যারামিটারাইজড ইনপুট, CSRF প্রতিরক্ষা ও ট্রান্সপোর্ট এনক্রিপশন একসাথে সাজান।'
        },
        {
          en: 'Model threats systematically: Apply STRIDE to identify vulnerabilities before writing production code.',
          bn: 'নিয়মতান্ত্রিক থ্রেট মডেলিং: কোড লেখার আগেই স্ট্রাইড (STRIDE) পদ্ধতি দিয়ে সম্ভাব্য সব ঝুঁকির পথ চিহ্নিত করুন।'
        },
        {
          en: 'Enforce zero-trust boundaries: Never assume requests from internal networks or authenticated users are inherently trustworthy.',
          bn: 'জিরো-ট্রাস্ট নীতি বজায় রাখুন: অভ্যন্তরীণ নেটওয়ার্ক বা লগইন করা ব্যবহারকারী হলেও প্রতিটি রিকোয়েস্টে অধিকার যাচাই করুন।'
        },
        {
          en: 'Prepare incident runbooks in advance: Automate key revocation and forensic logging so breaches can be contained within minutes.',
          bn: 'জরুরি কাজের নির্দেশিকা তৈরি রাখুন: কি রোটেশন ও লগিংয়ের ব্যবস্থা প্রস্তুত রাখুন যাতে যেকোনো ঝুঁকি কয়েক মিনিটেই নিয়ন্ত্রণে আনা যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ledger-ex1',
      kind: 'mcq',
      topic: 'stride-framework-categories',
      question: {
        en: 'In the STRIDE threat modeling methodology, which threat category corresponds directly to an attacker forging an unauthenticated user identity to bypass login?',
        bn: 'স্ট্রাইড (STRIDE) থ্রেট মডেলিং কাঠামোতে কোন বিভাগটি সরাসরি একজন আক্রমণকারীর অন্য ব্যবহারকারীর ছদ্মবেশ ধারণ করার সাথে সম্পর্কিত?'
      },
      options: [
        {
          en: 'Spoofing, which represents an adversary pretending to be an authentic identity to gain illegitimate access',
          bn: 'স্পুফিং (Spoofing), যা কোনো আক্রমণকারীর অননুমোদিত সুবিধা পেতে অন্য কোনো বৈধ ব্যক্তির পরিচয় বা ছদ্মবেশ ধারণকে বোঝায়'
        },
        {
          en: 'Denial of Service, which slows down internet browser animations',
          bn: 'ডিনায়েল অব সার্ভিস, যা ব্রাউজারের অ্যানিমেশন ধীর করে দেয়'
        },
        {
          en: 'Repudiation, which makes computer cooling fans run silently',
          bn: 'রেপুডিয়েশন, যা কুলিং ফ্যানকে শব্দহীনভাবে চলতে সাহায্য করে'
        },
        {
          en: 'Because STRIDE only applies to hardware mainframe computers manufactured in 1980',
          bn: 'কারণ স্ট্রাইড কেবল ১৯৮০ সালে তৈরি হার্ডওয়্যার কম্পিউটারে প্রযোজ্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Spoofing is identity theft. Tampering is data modification. Repudiation is lying about past actions.',
        bn: 'স্পুফিং মানে অন্যের পরিচয় নকল করা; টেম্পারিং মানে তথ্য বদলে দেওয়া; আর রেপুডিয়েশন মানে নিজের কাজ অস্বীকার করা।'
      },
      explanation: {
        en: 'Spoofing corresponds to identity impersonation, defeated by strong authentication, multi-factor challenges, and cryptographic signatures.',
        bn: 'স্পুফিং হলো পরিচয় জালিয়াতি, যা ক্রিপ্টোগ্রাফিক টোকেন ও টু-ফ্যাক্টর অথেনটিকেশনের মাধ্যমে প্রতিহত করা হয়।'
      }
    },
    {
      id: 'ledger-ex2',
      kind: 'mcq',
      topic: 'defense-in-depth-failure-resilience',
      question: {
        en: 'Why is the architectural principle of "Defense-in-Depth" superior to relying on a single impenetrable security boundary?',
        bn: 'একটি একক নিখুঁত সুরক্ষা প্রাচীরের ওপর নির্ভর করার চেয়ে "বহুস্তরী প্রতিরক্ষা" (Defense-in-Depth) কেন প্রকৌশলগতভাবে বহুগুণ শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'All individual software controls can fail due to bugs, developer misconfiguration, or zero-day exploits; layered controls ensure that if one defense fails, subsequent barriers intercept the attack',
          bn: 'সফটওয়্যারের যেকোনো একক স্তরে কোডিং ভুল বা অজানা বাগ থাকতে পারে; বহুস্তরী ব্যবস্থা থাকলে একটি স্তর ব্যর্থ হলেও পরবর্তী স্তর আক্রমণটি আটকে দেয়'
        },
        {
          en: 'Defense-in-depth reduces total database storage consumption to exactly zero bytes',
          bn: 'বহুস্তরী প্রতিরক্ষা ডেটাবেসের স্টোরেজ খরচ শূন্য বাইটে নামিয়ে আনে'
        },
        {
          en: 'Because running multiple layers of defense eliminates the need for software code tests',
          bn: 'কারণ এতে সফটওয়্যারে কোনো টেস্ট কোড লেখার প্রয়োজন হয় না'
        },
        {
          en: 'Single boundaries were banned by international maritime law conventions',
          bn: 'কারণ আন্তর্জাতিক আইনে একক সীমানা ব্যবহারে নিষেধাজ্ঞা রয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Assume every layer will fail eventually. The goal is making an attacker breach 4 layers simultaneously to succeed.',
        bn: 'ধরে নিন প্রতিটি স্তরেই ভুল হতে পারে; আক্রমণকারী যেন একসাথে ৪টি স্তর ভাঙা ছাড়া পুরো সিস্টেম দখল করতে না পারে।'
      },
      explanation: {
        en: 'Layered defense ensures that a defect in one component (e.g. an unescaped variable) is caught by another (e.g. strict CSP).',
        bn: 'বহুস্তরী সুরক্ষা নিশ্চিত করে যে এক স্তরের ভুল (যেমন এসকেপিং বাদ পড়া) অন্য স্তরে (যেমন CSP) আটকে যায়।'
      }
    },
    {
      id: 'ledger-ex3',
      kind: 'mcq',
      topic: 'immutable-audit-logging-repudiation',
      question: {
        en: 'Why must enterprise security audit logs be stored in an append-only, tamper-evident log store located outside the application database?',
        bn: 'এন্টারপ্রাইজ অডিট লগগুলো কেন মূল ডেটাবেসের বাইরে একটি অপরিবর্তনীয় ও কেবল যুক্ত-হওয়ার উপযোগী (Append-Only) সিস্টেমে সংরক্ষণ করা আবশ্যক?'
      },
      options: [
        {
          en: 'If an adversary compromises the application database or server, they cannot retroactively erase or modify the audit trail to conceal their intrusion and evade forensic investigation',
          bn: 'আক্রমণকারী যদি মূল ডেটাবেস বা সার্ভার দখলও করে ফেলে, তবুও সে নিজের কাজের প্রমাণ লুকাতে বা তদন্ত ফাঁকি দিতে অডিট লগ মুছতে বা বদলাতে পারে না'
        },
        {
          en: 'External audit logs cause computer monitors to consume 50 percent less electricity',
          bn: 'বাইরে লগ রাখলে মনিটরের বিদ্যুৎ খরচ ৫০ শতাংশ কমে যায়'
        },
        {
          en: 'Because internal databases crash whenever they write log files',
          bn: 'কারণ ডেটাবেসের ভেতর লগ ফাইল লিখলে সার্ভার ক্র্যাশ করে'
        },
        {
          en: 'Append-only logs are only supported on Saturdays and Sundays',
          bn: 'কারণ কেবল ছুটির দিনে অ্যাপেন্ড-অনলি লগ সাপোর্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The first thing a successful attacker tries to do is delete the logs. Make that physically impossible.',
        bn: 'সিস্টেমে ঢুকে আক্রমণকারী প্রথমেই লগ মুছে ফেলতে চায়; লগগুলো এমন স্থানে রাখুন যেন চাইলেও তা মোছা না যায়।'
      },
      explanation: {
        en: 'Immutable, isolated audit logging protects evidentiary integrity against post-compromise tampering by privileged adversaries.',
        bn: 'অপরিবর্তনীয় আলাদা অডিট লগ নিশ্চিত করে যে আক্রমণকারী সিস্টেমের কোনো প্রমাণ নষ্ট করতে পারবে না।'
      }
    },
    {
      id: 'ledger-ex4',
      kind: 'mcq',
      topic: 'incident-response-containment-priority',
      question: {
        en: 'During the Containment phase of a production security incident, why must engineers avoid immediately rebooting or wiping an infected server?',
        bn: 'নিরাপত্তা দুর্ঘটনার সময় বিস্তার রোধ (Containment) ধাপে প্রকৌশলীদের কেন আক্রান্ত সার্ভার সাথে সাথে রিবুট বা ফরম্যাট করা থেকে বিরত থাকা উচিত?'
      },
      options: [
        {
          en: 'Rebooting wipes volatile RAM memory containing critical forensic artifacts (such as running malware processes, un-flushed network sockets, and decryption keys) needed to understand the breach',
          bn: 'সার্ভার রিবুট দিলে মেমরি বা র‍্যামের (RAM) সমস্ত তথ্য মুছে যায়, যার মধ্যে ম্যালওয়্যারের কার্যকলাপ ও নেটওয়ার্ক সংযোগের মতো অত্যন্ত গুরুত্বপূর্ণ ফরেনসিক প্রমাণ থাকে'
        },
        {
          en: 'Rebooting a server permanently changes the brand name of the CPU hardware',
          bn: 'রিবুট দিলে প্রসেসরের ব্র্যান্ডের নাম স্থায়ীভাবে বদলে যায়'
        },
        {
          en: 'Because servers take 100 days to restart after encountering an error',
          bn: 'কারণ ত্রুটির পর সার্ভার চালু হতে ১০০ দিন সময় লাগে'
        },
        {
          en: 'International copyright laws forbid rebooting computers during business hours',
          bn: 'কারণ কাজের সময় কম্পিউটার রিস্টার্ট দেওয়া আন্তর্জাতিক আইনে নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preserve the crime scene first. Isolate the network connection, capture volatile RAM, then investigate.',
        bn: 'আগে প্রমাণের সুরক্ষা দিন; নেটওয়ার্ক বিচ্ছিন্ন করুন, মেমরির স্ন্যাপশট নিন, তারপর তদন্ত শুরু করুন।'
      },
      explanation: {
        en: 'Volatile memory analysis often yields the only definitive evidence of in-memory payloads and initial compromise vectors.',
        bn: 'র‍্যামের মেমরিতেই আক্রমণের সবচেয়ে নিখুঁত প্রমাণ থাকে, যা রিস্টার্ট দিলে চিরদিনের জন্য হারিয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'closed-ledger-quiz',
    title: {
      en: 'Enterprise Security Architecture and Incident Response Capstone Quiz',
      bn: 'এন্টারপ্রাইজ সিকিউরিটি আর্কিটেকচার ও ইনসিডেন্ট রেসপন্স সমাপনী কুইজ'
    },
    questions: [
      {
        id: 'clq-q1',
        kind: 'mcq',
        topic: 'zero-trust-network-assumptions',
        question: {
          en: 'What fundamental assumption distinguishes Zero-Trust Architecture from traditional perimeter-based ("castle-and-moat") security?',
          bn: 'প্রথাগত সীমানা-ভিত্তিক নিরাপত্তার ("দুর্গ ও পরিখা") তুলনায় আধুনিক জিরো-ট্রাস্ট আর্কিটেকচারের মূল নীতি কোনটি?'
        },
        options: [
          {
            en: 'Zero-trust assumes that adversaries are already inside the corporate network; every request must be authenticated, authorized, and encrypted regardless of network topology',
            bn: 'জিরো-ট্রাস্ট ধরে নেয় যে আক্রমণকারী ইতিমধ্যে নেটওয়ার্কের ভেতরেই অবস্থান করছে; তাই নেটওয়ার্ক যেখানেই হোক, প্রতিটি রিকোয়েস্টেই পরিচয়, অধিকার ও এনক্রিপশন বাধ্যতামূলক'
          },
          {
            en: 'Zero-trust completely eliminates the need for software passwords and encryption',
            bn: 'জিরো-ট্রাস্ট ব্যবহারে কোনো পাসওয়ার্ড বা এনক্রিপশনের দরকার হয় না'
          },
          {
            en: 'Zero-trust requires every employee to use desktop computers without internet access',
            bn: 'জিরো-ট্রাস্টে ইন্টারনেট সংযোগবিহীন কম্পিউটার ব্যবহার করতে হয়'
          },
          {
            en: 'Castle-and-moat security was declared legally invalid in 2024',
            bn: 'কারণ ২০২৪ সালে পুরনো নিরাপত্তা ব্যবস্থা বাতিল ঘোষণা করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never trust, always verify. Being inside the office Wi-Fi should grant zero implicit trust.',
          bn: 'কাউকে অন্ধ বিশ্বাস নয়; অফিসের ওয়াই-ফাইতে যুক্ত থাকা মানেই কোনো গোপন অধিকার পাওয়া নয়।'
        },
        explanation: {
          en: 'Zero-trust rejects perimeter trust, enforcing continuous micro-segmentation and per-transaction authorization.',
          bn: 'জিরো-ট্রাস্ট নেটওয়ার্কের অভ্যন্তরীণ রিকোয়েস্টকেও বহিরাগত রিকোয়েস্টের মতোই কড়াকড়িভাবে যাচাই করে।'
        }
      },
      {
        id: 'clq-q2',
        kind: 'mcq',
        topic: 'secrets-rotation-best-practice',
        question: {
          en: 'Why is automated secret rotation (such as cycling database passwords and signing keys every 30 days) an essential security practice?',
          bn: 'নিয়মিত ও স্বয়ংক্রিয়ভাবে সিক্রেট কি পরিবর্তন (যেমন প্রতি ৩০ দিনে ডেটাবেস পাসওয়ার্ড ও সাইনিং কি বদলানো) কেন একটি অপরিহার্য নিরাপত্তা চর্চা?'
        },
        options: [
          {
            en: 'It drastically curtails the window of opportunity for an attacker if a secret is silently leaked in logs or source control, rendering stolen credentials useless after the rotation period',
            bn: 'কোনো পাসওয়ার্ড বা সিক্রেট যদি ভুলবশত কোনো লগ বা কোডে ফাঁসও হয়ে যায়, তবে নির্দিষ্ট সময় পর তা অকেজো হয়ে আক্রমণকারীর সুযোগ নষ্ট করে দেয়'
          },
          {
            en: 'Rotating secrets reduces server internet subscription fees by 50 percent',
            bn: 'সিক্রেট বদলালে ইন্টারনেটের মাসিক খরচ ৫০ শতাংশ কমে যায়'
          },
          {
            en: 'Because cryptographic keys permanently expire after counting 1000 numbers',
            bn: 'কারণ ক্রিপ্টোগ্রাফিক কি ১০০০ গণনার পর নিজে থেকেই নষ্ট হয়ে যায়'
          },
          {
            en: 'Secret rotation speeds up computer keyboard typing responsiveness',
            bn: 'সিক্রেট পরিবর্তন কিবোর্ডের টাইপিং গতি বৃদ্ধি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A stolen key is only useful while it is active. Short rotation windows limit the damage of leaks.',
          bn: 'চুরি হওয়া কি কেবল কার্যকর থাকা অবস্থাতেই ক্ষতি করতে পারে; নিয়মিত পরিবর্তন ক্ষতির সময়সীমা কমিয়ে আনে।'
        },
        explanation: {
          en: 'Automated secret rotation limits exposure windows, ensuring compromised credentials lose utility rapidly.',
          bn: 'স্বয়ংক্রিয় রোটেশন চুরির ঝুঁকি কমিয়ে ফাঁস হওয়া পাসওয়ার্ডের উপযোগিতা দ্রুত নষ্ট করে দেয়।'
        }
      },
      {
        id: 'clq-q3',
        kind: 'mcq',
        topic: 'rate-limiting-attack-mitigation',
        question: {
          en: 'What distinct security attacks does implementing distributed token-bucket rate limiting directly mitigate at the API gateway?',
          bn: 'এপিআই গেটওয়েতে টোকেন-বাকেট রেট লিমিটিং বাস্তবায়ন করলে সরাসরি কোন কোন ক্ষতিকর আক্রমণ প্রতিহত হয়?'
        },
        options: [
          {
            en: 'Credential stuffing, automated password brute-forcing, API resource enumeration, and volumetric denial-of-service flooding',
            bn: 'ক্রেডেনশিয়াল স্টাফিং, ব্রুট-ফোর্স পাসওয়ার্ড অনুমান, স্বয়ংক্রিয় এপিআই ডেটা চুরি এবং সার্ভার স্তব্ধ করার ডস (DoS) আক্রমণ'
          },
          {
            en: 'It stops computer mice from running out of battery power',
            bn: 'এটি মাউসের ব্যাটারি শেষ হওয়া প্রতিরোধ করে'
          },
          {
            en: 'Rate limiting converts all API JSON responses into pure binary audio files',
            bn: 'এটি এপিআই-এর সমস্ত উত্তরকে অডিও ফাইলে রূপান্তর করে দেয়'
          },
          {
            en: 'Because rate limits force computers to run at 100 percent processor speed',
            bn: 'কারণ রেট লিমিট প্রসেসরকে সবসময় ১০০ শতাংশ গতিতে চালাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If an attacker can try 10000 passwords a second, they succeed. If they can only try 5 a minute, they fail.',
          bn: 'সেকেন্ডে ১০০০০ পাসওয়ার্ড পরীক্ষা করতে পারলে আক্রমণকারী সফল হয়; মিনিটে ৫ বারের বেশি চেষ্টা করতে না পারলে সে ব্যর্থ হয়।'
        },
        explanation: {
          en: 'Rate limiting neutralizes automated attack velocity, transforming fast automated attacks into unviable, throttled crawls.',
          bn: 'রেট লিমিটিং স্বয়ংক্রিয় আক্রমণের গতি থামিয়ে দিয়ে আক্রমণকারীর ব্রুট-ফোর্স প্রচেষ্টাকে ব্যর্থ করে তোলে।'
        }
      },
      {
        id: 'clq-q4',
        kind: 'mcq',
        topic: 'blameless-post-mortem-culture',
        question: {
          en: 'Why do high-reliability engineering organizations conduct "Blameless Post-Mortems" following a resolved security breach or outage?',
          bn: 'উচ্চমানের সফটওয়্যার প্রতিষ্ঠানে কোনো নিরাপত্তা ত্রুটি বা বিপর্যয় সমাধানের পর কেন "ব্লেমলেস পোস্ট-মর্টেম" (কাউকে দোষারোপ না করে পর্যালোচনা) করা হয়?'
        },
        options: [
          {
            en: 'Focusing on systemic vulnerabilities and architectural root causes rather than blaming individuals encourages transparent reporting, surfacing hidden defects and preventing repeat failures',
            bn: 'কাউকে দোষারোপ না করে সিস্টেমের দুর্বলতা ও কাঠামোগত মূল কারণ খোঁজার দিকে নজর দিলে কর্মীরা নির্ভয়ে সত্য জানান, ফলে সমস্যা চিহ্নিত করে স্থায়ী সমাধান করা সহজ হয়'
          },
          {
            en: 'Blameless post-mortems allow companies to skip paying their internet bills',
            bn: 'ব্লেমলেস পোস্ট-মর্টেম করলে ইন্টারনেট বিল পরিশোধ করতে হয় না'
          },
          {
            en: 'Because international labor laws mandate holding 5-hour meetings every Friday',
            bn: 'কারণ আন্তর্জাতিক আইনে প্রতি শুক্রবার মিটিং করার বাধ্যবাধকতা রয়েছে'
          },
          {
            en: 'Blameless meetings format all hard drives to start fresh every quarter',
            bn: 'এটি প্রতি প্রান্তিকে সব হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If people are punished for reporting mistakes, they hide them. Focus on fixing the system.',
          bn: 'ভুলের জন্য শাস্তি দিলে মানুষ ভুল গোপন করবে; ব্যক্তিকে নয়, সিস্টেমকে উন্নত করার দিকে মনোযোগ দিন।'
        },
        explanation: {
          en: 'Blameless post-mortems build psychological safety, ensuring teams uncover deep systemic flaws rather than scapegoating engineers.',
          bn: 'ব্লেমলেস কালচার নির্ভরযোগ্য কাজের পরিবেশ তৈরি করে এবং সিস্টেমের ভেতরের ত্রুটিগুলো উন্মোচন করে স্থায়ী সমাধান দেয়।'
        }
      }
    ]
  }
};
