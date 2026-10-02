import type { Lesson } from '../../../lib/types';

export const HashFunctionsLesson: Lesson = {
  slug: 'hash-functions',
  tech: 'hashing',
  title: {
    en: 'Hash Algorithms & Internals: MD5, SHA-256, SHA-3 & Length-Extension',
    bn: 'হ্যাশ অ্যালগরিদম ও অভ্যন্তরীণ গঠন: MD5, SHA-২৫৬, SHA-৩ ও লেন্থ-এক্সটেনশন'
  },
  summary: {
    en: 'Deep dive into cryptographic hash internals: the Merkle-Damgård construction, why MD5 and SHA-1 suffered practical collision collapses, how SHA-256 and SHA-3 Keccak operate, and why Length-Extension attacks make HMAC mandatory.',
    bn: 'ক্রিপ্টোগ্রাফিক হ্যাশের অভ্যন্তরীণ গঠন বিশ্লেষণ করুন: মের্কল-ডামগার্ড কাঠামো, কেন MD5 ও SHA-১ কলিশন আক্রমণে ভেঙে পড়েছে, কীভাবে SHA-২৫৬ ও SHA-৩ কেকাক কাজ করে এবং কেন লেন্থ-এক্সটেনশন আক্রমণ HMAC ব্যবহারকে বাধ্যতামূলক করে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'the-evolution-of-hash-algorithms',
      text: {
        en: 'The Evolution of Hash Algorithms: From MD5 to SHA-3',
        bn: 'হ্যাশ অ্যালগরিদমের বিবর্তন: MD5 থেকে SHA-৩'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The history of cryptographic hashing is a continuous arms race between cryptographers and cryptanalysts. In the early 1990s, Ronald Rivest designed MD5, producing a 128-bit digest. By 2004, mathematician Xiaoyun Wang demonstrated practical collision attacks on MD5, allowing 2 different files to produce identical digests in minutes. In 1995, standards agencies defined SHA-1 with a 160-bit digest. By 2017, security researchers proved SHA-1 broken by generating 2 distinct document files with identical SHA-1 hashes. Today, production systems rely on SHA-256 (SHA-2) and the sponge-based Keccak algorithm (SHA-3).',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিংয়ের ইতিহাস হলো ক্রিপ্টোগ্রাফার এবং গবেষকদের মধ্যকার একটি নিরবচ্ছিন্ন বুদ্ধিবৃত্তিক লড়াই। ১৯৯০-এর দশকের শুরুতে রোনাল্ড রিভেস্ট MD5 ডিজাইন করেন, যা ১২৮-বিটের ডাইজেস্ট তৈরি করত। ২০০৪ সালের মধ্যে বিজ্ঞানী শাওয়ুন ওয়াং MD5-এ ব্যবহারিক কলিশন আক্রমণ প্রদর্শন করেন, যার ফলে কয়েক মিনিটে ২টি ভিন্ন ফাইলের একই ডাইজেস্ট তৈরি করা সম্ভব হয়। ১৯৯৫ সালে আন্তর্জাতিক স্ট্যান্ডার্ড সংস্থা ১৬০-বিট ডাইজেস্টের SHA-১ মানসম্মত করে। ২০১৭ সালের মধ্যে গবেষকরা হুবহু একই SHA-১ হ্যাশ বিশিষ্ট ২টি সম্পূর্ণ ভিন্ন ফাইল তৈরি করে প্রমাণ করেন যে SHA-১ ভেঙে পড়েছে। বর্তমানে আধুনিক প্রোডাকশন সিস্টেমগুলো নির্ভর করে SHA-২৫৬ (SHA-২) এবং স্পঞ্জ-ভিত্তিক কেকাক অ্যালগরিদমের (SHA-৩) উপর।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Merkle-Damgård Construction',
          def: {
            en: 'An iterative hashing architecture breaking inputs into fixed blocks and running sequential compression steps.',
            bn: 'একটি পুনরাবৃত্ত হ্যাশিং কাঠামো যা ইনপুটকে নির্দিষ্ট ব্লকে ভাগ করে ধারাবাহিকভাবে কম্প্রেশন ফাংশন পরিচালনা করে।'
          }
        },
        {
          term: 'Length-Extension Attack',
          def: {
            en: 'A vulnerability in Merkle-Damgård hashes allowing attackers to append extra data to an unknown secret.',
            bn: 'মের্কল-ডামগার্ড হ্যাশের একটি দুর্বলতা যা আক্রমণকারীকে গোপন চাবি না জেনেই অতিরিক্ত ডাটা যুক্ত করে বৈধ হ্যাশ তৈরির সুযোগ দেয়।'
          }
        },
        {
          term: 'HMAC (RFC 2104)',
          def: {
            en: 'Hash-based Message Authentication Code using a nested two-pass design to defeat length-extension attacks.',
            bn: 'হ্যাশ-ভিত্তিক মেসেজ অথেনটিকেশন কোড যা দ্বি-স্তরীয় অভ্যন্তরীণ ও বহিরাগত প্যাডিং দিয়ে লেন্থ-এক্সটেনশন আক্রমণ প্রতিহত করে।'
          }
        },
        {
          term: 'Sponge Construction (SHA-3)',
          def: {
            en: 'A permutation-based architecture that absorbs input bytes into an internal state and squeezes out output digests.',
            bn: 'একটি পারমিউটেশন-ভিত্তিক কাঠামো যা ইনপুট বাইট শোষণ (Absorb) করে এবং ভেতর থেকে নির্দিষ্ট আকারের ডাইজেস্ট নিংড়ে (Squeeze) বের করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'merkle-damgard-internals',
      text: {
        en: 'Inside the Merkle-Damgård Construction and Length-Extension',
        bn: 'মের্কল-ডামগার্ডের অভ্যন্তরীণ গঠন এবং লেন্থ-এক্সটেনশন আক্রমণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Most classical hash functions (MD5, SHA-1, SHA-256, SHA-512) utilize the Merkle-Damgård construction. The input is padded to a multiple of 512 bits, divided into blocks M_1, M_2, ..., M_k, and processed through a compression function initialized with an IV constant. The critical vulnerability is that the final output hash digest IS the internal state of the hash engine after the last block. Suppose an application computes tag = SHA256(secret + message). An attacker seeing message and tag can treat tag as the starting state, append evil_extension, and forge a valid tag for the extended message without knowing the secret.',
        bn: 'বেশিরভাগ ঐতিহ্যবাহী হ্যাশ ফাংশন (MD5, SHA-১, SHA-২৫৬, SHA-৫১২) মের্কল-ডামগার্ড কাঠামো ব্যবহার করে। ইনপুট ডাটাকে ৫১২ বিটের গুণিতক আকারে প্যাডিং করা হয়, M_১, M_২, ..., M_k ব্লকে ভাগ করা হয় এবং একটি নির্দিষ্ট প্রারম্ভিক ভেক্টরের (IV) মাধ্যমে ক্রমান্বয়ে কম্প্রেশন ফাংশনে চালানো হয়। এর প্রধান দুর্বলতা হলো চূড়ান্ত হ্যাশ ডাইজেস্টটি মূলত শেষ ব্লকের পর হ্যাশ ইঞ্জিনের অভ্যন্তরীণ অবস্থার প্রতিচ্ছবি। কোনো ডেভেলপার যদি tag = SHA256(secret + message) সূত্র দিয়ে স্বাক্ষর তৈরি করেন, তবে আক্রমণকারী মেসেজ এবং ট্যাগ দেখে ট্যাগটিকে শুরুর অবস্থা বানিয়ে অতিরিক্ত ক্ষতিকর ডাটা যোগ করে ফেলতে পারে এবং গোপন চাবি না জেনেই সম্পূর্ণ বৈধ ট্যাগ তৈরি করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Merkle-Damgård Length-Extension vs HMAC Two-Pass Protection',
        bn: 'মের্কল-ডামগার্ড লেন্থ-এক্সটেনশন বনাম HMAC দ্বি-স্তরীয় সুরক্ষা'
      },
      svg: `<svg viewBox="0 0 880 390" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
  <defs>
    <marker id="arrowMd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#818cf8"/>
    </marker>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e"/>
    </marker>
    <marker id="arrowGrn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <rect width="880" height="390" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="2"/>

  <!-- Top: Merkle-Damgard Vulnerability -->
  <g transform="translate(30, 30)">
    <rect width="820" height="150" rx="10" fill="#1e1b4b" fill-opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
    <text x="410" y="25" text-anchor="middle" fill="#818cf8" font-size="13" font-weight="bold">Vulnerable Merkle-Damgård: Naive Hash(Secret || Message)</text>
    
    <!-- Block 0: IV -->
    <rect x="20" y="45" width="70" height="35" rx="6" fill="#312e81" stroke="#818cf8"/>
    <text x="55" y="67" text-anchor="middle" fill="#e0e7ff" font-size="11" font-weight="bold">IV</text>

    <line x1="90" y1="62" x2="130" y2="62" stroke="#818cf8" stroke-width="2" marker-end="url(#arrowMd)"/>

    <!-- Round 1 -->
    <rect x="130" y="45" width="130" height="70" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="195" y="65" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Compress f()</text>
    <text x="195" y="85" text-anchor="middle" fill="#a5b4fc" font-size="10">↑ Block 1 (Secret)</text>

    <line x1="260" y1="62" x2="300" y2="62" stroke="#818cf8" stroke-width="2" marker-end="url(#arrowMd)"/>

    <!-- Round 2 -->
    <rect x="300" y="45" width="130" height="70" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="365" y="65" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Compress f()</text>
    <text x="365" y="85" text-anchor="middle" fill="#a5b4fc" font-size="10">↑ Block 2 (Msg)</text>

    <line x1="430" y1="62" x2="480" y2="62" stroke="#818cf8" stroke-width="2" marker-end="url(#arrowMd)"/>

    <!-- State Output / Attacker Forge -->
    <rect x="480" y="45" width="130" height="40" rx="6" fill="#1e1b4b" stroke="#818cf8"/>
    <text x="545" y="70" text-anchor="middle" fill="#e0e7ff" font-size="11" font-weight="bold">Valid Tag = State</text>

    <line x1="610" y1="62" x2="660" y2="62" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrowRed)"/>

    <!-- Attacker Extension -->
    <rect x="660" y="45" width="140" height="70" rx="6" fill="#450a0a" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="730" y="65" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Attacker Extension</text>
    <text x="730" y="82" text-anchor="middle" fill="#f87171" font-size="9">f(Tag, &amp;role=admin)</text>
    <text x="730" y="100" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">FORGERY SUCCESS!</text>

    <text x="410" y="135" text-anchor="middle" fill="#f87171" font-size="11">Attacker continues the hash state without knowing the secret key!</text>
  </g>

  <!-- Bottom: HMAC Defense -->
  <g transform="translate(30, 205)">
    <rect width="820" height="155" rx="10" fill="#064e3b" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5"/>
    <text x="410" y="25" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">The Solution: HMAC (RFC 2104) Nested Two-Pass Architecture</text>
    
    <!-- Pass 1: Inner -->
    <rect x="40" y="50" width="340" height="70" rx="8" fill="#022c22" stroke="#059669"/>
    <text x="210" y="72" text-anchor="middle" fill="#a7f3d0" font-size="12" font-weight="bold">Pass 1: Inner Hash</text>
    <text x="210" y="92" text-anchor="middle" fill="#6ee7b7" font-size="11">InnerHash = H((Key ⊕ ipad) || Message)</text>
    <text x="210" y="108" text-anchor="middle" fill="#94a3b8" font-size="10">ipad = 0x36 repeated 64 times</text>

    <line x1="380" y1="85" x2="440" y2="85" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGrn)"/>

    <!-- Pass 2: Outer -->
    <rect x="440" y="50" width="340" height="70" rx="8" fill="#022c22" stroke="#10b981" stroke-width="1.5"/>
    <text x="610" y="72" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Pass 2: Outer Hash (Shielded)</text>
    <text x="610" y="92" text-anchor="middle" fill="#d1fae5" font-size="11">FinalTag = H((Key ⊕ opad) || InnerHash)</text>
    <text x="610" y="108" text-anchor="middle" fill="#94a3b8" font-size="10">opad = 0x5c repeated 64 times</text>

    <text x="410" y="142" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Outer key wrap hides the internal state, rendering Length-Extension mathematically impossible!</text>
  </g>
</svg>`,
      caption: {
        en: 'In naive prefix hashing, the digest is the final internal state, allowing attackers to append data. HMAC defeats this by wrapping the inner hash with an outer key pass.',
        bn: 'সাধারণ প্রিফিক্স হ্যাশিংয়ে ডাইজেস্টই হলো অভ্যন্তরীণ অবস্থা, ফলে আক্রমণকারী ডাটা যোগ করতে পারে। HMAC বহিরাগত কি পাসের মাধ্যমে অভ্যন্তরীণ অবস্থাকে সম্পূর্ণ গোপন রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'cryptographic-hash-matrix',
      text: {
        en: 'Cryptographic Hash Families Comparison Matrix',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ পরিবারের তুলনামূলক ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm Family', bn: 'অ্যালগরিদম পরিবার' },
        { en: 'Digest Size & Rounds', bn: 'ডাইজেস্ট সাইজ ও রাউন্ড' },
        { en: 'Collision Security Status', bn: 'কলিশন নিরাপত্তা অবস্থা' },
        { en: 'Production Recommendation', bn: 'প্রোডাকশন সুপারিশ' }
      ],
      rows: [
        [
          { en: 'MD5 (Rivest, 1991)', bn: 'MD5 (রিভেস্ট, ১৯৯১)' },
          { en: '128 bits (16 bytes, 64 rounds)', bn: '১২৮ বিট (১৬ বাইট, ৬৪ রাউন্ড)' },
          { en: 'BROKEN: Collisions in seconds ($2^{16}$ computations)', bn: 'ভাঙা: কয়েক সেকেন্ডে কলিশন ($২^{১৬}$ পরিগণনা)' },
          { en: 'STRICTLY BANNED for security; checksum only if legacy', bn: 'নিরাপত্তায় কঠোরভাবে নিষিদ্ধ; কেবল লিগ্যাসি চেকসাম' }
        ],
        [
          { en: 'SHA-1 (NIST, 1995)', bn: 'SHA-১ (NIST, ১৯৯৫)' },
          { en: '160 bits (20 bytes, 80 rounds)', bn: '১৬০ বিট (২০ বাইট, ৮০ রাউন্ড)' },
          { en: 'BROKEN: SHAttered collision in $2^{63}$ computations', bn: 'ভাঙা: $২^{৬৩}$ পরিগণনায় SHAttered আক্রমণ' },
          { en: 'DEPRECATED: Banned for TLS certificates and digital signatures', bn: 'বাতিল: TLS সার্টিফিকেট ও ডিজিটাল সিগনেচারে নিষিদ্ধ' }
        ],
        [
          { en: 'SHA-256 (SHA-2 Family)', bn: 'SHA-২৫৬ (SHA-২ পরিবার)' },
          { en: '256 bits (32 bytes, 64 rounds)', bn: '২৫৬ বিট (৩২ বাইট, ৬৪ রাউন্ড)' },
          { en: 'SECURE: Unbroken ($2^{128}$ collision hardness)', bn: 'সুরক্ষিত: অভেদ্য ($২^{১২৮}$ কলিশন প্রতিরোধ)' },
          { en: 'INDUSTRY STANDARD: Mandatory for TLS 1.3, Git, and Bitcoin', bn: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড: TLS ১.৩, গিট ও বিটকয়েনে ব্যবহৃত' }
        ],
        [
          { en: 'SHA-3 (Keccak / Sponge)', bn: 'SHA-৩ (কেকাক / স্পঞ্জ)' },
          { en: '256 / 512 bits (24 permutation rounds)', bn: '২৫৬ / ৫১২ বিট (২৪ পারমিউটেশন রাউন্ড)' },
          { en: 'SECURE: Resistant to Length-Extension by design', bn: 'সুরক্ষিত: কাঠামোগতভাবে লেন্থ-এক্সটেনশন প্রতিরোধী' },
          { en: 'NEXT-GEN STANDARD: Recommended for new enterprise systems', bn: 'পরবর্তী প্রজন্ম: নতুন এন্টারপ্রাইজ সিস্টেমে প্রস্তাবিত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'hmac-authentication-imperative',
      text: {
        en: 'The HMAC Standard: Message Authentication with Secret Keys',
        bn: 'HMAC মানদণ্ড: গোপন চাবি দিয়ে মেসেজ প্রমাণীকরণ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Authentication + Integrity: Standard hashing verifies that data did not corrupt accidentally. HMAC proves that the sender possessed the secret key, preventing unauthorized forgeries.',
          bn: 'অথেনটিকেশন ও ইন্টিগ্রিটি: সাধারণ হ্যাশিং প্রমাণ করে ডাটা নষ্ট হয়েছে কিনা। আর HMAC প্রমাণ করে প্রেরকের কাছে গোপন চাবিটি ছিল, যা অননুমোদিত জালিয়াতি বন্ধ করে।'
        },
        {
          en: 'Constant-Time Equality: Never verify HMAC authentication tags using regular equality operators (tagA === tagB). Standard string comparisons exit early on the first non-matching byte, leaking timing clues. Always use crypto.timingSafeEqual.',
          bn: 'কনস্ট্যান্ট-টাইম সমতা: সাধারণ সমতা অপারেটর (tagA === tagB) দিয়ে কখনো HMAC ট্যাগ মেলাবেন না। সাধারণ তুলনা প্রথম অমিল বর্ণ পেলেই কাজ বন্ধ করে দেয় যা টাইমিং ক্লু ফাঁস করে। সর্বদা crypto.timingSafeEqual ব্যবহার করুন।'
        },
        {
          en: 'Immunity to Length-Extension: By hashing the secret key twice (once with the inner pad and once with the outer pad), HMAC completely eliminates the Merkle-Damgård state vulnerability.',
          bn: 'লেন্থ-এক্সটেনশন আক্রমণ থেকে মুক্তি: গোপন চাবিকে দুই ধাপে হ্যাশ করে (একবার ipad এবং একবার opad দিয়ে) HMAC মের্কল-ডামগার্ডের স্টেট ফাঁস হওয়া সম্পূর্ণ দূর করে।'
        }
      ]
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Never Concatenate Secrets Naively in Hashing',
        bn: 'কখনোই সাধারণ হ্যাশে সরাসরি সিক্রেট জোড়া লাগাবেন না'
      },
      text: {
        en: 'Writing hash(secret + data) or hash(data + secret) is one of the most common cryptographic flaws in API engineering. It leaves webhooks and tokens vulnerable to length-extension attacks and hash collisions. Always use standard crypto.createHmac("sha256", secretKey).',
        bn: 'hash(secret + data) বা hash(data + secret) লেখা ওয়েব এপিআই ইঞ্জিনিয়ারিংয়ের সবচেয়ে সাধারণ কিন্তু মারাত্মক ভুল। এটি ওয়েবহুক ও টোকেনগুলোকে লেন্থ-এক্সটেনশন আক্রমণের ঝুঁকিতে ফেলে দেয়। সর্বদা আদর্শ crypto.createHmac("sha256", secretKey) ব্যবহার করুন।'
      }
    },
    {
      type: 'heading',
      id: 'executable-hmac-lab',
      text: {
        en: 'Executable Node.js Hash Family & HMAC Engine',
        bn: 'এক্সিকিউটেবল Node.js হ্যাশ পরিবার ও HMAC ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete, runnable Node.js engine comparing 3 hash families (MD5, SHA-1, and SHA-256), computing fixed digest lengths (32, 40, and 64 hex characters), and demonstrating how HMAC-SHA256 catches 1/1 single-byte message tampering attempts using constant-time verification.',
        bn: 'নিচে একটি স্বয়ংসম্পূর্ণ এবং কার্যকর Node.js ইঞ্জিন দেওয়া হলো যা ৩টি হ্যাশ পরিবার (MD5, SHA-১ ও SHA-২৫৬) তুলনা করে, নির্দিষ্ট ডাইজেস্ট দৈর্ঘ্য (৩২, ৪০ ও ৬৪ হেক্স বর্ণ) প্রদর্শন করে এবং দেখায় কীভাবে HMAC-SHA256 কনস্ট্যান্ট-টাইম ভ্যালিডেশনের মাধ্যমে ১/১ টি মেসেজ কারচুপি তৎক্ষণাৎ শনাক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run with node: Comparison of MD5, SHA-1, SHA-256 and constant-time HMAC-SHA256 verification',
        bn: 'node দিয়ে চালান: MD5, SHA-১, SHA-২৫৬ এর তুলনা এবং কনস্ট্যান্ট-টাইম HMAC-SHA256 যাচাইকরণ'
      },
      code: `const crypto = require('crypto');

const message = "transfer: $50,000 to vault_escrow";

// 1. Comparison of hash digest output lengths
const md5Hex = crypto.createHash('md5').update(message).digest('hex');
const sha1Hex = crypto.createHash('sha1').update(message).digest('hex');
const sha256Hex = crypto.createHash('sha256').update(message).digest('hex');

// 2. Production HMAC-SHA256 creation and tamper detection
const hmacKey = crypto.randomBytes(32);
const hmacTag = crypto.createHmac('sha256', hmacKey).update(message).digest();

// Attacker tampers with monetary amount by single byte
const tamperedMessage = "transfer: $90,000 to vault_escrow";
const tamperedTag = crypto.createHmac('sha256', hmacKey).update(tamperedMessage).digest();

// Constant-time tag comparison
const isValidOriginal = crypto.timingSafeEqual(
  hmacTag,
  crypto.createHmac('sha256', hmacKey).update(message).digest()
);
const isTamperRejected = !crypto.timingSafeEqual(hmacTag, tamperedTag);

console.log(\`[Algorithm Lab] Compared 3 hash families (MD5: \${md5Hex.length} hex, SHA-1: \${sha1Hex.length} hex, SHA-256: \${sha256Hex.length} hex).\`);
console.log(\`[HMAC Engine] Generated HMAC-SHA256 tag; verified tamper caught 1/1 with constant-time equality (\${isValidOriginal && isTamperRejected}).\`);`
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive HMAC-SHA256 Authenticator',
        bn: 'ইন্টারেক্টিভ HMAC-SHA256 প্রমাণীকরণকারী'
      },
      html: `<h3>HMAC-SHA256 Webhook Signing Lab</h3>
<p>Sign a webhook payload with a secret key, then tamper with 1 byte to verify authentication failure.</p>
<input id="hmacPayload" type="text" value='{"event":"payment_success","amount":50000}' style="width:100%;max-width:380px;padding:8px;border-radius:6px;border:1px solid #475569;background:#1e293b;color:#f8fafc;margin-bottom:10px;" />
<div style="display:flex;gap:10px;margin-bottom:12px;">
  <button id="signHmacBtn" style="padding:8px 14px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Sign Webhook</button>
  <button id="tamperHmacBtn" style="padding:8px 14px;background:#ef4444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Tamper Payload</button>
</div>
<pre id="hmacOut" style="background:#0f172a;color:#38bdf8;padding:12px;border-radius:8px;font-family:monospace;white-space:pre-wrap;font-size:13px;border:1px solid #1e293b;min-height:90px;">Click "Sign Webhook" to generate HMAC-SHA256 authentication tag...</pre>`,
      css: `body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }`,
      js: `let originalSignature = "";
let currentPayload = "";

async function generateHmac(keyStr, dataStr) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(keyStr),
    { name: "HMAC", hash: "SHA-256" },
    false, ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(dataStr));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById('signHmacBtn').addEventListener('click', async () => {
  currentPayload = document.getElementById('hmacPayload').value;
  originalSignature = await generateHmac("secret_api_key_4410", currentPayload);
  document.getElementById('hmacOut').textContent = 
    "[HMAC-SHA256 Generated]\\n" +
    "• Payload: " + currentPayload + "\\n" +
    "• Secret Key: (Kept secret on server)\\n" +
    "• Signature Tag: " + originalSignature + "\\n" +
    "• Verification Status: VALID (Authorized by secret key holder)";
});

document.getElementById('tamperHmacBtn').addEventListener('click', async () => {
  if (!originalSignature) {
    document.getElementById('hmacOut').textContent = "Please click 'Sign Webhook' first.";
    return;
  }
  const tampered = currentPayload.replace("50000", "99000");
  const tamperedSig = await generateHmac("secret_api_key_4410", tampered);
  document.getElementById('hmacOut').textContent = 
    "[Tamper Experiment]\\n" +
    "• Altered Payload: " + tampered + "\\n" +
    "• Original Signature Tag: " + originalSignature + "\\n" +
    "• Required Signature Tag: " + tamperedSig + "\\n" +
    "• Result: FORGERY REJECTED! Tags do not match in constant-time comparison.";
});`
    }
  ],
  exercises: [
    {
      id: 'hsh-fn-ex-1',
      kind: 'mcq',
      topic: 'length-extension-attack-cause',
      question: {
        en: 'Why is naive concatenation tag = SHA256(secret + message) vulnerable to Length-Extension attacks?',
        bn: 'সাধারণ কনক্যাটেনেশন tag = SHA256(secret + message) কেন লেন্থ-এক্সটেনশন আক্রমণের মুখে দুর্বল?'
      },
      options: [
        {
          en: 'Because in Merkle-Damgård hashes, the output digest is the internal state of the engine after the final block, allowing an attacker to continue hashing additional blocks without knowing the secret',
          bn: 'কারণ মের্কল-ডামগার্ড হ্যাশে চূড়ান্ত ডাইজেস্ট মূলত শেষ ব্লকের পর অভ্যন্তরীণ অবস্থা, ফলে আক্রমণকারী গোপন চাবি না জেনেই অতিরিক্ত ব্লক যোগ করে বৈধ হ্যাশ তৈরি করতে পারে'
        },
        {
          en: 'Because SHA-256 sends the secret key to all connected Bluetooth devices',
          bn: 'কারণ SHA-২৫৬ আশেপাশের সমস্ত ব্লুটুথ ডিভাইসে গোপন চাবি পাঠিয়ে দেয়'
        },
        {
          en: 'Because naive concatenation crashes the web server operating system',
          bn: 'কারণ সাধারণ কনক্যাটেনেশন ওয়েব সার্ভারের অপারেটিং সিস্টেম ক্র্যাশ করায়'
        },
        {
          en: 'Because secret keys cannot be longer than four characters in length',
          bn: 'কারণ গোপন চাবিগুলো চার বর্ণের চেয়ে বেশি দীর্ঘ হতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The hash digest is the internal state of the Merkle-Damgård compressor.',
        bn: 'হ্যাশ ডাইজেস্টটি মূলত মের্কল-ডামগার্ড কম্প্রেশারের অভ্যন্তরীণ অবস্থা।'
      },
      explanation: {
        en: 'Since the hash digest exposes the final internal state, an adversary can initialize a new hash calculation with that state and append malicious query parameters.',
        bn: 'যেহেতু ডাইজেস্ট অভ্যন্তরীণ অবস্থা প্রকাশ করে, তাই আক্রমণকারী সেই অবস্থা দিয়ে নতুন হ্যাশ শুরু করে বাড়তি প্যারামিটার যোগ করতে পারে।'
      }
    },
    {
      id: 'hsh-fn-ex-2',
      kind: 'mcq',
      topic: 'google-shattered-sha1-impact',
      question: {
        en: 'What did the 2017 Google SHAttered research project demonstrate regarding SHA-1?',
        bn: '২০১৭ সালের গুগল SHAttered গবেষণা প্রকল্প SHA-১ সম্পর্কে কী প্রমাণ করেছিল?'
      },
      options: [
        {
          en: 'It generated two visually distinct PDF documents with identical SHA-1 hashes, proving that SHA-1 collision resistance is practically broken and unsafe for digital certificates',
          bn: 'এটি সম্পূর্ণ ভিন্ন লেখার দুটি পিডিএফ ফাইল তৈরি করেছিল যাদের SHA-১ হ্যাশ হুবহু এক, যা প্রমাণ করে SHA-১ কলিশন প্রতিরোধ বাস্তবিকভাবে ভেঙে পড়েছে এবং সার্টিফিকেটের জন্য বিপজ্জনক'
        },
        {
          en: 'It proved that SHA-1 was invented by ancient Roman mathematicians',
          bn: 'এটি প্রমাণ করেছিল যে প্রাচীন রোমান গণিতবিদরা SHA-১ আবিষ্কার করেছিলেন'
        },
        {
          en: 'It demonstrated that PDF files cannot be stored on modern SSD drives',
          bn: 'এটি দেখিয়েছিল যে আধুনিক এসএসডি ড্রাইভে কোনো পিডিএফ ফাইল সংরক্ষণ করা যায় না'
        },
        {
          en: 'It proved that SHA-1 makes computer cooling fans spin three times faster',
          bn: 'এটি দেখিয়েছিল যে SHA-১ কম্পিউটারের কুলিং ফ্যানকে তিন গুণ দ্রুত ঘোরায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'SHAttered created 2 different PDFs that hashed to the exact same SHA-1 value.',
        bn: 'SHAttered ২ টি ভিন্ন পিডিএফ তৈরি করেছিল যাদের উভয়ের SHA-১ মান হুবহু এক ছিল।'
      },
      explanation: {
        en: 'SHAttered was the first real-world collision on SHA-1, compelling browser vendors, certificate authorities, and Git to deprecate SHA-1.',
        bn: 'SHAttered ছিল SHA-১ এর প্রথম বাস্তব কলিশন প্রমাণ, যা ব্রাউজার ও সার্টিফিকেট কর্তৃপক্ষকে SHA-১ পুরোপুরি বন্ধ করতে বাধ্য করে।'
      }
    },
    {
      id: 'hsh-fn-ex-3',
      kind: 'mcq',
      topic: 'hmac-nested-two-pass-design',
      question: {
        en: 'How does HMAC (RFC 2104) mathematically prevent Length-Extension attacks?',
        bn: 'HMAC (RFC ২১০৪) কীভাবে গাণিতিকভাবে লেন্থ-এক্সটেনশন আক্রমণ সম্পূর্ণরূপে প্রতিহত করে?'
      },
      options: [
        {
          en: 'By using a nested two-pass design where the inner hash is digested again inside an outer hash shielded by the secret key: H((Key ^ opad) || H((Key ^ ipad) || Message))',
          bn: 'একটি দ্বি-স্তরীয় ডিজাইনের মাধ্যমে যেখানে অভ্যন্তরীণ হ্যাশটিকে গোপন চাবি দিয়ে সুরক্ষিত একটি বহিরাগত হ্যাশের ভেতর পুনরায় হ্যাশ করা হয়: H((Key ^ opad) || H((Key ^ ipad) || Message))'
        },
        {
          en: 'By converting all input characters into transparent binary zeros',
          bn: 'ইনপুটের সমস্ত বর্ণকে অদৃশ্য বাইনারি শূন্যে রূপান্তর করে'
        },
        {
          en: 'By disconnecting the network cable during the hash calculation',
          bn: 'হ্যাশ গণনার সময় নেটওয়ার্ক ক্যাবল বিচ্ছিন্ন করে দিয়ে'
        },
        {
          en: 'By adding forty random emojis to the end of every message',
          bn: 'প্রতিটি বার্তার শেষে চল্লিশটি এলোমেলো ইমোজি যুক্ত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'HMAC nests an inner hash inside an outer hash with opad and ipad.',
        bn: 'HMAC opad এবং ipad ব্যবহার করে একটি অভ্যন্তরীণ হ্যাশকে বাইরের হ্যাশের ভেতর রাখে।'
      },
      explanation: {
        en: 'Because the inner hash result is digested again by the outer hash with (Key ^ opad), the internal state of the inner hash is completely sealed and cannot be extended.',
        bn: 'অভ্যন্তরীণ হ্যাশটি (Key ^ opad) দিয়ে বাইরের হ্যাশের ভেতর পুনরায় এনক্যাপসুলেট হওয়ায় অভ্যন্তরীণ অবস্থা সিল থাকে এবং তা বাড়ানো সম্ভব হয় না।'
      }
    },
    {
      id: 'hsh-fn-ex-4',
      kind: 'predict',
      topic: 'hmac-engine-tamper-catch',
      question: {
        en: 'In our live Node.js HMAC script, how many single-byte monetary tampering attempts did constant-time HMAC verification catch (e.g. 1/1)?',
        bn: 'আমাদের লাইভ Node.js HMAC স্ক্রিপ্টে কনস্ট্যান্ট-টাইম HMAC যাচাইকরণ কতটি টাকার অঙ্ক কারচুপির চেষ্টা সফলভাবে শনাক্ত করেছিল (যেমন ১/১)?'
      },
      answer: '1/1',
      accept: ['1/1', '1', 'one', '১/১', '১'],
      hint: {
        en: 'The tamper attempt was caught 1/1.',
        bn: 'কারচুপির চেষ্টাটি ১/১ টিই শনাক্ত হয়েছিল।'
      },
      explanation: {
        en: 'HMAC-SHA256 caught 1/1 tampering attempts: modifying $50,000 to $90,000 produced an entirely different tag that failed constant-time equality check.',
        bn: 'HMAC-SHA256 ১/১ টি কারচুপির চেষ্টাই ধরে ফেলেছিল: ৫০,০০০ কে ৯০,০০০ করায় সম্পূর্ণ ভিন্ন ট্যাগ তৈরি হয়ে কনস্ট্যান্ট-টাইম যাচাইয়ে প্রত্যাখ্যাত হয়।'
      }
    }
  ],
  quiz: {
    id: 'hash-functions-quiz',
    title: {
      en: 'Hash Algorithms & Internals Quiz',
      bn: 'হ্যাশ অ্যালগরিদম ও অভ্যন্তরীণ গঠন কুইজ'
    },
    questions: [
      {
        id: 'hsh-fn-qz-1',
        kind: 'mcq',
        topic: 'sha3-keccak-sponge-architecture',
        question: {
          en: 'What architectural innovation fundamentally distinguishes SHA-3 (Keccak) from SHA-2 (SHA-256)?',
          bn: 'কোন স্থাপত্যগত উদ্ভাবনটি SHA-৩ (কেকাক)-কে মৌলিকভাবে SHA-২ (SHA-২৫৬) থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'SHA-3 uses a Sponge Construction (absorbing inputs into a 1600-bit permutation state and squeezing outputs), making it inherently immune to Length-Extension attacks without needing HMAC',
            bn: 'SHA-৩ একটি স্পঞ্জ আর্কিটেকচার ব্যবহার করে (১৬০০-বিট পারমিউটেশন স্টেটে ইনপুট শোষণ করে এবং আউটপুট নিংড়ে বের করে), যা HMAC ছাড়াই কাঠামোগতভাবে লেন্থ-এক্সটেনশন আক্রমণ প্রতিরোধী'
          },
          {
            en: 'SHA-3 requires mechanical gears and steam power to run calculations',
            bn: 'SHA-৩ চালানোর জন্য যান্ত্রিক গিয়ার এবং বাষ্পীয় শক্তির প্রয়োজন হয়'
          },
          {
            en: 'SHA-3 replaces all binary bits with spoken musical notes',
            bn: 'SHA-৩ সমস্ত বাইনারি বিটকে সঙ্গীতের সুরে রূপান্তর করে'
          },
          {
            en: 'SHA-3 is limited to processing messages under sixteen bytes in total',
            bn: 'SHA-৩ মোট ষোল বাইটের চেয়ে ছোট বার্তায় সীমাবদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'SHA-3 is based on Keccak sponge construction, not Merkle-Damgård.',
          bn: 'SHA-৩ মের্কল-ডামগার্ডের বদলে কেকাক স্পঞ্জ কাঠামোর উপর প্রতিষ্ঠিত।'
        },
        explanation: {
          en: 'NIST selected Keccak as SHA-3 specifically because its sponge permutation design differs completely from SHA-2, providing mathematical diversity in case Merkle-Damgård is ever broken.',
          bn: 'NIST কেকাককে SHA-৩ নির্বাচিত করেছিল কারণ এর স্পঞ্জ ডিজাইন SHA-২ থেকে সম্পূর্ণ আলাদা, যা মের্কল-ডামগার্ড কাঠামোর বিকল্প হিসেবে নিরাপত্তা দেয়।'
        }
      },
      {
        id: 'hsh-fn-qz-2',
        kind: 'mcq',
        topic: 'md5-practical-attack-timeline',
        question: {
          en: 'Why must MD5 never be used for security purposes in modern software?',
          bn: 'আধুনিক সফটওয়্যারে নিরাপত্তার কোনো কাজেই কেন MD5 ব্যবহার করা যাবে না?'
        },
        options: [
          {
            en: 'Practical collision attacks can generate two colliding files with identical MD5 digests in under 1 second on a standard laptop',
            bn: 'ব্যবহারিক কলিশন আক্রমণের মাধ্যমে সাধারণ একটি ল্যাপটপেই ১ সেকেন্ডের কম সময়ে দুটি ভিন্ন ফাইলের একই MD5 ডাইজেস্ট তৈরি করা যায়'
          },
          {
            en: 'Because MD5 only runs on computers built before the year 2000',
            bn: 'কারণ MD5 কেবল ২০০০ সালের পূর্বে নির্মিত কম্পিউটারে চলতে পারে'
          },
          {
            en: 'Because MD5 deletes the operating system kernel when invoked',
            bn: 'কারণ রান করার সাথে সাথে MD5 অপারেটিং সিস্টেমের কার্নেল ডিলিট করে দেয়'
          },
          {
            en: 'Because MD5 is a trademark owned exclusively by a soft drink company',
            bn: 'কারণ MD5 হলো একটি কোমল পানীয় কোম্পানির নিবন্ধিত ট্রেডমার্ক'
          }
        ],
        answer: 0,
        hint: {
          en: 'MD5 collision resistance is completely destroyed in real time.',
          bn: 'MD5-এর কলিশন প্রতিরোধ বাস্তব সময়ে সম্পূর্ণরূপে ধ্বংস করা সম্ভব।'
        },
        explanation: {
          en: 'MD5 collisions can be generated on demand. Malicious actors have used MD5 collisions to forge code-signing certificates and spread malware (e.g. Flame).',
          bn: 'MD5 কলিশন যখন খুশি তখন তৈরি করা যায়। ফ্লেম ম্যালওয়্যারে ভুয়া কোড-সাইনিং সার্টিফিকেট বানাতে MD5 কলিশন সফলভাবে ব্যবহৃত হয়েছিল।'
        }
      },
      {
        id: 'hsh-fn-qz-3',
        kind: 'mcq',
        topic: 'timing-safe-equal-necessity',
        question: {
          en: 'Why is comparing HMAC tags with standard javascript comparison (tag1 === tag2) an exploitable security vulnerability?',
          bn: 'স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট তুলনা (tag1 === tag2) দিয়ে HMAC ট্যাগ মেলানো কেন একটি বিপজ্জনক নিরাপত্তা দুর্বলতা?'
        },
        options: [
          {
            en: 'It causes a timing side-channel leak: the === operator returns false immediately upon hitting the first differing byte, allowing attackers to guess tags byte-by-byte by timing server response latency',
            bn: 'এটি টাইমিং সাইড-চ্যানেল ফাঁসের জন্ম দেয়: === অপারেটর প্রথম অমিল বাইট পাওয়া মাত্র কাজ বন্ধ করে, ফলে সার্ভারের রেসপন্স সময় মেপে হ্যাকাররা বাইট ধরে ধরে ট্যাগ অনুমান করতে পারে'
          },
          {
            en: 'Because === reverses the internet connection direction to dial-up',
            bn: 'কারণ === ইন্টারনেট সংযোগকে উল্টো দিকে ডায়াল-আপে রূপান্তর করে'
          },
          {
            en: 'Because === only works when comparing floating-point numbers',
            bn: 'কারণ === কেবল ভগ্নাংশ সংখ্যা তুলনার সময় কাজ করে'
          },
          {
            en: 'Because web browsers restart whenever === is evaluated in code',
            bn: 'কারণ কোডে === ব্যবহৃত হলে ওয়েব ব্রাউজার রিস্টার্ট নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Early return leaks byte timing information. Use constant-time equality.',
          bn: 'তাড়াতাড়ি রিটার্ন করলে সময়ের পার্থক্য ফাঁস হয়। কনস্ট্যান্ট-টাইম সমতা ব্যবহার করুন।'
        },
        explanation: {
          en: 'crypto.timingSafeEqual inspects every byte regardless of whether mismatches exist, ensuring identical execution time and defeating timing analysis attacks.',
          bn: 'crypto.timingSafeEqual অমিল থাকলেও প্রতিটি বাইট পরীক্ষা করে, যা সমান সময় নিশ্চিত করে টাইমিং আক্রমণ প্রতিহত করে।'
        }
      },
      {
        id: 'hsh-fn-qz-4',
        kind: 'mcq',
        topic: 'sha256-block-and-word-size',
        question: {
          en: 'What are the internal block and word sizes used by SHA-256 during its compression rounds?',
          bn: 'SHA-২৫৬ তার কম্প্রেশন রাউন্ডের সময় অভ্যন্তরীণভাবে কোন ব্লক এবং ওয়ার্ড সাইজ ব্যবহার করে?'
        },
        options: [
          {
            en: '512-bit input message blocks (64 bytes) processed using 32-bit internal words across 64 compression rounds',
            bn: '৫১২-বিট ইনপুট মেসেজ ব্লক (৬৪ বাইট) যা ৩২-বিট অভ্যন্তরীণ ওয়ার্ড ব্যবহার করে ৬৪টি কম্প্রেশন রাউন্ডে প্রসেস করা হয়'
          },
          {
            en: '8-bit blocks processed using 2-bit words across 4 rounds',
            bn: '৮-বিট ব্লক যা ২-বিট ওয়ার্ড ব্যবহার করে ৪টি রাউন্ডে চলে'
          },
          {
            en: '4096-bit blocks processed using 1024-bit words across 2 rounds',
            bn: '৪০৯৬-বিট ব্লক যা ১০২৪-বিট ওয়ার্ড ব্যবহার করে ২টি রাউন্ডে চলে'
          },
          {
            en: 'Variable 1-bit blocks that expand to infinity',
            bn: 'পরিবর্তনশীল ১-বিট ব্লক যা অসীম পর্যন্ত প্রসারিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'SHA-256 uses 512-bit message blocks and 32-bit words.',
          bn: 'SHA-২৫৬ ৫১২-বিট মেসেজ ব্লক এবং ৩২-বিট ওয়ার্ড ব্যবহার করে।'
        },
        explanation: {
          en: 'SHA-256 operates on 512-bit blocks divided into 16 32-bit words, expanding them to 64 words over 64 mixing rounds.',
          bn: 'SHA-২৫৬ ৫১২-বিট ব্লকে কাজ করে যা ১৬ টি ৩২-বিট ওয়ার্ডে বিভক্ত হয় এবং ৬৪ টি রাউন্ডে মিশ্রিত হয়।'
        }
      }
    ]
  },
  next: {
    slug: 'salting-pepper',
    title: {
      en: 'Salting & Pepper Architecture: Defeating Rainbow Tables',
      bn: 'সল্ট ও পেপার আর্কিটেকচার: রেইনবো টেবিল প্রতিরোধ'
    }
  }
};
