import type { Lesson } from '../../../lib/types';

export const TcpCongestionLesson: Lesson = {
  slug: 'tcp-congestion',
  tech: 'tcpip',
  title: {
    en: 'TCP Congestion Control: Slow Start, AIMD & BBR Algorithms',
    bn: 'TCP কনজেশন কন্ট্রোল: Slow Start, AIMD ও BBR অ্যালগরিদম'
  },
  summary: {
    en: 'Master network congestion avoidance: the Congestion Window (cwnd), Slow Start exponential growth, Additive Increase Multiplicative Decrease (AIMD), Fast Recovery, and modern Google BBR (Bottleneck Bandwidth and RTT).',
    bn: 'নেটওয়ার্ক কনজেশন প্রতিরোধে দক্ষতা: কনজেশন উইন্ডো (cwnd), স্লো স্টার্ট এক্সপোনেনশিয়াল বৃদ্ধি, অ্যাডিটিভ ইনক্রিজ মাল্টিপ্লিকেটিভ ডিক্রিজ (AIMD), ফাস্ট রিকভারি এবং আধুনিক গুগল BBR অ্যালগরিদম।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'flow-vs-congestion',
      text: {
        en: '1. Flow Control vs Congestion Control',
        bn: '১. ফ্লো কন্ট্রোল বনাম কনজেশন কন্ট্রোল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit data across the internet, TCP prevents network collapse by distinguishing between 2 distinct bottlenecks: end-host buffer limits and intermediate router link congestion:',
        bn: 'যখন আপনি ইন্টারনেটে ডাটা প্রেরণ করেন, নেটওয়ার্ক অচল হওয়া রোধ করতে TCP ২টি পৃথক সীমাবদ্ধতার মধ্যে পার্থক্য করে: গ্রাহকের মেমরি বাফারের সীমাবদ্ধতা এবং মধ্যবর্তী রাউটার ও ক্যাবলের ভিড় বা কনজেশন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Flow Control (Receiver Window: rwnd): Advertised by the destination host in the TCP header to prevent the sender from overflowing the receiver application buffer.',
          bn: '১. ফ্লো কন্ট্রোল (Receiver Window: rwnd): গন্তব্য হোস্ট TCP হেডারের মাধ্যমে জানায়, যাতে প্রেরক তার রিসিভিং বাফার উপচে না ফেলে।'
        },
        {
          en: '2. Congestion Control (Congestion Window: cwnd): Calculated dynamically by the sender to prevent pushing more traffic than the intermediate routers, fiber switches, and ISP links can handle.',
          bn: '২. কনজেশন কন্ট্রোল (Congestion Window: cwnd): প্রেরক নিজে গণনা করে যাতে মধ্যবর্তী রাউটার, সুইচ বা ইন্টারনেট লিঙ্কগুলোর সক্ষমতার বেশি ট্রাফিক না চলে যায়।'
        },
        {
          en: '3. Effective Transmission Window: The sender transmits at most min(cwnd, rwnd) unacknowledged bytes at any instant.',
          bn: '৩. কার্যকর ট্রান্সমিশন উইন্ডো: প্রেরক যেকোনো মুহূর্তে সর্বোচ্চ min(cwnd, rwnd) পরিমাণ অপরিশোধিত বা আন-অ্যাকনলেজড বাইট পাঠাতে পারে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'congestion-sawtooth-diagram',
      title: {
        en: 'TCP Congestion Control Lifecycle: Slow Start & AIMD Sawtooth Curve',
        bn: 'TCP কনজেশন কন্ট্রোল জীবনচক্র: স্লো স্টার্ট ও AIMD স-টুথ কার্ভ'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="30" fill="#38bdf8" font-size="17" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">TCP Congestion Window Evolution: Slow Start &amp; AIMD Sawtooth</text>' +
          '<!-- Axes -->' +
          '<line x1="70" y1="360" x2="740" y2="360" stroke="#64748b" stroke-width="2"/>' +
          '<line x1="70" y1="360" x2="70" y2="60" stroke="#64748b" stroke-width="2"/>' +
          '<text x="740" y="380" fill="#94a3b8" font-size="11" text-anchor="end">Time (Round-Trip Times - RTT) &#x2192;</text>' +
          '<text x="60" y="55" fill="#94a3b8" font-size="11" text-anchor="end">cwnd (MSS) &#x2191;</text>' +
          '<!-- Grid Lines -->' +
          '<line x1="70" y1="200" x2="740" y2="200" stroke="#334155" stroke-dasharray="4"/>' +
          '<text x="65" y="204" fill="#f59e0b" font-size="10" text-anchor="end">ssthresh (32)</text>' +
          '<!-- Slow Start Exponential Curve -->' +
          '<path d="M 70 350 Q 150 340 180 200" fill="none" stroke="#10b981" stroke-width="3"/>' +
          '<text x="120" y="270" fill="#34d399" font-size="11" font-weight="bold">1. Slow Start (2&#x207F; exponential)</text>' +
          '<!-- Congestion Avoidance Linear Growth -->' +
          '<path d="M 180 200 L 380 90" fill="none" stroke="#38bdf8" stroke-width="3"/>' +
          '<text x="270" y="130" fill="#38bdf8" font-size="11" font-weight="bold">2. Congestion Avoidance (+1 MSS / RTT)</text>' +
          '<!-- Packet Loss Drop -->' +
          '<line x1="380" y1="90" x2="380" y2="235" stroke="#f87171" stroke-width="2" stroke-dasharray="3"/>' +
          '<circle cx="380" cy="90" r="5" fill="#ef4444"/>' +
          '<text x="385" y="85" fill="#fca5a5" font-size="10" font-weight="bold">Packet Drop! (Triple Dup ACK)</text>' +
          '<!-- Multiplicative Decrease -->' +
          '<text x="385" y="240" fill="#fca5a5" font-size="10">&#x2193; Halve cwnd (Multiplicative Decrease)</text>' +
          '<!-- Next Linear Probing Phase -->' +
          '<path d="M 380 235 L 560 140" fill="none" stroke="#38bdf8" stroke-width="3"/>' +
          '<circle cx="560" cy="140" r="5" fill="#ef4444"/>' +
          '<line x1="560" y1="140" x2="560" y2="260" stroke="#f87171" stroke-width="2" stroke-dasharray="3"/>' +
          '<path d="M 560 260 L 720 180" fill="none" stroke="#38bdf8" stroke-width="3"/>' +
          '<!-- Comparison Note -->' +
          '<rect x="180" y="375" width="450" height="30" rx="4" fill="#1e293b"/>' +
          '<text x="405" y="395" fill="#e2e8f0" font-size="11" text-anchor="middle">&#x26A1; AIMD Sawtooth achieves max throughput while dynamically yielding to shared flows</text>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'four-phases',
      text: {
        en: '2. The Four Classic Phases: Slow Start, AIMD & Fast Recovery',
        bn: '২. চারটি ক্লাসিক ধাপ: স্লো স্টার্ট, AIMD এবং ফাস্ট রিকভারি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard TCP congestion control algorithms (such as TCP Reno and Cubic, defined in RFC 5681) operate in four distinct modes:',
        bn: 'RFC 5681 দ্বারা সংজ্ঞায়িত আদর্শ TCP কনজেশন কন্ট্রোল অ্যালগরিদমগুলো (যেমন Reno এবং Cubic) চারটি স্বতন্ত্র ধাপে কাজ করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Slow Start: cwnd starts small (e.g. 10 MSS) and doubles every Round-Trip Time (RTT): 10 -> 20 -> 40 -> 80. Despite the word "slow", growth is actually exponential!',
          bn: '১. স্লো স্টার্ট: cwnd ছোট সংখ্যায় শুরু হয় (যেমন ১০ MSS) এবং প্রতি রাউন্ড-ট্রিপ সময়ে (RTT) দ্বিগুণ হয়: ১০ -> ২০ -> ৪০ -> ৮০। নাম স্লো হলেও বৃদ্ধি মূলত এক্সপোনেনশিয়াল।'
        },
        {
          en: '2. Congestion Avoidance (AIMD): Once cwnd reaches the threshold (ssthresh), exponential growth stops. cwnd increases linearly by +1 MSS per RTT, gently probing network capacity.',
          bn: '২. কনজেশন এভয়েডেন্স (AIMD): cwnd থ্রেশহোল্ডে (ssthresh) পৌঁছালে এক্সপোনেনশিয়াল বৃদ্ধি থেমে যায়। প্রতি RTT তে লিনিয়ারভাবে মাত্র +১ MSS বৃদ্ধি পায়।'
        },
        {
          en: '3. Multiplicative Decrease: When 3 duplicate ACKs signal a packet loss, ssthresh is cut in half (ssthresh = cwnd / 2), and cwnd is halved to instantly relieve congested routers.',
          bn: '৩. মাল্টিপ্লিকেটিভ ডিক্রিজ: ৩ টি ডুপ্লিকেট ACK পেলে ssthresh অর্ধেক করে দেওয়া হয় (ssthresh = cwnd / 2) এবং cwnd অর্ধেকে নামিয়ে রাউটারের ওপর চাপ কমানো হয়।'
        },
        {
          en: '4. Fast Retransmit & Fast Recovery: The sender retransmits the missing segment immediately and avoids falling back to cwnd = 1, maintaining high throughput.',
          bn: '৪. ফাস্ট রিট্রান্সমিট ও রিকভারি: প্রেরক RTO টাইমাউটের অপেক্ষা না করে অবিলম্বে প্যাকেটটি পুনরায় পাঠায় এবং উইন্ডো ১ না করে স্বাভাবিক উচ্চ গতি ধরে রাখে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'google-bbr',
      text: {
        en: '3. Google BBR: The Modern Bandwidth & RTT Revolution',
        bn: '৩. গুগল BBR: আধুনিক ব্যান্ডউইথ ও RTT বিপ্লব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional algorithms like Cubic consider packet loss as the sole signal of congestion. On modern networks with large router memory, this causes Bufferbloat: queues fill up completely before dropping packets, introducing seconds of buffer latency. Developed at Google, BBR (Bottleneck Bandwidth and RTT) models the physical pipe by measuring max delivery rate and minimum round-trip time, pacing packets to keep router buffers completely empty.',
        bn: 'Cubic এর মতো পুরানো অ্যালগরিদমগুলো কেবল প্যাকেট লসকেই কনজেশনের সংকেত মনে করত। আধুনিক রাউটারে প্রচুর মেমরি থাকায় এর ফলে Bufferbloat তৈরি হয়—রাউটার মেমরি ভর্তি হতে গিয়ে কয়েক সেকেন্ডের ল্যাটেন্সি সৃষ্টি হয়। গুগলের তৈরি BBR অ্যালগরিদম নেটওয়ার্কের সর্বোচ্চ গতি ও সর্বনিম্ন RTT মেপে সরাসরি নিয়ন্ত্রিত গতিতে প্যাকেট পাঠায়, ফলে বাফার খালি থাকে ও কোনো বাফারব্লট হয় না।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. TCP Congestion Window Engine in TypeScript',
        bn: '৪. TypeScript এ TCP কনজেশন উইন্ডো ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates Slow Start exponential growth, AIMD linear probing, and multiplicative decrease upon packet loss:',
        bn: 'নিচের TypeScript প্রোগ্রামটি স্লো স্টার্ট এক্সপোনেনশিয়াল বৃদ্ধি, AIMD লিনিয়ার প্রবিং এবং প্যাকেট লসের সময় উইন্ডো অর্ধেকে নামিয়ে আনা সিমুলেট করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of TCP Slow Start, Additive Increase Multiplicative Decrease (AIMD), and Fast Recovery.',
        bn: 'TCP স্লো স্টার্ট, অ্যাডিটিভ ইনক্রিজ মাল্টিপ্লিকেটিভ ডিক্রিজ (AIMD) এবং ফাস্ট রিকভারির TypeScript সিমুলেশন।'
      },
      code: `// Simulation of TCP Congestion Control (Slow Start & AIMD)

class TcpCongestionController {
  public cwndMss: number = 10; // Initial window = 10 MSS
  public ssthreshMss: number = 32; // Slow start threshold
  public rttRound: number = 0;

  // Simulate one Round-Trip Time (RTT) of successful acknowledgements
  onRttSuccess(): void {
    this.rttRound++;
    if (this.cwndMss < this.ssthreshMss) {
      // Phase 1: Slow Start -> Exponential doubling
      const previous = this.cwndMss;
      this.cwndMss = Math.min(this.cwndMss * 2, this.ssthreshMss);
      console.log('RTT ' + this.rttRound + ' [Slow Start]: cwnd grew ' + previous + ' -> ' + this.cwndMss + ' MSS');
    } else {
      // Phase 2: Congestion Avoidance -> Additive Increase (+1 MSS per RTT)
      this.cwndMss += 1;
      console.log('RTT ' + this.rttRound + ' [AIMD Linear]: cwnd probed to ' + this.cwndMss + ' MSS');
    }
  }

  // Simulate packet loss detected via 3 Duplicate ACKs (Fast Retransmit)
  onPacketLoss(): void {
    console.log('\\n*** Packet Drop Detected via 3 Duplicate ACKs! ***');
    // Multiplicative Decrease
    this.ssthreshMss = Math.max(Math.floor(this.cwndMss / 2), 2);
    this.cwndMss = this.ssthreshMss; // Fast Recovery sets cwnd to ssthresh
    console.log('Multiplicative Decrease: ssthresh = ' + this.ssthreshMss + ' MSS, new cwnd = ' + this.cwndMss + ' MSS\\n');
  }
}

// Execution demonstration
const cc = new TcpCongestionController();

console.log('--- Phase 1: Exponential Slow Start Probing ---');
cc.onRttSuccess(); // 10 -> 20
cc.onRttSuccess(); // 20 -> 32 (hits ssthresh)

console.log('\\n--- Phase 2: AIMD Additive Increase ---');
cc.onRttSuccess(); // 32 -> 33
cc.onRttSuccess(); // 33 -> 34
cc.onRttSuccess(); // 34 -> 35

// Network router drops packet at 35 MSS
cc.onPacketLoss(); // cwnd drops to 17 MSS

// Resumes linear probing from 17 MSS
cc.onRttSuccess(); // 17 -> 18 MSS
console.log('Current CWND after recovery: ' + cc.cwndMss + ' MSS'); // -> 18`
    }
  ],
  exercises: [
    {
      id: 'tcp-cg-ex-1',
      kind: 'mcq',
      question: {
        en: 'Why is the initial phase of TCP called "Slow Start" if its congestion window actually doubles exponentially each RTT?',
        bn: 'TCP এর প্রারম্ভিক পর্যায়কে কেন "স্লো স্টার্ট" বলা হয়, যেখানে প্রতি RTT তে এর কনজেশন উইন্ডো আসলে এক্সপোনেনশিয়াল হারে দ্বিগুণ হয়?'
      },
      options: [
        {
          en: 'Because it starts cautiously with a small initial window (e.g. 10 MSS) instead of blasting maximum network bandwidth immediately',
          bn: 'কারণ এটি শুরুতেই সম্পূর্ণ নেটওয়ার্ক ব্যান্ডউইথ ব্যবহার না করে মাত্র ১০ MSS এর মতো একটি ছোট উইন্ডো দিয়ে সতর্কভাবে শুরু করে'
        },
        {
          en: 'Because data packets physically travel slower across fiber optic cables during the first 10 seconds',
          bn: 'কারণ প্রথম ১০ সেকেন্ডে অপটিক্যাল ফাইবারে ডাটা প্যাকেটগুলো ধীরগতিতে চলে'
        },
        {
          en: 'Because server fans must spin up slowly to avoid tripping electrical fuses',
          bn: 'কারণ বৈদ্যুতিক ফিউজ নষ্ট হওয়া এড়াতে সার্ভারের ফ্যান ধীরে চালু করতে হয়'
        },
        {
          en: 'Because TCP slow start only works over old 56k dial-up telephone modems',
          bn: 'কারণ TCP স্লো স্টার্ট কেবল পুরানো ৫৬k ডায়াল-আপ মডেমেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It starts small to probe network capacity.',
        bn: 'নেটওয়ার্কের ধারণক্ষমতা পরীক্ষা করতে এটি ছোট আকারে শুরু হয়।'
      },
      explanation: {
        en: 'Compared to early protocols that immediately sent at full interface speed causing instant congestion collapse, TCP starts slowly from a small initial window before ramping up exponentially.',
        bn: 'একসাথে পুরো স্পিডে ডাটা পাঠিয়ে নেটওয়ার্ক জ্যাম করার বদলে TCP শুরুতে ছোট উইন্ডো নিয়ে সাবধানে শুরু করে বলেই একে স্লো স্টার্ট বলা হয়।'
      }
    },
    {
      id: 'tcp-cg-ex-2',
      kind: 'mcq',
      question: {
        en: 'What mathematical principle does AIMD (Additive Increase Multiplicative Decrease) enforce on a congested network?',
        bn: 'কনজেস্টেড নেটওয়ার্কে AIMD (Additive Increase Multiplicative Decrease) কোন গাণিতিক নীতিটি প্রয়োগ করে?'
      },
      options: [
        {
          en: 'Gently probe bandwidth by adding 1 MSS per RTT, but violently halve the window upon detecting packet loss to rapidly clear congestion',
          bn: 'প্রতি RTT তে ১ MSS যোগ করে সাবধানে ব্যান্ডউইথ বাড়ায়, কিন্তু প্যাকেট ড্রপ হলে মুহূর্তেই উইন্ডো অর্ধেক করে নেটওয়ার্ক ফাঁকা করে'
        },
        {
          en: 'Multiply the window by 10 every second regardless of network capacity',
          bn: 'নেটওয়ার্কের অবস্থা বিবেচনা না করেই প্রতি সেকেন্ডে উইন্ডোকে ১০ দিয়ে গুণ করে'
        },
        {
          en: 'Keep bandwidth constant at 100 megabits per second',
          bn: 'ব্যান্ডউইথকে সর্বদা ১০০ মেগাবিট পার সেকেন্ডে স্থির রাখে'
        },
        {
          en: 'Divide packet payload size by 32',
          bn: 'প্যাকেটের পেলোড সাইজকে ৩২ দিয়ে ভাগ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Additive increase (+1 MSS), multiplicative decrease (/2).',
        bn: 'অ্যাডিটিভ ইনক্রিজ (+১ MSS) এবং মাল্টিপ্লিকেটিভ ডিক্রিজ (ভাগ ২)।'
      },
      explanation: {
        en: 'AIMD increases throughput linearly by 1 MSS per RTT to probe capacity, but slashes the sending rate by 50% upon loss, mathematically guaranteeing fair resource sharing among competing flows.',
        bn: 'AIMD লিনিয়ারভাবে ধীরে ধীরে গতি বাড়ায় কিন্তু ভিড় দেখলেই এক ধাক্কায় ৫০% কমিয়ে দেয়, যা নেটওয়ার্কের সমস্ত ব্যবহারকারীর মধ্যে ন্যায্য বণ্টন নিশ্চিত করে।'
      }
    },
    {
      id: 'tcp-cg-ex-3',
      kind: 'mcq',
      question: {
        en: 'What fundamental network issue does Google\'s BBR algorithm solve compared to traditional loss-based algorithms like Cubic?',
        bn: 'Cubic এর মতো পুরানো লস-ভিত্তিক অ্যালগরিদমের তুলনায় গুগলের BBR অ্যালগরিদম নেটওয়ার্কের কোন মৌলিক সমস্যাটি সমাধান করে?'
      },
      options: [
        {
          en: 'Bufferbloat: it paces packet delivery to keep router queues empty instead of filling buffers until packets drop',
          bn: 'Bufferbloat: এটি রাউটারের মেমরি ভর্তি করে প্যাকেট ড্রপ করার অপেক্ষা না করে বাফার সম্পূর্ণ খালি রাখার গতিতে প্যাকেট পাঠায়'
        },
        {
          en: 'It completely replaces the need for Ethernet optical cables',
          bn: 'এটি ইথারনেট অপটিক্যাল ক্যাবলের প্রয়োজনীয়তা পুরোপুরি দূর করে'
        },
        {
          en: 'It allows routers to operate with 0% electricity',
          bn: 'এটি রাউটারকে ০% বিদ্যুৎ খরচে চালানোর সুযোগ দেয়'
        },
        {
          en: 'It doubles the speed of light in deep-sea fiber cables',
          bn: 'এটি সমুদ্রের তলদেশের ফাইবারে আলোর গতি দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pacing packets to match bottleneck capacity prevents bloated router queues.',
        bn: 'রাউটারের বাফার অতিরিক্ত ভর্তি (bufferbloat) হওয়া বন্ধ করে।'
      },
      explanation: {
        en: 'Traditional TCP fills router memory buffers until drops occur (Bufferbloat). BBR computes real-time bottleneck bandwidth and round-trip time, pacing packets to deliver high speed with low latency.',
        bn: 'BBR রাউটারের বাফার মেমরি অযথা ভর্তি না করে নেটওয়ার্ক পাইপের আসল সাইজ মেপে সবচেয়ে দক্ষ গতিতে প্যাকেট পরিবহন করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tcp-congestion',
    title: {
      en: 'TCP Congestion Control Algorithms Quiz',
      bn: 'TCP কনজেশন কন্ট্রোল অ্যালগরিদম কুইজ'
    },
    questions: [
      {
        id: 'cg-q1',
        kind: 'mcq',
        question: {
          en: 'How does a TCP sender determine how many unacknowledged bytes it can transmit into the network at any moment?',
          bn: 'যেকোনো মুহূর্তে নেটওয়ার্কে ঠিক কত বাইট আন-অ্যাকনলেজড ডাটা পাঠানো যাবে তা প্রেরক কীভাবে নির্ধারণ করে?'
        },
        options: [
          {
            en: 'By taking the minimum of the Congestion Window and Receiver Window: min(cwnd, rwnd)',
            bn: 'কনজেশন উইন্ডো এবং রিসিভার উইন্ডোর মধ্য থেকে ক্ষুদ্রতম মানটি গ্রহণ করে: min(cwnd, rwnd)'
          },
          {
            en: 'By adding cwnd and rwnd together',
            bn: 'cwnd এবং rwnd এর যোগফল হিসাব করে'
          },
          {
            en: 'By multiplying cwnd by the router CPU temperature',
            bn: 'রাউটার সিপিইউ এর তাপমাত্রা দিয়ে cwnd গুণ করে'
          },
          {
            en: 'By checking the browser window width in pixels',
            bn: 'ব্রাউজার উইন্ডোর পিক্সেল প্রস্থ পরীক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The transmission is constrained by whichever limit is smaller.',
          bn: 'যে সীমাবদ্ধতাটি ছোট, ট্রান্সমিশন ঠিক সেটির মাধ্যমেই নিয়ন্ত্রিত হয়।'
        },
        explanation: {
          en: 'A sender must respect both constraints: intermediate router capacity (cwnd) and destination buffer capacity (rwnd), hence Transmission Window = min(cwnd, rwnd).',
          bn: 'প্রেরককে নেটওয়ার্কের ধারণক্ষমতা (cwnd) এবং গ্রাহকের মেমরি বাফার (rwnd) দুটির কথাই মাথায় রাখতে হয়, তাই উভয়ের সর্বনিম্ন মানটিই ব্যবহৃত হয়।'
        }
      },
      {
        id: 'cg-q2',
        kind: 'mcq',
        question: {
          en: 'What threshold determines when a TCP sender transitions from exponential Slow Start to linear Congestion Avoidance?',
          bn: 'কোন থ্রেশহোল্ডটি নির্ধারণ করে যে কখন TCP প্রেরক এক্সপোনেনশিয়াল স্লো স্টার্ট থেকে লিনিয়ার কনজেশন এভয়েডেন্সে প্রবেশ করবে?'
        },
        options: [
          {
            en: 'ssthresh (Slow Start Threshold)',
            bn: 'ssthresh (Slow Start Threshold)'
          },
          {
            en: 'MTU (Maximum Transmission Unit)',
            bn: 'MTU (Maximum Transmission Unit)'
          },
          {
            en: 'TTL (Time to Live)',
            bn: 'TTL (Time to Live)'
          },
          {
            en: 'SYN_BACKLOG',
            bn: 'SYN_BACKLOG'
          }
        ],
        answer: 0,
        hint: {
          en: 'ssthresh separates exponential doubling from additive increase.',
          bn: 'ssthresh এক্সপোনেনশিয়াল দ্বিগুণ বৃদ্ধি ও লিনিয়ার বৃদ্ধির সীমানা নির্ধারণ করে।'
        },
        explanation: {
          en: 'When cwnd < ssthresh, TCP operates in Slow Start. Once cwnd >= ssthresh, TCP switches to Congestion Avoidance (linear probing).',
          bn: 'cwnd এর মান ssthresh এর চেয়ে কম থাকলে স্লো স্টার্ট চলে; আর এটি ssthresh এ পৌঁছালে লিনিয়ার কনজেশন এভয়েডেন্স শুরু হয়।'
        }
      },
      {
        id: 'cg-q3',
        kind: 'mcq',
        question: {
          en: 'What happens to cwnd and ssthresh when an outright Retransmission Timeout (RTO) occurs?',
          bn: 'যখন কোনো অ্যাকনলেজমেন্ট না এসে সরাসরি রিট্রান্সমিশন টাইমাউট (RTO) ঘটে, তখন cwnd এবং ssthresh এর কী হয়?'
        },
        options: [
          {
            en: 'ssthresh is set to cwnd / 2 and cwnd collapses all the way down to 1 MSS (restart Slow Start)',
            bn: 'ssthresh কে cwnd / 2 করা হয় এবং cwnd এক ধাক্কায় মাত্র ১ MSS এ নেমে আসে (নতুন করে স্লো স্টার্ট শুরু হয়)'
          },
          {
            en: 'cwnd immediately doubles to 100 MSS',
            bn: 'cwnd অবিলম্বে দ্বিগুণ হয়ে ১০০ MSS হয়'
          },
          {
            en: 'The connection switches to UDP automatically',
            bn: 'সংযোগটি স্বয়ংক্রিয়ভাবে UDP তে পরিবর্তিত হয়'
          },
          {
            en: 'The network interface card reboots',
            bn: 'নেটওয়ার্ক ইন্টারফেস কার্ড রিবুট হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'An RTO signifies catastrophic network congestion.',
          bn: 'একটি RTO নেটওয়ার্কের চরম কনজেশন নির্দেশ করে।'
        },
        explanation: {
          en: 'An RTO timeout indicates severe packet loss. TCP slashes cwnd down to 1 MSS and restarts Slow Start to avoid worsening catastrophic network congestion.',
          bn: 'টাইমাউট ঘটা মানে নেটওয়ার্কে প্রচণ্ড ভিড়। তাই TCP সাথে সাথে উইন্ডো কমিয়ে ১ MSS এ নামিয়ে আনে এবং নতুন করে স্লো স্টার্ট শুরু করে।'
        }
      },
      {
        id: 'cg-q4',
        kind: 'mcq',
        question: {
          en: 'What algorithm is currently configured as the default TCP congestion control in the Linux kernel for desktop and server distributions?',
          bn: 'লিনাক্স কার্নেলে ডেস্কটপ ও সার্ভার ডিস্ট্রিবিউশনের জন্য বর্তমানে ডিফল্ট TCP কনজেশন কন্ট্রোল অ্যালগরিদম হিসেবে কোনটি কনফিগার করা থাকে?'
        },
        options: [
          {
            en: 'CUBIC',
            bn: 'CUBIC'
          },
          {
            en: 'Tahoe',
            bn: 'Tahoe'
          },
          {
            en: 'Token Ring',
            bn: 'Token Ring'
          },
          {
            en: 'CSMA/CD',
            bn: 'CSMA/CD'
          }
        ],
        answer: 0,
        hint: {
          en: 'Uses a cubic mathematical function for window growth.',
          bn: 'উইন্ডো বৃদ্ধির জন্য কিউবিক গাণিতিক ফাংশন ব্যবহার করে।'
        },
        explanation: {
          en: 'TCP CUBIC is the standard default congestion control algorithm in modern Linux. It uses a cubic function to scale quickly on high-bandwidth, high-latency links.',
          bn: 'আধুনিক লিনাক্সে TCP CUBIC ডিফল্ট অ্যালগরিদম হিসেবে থাকে; এটি কিউবিক ফাংশন ব্যবহার করে উচ্চ গতির দীর্ঘ দূরত্বের নেটওয়ার্কে দ্রুত স্কেল করে।'
        }
      },
      {
        id: 'cg-q5',
        kind: 'mcq',
        question: {
          en: 'What condition does "Bufferbloat" describe in internet routers and broadband modems?',
          bn: 'ইন্টারনেট রাউটার ও ব্রডব্যান্ড মডেমে "Bufferbloat" কোন পরিস্থিতিকে বর্ণনা করে?'
        },
        options: [
          {
            en: 'Oversized router memory buffers holding packets for seconds before dropping them, creating massive network latency without improving throughput',
            bn: 'অতিরিক্ত বড় রাউটার বাফার প্যাকেট ড্রপ না করে সেকেন্ডের পর সেকেন্ড আটকে রাখে, যা স্পিড না বাড়িয়ে উল্টো বিশাল নেটওয়ার্ক ল্যাটেন্সি তৈরি করে'
          },
          {
            en: 'A computer running out of RAM while downloading photos',
            bn: 'ছবি ডাউনলোড করার সময় কম্পিউটারের র‍্যাম মেমরি ফুরিয়ে যাওয়া'
          },
          {
            en: 'A fiber optic cable snapping under the ocean',
            bn: 'সমুদ্রের নিচে অপটিক্যাল ফাইবার ছিঁড়ে যাওয়া'
          },
          {
            en: 'A Wi-Fi router password containing too many symbols',
            bn: 'ওয়াই-ফাই রাউটার পাসওয়ার্ডে অতিরিক্ত প্রতীকের উপস্থিতি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Excessive buffering causes excessive queuing latency.',
          bn: 'অতিরিক্ত বাফারিংয়ের কারণে কিউতে দীর্ঘ বিলম্ব সৃষ্টি হয়।'
        },
        explanation: {
          en: 'Bufferbloat occurs when network hardware has excessively large queues that fill with packets, delaying all communication and destroying real-time responsiveness.',
          bn: 'রাউটারের অতিরিক্ত বাফারে প্যাকেট জমতে জমতে বিশাল কিউ তৈরি হয়, যা পিং ও ল্যাটেন্সিকে চরম মাত্রায় বাড়িয়ে দিয়ে লাইভ যোগাযোগ নষ্ট করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'network-ports',
    title: {
      en: 'Network Ports & Sockets: Well-Known Ports, Ephemeral Ranges & NAT',
      bn: 'নেটওয়ার্ক পোর্ট ও সকেট: ওয়েল-নোন পোর্ট, এফেমারাল রেঞ্জ এবং NAT'
    }
  }
};
