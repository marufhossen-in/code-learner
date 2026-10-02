import type { Lesson } from '../../../lib/types';

export const EncryptsAndTheEncryptLesson: Lesson = {
  slug: 'encrypts-and-the-encrypt',
  tech: 'object-storage',
  title: {
    en: 'Server-Side Encryption: SSE-S3, SSE-KMS & SSE-C',
    bn: 'সার্ভার-সাইড এনক্রিপশন: SSE-S3, SSE-KMS এবং SSE-C'
  },
  summary: {
    en: 'Protect stored data with S3 encryption: AES-256 server-side encryption (SSE-S3), envelope encryption with KMS keys (SSE-KMS), and customer-provided keys (SSE-C).',
    bn: 'S3 এনক্রিপশন দিয়ে ডাটা সুরক্ষিত রাখুন: AES-256 সার্ভার-সাইড এনক্রিপশন (SSE-S3), KMS কি সহ এনভেলপ এনক্রিপশন (SSE-KMS) এবং গ্রাহক প্রদত্ত কি (SSE-C)।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'encryption-fundamentals',
      text: {
        en: '1. Protecting Data in Transit and at Rest',
        bn: '১. ট্রানজিট এবং সংরক্ষিত ডাটার নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When storing sensitive customer information, enterprise security requires defense-in-depth across 2 independent boundaries:',
        bn: 'সংবেদনশীল গ্রাহক ডাটা সংরক্ষণের সময় এন্টারপ্রাইজ নিরাপত্তা নিশ্চিত করতে ২ টি স্বাধীন স্তরে সুরক্ষা ব্যবস্থা গ্রহণ করতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Encryption in Transit: Enforces TLS 1.2 or TLS 1.3 cryptographic tunnels for all HTTPS traffic, preventing network eavesdropping or packet tampering between client devices and cloud storage endpoints.',
          bn: 'ইন-ট্রানজিট এনক্রিপশন: সমস্ত HTTPS ট্র্যাফিকের জন্য TLS 1.2 বা 1.3 ক্রিপ্টোগ্রাফিক টানেল বাধ্য করে, যা ক্লায়েন্ট ও ক্লাউড স্টোরেজ এন্ডপয়েন্টের মাঝে নেটওয়ার্ক আড়ি পাতা রোধ করে।'
        },
        {
          en: 'Encryption at Rest: Cryptographically encodes raw payload bytes before writing them to physical disk platters or solid-state drives, guaranteeing that stolen hardware cannot expose plaintext data.',
          bn: 'অ্যাট-রেস্ট এনক্রিপশন: ফিজিক্যাল ডিস্কে লেখার আগে কাঁচা পেলোড বাইটকে এনকোড করে রাখে, ফলে হার্ডওয়্যার চুরি হলেও ভেতরের প্লেইনটেক্সট ডাটা সম্পূর্ণ সুরক্ষিত থাকে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'three-sse-models',
      text: {
        en: '2. The 3 Server-Side Encryption (SSE) Models',
        bn: '২. ৩ টি সার্ভার-সাইড এনক্রিপশন (SSE) মডেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Amazon S3 supports 3 distinct Server-Side Encryption (SSE) architectures, scaling from automated default protection to full customer cryptographic control:',
        bn: 'Amazon S3 স্বয়ংক্রিয় ডিফল্ট সুরক্ষা থেকে শুরু করে সম্পূর্ণ গ্রাহক নিয়ন্ত্রিত ক্রিপ্টোগ্রাফি পর্যন্ত ৩ টি ভিন্ন সার্ভার-সাইড এনক্রিপশন মডেল সমর্থন করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. SSE-S3 (x-amz-server-side-encryption: AES256): Keys are 100% managed and rotated by Amazon S3 using 256-bit Advanced Encryption Standard (AES-256). Since 2023, this is the default baseline applied automatically to all new S3 objects at 0 additional cost.',
          bn: '১. SSE-S3 (AES256): ২৫৬-বিট অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ড (AES-256) ব্যবহার করে S3 নিজে ১০০% সম্পূর্ণ কি পরিচালনা করে। ২০২৩ সাল থেকে এটি ০ বাড়তি খরচে সমস্ত নতুন বাকেটে ডিফল্ট সুরক্ষা হিসেবে কার্যকর থাকে।'
        },
        {
          en: '2. SSE-KMS (x-amz-server-side-encryption: aws:kms): Leverages AWS Key Management Service (KMS) for envelope encryption. Benefit: Provides granular IAM key permissions, customer-managed key rotation, and mandatory CloudTrail audit logging for every single decryption event.',
          bn: '২. SSE-KMS (aws:kms): এনভেলপ এনক্রিপশনের জন্য AWS Key Management Service ব্যবহার করে। সুবিধা: সুনির্দিষ্ট IAM পারমিশন, কাস্টমার নিয়ন্ত্রিত কি রোটেশন এবং প্রতিটি ডিক্রিপশন ইভেন্টের বাধ্যতামূলক CloudTrail অডিট লগ পাওয়া যায়।'
        },
        {
          en: '3. SSE-C (Customer-Provided Keys): The client supplies a 256-bit encryption key directly in HTTP request headers. S3 encrypts the payload in RAM and immediately purges the key from memory. S3 stores 0 customer keys on disk; if the client loses the key, data is permanently lost.',
          bn: '৩. SSE-C (কাস্টমার প্রদত্ত কি): ক্লায়েন্ট প্রতিটি HTTP হেডারে সরাসরি নিজস্ব ২৫৬-বিট এনক্রিপশন কি পাঠায়। S3 মেমরিতে ডাটা এনক্রিপ্ট করে সাথে সাথে কি মুছে ফেলে। ক্লাউডে ০ টি কি সংরক্ষিত থাকে; ক্লায়েন্ট কি হারিয়ে ফেললে ডাটা চিরতরে নষ্ট হয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'encryption-architecture-diagram',
      title: {
        en: 'S3 Server-Side Encryption (SSE) Models Compared',
        bn: 'S3 সার্ভার-সাইড এনক্রিপশন মডেলগুলোর তুলনা'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Server-Side Encryption: 3 Architectural Tiers</text>' +
          '<!-- Column 1: SSE-S3 -->' +
          '<g transform="translate(40, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>' +
            '<text x="110" y="30" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">1. SSE-S3 (AES-256)</text>' +
            '<text x="110" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">Fully S3-Managed</text>' +
            '<rect x="15" y="70" width="190" height="65" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="25" y="92" fill="#38bdf8" font-size="10" font-weight="bold">Master Key: S3 Internal</text>' +
            '<text x="25" y="110" fill="#94a3b8" font-size="9">Rotated by AWS yearly</text>' +
            '<text x="25" y="124" fill="#34d399" font-size="9">0 extra cost</text>' +
            '<rect x="15" y="150" width="190" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="172" fill="#cbd5e1" font-size="10" font-weight="bold">Default Encryption</text>' +
            '<text x="25" y="190" fill="#94a3b8" font-size="9">Applied automatically</text>' +
            '<text x="25" y="206" fill="#94a3b8" font-size="9">No KMS quota limits</text>' +
            '<rect x="15" y="245" width="190" height="65" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="110" y="270" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Best for General Data</text>' +
            '<text x="110" y="290" fill="#94a3b8" font-size="9" text-anchor="middle">Zero configuration needed</text>' +
          '</g>' +
          '<!-- Column 2: SSE-KMS -->' +
          '<g transform="translate(290, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>' +
            '<text x="110" y="30" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">2. SSE-KMS (Envelope)</text>' +
            '<text x="110" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">AWS KMS CMK Managed</text>' +
            '<rect x="15" y="70" width="190" height="65" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="25" y="92" fill="#c084fc" font-size="10" font-weight="bold">Master Key: KMS CMK</text>' +
            '<text x="25" y="110" fill="#cbd5e1" font-size="9">Separate IAM key access</text>' +
            '<text x="25" y="124" fill="#facc15" font-size="9">Data Key cached by S3</text>' +
            '<rect x="15" y="150" width="190" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="172" fill="#cbd5e1" font-size="10" font-weight="bold">CloudTrail Audit Log</text>' +
            '<text x="25" y="190" fill="#34d399" font-size="9">&#x2714; Tracks every decrypt</text>' +
            '<text x="25" y="206" fill="#34d399" font-size="9">&#x2714; Strict compliance audit</text>' +
            '<rect x="15" y="245" width="190" height="65" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="110" y="270" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">Enterprise Standards</text>' +
            '<text x="110" y="290" fill="#94a3b8" font-size="9" text-anchor="middle">Dual-layer IAM + KMS control</text>' +
          '</g>' +
          '<!-- Column 3: SSE-C -->' +
          '<g transform="translate(540, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="2"/>' +
            '<text x="110" y="30" fill="#fde047" font-size="14" font-weight="bold" text-anchor="middle">3. SSE-C (Client Key)</text>' +
            '<text x="110" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">Customer Supplies Key</text>' +
            '<rect x="15" y="70" width="190" height="65" rx="6" fill="#0f172a" stroke="#facc15" stroke-width="1"/>' +
            '<text x="25" y="92" fill="#facc15" font-size="10" font-weight="bold">Key Sent in Headers</text>' +
            '<text x="25" y="110" fill="#94a3b8" font-size="9">x-amz-server-side-...</text>' +
            '<text x="25" y="124" fill="#ef4444" font-size="9">0 keys stored on S3</text>' +
            '<rect x="15" y="150" width="190" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="172" fill="#cbd5e1" font-size="10" font-weight="bold">Client Responsibility</text>' +
            '<text x="25" y="190" fill="#ef4444" font-size="9">Loss of key = loss of data</text>' +
            '<text x="25" y="206" fill="#94a3b8" font-size="9">Key purged from RAM</text>' +
            '<rect x="15" y="245" width="190" height="65" rx="6" fill="#0f172a" stroke="#facc15" stroke-width="1"/>' +
            '<text x="110" y="270" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">Regulated Sovereign Data</text>' +
            '<text x="110" y="290" fill="#94a3b8" font-size="9" text-anchor="middle">Zero cloud key custody</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'kms-envelope-encryption',
      text: {
        en: '3. Envelope Encryption and S3 Bucket Keys',
        bn: '৩. এনভেলপ এনক্রিপশন এবং S3 বাকেট কি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'SSE-KMS utilizes a cryptographic technique known as Envelope Encryption. Instead of sending multi-gigabyte files to KMS to be encrypted directly, KMS generates a unique Data Key:',
        bn: 'SSE-KMS এনভেলপ এনক্রিপশন নামের একটি ক্রিপ্টোগ্রাফিক কৌশল ব্যবহার করে। বিশালাকার ফাইল সরাসরি KMS-এ পাঠানোর বদলে KMS একটি অনন্য ডাটা কি তৈরি করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Data Encryption: S3 encrypts the object payload using a unique plaintext Data Key inside server RAM.',
          bn: '১. ডাটা এনক্রিপশন: S3 সার্ভার মেমরিতে একটি অনন্য প্লেইনটেক্সট ডাটা কি দিয়ে অবজেক্ট পেলোড এনক্রিপ্ট করে।'
        },
        {
          en: '2. Key Wrapping: KMS encrypts the Data Key with a customer-managed Master Key (CMK), and S3 stores the wrapped encrypted Data Key in the object metadata.',
          bn: '২. কি র্যাপিং: KMS একটি কাস্টমার মাস্টার কি (CMK) দিয়ে ডাটা কি-কে এনক্রিপ্ট করে এবং অবজেক্টের মেটাডাটাতে সেই সুরক্ষিত কি সংরক্ষণ করে।'
        },
        {
          en: '3. S3 Bucket Keys: To prevent paying KMS request fees on every individual object PUT/GET, enabling S3 Bucket Keys creates a time-limited bucket-level data key, reducing KMS request traffic and billing costs by up to 99%.',
          bn: '৩. S3 বাকেট কি: প্রতিটি অবজেক্টের জন্য বারবার KMS কল করে বিল বাড়ানো রোধ করতে S3 Bucket Keys সাময়িক বাকেট-লেভেল কি ক্যাশ করে, যা KMS কল ও খরচ ৯৯% পর্যন্ত কমিয়ে দেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'encryption-simulator',
      text: {
        en: '4. S3 Encryption & Envelope Simulator in TypeScript',
        bn: '৪. TypeScript এ S3 এনক্রিপশন ও এনভেলপ সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an object storage engine performs envelope encryption with master keys, validates client-provided SSE-C headers, and verifies decryption access:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি অবজেক্ট স্টোরেজ ইঞ্জিন মাস্টার কি দিয়ে এনভেলপ এনক্রিপশন করে, SSE-C হেডার যাচাই করে এবং ডিক্রিপশন অ্যাক্সেস নিয়ন্ত্রণ করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 server-side encryption models: SSE-S3, SSE-KMS envelope wrapping, and SSE-C.',
        bn: 'S3 সার্ভার-সাইড এনক্রিপশন মডেলের TypeScript সিমুলেশন: SSE-S3, SSE-KMS এনভেলপ র্যাপিং এবং SSE-C।'
      },
      code: `// Simulation of S3 Server-Side Encryption (SSE-S3, SSE-KMS, SSE-C)
interface EncryptedEnvelope {
  ciphertext: string;
  encryptionType: 'SSE-S3' | 'SSE-KMS' | 'SSE-C';
  wrappedDataKey?: string;
  kmsKeyId?: string;
}

class S3EncryptionEngine {
  private kmsMasterKey: string = 'kms_cmk_arn_9944';

  // Simple XOR cipher simulating 256-bit symmetric encryption
  private encryptBytes(data: string, key: string): string {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return Buffer.from(result).toString('hex');
  }

  private decryptBytes(hexData: string, key: string): string {
    const raw = Buffer.from(hexData, 'hex').toString();
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      result += String.fromCharCode(raw.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
  }

  // 1. SSE-S3: Fully managed AES-256
  putObjectSSES3(payload: string): EncryptedEnvelope {
    const s3InternalKey = 'aws_s3_internal_master_aes256';
    const ciphertext = this.encryptBytes(payload, s3InternalKey);
    return { ciphertext, encryptionType: 'SSE-S3' };
  }

  // 2. SSE-KMS: Envelope Encryption with wrapped data keys
  putObjectSSEKMS(payload: string, kmsKeyId: string): EncryptedEnvelope {
    const ephemeralDataKey = 'ephemeral_dk_' + Math.floor(Math.random() * 10000);
    const ciphertext = this.encryptBytes(payload, ephemeralDataKey);
    // Wrap data key using KMS Master Key
    const wrappedDataKey = this.encryptBytes(ephemeralDataKey, this.kmsMasterKey);

    return {
      ciphertext,
      encryptionType: 'SSE-KMS',
      wrappedDataKey,
      kmsKeyId
    };
  }

  // Decrypts an SSE-KMS object envelope
  getObjectSSEKMS(envelope: EncryptedEnvelope): string {
    if (envelope.encryptionType !== 'SSE-KMS' || !envelope.wrappedDataKey) {
      throw new Error('Invalid envelope');
    }
    // Unwrap data key using KMS Master Key
    const unwrappedDataKey = this.decryptBytes(envelope.wrappedDataKey, this.kmsMasterKey);
    return this.decryptBytes(envelope.ciphertext, unwrappedDataKey);
  }

  // 3. SSE-C: Customer supplies 256-bit key in HTTP headers
  putObjectSSEC(payload: string, customerKeyHeader: string): EncryptedEnvelope {
    if (customerKeyHeader.length !== 32) {
      throw new Error('SSE-C requires a valid 32-byte (256-bit) customer key');
    }
    const ciphertext = this.encryptBytes(payload, customerKeyHeader);
    return { ciphertext, encryptionType: 'SSE-C' };
  }
}

// Execution demonstration
const engine = new S3EncryptionEngine();
const secretPayload = 'Confidential Patient Health Record';

// 1. Store via SSE-S3
const s3Env = engine.putObjectSSES3(secretPayload);
console.log('SSE-S3 Ciphertext generated, type: ' + s3Env.encryptionType); // -> SSE-S3

// 2. Store via SSE-KMS Envelope Encryption
const kmsEnv = engine.putObjectSSEKMS(secretPayload, 'arn:aws:kms:us-east-1:123:key/prod-vault');
console.log('SSE-KMS Master Key Assigned: ' + kmsEnv.kmsKeyId); // -> prod-vault

// Decrypt SSE-KMS using envelope unwrapping
const decryptedPayload = engine.getObjectSSEKMS(kmsEnv);
console.log('Decrypted Secret: ' + decryptedPayload); // -> Confidential Patient Health Record

// 3. Store via SSE-C (32-character key = 256 bits)
const customerKey = 'my_secret_customer_key_32_bytes';
const ssecEnv = engine.putObjectSSEC(secretPayload, customerKey);
console.log('SSE-C Ciphertext length: ' + ssecEnv.ciphertext.length); // -> 68`
    }
  ],
  exercises: [
    {
      id: 'enc-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the default server-side encryption applied to all new Amazon S3 objects at zero additional cost?',
        bn: 'কোনো বাড়তি খরচ ছাড়াই تمام নতুন Amazon S3 অবজেক্টে ডিফল্টভাবে কোন সার্ভার-সাইড এনক্রিপশন প্রয়োগ করা হয়?'
      },
      options: [
        {
          en: 'SSE-S3 using 256-bit Advanced Encryption Standard (AES-256)',
          bn: '২৫৬-বিট অ্যাডভান্সড এনক্রিপশন স্ট্যান্ডার্ড (AES-256) ব্যবহারকারী SSE-S3'
        },
        {
          en: 'SSE-C requiring manual client header configuration on every upload',
          bn: 'প্রতিটি আপলোডে ম্যানুয়াল ক্লায়েন্ট হেডার দাবি করা SSE-C'
        },
        {
          en: 'Plaintext unencrypted storage with zero security controls',
          bn: 'কোনো নিরাপত্তা ব্যবস্থা ছাড়া আন-এনক্রিপ্টেড প্লেইনটেক্সট স্টোরেজ'
        },
        {
          en: 'ROT13 letter scrambling cipher',
          bn: 'অক্ষর বদলকারী সাধারণ ROT13 সাইফার'
        }
      ],
      answer: 0,
      hint: {
        en: 'SSE-S3 with AES-256 is the automatic default baseline for all S3 buckets.',
        bn: 'AES-256 সহযোগে SSE-S3 হলো সমস্ত S3 বাকেটের জন্য স্বয়ংক্রিয় ডিফল্ট ভিত্তি।'
      },
      explanation: {
        en: 'Since 2023, Amazon S3 automatically encrypts all new objects with SSE-S3 (AES-256) by default at no extra charge.',
        bn: '২০২৩ সাল থেকে Amazon S3 কোনো বাড়তি খরচ ছাড়াই ডিফল্টভাবে تمام নতুন অবজেক্টকে SSE-S3 (AES-256) দিয়ে এনক্রিপ্ট করে।'
      }
    },
    {
      id: 'enc-ex-2',
      kind: 'mcq',
      question: {
        en: 'What primary compliance audit advantage does SSE-KMS provide over standard SSE-S3?',
        bn: 'সাধারণ SSE-S3 এর তুলনায় SSE-KMS কোন প্রধান কমপ্লায়েন্স অডিট সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'AWS CloudTrail logs every single decrypt API call, recording which IAM user accessed the object',
          bn: 'AWS CloudTrail প্রতিটি ডিক্রিপ্ট কল রেকর্ড করে কোন IAM ইউজার ফাইলটি দেখেছেন তা সংরক্ষণ করে'
        },
        {
          en: 'It increases upload network bandwidth speed by 500 percent',
          bn: 'এটি আপলোড নেটওয়ার্ক ব্যান্ডউইথের গতি ৫০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It eliminates the need for user passwords and multi-factor authentication',
          bn: 'এটি ব্যবহারকারীর পাসওয়ার্ড এবং টু-ফ্যাক্টর অথেন্টিকেশনের প্রয়োজনীয়তা দূর করে'
        },
        {
          en: 'It automatically formats data into relational SQL database tables',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ডাটাকে রিলেশনাল SQL ডাটাবেস টেবিলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'KMS integrates with CloudTrail to provide audit logs of every key usage.',
        bn: 'KMS ক্লাউডট্রেইলের সাথে যুক্ত হয়ে প্রতিটি কি ব্যবহারের অডিট লগ প্রদান করে।'
      },
      explanation: {
        en: 'Every time an SSE-KMS encrypted object is read, S3 calls KMS Decrypt. This action is permanently audited in AWS CloudTrail for strict regulatory compliance.',
        bn: 'SSE-KMS এনক্রিপ্ট করা ফাইল পড়ার সময় প্রতিটি ডিক্রিপ্ট কল AWS CloudTrail-এ অডিট লগ হিসেবে সংরক্ষিত হয়।'
      }
    },
    {
      id: 'enc-ex-3',
      kind: 'mcq',
      question: {
        en: 'What happens if a client loses the encryption key used to upload an object with SSE-C?',
        bn: 'SSE-C দিয়ে আপলোড করা কোনো অবজেক্টের এনক্রিপশন কি ক্লায়েন্ট হারিয়ে ফেললে কী ঘটে?'
      },
      options: [
        {
          en: 'The object is permanently unrecoverable because AWS stores 0 customer keys',
          bn: 'অবজেক্টটি চিরতরে অপুনরুদ্ধারযোগ্য হয়ে পড়ে কারণ AWS কোনো কাস্টমার কি সংরক্ষণ করে না'
        },
        {
          en: 'AWS Support can reset the password within 24 hours upon request',
          bn: 'অনুরোধ জানালে AWS সাপোর্ট ২৪ ঘণ্টার মধ্যে পাসওয়ার্ড রিসেট করে দিতে পারে'
        },
        {
          en: 'S3 automatically converts the file into an unencrypted plain text document',
          bn: 'S3 ফাইলটিকে স্বয়ংক্রিয়ভাবে আন-এনক্রিপ্টেড সাধারণ টেক্সট ডকুমেন্টে রূপান্তর করে'
        },
        {
          en: 'The entire S3 bucket is downgraded to read-only status',
          bn: 'সম্পূর্ণ S3 বাকেটটি রিড-অনলি মোডে চলে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'With SSE-C, you manage the key yourself. AWS never stores it on disk.',
        bn: 'SSE-C তে কি আপনার নিয়ন্ত্রণে থাকে। AWS কখনই ডিস্কে কি সংরক্ষণ করে না।'
      },
      explanation: {
        en: 'AWS stores zero keys for SSE-C. If you lose your client key, there is no mathematical recovery mechanism; the data is permanently lost.',
        bn: 'SSE-C এর জন্য AWS কোনো কি সংরক্ষণ করে না। ক্লায়েন্ট কি হারিয়ে ফেললে ডাটা স্থায়ীভাবে নষ্ট হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-encrypts-and-the-encrypt',
    title: {
      en: 'S3 Encryption at Rest Architecture Quiz',
      bn: 'S3 এনক্রিপশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'enc-q1',
        kind: 'mcq',
        question: {
          en: 'How does configuring "S3 Bucket Keys" reduce operating costs for SSE-KMS encrypted buckets?',
          bn: 'SSE-KMS এনক্রিপ্ট করা বাকেটে "S3 Bucket Keys" কনফিগার করলে কীভাবে পরিচালন খরচ কমে?'
        },
        options: [
          {
            en: 'It creates a time-limited bucket-level data key in S3, reducing KMS API request volume and charges by up to 99 percent',
            bn: 'এটি S3 তে নির্দিষ্ট মেয়াদের বাকেট ডাটা কি তৈরি করে KMS রিকোয়েস্টের সংখ্যা ও খরচ ৯৯ শতাংশ পর্যন্ত কমায়'
          },
          {
            en: 'It reduces the physical size of uploaded video files by 75 percent',
            bn: 'এটি আপলোড করা ভিডিও ফাইলের ফিজিক্যাল সাইজ ৭৫ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It bypasses all AWS billing by making storage completely free',
            bn: 'এটি স্টোরেজ সম্পূর্ণ বিনামূল্যে করে দিয়ে সমস্ত বিল মওকুফ করে'
          },
          {
            en: 'It converts the encryption algorithm from AES-256 into MD5',
            bn: 'এটি এনক্রিপশন অ্যালগরিদমকে AES-256 থেকে MD5 এ রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 Bucket Keys decrease request traffic from S3 to KMS.',
          bn: 'S3 Bucket Keys মূলত S3 থেকে KMS-এ যাওয়া রিকোয়েস্টের সংখ্যা নাটকীয়ভাবে কমিয়ে দেয়।'
        },
        explanation: {
          en: 'S3 Bucket Keys cache intermediate data keys at the bucket level, drastically reducing calls to AWS KMS and decreasing KMS billing by up to 99%.',
          bn: 'S3 Bucket Keys বাকেট লেভেলে ডাটা কি ক্যাশ করে KMS কল কমায়, যা KMS বিল ৯৯% পর্যন্ত সাশ্রয় করে।'
        }
      },
      {
        id: 'enc-q2',
        kind: 'mcq',
        question: {
          en: 'In Envelope Encryption, which key directly encrypts the actual object payload bytes?',
          bn: 'এনভেলপ এনক্রিপশনে কোন কি-টি সরাসরি অবজেক্ট পেলোড বাইটকে এনক্রিপ্ট করে?'
        },
        options: [
          {
            en: 'A unique plaintext Data Key generated for that specific object',
            bn: 'সেই নির্দিষ্ট অবজেক্টের জন্য তৈরি করা একটি অনন্য প্লেইনটেক্সট ডাটা কি'
          },
          {
            en: 'The AWS root account master password',
            bn: 'AWS রুট অ্যাকাউন্টের মাস্টার পাসওয়ার্ড'
          },
          {
            en: 'The user personal SSH public key',
            bn: 'ব্যবহারকারীর ব্যক্তিগত SSH পাবলিক কি'
          },
          {
            en: 'The public IP address of the user internet router',
            bn: 'ব্যবহারকারীর ইন্টারনেট রাউটারের পাবলিক আইপি অ্যাড্রেস'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Data Key encrypts the data; the Master Key (KMS CMK) encrypts the Data Key.',
          bn: 'ডাটা কি ডাটাকে এনক্রিপ্ট করে; আর মাস্টার কি (KMS CMK) ডাটা কি-কে এনক্রিপ্ট করে।'
        },
        explanation: {
          en: 'In envelope encryption, data is encrypted directly by a short-lived Data Key. The Data Key itself is then encrypted (wrapped) by the Master Key.',
          bn: 'এনভেলপ এনক্রিপশনে ডাটা কি সরাসরি ডাটাকে এনক্রিপ্ট করে, এবং মাস্টার কি সেই ডাটা কি-কে র্যাপ বা এনক্রিপ্ট করে।'
        }
      },
      {
        id: 'enc-q3',
        kind: 'mcq',
        question: {
          en: 'What key length in bits is standardly required for SSE-C customer-provided symmetric keys?',
          bn: 'SSE-C তে ক্লায়েন্ট প্রদত্ত সিমেট্রিক কি-এর ক্ষেত্রে মানসম্মতভাবে কত বিটের দৈর্ঘ্য আবশ্যক?'
        },
        options: [
          {
            en: '256 bits (32 bytes)',
            bn: '২৫৬ বিট (৩২ বাইট)'
          },
          {
            en: '8 bits (1 byte)',
            bn: '৮ বিট (১ বাইট)'
          },
          {
            en: '1024 bits',
            bn: '১০২৪ বিট'
          },
          {
            en: '16 bits',
            bn: '১৬ বিট'
          }
        ],
        answer: 0,
        hint: {
          en: 'AES-256 requires a 256-bit (32-byte) key.',
          bn: 'AES-256 এর জন্য একটি ২৫৬-বিট (৩২ বাইট) কি প্রয়োজন।'
        },
        explanation: {
          en: 'SSE-C uses AES-256, requiring customers to provide a 256-bit (32-byte), base64-encoded symmetric encryption key in request headers.',
          bn: 'SSE-C মূলত AES-256 ব্যবহার করে, তাই হেডারে একটি ২৫৬-বিট (৩২ বাইট) কি প্রদান করা আবশ্যক।'
        }
      },
      {
        id: 'enc-q4',
        kind: 'mcq',
        question: {
          en: 'How does Client-Side Encryption differ from Server-Side Encryption (SSE)?',
          bn: 'ক্লায়েন্ট-সাইড এনক্রিপশন কীভাবে সার্ভার-সাইড এনক্রিপশন (SSE) থেকে আলাদা?'
        },
        options: [
          {
            en: 'Data is encrypted locally on the client before being sent across the network, so cloud providers never possess the plaintext',
            bn: 'নেটওয়ার্কে পাঠানোর আগেই ক্লায়েন্ট ডিভাইসে ডাটা এনক্রিপ্ট হয়, ফলে ক্লাউড প্রোভাইডার কখনই প্লেইনটেক্সট দেখতে পায় না'
          },
          {
            en: 'Client-side encryption only works on files under 1 kilobyte in size',
            bn: 'ক্লায়েন্ট-সাইড এনক্রিপশন কেবল ১ কিলোবাইটের নিচের ফাইলের ক্ষেত্রে কাজ করে'
          },
          {
            en: 'Client-side encryption permanently disables SSL/TLS encryption',
            bn: 'ক্লায়েন্ট-সাইড এনক্রিপশন SSL/TLS এনক্রিপশন চিরতরে বন্ধ করে দেয়'
          },
          {
            en: 'Client-side encryption requires a physical satellite connection',
            bn: 'ক্লায়েন্ট-সাইড এনক্রিপশনের জন্য একটি ফিজিক্যাল স্যাটেলাইট সংযোগ প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'With client-side encryption, encryption happens before data leaves your application.',
          bn: 'ক্লায়েন্ট-সাইড এনক্রিপশনে ডাটা আপনার অ্যাপ থেকে বের হওয়ার আগেই এনক্রিপ্ট হয়ে যায়।'
        },
        explanation: {
          en: 'In client-side encryption, the user application encrypts data prior to uploading to S3, ensuring zero cloud visibility into plaintext contents.',
          bn: 'ক্লায়েন্ট-সাইড এনক্রিপশনে আপলোডের আগেই অ্যাপ্লিকেশন ডাটা এনক্রিপ্ট করে, ফলে ক্লাউডের কাছে আসল ডাটা সম্পূর্ণ অদৃশ্য থাকে।'
        }
      },
      {
        id: 'enc-q5',
        kind: 'mcq',
        question: {
          en: 'Which HTTP header specifies SSE-S3 encryption during a PUT request to an Amazon S3 bucket?',
          bn: 'Amazon S3 বাকেটে PUT রিকোয়েস্টের সময় কোন HTTP হেডারটি SSE-S3 এনক্রিপশন নির্দেশ করে?'
        },
        options: [
          {
            en: 'x-amz-server-side-encryption: AES256',
            bn: 'x-amz-server-side-encryption: AES256'
          },
          {
            en: 'Content-Encoding: gzip',
            bn: 'Content-Encoding: gzip'
          },
          {
            en: 'x-amz-security-token: public',
            bn: 'x-amz-security-token: public'
          },
          {
            en: 'Authorization: none',
            bn: 'Authorization: none'
          }
        ],
        answer: 0,
        hint: {
          en: 'Look for the header starting with x-amz-server-side-encryption set to AES256.',
          bn: 'x-amz-server-side-encryption হেডারটি দেখুন যার মান AES256।'
        },
        explanation: {
          en: 'Supplying "x-amz-server-side-encryption: AES256" requests SSE-S3 encryption using keys managed by Amazon S3.',
          bn: '"x-amz-server-side-encryption: AES256" হেডার দিলে Amazon S3-পরিচালিত কি দিয়ে SSE-S3 এনক্রিপশন কার্যকর হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'replicas-and-the-replica',
    title: {
      en: 'Cross-Region Replication: CRR, SRR & Consistency',
      bn: 'ক্রস-রিজিয়ন রেপ্লিকেশন: CRR, SRR এবং কনসিস্টেন্সি'
    }
  }
};
