import type { Lesson } from '../../../lib/types';

export const PasswordlessAuthLesson: Lesson = {
  slug: 'passwordless-auth',
  tech: 'authentication',
  title: {
    en: 'Passwordless Authentication & Passkeys: WebAuthn, FIDO2 & Cryptographic Nonces',
    bn: 'পাসওয়ার্ডহীন প্রমাণীকরণ এবং পাসকি: WebAuthn, FIDO2 এবং ক্রিপ্টোগ্রাফিক ননস'
  },
  summary: {
    en: 'Eliminate credential theft and database credential dumps through modern passwordless authentication. Understand the FIDO2 and WebAuthn specifications built directly into modern web browsers and mobile devices. Discover how public-key cryptography replaces shared secrets: the user device generates an asymmetric keypair, storing the private key inside hardware secure enclaves. Learn how browser origin-binding makes passkeys mathematically immune to credential phishing attacks.',
    bn: 'পাসওয়ার্ডহীন আধুনিক প্রমাণীকরণ ব্যবস্থা ব্যবহারের মাধ্যমে ক্রেডেনশিয়াল চুরি ও ডাটাবেজ ফাঁসের ঝুঁকি চিরতরে দূর করুন। আধুনিক ওয়েব ব্রাউজার এবং মোবাইল ডিভাইসে যুক্ত থাকা FIDO2 এবং WebAuthn স্পেসিফিকেশনগুলো বুঝুন। জানুন কীভাবে পাবলিক-কি ক্রিপ্টোগ্রাফি শেয়ার্ড পাসওয়ার্ডের ধারণা বাতিল করে: ব্যবহারকারীর ডিভাইস একটি অ্যাসাইমেট্রিক কি-জোড় তৈরি করে এবং হার্ডওয়্যার সিকিউর এনক্লেভে প্রাইভেট কি নিরাপদে রাখে। ব্রাউজারের অরিজিন-বাইন্ডিং কীভাবে পাসকিকে ফিশিং আক্রমণের বিরুদ্ধে শতভাগ নিরাপদ করে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'death-of-shared-secrets',
      text: {
        en: 'The Fatal Flaw of Passwords: Why Shared Secrets Must Die',
        bn: 'পাসওয়ার্ডের প্রাণঘাতী দুর্বলতা: শেয়ার্ড সিক্রেট কেন বাদ দেওয়া প্রয়োজন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you design an authentication architecture, you quickly discover that shared secrets are a dangerous foundation: both the user and the server know the password. This architectural design creates two unavoidable vulnerabilities: users reuse weak passwords across multiple websites, and a compromised database exposes credentials to attackers.',
        bn: 'যখন আপনি একটি প্রমাণীকরণ ব্যবস্থা ডিজাইন করেন, তখন আপনি লক্ষ্য করবেন যে শেয়ার্ড সিক্রেট একটি ঝুঁকিপূর্ণ ভিত্তি: ব্যবহারকারী ও সার্ভার উভয়ই পাসওয়ার্ডটি জানে। এই কাঠামোগত দুর্বলতা দুটি মারাত্মক বিপদের জন্ম দেয়: ব্যবহারকারীরা বিভিন্ন ওয়েবসাইটে একই দুর্বল পাসওয়ার্ড ব্যবহার করেন এবং সার্ভারের ডাটাবেজ হ্যাক হলে সব তথ্য আক্রমণকারীদের হাতে চলে যায়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Passkeys and WebAuthn eliminate shared secrets entirely by replacing passwords with asymmetric public-key cryptography. The server never stores a secret password; it only stores the public key. Authentication is proven when the user biometric sensor (TouchID, FaceID, or Windows Hello) authorizes the hardware device to sign a fresh cryptographic challenge.',
        bn: 'পাসকি এবং WebAuthn পাসওয়ার্ডের বদলে অ্যাসাইমেট্রিক পাবলিক-কি ক্রিপ্টোগ্রাফি ব্যবহার করে শেয়ার্ড সিক্রেটের ধারণাকে সম্পূর্ণভাবে মুছে দিয়েছে। সার্ভারে কখনোই কোনো গোপন পাসওয়ার্ড রাখা হয় না; সেখানে কেবল পাবলিক কি জমা থাকে। ব্যবহারকারী যখন বায়োমেট্রিক সেন্সরে ( টাচআইডি, ফেসআইডি বা উইন্ডোজ হ্যালো ) আঙুল বা মুখ স্পর্শ করেন, তখন হার্ডওয়্যার ডিভাইস একটি তাজা চ্যালেঞ্জ ক্রিপ্টোগ্রাফিক সাইন করে পরিচয় প্রমাণ করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Registration Ceremony (Attestation)',
            bn: '১. নিবন্ধন পর্ব (অ্যাটেস্টেশন)'
          },
          text: {
            en: 'The server sends a cryptographically random challenge. The browser requests user biometric consent. The device hardware chip (Secure Enclave or TPM) generates a unique key pair, signs the challenge, and sends only the public key to the server.',
            bn: 'সার্ভার একটি ক্রিপ্টোগ্রাফিক র্যান্ডম চ্যালেঞ্জ পাঠায়। ব্রাউজার ব্যবহারকারীর বায়োমেট্রিক সম্মতি চায়। ডিভাইসের হার্ডওয়্যার চিপ ( সিকিউর এনক্লেভ বা টিপিএম ) একটি অনন্য কি-জোড় তৈরি করে চ্যালেঞ্জটি সাইন করে এবং সার্ভারে কেবল পাবলিক কি পাঠিয়ে দেয়।'
          },
        },
        {
          title: {
            en: '2. Login Ceremony (Assertion)',
            bn: '২. লগইন পর্ব (অ্যাসারশন)'
          },
          text: {
            en: 'When logging in, the server generates a fresh single-use nonce challenge (such as 32 random bytes with a 60-second expiration).',
            bn: 'লগইনের সময় সার্ভার একটি নতুন একক-ব্যবহারযোগ্য ননস চ্যালেঞ্জ ( যেমন ৬০ সেকেন্ড মেয়াদের ৩২ র্যান্ডম বাইট ) তৈরি করে পাঠায়।'
          },
        },
        {
          title: {
            en: '3. Hardware Signature Generation',
            bn: '৩. হার্ডওয়্যার সিগনেচার তৈরি'
          },
          text: {
            en: 'The user confirms with biometrics. The device signs the challenge combined with the exact browser website domain (origin) using the hardware private key.',
            bn: 'ব্যবহারকারী বায়োমেট্রিক দিয়ে নিশ্চিত করেন। ডিভাইসের হার্ডওয়্যার প্রাইভেট কি ব্যবহার করে ব্রাউজারের নির্দিষ্ট ওয়েবসাইটের ডোমেইনসহ ( অরিজিন ) চ্যালেঞ্জটিকে সাইন করে।'
          },
        },
        {
          title: {
            en: '4. Mathematical Proof Verification',
            bn: '৪. গাণিতিক প্রমাণ যাচাইকরণ'
          },
          text: {
            en: 'The server verifies the signature using the stored public key. If the signature is valid and the origin matches, access is granted. The private key never left the hardware!',
            bn: 'সার্ভার তার কাছে থাকা পাবলিক কি দিয়ে সিগনেচারটি যাচাই করে। সিগনেচার সঠিক হলে এবং ডোমেইন মিলে গেলে এক্সেস নিশ্চিত হয়। কোনো প্রাইভেট কি কখনোই হার্ডওয়্যার ডিভাইস ছেড়ে বের হয় না!'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The WebAuthn Passkey Handshake: Zero Passwords, Phishing-Proof',
        bn: 'WebAuthn পাসকি হ্যান্ডশেক: পাসওয়ার্ডবিহীন এবং সম্পূর্ণ ফিশিং-রোধী'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="WebAuthn architecture diagram illustrating passkey login and phishing protection">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">WEBAUTHN &amp; FIDO2 PASSKEY ARCHITECTURE</text>
  
  <!-- Left Side: User Client Hardware Device -->
  <g transform="translate(35, 50)">
    <rect width="360" height="345" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">CLIENT DEVICE (PHONE / LAPTOP)</text>
    
    <!-- Secure Enclave Box -->
    <g transform="translate(20, 40)">
      <rect width="320" height="135" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="160" y="22" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">HARDWARE SECURITY CHIP (TPM / ENCLAVE)</text>
      
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">• Private Key: Stored in tamper-proof silicon</text>
      <text x="15" y="62" fill="#ef4444" font-size="8.5">• Never leaves hardware, cannot be exported</text>
      <text x="15" y="80" fill="#cbd5e1" font-size="8.5">• Biometric Gate: TouchID / FaceID required</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8.5">• Signs challenge with ECDSA P-256 / Ed25519</text>
      <text x="15" y="116" fill="#38bdf8" font-size="8.5">• Returns: { signature, clientDataJSON }</text>
    </g>
    
    <!-- Browser Origin Binding -->
    <g transform="translate(20, 190)">
      <rect width="320" height="135" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="160" y="22" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">BROWSER ORIGIN ENFORCEMENT</text>
      
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">• Browser auto-injects active URL domain:</text>
      <text x="25" y="62" fill="#38bdf8" font-size="8">origin: "https://secure-bank.example.com"</text>
      <text x="15" y="82" fill="#fca5a5" font-size="8.5">• If user visits fake phish-bank.com:</text>
      <text x="25" y="98" fill="#ef4444" font-size="8">Browser binds "origin": "https://phish-bank.com"</text>
      <text x="15" y="118" fill="#6ee7b7" font-size="8.5">• Real bank server REJECTS mismatched domain!</text>
    </g>
  </g>
  
  <!-- Right Side: Relying Party Server -->
  <g transform="translate(445, 50)">
    <rect width="360" height="345" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="180" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">RELYING PARTY (AUTHENTICATION SERVER)</text>
    
    <!-- Step 1: Challenge -->
    <g transform="translate(20, 40)">
      <rect width="320" height="85" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="22" fill="#38bdf8" font-size="10" font-weight="bold">1. CHALLENGE GENERATION</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">• Nonce: 32 cryptographically random bytes</text>
      <text x="15" y="62" fill="#cbd5e1" font-size="8.5">• TTL: 60-second single-use lifetime</text>
      <text x="15" y="78" fill="#f59e0b" font-size="8.5">• Immediately burns nonce after 1 verification</text>
    </g>
    
    <!-- Step 2: Verification -->
    <g transform="translate(20, 140)">
      <rect width="320" height="185" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="22" fill="#6ee7b7" font-size="10" font-weight="bold">2. CRYPTOGRAPHIC VERIFICATION</text>
      
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">Check 1: Does nonce match pending challenge? ✓</text>
      <text x="15" y="64" fill="#cbd5e1" font-size="8.5">Check 2: Does origin == expected domain? ✓</text>
      <text x="15" y="84" fill="#cbd5e1" font-size="8.5">Check 3: Verify signature using user Public Key:</text>
      <text x="25" y="104" fill="#f8fafc" font-size="8">crypto.verify(userPublicKey, clientData, sig)</text>
      <text x="15" y="126" fill="#6ee7b7" font-size="9" font-weight="bold">✓ SIGNATURE VALID: User Authenticated!</text>
      
      <rect x="15" y="140" width="290" height="32" rx="4" fill="#022c22"/>
      <text x="160" y="160" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">Zero passwords stored! Zero credentials stolen!</text>
    </g>
  </g>
  
  <text x="420" y="420" fill="#94a3b8" font-size="10" text-anchor="middle">Passkeys render credential phishing attacks impossible through cryptographic browser origin binding</text>
</svg>`,
      caption: {
        en: 'WebAuthn passkeys rely on hardware-backed private keys and origin-bound domain verification, making credential theft impossible.',
        bn: 'WebAuthn পাসকি হার্ডওয়্যার-সুরক্ষিত প্রাইভেট কি এবং ব্রাউজার অরিজিন যাচাইয়ের ওপর ভিত্তি করে কাজ করে, যা তথ্য চুরি অসম্ভব করে তোলে।'
      },
    },
    {
      type: 'heading',
      id: 'webauthn-server-code',
      text: {
        en: 'Building a WebAuthn & Passkey Verification Server in Node.js',
        bn: 'Node.js-এ WebAuthn এবং পাসকি ভেরিফিকেশন সার্ভার তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect how a backend handles the WebAuthn challenge-response assertion protocol. It registers public keys, produces 32-byte nonces, enforces origin validation to block phishing attacks, and verifies ECDSA signatures using Node.js crypto primitives.',
        bn: 'একটি ব্যাকএন্ড সার্ভার কীভাবে WebAuthn চ্যালেঞ্জ-রেসপন্স প্রটোকল পরিচালনা করে তা দেখুন। এটি ব্যবহারকারীর পাবলিক কি সংরক্ষণ করে, ৩২-বাইটের ননস তৈরি করে, ফিশিং আক্রমণ ঠেকাতে অরিজিন যাচাই করে এবং Node.js ক্রিপ্টো দিয়ে ECDSA সিগনেচার যাচাই করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'webauthn-passkey-server.js',
      code: `// FIDO2 / WebAuthn Server-Side Passkey Authentication Engine
const crypto = require('crypto');

class PasskeyAuthServer {
  constructor() {
    this.users = new Map();
    this.pendingChallenges = new Map();
    this.expectedOrigin = 'https://portal.enterprise.com';
  }

  // 1. User Registration: Store user public key (PEM format)
  registerUser(userId, publicKeyPem) {
    this.users.set(userId, {
      userId: userId,
      publicKeyPem: publicKeyPem,
      signCount: 0
    });
    console.log('[USER REGISTERED] Stored public key for ' + userId + ' (no passwords stored!)');
  }

  // 2. Auth Ceremony: Generate fresh single-use cryptographic challenge nonce
  generateChallenge(userId) {
    const challenge = crypto.randomBytes(32).toString('base64url');
    const expiresAt = Date.now() + 60000; // 60-second expiration

    this.pendingChallenges.set(userId, {
      challenge: challenge,
      expiresAt: expiresAt
    });

    return challenge;
  }

  // 3. Complete Ceremony: Cryptographically verify signed client assertion
  verifyAssertion(userId, signatureBase64, clientDataJSON) {
    const user = this.users.get(userId);
    if (!user) {
      return { success: false, error: 'User is not registered.' };
    }

    const pending = this.pendingChallenges.get(userId);
    if (!pending || Date.now() > pending.expiresAt) {
      return { success: false, error: 'Challenge expired or does not exist.' };
    }

    // Single-use burn: delete immediately to defeat replay attacks
    this.pendingChallenges.delete(userId);

    // Parse clientData JSON created by browser
    let clientData;
    try {
      clientData = JSON.parse(clientDataJSON);
    } catch (e) {
      return { success: false, error: 'Malformed clientDataJSON.' };
    }

    // DEFENSE 1: Origin Binding (Defeats Phishing Attacks completely)
    if (clientData.origin !== this.expectedOrigin) {
      return {
        success: false,
        error: '[PHISHING BLOCKED] Domain origin mismatch! Disallowed: ' + clientData.origin
      };
    }

    // DEFENSE 2: Nonce challenge verification
    if (clientData.challenge !== pending.challenge) {
      return { success: false, error: 'Challenge nonce does not match.' };
    }

    // DEFENSE 3: Cryptographic signature verification using Public Key
    const verifier = crypto.createVerify('SHA256');
    verifier.update(clientDataJSON);
    const isSignatureValid = verifier.verify(user.publicKeyPem, signatureBase64, 'base64url');

    if (!isSignatureValid) {
      return { success: false, error: 'Cryptographic signature is invalid.' };
    }

    // Increment monotonic counter
    user.signCount += 1;
    return {
      success: true,
      message: 'Passkey login verified successfully! Monotonic sign counter: ' + user.signCount
    };
  }
}

// Client Device Simulation (TouchID / Secure Enclave hardware key generation)
const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
  namedCurve: 'prime256v1',
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

const server = new PasskeyAuthServer();
server.registerUser('mina_dev', publicKey);

console.log('=== Scenario 1: Legitimate User Authenticates with Passkey ===');
const legitChallenge = server.generateChallenge('mina_dev');
const legitClientData = JSON.stringify({
  type: 'webauthn.get',
  challenge: legitChallenge,
  origin: 'https://portal.enterprise.com'
});

const signer = crypto.createSign('SHA256');
signer.update(legitClientData);
const legitSignature = signer.sign(privateKey, 'base64url');

const legitResult = server.verifyAssertion('mina_dev', legitSignature, legitClientData);
console.log('Legitimate Login Result:', legitResult);

console.log('\\n=== Scenario 2: Phishing Site Tries to Steal User Authentication ===');
// Attacker tricks user into clicking https://phish-enterprise.fake
const phishChallenge = server.generateChallenge('mina_dev');
const phishClientData = JSON.stringify({
  type: 'webauthn.get',
  challenge: phishChallenge,
  origin: 'https://phish-enterprise.fake' // Browser automatically injects real phishing URL
});

const phishSigner = crypto.createSign('SHA256');
phishSigner.update(phishClientData);
const phishSignature = phishSigner.sign(privateKey, 'base64url');

const phishResult = server.verifyAssertion('mina_dev', phishSignature, phishClientData);
console.log('Phishing Attack Result:', phishResult);`,
      caption: {
        en: 'The passkey server checks the origin header and verifies hardware signatures without holding passwords.',
        bn: 'পাসকি সার্ভার পাসওয়ার্ড সংরক্ষণ না করেই অরিজিন হেডার এবং হার্ডওয়্যার সিগনেচার যাচাই করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Email Magic Links: Accessible Passwordless Fallback',
        bn: 'ইমেইল ম্যাজিক লিংক: পাসওয়ার্ডহীন প্রমাণীকরণের সহজ বিকল্প'
      },
      text: {
        en: 'For users without modern passkey hardware, email Magic Links provide an accessible passwordless alternative. The server generates a high-entropy 32-byte cryptographically random token, stores its SHA-256 hash in the database with a short lifetime (such as 15 minutes), and emails the token in a login link. Storing only the SHA-256 hash guarantees that even if the database is leaked, attackers cannot log into user accounts.',
        bn: 'যেসব ব্যবহারকারীর কাছে আধুনিক পাসকি হার্ডওয়্যার নেই, তাদের জন্য ইমেইল ম্যাজিক লিংক একটি চমৎকার পাসওয়ার্ডহীন বিকল্প। সার্ভার একটি ৩২-বাইটের র্যান্ডম ক্রিপ্টোগ্রাফিক টোকেন তৈরি করে, ডাটাবেজে এর SHA-২৫৬ হ্যাশ সংক্ষিপ্ত মেয়াদের জন্য ( যেমন ১৫ মিনিট ) সংরক্ষণ করে এবং ব্যবহারকারীকে লগইন লিংক পাঠায়। ডাটাবেজে সরাসরি টোকেন না রেখে কেবল হ্যাশ রাখায় ডাটাবেজ ফাঁস হলেও আক্রমণকারীরা লগইন করতে পারে না।'
      },
    },
  ],
  exercises: [
    {
      id: 'pwdless-ex-1',
      kind: 'predict',
      topic: 'passkey-passwords-stored',
      question: {
        en: 'How many plaintext user passwords does a WebAuthn passkey server store in its database? (0). Type the number.',
        bn: 'একটি WebAuthn পাসকি সার্ভার তার ডাটাবেজে প্লেইনটেক্সট আকারে কয়টি ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণ করে? ( ০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'Passkey servers store public keys, never passwords (0).',
        bn: 'পাসকি সার্ভারে কেবল পাবলিক কি থাকে, কোনো পাসওয়ার্ড থাকে না ( ০ )।',
      },
      explanation: {
        en: 'Because WebAuthn uses asymmetric cryptography, servers store 0 passwords, completely eliminating database credential dump vulnerabilities.',
        bn: 'WebAuthn অ্যাসাইমেট্রিক ক্রিপ্টোগ্রাফি ব্যবহার করায় সার্ভারে ০ টি পাসওয়ার্ড জমা থাকে, ফলে ডাটাবেজ হ্যাক হলেও পাসওয়ার্ড চুরির ভয় থাকে না।'
      },
    },
    {
      id: 'pwdless-ex-2',
      kind: 'mcq',
      topic: 'origin-binding-phishing-defense',
      question: {
        en: 'Why are WebAuthn passkeys mathematically immune to credential phishing attacks?',
        bn: 'WebAuthn পাসকি কেন ক্রেডেনশিয়াল ফিশিং আক্রমণের বিরুদ্ধে গাণিতিকভাবে সম্পূর্ণ নিরাপদ?'
      },
      options: [
        {
          en: 'The browser automatically injects the current website origin into the signed data structure; if an attacker tricks a user onto a phishing domain, the signature origin does not match the legitimate server domain, causing instant rejection',
          bn: 'ব্রাউজার নিজে থেকেই বর্তমান ওয়েবসাইটের অরিজিন বা ডোমেইন সাইন করা ডেটার মধ্যে যুক্ত করে; ফলে ব্যবহারকারীকে কোনো ভুয়া বা ফিশিং সাইটে নিয়ে গেলেও ডোমেইন না মেলায় আসল সার্ভার তা সাথে সাথে প্রত্যাখ্যান করে',
        },
        {
          en: 'Because passkeys turn off computer internet connections whenever a bad link is opened',
          bn: 'কারণ কোনো ক্ষতিকর লিংক খুললে পাসকি কম্পিউটারের ইন্টারনেট সংযোগ সম্পূর্ণ বন্ধ করে দেয়',
        },
        {
          en: 'Because passkeys force the user to solve ten mathematical geometry problems before logging in',
          bn: 'কারণ পাসকি লগইন করার আগে ব্যবহারকারীকে দশটি জ্যামিতিক অঙ্ক সমাধান করতে বাধ্য করে',
        },
        {
          en: 'Because web browsers only allow users to visit five websites per calendar year',
          bn: 'কারণ ওয়েব ব্রাউজার ব্যবহারকারীদের প্রতি বছর সর্বোচ্চ পাঁচটি ওয়েবসাইট দেখার অনুমতি দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Browser origin binding makes phishing signatures invalid on the real domain.',
        bn: 'ব্রাউজারের অরিজিন বাইন্ডিং আসল ডোমেইনে ফিশিং সিগনেচারকে বাতিল করে দেয়।'
      },
      explanation: {
        en: 'A user cannot accidentally give away their credential to a fake site because the credential is tied to the genuine domain by the browser engine itself.',
        bn: 'ব্যবহারকারী ভুলবশত কোনো ভুয়া সাইটে তথ্য দিলেও তা কাজে আসে না কারণ ব্রাউজার নিজে ডোমেইনের সত্যতা নিশ্চিত করে।'
      },
    },
    {
      id: 'pwdless-ex-3',
      kind: 'mcq',
      topic: 'private-key-hardware-storage',
      question: {
        en: 'Where is the private cryptographic key stored in a hardware-backed passkey implementation?',
        bn: 'হার্ডওয়্যার-সমর্থিত পাসকি ব্যবহারে গোপন ক্রিপ্টোগ্রাফিক প্রাইভেট কি কোথায় সংরক্ষণ করা হয়?'
      },
      options: [
        {
          en: 'Inside a tamper-resistant hardware security chip (such as Apple Secure Enclave, Android StrongBox, or TPM) on the user device, where it can never be extracted or exported across the network',
          bn: 'ব্যবহারকারীর ডিভাইসের ভেতরের একটি শক্তিশালী হার্ডওয়্যার নিরাপত্তা চিপে ( যেমন অ্যাপল সিকিউর এনক্লেভ, অ্যান্ড্রয়েড স্ট্রংবক্স বা টিপিএম ), যেখান থেকে এটি কখনোই বের করা বা ইন্টারনেটে পাঠানো যায় না',
        },
        {
          en: 'Inside a publicly accessible text file saved in the computer desktop folder',
          bn: 'কম্পিউটারের ডেস্কটপ ফোল্ডারে সংরক্ষিত একটি সবার জন্য উন্মুক্ত টেক্সট ফাইলের মধ্যে',
        },
        {
          en: 'Printed on a paper card stored inside the user wallet',
          bn: 'ব্যবহারকারীর মানিব্যাগে রাখা একটি কাগজের কার্ডের ওপর প্রিন্ট করা অবস্থায়',
        },
        {
          en: 'In an unencrypted email draft inside the user email inbox',
          bn: 'ব্যবহারকারীর ইমেইল ইনবক্সে একটি আন-এনক্রিপ্টেড ড্রাফট ইমেইলের ভেতর',
        },
      ],
      answer: 0,
      hint: {
        en: 'Private keys remain protected inside dedicated hardware chips.',
        bn: 'প্রাইভেট কি ডিভাইসের ডেডিকেটেড হার্ডওয়্যার চিপের ভেতরেই সুরক্ষিত থাকে।'
      },
      explanation: {
        en: 'Hardware security modules sign challenges internally without ever disclosing the private key material to software or operating systems.',
        bn: 'হার্ডওয়্যার সিকিউরিটি মডিউল প্রাইভেট কি বাইরে প্রকাশ না করেই ভেতরের চিপে চ্যালেঞ্জ সাইন করার কাজ সম্পন্ন করে।'
      },
    },
    {
      id: 'pwdless-ex-4',
      kind: 'predict',
      topic: 'challenge-nonce-recommended-bytes',
      question: {
        en: 'How many cryptographically secure random bytes are recommended when generating a WebAuthn server challenge nonce? (32). Type the number.',
        bn: 'একটি WebAuthn সার্ভার চ্যালেঞ্জ ননস তৈরির সময় সর্বনিম্ন কত ক্রিপ্টোগ্রাফিক র্যান্ডম বাইট ব্যবহারের সুপারিশ করা হয়? ( ৩২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '32',
      hint: {
        en: '32 random bytes provide 256 bits of entropy.',
        bn: '৩২ র্যান্ডম বাইট ২৫৬ বিটের উচ্চ নিরাপত্তা প্রদান করে।'
      },
      explanation: {
        en: 'A 32-byte (256-bit) cryptographic nonce prevents replay attacks and collision probabilities.',
        bn: 'একটি ৩২-বাইটের ননস রিপ্লে আক্রমণ এবং র্যান্ডম মিলের ঝুঁকি সম্পূর্ণ প্রতিরোধ করে।'
      },
    },
  ],
  quiz: {
    id: 'passwordless-auth-quiz',
    title: {
      en: 'Passwordless & WebAuthn Architecture Quiz',
      bn: 'পাসওয়ার্ডহীন ও WebAuthn আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'pwdless-qz-1',
        kind: 'mcq',
        topic: 'asymmetric-cryptography-role',
        question: {
          en: 'How does asymmetric public-key cryptography fundamentally transform server security in WebAuthn compared to passwords?',
          bn: 'পাসওয়ার্ডের তুলনায় অ্যাসাইমেট্রিক পাবলিক-কি ক্রিপ্টোগ্রাফি কীভাবে WebAuthn-এ সার্ভারের নিরাপত্তাকে মৌলিকভাবে রূপান্তর করে?'
        },
        options: [
          {
            en: 'The server stores only public keys which are harmless if leaked, because an attacker holding a public key cannot forge signatures or impersonate the user without the hardware-locked private key',
            bn: 'সার্ভার কেবলমাত্র পাবলিক কি সংরক্ষণ করে যা ফাঁস হলেও কোনো ক্ষতি হয় না, কারণ হার্ডওয়্যারে আটকে থাকা প্রাইভেট কি ছাড়া শুধু পাবলিক কি দিয়ে আক্রমণকারী কখনোই সাইন নকল করতে পারে না',
          },
          {
            en: 'It increases the processing speed of the server motherboard cooling fans',
            bn: 'এটি সার্ভারের মাদারবোর্ডের কুলিং ফ্যানের ঘোরার গতি দ্বিগুণ বাড়িয়ে দেয়',
          },
          {
            en: 'It reduces the cost of office electricity bills by thirty percent',
            bn: 'এটি অফিসের মাসিক বিদ্যুৎ বিলের খরচ ত্রিশ শতাংশ পর্যন্ত কমিয়ে দেয়',
          },
          {
            en: 'It causes computer keyboards to turn on colorful lights at midnight',
            bn: 'এটি মধ্যরাতে কম্পিউটারের কিবোর্ডে রঙিন বাতি জ্বালাতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Public keys can be freely revealed without compromising user accounts.',
          bn: 'পাবলিক কি সবার সামনে উন্মুক্ত হলেও অ্যাকাউন্টের কোনো ক্ষতি হয় না।'
        },
        explanation: {
          en: 'In password-based authentication, a database leak is catastrophic. In WebAuthn, a database leak of public keys gives an attacker zero ability to authenticate.',
          bn: 'পাসওয়ার্ড ফাঁসের পরিণতি ভয়াবহ। কিন্তু WebAuthn এ পাবলিক কি ডাটাবেজ ফাঁস হলেও আক্রমণকারী কোনো অ্যাকাউন্টে ঢুকতে পারে না।'
        },
      },
      {
        id: 'pwdless-qz-2',
        kind: 'mcq',
        topic: 'single-use-challenge-nonce',
        question: {
          en: 'Why must the server generate a fresh cryptographic challenge nonce for every login attempt and immediately burn it upon use?',
          bn: 'সার্ভারকে কেন প্রতিটি লগইন চেষ্টার জন্য একটি নতুন চ্যালেঞ্জ ননস তৈরি করতে হয় এবং একবার ব্যবহারের পরপরই তা নষ্ট করতে হয়?'
        },
        options: [
          {
            en: 'To prevent replay attacks: if an eavesdropper records a valid signed assertion on the network, they cannot reuse that same signature to log in again because the old challenge has been destroyed',
            bn: 'রিপ্লে আক্রমণ প্রতিহত করতে: নেটওয়ার্কে কোনো আক্রমণকারী যদি একটি বৈধ সাইন করা ডেটা চুরিও করে নেয়, পুরনো চ্যালেঞ্জ বাতিল হয়ে যাওয়ায় সেই একই ডেটা পাঠিয়ে দ্বিতীয়বার লগইন করা অসম্ভব',
          },
          {
            en: 'Because computer hard disks run out of storage space after storing one challenge',
            bn: 'কারণ একটি চ্যালেঞ্জ জমা রাখার পরপরই কম্পিউটার হার্ডডিস্কের সমস্ত মেমোরি শেষ হয়ে যায়',
          },
          {
            en: 'Because computer network cables melt if the same code is used twice',
            bn: 'কারণ একই কোড দুবার ব্যবহার করলে ইন্টারনেটের তার অতিরিক্ত গরমে গলে যেতে পারে',
          },
          {
            en: 'Because web browser windows automatically close when challenges stay alive',
            bn: 'কারণ চ্যালেঞ্জ কার্যকর থাকলে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Single-use nonces ensure old signed payloads cannot be replayed.',
          bn: 'এককালীন ননস নিশ্চিত করে যে পুরানো সাইন করা ডেটা পুনরায় ব্যবহার করা অসম্ভব।'
        },
        explanation: {
          en: 'Burning the challenge immediately ensures every cryptographic proof is unique in time and cannot be replayed.',
          bn: 'একবার ব্যবহারে চ্যালেঞ্জ নষ্ট করা নিশ্চিত করে যে প্রতিটি ক্রিপ্টোগ্রাফিক প্রমাণ অনন্য এবং পুনরায় ব্যবহারযোগ্য নয়।'
        },
      },
      {
        id: 'pwdless-qz-3',
        kind: 'mcq',
        topic: 'magic-link-database-storage-security',
        question: {
          en: 'When implementing email magic links as a passwordless authentication method, how should tokens be stored in the backend database?',
          bn: 'পাসওয়ার্ডহীন প্রমাণীকরণ হিসেবে ইমেইল ম্যাজিক লিংক বাস্তবায়নের সময় ব্যাকএন্ড ডাটাবেজে কীভাবে টোকেন সংরক্ষণ করা উচিত?'
        },
        options: [
          {
            en: 'Only store the cryptographic SHA-256 hash of the magic link token with a short expiration timestamp; never store the plaintext token in the database',
            bn: 'ডাটাবেজে সংক্ষিপ্ত মেয়াদের সাথে ম্যাজিক লিংক টোকেনের ক্রিপ্টোগ্রাফিক SHA-২৫৬ হ্যাশ সংরক্ষণ করুন; কখনোই ডাটাবেজে প্লেইনটেক্সট টোকেন জমা রাখবেন না',
          },
          {
            en: 'Store the plaintext token in a public spreadsheet accessible by anyone on the internet',
            bn: 'ইন্টারনেটের সবার জন্য উন্মুক্ত একটি পাবলিক স্প্রেডশীটে প্লেইনটেক্সট টোকেনটি লিখে রাখুন',
          },
          {
            en: 'Send the token in an unencrypted SMS message to fifty random phone numbers',
            bn: 'পঞ্চাশটি অচেনা মোবাইল নম্বরে আন-এনক্রিপ্টেড এসএমএস করে টোকেনটি পাঠিয়ে দিন',
          },
          {
            en: 'Save the token as the operating system desktop wallpaper image',
            bn: 'টোকেনটিকে অপারেটিং সিস্টেমের ডেস্কটপ ওয়ালপেপার ছবি হিসেবে সংরক্ষণ করুন',
          },
        ],
        answer: 0,
        hint: {
          en: 'Hash magic link tokens before storage just like passwords.',
          bn: 'পাসওয়ার্ডের মতোই ম্যাজিক লিংক টোকেন সংরক্ষণের আগে হ্যাশ করে নেওয়া জরুরি।'
        },
        explanation: {
          en: 'If the database is leaked, an attacker cannot construct valid login links from SHA-256 hashes because cryptographic hashing is one-way.',
          bn: 'ডাটাবেজ হ্যাক হলেও একমুখী SHA-২৫৬ হ্যাশ থেকে আক্রমণকারী কোনো কার্যকর লগইন লিংক তৈরি করতে পারে না।'
        },
      },
      {
        id: 'pwdless-qz-4',
        kind: 'mcq',
        topic: 'monotonic-signature-counter',
        question: {
          en: 'What is the purpose of the monotonic sign counter (signCount) maintained by WebAuthn authenticators and checked by the relying party server?',
          bn: 'WebAuthn প্রমাণীকরণ ডিভাইসে সংরক্ষিত এবং সার্ভার দ্বারা পরীক্ষিত ক্রমবর্ধমান সাইন কাউন্টারের (signCount) উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To detect cloned authenticators: if the server receives a signCount that is less than or equal to a previously observed count for that passkey, it signals that the hardware token was illegally duplicated',
            bn: 'ক্লোন করা প্রমাণীকরণ ডিভাইস সনাক্ত করা: সার্ভারে আসা signCount যদি পূর্বের সংখ্যার চেয়ে ছোট বা সমান হয়, তবে তা প্রমাণ করে যে হার্ডওয়্যার টোকেনটি অননুমোদিতভাবে নকল বা ক্লোন করা হয়েছে',
          },
          {
            en: 'To calculate how many hours the user spent browsing social media websites',
            bn: 'ব্যবহারকারী সোশ্যাল মিডিয়া ওয়েবসাইটে কত ঘণ্টা সময় ব্যয় করেছেন তা গণনা করা',
          },
          {
            en: 'To automatically adjust the sound volume of the smartphone speaker',
            bn: 'স্মার্টফোনের স্পিকারের শব্দের মাত্রা স্বয়ংক্রিয়ভাবে সমন্বয় করা',
          },
          {
            en: 'To measure the temperature of the room where the user is sitting',
            bn: 'ব্যবহারকারী যে ঘরে বসে আছেন সেই ঘরের তাপমাত্রা পরিমাপ করা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Cloned authenticators fail to maintain strictly increasing signature counters.',
          bn: 'ক্লোন করা ডিভাইসগুলো ক্রমবর্ধমান সাইন কাউন্টারের ধারাবাহিকতা বজায় রাখতে পারে না।'
        },
        explanation: {
          en: 'Every authentic signature increments the counter. A cloned key will submit a counter value lower than or equal to a legitimate device, exposing cloning immediately.',
          bn: 'প্রতিটি আসল সাইনে কাউন্টার বাড়ে। ক্লোন করা কি পূর্বের সমান বা ছোট কাউন্টার সাবমিট করায় ক্লোনিং ধরা পড়ে যায়।'
        },
      },
    ],
  },
  next: {
    slug: 'auth-capstone',
    title: {
      en: 'Building an Enterprise Authentication System: The Capstone Architecture',
      bn: 'এন্টারপ্রাইজ অথেনটিকেশন সিস্টেম তৈরি: ক্যাপস্টোন আর্কিটেকচার'
    },
  },
};
