import type { Lesson } from '../../../lib/types';

export const passwordFoundryLesson: Lesson = {
  slug: 'the-password-foundry',
  tech: 'security-fundamentals',
  title: {
    en: 'The Password Foundry — Salting, Slow Hashing, and Storage Architectures',
    bn: 'পাসওয়ার্ড কারখানা: সল্টিং, স্লো হ্যাশিং ও সংরক্ষণ স্থাপত্য'
  },
  summary: {
    en: 'Storing user credentials requires deliberate cryptographic engineering. Traditional fast hashes like MD5 or SHA-256 allow offline attackers to compute billions of guesses per second using consumer GPUs. In this lesson, you will master the mechanics of deliberate slow key derivation functions, unique per-user cryptographic salts that neutralize rainbow tables, and memory-hard algorithms like Argon2id and bcrypt. Implement an executable PBKDF2 hashing and verification pipeline in TypeScript with constant-time equality checks.',
    bn: 'ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণে বিশেষায়িত ক্রিপ্টোগ্রাফিক ইঞ্জিনিয়ারিং প্রয়োজন। সাধারণ দ্রুত হ্যাশিং অ্যালগরিদম (যেমন MD5 বা SHA-256) ব্যবহার করলে আক্রমণকারীরা গ্রাফিক্স কার্ডের সাহায্যে সেকেন্ডে কোটি কোটি অনুমান পরীক্ষা করতে পারে। এই পাঠে আপনি ইচ্ছাকৃত ধীরগতির কি-ডেরিভেশন ফাংশন, রেইনবো টেবিল অকেজোকারী অনন্য পার-ইউজার ক্রিপ্টোগ্রাফিক সল্ট এবং মেমরি-নির্ভর আর্গন২আইডি ও বিক্রিপ্ট অ্যালগরিদম বিশদভাবে শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর PBKDF2 হ্যাশিং, কনস্ট্যান্ট-টাইম তুলনা এবং পাসওয়ার্ড যাচাইকরণের সম্পূর্ণ পাইপলাইন বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'password-storage-fundamentals',
      text: {
        en: 'The Fundamental Paradox of Password Storage',
        bn: 'পাসওয়ার্ড সংরক্ষণের মূল সংকট ও নিরাপত্তা দর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a user registers for an account, your backend must be able to verify their identity on future logins without ever knowing what their plaintext password actually is.',
        bn: 'যখন কোনো ব্যবহারকারী নতুন অ্যাকাউন্ট খোলেন, তখন সার্ভারকে এমন ব্যবস্থা নিতে হয় যাতে ভবিষ্যতে লগইন যাচাই করা যায় কিন্তু সার্ভার নিজে কখনোই আসল পাসওয়ার্ড জানতে না পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never store plaintext passwords or reversible two-way encryptions in your database. If your database leaks or an attacker compromises your application servers, holding the decryption key allows immediate exposure of every credential. Instead, authentication relies on one-way cryptographic hash functions: mathematical algorithms that transform an input string into a fixed-length digest that cannot be reversed. To verify a user during login, the server re-computes the hash of the submitted password and checks whether the resulting digest matches the recorded record.',
        bn: 'ডেটাবেসে কখনো সরাসরি পাসওয়ার্ড বা ২ ধরণের দ্বিমুখী এনক্রিপশন সংরক্ষণ করা যাবে না। যদি কোনো কারণে ডেটাবেস ফাঁস হয় বা সার্ভার হ্যাক হয়, তবে ডিক্রিপশন কি থাকলে সমস্ত পাসওয়ার্ড সাথে সাথে প্রকাশ পেয়ে যায়। এর পরিবর্তে একমুখী ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন ব্যবহার করা হয়: এটি এমন এক গাণিতিক পদ্ধতি যা টেক্সটকে একটি নির্দিষ্ট দৈর্ঘ্যের ডাইজেস্টে রূপান্তর করে যা থেকে আর মূল পাসওয়ার্ড উদ্ধার করা যায় না। লগইনের সময় সার্ভার ব্যবহারকারীর দেওয়া পাসওয়ার্ড পুনরায় হ্যাশ করে সংরক্ষিত রেকর্ডের সাথে মিলিয়ে দেখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cryptographic-salt',
          def: {
            en: 'A unique, cryptographically random sequence of bytes generated per user and prepended to passwords before hashing to defeat precomputed rainbow tables.',
            bn: 'প্রতিটি ব্যবহারকারীর জন্য আলাদাভাবে তৈরি অনন্য ও এলোমেলো ক্রিপ্টোগ্রাফিক বাইট যা হ্যাশ করার আগে যুক্ত করে রেইনবো টেবিল আক্রমণ প্রতিহত করা হয়।'
          }
        },
        {
          term: 'key-derivation-function',
          def: {
            en: 'A deliberately slow, parameterized cryptographic algorithm designed to transform passwords into keys while resisting brute-force acceleration.',
            bn: 'একটি ইচ্ছাকৃতভাবে ধীরগতির ক্রিপ্টোগ্রাফিক অ্যালগরিদম যা ব্রুট-ফোর্স আক্রমণ ঠেকাতে অতিরিক্ত সময় বা মেমরি খরচ করে পাসওয়ার্ড রূপান্তর করে।'
          }
        },
        {
          term: 'argon2id',
          def: {
            en: 'The modern gold-standard password hashing algorithm, combining memory hardness against GPU/ASIC clusters with resistance to side-channel timing attacks.',
            bn: 'পাসওয়ার্ড হ্যাশিংয়ের আধুনিক সেরা মানদণ্ড, যা গ্রাফিক্স কার্ডের বিরুদ্ধে উচ্চ মেমরি ব্যবহার এবং টাইমিং সাইড-চ্যানেল আক্রমণ প্রতিরোধ নিশ্চিত করে।'
          }
        },
        {
          term: 'rainbow-table',
          def: {
            en: 'A precomputed lookup table of billions of common plaintext passwords and their corresponding fast hash digests used to reverse un-salted credentials.',
            bn: 'বিলিয়ন সাধারণ পাসওয়ার্ড এবং সেগুলোর হ্যাশ মানের একটি তৈরি করা তালিকা যা সল্টবিহীন ডেটাবেস থেকে দ্রুত পাসওয়ার্ড উদ্ধারে ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'security'
    },
    {
      type: 'heading',
      id: 'fast-hashes-vs-slow-kdfs',
      text: {
        en: 'Why Fast Hashes Fail: Fast Hashes vs Modern KDFs',
        bn: 'দ্রুত হ্যাশ কেন ব্যর্থ: ফাস্ট হ্যাশ বনাম আধুনিক KDF'
      }
    },
    {
      type: 'para',
      text: {
        en: 'General-purpose cryptographic hash functions (such as MD5, SHA-1, and SHA-256) were designed for high-throughput data integrity checks, not credential protection. Modern consumer graphics cards can evaluate over 5000000000 SHA-256 hashes per second. Specialized password hashing algorithms introduce configurable computational work factors and memory hardness to drastically slow down offline attackers.',
        bn: 'সাধারণ ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন (যেমন MD5, SHA-1, এবং SHA-256) ফাইলের দ্রুত অখণ্ডতা পরীক্ষার জন্য তৈরি হয়েছিল, পাসওয়ার্ড সংরক্ষণের জন্য নয়। আধুনিক গ্রাফিক্স কার্ড ব্যবহার করে সেকেন্ডে ৫০০০০০০০০০ টিরও বেশি SHA-256 হ্যাশ গণনা করা সম্ভব। বিশেষায়িত পাসওয়ার্ড হ্যাশিং অ্যালগরিদমগুলো কাজের মাত্রা ও মেমরির ব্যবহার বাড়িয়ে আক্রমণকারীদের অনুমান গতি ভয়াবহভাবে কমিয়ে দেয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Design Category', bn: 'ডিজাইন বিভাগ' },
        { en: 'Hardware Hardness Defense', bn: 'হার্ডওয়্যার প্রতিরোধ ক্ষমতা' },
        { en: 'Production Security Status', bn: 'প্রোডাকশন নিরাপত্তা স্ট্যাটাস' }
      ],
      rows: [
        [
          { en: 'MD5 / SHA-1 / SHA-256', bn: 'MD5 / SHA-1 / SHA-256' },
          { en: 'Fast general-purpose digest', bn: 'দ্রুত সাধারণ ডাইজেস্ট' },
          { en: 'None: Billions of guesses per second on consumer GPUs', bn: 'কোনো বাধা নেই: জিপিইউ-তে সেকেন্ডে বিলিয়ন অনুমান' },
          { en: 'Fatal vulnerability: completely unacceptable for passwords', bn: 'মারাত্মক ঝুঁকিপূর্ণ: পাসওয়ার্ডে ব্যবহার সম্পূর্ণ নিষিদ্ধ' }
        ],
        [
          { en: 'PBKDF2 (HMAC-SHA256)', bn: 'PBKDF2 (HMAC-SHA256)' },
          { en: 'Iterated key derivation function', bn: 'পুনরাবৃত্ত কি-ডেরিভেশন ফাংশন' },
          { en: 'CPU iterations (e.g. 100000 rounds), but zero memory hardness', bn: 'উচ্চ সিপিইউ রাউন্ড (১০০০০০ বার), তবে মেমরির চাপ নেই' },
          { en: 'Legacy standard: acceptable where FIPS compliance mandates it', bn: 'পুরনো মানদণ্ড: কেবল সরকারি নিয়ম মানতে প্রযোজ্য' }
        ],
        [
          { en: 'bcrypt', bn: 'bcrypt' },
          { en: 'Blowfish-derived adaptive KDF', bn: 'ব্লোফিশ-ভিত্তিক অ্যাডাপ্টিভ KDF' },
          { en: 'Configurable exponential cost factor (e.g. cost 12 = 4096 rounds)', bn: 'সূচকীয় খরচ ফ্যাক্টর (যেমন কস্ট ১২ = ৪০৯৬ রাউন্ড)' },
          { en: 'Battle-tested enterprise standard: widespread backend support', bn: 'পরীক্ষিত এন্টারপ্রাইজ মানদণ্ড: বিশ্বজুড়ে জনপ্রিয়' }
        ],
        [
          { en: 'Argon2id', bn: 'Argon2id' },
          { en: 'Memory-hard hybrid KDF', bn: 'মেমরি-নির্ভর হাইব্রিড KDF' },
          { en: 'Requires substantial RAM (e.g. 64MB) per hash, defeating GPUs/ASICs', bn: 'প্রতি হ্যাশে ৬৪ মেগাবাইট র‍্যাম লাগে, ফলে জিপিইউ অকেজো' },
          { en: 'Modern gold standard: winner of the Password Hashing Competition', bn: 'আধুনিক সেরা মানদণ্ড: আন্তর্জাতিক প্রতিযোগিতায় বিজয়ী' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'password-authentication-lifecycle',
      text: {
        en: 'The Secure Authentication Lifecycle: Salt, Hash, and Verify',
        bn: 'নিরাপদ প্রমাণীকরণ জীবনচক্র: সল্ট, হ্যাশ এবং যাচাই'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A production password pipeline consists of two distinct operational workflows: Account Enrollment and Authentication Verification. During enrollment, the server generates a cryptographically secure 16 byte random salt, passes the password and salt into a key derivation function with 100000 iterations, and stores the combined salt and digest string in the database. During authentication, the server reads the stored salt, recomputes the derived hash from the candidate password, and compares the candidate hash against the stored hash using a constant-time equality check (timingSafeEqual) to prevent timing side-channel attacks.',
        bn: 'একটি প্রোডাকশন পাসওয়ার্ড পাইপলাইন ২টি ভিন্ন ধাপে কাজ করে: অ্যাকাউন্ট রেজিস্ট্রেশন এবং লগইন প্রমাণীকরণ। রেজিস্ট্রেশনের সময় সার্ভার ১৬ বাইটের একটি ক্রিপ্টোগ্রাফিক এলোমেলো সল্ট তৈরি করে, পাসওয়ার্ড ও সল্টকে ১০০০০০ বার পুনরাবৃত্তি করে হ্যাশ ডাইজেস্ট তৈরি করে এবং সল্টসহ হ্যাশটি ডেটাবেসে সংরক্ষণ করে। লগইনের সময় সার্ভার সংরক্ষিত সল্টটি পড়ে, ব্যবহারকারীর দেওয়া পাসওয়ার্ডটি পুনরায় একই পদ্ধতিতে হ্যাশ করে এবং টাইমিং সাইড-চ্যানেল আক্রমণ ঠেকাতে কনস্ট্যান্ট-টাইম তুলনা (timingSafeEqual) দিয়ে যাচাই করে।'
      }
    },
    {
      type: 'heading',
      id: 'executable-password-code',
      text: {
        en: 'Executable Password Hashing and Constant-Time Verification',
        bn: 'পাসওয়ার্ড হ্যাশিং ও কনস্ট্যান্ট-টাইম যাচাইয়ের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements the complete password hashing and verification architecture using Node.js crypto: generating a 16-byte cryptographic salt, deriving a 32-byte hash via PBKDF2 with 100000 iterations, and verifying candidate passwords with timingSafeEqual.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি নোডজেএস ক্রিপ্টো দিয়ে পূর্ণাঙ্গ পাসওয়ার্ড হ্যাশিং ও যাচাই স্থাপত্য বাস্তবায়ন করে: ১৬ বাইটের সল্ট তৈরি, ১০০০০০ রাউন্ডের মাধ্যমে ৩২ বাইট হ্যাশ তৈরি এবং timingSafeEqual দিয়ে পাসওয়ার্ডের নির্ভুলতা পরীক্ষা।'
      }
    },
    {
      type: 'code',
      code: `// Complete Password Salting and Verification Pipeline
import crypto from 'node:crypto';

interface PasswordHashRecord {
  saltHex: string;
  hashHex: string;
  iterations: number;
}

function createPasswordRecord(plainPassword: string): PasswordHashRecord {
  // Generate a cryptographically secure 16-byte random salt
  const salt = crypto.randomBytes(16);
  const iterations = 100000;
  const derivedKeyLength = 32;

  // Derive key using PBKDF2 with HMAC-SHA256
  const derivedHash = crypto.pbkdf2Sync(
    plainPassword,
    salt,
    iterations,
    derivedKeyLength,
    'sha256'
  );

  return {
    saltHex: salt.toString('hex'),
    hashHex: derivedHash.toString('hex'),
    iterations
  };
}

function verifyPassword(
  candidatePassword: string,
  record: PasswordHashRecord
): boolean {
  const salt = Buffer.from(record.saltHex, 'hex');
  const candidateHash = crypto.pbkdf2Sync(
    candidatePassword,
    salt,
    record.iterations,
    32,
    'sha256'
  );

  const storedHashBuffer = Buffer.from(record.hashHex, 'hex');

  // Mandatory constant-time equality check to prevent timing leaks
  return crypto.timingSafeEqual(storedHashBuffer, candidateHash);
}

// 1. Enrollment phase
const registeredUser = createPasswordRecord('SuperSecretUserPassword#2026');

// 2. Authentication attempts
const isCorrectPasswordValid = verifyPassword(
  'SuperSecretUserPassword#2026',
  registeredUser
);
const isWrongPasswordValid = verifyPassword(
  'WrongGuessAttempt',
  registeredUser
);

console.log('Salt length (hex characters):', registeredUser.saltHex.length);
console.log('Derived hash length (hex characters):', registeredUser.hashHex.length);
console.log('Correct password verified:', isCorrectPasswordValid);
console.log('Incorrect password rejected:', !isWrongPasswordValid);

// prints: Salt length (hex characters): 32
// prints: Derived hash length (hex characters): 64
// prints: Correct password verified: true
// prints: Incorrect password rejected: true`
    },
    {
      type: 'heading',
      id: 'peppers-and-hardware-defense',
      text: {
        en: 'Peppers, Cost Scaling, and Defense-in-Depth',
        bn: 'পেপার, কাজের মাত্রা বৃদ্ধি এবং বহুস্তরী সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In addition to per-user salts, high-security systems frequently incorporate a cryptographic Pepper: a secret key stored separately in a Hardware Security Module (HSM) or dedicated secrets vault rather than the application database. If an SQL injection vulnerability leaks the user table, an attacker still cannot compute offline hashes without the vaulted pepper. Furthermore, as server hardware improves over time, password architectures must periodically increment their work factor parameters (e.g. increasing bcrypt cost from 12 to 14) during successful user logins to ensure credentials remain secure against generational computing advances.',
        bn: 'পার-ইউজার সল্টের পাশাপাশি অতি-সুরক্ষিত সিস্টেমে অনেক সময় ক্রিপ্টোগ্রাফিক পেপার (Pepper) ব্যবহার করা হয়: এটি এমন একটি গোপন কি যা ডেটাবেসে না রেখে আলাদা হার্ডওয়্যার সিকিউরিটি মডিউল (HSM) বা সিক্রেট ভল্টে রাখা হয়। এর ফলে কোনো এসকিউএল ইনজেকশনে ডেটাবেস ফাঁস হলেও আক্রমণকারী ভল্টের পেপার ছাড়া হ্যাশ ভাঙতে পারে না। তাছাড়া প্রযুক্তির অগ্রগতির সাথে সাথে সার্ভারের ক্ষমতা বৃদ্ধি পাওয়ায় প্রতি কয়েক বছর পর পর সফল লগইনের সময় পাসওয়ার্ডের কাজের মাত্রা (যেমন বিক্রিপ্ট কস্ট ১২ থেকে বাড়িয়ে ১৪ করা) নিয়মিত হালনাগাদ করা জরুরি।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Never use fast hashes: Algorithms like MD5 and SHA-256 allow GPU attackers to compute billions of guesses per second.',
          bn: 'কখনো দ্রুত হ্যাশ ব্যবহার করবেন না: MD5 বা SHA-256 ব্যবহার করলে আক্রমণকারী সেকেন্ডে কোটি কোটি অনুমান পরীক্ষা করতে পারে।'
        },
        {
          en: 'Generate unique per-user salts: Unique random salts ensure identical passwords produce entirely different digests, neutralizing rainbow tables.',
          bn: 'প্রতি ব্যবহারকারীর জন্য আলাদা সল্ট দিন: অনন্য সল্ট ব্যবহারের ফলে একই পাসওয়ার্ডের হ্যাশ সম্পূর্ণ ভিন্ন হয় এবং রেইনবো টেবিল অকেজো থাকে।'
        },
        {
          en: 'Adopt memory-hard algorithms: Modern systems should prefer Argon2id or bcrypt over CPU-only hashing.',
          bn: 'মেমরি-নির্ভর অ্যালগরিদম বেছে নিন: আধুনিক সিস্টেমে কেবল প্রসেসর-নির্ভর পদ্ধতির বদলে আর্গন২আইডি বা বিক্রিপ্ট ব্যবহার করা উচিত।'
        },
        {
          en: 'Always compare in constant time: Use crypto.timingSafeEqual to eliminate byte-by-byte timing leak side channels.',
          bn: 'সবসময় কনস্ট্যান্ট-টাইমে তুলনা করুন: টাইমিং তথ্য ফাঁস প্রতিরোধ করতে crypto.timingSafeEqual ব্যবহার নিশ্চিত করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-needle-court',
    tech: 'security-fundamentals',
    title: {
      en: 'The Needle Court — SQL Injection and Parameterized Defense',
      bn: 'নিডল কোর্ট: এসকিউএল ইনজেকশন ও প্যারামিটারাইজড ডিফেন্স'
    }
  },
  exercises: [
    {
      id: 'pw-foundry-ex1',
      kind: 'mcq',
      topic: 'salting-purpose-and-storage',
      question: {
        en: 'Why is a cryptographic salt stored alongside the password hash in the database, and why does this not compromise security?',
        bn: 'ডেটাবেসে কেন পাসওয়ার্ড হ্যাশের পাশেই ক্রিপ্টোগ্রাফিক সল্ট সংরক্ষণ করা হয়, এবং এতে কেন কোনো নিরাপত্তা ঝুঁকি তৈরি হয় না?'
      },
      options: [
        {
          en: 'A salt is not a secret; its purpose is uniqueness, ensuring that identical passwords produce completely different digests and destroying the efficacy of precomputed rainbow tables',
          bn: 'সল্ট কোনো গোপন চাবি নয়; এর উদ্দেশ্য হলো অনন্যতা নিশ্চিত করা, যার ফলে দুজনের একই পাসওয়ার্ডের হ্যাশও সম্পূর্ণ আলাদা হয় এবং রেইনবো টেবিল অকেজো হয়ে যায়'
        },
        {
          en: 'Storing the salt frees up physical RAM inside the server motherboard',
          bn: 'সল্ট সংরক্ষণ করলে সার্ভারের মাদারবোর্ডের র‍্যাম খালি হয়ে যায়'
        },
        {
          en: 'Because standard SQL databases crash if table columns are left empty',
          bn: 'কারণ ডেটাবেসের কলাম খালি থাকলে সার্ভার ক্র্যাশ করে'
        },
        {
          en: 'Salts are required by web browsers to render HTML CSS colors accurately',
          bn: 'ওয়েব ব্রাউজারে সিএসএস কালার সঠিকভাবে দেখানোর জন্য সল্ট জরুরি'
        }
      ],
      answer: 0,
      hint: {
        en: 'A salt does not need to be hidden. It only needs to make two identical passwords look completely different.',
        bn: 'সল্ট গোপন রাখার দরকার নেই; এটি কেবল দুজন মানুষের একই পাসওয়ার্ডের হ্যাশকে ভিন্ন করতে ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Salts force offline attackers to crack passwords one-by-one rather than using a single precomputed lookup table across the whole database.',
        bn: 'সল্ট আক্রমণকারীকে পুরো ডেটাবেস একসাথে না ভেঙে প্রতিটি অ্যাকাউন্টের জন্য আলাদা আলাদা ব্রুট-ফোর্স করতে বাধ্য করে।'
      }
    },
    {
      id: 'pw-foundry-ex2',
      kind: 'mcq',
      topic: 'memory-hardness-argon2id',
      question: {
        en: 'What unique architectural defense makes memory-hard algorithms like Argon2id far superior to PBKDF2 against hardware cracking rigs?',
        bn: 'কোন অনন্য বৈশিষ্ট্যের কারণে আর্গন২আইডি-র মতো মেমরি-নির্ভর অ্যালগরিদম হার্ডওয়্যার ক্র্যাকিং রিগের বিরুদ্ধে PBKDF2-এর চেয়ে বহুগুণ শক্তিশালী?'
      },
      options: [
        {
          en: 'Argon2id mandates allocating large blocks of physical memory (e.g. 64MB) per hash calculation, severely bottlenecking massively parallel GPU and ASIC attack clusters',
          bn: 'আর্গন২আইডি প্রতি হ্যাশ গণনায় পর্যাপ্ত পরিমাণ র‍্যাম (যেমন ৬৪ মেগাবাইট) ব্যবহার বাধ্য করে, যার ফলে হাজার হাজার সমান্তরাল জিপিইউ কোর মেমরির অভাবে কাজ করতে পারে না'
        },
        {
          en: 'Argon2id permanently deletes the attacker graphics card drivers over the internet',
          bn: 'আর্গন২আইডি ইন্টারনেটের মাধ্যমে আক্রমণকারীর গ্রাফিক্স কার্ডের সফটওয়্যার মুছে দেয়'
        },
        {
          en: 'It compresses user passwords into zero bytes of binary data',
          bn: 'এটি ব্যবহারকারীর পাসওয়ার্ডকে শূন্য বাইটে রূপান্তর করে ফেলে'
        },
        {
          en: 'Argon2id runs only on solar-powered server hardware',
          bn: 'কারণ আর্গন২আইডি কেবল সৌরবিদ্যুতে চলা সার্ভারেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'GPUs have thousands of cores but tiny cache per core. If each core needs 64 megabytes of memory, the GPU stalls.',
        bn: 'গ্রাফিক্স কার্ডে হাজার হাজার কোর থাকলেও প্রতি কোরের মেমরি খুব কম। প্রতিটি কোরে ৬৪ মেগাবাইট র‍্যাম লাগলে জিপিইউ আর দ্রুত চলতে পারে না।'
      },
      explanation: {
        en: 'Memory hardness neutralizes the parallel computing advantage of GPUs and ASICs by binding calculation speed directly to memory bus bandwidth.',
        bn: 'মেমরি হার্ডনেস মেমরি ব্যান্ডের ওপর নির্ভর করে জিপিইউ ও বিশেষায়িত চিপের সমান্তরাল হিসাব করার সুবিধা সম্পূর্ণ নষ্ট করে দেয়।'
      }
    },
    {
      id: 'pw-foundry-ex3',
      kind: 'mcq',
      topic: 'timing-attacks-in-password-verification',
      question: {
        en: 'How does an early-terminating string comparison function (such as standard ===) create a measurable vulnerability during password verification?',
        bn: 'সাধারণ স্ট্রিং তুলনা (যেমন ===) কীভাবে পাসওয়ার্ড যাচাইয়ের সময় একটি পরিমাপযোগ্য নিরাপত্তা ঝুঁকি তৈরি করে?'
      },
      options: [
        {
          en: 'It exits immediately upon encountering the first incorrect byte, allowing an attacker to deduce correct hash bytes one-by-one by measuring sub-microsecond response latencies',
          bn: 'এটি প্রথম ভুল বাইট পাওয়া মাত্রই সাথে সাথে থেমে যায়, যার ফলে আক্রমণকারী সময়ের সূক্ষ্ম মাইক্রোসেকেন্ড পার্থক্য মেপে সঠিক হ্যাশের প্রতিটি অক্ষর অনুমান করতে পারে'
        },
        {
          en: 'It causes the server network card to broadcast passwords in plaintext over Wi-Fi',
          bn: 'এটি সার্ভারের নেটওয়ার্ক কার্ড দিয়ে ওয়াই-ফাইতে সরাসরি পাসওয়ার্ড প্রচার করে দেয়'
        },
        {
          en: 'It doubles the physical electrical resistance of server circuit boards',
          bn: 'এটি সার্ভারের ইলেকট্রনিক সার্কিটের বিদ্যুৎ রোধ দ্বিগুণ বাড়িয়ে দেয়'
        },
        {
          en: 'Because standard triple-equals was declared illegal by international courts in 2024',
          bn: 'কারণ ২০২৪ সালে আন্তর্জাতিক আদালতে সাধারণ সমান চিহ্ন ব্যবহারে নিষেধাজ্ঞা দেওয়া হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Early exit means wrong first character fails faster than wrong tenth character. That time difference is a leak.',
        bn: 'প্রথম অক্ষর ভুল হলে সময় কম লাগে আর দশম অক্ষর ভুল হলে বেশি সময় লাগে; এই সময়ের ব্যবধানই তথ্য ফাঁস করে।'
      },
      explanation: {
        en: 'Constant-time comparison functions like crypto.timingSafeEqual inspect all bytes regardless of mismatches, eliminating timing channels.',
        bn: 'কনস্ট্যান্ট-টাইম তুলনা সব সময় পুরো স্ট্রিং সমান সময় ধরে পরীক্ষা করে টাইমিং তথ্য ফাঁসের পথ বন্ধ করে।'
      }
    },
    {
      id: 'pw-foundry-ex4',
      kind: 'mcq',
      topic: 'pepper-storage-location',
      question: {
        en: 'Where must a cryptographic Pepper be stored to provide meaningful security defense beyond standard salting?',
        bn: 'সাধারণ সল্টের বাইরে কার্যকর নিরাপত্তা পেতে ক্রিপ্টোগ্রাফিক পেপার (Pepper) কোথায় সংরক্ষণ করা আবশ্যক?'
      },
      options: [
        {
          en: 'In an isolated environment outside the database, such as a secure Hardware Security Module (HSM), Key Management Service (KMS), or application environment vault',
          bn: 'ডেটাবেসের সম্পূর্ণ বাইরে একটি সুরক্ষিত পরিবেশে, যেমন হার্ডওয়্যার সিকিউরিটি মডিউল (HSM), ক্লাউড কেএমএস বা অ্যাপ্লিকেশনের গোপন ভল্টে'
        },
        {
          en: 'Inside a public text file stored directly on the frontend web server',
          bn: 'ওয়েবসাইটের পাবলিক ফোল্ডারে একটি উন্মুক্ত টেক্সট ফাইলের ভেতরে'
        },
        {
          en: 'In the footer of every marketing email sent to users',
          bn: 'ব্যবহারকারীদের কাছে পাঠানো সব বিজ্ঞাপনী ইমেইলের নিচে'
        },
        {
          en: 'Inside the user browser cookie as an unencrypted plain string',
          bn: 'ব্যবহারকারীর ব্রাউজার কুকির ভেতর সরাসরি সাধারণ টেক্সট আকারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the database leaks, the pepper must NOT leak with it. It belongs in a separate vault.',
        bn: 'ডেটাবেস যদি চুরিও হয়ে যায়, পেপার যেন চুরি না হয়; তাই এটি সম্পূর্ণ আলাদা কোনো ভল্টে থাকতে হয়।'
      },
      explanation: {
        en: 'Separating the pepper from the database ensures that an SQL injection or leaked database dump cannot be cracked without the vaulted key.',
        bn: 'ডেটাবেস থেকে পেপার আলাদা রাখলে ডেটাবেস ফাঁস হলেও মূল সিক্রেট কি ছাড়া আক্রমণকারী অফলাইনে হ্যাশ ভাঙতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'password-foundry-quiz',
    title: {
      en: 'Cryptographic Password Storage and Key Derivation Quiz',
      bn: 'ক্রিপ্টোগ্রাফিক পাসওয়ার্ড সংরক্ষণ ও কি-ডেরিভেশন কুইজ'
    },
    questions: [
      {
        id: 'pf-q1',
        kind: 'mcq',
        topic: 'sha256-password-inadequacy',
        question: {
          en: 'Why is standard unsalted SHA-256 completely unacceptable for storing user passwords in modern web applications?',
          bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনে ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণে সল্টবিহীন SHA-256 কেন সম্পূর্ণ অগ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'SHA-256 is designed to be extremely fast for file checksums, allowing GPU clusters to compute billions of guesses per second, and lacks salts to resist rainbow table lookups',
            bn: 'SHA-256 ফাইলের জন্য অত্যন্ত দ্রুত কাজ করতে বানানো হয়েছিল, ফলে গ্রাফিক্স কার্ড দিয়ে সেকেন্ডে কোটি কোটি অনুমান পরীক্ষা করা যায় এবং সল্ট না থাকায় রেইনবো টেবিলে সহজেই ধরা পড়ে'
          },
          {
            en: 'SHA-256 was discontinued and replaced by JavaScript arrays',
            bn: 'SHA-256 বন্ধ হয়ে গেছে এবং এর বদলে জাভাস্ক্রিপ্ট অ্যারে ব্যবহার শুরু হয়েছে'
          },
          {
            en: 'SHA-256 produces output strings that contain invalid HTML characters',
            bn: 'SHA-256 এমন আউটপুট দেয় যা এইচটিএমএলে সাপোর্ট করে না'
          },
          {
            en: 'Because computers refuse to boot if SHA-256 appears in source code',
            bn: 'কারণ সোর্স কোডে SHA-256 থাকলে কম্পিউটার আর অন হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fast algorithms favor attackers with massive hardware. Passwords demand deliberately slow algorithms.',
          bn: 'দ্রুতগতির কোড আক্রমণকারীর সুবিধা বাড়ায়। পাসওয়ার্ডের ক্ষেত্রে ইচ্ছাকৃত ধীরগতির পদ্ধতি প্রয়োজন।'
        },
        explanation: {
          en: 'Password hashing functions must be deliberately slow and salted to price out offline brute-force attacks.',
          bn: 'পাসওয়ার্ড হ্যাশিং ইচ্ছাকৃতভাবে ধীরগতির ও সল্টযুক্ত হওয়া উচিত যাতে আক্রমণকারীর অফলাইন অনুমান অসম্ভব হয়ে পড়ে।'
        }
      },
      {
        id: 'pf-q2',
        kind: 'mcq',
        topic: 'bcrypt-work-factor-scaling',
        question: {
          en: 'In the bcrypt algorithm, what does increasing the cost factor from 12 to 13 do mathematically to computation time?',
          bn: 'বিক্রিপ্ট অ্যালগরিদমে কাজের মাত্রা (কস্ট ফ্যাক্টর) ১২ থেকে বাড়িয়ে ১৩ করলে গণনার সময়ের কী পরিবর্তন ঘটে?'
        },
        options: [
          {
            en: 'It doubles the total number of hashing rounds from 4096 (2^12) to 8192 (2^13), exactly doubling the computation time required per guess',
            bn: 'এটি মোট হ্যাশিং রাউন্ড ৪০৯৬ (2^12) থেকে বাড়িয়ে ৮১৯২ (2^13) করে, যার ফলে প্রতি অনুমানে প্রয়োজনীয় সময় ঠিক দ্বিগুণ হয়ে যায়'
          },
          {
            en: 'It increases the processing time by exactly 1 millisecond',
            bn: 'এটি গণনার সময় মাত্র ১ মিলিসেকেন্ড বাড়িয়ে দেয়'
          },
          {
            en: 'It cuts the computation time in half due to algorithm optimization',
            bn: 'অ্যালগরিদম অপ্টিমাইজেশনের মাধ্যমে এটি সময় অর্ধেক কমিয়ে দেয়'
          },
          {
            en: 'It has no effect on time because computers run at fixed clock speeds',
            bn: 'সময়ের ওপর এর কোনো প্রভাব নেই কারণ কম্পিউটার নির্দিষ্ট গতিতে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bcrypt cost is exponential: 2 to the power of the cost factor.',
          bn: 'বিক্রিপ্টের খরচ সূচকীয়: ২ এর ঘাত হিসেবে রাউন্ড সংখ্যা বৃদ্ধি পায়।'
        },
        explanation: {
          en: 'Each increment of the bcrypt cost factor doubles the hashing iterations (2^cost), maintaining defense as Moore Law advances.',
          bn: 'কস্ট ফ্যাক্টর ১ বাড়ালে মোট হ্যাশিং রাউন্ড (২^cost) দ্বিগুণ হয়, যা শক্তিশালী কম্পিউটারের বিরুদ্ধে দীর্ঘমেয়াদী সুরক্ষা বজায় রাখে।'
        }
      },
      {
        id: 'pf-q3',
        kind: 'mcq',
        topic: 'generic-login-failure-responses',
        question: {
          en: 'When a login attempt fails, why must the server return a generic "Invalid email or password" error rather than distinguishing between "User not found" and "Incorrect password"?',
          bn: 'লগইন ব্যর্থ হলে সার্ভারের কেন "ব্যবহারকারী খুঁজে পাওয়া যায়নি" বলার বদলে সাধারণ "ভুল ইমেইল বা পাসওয়ার্ড" বার্তা দেওয়া উচিত?'
        },
        options: [
          {
            en: 'Distinguishing between missing accounts and wrong passwords enables user enumeration attacks, allowing attackers to discover which email addresses exist on your platform',
            bn: 'কোন অ্যাকাউন্টটি ডেটাবেসে আছে আর কোনটি নেই তা আলাদা করে জানালে আক্রমণকারী সহজেই সাইটে নিবন্ধিত সমস্ত ইমেইল খুঁজে বের করতে পারে (ইউজার এনিউমারেশন)'
          },
          {
            en: 'Specific error messages consume double the internet bandwidth of generic messages',
            bn: 'সুনির্দিষ্ট ত্রুটির বার্তা পাঠালে সাধারণ বার্তার চেয়ে দ্বিগুণ ইন্টারনেট খরচ হয়'
          },
          {
            en: 'Because modern database servers crash if an email address is not found',
            bn: 'কারণ ইমেইল খুঁজে না পেলে ডেটাবেস সার্ভার সাথে সাথে ক্র্যাশ করে'
          },
          {
            en: 'International copyright laws forbid using the word "Password" in error popups',
            bn: 'কারণ আন্তর্জাতিক আইনে ত্রুটির বার্তায় পাসওয়ার্ড শব্দটি ব্যবহারে নিষেধাজ্ঞা আছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never confirm whether an account exists. Keep the attacker in the dark.',
          bn: 'কোনো অ্যাকাউন্ট আসলেই সাইটে আছে কিনা তা আক্রমণকারীকে বুঝতে দেওয়া যাবে না।'
        },
        explanation: {
          en: 'Generic authentication errors prevent username harvesting and targeted spear-phishing campaigns.',
          bn: 'সাধারণ ত্রুটি বার্তা ব্যবহারকারী তালিকাভুক্তিকরণ আক্রমণ ঠেকিয়ে প্ল্যাটফর্মের গোপনীয়তা রক্ষা করে।'
        }
      },
      {
        id: 'pf-q4',
        kind: 'mcq',
        topic: 'password-storage-breach-economics',
        question: {
          en: 'How does properly salted, slow password hashing fundamentally alter the economic equation for an attacker who steals a database dump?',
          bn: 'সঠিক সল্টযুক্ত ও ধীরগতির পাসওয়ার্ড হ্যাশিং ডেটাবেস চুরি করা আক্রমণকারীর লাভ-ক্ষতির সমীকরণকে কীভাবে বদলে দেয়?'
        },
        options: [
          {
            en: 'Instead of reversing millions of unsalted passwords in minutes with a rainbow table, cracking a single slow salted password requires hundreds of milliseconds of GPU work, making large-scale database cracking economically prohibitive',
            bn: 'রেইনবো টেবিল দিয়ে কয়েক মিনিটে লাখ লাখ পাসওয়ার্ড উদ্ধারের বদলে প্রতিটি পাসওয়ার্ডে শত শত মিলিসেকেন্ড হার্ডওয়্যার সময় ব্যয় করতে হয়, যার ফলে পুরো ডেটাবেস ভাঙা অসম্ভব ব্যয়বহুল হয়ে পড়ে'
          },
          {
            en: 'It causes the stolen database dump file to automatically erase itself from the attacker computer',
            bn: 'এটি আক্রমণকারীর কম্পিউটার থেকে চুরি হওয়া ফাইলটি নিজে থেকেই মুছে ফেলে'
          },
          {
            en: 'It automatically debits money from the attacker personal bank account',
            bn: 'এটি আক্রমণকারীর ব্যাংক অ্যাকাউন্ট থেকে স্বয়ংক্রিয়ভাবে টাকা কেটে নেয়'
          },
          {
            en: 'Because stolen data cannot be opened without buying a software subscription license',
            bn: 'কারণ সফটওয়্যার লাইসেন্স ছাড়া কোনো চুরি হওয়া ডেটা খোলা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Make each guess cost money and time. Multiplying that cost by 10 million users makes cracking bankrupting.',
          bn: 'প্রতিটি অনুমানে সময় ও বিদ্যুৎ খরচ বাড়ান; ১০ লাখ ব্যবহারকারীর পেছনে তা অবিশ্বাস্য খরচে পরিণত হবে।'
        },
        explanation: {
          en: 'Cryptographic work factors transform credential cracking from an instantaneous lookup into an astronomically expensive computing task.',
          bn: 'কাজের মাত্রা বৃদ্ধি পাসওয়ার্ড আক্রমণকে তাৎক্ষণিক অনুসন্ধান থেকে অসম্ভব ব্যয়বহুল ও সময়সাপেক্ষ কাজে রূপান্তর করে।'
        }
      }
    ]
  }
};
