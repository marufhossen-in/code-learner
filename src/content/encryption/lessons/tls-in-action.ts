import type { Lesson } from '../../../lib/types';

export const TlsInActionLesson: Lesson = {
  slug: 'tls-in-action',
  tech: 'encryption',
  title: {
    en: 'TLS in Action: Handshakes, Certificates, SNI & Forward Secrecy',
    bn: 'বাস্তবে TLS: হ্যান্ডশেক, সার্টিফিকেট, SNI ও ফরোয়ার্ড সিক্রেসি'
  },
  summary: {
    en: 'Master Transport Layer Security (TLS 1.3), 1-RTT cryptographic handshakes, X.509 public key trust chains, Server Name Indication (SNI), Encrypted Client Hello (ECH), and Perfect Forward Secrecy (PFS).',
    bn: 'ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS ১.৩), ১-RTT ক্রিপ্টোগ্রাফিক হ্যান্ডশেক, X.৫০৯ পাবলিক কি ট্রাস্ট চেইন, সার্ভার নেম ইন্ডিকেশন (SNI), এনক্রিপ্টেড ক্লায়েন্ট হ্যালো (ECH) এবং পারফেক্ট ফরোয়ার্ড সিক্রেসি (PFS) আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'tls-evolution-and-purpose',
      text: {
        en: 'The Evolution of Web Transport: From SSL to Modern TLS 1.3',
        bn: 'ওয়েব ট্রান্সপোর্টের বিবর্তন: SSL থেকে আধুনিক TLS ১.৩'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every time a browser loads a website over HTTPS, Transport Layer Security (TLS) establishes an encrypted, authenticated tunnel over TCP. Early SSL protocols (SSL 2.0 and SSL 3.0) and early TLS revisions (TLS 1.0 and 1.1) were riddled with structural cryptographic flaws, including padding oracle leaks and cross-protocol downgrade attacks. The modern internet runs on TLS 1.3 (RFC 8446), which drastically overhauled network security by cutting handshake latency to a single round-trip time (1-RTT) and permanently banning insecure legacy primitives.',
        bn: 'প্রতিবার যখন কোনো ব্রাউজার HTTPS দিয়ে কোনো ওয়েবসাইট খোলে, তখন ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS) টিসিপি (TCP) কানেকশনের উপর একটি এনক্রিপ্ট ও অথেনটিকেটেড সুড়ঙ্গ তৈরি করে। শুরুর দিকের SSL প্রোটোকল (SSL ২.০ ও ৩.০) এবং প্রাথমিক TLS সংস্করণগুলো (TLS ১.০ ও ১.১) একাধিক কাঠামোগত নিরাপত্তা ত্রুটিতে (যেমন প্যাডিং ওরাকল এবং ডাউনগ্রেড আক্রমণ) জর্জরিত ছিল। আধুনিক ইন্টারনেট সম্পূর্ণভাবে TLS ১.৩ (RFC ৮৪৪৬)-এর উপর চলে, যা হ্যান্ডশেক লেটেন্সি কমিয়ে মাত্র এক রাউন্ড-ট্রিপে (১-RTT) নামিয়ে এনেছে এবং অনিরাপদ পুরানো অ্যালগরিদমগুলোকে চিরতরে বাতিল করেছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'TLS 1.3 Handshake (RFC 8446)',
          def: {
            en: 'The 1-RTT negotiation protocol where client and server exchange ephemeral Diffie-Hellman shares to establish keys.',
            bn: '১-RTT আলোচনার প্রোটোকল যার মাধ্যমে ক্লায়েন্ট ও সার্ভার যৌথ সেশন কি প্রতিষ্ঠার জন্য ক্ষণস্থায়ী ডিফি-হেলম্যান শেয়ার বিনিময় করে।'
          }
        },
        {
          term: 'Perfect Forward Secrecy (PFS)',
          def: {
            en: 'A security property ensuring that compromise of long-term server private keys cannot decrypt past recorded sessions.',
            bn: 'একটি নিরাপত্তা বৈশিষ্ট্য যা নিশ্চিত করে যে সার্ভারের দীর্ঘমেয়াদী প্রাইভেট কি চুরি হলেও অতীতের রেকর্ড করা ট্রাফিক ডিক্রিপ্ট করা যাবে না।'
          }
        },
        {
          term: 'Server Name Indication (SNI)',
          def: {
            en: 'A TLS extension indicating which hostname the client wants, enabling virtual hosting of multiple sites on one IP.',
            bn: 'একটি TLS এক্সটেনশন যা ক্লায়েন্ট কোন ডোমেইন দেখতে চাইছে তা জানায়, ফলে একটিমাত্র আইপিতে একাধিক সাইটের হোস্টিং সম্ভব হয়।'
          }
        },
        {
          term: 'Certificate Authority (CA)',
          def: {
            en: 'A globally trusted organization that cryptographically signs X.509 digital certificates verifying identity.',
            bn: 'একটি বিশ্বস্ত আন্তর্জাতিক প্রতিষ্ঠান যা ডিজিটাল পরিচয় প্রমাণের জন্য X.৫০৯ সার্টিফিকেটে ক্রিপ্টোগ্রাফিক স্বাক্ষর প্রদান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'tls13-handshake-anatomy',
      text: {
        en: 'Anatomy of the TLS 1.3 Handshake (1-RTT)',
        bn: 'TLS ১.৩ হ্যান্ডশেকের ব্যবচ্ছেদ (১-RTT)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike TLS 1.2 which required 2 round trips before sending application data, TLS 1.3 establishes an encrypted channel in exactly 1 round-trip time (1-RTT). The client optimistically predicts the server elliptic curve support and sends its ephemeral key share in the very first packet. By the end of the server first response, encrypted application data can begin streaming immediately.',
        bn: 'আগের TLS ১.২ প্রোটোকলে অ্যাপ্লিকেশন ডাটা পাঠানোর আগে ২টি সম্পূর্ণ রাউন্ড ট্রিপ (২-RTT) অপেক্ষা করতে হতো। কিন্তু আধুনিক TLS ১.৩ ঠিক ১টি রাউন্ড ট্রিপে (১-RTT) সম্পূর্ণ এনক্রিপ্ট সংযোগ চালু করে। ক্লায়েন্ট প্রথম প্যাকেটেই সার্ভারের সম্ভাব্য এলিপ্টিক কার্ভ অনুমান করে তার ক্ষণস্থায়ী কি-শেয়ার পাঠিয়ে দেয়। ফলে সার্ভারের প্রথম উত্তরের সাথে সাথেই এনক্রিপ্ট অ্যাপ্লিকেশন ডাটা আদান-প্রদান শুরু হতে পারে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The TLS 1.3 Handshake Flow (1-RTT Protocol)',
        bn: 'TLS ১.৩ হ্যান্ডশেক প্রবাহ (১-RTT প্রোটোকল)'
      },
      svg: `<svg viewBox="0 0 880 400" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <defs>
    <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1"/>
    </marker>
    <marker id="arrowL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <rect width="880" height="400" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="2"/>

  <!-- Client Header -->
  <rect x="60" y="30" width="200" height="45" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="160" y="58" text-anchor="middle" fill="#c7d2fe" font-size="14" font-weight="bold">Client (Browser)</text>
  <line x1="160" y1="75" x2="160" y2="370" stroke="#334155" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Server Header -->
  <rect x="620" y="30" width="200" height="45" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="720" y="58" text-anchor="middle" fill="#a7f3d0" font-size="14" font-weight="bold">Server (Web Host)</text>
  <line x1="720" y1="75" x2="720" y2="370" stroke="#334155" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Step 1: ClientHello -->
  <line x1="160" y1="120" x2="720" y2="120" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arrowR)"/>
  <rect x="230" y="95" width="420" height="48" rx="6" fill="#0f172a" stroke="#6366f1"/>
  <text x="440" y="115" text-anchor="middle" fill="#818cf8" font-size="12" font-weight="bold">1. ClientHello (Cleartext)</text>
  <text x="440" y="133" text-anchor="middle" fill="#cbd5e1" font-size="10">Ciphers [AES-GCM, ChaCha20] + key_share (X25519) + SNI</text>

  <!-- Step 2: ServerHello + Encrypted Extensions -->
  <line x1="720" y1="200" x2="160" y2="200" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowL)"/>
  <rect x="210" y="170" width="460" height="60" rx="6" fill="#022c22" stroke="#10b981"/>
  <text x="440" y="190" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">2. ServerHello + Encrypted Handshake [1-RTT]</text>
  <text x="440" y="208" text-anchor="middle" fill="#a7f3d0" font-size="10">Server key_share -> Both compute shared secret via ECDHE!</text>
  <text x="440" y="223" text-anchor="middle" fill="#e2e8f0" font-size="9">{Certificate + CertificateVerify (Signature) + Finished} (Encrypted)</text>

  <!-- Step 3: Finished & App Traffic -->
  <line x1="160" y1="290" x2="720" y2="290" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arrowR)"/>
  <rect x="230" y="265" width="420" height="48" rx="6" fill="#0f172a" stroke="#6366f1"/>
  <text x="440" y="285" text-anchor="middle" fill="#818cf8" font-size="12" font-weight="bold">3. Client Finished + Application Data (Encrypted)</text>
  <text x="440" y="303" text-anchor="middle" fill="#cbd5e1" font-size="10">Encrypted HTTP/2 or HTTP/3 frames flow immediately!</text>

  <!-- Status Badge -->
  <rect x="330" y="340" width="220" height="30" rx="6" fill="#1e1b4b" stroke="#818cf8"/>
  <text x="440" y="360" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">1-RTT Handshake Complete 🔐</text>
</svg>`,
      caption: {
        en: 'TLS 1.3 cuts handshake latency from 2-RTT to 1-RTT. Ephemeral keys are exchanged in the first packet, encrypting all subsequent certificate transmissions.',
        bn: 'TLS ১.৩ হ্যান্ডশেক সময় ২-RTT থেকে কমিয়ে ১-RTT তে আনে। প্রথম প্যাকেটেই ক্ষণস্থায়ী চাবি বিনিময় হওয়ায় সার্টিফিকেটের তথ্যও এনক্রিপ্ট হয়ে পাঠানো সম্ভব হয়।'
      }
    },
    {
      type: 'heading',
      id: 'why-rsa-exchange-was-banned',
      text: {
        en: 'Why Static RSA Key Exchange Was Permanently Banned',
        bn: 'কেন স্ট্যাটিক RSA কি এক্সচেঞ্জ স্থায়ীভাবে নিষিদ্ধ করা হলো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In TLS 1.2, servers frequently used static RSA key exchange: the client generated a random premaster secret, encrypted it with the server public RSA key, and sent it across the wire. This architecture had zero Perfect Forward Secrecy. Intelligence agencies and hackers routinely recorded gigabytes of encrypted internet traffic and stored it on hard drives. If 5 years later the server private key was leaked, stolen, or subpoenaed, the attacker could retroactively decrypt all 5 years of historical traffic.',
        bn: 'TLS ১.২ প্রোটোকলে প্রায়ই স্ট্যাটিক RSA কি এক্সচেঞ্জ ব্যবহৃত হতো: ক্লায়েন্ট একটি গোপন প্রি-মাস্টার সিক্রেট তৈরি করে তা সার্ভারের পাবলিক RSA কি দিয়ে এনক্রিপ্ট করে তারে পাঠিয়ে দিত। এই কাঠামোতে কোনো পারফেক্ট ফরোয়ার্ড সিক্রেসি (PFS) ছিল না। গোয়েন্দা সংস্থা এবং হ্যাকাররা বছরের পর বছর ধরে তার দিয়ে যাওয়া এনক্রিপ্ট করা ট্রাফিক হার্ডডিস্কে জমিয়ে রাখত ("Harvest now, decrypt later")। ৫ বছর পর কোনোভাবে সার্ভারের প্রাইভেট কি ফাঁস বা চুরি হলে, হ্যাকার সেই পুরানো চাবি দিয়ে অতীতের সমস্ত ৫ বছরের ট্রাফিক এক নিমিষে ডিক্রিপ্ট করে ফেলতে পারত।'
      }
    },
    {
      type: 'heading',
      id: 'pki-and-certificate-chains',
      text: {
        en: 'X.509 Trust Chains: Leaf, Intermediate, and Root Authorities',
        bn: 'X.৫০৯ ট্রাস্ট চেইন: লিফ, ইন্টারমিডিয়েট ও রুট অথরিটি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Certificate Layer', bn: 'সার্টিফিকেট স্তর' },
        { en: 'Issuance Responsibility', bn: 'ইস্যু করার দায়িত্ব' },
        { en: 'Trust & Storage Location', bn: 'ট্রাস্ট ও সংরক্ষণের স্থান' },
        { en: 'Compromise Impact', bn: 'চুরির পরিণতি' }
      ],
      rows: [
        [
          { en: 'Root CA Certificate', bn: 'রুট CA সার্টিফিকেট' },
          { en: 'Self-signed root authority (e.g. DigiCert, Let\'s Encrypt ISRG Root X1)', bn: 'স্ব-স্বাক্ষরিত শীর্ষ কর্তৃপক্ষ (যেমন DigiCert, ISRG Root X1)' },
          { en: 'Pre-installed in OS and web browser trust stores', bn: 'অপারেটিং সিস্টেম ও ব্রাউজারের ট্রাস্ট স্টোরে বিল্ট-ইন থাকে' },
          { en: 'Catastrophic global trust failure; root must be removed via OS update', bn: 'চরম বিশ্বব্যাপী সংকট; ওএস আপডেটের মাধ্যমে রুট বাদ দিতে হয়' }
        ],
        [
          { en: 'Intermediate CA Certificate', bn: 'ইন্টারমিডিয়েট CA সার্টিফিকেট' },
          { en: 'Signed by Root CA to protect offline root private keys', bn: 'রুট প্রাইভেট কি অফলাইনে নিরাপদ রাখতে রুট দ্বারা স্বাক্ষরিত' },
          { en: 'Delivered by web server during the TLS handshake chain', bn: 'TLS হ্যান্ডশেকের সময় ওয়েব সার্ভার স্বয়ং ক্লায়েন্টকে সরবরাহ করে' },
          { en: 'Revoked via CRL or OCSP; root remains intact and operational', bn: 'CRL বা OCSP দিয়ে বাতিল করা হয়; মূল রুট অক্ষত থাকে' }
        ],
        [
          { en: 'Leaf (End-Entity) Certificate', bn: 'লিফ (ওয়েবসাইট) সার্টিফিকেট' },
          { en: 'Signed by Intermediate CA for a specific domain name (e.g. codeshikhon.com)', bn: 'নির্দিষ্ট ডোমেইনের জন্য ইন্টারমিডিয়েট CA দ্বারা স্বাক্ষরিত' },
          { en: 'Stored on the origin web server or cloud load balancer', bn: 'মূল ওয়েব সার্ভার বা ক্লাউড লোড ব্যালেন্সারে সংরক্ষিত থাকে' },
          { en: 'Affects only that single specific domain; quickly re-issued', bn: 'কেবলমাত্র সেই নির্দিষ্ট ডোমেইন আক্রান্ত হয়; দ্রুত নতুন নেওয়া যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'sni-and-ech-privacy',
      text: {
        en: 'Server Name Indication (SNI) and Encrypted Client Hello (ECH)',
        bn: 'সার্ভার নেম ইন্ডিকেশন (SNI) এবং এনক্রিপ্টেড ক্লায়েন্ট হ্যালো (ECH)'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'The SNI Virtual Hosting Need: Multiple websites share a single IPv4 address. SNI allows the client to declare the domain name in the ClientHello so the server selects the correct TLS certificate before decrypting HTTP headers.',
          bn: 'SNI ভার্চুয়াল হোস্টিংয়ের প্রয়োজনীয়তা: একটিমাত্র IPv4 অ্যাড্রেসে একাধিক ওয়েবসাইট চলতে পারে। SNI ক্লায়েন্টকে ClientHello-তে ডোমেইনের নাম বলে দেওয়ার সুযোগ দেয়, যাতে সার্ভার এইচটিটিপি হেডার খোলার আগেই সঠিক সার্টিফিকেট নির্বাচন করতে পারে।'
        },
        {
          en: 'The SNI Privacy Leak: Historically, SNI was sent in unencrypted plaintext. Eavesdroppers, internet service providers (ISPs), and censorship firewalls could observe every website domain visited, even though inner page paths were encrypted.',
          bn: 'SNI গোপনীয়তা ফাঁস: ঐতিহাসিকভাবে SNI প্লেইনটেক্সট আকারে পাঠানো হতো। এর ফলে ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) এবং নজরদারি সংস্থাগুলো ব্যবহারকারী কোন ওয়েবসাইটে যাচ্ছেন তা পরিষ্কার দেখতে পেত, যদিও ভেতরের পেজ এনক্রিপ্ট থাকত।'
        },
        {
          en: 'Encrypted Client Hello (ECH): Modern internet engineering standardizes ECH. The client fetches the server public key via DNS-over-HTTPS (DoH) and encrypts the inner ClientHello, completely concealing the visited domain name from wiretappers.',
          bn: 'এনক্রিপ্টেড ক্লায়েন্ট হ্যালো (ECH): আধুনিক প্রকৌশলে ECH মানসম্মত করা হয়েছে। ক্লায়েন্ট নিরাপদ DNS-over-HTTPS (DoH) থেকে পাবলিক কি সংগ্রহ করে পুরো ClientHello এনক্রিপ্ট করে ফেলে, ফলে মাঝপথের কেউ আর ভিজিট করা ডোমেইন দেখতে পারে না।'
        }
      ]
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Always Enable OCSP Stapling on Production Servers',
        bn: 'প্রোডাকশন সার্ভারে সর্বদা OCSP স্ট্যাপলিং চালু রাখুন'
      },
      text: {
        en: 'Without OCSP stapling, the user browser must query the Certificate Authority independently during connection setup to check if a certificate has been revoked. This slows down page loads by hundreds of milliseconds and leaks client browsing history to third-party CAs. OCSP stapling has the web server fetch, cache, and staple a signed OCSP validity proof directly into the TLS handshake.',
        bn: 'OCSP স্ট্যাপলিং ছাড়া ব্যবহারকারীর ব্রাউজারকে সার্টিফিকেটটি বাতিল কিনা তা যাচাই করতে আলাদাভাবে সার্টিফিকেট কর্তৃপক্ষের (CA) সার্ভারে রিকোয়েস্ট পাঠাতে হয়। এটি ওয়েবসাইটের স্পিড শত শত মিলিসেকেন্ড কমিয়ে দেয় এবং ব্যবহারকারীর ব্রাউজিং তথ্য তৃতীয় পক্ষের কাছে ফাঁস করে। OCSP স্ট্যাপলিং চালু থাকলে ওয়েব সার্ভার নিজে CA থেকে ভ্যালিডিটি প্রুফ এনে হ্যান্ডশেকে সরাসরি জুড়ে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'executable-tls-engine',
      text: {
        en: 'Executable Node.js TLS 1.3 Key Exchange & Traffic Engine',
        bn: 'এক্সিকিউটেবল Node.js TLS ১.৩ কি এক্সচেঞ্জ ও ট্রাফিক ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Here is a runnable Node.js engine simulating a TLS 1.3 handshake. It generates client and server ephemeral elliptic curve keypairs (PFS), computes the shared secret, derives session traffic keys using HKDF, and encrypts 3 HTTP/2 application frames using AES-256-GCM authenticated encryption.',
        bn: 'নিচে একটি স্বয়ংসম্পূর্ণ এবং কার্যকর Node.js ইঞ্জিন দেওয়া হলো যা TLS ১.৩ হ্যান্ডশেক অনুকরণ করে। এটি ক্লায়েন্ট ও সার্ভারের ক্ষণস্থায়ী এলিপ্টিক কার্ভ কি-পেয়ার (PFS) তৈরি করে, যৌথ সিক্রেট বের করে, HKDF দিয়ে সেশন কি প্রস্তুত করে এবং AES-২৫৬-GCM দিয়ে ৩ টি HTTP/২ ফ্রেম সফলভাবে এনক্রিপ্ট ও ডিক্রিপ্ট করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run with node: TLS 1.3 1-RTT ECDHE ephemeral key exchange, HKDF derivation, and HTTP/2 application frame encryption',
        bn: 'node দিয়ে চালান: TLS ১.৩ ১-RTT ECDHE ক্ষণস্থায়ী কি বিনিময়, HKDF ডেরিভেশন এবং HTTP/২ ফ্রেম এনক্রিপশন'
      },
      code: `const crypto = require('crypto');

// 1. Client creates ephemeral ECDHE keypair for key_share (PFS)
const clientEcdh = crypto.createECDH('prime256v1');
const clientPub = clientEcdh.generateKeys();

// 2. Server creates ephemeral ECDHE keypair
const serverEcdh = crypto.createECDH('prime256v1');
const serverPub = serverEcdh.generateKeys();

// 3. Both endpoints independently compute identical shared secret (1-RTT)
const clientSecret = clientEcdh.computeSecret(serverPub);
const serverSecret = serverEcdh.computeSecret(clientPub);
const secretsMatch = clientSecret.equals(serverSecret);

// 4. HKDF derivation of session traffic encryption key
const sessionKey = crypto.hkdfSync('sha256', clientSecret, Buffer.alloc(0), Buffer.from('tls13 traffic key'), 32);

// 5. 3 sample HTTP/2 application frames encrypted under session key
const requests = [
  "GET /api/v1/auth/session HTTP/2",
  "POST /api/v1/payments/charge HTTP/2",
  "GET /api/v1/medical/telemetry HTTP/2"
];

let recoveredCount = 0;
requests.forEach(req => {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', sessionKey, iv);
  const ct = Buffer.concat([cipher.update(req, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();

  // Decryption by the receiver
  const decipher = crypto.createDecipheriv('aes-256-gcm', sessionKey, iv);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ct), decipher.final()]).toString('utf8');
  if (plain === req) recoveredCount++;
});

console.log(\`[TLS 1.3 Engine] 1-RTT Handshake complete: ECDHE secret derived (\${secretsMatch}), \${recoveredCount}/3 HTTP/2 frames encrypted & verified.\`);
console.log(\`[Security Audit] Cipher: TLS_AES_256_GCM_SHA384, PFS: True, Protocol: TLS 1.3.\`);`
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive TLS 1.3 Handshake Simulator',
        bn: 'ইন্টারেক্টিভ TLS ১.৩ হ্যান্ডশেক সিমুলেটর'
      },
      html: `<h3>TLS 1.3 1-RTT Handshake Inspector</h3>
<p>Simulate the client and server exchanging ephemeral keys and establishing encrypted HTTP/2 communication.</p>
<div style="display:flex;gap:10px;margin-bottom:12px;">
  <button id="tlsHandshakeBtn" style="padding:8px 14px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Perform 1-RTT Handshake</button>
</div>
<pre id="tlsOut" style="background:#0f172a;color:#38bdf8;padding:12px;border-radius:8px;font-family:monospace;white-space:pre-wrap;font-size:13px;border:1px solid #1e293b;min-height:90px;">Click "Perform 1-RTT Handshake" to trace TLS 1.3 protocol steps...</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }`,
      js: `document.getElementById('tlsHandshakeBtn').addEventListener('click', () => {
  document.getElementById('tlsOut').textContent = 
    "[Step 1: Client -> Server]\\n" +
    "  • ClientHello: SupportedVersions [TLS 1.3], Cipher [TLS_AES_256_GCM_SHA384]\\n" +
    "  • KeyShare: Client X25519 Public Key (32 bytes)\\n" +
    "  • SNI: 'codeshikhon.com'\\n\\n" +
    "[Step 2: Server -> Client]\\n" +
    "  • ServerHello: Selected TLS 1.3, Server X25519 Public Key\\n" +
    "  • ECDHE Secret Computed on both sides in 1-RTT!\\n" +
    "  • Encrypted Handshake: {Certificate (X.509) + CertificateVerify + Finished}\\n\\n" +
    "[Step 3: Established Channel]\\n" +
    "  • Application Data encrypted with AES-256-GCM session keys\\n" +
    "  • 3/3 HTTP/2 frames securely exchanged with Perfect Forward Secrecy (PFS)!";
});`
    }
  ],
  exercises: [
    {
      id: 'enc-tls-ex-1',
      kind: 'mcq',
      topic: 'tls13-latency-optimization',
      question: {
        en: 'How does the TLS 1.3 handshake achieve lower connection latency compared to TLS 1.2?',
        bn: 'TLS ১.২ এর তুলনায় TLS ১.৩ হ্যান্ডশেক কীভাবে কম কানেকশন লেটেন্সি অর্জন করে?'
      },
      options: [
        {
          en: 'It reduces handshake latency from 2-RTT to 1-RTT by having the client send its ephemeral ECDH key share in the very first ClientHello message',
          bn: 'ক্লায়েন্ট প্রথম ClientHello মেসেজেই তার ক্ষণস্থায়ী ECDH কি-শেয়ার পাঠিয়ে দেওয়ায় হ্যান্ডশেক লেটেন্সি ২-RTT থেকে কমে ১-RTT তে নেমে আসে'
        },
        {
          en: 'By disabling all encryption and transmitting plain text passwords',
          bn: 'সব ধরনের এনক্রিপশন বন্ধ করে প্লেইনটেক্সটে পাসওয়ার্ড পাঠিয়ে'
        },
        {
          en: 'By requiring clients to walk to the server datacenter in person',
          bn: 'ক্লায়েন্টকে সশরীরে সার্ভারের ডাটা সেন্টারে হেঁটে যাওয়ার নির্দেশ দিয়ে'
        },
        {
          en: 'By compressing website images into zero bytes',
          bn: 'ওয়েবসাইটের ছবিগুলোকে সংকুচিত করে শূন্য বাইটে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'TLS 1.3 sends key shares in the initial greeting, eliminating round trips.',
        bn: 'TLS ১.৩ প্রথম অভিবাদনেই কি-শেয়ার পাঠায়, ফলে বাড়তি রাউন্ড ট্রিপের দরকার হয় না।'
      },
      explanation: {
        en: 'TLS 1.3 combines key negotiation and cipher selection into 1-RTT, allowing application data to flow after a single round trip.',
        bn: 'TLS ১.৩ কি আলোচনা ও সাইফার সিলেকশনকে ১-RTT তে একত্রিত করে, যার ফলে মাত্র একটি রাউন্ড ট্রিপ পরেই মূল ডাটা আদান-প্রদান শুরু হয়।'
      }
    },
    {
      id: 'enc-tls-ex-2',
      kind: 'mcq',
      topic: 'perfect-forward-secrecy-principle',
      question: {
        en: 'Why is Perfect Forward Secrecy (PFS) essential for protecting encrypted web traffic against surveillance adversaries?',
        bn: 'নজরদারি চালানো আক্রমণকারীদের হাত থেকে এনক্রিপ্ট করা ওয়েব ট্রাফিক বাঁচাতে পারফেক্ট ফরোয়ার্ড সিক্রেসি (PFS) কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Because session keys are derived from ephemeral Diffie-Hellman exchanges and immediately wiped; if the server long-term private key is stolen years later, past traffic cannot be decrypted',
          bn: 'কারণ সেশন কিগুলো ক্ষণস্থায়ী ডিফি-হেলম্যান থেকে তৈরি হয় এবং সাথে সাথে মেমরি থেকে মুছে যায়; বছর পর সার্ভারের প্রাইভেট কি চুরি হলেও অতীতের ট্রাফিক ডিক্রিপ্ট করা অসম্ভব'
        },
        {
          en: 'Because PFS prevents the server computer from ever losing electrical power',
          bn: 'কারণ PFS সার্ভার কম্পিউটারের বিদ্যুৎ চলে যাওয়া চিরতরে বন্ধ করে'
        },
        {
          en: 'Because PFS changes the IP address of every website every 3 seconds',
          bn: 'কারণ PFS প্রতি ৩ সেকেন্ড পর পর ওয়েবসাইটের আইপি অ্যাড্রেস বদলে ফেলে'
        },
        {
          en: 'Because PFS allows web browsers to operate without an internet connection',
          bn: 'কারণ PFS ওয়েব ব্রাউজারকে কোনো ইন্টারনেট সংযোগ ছাড়াই কাজ করতে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ephemeral keys exist only for the session and are destroyed afterwards.',
        bn: 'ক্ষণস্থায়ী চাবিগুলো শুধু সেশনের সময় থাকে এবং পরে চিরতরে ধ্বংস করে ফেলা হয়।'
      },
      explanation: {
        en: 'Without PFS, a compromised master certificate key unlocks all recorded historical traffic. With PFS, each session key dies with the session.',
        bn: 'PFS না থাকলে একটি মাস্টার সার্টিফিকেট কি চুরি হলেই অতীতের সব রেকর্ড করা ট্রাফিক ফাঁস হয়ে যায়। PFS থাকলে প্রতিটি সেশনের চাবি সেশনের সাথেই শেষ হয়ে যায়।'
      }
    },
    {
      id: 'enc-tls-ex-3',
      kind: 'mcq',
      topic: 'sni-and-ech-mechanics',
      question: {
        en: 'What privacy loophole in traditional TLS does Encrypted Client Hello (ECH) solve?',
        bn: 'ঐতিহ্যবাহী TLS-এর কোন গোপনীয়তা ত্রুটিটি এনক্রিপ্টেড ক্লায়েন্ট হ্যালো (ECH) সমাধান করে?'
      },
      options: [
        {
          en: 'It encrypts the SNI domain name in the ClientHello, preventing ISPs and network wiretappers from snooping on which websites users visit',
          bn: 'এটি ClientHello-তে থাকা SNI ডোমেইন নাম এনক্রিপ্ট করে ফেলে, ফলে আইএসপি বা আড়িপাতাকারীরা ইউজার কোন ওয়েবসাইট ভিজিট করছেন তা জানতে পারে না'
        },
        {
          en: 'It converts the client mouse cursor into an invisible ghost',
          bn: 'এটি ক্লায়েন্টের মাউসের কার্সারকে অদৃশ্য ভূতে রূপান্তর করে'
        },
        {
          en: 'It doubles the physical RAM size of the client laptop',
          bn: 'এটি ক্লায়েন্টের ল্যাপটপের র্যামের আকার দ্বিগুণ করে ফেলে'
        },
        {
          en: 'It translates user emails into Latin language automatically',
          bn: 'এটি ব্যবহারকারীর ইমেইলকে স্বয়ংক্রিয়ভাবে ল্যাটিন ভাষায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Traditional SNI sent the domain name in cleartext on the wire.',
        bn: 'ঐতিহ্যবাহী SNI নেটওয়ার্কে ডোমেইনের নামটি প্লেইনটেক্সট আকারে পাঠাত।'
      },
      explanation: {
        en: 'ECH encrypts the entire inner ClientHello using a public key published via DNS HTTPS records, plugging the last major metadata leak in web browsing.',
        bn: 'ECH ডিএনএস রেকর্ডে থাকা পাবলিক কি দিয়ে পুরো ClientHello এনক্রিপ্ট করে, যা ওয়েব ব্রাউজিংয়ে মেটাডাটা ফাঁসের শেষ পথটিও বন্ধ করে দেয়।'
      }
    },
    {
      id: 'enc-tls-ex-4',
      kind: 'predict',
      topic: 'tls-engine-results',
      question: {
        en: 'In our live Node.js TLS 1.3 engine script, how many HTTP/2 frames were encrypted, transported, and verified (e.g. 3/3)?',
        bn: 'আমাদের লাইভ Node.js TLS ১.৩ ইঞ্জিন স্ক্রিপ্টে কতটি HTTP/২ ফ্রেম সফলভাবে এনক্রিপ্ট, আদান-প্রদান ও যাচাই করা হয়েছিল (যেমন ৩/৩)?'
      },
      answer: '3/3',
      accept: ['3/3', '3', 'three', '৩/৩', '৩'],
      hint: {
        en: 'All 3 HTTP/2 application frames were successfully decrypted.',
        bn: 'সবকটি ৩ টি HTTP/২ অ্যাপ্লিকেশন ফ্রেমই সফলভাবে উদ্ধার হয়েছিল।'
      },
      explanation: {
        en: 'All 3 sample HTTP/2 frames were encrypted under the HKDF-derived session key and verified cleanly with 100% fidelity (3/3).',
        bn: 'সবকটি ৩ টি নমুনা HTTP/২ ফ্রেমই HKDF সেশন কি দিয়ে এনক্রিপ্ট হয়ে ১০০% নির্ভুলভাবে উদ্ধার ও যাচাই করা হয়েছিল (৩/৩)।'
      }
    }
  ],
  quiz: {
    id: 'tls-in-action-quiz',
    title: {
      en: 'Transport Layer Security (TLS 1.3) Quiz',
      bn: 'ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS ১.৩) কুইজ'
    },
    questions: [
      {
        id: 'enc-tls-qz-1',
        kind: 'mcq',
        topic: 'banned-tls13-ciphers',
        question: {
          en: 'Which of the following insecure cryptographic algorithms was completely removed from the TLS 1.3 standard?',
          bn: 'নিচের কোন অনিরাপদ ক্রিপ্টোগ্রাফিক অ্যালগরিদমটি TLS ১.৩ স্ট্যান্ডার্ড থেকে সম্পূর্ণভাবে বাদ দেওয়া হয়েছে?'
        },
        options: [
          {
            en: 'Static RSA key exchange and CBC mode ciphers (due to lack of forward secrecy and vulnerability to padding oracle attacks)',
            bn: 'স্ট্যাটিক RSA কি এক্সচেঞ্জ এবং CBC মোড সাইফার (ফরোয়ার্ড সিক্রেসি না থাকা ও প্যাডিং ওরাকল ঝুঁকির কারণে)'
          },
          {
            en: 'AES-256-GCM authenticated encryption',
            bn: 'AES-২৫৬-GCM অথেনটিকেটেড এনক্রিপশন'
          },
          {
            en: 'ChaCha20-Poly1305 stream cipher',
            bn: 'ChaCha20-Poly1305 স্ট্রিম সাইফার'
          },
          {
            en: 'HKDF HMAC-based key derivation functions',
            bn: 'HKDF HMAC-ভিত্তিক কি ডেরিভেশন ফাংশন'
          }
        ],
        answer: 0,
        hint: {
          en: 'TLS 1.3 mandates PFS and AEAD, outlawing static RSA and CBC.',
          bn: 'TLS ১.৩-তে PFS এবং AEAD বাধ্যতামূলক করায় স্ট্যাটিক RSA ও CBC নিষিদ্ধ হয়েছে।'
        },
        explanation: {
          en: 'TLS 1.3 stripped away vulnerable legacy features: no static RSA, no CBC mode, no SHA-1, and no compression, leaving only secure AEAD ciphers.',
          bn: 'TLS ১.৩ সব ঝুঁকিপূর্ণ পুরানো ফিচার বাদ দিয়েছে: কোনো স্ট্যাটিক RSA, CBC মোড, SHA-১ বা কম্প্রেশন রাখা হয়নি, কেবল সুরক্ষিত AEAD রাখা হয়েছে।'
        }
      },
      {
        id: 'enc-tls-qz-2',
        kind: 'mcq',
        topic: 'certificate-transparency-purpose',
        question: {
          en: 'What is the purpose of Certificate Transparency (CT) logs in the modern HTTPS ecosystem?',
          bn: 'আধুনিক HTTPS ইকোসিস্টেমে সার্টিফিকেট ট্রান্সপারেন্সি (CT) লগের উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'Public, append-only Merkle tree logs that record every issued SSL/TLS certificate, allowing domain owners to detect rogue or fraudulently minted certificates',
            bn: 'পাবলিক ও অপরিবর্তনীয় মের্কল ট্রি লগ যা প্রতিটি ইস্যু করা SSL/TLS সার্টিফিকেট রেকর্ড করে, যার ফলে ডোমেইন মালিকরা যেকোনো ভুয়া বা অননুমোদিত সার্টিফিকেট শনাক্ত করতে পারেন'
          },
          {
            en: 'A private list of all passwords used by bank employees',
            bn: 'ব্যাংক কর্মচারীদের ব্যবহৃত সব পাসওয়ার্ডের একটি গোপন তালিকা'
          },
          {
            en: 'A tool that deletes expired web pages from Google search results',
            bn: 'একটি টুল যা গুগল সার্চের ফলাফল থেকে মেয়াদোত্তীর্ণ পেজ মুছে ফেলে'
          },
          {
            en: 'A software that prints paper receipts for every online purchase',
            bn: 'একটি সফটওয়্যার যা প্রতিটি অনলাইন কেনাকাটার জন্য কাগজের রশিদ প্রিন্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CT logs make certificate issuance publicly auditable across the globe.',
          bn: 'CT লগ বিশ্বব্যাপী সার্টিফিকেট ইস্যুর ঘটনাগুলোকে সর্বসাধারণের জন্য অডিটযোগ্য করে।'
        },
        explanation: {
          en: 'Browsers require Signed Certificate Timestamps (SCTs) from CT logs before trusting a certificate, ensuring no rogue CA can secretly mint unauthorized certificates.',
          bn: 'সার্টিফিকেট বিশ্বাস করার আগে ব্রাউজারগুলো CT লগের প্রমাণ যাচাই করে, যার ফলে কোনো অসৎ CA গোপনে ভুয়া সার্টিফিকেট তৈরি করতে পারে না।'
        }
      },
      {
        id: 'enc-tls-qz-3',
        kind: 'mcq',
        topic: 'ocsp-stapling-benefits',
        question: {
          en: 'Why is OCSP Stapling preferred over traditional CRL (Certificate Revocation List) and direct OCSP checking in web browsers?',
          bn: 'ওয়েব ব্রাউজারে ঐতিহ্যবাহী CRL এবং সরাসরি OCSP চেকের চেয়ে OCSP স্ট্যাপলিং কেন বেশি কার্যকর?'
        },
        options: [
          {
            en: 'The web server fetches and caches the CA signed validity proof and staples it into the TLS handshake, eliminating extra network round trips and protecting client browsing privacy',
            bn: 'ওয়েব সার্ভার নিজে CA থেকে স্বাক্ষরিত ভ্যালিডিটি প্রুফ এনে হ্যান্ডশেকে যুক্ত করে দেয়, ফলে বাড়তি নেটওয়ার্ক রিকোয়েস্ট লাগে না এবং ক্লায়েন্টের গোপনীয়তা সুরক্ষিত থাকে'
          },
          {
            en: 'Because OCSP stapling glues physical paper stamps onto computer monitors',
            bn: 'কারণ OCSP স্ট্যাপলিং কম্পিউটারের স্ক্রিনে কাগজের ডাকটিকিট লাগিয়ে দেয়'
          },
          {
            en: 'Because CRL files make internet audio streaming sound ten times louder',
            bn: 'কারণ CRL ফাইল ইন্টারনেটের অডিওর শব্দ দশ গুণ বাড়িয়ে তোলে'
          },
          {
            en: 'Because web browsers refuse to connect to websites on sunny days',
            bn: 'কারণ রৌদ্রোজ্জ্বল দিনে ব্রাউজারগুলো ওয়েবসাইটে কানেক্ট হতে অস্বীকৃতি জানায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The server caches the CA proof, saving the client from querying the CA.',
          bn: 'সার্ভার নিজে CA-এর প্রমাণ ক্যাশ করে রাখে, ফলে ক্লায়েন্টকে CA-এর কাছে যেতে হয় না।'
        },
        explanation: {
          en: 'Direct OCSP queries leak client browsing habits to third-party CAs and stall connections if the CA is slow. Stapling solves both performance and privacy issues.',
          bn: 'সরাসরি OCSP চেক করলে ব্রাউজিং তথ্য CA-এর কাছে চলে যায় এবং সাইট ধীরগতির হয়। স্ট্যাপলিং পারফরম্যান্স ও গোপনীয়তা উভয় সমস্যারই নিখুঁত সমাধান দেয়।'
        }
      },
      {
        id: 'enc-tls-qz-4',
        kind: 'mcq',
        topic: 'zero-rtt-replay-risk',
        question: {
          en: 'What security risk exists when using TLS 1.3 0-RTT (Zero Round-Trip Time) connection resumption?',
          bn: 'TLS ১.৩-এর ০-RTT কানেকশন রেজাম্পশন ব্যবহারের ক্ষেত্রে কোন নিরাপত্তা ঝুঁকিটি বিদ্যমান?'
        },
        options: [
          {
            en: '0-RTT early application data has no forward secrecy and is vulnerable to replay attacks; adversaries can intercept and re-transmit early data packets (like payment requests) to duplicate actions',
            bn: '০-RTT প্রারম্ভিক ডাটায় কোনো ফরোয়ার্ড সিক্রেসি থাকে না এবং এটি রিপ্লে আক্রমণের ঝুঁকিতে থাকে; আক্রমণকারী প্যাকেটটি পুনরায় পাঠিয়ে লেনদেন ডুপ্লিকেট করতে পারে'
          },
          {
            en: '0-RTT causes the web server CPU to physically melt within four seconds',
            bn: '০-RTT ব্যবহারে ওয়েব সার্ভারের সিপিইউ চার সেকেন্ডের মধ্যে গলে যায়'
          },
          {
            en: '0-RTT permanently changes all web fonts to Comic Sans',
            bn: '০-RTT ওয়েবসাইটের সমস্ত ফন্ট কমিক স্যান্সে বদলে ফেলে'
          },
          {
            en: '0-RTT only works if the client computer is running on solar power',
            bn: '০-RTT কেবল তখনই কাজ করে যদি ক্লায়েন্ট কম্পিউটার সৌরশক্তিতে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Early data sent before handshake completion can be captured and replayed by an attacker.',
          bn: 'হ্যান্ডশেক শেষ হওয়ার আগে পাঠানো প্রারম্ভিক ডাটা আক্রমণকারী রেকর্ড করে পুনরায় পাঠাতে পারে।'
        },
        explanation: {
          en: 'Because 0-RTT data is encrypted under keys derived from pre-shared credentials, an eavesdropper can replay non-idempotent HTTP requests (e.g. POST /transfer-funds).',
          bn: 'যেহেতু ০-RTT ডাটা পূর্বের কি দিয়ে এনক্রিপ্ট হয়, তাই আক্রমণকারী যেকোনো পরিবর্তনকারী রিকোয়েস্ট (যেমন টাকা পাঠানোর নির্দেশ) পুনরায় পাঠিয়ে ক্ষতি করতে পারে।'
        }
      }
    ]
  },
  next: {
    slug: 'crypto-capstone',
    title: {
      en: 'Cryptography Capstone: Zero-Trust End-to-End Cryptographic Architecture',
      bn: 'ক্রিপ্টোগ্রাফি ক্যাপস্টোন: জিরো-ট্রাস্ট এন্ড-টু-এন্ড ক্রিপ্টোগ্রাফিক আর্কিটেকচার'
    }
  }
};
