import type { Lesson } from '../../../lib/types';

export const ChecksumsIntegrityLesson: Lesson = {
  slug: 'checksums-integrity',
  tech: 'hashing',
  title: {
    en: 'Checksums & Data Integrity: SHA-256 Verification & Package Signing',
    bn: 'চেকসাম ও ডাটা ইন্টিগ্রিটি: SHA-২৫৬ যাচাইকরণ ও প্যাকেজ সাইনিং'
  },
  summary: {
    en: 'Verify downloads and backups with cryptographic checksums: why CRC32 fails against attackers, how SHA-256 manifests guard supply chains, mirror compromise defenses, and live package verification.',
    bn: 'ক্রিপ্টোগ্রাফিক চেকসামের মাধ্যমে ডাউনলোড ও ব্যাকআপ যাচাই করুন: আক্রমণকারীর বিরুদ্ধে কেন CRC32 ব্যর্থ হয়, কিভাবে SHA-২৫৬ ম্যানিফেস্ট সাপ্লাই চেইন রক্ষা করে, মিরর কম্প্রোমাইজ প্রতিরোধ এবং প্যাকেজ ভেরিফিকেশন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'accidental-vs-malicious',
      text: {
        en: 'Accidental Corruption vs Malicious Tampering: CRC32 vs SHA-256',
        bn: 'দুর্ঘটনাবশত ক্ষতি বনাম ক্ষতিকর পরিবর্তন: CRC32 বনাম SHA-২৫৬'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Data transfers across the internet frequently suffer from transmission glitches: dropped packets, noisy copper cables, cosmic ray bit-flips on storage drives, or aborted downloads. To detect accidental errors, engineers originally created non-cryptographic checksums like parity checks, checksum algorithms, and 32-bit cyclic redundancy checks (CRC32). While CRC32 detects random bit flips with low CPU overhead, it provides zero security against an intelligent adversary.',
        bn: 'ইন্টারনেটে ডাটা স্থানান্তরের সময় প্রায়ই বিভিন্ন ত্রুটি ঘটে: প্যাকেট ড্রপ, ত্রুটিপূর্ণ তারের গোলযোগ, স্টোরেজ ড্রাইভে বিকিরণজনিত বিট পরিবর্তন বা ডাউনলোড বিচ্ছিন্ন হওয়া। এসব অনিচ্ছাকৃত ত্রুটি শনাক্ত করতে ইঞ্জিনিয়াররা শুরুতে নন-ক্রিপ্টোগ্রাফিক চেকসাম উদ্ভাবন করেন, যেমন প্যারিটি চেক এবং ৩২-বিট সাইক্লিক রিডানড্যান্সি চেক (CRC32)। CRC32 অত্যন্ত কম সিপিইউ খরচে এলোমেলো বিট পরিবর্তন ধরতে পারলেও কোনো চতুর আক্রমণকারীর বিরুদ্ধে বিন্দুমাত্র সুরক্ষা দিতে পারে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'CRC32 is linear: given a modified file, an attacker can calculate and append 4 specific correction bytes in less than 1 millisecond so that the forged file produces the exact same CRC32 checksum as the original legitimate file. In contrast, cryptographic hash functions such as SHA-256 offer pre-image resistance and collision resistance. If an attacker modifies even 1 single byte of a 4 gigabyte operating system image, producing another modified file with the same SHA-256 digest requires approximately 2^256 mathematical operations, which is physically impossible.',
        bn: 'CRC32 গাণিতিকভাবে লিনিয়ার: কোনো ফাইল পরিবর্তন করার পর একজন আক্রমণকারী ১ মিলিসেকেন্ডেরও কম সময়ে ৪টি নির্দিষ্ট সংশোধন বাইট ফাইলে যোগ করে দিতে পারে, যাতে বিকৃত ফাইলটির CRC32 চেকসাম হুবহু আসল ফাইলের মতো হয়ে যায়। অন্যদিকে SHA-২৫৬ এর মতো ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন প্রি-ইমেজ রেজিস্ট্যান্স এবং কলিশন রেজিস্ট্যান্স প্রদান করে। আক্রমণকারী যদি একটি ৪ গিগাবাইট ওএস ফাইলের মাত্র ১টি বাইটও বদলে ফেলে, তবে একই SHA-২৫৬ ডাইজেস্ট তৈরি করতে প্রায় ২^২৫৬ গাণিতিক অপারেশনের প্রয়োজন হয়, যা বাস্তবে অসম্ভব।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Software Supply Chain: Two-Step Signed Checksum Verification',
        bn: 'সফটওয়্যার সাপ্লাই চেইন: দুই-ধাপের সাইনযুক্ত চেকসাম যাচাইকরণ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Two-step checksum verification flow">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Authoritative Stage -->
  <g transform="translate(30, 30)">
    <rect width="210" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="105" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Developer / Release Team</text>
    <rect x="20" y="45" width="170" height="26" rx="4" fill="#0284c7" />
    <text x="105" y="62" fill="#ffffff" font-size="11" font-weight="600" text-anchor="middle">sha256sum binary.iso</text>
    <text x="105" y="90" fill="#94a3b8" font-size="11" text-anchor="middle">Manifest: SHA256SUMS</text>
    <text x="105" y="108" fill="#a78bfa" font-size="11" font-weight="600" text-anchor="middle">GPG Sign: SHA256SUMS.sig</text>
  </g>

  <!-- Untrusted CDN Mirror -->
  <g transform="translate(280, 30)">
    <rect width="180" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <text x="90" y="30" fill="#f59e0b" font-size="14" font-weight="bold" text-anchor="middle">Untrusted Mirror CDN</text>
    <text x="90" y="58" fill="#cbd5e1" font-size="11" text-anchor="middle">1. binary.iso (Large File)</text>
    <text x="90" y="80" fill="#cbd5e1" font-size="11" text-anchor="middle">2. SHA256SUMS</text>
    <text x="90" y="102" fill="#cbd5e1" font-size="11" text-anchor="middle">3. SHA256SUMS.sig</text>
  </g>

  <!-- Verification Steps on Client -->
  <g transform="translate(500, 30)">
    <rect width="210" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <text x="105" y="30" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Client Verification</text>
    <text x="105" y="55" fill="#f8fafc" font-size="11" text-anchor="middle">Step 1: gpg --verify .sig</text>
    <text x="105" y="75" fill="#38bdf8" font-size="10" text-anchor="middle">(Authenticates Hash File)</text>
    <text x="105" y="95" fill="#f8fafc" font-size="11" text-anchor="middle">Step 2: sha256sum -c</text>
    <text x="105" y="112" fill="#34d399" font-size="10" text-anchor="middle">(Validates Binary Content)</text>
  </g>

  <!-- Flow Arrows -->
  <path d="M 240 90 L 280 90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow)" />
  <path d="M 460 90 L 500 90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow)" />

  <!-- Verification Verdict Box -->
  <g transform="translate(30, 180)">
    <rect width="680" height="120" rx="8" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="32" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">Why Checksums Alone Are Not Enough (The Mirror Compromise Threat)</text>
    <text x="340" y="60" fill="#94a3b8" font-size="12" text-anchor="middle">If a hacker seizes control of the mirror CDN, they can replace binary.iso with trojan.iso</text>
    <text x="340" y="82" fill="#ef4444" font-size="12" font-weight="600" text-anchor="middle">AND overwrite SHA256SUMS with the trojan hash! sha256sum would report: OK.</text>
    <text x="340" y="104" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">Signing SHA256SUMS with the vendor's private key stops this attack cold.</text>
  </g>
</svg>`,
      caption: {
        en: 'The software supply chain verification workflow: public key signature authenticates the manifest, and the SHA-256 hash authenticates the downloaded payload.',
        bn: 'সফটওয়্যার সাপ্লাই চেইন যাচাইকরণ ওয়ার্কফ্লো: পাবলিক কি সিগনেচার ম্যানিফেস্টের সত্যতা নিশ্চিত করে এবং SHA-২৫৬ হ্যাশ ডাউনলোডের সত্যতা যাচাই করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Data Integrity',
          def: {
            en: 'The mathematical guarantee that digital content has not been altered, corrupted, or injected with malware since creation.',
            bn: 'গাণিতিক নিশ্চয়তা যে ডিজিটাল ডাটা তৈরির পর থেকে কোনো পরিবর্তন, ত্রুটি বা ম্যালওয়্যার সংযোজন ঘটেনি।'
          }
        },
        {
          term: 'Manifest File',
          def: {
            en: 'A catalog file (such as SHA256SUMS) containing cryptographic digests and associated filenames published by maintainers.',
            bn: 'একটি ক্যাটালগ ফাইল (যেমন SHA256SUMS) যাতে নির্মাতাদের অনুমোদিত ক্রিপ্টোগ্রাফিক ডাইজেস্ট ও ফাইলের নাম লিপিবদ্ধ থাকে।'
          }
        },
        {
          term: 'Mirror Compromise',
          def: {
            en: 'A security breach where a distribution mirror is hacked to serve malicious software alongside falsified plaintext checksums.',
            bn: 'একটি নিরাপত্তা আক্রমণ যেখানে ডিস্ট্রিবিউশন মিরর হ্যাক করে ভুয়া প্লেইনটেক্সট চেকসাম সহ ম্যালওয়্যারযুক্ত সফটওয়্যার বিতরণ করা হয়।'
          }
        },
        {
          term: 'Merkle Tree',
          def: {
            en: 'A hierarchical tree of cryptographic hashes where leaf nodes contain data block digests, allowing efficient and tamper-evident verification.',
            bn: 'ক্রিপ্টোগ্রাফিক হ্যাশের একটি হায়ারার্কিকাল ট্রি যার লিফ নোডে ডাটা ব্লকের ডাইজেস্ট থাকে, যা দ্রুত ও নিশ্চিত অখণ্ডতা যাচাই করতে সাহায্য করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'mirror-compromise-defense',
      text: {
        en: 'The Mirror Compromise Problem & Cryptographic Signatures',
        bn: 'মিরর কম্প্রোমাইজ সমস্যা ও ক্রিপ্টোগ্রাফিক ডিজিটাল স্বাক্ষর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Open source distributions like Linux (Ubuntu, Debian, Fedora), Kubernetes, and Python distribute ISOs and binaries through hundreds of third-party mirror servers worldwide to distribute network bandwidth. However, mirror servers are rarely administered by the software development team. If an attacker penetrates an untrusted mirror server, they can overwrite the 4 GB operating system installer with a trojaned binary, and simultaneously update the plain SHA256SUMS text file with the trojan binary hash.',
        bn: 'লিনাক্স (উবুন্টু, ডেবিয়ান, ফেডোরা), কুবারনেটিস এবং পাইথনের মতো ওপেন সোর্স প্রজেক্টগুলো বিশ্বজুড়ে শত শত থার্ড-পার্টি মিরর সার্ভারের মাধ্যমে আইএসও ও বাইনারি ফাইল বিতরণ করে যাতে ব্যান্ডউইথের চাপ কমে। কিন্তু এই মিরর সার্ভারগুলোর নিয়ন্ত্রণ মূল ডেভেলপারদের হাতে থাকে না। আক্রমণকারী যদি কোনো অসুরক্ষিত মিরর সার্ভার হ্যাক করে, তবে তারা ৪ জিবি ওএস ফাইলের বদলে ম্যালওয়্যারযুক্ত ফাইল বসিয়ে দিতে পারে এবং একই সাথে প্লেইনটেক্সট SHA256SUMS ফাইলে ভুয়া ফাইলের হ্যাশ লিখে দিতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A user running sha256sum -c SHA256SUMS against the compromised mirror will see a deceptive green "OK" message, because the trojan binary matches the forged checksum file! To defeat this attack, modern package managers and release engineers use a two-step defense: the checksum catalog file is cryptographically signed using GPG or Minisign (creating SHA256SUMS.sig). The attacker cannot generate a valid signature for their falsified checksum manifest without possessing the vendor private signing key. Therefore, verification succeeds only if the signature is authentic AND the payload matches the signed hash.',
        bn: 'যে ব্যবহারকারী আক্রান্ত মিরর থেকে নামিয়ে sha256sum -c SHA256SUMS চালাবেন, তিনি একটি বিভ্রান্তিকর সবুজ "OK" বার্তা দেখবেন, কারণ ম্যালওয়্যার ফাইলটি ভুয়া চেকসাম ফাইলের সাথে মিলে গেছে! এই আক্রমণ রুখতে আধুনিক প্যাকেজ ম্যানেজার ও রিলিজ টিম দুই ধাপের নিরাপত্তা ব্যবহার করে: তারা GPG বা Minisign দিয়ে চেকসাম ক্যাটালগ ফাইলটি ডিজিটাল সাইন করে (যেমন SHA256SUMS.sig তৈরি হয়)। মূল নির্মাতার প্রাইভেট কি ছাড়া আক্রমণকারী কখনোই এই ভুয়া ম্যানিফেস্টে বৈধ স্বাক্ষর তৈরি করতে পারে না। ফলে স্বাক্ষর সঠিক হলে এবং ডাউনলোডের হ্যাশ মিললেই কেবল ফাইলটি গৃহীত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'git-merkle-trees',
      text: {
        en: 'Content-Addressable Storage & Git Merkle Trees',
        bn: 'কন্টেন্ট-অ্যাড্রেসেবল স্টোরেজ ও গিট মারকেল ট্রি (Merkle Trees)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Version control systems like Git rely on cryptographic hashing for their core storage engine. Every saved snapshot is content-addressable. Git models files as raw byte blobs, directories as trees of file records, and revisions as structured commit objects. Each commit points directly to its parent record, chaining history into an immutable Merkle directed acyclic graph.',
        bn: 'গিটের (Git) মতো ভার্সন কন্ট্রোল সিস্টেম তাদের অভ্যন্তরীণ স্টোরেজ ইঞ্জিনে ক্রিপ্টোগ্রাফিক হ্যাশিং ব্যবহার করে। প্রতিটি সংরক্ষিত স্ন্যাপশট কন্টেন্ট-অ্যাড্রেসেবল। গিট ফাইলগুলোকে র বাইট ব্লব, ডিরেক্টরিগুলোকে ফাইলের রেকর্ডের ট্রি এবং সংস্করণগুলোকে সুনির্দিষ্ট কমিট অবজেক্ট হিসেবে সাজায়। প্রতিটি কমিট সরাসরি তার আগের প্যারেন্ট রেকর্ডকে নির্দেশ করে, যা সম্পূর্ণ ইতিহাসকে একটি অপরিবর্তনীয় মারকেল ডিরেক্টেড অ্যাসাইক্লিক গ্রাফে পরিণত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If an adversary attempts to secretly modify a single line of code in a commit made 3 years ago, that single character modification changes that file blob hash. The changed blob hash changes the directory tree hash, which changes that commit hash. Because all subsequent commits point to the previous commit hash, the entire chain of commit hashes from 3 years ago to the present HEAD is broken. Git instantly detects the unauthorized revision during git fsck, making silent historical tampering mathematically impossible.',
        bn: 'কোনো শত্রু যদি ৩ বছর আগের কোনো কমিটের একটি লাইনে গোপনে ১টি অক্ষরও পরিবর্তন করার চেষ্টা করে, তবে সাথে সাথে সেই ফাইলের ব্লব হ্যাশ বদলে যায়। পরিবর্তিত ব্লব হ্যাশের কারণে ডিরেক্টরি ট্রির হ্যাশ বদলে যায়, যা সেই কমিট হ্যাশকে পরিবর্তন করে ফেলে। যেহেতু পরবর্তী প্রতিটি কমিট তার আগের কমিটের হ্যাশের ওপর নির্ভরশীল, তাই ৩ বছর আগের পরিবর্তনটি বর্তমান HEAD পর্যন্ত সম্পূর্ণ চেইনকে ভেঙে ফেলে। গিট git fsck কমান্ডের মাধ্যমে তাৎক্ষণিকভাবে এই গরমিল শনাক্ত করে, যা কোনো নীরব পরিবর্তনকে অসম্ভব করে তোলে।'
      }
    },
    {
      type: 'heading',
      id: 'node-checksum-engine',
      text: {
        en: 'Executable Checksum Engine: Multi-Artifact Verification & Tamper Detection',
        bn: 'রানযোগ্য চেকসাম ইঞ্জিন: মাল্টি-আর্টিফ্যাক্ট যাচাই ও টেম্পার ডিটেকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js checksum verification script. It calculates the SHA-256 digests of 3 simulated deployment artifacts, verifies them against an authoritative release manifest using timing-safe comparisons, and tests a simulated bit-flip attack on an artifact to demonstrate tamper detection in action.',
        bn: 'নিচে একটি সম্পূর্ণ Node.js চেকসাম ভেরিফিকেশন স্ক্রিপ্ট রয়েছে। এটি ৩টি ডিপ্লয়মেন্ট আর্টিফ্যাক্টের SHA-২৫৬ ডাইজেস্ট হিসাব করে, অথোরিটেটিভ রিলিজ ম্যানিফেস্টের সাথে টাইমিং-সেফ পদ্ধতিতে মিলিয়ে দেখে এবং একটি বিট-পরিবর্তন আক্রমণের বিরুদ্ধে নিরাপত্তা পরীক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Verify 3 production release artifacts and detect a 1-bit tampering attempt',
        bn: '৩টি প্রোডাকশন রিলিজ আর্টিফ্যাক্ট যাচাই এবং ১টি ১-বিট টেম্পারিং প্রচেষ্টা শনাক্তকরণ'
      },
      code: `const crypto = require('crypto');

// Calculate SHA-256 hex digest for arbitrary buffer
function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

// 3 production release artifacts
const artifacts = [
  { name: 'kubernetes-node-agent.tar.gz', content: Buffer.from('BINARY_PAYLOAD_K8S_AGENT_V1.30', 'utf8') },
  { name: 'postgres-backup.sql.enc', content: Buffer.from('BINARY_PAYLOAD_DB_BACKUP_ENCRYPTED', 'utf8') },
  { name: 'firmware-bios.bin', content: Buffer.from('BINARY_PAYLOAD_BIOS_UEFI_FIRMWARE', 'utf8') }
];

// Authoritative release manifest published by developers (SHA256SUMS)
const manifest = {};
artifacts.forEach(artifact => {
  manifest[artifact.name] = sha256(artifact.content);
});

// Step 1: Client verifies downloaded artifacts against manifest
let verifiedCount = 0;
artifacts.forEach(artifact => {
  const localHash = sha256(artifact.content);
  const expectedHash = manifest[artifact.name];
  
  // Timing-safe comparison prevents side-channel analysis
  if (crypto.timingSafeEqual(Buffer.from(localHash), Buffer.from(expectedHash))) {
    verifiedCount++;
  }
});

// Step 2: Simulate malicious 1-bit tampering on the first artifact
const tamperedPayload = Buffer.from(artifacts[0].content);
tamperedPayload[4] ^= 0x01; // flip 1 single bit in payload
const tamperedHash = sha256(tamperedPayload);
const tamperCaught = !crypto.timingSafeEqual(
  Buffer.from(tamperedHash),
  Buffer.from(manifest[artifacts[0].name])
);

console.log(\`[Checksum Engine] Verified 3 production artifacts against release manifest: \${verifiedCount}/3 matched cleanly.\`);
console.log(\`[Tamper Experiment] Single-bit file corruption caught 1/1: mismatched digest rejected before deployment (\${tamperCaught}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Production Practice: Always Pipe Streaming Hashes for Big Files',
        bn: 'প্রোডাকশন সেরা অনুশীলন: বড় ফাইলের জন্য স্ট্রিমিং হ্যাশ ব্যবহার করুন'
      },
      text: {
        en: 'Never read a 10 GB database dump or ISO image entirely into memory using fs.readFileSync. Always use streaming pipelines with fs.createReadStream and pipe the chunks through crypto.createHash. Streaming computes the cryptographic digest incrementally in chunks of 64 KB, keeping node process memory footprint below 30 MB regardless of whether the file is 500 MB or 100 GB.',
        bn: 'কখনোই ১০ জিবি ডাটাবেস ব্যাকআপ বা আইএসও ফাইল fs.readFileSync দিয়ে একবারে পুরোটা মেমোরিতে লোড করবেন না। সবসময় fs.createReadStream দিয়ে স্ট্রিমিং পাইপলাইন তৈরি করুন এবং খণ্ড খণ্ড অংশ crypto.createHash এর মধ্য দিয়ে পরিচালনা করুন। স্ট্রিমিং পদ্ধতিতে ৬৪ কেবি আকারে টুকরো টুকরো করে ক্রিপ্টোগ্রাফিক ডাইজেস্ট হিসাব করা হয়, যার ফলে ফাইল ৫০০ এমবি বা ১০০ জিবি যাই হোক না কেন, নোড অ্যাপের মেমোরি খরচ ৩০ এমবির নিচে থাকে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Checksum Verification Simulator',
        bn: 'চেকসাম যাচাইকরণ সিমুলেটর'
      },
      description: {
        en: 'Experiment with SHA-256 checksums: verify a clean download and inject a corrupted byte to observe integrity failure.',
        bn: 'SHA-২৫৬ চেকসাম নিয়ে পরীক্ষা করুন: আসল ফাইল যাচাই করুন এবং ১টি বিকৃত বাইট দিয়ে অখণ্ডতা যাচাইয়ের ব্যর্থতা লক্ষ্য করুন।'
      },
      code: `const crypto = require('crypto');

const legitimatePayload = 'KUBERNETES_CONTAINER_IMAGE_V1.30.0_PRODUCTION_BUILD';
const expectedSha256 = crypto.createHash('sha256').update(legitimatePayload).digest('hex');

console.log('Authoritative SHA-256:', expectedSha256);

// Test 1: Legitimate payload verification
const downloadSha256 = crypto.createHash('sha256').update(legitimatePayload).digest('hex');
const match = downloadSha256 === expectedSha256;
console.log('Clean download verification:', match ? 'VALID (Deployed)' : 'FAILED');

// Test 2: Tampered payload with 1 extra character
const corruptedPayload = legitimatePayload + '!';
const corruptedSha256 = crypto.createHash('sha256').update(corruptedPayload).digest('hex');
console.log('Corrupted SHA-256:    ', corruptedSha256);
const tamperCaught = corruptedSha256 !== expectedSha256;
console.log('Tamper caught:        ', tamperCaught ? 'REJECTED (Security Alert)' : 'MISSED');`,
      tests: [
        {
          name: {
            en: 'Validates authentic payload matching digest',
            bn: 'সঠিক ডাইজেস্টের সাথে আসল পেলোড অনুমোদন করে'
          },
          expected: 'VALID (Deployed)'
        },
        {
          name: {
            en: 'Rejects tampered payload and triggers security alert',
            bn: 'বিকৃত পেলোড প্রত্যাখ্যান করে এবং সিকিউরিটি অ্যালার্ট ট্রিগার করে'
          },
          expected: 'REJECTED (Security Alert)'
        }
      ]
    }
  ],
  exercises: [
    {
      id: "hsh-cs-ex-1",
      kind: 'mcq',
      topic: "crc32-vs-sha256-security",
      question: {
        en: "Why is CRC32 completely unacceptable for software integrity verification against malicious actors?",
        bn: "ক্ষতিকর আক্রমণকারীদের বিরুদ্ধে সফটওয়্যারের সত্যতা নিশ্চিতে CRC32 কেন সম্পূর্ণ অগ্রহণযোগ্য?"
      },
      options: [
        {
          en: "CRC32 is linear and trivial to forge with deliberate appended bytes; it only protects against accidental noise",
          bn: "CRC32 গাণিতিকভাবে লিনিয়ার এবং অতিরিক্ত বাইট যোগ করে ইচ্ছাকৃত মিল তৈরি করা খুব সহজ; এটি কেবল অনিচ্ছাকৃত তারের গোলযোগ ধরতে পারে"
        },
        {
          en: "CRC32 takes 1000 times longer to compute than SHA-256",
          bn: "CRC32 গণনা করতে SHA-২৫৬ এর চেয়ে ১০০০ গুণ বেশি সময় লাগে"
        },
        {
          en: "CRC32 can only hash files smaller than 1 kilobyte",
          bn: "CRC32 শুধুমাত্র ১ কিলোবাইটের চেয়ে ছোট ফাইলের জন্য কাজ করে"
        },
        {
          en: "CRC32 produces a 512-bit output that requires too much storage space",
          bn: "CRC32 ৫১২-বিট আউটপুট দেয় যা সংরক্ষণের জন্য অনেক বেশি জায়গার প্রয়োজন হয়"
        }
      ],
      answer: 0,
      hint: {
        en: "CRC algorithms are designed for noisy physical wires, not cryptographic security.",
        bn: "CRC অ্যালগরিদমগুলো ত্রুটিপূর্ণ তারের গোলযোগ ধরার জন্য তৈরি, ক্রিপ্টোগ্রাফিক নিরাপত্তার জন্য নয়।"
      },
      explanation: {
        en: "CRC32 is designed purely to catch random network line noise and disk bit-rot. Because its mathematics are linear, an attacker can modify any file and append 4 bytes to force the checksum back to the original value in under 1 millisecond. Cryptographic hashes like SHA-256 are required to guarantee collision and pre-image resistance.",
        bn: "CRC32 শুধুমাত্র নেটওয়ার্ক নয়েজ বা ডিস্কের আকস্মিক বিট পরিবর্তন শনাক্ত করার জন্য তৈরি। এর অ্যালগরিদম লিনিয়ার হওয়ায় আক্রমণকারী যেকোনো ফাইলে পরিবর্তন ঘটিয়ে শেষে ৪টি বাইট যোগ করে ১ মিলিসেকেন্ডের মধ্যে আগের চেকসাম ফিরিয়ে আনতে পারে। তাই কলিশন ও প্রি-ইমেজ রেজিস্ট্যান্স পেতে SHA-২৫৬ এর মতো ক্রিপ্টোগ্রাফিক হ্যাশ বাধ্যতামূলক।"
      }
    },
    {
      id: "hsh-cs-ex-2",
      kind: 'mcq',
      topic: "mirror-compromise-vulnerability",
      question: {
        en: "If an attacker hacks a download mirror and replaces both the ISO installer and the plaintext SHA256SUMS file, what defense prevents users from being tricked?",
        bn: "আক্রমণকারী যদি একটি ডাউনলোড মিরর হ্যাক করে আইএসও ফাইল এবং প্লেইনটেক্সট SHA256SUMS ফাইল দুটোই বদলে দেয়, তবে ব্যবহারকারীদের প্রতারিত হওয়া থেকে কী রক্ষা করে?"
      },
      options: [
        {
          en: "Cryptographic public-key signatures (GPG or Minisign) on the SHA256SUMS manifest file",
          bn: "SHA256SUMS ম্যানিফেস্ট ফাইলের ওপর ক্রিপ্টোগ্রাফিক পাবলিক-কি স্বাক্ষর (GPG বা Minisign)"
        },
        {
          en: "Downloading the file using HTTP instead of HTTPS",
          bn: "HTTPS এর বদলে সাধারণ HTTP দিয়ে ফাইল ডাউনলোড করা"
        },
        {
          en: "Hashing the corrupted file with MD5 instead of SHA-256",
          bn: "SHA-২৫৬ এর পরিবর্তে MD5 দিয়ে দূষিত ফাইলটি হ্যাশ করা"
        },
        {
          en: "Changing the file extension from .iso to .zip",
          bn: "ফাইল এক্সটেনশন .iso থেকে .zip এ পরিবর্তন করা"
        }
      ],
      answer: 0,
      hint: {
        en: "Only an authentic signature from the author private key can validate the manifest.",
        bn: "শুধুমাত্র মূল নির্মাতার প্রাইভেট কি দিয়ে তৈরি স্বাক্ষরই ম্যানিফেস্টের সত্যতা প্রমাণ করতে পারে।"
      },
      explanation: {
        en: "A plaintext checksum file on a compromised mirror can easily be overwritten by the attacker to match the trojan file. Only a cryptographic digital signature (such as GPG) created with the vendor offline private key proves the authenticity of the checksum catalog.",
        bn: "একটি আক্রান্ত মিররে থাকা প্লেইনটেক্সট চেকসাম ফাইল আক্রমণকারী সহজেই ম্যালওয়্যারের হ্যাশ দিয়ে প্রতিস্থাপন করতে পারে। কেবল নির্মাতার অফলাইন প্রাইভেট কি দিয়ে তৈরি ক্রিপ্টোগ্রাফিক ডিজিটাল সিগনেচার (যেমন GPG) চেকসাম ক্যাটালগের আসল সত্যতা প্রমাণ করতে পারে।"
      }
    },
    {
      id: "hsh-cs-ex-3",
      kind: 'mcq',
      topic: "git-merkle-tree-integrity",
      question: {
        en: "How does Git detect if an attacker alters a single character in a commit made 3 years ago?",
        bn: "৩ বছর আগের কোনো কমিটের মাত্র ১টি অক্ষর বদলে দিলে গিট কীভাবে তা শনাক্ত করে?"
      },
      options: [
        {
          en: "The changed file changes the tree hash, commit hash, and breaks all subsequent parent commit hashes in the chain",
          bn: "পরিবর্তিত ফাইলটি ট্রি হ্যাশ ও কমিট হ্যাশ বদলে দেয় এবং চেইনের পরবর্তী সকল প্যারেন্ট কমিট হ্যাশকে ভেঙে দেয়"
        },
        {
          en: "Git sends an email to GitHub asking for a file comparison",
          bn: "গিট গিটহাবে ইমেইল পাঠিয়ে ফাইল মিলিয়ে দেখার অনুরোধ করে"
        },
        {
          en: "Git encrypts the repository with AES-GCM password protection",
          bn: "গিট সম্পূর্ণ রিপোজিটরিটি AES-GCM পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে রাখে"
        },
        {
          en: "Git refuses to store commits older than 1 year",
          bn: "গিট ১ বছরের পুরনো কোনো কমিট সংরক্ষণ করতে অস্বীকার করে"
        }
      ],
      answer: 0,
      hint: {
        en: "Each commit embeds the parent commit digest into its own cryptographic hash.",
        bn: "প্রতিটি কমিট তার আগের প্যারেন্ট কমিট ডাইজেস্টকে নিজের হ্যাশে অন্তর্ভুক্ত করে রাখে।"
      },
      explanation: {
        en: "Git forms a Merkle directed acyclic graph. Each commit contains the cryptographic hash of its parent commit and the directory tree. Modifying 1 byte 3 years ago cascades hash changes forward through every subsequent commit to the HEAD, causing instant verification failure.",
        bn: "গিট একটি মারকেল ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ গঠন করে। প্রতিটি কমিটে তার প্যারেন্ট কমিট এবং ডিরেক্টরি ট্রির ক্রিপ্টোগ্রাফিক হ্যাশ থাকে। ৩ বছর আগের ১টি বাইট পাল্টালেও পরবর্তী সকল কমিট হয়ে HEAD পর্যন্ত হ্যাশ পরিবর্তন ছড়িয়ে পড়ে এবং তাৎক্ষণিকভাবে যাচাইকরণ ব্যর্থ হয়।"
      }
    },
    {
      id: "hsh-cs-ex-4",
      kind: 'mcq',
      topic: "streaming-checksum-large-files",
      question: {
        en: "What is the primary danger of using fs.readFileSync to compute the SHA-256 hash of a 10 GB ISO file in Node.js?",
        bn: "Node.js-এ fs.readFileSync দিয়ে ১০ জিবি আইএসও ফাইলের SHA-২৫৬ হিসাব করার প্রধান ঝুঁকি কী?"
      },
      options: [
        {
          en: "Process memory exhaustion (Out of Memory crash) from attempting to buffer the entire 10 GB file into RAM",
          bn: "সম্পূর্ণ ১০ জিবি ফাইল র‍্যামে বাফার করার চেষ্টার কারণে মেমোরি সংকট (Out of Memory ক্র্যাশ) ঘটবে"
        },
        {
          en: "SHA-256 produces invalid checksums when files exceed 1 GB in size",
          bn: "ফাইলের আকার ১ জিবির বেশি হলে SHA-২৫৬ ভুল চেকসাম আউটপুট দেয়"
        },
        {
          en: "The CPU overheats and resets the hardware clock",
          bn: "সিপিইউ অতিরিক্ত উত্তপ্ত হয়ে হার্ডওয়্যার ঘড়ি রিসেট করে দেয়"
        },
        {
          en: "The operating system deletes the file automatically",
          bn: "অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে ফাইলটি মুছে ফেলে"
        }
      ],
      answer: 0,
      hint: {
        en: "Node processes have limited heap memory and cannot load massive files in a single pass.",
        bn: "নোড প্রসেসের হিপ মেমরি সীমিত থাকে এবং একবারে বিশাল ফাইল মেমরিতে লোড করা যায় না।"
      },
      explanation: {
        en: "Node.js buffers have maximum size limits and loading a 10 GB file into memory crashes the V8 runtime with an Out of Memory error. Streaming with fs.createReadStream computes the digest chunk by chunk (e.g. 64 KB at a time) using a tiny, constant memory footprint.",
        bn: "Node.js বাফারের আকারের সর্বোচ্চ সীমা থাকে এবং একবারে ১০ জিবি ফাইল লোড করলে V8 ইঞ্জিন Out of Memory ত্রুটি দিয়ে ক্র্যাশ করবে। fs.createReadStream দিয়ে স্ট্রিমিং করলে ধাপে ধাপে ৬৪ কেবি করে ডাটা প্রসেস হয় এবং মেমোরির ব্যবহার থাকে অত্যন্ত সীমিত ও নিরাপদ।"
      }
    }
  ],
  quiz: {
    id: "checksums-integrity-quiz",
    title: {
      en: "Checksums & Data Integrity Quiz",
      bn: "চেকসাম ও ডাটা ইন্টিগ্রিটি কুইজ"
    },
    questions: [
      {
        id: "hsh-cs-qz-1",
        kind: 'mcq',
        topic: "second-preimage-resistance",
        question: {
          en: "What mathematical property prevents an attacker from generating a forged file with the exact same SHA-256 hash as an official binary?",
          bn: "কোন গাণিতিক বৈশিষ্ট্যের কারণে আক্রমণকারী আসল বাইনারির সাথে মিলে যাওয়া একই SHA-২৫৬ হ্যাশের ভুয়া ফাইল তৈরি করতে পারে না?"
        },
        options: [
          {
            en: "Second pre-image resistance and collision resistance of cryptographic hash functions",
            bn: "ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশনের সেকেন্ড প্রি-ইমেজ রেজিস্ট্যান্স এবং কলিশন রেজিস্ট্যান্স"
          },
          {
            en: "The AES key schedule expansion algorithm",
            bn: "AES কী শিডিউল এক্সপ্যানশন অ্যালগরিদম"
          },
          {
            en: "The length of the filename on disk",
            bn: "ডিস্কে থাকা ফাইলের নামের দৈর্ঘ্য"
          },
          {
            en: "The bandwidth speed of the download network connection",
            bn: "ডাউনলোড নেটওয়ার্ক সংযোগের ব্যান্ডউইথ গতি"
          }
        ],
        answer: 0,
        hint: {
          en: "It is the core hash property preventing collisions given a specific target message.",
          bn: "নির্দিষ্ট টার্গেট মেসেজের বিপরীতে কলিশন রোধ করার মূল হ্যাশ বৈশিষ্ট্য।"
        },
        explanation: {
          en: "Second pre-image resistance ensures that given an input file x, it is computationally infeasible to find another distinct file y such that hash(x) equals hash(y). SHA-256 provides 128-bit security against collisions and 256-bit security against pre-images.",
          bn: "সেকেন্ড প্রি-ইমেজ রেজিস্ট্যান্স নিশ্চিত করে যে কোনো ইনপুট ফাইল x এর বিপরীতে অন্য কোনো ভিন্ন ফাইল y খুঁজে বের করা গাণিতিকভাবে অসম্ভব যার হ্যাশ hash(x) এর সমান হবে। SHA-২৫৬ কলিশনের বিরুদ্ধে ১২৮-বিট এবং প্রি-ইমেজের বিরুদ্ধে ২৫৬-বিট নিরাপত্তা দেয়।"
        }
      },
      {
        id: "hsh-cs-qz-2",
        kind: 'mcq',
        topic: "manifest-signature-trust",
        question: {
          en: "Why is verifying a digital signature (such as GPG) on SHA256SUMS required before trusting the hashes inside it?",
          bn: "SHA256SUMS ফাইলের ভেতরের হ্যাশ বিশ্বাস করার আগে কেন তার ডিজিটাল সিগনেচার (যেমন GPG) যাচাই করা জরুরি?"
        },
        options: [
          {
            en: "Because an attacker controlling a distribution mirror can modify both the software binary and the plaintext hash list",
            bn: "কারণ ডিস্ট্রিবিউশন মিরর নিয়ন্ত্রণকারী কোনো আক্রমণকারী সফটওয়্যার বাইনারি এবং প্লেইনটেক্সট হ্যাশ তালিকা দুটোই বদলে দিতে পারে"
          },
          {
            en: "Because SHA-256 cannot run without an active internet connection",
            bn: "কারণ সক্রিয় ইন্টারনেট সংযোগ ছাড়া SHA-২৫৬ চলতে পারে না"
          },
          {
            en: "Because digital signatures decompress the file to save disk space",
            bn: "কারণ ডিজিটাল সিগনেচার ডিস্কের জায়গা বাঁচাতে ফাইলটিকে ডিকম্প্রেস করে"
          },
          {
            en: "Because plaintext files cannot be read by Linux terminal commands",
            bn: "কারণ লিনাক্স টার্মিনাল কমান্ড দিয়ে সাধারণ প্লেইনটেক্সট ফাইল পড়া যায় না"
          }
        ],
        answer: 0,
        hint: {
          en: "Hashes check file integrity; signatures check author identity and authenticity.",
          bn: "হ্যাশ ফাইলের অবিকৃত অবস্থা নিশ্চিত করে; সিগনেচার নির্মাতার পরিচয় ও সত্যতা যাচাই করে।"
        },
        explanation: {
          en: "Hashes only prove that the downloaded file matches the hash list; they do not prove who created the hash list. An authentic digital signature from the vendor private key proves that the hash list itself is genuine and untampered.",
          bn: "চেকসাম শুধুমাত্র এটি নিশ্চিত করে যে ডাউনলোড করা ফাইলটি হ্যাশ তালিকার সাথে মেলে; কিন্তু হ্যাশ তালিকাটি কে তৈরি করেছে তা প্রমাণ করে না। নির্মাতার প্রাইভেট কি দিয়ে তৈরি ডিজিটাল স্বাক্ষর প্রমাণ করে যে খোদ হ্যাশ তালিকাটি আসল ও অবিকৃত।"
        }
      },
      {
        id: "hsh-cs-qz-3",
        kind: 'mcq',
        topic: "merkle-tamper-evidence",
        question: {
          en: "How does Git achieve tamper-evident commit history using Merkle trees?",
          bn: "মারকেল ট্রি ব্যবহারের মাধ্যমে গিট কীভাবে অবিকৃত কমিট হিস্ট্রির নিশ্চয়তা দেয়?"
        },
        options: [
          {
            en: "Each commit hash incorporates the parent commit hash and root directory tree hash in a cryptographic chain",
            bn: "প্রতিটি কমিট হ্যাশ ক্রিপ্টোগ্রাফিক চেইনে তার প্যারেন্ট কমিট হ্যাশ এবং রুট ডিরেক্টরি ট্রি হ্যাশ অন্তর্ভুক্ত করে"
          },
          {
            en: "Git stores all historical changes on a private blockchain server",
            bn: "গিট তার আগের সব পরিবর্তন একটি প্রাইভেট ব্লকচেইন সার্ভারে জমা রাখে"
          },
          {
            en: "Git encrypts the .git folder with a master password",
            bn: "গিট একটি মাস্টার পাসওয়ার্ড দিয়ে .git ফোল্ডারটিকে এনক্রিপ্ট করে"
          },
          {
            en: "Git requires two developers to sign every commit with a smart card",
            bn: "গিটের প্রতিটি কমিটে দুইজন ডেভেলপারের স্মার্ট কার্ড দিয়ে সাইন করা বাধ্যতামূলক"
          }
        ],
        answer: 0,
        hint: {
          en: "Chaining parent hashes makes every commit dependent on all earlier history.",
          bn: "প্যারেন্ট হ্যাশের শিকল প্রতিটি কমিটকে পূর্ববর্তী সম্পূর্ণ ইতিহাসের ওপর নির্ভরশীল করে রাখে।"
        },
        explanation: {
          en: "Git commits form a Merkle tree: modifying even 1 historical byte alters that commit hash, breaking the cryptographic pointers of every descendant commit all the way to HEAD.",
          bn: "গিটের কমিটগুলো মারকেল ট্রি তৈরি করে: আগের ১টি বাইট পাল্টালেও সেই কমিট হ্যাশ বদলে যায়, যা HEAD পর্যন্ত পরবর্তী প্রতিটি বংশধর কমিটের ক্রিপ্টোগ্রাফিক লিংক ভেঙে দেয়।"
        }
      },
      {
        id: "hsh-cs-qz-4",
        kind: 'mcq',
        topic: "sha256sum-cli-usage",
        question: {
          en: "What is the correct terminal command to verify all files listed in an authoritative checksum file named SHA256SUMS?",
          bn: "SHA256SUMS নামক একটি অনুমোদিত চেকসাম ফাইলের সকল ফাইল যাচাই করার সঠিক টার্মিনাল কমান্ড কোনটি?"
        },
        options: [
          {
            en: "sha256sum -c SHA256SUMS",
            bn: "sha256sum -c SHA256SUMS"
          },
          {
            en: "cat SHA256SUMS | grep verify",
            bn: "cat SHA256SUMS | grep verify"
          },
          {
            en: "openssl encrypt -in SHA256SUMS",
            bn: "openssl encrypt -in SHA256SUMS"
          },
          {
            en: "checksum --repair SHA256SUMS",
            bn: "checksum --repair SHA256SUMS"
          }
        ],
        answer: 0,
        hint: {
          en: "The standard flag stands for check.",
          bn: "স্ট্যান্ডার্ড ফ্ল্যাগটি check নির্দেশ করে।"
        },
        explanation: {
          en: "The sha256sum utility accepts the -c (or --check) flag to read SHA-256 digests and filenames from the specified manifest file and verify that every local file matches its recorded digest.",
          bn: "sha256sum কমান্ডে -c (বা --check) ফ্ল্যাগ ব্যবহার করে নির্দিষ্ট ম্যানিফেস্ট ফাইল থেকে SHA-২৫৬ ডাইজেস্ট ও ফাইলের নাম পড়ে প্রতিটি স্থানীয় ফাইল হুবহু মিলেছে কিনা যাচাই করা হয়।"
        }
      }
    ]
  },
  nextLesson: {
    slug: "digital-signatures",
    title: {
      en: "Digital Signatures & PKI: Ed25519, RSA-PSS & Provenance",
      bn: "ডিজিটাল সিগনেচার ও PKI: Ed25519, RSA-PSS ও সত্যতা"
    }
  }
};
