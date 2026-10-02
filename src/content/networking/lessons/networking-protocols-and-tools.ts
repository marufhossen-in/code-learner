import type { Lesson } from '../../../lib/types';

/**
 * Ten comprehensive points covering the complete networking journey from physical frames to application sockets:
 * 1. The OSI 7-Layer and TCP/IP 4-Layer models: encapsulation and PDU transformation
 * 2. IPv4 addressing, subnet masks, and CIDR arithmetic (/24, usable hosts, broadcast)
 * 3. Ports, sockets, and multiplexing (well-known ports 80/443/22/53 vs ephemeral range)
 * 4. Address Resolution Protocol (ARP) and Layer 2 MAC translation
 * 5. DNS resolution mechanics: Root, TLD, Authoritative, and record types (A, AAAA, CNAME)
 * 6. TCP 3-way handshake (SYN, SYN-ACK, ACK), sequence numbers, and graceful teardown
 * 7. MTU, MSS, sliding window flow control, and slow-start congestion control
 * 8. UDP vs TCP: connectionless datagrams, head-of-line blocking, and HTTP/3 QUIC
 * 9. Routing, default gateways, and packet lifetime with TTL decrementing
 * 10. Command-line diagnostic toolkit: ping, traceroute, curl, ss, and tcpdump
 */
export const networkingProtocolsAndToolsLesson: Lesson = {
  slug: 'networking-protocols-and-tools',
  tech: 'networking',
  title: {
    en: 'Networking protocols and diagnostic tools: OSI, IP, TCP, UDP, DNS, and CLI',
    bn: 'নেটওয়ার্কিং প্রোটোকল ও ডায়াগনস্টিক টুলস: ওএসআই, আইপি, টিসিপি, ইউডিপি, ডিএনএস ও সিএলআই'
  },
  summary: {
    en: 'A complete end-to-end guide to networking architecture, protocol mechanics, and production diagnostics. Understand packet encapsulation through the layers, calculate subnets with CIDR arithmetic, trace TCP sequence numbers and handshakes, compare TCP against UDP and QUIC, and master command-line network inspection tools.',
    bn: 'নেটওয়ার্কিং আর্কিটেকচার, প্রোটোকল মেকানিক্স ও প্রোডাকশন ডায়াগনস্টিকসের সম্পূর্ণ নির্দেশিকা। স্তরভিত্তিক প্যাকেট এনক্যাপসুলেশন, সিআইডিআর সাবনেট গণনা, টিসিপি হ্যান্ডশেক ও সিকোয়েন্স ট্র্যাকিং, ইউডিপি ও কুইকের তুলনা এবং প্রয়োজনীয় কমান্ড-লাইন টুলসের বাস্তব ব্যবহার শিখুন।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'request-journey',
    tech: 'networking',
    title: {
      en: 'The Request Journey: From Browser Click to Server Response',
      bn: 'রিকোয়েস্ট যাত্রা: ব্রাউজার ক্লিক থেকে সার্ভার রেসপন্স পর্যন্ত'
    }
  },
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'The mechanical reality of computer networks', bn: 'কম্পিউটার নেটওয়ার্কের বাস্তব কার্যপদ্ধতি' } },
    {
      type: 'para',
      text: {
        en: 'Every network transmission is governed by strict mathematical constraints and layered protocol contracts. We examine networking from electrical signals to HTTP payloads across ten practical points.',
        bn: 'প্রতিটি নেটওয়ার্ক ট্রান্সমিশন নির্দিষ্ট গাণিতিক সীমাবদ্ধতা ও প্রোটোকল চুক্তি মেনে চলে। আমরা দশটি সুনির্দিষ্ট পয়েন্টে তারের সিগন্যাল থেকে শুরু করে এইচটিটিপি পেলোড পর্যন্ত বিস্তারিত পর্যালোচনা করব।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'encapsulation', def: { en: 'wrapping payload data with protocol headers as it travels down the stack', bn: 'স্ট্যাকের নিচে নামার সময় ডেটার সাথে প্রোটোকল হেডার যুক্ত করার প্রক্রিয়া' } },
        { term: 'round-trip time', def: { en: 'the duration required for a network signal to travel to a destination and back', bn: 'একটি সিগন্যাল গন্তব্যে গিয়ে ফিরে আসতে যে সময় ব্যয় হয়' } },
        { term: 'sliding window', def: { en: 'a buffer mechanism regulating how many unacknowledged bytes a sender can transmit', bn: 'স্বীকৃতি ছাড়া কত বাইট পাঠানো যাবে তা নিয়ন্ত্রণকারী বাফার ব্যবস্থা' } },
        { term: 'default gateway', def: { en: 'the local router node responsible for forwarding packets destined for external networks', bn: 'বাইরের নেটওয়ার্কে প্যাকেট পাঠানোর দায়িত্বে নিয়োজিত লোকাল রাউটার নোড' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. The OSI and TCP/IP models: encapsulation from data to bits', bn: '১. ওএসআই ও টিসিপি/আইপি মডেল: ডেটা থেকে বিটসে এনক্যাপসুলেশন' } },
    {
      type: 'para',
      text: {
        en: 'As application data moves down the network stack, each layer prepends its own header to create a Protocol Data Unit (PDU): Data -> Segment -> Packet -> Frame -> Bits.',
        bn: 'অ্যাপ্লিকেশন ডেটা যখন নেটওয়ার্ক স্ট্যাক দিয়ে নিচে নামে, প্রতিটি স্তর নিজস্ব হেডার যুক্ত করে প্রোটোকল ডেটা ইউনিট (PDU) তৈরি করে: ডেটা -> সেগমেন্ট -> প্যাকেট -> ফ্রেম -> বিটস।'
      }
    },
    {
      type: 'code',
      code: `// Simulating layered encapsulation of an HTTP GET request
const appPayload = 'GET /index.html HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n';

// Layer 4 (Transport): TCP Segment adds source and destination ports
const tcpSegment = {
  layer: 'L4 Transport (TCP)',
  srcPort: 54321,
  dstPort: 80,
  payloadLen: appPayload.length
};

// Layer 3 (Network): IP Packet adds source and destination IP addresses
const ipPacket = {
  layer: 'L3 Network (IPv4)',
  srcIp: '192.168.1.10',
  dstIp: '93.184.216.34',
  protocol: 'TCP',
  segment: tcpSegment
};

// Layer 2 (Data Link): Ethernet Frame adds source and destination MAC addresses
const ethFrame = {
  layer: 'L2 Data Link (Ethernet)',
  srcMac: '00:1A:2B:3C:4D:5E',
  dstMac: '00:50:56:C0:00:01',
  packet: ipPacket
};

console.log('L2 Destination MAC:', ethFrame.dstMac);
console.log('L3 Destination IP:', ethFrame.packet.dstIp);
console.log('L4 Destination Port:', ethFrame.packet.segment.dstPort);

// prints: L2 Destination MAC: 00:50:56:C0:00:01
// prints: L3 Destination IP: 93.184.216.34
// prints: L4 Destination Port: 80`
    },

    { type: 'heading', id: 'p2', text: { en: '2. IPv4, subnetting, and CIDR arithmetic: /24, usable hosts', bn: '২. আইপিভি৪, সাবনেটিং ও সিআইডিআর হিসাব: /24 ও ব্যবহারযোগ্য হোস্ট' } },
    {
      type: 'para',
      text: {
        en: 'An IPv4 address consists of 32 bits divided into network and host portions. CIDR notation indicates how many leading bits identify the network.',
        bn: 'আইপিভি৪ অ্যাড্রেসে ৩২ বিট থাকে যা নেটওয়ার্ক ও হোস্ট অংশে বিভক্ত। সিআইডিআর নোটেশন নির্দেশ করে প্রথম কতটি বিট নেটওয়ার্ক শনাক্ত করে।'
      }
    },
    {
      type: 'code',
      code: `function calculateCidr(networkPrefix: string, cidrBits: number) {
  const totalIps = 2 ** (32 - cidrBits);
  // 2 addresses are reserved: Network ID (all 0s) and Broadcast (all 1s)
  const usableHosts = totalIps - 2;
  return { totalIps, usableHosts };
}

// Standard office subnet /24
const sub24 = calculateCidr('192.168.1.0', 24);
console.log('/24 total:', sub24.totalIps, 'usable:', sub24.usableHosts);

// Cloud VPC subnet /16
const sub16 = calculateCidr('10.0.0.0', 16);
console.log('/16 total:', sub16.totalIps, 'usable:', sub16.usableHosts);

// Point-to-point link /30
const sub30 = calculateCidr('172.16.0.0', 30);
console.log('/30 total:', sub30.totalIps, 'usable:', sub30.usableHosts);

// prints: /24 total: 256 usable: 254
// prints: /16 total: 65536 usable: 65534
// prints: /30 total: 4 usable: 2`
    },

    { type: 'heading', id: 'p3', text: { en: '3. Ports, sockets, and multiplexing: src:port to dst:port', bn: '৩. পোর্ট, সকেট ও মাল্টিপ্লেক্সিং: সোর্স পোর্ট থেকে ডেস্টিনেশন পোর্ট' } },
    {
      type: 'para',
      text: {
        en: 'A socket is defined by 4 addressing components: source IP, source port, destination IP, and destination port. This allows a single host to maintain thousands of concurrent connections.',
        bn: 'একটি সকেট ৪টি উপাদানের সমন্বয়ে গঠিত: সোর্স আইপি, সোর্স পোর্ট, ডেস্টিনেশন আইপি ও ডেস্টিনেশন পোর্ট। এটি একটি মাত্র হোস্টকে হাজার হাজার সমান্তরাল কানেকশন চালাতে দেয়।'
      }
    },
    {
      type: 'code',
      code: `interface TCPSocketPair {
  srcIp: string;
  srcPort: number;
  dstIp: string;
  dstPort: number;
}

function isWellKnown(port: number): boolean {
  // Ports 0-1023 are well-known reserved system services
  return port < 1024;
}

// Client browser connecting to HTTPS web server
const conn1: TCPSocketPair = { srcIp: '192.168.1.10', srcPort: 49152, dstIp: '93.184.216.34', dstPort: 443 };
const conn2: TCPSocketPair = { srcIp: '192.168.1.10', srcPort: 49153, dstIp: '93.184.216.34', dstPort: 443 };

const isDistinct = conn1.srcPort !== conn2.srcPort;

console.log('Connection 1:', \`\${conn1.srcIp}:\${conn1.srcPort} -> \${conn1.dstIp}:\${conn1.dstPort}\`);
console.log('Distinct sockets:', isDistinct);
console.log('Connecting to system port 443:', isWellKnown(conn1.dstPort));

// prints: Connection 1: 192.168.1.10:49152 -> 93.184.216.34:443
// prints: Distinct sockets: true
// prints: Connecting to system port 443: true`
    },

    { type: 'heading', id: 'p4', text: { en: '4. Address Resolution Protocol (ARP): translating IP to MAC', bn: '৪. অ্যাড্রেস রেজোলিউশন প্রোটোকল (এআরপি): আইপি থেকে ম্যাক অনুবাদ' } },
    {
      type: 'para',
      text: {
        en: 'Routers and switches on a local network forward data using physical Layer 2 MAC addresses. ARP broadcasts a request to discover which hardware holds an IP.',
        bn: 'লোকাল নেটওয়ার্কের রাউটার ও সুইচ ফিজিক্যাল লেয়ার ২ ম্যাক অ্যাড্রেস দেখে ডেটা পাঠায়। এআরপি ব্রডকাস্ট করে নির্দিষ্ট আইপির হার্ডওয়্যার ম্যাক বের করে।'
      }
    },
    {
      type: 'code',
      code: `class ARPCache {
  private table = new Map<string, string>();

  resolve(targetIp: string): string {
    if (this.table.has(targetIp)) {
      return \`CACHE_HIT: \${this.table.get(targetIp)}\`;
    }
    // Simulated broadcast to FF:FF:FF:FF:FF:FF
    const discoveredMac = '00:50:56:FE:ED:01';
    this.table.set(targetIp, discoveredMac);
    return \`BROADCAST_REPLY: \${discoveredMac}\`;
  }
}

const cache = new ARPCache();
console.log(cache.resolve('192.168.1.1'));
console.log(cache.resolve('192.168.1.1'));

// prints: BROADCAST_REPLY: 00:50:56:FE:ED:01
// prints: CACHE_HIT: 00:50:56:FE:ED:01`
    },

    { type: 'heading', id: 'p5', text: { en: '5. DNS resolution mechanics: Root, TLD, and Authoritative servers', bn: '৫. ডিএনএস সমাধান পদ্ধতি: রুট, টিএলডি ও অথরিটেটিভ সার্ভার' } },
    {
      type: 'para',
      text: {
        en: 'DNS resolution is a hierarchical recursive query. When un-cached, queries traverse Root servers, Top-Level Domain (TLD) servers, and Authoritative nameservers.',
        bn: 'ডিএনএস সমাধান একটি ক্রমানুসারিক রিকার্সিভ অনুসন্ধান। ক্যাশে না থাকলে কুয়েরি পর্যায়ক্রমে রুট সার্ভার, টপ-লেভেল ডোমেন ও অথরিটেটিভ সার্ভারে পৌঁছায়।'
      }
    },
    {
      type: 'code',
      code: `function traceDns(domain: string) {
  const steps = [
    { step: '1. Client -> Recursive Resolver (8.8.8.8)', result: \`Cache miss for \${domain}\` },
    { step: '2. Resolver -> Root Nameserver (.)', result: 'Referral to .com TLD servers' },
    { step: '3. Resolver -> TLD Nameserver (.com)', result: 'Referral to example.com authoritative nameservers' },
    { step: '4. Resolver -> Authoritative Nameserver', result: 'A record: 93.184.216.34 (TTL: 3600s)' }
  ];
  return steps;
}

const lookup = traceDns('example.com');
console.log('DNS lookup steps count =', lookup.length);
console.log('Final resolution:', lookup[3].result);

// prints: DNS lookup steps count = 4
// prints: Final resolution: A record: 93.184.216.34 (TTL: 3600s)`
    },

    { type: 'heading', id: 'p6', text: { en: '6. TCP three-way handshake: SYN, SYN-ACK, and ACK tracking', bn: '৬. টিসিপি থ্রি-ওয়ে হ্যান্ডশেক: SYN, SYN-ACK এবং ACK ট্র্যাকিং' } },
    {
      type: 'para',
      text: {
        en: 'TCP establishes reliable connections through a three-way handshake: SYN, SYN-ACK, ACK. Both parties negotiate Initial Sequence Numbers (ISNs) to track every byte.',
        bn: 'টিসিপি থ্রি-ওয়ে হ্যান্ডশেকের মাধ্যমে নির্ভরযোগ্য সংযোগ তৈরি করে: SYN, SYN-ACK, ACK। উভয় প্রান্ত প্রতিটি বাইট ট্র্যাক করতে ইনিশিয়াল সিকোয়েন্স নাম্বার ঠিক করে।'
      }
    },
    {
      type: 'code',
      code: `class HandshakeSimulator {
  clientIsn: number;
  serverIsn: number;

  constructor(clientIsn: number, serverIsn: number) {
    this.clientIsn = clientIsn;
    this.serverIsn = serverIsn;
  }

  simulate() {
    // 1. Client -> Server: SYN (seq = clientIsn)
    // 2. Server -> Client: SYN-ACK (seq = serverIsn, ack = clientIsn + 1)
    const synAckAck = this.clientIsn + 1;
    // 3. Client -> Server: ACK (seq = clientIsn + 1, ack = serverIsn + 1)
    const finalAck = this.serverIsn + 1;
    return { synAckAck, finalAck };
  }
}

const hs = new HandshakeSimulator(1000, 5000);
const res = hs.simulate();

console.log('Server acknowledges client seq:', res.synAckAck);
console.log('Client acknowledges server seq:', res.finalAck);

// prints: Server acknowledges client seq: 1001
// prints: Client acknowledges server seq: 5001`
    },

    { type: 'heading', id: 'p7', text: { en: '7. MTU, MSS, and flow control: sizing packets on the wire', bn: '৭. এমটিইউ, এমএসএস ও প্রবাহ নিয়ন্ত্রণ: তারের প্যাকেটের আকার নির্ধারণ' } },
    {
      type: 'para',
      text: {
        en: 'Standard Ethernet Maximum Transmission Unit (MTU) is 1500 bytes. Subtracting 20 bytes for IPv4 header and 20 bytes for TCP header leaves 1460 bytes of Maximum Segment Size (MSS).',
        bn: 'স্ট্যান্ডার্ড ইথারনেটের ম্যাক্সিমাম ট্রান্সমিশন ইউনিট (এমটিইউ) ১৫০০ বাইট। আইপি হেডার ২০ বাইট ও টিসিপি হেডার ২০ বাইট বাদ দিলে সর্বোচ্চ পেলোড (এমএসএস) থাকে ১৪৬০ বাইট।'
      }
    },
    {
      type: 'code',
      code: `const mtu = 1500;
const ipHeader = 20;
const tcpHeader = 20;

// Maximum Segment Size available for application payload
const mss = mtu - ipHeader - tcpHeader;
const payload5kb = 5000;
const segmentsNeeded = Math.ceil(payload5kb / mss);

console.log('Standard MSS byte limit =', mss);
console.log('Segments required for 5000 bytes =', segmentsNeeded);

// prints: Standard MSS byte limit = 1460
// prints: Segments required for 5000 bytes = 4`
    },

    { type: 'heading', id: 'p8', text: { en: '8. UDP vs TCP vs QUIC: transport architecture comparison', bn: '৮. ইউডিপি বনাম টিসিপি বনাম কুইক: ট্রান্সপোর্ট কাঠামোর তুলনা' } },
    {
      type: 'para',
      text: {
        en: 'UDP provides connectionless datagram delivery with zero handshake latency. HTTP/3 implements QUIC over UDP to eliminate TCP head-of-line blocking.',
        bn: 'ইউডিপি কোনো হ্যান্ডশেক ছাড়া শূন্য লেটেন্সিতে ডেটাগ্রাম পাঠায়। এইচটিটিপি/৩ ইউডিপির ওপর কুইক প্রোটোকল ব্যবহার করে টিসিপির হেড-অব-লাইন ব্লকিং দূর করেছে।'
      }
    },
    {
      type: 'code',
      code: `const protocols = {
  TCP: { setup: '1 RTT handshake', reliability: 'Guaranteed byte-stream order' },
  UDP: { setup: '0 RTT connectionless', reliability: 'Unreliable datagrams' },
  QUIC: { setup: '0-1 RTT integrated TLS', reliability: 'Independent stream multiplexing' }
};

console.log('TCP Handshake:', protocols.TCP.setup);
console.log('UDP Setup:', protocols.UDP.setup);
console.log('QUIC Advantage:', protocols.QUIC.reliability);

// prints: TCP Handshake: 1 RTT handshake
// prints: UDP Setup: 0 RTT connectionless
// prints: QUIC Advantage: Independent stream multiplexing`
    },

    { type: 'heading', id: 'p9', text: { en: '9. Routing, default gateways, and Time-To-Live (TTL)', bn: '৯. রাউটিং, ডিফল্ট গেটওয়ে ও টাইম-টু-লাইভ (টিটিএল)' } },
    {
      type: 'para',
      text: {
        en: 'When a destination IP falls outside the local subnet, the host forwards the packet to its default gateway router. Each router decrements the IP Time-To-Live (TTL) field.',
        bn: 'ডেস্টিনেশন আইপি লোকাল সাবনেটের বাইরে হলে হোস্ট প্যাকেটটি ডিফল্ট গেটওয়ে রাউটারে পাঠায়। প্রতিটি রাউটার আইপির টাইম-টু-লাইভ (টিটিএল) মান ১ করে কমিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      code: `function simulateTraceroute(targetHost: string, maxHops: number) {
  const hops = [];
  for (let ttl = 1; ttl <= maxHops; ttl++) {
    if (ttl === maxHops) {
      hops.push({ hop: ttl, ip: targetHost, status: 'ICMP Echo Reply (Reached Destination)' });
    } else {
      hops.push({ hop: ttl, ip: \`10.0.\${ttl}.1\`, status: 'ICMP Time Exceeded (TTL expired in transit)' });
    }
  }
  return hops;
}

const trace = simulateTraceroute('93.184.216.34', 4);
console.log('Total routing hops =', trace.length);
console.log('Final destination hop:', trace[3].ip);

// prints: Total routing hops = 4
// prints: Final destination hop: 93.184.216.34`
    },

    { type: 'heading', id: 'p10', text: { en: '10. Essential command-line diagnostic toolkit: ss, ping, curl', bn: '১০. অপরিহার্য কমান্ড-লাইন ডায়াগনস্টিক টুলকিট: ss, ping, curl' } },
    {
      type: 'para',
      text: {
        en: 'Mastering five terminal utilities enables instant diagnosis of latency, connection status, HTTP headers, and raw packet captures during incidents.',
        bn: 'পাঁচটি টার্মিনাল কমান্ড আয়ত্ত করলে সার্ভার বিভ্রাটের সময় লেটেন্সি, কানেকশন স্টেট, এইচটিটিপি হেডার ও র প্যাকেট দ্রুত বিশ্লেষণ করা যায়।'
      }
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'table',
      head: [{ en: 'Layer / Concept', bn: 'স্তর / ধারণা' }, { en: 'Standard PDU', bn: 'স্ট্যান্ডার্ড PDU' }, { en: 'Addressing Unit', bn: 'ঠিকানা' }, { en: 'Primary Core Protocols', bn: 'প্রধান প্রোটোকল' }],
      rows: [
        [{ en: 'Layer 7: Application', bn: 'লেয়ার ৭: অ্যাপ্লিকেশন' }, { en: 'Data / Payload', bn: 'ডেটা / পেলোড' }, { en: 'URL / Host Header', bn: 'ইউআরএল / হোস্ট হেডার' }, { en: 'HTTP, DNS, TLS, SSH', bn: 'HTTP, DNS, TLS, SSH' }],
        [{ en: 'Layer 4: Transport', bn: 'লেয়ার ৪: ট্রান্সপোর্ট' }, { en: 'Segment (TCP) / Datagram (UDP)', bn: 'সেগমেন্ট / ডেটাগ্রাম' }, { en: '16-bit Port Number (0-65535)', bn: '১৬-বিট পোর্ট নাম্বার (0-65535)' }, { en: 'TCP, UDP, QUIC, SCTP', bn: 'TCP, UDP, QUIC, SCTP' }],
        [{ en: 'Layer 3: Network', bn: 'লেয়ার ৩: নেটওয়ার্ক' }, { en: 'Packet', bn: 'প্যাকেট' }, { en: '32-bit IPv4 / 128-bit IPv6', bn: '৩২-বিট IPv4 / ১২৮-বিট IPv6' }, { en: 'IP, ICMP, BGP, OSPF', bn: 'IP, ICMP, BGP, OSPF' }],
        [{ en: 'Layer 2: Data Link', bn: 'লেয়ার ২: ডেটা লিংক' }, { en: 'Frame', bn: 'ফ্রেম' }, { en: '48-bit Hardware MAC Address', bn: '৪৮-বিট হার্ডওয়্যার ম্যাক অ্যাড্রেস' }, { en: 'Ethernet, ARP, 802.11 Wi-Fi', bn: 'Ethernet, ARP, 802.11 Wi-Fi' }]
      ],
      caption: { en: 'The four active networking layers showing PDUs, addressing modes, and dominant protocols.', bn: 'নেটওয়ার্কের সক্রিয় চারটি স্তর, তাদের PDU, অ্যাড্রেসিং ব্যবস্থা এবং প্রধান প্রোটোকলসমূহ।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to diagnose production network connectivity issues', bn: 'কীভাবে প্রোডাকশন নেটওয়ার্ক বিভ্রাট নির্ণয় করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Test local interface and socket', bn: 'লোকাল ইন্টারফেস ও সকেট যাচাই' }, text: { en: 'Run ss -tlpn to confirm the target application daemon is actively listening on the expected port.', bn: 'ss -tlpn চালিয়ে নিশ্চিত করুন কাঙ্ক্ষিত অ্যাপ্লিকেশনটি সঠিক পোর্টে লিসেন করছে কিনা।' } },
        { title: { en: 'Verify name resolution', bn: 'ডিএনএস নাম সমাধান পরীক্ষা' }, text: { en: 'Execute dig domain.com to verify whether DNS returns valid A records and check corresponding TTLs.', bn: 'dig চালিয়ে নিশ্চিত করুন ডিএনএস সঠিক এ রেকর্ড ফেরত দিচ্ছে কিনা এবং টিটিএল পরীক্ষা করুন।' } },
        { title: { en: 'Confirm IP network reachability', bn: 'আইপি নেটওয়ার্ক রিচ্যাবিলিটি নিশ্চিতকরণ' }, text: { en: 'Send 4 ICMP packets with ping to establish whether Layer 3 routing is intact to the target host.', bn: 'পিং দিয়ে ৪টি ICMP প্যাকেট পাঠিয়ে পরীক্ষা করুন লেয়ার ৩ রাউটিংয়ের মাধ্যমে গন্তব্যে পৌঁছানো যাচ্ছে কিনা।' } },
        { title: { en: 'Check TCP port handshake', bn: 'টিসিপি পোর্ট হ্যান্ডশেক পরীক্ষা' }, text: { en: 'Test TCP 3-way handshake completion with curl -Iv or nc -zv host port to rule out firewall drops.', bn: 'ফায়ারওয়াল ড্রপ এড়াতে curl -Iv বা nc -zv দিয়ে টিসিপি থ্রি-ওয়ে হ্যান্ডশেক সম্পন্ন হয় কিনা দেখুন।' } },
        { title: { en: 'Inspect packet payload on the wire', bn: 'তারের প্যাকেট বিশ্লেষণ' }, text: { en: 'Run tcpdump on the network interface to observe retransmissions, RST packets, and window updates.', bn: 'tcpdump চালিয়ে রি-ট্রান্সমিশন, আরএসটি প্যাকেট এবং উইন্ডো সাইজ সরাসরি পর্যবেক্ষণ করুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Layered encapsulation and packet flow across routers', bn: 'স্তরভিত্তিক এনক্যাপসুলেশন এবং রাউটারজুড়ে প্যাকেট প্রবাহ' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="flow of packet encapsulation from application data to ethernet frames and forwarding across default gateway router"><g font-size="11" fill="currentColor"><rect x="20" y="24" width="130" height="34" rx="6" fill="none" stroke="currentColor"/><text x="85" y="46" text-anchor="middle">HTTP Payload</text><line x1="150" y1="41" x2="190" y2="41" stroke="currentColor" stroke-width="1.2"/><rect x="190" y="24" width="140" height="34" rx="6" fill="none" stroke="currentColor"/><text x="260" y="46" text-anchor="middle">TCP Header + Data</text><line x1="330" y1="41" x2="370" y2="41" stroke="currentColor" stroke-width="1.2"/><rect x="370" y="24" width="140" height="34" rx="6" fill="none" stroke="currentColor"/><text x="440" y="46" text-anchor="middle">IP Header + Segment</text><line x1="510" y1="41" x2="550" y2="41" stroke="currentColor" stroke-width="1.2"/><rect x="550" y="24" width="100" height="34" rx="6" fill="none" stroke="currentColor"/><text x="600" y="46" text-anchor="middle">Eth Frame</text><rect x="60" y="110" width="160" height="34" rx="6" fill="none" stroke="currentColor"/><text x="140" y="132" text-anchor="middle">Host: 192.168.1.10</text><line x1="220" y1="127" x2="300" y2="127" stroke="currentColor" stroke-width="1.2"/><rect x="300" y="110" width="180" height="34" rx="6" fill="none" stroke="currentColor"/><text x="390" y="132" text-anchor="middle">Default Gateway: .1</text><line x1="480" y1="127" x2="550" y2="127" stroke="currentColor" stroke-width="1.2"/><text x="590" y="132" font-size="10">Internet</text></g></svg>`,
      caption: { en: 'Encapsulation assembly at the sender host and next-hop forwarding via the local default gateway.', bn: 'প্রেরক হোস্টে এনক্যাপসুলেশন সংযোজন এবং লোকাল ডিফল্ট গেটওয়ের মাধ্যমে পরবর্তী হপে ফরোয়ার্ডিং।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Production firewall tip', bn: 'প্রোডাকশন ফায়ারওয়াল টিপ' },
      text: {
        en: 'When debugging connection timeouts where ping works but curl hangs, the culprit is almost always an intermediate firewall or security group blocking TCP port 80 or 443 while allowing ICMP.',
        bn: 'যেখানে পিং কাজ করে কিন্তু কার্ল হ্যাং হয়ে থাকে, সেখানে কারণ প্রায় সবসময়ই কোনো ফায়ারওয়াল যা আইসিএমপি চালু রাখলেও টিসিপি পোর্ট 80 বা 443 আটকে দিয়েছে।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The DNS caching and TTL trap', bn: 'ডিএনএস ক্যাশিং ও টিটিএলের ফাঁদ' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Lowering TTL during a migration incident instead of days before', bn: 'স্থানান্তরের দিন টিটিএল কমানোর ভুল' },
      text: {
        en: 'If your DNS record has a TTL of 86400 seconds (24 hours), changing the IP during an incident will take up to 24 hours to reach all users. Lower your TTL to 60 seconds at least two days before scheduled infrastructure moves.',
        bn: 'আপনার ডিএনএস রেকর্ডে টিটিএল ৮৬৪০০ সেকেন্ড (২৪ ঘণ্টা) থাকলে দুর্ঘটনার সময় আইপি বদলালেও সব ব্যবহারকারীর কাছে পৌঁছাতে ২৪ ঘণ্টা সময় লেগে যাবে। অবকাঠামো পরিবর্তনের অন্তত দুই দিন আগে টিটিএল ৬০ সেকেন্ডে নামিয়ে আনুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'networking-tools-ex1',
      kind: 'mcq',
      topic: 'networking: Protocols and tools',
      question: { en: 'How many usable host IP addresses are available in a /24 subnet?', bn: 'একটি /24 সাবনেটে কতটি ব্যবহারযোগ্য হোস্ট আইপি পাওয়া যায়?' },
      options: [
        { en: '254 usable hosts (256 total minus network and broadcast addresses)', bn: '২৫৪টি ব্যবহারযোগ্য হোস্ট (২৫৬টি মোট আইপি থেকে নেটওয়ার্ক ও ব্রডকাস্ট বাদে)' },
        { en: '256 usable hosts', bn: '২৫৬টি ব্যবহারযোগ্য হোস্ট' },
        { en: '128 usable hosts', bn: '১২৮টি ব্যবহারযোগ্য হোস্ট' },
        { en: '512 usable hosts', bn: '৫১২টি ব্যবহারযোগ্য হোস্ট' }
      ],
      answer: 0,
      hint: { en: '256 minus 2 reserved addresses.', bn: '২৫৬ থেকে ২টি সংরক্ষিত ঠিকানা বিয়োগ।' },
      explanation: { en: 'A /24 subnet has 256 total IP addresses. Subtracting the network identifier and the broadcast address leaves 254 usable hosts.', bn: 'একটি /24 সাবনেটে মোট ২৫৬টি আইপি থাকে। নেটওয়ার্ক আইডি ও ব্রডকাস্ট বাদ দিলে ২৫৪টি ব্যবহারযোগ্য থাকে।' }
    },
    {
      id: 'networking-tools-ex2',
      kind: 'mcq',
      topic: 'networking: Protocols and tools',
      question: { en: 'What protocol resolves an IP address to a local physical MAC address?', bn: 'কোন প্রোটোকল একটি আইপি অ্যাড্রেসকে লোকাল ফিজিক্যাল ম্যাক অ্যাড্রেসে রূপান্তর করে?' },
      options: [
        { en: 'ARP (Address Resolution Protocol)', bn: 'ARP (Address Resolution Protocol)' },
        { en: 'DNS (Domain Name System)', bn: 'DNS (Domain Name System)' },
        { en: 'BGP (Border Gateway Protocol)', bn: 'BGP (Border Gateway Protocol)' },
        { en: 'DHCP (Dynamic Host Configuration Protocol)', bn: 'DHCP (Dynamic Host Configuration Protocol)' }
      ],
      answer: 0,
      hint: { en: 'Layer 2 resolution protocol.', bn: 'লেয়ার ২ রেজোলিউশন প্রোটোকল।' },
      explanation: { en: 'ARP maps an IPv4 address to its corresponding physical Ethernet MAC address on a local area network.', bn: 'লোকাল নেটওয়ার্কে আইপিভি৪ ঠিকানাকে ইথারনেট ম্যাক ঠিকানায় রূপান্তর করতে এআরপি কাজ করে।' }
    },
    {
      id: 'networking-tools-ex3',
      kind: 'mcq',
      topic: 'networking: Protocols and tools',
      question: { en: 'What is the maximum segment size (MSS) for a standard 1500-byte MTU with 20-byte IP and 20-byte TCP headers?', bn: '১৫০০ বাইট এমটিইউ থেকে ২০ বাইট আইপি ও ২০ বাইট টিসিপি হেডার বাদ দিলে এমএসএস কত হয়?' },
      options: [
        { en: '1460 bytes', bn: '১৪৬০ বাইট' },
        { en: '1500 bytes', bn: '১৫০০ বাইট' },
        { en: '1480 bytes', bn: '১৪৮০ বাইট' },
        { en: '1400 bytes', bn: '১৪০০ বাইট' }
      ],
      answer: 0,
      hint: { en: '1500 minus 40 bytes of headers.', bn: '১৫০০ থেকে ৪০ বাইট হেডার বিয়োগ।' },
      explanation: { en: 'Standard Ethernet MTU of 1500 bytes minus 20 bytes IPv4 and 20 bytes TCP leaves 1460 bytes for the MSS payload.', bn: '১৫০০ বাইটের এমটিইউ থেকে ২০ বাইট আইপি ও ২০ বাইট টিসিপি বাদ দিলে ১৪৬০ বাইট এমএসএস থাকে।' }
    },
    {
      id: 'networking-tools-ex4',
      kind: 'mcq',
      topic: 'networking: Protocols and tools',
      question: { en: 'In a TCP handshake where client sends SYN seq=1000, what is the server acknowledgment number in SYN-ACK?', bn: 'টিসিপি হ্যান্ডশেকে ক্লায়েন্ট SYN seq=1000 পাঠালে সার্ভারের SYN-ACK-তে ack নাম্বার কত হবে?' },
      options: [
        { en: '1001 (next expected sequence number)', bn: '১০০১ (পরবর্তী প্রত্যাশিত সিকোয়েন্স নম্বর)' },
        { en: '1000', bn: '১০০০' },
        { en: '2000', bn: '২০০০' },
        { en: '500', bn: '৫০০' }
      ],
      answer: 0,
      hint: { en: 'SYN consumes one sequence number.', bn: 'SYN ফ্ল্যাগ ১টি সিকোয়েন্স নম্বর ব্যবহার করে।' },
      explanation: { en: 'The acknowledgment number in SYN-ACK indicates the next expected sequence number, which is 1000 + 1 = 1001.', bn: 'SYN-ACK-তে অ্যাকনলেজমেন্ট নম্বর পরবর্তী প্রত্যাশিত নম্বর নির্দেশ করে, যা ১০০০ + ১ = ১০০১।' }
    }
  ],
  quiz: {
    id: 'networking-protocols-tools-quiz',
    title: { en: 'Quiz — Networking protocols and diagnostic tools', bn: 'কুইজ — নেটওয়ার্কিং প্রোটোকল ও ডায়াগনস্টিক টুলস' },
    questions: [
      {
        id: 'networking-protocols-q1',
        kind: 'mcq',
        topic: 'networking: Protocols and tools',
        question: { en: 'Which CLI command displays active TCP listening ports and associated processes?', bn: 'কোন সিএলআই কমান্ড সক্রিয় টিসিপি লিসেনিং পোর্ট এবং সংশ্লিষ্ট প্রসেস প্রদর্শন করে?' },
        options: [
          { en: 'ss -tlpn', bn: 'ss -tlpn' },
          { en: 'ping -c 4', bn: 'ping -c 4' },
          { en: 'traceroute', bn: 'traceroute' },
          { en: 'dig +trace', bn: 'dig +trace' }
        ],
        answer: 0,
        hint: { en: 'Socket statistics command.', bn: 'সকেট স্ট্যাটিস্টিকস কমান্ড।' },
        explanation: { en: 'ss -tlpn shows TCP (-t), listening (-l), numeric ports (-n), and process names (-p).', bn: 'ss -tlpn টিসিপি (-t), লিসেনিং (-l), নিউমেরিক পোর্ট (-n) ও প্রসেস নাম (-p) দেখায়।' }
      },
      {
        id: 'networking-protocols-q2',
        kind: 'mcq',
        topic: 'networking: Protocols and tools',
        question: { en: 'What is the default destination port for HTTPS web traffic?', bn: 'এইচটিটিপিএস ওয়েব ট্রাফিকের ডিফল্ট ডেস্টিনেশন পোর্ট কোনটি?' },
        options: [
          { en: 'Port 443', bn: 'পোর্ট ৪৪৩' },
          { en: 'Port 80', bn: 'পোর্ট ৮০' },
          { en: 'Port 22', bn: 'পোর্ট ২২' },
          { en: 'Port 53', bn: 'পোর্ট ৫৩' }
        ],
        answer: 0,
        hint: { en: 'Standard TLS web port.', bn: 'স্ট্যান্ডার্ড টিএলএস ওয়েব পোর্ট।' },
        explanation: { en: 'Port 443 is the internationally assigned well-known port for secure HTTP over TLS.', bn: 'টিএলএস সহযোগে সুরক্ষিত এইচটিটিপির জন্য আন্তর্জাতিকভাবে ৪৪৩ পোর্ট নির্ধারিত।' }
      },
      {
        id: 'networking-protocols-q3',
        kind: 'mcq',
        topic: 'networking: Protocols and tools',
        question: { en: 'Why does HTTP/3 utilize QUIC over UDP instead of standard TCP?', bn: 'এইচটিটিপি/৩ কেন স্ট্যান্ডার্ড টিসিপির বদলে ইউডিপির ওপর কুইক ব্যবহার করে?' },
        options: [
          { en: 'To eliminate head-of-line blocking across multiplexed independent streams', bn: 'মাল্টিপ্লেক্সড স্বাধীন স্ট্রিমগুলোর মাঝে হেড-অব-লাইন ব্লকিং দূর করতে' },
          { en: 'Because UDP packets are always encrypted by the kernel', bn: 'কারণ ইউডিপি প্যাকেট কার্নেল দ্বারা সর্বদা এনক্রিপ্ট থাকে' },
          { en: 'To avoid needing IP addresses', bn: 'আইপি অ্যাড্রেসের প্রয়োজনীয়তা দূর করতে' },
          { en: 'Because TCP does not support websites', bn: 'কারণ টিসিপি ওয়েবসাইট সমর্থন করে না' }
        ],
        answer: 0,
        hint: { en: 'Transport layer stream independence.', bn: 'ট্রান্সপোর্ট স্তরে স্ট্রিমের স্বাধীনতা।' },
        explanation: { en: 'QUIC multiplexes streams independently over UDP so that a lost packet on one stream does not pause other concurrent streams.', bn: 'কুইক ইউডিপির ওপর প্রতিটি স্ট্রিমকে স্বাধীনভাবে চালায়, যাতে এক স্ট্রিমের প্যাকেট হারালে অন্য স্ট্রিম থেমে না যায়।' }
      },
      {
        id: 'networking-protocols-q4',
        kind: 'mcq',
        topic: 'networking: Protocols and tools',
        question: { en: 'What happens to an IP packet when its Time-To-Live (TTL) field reaches zero?', bn: 'একটি আইপি প্যাকেটের টাইম-টু-লাইভ (টিটিএল) মান শূন্যে পৌঁছালে কী ঘটে?' },
        options: [
          { en: 'The router discards the packet and sends an ICMP Time Exceeded message', bn: 'রাউটার প্যাকেটটি ফেলে দেয় এবং একটি আইসিএমপি টাইম এক্সিডেড বার্তা পাঠায়' },
          { en: 'The packet loops back to the sender indefinitely', bn: 'প্যাকেটটি প্রেরকের কাছে ফিরে গিয়ে অনির্দিষ্টকাল ঘুরতে থাকে' },
          { en: 'The destination server retransmits the frame', bn: 'গন্তব্য সার্ভার ফ্রেমটি পুনরায় পাঠায়' },
          { en: 'The packet priority is automatically upgraded', bn: 'প্যাকেটের অগ্রাধিকার স্বয়ংক্রিয়ভাবে বাড়িয়ে দেওয়া হয়' }
        ],
        answer: 0,
        hint: { en: 'Packet loop prevention mechanism.', bn: 'প্যাকেটের অনির্দিষ্ট লুপ প্রতিরোধের ব্যবস্থা।' },
        explanation: { en: 'TTL prevents infinite routing loops. When it hits zero, the router drops the packet and notifies the sender via ICMP type 11.', bn: 'টিটিএল অনির্দিষ্ট রাউটিং লুপ রোধ করে। এটি শূন্য হলে রাউটার প্যাকেট ড্রপ করে আইসিএমপি টাইপ ১১ বার্তা পাঠায়।' }
      }
    ]
  }
};
