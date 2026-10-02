import type { Hub } from '../../lib/types';
import { MeetHashingLesson } from './lessons/meet-hashing';
import { HashFunctionsLesson } from './lessons/hash-functions';
import { SaltingPepperLesson } from './lessons/salting-pepper';
import { PasswordStorageLesson } from './lessons/password-storage';
import { ChecksumsIntegrityLesson } from './lessons/checksums-integrity';
import { DigitalSignaturesLesson } from './lessons/digital-signatures';
import { RainbowDefenseLesson } from './lessons/rainbow-defense';
import { HashingCapstoneLesson } from './lessons/hashing-capstone';

export const hashingHub: Hub = {
  slug: 'hashing',
  name: 'Hashing & Cryptographic Digests',
  icon: '#️⃣',
  tagline: {
    en: 'Master cryptographic hash functions, password hashing (Argon2id, bcrypt, scrypt), HMAC authentication, and collision resistance from first principles.',
    bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন, পাসওয়ার্ড হ্যাশিং (Argon2id, bcrypt, scrypt), HMAC অথেনটিকেশন এবং সংঘর্ষ প্রতিরোধ মৌলিক ভিত্তি থেকে আয়ত্ত করুন।'
  },
  intro: {
    en: 'Cryptographic hashing is the universal backbone of digital integrity, content addressing, proof-of-work consensus, and credential security. While encryption allows two-way decryption with a key, a cryptographic hash is a one-way mathematical compression function mapping arbitrary input bytes into a fixed-length digest. This hub guides you through the mathematics of pre-image and collision resistance, the avalanche effect, why MD5 and SHA-1 collapsed, modern standards like SHA-256 and SHA-3, why fast hashes are fatal for passwords, memory-hard key derivation (Argon2id, scrypt, bcrypt), salt and pepper architectures, and HMAC message authentication.',
    bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিং হলো ডিজিটাল ইন্টিগ্রিটি, কনটেন্ট অ্যাড্রেসিং, প্রুফ-অব-ওয়ার্ক কনসেনসাস এবং ক্রেডেনশিয়াল সুরক্ষার সার্বজনীন ভিত্তি। এনক্রিপশন যেখানে চাবি দিয়ে পুনরায় ডিক্রিপ্ট করা যায়, হ্যাশিং সেখানে একটি একমুখী গাণিতিক সংকোচন ফাংশন যা যেকোনো আকারের ইনপুটকে একটি নির্দিষ্ট দৈর্ঘ্যের ডাইজেস্টে রূপান্তর করে। এই হাব আপনাকে প্রি-ইমেজ এবং কলিশন রেজিস্ট্যান্সের গণিত, অ্যাভাল্যাঞ্চ ইফেক্ট, কেন MD5 ও SHA-১ অকার্যকর হয়েছে, আধুনিক SHA-২৫৬ ও SHA-৩ স্ট্যান্ডার্ড, পাসওয়ার্ড সংরক্ষণে কেন দ্রুতগতির হ্যাশ মারাত্মক বিপজ্জনক, মেমোরি-হার্ড অ্যালগরিদম (Argon2id, scrypt, bcrypt), লবণ ও মরিচ (Salt & Pepper) আর্কিটেকচার এবং HMAC মেসেজ অথেনটিকেশন বিস্তারিতভাবে শেখাবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Foundations of One-Way Cryptographic Functions',
        bn: 'ধাপ ১ — একমুখী ক্রিপ্টোগ্রাফিক ফাংশনের মৌলিক ভিত্তি'
      },
      items: [
        {
          en: 'One-Way Compression: Determinism, fixed-length digests, and the pigeonhole principle',
          bn: 'একমুখী সংকোচন: ডিটারমিনিজম, নির্দিষ্ট দৈর্ঘ্যের ডাইজেস্ট এবং পিজনহোল নীতি'
        },
        {
          en: 'Core Security Properties: Pre-image resistance, second pre-image resistance, and collision resistance',
          bn: 'প্রধান নিরাপত্তা বৈশিষ্ট্য: প্রি-ইমেজ প্রতিরোধ, দ্বিতীয় প্রি-ইমেজ প্রতিরোধ এবং কলিশন প্রতিরোধ'
        },
        {
          en: 'The Avalanche Effect: Chaotic bit diffusion where flipping 1 bit changes roughly 50% of output bits',
          bn: 'অ্যাভাল্যাঞ্চ ইফেক্ট: বিশৃঙ্খল বিট ডিফিউশন যেখানে ১টি বিট পরিবর্তন করলে প্রায় ৫০% আউটপুট বিট বদলে যায়'
        }
      ],
      detail: {
        en: 'Build an intuitive mathematical foundation understanding how hash functions compress infinite inputs into finite digests without invertibility.',
        bn: 'ইনভার্ট করার সুযোগ ছাড়া কীভাবে হ্যাশ ফাংশন অসীম ইনপুটকে নির্দিষ্ট ডাইজেস্টে সংকুচিত করে তার সহজ গাণিতিক ভিত্তি তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Stage 2 — Hash Algorithms, Merkle-Damgård & Attack Vectors',
        bn: 'ধাপ ২ — হ্যাশ অ্যালগরিদম, মের্কল-ডামগার্ড ও আক্রমণ কৌশল'
      },
      items: [
        {
          en: 'Broken Legacy Ciphers: Why MD5 and SHA-1 suffered practical collision attacks (Google SHAttered)',
          bn: 'বাতিল পুরানো সাইফার: MD5 ও SHA-১ কেন ব্যবহারিক কলিশন আক্রমণের মুখে ভেঙে পড়েছে (Google SHAttered)'
        },
        {
          en: 'Modern Industry Standards: SHA-256, SHA-512 (SHA-2), and sponge-based Keccak (SHA-3)',
          bn: 'আধুনিক ইন্ডাস্ট্রি স্ট্যান্ডার্ড: SHA-২৫৬, SHA-৫১২ (SHA-২) এবং স্পঞ্জ-ভিত্তিক কেকাক (SHA-৩)'
        },
        {
          en: 'Length-Extension Vulnerability: Why naive hash(secret + message) fails and mandates HMAC (RFC 2104)',
          bn: 'লেন্থ-এক্সটেনশন দুর্বলতা: কেন সাধারণ hash(secret + message) ব্যর্থ হয় এবং HMAC (RFC ২১০৪) বাধ্যতামূলক করে'
        }
      ],
      detail: {
        en: 'Explore internal compression structures, the Birthday Paradox, and why Merkle-Damgård constructions require HMAC for authentication.',
        bn: 'অভ্যন্তরীণ কম্প্রেশন কাঠামো, বার্থডে প্যারাডক্স এবং কেন অথেনটিকেশনের জন্য মের্কল-ডামগার্ড কাঠামোতে HMAC প্রয়োজন তা শিখুন।'
      }
    },
    {
      title: {
        en: 'Stage 3 — Password Hashing, Rainbow Tables & Memory-Hard KDFs',
        bn: 'ধাপ ৩ — পাসওয়ার্ড হ্যাশিং, রেইনবো টেবিল ও মেমোরি-হার্ড KDF'
      },
      items: [
        {
          en: 'The Password Fallacy: Why fast hashes (SHA-256) are easily cracked by GPU clusters calculating billions of hashes/sec',
          bn: 'পাসওয়ার্ডের ভুল ধারণা: প্রতি সেকেন্ডে কোটি কোটি হ্যাশ হিসাবকারী জিপিইউ ক্লাস্টারে দ্রুতগতির SHA-২৫৬ কেন সহজে ভেঙে যায়'
        },
        {
          en: 'Salting & Pepper Architecture: Per-user 128-bit CSPRNG salts defeating precomputed rainbow tables',
          bn: 'সল্ট ও পেপার আর্কিটেকচার: প্রি-কম্পিউটেড রেইনবো টেবিল রুখতে প্রতি ব্যবহারকারীর জন্য ১২৮-বিট CSPRNG সল্ট'
        },
        {
          en: 'Modern Memory-Hard Algorithms: Argon2id, bcrypt, and scrypt with tunable work factors',
          bn: 'আধুনিক মেমোরি-হার্ড অ্যালগরিদম: পরিবর্তনযোগ্য ওয়ার্ক ফ্যাক্টর সহ Argon2id, bcrypt ও scrypt'
        }
      ],
      detail: {
        en: 'Learn how to store user credentials securely against offline brute-force, dictionary, and ASIC attacks.',
        bn: 'অফলাইন ব্রুট-ফোর্স, ডিকশনারি এবং ASIC আক্রমণের বিরুদ্ধে কীভাবে নিরাপদে ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণ করতে হয় তা শিখুন।'
      }
    },
    {
      title: {
        en: 'Stage 4 — Data Integrity, Merkle Trees & Cryptographic Signatures',
        bn: 'ধাপ ৪ — ডাটা ইন্টিগ্রিটি, মের্কল ট্রি ও ক্রিপ্টোগ্রাফিক সিগনেচার'
      },
      items: [
        {
          en: 'Checksum Verification: Validating downloaded software and container images against official digests',
          bn: 'চেকসাম যাচাইকরণ: অফিশিয়াল ডাইজেস্টের বিপরীতে ডাউনলোড করা সফটওয়্যার ও কনটেইনার ইমেজ যাচাই'
        },
        {
          en: 'Content-Addressable Storage: How Git tracks commits and files using SHA trees and directed acyclic graphs',
          bn: 'কনটেন্ট-অ্যাড্রেসেবল স্টোরেজ: গিট কীভাবে SHA ট্রি এবং ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ দিয়ে ফাইল ট্র্যাক করে'
        },
        {
          en: 'Digital Signatures & Capstone Audit: Signing hash digests with asymmetric private keys (Ed25519)',
          bn: 'ডিজিটাল সিগনেচার ও ক্যাপস্টোন অডিট: অপ্রতিসম প্রাইভেট কি (Ed25519) দিয়ে হ্যাশ ডাইজেস্টে ডিজিটাল স্বাক্ষর'
        }
      ],
      detail: {
        en: 'Synthesize hash verification, HMAC integrity, and digital provenance into a production Zero-Trust architecture.',
        bn: 'হ্যাশ ভ্যালিডেশন, HMAC ইন্টিগ্রিটি এবং ডিজিটাল পরিচয়কে একটি সমন্বিত প্রোডাকশন জিরো-ট্রাস্ট আর্কিটেকচারে একীভূত করুন।'
      }
    }
  ],
  lessons: [
    MeetHashingLesson,
    HashFunctionsLesson,
    SaltingPepperLesson,
    PasswordStorageLesson,
    ChecksumsIntegrityLesson,
    DigitalSignaturesLesson,
    RainbowDefenseLesson,
    HashingCapstoneLesson
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — CLI File Integrity Verifier & Checksum Auditor',
        bn: 'প্রজেক্ট ১ — সিএলআই ফাইল ইন্টিগ্রিটি ভেরিফায়ার ও চেকসাম অডিটর'
      },
      brief: {
        en: 'Build a Node.js CLI tool that streams multi-gigabyte disk files, computes SHA-256 and SHA-512 digests, compares them against official release checksum manifests in constant time, and flags corrupt or tampered bytes.',
        bn: 'একটি Node.js সিএলআই টুল তৈরি করুন যা বড় সাইজের ফাইল স্ট্রিম করে SHA-২৫৬ ও SHA-৫১২ ডাইজেস্ট গণনা করে, অফিশিয়াল চেকসাম তালিকার সাথে কনস্ট্যান্ট-টাইমে তুলনা করে এবং কোনো কারচুপি বা বিট পরিবর্তনের ঘটনা তৎক্ষণাৎ শনাক্ত করে।'
      }
    },
    {
      title: {
        en: 'Project 2 — Enterprise Password Hashing & Authentication Vault',
        bn: 'প্রজেক্ট ২ — এন্টারপ্রাইজ পাসওয়ার্ড হ্যাশিং ও অথেনটিকেশন ভল্ট'
      },
      brief: {
        en: 'Implement a production credential storage microservice using Argon2id with 128-bit unique CSPRNG salts, an HSM-managed application pepper, memory-hardness tuning, and automatic re-hashing when system security parameters increase.',
        bn: 'Argon2id ব্যবহার করে একটি প্রোডাকশন ক্রেডেনশিয়াল স্টোরেজ মাইক্রোসার্ভিস তৈরি করুন যাতে প্রতি ব্যবহারকারীর জন্য ১২৮-বিট CSPRNG সল্ট, HSM-নিয়ন্ত্রিত অ্যাপ্লিকেশন পেপার এবং স্বয়ংক্রিয় রি-হ্যাশিং সুবিধা অন্তর্ভুক্ত থাকবে।'
      }
    },
    {
      title: {
        en: 'Project 3 — Tamper-Proof Cryptographic Audit Ledger with Merkle Trees',
        bn: 'প্রজেক্ট ৩ — মের্কল ট্রি সহ কারচুপি-রোধী ক্রিপ্টোগ্রাফিক অডিট লেজার'
      },
      brief: {
        en: 'Construct an append-only audit ledger where every database mutation is hashed into a Merkle tree root, signed with an Ed25519 private key, and validated using cryptographic consistency proofs to detect retroactive tampering.',
        bn: 'একটি অপরিবর্তনীয় অডিট লেজার তৈরি করুন যেখানে ডাটাবেসের প্রতিটি পরিবর্তন একটি মের্কল ট্রি রুটে হ্যাশ করা হয়, Ed25519 প্রাইভেট কি দিয়ে স্বাক্ষরিত হয় এবং অতীতের যেকোনো কারচুপি প্রতিরোধে ক্রিপ্টোগ্রাফিক প্রমাণ ব্যবহার করা হয়।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Never use fast cryptographic hashes (SHA-256, SHA-3, MD5) for passwords; enforce slow, memory-hard algorithms (Argon2id, scrypt, or bcrypt).',
      bn: 'পাসওয়ার্ডের জন্য কখনোই সাধারণ দ্রুতগতির হ্যাশ (SHA-২৫৬, SHA-৩, MD5) ব্যবহার করবেন না; সর্বদা ধীরগতির মেমোরি-হার্ড অ্যালগরিদম (Argon2id, scrypt বা bcrypt) প্রয়োগ করুন।'
    },
    {
      en: 'Enforce unique, cryptographically random 128-bit salts (CSPRNG) for every credential to completely neutralize precomputed rainbow table attacks.',
      bn: 'প্রি-কম্পিউটেড রেইনবো টেবিল আক্রমণ সম্পূর্ণ অকার্যকর করতে প্রতি ক্রেডেনশিয়ালের জন্য স্বতন্ত্র ১২৮-বিট ক্রিপ্টোগ্রাফিক র্যান্ডম সল্ট (CSPRNG) নিশ্চিত করুন।'
    },
    {
      en: 'Prevent Length-Extension attacks by using HMAC (RFC 2104) or SHA-3/KMAC instead of naive secret prefixing (hash(secret + message)).',
      bn: 'সাধারণ secret prefixing (hash(secret + message))-এর বদলে HMAC (RFC ২১০৪) বা SHA-৩ ব্যবহার করে লেন্থ-এক্সটেনশন আক্রমণ সম্পূর্ণরূপে প্রতিহত করুন।'
    },
    {
      en: 'Always verify message authentication tags and password hashes using constant-time comparisons (crypto.timingSafeEqual) to eliminate side-channel timing leaks.',
      bn: 'সাইড-চ্যানেল টাইমিং ফাঁসের ঝুঁকি দূর করতে সর্বদা কনস্ট্যান্ট-টাইম ফাংশন (crypto.timingSafeEqual) দিয়ে অথেনটিকেশন ট্যাগ এবং পাসওয়ার্ড হ্যাশ যাচাই করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'Why does the Birthday Paradox reduce the computational difficulty of finding a hash collision from 2^N to 2^(N/2)?',
        bn: 'বার্থডে প্যারাডক্স কেন হ্যাশ সংঘর্ষ (Collision) খোঁজার গাণিতিক জটিলতা ২^N থেকে কমিয়ে ২^(N/২)-তে নামিয়ে আনে?'
      },
      a: {
        en: 'Finding a specific pre-image matching a target digest requires testing 2^N random inputs. In contrast, finding any two arbitrary messages that produce the same digest evaluates all pairwise combinations among K inputs (roughly K^2 / 2 pairs). By the Birthday Paradox, once K reaches approximately 2^(N/2), the probability of finding a matching pair exceeds 50%. This is why a 128-bit hash like MD5 provides only 64 bits of collision security and is completely broken.',
        bn: 'একটি নির্দিষ্ট ডাইজেস্টের সমতুল্য ইনপুট খুঁজতে ২^N সংখ্যক পরীক্ষা চালাতে হয়। কিন্তু যেকোনো দুটি ভিন্ন বার্তার একই ডাইজেস্ট খোঁজার ক্ষেত্রে K সংখ্যক ইনপুটের মধ্যকার সমস্ত জোড়া (প্রায় K^২ / ২ জোড়া) যাচাই করা যায়। বার্থডে প্যারাডক্সের কারণে K-এর মান যখন ২^(N/২)-তে পৌঁছায়, তখনই ৫০% সম্ভাবনা তৈরি হয় যে কোনো একটি জোড়ার হ্যাশ মিলে যাবে। এই কারণেই MD5-এর মতো ১২৮-বিট হ্যাশ মাত্র ৬৪-বিট কলিশন নিরাপত্তা দেয় এবং বর্তমানে পুরোপুরি ভেঙে ফেলা সম্ভব হয়েছে।'
      }
    },
    {
      q: {
        en: 'What is a Length-Extension Attack on Merkle-Damgård hash functions, and how does HMAC prevent it?',
        bn: 'মের্কল-ডামগার্ড হ্যাশ ফাংশনে লেন্থ-এক্সটেনশন আক্রমণ কী এবং HMAC কীভাবে এটি প্রতিহত করে?'
      },
      a: {
        en: 'In Merkle-Damgård constructions (like SHA-256), the final hash digest is simply the internal state of the last compression block. If an application computes tag = hash(secret + message), an attacker who sees message and tag can initialize the hash engine with tag as its internal state and continue hashing additional data, generating a valid tag for (secret + message + padding + evil_extension) without ever knowing the secret. HMAC completely neutralizes this by using a nested two-pass construction: hash((K ^ opad) + hash((K ^ ipad) + message)).',
        bn: 'মের্কল-ডামগার্ড কাঠামোতে (যেমন SHA-২৫৬) চূড়ান্ত হ্যাশ ডাইজেস্টটি মূলত শেষ কম্প্রেশন ব্লকের অভ্যন্তরীণ অবস্থা। কোনো অ্যাপ্লিকেশন যদি tag = hash(secret + message) ব্যবহার করে, তবে আক্রমণকারী মেসেজ এবং ট্যাগ দেখে হ্যাশ ইঞ্জিনের প্রাথমিক অবস্থায় ট্যাগটি বসিয়ে অতিরিক্ত ডাটা যোগ করতে পারে। ফলে গোপন চাবি না জেনেই সে বৈধ ট্যাগ তৈরি করে ফেলে। HMAC দ্বি-স্তরীয় অভ্যন্তরীণ ও বহিরাগত প্যাডিং (opad ও ipad) ব্যবহারের মাধ্যমে এই আক্রমণকে সম্পূর্ণ অসম্ভব করে তোলে।'
      }
    },
    {
      q: {
        en: 'Why are fast cryptographic hashes like SHA-256 disastrous for password storage, whereas Argon2id is secure against GPU clusters?',
        bn: 'পাসওয়ার্ড সংরক্ষণে SHA-২৫৬ এর মতো দ্রুতগতির হ্যাশ কেন বিপজ্জনক, অথচ Argon2id কেন জিপিইউ ক্লাস্টারের বিরুদ্ধেও নিরাপদ?'
      },
      a: {
        en: 'SHA-256 is engineered for maximum throughput to verify gigabyte file transfers, allowing modern commercial GPU clusters to compute billions of guesses per second for mere pennies. In contrast, Argon2id is a memory-hard password derivation function that requires both high CPU iteration time and large contiguous blocks of RAM (e.g. 64 MB per hash). GPUs have tiny per-thread cache memory and cannot run thousands of parallel memory-hard calculations concurrently, neutralizing specialized ASIC and GPU brute-force attacks.',
        bn: 'SHA-২৫৬ মূলত বড় ফাইল দ্রুত যাচাইয়ের উদ্দেশ্যে সর্বোচ্চ গতিতে চলার জন্য তৈরি, যার ফলে সাধারণ জিপিইউ ক্লাস্টার দিয়ে প্রতি সেকেন্ডে শত কোটি অনুমান পরীক্ষা করা যায়। অন্যদিকে Argon2id একটি মেমোরি-হার্ড পাসওয়ার্ড ডেরিভেশন ফাংশন যা প্রসেসরের পাশাপাশি প্রচুর পরিমাণ র‍্যাম মেমোরি (যেমন হ্যাশ প্রতি ৬৪ মেগাবাইট) দাবি করে। জিপিইউর মেমরি আর্কিটেকচার মেমোরি-হার্ড হিসাব সমান্তরালে চালাতে পারে না, ফলে আক্রমণকারীর ব্রুট-ফোর্স প্রচেষ্টা ব্যর্থ হয়।'
      }
    },
    {
      q: {
        en: 'What is the precise distinction between Pre-image Resistance, Second Pre-image Resistance, and Collision Resistance?',
        bn: 'প্রি-ইমেজ প্রতিরোধ, দ্বিতীয় প্রি-ইমেজ প্রতিরোধ এবং কলিশন প্রতিরোধের মধ্যে সুনির্দিষ্ট পার্থক্য কী?'
      },
      a: {
        en: 'Pre-image resistance (one-way property) means given a random hash digest y, it is computationally infeasible to find any x such that h(x) = y (cost 2^N). Second pre-image resistance means given a known message x1, it is infeasible to find a distinct message x2 such that h(x1) = h(x2) (cost 2^N). Collision resistance means it is infeasible to find any arbitrary pair x1 != x2 such that h(x1) = h(x2) (cost 2^(N/2)). Collision resistance is the strictest property: a break in collision resistance does not necessarily break pre-image resistance.',
        bn: 'প্রি-ইমেজ প্রতিরোধ (একমুখী বৈশিষ্ট্য) মানে হলো একটি নির্দিষ্ট হ্যাশ y দেওয়া থাকলে h(x) = y হয় এমন কোনো x খুঁজে বের করা গাণিতিকভাবে অসম্ভব (কঠিনতা ২^N)। দ্বিতীয় প্রি-ইমেজ প্রতিরোধ মানে হলো একটি নির্দিষ্ট বার্তা x১ জানা থাকলে h(x১) = h(x২) হয় এমন ভিন্ন বার্তা x২ খুঁজে পাওয়া অসম্ভব (কঠিনতা ২^N)। আর কলিশন প্রতিরোধ মানে হলো যেকোনো দুটি স্বাধীন বার্তা x১ ও x২ খুঁজে পাওয়া অসম্ভব যাদের হ্যাশ একই হবে (কঠিনতা ২^(N/২))। কলিশন প্রতিরোধ সবচেয়ে কঠোর শর্ত।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Google SHAttered (2017): Cryptanalysts generated two distinct PDF documents with identical SHA-1 hashes, conclusively demonstrating that SHA-1 must never be used for digital signatures or TLS certificates.',
      bn: 'গুগল SHAttered (২০১৭): গবেষকরা হুবহু একই SHA-১ হ্যাশ বিশিষ্ট দুটি সম্পূর্ণ ভিন্ন পিডিএফ ফাইল তৈরি করে দেখিয়েছিলেন যে ডিজিটাল সিগনেচার বা সার্টিফিকেটে SHA-১ ব্যবহার করা পুরোপুরি অনিরাপদ।'
    },
    {
      en: 'The Flame Cyberwarfare Malware (2012): State-sponsored attackers forged a Microsoft Terminal Server code-signing certificate by engineering an MD5 hash collision, allowing malware to masquerade as an official Windows Update.',
      bn: 'ফ্লেম ম্যালওয়্যার (২০১২): সাইবার আক্রমণকারীরা MD5 হ্যাশ কলিশন ঘটিয়ে মাইক্রোসফটের ভুয়া কোড-সাইনিং সার্টিফিকেট তৈরি করেছিল, যার ফলে ম্যালওয়্যারটি আসল উইন্ডোজ আপডেট হিসেবে সিস্টেমে প্রবেশ করতে পেরেছিল।'
    },
    {
      en: 'The 2012 LinkedIn Data Breach: 6.5 million unsalted SHA-1 password hashes were leaked online; because no salts were used, adversaries cracked over 90% of the credentials within days using precomputed rainbow tables.',
      bn: '২০১২ সালের লিঙ্কডইন ডাটা ব্রিচ: ৬৫ লক্ষ সল্টবিহীন SHA-১ পাসওয়ার্ড হ্যাশ ইন্টারনেটে ফাঁস হয়; কোনো সল্ট না থাকায় হ্যাকাররা রেইনবো টেবিল ব্যবহার করে মাত্র কয়েক দিনের মধ্যে ৯০% পাসওয়ার্ড ক্র্যাক করে ফেলে।'
    },
    {
      en: 'Git Version Control Integrity: Git tracks all file contents, trees, and commit histories via cryptographic directed acyclic graphs (DAGs), migrating from legacy SHA-1 to SHA-256 to ensure absolute commit provenance.',
      bn: 'গিট ভার্সন কন্ট্রোল ইন্টিগ্রিটি: গিট সমস্ত ফাইলের বিষয়বস্তু এবং কমিট হিস্ট্রি ক্রিপ্টোগ্রাফিক ডিরেক্টেড অ্যাসাইক্লিক গ্রাফের (DAG) মাধ্যমে পরিচালনা করে এবং নিখুঁত বিশ্বাসযোগ্যতা নিশ্চিতে SHA-১ থেকে SHA-২৫৬-তে স্থানান্তরিত হচ্ছে।'
    }
  ]
};
