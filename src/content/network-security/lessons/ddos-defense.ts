import type { Lesson } from '../../../lib/types';

export const DdosDefenseLesson: Lesson = {
  slug: 'ddos-defense',
  tech: 'network-security',
  title: {
    en: 'Distributed Denial of Service (DDoS) Defense: Volumetric, Protocol, and Layer 7 Floods',
    bn: 'ডিস্ট্রিবিউটেড ডিনায়েল অব সার্ভিস (DDoS) প্রতিরক্ষা: ভলিউমেট্রিক, প্রোটোকল ও লেয়ার ৭ আক্রমণ'
  },
  summary: {
    en: 'Master defensive mitigation against Distributed Denial of Service (DDoS) attacks across the OSI model. Understand how adversaries coordinate botnets to launch Layer 3 and Layer 4 volumetric amplification attacks alongside Layer 7 application floods. Explore kernel SYN cookies, Anycast BGP scrubbing, and token bucket traffic shaping. Inspect an executable Node.js rate limiter evaluating 4 traffic streams against a 100 req/sec quota: 3 legitimate client flows pass cleanly, while 1 volumetric botnet flood of 9000 req/sec is aggressively throttled.',
    bn: 'ওএসআই মডেলের বিভিন্ন স্তরে ডিস্ট্রিবিউটেড ডিনায়েল অব সার্ভিস (DDoS) আক্রমণ প্রতিহত করার কৌশল আয়ত্ত করুন। কীভাবে আক্রমণকারীরা বটনেট ব্যবহার করে লেয়ার ৩ ও ৪-এ ভলিউমেট্রিক অ্যাম্প্লিফিকেশন এবং লেয়ার ৭-এ অ্যাপ্লিকেশন ফ্লাড আক্রমণ চালায় তা জানুন। কার্নেল SYN কুকিজ, এনিকাস্ট (Anycast) BGP স্ক্রাবিং এবং টোকেন বাকেট ট্রাফিক শেপিং বিশ্লেষণ করুন। প্রতি সেকেন্ডে ১০০ রিকোয়েস্ট কোটা সম্পন্ন একটি কার্যকর Node.js রেট লিমিটার পরীক্ষা করুন যা ৪ টি ট্রাফিক স্ট্রিম মূল্যায়ন করে: ৩ টি বৈধ ক্লায়েন্ট প্রবাহ সফলভাবে অনুমোদিত হয় এবং ৯০০০ রিকোয়েস্টের ১ টি ক্ষতিকর বটনেট আক্রমণ প্রতিহত হয়।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'ddos-mechanics-and-taxonomies',
      text: {
        en: 'The DDoS Landscape: Volumetric, Protocol, and Application Layer Attacks',
        bn: 'DDoS আক্রমণের ধরন: ভলিউমেট্রিক, প্রোটোকল এবং অ্যাপ্লিকেশন লেয়ার ফ্লাড'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Denial of Service (DoS) attack attempts to exhaust computing resources, network bandwidth, or application memory so legitimate users cannot access a service. When an attacker harnesses hundreds of thousands of compromised devices (a botnet) to launch coordinated strikes from diverse geographic regions, it becomes a Distributed Denial of Service (DDoS) attack.',
        bn: 'একটি ডিনায়েল অব সার্ভিস (DoS) আক্রমণের মূল উদ্দেশ্য হলো কোনো সার্ভারের কম্পিউটিং ক্ষমতা, ব্যান্ডউইথ বা মেমোরি ফুরিয়ে দেওয়া যাতে সাধারণ ব্যবহারকারীরা সেবা না পায়। যখন আক্রমণকারী হাজার হাজার হ্যাক হওয়া ডিভাইস বা বটনেট ব্যবহার করে বিভিন্ন দেশ থেকে একযোগে আক্রমণ চালায়, তখন তাকে ডিস্ট্রিবিউটেড ডিনায়েল অব সার্ভিস (DDoS) বলা হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'DDoS attacks broadly fall into 3 distinct categories. Layer 3 and Layer 4 Volumetric Attacks (such as UDP amplification or ICMP floods) aim to physically saturate internet transit pipes. Protocol Attacks (such as TCP SYN floods) exhaust operating system connection state tables. Layer 7 Application Attacks (such as HTTP GET/POST floods or Slowloris) consume web server threads and database CPU cycles by mimicking legitimate user requests.',
        bn: 'DDoS আক্রমণ মূলত ৩ টি শ্রেণীতে বিভক্ত। লেয়ার ৩ ও ৪ ভলিউমেট্রিক আক্রমণ (যেমন ইউডিপি অ্যাম্প্লিফিকেশন) ইন্টারনেট পাইপের পুরো ব্যান্ডউইথ জ্যাম করে দেয়। প্রোটোকল আক্রমণ (যেমন টিসিপি সিন ফ্লাড) অপারেটিং সিস্টেমের কানেকশন মেমোরি ভরিয়ে ফেলে। আর লেয়ার ৭ অ্যাপ্লিকেশন আক্রমণ (যেমন এইচটিটিপি ফ্লাড বা স্লোলোরিস) ওয়েব সার্ভারের থ্রেড ও ডাটাবেজের প্রসেসর সম্পূর্ণ আটকে ফেলে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. TCP SYN Cookies (Kernel Defense)',
            bn: '১. টিসিপি সিন কুকিজ (কার্নেল প্রতিরক্ষা)'
          },
          text: {
            en: 'When the kernel SYN backlog queue fills up during a flood, the server encodes the connection state cryptographically into the Initial Sequence Number (ISN) of the SYN-ACK instead of allocating memory. Memory is only allocated when a valid ACK arrives.',
            bn: 'সিন ফ্লাডের সময় সার্ভারের মেমোরি কিউ ভরে গেলে, সার্ভার মেমোরি খরচ না করে সিকোয়েন্স নাম্বারের ভেতর এনক্রিপ্ট করে SYN-ACK পাঠায়। ক্লায়েন্ট সঠিক ACK পাঠালেই কেবল মেমোরি বরাদ্দ হয়।'
          },
        },
        {
          title: {
            en: '2. BGP Anycast & Edge Scrubbing',
            bn: '২. বিজিপি এনিকাস্ট ও এজ স্ক্রাবিং'
          },
          text: {
            en: 'Announces the same IP address from dozens of global data centers via BGP. Terabit-scale attack traffic is naturally fragmented and diluted across the globe, where scrubbing centers filter out malicious packets before routing clean traffic to origin servers.',
            bn: 'BGP-র মাধ্যমে একই আইপি পুরো বিশ্বের ডজন ডজন ডাটা সেন্টার থেকে ব্রডকাস্ট করা হয়। এর ফলে বিশাল টেরাবিট আক্রমণ বিশ্বজুড়ে ভাগ হয়ে দুর্বল হয়ে যায় এবং স্ক্রাবিং ফিল্টারের মাধ্যমে ক্ষতিকর প্যাকেটগুলো ফেলে দেওয়া হয়।'
          },
        },
        {
          title: {
            en: '3. Token Bucket Rate Limiting',
            bn: '৩. টোকেন বাকেট রেট লিমিটিং'
          },
          text: {
            en: 'Regulates inbound request rates using algorithmic token accumulation. Legitimate users with bursty traffic consume tokens without friction, while abusive botnets exceeding token refill rates face immediate connection dropping (HTTP 429).',
            bn: 'অ্যালগরিদমিক টোকেন জমার মাধ্যমে আগত রিকোয়েস্টের গতি নিয়ন্ত্রণ করে। সাধারণ ব্যবহারকারীরা স্বাভাবিকভাবে টোকেন ব্যবহার করতে পারে, কিন্তু বটনেট সীমা অতিক্রম করলেই সাথে সাথে রিকোয়েস্ট বাতিল (HTTP 429) হয়ে যায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Token Bucket Rate Limiting Architecture: 3 Legitimate Streams vs 1 Botnet Flood',
        bn: 'টোকেন বাকেট রেট লিমিটিং আর্কিটেকচার: ৩ টি বৈধ ট্রাফিক স্ট্রিম বনাম ১ টি বটনেট আক্রমণ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Token bucket DDoS mitigation architecture with 3 allowed client streams and 1 throttled botnet stream">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">EDGE DDOS MITIGATION & TOKEN BUCKET RATE LIMITER (CAPACITY: 100 REQ/S)</text>
  
  <!-- Left Box: Inbound Client Streams -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 INBOUND TRAFFIC STREAMS EVALUATED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 1: E-commerce Shopper (12 req/s)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Browsing catalog; natural human browsing speed</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Token consumption: 12 tokens/sec (Quota: 100/s)</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 2: Blog / Content Reader (8 req/s)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Static article reader; steady lightweight reads</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Token consumption: 8 tokens/sec (Quota: 100/s)</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 3: Authenticated Mobile App (40 req/s)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">JWT authenticated sync API client</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Token consumption: 40 tokens/sec (Quota: 100/s)</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Stream 4: Mirai Botnet Flood (9000 req/s) [ATTACK]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">High-frequency distributed HTTP GET flood</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">Overwhelms quota: Demands 9000 tokens/sec!</text>
    </g>
  </g>
  
  <!-- Right Box: Mitigation Engine Actions -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">MITIGATION VERDICTS: 3 PASS [✓] | 1 BLOCKED [✗]</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 1: PERMITTED [✓] (Forward to Origin)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Traffic status: 12 req/s is well within 100/s limit</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Dropped: 0 packets/s | Latency impact: 0ms</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 2: PERMITTED [✓] (Forward to Origin)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Traffic status: 8 req/s is well within 100/s limit</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Dropped: 0 packets/s | Latency impact: 0ms</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 3: PERMITTED [✓] (Forward to Origin)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Traffic status: 40 req/s is well within 100/s limit</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Dropped: 0 packets/s | Latency impact: 0ms</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Stream 4: RATE LIMITED & SHED [✗ BLOCKED]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Mitigation: 8900 excess req/s dropped at edge</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">HTTP 429 Too Many Requests sent; origin protected</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Token Bucket traffic shaping isolates volumetric surges at the CDN edge, insulating backend application servers</text>
</svg>`,
      caption: {
        en: 'The DDoS defense engine evaluates 4 traffic streams: 3 legitimate client streams pass smoothly within the 100 req/sec limit, while 1 botnet flood is rate-limited.',
        bn: 'ডিডিওএস প্রতিরক্ষা ইঞ্জিন ৪ টি ট্রাফিক স্ট্রিম মূল্যায়ন করে: ৩ টি বৈধ স্ট্রিম ১০০ রিকোয়েস্ট/সেকেন্ড কোটার ভেতরে নিরাপদে অনুমোদিত হয় এবং ১ টি বটনেট আক্রমণ প্রতিহত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'ddos-rate-limiter-code',
      text: {
        en: 'Building an In-Memory DDoS Rate Limiter Engine in Node.js',
        bn: 'Node.js-এ ইন-মেমোরি DDoS রেট লিমিটার ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'ddos-rate-limiter.js',
      code: `// Deterministic Token Bucket DDoS Defense & Traffic Shaping Engine
class TokenBucketDdosFilter {
  constructor(capacityPerSecond) {
    this.capacity = capacityPerSecond; // Max allowed requests per second
  }

  // Evaluate incoming stream against rate quota
  evaluateStream(stream) {
    const inboundRate = stream.requestsPerSec;

    if (inboundRate <= this.capacity) {
      return {
        clientName: stream.name,
        inboundRate,
        verdict: 'PERMITTED',
        action: 'FORWARD_TO_ORIGIN',
        droppedPerSecond: 0,
        httpStatusCode: 200
      };
    } else {
      const droppedRate = inboundRate - this.capacity;
      return {
        clientName: stream.name,
        inboundRate,
        verdict: 'RATE_LIMITED',
        action: 'SHED_EXCESS_TRAFFIC',
        droppedPerSecond: droppedRate,
        httpStatusCode: 429 // Too Many Requests
      };
    }
  }
}

// Instantiate rate limiter with 100 requests per second quota
const edgeRateLimiter = new TokenBucketDdosFilter(100);

// 4 distinct inbound network traffic profiles
const trafficStreams = [
  { name: 'shopper (E-commerce Web User)', requestsPerSec: 12 },
  { name: 'reader (Documentation Browser)', requestsPerSec: 8 },
  { name: 'api (Authenticated Mobile App)', requestsPerSec: 40 },
  { name: 'bot-flood (Distributed Mirai Botnet)', requestsPerSec: 9000 }
];

let allowedStreams = 0;
let mitigatedStreams = 0;

console.log('=== Edge DDoS Token Bucket Mitigation Audit ===\\n');
trafficStreams.forEach((stream, index) => {
  const result = edgeRateLimiter.evaluateStream(stream);

  if (result.verdict === 'PERMITTED') {
    allowedStreams++;
    console.log(\`[\${index + 1}] ALLOWED [✓]: \${result.clientName}\`);
    console.log(\`    Rate:      \${result.inboundRate} req/s (Quota: \${edgeRateLimiter.capacity}/s)\`);
    console.log(\`    Action:    \${result.action} [HTTP \${result.httpStatusCode}]\\n\`);
  } else {
    mitigatedStreams++;
    console.log(\`[\${index + 1}] BLOCKED [✗]: \${result.clientName}\`);
    console.log(\`    Rate:      \${result.inboundRate} req/s (Surge Exceeds \${edgeRateLimiter.capacity}/s)\`);
    console.log(\`    Action:    \${result.action} [HTTP \${result.httpStatusCode}]\`);
    console.log(\`    Dropped:   \${result.droppedPerSecond} malicious packets/s dropped!\\n\`);
  }
});

console.log('=== DDoS Protection Summary ===');
console.log('Total Streams Evaluated:   ', trafficStreams.length);
console.log('Legitimate Streams Passed: ', allowedStreams);
console.log('Botnet Floods Mitigated:   ', mitigatedStreams);`,
      caption: {
        en: 'The DDoS defense engine inspects 4 traffic streams: 3 legitimate flows pass smoothly within the 100 req/sec limit, and 1 massive flood is throttled.',
        bn: 'DDoS প্রতিরক্ষা ইঞ্জিন ৪ টি ট্রাফিক স্ট্রিম পরীক্ষা করে: ৩ টি বৈধ প্রবাহ ১০০ রিকোয়েস্ট/সেকেন্ড সীমার মধ্যে সফলভাবে অনুমোদিত হয় এবং ১ টি আক্রমণ প্রতিহত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Amplification Attacks: Why UDP Services are Prime Weapons',
        bn: 'অ্যাম্প্লিফিকেশন আক্রমণ: কেন ইউডিপি সার্ভিসগুলো প্রধান অস্ত্র'
      },
      text: {
        en: 'Adversaries weaponize publicly accessible UDP servers (such as NTP, DNS, or Memcached) for reflection amplification. Because UDP is stateless, the attacker spoofs the victim IP address as the source IP and sends a small 60-byte request to thousands of reflectors. The reflectors respond with gigantic 3000-byte replies directed entirely at the victim, achieving a 50x amplification factor that can overwhelm gigabit transit pipes in seconds.',
        bn: 'আক্রমণকারীরা ইন্টারনেটে উন্মুক্ত থাকা ইউডিপি সার্ভারগুলো (যেমন NTP, DNS বা Memcached) ব্যবহার করে রিফ্লেকশন অ্যাম্প্লিফিকেশন আক্রমণ চালায়। যেহেতু ইউডিপিতে কোনো কানেকশন স্ট্যাটাস যাচাই হয় না, হ্যাকার নিজের আইপির বদলে ভিকটিমের আইপি বসিয়ে মাত্র ৬০ বাইটের ছোট রিকোয়েস্ট পাঠায়। সার্ভারগুলো উত্তরে ৩০০০ বাইটের বিশাল ডাটা ভিকটিমের কাছে ফেরত পাঠায়, যা মূল ট্রাফিকের চেয়ে ৫০ গুণ বড় হয়ে ইন্টারনেট ব্যান্ডউইথ ধ্বংস করে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-ddos-ex-1',
      kind: 'predict',
      topic: 'permitted-streams-count',
      question: {
        en: 'In the DDoS traffic rate limiting simulation of 4 inbound traffic streams, how many streams were within the 100 req/sec quota and were PERMITTED? (3). Type the number.',
        bn: '৪ টি আগত ট্রাফিক স্ট্রিমের ডিডিওএস রেট লিমিটিং পরীক্ষায় সর্বমোট কয়টি স্ট্রিম প্রতি সেকেন্ডে ১০০ রিকোয়েস্ট কোটার ভেতরে ছিল এবং PERMITTED হিসেবে অনুমোদিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 client streams passed safely.',
        bn: 'ঠিক ৩ টি ক্লায়েন্ট স্ট্রিম নিরাপদে অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 4 evaluated streams, 3 legitimate streams (shopper at 12 req/s, reader at 8 req/s, api at 40 req/s) stayed within the 100 req/s quota. Only the botnet was blocked.',
        bn: 'মূল্যায়ন করা ৪ টি ট্রাফিকের মধ্যে ৩ টি বৈধ স্ট্রিম (শপার ১২ রিকোয়েস্ট, রিডার ৮ রিকোয়েস্ট, এপিআই ৪০ রিকোয়েস্ট) ১০০ কোটার নিচে ছিল। কেবল বটনেটকে ব্লক করা হয়েছিল।'
      },
    },
    {
      id: 'netsec-ddos-ex-2',
      kind: 'mcq',
      topic: 'tcp-syn-flood-mitigation-cookies',
      question: {
        en: 'How do TCP SYN Cookies protect operating system kernels against memory exhaustion during SYN flood attacks?',
        bn: 'সিন ফ্লাড (SYN flood) আক্রমণের সময় টিসিপি সিন কুকিজ (TCP SYN Cookies) কীভাবে অপারেটিং সিস্টেম কার্নেলকে মেমোরি সংকট থেকে রক্ষা করে?'
      },
      options: [
        {
          en: 'The kernel refuses to allocate memory structures in the SYN backlog; instead, it encodes the client connection state mathematically into the Initial Sequence Number (ISN) of the SYN-ACK packet',
          bn: 'কার্নেল ব্যাকলগ কিউতে মেমোরি বরাদ্দ না করে ক্লায়েন্টের কানেকশন স্টেটকে গাণিতিকভাবে এনকোড করে SYN-ACK প্যাকেটের ইনিশিয়াল সিকোয়েন্স নাম্বারের (ISN) মধ্যে পাঠিয়ে দেয়',
        },
        {
          en: 'It stores HTTP cookies inside the browser cache directory',
          bn: 'এটি ব্রাউজার ক্যাশ ডিরেক্টরির ভেতর এইচটিটিপি কুকি সংরক্ষণ করে রাখে',
        },
        {
          en: 'It automatically powers off the server computer when traffic doubles',
          bn: 'ট্রাফিক দ্বিগুণ হওয়া মাত্রই এটি সার্ভার কম্পিউটার স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়',
        },
        {
          en: 'It deletes all incoming emails to save disk storage space',
          bn: 'ডিস্ক স্টোরেজ খালি করার জন্য এটি সমস্ত আগত ইমেইল ডিলিট করে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'State is encoded in the ISN number rather than RAM memory.',
        bn: 'মেমোরিতে জায়গা না নিয়ে সিকোয়েন্স নাম্বারের ভেতর এনকোড করে তথ্য রাখা হয়।'
      },
      explanation: {
        en: 'Without SYN cookies, half-open connections exhaust kernel RAM. With SYN cookies enabled, memory is allocated only after the client returns a matching final ACK.',
        bn: 'সিন কুকিজ চালু থাকলে মেমোরি কিউ ভরার ঝুঁকি থাকে না; ক্লায়েন্ট সঠিক ACK ফেরত পাঠালেই কেবল মেমোরি বরাদ্দ করা হয়।'
      },
    },
    {
      id: 'netsec-ddos-ex-3',
      kind: 'mcq',
      topic: 'slowloris-attack-mechanism',
      question: {
        en: 'What makes the Slowloris attack particularly dangerous against traditional thread-per-connection web servers like Apache?',
        bn: 'ঐতিহ্যবাহী থ্রেড-ভিত্তিক ওয়েব সার্ভারের (যেমন Apache) বিরুদ্ধে স্লোলোরিস (Slowloris) আক্রমণ কেন বিশেষভাবে বিপজ্জনক?'
      },
      options: [
        {
          en: 'Slowloris sends HTTP requests extremely slowly, transmitting incomplete headers byte-by-byte at timed intervals to keep hundreds of server worker threads permanently tied up without requiring massive bandwidth',
          bn: 'স্লোলোরিস আক্রমণ অত্যন্ত ধীরগতিতে অসম্পূর্ণ এইচটিটিপি হেডার পাঠায় এবং নির্দিষ্ট সময় পর পর কয়েকটি করে বাইট পাঠাতে থাকে, যার ফলে কোনো উচ্চ ব্যান্ডউইথ ছাড়াই সার্ভারের সমস্ত ওয়ার্কার থ্রেড চিরতরে আটকে যায়',
        },
        {
          en: 'Slowloris installs computer viruses on the network router cables',
          bn: 'স্লোলোরিস নেটওয়ার্ক রাউটারের তারের মধ্যে কম্পিউটার ভাইরাস ছড়িয়ে দেয়',
        },
        {
          en: 'Slowloris encrypts all database files with a ransomware key',
          bn: 'স্লোলোরিস র্যানসমওয়্যার কি দিয়ে সমস্ত ডাটাবেজ ফাইল এনক্রিপ্ট করে ফেলে',
        },
        {
          en: 'Slowloris generates high-voltage electrical surges through the power supply',
          bn: 'স্লোলোরিস পাওয়ার সাপ্লাইয়ের মাধ্যমে উচ্চ ভোল্টেজের বিদ্যুৎ ঝলক তৈরি করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Slowloris is a low-and-slow Layer 7 attack targeting connection pools.',
        bn: 'স্লোলোরিস কম ব্যান্ডউইথ ব্যবহার করে ওয়েব সার্ভারের কানেকশন পুল আটকে দেয়।'
      },
      explanation: {
        en: 'Because it generates minimal traffic, Slowloris evades volumetric firewalls. Event-driven servers (Nginx) and strict connection timeouts (client_header_timeout) neutralize it.',
        bn: 'কম ব্যান্ডউইথ ব্যবহারের কারণে প্রচলিত ফায়ারওয়ালে এটি ধরা পড়ে না। Nginx-এর মতো ইভেন্ট-ভিত্তিক সার্ভার এবং হেডার টাইমআউটের মাধ্যমে এটি প্রতিহত করা হয়।'
      },
    },
    {
      id: 'netsec-ddos-ex-4',
      kind: 'predict',
      topic: 'mitigated-streams-count',
      question: {
        en: 'How many of the 4 evaluated traffic streams represented an aggressive volumetric flood that was RATE LIMITED and dropped? (1). Type the number.',
        bn: 'মূল্যায়ন করা ৪ টি ট্রাফিক স্ট্রিমের মধ্যে সর্বমোট কয়টি স্ট্রিম একটি আক্রমণাত্মক ভলিউমেট্রিক ফ্লাড ছিল যাকে RATE LIMITED করে ড্রপ করা হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 botnet stream was throttled.',
        bn: 'কেবলমাত্র ১ টি বটনেট স্ট্রিমকে ড্রপ করা হয়েছিল।'
      },
      explanation: {
        en: 'Out of 4 streams, only 1 stream (the Mirai botnet emitting 9000 req/s) exceeded the 100 req/s quota and was aggressively throttled.',
        bn: '৪ টি স্ট্রিমের মধ্যে কেবলমাত্র ১ টি স্ট্রিম (মিরাই বটনেট যা ৯০০০ রিকোয়েস্ট/সেকেন্ড পাঠাচ্ছিল) ১০০ কোটা অতিক্রম করায় ড্রপ করা হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'ddos-defense-quiz',
    title: {
      en: 'DDoS Defense & Traffic Shaping Architecture Quiz',
      bn: 'DDoS প্রতিরক্ষা ও ট্রাফিক শেপিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'netsec-ddos-qz-1',
        kind: 'mcq',
        topic: 'bgp-flowspec-mitigation',
        question: {
          en: 'What is BGP Flowspec (RFC 5575), and how do internet service providers use it during massive terabit DDoS attacks?',
          bn: 'BGP Flowspec (RFC 5575) কী এবং ইন্টারনেট সার্ভিস প্রোভাইডাররা কীভাবে বিশাল টেরাবিট DDoS আক্রমণের সময় এটি ব্যবহার করে?'
        },
        options: [
          {
            en: 'BGP Flowspec allows upstream routers to propagate granular firewall filter rules across autonomous systems via BGP, enabling traffic rate-limiting or redirection at the internet core before floods reach victim links',
            bn: 'BGP Flowspec ইন্টারনেট রাউটারগুলোকে বিজিপির মাধ্যমে নির্দিষ্ট ফায়ারওয়াল রুল ছড়িয়ে দেওয়ার সুযোগ দেয়, যার ফলে ভিকটিমের ব্যান্ডউইথ প্লাবিত হওয়ার আগেই ইন্টারনেটের মূল ব্যাকবোনে ক্ষতিকর ট্রাফিক আটকে দেওয়া যায়',
          },
          {
            en: 'It measures the physical speed of light passing through underwater cables',
            bn: 'এটি সমুদ্রের তলদেশের ক্যাবল দিয়ে চলা আলোর শারীরিক গতি পরিমাপ করে',
          },
          {
            en: 'It changes the administrative root passwords on employee laptops',
            bn: 'এটি কর্মীদের ল্যাপটপের অ্যাডমিনিস্ট্রেটিভ রুট পাসওয়ার্ড স্বয়ংক্রিয়ভাবে বদলে দেয়',
          },
          {
            en: 'It prints daily network bandwidth reports on office paper printers',
            bn: 'এটি অফিসের কাগজ প্রিন্টারে প্রতিদিনের নেটওয়ার্ক ব্যান্ডউইথ রিপোর্ট প্রিন্ট করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Flowspec distributes granular firewall rules across upstream BGP routers.',
          bn: 'ফ্লোস্পেক আপস্ট্রিম বিজিপি রাউটারগুলোতে সূক্ষ্ম ফায়ারওয়াল রুল প্রয়োগ করে।'
        },
        explanation: {
          en: 'Traditional blackholing drops all traffic to the victim IP. Flowspec allows dropping only the specific attack vector (e.g. UDP port 123 from a specific ASN) while keeping normal traffic flowing.',
          bn: 'সাধারণ ব্ল্যাকহোলিং সব ট্রাফিক বন্ধ করে দেয়, কিন্তু ফ্লোস্পেক কেবল ক্ষতিকর ট্রাফিক ফেলে দিয়ে স্বাভাবিক ইন্টারনেট চালু রাখে।'
        },
      },
      {
        id: 'netsec-ddos-qz-2',
        kind: 'mcq',
        topic: 'layer-7-tls-fingerprinting',
        question: {
          en: 'How does modern TLS Client Fingerprinting (JA3 / JA4) assist Web Application Firewalls in identifying DDoS botnets?',
          bn: 'আধুনিক TLS ক্লায়েন্ট ফিঙ্গারপ্রিন্টিং (JA3 / JA4) কীভাবে ওয়েব অ্যাপ্লিকেশন ফায়ারওয়ালকে DDoS বটনেট সনাক্ত করতে সাহায্য করে?'
        },
        options: [
          {
            en: 'It inspects the TLS Client Hello parameters (supported cipher suites, TLS extensions, and elliptic curves) to generate a cryptographic hash that reveals the underlying bot library regardless of spoofed User-Agent headers',
            bn: 'এটি TLS ক্লায়েন্ট হেলো প্যাকেটের প্যারামিটার (সাইফার স্যুট, এক্সটেনশন, উপবৃত্তাকার কার্ভ) পরীক্ষা করে একটি ক্রিপ্টোগ্রাফিক হ্যাশ তৈরি করে, যা আক্রমণকারীর ভুয়া ব্রাউজার ইউজার-এজেন্ট সত্ত্বেও আসল বট স্ক্রিপ্টকে চিহ্নিত করে',
          },
          {
            en: 'It scans the user physical fingerprints on laptop glass trackpads',
            bn: 'এটি ল্যাপটপের গ্লাস ট্র্যাকপ্যাডে থাকা ব্যবহারকারীর শারীরিক আঙ্গুলের ছাপ স্ক্যান করে',
          },
          {
            en: 'It records microphone audio during encrypted network handshakes',
            bn: 'এটি এনক্রিপ্ট করা নেটওয়ার্ক হ্যান্ডশেকের সময় মাইক্রোফোনের অডিও রেকর্ড করে',
          },
          {
            en: 'It measures computer monitor brightness levels during website loading',
            bn: 'এটি ওয়েবসাইট লোড হওয়ার সময় কম্পিউটার মনিটরের উজ্জ্বলতার মাত্রা পরীক্ষা করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'JA3 hashes the cipher suites and extensions inside the TLS Client Hello.',
          bn: 'JA3 সাইফার স্যুট এবং এক্সটেনশন হ্যাশ করে আক্রমণকারীর আসল ক্লায়েন্ট কোড প্রকাশ করে দেয়।'
        },
        explanation: {
          en: 'Attackers frequently spoof User-Agent strings to mimic Chrome or Safari. JA3 hashes reveal that the request actually originated from Python requests or Go botnet binaries.',
          bn: 'হ্যাকাররা ব্রাউজারের নাম নকল করলেও JA3 ফিঙ্গারপ্রিন্ট দেখে বোঝা যায় যে রিকোয়েস্টটি আসলে কোনো স্বয়ংক্রিয় পাইথন বা গো স্ক্রিপ্ট থেকে এসেছে।'
        },
      },
      {
        id: 'netsec-ddos-qz-3',
        kind: 'mcq',
        topic: 'udp-reflection-ip-spoofing-bcp38',
        question: {
          en: 'What fundamental internet routing defense, documented in BCP 38 and RFC 2827, stops adversaries from launching UDP reflection amplification attacks?',
          bn: 'BCP ৩৮ এবং RFC ২৮২৭ নির্দেশিকায় উল্লেখিত ইন্টারনেটের কোন মৌলিক সুরক্ষা ব্যবস্থা আক্রমণকারীদের ইউডিপি রিফ্লেকশন অ্যাম্প্লিফিকেশন আক্রমণ চালানো প্রতিহত করে?'
        },
        options: [
          {
            en: 'Ingress and Egress Source Address Validation (SAV), which configures edge ISPs to drop any outbound packets whose source IP address does not belong to the customer assigned network prefix',
            bn: 'ইনগ্রেস ও ইগ্রেস সোর্স অ্যাড্রেস ভ্যালিডেশন (SAV), যা প্রান্তিক ইন্টারনেট সেবাদাতাদের এমন যেকোনো প্যাকেট ড্রপ করতে বাধ্য করে যার সোর্স আইপি গ্রাহকের বৈধ নেটওয়ার্ক সীমার বাইরে',
          },
          {
            en: 'Disconnecting all internet cables every night at midnight for maintenance',
            bn: 'রক্ষণাবেক্ষণের সুবিধার্থে প্রতি মধ্যরাতে সমস্ত ইন্টারনেটের ক্যাবল খুলে রাখা',
          },
          {
            en: 'Requiring all email senders to purchase government postage stamps',
            bn: 'সমস্ত ইমেইল প্রেরণকারীর জন্য সরকারি ডাকটিকিট কেনা বাধ্যতামূলক করা',
          },
          {
            en: 'Restricting web servers to only transmitting text documents without pictures',
            bn: 'ওয়েব সার্ভারকে ছবি ছাড়া কেবল সাধারণ টেক্সট ফাইল পাঠানোর নির্দেশ দেওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'BCP 38 drops outbound packets with spoofed source IP addresses.',
          bn: 'BCP 38 ভুয়া সোর্স আইপি সহ তৈরি প্যাকেটগুলো গেটওয়েতেই বাতিল করে দেয়।'
        },
        explanation: {
          en: 'UDP reflection attacks rely entirely on spoofing the victim IP. If every ISP enforced BCP 38 to drop spoofed source IPs, reflection attacks would be mathematically impossible.',
          bn: 'ইউডিপি রিফ্লেকশন সম্পূর্ণভাবে ভুয়া আইপি তৈরির উপর নির্ভরশীল। সব আইএসপি BCP 38 মানলে স্পুফড আইপির অস্তিত্বই থাকত না।'
        },
      },
      {
        id: 'netsec-ddos-qz-4',
        kind: 'mcq',
        topic: 'token-bucket-vs-leaky-bucket',
        question: {
          en: 'How does the Token Bucket traffic shaping algorithm differ fundamentally from the Leaky Bucket algorithm during legitimate traffic bursts?',
          bn: 'বৈধ ট্রাফিকের হঠাৎ বৃদ্ধির সময় টোকেন বাকেট অ্যালগরিদম কীভাবে লিকি বাকেট (Leaky Bucket) অ্যালগরিদমের চেয়ে ভিন্ন আচরণ করে?'
        },
        options: [
          {
            en: 'Token Bucket accumulates tokens during idle periods to allow legitimate bursts of speed up to the bucket capacity, whereas Leaky Bucket strictly enforces a constant, smooth output rate regardless of idle periods',
            bn: 'টোকেন বাকেট অলস সময়ে টোকেন জমিয়ে রাখে যাতে কোনো বৈধ গ্রাহক হঠাৎ দ্রুত গতিতে ডাটা পাঠালে তা বাকেটের ক্ষমতা পর্যন্ত অনুমতি পায়, আর লিকি বাকেট সবসময় একদম ধ্রুব ও সমান গতিতে ট্রাফিক বের করে',
          },
          {
            en: 'Token Bucket consumes twenty times more computer electricity than Leaky Bucket',
            bn: 'টোকেন বাকেট লিকি বাকেটের চেয়ে বিশ গুণ বেশি বিদ্যুৎ শক্তি খরচ করে',
          },
          {
            en: 'Token Bucket is only compatible with wireless Bluetooth network keyboards',
            bn: 'টোকেন বাকেট কেবল ব্লুটুথ ওয়্যারলেস কীবোর্ডের সাথে কাজ করতে পারে',
          },
          {
            en: 'Leaky Bucket permanently deletes all database tables when it runs out of water',
            bn: 'লিকি বাকেট পানি ফুরিয়ে গেলে সমস্ত ডাটাবেজ টেবিল স্থায়ীভাবে মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Token Bucket permits bursts; Leaky Bucket forces constant output rate.',
          bn: 'টোকেন বাকেট সাময়িক গতি বৃদ্ধি মেনে নেয়; লিকি বাকেট সর্বদা সমান গতি বজায় রাখে।'
        },
        explanation: {
          en: 'Token Bucket is optimal for web APIs where legitimate users perform occasional bursts of requests without getting falsely throttled.',
          bn: 'ওয়েব এপিআইয়ের জন্য টোকেন বাকেট আদর্শ, কারণ সাধারণ ব্যবহারকারীর হঠাৎ এক সাথে একাধিক রিকোয়েস্ট পাঠালেও তাকে ভুলবশত ব্লক করা হয় না।'
        },
      },
    ],
  },
  next: {
    slug: 'netsec-capstone',
    title: {
      en: 'Network Security Capstone: Hardening Enterprise Infrastructure',
      bn: 'নেটওয়ার্ক সিকিউরিটি ক্যাপস্টোন: এন্টারপ্রাইজ ইনফ্রাস্ট্রাকচার সুরক্ষিতকরণ'
    },
  },
};
