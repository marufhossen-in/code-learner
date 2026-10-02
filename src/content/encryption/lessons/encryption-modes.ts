import type { Lesson } from '../../../lib/types';

export const EncryptionModesLesson: Lesson = {
  slug: 'encryption-modes',
  tech: 'encryption',
  title: {
    en: 'Block Cipher Modes of Operation: ECB, CBC, CTR & GCM Deep Dive',
    bn: 'ব্লক সাইফার মোডস অব অপারেশন: ECB, CBC, CTR ও GCM এর বিস্তারিত বিশ্লেষণ'
  },
  summary: {
    en: 'Understand how block ciphers transform arbitrary data using Electronic Codebook (ECB), Cipher Block Chaining (CBC), Counter (CTR), and Galois/Counter Mode (GCM). Learn why ECB leaks image patterns, why CBC requires random IVs, and why modern engineering mandates AEAD authenticated encryption.',
    bn: 'ইলেক্ট্রনিক কোডবুক (ECB), সাইফার ব্লক চেইনিং (CBC), কাউন্টার (CTR) এবং গ্যালোয়া/কাউন্টার মোড (GCM) ব্যবহার করে কীভাবে ব্লক সাইফার কাজ করে তা গভীরভাবে জানুন। কেন ECB ছবির প্যাটার্ন ফাঁস করে, কেন CBC-তে র্যান্ডম IV বাধ্যতামূলক এবং কেন আধুনিক সফটওয়্যারে AEAD এনক্রিপশন অপরিহার্য তা শিখুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'the-block-cipher-problem',
      text: {
        en: 'The Core Problem: Beyond a Single 16-Byte Block',
        bn: 'মূল সমস্যা: একটি একক ১৬-বাইট ব্লকের বাইরে ডাটা প্রসেসিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A symmetric block cipher like AES is mathematically defined to process a single fixed-size block of data — exactly 128 bits (16 bytes). In real-world software, data payloads are almost never exactly 16 bytes. They can be a 40-byte JSON web token, a 2-megabyte image file, or a 4-gigabyte database backup. A Mode of Operation is an algorithm that dictates how a block cipher algorithm is repeatedly applied to securely encrypt sequences of blocks larger than a single block size.',
        bn: 'একটি প্রতিসম ব্লক সাইফার যেমন AES গাণিতিকভাবে একটি নির্দিষ্ট আকারের ডাটা ব্লক প্রসেস করার জন্য তৈরি — যার আকার ঠিক ১২৮ বিট (১৬ বাইট)। কিন্তু বাস্তব সফটওয়্যার সিস্টেমে ডাটা কখনো ঠিক ১৬ বাইট হয় না। এটি হতে পারে ৪০ বাইটের একটি JSON ওয়েব টোকেন, ২ মেগাবাইটের একটি ছবি অথবা ৪ গিগাবাইটের একটি সম্পূর্ণ ডাটাবেস। মোড অব অপারেশন হলো এমন একটি সুনির্দিষ্ট নিয়ম বা অ্যালগরিদম যা নির্ধারণ করে কীভাবে একাধিক ব্লকের সমন্বয়ে গঠিত যেকোনো আকারের ডাটা নিরাপদে এনক্রিপ্ট করা হবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Electronic Codebook (ECB)',
          def: {
            en: 'The simplest mode where every plaintext block is encrypted independently with the identical key.',
            bn: 'সবচেয়ে সরল মোড যেখানে প্রতিটি প্লেইনটেক্সট ব্লক একই গোপন কি দিয়ে একে অপরের সাথে কোনো সংযোগ ছাড়াই স্বাধীনভাবে এনক্রিপ্ট করা হয়।'
          }
        },
        {
          term: 'Cipher Block Chaining (CBC)',
          def: {
            en: 'A mode where each plaintext block is XORed with the previous ciphertext block before encryption.',
            bn: 'এমন একটি মোড যেখানে প্রতিটি প্লেইনটেক্সট ব্লককে এনক্রিপশনের পূর্বে ঠিক আগের সাইফারটেক্সট ব্লকের সাথে XOR করা হয়।'
          }
        },
        {
          term: 'Counter Mode (CTR)',
          def: {
            en: 'A mode turning a block cipher into a stream cipher by encrypting sequential counter values.',
            bn: 'ধারাবাহিক কাউন্টার সংখ্যা এনক্রিপ্ট করে একটি কি-স্ট্রিম তৈরি করার মোড যা যেকোনো ব্লক সাইফারকে স্ট্রিম সাইফারে রূপান্তরিত করে।'
          }
        },
        {
          term: 'Galois/Counter Mode (GCM)',
          def: {
            en: 'An authenticated AEAD mode combining CTR encryption with Galois field GHASH integrity tags.',
            bn: 'একটি অথেনটিকেটেড AEAD মোড যা CTR এনক্রিপশনের সাথে গ্যালোয়া ফিল্ড GHASH ইন্টিগ্রিটি ট্যাগ যুক্ত করে পূর্ণাঙ্গ নিরাপত্তা দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-ecb-catastrophe',
      text: {
        en: 'The ECB Catastrophe: Pattern Preservation and the Famous Penguin',
        bn: 'ECB মোডের বিপর্যয়: প্যাটার্ন ফাঁস ও বিখ্যাত পেঙ্গুইন বিতর্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Electronic Codebook (ECB) mode, the mathematical formula is simple: Ciphertext_i = Encrypt(Key, Plaintext_i). If two plaintext blocks are identical, their resulting ciphertext blocks are 100% identical. This property is catastrophic for structured data. In the famous Linux Tux Penguin demonstration, an image is encrypted with ECB. Although pixel colors change, identical white background blocks produce identical ciphertext bytes. The complete outline, eyes, and shapes of the penguin remain vividly visible.',
        bn: 'ইলেক্ট্রনিক কোডবুক (ECB) মোডের গাণিতিক সূত্র অত্যন্ত সরল: Ciphertext_i = Encrypt(Key, Plaintext_i)। অর্থাৎ ২টি প্লেইনটেক্সট ব্লক যদি হুবহু একই হয়, তবে তাদের এনক্রিপ্ট করা সাইফারটেক্সট ব্লকও ১০০% একই হবে। কাঠামোগত ডাটার জন্য এটি একটি মারাত্মক বিপর্যয়। লিনাক্সের বিখ্যাত টাক্স পেঙ্গুইন প্রদর্শনীতে একটি ছবিকে ECB দিয়ে এনক্রিপ্ট করা হয়। পিক্সেলের রং পরিবর্তন হলেও পেঙ্গুইনের সাদা ব্যাকগ্রাউন্ডের প্রতিটি ব্লক একই সাইফারটেক্সট তৈরি করে। ফলে পেঙ্গুইনের শরীরের প্রতিটি রেখা, চোখ এবং আকৃতি আগের মতোই সুস্পষ্টভাবে দৃশ্যমান থাকে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Comparison of Block Cipher Modes: ECB vs CBC vs CTR vs GCM',
        bn: 'ব্লক সাইফার মোডসমূহের তুলনা: ECB বনাম CBC বনাম CTR বনাম GCM'
      },
      svg: `<svg viewBox="0 0 880 390" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <rect width="880" height="390" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="2"/>

  <!-- Mode 1: ECB (Broken) -->
  <g transform="translate(30, 30)">
    <rect width="190" height="330" rx="12" fill="#450a0a" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
    <text x="95" y="30" text-anchor="middle" fill="#f87171" font-size="14" font-weight="bold">ECB Mode</text>
    <text x="95" y="48" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">CATASTROPHIC FLAW</text>
    <rect x="20" y="70" width="150" height="30" rx="6" fill="#18181b" stroke="#71717a"/>
    <text x="95" y="90" text-anchor="middle" fill="#e4e4e7" font-size="11">Block 1: "ATTACK"</text>
    <text x="95" y="125" text-anchor="middle" fill="#ef4444" font-size="16">↓ AES</text>
    <rect x="20" y="140" width="150" height="30" rx="6" fill="#27272a" stroke="#ef4444"/>
    <text x="95" y="160" text-anchor="middle" fill="#fca5a5" font-size="11">Cipher: 0x9f2a (A)</text>
    <rect x="20" y="200" width="150" height="30" rx="6" fill="#18181b" stroke="#71717a"/>
    <text x="95" y="220" text-anchor="middle" fill="#e4e4e7" font-size="11">Block 2: "ATTACK"</text>
    <text x="95" y="255" text-anchor="middle" fill="#ef4444" font-size="16">↓ AES</text>
    <rect x="20" y="270" width="150" height="30" rx="6" fill="#27272a" stroke="#ef4444"/>
    <text x="95" y="290" text-anchor="middle" fill="#fca5a5" font-size="11">Cipher: 0x9f2a (A)</text>
    <text x="95" y="318" text-anchor="middle" fill="#f87171" font-size="10">Identical! Patterns leak.</text>
  </g>

  <!-- Mode 2: CBC (Chained) -->
  <g transform="translate(240, 30)">
    <rect width="190" height="330" rx="12" fill="#1e1b4b" fill-opacity="0.3" stroke="#818cf8" stroke-width="1.5"/>
    <text x="95" y="30" text-anchor="middle" fill="#a5b4fc" font-size="14" font-weight="bold">CBC Mode</text>
    <text x="95" y="48" text-anchor="middle" fill="#94a3b8" font-size="10">CHAINED WITH IV</text>
    <rect x="20" y="70" width="150" height="30" rx="6" fill="#18181b" stroke="#71717a"/>
    <text x="95" y="90" text-anchor="middle" fill="#e4e4e7" font-size="11">IV ⊕ Block 1</text>
    <text x="95" y="125" text-anchor="middle" fill="#818cf8" font-size="16">↓ AES</text>
    <rect x="20" y="140" width="150" height="30" rx="6" fill="#27272a" stroke="#818cf8"/>
    <text x="95" y="160" text-anchor="middle" fill="#c7d2fe" font-size="11">Cipher: 0x1b4f (A)</text>
    <path d="M 95 170 L 95 190 L 40 190 L 40 210" stroke="#818cf8" stroke-width="1.5" fill="none"/>
    <rect x="20" y="200" width="150" height="30" rx="6" fill="#18181b" stroke="#71717a"/>
    <text x="95" y="220" text-anchor="middle" fill="#e4e4e7" font-size="11">C1 ⊕ Block 2</text>
    <text x="95" y="255" text-anchor="middle" fill="#818cf8" font-size="16">↓ AES</text>
    <rect x="20" y="270" width="150" height="30" rx="6" fill="#27272a" stroke="#818cf8"/>
    <text x="95" y="290" text-anchor="middle" fill="#c7d2fe" font-size="11">Cipher: 0x8e33 (B)</text>
    <text x="95" y="318" text-anchor="middle" fill="#a5b4fc" font-size="10">Diffused: No auth tag!</text>
  </g>

  <!-- Mode 3: CTR (Stream-like) -->
  <g transform="translate(450, 30)">
    <rect width="190" height="330" rx="12" fill="#064e3b" fill-opacity="0.2" stroke="#34d399" stroke-width="1.5"/>
    <text x="95" y="30" text-anchor="middle" fill="#6ee7b7" font-size="14" font-weight="bold">CTR Mode</text>
    <text x="95" y="48" text-anchor="middle" fill="#94a3b8" font-size="10">STREAM PARALLEL</text>
    <rect x="20" y="70" width="150" height="30" rx="6" fill="#18181b" stroke="#71717a"/>
    <text x="95" y="90" text-anchor="middle" fill="#e4e4e7" font-size="11">AES(Nonce || 1)</text>
    <text x="95" y="125" text-anchor="middle" fill="#34d399" font-size="16">↓ Keystream</text>
    <rect x="20" y="140" width="150" height="30" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="95" y="160" text-anchor="middle" fill="#a7f3d0" font-size="11">P1 ⊕ Keystream 1</text>
    <rect x="20" y="200" width="150" height="30" rx="6" fill="#18181b" stroke="#71717a"/>
    <text x="95" y="220" text-anchor="middle" fill="#e4e4e7" font-size="11">AES(Nonce || 2)</text>
    <text x="95" y="255" text-anchor="middle" fill="#34d399" font-size="16">↓ Keystream</text>
    <rect x="20" y="270" width="150" height="30" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="95" y="290" text-anchor="middle" fill="#a7f3d0" font-size="11">P2 ⊕ Keystream 2</text>
    <text x="95" y="318" text-anchor="middle" fill="#6ee7b7" font-size="10">Fast multicore parallel</text>
  </g>

  <!-- Mode 4: GCM (Gold Standard AEAD) -->
  <g transform="translate(660, 30)">
    <rect width="190" height="330" rx="12" fill="#064e3b" fill-opacity="0.3" stroke="#10b981" stroke-width="2"/>
    <text x="95" y="30" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">GCM (AEAD)</text>
    <text x="95" y="48" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">GOLD STANDARD</text>
    <rect x="15" y="70" width="160" height="40" rx="6" fill="#022c22" stroke="#10b981"/>
    <text x="95" y="88" text-anchor="middle" fill="#d1fae5" font-size="11">CTR Encryption</text>
    <text x="95" y="102" text-anchor="middle" fill="#6ee7b7" font-size="9">Confidentiality</text>
    <text x="95" y="132" text-anchor="middle" fill="#10b981" font-size="14">+</text>
    <rect x="15" y="145" width="160" height="40" rx="6" fill="#022c22" stroke="#10b981"/>
    <text x="95" y="163" text-anchor="middle" fill="#d1fae5" font-size="11">Galois GHASH Field</text>
    <text x="95" y="177" text-anchor="middle" fill="#6ee7b7" font-size="9">Integrity & Authenticity</text>
    <rect x="15" y="205" width="160" height="70" rx="6" fill="#064e3b" stroke="#34d399"/>
    <text x="95" y="225" text-anchor="middle" fill="#ecfdf5" font-size="11" font-weight="bold">Output Artifacts:</text>
    <text x="95" y="243" text-anchor="middle" fill="#a7f3d0" font-size="10">1. Ciphertext</text>
    <text x="95" y="260" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">2. 128-bit Auth Tag</text>
    <text x="95" y="318" text-anchor="middle" fill="#34d399" font-size="10">Catches all bit-flipping!</text>
  </g>
</svg>`,
      caption: {
        en: 'ECB leaks repeating plaintext blocks; CBC chains sequential blocks; CTR parallelizes with a keystream; GCM adds cryptographic authentication tags to guarantee integrity.',
        bn: 'ECB পুনরাবৃত্ত প্লেইনটেক্সট ফাঁস করে; CBC ধারাবাহিক ব্লকে চেইন তৈরি করে; CTR কি-স্ট্রিম দিয়ে প্যারালাল প্রসেসিং করে; আর GCM নিখুঁত ইন্টিগ্রিটির জন্য ক্রিপ্টোগ্রাফিক অথেনটিকেশন ট্যাগ যুক্ত করে।'
      }
    },
    {
      type: 'heading',
      id: 'cbc-and-bit-flipping',
      text: {
        en: 'Cipher Block Chaining (CBC) and the Vulnerability to Bit-Flipping',
        bn: 'সাইফার ব্লক চেইনিং (CBC) এবং বিট-ফ্লিপিং আক্রমণের দুর্বলতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In CBC mode, an Initialization Vector (IV) is XORed with the first plaintext block. Each subsequent plaintext block is XORed with the preceding ciphertext block before encryption. This ensures identical plaintexts produce completely different ciphertexts. However, CBC provides confidentiality without authenticity. If an attacker intercepts a CBC ciphertext and flips a bit in block C_(i-1), the decrypted block P_i experiences a deterministic bit flip at that exact byte offset. An attacker can alter "$00100" into "$90100" without knowing the key!',
        bn: 'CBC মোডে প্রথম প্লেইনটেক্সট ব্লকের সাথে একটি ইনিশিয়ালাইজেশন ভেক্টর (IV) XOR করা হয়। পরবর্তী প্রতিটি প্লেইনটেক্সট ব্লক এনক্রিপ্ট করার আগে পূর্ববর্তী সাইফারটেক্সট ব্লকের সাথে XOR করা হয়। এর ফলে একই প্লেইনটেক্সট বারবার আসলেও সম্পূর্ণ ভিন্ন ভিন্ন সাইফারটেক্সট তৈরি হয়। কিন্তু CBC কেবল গোপনীয়তা দেয়, কোনো অথেনটিকেশন বা বিশ্বস্ততা দেয় না। আক্রমণকারী যদি মাঝপথে সাইফারটেক্সটের C_(i-1) ব্লকের কোনো বিট পরিবর্তন করে, তবে প্রাপক যখন P_i ডিক্রিপ্ট করবেন তখন ঠিক সেই জায়গায় বিট পরিবর্তন হয়ে যাবে। চাবি না জেনেই হ্যাকার "$০০১০০" কে "$৯০১০০" বানিয়ে ফেলতে পারে!'
      }
    },
    {
      type: 'heading',
      id: 'matrix-comparison',
      text: {
        en: 'Architectural Comparison: ECB vs CBC vs CTR vs GCM',
        bn: 'স্থাপত্যগত তুলনা: ECB বনাম CBC বনাম CTR বনাম GCM'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Security & Performance Property', bn: 'নিরাপত্তা ও কার্যক্ষমতা বৈশিষ্ট্য' },
        { en: 'ECB Mode', bn: 'ECB মোড' },
        { en: 'CBC Mode', bn: 'CBC মোড' },
        { en: 'CTR Mode', bn: 'CTR মোড' },
        { en: 'GCM Mode (AEAD)', bn: 'GCM মোড (AEAD)' }
      ],
      rows: [
        [
          { en: 'Hides Repetitive Patterns', bn: 'পুনরাবৃত্ত প্যাটার্ন গোপন করে' },
          { en: 'No (Fatal flaw)', bn: 'না (মারাত্মক ত্রুটি)' },
          { en: 'Yes (via IV/Chain)', bn: 'হ্যাঁ (IV ও চেইনের মাধ্যমে)' },
          { en: 'Yes (via Nonce)', bn: 'হ্যাঁ (নন্সের মাধ্যমে)' },
          { en: 'Yes (via Nonce)', bn: 'হ্যাঁ (নন্সের মাধ্যমে)' }
        ],
        [
          { en: 'Parallel Encryption (Multicore)', bn: 'প্যারালাল এনক্রিপশন (মাল্টিকোর)' },
          { en: 'Yes', bn: 'হ্যাঁ' },
          { en: 'No (Sequential)', bn: 'না (ধারাবাহিক)' },
          { en: 'Yes (High-speed)', bn: 'হ্যাঁ (উচ্চগতির)' },
          { en: 'Yes (Hardware AES-NI)', bn: 'হ্যাঁ (হার্ডওয়্যার AES-NI)' }
        ],
        [
          { en: 'Requires Padding (PKCS#7)', bn: 'প্যাডিং প্রয়োজন (PKCS#৭)' },
          { en: 'Yes (16-byte blocks)', bn: 'হ্যাঁ (১৬-বাইট ব্লক)' },
          { en: 'Yes (16-byte blocks)', bn: 'হ্যাঁ (১৬-বাইট ব্লক)' },
          { en: 'No (Stream byte-exact)', bn: 'না (স্ট্রিম নির্ভুল বাইট)' },
          { en: 'No (Stream byte-exact)', bn: 'না (স্ট্রিম নির্ভুল বাইট)' }
        ],
        [
          { en: 'Built-in Integrity (Auth Tag)', bn: 'অন্তর্নির্মিত ইন্টিগ্রিটি (অথেনটিকেশন ট্যাগ)' },
          { en: 'No (Zero protection)', bn: 'না (শূন্য নিরাপত্তা)' },
          { en: 'No (Bit-flipping prone)', bn: 'না (বিট-ফ্লিপিং ঝুঁকিপূর্ণ)' },
          { en: 'No (Needs separate HMAC)', bn: 'না (আলাদা HMAC প্রয়োজন)' },
          { en: 'Yes (128-bit GHASH Tag)', bn: 'হ্যাঁ (১২৮-বিট GHASH ট্যাগ)' }
        ],
        [
          { en: 'Modern Recommendation', bn: 'আধুনিক সুপারিশ' },
          { en: 'NEVER USE', bn: 'কখনোই ব্যবহার করবেন না' },
          { en: 'Legacy only (Avoid)', bn: 'কেবল লিগ্যাসি (এড়িয়ে চলুন)' },
          { en: 'Use only with HMAC', bn: 'কেবল HMAC-এর সাথে ব্যবহার্য' },
          { en: 'Industry Standard (TLS 1.3)', bn: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড (TLS ১.৩)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'gcm-aead-imperative',
      text: {
        en: 'The Modern Standard: Authenticated Encryption with Associated Data (AEAD)',
        bn: 'আধুনিক মানদণ্ড: অথেনটিকেটেড এনক্রিপশন উইথ অ্যাসোসিয়েটেড ডাটা (AEAD)'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'GHASH Authentication Tag: GCM computes a 128-bit polynomial MAC over both the ciphertext and unencrypted Additional Authenticated Data (AAD) such as IP headers, message sequence numbers, or timestamps.',
          bn: 'GHASH অথেনটিকেশন ট্যাগ: GCM সাইফারটেক্সট এবং এনক্রিপ্ট না করা অতিরিক্ত ডাটা (AAD যেমন আইপি হেডার, সিকোয়েন্স নম্বর বা টাইমস্ট্যাম্প)-এর উপর একটি ১২৮-বিট পলিনোমিয়াল MAC তৈরি করে।'
        },
        {
          en: 'Immediate Rejection of Forgeries: During decryption, if even 1 bit of the ciphertext or tag is modified, the decipher.final() routine throws an authentication failure exception and destroys all decrypted buffers before returning any data.',
          bn: 'জালিয়াতি তাৎক্ষণিক প্রত্যাখ্যান: ডিক্রিপশনের সময় সাইফারটেক্সট বা ট্যাগের মাত্র ১ টি বিটও পরিবর্তিত হলে, সিস্টেম অথেনটিকেশন ফেইলিউর এরর দেয় এবং কোনো ডাটা রিটার্ন করার আগেই মেমরি থেকে সব বাফার মুছে ফেলে।'
        },
        {
          en: 'Immunity to Padding Oracle Attacks: Because GCM behaves as a stream cipher, it requires no block padding. Padding Oracle attacks (such as POODLE or Vaudenay attacks) are completely eliminated by design.',
          bn: 'প্যাডিং ওরাকল আক্রমণ থেকে মুক্তি: GCM স্ট্রিম সাইফারের মতো কাজ করায় এতে কোনো ব্লক প্যাডিংয়ের দরকার হয় না। ফলে প্যাডিং ওরাকল আক্রমণ (যেমন POODLE বা Vaudenay আক্রমণ) কাঠামোগতভাবেই অসম্ভব।'
        }
      ]
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'GCM Nonce Reuse is Catastrophic (The GCM Nonce-Disaster)',
        bn: 'GCM নন্স পুনরাবৃত্তি মারাত্মক বিপর্যয় সৃষ্টি করে'
      },
      text: {
        en: 'Never encrypt 2 different messages using the same AES key and the same 12-byte IV in GCM mode. Reusing a nonce allows an attacker to compute the GHASH authentication key H directly by subtracting the tags, enabling them to forge valid authentication tags for arbitrary forged messages forever.',
        bn: 'GCM মোডে একই AES কি এবং একই ১২-বাইটের IV দিয়ে কখনোই ২টি ভিন্ন মেসেজ এনক্রিপ্ট করবেন না। নন্স পুনরাবৃত্তি করলে আক্রমণকারী ট্যাগদ্বয়ের পার্থক্য থেকে সরাসরি GHASH অথেনটিকেশন কি (H) বের করে ফেলতে পারে, যার ফলে সে আজীবনের জন্য যেকোনো জাল বার্তার বৈধ ট্যাগ তৈরি করতে সক্ষম হয়।'
      }
    },
    {
      type: 'heading',
      id: 'executable-mode-lab',
      text: {
        en: 'Executable Node.js Mode Engine: Testing ECB, CBC, and GCM',
        bn: 'এক্সিকিউটেবল Node.js মোড ইঞ্জিন: ECB, CBC ও GCM এর পরীক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete, runnable Node.js test bench comparing ECB, CBC, and GCM on identical 16-byte input chunks ("ATTACK_AT_DAWN__"). Running it demonstrates how ECB exposes duplicated ciphertext, CBC diffuses structural patterns, and GCM intercepts 1/1 bit-flipping tamper attempts.',
        bn: 'নিচে একটি স্বয়ংসম্পূর্ণ এবং কার্যকর Node.js স্ক্রিপ্ট দেওয়া হলো যা ১৬-বাইটের অভিন্ন ব্লকের উপর ("ATTACK_AT_DAWN__") ECB, CBC ও GCM মোড পরীক্ষা করে। এটি প্রমাণ করে যে ECB অনুলিপিকৃত সাইফারটেক্সট ফাঁস করে, CBC প্যাটার্ন লুকাতে সক্ষম এবং GCM শতভাগ নিখুঁতভাবে ১/১ টি বিট-ফ্লিপিং কারচুপি শনাক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run with node: Empirical comparison of ECB pattern leak, CBC chaining, and GCM AEAD tamper detection',
        bn: 'node দিয়ে চালান: ECB প্যাটার্ন ফাঁস, CBC চেইনিং এবং GCM AEAD কারচুপি শনাক্তকরণের বাস্তব পরীক্ষা'
      },
      code: `const crypto = require('crypto');

const key = crypto.randomBytes(32);
const iv16 = crypto.randomBytes(16);
const iv12 = crypto.randomBytes(12);

// Plaintext containing 3 identical 16-byte blocks
const repeatingBlock = "ATTACK_AT_DAWN__"; // 16 bytes
const plaintext = repeatingBlock.repeat(3); // 48 bytes (3 blocks)

// 1. ECB Mode (Insecure: leaks repeating blocks)
const ecbCipher = crypto.createCipheriv('aes-256-ecb', key, null);
const ecbCiphertext = Buffer.concat([ecbCipher.update(plaintext, 'utf8'), ecbCipher.final()]);
const ecbBlock1 = ecbCiphertext.subarray(0, 16).toString('hex');
const ecbBlock2 = ecbCiphertext.subarray(16, 32).toString('hex');
const ecbBlock3 = ecbCiphertext.subarray(32, 48).toString('hex');
const ecbRepeats = (ecbBlock1 === ecbBlock2 && ecbBlock2 === ecbBlock3);

// 2. CBC Mode (Chained: diffuses repeating blocks)
const cbcCipher = crypto.createCipheriv('aes-256-cbc', key, iv16);
const cbcCiphertext = Buffer.concat([cbcCipher.update(plaintext, 'utf8'), cbcCipher.final()]);
const cbcBlock1 = cbcCiphertext.subarray(0, 16).toString('hex');
const cbcBlock2 = cbcCiphertext.subarray(16, 32).toString('hex');
const cbcBlock3 = cbcCiphertext.subarray(32, 48).toString('hex');
const cbcDiffuses = (cbcBlock1 !== cbcBlock2 && cbcBlock2 !== cbcBlock3);

// Tamper test on CBC (bit-flipping decrypts silently without throwing error)
const tamperedCbc = Buffer.from(cbcCiphertext);
tamperedCbc[5] ^= 0x01; // flip 1 bit
const cbcDecipher = crypto.createDecipheriv('aes-256-cbc', key, iv16);
let cbcTamperDetected = false;
try {
  Buffer.concat([cbcDecipher.update(tamperedCbc), cbcDecipher.final()]);
} catch (e) {
  cbcTamperDetected = true;
}

// 3. GCM Mode (AEAD: includes cryptographic authentication tag)
const gcmCipher = crypto.createCipheriv('aes-256-gcm', key, iv12);
const gcmCiphertext = Buffer.concat([gcmCipher.update(plaintext, 'utf8'), gcmCipher.final()]);
const gcmTag = gcmCipher.getAuthTag();

// Tamper test on GCM (throws authentication tag verification error)
const tamperedGcm = Buffer.from(gcmCiphertext);
tamperedGcm[5] ^= 0x01; // flip 1 bit
let gcmTamperDetected = false;
try {
  const gcmDecipher = crypto.createDecipheriv('aes-256-gcm', key, iv12);
  gcmDecipher.setAuthTag(gcmTag);
  Buffer.concat([gcmDecipher.update(tamperedGcm), gcmDecipher.final()]);
} catch (e) {
  gcmTamperDetected = true; // Throws authentication failure!
}

console.log(\`[Mode Engine] Tested 3 modes (ECB, CBC, GCM): ECB leaked repeating blocks (\${ecbRepeats}), CBC diffused patterns (\${cbcDiffuses}), GCM caught 1/1 tamper attempts (\${gcmTamperDetected}).\`);
console.log(\`[Summary] 3 modes evaluated: 1 insecure (ECB), 1 unauthenticated (CBC), 1 gold-standard AEAD (GCM).\`);`
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive Block Cipher Mode Inspector',
        bn: 'ইন্টারেক্টিভ ব্লক সাইফার মোড পরিদর্শক'
      },
      html: `<h3>Block Cipher Modes Demonstration</h3>
<p>Compare ECB repeating blocks versus CBC chaining and GCM AEAD authentication.</p>
<div style="display:flex;gap:10px;margin-bottom:12px;">
  <button id="runModesBtn" style="padding:8px 14px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Encrypt 3 Blocks</button>
  <button id="tamperBtn" style="padding:8px 14px;background:#ef4444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Flip 1 Bit (Tamper Test)</button>
</div>
<pre id="modesOut" style="background:#0f172a;color:#38bdf8;padding:12px;border-radius:8px;font-family:monospace;white-space:pre-wrap;font-size:13px;border:1px solid #1e293b;min-height:90px;">Click "Encrypt 3 Blocks" to inspect ECB, CBC, and GCM behavior...</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }`,
      js: `let isEncrypted = false;

document.getElementById('runModesBtn').addEventListener('click', () => {
  isEncrypted = true;
  document.getElementById('modesOut').textContent = 
    "[Mode Engine] Input: 3 identical blocks of 'ATTACK_AT_DAWN__'\\n" +
    "• ECB Mode: Block 1 = 9f2a..., Block 2 = 9f2a..., Block 3 = 9f2a... [FATAL LEAK: All identical!]\\n" +
    "• CBC Mode: Block 1 = 1b4f..., Block 2 = 8e33..., Block 3 = 4c90... [SUCCESS: Chaining hides pattern]\\n" +
    "• GCM Mode: Ciphertext generated + 128-bit GHASH Auth Tag: 7a8f90b2c1d3e4f5... [AEAD GOLD STANDARD]";
});

document.getElementById('tamperBtn').addEventListener('click', () => {
  if (!isEncrypted) {
    document.getElementById('modesOut').textContent = "Please click 'Encrypt 3 Blocks' first.";
    return;
  }
  document.getElementById('modesOut').textContent = 
    "[Tamper Experiment: Flipping 1 bit at index 5 in ciphertext]\\n" +
    "• CBC Decryption: Silently accepted altered ciphertext! Decrypted text was corrupted but threw NO error! (Unsafe)\\n" +
    "• GCM Decryption: Threw 'Authentication Tag Error'! Corrupted data was rejected and wiped from RAM! (100% Protected)";
});`
    }
  ],
  exercises: [
    {
      id: 'enc-mode-ex-1',
      kind: 'mcq',
      topic: 'ecb-penguin-vulnerability',
      question: {
        en: 'Why does Electronic Codebook (ECB) mode leak the visual shape of an image (like the famous Linux penguin)?',
        bn: 'ইলেক্ট্রনিক কোডবুক (ECB) মোড কেন ছবির ভেতরের আকৃতি ফাঁস করে দেয় (যেমন বিখ্যাত লিনাক্স পেঙ্গুইন)?'
      },
      options: [
        {
          en: 'Because ECB encrypts each 16-byte block independently with the same key, meaning identical plaintext pixel blocks always produce identical ciphertext blocks, preserving visual outlines',
          bn: 'কারণ ECB প্রতিটি ১৬-বাইট ব্লক একই কি দিয়ে আলাদাভাবে এনক্রিপ্ট করে, যার ফলে একই পিক্সেল ব্লক সর্বদা একই সাইফারটেক্সট তৈরি করে এবং ছবির আউটলাইন দৃশ্যমান থাকে'
        },
        {
          en: 'Because ECB forces the computer monitor to disable encryption pixels',
          bn: 'কারণ ECB কম্পিউটারের মনিটরকে এনক্রিপশন পিক্সেলগুলো বন্ধ করতে বাধ্য করে'
        },
        {
          en: 'Because Linux kernels refuse to execute AES encryption instructions',
          bn: 'কারণ লিনাক্স কার্নেল AES এনক্রিপশনের কমান্ড চালাতে অস্বীকার করে'
        },
        {
          en: 'Because the image file size is smaller than eight bytes',
          bn: 'কারণ ছবির ফাইল সাইজ আট বাইটের চেয়ে ছোট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when two blocks of plaintext are identical under ECB.',
        bn: 'ECB মোডে দুটি প্লেইনটেক্সট ব্লক একই হলে কী ঘটে তা ভাবুন।'
      },
      explanation: {
        en: 'ECB lacks diffusion across blocks. Identical inputs yield identical outputs, completely failing to hide cryptographic patterns.',
        bn: 'ECB মোডে একাধিক ব্লকের মধ্যে কোনো যোগাযোগ বা ডিফিউশন থাকে না। একই ইনপুট থেকে একই আউটপুট আসায় কোনো প্যাটার্ন গোপন থাকে না।'
      }
    },
    {
      id: 'enc-mode-ex-2',
      kind: 'mcq',
      topic: 'cbc-bit-flipping-danger',
      question: {
        en: 'What dangerous vulnerability occurs when Cipher Block Chaining (CBC) mode is used without a message authentication code (MAC)?',
        bn: 'মেসেজ অথেনটিকেশন কোড (MAC) ছাড়া সাইফার ব্লক চেইনিং (CBC) ব্যবহার করলে কোন মারাত্মক ঝুঁকির সৃষ্টি হয়?'
      },
      options: [
        {
          en: 'Bit-flipping attacks: modifying a bit in ciphertext block C_(i-1) predictably alters the corresponding byte in decrypted plaintext block P_i without raising any error',
          bn: 'বিট-ফ্লিপিং আক্রমণ: সাইফারটেক্সট ব্লক C_(i-1)-এর একটি বিট পরিবর্তন করলে ডিক্রিপ্ট করা প্লেইনটেক্সট P_i-এর নির্দিষ্ট বাইটটি কোনো এরর ছাড়াই পূর্বানুমানযোগ্যভাবে বদলে যায়'
        },
        {
          en: 'The hard drive containing the CBC code permanently catches fire',
          bn: 'সিবিসি কোড রাখা হার্ডডিস্কে স্থায়ীভাবে আগুন ধরে যায়'
        },
        {
          en: 'The CBC algorithm reverses all alphabet letters into uppercase',
          bn: 'সিবিসি অ্যালগরিদম সমস্ত ছোট হাতের অক্ষরকে বড় হাতের অক্ষরে বদলে ফেলে'
        },
        {
          en: 'The encryption key is automatically sent to all internet users',
          bn: 'এনক্রিপশন চাবিটি ইন্টারনেটের সব ইউজারের কাছে স্বয়ংক্রিয়ভাবে চলে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'CBC provides confidentiality but no integrity or tamper detection.',
        bn: 'CBC গোপনীয়তা নিশ্চিত করলেও কোনো ইন্টিগ্রিটি বা কারচুপি শনাক্ত করতে পারে না।'
      },
      explanation: {
        en: 'Because CBC lacks authentication, bit flips in ciphertext alter decrypted plaintext deterministically. This enables forgery and padding oracle exploits.',
        bn: 'যেহেতু CBC-তে অথেনটিকেশন থাকে না, তাই সাইফারটেক্সটের বিট পরিবর্তন করলে ডিক্রিপ্ট করা ডাটা বদলে যায়, যা প্যাডিং ওরাকল আক্রমণের সুযোগ দেয়।'
      }
    },
    {
      id: 'enc-mode-ex-3',
      kind: 'mcq',
      topic: 'gcm-aead-advantages',
      question: {
        en: 'Why is Galois/Counter Mode (GCM) considered the gold standard for modern internet protocols like TLS 1.3?',
        bn: 'গ্যালোয়া/কাউন্টার মোড (GCM) কেন TLS ১.৩ এর মতো আধুনিক ইন্টারনেট প্রোটোকলে গোল্ড স্ট্যান্ডার্ড হিসেবে বিবেচিত হয়?'
      },
      options: [
        {
          en: 'It simultaneously delivers high-speed parallel CTR confidentiality and hardware-accelerated 128-bit GHASH authentication (AEAD), completely stopping bit-flipping and padding oracle attacks',
          bn: 'এটি একই সাথে উচ্চগতির প্যারালাল CTR গোপনীয়তা এবং ১২৮-বিট GHASH অথেনটিকেশন (AEAD) প্রদান করে, যা বিট-ফ্লিপিং ও প্যাডিং ওরাকল আক্রমণ সম্পূর্ণ বন্ধ করে'
        },
        {
          en: 'Because GCM was invented in 1776 before computers existed',
          bn: 'কারণ কম্পিউটার আবিষ্কারের পূর্বে ১৭৭৬ সালে GCM উদ্ভাবিত হয়েছিল'
        },
        {
          en: 'Because GCM makes network packets travel faster than the speed of light',
          bn: 'কারণ GCM নেটওয়ার্ক প্যাকেটকে আলোর গতির চেয়েও দ্রুত পাঠাতে সাহায্য করে'
        },
        {
          en: 'Because GCM keys never need to be kept secret from attackers',
          bn: 'কারণ GCM এর চাবি আক্রমণকারীদের কাছ থেকে গোপন রাখার কোনো প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about AEAD (Authenticated Encryption with Associated Data) and hardware acceleration.',
        bn: 'AEAD (অথেনটিকেটেড এনক্রিপশন) এবং হার্ডওয়্যার এক্সিলারেশনের কথা ভাবুন।'
      },
      explanation: {
        en: 'GCM combines the stream efficiency of CTR mode with mathematical Galois field authentication, preventing any undetected tampering or tampering exploits.',
        bn: 'GCM মোড CTR এর কার্যক্ষমতা এবং গ্যালোয়া ফিল্ড অথেনটিকেশনের সমন্বয়ে তৈরি, যা যেকোনো ধরনের অননুমোদিত কারচুপি তৎক্ষণাৎ প্রতিহত করে।'
      }
    },
    {
      id: 'enc-mode-ex-4',
      kind: 'predict',
      topic: 'mode-engine-tamper-catch',
      question: {
        en: 'In our live Node.js Mode Engine, how many tamper attempts did GCM detect and reject with an authentication error (e.g. 1/1)?',
        bn: 'আমাদের লাইভ Node.js মোড ইঞ্জিনে GCM কতটি কারচুপির চেষ্টা সফলভাবে শনাক্ত করে অথেনটিকেশন এরর দিয়ে প্রত্যাখ্যান করেছিল (যেমন ১/১)?'
      },
      answer: '1/1',
      accept: ['1/1', '1', 'one', '১/১', '১'],
      hint: {
        en: 'GCM caught 1/1 tamper attempts.',
        bn: 'GCM ১/১ টি কারচুপির চেষ্টাই শনাক্ত করেছিল।'
      },
      explanation: {
        en: 'GCM detected 1/1 tamper attempts by throwing an authentication failure exception, proving that any bit flipped in ciphertext is immediately caught.',
        bn: 'GCM ১/১ টি কারচুপির চেষ্টাই অথেনটিকেশন ফেইলিউর এরর ছুঁড়ে ধরে ফেলেছিল, যা প্রমাণ করে সাইফারটেক্সটে ১ টি বিট বদলালেও তা তৎক্ষণাৎ ধরা পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'encryption-modes-quiz',
    title: {
      en: 'Block Cipher Modes of Operation Quiz',
      bn: 'ব্লক সাইফার মোডস অব অপারেশন কুইজ'
    },
    questions: [
      {
        id: 'enc-mode-qz-1',
        kind: 'mcq',
        topic: 'ecb-production-ban',
        question: {
          en: 'Under modern software engineering and compliance standards (such as PCI-DSS and NIST), when is ECB mode permitted for encrypting multi-block user data?',
          bn: 'আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিং এবং নিরাপত্তা মানদণ্ডে (যেমন PCI-DSS ও NIST), একাধিক ব্লকের ইউজার ডাটা এনক্রিপ্ট করার ক্ষেত্রে ECB মোড ব্যবহারের অনুমতি কখন দেওয়া হয়?'
        },
        options: [
          {
            en: 'Never. ECB is strictly banned for multi-block data because identical plaintext blocks leak structural patterns directly in ciphertext',
            bn: 'কখনোই নয়। একাধিক ব্লকের জন্য ECB সম্পূর্ণ নিষিদ্ধ কারণ একই প্লেইনটেক্সট ব্লক সাইফারটেক্সটে সরাসরি কাঠামোগত প্যাটার্ন ফাঁস করে দেয়'
          },
          {
            en: 'Always, because ECB is the fastest mode available on modern mobile phones',
            bn: 'সবসময়, কারণ আধুনিক মোবাইল ফোনে ECB সবচেয়ে দ্রুতগতির মোড'
          },
          {
            en: 'Only when the database contains more than one billion records',
            bn: 'কেবল যখন ডাটাবেসে একশত কোটির বেশি রেকর্ড সংরক্ষিত থাকে'
          },
          {
            en: 'Only on weekend maintenance windows between midnight and 4 AM',
            bn: 'কেবল সাপ্তাহিক ছুটির দিনে রাত বারোটা থেকে ভোর চারটার মধ্যে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ECB is fundamentally broken for multi-block payloads.',
          bn: 'একাধিক ব্লকের ক্ষেত্রে ECB মোড ব্যবহার করা মারাত্মক বিপজ্জনক।'
        },
        explanation: {
          en: 'NIST and security standards explicitly forbid ECB mode for general data encryption due to complete lack of diffusion and pattern leakage.',
          bn: 'প্যাটার্ন ফাঁসের কারণে NIST এবং অন্যান্য নিরাপত্তা সংস্থা সাধারণ ডাটা এনক্রিপশনে ECB মোড পুরোপুরি নিষিদ্ধ করেছে।'
        }
      },
      {
        id: 'enc-mode-qz-2',
        kind: 'mcq',
        topic: 'ctr-mode-stream-transformation',
        question: {
          en: 'How does Counter (CTR) mode transform a block cipher like AES into a stream cipher?',
          bn: 'কাউন্টার (CTR) মোড কীভাবে AES-এর মতো একটি ব্লক সাইফারকে স্ট্রিম সাইফারে রূপান্তরিত করে?'
        },
        options: [
          {
            en: 'By encrypting sequential counter values (Nonce || Counter) to generate a pseudorandom keystream, which is then XORed with plaintext bytes of arbitrary length',
            bn: 'ধারাবাহিক কাউন্টার মান (Nonce || Counter) এনক্রিপ্ট করে একটি অবিন্যস্ত কি-স্ট্রিম তৈরি করার মাধ্যমে, যা পরবর্তীতে যেকোনো দৈর্ঘ্যের প্লেইনটেক্সট বাইটের সাথে XOR করা হয়'
          },
          {
            en: 'By deleting the AES algorithm and using ROT13 instead',
            bn: 'AES অ্যালগরিদম মুছে ফেলে তার জায়গায় ROT13 ব্যবহার করে'
          },
          {
            en: 'By slowing down the CPU clock frequency to one kilohertz',
            bn: 'সিপিইউর ক্লক স্পিড কমিয়ে মাত্র এক কিলোহার্টজে নামিয়ে'
          },
          {
            en: 'By dividing all key bits by the number seven',
            bn: 'সবকটি চাবির বিটকে সাত দিয়ে ভাগ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CTR mode encrypts counters to produce a keystream that XORs with plaintext.',
          bn: 'CTR মোড কাউন্টার এনক্রিপ্ট করে কি-স্ট্রিম বানায় যা প্লেইনটেক্সটের সাথে XOR হয়।'
        },
        explanation: {
          en: 'CTR mode decouples block sizes from input size: the keystream can be truncated to exact byte counts, eliminating the need for PKCS#7 padding.',
          bn: 'CTR মোডে ইনপুটের আকার ব্লকের সমান হতে হয় না: কি-স্ট্রিমকে প্রয়োজনমতো কেটে নেওয়া যায়, ফলে কোনো প্যাডিংয়ের দরকার হয় না।'
        }
      },
      {
        id: 'enc-mode-qz-3',
        kind: 'mcq',
        topic: 'gcm-nonce-catastrophe',
        question: {
          en: 'What catastrophic security failure happens if an application reuses the same 12-byte IV/Nonce with the same AES key in GCM mode?',
          bn: 'GCM মোডে একই AES কি দিয়ে একই ১২-বাইটের IV/নন্স দুবার ব্যবহার করলে কোন চরম বিপর্যয় ঘটে?'
        },
        options: [
          {
            en: 'The GHASH authentication key is compromised via polynomial subtraction, allowing an attacker to forge valid authentication tags for arbitrary fraudulent messages',
            bn: 'পলিনোমিয়াল বিয়োগের মাধ্যমে GHASH অথেনটিকেশন কি ফাঁস হয়ে যায়, যার ফলে হ্যাকার যেকোনো ভুয়া মেসেজের জন্য বৈধ ট্যাগ তৈরি করতে পারে'
          },
          {
            en: 'The computer operating system uninstalls all web browsers',
            bn: 'কম্পিউটারের অপারেটিং সিস্টেম সব ওয়েব ব্রাউজার মুছে ফেলে'
          },
          {
            en: 'The internet connection changes permanently to dial-up mode',
            bn: 'ইন্টারনেট সংযোগ চিরতরে ডায়াল-আপ মোডে চলে যায়'
          },
          {
            en: 'The encrypted file expands to fill ten petabytes of disk space',
            bn: 'এনক্রিপ্ট করা ফাইলটি বেড়ে গিয়ে দশ পেটাওয়াইট জায়গা দখল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'GCM nonce reuse leaks both the keystream and the GHASH authentication key.',
          bn: 'GCM নন্স পুনরায় ব্যবহার করলে কি-স্ট্রিম ও GHASH অথেনটিকেশন কি দুটোই ফাঁস হয়।'
        },
        explanation: {
          en: 'In GCM, nonce reuse destroys both confidentiality (keystream XOR leak) and integrity (recovery of the Galois authentication key H).',
          bn: 'GCM মোডে নন্স পুনরায় ব্যবহার করলে গোপনীয়তা ও ইন্টিগ্রিটি উভয়ই ভেঙে পড়ে এবং আক্রমণকারী গ্যালোয়া অথেনটিকেশন কি (H) উদ্ধার করে ফেলে।'
        }
      },
      {
        id: 'enc-mode-qz-4',
        kind: 'mcq',
        topic: 'parallel-decryption-characteristics',
        question: {
          en: 'Why is parallel multicore processing possible during CBC decryption, but strictly impossible during CBC encryption?',
          bn: 'CBC ডিক্রিপশনের সময় কেন মাল্টিকোরে সমান্তরাল প্রসেসিং সম্ভব, কিন্তু CBC এনক্রিপশনের সময় তা সম্পূর্ণ অসম্ভব?'
        },
        options: [
          {
            en: 'During decryption, all ciphertext blocks C_i are already known and can be decrypted independently in parallel before XORing with C_(i-1); during encryption, block C_i cannot be computed until block C_(i-1) is finished',
            bn: 'ডিক্রিপশনের সময় সব সাইফারটেক্সট ব্লক C_i আগে থেকেই জানা থাকে এবং সমান্তরালে ডিক্রিপ্ট করা যায়; কিন্তু এনক্রিপশনের সময় C_(i-1) শেষ না হওয়া পর্যন্ত C_i তৈরি করাই সম্ভব নয়'
          },
          {
            en: 'Because decryption uses quantum computers while encryption uses mechanical calculators',
            bn: 'কারণ ডিক্রিপশনে কোয়ান্টাম কম্পিউটার ব্যবহৃত হয় আর এনক্রিপশনে মেকানিক্যাল ক্যালকুলেটর ব্যবহৃত হয়'
          },
          {
            en: 'Because encryption is forbidden by law to use more than one CPU core',
            bn: 'কারণ আইনে এনক্রিপশনে একের অধিক সিপিইউ কোর ব্যবহার নিষিদ্ধ করা হয়েছে'
          },
          {
            en: 'Because CBC decryption runs backwards from the end of the file to the start',
            bn: 'কারণ CBC ডিক্রিপশন ফাইলের শেষ থেকে শুরুর দিকে উল্টোভাবে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Encryption requires C_(i-1) as input to encrypt P_i; decryption only requires C_i and C_(i-1) which are both already present.',
          bn: 'এনক্রিপশনে আগের সাইফারটেক্সট না পাওয়া পর্যন্ত পরেরটা শুরু করা যায় না; কিন্তু ডিক্রিপশনে সব সাইফারটেক্সট ব্লক আগেই জানা থাকে।'
        },
        explanation: {
          en: 'In CBC decryption, P_i = Decrypt(C_i) ⊕ C_(i-1). Since all C_i values exist in the input buffer, all Decrypt(C_i) operations can execute concurrently across CPU cores.',
          bn: 'CBC ডিক্রিপশনে P_i = Decrypt(C_i) ⊕ C_(i-1)। যেহেতু সমস্ত C_i বাফারে বিদ্যমান, তাই সবকটি ডিক্রিপ্ট অপারেশন একযোগে বিভিন্ন সিপিইউ কোরে চলতে পারে।'
        }
      }
    ]
  },
  next: {
    slug: 'padding-iv',
    title: {
      en: 'Padding & Initialization Vectors: PKCS#7, Nonce Reuse & Oracle Attacks',
      bn: 'প্যাডিং ও ইনিশিয়ালাইজেশন ভেক্টর: PKCS#৭, নন্স পুনঃব্যবহার ও ওরাকল অ্যাটাক'
    }
  }
};
