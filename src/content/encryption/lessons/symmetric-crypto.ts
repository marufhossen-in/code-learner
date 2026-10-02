import type { Lesson } from '../../../lib/types';

export const SymmetricCryptoLesson: Lesson = {
  slug: 'symmetric-crypto',
  tech: 'encryption',
  title: {
    en: 'Symmetric Cryptography: Block Ciphers, AES & Stream Ciphers',
    bn: 'সিমেট্রিক ক্রিপ্টোগ্রাফি: ব্লক সাইফার, AES ও স্ট্রিম সাইফার'
  },
  summary: {
    en: 'Master the mechanics of symmetric-key cryptography, where sender and receiver share a single cryptographic key. Compare block ciphers like the Advanced Encryption Standard (AES-256) with stream ciphers like ChaCha20. Understand the Substitution-Permutation Network (SPN), diffusion, confusion, and why Authenticated Encryption with Associated Data (AEAD) is critical to prevent ciphertext tampering. Inspect an executable Node.js AES-256-GCM engine evaluating 3 sensitive records: 3 records are encrypted with 12-byte IVs and 16-byte authentication tags, and all 3 out of 3 are recovered.',
    bn: 'সিমেট্রিক-কি ক্রিপ্টোগ্রাফির মেকানিজম আয়ত্ত করুন, যেখানে প্রেরক ও প্রাপক উভয়ই একটিমাত্র গোপন চাবি ভাগাভাগি করে। অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ডের (AES-256) মতো ব্লক সাইফারের সাথে ChaCha20 এর মতো স্ট্রিম সাইফারের তুলনা করুন। সাবস্টিটিউশন-পারমিউটেশন নেটওয়ার্ক (SPN), ডিফিউশন, কনফিউশন এবং সাইফারটেক্সটের বিকৃতি রোধে অথেনটিকেটেড এনক্রিপশন (AEAD) কেন জরুরি তা শিখুন। ৩ টি সংবেদনশীল রেকর্ড মূল্যায়নকারী একটি কার্যকর Node.js AES-256-GCM ইঞ্জিন পরীক্ষা করুন: ১২-বাইটের আইভি ও ১৬-বাইটের ট্যাগ সহ ৩ টি রেকর্ড এনক্রিপ্ট হয় এবং ৩ টির মধ্যে ৩ টি রেকর্ড সম্পূর্ণ অক্ষত অবস্থায় উদ্ধার হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'shared-secret-paradigm',
      text: {
        en: 'The Shared Secret Paradigm: High-Speed Mathematical Encryption',
        bn: 'শেয়ার্ড সিক্রেট পদ্ধতি: উচ্চগতির গাণিতিক এনক্রিপশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you secure data using symmetric cryptography, you use the exact same mathematical key for both encryption and decryption. Because symmetric ciphers avoid expensive modular exponentiation operations, they are roughly one thousand times faster than public-key asymmetric algorithms. Hardware acceleration features like Intel AES-NI allow modern processors to encrypt multiple gigabytes per second with near-zero latency.',
        bn: 'সিমেট্রিক ক্রিপ্টোগ্রাফি দিয়ে ডাটা সুরক্ষিত করার সময় আপনি এনক্রিপশন এবং ডিক্রিপশন উভয়ের জন্যই হুবহু একই গোপন গাণিতিক চাবি ব্যবহার করেন। যেহেতু সিমেট্রিক সাইফারগুলোতে জটিল সূচকীয় গণনার প্রয়োজন হয় না, তাই এগুলো পাবলিক-কি অ্যাসিমেট্রিক অ্যালগরিদমের চেয়ে প্রায় এক হাজার গুণ বেশি দ্রুতগতিতে কাজ করে। ইন্টেল AES-NI এর মতো আধুনিক প্রসেসর হার্ডওয়্যার ফিচার ব্যবহারের মাধ্যমে প্রতি সেকেন্ডে কয়েক গিগাবাইট ডাটা অতি দ্রুত এনক্রিপ্ট করা সম্ভব।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The primary challenge of symmetric cryptography is the Key Distribution Problem. If Alice and Bob have never met, how do they establish a shared 256-bit key across the public internet without an eavesdropper recording it? In modern protocols, asymmetric key exchanges solve key distribution, while symmetric ciphers perform bulk data payload encryption.',
        bn: 'সিমেট্রিক ক্রিপ্টোগ্রাফির প্রধানতম চ্যালেঞ্জ হলো কি ডিস্ট্রিবিউশন বা চাবি বিতরণের সমস্যা। অ্যালিস এবং বব আগে কখনো যোগাযোগ না করে থাকলে, ইন্টারনেটের মাধ্যমে কোনো আড়িপাতাকারীর নজর এড়িয়ে তারা কীভাবে ২৫৬-বিটের গোপন চাবি একে অপরের সাথে বিনিময় করবে? আধুনিক ইন্টারনেট প্রোটোকলে অ্যাসিমেট্রিক কি এক্সচেঞ্জের মাধ্যমে প্রথমে চাবি বিনিময় করা হয়, এবং পরবর্তীতে পুরো ডাটা দ্রুত পাঠানোর জন্য সিমেট্রিক সাইফার ব্যবহার করা হয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Advanced Encryption Standard (AES)',
            bn: '১. অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ড (AES)'
          },
          text: {
            en: 'The worldwide standard established by NIST in 2001 (Rijndael). Operates on fixed 128-bit (16-byte) blocks across 10, 12, or 14 transformation rounds using 128, 192, or 256-bit keys.',
            bn: '২০০১ সালে নিস্ট (NIST) কর্তৃক গৃহীত আন্তর্জাতিক মানদণ্ড (Rijndael)। এটি ১২৮, ১৯২ বা ২৫৬-বিট কি দিয়ে ১০, ১২ বা ১৪ রাউন্ডের মাধ্যমে নির্দিষ্ট ১২৮-বিট (১৬-বাইট) ব্লকের ওপর রূপান্তর চালায়।'
          },
        },
        {
          title: {
            en: '2. Substitution-Permutation Network (SPN)',
            bn: '২. সাবস্টিটিউশন-পারমিউটেশন নেটওয়ার্ক (SPN)'
          },
          text: {
            en: 'Combines non-linear S-box substitution (providing confusion: obscuring the relationship between key and ciphertext) and linear byte shifting (providing diffusion: spreading single-bit changes across all bytes).',
            bn: 'নন-লিনিয়ার এস-বক্স সাবস্টিটিউশন (কনফিউশন: কি ও সাইফারের সম্পর্ক গোপন রাখা) এবং লিনিয়ার শিফটিং (ডিফিউশন: একটি বিট বদলালে পুরো সাইফারটেক্সট বদলে যাওয়া) একত্রিত করে কাজ করে।'
          },
        },
        {
          title: {
            en: '3. Authenticated Encryption (AEAD)',
            bn: '৩. অথেনটিকেটেড এনক্রিপশন (AEAD)'
          },
          text: {
            en: 'Combines Galois/Counter Mode (GCM) encryption with a 16-byte Message Authentication Code (MAC) tag. Any unauthorized bit modification in transit causes decryption to throw an authentication error.',
            bn: 'গ্যালোয়া/কাউন্টার মোড (GCM) এনক্রিপশনের সাথে ১৬-বাইটের অথেনটিকেশন ট্যাগ যুক্ত করে। ট্রাফিকের মাঝপথে কেউ একটিমাত্র বিট পরিবর্তন করলেও ডিক্রিপশন ব্যর্থ হয় এবং আক্রমণ ধরা পড়ে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'AES-256-GCM Pipeline: 3 Records Encrypted with 12-Byte IVs and 16-Byte Auth Tags',
        bn: 'AES-256-GCM পাইপলাইন: ১২-বাইট আইভি ও ১৬-বাইট ট্যাগ সহ ৩ টি রেকর্ড এনক্রিপ্ট ও উদ্ধার'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="AES-256-GCM symmetric authenticated encryption pipeline evaluating 3 records">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">AES-256-GCM AUTHENTICATED SYMMETRIC ENCRYPTION PIPELINE</text>
  
  <!-- Box 1: Plaintext Records -->
  <g transform="translate(35, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#0284c7"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. SENSITIVE INPUT RECORDS</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="22" fill="#38bdf8" font-size="8.5" font-weight="bold">Record 1: Salary Records</text>
      <text x="10" y="38" fill="#ffffff" font-size="7.5">"Confidential salary database"</text>
      <text x="10" y="52" fill="#a7f3d0" font-size="7.5">Length: 28 plaintext bytes</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="107" fill="#38bdf8" font-size="8.5" font-weight="bold">Record 2: Service API Token</text>
      <text x="10" y="123" fill="#ffffff" font-size="7.5">"Internal API private token"</text>
      <text x="10" y="137" fill="#a7f3d0" font-size="7.5">Length: 26 plaintext bytes</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="192" fill="#38bdf8" font-size="8.5" font-weight="bold">Record 3: Cloud Credential</text>
      <text x="10" y="208" fill="#ffffff" font-size="7.5">"Cloud database master password"</text>
      <text x="10" y="222" fill="#a7f3d0" font-size="7.5">Length: 30 plaintext bytes</text>
    </g>
  </g>
  
  <!-- Box 2: AES-256-GCM Ciphertext + Tag -->
  <g transform="translate(305, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#d97706"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. AUTHENTICATED CIPHER (3)</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#451a03" stroke="#f59e0b"/>
      <text x="10" y="20" fill="#fde68a" font-size="8.5" font-weight="bold">Cipher 1 (256-bit Key)</text>
      <text x="10" y="36" fill="#fcd34d" font-size="7.5">IV (12B): 909faf91024e...</text>
      <text x="10" y="50" fill="#fbbf24" font-size="7.5">Tag (16B): 735fbaa134...</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#451a03" stroke="#f59e0b"/>
      <text x="10" y="105" fill="#fde68a" font-size="8.5" font-weight="bold">Cipher 2 (256-bit Key)</text>
      <text x="10" y="121" fill="#fcd34d" font-size="7.5">IV (12B): 8a2bbc57ef12...</text>
      <text x="10" y="135" fill="#fbbf24" font-size="7.5">Tag (16B): cf66d3da98...</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#451a03" stroke="#f59e0b"/>
      <text x="10" y="190" fill="#fde68a" font-size="8.5" font-weight="bold">Cipher 3 (256-bit Key)</text>
      <text x="10" y="206" fill="#fcd34d" font-size="7.5">IV (12B): 4676dcd178aa...</text>
      <text x="10" y="220" fill="#fbbf24" font-size="7.5">Tag (16B): 3c99abb355...</text>
    </g>
  </g>
  
  <!-- Box 3: Decrypted & Verified Output -->
  <g transform="translate(575, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#059669"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. VERIFIED RECOVERY (3/3)</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8.5" font-weight="bold">Decrypted 1: VERIFIED [✓]</text>
      <text x="10" y="36" fill="#34d399" font-size="7.5">"Confidential salary database"</text>
      <text x="10" y="50" fill="#a7f3d0" font-size="7.5">Tag match: 0 bits altered</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="105" fill="#6ee7b7" font-size="8.5" font-weight="bold">Decrypted 2: VERIFIED [✓]</text>
      <text x="10" y="121" fill="#34d399" font-size="7.5">"Internal API private token"</text>
      <text x="10" y="135" fill="#a7f3d0" font-size="7.5">Tag match: 0 bits altered</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="190" fill="#6ee7b7" font-size="8.5" font-weight="bold">Decrypted 3: VERIFIED [✓]</text>
      <text x="10" y="206" fill="#34d399" font-size="7.5">"Cloud database master password"</text>
      <text x="10" y="220" fill="#a7f3d0" font-size="7.5">Tag match: 0 bits altered</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">AES-256-GCM delivers both confidentiality and cryptographic integrity verification in a single efficient hardware pass</text>
</svg>`,
      caption: {
        en: 'The AES-256-GCM engine processes 3 records: 3 records are encrypted with random 12-byte IVs and 16-byte authentication tags, and all 3 out of 3 are recovered.',
        bn: 'AES-256-GCM ইঞ্জিন ৩ টি রেকর্ড প্রক্রিয়া করে: ১২-বাইটের আইভি ও ১৬-বাইটের অথেনটিকেশন ট্যাগ সহ ৩ টি রেকর্ড এনক্রিপ্ট হয় এবং ৩ টির মধ্যে ৩ টি রেকর্ড সফলভাবে উদ্ধার হয়।'
      },
    },
    {
      type: 'heading',
      id: 'aes-gcm-engine-code',
      text: {
        en: 'Building an AES-256-GCM Authenticated Encryption Engine in Node.js',
        bn: 'Node.js-এ AES-256-GCM অথেনটিকেটেড এনক্রিপশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'aes-gcm-symmetric-engine.js',
      code: `const crypto = require('crypto');

// Deterministic AES-256-GCM Authenticated Encryption Engine
class SymmetricEncryptionEngine {
  constructor(secret256BitKey) {
    this.key = secret256BitKey; // 32 bytes = 256 bits
  }

  // Encrypt plaintext with random 12-byte Initialization Vector (IV)
  encryptPayload(plaintext) {
    const iv = crypto.randomBytes(12); // Standard 96-bit (12-byte) GCM IV
    const cipher = crypto.createCipheriv('aes-256-gcm', this.key, iv);

    let ciphertext = cipher.update(plaintext, 'utf8');
    ciphertext = Buffer.concat([ciphertext, cipher.final()]);
    const authTag = cipher.getAuthTag(); // 16-byte authentication tag

    return {
      ivHex: iv.toString('hex'),
      ciphertextHex: ciphertext.toString('hex'),
      authTagHex: authTag.toString('hex')
    };
  }

  // Decrypt ciphertext and mathematically verify authentication tag
  decryptPayload(encryptedPackage) {
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      this.key,
      Buffer.from(encryptedPackage.ivHex, 'hex')
    );
    decipher.setAuthTag(Buffer.from(encryptedPackage.authTagHex, 'hex'));

    let decrypted = decipher.update(Buffer.from(encryptedPackage.ciphertextHex, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString('utf8');
  }
}

// Generate a cryptographically secure 256-bit symmetric key
const masterSymmetricKey = crypto.randomBytes(32);
const engine = new SymmetricEncryptionEngine(masterSymmetricKey);

// 3 distinct sensitive enterprise records
const enterpriseRecords = [
  'Confidential salary database',
  'Internal API private token',
  'Cloud database master password'
];

let totalSealed = 0;
let totalRecovered = 0;

console.log('=== AES-256-GCM Authenticated Cryptographic Audit ===\\n');
enterpriseRecords.forEach((record, index) => {
  totalSealed++;
  const encrypted = engine.encryptPayload(record);
  const decrypted = engine.decryptPayload(encrypted);

  const isIdentical = decrypted === record;
  if (isIdentical) totalRecovered++;

  console.log(\`[\${index + 1}] Plaintext:  "\${record}"\`);
  console.log(\`    Ciphertext: \${encrypted.ciphertextHex.slice(0, 32)}... (IV: \${encrypted.ivHex.slice(0, 8)}..., Tag: \${encrypted.authTagHex.slice(0, 8)}...)\`);
  console.log(\`    Decrypted:  "\${decrypted}" [Integrity: \${isIdentical ? 'VERIFIED ✓' : 'CORRUPT ✗'}]\\n\`);
});

console.log('=== Symmetric Encryption Audit Summary ===');
console.log('Total Records Processed: ', enterpriseRecords.length);
console.log('Records Sealed to GCM:   ', totalSealed);
console.log('Authenticated Recovery:  ', \`\${totalRecovered}/\${enterpriseRecords.length}\`);`,
      caption: {
        en: 'The AES-256-GCM engine processes 3 records: 3 records are encrypted with random 12-byte IVs and 16-byte authentication tags, and all 3 are recovered.',
        bn: 'AES-256-GCM ইঞ্জিন ৩ টি রেকর্ড প্রক্রিয়া করে: ১২-বাইটের আইভি ও ১৬-বাইটের ট্যাগ সহ ৩ টি রেকর্ড এনক্রিপ্ট হয় এবং ৩ টি রেকর্ডই উদ্ধার হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Catastrophic Danger of IV / Nonce Reuse in GCM',
        bn: 'জিসিএম (GCM) মোডে আইভি বা ননস পুনরায় ব্যবহারের মারাত্মক পরিণতি'
      },
      text: {
        en: 'In Galois/Counter Mode (GCM), the Initialization Vector (IV) is a nonce: a "number used once". If you ever encrypt two different messages using the exact same key and the exact same 12-byte IV, an attacker XORing the two ciphertexts cancels out the keystream entirely (C1 ^ C2 = P1 ^ P2). Furthermore, mathematically comparing the authentication tags allows recovery of the GCM polynomial authentication key, destroying both confidentiality and integrity forever. Always use crypto.randomBytes(12).',
        bn: 'গ্যালোয়া/কাউন্টার মোডে (GCM) ইনিশিয়ালাইজেশন ভেক্টর (IV) হলো একটি ননস (Nonce), যার অর্থ "একবার ব্যবহারের সংখ্যা"। আপনি যদি কখনো একই কি এবং একই ১২-বাইটের আইভি দিয়ে দুটি ভিন্ন মেসেজ এনক্রিপ্ট করেন, তবে আক্রমণকারী দুটি সাইফারটেক্সট XOR করে আসল প্লেইনটেক্সট বের করে ফেলতে পারে (C1 ^ C2 = P1 ^ P2)। এমনকি এর ফলে অথেনটিকেশন কি ফাঁস হয়ে যায় এবং ভবিষ্যতে হ্যাকার ভুয়া মেসেজ তৈরি করতে পারে। তাই সর্বদা crypto.randomBytes(12) ব্যবহার করে প্রতিটি অপারেশনে সম্পূর্ণ নতুন আইভি নিশ্চিত করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'enc-sym-ex-1',
      kind: 'predict',
      topic: 'sealed-records-count',
      question: {
        en: 'In the AES-256-GCM symmetric encryption audit of the 3 enterprise records, how many records were successfully encrypted into authenticated ciphertext? (3). Type the number.',
        bn: '৩ টি এন্টারপ্রাইজ রেকর্ডের AES-256-GCM সিমেট্রিক এনক্রিপশন নিরীক্ষায় সর্বমোট কয়টি রেকর্ড সফলভাবে অথেনটিকেটেড সাইফারটেক্সটে রূপান্তরিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'All 3 records were sealed.',
        bn: 'সবকটি ৩ টি রেকর্ড এনক্রিপ্ট হয়েছিল।'
      },
      explanation: {
        en: 'All 3 records (salary database, API token, and cloud master password) were sealed into ciphertext with individual 12-byte IVs and 16-byte GCM tags.',
        bn: '৩ টি রেকর্ডই ১২-বাইটের আইভি এবং ১৬-বাইটের জিসিএম ট্যাগ সহ সফলভাবে এনক্রিপ্ট হয়েছিল।'
      },
    },
    {
      id: 'enc-sym-ex-2',
      kind: 'mcq',
      topic: 'aes-key-lengths-and-rounds',
      question: {
        en: 'What are the standardized key lengths and corresponding transformation round counts for the Advanced Encryption Standard (AES)?',
        bn: 'অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ডের (AES) সুনির্দিষ্ট কি সাইজ এবং রূপান্তর রাউন্ডের সংখ্যা কত?'
      },
      options: [
        {
          en: 'AES-128 uses 10 rounds, AES-192 uses 12 rounds, and AES-256 uses 14 transformation rounds, all operating on fixed 128-bit (16-byte) blocks',
          bn: 'AES-128 এ ১০ রাউন্ড, AES-192 এ ১২ রাউন্ড এবং AES-256 এ ১৪ রাউন্ড ব্যবহৃত হয়, যার প্রতিটিই নির্দিষ্ট ১২৮-বিট (১৬-বাইট) ব্লকের ওপর পরিচালিত হয়',
        },
        {
          en: 'AES uses 5 rounds for text and 50 rounds for images',
          bn: 'AES টেক্সটের জন্য ৫ রাউন্ড এবং ছবির জন্য ৫০ রাউন্ড ব্যবহার করে',
        },
        {
          en: 'AES uses 1 round per kilobyte of data',
          bn: 'AES প্রতি কিলোবাইট ডাটার জন্য ১ রাউন্ড করে চালায়',
        },
        {
          en: 'AES rounds change depending on the time of day',
          bn: 'দিনের সময়ের ওপর ভিত্তি করে AES রাউন্ড পরিবর্তিত হয়',
        },
      ],
      answer: 0,
      hint: {
        en: '128-bit key = 10 rounds; 192-bit key = 12 rounds; 256-bit key = 14 rounds.',
        bn: '১২৮-বিট কি = ১০ রাউন্ড; ১৯২-বিট কি = ১২ রাউন্ড; ২৫৬-বিট কি = ১৪ রাউন্ড।'
      },
      explanation: {
        en: 'Regardless of whether the key is 128, 192, or 256 bits, the block size of AES is always strictly 128 bits (16 bytes).',
        bn: 'চাবি ১২৮, ১৯২ বা ২৫৬ বিটের যাই হোক না কেন, AES-এর প্রতিটি ব্লকের আকার সর্বদা ১২৮ বিট (১৬ বাইট) হয়ে থাকে।'
      },
    },
    {
      id: 'enc-sym-ex-3',
      kind: 'mcq',
      topic: 'aead-authentication-tag-purpose',
      question: {
        en: 'Why is an authentication tag (such as the 16-byte tag in AES-GCM) essential alongside encryption?',
        bn: 'এনক্রিপশনের পাশাপাশি একটি অথেনটিকেশন ট্যাগ (যেমন AES-GCM-এর ১৬-বাইট ট্যাগ) থাকা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Standard encryption only guarantees confidentiality; an authentication tag provides cryptographic integrity, detecting if an attacker flipped bits in transit and causing tampered decryption to abort immediately',
          bn: 'সাধারণ এনক্রিপশন কেবল গোপনীয়তা দেয়; অথেনটিকেশন ট্যাগ ক্রিপ্টোগ্রাফিক অখণ্ডতা নিশ্চিত করে, ফলে পথের মধ্যে আক্রমণকারী কোনো বিট পরিবর্তন করলে ডিক্রিপশন সাথে সাথে বাতিল হয়ে যায়',
        },
        {
          en: 'Because authentication tags compress the encrypted file to half its size',
          bn: 'কারণ অথেনটিকেশন ট্যাগ এনক্রিপ্ট করা ফাইলকে অর্ধেক সংকুচিত করে',
        },
        {
          en: 'Because authentication tags allow web pages to load without internet access',
          bn: 'কারণ অথেনটিকেশন ট্যাগ কোনো ইন্টারনেট ছাড়াই পেজ লোড করতে সাহায্য করে',
        },
        {
          en: 'Because authentication tags translate English documents into Spanish',
          bn: 'কারণ অথেনটিকেশন ট্যাগ ইংরেজি নথিকে স্প্যানিশ ভাষায় অনুবাদ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Auth tags guarantee integrity and detect unauthorized ciphertext tampering.',
        bn: 'অথেনটিকেশন ট্যাগ অখণ্ডতা নিশ্চিত করে এবং সাইফারটেক্সটের বিকৃতি সনাক্ত করে।'
      },
      explanation: {
        en: 'Without an authentication tag, an attacker can modify ciphertext bytes (e.g. altering the recipient account number in an encrypted bank transfer) without knowing the key.',
        bn: 'ট্যাগ না থাকলে হ্যাকার চাবি না জেনেও সাইফারের নির্দিষ্ট বিট বদলে দিয়ে আর্থিক লেনদেনের প্রাপক বা অর্থের পরিমাণ বদলে দিতে পারে।'
      },
    },
    {
      id: 'enc-sym-ex-4',
      kind: 'predict',
      topic: 'recovered-records-count',
      question: {
        en: 'How many of the 3 sealed records were successfully decrypted and verified with authentic integrity? (3). Type the number.',
        bn: 'তালাবদ্ধ ৩ টি রেকর্ডের মধ্যে সর্বমোট কয়টি রেকর্ড সফলভাবে ডিক্রিপ্ট করা হয়েছিল এবং অখণ্ডতার সাথে প্রমাণিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'All 3 records were verified.',
        bn: 'সবকটি ৩ টি রেকর্ডই প্রমাণিত হয়েছিল।'
      },
      explanation: {
        en: 'All 3 records decrypted with 100% fidelity (3/3), matching the original plaintext strings and passing authentication tag verification.',
        bn: 'সবকটি ৩ টি রেকর্ডই ১০০% নির্ভুলতার সাথে (৩/৩) ডিক্রিপ্ট হয়েছিল এবং অথেনটিকেশন ট্যাগ পরীক্ষায় উত্তীর্ণ হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'symmetric-crypto-quiz',
    title: {
      en: 'Symmetric Cryptography & Ciphers Architecture Quiz',
      bn: 'সিমেট্রিক ক্রিপ্টোগ্রাফি ও সাইফার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'enc-sym-qz-1',
        kind: 'mcq',
        topic: 'chacha20-poly1305-vs-aes',
        question: {
          en: 'When is ChaCha20-Poly1305 preferred over AES-256-GCM in production engineering?',
          bn: 'প্রোডাকশন ইঞ্জিনিয়ারিংয়ে AES-256-GCM এর চেয়ে ChaCha20-Poly1305 কখন অধিক উপযোগী?'
        },
        options: [
          {
            en: 'On mobile and embedded devices (such as budget smartphones or IoT hardware) that lack dedicated hardware AES acceleration instructions, where ChaCha20 runs up to three times faster in pure software and is immune to cache-timing attacks',
            bn: 'মোবাইল ও আইওটি ডিভাইসে যেগুলোতে ডেডিকেটেড হার্ডওয়্যার AES ইন্সট্রাকশন নেই, সেখানে ChaCha20 সাধারণ সফটওয়্যারে তিন গুণ বেশি দ্রুত চলে এবং ক্যাশ-টাইমিং আক্রমণ থেকে সম্পূর্ণ সুরক্ষিত থাকে',
          },
          {
            en: 'When encrypting video files larger than twenty gigabytes',
            bn: 'বিশ গিগাবাইটের চেয়ে বড় ভিডিও ফাইল এনক্রিপ্ট করার সময়',
          },
          {
            en: 'When the computer is connected to solar-powered battery chargers',
            bn: 'কম্পিউটার যখন সৌর চালিত ব্যাটারি চার্জারের সাথে যুক্ত থাকে',
          },
          {
            en: 'When encrypting text written in ancient Greek',
            bn: 'প্রাচীন গ্রিক ভাষায় লেখা কোনো টেক্সট এনক্রিপ্ট করার সময়',
          },
        ],
        answer: 0,
        hint: {
          en: 'ChaCha20 delivers superior software speed on devices without AES-NI.',
          bn: 'AES-NI হার্ডওয়্যার সার্কিট না থাকা ডিভাইসে ChaCha20 সফটওয়্যারে দ্রুত চলে।'
        },
        explanation: {
          en: 'Google and Cloudflare use ChaCha20-Poly1305 for mobile HTTPS traffic because it saves battery life and avoids side-channel timing vulnerabilities inherent in software AES.',
          bn: 'গুগল ও ক্লাউডফ্লেয়ার মোবাইলের জন্য ChaCha20 ব্যবহার করে কারণ এটি ব্যাটারি বাঁচায় এবং সফটওয়্যার AES-এর টাইমিং দুর্বলতা দূর করে।'
        },
      },
      {
        id: 'enc-sym-qz-2',
        kind: 'mcq',
        topic: 'avalanche-effect-in-block-ciphers',
        question: {
          en: 'What is the "Avalanche Effect" in cryptographic block ciphers, and why is it essential for security?',
          bn: 'ক্রিপ্টোগ্রাফিক ব্লক সাইফারে "অ্যাভালাঞ্চ ইফেক্ট" (Avalanche Effect) কী এবং নিরাপত্তার জন্য এটি কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'Changing a single bit in the plaintext or key causes an avalanche of changes where roughly fifty percent of the ciphertext bits flip randomly, preventing attackers from predicting output differences',
            bn: 'প্লেইনটেক্সট বা চাবির একটিমাত্র বিট পরিবর্তন করলে সাইফারটেক্সটের প্রায় পঞ্চাশ শতাংশ বিট এলোমেলোভাবে বদলে যায়, যার ফলে আক্রমণকারী ইনপুট ও আউটপুটের পার্থক্য অনুমান করতে পারে না',
          },
          {
            en: 'A winter snowstorm that shuts down computer network cables',
            bn: 'শীতকালীন তুষারঝড় যা নেটওয়ার্ক ক্যাবলকে বন্ধ করে দেয়',
          },
          {
            en: 'A hard drive failure caused by excessive vibration from cooling fans',
            bn: 'কুলিং ফ্যানের অতিরিক্ত কাঁপুনিতে হার্ডড্রাইভ নষ্ট হওয়ার ঘটনা',
          },
          {
            en: 'An algorithm that deletes duplicate files from computer desktops',
            bn: 'এমন অ্যালগরিদম যা ডেস্কটপ থেকে ডুপ্লিকেট ফাইল মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'A 1-bit input change flips ~50% of output bits randomly.',
          bn: 'একটি বিট পরিবর্তনের ফলে আউটপুটের প্রায় অর্ধেক বিট বদলে যায়।'
        },
        explanation: {
          en: 'If a cipher lacks the avalanche effect, cryptanalysts can use differential cryptanalysis to trace changes and mathematically reconstruct the secret key.',
          bn: 'অ্যাভালাঞ্চ ইফেক্ট না থাকলে ডিফারেনশিয়াল ক্রিপ্টোঅ্যানালাইসিস চালিয়ে গাণিতিকভাবে সিক্রেট কি বের করে ফেলা সম্ভব।'
        },
      },
      {
        id: 'enc-sym-qz-3',
        kind: 'mcq',
        topic: 'aes-s-box-non-linearity',
        question: {
          en: 'What mathematical role does the Rijndael S-Box (Substitution Box) play during the SubBytes round of AES?',
          bn: 'AES-এর SubBytes রাউন্ডে Rijndael এস-বক্স (S-Box) কোন গাণিতিক ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It performs non-linear byte substitution using multiplicative inversion in the Galois Field GF(2^8) followed by an affine transformation, destroying linear mathematical relationships between the key and ciphertext (providing confusion)',
            bn: 'এটি গ্যালোয়া ফিল্ড GF(2^8)-এ মাল্টিপ্লিকেটিভ ইনভার্সন এবং অ্যাফাইন রূপান্তর ব্যবহার করে নন-লিনিয়ার বাইট প্রতিস্থাপন ঘটায়, যা কি এবং সাইফারের সরলরৈখিক গাণিতিক সম্পর্ক ভেঙে দেয় (কনফিউশন তৈরি করে)',
          },
          {
            en: 'It compresses text files into zip archive formats',
            bn: 'এটি টেক্সট ফাইলকে জিপ ফরম্যাটে সংকুচিত করে',
          },
          {
            en: 'It plays sound effects through computer audio speakers',
            bn: 'এটি কম্পিউটারের স্পিকারে অডিও সাউন্ড বাজায়',
          },
          {
            en: 'It checks user grammar and spelling mistakes',
            bn: 'এটি ব্যবহারকারীর ব্যাকরণ ও বানানের ভুল পরীক্ষা করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The S-box provides non-linear substitution, preventing linear cryptanalysis.',
          bn: 'এস-বক্স নন-লিনিয়ার প্রতিস্থাপন দিয়ে লিনিয়ার ক্রিপ্টোঅ্যানালাইসিস প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Without non-linear S-boxes, an entire multi-round cipher could be expressed as a system of linear equations and solved algebraically in fractions of a second.',
          bn: 'নন-লিনিয়ার এস-বক্স না থাকলে পুরো সাইফারটিকে সাধারণ সমীকরণে প্রকাশ করে মাত্র কয়েক সেকেন্ডে সমাধান করে ফেলা যেত।'
        },
      },
      {
        id: 'enc-sym-qz-4',
        kind: 'mcq',
        topic: 'key-distribution-problem-resolution',
        question: {
          en: 'How do modern enterprise systems solve the classic Key Distribution Problem of symmetric cryptography?',
          bn: 'আধুনিক এন্টারপ্রাইজ সিস্টেমগুলো কীভাবে সিমেট্রিক ক্রিপ্টোগ্রাফির প্রাচীন কি ডিস্ট্রিবিউশন সমস্যা সমাধান করে?'
        },
        options: [
          {
            en: 'By using Hybrid Cryptography: an asymmetric algorithm (like ECDH or RSA) securely negotiates and distributes a temporary symmetric session key, which is then used for high-speed AES encryption of actual data',
            bn: 'হাইব্রিড ক্রিপ্টোগ্রাফি ব্যবহারের মাধ্যমে: অ্যাসিমেট্রিক অ্যালগরিদম (যেমন ECDH বা RSA) দিয়ে প্রথমে একটি অস্থায়ী সিমেট্রিক সেশন কি নিরাপদে আদান-প্রদান করা হয়, এবং পরবর্তীতে সেই কি দিয়ে দ্রুতগতির AES এনক্রিপশনে মূল ডাটা পাঠানো হয়',
          },
          {
            en: 'By mailing USB flash drives containing keys via postal mail trucks',
            bn: 'ডাক বিভাগের গাড়িতে করে ইউএসবি ড্রাইভে পাসওয়ার্ড পাঠিয়ে',
          },
          {
            en: 'By printing keys on paper billboards beside national highways',
            bn: 'মহাসড়কের পাশে বিলবোর্ডে এনক্রিপশন কি ছাপিয়ে',
          },
          {
            en: 'By having engineers shout keys across office cubicle partitions',
            bn: 'অফিসের কিউবিকলে চিৎকার করে একজন আরেকজনকে চাবি বলে দিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Hybrid cryptography uses asymmetric crypto to share the symmetric key.',
          bn: 'হাইব্রিড ক্রিপ্টোগ্রাফিতে অ্যাসিমেট্রিক দিয়ে সিমেট্রিক চাবি শেয়ার করা হয়।'
        },
        explanation: {
          en: 'This hybrid approach combines the best of both worlds: the mathematical trust of asymmetric key establishment with the sheer gigabit performance of symmetric ciphers.',
          bn: 'এই সমন্বিত পদ্ধতি উভয় মাধ্যমের সেরা সুবিধা দেয়: অ্যাসিমেট্রিকের মাধ্যমে নিরাপদ চাবি আদান-প্রদান এবং সিমেট্রিকের মাধ্যমে উচ্চগতির ডাটা ট্রান্সফার।'
        },
      },
    ],
  },
  next: {
    slug: 'asymmetric-crypto',
    title: {
      en: 'Asymmetric Cryptography: RSA, Elliptic Curves & Digital Signatures',
      bn: 'অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি: আরএসএ (RSA), উপবৃত্তাকার কার্ভ ও ডিজিটাল স্বাক্ষর'
    },
  },
};
