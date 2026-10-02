import type { Lesson } from '../../../lib/types';

export const MeetEncryptionLesson: Lesson = {
  slug: 'meet-encryption',
  tech: 'encryption',
  title: {
    en: 'Meet Encryption: An Overview of Ciphers & Confidentiality',
    bn: 'ক্রিপ্টোগ্রাফি পরিচিতি: সাইফার ও তথ্যের গোপনীয়তার রূপরেখা'
  },
  summary: {
    en: 'A foundational beginner overview of cryptography and data protection. Explore the primary security triad of confidentiality, integrity, and authenticity. Trace the historical evolution of ciphers from classical Caesar shifts to modern binary Exclusive-OR (XOR) operations. Learn Kerckhoffs\'s principle and why open algorithms with secret keys guarantee mathematical trust. Inspect an executable Node.js cryptographic engine transforming 3 distinct messages: 3 messages are locked into ciphertext, and 3 out of 3 are recovered.',
    bn: 'ক্রিপ্টোগ্রাফি এবং তথ্য নিরাপত্তার একটি মৌলিক প্রাথমিক রূপরেখা। তথ্যের গোপনীয়তা, অখণ্ডতা এবং সত্যতা যাচাইয়ের মূল উদ্দেশ্যগুলো জানুন। ঐতিহাসিক সিজার শিফট থেকে শুরু করে আধুনিক বাইনারি Exclusive-OR (XOR) অপারেশনের রূপান্তর বিশ্লেষণ করুন। কার্কহফসের নীতি (Kerckhoffs\'s Principle) এবং ওপেন অ্যালগরিদম কেন অপরিহার্য তা শিখুন। ৩ টি ভিন্ন বার্তা রূপান্তরকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি বার্তা সাইফারটেক্সটে তালাবদ্ধ হয় এবং ৩ টির মধ্যে ৩ টি বার্তা সফলভাবে উদ্ধার করা হয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'cryptographic-foundations',
      text: {
        en: 'The Purpose of Cryptography: Protecting Secrets Across Hostile Networks',
        bn: 'ক্রিপ্টোগ্রাফির উদ্দেশ্য: অনিরাপদ নেটওয়ার্কে তথ্যের গোপনীয়তা রক্ষা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit data across the internet, your packets travel through public routers, coffee shop Wi-Fi hotspots, and undersea fiber optic cables. Without encryption, network communication is like writing postcards: every intermediary router can inspect, modify, or record your private communications.',
        bn: 'ইন্টারনেটের মাধ্যমে ডাটা আদান-প্রদান করার সময় আপনার প্যাকেটগুলো পাবলিক রাউটার, উন্মুক্ত ক্যাফে ওয়াইফাই এবং সমুদ্রের তলদেশের ক্যাবল দিয়ে ভ্রমণ করে। এনক্রিপশন না থাকলে নেটওয়ার্ক যোগাযোগ মূলত সাধারণ খোলা পোস্টকার্ডের মতো: পথের প্রতিটি রাউটার বা আড়িপাতাকারী আপনার গোপন তথ্য পড়ে ফেলতে, পরিবর্তন করতে বা রেকর্ড করে রাখতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Cryptography is the mathematical science of transforming readable plaintext into unreadable ciphertext using an algorithmic cipher and a secret key. A secure cryptosystem ensures that even if an eavesdropper intercepts every transmitted bit across the wire, extracting the original plaintext without the secret key is computationally impossible.',
        bn: 'ক্রিপ্টোগ্রাফি হলো একটি গাণিতিক বিজ্ঞান যা সুনির্দিষ্ট অ্যালগরিদম ও গোপন চাবি ব্যবহার করে পঠনযোগ্য প্লেইনটেক্সটকে অপঠনযোগ্য সাইফারটেক্সটে রূপান্তর করে। একটি সুরক্ষিত ক্রিপ্টোব্যবস্থা নিশ্চিত করে যে আক্রমণকারী মাঝপথে সমস্ত ডাটা ধারণ করে রাখলেও গোপন চাবি ছাড়া মূল বার্তা উদ্ধার করা গাণিতিকভাবে অসম্ভব।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Plaintext & Ciphertext',
            bn: '১. প্লেইনটেক্সট ও সাইফারটেক্সট'
          },
          text: {
            en: 'Plaintext is original unencrypted data (e.g. "meet"). Ciphertext is scrambled data produced by an encryption algorithm that appears as randomized high-entropy bytes.',
            bn: 'প্লেইনটেক্সট হলো মূল অসংকেতায়িত বার্তা (যেমন "meet")। আর সাইফারটেক্সট হলো এনক্রিপশনের পর তৈরি হওয়া এলোমেলো বাইটের অপঠনযোগ্য রূপ।'
          },
        },
        {
          title: {
            en: '2. The Exclusive-OR (XOR) Primitive',
            bn: '২. এক্সক্লুসিভ-অর (XOR) ভিত্তি'
          },
          text: {
            en: 'The fundamental binary building block of modern ciphers. XOR has a unique reversible property: A ^ K = C, and C ^ K = A. Applying the secret key twice recovers the exact original bits.',
            bn: 'আধুনিক সাইফারের মৌলিক বাইনারি ভিত্তি। XOR এর একটি অনন্য বিপরীতমুখী বৈশিষ্ট্য রয়েছে: A ^ K = C, এবং C ^ K = A। একই চাবি দুইবার প্রয়োগ করলে হুবহু মূল তথ্য ফিরে পাওয়া যায়।'
          },
        },
        {
          title: {
            en: '3. Kerckhoffs\'s Principle',
            bn: '৩. কার্কহফসের নীতি'
          },
          text: {
            en: 'A cryptosystem must be secure even if everything about the design, algorithm, and source code is public knowledge. Security resides entirely in keeping the key secret, never the algorithm.',
            bn: 'একটি ক্রিপ্টোব্যবস্থা এমন হতে হবে যাতে তার ডিজাইন, অ্যালগরিদম এবং কোড সবার জানা থাকলেও তা সম্পূর্ণ নিরাপদ থাকে। নিরাপত্তা নির্ভর করবে কেবল গোপন চাবির ওপর, অ্যালগরিদম লুকানোর ওপর নয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Cryptographic Transformation Flow: 3 Messages Locked and Recovered',
        bn: 'ক্রিপ্টোগ্রাফিক রূপান্তর প্রবাহ: ৩ টি বার্তা তালাবদ্ধ ও সফলভাবে উদ্ধার'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Cryptographic transformation showing 3 messages encrypted and decrypted">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">REVERSIBLE CRYPTOGRAPHIC TRANSFORMATION (SHARED KEY: 0x5A)</text>
  
  <!-- Step 1: Plaintext Inputs -->
  <g transform="translate(35, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#0284c7"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. PLAINTEXT MESSAGES</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="22" fill="#38bdf8" font-size="9" font-weight="bold">Message 1: "meet"</text>
      <text x="12" y="40" fill="#94a3b8" font-size="8">Hex: [0x6D, 0x65, 0x65, 0x74]</text>
      <text x="12" y="54" fill="#a7f3d0" font-size="7.5">Readable cleartext buffer</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="107" fill="#38bdf8" font-size="9" font-weight="bold">Message 2: "noon"</text>
      <text x="12" y="125" fill="#94a3b8" font-size="8">Hex: [0x6E, 0x6F, 0x6F, 0x6E]</text>
      <text x="12" y="139" fill="#a7f3d0" font-size="7.5">Readable cleartext buffer</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#0f172a" stroke="#64748b"/>
      <text x="12" y="192" fill="#38bdf8" font-size="9" font-weight="bold">Message 3: "code"</text>
      <text x="12" y="210" fill="#94a3b8" font-size="8">Hex: [0x63, 0x6F, 0x64, 0x65]</text>
      <text x="12" y="224" fill="#a7f3d0" font-size="7.5">Readable cleartext buffer</text>
    </g>
  </g>
  
  <!-- Step 2: Encrypted Ciphertext -->
  <g transform="translate(305, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#dc2626"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. LOCKED CIPHERTEXT (3)</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="22" fill="#fca5a5" font-size="9" font-weight="bold">Encrypted 1: 0x373F3F2E</text>
      <text x="12" y="40" fill="#f87171" font-size="8">Mask: 0x6D ^ 0x5A = 0x37</text>
      <text x="12" y="54" fill="#fecaca" font-size="7.5">High entropy gibberish bytes</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="107" fill="#fca5a5" font-size="9" font-weight="bold">Encrypted 2: 0x34353534</text>
      <text x="12" y="125" fill="#f87171" font-size="8">Mask: 0x6E ^ 0x5A = 0x34</text>
      <text x="12" y="139" fill="#fecaca" font-size="7.5">Eavesdropper learns nothing</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="192" fill="#fca5a5" font-size="9" font-weight="bold">Encrypted 3: 0x39353E3F</text>
      <text x="12" y="210" fill="#f87171" font-size="8">Mask: 0x63 ^ 0x5A = 0x39</text>
      <text x="12" y="224" fill="#fecaca" font-size="7.5">Transmitted across network</text>
    </g>
  </g>
  
  <!-- Step 3: Decrypted Recovery -->
  <g transform="translate(575, 60)">
    <rect width="230" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="230" height="32" rx="8" fill="#059669"/>
    <text x="115" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. RECOVERED (3/3 = 100%)</text>
    
    <g transform="translate(12, 45)">
      <rect width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="22" fill="#6ee7b7" font-size="9" font-weight="bold">Recovered 1: "meet" [✓]</text>
      <text x="12" y="40" fill="#34d399" font-size="8">Reverse: 0x37 ^ 0x5A = 0x6D</text>
      <text x="12" y="54" fill="#a7f3d0" font-size="7.5">Matches original string perfectly</text>
      
      <rect y="85" width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="107" fill="#6ee7b7" font-size="9" font-weight="bold">Recovered 2: "noon" [✓]</text>
      <text x="12" y="125" fill="#34d399" font-size="8">Reverse: 0x34 ^ 0x5A = 0x6E</text>
      <text x="12" y="139" fill="#a7f3d0" font-size="7.5">Matches original string perfectly</text>
      
      <rect y="170" width="206" height="65" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="192" fill="#6ee7b7" font-size="9" font-weight="bold">Recovered 3: "code" [✓]</text>
      <text x="12" y="210" fill="#34d399" font-size="8">Reverse: 0x39 ^ 0x5A = 0x63</text>
      <text x="12" y="224" fill="#a7f3d0" font-size="7.5">Matches original string perfectly</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Reversible binary XOR operations form the foundational mathematical substrate of modern stream and block ciphers</text>
</svg>`,
      caption: {
        en: 'The cryptographic engine transforms 3 messages: 3 messages are locked into ciphertext, and 3 out of 3 are recovered using the secret key.',
        bn: 'ক্রিপ্টোগ্রাফিক ইঞ্জিন ৩ টি বার্তা রূপান্তর করে: ৩ টি বার্তা সাইফারটেক্সটে তালাবদ্ধ হয় এবং ৩ টির মধ্যে ৩ টি বার্তা গোপন চাবি দিয়ে সফলভাবে উদ্ধার করা হয়।'
      },
    },
    {
      type: 'heading',
      id: 'cryptographic-xor-engine-code',
      text: {
        en: 'Building a Binary XOR Cryptographic Transformation Engine in Node.js',
        bn: 'Node.js-এ বাইনারি XOR ক্রিপ্টোগ্রাফিক রূপান্তর ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'xor-crypto-engine.js',
      code: `// Deterministic Binary XOR Cryptographic Engine
function applyXorCipher(inputBuffer, keyByte) {
  const resultBuffer = Buffer.alloc(inputBuffer.length);
  for (let i = 0; i < inputBuffer.length; i++) {
    resultBuffer[i] = inputBuffer[i] ^ keyByte;
  }
  return resultBuffer;
}

// Secret shared cryptographic key mask (0x5A = 90)
const secretKey = 0x5A;

// 3 distinct plaintext messages tested for encryption and recovery
const messages = ['meet', 'noon', 'code'];

let totalLocked = 0;
let totalRecovered = 0;

console.log('=== Reversible XOR Cryptographic Engine Audit ===\\n');
messages.forEach((plainMessage, index) => {
  totalLocked++;
  const plainBuffer = Buffer.from(plainMessage, 'utf8');

  // Encryption Phase: Plaintext XOR Key -> Ciphertext
  const ciphertextBuffer = applyXorCipher(plainBuffer, secretKey);

  // Decryption Phase: Ciphertext XOR Key -> Recovered Plaintext
  const decryptedBuffer = applyXorCipher(ciphertextBuffer, secretKey);
  const recoveredMessage = decryptedBuffer.toString('utf8');

  const isMatched = recoveredMessage === plainMessage;
  if (isMatched) totalRecovered++;

  console.log(\`[\${index + 1}] Plaintext:       "\${plainMessage}"\`);
  console.log(\`    Ciphertext (Hex): 0x\${ciphertextBuffer.toString('hex').toUpperCase()}\`);
  console.log(\`    Recovered Text:   "\${recoveredMessage}" [Success: \${isMatched ? 'YES ✓' : 'NO ✗'}]\\n\`);
});

console.log('=== Cryptographic Audit Summary ===');
console.log('Messages Processed: ', messages.length);
console.log('Locked to Cipher:   ', totalLocked);
console.log('Fidelity Recovered: ', \`\${totalRecovered}/\${messages.length}\`);`,
      caption: {
        en: 'The XOR crypto engine tests 3 messages: 3 messages are locked into ciphertext, and all 3 are recovered.',
        bn: 'XOR ক্রিপ্টো ইঞ্জিন ৩ টি বার্তা পরীক্ষা করে: ৩ টি বার্তা সাইফারটেক্সটে তালাবদ্ধ হয় এবং ৩ টি বার্তাই সম্পূর্ণ উদ্ধার করা হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Why Rolling Your Own Crypto Always Fails',
        bn: 'কেন নিজস্ব ক্রিপ্টোগ্রাফি তৈরি করা সবসময় ব্যর্থ হয়'
      },
      text: {
        en: 'A foundational rule of software engineering is: "Never roll your own crypto." Simple ciphers like single-byte XOR or custom Caesar rotations leak statistical patterns and fall instantly to frequency analysis. Modern cryptographic algorithms (like AES-256 and ChaCha20) require years of peer-reviewed cryptanalysis by the global mathematical community to verify immunity against algebraic attacks and timing side-channels. Always use standardized libraries.',
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারিংয়ের একটি সুপরিচিত নীতি হলো: "কখনোই নিজে নিজে ক্রিপ্টো অ্যালগরিদম বানাতে যাবেন না।" সাধারণ একক বাইটের XOR বা সিজার সাইফার পরিসংখ্যানগত প্যাটার্ন ফাঁস করে এবং ফ্রিকোয়েন্সি অ্যানালাইসিসের মাধ্যমে কয়েক সেকেন্ডে ভেঙে ফেলা যায়। আধুনিক অ্যালগরিদমগুলো (যেমন AES-256 ও ChaCha20) বিশ্বব্যাপী গণিতবিদদের বহু বছরের যাচাই-বাছাই ও পরীক্ষার পর নিরাপদ হিসেবে স্বীকৃতি পায়। সর্বদা প্রমাণিত স্ট্যান্ডার্ড লাইব্রেরি ব্যবহার করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'enc-meet-ex-1',
      kind: 'predict',
      topic: 'locked-messages-count',
      question: {
        en: 'In the cryptographic audit of the 3 test messages, how many messages were successfully scrambled and locked into ciphertext? (3). Type the number.',
        bn: '৩ টি পরীক্ষামূলক বার্তার ক্রিপ্টোগ্রাফিক নিরীক্ষায় সর্বমোট কয়টি বার্তা সফলভাবে সাইফারটেক্সটে তালাবদ্ধ করা হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'All 3 messages were locked.',
        bn: 'সবকটি ৩ টি বার্তা তালাবদ্ধ হয়েছিল।'
      },
      explanation: {
        en: 'All 3 messages ("meet", "noon", and "code") were transformed into encrypted binary ciphertext buffers using the secret key mask.',
        bn: 'সবকটি ৩ টি বার্তাই ("meet", "noon" এবং "code") গোপন চাবি ব্যবহার করে এনক্রিপ্ট করা সাইফারটেক্সটে রূপান্তরিত হয়েছিল।'
      },
    },
    {
      id: 'enc-meet-ex-2',
      kind: 'mcq',
      topic: 'kerckhoffs-principle-significance',
      question: {
        en: 'What does Kerckhoffs\'s Principle state regarding the security of cryptographic algorithms?',
        bn: 'ক্রিপ্টোগ্রাফিক অ্যালগরিদমের নিরাপত্তার ক্ষেত্রে কার্কহফসের নীতি (Kerckhoffs\'s Principle) কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'A cryptosystem must remain secure even if everything about the system and algorithm is public knowledge, with security depending solely on keeping the cryptographic key secret',
          bn: 'একটি ক্রিপ্টোব্যবস্থার অ্যালগরিদম ও অভ্যন্তরীণ গঠন সবার কাছে উন্মুক্ত থাকলেও তা সম্পূর্ণ নিরাপদ থাকতে হবে, কারণ নিরাপত্তা নির্ভর করে কেবল গোপন চাবির সুরক্ষার ওপর',
        },
        {
          en: 'A cryptosystem is only secure if developers keep the algorithm source code hidden in a secret safe',
          bn: 'ক্রিপ্টোব্যবস্থা কেবল তখনই নিরাপদ থাকে যখন ডেভেলপাররা অ্যালগরিদমের সোর্স কোড গোপন সিন্দুকে লুকিয়ে রাখেন',
        },
        {
          en: 'Encryption keys must be changed every fifteen minutes by international law',
          bn: 'আন্তর্জাতিক আইন অনুযায়ী প্রতি পনেরো মিনিট অন্তর এনক্রিপশন চাবি পরিবর্তন করতে হবে',
        },
        {
          en: 'Computers cannot encrypt text files containing more than ten words',
          bn: 'কম্পিউটার দশ শব্দের বেশি থাকা কোনো টেক্সট ফাইল এনক্রিপ্ট করতে পারে না',
        },
      ],
      answer: 0,
      hint: {
        en: 'Kerckhoffs states that security depends on key secrecy, not algorithmic secrecy.',
        bn: 'কার্কহফসের মতে নিরাপত্তা অ্যালগরিদম লুকানোর ওপর নয়, চাবির গোপনীয়তার ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Security through obscurity fails because algorithms eventually leak or are reverse-engineered. Open algorithms (like AES) benefit from global peer review.',
        bn: 'অ্যালগরিদম লুকিয়ে রাখলে তা কোনো না কোনোভাবে ফাঁস হয়ে যায়। উন্মুক্ত অ্যালগরিদম হাজার হাজার বিজ্ঞানীদের পর্যালোচনার মাধ্যমে অনেক বেশি শক্তিশালী হয়।'
      },
    },
    {
      id: 'enc-meet-ex-3',
      kind: 'mcq',
      topic: 'xor-reversible-property',
      question: {
        en: 'Why is the binary Exclusive-OR (XOR) operation the fundamental mathematical building block of modern symmetric ciphers?',
        bn: 'আধুনিক সিমেট্রিক সাইফারের ক্ষেত্রে বাইনারি Exclusive-OR (XOR) অপারেশন কেন মৌলিক গাণিতিক ভিত্তি হিসেবে কাজ করে?'
      },
      options: [
        {
          en: 'XOR is an involution (self-inverse operation): applying the same key twice returns the original plaintext ((P ^ K) ^ K = P) without requiring separate complex inverse mathematical circuits',
          bn: 'XOR হলো একটি সেলফ-ইনভার্স অপারেশন: একই চাবি দুইবার প্রয়োগ করলে কোনো জটিল অতিরিক্ত সার্কিট ছাড়াই সরাসরি মূল প্লেইনটেক্সট ফিরে পাওয়া যায় ((P ^ K) ^ K = P)',
        },
        {
          en: 'Because XOR doubles the size of computer memory during calculation',
          bn: 'কারণ গণনার সময় XOR কম্পিউটারের মেমোরির আকার দ্বিগুণ করে তোলে',
        },
        {
          en: 'Because XOR is only supported on wireless Bluetooth keyboards',
          bn: 'কারণ XOR কেবল ওয়্যারলেস ব্লুটুথ কীবোর্ডে কাজ করতে পারে',
        },
        {
          en: 'Because XOR converts all letters of the alphabet to uppercase',
          bn: 'কারণ XOR বর্ণমালার সমস্ত অক্ষরকে বড় হাতের অক্ষরে বদলে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'XOR is self-reversing: P ^ K ^ K = P.',
        bn: 'XOR বিপরীতমুখী: একই কি দিয়ে দুইবার প্রক্রিয়া করলে মূল ডাটা ফিরে আসে।'
      },
      explanation: {
        en: 'Because XOR is perfectly reversible and extremely fast in hardware (executing in a single CPU clock cycle), stream and block ciphers rely on it extensively.',
        bn: 'XOR প্রসেসরে মাত্র একটি ক্লক সাইকেলে সম্পন্ন হয় এবং সহজে উল্টানো যায় বলে আধুনিক সাইফারগুলোতে এটি ব্যাপকভাবে ব্যবহৃত হয়।'
      },
    },
    {
      id: 'enc-meet-ex-4',
      kind: 'predict',
      topic: 'recovered-messages-count',
      question: {
        en: 'How many of the 3 locked messages were perfectly recovered and verified with 100% fidelity using the secret key? (3). Type the number.',
        bn: 'তালাবদ্ধ ৩ টি বার্তার মধ্যে সর্বমোট কয়টি বার্তা গোপন চাবি ব্যবহার করে ১০০% নির্ভুলতার সাথে উদ্ধার করা হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'All 3 messages were recovered.',
        bn: 'সবকটি ৩ টি বার্তাই উদ্ধার হয়েছিল।'
      },
      explanation: {
        en: 'With the shared secret key 0x5A, all 3 messages were decrypted back to their original strings ("meet", "noon", and "code") with zero bit errors.',
        bn: 'গোপন চাবি 0x5A ব্যবহার করে ৩ টি বার্তাই কোনো ভুল ছাড়াই হুবহু উদ্ধার করা সম্ভব হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'meet-encryption-quiz',
    title: {
      en: 'Cryptographic Foundations & Principles Quiz',
      bn: 'ক্রিপ্টোগ্রাফিক ভিত্তি ও নীতিমালা কুইজ'
    },
    questions: [
      {
        id: 'enc-meet-qz-1',
        kind: 'mcq',
        topic: 'cia-triad-confidentiality-integrity-authenticity',
        question: {
          en: 'What are the 3 core security objectives of modern cryptography?',
          bn: 'আধুনিক ক্রিপ্টোগ্রাফির ৩ টি প্রধান নিরাপত্তা লক্ষ্য কী কী?'
        },
        options: [
          {
            en: 'Confidentiality (preventing unauthorized reading), Integrity (detecting unauthorized modification), and Authenticity (verifying the true sender identity)',
            bn: 'গোপনীয়তা (অননুমোদিত পড়া প্রতিরোধ), অখণ্ডতা (অননুমোদিত পরিবর্তন সনাক্তকরণ) এবং সত্যতা (প্রেরকের আসল পরিচয় যাচাইকরণ)',
          },
          {
            en: 'Speed, Screen Brightness, and Sound Volume',
            bn: 'গতি, পর্দার উজ্জ্বলতা এবং শব্দের তীব্রতা',
          },
          {
            en: 'File Compression, Disk Defragmentation, and Memory Clearing',
            bn: 'ফাইল সংকোচন, ডিস্ক ডিফ্র্যাগমেন্টেশন এবং মেমোরি খালি করা',
          },
          {
            en: 'Battery Charging, Wireless Printing, and Mouse Sensitivity',
            bn: 'ব্যাটারি চার্জিং, ওয়্যারলেস প্রিন্টিং এবং মাউস সংবেদনশীলতা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Confidentiality, Integrity, and Authenticity form the core pillars of security.',
          bn: 'গোপনীয়তা, অখণ্ডতা এবং সত্যতা হলো নিরাপত্তার তিন মূল স্তম্ভ।'
        },
        explanation: {
          en: 'Encryption alone only provides confidentiality; authenticated encryption (AEAD) or digital signatures are required to guarantee integrity and authenticity.',
          bn: 'শুধুমাত্র এনক্রিপশন তথ্যের গোপনীয়তা রক্ষা করে; অখণ্ডতা ও প্রেরকের পরিচয় নিশ্চিত করতে ডিজিটাল স্বাক্ষর বা AEAD সাইফার প্রয়োজন।'
        },
      },
      {
        id: 'enc-meet-qz-2',
        kind: 'mcq',
        topic: 'one-time-pad-shannon-perfect-secrecy',
        question: {
          en: 'Why is the One-Time Pad (OTP) mathematically proven to provide "Perfect Secrecy" (Shannon 1949), and why is it rarely used in practice?',
          bn: 'ওয়ান-টাইম প্যাড (OTP) কেন গাণিতিকভাবে "পারফেক্ট সিক্রেসি" প্রদান করে (Shannon 1949) এবং কেন এটি দৈনন্দিন জীবনে খুব কম ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'OTP provides perfect secrecy because every possible plaintext is equally likely given the ciphertext; it is impractical because the key must be truly random, as long as the message, and never reused',
            bn: 'OTP পারফেক্ট সিক্রেসি দেয় কারণ সাইফারটেক্সট দেখে যেকোনো সম্ভাব্য প্লেইনটেক্সট হওয়ার সম্ভাবনা সমান থাকে; কিন্তু বাস্তবে এর কি সম্পূর্ণ র‍্যান্ডম, বার্তার সমান লম্বা এবং কখনোই পুনরায় ব্যবহার করা যায় না বলে এটি ব্যবহার কঠিন',
          },
          {
            en: 'Because OTP was outlawed by the United Nations in 1950',
            bn: 'কারণ জাতিসংঘ ১৯৫০ সালে OTP ব্যবহার নিষিদ্ধ ঘোষণা করেছিল',
          },
          {
            en: 'Because OTP requires computer monitors with twenty-four inch screens',
            bn: 'কারণ OTP চালানোর জন্য চব্বিশ ইঞ্চি মনিটরের প্রয়োজন হয়',
          },
          {
            en: 'Because OTP can only encrypt documents written in Latin',
            bn: 'কারণ OTP কেবল ল্যাটিন ভাষায় লেখা নথি এনক্রিপ্ট করতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The key must be as long as the message and used only once.',
          bn: 'চাবি বার্তার সমান দীর্ঘ হতে হয় এবং কেবল একবারই ব্যবহার করা যায়।'
        },
        explanation: {
          en: 'If you already had a secure channel to share a random key as long as the message, you could just send the message itself. Thus modern systems use computational cryptography (AES/RSA) instead.',
          bn: 'বার্তার সমান লম্বা সিক্রেট কি পাঠানোর নিরাপদ পথ থাকলে মূল বার্তাই পাঠানো যেত! তাই আধুনিক সফটওয়্যার AES ও RSA-এর মতো গাণিতিক অ্যালগরিদমে চলে।'
        },
      },
      {
        id: 'enc-meet-qz-3',
        kind: 'mcq',
        topic: 'frequency-analysis-breaking-caesar',
        question: {
          en: 'How does Frequency Analysis allow cryptanalysts to break classical substitution ciphers (like the Caesar shift)?',
          bn: 'ফ্রিকোয়েন্সি অ্যানালাইসিস কীভাবে ক্রিপ্টোঅ্যানালিস্টদের সিজার শিফটের মতো প্রাচীন সাবস্টিটিউশন সাইফার সহজেই ভেঙে ফেলতে সাহায্য করে?'
        },
        options: [
          {
            en: 'Human languages have predictable letter frequencies (e.g. "E" is the most common letter in English at ~12.7%); by mapping the most frequent ciphertext letters to expected language frequencies, the key is revealed',
            bn: 'মানব ভাষার বর্ণগুলোতে নির্দিষ্ট পুনরাবৃত্তির হার থাকে (যেমন ইংরেজিতে "E" বর্ণটি প্রায় ১২.৭% বার আসে); সাইফারটেক্সটে কোন অক্ষরটি বেশি এসেছে তা মেপে খুব সহজেই গোপন চাবি বের করে ফেলা যায়',
          },
          {
            en: 'By listening to the audio frequency of typing sounds on keyboards',
            bn: 'কীবোর্ডে টাইপ করার সময় অক্ষরের অডিও কম্পাঙ্ক শুনে',
          },
          {
            en: 'By measuring the electrical frequency of wall power outlets',
            bn: 'দেয়ালের বৈদ্যুতিক সকেটের ফ্রিকোয়েন্সি পরিমাপ করার মাধ্যমে',
          },
          {
            en: 'By turning on computer radio receivers during full moon nights',
            bn: 'পূর্ণিমা রাতে কম্পিউটারের রেডিও রিসিভার চালু রাখার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Natural language letter distributions reveal simple substitution mappings.',
          bn: 'ভাষার অক্ষরের স্বাভাবিক বিন্যাস দেখে সাধারণ সাবস্টিটিউশন সাইফার ভেঙে ফেলা যায়।'
        },
        explanation: {
          en: 'Because monoalphabetic substitution does not alter the underlying frequency distribution of letters, frequency analysis trivially cracks classical ciphers.',
          bn: 'সাধারণ প্রতিস্থাপন সাইফার অক্ষরের অন্তর্নিহিত পরিসংখ্যান বদলাতে পারে না, ফলে ফ্রিকোয়েন্সি টেস্টে তা মুহূর্তেই ফাঁস হয়ে যায়।'
        },
      },
      {
        id: 'enc-meet-qz-4',
        kind: 'mcq',
        topic: 'computational-hardness-vs-information-theoretic',
        question: {
          en: 'What is the operational difference between "Computational Security" and "Information-Theoretic Security"?',
          bn: '"কম্পিউটেশনাল সিকিউরিটি" এবং "ইনফরমেশন-থিওরেটিক সিকিউরিটি" এর মধ্যকার মূল ব্যবহারিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'Computational security relies on mathematical problems being intractable for finite computing power within realistic timeframes (e.g. AES-256); Information-theoretic security cannot be broken even with infinite computing power (e.g. OTP)',
            bn: 'কম্পিউটেশনাল সিকিউরিটি এমন গাণিতিক সমস্যার ওপর নির্ভর করে যা সীমিত কম্পিউটিং ক্ষমতায় বাস্তবসম্মত সময়ে সমাধান করা অসম্ভব (যেমন AES-256); আর ইনফরমেশন-থিওরেটিক সিকিউরিটি অসীম কম্পিউটিং শক্তি থাকলেও কখনো ভাঙা যায় না (যেমন OTP)',
          },
          {
            en: 'Computational security is only used in school classrooms',
            bn: 'কম্পিউটেশনাল সিকিউরিটি কেবল স্কুলের ক্লাসরুমে ব্যবহৃত হয়',
          },
          {
            en: 'Information-theoretic security requires twelve backup batteries',
            bn: 'ইনফরমেশন-থিওরেটিক সিকিউরিটির জন্য বারোটি ব্যাকআপ ব্যাটারির প্রয়োজন হয়',
          },
          {
            en: 'Computational security only works on computers painted blue',
            bn: 'কম্পিউটেশনাল সিকিউরিটি কেবল নীল রঙের কম্পিউটারে কাজ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Computational security depends on bounded time; information-theoretic is unbreakable even by infinite compute.',
          bn: 'কম্পিউটেশনাল নির্ভর করে সময়ের সীমাবদ্ধতার ওপর; ইনফরমেশন-থিওরেটিক অসীম শক্তিতেও দুর্ভেদ্য।'
        },
        explanation: {
          en: 'Brute-forcing an AES-256 key would take billions of supercomputers longer than the age of the universe. This provides computational security sufficient for all human enterprise.',
          bn: 'AES-256 এর চাবি খুঁজে বের করতে ট্রিলিয়ন সুপারকম্পিউটার চালালেও মহাবিশ্বের বয়সের চেয়ে বেশি সময় লাগবে, যা মানব ইতিহাসের জন্য শতভাগ নিরাপদ।'
        },
      },
    ],
  },
  next: {
    slug: 'symmetric-crypto',
    title: {
      en: 'Symmetric Cryptography: Block Ciphers, AES & Stream Ciphers',
      bn: 'সিমেট্রিক ক্রিপ্টোগ্রাফি: ব্লক সাইফার, AES ও স্ট্রিম সাইফার'
    },
  },
};
