import type { Lesson } from '../../../lib/types';

export const NetworkPortsLesson: Lesson = {
  slug: 'network-ports',
  tech: 'tcpip',
  title: {
    en: 'Network Ports & Sockets: Well-Known Ports, Ephemeral Ranges & NAT',
    bn: 'নেটওয়ার্ক পোর্ট ও সকেট: ওয়েল-নোন পোর্ট, এফেমারাল রেঞ্জ এবং NAT'
  },
  summary: {
    en: 'Master network transport endpoints: 16-bit port spaces (0-65535), Well-Known vs Registered vs Ephemeral ranges, socket 5-tuples, and Network Address Translation (NAT/PAT port forwarding).',
    bn: 'নেটওয়ার্ক ট্রান্সপোর্ট এন্ডপয়েন্টে দক্ষতা: ১৬-বিট পোর্ট স্পেস (০-৬৫৫৩৫), ওয়েল-নোন বনাম রেজিস্টার্ড বনাম এফেমারাল রেঞ্জ, সকেট ৫-টাপল এবং নেটওয়ার্ক অ্যাড্রেস ট্রান্সলেশন (NAT/PAT পোর্ট ফরোয়ার্ডিং)।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-a-port',
      text: {
        en: '1. What is a Network Port? The Socket 5-Tuple',
        bn: '১. নেটওয়ার্ক পোর্ট কী? সকেট ৫-টাপল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While an IP address delivers an IP packet to the correct computer host, it does not specify which application program should receive it. A network port is a 16-bit unsigned integer (ranging from 0 to 65535) used by the operating system kernel to multiplex network traffic across hundreds of concurrently running processes.',
        bn: 'আইপি অ্যাড্রেস কোনো প্যাকেটকে নির্দিষ্ট কম্পিউটারে পৌঁছে দেয় ঠিকই, কিন্তু কম্পিউটারের ভেতরের কোন সফটওয়্যারটি তা গ্রহণ করবে তা নির্দেশ করতে পারে না। নেটওয়ার্ক পোর্ট হলো একটি ১৬-বিট সংখ্যা (০ থেকে ৬৫৫৩৫ পর্যন্ত) যার সাহায্যে অপারেটিং সিস্টেম কার্নেল একই সাথে চলমান শত শত সফটওয়্যারের মধ্যে নেটওয়ার্ক ট্রাফিক ভাগ করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every network connection on the internet is uniquely identified by the socket 5-tuple:',
        bn: 'ইন্টারনেটের প্রতিটি নেটওয়ার্ক সংযোগ সকেট ৫-টাপল (Socket 5-Tuple) দ্বারা স্বতন্ত্রভাবে চিহ্নিত হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Protocol: Transport protocol (e.g. TCP or UDP).',
          bn: '১. Protocol: ট্রান্সপোর্ট প্রোটোকল (যেমন TCP বা UDP)।'
        },
        {
          en: '2. Source IP Address: IP address of the sending device.',
          bn: '২. Source IP Address: প্রেরক ডিভাইসের আইপি ঠিকানা।'
        },
        {
          en: '3. Source Port Number: Port dynamically assigned to the client application.',
          bn: '৩. Source Port Number: ক্লায়েন্ট অ্যাপ্লিকেশনের জন্য বরাদ্দকৃত পোর্ট।'
        },
        {
          en: '4. Destination IP Address: IP address of the target server.',
          bn: '৪. Destination IP Address: গন্তব্য সার্ভারের আইপি ঠিকানা।'
        },
        {
          en: '5. Destination Port Number: Target service listening port (e.g. 443 for HTTPS).',
          bn: '৫. Destination Port Number: গন্তব্য সার্ভিসে লিসেন করা পোর্ট (যেমন HTTPS এর জন্য ৪৪৩)।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'port-ranges-diagram',
      title: {
        en: 'IANA Port Number Ranges: Well-Known, Registered & Ephemeral',
        bn: 'IANA পোর্ট নম্বর পরিসীমা: ওয়েল-নোন, রেজিস্টার্ড ও এফেমারাল'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">IANA 16-Bit Port Space (0 to 65535)</text>' +
          '<!-- Range 1: Well-Known -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="230" height="330" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>' +
            '<text x="115" y="26" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">1. WELL-KNOWN PORTS</text>' +
            '<rect x="25" y="40" width="180" height="24" rx="4" fill="#450a0a"/>' +
            '<text x="115" y="56" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Range: 0 - 1023</text>' +
            '<text x="20" y="90" fill="#cbd5e1" font-size="10">&#x2022; Requires root/admin privilege</text>' +
            '<text x="20" y="112" fill="#cbd5e1" font-size="10">&#x2022; Standard Internet protocols</text>' +
            '<rect x="15" y="130" width="200" height="185" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="152" fill="#38bdf8" font-size="10" font-weight="bold">Port 22:  SSH Remote Login</text>' +
            '<text x="25" y="174" fill="#38bdf8" font-size="10" font-weight="bold">Port 25:  SMTP Mail Relay</text>' +
            '<text x="25" y="196" fill="#38bdf8" font-size="10" font-weight="bold">Port 53:  DNS Name Lookup</text>' +
            '<text x="25" y="218" fill="#38bdf8" font-size="10" font-weight="bold">Port 67/68: DHCP Assign</text>' +
            '<text x="25" y="240" fill="#38bdf8" font-size="10" font-weight="bold">Port 80:  HTTP Web Traffic</text>' +
            '<text x="25" y="262" fill="#38bdf8" font-size="10" font-weight="bold">Port 123: NTP Clock Sync</text>' +
            '<text x="25" y="284" fill="#38bdf8" font-size="10" font-weight="bold">Port 443: HTTPS Encrypted</text>' +
          '</g>' +
          '<!-- Range 2: Registered -->' +
          '<g transform="translate(285, 60)">' +
            '<rect width="230" height="330" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<text x="115" y="26" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">2. REGISTERED PORTS</text>' +
            '<rect x="25" y="40" width="180" height="24" rx="4" fill="#451a03"/>' +
            '<text x="115" y="56" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Range: 1024 - 49151</text>' +
            '<text x="20" y="90" fill="#cbd5e1" font-size="10">&#x2022; User-space software</text>' +
            '<text x="20" y="112" fill="#cbd5e1" font-size="10">&#x2022; Non-privileged servers</text>' +
            '<rect x="15" y="130" width="200" height="185" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="152" fill="#fbbf24" font-size="10" font-weight="bold">Port 3000:  Node/React Dev</text>' +
            '<text x="25" y="174" fill="#fbbf24" font-size="10" font-weight="bold">Port 3306:  MySQL Database</text>' +
            '<text x="25" y="196" fill="#fbbf24" font-size="10" font-weight="bold">Port 5432:  PostgreSQL DB</text>' +
            '<text x="25" y="218" fill="#fbbf24" font-size="10" font-weight="bold">Port 6379:  Redis In-Memory</text>' +
            '<text x="25" y="240" fill="#fbbf24" font-size="10" font-weight="bold">Port 8080:  Alternate Web</text>' +
            '<text x="25" y="262" fill="#fbbf24" font-size="10" font-weight="bold">Port 9092:  Apache Kafka</text>' +
            '<text x="25" y="284" fill="#fbbf24" font-size="10" font-weight="bold">Port 27017: MongoDB</text>' +
          '</g>' +
          '<!-- Range 3: Dynamic / Ephemeral -->' +
          '<g transform="translate(540, 60)">' +
            '<rect width="230" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="115" y="26" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">3. EPHEMERAL PORTS</text>' +
            '<rect x="25" y="40" width="180" height="24" rx="4" fill="#064e3b"/>' +
            '<text x="115" y="56" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">Range: 49152 - 65535</text>' +
            '<text x="20" y="90" fill="#cbd5e1" font-size="10">&#x2022; Dynamic client ports</text>' +
            '<text x="20" y="112" fill="#cbd5e1" font-size="10">&#x2022; Auto-assigned by OS</text>' +
            '<rect x="15" y="130" width="200" height="185" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="155" fill="#34d399" font-size="10">&#x2022; Short-lived temporary ports</text>' +
            '<text x="20" y="180" fill="#34d399" font-size="10">&#x2022; Client chooses random port</text>' +
            '<text x="20" y="205" fill="#34d399" font-size="10">&#x2022; e.g. Browser opens 52140</text>' +
            '<text x="20" y="230" fill="#34d399" font-size="10">&#x2022; Connects to Server 443</text>' +
            '<text x="20" y="255" fill="#34d399" font-size="10">&#x2022; Released on socket close</text>' +
            '<text x="20" y="280" fill="#94a3b8" font-size="9">&#x2022; Used for NAT/PAT routing</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'port-ranges-details',
      text: {
        en: '2. The Three Port Ranges Defined by IANA',
        bn: '২. IANA কর্তৃক নির্ধারিত তিনটি পোর্ট পরিসীমা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Internet Assigned Numbers Authority (IANA) divides the 65536 possible port numbers into three explicit tiers:',
        bn: 'ইন্টারনেট অ্যাসাইন্ড নাম্বারস অথরিটি (IANA) সম্ভাব্য ৬৫৫৩৬ টি পোর্ট নম্বরকে তিনটি নির্দিষ্ট স্তরে বিভক্ত করেছে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Well-Known Ports (0 – 1023): Reserved for foundational system protocols. On Unix and Linux systems, a process requires root administrator privileges to bind to ports under 1024.',
          bn: '১. ওয়েল-নোন পোর্ট (০ – ১০২৩): মৌলিক সিস্টেম সার্ভিসের জন্য সংরক্ষিত। ইউনিক্স ও লিনাক্সে ১০২৪ এর নিচের যেকোনো পোর্টে সফটওয়্যার চালু করতে রুট প্রিভিলেজ প্রয়োজন হয়।'
        },
        {
          en: '2. Registered Ports (1024 – 49151): Assigned to specific user application servers and databases (PostgreSQL 5432, Redis 6379, MySQL 3306). Any regular user process can bind to them.',
          bn: '২. রেজিস্টার্ড পোর্ট (১০২৪ – ৪৯১৫১): নির্দিষ্ট ব্যবহারকারী অ্যাপ্লিকেশন ও ডাটাবেজের জন্য নির্ধারিত (যেমন PostgreSQL ৫৪৩২, Redis ৬৩৭৯)। সাধারণ ইউজার যেকোনো সময় এগুলো ব্যবহার করতে পারে।'
        },
        {
          en: '3. Dynamic / Ephemeral Ports (49152 – 65535): Ephemeral ports are temporary numbers chosen on the fly by the client operating system kernel when initiating an outbound connection to an external server.',
          bn: '৩. ডায়নামিক বা এফেমারাল পোর্ট (৪৯১৫২ – ৬৫৫৩৫): এগুলো ক্ষণস্থায়ী পোর্ট নম্বর। ক্লায়েন্ট অপারেটিং সিস্টেম বাইরের কোনো সার্ভারের সাথে সংযোগ করার সময় নিজের জন্য সাময়িকভাবে এটি নির্ধারণ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'nat-pat',
      text: {
        en: '3. Network Address & Port Translation (NAT / PAT)',
        bn: '৩. নেটওয়ার্ক অ্যাড্রেস ও পোর্ট ট্রান্সলেশন (NAT / PAT)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because IPv4 addresses are exhausted, home and enterprise routers assign private addresses (such as 192.168.1.50) that cannot traverse the public internet. Port Address Translation (PAT) allows thousands of local LAN devices to share a single public WAN IP address. The router rewrites the internal client IP and ephemeral source port into the public IP and a unique router port in its stateful NAT table, routing returning packets back to the exact internal host.',
        bn: 'যেহেতু IPv4 অ্যাড্রেস শেষ হয়ে গেছে, তাই হোম ও অফিস রাউটারগুলো লোকাল ডিভাইসে প্রাইভেট আইপি (যেমন 192.168.1.50) প্রদান করে যা ইন্টারনেটে সরাসরি চলতে পারে না। পোর্ট অ্যাড্রেস ট্রান্সলেশন (PAT) হাজার হাজার লোকাল ডিভাইসকে মাত্র একটি পাবলিক আইপি শেয়ার করার সুবিধা দেয়। রাউটার তার NAT টেবিলে প্রেরকের আইপি ও পোর্ট সংরক্ষণ করে এবং পাবলিক আইপির মাধ্যমে ডাটা আদান-প্রদান সমন্বয় করে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Port Multiplexer & NAT Table Engine in TypeScript',
        bn: '৪. TypeScript এ পোর্ট মাল্টিপ্লেক্সার ও NAT টেবিল ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates socket 5-tuple lookup, port validation, and stateful Port Address Translation (PAT):',
        bn: 'নিচের TypeScript প্রোগ্রামটি সকেট ৫-টাপল লুকআপ, পোর্ট ভ্যালিডেশন এবং স্টেটফুল পোর্ট অ্যাড্রেস ট্রান্সলেশন (PAT) সিমুলেট করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of network socket 5-tuple routing, IANA port tier validation, and router NAT/PAT table mapping.',
        bn: 'নেটওয়ার্ক সকেট ৫-টাপল রাউটিং, IANA পোর্ট স্তর যাচাইকরণ এবং রাউটার NAT/PAT টেবিল ম্যাপিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Socket 5-Tuples and Stateful NAT/PAT Table

interface SocketFiveTuple {
  protocol: 'TCP' | 'UDP';
  srcIp: string;
  srcPort: number;
  dstIp: string;
  dstPort: number;
}

interface NatEntry {
  privateIp: string;
  privatePort: number;
  publicPort: number;
}

class NatRouter {
  public publicWanIp: string;
  private nextPublicPort: number = 49200;
  private natTable: Map<string, NatEntry> = new Map();

  constructor(publicWanIp: string) {
    this.publicWanIp = publicWanIp;
  }

  // Determine IANA Port Category
  static getPortTier(port: number): string {
    if (port >= 0 && port <= 1023) return 'Well-Known (Privileged / Root required)';
    if (port >= 1024 && port <= 49151) return 'Registered (User Application)';
    if (port >= 49152 && port <= 65535) return 'Ephemeral (Dynamic Client Port)';
    return 'Invalid Port Number';
  }

  // Outbound NAT translation: Private LAN -> Public WAN
  translateOutbound(tuple: SocketFiveTuple): SocketFiveTuple {
    const key = tuple.srcIp + ':' + tuple.srcPort;
    let entry = this.natTable.get(key);

    if (!entry) {
      entry = {
        privateIp: tuple.srcIp,
        privatePort: tuple.srcPort,
        publicPort: this.nextPublicPort++
      };
      this.natTable.set(key, entry);
    }

    return {
      protocol: tuple.protocol,
      srcIp: this.publicWanIp,
      srcPort: entry.publicPort,
      dstIp: tuple.dstIp,
      dstPort: tuple.dstPort
    };
  }
}

// Demonstration
const router = new NatRouter('203.0.113.10');

// Validate Port Tiers
console.log('Port 443 (HTTPS): ' + NatRouter.getPortTier(443));
console.log('Port 5432 (Postgres): ' + NatRouter.getPortTier(5432));
console.log('Port 51234 (Ephemeral): ' + NatRouter.getPortTier(51234));

// Outbound HTTPS request from internal Laptop (192.168.1.42:54321) to Web Server
const clientTuple: SocketFiveTuple = {
  protocol: 'TCP',
  srcIp: '192.168.1.42',
  srcPort: 54321,
  dstIp: '93.184.216.34',
  dstPort: 443
};

console.log('\\n--- NAT/PAT Translation ---');
console.log('Private Outbound: ' + clientTuple.srcIp + ':' + clientTuple.srcPort + ' -> ' + clientTuple.dstIp + ':' + clientTuple.dstPort);

const translated = router.translateOutbound(clientTuple);
console.log('Public Translated: ' + translated.srcIp + ':' + translated.srcPort + ' -> ' + translated.dstIp + ':' + translated.dstPort);`
    }
  ],
  exercises: [
    {
      id: 'net-ports-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the valid numerical range of port numbers in the TCP/IP networking stack?',
        bn: 'TCP/IP নেটওয়ার্কিং স্ট্যাকে পোর্ট নম্বরের বৈধ সাংখ্যিক পরিসীমা কত?'
      },
      options: [
        {
          en: '0 to 65535 (16-bit unsigned integer)',
          bn: '০ থেকে ৬৫৫৩৫ (১৬-বিট আনসাইন্ড ইন্টিজার)'
        },
        {
          en: '1 to 255 (8-bit integer)',
          bn: '১ থেকে ২৫৫ (৮-বিট ইন্টিজার)'
        },
        {
          en: '0 to 1000',
          bn: '০ থেকে ১০০০'
        },
        {
          en: 'Unlimited',
          bn: 'সীমাহীন'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 16-bit integer yields 2^16 = 65536 possibilities (0 to 65535).',
        bn: '১৬-বিট ইন্টিজারে ২^১৬ = ৬৫৫৩৬ টি সম্ভাবনা থাকে (০ থেকে ৬৫৫৩৫)।'
      },
      explanation: {
        en: 'Because the TCP and UDP header port fields are exactly 16 bits wide, the range of valid ports is 0 through 65535.',
        bn: 'যেহেতু TCP ও UDP হেডারে পোর্ট ফিল্ডের আকার ১৬ বিট, তাই পোর্ট নম্বর সর্বদা ০ থেকে ৬৫৫৩৫ এর মধ্যে সীমাবদ্ধ থাকে।'
      }
    },
    {
      id: 'net-ports-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which port range requires root or administrator privileges on Linux systems to bind a listening server?',
        bn: 'লিনাক্স সিস্টেমে কোনো লিসেনিং সার্ভার চালু করতে কোন পোর্ট রেঞ্জের জন্য রুট বা অ্যাডমিনিস্ট্রেটর প্রিভিলেজ আবশ্যক?'
      },
      options: [
        {
          en: 'Well-Known Ports (0 to 1023)',
          bn: 'ওয়েল-নোন পোর্ট (০ থেকে ১০২৩)'
        },
        {
          en: 'Registered Ports (1024 to 49151)',
          bn: 'রেজিস্টার্ড পোর্ট (১০২৪ থেকে ৪৯১৫১)'
        },
        {
          en: 'Ephemeral Ports (49152 to 65535)',
          bn: 'এফেমারাল পোর্ট (৪৯১৫২ থেকে ৬৫৫৩৫)'
        },
        {
          en: 'No ports require privileges on modern operating systems',
          bn: 'আধুনিক অপারেটিং সিস্টেমে কোনো পোর্টের জন্যই প্রিভিলেজ প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ports below 1024 are privileged to prevent unprivileged users from impersonating core services.',
        bn: '১০২৪ এর নিচের পোর্টগুলো প্রিভিলেজড যাতে সাধারণ ইউজার সার্ভিসের পরিচয় নকল করতে না পারে।'
      },
      explanation: {
        en: 'Ports 0 through 1023 are Well-Known privileged ports. On Unix-like systems, only root processes can bind to them to prevent rogue users from running fake system services.',
        bn: '০ থেকে ১০২৩ পর্যন্ত পোর্টগুলো সুরক্ষিত ওয়েল-নোন পোর্ট; এগুলো সাধারণ ব্যবহারকারীদের অবৈধ সেবা প্রদান করা থেকে বিরত রাখতে রুট প্রিভিলেজ দাবি করে।'
      }
    },
    {
      id: 'net-ports-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does Port Address Translation (PAT) allow 50 computers in a home network to browse the internet concurrently with only 1 public IP?',
        bn: 'পোর্ট অ্যাড্রেস ট্রান্সলেশন (PAT) কীভাবে একটি মাত্র পাবলিক আইপি দিয়ে বাড়ির ৫০টি কম্পিউটারকে একই সাথে ইন্টারনেট ব্যবহারের সুযোগ দেয়?'
      },
      options: [
        {
          en: 'The router maintains a stateful translation table mapping each private computer\'s internal IP and port to unique external ports on its single public IP',
          bn: 'রাউটার একটি স্টেটফুল টেবিল রাখে যা প্রতিটি লোকাল কম্পিউটারের আইপি ও পোর্টকে তার পাবলিক আইপির পৃথক পৃথক পোর্টে ম্যাপ করে'
        },
        {
          en: 'By forcing all 50 computers to take turns using the connection 1 minute at a time',
          bn: '৫০টি কম্পিউটারকে এক মিনিট করে পালাক্রমে ইন্টারনেট ব্যবহারের বাধ্যবাধকতা দিয়ে'
        },
        {
          en: 'By deleting the destination IP address from the packets',
          bn: 'প্যাকেট থেকে গন্তব্য আইপি অ্যাড্রেস মুছে ফেলে'
        },
        {
          en: 'By compressing the Wi-Fi radio frequencies into sound waves',
          bn: 'ওয়াই-ফাই রেডিও ফ্রিকোয়েন্সিকে শব্দ তরঙ্গে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'PAT multiplexes multiple private sockets over one public IP using distinct router ports.',
        bn: 'PAT বিভিন্ন রাউটার পোর্টের মাধ্যমে একটিমাত্র পাবলিক আইপিতে একাধিক সকেট ভাগ করে দেয়।'
      },
      explanation: {
        en: 'PAT (NAPT) rewrites the source port of outbound packets, tracking the mapping in a translation table so incoming responses are forwarded to the correct local computer.',
        bn: 'PAT বাইরের দিকে পাঠানো প্যাকেটের সোর্স পোর্ট পরিবর্তন করে এবং টেবিলে তথ্য রেখে উত্তর আসার পর সঠিক লোকাল কম্পিউটারে পৌঁছে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-network-ports',
    title: {
      en: 'Network Ports and Socket Multiplexing Quiz',
      bn: 'নেটওয়ার্ক পোর্ট ও সকেট মাল্টিপ্লেক্সিং কুইজ'
    },
    questions: [
      {
        id: 'np-q1',
        kind: 'mcq',
        question: {
          en: 'What are the 5 components that make up a socket 5-tuple in TCP/IP networking?',
          bn: 'TCP/IP নেটওয়ার্কিংয়ে সকেট ৫-টাপল কোন ৫টি উপাদান নিয়ে গঠিত হয়?'
        },
        options: [
          {
            en: 'Protocol, Source IP, Source Port, Destination IP, Destination Port',
            bn: 'প্রোটোকল, সোর্স আইপি, সোর্স পোর্ট, ডেস্টিনেশন আইপি, ডেস্টিনেশন পোর্ট'
          },
          {
            en: 'MAC Address, Router Model, Wi-Fi SSID, Gateway, DNS',
            bn: 'ম্যাক অ্যাড্রেস, রাউটার মডেল, ওয়াই-ফাই SSID, গেটওয়ে, DNS'
          },
          {
            en: 'Username, Password, Cookie, Session ID, Token',
            bn: 'ইউজারনেম, পাসওয়ার্ড, কুকি, সেশন আইডি, টোকেন'
          },
          {
            en: 'HTML, CSS, JavaScript, WebAssembly, SQL',
            bn: 'এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট, ওয়েবঅ্যাসেম্বলি, এসকিউএল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Protocol + 2 IPs + 2 Ports.',
          bn: 'প্রোটোকল + ২টি আইপি + ২টি পোর্ট।'
        },
        explanation: {
          en: 'A 5-tuple consists of: Protocol (TCP/UDP), Source IP, Source Port, Destination IP, and Destination Port, uniquely identifying any connection across the global internet.',
          bn: 'সকেট ৫-টাপলে প্রোটোকল, সোর্স ও ডেস্টিনেশন আইপি এবং সোর্স ও ডেস্টিনেশন পোর্ট থাকে; এটি বিশ্বজুড়ে যেকোনো সংযোগকে স্বতন্ত্র পরিচয় দেয়।'
        }
      },
      {
        id: 'np-q2',
        kind: 'mcq',
        question: {
          en: 'Which well-known port is standardly used for secure, encrypted web browsing (HTTPS)?',
          bn: 'নিরাপদ ও এনক্রিপ্ট করা ওয়েব ব্রাউজিংয়ের (HTTPS) জন্য সাধারণত কোন ওয়েল-নোন পোর্টটি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: '443',
            bn: '৪৪৩'
          },
          {
            en: '80',
            bn: '৮০'
          },
          {
            en: '21',
            bn: '২১'
          },
          {
            en: '25',
            bn: '২৫'
          }
        ],
        answer: 0,
        hint: {
          en: 'Port 80 is unencrypted HTTP; port 443 is encrypted HTTPS.',
          bn: '৮০ হলো সাধারণ HTTP; ৪৪৩ হলো এনক্রিপ্ট করা HTTPS।'
        },
        explanation: {
          en: 'Port 443 is the standard TCP port designated for TLS/SSL-encrypted HTTP communications (HTTPS).',
          bn: 'TLS/SSL এনক্রিপ্টেড ওয়েব যোগাযোগের (HTTPS) জন্য ৪৪৩ নম্বর পোর্টটি সার্বজনীনভাবে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'np-q3',
        kind: 'mcq',
        question: {
          en: 'What default port does the PostgreSQL relational database listen on?',
          bn: 'PostgreSQL রিলেশনাল ডাটাবেজ ডিফল্টভাবে কোন পোর্টে লিসেন করে?'
        },
        options: [
          {
            en: '5432',
            bn: '৫৪৩২'
          },
          {
            en: '3306',
            bn: '৩৩০৬'
          },
          {
            en: '6379',
            bn: '৬৩৭৯'
          },
          {
            en: '27017',
            bn: '২৭০১৭'
          }
        ],
        answer: 0,
        hint: {
          en: 'MySQL uses 3306; PostgreSQL uses 5432.',
          bn: 'MySQL ৩৩০৬ ব্যবহার করে; PostgreSQL ৫৪৩২ ব্যবহার করে।'
        },
        explanation: {
          en: 'Port 5432 is the official registered port for PostgreSQL database servers (3306 is MySQL, 6379 is Redis).',
          bn: '৫৪৩২ হলো PostgreSQL সার্ভারের অফিসিয়াল রেজিস্টার্ড পোর্ট (৩৩০৬ হলো MySQL এবং ৬৩৭৯ হলো Redis)।'
        }
      },
      {
        id: 'np-q4',
        kind: 'mcq',
        question: {
          en: 'What is the standard IANA range for dynamic or ephemeral client ports?',
          bn: 'ডায়নামিক বা এফেমারাল ক্লায়েন্ট পোর্টের জন্য আদর্শ IANA রেঞ্জ কোনটি?'
        },
        options: [
          {
            en: '49152 to 65535',
            bn: '৪৯১৫২ থেকে ৬৫৫৩৫'
          },
          {
            en: '0 to 1023',
            bn: '০ থেকে ১০২৩'
          },
          {
            en: '1024 to 2048',
            bn: '১০২৪ থেকে ২০৪৮'
          },
          {
            en: '10000 to 20000',
            bn: '১০০০০ থেকে ২০০০০'
          }
        ],
        answer: 0,
        hint: {
          en: 'The top range of 16-bit ports (49152 to 65535).',
          bn: '১৬-বিট পোর্টের সর্বোচ্চ ধাপ (৪৯১৫২ থেকে ৬৫৫৩৫)।'
        },
        explanation: {
          en: 'IANA specifies ports 49152 through 65535 as ephemeral or dynamic ports, allocated temporarily for outbound client connections.',
          bn: 'IANA এর নিয়ম অনুযায়ী ৪৯১৫২ থেকে ৬৫৫৩৫ পোর্টগুলো সাময়িক বা এফেমারাল হিসেবে ক্লায়েন্টের জন্য নির্ধারিত থাকে।'
        }
      },
      {
        id: 'np-q5',
        kind: 'mcq',
        question: {
          en: 'Can two different client programs on the same laptop connect to port 443 of the exact same web server simultaneously?',
          bn: 'একই ল্যাপটপের দুটি ভিন্ন সফটওয়্যার কি একই সময়ে একই ওয়েব সার্ভারের ৪৪৩ নম্বর পোর্টে সংযোগ করতে পারে?'
        },
        options: [
          {
            en: 'Yes, because the operating system assigns distinct ephemeral source ports to each client, creating unique 5-tuples',
            bn: 'হ্যাঁ, কারণ অপারেটিং সিস্টেম প্রতিটি সফটওয়্যারের জন্য আলাদা সোর্স পোর্ট দেয়, ফলে তাদের ৫-টাপল স্বতন্ত্র থাকে'
          },
          {
            en: 'No, a web server can only accept one connection at a time from any single computer',
            bn: 'না, ওয়েব সার্ভার যেকোনো কম্পিউটার থেকে একবারে কেবল একটি সংযোগ গ্রহণ করতে পারে'
          },
          {
            en: 'Only if the laptop has two separate Wi-Fi antennas installed',
            bn: 'কেবলমাত্র যদি ল্যাপটপে দুটি পৃথক ওয়াই-ফাই অ্যান্টেনা থাকে'
          },
          {
            en: 'Only if the second connection is made over Bluetooth',
            bn: 'কেবলমাত্র যদি দ্বিতীয় সংযোগটি ব্লুটুথের মাধ্যমে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The 5-tuple remains unique because each connection has a different source port.',
          bn: 'সোর্স পোর্ট ভিন্ন হওয়ায় প্রতিটি সংযোগের ৫-টাপল অনন্য থাকে।'
        },
        explanation: {
          en: 'Each outbound connection gets a unique local ephemeral port (e.g. 50001 and 50002). Because the 5-tuples differ in source port, both connections operate concurrently without collision.',
          bn: 'প্রতিটি সংযোগের জন্য ওএস ভিন্ন ভিন্ন এফেমারাল সোর্স পোর্ট বরাদ্দ করে; ফলে ৫-টাপল আলাদা থাকায় কোনো সংঘাত ছাড়াই উভয়টি একসাথে চলতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tcpip-capstone',
    title: {
      en: 'TCP/IP Capstone: High-Throughput System Tuning & Packet Analysis',
      bn: 'TCP/IP ক্যাপস্টোন: হাই-থ্রুপুট সিস্টেম টিউনিং ও প্যাকেট বিশ্লেষণ'
    }
  }
};
