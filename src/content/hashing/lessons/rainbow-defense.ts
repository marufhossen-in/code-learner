import type { Lesson } from '../../../lib/types';

export const RainbowDefenseLesson: Lesson = {
  slug: 'rainbow-defense',
  tech: 'hashing',
  title: {
    en: 'Rainbow Tables & Precomputed Attacks: Reduction Chains & Defense',
    bn: 'রেইনবো টেবিল ও প্রি-কম্পিউটেড আক্রমণ: রিডাকশন চেইন ও প্রতিরোধ'
  },
  summary: {
    en: 'Master the time-memory tradeoff of rainbow tables: understand reduction functions, chain endpoints, lookup traversal, and why 16-byte random salts completely neutralize precomputed tables.',
    bn: 'রেইনবো টেবিলের টাইম-মেমোরি ট্রেডঅফ আয়ত্ত করুন: রিডাকশন ফাংশন, চেইন এন্ডপয়েন্ট, লুকআপ ট্রাভার্সাল এবং কেন ১৬-বাইট র্যান্ডম সল্ট প্রি-কম্পিউটেড টেবিলকে সম্পূর্ণ অকেজো করে দেয় তা জানুন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'time-memory-tradeoff',
      text: {
        en: 'The Time-Memory Tradeoff: Hellman Chains and Rainbow Tables',
        bn: 'টাইম-মেমোরি ট্রেডঅফ: হেলম্যান চেইন ও রেইনবো টেবিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When attacking unsalted password hashes, hackers face a classic engineering dilemma known as the time-memory tradeoff. On one extreme is pure brute-force: compute hashes on the fly during the attack. This uses zero memory but requires immense computation time. On the opposite extreme is a complete precomputed dictionary: precompute the hash of every possible 8-character password and store them in an indexed database. This enables instant lookup in 1 millisecond, but storing hundreds of billions of hash-password pairs requires petabytes of disk space.',
        bn: 'সল্টবিহীন পাসওয়ার্ড হ্যাশের ওপর আক্রমণ চালাতে গিয়ে হ্যাকাররা টাইম-মেমোরি ট্রেডঅফ নামক একটি ধ্রুপদী ইঞ্জিনিয়ারিং সংকটের মুখোমুখি হয়। এক প্রান্তে রয়েছে সরাসরি ব্রুট-ফোর্স: আক্রমণের সময় সরাসরি হ্যাশ গণনা করা। এতে কোনো মেমোরি লাগে না কিন্তু প্রচুর সময় ও কম্পিউটিং ক্ষমতার প্রয়োজন হয়। অন্য প্রান্তে রয়েছে সম্পূর্ণ প্রি-কম্পিউটেড ডিকশনারি: সম্ভাব্য সকল ৮-অক্ষরের পাসওয়ার্ডের হ্যাশ আগে থেকেই হিসাব করে ইনডেক্স করা ডাটাবেসে জমা রাখা। এতে ১ মিলিসেকেন্ডে ফলাফল পাওয়া যায় ঠিকই, কিন্তু শত শত কোটি হ্যাশ জমা রাখতে পেটাবাইট আকারের স্টোরেজের প্রয়োজন হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 2003, Philippe Oechslin refined Martin Hellman earlier work to invent the rainbow table. A rainbow table strikes an optimal mathematical compromise between storage and computation. Instead of storing every single password and its hash, a rainbow table organizes password space into long mathematical chains. By storing only the first starting password and the final ending password of each chain, it shrinks storage requirements by thousands of times while still cracking unsalted hashes in seconds.',
        bn: '২০০৩ সালে ফিলিপ ওয়েখসলিন মার্টিন হেলম্যানের আগের গবেষণাকে উন্নত করে রেইনবো টেবিল উদ্ভাবন করেন। রেইনবো টেবিল স্টোরেজ এবং কম্পিউটেশনের মধ্যে একটি চমৎকার গাণিতিক আপস তৈরি করে। প্রতিটি পাসওয়ার্ড ও হ্যাশ আলাদাভাবে সংরক্ষণ না করে এটি পাসওয়ার্ডগুলোকে দীর্ঘ গাণিতিক চেইনে বিন্যস্ত করে। প্রতিটি চেইনের শুধুমাত্র শুরুর পাসওয়ার্ড এবং সমাপ্তি পাসওয়ার্ড সংরক্ষণ করে এটি স্টোরেজের আকার হাজার গুণ কমিয়ে আনে এবং কয়েক সেকেন্ডের মধ্যেই সল্টবিহীন হ্যাশ ভেঙে ফেলে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Rainbow Reduction Chains: The Alternating Hash and Reduction Cycle',
        bn: 'রেইনবো রিডাকশন চেইন: পর্যায়ক্রমিক হ্যাশ ও রিডাকশন চক্র'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Rainbow table reduction chain mechanism">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Chain Walk Diagram -->
  <g transform="translate(30, 30)">
    <rect width="680" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="340" y="26" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">A Single Rainbow Chain (Alternating Hash H and Reduction R)</text>
    
    <!-- P0 -->
    <rect x="25" y="45" width="80" height="36" rx="4" fill="#0284c7" />
    <text x="65" y="68" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">P₀ "aaaa"</text>
    <text x="65" y="98" fill="#38bdf8" font-size="10" text-anchor="middle">Stored in Table</text>

    <!-- Arrow H0 -->
    <path d="M 110 63 L 140 63" stroke="#94a3b8" stroke-width="2" />
    <text x="125" y="55" fill="#94a3b8" font-size="9" text-anchor="middle">H</text>

    <!-- H0 -->
    <rect x="145" y="48" width="70" height="30" rx="4" fill="#334155" />
    <text x="180" y="68" fill="#cbd5e1" font-size="11" text-anchor="middle">H₀ (Hash)</text>

    <!-- Arrow R1 -->
    <path d="M 220 63 L 250 63" stroke="#f59e0b" stroke-width="2" />
    <text x="235" y="55" fill="#f59e0b" font-size="9" text-anchor="middle">R₁</text>

    <!-- P1 -->
    <rect x="255" y="48" width="70" height="30" rx="4" fill="#1e3a5f" />
    <text x="290" y="68" fill="#93c5fd" font-size="11" text-anchor="middle">P₁</text>

    <!-- Arrow H1 -->
    <path d="M 330 63 L 360 63" stroke="#94a3b8" stroke-width="2" />
    <text x="345" y="55" fill="#94a3b8" font-size="9" text-anchor="middle">H</text>

    <!-- H1 -->
    <rect x="365" y="48" width="70" height="30" rx="4" fill="#334155" />
    <text x="400" y="68" fill="#cbd5e1" font-size="11" text-anchor="middle">H₁</text>

    <!-- Dots -->
    <text x="455" y="68" fill="#94a3b8" font-size="14" font-weight="bold" text-anchor="middle">...</text>

    <!-- Arrow Rk -->
    <path d="M 475 63 L 505 63" stroke="#f59e0b" stroke-width="2" />
    <text x="490" y="55" fill="#f59e0b" font-size="9" text-anchor="middle">R₅</text>

    <!-- Pk End -->
    <rect x="510" y="45" width="80" height="36" rx="4" fill="#047857" />
    <text x="550" y="68" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">P₅ "ffba"</text>
    <text x="550" y="98" fill="#34d399" font-size="10" text-anchor="middle">Stored in Table</text>

    <text x="340" y="132" fill="#e2e8f0" font-size="11" text-anchor="middle">Table Entry on Disk: Row = [ Start: "aaaa",  End: "ffba" ] (Intermediate values discarded)</text>
  </g>

  <!-- Salt Defense Breakdown -->
  <g transform="translate(30, 200)">
    <rect width="680" height="105" rx="8" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="26" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">Why Salt Completely Neutralizes Rainbow Tables</text>
    <text x="340" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">Rainbow tables assume H(P) produces a deterministic hash from a known static universe.</text>
    <text x="340" y="70" fill="#cbd5e1" font-size="11" text-anchor="middle">Adding a unique 16-byte random salt changes every hash: H(P || salt). The table chains become completely invalid.</text>
    <text x="340" y="90" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">An attacker would need to build a brand new 100 GB rainbow table for every single user account.</text>
  </g>
</svg>`,
      caption: {
        en: 'The rainbow chain cycle: hashes are mapped back into plaintexts via reduction functions. Storing only start and end points compresses table size dramatically.',
        bn: 'রেইনবো চেইন চক্র: রিডাকশন ফাংশনের মাধ্যমে হ্যাশ পুনরায় প্লেইনটেক্সটে রূপান্তর হয়। কেবল শুরু ও শেষের মান সংরক্ষণ করে টেবিলের আকার বহুগুণ সংকুচিত করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Reduction Function',
          def: {
            en: 'A mathematical mapping function that transforms a fixed-length cryptographic hash digest back into a candidate plaintext password.',
            bn: 'একটি গাণিতিক ম্যাপিং ফাংশন যা নির্দিষ্ট দৈর্ঘ্যের ক্রিপ্টোগ্রাফিক হ্যাশ ডাইজেস্টকে আবার সম্ভাব্য প্লেইনটেক্সট পাসওয়ার্ডে রূপান্তরিত করে।'
          }
        },
        {
          term: 'Rainbow Chain',
          def: {
            en: 'An alternating sequence of hash calculations and reduction mappings beginning at a start word and terminating at an endpoint word.',
            bn: 'একটি শুরুর শব্দ থেকে শুরু হয়ে এবং একটি শেষ শব্দে সমাপ্ত হওয়া হ্যাশ গণনা ও রিডাকশন ম্যাপিংয়ের একটি পর্যায়ক্রমিক গাণিতিক চেইন।'
          }
        },
        {
          term: 'Chain Merge',
          def: {
            en: 'A collision where two distinct reduction chains produce the same intermediate value, causing them to merge and waste storage space.',
            bn: 'একটি কলিশন যেখানে দুটি ভিন্ন রিডাকশন চেইন একই মধ্যবর্তী মান তৈরি করে, যার ফলে তারা একীভূত হয়ে মূল্যবান স্টোরেজ নষ্ট করে।'
          }
        },
        {
          term: 'Work Factor',
          def: {
            en: 'The tunable computational cost (CPU iterations or memory requirements) required to compute a single password hash.',
            bn: 'একটি পাসওয়ার্ড হ্যাশ গণনা করতে প্রয়োজনীয় নিয়ন্ত্রণযোগ্য কম্পিউটেশনাল খরচ (সিপিইউ ইটারেশন বা মেমোরি খরচ)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'how-reduction-functions-work',
      text: {
        en: 'How Reduction Functions Work and Why Collisions Occur',
        bn: 'রিডাকশন ফাংশন কীভাবে কাজ করে এবং কলিশন কেন ঘটে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A cryptographic hash function compresses an arbitrary string into a 256-bit hexadecimal string. A reduction function does the exact inverse direction: it maps that 256-bit hash back into a valid candidate password (for example, a 6-letter lowercase English string). It is vital to understand that a reduction function is NOT an encryption inverter or decryption key; it is simply a modular mapping rule that translates large integers into characters.',
        bn: 'একটি ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন যেকোনো স্ট্রিংকে সংকুচিত করে ২৫৬-বিট হেক্সাডেসিমেল স্ট্রিংয়ে রূপান্তর করে। আর রিডাকশন ফাংশন ঠিক বিপরীত কাজটি করে: এটি সেই ২৫৬-বিট হ্যাশকে আবার একটি বৈধ পাসওয়ার্ডে (যেমন ৬ অক্ষরের ছোট হাতের ইংরেজি শব্দে) ম্যাপ করে। মনে রাখা জরুরি যে রিডাকশন ফাংশন কিন্তু কোনো ডিক্রিপশন কি বা ইনভার্স অ্যালগরিদম নয়; এটি সাধারণ একটি মডুলার ম্যাপিং সূত্র যা বড় সংখ্যাকে অক্ষরে সাজিয়ে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early Hellman tables, identical reduction functions were used across every column. This produced a serious flaw known as chain merging. If two separate chains ever produced the same candidate word at any point, all subsequent links collapsed into identical clones, wasting disk space. Rainbow tables overcome this by assigning a distinct reduction function to each column (such as R1, R2, and R3). Chains can only collide if they produce matching words at the exact same column index, giving the technique its rainbow moniker and far superior coverage.',
        bn: 'শুরুর দিকের হেলম্যান টেবিলে প্রতিটি কলামে হুবহু একই রিডাকশন ফাংশন ব্যবহার করা হতো। এর ফলে চেইন মার্জিং নামক মারাত্মক ত্রুটি দেখা দিত। দুটি ভিন্ন চেইনের মান কোনো বিন্দুতে মিলে গেলেই পরবর্তী সকল ধাপ হুবহু ক্লোন হয়ে যেত, যা মূল্যবান ডিস্কের জায়গা নষ্ট করত। রেইনবো টেবিল প্রতিটি কলামের জন্য আলাদা রিডাকশন ফাংশন (যেমন R1, R2, ও R3) বরাদ্দ করে এই সমস্যা দূর করে। দুটি চেইনের কলাম নম্বর একই না হলে তারা মার্জ করতে পারে না, যে কারণে এর নাম হয়েছে রেইনবো টেবিল এবং এর কভারেজ বহুগুণ বেড়ে গেছে।'
      }
    },
    {
      type: 'heading',
      id: 'how-lookups-work',
      text: {
        en: 'How an Attacker Traverses a Rainbow Table to Crack Hashes',
        bn: 'হ্যাকার কীভাবে রেইনবো টেবিল ট্রাভার্স করে হ্যাশ ক্র্যাক করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To crack an unsalted target hash, an attacker checks whether it appears inside any precomputed chain. They first feed the hash into the table closing reduction function and inspect the resulting candidate word against all stored endpoints. If no match appears, they walk one step backward, applying earlier reduction and hashing steps before checking the endpoints again.',
        bn: 'কোনো সল্টবিহীন টার্গেট হ্যাশ ভাঙতে আক্রমণকারী প্রথমে দেখে এটি টেবিলের কোনো চেইনে রয়েছে কিনা। তারা প্রথমে হ্যাশটিকে টেবিলের শেষ রিডাকশন ফাংশনে ইনপুট দেয় এবং প্রাপ্ত প্রার্থী শব্দটি সংরক্ষিত কোনো এন্ডপয়েন্টের সাথে মেলে কিনা তা পরীক্ষা করে। যদি কোনো মিল না থাকে, তবে তারা এক ধাপ পেছনে সরে আসে এবং পূর্ববর্তী রিডাকশন ও হ্যাশিং ধাপগুলো চালিয়ে আবার এন্ডপয়েন্ট চেক করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Once an endpoint matches a row in the table, the attacker loads that row starting password P0. They walk forward along the chain from P0, hashing each password until they produce the target hash H. The password right before H in the chain is the recovered plaintext password! The entire lookup requires only a few hundred hash calculations instead of billions.',
        bn: 'টেবিলের কোনো সারির শেষ মানের সাথে মিল পাওয়া মাত্রই আক্রমণকারী সেই সারির শুরুর পাসওয়ার্ড P0 বের করে। তারপর সে P0 থেকে সামনের দিকে চেইন ধরে এগিয়ে যায় এবং প্রতিটি পাসওয়ার্ড হ্যাশ করে যতক্ষণ না মূল টার্গেট হ্যাশ H তৈরি হয়। চেইনে ঠিক H-এর আগের পাসওয়ার্ডটিই হলো শিকারের মূল প্লেইনটেক্সট পাসওয়ার্ড! এই সম্পূর্ণ লুকআপে শত কোটি গণনার বদলে মাত্র কয়েক শত হ্যাশ গণনার প্রয়োজন হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-rainbow-engine',
      text: {
        en: 'Executable Node.js Engine: Rainbow Chain Generation & Salt Defense',
        bn: 'রানযোগ্য Node.js ইঞ্জিন: রেইনবো চেইন তৈরি ও সল্ট প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete educational Node.js engine simulating rainbow table mechanics. It builds 3 reduction chains of length 5, stores only their start and end points, cracks an unsalted hash through endpoint traversal, and demonstrates how a 16-byte random salt renders the precomputed table completely useless.',
        bn: 'নিচে রেইনবো টেবিলের মেকানিজম প্রদর্শনকারী একটি সম্পূর্ণ শিক্ষামূলক Node.js ইঞ্জিন দেওয়া হলো। এটি ৫ দৈর্ঘ্যের ৩টি রিডাকশন চেইন তৈরি করে, কেবল তাদের শুরু ও শেষের মান সংরক্ষণ করে, এন্ডপয়েন্ট ট্রাভার্সালের মাধ্যমে একটি সল্টবিহীন হ্যাশ ভেঙে ফেলে এবং দেখায় কীভাবে ১৬-বাইটের র্যান্ডম সল্ট সম্পূর্ণ টেবিলটিকে অকেজো করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Build 3 rainbow chains of length 5, crack unsalted target hash, and demonstrate salt defense',
        bn: '৫ দৈর্ঘ্যের ৩টি রেইনবো চেইন তৈরি, সল্টবিহীন টার্গেট হ্যাশ ক্র্যাক এবং সল্ট প্রতিরোধ প্রদর্শন'
      },
      code: `const crypto = require('crypto');

function md5(text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

// Educational reduction function: maps hash to 4-character candidate string
function reduce(hashHex, step) {
  const alphabet = 'abcdef';
  let candidate = '';
  for (let i = 0; i < 4; i++) {
    const byteVal = parseInt(hashHex.slice(i * 2, i * 2 + 2), 16);
    candidate += alphabet[(byteVal + step) % alphabet.length];
  }
  return candidate;
}

// Build a chain: start -> H0 -> R1 -> P1 -> H1 -> ... -> P_end
function buildChain(startWord, chainLength) {
  let current = startWord;
  for (let step = 0; step < chainLength; step++) {
    const h = md5(current);
    current = reduce(h, step);
  }
  return { start: startWord, end: current };
}

// Step 1: Precompute table with 3 chains of length 5
const table = [
  buildChain('aaaa', 5),
  buildChain('bbbb', 5),
  buildChain('cccc', 5)
];

// Step 2: Victim uses unsalted password generated within chain 1 (from 'bbbb')
let victimWord = 'bbbb';
for (let s = 0; s < 2; s++) {
  victimWord = reduce(md5(victimWord), s);
}
const unsaltedTargetHash = md5(victimWord);

// Step 3: Attacker traverses rainbow table to locate endpoint match
let recoveredPassword = null;
for (let offset = 4; offset >= 0; offset--) {
  let testHash = unsaltedTargetHash;
  let testCandidate = '';
  for (let step = offset; step < 5; step++) {
    testCandidate = reduce(testHash, step);
    testHash = md5(testCandidate);
  }
  const matchingRow = table.find(row => row.end === testCandidate);
  if (matchingRow) {
    // Regenerate forward from matching row start
    let walkWord = matchingRow.start;
    for (let s = 0; s < 5; s++) {
      if (md5(walkWord) === unsaltedTargetHash) {
        recoveredPassword = walkWord;
        break;
      }
      walkWord = reduce(md5(walkWord), s);
    }
    if (recoveredPassword) break;
  }
}

// Step 4: Defense - Victim uses 16-byte random salt
const salt = crypto.randomBytes(16).toString('hex');
const saltedHash = md5(victimWord + salt);
const saltedMatch = table.some(row => row.end === reduce(saltedHash, 4));

console.log(\`[Rainbow Engine] Built 3 reduction chains (length 5). Stored start and end points.\`);
console.log(\`[Lookup Attack] Cracked unsalted hash '\${unsaltedTargetHash.slice(0, 8)}...': recovered '\${recoveredPassword}'.\`);
console.log(\`[Salt Defense] Salted hash lookup failed: 0/3 chains matched. Precomputation neutralized (\${!saltedMatch}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Demise of Rainbow Tables in Modern Cyber Defense',
        bn: 'আধুনিক সাইবার প্রতিরক্ষায় রেইনবো টেবিলের বিলুপ্তি'
      },
      text: {
        en: 'In the 2000s, rainbow tables were the terror of unsalted MD5 and NTLM hashes. Today, two architectural shifts made rainbow tables practically obsolete. First, every modern password system uses unique random salts per user. Second, modern GPU clusters running Hashcat compute billions of hashes on the fly faster than disks can stream petabytes of precomputed tables.',
        bn: '২০০০-এর দশকে রেইনবো টেবিল ছিল সল্টবিহীন MD5 ও NTLM হ্যাশের চরম আতঙ্ক। আজ দুটি প্রধান পরিবর্তনের কারণে রেইনবো টেবিল মূলত অপ্রচলিত। প্রথমত, প্রতিটি আধুনিক সিস্টেম ব্যবহারকারী প্রতি ইউনিক র্যান্ডম সল্ট ব্যবহার করে। দ্বিতীয়ত, হ্যাশক্যাট চালিত আধুনিক জিপিইউ ক্লাস্টার হার্ডডিস্ক থেকে পেটাবাইট ডাটা পড়ার চেয়ে দ্রুত সরাসরি সেকেন্ডে বিলিয়ন বিলিয়ন হ্যাশ তাৎক্ষণিকভাবে গণনা করতে পারে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Rainbow Chain Traversal Simulator',
        bn: 'রেইনবো চেইন ট্রাভার্সাল সিমুলেটর'
      },
      description: {
        en: 'Run a mini rainbow chain walk: see how the start point, reduction function, and hash cycles produce the endpoint.',
        bn: 'একটি ছোট রেইনবো চেইন চালান: শুরুর মান, রিডাকশন ফাংশন এবং হ্যাশ চক্র কীভাবে শেষ মান তৈরি করে তা দেখুন।'
      },
      code: `const crypto = require('crypto');

function simpleHash(text) {
  return crypto.createHash('sha256').update(text).digest('hex').slice(0, 8);
}

function simpleReduce(hashHex, step) {
  const letters = 'abcdef';
  let out = '';
  for (let i = 0; i < 4; i++) {
    const val = parseInt(hashHex.slice(i * 2, i * 2 + 2), 16);
    out += letters[(val + step) % letters.length];
  }
  return out;
}

const start = 'pass';
let current = start;
console.log('Chain Start:', current);

for (let step = 0; step < 3; step++) {
  const h = simpleHash(current);
  current = simpleReduce(h, step);
  console.log(\`Step \${step + 1}: hash = \${h} -> candidate = \${current}\`);
}

console.log('Chain Endpoint stored in table:', current);
console.log('Table stores ONLY:', [start, current]);`,
      tests: [
        {
          name: {
            en: 'Generates chain endpoint successfully',
            bn: 'সফলভাবে চেইন এন্ডপয়েন্ট তৈরি করে'
          },
          expected: 'Chain Endpoint stored in table'
        },
        {
          name: {
            en: 'Stores only start and endpoint values',
            bn: 'কেবল শুরু ও শেষের মান সংরক্ষণ করে'
          },
          expected: 'Table stores ONLY'
        }
      ]
    }
  ],
  exercises: [
    {
      id: "hsh-rb-ex-1",
      kind: 'mcq',
      topic: "rainbow-core-space-saving",
      question: {
        en: "What fundamental insight allows a rainbow table to reduce storage space by thousands of times compared to a full precomputed lookup dictionary?",
        bn: "কোন মৌলিক কৌশলের কারণে একটি রেইনবো টেবিল সাধারণ লুকআপ ডিকশনারির চেয়ে হাজার গুণ কম মেমোরি ব্যবহার করতে পারে?"
      },
      options: [
        {
          en: "It stores only the starting and ending plaintexts of long reduction chains, discarding all intermediate hashes",
          bn: "এটি দীর্ঘ রিডাকশন চেইনের কেবল শুরু ও শেষের প্লেইনটেক্সট সংরক্ষণ করে এবং মধ্যবর্তী সব হ্যাশ মুছে ফেলে"
        },
        {
          en: "It compresses hashes using standard gzip compression",
          bn: "এটি স্ট্যান্ডার্ড gzip কম্প্রেশন ব্যবহার করে হ্যাশগুলোকে সংকুচিত করে"
        },
        {
          en: "It converts cryptographic hashes into audio files",
          bn: "এটি ক্রিপ্টোগ্রাফিক হ্যাশগুলোকে অডিও ফাইলে রূপান্তর করে রাখে"
        },
        {
          en: "It deletes all vowels from password strings",
          bn: "এটি পাসওয়ার্ড স্ট্রিং থেকে সকল স্বরবর্ণ (vowels) মুছে ফেলে"
        }
      ],
      answer: 0,
      hint: {
        en: "Intermediate values are regenerated on the fly during lookup.",
        bn: "মধ্যবর্তী মানগুলো লুকআপের সময় প্রয়োজনমতো হিসাব করে নেওয়া হয়।"
      },
      explanation: {
        en: "By chaining thousands of alternating hash and reduction steps together and storing only the chain start and end points, rainbow tables discard the vast majority of data from disk, regenerating it on the fly during lookups.",
        bn: "হাজার হাজার পর্যায়ক্রমিক হ্যাশ ও রিডাকশন ধাপ একত্রে যুক্ত করে এবং কেবল শুরু ও শেষের মান সংরক্ষণ করে রেইনবো টেবিল ডিস্কের বেশিরভাগ তথ্য বাদ দিতে পারে, যা লুকআপের সময় পুনরায় গণনা করে নেওয়া হয়।"
      }
    },
    {
      id: "hsh-rb-ex-2",
      kind: 'mcq',
      topic: "varying-reduction-functions",
      question: {
        en: "Why does a rainbow table use a different reduction function at each step of a chain (R1, R2, R3, etc.) instead of a single static function?",
        bn: "একটি রেইনবো টেবিল একটি স্থির ফাংশনের বদলে প্রতিটি ধাপে কেন ভিন্ন ভিন্ন রিডাকশন ফাংশন (R1, R2, R3 ইত্যাদি) ব্যবহার করে?"
      },
      options: [
        {
          en: "To prevent chain merging collisions, ensuring that chains crossing at different steps do not become redundant duplicates",
          bn: "চেইন মার্জিং কলিশন রোধ করতে, যাতে ভিন্ন ধাপে মিলিত হওয়া চেইনগুলো অপ্রয়োজনীয় ডুপ্লিকেট না হয়ে যায়"
        },
        {
          en: "To allow passwords to contain emojis and symbols",
          bn: "পাসওয়ার্ডে ইমোজি এবং স্পেশাল চিহ্ন ব্যবহারের সুবিধা দিতে"
        },
        {
          en: "Because computer operating systems crash if a function is called twice",
          bn: "কারণ কোনো ফাংশন দুইবার কল করলে অপারেটিং সিস্টেম ক্র্যাশ করে"
        },
        {
          en: "To automatically decrypt AES ciphertexts",
          bn: "স্বয়ংক্রিয়ভাবে AES সাইফারটেক্সট ডিক্রিপ্ট করতে"
        }
      ],
      answer: 0,
      hint: {
        en: "Identical reduction functions make colliding chains collapse into exact duplicates.",
        bn: "একই রিডাকশন ফাংশন থাকলে চেইনগুলো মিলে গিয়ে হুবহু এক হয়ে যায়।"
      },
      explanation: {
        en: "In early Hellman tables, identical reduction functions caused any two chains that hit the same password to merge permanently, wasting memory. By varying the reduction function per column, chains only merge if they collide at the exact same step.",
        bn: "আগের হেলম্যান টেবিলে একই রিডাকশন ফাংশন থাকায় ২টি চেইন একই পাসওয়ার্ডে পৌঁছালে চিরতরে এক হয়ে যেত, ফলে মেমোরি নষ্ট হতো। কলাম ভেদে রিডাকশন ফাংশন বদলে দিলে কেবল হুবহু একই ধাপে মিললে তবেই মার্জ হয়।"
      }
    },
    {
      id: "hsh-rb-ex-3",
      kind: 'mcq',
      topic: "salt-destroys-precomputation",
      question: {
        en: "Why does adding a unique 16-byte random salt to each user password completely destroy rainbow table attacks?",
        bn: "প্রতিটি ব্যবহারকারীর পাসওয়ার্ডে ১৬-বাইটের ইউনিক র্যান্ডম সল্ট যোগ করলে কেন রেইনবো টেবিল আক্রমণ সম্পূর্ণ ধ্বংস হয়ে যায়?"
      },
      options: [
        {
          en: "A precomputed table is valid for only one specific salt; with unique salts, the attacker must generate a new multi-gigabyte table for every single account",
          bn: "একটি প্রি-কম্পিউটেড টেবিল কেবল একটি নির্দিষ্ট সল্টের জন্য কাজ করে; প্রতিটি অ্যাকাউন্টে ইউনিক সল্ট থাকলে প্রতিটির জন্য আলাদা বিশাল টেবিল তৈরি করতে হয় যা অসম্ভব"
        },
        {
          en: "Salt makes password hashes readable in plain English",
          bn: "সল্ট ব্যবহার করলে পাসওয়ার্ড হ্যাশ সাধারণ ইংরেজিতে পড়া যায়"
        },
        {
          en: "Salt deletes the hash from the database server",
          bn: "সল্ট ডাটাবেস সার্ভার থেকে হ্যাশ মুছে ফেলে"
        },
        {
          en: "Salt forces the CPU to run at half its clock speed",
          bn: "সল্ট সিপিইউকে তার অর্ধেক গতিতে চলতে বাধ্য করে"
        }
      ],
      answer: 0,
      hint: {
        en: "Tables cannot be amortized across multiple users when each user has a distinct salt.",
        bn: "প্রতিটি অ্যাকাউন্টে আলাদা সল্ট থাকলে একটি টেবিল একাধিক ব্যবহারকারীর ওপর কাজে লাগানো যায় না।"
      },
      explanation: {
        en: "Rainbow tables rely on precomputing lookups once and reusing them against millions of stolen hashes. When every user has a unique 16-byte salt, precomputation offers zero advantage because tables cannot be amortized across accounts.",
        bn: "রেইনবো টেবিলের মূল শক্তি হলো একবার হিসাব করে কোটি কোটি চুরিকৃত হ্যাশের ওপর তা ব্যবহার করা। কিন্তু প্রতি অ্যাকাউন্টে ইউনিক ১৬-বাইট সল্ট থাকলে এই সুবিধা নষ্ট হয়ে যায়, কারণ একটি টেবিল একাধিক অ্যাকাউন্টে আর কাজে লাগানো যায় না।"
      }
    },
    {
      id: "hsh-rb-ex-4",
      kind: 'mcq',
      topic: "modern-cracking-gpu-shift",
      question: {
        en: "Why have modern attackers largely abandoned disk-based rainbow tables in favor of dynamic GPU brute force using Hashcat?",
        bn: "আধুনিক আক্রমণকারীরা ডিস্ক-ভিত্তিক রেইনবো টেবিল বাদ দিয়ে কেন হ্যাশক্যাট (Hashcat) দিয়ে সরাসরি জিপিইউ ব্রুট-ফোর্স পছন্দ করে?"
      },
      options: [
        {
          en: "GPU compute cores calculate billions of hashes on the fly faster than slow storage drives can stream terabytes of precomputed tables into RAM",
          bn: "স্টোরেজ ড্রাইভ থেকে টেরাবাইট ডাটা র‍্যামে পড়ার চেয়ে শক্তিশালী জিপিইউ কোর সরাসরি সেকেন্ডে বিলিয়ন বিলিয়ন হ্যাশ অনেক বেশি দ্রুত গণনা করতে পারে"
        },
        {
          en: "Hard drives cannot store data containing binary zeros",
          bn: "হার্ডড্রাইভ বাইনারি শূন্য থাকা কোনো ডাটা সংরক্ষণ করতে পারে না"
        },
        {
          en: "Rainbow tables are illegal to download in every country",
          bn: "রেইনবো টেবিল ডাউনলোড করা সকল দেশে আইনত নিষিদ্ধ"
        },
        {
          en: "Hashcat only works on mobile phones and tablets",
          bn: "হ্যাশক্যাট শুধুমাত্র মোবাইল ফোন এবং ট্যাবলেটে চলে"
        }
      ],
      answer: 0,
      hint: {
        en: "Streaming petabytes of data from disk into memory is slower than raw GPU shader compute.",
        bn: "ডিস্ক থেকে পেটাবাইট ডাটা পড়ার গতি জিপিইউর সরাসরি গণনার গতির চেয়ে অনেক ধীর।"
      },
      explanation: {
        en: "Modern GPU clusters have massive computational bandwidth. The bottleneck of rainbow tables is disk I/O and RAM throughput; searching through petabytes of precomputed chains on disk is actually slower than calculating hashes dynamically with parallel GPU shaders.",
        bn: "আধুনিক জিপিইউ ক্লাস্টারের কম্পিউটিং ক্ষমতা অবিশ্বাস্য। রেইনবো টেবিলের মূল বাধা হলো ডিস্ক I/O এবং মেমোরির গতি; ডিস্কের পেটাবাইট তথ্য ঘেঁটে দেখার চেয়ে প্যারালাল জিপিইউ শেডার দিয়ে সরাসরি হ্যাশ হিসাব করা অনেক দ্রুত।"
      }
    }
  ],
  quiz: {
    id: "rainbow-defense-quiz",
    title: {
      en: "Rainbow Tables & Precomputed Attacks Quiz",
      bn: "রেইনবো টেবিল ও প্রি-কম্পিউটেড আক্রমণ কুইজ"
    },
    questions: [
      {
        id: "hsh-rb-qz-1",
        kind: 'mcq',
        topic: "reduction-function-role",
        question: {
          en: "What is the role of a reduction function in a rainbow table?",
          bn: "রেইনবো টেবিলে রিডাকশন ফাংশনের ভূমিকা কী?"
        },
        options: [
          {
            en: "It maps a fixed-length cryptographic hash digest into a candidate plaintext password in the search space",
            bn: "এটি নির্দিষ্ট আকারের ক্রিপ্টোগ্রাফিক হ্যাশ ডাইজেস্টকে সার্চ স্পেসের একটি সম্ভাব্য প্লেইনটেক্সট পাসওয়ার্ডে ম্যাপ করে"
          },
          {
            en: "It decrypts AES-256 ciphertexts without the key",
            bn: "এটি কি ছাড়াই AES-২৫৬ সাইফারটেক্সট ডিক্রিপ্ট করে"
          },
          {
            en: "It compresses network packets to save bandwidth",
            bn: "এটি ব্যান্ডউইথ বাঁচাতে নেটওয়ার্ক প্যাকেট সংকুচিত করে"
          },
          {
            en: "It generates cryptographic prime numbers for RSA",
            bn: "এটি আরএসএ-এর জন্য ক্রিপ্টোগ্রাফিক প্রাইম নম্বর তৈরি করে"
          }
        ],
        answer: 0,
        hint: {
          en: "It maps high-entropy digests back into valid candidate passwords.",
          bn: "এটি ডাইজেস্টকে পুনরায় সার্চ স্পেসের প্রার্থী পাসওয়ার্ডে রূপান্তর করে।"
        },
        explanation: {
          en: "A reduction function is an arbitrary mathematical mapping that takes a digest output and transforms it into a valid formatted candidate password string, enabling the chain to alternate between plaintexts and hashes.",
          bn: "রিডাকশন ফাংশন হলো একটি গাণিতিক ম্যাপিং যা ডাইজেস্ট আউটপুটকে সার্চ স্পেসের একটি বৈধ পাসওয়ার্ড স্ট্রিংয়ে পরিণত করে, যার ফলে চেইনটি প্লেইনটেক্সট ও হ্যাশের মধ্যে চক্রাকারে চলতে পারে।"
        }
      },
      {
        id: "hsh-rb-qz-2",
        kind: 'mcq',
        topic: "stored-chain-data",
        question: {
          en: "What data does a rainbow table store on disk for each reduction chain?",
          bn: "একটি রেইনবো টেবিল প্রতিটি রিডাকশন চেইনের জন্য ডিস্কে কোন তথ্য জমা রাখে?"
        },
        options: [
          {
            en: "Only the starting plaintext and ending plaintext of the chain",
            bn: "চেইনের শুধুমাত্র শুরুর প্লেইনটেক্সট এবং শেষের প্লেইনটেক্সট"
          },
          {
            en: "Every single intermediate password and every hash in the chain",
            bn: "চেইনের ভেতরের প্রতিটি মধ্যবর্তী পাসওয়ার্ড এবং প্রতিটি হ্যাশ"
          },
          {
            en: "The user email address and IP location",
            bn: "ব্যবহারকারীর ইমেইল ঠিকানা এবং আইপি লোকেশন"
          },
          {
            en: "The operating system kernel binary",
            bn: "অপারেটিং সিস্টেমের কার্নেল বাইনারি"
          }
        ],
        answer: 0,
        hint: {
          en: "It discards all middle calculations to achieve massive space compression.",
          bn: "বিশাল মেমোরি সংকোচনের জন্য এটি মধ্যবর্তী সমস্ত হিসাব বাদ দিয়ে কেবল দুই প্রান্তের মান রাখে।"
        },
        explanation: {
          en: "The space efficiency of rainbow tables comes from discarding all intermediate steps. Only two words (start word and end word) are written to disk for thousands of hash calculations.",
          bn: "রেইনবো টেবিলের স্টোরেজ দক্ষতার মূল রহস্য হলো মধ্যবর্তী সব ধাপ মুছে ফেলা। হাজার হাজার হ্যাশ গণনার জন্য ডিস্কে কেবল দুটি শব্দ (শুরুর ও শেষের শব্দ) সংরক্ষণ করা হয়।"
        }
      },
      {
        id: "hsh-rb-qz-3",
        kind: 'mcq',
        topic: "argon2id-rainbow-immunity",
        question: {
          en: "Why does Argon2id make rainbow table generation mathematically impossible in practice?",
          bn: "আর্গন২আইডি (Argon2id) ব্যবহারের ফলে বাস্তবে রেইনবো টেবিল তৈরি করা কেন গাণিতিকভাবে অসম্ভব হয়ে পড়ে?"
        },
        options: [
          {
            en: "It requires huge amounts of RAM and 100 milliseconds per hash, making the billions of calculations needed to build a table take centuries",
            bn: "এটির প্রতি হ্যাশে প্রচুর র‍্যাম ও ১০০ মিলিসেকেন্ড সময় লাগে, ফলে টেবিল তৈরির জন্য প্রয়োজনীয় বিলিয়ন বিলিয়ন হিসাব করতে শত শত বছর লেগে যাবে"
          },
          {
            en: "Argon2id hashes change automatically every 5 minutes",
            bn: "আর্গন২আইডি হ্যাশ প্রতি ৫ মিনিটে স্বয়ংক্রিয়ভাবে বদলে যায়"
          },
          {
            en: "Argon2id can only run on quantum computers",
            bn: "আর্গন২আইডি শুধুমাত্র কোয়ান্টাম কম্পিউটারে চলতে পারে"
          },
          {
            en: "Argon2id does not produce hexadecimal outputs",
            bn: "আর্গন২আইডি কোনো হেক্সাডেসিমেল আউটপুট দেয় না"
          }
        ],
        answer: 0,
        hint: {
          en: "Memory hardness and high work factor explode table generation time into centuries.",
          bn: "মেমরি হার্ডনেস এবং উচ্চ কম্পিউটেশনাল খরচের কারণে টেবিল তৈরির সময় শত বছর পেরিয়ে যায়।"
        },
        explanation: {
          en: "Generating a rainbow table requires precomputing hundreds of billions of hash evaluations. When each hash takes 100 milliseconds and 64 megabytes of memory, table precomputation becomes completely impossible.",
          bn: "একটি রেইনবো টেবিল তৈরি করতে শত শত কোটি হ্যাশ গণনার প্রয়োজন হয়। প্রতিটি হ্যাশে যখন ১০০ মিলিসেকেন্ড ও ৬৪ মেগাবাইট মেমোরি লাগে, তখন টেবিল তৈরি করার সময় শত বছর ছাড়িয়ে যায়, যা অসম্ভব।"
        }
      },
      {
        id: "hsh-rb-qz-4",
        kind: 'mcq',
        topic: "chain-merge-resolution",
        question: {
          en: "What is a \"chain merge\" in precomputed hash tables and how do rainbow tables prevent it?",
          bn: "প্রি-কম্পিউটেড হ্যাশ টেবিলে \"চেইন মার্জ\" কী এবং রেইনবো টেবিল কীভাবে তা প্রতিরোধ করে?"
        },
        options: [
          {
            en: "Two chains collide on a value and duplicate remaining steps; rainbow tables prevent it by using distinct reduction functions per column",
            bn: "দুটি চেইনের একটি মান মিলে গেলে বাকি সব ধাপ ডুপ্লিকেট হয়ে যায়; রেইনবো টেবিল কলাম ভেদে আলাদা রিডাকশন ফাংশন দিয়ে তা প্রতিরোধ করে"
          },
          {
            en: "The database server combines two hard drives into a RAID 0 array",
            bn: "ডাটাবেস সার্ভার দুটি হার্ডড্রাইভকে RAID 0 অ্যারেতে যুক্ত করে"
          },
          {
            en: "A user creates two accounts with the same username",
            bn: "ব্যবহারকারী একই ইউজারনেম দিয়ে দুটি অ্যাকাউন্ট তৈরি করে"
          },
          {
            en: "A Wi-Fi network merges two frequency channels together",
            bn: "ওয়াইফাই নেটওয়ার্ক দুটি ফ্রিকোয়েন্সি চ্যানেলকে একসাথে যুক্ত করে"
          }
        ],
        answer: 0,
        hint: {
          en: "Color-coded reduction functions per column prevent cross-step merges.",
          bn: "প্রতি কলামের ভিন্ন ভিন্ন রিডাকশন ফাংশন ভিন্ন ধাপের মার্জ হওয়া রোধ করে।"
        },
        explanation: {
          en: "When two chains produce the same intermediate plaintext with identical reduction rules, they collapse into one identical sequence. Varying reduction functions column by column limits merges to collisions occurring at the exact same column index.",
          bn: "একই রিডাকশন নিয়মের অধীনে দুটি চেইন যদি একই মধ্যবর্তী মান পায়, তবে তারা একটি অভিন্ন চেইনে পরিণত হয়। কলাম ভেদে রিডাকশন ফাংশন পরিবর্তন করলে কেবল হুবহু একই কলামে কলিশন হলেই কেবল তারা মার্জ করে, ফলে অপচয় কমে।"
        }
      }
    ]
  },
  nextLesson: {
    slug: "hashing-capstone",
    title: {
      en: "Hashing Capstone: Enterprise Auth & Integrity Pipeline",
      bn: "হ্যাশিং ক্যাপস্টোন: এন্টারপ্রাইজ অথ ও ইন্টিগ্রিটি পাইপলাইন"
    }
  }
};
