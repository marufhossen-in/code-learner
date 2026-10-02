import type { Lesson } from '../../../lib/types';

export const TcpipBasicsLesson: Lesson = {
  slug: 'tcpip-basics',
  tech: 'tcpip',
  title: {
    en: 'The TCP/IP 4-Layer Model: Encapsulation, Protocols & Architecture',
    bn: 'TCP/IP ৪-স্তরের মডেল: এনক্যাপসুলেশন, প্রোটোকল ও আর্কিটেকচার'
  },
  summary: {
    en: 'A beginner introduction to computer networking: the 4-layer TCP/IP protocol suite (Application, Transport, Internet, Link), packet encapsulation and decapsulation, and comparison with the 7-layer OSI model.',
    bn: 'কম্পিউটার নেটওয়ার্কিংয়ের প্রাথমিক ধারণা: ৪-স্তরের TCP/IP প্রোটোকল সুইট (Application, Transport, Internet, Link), প্যাকেট এনক্যাপসুলেশন ও ডিক্যাপসুলেশন এবং ৭-স্তরের OSI মডেলের সাথে তুলনা।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'tcpip-model-intro',
      text: {
        en: '1. What is the TCP/IP 4-Layer Architecture?',
        bn: '১. TCP/IP ৪-স্তরের আর্কিটেকচার কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you open a web browser and request a website, your computer communicates across the global Internet using the TCP/IP protocol suite. Standardized by DARPA (Defense Advanced Research Projects Agency) and defined in RFC (Request for Comments) 1122, TCP/IP organizes network communication into 4 modular hierarchical layers.',
        bn: 'যখন আপনি ওয়েব ব্রাউজারে কোনো ওয়েবসাইটের রিকোয়েস্ট পাঠান, আপনার কম্পিউটার বিশ্বব্যাপী ইন্টারনেটের সাথে TCP/IP প্রোটোকল সুইট ব্যবহার করে যোগাযোগ করে। DARPA (Defense Advanced Research Projects Agency) কর্তৃক প্রমিত এবং RFC (Request for Comments) 1122 দ্বারা সংজ্ঞায়িত TCP/IP নেটওয়ার্কের যোগাযোগ ব্যবস্থাকে ৪ টি সুবিন্যস্ত স্তরে সাজায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Each layer solves a single distinct networking challenge independently of the others:',
        bn: 'প্রতিটি স্তর অন্যদের থেকে স্বাধীনভাবে নেটওয়ার্কিংয়ের একটি নির্দিষ্ট সমস্যার সমাধান করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Application Layer (HTTP, DNS, SSH, SMTP): Generates application-specific user payloads and handles presentation.',
          bn: '১. Application Layer (HTTP, DNS, SSH, SMTP): অ্যাপ্লিকেশন ভিত্তিক ব্যবহারকারী ডাটা তৈরি করে এবং উপস্থাপনা পরিচালনা করে।'
        },
        {
          en: '2. Transport Layer (TCP, UDP): Manages process-to-process communication, port numbers, reliability, retransmissions, and flow control.',
          bn: '২. Transport Layer (TCP, UDP): প্রসেস-টু-প্রসেস যোগাযোগ, পোর্ট নম্বর, নির্ভরযোগ্যতা, পুনর্প্রেরণ এবং ফ্লো নিয়ন্ত্রণ করে।'
        },
        {
          en: '3. Internet Layer (IPv4, IPv6, ICMP, ARP): Manages logical host-to-host addressing and routing packets across intermediate network routers.',
          bn: '৩. Internet Layer (IPv4, IPv6, ICMP, ARP): হোস্ট-টু-হোস্ট লজিক্যাল আইপি অ্যাড্রেসিং এবং একাধিক রাউটারের মধ্য দিয়ে প্যাকেট রাউটিং সম্পন্ন করে।'
        },
        {
          en: '4. Link / Network Access Layer (Ethernet, Wi-Fi 802.11): Handles hop-to-hop physical framing and MAC addressing across local physical cables or radio waves.',
          bn: '৪. Link / Network Access Layer (ইথারনেট, ওয়াই-ফাই ৮০২.১১): লোকাল কেবল বা বেতার তরঙ্গে হপ-টু-হপ ফিজিক্যাল ফ্রেমিং এবং MAC অ্যাড্রেসিং পরিচালনা করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'encapsulation-diagram',
      title: {
        en: 'Packet Encapsulation and Decapsulation Through the 4 Layers',
        bn: '৪ টি স্তরের মধ্য দিয়ে প্যাকেট এনক্যাপসুলেশন ও ডিক্যাপসুলেশন'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">TCP/IP 4-Layer Encapsulation Pipeline</text>' +
          '<!-- Layer 1: Application -->' +
          '<g transform="translate(60, 55)">' +
            '<rect width="680" height="48" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<rect x="15" y="10" width="130" height="28" rx="4" fill="#a855f7"/>' +
            '<text x="80" y="28" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. APPLICATION</text>' +
            '<rect x="160" y="10" width="505" height="28" rx="4" fill="#0f172a" stroke="#a855f7"/>' +
            '<text x="412" y="28" fill="#c084fc" font-size="11" font-family="monospace" text-anchor="middle">HTTP Payload Data: "GET /index.html HTTP/1.1"</text>' +
          '</g>' +
          '<!-- Down Arrow 1 -->' +
          '<path d="M 400 105 L 400 120" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Layer 2: Transport (TCP) -->' +
          '<g transform="translate(60, 125)">' +
            '<rect width="680" height="52" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<rect x="15" y="12" width="130" height="28" rx="4" fill="#3b82f6"/>' +
            '<text x="80" y="30" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. TRANSPORT</text>' +
            '<rect x="160" y="10" width="160" height="32" rx="4" fill="#1e3a8a" stroke="#60a5fa"/>' +
            '<text x="240" y="30" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">TCP Header (Ports, Seq)</text>' +
            '<rect x="325" y="10" width="340" height="32" rx="4" fill="#0f172a" stroke="#a855f7"/>' +
            '<text x="495" y="30" fill="#c084fc" font-size="10" text-anchor="middle">HTTP Payload (Data)</text>' +
            '<text x="590" y="45" fill="#60a5fa" font-size="9" text-anchor="middle">= TCP Segment</text>' +
          '</g>' +
          '<!-- Down Arrow 2 -->' +
          '<path d="M 400 180 L 400 195" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Layer 3: Internet (IP) -->' +
          '<g transform="translate(60, 200)">' +
            '<rect width="680" height="55" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<rect x="15" y="13" width="130" height="28" rx="4" fill="#10b981"/>' +
            '<text x="80" y="31" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. INTERNET</text>' +
            '<rect x="160" y="10" width="125" height="34" rx="4" fill="#064e3b" stroke="#34d399"/>' +
            '<text x="222" y="31" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">IP Header (IPs, TTL)</text>' +
            '<rect x="290" y="10" width="140" height="34" rx="4" fill="#1e3a8a" stroke="#60a5fa"/>' +
            '<text x="360" y="31" fill="#93c5fd" font-size="9" text-anchor="middle">TCP Header</text>' +
            '<rect x="435" y="10" width="230" height="34" rx="4" fill="#0f172a" stroke="#a855f7"/>' +
            '<text x="550" y="31" fill="#c084fc" font-size="9" text-anchor="middle">Payload</text>' +
            '<text x="590" y="47" fill="#34d399" font-size="9" text-anchor="middle">= IP Packet</text>' +
          '</g>' +
          '<!-- Down Arrow 3 -->' +
          '<path d="M 400 258 L 400 273" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Layer 4: Link (Ethernet Frame) -->' +
          '<g transform="translate(60, 278)">' +
            '<rect width="680" height="60" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<rect x="15" y="16" width="130" height="28" rx="4" fill="#f59e0b"/>' +
            '<text x="80" y="34" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. LINK ACCESS</text>' +
            '<rect x="160" y="10" width="105" height="38" rx="4" fill="#78350f" stroke="#fbbf24"/>' +
            '<text x="212" y="33" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">Eth Header (MACs)</text>' +
            '<rect x="270" y="10" width="100" height="38" rx="4" fill="#064e3b" stroke="#34d399"/>' +
            '<text x="320" y="33" fill="#6ee7b7" font-size="8" text-anchor="middle">IP Header</text>' +
            '<rect x="375" y="10" width="100" height="38" rx="4" fill="#1e3a8a" stroke="#60a5fa"/>' +
            '<text x="425" y="33" fill="#93c5fd" font-size="8" text-anchor="middle">TCP Header</text>' +
            '<rect x="480" y="10" width="125" height="38" rx="4" fill="#0f172a" stroke="#a855f7"/>' +
            '<text x="542" y="33" fill="#c084fc" font-size="8" text-anchor="middle">Payload Data</text>' +
            '<rect x="610" y="10" width="55" height="38" rx="4" fill="#78350f" stroke="#fbbf24"/>' +
            '<text x="637" y="33" fill="#fde68a" font-size="8" text-anchor="middle">FCS</text>' +
            '<text x="590" y="53" fill="#fbbf24" font-size="9" text-anchor="middle">= Ethernet Frame</text>' +
          '</g>' +
          '<!-- Bottom Summary Text -->' +
          '<text x="400" y="390" fill="#38bdf8" font-size="12" text-anchor="middle">Sender ENCAPSULATES down &#x2193; | Receiver DECAPSULATES up &#x2191;</text>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'encapsulation-process',
      text: {
        en: '2. The Encapsulation and Decapsulation Pipeline',
        bn: '২. এনক্যাপসুলেশন ও ডিক্যাপসুলেশন পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Encapsulation functions like a Russian nesting doll. As data descends the protocol stack on the sending computer, each layer wraps the payload from above inside its own specific header containing metadata:',
        bn: 'এনক্যাপসুলেশন মূলত রাশিয়ান নেস্টিং ডলের মতো কাজ করে। প্রেরক কম্পিউটারে ডাটা যখন ওপর থেকে নিচের স্তরে নামে, প্রতিটি স্তর ওপরের পেলোডকে নিজের মেটাডাটা সম্পন্ন হেডারের ভেতর মুড়ে নেয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Transport Layer adds a TCP header with Source & Destination Port numbers (e.g. 443 for HTTPS) -> producing a Segment.',
          bn: '১. Transport স্তর সোর্স ও ডেস্টিনেশন পোর্ট নম্বর (যেমন HTTPS এর জন্য ৪৪৩) সহ TCP হেডার যোগ করে -> ফলে তৈরি হয় সেগমেন্ট (Segment)।'
        },
        {
          en: '2. Internet Layer adds an IP header with Source & Destination IP addresses and TTL (Time To Live) -> producing a Packet.',
          bn: '২. Internet স্তর সোর্স ও ডেস্টিনেশন আইপি অ্যাড্রেস এবং TTL সহ IP হেডার যোগ করে -> ফলে তৈরি হয় প্যাকেট (Packet)।'
        },
        {
          en: '3. Link Layer adds an Ethernet frame header with physical MAC addresses and a Frame Check Sequence (FCS) trailer -> producing a Frame.',
          bn: '৩. Link স্তর ফিজিক্যাল MAC অ্যাড্রেস এবং ফ্রেম চেক সিকোয়েন্স (FCS) ট্রেলার যোগ করে -> ফলে তৈরি হয় ফ্রেম (Frame)।'
        }
      ]
    },
    {
      type: 'para',
      text: {
        en: 'When the frame reaches the destination host, decapsulation reverses this process step by step. The link layer strips the Ethernet frame, the internet layer unwraps the IP packet, and the transport layer extracts the raw HTTP payload for the web server process.',
        bn: 'যখন ফ্রেমটি গ্রাহক কম্পিউটারে পৌঁছায়, ডিক্যাপসুলেশন এই পুরো প্রক্রিয়াকে উল্টোভাবে সম্পন্ন করে। লিংক স্তর ইথারনেট ফ্রেম খোলে, ইন্টারনেট স্তর IP প্যাকেট উদ্ধার করে এবং ট্রান্সপোর্ট স্তর খাঁটি HTTP ডাটাটি ওয়েব সার্ভার সফটওয়্যারের কাছে হস্তান্তর করে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '3. Packet Encapsulation & Decapsulation Engine in TypeScript',
        bn: '৩. TypeScript এ প্যাকেট এনক্যাপসুলেশন ও ডিক্যাপসুলেশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how the 4 TCP/IP layers encapsulate an application payload with transport, internet, and link headers, and how the destination host decapsulates each layer upon receipt:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে ৪ টি TCP/IP স্তর একটি অ্যাপ্লিকেশন পেলোডকে ট্রান্সপোর্ট, ইন্টারনেট ও লিংক হেডার দিয়ে এনক্যাপসুলেট করে এবং কীভাবে গ্রাহক কম্পিউটার তা ডিক্যাপসুলেট করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of TCP/IP 4-layer packet encapsulation and receiving decapsulation.',
        bn: 'TCP/IP ৪-স্তরের প্যাকেট এনক্যাপসুলেশন এবং গ্রাহক প্রান্তে ডিক্যাপসুলেশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of TCP/IP 4-Layer Encapsulation and Decapsulation

interface TcpSegment {
  srcPort: number;
  dstPort: number;
  seqNumber: number;
  payload: string;
}

interface IpPacket {
  srcIp: string;
  dstIp: string;
  protocol: 'TCP' | 'UDP';
  ttl: number;
  payload: TcpSegment;
}

interface EthernetFrame {
  srcMac: string;
  dstMac: string;
  etherType: string;
  payload: IpPacket;
  crcCheck: number;
}

class NetworkStack {
  // 1. Sender pipeline: Encapsulate down the 4 layers
  static encapsulate(httpPayload: string): EthernetFrame {
    // Layer 4 (Application): httpPayload generated
    // Layer 3 (Transport): Add TCP header
    const tcpSegment: TcpSegment = {
      srcPort: 54321,
      dstPort: 80,
      seqNumber: 1001,
      payload: httpPayload
    };

    // Layer 2 (Internet): Add IP header
    const ipPacket: IpPacket = {
      srcIp: '192.168.1.10',
      dstIp: '93.184.216.34',
      protocol: 'TCP',
      ttl: 64,
      payload: tcpSegment
    };

    // Layer 1 (Link): Add Ethernet Frame header and CRC
    const ethFrame: EthernetFrame = {
      srcMac: '00:1A:2B:3C:4D:5E',
      dstMac: '00:50:56:C0:00:08',
      etherType: '0x0800', // IPv4
      payload: ipPacket,
      crcCheck: 4294967295
    };

    return ethFrame;
  }

  // 2. Receiver pipeline: Decapsulate up the 4 layers
  static decapsulate(frame: EthernetFrame): string {
    // Link layer decapsulation
    console.log('Link Layer: Stripped Ethernet Frame (Src MAC: ' + frame.srcMac + ')');
    const packet = frame.payload;

    // Internet layer decapsulation
    console.log('Internet Layer: Stripped IP Header (Src IP: ' + packet.srcIp + ', Dst IP: ' + packet.dstIp + ')');
    const segment = packet.payload;

    // Transport layer decapsulation
    console.log('Transport Layer: Stripped TCP Header (Dst Port: ' + segment.dstPort + ', Seq: ' + segment.seqNumber + ')');

    // Deliver to Application
    return segment.payload;
  }
}

// Demonstration
const requestPayload = 'GET /index.html HTTP/1.1';
console.log('Sender generating payload: ' + requestPayload);

// Encapsulate
const wireFrame = NetworkStack.encapsulate(requestPayload);
console.log('Transmitting on wire: Ethernet Frame to ' + wireFrame.dstMac);

// Decapsulate on receiving server
console.log('\\n--- Receiving Host Processing ---');
const deliveredPayload = NetworkStack.decapsulate(wireFrame);
console.log('Delivered to Web Server: ' + deliveredPayload); // -> GET /index.html HTTP/1.1`
    }
  ],
  exercises: [
    {
      id: 'tcp-bas-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which layer of the 4-layer TCP/IP model is responsible for routing packets across intermediate network routers using IP addresses?',
        bn: 'IP অ্যাড্রেস ব্যবহার করে মধ্যবর্তী নেটওয়ার্ক রাউটারগুলোর মধ্য দিয়ে প্যাকেট রাউটিং করার দায়িত্ব ৪-স্তরের TCP/IP মডেলের কোন স্তরের?'
      },
      options: [
        {
          en: 'The Internet Layer (IPv4 / IPv6)',
          bn: 'ইন্টারনেট স্তর (IPv4 / IPv6)'
        },
        {
          en: 'The Application Layer',
          bn: 'অ্যাপ্লিকেশন স্তর'
        },
        {
          en: 'The Physical Layer exclusively',
          bn: 'শুধুমাত্র ফিজিক্যাল স্তর'
        },
        {
          en: 'The Database Session Layer',
          bn: 'ডাটাবেজ সেশন স্তর'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Internet layer handles logical addressing and path finding.',
        bn: 'ইন্টারনেট লেয়ার লজিক্যাল অ্যাড্রেসিং ও পথ নির্ধারণ করে।'
      },
      explanation: {
        en: 'The Internet Layer (governed by IPv4 and IPv6) provides logical addressing and routing services to forward packets across interconnected routers.',
        bn: 'Internet Layer (IPv4 এবং IPv6 দ্বারা পরিচালিত) লজিক্যাল অ্যাড্রেসিং এবং ইন্টারকানেক্টেড রাউটার দিয়ে প্যাকেট প্রেরণের কাজ করে।'
      }
    },
    {
      id: 'tcp-bas-ex-2',
      kind: 'mcq',
      question: {
        en: 'In networking terminology, what is a data unit called at the Transport Layer when governed by TCP?',
        bn: 'নেটওয়ার্কিংয়ের পরিভাষায় TCP দ্বারা পরিচালিত Transport Layer এর ডাটা ইউনিটটিকে কী বলা হয়?'
      },
      options: [
        {
          en: 'Segment (TCP Segment)',
          bn: 'সেগমেন্ট (TCP Segment)'
        },
        {
          en: 'Frame',
          bn: 'ফ্রেম (Frame)'
        },
        {
          en: 'Packet',
          bn: 'প্যাকেট (Packet)'
        },
        {
          en: 'Raw Bit',
          bn: 'র বিট (Raw Bit)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Link uses Frames, Internet uses Packets, Transport uses Segments.',
        bn: 'লিংক ফ্রেম ব্যবহার করে, ইন্টারনেট প্যাকেট ব্যবহার করে এবং ট্রান্সপোর্ট সেগমেন্ট ব্যবহার করে।'
      },
      explanation: {
        en: 'Data at the transport layer is termed a Segment (or Datagram for UDP), at the internet layer a Packet, and at the link layer a Frame.',
        bn: 'ট্রান্সপোর্ট লেয়ারের ডাটা ইউনিটকে সেগমেন্ট (বা UDP এর ক্ষেত্রে ডেটাগ্রাম), ইন্টারনেট লেয়ারে প্যাকেট এবং লিংক লেয়ারে ফ্রেম বলা হয়।'
      }
    },
    {
      id: 'tcp-bas-ex-3',
      kind: 'mcq',
      question: {
        en: 'What occurs during packet decapsulation on the receiving destination computer?',
        bn: 'গ্রাহক বা গন্তব্য কম্পিউটারে প্যাকেট ডিক্যাপসুলেশনের সময় কী ঘটে?'
      },
      options: [
        {
          en: 'Headers are inspected and stripped layer by layer as the payload moves upwards from Link to Application',
          bn: 'লিংক স্তর থেকে অ্যাপ্লিকেশন স্তরে ওঠার সময় প্রতিটি স্তরের হেডার পরীক্ষা করে ক্রমান্বয়ে খুলে ফেলা হয়'
        },
        {
          en: 'The packet is compressed into a zip file on the hard drive',
          bn: 'প্যাকেটটিকে হার্ডডিস্কে একটি জিপ ফাইলে সংকুচিত করা হয়'
        },
        {
          en: 'All data is duplicated across 10 network switches',
          bn: 'تمام ডাটা ১০ টি নেটওয়ার্ক সুইচে অনুলিপি করা হয়'
        },
        {
          en: 'The IP address is converted to binary and discarded',
          bn: 'আইপি অ্যাড্রেসকে বাইনারিতে রূপান্তর করে মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Decapsulation strips headers as data ascends the stack.',
        bn: 'ডিক্যাপসুলেশন ওপরের দিকে ওঠার সময় হেডারগুলো খুলে ফেলে।'
      },
      explanation: {
        en: 'Decapsulation is the inverse of encapsulation: each layer validates its specific header and removes it, passing the inner payload upward until raw data reaches the target application.',
        bn: 'ডিক্যাপসুলেশন হলো এনক্যাপসুলেশনের বিপরীত প্রক্রিয়া: প্রতিটি স্তর নিজের হেডার পরীক্ষা ও বাদ দিয়ে ভেতরের ডাটাকে ওপরের স্তরে পাঠায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tcpip-basics',
    title: {
      en: 'TCP/IP 4-Layer Architecture Quiz',
      bn: 'TCP/IP ৪-স্তরের আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'tcp-q1',
        kind: 'mcq',
        question: {
          en: 'Why did the 4-layer TCP/IP model triumph over the 7-layer OSI model in real-world Internet adoption?',
          bn: 'বাস্তব ক্ষেত্রে ইন্টারনেট প্রসারে ৭-স্তরের OSI মডেলের বদলে ৪-স্তরের TCP/IP মডেল কেন বিজয়ী হয়েছিল?'
        },
        options: [
          {
            en: 'TCP/IP was backed by working software implementations (BSD Unix sockets & ARPANET) while OSI was stalled in theoretical standardization committees',
            bn: 'TCP/IP বাস্তব সফটওয়্যার বাস্তবায়ন (BSD ইউনিক্স সকেট ও আরপানেট) দ্বারা সমর্থিত ছিল যখন OSI তাত্ত্বিক কমিটির জটিলতায় স্থবির ছিল'
          },
          {
            en: 'The OSI model was banned by international law in 1990',
            bn: '১৯৯০ সালে আন্তর্জাতিক আইন দ্বারা OSI মডেল নিষিদ্ধ করা হয়েছিল'
          },
          {
            en: 'The OSI model only supported copper telephone wires',
            bn: 'OSI মডেল কেবল তামার টেলিফোন তার সমর্থন করত'
          },
          {
            en: 'TCP/IP encrypts all network packets using quantum cryptography',
            bn: 'TCP/IP কোয়ান্টাম ক্রিপ্টোগ্রাফি দিয়ে সমস্ত প্যাকেট এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: '"Rough consensus and running code" drove TCP/IP adoption.',
          bn: '"চলন্ত কোড ও ঐকমত্য" মূলত TCP/IP কে বিজয়ী করেছিল।'
        },
        explanation: {
          en: 'TCP/IP succeeded because its implementers prioritized functional, open-source code and practical interoperability over academic perfection and cumbersome multi-year committee designs.',
          bn: 'TCP/IP সফল হয়েছিল কারণ এর নির্মাতারা তাত্ত্বিক জটিলতার চেয়ে বাস্তব ওপেন-সোর্স কোড ও কার্যকর সংযোগকে অগ্রাধিকার দিয়েছিলেন।'
        }
      },
      {
        id: 'tcp-q2',
        kind: 'mcq',
        question: {
          en: 'Which layer of the TCP/IP suite handles port numbers to direct traffic to specific software processes on a host?',
          bn: 'TCP/IP সুইটের কোন স্তরটি কম্পিউটারের নির্দিষ্ট সফটওয়্যার প্রসেসে ট্রাফিক পাঠাতে পোর্ট নম্বর পরিচালনা করে?'
        },
        options: [
          {
            en: 'Transport Layer (TCP / UDP)',
            bn: 'ট্রান্সপোর্ট স্তর (TCP / UDP)'
          },
          {
            en: 'Internet Layer (IP)',
            bn: 'ইন্টারনেট স্তর (IP)'
          },
          {
            en: 'Physical Link Layer',
            bn: 'ফিজিক্যাল লিংক স্তর'
          },
          {
            en: 'Hardware Bios Layer',
            bn: 'হার্ডওয়্যার বায়োস স্তর'
          }
        ],
        answer: 0,
        hint: {
          en: 'Ports belong to transport protocols.',
          bn: 'পোর্ট ট্রান্সপোর্ট প্রোটোকলের অন্তর্ভুক্ত।'
        },
        explanation: {
          en: 'The Transport Layer introduces 16-bit port numbers (0 to 65535) to multiplex and demultiplex connections to individual OS processes.',
          bn: 'Transport Layer ১৬-বিট পোর্ট নম্বর (০ থেকে ৬৫৫৩৫) ব্যবহার করে কম্পিউটারের নির্দিষ্ট অ্যাপ্লিকেশনে ডাটা পৌঁছে দেয়।'
        }
      },
      {
        id: 'tcp-q3',
        kind: 'mcq',
        question: {
          en: 'What is the primary role of the Link / Network Access Layer in TCP/IP?',
          bn: 'TCP/IP তে Link / Network Access Layer এর প্রধান ভূমিকা কী?'
        },
        options: [
          {
            en: 'Transmitting raw frames across the physical local network medium using hardware MAC addresses',
            bn: 'হার্ডওয়্যার MAC অ্যাড্রেস ব্যবহার করে লোকাল নেটওয়ার্কের ফিজিক্যাল মাধ্যমে কাঁচা ফ্রেম আদান-প্রদান করা'
          },
          {
            en: 'Managing website domain names and DNS servers',
            bn: 'ওয়েবসাইটের ডোমেন নেম এবং DNS সার্ভার পরিচালনা করা'
          },
          {
            en: 'Encrypting database passwords using bcrypt',
            bn: 'bcrypt দিয়ে ডাটাবেজের পাসওয়ার্ড এনক্রিপ্ট করা'
          },
          {
            en: 'Running SQL queries directly on storage disks',
            bn: 'স্টোরেজ ডিস্কে সরাসরি SQL কোয়েরি রান করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Link layer deals with physical wires and MAC addresses.',
          bn: 'লিংক লেয়ার লোকাল মাধ্যম ও MAC অ্যাড্রেস নিয়ে কাজ করে।'
        },
        explanation: {
          en: 'The Link Layer governs the transmission of frames between adjacent nodes on the same physical network segment (such as an Ethernet cable or Wi-Fi channel).',
          bn: 'Link Layer একই লোকাল নেটওয়ার্কের সংযুক্ত নোডগুলোর মাঝে ইথারনেট বা ওয়াই-ফাইয়ের মাধ্যমে ফ্রেম আদান-প্রদান নিশ্চিত করে।'
        }
      },
      {
        id: 'tcp-q4',
        kind: 'mcq',
        question: {
          en: 'What field in the IPv4 header prevents packets from circulating endlessly in routing loops?',
          bn: 'IPv4 হেডারের কোন ফিল্ডটি রাউটিং লুপে পড়ে প্যাকেটকে অনন্তকাল ধরে ঘুরতে বাধা দেয়?'
        },
        options: [
          {
            en: 'Time To Live (TTL), decremented by 1 at each router hop',
            bn: 'Time To Live (TTL), যা প্রতিটি রাউটার হপে ১ করে কমে যায়'
          },
          {
            en: 'Destination Port',
            bn: 'Destination Port'
          },
          {
            en: 'Checksum Lock',
            bn: 'Checksum Lock'
          },
          {
            en: 'Sequence Identifier',
            bn: 'Sequence Identifier'
          }
        ],
        answer: 0,
        hint: {
          en: 'TTL drops to 0, at which point the packet is discarded.',
          bn: 'TTL ০ তে নামলে প্যাকেটটি মুছে ফেলা হয়।'
        },
        explanation: {
          en: 'The TTL (Time To Live) field is an 8-bit counter decremented by 1 at every router hop. When it reaches 0, the packet is discarded and an ICMP Time Exceeded message is sent back.',
          bn: 'TTL ফিল্ড প্রতিটি রাউটার পার হওয়ার সময় ১ করে কমে; মান ০ হলে প্যাকেট ড্রপ করে ICMP সতর্কবার্তা পাঠানো হয়।'
        }
      },
      {
        id: 'tcp-q5',
        kind: 'mcq',
        question: {
          en: 'Which TCP/IP layer do user-facing protocols like HTTP/HTTPS, SSH, DNS, and WebSocket belong to?',
          bn: 'HTTP/HTTPS, SSH, DNS এবং WebSocket এর মতো প্রোটোকলগুলো TCP/IP এর কোন স্তরের অন্তর্ভুক্ত?'
        },
        options: [
          {
            en: 'Application Layer',
            bn: 'Application Layer'
          },
          {
            en: 'Internet Layer',
            bn: 'Internet Layer'
          },
          {
            en: 'Transport Layer',
            bn: 'Transport Layer'
          },
          {
            en: 'Link Layer',
            bn: 'Link Layer'
          }
        ],
        answer: 0,
        hint: {
          en: 'The layer directly interacting with software applications.',
          bn: 'সফটওয়্যার অ্যাপ্লিকেশনের সাথে সরাসরি যোগাযোগকারী স্তর।'
        },
        explanation: {
          en: 'HTTP, DNS, SSH, and WebSocket are Application Layer protocols providing user-facing network services directly to client and server software.',
          bn: 'HTTP, DNS, SSH এবং WebSocket হলো Application Layer এর প্রোটোকল যা সফটওয়্যারের সাথে সরাসরি নেটওয়ার্ক সংযোগ ঘটায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tcp-addressing',
    title: {
      en: 'IP Addressing & Subnetting: IPv4, CIDR Prefixes & IPv6',
      bn: 'IP অ্যাড্রেসিং ও সাবনেটিং: IPv4, CIDR প্রিফিক্স ও IPv6'
    }
  }
};
