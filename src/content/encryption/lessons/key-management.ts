import type { Lesson } from '../../../lib/types';

export const KeyManagementLesson: Lesson = {
  slug: 'key-management',
  tech: 'encryption',
  title: {
    en: 'Key Management & KMS: Key Derivation, Rotation & Envelope Encryption',
    bn: 'চাবি ব্যবস্থাপনা ও KMS: কি ডেরিভেশন, রোটেশন ও এনভেলপ এনক্রিপশন'
  },
  summary: {
    en: 'Master cryptographic key lifecycles, key derivation functions (PBKDF2, scrypt, Argon2id, HKDF), envelope encryption (DEK vs KEK), rotation strategies, and Hardware Security Modules (HSMs) in modern cloud security.',
    bn: 'আধুনিক ক্লাউড সিকিউরিটিতে ক্রিপ্টোগ্রাফিক কি লাইফসাইকেল, কি ডেরিভেশন ফাংশন (PBKDF2, scrypt, Argon2id, HKDF), এনভেলপ এনক্রিপশন (DEK বনাম KEK), কি রোটেশন কৌশল এবং হার্ডওয়্যার সিকিউরিটি মডিউল (HSM) আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'key-management-imperative',
      text: {
        en: 'The Core Challenge of Cryptography: Key Management',
        bn: 'ক্রিপ্টোগ্রাফির মূল চ্যালেঞ্জ: চাবি ব্যবস্থাপনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern applied cryptography, mathematicians and cryptanalysts rarely break AES-256 or ChaCha20 directly. Instead, real-world breaches almost universally stem from compromised, hardcoded, or mismanaged cryptographic keys. Auguste Kerckhoffs established in 1883 that a cryptographic system must remain secure even if everything about the system except the key is public knowledge. If an adversary accesses your key, all encryption mathematical guarantees immediately vanish.',
        bn: 'আধুনিক ফলিত ক্রিপ্টোগ্রাফিতে গণিতবিদ বা আক্রমণকারীরা কদাচিৎ AES-২৫৬ বা ChaCha20 সরাসরি ভাঙতে পারেন। বরং বাস্তব বিশ্বের নিরাপত্তা লঙ্ঘনগুলো প্রায় শতভাগ ক্ষেত্রেই ঘটে ভুল ব্যবস্থাপনা, হার্ডকোড করা বা চুরি যাওয়া ক্রিপ্টোগ্রাফিক চাবির কারণে। ১৮৮৩ সালে অগাস্ট কার্কহফ নীতি নির্ধারণ করেছিলেন যে, চাবি ছাড়া একটি ক্রিপ্টোগ্রাফিক সিস্টেমের সমস্ত মেকানিজম সর্বসাধারণের জানা থাকলেও তা সুরক্ষিত থাকতে হবে। আক্রমণকারী যদি আপনার গোপন চাবিটি পেয়ে যায়, তবে সমস্ত গাণিতিক সুরক্ষা তাৎক্ষণিকভাবে বিলুপ্ত হয়ে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Data Encryption Key (DEK)',
          def: {
            en: 'A fast symmetric key generated locally to encrypt a specific file, database row, or data block.',
            bn: 'একটি দ্রুত প্রতিসম চাবি যা একটি নির্দিষ্ট ফাইল, ডাটাবেস রো বা ডাটা ব্লক এনক্রিপ্ট করার জন্য স্থানীয়ভাবে তৈরি করা হয়।'
          }
        },
        {
          term: 'Key Encryption Key (KEK)',
          def: {
            en: 'A highly guarded master key that resides permanently inside an HSM or KMS to wrap and protect DEKs.',
            bn: 'একটি অত্যন্ত সুরক্ষিত মাস্টার কি যা DEK এনক্রিপ্ট বা মোড়কবদ্ধ করার জন্য স্থায়ীভাবে HSM বা KMS-এর ভেতর সংরক্ষিত থাকে।'
          }
        },
        {
          term: 'Envelope Encryption',
          def: {
            en: 'A hybrid security pattern where data is encrypted by a DEK, and the DEK is encrypted by a master KEK.',
            bn: 'একটি হাইব্রিড নিরাপত্তা প্যাটার্ন যেখানে মূল ডাটা DEK দিয়ে এনক্রিপ্ট হয় এবং সেই DEK মাস্টার KEK দিয়ে এনক্রিপ্ট করা হয়।'
          }
        },
        {
          term: 'Crypto-Shredding',
          def: {
            en: 'Irrevocably deleting a key to render all data previously encrypted under it permanently unreadable.',
            bn: 'একটি মাস্টার চাবি চিরতরে মুছে ফেলার প্রক্রিয়া যার মাধ্যমে সেই চাবি দিয়ে এনক্রিপ্ট করা সব ডাটা স্থায়ীভাবে অপাঠ্য হয়ে যায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'key-derivation-functions',
      text: {
        en: 'Key Derivation Functions: From Passwords to Cryptographic Keys',
        bn: 'কি ডেরিভেশন ফাংশন: পাসওয়ার্ড থেকে ক্রিপ্টোগ্রাফিক চাবি তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Human passwords lack cryptographic entropy. A typical user password contains only 30 to 40 bits of entropy, whereas AES-256 requires 256 bits of uniformly random binary data. You cannot safely feed a raw password directly into AES. Furthermore, standard cryptographic hashes like SHA-256 are engineered to be extremely fast for file integrity. Modern GPU clusters calculate tens of billions of SHA-256 hashes per second, making raw hashed passwords trivially vulnerable to offline brute-force and rainbow table attacks.',
        bn: 'মানুষের তৈরি পাসওয়ার্ডে ক্রিপ্টোগ্রাফিক এন্ট্রপি অনেক কম থাকে। একজন সাধারণ ব্যবহারকারীর পাসওয়ার্ডে মাত্র ৩০ থেকে ৪০ বিট এন্ট্রপি থাকে, যেখানে AES-২৫৬ এর জন্য প্রয়োজন ২৫৬ বিট সম্পূর্ণ অবিন্যস্ত বাইনারি ডাটা। সাধারণ পাসওয়ার্ড সরাসরি কোনো সাইফারে ইনপুট দেওয়া বিপজ্জনক। উপরন্তু, SHA-২৫৬ এর মতো সাধারণ হ্যাশ ফাংশনগুলো ফাইলের ইন্টিগ্রিটি যাচাইয়ের জন্য অতি দ্রুত গতিতে চলার উপযোগী করে তৈরি। আধুনিক জিপিইউ ক্লাস্টার প্রতি সেকেন্ডে কোটি কোটি SHA-২৫৬ হ্যাশ গণনা করতে পারে, যার ফলে সাধারণ হ্যাশিং সরাসরি অফলাইন ব্রুট-ফোর্স আক্রমণের মুখে ভেঙে পড়ে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'KDF Algorithm', bn: 'KDF অ্যালগরিদম' },
        { en: 'Primary Defense Mechanism', bn: 'প্রধান প্রতিরক্ষা কৌশল' },
        { en: 'Ideal Production Use Case', bn: 'উত্তম প্রোডাকশন ব্যবহার' }
      ],
      rows: [
        [
          { en: 'PBKDF2 (RFC 2898)', bn: 'PBKDF2 (RFC ২৮৯৮)' },
          { en: 'CPU iterations (e.g. 600,000 rounds of HMAC-SHA256)', bn: 'সিপিইউ পুনরাবৃত্তি (যেমন ৬০০,০০০ রাউন্ড HMAC-SHA256)' },
          { en: 'Legacy enterprise compliance and mobile credential storage', bn: 'লিগ্যাসি এন্টারপ্রাইজ কমপ্লায়েন্স ও মোবাইল ক্রেডেনশিয়াল সংরক্ষণ' }
        ],
        [
          { en: 'scrypt (RFC 7914)', bn: 'scrypt (RFC ৭৯১৪)' },
          { en: 'Memory-hard vector lookups to defeat custom ASIC hardware', bn: 'কাস্টম ASIC চিপ রুখতে মেমোরি-হার্ড ভেক্টর লুকআপ' },
          { en: 'Cryptocurrency wallets and file encryption tools', bn: 'ক্রিপ্টোকারেন্সি ওয়ালেট এবং ফাইল এনক্রিপশন টুলস' }
        ],
        [
          { en: 'Argon2id (RFC 9106)', bn: 'Argon2id (RFC ৯১০৬)' },
          { en: 'Hybrid memory hardness plus side-channel timing resistance', bn: 'হাইব্রিড মেমোরি কাঠিন্য ও সাইড-চ্যানেল টাইমিং প্রতিরোধ' },
          { en: 'Modern user password hashing and secure token derivation', bn: 'আধুনিক ইউজার পাসওয়ার্ড হ্যাশিং ও সুরক্ষিত টোকেন ডেরিভেশন' }
        ],
        [
          { en: 'HKDF (RFC 5869)', bn: 'HKDF (RFC ৫৮৬৯)' },
          { en: 'HMAC Extract-and-Expand from high-entropy master secrets', bn: 'উচ্চ এন্ট্রপির মাস্টার সিক্রেট থেকে HMAC এক্সট্রাক্ট-অ্যান্ড-এক্সপ্যান্ড' },
          { en: 'Deriving TLS 1.3 handshake, write, and traffic keys', bn: 'TLS ১.৩ হ্যান্ডশেক, রাইট ও নেটওয়ার্ক ট্রাফিক কি ডেরিভেশন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'envelope-encryption-architecture',
      text: {
        en: 'Envelope Encryption Architecture: Scalable Key Protection',
        bn: 'এনভেলপ এনক্রিপশন আর্কিটেকচার: স্কেলযোগ্য চাবি সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In cloud enterprise environments, encrypting all multi-gigabyte database records and media files directly with an HSM or Cloud KMS (such as AWS KMS, Google Cloud KMS, or HashiCorp Vault) is impractical. KMS APIs impose request rate limits, charge per cryptographic call, and cannot ingest gigabytes of payload across network RPC boundaries. Envelope encryption solves this elegantly by decoupling payload encryption from master key protection.',
        bn: 'ক্লাউড এন্টারপ্রাইজ সিস্টেমে সরাসরি কোনো HSM বা Cloud KMS (যেমন AWS KMS, Google Cloud KMS বা HashiCorp Vault) দিয়ে গিগাবাইটের পর গিগাবাইট ডাটাবেস রেকর্ড বা মিডিয়া ফাইল এনক্রিপ্ট করা অসম্ভব। ক্লাউড KMS এপিআইতে রিকোয়েস্ট রেট লিমিট থাকে, প্রতি কলের জন্য বিল আসে এবং নেটওয়ার্ক দিয়ে বিশাল সাইজের পেলোড আদান-প্রদান করা যায় না। এনভেলপ এনক্রিপশন ডাটা এনক্রিপশন এবং মাস্টার কি সুরক্ষাকে আলাদা করে এই সমস্যার চমৎকার সমাধান দেয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Envelope Encryption Architecture: DEK Generation and Data Sealing',
        bn: 'এনভেলপ এনক্রিপশন আর্কিটেকচার: DEK তৈরি ও ডাটা সিলিং'
      },
      svg: `<svg viewBox="0 0 860 380" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <defs>
    <linearGradient id="bgKms" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="bgApp" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#022c22" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="bgStore" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#701a75" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#4a044e" stop-opacity="0.3"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1"/>
    </marker>
    <marker id="arrowGrn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <rect width="860" height="380" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="2"/>

  <!-- KMS Boundary -->
  <rect x="30" y="30" width="230" height="320" rx="12" fill="url(#bgKms)" stroke="#6366f1" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="145" y="60" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">Cloud KMS / HSM</text>
  <text x="145" y="80" text-anchor="middle" fill="#94a3b8" font-size="11">Hardware Security Boundary</text>
  <rect x="50" y="105" width="190" height="55" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
  <text x="145" y="128" text-anchor="middle" fill="#e0e7ff" font-size="12" font-weight="bold">Master KEK (256-bit)</text>
  <text x="145" y="146" text-anchor="middle" fill="#a5b4fc" font-size="10">Never leaves HSM hardware</text>
  <rect x="50" y="210" width="190" height="60" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1"/>
  <text x="145" y="234" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="bold">GenerateDataKey API</text>
  <text x="145" y="252" text-anchor="middle" fill="#94a3b8" font-size="10">Returns: Plain + Wrapped DEK</text>

  <!-- Application Server Boundary -->
  <rect x="300" y="30" width="260" height="320" rx="12" fill="url(#bgApp)" stroke="#10b981" stroke-width="2"/>
  <text x="430" y="60" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">Application Server Memory</text>
  <text x="430" y="80" text-anchor="middle" fill="#94a3b8" font-size="11">Volatile Execution Context</text>

  <rect x="320" y="105" width="220" height="50" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="430" y="126" text-anchor="middle" fill="#ecfdf5" font-size="12" font-weight="bold">Plaintext DEK (Ephemeral)</text>
  <text x="430" y="143" text-anchor="middle" fill="#a7f3d0" font-size="10">Used once, then zeroized in RAM</text>

  <rect x="320" y="180" width="220" height="50" rx="8" fill="#022c22" stroke="#10b981" stroke-width="1"/>
  <text x="430" y="202" text-anchor="middle" fill="#d1fae5" font-size="11" font-weight="bold">AES-256-GCM Local Engine</text>
  <text x="430" y="219" text-anchor="middle" fill="#6ee7b7" font-size="10">Fast gigabyte payload encryption</text>

  <rect x="320" y="255" width="220" height="70" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1"/>
  <text x="430" y="278" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="bold">Plaintext Data (Customer Record)</text>
  <text x="430" y="296" text-anchor="middle" fill="#6ee7b7" font-size="10">Input string or binary file</text>
  <text x="430" y="313" text-anchor="middle" fill="#fbbf24" font-size="9">Never transmitted to KMS</text>

  <!-- Storage Boundary -->
  <rect x="600" y="30" width="230" height="320" rx="12" fill="url(#bgStore)" stroke="#c084fc" stroke-width="2"/>
  <text x="715" y="60" text-anchor="middle" fill="#e879f9" font-size="14" font-weight="bold">Persistent Storage / DB</text>
  <text x="715" y="80" text-anchor="middle" fill="#94a3b8" font-size="11">Resting Encrypted Envelopes</text>

  <rect x="620" y="115" width="190" height="85" rx="8" fill="#4a044e" stroke="#c084fc" stroke-width="1.5"/>
  <text x="715" y="140" text-anchor="middle" fill="#fae8ff" font-size="12" font-weight="bold">Sealed Envelope</text>
  <text x="715" y="162" text-anchor="middle" fill="#f0abfc" font-size="10">1. Wrapped DEK (Base64)</text>
  <text x="715" y="180" text-anchor="middle" fill="#e879f9" font-size="10">2. Ciphertext + IV + GCM Tag</text>

  <rect x="620" y="235" width="190" height="65" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="1"/>
  <text x="715" y="260" text-anchor="middle" fill="#e9d5ff" font-size="11" font-weight="bold">Safe From Leakage</text>
  <text x="715" y="278" text-anchor="middle" fill="#c084fc" font-size="9">Stolen DB is useless without KEK</text>

  <!-- Connection Arrows -->
  <path d="M 240 240 L 320 135" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M 540 130 L 620 140" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrowGrn)"/>
  <path d="M 540 215 L 620 165" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrowGrn)"/>
</svg>`,
      caption: {
        en: 'Envelope Encryption separates master key protection in an HSM/KMS from high-speed local data encryption using ephemeral DEKs.',
        bn: 'এনভেলপ এনক্রিপশন সিস্টেম HSM/KMS-এর মাস্টার কি সুরক্ষাকে অ্যাপ্লিকেশনের লোকাল দ্রুতগতির DEK ডাটা এনক্রিপশন থেকে সম্পূর্ণ স্বাধীন রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'step-by-step-workflow',
      text: {
        en: 'The 4 Stages of the Envelope Encryption Lifecycle',
        bn: 'এনভেলপ এনক্রিপশন লাইফসাইকেলের ৪টি পর্যায়'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Request Data Key from KMS',
            bn: '১. KMS থেকে ডাটা কি চাওয়া'
          },
          text: {
            en: 'The application calls the KMS API requesting a new Data Encryption Key under a designated Key Encryption Key (KEK). KMS generates 32 cryptographically secure random bytes, encrypts them with the KEK, and returns both the plaintext DEK and the encrypted (wrapped) DEK.',
            bn: 'অ্যাপ্লিকেশন নির্দিষ্ট Key Encryption Key (KEK)-এর অধীনে একটি নতুন Data Encryption Key চেয়ে KMS এপিআই কল করে। KMS ৩২ বাইটের অবিন্যস্ত র্যান্ডম ডাটা তৈরি করে, তা KEK দিয়ে এনক্রিপ্ট করে এবং প্লেইনটেক্সট DEK ও এনক্রিপ্ট করা (র‌্যাপড) DEK ফেরত পাঠায়।'
          }
        },
        {
          title: {
            en: '2. Local High-Speed Encryption',
            bn: '২. লোকাল দ্রুতগতির এনক্রিপশন'
          },
          text: {
            en: 'The application uses the plaintext DEK to encrypt large payload data in local memory using AES-256-GCM. Because this encryption happens locally, high-bandwidth data never crosses network interfaces to KMS, eliminating latency bottlenecks.',
            bn: 'অ্যাপ্লিকেশন স্থানীয় মেমরিতে AES-২৫৬-GCM ব্যবহার করে বড় আকারের ডাটা প্লেইনটেক্সট DEK দিয়ে এনক্রিপ্ট করে। যেহেতু এনক্রিপশন লোকাল প্রসেসরে ঘটে, তাই বিশাল পরিমাণের ডাটা নেটওয়ার্ক পার হয়ে KMS-এ পাঠাতে হয় না, ফলে লেটেন্সি সম্পূর্ণ দূর হয়।'
          }
        },
        {
          title: {
            en: '3. Immediate Memory Zeroization',
            bn: '৩. তাৎক্ষণিক মেমরি জিরোয়াইজেশন'
          },
          text: {
            en: 'As soon as data encryption completes, the application securely wipes the plaintext DEK buffer from volatile RAM (zeroization using buffer.fill(0)). The plaintext DEK is never written to disk, databases, or application log files.',
            bn: 'ডাটা এনক্রিপ্ট হওয়ার সাথে সাথে অ্যাপ্লিকেশনটি র্যান্ডম অ্যাক্সেস মেমরি (RAM) থেকে প্লেইনটেক্সট DEK বাফার শূন্য দিয়ে মুছে ফেলে (buffer.fill(০))। প্লেইনটেক্সট DEK কখনো ডিস্কে, ডাটাবেসে বা অ্যাপ্লিকেশনের লগ ফাইলে লেখা হয় না।'
          }
        },
        {
          title: {
            en: '4. Envelope Storage & Decryption',
            bn: '৪. এনভেলপ সংরক্ষণ ও ডিক্রিপশন'
          },
          text: {
            en: 'The application persists the wrapped DEK alongside the ciphertext and auth tag. To read the record later, the app sends the wrapped DEK to KMS. KMS unwraps the DEK using the master KEK, allowing local decryption of the payload.',
            bn: 'অ্যাপ্লিকেশনটি সাইফারটেক্সট এবং অথেনটিকেশন ট্যাগের সাথে এনক্রিপ্ট করা DEK ডাটাবেসে সংরক্ষণ করে। ভবিষ্যতে ডাটা পড়ার জন্য অ্যাপ্লিকেশনটি কেবল এনক্রিপ্ট করা DEK-টি KMS-এ পাঠায়। KMS মাস্টার KEK দিয়ে DEK খুলে দিলে লোকাল মেমরিতে মূল ডাটা ডিক্রিপ্ট করা হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'key-rotation-and-crypto-shredding',
      text: {
        en: 'Key Rotation Strategies and Crypto-Shredding',
        bn: 'কি রোটেশন কৌশল ও ক্রিপ্টো-শ্রেডিং'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Automatic Master Key Rotation: Cloud KMS services allow setting a rotation period (e.g. annually or every 90 days). KMS creates a new backing key version for encryption while keeping older versions active solely for decrypting existing records.',
          bn: 'স্বয়ংক্রিয় মাস্টার কি রোটেশন: ক্লাউড KMS সার্ভিসে নির্দিষ্ট সময় পর পর (যেমন প্রতি বছর বা প্রতি ৯০ দিনে) চাবি পরিবর্তনের ব্যবস্থা থাকে। KMS নতুন ডাটা এনক্রিপ্ট করার জন্য নতুন কি তৈরি করে, আর পুরানো কি-গুলোকে কেবল আগের ডাটা ডিক্রিপ্ট করার জন্য কার্যকর রাখে।'
        },
        {
          en: 'Instant Crypto-Shredding: When a customer invokes the GDPR "Right to be Forgotten", deleting their unique master KEK renders all encrypted data unrecoverable. Millions of records across backups become unreadable in 1 millisecond without scanning storage.',
          bn: 'তাৎক্ষণিক ক্রিপ্টো-শ্রেডিং: গ্রাহক যখন GDPR এর আওতায় তথ্য মুছে ফেলার অনুরোধ জানান, তখন তার নির্দিষ্ট মাস্টার KEK মুছে দিলে সমস্ত এনক্রিপ্ট করা ডাটা অপ্রাপ্য হয়ে যায়। ব্যাকআপে থাকা লক্ষ লক্ষ রেকর্ড কোনো স্ক্যান ছাড়াই মাত্র ১ মিলিসেকেন্ডে স্থায়ীভাবে বাতিল হয়।'
        },
        {
          en: 'Blast Radius Limitation: Reusing a single static key across millions of records creates catastrophic liability. If that key leaks, every record in company history is exposed. With Envelope Encryption, compromising a single DEK exposes only one record.',
          bn: 'ক্ষতির পরিধি বা ব্লাস্ট রেডিয়াস হ্রাস: লক্ষ লক্ষ রেকর্ডের জন্য একটিমাত্র চাবি ব্যবহার করা মারাত্মক ঝুঁকিপূর্ণ। সেই চাবিটি কোনোভাবে ফাঁস হলে কোম্পানির সমস্ত রেকর্ড চুরি হয়ে যায়। এনভেলপ এনক্রিপশনে একটি DEK ফাঁস হলেও কেবল একটি রেকর্ডই উন্মুক্ত হয়।'
        }
      ]
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Never Store Keys in Source Code or Git Repositories',
        bn: 'কখনোই সোর্স কোড বা গিট রিপোজিটরিতে চাবি রাখবেন না'
      },
      text: {
        en: 'Automated internet crawlers continuously scan public GitHub repositories for AWS secrets, private keys, and API tokens within seconds of a commit. Never hardcode cryptographic keys in code. Use environment variables injected at runtime, secret managers (HashiCorp Vault, AWS Secrets Manager), or cloud IAM-authenticated KMS.',
        bn: 'স্বয়ংক্রিয় বটগুলো পাবলিক গিটহাব রিপোজিটরিতে নতুন কমিট হওয়া মাত্র কয়েক সেকেন্ডের মধ্যে এডব্লিউএস সিক্রেট, প্রাইভেট কি এবং এপিআই টোকেন স্ক্যান করে চুরি করে নেয়। সোর্স কোডে কখনো ক্রিপ্টোগ্রাফিক কি হার্ডকোড করবেন না। এর বদলে রানটাইম এনভায়রনমেন্ট ভেরিয়েবল, সিক্রেট ম্যানেজার (HashiCorp Vault, AWS Secrets Manager) বা ক্লাউড IAM-যুক্ত KMS ব্যবহার করুন।'
      }
    },
    {
      type: 'heading',
      id: 'executable-kms-engine',
      text: {
        en: 'Executable Node.js KMS Envelope Encryption Engine',
        bn: 'এক্সিকিউটেবল Node.js KMS এনভেলপ এনক্রিপশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Here is a complete, runnable Node.js implementation of an Envelope Encryption engine. It models an isolated KMS hardware master key (KEK), generates distinct 256-bit DEKs per record, securely wraps the DEKs with AES-256-GCM, encrypts 3 sensitive enterprise records, zeroizes keys in memory, and verifies 100% unwrapping and decryption fidelity.',
        bn: 'নিচে একটি স্বয়ংসম্পূর্ণ এবং কার্যকর Node.js এনভেলপ এনক্রিপশন ইঞ্জিনের কোড দেওয়া হলো। এটি একটি হার্ডওয়্যার সিকিউরিটি মডিউলের মাস্টার কি (KEK) অনুকরণ করে, প্রতি রেকর্ডের জন্য পৃথক ২৫৬-বিট DEK তৈরি করে, AES-২৫৬-GCM দিয়ে DEK মোড়কবদ্ধ করে, ৩ টি স্পর্শকাতর এন্টারপ্রাইজ রেকর্ড এনক্রিপ্ট করে, মেমরি থেকে কি মুছে ফেলে এবং ১০০% নির্ভুলভাবে ৩/৩ টি রেকর্ড উদ্ধার করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run with node: Envelope Encryption with AES-256-GCM DEK wrapping and memory zeroization',
        bn: 'node দিয়ে চালান: AES-২৫৬-GCM DEK মোড়কবদ্ধকরণ ও মেমরি জিরোয়াইজেশন সহ এনভেলপ এনক্রিপশন'
      },
      code: `const crypto = require('crypto');

// Simulated secure KMS Hardware Security Module (Master KEK)
const masterKEK = crypto.randomBytes(32);

// KMS API: Generates a fresh DEK and returns plaintext DEK + wrapped DEK
function kmsGenerateDataKey() {
  const plaintextDEK = crypto.randomBytes(32);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', masterKEK, iv);
  const encryptedDEK = Buffer.concat([cipher.update(plaintextDEK), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    plaintextDEK,
    wrappedDEK: {
      ciphertext: encryptedDEK.toString('base64'),
      iv: iv.toString('base64'),
      tag: tag.toString('base64')
    }
  };
}

// KMS API: Unwraps a wrapped DEK using master KEK inside the secure boundary
function kmsDecryptDataKey(wrapped) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', masterKEK, Buffer.from(wrapped.iv, 'base64'));
  decipher.setAuthTag(Buffer.from(wrapped.tag, 'base64'));
  const plaintextDEK = Buffer.concat([decipher.update(Buffer.from(wrapped.ciphertext, 'base64')), decipher.final()]);
  return plaintextDEK;
}

// Client App: Encrypts data locally with ephemeral DEK, then zeroizes DEK
function encryptEnvelope(record) {
  const { plaintextDEK, wrappedDEK } = kmsGenerateDataKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', plaintextDEK, iv);
  const ciphertext = Buffer.concat([cipher.update(record, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  // Securely wipe plaintext DEK from RAM
  plaintextDEK.fill(0);
  return {
    wrappedDEK,
    payload: {
      ciphertext: ciphertext.toString('base64'),
      iv: iv.toString('base64'),
      tag: tag.toString('base64')
    }
  };
}

// Client App: Requests KMS to unwrap DEK, decrypts payload, zeroizes DEK
function decryptEnvelope(envelope) {
  const plaintextDEK = kmsDecryptDataKey(envelope.wrappedDEK);
  const decipher = crypto.createDecipheriv('aes-256-gcm', plaintextDEK, Buffer.from(envelope.payload.iv, 'base64'));
  decipher.setAuthTag(Buffer.from(envelope.payload.tag, 'base64'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(envelope.payload.ciphertext, 'base64')), decipher.final()]);
  plaintextDEK.fill(0);
  return decrypted.toString('utf8');
}

// Enterprise dataset: 3 sensitive production records
const records = [
  "Patient #4081: Cardiac telemetry normal, beta-blocker 25mg",
  "User #9924: Primary banking authorization token 8f9b2",
  "Audit #1105: System root access authorized by SecOps"
];

const envelopes = records.map(encryptEnvelope);
let recoveredCount = 0;
envelopes.forEach((env, idx) => {
  const recovered = decryptEnvelope(env);
  if (recovered === records[idx]) recoveredCount++;
});

console.log(\`[KMS Engine] 3 records processed: 3 sealed envelopes, \${recoveredCount}/3 successfully unwrapped & decrypted.\`);
console.log(\`[Audit Log] Master KEK: 256-bit, DEKs rotated: 3, Zeroized in RAM: 3.\`);`
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive Envelope Encryption Playground',
        bn: 'ইন্টারেক্টিভ এনভেলপ এনক্রিপশন প্লেগ্রাউন্ড'
      },
      html: `<h3>Envelope Encryption Inspector</h3>
<p>Inspect the two layers of key wrapping and envelope storage.</p>
<div style="display:flex;gap:10px;margin-bottom:12px;">
  <button id="sealBtn" style="padding:8px 14px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Seal 3 Envelopes</button>
  <button id="unwrapBtn" style="padding:8px 14px;background:#10b981;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Unwrap & Decrypt</button>
</div>
<pre id="kmsOut" style="background:#0f172a;color:#38bdf8;padding:12px;border-radius:8px;font-family:monospace;white-space:pre-wrap;font-size:13px;border:1px solid #1e293b;min-height:90px;">Click "Seal 3 Envelopes" to begin cryptographic key wrapping...</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }`,
      js: `const sampleRecords = [
  "Patient #4081: Cardiac telemetry normal, beta-blocker 25mg",
  "User #9924: Primary banking authorization token 8f9b2",
  "Audit #1105: System root access authorized by SecOps"
];
let sealedStore = [];

document.getElementById('sealBtn').addEventListener('click', () => {
  sealedStore = sampleRecords.map((rec, i) => {
    return {
      id: i + 1,
      wrappedDEK: "KMS_WRAPPED_DEK_" + Math.random().toString(36).substring(2, 10).toUpperCase() + "_[AES256GCM]",
      ciphertext: "CIPHER_" + btoa(rec).substring(0, 24) + "...[GCM_TAG_VALID]",
      original: rec
    };
  });
  document.getElementById('kmsOut').textContent = 
    "[KMS Engine] 3 records processed: 3 sealed envelopes generated!\\n" +
    sealedStore.map(s => "Envelope #" + s.id + ":\\n  • Wrapped DEK: " + s.wrappedDEK + "\\n  • Payload: " + s.ciphertext).join("\\n");
});

document.getElementById('unwrapBtn').addEventListener('click', () => {
  if (!sealedStore.length) {
    document.getElementById('kmsOut').textContent = "Please click 'Seal 3 Envelopes' first.";
    return;
  }
  document.getElementById('kmsOut').textContent = 
    "[KMS Engine] KMS unwrapped 3/3 DEKs using Master KEK.\\n" +
    "[Result] All 3 sensitive records restored perfectly in RAM with memory zeroization complete!";
});`
    }
  ],
  exercises: [
    {
      id: 'enc-km-ex-1',
      kind: 'mcq',
      topic: 'envelope-encryption-benefits',
      question: {
        en: 'What is the primary architectural advantage of Envelope Encryption over sending full files directly to a cloud KMS?',
        bn: 'পুরো ফাইল ক্লাউড KMS-এ সরাসরি পাঠানোর বদলে এনভেলপ এনক্রিপশন ব্যবহারের প্রধান স্থাপত্যগত সুবিধা কী?'
      },
      options: [
        {
          en: 'Large data is encrypted locally using an ephemeral DEK, eliminating network bandwidth bottlenecks and KMS payload size limits while keeping the master KEK secure inside the HSM',
          bn: 'একটি ক্ষণস্থায়ী DEK দিয়ে লোকাল মেমরিতে বড় ডাটা দ্রুত এনক্রিপ্ট হয়, যা নেটওয়ার্কের জ্যাম ও KMS সাইজ লিমিট দূর করে এবং মাস্টার KEK সর্বদা সুরক্ষিত HSM-এ থাকে'
        },
        {
          en: 'Because envelope encryption removes the need for any secret keys',
          bn: 'কারণ এনভেলপ এনক্রিপশন ব্যবহার করলে কোনো গোপন চাবির প্রয়োজন হয় না'
        },
        {
          en: 'Because cloud KMS can only process data between 9 AM and 5 PM',
          bn: 'কারণ ক্লাউড KMS কেবল সকাল ৯ টা থেকে বিকেল ৫ টার মধ্যে ডাটা প্রসেস করতে পারে'
        },
        {
          en: 'Because envelope encryption compresses video files by ninety percent',
          bn: 'কারণ এনভেলপ এনক্রিপশন ভিডিও ফাইলকে নব্বই শতাংশ ছোট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about network latency, payload size limits, and HSM master key protection.',
        bn: 'নেটওয়ার্ক লেটেন্সি, ফাইল সাইজের সীমাবদ্ধতা এবং HSM মাস্টার কি সুরক্ষার কথা ভাবুন।'
      },
      explanation: {
        en: 'Envelope encryption provides high performance: only the small 32-byte DEK travels to KMS, while multi-gigabyte payloads are encrypted locally at full hardware speed.',
        bn: 'এনভেলপ এনক্রিপশন দুর্দান্ত পারফরম্যান্স দেয়: KMS-এ কেবল ৩২ বাইটের ছোট চাবিটি যায়, আর বিশাল ফাইল লোকাল মেমরিতে পূর্ণ গতিতে এনক্রিপ্ট হয়।'
      }
    },
    {
      id: 'enc-km-ex-2',
      kind: 'mcq',
      topic: 'argon2id-vs-sha256',
      question: {
        en: 'Why should a system use Argon2id or scrypt rather than raw SHA-256 to derive cryptographic keys from user passwords?',
        bn: 'ইউজার পাসওয়ার্ড থেকে ক্রিপ্টোগ্রাফিক কি তৈরির জন্য সাধারণ SHA-256 এর বদলে Argon2id বা scrypt কেন ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'Argon2id and scrypt are memory-hard and computationally intensive, defeating high-speed parallel GPU and ASIC brute-force password cracking attacks',
          bn: 'Argon2id এবং scrypt মেমোরি-হার্ড এবং ধীরগতির অ্যালগরিদম, যা অত্যন্ত দ্রুতগতির সমান্তরাল জিপিইউ এবং ASIC ব্রুট-ফোর্স ক্র্যাকিং আক্রমণ প্রতিহত করে'
        },
        {
          en: 'Because SHA-256 only works on numbers and cannot process alphabet characters',
          bn: 'কারণ SHA-256 শুধুমাত্র সংখ্যায় কাজ করে এবং কোনো বর্ণ বুঝতে পারে না'
        },
        {
          en: 'Because Argon2id requires no computer memory or processor cycles',
          bn: 'কারণ Argon2id ব্যবহারে কোনো মেমোরি বা প্রসেসরের দরকার হয় না'
        },
        {
          en: 'Because SHA-256 keys expire after forty-eight hours automatically',
          bn: 'কারণ SHA-256 এর চাবিগুলো আটচল্লিশ ঘণ্টা পর নিজে থেকেই নষ্ট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fast hashes are easy for GPUs to guess millions of times per second; memory hardness slows down attackers.',
        bn: 'দ্রুতগতির হ্যাশ জিপিইউ দিয়ে প্রতি সেকেন্ডে কোটি বার অনুমান করা যায়; মেমোরি কাঠিন্য আক্রমণকারীকে থামিয়ে দেয়।'
      },
      explanation: {
        en: 'Key derivation functions enforce configurable time and memory hardness, ensuring an attacker cannot mass-crack passwords with specialized hardware.',
        bn: 'কি ডেরিভেশন ফাংশন ইচ্ছেমতো সময় ও মেমোরি খরচ বাড়ানোর সুযোগ দেয়, ফলে বিশেষায়িত হার্ডওয়্যার দিয়েও পাসওয়ার্ড সহজে ভাঙা যায় না।'
      }
    },
    {
      id: 'enc-km-ex-3',
      kind: 'mcq',
      topic: 'crypto-shredding-mechanism',
      question: {
        en: 'How does crypto-shredding allow an enterprise to comply with GDPR data deletion mandates instantly?',
        bn: 'ক্রিপ্টো-শ্রেডিং কীভাবে একটি প্রতিষ্ঠানকে তৎক্ষণাৎ জিডিপিআর (GDPR) ডাটা মুছে ফেলার নির্দেশ বাস্তবায়ন করতে সাহায্য করে?'
      },
      options: [
        {
          en: 'By permanently destroying the specific tenant or user master KEK; without this key, all associated encrypted data across backups and replicas becomes mathematically unrecoverable',
          bn: 'গ্রাহকের নির্দিষ্ট মাস্টার KEK চিরতরে ধ্বংস করার মাধ্যমে; এই চাবি ছাড়া সমস্ত ব্যাকআপ এবং রেপ্লিকায় থাকা ডাটা গাণিতিকভাবে চিরতরে অপাঠ্য হয়ে যায়'
        },
        {
          en: 'By physically incinerating all enterprise computer hard drives in a furnace',
          bn: 'প্রতিষ্ঠানের সমস্ত কম্পিউটারের হার্ডডিস্ক আগুনে পুড়িয়ে ছাই করে ফেলে'
        },
        {
          en: 'By sending a legal notice to all internet users requesting them not to view the data',
          bn: 'ইন্টারনেটের সব ব্যবহারকারীকে ডাটা না দেখার জন্য একটি আইনি নোটিশ পাঠিয়ে'
        },
        {
          en: 'By converting all database text columns into transparent white fonts',
          bn: 'ডাটাবেসের সমস্ত টেক্সট কলামের ফন্ট সাদা রঙে পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without the key, the ciphertext is identical to random noise and cannot be decrypted.',
        bn: 'চাবি ছাড়া সাইফারটেক্সট কেবল অর্থহীন অবিন্যস্ত সংখ্যায় পরিণত হয় যা কখনোই ডিক্রিপ্ট করা সম্ভব নয়।'
      },
      explanation: {
        en: 'Crypto-shredding avoids traversing petabytes of cold storage and tape backups: destroying the wrapping KEK instantly invalidates all data encrypted under it.',
        bn: 'ক্রিপ্টো-শ্রেডিংয়ের ফলে পেটালাইটের পর পেটালাইট পুরানো ব্যাকআপ ফাইল খোঁজার প্রয়োজন পড়ে না: মাস্টার KEK মুছে দিলে সব ডাটা স্বয়ংক্রিয়ভাবে বাতিল হয়ে যায়।'
      }
    },
    {
      id: 'enc-km-ex-4',
      kind: 'predict',
      topic: 'kms-engine-execution-results',
      question: {
        en: 'In our live Node.js KMS engine script, how many sensitive enterprise records were sealed into envelopes and successfully unwrapped and decrypted (e.g. 3/3)?',
        bn: 'আমাদের লাইভ Node.js KMS ইঞ্জিন স্ক্রিপ্টে কতটি এন্টারপ্রাইজ রেকর্ড সফলভাবে খামে সিল করা এবং সম্পূর্ণ উদ্ধার ও ডিক্রিপ্ট করা হয়েছিল (যেমন ৩/৩)?'
      },
      answer: '3/3',
      accept: ['3/3', '3', '3 records', 'three', '৩/৩', '৩'],
      hint: {
        en: 'All 3 records (Patient, User, and Audit) were successfully processed.',
        bn: 'সবকটি ৩ টি রেকর্ডই (রোগী, ব্যবহারকারী ও অডিট) সফলভাবে প্রক্রিয়াজাত হয়েছিল।'
      },
      explanation: {
        en: 'All 3 records processed produced 3 sealed envelopes, and 3/3 were successfully unwrapped and decrypted with 100% fidelity.',
        bn: 'সবকটি ৩ টি রেকর্ড প্রক্রিয়াজাত হয়ে ৩ টি সিল করা খাম তৈরি করেছিল এবং ১০০% নির্ভুলভাবে ৩/৩ টি রেকর্ড সফলভাবে উদ্ধার ও ডিক্রিপ্ট হয়েছিল।'
      }
    }
  ],
  quiz: {
    id: 'key-management-quiz',
    title: {
      en: 'Key Management & KMS Architecture Quiz',
      bn: 'চাবি ব্যবস্থাপনা ও KMS আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'enc-km-qz-1',
        kind: 'mcq',
        topic: 'data-key-caching-and-zeroization',
        question: {
          en: 'Why is it critical for an application to zeroize the plaintext DEK buffer in RAM immediately after encrypting a payload?',
          bn: 'পেলোড এনক্রিপ্ট করার সাথে সাথে মেমরি (RAM) থেকে প্লেইনটেক্সট DEK বাফার শূন্য দিয়ে মুছে ফেলা কেন অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'To prevent the raw encryption key from lingering in volatile memory where core dumps, debug logs, or unauthorized memory scanners could extract it',
            bn: 'যাতে মেমরিতে চাবিটি অপ্রয়োজনে পড়ে না থাকে এবং কোনো কোর ডাম্প, ডিবাগ লগ বা মেমরি স্ক্যানারের মাধ্যমে ফাঁস হতে না পারে'
          },
          {
            en: 'Because holding keys in RAM causes the computer screen to turn black',
            bn: 'কারণ মেমরিতে চাবি ধরে রাখলে কম্পিউটারের স্ক্রিন কালো হয়ে যায়'
          },
          {
            en: 'Because operating systems delete any program that uses more than sixteen bytes of RAM',
            bn: 'কারণ অপারেটিং সিস্টেম ১৬ বাইটের বেশি মেমরি ব্যবহারকারী প্রোগ্রাম বন্ধ করে দেয়'
          },
          {
            en: 'Because zeroizing the key increases internet download speeds by twenty percent',
            bn: 'কারণ চাবি মুছে দিলে ইন্টারনেটের ডাউনলোড স্পিড বিশ শতাংশ বেড়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Volatile memory is vulnerable to memory dumps, heartbleed-style leaks, and inspection.',
          bn: 'মেমরি ডাম্প বা অননুমোদিত মেমরি পরিদর্শনের মাধ্যমে র্যামের তথ্য ফাঁস হতে পারে।'
        },
        explanation: {
          en: 'Promptly overwriting memory buffers with zeroes ensures cryptographic keys exist in volatile RAM only for the microseconds required to perform the cipher transform.',
          bn: 'এনক্রিপশন শেষ হওয়া মাত্র বাফারে শূন্য লিখে দিলে মেমরিতে আক্রমণকারীদের নজরদারি করার সুযোগ থাকে না।'
        }
      },
      {
        id: 'enc-km-qz-2',
        kind: 'mcq',
        topic: 'master-key-rotation-mechanics',
        question: {
          en: 'When a cloud KMS rotates a master Key Encryption Key (KEK), what happens to existing data previously encrypted under older key versions?',
          bn: 'ক্লাউড KMS যখন একটি মাস্টার Key Encryption Key (KEK) পরিবর্তন বা রোটেট করে, তখন পুরানো কি দিয়ে আগে এনক্রিপ্ট করা ডাটার কী ঘটে?'
        },
        options: [
          {
            en: 'The KMS retains older KEK versions in read-only mode so existing wrapped DEKs can still be unwrapped and decrypted, while all new encryptions use the latest active KEK version',
            bn: 'KMS পুরানো KEK সংস্করণগুলো রিড-অনলি মোডে রেখে দেয় যাতে আগের wrapped DEK-গুলো ডিক্রিপ্ট করা যায়, আর নতুন সমস্ত ডাটা সর্বশেষ সক্রিয় KEK দিয়ে এনক্রিপ্ট হয়'
          },
          {
            en: 'All existing databases are immediately deleted to ensure compliance',
            bn: 'কমপ্লায়েন্স নিশ্চিত করতে আগের সমস্ত ডাটাবেস তৎক্ষণাৎ ডিলিট করে দেওয়া হয়'
          },
          {
            en: 'The older key versions are emailed to the system administrator in cleartext',
            bn: 'পুরানো চাবির সংস্করণগুলো সিস্টেম অ্যাডমিনকে প্লেইনটেক্সট ইমেইলে পাঠিয়ে দেওয়া হয়'
          },
          {
            en: 'Existing encrypted data turns back into unencrypted plain text automatically',
            bn: 'আগের সমস্ত এনক্রিপ্ট করা ডাটা স্বয়ংক্রিয়ভাবে প্লেইনটেক্সটে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Older key versions must remain capable of decryption without breaking existing systems.',
          bn: 'পুরানো ডাটা যাতে নষ্ট না হয় সেজন্য আগের কি সংস্করণগুলো ডিক্রিপশন করার ক্ষমতা ধরে রাখে।'
        },
        explanation: {
          en: 'Modern KMS architectures maintain a version chain. Decryption uses the specific KEK version that wrapped the DEK, while new encryption calls always bind to version N.',
          bn: 'আধুনিক KMS একটি সংস্করণ তালিকা বজায় রাখে। ডিক্রিপশনের সময় নির্দিষ্ট পুরানো সংস্করণ ব্যবহার করা হয় এবং নতুন এনক্রিপশনে সর্বদা সর্বশেষ সংস্করণ যুক্ত হয়।'
        }
      },
      {
        id: 'enc-km-qz-3',
        kind: 'mcq',
        topic: 'hardware-security-module-fips',
        question: {
          en: 'What unique physical security capability distinguishes a FIPS 140-2 / 140-3 Level 3 or 4 Hardware Security Module (HSM) from a standard software server?',
          bn: 'FIPS 140-2 / 140-3 লেভেল ৩ বা ৪ হার্ডওয়্যার সিকিউরিটি মডিউলের (HSM) কোন অনন্য শারীরিক বৈশিষ্ট্য এটিকে সাধারণ সফটওয়্যার সার্ভার থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'Active physical tamper-detection circuitry that immediately zeroizes and obliterates all stored master keys if an attacker physically drills, opens, or chills the chassis',
            bn: 'সক্রিয় শারীরিক নজরদারি সার্কিট যা আক্রমণকারী ডিভাইসটি খুললে, ড্রিল করলে বা তাপমাত্রা বদলালে তৎক্ষণাৎ সমস্ত মাস্টার কি শূন্য দিয়ে ধ্বংস করে দেয়'
          },
          {
            en: 'It is built entirely out of transparent plexiglass so engineers can see the electrons',
            bn: 'এটি সম্পূর্ণ স্বচ্ছ কাচ দিয়ে তৈরি যাতে ইঞ্জিনিয়াররা ইলেক্ট্রনের চলাচল দেখতে পারেন'
          },
          {
            en: 'It connects directly to public satellite antennas without needing electricity',
            bn: 'এটি কোনো বিদ্যুৎ ছাড়াই সরাসরি পাবলিক স্যাটেলাইটের সাথে সংযুক্ত থাকতে পারে'
          },
          {
            en: 'It allows any user on the local network to download master private keys without a password',
            bn: 'এটি লোকাল নেটওয়ার্কের যেকোনো ব্যবহারকারীকে পাসওয়ার্ড ছাড়াই মাস্টার কি ডাউনলোড করতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about physical tamper response and active zeroization.',
          bn: 'শারীরিক কারচুপি শনাক্তকরণ এবং স্বয়ংক্রিয় জিরোয়াইজেশনের কথা ভাবুন।'
        },
        explanation: {
          en: 'FIPS 140-2 Level 3/4 HSMs include environmental failure protection and physical envelope sensors that zeroize keys within nanoseconds if physical intrusion is detected.',
          bn: 'লেভেল ৩ এবং ৪ HSM-এ বিশেষ সেন্সর থাকে যা ফিজিক্যাল ক্যাসিং ভাঙার চেষ্টা করামাত্র ন্যানোসেকেন্ডে সমস্ত ক্রিপ্টোগ্রাফিক কি নিশ্চিহ্ন করে দেয়।'
        }
      },
      {
        id: 'enc-km-qz-4',
        kind: 'mcq',
        topic: 'hkdf-extract-and-expand',
        question: {
          en: 'What is the role of HKDF (HMAC-based Key Derivation Function) in modern protocol handshakes such as TLS 1.3?',
          bn: 'TLS ১.৩-এর মতো আধুনিক প্রোটোকল হ্যান্ডশেকে HKDF (HMAC-ভিত্তিক কি ডেরিভেশন ফাংশন)-এর ভূমিকা কী?'
        },
        options: [
          {
            en: 'It extracts uniform entropy from a shared Diffie-Hellman secret and expands it into distinct cryptographically strong keys for client write, server write, and authentication',
            bn: 'এটি যৌথ ডিফি-হেলম্যান সিক্রেট থেকে অবিন্যস্ত এন্ট্রপি সংগ্রহ করে ক্লায়েন্ট রাইট, সার্ভার রাইট ও অথেনটিকেশনের জন্য আলাদা শক্তিশালী ক্রিপ্টোগ্রাফিক কি তৈরি করে'
          },
          {
            en: 'It randomly deletes every third packet on the network to save bandwidth',
            bn: 'ব্যান্ডউইথ বাঁচাতে এটি ইন্টারনেটের প্রতি তৃতীয় প্যাকেটটি স্বয়ংক্রিয়ভাবে মুছে দেয়'
          },
          {
            en: 'It replaces AES encryption with plain text HTTP to speed up streaming videos',
            bn: 'ভিডিও দ্রুত দেখানোর জন্য এটি AES এনক্রিপশন বন্ধ করে প্লেইনটেক্সট ব্যবহার করে'
          },
          {
            en: 'It translates English internet text into twenty-six different spoken languages',
            bn: 'এটি ওয়েবসাইটের টেক্সটকে ছাব্বিশটি ভিন্ন ভাষায় স্বয়ংক্রিয়ভাবে অনুবাদ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'HKDF uses Extract-and-Expand to turn one master secret into multiple secure session keys.',
          bn: 'HKDF একটি মাস্টার সিক্রেট থেকে এক্সট্রাক্ট-অ্যান্ড-এক্সপ্যান্ড পদ্ধতির মাধ্যমে একাধিক সেশন কি তৈরি করে।'
        },
        explanation: {
          en: 'RFC 5869 defines HKDF in 2 phases: HKDF-Extract concentrates entropy into a pseudorandom key (PRK), and HKDF-Expand produces multiple independent subkeys of desired lengths.',
          bn: 'RFC ৫৮৬৯ অনুযায়ী HKDF ২ টি ধাপে কাজ করে: এক্সট্রাক্ট ধাপে এন্ট্রপি কেন্দ্রীভূত করা হয় এবং এক্সপ্যান্ড ধাপে চাহিদা অনুযায়ী একাধিক স্বাধীন সাব-কি তৈরি করা হয়।'
        }
      }
    ]
  },
  next: {
    slug: 'encryption-modes',
    title: {
      en: 'Block Cipher Modes of Operation: ECB, CBC, CTR & GCM Deep Dive',
      bn: 'ব্লক সাইফার মোডস অব অপারেশন: ECB, CBC, CTR ও GCM এর বিস্তারিত বিশ্লেষণ'
    }
  }
};
