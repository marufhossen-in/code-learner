import type { Lesson } from '../../../lib/types';

export const DigitalSignaturesLesson: Lesson = {
  slug: 'digital-signatures',
  tech: 'hashing',
  title: {
    en: 'Digital Signatures & PKI: Ed25519, RSA-PSS & Provenance',
    bn: 'ডিজিটাল সিগনেচার ও PKI: Ed25519, RSA-PSS ও সত্যতা'
  },
  summary: {
    en: 'Bridge hashing and asymmetric cryptography with digital signatures: understand hash-then-sign workflows, non-repudiation, Ed25519 vs RSA-PSS, PKI certificate chains, and live signature verification.',
    bn: 'ডিজিটাল সিগনেচারের মাধ্যমে হ্যাশিং ও অ্যাসাইমেট্রিক ক্রিপ্টোগ্রাফির মেলবন্ধন: হ্যাশ-দেন-সাইন কৌশল, নন-রেপুডিয়েশন, Ed25519 বনাম RSA-PSS, PKI সার্টিফিকেট চেইন এবং সরাসরি সিগনেচার যাচাইকরণ।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'hash-then-sign',
      text: {
        en: 'The Hash-Then-Sign Paradigm: Why Direct Asymmetric Signing Fails',
        bn: 'হ্যাশ-দেন-সাইন প্যারাডাইম: সরাসরি অ্যাসাইমেট্রিক সাইনিং কেন ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Asymmetric encryption algorithms (such as RSA—named after Rivest, Shamir, and Adleman—and modern elliptic curves) rely on complex modular arithmetic and point multiplication. These mathematical operations are thousands of times slower than symmetric ciphers or hash functions. Attempting to sign a 500 megabyte legal contract or video file by directly applying private key encryption across all raw bytes would exhaust CPU cores and take minutes to complete.',
        bn: 'অ্যাসাইমেট্রিক এনক্রিপশন অ্যালগরিদম (যেমন রিভেস্ট, শামির ও অ্যাডেলম্যানের নামানুসারে RSA—এবং আধুনিক উপবৃত্তাকার বক্ররেখা বা Elliptic Curve) জটিল মডুলার পাটিগণিত ও পয়েন্ট মাল্টিপ্লিকেশনের ওপর নির্ভর করে। এই গাণিতিক অপারেশনগুলো সিমেট্রিক সাইফার বা হ্যাশ ফাংশনের চেয়ে হাজার গুণ বেশি ধীরগতির। সরাসরি প্রাইভেট কি দিয়ে কোনো ৫০০ মেগাবাইট আইনি চুক্তিপত্র বা ভিডিও ফাইলের প্রতিটি বাইট সাইন করতে গেলে সিপিইউর ওপর প্রচণ্ড চাপ পড়বে এবং কয়েক মিনিট সময় অপচয় হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern cryptography solves this performance barrier through the hash-then-sign architecture. First, a cryptographic hash function like SHA-256 compresses an input of any size down to a fixed 32-byte (256-bit) digest in milliseconds. Then, the signer performs the asymmetric private key calculation only on that small 32-byte digest. Because cryptographic hashes guarantee collision resistance, signing the digest provides the exact same mathematical security as signing the entire multi-gigabyte file.',
        bn: 'আধুনিক ক্রিপ্টোগ্রাফি হ্যাশ-দেন-সাইন আর্কিটেকচারের মাধ্যমে এই কর্মক্ষমতার বাধা দূর করে। প্রথমে SHA-২৫৬ এর মতো একটি ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন যেকোনো আকারের ফাইলকে মাত্র কয়েক মিলিসেকেন্ডে একটি নির্দিষ্ট ৩২-বাইট (২৫৬-বিট) ডাইজেস্টে সংকুচিত করে। তারপর স্বাক্ষরকারী শুধুমাত্র সেই ছোট্ট ৩২-বাইট ডাইজেস্টের ওপর প্রাইভেট কি দিয়ে গাণিতিক স্বাক্ষর সম্পন্ন করেন। যেহেতু ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন কলিশন রেজিস্ট্যান্স নিশ্চিত করে, তাই ডাইজেস্ট সাইন করা পুরো মাল্টি-গিগাবাইট ফাইল সরাসরি সাইন করার সমান গাণিতিক নিরাপত্তা দেয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Hash-Then-Sign Architecture: Creation and Verification Pipeline',
        bn: 'হ্যাশ-দেন-সাইন আর্কিটেকচার: তৈরি ও যাচাইকরণ পাইপলাইন'
      },
      svg: `<svg viewBox="0 0 740 340" font-family="system-ui, sans-serif" role="img" aria-label="Digital signature creation and verification workflow">
  <rect width="740" height="340" rx="12" fill="#0f172a" />

  <!-- Signer Side (Left) -->
  <g transform="translate(30, 30)">
    <rect width="320" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="160" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Step 1: Signer (Sender)</text>
    
    <rect x="20" y="45" width="280" height="32" rx="4" fill="#0369a1" />
    <text x="160" y="66" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle">Document Data (Arbitrary Size)</text>
    
    <path d="M 160 77 L 160 92" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
    <text x="160" y="105" fill="#e2e8f0" font-size="11" text-anchor="middle">SHA-256 Hash Digest (32 bytes)</text>
    
    <rect x="20" y="120" width="280" height="42" rx="4" fill="#4338ca" />
    <text x="160" y="137" fill="#c7d2fe" font-size="11" text-anchor="middle">Sign with Sender Private Key</text>
    <text x="160" y="153" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Generates Digital Signature (64 bytes)</text>
  </g>

  <!-- Verifier Side (Right) -->
  <g transform="translate(390, 30)">
    <rect width="320" height="180" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <text x="160" y="28" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Step 2: Verifier (Receiver)</text>
    
    <rect x="20" y="45" width="130" height="40" rx="4" fill="#0369a1" />
    <text x="85" y="63" fill="#ffffff" font-size="10" text-anchor="middle">Received Doc</text>
    <text x="85" y="77" fill="#bae6fd" font-size="10" text-anchor="middle">Local SHA-256</text>

    <rect x="170" y="45" width="130" height="40" rx="4" fill="#4338ca" />
    <text x="235" y="63" fill="#ffffff" font-size="10" text-anchor="middle">Signature +</text>
    <text x="235" y="77" fill="#c7d2fe" font-size="10" text-anchor="middle">Public Key</text>

    <path d="M 85 85 L 130 115" stroke="#94a3b8" stroke-width="2" />
    <path d="M 235 85 L 190 115" stroke="#94a3b8" stroke-width="2" />

    <rect x="70" y="120" width="180" height="42" rx="4" fill="#047857" />
    <text x="160" y="137" fill="#d1fae5" font-size="11" text-anchor="middle">Compare Digests</text>
    <text x="160" y="153" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Match = Authentic & Untampered</text>
  </g>

  <!-- Transmission Channel -->
  <g transform="translate(30, 230)">
    <rect width="680" height="85" rx="8" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="28" fill="#e2e8f0" font-size="13" font-weight="bold" text-anchor="middle">Transmitted over Public Internet: [Original Document + Digital Signature]</text>
    <text x="340" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">Integrity: Any modification to the document invalidates the mathematical signature match.</text>
    <text x="340" y="70" fill="#a78bfa" font-size="11" font-weight="600" text-anchor="middle">Authenticity & Non-Repudiation: Only the holder of the private key could have produced the signature.</text>
  </g>
</svg>`,
      caption: {
        en: 'The hash-then-sign workflow: the sender hashes the data and signs only the 32-byte digest; the receiver verifies using the public key.',
        bn: 'হ্যাশ-দেন-সাইন ওয়ার্কফ্লো: প্রেরক ডাটাকে হ্যাশ করে শুধুমাত্র ৩২-বাইট ডাইজেস্ট সাইন করেন; প্রাপক পাবলিক কি দিয়ে তা যাচাই করেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Digital Signature',
          def: {
            en: 'A mathematical proof linking a message digest to an asymmetric private key, guaranteeing authenticity and integrity.',
            bn: 'একটি গাণিতিক প্রমাণ যা কোনো মেসেজ ডাইজেস্টকে একটি প্রাইভেট কি এর সাথে যুক্ত করে সত্যতা ও অবিকৃত অবস্থা নিশ্চিত করে।'
          }
        },
        {
          term: 'Non-Repudiation',
          def: {
            en: 'A legal and cryptographic guarantee ensuring that a private key holder cannot deny having authorized a signed message.',
            bn: 'একটি আইনি ও ক্রিপ্টোগ্রাফিক নিশ্চয়তা যার ফলে প্রাইভেট কি এর মালিক স্বাক্ষরিত মেসেজ অনুমোদনের কথা অস্বীকার করতে পারেন না।'
          }
        },
        {
          term: 'Ed25519',
          def: {
            en: 'A modern, high-speed digital signature scheme using Edwards-curve Curve25519 with 32-byte keys and constant-time execution.',
            bn: 'এডওয়ার্ডস-কার্ভ Curve25519 ভিত্তিক একটি আধুনিক, উচ্চগতির ডিজিটাল সিগনেচার অ্যালগরিদম যাতে ৩২-বাইট কি এবং কনস্ট্যান্ট-টাইম এক্সিকিউশন থাকে।'
          }
        },
        {
          term: 'Certificate Authority (CA)',
          def: {
            en: 'A trusted entity that issues signed digital certificates binding an organization identity to their public key.',
            bn: 'একটি বিশ্বস্ত প্রতিষ্ঠান যা কোনো সংস্থার পরিচয়ের সাথে তাদের পাবলিক কি যুক্ত করে স্বাক্ষরিত ডিজিটাল সার্টিফিকেট প্রদান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'modern-signature-schemes',
      text: {
        en: 'Modern Algorithms: Ed25519 vs RSA-PSS vs ECDSA',
        bn: 'আধুনিক অ্যালগরিদম: Ed25519 বনাম RSA-PSS বনাম ECDSA'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When selecting a signature scheme for modern software systems, engineers choose between three principal algorithms. Historic RSA PKCS#1 v1.5 padding suffered from bleeding-edge side-channel vulnerabilities like Bleichenbacher padding oracle attacks. Modern RSA uses RSA-PSS (Probabilistic Signature Scheme), which includes random salt in the signature and provides provable mathematical security, though key sizes must be at least 2048 to 4096 bits to remain secure.',
        bn: 'আধুনিক সফটওয়্যার সিস্টেমের জন্য সিগনেচার অ্যালগরিদম বেছে নেওয়ার সময় প্রকৌশলীরা মূলত ৩টি প্রধান অ্যালগরিদম বিবেচনা করেন। ঐতিহাসিক RSA PKCS#1 v1.5 প্যাডিং ব্লিচেনবাখের প্যাডিং ওরাকলের মতো মারাত্মক সাইড-চ্যানেল আক্রমণের শিকার হয়েছিল। আধুনিক আরএসএ এখন RSA-PSS (প্রোবাবিলিস্টিক সিগনেচার স্কিম) ব্যবহার করে, যাতে র্যান্ডম সল্ট অন্তর্ভুক্ত থাকে এবং এটি গাণিতিকভাবে প্রমাণিত নিরাপত্তা দেয়, যদিও নিরাপদ থাকতে কি-এর আকার কমপক্ষে ২০৪৮ থেকে ৪০৯৬ বিট হতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Elliptic Curve Digital Signature Algorithm (ECDSA) reduces key sizes to 256 bits, but it suffers from a fatal implementation flaw: every single signature generation requires a unique random integer called a nonce k. In the year 2010, attackers cracked the Sony PlayStation 3 master signing key because the firmware engineers reused the exact same static nonce k across multiple signatures. Reusing k allows an observer to solve two linear equations and calculate the private key in less than 1 second.',
        bn: 'এলিপটিক কার্ভ ডিজিটাল সিগনেচার অ্যালগরিদম (ECDSA) কি সাইজ কমিয়ে ২৫৬ বিটে নামিয়ে আনে, কিন্তু এর বাস্তবায়নে একটি ভয়াবহ দুর্বলতা রয়েছে: প্রতিটি স্বাক্ষরের জন্য একটি সম্পূর্ণ ইউনিক র্যান্ডম পূর্ণসংখ্যা নন্স k প্রয়োজন হয়। ২০১০ সালে আক্রমণকারীরা সোনি প্লেস্টেশন ৩ এর মাস্টার সাইনিং কি বের করে ফেলেছিল, কারণ প্রকৌশলীরা একাধিক স্বাক্ষরে হুবহু একই স্থির নন্স k ব্যবহার করেছিলেন। একই k পুনরায় ব্যবহারের ফলে আক্রমণকারী সাধারণ বীজগণিতের সাহায্যে ২টি সমীকরণ সমাধান করে ১ সেকেন্ডের কম সময়ে আসল প্রাইভেট কি বের করে ফেলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Ed25519 (Edwards-curve Digital Signature Algorithm over Curve25519) solves this flaw by generating the nonce deterministically through a SHA-512 hash of the private key and the document payload. Ed25519 cannot leak private keys through poor random number generators. It delivers constant-time execution immune to CPU cache timing attacks, uses compact 32-byte public keys, and produces 64-byte signatures. Ed25519 is now the recommended default for OpenSSH, Git signing, TLS 1.3, and modern APIs.',
        bn: 'Ed25519 (Curve25519 ভিত্তিক এডওয়ার্ডস-কার্ভ ডিজিটাল সিগনেচার অ্যালগরিদম) প্রাইভেট কি এবং ডকুমেন্টের একটি SHA-৫১২ হ্যাশ থেকে নির্ধারিত পদ্ধতিতে (ডিটারমিনিস্টিকালি) নন্স তৈরি করে এই দুর্বলতা দূর করে। Ed25519 দুর্বল র্যান্ডম জেনারেটরের কারণে কখনোই প্রাইভেট কি ফাঁস করে না। এটি কনস্ট্যান্ট-টাইমে চলে তাই সিপিইউ ক্যাশ টাইমিং আক্রমণ প্রতিরোধ করে, এর পাবলিক কি মাত্র ৩২ বাইট এবং সিগনেচার ৬৪ বাইট। বর্তমানে OpenSSH, গিট সাইনিং, TLS 1.3 এবং আধুনিক এপিআই-এর জন্য Ed25519 ডিফল্ট স্ট্যান্ডার্ড।'
      }
    },
    {
      type: 'heading',
      id: 'pki-certificates',
      text: {
        en: 'Public Key Infrastructure (PKI) & X.509 Certificate Chains',
        bn: 'পাবলিক কি ইনফ্রাস্ট্রাকচার (PKI) ও X.509 সার্টিফিকেট চেইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A digital signature only proves that whoever generated the signature held the corresponding private key. It does not answer who owns that private key. An attacker could easily generate their own brand-new Ed25519 keypair, sign a fraudulent invoice, and claim it came from your bank. To solve identity binding, the web relies on Public Key Infrastructure (PKI) and X.509 certificates.',
        bn: 'একটি ডিজিটাল স্বাক্ষর শুধুমাত্র এটি প্রমাণ করে যে স্বাক্ষরকারীর কাছে সংশ্লিষ্ট প্রাইভেট কিটি ছিল। কিন্তু সেই প্রাইভেট কি-এর আসল মালিক কে, তা স্বাক্ষর নিজে বলতে পারে না। কোনো আক্রমণকারী নিজের একটি নতুন Ed25519 কি-পেয়ার তৈরি করে ভুয়া চালান সাইন করে দাবি করতে পারে এটি আপনার ব্যাংকের পাঠানো। পরিচয়ের এই সত্যতা নিশ্চিতে ইন্টারনেট ব্যবস্থা পাবলিক কি ইনফ্রাস্ট্রাকচার (PKI) এবং X.509 সার্টিফিকেটের ওপর নির্ভর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A certificate authority (CA) inspects an organization domain ownership and corporate identity, then creates a digital certificate containing the domain name, company details, expiration date, and public key. The CA signs this bundle using its own private root key. Every operating system and web browser ships with a pre-installed store of trusted root CA public keys. When you visit an HTTPS site, your browser verifies the cryptographic signature chain from root CA to intermediate CA down to the web server leaf certificate.',
        bn: 'একটি সার্টিফিকেট অথোরিটি (CA) কোনো প্রতিষ্ঠানের ডোমেইন মালিকানা এবং পরিচয় যাচাই করে একটি ডিজিটাল সার্টিফিকেট তৈরি করে, যাতে ডোমেইনের নাম, প্রতিষ্ঠানের তথ্য, মেয়াদ উত্তীর্ণের তারিখ এবং পাবলিক কি থাকে। সিএ তার নিজস্ব প্রাইভেট রুট কি দিয়ে এই বান্ডিলটিতে ডিজিটাল সাইন করে। প্রতিটি অপারেটিং সিস্টেম ও ব্রাউজারে বিশ্বস্ত রুট সিএ-এর পাবলিক কি আগে থেকেই সংরক্ষণ করা থাকে। যখন আপনি কোনো HTTPS সাইট ভিজিট করেন, তখন ব্রাউজার রুট সিএ থেকে ইন্টারমিডিয়েট সিএ হয়ে ওয়েব সার্ভারের লিফ সার্টিফিকেট পর্যন্ত ক্রিপ্টোগ্রাফিক চেইন যাচাই করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-ed25519-engine',
      text: {
        en: 'Executable Node.js Engine: Ed25519 Key Generation, Signing & Tamper Defense',
        bn: 'রানযোগ্য Node.js ইঞ্জিন: Ed25519 কি তৈরি, সাইনিং ও টেম্পার প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js script utilizing modern Ed25519 cryptography. It creates an asymmetric keypair, signs an authorization document, verifies its cryptographic authenticity, and proves how a single altered character in the message causes immediate verification rejection.',
        bn: 'নিচে আধুনিক Ed25519 ক্রিপ্টোগ্রাফি ব্যবহার করে একটি সম্পূর্ণ Node.js স্ক্রিপ্ট দেওয়া হলো। এটি একটি অ্যাসাইমেট্রিক কি-পেয়ার তৈরি করে, একটি অনুমোদনপত্র সাইন করে, এর ক্রিপ্টোগ্রাফিক সত্যতা নিশ্চিত করে এবং দেখায় কীভাবে মেসেজের মাত্র ১টি অক্ষর পরিবর্তনের ফলেও তাৎক্ষণিকভাবে ভেরিফিকেশন বাতিল হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Generate Ed25519 keypair, sign financial authorization, and defend against tampering',
        bn: 'Ed25519 কি-পেয়ার তৈরি, আর্থিক অনুমোদনপত্রে স্বাক্ষর এবং টেম্পারিং প্রতিরোধ'
      },
      code: `const crypto = require('crypto');

// Generate high-speed, constant-time Ed25519 keypair
const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');

// Export raw public key to inspect its compact 32-byte format
const rawPublicKey = publicKey.export({ type: 'spki', format: 'der' });

// Original financial authorization contract
const originalContract = Buffer.from('WIRE_TRANSFER_AUTHORIZATION: 50000 USD TO VENDOR_ACCOUNT_9942', 'utf8');

// Sign the contract using private key (hash-then-sign internally handled by Ed25519)
const signature = crypto.sign(null, originalContract, privateKey);

// Step 1: Legitimate verification with public key
const isAuthentic = crypto.verify(null, originalContract, publicKey, signature);

// Step 2: Adversary tampers with the payment amount (from 50000 to 500000)
const tamperedContract = Buffer.from('WIRE_TRANSFER_AUTHORIZATION: 500000 USD TO VENDOR_ACCOUNT_9942', 'utf8');
const isTamperedAccepted = crypto.verify(null, tamperedContract, publicKey, signature);

console.log(\`[Ed25519 Engine] Signature generated successfully (\${signature.length} bytes).\`);
console.log(\`[Contract Verification] Genuine payload signature verified: \${isAuthentic}.\`);
console.log(\`[Tamper Defense] Tampered payload (500000 USD) rejected: \${!isTamperedAccepted}.\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Security Best Practice: Ed25519 vs RSA in 2026',
        bn: 'নিরাপত্তা সেরা অনুশীলন: ২০২৬ সালে Ed25519 বনাম RSA'
      },
      text: {
        en: 'Unless you have legacy compliance constraints requiring 2048-bit or 4096-bit RSA-PSS, default to Ed25519 for all new greenfield applications, SSH keys, and service-to-service microservice authentication. Ed25519 keys are only 32 bytes, signatures are 64 bytes, and signature generation is 10 times faster than RSA.',
        bn: 'যদি না আপনার কোনো পুরোনো নিয়ন্ত্রক বাধ্যবাধকতা থাকে যার জন্য ২০৪৮-বিট বা ৪০৯৬-বিট RSA-PSS প্রয়োজন, তবে সকল নতুন অ্যাপ্লিকেশন, এসএসএইচ কি এবং মাইক্রোসার্ভিস প্রমাণীকরণের জন্য নির্দ্বিধায় Ed25519 বেছে নিন। Ed25519 কি মাত্র ৩২ বাইট, সিগনেচার ৬৪ বাইট এবং সাইন করার গতি আরএসএ-এর চেয়ে ১০ গুণ দ্রুত।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive Digital Signature Verification Lab',
        bn: 'ইন্টারেক্টিভ ডিজিটাল সিগনেচার ল্যাব'
      },
      description: {
        en: 'Sign a message with an Ed25519 private key, test successful verification with the public key, and test rejection when message content is modified.',
        bn: 'Ed25519 প্রাইভেট কি দিয়ে একটি মেসেজ সাইন করুন, পাবলিক কি দিয়ে সফল ভেরিফিকেশন পরীক্ষা করুন এবং মেসেজ পরিবর্তন হলে কীভাবে বাতিল হয় তা দেখুন।'
      },
      code: `const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');
const payload = 'DEPLOY_BUILD_HASH_COMMIT_A1B2C3';

// Step 1: Produce mathematical signature
const signature = crypto.sign(null, Buffer.from(payload), privateKey);
console.log('Signature length:', signature.length, 'bytes');

// Step 2: Verify authentic payload
const valid = crypto.verify(null, Buffer.from(payload), publicKey, signature);
console.log('Verification result:', valid ? 'SIGNATURE_VALID' : 'SIGNATURE_INVALID');

// Step 3: Verify forged payload
const forgedPayload = payload + '_HACKED';
const forgedValid = crypto.verify(null, Buffer.from(forgedPayload), publicKey, signature);
console.log('Tampered check:    ', forgedValid ? 'SIGNATURE_VALID' : 'FORGERY_DETECTED');`,
      tests: [
        {
          name: {
            en: 'Verifies authentic signed payload',
            bn: 'আসল স্বাক্ষরিত পেলোড সফলভাবে যাচাই করে'
          },
          expected: 'SIGNATURE_VALID'
        },
        {
          name: {
            en: 'Detects unauthorized modifications and flags forgery',
            bn: 'অননুমোদিত পরিবর্তন শনাক্ত করে এবং জালিয়াতি হিসেবে বাতিল করে'
          },
          expected: 'FORGERY_DETECTED'
        }
      ]
    }
  ],
  exercises: [
    {
      id: "hsh-ds-ex-1",
      kind: 'mcq',
      topic: "hash-before-sign-speed",
      question: {
        en: "Why do cryptographic systems apply a hash function to large documents before generating a digital signature?",
        bn: "ডিজিটাল স্বাক্ষর তৈরি করার আগে ক্রিপ্টোগ্রাফিক সিস্টেম কেন বড় ডকুমেন্টকে প্রথমে হ্যাশ করে নেয়?"
      },
      options: [
        {
          en: "Asymmetric operations are computationally slow, so signing a fixed 32-byte digest provides huge speedups with identical security",
          bn: "অ্যাসাইমেট্রিক অপারেশন গাণিতিকভাবে অত্যন্ত ধীরগতির, তাই নির্দিষ্ট ৩২-বাইট ডাইজেস্ট সাইন করলে একই নিরাপত্তায় অবিশ্বাস্য গতি পাওয়া যায়"
        },
        {
          en: "Private keys can only encrypt words that contain fewer than 5 letters",
          bn: "প্রাইভেট কি কেবল ৫টির কম বর্ণ থাকা শব্দ এনক্রিপ্ট করতে পারে"
        },
        {
          en: "Hashing converts private keys into symmetric AES keys",
          bn: "হ্যাশিং প্রাইভেট কি-কে সিমেট্রিক AES কি-তে রূপান্তর করে"
        },
        {
          en: "Hashing allows anyone without a key to decrypt the document",
          bn: "হ্যাশিং এর ফলে কি ছাড়াই যে কেউ ডকুমেন্টটি ডিক্রিপ্ট করতে পারে"
        }
      ],
      answer: 0,
      hint: {
        en: "Signing 500 MB directly would require millions of modular exponentiations.",
        bn: "সরাসরি ৫০০ এমবি সাইন করতে লক্ষ লক্ষ মডুলার এক্সপোনেনশিয়েশনের প্রয়োজন হবে।"
      },
      explanation: {
        en: "Asymmetric math on gigabytes of data is completely impractical. Hashing compresses arbitrary messages to a small digest in milliseconds, and collision resistance ensures that signing the digest is mathematically equivalent to signing the entire document.",
        bn: "গিগাবাইট ডাটার ওপর অ্যাসাইমেট্রিক গণিত চালানো বাস্তবসম্মত নয়। হ্যাশিং মিলি সেকেন্ডের মধ্যে যেকোনো মেসেজকে ছোট ডাইজেস্টে রূপান্তর করে এবং কলিশন রেজিস্ট্যান্স নিশ্চিত করে যে ডাইজেস্ট সাইন করা সম্পূর্ণ ডকুমেন্ট সাইন করার সমান নিরাপদ।"
      }
    },
    {
      id: "hsh-ds-ex-2",
      kind: 'mcq',
      topic: "ecdsa-nonce-reuse-flaw",
      question: {
        en: "What disaster occurs if an ECDSA implementation reuses the exact same nonce k across two distinct message signatures?",
        bn: "ECDSA বাস্তবায়নে যদি ২টি ভিন্ন মেসেজ স্বাক্ষরে হুবহু একই নন্স k পুনরায় ব্যবহার করা হয়, তবে কী বিপর্যয় ঘটে?"
      },
      options: [
        {
          en: "An attacker can solve two simple linear equations and recover the private signing key completely",
          bn: "আক্রমণকারী ২টি সরল রৈখিক সমীকরণ সমাধান করে মূল প্রাইভেট সাইনিং কি পুরোপুরি বের করে ফেলতে পারে"
        },
        {
          en: "The signature file becomes 10 times larger on disk",
          bn: "ডিস্কে সিগনেচার ফাইলের আকার ১০ গুণ বড় হয়ে যায়"
        },
        {
          en: "The computer clock permanently stops ticking",
          bn: "কম্পিউটারের অভ্যন্তরীণ ঘড়ি চিরতরে বন্ধ হয়ে যায়"
        },
        {
          en: "The public key is deleted from the Certificate Authority directory",
          bn: "সার্টিফিকেট অথোরিটি ডিরেক্টরি থেকে পাবলিক কি মুছে যায়"
        }
      ],
      answer: 0,
      hint: {
        en: "It reveals the secret signing scalar through elementary algebra.",
        bn: "এটি সাধারণ বীজগণিতের মাধ্যমে গোপন সাইনিং স্কেলার ফাঁস করে দেয়।"
      },
      explanation: {
        en: "Reusing nonce k across two distinct signatures leaks the secret scalar through elementary algebra. This famous failure exposed Sony PlayStation 3 signing keys in the year 2010. Ed25519 avoids this completely by deriving k deterministically via SHA-512.",
        bn: "২টি ভিন্ন স্বাক্ষরে একই k ব্যবহার করলে সাধারণ বীজগণিতের মাধ্যমে গোপন স্কেলার ফাঁস হয়ে যায়। ২০১০ সালে এই ভুলের কারণেই সোনি প্লেস্টেশন ৩ এর মাস্টার কি ফাঁস হয়েছিল। Ed25519 অ্যালগরিদম SHA-৫১২ এর মাধ্যমে ডিটারমিনিস্টিক নন্স তৈরি করে এই সমস্যা চিরতরে দূর করে।"
      }
    },
    {
      id: "hsh-ds-ex-3",
      kind: 'mcq',
      topic: "signature-core-guarantees",
      question: {
        en: "Which three security properties are mathematically guaranteed by a valid digital signature?",
        bn: "একটি বৈধ ডিজিটাল সিগনেচার দ্বারা গাণিতিকভাবে কোন ৩টি নিরাপত্তা বৈশিষ্ট্য নিশ্চিত হয়?"
      },
      options: [
        {
          en: "Authentication (sender proof), Integrity (untampered content), and Non-repudiation (author cannot deny signing)",
          bn: "অথেনটিকেশন (প্রেরকের পরিচয়), ইন্টিগ্রিটি (অবিকৃত বিষয়বস্তু), এবং নন-রেপুডিয়েশন (স্বাক্ষর অস্বীকার করার সুযোগ না থাকা)"
        },
        {
          en: "Confidentiality, data compression, and faster internet speed",
          bn: "গোপনীয়তা, ডাটা কম্প্রেশন এবং দ্রুতগতির ইন্টারনেট সংযোগ"
        },
        {
          en: "Automatic file backup, virus removal, and disk defragmentation",
          bn: "স্বয়ংক্রিয় ফাইল ব্যাকআপ, ভাইরাস অপসারণ এবং ডিস্ক ডিফ্র্যাগমেন্টেশন"
        },
        {
          en: "Secret decryption without any cryptographic keys",
          bn: "কোনো ক্রিপ্টোগ্রাফিক কি ছাড়াই গোপনে সব মেসেজ ডিক্রিপ্ট করা"
        }
      ],
      answer: 0,
      hint: {
        en: "Signatures prove who signed, what was signed, and prevent denial.",
        bn: "স্বাক্ষর কে সাইন করেছে, কী সাইন করেছে এবং অস্বীকার করার সুযোগ বন্ধ করে।"
      },
      explanation: {
        en: "Digital signatures provide authentication (proves who signed), integrity (proves data was not altered), and non-repudiation (signer cannot deny possession of their unique private key). They do NOT provide confidentiality; the message itself is readable unless separately encrypted.",
        bn: "ডিজিটাল সিগনেচার অথেনটিকেশন (কে সাইন করেছে), ইন্টিগ্রিটি (ডাটা অবিকৃত আছে কিনা) এবং নন-রেপুডিয়েশন (প্রাইভেট কি দিয়ে সাইন করার পর অস্বীকার করা যায় না) নিশ্চিত করে। তবে এটি গোপনীয়তা দেয় না; মেসেজটি আলাদাভাবে এনক্রিপ্ট না করলে প্লেইনটেক্সট আকারে পড়া যায়।"
      }
    },
    {
      id: "hsh-ds-ex-4",
      kind: 'mcq',
      topic: "pki-trust-binding",
      question: {
        en: "Why does the internet require Certificate Authorities (CAs) and PKI rather than just raw public keys?",
        bn: "শুধুমাত্র সরাসরি পাবলিক কি ব্যবহারের বদলে ইন্টারনেটে কেন সার্টিফিকেট অথোরিটি (CA) ও PKI এর প্রয়োজন হয়?"
      },
      options: [
        {
          en: "To bind public keys to verified real-world identities, preventing attackers from substituting their own keys",
          bn: "যাচাইকৃত বাস্তব পরিচয়ের সাথে পাবলিক কি যুক্ত করতে, যাতে আক্রমণকারী নিজের কি প্রতিস্থাপন করতে না পারে"
        },
        {
          en: "Because public keys expire every 24 hours without a CA renewal",
          bn: "কারণ সিএ রিনিউয়াল ছাড়া পাবলিক কি প্রতি ২৪ ঘণ্টায় মেয়াদোত্তীর্ণ হয়ে যায়"
        },
        {
          en: "Because browsers cannot parse hexadecimal key strings",
          bn: "কারণ ব্রাউজার হেক্সাডেসিমেল কি স্ট্রিং পার্স করতে অক্ষম"
        },
        {
          en: "Because CAs store backup copies of all private keys",
          bn: "কারণ সিএ প্রতিষ্ঠানগুলো সকল প্রাইভেট কি-এর ব্যাকআপ কপি নিজেদের কাছে জমা রাখে"
        }
      ],
      answer: 0,
      hint: {
        en: "Anyone can generate keypairs; CAs certify whose key it actually is.",
        bn: "যে কেউ কি-পেয়ার তৈরি করতে পারে; সিএ নিশ্চিত করে এটি আসলে কার কি।"
      },
      explanation: {
        en: "Anyone can generate an asymmetric keypair. PKI and X.509 certificates solve the trust problem by having trusted CAs mathematically sign certificates that link a verified domain name or organization identity to a specific public key.",
        bn: "যে কেউ যেকোনো সময় অ্যাসাইমেট্রিক কি-পেয়ার তৈরি করতে পারে। বিশ্বস্ত সিএ প্রতিষ্ঠানগুলো যাচাইকৃত ডোমেইন বা প্রতিষ্ঠানের পরিচয়ের সাথে নির্দিষ্ট পাবলিক কি যুক্ত করে সার্টিফিকেটে স্বাক্ষর করার মাধ্যমে এই বিশ্বাসের সংকট সমাধান করে।"
      }
    }
  ],
  quiz: {
    id: "digital-signatures-quiz",
    title: {
      en: "Digital Signatures & PKI Quiz",
      bn: "ডিজিটাল সিগনেচার ও PKI কুইজ"
    },
    questions: [
      {
        id: "hsh-ds-qz-1",
        kind: 'mcq',
        topic: "hash-then-sign-input",
        question: {
          en: "In the hash-then-sign architecture, what input does the private key mathematically encrypt or sign?",
          bn: "হ্যাশ-দেন-সাইন আর্কিটেকচারে প্রাইভেট কি গাণিতিকভাবে কোন ইনপুটের ওপর স্বাক্ষর সম্পন্ন করে?"
        },
        options: [
          {
            en: "The fixed-size cryptographic hash digest of the original message",
            bn: "আসল মেসেজের নির্দিষ্ট আকারের ক্রিপ্টোগ্রাফিক হ্যাশ ডাইজেস্ট"
          },
          {
            en: "Every individual gigabyte of the unhashed original file",
            bn: "হ্যাশ না করা মূল ফাইলের প্রতিটি আলাদা গিগাবাইট"
          },
          {
            en: "The receiver IP address and port number",
            bn: "গ্রাহকের আইপি অ্যাড্রেস এবং পোর্ট নম্বর"
          },
          {
            en: "The operating system kernel version",
            bn: "অপারেটিং সিস্টেমের কার্নেল ভার্সন"
          }
        ],
        answer: 0,
        hint: {
          en: "It signs the compact cryptographic digest, not the bulk payload.",
          bn: "এটি সম্পূর্ণ পেলোড নয়, সংক্ষিপ্ত ক্রিপ্টোগ্রাফিক ডাইজেস্ট সাইন করে।"
        },
        explanation: {
          en: "Signing the compact 32-byte hash digest is fast and provides the exact same mathematical integrity as signing the whole message, because collision resistance prevents an attacker from creating another message with the same digest.",
          bn: "সংক্ষিপ্ত ৩২-বাইট হ্যাশ ডাইজেস্ট সাইন করা দ্রুতগতির এবং এটি পুরো মেসেজ সাইন করার সমান গাণিতিক অখণ্ডতা দেয়, কারণ কলিশন রেজিস্ট্যান্সের কারণে আক্রমণকারী একই ডাইজেস্টের অন্য কোনো মেসেজ তৈরি করতে পারে না।"
        }
      },
      {
        id: "hsh-ds-qz-2",
        kind: 'mcq',
        topic: "ed25519-deterministic-nonce",
        question: {
          en: "What architectural advantage makes Ed25519 superior to standard ECDSA implementations?",
          bn: "কোন স্থাপত্যগত সুবিধার কারণে Ed25519 স্ট্যান্ডার্ড ECDSA বাস্তবায়নের চেয়ে অনেক বেশি উন্নত?"
        },
        options: [
          {
            en: "Deterministic nonce generation prevents catastrophic private key leakage caused by weak random number generators",
            bn: "ডিটারমিনিস্টিক নন্স জেনারেশন দুর্বল র্যান্ডম জেনারেটরের কারণে মারাত্মক প্রাইভেট কি ফাঁস হওয়া প্রতিরোধ করে"
          },
          {
            en: "Ed25519 runs only on quantum supercomputers",
            bn: "Ed25519 শুধুমাত্র কোয়ান্টাম সুপার কম্পিউটারে চলে"
          },
          {
            en: "Ed25519 generates signatures without using any mathematical formulas",
            bn: "Ed25519 কোনো গাণিতিক সূত্র ব্যবহার না করেই স্বাক্ষর তৈরি করে"
          },
          {
            en: "Ed25519 signatures can be verified without knowing the public key",
            bn: "পাবলিক কি না জেনেই Ed25519 এর স্বাক্ষর যাচাই করা সম্ভব"
          }
        ],
        answer: 0,
        hint: {
          en: "It derives the nonce deterministically from the private key and message via SHA-512.",
          bn: "এটি প্রাইভেট কি ও মেসেজকে SHA-৫১২ দিয়ে হ্যাশ করে ডিটারমিনিস্টিক নন্স তৈরি করে।"
        },
        explanation: {
          en: "ECDSA leaks private keys if a nonce k is reused or predictable. Ed25519 calculates the nonce deterministically by hashing the private key with the message using SHA-512, eliminating reliance on runtime random number generators.",
          bn: "ECDSA-তে নন্স k অনুমানযোগ্য হলে বা পুনরায় ব্যবহৃত হলে প্রাইভেট কি ফাঁস হয়ে যায়। Ed25519 মেসেজ এবং প্রাইভেট কি-কে SHA-৫১২ দিয়ে হ্যাশ করে ডিটারমিনিস্টিক পদ্ধতিতে নন্স তৈরি করে, ফলে এটি রানটাইম র্যান্ডম জেনারেটরের ওপর নির্ভরশীল থাকে না।"
        }
      },
      {
        id: "hsh-ds-qz-3",
        kind: 'mcq',
        topic: "tampered-signature-verification",
        question: {
          en: "What happens when a receiver verifies a digital signature on a message that was tampered with in transit?",
          bn: "ট্রানজিটের সময় কোনো মেসেজ বিকৃত করা হলে গ্রাহক যখন ডিজিটাল সিগনেচার যাচাই করতে যান তখন কী ঘটে?"
        },
        options: [
          {
            en: "Verification returns false immediately because the locally calculated hash does not match the signature proof",
            bn: "ভেরিফিকেশন সাথে সাথে false রিটার্ন করে কারণ স্থানীয়ভাবে হিসাব করা হ্যাশ স্বাক্ষরের গাণিতিক প্রমাণের সাথে মেলে না"
          },
          {
            en: "The verifier automatically repairs the tampered bytes without warning",
            bn: "যাচাইকারী কোনো সতর্কবার্তা ছাড়াই স্বয়ংক্রিয়ভাবে বিকৃত বাইটগুলো ঠিক করে ফেলে"
          },
          {
            en: "The signature is automatically updated to accept the new message",
            bn: "নতুন মেসেজ গ্রহণ করতে স্বাক্ষরটি স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায়"
          },
          {
            en: "The document is encrypted with a master corporate password",
            bn: "ডকুমেন্টটি একটি মাস্টার কর্পোরেট পাসওয়ার্ড দিয়ে এনক্রিপ্ট হয়ে যায়"
          }
        ],
        answer: 0,
        hint: {
          en: "Any alteration breaks the mathematical digest equality.",
          bn: "যেকোনো পরিবর্তন গাণিতিক ডাইজেস্ট সমতা নষ্ট করে।"
        },
        explanation: {
          en: "Digital signatures are tightly bound to the exact message contents. Modifying even 1 single bit in the message changes the message SHA-256 digest, which makes the signature mathematically invalid against the public key.",
          bn: "ডিজিটাল সিগনেচার মেসেজের নির্দিষ্ট বিষয়বস্তুর সাথে শক্তভাবে আবদ্ধ থাকে। মেসেজের মাত্র ১টি বিট পরিবর্তন করলেও তার SHA-২৫৬ ডাইজেস্ট বদলে যায়, যার ফলে পাবলিক কি দিয়ে যাচাই করতে গেলে স্বাক্ষরটি গাণিতিকভাবে বাতিল হয়ে যায়।"
        }
      },
      {
        id: "hsh-ds-qz-4",
        kind: 'mcq',
        topic: "root-ca-trust-anchor",
        question: {
          en: "What role does a Root Certificate Authority play in TLS and web browser security?",
          bn: "TLS এবং ওয়েব ব্রাউজার নিরাপত্তায় রুট সার্টিফিকেট অথোরিটির (Root CA) ভূমিকা কী?"
        },
        options: [
          {
            en: "It acts as the anchor of trust in the PKI chain, certifying the authenticity of intermediate and server certificates",
            bn: "এটি PKI চেইনে বিশ্বাসের মূল ভিত্তি হিসেবে কাজ করে এবং ইন্টারমিডিয়েট ও সার্ভার সার্টিফিকেটের সত্যতা প্রত্যয়ন করে"
          },
          {
            en: "It intercepts and decrypts all user passwords across the global internet",
            bn: "এটি ইন্টারনেটের সকল ব্যবহারকারীর পাসওয়ার্ড পথিমধ্যে ধরে ফেলে ডিক্রিপ্ট করে"
          },
          {
            en: "It replaces DNS servers to speed up website loading times",
            bn: "এটি ওয়েবসাইটের লোডিং সময় কমাতে ডিএনএস সার্ভারকে প্রতিস্থাপন করে"
          },
          {
            en: "It hosts web pages when server hardware suffers a power failure",
            bn: "সার্ভার হার্ডওয়্যার বিকল হলে এটি সাময়িকভাবে ওয়েবসাইট হোস্ট করে রাখে"
          }
        ],
        answer: 0,
        hint: {
          en: "Root CAs are pre-installed in devices to serve as cryptographic trust anchors.",
          bn: "ক্রিপ্টোগ্রাফিক ট্রাস্ট অ্যাঙ্কর হিসেবে রুট সিএ ডিভাইসে আগে থেকেই যুক্ত থাকে।"
        },
        explanation: {
          en: "Root CAs are pre-installed in browsers and operating systems as trusted trust anchors. By signing intermediate CAs which in turn sign domain certificates, they create a cryptographic chain of trust validating website identities.",
          bn: "রুট সিএ প্রতিষ্ঠানগুলোর পাবলিক কি আগে থেকেই ব্রাউজার ও ওএসে বিশ্বস্ত হিসেবে যুক্ত থাকে। ইন্টারমিডিয়েট সিএ-কে সাইন করার মাধ্যমে এবং পরবর্তীতে ডোমেইন সার্টিফিকেট প্রত্যয়নের মাধ্যমে তারা ইন্টারনেটে একটি ক্রিপ্টোগ্রাফিক চেইন অফ ট্রাস্ট তৈরি করে।"
        }
      }
    ]
  },
  nextLesson: {
    slug: "rainbow-defense",
    title: {
      en: "Rainbow Tables & Precomputed Attacks: Reduction Chains & Defense",
      bn: "রেইনবো টেবিল ও প্রি-কম্পিউটেড আক্রমণ: রিডাকশন চেইন ও প্রতিরোধ"
    }
  }
};
