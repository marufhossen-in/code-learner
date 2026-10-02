import type { Lesson } from '../../../lib/types';

export const jwtAnatomyLesson: Lesson = {
  slug: 'jwt-anatomy',
  tech: 'security-fundamentals',
  title: {
    en: 'JWT Anatomy — Header, Payload, Signature, and Tamper-Proof Verification',
    bn: 'জেডব্লিউটি (JWT) ব্যবচ্ছেদ: হেডার, পেলোড, সিগনেচার ও টেম্পার-প্রুফ যাচাই'
  },
  summary: {
    en: 'A JSON Web Token (JWT) is an open standard claim set protected by a cryptographic signature: readable by anyone, but forgeable by no one who lacks the private key or secret. In this lesson, you will dissect the 3 distinct Base64URL parts (Header, Payload, and Signature) and understand why claims are encoded rather than encrypted. You will implement an executable HMAC-SHA256 signer and verifier in TypeScript, execute the 5-step verification order, prevent dangerous algorithm confusion attacks (alg: none), and compare the tradeoffs between localStorage and HttpOnly cookies.',
    bn: 'জেসন ওয়েব টোকেন (JWT) হলো ক্রিপ্টোগ্রাফিক স্বাক্ষরে সুরক্ষিত উন্মুক্ত তথ্যকাঠামো: এটি যে কেউ পড়তে পারে, কিন্তু সঠিক সিক্রেট কি ছাড়া কেউ পরিবর্তন বা জাল করতে পারে না। এই পাঠে আপনি ৩টি মূল Base64URL অংশ (হেডার, পেলোড ও সিগনেচার) ব্যবচ্ছেদ করবেন এবং জানবেন কেন ভেতরের তথ্য এনক্রিপ্ট করার বদলে কেবল এনকোড করা থাকে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর HMAC-SHA256 সাইনার ও ভেরিফায়ার তৈরি করা হয়েছে, ৫-ধাপের যাচাইকরণ শৃঙ্খলা বিশ্লেষণ করা হয়েছে, বিপজ্জনক "alg: none" আক্রমণ ঠেকানো হয়েছে এবং localStorage বনাম HttpOnly কুকির তুলনামূলক ঝুঁকি পর্যালোচনা করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'jwt-physical-structure',
      text: {
        en: 'The Physical Structure of a JSON Web Token',
        bn: 'জেসন ওয়েব টোকেনের বাহ্যিক ও অভ্যন্তরীণ গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A JSON Web Token (JWT) is an open standard for securely transmitting verified claims between two parties across the web.',
        bn: 'জেসন ওয়েব টোকেন (JWT) হলো ওয়েবে দুটি পক্ষের মধ্যে বিশ্বস্ত তথ্য নিরাপদে আদান-প্রদানের একটি উন্মুক্ত প্রযুক্তিগত মানদণ্ড।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Physically, a JWT consists of 3 distinct Base64URL-encoded segments separated by periods: Header, Payload, and Signature. The Header specifies the cryptographic signing algorithm (such as HMAC-SHA256 or RS256). The Payload contains the factual claims (such as user identity, permissions, and token expiration). Finally, the Signature guarantees tamper-evident data integrity across network boundaries.',
        bn: 'কাঠামোগতভাবে একটি JWT ডট দিয়ে যুক্ত ৩টি ভিন্ন Base64URL অংশে বিভক্ত থাকে: হেডার, পেলোড এবং সিগনেচার। হেডার নির্দেশ করে কোন ক্রিপ্টোগ্রাফিক অ্যালগরিদম (যেমন HMAC-SHA256 বা RS256) দিয়ে এটি স্বাক্ষরিত। পেলোডে থাকে মূল তথ্য বা ক্লেইম (যেমন ব্যবহারকারীর আইডি, অনুমতি ও মেয়াদের সময়)। সর্বশেষে সিগনেচার নিশ্চিত করে যে তথ্যে কোনো অননুমোদিত পরিবর্তন করা হয়নি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A crucial distinction often trips up beginners: standard JWTs are encoded, not encrypted. Anyone holding the token can decode and inspect the claims inside the payload. The signature provides integrity, not confidentiality. It acts like a wax seal on a clear envelope: anyone can read the letter, but nobody can alter the text without breaking the seal.',
        bn: 'নতুনদের মধ্যে একটি সাধারণ ভুল ধারণা হলো টোকেনটিকে এনক্রিপ্টেড মনে করা; কিন্তু সাধারণ JWT কেবল এনকোডেড, এনক্রিপ্টেড নয়। যে কেউই টোকেনের পেলোড ডিকোড করে ভেতরের তথ্য দেখতে পারে। সিগনেচার কোনো গোপনীয়তা দেয় না, এটি কেবল তথ্যের অখণ্ডতা বা অবিকৃত রূপ নিশ্চিত করে। এটি স্বচ্ছ খামে মোমের সিলের মতো: যে কেউ চিঠি পড়তে পারে, কিন্তু সিল না ভেঙে ভেতরের লেখা বদলাতে পারে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'claim',
          def: {
            en: 'A key-value pair inside the payload asserting a statement about an entity (e.g. sub for subject, role for authorization, exp for expiration).',
            bn: 'পেলোডের ভেতরের কি-ভ্যালু জোড়া যা কোনো নির্দিষ্ট তথ্য প্রকাশ করে (যেমন সাবজেক্টের জন্য sub, অনুমতির জন্য role, মেয়াদের জন্য exp)।'
          }
        },
        {
          term: 'base64url-encoding',
          def: {
            en: 'A URL-safe variant of Base64 that replaces + with -, / with _, and omits trailing padding = characters.',
            bn: 'Base64-এর ইউআরএল-বান্ধব রূপ যা + এর বদলে -, / এর বদলে _ ব্যবহার করে এবং সমান চিহ্ন (=) প্যাডিং বাদ দেয়।'
          }
        },
        {
          term: 'hmac-sha256',
          def: {
            en: 'A symmetric keyed-hash algorithm where the exact same shared secret is used to both create and verify the signature.',
            bn: 'একটি সিমেট্রিক কি-ভিত্তিক হ্যাশিং পদ্ধতি যেখানে একই গোপন সিক্রেট দিয়ে টোকেন সাইন ও যাচাই করা হয়।'
          }
        },
        {
          term: 'rs256-asymmetric',
          def: {
            en: 'An asymmetric cryptographic algorithm where an identity provider signs with a private key and microservices verify with a public key.',
            bn: 'একটি অ্যাসিমেট্রিক অ্যালগরিদম যেখানে প্রমাণীকরণ কর্তৃপক্ষ প্রাইভেট কি দিয়ে সাইন করে এবং সার্ভারগুলো পাবলিক কি দিয়ে যাচাই করে।'
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
      id: 'stateless-vs-stateful-sessions',
      text: {
        en: 'Stateless JWTs vs Stateful Server Sessions',
        bn: 'স্টেটলেস JWT বনাম স্টেটফুল সার্ভার সেশনের তুলনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding when to deploy stateless JWT tokens versus traditional centralized server sessions is one of the most critical architectural decisions in backend security.',
        bn: 'ব্যাকএন্ড নিরাপত্তায় স্টেটলেস JWT টোকেন বনাম প্রথাগত ডেটাবেস সেশন ব্যবহারের সিদ্ধান্ত একটি অত্যন্ত গুরুত্বপূর্ণ স্থাপত্যিক পছন্দ।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্যিক বৈশিষ্ট্য' },
        { en: 'Stateful Server Sessions', bn: 'স্টেটফুল সার্ভার সেশন' },
        { en: 'Stateless JWT Tokens', bn: 'স্টেটলেস JWT টোকেন' },
        { en: 'Security & Scaling Tradeoff', bn: 'নিরাপত্তা ও স্কেলিং আপস' }
      ],
      rows: [
        [
          { en: 'State Storage Location', bn: 'তথ্যের অবস্থান' },
          { en: 'Server-side database or Redis cache', bn: 'সার্ভারের ডেটাবেস বা রেডিস ক্যাশে' },
          { en: 'Client-side within the token string itself', bn: 'ক্লায়েন্টের ডিভাইসে টোকেনের ভেতরে' },
          { en: 'JWT eliminates shared database lookups across distributed microservices', bn: 'JWT ডিস্ট্রিবিউটেড সার্ভারে অতিরিক্ত ডেটাবেস কল দূর করে' }
        ],
        [
          { en: 'Instant Revocation Capability', bn: 'তাৎক্ষণিক বাতিলকরণ ক্ষমতা' },
          { en: 'Trivial: delete or invalidate session row immediately', bn: 'খুব সহজ: ডেটাবেস থেকে সেশন রো মুছে ফেলা' },
          { en: 'Hard: valid until exp timestamp unless denylist maintained', bn: 'কঠিন: মেয়াদের পূর্বে বাতিল করতে ব্লকলিস্ট লাগে' },
          { en: 'Compromised JWTs remain valid until their expiration timestamp passes', bn: 'চুরি হওয়া টোকেন মেয়াদ শেষ না হওয়া পর্যন্ত কার্যকর থাকে' }
        ],
        [
          { en: 'Horizontal Scaling Overhead', bn: 'সার্ভার স্কেলিং ওভারহেড' },
          { en: 'Requires shared Redis clusters or sticky sessions', bn: 'শেয়ার্ড রেডিস ক্লাস্টার বা স্টিকি সেশন দরকার' },
          { en: 'Zero central storage dependency; any worker verifies locally', bn: 'কোনো কেন্দ্রীয় ডেটাবেস লাগে না; স্থানীয়ভাবে যাচাই হয়' },
          { en: 'JWT enables massive elastic scaling with zero inter-service state latency', bn: 'JWT ক্লাউড সিস্টেমে কোনো সার্ভার নির্ভরতা ছাড়া দ্রুত স্কেল করে' }
        ],
        [
          { en: 'Network Payload Footprint', bn: 'নেটওয়ার্ক ডেটা খরচ' },
          { en: 'Tiny cookie header: opaque ID (approx 32 bytes)', bn: 'ছোট কুকি হেডার: মাত্র ৩২ বাইট আইডি' },
          { en: 'Moderate: serialized claims and signature (300 to 1200 bytes)', bn: 'মাঝারি: ৩০০ থেকে ১২০০ বাইট পর্যন্ত হতে পারে' },
          { en: 'JWT increases HTTP header size on every round-trip API request', bn: 'প্রতিটি নেটওয়ার্ক রিকোয়েস্টে কিছুটা বেশি ব্যান্ডউইথ খরচ হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'five-step-verification-order',
      text: {
        en: 'The Mandatory 5-Step JWT Verification Order',
        bn: 'JWT যাচাইয়ের বাধ্যতামূলক ৫-ধাপের শৃঙ্খলা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The single most catastrophic developer error in JWT implementations is consuming claims before verifying signatures. Secure systems enforce a strict 5-step verification sequence: (1) Pin the algorithm on the server: reject the token if the header alg does not strictly match your expected algorithm (preventing alg: none and key-confusion attacks). (2) Validate cryptographic signature using constant-time comparison (timingSafeEqual) against your secret or public key. (3) Verify expiration timestamp (exp) against current server epoch time. (4) Verify issuer (iss) and audience (aud) claims to ensure the token was intended for your specific service. (5) Only after steps 1 through 4 pass, trust and consume the payload claims.',
        bn: 'জেডব্লিউটি বাস্তবায়নে সবচেয়ে ভয়াবহ ভুল হলো সিগনেচার যাচাই করার পূর্বেই পেলোডের তথ্যের ওপর আস্থা রাখা। একটি নিরাপদ সিস্টেমে ৫-ধাপের কঠোর শৃঙ্খলা মেনে চলতে হয়: (১) সার্ভারে অ্যালগরিদম পিন করুন: হেডারে আসা অ্যালগরিদম যদি সার্ভারের প্রত্যাশিত অ্যালগরিদমের সাথে হুবহু না মেলে তবে প্রত্যাখ্যান করুন (যা alg: none ও কি-কনফিউশন আক্রমণ ঠেকায়)। (২) কনস্ট্যান্ট-টাইম (timingSafeEqual) তুলনা দিয়ে ক্রিপ্টোগ্রাফিক সিগনেচার যাচাই করুন। (৩) বর্তমান সার্ভার সময়ের সাথে মেয়াদের (exp) তুলনা করুন। (৪) টোকেনটি আপনার সার্ভারের জন্য ইস্যু করা হয়েছে কিনা তা নিশ্চিত করতে iss এবং aud যাচাই করুন। (৫) ১ থেকে ৪ নম্বর ধাপ সফলভাবে পার হওয়ার পরেই কেবল পেলোডের তথ্যের ওপর ভিত্তি করে কাজ করুন।'
      }
    },
    {
      type: 'heading',
      id: 'executable-jwt-code',
      text: {
        en: 'Executable HMAC-SHA256 Token Signing and Verification',
        bn: 'HMAC-SHA256 টোকেন তৈরি ও যাচাইয়ের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates a signed JWT using Node.js crypto, verifies a valid token using timingSafeEqual, tampers with the user payload, and demonstrates programmatic rejection.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি নোডজেএস ক্রিপ্টো দিয়ে একটি স্বাক্ষরিত JWT তৈরি করে, timingSafeEqual দিয়ে সঠিক টোকেন যাচাই করে, পেলোড বদলে জাল করার চেষ্টা করে এবং নিরাপত্তা ব্যবস্থার মাধ্যমে তা প্রত্যাখ্যান করে।'
      }
    },
    {
      type: 'code',
      code: `// Complete HMAC-SHA256 Signing and Verification System
import crypto from 'node:crypto';

function base64UrlEncode(str: string): string {
  return Buffer.from(str).toString('base64url');
}

const SERVER_SECRET_KEY = 'codeshikhon-production-signing-secret-32b';

// Construct Header & Payload
const tokenHeader = { alg: 'HS256', typ: 'JWT' };
const tokenPayload = { sub: 'usr_42', role: 'member', exp: 1775000900 };

const encodedHeader = base64UrlEncode(JSON.stringify(tokenHeader));
const encodedPayload = base64UrlEncode(JSON.stringify(tokenPayload));
const signingPayload = encodedHeader + '.' + encodedPayload;

// Generate HMAC-SHA256 Signature
const validSignature = crypto
  .createHmac('sha256', SERVER_SECRET_KEY)
  .update(signingPayload)
  .digest('base64url');

const completeToken = signingPayload + '.' + validSignature;

// Step 1: Legitimate verification on server
const [hdr, pld, sig] = completeToken.split('.');
const expectedSignature = crypto
  .createHmac('sha256', SERVER_SECRET_KEY)
  .update(hdr + '.' + pld)
  .digest('base64url');

const isSignatureValid = crypto.timingSafeEqual(
  Buffer.from(sig),
  Buffer.from(expectedSignature)
);

// Step 2: Adversarial tamper attempt - client alters role to 'admin'
const forgedPayload = base64UrlEncode(
  JSON.stringify({ sub: 'usr_42', role: 'admin', exp: 1775000900 })
);
const forgedToken = hdr + '.' + forgedPayload + '.' + sig;
const [fHdr, fPld, fSig] = forgedToken.split('.');
const expectedForgedSig = crypto
  .createHmac('sha256', SERVER_SECRET_KEY)
  .update(fHdr + '.' + fPld)
  .digest('base64url');

const isTamperValid = crypto.timingSafeEqual(
  Buffer.from(fSig),
  Buffer.from(expectedForgedSig)
);

console.log('Token parts count:', completeToken.split('.').length);
console.log('Token length in bytes:', completeToken.length);
console.log('Legitimate token verified:', isSignatureValid);
console.log('Forged token approved:', isTamperValid);

// prints: Token parts count: 3
// prints: Token length in bytes: 147
// prints: Legitimate token verified: true
// prints: Forged token approved: false`
    },
    {
      type: 'heading',
      id: 'storage-tradeoffs-xss-csrf',
      text: {
        en: 'Client Storage Tradeoffs: LocalStorage vs HttpOnly Cookies',
        bn: 'টোকেন সংরক্ষণ বিতর্ক: লোকালস্টোরেজ বনাম HttpOnly কুকি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Where should you store a JWT on the client? Storing tokens in localStorage or sessionStorage makes them accessible to any JavaScript executing on the page. If your application suffers a Cross-Site Scripting (XSS) vulnerability, an attacker can steal the JWT with document.defaultView.localStorage and impersonate the user indefinitely. Conversely, storing the JWT in an HttpOnly, Secure, SameSite=Lax cookie completely shields the token from JavaScript reading. However, ambient cookie transmission exposes your endpoints to Cross-Site Request Forgery (CSRF) unless protected by Anti-CSRF Synchronizer Tokens or strict SameSite policies.',
        bn: 'ক্লায়েন্টের কোথায় টোকেন সংরক্ষণ করা উচিত? লোকালস্টোরেজে টোকেন রাখলে পেজে চলা যেকোনো জাভাস্ক্রিপ্ট তা পড়তে পারে। ওয়েবসাইটে যদি কোনো ক্রস-সাইট স্ক্রিপ্টিং (XSS) দুর্বলতা থাকে, তবে আক্রমণকারী স্ক্রিপ্ট চালিয়ে টোকেনটি চুরি করে ব্যবহারকারীর ছদ্মবেশ ধারণ করতে পারে। অন্যদিকে HttpOnly, Secure, এবং SameSite=Lax যুক্ত কুকিতে টোকেন রাখলে জাভাস্ক্রিপ্ট তা কখনো পড়তে পারে না। তবে কুকি স্বয়ংক্রিয়ভাবে ব্রাউজার পাঠায় বলে ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) আক্রমণ ঠেকানোর জন্য অ্যান্টি-CSRF টোকেন বা কঠোর সেমসাইট নীতি নিশ্চিত করতে হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'JWT claims are encoded, not encrypted: Never store plaintext passwords or confidential credit card numbers in payload claims.',
          bn: 'JWT ক্লেইম কেবল এনকোডেড, এনক্রিপ্টেড নয়: পেলোডে কখনো সরাসরি পাসওয়ার্ড বা গোপন আর্থিক তথ্য রাখবেন না।'
        },
        {
          en: 'Pin the verification algorithm: Always hardcode allowed algorithms on the server to reject malicious alg: none tokens.',
          bn: 'অ্যালগরিদম সার্ভারে নির্দিষ্ট রাখুন: ক্ষতিকর alg: none টোকেন প্রতিহত করতে সার্ভারের কোডে অনুমোদিত অ্যালগরিদম পিন করে রাখুন।'
        },
        {
          en: 'Verify before trusting claims: Always validate signature, exp, and aud before decoding authorization roles.',
          bn: 'ব্যবহারের পূর্বে যাচাই করুন: যেকোনো অনুমোদনের পূর্বে সিগনেচার, মেয়াদের সময় এবং অডিয়েন্স ফিল্ড নিশ্চিত করুন।'
        },
        {
          en: 'Prefer HttpOnly cookies over localStorage: Shield tokens from malicious JavaScript and defend mutations with Anti-CSRF tokens.',
          bn: 'লোকালস্টোরেজের চেয়ে HttpOnly কুকি নিরাপদ: ক্ষতিকর জাভাস্ক্রিপ্ট থেকে টোকেন রক্ষা করতে কুকি ব্যবহার করুন এবং সাথে অ্যান্টি-CSRF টোকেন রাখুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-password-foundry',
    tech: 'security-fundamentals',
    title: {
      en: 'The Password Foundry — Salting, Slow Hashing, and Storage Architectures',
      bn: 'পাসওয়ার্ড কারখানা: সল্টিং, স্লো হ্যাশিং ও সংরক্ষণ স্থাপত্য'
    }
  },
  exercises: [
    {
      id: 'jwt-ex1',
      kind: 'mcq',
      topic: 'jwt-structure-encoding',
      question: {
        en: 'Why is it dangerous to store unencrypted database passwords or sensitive medical records inside a standard JWT payload?',
        bn: 'একটি সাধারণ JWT পেলোডের ভেতরে কেন সরাসরি ডেটাবেস পাসওয়ার্ড বা অত্যন্ত গোপনীয় তথ্য সংরক্ষণ করা বিপজ্জনক?'
      },
      options: [
        {
          en: 'JWT payloads are only Base64URL-encoded, meaning anyone who intercepts or holds the token can decode and view all claims in plaintext',
          bn: 'JWT পেলোড কেবল Base64URL এনকোডেড থাকে, যার ফলে যে কেউই টোকেনটি ডিকোড করে ভেতরের সমস্ত গোপন তথ্য পড়ে ফেলতে পারে'
        },
        {
          en: 'Base64URL encoding causes physical damage to server solid-state storage drives',
          bn: 'Base64URL এনকোডিং ব্যবহারের ফলে সার্ভারের হার্ড ড্রাইভ নষ্ট হয়ে যায়'
        },
        {
          en: 'JWT tokens automatically broadcast their contents to public social media platforms',
          bn: 'JWT টোকেন নিজে থেকেই সোশ্যাল মিডিয়ায় সমস্ত তথ্য পোস্ট করে দেয়'
        },
        {
          en: 'Because standard web browsers refuse to transmit tokens containing text strings',
          bn: 'কারণ ব্রাউজার টেক্সটযুক্ত টোকেন নেটওয়ার্কে পাঠাতে সম্পূর্ণ অস্বীকৃতি জানায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Encoding is not encryption. A signature only proves who sent it and that it has not been changed.',
        bn: 'এনকোডিং আর এনক্রিপশন এক নয়। সিগনেচার শুধু প্রমাণ করে তথ্যটি অবিকৃত আছে, কিন্তু এটি গোপন রাখে না।'
      },
      explanation: {
        en: 'The signature provides integrity, not confidentiality. Base64URL decoding is trivial and requires no secret key.',
        bn: 'সিগনেচার কেবল অখণ্ডতা নিশ্চিত করে, কোনো গোপনীয়তা দেয় না। যে কেউ কোনো চাবি ছাড়াই এটি ডিকোড করতে পারে।'
      }
    },
    {
      id: 'jwt-ex2',
      kind: 'mcq',
      topic: 'algorithm-confusion-vulnerability',
      question: {
        en: 'How does the classic "alg: none" vulnerability allow an attacker to bypass authentication in poorly configured JWT verifiers?',
        bn: 'অসতর্কভাবে তৈরি JWT ভেরিফায়ারে "alg: none" দুর্বলতা কীভাবে একজন আক্রমণকারীকে সিস্টেম ফাঁকি দেওয়ার সুযোগ দেয়?'
      },
      options: [
        {
          en: 'The attacker changes the header alg to "none", strips the signature, and an unpinned verifier trusts the modified payload without checking any signature',
          bn: 'আক্রমণকারী হেডারের alg পরিবর্তন করে "none" করে দেয় এবং সিগনেচার মুছে দেয়, ফলে দুর্বল সার্ভার কোনো সিগনেচার পরীক্ষা ছাড়াই পরিবর্তিত পেলোড মেনে নেয়'
        },
        {
          en: 'It causes the server processor to immediately overheat and shut down',
          bn: 'এটি সার্ভারের প্রসেসর অতিরিক্ত গরম করে সার্ভার বন্ধ করে দেয়'
        },
        {
          en: 'It permanently overwrites the database root password with random characters',
          bn: 'এটি ডেটাবেসের মূল পাসওয়ার্ড মুছে এলোমেলো শব্দ বসিয়ে দেয়'
        },
        {
          en: 'It forces the client browser to disconnect from the local Wi-Fi network',
          bn: 'এটি ক্লায়েন্টের ব্রাউজারকে ওয়াই-ফাই নেটওয়ার্ক থেকে বিচ্ছিন্ন করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The header comes from the client. Never trust the client about which algorithm to verify with.',
        bn: 'ক্লায়েন্টের পাঠানো তথ্যের ওপর নির্ভর করবেন না; সার্ভার নিজেই ঠিক করবে কোন অ্যালগরিদম গ্রহণযোগ্য।'
      },
      explanation: {
        en: 'Servers must pin expected algorithms in code rather than letting the untrusted token header dictate verification logic.',
        bn: 'সার্ভারের নিজস্ব কোডে অ্যালগরিদম নির্দিষ্ট থাকতে হবে যাতে ক্লায়েন্টের পাঠানো হেডার যাচাই প্রক্রিয়া নিয়ন্ত্রণ করতে না পারে।'
      }
    },
    {
      id: 'jwt-ex3',
      kind: 'mcq',
      topic: 'storage-security-xss-csrf',
      question: {
        en: 'Why do modern web security standards recommend storing authentication JWTs in HttpOnly, Secure cookies rather than browser localStorage?',
        bn: 'আধুনিক ওয়েব নিরাপত্তা মানদণ্ডে ব্রাউজারের লোকালস্টোরেজের বদলে কেন HttpOnly এবং Secure কুকিতে JWT রাখার সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'HttpOnly cookies cannot be read or exfiltrated by malicious JavaScript during a Cross-Site Scripting (XSS) attack',
          bn: 'ওয়েবসাইটে ক্ষতিকর ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ হলেও জাভাস্ক্রিপ্ট HttpOnly কুকির তথ্য পড়তে বা চুরি করতে পারে না'
        },
        {
          en: 'LocalStorage has an absolute maximum storage capacity limit of only 4 bytes',
          bn: 'লোকালস্টোরেজে মাত্র ৪ বাইটের বেশি ডেটা রাখা সম্পূর্ণ অসম্ভব'
        },
        {
          en: 'Cookies consume zero bytes of internet bandwidth during HTTP requests',
          bn: 'কুকি ব্যবহারে এইচটিটিপি রিকোয়েস্টে কোনো ইন্টারনেট ব্যান্ডউইথ খরচ হয় না'
        },
        {
          en: 'Because cookies automatically encrypt all hard drive sectors on the user computer',
          bn: 'কারণ কুকি ব্যবহারকারীর কম্পিউটারের সম্পূর্ণ হার্ড ড্রাইভ এনক্রিপ্ট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think: Can document.cookie or injected scripts steal an HttpOnly cookie? No.',
        bn: 'ভাবুন: কোনো ক্ষতিকর স্ক্রিপ্ট কি HttpOnly কুকির তথ্য চুরি করতে পারবে? কখনোই না।'
      },
      explanation: {
        en: 'The HttpOnly flag blocks JavaScript execution contexts from accessing sensitive authentication tokens.',
        bn: 'HttpOnly ফ্ল্যাগ জাভাস্ক্রিপ্ট কোড থেকে স্পর্শকাতর প্রমাণীকরণ টোকেন সম্পূর্ণ সুরক্ষিত রাখে।'
      }
    },
    {
      id: 'jwt-ex4',
      kind: 'mcq',
      topic: 'hmac-vs-rs256-key-distribution',
      question: {
        en: 'Why do large microservice architectures prefer asymmetric RS256 over symmetric HS256 for signing authentication tokens?',
        bn: 'বৃহৎ মাইক্রোসার্ভিস সিস্টেমে কেন সিমেট্রিক HS256-এর বদলে অ্যাসিমেট্রিক RS256 অ্যালগরিদম বেশি পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'Only the central auth service holds the private key to issue tokens, while 50 downstream microservices can safely verify signatures using the public key without risk of secret leakage',
          bn: 'কেবলমাত্র মূল প্রমাণীকরণ সার্ভারে প্রাইভেট কি থাকে, ফলে ৫০টি অন্যান্য সাব-সার্ভার কোনো সিক্রেট ফাঁস হওয়ার ভয় ছাড়াই পাবলিক কি দিয়ে টোকেন যাচাই করতে পারে'
        },
        {
          en: 'Because RS256 tokens are mathematically compressed down to 2 bytes in length',
          bn: 'কারণ RS256 টোকেনের সাইজ সংকুচিত হয়ে মাত্র ২ বাইট হয়ে যায়'
        },
        {
          en: 'HS256 only operates when computers are connected to analog telephone landlines',
          bn: 'কারণ HS256 কেবল ল্যান্ডফোন লাইনে সংযুক্ত কম্পিউটারে কাজ করে'
        },
        {
          en: 'RS256 was created by the World Wide Web Consortium in the year 1985',
          bn: 'কারণ ১৯৮৫ সালে ডব্লিউথ্রিসি কনসোর্টিয়াম RS256 তৈরি করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'In HS256, anyone who can verify can also forge. In RS256, verifying requires only the public key.',
        bn: 'HS256-এ যে যাচাই করতে পারে সে নতুন টোকেন বানাতেও পারে; কিন্তু RS256-এ পাবলিক কি দিয়ে শুধু যাচাই করা যায়।'
      },
      explanation: {
        en: 'Asymmetric cryptography prevents secret sprawl by restricting token signing capabilities strictly to the central identity provider.',
        bn: 'অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি গোপনীয় কি ছড়িয়ে পড়ার ঝুঁকি কমায় এবং কেবল মূল সার্ভারকে টোকেন ইস্যু করার ক্ষমতা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'jwt-anatomy-quiz',
    title: {
      en: 'JSON Web Token Anatomy and Security Verification Quiz',
      bn: 'জেডব্লিউটি গঠন ও নিরাপত্তা যাচাইকরণ কুইজ'
    },
    questions: [
      {
        id: 'jwt-q1',
        kind: 'mcq',
        topic: 'token-verification-sequence',
        question: {
          en: 'What is the correct, secure chronological sequence for verifying an incoming JWT on an API endpoint?',
          bn: 'একটি এপিআই এন্ডপয়েন্টে আসা JWT নিরাপদে যাচাই করার সঠিক ধারাবাহিক ধাপ কোনটি?'
        },
        options: [
          {
            en: 'Pin expected algorithm -> Validate cryptographic signature -> Check expiration timestamp (exp) -> Validate issuer/audience -> Read authorization claims',
            bn: 'প্রত্যাশিত অ্যালগরিদম নিশ্চিতকরণ -> ক্রিপ্টোগ্রাফিক সিগনেচার যাচাই -> মেয়াদের সময় (exp) পরীক্ষা -> ইস্যুকারী ও অডিয়েন্স যাচাই -> অনুমোদনের তথ্য পাঠ'
          },
          {
            en: 'Read user role -> Grant admin database access -> Delete token -> Send email',
            bn: 'আগে রোল দেখা -> অ্যাডমিন অ্যাক্সেস দেওয়া -> টোকেন মুছে ফেলা -> ইমেইল পাঠানো'
          },
          {
            en: 'Check expiration -> Format hard drive -> Ignore signature -> Log out user',
            bn: 'মেয়াদ দেখা -> হার্ড ড্রাইভ ফরম্যাট -> সিগনেচার উপেক্ষা -> লগআউট'
          },
          {
            en: 'Decode payload -> Return HTTP 200 -> Disconnect database server',
            bn: 'পেলোড ডিকোড -> ২০০ কোড ফেরত -> ডেটাবেস সার্ভার সংযোগ বিচ্ছিন্ন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never trust claims before the cryptographic seal is verified against your pinned algorithm.',
          bn: 'সিগনেচার নিশ্চিত হওয়ার আগে কখনোই পেলোডের তথ্যের ওপর ভরসা করা যাবে না।'
        },
        explanation: {
          en: 'Enforcing the signature check and algorithm pinning before reading claims prevents forged payload execution.',
          bn: 'ক্লেইম পড়ার আগে অ্যালগরিদম পিনিং ও সিগনেচার যাচাই জাল তথ্য কার্যকর হওয়া সম্পূর্ণ প্রতিরোধ করে।'
        }
      },
      {
        id: 'jwt-q2',
        kind: 'mcq',
        topic: 'timing-attacks-in-signature-checks',
        question: {
          en: 'Why must cryptographic token verifiers use crypto.timingSafeEqual rather than standard JavaScript equality (===) when checking signatures?',
          bn: 'সিগনেচার মেলানোর সময় সাধারণ সমান চিহ্ন (===) এর বদলে কেন crypto.timingSafeEqual ব্যবহার করা আবশ্যক?'
        },
        options: [
          {
            en: 'Standard string equality returns early on the first mismatched byte, leaking execution time differences that allow attackers to guess signatures byte-by-byte via timing attacks',
            bn: 'সাধারণ স্ট্রিং তুলনা প্রথম অমিল পাওয়া মাত্র থেমে যায়, যার ফলে সময়ের সূক্ষ্ম পার্থক্যের সূত্র ধরে আক্রমণকারী প্রতিটি বাইট অনুমান করতে পারে'
          },
          {
            en: 'JavaScript triple-equals operator permanently crashes Node.js server processes',
            bn: 'জাভাস্ক্রিপ্ট ট্রিপল ইকুয়ালস ব্যবহারে নোড সার্ভার বন্ধ হয়ে যায়'
          },
          {
            en: 'TimingSafeEqual compresses strings to zero bytes before execution',
            bn: 'TimingSafeEqual ফাংশনটি স্ট্রিং সাইজ শূন্য বাইটে নামিয়ে আনে'
          },
          {
            en: 'Because international banking laws strictly forbid the character "=" in source code',
            bn: 'কারণ আন্তর্জাতিক ব্যাংকিং আইনে সোর্স কোডে "=" চিহ্ন ব্যবহারে নিষেধাজ্ঞা রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If checking byte 1 fails in 1 nanosecond and checking byte 5 fails in 5 nanoseconds, the attacker can measure the clock.',
          bn: 'প্রথম অক্ষরের ভুলে ১ ন্যানোসেকেন্ড আর ৫ম অক্ষরের ভুলে ৫ ন্যানোসেকেন্ড লাগলে আক্রমণকারী সময়ের পার্থক্য মেপে উত্তর বের করতে পারে।'
        },
        explanation: {
          en: 'Constant-time comparison executes in identical clock time regardless of where differences occur, defeating timing side-channel attacks.',
          bn: 'কনস্ট্যান্ট-টাইম তুলনা তথ্যের মিল বা অমিল নির্বিশেষে সমান সময় ব্যয় করে সব ধরনের টাইমিং সাইড-চ্যানেল আক্রমণ প্রতিহত করে।'
        }
      },
      {
        id: 'jwt-q3',
        kind: 'mcq',
        topic: 'jwt-revocation-short-lifespans',
        question: {
          en: 'Because stateless JWTs cannot be trivially revoked on the server without a database lookup, what is the standard production mitigation pattern?',
          bn: 'স্টেটলেস JWT তাৎক্ষণিক বাতিল করা কঠিন হওয়ায় প্রোডাকশন সিস্টেমে এর আদর্শ সমাধান কী?'
        },
        options: [
          {
            en: 'Issue very short-lived access tokens (e.g. 15 minutes) paired with longer-lived refresh tokens stored securely in a revocable server database',
            bn: 'স্বল্পমেয়াদি অ্যাক্সেস টোকেন (যেমন ১৫ মিনিট) ইস্যু করা এবং সাথে সার্ভার ডেটাবেসে থাকা প্রত্যাহারযোগ্য দীর্ঘমেয়াদি রিফ্রেশ টোকেন ব্যবহার করা'
          },
          {
            en: 'Set token expiration to 100 years into the future to avoid refreshing',
            bn: 'রিফ্রেশ করার ঝামেলা এড়াতে ১০০ বছরের মেয়াদে টোকেন তৈরি করা'
          },
          {
            en: 'Delete the entire database every evening at midnight',
            bn: 'প্রতিদিন মধ্যরাতে সার্ভারের পুরো ডেটাবেস মুছে ফেলা'
          },
          {
            en: 'Require users to solve a differential calculus puzzle on every page reload',
            bn: 'প্রতিবার পেজ রিলোড করার সময় জটিল গণিত সমাধান করতে বাধ্য করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Short access token for speed at the edge; refresh token for control and revocation at the core.',
          bn: 'দ্রুত কাজের জন্য স্বল্পমেয়াদি টোকেন; আর নিয়ন্ত্রণের জন্য সার্ভারে সংরক্ষিত রিফ্রেশ টোকেন।'
        },
        explanation: {
          en: 'Short-lived access tokens limit the window of vulnerability if a token is compromised, while refresh tokens allow selective revocation.',
          bn: 'স্বল্পমেয়াদি টোকেন ক্ষতির ঝুঁকি কমায় এবং রিফ্রেশ টোকেন প্রয়োজনে যেকোনো সময় গ্রাহকের অ্যাক্সেস বাতিল করার ক্ষমতা দেয়।'
        }
      },
      {
        id: 'jwt-q4',
        kind: 'mcq',
        topic: 'cross-site-request-forgery-cookies',
        question: {
          en: 'When storing authentication tokens in browser cookies, what security attribute prevents third-party websites from piggybacking on authenticated sessions?',
          bn: 'ব্রাউজার কুকিতে টোকেন রাখার সময় বহিরাগত ক্ষতিকর ওয়েবসাইট যেন অননুমোদিত রিকোয়েস্ট পাঠাতে না পারে তা কোন বৈশিষ্ট্য নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Setting the SameSite cookie attribute to Lax or Strict, combined with Anti-CSRF Synchronizer Tokens for state-changing requests',
            bn: 'কুকিতে SameSite বৈশিষ্ট্য Lax বা Strict হিসেবে নির্ধারণ করা এবং তথ্য পরিবর্তনের রিকোয়েস্টে অ্যান্টি-CSRF টোকেন ব্যবহার করা'
          },
          {
            en: 'Changing the background color of the web page to black',
            bn: 'ওয়েব পেজের ব্যাকগ্রাউন্ড কালার কালো করে দেওয়া'
          },
          {
            en: 'Writing all JavaScript variables in uppercase letters',
            bn: 'জাভাস্ক্রিপ্টের সমস্ত ভেরিয়েবল বড় হাতের অক্ষরে লেখা'
          },
          {
            en: 'Disabling the client keyboard during network transmission',
            bn: 'নেটওয়ার্কে ডেটা পাঠানোর সময় ব্যবহারকারীর কিবোর্ড বন্ধ রাখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'SameSite restricts cross-origin cookie delivery; Anti-CSRF tokens verify client intent.',
          bn: 'SameSite বহিরাগত সাইটে কুকি যাওয়া বন্ধ করে আর অ্যান্টি-CSRF টোকেন ব্যবহারকারীর সক্রিয় ইচ্ছা নিশ্চিত করে।'
        },
        explanation: {
          en: 'SameSite cookie policies and anti-CSRF tokens defend against ambient credential exploitation across third-party domains.',
          bn: 'সেমসাইট কুকি পলিসি এবং অ্যান্টি-CSRF টোকেন বহিরাগত ডোমেন থেকে পরিচালিত আক্রমণ সম্পূর্ণ প্রতিরোধ করে।'
        }
      }
    ]
  }
};
