import type { Lesson } from '../../../lib/types';

export const MeetDnsLesson: Lesson = {
  slug: 'meet-dns',
  tech: 'dns',
  title: {
    en: 'Beginner Overview of DNS: The Internet Phonebook & Domain Hierarchy',
    bn: 'ডিএনএস এর প্রাথমিক পরিচিতি: ইন্টারনেটের ফোনবুক এবং ডোমেন হায়ারার্কি'
  },
  summary: {
    en: 'Discover how the Domain Name System translates human-friendly hostnames into machine-routable IP addresses. Learn the inverted domain tree hierarchy from the root zone (.) down to Top-Level Domains, Second-Level Domains, and subdomains. Understand the structure of a Fully Qualified Domain Name (FQDN), and trace how billions of network devices find each other across global networks.',
    bn: 'ডোমেন নেম সিস্টেম (DNS) কীভাবে মানুষের পরিচিত হোস্টনেমকে মেশিনের রাউটেবল আইপি ঠিকানায় রূপান্তর করে তা আবিষ্কার করুন। রুট জোন (.) থেকে শুরু করে টপ-লেভেল ডোমেন, সেকেন্ড-লেভেল ডোমেন এবং সাবডোমেন পর্যন্ত বিপরীত ডোমেন ট্রির গঠন শিখুন। সম্পূর্ণ যোগ্য ডোমেন নামের (FQDN) গঠন বুঝুন এবং বৈশ্বিক নেটওয়ার্কে শতকোটি ডিভাইস কীভাবে একে অপরকে খুঁজে বের করে তা জানুন।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'why-internet-needs-dns',
      text: {
        en: 'Why the Internet Needs DNS: Names versus IP Addresses',
        bn: 'ইন্টারনেটে ডিএনএস কেন প্রয়োজন: নাম বনাম আইপি ঠিকানা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you type a web address into your browser, network routers cannot route packets using alphabetical English text. Hardware routers communicate strictly using numerical IP addresses, such as IPv4 93.184.215.14 or 128-bit IPv6 hexadecimal strings. Remembering numerical IP sequences for every website on earth is impossible for humans, while routers cannot parse text strings efficiently.',
        bn: 'আপনি যখন আপনার ব্রাউজারে কোনো ওয়েব ঠিকানা টাইপ করেন, তখন নেটওয়ার্ক রাউটার ইংরেজি অক্ষরের মাধ্যমে ডাটা প্যাকেট পাঠাতে পারে না। হার্ডওয়্যার রাউটারগুলো কেবল সংখ্যাভিত্তিক আইপি ঠিকানার সাহায্যে যোগাযোগ করে, যেমন IPv4 93.184.215.14 অথবা ১২৮-বিট IPv6 হেক্সাডেসিমেল স্ট্রিং। পৃথিবীর প্রতিটি ওয়েবসাইটের জন্য এমন জটিল সংখ্যা মনে রাখা মানুষের পক্ষে অসম্ভব, আবার রাউটারগুলোর পক্ষেও সরাসরি টেক্সট প্রসেস করা কঠিন।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In the early 1970s ARPANET, every networked computer downloaded a single master text file called HOSTS.TXT maintained manually by Elizabeth Feinler at the Stanford Research Institute. Whenever a computer joined the network, administrators telephoned the institute to update the file. As the internet expanded past 1000 hosts, this centralized approach collapsed under network traffic and naming collisions.',
        bn: '১৯৭০-এর দশকের শুরুতে প্রাচীন আরপানেটে (ARPANET) প্রতিটি সংযুক্ত কম্পিউটার স্ট্যানফোর্ড রিসার্চ ইনস্টিটিউট কর্তৃক হাতে রক্ষণাবেক্ষণ করা HOSTS.TXT নামের একটি মাত্র টেক্সট ফাইল ডাউনলোড করত। নেটওয়ার্কে নতুন কম্পিউটার যুক্ত হলে প্রশাসকরা ফোন করে ওই ফাইল আপডেট করাতেন। যখন ইন্টারনেটে কম্পিউটারের সংখ্যা ১০০০ ছাড়িয়ে গেল, তখন ফাইলের আকার বৃদ্ধি, ট্রাফিক জ্যাম এবং একই নামের দ্বন্দ্বের কারণে এই একক কেন্দ্রীয় ব্যবস্থা অকার্যকর হয়ে পড়ে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In 1983, computer scientist Paul Mockapetris created the Domain Name System (documented in RFC 882 and RFC 883). Mockapetris designed DNS as a decentralized, hierarchically distributed database system. Today, DNS functions as the global phonebook of the internet, handling over 100 billion lookup queries every single day with sub-millisecond local caching.',
        bn: '১৯৮৩ সালে কম্পিউটার বিজ্ঞানী পল মকাপেট্রিস ডোমেন নেম সিস্টেম উদ্ভাবন করেন ( যা RFC 882 এবং RFC 883-তে বর্ণিত )। মকাপেট্রিস ডিএনএসকে একটি বিকেন্দ্রীভূত ও স্তরভিত্তিক বিন্যস্ত ডাটাবেস হিসেবে ডিজাইন করেছিলেন। আজ ডিএনএস ইন্টারনেটের বিশ্বজনীন ফোনবুক হিসেবে কাজ করে, যা লোকাল ক্যাশের সাহায্যে প্রতিদিন ১০০ বিলিয়নেরও বেশি অনুসন্ধানের জবাব দেয়।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Inverted Domain Name Tree Hierarchy & FQDN Architecture',
        bn: 'বিপরীত ডোমেন নেম ট্রি হায়ারার্কি এবং FQDN আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 820 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Inverted hierarchical domain tree showing root zone, top level domains, second level domains and subdomains">
  <rect width="820" height="420" fill="#0f172a" rx="12"/>
  
  <text x="410" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">INVERTED DOMAIN NAME TREE HIERARCHY</text>
  
  <!-- Root Level -->
  <g transform="translate(360, 50)">
    <circle cx="50" cy="30" r="26" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
    <text x="50" y="38" fill="#ef4444" font-size="24" font-weight="bold" text-anchor="middle">.</text>
    <text x="50" y="74" fill="#94a3b8" font-size="10" text-anchor="middle">Root Zone (Dot)</text>
  </g>
  
  <!-- Connectors from Root to TLDs -->
  <line x1="385" y1="95" x2="160" y2="135" stroke="#475569" stroke-width="2"/>
  <line x1="400" y1="95" x2="330" y2="135" stroke="#475569" stroke-width="2"/>
  <line x1="420" y1="95" x2="500" y2="135" stroke="#475569" stroke-width="2"/>
  <line x1="435" y1="95" x2="670" y2="135" stroke="#475569" stroke-width="2"/>
  
  <!-- TLD Level -->
  <g transform="translate(90, 135)">
    <rect width="130" height="42" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="65" y="26" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">.com (gTLD)</text>
  </g>
  <g transform="translate(260, 135)">
    <rect width="130" height="42" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="65" y="26" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">.org (gTLD)</text>
  </g>
  <g transform="translate(430, 135)">
    <rect width="130" height="42" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">.bd (ccTLD)</text>
  </g>
  <g transform="translate(600, 135)">
    <rect width="130" height="42" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">.uk (ccTLD)</text>
  </g>
  
  <!-- Connectors from .com to SLDs -->
  <line x1="130" y1="177" x2="110" y2="225" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="177" x2="230" y2="225" stroke="#475569" stroke-width="2"/>
  
  <!-- SLD Level -->
  <g transform="translate(40, 225)">
    <rect width="140" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="70" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">example.com</text>
  </g>
  <g transform="translate(200, 225)">
    <rect width="160" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="80" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">codeshikhon.com</text>
  </g>
  
  <!-- Connectors from SLD to Subdomains -->
  <line x1="85" y1="265" x2="60" y2="310" stroke="#475569" stroke-width="2"/>
  <line x1="135" y1="265" x2="160" y2="310" stroke="#475569" stroke-width="2"/>
  
  <!-- Subdomains -->
  <g transform="translate(20, 310)">
    <rect width="90" height="34" rx="4" fill="#0f172a" stroke="#a855f7"/>
    <text x="45" y="22" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">www</text>
  </g>
  <g transform="translate(130, 310)">
    <rect width="90" height="34" rx="4" fill="#0f172a" stroke="#a855f7"/>
    <text x="45" y="22" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">api</text>
  </g>
  
  <!-- FQDN Callout Breakdown -->
  <g transform="translate(390, 225)">
    <rect width="400" height="160" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <text x="200" y="28" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ANATOMY OF AN ABSOLUTE FQDN</text>
    
    <rect x="20" y="45" width="360" height="42" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="40" y="72" fill="#c084fc" font-size="14" font-weight="bold">api .</text>
    <text x="100" y="72" fill="#38bdf8" font-size="14" font-weight="bold">example .</text>
    <text x="210" y="72" fill="#f59e0b" font-size="14" font-weight="bold">com .</text>
    <text x="295" y="72" fill="#ef4444" font-size="18" font-weight="bold">.</text>
    
    <text x="40" y="105" fill="#c084fc" font-size="9">Subdomain</text>
    <text x="110" y="105" fill="#38bdf8" font-size="9">SLD</text>
    <text x="220" y="105" fill="#f59e0b" font-size="9">gTLD</text>
    <text x="285" y="105" fill="#ef4444" font-size="9">Root Dot</text>
    
    <text x="200" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">Total max length: 253 octets • Label max: 63 octets</text>
  </g>
</svg>`,
      caption: {
        en: 'The DNS tree branches downward from the root dot (.) into Top-Level Domains, Second-Level Domains, and host subdomains.',
        bn: 'ডিএনএস ট্রি রুট ডট (.) থেকে নিচের দিকে বিস্তৃত হয়ে টপ-লেভেল ডোমেন, সেকেন্ড-লেভেল ডোমেন এবং সাবডোমেন তৈরি করে।'
      },
    },
    {
      type: 'heading',
      id: 'fqdn-anatomy-rules',
      text: {
        en: 'The Anatomy of a Fully Qualified Domain Name (FQDN)',
        bn: 'সম্পূর্ণ যোগ্য ডোমেন নামের (FQDN) গঠন ও নীতিমালা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Fully Qualified Domain Name (FQDN) specifies the absolute, unambiguous address of a computer host within the DNS tree hierarchy. In formal network protocols, an absolute FQDN ends with a trailing dot representing the root zone, such as api.example.com. Web browsers hide this final dot to simplify user interfaces, but low-level DNS resolvers rely on it to confirm that a query is complete rather than relative to local search domains.',
        bn: 'একটি সম্পূর্ণ যোগ্য ডোমেন নাম (FQDN) ডিএনএস হায়ারার্কির মধ্যে কোনো কম্পিউটার হোস্টের সুনির্দিষ্ট ও নিশ্চিত ঠিকানা প্রকাশ করে। নেটওয়ার্ক প্রোটোকলের ক্ষেত্রে একটি পরম FQDN এর শেষে রুট জোনের নির্দেশক একটি ট্রেইলিং ডট থাকে, যেমন api.example.com.। সাধারণ ব্রাউজার ব্যবহারের সুবিধার জন্য এই শেষ ডটটি লুকিয়ে রাখে, তবে লো-লেভেল ডিএনএস রিজলভার এই ডটটি দেখে নিশ্চিত হয় যে কোয়েরিটি কোনো অভ্যন্তরীণ সার্চ ডোমেন নয় বরং একটি পূর্ণাঙ্গ ডোমেন।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'RFC 1035 establishes strict limits on domain label formatting. Each domain label between dot separators cannot exceed 63 characters in length, and the total length of an entire FQDN cannot exceed 253 octets. Labels must adhere to the Letters-Digits-Hyphen (LDH) standard: they must start and end with an alphanumeric character, and may contain interior hyphens. Domain lookups are case-insensitive, meaning EXAMPLE.COM and example.com resolve identically.',
        bn: 'RFC 1035 ডোমেন লেবেল ফরম্যাটের ওপর সুনির্দিষ্ট সীমা নির্ধারণ করে দিয়েছে। দুটি ডটের মাঝের প্রতিটি লেবেল সর্বোচ্চ ৬৩ অক্ষরের হতে পারে এবং সম্পূর্ণ FQDN এর মোট দৈর্ঘ্য ২৫৩ অক্ষরের বেশি হতে পারবে না। লেবেলগুলোকে লেটার-ডিজিট-হাইফেন (LDH) মান মেনে চলতে হয়: এদের শুরু ও শেষ আলফানিউমেরিক অক্ষর দিয়ে হতে হবে এবং মাঝে হাইফেন থাকতে পারে। ডিএনএস অনুসন্ধান কেস-ইনসেনসিটিভ, অর্থাৎ EXAMPLE.COM এবং example.com একই ঠিকানায় নির্দেশ করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'fqdn-parser.js',
      code: `// Deterministic Fully Qualified Domain Name (FQDN) Hierarchy Parser
// Validates RFC 1035 domain label lengths and parses tree levels

function parseDomainHierarchy(rawDomain) {
  const isAbsolute = rawDomain.endsWith('.');
  const sanitized = isAbsolute ? rawDomain.slice(0, -1) : rawDomain;
  const labels = sanitized.split('.');

  // Validate RFC 1035 length constraints
  if (sanitized.length > 253) {
    throw new Error('Total domain length exceeds maximum limit of 253 octets');
  }

  const labelDetails = labels.map((label, index) => {
    if (label.length === 0 || label.length > 63) {
      throw new Error('Label "' + label + '" exceeds maximum 63 characters');
    }
    const isValidLDH = /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(label);
    return {
      depth: labels.length - index,
      name: label,
      length: label.length,
      validLDH: isValidLDH,
    };
  });

  const tld = labels[labels.length - 1];
  const sld = labels.length >= 2 ? labels[labels.length - 2] : null;
  const subdomains = labels.slice(0, -2);

  return {
    input: rawDomain,
    isAbsoluteFQDN: isAbsolute,
    tld: '.' + tld,
    secondLevelDomain: sld ? sld + '.' + tld : null,
    subdomains: subdomains.join('.') || 'none',
    hierarchyDepth: labels.length,
    labels: labelDetails,
  };
}

// Inspect two sample domain names
const host1 = parseDomainHierarchy('api.store.example.com.');
const host2 = parseDomainHierarchy('codeshikhon.com');

console.log('--- Domain 1: ' + host1.input + ' ---');
console.log('Absolute FQDN  : ' + host1.isAbsoluteFQDN);
console.log('TLD            : ' + host1.tld);
console.log('SLD            : ' + host1.secondLevelDomain);
console.log('Subdomains     : ' + host1.subdomains);
console.log('Tree Depth     : ' + host1.hierarchyDepth + ' levels');

console.log('\\n--- Domain 2: ' + host2.input + ' ---');
console.log('Absolute FQDN  : ' + host2.isAbsoluteFQDN);
console.log('TLD            : ' + host2.tld);
console.log('Tree Depth     : ' + host2.hierarchyDepth + ' levels');`,
      caption: {
        en: 'The parser validates RFC 1035 label length rules (63 characters max) and extracts TLD, SLD, and subdomains.',
        bn: 'পার্সারটি RFC 1035 লেবেল দৈর্ঘ্য নিয়ম ( সর্বোচ্চ ৬৩ অক্ষর ) যাচাই করে এবং TLD, SLD ও সাবডোমেন আলাদা করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why the Trailing Dot Accelerates Cloud & Kubernetes Queries',
        bn: 'ক্লাউড এবং কুবারনেটিসে ট্রেইলিং ডট কেন অনুসন্ধানের গতি বাড়ায়'
      },
      text: {
        en: 'In container environments like Kubernetes or enterprise VPCs, systems configure search domains in /etc/resolv.conf (such as search default.svc.cluster.local). If your app queries api.example.com without a trailing dot, the resolver tries appending every search domain first, triggering 3 or 4 failing queries before querying the public internet. Adding an explicit final period immediately identifies an absolute FQDN, which skips local network prefixes and cuts lookup latency by up to 80 percent.',
        bn: 'কুবারনেটিস বা ক্লাউড ভিপিসিতে /etc/resolv.conf ফাইলে সার্চ ডোমেন যুক্ত থাকে ( যেমন search default.svc.cluster.local )। আপনার অ্যাপ যদি ট্রেইলিং ডট ছাড়া api.example.com খোঁজে, তবে রিজলভার প্রতিটি সার্চ ডোমেন যুক্ত করে ৩ বা ৪ বার ব্যর্থ অনুসন্ধান করার পর পাবলিক ইন্টারনেটে যায়। নামের শেষে একটি সুনির্দিষ্ট ডট দিলে এটি পরম FQDN হিসেবে চিহ্নিত হয় এবং লোকাল প্রিফিক্স এড়িয়ে অনুসন্ধানের বিলম্ব ৮০ শতাংশ পর্যন্ত কমিয়ে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-meet-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the maximum number of characters allowed for an individual domain label between dots according to RFC 1035? (63). Type the number.',
        bn: 'RFC 1035 অনুসারে ডটের মধ্যবর্তী একটি একক ডোমেন লেবেলে সর্বোচ্চ কতটি অক্ষর অনুমোদিত? ( ৬৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '63',
      hint: {
        en: 'A domain label length is limited to 63 octets.',
        bn: 'একটি ডোমেন লেবেলের সর্বোচ্চ আকার ৬৩ অক্ষরের মধ্যে সীমাবদ্ধ।'
      },
      explanation: {
        en: 'RFC 1035 restricts individual domain labels to 63 octets, while the entire FQDN is capped at 253 octets.',
        bn: 'RFC 1035 প্রতিটি পৃথক লেবেলকে ৬৩ অক্ষরের মধ্যে এবং সম্পূর্ণ FQDN-কে ২৫৩ অক্ষরের মধ্যে সীমাবদ্ধ রাখে।'
      },
    },
    {
      id: 'dns-meet-ex-2',
      kind: 'mcq',
      question: {
        en: 'In formal networking and zone files, what does the trailing dot at the very end of an absolute FQDN (such as "www.example.com.") represent?',
        bn: 'আনুষ্ঠানিক নেটওয়ার্কিং এবং জোন ফাইলে একটি পরম FQDN-এর শেষে থাকা ট্রেইলিং ডট ( যেমন "www.example.com." ) কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The global DNS root zone (.) at the very top of the domain tree hierarchy',
          bn: 'ডোমেন ট্রি হায়ারার্কির একেবারে শীর্ষে থাকা গ্লোবাল ডিএনএস রুট জোন (.)',
        },
        {
          en: 'A punctuation syntax error that causes web browsers to crash',
          bn: 'একটি ব্যাকরণগত ভুল যার কারণে ওয়েব ব্রাউজার বন্ধ হয়ে যায়',
        },
        {
          en: 'An indicator that the website requires an encrypted credit card fee',
          bn: 'এমন একটি সংকেত যা বোঝায় ওয়েবসাইটের জন্য ক্রেডিট কার্ড ফি প্রয়োজন',
        },
        {
          en: 'A signal that the server is powered off for daily maintenance',
          bn: 'সার্ভারটি দৈনন্দিন রক্ষণাবেক্ষণের জন্য বন্ধ থাকার একটি সংকেত',
        },
      ],
      answer: 0,
      hint: {
        en: 'The dot anchors the domain to the apex of the global DNS namespace.',
        bn: 'ডটটি ডোমেনকে বৈশ্বিক ডিএনএস নেমস্পেসের মূল চূড়ায় সংযুক্ত করে।'
      },
      explanation: {
        en: 'The final dot signifies the DNS root zone, telling resolvers that the domain name is absolute and should not have local search domains appended.',
        bn: 'শেষের ডটটি ডিএনএস রুট জোন প্রকাশ করে এবং রিজলভারকে নির্দেশ দেয় যে ডোমেন নামটি একটি পরম ঠিকানা, যার সাথে লোকাল সার্চ ডোমেন যুক্ত করার প্রয়োজন নেই।'
      },
    },
    {
      id: 'dns-meet-ex-3',
      kind: 'mcq',
      question: {
        en: 'What historical centralized text file was manually downloaded by early ARPANET computers prior to the invention of the distributed DNS in 1983?',
        bn: '১৯৮৩ সালে বিকেন্দ্রীভূত ডিএনএস উদ্ভাবনের আগে প্রাচীন আরপানেট কম্পিউটারগুলো হাতে তৈরি কোন কেন্দ্রীয় ফাইলটি ডাউনলোড করত?'
      },
      options: [
        {
          en: 'HOSTS.TXT',
          bn: 'HOSTS.TXT',
        },
        {
          en: 'DATABASE.SQL',
          bn: 'DATABASE.SQL',
        },
        {
          en: 'ROUTER.BIN',
          bn: 'ROUTER.BIN',
        },
        {
          en: 'PASSWORDS.CSV',
          bn: 'PASSWORDS.CSV',
        },
      ],
      answer: 0,
      hint: {
        en: 'A plain text table mapping host names to numbers maintained at SRI.',
        bn: 'স্ট্যানফোর্ডে সংরক্ষিত হোস্ট নামের সাথে সংখ্যার ম্যাপিং টেবিল।'
      },
      explanation: {
        en: 'Before DNS, the entire internet relied on a single HOSTS.TXT file maintained by Elizabeth Feinler team at the Stanford Research Institute.',
        bn: 'ডিএনএসের আগে সমগ্র ইন্টারনেট স্ট্যানফোর্ড রিসার্চ ইনস্টিটিউটে এলিজাবেথ ফাইনলারের দল কর্তৃক পরিচালিত একটি মাত্র HOSTS.TXT ফাইলের ওপর নির্ভরশীল ছিল।'
      },
    },
    {
      id: 'dns-meet-ex-4',
      kind: 'predict',
      question: {
        en: 'If a canonical absolute FQDN is structured as "www.example.com.", how many dot separators exist across the entire string? (Count all dots: 3). Type the number.',
        bn: 'যদি একটি আদর্শ পরম FQDN "www.example.com." হিসেবে গঠিত হয়, তবে সম্পূর্ণ স্ট্রিংটিতে মোট কতটি ডট বিভাজক বিদ্যমান থাকে? ( সব ডট গণনা করুন: ৩ টি )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Count the dots between labels and the trailing root dot: 3 dots.',
        bn: 'লেবেলের মধ্যবর্তী এবং শেষের রুট ডট গণনা করুন: ৩ টি ডট।'
      },
      explanation: {
        en: 'The absolute name www.example.com. contains exactly 3 dots: after www, after example, and after com (the root dot).',
        bn: 'পরম নাম www.example.com.-এ ঠিক ৩ টি ডট থাকে: www এর পরে, example এর পরে এবং com এর পরে ( রুট ডট )।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Beginner Overview of DNS Quiz',
      bn: 'ডিএনএস প্রাথমিক পরিচিতি কুইজ'
    },
    questions: [
      {
        id: 'dns-meet-qz-1',
        kind: 'mcq',
        topic: 'dns-purpose-hosts-txt-replacement',
        question: {
          en: 'Why was the early centralized HOSTS.TXT approach replaced by the distributed Domain Name System?',
          bn: 'কেন প্রাচীন একক কেন্দ্রীয় HOSTS.TXT ব্যবস্থা পরিবর্তন করে বিকেন্দ্রীভূত ডোমেন নেম সিস্টেম চালু করা হয়েছিল?'
        },
        options: [
          {
            en: 'As the network expanded, a single centralized file caused severe bandwidth congestion, naming collisions, and administrative update delays that could not scale',
            bn: 'নেটওয়ার্ক বড় হওয়ার সাথে সাথে একটি একক কেন্দ্রীয় ফাইল অতিরিক্ত ব্যান্ডউইথ অপচয়, নামের দ্বন্দ্ব এবং আপডেট বিলম্বের কারণে স্কেল করতে ব্যর্থ হয়',
          },
          {
            en: 'Because computer monitors could no longer display text files',
            bn: 'কারণ কম্পিউটার মনিটর টেক্সট ফাইল প্রদর্শন করার ক্ষমতা হারিয়ে ফেলেছিল',
          },
          {
            en: 'To make internet web addresses secret and hidden from the public',
            bn: 'ইন্টারনেট ওয়েব ঠিকানা গোপন ও সাধারণ মানুষের কাছ থেকে লুকিয়ে রাখার জন্য',
          },
          {
            en: 'Because all computer keyboards switched to optical light beams',
            bn: 'কারণ সমস্ত কম্পিউটার কিবোর্ড অপটিক্যাল লাইট বিমে রূপান্তরিত হয়েছিল',
          },
        ],
        answer: 0,
        hint: {
          en: 'A centralized file cannot scale to millions of global devices.',
          bn: 'একটি কেন্দ্রীয় ফাইল শতকোটি ডিভাইসের বৈশ্বিক বিস্তার সামলাতে পারে না।',
        },
        explanation: {
          en: 'DNS decentralized domain administration into hierarchical zones, eliminating single bottlenecks and enabling independent domain management worldwide.',
          bn: 'ডিএনএস স্তরভিত্তিক জোনে ডোমেন পরিচালনাকে বিকেন্দ্রীভূত করে একক বাধা দূর করেছে এবং বিশ্বজুড়ে স্বাধীনভাবে ডোমেন নিয়ন্ত্রণের সুযোগ দিয়েছে।'
        },
      },
      {
        id: 'dns-meet-qz-2',
        kind: 'mcq',
        topic: 'domain-hierarchy-tld-categories',
        question: {
          en: 'In the hierarchical domain tree, what classification distinguishes ".bd", ".uk", and ".de" from ".com" and ".org"?',
          bn: 'স্তরভিত্তিক ডোমেন ট্রিতে কোন শ্রেণীবিভাগ ".bd", ".uk" এবং ".de"-কে ".com" ও ".org" থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'They are Country Code Top-Level Domains (ccTLDs) representing specific nations, whereas .com and .org are Generic Top-Level Domains (gTLDs)',
            bn: 'এগুলো নির্দিষ্ট দেশের প্রতিনিধিত্বকারী কান্ট্রি কোড টপ-লেভেল ডোমেন (ccTLD), অন্যদিকে .com ও .org হলো জেনেরিক টপ-লেভেল ডোমেন (gTLD)',
          },
          {
            en: 'They are proprietary private Wi-Fi network encryption standards',
            bn: 'এগুলো ব্যক্তিগত ওয়াইফাই নেটওয়ার্কের গোপনীয় এনক্রিপশন স্ট্যান্ডার্ড',
          },
          {
            en: 'They are file extensions for compressed video recordings',
            bn: 'এগুলো সংকুচিত ভিডিও রেকর্ডিংয়ের ফাইল এক্সটেনশন',
          },
          {
            en: 'They are processor clock speeds measured in mechanical cycles',
            bn: 'এগুলো মেকানিক্যাল সাইকেলে পরিমাপ করা প্রসেসর ক্লক স্পিড',
          },
        ],
        answer: 0,
        hint: {
          en: 'Two-letter suffixes designate geographic national domains (ccTLD).',
          bn: 'দুই অক্ষরের প্রত্যয়গুলো ভৌগোলিক জাতীয় ডোমেন (ccTLD) নির্দেশ করে।',
        },
        explanation: {
          en: 'Two-letter country code TLDs (ccTLDs) are reserved for specific countries and territories under ISO 3166-1 alpha-2 standards.',
          bn: 'ISO 3166-1 আলফা-২ মান অনুযায়ী দুই অক্ষরের সিসিটিএলডি (ccTLD) নির্দিষ্ট দেশ ও অঞ্চলের জন্য নির্ধারিত থাকে।'
        },
      },
      {
        id: 'dns-meet-qz-3',
        kind: 'mcq',
        topic: 'fqdn-trailing-dot-semantics',
        question: {
          en: 'Why does appending a trailing dot to a domain name (e.g. "api.example.com.") prevent unnecessary resolution delays in cloud environments?',
          bn: 'ক্লাউড পরিবেশে ডোমেন নামের শেষে একটি ট্রেইলিং ডট যুক্ত করলে ( যেমন "api.example.com." ) কেন অপ্রয়োজনীয় অনুসন্ধান বিলম্ব বন্ধ হয়?'
        },
        options: [
          {
            en: 'The trailing dot marks the query as an absolute FQDN, telling the resolver to query the public DNS root directly rather than trying multiple local search domain suffixes first',
            bn: 'ট্রেইলিং ডট কোয়েরিটিকে একটি পরম FQDN হিসেবে চিহ্নিত করে, যা লোকাল সার্চ ডোমেন না খুঁজে সরাসরি মূল ডিএনএস রুটে অনুসন্ধান করতে রিজলভারকে নির্দেশ দেয়',
          },
          {
            en: 'It accelerates the physical electric current traveling inside ethernet cables',
            bn: 'এটি ইথারনেট কেবলের ভেতরের বৈদ্যুতিক প্রবাহের গতি বৃদ্ধি করে',
          },
          {
            en: 'It compresses the HTML webpage size by 90 percent automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে এইচটিএমএল ওয়েবপেজের আকার ৯০ শতাংশ সংকুচিত করে',
          },
          {
            en: 'It forces the user monitor to display higher contrast colors',
            bn: 'এটি ব্যবহারকারীর মনিটরকে উচ্চ কনট্রাস্টের রঙ প্রদর্শন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Bypassing local search domain appends in /etc/resolv.conf.',
          bn: '/etc/resolv.conf ফাইলের লোকাল সার্চ ডোমেন এড়িয়ে যাওয়া।',
        },
        explanation: {
          en: 'Without a trailing dot, resolvers in Kubernetes or VPCs append configured search domains first, causing multiple failed queries before querying the authoritative destination.',
          bn: 'ট্রেইলিং ডট না থাকলে কুবারনেটিস বা ক্লাউড রিজলভার প্রথমে সার্চ ডোমেন যুক্ত করে একাধিকবার ব্যর্থ অনুসন্ধান চালায়, ফলে অপ্রয়োজনীয় বিলম্ব ঘটে।'
        },
      },
      {
        id: 'dns-meet-qz-4',
        kind: 'mcq',
        topic: 'rfc1035-domain-length-constraints',
        question: {
          en: 'Under RFC 1035 specifications, what are the maximum length constraints for an individual label and an entire Fully Qualified Domain Name?',
          bn: 'RFC 1035 স্পেসিফিকেশন অনুসারে একটি একক লেবেল এবং একটি সম্পূর্ণ FQDN-এর সর্বোচ্চ দৈর্ঘ্যের সীমা কত?'
        },
        options: [
          {
            en: '63 characters for any single label between dots, and 253 octets total for the complete FQDN',
            bn: 'ডটের মধ্যবর্তী যেকোনো একটি লেবেলের জন্য সর্বোচ্চ ৬৩ অক্ষর এবং সম্পূর্ণ FQDN-এর জন্য মোট ২৫৩ অক্ষর',
          },
          {
            en: '1 character for labels, and 10 characters for the total domain',
            bn: 'লেবেলের জন্য ১ অক্ষর এবং মোট ডোমেনের জন্য ১০ অক্ষর',
          },
          {
            en: '1000 characters for labels, and 50000 characters for the total domain',
            bn: 'লেবেলের জন্য ১০০০ অক্ষর এবং মোট ডোমেনের জন্য ৫০০০০ অক্ষর',
          },
          {
            en: 'There are no length limits on internet domain names',
            bn: 'ইন্টারনেট ডোমেন নামের দৈর্ঘ্যের ওপর কোনো নির্দিষ্ট সীমা নেই',
          },
        ],
        answer: 0,
        hint: {
          en: 'Labels are limited to 63 bytes, with a total FQDN ceiling of 253 bytes.',
          bn: 'প্রতিটি লেবেল ৬৩ বাইট এবং পুরো FQDN ২৫৩ বাইটের মধ্যে সীমাবদ্ধ।',
        },
        explanation: {
          en: 'RFC 1035 specifies that individual domain labels cannot exceed 63 octets and the full domain representation cannot exceed 253 octets.',
          bn: 'RFC 1035 অনুযায়ী ডটের মাঝে প্রতিটি লেবেল সর্বোচ্চ ৬৩ অক্ষর এবং সম্পূর্ণ ডোমেন ২৫৩ অক্ষরের বেশি হতে পারে না।'
        },
      },
    ],
  },
  next: {
    slug: 'dns-records',
    title: {
      en: 'DNS Record Types & Zone Files',
      bn: 'ডিএনএস রেকর্ড টাইপ এবং জোন ফাইল'
    },
  },
};
