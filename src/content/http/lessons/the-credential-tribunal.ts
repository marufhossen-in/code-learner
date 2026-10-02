import type { Lesson } from '../../../lib/types';

export const theCredentialTribunal: Lesson = {
  slug: 'the-credential-tribunal',
  tech: 'http',
  title: {
    en: 'HTTP Authentication, Bearer Tokens, OAuth 2.0 & CORS Security',
    bn: 'HTTP প্রমাণীকরণ, বিয়ারার টোকেন, OAuth 2.0 ও CORS নিরাপত্তা'
  },
  summary: {
    en: 'Master web security protocol mechanics across 10 structured topics. Understand the difference between authentication and authorization. Learn the 401 challenge handshake using WWW-Authenticate. Explore Basic Authentication and Bearer Tokens with JWTs. Study Proof-of-Possession tokens with DPoP. Compare 403 Forbidden with 404 security cloaking. Master the OAuth 2.0 Authorization Code Flow with PKCE. Understand CORS preflight OPTIONS and credentials.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ওয়েব সিকিউরিটি প্রোটোকল আয়ত্ত করুন। প্রমাণীকরণ (Authentication) বনাম অনুমতি (Authorization)-এর পার্থক্য বুঝুন। WWW-Authenticate দিয়ে ৪০১ চ্যালেঞ্জ হ্যান্ডশেক শিখুন। বেসিক অথেন্টিকেশন এবং JWT বিয়ারার টোকেন জানুন। DPoP দিয়ে ক্রিপ্টোগ্রাফিক প্রুফ-অফ-পজেশন বুঝুন। ৪০৩ Forbidden বনাম ৪০৪ সিকিউরিটি ক্লোকিং তুলনা করুন। PKCE সহ OAuth 2.0 অথরাইজেশন কোড ফ্লো এবং CORS প্রিফ্লাইট OPTIONS আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-partial-ledger',
    tech: 'http',
    title: {
      en: 'The Partial Ledger: Range Requests, 206 Partial Content & Resumable Downloads',
      bn: 'আংশিক খাতা: রেঞ্জ রিকোয়েস্ট, ২০৬ Partial Content ও রেজুমেবল ডাউনলোড'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Authentication vs Authorization: The Identity Boundary', bn: '১. প্রমাণীকরণ বনাম অনুমতি: পরিচয়ের সীমানা' } },
    {
      type: 'para',
      text: {
        en: 'Web security rests upon two distinct gates. Authentication answers "Who are you?" by verifying credentials like passwords, tokens, or biometric signatures. Authorization answers "What are you permitted to do?" by inspecting user roles and resource permissions. Confusing these two gates leads to severe access control vulnerabilities.',
        bn: 'ওয়েব নিরাপত্তা মূলত দুটি ভিন্ন স্তরের ওপর দাঁড়িয়ে আছে। প্রমাণীকরণ (Authentication) পাসওয়ার্ড বা টোকেন যাচাই করে উত্তর দেয় "আপনি কে?"। অনুমতি (Authorization) ইউজারের রোল দেখে নির্ধারণ করে "আপনার কী কী কাজ করার অধিকার আছে?"। এই দুই ধারণার অমিল হলে সার্ভারে ভয়াবহ নিরাপত্তা ত্রুটি দেখা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Distinct middleware verification stages:
function authenticateUser(req) {
  // Gate 1: Authentication (401 if unverified)
  const token = req.headers.authorization?.replace("Bearer ", "");
  return token ? { id: 101, role: "editor" } : null;
}

function authorizeAccess(user, requiredRole) {
  // Gate 2: Authorization (403 if forbidden)
  return user?.role === requiredRole;
}

const user = authenticateUser({ headers: { authorization: "Bearer valid_key" } });
console.log("Is authenticated:", Boolean(user));                 // true
console.log("Is authorized for admin:", authorizeAccess(user, "admin")); // false`,
      caption: {
        en: 'Authentication proves identity first; authorization evaluates resource permissions second.',
        bn: 'প্রথমে পরিচয় প্রমাণ করা হয়; এরপর রিসোর্সের অনুমতি যাচাই করা হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Challenge Handshake: 401 Unauthorized & WWW-Authenticate', bn: '২. চ্যালেঞ্জ হ্যান্ডশেক: 401 Unauthorized ও WWW-Authenticate' } },
    {
      type: 'para',
      text: {
        en: 'When an unauthenticated request arrives at a protected endpoint, the server responds with HTTP 401 Unauthorized. RFC 9110 strictly mandates that a 401 response must include a WWW-Authenticate header. This header specifies the accepted authentication scheme (e.g. Bearer, Basic) and the protection realm.',
        bn: 'সুরক্ষিত লিংকে লগইন ছাড়া রিকোয়েস্ট গেলে সার্ভার HTTP 401 Unauthorized রেসপন্স দেয়। RFC 9110 অনুযায়ী ৪০১ রেসপন্সে অবশ্যই WWW-Authenticate হেডার থাকতে হয়। এই হেডারটি ক্লায়েন্টকে জানিয়ে দেয় কোন পদ্ধতিতে লগইন তথ্য পাঠাতে হবে (যেমন Bearer বা Basic) এবং কোন প্রোটেকশন রিয়েলমের অধীনে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Initial anonymous request: */
GET /api/v1/billing HTTP/1.1
Host: api.codeshikhon.com

/* Server challenges client to present credentials: */
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="billing", error="invalid_token"
Content-Type: application/json

{"error": "Authentication required to access billing records"}`,
      caption: {
        en: 'The WWW-Authenticate header instructs the client which authentication scheme to present.',
        bn: 'WWW-Authenticate হেডার ক্লায়েন্টকে নির্দেশ দেয় কোন স্কিমে টোকেন পাঠাতে হবে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. HTTP Basic Authentication: Base64 & Mandatory TLS', bn: '৩. HTTP Basic প্রমাণীকরণ: Base64 ও বাধ্যতামূলক TLS' } },
    {
      type: 'para',
      text: {
        en: 'Basic Authentication is the legacy authentication scheme defined in RFC 7617. The client transmits username and password concatenated with a colon and encoded in base64: Authorization: Basic base64(user:pass). Because base64 is trivial to decode, Basic Auth is strictly forbidden over unencrypted HTTP and requires HTTPS.',
        bn: 'Basic Authentication হলো RFC 7617-এর একটি পুরনো পদ্ধতি। ক্লায়েন্ট ইউজারনেম ও পাসওয়ার্ড কোলোন দিয়ে জোড়া লাগিয়ে base64 আকারে পাঠায়: Authorization: Basic base64(user:pass)। যেহেতু base64 কোনো এনক্রিপশন নয় এবং সহজে ডিকোড করা যায়, তাই এটি সর্বদা নিরাপদ HTTPS-এ চালানো বাধ্যতামূলক।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Constructing and decoding HTTP Basic header:
const credentials = "admin:SecretPassword123";
const base64Encoded = Buffer.from(credentials).toString("base64");
console.log("Encoded Header: Authorization: Basic", base64Encoded);
// Output: Encoded Header: Authorization: Basic YWRtaW46U2VjcmV0UGFzc3dvcmQxMjM=

// Decoding is instant (No cryptographic protection!):
const decoded = Buffer.from(base64Encoded, "base64").toString("utf8");
console.log("Decoded Credentials:", decoded);
// Output: Decoded Credentials: admin:SecretPassword123`,
      caption: {
        en: 'Base64 provides zero cryptographic security; Basic Auth requires mandatory TLS encryption.',
        bn: 'Base64 কোনো নিরাপত্তা দেয় না; Basic Auth চালাতে শক্তিশালী TLS এনক্রিপশন আবশ্যক।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Bearer Tokens & JSON Web Tokens (JWT): RFC 6750', bn: '৪. বিয়ারার টোকেন ও JSON Web Tokens (JWT): RFC 6750' } },
    {
      type: 'para',
      text: {
        en: 'Modern REST APIs use Bearer Tokens defined by RFC 6750. The client transmits: Authorization: Bearer <token>. Whoever bears the token is granted access. JSON Web Tokens (JWT) format this token into three base64url segments: Header, Payload (claims like user ID, roles, expiration), and Signature (HMAC or RSA).',
        bn: 'আধুনিক REST API-তে RFC 6750 অনুযায়ী Bearer টোকেন ব্যবহার করা হয়। ক্লায়েন্ট Authorization: Bearer <টোকেন> পাঠায়। যে এই টোকেন বহন করে সে-ই অনুমতি পায়। JSON Web Tokens (JWT) এটিকে ৩ ভাগে ভাগ করে: হেডার, পেলোড (ইউজার আইডি, মেয়াদ) এবং ডিজিটাল সিগনেচার (HMAC বা RSA এনক্রিপশন)।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Standard Bearer Token Authorization Request: */
GET /api/v1/orders HTTP/1.1
Host: api.codeshikhon.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0Miwicm9sZSI6ImFkbWluIn0.signature_hash

/* Server verifies signature mathematically without querying the database */`,
      caption: {
        en: 'Bearer tokens allow stateless authorization verification via cryptographic signatures.',
        bn: 'বিয়ারার টোকেন ডিজিটাল সিগনেচারের সাহায্যে ডাটাবেস কোয়েরি ছাড়াই নিরাপত্তা যাচাই করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Proof-of-Possession: DPoP (RFC 9449) & Mutual TLS (mTLS)', bn: '৫. প্রুফ-অফ-পজেশন: DPoP (RFC 9449) ও Mutual TLS (mTLS)' } },
    {
      type: 'para',
      text: {
        en: 'A major vulnerability of Bearer tokens is that if a token leaks, an attacker can use it freely. Proof-of-Possession mechanisms solve this. In DPoP (Demonstrating Proof-of-Possession), the client signs each individual request with a local private key. In mTLS, both client and server verify cryptographic certificates during the TLS handshake.',
        bn: 'বিয়ারার টোকেনের মূল দুর্বলতা হলো টোকেন চুরি হলে যে কেউ তা ব্যবহার করতে পারে। Proof-of-Possession পদ্ধতি এটি বন্ধ করে। DPoP পদ্ধতিতে ক্লায়েন্ট প্রতিটি রিকোয়েস্টে তার নিজস্ব প্রাইভেট কি দিয়ে সই করে পাঠায়। আর mTLS পদ্ধতিতে ক্লায়েন্ট ও সার্ভার উভয়ই টিএলএস হ্যান্ডশেকে ক্রিপ্টোগ্রাফিক সার্টিফিকেট মেলায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* DPoP-bound authenticated request: */
POST /api/transfer HTTP/1.1
Host: bank.codeshikhon.com
Authorization: DPoP eyJhbGciOi... (Access token)
DPoP: eyJ0eXAiOiJkcG9wK2p3dC... (Signed proof containing HTTP method & URI)

/* Even if the access token leaks, attackers cannot sign new DPoP proofs without the private key! */`,
      caption: {
        en: 'DPoP binds tokens to the client private key, neutralizing stolen token replay attacks.',
        bn: 'DPoP টোকেনকে ক্লায়েন্টের প্রাইভেট কি-র সাথে বেঁধে দেয় ফলে চুরি হওয়া টোকেন অচল থাকে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Privilege Denial: 403 Forbidden vs 404 Security Cloaking', bn: '৬. অনুমতি অস্বীকৃতি: 403 Forbidden বনাম 404 সিকিউরিটি ক্লোকিং' } },
    {
      type: 'para',
      text: {
        en: 'When an authenticated client attempts to access a resource beyond their permission level, the server returns HTTP 403 Forbidden. Unlike 401, providing credentials again will not grant access. In high-security systems, servers intentionally return 404 Not Found to cloak the existence of sensitive endpoints from unauthorized scanners.',
        bn: 'লগইন থাকা সত্ত্বেও ইউজার যদি এমন ফাইলে ঢুকতে চায় যার অনুমতি তার নেই, সার্ভার HTTP 403 Forbidden ফেরত দেয়। ৪০১ এর মতো বারবার লগইন করলেও এতে কাজ হয় না। চরম নিরাপত্তার ক্ষেত্রে সার্ভার ইচ্ছা করে ৪০৩ না দিয়ে 404 Not Found পাঠায় যাতে হ্যাকার বুঝতেও না পারে যে ওই গোপন ফাইলটি আদতে আছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function handleSecretFileAccess(req, res) {
  const user = req.user;
  
  if (!user.isSuperAdmin) {
    // Security Cloaking: Mask sensitive resource existence behind 404!
    return res.status(404).json({ error: "Resource Not Found" });
  }

  res.json({ secretDoc: "Top Secret Strategy 2026" });
}`,
      caption: {
        en: 'Cloaking sensitive resources behind 404 prevents unauthorized endpoint enumeration.',
        bn: '৪০৪ এর আড়ালে সংবেদনশীল ফাইল ঢেকে রাখলে আক্রমণকারী এন্ডপয়েন্টের সন্ধান পায় না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. OAuth 2.0 Architectural Roles: Separation of Concerns', bn: '৭. OAuth 2.0 আর্কিটেকচারাল রোলস: দায়িত্বের বিভাজন' } },
    {
      type: 'para',
      text: {
        en: 'OAuth 2.0 is an authorization delegation framework. It establishes four discrete roles: 1) Resource Owner: the end-user; 2) Client: the application requesting access; 3) Authorization Server: the identity provider issuing tokens (e.g. Google, GitHub); 4) Resource Server: the API hosting user data.',
        bn: 'OAuth 2.0 হলো অনুমতি অর্পণের একটি সার্বজনীন কাঠামো। এতে ৪টি প্রধান পক্ষ থাকে: ১) Resource Owner: মূল ব্যবহারকারী; ২) Client: যে অ্যাপ্লিকেশনটি ডেটা অ্যাক্সেস করতে চায়; ৩) Authorization Server: পরিচয় যাচাইকারী সার্ভার (যেমন Google বা GitHub); ৪) Resource Server: যে এপিআইতে ব্যবহারকারীর মূল ডেটা সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+--------+                               +---------------+
|        |--(A)- Authorization Request ->|   Resource    |
|        |                               |     Owner     |
|        |<-(B)-- Authorization Grant ---| (The User)    |
|        |                               +---------------+
| Client |
|  App   |                               +---------------+
|        |--(C)-- Authorization Grant -->| Authorization |
|        |                               |    Server     |
|        |<-(D)----- Access Token -------| (Google/Auth0)|
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(E)----- Access Token ------>|   Resource    |
|        |                               |    Server     |
|        |<-(F)--- Protected Resource ---|  (The API)    |
+--------+                               +---------------+`,
      caption: {
        en: 'OAuth 2.0 delegates access without exposing the user password to third-party applications.',
        bn: 'OAuth 2.0 তৃতীয় পক্ষের কাছে পাসওয়ার্ড প্রকাশ না করেই নিরাপদ প্রবেশাধিকার দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Authorization Code Flow with PKCE (Proof Key for Code Exchange)', bn: '৮. PKCE সহ Authorization Code ফ্লো: আধুনিক লগইন পদ্ধতি' } },
    {
      type: 'para',
      text: {
        en: 'The Authorization Code Flow with PKCE (RFC 7636) is the gold standard for web and mobile authentication. The client generates a random secret (code_verifier) and hashes it (code_challenge). The authorization code returns via a browser redirect, and the client exchanges it directly with the authorization server alongside the secret verifier.',
        bn: 'PKCE সহ Authorization Code Flow আধুনিক ওয়েব ও মোবাইলের জন্য সবচেয়ে নিরাপদ লগইন পদ্ধতি। ক্লায়েন্ট একটি গোপন সংখ্যা (code_verifier) তৈরি করে তার হ্যাশ (code_challenge) সার্ভারে পাঠায়। ব্রাউজারে রিডাইরেক্ট হয়ে কোড আসে এবং ক্লায়েন্ট পেছনের দরজায় গোপন ভেরিফায়ার মিলিয়ে সরাসরি অ্যাক্সেস টোকেন গ্রহণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import crypto from "crypto";

// 1. Generate high-entropy PKCE code verifier:
const codeVerifier = crypto.randomBytes(32).toString("base64url");

// 2. Compute SHA-256 code challenge:
const codeChallenge = crypto
  .createHash("sha256")
  .update(codeVerifier)
  .digest("base64url");

console.log("PKCE Challenge generated:", codeChallenge.length > 0); // true
// Code challenge is sent in initial redirect; Verifier is kept safe until exchange!`,
      caption: {
        en: 'PKCE prevents authorization code interception attacks on public clients.',
        bn: 'PKCE অনুমোদন কোড চুরি হওয়া আক্রমণ থেকে পাবলিক ক্লায়েন্টকে শতভাগ নিরাপদ রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Cross-Origin Resource Sharing (CORS): SOP & Preflight OPTIONS', bn: '৯. CORS নিরাপত্তা: Same-Origin Policy ও প্রিফ্লাইট OPTIONS' } },
    {
      type: 'para',
      text: {
        en: 'The browser Same-Origin Policy (SOP) blocks frontend scripts on one domain from reading data from another domain. Cross-Origin Resource Sharing (CORS) allows servers to grant explicit exceptions. For requests with custom headers or methods like PUT and DELETE, browsers automatically send an HTTP OPTIONS Preflight request to verify server permission.',
        bn: 'ব্রাউজারের Same-Origin Policy (SOP) অন্য কোনো সাইট থেকে গোপনে ডেটা চুরি করা বন্ধ রাখে। Cross-Origin Resource Sharing (CORS) সার্ভারকে নির্দিষ্ট সাইটের জন্য অনুমতি দেওয়ার সুবিধা দেয়। কাস্টম হেডার বা PUT/DELETE মেথডের ক্ষেত্রে ব্রাউজার নিজে থেকেই একটি প্রিফ্লাইট OPTIONS রিকোয়েস্ট পাঠিয়ে সার্ভারের সম্মতি জেনে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Browser sends automated Preflight OPTIONS request: */
OPTIONS /api/data HTTP/1.1
Host: api.codeshikhon.com
Origin: https://myfrontend.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Authorization, Content-Type

/* Server permits cross-origin invocation: */
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://myfrontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 86400`,
      caption: {
        en: 'Preflight OPTIONS checks verify that the origin server authorizes cross-domain method execution.',
        bn: 'প্রিফ্লাইট OPTIONS চেক নিশ্চিত করে সার্ভার ভিন্ন ডোমেইন থেকে রিকোয়েস্ট গ্রহণে সম্মত আছে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'CORS Preflight Flight & Verification Workflow', bn: 'CORS প্রিফ্লাইট যাচাইকরণ ও অনুমোদন প্রবাহ' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="CORS Preflight Flight Workflow Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="200" height="200" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="115" y="40" text-anchor="middle" font-weight="bold" fill="#f59e0b">1. Preflight Inquiry</text><rect x="25" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="75" font-size="11">OPTIONS /api/data</text><text x="35" y="90" font-size="10">• Automated browser check</text><rect x="25" y="105" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="125" font-size="11">Origin: https://app.com</text><text x="35" y="140" font-size="10">• Declares caller domain</text><rect x="25" y="155" width="180" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="175" font-size="11">Request-Method: DELETE</text><text x="35" y="192" font-size="10">• Inquires allowed verb</text><rect x="250" y="15" width="200" height="200" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">2. Server Verdict</text><rect x="260" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="75" font-size="11">Status: 204 No Content</text><text x="270" y="90" font-size="10">• Preflight validated</text><rect x="260" y="105" width="180" height="42" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="270" y="125" font-size="11" font-weight="bold">Allow-Origin: app.com</text><text x="270" y="140" font-size="10" fill="#10b981">• Explicit domain allowlist</text><rect x="260" y="155" width="180" height="48" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1"/><text x="270" y="175" font-size="11">Allow-Max-Age: 86400</text><text x="270" y="192" font-size="10">• Caches preflight verdict</text><rect x="485" y="15" width="200" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="585" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">3. Actual Execution</text><rect x="495" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="75" font-size="11">DELETE /api/data</text><text x="505" y="90" font-size="10">• Real mutating operation</text><rect x="495" y="105" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="125" font-size="11">Authorization: Bearer ...</text><text x="505" y="140" font-size="10">• Inbound token validated</text><rect x="495" y="155" width="180" height="48" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="505" y="175" font-size="11" font-weight="bold">Status: 204 Deleted</text><text x="505" y="192" font-size="10" fill="#10b981">• Operation completed</text></g></svg>`,
      caption: {
        en: 'The browser initiates an OPTIONS preflight to confirm cross-origin allowances before dispatching mutating operations.',
        bn: 'ব্রাউজার কোনো পরিবর্তনমূলক রিকোয়েস্ট পাঠানোর আগে OPTIONS প্রিফ্লাইটের মাধ্যমে ক্রস-অরিজিন অনুমতি যাচাই করে নেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. CORS with Credentials: The Wildcard Ban', bn: '১০. ক্রেডেনশিয়ালসহ CORS: ওয়াইল্ডকার্ড (*) নিষেধাজ্ঞা' } },
    {
      type: 'para',
      text: {
        en: 'When frontend applications send authenticated cross-origin requests containing cookies or authorization headers (credentials: "include"), the server must return Access-Control-Allow-Credentials: true. Under browser security law, Access-Control-Allow-Origin CANNOT be wildcard (*) when credentials are true; it must explicitly name the exact calling origin.',
        bn: 'যখন ফ্রন্টএন্ড থেকে কুকি বা অথরাইজেশন হেডারসহ ক্রস-অরিজিন রিকোয়েস্ট পাঠানো হয়, তখন সার্ভারকে অবশ্যই Access-Control-Allow-Credentials: true দিতে হয়। ব্রাউজার সিকিউরিটি নিয়ম অনুযায়ী ক্রেডেনশিয়াল চালু থাকলে Access-Control-Allow-Origin কখনোই ওয়াইল্ডকার্ড (*) হতে পারে না; হুবহু ডোমেইনের নাম উল্লেখ থাকা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Secure CORS configuration in Express:
import cors from "cors";

const corsOptions = {
  // ❌ ILLEGAL with credentials: origin: "*" (Browser throws security error!)
  // ✅ LEGAL: Explicit origin whitelist:
  origin: "https://app.codeshikhon.com",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// app.use(cors(corsOptions));
console.log("CORS credentials requires explicit origin matching");
// Output: CORS credentials requires explicit origin matching`,
      caption: {
        en: 'Browsers strictly forbid wildcard origins when cross-origin credentials are enabled.',
        bn: 'ক্রেডেনশিয়ালযুক্ত রিকোয়েস্টে ব্রাউজার ওয়াইল্ডকার্ড (*) অরিজিন কঠোরভাবে নিষিদ্ধ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-crd-ex1',
      kind: 'predict',
      topic: 'http: CORS preflight method',
      question: {
        en: 'Which HTTP method is automatically sent by web browsers as a Preflight request before executing complex cross-origin requests?',
        bn: 'জটিল ক্রস-অরিজিন রিকোয়েস্ট চালানোর আগে ওয়েব ব্রাউজার স্বয়ংক্রিয়ভাবে কোন HTTP মেথডের প্রিফ্লাইট রিকোয়েস্ট পাঠায়?'
      },
      code: `/* Browser automated preflight check method */
/* ____________ /api/v1/resource HTTP/1.1 */`,
      answer: 'OPTIONS',
      accept: ['OPTIONS', 'options'],
      hint: {
        en: 'The OPTIONS method.',
        bn: 'OPTIONS মেথড।'
      },
      explanation: {
        en: 'Browsers send an OPTIONS preflight request with Access-Control-Request-* headers to confirm the server permits the cross-origin operation.',
        bn: 'ব্রাউজার নিজে থেকে একটি OPTIONS রিকোয়েস্ট পাঠিয়ে সার্ভারের অনুমোদন যাচাই করে নেয়।'
      }
    },
    {
      id: 'htt-crd-ex2',
      kind: 'mcq',
      topic: 'http: 401 challenge header requirement',
      question: {
        en: 'Which HTTP header is strictly required on an HTTP 401 Unauthorized response according to RFC specifications?',
        bn: 'RFC স্পেসিফিকেশন অনুযায়ী HTTP 401 Unauthorized রেসপন্সে কোন হেডারটি থাকা বাধ্যতামূলক?'
      },
      options: [
        { en: 'WWW-Authenticate', bn: 'WWW-Authenticate' },
        { en: 'Access-Control-Allow-Origin', bn: 'Access-Control-Allow-Origin' },
        { en: 'Content-Security-Policy', bn: 'Content-Security-Policy' },
        { en: 'Set-Cookie', bn: 'Set-Cookie' }
      ],
      answer: 0,
      hint: {
        en: 'WWW-Authenticate provides challenge details.',
        bn: 'WWW-Authenticate চ্যালেঞ্জের বিস্তারিত জানায়।'
      },
      explanation: {
        en: 'RFC 9110 mandates that a 401 Unauthorized response must carry the WWW-Authenticate header defining the challenge scheme.',
        bn: 'RFC ৯১১০ নিয়ম অনুযায়ী ৪০১ রেসপন্সের সাথে অবশ্যই WWW-Authenticate হেডার থাকতে হয়।'
      }
    },
    {
      id: 'htt-crd-ex3',
      kind: 'mcq',
      topic: 'http: CORS credentials wildcard rule',
      question: {
        en: 'What happens if a server returns "Access-Control-Allow-Credentials: true" while setting "Access-Control-Allow-Origin: *"?',
        bn: 'সার্ভার যদি "Access-Control-Allow-Credentials: true"-এর সাথে "Access-Control-Allow-Origin: *"-ও পাঠিয়ে দেয়, তবে কী ঘটবে?'
      },
      options: [
        { en: 'The browser blocks the request and throws a CORS security error, forbidding wildcards when credentials are included', bn: 'ব্রাউজার রিকোয়েস্ট আটকে দিয়ে সিকিউরিটি এরর দেয়, কারণ ক্রেডেনশিয়াল থাকলে ওয়াইল্ডকার্ড ব্যবহার নিষিদ্ধ' },
        { en: 'The browser automatically fixes the header', bn: 'ব্রাউজার নিজে থেকে হেডার ঠিক করে নেয়' },
        { en: 'The request succeeds faster', bn: 'রিকোয়েস্ট দ্রুত কাজ করে' },
        { en: 'The server crashes immediately', bn: 'সার্ভার ক্র্যাশ করে' }
      ],
      answer: 0,
      hint: {
        en: 'Wildcard is forbidden with credentials.',
        bn: 'ক্রেডেনশিয়ালের সাথে ওয়াইল্ডকার্ড নিষিদ্ধ।'
      },
      explanation: {
        en: 'Web browser security specifications strictly prohibit combining wildcard origins with credentialed cross-origin requests to prevent credential leaks.',
        bn: 'ব্যবহারকারীর পাসওয়ার্ড বা কুকি সুরক্ষার জন্য ব্রাউজার ক্রেডেনশিয়ালের সাথে ওয়াইল্ডকার্ড অরিজিন কঠোরভাবে আটকে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'htt-crd-quiz',
    title: { en: 'HTTP Authentication & CORS Security Quiz', bn: 'HTTP প্রমাণীকরণ ও CORS নিরাপত্তা কুইজ' },
    questions: [
      {
        id: 'hcq1',
        kind: 'mcq',
        topic: 'http: basic auth security risk',
        question: {
          en: 'Why is HTTP Basic Authentication completely unsafe when transmitted over unencrypted HTTP?',
          bn: 'আন-এনক্রিপ্টেড সাধারণ HTTP-তে Basic Authentication পাঠানো কেন মারাত্মক অনিরাপদ?'
        },
        options: [
          { en: 'Base64 encoding is not encryption; anyone intercepting the network packet can immediately decode the username and password', bn: 'Base64 কোনো এনক্রিপশন নয়; নেটওয়ার্কের যে কেউ প্যাকেট ধরে মুহূর্তের মধ্যে পাসওয়ার্ড বের করে নিতে পারে' },
          { en: 'Because Base64 files expire after 10 seconds', bn: 'কারণ Base64 ১০ সেকেন্ড পর নষ্ট হয়ে যায়' },
          { en: 'Because browsers do not support Base64', bn: 'ব্রাউজার এটি বোঝে না' },
          { en: 'Basic auth requires a paid license', bn: 'লাইসেন্স ফি লাগে' }
        ],
        answer: 0,
        hint: {
          en: 'Base64 is reversible encoding, not encryption.',
          bn: 'Base64 সহজে রূপান্তরযোগ্য, এনক্রিপশন নয়।'
        },
        explanation: {
          en: 'Base64 is a reversible encoding scheme. Without TLS encryption, passwords travel in plain sight across routers and public networks.',
          bn: 'Base64 অতি সহজে ডিকোড করা যায়, তাই টিএলএস ছাড়া চালালে যে কেউ পাসওয়ার্ড জেনে যেতে পারে।'
        }
      },
      {
        id: 'hcq2',
        kind: 'mcq',
        topic: 'http: PKCE security advantage',
        question: {
          en: 'What specific vulnerability does PKCE (Proof Key for Code Exchange) prevent during OAuth 2.0 authorization?',
          bn: 'OAuth 2.0-এ PKCE (Proof Key for Code Exchange) কোন নির্দিষ্ট আক্রমণটি প্রতিহত করে?'
        },
        options: [
          { en: 'Authorization code interception attacks on public mobile and single-page apps that lack a secure client secret', bn: 'মোবাইল বা সিঙ্গেল পেজ অ্যাপে ক্লায়েন্ট সিক্রেট না থাকায় মাঝপথ থেকে অনুমোদন কোড চুরি হওয়া আক্রমণ' },
          { en: 'SQL injection attacks on the database', bn: 'ডাটাবেসে এসকিউএল ইনজেকশন' },
          { en: 'DDoS attacks on the network layer', bn: 'নেটওয়ার্কে ডিডস আক্রমণ' },
          { en: 'DNS spoofing attacks', bn: 'ডিএনএস স্পুফিং' }
        ],
        answer: 0,
        hint: {
          en: 'Authorization code interception on public clients.',
          bn: 'পাবলিক ক্লায়েন্টে অনুমোদন কোড চুরি প্রতিরোধ।'
        },
        explanation: {
          en: 'PKCE ensures that only the client instance that initiated the authorization request can exchange the intercepted authorization code for tokens.',
          bn: 'PKCE নিশ্চিত করে যে যে ব্যক্তি কোড রিকোয়েস্ট শুরু করেছিল কেবল সে-ই গোপন ভেরিফায়ার দিয়ে টোকেন পেতে পারবে।'
        }
      },
      {
        id: 'hcq3',
        kind: 'mcq',
        topic: 'http: cors credentials wildcard ban',
        question: {
          en: 'Why do browsers strictly reject CORS requests when "Access-Control-Allow-Origin: *" is combined with "Access-Control-Allow-Credentials: true"?',
          bn: 'ব্রাউজার কেন "Access-Control-Allow-Origin: *" এবং "Access-Control-Allow-Credentials: true"-এর সংমিশ্রণ কঠোরভাবে বাতিল করে দেয়?'
        },
        options: [
          { en: 'Allowing wildcard origins with credentials would allow any malicious website to steal personal user session cookies and private data', bn: 'ওয়াইল্ডকার্ডের সাথে ক্রেডেনশিয়াল অনুমোদিত হলে যেকোনো ক্ষতিকর ওয়েবসাইট ব্যবহারকারীর ব্যক্তিগত কুকি ও ডেটা চুরি করতে পারত' },
          { en: 'Because browsers cannot parse asterisk symbols', bn: 'ব্রাউজার স্টার চিহ্ন বুঝতে পারে না' },
          { en: 'Because cookies only work with HTTP/1.0', bn: 'কুকি কেবল ১.০ তে চলে' },
          { en: 'It is a bug in JavaScript', bn: 'এটি জাভাস্ক্রিপ্টের একটি বাগ' }
        ],
        answer: 0,
        hint: {
          en: 'Wildcard with credentials would allow universal credential theft.',
          bn: 'ওয়াইল্ডকার্ডের সাথে ক্রেডেনশিয়াল দিলে গণহারে তথ্য চুরি সম্ভব হতো।'
        },
        explanation: {
          en: 'The CORS specification deliberately prohibits pairing the wildcard origin with credentials to prevent rogue sites from executing authenticated cross-site requests.',
          bn: 'CORS স্পেসিফিকেশন যেকোনো সাইট থেকে গোপনে অন্যের অ্যাকাউন্টে রিকোয়েস্ট পাঠানো আটকাতে এই নিয়ম বাধ্যতামূলক করেছে।'
        }
      },
      {
        id: 'hcq4',
        kind: 'mcq',
        topic: 'http: bearer token revocation advantage',
        question: {
          en: 'What architectural security benefit does an OAuth Bearer token provide over transmitting raw database usernames and passwords on every API call?',
          bn: 'প্রতিটি এপিআই কলে আসল ইউজারনেম ও পাসওয়ার্ড পাঠানোর বদলে OAuth Bearer টোকেন ব্যবহারের মূল নিরাপত্তা সুবিধা কোনটি?'
        },
        options: [
          { en: 'Tokens are scoped, short-lived, and can be instantly revoked server-side without forcing the user to change their master password', bn: 'টোকেন স্বল্পমেয়াদি হয়, নির্দিষ্ট সীমার মধ্যে কাজ করে এবং আসল পাসওয়ার্ড না বদলেই সার্ভার থেকে যেকোনো সময় বাতিল করা যায়' },
          { en: 'Tokens double the Wi-Fi speed', bn: 'ওয়াইফাই স্পিড দ্বিগুণ করে' },
          { en: 'Tokens require no memory on the server', bn: 'সার্ভারে কোনো মেমোরি লাগে না' },
          { en: 'Tokens automatically translate JSON to English', bn: 'জেসন নিজে নিজে ইংরেজিতে রূপান্তর হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Scoped, temporary, and revocable.',
          bn: 'স্বল্পমেয়াদি, নির্দিষ্ট সীমার এবং বাতিলযোগ্য।'
        },
        explanation: {
          en: 'Bearer tokens limit the blast radius of credential compromise by carrying time-bounded lifespans and granular scopes rather than persistent account secrets.',
          bn: 'টোকেন নির্দিষ্ট সময়ের জন্য কাজ করে, তাই টোকেন চুরি হলেও আসল পাসওয়ার্ড সুরক্ষিত থাকে।'
        }
      }
    ]
  }
};
