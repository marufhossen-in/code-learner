import type { Lesson } from '../../../lib/types';

export const TcpHandshakeLesson: Lesson = {
  slug: 'tcp-handshake',
  tech: 'tcpip',
  title: {
    en: 'The TCP Handshake & Teardown: SYN, ACK, FIN & TIME_WAIT States',
    bn: 'TCP হ্যান্ডশেক ও সমাপ্তি: SYN, ACK, FIN এবং TIME_WAIT স্টেট'
  },
  summary: {
    en: 'Master the complete TCP connection lifecycle: 3-way connection establishment (SYN, SYN-ACK, ACK), state transitions (LISTEN, SYN_SENT, ESTABLISHED), 4-way teardown (FIN-ACK-FIN-ACK), and the 2MSL TIME_WAIT state.',
    bn: 'TCP সংযোগের পূর্ণাঙ্গ জীবনচক্রে দক্ষতা: ৩-মুখী সংযোগ স্থাপন (SYN, SYN-ACK, ACK), স্টেট ট্রানজিশন (LISTEN, SYN_SENT, ESTABLISHED), ৪-মুখী সমাপ্তি (FIN-ACK-FIN-ACK) এবং 2MSL TIME_WAIT স্টেট।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'handshake-overview',
      text: {
        en: '1. Establishing Connections: The 3-Way Handshake',
        bn: '১. সংযোগ স্থাপন: ৩-মুখী হ্যান্ডশেক (3-Way Handshake)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before a single byte of HTTP, database, or application data can traverse a TCP connection, both client and server must agree on starting sequence numbers and allocate operating system socket buffers. This is achieved through the 3-Way Handshake:',
        bn: 'কোনো অ্যাপ্লিকেশন বা ডাটাবেজের একটি একক বাইট পাঠানোর পূর্বেও ক্লায়েন্ট ও সার্ভার উভয় পক্ষকে প্রারম্ভিক সিকোয়েন্স নম্বরে সম্মত হতে হয় এবং অপারেটিং সিস্টেম সকেট বাফার বরাদ্দ করতে হয়। এটি ৩-মুখী হ্যান্ডশেকের মাধ্যমে সম্পন্ন হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Step 1 (SYN): The client picks a random Initial Sequence Number (ISN = X) and sends a TCP segment with the SYN flag set. Client state transitions from CLOSED to SYN_SENT.',
          bn: '১. ধাপ ১ (SYN): ক্লায়েন্ট একটি এলোমেলো প্রারম্ভিক সিকোয়েন্স নম্বর (ISN = X) বেছে নেয় এবং SYN ফ্ল্যাগ যুক্ত করে পাঠায়। ক্লায়েন্ট CLOSED থেকে SYN_SENT স্টেটে যায়।'
        },
        {
          en: '2. Step 2 (SYN-ACK): The listening server receives the SYN, picks its own random ISN = Y, acknowledges the client by setting ACK = X + 1, and sends both SYN and ACK flags. Server state moves to SYN_RCVD.',
          bn: '২. ধাপ ২ (SYN-ACK): সার্ভার SYN গ্রহণ করে নিজের ISN = Y নির্ধারণ করে এবং ক্লায়েন্টকে ACK = X + 1 দিয়ে SYN-ACK পাঠায়। সার্ভার SYN_RCVD স্টেটে যায়।'
        },
        {
          en: '3. Step 3 (ACK): The client receives the SYN-ACK, transitions to ESTABLISHED, and sends an ACK = Y + 1. Upon receipt, the server also transitions to ESTABLISHED. The bidirectional socket is now open for data exchange.',
          bn: '৩. ধাপ ৩ (ACK): ক্লায়েন্ট SYN-ACK পেয়ে ESTABLISHED স্টেটে যায় এবং ACK = Y + 1 পাঠায়। সার্ভার এটি পেলে সেও ESTABLISHED স্টেটে যায়। এবার উভয় দিকে ডাটা চলাচলের পথ উন্মুক্ত হয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'handshake-and-teardown-diagram',
      title: {
        en: 'TCP Connection Lifecycle: 3-Way Handshake & 4-Way Teardown',
        bn: 'TCP সংযোগের জীবনচক্র: ৩-মুখী হ্যান্ডশেক ও ৪-মুখী সমাপ্তি'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="30" fill="#38bdf8" font-size="17" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">TCP State Machine: 3-Way Handshake &amp; 4-Way Teardown</text>' +
          '<!-- Headers: Client & Server -->' +
          '<rect x="80" y="50" width="160" height="35" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>' +
          '<text x="160" y="73" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">CLIENT (Initiator)</text>' +
          '<rect x="560" y="50" width="160" height="35" rx="6" fill="#064e3b" stroke="#10b981"/>' +
          '<text x="640" y="73" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">SERVER (Listener)</text>' +
          '<!-- Timelines -->' +
          '<line x1="160" y1="90" x2="160" y2="400" stroke="#475569" stroke-width="2" stroke-dasharray="4"/>' +
          '<line x1="640" y1="90" x2="640" y2="400" stroke="#475569" stroke-width="2" stroke-dasharray="4"/>' +
          '<!-- Handshake Step 1: SYN -->' +
          '<path d="M 160 115 L 640 145" stroke="#38bdf8" stroke-width="2"/>' +
          '<polygon points="640,145 630,140 632,148" fill="#38bdf8"/>' +
          '<text x="400" y="125" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">1. SYN: Seq = X (SYN_SENT)</text>' +
          '<!-- Handshake Step 2: SYN-ACK -->' +
          '<path d="M 640 160 L 160 190" stroke="#10b981" stroke-width="2"/>' +
          '<polygon points="160,190 170,185 168,193" fill="#10b981"/>' +
          '<text x="400" y="170" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">2. SYN-ACK: Seq = Y, Ack = X + 1 (SYN_RCVD)</text>' +
          '<!-- Handshake Step 3: ACK -->' +
          '<path d="M 160 205 L 640 235" stroke="#fbbf24" stroke-width="2"/>' +
          '<polygon points="640,235 630,230 632,238" fill="#fbbf24"/>' +
          '<text x="400" y="215" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">3. ACK: Ack = Y + 1 (ESTABLISHED)</text>' +
          '<!-- Data Transfer Banner -->' +
          '<rect x="220" y="245" width="360" height="26" rx="4" fill="#0f172a" stroke="#64748b"/>' +
          '<text x="400" y="262" fill="#cbd5e1" font-size="10" text-anchor="middle">&#x2194; Full-Duplex Bidirectional Data Flow &#x2194;</text>' +
          '<!-- Teardown Step 1: FIN -->' +
          '<path d="M 160 285 L 640 310" stroke="#f87171" stroke-width="2"/>' +
          '<polygon points="640,310 630,305 632,313" fill="#f87171"/>' +
          '<text x="400" y="293" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">4. FIN: Close Client &#x2192; Server (FIN_WAIT_1)</text>' +
          '<!-- Teardown Step 2: ACK -->' +
          '<path d="M 640 320 L 160 340" stroke="#64748b" stroke-width="1.5"/>' +
          '<polygon points="160,340 170,336 169,343" fill="#64748b"/>' +
          '<text x="400" y="327" fill="#94a3b8" font-size="9" text-anchor="middle">5. ACK: Ack client FIN (CLOSE_WAIT)</text>' +
          '<!-- Teardown Step 3: Server FIN -->' +
          '<path d="M 640 350 L 160 375" stroke="#f87171" stroke-width="2"/>' +
          '<polygon points="160,375 170,370 168,378" fill="#f87171"/>' +
          '<text x="400" y="358" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">6. FIN: Close Server &#x2192; Client (LAST_ACK)</text>' +
          '<!-- Teardown Step 4: Final ACK -->' +
          '<path d="M 160 385 L 640 405" stroke="#64748b" stroke-width="1.5"/>' +
          '<polygon points="640,405 630,401 632,408" fill="#64748b"/>' +
          '<text x="400" y="392" fill="#94a3b8" font-size="9" text-anchor="middle">7. Final ACK: Client enters TIME_WAIT (2MSL timer)</text>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'syn-flood-protection',
      text: {
        en: '2. SYN Flood DDoS Attacks & SYN Cookies',
        bn: '২. SYN ফ্লাড DDoS আক্রমণ এবং SYN কুকিজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a SYN Flood attack, an attacker floods a server with millions of spoofed SYN packets but never returns the final ACK. In standard TCP, the server allocates socket memory in the SYN_RCVD state waiting for the timeout, rapidly exhausting kernel memory (half-open connection backlog).',
        bn: 'একটি SYN ফ্লাড আক্রমণে আক্রমণকারী সার্ভারকে লক্ষ লক্ষ ভুয়া SYN প্যাকেট পাঠায় কিন্তু কখনোই শেষ ACK ফেরত দেয় না। সাধারণ TCP তে সার্ভার SYN_RCVD স্টেটে মেমরি বরাদ্দ করে টাইমাউটের অপেক্ষা করতে থাকে, যার ফলে সার্ভারের কার্নেল মেমরি দ্রুত ফুরিয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The defense is SYN Cookies (RFC 4987). When the SYN queue fills, the server allocates zero memory for incoming SYNs. Instead, it encodes the connection state cryptographically into its initial sequence number (Y). When the client returns the final ACK with Y + 1, the server decodes the secret cookie and allocates the socket only for legitimate clients.',
        bn: 'এর প্রধান প্রতিরোধ ব্যবস্থা হলো SYN Cookies (RFC 4987)। SYN কিউ পূর্ণ হলে সার্ভার কোনো মেমরি বরাদ্দ করে না; বরং সে সংযোগের তথ্যগুলো ক্রিপ্টোগ্রাফিকভাবে তার প্রারম্ভিক সিকোয়েন্স নম্বরের (Y) মধ্যে এনকোড করে পাঠায়। ক্লায়েন্ট যখন Y + 1 সহ বৈধ ACK ফেরত দেয়, কেবল তখনই সার্ভার মেমরি বরাদ্দ করে।'
      }
    },
    {
      type: 'heading',
      id: 'four-way-teardown',
      text: {
        en: '3. The 4-Way Teardown and the 2MSL TIME_WAIT State',
        bn: '৩. ৪-মুখী সমাপ্তি এবং 2MSL TIME_WAIT স্টেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because TCP is full-duplex, terminating a connection requires closing both directions independently with 4 packets (FIN -> ACK -> FIN -> ACK). The side initiating the close enters the TIME_WAIT state for 2 Maximum Segment Lifetimes (2MSL, typically 60 to 120 seconds):',
        bn: 'TCP সংযোগ ফুল-ডুপ্লেক্স হওয়ায় এটি সমাপ্ত করতে উভয় দিক স্বাধীনভাবে ৪ টি প্যাকেটের মাধ্যমে বন্ধ করতে হয় (FIN -> ACK -> FIN -> ACK)। যে পক্ষ প্রথমে সংযোগ বন্ধ শুরু করে সে 2MSL (সাধারণত ৬০ থেকে ১২০ সেকেন্ড) TIME_WAIT স্টেটে থাকে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Ensures Final ACK Delivery: If the client\'s final ACK is lost on the wire, the server retransmits its FIN. In TIME_WAIT, the client can safely re-send the ACK.',
          bn: '১. শেষ ACK নিশ্চিতকরণ: ক্লায়েন্টের শেষ ACK হারিয়ে গেলে সার্ভার পুনরায় FIN পাঠাবে; TIME_WAIT স্টেটে থাকায় ক্লায়েন্ট আবার ACK পাঠাতে পারে।'
        },
        {
          en: '2. Flushes Lingering Packets: Allows delayed duplicate packets from the dead connection to expire in router buffers, preventing them from corrupting a new connection reusing the same port.',
          bn: '২. পুরানো প্যাকেট দূরীকরণ: নেটওয়ার্কের রাউটারে আটকে থাকা পুরানো প্যাকেটকে নষ্ট হতে সময় দেয়, যাতে একই পোর্টে চালু হওয়া নতুন কোনো সংযোগে বিশৃঙ্খলা না ঘটে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. TCP State Machine Simulator in TypeScript',
        bn: '৪. TypeScript এ TCP স্টেট মেশিন সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models client and server state transitions across the 3-way handshake and 4-way teardown lifecycle:',
        bn: 'নিচের TypeScript প্রোগ্রামটি ৩-মুখী হ্যান্ডশেক ও ৪-মুখী সমাপ্তির জীবনচক্রে ক্লায়েন্ট ও সার্ভারের স্টেট পরিবর্তন সিমুলেট করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of TCP 3-way handshake, full-duplex teardown, and TIME_WAIT timer state transitions.',
        bn: 'TCP ৩-মুখী হ্যান্ডশেক, ফুল-ডুপ্লেক্স সমাপ্তি এবং TIME_WAIT স্টেট পরিবর্তনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of TCP State Machine: Handshake and Teardown

type TcpState =
  | 'CLOSED'
  | 'SYN_SENT'
  | 'SYN_RCVD'
  | 'ESTABLISHED'
  | 'FIN_WAIT_1'
  | 'FIN_WAIT_2'
  | 'CLOSE_WAIT'
  | 'LAST_ACK'
  | 'TIME_WAIT';

class TcpEndpoint {
  public state: TcpState = 'CLOSED';
  public sequenceNumber: number = 0;
  public ackNumber: number = 0;

  constructor(public readonly role: 'CLIENT' | 'SERVER') {}
}

class TcpLifecycleSimulation {
  public client = new TcpEndpoint('CLIENT');
  public server = new TcpEndpoint('SERVER');

  // Step 1: 3-Way Handshake
  performHandshake(clientIsn: number, serverIsn: number): void {
    console.log('--- Phase 1: 3-Way Handshake ---');
    // 1. Client sends SYN
    this.client.sequenceNumber = clientIsn;
    this.client.state = 'SYN_SENT';
    console.log('1. Client -> SYN (ISN: ' + clientIsn + ') [State: ' + this.client.state + ']');

    // 2. Server receives SYN, sends SYN-ACK
    this.server.sequenceNumber = serverIsn;
    this.server.ackNumber = clientIsn + 1;
    this.server.state = 'SYN_RCVD';
    console.log('2. Server -> SYN-ACK (ISN: ' + serverIsn + ', ACK: ' + this.server.ackNumber + ') [State: ' + this.server.state + ']');

    // 3. Client receives SYN-ACK, sends ACK
    this.client.ackNumber = serverIsn + 1;
    this.client.state = 'ESTABLISHED';
    this.server.state = 'ESTABLISHED';
    console.log('3. Client -> ACK (' + this.client.ackNumber + ') [Both States: ESTABLISHED]');
  }

  // Step 2: 4-Way Teardown
  performTeardown(): void {
    console.log('\\n--- Phase 2: 4-Way Connection Teardown ---');
    // 1. Client initiates close (sends FIN)
    this.client.state = 'FIN_WAIT_1';
    console.log('1. Client -> FIN [State: FIN_WAIT_1]');

    // 2. Server ACKs client FIN
    this.server.state = 'CLOSE_WAIT';
    this.client.state = 'FIN_WAIT_2';
    console.log('2. Server -> ACK [Server: CLOSE_WAIT, Client: FIN_WAIT_2]');

    // 3. Server finishes remaining data, sends FIN
    this.server.state = 'LAST_ACK';
    console.log('3. Server -> FIN [Server: LAST_ACK]');

    // 4. Client receives server FIN, sends final ACK, enters TIME_WAIT
    this.client.state = 'TIME_WAIT';
    this.server.state = 'CLOSED';
    console.log('4. Client -> Final ACK [Client: TIME_WAIT (2MSL), Server: CLOSED]');
  }
}

// Execution demonstration
const sim = new TcpLifecycleSimulation();
sim.performHandshake(1000, 5000);
sim.performTeardown();

console.log('\\nClient final state: ' + sim.client.state); // -> TIME_WAIT
console.log('Server final state: ' + sim.server.state); // -> CLOSED`
    }
  ],
  exercises: [
    {
      id: 'tcp-hs-ex-1',
      kind: 'mcq',
      question: {
        en: 'What are the 3 packets exchanged during the standard TCP connection establishment handshake?',
        bn: 'মানসম্মত TCP সংযোগ স্থাপন হ্যান্ডশেকে কোন ৩ টি প্যাকেট আদান-প্রদান করা হয়?'
      },
      options: [
        {
          en: 'SYN -> SYN-ACK -> ACK',
          bn: 'SYN -> SYN-ACK -> ACK'
        },
        {
          en: 'HELLO -> ACK -> DATA',
          bn: 'HELLO -> ACK -> DATA'
        },
        {
          en: 'FIN -> ACK -> RST',
          bn: 'FIN -> ACK -> RST'
        },
        {
          en: 'PING -> PONG -> PUSH',
          bn: 'PING -> PONG -> PUSH'
        }
      ],
      answer: 0,
      hint: {
        en: 'Synchronize, Synchronize-Acknowledge, Acknowledge.',
        bn: 'সিনক্রোনাইজ, সিনক্রোনাইজ-অ্যাকনলেজ, অ্যাকনলেজ।'
      },
      explanation: {
        en: 'The 3-way handshake begins with client SYN, server responds with SYN-ACK, and client completes with ACK, synchronizing both sequence numbering schemes.',
        bn: '৩-মুখী হ্যান্ডশেক শুরু হয় ক্লায়েন্ট SYN দিয়ে, সার্ভার SYN-ACK দিয়ে উত্তর দেয় এবং ক্লায়েন্ট ACK পাঠিয়ে উভয় দিকের সিকোয়েন্স সমন্বয় করে।'
      }
    },
    {
      id: 'tcp-hs-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is a 2-way handshake (SYN -> SYN-ACK) insufficient for establishing a reliable TCP connection?',
        bn: 'একটি নির্ভরযোগ্য TCP সংযোগ স্থাপনের জন্য কেন ২-মুখী হ্যান্ডশেক (SYN -> SYN-ACK) যথেষ্ট নয়?'
      },
      options: [
        {
          en: 'Old, delayed duplicate SYN packets from dead connections could trick the server into allocating zombie resources that the client never requested',
          bn: 'পুরানো ও বিলম্বিত ডুপ্লিকেট SYN প্যাকেট সার্ভারকে বিভ্রান্ত করে এমন জম্বি সংযোগের জন্য মেমরি বরাদ্দ করাতে পারে যা ক্লায়েন্ট চায়নি'
        },
        {
          en: 'Because computer hardware can only count in multiples of 3',
          bn: 'কারণ কম্পিউটার হার্ডওয়্যার কেবল ৩ এর গুণিতকে গণনা করতে পারে'
        },
        {
          en: 'Because 2-way handshakes were banned by the United States FCC',
          bn: 'কারণ ২-মুখী হ্যান্ডশেক এফসিসি কর্তৃক নিষিদ্ধ'
        },
        {
          en: 'Because 2-way handshakes disable AES encryption algorithms',
          bn: 'কারণ ২-মুখী হ্যান্ডশেক AES এনক্রিপশন বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Delayed duplicate packets on wide-area networks would create ghost connections.',
        bn: 'বিলম্বিত ডুপ্লিকেট প্যাকেট সার্ভারে ভুয়া বা প্রেতাত্মা সংযোগ তৈরি করতে পারে।'
      },
      explanation: {
        en: 'If a delayed duplicate SYN arrives at a server after a prior session closed, a 2-way handshake would force the server to open a connection immediately. A 3-way handshake ensures the client actively confirms the session with the final ACK before server allocation.',
        bn: '২-মুখী ব্যবস্থায় পুরানো কোনো ডুপ্লিকেট SYN পেলেই সার্ভার সংযোগ খুলে ফেলত। ৩-মুখী নিয়মে ক্লায়েন্টের শেষ ACK আসার পরেই কেবল সংযোগ চূড়ান্ত হয়।'
      }
    },
    {
      id: 'tcp-hs-ex-3',
      kind: 'mcq',
      question: {
        en: 'How long does a TCP endpoint remain in the TIME_WAIT state after closing a connection?',
        bn: 'একটি সংযোগ বন্ধ করার পর TCP এন্ডপয়েন্ট কতক্ষণ TIME_WAIT স্টেটে থাকে?'
      },
      options: [
        {
          en: '2MSL (2 Maximum Segment Lifetimes, typically 60 to 120 seconds)',
          bn: '2MSL (২ টি ম্যাক্সিমাম সেগমেন্ট লাইফটাইম, সাধারণত ৬০ থেকে ১২০ সেকেন্ড)'
        },
        {
          en: 'Exactly 5 milliseconds',
          bn: 'ঠিক ৫ মিলি সেকেন্ড'
        },
        {
          en: '24 hours',
          bn: '২৪ ঘণ্টা'
        },
        {
          en: 'Until the computer is physically rebooted',
          bn: 'কম্পিউটার রিবুট না করা পর্যন্ত'
        }
      ],
      answer: 0,
      hint: {
        en: '2MSL ensures lingering packets completely expire in router queues.',
        bn: '2MSL নিশ্চিত করে যে নেটওয়ার্কে আটকে থাকা সমস্ত প্যাকেট ধ্বংস হয়ে গেছে।'
      },
      explanation: {
        en: 'TIME_WAIT lasts for 2MSL (typically 1 to 2 minutes) to ensure that the final ACK was received and that all delayed duplicate packets from the connection drain from the network.',
        bn: 'TIME_WAIT সাধারণত ৬০-১২০ সেকেন্ড স্থায়ী হয় যাতে শেষ ACK পৌঁছানো নিশ্চিত হয় এবং পুরানো কোনো প্যাকেট নেটওয়ার্কে অবশিষ্ট না থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tcp-handshake',
    title: {
      en: 'TCP Handshake and Lifecycle States Quiz',
      bn: 'TCP হ্যান্ডশেক ও জীবনচক্র স্টেট কুইজ'
    },
    questions: [
      {
        id: 'hs-q1',
        kind: 'mcq',
        question: {
          en: 'How do SYN Cookies protect a server against massive SYN flood DDoS attacks?',
          bn: 'SYN Cookies কীভাবে একটি সার্ভারকে বিশাল SYN ফ্লাড DDoS আক্রমণ থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'The server allocates 0 memory in SYN_RCVD, encoding connection parameters into the ISN, allocating memory only when the final ACK arrives',
            bn: 'সার্ভার SYN_RCVD স্টেটে কোনো মেমরি বরাদ্দ না করে ISN এ তথ্য এনকোড করে, কেবল ক্লায়েন্টের শেষ ACK এলেই মেমরি বরাদ্দ করে'
          },
          {
            en: 'By blocking all incoming IP addresses from foreign countries',
            bn: 'বিদেশি সমস্ত আইপি অ্যাড্রেস ব্লক করে দিয়ে'
          },
          {
            en: 'By slowing down server CPU clock speeds to save power',
            bn: 'বিদ্যুৎ সাশ্রয়ে সার্ভারের সিপিইউ ক্লক স্পিড কমিয়ে দিয়ে'
          },
          {
            en: 'By converting TCP traffic to uncompressed UDP frames',
            bn: 'TCP ট্রাফিককে আনকম্প্রেসড UDP ফ্রেমে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SYN cookies avoid allocating socket memory during half-open states.',
          bn: 'SYN কুকিজ অর্ধ-উন্মুক্ত স্টেটে সকেট মেমরি বরাদ্দ করা থেকে বিরত রাখে।'
        },
        explanation: {
          en: 'SYN Cookies avoid allocating half-open state in server RAM. The initial sequence number contains a cryptographic hash of connection parameters, verified only when the client returns ACK.',
          bn: 'SYN Cookies সার্ভার মেমরিতে আগাম জায়গা না নিয়ে সিকোয়েন্স নম্বরে ক্রিপ্টোগ্রাফিক হ্যাশ তৈরি করে; ক্লায়েন্ট ACK দিলে তবেই মেমরি বরাদ্দ হয়।'
        }
      },
      {
        id: 'hs-q2',
        kind: 'mcq',
        question: {
          en: 'Why does closing a full-duplex TCP connection standardly require 4 steps (FIN-ACK-FIN-ACK) instead of 2?',
          bn: 'একটি ফুল-ডুপ্লেক্স TCP সংযোগ বন্ধ করার জন্য কেন ২টির বদলে ৪টি ধাপ (FIN-ACK-FIN-ACK) প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'Because TCP is bidirectional; each direction must be terminated independently, allowing one host to finish sending pending data after the other has closed',
            bn: 'কারণ TCP দ্বি-মুখী; প্রতিটি দিক স্বাধীনভাবে বন্ধ হতে হয়, ফলে এক পক্ষ বন্ধ করার পরও অপর পক্ষ তার বাকি ডাটা পাঠানো শেষ করতে পারে'
          },
          {
            en: 'Because 4 is the universal magic number in networking',
            bn: 'কারণ নেটওয়ার্কিংয়ে ৪ একটি সার্বজনীন জাদুকরী সংখ্যা'
          },
          {
            en: 'Because the operating system requires 2 packets per CPU core',
            bn: 'কারণ অপারেটিং সিস্টেমের প্রতি সিপিইউ কোরে ২টি করে প্যাকেট লাগে'
          },
          {
            en: 'To give hackers enough time to inspect the traffic',
            bn: 'হ্যাকারদের ট্রাফিক পরিদর্শনের পর্যাপ্ত সময় দেওয়ার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Closing sending does not mean closing receiving.',
          bn: 'ডাটা পাঠানো বন্ধ করা মানেই ডাটা গ্রহণ বন্ধ করা নয়।'
        },
        explanation: {
          en: 'Because TCP is full-duplex, closing client-to-server does not immediately close server-to-client. The server ACKs the client FIN, flushes pending data, and sends its own FIN when finished.',
          bn: 'TCP ফুল-ডুপ্লেক্স হওয়ায় একদিকের পাঠানো বন্ধ হলেও অপরদিকের পাঠানো চালু থাকতে পারে; তাই উভয় দিকের জন্য আলাদা FIN ও ACK প্রয়োজন হয়।'
        }
      },
      {
        id: 'hs-q3',
        kind: 'mcq',
        question: {
          en: 'Which socket option allows a web server to bind to a local port immediately upon restarting, bypassing the TIME_WAIT socket collision error?',
          bn: 'TIME_WAIT জনিত জটিলতা এড়িয়ে সার্ভার রিস্টার্টের সাথে সাথে লোকাল পোর্টে বাইন্ড করার অনুমতি দেয় কোন সকেট অপশনটি?'
        },
        options: [
          {
            en: 'SO_REUSEADDR',
            bn: 'SO_REUSEADDR'
          },
          {
            en: 'SO_KEEPALIVE',
            bn: 'SO_KEEPALIVE'
          },
          {
            en: 'TCP_NODELAY',
            bn: 'TCP_NODELAY'
          },
          {
            en: 'SO_BROADCAST',
            bn: 'SO_BROADCAST'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reusing the address and port.',
          bn: 'ঠিকানা ও পোর্ট পুনরায় ব্যবহার করার অনুমতি।'
        },
        explanation: {
          en: 'Setting the SO_REUSEADDR socket option allows the operating system to bind a listening server socket even if previous connections on that port are lingering in the TIME_WAIT state.',
          bn: 'SO_REUSEADDR সক্রিয় থাকলে পুরানো কোনো সংযোগ TIME_WAIT স্টেটে থাকলেও নতুন সার্ভার সাথে সাথে পোর্টে বাইন্ড হতে পারে।'
        }
      },
      {
        id: 'hs-q4',
        kind: 'mcq',
        question: {
          en: 'What state does a server enter after receiving a client FIN packet while still having unsent data in its buffer?',
          bn: 'ক্লায়েন্টের কাছ থেকে FIN প্যাকেট পাওয়ার পর বাফারে এখনো ডাটা অবশিষ্ট থাকলে সার্ভার কোন স্টেটে প্রবেশ করে?'
        },
        options: [
          {
            en: 'CLOSE_WAIT',
            bn: 'CLOSE_WAIT'
          },
          {
            en: 'FIN_WAIT_2',
            bn: 'FIN_WAIT_2'
          },
          {
            en: 'SYN_SENT',
            bn: 'SYN_SENT'
          },
          {
            en: 'CLOSED',
            bn: 'CLOSED'
          }
        ],
        answer: 0,
        hint: {
          en: 'The server waits for its local application to close the connection.',
          bn: 'সার্ভার তার লোকাল অ্যাপ্লিকেশন সংযোগটি বন্ধ করার অপেক্ষায় থাকে।'
        },
        explanation: {
          en: 'Upon receiving a FIN, the server transitions to CLOSE_WAIT. It stays in this state until the local application calls close() on the socket, triggering the server\'s own FIN.',
          bn: 'FIN পেলে সার্ভার CLOSE_WAIT এ যায় এবং লোকাল সফটওয়্যার সকেট বন্ধ করার নির্দেশ না দেওয়া পর্যন্ত এই স্টেটে থাকে।'
        }
      },
      {
        id: 'hs-q5',
        kind: 'mcq',
        question: {
          en: 'What is the Initial Sequence Number (ISN) in a modern secure TCP implementation?',
          bn: 'একটি আধুনিক ও নিরাপদ TCP বাস্তবায়নে প্রারম্ভিক সিকোয়েন্স নম্বর (ISN) কীভাবে নির্ধারিত হয়?'
        },
        options: [
          {
            en: 'A pseudorandom number generated using cryptographic hashing to prevent TCP sequence prediction hijacking attacks',
            bn: 'সিকোয়েন্স প্রেডিকশন হাইজ্যাকিং আক্রমণ প্রতিরোধ করতে ক্রিপ্টোগ্রাফিক হ্যাশ দিয়ে তৈরি একটি ছদ্ম-এলোমেলো সংখ্যা'
          },
          {
            en: 'Always hardcoded to 0 in all operating systems',
            bn: 'تمام অপারেটিং সিস্টেমে সর্বদা শূন্য (০) হিসেবে ফিক্সড থাকে'
          },
          {
            en: 'The current year (e.g. 2026)',
            bn: 'চলতি বছরের সংখ্যা (যেমন ২০২৬)'
          },
          {
            en: 'The user account password length',
            bn: 'ব্যবহারকারীর পাসওয়ার্ডের দৈর্ঘ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'ISN must be unpredictable to prevent spoofing.',
          bn: 'হাইজ্যাকিং প্রতিরোধে ISN অবশ্যই অননুমেয় বা প্রেডিক্ট করা অসম্ভব হতে হয়।'
        },
        explanation: {
          en: 'Modern operating systems generate pseudorandom Initial Sequence Numbers using cryptographic clock-based algorithms to stop attackers from injecting malicious packets into active TCP sessions.',
          bn: 'আধুনিক ওএস ক্রিপ্টোগ্রাফিক অ্যালগরিদম দিয়ে এলোমেলো ISN তৈরি করে যাতে কোনো আক্রমণকারী সিকোয়েন্স নম্বর অনুমান করে সেশন হাইজ্যাক করতে না পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tcp-congestion',
    title: {
      en: 'TCP Congestion Control: Slow Start, AIMD & BBR Algorithms',
      bn: 'TCP কনজেশন কন্ট্রোল: Slow Start, AIMD ও BBR অ্যালগরিদম'
    }
  }
};
