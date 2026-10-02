import type { Hub } from '../../lib/types';
import { MeetDnsLesson } from './lessons/meet-dns';
import { DnsRecordsLesson } from './lessons/dns-records';
import { DnsResolutionLesson } from './lessons/dns-resolution';
import { DnsCachingLesson } from './lessons/dns-caching';
import { DnsServersLesson } from './lessons/dns-servers';
import { DnsSecurityLesson } from './lessons/dns-security';
import { ReverseDnsLesson } from './lessons/reverse-dns';
import { DnsCapstoneLesson } from './lessons/dns-capstone';

export const dnsHub: Hub = {
  slug: 'dns',
  name: 'DNS & Internet Name Resolution',
  icon: '🌐',
  tagline: {
    en: 'Master the Domain Name System: hierarchical name resolution, record types, caching TTLs, recursive resolvers, Anycast routing, and DNSSEC cryptography.',
    bn: 'ডোমেন নেম সিস্টেম গভীরভাবে আয়ত্ত করুন: হায়ারারকিক্যাল নেম রেজোলিউশন, রেকর্ড টাইপ, ক্যাশিং TTL, রিকার্সিভ রিজলভার, এনিকাস্ট রাউটিং এবং DNSSEC ক্রিপ্টোগ্রাফি।',
  },
  intro: {
    en: 'A comprehensive beginner-to-expert guide to the global Domain Name System (DNS). Discover how the decentralized internet phonebook translates human-readable hostnames into machine-routable IPv4 and IPv6 addresses. Master authoritative nameservers, recursive resolver hierarchies, resource records (A, AAAA, CNAME, MX, TXT, NS, SOA, PTR), caching mechanics, Anycast BGP distribution, and cryptographic chain-of-trust authentication using DNSSEC.',
    bn: 'গ্লোবাল ডোমেন নেম সিস্টেমের (DNS) একটি বিশদ প্রাথমিক থেকে বিশেষজ্ঞ স্তরের নির্দেশিকা। ইন্টারনেটের বিকেন্দ্রীভূত ডিরেক্টরি কীভাবে মানুষের পাঠযোগ্য হোস্টনেমকে মেশিনের রাউটেবল IPv4 এবং IPv6 ঠিকানায় রূপান্তর করে তা আবিষ্কার করুন। অথরিটেটিভ নেমসার্ভার, রিকার্সিভ রিজলভার হায়ারার্কি, রিসোর্স রেকর্ড ( A, AAAA, CNAME, MX, TXT, NS, SOA, PTR ), ক্যাশিং মেকানিজম, এনিকাস্ট BGP বণ্টন এবং DNSSEC ক্রিপ্টোগ্রাফিক চেইন-অব-ট্রাস্ট প্রমাণীকরণ নিখুঁতভাবে আয়ত্ত করুন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — DNS Foundations & Resource Records (Lessons 1–2)',
        bn: 'ধাপ ১ — ডিএনএস ভিত্তি এবং রিসোর্স রেকর্ড (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Hierarchical Domain Architecture: Root Zone, TLDs, SLDs, and FQDN Structure',
          bn: 'হায়ারারকিক্যাল ডোমেন আর্কিটেকচার: রুট জোন, TLD, SLD এবং FQDN গঠন'
        },
        {
          en: 'Core Record Types: A, AAAA, CNAME, MX, TXT, NS, SOA, and SRV Definitions',
          bn: 'কোর রেকর্ড টাইপ: A, AAAA, CNAME, MX, TXT, NS, SOA এবং SRV বিশ্লেষণ'
        },
        {
          en: 'Milestone: Inspect and configure production DNS zone files with correct record syntax',
          bn: 'মাইলফলক: সঠিক রেকর্ড সিনট্যাক্স সহ প্রোডাকশন ডিএনএস জোন ফাইল তৈরি ও যাচাইকরণ'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Query Resolution & Caching Mechanics (Lessons 3–4)',
        bn: 'ধাপ ২ — কোয়েরি রেজোলিউশন এবং ক্যাশিং মেকানিজম (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Resolution Paths: Recursive Resolvers versus Iterative Root/TLD Traversal',
          bn: 'রেজোলিউশন পথ: রিকার্সিভ রিজলভার বনাম ইটারেটিভ রুট ও TLD ট্রাভার্সাল'
        },
        {
          en: 'Caching & TTL: Time-To-Live Windows, Negative Caching, and Stale Record Hazards',
          bn: 'ক্যাশিং ও TTL: টাইম-টু-লাইভ উইন্ডো, নেগেটিভ ক্যাশিং এবং বাসি রেকর্ডের ঝুঁকি'
        },
        {
          en: 'Milestone: Trace an 8-step packet resolution path from browser stub to authoritative reply',
          bn: 'মাইলফলক: ব্রাউজার স্টাব থেকে অথরিটেটিভ উত্তর পর্যন্ত ৮-ধাপের প্যাকেট পথ বিশ্লেষণ'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Server Infrastructure & Cryptographic Security (Lessons 5–6)',
        bn: 'ধাপ ৩ — সার্ভার অবকাঠামো এবং ক্রিপ্টোগ্রাফিক নিরাপত্তা (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Server Architectures: Master/Slave Zone Transfers (AXFR/IXFR) and BGP Anycast Routing',
          bn: 'সার্ভার আর্কিটেকচার: মাস্টার ও স্লেভ জোন ট্রান্সফার (AXFR/IXFR) এবং BGP এনিকাস্ট রাউটিং'
        },
        {
          en: 'DNS Security: Cache Poisoning Defense, DNSSEC Keys (RRSIG, DNSKEY, DS), DoH & DoT',
          bn: 'ডিএনএস নিরাপত্তা: ক্যাশ পয়জনিং প্রতিরোধ, DNSSEC কি (RRSIG, DNSKEY, DS), DoH এবং DoT'
        },
        {
          en: 'Milestone: Verify a complete DNSSEC chain-of-trust from root anchor to child domain',
          bn: 'মাইলফলক: রুট অ্যাঙ্কর থেকে চাইল্ড ডোমেন পর্যন্ত সম্পূর্ণ DNSSEC চেইন-অব-ট্রাস্ট যাচাই'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Reverse Lookups & Global Traffic Engineering (Lessons 7–8)',
        bn: 'ধাপ ৪ — রিভার্স লুকআপ এবং গ্লোবাল ট্রাফিক ইঞ্জিনিয়ারিং (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Reverse DNS: In-Addr.Arpa Nibble Formatting and FCrDNS Mail Deliverability',
          bn: 'রিভার্স ডিএনএস: In-Addr.Arpa নিবল ফরম্যাটিং এবং FCrDNS ইমেইল ডেলিভারিবিলিটি'
        },
        {
          en: 'Production Capstone: GeoDNS Latency Routing, Multi-Cloud Failover, and Health Probes',
          bn: 'প্রোডাকশন ক্যাপস্টোন: জিওডিএনএস লেটেন্সি রাউটিং, মাল্টি-ক্লাউড ফেইলওভার এবং হেলথ চেক'
        },
        {
          en: 'Capstone Project: Architect and simulate a zero-downtime globally distributed DNS service',
          bn: 'ক্যাপস্টোন প্রকল্প: জিরো-ডাউনটাইম বিশ্বব্যাপী বিস্তৃত ডিএনএস পরিষেবা ডিজাইন ও সিমুলেশন'
        },
      ],
    },
  ],
  lessons: [
    MeetDnsLesson,
    DnsRecordsLesson,
    DnsResolutionLesson,
    DnsCachingLesson,
    DnsServersLesson,
    DnsSecurityLesson,
    ReverseDnsLesson,
    DnsCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Production DNSSEC & Zone Delegation Testbed',
        bn: 'প্রজেক্ট ১ — প্রোডাকশন DNSSEC এবং জোন ডেলিগেশন টেস্টবেড'
      },
      brief: {
        en: 'Configure an authoritative zone with A, AAAA, MX, and TXT records, establish primary-to-secondary zone replication via AXFR, and cryptographically sign the zone with ZSK and KSK keys. Validate the trust chain using dig +dnssec and verify that tampered responses trigger SERVFAIL.',
        bn: 'A, AAAA, MX এবং TXT রেকর্ড সহ একটি অথরিটেটিভ জোন কনফিগার করুন, AXFR এর মাধ্যমে প্রাইমারি থেকে সেকেন্ডারি জোন রেপ্লিকেশন নিশ্চিত করুন এবং ZSK ও KSK কি দিয়ে জোনে ক্রিপ্টোগ্রাফিক স্বাক্ষর করুন। dig +dnssec দিয়ে ট্রাস্ট চেইন যাচাই করুন এবং প্রমাণ করুন যে পরিবর্তিত উত্তর SERVFAIL তৈরি করে।',
      },
    },
    {
      title: {
        en: 'Project 2 — GeoDNS Global Traffic Router & Failover Monitor',
        bn: 'প্রজেক্ট ২ — জিওডিএনএস গ্লোবাল ট্রাফিক রাউটার এবং ফেইলওভার মনিটর'
      },
      brief: {
        en: 'Build an automated traffic management engine that inspects client subnet geography using EDNS Client Subnet (ECS) to route traffic to the nearest regional data center. Implement automated synthetic HTTP health checks that dynamically remove unhealthy endpoints within 30 seconds.',
        bn: 'EDNS ক্লায়েন্ট সাবনেট (ECS) ব্যবহার করে ব্যবহারকারীর ভৌগোলিক অবস্থান শনাক্তকারী একটি ট্রাফিক ম্যানেজমেন্ট ইঞ্জিন তৈরি করুন যা ব্যবহারকারীকে নিকটতম ডাটা সেন্টারে পাঠায়। স্বয়ংক্রিয় এইচটিটিপি হেলথ চেক যুক্ত করুন যা ৩০ সেকেন্ডের মধ্যে ক্ষতিগ্রস্ত নোডকে রাউটিং তালিকা থেকে সরিয়ে দেয়।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Lower Time-To-Live (TTL) values to 300 seconds at least 48 hours before scheduled server IP migrations to accelerate global record cutover.',
      bn: 'সার্ভার আইপি স্থানান্তরের অন্তত ৪৮ ঘণ্টা আগে রেকর্ডের TTL কমিয়ে ৩০০ সেকেন্ডে আনুন যাতে বিশ্বব্যাপী দ্রুত পরিবর্তন নিশ্চিত হয়।'
    },
    {
      en: 'Always maintain at least 2 geographically distributed, independently routed authoritative nameservers to eliminate single points of failure.',
      bn: 'সিঙ্গেল পয়েন্ট অব ফেইলিউর এড়াতে সর্বদা অন্তত ২ টি ভৌগোলিকভাবে পৃথক এবং স্বাধীন নেটওয়ার্কে থাকা অথরিটেটিভ নেমসার্ভার পরিচালনা করুন।'
    },
    {
      en: 'Deploy DNSSEC cryptographic signing across public zones to protect domain traffic from BGP hijacking and recursive cache poisoning attacks.',
      bn: 'বিজিপি হাইজ্যাকিং এবং রিকার্সিভ ক্যাশ পয়জনিং আক্রমণ রোধ করতে আপনার পাবলিক জোনে DNSSEC ক্রিপ্টোগ্রাফিক স্বাক্ষর চালু করুন।'
    },
    {
      en: 'Configure Forward-Confirmed Reverse DNS (FCrDNS) and SPF/DKIM/DMARC TXT records for mail transfer agents to guarantee inbox delivery.',
      bn: 'মেইল ট্রান্সফার এজেন্টের জন্য ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS) এবং SPF/DKIM/DMARC রেকর্ড কনফিগার করুন যাতে মেইল সরাসরি ইনবক্সে পৌঁছায়।'
    },
    {
      en: 'Enable DNS query logging, rate-limiting (RRL), and access control lists (ACLs) to prevent recursive resolvers from participating in amplified DDoS attacks.',
      bn: 'রিকার্সিভ রিজলভার যেন ডিডস (DDoS) আক্রমণের হাতিয়ার না হয় সেজন্য কুয়েরি লগিং, রেট লিমিটিং (RRL) এবং অ্যাক্সেস কন্ট্রোল লিস্ট (ACL) সক্রিয় করুন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the precise operational difference between an Authoritative Name Server and a Recursive DNS Resolver?',
        bn: 'একটি অথরিটেটিভ নেমসার্ভার এবং একটি রিকার্সিভ ডিএনএস রিজলভারের মধ্যে নির্দিষ্ট কাজের পার্থক্য কী?'
      },
      a: {
        en: 'An Authoritative Name Server holds the definitive master zone records for specific domain names (e.g. example.com) and answers with certainty. A Recursive DNS Resolver is an intermediary service (like 8.8.8.8 or your ISP resolver) that receives queries from end-user client devices, traverses the internet root-to-TLD-to-authoritative hierarchy step-by-step on behalf of the client, and caches the resulting answers.',
        bn: 'একটি অথরিটেটিভ নেমসার্ভার নির্দিষ্ট ডোমেনের ( যেমন example.com ) মূল জোন রেকর্ড ধারণ করে এবং সরাসরি নিশ্চিত উত্তর প্রদান করে। অন্যদিকে একটি রিকার্সিভ ডিএনএস রিজলভার হলো একটি মধ্যবর্তী পরিষেবা ( যেমন 8.8.8.8 বা আইএসপির রিজলভার ) যা সাধারণ ব্যবহারকারীর অনুরোধ গ্রহণ করে ক্লায়েন্টের পক্ষ থেকে ধাপে ধাপে রুট ও TLD সার্ভারে ঘুরে উত্তর সংগ্রহ করে এবং ক্যাশে জমা রাখে।'
      },
    },
    {
      q: {
        en: 'How does the DNS Time-To-Live (TTL) field impact record caching and live production traffic migrations?',
        bn: 'ডিএনএস টাইম-টু-লাইভ (TTL) ফিল্ড কীভাবে রেকর্ড ক্যাশিং এবং সরাসরি প্রোডাকশন ট্রাফিক স্থানান্তরকে প্রভাবিত করে?'
      },
      a: {
        en: 'TTL defines the number of seconds that intermediate resolvers and stub clients may cache a DNS record before re-querying the authoritative nameserver. A long TTL (e.g. 86400 seconds / 24 hours) reduces server load and query latency, but delays record updates during migrations. A short TTL (e.g. 60 to 300 seconds) allows near-instantaneous traffic failover and cutover at the cost of higher query volume.',
        bn: 'টিটিএল (TTL) নির্ধারণ করে মধ্যবর্তী রিজলভার এবং ক্লায়েন্ট ডিভাইস কত সেকেন্ড পর্যন্ত একটি ডিএনএস রেকর্ড ক্যাশে রাখতে পারবে। বড় TTL ( যেমন ৮৬৪০০ সেকেন্ড বা ২৪ ঘণ্টা ) সার্ভার লোড কমায় কিন্তু পরিবর্তনের সময় বিলম্ব ঘটায়। ছোট TTL ( যেমন ৬০ থেকে ৩০০ সেকেন্ড ) দ্রুত ফেইলওভার ও ট্রাফিক স্থানান্তরের সুবিধা দেয় তবে সার্ভারে কোয়েরির চাপ বৃদ্ধি করে।'
      },
    },
    {
      q: {
        en: 'What architectural security flaw enabled the Kaminsky DNS Cache Poisoning attack, and how does DNSSEC resolve it?',
        bn: 'কোন কাঠামোগত নিরাপত্তা দুর্বলতার কারণে কামিনস্কি ডিএনএস ক্যাশ পয়জনিং আক্রমণ সম্ভব হয়েছিল এবং DNSSEC কীভাবে তা সমাধান করে?'
      },
      a: {
        en: 'Traditional DNS queries travel over unauthenticated UDP port 53 using only a 16-bit Transaction ID (65536 possibilities) and random source port. Dan Kaminsky demonstrated that attackers can flood a recursive resolver with forged authoritative replies matching guessed transaction IDs before the real response arrives, permanently poisoning the resolver cache. DNSSEC eliminates this vulnerability by cryptographically signing resource record sets with asymmetric digital signatures (RRSIG) validated through an unbroken chain of trust back to the IANA root key.',
        bn: 'ঐতিহ্যবাহী ডিএনএস কোয়েরি অনিরাপদ UDP পোর্ট ৫৩-তে চলে যাতে কেবল ১৬-বিট ট্রানজ্যাকশন আইডি ( ৬৫৫৩৬ টি সম্ভাবনা ) থাকে। ড্যান কামিনস্কি প্রমাণ করেন যে আসল উত্তর আসার আগেই আক্রমণকারী অনুমিত আইডি দিয়ে ভুয়া উত্তরের বন্যা বইয়ে রিজলভারের ক্যাশ দূষিত করতে পারে। DNSSEC প্রতিটি রেকর্ড সেটে ক্রিপ্টোগ্রাফিক ডিজিটাল স্বাক্ষর (RRSIG) যুক্ত করে এই দুর্বলতা দূর করে, যা রুট কি পর্যন্ত অবিচ্ছিন্ন ট্রাস্ট চেইনের মাধ্যমে যাচাই করা হয়।'
      },
    },
    {
      q: {
        en: 'Why is Forward-Confirmed Reverse DNS (FCrDNS) critical for SMTP email delivery infrastructure?',
        bn: 'SMTP ইমেইল ডেলিভারি অবকাঠামোর জন্য ফরওয়ার্ড-কনফার্মড রিভার্স ডিএনএস (FCrDNS) কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      a: {
        en: 'FCrDNS creates a two-way mathematical handshake between IP addresses and domain names. First, the receiving mail server performs a reverse lookup on the sending IP via the PTR record in in-addr.arpa, obtaining a hostname (e.g. mail.example.com). Second, it performs a forward lookup on that hostname via the A record to confirm that it resolves back to the exact same sending IP address. If the forward and reverse mappings do not match, major mail providers reject the incoming email as suspected spam or compromised botnet traffic.',
        bn: 'FCrDNS আইপি ঠিকানা এবং ডোমেন নামের মাঝে একটি দ্বিমুখী বৈধতা যাচাই তৈরি করে। প্রথমত, রিসিভিং মেইল সার্ভার প্রেরকের আইপির ওপর PTR রেকর্ডের মাধ্যমে রিভার্স লুকআপ চালিয়ে একটি হোস্টনেম পায় ( যেমন mail.example.com )। দ্বিতীয়ত, সার্ভারটি ওই হোস্টনেমের A রেকর্ডে ফরওয়ার্ড লুকআপ চালিয়ে নিশ্চিত করে যে তা প্রেরকের মূল আইপিতেই মিলছে কিনা। ফরওয়ার্ড ও রিভার্স ঠিকানার অমিল থাকলে বড় মেইল সেবাদাতারা বার্তাটিকে স্প্যাম বা বটনেট হিসেবে বাতিল করে দেয়।'
      },
    },
    {
      q: {
        en: 'How does BGP Anycast routing enable the 13 logical DNS root nameserver addresses to handle billions of global requests simultaneously?',
        bn: 'BGP এনিকাস্ট রাউটিং কীভাবে ১৩ টি লজিক্যাল ডিএনএস রুট সার্ভার আইপিকে একসাথে শতকোটি বৈশ্বিক অনুরোধ সামলাতে সক্ষম করে?'
      },
      a: {
        en: 'Although the internet naming architecture defines only 13 logical root server IP addresses (a.root-servers.net through m.root-servers.net) due to legacy 512-byte UDP packet constraints, each logical address is announced simultaneously from hundreds of physical data centers worldwide using Border Gateway Protocol (BGP) Anycast. Internet routing protocols naturally steer each client query to the topologically closest physical server node, providing massive distributed DDoS resilience, low latency, and zero single points of failure.',
        bn: 'ঐতিহাসিক ৫১২ বাইটের UDP প্যাকেটের সীমাবদ্ধতার কারণে ইন্টারনেটে কেবল ১৩ টি লজিক্যাল রুট সার্ভার আইপি ( a.root-servers.net থেকে m.root-servers.net ) থাকলেও BGP এনিকাস্টের মাধ্যমে প্রতিটি আইপি বিশ্বব্যাপী শত শত ডাটা সেন্টারে একসাথে ব্যবহৃত হয়। ইন্টারনেট রাউটিং স্বয়ংক্রিয়ভাবে ব্যবহারকারীর কোয়েরিকে নিকটতম সার্ভারে পৌঁছে দেয়, যা বিপুল ট্রাফিকের চাপ সামলানো এবং ডিডস আক্রমণ প্রতিরোধের ক্ষেত্রে অতুলনীয় নির্ভরযোগ্যতা নিশ্চিত করে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'dig (Domain Information Groper): The premier command-line diagnostic utility for issuing low-level DNS queries, inspecting TTL countdowns, and verifying DNSSEC response flags.',
      bn: 'dig (Domain Information Groper): লো-লেভেল ডিএনএস কোয়েরি প্রেরণ, TTL কাউন্টডাউন পর্যবেক্ষণ এবং DNSSEC রেসপন্স ফ্ল্যাগ পরীক্ষা করার জন্য প্রধান কমান্ড-লাইন ডায়াগনস্টিক টুল।'
    },
    {
      en: 'Cloudflare 1.1.1.1 & Google 8.8.8.8: Massive Anycast public recursive resolvers serving sub-10ms response times globally while supporting encrypted DNS over HTTPS (DoH) and DNS over TLS (DoT).',
      bn: 'ক্লাউডফ্লেয়ার ১.১.১.১ এবং গুগল ৮.৮.৮.৮: বিশ্বজুড়ে ১০ মিলিসেকেন্ডেরও কম সময়ে সেবা প্রদানকারী বিশাল এনিকাস্ট পাবলিক রিকার্সিভ রিজলভার, যা ডুএইচ (DoH) এবং ডিওটি (DoT) সমর্থন করে।'
    },
    {
      en: 'CoreDNS & BIND9: High-performance production nameserver daemons powering Kubernetes service discovery, enterprise zone transfers, and top-level domain infrastructures.',
      bn: 'CoreDNS এবং BIND9: কুবারনেটিস সার্ভিস ডিসকভারি, এন্টারপ্রাইজ জোন ট্রান্সফার এবং টপ-লেভেল ডোমেন অবকাঠামো পরিচালনাকারী উচ্চক্ষমতাসম্পন্ন প্রোডাকশন নেমসার্ভার ডিমন।'
    },
  ],
};
