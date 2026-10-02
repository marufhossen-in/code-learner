import type { Hub } from '../../lib/types';
import { TcpipBasicsLesson } from './lessons/tcpip-basics';
import { TcpAddressingLesson } from './lessons/tcp-addressing';
import { TcpProtocolLesson } from './lessons/tcp-protocol';
import { UdpFundamentalsLesson } from './lessons/udp-fundamentals';
import { TcpHandshakeLesson } from './lessons/tcp-handshake';
import { TcpCongestionLesson } from './lessons/tcp-congestion';
import { NetworkPortsLesson } from './lessons/network-ports';
import { TcpipCapstoneLesson } from './lessons/tcpip-capstone';

export const tcpipHub: Hub = {
  slug: 'tcpip',
  name: 'TCP/IP',
  icon: '🔗',
  tagline: {
    en: 'The foundational architecture of the Internet: 4-layer TCP/IP model, IP addressing & CIDR, reliable TCP streams vs fast UDP datagrams, 3-way handshakes, congestion control, and socket programming.',
    bn: 'ইন্টারনেটের মৌলিক আর্কিটেকচার: ৪-স্তরের TCP/IP মডেল, IP অ্যাড্রেসিং ও CIDR, নির্ভরযোগ্য TCP স্ট্রিম বনাম দ্রুতগতির UDP ডেটাগ্রাম, ৩-মুখী হ্যান্ডশেক, কনজেশন নিয়ন্ত্রণ এবং সকেট প্রোগ্রামিং।'
  },
  intro: {
    en: 'Master computer networking from physical bits to distributed application sockets: the 4-layer model (Link, Internet, Transport, Application), IPv4 and IPv6 subnetting, connection-oriented TCP vs stateless UDP, the 3-way handshake (SYN, SYN-ACK, ACK) and 4-way teardown (FIN), flow and congestion control algorithms (Slow Start, Congestion Avoidance, Fast Retransmit), port multiplexing, and packet analysis with Wireshark and tcpdump.',
    bn: 'কম্পিউটার নেটওয়ার্কিংয়ের গভীর বিশ্লেষণ: ৪-স্তরের মডেল (Link, Internet, Transport, Application), IPv4 ও IPv6 সাবনেটিং, কানেকশন-ভিত্তিক TCP বনাম স্টেটলেস UDP, ৩-মুখী হ্যান্ডশেক (SYN, SYN-ACK, ACK) ও ৪-মুখী সংযোগ সমাপ্তি (FIN), ফ্লো ও কনজেশন কন্ট্রোল অ্যালগরিদম (Slow Start, Congestion Avoidance, Fast Retransmit), পোর্ট মাল্টিপ্লেক্সিং এবং Wireshark ও tcpdump দিয়ে প্যাকেট বিশ্লেষণ।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Layered Architecture & IP Addressing',
        bn: 'ধাপ ১ — স্তরভিত্তিক আর্কিটেকচার ও IP অ্যাড্রেসিং'
      },
      items: [
        {
          en: 'TCP/IP 4-layer model: Link, Internet, Transport, and Application layers compared with OSI 7 layers (lesson 1)',
          bn: 'TCP/IP ৪-স্তরের মডেল: OSI ৭-স্তরের সাথে Link, Internet, Transport এবং Application স্তরের তুলনা (পাঠ ১)'
        },
        {
          en: 'IP addressing & CIDR: IPv4 dotted-decimal math, subnet masks, network vs host IDs, and IPv6 128-bit hex notation (lesson 2)',
          bn: 'IP অ্যাড্রেসিং ও CIDR: IPv4 ডটেড-ডেসিমেল হিসাব, সাবনেট মাস্ক, নেটওয়ার্ক ও হোস্ট আইডি এবং IPv6 ১২৮-বিট হেক্স নোটেশন (পাঠ ২)'
        },
        {
          en: 'Core concept: encapsulation and decapsulation as packet payloads travel down and up the network stack',
          bn: 'মূলনীতি: নেটওয়ার্ক স্ট্যাকের ওপর-নিচ চলাচলের সময় প্যাকেট পেলোডের এনক্যাপসুলেশন ও ডিক্যাপসুলেশন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Transport Layer: TCP Streams, UDP Datagrams & Handshakes',
        bn: 'ধাপ ২ — ট্রান্সপোর্ট লেয়ার: TCP স্ট্রিম, UDP ডেটাগ্রাম ও হ্যান্ডশেক'
      },
      items: [
        {
          en: 'TCP protocol mechanics: reliable byte streams, sequence & acknowledgement numbers, and sliding window flow control (lesson 3)',
          bn: 'TCP প্রোটোকল মেকানিজম: নির্ভরযোগ্য বাইট স্ট্রিম, সিকোয়েন্স ও অ্যাকনলেজমেন্ট নম্বর এবং স্লাইডিং উইন্ডো ফ্লো কন্ট্রোল (পাঠ ৩)'
        },
        {
          en: 'UDP datagram fundamentals: connectionless transport, low-latency broadcast/multicast, and DNS/VoIP/WebRTC protocols (lesson 4)',
          bn: 'UDP ডেটাগ্রামের মূলনীতি: কানেকশনহীন পরিবহন, দ্রুতগতির ব্রডকাস্ট/মাল্টিকাস্ট এবং DNS/VoIP/WebRTC প্রোটোকল (পাঠ ৪)'
        },
        {
          en: 'The TCP connection lifecycle: 3-way handshake (SYN, SYN-ACK, ACK), state machine, 4-way FIN teardown, and TIME_WAIT (lesson 5)',
          bn: 'TCP সংযোগের জীবনচক্র: ৩-মুখী হ্যান্ডশেক (SYN, SYN-ACK, ACK), স্টেট মেশিন, ৪-মুখী FIN সমাপ্তি এবং TIME_WAIT (পাঠ ৫)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Congestion Control, Port Multiplexing & Production Network Capstone',
        bn: 'ধাপ ৩ — কনজেশন নিয়ন্ত্রণ, পোর্ট মাল্টিপ্লেক্সিং ও প্রোডাকশন নেটওয়ার্ক ক্যাপস্টোন'
      },
      items: [
        {
          en: 'TCP congestion control: Slow Start, Congestion Avoidance, AIMD, Fast Retransmit/Recovery, and BBR algorithms (lesson 6)',
          bn: 'TCP কনজেশন নিয়ন্ত্রণ: Slow Start, Congestion Avoidance, AIMD, Fast Retransmit/Recovery এবং BBR অ্যালগরিদম (পাঠ ৬)'
        },
        {
          en: 'Network ports & socket multiplexing: well-known (0-1023), registered, and ephemeral ports, and NAT translation (lesson 7)',
          bn: 'নেটওয়ার্ক পোর্ট ও সকেট মাল্টিপ্লেক্সিং: ওয়েল-নোন (০-১০২৩), নিবন্ধিত এবং ইফিমেরাল পোর্ট ও NAT রূপান্তর (পাঠ ৭)'
        },
        {
          en: 'Production networking capstone: socket programming, packet capturing with tcpdump/Wireshark, and HTTP/3 over QUIC (lesson 8)',
          bn: 'প্রোডাকশন নেটওয়ার্কিং ক্যাপস্টোন: সকেট প্রোগ্রামিং, tcpdump/Wireshark দিয়ে প্যাকেট ক্যাপচার এবং QUIC এর ওপর HTTP/3 (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TcpipBasicsLesson,
    TcpAddressingLesson,
    TcpProtocolLesson,
    UdpFundamentalsLesson,
    TcpHandshakeLesson,
    TcpCongestionLesson,
    NetworkPortsLesson,
    TcpipCapstoneLesson
  ],
  projects: [
    {
      title: {
        en: 'High-Performance Concurrent TCP Socket Server & Client in TypeScript',
        bn: 'TypeScript এ উচ্চগতির কনকারেন্ট TCP সকেট সার্ভার ও ক্লায়েন্ট'
      },
      brief: {
        en: 'Build a production-grade TCP communication service implementing custom framed binary protocols, sequence verification, heartbeat ping/pong keepalives, backpressure handling, and graceful teardown.',
        bn: 'একটি প্রোডাকশন-গ্রেড TCP যোগাযোগ সার্ভিস তৈরি করুন যা ফ্রেমড বাইনারি প্রোটোকল, সিকোয়েন্স যাচাইকরণ, হার্টবিট পিং/পং কিপঅ্যালাইভ, ব্যাকপ্রেশার হ্যান্ডলিং এবং পরিচ্ছন্ন সমাপ্তি পরিচালনা করবে।'
      }
    },
    {
      title: {
        en: 'Network Packet Sniffer & CIDR Subnet Calculator Engine',
        bn: 'নেটওয়ার্ক প্যাকেট স্নিফার ও CIDR সাবনেট ক্যালকুলেটর ইঞ্জিন'
      },
      brief: {
        en: 'Develop an in-memory packet analyzer that decodes raw Ethernet frames, IPv4/IPv6 packet headers, TCP flag bitmaps (SYN/ACK/FIN/RST), and calculates network broadcast boundaries from CIDR prefixes.',
        bn: 'একটি ইন-মেমরি প্যাকেট অ্যানালাইজার তৈরি করুন যা কাঁচা ইথারনেট ফ্রেম, IPv4/IPv6 প্যাকেট হেডার, TCP ফ্ল্যাগ বিটম্যাপ (SYN/ACK/FIN/RST) ডিকোড করবে এবং CIDR প্রিফিক্স থেকে নেটওয়ার্ক ব্রডকাস্ট সীমা হিসাব করবে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Calculate subnets accurately using CIDR prefix notation: avoid IP exhaustion by sizing subnets to realistic host capacities.',
      bn: 'CIDR প্রিফিক্স নোটেশন ব্যবহার করে সঠিকভাবে সাবনেট গণনা করুন: বাস্তব হোস্ট ধারণক্ষমতা অনুযায়ী সাবনেট সাইজ নির্ধারণ করে IP এর অপচয় রোধ করুন।'
    },
    {
      en: 'Choose the right transport protocol: use UDP for real-time loss-tolerant streaming, gaming, and DNS; use TCP for data integrity and state transfer.',
      bn: 'সঠিক ট্রান্সপোর্ট প্রোটোকল বেছে নিন: রিয়েল-টাইম অডিও/ভিডিও স্ট্রিমিং ও গেমিংয়ে UDP ব্যবহার করুন; নির্ভরযোগ্য ডাটা স্থানান্তরের জন্য TCP বেছে নিন।'
    },
    {
      en: 'Protect server sockets against SYN flood DDoS attacks: enable SYN cookies (net.ipv4.tcp_syncookies = 1) in Linux kernel settings.',
      bn: 'সার্ভার সকেটকে SYN ফ্লাড DDoS আক্রমণ থেকে রক্ষা করুন: লিনাক্স কার্নেলে SYN কুকিজ (net.ipv4.tcp_syncookies = 1) সক্রিয় রাখুন।'
    },
    {
      en: 'Tune TCP socket buffers to match the Bandwidth-Delay Product (BDP): prevent throughput bottlenecks on high-latency wide-area networks.',
      bn: 'ব্যান্ডউইথ-ডিলে প্রোডাক্ট (BDP) এর সাথে সামঞ্জস্য রেখে TCP সকেট বাফার টিউন করুন: উচ্চ-বিলম্বের দূরবর্তী নেটওয়ার্কে থ্রুপুট সীমাবদ্ধতা প্রতিরোধ করুন।'
    },
    {
      en: 'Enable SO_REUSEADDR on listening sockets: allow servers to bind immediately during restarts without crashing in TIME_WAIT state.',
      bn: 'লিসেনিং সকেটে SO_REUSEADDR সক্রিয় করুন: সার্ভার রিস্টার্টের সময় TIME_WAIT স্টেটে ক্র্যাশ না করে সাথে সাথে পোর্ট বাইন্ড হতে দিন।'
    },
    {
      en: 'Inspect packet drops and retransmissions with tcpdump and ss -ti: identify MTU blackholes, MSS mismatches, and queue congestion early.',
      bn: 'tcpdump এবং ss -ti দিয়ে প্যাকেট ড্রপ ও পুনর্প্রেরণ পর্যবেক্ষণ করুন: MTU ব্ল্যাকহোল, MSS অমিল এবং কিউ কনজেশন দ্রুত শনাক্ত করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What occurs during the TCP 3-way handshake and why is a 2-way handshake insufficient?',
        bn: 'TCP ৩-মুখী হ্যান্ডশেকে কী ঘটে এবং কেন একটি ২-মুখী হ্যান্ডশেক সংযোগের জন্য যথেষ্ট নয়?'
      },
      a: {
        en: 'The client sends SYN with initial sequence number X; the server replies with SYN-ACK acknowledging X+1 and offering sequence number Y; the client sends ACK acknowledging Y+1. A 2-way handshake is insufficient because delayed or duplicated SYN packets from old dead sessions could cause the server to allocate resources for zombie connections that the client never requested.',
        bn: 'ক্লায়েন্ট প্রাথমিক সিকোয়েন্স নম্বর X সহ SYN পাঠায়; সার্ভার X+1 অ্যাকনলেজ করে এবং নিজের সিকোয়েন্স নম্বর Y সহ SYN-ACK ফেরত দেয়; সবশেষে ক্লায়েন্ট Y+1 অ্যাকনলেজ করে ACK পাঠায়। ২-মুখী হ্যান্ডশেক যথেষ্ট নয় কারণ নেটওয়ার্কে আটকে থাকা পুরানো ডুপ্লিকেট SYN প্যাকেট সার্ভারকে এমন সংযোগের জন্য মেমরি বরাদ্দ করাতে পারে যা ক্লায়েন্ট আদৌ চায়নি।'
      }
    },
    {
      q: {
        en: 'What is the fundamental difference between TCP Flow Control and Congestion Control?',
        bn: 'TCP ফ্লো কন্ট্রোল (Flow Control) এবং কনজেশন কন্ট্রোল (Congestion Control) এর মধ্যে মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'Flow control protects the receiver from being overwhelmed by a fast sender, managed via the Receive Window (rwnd) advertised in TCP headers. Congestion control protects the intermediate network routers and links from packet buffer bloat and queue exhaustion, managed dynamically by the sender via the Congestion Window (cwnd). The effective transmission window is min(rwnd, cwnd).',
        bn: 'ফ্লো কন্ট্রোল দ্রুতগতির প্রেরকের কাছ থেকে গ্রাহককে সুরক্ষিত রাখে, যা TCP হেডারের রিসিভ উইন্ডো (rwnd) দ্বারা নিয়ন্ত্রিত হয়। অন্যদিকে কনজেশন কন্ট্রোল মধ্যবর্তী নেটওয়ার্ক রাউটার ও লিঙ্ককে প্যাকেট ড্রপ থেকে রক্ষা করে, যা প্রেরক তার কনজেশন উইন্ডো (cwnd) দিয়ে ডায়নামিকালি হিসাব করে। কার্যকর ট্রান্সমিশন সীমা হলো min(rwnd, cwnd)।'
      }
    },
    {
      q: {
        en: 'Why does UDP outperform TCP in real-time audio/video streaming, multiplayer gaming, and DNS lookups?',
        bn: 'রিয়েল-টাইম অডিও/ভিডিও স্ট্রিমিং, মাল্টিপ্লেয়ার গেমিং এবং DNS লুকআপে UDP কেন TCP এর চেয়ে অনেক ভালো পারফর্ম করে?'
      },
      a: {
        en: 'UDP is connectionless and has zero handshake latency, zero head-of-line blocking, and zero retransmission delays. An 8-byte header overhead compared to TCP\'s 20-60 byte header saves bandwidth. In real-time voice or game telemetry, a lost packet from 50ms ago is useless; dropping it and rendering the newest state immediately is far better than stalling the pipeline for retransmissions.',
        bn: 'UDP কানেকশনহীন হওয়ায় এতে কোনো হ্যান্ডশেক বিলম্ব, হেড-অব-লাইন ব্লকিং কিংবা রিট্রান্সমিশনের বিরতি থাকে না। TCP এর ২০-৬০ বাইটের বিপরীতে UDP এর মাত্র ৮ বাইটের হেডার ব্যান্ডউইথ সাশ্রয় করে। ভয়েস বা গেমে ৫০ মিলিসেকেন্ড আগের হারিয়ে যাওয়া প্যাকেট পুনরায় আনার চেয়ে বাদ দিয়ে সরাসরি নতুন প্যাকেট গ্রহণ করা অনেক বেশি শ্রেয়।'
      }
    },
    {
      q: {
        en: 'Why does the TCP connection teardown require 4 packets (FIN-ACK-FIN-ACK) and a 2MSL TIME_WAIT state?',
        bn: 'TCP সংযোগ সমাপ্তিতে কেন ৪ টি প্যাকেট (FIN-ACK-FIN-ACK) এবং একটি 2MSL TIME_WAIT স্টেট প্রয়োজন হয়?'
      },
      a: {
        en: 'TCP connections are full-duplex: both directions must close independently. When side A sends FIN, side B ACKs it but can continue sending pending data until it sends its own FIN. Side A enters TIME_WAIT for 2 Maximum Segment Lifetimes (typically 60 to 120 seconds) to ensure its final ACK reached side B (retransmitting if lost) and to prevent lingering delayed packets from colliding with a new connection on the same port tuple.',
        bn: 'TCP সংযোগ ফুল-ডুপ্লেক্স হওয়ায় উভয় দিক স্বাধীনভাবে বন্ধ হতে হয়। এক পক্ষ FIN পাঠালে অপর পক্ষ ACK দিয়ে নিজের বাকি ডাটা পাঠানো শেষ করে নিজস্ব FIN পাঠায়। সংযোগ শুরুকারী পক্ষ 2MSL (সাধারণত ৬০-১২০ সেকেন্ড) TIME_WAIT স্টেটে থাকে যাতে তার শেষ ACK হারিয়ে গেলে পুনরায় পাঠানো যায় এবং পুরানো প্যাকেট নতুন কোনো সংযোগে ঢুকে বিশৃঙ্খলা সৃষ্টি না করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Wireshark and tcpdump capture raw packet flows on production interfaces to diagnose TCP retransmissions, RST spikes, and latency bottlenecks.',
      bn: 'Wireshark এবং tcpdump প্রোডাকশন ইন্টারফেসে কাঁচা প্যাকেট প্রবাহ ক্যাপচার করে TCP রিট্রান্সমিশন, RST স্পাইক এবং নেটওয়ার্কের বিলম্ব শনাক্ত করে।'
    },
    {
      en: 'Cloud Load Balancers (AWS NLB, Cloudflare, NGINX) manage millions of concurrent TCP connections using epoll and connection pooling architectures.',
      bn: 'ক্লাউড লোড ব্যালান্সারগুলো (AWS NLB, Cloudflare, NGINX) epoll এবং কানেকশন পুলিং ব্যবহার করে কোটি কোটি কনকারেন্ট TCP সংযোগ পরিচালনা করে।'
    },
    {
      en: 'QUIC and HTTP/3 run over UDP to eliminate head-of-line blocking and achieve 0-RTT connection resumption on the modern mobile Internet.',
      bn: 'QUIC এবং HTTP/3 প্রোটোকল UDP এর ওপর চলে হেড-অব-লাইন ব্লকিং দূর করে এবং মোবাইল ইন্টারনেটে শূন্য-বিলম্বের (0-RTT) তাৎক্ষণিক সংযোগ নিশ্চিত করে।'
    },
    {
      en: 'Global BGP routing and Tier 1 Internet backbones exchange routing tables over persistent TCP port 179 connections between autonomous systems (AS).',
      bn: 'গ্লোবাল BGP রাউটিং এবং বিশ্বব্যাপী ইন্টারনেট ব্যাকবোনগুলো অটোনোমাস সিস্টেমগুলোর (AS) মাঝে স্থায়ী TCP ১৭৯ নম্বর পোর্টে রাউটিং টেবিল আদান-প্রদান করে।'
    }
  ]
};
