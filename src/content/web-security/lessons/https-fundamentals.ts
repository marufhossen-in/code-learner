import type { Lesson } from '../../../lib/types';

export const HttpsFundamentalsLesson: Lesson = {
  slug: 'https-fundamentals',
  tech: 'web-security',
  title: {
    en: 'HTTPS & Transport Layer Security (TLS): Encryption, Certificates & HSTS',
    bn: 'HTTPS ও ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS): এনক্রিপশন, সার্টিফিকেট এবং HSTS'
  },
  summary: {
    en: 'Master transport layer security across modern web applications. Discover why plaintext HTTP shouts sensitive credentials in plain text across public Wi-Fi routers and internet backbones. Learn how TLS 1.3 wraps TCP connections in authenticated symmetric ciphers (AES-256-GCM), providing 3 vital security guarantees: Confidentiality, Integrity, and Server Identity. Understand ephemeral Diffie-Hellman forward secrecy, X.509 digital certificates, and how HSTS headers defeat SSL-stripping downgrade attacks.',
    bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনে ট্রান্সপোর্ট লেয়ার সিকিউরিটি আয়ত্ত করুন। সাধারণ HTTP কেন পাবলিক ওয়াইফাই এবং ইন্টারনেট নেটওয়ার্কে সংবেদনশীল তথ্য প্লেইনটেক্সট আকারে প্রকাশ করে দেয় তা জানুন। TLS ১.৩ কীভাবে TCP সংযোগকে অথেন্টিকেটেড সিমেট্রিক সাইফার (AES-256-GCM) দিয়ে মুড়ে ফেলে ৩ টি গুরুত্বপূর্ণ নিরাপত্তা নিশ্চয়তা (গোপনীয়তা, অখণ্ডতা এবং সার্ভারের পরিচয়) দেয় তা শিখুন। ফরোয়ার্ড সিক্রেসি, X.509 ডিজিটাল সার্টিফিকেট এবং কীভাবে HSTS হেডার ডাউনগ্রেড আক্রমণ প্রতিহত করে তা জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'plaintext-http-vs-https',
      text: {
        en: 'The Vulnerability of Plaintext HTTP: Shouting Secrets Across the Wire',
        bn: 'প্লেইনটেক্সট HTTP-র মারাত্মক ঝুঁকি: তারের ওপর দিয়ে তথ্য চিৎকার করা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The public web was originally designed without native transport encryption. When a browser communicates over unencrypted HTTP, every single byte travels as clear text across intermediate network hops. If a user submits a 9-character password like "secret123", any passive packet sniffer on the local Wi-Fi reads those exact 9 characters without needing specialized decryption tools.',
        bn: 'পাবলিক ওয়েব শুরুতে কোনো নেটিভ ট্রান্সপোর্ট এনক্রিপশন ছাড়া তৈরি হয়েছিল। যখন কোনো ব্রাউজার আন-এনক্রিপ্টেড HTTP দিয়ে যোগাযোগ করে, তখন প্রতিটি বাইট উন্মুক্ত টেক্সট আকারে মধ্যবর্তী নেটওয়ার্ক দিয়ে যাতায়াত করে। কোনো ব্যবহারকারী যদি "secret123" এর মতো ৯ অক্ষরের একটি পাসওয়ার্ড টাইপ করেন, তবে লোকাল ওয়াইফাইতে থাকা যেকোনো সাধারণ প্যাকেট স্নাইফার কোনো ডিক্রিপশন টুল ছাড়াই সেই ৯ টি অক্ষর সরাসরি পড়ে ফেলতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'HTTPS (HTTP over TLS) seals the connection using authenticated symmetric encryption. It provides 3 foundational security guarantees: Confidentiality (eavesdroppers see only random ciphertext noise), Integrity (in-flight data tampering is cryptographically detected), and Server Identity (X.509 certificates prove the server is genuine).',
        bn: 'HTTPS (TLS দ্বারা সুরক্ষিত HTTP) শক্তিশালী সিমেট্রিক এনক্রিপশন দিয়ে এই সংযোগটিকে সম্পূর্ণ সিল করে দেয়। এটি ৩ টি মৌলিক নিরাপত্তা গ্যারান্টি প্রদান করে: গোপনীয়তা (আড়িপাতাকারীরা কেবল অর্থহীন সাইফারটেক্সট দেখে), অখণ্ডতা (পথিমধ্যে ডেটার কোনো পরিবর্তন গাণিতিকভাবে সনাক্ত হয়) এবং সার্ভারের পরিচয় (X.509 ডিজিটাল সার্টিফিকেট প্রমাণ করে যে সার্ভারটি আসল)।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. TLS 1.3 Handshake & Ephemeral Key Exchange',
            bn: '১. TLS ১.৩ হ্যান্ডশেক এবং ক্ষণস্থায়ী কি বিনিময়'
          },
          text: {
            en: 'The browser and server execute an Elliptic Curve Diffie-Hellman Ephemeral (ECDHE) exchange in 1 round trip (1-RTT), negotiating a unique 32-byte symmetric session key.',
            bn: 'ব্রাউজার এবং সার্ভার ১ রাউন্ড ট্রিপের (1-RTT) মধ্যে একটি ক্ষণস্থায়ী ডিফি-হেলম্যান (ECDHE) বিনিময় সম্পন্ন করে একটি অনন্য ৩২-বাইটের সিমেট্রিক সেশন কি তৈরি করে।'
          },
        },
        {
          title: {
            en: '2. X.509 Digital Certificate Validation',
            bn: '২. X.509 ডিজিটাল সার্টিফিকেট যাচাই'
          },
          text: {
            en: 'The server presents a cryptographic certificate issued by a trusted Certificate Authority (CA). The browser verifies the digital signature chain to thwart man-in-the-middle impersonators.',
            bn: 'সার্ভার একটি বিশ্বস্ত সার্টিফিকেট অথরিটি (CA) দ্বারা প্রদত্ত ক্রিপ্টোগ্রাফিক সার্টিফিকেট উপস্থাপন করে। ব্রাউজার ডিজিটাল সিগনেচার চেইন যাচাই করে কোনো ভুয়া প্রক্সি বা মধ্যস্থতাকারী প্রতিহত করে।'
          },
        },
        {
          title: {
            en: '3. Authenticated Symmetric Encryption (AES-GCM)',
            bn: '৩. অথেন্টিকেটেড সিমেট্রিক এনক্রিপশন (AES-GCM)'
          },
          text: {
            en: 'Application data is encrypted using AES-256-GCM with a unique 12-byte IV and a 16-byte authentication tag, ensuring both confidentiality and message integrity.',
            bn: 'অ্যাপ্লিকেশনের ডেটা একটি অনন্য ১২-বাইটের IV এবং ১৬-বাইটের অথেন্টিকেশন ট্যাগসহ AES-256-GCM দ্বারা এনক্রিপ্ট করা হয়, যা গোপনীয়তা ও অখণ্ডতা উভয়ই নিশ্চিত করে।'
          },
        },
        {
          title: {
            en: '4. HSTS Policy Enforcement',
            bn: '৪. HSTS পলিসি প্রয়োগ'
          },
          text: {
            en: 'The server responds with the Strict-Transport-Security header (e.g. max-age=31536000), instructing browsers to permanently refuse insecure HTTP connections and block downgrade attacks.',
            bn: 'সার্ভার Strict-Transport-Security হেডার পাঠায় ( যেমন max-age=31536000 ), যা ব্রাউজারকে নির্দেশ দেয় কোনো আন-এনক্রিপ্টেড সংযোগ গ্রহণ না করতে এবং ডাউনগ্রেড আক্রমণ প্রতিহত করতে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'HTTP Plaintext vs HTTPS Authenticated Ciphertext: 9 Characters Sealed',
        bn: 'HTTP প্লেইনটেক্সট বনাম HTTPS অথেন্টিকেটেড সাইফারটেক্সট: ৯ টি অক্ষরের সুরক্ষা'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Comparison between plaintext HTTP and encrypted HTTPS showing 9 characters sealed with AES-GCM">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">TRANSPORT SECURITY: PLAINTEXT HTTP VS ENCRYPTED HTTPS</text>
  
  <!-- Left Side: Unencrypted HTTP (Plaintext Exposure) -->
  <g transform="translate(40, 55)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="360" height="32" rx="8" fill="#dc2626"/>
    <text x="180" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">UNENCRYPTED HTTP (DANGEROUS)</text>
    
    <g transform="translate(15, 45)">
      <rect width="330" height="65" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="15" y="24" fill="#fca5a5" font-size="10" font-weight="bold">TRANSMITTED PAYLOAD:</text>
      <text x="15" y="46" fill="#ffffff" font-size="12" font-weight="bold">"secret123"</text>
      <text x="120" y="46" fill="#fca5a5" font-size="9">(9 readable characters)</text>
      
      <rect y="80" width="330" height="110" rx="6" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#ef4444" font-size="9.5" font-weight="bold">EAVESDROPPER INTERCEPTION:</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="8.5">• Wi-Fi packet sniffers capture raw text</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="8.5">• ISPs log plaintext credentials and URLs</text>
      <text x="15" y="78" fill="#cbd5e1" font-size="8.5">• Rogue proxies inject malicious ads in transit</text>
      <text x="15" y="98" fill="#fca5a5" font-size="8.5">ZERO Confidentiality! ZERO Integrity!</text>
      
      <rect y="205" width="330" height="60" rx="6" fill="#450a0a"/>
      <text x="165" y="232" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">MAN-IN-THE-MIDDLE TARGET</text>
      <text x="165" y="250" fill="#fca5a5" font-size="8" text-anchor="middle">Passwords stolen with basic Wi-Fi tools</text>
    </g>
  </g>
  
  <!-- Right Side: Encrypted HTTPS (TLS 1.3 Sealing) -->
  <g transform="translate(440, 55)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="360" height="32" rx="8" fill="#059669"/>
    <text x="180" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ENCRYPTED HTTPS (TLS 1.3 SECURE)</text>
    
    <g transform="translate(15, 45)">
      <rect width="330" height="65" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="24" fill="#6ee7b7" font-size="10" font-weight="bold">SEALED CIPHERTEXT (AES-256-GCM):</text>
      <text x="15" y="46" fill="#34d399" font-size="11" font-weight="bold">80257e9de610588008...</text>
      <text x="210" y="46" fill="#6ee7b7" font-size="8.5">(Sealed by 32B key)</text>
      
      <rect y="80" width="330" height="110" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="9.5" font-weight="bold">3 SECURITY GUARANTEES ACTIVE:</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="8.5">1. CONFIDENTIALITY: Only noise visible on wire</text>
      <text x="15" y="60" fill="#cbd5e1" font-size="8.5">2. INTEGRITY: 16-byte tag halts altered bytes</text>
      <text x="15" y="78" fill="#cbd5e1" font-size="8.5">3. IDENTITY: X.509 certificate proves domain</text>
      <text x="15" y="98" fill="#34d399" font-size="8.5">Forward secrecy protects past traffic!</text>
      
      <rect y="205" width="330" height="60" rx="6" fill="#064e3b"/>
      <text x="165" y="232" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">CRYPTOGRAPHIC SHIELD</text>
      <text x="165" y="250" fill="#6ee7b7" font-size="8" text-anchor="middle">HSTS enforces max-age=31536000 (1 year)</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">The exact same 9 characters travel unreadable to sniffers and tamper-proof to proxies</text>
</svg>`,
      caption: {
        en: 'The comparison shows 9 characters exposed in plaintext HTTP versus sealed in AES-256-GCM ciphertext in HTTPS.',
        bn: 'তুলনামূলক চিত্রে দেখা যাচ্ছে কীভাবে ৯ টি অক্ষর সাধারণ HTTP-তে উন্মুক্ত থাকে কিন্তু HTTPS-এ AES-256-GCM দ্বারা সুরক্ষিত থাকে।'
      },
    },
    {
      type: 'heading',
      id: 'tls-channel-code',
      text: {
        en: 'Building an Authenticated TLS Channel Simulator in Node.js',
        bn: 'Node.js-এ অথেন্টিকেটেড TLS চ্যানেল সিমুলেটর তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect this implementation demonstrating authenticated encryption with associated data (AEAD) using AES-256-GCM. Notice how the channel uses unique 12-byte initialization vectors, 16-byte authentication tags, and immediately raises a cryptographic error if an in-transit byte is tampered with.',
        bn: 'নিচে AES-256-GCM ব্যবহার করে তৈরি অথেন্টিকেটেড এনক্রিপশনের কোডটি পরীক্ষা করুন। লক্ষ্য করুন কীভাবে চ্যানেলটি ১২-বাইটের IV ও ১৬-বাইটের অথেন্টিকেশন ট্যাগ ব্যবহার করে এবং ট্রানজিটে একটিমাত্র বাইট বিকৃত হলেও সাথে সাথে এরর প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'tls-channel-simulator.js',
      code: `// TLS 1.3 Authenticated Symmetric Channel Simulator (AES-256-GCM)
const crypto = require('crypto');

class TlsChannelSimulator {
  constructor(sharedSessionKey) {
    this.sessionKey = sharedSessionKey; // 32-byte symmetric key from ECDHE
  }

  // Encrypt payload using AES-256-GCM with a 12-byte random IV
  encrypt(plaintext) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', this.sessionKey, iv);

    let ciphertext = cipher.update(plaintext, 'utf8', 'hex');
    ciphertext += cipher.final('hex');
    const authTag = cipher.getAuthTag(); // 16-byte message integrity seal

    return {
      iv: iv.toString('hex'),
      ciphertext: ciphertext,
      authTag: authTag.toString('hex')
    };
  }

  // Decrypt and verify message integrity
  decrypt(packet) {
    try {
      const decipher = crypto.createDecipheriv('aes-256-gcm', this.sessionKey, Buffer.from(packet.iv, 'hex'));
      decipher.setAuthTag(Buffer.from(packet.authTag, 'hex'));

      let decrypted = decipher.update(packet.ciphertext, 'hex', 'utf8');
      decrypted += decipher.final('utf8');

      return {
        success: true,
        plaintext: decrypted,
        message: 'Decryption and integrity verification successful'
      };
    } catch (err) {
      return {
        success: false,
        plaintext: null,
        error: 'CRYPTOGRAPHIC ALARM: Integrity verification failed! Data altered in flight.'
      };
    }
  }
}

// 1. Establish 32-byte symmetric session key
const sessionKey = crypto.randomBytes(32);
const tlsChannel = new TlsChannelSimulator(sessionKey);

// 2. Transmit sensitive 9-character credential
const rawPassword = 'secret123';
console.log('=== Step 1: Plaintext HTTP Transmission (Unsafe) ===');
console.log('Wire Payload:', rawPassword, '(Sniffers read all 9 characters!)');

console.log('\\n=== Step 2: Encrypted HTTPS Transmission (TLS 1.3) ===');
const securePacket = tlsChannel.encrypt(rawPassword);
console.log('Wire Ciphertext:', securePacket.ciphertext);
console.log('Auth Tag (16B):', securePacket.authTag);
console.log('IV (12B):      ', securePacket.iv);

console.log('\\n=== Step 3: Legitimate Server Decryption ===');
const serverResult = tlsChannel.decrypt(securePacket);
console.log('Decrypted on Server:', serverResult);

console.log('\\n=== Step 4: Man-in-the-Middle Packet Tampering Attack ===');
// Attacker intercepts packet and flips first byte of ciphertext
const alteredCiphertext = 'ff' + securePacket.ciphertext.slice(2);
const tamperedPacket = {
  iv: securePacket.iv,
  ciphertext: alteredCiphertext,
  authTag: securePacket.authTag
};

const tamperedResult = tlsChannel.decrypt(tamperedPacket);
console.log('Tampered Packet Result:', tamperedResult);`,
      caption: {
        en: 'The TLS simulator encrypts 9 characters into ciphertext and rejects altered packets via the 16-byte authentication tag.',
        bn: 'TLS সিমুলেটরটি ৯ টি অক্ষরকে সাইফারটেক্সটে এনক্রিপ্ট করে এবং ১৬-বাইটের অথেন্টিকেশন ট্যাগের মাধ্যমে বিকৃত প্যাকেট বাতিল করে।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The SSLstrip Attack & Why HSTS Preloading is Mandatory',
        bn: 'SSLstrip আক্রমণ এবং HSTS প্রিলোডিং কেন বাধ্যতামূলক'
      },
      text: {
        en: 'Many websites configure a simple HTTP 301 redirect to HTTPS. An attacker on the local network can execute an SSLstrip attack. The attacker proxy intercepts the initial plaintext HTTP request, talks to the real server over HTTPS, but strips encryption when responding to the victim over HTTP! HTTP Strict Transport Security (HSTS) with the preload directive (Strict-Transport-Security: max-age=31536000; includeSubDomains; preload) permanently instructs browsers to hardcode HTTPS, eliminating the initial unencrypted redirect window.',
        bn: 'অনেক ওয়েবসাইট সাধারণ HTTP থেকে HTTPS-এ একটি সাধারণ ৩০১ রিডাইরেক্ট ব্যবহার করে। কিন্তু লোকাল নেটওয়ার্কে থাকা আক্রমণকারী SSLstrip আক্রমণ চালাতে পারে। আক্রমণকারী প্রক্সি ভিকটিমের প্রথম সাধারণ HTTP রিকোয়েস্ট আটকে আসল সার্ভারের সাথে HTTPS সংযোগ রাখে, কিন্তু ভিকটিমকে সাধারণ আন-এনক্রিপ্টেড পেজ প্রদর্শন করে সব তথ্য চুরি করে নেয়! এই আক্রমণ প্রতিহত করতে HSTS প্রিলোড নির্দেশিকা ( Strict-Transport-Security: max-age=31536000; includeSubDomains; preload ) ব্রাউজারে স্থায়ীভাবে HTTPS বাধ্যতামূলক করে এবং প্রথম রিডাইরেক্টের ফাঁক পুরোপুরি বন্ধ করে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'https-fun-ex-1',
      kind: 'predict',
      topic: 'plaintext-credential-character-count',
      question: {
        en: 'How many characters compose the sensitive credential string ("secret123") transmitted in this transport security demonstration? (9). Type the number.',
        bn: 'এই ট্রান্সপোর্ট সিকিউরিটি পরীক্ষায় প্রেরিত সংবেদনশীল পাসওয়ার্ড স্ট্রিংটিতে ("secret123") সর্বমোট কয়টি অক্ষর ছিল? ( ৯ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '9',
      hint: {
        en: '"secret123" has exactly 9 characters.',
        bn: '"secret123" স্ট্রিংটিতে ঠিক ৯ টি অক্ষর রয়েছে।'
      },
      explanation: {
        en: 'The 9 characters of "secret123" are fully visible to packet sniffers in plaintext HTTP, but completely sealed under HTTPS.',
        bn: '"secret123" এর ৯ টি অক্ষর সাধারণ HTTP-তে সবার কাছে উন্মুক্ত থাকে, কিন্তু HTTPS-এ সম্পূর্ণ সুরক্ষিত থাকে।'
      },
    },
    {
      id: 'https-fun-ex-2',
      kind: 'mcq',
      topic: 'forward-secrecy-guarantee',
      question: {
        en: 'What is Forward Secrecy (PFS) in TLS 1.3, and why is it a critical cryptographic defense?',
        bn: 'TLS ১.৩ এ ফরোয়ার্ড সিক্রেসি (PFS) কী এবং কেন এটি একটি অত্যন্ত গুরুত্বপূর্ণ ক্রিপ্টোগ্রাফিক সুরক্ষা?'
      },
      options: [
        {
          en: 'It ensures that session keys are derived from ephemeral Diffie-Hellman exchanges and destroyed immediately after use; even if a server private key is compromised years in the future, adversaries cannot retroactively decrypt recorded past traffic',
          bn: 'এটি নিশ্চিত করে যে সেশন কিগুলো ক্ষণস্থায়ী ডিফি-হেলম্যান থেকে তৈরি হয়ে ব্যবহারের পরপরই ধ্বংস হয়ে যায়; ফলে ভবিষ্যতে সার্ভারের প্রাইভেট কি ফাঁস হলেও আক্রমণকারীরা অতীতের রেকর্ড করা ট্রাফিক কোনোভাবেই ডিক্রিপ্ট করতে পারে না',
        },
        {
          en: 'It forces computers to run software updates fifty times every month',
          bn: 'এটি কম্পিউটারকে প্রতি মাসে পঞ্চাশ বার সফটওয়্যার আপডেট চালাতে বাধ্য করে',
        },
        {
          en: 'It turns the website background color into bright orange automatically',
          bn: 'এটি ওয়েবসাইটের ব্যাকগ্রাউন্ড রঙ নিজে থেকেই উজ্জ্বল কমলা রঙে রূপান্তর করে',
        },
        {
          en: 'It increases the sound volume of laptop speakers by thirty decibels',
          bn: 'এটি ল্যাপটপের স্পিকারের শব্দের মাত্রা ত্রিশ ডেসিবেল পর্যন্ত বাড়িয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Ephemeral keys protect past recorded communications from future private key compromises.',
        bn: 'ক্ষণস্থায়ী কি ভবিষ্যতের কি ফাঁসের বিপদ থেকে অতীতের রেকর্ড করা তথ্যকে নিরাপদ রাখে।'
      },
      explanation: {
        en: 'Without forward secrecy, an adversary who stores encrypted traffic can decrypt years of historical data if the private certificate key is ever stolen. Ephemeral ECDHE prevents retroactive decryption.',
        bn: 'ফরোয়ার্ড সিক্রেসি না থাকলে হ্যাকাররা ট্রাফিক জমিয়ে রেখে পরে সার্টিফিকেট চুরি করে সব পুরানো তথ্য উদ্ধার করতে পারত। ECDHE এটি গাণিতিকভাবে অসম্ভব করে তোলে।'
      },
    },
    {
      id: 'https-fun-ex-3',
      kind: 'mcq',
      topic: 'hsts-ssl-strip-defense',
      question: {
        en: 'How does the HTTP Strict Transport Security (HSTS) header prevent SSL-stripping man-in-the-middle attacks?',
        bn: 'HTTP Strict Transport Security (HSTS) হেডার কীভাবে SSL-স্ট্রিপিং ম্যান-ইন-দ্য-মিডল আক্রমণ প্রতিহত করে?'
      },
      options: [
        {
          en: 'It instructs the browser to automatically convert all insecure http:// requests to https:// internally before making network calls, and completely forbids users from bypassing certificate warning screens',
          bn: 'এটি ব্রাউজারকে নির্দেশ দেয় কোনো রিকোয়েস্ট পাঠানোর আগেই অভ্যন্তরীণভাবে সমস্ত http:// রিকোয়েস্টকে https:// এ রূপান্তর করতে এবং সার্টিফিকেট এরর স্ক্রিন উপেক্ষা করা সম্পূর্ণ নিষিদ্ধ করে',
        },
        {
          en: 'It makes network routers disconnect all wireless phones in the building',
          bn: 'এটি ভবনের সমস্ত ওয়্যারলেস ফোনের সংযোগ রাউটার থেকে বিচ্ছিন্ন করে দেয়',
        },
        {
          en: 'It reduces the physical memory size of database hard drives by half',
          bn: 'এটি ডাটাবেজ হার্ডড্রাইভের শারীরিক মেমোরির আকার অর্ধেক কমিয়ে দেয়',
        },
        {
          en: 'It deletes all user bookmarks saved in the web browser navigation bar',
          bn: 'এটি ওয়েব ব্রাউজারে সংরক্ষিত ব্যবহারকারীর সমস্ত বুকমার্ক মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'HSTS forces browsers to connect exclusively over HTTPS, refusing unencrypted HTTP.',
        bn: 'HSTS ব্রাউজারকে কেবল HTTPS-এ সংযোগ করতে বাধ্য করে এবং আন-এনক্রিপ্টেড HTTP বর্জন করে।'
      },
      explanation: {
        en: 'HSTS eliminates the vulnerable initial HTTP 301 redirect. The browser automatically upgrades to HTTPS internally before any packet touches the wire.',
        bn: 'HSTS প্রাথমিক ঝুঁকিপূর্ণ HTTP ৩০১ রিডাইরেক্টের প্রয়োজন দূর করে। ব্রাউজার নিজে থেকেই সরাসরি HTTPS-এ সংযোগ তৈরি করে।'
      },
    },
    {
      id: 'https-fun-ex-4',
      kind: 'predict',
      topic: 'tls-core-security-guarantees-count',
      question: {
        en: 'How many foundational security guarantees (Confidentiality, Integrity, and Server Identity) does modern TLS provide? (3). Type the number.',
        bn: 'আধুনিক TLS সর্বমোট কয়টি মৌলিক নিরাপত্তা গ্যারান্টি ( গোপনীয়তা, অখণ্ডতা এবং সার্ভারের পরিচয় ) প্রদান করে? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'TLS provides 3 foundational guarantees.',
        bn: 'TLS ঠিক ৩ টি মৌলিক নিরাপত্তা গ্যারান্টি প্রদান করে।'
      },
      explanation: {
        en: 'The 3 core guarantees are Confidentiality (encryption), Integrity (AEAD tamper detection), and Identity (X.509 digital certificates).',
        bn: '৩ টি মূল গ্যারান্টি হলো গোপনীয়তা (এনক্রিপশন), অখণ্ডতা (ট্যাম্পার সনাক্তকরণ) এবং পরিচয় (X.509 সার্টিফিকেট)।'
      },
    },
  ],
  quiz: {
    id: 'https-fundamentals-quiz',
    title: {
      en: 'HTTPS & Transport Layer Security Architecture Quiz',
      bn: 'HTTPS ও ট্রান্সপোর্ট লেয়ার সিকিউরিটি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'https-fun-qz-1',
        kind: 'mcq',
        topic: 'ca-certificate-chain-trust',
        question: {
          en: 'How does a web browser verify the authenticity of an X.509 digital certificate presented by a web server?',
          bn: 'ওয়েব ব্রাউজার কীভাবে সার্ভারের উপস্থাপিত X.509 ডিজিটাল সার্টিফিকেটের সত্যতা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'By validating the cryptographic digital signature chain from the server certificate up through intermediate authorities to a trusted Root Certificate Authority pre-installed in the operating system trust store',
            bn: 'অপারেটিং সিস্টেমে আগে থেকেই ইনস্টল থাকা বিশ্বস্ত রুট সার্টিফিকেট অথরিটি পর্যন্ত প্রতিটি স্তরের ক্রিপ্টোগ্রাফিক ডিজিটাল সিগনেচার চেইন নিখুঁতভাবে মিলিয়ে দেখার মাধ্যমে',
          },
          {
            en: 'By counting the number of letters in the domain name',
            bn: 'ডোমেইন নামের মধ্যে সর্বমোট কয়টি অক্ষর আছে তা গুনে দেখার মাধ্যমে',
          },
          {
            en: 'By checking whether the server computer chassis is made of aluminum',
            bn: 'সার্ভারের কম্পিউটারের বডি অ্যালুমিনিয়াম দিয়ে তৈরি কি না তা পরীক্ষা করে',
          },
          {
            en: 'By sending a paper letter to the international post office',
            bn: 'আন্তর্জাতিক ডাকঘরে একটি সাধারণ কাগজের চিঠি পাঠিয়ে খোঁজ নেওয়ার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Trust is established via cryptographic signature chains rooted in the OS trust store.',
          bn: 'অপারেটিং সিস্টেমের ট্রাস্ট স্টোরে সংরক্ষিত রুট সার্টিফিকেটের চেইনের মাধ্যমে বিশ্বাস প্রতিষ্ঠিত হয়।'
        },
        explanation: {
          en: 'Browsers verify that each certificate was signed by the private key of the parent authority, terminating at a trusted Root CA in the OS store.',
          bn: 'ব্রাউজার যাচাই করে যে প্রতিটি সার্টিফিকেট তার ঊর্ধ্বতন কর্তৃপক্ষের প্রাইভেট কি দ্বারা স্বাক্ষরিত হয়েছে, যার শেষ মাথায় থাকে বিশ্বস্ত রুট CA।'
        },
      },
      {
        id: 'https-fun-qz-2',
        kind: 'mcq',
        topic: 'symmetric-vs-asymmetric-in-tls',
        question: {
          en: 'Why does TLS use asymmetric cryptography during the initial handshake, but switches to symmetric encryption (AES-GCM) for data transmission?',
          bn: 'TLS কেন প্রাথমিক হ্যান্ডশেকে অ্যাসাইমেট্রিক ক্রিপ্টোগ্রাফি ব্যবহার করে, কিন্তু ডেটা পরিবহনের জন্য সিমেট্রিক এনক্রিপশনে (AES-GCM) স্থানান্তরিত হয়?'
        },
        options: [
          {
            en: 'Asymmetric cryptography solves key exchange securely without pre-shared secrets, but is computationally slow; symmetric encryption is thousands of times faster and hardware-accelerated for bulk data transfer',
            bn: 'অ্যাসাইমেট্রিক ক্রিপ্টোগ্রাফি কোনো পূর্ববর্তী সিক্রেট ছাড়াই নিরাপদে কি বিনিময় সম্পন্ন করে কিন্তু এটি ধীরগতির; অন্যদিকে সিমেট্রিক এনক্রিপশন হাজার গুণ দ্রুত এবং হার্ডওয়্যার ত্বরান্বিত হওয়ায় বিপুল ডেটা পরিবহনে আদর্শ',
          },
          {
            en: 'Because symmetric encryption causes computer monitors to turn black every five minutes',
            bn: 'কারণ সিমেট্রিক এনক্রিপশন কম্পিউটারের মনিটরকে প্রতি পাঁচ মিনিট পর পর কালো করে দেয়',
          },
          {
            en: 'Because asymmetric cryptography only works during daytime hours',
            bn: 'কারণ অ্যাসাইমেট্রিক ক্রিপ্টোগ্রাফি কেবল দিনের বেলা কাজ করতে পারে',
          },
          {
            en: 'Because symmetric encryption was invented exclusively for smartphone batteries',
            bn: 'কারণ সিমেট্রিক এনক্রিপশন কেবল স্মার্টফোনের ব্যাটারির জন্য বিশেষভাবে তৈরি করা হয়েছিল',
          },
        ],
        answer: 0,
        hint: {
          en: 'Asymmetric establishes the key; symmetric encrypts high-speed bulk data.',
          bn: 'অ্যাসাইমেট্রিক কি তৈরি করে দেয়; আর সিমেট্রিক উচ্চগতিতে বিপুল ডেটা এনক্রিপ্ট করে।'
        },
        explanation: {
          en: 'Asymmetric operations consume excessive CPU cycles. Using ECDHE to agree on a symmetric AES-256-GCM key provides the best combination of security and raw throughput.',
          bn: 'অ্যাসাইমেট্রিক কাজ প্রচুর প্রসেসর শক্তি খরচ করে। তাই কি বিনিময়ের পর দ্রুতগতির সিমেট্রিক AES-GCM ব্যবহার করা সর্বোত্তম কৌশল।'
        },
      },
      {
        id: 'https-fun-qz-3',
        kind: 'mcq',
        topic: 'sni-server-name-indication',
        question: {
          en: 'What is the role of Server Name Indication (SNI) in modern TLS connections hosting multiple websites on a single IP address?',
          bn: 'একটিমাত্র আইপি ঠিকানায় একাধিক ওয়েবসাইট হোস্ট করার ক্ষেত্রে আধুনিক TLS সংযোগে সার্ভার নেম ইন্ডিকেশনের (SNI) ভূমিকা কী?'
        },
        options: [
          {
            en: 'It includes the requested hostname in the initial ClientHello packet, allowing the web server to present the exact matching X.509 SSL certificate before the encrypted TLS channel is established',
            bn: 'এটি প্রাথমিক ClientHello প্যাকেটে উদ্দিষ্ট হোস্টনেম পাঠিয়ে দেয়, যার ফলে ওয়েব সার্ভার এনক্রিপ্টেড সংযোগ তৈরির আগেই সঠিক X.509 SSL সার্টিফিকেট উপস্থাপন করতে পারে',
          },
          {
            en: 'It controls the temperature of the web server cooling fans',
            bn: 'এটি ওয়েব সার্ভারের কুলিং ফ্যানের তাপমাত্রা নিয়ন্ত্রণ করে',
          },
          {
            en: 'It changes the font style of text document files to italics',
            bn: 'এটি টেক্সট ডকুমেন্ট ফাইলের ফন্ট স্টাইলকে বাঁকা বা ইটালিকে রূপান্তর করে',
          },
          {
            en: 'It forces computer network cables to carry data at double speed',
            bn: 'এটি ইন্টারনেটের তারকে দ্বিগুণ গতিতে ডেটা পরিবহন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SNI tells the multi-tenant server which certificate to present during the handshake.',
          bn: 'SNI মাল্টি-টেন্যান্ট সার্ভারকে জানায় কোন সার্টিফিকেট হ্যান্ডশেকে উপস্থাপন করতে হবে।'
        },
        explanation: {
          en: 'Without SNI, a server hosting 100 domains on a single IP address would not know which certificate to send during the ClientHello. Encrypted SNI (ECH) further shields privacy.',
          bn: 'SNI না থাকলে একটিমাত্র আইপি ঠিকানায় ১০০ টি ডোমেইন হোস্ট করা সার্ভার ClientHello চলাকালীন কোন সার্টিফিকেট পাঠাতে হবে তা বুঝতে পারত না। ECH গোপনীয়তা আরও বৃদ্ধি করে।'
        },
      },
      {
        id: 'https-fun-qz-4',
        kind: 'mcq',
        topic: 'mixed-content-vulnerability',
        question: {
          en: 'What is a "Mixed Content" security vulnerability on an HTTPS web page, and how do browsers handle it?',
          bn: 'একটি HTTPS ওয়েব পেজে "মিক্সড কনটেন্ট" (Mixed Content) নিরাপত্তা ত্রুটি কী এবং ব্রাউজার কীভাবে এটি মোকাবেলা করে?'
        },
        options: [
          {
            en: 'When an initial secure HTTPS page loads subresources (such as JavaScript, CSS, or images) over insecure HTTP; modern browsers block active mixed content (scripts) automatically to prevent script injection',
            bn: 'যখন একটি নিরাপদ HTTPS পেজ তার ভেতরের স্ক্রিপ্ট, সিএসএস বা ছবি অনিরাপদ HTTP দিয়ে লোড করে; স্ক্রিপ্ট ইনজেকশন রুখতে আধুনিক ব্রাউজার এই ধরনের অনিরাপদ কনটেন্ট নিজে থেকেই ব্লক করে দেয়',
          },
          {
            en: 'When a web page contains text written in more than two human languages',
            bn: 'যখন কোনো ওয়েব পেজের মধ্যে দুটির বেশি মানবভাষায় লেখা টেক্সট থাকে',
          },
          {
            en: 'When an employee drinks coffee while typing on a computer keyboard',
            bn: 'যখন কোনো কর্মী কিবোর্ডে টাইপ করার সময় কফি পান করতে থাকেন',
          },
          {
            en: 'When a smartphone downloads two songs from the internet at the same time',
            bn: 'যখন একটি স্মার্টফোন একই সাথে ইন্টারনেট থেকে দুটি গান ডাউনলোড করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Loading insecure HTTP resources inside an HTTPS page compromises the secure origin.',
          bn: 'HTTPS পেজের ভেতর অনিরাপদ HTTP রিসোর্স লোড করলে পুরো পেজের নিরাপত্তা ধ্বংস হয়।'
        },
        explanation: {
          en: 'If an HTTPS site loads an HTTP script, an eavesdropper can tamper with that script to execute arbitrary XSS in the HTTPS context. Browsers block active mixed content.',
          bn: 'HTTPS সাইটে আন-এনক্রিপ্টেড স্ক্রিপ্ট থাকলে হ্যাকার তা বদলে XSS চালাতে পারে। তাই ব্রাউজার এগুলোকে কঠোরভাবে ব্লক করে দেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'same-origin-policy',
    title: {
      en: 'The Same-Origin Policy (SOP) & Cross-Origin Resource Sharing (CORS)',
      bn: 'সেম-অরিজিন পলিসি (SOP) ও ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS)'
    },
  },
};
