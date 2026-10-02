import type { Lesson } from '../../../lib/types';

export const TcpipCapstoneLesson: Lesson = {
  slug: 'tcpip-capstone',
  tech: 'tcpip',
  title: {
    en: 'TCP/IP Capstone: High-Throughput System Tuning & Packet Analysis',
    bn: 'TCP/IP ক্যাপস্টোন: হাই-থ্রুপুট সিস্টেম টিউনিং ও প্যাকেট বিশ্লেষণ'
  },
  summary: {
    en: 'Integrate the complete TCP/IP stack: end-to-end packet journey from DNS query to TLS termination, Linux kernel sysctl performance tuning (somaxconn, tcp_wmem, tcp_rmem), Wireshark packet capture analysis, and diagnosing network bottlenecks.',
    bn: 'সম্পূর্ণ TCP/IP স্ট্যাকের সমন্বয়: DNS কোয়েরি থেকে TLS টার্মিনেশন পর্যন্ত প্যাকেটের শেষ-থেকে-শেষ পথচলা, লিনাক্স কার্নেল sysctl পারফরম্যান্স টিউনিং (somaxconn, tcp_wmem, tcp_rmem), ওয়্যারশার্ক প্যাকেট বিশ্লেষণ এবং নেটওয়ার্ক বটলনেক নির্ণয়।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'end-to-end-journey',
      text: {
        en: '1. The Complete End-to-End Packet Journey',
        bn: '১. একটি প্যাকেটের সম্পূর্ণ শুরু-থেকে-শেষ পথচলা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you visit a website like https://example.com, every layer of the TCP/IP networking stack collaborates in an exact mechanical sequence:',
        bn: 'যখন আপনি ব্রাউজারে https://example.com লিখে এন্টার চাপেন, তখন TCP/IP স্ট্যাকের প্রতিটি স্তর অত্যন্ত নিখুঁত পদক্ষেপে কাজ সম্পন্ন করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. DNS Resolution (UDP 53): The browser queries local resolvers and root/authoritative nameservers to translate the domain into an IP address (e.g. 93.184.216.34).',
          bn: '১. DNS রেজোলিউশন (UDP ৫৩): ব্রাউজার লোকাল রিজলভার ও অথরিটেটিভ নেমসার্ভারে কোয়েরি পাঠিয়ে ডোমেনটিকে আইপি অ্যাড্রেসে (যেমন 93.184.216.34) রূপান্তর করে।'
        },
        {
          en: '2. ARP Resolution: If the gateway MAC address is unknown, Address Resolution Protocol broadcasts an Ethernet request to locate the next-hop router MAC.',
          bn: '২. ARP রেজোলিউশন: লোকাল গেটওয়ের MAC অ্যাড্রেস অজানা থাকলে ARP প্রোটোকল ইথারনেট ফ্রেম ব্রডকাস্ট করে পরবর্তী রাউটারের MAC ঠিকানা জেনে নেয়।'
        },
        {
          en: '3. TCP 3-Way Handshake (Port 443): The client sends SYN, the server responds with SYN-ACK, and the client replies with ACK, negotiating sequence numbers and MSS.',
          bn: '৩. TCP ৩-মুখী হ্যান্ডশেক (৪৪৩ নম্বর পোর্ট): ক্লায়েন্ট SYN পাঠায়, সার্ভার SYN-ACK দিয়ে উত্তর দেয় এবং ক্লায়েন্ট ACK পাঠিয়ে সিকোয়েন্স নম্বর ও বাফার সাইজ চূড়ান্ত করে।'
        },
        {
          en: '4. TLS 1.3 Cryptographic Handshake: Client and server exchange Diffie-Hellman keys and verify the X.509 server certificate to establish end-to-end encryption.',
          bn: '৪. TLS 1.3 ক্রিপ্টোগ্রাফিক হ্যান্ডশেক: ক্লায়েন্ট ও সার্ভার ডিফি-হেলম্যান কি বিনিময় করে এবং X.509 সার্টিফিকেট যাচাই করে সম্পূর্ণ সুরক্ষিত সংযোগ গড়ে তোলে।'
        },
        {
          en: '5. HTTP/2 or HTTP/3 Application Exchange: Multiplexed binary streams deliver the HTML payload over the established secure transport pipeline.',
          bn: '৫. HTTP/2 বা HTTP/3 অ্যাপ্লিকেশন ডাটা: মাল্টিপ্লেক্সড বাইনারি স্ট্রিমের মাধ্যমে এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্ট পেলোড ক্লায়েন্টে দ্রুত পৌঁছে যায়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'end-to-end-pipeline-diagram',
      title: {
        en: 'The Complete Web Request Pipeline: From DNS to TLS & HTTP',
        bn: 'ওয়েব রিকোয়েস্টের পূর্ণাঙ্গ পাইপলাইন: DNS থেকে TLS ও HTTP'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">End-to-End Packet Journey: 5 Progressive Layers</text>' +
          '<!-- Stage 1 -->' +
          '<g transform="translate(40, 60)">' +
            '<rect width="720" height="55" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<circle cx="35" cy="27" r="16" fill="#1e3a8a"/>' +
            '<text x="35" y="32" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">1</text>' +
            '<text x="70" y="24" fill="#60a5fa" font-size="12" font-weight="bold">DNS Resolution (UDP Port 53)</text>' +
            '<text x="70" y="44" fill="#cbd5e1" font-size="10">Translates "example.com" &#x2192; 93.184.216.34 in 1 round trip with 0 connection overhead</text>' +
          '</g>' +
          '<!-- Stage 2 -->' +
          '<g transform="translate(40, 125)">' +
            '<rect width="720" height="55" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>' +
            '<circle cx="35" cy="27" r="16" fill="#312e81"/>' +
            '<text x="35" y="32" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">2</text>' +
            '<text x="70" y="24" fill="#a5b4fc" font-size="12" font-weight="bold">ARP Gateway Resolution (Link Layer)</text>' +
            '<text x="70" y="44" fill="#cbd5e1" font-size="10">Resolves default gateway router MAC address for local Ethernet frame encapsulation</text>' +
          '</g>' +
          '<!-- Stage 3 -->' +
          '<g transform="translate(40, 190)">' +
            '<rect width="720" height="55" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<circle cx="35" cy="27" r="16" fill="#064e3b"/>' +
            '<text x="35" y="32" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">3</text>' +
            '<text x="70" y="24" fill="#34d399" font-size="12" font-weight="bold">TCP 3-Way Handshake (Port 443)</text>' +
            '<text x="70" y="44" fill="#cbd5e1" font-size="10">Client SYN &#x2192; Server SYN-ACK &#x2192; Client ACK. Establishes sequence numbers &amp; window sizes</text>' +
          '</g>' +
          '<!-- Stage 4 -->' +
          '<g transform="translate(40, 255)">' +
            '<rect width="720" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<circle cx="35" cy="27" r="16" fill="#451a03"/>' +
            '<text x="35" y="32" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">4</text>' +
            '<text x="70" y="24" fill="#fbbf24" font-size="12" font-weight="bold">TLS 1.3 Cryptographic Handshake</text>' +
            '<text x="70" y="44" fill="#cbd5e1" font-size="10">Server certificate verification &amp; ephemeral Diffie-Hellman key exchange for forward secrecy</text>' +
          '</g>' +
          '<!-- Stage 5 -->' +
          '<g transform="translate(40, 320)">' +
            '<rect width="720" height="55" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>' +
            '<circle cx="35" cy="27" r="16" fill="#831843"/>' +
            '<text x="35" y="32" fill="#fbcfe8" font-size="12" font-weight="bold" text-anchor="middle">5</text>' +
            '<text x="70" y="24" fill="#f472b6" font-size="12" font-weight="bold">HTTP/2 Binary Streaming &amp; Multiplexing</text>' +
            '<text x="70" y="44" fill="#cbd5e1" font-size="10">Delivers encrypted HTML, CSS, images, and API responses over shared multiplexed TCP stream</text>' +
          '</g>' +
          '<!-- Bottom Summary -->' +
          '<text x="400" y="402" fill="#94a3b8" font-size="11" text-anchor="middle">&#x2713; The complete stack: Application (HTTP/DNS) &#x2192; Transport (TCP/UDP) &#x2192; Internet (IP) &#x2192; Link (Ethernet/ARP)</text>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'linux-sysctl-tuning',
      text: {
        en: '2. High-Concurreny Linux Kernel Tuning (sysctl)',
        bn: '২. হাই-কনকারেন্সি লিনাক্স কার্নেল টিউনিং (sysctl)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Default Linux kernel configurations are tuned for modest desktop workloads. When deploying enterprise servers handling 50,000 to 500,000 concurrent TCP connections, engineers tune the kernel via /etc/sysctl.conf:',
        bn: 'লিনাক্স কার্নেলের ডিফল্ট কনফিগারেশন সাধারণ ডেস্কটপ ব্যবহারের জন্য তৈরি। কিন্তু ৫০,০০০ থেকে ৫,০০,০০০ কনকারেন্ট TCP সংযোগ পরিচালনাকারী এন্টারপ্রাইজ সার্ভারের জন্য /etc/sysctl.conf ফাইলে টিউনিং করা আবশ্যক:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. net.core.somaxconn = 65535: Increases the maximum queue length of pending connections passed to the listen() syscall (default is only 128 or 4096), preventing connection refusal during high traffic spikes.',
          bn: '১. net.core.somaxconn = ৬৫৫৩৫: listen() সিস্টেম কলে সংযোগের অপেক্ষমান কিউর দৈর্ঘ্য বৃদ্ধি করে (ডিফল্ট মাত্র ১২৮ বা ৪০৯৬ থাকে), যা ট্রাফিকের চাপ বাড়লে কানেকশন রিফিউজ হওয়া রোধ করে।'
        },
        {
          en: '2. net.ipv4.tcp_max_syn_backlog = 65535: Expands the memory queue for half-open incoming SYN requests before the final ACK arrives.',
          bn: '২. net.ipv4.tcp_max_syn_backlog = ৬৫৫৩৫: ক্লায়েন্টের শেষ ACK আসার পূর্ব পর্যন্ত অর্ধ-উন্মুক্ত SYN রিকোয়েস্ট জমা রাখার বাফার বৃদ্ধি করে।'
        },
        {
          en: '3. net.ipv4.tcp_tw_reuse = 1: Allows the kernel to safely recycle client-side sockets lingering in TIME_WAIT for new outgoing connections when timestamps are enabled.',
          bn: '৩. net.ipv4.tcp_tw_reuse = ১: টাইমস্ট্যাম্প সক্রিয় থাকলে নতুন সংযোগের জন্য TIME_WAIT স্টেটে থাকা ক্লায়েন্ট সকেট নিরাপদে পুনরায় ব্যবহার করতে দেয়।'
        },
        {
          en: '4. net.ipv4.tcp_congestion_control = bbr: Switches the congestion control algorithm from loss-based CUBIC to Google\'s bandwidth-delay product BBR, slashing bufferbloat latency.',
          bn: '৪. net.ipv4.tcp_congestion_control = bbr: কনজেশন কন্ট্রোলকে CUBIC থেকে গুগলের BBR এ পরিবর্তন করে বাফারব্লট ল্যাটেন্সি দূর করে এবং থ্রুপুট সর্বোচ্চ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'wireshark-packet-analysis',
      text: {
        en: '3. Wireshark & tcpdump Packet Capture Analysis',
        bn: '৩. ওয়্যারশার্ক ও tcpdump প্যাকেট বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production network engineers use tcpdump and Wireshark to diagnose latency, packet drops, and security breaches. Crucial flags to monitor:',
        bn: 'প্রোডাকশন নেটওয়ার্ক ইঞ্জিনিয়াররা ল্যাটেন্সি, প্যাকেট ড্রপ এবং নিরাপত্তা ত্রুটি শনাক্ত করতে tcpdump এবং Wireshark ব্যবহার করেন। কয়েকটি গুরুত্বপূর্ণ ফ্ল্যাগ ও সমস্যা:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. TCP Dup ACK / Fast Retransmit: Indicates out-of-order delivery or packet drop across intermediate internet links.',
          bn: '১. TCP Dup ACK / Fast Retransmit: নেটওয়ার্কে প্যাকেট হারানো বা উল্টাপাল্টা ক্রমে পৌঁছানো নির্দেশ করে।'
        },
        {
          en: '2. TCP ZeroWindow: Signifies that the receiver application process is CPU-locked or unresponsive, filling its RAM buffer completely to 0 bytes available.',
          bn: '২. TCP ZeroWindow: নির্দেশ করে যে গ্রাহক অ্যাপ্লিকেশন সিপিইউ ব্লকিংয়ে আটকে আছে এবং তার বাফার সম্পূর্ণ পূর্ণ হয়ে ০ বাইট খালি রয়েছে।'
        },
        {
          en: '3. TCP RST (Reset): A packet abruptly terminating a connection, usually fired by a stateful firewall, port scanner, or server crashing without executing a clean 4-way teardown.',
          bn: '৩. TCP RST (Reset): হঠাৎ করে সংযোগ বন্ধকারী সংকেত; যা সাধারণত ফায়ারওয়াল, পোর্ট স্ক্যানার বা ক্র্যাশ হওয়া সার্ভার দ্বারা প্রেরিত হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Complete Network Diagnostic & Sysctl Simulator in TypeScript',
        bn: '৪. TypeScript এ সম্পূর্ণ নেটওয়ার্ক ডায়াগনস্টিক ও Sysctl সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models the complete end-to-end request flow (DNS -> TCP Handshake -> HTTP GET) alongside a Linux kernel sysctl auditor:',
        bn: 'নিচের TypeScript প্রোগ্রামটি সম্পূর্ণ রিকোয়েস্ট প্রবাহ (DNS -> TCP হ্যান্ডশেক -> HTTP GET) এবং একটি লিনাক্স কার্নেল sysctl অডিটর সিমুলেট করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript end-to-end networking pipeline simulation and Linux kernel TCP sysctl optimization engine.',
        bn: 'সম্পূর্ণ নেটওয়ার্কিং পাইপলাইন সিমুলেশন এবং লিনাক্স কার্নেল TCP sysctl অপটিমাইজেশন ইঞ্জিনের TypeScript কোড।'
      },
      code: `// Simulation of Complete TCP/IP Stack Request Journey & Linux Kernel Tuning

interface SysctlAudit {
  param: string;
  currentValue: number | string;
  recommendedValue: number | string;
  status: 'OPTIMAL' | 'NEEDS_TUNING';
}

class TcpipStackSimulator {
  // 1. Simulate DNS Resolution over UDP Port 53
  static resolveDns(domain: string): { ip: string; latencyMs: number } {
    const fakeDnsRecords: Record<string, string> = {
      'example.com': '93.184.216.34',
      'codeshikhon.com': '104.21.58.112'
    };
    const ip = fakeDnsRecords[domain] || '127.0.0.1';
    return { ip, latencyMs: 12 };
  }

  // 2. Simulate TCP 3-Way Handshake
  static executeHandshake(dstIp: string, dstPort: number): { rttMs: number; established: boolean } {
    console.log('[TCP] Initiating 3-Way Handshake to ' + dstIp + ':' + dstPort);
    console.log('      Client -> SYN (ISN: 1000)');
    console.log('      Server -> SYN-ACK (ISN: 5000, ACK: 1001)');
    console.log('      Client -> ACK (ACK: 5001) [State: ESTABLISHED]');
    return { rttMs: 24, established: true };
  }

  // 3. Linux Kernel Sysctl Audit & Optimizer
  static auditLinuxKernel(): SysctlAudit[] {
    const checks: SysctlAudit[] = [
      {
        param: 'net.core.somaxconn',
        currentValue: 128,
        recommendedValue: 65535,
        status: 'NEEDS_TUNING'
      },
      {
        param: 'net.ipv4.tcp_max_syn_backlog',
        currentValue: 512,
        recommendedValue: 65535,
        status: 'NEEDS_TUNING'
      },
      {
        param: 'net.ipv4.tcp_congestion_control',
        currentValue: 'cubic',
        recommendedValue: 'bbr',
        status: 'NEEDS_TUNING'
      },
      {
        param: 'net.ipv4.tcp_tw_reuse',
        currentValue: 1,
        recommendedValue: 1,
        status: 'OPTIMAL'
      }
    ];
    return checks;
  }
}

// Execution demonstration
console.log('--- Step 1: DNS Lookup via UDP 53 ---');
const dns = TcpipStackSimulator.resolveDns('example.com');
console.log('Resolved example.com -> ' + dns.ip + ' (' + dns.latencyMs + 'ms via UDP 53)');

console.log('\\n--- Step 2: TCP 3-Way Handshake ---');
const conn = TcpipStackSimulator.executeHandshake(dns.ip, 443);
console.log('Connection Established: ' + conn.established + ' (RTT: ' + conn.rttMs + 'ms)');

console.log('\\n--- Step 3: Linux Kernel Performance Audit ---');
const auditResults = TcpipStackSimulator.auditLinuxKernel();
for (const item of auditResults) {
  console.log(item.param + ': ' + item.currentValue + ' -> Target: ' + item.recommendedValue + ' [' + item.status + ']');
}`
    }
  ],
  exercises: [
    {
      id: 'capstone-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which layer of the TCP/IP model handles translating human domain names like "example.com" into 32-bit IPv4 addresses?',
        bn: 'TCP/IP মডেলের কোন স্তরটি মানুষের পাঠযোগ্য ডোমেন নেম (যেমন "example.com") কে ৩২-বিট IPv4 ঠিকানায় রূপান্তর করার কাজ পরিচালনা করে?'
      },
      options: [
        {
          en: 'Application Layer (via DNS - Domain Name System over UDP/TCP port 53)',
          bn: 'Application Layer (UDP/TCP ৫৩ নম্বর পোর্টে পরিচালিত DNS প্রোটোকলের মাধ্যমে)'
        },
        {
          en: 'Link Layer (via Ethernet MAC addresses)',
          bn: 'Link Layer (ইথারনেট MAC ঠিকানার মাধ্যমে)'
        },
        {
          en: 'Physical Layer (via voltage pulses)',
          bn: 'Physical Layer (ভোল্টেজ তরঙ্গের মাধ্যমে)'
        },
        {
          en: 'Optical Layer (via laser frequencies)',
          bn: 'Optical Layer (লেজার ফ্রিকোয়েন্সির মাধ্যমে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'DNS is an application-layer service.',
        bn: 'DNS হলো একটি অ্যাপ্লিকেশন-স্তরের সার্ভিস।'
      },
      explanation: {
        en: 'The Domain Name System (DNS) operates at the Application Layer (Layer 4 in TCP/IP) to map hostnames to IP addresses using UDP port 53.',
        bn: 'DNS অ্যাপ্লিকেশন স্তরে অবস্থান করে এবং UDP ৫৩ নম্বর পোর্ট ব্যবহার করে ডোমেন নামকে আইপি ঠিকানায় রূপান্তর করে।'
      }
    },
    {
      id: 'capstone-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why must high-traffic production web servers tune the "net.core.somaxconn" Linux kernel parameter from 128 to 65535?',
        bn: 'উচ্চ ট্রাফিকের প্রোডাকশন ওয়েব সার্ভারে লিনাক্স কার্নেলের "net.core.somaxconn" প্যারামিটারটি কেন ১২৮ থেকে বাড়িয়ে ৬৫৫৩৫ করা উচিত?'
      },
      options: [
        {
          en: 'To expand the listen socket backlog queue, preventing the OS from rejecting incoming client connections during massive traffic spikes',
          bn: 'লিসেন সকেটের অপেক্ষমান ব্যাকলগ কিউ বড় করতে, যাতে হঠাৎ করে ট্রাফিকের তীব্র চাপ এলে ওএস নতুন সংযোগ প্রত্যাখ্যান না করে'
        },
        {
          en: 'To make Python run 10 times faster than C++',
          bn: 'যাতে পাইথন সি++ এর চেয়ে ১০ গুণ দ্রুত চলে'
        },
        {
          en: 'To disable SSL encryption keys on the hard drive',
          bn: 'হার্ড ড্রাইভে এসএসএল এনক্রিপশন কি বন্ধ করার জন্য'
        },
        {
          en: 'To reduce the physical weight of server racks in the data center',
          bn: 'ডাটা সেন্টারে সার্ভার র‍্যাকের শারীরিক ওজন কমাতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'somaxconn controls the maximum queue length of pending connections passed to listen().',
        bn: 'somaxconn লিসেন সকেটে অপেক্ষমান সংযোগের সর্বোচ্চ ব্যাকলগ সীমা নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'When millions of clients connect simultaneously, a small somaxconn backlog (e.g. 128) overflows immediately, dropping incoming handshakes. Raising it to 65535 absorbs sudden traffic bursts safely.',
        bn: 'একসাথে হাজার হাজার ব্যবহারকারী প্রবেশ করলে ১২৮ ব্যাকলগ খুব দ্রুত উপচে পড়ে সংযোগ ব্যর্থ হয়। ৬৫৫৩৫ সেট করলে ব্যাকলগ কিউ ট্রাফিকের ধাক্কা সামলাতে পারে।'
      }
    },
    {
      id: 'capstone-ex-3',
      kind: 'mcq',
      question: {
        en: 'What does a "TCP ZeroWindow" alert indicate when analyzing network traffic inside Wireshark?',
        bn: 'Wireshark এ নেটওয়ার্ক ট্রাফিক বিশ্লেষণের সময় "TCP ZeroWindow" সংকেত কী প্রকাশ করে?'
      },
      options: [
        {
          en: 'The receiver\'s application buffer is completely full (rwnd = 0), ordering the sender to stop transmitting data until the receiver consumes its backlog',
          bn: 'গ্রাহকের অ্যাপ্লিকেশন বাফার মেমরি সম্পূর্ণ পূর্ণ (rwnd = ০), যা প্রেরককে অবিলম্বে ডাটা পাঠানো বন্ধ রাখার নির্দেশ দেয়'
        },
        {
          en: 'The operating system has run out of monitor display pixels',
          bn: 'অপারেটিং সিস্টেমের মনিটর ডিসপ্লে পিক্সেল ফুরিয়ে গেছে'
        },
        {
          en: 'The Ethernet network cable has zero copper wires remaining',
          bn: 'ইথারনেট কেবলে কোনো তামার তার অবশিষ্ট নেই'
        },
        {
          en: 'The remote server has zero hard drive space left',
          bn: 'রিমোট সার্ভারের হার্ড ড্রাইভে কোনো খালি জায়গা নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Receiver window (rwnd) dropped to 0.',
        bn: 'রিসিভার উইন্ডো (rwnd) ০ এ নেমে এসেছে।'
      },
      explanation: {
        en: 'TCP ZeroWindow occurs when the destination host cannot read data from its OS socket buffer fast enough, setting rwnd to 0 to prevent buffer overflow.',
        bn: 'গ্রাহক সফটওয়্যারটি বাফার থেকে দ্রুত ডাটা পড়তে না পারলে মেমরি পূর্ণ হয়ে যায় এবং সে rwnd = ০ পাঠিয়ে প্রেরককে সাময়িক বিরতি দিতে বলে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tcpip-capstone',
    title: {
      en: 'TCP/IP Architecture & Performance Capstone Quiz',
      bn: 'TCP/IP আর্কিটেকচার ও পারফরম্যান্স ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'cap-q1',
        kind: 'mcq',
        question: {
          en: 'Which TCP flag abruptly terminates an established connection without performing a graceful 4-way teardown?',
          bn: 'কোন TCP ফ্ল্যাগটি স্বাভাবিক ৪-মুখী সমাপ্তি সম্পন্ন না করেই হঠাৎ করে একটি সক্রিয় সংযোগ ভেঙে দেয়?'
        },
        options: [
          {
            en: 'RST (Reset)',
            bn: 'RST (Reset)'
          },
          {
            en: 'SYN',
            bn: 'SYN'
          },
          {
            en: 'URG',
            bn: 'URG'
          },
          {
            en: 'PSH',
            bn: 'PSH'
          }
        ],
        answer: 0,
        hint: {
          en: 'RST immediately resets and destroys the connection.',
          bn: 'RST সাথে সাথে সংযোগ বাতিল ও রিসেট করে দেয়।'
        },
        explanation: {
          en: 'A TCP packet with the RST flag set immediately aborts the connection, bypassing the FIN/ACK handshake. It is commonly triggered by firewall rejections or process crashes.',
          bn: 'RST ফ্ল্যাগটি তাৎক্ষণিকভাবে সংযোগ ধ্বংস করে; ফায়ারওয়াল কোনো সংযোগ বাতিল করলে বা ব্যাকএন্ড সফটওয়্যার ক্র্যাশ করলে RST পাঠানো হয়।'
        }
      },
      {
        id: 'cap-q2',
        kind: 'mcq',
        question: {
          en: 'What protocol resolves an IP address to a physical Data Link Layer MAC address within a local local area network (LAN)?',
          bn: 'একটি লোকাল এরিয়া নেটওয়ার্কে (LAN) আইপি ঠিকানাকে ফিজিক্যাল ডাটা লিঙ্ক স্তরের MAC ঠিকানায় রূপান্তর করে কোন প্রোটোকল?'
        },
        options: [
          {
            en: 'ARP (Address Resolution Protocol)',
            bn: 'ARP (Address Resolution Protocol)'
          },
          {
            en: 'HTTP',
            bn: 'HTTP'
          },
          {
            en: 'SSH',
            bn: 'SSH'
          },
          {
            en: 'BGP',
            bn: 'BGP'
          }
        ],
        answer: 0,
        hint: {
          en: 'ARP translates IP to MAC addresses.',
          bn: 'ARP আইপিকে MAC ঠিকানায় রূপান্তর করে।'
        },
        explanation: {
          en: 'Address Resolution Protocol (ARP) broadcasts an inquiry on the local Ethernet network to find which hardware MAC address corresponds to a given IP address.',
          bn: 'ARP লোকাল ইথারনেট নেটওয়ার্কে অনুসন্ধান পাঠিয়ে নির্দিষ্ট আইপির বিপরীতে থাকা হার্ডওয়্যার MAC ঠিকানাটি জেনে নেয়।'
        }
      },
      {
        id: 'cap-q3',
        kind: 'mcq',
        question: {
          en: 'What is the key advantage of Google\'s BBR congestion control over traditional CUBIC in cloud infrastructure?',
          bn: 'ক্লাউড অবকাঠামোতে ঐতিহ্যবাহী CUBIC এর তুলনায় গুগলের BBR কনজেশন কন্ট্রোলের মূল সুবিধা কী?'
        },
        options: [
          {
            en: 'It measures physical bottleneck bandwidth and minimum RTT to prevent bufferbloat, achieving maximum throughput with minimal latency',
            bn: 'এটি নেটওয়ার্কের আসল ব্যান্ডউইথ ও সর্বনিম্ন RTT মেপে বাফারব্লট দূর করে, ফলে সর্বনিম্ন ল্যাটেন্সিতে সর্বোচ্চ গতি পাওয়া যায়'
          },
          {
            en: 'It eliminates the need for IP addresses entirely',
            bn: 'এটি আইপি ঠিকানার প্রয়োজনীয়তা সম্পূর্ণভাবে দূর করে'
          },
          {
            en: 'It compresses 4K video files into 10-byte text messages',
            bn: 'এটি ৪K ভিডিও ফাইলকে মাত্র ১০-বাইটের টেক্সট মেসেজে রূপান্তর করে'
          },
          {
            en: 'It increases client battery life by turning off the Wi-Fi card',
            bn: 'এটি ওয়াই-ফাই কার্ড বন্ধ করে দিয়ে ক্লায়েন্টের ব্যাটারি বাঁচায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'BBR avoids bloated queues by modeling bandwidth-delay product.',
          bn: 'BBR ব্যান্ডউইথ-ডিলে প্রোডাক্ট মডেল করে রাউটার বাফারে অযথা জ্যাম তৈরি বন্ধ করে।'
        },
        explanation: {
          en: 'BBR paces packets based on continuous real-time measurements of bottleneck bandwidth and min RTT, avoiding router bufferbloat and delivering significantly lower latency under heavy load.',
          bn: 'BBR ব্যান্ডউইথ ও রাউন্ড-ট্রিপ সময় পর্যবেক্ষণ করে নিয়ন্ত্রিত গতিতে প্যাকেট পাঠায়, যার ফলে বাফারে জ্যাম না জমে সর্বনিম্ন পিং বজায় থাকে।'
        }
      },
      {
        id: 'cap-q4',
        kind: 'mcq',
        question: {
          en: 'In production Linux servers, what does enabling "net.ipv4.tcp_tw_reuse = 1" achieve?',
          bn: 'প্রোডাকশন লিনাক্স সার্ভারে "net.ipv4.tcp_tw_reuse = 1" সক্রিয় করলে কী সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It safely allows outgoing client connections to reuse sockets currently lingering in the TIME_WAIT state when timestamps are valid',
            bn: 'টাইমস্ট্যাম্প ঠিক থাকলে নতুন আউটগোয়িং সংযোগের জন্য TIME_WAIT স্টেটে থাকা সকেটগুলো নিরাপদে পুনরায় ব্যবহারের সুযোগ দেয়'
          },
          {
            en: 'It permanently disables TLS encryption',
            bn: 'এটি টিএলএস এনক্রিপশন স্থায়ীভাবে বন্ধ করে দেয়'
          },
          {
            en: 'It allows 10 users to share the exact same root password',
            bn: 'এটি ১০ জন ব্যবহারকারীকে একই রুট পাসওয়ার্ড শেয়ার করতে দেয়'
          },
          {
            en: 'It shuts down the server fan when idle',
            bn: 'সার্ভার অলস থাকলে এটি ফ্যান বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reusing TIME_WAIT sockets prevents ephemeral port exhaustion.',
          bn: 'TIME_WAIT সকেট পুনর্ব্যবহার করলে এফেমারাল পোর্টের ঘাটতি হয় না।'
        },
        explanation: {
          en: 'On outbound proxies and high-scale API clients, ephemeral ports can quickly be consumed by TIME_WAIT sockets. tcp_tw_reuse allows recycling them safely for new connections.',
          bn: 'প্রক্সি বা এপিআই সার্ভারে ঘনঘন সংযোগ তৈরির সময় TIME_WAIT স্টেটের কারণে পোর্ট শেষ হয়ে যেতে পারে; tcp_tw_reuse সকেট পুনর্ব্যবহারের অনুমতি দিয়ে এই সমস্যা মেটায়।'
        }
      },
      {
        id: 'cap-q5',
        kind: 'mcq',
        question: {
          en: 'Which command captures live TCP traffic on port 443 on interface eth0 and writes the raw packets to a file named "capture.pcap"?',
          bn: 'কোন কমান্ডটি eth0 ইন্টারফেসে ৪৪৩ নম্বর পোর্টের লাইভ TCP ট্রাফিক ক্যাপচার করে এবং "capture.pcap" নামের ফাইলে সংরক্ষণ করে?'
        },
        options: [
          {
            en: "tcpdump -i eth0 -nn -s0 -w capture.pcap 'tcp port 443'",
            bn: "tcpdump -i eth0 -nn -s0 -w capture.pcap 'tcp port 443'"
          },
          {
            en: 'ping -c 443 eth0 > capture.pcap',
            bn: 'ping -c 443 eth0 > capture.pcap'
          },
          {
            en: 'cat /dev/null > capture.pcap',
            bn: 'cat /dev/null > capture.pcap'
          },
          {
            en: 'traceroute 443.eth0.pcap',
            bn: 'traceroute 443.eth0.pcap'
          }
        ],
        answer: 0,
        hint: {
          en: 'tcpdump with -i interface, -w output file, and filter syntax.',
          bn: 'tcpdump কমান্ডে -i ইন্টারফেস, -w ফাইল এবং ফিল্টার এক্সপ্রেশন ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'tcpdump with -i eth0 specifies the interface, -nn prevents slow DNS lookups, -s0 captures full packets, -w writes raw pcap format, and "tcp port 443" filters HTTPS packets.',
          bn: "tcpdump -i eth0 -nn -s0 -w capture.pcap 'tcp port 443' কমান্ডটি নির্ধারিত ইন্টারফেসের ৪৪৩ পোর্টের সমস্ত সম্পূর্ণ প্যাকেট pcap ফাইলে সংরক্ষণ করে।"
        }
      }
    ]
  }
};
