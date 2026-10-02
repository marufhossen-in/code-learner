import type { Lesson } from '../../../lib/types';

export const DnsRecordsLesson: Lesson = {
  slug: 'dns-records',
  tech: 'dns',
  title: {
    en: 'DNS Record Types: A, AAAA, CNAME, MX, TXT, NS & SOA',
    bn: 'ডিএনএস রেকর্ড টাইপ: A, AAAA, CNAME, MX, TXT, NS এবং SOA'
  },
  summary: {
    en: 'Master the core Resource Record types that populate DNS zone files. Understand IPv4 address mappings (A records), 128-bit IPv6 mappings (AAAA records), canonical hostname aliases (CNAME), priority-weighted mail exchangers (MX), domain verification strings (TXT for SPF/DKIM), authoritative nameserver delegations (NS), and Start of Authority metadata (SOA).',
    bn: 'ডিএনএস জোন ফাইল পরিচালনাকারী মূল রিসোর্স রেকর্ড টাইপগুলো আয়ত্ত করুন। IPv4 ও ১২৮-বিট IPv6 ম্যাপিং ( A ও AAAA রেকর্ড ), ক্যানোনিক্যাল হোস্টনেম এলিয়াস ( CNAME ) এবং মেইল সার্ভার রাউটিং ( MX ) শিখুন। ডোমেন ভেরিফিকেশন স্ট্রিং ( TXT ), অথরিটেটিভ নেমসার্ভার অর্পণ ( NS ) এবং স্টার্ট অব অথরিটি মেটাডাটা ( SOA ) বিস্তারিতভাবে জানুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'resource-records-zone-blocks',
      text: {
        en: 'Resource Records: The Core Building Blocks of DNS Zones',
        bn: 'রিসোর্স রেকর্ড: ডিএনএস জোনের মূল ভিত্তি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Every piece of data stored in the Domain Name System is organized as a Resource Record (abbreviated as RR in `RFC 1035`). When you configure a custom domain or manage cloud servers, you edit these records inside a DNS zone file. Each record provides a specific instruction to internet routers, web browsers, and mail transfer agents.',
        bn: 'ডোমেন নেম সিস্টেমে সংরক্ষিত প্রতিটি ডাটা একটি রিসোর্স রেকর্ড ( `RFC 1035` অনুসারে সংক্ষেপে RR ) হিসেবে সাজানো থাকে। আপনি যখন কোনো কাস্টম ডোমেন কনফিগার করেন বা ক্লাউড সার্ভার পরিচালনা করেন, তখন আপনি মূলত একটি ডিএনএস জোন ফাইলের ভেতর এই রেকর্ডগুলো সম্পাদনা করেন। প্রতিটি রেকর্ড ইন্টারনেট রাউটার, ওয়েব ব্রাউজার এবং মেইল সার্ভারকে সুনির্দিষ্ট নির্দেশনা প্রদান করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A standard resource record follows a five-field structure: Name, Time-To-Live (TTL), Class (almost always IN for Internet), Type, and Data. For instance, example.com. 3600 IN A 93.184.215.14 instructs resolvers that example.com maps to IPv4 address 93.184.215.14 and may be safely cached for 3600 seconds (1 hour).',
        bn: 'একটি সাধারণ রিসোর্স রেকর্ড ৫ টি ফিল্ড নিয়ে গঠিত হয়: নাম (Name), টাইম-টু-লাইভ (TTL), ক্লাস ( ইন্টারনেটের জন্য প্রায় সর্বদা IN ), টাইপ (Type) এবং ডাটা (Data)। উদাহরণস্বরূপ, example.com. 3600 IN A 93.184.215.14 রিজলভারকে নির্দেশ দেয় যে example.com ডোমেনটি IPv4 ঠিকানা 93.184.215.14-এ নির্দেশ করে এবং এটি ৩৬০০ সেকেন্ড ( ১ ঘণ্টা ) নিরাপদে ক্যাশে সংরক্ষণ করা যাবে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. A Record (Address) & AAAA Record (Quad-A)',
            bn: '১. A রেকর্ড ( অ্যাড্রেস ) এবং AAAA রেকর্ড ( কোয়াড-A )'
          },
          text: {
            en: 'An A record maps a hostname to a 32-bit IPv4 address (e.g. 192.0.2.1). An AAAA record (pronounced "quad-A") maps a hostname to a 128-bit IPv6 address (e.g. 2001:db8::1). It is called quad-A because 128 bits is exactly 4 times the 32-bit length of a legacy IPv4 A record.',
            bn: 'একটি A রেকর্ড হোস্টনেমকে একটি ৩২-বিট IPv4 ঠিকানায় ( যেমন 192.0.2.1 ) ম্যাপ করে। অন্যদিকে AAAA রেকর্ড হোস্টনেমকে একটি ১২৮-বিট IPv6 ঠিকানায় ( যেমন 2001:db8::1 ) ম্যাপ করে। এটিকে কোয়াড-A বলা হয় কারণ ১২৮ বিট হলো সাধারণ ৩২-বিট A রেকর্ডের তুলনায় ঠিক ৪ গুণ বড়।'
          },
        },
        {
          title: {
            en: '2. CNAME Record (Canonical Name Alias)',
            bn: '২. CNAME রেকর্ড ( ক্যানোনিক্যাল নেম এলিয়াস )'
          },
          text: {
            en: 'A CNAME creates an alias from one domain name to another canonical domain. For example, pointing blog.example.com to example.com means any IP changes made to example.com automatically apply to the blog. However, RFC 1912 forbids placing a CNAME alongside other records at the zone apex.',
            bn: 'একটি CNAME একটি ডোমেন নাম থেকে অন্য একটি ক্যানোনিক্যাল ডোমেনে ছদ্মনাম বা এলিয়াস তৈরি করে। উদাহরণস্বরূপ, blog.example.com কে example.com এর দিকে নির্দেশ করলে মূল ডোমেনের যেকোনো আইপি পরিবর্তন ব্লগেও স্বয়ংক্রিয়ভাবে কার্যকর হয়। তবে RFC 1912 অনুসারে জোন অ্যাপেক্সে অন্য রেকর্ডের সাথে CNAME রাখা নিষিদ্ধ।'
          },
        },
        {
          title: {
            en: '3. MX Record (Mail Exchanger)',
            bn: '৩. MX রেকর্ড ( মেইল এক্সচেঞ্জার )'
          },
          text: {
            en: 'An MX record specifies the incoming mail servers responsible for receiving email for a domain. Each MX record includes an integer preference priority value: lower numbers indicate higher delivery priority. A mail agent tries priority 10 first before falling back to backup priority 20.',
            bn: 'একটি MX রেকর্ড ডোমেনের ইমেইল গ্রহণের জন্য দায়িত্বপ্রাপ্ত ইনকামিং মেইল সার্ভারগুলো নির্ধারণ করে। প্রতিটি MX রেকর্ডে একটি প্রায়োরিটি সংখ্যা থাকে: ছোট সংখ্যা বেশি অগ্রাধিকার নির্দেশ করে। একটি মেইল এজেন্ট ব্যাকআপ প্রায়োরিটি ২০-এ যাওয়ার আগে প্রথমে প্রধান প্রায়োরিটি ১০-এ ইমেইল পাঠানোর চেষ্টা করে।'
          },
        },
        {
          title: {
            en: '4. TXT Record (Text & Security Policies)',
            bn: '৪. TXT রেকর্ড ( টেক্সট এবং নিরাপত্তা পলিসি )'
          },
          text: {
            en: 'A TXT record holds arbitrary text data. It is widely used to verify domain ownership for web services and publish critical email security frameworks, including Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and DMARC.',
            bn: 'একটি TXT রেকর্ড যেকোনো টেক্সট ডাটা ধারণ করে। এটি ওয়েব সার্ভিসে ডোমেন মালিকানা প্রমাণ করতে এবং সেন্ডার পলিসি ফ্রেমওয়ার্ক (SPF), ডোমেনকিস আইডেন্টিফাইড মেইল (DKIM) ও DMARC এর মতো অত্যাবশ্যকীয় ইমেইল নিরাপত্তা পলিসি প্রকাশ করতে ব্যাপকভাবে ব্যবহৃত হয়।'
          },
        },
        {
          title: {
            en: '5. NS Record (Name Server) & SOA Record (Start of Authority)',
            bn: '৫. NS রেকর্ড ( নেমসার্ভার ) এবং SOA রেকর্ড ( স্টার্ট অব অথরিটি )'
          },
          text: {
            en: 'NS records declare which authoritative nameservers hold the master zone file for the domain. The SOA record is the mandatory first record of every zone, defining the primary master server, administrator email, serial number, and zone refresh timers.',
            bn: 'NS রেকর্ড ঘোষণা করে কোন অথরিটেটিভ নেমসার্ভারগুলো ডোমেনের মূল জোন ফাইল সংরক্ষণ করে। SOA রেকর্ড হলো প্রতিটি জোনের প্রথম বাধ্যতামূলক রেকর্ড, যা প্রধান মাস্টার সার্ভার, প্রশাসকের ইমেইল, সিরিয়াল নম্বর এবং জোন রিফ্রেশ টাইমার নির্ধারণ করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Production Zone File Architecture & Record Relationships',
        bn: 'প্রোডাকশন জোন ফাইল আর্কিটেকচার এবং রেকর্ড সম্পর্ক'
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Visual representation of a DNS zone file with A AAAA CNAME MX TXT and NS records">
  <rect width="820" height="440" fill="#0f172a" rx="12"/>
  
  <text x="410" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ANATOMY OF A PRODUCTION DNS ZONE FILE (example.com)</text>
  
  <!-- Zone Table Container -->
  <g transform="translate(30, 48)">
    <!-- Header Row -->
    <rect width="760" height="32" rx="4" fill="#1e293b" stroke="#475569"/>
    <text x="70" y="21" fill="#94a3b8" font-size="11" font-weight="bold">NAME</text>
    <text x="170" y="21" fill="#94a3b8" font-size="11" font-weight="bold">TTL</text>
    <text x="240" y="21" fill="#94a3b8" font-size="11" font-weight="bold">CLASS</text>
    <text x="310" y="21" fill="#94a3b8" font-size="11" font-weight="bold">TYPE</text>
    <text x="490" y="21" fill="#94a3b8" font-size="11" font-weight="bold">RECORD DATA (RDATA)</text>
    
    <!-- Row 1: SOA -->
    <g transform="translate(0, 36)">
      <rect width="760" height="34" fill="#0f172a" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@ (apex)</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">86400</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#ec4899" font-size="11" font-weight="bold">SOA</text>
      <text x="400" y="22" fill="#f8fafc" font-size="10">ns1.example.com. admin.example.com. (2026092901)</text>
    </g>
    
    <!-- Row 2: NS -->
    <g transform="translate(0, 72)">
      <rect width="760" height="34" fill="#1e293b" fill-opacity="0.4" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">86400</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#a855f7" font-size="11" font-weight="bold">NS</text>
      <text x="400" y="22" fill="#f8fafc" font-size="10">ns1.example.com. &amp; ns2.example.com.</text>
    </g>
    
    <!-- Row 3: A -->
    <g transform="translate(0, 108)">
      <rect width="760" height="34" fill="#0f172a" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">3600</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#10b981" font-size="11" font-weight="bold">A</text>
      <text x="400" y="22" fill="#10b981" font-size="10">93.184.215.14 (IPv4 32-bit)</text>
    </g>
    
    <!-- Row 4: AAAA -->
    <g transform="translate(0, 144)">
      <rect width="760" height="34" fill="#1e293b" fill-opacity="0.4" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">3600</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#10b981" font-size="11" font-weight="bold">AAAA</text>
      <text x="400" y="22" fill="#10b981" font-size="10">2606:2800:21f:cb07:6820:80da:af6b:8b2c (IPv6 128-bit)</text>
    </g>
    
    <!-- Row 5: CNAME -->
    <g transform="translate(0, 180)">
      <rect width="760" height="34" fill="#0f172a" stroke="#334155"/>
      <text x="70" y="22" fill="#c084fc" font-size="11" font-weight="bold">www</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">3600</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#38bdf8" font-size="11" font-weight="bold">CNAME</text>
      <text x="400" y="22" fill="#38bdf8" font-size="10">example.com. (Alias to apex)</text>
    </g>
    
    <!-- Row 6: MX (Priority 10) -->
    <g transform="translate(0, 216)">
      <rect width="760" height="34" fill="#1e293b" fill-opacity="0.4" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">1800</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#f59e0b" font-size="11" font-weight="bold">MX</text>
      <text x="400" y="22" fill="#f59e0b" font-size="10">10 mail-primary.example.com. (Highest preference)</text>
    </g>
    
    <!-- Row 7: MX (Priority 20) -->
    <g transform="translate(0, 252)">
      <rect width="760" height="34" fill="#0f172a" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">1800</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#f59e0b" font-size="11" font-weight="bold">MX</text>
      <text x="400" y="22" fill="#f59e0b" font-size="10">20 mail-backup.example.com. (Secondary fallback)</text>
    </g>
    
    <!-- Row 8: TXT (SPF) -->
    <g transform="translate(0, 288)">
      <rect width="760" height="34" fill="#1e293b" fill-opacity="0.4" stroke="#334155"/>
      <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold">@</text>
      <text x="170" y="22" fill="#cbd5e1" font-size="10">3600</text>
      <text x="240" y="22" fill="#cbd5e1" font-size="10">IN</text>
      <text x="310" y="22" fill="#64748b" font-size="11" font-weight="bold">TXT</text>
      <text x="400" y="22" fill="#cbd5e1" font-size="10">"v=spf1 include:_spf.google.com ~all"</text>
    </g>
  </g>
  
  <text x="410" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">@ represents the zone apex origin (example.com.) • Lower MX numbers take precedence over higher numbers</text>
</svg>`,
      caption: {
        en: 'A standard zone file defines authoritative records for an apex domain: SOA, NS, A, AAAA, MX priorities, and security TXT records.',
        bn: 'একটি সাধারণ জোন ফাইল অ্যাপেক্স ডোমেনের জন্য অথরিটেটিভ রেকর্ড সংজ্ঞায়িত করে: SOA, NS, A, AAAA, MX প্রায়োরিটি এবং নিরাপত্তা TXT রেকর্ড।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'dns-zone-validator.js',
      code: `// Deterministic DNS Zone File Record Parser and Validator
// Enforces RFC 1912 CNAME rules and sorts MX records by priority

class DnsZoneValidator {
  constructor(originDomain) {
    this.origin = originDomain.endsWith('.') ? originDomain : originDomain + '.';
    this.records = [];
  }

  addRecord(name, ttl, type, data, priority = null) {
    const fqdn = name === '@' ? this.origin : (name.endsWith('.') ? name : name + '.' + this.origin);
    const record = { name: fqdn, rawName: name, ttl, type: type.toUpperCase(), data, priority };

    // RFC 1912 Section 2.4: CNAME cannot coexist with other records for same name
    if (record.type === 'CNAME') {
      if (name === '@') {
        throw new Error('RFC 1912 Violation: CNAME cannot be placed at zone apex (@). Use A/AAAA or ALIAS.');
      }
      const existing = this.records.find(r => r.name === fqdn);
      if (existing) {
        throw new Error('RFC 1912 Violation: CNAME cannot coexist with existing ' + existing.type + ' record on ' + fqdn);
      }
    }

    this.records.push(record);
  }

  getMailExchangers() {
    return this.records
      .filter(r => r.type === 'MX')
      .sort((a, b) => a.priority - b.priority);
  }

  lookup(name, type) {
    const target = name === '@' ? this.origin : (name.endsWith('.') ? name : name + '.' + this.origin);
    return this.records.filter(r => r.name === target && (type === 'ANY' || r.type === type));
  }
}

// Build and validate a production zone
const zone = new DnsZoneValidator('example.com.');
zone.addRecord('@', 86400, 'SOA', 'ns1.example.com. admin.example.com. 2026092901');
zone.addRecord('@', 86400, 'NS', 'ns1.example.com.');
zone.addRecord('@', 3600, 'A', '93.184.215.14');
zone.addRecord('@', 3600, 'AAAA', '2606:2800:21f:cb07:6820:80da:af6b:8b2c');
zone.addRecord('@', 1800, 'MX', 'backup-mail.example.com.', 20);
zone.addRecord('@', 1800, 'MX', 'primary-mail.example.com.', 10);
zone.addRecord('www', 3600, 'CNAME', 'example.com.');

console.log('=== Validated DNS Zone Records ===');
console.log('Total Records Loaded:', zone.records.length);

const mxList = zone.getMailExchangers();
console.log('Primary MX Server   :', mxList[0].data, '(Priority ' + mxList[0].priority + ')');
console.log('Secondary MX Server :', mxList[1].data, '(Priority ' + mxList[1].priority + ')');

const webAlias = zone.lookup('www', 'CNAME');
console.log('www Canonical Target:', webAlias[0].data);`,
      caption: {
        en: 'The validator verifies RFC 1912 CNAME compliance and orders MX records so priority 10 is dispatched before priority 20.',
        bn: 'ভ্যালিডেটরটি RFC 1912 CNAME নিয়ম যাচাই করে এবং MX রেকর্ড সাজায় যাতে প্রায়োরিটি ১০ প্রায়োরিটি ২০ এর আগে ব্যবহৃত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The CNAME Apex Restriction & Cloudflare CNAME Flattening',
        bn: 'CNAME অ্যাপেক্স সীমাবদ্ধতা এবং ক্লাউডফ্লেয়ার CNAME ফ্ল্যাটেনিং'
      },
      text: {
        en: 'Under RFC 1912 section 2.4, a domain name possessing a CNAME cannot have any other resource records. Because your root domain apex (example.com) must hold mandatory SOA and NS records, placing a raw CNAME on example.com breaks DNS standards. Modern DNS providers solve this using CNAME Flattening (or ANAME/ALIAS records): the provider nameserver intercepts queries at the apex, dynamically resolves the target IP, and returns native A and AAAA answers.',
        bn: 'RFC 1912 সেকশন ২.৪ অনুসারে কোনো ডোমেন নামে CNAME থাকলে সেখানে অন্য কোনো রিসোর্স রেকর্ড থাকতে পারে না। যেহেতু আপনার মূল ডোমেন অ্যাপেক্সে ( example.com ) অবশ্যই বাধ্যতামূলক SOA এবং NS রেকর্ড থাকতে হয়, তাই অ্যাপেক্সে সাধারণ CNAME বসালে ডিএনএস নিয়ম লঙ্ঘন হয়। আধুনিক ডিএনএস সেবাদাতারা CNAME ফ্ল্যাটেনিং ( বা ALIAS রেকর্ড ) ব্যবহারের মাধ্যমে এটি সমাধান করে: নেমসার্ভার অভ্যন্তরীণভাবে ক্যানোনিক্যাল হোস্টনেমের আইপি খুঁজে বের করে এবং ক্লায়েন্টকে সরাসরি বৈধ A ও AAAA উত্তর প্রদান করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-rec-ex-1',
      kind: 'predict',
      question: {
        en: 'How many times larger in bit-length is an IPv6 AAAA record (128 bits) compared to a standard 32-bit IPv4 A record? (128 / 32 = 4). Type the single digit.',
        bn: 'একটি ১২৮-বিট IPv6 AAAA রেকর্ড সাধারণ ৩২-বিট IPv4 A রেকর্ডের চেয়ে কত গুণ বড়? ( ১২৮ / ৩২ = ৪ )। একক সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Divide 128 bits by 32 bits: 128 / 32 = 4.',
        bn: '১২৮ বিটকে ৩২ বিট দিয়ে ভাগ করুন: ১২৮ / ৩২ = ৪।'
      },
      explanation: {
        en: 'An IPv6 address is 128 bits, exactly 4 times the 32 bits of an IPv4 address, which is why it is called quad-A (AAAA).',
        bn: 'একটি IPv6 ঠিকানা ১২৮ বিটের, যা ৩২ বিটের IPv4 ঠিকানার চেয়ে ঠিক ৪ গুণ বড়। এ কারণেই একে কোয়াড-A (AAAA) বলা হয়।'
      },
    },
    {
      id: 'dns-rec-ex-2',
      kind: 'mcq',
      question: {
        en: 'If a domain publishes two MX records with priority 10 and priority 20, which server will sending mail transfer agents attempt to deliver mail to first?',
        bn: 'যদি কোনো ডোমেন প্রায়োরিটি ১০ এবং প্রায়োরিটি ২০ সহ ২ টি MX রেকর্ড প্রকাশ করে, তবে প্রেরণকারী মেইল এজেন্ট কোন সার্ভারে প্রথমে মেইল পাঠাবে?'
      },
      options: [
        {
          en: 'The mail server with priority 10, because in MX records lower numerical values represent higher preference',
          bn: 'প্রায়োরিটি ১০ বিশিষ্ট মেইল সার্ভারে, কারণ MX রেকর্ডে ছোট সংখ্যা বেশি অগ্রাধিকার নির্দেশ করে',
        },
        {
          en: 'The mail server with priority 20, because higher numbers always win in networking',
          bn: 'প্রায়োরিটি ২০ বিশিষ্ট সার্ভারে, কারণ নেটওয়ার্কিংয়ে বড় সংখ্যা সবসময় অগ্রাধিকার পায়',
        },
        {
          en: 'Neither server, because having multiple MX records causes fatal email bounces',
          bn: 'কোনোটিতেই নয়, কারণ একাধিক MX রেকর্ড থাকলে ইমেইল বাউন্স করে',
        },
        {
          en: 'Mail is sent randomly between both servers regardless of priority',
          bn: 'প্রায়োরিটি বিবেচনা না করেই এলোমেলোভাবে যেকোনো একটিতে পাঠানো হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Lower numerical priority values indicate primary preference in DNS MX records.',
        bn: 'ডিএনএস MX রেকর্ডে ছোট সংখ্যার প্রায়োরিটি প্রধান পছন্দ নির্দেশ করে।',
      },
      explanation: {
        en: 'MX priorities follow a golf-score convention: lowest numbers have highest priority. Servers fall back to higher-numbered servers only if lower-numbered servers are unreachable.',
        bn: 'MX প্রায়োরিটি গলফ স্কোরের মতো কাজ করে: সর্বনিম্ন সংখ্যাই সর্বোচ্চ প্রাধান্য পায়। প্রধান সার্ভারে যোগাযোগ সম্ভব না হলেই কেবল ব্যাকআপ সার্ভার ব্যবহার করা হয়।'
      },
    },
    {
      id: 'dns-rec-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which DNS resource record type is most commonly used to publish SPF, DKIM, and DMARC authentication policies for email anti-spoofing?',
        bn: 'ইমেইল জালিয়াতি রোধে SPF, DKIM এবং DMARC পলিসি প্রকাশের জন্য সাধারণত কোন ডিএনএস রেকর্ড ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'TXT (Text) record',
          bn: 'TXT ( টেক্সট ) রেকর্ড',
        },
        {
          en: 'PTR (Pointer) record',
          bn: 'PTR ( পয়েন্টার ) রেকর্ড',
        },
        {
          en: 'A (Address) record',
          bn: 'A ( অ্যাড্রেস ) রেকর্ড',
        },
        {
          en: 'NS (Name Server) record',
          bn: 'NS ( নেমসার্ভার ) রেকর্ড',
        },
      ],
      answer: 0,
      hint: {
        en: 'Arbitrary text strings storing policy declarations like "v=spf1 ...".',
        bn: '"v=spf1 ..." এর মতো টেক্সট পলিসি ঘোষণার রেকর্ড।',
      },
      explanation: {
        en: 'TXT records allow domain owners to store arbitrary text, making them the standard carrier for SPF authorization lists and DKIM public cryptographic keys.',
        bn: 'TXT রেকর্ড যেকোনো টেক্সট সংরক্ষণের সুযোগ দেয়, যা SPF অনুমোদিত তালিকা এবং DKIM পাবলিক ক্রিপ্টোগ্রাফিক কি প্রকাশের আদর্শ মাধ্যম।'
      },
    },
    {
      id: 'dns-rec-ex-4',
      kind: 'predict',
      question: {
        en: 'If a domain zone contains 2 MX records configured with priorities 10 and 20, what is the priority number of the primary preferred mail server? Type the number.',
        bn: 'যদি কোনো ডোমেন জোনে ১০ এবং ২০ প্রায়োরিটি সহ ২ টি MX রেকর্ড থাকে, তবে প্রধান পছন্দের মেইল সার্ভারের প্রায়োরিটি সংখ্যা কত? সংখ্যাটি টাইপ করুন।'
      },
      answer: '10',
      hint: {
        en: 'The lowest number represents the primary mail server: 10.',
        bn: 'সবচেয়ে ছোট সংখ্যাটি প্রধান মেইল সার্ভারকে নির্দেশ করে: ১০।'
      },
      explanation: {
        en: 'The primary mail server is assigned the lower priority value of 10, while the secondary fallback server is assigned 20.',
        bn: 'প্রধান মেইল সার্ভারকে ছোট প্রায়োরিটি মান ১০ দেওয়া হয়, আর ব্যাকআপ সার্ভারকে ২০ দেওয়া হয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'DNS Record Types Quiz',
      bn: 'ডিএনএস রেকর্ড টাইপ কুইজ'
    },
    questions: [
      {
        id: 'dns-rec-qz-1',
        kind: 'mcq',
        topic: 'cname-apex-restriction-rfc1912',
        question: {
          en: 'Why does RFC 1912 forbid placing a standard CNAME record at the root apex (@) of a DNS domain zone?',
          bn: 'কেন RFC 1912 একটি ডিএনএস জোন ফাইলের রুট অ্যাপেক্সে (@) সাধারণ CNAME রেকর্ড রাখা নিষিদ্ধ করে?'
        },
        options: [
          {
            en: 'A CNAME record cannot coexist with any other record types for the same name, but a zone apex must possess mandatory SOA and NS records',
            bn: 'একই নামের জন্য CNAME এর সাথে অন্য কোনো রেকর্ড থাকতে পারে না, কিন্তু একটি জোন অ্যাপেক্সে অবশ্যই বাধ্যতামূলক SOA এবং NS রেকর্ড থাকতে হয়',
          },
          {
            en: 'Because CNAME records only work on IPv6 networks',
            bn: 'কারণ CNAME রেকর্ড কেবল IPv6 নেটওয়ার্কে কাজ করে',
          },
          {
            en: 'Placing CNAME at the apex burns out physical ethernet routers',
            bn: 'অ্যাপেক্সে CNAME বসালে ফিজিক্যাল ইথারনেট রাউটার পুড়ে নষ্ট হয়ে যায়',
          },
          {
            en: 'Because internet domain names are not allowed to receive web traffic',
            bn: 'কারণ ইন্টারনেট ডোমেন নামের জন্য ওয়েব ট্রাফিক গ্রহণ করা নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: {
          en: 'CNAME exclusivity conflicts with mandatory zone SOA and NS records.',
          bn: 'CNAME এর একক থাকার নিয়মটি জোনের বাধ্যতামূলক SOA ও NS রেকর্ডের সাথে সাংঘর্ষিক।',
        },
        explanation: {
          en: 'RFC 1912 states that if a CNAME exists for a label, no other records can exist for that label. Since the apex must have SOA and NS records, a CNAME cannot be placed there.',
          bn: 'RFC 1912 বলে যে কোনো লেবেলে CNAME থাকলে সেখানে অন্য রেকর্ড থাকতে পারে না। যেহেতু অ্যাপেক্সে SOA ও NS থাকা বাধ্যতামূলক, তাই সেখানে CNAME বসানো যায় না।'
        },
      },
      {
        id: 'dns-rec-qz-2',
        kind: 'mcq',
        topic: 'soa-record-serial-number',
        question: {
          en: 'What is the operational purpose of the Serial Number inside a DNS zone Start of Authority (SOA) record?',
          bn: 'ডিএনএস জোনের স্টার্ট অব অথরিটি (SOA) রেকর্ডের ভেতরে সিরিয়াল নম্বরের কাজের উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It enables secondary slave nameservers to detect when zone data has changed on the primary master and initiate a zone transfer (AXFR/IXFR)',
            bn: 'এটি সেকেন্ডারি স্লেভ নেমসার্ভারকে বুঝতে সাহায্য করে কখন প্রাইমারি মাস্টারে জোন পরিবর্তন হয়েছে এবং নতুন তথ্য ট্রান্সফার করতে হবে',
          },
          {
            en: 'It specifies the physical price in dollars required to register the domain name',
            bn: 'এটি ডোমেন নাম নিবন্ধনের জন্য প্রয়োজনীয় ডলারের আর্থিক মূল্য নির্ধারণ করে',
          },
          {
            en: 'It counts how many visitors clicked on the website homepage each month',
            bn: 'এটি প্রতি মাসে কতজন দর্শক হোমপেজে ক্লিক করেছে তার সংখ্যা গণনা করে',
          },
          {
            en: 'It controls the physical fan speed inside the server room cooling unit',
            bn: 'এটি সার্ভার রুমের কুলিং ফ্যানের ঘূর্ণন গতি নিয়ন্ত্রণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Secondary nameservers check if the master serial number has incremented.',
          bn: 'মাস্টার সার্ভারে সিরিয়াল নম্বর বেড়েছে কিনা তা সেকেন্ডারি নেমসার্ভার যাচাই করে।',
        },
        explanation: {
          en: 'When an administrator edits a zone, the serial number is incremented (often formatted as YYYYMMDDNN). Secondary servers compare serial numbers to know when replication is needed.',
          bn: 'জোন ফাইল পরিবর্তন করলে সিরিয়াল নম্বর বাড়ানো হয় ( সাধারণত YYYYMMDDNN আকারে )। সেকেন্ডারি সার্ভার এই নম্বর দেখেই নতুন তথ্য কপি করে নেয়।'
        },
      },
      {
        id: 'dns-rec-qz-3',
        kind: 'mcq',
        topic: 'mx-record-priority-semantics',
        question: {
          en: 'How do internet Mail Transfer Agents (MTAs) interpret numerical priority values in DNS MX records?',
          bn: 'ইন্টারনেট মেইল ট্রান্সফার এজেন্টগুলো (MTAs) ডিএনএস MX রেকর্ডের প্রায়োরিটি সংখ্যা কীভাবে মূল্যায়ন করে?'
        },
        options: [
          {
            en: 'Lower numerical values have highest preference; higher numerical values serve as secondary or fallback servers',
            bn: 'ছোট সংখ্যা সর্বোচ্চ অগ্রাধিকার পায়; বড় সংখ্যাগুলো ব্যাকআপ বা বিকল্প সার্ভার হিসেবে ব্যবহৃত হয়',
          },
          {
            en: 'Higher numerical values are always tried first before lower numbers',
            bn: 'ছোট সংখ্যার আগে সবসময় বড় সংখ্যাকে প্রথমে চেষ্টা করা হয়',
          },
          {
            en: 'All priority numbers are summed together to compute network latency',
            bn: 'নেটওয়ার্ক লেটেন্সি পরিমাপ করতে সমস্ত প্রায়োরিটি সংখ্যা একসাথে যোগ করা হয়',
          },
          {
            en: 'Priority numbers specify how many email messages can be sent per day',
            bn: 'প্রায়োরিটি সংখ্যা নির্ধারণ করে প্রতিদিন সর্বোচ্চ কতটি ইমেইল পাঠানো যাবে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Lowest priority integer equals highest delivery preference.',
          bn: 'সবচেয়ে ছোট পূর্ণসংখ্যার প্রায়োরিটিই সর্বোচ্চ ডেলিভারি প্রাধান্য পায়।',
        },
        explanation: {
          en: 'MTAs attempt delivery to the MX record with the lowest integer priority first. If that server is unresponsive, they try the next lowest integer priority.',
          bn: 'মেইল সার্ভারগুলো প্রথমে সর্বনিম্ন সংখ্যার MX রেকর্ডে সংযোগ করে। সেটি সাড়া না দিলে পরবর্তী ছোট সংখ্যার সার্ভারে চেষ্টা চালানো হয়।'
        },
      },
      {
        id: 'dns-rec-qz-4',
        kind: 'mcq',
        topic: 'a-vs-aaaa-record-difference',
        question: {
          en: 'What architectural difference distinguishes an A record from an AAAA record?',
          bn: 'একটি A রেকর্ডের সাথে AAAA রেকর্ডের মূল কাঠামোগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'An A record maps a hostname to a 32-bit IPv4 address, while an AAAA record maps to a 128-bit IPv6 address',
            bn: 'একটি A রেকর্ড হোস্টনেমকে ৩২-বিট IPv4 ঠিকানায় ম্যাপ করে, আর AAAA রেকর্ড ১২৮-বিট IPv6 ঠিকানায় ম্যাপ করে',
          },
          {
            en: 'An A record is for audio files, while an AAAA record is for video streaming',
            bn: 'A রেকর্ড অডিও ফাইলের জন্য, আর AAAA রেকর্ড ভিডিও স্ট্রিমিংয়ের জন্য',
          },
          {
            en: 'An AAAA record can only be queried during leap years',
            bn: 'একটি AAAA রেকর্ড কেবল অধিবর্ষের সময় অনুসন্ধান করা যায়',
          },
          {
            en: 'An A record requires paper mail confirmation from the postal service',
            bn: 'A রেকর্ডের জন্য ডাক বিভাগের মাধ্যমে লিখিত চিঠির অনুমোদনের প্রয়োজন হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'IPv4 32-bit versus IPv6 128-bit addressing.',
          bn: 'IPv4 ৩২-বিট বনাম IPv6 ১২৮-বিট অ্যাড্রেসিং।',
        },
        explanation: {
          en: 'A records provide traditional 32-bit IPv4 addresses (dotted-decimal), while AAAA records provide modern 128-bit IPv6 addresses (hexadecimal notation).',
          bn: 'A রেকর্ড ঐতিহ্যবাহী ৩২-বিট IPv4 ঠিকানা প্রদান করে এবং AAAA রেকর্ড আধুনিক ১২৮-বিট IPv6 ঠিকানা প্রদান করে।'
        },
      },
    ],
  },
  next: {
    slug: 'dns-resolution',
    title: {
      en: 'DNS Resolution: Recursive versus Iterative Traversal',
      bn: 'ডিএনএস রেজোলিউশন: রিকার্সিভ বনাম ইটারেটিভ ট্রাভার্সাল'
    },
  },
};
