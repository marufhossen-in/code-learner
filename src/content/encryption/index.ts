import type { Hub } from '../../lib/types';
import { MeetEncryptionLesson } from './lessons/meet-encryption';
import { SymmetricCryptoLesson } from './lessons/symmetric-crypto';
import { AsymmetricCryptoLesson } from './lessons/asymmetric-crypto';
import { KeyManagementLesson } from './lessons/key-management';
import { EncryptionModesLesson } from './lessons/encryption-modes';
import { PaddingIvLesson } from './lessons/padding-iv';
import { TlsInActionLesson } from './lessons/tls-in-action';
import { CryptoCapstoneLesson } from './lessons/crypto-capstone';

export const encryptionHub: Hub = {
  slug: 'encryption',
  name: 'Encryption',
  icon: '🔐',
  tagline: {
    en: 'Master applied cryptography: symmetric ciphers, public-key infrastructure, key management, block modes, and TLS 1.3.',
    bn: 'ব্যবহারিক ক্রিপ্টোগ্রাফি আয়ত্ত করুন: সিমেট্রিক সাইফার, পাবলিক-কি ইনফ্রাস্ট্রাকচার, চাবি ব্যবস্থাপনা, ব্লক মোড ও টিএলএস ১.৩।',
  },
  intro: {
    en: 'Cryptography forms the foundational mathematical substrate of modern digital trust and internet security. This hub teaches you the mechanics of confidentiality, data integrity, and authentication. You will explore symmetric block and stream ciphers (AES-GCM, ChaCha20-Poly1305), asymmetric cryptosystems (RSA, ECC, X25519), cryptographic key lifecycle management and envelope encryption, block cipher modes (why ECB fails and CBC leaks), padding oracle attacks, TLS 1.3 perfect forward secrecy handshakes, and enterprise defense verification.',
    bn: 'ক্রিপ্টোগ্রাফি হলো আধুনিক ডিজিটাল বিশ্বাস এবং ইন্টারনেট নিরাপত্তার মৌলিক গাণিতিক ভিত্তি। এই হাবে আপনি তথ্যের গোপনীয়তা, অখণ্ডতা এবং প্রমাণীকরণের অন্তর্নিহিত কৌশল শিখবেন। সিমেট্রিক ব্লক ও স্ট্রিম সাইফার (AES-GCM, ChaCha20-Poly1305), অ্যাসিমেট্রিক ক্রিপ্টোব্যবস্থা (RSA, ECC, X25519), এনভেলপ এনক্রিপশন ও চাবি ব্যবস্থাপনা, ব্লক সাইফার মোড (কেন ECB ব্যর্থ হয় ও CBC তথ্য ফাঁস করে), প্যাডিং ওরাকল আক্রমণ, টিএলএস ১.৩ এর নিখুঁত ফরওয়ার্ড সিকিউরিটি হ্যান্ডশেক এবং একটি সম্পূর্ণ এন্টারপ্রাইজ ক্রিপ্টোগ্রাফি নিরীক্ষা পরিচালনা করা শিখবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Cryptographic Foundations & Symmetric Ciphers (Lessons 1–2)',
        bn: 'ধাপ ১ — ক্রিপ্টোগ্রাফির ভিত্তি ও সিমেট্রিক সাইফার (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Meet Encryption: Core goals of confidentiality, integrity, and authenticity, plus Caesar to XOR ciphers',
          bn: 'ক্রিপ্টোগ্রাফি পরিচিতি: গোপনীয়তা, অখণ্ডতা ও সত্যতা যাচাইয়ের মূল লক্ষ্য এবং সিজার থেকে XOR সাইফার'
        },
        {
          en: 'Symmetric Cryptography: Modern Advanced Encryption Standard (AES) and ChaCha20 stream ciphers',
          bn: 'সিমেট্রিক ক্রিপ্টোগ্রাফি: আধুনিক অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ড (AES) এবং ChaCha20 স্ট্রিম সাইফার'
        },
        {
          en: 'Milestone: Encrypt and decrypt binary buffers using shared secret keys and authenticated AEAD ciphers',
          bn: 'মাইলফলক: শেয়ার্ড সিক্রেট কি এবং অথেনটিকেটেড AEAD সাইফার ব্যবহার করে বাইনারি বাফার এনক্রিপ্ট ও ডিক্রিপ্ট করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Public-Key Cryptography & Key Management (Lessons 3–4)',
        bn: 'ধাপ ২ — পাবলিক-কি ক্রিপ্টোগ্রাফি ও চাবি ব্যবস্থাপনা (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Asymmetric Cryptography: RSA prime factorization, Elliptic Curve Cryptography (ECC), and digital signatures',
          bn: 'অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি: আরএসএ (RSA), উপবৃত্তাকার কার্ভ ক্রিপ্টোগ্রাফি (ECC) এবং ডিজিটাল স্বাক্ষর'
        },
        {
          en: 'Key Management & KMS: Key derivation (PBKDF2/Argon2), envelope encryption (DEK/KEK), and rotation schedules',
          bn: 'চাবি ব্যবস্থাপনা ও KMS: কি ডেরিভেশন (PBKDF2/Argon2), এনভেলপ এনক্রিপশন (DEK/KEK) এবং চাবি পরিবর্তন'
        },
        {
          en: 'Milestone: Implement hybrid encryption and establish automated 90-day cryptographic key rotation',
          bn: 'মাইলফলক: হাইব্রিড এনক্রিপশন বাস্তবায়ন এবং স্বয়ংক্রিয় ৯০ দিনের ক্রিপ্টোগ্রাফিক কি রোটেশন চালু করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Cipher Modes & Padding Oracle Exploitation (Lessons 5–6)',
        bn: 'ধাপ ৩ — সাইফার মোড ও প্যাডিং ওরাকল আক্রমণ (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Block Cipher Modes: ECB pattern leakage, CBC chaining, CTR streaming, and authenticated GCM',
          bn: 'ব্লক সাইফার মোড: ইসিবি (ECB) প্যাটার্ন ফাঁস, সিবিসি (CBC) চেইনিং, সিটিআর (CTR) এবং জিসিএম (GCM)'
        },
        {
          en: 'Padding & Initialization Vectors (IV): PKCS#7 padding, unique nonce requirements, and padding oracle attacks',
          bn: 'প্যাডিং ও ইনিশিয়ালাইজেশন ভেক্টর (IV): PKCS#7 প্যাডিং, ইউনিক ননস এবং প্যাডিং ওরাকল প্রতিরোধ'
        },
        {
          en: 'Milestone: Migrate legacy CBC ciphers to modern Authenticated Encryption with Associated Data (AEAD)',
          bn: 'মাইলফলক: পুরানো সিবিসি সাইফার বদলে আধুনিক অথেনটিকেটেড এনক্রিপশনে (AEAD) রূপান্তর করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Transport Security & Enterprise Capstone (Lessons 7–8)',
        bn: 'ধাপ ৪ — ট্রান্সপোর্ট নিরাপত্তা ও এন্টারপ্রাইজ ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'TLS in Action: The TLS 1.3 handshake, Ephemeral Diffie-Hellman (ECDHE), and Perfect Forward Secrecy (PFS)',
          bn: 'বাস্তবে টিএলএস (TLS): টিএলএস ১.৩ হ্যান্ডশেক, ডিফি-হেলম্যান (ECDHE) এবং পারফেক্ট ফরওয়ার্ড সিকিউরিটি'
        },
        {
          en: 'Crypto Capstone: Complete enterprise cryptographic posture audit, cipher deprecation, and hardening',
          bn: 'ক্রিপ্টো ক্যাপস্টোন: পূর্ণাঙ্গ এন্টারপ্রাইজ ক্রিপ্টোগ্রাফিক অডিট, দুর্বল সাইফার বর্জন এবং হার্ডেনিং'
        },
        {
          en: 'Milestone: Architect production systems passing cryptographic compliance audits with a perfect 5/5 score',
          bn: 'মাইলফলক: ক্রিপ্টোগ্রাফিক নিরীক্ষায় পূর্ণাঙ্গ ৫/৫ স্কোর পেয়ে উত্তীর্ণ হওয়া নিরাপদ প্রোডাকশন আর্কিটেকচার তৈরি'
        },
      ],
    },
  ],
  lessons: [
    MeetEncryptionLesson,
    SymmetricCryptoLesson,
    AsymmetricCryptoLesson,
    KeyManagementLesson,
    EncryptionModesLesson,
    PaddingIvLesson,
    TlsInActionLesson,
    CryptoCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Zero-Knowledge Encrypted Notes Vault',
        bn: 'প্রজেক্ট ১ — জিরো-নলেজ এনক্রিপ্টেড নোটস ভল্ট'
      },
      brief: {
        en: 'Build an end-to-end encrypted notes application using Node.js crypto. Derive a 256-bit AES master key from a user passphrase using Argon2id or PBKDF2 with 100000 iterations. Encrypt every note using AES-256-GCM with a cryptographically unique 12-byte initialization vector (IV) and verify integrity with a 16-byte authentication tag. Deliverable: running CLI or API vault with automated zero-knowledge decryption unit tests.',
        bn: 'Node.js crypto ব্যবহার করে একটি এন্ড-টু-এন্ড এনক্রিপ্টেড নোটস ভল্ট তৈরি করুন। ব্যবহারকারীর পাসফ্রেজ থেকে Argon2id বা ১০০০০০ বার PBKDF2 ইটারেশন চালিয়ে ২৫৬-বিটের মাস্টার কি তৈরি করুন। প্রতি নোটে ১২-বাইটের ইউনিক আইভি (IV) ও ১৬-বাইটের অথেনটিকেশন ট্যাগ সহ AES-256-GCM এনক্রিপশন প্রয়োগ করুন। ডেলিভারেবল: স্বয়ংক্রিয় টেস্ট কেস সহ চলন্ত কমান্ড-লাইন বা এপিআই ভল্ট।',
      },
    },
    {
      title: {
        en: 'Project 2 — Automated Envelope Encryption & KMS Rotation Engine',
        bn: 'প্রজেক্ট ২ — স্বয়ংক্রিয় এনভেলপ এনক্রিপশন ও কেএমএস চাবি পরিবর্তন ইঞ্জিন'
      },
      brief: {
        en: 'Architect a production envelope encryption service separating Key Encryption Keys (KEK) from Data Encryption Keys (DEK). Store the master KEK inside a simulated Hardware Security Module (HSM) or KMS, generate ephemeral DEKs per record to encrypt database rows, and implement an automated 90-day background key rotation worker that re-encrypts stored DEKs without decrypting customer data. Deliverable: tested key management middleware module.',
        bn: 'ডাটা এনক্রিপশন কি (DEK) এবং কি এনক্রিপশন কি (KEK) পৃথক রেখে একটি এনভেলপ এনক্রিপশন সার্ভিস তৈরি করুন। মাস্টার KEK একটি সুরক্ষিত সিমুলেটেড HSM বা KMS-এ রাখুন, প্রতিটি রেকর্ডের জন্য আলাদা DEK তৈরি করে ডাটাবেজের সারি এনক্রিপ্ট করুন এবং প্রতি ৯০ দিনে মূল গ্রাহক ডাটা স্পর্শ না করেই DEK রি-এনক্রিপ্ট করার স্বয়ংক্রিয় ব্যাকগ্রাউন্ড কর্মী যুক্ত করুন। ডেলিভারেবল: পরীক্ষিত কি ম্যানেজমেন্ট মডিউল।',
      },
    },
    {
      title: {
        en: 'Project 3 — Hardened TLS 1.3 Reverse Proxy & Cipher Audit Suite',
        bn: 'প্রজেক্ট ৩ — সুরক্ষিত টিএলএস ১.৩ রিভার্স প্রক্সি ও সাইফার নিরীক্ষা স্যুট'
      },
      brief: {
        en: 'Configure an automated TLS policy engine terminating HTTPS traffic exclusively via TLS 1.3 and hardened TLS 1.2. Ban insecure legacy ciphers (RC4, 3DES, CBC mode ciphers), enforce Ephemeral Elliptic Curve Diffie-Hellman (ECDHE with X25519) to guarantee Perfect Forward Secrecy (PFS), and write an automated scanner validating that legacy SSLv3 and TLS 1.0 client hellos are refused with alert 70. Deliverable: reverse proxy configuration and cipher test report.',
        bn: 'একটি স্বয়ংক্রিয় টিএলএস ইঞ্জিন তৈরি করুন যা কেবল টিএলএস ১.৩ এবং সুরক্ষিত টিএলএস ১.২ এর মাধ্যমে ট্রাফিক পরিচালনা করবে। পুরানো অনিরাপদ সাইফার (RC4, 3DES, CBC মোড) সম্পূর্ণ নিষিদ্ধ করুন, পারফেক্ট ফরওয়ার্ড সিকিউরিটির (PFS) জন্য X25519 কার্ভ সহ ECDHE প্রয়োগ করুন এবং পুরানো ক্লায়েন্টদের সংযোগ বাতিল হয় কিনা তা যাচাই করার জন্য একটি অটোমেটেড স্ক্যানার লিখুন। ডেলিভারেবল: প্রক্সি কনফিগারেশন এবং সাইফার অডিট রিপোর্ট।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always use Authenticated Encryption with Associated Data (AEAD) like AES-256-GCM or ChaCha20-Poly1305; never use unauthenticated ciphers.',
      bn: 'সর্বদা AES-256-GCM বা ChaCha20-Poly1305 এর মতো অথেনটিকেটেড এনক্রিপশন (AEAD) ব্যবহার করুন; কখনোই অখণ্ডতাহীন সাধারণ সাইফার ব্যবহার করবেন না।',
    },
    {
      en: 'Never reuse an Initialization Vector (IV) or Nonce with the same key; IV collisions in GCM and stream ciphers completely destroy confidentiality.',
      bn: 'একই ক্রিপ্টোগ্রাফিক কি দিয়ে কখনোই ইনিশিয়ালাইজেশন ভেক্টর (IV) পুনরায় ব্যবহার করবেন না; আইভি পুনরাবৃত্তি ঘটলে গোপনীয়তা সম্পূর্ণ ধ্বংস হয়ে যায়।',
    },
    {
      en: 'Derive encryption keys from passwords using memory-hard, slow Key Derivation Functions (Argon2id, scrypt, or PBKDF2 with high iterations).',
      bn: 'পাসওয়ার্ড থেকে চাবি তৈরির সময় সর্বদা মেমোরি-হার্ড ও ধীরগতির অ্যালগরিদম (Argon2id, scrypt বা উচ্চ ইটারেশনের PBKDF2) ব্যবহার করুন।',
    },
    {
      en: 'Enforce Perfect Forward Secrecy (PFS) using Ephemeral Diffie-Hellman (ECDHE); compromise of a long-term server key must never decrypt past traffic.',
      bn: 'সর্বদা ডিফি-হেলম্যান (ECDHE) দিয়ে পারফেক্ট ফরওয়ার্ড সিকিউরিটি (PFS) নিশ্চিত করুন; সার্ভারের দীর্ঘমেয়াদী চাবি ফাঁস হলেও যাতে অতীতের ট্রাফিক ডিক্রিপ্ট না হয়।',
    },
  ],
  interview: [
    {
      q: {
        en: 'Why does Electronic Codebook (ECB) mode fail to provide confidentiality, as famously illustrated by the ECB Penguin?',
        bn: 'ইলেকট্রনিক কোডবুক (ECB) মোড কেন গোপনীয়তা রক্ষা করতে ব্যর্থ হয়, যা ইসিবি পেঙ্গুইন (ECB Penguin) উদাহরণের মাধ্যমে সুপরিচিত?'
      },
      a: {
        en: 'ECB mode encrypts each 16-byte block of plaintext independently using the exact same key without an initialization vector. Consequently, identical plaintext blocks always produce identical ciphertext blocks. In bitmap images or structured documents with repeating patterns (such as the white background of the Linux Tux penguin), the ciphertext completely preserves the visual outlines and entropy distribution of the original image.',
        bn: 'ইসিবি (ECB) মোডে কোনো ইনিশিয়ালাইজেশন ভেক্টর ছাড়াই প্রতিটি ১৬-বাইটের ব্লককে সম্পূর্ণ স্বাধীনভাবে একই কি দিয়ে এনক্রিপ্ট করা হয়। ফলে একই ধরনের প্লেইনটেক্সট ব্লক সর্বদা একই ধরনের সাইফারটেক্সট ব্লক তৈরি করে। লিনাক্স পেঙ্গুইন ছবির মতো পুনরাবৃত্ত প্যাটার্ন থাকা ছবিতে সাইফারটেক্সটের মধ্যেও মূল ছবির রূপরেখা স্পষ্টভাবে ফুটে ওঠে, ফলে কোনো গোপনীয়তাই থাকে না।'
      },
    },
    {
      q: {
        en: 'How does a Padding Oracle Attack (such as Vaudenay attack against CBC mode) allow an attacker to decrypt ciphertext without knowing the key?',
        bn: 'প্যাডিং ওরাকল আক্রমণ (যেমন CBC মোডে Vaudenay এর আক্রমণ) কীভাবে চাবি না জেনেও আক্রমণকারীকে পুরো সাইফারটেক্সট ডিক্রিপ্ট করার সুযোগ দেয়?'
      },
      a: {
        en: 'In CBC mode with PKCS#7 padding, the server decrypts a ciphertext block, checks the padding bytes at the end, and traditionally returns different errors if padding is invalid versus valid. By systematically altering the last byte of the previous ciphertext block (which is XORed with the decrypted target block) and observing server padding error responses, an attacker guesses the plaintext byte-by-byte in at most 256 attempts per byte.',
        bn: 'PKCS#7 প্যাডিং সহ সিবিসি মোডে সার্ভার ডিক্রিপশনের পর প্যাডিং সঠিক আছে কিনা যাচাই করে এবং প্যাডিং ভুল হলে আলাদা এরর মেসেজ দেখায়। আক্রমণকারী পূর্ববর্তী সাইফারটেক্সট ব্লকের শেষ বাইটটি পরিবর্তন করে সার্ভারে পাঠায় এবং এরর পর্যবেক্ষণ করে। এভাবে বাইট প্রতি সর্বোচ্চ ২৫৬ টি চেষ্টার মাধ্যমে কোনো পাসওয়ার্ড বা কি ছাড়াই পুরো বার্তা এক এক বাইট করে উদ্ধার করে নেওয়া যায়।'
      },
    },
    {
      q: {
        en: 'How does TLS 1.3 fundamentally improve performance and cryptographic security over TLS 1.2?',
        bn: 'টিএলএস ১.২ এর তুলনায় টিএলএস ১.৩ কীভাবে পারফরম্যান্স এবং ক্রিপ্টোগ্রাফিক সুরক্ষাকে বৈপ্লবিকভাবে উন্নত করেছে?'
      },
      a: {
        en: 'TLS 1.3 reduces the handshake latency from 2 round-trips (2-RTT) down to 1 round-trip (1-RTT) by negotiating cipher suites and Diffie-Hellman key shares concurrently in the Client Hello. Cryptographically, it completely removed obsolete and dangerous primitives: static RSA key exchange (which broke forward secrecy), CBC mode ciphers, RC4, SHA-1, and MD5. All TLS 1.3 ciphers are mandatory Authenticated Encryption with Associated Data (AEAD) ciphers (AES-GCM, ChaCha20-Poly1305).',
        bn: 'টিএলএস ১.৩ হ্যান্ডশেকের বিলম্ব ২-রাউন্ড ট্রিপ (2-RTT) থেকে কমিয়ে ১-রাউন্ড ট্রিপে (1-RTT) নামিয়ে আনে। ক্রিপ্টোগ্রাফিকভাবে এটি সমস্ত পুরানো ও ঝুঁকিপূর্ণ অ্যালগরিদম বাদ দিয়েছে: স্ট্যাটিক আরএসএ কি এক্সচেঞ্জ (যা অতীত ট্রাফিকের নিরাপত্তা নষ্ট করত), সিবিসি মোড, RC4, SHA-1 ও MD5। টিএলএস ১.৩-এ ব্যবহৃত প্রতিটি সাইফারই বাধ্যতামূলকভাবে অথেনটিকেটেড এনক্রিপশন (AEAD) যেমন AES-GCM বা ChaCha20-Poly1305 হতে হয়।'
      },
    },
    {
      q: {
        en: 'What is Perfect Forward Secrecy (PFS), and how does Ephemeral Diffie-Hellman (ECDHE) achieve it?',
        bn: 'পারফেক্ট ফরওয়ার্ড সিকিউরিটি (PFS) কী এবং ডিফি-হেলম্যান (ECDHE) কীভাবে এটি নিশ্চিত করে?'
      },
      a: {
        en: 'Perfect Forward Secrecy guarantees that compromising a server long-term private signing key in the future does not allow an adversary to decrypt past recorded encrypted sessions. In static RSA key exchange, the client encrypted the pre-master secret using the server public key; if the private key was stolen years later, all historical traffic could be decrypted. ECDHE generates temporary, ephemeral key pairs for each individual session and deletes them immediately from memory after deriving the session key.',
        bn: 'পারফেক্ট ফরওয়ার্ড সিকিউরিটি নিশ্চিত করে যে ভবিষ্যতে কোনো সার্ভারের দীর্ঘমেয়াদী প্রাইভেট কি চুরি হলেও অতীতের রেকর্ড করা কোনো এনক্রিপ্ট করা সেশন ডিক্রিপ্ট করা যাবে না। পুরানো আরএসএ পদ্ধতিতে সার্ভার কি দিয়ে সব ডিক্রিপ্ট করা যেত। কিন্তু ECDHE প্রতিটি সেশনের জন্য আলাদা ক্ষণস্থায়ী কি তৈরি করে এবং সেশন শেষ হওয়া মাত্রই মেমোরি থেকে মুছে ফেলে, ফলে অতীত ট্রাফিকের চাবি কখনোই আর উদ্ধার করা যায় না।'
      },
    },
  ],
  realWorld: [
    {
      en: 'The Fall of WEP Wi-Fi Security: The 802.11 WEP standard used RC4 with a short 24-bit Initialization Vector (IV), causing frequent IV collisions that allowed attackers to crack Wi-Fi passwords in minutes.',
      bn: 'ওয়াইফাই WEP নিরাপত্তার পতন: ৮০২.১১ WEP স্ট্যান্ডার্ডে মাত্র ২৪-বিটের ছোট IV ব্যবহার করায় ঘন ঘন চাবি পুনরাবৃত্তি হতো, যার সুযোগ নিয়ে হ্যাকাররা মাত্র কয়েক মিনিটে ওয়াইফাই পাসওয়ার্ড বের করে নিত।'
    },
    {
      en: 'Sony PlayStation 3 Private Key Leak (2010): Sony developers implemented ECDSA digital signatures using a static constant number instead of a cryptographically random nonce k, instantly exposing their master signing key to hackers.',
      bn: 'সনি প্লেস্টেশন ৩ মাস্টার কি ফাঁসের ঘটনা (২০১০): সনির ডেভেলপাররা ডিজিটাল স্বাক্ষরের সময় র‍্যান্ডম সংখ্যা ব্যবহারের বদলে একটি স্থির সংখ্যা ব্যবহার করেছিল, ফলে গণিতবিদরা তাদের মাস্টার প্রাইভেট কি কয়েক লাইনে বের করে ফেলে।'
    },
    {
      en: "Let's Encrypt & Automated 90-Day Certificates: By pioneering the ACME protocol and enforcing short 90-day X.509 certificate lifecycles, Let's Encrypt automated cryptographic agility across over 300 million websites.",
      bn: 'লেটস এনক্রিপ্ট ও স্বয়ংক্রিয় ৯০ দিনের সার্টিফিকেট: ACME প্রোটোকল এবং স্বল্পমেয়াদী ৯০ দিনের সার্টিফিকেট বাধ্যতামূলক করার মাধ্যমে লেটস এনক্রিপ্ট বিশ্বব্যাপী ৩০ কোটিরও বেশি ওয়েবসাইটে এনক্রিপশন চালু করেছে।'
    },
    {
      en: 'Signal Protocol Double Ratchet: Combines asymmetric Diffie-Hellman ratchets with symmetric hash ratchets to provide self-healing end-to-end encryption with both forward secrecy and break-in recovery for billions of chat users.',
      bn: 'সিগন্যাল প্রোটোকল ডাবল র‍্যাচেট: ডিফি-হেলম্যান এবং সিমেট্রিক হ্যাশ র‍্যাচেট একত্রিত করে শত কোটি মেসেজিং ব্যবহারকারীর জন্য সেলফ-হিলিং এন্ড-টু-এন্ড এনক্রিপশন এবং ফিউচার সিকিউরিটি নিশ্চিত করে।'
    },
  ],
};
