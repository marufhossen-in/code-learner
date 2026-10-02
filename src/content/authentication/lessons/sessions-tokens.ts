import type { Lesson } from '../../../lib/types';

export const SessionsTokensLesson: Lesson = {
  slug: 'sessions-tokens',
  tech: 'authentication',
  title: {
    en: 'Stateful Sessions & Cookie Security: HttpOnly, SameSite & Redis Stores',
    bn: 'স্টেটফুল সেশন এবং কুকি নিরাপত্তা: HttpOnly, SameSite এবং রেডিস স্টোর'
  },
  summary: {
    en: 'Master stateful session management architectures that maintain user login state securely across HTTP requests. Understand why storing raw authentication tokens in localStorage exposes users to cross-site scripting credential theft. Learn how to configure hardened HTTP cookies with HttpOnly, Secure, and SameSite attributes, mitigate session fixation attacks, handle session hijacking, and implement high-performance distributed session stores using Redis.',
    bn: 'এইচটিটিপি রিকোয়েস্ট জুড়ে নিরাপদে ব্যবহারকারীর লগইন অবস্থা বজায় রাখার স্টেটফুল সেশন আর্কিটেকচার আয়ত্ত করুন। লোকাল স্টোরেজে টোকেন সংরক্ষণ কেন ক্রস-সাইট স্ক্রিপ্টিংয়ের মাধ্যমে টোকেন চুরির ঝুঁকি তৈরি করে তা বুঝুন। HttpOnly, Secure এবং SameSite অ্যাট্রিবিউটসহ সুরক্ষিত কুকি কনফিগারেশন, সেশন ফিক্সেশন ও হাইজ্যাকিং প্রতিরোধ এবং রেডিস ব্যবহার করে উচ্চগতির ডিস্ট্রিবিউটেড সেশন স্টোর তৈরির পদ্ধতি শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'stateless-http-and-sessions',
      text: {
        en: 'The Stateless Web and the Need for Sessions',
        bn: 'স্টেটলেস ওয়েব এবং সেশন ব্যবস্থাপনার প্রয়োজনীয়তা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications, the underlying HTTP protocol is completely stateless. Every HTTP request arrives in isolation without remembering previous interactions, requiring a mechanism to persist identity across clicks.',
        bn: 'যখন আপনি ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন মনে রাখতে হবে যে এর পেছনের এইচটিটিপি প্রটোকল সম্পূর্ণ স্টেটলেস। প্রতিটি এইচটিটিপি রিকোয়েস্ট আগের কোনো তথ্য মনে না রেখে আলাদাভাবে আসে, যার ফলে প্রতিটি ক্লিকে ব্যবহারকারীর পরিচয় ধরে রাখার জন্য একটি নির্ভরযোগ্য ব্যবস্থা প্রয়োজন।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In a stateful session architecture, the server authenticates the user, generates a cryptographically secure random session ID (typically 32 bytes of entropy), and stores the session record in a fast database like Redis. The server then sends this opaque identifier to the browser inside an HTTP Set-Cookie header. On every subsequent request, the browser automatically transmits the cookie back, allowing the server to look up the authenticated user.',
        bn: 'একটি স্টেটফুল সেশন আর্কিটেকচারে সার্ভার ব্যবহারকারীকে যাচাই করার পর একটি ক্রিপ্টোগ্রাফিক র্যান্ডম সেশন আইডি ( সাধারণত ৩২ বাইটের র্যান্ডম মান ) তৈরি করে এবং সেশন ডাটা রেডিসের (Redis) মতো দ্রুত ডাটাবেজে সংরক্ষণ করে। এরপর সার্ভার একটি HTTP Set-Cookie হেডারের মাধ্যমে ব্রাউজারে সেই আইডি পাঠিয়ে দেয়। পরবর্তী প্রতিটি রিকোয়েস্টে ব্রাউজার নিজে থেকেই সেই কুকি পাঠায়, যার ফলে সার্ভার ব্যবহারকারীর পরিচয় শনাক্ত করতে পারে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. The HttpOnly Flag: XSS Defense',
            bn: '১. HttpOnly ফ্ল্যাগ: XSS আক্রমণ প্রতিরোধ'
          },
          text: {
            en: 'The HttpOnly flag blocks client-side JavaScript from accessing document.cookie. Even if an attacker discovers a Cross-Site Scripting (XSS) vulnerability on your page, they cannot steal session cookies via script.',
            bn: 'HttpOnly ফ্ল্যাগ ব্রাউজারের জাভাস্ক্রিপ্ট কোডকে কুকি পড়া থেকে বিরত রাখে। আক্রমণকারী আপনার ওয়েবসাইটে কোনো XSS দুর্বলতা খুঁজে পেলেও স্ক্রিপ্ট চালিয়ে সেশন কুকি চুরি করতে পারে না।'
          },
        },
        {
          title: {
            en: '2. The Secure Flag: HTTPS Encryption Only',
            bn: '২. Secure ফ্ল্যাগ: কেবল HTTPS এনক্রিপশন'
          },
          text: {
            en: 'The Secure flag instructs web browsers to transmit the session cookie exclusively over encrypted HTTPS connections, preventing man-in-the-middle packet sniffing on public Wi-Fi networks.',
            bn: 'Secure ফ্ল্যাগ ব্রাউজারকে নির্দেশ দেয় কেবল এনক্রিপ্ট করা HTTPS সংযোগের মাধ্যমেই কুকি আদান-প্রদান করতে, ফলে উন্মুক্ত ওয়াই-ফাই নেটওয়ার্কে কেউ তথ্য চুরি করতে পারে না।'
          },
        },
        {
          title: {
            en: '3. The SameSite Flag: CSRF Neutralization',
            bn: '৩. SameSite ফ্ল্যাগ: CSRF আক্রমণ প্রতিরোধ'
          },
          text: {
            en: 'SameSite=Strict ensures cookies are never sent on cross-site requests (such as clicking an external link or submitting a malicious form from another domain), eliminating Cross-Site Request Forgery (CSRF).',
            bn: 'SameSite=Strict নিশ্চিত করে যে বাইরের কোনো ওয়েবসাইট থেকে রিকোয়েস্ট পাঠালে এই কুকি যুক্ত হবে না, যার ফলে ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) আক্রমণ পুরোপুরি ব্যর্থ হয়।'
          },
        },
        {
          title: {
            en: '4. Session Regeneration on Authentication',
            bn: '৪. লগইনের পর সেশন আইডি পুনর্নির্মাণ'
          },
          text: {
            en: 'To prevent Session Fixation attacks, the server must discard any pre-login anonymous session identifier and generate a fresh, unguessable ID immediately upon successful login.',
            bn: 'সেশন ফিক্সেশন আক্রমণ ঠেকাতে ব্যবহারকারী সফলভাবে লগইন করার সাথে সাথে পুরানো সেশন বাতিল করে সম্পূর্ণ নতুন একটি র্যান্ডম সেশন আইডি তৈরি করতে হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Stateful Session Architecture: Secure Cookies and Redis Datastore',
        bn: 'স্টেটফুল সেশন আর্কিটেকচার: সিকিউর কুকি এবং রেডিস ডাটাবেজ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Stateful session architecture showing browser with HttpOnly/Secure/SameSite cookie, web server, and Redis database">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">STATEFUL SESSION ARCHITECTURE &amp; HARDENED COOKIE DEFENSES</text>
  
  <!-- Left Box: Browser -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. CLIENT BROWSER</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="150" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="9" font-weight="bold">HARDENED COOKIE JAR:</text>
      <text x="15" y="44" fill="#f8fafc" font-size="8">Set-Cookie: sid=a8f12...;</text>
      <text x="15" y="62" fill="#6ee7b7" font-size="8">✓ HttpOnly (JS cannot read!)</text>
      <text x="15" y="80" fill="#6ee7b7" font-size="8">✓ Secure (HTTPS only!)</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8">✓ SameSite=Strict (No CSRF!)</text>
      <text x="15" y="116" fill="#cbd5e1" font-size="8">✓ Max-Age=86400 (24h TTL)</text>
      <text x="15" y="136" fill="#38bdf8" font-size="8">Transmitted on every request</text>
      
      <rect y="165" width="200" height="125" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="100" y="190" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">ATTACKS NEUTRALIZED</text>
      <text x="15" y="215" fill="#fca5a5" font-size="8">• document.cookie XSS theft</text>
      <text x="15" y="233" fill="#fca5a5" font-size="8">• Public Wi-Fi packet sniffing</text>
      <text x="15" y="251" fill="#fca5a5" font-size="8">• Cross-site CSRF forgery</text>
      <text x="15" y="269" fill="#fca5a5" font-size="8">• Pre-login session fixation</text>
    </g>
  </g>
  
  <!-- Middle Box: Web Server -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. WEB SERVER / API</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="120" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#f59e0b" font-size="10" font-weight="bold">INCOMING REQUEST</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8">1. Extracts sid cookie from header</text>
      <text x="15" y="62" fill="#cbd5e1" font-size="8">2. Verifies ID format (32 hex bytes)</text>
      <text x="15" y="80" fill="#cbd5e1" font-size="8">3. Queries Redis cluster in ~1ms</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8">4. Attaches req.user to context</text>
      
      <rect y="135" width="240" height="155" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="120" y="160" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">INSTANT LOGOUT / REVOKE</text>
      <text x="15" y="185" fill="#f8fafc" font-size="8">When user clicks Logout:</text>
      <text x="15" y="203" fill="#cbd5e1" font-size="8">Server executes: DEL sess:sid</text>
      <text x="15" y="221" fill="#6ee7b7" font-size="8">✓ Session dies in 1 millisecond!</text>
      <text x="15" y="241" fill="#cbd5e1" font-size="8">Stolen cookie is rendered useless</text>
      <text x="15" y="261" fill="#10b981" font-size="8">Major advantage over stateless JWT!</text>
    </g>
  </g>
  
  <!-- Right Box: Redis -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">3. REDIS DATASTORE</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="160" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="9" font-weight="bold">IN-MEMORY SESSION HASH:</text>
      <text x="15" y="44" fill="#38bdf8" font-size="8">Key: sess:367912458...</text>
      <text x="15" y="64" fill="#cbd5e1" font-size="8">{</text>
      <text x="25" y="80" fill="#6ee7b7" font-size="8">"userId": "usr_101",</text>
      <text x="25" y="96" fill="#6ee7b7" font-size="8">"role": "admin",</text>
      <text x="25" y="112" fill="#6ee7b7" font-size="8">"ip": "192.168.1.10",</text>
      <text x="25" y="128" fill="#cbd5e1" font-size="8">"expires": 172800</text>
      <text x="15" y="144" fill="#cbd5e1" font-size="8">}</text>
      
      <rect y="175" width="200" height="115" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="200" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">CENTRALIZED STATE</text>
      <text x="15" y="225" fill="#cbd5e1" font-size="8">• Shared across 100+ servers</text>
      <text x="15" y="243" fill="#cbd5e1" font-size="8">• Automatic TTL expiration</text>
      <text x="15" y="261" fill="#10b981" font-size="8">• Sub-millisecond reads</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Stateful sessions store minimal opaque IDs in cookies while centralizing authorization state in low-latency Redis</text>
</svg>`,
      caption: {
        en: 'Stateful sessions pair hardened browser cookies (HttpOnly, Secure, SameSite) with an in-memory Redis session datastore.',
        bn: 'স্টেটফুল সেশন ব্রাউজারের সুরক্ষিত কুকির (HttpOnly, Secure, SameSite) সাথে ইন-মেমোরি রেডিস ডাটাবেজের সমন্বয় করে।'
      },
    },
    {
      type: 'heading',
      id: 'session-manager-code',
      text: {
        en: 'Building a Distributed Session Engine in Node.js',
        bn: 'Node.js-এ ডিস্ট্রিবিউটেড সেশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how secure web frameworks manage session lifecycles, inspect the following session manager. It creates high-entropy random identifiers, sets hardened cookie attributes, regenerates identifiers on login, and instantly revokes user access.',
        bn: 'সুরক্ষিত ওয়েব ফ্রেমওয়ার্ক কীভাবে সেশন পরিচালনা করে তা দেখতে নিচের সেশন ম্যানেজার কোডটি লক্ষ্য করুন। এটি ক্রিপ্টোগ্রাফিক র্যান্ডম আইডি তৈরি করে, নিরাপদ কুকি হেডার গঠন করে, লগইনের পর আইডি পুনর্নির্মাণ করে এবং তাৎক্ষণিকভাবে লগআউট কার্যকর করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'stateful-session-manager.js',
      code: `// Enterprise Stateful Session Manager using cryptographic random IDs
const crypto = require('crypto');

class StatefulSessionManager {
  constructor() {
    // In-memory simulation of a high-throughput Redis distributed cluster
    this.redisCluster = new Map();
  }

  // 1. Create new session and return hardened Set-Cookie header string
  createSession(userId, userRole, ttlSeconds = 86400) {
    // 32 cryptographically secure random bytes = 256 bits of entropy
    const sessionId = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + (ttlSeconds * 1000);

    const sessionPayload = {
      userId: userId,
      role: userRole,
      createdAt: new Date().toISOString(),
      expiresAt: expiresAt
    };

    // Store in centralized distributed cache
    this.redisCluster.set(sessionId, sessionPayload);

    // Build hardened HTTP response cookie header
    const cookieHeader = 'sessionId=' + sessionId +
      '; HttpOnly' +
      '; Secure' +
      '; SameSite=Strict' +
      '; Max-Age=' + ttlSeconds +
      '; Path=/';

    return { sessionId, cookieHeader, sessionPayload };
  }

  // 2. Validate session on incoming HTTP request
  getSession(sessionId) {
    if (!sessionId || typeof sessionId !== 'string') return null;

    const session = this.redisCluster.get(sessionId);
    if (!session) return null;

    // Check TTL expiration
    if (Date.now() > session.expiresAt) {
      this.redisCluster.delete(sessionId);
      console.log('[SESSION EXPIRED] Deleted expired session: ' + sessionId.slice(0, 10) + '...');
      return null;
    }

    return session;
  }

  // 3. Mitigate Session Fixation: discard old ID, generate fresh ID on login
  regenerateSession(oldSessionId, userId, userRole, ttlSeconds = 86400) {
    if (oldSessionId) {
      this.redisCluster.delete(oldSessionId);
    }
    return this.createSession(userId, userRole, ttlSeconds);
  }

  // 4. Instant global logout revocation
  revokeSession(sessionId) {
    const existed = this.redisCluster.delete(sessionId);
    console.log('[LOGOUT] Session revoked from cache: ' + existed);
    return existed;
  }
}

const sessionManager = new StatefulSessionManager();

console.log('=== Step 1: User Logs In — Issuing Hardened Cookie ===');
const loginSession = sessionManager.createSession('usr_42', 'admin', 86400);
console.log('Set-Cookie Header:\\n', loginSession.cookieHeader);

console.log('\\n=== Step 2: Validating Active Session on Request ===');
const activeSession = sessionManager.getSession(loginSession.sessionId);
console.log('Active Session Record in Memory:', activeSession);

console.log('\\n=== Step 3: Mitigating Session Fixation on Privilege Upgrade ===');
const upgradedSession = sessionManager.regenerateSession(
  loginSession.sessionId,
  'usr_42',
  'superadmin',
  86400
);
console.log('New Session ID (Old ID Discarded):', upgradedSession.sessionId);
console.log('Old Session ID Exists:', sessionManager.getSession(loginSession.sessionId)); // null

console.log('\\n=== Step 4: Instant Logout Revocation ===');
sessionManager.revokeSession(upgradedSession.sessionId);
console.log('Session Status After Logout:', sessionManager.getSession(upgradedSession.sessionId)); // null`,
      caption: {
        en: 'The session manager creates 32-byte random session IDs, builds secure cookie headers, and supports instant revocation.',
        bn: 'সেশন ম্যানেজার ৩২ বাইটের র্যান্ডম আইডি তৈরি করে, নিরাপদ কুকি হেডার গঠন করে এবং তাৎক্ষণিকভাবে সেশন বাতিল সমর্থন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why localStorage is Insecure for Authentication Tokens',
        bn: 'অথেনটিকেশন টোকেনের জন্য localStorage কেন বিপজ্জনক'
      },
      text: {
        en: 'Many frontend developers store authentication tokens in browser localStorage for convenience. However, localStorage has no security boundaries against client-side scripts. Any Cross-Site Scripting (XSS) vulnerability—such as an unescaped comment or a compromised npm package—can read localStorage with a single line of JavaScript and silently exfiltrate user credentials! In contrast, HttpOnly cookies are completely inaccessible to JavaScript, protecting session tokens from XSS theft.',
        bn: 'অনেক ডেভেলপার সুবিধার জন্য ব্রাউজারের localStorage-এ অথেনটিকেশন টোকেন সংরক্ষণ করেন। কিন্তু জাভাস্ক্রিপ্ট স্ক্রিপ্ট থেকে localStorage-কে রক্ষা করার কোনো উপায় নেই। ওয়েবসাইটের যেকোনো XSS দুর্বলতা ব্যবহার করে আক্রমণকারীরা মাত্র এক লাইনের কোড দিয়েই localStorage থেকে সব টোকেন চুরি করে নিতে পারে! বিপরীতে, HttpOnly কুকি জাভাস্ক্রিপ্ট কোডের মাধ্যমে একেবারেই পড়া যায় না, যা XSS আক্রমণ থেকে সেশনকে সম্পূর্ণ সুরক্ষিত রাখে।'
      },
    },
  ],
  exercises: [
    {
      id: 'sess-tok-ex-1',
      kind: 'predict',
      topic: 'session-id-entropy',
      question: {
        en: 'How many bytes is the standard recommended size for a cryptographically secure random session identifier? (32). Type the number.',
        bn: 'একটি ক্রিপ্টোগ্রাফিক র্যান্ডম সেশন আইডির স্ট্যান্ডার্ড প্রস্তাবিত সাইজ কত বাইট? ( ৩২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '32',
      hint: {
        en: 'The standard session ID length is 32 bytes (256 bits).',
        bn: 'স্ট্যান্ডার্ড সেশন আইডির দৈর্ঘ্য হলো ৩২ বাইট ( ২৫৬ বিট )। '
      },
      explanation: {
        en: 'A 32-byte (256-bit) session identifier provides an immense keyspace, preventing attackers from brute-forcing valid IDs.',
        bn: '৩২ বাইটের সেশন আইডি সুবিশাল সিকিউরিটি প্রদান করে, ফলে অনুমান করে কোনো সেশন আইডি বের করা অসম্ভব।'
      },
    },
    {
      id: 'sess-tok-ex-2',
      kind: 'mcq',
      topic: 'httponly-cookie-defense',
      question: {
        en: 'What critical security vulnerability does the HttpOnly cookie flag prevent in web applications?',
        bn: 'ওয়েব অ্যাপ্লিকেশনে HttpOnly কুকি ফ্ল্যাগটি কোন মারাত্মক নিরাপত্তা ঝুঁকি প্রতিহত করে?'
      },
      options: [
        {
          en: 'It blocks client-side JavaScript from accessing document.cookie, preventing malicious Cross-Site Scripting (XSS) payloads from stealing session identifiers',
          bn: 'এটি ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট কোডকে document.cookie পড়া থেকে বিরত রাখে, ফলে ক্ষতিকর XSS কোড সেশন আইডি চুরি করতে পারে না',
        },
        {
          en: 'It stops computers from overheating when downloading images',
          bn: 'ছবি ডাউনলোড করার সময় এটি কম্পিউটার অতিরিক্ত গরম হওয়া বন্ধ করে',
        },
        {
          en: 'It turns all website text into uppercase capital letters',
          bn: 'এটি ওয়েবসাইটের সমস্ত টেক্সটকে বড় হাতের অক্ষরে বদলে দেয়',
        },
        {
          en: 'It permanently disables the computer keyboard audio volume',
          bn: 'এটি কম্পিউটারের কিবোর্ডের সাউন্ড চিরতরে বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'HttpOnly prevents client scripts from reading session cookies.',
        bn: 'HttpOnly ক্লায়েন্ট স্ক্রিপ্টকে সেশন কুকি পড়া থেকে বিরত রাখে।',
      },
      explanation: {
        en: 'Even if an attacker achieves XSS execution, HttpOnly cookies cannot be extracted via script, keeping sessions secure.',
        bn: 'ওয়েবসাইটে XSS দুর্বলতা থাকলেও HttpOnly কুকি স্ক্রিপ্ট দিয়ে পড়া যায় না, ফলে সেশন সুরক্ষিত থাকে।'
      },
    },
    {
      id: 'sess-tok-ex-3',
      kind: 'mcq',
      topic: 'session-fixation-mitigation',
      question: {
        en: 'Why must the session identifier be regenerated immediately after a user successfully logs into an application?',
        bn: 'ব্যবহারকারী সফলভাবে লগইন করার সাথে সাথে কেন সেশন আইডি পুনর্নির্মাণ (রিজেনারেট) করা আবশ্যক?'
      },
      options: [
        {
          en: 'To prevent Session Fixation attacks where an attacker pre-sets an unauthenticated session ID on a victim browser and waits for the victim to log in with that known ID',
          bn: 'সেশন ফিক্সেশন আক্রমণ ঠেকাতে, যেখানে আক্রমণকারী আগেই শিকারের ব্রাউজারে একটি সেশন আইডি বসিয়ে রাখে এবং শিকার সেই আইডি নিয়ে লগইন করার অপেক্ষা করে',
        },
        {
          en: 'Because computer operating systems automatically delete passwords every minute',
          bn: 'কারণ কম্পিউটার অপারেটিং সিস্টেম প্রতি মিনিটে পাসওয়ার্ড মুছে ফেলে',
        },
        {
          en: 'Because session regeneration cuts server hosting costs in half',
          bn: 'কারণ সেশন পুনর্নির্মাণ সার্ভার হোস্টিংয়ের খরচ অর্ধেক করে দেয়',
        },
        {
          en: 'Because web browsers refuse to display login buttons after authentication',
          bn: 'কারণ লগইনের পর ওয়েব ব্রাউজার লগইন বাটন দেখাতে অস্বীকার করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Regenerating session IDs destroys pre-authentication fixation traps.',
        bn: 'সেশন আইডি পুনর্নির্মাণ লগইনের আগের ফিক্সেশন ফাঁদ ধ্বংস করে।',
      },
      explanation: {
        en: 'Discarding the pre-login ID guarantees that any identifier previously observed or set by an attacker is rendered completely useless.',
        bn: 'পুরানো আইডি ফেলে দিলে আক্রমণকারীর জানা আগের আইডিটি সম্পূর্ণ অকেজো হয়ে যায়।'
      },
    },
    {
      id: 'sess-tok-ex-4',
      kind: 'predict',
      topic: 'session-ttl-hours',
      question: {
        en: 'If a session expiration TTL is configured for 24 hours, how many hours is that session lifetime? (24). Type the number.',
        bn: 'একটি সেশনের মেয়াদ যদি ২৪ ঘণ্টার জন্য কনফিগার করা থাকে, তবে সেই সেশনের লাইফটাইম কত ঘণ্টার? ( ২৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '24',
      hint: {
        en: 'The session lifetime is 24 hours.',
        bn: 'সেশনের মেয়াদ হলো ২৪ ঘণ্টা।'
      },
      explanation: {
        en: 'A 24-hour TTL automatically expires inactive sessions in Redis, reducing exposure windows if devices are left unattended.',
        bn: '২৪ ঘণ্টার মেয়াদ রেডিস থেকে সেশন স্বয়ংক্রিয়ভাবে মুছে ফেলে ডিভাইস অরক্ষিত থাকার ঝুঁকি কমায়।'
      },
    },
  ],
  quiz: {
    id: 'sessions-tokens-quiz',
    title: {
      en: 'Stateful Sessions and Cookie Defenses Quiz',
      bn: 'স্টেটফুল সেশন ও কুকি প্রতিরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'sess-tok-qz-1',
        kind: 'mcq',
        topic: 'samesite-cookie-function',
        question: {
          en: 'What is the primary security function of the SameSite=Strict cookie attribute in web architecture?',
          bn: 'ওয়েব আর্কিটেকচারে SameSite=Strict কুকি অ্যাট্রিবিউটের প্রধান নিরাপত্তা ভূমিকা কী?'
        },
        options: [
          {
            en: 'It ensures the cookie is never sent in cross-site requests (such as following external links or third-party forms), fundamentally defeating Cross-Site Request Forgery (CSRF) attacks',
            bn: 'এটি নিশ্চিত করে যে বাইরের কোনো ওয়েবসাইট থেকে রিকোয়েস্ট পাঠালে কুকি যাবে না, যার ফলে ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) আক্রমণ পুরোপুরি ব্যর্থ হয়',
          },
          {
            en: 'It accelerates website loading speeds by fifty percent',
            bn: 'এটি ওয়েবসাইটের লোডিং গতি শতকরা ৫০ ভাগ বাড়িয়ে দেয়',
          },
          {
            en: 'It allows cookies to be printed onto physical office paper',
            bn: 'এটি কুকিকে অফিসের কাগজের নথিতে প্রিন্ট করার সুযোগ দেয়',
          },
          {
            en: 'It prevents computer screens from displaying bright colors',
            bn: 'এটি কম্পিউটার স্ক্রিনে উজ্জ্বল রঙ প্রদর্শন করা বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'SameSite=Strict prevents cross-origin cookie transmission, eliminating CSRF.',
          bn: 'SameSite=Strict ক্রস-অরিজিন কুকি পাঠানো বন্ধ করে CSRF আক্রমণ দূর করে।',
        },
        explanation: {
          en: 'CSRF relies on browsers automatically attaching cookies when submitting cross-site forms. SameSite=Strict blocks this behavior entirely.',
          bn: 'CSRF আক্রমণ ব্রাউজারের স্বয়ংক্রিয় কুকি পাঠানোর ওপর নির্ভর করে। SameSite=Strict এটি পুরোপুরি আটকে দেয়।'
        },
      },
      {
        id: 'sess-tok-qz-2',
        kind: 'mcq',
        topic: 'why-redis-for-sessions',
        question: {
          en: 'Why is a centralized in-memory datastore like Redis strictly preferred over storing sessions in web server process memory?',
          bn: 'ওয়েব সার্ভার প্রসেসের মেমোরিতে সেশন রাখার চেয়ে রেডিসের (Redis) মতো সেন্ট্রালাইজড ইন-মেমোরি ডাটাবেজ কেন অগ্রাধিকার পায়?'
        },
        options: [
          {
            en: 'In horizontally scaled production environments with dozens of load-balanced server instances, a centralized Redis store ensures any server node can validate the user session seamlessly',
            bn: 'লোকেশন ব্যালান্সড ডজন ডজন সার্ভার নোডযুক্ত প্রোডাকশন পরিবেশে সেন্ট্রালাইজড রেডিস নিশ্চিত করে যে যেকোনো সার্ভার নোড ব্যবহারকারীর সেশন নির্বিঘ্নে যাচাই করতে পারে',
          },
          {
            en: 'Because Redis makes computer hardware immune to electrical lightning strikes',
            bn: 'কারণ রেডিস কম্পিউটার হার্ডওয়্যারকে বজ্রপাতের ক্ষতি থেকে মুক্ত রাখে',
          },
          {
            en: 'Because web servers cannot store variables in their own memory',
            bn: 'কারণ ওয়েব সার্ভার তার নিজস্ব মেমোরিতে কোনো ভেরিয়েবল রাখতে পারে না',
          },
          {
            en: 'Because Redis automatically writes frontend CSS stylesheet rules',
            bn: 'কারণ রেডিস ফ্রন্টএন্ড সিএসএস স্টাইলশিট নিজে নিজেই লিখে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Redis provides centralized session state across horizontally scaled servers.',
          bn: 'রেডিস একাধিক স্কেল করা সার্ভারের মাঝে একক সেশন স্টেট সরবরাহ করে।',
        },
        explanation: {
          en: 'Process memory is isolated per node; restarting a server or hitting a different load-balancer node would force users to log in repeatedly without Redis.',
          bn: 'সার্ভারের নিজস্ব মেমোরি আলাদা থাকে; রেডিস না থাকলে সার্ভার রিস্টার্ট হলে বা অন্য সার্ভারে রিকোয়েস্ট গেলে ইউজার লগআউট হয়ে যাবে।'
        },
      },
      {
        id: 'sess-tok-qz-3',
        kind: 'mcq',
        topic: 'secure-flag-and-mitm',
        question: {
          en: 'How does an unencrypted HTTP connection allow session hijacking, and how does the Secure cookie flag mitigate this threat?',
          bn: 'একটি এনক্রিপশনহীন HTTP সংযোগ কীভাবে সেশন হাইজ্যাকিংয়ের সুযোগ দেয় এবং Secure কুকি ফ্ল্যাগ কীভাবে এই ঝুঁকি দূর করে?'
        },
        options: [
          {
            en: 'Over plain HTTP, cookies travel in cleartext, allowing eavesdroppers on public networks to sniff the session ID and impersonate the user; the Secure flag instructs browsers never to transmit the cookie over unencrypted channels',
            bn: 'সাধারণ HTTP তে কুকি প্লেইনটেক্সট আকারে যায়, ফলে পাবলিক ওয়াই-ফাই নেটওয়ার্কে যে কেউ সেশন আইডি চুরি করতে পারে; Secure ফ্ল্যাগ ব্রাউজারকে এনক্রিপশন ছাড়া কুকি পাঠাতে পুরোপুরি নিষেধ করে',
          },
          {
            en: 'The Secure flag encrypts the physical plastic of the computer mouse',
            bn: 'Secure ফ্ল্যাগ কম্পিউটারের মাউসের প্লাস্টিককে এনক্রিপ্ট করে',
          },
          {
            en: 'Unencrypted HTTP connections cause laptop screens to turn completely white',
            bn: 'এনক্রিপশনহীন HTTP সংযোগ ল্যাপটপের পর্দা পুরোপুরি সাদা করে দেয়',
          },
          {
            en: 'The Secure flag deletes all incoming spam emails from the inbox',
            bn: 'Secure ফ্ল্যাগ ইনবক্স থেকে সমস্ত স্প্যাম ইমেইল স্বয়ংক্রিয়ভাবে মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'The Secure flag ensures cookies are only transmitted over TLS/HTTPS.',
          bn: 'Secure ফ্ল্যাগ নিশ্চিত করে যে কুকি কেবল নিরাপদ HTTPS সংযোগেই পাঠানো হবে।',
        },
        explanation: {
          en: 'Cleartext HTTP traffic is vulnerable to packet sniffing. The Secure attribute mandates TLS encryption for cookie transport.',
          bn: 'প্লেইনটেক্সট ট্রাফিক সহজেই নেটওয়ার্ক থেকে চুরি করা যায়। Secure ফ্ল্যাগ নিশ্চিত করে যে কুকি সর্বদা এনক্রিপ্ট থাকবে।'
        },
      },
      {
        id: 'sess-tok-qz-4',
        kind: 'mcq',
        topic: 'stateful-session-instant-revocation',
        question: {
          en: 'What major security capability does a stateful session architecture provide when a user clicks "Logout" that stateless JWTs cannot easily achieve?',
          bn: 'ব্যবহারকারী "Logout" চাপলে স্টেটফুল সেশন আর্কিটেকচার কোন বড় নিরাপত্তা সুবিধা দেয় যা স্টেটলেস JWT সহজে দিতে পারে না?'
        },
        options: [
          {
            en: 'Instant revocation: the server immediately deletes the session key from Redis, instantly invalidating the session across all active connections worldwide in a single millisecond',
            bn: 'তাৎক্ষণিক বাতিলকরণ: সার্ভার রেডিস থেকে সাথে সাথে সেশন কি মুছে ফেলে, যার ফলে এক মিলিঙ্কেন্ডের মধ্যে বিশ্বজুড়ে ব্যবহারকারীর সমস্ত সংযোগ তাত্ক্ষণিকভাবে বাতিল হয়ে যায়',
          },
          {
            en: 'It turns the user monitor off and disconnects the power cord',
            bn: 'এটি ব্যবহারকারীর মনিটর বন্ধ করে এবং বিদ্যুৎ তার খুলে ফেলে',
          },
          {
            en: 'It translates the user email address into spoken Japanese',
            bn: 'এটি ব্যবহারকারীর ইমেইল ঠিকানাকে জাপানি কণ্ঠে রূপান্তর করে',
          },
          {
            en: 'It doubles the storage capacity of the client hard disk',
            bn: 'এটি ক্লায়েন্টের হার্ড ড্রাইভের স্টোরেজ ক্ষমতা দ্বিগুণ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Stateful sessions enable instant, single-millisecond logout and revocation.',
          bn: 'স্টেটফুল সেশন তাৎক্ষণিকভাবে নিমিষেই লগআউট ও সেশন বাতিল করতে পারে।',
        },
        explanation: {
          en: 'Deleting the session key from the centralized store invalidates it immediately. Stateless tokens require maintaining complex revocation blacklists.',
          bn: 'সেন্ট্রাল স্টোর থেকে সেশন মুছলেই তা বাতিল হয়ে যায়। স্টেটলেস টোকেনের ক্ষেত্রে এই তাৎক্ষণিক বাতিল করা অনেক জটিল।'
        },
      },
    ],
  },
  next: {
    slug: 'mfa-basics',
    title: {
      en: 'Multi-Factor Authentication: TOTP RFC 6238 & Authenticator Apps',
      bn: 'মাল্টি-ফ্যাক্টর অথেনটিকেশন: TOTP RFC ৬২৩৮ এবং অথেনটিকেটর অ্যাপ'
    },
  },
};
