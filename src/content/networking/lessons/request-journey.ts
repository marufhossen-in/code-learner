import type { Lesson } from '../../../lib/types';

export const requestJourneyLesson: Lesson = {
  slug: 'request-journey',
  tech: 'networking',
  title: {
    en: 'Request Journey — You type a URL and pixels appear',
    bn: 'একটি রিকোয়েস্টের যাত্রা: URL থেকে রেসপন্স'
  },
  summary: {
    en: 'You type a URL and pixels appear. In between: name resolution, a three-way handshake, a cryptographic negotiation, a load balancer’s decision, and maybe a cache that makes physics irrelevant. Walk the whole route, hop by hop, with the real cost of each.',
    bn: 'আপনি URL লিখলেন, দেখা গেল পিক্সেল। মাঝখানে: নাম-সমাধান, তিন-স্তরীয় হ্যান্ডশেক, ক্রিপ্টোগ্রাফিক দর-কষাকষি, লোড ব্যালান্সারের সিদ্ধান্ত, আর সম্ভবত এমন একটি ক্যাশ যা পদার্থবিদ্যাকেই তুচ্ছ করে দেয়। পুরো রাস্তা হেঁটে দেখুন — হপে হপে, প্রতিটির আসল মূল্যসহ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'WHAT really happens between URL and pixels?',
        bn: 'URL আর পিক্সেলের মাঝে আসলে কী ঘটে?'
      }
    },
    
    {
      type: 'keyterms',
      items: [
        {
          term: 'DNS',
          def: {
            en: 'The phonebook: hostname → IP, resolved by cached, recursive descent through a hierarchy.',
            bn: 'ফোনবুক: হোস্টনাম → IP; শ্রেণিবিন্যাসে ক্যাশভুক্ত রিকার্সিভ অবতরণে সমাধান।'
          }
        },
        {
          term: 'TCP handshake',
          def: {
            en: 'SYN → SYN-ACK → ACK: one RTT to agree on sequence numbers before any data.',
            bn: 'SYN → SYN-ACK → ACK: ডেটার আগে সিকোয়েন্স নাম্বারে ঐকমত্যের এক RTT।'
          }
        },
        {
          term: 'TLS handshake',
          def: {
            en: 'Certificate check + key exchange: 2 RTT (TLS 1.2), 1 RTT (TLS 1.3), 0 on resumption.',
            bn: 'সার্টিফিকেট যাচাই + কি-বিনিময়: 2 RTT (TLS 1.2), 1 RTT (TLS 1.3), রিজিউমে 0।'
          }
        },
        {
          term: 'CDN edge',
          def: {
            en: 'A cache banked near the user; geography replaced by memory.',
            bn: 'ব্যবহারকারীর কাছে রাখা ক্যাশ-ভাণ্ডার; ভূগোলের বদলে স্মৃতি।'
          }
        },
        {
          term: 'RTT',
          def: {
            en: 'Round-trip time: the irreducible cost of one there-and-back at the speed of light.',
            bn: 'রাউন্ড-ট্রিপ টাইম: আলোর গতিতে একবার যাওয়া-আসার নিষ্ক্রিয় খরচ।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'WHY latency is a budget of round trips, not megabytes',
        bn: 'কেন ল্যাটেন্সি হলো মেগাবাইট নয়, রাউন্ড-ট্রিপের বাজেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The rule row: rtt, dns, tcp, tls, alive, http, cdn, bandwidth — each rule rides on these terms.',
        bn: 'নিয়ম-সারি: rtt, dns, tcp, tls, alive, http, cdn, bandwidth — প্রতি নিয়ম এই শব্দেরই উপরে চড়ে।'
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'HOW the hops chain together',
        bn: 'হপগুলো শৃঙ্খলে বাঁধা যেভাবে'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1️⃣ URL parse (0 ms)',
            bn: '1️⃣ URL পার্স (0 ms)'
          },
          text: {
            en: 'https://api.example.com/users → protocol https, host api.example.com, path /users. No network yet.',
            bn: 'খাতার লাইন: ব্যবহারকারী (user), আয়োজক (host), পথ (path), https, api, example, com, protocol — প্রতিটি-শব্দ পড়ো সে যা বহন করে তা দিয়ে।'
          }
        },
        {
          title: {
            en: '2️⃣ DNS resolve (0-1+ RTT)',
            bn: '2️⃣ DNS রিজলভ (0-1+ RTT)'
          },
          text: {
            en: 'api.example.com → 203.0.113.10. Caches (browser/OS/resolver) usually answer from memory; cold lookups chase the hierarchy.',
            bn: 'api.example.com → 203.0.113.10। ক্যাশ (ব্রাউজার/OS/রিজলভার) সাধারণত স্মৃতি থেকেই জবাব দেয়; ঠাণ্ডা খোঁজে শ্রেণিবিন্যাসে ছুটতে হয়।'
          }
        },
        {
          title: {
            en: '3️⃣ TCP connect (+1 RTT)',
            bn: '3️⃣ TCP কানেক্ট (+1 RTT)'
          },
          text: {
            en: 'SYN, SYN-ACK, ACK — the pipe now exists, numbered and reliable.',
            bn: 'SYN, SYN-ACK, ACK — পাইপ এবার আছে, নম্বরদখল, নির্ভরযোগ্য।'
          }
        },
        {
          title: {
            en: '4️⃣ TLS negotiate (+1-2 RTT)',
            bn: '4️⃣ TLS নেগোসিয়েশন (+1-2 RTT)'
          },
          text: {
            en: 'Server proves identity with its certificate; both sides derive shared session keys.',
            bn: 'সার্ভার সার্টিফিকেটে পরিচয় প্রমাণ করে; দুই পক্ষ শেয়ার্ড সেশন-কি বানায়।'
          }
        },
        {
          title: {
            en: '5️⃣ HTTP exchange (+1 RTT… or 0)',
            bn: '5️⃣ HTTP আদানপ্রদান (+1 RTT… বা 0)'
          },
          text: {
            en: 'GET /users travels inside the encrypted pipe — unless a CDN edge or browser cache short-circuits the trip entirely.',
            bn: 'GET /users এনক্রিপ্টেড পাইপ দিয়ে যায় — যদি না CDN এজ বা ব্রাউজার ক্যাশ যাত্রাই বন্ধ করে দেয়।'
          }
        }
      ]
    },
    {
      type: 'code',
      code: `// Simulating RTT breakdown of a cross-continental HTTPS request (e.g. Dhaka to Virginia)
interface NetworkPhase {
  name: string;
  rttCount: number;
  durationMs: number;
}

const baseRttMs = 180; // Speed-of-light propagation round-trip

const requestPhases: NetworkPhase[] = [
  { name: '1. Cold DNS Resolution (Recursive)', rttCount: 1, durationMs: baseRttMs },
  { name: '2. TCP 3-Way Handshake (SYN/ACK)', rttCount: 1, durationMs: baseRttMs },
  { name: '3. TLS 1.3 Key Exchange', rttCount: 1, durationMs: baseRttMs },
  { name: '4. HTTP GET & Server TTFB', rttCount: 1, durationMs: baseRttMs + 45 }
];

const totalRtt = requestPhases.reduce((acc, p) => acc + p.rttCount, 0);
const totalLatencyMs = requestPhases.reduce((acc, p) => acc + p.durationMs, 0);

console.log('Total Handshake Round Trips =', totalRtt);
console.log('Total Time-To-First-Byte (TTFB) ms =', totalLatencyMs);

// prints: Total Handshake Round Trips = 4
// prints: Total Time-To-First-Byte (TTFB) ms = 765`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'INTERNAL: why “compromise” is the protocol DNA',
        bn: 'ভেতরের কথা: প্রোটোকলের ডিএনএ-তে “আপস” কেন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every layer above is a treaty between correctness and speed. TCP could skip the handshake (some do — QUIC does it in the same flow as crypto) but then stale packets from a dead conversation could contaminate a new one. DNS could be one giant central server; instead it is a delegated tree, trading one extra lookup (rare, cached) for planetary scale and independent control. TLS 1.2 spent two round trips on perfect negotiation; TLS 1.3 deleted half the supported ciphers to earn its single RTT. Even the CDN is a treaty: freshness traded for locality, healed by TTLs, etags, and purge APIs. When you see “why doesn’t the web just…?” — the answer is always a treaty you have not read yet. The lab below lets you feel the treaties: toggle the cache, toggle the CDN, change geography, and watch the RTT ledger balance.',
        bn: 'উপরের প্রতি স্তর নির্ভুলতা আর গতির চুক্তিপত্র। TCP হ্যান্ডশেক বাদ দিতে পারত (কেউ কেউ দেয় — QUIC ক্রিপ্টোর সাথে মিশিয়ে দেয়), কিন্তু তাহলে মৃত সংলাপের বাসি প্যাকেট নতুনটিকে দূষিত করতে পারত। DNS হতে পারত এক দৈত্য কেন্দ্রীয় সার্ভার; বদলে এটি প্রতিনিধি-বৃক্ষ — গ্রহ-ব্যাপী আকার আর স্বাধীন নিয়ন্ত্রণের বিনিময়ে এক হাঁড়া অতিরিক্ত লুকআপ (বিরল, ক্যাশিত)। TLS 1.2 খরচ করেছিল দুই রাউন্ড-ট্রিপ নিখুঁত আলোচনায়; TLS 1.3 সমর্থিত সাইফারের অর্ধেক মুছে ফেলে এক RTT অর্জন করেছে। এমনকি CDN-ও চুক্তিপত্র: তাজাপনের বিনিময়ে সান্নিধ্য, TTL, etag আর purge API-এ সারানো। "ওয়েব তাহলে কেন শুধু…?" — উত্তর সবসময় এমন এক চুক্তিপত্র যা আপনি এখনো পড়েননি। নিচের ল্যাবে চুক্তিপত্রগুলো অনুভব করতে পারবেন: ক্যাশ টগল করুন, CDN টগল করুন, ভূগোল বদলান — আর RTT খাতার হিসাব মেলান।'
      }
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'VISUAL: the Network Lab',
        bn: 'ভিজ্যুয়াল: নেটওয়ার্ক ল্যাব'
      }
    },
    {
      type: 'visual',
      id: 'network'
    },
    {
      type: 'para',
      text: {
        en: 'Type any URL and set the scene: client in Dhaka or London, origin in Virginia or Singapore, CDN on or off, cache warm or cold. Play the journey and watch the ledger accumulate — each hop stamps its cost in RTT. The experiment that rewires instincts: run Dhaka→Virginia with EVERYTHING cold, then flip the CDN on and run again. Same request. Same code. Physics, renegotiated.',
        bn: 'যেকোনো URL লিখে পরিবেশ সাজান: ক্লায়েন্ট ঢাকা না লন্ডন, অরিজিন ভার্জিনিয়া না সিঙ্গাপুর, CDN চালু না বন্ধ, ক্যাশ গরম না ঠাণ্ডা। যাত্রা চালান আর খাতায় জমা হতে দেখুন — প্রতি হপ RTT-তে মূল্য সিল করে। সহজাত প্রবৃত্তি নতুন করে তার বাঁধে যে পরীক্ষা: সব ঠাণ্ডা রেখে ঢাকা→ভার্জিনিয়া চালান, তারপর CDN চালু করে আবার চালান। একই রিকোয়েস্ট। একই কোড। পদার্থবিদ্যা, পুনঃআলোচিত।'
      }
    },
    {
      type: 'heading',
      id: 'result',
      text: {
        en: 'RESULT: network instincts',
        bn: 'ফলাফল: নেটওয়ার্ক সহজাততা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Latency = Σ RTT; every optimization deletes a round trip or teleports the content.',
          bn: 'ল্যাটেন্সি = Σ RTT; প্রতি অপ্টিমাইজেশন মুছে ফেলে একটি রাউন্ড-ট্রিপ নয়তো কনটেন্ট টেলিপোর্ট করে।'
        },
        {
          en: 'In reading order: cache, machine, everything, cacheable, every, time, answering, past — the section moves through these terms, one beat each.',
          bn: 'পড়ার ক্রমে: ক্যাশ (cache), যন্ত্র (machine), everything, cacheable, every, time, answering, past — অংশটি এই শব্দগুলো দিয়ে এক-এক তালে হাঁটে।'
        },
        {
          en: 'When “the app feels slow”, ask first: how many round trips to first byte?',
          bn: '"অ্যাপ ধীর" মনে হলে প্রথম প্রশ্ন: প্রথম বাইট পর্যন্ত ক’টি রাউন্ড-ট্রিপ?'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'DEBUGGING drill: the 400-millisecond blip',
        bn: 'ডিবাগিং অনুশীলন: ৪০০ মিলিসেকেন্ডের স্পাইক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The rule row: api, dns, ttl, tcp, tls, rtt, curl, alive — each rule rides on these terms.',
        bn: 'নিয়ম-সারি: api, dns, ttl, tcp, tls, rtt, curl, alive — প্রতি নিয়ম এই শব্দেরই উপরে চড়ে।'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Measuring localhost and concluding the network is fast. On localhost RTT ≈ 0 ms, so every protocol treaty is free. Test from real geography, with real cold caches.',
        bn: 'localhost-এ মেপে সিদ্ধান্ত নেওয়া যে নেটওয়ার্ক দ্রুত। localhost-এ RTT ≈ 0 ms, ফলে প্রতি প্রোটোকল চুক্তিই ফ্রি। আসল ভূগোল থেকে, সত্যিকারের ঠাণ্ডা ক্যাশ নিয়ে পরখ করুন।'
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'REAL WORLD',
        bn: 'বাস্তব জগত'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Everything on this page IS what Cloudflare, Akamai and fastly sell: fewer RTT per user.',
          bn: 'এই পাতার সবকিছুই Cloudflare, Akamai আর fastly বিক্রি করে: ব্যবহারকারীপ্রতি কম RTT।'
        },
        {
          en: 'DevTools Network tab’s Waterfall is this ledger, colored. Learn its five bars once (Blocked/DNS/Connect/SSL/TTFB).',
          bn: 'DevTools নেটওয়ার্ক ট্যাবের Waterfall রঙিন এই খাতা। পাঁচ বার একবার শিখুন (Blocked/DNS/Connect/SSL/TTFB)।'
        },
        {
          en: 'The same ledger explains microservice timeouts: every internal hop spends from the same RTT budget.',
          bn: 'একই খাতা মাইক্রোসার্ভিস টাইমআউটও ব্যাখ্যা করে: প্রতি অভ্যন্তরীণ হপ খরচ করে একই RTT বাজেট থেকে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'NEXT: the language of HTTP',
        bn: 'পরবর্তী: HTTP-এর ভাষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Once the reliable encrypted transport pipe is established through DNS, TCP, and TLS, application layer protocols take over. The next lesson explores HTTP mechanics, request headers, status codes, and connection multiplexing.',
        bn: 'ডিএনএস, টিসিপি এবং টিএলএস এর মাধ্যমে যখন একটি নির্ভরযোগ্য এনক্রিপ্টেড সংযোগ তৈরি হয়, তখন অ্যাপ্লিকেশন লেয়ারের কাজ শুরু হয়। পরবর্তী পাঠে এইচটিটিপি প্রোটোকল, রিকোয়েস্ট হেডার, স্ট্যাটাস কোড এবং কানেকশন মাল্টিপ্লেক্সিং বিস্তারিত আলোচনা করা হবে।'
      }
    }
  ],
  nextLesson: {
    slug: 'http-deep',
    tech: 'networking',
    title: { en: 'HTTP Deep — Once the pipe exists, HTTP is the spoken language on top', bn: 'পাইপ তৈরি হলে HTTP তার ওপরের কথ্য ভাষা: মেথড হলো ক্রিয়া, স্ট্যাটাস' }
  },
  exercises: [
    {
      id: 'net-journey-ex1',
      kind: 'mcq',
      topic: 'rtt budget',
      question: {
        en: 'Dhaka → Virginia, cold everything, TLS 1.2, HTTP/1.1. Round trips to first byte?',
        bn: 'ঢাকা → ভার্জিনিয়া, সব ঠাণ্ডা, TLS 1.2, HTTP/1.1। প্রথম বাইট পর্যন্ত ক’টি রাউন্ড-ট্রিপ?'
      },
      options: [
        {
          en: '1 — the request itself',
          bn: '১ — রিকোয়েস্টটি নিজেই'
        },
        {
          en: '~4: DNS(1) + TCP(1) + TLS(2) — then the request(+1) is ~5 total',
          bn: '~৪টি: DNS(১) + TCP(১) + TLS(২) — তারপর রিকোয়েস্ট(+১) সহ মোট ~৫টি'
        },
        {
          en: '10+ round trips',
          bn: '১০+ এর বেশি রাউন্ড-ট্রিপ'
        },
        {
          en: '0 — packets travel instantaneously',
          bn: '০ — প্যাকেট সাথে সাথে কোনো সময় না নিয়ে পৌঁছায়'
        }
      ],
      answer: 1,
      hint: {
        en: 'Count outbound+inbound pairs BEFORE the GET can leave.',
        bn: 'GET বেরোনোর আগে যাওয়া+আসা জোড়া গুনুন।'
      },
      explanation: {
        en: 'Cold DNS ≈1, TCP handshake =1, TLS 1.2 =2, then request/response =1. Budget in RTT, not in vibes.',
        bn: 'ঠাণ্ডা DNS ≈1, TCP হ্যান্ডশেক =1, TLS 1.2 =2, তারপর রিকোয়েস্ট/রেসপন্স =1। লাগুক RTT-এ বাজেট, অনুভূতিতে নয়।'
      }
    },
    {
      id: 'net-journey-ex2',
      kind: 'mcq',
      topic: 'dns',
      question: {
        en: 'The FIRST place a DNS lookup looks for the answer is…',
        bn: 'DNS লুকআপ সবার আগে উত্তর খোঁজে…'
      },
      options: [
        {
          en: 'The root servers',
          bn: 'রুট সার্ভারে'
        },
        {
          en: 'Local caches: browser, then OS, then resolver',
          bn: 'স্থানীয় ক্যাশে: ব্রাউজার, তারপর OS, তারপর রিজলভার'
        },
        {
          en: 'The authoritative nameserver',
          bn: 'অথরিটেটিভ নেমসার্ভারে'
        }
      ],
      answer: 1,
      hint: {
        en: 'The whole design exists to make the hierarchy a rare trip.',
        bn: 'শ্রেণিবিন্যাস-ভ্রমণ বিরল করতেই পুরো নকশা।'
      },
      explanation: {
        en: 'Caches short-circuit the journey. Root/TLD/authoritative are the fallback path, not the daily route.',
        bn: 'ক্যাশ যাত্রা বন্ধ করে দেয়। রুট/TLD/অথরিটেটিভ হলো বিকল্প পথ, দৈনন্দিন রুট নয়।'
      }
    },
    {
      id: 'net-journey-ex3',
      kind: 'mcq',
      topic: 'cdn',
      question: {
        en: 'A CDN edge cache earns its money by…',
        bn: 'CDN এজ ক্যাশ উপার্জন করে…'
      },
      options: [
        {
          en: 'Making bandwidth cheaper',
          bn: 'ব্যান্ডউইথ সস্তা করে'
        },
        {
          en: 'Replacing cross-ocean RTTs with a nearby memory read',
          bn: 'সাগর-পেরোনো RTT বদলে নিকটবর্তী স্মৃতি-পঠন দিয়ে'
        },
        {
          en: 'Compressing images',
          bn: 'ছবি সংকুচিত করে'
        }
      ],
      answer: 1,
      hint: {
        en: 'It is a geography treaty, not a compression tool.',
        bn: 'এটি ভূগোলের চুক্তিপত্র, কম্প্রেশন সরঞ্জাম নয়।'
      },
      explanation: {
        en: 'Light does not negotiate. The CDN moves content to the user’s side of physics.',
        bn: 'আলো দর কষাকষি করে না। CDN কনটেন্ট নিয়ে আসে পদার্থবিদ্যার ব্যবহারকারী-পাড়ে।'
      }
    },
    {
      id: 'net-journey-ex4',
      kind: 'fill',
      topic: 'tcp',
      question: {
        en: 'The three packets that establish a TCP connection: SYN, SYN-ACK, ____',
        bn: 'TCP কানেকশন প্রতিষ্ঠাকারী তিন প্যাকেট: SYN, SYN-ACK, ____'
      },
      answer: 'ACK',
      accept: [
        'ACK',
        'ack'
      ],
      hint: {
        en: 'The client’s final confirmation, completing one RTT.',
        bn: 'ক্লায়েন্টের শেষ নিশ্চিতকরণ — এক RTT পূর্ণ হয়।'
      },
      explanation: {
        en: 'SYN → SYN-ACK → ACK: both sides agree on sequence numbers. One full round trip spent before any data.',
        bn: 'SYN → SYN-ACK → ACK: দুই পক্ষ সিকোয়েন্স নাম্বারে ঐক্যমত। ডেটার আগেই খরচ এক পূর্ণ রাউন্ড-ট্রিপ।'
      },
      solution: 'ACK'
    }
  ],
  quiz: {
    id: 'net-journey-quiz',
    title: {
      en: 'Quiz: the ledger of hops',
      bn: 'কুইজ: হপের খাতা'
    },
    questions: [
      {
        id: 'net-journey-q1',
        kind: 'mcq',
        topic: 'order',
        question: {
          en: 'The correct ORDER of a cold, secure web request is…',
          bn: 'ঠাণ্ডা, সুরক্ষিত ওয়েব রিকোয়েস্টের সঠিক ক্রম…'
        },
        options: [
          {
            en: 'TLS → TCP → DNS → HTTP',
            bn: 'TLS → TCP → DNS → HTTP'
          },
          {
            en: 'DNS → TCP → TLS → HTTP',
            bn: 'DNS → TCP → TLS → HTTP'
          },
          {
            en: 'HTTP → DNS → TLS → TCP',
            bn: 'HTTP → DNS → TLS → TCP'
          }
        ],
        answer: 1,
        hint: {
          en: 'You need the address before you knock; the pipe before you whisper; the whisper before the question.',
          bn: 'ঠকঠকার আগে ঠিকানা চাই; ফিসফিসের আগে পাইপ; প্রশ্নের আগে ফিসফিস।'
        },
        explanation: {
          en: 'Name → connection → encryption → application. Each layer can only borrow what the previous one built.',
          bn: 'নাম → সংযোগ → এনক্রিপশন → অ্যাপ্লিকেশন। প্রতি স্তর ধার করতে পারে শুধু আগেরটার বানানো জিনিস।'
        }
      },
      {
        id: 'net-journey-q2',
        kind: 'predict',
        topic: 'keep-alive',
        question: {
          en: 'Second request to the SAME host over keep-alive TLS 1.3 typically costs…',
          bn: 'keep-alive TLS 1.3-এ একই হোস্টে দ্বিতীয় রিকোয়েস্টের খরচ সাধারণত…'
        },
        options: [
          {
            en: 'The full 5 RTT again',
            bn: 'আবার পুরো 5 RTT'
          },
          {
            en: '~1 RTT — connection AND session already exist',
            bn: '~1 RTT — কানেকশন আর সেশন দুটোই থাকেই'
          },
          {
            en: 'Zero — it is free',
            bn: 'শূন্য — ফ্রি'
          }
        ],
        answer: 1,
        hint: {
          en: 'The treaties persist until torn down; only the question-and-answer round remains.',
          bn: 'চুক্তিপত্র ভাঙা না হলে টিকে থাকে; থাকে শুধু প্রশ্নোত্তর চক্র।'
        },
        explanation: {
          en: 'Keep-alive amortizes the whole overture. Subsequent requests pay only request/response.',
          bn: 'keep-alive পুরো ভূমিকা অমসৃণ করে পরে। পরবর্তী রিকোয়েস্টে খরচ কেবল রিকোয়েস্ট/রেসপন্স।'
        }
      },
      {
        id: 'net-journey-q3',
        kind: 'mcq',
        topic: 'latency-vs-bandwidth',
        question: {
          en: 'A 10× bandwidth upgrade will BARELY change page load when…',
          bn: '১০ গুণ ব্যান্ডউইথ আপগ্রেডে পেজ লোড প্রায় বদলাবে না যখন…'
        },
        options: [
          {
            en: 'Files are huge',
            bn: 'ফাইল বিশাল'
          },
          {
            en: 'The bottleneck is RTT count × distance, not bytes',
            bn: 'বটলনেক বাইট নয়, RTT সংখ্যা × দূরত্ব'
          },
          {
            en: 'The CPU is slow',
            bn: 'CPU ধীর'
          }
        ],
        answer: 1,
        hint: {
          en: 'Wide road vs long road — widening helps only if parcels were jammed.',
          bn: 'প্রশস্ত রাস্তা বনাম লম্বা রাস্তা — প্রশস্তকরণ কাজে লাগে কেবল পার্সেল আটকে থাকলে।'
        },
        explanation: {
          en: 'If the waterfall is mostly BARS OF WAITING (DNS/SSL/TTFB), buy fewer round trips, not wider pipes.',
          bn: 'ওয়াটারফল যদি মূলত অপেক্ষার বার হয় (DNS/SSL/TTFB), কিনুন কম রাউন্ড-ট্রিপ, চওড়া পাইপ নয়।'
        }
      },
      {
        id: 'net-journey-q4',
        kind: 'mcq',
        topic: 'debug',
        question: {
          en: 'First request after idle = slow; subsequent = fast. Most likely…',
          bn: 'বিরতির পর প্রথম রিকোয়েস্ট = ধীর; পরেরগুলো = দ্রুত। সম্ভাব্যতম কারণ…'
        },
        options: [
          {
            en: 'The database is overloaded',
            bn: 'ডেটাবেস চাপে আছে'
          },
          {
            en: 'Connection cycling: TLS/TCP rebuild + possibly cold DNS after TTL expiry',
            bn: 'কানেকশন সাইক্লিং: TLS/TCP পুনর্নির্মাণ হয়তো TTL শেষে ঠাণ্ডা DNS-ও'
          },
          {
            en: 'Browser cache poisoning',
            bn: 'ব্রাউজার ক্যাশ পয়জনিং'
          }
        ],
        answer: 1,
        hint: {
          en: 'Slowness that SELF-HEALS on retry usually lives in the handshake budget, not the logic.',
          bn: 'রিট্রাইতে নিজে সারে যাওয়া ধীরতা সাধারণত থাকে হ্যান্ডশেক বাজেটে, লজিকে নয়।'
        },
        explanation: {
          en: 'Idle timeouts tear down the treaties; the first request re-pays them. Curl timing splits prove it.',
          bn: 'আইডল টাইমআউট চুক্তিপত্র ভেঙে দেয়; প্রথম রিকোয়েস্ট সেগুলো ফের পরিশোধ করে। Curl টাইমিং-বিভাজন প্রমাণ দেয়।'
        }
      }
    ]
  },
  next: {
    slug: 'http-deep',
    title: {
      en: 'HTTP Deep: speech on the wire',
      bn: 'HTTP গভীরে: তারের ওপরের ভাষা'
    }
  }
};
