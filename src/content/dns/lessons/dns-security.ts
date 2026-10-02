import type { Lesson } from '../../../lib/types';

export const DnsSecurityLesson: Lesson = {
  slug: 'dns-security',
  tech: 'dns',
  title: {
    en: 'DNS Security: DNSSEC, DoH & DoT Transport Privacy',
    bn: 'ডিএনএস নিরাপত্তা: DNSSEC, DoH এবং DoT ট্রান্সপোর্ট প্রাইভেসি'
  },
  summary: {
    en: 'Uncover the cryptographic defenses protecting internet name resolution. Understand the Kaminsky DNS Cache Poisoning attack. Explore how Domain Name System Security Extensions (DNSSEC) establish an asymmetric cryptographic chain of trust via RRSIG, DNSKEY, DS, and NSEC3 records. Learn how transport privacy protocols like DoH and DoT shield queries from network snooping.',
    bn: 'ডোমেন নেম রেজোলিউশন রক্ষাকারী ক্রিপ্টোগ্রাফিক সুরক্ষা পদ্ধতিগুলো উন্মোচন করুন। কামিনস্কি ডিএনএস ক্যাশ পয়জনিং আক্রমণ বুঝুন। ডোমেন নেম সিস্টেম সিকিউরিটি এক্সটেনশন (DNSSEC) কীভাবে RRSIG, DNSKEY, DS এবং NSEC3 রেকর্ডের মাধ্যমে ক্রিপ্টোগ্রাফিক চেইন-অব-ট্রাস্ট তৈরি করে তা শিখুন। পরিবহন গোপনীয়তা প্রোটোকল: DNS over HTTPS ( DoH / RFC 8484 ) এবং DNS over TLS ( DoT / RFC 7858 ) এর পার্থক্য আয়ত্ত করুন।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'unauthenticated-internet-kaminsky',
      text: {
        en: 'The Unauthenticated Internet: How Kaminsky Broke DNS',
        bn: 'অনিরাপদ ইন্টারনেট: কামিনস্কি কীভাবে ডিএনএসের দুর্বলতা ফাঁস করেন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When Paul Mockapetris created DNS in 1983, the internet was a small community of trusted academic institutions. Security, encryption, and cryptographic authenticity were not designed into the protocol. Plaintext UDP port 53 packets are completely unauthenticated: anyone on the network path can read or modify query answers.',
        bn: '১৯৮৩ সালে যখন পল মকাপেট্রিস ডিএনএস উদ্ভাবন করেন, তখন ইন্টারনেট ছিল পরস্পরের প্রতি বিশ্বস্ত শিক্ষাপ্রতিষ্ঠানের একটি ক্ষুদ্র নেটওয়ার্ক। প্রোটোকলের ভেতরে কোনো নিরাপত্তা, এনক্রিপশন বা ক্রিপ্টোগ্রাফিক সত্যতা যাচাইয়ের ব্যবস্থা রাখা হয়নি। প্লেইনটেক্সট UDP পোর্ট ৫৩ এর প্যাকেটগুলো সম্পূর্ণভাবে অরক্ষিত ছিল: নেটওয়ার্কের যেকোনো পথচারী সহজেই কোয়েরির উত্তর পড়তে বা পরিবর্তন করতে পারত।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In 2008, security researcher Dan Kaminsky demonstrated a devastating vulnerability: DNS Cache Poisoning. In traditional DNS, the only defense against forged responses was a 16-bit Transaction ID (yielding 65536 possible combinations) and a random UDP source port. By querying non-existent subdomains, an attacker floods a recursive resolver with forged authoritative replies matching guessed transaction IDs. Once guessed correctly, the attacker permanently replaces the real IP with a malicious IP, silently redirecting bank traffic.',
        bn: '২০০৮ সালে নিরাপত্তা গবেষক ড্যান কামিনস্কি একটি মারাত্মক দুর্বলতা জনসমক্ষে প্রকাশ করেন: ডিএনএস ক্যাশ পয়জনিং। ঐতিহ্যবাহী ডিএনএসে জাল উত্তর প্রতিরোধের একমাত্র ব্যবস্থা ছিল একটি ১৬-বিট ট্রানজ্যাকশন আইডি ( যা কেবল ৬৫৫৩৬ টি অনন্য সমন্বয় তৈরি করে ) এবং একটি এলোমেলো UDP সোর্স পোর্ট। অস্তিত্বহীন সাবডোমেনের অনুরোধ পাঠিয়ে আক্রমণকারী অনুমিত আইডি দিয়ে ভুয়া উত্তরের বন্যা বইয়ে দেয়। একবার আইডি মিলে গেলেই আসল আইপির বদলে আক্রমণকারীর ক্ষতিকর আইপি ক্যাশে বসে যায় এবং সমস্ত ব্যাংক বা ওয়েব ট্রাফিক হাইজ্যাক হয়।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. RRSIG (Resource Record Signature)',
            bn: '১. RRSIG ( রিসোর্স রেকর্ড সিগনেচার )'
          },
          text: {
            en: 'DNSSEC does not encrypt traffic; it provides cryptographic authenticity and integrity. Every set of records is signed using a private key, producing an RRSIG record. Resolvers verify the digital signature using the zone public key.',
            bn: 'DNSSEC ট্রাফিক এনক্রিপ্ট করে না; বরং এটি ক্রিপ্টোগ্রাফিক সত্যতা ও অবিকৃত অবস্থা নিশ্চিত করে। প্রতিটি রেকর্ড সেট একটি প্রাইভেট কি দিয়ে স্বাক্ষরিত হয়ে RRSIG রেকর্ড তৈরি করে। রিজলভার জোনের পাবলিক কি দিয়ে এই ডিজিটাল স্বাক্ষর যাচাই করে।'
          },
        },
        {
          title: {
            en: '2. DNSKEY (Zone Signing Key & Key Signing Key)',
            bn: '২. DNSKEY ( জোন সাইনিং কি এবং কি সাইনিং কি )'
          },
          text: {
            en: 'The DNSKEY record publishes the zone public cryptographic keys. Zones maintain 2 keys: the Zone Signing Key (ZSK) to sign regular records, and the Key Signing Key (KSK) to sign the ZSK.',
            bn: 'DNSKEY রেকর্ড জোনের পাবলিক ক্রিপ্টোগ্রাফিক কি প্রকাশ করে। প্রতিটি জোন ২ টি কি পরিচালনা করে: সাধারণ রেকর্ডগুলোতে স্বাক্ষর করার জন্য জোন সাইনিং কি (ZSK) এবং জেডএসকে-তে স্বাক্ষর করার জন্য কি সাইনিং কি (KSK)।'
          },
        },
        {
          title: {
            en: '3. DS Record (Delegation Signer) & Chain of Trust',
            bn: '৩. DS রেকর্ড ( ডেলিগেশন সাইনার ) এবং চেইন অব ট্রাস্ট'
          },
          text: {
            en: 'The DS record links child zones to parent zones. It holds a cryptographic SHA-256 hash of the child KSK, published directly inside the parent zone (e.g. .com holds the DS for example.com), bridging an unbroken chain of trust back to the root anchor.',
            bn: 'DS রেকর্ড চাইল্ড জোনকে প্যারেন্ট জোনের সাথে সংযুক্ত করে। এটি চাইল্ড KSK-এর একটি ক্রিপ্টোগ্রাফিক SHA-256 হ্যাশ ধারণ করে যা সরাসরি প্যারেন্ট জোনে সংরক্ষিত থাকে ( যেমন .com ধারণ করে example.com-এর DS ), যা মূল রুট অ্যাঙ্কর পর্যন্ত একটি অবিচ্ছিন্ন চেইন-অব-ট্রাস্ট তৈরি করে।'
          },
        },
        {
          title: {
            en: '4. NSEC & NSEC3 (Authenticated Denial of Existence)',
            bn: '৪. NSEC এবং NSEC3 ( অস্তিত্বহীনতার প্রমাণিত অস্বীকৃতি )'
          },
          text: {
            en: 'How do you sign a record that does not exist? NSEC3 cryptographically proves that a requested domain name does not exist by signing the alphabetical gap between existing records, preventing attackers from forging fake NXDOMAIN replies.',
            bn: 'অস্তিত্বহীন কোনো রেকর্ডে কীভাবে স্বাক্ষর করবেন? NSEC3 বিদ্যমান রেকর্ডগুলোর মধ্যবর্তী বর্ণানুক্রমিক দূরত্বের ওপর ক্রিপ্টোগ্রাফিক স্বাক্ষর করে প্রমাণ করে যে কাঙ্ক্ষিত ডোমেনটির কোনো অস্তিত্ব নেই, যা ভুয়া NXDOMAIN উত্তর জাল করা প্রতিহত করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'DNSSEC Cryptographic Chain of Trust & Transport Privacy (DoH/DoT)',
        bn: 'DNSSEC ক্রিপ্টোগ্রাফিক চেইন অব ট্রাস্ট এবং ট্রান্সপোর্ট প্রাইভেসি (DoH/DoT)'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="DNSSEC chain of trust from root trust anchor to child domain and DoH DoT transport comparison">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DNSSEC CHAIN OF TRUST &amp; TRANSPORT PRIVACY PROTOCOLS</text>
  
  <!-- Left Side: DNSSEC Chain of Trust -->
  <g transform="translate(30, 50)">
    <rect width="400" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="200" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">DNSSEC HIERARCHICAL CHAIN OF TRUST</text>
    
    <!-- Level 1: Root Zone -->
    <rect x="20" y="42" width="360" height="65" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="35" y="62" fill="#ef4444" font-size="11" font-weight="bold">ROOT ZONE (.) — Trust Anchor</text>
    <text x="35" y="80" fill="#cbd5e1" font-size="9">Root KSK (ICANN) signs Root DNSKEY</text>
    <text x="35" y="95" fill="#f59e0b" font-size="9">Root ZSK signs .com DS Record (Delegation hash)</text>
    
    <!-- Arrow -->
    <line x1="200" y1="107" x2="200" y2="125" stroke="#10b981" stroke-width="2"/>
    <polygon points="200,125 195,117 205,117" fill="#10b981"/>
    
    <!-- Level 2: TLD Zone -->
    <rect x="20" y="125" width="360" height="65" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="35" y="145" fill="#f59e0b" font-size="11" font-weight="bold">TLD ZONE (.com) — Parent Delegation</text>
    <text x="35" y="163" fill="#cbd5e1" font-size="9">Verified by Root DS • KSK signs .com DNSKEY</text>
    <text x="35" y="178" fill="#38bdf8" font-size="9">.com ZSK signs example.com DS Record</text>
    
    <!-- Arrow -->
    <line x1="200" y1="190" x2="200" y2="208" stroke="#10b981" stroke-width="2"/>
    <polygon points="200,208 195,200 205,200" fill="#10b981"/>
    
    <!-- Level 3: Authoritative Child Zone -->
    <rect x="20" y="208" width="360" height="75" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="35" y="228" fill="#38bdf8" font-size="11" font-weight="bold">AUTHORITATIVE ZONE (example.com)</text>
    <text x="35" y="246" fill="#cbd5e1" font-size="9">Verified by .com DS • KSK signs DNSKEY</text>
    <text x="35" y="261" fill="#cbd5e1" font-size="9">ZSK signs A Record -> Generates RRSIG signature</text>
    <text x="35" y="275" fill="#10b981" font-size="9" font-weight="bold">Resolver validates all signatures -> Sets AD = 1</text>
    
    <text x="200" y="318" fill="#94a3b8" font-size="10" text-anchor="middle">Tampered response or invalid key triggers SERVFAIL (RCODE 2)</text>
  </g>
  
  <!-- Right Side: Transport Privacy (DoH vs DoT) -->
  <g transform="translate(450, 50)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">TRANSPORT PRIVACY COMPARISON</text>
    
    <!-- Protocol 1: Traditional DNS -->
    <rect x="20" y="42" width="320" height="75" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="35" y="64" fill="#ef4444" font-size="11" font-weight="bold">Traditional DNS (Port 53)</text>
    <text x="35" y="82" fill="#cbd5e1" font-size="10">Transport: UDP/TCP 53 • Plaintext</text>
    <text x="35" y="98" fill="#ef4444" font-size="9">Zero privacy: ISP snoops every domain requested</text>
    
    <!-- Protocol 2: DoT -->
    <rect x="20" y="130" width="320" height="85" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="35" y="152" fill="#f59e0b" font-size="11" font-weight="bold">DNS over TLS (DoT / RFC 7858)</text>
    <text x="35" y="170" fill="#cbd5e1" font-size="10">Transport: Dedicated TCP Port 853</text>
    <text x="35" y="186" fill="#cbd5e1" font-size="9">TLS encrypted tunnel to upstream resolver</text>
    <text x="35" y="200" fill="#94a3b8" font-size="9">Easily blocked by enterprise firewalls on port 853</text>
    
    <!-- Protocol 3: DoH -->
    <rect x="20" y="230" width="320" height="85" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="35" y="252" fill="#10b981" font-size="11" font-weight="bold">DNS over HTTPS (DoH / RFC 8484)</text>
    <text x="35" y="270" fill="#cbd5e1" font-size="10">Transport: Standard HTTPS TCP Port 443</text>
    <text x="35" y="286" fill="#cbd5e1" font-size="9">Queries disguised inside HTTP/2 &amp; HTTP/3 web traffic</text>
    <text x="35" y="300" fill="#10b981" font-size="9" font-weight="bold">Unblockable: Indistinguishable from web browsing</text>
  </g>
</svg>`,
      caption: {
        en: 'DNSSEC authenticates data integrity through an unbroken chain of trust back to ICANN; DoH and DoT encrypt transport to shield privacy from ISPs.',
        bn: 'DNSSEC আইক্যান রুট পর্যন্ত একটি অবিচ্ছিন্ন চেইন-অব-ট্রাস্টের মাধ্যমে সত্যতা নিশ্চিত করে; DoH এবং DoT আইএসপির নজরদারি থেকে তথ্য এনক্রিপ্ট করে রাখে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'dnssec-validator.js',
      code: `// Deterministic Simulation of a DNSSEC Cryptographic Chain-of-Trust
// Validates DS hashes and RRSIG digital signatures to detect tampered records

const crypto = require('crypto');

function computeSha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex').slice(0, 16);
}

class DnssecZoneValidator {
  constructor() {
    // 1. Authoritative Zone Keys (example.com)
    this.childKsk = 'PUBLIC_KEY_SIGNING_KEY_example.com_2026';
    this.childZsk = 'PUBLIC_ZONE_SIGNING_KEY_example.com_2026';

    // 2. Parent Zone (.com) holds Delegation Signer (DS) record
    // DS is the SHA-256 hash of child KSK
    this.parentDsRecord = computeSha256(this.childKsk);

    // 3. Child Zone signs its A record with ZSK private key
    this.aRecord = 'example.com. 3600 IN A 93.184.215.14';
    this.rrsigSignature = computeSha256(this.aRecord + ':' + this.childZsk);
  }

  // Resolver verifies chain of trust
  validateRecord(incomingRecord, incomingSignature) {
    console.log('--- Step 1: Validating Parent-to-Child DS Chain ---');
    const computedChildHash = computeSha256(this.childKsk);
    const isDsValid = computedChildHash === this.parentDsRecord;
    console.log('DS Match in .com Parent:', isDsValid ? 'VALID (Trust Anchored)' : 'INVALID');

    if (!isDsValid) {
      return { status: 'SERVFAIL', reason: 'DS Record mismatch with parent zone' };
    }

    console.log('\\n--- Step 2: Validating Record RRSIG Signature ---');
    const expectedSignature = computeSha256(incomingRecord + ':' + this.childZsk);
    const isSignatureValid = incomingSignature === expectedSignature;
    console.log('RRSIG Signature Check  :', isSignatureValid ? 'VALID (Authentic Data)' : 'FORGED');

    if (!isSignatureValid) {
      return { status: 'SERVFAIL', reason: 'RRSIG signature does not match payload' };
    }

    return { status: 'NOERROR', authenticatedData: true, record: incomingRecord };
  }
}

const validator = new DnssecZoneValidator();

// Test 1: Legitimate Authentic DNS Query
console.log('=== TEST 1: Legitimate Authentic DNSSEC Response ===');
const legit = validator.validateRecord(validator.aRecord, validator.rrsigSignature);
console.log('Resolver Result:', legit.status, '(AD flag =', legit.authenticatedData + ')');

// Test 2: Spoofed / Tampered Cache Poisoning Attack
console.log('\\n=== TEST 2: Tampered Response (Attacker alters IP to 6.6.6.6) ===');
const forgedRecord = 'example.com. 3600 IN A 6.6.6.6';
const poisoned = validator.validateRecord(forgedRecord, validator.rrsigSignature);
console.log('Resolver Result:', poisoned.status, '(' + poisoned.reason + ')');`,
      caption: {
        en: 'The simulation verifies the DNSSEC chain of trust and demonstrates how tampered records trigger SERVFAIL rather than poisoning caches.',
        bn: 'সিমুলেশনটি DNSSEC চেইন-অব-ট্রাস্ট যাচাই করে এবং দেখায় কীভাবে পরিবর্তিত রেকর্ড ক্যাশ দূষিত না করে SERVFAIL তৈরি করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'DoH versus DoT: The Transport Privacy Battle',
        bn: 'DoH বনাম DoT: ট্রান্সপোর্ট প্রাইভেসি যুদ্ধ'
      },
      text: {
        en: 'While DNSSEC guarantees that records cannot be altered, it sends queries in unencrypted plaintext, allowing internet service providers to log every domain you visit. DNS over TLS (DoT) encrypts queries over dedicated TCP port 853, making it straightforward for enterprise network administrators to inspect or block. Conversely, DoH tunnels lookups through port 443 alongside standard HTTPS browsing, which prevents third parties from blocking or tracking user destinations.',
        bn: 'DNSSEC নিশ্চিত করে যে রেকর্ড পরিবর্তন করা যাবে না, তবে এটি অনুসন্ধানগুলো প্লেইনটেক্সটে পাঠায় যার ফলে ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) আপনার প্রতিটি পরিদর্শন করা ডোমেনের তালিকা রাখতে পারে। DNS over TLS (DoT) ডেডিকেটেড TCP পোর্ট ৮৫৩ এর মাধ্যমে ট্রাফিক এনক্রিপ্ট করে, যা অফিস বা ফায়ারওয়ালের পক্ষে ফিল্টার করা সহজ করে। অন্যদিকে DoH সাধারণ HTTPS ব্রাউজিংয়ের সাথে পোর্ট ৪৪৩ দিয়ে অনুসন্ধান পাঠায়, যা তৃতীয় পক্ষ কর্তৃক ব্লকিং বা ব্যবহারকারীর গন্তব্য ট্র্যাক করা প্রতিহত করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-sec-ex-1',
      kind: 'predict',
      question: {
        en: 'How many total unique numerical values exist in the standard 16-bit DNS Transaction ID field (2^16 = 65536)? Type the number.',
        bn: 'স্ট্যান্ডার্ড ১৬-বিট ডিএনএস ট্রানজ্যাকশন আইডি ফিল্ডে মোট কতটি অনন্য সংখ্যাগত মান বিদ্যমান থাকে ( ২^১৬ = ৬৫৫৩৬ )? সংখ্যাটি টাইপ করুন।'
      },
      answer: '65536',
      hint: {
        en: 'Calculate 2 raised to the 16th power: 65536.',
        bn: '২ এর ১৬তম ঘাত হিসাব করুন: ৬৫৫৩৬।'
      },
      explanation: {
        en: 'A 16-bit field allows exactly 2^16 = 65536 unique values, which Kaminsky attack proved was too small to prevent spoofed brute-force flooding.',
        bn: '১৬-বিট ফিল্ডে ঠিক ২^১৬ = ৬৫৫৩৬ টি মান থাকে, যা কামিনস্কি আক্রমণ প্রমাণ করেছিল ব্রুট-ফোর্স বন্যা ঠেকানোর পক্ষে যথেষ্ট নয়।'
      },
    },
    {
      id: 'dns-sec-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the architectural purpose of the Delegation Signer (DS) record in the DNSSEC chain of trust?',
        bn: 'DNSSEC চেইন অব ট্রাস্টে ডেলিগেশন সাইনার (DS) রেকর্ডের মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It resides in the parent zone containing a cryptographic hash of the child zone KSK, linking parent to child in an unbroken chain of trust',
          bn: 'এটি প্যারেন্ট জোনে অবস্থান করে এবং চাইল্ড জোনের KSK-এর ক্রিপ্টোগ্রাফিক হ্যাশ ধারণ করে প্যারেন্ট ও চাইল্ডের মাঝে অবিচ্ছিন্ন ট্রাস্ট চেইন বজায় রাখে',
        },
        {
          en: 'It encrypts user passwords before submitting HTML login forms',
          bn: 'এটি এইচটিএমএল লগইন ফর্ম সাবমিট করার আগে ব্যবহারকারীর পাসওয়ার্ড এনক্রিপ্ট করে',
        },
        {
          en: 'It sets the physical maximum bandwidth of the router in megabits',
          bn: 'এটি মেগাবিট এককে রাউটারের ফিজিক্যাল সর্বোচ্চ ব্যান্ডউইথ নির্ধারণ করে',
        },
        {
          en: 'It deletes malicious cookies from the client browser storage',
          bn: 'এটি ক্লায়েন্ট ব্রাউজার স্টোরেজ থেকে ক্ষতিকর কুকি মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'The parent zone holds a cryptographic hash of the child KSK.',
        bn: 'প্যারেন্ট জোন চাইল্ড KSK-এর একটি ক্রিপ্টোগ্রাফিক হ্যাশ ধারণ করে।',
      },
      explanation: {
        en: 'The DS record in the parent zone certifies the authenticity of the child zone public key, anchoring the security delegation.',
        bn: 'প্যারেন্ট জোনের DS রেকর্ড চাইল্ড জোনের পাবলিক কি-এর সত্যতা নিশ্চিত করে এবং নিরাপত্তা প্রত্যয়ন টিকিয়ে রাখে।'
      },
    },
    {
      id: 'dns-sec-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which dedicated transport layer TCP port number is officially allocated for DNS over TLS (DoT / RFC 7858)?',
        bn: 'DNS over TLS ( DoT / RFC 7858 ) এর জন্য আনুষ্ঠানিকভাবে কোন ডেডিকেটেড TCP পোর্ট নম্বরটি বরাদ্দ করা হয়েছে?'
      },
      options: [
        {
          en: 'TCP port 853',
          bn: 'TCP পোর্ট ৮৫৩',
        },
        {
          en: 'TCP port 22',
          bn: 'TCP পোর্ট ২২',
        },
        {
          en: 'TCP port 25',
          bn: 'TCP পোর্ট ২৫',
        },
        {
          en: 'TCP port 80',
          bn: 'TCP পোর্ট ৮০',
        },
      ],
      answer: 0,
      hint: {
        en: 'The standardized IANA port for DoT is 853.',
        bn: 'DoT-এর জন্য স্ট্যান্ডার্ড আইক্যান পোর্ট হলো ৮৫৩।'
      },
      explanation: {
        en: 'RFC 7858 defines TCP port 853 as the dedicated transport port for DNS over TLS.',
        bn: 'RFC 7858 অনুসারে DNS over TLS-এর জন্য নির্ধারিত ডেডিকেটেড পোর্ট হলো TCP ৮৫৩।'
      },
    },
    {
      id: 'dns-sec-ex-4',
      kind: 'predict',
      question: {
        en: 'If a DNSSEC-validating recursive resolver detects an invalid cryptographic signature on an A record, which 1-digit RCODE status value representing SERVFAIL does it return? (2). Type the number.',
        bn: 'যদি কোনো DNSSEC-ভ্যালিডেটিং রিকার্সিভ রিজলভার কোনো A রেকর্ডে ভুল ক্রিপ্টোগ্রাফিক স্বাক্ষর শনাক্ত করে, তবে এটি SERVFAIL নির্দেশক কোন ১-সংখ্যার RCODE স্ট্যাটাস প্রদান করে? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'SERVFAIL corresponds to RCODE 2.',
        bn: 'SERVFAIL এর RCODE মান হলো ২।'
      },
      explanation: {
        en: 'When cryptographic verification fails in DNSSEC, resolvers refuse to return untrusted data and return SERVFAIL (RCODE 2).',
        bn: 'DNSSEC-এ ক্রিপ্টোগ্রাফিক যাচাই ব্যর্থ হলে রিজলভার অবিশ্বাসযোগ্য ডাটা দেওয়া বন্ধ করে SERVFAIL ( RCODE 2 ) প্রদান করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'DNS Security & Cryptography Quiz',
      bn: 'ডিএনএস নিরাপত্তা ও ক্রিপ্টোগ্রাফি কুইজ'
    },
    questions: [
      {
        id: 'dns-sec-qz-1',
        kind: 'mcq',
        topic: 'kaminsky-attack-mechanism',
        question: {
          en: 'How did the historic Kaminsky vulnerability exploit the architecture of traditional DNS resolvers?',
          bn: 'ঐতিহাসিক কামিনস্কি আক্রমণ কীভাবে ঐতিহ্যবাহী ডিএনএস রিজলভারের দুর্বলতাকে কাজে লাগিয়েছিল?'
        },
        options: [
          {
            en: 'By sending rapid queries for randomized non-existent subdomains, attackers flooded resolvers with forged authoritative delegation replies until guessing the 16-bit transaction ID, hijacking entire domains',
            bn: 'এলোমেলো অস্তিত্বহীন সাবডোমেনের অনুরোধ পাঠিয়ে আক্রমণকারীরা ১৬-বিট ট্রানজ্যাকশন আইডি মিলে না যাওয়া পর্যন্ত ভুয়া উত্তরের বন্যা বইয়ে দিত, যা পুরো ডোমেন হাইজ্যাক করত',
          },
          {
            en: 'By cutting the physical internet fiber cable under the Atlantic ocean',
            bn: 'আটলান্টিক মহাসাগরের তলদেশের ফিজিক্যাল ইন্টারনেট ফাইবার কেবল কেটে ফেলে',
          },
          {
            en: 'By replacing all DNS server hard drives with magnetic tape reels',
            bn: 'সমস্ত ডিএনএস সার্ভারের হার্ড ড্রাইভ পরিবর্তন করে ম্যাগনেটিক টেপ বসিয়ে',
          },
          {
            en: 'By turning off the electricity in all global telecommunication offices',
            bn: 'বিশ্বের সমস্ত টেলিযোগাযোগ অফিসে বিদ্যুৎ সংযোগ বন্ধ করে দিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Brute-forcing transaction IDs using forged replies to randomized subdomain queries.',
          bn: 'এলোমেলো সাবডোমেন কোয়েরির মাধ্যমে ট্রানজ্যাকশন আইডি ব্রুট-ফোর্স করা।',
        },
        explanation: {
          en: 'Kaminsky attack repeatedly queried random subdomains, guessing the 16-bit transaction ID on authoritative delegations to poison the target domain cache in seconds.',
          bn: 'কামিনস্কি আক্রমণ দ্রুত সাবডোমেন কুয়েরি চালিয়ে এবং ১৬-বিট আইডি মিলিয়ে সেকেন্ডের মধ্যে টার্গেট ডোমেনের ক্যাশ দূষিত করতে সক্ষম হয়েছিল।'
        },
      },
      {
        id: 'dns-sec-qz-2',
        kind: 'mcq',
        topic: 'dnssec-vs-doh-distinction',
        question: {
          en: 'What fundamental security distinction separates DNSSEC from transport encryption protocols like DNS over HTTPS (DoH)?',
          bn: 'কোন মৌলিক নিরাপত্তা পার্থক্য DNSSEC-কে DNS over HTTPS (DoH) এর মতো ট্রান্সপোর্ট এনক্রিপশন প্রোটোকল থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'DNSSEC guarantees data authenticity and tamper-proofing through digital signatures without encrypting queries; DoH encrypts the transport channel to shield query privacy from eavesdropping ISPs',
            bn: 'DNSSEC কোয়েরি এনক্রিপ্ট না করেই ডিজিটাল স্বাক্ষরের মাধ্যমে তথ্যের সত্যতা ও অবিকৃত অবস্থা নিশ্চিত করে; অন্যদিকে DoH ট্রান্সপোর্ট চ্যানেল এনক্রিপ্ট করে আইএসপির নজরদারি থেকে গোপনীয়তা রক্ষা করে',
          },
          {
            en: 'DNSSEC only works on laptops, while DoH only works on desktop towers',
            bn: 'DNSSEC কেবল ল্যাপটপে চলে, আর DoH কেবল ডেস্কটপ কম্পিউটারে চলে',
          },
          {
            en: 'DoH deletes website cookies, while DNSSEC accelerates CPU clock speeds',
            bn: 'DoH ওয়েবসাইটের কুকি মুছে ফেলে, আর DNSSEC প্রসেসরের ক্লক স্পিড বাড়ায়',
          },
          {
            en: 'There is no difference; DNSSEC and DoH are identical synonyms',
            bn: 'এদের মাঝে কোনো পার্থক্য নেই; DNSSEC এবং DoH সম্পূর্ণ একই জিনিস',
          },
        ],
        answer: 0,
        hint: {
          en: 'DNSSEC provides authenticity; DoH provides transport privacy/confidentiality.',
          bn: 'DNSSEC সত্যতা ও নির্ভরতা নিশ্চিত করে; DoH ট্রান্সপোর্টের গোপনীয়তা রক্ষা করে।',
        },
        explanation: {
          en: 'DNSSEC prevents forgery and tampering via cryptographic signatures. DoH prevents eavesdropping and surveillance by tunneling queries inside HTTPS.',
          bn: 'DNSSEC ডিজিটাল স্বাক্ষরের সাহায্যে জালিয়াতি প্রতিরোধ করে। DoH অনুসন্ধানের তথ্যকে HTTPS এর ভেতর লুকিয়ে রেখে নজরদারি প্রতিহত করে।'
        },
      },
      {
        id: 'dns-sec-qz-3',
        kind: 'mcq',
        topic: 'nsec3-authenticated-denial',
        question: {
          en: 'What is the function of NSEC and NSEC3 records in a DNSSEC-signed zone?',
          bn: 'একটি DNSSEC-স্বাক্ষরিত জোনে NSEC এবং NSEC3 রেকর্ডের কাজের ভূমিকা কী?'
        },
        options: [
          {
            en: 'They provide Authenticated Denial of Existence, cryptographically proving that a queried domain or record type does not exist without exposing the entire zone list',
            bn: 'তারা অস্তিত্বহীনতার প্রমাণিত অস্বীকৃতি প্রদান করে, যা পুরো জোন ফাঁস না করেই ক্রিপ্টোগ্রাফিকভাবে প্রমাণ করে যে অনুরোধ করা ডোমেনটির কোনো অস্তিত্ব নেই',
          },
          {
            en: 'They double the speed of internet downloads for large software files',
            bn: 'তারা বড় সফটওয়্যার ফাইলের ইন্টারনেট ডাউনলোড গতি দ্বিগুণ করে তোলে',
          },
          {
            en: 'They render transparent graphical overlays over website images',
            bn: 'তারা ওয়েবসাইটের ছবির ওপর স্বচ্ছ গ্রাফিক্যাল ওভারলে তৈরি করে',
          },
          {
            en: 'They convert audio voice recordings into text documents',
            bn: 'তারা অডিও ভয়েস রেকর্ডিংকে টেক্সট নথিতে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Cryptographic proof that a domain does not exist in the zone.',
          bn: 'জোনে কোনো ডোমেন না থাকার ক্রিপ্টোগ্রাফিক প্রমাণ।',
        },
        explanation: {
          en: 'NSEC/NSEC3 signs the cryptographic gap between existing domains, proving an NXDOMAIN is authentic and preventing forged negative responses.',
          bn: 'NSEC/NSEC3 বিদ্যমান ডোমেনগুলোর মধ্যবর্তী শূন্যস্থানের ওপর স্বাক্ষর করে প্রমাণ করে যে কোনো ডোমেনের অনুপস্থিতি সম্পূর্ণ বাস্তব ও অপরিবর্তিত।'
        },
      },
      {
        id: 'dns-sec-qz-4',
        kind: 'mcq',
        topic: 'doh-port-443-advantage',
        question: {
          en: 'Why was DNS over HTTPS (DoH / RFC 8484) engineered to utilize standard TCP port 443 rather than an exclusive new network port?',
          bn: 'কেন DNS over HTTPS ( DoH / RFC 8484 ) একটি নতুন স্বতন্ত্র পোর্ট ব্যবহারের বদলে সাধারণ TCP পোর্ট ৪৪৩ ব্যবহার করার জন্য ডিজাইন করা হয়েছিল?'
        },
        options: [
          {
            en: 'Traffic on port 443 is indistinguishable from standard HTTPS web browsing, preventing censorship, surveillance, and blocking by intermediate network operators or firewalls',
            bn: 'পোর্ট ৪৪৩-এর ট্রাফিক সাধারণ HTTPS ওয়েব ব্রাউজিং থেকে আলাদা করা অসম্ভব, যা সেন্সরশিপ, নজরদারি এবং মধ্যবর্তী ফায়ারওয়াল দ্বারা ব্লকিং প্রতিরোধ করে',
          },
          {
            en: 'Because computer network cards only have one physical port',
            bn: 'কারণ কম্পিউটার নেটওয়ার্ক কার্ডে কেবল ১ টি ফিজিক্যাল পোর্ট থাকে',
          },
          {
            en: 'To make internet web pages load upside down in other countries',
            bn: 'অন্যান্য দেশে ইন্টারনেট ওয়েবপেজ উল্টো করে প্রদর্শনের উদ্দেশ্যে',
          },
          {
            en: 'Because port 443 is the only port supported by Wi-Fi routers',
            bn: 'কারণ পোর্ট ৪৪৩ হলো ওয়াইফাই রাউটার সমর্থিত একমাত্র নেটওয়ার্ক পোর্ট',
          },
        ],
        answer: 0,
        hint: {
          en: 'Blending into ubiquitous HTTPS traffic to evade censorship and blocking.',
          bn: 'সেন্সরশিপ ও ব্লকিং এড়াতে সাধারণ HTTPS ট্রাফিকের সাথে মিশে যাওয়া।',
        },
        explanation: {
          en: 'By sharing TCP port 443 with normal web traffic, DoH cannot be blocked without blocking the entire World Wide Web, ensuring user privacy against network intermediaries.',
          bn: 'ওয়েব ট্রাফিকের সাথে পোর্ট ৪৪৩ শেয়ার করার কারণে পুরো ওয়েব বন্ধ না করে DoH বন্ধ করা সম্ভব হয় না, যা ব্যবহারকারীর গোপনীয়তা সুরক্ষিত রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'reverse-dns',
    title: {
      en: 'Reverse DNS & PTR Records: In-Addr.Arpa',
      bn: 'রিভার্স ডিএনএস এবং PTR রেকর্ড: In-Addr.Arpa'
    },
  },
};
