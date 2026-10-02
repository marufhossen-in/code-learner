import type { Lesson } from '../../../lib/types';

export const AsymmetricCryptoLesson: Lesson = {
  slug: 'asymmetric-crypto',
  tech: 'encryption',
  title: {
    en: 'Asymmetric Cryptography: RSA, Elliptic Curves & Digital Signatures',
    bn: 'অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি: আরএসএ (RSA), উপবৃত্তাকার কার্ভ ও ডিজিটাল স্বাক্ষর'
  },
  summary: {
    en: 'Master the principles of asymmetric public-key cryptography. Learn how mathematically coupled key pairs resolve the key distribution problem: public keys encrypt for anyone, while private keys decrypt in strict isolation. Compare the integer factorization mechanics of RSA with the superior performance of Elliptic Curve Cryptography (ECC). Understand how digital signatures (ECDSA / Ed25519) guarantee authenticity and non-repudiation. Inspect an executable Node.js RSA engine evaluating 3 distinct payloads: 3 payloads are locked with public keys, and all 3 out of 3 are recovered with the private key.',
    bn: 'অ্যাসিমেট্রিক পাবলিক-কি ক্রিপ্টোগ্রাফির মূলনীতি আয়ত্ত করুন। গাণিতিকভাবে সম্পর্কিত চাবির জোড়া কীভাবে চাবি বিতরণের সমস্যার সমাধান করে তা শিখুন: পাবলিক কি দিয়ে যে কেউ এনক্রিপ্ট করতে পারে, কিন্তু প্রাইভেট কি দিয়ে কেবল মালিকই ডিক্রিপ্ট করতে পারে। আরএসএ (RSA)-এর মৌলিক উৎপাদক বিশ্লেষণের সাথে উপবৃত্তাকার কার্ভ ক্রিপ্টোগ্রাফির (ECC) উচ্চগতির পারফরম্যান্সের তুলনা করুন। ডিজিটাল স্বাক্ষর (ECDSA / Ed25519) কীভাবে প্রেরকের সত্যতা ও অপস্বীকৃতি প্রতিরোধ নিশ্চিত করে তা বিশ্লেষণ করুন। ৩ টি পেলোড পরীক্ষা করা একটি কার্যকর Node.js RSA ইঞ্জিন দেখুন: ৩ টি পেলোড পাবলিক কি দিয়ে তালাবদ্ধ হয় এবং ৩ টির মধ্যে ৩ টি পেলোডই প্রাইভেট কি দিয়ে সফলভাবে উদ্ধার করা হয়।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'asymmetric-revolution',
      text: {
        en: 'The Public-Key Revolution: Splitting the Lock from the Key',
        bn: 'পাবলিক-কি বিপ্লব: চাবি থেকে তালার গাণিতিক বিভাজন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you communicate with an e-commerce website or bank you have never visited before, you cannot physically hand them a secret symmetric key. Asymmetric cryptography resolves this limitation by generating two mathematically paired keys: a public key and a private key. The public key is published openly to the world, while the private key is guarded in strict secrecy.',
        bn: 'ইন্টারনেটে যখন আপনি কোনো নতুন ই-কমার্স বা ব্যাংকের ওয়েবসাইটে প্রবেশ করেন, তখন শারীরিকভাবে তাদের কাছে কোনো গোপন সিমেট্রিক চাবি হস্তান্তর করা সম্ভব নয়। অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি দুটি গাণিতিকভাবে সম্পর্কিত চাবি তৈরির মাধ্যমে এই সমস্যার সমাধান করে: একটি পাবলিক কি এবং একটি প্রাইভেট কি। পাবলিক কি বিশ্বের সবার জন্য উন্মুক্ত রাখা হয়, আর প্রাইভেট কি অত্যন্ত গোপনে সুরক্ষিত রাখা হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Asymmetric math operates as a cryptographic one-way trapdoor function: easy to compute in one direction, but mathematically impossible to reverse without a trapdoor secret. Anyone in the world can use your public key to encrypt a secret message or verify your digital signature. However, only you, possessing the unique matching private key, can decrypt that ciphertext or generate new signatures.',
        bn: 'অ্যাসিমেট্রিক গণিত একটি ক্রিপ্টোগ্রাফিক ট্র্যাপডোর ফাংশন হিসেবে কাজ করে: একদিকে গণনা করা অত্যন্ত সহজ, কিন্তু গোপন ট্র্যাপডোর ছাড়া উল্টো দিক থেকে সমাধান করা প্রায় অসম্ভব। বিশ্বের যে কেউ আপনার পাবলিক কি ব্যবহার করে বার্তা এনক্রিপ্ট করতে পারে বা আপনার ডিজিটাল স্বাক্ষর যাচাই করতে পারে। কিন্তু একমাত্র আপনি, যার কাছে নিজস্ব প্রাইভেট কি রয়েছে, সেই সাইফারটেক্সট ডিক্রিপ্ট করতে পারেন বা নতুন স্বাক্ষর তৈরি করতে পারেন।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. RSA (Rivest–Shamir–Adleman)',
            bn: '১. আরএসএ (RSA)'
          },
          text: {
            en: 'Based on the computational difficulty of factoring the product of two massive prime numbers (p and q). Multiplying primes is trivial, but factoring a 2048-bit composite modulus is computationally intractable.',
            bn: 'দুটি বিশাল মৌলিক সংখ্যার গুণফলকে বিশ্লেষণ করার গাণিতিক জটিলতার ওপর প্রতিষ্ঠিত। মৌলিক সংখ্যা গুণ করা সহজ হলেও ২০৪৮-বিটের যৌগিক সংখ্যাকে ভেঙে মৌলিক উৎপাদক বের করা অসম্ভব।'
          },
        },
        {
          title: {
            en: '2. Elliptic Curve Cryptography (ECC)',
            bn: '২. উপবৃত্তাকার কার্ভ ক্রিপ্টোগ্রাফি (ECC)'
          },
          text: {
            en: 'Based on point multiplication on algebraic elliptic curves (y^2 = x^3 + ax + b). A compact 256-bit ECC key (Curve25519) provides the same security level as a massive 3072-bit RSA key with far less CPU overhead.',
            bn: 'বীজগাণিতিক উপবৃত্তাকার কার্ভের বিন্দু গুণনের ওপর প্রতিষ্ঠিত। একটি ছোট ২৫৬-বিট ECC কি (যেমন Curve25519) একটি বিশাল ৩০৭২-বিট RSA কি-এর সমান নিরাপত্তা দেয় এবং প্রসেসরে অনেক কম চাপ সৃষ্টি করে।'
          },
        },
        {
          title: {
            en: '3. Digital Signatures (ECDSA / Ed25519)',
            bn: '৩. ডিজিটাল স্বাক্ষর (ECDSA / Ed25519)'
          },
          text: {
            en: 'Encryption in reverse: the sender computes a cryptographic hash of a document and signs it with their private key. Anyone with the public key verifies that the author signed it and the document was not altered.',
            bn: 'এনক্রিপশনের বিপরীত রূপ: প্রেরক বার্তার হ্যাশ তৈরি করে নিজস্ব প্রাইভেট কি দিয়ে সই করেন। পাবলিক কি থাকা যে কেউ নিশ্চিত হতে পারে যে বার্তাটি তিনিই সই করেছেন এবং এর একটি অক্ষরও পরিবর্তিত হয়নি।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Asymmetric Key Pair Architecture: 3 Payloads Locked Publicly and Recovered Privately',
        bn: 'অ্যাসিমেট্রিক কি পেয়ার আর্কিটেকচার: ৩ টি পেলোড পাবলিক কি দিয়ে তালাবদ্ধ ও প্রাইভেট কি দিয়ে উদ্ধার'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Asymmetric cryptography workflow showing 3 payloads encrypted with public key and decrypted with private key">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ASYMMETRIC RSA-2048 CRYPTOGRAPHIC PIPELINE (PUBLIC ENCRYPT / PRIVATE DECRYPT)</text>
  
  <!-- Left Box: Plaintext Inputs -->
  <g transform="translate(35, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#0284c7"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. INPUT PAYLOADS</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="22" fill="#38bdf8" font-size="8.5" font-weight="bold">Payload 1: Financial Wire</text>
      <text x="10" y="38" fill="#ffffff" font-size="7.5">"Confidential financial wire payload"</text>
      <text x="10" y="52" fill="#a7f3d0" font-size="7.5">Awaiting public key locking</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="107" fill="#38bdf8" font-size="8.5" font-weight="bold">Payload 2: Legal Contract</text>
      <text x="10" y="123" fill="#ffffff" font-size="7.5">"Authorized legal contract document"</text>
      <text x="10" y="137" fill="#a7f3d0" font-size="7.5">Awaiting public key locking</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="10" y="192" fill="#38bdf8" font-size="8.5" font-weight="bold">Payload 3: Session Secret</text>
      <text x="10" y="208" fill="#ffffff" font-size="7.5">"Cryptographic session secret token"</text>
      <text x="10" y="222" fill="#a7f3d0" font-size="7.5">Awaiting public key locking</text>
    </g>
  </g>
  
  <!-- Middle Box: Public Key Ciphertext -->
  <g transform="translate(305, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#ca8a04" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#a16207"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. LOCKED PUBLICLY (3)</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#422006" stroke="#ca8a04"/>
      <text x="10" y="20" fill="#fde047" font-size="8.5" font-weight="bold">Ciphertext 1 (RSA-2048)</text>
      <text x="10" y="36" fill="#facc15" font-size="7.5">Hex: 71759fa07876a4fd...</text>
      <text x="10" y="50" fill="#fef08a" font-size="7.5">Encrypted with recipient public key</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#422006" stroke="#ca8a04"/>
      <text x="10" y="105" fill="#fde047" font-size="8.5" font-weight="bold">Ciphertext 2 (RSA-2048)</text>
      <text x="10" y="121" fill="#facc15" font-size="7.5">Hex: 52c5b781e85a25ac...</text>
      <text x="10" y="135" fill="#fef08a" font-size="7.5">Encrypted with recipient public key</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#422006" stroke="#ca8a04"/>
      <text x="10" y="190" fill="#fde047" font-size="8.5" font-weight="bold">Ciphertext 3 (RSA-2048)</text>
      <text x="10" y="206" fill="#facc15" font-size="7.5">Hex: 12a5120ebf4c9e09...</text>
      <text x="10" y="220" fill="#fef08a" font-size="7.5">Encrypted with recipient public key</text>
    </g>
  </g>
  
  <!-- Right Box: Decrypted Recovery -->
  <g transform="translate(575, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#059669"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. RECOVERED PRIVATELY (3/3)</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8.5" font-weight="bold">Decrypted 1: RECOVERED [✓]</text>
      <text x="10" y="36" fill="#34d399" font-size="7.5">"Confidential financial wire payload"</text>
      <text x="10" y="50" fill="#a7f3d0" font-size="7.5">Decrypted with recipient private key</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="105" fill="#6ee7b7" font-size="8.5" font-weight="bold">Decrypted 2: RECOVERED [✓]</text>
      <text x="10" y="121" fill="#34d399" font-size="7.5">"Authorized legal contract document"</text>
      <text x="10" y="135" fill="#a7f3d0" font-size="7.5">Decrypted with recipient private key</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="190" fill="#6ee7b7" font-size="8.5" font-weight="bold">Decrypted 3: RECOVERED [✓]</text>
      <text x="10" y="206" fill="#34d399" font-size="7.5">"Cryptographic session secret token"</text>
      <text x="10" y="220" fill="#a7f3d0" font-size="7.5">Decrypted with recipient private key</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Asymmetric mathematics enables secure communication over untrusted channels without requiring prior secret sharing</text>
</svg>`,
      caption: {
        en: 'The asymmetric RSA engine evaluates 3 payloads: 3 payloads are encrypted with the public key, and all 3 out of 3 are recovered using the matching private key.',
        bn: 'অ্যাসিমেট্রিক RSA ইঞ্জিন ৩ টি পেলোড মূল্যায়ন করে: ৩ টি পেলোড পাবলিক কি দিয়ে এনক্রিপ্ট হয় এবং ৩ টির মধ্যে ৩ টি পেলোডই প্রাইভেট কি দিয়ে উদ্ধার হয়।'
      },
    },
    {
      type: 'heading',
      id: 'asymmetric-rsa-engine-code',
      text: {
        en: 'Building an Asymmetric RSA Encryption & Signature Simulator in Node.js',
        bn: 'Node.js-এ অ্যাসিমেট্রিক RSA এনক্রিপশন ও ডিজিটাল স্বাক্ষর সিমুলেটর তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'asymmetric-rsa-engine.js',
      code: `const crypto = require('crypto');

// Generate a 2048-bit RSA asymmetric key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

class AsymmetricCryptoPipeline {
  constructor(pubKey, privKey) {
    this.publicKey = pubKey;
    this.privateKey = privKey;
  }

  // Encrypt with Public Key (OAEP padding)
  encrypt(plaintext) {
    return crypto.publicEncrypt(
      { key: this.publicKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
      Buffer.from(plaintext, 'utf8')
    );
  }

  // Decrypt with Private Key (OAEP padding)
  decrypt(ciphertextBuffer) {
    const decryptedBuffer = crypto.privateDecrypt(
      { key: this.privateKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
      ciphertextBuffer
    );
    return decryptedBuffer.toString('utf8');
  }

  // Sign with Private Key
  sign(data) {
    const signer = crypto.createSign('SHA256');
    signer.update(data);
    signer.end();
    return signer.sign(this.privateKey, 'hex');
  }

  // Verify with Public Key
  verify(data, signatureHex) {
    const verifier = crypto.createVerify('SHA256');
    verifier.update(data);
    verifier.end();
    return verifier.verify(this.publicKey, signatureHex, 'hex');
  }
}

const pipeline = new AsymmetricCryptoPipeline(publicKey, privateKey);

// 3 distinct payloads evaluated through public key locking and private recovery
const payloads = [
  'Confidential financial wire payload',
  'Authorized legal contract document',
  'Cryptographic session secret token'
];

let totalLocked = 0;
let totalRecovered = 0;

console.log('=== Asymmetric RSA-2048 Cryptographic Audit ===\\n');
payloads.forEach((payload, index) => {
  totalLocked++;
  const encryptedCipher = pipeline.encrypt(payload);
  const decryptedText = pipeline.decrypt(encryptedCipher);

  const isMatched = decryptedText === payload;
  if (isMatched) totalRecovered++;

  console.log(\`[\${index + 1}] Original:      "\${payload}"\`);
  console.log(\`    Ciphertext:    \${encryptedCipher.toString('hex').slice(0, 32)}... (RSA-2048 OAEP)\`);
  console.log(\`    Recovered:     "\${decryptedText}" [Match: \${isMatched ? 'YES ✓' : 'NO ✗'}]\\n\`);
});

console.log('=== Asymmetric Audit Summary ===');
console.log('Payloads Evaluated:  ', payloads.length);
console.log('Locked by Public Key:', totalLocked);
console.log('Opened by Private:   ', \`\${totalRecovered}/\${payloads.length}\`);`,
      caption: {
        en: 'The RSA asymmetric engine tests 3 payloads: 3 payloads are locked with the public key, and all 3 are recovered with the private key.',
        bn: 'RSA অ্যাসিমেট্রিক ইঞ্জিন ৩ টি পেলোড পরীক্ষা করে: ৩ টি পেলোড পাবলিক কি দিয়ে তালাবদ্ধ হয় এবং ৩ টি পেলোডই প্রাইভেট কি দিয়ে উদ্ধার হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'RSA OAEP vs Insecure PKCS#1 v1.5 Padding',
        bn: 'RSA OAEP বনাম অনিরাপদ PKCS#1 v1.5 প্যাডিং'
      },
      text: {
        en: 'When encrypting data with RSA, raw textbook RSA without padding (C = M^e mod n) is catastrophically insecure. Multiplying two ciphertexts produces the ciphertext of the multiplied plaintexts. In 1998, Daniel Bleichenbacher proved that older PKCS#1 v1.5 padding leaks information through error responses. Modern systems must exclusively use Optimal Asymmetric Encryption Padding (RSA-OAEP) to ensure security.',
        bn: 'আরএসএ দিয়ে ডাটা এনক্রিপ্ট করার সময় প্যাডিং ছাড়া সাধারণ সূত্র (C = M^e mod n) ব্যবহার করা অত্যন্ত বিপজ্জনক। ২টি সাইফারটেক্সট গুণ করলে মূল প্লেইনটেক্সট গুণ হয়ে যায়। ১৯৯৮ সালে ড্যানিয়েল ব্লাইখেনবাখার প্রমাণ করেন যে পুরানো PKCS#১ v১.৫ প্যাডিং ব্যবহার করলে এরর মেসেজের সূত্র ধরে আক্রমণকারী পুরো বার্তা উদ্ধার করে নিতে পারে। আধুনিক সফটওয়্যার সিস্টেমে সর্বদা অপ্টিমাল অ্যাসিমেট্রিক এনক্রিপশন প্যাডিং (RSA-OAEP) ব্যবহার করা বাধ্যতামূলক।'
      },
    },
  ],
  exercises: [
    {
      id: 'enc-asym-ex-1',
      kind: 'predict',
      topic: 'locked-payloads-count',
      question: {
        en: 'In the asymmetric RSA encryption audit of the 3 test payloads, how many payloads were successfully encrypted using the public key? (3). Type the number.',
        bn: '৩ টি টেস্ট পেলোডের অ্যাসিমেট্রিক আরএসএ এনক্রিপশন নিরীক্ষায় সর্বমোট কয়টি পেলোড পাবলিক কি ব্যবহার করে সফলভাবে এনক্রিপ্ট করা হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'All 3 payloads were locked.',
        bn: 'সবকটি ৩ টি পেলোডই তালাবদ্ধ হয়েছিল।'
      },
      explanation: {
        en: 'All 3 payloads (financial wire, legal contract, and session secret) were locked into ciphertext using the public key.',
        bn: '৩ টি পেলোডই পাবলিক কি দিয়ে সফলভাবে সাইফারটেক্সটে রূপান্তরিত হয়েছিল।'
      },
    },
    {
      id: 'enc-asym-ex-2',
      kind: 'mcq',
      topic: 'public-vs-private-key-roles',
      question: {
        en: 'In asymmetric public-key encryption, which key is used to encrypt data and which key is used to decrypt it?',
        bn: 'অ্যাসিমেট্রিক পাবলিক-কি এনক্রিপশনে কোন চাবি দিয়ে এনক্রিপ্ট করা হয় এবং কোন চাবি দিয়ে ডিক্রিপ্ট করা হয়?'
      },
      options: [
        {
          en: 'Anyone uses the recipient public key to encrypt data; only the recipient possessing the matching private key can decrypt it',
          bn: 'যেকোনো প্রেরক প্রাপকের উন্মুক্ত পাবলিক কি ব্যবহার করে ডাটা এনক্রিপ্ট করে; আর কেবল সেই প্রাপক নিজস্ব গোপন প্রাইভেট কি দিয়ে তা ডিক্রিপ্ট করতে পারেন',
        },
        {
          en: 'The private key encrypts for everyone and the public key decrypts for one person',
          bn: 'প্রাইভেট কি সবার জন্য এনক্রিপ্ট করে আর পাবলিক কি দিয়ে একজন ব্যক্তি ডিক্রিপ্ট করেন',
        },
        {
          en: 'Both sender and receiver use the exact same private key',
          bn: 'প্রেরক এবং প্রাপক উভয়ই একই প্রাইভেট কি ব্যবহার করেন',
        },
        {
          en: 'Public keys can only decrypt images while private keys decrypt text',
          bn: 'পাবলিক কি কেবল ছবি ডিক্রিপ্ট করতে পারে আর প্রাইভেট কি টেক্সট ডিক্রিপ্ট করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Public key encrypts; matching private key decrypts.',
        bn: 'পাবলিক কি দিয়ে তালা দেওয়া হয়; প্রাইভেট কি দিয়ে তালা খোলা হয়।'
      },
      explanation: {
        en: 'Because the public key is widely distributed, anyone can send confidential messages to the private key holder without prior secret coordination.',
        bn: 'পাবলিক কি সবার কাছে থাকায় যে কেউই আগে থেকে যোগাযোগ না করেই নিরাপদে গোপন বার্তা পাঠাতে পারে।'
      },
    },
    {
      id: 'enc-asym-ex-3',
      kind: 'mcq',
      topic: 'digital-signature-verification-mechanism',
      question: {
        en: 'How does a Digital Signature differ fundamentally from public-key encryption?',
        bn: 'একটি ডিজিটাল স্বাক্ষর কীভাবে পাবলিক-কি এনক্রিপশনের চেয়ে মৌলিকভাবে ভিন্ন?'
      },
      options: [
        {
          en: 'In digital signatures, the signer computes a hash and encrypts it using their private key; anyone with the signer public key can verify the signature and prove authenticity and non-repudiation',
          bn: 'ডিজিটাল স্বাক্ষরে প্রেরক বার্তার হ্যাশ তৈরি করে নিজস্ব প্রাইভেট কি দিয়ে সই করেন; আর পাবলিক কি থাকা যে কেউ সেই স্বাক্ষর যাচাই করে প্রেরকের সত্যতা ও অপস্বীকৃতি নিশ্চিত করতে পারে',
        },
        {
          en: 'Digital signatures are physical ink signatures scanned by cameras',
          bn: 'ডিজিটাল স্বাক্ষর হলো ক্যামেরায় তোলা আসল কালির সই',
        },
        {
          en: 'Digital signatures can only be generated on Fridays',
          bn: 'ডিজিটাল স্বাক্ষর কেবল শুক্রবার তৈরি করা সম্ভব',
        },
        {
          en: 'Digital signatures make computer processors run twenty percent faster',
          bn: 'ডিজিটাল স্বাক্ষর কম্পিউটার প্রসেসরের গতি বিশ শতাংশ বাড়িয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Signatures use the private key to sign and public key to verify.',
        bn: 'ডিজিটাল স্বাক্ষরে প্রাইভেট কি দিয়ে সই করা হয় এবং পাবলিক কি দিয়ে যাচাই করা হয়।'
      },
      explanation: {
        en: 'Encryption guarantees confidentiality (only recipient can read). Signatures guarantee authenticity and integrity (only author could have produced it).',
        bn: 'এনক্রিপশন গোপনীয়তা রক্ষা করে (শুধু প্রাপক পড়তে পারেন)। স্বাক্ষর সত্যতা রক্ষা করে (শুধু আসল লেখকই এই সই দিতে পারেন)।'
      },
    },
    {
      id: 'enc-asym-ex-4',
      kind: 'predict',
      topic: 'recovered-payloads-count',
      question: {
        en: 'How many of the 3 locked payloads were recovered with 100% fidelity using the matching private key? (3). Type the number.',
        bn: 'তালাবদ্ধ ৩ টি পেলোডের মধ্যে সর্বমোট কয়টি পেলোড প্রাইভেট কি ব্যবহার করে ১০০% নির্ভুলতার সাথে উদ্ধার করা হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'All 3 payloads were recovered.',
        bn: 'সবকটি ৩ টি পেলোডই উদ্ধার হয়েছিল।'
      },
      explanation: {
        en: 'All 3 payloads decrypted with 100% fidelity (3/3), matching the original inputs perfectly using RSA-2048 OAEP private key decryption.',
        bn: 'সবকটি ৩ টি পেলোডই RSA-২০৪৮ OAEP প্রাইভেট কি ডিক্রিপশনের মাধ্যমে ১০০% নির্ভুলভাবে (৩/৩) উদ্ধার করা সম্ভব হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'asymmetric-crypto-quiz',
    title: {
      en: 'Asymmetric Cryptography & Public-Key Architecture Quiz',
      bn: 'অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি ও পাবলিক-কি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'enc-asym-qz-1',
        kind: 'mcq',
        topic: 'rsa-vs-ecc-efficiency-comparison',
        question: {
          en: 'Why is Elliptic Curve Cryptography (ECC) increasingly preferred over RSA in modern internet protocols (like TLS 1.3 and WireGuard)?',
          bn: 'আধুনিক ইন্টারনেট প্রোটোকলে (যেমন টিএলএস ১.৩ ও ওয়্যারগার্ড) আরএসএ (RSA)-এর চেয়ে উপবৃত্তাকার কার্ভ ক্রিপ্টোগ্রাফি (ECC) কেন ব্যাপকভাবে প্রাধান্য পাচ্ছে?'
        },
        options: [
          {
            en: 'ECC provides equivalent cryptographic security with dramatically smaller key sizes (e.g. 256-bit ECC matches 3072-bit RSA), enabling faster handshakes, lower network bandwidth, and less battery consumption on mobile devices',
            bn: 'ECC অনেক ছোট কি সাইজ দিয়ে সমান নিরাপত্তা দেয় (যেমন ২৫৬-বিট ECC একটি ৩০৭২-বিট RSA-এর সমান), যার ফলে হ্যান্ডশেক দ্রুত হয়, কম ব্যান্ডউইথ লাগে এবং মোবাইল ডিভাইসে ব্যাটারি খরচ অনেক কমে যায়',
          },
          {
            en: 'Because RSA keys cannot be stored on modern solid-state hard drives',
            bn: 'কারণ আধুনিক এসএসডি হার্ডড্রাইভে আরএসএ কি সংরক্ষণ করা যায় না',
          },
          {
            en: 'Because ECC was developed by computer gaming graphics companies',
            bn: 'কারণ ECC তৈরি করেছিল কম্পিউটার গেমিং গ্রাফিক্স কোম্পানিগুলো',
          },
          {
            en: 'Because international law bans RSA on mobile phones',
            bn: 'কারণ আন্তর্জাতিক আইনে মোবাইল ফোনে আরএসএ ব্যবহার নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: {
          en: '256-bit ECC offers the same mathematical strength as 3072-bit RSA with far less compute.',
          bn: '২৫৬-বিট ECC অনেক কম মেমোরি ও শক্তিতে ৩০৭২-বিট RSA-এর সমান নিরাপত্তা দেয়।'
        },
        explanation: {
          en: 'Smaller key sizes mean smaller certificates, faster network transmission, and orders of magnitude faster signature generation on client hardware.',
          bn: 'ছোট কি সাইজ থাকার কারণে নেটওয়ার্কে অল্প ব্যান্ডউইথ খরচ হয় এবং ক্লায়েন্ট ডিভাইসে খুব দ্রুত স্বাক্ষর তৈরি করা যায়।'
        },
      },
      {
        id: 'enc-asym-qz-2',
        kind: 'mcq',
        topic: 'hybrid-encryption-architecture',
        question: {
          en: 'Why do production systems never use asymmetric RSA to encrypt large multi-gigabyte video or database files directly?',
          bn: 'প্রোডাকশন সিস্টেমে কেন কয়েক গিগাবাইটের বড় ফাইল সরাসরি অ্যাসিমেট্রিক RSA দিয়ে এনক্রিপ্ট করা হয় না?'
        },
        options: [
          {
            en: 'Asymmetric encryption is computationally expensive (hundreds of times slower than AES) and RSA can only encrypt data smaller than its key modulus (e.g. ~214 bytes for RSA-2048 with OAEP); hybrid encryption encrypts a random AES key with RSA, and encrypts the large file with AES',
            bn: 'অ্যাসিমেট্রিক এনক্রিপশন প্রসেসরে অনেক বেশি চাপ সৃষ্টি করে (AES-এর চেয়ে শত গুণ ধীরগতির) এবং RSA কেবল তার কি সাইজের চেয়ে ছোট ডাটা এনক্রিপ্ট করতে পারে (২০৪৮-বিটে মাত্র ২১৪ বাইট); তাই হাইব্রিড পদ্ধতিতে আরএসএ দিয়ে একটি ছোট AES কি এনক্রিপ্ট করা হয় এবং মূল ফাইলটি AES দিয়ে দ্রুত এনক্রিপ্ট করা হয়',
          },
          {
            en: 'Because video files delete RSA keys automatically during streaming',
            bn: 'কারণ ভিডিও ফাইল চলার সময় আরএসএ কি স্বয়ংক্রিয়ভাবে ডিলিট হয়ে যায়',
          },
          {
            en: 'Because RSA algorithms only understand text characters and not binary bits',
            bn: 'কারণ আরএসএ অ্যালগরিদম শুধু টেক্সট পড়তে পারে, কোনো বাইনারি ফাইল বোঝে না',
          },
          {
            en: 'Because encrypting large files with RSA requires sixteen computer mice',
            bn: 'কারণ বড় ফাইল এনক্রিপ্ট করতে একসাথে ষোলটি মাউস ব্যবহারের প্রয়োজন হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'RSA cannot encrypt payloads larger than its key modulus and is computationally slow.',
          bn: 'RSA কি-এর চেয়ে বড় ডাটা সরাসরি এনক্রিপ্ট করতে পারে না এবং এটি অনেক ধীরগতির।'
        },
        explanation: {
          en: 'Hybrid encryption solves this perfectly: RSA handles the small 32-byte key exchange, and AES-256 handles the multi-gigabyte payload.',
          bn: 'হাইব্রিড ক্রিপ্টোগ্রাফি এই সমস্যার সেরা সমাধান: আরএসএ দিয়ে মাত্র ৩২ বাইটের চাবি শেয়ার করা হয় এবং AES দিয়ে পুরো বড় ফাইল এনক্রিপ্ট হয়।'
        },
      },
      {
        id: 'enc-asym-qz-3',
        kind: 'mcq',
        topic: 'quantum-computing-shors-algorithm',
        question: {
          en: 'Why does Shor\'s Algorithm on a cryptographically relevant quantum computer pose an existential threat to RSA and ECC, but not to AES-256?',
          bn: 'যথেষ্ট শক্তিশালী কোয়ান্টাম কম্পিউটারে শোরের অ্যালগরিদম (Shor\'s Algorithm) কেন RSA এবং ECC-এর জন্য চরম হুমকি হলেও AES-256 এর তেমন ক্ষতি করতে পারে না?'
        },
        options: [
          {
            en: 'Shor\'s algorithm solves prime factorization and discrete logarithms in polynomial time, completely breaking RSA and ECC. Symmetric AES-256 is only vulnerable to Grover\'s algorithm which halves the effective security from 256 bits to 128 bits, leaving it fully secure.',
            bn: 'শোরের অ্যালগরিদম পলিনোমিয়াল সময়ে মৌলিক উৎপাদক ও ডিসক্রিট লগারিদম ভেঙে ফেলতে পারে, যা RSA ও ECC-কে সম্পূর্ণ ধ্বংস করে। কিন্তু সিমেট্রিক AES-256 এর ক্ষেত্রে গ্রোভারের অ্যালগরিদম কেবল কার্যকারিতা অর্ধেক কমিয়ে ১২৮ বিটে নামায়, যা এখনো অত্যন্ত নিরাপদ।',
          },
          {
            en: 'Because quantum computers can only run programs written in Python',
            bn: 'কারণ কোয়ান্টাম কম্পিউটার কেবল পাইথনে লেখা প্রোগ্রাম চালাতে পারে',
          },
          {
            en: 'Because quantum computers cannot connect to the public internet',
            bn: 'কারণ কোয়ান্টাম কম্পিউটার ইন্টারনেটের সাথে যুক্ত হতে পারে না',
          },
          {
            en: 'Because quantum computing was outlawed by international copyright courts',
            bn: 'কারণ আন্তর্জাতিক কপিরাইট আদালত কোয়ান্টাম কম্পিউটিং নিষিদ্ধ করেছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Shor breaks factorization in polynomial time; Grover only halves symmetric key space.',
          bn: 'শোরের অ্যালগরিদম RSA ভেঙে ফেলে; গ্রোভারের অ্যালগরিদম AES-এর কি স্পেস অর্ধেক কমায়।'
        },
        explanation: {
          en: 'This is why the global cryptography community (NIST PQC) is standardizing lattice-based post-quantum algorithms (ML-KEM / Kyber and ML-DSA / Dilithium) to replace RSA and ECC.',
          bn: 'এই কারণেই বিশ্বব্যাপী বিজ্ঞানীরা RSA ও ECC-এর বিকল্প হিসেবে ল্যাটিস-ভিত্তিক পোস্ট-কোয়ান্টাম ক্রিপ্টোগ্রাফি (PQC) তৈরি করছেন।'
        },
      },
      {
        id: 'enc-asym-qz-4',
        kind: 'mcq',
        topic: 'diffie-hellman-key-exchange-mechanics',
        question: {
          en: 'How does the Diffie-Hellman (DH) key exchange allow Alice and Bob to arrive at an identical shared secret across a monitored public wire?',
          bn: 'ডিফি-হেলম্যান (DH) কি এক্সচেঞ্জ কীভাবে উন্মুক্ত নেটওয়ার্কে সবার সামনে আদান-প্রদান করেও অ্যালিস ও ববকে একই গোপন চাবিতে পৌঁছাতে সাহায্য করে?'
        },
        options: [
          {
            en: 'Each party generates a private exponent and transmits a public value (g^a and g^b mod p). Each party then raises the received public value to their own private exponent, computing the identical secret without exposing it.',
            bn: 'উভয় পক্ষ নিজস্ব প্রাইভেট এক্সপোনেন্ট তৈরি করে পাবলিক মান পাঠায় (g^a এবং g^b mod p)। এরপর অপর পক্ষ থেকে পাওয়া মানকে নিজের প্রাইভেট মান দিয়ে গুণ করে উভয়ই কোনো তথ্য উন্মুক্ত না করে একই গোপন চাবিতে পৌঁছে যায়।',
          },
          {
            en: 'By whispering the password through underground audio tubes',
            bn: 'মাটির নিচের অডিও পাইপ দিয়ে ফিসফিস করে পাসওয়ার্ড বলে দিয়ে',
          },
          {
            en: 'By dividing the internet bandwidth into two equal halves',
            bn: 'ইন্টারনেট ব্যান্ডউইথকে সমান দুই ভাগে ভাগ করে নিয়ে',
          },
          {
            en: 'By changing the IP addresses of all computers on the network to zero',
            bn: 'নেটওয়ার্কের সব কম্পিউটারের আইপি অ্যাড্রেস শূন্য করে দিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'g^(ab) mod p is computed independently on both ends without transmitting ab.',
          bn: 'g^(ab) mod p উভয় প্রান্তেই নিজে নিজে বের করা হয়, গোপন সংখ্যাটি তারে পাঠানো হয় না।'
        },
        explanation: {
          en: 'An eavesdropper only sees g^a and g^b. Computing g^(ab) from g^a and g^b requires solving the Computational Diffie-Hellman (CDH) problem, which is computationally intractable.',
          bn: 'মাঝপথের কেউ শুধু g^a ও g^b দেখতে পায়। তা থেকে g^(ab) বের করা গাণিতিকভাবে অসম্ভব, ফলে গোপনীয়তা সম্পূর্ণ সুরক্ষিত থাকে।'
        },
      },
    ],
  },
  next: {
    slug: 'key-management',
    title: {
      en: 'Key Management & KMS: Key Derivation, Rotation & Envelope Encryption',
      bn: 'চাবি ব্যবস্থাপনা ও KMS: কি ডেরিভেশন, রোটেশন ও এনভেলপ এনক্রিপশন'
    },
  },
};
