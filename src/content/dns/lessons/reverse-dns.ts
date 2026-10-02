import type { Lesson } from '../../../lib/types';

export const ReverseDnsLesson: Lesson = {
  slug: 'reverse-dns',
  tech: 'dns',
  title: {
    en: 'Reverse DNS & PTR Records: In-Addr.Arpa & FCrDNS',
    bn: 'রিভার্স ডিএনএস এবং PTR রেকর্ড: In-Addr.Arpa এবং FCrDNS'
  },
  summary: {
    en: 'Understand how Reverse DNS translates numerical IP addresses back into verified human-readable hostnames. Master PTR record formatting in the special in-addr.arpa (IPv4 reversed octets) and ip6.arpa (IPv6 reversed nibbles) domains. Explore Forward-Confirmed Reverse DNS (FCrDNS), network traceroute diagnostics, and why missing PTR records cause enterprise SMTP mail servers to instantly reject incoming email.',
    bn: 'রিভার্স ডিএনএস কীভাবে সংখ্যাভিত্তিক আইপি ঠিকানাকে মানুষের পাঠযোগ্য হোস্টনেমে রূপান্তর করে তা বুঝুন। বিশেষ in-addr.arpa ( IPv4 বিপরীত অক্টেট ) এবং ip6.arpa ( IPv6 বিপরীত নিবল ) ডোমেনে PTR রেকর্ড ফরম্যাটিং শিখুন। ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS), নেটওয়ার্ক ট্রেসরুট ডায়াগনস্টিকস এবং PTR রেকর্ড না থাকলে কেন এন্টারপ্রাইজ SMTP মেইল সার্ভার আগত ইমেইল তৎক্ষণাৎ বাতিল করে দেয় তা গভীরভাবে জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'reverse-lookup-problem',
      text: {
        en: 'The Reverse Lookup Problem: Finding Names from Numbers',
        bn: 'রিভার্স লুকআপ সমস্যা: সংখ্যা থেকে নাম খুঁজে বের করা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When network engineers diagnose connection drops, forward DNS lookups only tell half the story. A forward lookup starts from a human-readable hostname (such as mail.example.com) and yields an IP address. But servers, firewalls, and logging systems frequently need to do the exact opposite: start from an unfamiliar IP address and discover the legitimate hostname behind it.',
        bn: 'নেটওয়ার্ক প্রকৌশলীরা যখন কোনো সংযোগের সমস্যা পরীক্ষা করেন, তখন কেবল ফরওয়ার্ড ডিএনএস দিয়ে সম্পূর্ণ চিত্র পাওয়া যায় না। একটি ফরওয়ার্ড লুকআপ মানুষের পাঠযোগ্য হোস্টনেম ( যেমন mail.example.com ) থেকে একটি আইপি ঠিকানা বের করে দেয়। কিন্তু সার্ভার, ফায়ারওয়াল এবং লগিং সিস্টেমগুলোকে প্রায়ই ঠিক এর উল্টো কাজটি করতে হয়: কোনো অপরিচিত আইপি ঠিকানা থেকে তার পেছনের আসল হোস্টনেম খুঁজে বের করা।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'IP routing is hierarchically grouped from left to right (from broad subnet 93.0.0.0/8 down to local subnet 93.184.215.0/24). Conversely, DNS domain trees branch in reverse order from right to left (TLD .com on the right, hostnames on the left). To search for an IP across normal domain zones, a server would have to scan every domain on earth! Reverse DNS resolves this architectural incompatibility by introducing special infrastructure domains.',
        bn: 'আইপি রাউটিং সাধারণত বাম থেকে ডানে বিন্যস্ত হয় ( যেমন বড় সাবনেট 93.0.0.0/8 থেকে শুরু করে লোকাল সাবনেট 93.184.215.0/24 পর্যন্ত )। অন্যদিকে ডিএনএস ডোমেন ট্রি সম্পূর্ণ উল্টোভাবে ডান থেকে বামে প্রসারিত হয় ( ডানে TLD .com এবং বামে হোস্টনেম থাকে )। সাধারণ ডোমেন জোনের মাধ্যমে কোনো আইপি খুঁজতে গেলে বিশ্বের প্রতিটি ডোমেন স্ক্যান করতে হতো! রিভার্স ডিএনএস বিশেষ ইনফ্রাস্ট্রাকচার ডোমেন তৈরির মাধ্যমে এই কাঠামোগত অমিল দূর করেছে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. In-Addr.Arpa & Octet Reversal (IPv4)',
            bn: '১. In-Addr.Arpa এবং অক্টেট উল্টানো (IPv4)'
          },
          text: {
            en: 'Under RFC 1035, IPv4 reverse lookups use the special in-addr.arpa domain. The 4 numerical octets of the IPv4 address are reversed so the most significant network prefix appears on the right. For example, IP 93.184.215.14 becomes 14.215.184.93.in-addr.arpa.',
            bn: 'RFC 1035 অনুসারে IPv4 রিভার্স লুকআপ বিশেষ in-addr.arpa ডোমেন ব্যবহার করে। IPv4 ঠিকানার ৪ টি অক্টেটকে উল্টো করা হয় যাতে বড় নেটওয়ার্ক প্রিফিক্সটি ডান পাশে অবস্থান করে। উদাহরণস্বরূপ, আইপি 93.184.215.14 রূপান্তরিত হয়ে 14.215.184.93.in-addr.arpa হয়ে যায়।'
          },
        },
        {
          title: {
            en: '2. PTR Record (Pointer)',
            bn: '২. PTR রেকর্ড ( পয়েন্টার )'
          },
          text: {
            en: 'Inside the reversed in-addr.arpa zone file, a Pointer (PTR) record points to the canonical hostname: 14.215.184.93.in-addr.arpa. IN PTR mail.example.com. Resolvers query this PTR record over standard port 53 to learn the hostname associated with the IP.',
            bn: 'বিপরীত in-addr.arpa জোন ফাইলের ভেতর একটি পয়েন্টার (PTR) রেকর্ড মূল ক্যানোনিক্যাল হোস্টনেমকে নির্দেশ করে: 14.215.184.93.in-addr.arpa. IN PTR mail.example.com.। রিজলভারগুলো সাধারণ পোর্ট ৫৩ দিয়ে এই PTR রেকর্ড অনুসন্ধান করে আইপির সাথে যুক্ত হোস্টনেম জেনে নেয়।'
          },
        },
        {
          title: {
            en: '3. Ip6.Arpa & Nibble Reversal (IPv6)',
            bn: '৩. Ip6.Arpa এবং নিবল উল্টানো (IPv6)'
          },
          text: {
            en: 'For 128-bit IPv6 addresses (RFC 3596), the address is expanded into 32 individual 4-bit hexadecimal nibbles separated by dots in reverse order, terminating under the ip6.arpa top-level domain.',
            bn: '১২৮-বিট IPv6 ঠিকানার ক্ষেত্রে ( RFC 3596 ) সম্পূর্ণ ঠিকানাকে ডট দিয়ে আলাদা করা ৩২ টি পৃথক ৪-বিট হেক্সাডেসিমেল নিবলে ভেঙে উল্টো ক্রমে সাজানো হয় এবং শেষে ip6.arpa ডোমেন যুক্ত করা হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Forward-Confirmed Reverse DNS (FCrDNS) Verification Handshake',
        bn: 'ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS) যাচাইকরণ হ্যান্ডশেক'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Forward confirmed reverse DNS verification flow between sending mail server and receiving enterprise mail server">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">FORWARD-CONFIRMED REVERSE DNS (FCrDNS) VALIDATION HANDSHAKE</text>
  
  <!-- Sending Mail Server -->
  <g transform="translate(40, 55)">
    <rect width="180" height="85" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="28" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">SENDING MAIL SERVER</text>
    <text x="90" y="48" fill="#cbd5e1" font-size="10" text-anchor="middle">IP: 198.51.100.25</text>
    <text x="90" y="68" fill="#f59e0b" font-size="9" text-anchor="middle">Claims: mail.example.com</text>
  </g>
  
  <!-- Arrow Step 1 -->
  <line x1="220" y1="95" x2="600" y2="95" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="600,95 590,90 590,100" fill="#38bdf8"/>
  <text x="410" y="85" fill="#38bdf8" font-size="10" text-anchor="middle">Step 1: TCP Port 25 Connection Initiated</text>
  
  <!-- Receiving Mail Server -->
  <g transform="translate(600, 55)">
    <rect width="200" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="100" y="28" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">RECEIVING MAIL SERVER</text>
    <text x="100" y="48" fill="#cbd5e1" font-size="10" text-anchor="middle">Gmail / Outlook MTA</text>
    <text x="100" y="68" fill="#94a3b8" font-size="9" text-anchor="middle">Enforces Anti-Spam FCrDNS</text>
  </g>
  
  <!-- Step 2: Reverse Lookup Box -->
  <g transform="translate(40, 165)">
    <rect width="360" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="180" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">PHASE 1: REVERSE DNS PTR LOOKUP</text>
    <text x="25" y="48" fill="#cbd5e1" font-size="10">Query: 25.100.51.198.in-addr.arpa (PTR)</text>
    <text x="25" y="70" fill="#10b981" font-size="10" font-weight="bold">Answer: mail.example.com.</text>
    <text x="25" y="92" fill="#94a3b8" font-size="9">If PTR is missing -> IMMEDIATE REJECTION (SPAM!)</text>
  </g>
  
  <!-- Step 3: Forward Confirmation Box -->
  <g transform="translate(440, 165)">
    <rect width="360" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">PHASE 2: FORWARD CONFIRMATION (A RECORD)</text>
    <text x="25" y="48" fill="#cbd5e1" font-size="10">Query: mail.example.com (A Record)</text>
    <text x="25" y="70" fill="#10b981" font-size="10" font-weight="bold">Answer: 198.51.100.25</text>
    <text x="25" y="92" fill="#cbd5e1" font-size="9">Does forward IP match original sending IP? YES!</text>
  </g>
  
  <!-- Final Verdict Box -->
  <g transform="translate(40, 300)">
    <rect width="760" height="105" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="380" y="30" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">FCrDNS STATUS: VERIFIED AUTHENTIC SENDER</text>
    <text x="380" y="55" fill="#cbd5e1" font-size="11" text-anchor="middle">198.51.100.25 -> mail.example.com -> 198.51.100.25 (Two-way cryptographic match)</text>
    <text x="380" y="78" fill="#94a3b8" font-size="10" text-anchor="middle">Mail is accepted for delivery into user inbox • Compromised residential botnets cannot forge FCrDNS</text>
  </g>
</svg>`,
      caption: {
        en: 'FCrDNS requires a two-way mathematical match: the sending IP resolves to a hostname whose forward A record resolves back to that identical IP.',
        bn: 'FCrDNS একটি দ্বিমুখী গাণিতিক মিল দাবি করে: প্রেরক আইপি একটি হোস্টনেমে নির্দেশ করবে যার ফরওয়ার্ড A রেকর্ড পুনরায় সেই একই আইপিতেই মিলবে।'
      },
    },
    {
      type: 'heading',
      id: 'fcrdns-email-deliverability',
      text: {
        en: 'Forward-Confirmed Reverse DNS & Enterprise Email Deliverability',
        bn: 'ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস এবং এন্টারপ্রাইজ ইমেইল ডেলিভারিবিলিটি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Forward-Confirmed reverse DNS (FCrDNS) is the foundational gatekeeper of internet email systems. Over 85 percent of all email traffic originating from residential consumer broadband is unauthenticated botnet spam. Because residential ISPs block or refuse custom PTR record delegations to home connections, major email providers (such as Google and Microsoft) instantly reject incoming SMTP connections if the sending IP address lacks a valid PTR record.',
        bn: 'ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS) হলো ইন্টারনেট ইমেইল ব্যবস্থার অন্যতম প্রধান পাহারাদার। সাধারণ আবাসিক ব্রডব্যান্ড লাইন থেকে আসা ইমেইল ট্রাফিকের ৮৫ শতাংশেরও বেশি হলো বটনেটচালিত স্প্যাম। যেহেতু সাধারণ আইএসপিগুলো গৃহস্থালী সংযোগে কোনো কাস্টম PTR রেকর্ড বরাদ্দ দেয় না, তাই গুগল বা মাইক্রোসফটের মতো বড় ইমেইল সেবাদাতারা বৈধ PTR রেকর্ডহীন যেকোনো আইপি থেকে আসা মেইল তৎক্ষণাৎ প্রত্যাখ্যান করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Setting a PTR record is also critical for network diagnostics. When engineers run traceroute or mtr to inspect network routing hops across the internet, the diagnostic tool issues reverse DNS queries for every intermediate router IP. If PTR records are maintained properly, the traceroute displays clean, human-readable router names revealing geographical data centers and Autonomous System points of presence.',
        bn: 'নেটওয়ার্ক ডায়াগনস্টিকসের জন্যও PTR রেকর্ড অত্যন্ত গুরুত্বপূর্ণ। প্রকৌশলীরা যখন ইন্টারনেটে রাউটিং পথ পর্যবেক্ষণের জন্য traceroute বা mtr চালান, তখন টুলটি প্রতিটি মধ্যবর্তী রাউটার আইপির জন্য রিভার্স ডিএনএস অনুসন্ধান পরিচালনা করে। PTR রেকর্ড সঠিকভাবে কনফিগার করা থাকলে ট্রেসরুট মানুষের পাঠযোগ্য রাউটারের নাম ও ভৌগোলিক ডাটা সেন্টারের অবস্থান সুন্দরভাবে প্রদর্শন করতে পারে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'fcrdns-validator.js',
      code: `// Deterministic Forward-Confirmed Reverse DNS (FCrDNS) Validator
// Converts IPv4 to in-addr.arpa and verifies two-way handshake

class FCrDnsValidator {
  constructor() {
    // Simulated DNS Tables
    this.ptrTable = {
      '25.100.51.198.in-addr.arpa': 'mail.example.com',
      '14.215.184.93.in-addr.arpa': 'web.example.com',
    };

    this.forwardATable = {
      'mail.example.com': '198.51.100.25',
      'web.example.com':  '93.184.215.14',
      'fake-spammer.com': '198.51.100.25'
    };
  }

  // Convert IPv4 into reverse in-addr.arpa format
  static formatReverseIpv4(ip) {
    return ip.split('.').reverse().join('.') + '.in-addr.arpa';
  }

  // Verify FCrDNS two-way handshake
  verifyConnection(sendingIp) {
    const reverseKey = FCrDnsValidator.formatReverseIpv4(sendingIp);
    const hostname = this.ptrTable[reverseKey];

    console.log('Validating IP:', sendingIp);
    console.log('  1. Reverse PTR Lookup (' + reverseKey + ') ->', hostname || 'NONE');

    if (!hostname) {
      return { verified: false, reason: 'REJECT: Missing PTR record (suspected residential botnet)' };
    }

    const resolvedIp = this.forwardATable[hostname];
    console.log('  2. Forward A Lookup   (' + hostname + ') ->', resolvedIp || 'NONE');

    if (resolvedIp !== sendingIp) {
      return { verified: false, reason: 'REJECT: Forward IP ' + resolvedIp + ' does not match sending IP ' + sendingIp };
    }

    return { verified: true, canonicalHost: hostname, ip: sendingIp };
  }
}

const validator = new FCrDnsValidator();

console.log('=== TEST 1: Legitimate Mail Server with Valid FCrDNS ===');
const test1 = validator.verifyConnection('198.51.100.25');
console.log('Verdict:', test1.verified ? 'ACCEPTED for inbox delivery' : test1.reason);

console.log('\\n=== TEST 2: Residential IP with Missing PTR Record ===');
const test2 = validator.verifyConnection('203.0.113.88');
console.log('Verdict:', test2.verified ? 'ACCEPTED' : test2.reason);`,
      caption: {
        en: 'The validator converts IPv4 to in-addr.arpa, checks PTR existence, and confirms that the forward A record matches the sending IP.',
        bn: 'ভ্যালিডেটরটি IPv4-কে in-addr.arpa-তে রূপান্তর করে, PTR রেকর্ড পরীক্ষা করে এবং ফরওয়ার্ড A রেকর্ডের সাথে প্রেরকের আইপির মিল নিশ্চিত করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Who Controls Reverse DNS? (ISP vs Domain Registrar)',
        bn: 'রিভার্স ডিএনএস কার নিয়ন্ত্রণে থাকে? ( আইএসপি বনাম ডোমেন রেজিস্ট্রার )'
      },
      text: {
        en: 'Unlike forward A records that you manage inside your domain registrar panel, PTR records are owned strictly by whoever was assigned the physical IP address block by Regional Internet Registries (RIRs like ARIN, RIPE, or APNIC). To establish a PTR record for your cloud mail server, you must request it through your hosting infrastructure provider (such as configuring Reverse DNS on an AWS Elastic IP or DigitalOcean Droplet).',
        bn: 'ডোমেন রেজিস্ট্রার প্যানেলে পরিচালিত সাধারণ A রেকর্ডের মতো নয়, PTR রেকর্ডগুলোর একমাত্র মালিকানা থাকে সেই প্রতিষ্ঠানের যার নামে আঞ্চলিক ইন্টারনেট রেজিস্ট্রি ( যেমন ARIN, RIPE বা APNIC ) থেকে ফিজিক্যাল আইপি ব্লকটি বরাদ্দ দেওয়া হয়েছে। আপনার ক্লাউড মেইল সার্ভারের জন্য একটি PTR রেকর্ড তৈরি করতে হলে আপনাকে অবশ্যই আপনার হোস্টিং প্রোভাইডারের কাছে আবেদন করতে হয় ( যেমন AWS Elastic IP বা DigitalOcean ড্রপলেটে রিভার্স ডিএনএস সেট করা )।',
      },
    },
  ],
  exercises: [
    {
      id: 'dns-rev-ex-1',
      kind: 'predict',
      question: {
        en: 'For the IPv4 address "192.0.2.75", what is the reversed octet string that precedes ".in-addr.arpa"? Type the reversed sequence.',
        bn: 'IPv4 ঠিকানা "192.0.2.75" এর ক্ষেত্রে ".in-addr.arpa" এর পূর্বে কোন বিপরীত অক্টেট স্ট্রিংটি বসে? বিপরীত ক্রমটি টাইপ করুন।'
      },
      answer: '75.2.0.192',
      hint: {
        en: 'Reverse the 4 octets separated by dots: 75.2.0.192.',
        bn: 'ডট দিয়ে আলাদা করা ৪ টি অক্টেটকে উল্টো করুন: 75.2.0.192।'
      },
      explanation: {
        en: 'IPv4 reverse DNS inverts the dotted-decimal octets from right to left, turning 192.0.2.75 into 75.2.0.192.in-addr.arpa.',
        bn: 'IPv4 রিভার্স ডিএনএস দশমিক অক্টেটগুলোকে ডান থেকে বামে উল্টে দেয়, ফলে 192.0.2.75 হয়ে যায় 75.2.0.192.in-addr.arpa।'
      },
    },
    {
      id: 'dns-rev-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is Forward-Confirmed reverse DNS (FCrDNS) verification in network engineering?',
        bn: 'নেটওয়ার্ক ইঞ্জিনিয়ারিংয়ে ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS) যাচাইকরণ কী?'
      },
      options: [
        {
          en: 'A two-way validation ensuring that the PTR record for an IP points to a hostname whose forward A record resolves back to that exact same originating IP',
          bn: 'একটি দ্বিমুখী বৈধতা যাচাই যা নিশ্চিত করে যে আইপির PTR রেকর্ডটি যে হোস্টনেমকে নির্দেশ করে, সেই হোস্টনেমের ফরওয়ার্ড A রেকর্ড পুনরায় প্রেরকের মূল আইপিতেই মিলছে',
        },
        {
          en: 'A legal document signed with a notary to purchase a registered domain',
          bn: 'একটি নিবন্ধিত ডোমেন কেনার জন্য নোটারি পাবলিক কর্তৃক স্বাক্ষরিত আইনি দলিল',
        },
        {
          en: 'A hardware accelerator installed inside an optical fiber network switch',
          bn: 'একটি অপটিক্যাল ফাইবার নেটওয়ার্ক সুইচের ভেতরে স্থাপিত হার্ডওয়্যার এক্সিলারেটর',
        },
        {
          en: 'An encrypted password hash stored inside an SQL database table',
          bn: 'একটি এসকিউএল ডাটাবেস টেবিলে সংরক্ষিত এনক্রিপ্ট করা পাসওয়ার্ড হ্যাশ',
        },
      ],
      answer: 0,
      hint: {
        en: 'Two-way matching between reverse PTR and forward A records.',
        bn: 'রিভার্স PTR এবং ফরওয়ার্ড A রেকর্ডের মাঝে দ্বিমুখী মিল।',
      },
      explanation: {
        en: 'FCrDNS proves that the server operating at that IP address has authorized relationship with the domain owner, preventing IP spoofing.',
        bn: 'FCrDNS প্রমাণ করে যে ওই আইপিতে চলা সার্ভারের সাথে ডোমেন মালিকের প্রকৃত বৈধ সম্পর্ক রয়েছে, যা আইপি জালিয়াতি প্রতিরোধ করে।'
      },
    },
    {
      id: 'dns-rev-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why do major email providers like Google Gmail and Microsoft Outlook reject incoming SMTP emails from mail servers lacking valid PTR records?',
        bn: 'গুগল জিমেইল এবং মাইক্রোসফট আউটলুকের মতো বড় ইমেইল সেবাদাতারা কেন বৈধ PTR রেকর্ডহীন সার্ভার থেকে আসা ইমেইল বাতিল করে দেয়?'
      },
      options: [
        {
          en: 'To eliminate spam and botnets, as compromised residential home computers almost never have custom reverse PTR delegations configured',
          bn: 'স্প্যাম ও বটনেট নির্মূল করার জন্য, কারণ ভাইরাসাক্রান্ত সাধারণ গৃহস্থালী কম্পিউটারে কখনো কাস্টম রিভার্স PTR রেকর্ড কনফিগার করা থাকে না',
        },
        {
          en: 'Because PTR records increase the physical weight of email attachments',
          bn: 'কারণ PTR রেকর্ড ইমেইল সংযুক্তির শারীরিক ওজন বৃদ্ধি করে',
        },
        {
          en: 'To force all email users to purchase paid subscription accounts',
          bn: 'সমস্ত ইমেইল ব্যবহারকারীকে পেইড সাবস্ক্রিপশন কিনতে বাধ্য করার জন্য',
        },
        {
          en: 'Because email cannot be sent over internet fiber optic cables',
          bn: 'কারণ অপটিক্যাল ফাইবার কেবলের ওপর দিয়ে ইমেইল পাঠানো সম্ভব নয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Residential broadband connections lack custom PTR records, betraying botnets.',
        bn: 'আবাসিক ইন্টারনেট সংযোগে কাস্টম PTR না থাকা বটনেট শনাক্ত করতে সাহায্য করে।',
      },
      explanation: {
        en: 'Legitimate commercial mail servers always configure PTR records. Lacking a PTR record strongly correlates with malware-infected home PCs spamming the internet.',
        bn: 'বৈধ বাণিজ্যিক মেইল সার্ভারে সর্বদা PTR রেকর্ড থাকে। এটি না থাকা মানেই তা কোনো ম্যালওয়্যার আক্রান্ত হোম পিসি থেকে আসা স্প্যাম হওয়ার প্রবল সম্ভাবনা থাকে।'
      },
    },
    {
      id: 'dns-rev-ex-4',
      kind: 'predict',
      question: {
        en: 'How many individual 4-bit hexadecimal nibble labels exist in a complete reverse IPv6 "ip6.arpa" query name (128 / 4 = 32)? Type the number.',
        bn: 'একটি সম্পূর্ণ রিভার্স IPv6 "ip6.arpa" কোয়েরি নামে কয়টি পৃথক ৪-বিট হেক্সাডেসিমেল নিবল লেবেল বিদ্যমান থাকে ( ১২৮ / ৪ = ৩২ )? সংখ্যাটি টাইপ করুন।'
      },
      answer: '32',
      hint: {
        en: 'Divide 128 total bits by 4 bits per hexadecimal nibble: 32.',
        bn: '১২৮ বিটকে প্রতি হেক্সাডেসিমেল নিবলের ৪ বিট দিয়ে ভাগ করুন: ৩২।'
      },
      explanation: {
        en: 'A 128-bit IPv6 address breaks down into 32 separate 4-bit hexadecimal nibbles, each separated by a dot in ip6.arpa.',
        bn: 'একটি ১২৮-বিট IPv6 ঠিকানাকে ৩২ টি পৃথক ৪-বিট হেক্সাডেসিমেল নিবলে ভাগ করা হয়, যার প্রতিটি ডট দিয়ে আলাদা থাকে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Reverse DNS & PTR Records Quiz',
      bn: 'রিভার্স ডিএনএস এবং PTR রেকর্ড কুইজ'
    },
    questions: [
      {
        id: 'dns-rev-qz-1',
        kind: 'mcq',
        topic: 'why-reverse-ipv4-octets',
        question: {
          en: 'Why must the octets of an IPv4 address be reversed when constructing an in-addr.arpa reverse DNS query?',
          bn: 'একটি in-addr.arpa রিভার্স ডিএনএস কোয়েরি তৈরির সময় কেন IPv4 ঠিকানার অক্টেটগুলোকে উল্টো ক্রমে সাজাতে হয়?'
        },
        options: [
          {
            en: 'To align the hierarchical structure of IP addressing (which is broad on the left) with the hierarchical structure of DNS domain trees (which is broad on the right)',
            bn: 'আইপি অ্যাড্রেসিংয়ের স্তরভিত্তিক গঠনকে ( যার বড় অংশ বামে থাকে ) ডিএনএস ডোমেন ট্রির স্তরভিত্তিক গঠনের ( যার বড় অংশ ডানে থাকে ) সাথে সামঞ্জস্যপূর্ণ করার জন্য',
          },
          {
            en: 'To make the IP address completely secret and unreadable to hackers',
            bn: 'আইপি ঠিকানাকে আক্রমণকারীদের কাছে সম্পূর্ণ গোপন ও অপাঠ্য করে তোলার জন্য',
          },
          {
            en: 'Because computer hardware can only calculate arithmetic backwards',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার কেবল পেছন দিক থেকে গাণিতিক হিসাব করতে পারে',
          },
          {
            en: 'To save physical copper wiring inside the internet routers',
            bn: 'ইন্টারনেট রাউটারের ভেতরে থাকা তামার তার সাশ্রয় করার জন্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'Aligning left-to-right IP subnets with right-to-left DNS domain hierarchy.',
          bn: 'বামের আইপি সাবনেটকে ডানের ডিএনএস ডোমেন হায়ারার্কির সাথে মেলানো।',
        },
        explanation: {
          en: 'DNS evaluates domains from right to left (root to leaf). Reversing the IP octets ensures that the broad subnet is evaluated first, matching DNS delegation boundaries.',
          bn: 'ডিএনএস ডান থেকে বামে ডোমেন মূল্যায়ন করে। আইপির অক্টেট উল্টে দিলে বড় সাবনেটগুলো প্রথমে মূল্যায়িত হয় যা ডিএনএস ডেলিগেশনের সাথে মিলে যায়।'
        },
      },
      {
        id: 'dns-rev-qz-2',
        kind: 'mcq',
        topic: 'ptr-ownership-isp-vs-registrar',
        question: {
          en: 'Who holds the administrative authority to create and manage the PTR records for a given public IP address?',
          bn: 'একটি নির্দিষ্ট পাবলিক আইপি ঠিকানার জন্য PTR রেকর্ড তৈরি ও পরিচালনা করার প্রাতিষ্ঠানিক ক্ষমতা কার নিয়ন্ত্রণে থাকে?'
        },
        options: [
          {
            en: 'The Internet Service Provider (ISP) or cloud infrastructure provider that owns the allocated physical IP address block',
            bn: 'ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) বা ক্লাউড অবকাঠামো সেবাদাতা যার নামে ওই ফিজিক্যাল আইপি অ্যাড্রেস ব্লকটি বরাদ্দ দেওয়া হয়েছে',
          },
          {
            en: 'The domain registrar where the domain name was originally purchased',
            bn: 'যে ডোমেন রেজিস্ট্রার থেকে ডোমেন নামটি মূলত ক্রয় করা হয়েছিল',
          },
          {
            en: 'The manufacturer of the user computer motherboard',
            bn: 'ব্যবহারকারীর কম্পিউটার মাদারবোর্ড প্রস্তুতকারী কোম্পানি',
          },
          {
            en: 'Any user on the public internet who knows the password',
            bn: 'পাবলিক ইন্টারনেটের যেকোনো ব্যবহারকারী যার পাসওয়ার্ড জানা আছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The entity owning the physical IP block controls reverse DNS.',
          bn: 'ফিজিক্যাল আইপি ব্লকের মালিকানাপ্রাপ্ত প্রতিষ্ঠানই রিভার্স ডিএনএস নিয়ন্ত্রণ করে।',
        },
        explanation: {
          en: 'Regional Internet Registries allocate IP blocks to ISPs and hosting providers. Domain registrars control forward zones, but IP owners control reverse in-addr.arpa zones.',
          bn: 'আঞ্চলিক ইন্টারনেট রেজিস্ট্রিগুলো আইএসপি ও হোস্টিং সংস্থাকে আইপি বরাদ্দ দেয়। রেজিস্ট্রার ফরওয়ার্ড জোন দেখে কিন্তু আইপির মালিক রিভার্স জোন নিয়ন্ত্রণ করে।'
        },
      },
      {
        id: 'dns-rev-qz-3',
        kind: 'mcq',
        topic: 'traceroute-reverse-dns-diagnostics',
        question: {
          en: 'How does the network diagnostic tool "traceroute" utilize reverse DNS PTR lookups during route tracing?',
          bn: 'নেটওয়ার্ক ডায়াগনস্টিক টুল "traceroute" রুট বিশ্লেষণের সময় কীভাবে রিভার্স ডিএনএস PTR লুকআপ ব্যবহার করে?'
        },
        options: [
          {
            en: 'It queries PTR records for each intermediate router IP address along the packet path to display human-readable router hostnames and geographic data centers',
            bn: 'এটি প্যাকেট চলাচলের পথের প্রতিটি মধ্যবর্তী রাউটার আইপির জন্য PTR রেকর্ড খুঁজে মানুষের পাঠযোগ্য রাউটারের নাম ও ভৌগোলিক ডাটা সেন্টারের তথ্য প্রদর্শন করে',
          },
          {
            en: 'It changes the physical speed of the fiber optic laser pulses',
            bn: 'এটি ফাইবার অপটিক লেজার সংকেতের শারীরিক গতি পরিবর্তন করে',
          },
          {
            en: 'It measures the physical temperature of the computer monitor screen',
            bn: 'এটি কম্পিউটার মনিটর স্ক্রিনের শারীরিক তাপমাত্রা পরিমাপ করে',
          },
          {
            en: 'It downloads the operating system kernel updates from the manufacturer',
            bn: 'এটি প্রস্তুতকারকের কাছ থেকে অপারেটিং সিস্টেম কার্নেল আপডেট ডাউনলোড করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Translating cryptic hop IP addresses into recognizable router hostnames.',
          bn: 'অপরিচিত হপ আইপিগুলোকে চেনা রাউটার হোস্টনেমে রূপান্তর করা।',
        },
        explanation: {
          en: 'Traceroute resolves the IP of each network hop using reverse DNS, allowing network operators to see carrier backbones and city locations.',
          bn: 'ট্রেসরুট প্রতিটি নেটওয়ার্ক হপের আইপিকে রিভার্স ডিএনএসের মাধ্যমে সমাধান করে, যা প্রকৌশলীদের ক্যারিয়ার ব্যাকবোন ও শহরের অবস্থান বুঝতে সাহায্য করে।'
        },
      },
      {
        id: 'dns-rev-qz-4',
        kind: 'mcq',
        topic: 'fcrdns-failure-smtp-consequence',
        question: {
          en: 'What typically occurs during an enterprise SMTP handshake if an incoming email sender fails Forward-Confirmed reverse DNS (FCrDNS)?',
          bn: 'যদি কোনো প্রেরক ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS) যাচাইয়ে ব্যর্থ হয়, তবে এন্টারপ্রাইজ SMTP হ্যান্ডশেকের সময় কী ঘটে?'
        },
        options: [
          {
            en: 'The receiving mail server terminates the connection or rejects the email with an SMTP 550 or 554 error code as suspected spam or compromised botnet traffic',
            bn: 'রিসিভিং মেইল সার্ভার সংযোগ বিচ্ছিন্ন করে অথবা সন্দেহজনক স্প্যাম ও বটনেট ট্রাফিক হিসেবে SMTP ৫৫০ বা ৫৫৪ এরর কোড দিয়ে মেইলটি প্রত্যাখ্যান করে',
          },
          {
            en: 'The mail server immediately prints out the email onto office paper',
            bn: 'মেইল সার্ভার তাৎক্ষণিকভাবে অফিসের কাগজে ইমেইলটি প্রিন্ট করে ফেলে',
          },
          {
            en: 'The receiving server powers off its internal backup batteries',
            bn: 'রিসিভিং সার্ভার তার অভ্যন্তরীণ ব্যাকআপ ব্যাটারি বন্ধ করে দেয়',
          },
          {
            en: 'The email is delivered with the font size enlarged by 10 times',
            bn: 'ইমেইলটি অক্ষরের আকার ১০ গুণ বড় করে ইনবক্সে পৌঁছে দেওয়া হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Immediate rejection with an SMTP error code due to failed sender authentication.',
          bn: 'প্রেরক যাচাই ব্যর্থ হওয়ায় SMTP এরর কোড সহ তাৎক্ষণিক প্রত্যাখ্যান।',
        },
        explanation: {
          en: 'Modern anti-spam systems reject unauthenticated connections lacking valid FCrDNS, returning permanent 550 delivery failure errors.',
          bn: 'আধুনিক স্প্যাম প্রতিরোধ ব্যবস্থা বৈধ FCrDNS বিহীন সংযোগগুলোকে সরাসরি প্রত্যাখ্যান করে এবং স্থায়ী ৫৫০ ডেলিভারি ফেইলিউর এরর ফেরত পাঠায়।'
        },
      },
    ],
  },
  next: {
    slug: 'dns-capstone',
    title: {
      en: 'DNS Architecture & Global Traffic Management Capstone',
      bn: 'ডিএনএস আর্কিটেকচার এবং গ্লোবাল ট্রাফিক ম্যানেজমেন্ট ক্যাপস্টোন'
    },
  },
};
