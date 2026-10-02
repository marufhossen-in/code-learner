import type { Lesson } from '../../../lib/types';

export const OauthFlowsLesson: Lesson = {
  slug: 'oauth-flows',
  tech: 'authentication',
  title: {
    en: 'OAuth 2.0 & OpenID Connect: PKCE Flows & Identity Federation',
    bn: 'OAuth ২.০ এবং ওপেনআইডি কানেক্ট: PKCE ফ্লো এবং আইডেন্টিটি ফেডারেশন'
  },
  summary: {
    en: 'Master the protocol architecture of federated identity and delegated authorization using OAuth 2.0 and OpenID Connect. Understand the 4 core OAuth roles (Resource Owner, Client, Authorization Server, Resource Server). Learn why legacy Implicit Grant flows are deprecated due to token leakage in browser history. Explore how modern applications use the Authorization Code Flow with Proof Key for Code Exchange to prevent code interception on mobile and single-page apps.',
    bn: 'OAuth ২.০ এবং ওপেনআইডি কানেক্ট (OIDC) ব্যবহার করে ফেডারেটেড আইডেন্টিটি ও অনুমোদনের প্রটোকল আর্কিটেকচার আয়ত্ত করুন। ৪ টি মূল OAuth ভূমিকা (রিসোর্স ওনার, ক্লায়েন্ট, অথরাইজেশন সার্ভার, রিসোর্স সার্ভার) বুঝুন। ব্রাউজার হিস্ট্রিতে টোকেন ফাঁসের কারণে পুরানো ইমপ্লিসিট গ্রান্ট কেন বাতিল করা হয়েছে তা জানুন। আধুনিক অ্যাপ্লিকেশনগুলো কীভাবে কোড চুরি রোধে PKCE সংবলিত অথরাইজেশন কোড ফ্লো ব্যবহার করে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'delegated-authorization-problem',
      text: {
        en: 'The Problem of Delegating Access Without Sharing Passwords',
        bn: 'পাসওয়ার্ড না জানিয়ে এক্সেস হস্তান্তরের নিরাপত্তা সমস্যা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you allow third-party applications to interact with user accounts, asking users to share their raw passwords is an architectural anti-pattern. OAuth 2.0 was created to solve credential delegation without ever exposing credentials to client apps.',
        bn: 'যখন আপনি থার্ড-পার্টি অ্যাপ্লিকেশনগুলোকে ব্যবহারকারীর অ্যাকাউন্টের সাথে যুক্ত হতে দেন, তখন সরাসরি মূল পাসওয়ার্ড চাওয়া একটি মারাত্মক নিরাপত্তা ভুল। ক্লায়েন্ট অ্যাপের কাছে কোনো পাসওয়ার্ড প্রকাশ না করেই নিরাপদ অনুমোদনের সমাধান করতে OAuth ২.০ তৈরি করা হয়েছে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To understand delegated identity, engineers must separate authorization from authentication. OAuth 2.0 is an authorization delegation framework that issues scoped access tokens answering what an application can access. OpenID Connect is an identity layer built on top of OAuth 2.0 that introduces signed ID tokens, answering who the user is.',
        bn: 'অনুমোদনের প্রক্রিয়া বুঝতে ইঞ্জিনিয়ারদের অথরাইজেশন এবং অথেনটিকেশনের পার্থক্য জানতে হয়। OAuth ২.০ হলো একটি অনুমোদন ফ্রেমওয়ার্ক যা নির্দিষ্ট স্কোপযুক্ত এক্সেস টোকেন দিয়ে নির্ধারণ করে কোনো অ্যাপ কী কী তথ্য পাবে। আর ওপেনআইডি কানেক্ট (OIDC) হলো OAuth ২.০ এর ওপর তৈরি একটি আইডেন্টিটি স্তর যা সাইন করা আইডি টোকেন দিয়ে প্রমাণ করে ব্যবহারকারী আসলে কে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. PKCE Code Challenge Generation',
            bn: '১. PKCE কোড চ্যালেঞ্জ তৈরি'
          },
          text: {
            en: 'Before redirecting, the client generates a high-entropy code verifier string (such as 43 to 128 characters) and derives the code challenge using SHA-256 and base64url encoding.',
            bn: 'রিডাইরেক্ট করার আগে ক্লায়েন্ট একটি র্যান্ডম কোড ভেরিফায়ার স্ট্রিং ( যেমন ৪৩ থেকে ১২৮ অক্ষরের ) তৈরি করে এবং SHA-২৫৬ হ্যাশ দিয়ে তার কোড চ্যালেঞ্জ গণনা করে।'
          },
        },
        {
          title: {
            en: '2. User Authorization and Consent Redirect',
            bn: '২. ব্যবহারকারীর অনুমোদন ও সম্মতি রিডাইরেক্ট'
          },
          text: {
            en: 'The client redirects the browser to the Authorization Server with the code challenge, client identifier, requested scopes, and a random anti-CSRF state parameter.',
            bn: 'ক্লায়েন্ট ব্রাউজারটিকে অথরাইজেশন সার্ভারে পাঠায় যেখানে কোড চ্যালেঞ্জ, ক্লায়েন্ট আইডি, অনুমোদনের স্কোপ এবং CSRF প্রতিরোধের জন্য একটি র্যান্ডম স্টেট প্যারামিটার থাকে।'
          },
        },
        {
          title: {
            en: '3. Single-Use Authorization Code Issuance',
            bn: '৩. এককালীন অথরাইজেশন কোড প্রদান'
          },
          text: {
            en: 'Upon successful login and consent, the server redirects back to the client callback URL with a short-lived authorization code (valid for roughly 60 seconds).',
            bn: 'ব্যবহারকারী লগইন ও সম্মতি দেওয়ার পর সার্ভার একটি স্বল্পস্থায়ী অথরাইজেশন কোডসহ ( যা প্রায় ৬০ সেকেন্ড কার্যকর থাকে ) ক্লায়েন্টের ফিরতি ইউআরএলে রিডাইরেক্ট করে।'
          },
        },
        {
          title: {
            en: '4. Direct Backend Token Exchange',
            bn: '৪. সরাসরি ব্যাকএন্ড টোকেন বিনিময়'
          },
          text: {
            en: 'The client sends a POST request directly to the token endpoint with the authorization code and original code verifier. The server verifies the SHA-256 hash matches the original challenge before returning tokens.',
            bn: 'ক্লায়েন্ট সরাসরি ব্যাকএন্ড থেকে টোকেন এন্ডপয়েন্টে অথরাইজেশন কোড এবং মূল কোড ভেরিফায়ার পাঠায়। সার্ভার ভেরিফায়ারের হ্যাশ মিলিয়ে দেখার পরেই কেবল টোকেন প্রদান করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The OAuth 2.0 Authorization Code Flow with PKCE (RFC 7636)',
        bn: 'PKCE (RFC ৭৬৩৬) সংবলিত OAuth ২.০ অথরাইজেশন কোড ফ্লো'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="OAuth 2.0 authorization code flow with PKCE showing client, authorization server, and resource server">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">OAUTH 2.0 AUTHORIZATION CODE FLOW WITH PKCE (RFC 7636)</text>
  
  <!-- Step 1: Client App -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. CLIENT (SPA / MOBILE)</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="110" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="22" fill="#38bdf8" font-size="9" font-weight="bold">PKCE SECRET INITIALIZATION:</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="8">1. verifier = randomBytes(32)</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="8">2. challenge = SHA256(verifier)</text>
      <text x="15" y="78" fill="#6ee7b7" font-size="8">3. state = randomToken()</text>
      <text x="15" y="96" fill="#f59e0b" font-size="8">Verifier stays private in memory!</text>
      
      <rect y="125" width="200" height="150" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="150" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">EXCHANGING TOKENS</text>
      <text x="15" y="172" fill="#cbd5e1" font-size="8">POST /token HTTP/1.1</text>
      <text x="15" y="190" fill="#f8fafc" font-size="8">code: "auth_code_9912"</text>
      <text x="15" y="208" fill="#f8fafc" font-size="8">code_verifier: "xyzSecret..."</text>
      <text x="15" y="230" fill="#6ee7b7" font-size="8">Receives Access Token &amp; ID Token</text>
      <text x="15" y="248" fill="#10b981" font-size="8">Zero passwords ever touched!</text>
    </g>
  </g>
  
  <!-- Step 2: Authorization Server -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. AUTH SERVER (IdP)</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="120" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#f59e0b" font-size="10" font-weight="bold">USER CONSENT &amp; AUTH</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8">1. User authenticates on IdP domain</text>
      <text x="15" y="62" fill="#cbd5e1" font-size="8">2. Reviews scopes: "read:profile"</text>
      <text x="15" y="80" fill="#cbd5e1" font-size="8">3. IdP stores code_challenge</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8">4. Issues single-use 60s auth code</text>
      
      <rect y="135" width="240" height="150" rx="4" fill="#451a03" stroke="#f59e0b"/>
      <text x="120" y="160" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">PKCE VERIFICATION GATE</text>
      <text x="15" y="185" fill="#cbd5e1" font-size="8">Auth Server hashes incoming verifier:</text>
      <text x="15" y="203" fill="#f8fafc" font-size="8">SHA256(received_verifier)</text>
      <text x="15" y="221" fill="#f8fafc" font-size="8">== stored_challenge ?</text>
      <text x="15" y="245" fill="#6ee7b7" font-size="8">✓ MATCH: Return JWT Access Tokens</text>
      <text x="15" y="265" fill="#ef4444" font-size="8">✗ MISMATCH: Reject interceptor!</text>
    </g>
  </g>
  
  <!-- Step 3: Resource Server -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">3. RESOURCE SERVER (API)</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="140" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="10" font-weight="bold">API REQUEST</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8">GET /api/v1/user/documents</text>
      <text x="15" y="64" fill="#f8fafc" font-size="8">Authorization: Bearer at_982...</text>
      <text x="15" y="86" fill="#6ee7b7" font-size="8">Validates Token Signature</text>
      <text x="15" y="104" fill="#6ee7b7" font-size="8">Checks Scopes &amp; Expiry</text>
      <text x="15" y="124" fill="#10b981" font-size="8">Returns Protected User Files</text>
      
      <rect y="155" width="200" height="135" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="180" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">SECURITY PROOF</text>
      <text x="15" y="202" fill="#cbd5e1" font-size="8">• Code interception thwarted</text>
      <text x="15" y="220" fill="#cbd5e1" font-size="8">• No plaintext passwords</text>
      <text x="15" y="238" fill="#cbd5e1" font-size="8">• Granular scoped permissions</text>
      <text x="15" y="256" fill="#cbd5e1" font-size="8">• Revocable access grants</text>
      <text x="15" y="274" fill="#10b981" font-size="8">• Industry standard protocol</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">PKCE guarantees that even if an attacker steals the authorization code, they cannot exchange it without the verifier</text>
</svg>`,
      caption: {
        en: 'The PKCE flow binds the authorization code to the original client via a cryptographic code verifier, defeating code interception.',
        bn: 'PKCE ফ্লো ক্রিপ্টোগ্রাফিক কোড ভেরিফায়ারের মাধ্যমে অথরাইজেশন কোডকে মূল ক্লায়েন্টের সাথে বেঁধে রাখে এবং কোড চুরি প্রতিরোধ করে।'
      },
    },
    {
      type: 'heading',
      id: 'oauth-pkce-code',
      text: {
        en: 'Building an OAuth 2.0 PKCE Verification Engine in Node.js',
        bn: 'Node.js-এ OAuth ২.০ PKCE ভেরিফিকেশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how modern identity providers verify Proof Key for Code Exchange (PKCE) requests, inspect the following simulator. It creates code challenges, issues single-use authorization codes, and rejects attackers attempting code interception.',
        bn: 'আধুনিক আইডেন্টিটি প্রোভাইডার কীভাবে Proof Key for Code Exchange (PKCE) রিকোয়েস্ট যাচাই করে তা দেখতে নিচের কোডটি লক্ষ্য করুন। এটি কোড চ্যালেঞ্জ তৈরি করে, এককালীন কোড ইস্যু করে এবং কোড চুরি করার চেষ্টাকারীকে সফলভাবে প্রতিহত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'oauth-pkce-server.js',
      code: `// RFC 7636 OAuth 2.0 PKCE Authorization & Token Exchange Engine
const crypto = require('crypto');

class OAuthPkceServer {
  constructor() {
    this.issuedCodes = new Map();
  }

  // Helper 1: Client generates random 43-character base64url code_verifier
  static generateCodeVerifier() {
    return crypto.randomBytes(32).toString('base64url');
  }

  // Helper 2: Client computes SHA-256 base64url code_challenge
  static deriveCodeChallenge(codeVerifier) {
    return crypto.createHash('sha256').update(codeVerifier).digest('base64url');
  }

  // Step 1: User approves consent; Server records code challenge and issues auth code
  authorize(clientId, codeChallenge, redirectUri) {
    const authCode = 'auth_code_' + crypto.randomBytes(16).toString('hex');
    const expiresAt = Date.now() + 60000; // 60-second validity

    this.issuedCodes.set(authCode, {
      clientId: clientId,
      codeChallenge: codeChallenge,
      redirectUri: redirectUri,
      expiresAt: expiresAt
    });

    return authCode;
  }

  // Step 2: Client exchanges code + verifier directly for Access Tokens
  exchangeToken(authCode, submittedCodeVerifier) {
    const record = this.issuedCodes.get(authCode);

    // Rule 1: Code must exist and be within 60s lifetime
    if (!record || Date.now() > record.expiresAt) {
      return { status: 400, error: 'Invalid or expired authorization code.' };
    }

    // Rule 2: Single-use burn (immediately delete code to prevent replay)
    this.issuedCodes.delete(authCode);

    // Rule 3: Recompute challenge from submitted verifier
    const recomputedChallenge = OAuthPkceServer.deriveCodeChallenge(submittedCodeVerifier);

    // Constant-time check: does the verifier match the original challenge?
    const isVerifierValid = crypto.timingSafeEqual(
      Buffer.from(recomputedChallenge),
      Buffer.from(record.codeChallenge)
    );

    if (!isVerifierValid) {
      console.log('[SECURITY BLOCKED] PKCE verification failed for code: ' + authCode);
      return { status: 400, error: 'PKCE challenge verification failed: invalid code_verifier.' };
    }

    // Issue tokens upon valid proof
    return {
      status: 200,
      tokenType: 'Bearer',
      expiresIn: 3600,
      accessToken: 'at_' + crypto.randomBytes(24).toString('hex'),
      idToken: 'id_' + crypto.randomBytes(24).toString('hex')
    };
  }
}

const server = new OAuthPkceServer();

console.log('=== Step 1: Legitimate Client Generates PKCE Verifier and Challenge ===');
const clientVerifier = OAuthPkceServer.generateCodeVerifier();
const clientChallenge = OAuthPkceServer.deriveCodeChallenge(clientVerifier);
console.log('Code Verifier (Stays Private on Client):', clientVerifier);
console.log('Code Challenge (Sent Publicly to IdP): ', clientChallenge);

console.log('\\n=== Step 2: User Consents; Server Issues Authorization Code ===');
const authCode = server.authorize('my-mobile-app', clientChallenge, 'https://app.com/callback');
console.log('Issued Authorization Code:', authCode);

console.log('\\n=== Step 3: Attacker Intercepts Code But Has Wrong Verifier ===');
const interceptedAttack = server.exchangeToken(authCode, 'attacker_random_fake_verifier_xyz');
console.log('Attacker Token Exchange Result:', interceptedAttack);

console.log('\\n=== Step 4: Legitimate Client Exchanges Code with Real Verifier ===');
// Re-issue fresh code since previous code was burned
const freshCode = server.authorize('my-mobile-app', clientChallenge, 'https://app.com/callback');
const legitExchange = server.exchangeToken(freshCode, clientVerifier);
console.log('Legitimate Token Exchange Result:', legitExchange);`,
      caption: {
        en: 'The PKCE server burns codes upon use and validates the code_verifier hash before issuing access tokens.',
        bn: 'PKCE সার্ভার একবার ব্যবহারে কোড নষ্ট করে এবং এক্সেস টোকেন দেওয়ার আগে কোড ভেরিফায়ারের হ্যাশ মিলিয়ে দেখে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why the Legacy Implicit Grant is Strictly Deprecated',
        bn: 'পুরানো ইমপ্লিসিট গ্রান্ট কেন কঠোরভাবে বাতিল করা হয়েছে'
      },
      text: {
        en: 'In early OAuth specifications, single-page web applications used the Implicit Grant flow, which returned access tokens directly inside the URL hash fragment (for example: https://app.com/callback#access_token=...). This was a catastrophic security flaw: access tokens were saved permanently inside browser history, visible inside web server access logs via HTTP Referer headers, and easily read by rogue browser extensions! Modern OAuth 2.1 strictly deprecates the Implicit Grant, requiring the Authorization Code Flow with PKCE for all web and mobile apps.',
        bn: 'আগের OAuth সংস্করণে সিঙ্গেল পেজ অ্যাপ্লিকেশনগুলো ইমপ্লিসিট গ্রান্ট ব্যবহার করত, যা ব্রাউজার ইউআরএলের হ্যাশের মধ্যে সরাসরি এক্সেস টোকেন ফেরত পাঠাত ( যেমন https://app.com/callback#access_token=... )। এটি ছিল এক ভয়াবহ নিরাপত্তা ত্রুটি: টোকেন ব্রাউজার হিস্ট্রিতে স্থায়ীভাবে থেকে যেত, সার্ভার অ্যাক্সেস লগে ফাঁস হতো এবং ক্ষতিকর ব্রাউজার এক্সটেনশনগুলো তা চুরি করতে পারত! আধুনিক OAuth ২.১ এ ইমপ্লিসিট গ্রান্ট পুরোপুরি বাতিল করে সমস্ত অ্যাপের জন্য PKCE যুক্ত অথরাইজেশন কোড ফ্লো বাধ্যতামূলক করা হয়েছে।'
      },
    },
  ],
  exercises: [
    {
      id: 'oauth-flw-ex-1',
      kind: 'predict',
      topic: 'oauth-core-roles',
      question: {
        en: 'How many primary roles (Resource Owner, Client, Authorization Server, Resource Server) govern the OAuth 2.0 framework? (4). Type the number.',
        bn: 'OAuth ২.০ ফ্রেমওয়ার্ক পরিচালনাকারী প্রধান ভূমিকা ( রিসোর্স ওনার, ক্লায়েন্ট, অথরাইজেশন সার্ভার, রিসোর্স সার্ভার ) সর্বমোট কয়টি? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'There are 4 core roles in OAuth 2.0.',
        bn: 'OAuth ২.০ তে ৪ টি মূল ভূমিকা রয়েছে।'
      },
      explanation: {
        en: 'The 4 roles clearly segregate the user, client application, identity provider, and API data resource.',
        bn: 'এই ৪ টি ভূমিকা ব্যবহারকারী, ক্লায়েন্ট অ্যাপ, আইডেন্টিটি প্রোভাইডার এবং এপিআই রিসোর্সকে সুনির্দিষ্টভাবে আলাদা করে।'
      },
    },
    {
      id: 'oauth-flw-ex-2',
      kind: 'mcq',
      topic: 'pkce-security-guarantee',
      question: {
        en: 'What critical security threat does PKCE (Proof Key for Code Exchange RFC 7636) prevent in mobile and single-page apps?',
        bn: 'মোবাইল এবং সিঙ্গেল পেজ অ্যাপ্লিকেশনে PKCE (Proof Key for Code Exchange RFC ৭৬৩৬) কোন মারাত্মক নিরাপত্তা ঝুঁকি প্রতিহত করে?'
      },
      options: [
        {
          en: 'Authorization Code Interception: preventing a malicious app on the same device or an eavesdropper from exchanging an intercepted authorization code without knowing the secret code_verifier',
          bn: 'অথরাইজেশন কোড চুরি: ডিভাইসের কোনো ক্ষতিকর অ্যাপ বা আক্রমণকারী চুরি করা কোড দিয়ে টোকেন পেতে পারে না কারণ তাদের কাছে গোপন code_verifier থাকে না',
        },
        {
          en: 'It stops smartphone batteries from draining during heavy phone calls',
          bn: 'এটি দীর্ঘ ফোন কলের সময় স্মার্টফোনের ব্যাটারি দ্রুত শেষ হওয়া রোধ করে',
        },
        {
          en: 'It prevents computer keyboards from typing exclamation marks',
          bn: 'এটি কম্পিউটারের কিবোর্ডকে আশ্চর্যবোধক চিহ্ন টাইপ করা থেকে বিরত রাখে',
        },
        {
          en: 'It turns all internet website links into physical paper tickets',
          bn: 'এটি সমস্ত ইন্টারনেট ওয়েবসাইট লিংককে কাগজের টিকিটে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'PKCE ensures stolen authorization codes cannot be exchanged without the verifier.',
        bn: 'PKCE নিশ্চিত করে যে গোপন ভেরিফায়ার ছাড়া চুরি করা কোড দিয়ে টোকেন পাওয়া অসম্ভব।',
      },
      explanation: {
        en: 'Even if an attacker intercepts the redirect code, token exchange requires SHA256(verifier) == challenge, which only the initiating client possesses.',
        bn: 'আক্রমণকারী কোড চুরি করলেও টোকেন পেতে হলে ভেরিফায়ার মেলাতে হয়, যা কেবল আসল ক্লায়েন্টের কাছেই থাকে।'
      },
    },
    {
      id: 'oauth-flw-ex-3',
      kind: 'mcq',
      topic: 'state-parameter-purpose',
      question: {
        en: 'What is the primary security purpose of the state parameter in an OAuth authorization request?',
        bn: 'একটি OAuth অথরাইজেশন রিকোয়েস্টে state প্যারামিটারের প্রধান নিরাপত্তা উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To prevent Cross-Site Request Forgery (CSRF) login attacks by ensuring the response received at the callback originates from the exact same user session that initiated the authorization flow',
          bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) লগইন আক্রমণ প্রতিরোধ করা, যা নিশ্চিত করে যে কলব্যাক ইউআরএলে আসা রেসপন্সটি সেই একই ইউজারের সেশন থেকেই শুরু হয়েছিল',
        },
        {
          en: 'To specify which state or province the server is physically located in',
          bn: 'সার্ভারটি ভৌগোলিকভাবে কোন প্রদেশ বা রাজ্যে অবস্থিত তা নির্ধারণ করা',
        },
        {
          en: 'To change the operating system language to English automatically',
          bn: 'অপারেটিং সিস্টেমের ভাষাকে নিজে নিজেই ইংরেজিতে পরিবর্তন করা',
        },
        {
          en: 'To double the download speed of video files from the server',
          bn: 'সার্ভার থেকে ভিডিও ফাইল ডাউনলোডের গতি দ্বিগুণ করে দেওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'The state parameter acts as a CSRF token across redirects.',
        bn: 'state প্যারামিটারটি রিডাইরেক্ট জুড়ে CSRF টোকেন হিসেবে কাজ করে।',
      },
      explanation: {
        en: 'The client verifies that the returned state matches its saved value. An attacker cannot inject an authorization code into a victim session without matching state.',
        bn: 'ক্লায়েন্ট নিশ্চিত করে যে ফেরত আসা state তার আগের মানের সাথে মিলছে, ফলে হ্যাকাররা অন্যের একাউন্ট জোর করে যুক্ত করতে পারে না।'
      },
    },
    {
      id: 'oauth-flw-ex-4',
      kind: 'predict',
      topic: 'pkce-verifier-minimum-length',
      question: {
        en: 'What is the minimum character length required for a cryptographically secure PKCE code verifier string? (43). Type the number.',
        bn: 'একটি ক্রিপ্টোগ্রাফিক PKCE কোড ভেরিফায়ার স্ট্রিংয়ের জন্য সর্বনিম্ন কত অক্ষরের দৈর্ঘ্য বাধ্যতামূলক? ( ৪৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '43',
      hint: {
        en: 'RFC 7636 mandates a minimum of 43 characters.',
        bn: 'RFC ৭৬৩৬ অনুযায়ী সর্বনিম্ন দৈর্ঘ্য হলো ৪৩ টি অক্ষর।'
      },
      explanation: {
        en: 'RFC 7636 specifies that a code_verifier must be between 43 and 128 characters long to guarantee high entropy.',
        bn: 'RFC ৭৬৩৬ অনুসারে উচ্চ নিরাপত্তা নিশ্চিত করতে code_verifier অবশ্যই ৪৩ থেকে ১২৮ অক্ষরের মধ্যে হতে হবে।'
      },
    },
  ],
  quiz: {
    id: 'oauth-flows-quiz',
    title: {
      en: 'OAuth 2.0 & OpenID Connect Architecture Quiz',
      bn: 'OAuth ২.০ ও ওপেনআইডি কানেক্ট আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'oauth-flw-qz-1',
        kind: 'mcq',
        topic: 'oauth-vs-oidc-distinction',
        question: {
          en: 'What is the fundamental architectural distinction between OAuth 2.0 and OpenID Connect (OIDC)?',
          bn: 'OAuth ২.০ এবং ওপেনআইডি কানেক্টের (OIDC) মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?'
        },
        options: [
          {
            en: 'OAuth 2.0 is an authorization delegation framework designed to grant access tokens for API resources; OpenID Connect is an identity layer built on top of OAuth 2.0 that provides authentication through digitally signed ID Tokens',
            bn: 'OAuth ২.০ হলো এপিআই রিসোর্স ব্যবহারের জন্য এক্সেস টোকেন প্রদানকারী একটি অনুমোদন ফ্রেমওয়ার্ক; আর ওপেনআইডি কানেক্ট হলো OAuth ২.০ এর ওপর নির্মিত আইডেন্টিটি স্তর যা ডিজিটাল সাইন করা আইডি টোকেনের মাধ্যমে পরিচয় প্রমাণ করে',
          },
          {
            en: 'OAuth 2.0 is only used for mobile phones, while OpenID Connect is only for desktop computers',
            bn: 'OAuth ২.০ কেবল মোবাইল ফোনে ব্যবহৃত হয় এবং ওপেনআইডি কানেক্ট কেবল ডেস্কটপ কম্পিউটারে ব্যবহৃত হয়',
          },
          {
            en: 'OpenID Connect was invented exclusively for smart television screens',
            bn: 'ওপেনআইডি কানেক্ট কেবল স্মার্ট টেলিভিশন পর্দার জন্য বিশেষভাবে তৈরি করা হয়েছিল',
          },
          {
            en: 'There is no difference; both protocols are identical in every technical aspect',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; কারিগরি দিক থেকে দুটি প্রটোকল সম্পূর্ণ এক',
          },
        ],
        answer: 0,
        hint: {
          en: 'OAuth 2.0 delegates access; OpenID Connect proves user identity.',
          bn: 'OAuth ২.০ অনুমোদন দেয়; আর ওপেনআইডি কানেক্ট পরিচয় নিশ্চিত করে।',
        },
        explanation: {
          en: 'Using OAuth alone for login was flawed because access tokens contain no identity claims. OIDC standardizes identity assertions via JWT ID tokens.',
          bn: 'লগইনের জন্য কেবল OAuth ব্যবহার ঝুঁকিপূর্ণ ছিল। OIDC আইডি টোকেন এনে পরিচয় নিশ্চিতকরণের আন্তর্জাতিক মান তৈরি করেছে।'
        },
      },
      {
        id: 'oauth-flw-qz-2',
        kind: 'mcq',
        topic: 'implicit-grant-vulnerabilities',
        question: {
          en: 'Why were access tokens returned inside URL hash fragments under the deprecated Implicit Grant vulnerable to catastrophic theft?',
          bn: 'বাতিলকৃত ইমপ্লিসিট গ্রান্টের আওতায় ইউআরএল হ্যাশ ফ্র্যাগমেন্টে ফেরত পাঠানো এক্সেস টোকেন কেন অত্যন্ত বিপজ্জনকভাবে চুরির ঝুঁকিতে থাকত?'
        },
        options: [
          {
            en: 'URL hash fragments are saved permanently in browser navigation history, logged by proxies, exposed via HTTP Referer headers, and directly accessible by any malicious script or browser extension running in the browser',
            bn: 'ইউআরএল হ্যাশ ব্রাউজারের হিস্ট্রিতে স্থায়ীভাবে সংরক্ষিত থাকে, প্রক্সি লগে রেকর্ড হয়, Referer হেডারের মাধ্যমে প্রকাশ পায় এবং যেকোনো ক্ষতিকর স্ক্রিপ্ট বা ব্রাউজার এক্সটেনশন তা পড়ে নিতে পারে',
          },
          {
            en: 'Because URL hashes make computer processors consume ten times more electricity',
            bn: 'কারণ ইউআরএল হ্যাশ কম্পিউটারের প্রসেসরে দশ গুণ বেশি বিদ্যুৎ খরচ করায়',
          },
          {
            en: 'Because web browser windows refuse to close when hash fragments exist',
            bn: 'কারণ হ্যাশ ফ্র্যাগমেন্ট থাকলে ওয়েব ব্রাউজারের উইন্ডো বন্ধ হতে চায় না',
          },
          {
            en: 'Because URL hash fragments delete user passwords automatically',
            bn: 'কারণ ইউআরএল হ্যাশ ফ্র্যাগমেন্ট ব্যবহারকারীর পাসওয়ার্ড নিজে থেকেই মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tokens in URLs leak into history, logs, and browser extensions.',
          bn: 'ইউআরএলে থাকা টোকেন হিস্ট্রি, সার্ভার লগ এবং ব্রাউজার এক্সটেনশনে ফাঁস হয়ে যায়।',
        },
        explanation: {
          en: 'The Authorization Code Flow with PKCE delivers tokens across a secure direct POST channel, never exposing access tokens in URL strings.',
          bn: 'PKCE ফ্লোতে টোকেন সরাসরি নিরাপদ POST রিকোয়েস্টে পাঠানো হয়, ফলে ইউআরএলে কোনো টোকেন উন্মুক্ত হয় না।'
        },
      },
      {
        id: 'oauth-flw-qz-3',
        kind: 'mcq',
        topic: 'auth-code-single-use-lifetime',
        question: {
          en: 'Why must OAuth authorization codes strictly enforce single-use consumption and very short lifetimes (such as 60 seconds)?',
          bn: 'OAuth অথরাইজেশন কোডগুলোর ক্ষেত্রে কেন কঠোরভাবে এককালীন ব্যবহার এবং অতি সংক্ষিপ্ত মেয়াদ ( যেমন ৬০ সেকেন্ড ) বাধ্যতামূলক করা হয়?'
        },
        options: [
          {
            en: 'To minimize the window of opportunity for an attacker to intercept and exchange the code, and to ensure that once a code has been exchanged, it cannot be replayed even if stolen from logs',
            bn: 'আক্রমণকারী যেন কোড চুরি করে টোকেন নেওয়ার পর্যাপ্ত সময় না পায় এবং একবার ব্যবহৃত কোড লগ থেকে চুরি হলেও যেন পুনরায় ব্যবহার করা অসম্ভব হয়',
          },
          {
            en: 'Because authorization codes take up too much physical memory in server microchips',
            bn: 'কারণ অথরাইজেশন কোড সার্ভারের মাইক্রোচিপে অতিরিক্ত মেমোরি দখল করে রাখে',
          },
          {
            en: 'Because web browsers automatically restart every sixty seconds',
            bn: 'কারণ ওয়েব ব্রাউজার প্রতি ৬০ সেকেন্ড পর পর স্বয়ংক্রিয়ভাবে রিস্টার্ট নেয়',
          },
          {
            en: 'Because internet cables cannot carry codes for longer than one minute',
            bn: 'কারণ ইন্টারনেট কেবল এক মিনিটের বেশি সময় ধরে কোনো কোড পরিবহন করতে পারে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Short-lived, single-use codes prevent replay and minimize exposure windows.',
          bn: 'স্বল্পস্থায়ী এককালীন কোড পুনরায় ব্যবহার রোধ করে এবং ঝুঁকির সময়সীমা কমায়।',
        },
        explanation: {
          en: 'If a server detects an already-used code submitted a second time, it should immediately revoke all tokens previously issued from that authorization grant.',
          bn: 'ব্যবহৃত কোড দ্বিতীয়বার সাবমিট করা হলে সার্ভারের উচিত সেই কোড থেকে আগে দেওয়া সমস্ত টোকেন সাথে সাথে বাতিল করে দেওয়া।'
        },
      },
      {
        id: 'oauth-flw-qz-4',
        kind: 'mcq',
        topic: 'scope-parameter-least-privilege',
        question: {
          en: 'How does the scope parameter in an OAuth authorization request enforce the Principle of Least Privilege?',
          bn: 'একটি OAuth অথরাইজেশন রিকোয়েস্টে scope প্যারামিটারটি কীভাবে ন্যূনতম অধিকারের নীতি (Principle of Least Privilege) বাস্তবায়ন করে?'
        },
        options: [
          {
            en: 'It explicitly defines the exact granular permissions the client application is requesting (e.g. read:profile versus write:payment), allowing users to grant access to specific data without providing full account control',
            bn: 'এটি ক্লায়েন্ট অ্যাপ্লিকেশনের দাবিকৃত নির্দিষ্ট অনুমতিগুলো স্পষ্টভাবে নির্ধারণ করে ( যেমন কেবল প্রোফাইল দেখা বনাম পেমেন্ট করা ), ফলে ব্যবহারকারী পূর্ণ নিয়ন্ত্রণ না দিয়ে নির্দিষ্ট ডেটার সীমিত এক্সেস দিতে পারেন',
          },
          {
            en: 'It increases the physical screen size of the user smartphone',
            bn: 'এটি ব্যবহারকারীর স্মার্টফোনের স্ক্রিনের শারীরিক আকার বড় করে দেয়',
          },
          {
            en: 'It deletes all files stored inside the user computer download folder',
            bn: 'এটি ব্যবহারকারীর কম্পিউটারের ডাউনলোড ফোল্ডারে থাকা সমস্ত ফাইল মুছে ফেলে',
          },
          {
            en: 'It turns the website background color into bright yellow',
            bn: 'এটি ওয়েবসাইটের ব্যাকগ্রাউন্ড রঙ উজ্জ্বল হলুদে রূপান্তরিত করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Scopes restrict access tokens to specific, limited API operations.',
          bn: 'স্কোপ এক্সেস টোকেনকে কেবল নির্দিষ্ট ও সীমিত এপিআই কাজের মধ্যে সীমাবদ্ধ রাখে।',
        },
        explanation: {
          en: 'Scopes limit blast radius. If an access token with scope "read:avatar" is compromised, the attacker cannot modify account passwords or drain funds.',
          bn: 'স্কোপ ক্ষতির পরিধি সীমাবদ্ধ করে। কেবল ছবি দেখার অনুমতিযুক্ত টোকেন চুরি হলেও আক্রমণকারী একাউন্টের কোনো ক্ষতি করতে পারে না।'
        },
      },
    ],
  },
  next: {
    slug: 'jwt-tokens',
    title: {
      en: 'JSON Web Tokens: Signatures, Claims & Cryptographic Verification',
      bn: 'JSON ওয়েব টোকেন: সিগনেচার, ক্লেইমস এবং ক্রিপ্টোগ্রাফিক যাচাই'
    },
  },
};
