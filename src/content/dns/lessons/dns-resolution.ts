import type { Lesson } from '../../../lib/types';

export const DnsResolutionLesson: Lesson = {
  slug: 'dns-resolution',
  tech: 'dns',
  title: {
    en: 'DNS Resolution: Recursive versus Iterative Query Traversal',
    bn: 'ডিএনএস রেজোলিউশন: রিকার্সিভ বনাম ইটারেটিভ কোয়েরি ট্রাভার্সাল'
  },
  summary: {
    en: 'Trace the complete 8-step DNS resolution journey that occurs whenever an application requests a domain name. Understand the critical distinction between Recursive queries and Iterative queries across the internet naming hierarchy. Learn UDP/TCP port 53 transport mechanics, DNS response status codes (NOERROR, NXDOMAIN, SERVFAIL), and truncation failover.',
    bn: 'কোনো অ্যাপ্লিকেশন যখন ডোমেন অনুসন্ধান করে তখন সংঘটিত সম্পূর্ণ ৮-ধাপের ডিএনএস রেজোলিউশন যাত্রা বিশ্লেষণ করুন। ইন্টারনেট নেম হায়ারার্কিতে রিকার্সিভ কোয়েরি এবং ইটারেটিভ কোয়েরির মৌলিক পার্থক্য শিখুন। UDP/TCP পোর্ট ৫৩ ট্রান্সপোর্ট মেকানিজম, ডিএনএস রেসপন্স স্ট্যাটাস কোড ( NOERROR, NXDOMAIN, SERVFAIL ) এবং ট্রাংকেশন ফেইলওভার সম্পর্কে জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'resolution-journey-client-to-wire',
      text: {
        en: 'The Resolution Journey: From Stub Client to Network Wire',
        bn: 'রেজোলিউশন যাত্রা: স্টাব ক্লায়েন্ট থেকে নেটওয়ার্ক ওয়্যার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Whenever you navigate to a website in your browser, your operating system initiates an 8-step resolution process. Your computer does not hold the entire internet database in local memory. Instead, a lightweight operating system library called a Stub Resolver formats a DNS request and sends it over UDP port 53.',
        bn: 'আপনি যখন আপনার ব্রাউজারে কোনো ওয়েবসাইটে প্রবেশ করেন, তখন আপনার অপারেটিং সিস্টেম একটি ৮-ধাপের রেজোলিউশন প্রক্রিয়া শুরু করে। আপনার কম্পিউটারের লোকাল মেমোরিতে সমগ্র ইন্টারনেটের ডাটাবেস সংরক্ষিত থাকে না। পরিবর্তে স্টাব রিজলভার (Stub Resolver) নামের একটি হালকা অপারেটিং সিস্টেম লাইব্রেরি ডিএনএস অনুরোধ তৈরি করে তা UDP পোর্ট ৫৩-তে প্রেরণ করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The stub resolver first inspects local caches in order: browser cache, operating system memory, and the local hosts file. If the domain is not cached locally, the stub sends a Recursive query to a Recursive DNS Resolver (such as your ISP default server or public resolvers like 1.1.1.1). A recursive query places total responsibility on the resolver to locate the final IP address or return an error.',
        bn: 'স্টাব রিজলভার প্রথমে ক্রমানুসারে লোকাল ক্যাশ পরীক্ষা করে: ব্রাউজার ক্যাশ, অপারেটিং সিস্টেম মেমোরি এবং লোকাল হোস্ট ফাইল। ডোমেনটি লোকাল ক্যাশে না থাকলে স্টাব একটি রিকার্সিভ ডিএনএস রিজলভারে ( যেমন আপনার আইএসপির ডিফল্ট সার্ভার বা ১.১.১.১ এর মতো পাবলিক রিজলভার ) রিকার্সিভ কোয়েরি পাঠায়। একটি রিকার্সিভ কোয়েরি সম্পূর্ণ দায়িত্ব রিজলভারের ওপর ন্যস্ত করে যাতে সে চূড়ান্ত আইপি ঠিকানা খুঁজে আনে অথবা ত্রুটি রিপোর্ট করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'The 8-Step Recursive and Iterative DNS Resolution Sequence',
        bn: '৮-ধাপের রিকার্সিভ এবং ইটারেটিভ ডিএনএস রেজোলিউশন পর্যায়ক্রম'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Step by step 8 hop sequence diagram of DNS resolution between Client, Recursive Resolver, Root Server, TLD Server, and Authoritative Nameserver">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THE 8-STEP DNS RESOLUTION JOURNEY (example.com)</text>
  
  <!-- Entities / Columns -->
  <!-- 1. Client -->
  <g transform="translate(40, 50)">
    <rect width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="55" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Stub Client</text>
    <line x1="55" y1="40" x2="55" y2="360" stroke="#334155" stroke-dasharray="4"/>
  </g>
  
  <!-- 2. Recursive Resolver -->
  <g transform="translate(200, 50)">
    <rect width="130" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="65" y="25" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Recursive DNS</text>
    <line x1="65" y1="40" x2="65" y2="360" stroke="#334155" stroke-dasharray="4"/>
  </g>
  
  <!-- 3. Root Server -->
  <g transform="translate(380, 50)">
    <rect width="110" height="40" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="55" y="25" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Root (.) Server</text>
    <line x1="55" y1="40" x2="55" y2="360" stroke="#334155" stroke-dasharray="4"/>
  </g>
  
  <!-- 4. TLD Server -->
  <g transform="translate(540, 50)">
    <rect width="110" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="55" y="25" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">.com TLD Server</text>
    <line x1="55" y1="40" x2="55" y2="360" stroke="#334155" stroke-dasharray="4"/>
  </g>
  
  <!-- 5. Authoritative Server -->
  <g transform="translate(690, 50)">
    <rect width="120" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="60" y="25" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">Auth Nameserver</text>
    <line x1="60" y1="40" x2="60" y2="360" stroke="#334155" stroke-dasharray="4"/>
  </g>
  
  <!-- Hop 1: Client -> Resolver -->
  <line x1="95" y1="110" x2="265" y2="110" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="265,110 255,105 255,115" fill="#38bdf8"/>
  <text x="180" y="102" fill="#38bdf8" font-size="9" text-anchor="middle">1. Recursive Query: example.com?</text>
  
  <!-- Hop 2: Resolver -> Root -->
  <line x1="265" y1="145" x2="435" y2="145" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="435,145 425,140 425,150" fill="#f59e0b"/>
  <text x="350" y="137" fill="#f59e0b" font-size="9" text-anchor="middle">2. Iterative: example.com?</text>
  
  <!-- Hop 3: Root -> Resolver -->
  <line x1="435" y1="175" x2="265" y2="175" stroke="#ef4444" stroke-width="2" stroke-dasharray="2"/>
  <polygon points="265,175 275,170 275,180" fill="#ef4444"/>
  <text x="350" y="167" fill="#ef4444" font-size="9" text-anchor="middle">3. Referral: Ask .com TLD at 192.5.6.30</text>
  
  <!-- Hop 4: Resolver -> TLD -->
  <line x1="265" y1="205" x2="595" y2="205" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="595,205 585,200 585,210" fill="#f59e0b"/>
  <text x="430" y="197" fill="#f59e0b" font-size="9" text-anchor="middle">4. Iterative: example.com?</text>
  
  <!-- Hop 5: TLD -> Resolver -->
  <line x1="595" y1="235" x2="265" y2="235" stroke="#10b981" stroke-width="2" stroke-dasharray="2"/>
  <polygon points="265,235 275,230 275,240" fill="#10b981"/>
  <text x="430" y="227" fill="#10b981" font-size="9" text-anchor="middle">5. Referral: Ask Auth NS at 199.43.135.53</text>
  
  <!-- Hop 6: Resolver -> Auth -->
  <line x1="265" y1="265" x2="750" y2="265" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="750,265 740,260 740,270" fill="#f59e0b"/>
  <text x="507" y="257" fill="#f59e0b" font-size="9" text-anchor="middle">6. Iterative: example.com?</text>
  
  <!-- Hop 7: Auth -> Resolver -->
  <line x1="750" y1="295" x2="265" y2="295" stroke="#a855f7" stroke-width="2" stroke-dasharray="2"/>
  <polygon points="265,295 275,290 275,300" fill="#a855f7"/>
  <text x="507" y="287" fill="#c084fc" font-size="9" text-anchor="middle">7. Answer: 93.184.215.14 (TTL 3600, AA=1)</text>
  
  <!-- Hop 8: Resolver -> Client -->
  <line x1="265" y1="330" x2="95" y2="330" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="95,330 105,325 105,335" fill="#38bdf8"/>
  <text x="180" y="322" fill="#38bdf8" font-size="9" text-anchor="middle">8. Final Answer: 93.184.215.14</text>
  
  <!-- Footer Note -->
  <rect x="40" y="375" width="760" height="45" rx="6" fill="#1e293b" stroke="#334155"/>
  <text x="420" y="394" fill="#cbd5e1" font-size="10" text-anchor="middle">Hops 1 &amp; 8 are RECURSIVE (delegating search) • Hops 2 through 7 are ITERATIVE (referrals down tree)</text>
  <text x="420" y="410" fill="#94a3b8" font-size="9" text-anchor="middle">Authoritative Answer sets AA=1 • Intermediate referrals return NS records in the Authority section</text>
</svg>`,
      caption: {
        en: 'The 8-step resolution sequence transitions from a single recursive query into iterative referrals across Root, TLD, and Authoritative nameservers.',
        bn: '৮-ধাপের রেজোলিউশন পর্যায়ক্রমটি একটি রিকার্সিভ কোয়েরি থেকে শুরু হয়ে রুট, TLD এবং অথরিটেটিভ নেমসার্ভারের মাঝে ইটারেটিভ রেফারালের মাধ্যমে সম্পন্ন হয়।'
      },
    },
    {
      type: 'heading',
      id: 'recursive-vs-iterative-rcodes',
      text: {
        en: 'Recursive versus Iterative Queries & DNS Response Codes',
        bn: 'রিকার্সিভ বনাম ইটারেটিভ কোয়েরি এবং ডিএনএস রেসপন্স কোড'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The architectural genius of DNS lies in separating query responsibilities. In a Recursive query, the client demands that the server do whatever work is necessary to return the final answer. In an Iterative query, the contacted server does not chase the answer; instead, it returns the best referral it currently holds (providing NS and glue records pointing to a server deeper down the tree).',
        bn: 'ডিএনএসের স্থাপত্য কৌশলের প্রধান দিক হলো অনুসন্ধানের দায়িত্বের সুষম বণ্টন। একটি রিকার্সিভ কোয়েরিতে ক্লায়েন্ট চায় সার্ভার যেন নিজে সমস্ত কাজ করে চূড়ান্ত উত্তর এনে দেয়। অন্যদিকে একটি ইটারেটিভ কোয়েরিতে সার্ভার নিজে কোনো অনুসন্ধান চালায় না; বরং তার জানা সেরা রেফারাল বা দিকনির্দেশনা ( পরবর্তী নেমসার্ভার ও গ্লু রেকর্ড ) প্রদান করে ক্লায়েন্টকে সামনের দিকে এগিয়ে দেয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Every DNS response packet includes a 4-bit Return Code in its header. Value 0 (NOERROR) indicates success. Value 3 (NXDOMAIN, Non-Existent Domain) confirms that the authoritative nameserver has no record for that domain. Value 2 (SERVFAIL) signals that the recursive resolver encountered an operational failure, such as a network timeout or a broken DNSSEC cryptographic signature. Value 5 (REFUSED) means the nameserver policy rejects the query.',
        bn: 'প্রতিটি ডিএনএস রেসপন্স প্যাকেটের হেডারে একটি ৪-বিট রিটার্ন কোড থাকে। মান ০ ( NOERROR ) সফল সমাপ্তি নির্দেশ করে। মান ৩ ( NXDOMAIN ) নিশ্চিত করে যে অথরিটেটিভ নেমসার্ভারে ওই ডোমেনের কোনো অস্তিত্ব নেই। মান ২ ( SERVFAIL ) প্রকাশ করে যে রিকার্সিভ রিজলভার কোনো অভ্যন্তরীণ ব্যর্থতার মুখোমুখি হয়েছে, যেমন নেটওয়ার্ক টাইমআউট বা ভুল DNSSEC ক্রিপ্টোগ্রাফিক স্বাক্ষর। মান ৫ ( REFUSED ) মানে সার্ভারের নিরাপত্তা পলিসি কোয়েরিটি বাতিল করেছে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'dns-resolver-simulation.js',
      code: `// Deterministic Simulation of an 8-Step Recursive DNS Resolver
// Implements the iterative traversal algorithm across Root, TLD, and Authoritative servers

class VirtualDnsResolver {
  constructor() {
    // 1. Root Zone (.) points to TLD servers
    this.rootServers = {
      'com': { ns: 'a.gtld-servers.net.', ip: '192.5.6.30' },
      'org': { ns: 'a0.org.afilias-nst.info.', ip: '199.19.56.1' }
    };

    // 2. TLD Servers point to Authoritative servers
    this.tldServers = {
      'example.com': { ns: 'ns1.example.com.', ip: '199.43.135.53' },
      'codeshikhon.com': { ns: 'ns1.codeshikhon.com.', ip: '172.64.32.1' }
    };

    // 3. Authoritative servers hold definitive zone records
    this.authoritativeZones = {
      'example.com': {
        'api.example.com': { type: 'A', value: '93.184.215.14', ttl: 3600 }
      }
    };
  }

  resolve(domain) {
    const steps = [];
    steps.push('Step 1 [RECURSIVE]: Stub client requests ' + domain + ' on port 53');

    // Parse domain parts
    const parts = domain.split('.');
    const tld = parts[parts.length - 1];
    const sld = parts.slice(-2).join('.');

    // Step 2 & 3: Query Root Server
    steps.push('Step 2 [ITERATIVE]: Resolver queries Root (.) server for .' + tld);
    const rootReferral = this.rootServers[tld];
    if (!rootReferral) {
      return { rcode: 'NXDOMAIN', steps };
    }
    steps.push('Step 3 [REFERRAL] : Root refers to ' + rootReferral.ns + ' (' + rootReferral.ip + ')');

    // Step 4 & 5: Query TLD Server
    steps.push('Step 4 [ITERATIVE]: Resolver queries .' + tld + ' TLD server for ' + sld);
    const tldReferral = this.tldServers[sld];
    if (!tldReferral) {
      return { rcode: 'NXDOMAIN', steps };
    }
    steps.push('Step 5 [REFERRAL] : TLD refers to ' + tldReferral.ns + ' (' + tldReferral.ip + ')');

    // Step 6 & 7: Query Authoritative Server
    steps.push('Step 6 [ITERATIVE]: Resolver queries Authoritative server for ' + domain);
    const zone = this.authoritativeZones[sld];
    const record = zone ? zone[domain] : null;

    if (!record) {
      steps.push('Step 7 [NXDOMAIN] : Authoritative server reports domain does not exist');
      return { rcode: 'NXDOMAIN', steps };
    }

    steps.push('Step 7 [ANSWER]   : Authoritative server returns ' + record.value + ' (TTL ' + record.ttl + ')');
    steps.push('Step 8 [RECURSIVE]: Resolver delivers final IP ' + record.value + ' back to client');

    return {
      rcode: 'NOERROR',
      domain,
      ip: record.value,
      ttl: record.ttl,
      steps
    };
  }
}

const resolver = new VirtualDnsResolver();
const result = resolver.resolve('api.example.com');

console.log('=== DNS Resolution Result: ' + result.rcode + ' ===');
console.log('Resolved IP:', result.ip);
console.log('\\nExecution Log:');
for (const step of result.steps) {
  console.log('  ' + step);
}`,
      caption: {
        en: 'The simulation traces the complete 8-step journey from stub client to root, TLD, and authoritative server.',
        bn: 'সিমুলেশনটি স্টাব ক্লায়েন্ট থেকে রুট, TLD এবং অথরিটেটিভ সার্ভার পর্যন্ত সম্পূর্ণ ৮-ধাপের যাত্রা প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why DNS Uses UDP Port 53 & Falls Back to TCP (TC Flag)',
        bn: 'ডিএনএস কেন UDP পোর্ট ৫৩ ব্যবহার করে এবং কখন TCP তে যায় (TC ফ্ল্যাগ)'
      },
      text: {
        en: 'Standard DNS operates over UDP port 53 because UDP is connectionless: it eliminates the 3-way TCP handshake latency, executing lookups in a single round-trip. However, traditional UDP responses were capped at 512 bytes. If a DNSSEC response or zone transfer exceeds 512 bytes, the nameserver sets the Truncated flag (TC = 1) in the packet header. Upon receiving TC = 1, the client immediately establishes a connection over TCP port 53 to fetch the complete response.',
        bn: 'ডিএনএস সাধারণত UDP পোর্ট ৫৩ ব্যবহার করে কারণ UDP সংযোগহীন: এটি TCP এর ৩-ধাপের হ্যান্ডশেক এড়িয়ে একক রাউন্ড-ট্রিপে অনুসন্ধান সম্পন্ন করে। তবে ঐতিহাসিক UDP রেসপন্সের আকার ৫১২ বাইটে সীমাবদ্ধ ছিল। যদি কোনো DNSSEC রেসপন্স বা জোন ট্রান্সফারের আকার ৫১২ বাইট ছাড়িয়ে যায়, তবে সার্ভার প্যাকেটের হেডারে ট্রাংকেটেড ফ্ল্যাগ ( TC = 1 ) সেট করে দেয়। TC = 1 পেলেই ক্লায়েন্ট তাৎক্ষণিকভাবে নির্ভরযোগ্য TCP পোর্ট ৫৩-তে সংযোগ স্থাপন করে সম্পূর্ণ ডাটা সংগ্রহ করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-res-ex-1',
      kind: 'predict',
      question: {
        en: 'How many total network transmission steps occur in an end-to-end uncached 4-server DNS resolution journey (Client, Resolver, Root, TLD, Auth)? (8). Type the number.',
        bn: 'একটি সম্পূর্ণ ক্যাশবিহীন ৪-সার্ভার ডিএনএস রেজোলিউশন যাত্রায় ( ক্লায়েন্ট, রিজলভার, রুট, TLD, অথরিটেটিভ ) মোট কতটি নেটওয়ার্ক ট্রান্সমিশন ধাপ সংঘটিত হয়? ( ৮ টি )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '8',
      hint: {
        en: 'Hop 1 client to resolver, hops 2-7 resolver through root/tld/auth, hop 8 resolver to client: 8 hops.',
        bn: 'ধাপ ১ ক্লায়েন্ট থেকে রিজলভার, ধাপ ২-৭ রিজলভার থেকে রুট/TLD/অথরিটেটিভ, ধাপ ৮ রিজলভার থেকে ক্লায়েন্ট: ৮ টি ধাপ।'
      },
      explanation: {
        en: 'An uncached lookup takes 8 steps: 2 recursive hops between client and resolver, and 6 iterative hops between resolver and root, TLD, and authoritative servers.',
        bn: 'ক্যাশহীন অনুসন্ধানে মোট ৮ টি ধাপ লাগে: ক্লায়েন্ট ও রিজলভারের মাঝে ২ টি রিকার্সিভ ধাপ এবং রুট, TLD ও অথরিটেটিভ সার্ভারের সাথে ৬ টি ইটারেটিভ ধাপ।'
      },
    },
    {
      id: 'dns-res-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the fundamental behavioral difference between a Recursive query and an Iterative query in DNS?',
        bn: 'ডিএনএসে একটি রিকার্সিভ কোয়েরি এবং একটি ইটারেটিভ কোয়েরির মধ্যে মৌলিক আচরণগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'In a recursive query, the client demands that the resolver find the final IP answer; in an iterative query, the contacted server returns either the direct answer or a referral pointer to another nameserver',
          bn: 'রিকার্সিভ কোয়েরিতে ক্লায়েন্ট রিজলভারকে চূড়ান্ত উত্তর এনে দেওয়ার নির্দেশ দেয়; ইটারেটিভ কোয়েরিতে সার্ভার সরাসরি উত্তর অথবা অন্য নেমসার্ভারের রেফারাল পয়েন্টার প্রদান করে',
        },
        {
          en: 'Recursive queries only travel over Wi-Fi, while iterative queries travel over satellite links',
          bn: 'রিকার্সিভ কোয়েরি কেবল ওয়াইফাই দিয়ে চলে, আর ইটারেটিভ কোয়েরি স্যাটেলাইট লিংক দিয়ে চলে',
        },
        {
          en: 'Iterative queries delete domain names permanently from the registry',
          bn: 'ইটারেটিভ কোয়েরি রেজিস্ট্রি থেকে ডোমেন নামকে স্থায়ীভাবে মুছে দেয়',
        },
        {
          en: 'Recursive queries can only run on mobile phone browsers',
          bn: 'রিকার্সিভ কোয়েরি কেবল মোবাইল ফোন ব্রাউজারে চালানো যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Recursive delegates search responsibility; iterative provides referrals down the tree.',
        bn: 'রিকার্সিভ অনুসন্ধানের সম্পূর্ণ দায়িত্ব অর্পণ করে; ইটারেটিভ নিচের স্তরের রেফারাল দেয়।',
      },
      explanation: {
        en: 'Stub clients send recursive queries so resolvers do all the legwork. Resolvers send iterative queries to root and TLD servers, following referrals until reaching the authoritative server.',
        bn: 'স্টাব ক্লায়েন্ট রিকার্সিভ কোয়েরি পাঠায় যাতে রিজলভার কাজ সম্পন্ন করে। রিজলভার রুট ও TLD সার্ভারে ইটারেটিভ কোয়েরি পাঠিয়ে রেফারাল অনুসরণ করে মূল সার্ভারে পৌঁছায়।'
      },
    },
    {
      id: 'dns-res-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which DNS response return code (RCODE) signifies that the authoritative nameserver confirms that the queried domain name does not exist in the zone?',
        bn: 'কোন ডিএনএস রেসপন্স রিটার্ন কোড (RCODE) নিশ্চিত করে যে জোনে অনুরোধ করা ডোমেন নামের কোনো অস্তিত্ব নেই?'
      },
      options: [
        {
          en: 'NXDOMAIN (RCODE 3 / Non-Existent Domain)',
          bn: 'NXDOMAIN ( RCODE 3 / নন-এক্সিস্টেন্ট ডোমেন )',
        },
        {
          en: 'NOERROR (RCODE 0)',
          bn: 'NOERROR ( RCODE 0 )',
        },
        {
          en: 'FORMERR (RCODE 1)',
          bn: 'FORMERR ( RCODE 1 )',
        },
        {
          en: 'REFUSED (RCODE 5)',
          bn: 'REFUSED ( RCODE 5 )',
        },
      ],
      answer: 0,
      hint: {
        en: 'The canonical DNS error code for a non-existent domain.',
        bn: 'অস্তিত্বহীন ডোমেনের জন্য নির্ধারিত ডিএনএস এরর কোড।',
      },
      explanation: {
        en: 'NXDOMAIN (Non-Existent Domain, RCODE 3) is returned when the domain name does not exist in the authoritative registry.',
        bn: 'NXDOMAIN ( RCODE 3 ) নির্দেশ করে যে অনুরোধ করা ডোমেনটি অথরিটেটিভ রেজিস্ট্রিতে নিবন্ধিত নেই।'
      },
    },
    {
      id: 'dns-res-ex-4',
      kind: 'predict',
      question: {
        en: 'What standard networking transport layer port number is designated for DNS queries and responses over both UDP and TCP? (53). Type the number.',
        bn: 'UDP এবং TCP উভয় প্রোটোকলে ডিএনএস কোয়েরি ও রেসপন্সের জন্য কোন আদর্শ নেটওয়ার্ক ট্রান্সপোর্ট পোর্ট নম্বরটি নির্ধারিত? ( ৫৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '53',
      hint: {
        en: 'The standard DNS port is 53.',
        bn: 'ডিএনএসের আদর্শ পোর্ট হলো ৫৩।'
      },
      explanation: {
        en: 'Port 53 is the official IANA well-known port for Domain Name System operations across both UDP and TCP.',
        bn: 'পোর্ট ৫৩ হলো UDP এবং TCP উভয় মাধ্যমে ডোমেন নেম সিস্টেমের জন্য নির্ধারিত অফিসিয়াল পোর্ট।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'DNS Resolution Quiz',
      bn: 'ডিএনএস রেজোলিউশন কুইজ'
    },
    questions: [
      {
        id: 'dns-res-qz-1',
        kind: 'mcq',
        topic: 'stub-resolver-recursive-query-role',
        question: {
          en: 'Why do operating system stub resolvers delegate domain lookups to a recursive resolver instead of querying the root nameservers directly?',
          bn: 'অপারেটিং সিস্টেম স্টাব রিজলভারগুলো কেন সরাসরি রুট সার্ভারে অনুসন্ধান না চালিয়ে রিকার্সিভ রিজলভারের ওপর অনুসন্ধান অর্পণ করে?'
        },
        options: [
          {
            en: 'Stub resolvers lack caching capacity and complex retry logic; delegating to a shared recursive resolver exploits massive shared caches and conserves device network bandwidth',
            bn: 'স্টাব রিজলভারের বৃহৎ ক্যাশিং ক্ষমতা ও রিট্রাই লজিক থাকে না; একটি শেয়ার্ড রিকার্সিভ রিজলভারে কোয়েরি পাঠালে বিশাল ক্যাশের সুবিধা পাওয়া যায় এবং ডিভাইসের ব্যান্ডউইথ সাশ্রয় হয়',
          },
          {
            en: 'Because personal computers are physically incapable of sending UDP packets',
            bn: 'কারণ পার্সোনাল কম্পিউটার শারীরিকভাবে UDP প্যাকেট পাঠাতে অক্ষম',
          },
          {
            en: 'To make internet browsing take twice as long for security reasons',
            bn: 'নিরাপত্তার উদ্দেশ্যে ওয়েব ব্রাউজিংয়ের সময় ইচ্ছাকৃতভাবে দ্বিগুণ করার জন্য',
          },
          {
            en: 'Because the root nameservers only communicate using analog phone lines',
            bn: 'কারণ রুট নেমসার্ভারগুলো কেবল অ্যানালগ টেলিফোন লাইনের মাধ্যমে যোগাযোগ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Centralized recursive resolvers provide high-speed caching and shield root servers.',
          bn: 'শেয়ার্ড রিকার্সিভ রিজলভার উচ্চগতির ক্যাশ প্রদান করে এবং রুট সার্ভারকে অতিরিক্ত চাপ থেকে বাঁচায়।',
        },
        explanation: {
          en: 'A recursive resolver caches popular domains (like google.com) for thousands of local users simultaneously, eliminating repetitive traversal of the global root infrastructure.',
          bn: 'একটি রিকার্সিভ রিজলভার হাজার হাজার ব্যবহারকারীর জন্য জনপ্রিয় ডোমেন ক্যাশে জমা রাখে, যা বিশ্বব্যাপী রুট সার্ভারে বারবার অনুরোধ পাঠানো বন্ধ করে।'
        },
      },
      {
        id: 'dns-res-qz-2',
        kind: 'mcq',
        topic: 'dns-truncation-tc-flag-behavior',
        question: {
          en: 'When a DNS server responds over UDP with the Truncation flag (TC = 1) set, what protocol action does the client stub immediately perform?',
          bn: 'ডিএনএস সার্ভার যখন UDP-তে ট্রাংকেশন ফ্ল্যাগ ( TC = 1 ) সহ উত্তর দেয়, তখন ক্লায়েন্ট স্টাব তাৎক্ষণিকভাবে কোন প্রোটোকল পদক্ষেপ গ্রহণ করে?'
        },
        options: [
          {
            en: 'It immediately retries the identical query over reliable TCP port 53 to receive the full, untruncated response payload',
            bn: 'এটি সম্পূর্ণ ও অবিকৃত উত্তর পাওয়ার জন্য তাৎক্ষণিকভাবে নির্ভরযোগ্য TCP পোর্ট ৫৩-তে একই কোয়েরি পুনরায় পাঠায়',
          },
          {
            en: 'It disconnects the computer from the local area network permanently',
            bn: 'এটি কম্পিউটারকে লোকাল এরিয়া নেটওয়ার্ক থেকে স্থায়ীভাবে সংযোগ বিচ্ছিন্ন করে দেয়',
          },
          {
            en: 'It deletes all downloaded files from the computer hard drive',
            bn: 'এটি কম্পিউটারের হার্ড ড্রাইভ থেকে সমস্ত ডাউনলোড করা ফাইল মুছে ফেলে',
          },
          {
            en: 'It displays a hardware thermal alert on the monitor screen',
            bn: 'এটি মনিটর স্ক্রিনে হার্ডওয়্যার তাপমাত্রা সতর্কবার্তা প্রদর্শন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The client retries over TCP to handle oversized response packets.',
          bn: 'বড় আকারের রেসপন্স প্যাকেট গ্রহণ করতে ক্লায়েন্ট TCP-তে পুনরায় কোয়েরি পাঠায়।',
        },
        explanation: {
          en: 'When a UDP response exceeds packet size limits, the TC flag indicates partial data. Standards require clients to fall back to TCP port 53 for reliable delivery.',
          bn: 'UDP উত্তরের আকার সীমা ছাড়িয়ে গেলে TC ফ্ল্যাগ আংশিক ডাটা নির্দেশ করে। ক্লায়েন্ট তখন সম্পূর্ণ ডাটার জন্য TCP পোর্ট ৫৩-তে কোয়েরি করে।'
        },
      },
      {
        id: 'dns-res-qz-3',
        kind: 'mcq',
        topic: 'servfail-rcode-causes',
        question: {
          en: 'What condition typically causes a recursive DNS resolver to return a SERVFAIL (Server Failure, RCODE 2) response to a client?',
          bn: 'কোন পরিস্থিতির কারণে একটি রিকার্সিভ ডিএনএস রিজলভার সাধারণত ক্লায়েন্টকে SERVFAIL ( RCODE 2 ) রেসপন্স প্রদান করে?'
        },
        options: [
          {
            en: 'The recursive resolver experienced an upstream network timeout, an authoritative nameserver outage, or a DNSSEC cryptographic signature validation failure',
            bn: 'রিকার্সিভ রিজলভার আপস্ট্রিম নেটওয়ার্ক টাইমআউট, অথরিটেটিভ সার্ভারের অকার্যকারিতা অথবা DNSSEC ক্রিপ্টোগ্রাফিক স্বাক্ষর যাচাইয়ে ব্যর্থ হয়েছে',
          },
          {
            en: 'The client typed the website URL with the Caps Lock key turned on',
            bn: 'ক্লায়েন্ট ক্যাপস লক অন রেখে ওয়েবসাইটের ইউআরএল টাইপ করেছে',
          },
          {
            en: 'The computer mouse battery level fell below 20 percent',
            bn: 'কম্পিউটার মাউসের ব্যাটারি লেভেল ২০ শতাংশের নিচে নেমে গেছে',
          },
          {
            en: 'The user has opened more than 3 browser tabs simultaneously',
            bn: 'ব্যবহারকারী একসাথে ৩ টির বেশি ব্রাউজার ট্যাব খুলেছেন',
          },
        ],
        answer: 0,
        hint: {
          en: 'An upstream network outage or failed DNSSEC cryptographic validation.',
          bn: 'আপস্ট্রিম নেটওয়ার্ক ত্রুটি অথবা DNSSEC ক্রিপ্টোগ্রাফিক যাচাই ব্যর্থ হওয়া।',
        },
        explanation: {
          en: 'SERVFAIL indicates that the resolver could not obtain or validate a trustworthy answer from authoritative servers, frequently triggered by DNSSEC validation failures.',
          bn: 'SERVFAIL নির্দেশ করে যে রিজলভার অথরিটেটিভ সার্ভার থেকে বিশ্বস্ত উত্তর পায়নি বা যাচাই করতে পারেনি, যা প্রায়ই DNSSEC ব্যর্থতার কারণে ঘটে।'
        },
      },
      {
        id: 'dns-res-qz-4',
        kind: 'mcq',
        topic: 'root-nameserver-referral-response',
        question: {
          en: 'What information does a DNS Root Name Server return when queried for a domain name such as "example.com"?',
          bn: 'একটি ডোমেন নামের জন্য ( যেমন "example.com" ) অনুসন্ধান করা হলে ডিএনএস রুট নেমসার্ভার কোন তথ্যটি ফেরত পাঠায়?'
        },
        options: [
          {
            en: 'A referral response containing the NS records and IP addresses (glue records) of the authoritative .com Top-Level Domain (TLD) servers',
            bn: 'একটি রেফারাল উত্তর যাতে অথরিটেটিভ .com টপ-লেভেল ডোমেন (TLD) সার্ভারের NS রেকর্ড এবং আইপি ঠিকানা ( গ্লু রেকর্ড ) থাকে',
          },
          {
            en: 'The final IPv4 web server hosting address of example.com directly',
            bn: 'সরাসরি example.com এর চূড়ান্ত IPv4 ওয়েব সার্ভার হোস্টিং ঠিকানা',
          },
          {
            en: 'The complete HTML source code of the website homepage',
            bn: 'ওয়েবসাইট হোমপেজের সম্পূর্ণ এইচটিএমএল সোর্স কোড',
          },
          {
            en: 'The personal email address of the website system administrator',
            bn: 'ওয়েবসাইট সিস্টেম প্রশাসকের ব্যক্তিগত ইমেইল ঠিকানা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Root servers do not hold individual website IPs; they refer to TLD nameservers.',
          bn: 'রুট সার্ভার ওয়েবসাইটের আইপি রাখে না; তারা TLD নেমসার্ভারের দিকে রেফার করে।',
        },
        explanation: {
          en: 'Root servers maintain the root zone only. They refer queries for second-level domains to the appropriate TLD nameservers (such as Verisign for .com).',
          bn: 'রুট সার্ভার কেবল রুট জোন পরিচালনা করে। তারা সেকেন্ড-লেভেল ডোমেনের কোয়েরিকে উপযুক্ত TLD নেমসার্ভারে পাঠিয়ে দেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'dns-caching',
    title: {
      en: 'DNS Caching, TTL Mechanics & Propagation',
      bn: 'ডিএনএস ক্যাশিং, TTL মেকানিজম এবং প্রোপাগেশন'
    },
  },
};
