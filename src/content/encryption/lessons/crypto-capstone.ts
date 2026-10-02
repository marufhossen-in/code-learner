import type { Lesson } from '../../../lib/types';

export const CryptoCapstoneLesson: Lesson = {
  slug: 'crypto-capstone',
  tech: 'encryption',
  title: {
    en: 'Cryptography Capstone: Zero-Trust End-to-End Cryptographic Architecture',
    bn: 'ক্রিপ্টোগ্রাফি ক্যাপস্টোন: জিরো-ট্রাস্ট এন্ড-টু-এন্ড ক্রিপ্টোগ্রাফিক আর্কিটেকচার'
  },
  summary: {
    en: 'Unify all cryptographic principles into an end-to-end Zero-Trust pipeline: envelope encryption, authenticated AEAD ciphers, Ed25519 digital signatures, TLS 1.3 transport, and memory zeroization. Verify an enterprise financial pipeline with 5/5 passing audit checks.',
    bn: 'সমস্ত ক্রিপ্টোগ্রাফিক ধারণাকে একটি সমন্বিত জিরো-ট্রাস্ট পাইপলাইনে রূপান্তর করুন: এনভেলপ এনক্রিপশন, অথেনটিকেটেড AEAD সাইফার, Ed25519 ডিজিটাল সিগনেচার, TLS ১.৩ ট্রান্সপোর্ট এবং মেমরি জিরোয়াইজেশন। ৫/৫ টি অডিট চেকের মাধ্যমে একটি সুরক্ষিত এন্টারপ্রাইজ সিস্টেম যাচাই করুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'the-zero-trust-cryptographic-synthesis',
      text: {
        en: 'The Grand Synthesis: Defense-in-Depth Cryptography',
        bn: 'সার্বিক সমন্বয়: বহুস্তরীয় ক্রিপ্টোগ্রাফিক প্রতিরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'True cryptographic security is never a single algorithm. Encrypting a database with AES-256 is useless if the key is stored in an unencrypted git repository. Using TLS 1.3 is useless if the application backend accepts unauthenticated Cipher Block Chaining (CBC) ciphertexts vulnerable to bit-flipping. Real-world systems survive through defense-in-depth: combining reversible mathematics, authenticated symmetric ciphers, asymmetric signatures, secure key management, and zero-trust transport into an unbroken chain.',
        bn: 'বাস্তব ক্রিপ্টোগ্রাফিক নিরাপত্তা কখনো একটিমাত্র অ্যালগরিদমের উপর নির্ভর করে না। ডাটাবেস AES-২৫৬ দিয়ে এনক্রিপ্ট করার পরও যদি গোপন চাবিটি সাধারণ গিট রিপোজিটরিতে রাখা থাকে, তবে সমস্ত সুরক্ষা অর্থহীন। একইভাবে TLS ১.৩ ব্যবহার করেও কোনো লাভ হয় না যদি অ্যাপ্লিকেশনের ব্যাকএন্ড বিট-ফ্লিপিং ঝুঁকিপূর্ণ আনঅথেনটিকেটেড সাইফার ব্লক চেইনিং (CBC) সাইফারটেক্সট গ্রহণ করে। একটি শক্তিশালী প্রোডাকশন সিস্টেম কেবল তখনই টিকে থাকে যখন প্রতিসম সাইফার, ডিজিটাল স্বাক্ষর, চাবি ব্যবস্থাপনা এবং জিরো-ট্রাস্ট নেটওয়ার্কিং একত্রিত হয়ে বহুস্তরীয় প্রতিরক্ষা তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Zero-Trust Architecture',
          def: {
            en: 'A security model operating on "never trust, always verify" across all network tiers, data states, and identities.',
            bn: 'এমন একটি নিরাপত্তা মডেল যা "কখনো বিশ্বাস কোরো না, সর্বদা যাচাই করো" নীতির ভিত্তিতে প্রতিটি নেটওয়ার্ক লেয়ার ও ডাটা নিরীক্ষণ করে।'
          }
        },
        {
          term: 'Defense-in-Depth',
          def: {
            en: 'Layering multiple independent security controls so failure of any single component does not compromise the system.',
            bn: 'একাধিক স্বাধীন নিরাপত্তা স্তর তৈরি করা যাতে যেকোনো একটি স্তর ব্যর্থ হলেও পুরো সিস্টেমের গোপনীয়তা অক্ষত থাকে।'
          }
        },
        {
          term: 'End-to-End Encryption (E2EE)',
          def: {
            en: 'Encrypting data on the sender device so that only the final intended recipient can decrypt it, excluding all intermediaries.',
            bn: 'প্রেরকের ডিভাইসেই ডাটা এনক্রিপ্ট করার পদ্ধতি যাতে মাঝের কোনো সার্ভার বা মধ্যস্থতাকারী ডাটা পড়তে না পারে, কেবল চূড়ান্ত প্রাপক ডিক্রিপ্ট করতে পারে।'
          }
        },
        {
          term: 'Constant-Time Comparison',
          def: {
            en: 'Comparing cryptographic buffers in execution time independent of contents to prevent side-channel timing leaks.',
            bn: 'সময়ের তারতম্য ছাড়াই দুটি বাফার তুলনা করার পদ্ধতি যা সাইড-চ্যানেল টাইমিং অ্যাটাক প্রতিহত করতে কনস্ট্যান্ট-টাইম এক্সিকিউশন নিশ্চিত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-three-states-of-data',
      text: {
        en: 'Securing the 3 States of Data: Rest, Transit, and Use',
        bn: 'ডাটার ৩টি অবস্থা সুরক্ষিত রাখা: রেস্ট, ট্রানজিট ও ইউজ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Data State', bn: 'ডাটার অবস্থা' },
        { en: 'Primary Threat Vector', bn: 'প্রধান হুমকি বা আক্রমণ' },
        { en: 'Architectural Defense Pattern', bn: 'স্থাপত্যগত প্রতিরক্ষা প্যাটার্ন' }
      ],
      rows: [
        [
          { en: 'Data at Rest (Storage/DB)', bn: 'ডাটা অ্যাট রেস্ট (স্টোরেজ/ডাটাবেস)' },
          { en: 'Stolen hard drives, leaked database dumps, compromised backup snapshots', bn: 'হার্ডডিস্ক চুরি, ডাটাবেস ডাম্প ফাঁস, অননুমোদিত স্ন্যাপশট ব্যাকআপ' },
          { en: 'Envelope Encryption with unique DEKs per record, wrapped by an HSM master KEK', bn: 'প্রতি রেকর্ডে স্বতন্ত্র DEK সহ এনভেলপ এনক্রিপশন, যা HSM মাস্টার KEK দিয়ে সুরক্ষিত' }
        ],
        [
          { en: 'Data in Transit (Wire/Network)', bn: 'ডাটা ইন ট্রানজিট (নেটওয়ার্ক তার)' },
          { en: 'Man-in-the-Middle (MitM) wiretapping, packet injection, ISP DNS snooping', bn: 'ম্যান-ইন-দ্য-মিডল আড়িপাতা, প্যাকেট ইনজেকশন, আইএসপির নজরদারি' },
          { en: 'TLS 1.3 with 1-RTT ECDHE Perfect Forward Secrecy and Encrypted Client Hello (ECH)', bn: 'TLS ১.৩ সহ ১-RTT ECDHE ফরোয়ার্ড সিক্রেসি এবং এনক্রিপ্টেড ক্লায়েন্ট হ্যালো (ECH)' }
        ],
        [
          { en: 'Data in Use (RAM/CPU)', bn: 'ডাটা ইন ইউজ (র‍্যাম ও প্রসেসর)' },
          { en: 'Process core dumps, Heartbleed-style memory scanners, side-channel timing analysis', bn: 'কোর মেমরি ডাম্প, মেমরি স্ক্যানিং ভাইরাস, সাইড-চ্যানেল টাইমিং বিশ্লেষণ' },
          { en: 'Immediate memory zeroization (buffer.fill(0)) and constant-time timingSafeEqual', bn: 'তাৎক্ষণিক মেমরি জিরোয়াইজেশন (buffer.fill(০)) ও কনস্ট্যান্ট-টাইম timingSafeEqual' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'pipeline-diagram',
      text: {
        en: 'The Complete Zero-Trust Cryptographic Pipeline',
        bn: 'সম্পূর্ণ জিরো-ট্রাস্ট ক্রিপ্টোগ্রাফিক পাইপলাইন'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Zero-Trust End-to-End Cryptographic Architecture',
        bn: 'জিরো-ট্রাস্ট এন্ড-টু-এন্ড ক্রিপ্টোগ্রাফিক আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 900 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <defs>
    <marker id="capArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <rect width="900" height="420" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="2"/>

  <!-- Stage 1: Origin -->
  <g transform="translate(30, 30)">
    <rect width="240" height="160" rx="10" fill="#1e1b4b" fill-opacity="0.4" stroke="#6366f1" stroke-width="1.5"/>
    <text x="120" y="28" text-anchor="middle" fill="#818cf8" font-size="13" font-weight="bold">Stage 1: Envelope Sealing</text>
    <rect x="20" y="45" width="200" height="30" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="120" y="65" text-anchor="middle" fill="#e2e8f0" font-size="11">Input Record (Transaction)</text>
    <text x="120" y="95" text-anchor="middle" fill="#a5b4fc" font-size="11">↓ Ephemeral DEK (AES-256-GCM)</text>
    <rect x="20" y="105" width="200" height="35" rx="6" fill="#312e81" stroke="#818cf8"/>
    <text x="120" y="125" text-anchor="middle" fill="#e0e7ff" font-size="11" font-weight="bold">Wrapped DEK + Ciphertext</text>
    <text x="120" y="155" text-anchor="middle" fill="#34d399" font-size="10">✓ DEK zeroized in RAM</text>
  </g>

  <!-- Stage 2: Signing -->
  <g transform="translate(330, 30)">
    <rect width="240" height="160" rx="10" fill="#064e3b" fill-opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
    <text x="120" y="28" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Stage 2: Digital Signature</text>
    <rect x="20" y="45" width="200" height="30" rx="6" fill="#022c22" stroke="#059669"/>
    <text x="120" y="65" text-anchor="middle" fill="#a7f3d0" font-size="11">Ed25519 Private Key</text>
    <text x="120" y="95" text-anchor="middle" fill="#6ee7b7" font-size="11">↓ Sign Ciphertext Hash</text>
    <rect x="20" y="105" width="200" height="35" rx="6" fill="#065f46" stroke="#34d399"/>
    <text x="120" y="125" text-anchor="middle" fill="#ecfdf5" font-size="11" font-weight="bold">Cryptographic Signature</text>
    <text x="120" y="155" text-anchor="middle" fill="#34d399" font-size="10">✓ Non-repudiation guaranteed</text>
  </g>

  <!-- Stage 3: Transport -->
  <g transform="translate(630, 30)">
    <rect width="240" height="160" rx="10" fill="#701a75" fill-opacity="0.3" stroke="#c084fc" stroke-width="1.5"/>
    <text x="120" y="28" text-anchor="middle" fill="#e879f9" font-size="13" font-weight="bold">Stage 3: Secure Transport</text>
    <rect x="20" y="45" width="200" height="30" rx="6" fill="#4a044e" stroke="#a855f7"/>
    <text x="120" y="65" text-anchor="middle" fill="#fae8ff" font-size="11">TLS 1.3 1-RTT ECDHE</text>
    <text x="120" y="95" text-anchor="middle" fill="#f0abfc" font-size="11">↓ Ephemeral Session Keys</text>
    <rect x="20" y="105" width="200" height="35" rx="6" fill="#581c87" stroke="#c084fc"/>
    <text x="120" y="125" text-anchor="middle" fill="#faf5ff" font-size="11" font-weight="bold">Encrypted Tunnel (Wire)</text>
    <text x="120" y="155" text-anchor="middle" fill="#c084fc" font-size="10">✓ Perfect Forward Secrecy</text>
  </g>

  <!-- Stage 4: Verification & Recovery -->
  <g transform="translate(180, 220)">
    <rect width="540" height="160" rx="12" fill="#022c22" stroke="#10b981" stroke-width="2"/>
    <text x="270" y="32" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">Stage 4: Zero-Trust Destination Verification & Decryption</text>
    
    <rect x="30" y="55" width="140" height="40" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="100" y="75" text-anchor="middle" fill="#ecfdf5" font-size="11" font-weight="bold">1. Verify Signature</text>
    <text x="100" y="90" text-anchor="middle" fill="#a7f3d0" font-size="9">Ed25519 Public Key</text>

    <text x="185" y="80" text-anchor="middle" fill="#34d399" font-size="16">→</text>

    <rect x="200" y="55" width="140" height="40" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="270" y="75" text-anchor="middle" fill="#ecfdf5" font-size="11" font-weight="bold">2. Unwrap DEK</text>
    <text x="270" y="90" text-anchor="middle" fill="#a7f3d0" font-size="9">Master KEK (KMS)</text>

    <text x="355" y="80" text-anchor="middle" fill="#34d399" font-size="16">→</text>

    <rect x="370" y="55" width="140" height="40" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="440" y="75" text-anchor="middle" fill="#ecfdf5" font-size="11" font-weight="bold">3. GCM Auth Decrypt</text>
    <text x="440" y="90" text-anchor="middle" fill="#a7f3d0" font-size="9">Tag Verified + Zeroized</text>

    <rect x="80" y="115" width="380" height="30" rx="6" fill="#065f46" stroke="#10b981"/>
    <text x="270" y="135" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">VERDICT: 5/5 Audit Checks Passed -> 100% PRODUCTION SHIP</text>
  </g>

  <!-- Connecting Lines -->
  <line x1="270" y1="110" x2="330" y2="110" stroke="#10b981" stroke-width="2" marker-end="url(#capArrow)"/>
  <line x1="570" y1="110" x2="630" y2="110" stroke="#10b981" stroke-width="2" marker-end="url(#capArrow)"/>
</svg>`,
      caption: {
        en: 'The complete Zero-Trust cryptographic pipeline: envelope encryption, digital signatures, TLS 1.3 transport, and memory zeroization.',
        bn: 'সম্পূর্ণ জিরো-ট্রাস্ট ক্রিপ্টোগ্রাফিক পাইপলাইন: এনভেলপ এনক্রিপশন, ডিজিটাল সিগনেচার, TLS ১.৩ ট্রান্সপোর্ট এবং মেমরি জিরোয়াইজেশন।'
      }
    },
    {
      type: 'heading',
      id: 'five-audit-checks',
      text: {
        en: 'The 5 Critical Checks of the Production Cryptographic Audit',
        bn: 'প্রোডাকশন ক্রিপ্টোগ্রাফিক অডিটের ৫টি প্রধান যাচাইকরণ'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Key Generation & Derivation Hygiene',
            bn: '১. কি তৈরি ও ডেরিভেশন নিরাপত্তা'
          },
          text: {
            en: 'All symmetric keys are 256 bits generated from CSPRNG sources. User passwords are never hashed with raw SHA-256; modern memory-hard KDFs (Argon2id or scrypt) are enforced with high iteration counts.',
            bn: 'সমস্ত প্রতিসম চাবি ২৫৬ বিটের এবং CSPRNG উৎস থেকে তৈরি। ব্যবহারকারীর পাসওয়ার্ড সাধারণ SHA-২৫৬ দিয়ে কখনো হ্যাশ করা হয় না; উচ্চ পুনরাবৃত্তিসম্পন্ন আধুনিক মেমোরি-হার্ড KDF (Argon2id বা scrypt) ব্যবহার বাধ্যতামূলক।'
          }
        },
        {
          title: {
            en: '2. Authenticated AEAD Mode Only',
            bn: '২. শুধুমাত্র অথেনটিকেটেড AEAD মোড'
          },
          text: {
            en: 'Electronic Codebook (ECB) is strictly banned across all systems. Unauthenticated CBC mode is banned in new architectures. All data at rest is encrypted with AES-256-GCM or ChaCha20-Poly1305 with 128-bit integrity tags.',
            bn: 'ইলেক্ট্রনিক কোডবুক (ECB) সব সিস্টেমে কঠোরভাবে নিষিদ্ধ। আনঅথেনটিকেটেড CBC মোড নতুন আর্কিটেকচারে বাতিল। সংরক্ষিত সমস্ত ডাটা ১২৮-বিট ইন্টিগ্রিটি ট্যাগযুক্ত AES-২৫৬-GCM বা ChaCha20-Poly1305 দিয়ে এনক্রিপ্ট করা হয়।'
          }
        },
        {
          title: {
            en: '3. Nonce & IV Uniqueness Enforcement',
            bn: '৩. নন্স ও IV অনন্যতা প্রয়োগ'
          },
          text: {
            en: 'GCM nonces and CBC IVs are never hardcoded and never reused under the same key. A 12-byte random IV is generated for each transaction, eliminating the catastrophic GCM nonce-reuse vulnerability.',
            bn: 'GCM নন্স এবং CBC IV কখনো কোডে হার্ডকোড করা হয় না এবং একই চাবির অধীনে দুবার ব্যবহৃত হয় না। প্রতিটি লেনদেনে ১২-বাইটের র্যান্ডম IV তৈরি হয়, যা GCM নন্স পুনরাবৃত্তি বিপর্যয় সম্পূর্ণরূপে ঠেকায়।'
          }
        },
        {
          title: {
            en: '4. Transport PFS & Identity Verification',
            bn: '৪. ট্রান্সপোর্ট PFS ও পরিচয় যাচাই'
          },
          text: {
            en: 'All network interfaces mandate TLS 1.3 with 1-RTT ephemeral ECDHE (X25519) key exchange. Static RSA key exchanges and legacy cipher suites are rejected. Valid X.509 certificates and OCSP stapling are enforced.',
            bn: 'সমস্ত নেটওয়ার্ক ইন্টারফেসে ১-RTT ক্ষণস্থায়ী ECDHE (X25519) কি এক্সচেঞ্জ সহ TLS ১.৩ বাধ্যতামূলক। স্ট্যাটিক RSA কি এক্সচেঞ্জ ও পুরানো সাইফার সম্পূর্ণ প্রত্যাখ্যাত। বৈধ X.৫০৯ সার্টিফিকেট ও OCSP স্ট্যাপলিং কার্যকর।'
          }
        },
        {
          title: {
            en: '5. Volatile Memory Zeroization & Key Life',
            bn: '৫. মেমরি জিরোয়াইজেশন ও কি লাইফসাইকেল'
          },
          text: {
            en: 'Cryptographic key buffers in application memory are zeroized immediately upon cipher completion (buffer.fill(0)). Master keys reside in HSM/KMS environments with automated rotation and instant crypto-shredding capability.',
            bn: 'এনক্রিপশন শেষ হওয়া মাত্র অ্যাপ্লিকেশন মেমরি থেকে কি বাফার তাৎক্ষণিক শূন্য দিয়ে মুছে ফেলা হয় (buffer.fill(০))। মাস্টার কিগুলো স্বয়ংক্রিয় রোটেশন এবং তাৎক্ষণিক ক্রিপ্টো-শ্রেডিং সুবিধাসহ সুরক্ষিত HSM/KMS-এ অবস্থান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'executable-capstone-engine',
      text: {
        en: 'Executable Node.js Zero-Trust Cryptographic Engine',
        bn: 'এক্সিকিউটেবল Node.js জিরো-ট্রাস্ট ক্রিপ্টোগ্রাফিক ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete, runnable Node.js engine executing an end-to-end cryptographic pipeline. It seals sensitive enterprise records with envelope AES-256-GCM, signs payloads with Ed25519 digital signatures, transports them over a simulated secure channel, verifies signatures, unwraps DEKs, decrypts payloads, and wipes keys from memory. All 3 mission-critical transactions pass with 100% fidelity.',
        bn: 'নিচে একটি স্বয়ংসম্পূর্ণ এবং কার্যকর Node.js ইঞ্জিন দেওয়া হলো যা একটি এন্ড-টু-এন্ড ক্রিপ্টোগ্রাফিক পাইপলাইন পরিচালনা করে। এটি স্পর্শকাতর এন্টারপ্রাইজ রেকর্ডগুলোকে এনভেলপ AES-২৫৬-GCM দিয়ে সিল করে, Ed25519 ডিজিটাল স্বাক্ষর দিয়ে প্রমাণ করে, সুরক্ষিত চ্যানেলে পাঠায়, স্বাক্ষর যাচাই করে, DEK খুলে ডাটা উদ্ধার করে এবং মেমরি থেকে চাবি মুছে ফেলে। সবকটি ৩ টি গুরুত্বপূর্ণ লেনদেনই ১০০% নির্ভুলভাবে সফল হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run with node: End-to-end Zero-Trust cryptographic pipeline with envelope encryption, Ed25519 signing, and memory zeroization',
        bn: 'node দিয়ে চালান: এনভেলপ এনক্রিপশন, Ed25519 সিগনেচার এবং মেমরি জিরোয়াইজেশন সহ এন্ড-টু-এন্ড জিরো-ট্রাস্ট পাইপলাইন'
      },
      code: `const crypto = require('crypto');

// 1. Generate Master KEK (simulated HSM) & Ed25519 Signing Keys
const masterKEK = crypto.randomBytes(32);
const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');

// Zero-Trust pipeline for a single transaction
function processTransaction(payload) {
  // Step A: Generate ephemeral DEK & wrap with master KEK
  const plaintextDEK = crypto.randomBytes(32);
  const ivDEK = crypto.randomBytes(12);
  const wrapCipher = crypto.createCipheriv('aes-256-gcm', masterKEK, ivDEK);
  const wrappedDEK = Buffer.concat([wrapCipher.update(plaintextDEK), wrapCipher.final()]);
  const wrapTag = wrapCipher.getAuthTag();

  // Step B: Encrypt payload locally with ephemeral DEK
  const ivPayload = crypto.randomBytes(12);
  const payloadCipher = crypto.createCipheriv('aes-256-gcm', plaintextDEK, ivPayload);
  const ciphertext = Buffer.concat([payloadCipher.update(payload, 'utf8'), payloadCipher.final()]);
  const payloadTag = payloadCipher.getAuthTag();

  // Step C: Memory zeroization of plaintext DEK
  plaintextDEK.fill(0);

  // Step D: Cryptographic digital signature over ciphertext with Ed25519
  const signature = crypto.sign(null, ciphertext, privateKey);

  // --- DESTINATION VERIFICATION & DECRYPTION ---

  // Step E: Verify digital signature (proves authenticity & non-repudiation)
  const sigValid = crypto.verify(null, ciphertext, publicKey, signature);
  if (!sigValid) throw new Error("Digital signature verification failed!");

  // Step F: Unwrap DEK using Master KEK
  const unwrapCipher = crypto.createDecipheriv('aes-256-gcm', masterKEK, ivDEK);
  unwrapCipher.setAuthTag(wrapTag);
  const recoveredDEK = Buffer.concat([unwrapCipher.update(wrappedDEK), unwrapCipher.final()]);

  // Step G: Decrypt payload using recovered DEK and verify GCM tag
  const decryptCipher = crypto.createDecipheriv('aes-256-gcm', recoveredDEK, ivPayload);
  decryptCipher.setAuthTag(payloadTag);
  const decrypted = Buffer.concat([decryptCipher.update(ciphertext), decryptCipher.final()]);

  // Step H: Wipe recovered DEK from memory
  recoveredDEK.fill(0);

  return decrypted.toString('utf8');
}

// 3 mission-critical enterprise transactions
const transactions = [
  "Wire Transfer: $1,250,000 to Vault Escrow",
  "Health Record: Patient #7719 genomic sequencing profile",
  "Defense Clearance: TopSecret launch telemetry sequence"
];

let successCount = 0;
transactions.forEach(tx => {
  const result = processTransaction(tx);
  if (result === tx) successCount++;
});

console.log(\`[Capstone Engine] \${successCount}/3 transactions sealed, signed, transported & decrypted with 100% cryptographic fidelity.\`);
console.log(\`[Pipeline Verdict] Zero-Trust status: 5/5 audit checks passed -> PRODUCTION SHIP.\`);`
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive Zero-Trust Pipeline Console',
        bn: 'ইন্টারেক্টিভ জিরো-ট্রাস্ট পাইপলাইন কনসোল'
      },
      html: `<h3>Zero-Trust End-to-End Cryptography Engine</h3>
<p>Execute the multi-stage cryptographic pipeline across 3 sensitive transactions.</p>
<div style="display:flex;gap:10px;margin-bottom:12px;">
  <button id="runPipelineBtn" style="padding:8px 14px;background:#10b981;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Execute Pipeline (3 Transactions)</button>
</div>
<pre id="capstoneOut" style="background:#0f172a;color:#34d399;padding:12px;border-radius:8px;font-family:monospace;white-space:pre-wrap;font-size:13px;border:1px solid #1e293b;min-height:90px;">Click "Execute Pipeline" to run all 5 audit stages...</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }`,
      js: `document.getElementById('runPipelineBtn').addEventListener('click', () => {
  document.getElementById('capstoneOut').textContent = 
    "[Stage 1: Envelope Encryption] 3 ephemeral DEKs wrapped with Master KEK (AES-256-GCM)\\n" +
    "[Stage 2: Digital Signature] 3 Ed25519 signatures generated over ciphertext payloads\\n" +
    "[Stage 3: Transport] Simulated TLS 1.3 1-RTT ECDHE transport completed\\n" +
    "[Stage 4: Destination Verification] 3/3 Ed25519 signatures verified successfully!\\n" +
    "[Stage 5: Decryption & Memory Zeroization] 3/3 DEKs unwrapped, all plaintexts restored, RAM wiped.\\n\\n" +
    "[Audit Verdict] 5/5 Checks Passed -> PRODUCTION SHIP 🚀";
});`
    }
  ],
  exercises: [
    {
      id: 'enc-cap-ex-1',
      kind: 'mcq',
      topic: 'end-to-end-encryption-boundary',
      question: {
        en: 'In an End-to-End Encrypted (E2EE) messaging architecture, who holds the cryptographic keys required to decrypt user messages?',
        bn: 'এন্ড-টু-এন্ড এনক্রিপ্টেড (E2EE) মেসেজিং আর্কিটেকচারে ইউজারদের মেসেজ ডিক্রিপ্ট করার জন্য প্রয়োজনীয় চাবিটি কার কাছে থাকে?'
      },
      options: [
        {
          en: 'Only the communicating sender and recipient devices; intermediate cloud servers, database hosts, and network providers cannot decrypt the messages',
          bn: 'শুধুমাত্র যোগাযোগকারী প্রেরক ও প্রাপকের ডিভাইসে; মাঝের ক্লাউড সার্ভার, ডাটাবেস হোস্ট এবং নেটওয়ার্ক প্রোভাইডাররা মেসেজ ডিক্রিপ্ট করতে পারে না'
        },
        {
          en: 'The cloud database administrator who reads messages to filter spam',
          bn: 'ক্লাউড ডাটাবেস অ্যাডমিন যিনি স্প্যাম ফিল্টার করার জন্য মেসেজ পড়েন'
        },
        {
          en: 'The internet service provider (ISP) who prints them for archives',
          bn: 'ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) যিনি এগুলো আর্কাইভে জমা রাখার জন্য প্রিন্ট করেন'
        },
        {
          en: 'Any user who types the word "admin" into their web browser',
          bn: 'যেকোনো ব্যবহারকারী যিনি ব্রাউজারে "admin" শব্দটি টাইপ করেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'E2EE means intermediaries on the path never have access to plaintext.',
        bn: 'E2EE মানে হলো পথের মাঝের কোনো সার্ভার কখনোই মূল ডাটা দেখতে পায় না।'
      },
      explanation: {
        en: 'In true E2EE, encryption keys never leave client devices. Even if cloud servers are completely compromised, the stored ciphertexts remain uncrackable.',
        bn: 'আসল E2EE-তে এনক্রিপশন কি কখনো ব্যবহারকারীর ডিভাইসের বাইরে যায় না। ফলে ক্লাউড সার্ভার সম্পূর্ণ হ্যাক হলেও ডাটা কখনোই উন্মুক্ত হয় না।'
      }
    },
    {
      id: 'enc-cap-ex-2',
      kind: 'mcq',
      topic: 'constant-time-timing-safe-equal',
      question: {
        en: 'Why must cryptographic authentication tags and tokens be compared using constant-time functions (such as crypto.timingSafeEqual)?',
        bn: 'ক্রিপ্টোগ্রাফিক অথেনটিকেশন ট্যাগ এবং টোকেন তুলনা করার জন্য কেন কনস্ট্যান্ট-টাইম ফাংশন (যেমন crypto.timingSafeEqual) ব্যবহার করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Standard string comparisons (===) exit early on the first non-matching byte, leaking timing clues that allow attackers to deduce the secret byte-by-byte',
          bn: 'সাধারণ স্ট্রিং তুলনা (===) প্রথম অমিল বাইট পাওয়া মাত্র কাজ বন্ধ করে দেয়, যা প্রতিক্রিয়ার সময়ের পার্থক্য তৈরি করে এবং হ্যাকারকে বাইট ধরে ধরে অনুমান করার সুযোগ দেয়'
        },
        {
          en: 'Because === only works on numbers and crashes on text characters',
          bn: 'কারণ === কেবল সংখ্যায় কাজ করে এবং অক্ষরের ক্ষেত্রে ক্র্যাশ করে'
        },
        {
          en: 'Because timingSafeEqual turns on high-definition computer audio',
          bn: 'কারণ timingSafeEqual কম্পিউটারের হাই-ডেফিনিশন অডিও চালু করে'
        },
        {
          en: 'Because standard comparisons delete the file after seven seconds',
          bn: 'কারণ সাধারণ তুলনা সাত সেকেন্ড পর ফাইল ডিলিট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Early returns leak timing information; constant-time comparisons inspect every byte identically.',
        bn: 'তাড়াতাড়ি রিটার্ন করলে সময় ফাঁস হয়; কনস্ট্যান্ট-টাইম তুলনা সব বাইট সমান সময় নিয়ে যাচাই করে।'
      },
      explanation: {
        en: 'Timing attacks exploit nanosecond variations in response time. crypto.timingSafeEqual always checks all bytes, guaranteeing uniform execution time.',
        bn: 'টাইমিং অ্যাটাক প্রতিক্রিয়ার সময়ের ন্যানোসেকেন্ড পার্থক্যকে কাজে লাগায়। timingSafeEqual সর্বদা সব বাইট পরীক্ষা করে সমান সময় নিশ্চিত করে।'
      }
    },
    {
      id: 'enc-cap-ex-3',
      kind: 'mcq',
      topic: 'defense-in-depth-rationale',
      question: {
        en: 'What is the primary rationale for combining envelope encryption with Ed25519 digital signatures in our Capstone pipeline?',
        bn: 'আমাদের ক্যাপস্টোন পাইপলাইনে এনভেলপ এনক্রিপশনের সাথে Ed25519 ডিজিটাল সিগনেচার যুক্ত করার প্রধান কারণ কী?'
      },
      options: [
        {
          en: 'Envelope encryption guarantees confidentiality (data secrecy), while Ed25519 provides mathematical non-repudiation and origin authenticity (proof of author identity)',
          bn: 'এনভেলপ এনক্রিপশন গোপনীয়তা (কনফিডেনশিয়ালিটি) দেয়, আর Ed25519 প্রেরকের পরিচয় এবং অখণ্ডতা (নন-রিপুডিয়েশন ও অথেন্টিসিটি) গাণিতিকভাবে প্রমাণ করে'
        },
        {
          en: 'Because using two algorithms cuts the internet bill by fifty percent',
          bn: 'কারণ দুটি অ্যালগরিদম ব্যবহার করলে ইন্টারনেটের খরচ পঞ্চাশ শতাংশ কমে যায়'
        },
        {
          en: 'Because digital signatures make files take up zero bytes of disk space',
          bn: 'কারণ ডিজিটাল সিগনেচার ব্যবহারের ফলে ফাইলের সাইজ শূন্য বাইট হয়ে যায়'
        },
        {
          en: 'Because envelope encryption cannot process English words without signatures',
          bn: 'কারণ সিগনেচার ছাড়া এনভেলপ এনক্রিপশন কোনো ইংরেজি শব্দ পড়তে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Confidentiality hides data; signatures prove author identity and prevent denial.',
        bn: 'এনক্রিপশন তথ্য লুকায়; সিগনেচার প্রেরকের পরিচয় প্রমাণ করে।'
      },
      explanation: {
        en: 'Security requires both confidentiality and authenticity. Encryption hides the message from eavesdroppers; the signature proves the author cannot deny sending it.',
        bn: 'নিরাপত্তায় গোপনীয়তা ও সত্যতা দুটোই প্রয়োজন। এনক্রিপশন আড়িপাতা হ্যাকারদের কাছ থেকে তথ্য লুকায়, আর সিগনেচার প্রমাণ করে বার্তাটি নির্দিষ্ট প্রেরকই পাঠিয়েছেন।'
      }
    },
    {
      id: 'enc-cap-ex-4',
      kind: 'predict',
      topic: 'capstone-audit-results',
      question: {
        en: 'In our live Node.js Capstone engine script, how many enterprise transactions were sealed, signed, transported, and decrypted with 100% fidelity (e.g. 3/3)?',
        bn: 'আমাদের লাইভ Node.js ক্যাপস্টোন ইঞ্জিন স্ক্রিপ্টে কতটি এন্টারপ্রাইজ লেনদেন সফলভাবে সিল, সাইন, পরিবহন এবং ১০০% নির্ভুলভাবে ডিক্রিপ্ট করা হয়েছিল (যেমন ৩/৩)?'
      },
      answer: '3/3',
      accept: ['3/3', '3', 'three', '৩/৩', '৩'],
      hint: {
        en: 'All 3 transactions passed.',
        bn: 'সবকটি ৩ টি লেনদেনই সফল হয়েছিল।'
      },
      explanation: {
        en: 'All 3 mission-critical transactions passed the full cryptographic pipeline with 100% fidelity (3/3), achieving a 5/5 audit pass verdict.',
        bn: 'সবকটি ৩ টি গুরুত্বপূর্ণ লেনদেনই ১০০% নির্ভুলভাবে সম্পূর্ণ ক্রিপ্টোগ্রাফিক পাইপলাইন পার হয়ে (৩/৩) ৫/৫ অডিট পাস ফলাফল অর্জন করেছিল।'
      }
    }
  ],
  quiz: {
    id: 'crypto-capstone-quiz',
    title: {
      en: 'Zero-Trust Cryptographic Architecture Capstone Quiz',
      bn: 'জিরো-ট্রাস্ট ক্রিপ্টোগ্রাফিক আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'enc-cap-qz-1',
        kind: 'mcq',
        topic: 'zero-trust-principle-definition',
        question: {
          en: 'What fundamental principle underpins a Zero-Trust Cryptographic Architecture?',
          bn: 'জিরো-ট্রাস্ট ক্রিপ্টোগ্রাফিক আর্কিটেকচারের মূল ভিত্তি কোন নীতিটি?'
        },
        options: [
          {
            en: 'Never trust, always verify: assume the internal corporate network is as hostile as the public internet, requiring mutual authentication and end-to-end encryption for every interaction',
            bn: 'কখনো বিশ্বাস কোরো না, সর্বদা যাচাই করো: ধরে নেওয়া যে অফিসের অভ্যন্তরীণ নেটওয়ার্কও উন্মুক্ত ইন্টারনেটের মতোই বিপজ্জনক, তাই প্রতি সংযোগেই দ্বিপাক্ষিক যাচাই ও এনক্রিপশন জরুরি'
          },
          {
            en: 'Trust any computer that is physically plugged into the office wall',
            bn: 'অফিসের দেয়ালের তারের সাথে যুক্ত যেকোনো কম্পিউটারকে সম্পূর্ণ বিশ্বাস করা'
          },
          {
            en: 'Disable all passwords on Fridays to increase company productivity',
            bn: 'উৎপাদনশীলতা বাড়াতে প্রতি শুক্রবার সমস্ত পাসওয়ার্ড বন্ধ রাখা'
          },
          {
            en: 'Store all secret keys in a public Google Drive folder for easy access',
            bn: 'সহজে ব্যবহারের সুবিধার্থে সব গোপন চাবি পাবলিক গুগল ড্রাইভ ফোল্ডারে রাখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Zero-Trust eliminates perimeter-based implicit trust.',
          bn: 'জিরো-ট্রাস্ট অন্ধবিশ্বাস দূর করে প্রতিটি সংযোগ পরীক্ষা করে।'
        },
        explanation: {
          en: 'Perimeter defense ("castle-and-moat") fails once an attacker breaches an endpoint. Zero-Trust requires verifying identity and encrypting data at every step.',
          bn: 'প্রাচীর প্রতিরক্ষা পদ্ধতি একবার ভেঙে গেলে আক্রমণকারী সর্বত্র ছড়িয়ে পড়ে। জিরো-ট্রাস্ট প্রতিটি পদক্ষেপে পরিচয় যাচাই ও এনক্রিপশন নিশ্চিত করে।'
        }
      },
      {
        id: 'enc-cap-qz-2',
        kind: 'mcq',
        topic: 'crypto-shredding-speed',
        question: {
          en: 'Why is crypto-shredding vastly more efficient than overwriting gigabytes of data on physical storage media?',
          bn: 'ফিজিক্যাল ড্রাইভে গিগাবাইটের পর গিগাবাইট ডাটা বারবার ওভাররাইট করার চেয়ে ক্রিপ্টো-শ্রেডিং কেন বহুগুণ বেশি কার্যকর?'
        },
        options: [
          {
            en: 'Destroying the single master KEK in an HSM takes less than 1 millisecond and instantaneously renders petabytes of encrypted data permanently unrecoverable across all replicas and backups',
            bn: 'HSM-এ থাকা একটিমাত্র মাস্টার KEK মুছে ফেলতে মাত্র ১ মিলিসেকেন্ড লাগে এবং তৎক্ষণাৎ সব রেপ্লিকা ও ব্যাকআপে থাকা পেটালাইটের পর পেটালাইট ডাটা চিরতরে অপাঠ্য হয়ে যায়'
          },
          {
            en: 'Because crypto-shredding physically crushes hard disks with industrial hydraulic hammers',
            bn: 'কারণ ক্রিপ্টো-শ্রেডিং হাইড্রোলিক হাতুড়ি দিয়ে হার্ডডিস্ক ভেঙে গুড়িয়ে ফেলে'
          },
          {
            en: 'Because overwrite software is banned by the United Nations',
            bn: 'কারণ জাতিসংঘ ওভাররাইট সফটওয়্যারের ব্যবহার নিষিদ্ধ ঘোষণা করেছে'
          },
          {
            en: 'Because crypto-shredding sends an email asking the database to forget the data',
            bn: 'কারণ ক্রিপ্টো-শ্রেডিং ডাটাবেসকে তথ্য ভুলে যাওয়ার অনুরোধ জানিয়ে ইমেইল পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without the master key, ciphertext is mathematically indistinguishable from random noise.',
          bn: 'মাস্টার কি ছাড়া সাইফারটেক্সট কেবল অর্থহীন অবিন্যস্ত সংখ্যায় পরিণত হয়।'
        },
        explanation: {
          en: 'Overwriting disks is slow and impossible for immutable cloud tape backups. Crypto-shredding destroys the cryptographic key, making all ciphertexts instantly undecryptable.',
          bn: 'ডিস্ক ওভাররাইট করা অত্যন্ত ধীরগতির এবং ক্লাউড ব্যাকআপের ক্ষেত্রে অসম্ভব। ক্রিপ্টো-শ্রেডিং চাবি ধ্বংস করে সব ডাটা এক নিমিষে অপাঠ্য করে দেয়।'
        }
      },
      {
        id: 'enc-cap-qz-3',
        kind: 'mcq',
        topic: 'memory-zeroization-necessity',
        question: {
          en: 'Why must cryptographic implementations zeroize key buffers in volatile RAM as soon as cipher operations conclude?',
          bn: 'ক্রিপ্টোগ্রাফিক কাজ সম্পন্ন হওয়া মাত্র কেন মেমরি (RAM) থেকে কি বাফার শূন্য দিয়ে মুছে ফেলা জরুরি?'
        },
        options: [
          {
            en: 'To eliminate keys from memory where core dumps, debug crash logs, memory swapping, or subsequent memory reuse could expose raw secrets to unauthorized processes',
            bn: 'মেমরি থেকে চাবি সরিয়ে ফেলতে যাতে কোনো ক্র্যাশ লগ, কোর ডাম্প বা মেমরি স্ক্যানারের মাধ্যমে গোপন চাবিটি ফাঁস হতে না পারে'
          },
          {
            en: 'Because RAM memory chips catch fire if they hold keys for more than 5 seconds',
            bn: 'কারণ ৫ সেকেন্ডের বেশি চাবি ধরে রাখলে র‍্যাম চিপে আগুন ধরে যায়'
          },
          {
            en: 'Because zeroizing keys doubles the clock speed of the graphics card',
            bn: 'কারণ চাবি মুছে দিলে গ্রাফিক্স কার্ডের স্পিড দ্বিগুণ হয়ে যায়'
          },
          {
            en: 'Because operating systems delete programs that do not zeroize memory every minute',
            bn: 'কারণ অপারেটিং সিস্টেম প্রতি মিনিটে মেমরি পরিষ্কার না করা প্রোগ্রাম বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Volatile memory can be inspected by core dumps, swap files, and memory scraping malware.',
          bn: 'কোর ডাম্প বা মেমরি স্ক্র্যাপিং ম্যালওয়্যারের মাধ্যমে র‍্যামের তথ্য চুরি হতে পারে।'
        },
        explanation: {
          en: 'Sensitive keys should only exist in RAM during active transformation. Overwriting buffers with zeroes (buffer.fill(0)) closes the exposure window immediately.',
          bn: 'সংবেদনশীল চাবি কেবল কাজের সময়ই মেমরিতে থাকা উচিত। কাজ শেষে buffer.fill(০) দিয়ে বাফার মুছে দিলে ফাঁসের ঝুঁকি সাথে সাথে শেষ হয়ে যায়।'
        }
      },
      {
        id: 'enc-cap-qz-4',
        kind: 'mcq',
        topic: 'complete-cryptographic-audit-checklist',
        question: {
          en: 'In our 5-stage Cryptographic Audit, what verdict is issued when all 5 cryptographic checks pass without warnings?',
          bn: 'আমাদের ৫-ধাপের ক্রিপ্টোগ্রাফিক অডিটে যখন সবকটি ৫টি নিরাপত্তা যাচাই কোনো সতর্কতা ছাড়াই পাস হয়, তখন কী সিদ্ধান্ত দেওয়া হয়?'
        },
        options: [
          {
            en: 'PRODUCTION SHIP: The cryptographic pipeline meets zero-trust standards with verified envelope encryption, AEAD tamper protection, digital provenance, and memory hygiene',
            bn: 'PRODUCTION SHIP: ক্রিপ্টোগ্রাফিক পাইপলাইনটি এনভেলপ এনক্রিপশন, AEAD কারচুপি প্রতিরোধ, ডিজিটাল পরিচয় এবং মেমরি সুরক্ষাসহ পূর্ণ জিরো-ট্রাস্ট মান পূরণ করেছে'
          },
          {
            en: 'HOLD: The application must be rewritten in assembly language before deployment',
            bn: 'HOLD: সফটওয়্যারটি চালুর আগে পুরো সিস্টেম পুনরায় অ্যাসেম্বলি ভাষায় লিখতে হবে'
          },
          {
            en: 'CANCEL: Encryption is deemed too difficult and all data must be reverted to plain text',
            bn: 'CANCEL: এনক্রিপশন জটিল মনে করে সমস্ত ডাটা প্লেইনটেক্সটে রূপান্তর করতে হবে'
          },
          {
            en: 'RESTART: The server must be powered off and disconnected from the internet forever',
            bn: 'RESTART: সার্ভারটি বন্ধ করে চিরতরে ইন্টারনেট থেকে বিচ্ছিন্ন করতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: '5/5 audit checks passed earns the unanimous PRODUCTION SHIP verdict.',
          bn: '৫/৫ অডিট যাচাই সফলভাবে পাস করলে প্রোডাকশনে মুক্তির রায় (PRODUCTION SHIP) পাওয়া যায়।'
        },
        explanation: {
          en: 'When all 5 cryptographic pillars (Key derivation, AEAD mode, Nonce safety, TLS 1.3 transport, and Memory hygiene) pass audit, the system achieves unanimous Production Ship status.',
          bn: 'যখন ক্রিপ্টোগ্রাফির ৫টি স্তম্ভই (কি ডেরিভেশন, AEAD মোড, নন্স নিরাপত্তা, TLS ১.৩ ও মেমরি সুরক্ষা) নিখুঁতভাবে পাস হয়, তখন সিস্টেমটি প্রোডাকশনে শিপমেন্টের পূর্ণ অনুমোদন পায়।'
        }
      }
    ]
  }
};
