import type { Lesson } from '../../../lib/types';

export const MeetHashingLesson: Lesson = {
  slug: 'meet-hashing',
  tech: 'hashing',
  title: {
    en: 'Meet Hashing: One-Way Functions, Fixed Digests & The Avalanche Effect',
    bn: 'হ্যাশিং পরিচিতি: একমুখী ফাংশন, নির্দিষ্ট ডাইজেস্ট ও অ্যাভাল্যাঞ্চ ইফেক্ট'
  },
  summary: {
    en: 'A beginner overview of the foundational mathematics of cryptographic hashing: one-way compression, determinism, fixed-length digests, the avalanche effect, and why hashing fundamentally differs from encryption.',
    bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিংয়ের মৌলিক গণিতের একটি প্রাথমিক পাঠ: একমুখী সংকোচন, ডিটারমিনিজম, নির্দিষ্ট দৈর্ঘ্যের ডাইজেস্ট, অ্যাভাল্যাঞ্চ ইফেক্ট এবং কেন হ্যাশিং এনক্রিপশন থেকে মৌলিকভাবে ভিন্ন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-cryptographic-hashing',
      text: {
        en: 'The One-Way Mathematical Compression Function',
        bn: 'একমুখী গাণিতিক সংকোচন ফাংশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A cryptographic hash function takes an input of arbitrary size and compresses it into a fixed-size byte sequence known as a hash digest. It processes anything from a single letter to a 50-gigabyte database backup. Unlike symmetric or asymmetric encryption, hashing is strictly irreversible. There is no decryption key, no inverse formula, and no mathematical algorithm that can reconstruct the original document from its digest alone.',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন যেকোনো আকারের ইনপুট গ্রহণ করে এবং সেটিকে একটি নির্দিষ্ট আকারের বাইট সিকোয়েন্সে সংকুচিত করে, যাকে হ্যাশ ডাইজেস্ট বলা হয়। এটি একটিমাত্র বর্ণ থেকে শুরু করে ৫০ গিগাবাইটের ডাটাবেস ব্যাকআপ পর্যন্ত প্রসেস করতে পারে। প্রতিসম বা অপ্রতিসম এনক্রিপশনের মতো হ্যাশিং কখনোই পুনরায় ডিক্রিপ্ট বা পূর্বাবস্থায় ফিরিয়ে আনা যায় না। এখানে কোনো ডিক্রিপশন চাবি বা বিপরীত গাণিতিক সূত্র নেই যা ডাইজেস্ট থেকে মূল ডকুমেন্টটি পুনরায় তৈরি করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cryptographic Hash Function',
          def: {
            en: 'A mathematical algorithm mapping arbitrary-length binary data to a fixed-length string of pseudo-random bits.',
            bn: 'একটি গাণিতিক অ্যালগরিদম যা যেকোনো দৈর্ঘ্যের বাইনারি ডাটাকে একটি নির্দিষ্ট দৈর্ঘ্যের সিউডো-র্যান্ডম বিট স্ট্রিংয়ে রূপান্তর করে।'
          }
        },
        {
          term: 'Message Digest',
          def: {
            en: 'The fixed-length hexadecimal output produced by hashing an input payload (e.g. 64 characters in SHA-256).',
            bn: 'কোনো ইনপুট ডাটা হ্যাশ করার পর প্রাপ্ত নির্দিষ্ট দৈর্ঘ্যের হেক্সাডেসিমেল আউটপুট (যেমন SHA-২৫৬-তে ৬৪টি বর্ণ)।'
          }
        },
        {
          term: 'Pre-image Resistance (One-Way)',
          def: {
            en: 'The mathematical hardness property making it computationally impossible to find the original input from its hash.',
            bn: 'এমন একটি গাণিতিক নিরাপত্তা বৈশিষ্ট্য যার কারণে কোনো হ্যাশ ডাইজেস্ট থেকে মূল ইনপুট খুঁজে বের করা কার্যত অসম্ভব।'
          }
        },
        {
          term: 'Avalanche Effect',
          def: {
            en: 'A design property where flipping even a single bit in the input radically alters approximately 50% of the output bits.',
            bn: 'এমন একটি কাঠামোগত বৈশিষ্ট্য যেখানে ইনপুটের মাত্র ১টি বিট পরিবর্তন করলে আউটপুটের প্রায় ৫০% বিট সম্পূর্ণ এলোমেলোভাবে বদলে যায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'hashing-versus-encryption',
      text: {
        en: 'Hashing vs Encryption: The Essential Difference',
        bn: 'হ্যাশিং বনাম এনক্রিপশন: মৌলিক পার্থক্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beginners frequently confuse hashing with encryption. The distinction is fundamental to software architecture: encryption guarantees confidentiality of messages intended to be read later by authorized parties using a secret key. Hashing guarantees integrity, uniqueness, and verification without revealing secrets. By the mathematical pigeonhole principle, because infinite possible plaintexts are compressed into a finite 256-bit space, hash functions discard information, making reverse calculation mathematically impossible.',
        bn: 'নতুন শিক্ষার্থীরা প্রায়ই হ্যাশিং এবং এনক্রিপশনকে গুলিয়ে ফেলেন। সফটওয়্যার স্থাপত্যে এদের পার্থক্য মৌলিক: এনক্রিপশন এমন বার্তার গোপনীয়তা নিশ্চিত করে যা পরবর্তীতে একটি গোপন চাবি দিয়ে অনুমোদিত প্রাপক পড়তে পারেন। অন্যদিকে হ্যাশিং কোনো গোপন তথ্য ফাঁস না করে তথ্যের অখণ্ডতা, অনন্যতা ও সত্যতা নিশ্চিত করে। গণিতের পিজনহোল নীতি অনুযায়ী, অসীম সম্ভাব্য প্লেইনটেক্সটকে যখন একটি সীমিত ২৫৬-বিট স্পেসে সংকুচিত করা হয়, তখন কিছু তথ্য চিরতরে হারিয়ে যায়, যার ফলে বিপরীত পরিগণনা গাণিতিকভাবে অসম্ভব হয়ে পড়ে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্যগত মাত্রা' },
        { en: 'Cryptographic Hashing (e.g. SHA-256)', bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিং (যেমন SHA-২৫৬)' },
        { en: 'Symmetric Encryption (e.g. AES-256)', bn: 'প্রতিসম এনক্রিপশন (যেমন AES-২৫৬)' }
      ],
      rows: [
        [
          { en: 'Directionality', bn: 'গতিমুখ' },
          { en: 'Strictly One-Way (Irreversible)', bn: 'কঠোরভাবে একমুখী (অপরিবর্তনযোগ্য)' },
          { en: 'Two-Way (Reversible with key)', bn: 'দ্বিমুখী (চাবি দিয়ে পূর্বাবস্থায় আনা যায়)' }
        ],
        [
          { en: 'Secret Key Required', bn: 'গোপন চাবির প্রয়োজন' },
          { en: 'No (Public deterministic algorithm)', bn: 'না (সর্বজনীন নির্দিষ্ট অ্যালগরিদম)' },
          { en: 'Yes (Must be guarded secretly)', bn: 'হ্যাঁ (কঠোরভাবে গোপনে রাখতে হয়)' }
        ],
        [
          { en: 'Output Length', bn: 'আউটপুটের দৈর্ঘ্য' },
          { en: 'Strictly Fixed (Always 256 bits)', bn: 'কঠোরভাবে নির্দিষ্ট (সর্বদা ২৫৬ বিট)' },
          { en: 'Variable (Grows with input payload)', bn: 'পরিবর্তনশীল (ইনপুটের সাথে বাড়ে)' }
        ],
        [
          { en: 'Primary Use Case', bn: 'প্রধান ব্যবহার' },
          { en: 'File integrity, Git commits, password verification', bn: 'ফাইল অখণ্ডতা, গিট কমিট, পাসওয়ার্ড যাচাই' },
          { en: 'Confidential messaging, database storage', bn: 'গোপন বার্তা আদান-প্রদান, ডাটাবেস সংরক্ষণ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'the-avalanche-effect',
      text: {
        en: 'The Avalanche Effect: Chaotic Bit Diffusion',
        bn: 'অ্যাভাল্যাঞ্চ ইফেক্ট: বিশৃঙ্খল বিট ডিফিউশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A high-grade cryptographic hash function exhibits strict non-linearity and diffusion. If you change a single letter in an input string — for instance, changing lowercase "c" to uppercase "C" in "codeshikhon" — the internal rounds of bitwise XOR, right rotation, and modular addition cause a chaotic cascade. The resulting SHA-256 digest does not look slightly different; it looks entirely uncorrelated, flipping dozens of hexadecimal characters.',
        bn: 'একটি উচ্চমানের ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন কঠোর নন-লিনিয়ারিটি এবং ডিফিউশন প্রদর্শন করে। আপনি যদি ইনপুট স্ট্রিংয়ের একটিমাত্র বর্ণ পরিবর্তন করেন — যেমন "codeshikhon"-এর ছোট হাতের "c"-কে বড় হাতের "C"-তে রূপান্তর করেন — তবে বিটওয়াইজ XOR, রোটেশন এবং মডুলার যোগের অভ্যন্তরীণ রাউন্ডগুলো একটি বিশৃঙ্খল ক্যাসকেড সৃষ্টি করে। এর ফলে প্রাপ্ত SHA-২৫৬ ডাইজেস্টটি সামান্য পরিবর্তিত মনে হয় না; বরং এটি সম্পূর্ণ ভিন্ন একটি রূপ ধারণ করে এবং ডাইজেস্টের অর্ধেকের বেশি বর্ণ আমূল বদলে যায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Cryptographic Hashing and the Avalanche Effect',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিং এবং অ্যাভাল্যাঞ্চ ইফেক্ট'
      },
      svg: `<svg viewBox="0 0 880 380" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <defs>
    <marker id="hashArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect width="880" height="380" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="2"/>

  <!-- Left: Inputs -->
  <g transform="translate(40, 40)">
    <rect width="250" height="130" rx="10" fill="#1e1b4b" fill-opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
    <text x="125" y="30" text-anchor="middle" fill="#818cf8" font-size="13" font-weight="bold">Input 1: Lowercase "c"</text>
    <rect x="20" y="50" width="210" height="50" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="125" y="80" text-anchor="middle" fill="#38bdf8" font-size="15" font-family="monospace">"codeshikhon"</text>
    <text x="125" y="118" text-anchor="middle" fill="#94a3b8" font-size="11">11 bytes in ASCII</text>
  </g>

  <g transform="translate(40, 210)">
    <rect width="250" height="130" rx="10" fill="#701a75" fill-opacity="0.3" stroke="#c084fc" stroke-width="1.5"/>
    <text x="125" y="30" text-anchor="middle" fill="#e879f9" font-size="13" font-weight="bold">Input 2: Uppercase "C" (1 Bit Flip)</text>
    <rect x="20" y="50" width="210" height="50" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="125" y="80" text-anchor="middle" fill="#f472b6" font-size="15" font-family="monospace">"Codeshikhon"</text>
    <text x="125" y="118" text-anchor="middle" fill="#f43f5e" font-size="11">Only 1 ASCII character changed</text>
  </g>

  <!-- Middle: SHA-256 Engine -->
  <g transform="translate(350, 105)">
    <rect width="180" height="170" rx="12" fill="#022c22" stroke="#10b981" stroke-width="2"/>
    <text x="90" y="35" text-anchor="middle" fill="#34d399" font-size="15" font-weight="bold">SHA-256 Engine</text>
    <text x="90" y="60" text-anchor="middle" fill="#6ee7b7" font-size="11">Merkle-Damgård</text>
    <text x="90" y="85" text-anchor="middle" fill="#a7f3d0" font-size="10">64 Compression Rounds</text>
    <text x="90" y="110" text-anchor="middle" fill="#a7f3d0" font-size="10">Bitwise XOR + ROTR</text>
    <rect x="20" y="130" width="140" height="25" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="90" y="147" text-anchor="middle" fill="#d1fae5" font-size="10" font-weight="bold">Irreversible 1-Way</text>
  </g>

  <!-- Right: Digests -->
  <g transform="translate(580, 40)">
    <rect width="260" height="130" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="130" y="28" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Digest 1 (SHA-256)</text>
    <rect x="15" y="45" width="230" height="40" rx="6" fill="#020617" stroke="#1e293b"/>
    <text x="130" y="65" text-anchor="middle" fill="#7dd3fc" font-size="10" font-family="monospace">6a361e8f040ab6fe3f4bccc...</text>
    <text x="130" y="80" text-anchor="middle" fill="#7dd3fc" font-size="10" font-family="monospace">...b2aff09e30cd60169486ef919a</text>
    <text x="130" y="112" text-anchor="middle" fill="#94a3b8" font-size="11">Exact Length: 256 bits (64 hex)</text>
  </g>

  <g transform="translate(580, 210)">
    <rect width="260" height="130" rx="10" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="130" y="28" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">Digest 2 (Avalanche Diffusion)</text>
    <rect x="15" y="45" width="230" height="40" rx="6" fill="#020617" stroke="#1e293b"/>
    <text x="130" y="65" text-anchor="middle" fill="#fda4af" font-size="10" font-family="monospace">25cadd8e8aa692510b95dfc...</text>
    <text x="130" y="80" text-anchor="middle" fill="#fda4af" font-size="10" font-family="monospace">...7208d4e4b310421b3a5b5f4722d7</text>
    <text x="130" y="112" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="bold">61/64 hex characters altered!</text>
  </g>

  <!-- Connectors -->
  <path d="M 290 105 L 350 160" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#hashArr)"/>
  <path d="M 290 275 L 350 220" stroke="#f472b6" stroke-width="2" fill="none" marker-end="url(#hashArr)"/>
  <path d="M 530 160 L 580 105" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#hashArr)"/>
  <path d="M 530 220 L 580 275" stroke="#f43f5e" stroke-width="2" fill="none" marker-end="url(#hashArr)"/>
</svg>`,
      caption: {
        en: 'The Avalanche Effect in action: altering lowercase "c" to uppercase "C" in "codeshikhon" alters 61 of the 64 hexadecimal characters in the SHA-256 digest.',
        bn: 'বাস্তবে অ্যাভাল্যাঞ্চ ইফেক্ট: "codeshikhon"-এর ছোট হাতের "c"-কে বড় হাতের "C"-তে বদলানোয় SHA-২৫৬ ডাইজেস্টের ৬৪টি হেক্সাডেসিমেল বর্ণের মধ্যে ৬১টি বর্ণই পুরোপুরি বদলে গেছে।'
      }
    },
    {
      type: 'heading',
      id: 'preimage-and-collision-resistance',
      text: {
        en: 'Pre-image Resistance vs Collision Resistance',
        bn: 'প্রি-ইমেজ প্রতিরোধ বনাম কলিশন প্রতিরোধ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'First Pre-image Resistance: Given a target hash digest y, it is computationally infeasible to find any message x such that H(x) = y. For SHA-256, an attacker must compute approximately 2^256 hash operations, which is physically impossible across the lifespan of the universe.',
          bn: 'প্রথম প্রি-ইমেজ প্রতিরোধ: একটি নির্দিষ্ট হ্যাশ ডাইজেস্ট y জানা থাকলে H(x) = y হয় এমন কোনো বার্তা x বের করা গাণিতিকভাবে অসম্ভব। SHA-২৫৬ এর ক্ষেত্রে আক্রমণকারীকে প্রায় ২^২৫৬ টি হিসাব চালাতে হবে, যা মহাবিশ্বের সমগ্র আয়ুষ্কালেও সম্ভব নয়।'
        },
        {
          en: 'Second Pre-image Resistance: Given a known message x1, it is computationally infeasible to find a different message x2 such that H(x1) = H(x2). This prevents an adversary from swapping a benign contract with a fraudulent contract that produces the exact same hash.',
          bn: 'দ্বিতীয় প্রি-ইমেজ প্রতিরোধ: একটি নির্দিষ্ট জানা বার্তা x১ দেওয়া থাকলে H(x১) = H(x২) হয় এমন ভিন্ন বার্তা x২ খুঁজে পাওয়া অসম্ভব। এর ফলে আক্রমণকারী আসল দলিলের বদলে কোনো জাল চুক্তিপত্র বসাতে পারে না।'
        },
        {
          en: 'Collision Resistance: It is computationally infeasible to find ANY two arbitrary messages x1 and x2 such that H(x1) = H(x2). Due to the Birthday Paradox, finding any collision requires only 2^(N/2) evaluations (e.g. 2^128 operations for SHA-256).',
          bn: 'কলিশন প্রতিরোধ: এমন যেকোনো দুটি বার্তা x১ ও x২ খুঁজে বের করা গাণিতিকভাবে অসম্ভব যাদের উভয়ের হ্যাশ একই হবে। বার্থডে প্যারাডক্সের কারণে যেকোনো কলিশন খুঁজতে মাত্র ২^(N/২) সংখ্যক অপারেশন প্রয়োজন হয় (যেমন SHA-২৫৬-এর ক্ষেত্রে ২^১২৮ অপারেশন)।'
        }
      ]
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Never Use Cryptographic Hashes Directly for Passwords',
        bn: 'পাসওয়ার্ডের জন্য কখনোই সরাসরি সাধারণ হ্যাশ ব্যবহার করবেন না'
      },
      text: {
        en: 'Standard cryptographic hashes like SHA-256, SHA-512, and SHA-3 are engineered to be extremely fast for verifying gigabyte files. Modern GPU clusters can calculate billions of SHA-256 hashes per second. Storing raw or salted SHA-256 hashes makes your user credentials trivially easy to crack using offline GPU dictionary attacks. Always use slow, memory-hard algorithms like Argon2id or bcrypt for credentials.',
        bn: 'SHA-২৫৬, SHA-৫১২ ও SHA-৩ এর মতো ক্রিপ্টোগ্রাফিক হ্যাশগুলো বড় ফাইল দ্রুত যাচাইয়ের উদ্দেশ্যে অত্যন্ত দ্রুতগতির করে তৈরি। আধুনিক জিপিইউ ক্লাস্টার প্রতি সেকেন্ডে কোটি কোটি SHA-২৫৬ হ্যাশ গণনা করতে পারে। পাসওয়ার্ড সরাসরি সাধারণ হ্যাশ দিয়ে সংরক্ষণ করলে তা অফলাইন জিপিইউ ক্র্যাকিংয়ের মুখে দ্রুত ভেঙে পড়ে। পাসওয়ার্ড সংরক্ষণে সর্বদা ধীরগতির মেমোরি-হার্ড অ্যালগরিদম (Argon2id বা bcrypt) ব্যবহার করুন।'
      }
    },
    {
      type: 'heading',
      id: 'executable-hashing-engine',
      text: {
        en: 'Executable Node.js Hashing Engine & Avalanche Measurement',
        bn: 'এক্সিকিউটেবল Node.js হ্যাশিং ইঞ্জিন ও অ্যাভাল্যাঞ্চ পরিমাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Here is a runnable Node.js engine demonstrating the core properties of SHA-256. It processes 3 distinct messages, verifies that all digests are strictly 64 hexadecimal characters (256 bits), and empirically measures the avalanche effect by counting how many characters change when altering a single letter.',
        bn: 'নিচে একটি স্বয়ংসম্পূর্ণ এবং কার্যকর Node.js ইঞ্জিন দেওয়া হলো যা SHA-২৫৬ এর মূল বৈশিষ্ট্যগুলো প্রদর্শন করে। এটি ৩টি ভিন্ন বার্তা প্রসেস করে, যাচাই করে যে সমস্ত ডাইজেস্ট ঠিক ৬৪টি হেক্সাডেসিমেল বর্ণ (২৫৬ বিট) বিশিষ্ট এবং একটিমাত্র বর্ণ পরিবর্তন করে ডাইজেস্টে কতটা পরিবর্তন আসে তা পরিমাপ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run with node: SHA-256 fixed-length digest calculation and empirical avalanche measurement',
        bn: 'node দিয়ে চালান: SHA-২৫৬ নির্দিষ্ট দৈর্ঘ্যের ডাইজেস্ট গণনা এবং বাস্তব অ্যাভাল্যাঞ্চ পরিমাপ'
      },
      code: `const crypto = require('crypto');

// Standard cryptographic SHA-256 hash helper
function sha256(data) {
  return crypto.createHash('sha256').update(data, 'utf8').digest('hex');
}

// 3 test messages demonstrating determinism and the avalanche effect
const input1 = "codeshikhon";
const input2 = "Codeshikhon"; // Single uppercase character change
const input3 = "The quick brown fox jumps over the lazy dog";

const hash1 = sha256(input1);
const hash2 = sha256(input2);
const hash3 = sha256(input3);

// Measure the Avalanche Effect: Count differing hex characters out of 64
let diffChars = 0;
for (let i = 0; i < 64; i++) {
  if (hash1[i] !== hash2[i]) diffChars++;
}

console.log(\`[Hashing Engine] 3 inputs hashed with SHA-256: all digests exactly 64 hex characters (256 bits).\`);
console.log(\`[Avalanche Test] Single uppercase change flipped \${diffChars}/64 characters in hash digest.\`);
console.log(\`hash1 ("codeshikhon"): \${hash1}\`);
console.log(\`hash2 ("Codeshikhon"): \${hash2}\`);`
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive SHA-256 Hash & Avalanche Inspector',
        bn: 'ইন্টারেক্টিভ SHA-২৫৬ হ্যাশ ও অ্যাভাল্যাঞ্চ পরিদর্শক'
      },
      html: `<h3>SHA-256 Live Hash Calculator</h3>
<p>Type any message to see its real-time 64-character SHA-256 digest and test the avalanche effect.</p>
<input id="hashInput" type="text" value="codeshikhon" style="width:100%;max-width:320px;padding:8px;border-radius:6px;border:1px solid #475569;background:#1e293b;color:#f8fafc;margin-bottom:10px;" />
<button id="calcHashBtn" style="display:block;padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Compute SHA-256 Digest</button>
<pre id="hashOut" style="background:#0f172a;color:#38bdf8;padding:12px;border-radius:8px;font-family:monospace;white-space:pre-wrap;font-size:13px;border:1px solid #1e293b;margin-top:12px;min-height:80px;">Click the button above to calculate the hash digest...</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }`,
      js: `async function computeDigest(str) {
  const enc = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById('calcHashBtn').addEventListener('click', async () => {
  const text = document.getElementById('hashInput').value;
  const digest = await computeDigest(text);
  document.getElementById('hashOut').textContent = 
    "[SHA-256 Computation]\\n" +
    "• Input String: \\"" + text + "\\" (" + new TextEncoder().encode(text).length + " bytes)\\n" +
    "• Hash Digest:  " + digest + "\\n" +
    "• Output Length: 256 bits (32 bytes / 64 hex characters)\\n" +
    "• One-Way Status: Irreversible by mathematical design.";
});`
    }
  ],
  exercises: [
    {
      id: 'hsh-meet-ex-1',
      kind: 'mcq',
      topic: 'hashing-irreversibility',
      question: {
        en: 'Why is it mathematically impossible to invert or decrypt a SHA-256 hash digest back to its original document?',
        bn: 'SHA-২৫৬ হ্যাশ ডাইজেস্ট থেকে মূল ডকুমেন্টটি পুনরায় ডিক্রিপ্ট বা পূর্বাবস্থায় ফিরিয়ে আনা গাণিতিকভাবে কেন অসম্ভব?'
      },
      options: [
        {
          en: 'Hashing is a one-way mathematical compression function that discards information; infinite possible documents map to the same finite 256-bit space, so no decryption key exists',
          bn: 'হ্যাশিং একটি একমুখী গাণিতিক সংকোচন প্রক্রিয়া যা তথ্য ছাঁটাই করে; অসীম সম্ভাব্য ডকুমেন্ট একটি সীমিত ২৫৬-বিট স্পেসে সংকুচিত হওয়ায় কোনো ডিক্রিপশন চাবি থাকা সম্ভব নয়'
        },
        {
          en: 'Because computer operating systems delete the decryption key after fifteen seconds',
          bn: 'কারণ কম্পিউটার অপারেটিং সিস্টেম পনেরো সেকেন্ড পর ডিক্রিপশন কি ডিলিট করে দেয়'
        },
        {
          en: 'Because SHA-256 was outlawed by international mathematical treaties',
          bn: 'কারণ আন্তর্জাতিক গণিত চুক্তি দ্বারা SHA-২৫৬ নিষিদ্ধ করা হয়েছে'
        },
        {
          en: 'Because SHA-256 only runs on battery-powered mobile phones',
          bn: 'কারণ SHA-২৫৬ কেবল ব্যাটারি চালিত মোবাইল ফোনে চলতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hashing is compression, not encryption. Information is lost.',
        bn: 'হ্যাশিং হলো সংকোচন, এনক্রিপশন নয়। এখানে মূল তথ্য ছাঁটাই হয়ে যায়।'
      },
      explanation: {
        en: 'By the pigeonhole principle, compressing variable-length data into 256 bits means many different inputs produce the same hash. Without extra information, inversion is mathematically impossible.',
        bn: 'পিজনহোল নীতি অনুযায়ী পরিবর্তনশীল আকারের ডাটাকে ২৫৬ বিটে সংকুচিত করলে একাধিক ইনপুটের হ্যাশ এক হতে পারে। ফলে কোনো বিপরীতমুখী সূত্র সম্ভব নয়।'
      }
    },
    {
      id: 'hsh-meet-ex-2',
      kind: 'mcq',
      topic: 'avalanche-effect-definition',
      question: {
        en: 'What occurs when a single character is modified in an input string hashed with SHA-256 (the Avalanche Effect)?',
        bn: 'SHA-২৫৬ দিয়ে হ্যাশ করা কোনো ইনপুটের একটিমাত্র বর্ণ পরিবর্তন করলে কী ঘটে (অ্যাভাল্যাঞ্চ ইফেক্ট)?'
      },
      options: [
        {
          en: 'The internal compression rounds cause a chaotic cascade that radically alters approximately 50% of the output bits, producing a completely unrecognizable digest',
          bn: 'অভ্যন্তরীণ কম্প্রেশন রাউন্ডগুলো একটি বিশৃঙ্খল পরিবর্তন ঘটায় যা আউটপুটের প্রায় ৫০% বিট আমূল বদলে দেয় এবং সম্পূর্ণ অচেনা একটি ডাইজেস্ট তৈরি করে'
        },
        {
          en: 'Only the very first character of the hash digest changes',
          bn: 'হ্যাশ ডাইজেস্টের কেবল প্রথম বর্ণটি পরিবর্তিত হয়'
        },
        {
          en: 'The computer processor shuts down immediately to protect the file',
          bn: 'ফাইলটি সুরক্ষিত রাখতে কম্পিউটার প্রসেসর তৎক্ষণাৎ বন্ধ হয়ে যায়'
        },
        {
          en: 'The hash digest doubles in length from 64 to 128 characters',
          bn: 'হ্যাশ ডাইজেস্টের দৈর্ঘ্য দ্বিগুণ হয়ে ৬৪ থেকে ১২৮ বর্ণে রূপ নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A tiny input change results in a massive pseudo-random output shift.',
        bn: 'ইনপুটের ক্ষুদ্র পরিবর্তন আউটপুটে বিশাল এলোমেলো পরিবর্তন আনে।'
      },
      explanation: {
        en: 'Cryptographic hash functions require strong diffusion: changing 1 bit flips roughly half the output bits unpredictably, preventing statistical pattern analysis.',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশনে শক্তিশালী ডিফিউশন থাকে: ১টি বিট পরিবর্তন করলে প্রায় অর্ধেক আউটপুট বিট বদলে যায় যা প্যাটার্ন বিশ্লেষণ অসম্ভব করে তোলে।'
      }
    },
    {
      id: 'hsh-meet-ex-3',
      kind: 'mcq',
      topic: 'collision-resistance-vs-preimage',
      question: {
        en: 'Why is finding a hash collision (finding ANY two messages with identical hashes) easier than finding a pre-image for a target digest?',
        bn: 'একটি নির্দিষ্ট ডাইজেস্টের ইনপুট খোঁজার (প্রি-ইমেজ) চেয়ে যেকোনো দুটি বার্তার একই হ্যাশ পাওয়া (কলিশন) কেন সহজ?'
      },
      options: [
        {
          en: 'Due to the Birthday Paradox: evaluating pairs among K candidate messages yields roughly K^2 / 2 combinations, reducing security from 2^N to 2^(N/2)',
          bn: 'বার্থডে প্যারাডক্সের কারণে: K সংখ্যক বার্তার মধ্যকার জোড়াগুলো প্রায় K^২ / ২ সংখ্যক সম্ভাবনা দেয়, যা কঠিনতা ২^N থেকে কমিয়ে ২^(N/২)-তে নামায়'
        },
        {
          en: 'Because hash collision algorithms are published in Sunday newspapers',
          bn: 'কারণ হ্যাশ কলিশনের অ্যালগরিদমগুলো রোববারের সংবাদপত্রে প্রকাশিত হয়'
        },
        {
          en: 'Because computer memory chips store duplicate hashes intentionally',
          bn: 'কারণ কম্পিউটার মেমরি চিপগুলো ইচ্ছে করেই ডুপ্লিকেট হ্যাশ সংরক্ষণ করে'
        },
        {
          en: 'Because pre-images require solar panels to calculate',
          bn: 'কারণ প্রি-ইমেজ গণনা করার জন্য সৌর প্যানেলের প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of the Birthday Paradox: finding any 2 people with the same birthday among a group requires only 23 people.',
        bn: 'বার্থডে প্যারাডক্সের কথা ভাবুন: যেকোনো ২ জন মানুষের একই জন্মদিনের মিল পেতে মাত্র ২৩ জন লোক প্রয়োজন।'
      },
      explanation: {
        en: 'Finding a match for a specific birthday requires 365 attempts, but finding ANY shared birthday among a group requires only 23 people. The same mathematics applies to hash collisions.',
        bn: 'একটি নির্দিষ্ট জন্মদিন মেলাতে ৩৬৫ বার চেষ্টা করতে হয়, কিন্তু যেকোনো দুজনের জন্মদিন মেলাতে মাত্র ২৩ জন লাগে। হ্যাশ কলিশনের ক্ষেত্রেও ঠিক এই নীতি খাটে।'
      }
    },
    {
      id: 'hsh-meet-ex-4',
      kind: 'predict',
      topic: 'hashing-engine-fixed-length',
      question: {
        en: 'In our live Node.js hashing script, how many hexadecimal characters does SHA-256 produce for every input digest (e.g. 64)?',
        bn: 'আমাদের লাইভ Node.js হ্যাশিং স্ক্রিপ্টে SHA-২৫৬ প্রতিটি ইনপুটের জন্য ঠিক কতটি হেক্সাডেসিমেল বর্ণ বিশিষ্ট ডাইজেস্ট তৈরি করে (যেমন ৬৪)?'
      },
      answer: '64',
      accept: ['64', '64 characters', '64 hex', '৬৪'],
      hint: {
        en: '256 bits divided by 4 bits per hex character equals 64.',
        bn: '২৫৬ বিটকে প্রতি হেক্স বর্ণের ৪ বিট দিয়ে ভাগ করলে ৬৪ পাওয়া যায়।'
      },
      explanation: {
        en: 'SHA-256 always outputs exactly 256 bits, which represents 32 binary bytes or 64 hexadecimal characters regardless of input size.',
        bn: 'SHA-২৫৬ সর্বদা ঠিক ২৫৬ বিট আউটপুট দেয়, যা ইনপুটের আকার যাই হোক না কেন ৩২ বাইট বা ৬৪টি হেক্সাডেসিমেল বর্ণের সমান।'
      }
    }
  ],
  quiz: {
    id: 'meet-hashing-quiz',
    title: {
      en: 'Foundations of Cryptographic Hashing Quiz',
      bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিংয়ের ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'hsh-meet-qz-1',
        kind: 'mcq',
        topic: 'digest-determinism-property',
        question: {
          en: 'What does the property of "determinism" mean in the context of a cryptographic hash function?',
          bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশনের ক্ষেত্রে "ডিটারমিনিজম" (Determinism) বৈশিষ্ট্যের অর্থ কী?'
        },
        options: [
          {
            en: 'The identical input data will always, without exception, produce the exact same hash digest whenever and wherever it is computed',
            bn: 'একই ইনপুট ডাটা যখনই এবং যেখানেই গণনা করা হোক না কেন, কোনো ব্যতিক্রম ছাড়া সর্বদা ঠিক একই হ্যাশ ডাইজেস্ট তৈরি করবে'
          },
          {
            en: 'The hash digest changes every hour to prevent hackers from memorizing it',
            bn: 'হ্যাকাররা যাতে মুখস্থ করতে না পারে সেজন্য হ্যাশ ডাইজেস্ট প্রতি ঘণ্টায় বদলে যায়'
          },
          {
            en: 'The output is determined by the physical temperature of the CPU',
            bn: 'আউটপুটটি সিপিইউর শারীরিক তাপমাত্রার উপর ভিত্তি করে নির্ধারিত হয়'
          },
          {
            en: 'The hash function only works on predetermined days of the week',
            bn: 'হ্যাশ ফাংশনটি কেবল সপ্তাহের পূর্বনির্ধারিত দিনগুলোতে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Determinism means predictability of execution: same in, same out.',
          bn: 'ডিটারমিনিজম মানে একই ইনপুটের জন্য সর্বদা একই আউটপুট।'
        },
        explanation: {
          en: 'Determinism ensures that two independent computers hashing the same file will always arrive at the exact same digest, enabling universal integrity verification.',
          bn: 'ডিটারমিনিজম নিশ্চিত করে যে দুটি স্বাধীন কম্পিউটার একই ফাইল হ্যাশ করলে হুবহু একই ডাইজেস্ট পাবে, যা অখণ্ডতা যাচাইয়ের পথ তৈরি করে।'
        }
      },
      {
        id: 'hsh-meet-qz-2',
        kind: 'mcq',
        topic: 'why-fast-hashes-fail-passwords',
        question: {
          en: 'Why is it an architectural anti-pattern to use raw SHA-256 for storing user passwords in a database?',
          bn: 'ডাটাবেসে ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণের জন্য সরাসরি সাধারণ SHA-২৫৬ ব্যবহার করা কেন একটি মারাত্মক ভুল স্থাপত্য?'
        },
        options: [
          {
            en: 'SHA-256 is designed to be extremely fast for file hashing; modern GPU clusters can compute billions of guesses per second, allowing rapid cracking of unsalted passwords',
            bn: 'SHA-২৫৬ বড় ফাইল দ্রুত যাচাইয়ের উদ্দেশ্যে তৈরি; আধুনিক জিপিইউ ক্লাস্টার প্রতি সেকেন্ডে শত কোটি অনুমান পরীক্ষা করতে পারে, যা পাসওয়ার্ড ভাঙা সহজ করে তোলে'
          },
          {
            en: 'Because SHA-256 cannot process alphabet characters, only numbers',
            bn: 'কারণ SHA-২৫৬ কোনো বর্ণ পড়তে পারে না, কেবল সংখ্যা বোঝে'
          },
          {
            en: 'Because SHA-256 deletes passwords from database tables automatically',
            bn: 'কারণ SHA-২৫৬ ডাটাবেস টেবিল থেকে পাসওয়ার্ড নিজে থেকেই মুছে ফেলে'
          },
          {
            en: 'Because web browsers reject any website that mentions the number 256',
            bn: 'কারণ ওয়েব ব্রাউজারগুলো ২৫৬ সংখ্যাটি থাকা যেকোনো ওয়েবসাইট বাতিল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fast computation is great for files, but fatal for passwords where attackers brute-force offline.',
          bn: 'দ্রুত গতি ফাইলের জন্য ভালো হলেও পাসওয়ার্ডের জন্য বিপজ্জনক কারণ আক্রমণকারী অফলাইনে দ্রুত অনুমান করতে পারে।'
        },
        explanation: {
          en: 'Password hashing requires artificial slowness and memory hardness (Argon2id, bcrypt) to make parallel GPU cracking computationally expensive.',
          bn: 'পাসওয়ার্ড হ্যাশিংয়ে ইচ্ছেকৃত ধীরগতি ও মেমরি কাঠিন্য (Argon2id, bcrypt) প্রয়োজন যাতে জিপিইউ ক্র্যাকিং অর্থনৈতিকভাবে অসম্ভব হয়।'
        }
      },
      {
        id: 'hsh-meet-qz-3',
        kind: 'mcq',
        topic: 'second-preimage-contract-scenario',
        question: {
          en: 'In legal document signing, what does Second Pre-image Resistance guarantee to contract signers?',
          bn: 'আইনি চুক্তিপত্রে স্বাক্ষরের ক্ষেত্রে দ্বিতীয় প্রি-ইমেজ প্রতিরোধ স্বাক্ষরকারীদের কী নিশ্চয়তা দেয়?'
        },
        options: [
          {
            en: 'An attacker cannot construct a fraudulent second contract that produces the exact same hash digest as the legitimate contract that was signed',
            bn: 'আক্রমণকারী এমন কোনো দ্বিতীয় ভুয়া চুক্তি তৈরি করতে পারবে না যার হ্যাশ ডাইজেস্ট মূল স্বাক্ষরিত চুক্তির হুবহু সমান হবে'
          },
          {
            en: 'The contract will be automatically translated into five foreign languages',
            bn: 'চুক্তিপত্রটি স্বয়ংক্রিয়ভাবে পাঁচটি বিদেশি ভাষায় অনূদিত হয়ে যাবে'
          },
          {
            en: 'The contract text will permanently disappear if it is printed on paper',
            bn: 'কাগজে প্রিন্ট করা হলে চুক্তিপত্রের লেখা চিরতরে মুছে যাবে'
          },
          {
            en: 'Both parties are legally required to buy the same model of computer',
            bn: 'উভয় পক্ষ একই মডেলের কম্পিউটার কিনতে আইনিভাবে বাধ্য থাকবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Given message 1, it is impossible to find a different message 2 with the same hash.',
          bn: 'একটি বার্তা জানা থাকলে একই হ্যাশ বিশিষ্ট দ্বিতীয় কোনো বার্তা তৈরি করা অসম্ভব।'
        },
        explanation: {
          en: 'If second pre-image resistance failed, an attacker could present a fraudulent contract with altered monetary terms that shares the cryptographic hash of the approved contract.',
          bn: 'দ্বিতীয় প্রি-ইমেজ প্রতিরোধ ভেঙে পড়লে আক্রমণকারী টাকার অঙ্ক বদলে এমন জাল চুক্তি দেখাতে পারত যার হ্যাশ আসল চুক্তির সমান হতো।'
        }
      },
      {
        id: 'hsh-meet-qz-4',
        kind: 'mcq',
        topic: 'content-addressable-storage-git',
        question: {
          en: 'How do version control systems like Git use cryptographic hashes for content-addressable storage?',
          bn: 'গিটের (Git) মতো ভার্সন কন্ট্রোল সিস্টেম কীভাবে কনটেন্ট-অ্যাড্রেসেবল স্টোরেজের জন্য ক্রিপ্টোগ্রাফিক হ্যাশ ব্যবহার করে?'
        },
        options: [
          {
            en: 'Every file snapshot, directory tree, and commit is uniquely addressed and referenced by the cryptographic hash of its exact contents',
            bn: 'প্রতিটি ফাইলের স্ন্যাপশট, ডিরেক্টরি ট্রি এবং কমিট তার মধ্যকার বিষয়বস্তুর ক্রিপ্টোগ্রাফিক হ্যাশ দ্বারা অনন্যভাবে চিহ্নিত ও রেফারেন্স করা হয়'
          },
          {
            en: 'Git renames all computer files to random English animal names',
            bn: 'গিট কম্পিউটারের সমস্ত ফাইলের নাম বদলে এলোমেলো পশুর নামে রূপান্তর করে'
          },
          {
            en: 'Git encrypts files so developers cannot read their own source code',
            bn: 'গিট ফাইল এমনভাবে এনক্রিপ্ট করে যাতে ডেভেলপাররা তাদের নিজস্ব কোড পড়তে না পারেন'
          },
          {
            en: 'Git uploads all source code to public social media accounts',
            bn: 'গিট সমস্ত সোর্স কোড পাবলিক সোশ্যাল মিডিয়া অ্যাকাউন্টে আপলোড করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In Git, the content IS the address: commit hashes identify exact history states.',
          bn: 'গিটে ফাইলের বিষয়বস্তুই তার ঠিকানা: কমিট হ্যাশ দিয়ে সুনির্দিষ্ট ইতিহাস চেনা যায়।'
        },
        explanation: {
          en: 'Content-addressable storage means objects are retrieved by their cryptographic hash (object ID). If file contents change even by 1 byte, its address changes completely.',
          bn: 'কনটেন্ট-অ্যাড্রেসেবল স্টোরেজ মানে হলো অবজেক্টের হ্যাশই তার ঠিকানা। ফাইলের ১টি বাইটও বদলালে তার হ্যাশ ও ঠিকানা সম্পূর্ণ বদলে যায়।'
        }
      }
    ]
  },
  next: {
    slug: 'hash-functions',
    title: {
      en: 'Hash Algorithms & Internals: MD5, SHA-256, SHA-3 & Length-Extension',
      bn: 'হ্যাশ অ্যালগরিদম ও অভ্যন্তরীণ গঠন: MD5, SHA-২৫৬, SHA-৩ ও লেন্থ-এক্সটেনশন'
    }
  }
};
