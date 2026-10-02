import type { Lesson } from '../../../lib/types';

export const theTcpTidekeeperLesson: Lesson = {
  slug: 'the-tcp-tidekeeper',
  tech: 'networking',
  title: {
    en: 'TCP Mechanics — Handshakes, Sequence Numbers, Flow, and Congestion Control',
    bn: 'টিসিপি মেকানিক্স: হ্যান্ডশেক, সিকোয়েন্স ট্র্যাকিং, প্রবাহ ও কনজেশন নিয়ন্ত্রণ'
  },
  summary: {
    en: 'While IP provides connectionless, best-effort packet routing where datagrams may be reordered, duplicated, or dropped, the Transmission Control Protocol (TCP) builds a reliable, bidirectional, ordered byte-stream on top. This lesson examines the 3-way handshake establishing synchronized Initial Sequence Numbers (ISNs), cumulative acknowledgment tracking, and the mechanics of Head-of-Line blocking. You will master the fundamental distinction between Flow Control via rwnd and Congestion Control via cwnd. Trace Slow Start exponential doubling alongside AIMD growth, and compare Fast Retransmit against Retransmission Timeout fallbacks.',
    bn: 'আইপি প্রোটোকল একটি সংযোগহীন এবং অনির্ভরযোগ্য ব্যবস্থা যেখানে প্যাকেটগুলো এলোমেলো, ডুপ্লিকেট বা হারিয়ে যেতে পারে। এর ওপর ভিত্তি করে ট্রান্সমিশন কন্ট্রোল প্রোটোকল (টিসিপি) একটি নির্ভরযোগ্য, দ্বিমুখী ও সুশৃঙ্খল বাইট-স্ট্রিম নিশ্চিত করে। এই পাঠে ৩-ওয়ে হ্যান্ডশেকের মাধ্যমে ইনিশিয়াল সিকোয়েন্স নাম্বার (ISN) সিঙ্ক করা, ক্রমগত স্বীকৃতি (cumulative ACK) এবং হেড-অব-লাইন ব্লকিংয়ের সমস্যা বিশ্লেষণ করা হয়েছে। এখানে ফ্লো কন্ট্রোল (rwnd) এবং কনজেশন কন্ট্রোল (cwnd) এর মৌলিক পার্থক্য বিশ্লেষণ করা হয়েছে। স্লো স্টার্ট ও এআইএমডি (AIMD) বৃদ্ধির পাশাপাশি ট্রিপল ডুপ্লিকেট ACK দিয়ে ফাস্ট রি-ট্রান্সমিশন ও RTO টাইমার বিশদভাবে দেখানো হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-tls-notary',
    tech: 'networking',
    title: {
      en: 'TLS Cryptographic Handshakes — Asymmetric Negotiation and Symmetric Ciphers',
      bn: 'টিএলএস ক্রিপ্টোগ্রাফিক হ্যান্ডশেক: অ্যাসিম্যাট্রিক আলোচনা ও সিমেট্রিক সাইফার'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'tcp-byte-stream-foundations',
      text: {
        en: 'The Byte-Stream Contract of TCP',
        bn: 'টিসিপি বাইট-স্ট্রিম চুক্তির মূল রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit data across an unreliable network, TCP guarantees that every byte arrives at the application in strict chronological sequence. Unlike UDP, which transmits independent datagrams, TCP models communication as a continuous byte stream.',
        bn: 'যখন আপনি অনির্ভরযোগ্য নেটওয়ার্কের ওপর দিয়ে ডাটা পাঠান, তখন টিসিপি নিশ্চয়তা দেয় যে প্রতিটি বাইট অ্যাপ্লিকেশনে যথাযথ ক্রমানুসারে পৌঁছাবে। ইউডিপির মতো বিচ্ছিন্ন ডেটাগ্রাম না পাঠিয়ে টিসিপি যোগাযোগকে একটি নিরবচ্ছিন্ন বাইট স্ট্রিম হিসেবে পরিচালনা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before data can travel, client and server execute a three-way handshake: SYN, SYN-ACK, ACK. Each endpoint selects a random Initial Sequence Number (ISN) to prevent collision with lingering packets from prior terminated connections. Once connected, every byte of payload increments the sequence counter.',
        bn: 'ডাটা পাঠানো শুরুর পূর্বে ক্লায়েন্ট ও সার্ভার ৩ ধাপের ৩-ওয়ে হ্যান্ডশেক (SYN, SYN-ACK, ACK) সম্পন্ন করে। উভয় পক্ষই এলোমেলোভাবে একটি ইনিশিয়াল সিকোয়েন্স নাম্বার (ISN) নির্বাচন করে যাতে পুরনো সংযোগের হারিয়ে যাওয়া প্যাকেট নতুন সংযোগে বিভ্রান্তি না ঘটায়। সংযোগ স্থাপনের পর প্রতি বাইট ডাটা সিকোয়েন্স কাউন্টারকে ১ করে বৃদ্ধি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'three-way-handshake',
          def: {
            en: 'The connection setup protocol (SYN, SYN-ACK, ACK) exchanging synchronized sequence numbers before data transfer.',
            bn: 'সংযোগ তৈরির প্রোটোকল যা ডেটা আদান-প্রদানের পূর্বে সিকোয়েন্স নম্বর বিনিময়ের মাধ্যমে সংযোগ স্থাপন করে।'
          }
        },
        {
          term: 'cumulative-acknowledgment',
          def: {
            en: 'An acknowledgment mechanism where ACK N confirms error-free receipt of all preceding bytes up to N - 1.',
            bn: 'একটি স্বীকৃতি ব্যবস্থা যেখানে ACK N পূর্ববর্তী সমস্ত বাইট সফলভাবে পাওয়ার নিশ্চয়তা দেয়।'
          }
        },
        {
          term: 'flow-control-rwnd',
          def: {
            en: 'A receiver-driven flow regulation mechanism that advertises available buffer space in the rwnd header field.',
            bn: 'একটি রিসিভার-নিয়ন্ত্রিত প্রবাহ নিয়ন্ত্রণ যা rwnd হেডারে ফাঁকা বাফারের পরিমাণ প্রকাশ করে প্রেরককে সংযত রাখে।'
          }
        },
        {
          term: 'congestion-control-cwnd',
          def: {
            en: 'A sender-calculated window that limits in-flight bytes to prevent overwhelming intermediate network routers.',
            bn: 'প্রেরকের নিজস্ব উইন্ডো যা মধ্যবর্তী রাউটার যাতে অতিরিক্ত প্যাকেটে ভারাক্রান্ত না হয় তা নিয়ন্ত্রণ করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'flow-vs-congestion-table',
      text: {
        en: 'Comparison Matrix: Flow Control vs Congestion Control',
        bn: 'তুলনামূলক ম্যাট্রিক্স: ফ্লো কন্ট্রোল বনাম কনজেশন কন্ট্রোল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding the distinct architectural roles of rwnd and cwnd prevents network buffer overruns and link collapse.',
        bn: 'rwnd এবং cwnd এর পৃথক ভূমিকা স্পষ্ট জানা থাকলে নেটওয়ার্ক বাফার উপচে পড়া এবং লিংক ডাউন হওয়া রোধ করা যায়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্যিক দিক' },
        { en: 'Flow Control (rwnd)', bn: 'ফ্লো কন্ট্রোল (rwnd)' },
        { en: 'Congestion Control (cwnd)', bn: 'কনজেশন কন্ট্রোল (cwnd)' },
        { en: 'Unified Operational Rule', bn: 'একীভূত কার্যকর নিয়ম' }
      ],
      rows: [
        [
          { en: 'Protected Asset', bn: 'সুরক্ষিত উপাদান' },
          { en: 'The receiver socket buffer memory', bn: 'গ্রাহকের সকেট বাফার মেমরি' },
          { en: 'The intermediate network routers and links', bn: 'মধ্যবর্তী রাউটার ও নেটওয়ার্ক সংযোগ' },
          { en: 'Sender in-flight bytes <= min(rwnd, cwnd)', bn: 'প্রেরকের ডাটা সীমা <= min(rwnd, cwnd)' }
        ],
        [
          { en: 'Calculation Authority', bn: 'নির্ধারণকারী কর্তৃপক্ষ' },
          { en: 'Receiver advertises value in TCP header', bn: 'গ্রাহক টিসিপি হেডারে সরাসরি মান ঘোষণা করে' },
          { en: 'Sender computes via packet loss and RTT delay', bn: 'প্রেরক অ্যালগরিদমের মাধ্যমে নিজে গণনা করে' },
          { en: 'Transmission is gated by the smaller ceiling', bn: 'উভয়ের মধ্যে ক্ষুদ্রতম মানটি কার্যকর হয়' }
        ],
        [
          { en: 'Constraint Signal', bn: 'সীমাবদ্ধতার সংকেত' },
          { en: 'rwnd shrinks to 0 when receiving buffer fills', bn: 'বাফার পূর্ণ হলে rwnd এর মান কমে ০ হয়' },
          { en: 'Packet loss, duplicate ACKs, or RTO expiration', bn: 'প্যাকেট ক্ষতি, ডুপ্লিকেট ACK বা RTO টাইমআউট' },
          { en: 'Sender pauses or reduces sending rate', bn: 'প্রেরক প্রেরণ স্থগিত বা গতি হ্রাস করে' }
        ],
        [
          { en: 'Recovery Protocol', bn: 'পুনরুদ্ধার পদ্ধতি' },
          { en: 'Zero-window probing detects buffer drain', bn: 'জিরো-উইন্ডো প্রোব বাফার খালি হওয়া শনাক্ত করে' },
          { en: 'AIMD: Additive Increase and Multiplicative Decrease', bn: 'এআইএমডি: যোজক বৃদ্ধি এবং গুণক হ্রাস' },
          { en: 'Restores high throughput safely', bn: 'নিরাপদে উচ্চ গতি পুনঃপ্রতিষ্ঠা করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-congestion-control-code',
      text: {
        en: 'Executable Congestion Window and AIMD Simulation',
        bn: 'কনজেশন উইন্ডো এবং এআইএমডি সিমুলেশনের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates Slow Start exponential doubling up to ssthresh, followed by AIMD linear additive increase, computing bytes in flight per RTT round.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ssthresh পর্যন্ত স্লো স্টার্টের দ্বিগুণ বৃদ্ধি এবং পরবর্তী এআইএমডি রৈখিক বৃদ্ধির গতি গণনা করে প্রতি রাউন্ডে কত বাইট ডাটা বাতাসে রয়েছে তা প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulating TCP Slow Start and AIMD Congestion Control
let cwnd = 10; // initial window (10 MSS)
const ssthresh = 32;
const mss = 1460; // bytes

const rounds = [];
for (let rtt = 1; rtt <= 6; rtt++) {
  const bytesInFlight = cwnd * mss;
  rounds.push({ rtt, cwnd, bytesInFlight });
  if (cwnd < ssthresh) {
    cwnd = cwnd * 2; // Slow Start: double per RTT
  } else {
    cwnd += 1; // Congestion Avoidance: add 1 MSS per RTT
  }
}

console.log('RTT 1 cwnd =', rounds[0].cwnd, 'bytes =', rounds[0].bytesInFlight);
console.log('RTT 3 cwnd =', rounds[2].cwnd, 'bytes =', rounds[2].bytesInFlight);
console.log('Final round 6 cwnd =', rounds[5].cwnd);

// prints: RTT 1 cwnd = 10 bytes = 14600
// prints: RTT 3 cwnd = 40 bytes = 58400
// prints: Final round 6 cwnd = 43`
    },
    {
      type: 'heading',
      id: 'retransmission-and-hol-blocking',
      text: {
        en: 'Fast Retransmit, RTO Timers, and Head-of-Line Blocking',
        bn: 'ফাস্ট রি-ট্রান্সমিশন, RTO টাইমার এবং হেড-অব-লাইন ব্লকিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a TCP segment is lost in transit, the receiver continues emitting duplicate ACKs for the last contiguous byte received. Receiving three duplicate ACKs triggers Fast Retransmit: the sender immediately re-sends the missing segment without waiting for the slow Retransmission Timeout (RTO) timer. However, because TCP enforces in-order byte delivery, any lost segment halts delivery of subsequent segments to the application layer. This Head-of-Line (HoL) blocking was a major limitation in HTTP/2, directly motivating the creation of HTTP/3 and QUIC over UDP.',
        bn: 'যখন কোনো টিসিপি সেগমেন্ট হারিয়ে যায়, তখন রিসিভার সর্বশেষ পাওয়া বাইটের জন্য ডুপ্লিকেট ACK পাঠাতে থাকে। পরপর ৩টি ডুপ্লিকেট ACK পেলে ফাস্ট রি-ট্রান্সমিশন সক্রিয় হয়: প্রেরক ধীরগতির RTO টাইমারের অপেক্ষা না করেই নিখোঁজ সেগমেন্টটি পুনরায় পাঠায়। তবে যেহেতু টিসিপি ক্রমানুসারে ডাটা প্রদান নিশ্চিত করে, তাই একটি সেগমেন্ট আটকে গেলে পরবর্তী সব সেগমেন্ট অ্যাপ্লিকেশনে পৌঁছানো বন্ধ থাকে। এই হেড-অব-লাইন (HoL) ব্লকিং HTTP/2 এর একটি বড় সীমাবদ্ধতা ছিল, যা ইউডিপির ওপর HTTP/3 এবং কুইক (QUIC) প্রোটোকল তৈরির মূল প্রেরণা হিসেবে কাজ করেছে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Ordered byte streams: TCP turns unreliable packet networks into guaranteed, ordered byte streams via ISNs and sequence numbers.',
          bn: 'সুশৃঙ্খল বাইট স্ট্রিম: টিসিপি অনির্ভরযোগ্য নেটওয়ার্কে ISN ও সিকোয়েন্স নম্বরের সাহায্যে নিশ্চিত ও সুশৃঙ্খল ডাটা পৌঁছায়।'
        },
        {
          en: 'Dual window bounds: Senders must respect min(rwnd, cwnd) to protect receiver buffers and network infrastructure simultaneously.',
          bn: 'দ্বিমুখী উইন্ডো সীমা: প্রেরককে অবশ্যই min(rwnd, cwnd) মেনে চলতে হয় যাতে গ্রাহক ও নেটওয়ার্ক উভয়ই সুরক্ষিত থাকে।'
        },
        {
          en: 'Fast retransmit speed: 3 duplicate ACKs trigger instant retransmission, avoiding expensive RTO timer delays.',
          bn: 'ফাস্ট রি-ট্রান্সমিশনের সুবিধা: ৩টি ডুপ্লিকেট ACK পাওয়া মাত্র বিলম্বকারী RTO টাইমার ছাড়াই তাৎক্ষণিক পুনঃপ্রেরণ ঘটে।'
        },
        {
          en: 'Head-of-line resolution: QUIC solves TCP stream-level head-of-line blocking by multiplexing streams over UDP datagrams.',
          bn: 'হেড-অব-লাইন সমাধান: কুইক ইউডিপির ওপর স্বাধীন স্ট্রিম চালিয়ে টিসিপির হেড-অব-লাইন ব্লকিং পুরোপুরি দূর করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tcp-tk-ex1',
      kind: 'mcq',
      topic: 'tcp-three-way-handshake',
      question: {
        en: 'What is the exact exchange of flags during a standard TCP connection establishment?',
        bn: 'একটি স্ট্যান্ডার্ড টিসিপি সংযোগ স্থাপনের সময় ফ্ল্যাগগুলোর বিনিময়ের সঠিক ক্রম কোনটি?'
      },
      options: [
        {
          en: 'SYN -> SYN-ACK -> ACK',
          bn: 'SYN -> SYN-ACK -> ACK'
        },
        {
          en: 'ACK -> SYN -> FIN',
          bn: 'ACK -> SYN -> FIN'
        },
        {
          en: 'PING -> PONG -> OK',
          bn: 'PING -> PONG -> OK'
        },
        {
          en: 'DATA -> FIN -> ACK',
          bn: 'DATA -> FIN -> ACK'
        }
      ],
      answer: 0,
      hint: {
        en: 'The client requests synchronization, the server synchronizes and acknowledges, and the client acknowledges.',
        bn: 'ক্লায়েন্ট সিনক্রোনাইজেশনের অনুরোধ করে, সার্ভার স্বীকৃতিসহ সিনক্রোনাইজ করে এবং ক্লায়েন্ট চূড়ান্ত স্বীকৃতি দেয়।'
      },
      explanation: {
        en: 'The three-way handshake synchronizes sequence numbers between client and server before data transfer begins.',
        bn: 'থ্রি-ওয়ে হ্যান্ডশেক ডাটা আদান-প্রদান শুরুর আগেই ক্লায়েন্ট ও সার্ভারের সিকোয়েন্স নম্বরগুলোর সমন্বয় ঘটায়।'
      }
    },
    {
      id: 'tcp-tk-ex2',
      kind: 'mcq',
      topic: 'fast-retransmit-threshold',
      question: {
        en: 'How many duplicate ACKs must a TCP sender receive before triggering Fast Retransmit without waiting for the RTO timer?',
        bn: 'RTO টাইমারের অপেক্ষা না করে ফাস্ট রি-ট্রান্সমিশন সক্রিয় করতে একটি টিসিপি প্রেরককে কতটি ডুপ্লিকেট ACK পেতে হয়?'
      },
      options: [
        {
          en: 'Exactly 3 duplicate ACKs (4 total identical ACKs)',
          bn: 'ঠিক ৩টি ডুপ্লিকেট ACK (মোট ৪টি অভিন্ন ACK)'
        },
        {
          en: '100 duplicate ACKs',
          bn: '১০০টি ডুপ্লিকেট ACK'
        },
        {
          en: 'Exactly 1 ACK',
          bn: 'ঠিক ১টি ACK'
        },
        {
          en: '50 duplicate ACKs',
          bn: '৫০টি ডুপ্লিকেট ACK'
        }
      ],
      answer: 0,
      hint: {
        en: 'Receiving 3 duplicate ACKs gives strong statistical confidence that a packet was lost rather than reordered.',
        bn: '৩টি ডুপ্লিকেট ACK প্রমাণ করে যে প্যাকেটটি পথ হারিয়ে ফেলেছে, কেবল ওলট-পালট হয়নি।'
      },
      explanation: {
        en: 'TCP Fast Retransmit triggers on the 3rd duplicate ACK, quickly repairing loss without waiting for a retransmission timer.',
        bn: 'টিসিপি ৩য় ডুপ্লিকেট ACK পাওয়া মাত্র ফাস্ট রি-ট্রান্সমিশন শুরু করে এবং টাইমার ছাড়াই প্যাকেটটি পুনরায় পাঠায়।'
      }
    },
    {
      id: 'tcp-tk-ex3',
      kind: 'mcq',
      topic: 'flow-vs-congestion-difference',
      question: {
        en: 'What is the critical operational difference between TCP Flow Control and Congestion Control?',
        bn: 'টিসিপি ফ্লো কন্ট্রোল এবং কনজেশন কন্ট্রোলের মধ্যে মূল ব্যবহারিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Flow Control prevents overwhelming the receiver buffer (rwnd), while Congestion Control prevents overwhelming the intermediate network (cwnd)',
          bn: 'ফ্লো কন্ট্রোল গ্রাহকের বাফার উপচে পড়া রোধ করে (rwnd), আর কনজেশন কন্ট্রোল মধ্যবর্তী নেটওয়ার্ক জ্যাম হওয়া রোধ করে (cwnd)'
        },
        {
          en: 'Flow Control is only used for video games, while Congestion Control is only for email',
          bn: 'ফ্লো কন্ট্রোল কেবল ভিডিও গেমে এবং কনজেশন কন্ট্রোল কেবল ইমেইলে ব্যবহৃত হয়'
        },
        {
          en: 'Flow Control runs on Wi-Fi only, while Congestion Control runs on fiber cables',
          bn: 'ফ্লো কন্ট্রোল শুধু ওয়াইফাইতে এবং কনজেশন কন্ট্রোল অপটিক্যাল ফাইবার তারে চলে'
        },
        {
          en: 'There is no difference; they represent the exact same software variable',
          bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা একই ভ্যারিয়েবলের দুটি নাম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of rwnd as the dining table capacity, and cwnd as the highway traffic between the restaurant and kitchen.',
        bn: 'rwnd হলো খাওয়ার টেবিলের জায়গা, আর cwnd হলো রান্নাঘর থেকে খাবার আনার রাস্তার জ্যাম।'
      },
      explanation: {
        en: 'Flow control protects the destination host; congestion control protects the shared network links between hosts.',
        bn: 'ফ্লো কন্ট্রোল গন্তব্য কম্পিউটারের সুরক্ষা দেয়; আর কনজেশন কন্ট্রোল ইন্টারনেটের শেয়ার্ড লাইনের জ্যাম দূর করে।'
      }
    },
    {
      id: 'tcp-tk-ex4',
      kind: 'mcq',
      topic: 'head-of-line-blocking-concept',
      question: {
        en: 'Why does a single lost TCP packet cause Head-of-Line (HoL) blocking for all multiplexed HTTP/2 streams on that connection?',
        bn: 'একটি মাত্র টিসিপি প্যাকেট হারালে সেই কানেকশনের সমস্ত মাল্টিপ্লেক্সড HTTP/2 স্ট্রিম কেন হেড-অব-লাইন ব্লকিংয়ে আটকে যায়?'
      },
      options: [
        {
          en: 'Because TCP requires in-order byte delivery, so the OS kernel will not deliver later arrived packets to any stream until the missing byte is retransmitted',
          bn: 'কারণ টিসিপি ক্রমানুসারে বাইট প্রদান দাবি করে, ফলে নিখোঁজ বাইট পুনরায় না আসা পর্যন্ত ওএস কার্নেল পরবর্তী কোনো প্যাকেট কাউকে দেয় না'
        },
        {
          en: 'Because HTTP/2 deletes the browser cache when a packet drops',
          bn: 'কারণ প্যাকেট হারালে HTTP/2 ব্রাউজারের সমস্ত ক্যাশ মুছে ফেলে'
        },
        {
          en: 'Because lost packets cause the computer monitor to turn off',
          bn: 'কারণ প্যাকেট হারালে কম্পিউটার মনিটর বন্ধ হয়ে যায়'
        },
        {
          en: 'Because TCP does not support multiple streams',
          bn: 'কারণ টিসিপি একাধিক স্ট্রিম সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'TCP guarantees a strict single stream of bytes. If byte 1000 is missing, bytes 2000-5000 must wait in the kernel buffer.',
        bn: 'টিসিপি প্রতিটি বাইট ক্রমানুসারে দেয়। ১০০০ নম্বর বাইট না এলে ২০০০-৫০০০ নম্বর বাইট বাফারে অলস বসে থাকে।'
      },
      explanation: {
        en: 'TCP layer HoL blocking delays all multiplexed streams in HTTP/2. QUIC solves this by multiplexing streams independently over UDP.',
        bn: 'টিসিপির এই ব্লকিং HTTP/2 এর সব স্ট্রিমকে থামিয়ে দেয়। কুইক ইউডিপির ওপর স্বাধীন স্ট্রিম চালিয়ে এই ত্রুটি দূর করেছে।'
      }
    }
  ],
  quiz: {
    id: 'the-tcp-tidekeeper-quiz',
    title: {
      en: 'TCP Mechanics and Congestion Control Quiz',
      bn: 'টিসিপি মেকানিক্স ও কনজেশন কন্ট্রোল কুইজ'
    },
    questions: [
      {
        id: 'tcp-q1',
        kind: 'mcq',
        topic: 'time-wait-state-purpose',
        question: {
          en: 'Why does the endpoint initiating a graceful TCP termination remain in the TIME_WAIT state for 2MSL (Maximum Segment Lifetime)?',
          bn: 'টিসিপি সংযোগ বন্ধের উদ্যোগ নেওয়া প্রান্তটি কেন 2MSL সময় পর্যন্ত TIME_WAIT অবস্থায় থাকে?'
        },
        options: [
          {
            en: 'To ensure the final ACK was received by the remote peer and to allow lingering delayed segments in the network to expire',
            bn: 'চূড়ান্ত ACK টি দূরবর্তী পক্ষ পেয়েছে কিনা নিশ্চিত করতে এবং নেটওয়ার্কে আটকে থাকা পুরনো প্যাকেটগুলোর মেয়াদ শেষ হতে দিতে'
          },
          {
            en: 'To restart the computer operating system cleanly',
            bn: 'কম্পিউটারের অপারেটিং সিস্টেম পরিচ্ছন্নভাবে রিস্টার্ট করার জন্য'
          },
          {
            en: 'To download Windows updates in the background',
            bn: 'ব্যাকগ্রাউন্ডে উইন্ডোজ আপডেট ডাউনলোড করার জন্য'
          },
          {
            en: 'TIME_WAIT is a bug in the TCP protocol that will be removed',
            bn: 'TIME_WAIT হলো টিসিপির একটি ত্রুটি যা শিগগিরই মুছে ফেলা হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If the final ACK is lost, the other side will retransmit its FIN. TIME_WAIT ensures that retransmitted FIN can be acknowledged.',
          bn: 'চূড়ান্ত ACK হারিয়ে গেলে অন্য পাশ আবার FIN পাঠাবে। TIME_WAIT সেই দ্বিতীয় FIN এর জবাব দিতে সাহায্য করে।'
        },
        explanation: {
          en: 'TIME_WAIT prevents delayed segments from old connections from corrupting future connections on the same socket pair.',
          bn: 'TIME_WAIT নিশ্চিত করে যে পুরনো সংযোগের কোনো প্যাকেট এসে একই সকেটের নতুন কোনো সংযোগকে নষ্ট করতে পারবে না।'
        }
      },
      {
        id: 'tcp-q2',
        kind: 'mcq',
        topic: 'slow-start-growth-rate',
        question: {
          en: 'At what rate does the Congestion Window (cwnd) grow during the TCP Slow Start phase?',
          bn: 'টিসিপি স্লো স্টার্ট (Slow Start) ধাপে কনজেশন উইন্ডো (cwnd) কী হারে বৃদ্ধি পায়?'
        },
        options: [
          {
            en: 'Exponentially: It increases by 1 MSS for each ACK received, effectively doubling the window size every RTT',
            bn: 'সূচকীয়ভাবে (Exponentially): প্রতি ACK তে ১ MSS বৃদ্ধি পেয়ে প্রতি RTT তে উইন্ডোর আকার কার্যত দ্বিগুণ হয়'
          },
          {
            en: 'It remains completely fixed at 1 byte forever',
            bn: 'এটি চিরতরে ১ বাইটে সম্পূর্ণ স্থির থাকে'
          },
          {
            en: 'It decreases by 50 percent every second',
            bn: 'এটি প্রতি সেকেন্ডে ৫০ শতাংশ হারে কমতে থাকে'
          },
          {
            en: 'It jumps directly to 100 gigabytes on the first packet',
            bn: 'এটি প্রথম প্যাকেটেই সরাসরি ১০০ গিগাবাইটে লাফ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Despite the name "Slow Start", its growth is exponential until it hits ssthresh.',
          bn: 'নাম "স্লো স্টার্ট" হলেও এর বৃদ্ধি অত্যন্ত দ্রুত ও সূচকীয়, যতক্ষণ না এটি ssthresh স্পর্শ করে।'
        },
        explanation: {
          en: 'Slow Start doubles cwnd every round-trip time, quickly probing the available network bandwidth.',
          bn: 'স্লো স্টার্ট প্রতি RTT তে উইন্ডো দ্বিগুণ করে খুব দ্রুত নেটওয়ার্কের সর্বোচ্চ ফাঁকা ক্ষমতা পরীক্ষা করে নেয়।'
        }
      },
      {
        id: 'tcp-q3',
        kind: 'mcq',
        topic: 'zero-window-probe-behavior',
        question: {
          en: 'What mechanism prevents a permanent deadlock when a TCP receiver advertises an rwnd of 0 and its subsequent window update ACK is lost?',
          bn: 'টিসিপি গ্রাহক যখন ০ আকারের rwnd ঘোষণা করে এবং পরবর্তী উইন্ডো আপডেট ACK হারিয়ে যায়, তখন চিরস্থায়ী ডেডলক রোধ করে কোন ব্যবস্থা?'
        },
        options: [
          {
            en: 'The sender starts a persist timer and periodically transmits 1-byte Zero-Window Probes to elicit window updates from the receiver',
            bn: 'প্রেরক একটি পারসিস্ট টাইমার চালু করে নির্দিষ্ট সময় পরপর ১ বাইটের জিরো-উইন্ডো প্রোব পাঠিয়ে গ্রাহকের কাছে উইন্ডো আপডেট জানতে চায়'
          },
          {
            en: 'The operating system terminates the web browser immediately',
            bn: 'অপারেটিং সিস্টেম তাৎক্ষণিকভাবে ওয়েব ব্রাউজার বন্ধ করে দেয়'
          },
          {
            en: 'The user must physically unplug and reconnect the network cable',
            bn: 'ব্যবহারকারীকে হাত দিয়ে নেটওয়ার্ক ক্যাবল খুলে আবার লাগাতে হয়'
          },
          {
            en: 'The router deletes the client IP address from the network',
            bn: 'রাউটার নেটওয়ার্ক থেকে ক্লায়েন্টের আইপি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A 1-byte probe forces the receiver to respond with its latest ACK and current rwnd.',
          bn: '১ বাইটের প্রোব পাঠালে রিসিভার বাধ্য হয়ে নতুন ACK এবং বর্তমান ফাঁকা বাফারের খবর জানায়।'
        },
        explanation: {
          en: 'Zero-Window Probing breaks potential deadlocks by querying the receiver’s buffer status periodically.',
          bn: 'জিরো-উইন্ডো প্রোব নিয়মিত রিসিভারের বাফার পরীক্ষা করে ডেডলক হওয়ার ঝুঁকি দূর করে।'
        }
      },
      {
        id: 'tcp-q4',
        kind: 'mcq',
        topic: 'aimd-fairness-property',
        question: {
          en: 'Why does Additive Increase / Multiplicative Decrease (AIMD) guarantee convergence and fair bandwidth sharing among competing flows?',
          bn: 'কেন যোজক বৃদ্ধি / গুণক হ্রাস (AIMD) নীতিটি সমান্তরাল একাধিক টিসিপি সংযোগের মাঝে সমতা ও সুষম ব্যান্ডউইথ নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Linear additive increases gently claim spare capacity, while multiplicative decreases penalize larger flows proportionally during congestion',
            bn: 'রৈখিক যোজক বৃদ্ধি সাবধানে ফাঁকা ব্যান্ডউইথ নেয়, আর গুণক হ্রাস জ্যামের সময় বড় সংযোগগুলোকে বেশি ছাড় দিতে বাধ্য করে সমতা আনে'
          },
          {
            en: 'Because it gives 100 percent of the speed to Google servers only',
            bn: 'কারণ এটি কেবল গুগল সার্ভারকে ১০০ শতাংশ গতি প্রদান করে'
          },
          {
            en: 'Because all packets are converted into encrypted mathematical formulas',
            bn: 'কারণ সমস্ত প্যাকেট এনক্রিপ্ট করা গাণিতিক সংকেতে পরিণত হয়'
          },
          {
            en: 'Because AIMD requires users to pay a cash fee per byte',
            bn: 'কারণ AIMD প্রতি বাইটের জন্য নগদ টাকা দাবি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A connection using twice as much bandwidth cuts twice as much when loss occurs, driving both flows toward parity.',
          bn: 'যে সংযোগ বেশি ব্যান্ডউইথ খাচ্ছিল, ক্ষতি হলে তার কাটা যায় বেশি, ফলে উভয় সংযোগ সমান গতিতে চলে আসে।'
        },
        explanation: {
          en: 'AIMD mathematically converges competing flows to a Pareto-optimal and fair sharing of network link bandwidth.',
          bn: 'AIMD গাণিতিকভাবে প্রমাণ করে যে একাধিক সংযোগ ইন্টারনেটে একে অপরের সাথে ধাক্কা না খেয়ে সুষম বণ্টন বজায় রাখে।'
        }
      }
    ]
  }
};
