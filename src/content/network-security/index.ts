import type { Hub } from '../../lib/types';
import { MeetNetsecLesson } from './lessons/meet-netsec';
import { FirewallsBasicsLesson } from './lessons/firewalls-basics';
import { VpnsTunnelsLesson } from './lessons/vpns-tunnels';
import { IdsIpsLesson } from './lessons/ids-ips';
import { NetworkSegmentationLesson } from './lessons/network-segmentation';
import { PortScanningLesson } from './lessons/port-scanning';
import { DdosDefenseLesson } from './lessons/ddos-defense';
import { NetsecCapstoneLesson } from './lessons/netsec-capstone';

export const networkSecurityHub: Hub = {
  slug: 'network-security',
  name: 'Network Security',
  icon: '🛡️',
  tagline: {
    en: 'Architect resilient enterprise networks: packet filtering, stateful firewalls, encrypted tunnels, intrusion prevention, network zoning, and DDoS mitigation.',
    bn: 'সহনশীল এন্টারপ্রাইজ নেটওয়ার্ক আর্কিটেকচার তৈরি করুন: প্যাকেট ফিল্টারিং, স্টেটফুল ফায়ারওয়াল, এনক্রিপ্ট করা টানেল, অনুপ্রবেশ প্রতিরোধ, নেটওয়ার্ক জোনিং এবং ডিডস প্রশমন।',
  },
  intro: {
    en: 'Master the defense-in-depth principles that secure physical, cloud, and hybrid enterprise networks. Learn how network firewalls inspect IP packet headers and TCP/UDP ports using default-deny rule chains. Explore IPsec and WireGuard VPN tunnels, signature-based and anomaly-based IDS/IPS engines (Snort and Suricata), VLAN and subnet segmentation, Nmap port reconnaissance, and multi-tier DDoS mitigation across OSI layers 3, 4, and 7.',
    bn: 'ফিজিক্যাল, ক্লাউড এবং হাইব্রিড এন্টারপ্রাইজ নেটওয়ার্ক সুরক্ষিত রাখার বহুস্তরীয় প্রতিরক্ষা নীতিগুলো আয়ত্ত করুন। নেটওয়ার্ক ফায়ারওয়াল কীভাবে ডিফল্ট-ডিনাই চেইন ব্যবহার করে আইপি প্যাকেট হেডার এবং টিসিপি/ইউডিপি পোর্ট নিরীক্ষণ করে তা শিখুন। আইপিসেক ও ওয়্যারগার্ড ভিপিএন টানেল, সিগনেচার ও অ্যানোমালিভিত্তিক আইডিএস/আইপিএস ইঞ্জিন (Snort ও Suricata), ভিএলএএন ও সাবনেট সেগমেন্টেশন, Nmap পোর্ট স্ক্যানিং এবং ওএসআই লেয়ার ৩, ৪ ও ৭ জুড়ে বহুস্তরীয় ডিডস প্রশমন জানুন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Perimeter Defense & Packet Filtering (L1–L2)',
        bn: 'ধাপ ১ — পেরিমিটার ডিফেন্স এবং প্যাকেট ফিল্টারিং (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Overview of Network Security: Ingress/Egress Boundaries & Traffic Inspection',
          bn: 'নেটওয়ার্ক সিকিউরিটির পরিচিতি: ইনগ্রেস/এগ্রেস সীমানা এবং ট্রাফিক নিরীক্ষণ'
        },
        {
          en: 'Stateful vs Stateless Firewalls: Connection Tracking (conntrack) & Rule Chains',
          bn: 'স্টেটফুল বনাম স্টেটলেস ফায়ারওয়াল: কানেকশন ট্র্যাকিং (conntrack) এবং রুল চেইন'
        },
        {
          en: 'Core competency: Build deterministic default-deny iptables/nftables filter policies',
          bn: 'মূল দক্ষতা: সুনির্দিষ্ট ডিফল্ট-ডিনাই iptables/nftables ফিল্টার পলিসি তৈরি'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Encrypted Tunnels & Intrusion Prevention (L3–L4)',
        bn: 'ধাপ ২ — এনক্রিপ্ট করা টানেল এবং অনুপ্রবেশ প্রতিরোধ (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'VPN Architectures: IPsec, OpenVPN, and Modern WireGuard Cryptokey Routing',
          bn: 'ভিপিএন আর্কিটেকচার: আইপিসেক, ওপেনভিপিএন এবং আধুনিক ওয়্যারগার্ড ক্রিপ্টোকি রাউটিং'
        },
        {
          en: 'Intrusion Detection (IDS) & Prevention (IPS): Signature vs Heuristic Heuristics',
          bn: 'অনুপ্রবেশ সনাক্তকরণ (IDS) ও প্রতিরোধ (IPS): সিগনেচার বনাম হিউরিস্টিক অ্যানালাইসিস'
        },
        {
          en: 'Core competency: Deploy encrypted site-to-site tunnels and inspect raw PCAP telemetry',
          bn: 'মূল দক্ষতা: এনক্রিপ্ট করা সাইট-টু-সাইট টানেল স্থাপন এবং কাঁচা পিসিএপি নিরীক্ষণ'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Network Segmentation & Port Reconnaissance (L5–L6)',
        bn: 'ধাপ ৩ — নেটওয়ার্ক সেগমেন্টেশন এবং পোর্ট স্ক্যানিং (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Zero Trust Network Architecture: DMZ, VLANs, and Microsegmentation',
          bn: 'জিরো ট্রাস্ট নেটওয়ার্ক আর্কিটেকচার: ডিএমজেড, ভিএলএএন এবং মাইক্রোসেগমেন্টেশন'
        },
        {
          en: 'Port Scanning & Reconnaissance Defense: SYN Stealth, UDP Probes & Knocking',
          bn: 'পোর্ট স্ক্যানিং ও রেকোনাইসেন্স প্রতিরক্ষা: SYN স্টিলথ, UDP অনুসন্ধান ও নকিং'
        },
        {
          en: 'Core competency: Eliminate flat lateral network traversal across database clusters',
          bn: 'মূল দক্ষতা: ডাটাবেজ ক্লাস্টারে সমতল ল্যাটারাল অনুপ্রবেশের পথ পুরোপুরি বন্ধ করা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — DDoS Mitigation & Defensive Capstone Audit (L7–L8)',
        bn: 'ধাপ ৪ — ডিডস প্রশমন এবং সমন্বিত ক্যাপস্টোন অডিট (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Distributed Denial of Service (DDoS): SYN Floods, Amplification & Anycast',
          bn: 'ডিস্ট্রিবিউটেড ডিনায়েল অব সার্ভিস (DDoS): সিন ফ্লাড, অ্যাম্প্লিফিকেশন ও অ্যানিকাস্ট'
        },
        {
          en: 'Enterprise Network Security Capstone: The 6-Tier Perimeter Verification Audit',
          bn: 'এন্টারপ্রাইজ নেটওয়ার্ক সিকিউরিটি ক্যাপস্টোন: ৬-স্তরীয় পেরিমিটার ভেরিফিকেশন অডিট'
        },
        {
          en: 'Core competency: Execute end-to-end multi-tier network compliance audits',
          bn: 'মূল দক্ষতা: সম্পূর্ণ সমন্বিত বহুস্তরীয় নেটওয়ার্ক কমপ্লায়েন্স অডিট সম্পন্ন করা'
        },
      ],
    },
  ],
  lessons: [
    MeetNetsecLesson,
    FirewallsBasicsLesson,
    VpnsTunnelsLesson,
    IdsIpsLesson,
    NetworkSegmentationLesson,
    PortScanningLesson,
    DdosDefenseLesson,
    NetsecCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Three-Tier DMZ Network Topology Simulator',
        bn: 'প্রজেক্ট ১ — তিন-স্তরীয় ডিএমজেড নেটওয়ার্ক টপোলজি সিমুলেটর'
      },
      brief: {
        en: 'Build an isolated 3-tier enterprise virtual network topology separating public web reverse proxies, private application microservices, and an isolated database subnet. Implement default-deny security groups and verify that public clients can reach only ports 80 and 443, while direct traffic to port 5432 is dropped at the perimeter.',
        bn: 'একটি বিচ্ছিন্ন ৩-স্তরীয় ভার্চুয়াল নেটওয়ার্ক টপোলজি তৈরি করুন যা পাবলিক ওয়েব রিভার্স প্রক্সি, প্রাইভেট অ্যাপ্লিকেশন সার্ভিস এবং সুরক্ষিত ডাটাবেজ সাবনেটকে পৃথক করে। ডিফল্ট-ডিনাই সিকিউরিটি গ্রুপ প্রয়োগ করে প্রমাণ করুন যে পাবলিক ক্লায়েন্ট কেবল ৮০ ও ৪৪৩ পোর্টে প্রবেশ করতে পারে, এবং ৫৪৩২ পোর্টে সরাসরি ট্রাফিক পেরিমিটারেই বাতিল হয়।',
      },
      difficulty: 'beginner',
    },
    {
      title: {
        en: 'Project 2 — Stateful Firewall & WireGuard VPN Tunnel Gateway',
        bn: 'প্রজেক্ট ২ — স্টেটফুল ফায়ারওয়াল ও ওয়্যারগার্ড ভিপিএন টানেল গেটওয়ে'
      },
      brief: {
        en: 'Construct a stateful network inspection engine in Node.js tracking TCP 3-way handshakes and connection states (NEW, ESTABLISHED, RELATED). Configure a WireGuard VPN tunnel routing table with public/private cryptokey pairs and a persistent kill-switch that immediately halts packet leaks if the encrypted tunnel drops.',
        bn: 'টিসিপি ৩-ওয়ে হ্যান্ডশেক এবং কানেকশন স্টেট (NEW, ESTABLISHED, RELATED) ট্র্যাক করে এমন একটি স্টেটফুল নেটওয়ার্ক ইঞ্জিন Node.js-এ তৈরি করুন। পাবলিক/প্রাইভেট ক্রিপ্টোকি পেয়ারসহ একটি ওয়্যারগার্ড ভিপিএন টানেল কনফিগার করুন এবং এনক্রিপ্ট করা টানেল বিচ্ছিন্ন হলে প্যাকেট লিক রুখতে কিল-সুইচ যুক্ত করুন।',
      },
      difficulty: 'intermediate',
    },
    {
      title: {
        en: 'Project 3 — Enterprise Intrusion Prevention & Anycast DDoS Shield',
        bn: 'প্রজেক্ট ৩ — এন্টারপ্রাইজ অনুপ্রবেশ প্রতিরোধ ও অ্যানিকাস্ট ডিডস শিল্ড'
      },
      brief: {
        en: 'Architect an end-to-end enterprise network defense system combining Snort-style PCAP signature inspection, a token-bucket rate limiter, and an Anycast scrubbing center simulation. Demonstrate live mitigation of a 100,000 packets-per-second SYN flood while permitting legitimate user traffic without connection drops.',
        bn: 'Snort-স্টাইলের পিসিএপি সিগনেচার নিরীক্ষণ, টোকেন-বাকেট রেট লিমিটার এবং অ্যানিকাস্ট স্ক্রাবিং সেন্টার সমন্বয়ে একটি পূর্ণাঙ্গ এন্টারপ্রাইজ নেটওয়ার্ক প্রতিরক্ষা ব্যবস্থা তৈরি করুন। প্রতি সেকেন্ডে ১,০০,০০০ প্যাকেটের সিন ফ্লাড আক্রমণ লাইভ প্রতিহত করার পাশাপাশি সাধারণ ব্যবহারকারীর ট্রাফিক সচল রাখুন।',
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    {
      en: 'Enforce Default-Deny Everywhere: Configure every firewall, security group, and router Access Control List (ACL) to drop all incoming and outgoing traffic by default, whitelisting only strictly audited IP prefixes, protocols, and port numbers.',
      bn: 'সর্বত্র ডিফল্ট-ডিনাই প্রয়োগ করুন: প্রতিটি ফায়ারওয়াল, সিকিউরিটি গ্রুপ এবং রাউটার অ্যাক্সেস কন্ট্রোল লিস্টে (ACL) ডিফল্টভাবে সমস্ত ইনকামিং ও আউটগোয়িং ট্রাফিক ব্লক রাখুন এবং কেবলমাত্র পুঙ্খানুপুঙ্খভাবে পরীক্ষিত আইপি, প্রোটোকল ও পোর্ট নম্বর অনুমোদন করুন।'
    },
    {
      en: 'Eliminate Flat Networks via Microsegmentation: Never place database servers, payment backends, and public web applications in the same broadcast domain. Divide infrastructure into isolated subnets and enforce zero-trust firewalls between tiers.',
      bn: 'মাইক্রোসেগমেন্টেশনের মাধ্যমে ফ্ল্যাট নেটওয়ার্ক বর্জন করুন: ডাটাবেজ সার্ভার, পেমেন্ট গেটওয়ে এবং পাবলিক ওয়েব অ্যাপকে কখনোই একই ব্রডকাস্ট নেটওয়ার্কে রাখবেন না। সাবনেটের মাধ্যমে অবকাঠামো আলাদা করুন এবং প্রতিটি স্তরের মাঝে জিরো-ট্রাস্ট ফায়ারওয়াল বসান।'
    },
    {
      en: 'Deploy Always-On VPN Tunnels with Hardware Kill-Switches: Protect remote engineering traffic with modern ChaCha20-Poly1305 WireGuard tunnels. Ensure client endpoints deploy kernel-level kill-switches to block unencrypted fallback if the tunnel disconnects.',
      bn: 'হার্ডওয়্যার কিল-সুইচসহ সার্বক্ষণিক ভিপিএন টানেল ব্যবহার করুন: রিমোট ইঞ্জিনিয়ারদের ট্রাফিক আধুনিক ChaCha20-Poly1305 ওয়্যারগার্ড টানেল দিয়ে সুরক্ষিত রাখুন। টানেল বিচ্ছিন্ন হলেও যাতে খোলা ইন্টারনেটে ডেটা ফাঁস না হয় সেজন্য ক্লায়েন্টে কার্নেল-স্তরের কিল-সুইচ নিশ্চিত করুন।'
    },
    {
      en: 'Automate Port Surface Auditing & DDoS Scrubbing Upstream: Run continuous automated Nmap scans against public IP address blocks to detect rogue exposed services. Filter volumetric UDP/SYN floods upstream using Anycast edge scrubbing before traffic reaches origin servers.',
      bn: 'পোর্ট স্ক্যানিং এবং আপস্ট্রিম ডিডস স্ক্রাবিং স্বয়ংক্রিয় করুন: পাবলিক আইপি রেঞ্জে সার্বক্ষণিক স্বয়ংক্রিয় Nmap স্ক্যান চালিয়ে অনাকাঙ্ক্ষিত খোলা পোর্ট সনাক্ত করুন। ট্রাফিক মূল সার্ভারে পৌঁছানোর আগেই এজ অ্যানিকাস্ট স্ক্রাবিংয়ের মাধ্যমে ভলিউমেট্রিক সিন ও ইউডিপি ফ্লাড ফিল্টার করে নিন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the operational difference between a Stateless Packet Filter and a Stateful Inspection Firewall, and why does state tracking matter?',
        bn: 'স্টেটলেস প্যাকেট ফিল্টার এবং স্টেটফুল ইন্সপেকশন ফায়ারওয়ালের মধ্যে ব্যবহারিক পার্থক্য কী এবং কানেকশন স্টেট ট্র্যাকিং কেন এত গুরুত্বপূর্ণ?'
      },
      a: {
        en: 'A stateless packet filter evaluates each IP packet in isolation using static rules (matching source/destination IP and port) without remembering prior communication; this requires opening broad ephemeral port ranges (ports 1024 to 65535) for return traffic. In contrast, a stateful firewall maintains a dynamic connection tracking table (conntrack) that monitors the TCP 3-way handshake. Once an outbound connection is initiated, the firewall automatically permits inbound return packets flagged as ESTABLISHED or RELATED, allowing developers to close all unsolicited inbound ports permanently.',
        bn: 'একটি স্টেটলেস প্যাকেট ফিল্টার প্রতিটি আইপি প্যাকেটকে পূর্ববর্তী যোগাযোগের কোনো ইতিহাস ছাড়াই সম্পূর্ণ আলাদাভাবে মূল্যায়ন করে (উৎস/গন্তব্য আইপি ও পোর্ট মিলিয়ে); এর ফলে ফেরত আসা উত্তরের জন্য বিশাল সংখ্যক পোর্ট (১০২৪ থেকে ৬৫৫৩৫) খোলা রাখতে হয়। অন্যদিকে স্টেটফুল ফায়ারওয়াল একটি ডায়নামিক কানেকশন ট্র্যাকিং টেবিল (conntrack) বজায় রাখে যা টিসিপি ৩-ওয়ে হ্যান্ডশেক পর্যবেক্ষণ করে। যখন কোনো অভ্যন্তরীণ ক্লায়েন্ট বাইরে সংযোগ শুরু করে, তখন ফায়ারওয়াল স্বয়ংক্রিয়ভাবে তার ফিরতি প্যাকেটকে ESTABLISHED বা RELATED হিসেবে চিনে প্রবেশ করতে দেয়, যার ফলে বাইরের অনাকাঙ্ক্ষিত সব পোর্ট চিরতরে বন্ধ রাখা সম্ভব হয়।'
      },
    },
    {
      q: {
        en: 'How does the WireGuard VPN protocol achieve superior security and performance over legacy IPsec and OpenVPN implementations?',
        bn: 'ওয়্যারগার্ড ভিপিএন প্রোটোকল কীভাবে পুরানো আইপিসেক এবং ওপেনভিপিএনের তুলনায় উন্নত নিরাপত্তা এবং উচ্চ গতি অর্জন করে?'
      },
      a: {
        en: 'WireGuard drastically reduces the attack surface by containing fewer than 4,000 lines of audited C code compared to OpenVPN and IPsec (which exceed 100,000 to 400,000 lines). It eliminates complex cipher suite negotiations by enforcing modern, state-of-the-art cryptography (Noise protocol framework, Curve25519 for ECDH, ChaCha20 for encryption, and Poly1305 for authentication). Furthermore, its Cryptokey Routing architecture maps public keys directly to permitted peer IP addresses inside the OS kernel, allowing seamless roaming across Wi-Fi and cellular networks with near-zero latency overhead.',
        bn: 'ওয়্যারগার্ডে ওপেনভিপিএন বা আইপিসেকের (১,০০,০০০ থেকে ৪,০০,০০০ লাইনের কোড) বিপরীতে মাত্র ৪,০০০ এরও কম লাইনের সুসংহত কার্নেল কোড থাকে, যা আক্রমণের ঝুঁকি মারাত্মকভাবে কমিয়ে দেয়। এটি জটিল সাইফার স্যুটের পরিবর্তে আধুনিক ও নিরাপদ ক্রিপ্টোগ্রাফি (Noise প্রোটোকল, Curve25519, ChaCha20 এবং Poly1305) বাধ্যতামূলক করে। উপরন্তু, এর ক্রিপ্টোকি রাউটিং আর্কিটেকচার পাবলিক কি-কে সরাসরি অনুমোদিত আইপি ঠিকানার সাথে অপারেটিং সিস্টেম কার্নেলে ম্যাপ করে, যার ফলে ওয়াইফাই ও মোবাইল নেটওয়ার্ক পরিবর্তনের সময়ও প্রায় শূন্য লেটেন্সিতে নিরবচ্ছিন্ন সংযোগ বজায় থাকে।'
      },
    },
    {
      q: {
        en: 'What architectural weaknesses allow an attacker to pivot laterally across a flat corporate network after compromising a single peripheral device?',
        bn: 'একটি সাধারণ পেরিফেরাল ডিভাইস দখল করার পর কোন আর্কিটেকচারাল দুর্বলতার কারণে আক্রমণকারী ফ্ল্যাট কর্পোরেট নেটওয়ার্কে অবাধে ছড়িয়ে পড়তে পারে?'
      },
      a: {
        en: 'In a flat network architecture, all hosts (workstations, printers, IoT smart building devices, web servers, and financial databases) reside within the same broadcast domain or unfirewalled subnet. Once an attacker gains a foothold on a vulnerable endpoint (like an insecure smart thermostat or printer), they exploit the lack of internal boundaries to run ARP poisoning, pass-the-hash attacks, and port scanning to compromise high-value domain controllers and databases. Network segmentation, VLANs, and microsegmentation isolate sensitive tiers behind internal firewalls, containing breaches to the initial infected zone.',
        bn: 'একটি ফ্ল্যাট নেটওয়ার্ক আর্কিটেকচারে সমস্ত ডিভাইস (ওয়ার্কস্টেশন, প্রিন্টার, আইওটি ডিভাইস, ওয়েব সার্ভার এবং আর্থিক ডাটাবেজ) একই ব্রডকাস্ট ডোমেইন বা ফায়ারওয়ালবিহীন সাবনেটে অবস্থান করে। যখন আক্রমণকারী একটি কম গুরুত্বপূর্ণ ডিভাইসে (যেমন অনিরাপদ স্মার্ট থার্মোস্ট্যাট বা প্রিন্টার) প্রবেশ করে, তখন কোনো অভ্যন্তরীণ দেয়াল না থাকায় সে এআরপি পয়জনিং, পাস-দ্য-হ্যাশ এবং পোর্ট স্ক্যানিং চালিয়ে সহজেই মূল ডাটাবেজ ও ডোমেইন কন্ট্রোলারে পৌঁছে যায়। নেটওয়ার্ক সেগমেন্টেশন, ভিএলএএন এবং মাইক্রোসেগমেন্টেশন অভ্যন্তরীণ ফায়ারওয়ালের মাধ্যমে প্রতিটি স্তরকে আলাদা রেখে আক্রমণকে প্রাথমিক সংক্রমিত জোনের ভেতরেই আটকে রাখে।'
      },
    },
    {
      q: {
        en: 'How does BGP Anycast routing defend origin web infrastructure against multi-gigabit volumetric DDoS attacks?',
        bn: 'বিজিপি অ্যানিকাস্ট রাউটিং কীভাবে মাল্টি-গিগাবিট ভলিউমেট্রিক ডিডস আক্রমণের বিরুদ্ধে মূল ওয়েব অবকাঠামো রক্ষা করে?'
      },
      a: {
        en: 'Border Gateway Protocol (BGP) Anycast announces the exact same public IP address block from hundreds of globally distributed edge data centers simultaneously. When a botnet unleashes a massive 500 Gbps volumetric flood (such as a DNS amplification or NTP reflection attack), the global internet routing fabric automatically distributes the hostile traffic geographically to the nearest edge PoP (Point of Presence). Each regional edge scrubber absorbs and filters a small fraction of the attack volume (e.g. 5 to 10 Gbps) using hardware-accelerated eBPF/XDP drop rules, ensuring the origin server only receives clean, filtered HTTP requests.',
        bn: 'বর্ডার গেটওয়ে প্রোটোকল (BGP) অ্যানিকাস্ট একই পাবলিক আইপি ঠিকানাকে বিশ্বজুড়ে ছড়িয়ে থাকা শত শত এজ ডেটা সেন্টার থেকে একই সাথে ঘোষণা করে। যখন কোনো বটনেট ৫০০ Gbps আকারের বিশাল ভলিউমেট্রিক আক্রমণ চালায় (যেমন ডিএনএস বা এনটিপি রিফ্লেকশন ফ্লাড), তখন ইন্টারনেটের রাউটিং মেকানিজম ভৌগোলিক দূরত্ব অনুযায়ী ট্রাফিককে নিকটস্থ এজ সেন্টারে ভাগ করে পাঠিয়ে দেয়। প্রতিটি আঞ্চলিক এজ সেন্টার হার্ডওয়্যার-ত্বরান্বিত eBPF/XDP রুল দিয়ে মাত্র ৫ থেকে ১০ Gbps আক্রমণ ফিল্টার করে ধ্বংস করে ফেলে, যার ফলে মূল সার্ভারটি কোনো লোড ছাড়াই কেবল নিরাপদ ও পরিচ্ছন্ন ট্রাফিক গ্রহণ করে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'Cloudflare Magic Transit & Spectrum Anycast Shield: Protects global enterprises by announcing client IP space across 300+ global cities, absorbing multi-terabit volumetric floods at the internet edge before any hostile packet reaches private data centers.',
      bn: 'ক্লাউডফ্লেয়ার ম্যাজিক ট্রানজিট ও স্পেকট্রাম অ্যানিকাস্ট শিল্ড: ৩০০ টিরও বেশি বৈশ্বিক শহরে আইপি স্পেস ঘোষণা করে মাল্টি-টেরাবিট আক্রমণ ইন্টারনেটের এজেই প্রতিহত করে, যার ফলে কোনো ক্ষতিকর প্যাকেট প্রতিষ্ঠানের নিজস্ব ডেটা সেন্টারে পৌঁছাতে পারে না।'
    },
    {
      en: 'Palo Alto Networks Next-Generation Firewalls (NGFW): Replaces simple port-based filtering with deep packet inspection (App-ID and Content-ID), inspecting application payloads inside encrypted TLS sessions to block advanced malware evasion.',
      bn: 'প্যালো অল্টো নেটওয়ার্কস নেক্সট-জেনারেশন ফায়ারওয়াল (NGFW): সাধারণ পোর্ট ফিল্টারিংয়ের পরিবর্তে ডিপ প্যাকেট ইন্সপেকশন (App-ID এবং Content-ID) ব্যবহার করে এনক্রিপ্ট করা TLS সেশনের ভেতরের পেলোড পরীক্ষা করে ম্যালওয়্যার সংক্রমণ প্রতিহত করে।'
    },
    {
      en: 'The Target Corporation HVAC Vendor Lateral Breach (2013): Adversaries compromised credentials of a third-party air conditioning contractor and pivoted across an unsegmented flat corporate network to install malware on point-of-sale registers, demonstrating why microsegmentation is mandatory.',
      bn: 'টার্গেট কর্পোরেশন এইচভিএসি ভেন্ডর ল্যাটারাল ব্রিচ (২০১৩): হ্যাকাররা বহিরাগত এসি রক্ষণাবেক্ষণকারী ভেন্ডরের তথ্য চুরি করে একটি আনসেগমেন্টেড ফ্ল্যাট নেটওয়ার্কের সুযোগ নিয়ে সরাসরি পেমেন্ট কাউন্টারে প্রবেশ করে তথ্য চুরি করে, যা প্রমাণ করে মাইক্রোসেগমেন্টেশন কতটা জরুরি।'
    },
    {
      en: 'Linux Kernel WireGuard Cryptokey Routing Architecture: Integrates VPN tunneling directly into the Linux network subsystem, binding public cryptographic keys to static tunnel IP endpoints to achieve wire-speed encrypted throughput with zero context-switching.',
      bn: 'লিনাক্স কার্নেল ওয়্যারগার্ড ক্রিপ্টোকি রাউটিং আর্কিটেকচার: সরাসরি লিনাক্স নেটওয়ার্ক সাবসিস্টেমে ভিপিএন টানেলিং যুক্ত করে পাবলিক ক্রিপ্টোগ্রাফিক কি-কে টানেল আইপির সাথে আবদ্ধ করে, যার ফলে কোনো কনটেক্সট-সুইচিং ছাড়াই পূর্ণ তারের গতিতে এনক্রিপ্ট করা ট্রাফিক চলাচল করে।'
    },
  ],
};
