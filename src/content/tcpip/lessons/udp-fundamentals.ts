import type { Lesson } from '../../../lib/types';

export const UdpFundamentalsLesson: Lesson = {
  slug: 'udp-fundamentals',
  tech: 'tcpip',
  title: {
    en: 'UDP Fundamentals: Connectionless Datagrams & Real-Time Protocols',
    bn: 'UDP এর মূলনীতি: কানেকশনহীন ডেটাগ্রাম ও রিয়েল-টাইম প্রোটোকল'
  },
  summary: {
    en: 'Master User Datagram Protocol (UDP) architecture: lightweight 8-byte header, connectionless transport, zero-handshake latency, broadcast and multicast, DNS queries, and real-time streaming (VoIP, WebRTC, QUIC).',
    bn: 'ইউজার ডেটাগ্রাম প্রোটোকল (UDP) আর্কিটেকচারে দক্ষতা: হালকা ৮-বাইটের হেডার, কানেকশনহীন পরিবহন, শূন্য-হ্যান্ডশেক বিলম্ব, ব্রডকাস্ট ও মাল্টিকাস্ট, DNS কোয়েরি এবং রিয়েল-টাইম স্ট্রিমিং (VoIP, WebRTC, QUIC)।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'udp-philosophy',
      text: {
        en: '1. What is UDP? The Minimalist Transport Protocol',
        bn: '১. UDP কী? মিনিমালিস্ট ট্রান্সপোর্ট প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you make a live voice call on Discord, join a multiplayer video game, or perform a fast DNS domain lookup, TCP is too slow and heavy. Defined in RFC (Request for Comments) 768, the User Datagram Protocol (UDP) trades reliable delivery guarantees for raw transmission speed and minimal latency.',
        bn: 'যখন আপনি ডিসকর্ড বা জুমে কথা বলেন, মাল্টিপ্লেয়ার গেম খেলেন কিংবা দ্রুত DNS ডোমেন রেজোলিউশন করেন, তখন TCP অনেক ধীরগতির ও ভারী মনে হয়। RFC (Request for Comments) 768 দ্বারা সংজ্ঞায়িত ইউজার ডেটাগ্রাম প্রোটোকল (UDP) নিশ্চিত প্রাপ্তির নিশ্চয়তা বাদ দিয়ে বিদ্যুৎগতির পরিবহন ও সর্বনিম্ন বিলম্ব নিশ্চিত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'UDP is completely connectionless. A sender simply emits a datagram addressed to a destination IP and port without any prior handshake, without tracking sequence numbers, and without waiting for acknowledgements.',
        bn: 'UDP পুরোপুরি কানেকশনহীন (connectionless)। কোনো পূর্ববর্তী হ্যান্ডশেক ছাড়াই প্রেরক সরাসরি গন্তব্য আইপি ও পোর্টে ডেটাগ্রাম পাঠিয়ে দেয়; এখানে কোনো সিকোয়েন্স নম্বর ট্র্যাকিং বা অ্যাকনলেজমেন্টের অপেক্ষা থাকে না।'
      }
    },
    {
      type: 'visual',
      id: 'tcp-vs-udp-header-diagram',
      title: {
        en: 'Header Comparison: TCP (20 Bytes Minimum) vs UDP (8 Bytes)',
        bn: 'হেডার তুলনা: TCP (সর্বনিম্ন ২০ বাইট) বনাম UDP (৮ বাইট)'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Transport Header Comparison: TCP vs UDP</text>' +
          '<!-- Column 1: TCP Header (Heavy) -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. TCP HEADER (20 - 60 BYTES)</text>' +
            '<rect x="15" y="45" width="330" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="180" y="65" fill="#38bdf8" font-size="10" text-anchor="middle">Source Port (16) | Destination Port (16)</text>' +
            '<rect x="15" y="80" width="330" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="180" y="100" fill="#38bdf8" font-size="10" text-anchor="middle">Sequence Number (32 bits)</text>' +
            '<rect x="15" y="115" width="330" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="180" y="135" fill="#38bdf8" font-size="10" text-anchor="middle">Acknowledgement Number (32 bits)</text>' +
            '<rect x="15" y="150" width="330" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="180" y="170" fill="#38bdf8" font-size="9" text-anchor="middle">Offset (4) | Flags SYN/ACK/FIN (9) | Window (16)</text>' +
            '<rect x="15" y="185" width="330" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="180" y="205" fill="#38bdf8" font-size="10" text-anchor="middle">Checksum (16) | Urgent Pointer (16)</text>' +
            '<rect x="15" y="225" width="330" height="95" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="248" fill="#cbd5e1" font-size="10">&#x2022; Reliable, ordered byte stream</text>' +
            '<text x="25" y="268" fill="#cbd5e1" font-size="10">&#x2022; 3-way handshake required</text>' +
            '<text x="25" y="288" fill="#f87171" font-size="10">&#x2022; Suffers Head-of-Line Blocking on drop</text>' +
            '<text x="25" y="306" fill="#94a3b8" font-size="9">&#x2022; Used by: HTTP/1.1, HTTP/2, SSH, PostgreSQL</text>' +
          '</g>' +
          '<!-- Column 2: UDP Header (Ultralight) -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. UDP HEADER (EXACTLY 8 BYTES)</text>' +
            '<rect x="15" y="45" width="330" height="40" rx="4" fill="#064e3b" stroke="#10b981"/>' +
            '<text x="180" y="70" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">Source Port (16) | Destination Port (16)</text>' +
            '<rect x="15" y="90" width="330" height="40" rx="4" fill="#064e3b" stroke="#10b981"/>' +
            '<text x="180" y="115" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">Length (16 bits) | Checksum (16 bits)</text>' +
            '<rect x="15" y="140" width="330" height="180" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="165" fill="#34d399" font-size="11" font-weight="bold">&#x2713; Zero Handshake Latency (0-RTT)</text>' +
            '<text x="25" y="185" fill="#cbd5e1" font-size="10">&#x2022; Zero Head-of-Line Blocking: lost packet skipped</text>' +
            '<text x="25" y="205" fill="#cbd5e1" font-size="10">&#x2022; Supports Broadcast &amp; Multicast (unlike TCP)</text>' +
            '<text x="25" y="225" fill="#fbbf24" font-size="10">&#x2022; Low Overhead: only 8 bytes per datagram</text>' +
            '<text x="25" y="250" fill="#38bdf8" font-size="10" font-weight="bold">&#x2022; Used by: DNS, DHCP, WebRTC, Zoom, QUIC</text>' +
            '<text x="25" y="272" fill="#c084fc" font-size="10" font-weight="bold">&#x2022; HTTP/3 runs entirely on top of UDP!</text>' +
            '<text x="25" y="295" fill="#94a3b8" font-size="9">&#x2022; Drops packets cleanly rather than stalling audio</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'udp-header-anatomy',
      text: {
        en: '2. The Ultralight 8-Byte UDP Header',
        bn: '২. হালকা ৮-বাইটের UDP হেডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The UDP header consists of exactly 4 fields of 16 bits each, totaling 8 bytes:',
        bn: 'UDP হেডারটিতে প্রতিটি ১৬ বিটের ঠিক ৪ টি ফিল্ড থাকে, যার মোট আকার মাত্র ৮ বাইট:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Source Port (16 bits): The sending application port number (optional in some clients).',
          bn: '১. Source Port (১৬ বিট): প্রেরক অ্যাপ্লিকেশনের পোর্ট নম্বর (কিছু ক্ষেত্রে ঐচ্ছিক)।'
        },
        {
          en: '2. Destination Port (16 bits): The target service port (e.g. port 53 for DNS).',
          bn: '২. Destination Port (১৬ বিট): গ্রাহক সার্ভিসের পোর্ট নম্বর (যেমন DNS এর জন্য ৫৩ নম্বর পোর্ট)।'
        },
        {
          en: '3. Length (16 bits): Total length in bytes of the UDP header plus payload (minimum 8 bytes).',
          bn: '৩. Length (১৬ বিট): হেডার ও পেলোড সহ সম্পূর্ণ ডেটাগ্রামের মোট দৈর্ঘ্য (সর্বনিম্ন ৮ বাইট)।'
        },
        {
          en: '4. Checksum (16 bits): Validates data integrity across header, payload, and IP pseudo-header (optional in IPv4, mandatory in IPv6).',
          bn: '৪. Checksum (১৬ বিট): হেডার ও ডাটার সঠিকতা যাচাই করে (IPv4 এ ঐচ্ছিক, তবে IPv6 এ বাধ্যতামূলক)।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'where-udp-wins',
      text: {
        en: '3. Where UDP Dominates: Real-Time Media & HTTP/3 (QUIC)',
        bn: '৩. যেখানে UDP সেরা: রিয়েল-টাইম মিডিয়া এবং HTTP/3 (QUIC)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In live voice calls or multiplayer gaming, receiving an audio packet from 150 milliseconds ago is worthless because conversation has already moved forward. If TCP loses a packet, it stalls the entire pipeline (Head-of-Line Blocking) waiting for a retransmission. UDP simply discards the missing packet and processes the newest incoming telemetry immediately.',
        bn: 'লাইভ ভয়েস কল বা মাল্টিপ্লেয়ার গেমে ১৫০ মিলিসেকেন্ড আগের হারিয়ে যাওয়া অডিও প্যাকেট গ্রহণ করা অর্থহীন, কারণ কথোপকথন ইতোমধ্যে এগিয়ে গেছে। TCP প্যাকেট হারালে পুরো পাইপলাইন থামিয়ে রিট্রান্সমিশনের জন্য অপেক্ষা করে (Head-of-Line Blocking)। কিন্তু UDP হারিয়ে যাওয়া প্যাকেট বাদ দিয়ে সরাসরি নতুন আগত ডাটা রেন্ডার করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The modern web is adopting UDP through QUIC and HTTP/3. By implementing reliability and encryption (TLS 1.3) at user-space on top of UDP, HTTP/3 avoids kernel TCP head-of-line blocking and allows instant 0-RTT connection resumption when switching between Wi-Fi and 5G cellular networks.',
        bn: 'আধুনিক ইন্টারনেট QUIC এবং HTTP/3 এর মাধ্যমে UDP কে ব্যাপকভাবে গ্রহণ করছে। UDP এর ওপর ভিত্তি করে ইউজার-স্পেসে নির্ভরযোগ্যতা ও এনক্রিপশন (TLS 1.3) বাস্তবায়ন করে HTTP/3 কোনো হেড-অব-লাইন ব্লকিং ছাড়াই কাজ করে এবং ওয়াই-ফাই ও ৫G মোবাইলের মধ্যে নেটওয়ার্ক পরিবর্তনের সময় শূন্য-বিলম্বের (0-RTT) সংযোগ দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. UDP Datagram & Real-Time Audio Engine in TypeScript',
        bn: '৪. TypeScript এ UDP ডেটাগ্রাম ও রিয়েল-টাইম অডিও ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates UDP datagram construction with 8-byte headers, connectionless broadcasting, and packet loss resilience in real-time streaming:',
        bn: 'নিচের TypeScript প্রোগ্রামটি ৮-বাইটের হেডার সহ UDP ডেটাগ্রাম তৈরি, কানেকশনহীন ব্রডকাস্টিং এবং রিয়েল-টাইম স্ট্রিমিংয়ে প্যাকেট ড্রপ সহনশীলতা প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of UDP 8-byte datagram headers, checksum verification, and real-time loss-tolerant streaming.',
        bn: 'UDP ৮-বাইটের ডেটাগ্রাম হেডার, চেকসাম যাচাই এবং ক্ষতি-সহনশীল রিয়েল-টাইম স্ট্রিমিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of UDP 8-Byte Datagrams and Real-Time Loss Resilience

interface UdpDatagram {
  srcPort: number;
  dstPort: number;
  lengthBytes: number; // 8 bytes header + payload length
  checksum: number;
  payload: string;
}

class UdpSocket {
  public receivedFrames: string[] = [];
  public droppedCount: number = 0;

  // Build 8-byte UDP datagram
  static createDatagram(srcPort: number, dstPort: number, payload: string): UdpDatagram {
    const payloadBytes = Buffer.from(payload, 'utf8').length;
    const totalLength = 8 + payloadBytes; // 8-byte fixed header + data

    // Simple 16-bit additive checksum simulation
    let sum = srcPort + dstPort + totalLength;
    for (let i = 0; i < payload.length; i++) {
      sum += payload.charCodeAt(i);
    }
    const checksum = sum & 0xffff;

    return {
      srcPort,
      dstPort,
      lengthBytes: totalLength,
      checksum,
      payload
    };
  }

  // Receive datagram over unreliable network
  receive(datagram: UdpDatagram, simulateNetworkDrop: boolean): void {
    if (simulateNetworkDrop) {
      this.droppedCount++;
      // UDP does not retransmit! The app simply drops the stale frame.
      console.log('Network dropped UDP packet to port ' + datagram.dstPort + ' (No stall, no retransmit!)');
      return;
    }

    // Process immediately without head-of-line blocking
    this.receivedFrames.push(datagram.payload);
    console.log('Rendered audio frame instantly: "' + datagram.payload + '" (Datagram size: ' + datagram.lengthBytes + ' bytes)');
  }
}

// Demonstration
const clientSocket = new UdpSocket();

// 1. Create DNS Query over UDP port 53
const dnsQuery = UdpSocket.createDatagram(53210, 53, 'QUERY: example.com');
console.log('DNS Datagram Length: ' + dnsQuery.lengthBytes + ' bytes (8-byte header included)');
console.log('DNS Checksum: 0x' + dnsQuery.checksum.toString(16));

// 2. Stream real-time VoIP voice frames
console.log('\\n--- Real-Time VoIP Audio Stream ---');
const frame1 = UdpSocket.createDatagram(60000, 5004, 'AudioChunk #1 [timestamp: 0ms]');
const frame2 = UdpSocket.createDatagram(60000, 5004, 'AudioChunk #2 [timestamp: 20ms]');
const frame3 = UdpSocket.createDatagram(60000, 5004, 'AudioChunk #3 [timestamp: 40ms]');

// Frame 1 arrives safely
clientSocket.receive(frame1, false);

// Frame 2 is lost in network congestion
clientSocket.receive(frame2, true);

// Frame 3 arrives immediately: rendered without waiting for frame 2!
clientSocket.receive(frame3, false);

console.log('\\nTotal successfully rendered frames: ' + clientSocket.receivedFrames.length); // -> 2
console.log('Total discarded lost frames: ' + clientSocket.droppedCount); // -> 1`
    }
  ],
  exercises: [
    {
      id: 'udp-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the exact header size of a standard User Datagram Protocol (UDP) packet?',
        bn: 'একটি সাধারণ ইউজার ডেটাগ্রাম প্রোটোকল (UDP) প্যাকেটের হেডারের আকার ঠিক কত?'
      },
      options: [
        {
          en: '8 bytes (composed of 4 fields of 16 bits each)',
          bn: '৮ বাইট (প্রতিটিতে ১৬ বিট করে ৪ টি ফিল্ড নিয়ে গঠিত)'
        },
        {
          en: '20 bytes',
          bn: '২০ বাইট'
        },
        {
          en: '64 bytes',
          bn: '৬৪ বাইট'
        },
        {
          en: '2 bytes',
          bn: '২ বাইট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Source Port, Destination Port, Length, Checksum: 4 * 2 bytes.',
        bn: 'সোর্স পোর্ট, ডেস্টিনেশন পোর্ট, দৈর্ঘ্য ও চেকসাম: ৪ * ২ বাইট।'
      },
      explanation: {
        en: 'A UDP header contains exactly four 16-bit fields: Source Port, Destination Port, Length, and Checksum, totaling 8 bytes.',
        bn: 'UDP হেডারে ১৬-বিটের ৪ টি ফিল্ড থাকে: সোর্স পোর্ট, ডেস্টিনেশন পোর্ট, দৈর্ঘ্য এবং চেকসাম; যার মোট আকার ঠিক ৮ বাইট।'
      }
    },
    {
      id: 'udp-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is UDP preferred over TCP for live video conferencing, Discord voice calls, and multiplayer gaming?',
        bn: 'লাইভ ভিডিও কনফারেন্স, ডিসকর্ড ভয়েস কল এবং মাল্টিপ্লেয়ার গেমিংয়ের জন্য TCP এর চেয়ে UDP কেন বেশি পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'It avoids head-of-line blocking and retransmission delays: missing packets are skipped so newer incoming frames render immediately',
          bn: 'এটি হেড-অব-লাইন ব্লকিং এবং রিট্রান্সমিশনের বিলম্ব এড়ায়: হারিয়ে যাওয়া প্যাকেট বাদ দিয়ে নতুন ফ্রেমগুলো সরাসরি রেন্ডার হয়'
        },
        {
          en: 'UDP guarantees 100% lossless delivery on satellite links',
          bn: 'UDP স্যাটেলাইট লিঙ্কে ১০০% লসলেস ডেলিভারির নিশ্চয়তা দেয়'
        },
        {
          en: 'UDP encrypts the video with AES-512 hardware acceleration',
          bn: 'UDP ভিডিওকে AES-512 হার্ডওয়্যার গতিতে এনক্রিপ্ট করে'
        },
        {
          en: 'TCP is banned on mobile smartphone networks',
          bn: 'মোবাইল স্মার্টফোন নেটওয়ার্কে TCP ব্যবহার নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dropping stale audio is better than stalling the call.',
        bn: 'পুরানো হারিয়ে যাওয়া অডিওর জন্য অপেক্ষা করার চেয়ে নতুন অডিও শোনা বেশি কার্যকর।'
      },
      explanation: {
        en: 'In real-time interactive media, stale packets are useless. Skipping lost packets avoids TCP\'s retransmission delay and Head-of-Line Blocking, preserving human conversational flow.',
        bn: 'রিয়েল-টাইম অডিও/ভিডিওতে পুরানো প্যাকেট কোনো কাজে আসে না। হারিয়ে যাওয়া প্যাকেট বাদ দিয়ে সরাসরি নতুন ডাটা রেন্ডার করলে স্বাভাবিক কথোপকথন বজায় থাকে।'
      }
    },
    {
      id: 'udp-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which modern protocol stack is built directly on top of UDP to power HTTP/3 on the Web?',
        bn: 'ওয়েবে HTTP/3 পরিচালনা করতে কোন আধুনিক প্রোটোকলটি সরাসরি UDP এর ওপর তৈরি করা হয়েছে?'
      },
      options: [
        {
          en: 'QUIC (Quick UDP Internet Connections)',
          bn: 'QUIC (Quick UDP Internet Connections)'
        },
        {
          en: 'BGP (Border Gateway Protocol)',
          bn: 'BGP (Border Gateway Protocol)'
        },
        {
          en: 'Telnet',
          bn: 'Telnet'
        },
        {
          en: 'FTP',
          bn: 'FTP'
        }
      ],
      answer: 0,
      hint: {
        en: 'Google developed QUIC over UDP.',
        bn: 'গুগল UDP এর ওপর QUIC তৈরি করেছিল।'
      },
      explanation: {
        en: 'HTTP/3 is built on QUIC, an encrypted, multiplexed transport protocol implemented in user-space over UDP to solve TCP head-of-line blocking.',
        bn: 'HTTP/3 মূলত QUIC প্রোটোকলের ওপর চলে, যা UDP এর সাহায্যে হেড-অব-লাইন ব্লকিং দূর করে এবং দ্রুতগতির ওয়েব ব্রাউজিং নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-udp-fundamentals',
    title: {
      en: 'UDP Fundamentals Quiz',
      bn: 'UDP এর মূলনীতি কুইজ'
    },
    questions: [
      {
        id: 'udp-q1',
        kind: 'mcq',
        question: {
          en: 'Can a TCP connection broadcast a single packet to all hosts on a local subnet simultaneously?',
          bn: 'একটি TCP সংযোগ কি একই সাথে লোকাল সাবনেটের تمام হোস্টের কাছে একটি একক প্যাকেট ব্রডকাস্ট করতে পারে?'
        },
        options: [
          {
            en: 'No, TCP is strictly point-to-point (unicast); only UDP supports broadcast and multicast',
            bn: 'না, TCP কঠোরভাবে পয়েন্ট-টু-পয়েন্ট (ইউনিকাস্ট); শুধুমাত্র UDP ব্রডকাস্ট এবং মাল্টিকাস্ট সমর্থন করে'
          },
          {
            en: 'Yes, by setting the broadcast flag in the TCP header',
            bn: 'হ্যাঁ, TCP হেডারে ব্রডকাস্ট ফ্ল্যাগ সক্রিয় করে'
          },
          {
            en: 'Only on Linux operating systems',
            bn: 'শুধুমাত্র লিনাক্স অপারেটিং সিস্টেমে সম্ভব'
          },
          {
            en: 'Only if the connection has been open for 1 hour',
            bn: 'কেবলমাত্র যদি সংযোগটি ১ ঘণ্টা ধরে চালু থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'TCP state tracking requires 1-to-1 connections.',
          bn: 'TCP স্টেট ট্র্যাকিং কেবল ১-থেকে-১ সংযোগেই সম্ভব।'
        },
        explanation: {
          en: 'Because TCP maintains connection state, sequence numbers, and ACKs with a single partner, it cannot broadcast. UDP is stateless and easily supports broadcast and multicast.',
          bn: 'যেহেতু TCP দুই পক্ষের মধ্যে সিকোয়েন্স ও অ্যাকনলেজমেন্ট সমন্বয় করে, তাই এটি ১-টু-১ এ সীমাবদ্ধ। UDP স্টেটলেস হওয়ায় সহজেই ব্রডকাস্ট ও মাল্টিকাস্ট চালাতে পারে।'
        }
      },
      {
        id: 'udp-q2',
        kind: 'mcq',
        question: {
          en: 'Why do Domain Name System (DNS) queries standardly use UDP port 53 rather than TCP?',
          bn: 'ডোমেন নেম সিস্টেম (DNS) কোয়েরিগুলো সাধারণত TCP এর বদলে কেন UDP ৫৩ নম্বর পোর্ট ব্যবহার করে?'
        },
        options: [
          {
            en: 'To avoid the latency overhead of establishing a 3-way TCP handshake for a single quick request and response',
            bn: 'একটি সাধারণ ও দ্রুত রিকোয়েস্ট-রেসপন্সের জন্য ৩-মুখী TCP হ্যান্ডশেক তৈরির বাড়তি বিলম্ব এড়াতে'
          },
          {
            en: 'Because TCP port 53 was permanently shut down',
            bn: 'কারণ TCP ৫৩ নম্বর পোর্ট স্থায়ীভাবে বন্ধ করে দেওয়া হয়েছে'
          },
          {
            en: 'Because DNS servers cannot run the Java virtual machine',
            bn: 'কারণ DNS সার্ভার জাভা ভার্চুয়াল মেশিন চালাতে পারে না'
          },
          {
            en: 'Because domain names can only be spelled with UDP letters',
            bn: 'কারণ ডোমেন নাম কেবল UDP বর্ণ দিয়ে লেখা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: '1 request packet + 1 reply packet without connection setup.',
          bn: 'কোনো সংযোগ তৈরি ছাড়াই ১ টি রিকোয়েস্ট ও ১ টি রেসপন্স প্যাকেট।'
        },
        explanation: {
          en: 'Standard DNS queries fit in a single packet. Using UDP requires only 1 round-trip (request + response) instead of 2 round-trips for TCP handshake plus data.',
          bn: 'সাধারণ DNS কোয়েরি একটি প্যাকেটে এঁটে যায়, তাই হ্যান্ডশেকের সময় নষ্ট না করে UDP দিয়ে তাৎক্ষণিক সমাধান করা হয়।'
        }
      },
      {
        id: 'udp-q3',
        kind: 'mcq',
        question: {
          en: 'What is the minimum value of the Length field in a UDP header?',
          bn: 'একটি UDP হেডারে Length ফিল্ডের সর্বনিম্ন মান কত হতে পারে?'
        },
        options: [
          {
            en: '8 (representing an empty datagram with an 8-byte header and 0 payload bytes)',
            bn: '৮ (৮-বাইটের হেডার এবং ০ পেলোড বাইট বিশিষ্ট একটি খালি ডেটাগ্রাম নির্দেশ করে)'
          },
          {
            en: '0',
            bn: '০'
          },
          {
            en: '20',
            bn: '২০'
          },
          {
            en: '64',
            bn: '৬৪'
          }
        ],
        answer: 0,
        hint: {
          en: 'The header itself is 8 bytes.',
          bn: 'হেডারটির নিজের আকারই ৮ বাইট।'
        },
        explanation: {
          en: 'The UDP Length field measures the header plus data. Even with zero payload bytes, the header itself is 8 bytes, so the minimum valid length is 8.',
          bn: 'UDP এর Length ফিল্ড হেডার ও ডাটার মোট মাপ প্রকাশ করে; কোনো ডাটা না থাকলেও হেডারের ৮ বাইট মিলিয়ে সর্বনিম্ন মান ৮ হয়।'
        }
      },
      {
        id: 'udp-q4',
        kind: 'mcq',
        question: {
          en: 'Is the Checksum field in an IPv4 UDP header mandatory or optional?',
          bn: 'IPv4 UDP হেডারে Checksum ফিল্ডটি কি বাধ্যতামূলক নাকি ঐচ্ছিক?'
        },
        options: [
          {
            en: 'Optional in IPv4 (can be set to 0), but mandatory in IPv6',
            bn: 'IPv4 এ ঐচ্ছিক (০ সেট করা যায়), কিন্তু IPv6 এ বাধ্যতামূলক'
          },
          {
            en: 'Mandatory in both IPv4 and IPv6 under all circumstances',
            bn: 'IPv4 এবং IPv6 উভয়েই সব সময় বাধ্যতামূলক'
          },
          {
            en: 'Forbidden in IPv4 by security firewalls',
            bn: 'নিরাপত্তা ফায়ারওয়াল দ্বারা IPv4 এ নিষিদ্ধ'
          },
          {
            en: 'Only required when transmitting encrypted passwords',
            bn: 'কেবলমাত্র এনক্রিপ্ট করা পাসওয়ার্ড পাঠানোর সময় প্রয়োজন'
          }
        ],
        answer: 0,
        hint: {
          en: 'IPv4 allows 0x0000 checksum; IPv6 requires checksum validation.',
          bn: 'IPv4 এ 0x0000 চেকসাম দেওয়া যায়; IPv6 এ এটি পরীক্ষা করা আবশ্যক।'
        },
        explanation: {
          en: 'In IPv4, the UDP checksum is optional (a value of 0 indicates no checksum was computed). In IPv6, the checksum is strictly mandatory for header verification.',
          bn: 'IPv4 এ UDP চেকসাম ঐচ্ছিক হলেও IPv6 আর্কিটেকচারে এটি বাধ্যতামূলক করা হয়েছে।'
        }
      },
      {
        id: 'udp-q5',
        kind: 'mcq',
        question: {
          en: 'What protocol does the Dynamic Host Configuration Protocol (DHCP) use to broadcast IP assignment requests to local routers?',
          bn: 'লোকাল রাউটার থেকে আইপি বরাদ্দ পাওয়ার অনুরোধ ব্রডকাস্ট করতে ডায়নামিক হোস্ট কনফিগারেশন প্রোটোকল (DHCP) কোন প্রোটোকল ব্যবহার করে?'
        },
        options: [
          {
            en: 'UDP (ports 67 and 68)',
            bn: 'UDP (৬৭ এবং ৬৮ নম্বর পোর্ট)'
          },
          {
            en: 'TCP (ports 80 and 443)',
            bn: 'TCP (৮০ এবং ৪৪৩ নম্বর পোর্ট)'
          },
          {
            en: 'BGP',
            bn: 'BGP'
          },
          {
            en: 'SSH',
            bn: 'SSH'
          }
        ],
        answer: 0,
        hint: {
          en: 'A device without an IP address must broadcast using UDP.',
          bn: 'আইপি বিহীন একটি নতুন ডিভাইসকে UDP ব্রডকাস্ট ব্যবহার করে যোগাযোগ করতে হয়।'
        },
        explanation: {
          en: 'Because a newly booted host has no IP address, it cannot establish a TCP handshake. It broadcasts UDP DISCOVER datagrams to 255.255.255.255 on UDP port 67.',
          bn: 'নতুন চালু হওয়া ডিভাইসের নিজস্ব আইপি না থাকায় সে TCP হ্যান্ডশেক করতে পারে না; তাই সে UDP ৬৭ ও ৬৮ পোর্টে ব্রডকাস্ট পাঠিয়ে আইপি গ্রহণ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tcp-handshake',
    title: {
      en: 'The TCP Handshake & Teardown: SYN, ACK, FIN & TIME_WAIT States',
      bn: 'TCP হ্যান্ডশেক ও সমাপ্তি: SYN, ACK, FIN এবং TIME_WAIT স্টেট'
    }
  }
};
