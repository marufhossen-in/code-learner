import type { Lesson } from '../../../lib/types';

export const PasswordsHashingLesson: Lesson = {
  slug: 'passwords-hashing',
  tech: 'authentication',
  title: {
    en: 'Password Hashing: Argon2id, bcrypt & Rainbow Table Defenses',
    bn: 'পাসওয়ার্ড হ্যাশিং: Argon2id, bcrypt এবং রেইনবো টেবিল প্রতিরোধ'
  },
  summary: {
    en: 'Master the engineering evolution of secure password storage from insecure plaintext to memory-hard adaptive hashing. Understand why fast cryptographic hash functions like MD5 and SHA-256 succumb to modern GPU cluster brute-force attacks. Learn how unique cryptographic salts neutralize precomputed rainbow tables, how secret peppers protect against database dumps, and how to calibrate Argon2id and bcrypt cost factors to resist cracking hardware.',
    bn: 'অনিরাপদ প্লেইনটেক্সট থেকে মেমোরি-হার্ড অ্যাডাপটিভ হ্যাশিং পর্যন্ত সুরক্ষিত পাসওয়ার্ড সংরক্ষণের প্রকৌশল বিবর্তন আয়ত্ত করুন। MD5 এবং SHA-২৫৬ এর মতো দ্রুত গতির ক্রিপ্টোগ্রাফিক হ্যাশ কেন আধুনিক GPU ক্লাস্টার আক্রমণের মুখে অচল তা বুঝুন। কীভাবে ইউনিক ক্রিপ্টোগ্রাফিক সল্ট পূর্বনির্মিত রেইনবো টেবিলকে অকেজো করে, সিক্রেট পেপার কীভাবে ডাটাবেজ ফাঁসের ঝুঁকি কমায় এবং ক্র্যাকিং হার্ডওয়্যার প্রতিহত করতে Argon2id ও bcrypt এর কস্ট ফ্যাক্টর কীভাবে টিউন করতে হয় তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'password-storage-evolution',
      text: {
        en: 'The History and Hazards of Password Storage',
        bn: 'পাসওয়ার্ড সংরক্ষণের ইতিহাস এবং মারাত্মক ঝুঁকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you store user passwords in a database, saving them as plaintext is a catastrophic security disaster. If your database is ever leaked or exported, every single user account is instantly compromised across the internet.',
        bn: 'যখন আপনি ডাটাবেজে ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণ করেন, তখন তা প্লেইনটেক্সট হিসেবে রাখা একটি ভয়াবহ নিরাপত্তা বিপর্যয়। আপনার ডাটাবেজ যদি কখনো ফাঁস হয়, তবে ইন্টারনেটের প্রতিটি ওয়েবসাইটে আপনার ব্যবহারকারীদের অ্যাকাউন্ট সাথে সাথে বেদখল হয়ে যাবে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Early software engineers attempted to fix this by using standard hash functions like MD5 or SHA-256. However, because those algorithms were engineered for high-speed file checksums, modern graphics cards compute over 10 billion SHA-256 guesses per second! To protect passwords effectively, software systems must use adaptive, memory-hard key derivation functions that deliberately slow down brute-force attackers.',
        bn: 'শুরুর দিকে প্রকৌশলীরা MD5 বা SHA-২৫৬ এর মতো সাধারণ হ্যাশ ফাংশন ব্যবহার করে এই সমস্যা সমাধানের চেষ্টা করেছিলেন। কিন্তু সেই অ্যালগরিদমগুলো ফাইলের সত্যতা দ্রুত যাচাইয়ের জন্য তৈরি হওয়ায় আধুনিক গ্রাফিক্স কার্ড প্রতি সেকেন্ডে ১০ কোটিরও বেশি হ্যাশ অনুমান করতে পারে! তাই পাসওয়ার্ড সুরক্ষিত রাখতে অবশ্যই মেমোরি-হার্ড অ্যালগরিদম ব্যবহার করতে হয় যা আক্রমণকারীদের গতি উদ্দেশ্যমূলকভাবে কমিয়ে দেয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Unique Cryptographic Salts (16+ Bytes)',
            bn: '১. ইউনিক ক্রিপ্টোগ্রাফিক সল্ট ( ১৬+ বাইট )'
          },
          text: {
            en: 'Generate a distinct, cryptographically random salt (such as 16 bytes) for every user. Salts ensure that identical passwords produce completely different hash outputs, completely destroying precomputed rainbow table dictionaries.',
            bn: 'প্রতিটি ব্যবহারকারীর জন্য আলাদা ও এলোমেলো ক্রিপ্টোগ্রাফিক সল্ট ( যেমন ১৬ বাইট ) তৈরি করুন। সল্ট ব্যবহারের ফলে দুজন ব্যবহারকারীর পাসওয়ার্ড একই হলেও তাদের হ্যাশ সম্পূর্ণ ভিন্ন হয়, যা রেইনবো টেবিল আক্রমণ প্রতিহত করে।'
          },
        },
        {
          title: {
            en: '2. Memory-Hardness Defense (Argon2id)',
            bn: '২. মেমোরি-হার্ড প্রতিরক্ষা (Argon2id)'
          },
          text: {
            en: 'Modern password crackers utilize massively parallel GPUs and ASIC chips. Memory-hard algorithms like Argon2id force every hash calculation to allocate substantial RAM (such as 64MB), breaking the economics of GPU parallelism.',
            bn: 'আধুনিক হ্যাকাররা প্যারালাল GPU ব্যবহার করে দ্রুত আক্রমণ চালায়। Argon2id-এর মতো মেমোরি-হার্ড অ্যালগরিদম প্রতিটি হিসাবের জন্য মেমোরিতে প্রচুর জায়গা ( যেমন ৬৪ মেগাবাইট র‍্যাম ) বরাদ্দ করতে বাধ্য করে, ফলে GPU আক্রমণ অচল হয়ে পড়ে।'
          },
        },
        {
          title: {
            en: '3. Adaptive Cost Factors and Work Tuning',
            bn: '৩. অ্যাডাপটিভ কস্ট ফ্যাক্টর ও ওয়ার্ক টিউনিং'
          },
          text: {
            en: 'Password hashing must take approximately 150 to 300 milliseconds on a production server. As hardware improves each decade, you increment the computational work factor (cost rounds) without changing your application code.',
            bn: 'প্রোডাকশন সার্ভারে একটি পাসওয়ার্ড হ্যাশ করতে প্রায় ১৫০ থেকে ৩০০ মিলিঙ্কেন্ড সময় নেওয়া উচিত। সময়ের সাথে হার্ডওয়্যার শক্তিশালী হলে আপনি ডাটাবেজ না বদলেই কস্ট ফ্যাক্টর বাড়িয়ে দিতে পারেন।'
          },
        },
        {
          title: {
            en: '4. Secret Server-Side Pepper Keys',
            bn: '৪. গোপন সার্ভার-সাইড পেপার (Pepper) কি'
          },
          text: {
            en: 'A pepper is an application-level cryptographic secret stored outside the database (in an environment vault). It is combined with the password before hashing. Even if the database is leaked, attackers cannot crack hashes without the pepper key.',
            bn: 'পেপার হলো একটি গোপন চাবি যা ডাটাবেজের বাইরে সিকিউর ভল্টে রাখা হয় এবং হ্যাশ করার আগে পাসওয়ার্ডের সাথে যুক্ত করা হয়। ডাটাবেজ চুরি হলেও এই গোপন চাবি ছাড়া আক্রমণকারীরা পাসওয়ার্ড ভাঙতে পারে না।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Modern Password Hashing Architecture: Argon2id with Salt & Pepper',
        bn: 'আধুনিক পাসওয়ার্ড হ্যাশিং আর্কিটেকচার: সল্ট ও পেপারসহ Argon2id'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Password hashing architecture comparing fast MD5/SHA-256 against slow memory-hard Argon2id">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PASSWORD HASHING ENGINE: FAST HASHES VS MEMORY-HARD ARGON2ID</text>
  
  <!-- Left Box: Broken Fast Hashes -->
  <g transform="translate(30, 48)">
    <rect width="360" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="180" y="24" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">THE BROKEN WAY: FAST HASHES (MD5 / SHA-256)</text>
    
    <g transform="translate(15, 40)">
      <rect width="330" height="65" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#cbd5e1" font-size="9">Input:  "P@ssword123"</text>
      <text x="15" y="40" fill="#fca5a5" font-size="8">SHA-256 Digest: e7f7dbb1d4519980b397a4ce...</text>
      <text x="15" y="56" fill="#ef4444" font-size="8">Zero Salt: Identical passwords produce identical hash!</text>
      
      <rect y="80" width="330" height="110" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="165" y="102" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">GPU CRACKING RIG SPECS (RTX 4090)</text>
      <text x="15" y="124" fill="#fca5a5" font-size="9">• Speed: 10,000,000,000 hashes / sec</text>
      <text x="15" y="144" fill="#fca5a5" font-size="9">• RAM Required: 0 MB (Registers only)</text>
      <text x="15" y="164" fill="#fca5a5" font-size="9">• Precomputed Rainbow Tables lookups: Instant</text>
      <text x="15" y="180" fill="#f87171" font-size="8">8-character password cracked in under 3 minutes!</text>
      
      <rect y="205" width="330" height="75" rx="4" fill="#0f172a"/>
      <text x="15" y="228" fill="#ef4444" font-size="9" font-weight="bold">FATAL CONCLUSION:</text>
      <text x="15" y="246" fill="#cbd5e1" font-size="8">Fast hashes are mathematically designed to be cheap.</text>
      <text x="15" y="264" fill="#cbd5e1" font-size="8">Cheap computation equals trivial brute-force cracking!</text>
    </g>
  </g>
  
  <!-- Right Box: Hardened Argon2id -->
  <g transform="translate(420, 48)">
    <rect width="390" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="195" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">PRODUCTION STANDARD: ARGON2ID + SALT + PEPPER</text>
    
    <g transform="translate(15, 40)">
      <rect width="360" height="85" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="20" fill="#38bdf8" font-size="9" font-weight="bold">DEFENSIVE INGREDIENTS:</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8">• Plaintext: "P@ssword123"</text>
      <text x="15" y="54" fill="#6ee7b7" font-size="8">• Salt: crypto.randomBytes(16) [Per User]</text>
      <text x="15" y="70" fill="#f59e0b" font-size="8">• Pepper: Environment Vault Secret [Off Database]</text>
      
      <rect y="100" width="360" height="105" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="180" y="122" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">ARGON2ID TUNED WORK METRICS</text>
      <text x="15" y="142" fill="#f8fafc" font-size="9">• Memory Cost (m): 64MB RAM per calculation</text>
      <text x="15" y="160" fill="#f8fafc" font-size="9">• Time Cost (t): 3 iterations (approx 200ms)</text>
      <text x="15" y="178" fill="#f8fafc" font-size="9">• Parallelism (p): 4 CPU threads</text>
      <text x="15" y="196" fill="#6ee7b7" font-size="8">GPU rig speed drops to 4 guesses/sec per card!</text>
      
      <rect y="220" width="360" height="65" rx="4" fill="#0f172a"/>
      <text x="15" y="240" fill="#10b981" font-size="9" font-weight="bold">DEFENSE PROVEN:</text>
      <text x="15" y="258" fill="#cbd5e1" font-size="8">Cracking 1 password requires centuries of electrical power,</text>
      <text x="15" y="274" fill="#6ee7b7" font-size="8">making bulk credential harvesting economically impossible.</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Argon2id forces attackers to allocate massive RAM per guess, neutralizing multi-billion hash/sec GPU attacks</text>
</svg>`,
      caption: {
        en: 'Fast hashes (MD5, SHA-256) crack in minutes on modern GPUs; memory-hard Argon2id forces RAM allocation, stalling attackers.',
        bn: 'দ্রুত গতির হ্যাশ (MD5, SHA-২৫৬) আধুনিক GPU দিয়ে কয়েক মিনিটেই ভেঙে ফেলা যায়; মেমোরি-হার্ড Argon2id প্রচুর র‍্যাম ব্যবহারের মাধ্যমে আক্রমণ প্রতিহত করে।'
      },
    },
    {
      type: 'heading',
      id: 'password-hasher-code',
      text: {
        en: 'Building a Defensive Password Hasher in Node.js',
        bn: 'Node.js-এ মেমোরি-হার্ড পাসওয়ার্ড হ্যাশার তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how modern software systems hash passwords with random salts and verify them using constant-time algorithms, inspect the following implementation. It uses native memory-hard scrypt key derivation and compares buffers securely.',
        bn: 'আধুনিক সফটওয়্যার কীভাবে র্যান্ডম সল্ট ব্যবহার করে পাসওয়ার্ড হ্যাশ করে এবং কনস্ট্যান্ট-টাইম অ্যালগরিদম দিয়ে যাচাই করে তা দেখতে নিচের কোডটি লক্ষ্য করুন। এটি নেটিভ মেমোরি-হার্ড scrypt অ্যালগরিদম ব্যবহার করে এবং নিরাপদে বাফার তুলনা করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'defensive-password-hasher.js',
      code: `// Production-Grade Memory-Hard Password Hasher using native Node.js crypto
const crypto = require('crypto');

class DefensivePasswordHasher {
  // Hash password using memory-hard scrypt KDF with unique 16-byte salt
  static hashPassword(plaintextPassword, pepperSecret = 'vault-pepper-secret-key-32') {
    // 1. Generate unique 16-byte cryptographic salt
    const saltBuffer = crypto.randomBytes(16);
    const saltHex = saltBuffer.toString('hex');

    // 2. Combine with server pepper
    const combinedInput = plaintextPassword + pepperSecret;

    // 3. Derive key with memory-hardness: N=16384 (CPU/memory cost), r=8 (block size), p=1
    const derivedKeyBuffer = crypto.scryptSync(combinedInput, saltHex, 32, {
      N: 16384,
      r: 8,
      p: 1
    });

    // 4. Return Modular Crypt Format string storing parameters, salt, and digest
    return '$scrypt$N=16384,r=8,p=1$' + saltHex + '$' + derivedKeyBuffer.toString('hex');
  }

  // Verify submitted password against stored hash record in constant time
  static verifyPassword(submittedPassword, storedRecord, pepperSecret = 'vault-pepper-secret-key-32') {
    const parts = storedRecord.split('$');
    if (parts.length < 5 || parts[1] !== 'scrypt') {
      return false; // Malformed record format
    }

    const saltHex = parts[3];
    const expectedHashBuffer = Buffer.from(parts[4], 'hex');

    // Recompute hash using the recorded salt and server pepper
    const combinedInput = submittedPassword + pepperSecret;
    const computedHashBuffer = crypto.scryptSync(combinedInput, saltHex, 32, {
      N: 16384,
      r: 8,
      p: 1
    });

    if (computedHashBuffer.length !== expectedHashBuffer.length) {
      return false;
    }

    // Always use timingSafeEqual to defeat timing attacks!
    return crypto.timingSafeEqual(computedHashBuffer, expectedHashBuffer);
  }
}

console.log('=== Step 1: Hashing Identical Passwords for Two Different Users ===');
const userOneRecord = DefensivePasswordHasher.hashPassword('SecretP@ssword99');
const userTwoRecord = DefensivePasswordHasher.hashPassword('SecretP@ssword99');

console.log('User 1 Hash Record:\\n', userOneRecord);
console.log('\\nUser 2 Hash Record (Same Password, Unique Salt!):\\n', userTwoRecord);

console.log('\\n=== Step 2: Testing Password Verification ===');
const isCorrect = DefensivePasswordHasher.verifyPassword('SecretP@ssword99', userOneRecord);
console.log('Correct Password Verification:', isCorrect); // true

console.log('\\n=== Step 3: Testing Incorrect Password Verification ===');
const isWrong = DefensivePasswordHasher.verifyPassword('WrongPassword!', userOneRecord);
console.log('Wrong Password Verification:  ', isWrong); // false`,
      caption: {
        en: 'Unique salts ensure identical passwords produce distinct hashes; verification executes in constant time.',
        bn: 'ইউনিক সল্টের কারণে একই পাসওয়ার্ডের হ্যাশ আলাদা হয়; যাচাইকরণ সর্বদা কনস্ট্যান্ট-টাইমে সম্পন্ন হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'The 72-Byte Truncation Limit of Legacy bcrypt',
        bn: 'পুরানো bcrypt-এর ৭২ বাইট পাসওয়ার্ড সীমাবদ্ধতা'
      },
      text: {
        en: 'The classic bcrypt algorithm has a famous architectural limitation: it strictly truncates passwords at 72 bytes! Any characters beyond byte 72 are completely ignored by the algorithm. An attacker submitting a 72-byte string with arbitrary garbage at byte 73 still successfully authenticates! Modern applications solve this by pre-hashing long passwords with SHA-256 before feeding into bcrypt, or by adopting Argon2id which has zero length truncation limits.',
        bn: 'জনপ্রিয় bcrypt অ্যালগরিদমের একটি সুপরিচিত আর্কিটেকচারাল সীমাবদ্ধতা রয়েছে: এটি ৭২ বাইটের বেশি বড় পাসওয়ার্ডের বাকি অংশ স্বয়ংক্রিয়ভাবে কেটে ফেলে! ৭২ বাইটের পরের কোনো অক্ষর এই অ্যালগরিদম হিসাব করে না। এর ফলে কেউ যদি ৭৩ তম অক্ষরে ভুল তথ্যও দেয়, তবুও লগইন সফল হয়ে যায়! আধুনিক সিস্টেমে bcrypt ব্যবহারের আগে SHA-২৫৬ দিয়ে প্রি-হ্যাশ করে নেওয়া হয়, অথবা Argon2id ব্যবহার করা হয় যার কোনো সাইজ সীমা নেই।'
      },
    },
  ],
  exercises: [
    {
      id: 'pass-hash-ex-1',
      kind: 'predict',
      topic: 'salt-byte-length',
      question: {
        en: 'How many bytes is the standard recommended minimum length for a cryptographic password salt? (16). Type the number.',
        bn: 'একটি ক্রিপ্টোগ্রাফিক পাসওয়ার্ড সল্টের স্ট্যান্ডার্ড প্রস্তাবিত সর্বনিম্ন সাইজ কত বাইট? ( ১৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '16',
      hint: {
        en: 'The minimum salt length is 16 bytes (128 bits).',
        bn: 'সর্বনিম্ন সল্ট দৈর্ঘ্য হলো ১৬ বাইট ( ১২৮ বিট )। '
      },
      explanation: {
        en: 'A 16-byte (128-bit) salt provides 2^128 unique values, making it mathematically impossible for two users to collide.',
        bn: '১৬ বাইটের সল্ট ২^১২৮ টি ভিন্ন ভিন্ন মান তৈরি করতে পারে, যার ফলে দুজনের সল্ট এক হওয়া অসম্ভব।'
      },
    },
    {
      id: 'pass-hash-ex-2',
      kind: 'mcq',
      topic: 'why-fast-hashes-insecure',
      question: {
        en: 'Why are fast hashing algorithms like MD5 and SHA-256 completely unsuitable for password storage, even when unique salts are used?',
        bn: 'ইউনিক সল্ট ব্যবহার করা সত্ত্বেও ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণে MD5 এবং SHA-২৫৬ এর মতো দ্রুত অ্যালগরিদম কেন একেবারেই অনুপযুক্ত?'
      },
      options: [
        {
          en: 'Fast hashes require minimal memory and zero CPU friction; a modern GPU cluster computes tens of billions of SHA-256 hashes per second, allowing attackers to brute-force salted passwords within hours',
          bn: 'দ্রুত গতির হ্যাশে কোনো মেমোরি লাগে না; আধুনিক GPU ক্লাস্টার প্রতি সেকেন্ডে শত কোটি হ্যাশ হিসাব করতে পারে, ফলে সল্ট দেওয়া থাকলেও আক্রমণকারীরা কয়েক ঘণ্টায় পাসওয়ার্ড বের করে ফেলে',
        },
        {
          en: 'Because SHA-256 hashes make computer cooling fans spin in reverse',
          bn: 'কারণ SHA-২৫৬ হ্যাশ কম্পিউটারের কুলিং ফ্যানকে উল্টো দিকে ঘোরায়',
        },
        {
          en: 'Because fast hashes cannot be written onto solid-state hard drives',
          bn: 'কারণ দ্রুত গতির হ্যাশ এসএসডি হার্ড ড্রাইভে সংরক্ষণ করা যায় না',
        },
        {
          en: 'Because MD5 hashes can only be computed on Monday mornings',
          bn: 'কারণ MD5 হ্যাশ কেবল সোমবার সকালে হিসাব করা সম্ভব',
        },
      ],
      answer: 0,
      hint: {
        en: 'Fast hashes lack memory-hardness, making GPU parallel cracking trivial.',
        bn: 'দ্রুত হ্যাশে মেমোরি বাধা থাকে না, ফলে GPU দিয়ে খুব সহজেই পাসওয়ার্ড ভাঙা যায়।',
      },
      explanation: {
        en: 'Password hashing must be slow and memory-intensive (Argon2id or bcrypt) so attackers cannot harness massive GPU parallelism.',
        bn: 'পাসওয়ার্ড হ্যাশকে অবশ্যই ধীর ও মেমোরি-নির্ভর হতে হবে যাতে আক্রমণকারীরা কোটি কোটি অনুমান চালাতে না পারে।'
      },
    },
    {
      id: 'pass-hash-ex-3',
      kind: 'mcq',
      topic: 'salt-vs-pepper',
      question: {
        en: 'What is the primary architectural difference between a Salt and a Pepper in password security?',
        bn: 'পাসওয়ার্ড নিরাপত্তার ক্ষেত্রে সল্ট (Salt) এবং পেপারের (Pepper) মধ্যে প্রধান আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'A salt is unique per user and stored openly in the database alongside the hash; a pepper is a secret application key shared across users and stored outside the database in a secure environment vault',
          bn: 'সল্ট প্রতিটি ইউজারের জন্য আলাদা হয় এবং ডাটাবেজে হ্যাশের পাশেই রাখা হয়; আর পেপার হলো একটি গোপন চাবি যা ডাটাবেজের বাইরে আলাদা সিক্রেট ভল্টে সংরক্ষিত থাকে',
        },
        {
          en: 'Salts are for Linux servers, while peppers are only for Windows computers',
          bn: 'সল্ট কেবল লিনাক্স সার্ভারের জন্য এবং পেপার কেবল উইন্ডোজ কম্পিউটারের জন্য',
        },
        {
          en: 'Salts turn passwords into numbers, while peppers delete passwords entirely',
          bn: 'সল্ট পাসওয়ার্ডকে সংখ্যায় রূপান্তর করে আর পেপার পাসওয়ার্ডকে মুছে দেয়',
        },
        {
          en: 'There is no difference; salt and pepper are identical culinary terms',
          bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; এগুলো কেবল রান্নার সাধারণ শব্দ',
        },
      ],
      answer: 0,
      hint: {
        en: 'Salts are stored with the hash; peppers are kept in external secret vaults.',
        bn: 'সল্ট ডাটাবেজে হ্যাশের সাথে থাকে; পেপার বাইরের নিরাপদ ভল্টে থাকে।',
      },
      explanation: {
        en: 'If a SQL injection leaks the database table, the attacker gets the salts but lacks the external pepper, preventing offline cracking.',
        bn: 'ডাটাবেজ চুরি হলে আক্রমণকারী সল্ট পেলেও পেপার পায় না, যার ফলে অফলাইনে হ্যাশ ভাঙা অসম্ভব হয়।'
      },
    },
    {
      id: 'pass-hash-ex-4',
      kind: 'predict',
      topic: 'bcrypt-byte-limit',
      question: {
        en: 'What is the maximum character byte limit in the legacy bcrypt algorithm before truncation occurs? (72). Type the number.',
        bn: 'পুরানো bcrypt অ্যালগরিদমে কত বাইট অক্ষরের পর পাসওয়ার্ড নিজে থেকেই কেটে ফেলা (ট্রাঙ্কেট) হয়? ( ৭২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '72',
      hint: {
        en: 'bcrypt truncates input at 72 bytes.',
        bn: 'bcrypt ইনপুটকে ৭২ বাইটে কেটে ছোট করে।',
      },
      explanation: {
        en: 'The classic bcrypt algorithm only evaluates the first 72 bytes of input, ignoring any trailing characters.',
        bn: 'bcrypt অ্যালগরিদম কেবল প্রথম ৭২ বাইট হিসাব করে এবং এর পরের সমস্ত অক্ষর উপেক্ষা করে।'
      },
    },
  ],
  quiz: {
    id: 'passwords-hashing-quiz',
    title: {
      en: 'Password Hashing & Key Derivation Quiz',
      bn: 'পাসওয়ার্ড হ্যাশিং ও কি ডেরিভেশন কুইজ'
    },
    questions: [
      {
        id: 'pass-hash-qz-1',
        kind: 'mcq',
        topic: 'argon2id-superiority',
        question: {
          en: 'What specific architectural advantage makes Argon2id superior to older algorithms like PBKDF2 or standard bcrypt?',
          bn: 'কোন সুনির্দিষ্ট আর্কিটেকচারাল সুবিধার কারণে Argon2id পুরানো PBKDF2 বা সাধারণ bcrypt-এর চেয়ে অনেক বেশি শক্তিশালী?'
        },
        options: [
          {
            en: 'Argon2id combines data-dependent and data-independent memory access, providing state-of-the-art defense against both side-channel cache attacks and GPU/ASIC parallel cracking hardware',
            bn: 'Argon2id মেমোরি অ্যাক্সেসকে এমনভাবে বিন্যস্ত করে যা সাইড-চ্যানেল ক্যাশ আক্রমণ এবং আধুনিক GPU/ASIC প্যারালাল হার্ডওয়্যার উভয়ের বিরুদ্ধেই সর্বোচ্চ সুরক্ষা নিশ্চিত করে',
          },
          {
            en: 'Argon2id compresses video files automatically during login',
            bn: 'Argon2id লগইনের সময় ভিডিও ফাইল স্বয়ংক্রিয়ভাবে কম্প্রেস করে',
          },
          {
            en: 'Argon2id eliminates the need for computer cooling fans',
            bn: 'Argon2id কম্পিউটারের কুলিং ফ্যানের প্রয়োজনীয়তা দূর করে দেয়',
          },
          {
            en: 'Argon2id turns all user passwords into physical gold coins',
            bn: 'Argon2id ব্যবহারকারীর সমস্ত পাসওয়ার্ডকে খাঁটি সোনার মুদ্রায় রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Argon2id provides hybrid memory-hardness and side-channel attack resistance.',
          bn: 'Argon2id মেমোরি বাধা এবং সাইড-চ্যানেল আক্রমণ প্রতিরোধের সমন্বয় করে।',
        },
        explanation: {
          en: 'Argon2id won the Password Hashing Competition because it effectively resists both memory-hard GPU cracking and cache timing side-channels.',
          bn: 'Argon2id পাসওয়ার্ড হ্যাশিং প্রতিযোগিতায় প্রথম হয়েছিল কারণ এটি GPU আক্রমণ এবং ক্যাশ টাইমিং উভয়ই প্রতিহত করে।'
        },
      },
      {
        id: 'pass-hash-qz-2',
        kind: 'mcq',
        topic: 'rainbow-table-neutralization',
        question: {
          en: 'How do precomputed Rainbow Tables work, and why do unique cryptographic salts completely neutralize them?',
          bn: 'পূর্বনির্মিত রেইনবো টেবিল (Rainbow Tables) কীভাবে কাজ করে এবং ইউনিক ক্রিপ্টোগ্রাফিক সল্ট কেন এদের সম্পূর্ণ অকেজো করে দেয়?'
        },
        options: [
          {
            en: 'Rainbow tables map millions of precomputed plaintext-to-hash pairs for unsalted passwords; adding a unique random salt forces an attacker to compute a brand-new custom table for every single individual user account',
            bn: 'রেইনবো টেবিল কোটি কোটি সাধারণ পাসওয়ার্ডের হ্যাশ মান আগে থেকেই হিসাব করে রাখে; ইউনিক সল্ট যুক্ত করলে আক্রমণকারীকে প্রতিটি ব্যবহারকারীর জন্য নতুন করে বিশাল টেবিল বানাতে হয় যা অসম্ভব',
          },
          {
            en: 'Rainbow tables change website monitor colors into a rainbow spectrum',
            bn: 'রেইনবো টেবিল ওয়েবসাইটের রঙকে রংধনুর সাত রঙে রূপান্তর করে দেয়',
          },
          {
            en: 'Salts dissolve the magnetic tape inside computer hard drives',
            bn: 'সল্ট কম্পিউটার হার্ড ড্রাইভের ভেতরের ম্যাগনেটিক অংশ গলিয়ে ফেলে',
          },
          {
            en: 'Rainbow tables only attack websites on rainy days',
            bn: 'রেইনবো টেবিল কেবল বৃষ্টির দিনেই ওয়েবসাইটগুলোতে আক্রমণ করতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Salts destroy the reusability of precomputed dictionary lookup tables.',
          bn: 'সল্ট আগে থেকে তৈরি করা অভিধান টেবিলের পুনর্ব্যবহারযোগ্যতা নষ্ট করে।',
        },
        explanation: {
          en: 'Without salts, one precomputed table cracks all users sharing a password. With unique salts, each user requires billions of fresh calculations.',
          bn: 'সল্ট না থাকলে একটি টেবিল দিয়েই সবার পাসওয়ার্ড ভাঙা যায়। ইউনিক সল্ট থাকলে প্রতিটি ইউজারের জন্য আলাদা কোটি কোটি হিসাব করতে হয়।'
        },
      },
      {
        id: 'pass-hash-qz-3',
        kind: 'mcq',
        topic: 'optimal-verification-latency',
        question: {
          en: 'Why should password verification on a production authentication server execute in approximately 150 to 300 milliseconds?',
          bn: 'প্রোডাকশন অথেনটিকেশন সার্ভারে পাসওয়ার্ড যাচাই করতে কেন প্রায় ১৫০ থেকে ৩০০ মিলিঙ্কেন্ড সময় নেওয়া উচিত?'
        },
        options: [
          {
            en: '150 to 300 milliseconds is completely imperceptible to a human logging in once, but imposes massive computational delay on attackers attempting millions of automated dictionary guesses',
            bn: 'একবার লগইন করা মানুষের জন্য ১৫০ থেকে ৩০০ মিলিঙ্কেন্ড একদমই অনুভূত হয় না, কিন্তু আক্রমণকারীর লাখ লাখ স্বয়ংক্রিয় অনুমানের ক্ষেত্রে এটি এক বিশাল ও দুর্লঙ্ঘ্য বাধা হয়ে দাঁড়ায়',
          },
          {
            en: 'Because computer microchips shut down if operations take less than 100 milliseconds',
            bn: 'কারণ কোনো কাজ ১০০ মিলিঙ্কেন্ডের চেয়ে কম সময় নিলে কম্পিউটারের মাইক্রোচিপ বন্ধ হয়ে যায়',
          },
          {
            en: 'Because internet cables cannot carry electrical current for shorter durations',
            bn: 'কারণ কম সময়ের জন্য ইন্টারনেট কেবল বিদ্যুৎ পরিবহন করতে পারে না',
          },
          {
            en: 'Because web browsers require 300 milliseconds to play login audio effects',
            bn: 'কারণ লগইন সাউন্ড বাজানোর জন্য ব্রাউজারের ৩০০ মিলিঙ্কেন্ড সময় প্রয়োজন হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'A slight delay is imperceptible to humans but devastating to automated brute-force attacks.',
          bn: 'সামান্য বিলম্ব মানুষের জন্য সমস্যা নয়, কিন্তু রোবটের আক্রমণের জন্য মারাত্মক বাধা।',
        },
        explanation: {
          en: 'Calibrating work factors to ~250ms ensures an acceptable user experience while keeping brute-force attacks computationally expensive.',
          bn: '২৫০ মিলিঙ্কেন্ড সময় ব্যবহারকারীর জন্য স্বাভাবিক থাকে, অথচ আক্রমণকারীর জন্য আক্রমণ চালানো অসম্ভব রকম ব্যয়বহুল করে তোলে।'
        },
      },
      {
        id: 'pass-hash-qz-4',
        kind: 'mcq',
        topic: 'adaptive-cost-factor-benefit',
        question: {
          en: 'How do adaptive cost factors future-proof user password storage against Moore\'s Law and faster GPU cracking hardware?',
          bn: 'অ্যাডাপটিভ কস্ট ফ্যাক্টর কীভাবে মুরের সূত্র এবং ভবিষ্যতের দ্রুতগতির GPU ক্র্যাকিং হার্ডওয়্যারের বিরুদ্ধে পাসওয়ার্ড সুরক্ষাকে দীর্ঘস্থায়ী করে?'
        },
        options: [
          {
            en: 'As server CPUs and attacker GPUs become faster over time, administrators can increase the computational work factor (e.g. from cost 10 to 12) without breaking existing stored hashes, re-hashing user passwords automatically upon next login',
            bn: 'সময়ের সাথে সাথে প্রসেসর এবং GPU যত দ্রুত হবে, সিস্টেম অ্যাডমিনরা কস্ট ফ্যাক্টর ( যেমন ১০ থেকে ১২ ) বাড়িয়ে দিতে পারেন; এতে পুরানো হ্যাশ নষ্ট হয় না এবং পরের লগইনে ইউজারের পাসওয়ার্ড স্বয়ংক্রিয়ভাবে নতুন মানে আপডেট হয়',
          },
          {
            en: 'Adaptive cost factors physically upgrade server motherboard components over the internet',
            bn: 'অ্যাডাপটিভ কস্ট ফ্যাক্টর ইন্টারনেটের মাধ্যমে সার্ভারের মাদারবোর্ড শারীরিকভাবে উন্নত করে দেয়',
          },
          {
            en: 'They reduce the monthly electricity bills of software development companies',
            bn: 'তারা সফটওয়্যার ডেভেলপমেন্ট কোম্পানির মাসিক বিদ্যুৎ বিল কমিয়ে দেয়',
          },
          {
            en: 'They force computer screens to display passwords in 3D holographic images',
            bn: 'তারা কম্পিউটার স্ক্রিনে পাসওয়ার্ডগুলোকে থ্রি-ডি ছবিতে প্রদর্শন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Cost factors can be dialed up as hardware speeds improve over time.',
          bn: 'হার্ডওয়্যারের গতি বাড়ার সাথে সাথে কস্ট ফ্যাক্টর বাড়িয়ে নেওয়া যায়।',
        },
        explanation: {
          en: 'Adaptive KDFs store their cost parameters in the hash string ($cost$...). Servers check if the hash used an older cost, upgrading it seamlessly upon login.',
          bn: 'অ্যাডাপটিভ হ্যাশে কস্ট ফ্যাক্টরের মান লেখা থাকে। লগইনের সময় পুরানো মান থাকলে সার্ভার নিমিষেই নতুন শক্তিশালী মানে রূপান্তর করে নেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'sessions-tokens',
    title: {
      en: 'Stateful Sessions & Cookie Security: HttpOnly, SameSite & Redis Stores',
      bn: 'স্টেটফুল সেশন এবং কুকি নিরাপত্তা: HttpOnly, SameSite এবং রেডিস স্টোর'
    },
  },
};
