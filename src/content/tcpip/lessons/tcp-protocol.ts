import type { Lesson } from '../../../lib/types';

export const TcpProtocolLesson: Lesson = {
  slug: 'tcp-protocol',
  tech: 'tcpip',
  title: {
    en: 'The TCP Protocol: Reliable Streams, Sequence Numbers & Flow Control',
    bn: 'TCP প্রোটোকল: নির্ভরযোগ্য স্ট্রিম, সিকোয়েন্স নম্বর ও ফ্লো কন্ট্রোল'
  },
  summary: {
    en: 'Master Transmission Control Protocol (TCP) fundamentals: connection-oriented byte streams, 32-bit sequence and acknowledgement tracking, segment headers, sliding window flow control, and timeout retransmissions.',
    bn: 'ট্রান্সমিশন কন্ট্রোল প্রোটোকল (TCP) এর গভীর ভিত্তি: কানেকশন-ভিত্তিক বাইট স্ট্রিম, ৩২-বিট সিকোয়েন্স ও অ্যাকনলেজমেন্ট ট্র্যাকিং, সেগমেন্ট হেডার, স্লাইডিং উইন্ডো ফ্লো কন্ট্রোল এবং টাইমআউট রিট্রান্সমিশন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'tcp-reliability',
      text: {
        en: '1. The Core Problem: Building Reliability on Unreliable IP',
        bn: '১. মূল সমস্যা: অনির্ভরযোগ্য IP এর ওপর নির্ভরযোগ্যতা তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The underlying Internet Protocol (IP) provides best-effort datagram delivery: routers make no promises that packets will arrive safely. Packets can be lost in congested queues, duplicated by buggy switches, or arrive completely scrambled and out of order.',
        bn: 'ইন্টারনেট প্রোটোকল (IP) মূলত "বেস্ট-এফোর্ট" পদ্ধতিতে কাজ করে: রাউটারগুলো কখনোই নিশ্চয়তা দেয় না যে প্যাকেট নিরাপদে পৌঁছাবেই। ভিড়ভাট্টা নেটওয়ার্কে প্যাকেট হারিয়ে যেতে পারে, ডুপ্লিকেট হতে পারে কিংবা আগে-পিছে এলোমেলো ক্রমে পৌঁছাতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Transmission Control Protocol (TCP), standardized in RFC 793, bridges this gap. It creates the abstraction of an ordered, reliable, bidirectional byte stream. If a byte is lost, TCP detects the omission and retransmits it until the receiver successfully acknowledges receipt.',
        bn: 'RFC 793 দ্বারা প্রমিত ট্রান্সমিশন কন্ট্রোল প্রোটোকল (TCP) এই সমস্যার সমাধান করে। এটি অ্যাপ্লিকেশনগুলোর জন্য একটি ধারাবাহিক, নির্ভরযোগ্য এবং দ্বি-মুখী বাইট স্ট্রিম তৈরি করে। কোনো বাইট হারিয়ে গেলে TCP তা শনাক্ত করে এবং সফল অ্যাকনলেজমেন্ট না আসা পর্যন্ত পুনরায় পাঠায়।'
      }
    },
    {
      type: 'visual',
      id: 'tcp-sliding-window-diagram',
      title: {
        en: 'TCP Header Anatomy and Sliding Window Flow Control',
        bn: 'TCP হেডার অ্যানাটমি এবং স্লাইডিং উইন্ডো ফ্লো কন্ট্রোল'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">TCP Architecture: 20-Byte Header &amp; Sliding Window</text>' +
          '<!-- Top: TCP Header Fields -->' +
          '<g transform="translate(60, 55)">' +
            '<rect width="680" height="110" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="25" y="24" fill="#60a5fa" font-size="11" font-weight="bold">TCP 20-BYTE MINIMUM HEADER FIELDS</text>' +
            '<!-- Row 1: Ports -->' +
            '<rect x="25" y="35" width="310" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="180" y="55" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Source Port (16 bits)</text>' +
            '<rect x="345" y="35" width="310" height="30" rx="4" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="500" y="55" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Destination Port (16 bits)</text>' +
            '<!-- Row 2: Seq & Ack -->' +
            '<rect x="25" y="70" width="310" height="30" rx="4" fill="#0f172a" stroke="#10b981"/>' +
            '<text x="180" y="90" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Sequence Number (32 bits)</text>' +
            '<rect x="345" y="70" width="310" height="30" rx="4" fill="#0f172a" stroke="#10b981"/>' +
            '<text x="500" y="90" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Acknowledgement Number (32 bits)</text>' +
          '</g>' +
          '<!-- Bottom: Sliding Window Mechanics -->' +
          '<g transform="translate(60, 185)">' +
            '<rect width="680" height="210" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<text x="25" y="26" fill="#fbbf24" font-size="12" font-weight="bold">SLIDING WINDOW FLOW CONTROL (Receiver Advertised rwnd)</text>' +
            '<!-- Window Strip -->' +
            '<g transform="translate(25, 45)">' +
              '<!-- Zone 1: Sent and ACKed -->' +
              '<rect x="0" y="0" width="160" height="60" rx="4" fill="#064e3b" stroke="#10b981"/>' +
              '<text x="80" y="28" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Bytes 1 - 2000</text>' +
              '<text x="80" y="46" fill="#a7f3d0" font-size="8" text-anchor="middle">Sent &amp; ACKed (Done)</text>' +
              '<!-- Zone 2: Sent, awaiting ACK (Inside Window) -->' +
              '<rect x="165" y="0" width="180" height="60" rx="4" fill="#1e3a8a" stroke="#3b82f6"/>' +
              '<text x="255" y="28" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">Bytes 2001 - 4000</text>' +
              '<text x="255" y="46" fill="#bfdbfe" font-size="8" text-anchor="middle">Sent &#x2192; Awaiting ACK</text>' +
              '<!-- Zone 3: Can send immediately (Inside Window) -->' +
              '<rect x="350" y="0" width="140" height="60" rx="4" fill="#78350f" stroke="#fbbf24"/>' +
              '<text x="420" y="28" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Bytes 4001 - 5500</text>' +
              '<text x="420" y="46" fill="#fef08a" font-size="8" text-anchor="middle">Usable Window Space</text>' +
              '<!-- Zone 4: Cannot send yet -->' +
              '<rect x="495" y="0" width="135" height="60" rx="4" fill="#450a0a" stroke="#ef4444"/>' +
              '<text x="562" y="28" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Bytes 5501+</text>' +
              '<text x="562" y="46" fill="#fecaca" font-size="8" text-anchor="middle">Blocked (Window Closed)</text>' +
            '</g>' +
            '<!-- Active Window Bracket -->' +
            '<rect x="185" y="112" width="330" height="24" rx="4" fill="#0f172a" stroke="#38bdf8"/>' +
            '<text x="350" y="128" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">&#x2190; Active Sliding Window rwnd = 3500 bytes &#x2192;</text>' +
            '<text x="25" y="160" fill="#cbd5e1" font-size="10">&#x2022; Cumulative ACK: ACK 4001 confirms receipt of all bytes up to 4000 and slides window forward.</text>' +
            '<text x="25" y="180" fill="#cbd5e1" font-size="10">&#x2022; Zero Window Probe: If rwnd drops to 0, sender stops transmitting and probes periodically.</text>' +
            '<text x="25" y="200" fill="#34d399" font-size="10">&#x2022; Fast Retransmit: 3 duplicate ACKs trigger instant retransmission without waiting for RTO timer.</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'sequence-and-ack',
      text: {
        en: '2. Sequence Numbers and Cumulative Acknowledgements',
        bn: '২. সিকোয়েন্স নম্বর এবং কিউমুলেটিভ অ্যাকনলেজমেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike packet-oriented protocols, TCP treats data as a continuous stream of individual bytes. Every byte transmitted is tracked by a 32-bit Sequence Number.',
        bn: 'প্যাকেট-ভিত্তিক প্রোটোকলের মতো নয়, TCP ডাটাকে বাইটের একটি অবিচ্ছিন্ন প্রবাহ হিসেবে দেখে। প্রেরিত প্রতিটি বাইটকে একটি ৩২-বিট সিকোয়েন্স নম্বর দিয়ে চিহ্নিত করা হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Sequence Number: Marks the offset of the first data byte in the current segment.',
          bn: '১. Sequence Number: বর্তমান সেগমেন্টে থাকা প্রথম ডাটা বাইটের অবস্থান চিহ্নিত করে।'
        },
        {
          en: '2. Cumulative Acknowledgement: When the receiver replies with ACK 2001, it confirms it has received every byte from 1 up to 2000, and expects byte 2001 next.',
          bn: '২. Cumulative Acknowledgement: গ্রাহক যখন ACK 2001 পাঠায়, এর অর্থ হলো সে ১ থেকে ২০০০ পর্যন্ত সমস্ত বাইট পেয়ে গেছে এবং পরবর্তীতে ২০০১ নম্বর বাইটের অপেক্ষায় রয়েছে।'
        },
        {
          en: '3. Sliding Window Flow Control: The receiver advertises its available buffer capacity in the 16-bit Window Size field. The sender cannot transmit more unacknowledged bytes than the advertised window allows.',
          bn: '৩. স্লাইডিং উইন্ডো ফ্লো কন্ট্রোল: গ্রাহক তার মেমরি বাফারের ফাঁকা জায়গা ১৬-বিট উইন্ডো সাইজ ফিল্ডে জানিয়ে দেয়। এই অনুমোদিত সীমার বেশি ডাটা প্রেরক পাঠাতে পারে না।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'loss-recovery',
      text: {
        en: '3. Handling Loss: Retransmission Timeouts & Fast Retransmit',
        bn: '৩. ডাটা হারানোর সমাধান: রিট্রান্সমিশন টাইমআউট ও ফাস্ট রিট্রান্সমিট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TCP maintains a dynamic Retransmission Timeout (RTO) calculated from measured Round-Trip Times (RTT). If an ACK fails to return before the RTO expires, the sender assumes packet loss and retransmits the segment. However, waiting for RTO stalls high-speed transfers; therefore, if the sender receives 3 duplicate ACKs (signaling that a middle segment went missing while subsequent packets arrived), it triggers Fast Retransmit immediately without waiting for the timer.',
        bn: 'TCP নেটওয়ার্কের রাউন্ড-ট্রিপ সময় (RTT) মেপে একটি ডায়নামিক রিট্রান্সমিশন টাইমআউট (RTO) বজায় রাখে। সময় শেষ হওয়ার আগে ACK না আসলে TCP ধরে নেয় প্যাকেটটি হারিয়ে গেছে এবং পুনরায় পাঠায়। তবে টাইমারের অপেক্ষায় থাকলে গতি কমে যায়; তাই ৩ টি ডুপ্লিকেট ACK আসলে (যা বোঝায় মাঝের কোনো প্যাকেট হারিয়েছে কিন্তু পরেরগুলো পৌঁছেছে) TCP সাথে সাথে ফাস্ট রিট্রান্সমিট (Fast Retransmit) কার্যকর করে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. TCP Sliding Window & ACK Engine in TypeScript',
        bn: '৪. TypeScript এ TCP স্লাইডিং উইন্ডো ও ACK ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models TCP byte-offset tracking, sliding window transmission limits, and cumulative acknowledgement processing:',
        bn: 'নিচের TypeScript প্রোগ্রামটি TCP বাইট ট্র্যাকিং, স্লাইডিং উইন্ডো ট্রান্সমিশন সীমা এবং কিউমুলেটিভ অ্যাকনলেজমেন্ট প্রসেসিং মডেল করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of TCP byte sequence numbers, advertised receiver window, and cumulative ACK processing.',
        bn: 'TCP বাইট সিকোয়েন্স নম্বর, গ্রাহকের উইন্ডো সীমা এবং কিউমুলেটিভ ACK এর TypeScript সিমুলেশন।'
      },
      code: `// Simulation of TCP Byte Streams, Sequence Numbers, and Sliding Window

class TcpSender {
  public baseSeq: number = 1000;       // Oldest unACKed byte
  public nextSeq: number = 1000;       // Next byte to be transmitted
  public receiverWindow: number = 2000;// Advertised rwnd in bytes
  private sentSegments: Map<number, number> = new Map(); // Seq -> Byte Length

  // Transmit chunk of bytes if within window
  sendData(payloadLength: number): { success: boolean; seqSent: number; message: string } {
    const bytesInFlight = this.nextSeq - this.baseSeq;
    const availableWindow = this.receiverWindow - bytesInFlight;

    if (payloadLength <= availableWindow) {
      const currentSeq = this.nextSeq;
      this.sentSegments.set(currentSeq, payloadLength);
      this.nextSeq += payloadLength;

      return {
        success: true,
        seqSent: currentSeq,
        message: 'Sent ' + payloadLength + ' bytes with Seq ' + currentSeq
      };
    } else {
      return {
        success: false,
        seqSent: this.nextSeq,
        message: 'Flow Control Blocked: Window space (' + availableWindow + ') < payload (' + payloadLength + ')'
      };
    }
  }

  // Process incoming cumulative ACK
  processAck(ackNumber: number): { windowAdvanced: number; unACKedRemaining: number } {
    if (ackNumber > this.baseSeq) {
      const advanced = ackNumber - this.baseSeq;
      this.baseSeq = ackNumber;

      // Clean up ACKed segments
      for (const [seq, len] of this.sentSegments.entries()) {
        if (seq + len <= ackNumber) {
          this.sentSegments.delete(seq);
        }
      }

      return {
        windowAdvanced: advanced,
        unACKedRemaining: this.nextSeq - this.baseSeq
      };
    }
    return { windowAdvanced: 0, unACKedRemaining: this.nextSeq - this.baseSeq };
  }
}

// Demonstration
const sender = new TcpSender();
console.log('Initial Window: ' + sender.receiverWindow + ' bytes');

// 1. Send first segment (1000 bytes)
const seg1 = sender.sendData(1000);
console.log(seg1.message); // -> Sent 1000 bytes with Seq 1000

// 2. Send second segment (800 bytes)
const seg2 = sender.sendData(800);
console.log(seg2.message); // -> Sent 800 bytes with Seq 2000

// 3. Attempt third segment (500 bytes) -> Only 200 bytes available in window
const seg3 = sender.sendData(500);
console.log(seg3.message); // -> Flow Control Blocked

// 4. Receiver sends cumulative ACK for first segment (ACK 2000)
console.log('\\n--- Receiver acknowledges first 1000 bytes ---');
const ackStatus = sender.processAck(2000);
console.log('Slid window forward by: ' + ackStatus.windowAdvanced + ' bytes'); // -> 1000 bytes
console.log('Unacknowledged bytes remaining in flight: ' + ackStatus.unACKedRemaining); // -> 800 bytes

// 5. Now third segment fits into the reopened window!
const retrySeg3 = sender.sendData(500);
console.log('Retry after window slide: ' + retrySeg3.message); // -> Sent 500 bytes with Seq 2800`
    }
  ],
  exercises: [
    {
      id: 'tcp-proto-ex-1',
      kind: 'mcq',
      question: {
        en: 'If a TCP receiver sends an Acknowledgement Number of 5001, what does this confirm to the sender?',
        bn: 'একজন TCP গ্রাহক যদি ৫০০১ এর একটি Acknowledgement Number পাঠায়, তবে প্রেরকের কাছে এটি কী নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It confirms cumulative receipt of all bytes up to 5000, and indicates it is expecting byte 5001 next',
          bn: 'এটি ৫০০০ পর্যন্ত تمام বাইটের সফল প্রাপ্তি নিশ্চিত করে এবং জানায় যে সে পরবর্তী ৫০০১ নম্বর বাইটের অপেক্ষায় আছে'
        },
        {
          en: 'It indicates that 5001 packets were dropped by network firewalls',
          bn: 'এটি নির্দেশ করে যে ৫০০১ টি প্যাকেট নেটওয়ার্ক ফায়ারওয়াল দ্বারা ড্রপ হয়েছে'
        },
        {
          en: 'It requests the sender to terminate the connection immediately',
          bn: 'এটি প্রেরককে সাথে সাথে সংযোগটি বন্ধ করার অনুরোধ জানায়'
        },
        {
          en: 'It sets the transmission speed to 5001 kilobits per second',
          bn: 'এটি স্থানান্তরের গতি প্রতি সেকেন্ডে ৫০০১ কিলোবিটে নির্ধারণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'TCP uses cumulative ACKs indicating the next expected byte.',
        bn: 'TCP পরবর্তী প্রত্যাশিত বাইট নির্দেশ করে কিউমুলেটিভ ACK পাঠায়।'
      },
      explanation: {
        en: 'TCP acknowledgements are cumulative: ACK N informs the sender that all bytes preceding N have been safely received and reassembled.',
        bn: 'TCP এর অ্যাকনলেজমেন্ট কিউমুলেটিভ হয়: ACK N বোঝায় যে N এর আগের সমস্ত বাইট নিরাপদে পৌঁছেছে।'
      }
    },
    {
      id: 'tcp-proto-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the purpose of the Sliding Window flow control mechanism in TCP?',
        bn: 'TCP তে স্লাইডিং উইন্ডো ফ্লো কন্ট্রোল মেকানিজমের মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To prevent a fast sender from transmitting more data than the receiver buffer can store, avoiding buffer overflow',
          bn: 'দ্রুতগতির প্রেরককে গ্রাহকের বাফার ক্ষমতার চেয়ে বেশি ডাটা পাঠানো থেকে বিরত রাখা, যাতে বাফার উপচে না পড়ে'
        },
        {
          en: 'To encrypt packet data using rotating cryptographic keys',
          bn: 'ঘূর্ণায়মান ক্রিপ্টোগ্রাফিক কি দিয়ে প্যাকেটের ডাটা এনক্রিপ্ট করা'
        },
        {
          en: 'To display network throughput graphs on graphical user monitors',
          bn: 'ব্যবহারকারীর মনিটরে নেটওয়ার্ক থ্রুপুটের গ্রাফ প্রদর্শন করা'
        },
        {
          en: 'To compress text documents before transmitting them',
          bn: 'পাঠানোর আগে টেক্সট ডকুমেন্টগুলোকে সংকুচিত করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flow control matches transmission speed to the receiver\'s capacity.',
        bn: 'ফ্লো কন্ট্রোল প্রেরকের গতিকে গ্রাহকের ধারণক্ষমতার সাথে সামঞ্জস্যপূর্ণ রাখে।'
      },
      explanation: {
        en: 'Flow control regulates data rate based on the receiver\'s advertised window (rwnd), ensuring the sender does not overwhelm the receiver\'s socket buffer.',
        bn: 'ফ্লো কন্ট্রোল গ্রাহকের উইন্ডো (rwnd) এর ওপর ভিত্তি করে ডাটার গতি নিয়ন্ত্রণ করে গ্রাহকের বাফার উপচে পড়া রোধ করে।'
      }
    },
    {
      id: 'tcp-proto-ex-3',
      kind: 'mcq',
      question: {
        en: 'How many duplicate ACKs must a TCP sender receive to trigger Fast Retransmit without waiting for the RTO timer?',
        bn: 'RTO টাইমারের অপেক্ষা না করে ফাস্ট রিট্রান্সমিট শুরু করতে একটি TCP প্রেরককে কতটি ডুপ্লিকেট ACK পেতে হয়?'
      },
      options: [
        {
          en: '3 duplicate ACKs (for a total of 4 identical ACKs)',
          bn: '৩ টি ডুপ্লিকেট ACK (মোট ৪ টি একই ACK)'
        },
        {
          en: '1 duplicate ACK',
          bn: '১ টি ডুপ্লিকেট ACK'
        },
        {
          en: '100 duplicate ACKs',
          bn: '১০০ টি ডুপ্লিকেট ACK'
        },
        {
          en: 'Zero (it never retransmits without timeout)',
          bn: 'শূন্য (টাইমআউট ছাড়া কখনোই পুনরায় পাঠায় না)'
        }
      ],
      answer: 0,
      hint: {
        en: '3 duplicate ACKs signal an isolated missing packet.',
        bn: '৩ টি ডুপ্লিকেট ACK একটি হারিয়ে যাওয়া নির্দিষ্ট প্যাকেট নির্দেশ করে।'
      },
      explanation: {
        en: 'When a sender receives 3 duplicate ACKs for the same sequence number, it infers an isolated packet loss occurred while downstream packets arrived, triggering Fast Retransmit immediately.',
        bn: 'একই নম্বরের ৩ টি ডুপ্লিকেট ACK পেলে TCP নিশ্চিত হয় মাঝের একটি প্যাকেট হারিয়েছে এবং সাথে সাথে ফাস্ট রিট্রান্সমিট চালায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tcp-protocol',
    title: {
      en: 'TCP Protocol Mechanics Quiz',
      bn: 'TCP প্রোটোকল মেকানিজম কুইজ'
    },
    questions: [
      {
        id: 'proto-q1',
        kind: 'mcq',
        question: {
          en: 'What is the minimum header size of a standard TCP segment with zero options?',
          bn: 'কোনো অপশন ছাড়া একটি সাধারণ TCP সেগমেন্টের সর্বনিম্ন হেডার সাইজ কত?'
        },
        options: [
          {
            en: '20 bytes',
            bn: '২০ বাইট'
          },
          {
            en: '8 bytes',
            bn: '৮ বাইট'
          },
          {
            en: '64 bytes',
            bn: '৬৪ বাইট'
          },
          {
            en: '4 bytes',
            bn: '৪ বাইট'
          }
        ],
        answer: 0,
        hint: {
          en: 'UDP is 8 bytes; base TCP is 20 bytes.',
          bn: 'UDP হলো ৮ বাইট; বেসিক TCP হলো ২০ বাইট।'
        },
        explanation: {
          en: 'A standard TCP header without optional parameters is exactly 20 bytes in size, extending up to 60 bytes when options like Window Scale or SACK are included.',
          bn: 'অপশন ছাড়া একটি বেসিক TCP হেডারের আকার ঠিক ২০ বাইট, যা অপশন সহ সর্বোচ্চ ৬০ বাইট পর্যন্ত হতে পারে।'
        }
      },
      {
        id: 'proto-q2',
        kind: 'mcq',
        question: {
          en: 'What does a TCP receiver do when its internal socket buffer is 100% full?',
          bn: 'যখন একজন TCP গ্রাহকের নিজস্ব সকেট বাফার ১০০% পূর্ণ হয়ে যায় তখন সে কী করে?'
        },
        options: [
          {
            en: 'Advertises a Window Size of 0 (Zero Window), instructing the sender to stop transmitting data',
            bn: 'উইন্ডো সাইজ ০ (Zero Window) হিসেবে পাঠায়, যা প্রেরককে ডাটা পাঠানো স্থগিত করতে নির্দেশ দেয়'
          },
          {
            en: 'Immediately deletes the operating system kernel',
            bn: 'অপারেটিং সিস্টেম কার্নেল সাথে সাথে মুছে ফেলে'
          },
          {
            en: 'Increases the network speed by 10 times',
            bn: 'নেটওয়ার্কের গতি ১০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: 'Converts incoming bytes into UDP datagrams',
            bn: 'আগত বাইটগুলোকে UDP ডেটাগ্রামে রূপান্তরিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Zero window halts sender transmission.',
          bn: 'জিরো উইন্ডো প্রেরকের ডাটা পাঠানো থামিয়ে দেয়।'
        },
        explanation: {
          en: 'When the application layer fails to drain the buffer, the receiver advertises rwnd = 0. The sender halts transmission and sends periodic 1-byte probes until space frees up.',
          bn: 'বাফার পূর্ণ হয়ে গেলে গ্রাহক rwnd = 0 জানায়; প্রেরক ডাটা পাঠানো বন্ধ রেখে বাফার খালি হওয়ার অপেক্ষায় থাকে।'
        }
      },
      {
        id: 'proto-q3',
        kind: 'mcq',
        question: {
          en: 'What TCP flag is sent to forcefully and immediately terminate or reject a connection (e.g. connecting to an unopened port)?',
          bn: 'কোনো সংযোগকে তাৎক্ষণিকভাবে বাতিল বা প্রত্যাখ্যান করতে (যেমন কোনো বন্ধ পোর্টে যুক্ত হওয়ার চেষ্টা করলে) কোন TCP ফ্ল্যাগটি পাঠানো হয়?'
        },
        options: [
          {
            en: 'RST (Reset)',
            bn: 'RST (Reset)'
          },
          {
            en: 'SYN (Synchronize)',
            bn: 'SYN (Synchronize)'
          },
          {
            en: 'FIN (Finish)',
            bn: 'FIN (Finish)'
          },
          {
            en: 'PSH (Push)',
            bn: 'PSH (Push)'
          }
        ],
        answer: 0,
        hint: {
          en: 'RST immediately resets the connection without a handshake.',
          bn: 'RST কোনো হ্যান্ডশেক ছাড়াই তাৎক্ষণিকভাবে সংযোগটি বাতিল করে।'
        },
        explanation: {
          en: 'The RST (Reset) flag immediately tears down or rejects a connection, typically sent when an unexpected packet arrives or a requested port has no listening server.',
          bn: 'RST ফ্ল্যাগ যেকোনো অনাকাঙ্ক্ষিত বা বন্ধ পোর্টের সংযোগকে তাৎক্ষণিকভাবে বাতিল করার জন্য ব্যবহৃত হয়।'
        }
      },
      {
        id: 'proto-q4',
        kind: 'mcq',
        question: {
          en: 'What TCP option allows the receiver to report non-contiguous blocks of successfully received data, preventing retransmitting packets that already arrived?',
          bn: 'কোন TCP অপশনটি গ্রাহককে সফলভাবে পাওয়া বিচ্ছিন্ন ব্লকের তথ্য জানাতে সাহায্য করে, ফলে যেসব প্যাকেট আগেই পৌঁছেছে তা পুনরায় পাঠানো রোধ হয়?'
        },
        options: [
          {
            en: 'SACK (Selective Acknowledgement)',
            bn: 'SACK (Selective Acknowledgement)'
          },
          {
            en: 'MSS (Maximum Segment Size)',
            bn: 'MSS (Maximum Segment Size)'
          },
          {
            en: 'Nagle Algorithm',
            bn: 'Nagle Algorithm'
          },
          {
            en: 'SYN Cookie',
            bn: 'SYN Cookie'
          }
        ],
        answer: 0,
        hint: {
          en: 'SACK acknowledges selective received ranges.',
          bn: 'SACK নির্বাচিত প্রাপ্ত রেঞ্জগুলোকে আলাদাভাবে অ্যাকনলেজ করে।'
        },
        explanation: {
          en: 'Selective Acknowledgement (SACK) allows the receiver to specify discrete blocks of received data, so the sender only retransmits the missing fragments rather than entire windows.',
          bn: 'SACK গ্রাহককে প্রাপ্ত বিচ্ছিন্ন ব্লকের তথ্য জানাতে দেয়, ফলে প্রেরক সম্পূর্ণ উইন্ডোর বদলে শুধু হারিয়ে যাওয়া অংশটিই পুনরায় পাঠায়।'
        }
      },
      {
        id: 'proto-q5',
        kind: 'mcq',
        question: {
          en: 'Why does TCP compute a checksum covering both the TCP header, payload, and an IP "pseudo-header"?',
          bn: 'TCP হেডার, পেলোড এবং একটি আইপি "সিউডো-হেডার" সহ TCP কেন চেকসাম গণনা করে?'
        },
        options: [
          {
            en: 'To verify data integrity and ensure the segment was delivered to the intended destination IP address without corruption',
            bn: 'ডাটার নির্ভুলতা নিশ্চিত করতে এবং সেগমেন্টটি কোনো বিকৃতি ছাড়াই সঠিক গন্তব্য আইপিতে পৌঁছেছে কিনা তা যাচাই করতে'
          },
          {
            en: 'To encrypt credit card numbers during transmission',
            bn: 'স্থানান্তরের সময় ক্রেডিট কার্ডের নম্বর এনক্রিপ্ট করার জন্য'
          },
          {
            en: 'To convert IPv4 packets into IPv6 format',
            bn: 'IPv4 প্যাকেটকে IPv6 ফরম্যাটে রূপান্তর করার জন্য'
          },
          {
            en: 'To increase the speed of fiber-optic cables',
            bn: 'ফাইবার-অপটিক কেবলের গতি বৃদ্ধি করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'The pseudo-header includes IP addresses to verify correct delivery.',
          bn: 'সিউডো-হেডারে আইপি অ্যাড্রেস থাকে যাতে সঠিক ঠিকানায় পৌঁছানো নিশ্চিত হয়।'
        },
        explanation: {
          en: 'The pseudo-header includes the source IP, destination IP, and protocol number, allowing the TCP checksum to verify that the packet reached the correct host without misrouting.',
          bn: 'সিউডো-হেডারে প্রেরক ও গ্রাহকের আইপি অন্তর্ভুক্ত থাকে, ফলে চেকসাম নিশ্চিত করে যে প্যাকেটটি ভুল রাউট না হয়ে সঠিক ডিভাইসেই পৌঁছেছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'udp-fundamentals',
    title: {
      en: 'UDP Fundamentals: Connectionless Datagrams & Real-Time Protocols',
      bn: 'UDP এর মূলনীতি: কানেকশনহীন ডেটাগ্রাম ও রিয়েল-টাইম প্রোটোকল'
    }
  }
};
