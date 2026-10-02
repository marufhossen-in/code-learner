import type { Lesson } from '../../../lib/types';

export const theDnsCensusLesson: Lesson = {
  slug: 'the-dns-census',
  tech: 'networking',
  title: {
    en: 'DNS Architecture and Resolution: Recursive Hierarchy, Record Types, and Anycast',
    bn: 'ডিএনএস আর্কিটেকচার ও সমাধান: রিকার্সিভ হায়ারার্কি, রেকর্ড টাইপ ও অ্যানিকাস্ট'
  },
  summary: {
    en: 'Before a single HTTP packet traverses the global Internet, the Domain Name System (DNS) resolves human-friendly hostnames into machine-routable IP addresses. This lesson traces the complete recursive lookup workflow across the four architectural tiers: local stub resolvers, recursive public resolvers, 13 logical root server identities operating across 1700 anycast nodes, TLD nameservers, and authoritative zone holders. You will master critical resource record types from A and AAAA to CNAME, MX, TXT, and CAA, understand glue records that resolve circular references, and evaluate modern encrypted transports including DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT).',
    bn: 'একটি এইচটিটিপি প্যাকেট ইন্টারনেটে পাঠানোর আগেই ডোমেন নেম সিস্টেম (ডিএনএস) মানুষের বোধগম্য ডোমেন নামকে কম্পিউটারের আইপি অ্যাড্রেসে রূপান্তর করে। এই পাঠে চারটি প্রধান স্তরের মধ্য দিয়ে রিকার্সিভ অনুসন্ধানের সম্পূর্ণ কার্যপ্রণালী বিস্তারিত বিশ্লেষণ করা হয়েছে: লোকাল স্টাব রিজলভার, পাবলিক রিকার্সিভ রিজলভার, ১৭০০টির বেশি অ্যানিকাস্ট নোডে বিস্তৃত ১৩টি রুট সার্ভার পরিচয়, টিএলডি সার্ভার এবং অথরিটেটিভ জোন সার্ভার। এখানে A, AAAA, CNAME, MX, TXT ও CAA রেকর্ড, বৃত্তাকার রেফারেন্স এড়াতে গ্লু রেকর্ড এবং DoH ও DoT এর মতো আধুনিক এনক্রিপ্টেড প্রোটোকল বিশদভাবে পর্যালোচনা করা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-tcp-tidekeeper',
    tech: 'networking',
    title: {
      en: 'TCP Mechanics — Handshakes, Sequence Numbers, Flow, and Congestion Control',
      bn: 'টিসিপি মেকানিক্স: হ্যান্ডশেক, সিকোয়েন্স ট্র্যাকিং, প্রবাহ ও কনজেশন নিয়ন্ত্রণ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'dns-hierarchy-overview',
      text: {
        en: 'The Hierarchical Architecture of DNS Resolution',
        bn: 'ডিএনএস সমাধানের ক্রমানুসারিক আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you enter a web address into your browser, an entire planetary lookup system activates before any TCP socket connection begins. Human-readable domain names must resolve into machine-routable IP addresses through a distributed tree of specialized nameservers.',
        bn: 'যখন আপনি ব্রাউজারে কোনো ওয়েব ঠিকানা প্রবেশ করান, তখন টিসিপি সকেট সংযোগ শুরুর পূর্বেই বিশ্বজুড়ে বিস্তৃত একটি নাম অনুসন্ধান ব্যবস্থা সক্রিয় হয়। মানুষের বোধগম্য ডোমেন নামগুলোকে বিশেষায়িত নেমসার্ভারের মাধ্যমে আইপি অ্যাড্রেসে রূপান্তর করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The resolution workflow starts at the client stub resolver, which queries a configured recursive resolver (such as 1.1.1.1 or an ISP resolver). If the record is not cached, the recursive resolver queries one of 13 root server identities. The root server returns a referral delegation to the Top-Level Domain (TLD) nameserver, which directs the query to the domain’s authoritative nameserver to obtain the final answer.',
        bn: 'এই অনুসন্ধান প্রক্রিয়াটি শুরু হয় ক্লায়েন্ট স্টাব রিজলভার থেকে, যা একটি কনফিগার করা রিকার্সিভ রিজলভারে (যেমন 1.1.1.1 বা আইএসপির সার্ভার) কুয়েরি পাঠায়। ক্যাশে না থাকলে রিকার্সিভ রিজলভার ১৩টি রুট সার্ভারের ১টিতে যোগাযোগ করে। রুট সার্ভার টপ-লেভেল ডোমেন (TLD) সার্ভারের সন্ধান দেয়, যা পরবর্তীতে মূল অথরিটেটিভ নেমসার্ভারে পাঠিয়ে চূড়ান্ত আইপি এনে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'recursive-resolver',
          def: {
            en: 'A DNS server that performs iterative queries across root, TLD, and authoritative nameservers on behalf of the client.',
            bn: 'একটি ডিএনএস সার্ভার যা ক্লায়েন্টের পক্ষে রুট, টিএলডি ও অথরিটেটিভ সার্ভারে ঘুরে পুরো নাম অনুসন্ধানের কাজ সম্পন্ন করে।'
          }
        },
        {
          term: 'time-to-live',
          def: {
            en: 'The duration in seconds that an intermediate resolver is permitted to cache and serve a DNS record before re-querying.',
            bn: 'একটি ডিএনএস রেকর্ড পুনরায় অনুসন্ধানের পূর্বে মধ্যবর্তী রিজলভার কত সেকেন্ড ক্যাশে রাখতে পারবে তার মেয়াদ।'
          }
        },
        {
          term: 'glue-records',
          def: {
            en: 'An A or AAAA record provided by a parent zone containing the IP address of a delegated nameserver to resolve circular dependencies.',
            bn: 'প্যারেন্ট জোন দ্বারা প্রদত্ত একটি আইপি রেকর্ড যা চক্রাকার রেফারেন্স এড়াতে ডেলিগেটেড নেমসার্ভারের নিজস্ব আইপি সরবরাহ করে।'
          }
        },
        {
          term: 'anycast-routing',
          def: {
            en: 'A network addressing technique where multiple geographically dispersed servers share a single IP address announced via BGP.',
            bn: 'একটি নেটওয়ার্ক রাউটিং কৌশল যেখানে একাধিক ভিন্ন স্থানে অবস্থিত সার্ভার BGP এর মাধ্যমে একটি অভিন্ন আইপি শেয়ার করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'core-dns-records-table',
      text: {
        en: 'Comprehensive Matrix of Fundamental DNS Record Types',
        bn: 'মৌলিক ডিএনএস রেকর্ড সমূহের পূর্ণাঙ্গ তুলনামূলক তালিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Each record type serves a distinct routing, email delivery, domain verification, or security constraint purpose.',
        bn: 'প্রতিটি রেকর্ড টাইপ রাউটিং, ইমেইল পরিবহন, ডোমেন যাচাইকরণ বা নিরাপত্তা নিয়ন্ত্রণের নির্দিষ্ট উদ্দেশ্যে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Record Type', bn: 'রেকর্ড টাইপ' },
        { en: 'Data Payload Format', bn: 'ডাটা পেলোড ফরম্যাট' },
        { en: 'Primary Architectural Function', bn: 'মূল ব্যবহারিক কাজ' },
        { en: 'Real-World Production Example', bn: 'বাস্তব প্রোডাকশন উদাহরণ' }
      ],
      rows: [
        [
          { en: 'A Record', bn: 'A রেকর্ড' },
          { en: '32-bit IPv4 address string', bn: '৩২-বিট IPv4 অ্যাড্রেস স্ট্রিং' },
          { en: 'Maps a hostname directly to a target IPv4 address', bn: 'ডোমেন নামকে সরাসরি একটি IPv4 ঠিকানায় রূপান্তর করে' },
          { en: 'example.com -> 93.184.216.34', bn: 'example.com -> 93.184.216.34' }
        ],
        [
          { en: 'AAAA Record', bn: 'AAAA রেকর্ড' },
          { en: '128-bit IPv6 address string', bn: '১২৮-বিট IPv6 অ্যাড্রেস স্ট্রিং' },
          { en: 'Maps a hostname directly to a modern IPv6 address', bn: 'ডোমেন নামকে আধুনিক IPv6 ঠিকানায় রূপান্তর করে' },
          { en: 'example.com -> 2606:2800:220:1::248', bn: 'example.com -> 2606:2800:220:1::248' }
        ],
        [
          { en: 'CNAME Record', bn: 'CNAME রেকর্ড' },
          { en: 'Canonical target domain name (FQDN)', bn: 'লক্ষ্য ডোমেন নাম (FQDN)' },
          { en: 'Creates an alias pointing to another domain; cannot coexist at apex', bn: 'অন্য ডোমেনের ছদ্মনাম তৈরি করে; জোন এ্যাপেক্সে বসানো নিষিদ্ধ' },
          { en: 'www.example.com -> cdn.cloudflare.net', bn: 'www.example.com -> cdn.cloudflare.net' }
        ],
        [
          { en: 'MX Record', bn: 'MX রেকর্ড' },
          { en: 'Priority integer + mail server FQDN', bn: 'অগ্রাধিকার সংখ্যা + মেইল সার্ভার FQDN' },
          { en: 'Directs incoming email traffic to designated mail exchange servers', bn: 'আগত ইমেইল ট্রাফিককে নির্ধারিত মেইল এক্সচেঞ্জ সার্ভারে পাঠায়' },
          { en: '10 aspmx.l.google.com', bn: '10 aspmx.l.google.com' }
        ],
        [
          { en: 'TXT Record', bn: 'TXT রেকর্ড' },
          { en: 'Arbitrary UTF-8 text string', bn: 'যেকোনো UTF-8 টেক্সট স্ট্রিং' },
          { en: 'Domain ownership verification, SPF anti-spoofing, DKIM signatures', bn: 'ডোমেন মালিকানা যাচাই, SPF স্পুফিং রোধ ও DKIM স্বাক্ষর' },
          { en: 'v=spf1 include:_spf.google.com ~all', bn: 'v=spf1 include:_spf.google.com ~all' }
        ],
        [
          { en: 'CAA Record', bn: 'CAA রেকর্ড' },
          { en: 'Flag, tag, authorized CA domain name', bn: 'ফ্ল্যাগ, ট্যাগ, অনুমোদিত CA ডোমেন' },
          { en: 'Restricts which Certificate Authorities can issue SSL certificates', bn: 'কোন সার্টিফিকেট অথরিটি এসএসএল দিতে পারবে তা সীমাবদ্ধ করে' },
          { en: '0 issue "letsencrypt.org"', bn: '0 issue "letsencrypt.org"' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-dns-cache-code',
      text: {
        en: 'Executable DNS Resolution and TTL Caching Simulation',
        bn: 'ডিএনএস সমাধান এবং টিটিএল ক্যাশিং মেকানিজমের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates an in-memory DNS cache with Time-To-Live expiration semantics, verifying that cached answers eliminate repeated network queries until the TTL countdown elapses.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি টাইম-টু-লাইভ মেয়াদ সহ একটি ইন-মেমরি ডিএনএস ক্যাশ সিমুলেট করে, যা প্রমাণ করে যে টিটিএল শেষ না হওয়া পর্যন্ত ক্যাশ করা ডাটা পুনরায় নেটওয়ার্ক কুয়েরি এড়িয়ে দ্রুত রেসপন্স দেয়।'
      }
    },
    {
      type: 'code',
      code: `// Simulating in-memory DNS caching with TTL countdowns
interface DnsCacheEntry {
  records: string[];
  expiresAt: number;
  ttlSeconds: number;
}

const dnsCache = new Map<string, DnsCacheEntry>();
const ttl = 300; // 300 seconds TTL lease

dnsCache.set('example.com', {
  records: ['93.184.216.34'],
  expiresAt: Date.now() + ttl * 1000,
  ttlSeconds: ttl
});

const entry = dnsCache.get('example.com')!;
const isExpired = Date.now() > entry.expiresAt;

console.log('Resolved IPv4 address:', entry.records[0]);
console.log('Cached TTL seconds =', entry.ttlSeconds);
console.log('Cache entry is expired:', isExpired);

// prints: Resolved IPv4 address: 93.184.216.34
// prints: Cached TTL seconds = 300
// prints: Cache entry is expired: false`
    },
    {
      type: 'heading',
      id: 'anycast-and-encryption',
      text: {
        en: 'Anycast Resilience and Encrypted Transports: DoH and DoT',
        bn: 'অ্যানিকাস্ট রেজিলিয়েন্স এবং এনক্রিপ্টেড প্রোটোকল: DoH ও DoT'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Root nameservers and global CDNs do not run on single physical machines. Using BGP Anycast routing, 13 logical root server identities (A through M) are broadcast from over 1700 physical data center nodes across six continents. Border Gateway Protocol routes each query to the nearest geographical node. Historically, DNS operated over unencrypted UDP port 53, enabling ISP surveillance and spoofing. Modern architectures enforce DNS-over-HTTPS (DoH, port 443) and DNS-over-TLS (DoT, port 853) to encrypt all name queries inside TLS envelopes.',
        bn: 'রুট নেমসার্ভার এবং বৈশ্বিক সিডিএনগুলো কোনো একক কম্পিউটারে চলে না। BGP Anycast রাউটিং ব্যবহার করে ১৩টি লজিক্যাল রুট সার্ভার পরিচয় ৬টি মহাদেশের ১৭০০টিরও বেশি ফিজিক্যাল ডাটা সেন্টার থেকে প্রচারিত হয়। রাউটারগুলো স্বয়ংক্রিয়ভাবে সবচেয়ে কাছের নোডে ট্রাফিক পাঠায়। ঐতিহাসিকভাবে ডিএনএস পোর্ট ৫৩ তে প্লেইনটেক্সট ইউডিপিতে চলায় আইএসপি নজরদারি ও সাইবার স্পুফিংয়ের শিকার হতো। আধুনিক সিস্টেমে DNS-over-HTTPS (DoH, পোর্ট ৪৪৩) এবং DNS-over-TLS (DoT, পোর্ট ৮৫৩) দিয়ে সমস্ত কুয়েরি এনক্রিপ্ট করে সম্পূর্ণ গোপনীয়তা রক্ষা করা হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Hierarchical delegation: Root servers delegate to TLD servers, which delegate to Authoritative zone servers.',
          bn: 'ক্রমানুসারিক ডেলিগেশন: রুট সার্ভার টিএলডি সার্ভারকে এবং টিএলডি সার্ভার অথরিটেটিভ জোন সার্ভারকে দায়িত্ব অর্পণ করে।'
        },
        {
          en: 'TTL caching tradeoff: Low TTLs permit rapid IP migrations; high TTLs minimize recursive lookups and latency.',
          bn: 'টিটিএল ক্যাশের ভারসাম্য: কম টিটিএল দ্রুত আইপি পরিবর্তনের সুযোগ দেয়; বেশি টিটিএল লেটেন্সি ও নেটওয়ার্ক খরচ কমায়।'
        },
        {
          en: 'Glue records prevent deadlocks: Parent zones host A/AAAA records for child nameservers to break circular dependencies.',
          bn: 'গ্লু রেকর্ডের সমাধান: প্যারেন্ট জোন নেমসার্ভারের নিজস্ব আইপি প্রদান করে চক্রাকার খোঁজের ডেডলক দূর করে।'
        },
        {
          en: 'Encrypted DNS adoption: DoH (port 443) and DoT (port 853) protect user privacy against plaintext DNS interception.',
          bn: 'এনক্রিপ্টেড ডিএনএস: DoH (পোর্ট ৪৪৩) এবং DoT (পোর্ট ৮৫৩) সাধারণ প্লেইনটেক্সট ডিএনএস স্নুপিং ও স্পুফিং থেকে সুরক্ষা দেয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dns-census-ex1',
      kind: 'mcq',
      topic: 'dns-glue-records',
      question: {
        en: 'Why are DNS Glue Records required when a domain’s authoritative nameserver is hosted on a subdomain of itself (e.g. ns1.example.com for example.com)?',
        bn: 'যখন কোনো ডোমেনের অথরিটেটিভ নেমসার্ভার নিজেরই সাবডোমেনে হোস্ট করা থাকে (যেমন example.com এর জন্য ns1.example.com), তখন কেন গ্লু রেকর্ড (Glue Record) প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'To prevent a circular resolution deadlock by providing the nameserver’s IP address directly in the parent TLD referral',
          bn: 'প্যারেন্ট টিএলডি রেফারেলের ভেতর নেমসার্ভারের আইপি সরাসরি সরবরাহ করে চক্রাকার অনুসন্ধান ডেডলক প্রতিরোধ করতে'
        },
        {
          en: 'To automatically encrypt all incoming emails with a password',
          bn: 'স্বয়ংক্রিয়ভাবে পাসওয়ার্ড দিয়ে আগত সব ইমেইল এনক্রিপ্ট করার জন্য'
        },
        {
          en: 'To increase the speed of the physical hard drive by 50 percent',
          bn: 'ফিজিক্যাল হার্ডডিস্কের গতি ৫০ শতাংশ বৃদ্ধি করার জন্য'
        },
        {
          en: 'Because domains without glue records are deleted by ICANN after 24 hours',
          bn: 'কারণ গ্লু রেকর্ড না থাকলে ২৪ ঘণ্টা পর ডোমেন মুছে ফেলে আইসিএএনএন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without the IP of ns1.example.com inside .com, how could the resolver ever look up example.com?',
        bn: '.com জোনে ns1.example.com এর নিজস্ব আইপি না থাকলে রিজলভার কীভাবে example.com খুঁজবে?'
      },
      explanation: {
        en: 'Glue records supply the bootstrap IP of the nameserver in the parent zone, preventing an infinite recursive dependency loop.',
        bn: 'গ্লু রেকর্ড প্যারেন্ট জোনে নেমসার্ভারের আইপি যুক্ত করে চক্রাকার নির্ভরতার অসীম লুপ ভেঙে দেয়।'
      }
    },
    {
      id: 'dns-census-ex2',
      kind: 'mcq',
      topic: 'dns-anycast-routing',
      question: {
        en: 'How does BGP Anycast routing benefit the 13 logical root server identities of the Domain Name System?',
        bn: 'BGP Anycast রাউটিং কীভাবে ডোমেন নেম সিস্টেমের ১৩টি লজিক্যাল রুট সার্ভার পরিচয়কে সুরক্ষিত ও দ্রুত করে?'
      },
      options: [
        {
          en: 'It announces the same IP from over 1700 physical nodes worldwide, directing users to the closest node and absorbing DDoS attacks',
          bn: 'এটি বিশ্বজুড়ে ১৭০০টির বেশি ফিজিক্যাল নোড থেকে একই আইপি প্রচার করে, ব্যবহারকারীকে নিকটতম নোডে পাঠায় এবং ডিডস আক্রমণ প্রতিহত করে'
        },
        {
          en: 'It converts all DNS responses into MP3 audio files',
          bn: 'এটি সমস্ত ডিএনএস রেসপন্সকে এমপিথ্রি অডিও ফাইলে রূপান্তর করে'
        },
        {
          en: 'It deletes all IPv4 addresses from the Internet',
          bn: 'এটি ইন্টারনেট থেকে সমস্ত আইপিভি৪ ঠিকানা মুছে ফেলে'
        },
        {
          en: 'It allows root servers to run without electricity',
          bn: 'এটি বিদ্যুৎ ছাড়াই রুট সার্ভার চালানোর সুযোগ দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiple physical servers announce the identical IP address via BGP routing.',
        bn: 'একাধিক ফিজিক্যাল সার্ভার BGP রাউটিংয়ের মাধ্যমে একটি অভিন্ন আইপি ঠিকানা ঘোষণা করে।'
      },
      explanation: {
        en: 'Anycast distributes traffic to the topologically nearest node, reducing latency and diluting localized volumetric cyber attacks.',
        bn: 'অ্যানিকাস্ট ট্রাফিককে নিকটতম নোডে পাঠিয়ে লেটেন্সি হ্রাস করে এবং আক্রমণকে বিশ্বজুড়ে ছড়িয়ে দিয়ে প্রতিরোধ করে।'
      }
    },
    {
      id: 'dns-census-ex3',
      kind: 'mcq',
      topic: 'cname-apex-restriction',
      question: {
        en: 'Why does RFC 1034 prohibit placing a CNAME record at the zone apex (the root domain level, like example.com)?',
        bn: 'RFC 1034 কেন জোন এ্যাপেক্সে (মূল ডোমেন লেভেলে, যেমন example.com) কোনো CNAME রেকর্ড বসানো নিষিদ্ধ করেছে?'
      },
      options: [
        {
          en: 'A CNAME record cannot coexist with any other record types for the same name, which would eliminate mandatory SOA and NS apex records',
          bn: 'একই নামে CNAME রেকর্ডের সাথে অন্য কোনো রেকর্ড থাকতে পারে না, ফলে জোন এ্যাপেক্সে বাধ্যতামূলক SOA ও NS রেকর্ড বাতিল হয়ে যেত'
        },
        {
          en: 'Because CNAME records only work on subdomains with more than 50 letters',
          bn: 'কারণ CNAME কেবল ৫০টির বেশি অক্ষর থাকা সাবডোমেনে কাজ করে'
        },
        {
          en: 'Because web browsers do not understand CNAME records',
          bn: 'কারণ কোনো ওয়েব ব্রাউজার CNAME রেকর্ড পড়তে পারে না'
        },
        {
          en: 'Because CNAME records require a physical telephone line',
          bn: 'কারণ CNAME রেকর্ডের জন্য ফিজিক্যাল টেলিফোন সংযোগ প্রয়োজন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Every domain root MUST have SOA and NS records. A CNAME replaces all records for that exact name.',
        bn: 'প্রতিটি মূল ডোমেনে অবশ্যই SOA এবং NS রেকর্ড থাকতে হয়। CNAME বসালে অন্য সব রেকর্ড মুছে যায়।'
      },
      explanation: {
        en: 'By DNS RFC standards, a CNAME cannot share a label with other records. At zone apex, SOA and NS are mandatory, forbidding CNAME.',
        bn: 'ডিএনএস স্ট্যান্ডার্ড অনুযায়ী CNAME অন্য রেকর্ডের সাথে থাকতে পারে না। জোন এ্যাপেক্সে SOA ও NS থাকা বাধ্যতামূলক হওয়ায় CNAME নিষিদ্ধ।'
      }
    },
    {
      id: 'dns-census-ex4',
      kind: 'mcq',
      topic: 'doh-vs-dot-ports',
      question: {
        en: 'What transport protocol and port does DNS-over-HTTPS (DoH) use to prevent ISP surveillance and censorship?',
        bn: 'আইএসপি নজরদারি এবং সেন্সরশিপ ঠেকাতে DNS-over-HTTPS (DoH) কোন ট্রান্সপোর্ট প্রোটোকল ও পোর্ট ব্যবহার করে?'
      },
      options: [
        {
          en: 'Standard HTTPS over TCP port 443, blending DNS queries indistinguishably into regular web traffic',
          bn: 'টিসিপি পোর্ট ৪৪৩ এ সাধারণ HTTPS ব্যবহার করে, যার ফলে ডিএনএস ট্রাফিক সাধারণ ওয়েব ট্রাফিকের সাথে মিশে গিয়ে আলাদা করা অসম্ভব হয়'
        },
        {
          en: 'Unencrypted UDP on port 53',
          bn: 'পোর্ট ৫৩ তে প্লেইনটেক্সট ইউডিপি'
        },
        {
          en: 'FTP over port 21',
          bn: 'পোর্ট ২১ এ এফটিপি'
        },
        {
          en: 'Telnet over port 23',
          bn: 'পোর্ট ২৩ এ টেলনেট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Because it runs over standard HTTPS (port 443), firewalls cannot block DoH without blocking all secure web browsing.',
        bn: 'পোর্ট ৪৪৩ এ চলায় সমস্ত নিরাপদ ব্রাউজিং বন্ধ না করে ফায়ারওয়াল কেবল DoH ব্লক করতে পারে না।'
      },
      explanation: {
        en: 'DoH packages DNS inside standard HTTPS requests on port 443, making traffic inspection and selective blocking difficult.',
        bn: 'DoH সাধারণ পোর্ট ৪৪৩ দিয়ে এনক্রিপ্ট হয়ে যায়, ফলে মধ্যবর্তী ফায়ারওয়াল বা আইএসপির পক্ষে এটি ব্লক করা অত্যন্ত কঠিন হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-dns-census-quiz',
    title: {
      en: 'DNS Architecture and Resolution Quiz',
      bn: 'ডিএনএস আর্কিটেকচার ও সমাধান কুইজ'
    },
    questions: [
      {
        id: 'dns-q1',
        kind: 'mcq',
        topic: 'dns-negative-caching-soa',
        question: {
          en: 'Where does a recursive DNS resolver obtain the Time-To-Live for caching negative responses (NXDOMAIN: non-existent domain)?',
          bn: 'অস্তিত্বহীন ডোমেনের ক্ষেত্রে (NXDOMAIN) নেগেটিভ রেসপন্স ক্যাশে রাখার টিটিএল সময়সীমা রিকার্সিভ রিজলভার কোথা থেকে পায়?'
        },
        options: [
          {
            en: 'From the Minimum TTL field of the authoritative zone’s Start of Authority (SOA) record',
            bn: 'অথরিটেটিভ জোনের স্টার্ট অব অথরিটি (SOA) রেকর্ডের Minimum TTL ফিল্ড থেকে'
          },
          {
            en: 'From the user’s operating system clock',
            bn: 'ব্যবহারকারীর অপারেটিং সিস্টেমের ঘড়ি থেকে'
          },
          {
            en: 'Negative responses cannot be cached under any circumstances',
            bn: 'কোনো অবস্থাতেই নেগেটিভ রেসপন্স ক্যাশে রাখা সম্ভব নয়'
          },
          {
            en: 'From the physical power supply unit of the router',
            bn: 'রাউটারের ফিজিক্যাল পাওয়ার সাপ্লাই ইউনিট থেকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'RFC 2308 defines negative caching using the SOA record’s minimum field to protect nameservers from typo storms.',
          bn: 'RFC 2308 অনুযায়ী ভুলের বন্যায় সার্ভার যাতে ক্র্যাশ না করে সেজন্য SOA রেকর্ডের মান দিয়ে নেগেটিভ ক্যাশিং করা হয়।'
        },
        explanation: {
          en: 'The SOA record contains the negative caching TTL, shielding authoritative servers from being hammered by non-existent domain queries.',
          bn: 'SOA রেকর্ডের নেগেটিভ টিটিএল অস্তিত্বহীন ডোমেনের কুয়েরির বারবার আঘাত থেকে অথরিটেটিভ সার্ভারকে সুরক্ষা দেয়।'
        }
      },
      {
        id: 'dns-q2',
        kind: 'mcq',
        topic: 'caa-record-security-benefit',
        question: {
          en: 'What security vulnerability is mitigated by configuring a DNS Certification Authority Authorization (CAA) record?',
          bn: 'ডিএনএস সার্টিফিকেশন অথরিটি অথরাইজেশন (CAA) রেকর্ড কনফিগার করার মাধ্যমে কোন নিরাপত্তা হুমকি প্রতিহত করা হয়?'
        },
        options: [
          {
            en: 'Unauthorized Certificate Authorities issuing fraudulent TLS certificates for your domain during compromise or misissuance',
            bn: 'কোনো অননুমোদিত সার্টিফিকেট অথরিটি যাতে আপনার ডোমেনের জন্য প্রতারণামূলক বা ভুলবশত নকল টিএলএস সার্টিফিকেট ইস্যু করতে না পারে'
          },
          {
            en: 'Physical theft of the computer monitor',
            bn: 'কম্পিউটার মনিটর চুরি হওয়া'
          },
          {
            en: 'Database SQL injection attacks on web forms',
            bn: 'ওয়েব ফর্মের ডেটাবেস এসকিউএল ইনজেকশন আক্রমণ'
          },
          {
            en: 'Slow Wi-Fi internet speeds',
            bn: 'ধীরগতির ওয়াইফাই ইন্টারনেটের সমস্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'CAA tells browsers and CAs: "Only let Let’s Encrypt issue certs for this domain; reject requests from all other CAs".',
          bn: 'CAA স্পষ্ট জানিয়ে দেয়: "কেবলমাত্র নির্দিষ্ট সিএ আমার ডোমেনে সার্টিফিকেট দিতে পারবে, অন্য কেউ চাইলে বাতিল হবে"।'
        },
        explanation: {
          en: 'CAA records enforce domain policy on certificate issuance, preventing rogue or compromised CAs from minting valid certificates.',
          bn: 'CAA রেকর্ড ডোমেন নীতি প্রয়োগ করে কোনো হ্যাকড বা ভুয়া সিএ দ্বারা বৈধ সার্টিফিকেট তৈরি হওয়া আটকে দেয়।'
        }
      },
      {
        id: 'dns-q3',
        kind: 'mcq',
        topic: 'dnssec-chain-of-trust',
        question: {
          en: 'How does DNSSEC (Domain Name System Security Extensions) protect users against DNS cache poisoning attacks?',
          bn: 'DNSSEC (Domain Name System Security Extensions) কীভাবে ব্যবহারকারীদের ডিএনএস ক্যাশ পয়জনিং সাইবার আক্রমণ থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'By providing cryptographic digital signatures (RRSIG) validated through a hierarchical chain of trust up to the root zone',
            bn: 'রুট জোন পর্যন্ত বিশ্বস্ত চেইন অব ট্রাস্টের মাধ্যমে যাচাইযোগ্য ক্রিপ্টোগ্রাফিক ডিজিটাল স্বাক্ষর (RRSIG) সরবরাহ করে'
          },
          {
            en: 'By turning off DNS resolution completely and requiring manual IP typing',
            bn: 'ডিএনএস পুরোপুরি বন্ধ করে দিয়ে ম্যানুয়ালি আইপি টাইপ করতে বাধ্য করার মাধ্যমে'
          },
          {
            en: 'By deleting all DNS records every 5 minutes',
            bn: 'প্রতি ৫ মিনিট পর পর সব ডিএনএস রেকর্ড মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'By converting all domain names into Chinese characters',
            bn: 'সমস্ত ডোমেন নামকে চীনা অক্ষরে রূপান্তর করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'DNSSEC signs DNS records with public key cryptography so tampering is mathematically detected.',
          bn: 'DNSSEC পাবলিক-কি ক্রিপ্টোগ্রাফি দিয়ে রেকর্ডগুলোতে ডিজিটাল সিলমোহর দেয় যাতে জালিয়াতি ধরা পড়ে।'
        },
        explanation: {
          en: 'DNSSEC validates record authenticity via cryptographic signatures, ensuring answers cannot be forged or altered in transit.',
          bn: 'DNSSEC ডিজিটাল স্বাক্ষরের সাহায্যে রেকর্ডের সত্যতা নিশ্চিত করে, ফলে পথের মাঝে কেউ ভুয়া উত্তর ঢোকাতে পারে না।'
        }
      },
      {
        id: 'dns-q4',
        kind: 'mcq',
        topic: 'authoritative-vs-recursive-server',
        question: {
          en: 'What is the fundamental difference between a Recursive DNS Resolver and an Authoritative Nameserver?',
          bn: 'একটি রিকার্সিভ ডিএনএস রিজলভার এবং একটি অথরিটেটিভ নেমসার্ভারের মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'An Authoritative server holds the master records for a specific domain, while a Recursive resolver traverses the Internet hierarchy to find answers on behalf of clients',
            bn: 'অথরিটেটিভ সার্ভার নির্দিষ্ট ডোমেনের আসল রেকর্ড সংরক্ষণ করে, আর রিকার্সিভ রিজলভার ক্লায়েন্টের জন্য পুরো ইন্টারনেটে ঘুরে উত্তর খুঁজে আনে'
          },
          {
            en: 'Authoritative servers only work with email, while Recursive servers only work with games',
            bn: 'অথরিটেটিভ কেবল ইমেইলে কাজ করে আর রিকার্সিভ কেবল ভিডিও গেমে চলে'
          },
          {
            en: 'There is no difference; they are two identical names for the same program',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা একই প্রোগ্রামের দুটি নাম'
          },
          {
            en: 'Recursive resolvers run on client graphics cards (GPUs)',
            bn: 'রিকার্সিভ রিজলভার ক্লায়েন্টের গ্রাফিক্স কার্ডে (GPU) চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of the Recursive Resolver as a detective looking for information, and the Authoritative Server as the library holding the book.',
          bn: 'রিকার্সিভ রিজলভার হলো তথ্য খোঁজার গোয়েন্দা, আর অথরিটেটিভ সার্ভার হলো বই ধারণকারী মূল লাইব্রেরি।'
        },
        explanation: {
          en: 'Recursive resolvers hunt for records by querying other servers; authoritative nameservers hold the definitive source of truth for a zone.',
          bn: 'রিকার্সিভ রিজলভার বিভিন্ন সার্ভার ঘুরে রেকর্ড সংগ্রহ করে; আর অথরিটেটিভ সার্ভার নিজস্ব জোনের চূড়ান্ত সত্য রেকর্ড ধারণ করে।'
        }
      }
    ]
  }
};
