import type { Lesson } from '../../../lib/types';

export const TcpAddressingLesson: Lesson = {
  slug: 'tcp-addressing',
  tech: 'tcpip',
  title: {
    en: 'IP Addressing & Subnetting: IPv4, CIDR Prefixes & IPv6',
    bn: 'IP অ্যাড্রেসিং ও সাবনেটিং: IPv4, CIDR প্রিফিক্স ও IPv6'
  },
  summary: {
    en: 'Master Internet Protocol addressing: 32-bit IPv4 binary math, Classless Inter-Domain Routing (CIDR), network and host ID separation via subnet masks, private RFC 1918 ranges, and 128-bit IPv6 architecture.',
    bn: 'ইন্টারনেট প্রোটোকল অ্যাড্রেসিংয়ে দক্ষতা: ৩২-বিট IPv4 বাইনারি গণনা, ক্লাসলেস ইন্টার-ডোমেন রাউটিং (CIDR), সাবনেট মাস্ক দিয়ে নেটওয়ার্ক ও হোস্ট পৃথকীকরণ, প্রাইভেট RFC 1918 রেঞ্জ এবং ১২৮-বিট IPv6 আর্কিটেকচার।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'ipv4-architecture',
      text: {
        en: '1. IPv4 Structure & Binary Octet Arithmetic',
        bn: '১. IPv4 এর গঠন এবং বাইনারি অকটেট গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every device connected to the Internet requires an IP address for packet routing. An IPv4 address is a 32-bit binary integer. To make it human-readable, it is formatted as dotted-decimal notation: 4 octets of 8 bits each, separated by dots (e.g., 192.168.1.1).',
        bn: 'ইন্টারনেটে যুক্ত প্রতিটি ডিভাইসের প্যাকেট রাউটিংয়ের জন্য একটি আইপি অ্যাড্রেস প্রয়োজন। একটি IPv4 অ্যাড্রেস হলো ৩২-বিট বাইনারি পূর্ণসংখ্যা। মানুষের পড়ার সুবিধার্থে এটিকে ডটেড-ডেসিমেল ফরম্যাটে লেখা হয়: ৮ বিটের ৪ টি অকটেট ডট দিয়ে আলাদা করা থাকে (যেমন ১৯২.১৬৮.১.১)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because each octet contains 8 bits, values range from 0 (00000000 in binary) to 255 (11111111 in binary). Across all 32 bits, IPv4 supports a theoretical maximum of 4,294,967,296 unique addresses.',
        bn: 'যেহেতু প্রতিটি অকটেটে ৮ টি বিট থাকে, তাই প্রতিটির মান ০ (বাইনারিতে 00000000) থেকে ২৫৫ (বাইনারিতে 11111111) পর্যন্ত হতে পারে। ৩২ বিটের সমন্বয়ে IPv4 তাত্ত্বিকভাবে সর্বোচ্চ ৪,২৯৪,৯৬৭,২৯৬ টি ইউনিক ঠিকানা দিতে পারে।'
      }
    },
    {
      type: 'visual',
      id: 'cidr-subnet-diagram',
      title: {
        en: 'IPv4 Subnet Masking: Network ID vs Host ID Separation',
        bn: 'IPv4 সাবনেট মাস্কিং: নেটওয়ার্ক ও হোস্ট আইডি পৃথকীকরণ'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">IPv4 Addressing &amp; Subnetting Math (CIDR /24)</text>' +
          '<!-- Top: IP Address in Decimal & Binary -->' +
          '<g transform="translate(60, 55)">' +
            '<rect width="680" height="85" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="25" y="28" fill="#60a5fa" font-size="12" font-weight="bold">Host IP: 192.168.1.150</text>' +
            '<rect x="25" y="40" width="150" height="32" rx="4" fill="#0f172a"/>' +
            '<text x="100" y="60" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle">11000000 (192)</text>' +
            '<rect x="185" y="40" width="150" height="32" rx="4" fill="#0f172a"/>' +
            '<text x="260" y="60" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle">10101000 (168)</text>' +
            '<rect x="345" y="40" width="150" height="32" rx="4" fill="#0f172a"/>' +
            '<text x="420" y="60" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle">00000001 (1)</text>' +
            '<rect x="505" y="40" width="150" height="32" rx="4" fill="#0f172a"/>' +
            '<text x="580" y="60" fill="#fbbf24" font-size="11" font-family="monospace" text-anchor="middle">10010110 (150)</text>' +
          '</g>' +
          '<!-- Middle: Subnet Mask /24 -->' +
          '<g transform="translate(60, 155)">' +
            '<rect width="680" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="25" y="28" fill="#34d399" font-size="12" font-weight="bold">Subnet Mask: 255.255.255.0 (/24 Prefix = 24 Ones)</text>' +
            '<rect x="25" y="40" width="150" height="32" rx="4" fill="#064e3b"/>' +
            '<text x="100" y="60" fill="#6ee7b7" font-size="11" font-family="monospace" text-anchor="middle">11111111 (255)</text>' +
            '<rect x="185" y="40" width="150" height="32" rx="4" fill="#064e3b"/>' +
            '<text x="260" y="60" fill="#6ee7b7" font-size="11" font-family="monospace" text-anchor="middle">11111111 (255)</text>' +
            '<rect x="345" y="40" width="150" height="32" rx="4" fill="#064e3b"/>' +
            '<text x="420" y="60" fill="#6ee7b7" font-size="11" font-family="monospace" text-anchor="middle">11111111 (255)</text>' +
            '<rect x="505" y="40" width="150" height="32" rx="4" fill="#78350f"/>' +
            '<text x="580" y="60" fill="#fde68a" font-size="11" font-family="monospace" text-anchor="middle">00000000 (0)</text>' +
          '</g>' +
          '<!-- Bottom: Bitwise AND Result -->' +
          '<g transform="translate(60, 255)">' +
            '<rect width="680" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<text x="25" y="28" fill="#fbbf24" font-size="12" font-weight="bold">Bitwise AND Operation (IP &amp; Mask = Network ID):</text>' +
            '<rect x="25" y="40" width="470" height="34" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="260" y="62" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Network Address: 192.168.1.0 (First 24 bits fixed)</text>' +
            '<rect x="505" y="40" width="150" height="34" rx="4" fill="#0f172a" stroke="#f59e0b"/>' +
            '<text x="580" y="62" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Host: .150</text>' +
            '<line x1="25" y1="88" x2="655" y2="88" stroke="#334155"/>' +
            '<text x="25" y="108" fill="#cbd5e1" font-size="10">&#x2022; Usable Host Range: 192.168.1.1 to 192.168.1.254 (2^8 - 2 = 254 usable IPs)</text>' +
            '<text x="25" y="128" fill="#f87171" font-size="10">&#x2022; Broadcast Address: 192.168.1.255 (All host bits set to 1; reserved for LAN broadcast)</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'cidr-subnets',
      text: {
        en: '2. Subnet Masks & Classless Inter-Domain Routing (CIDR)',
        bn: '২. সাবনেট মাস্ক এবং ক্লাসলেস ইন্টার-ডোমেন রাউটিং (CIDR)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A solitary IP address is ambiguous without its Subnet Mask. The subnet mask uses consecutive 1s to define the Network portion and trailing 0s to designate the Host portion.',
        bn: 'সাবনেট মাস্ক ছাড়া কোনো একক আইপি অ্যাড্রেস অপূর্ণাঙ্গ। সাবনেট মাস্ক একগুচ্ছ ১ দিয়ে নেটওয়ার্ক অংশ এবং শেষের ০ দিয়ে হোস্ট অংশ আলাদা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Classless Inter-Domain Routing (CIDR) denotes the subnet mask by appending a forward slash followed by the count of leading 1 bits:',
        bn: 'ক্লাসলেস ইন্টার-ডোমেন রাউটিং (CIDR) স্লাশ চিহ্নের পর ১ বিটের সংখ্যা লিখে সাবনেট মাস্ক প্রকাশ করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. /24 Prefix (255.255.255.0): 24 network bits, 8 host bits. Provides 2^8 - 2 = 254 usable host addresses.',
          bn: '১. /২৪ প্রিফিক্স (255.255.255.0): ২৪ টি নেটওয়ার্ক বিট ও ৮ টি হোস্ট বিট। এতে ২^৮ - ২ = ২৫৪ টি ব্যবহারযোগ্য হোস্ট আইপি পাওয়া যায়।'
        },
        {
          en: '2. /16 Prefix (255.255.0.0): 16 network bits, 16 host bits. Provides 2^16 - 2 = 65,534 usable host addresses.',
          bn: '২. /১৬ প্রিফিক্স (255.255.0.0): ১৬ টি নেটওয়ার্ক বিট ও ১৬ টি হোস্ট বিট। এতে ২^১৬ - ২ = ৬৫,৫৩৪ টি ব্যবহারযোগ্য হোস্ট আইপি পাওয়া যায়।'
        },
        {
          en: '3. Why subtract 2?: In every IPv4 subnet, the first address (all host bits 0) represents the Network itself, and the final address (all host bits 1) is reserved for the Broadcast address.',
          bn: '৩. কেন ২ টি বাদ দেওয়া হয়?: প্রতিটি সাবনেটে প্রথম ঠিকানাটি (হোস্ট বিট সব ০) নেটওয়ার্ক নির্দেশ করে এবং শেষ ঠিকানাটি (হোস্ট বিট সব ১) ব্রডকাস্টের জন্য সংরক্ষিত থাকে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'private-and-ipv6',
      text: {
        en: '3. Private RFC 1918 Ranges & 128-Bit IPv6',
        bn: '৩. প্রাইভেট RFC 1918 রেঞ্জ এবং ১২৮-বিট IPv6'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To prevent global address exhaustion, RFC 1918 reserved 3 non-routable private IP address blocks for internal LAN networks: 10.0.0.0/8 (enterprise), 172.16.0.0/12 (medium business), and 192.168.0.0/16 (home routers). Network Address Translation (NAT) translates these private IPs into a single public IP at the router boundary.',
        bn: 'বিশ্বজুড়ে আইপির সংকট ঠেকাতে RFC 1918 লোকাল নেটওয়ার্কের জন্য ৩ টি প্রাইভেট আইপি ব্লক নির্ধারণ করেছে: 10.0.0.0/8 (বড় প্রতিষ্ঠান), 172.16.0.0/12 এবং 192.168.0.0/16 (হোম রাউটার)। নেটওয়ার্ক অ্যাড্রেস ট্রান্সলেশন (NAT) রাউটার গেটওয়েতে এই প্রাইভেট আইপিগুলোকে একক পাবলিক আইপিতে রূপান্তর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The permanent solution to address depletion is IPv6, offering a 128-bit address space (approx 3.4 x 10^38 addresses) written as 8 hexadecimal groups separated by colons (e.g. 2001:0db8:85a3::8a2e:0370:7334), eliminating the need for NAT altogether.',
        bn: 'আইপি ঘাটতির স্থায়ী সমাধান হলো IPv6, যা ১২৮-বিট অ্যাড্রেস স্পেস (প্রায় ৩.৪ x ১০^৩৮ টি ঠিকানা) প্রদান করে। কোলন দ্বারা বিভক্ত ৮ টি হেক্সাডেসিমেল ব্লকে এটি লেখা হয় (যেমন 2001:0db8:85a3::8a2e:0370:7334), যা NAT এর বাধ্যবাধকতা পুরোপুরি দূর করে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. IPv4 Subnetting & CIDR Calculator Engine in TypeScript',
        bn: '৪. TypeScript এ IPv4 সাবনেটিং ও CIDR ক্যালকুলেটর ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the network address, broadcast address, and usable host range from any IPv4 address and CIDR prefix:',
        bn: 'নিচের TypeScript প্রোগ্রামটি যেকোনো IPv4 অ্যাড্রেস এবং CIDR প্রিফিক্স থেকে নেটওয়ার্ক অ্যাড্রেস, ব্রডকাস্ট অ্যাড্রেস এবং ব্যবহারযোগ্য আইপির সীমা নির্ণয় করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of IPv4 bitwise masking, network address calculation, and host range sizing.',
        bn: 'IPv4 বিটওয়াইজ মাস্কিং, নেটওয়ার্ক অ্যাড্রেস গণনা এবং হোস্ট রেঞ্জের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of IPv4 Subnetting and CIDR Calculation

class CidrCalculator {
  // Convert dotted decimal "192.168.1.150" to 32-bit integer
  static ipToInt(ipStr: string): number {
    return ipStr
      .split('.')
      .reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
  }

  // Convert 32-bit unsigned int back to dotted decimal
  static intToIp(intVal: number): string {
    return [
      (intVal >>> 24) & 255,
      (intVal >>> 16) & 255,
      (intVal >>> 8) & 255,
      intVal & 255
    ].join('.');
  }

  // Calculate Subnet parameters
  static calculate(cidrNotation: string) {
    const [ipStr, prefixStr] = cidrNotation.split('/');
    const prefix = parseInt(prefixStr, 10);
    const ipInt = this.ipToInt(ipStr);

    // Subnet mask: 'prefix' ones followed by '32 - prefix' zeros
    const maskInt = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;

    // Network address: Bitwise AND
    const networkInt = (ipInt & maskInt) >>> 0;

    // Broadcast address: Network with all host bits set to 1
    const hostBitsCount = 32 - prefix;
    const broadcastInt = (networkInt | (~maskInt >>> 0)) >>> 0;

    // Usable hosts: 2^(hostBits) - 2
    const totalUsableHosts = prefix >= 31 ? 0 : Math.pow(2, hostBitsCount) - 2;

    const firstUsableHost = this.intToIp(networkInt + 1);
    const lastUsableHost = this.intToIp(broadcastInt - 1);

    return {
      cidr: cidrNotation,
      subnetMask: this.intToIp(maskInt),
      networkAddress: this.intToIp(networkInt),
      broadcastAddress: this.intToIp(broadcastInt),
      firstHost: firstUsableHost,
      lastHost: lastUsableHost,
      usableHostCapacity: totalUsableHosts
    };
  }
}

// Demonstration
const officeSubnet = CidrCalculator.calculate('192.168.1.150/24');
console.log('Subnet Mask: ' + officeSubnet.subnetMask); // -> 255.255.255.0
console.log('Network Address: ' + officeSubnet.networkAddress); // -> 192.168.1.0
console.log('Broadcast Address: ' + officeSubnet.broadcastAddress); // -> 192.168.1.255
console.log('First Usable Host: ' + officeSubnet.firstHost); // -> 192.168.1.1
console.log('Last Usable Host: ' + officeSubnet.lastHost); // -> 192.168.1.254
console.log('Total Usable Host Capacity: ' + officeSubnet.usableHostCapacity); // -> 254`
    }
  ],
  exercises: [
    {
      id: 'tcp-addr-ex-1',
      kind: 'mcq',
      question: {
        en: 'How many total bits make up a standard IPv4 address?',
        bn: 'একটি মানসম্মত IPv4 অ্যাড্রেস মোট কত বিট নিয়ে গঠিত?'
      },
      options: [
        {
          en: '32 bits (4 octets of 8 bits each)',
          bn: '৩২ বিট (প্রতিটিতে ৮ বিট করে ৪ টি অকটেট)'
        },
        {
          en: '128 bits',
          bn: '১২৮ বিট'
        },
        {
          en: '64 bits',
          bn: '৬৪ বিট'
        },
        {
          en: '16 bits',
          bn: '১৬ বিট'
        }
      ],
      answer: 0,
      hint: {
        en: '4 octets with 8 bits each: 4 * 8.',
        bn: 'প্রতিটিতে ৮ বিট করে ৪ টি অকটেট: ৪ * ৮।'
      },
      explanation: {
        en: 'IPv4 addresses are 32 bits in total length, divided into 4 octets of 8 bits represented in dotted-decimal format.',
        bn: 'IPv4 অ্যাড্রেসের মোট দৈর্ঘ্য ৩২ বিট, যা ৮ বিটের ৪ টি অকটেটে ডটেড-ডেসিমেল ফরম্যাটে বিভক্ত থাকে।'
      }
    },
    {
      id: 'tcp-addr-ex-2',
      kind: 'mcq',
      question: {
        en: 'How many usable host IP addresses are available in a standard /24 IPv4 subnet?',
        bn: 'একটি সাধারণ /২৪ IPv4 সাবনেটে কতটি ব্যবহারযোগ্য হোস্ট আইপি পাওয়া যায়?'
      },
      options: [
        {
          en: '254 usable hosts (2^8 = 256 minus network and broadcast addresses)',
          bn: '২৫৪ টি ব্যবহারযোগ্য হোস্ট (২^৮ = ২৫৬ থেকে নেটওয়ার্ক ও ব্রডকাস্ট বাদে)'
        },
        {
          en: '256 usable hosts',
          bn: '২৫৬ টি ব্যবহারযোগ্য হোস্ট'
        },
        {
          en: '65,534 usable hosts',
          bn: '৬৫,৫৩৪ টি ব্যবহারযোগ্য হোস্ট'
        },
        {
          en: '1024 usable hosts',
          bn: '১০২৪ টি ব্যবহারযোগ্য হোস্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Subtract 2 addresses: network address (.0) and broadcast address (.255).',
        bn: '২ টি ঠিকানা বাদ দিন: নেটওয়ার্ক ঠিকানা (.০) এবং ব্রডকাস্ট ঠিকানা (.২৫৫)।'
      },
      explanation: {
        en: 'In a /24 subnet, there are 8 host bits (2^8 = 256). Subtracting 2 (one for the network address and one for broadcast) yields 254 usable hosts.',
        bn: 'একটি /২৪ সাবনেটে ৮ টি হোস্ট বিট থাকে (২^৮ = ২৫৬)। নেটওয়ার্ক ও ব্রডকাস্টের জন্য ২টি বাদ দিলে ২৫৪ টি ব্যবহারযোগ্য ঠিকানা পাওয়া যায়।'
      }
    },
    {
      id: 'tcp-addr-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which of the following is a private, non-routable IPv4 address block defined by RFC 1918 for internal LAN networks?',
        bn: 'লোকাল ল্যান (LAN) নেটওয়ার্কের জন্য RFC 1918 দ্বারা নির্ধারিত প্রাইভেট ও নন-রাউটেবল IPv4 ঠিকানা ব্লক কোনটি?'
      },
      options: [
        {
          en: '192.168.0.0/16 (along with 10.0.0.0/8 and 172.16.0.0/12)',
          bn: '192.168.0.0/16 (সেই সাথে 10.0.0.0/8 এবং 172.16.0.0/12)'
        },
        {
          en: '8.8.8.8/32',
          bn: '8.8.8.8/32'
        },
        {
          en: '1.1.1.1/24',
          bn: '1.1.1.1/24'
        },
        {
          en: '142.250.190.46/32',
          bn: '142.250.190.46/32'
        }
      ],
      answer: 0,
      hint: {
        en: '192.168.x.x is common in home Wi-Fi routers.',
        bn: '192.168.x.x সাধারণত হোম ওয়াই-ফাই রাউটারে ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'RFC 1918 designates 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 as private IP blocks that are non-routable on the public Internet.',
        bn: 'RFC 1918 অনুযায়ী 10.0.0.0/8, 172.16.0.0/12 এবং 192.168.0.0/16 হলো প্রাইভেট আইপি যা পাবলিক ইন্টারনেটে সরাসরি রাউট হয় না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tcp-addressing',
    title: {
      en: 'IP Addressing and Subnetting Quiz',
      bn: 'IP অ্যাড্রেসিং ও সাবনেটিং কুইজ'
    },
    questions: [
      {
        id: 'addr-q1',
        kind: 'mcq',
        question: {
          en: 'What mathematical bitwise operation does a network router perform between an IP address and a Subnet Mask to extract the Network ID?',
          bn: 'নেটওয়ার্ক আইডি বের করতে একটি নেটওয়ার্ক রাউটার আইপি অ্যাড্রেস এবং সাবনেট মাস্কের মাঝে কোন গাণিতিক বিটওয়াইজ অপারেশন সম্পন্ন করে?'
        },
        options: [
          {
            en: 'Bitwise AND',
            bn: 'Bitwise AND'
          },
          {
            en: 'Bitwise XOR',
            bn: 'Bitwise XOR'
          },
          {
            en: 'Bitwise OR',
            bn: 'Bitwise OR'
          },
          {
            en: 'Bitwise NOT',
            bn: 'Bitwise NOT'
          }
        ],
        answer: 0,
        hint: {
          en: '1 AND 1 = 1; anything AND 0 = 0.',
          bn: '১ AND ১ = ১; যেকোনো কিছুর সাথে ০ গুণ হলে ০ হয়।'
        },
        explanation: {
          en: 'Routers perform a bitwise AND between the destination IP and the subnet mask. Host bits (masked with 0) are zeroed out, revealing the pure Network ID.',
          bn: 'রাউটার আইপি এবং সাবনেট মাস্কের মাঝে Bitwise AND চালায়; ফলে হোস্ট বিটগুলো ০ হয়ে নিখুঁত নেটওয়ার্ক আইডি বের হয়ে আসে।'
        }
      },
      {
        id: 'addr-q2',
        kind: 'mcq',
        question: {
          en: 'How many total bits are used in an IPv6 address?',
          bn: 'একটি IPv6 অ্যাড্রেসে মোট কত বিট ব্যবহৃত হয়?'
        },
        options: [
          {
            en: '128 bits (represented in 8 hexadecimal groups)',
            bn: '১২৮ বিট (৮ টি হেক্সাডেসিমেল ব্লকে উপস্থাপিত)'
          },
          {
            en: '32 bits',
            bn: '৩২ বিট'
          },
          {
            en: '64 bits',
            bn: '৬৪ বিট'
          },
          {
            en: '256 bits',
            bn: '২৫৬ বিট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Four times as many bits as IPv4.',
          bn: 'IPv4 এর চেয়ে চার গুণ বেশি বিট।'
        },
        explanation: {
          en: 'IPv6 uses 128-bit addresses, expanding the available namespace to approximately 3.4 x 10^38 unique addresses to solve IPv4 exhaustion permanently.',
          bn: 'IPv6 ১২৮-বিট অ্যাড্রেস ব্যবহার করে এবং প্রায় ৩.৪ x ১০^৩৮ টি ঠিকানা দেওয়ার ক্ষমতা রাখে।'
        }
      },
      {
        id: 'addr-q3',
        kind: 'mcq',
        question: {
          en: 'In IPv6 notation, what does a double colon (::) represent?',
          bn: 'IPv6 নোটেশনে ডাবল কোলন (::) কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'A contiguous run of one or more 16-bit blocks of all zeros (permitted only once per address)',
            bn: 'সব শূন্য বিশিষ্ট এক বা একাধিক ১৬-বিট ব্লকের সংক্ষিপ্ত রূপ (একটি ঠিকানায় কেবল একবার ব্যবহারযোগ্য)'
          },
          {
            en: 'A syntax error that prevents routing',
            bn: 'একটি সিনট্যাক্স ভুল যা রাউটিং বন্ধ করে দেয়'
          },
          {
            en: 'The boundary between private and public networks',
            bn: 'প্রাইভেট এবং পাবলিক নেটওয়ার্কের মধ্যবর্তী সীমানা'
          },
          {
            en: 'A reference to port 80',
            bn: '৮০ নম্বর পোর্টের একটি রেফারেন্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'Double colon compresses consecutive zero blocks.',
          bn: 'ডাবল কোলন পরপর থাকা শূন্যের ব্লকগুলোকে সংকুচিত করে।'
        },
        explanation: {
          en: 'To compress long IPv6 addresses, a double colon (::) can replace any single contiguous sequence of zero fields. It may appear only once per address to prevent ambiguity.',
          bn: 'IPv6 অ্যাড্রেস ছোট করতে পরপর থাকা শূন্যের ব্লকগুলোকে :: দিয়ে সংকুচিত করা যায়; এটি প্রতিটি ঠিকানায় সর্বোচ্চ একবারই ব্যবহার করা যায়।'
        }
      },
      {
        id: 'addr-q4',
        kind: 'mcq',
        question: {
          en: 'What is the loopback IPv4 address used by software to communicate with services running on the local host machine?',
          bn: 'লোকাল মেশিনে চলা সার্ভিসের সাথে যোগাযোগ করার জন্য সফটওয়্যার কর্তৃক ব্যবহৃত লুপব্যাক IPv4 অ্যাড্রেস কোনটি?'
        },
        options: [
          {
            en: '127.0.0.1 (localhost)',
            bn: '127.0.0.1 (localhost)'
          },
          {
            en: '192.168.1.1',
            bn: '192.168.1.1'
          },
          {
            en: '0.0.0.0',
            bn: '0.0.0.0'
          },
          {
            en: '255.255.255.255',
            bn: '255.255.255.255'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard localhost IP.',
          bn: 'মানসম্মত লোকালহোস্ট আইপি।'
        },
        explanation: {
          en: '127.0.0.1 is the standard loopback address (in the 127.0.0.0/8 block), allowing network software to route packets to the local operating system without touching physical network hardware.',
          bn: '127.0.0.1 হলো স্ট্যান্ডার্ড লুপব্যাক আইপি যা ফিজিক্যাল তার স্পর্শ না করেই লোকাল মেশিনের মধ্যে প্যাকেট আদান-প্রদান করে।'
        }
      },
      {
        id: 'addr-q5',
        kind: 'mcq',
        question: {
          en: 'What technology allows thousands of devices on a private home or office LAN to share a single public IPv4 address?',
          bn: 'কোন প্রযুক্তির সাহায্যে একটি হোম বা অফিস ল্যানের হাজার হাজার ডিভাইস একটিমাত্র পাবলিক IPv4 অ্যাড্রেস শেয়ার করে ইন্টারনেট ব্যবহার করতে পারে?'
        },
        options: [
          {
            en: 'NAT (Network Address Translation)',
            bn: 'NAT (Network Address Translation)'
          },
          {
            en: 'BGP (Border Gateway Protocol)',
            bn: 'BGP (Border Gateway Protocol)'
          },
          {
            en: 'DNS (Domain Name System)',
            bn: 'DNS (Domain Name System)'
          },
          {
            en: 'FTP (File Transfer Protocol)',
            bn: 'FTP (File Transfer Protocol)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Translating private network addresses to a public address.',
          bn: 'প্রাইভেট নেটওয়ার্ক অ্যাড্রেসকে পাবলিক অ্যাড্রেসে রূপান্তরকারী ব্যবস্থা।'
        },
        explanation: {
          en: 'Network Address Translation (NAT) modifies IP header addresses in transit, mapping internal private IP:port pairs to a single external public IP to conserve IPv4 space.',
          bn: 'Network Address Translation (NAT) রাউটারে প্রাইভেট আইপিকে পাবলিক আইপিতে রূপান্তর করে একাধিক ডিভাইসের জন্য ইন্টারনেট সুবিধা নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tcp-protocol',
    title: {
      en: 'The TCP Protocol: Reliable Streams, Sequence Numbers & Flow Control',
      bn: 'TCP প্রোটোকল: নির্ভরযোগ্য স্ট্রিম, সিকোয়েন্স নম্বর ও ফ্লো কন্ট্রোল'
    }
  }
};
