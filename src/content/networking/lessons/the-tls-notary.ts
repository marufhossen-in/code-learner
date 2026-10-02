import type { Lesson } from '../../../lib/types';

export const theTlsNotaryLesson: Lesson = {
  slug: 'the-tls-notary',
  tech: 'networking',
  title: {
    en: 'TLS Cryptographic Handshakes — Asymmetric Negotiation and Symmetric Ciphers',
    bn: 'টিএলএস ক্রিপ্টোগ্রাফিক হ্যান্ডশেক: অ্যাসিম্যাট্রিক আলোচনা ও সিমেট্রিক সাইফার'
  },
  summary: {
    en: 'Every byte sent across the open public Internet is exposed to wiretapping, tampering, and impersonation unless protected by Transport Layer Security (TLS). This lesson dissects modern TLS architecture: how asymmetric public-key cryptography negotiates shared symmetric keys, why Ephemeral Diffie-Hellman guarantees Perfect Forward Secrecy, and how TLS 1.3 collapsed the legacy 2-round-trip handshake into a single RTT while deprecating weak ciphers. You will trace X.509 certificate chains from root CAs to leaf domains, diagnose missing intermediate certificate errors, evaluate zero-RTT session resumption alongside replay attack vulnerabilities, and implement Mutual TLS (mTLS) for zero-trust microservice meshes.',
    bn: 'টিএলএস প্রোটোকল ছাড়া ইন্টারনেটে প্রেরিত প্রতিটি বাইট হ্যাকিং, নজরদারি এবং বিকৃতির ঝুঁকিতে থাকে। এই পাঠে আধুনিক টিএলএস আর্কিটেকচার বিশদভাবে বিশ্লেষণ করা হয়েছে: কীভাবে অ্যাসিম্যাট্রিক ক্রিপ্টোগ্রাফি দিয়ে দ্রুতগতির সিমেট্রিক সেশন কি তৈরি হয়, কেন এফিমেরাল ডিফি-হেলম্যান পারফেক্ট ফরোয়ার্ড সিক্রেসি নিশ্চিত করে এবং কীভাবে টিএলএস ১.৩ পুরনো ২-রাউন্ড-ট্রিপের হ্যান্ডশেককে কমিয়ে মাত্র ১ RTT তে নামিয়ে এনেছে। এখানে রুট ও ইন্টারমিডিয়েট সার্টিফিকেট চেইন, মিসিং ইন্টারমিডিয়েট এরর, জিরো-আরটিটি (0-RTT) রিপ্লে আক্রমণ ঝুঁকি এবং জিরো-ট্রাস্ট মাইক্রোসার্ভিসে মিউচুয়াল টিএলএস (mTLS) বাস্তবায়ন বিস্তারিতভাবে তুলে ধরা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-edge-cartel',
    tech: 'networking',
    title: {
      en: 'CDNs and Edge Networks — Anycast Routing, Caching, and DDoS Defense',
      bn: 'সিডিএন এবং এজ নেটওয়ার্ক: অ্যানিকাস্ট রাউটিং, ক্যাশিং ও ডিডস প্রতিরোধ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'tls-cryptographic-trio',
      text: {
        en: 'The Three Pillars of Transport Layer Security',
        bn: 'ট্রান্সপোর্ট লেয়ার সিকিউরিটির তিনটি মূল ভিত্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you transmit sensitive financial or personal credentials across the public Internet, TLS ensures that no intermediate router or adversary can eavesdrop, modify, or forge your messages. TLS achieves this through three mathematical pillars: Confidentiality, Integrity, and Authentication.',
        bn: 'যখন আপনি ইন্টারনেটের ওপর দিয়ে স্পর্শকাতর অর্থনৈতিক বা ব্যক্তিগত তথ্য আদান-প্রদান করেন, তখন টিএলএস নিশ্চিত করে যে কোনো মধ্যবর্তী রাউটার বা হ্যাকার আপনার তথ্য পড়তে, পরিবর্তন করতে বা নকল করতে পারবে না। টিএলএস তিনটি গাণিতিক ভিত্তির মাধ্যমে এই নিরাপত্তা অর্জন করে: গোপনীয়তা, অখণ্ডতা এবং প্রমাণীকরণ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Asymmetric public-key cryptography (such as RSA or Elliptic Curve Diffie-Hellman) is computationally heavy and reserved strictly for initial identity verification and key agreement. Once a shared secret key is computed, bulk communication switches instantly to hardware-accelerated symmetric ciphers like AES-GCM or ChaCha20-Poly1305.',
        bn: 'অ্যাসিম্যাট্রিক পাবলিক-কি ক্রিপ্টোগ্রাফি (যেমন RSA বা উপবৃত্তাকার কার্ভ ডিফি-হেলম্যান) অত্যন্ত জটিল হওয়ায় এটি শুধুমাত্র প্রাথমিক পরিচয় যাচাই এবং গোপন কি নির্ধারণের কাজে ব্যবহৃত হয়। গোপন কি নির্ধারণের পর বাকি সমস্ত ডাটা অত্যন্ত দ্রুতগতির হার্ডওয়্যার-ত্বরান্বিত সিমেট্রিক সাইফার (যেমন AES-GCM বা ChaCha20) দিয়ে এনক্রিপ্ট করে পাঠানো হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'symmetric-vs-asymmetric',
          def: {
            en: 'Asymmetric cryptography securely negotiates a secret key, while symmetric ciphers encrypt all bulk data rapidly.',
            bn: 'অ্যাসিম্যাট্রিক ক্রিপ্টোগ্রাফি গোপন কি বিনিময় করে, আর দ্রুতগতির সিমেট্রিক সাইফার সমস্ত ডাটা এনক্রিপ্ট করে।'
          }
        },
        {
          term: 'perfect-forward-secrecy',
          def: {
            en: 'A security property ensuring that future compromise of a server’s private key cannot decrypt past recorded sessions.',
            bn: 'এমন একটি নিরাপত্তা বৈশিষ্ট্য যা ভবিষ্যতে সার্ভারের প্রাইভেট কি ফাঁস হলেও অতীতের কোনো রেকর্ডেড ডাটা ডিক্রিপ্ট হতে দেয় না।'
          }
        },
        {
          term: 'certificate-chain',
          def: {
            en: 'A hierarchical chain of X.509 digital certificates linking an end-entity domain to a trusted root authority.',
            bn: 'ডিজিটাল সার্টিফিকেটের ক্রমানুসারিক স্তর যা ডোমেনের সত্যতাকে অপারেটিং সিস্টেমের বিশ্বস্ত রুট অথরিটির সাথে সংযুক্ত করে।'
          }
        },
        {
          term: 'mutual-tls',
          def: {
            en: 'A bidirectional authentication protocol where both the client and server present X.509 certificates to each other.',
            bn: 'একটি দ্বিমুখী প্রমাণীকরণ প্রোটোকল যেখানে ক্লায়েন্ট ও সার্ভার উভয়ই পরস্পরের কাছে ডিজিটাল সার্টিফিকেট পেশ করে পরিচয় নিশ্চিত করে।'
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
      id: 'tls12-vs-tls13-table',
      text: {
        en: 'Comparison Matrix: TLS 1.2 vs TLS 1.3 Architectural Evolution',
        bn: 'তুলনামূলক ম্যাট্রিক্স: টিএলএস ১.২ বনাম টিএলএস ১.৩ এর স্থাপত্যিক বিবর্তন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TLS 1.3 delivered a massive security and performance leap by eliminating obsolete ciphers and halving handshake latency.',
        bn: 'টিএলএস ১.৩ পুরনো অনিরাপদ সাইফারগুলো পুরোপুরি বর্জন করে এবং হ্যান্ডশেক সময় অর্ধেকে নামিয়ে এনে এক যুগান্তকারী পরিবর্তন এনেছে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Security / Performance Dimension', bn: 'নিরাপত্তা ও পারফরম্যান্স দিক' },
        { en: 'Legacy TLS 1.2 Protocol', bn: 'পুরনো টিএলএস ১.২ প্রোটোকল' },
        { en: 'Modern TLS 1.3 Standard', bn: 'আধুনিক টিএলএস ১.৩ স্ট্যান্ডার্ড' },
        { en: 'Production Impact', bn: 'প্রোডাকশনে বাস্তব ফলাফল' }
      ],
      rows: [
        [
          { en: 'Handshake Latency Round Trips', bn: 'হ্যান্ডশেক রাউন্ড-ট্রিপের সময়' },
          { en: '2 full round trips (2 RTT) before first data byte', bn: 'প্রথম ডাটা বাইটের পূর্বে ২ পূর্ণ রাউন্ড-ট্রিপ (2 RTT)' },
          { en: '1 round trip (1 RTT) via speculative key shares', bn: 'কি-শেয়ার একসাথে পাঠানোয় মাত্র ১ রাউন্ড-ট্রিপ (1 RTT)' },
          { en: 'Cuts initial connection establishment time by 50%', bn: 'কানেকশন শুরুর সময় ৫০ শতাংশ কমিয়ে আনে' }
        ],
        [
          { en: 'Key Exchange Cryptography', bn: 'কি বিনিময় অ্যালগরিদম' },
          { en: 'Permitted RSA key transport without Forward Secrecy', bn: 'ফরোয়ার্ড সিক্রেসিহীন সাধারণ RSA সমর্থন করত' },
          { en: 'Enforces Ephemeral Diffie-Hellman (ECDHE) exclusively', bn: 'বাধ্যতামূলকভাবে কেবল এফিমেরাল ডিফি-হেলম্যান (ECDHE) চলে' },
          { en: 'Guarantees Perfect Forward Secrecy against retrospective decryption', bn: 'ভবিষ্যতে প্রাইভেট কি ফাঁস হলেও পুরনো ডাটা সুরক্ষিত থাকে' }
        ],
        [
          { en: 'Session Resumption Speed', bn: 'সেশন পুনরুজ্জীবনের গতি' },
          { en: 'Requires 1 RTT via Session Tickets', bn: 'সেশন টিকিটের মাধ্যমে ১ RTT সময় লাগে' },
          { en: 'Supports 0-RTT Early Data sending in first flight', bn: 'প্রথম প্যাকেটেই 0-RTT আর্লি ডাটা পাঠানো সমর্থন করে' },
          { en: 'Near-instant reconnection for repeat web visits', bn: 'পূর্বের ব্যবহারকারীদের জন্য তাৎক্ষণিক সংযোগ সক্ষম করে' }
        ],
        [
          { en: 'Vulnerable Legacy Ciphers', bn: 'দুর্বল পুরনো সাইফার' },
          { en: 'Permitted RC4, 3DES, CBC mode ciphers, SHA-1', bn: 'RC4, 3DES, CBC সাইফার ও SHA-1 অনুমতি দিত' },
          { en: 'Completely removed all vulnerable and slow algorithms', bn: 'সমস্ত দুর্বল ও পুরনো অ্যালগরিদম সম্পূর্ণ বর্জন করেছে' },
          { en: 'Permanently closes POODLE, BEAST, and Lucky13 exploits', bn: 'কুখ্যাত POODLE ও BEAST সাইবার আক্রমণ চিরতরে নির্মূল করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-tls-latency-code',
      text: {
        en: 'Executable TLS Handshake Latency and Optimization Simulation',
        bn: 'টিএলএস হ্যান্ডশেক লেটেন্সি এবং পারফরম্যান্স সাশ্রয়ের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the network latency cost of establishing TLS 1.2 versus TLS 1.3 connections over a typical cross-continental route with a 140ms RTT.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১৪০ মিলিসেকেন্ড RTT বিশিষ্ট একটি আন্তর্জাতিক রুটে টিএলএস ১.২ বনাম টিএলএস ১.৩ হ্যান্ডশেক সম্পন্ন করার নেটওয়ার্ক লেটেন্সি এবং সময় সাশ্রয় গণনা করে।'
      }
    },
    {
      type: 'code',
      code: `// Calculating TLS 1.2 vs 1.3 Handshake Round Trips and Latency
const rttMs = 140;

const tls12Rtt = 2; // 2 RTT for TLS 1.2
const tls13Rtt = 1; // 1 RTT for TLS 1.3

const tls12Latency = tls12Rtt * rttMs;
const tls13Latency = tls13Rtt * rttMs;
const latencySaved = tls12Latency - tls13Latency;

console.log('TLS 1.2 Handshake Latency ms =', tls12Latency);
console.log('TLS 1.3 Handshake Latency ms =', tls13Latency);
console.log('Latency Saved by TLS 1.3 ms =', latencySaved);

// prints: TLS 1.2 Handshake Latency ms = 280
// prints: TLS 1.3 Handshake Latency ms = 140
// prints: Latency Saved by TLS 1.3 ms = 140`
    },
    {
      type: 'heading',
      id: 'mtls-and-zero-rtt-security',
      text: {
        en: 'Zero-RTT Replay Vulnerabilities and Mutual TLS (mTLS)',
        bn: 'জিরো-আরটিটি রিপ্লে ঝুঁকি এবং মিউচুয়াল টিএলএস (mTLS)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While TLS 1.3 0-RTT allows clients to transmit application data in the very first network flight, it introduces a severe security risk: Replay Attacks. Because early data lacks fresh cryptographic entropy, an attacker intercepting the packet can retransmit it to duplicate transactions. Consequently, production applications must restrict 0-RTT strictly to safe, idempotent GET requests. For microservice architectures, enterprise systems deploy Mutual TLS (mTLS): rather than only the client verifying the server, both services present X.509 certificates to achieve cryptographically verified zero-trust service identity.',
        bn: 'যদিও টিএলএস ১.৩ এর 0-RTT ক্লায়েন্টকে প্রথম প্যাকেটেই অ্যাপ্লিকেশন ডাটা পাঠানোর সুযোগ দেয়, এটি একটি মারাত্মক নিরাপত্তা ঝুঁকি তৈরি করে: রিপ্লে আক্রমণ (Replay Attack)। যেহেতু আর্লি ডাটায় নতুন ক্রিপ্টোগ্রাফিক সতেজতা থাকে না, তাই হ্যাকাররা মাঝপথে প্যাকেটটি ধরে পুনরায় পাঠিয়ে ট্রানজ্যাকশন ডুপ্লিকেট করতে পারে। এই কারণে প্রোডাকশন সিস্টেমে 0-RTT শুধুমাত্র নিরাপদ ও আইডেমপোটেন্ট GET রিকোয়েস্টে সীমিত রাখতে হয়। অন্যদিকে মাইক্রোসার্ভিস আর্কিটেকচারে এন্টারপ্রাইজ সিস্টেমগুলো মিউচুয়াল টিএলএস (mTLS) ব্যবহার করে: শুধু ক্লায়েন্টই নয়, উভয় সার্ভিসই পরস্পরের কাছে ডিজিটাল সার্টিফিকেট দেখিয়ে সম্পূর্ণ জিরো-ট্রাস্ট নিরাপত্তা নিশ্চিত করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Asymmetric to symmetric: Asymmetric keys negotiate the session; symmetric AEAD ciphers encrypt high-volume data.',
          bn: 'অ্যাসিম্যাট্রিক থেকে সিমেট্রিক: অ্যাসিম্যাট্রিক কি সেশন শুরু করে; সিমেট্রিক সাইফার দ্রুত সব ডাটা এনক্রিপ্ট করে।'
        },
        {
          en: 'TLS 1.3 cuts latency: 1-RTT handshake halves connection overhead and strips all vulnerable legacy ciphers.',
          bn: 'টিএলএস ১.৩ এর ক্ষিপ্রতা: ১ RTT হ্যান্ডশেক বিলম্ব অর্ধেক কমায় এবং সমস্ত দুর্বল পুরনো সাইফার বর্জন করে।'
        },
        {
          en: 'Ephemeral keys protect past data: ECDHE guarantees Perfect Forward Secrecy even if private keys leak years later.',
          bn: 'এফিমেরাল কি-এর সুরক্ষা: ECDHE অতীতে রেকর্ড করা ডাটা সুরক্ষিত রাখে, এমনকি ভবিষ্যতে প্রাইভেট কি চুরি হলেও।'
        },
        {
          en: 'mTLS enforces zero trust: Mutual TLS authenticates both client and server identities across internal microservice links.',
          bn: 'mTLS এর জিরো-ট্রাস্ট: মিউচুয়াল টিএলএস অভ্যন্তরীণ মাইক্রোসার্ভিসগুলোর মাঝে ক্লায়েন্ট ও সার্ভার উভয়ের পরিচয় যাচাই করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tls-notary-ex1',
      kind: 'mcq',
      topic: 'tls-perfect-forward-secrecy',
      question: {
        en: 'What fundamental security guarantee does Perfect Forward Secrecy (PFS) provide in TLS connections?',
        bn: 'টিএলএস সংযোগে পারফেক্ট ফরোয়ার্ড সিক্রেসি (PFS) কোন মৌলিক নিরাপত্তা নিশ্চয়তা প্রদান করে?'
      },
      options: [
        {
          en: 'Even if the server’s long-term private key is compromised in the future, past recorded encrypted sessions cannot be decrypted',
          bn: 'ভবিষ্যতে সার্ভারের দীর্ঘমেয়াদী প্রাইভেট কি চুরি হয়ে গেলেও অতীতে রেকর্ড করা কোনো এনক্রিপ্টকৃত সেশন ডিক্রিপ্ট করা সম্ভব নয়'
        },
        {
          en: 'It increases internet download speed by 100 percent',
          bn: 'এটি ইন্টারনেটের ডাউনলোড স্পিড ১০০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'It makes all passwords visible in plain text on the server',
          bn: 'এটি সার্ভারে সমস্ত পাসওয়ার্ড সাধারণ টেক্সটে প্রদর্শন করে'
        },
        {
          en: 'It eliminates the need for computer operating systems',
          bn: 'এটি কম্পিউটার অপারেটিং সিস্টেমের প্রয়োজনীয়তা বাতিল করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each connection negotiates a temporary ephemeral session key that is destroyed immediately when the connection closes.',
        bn: 'প্রতিটি সংযোগে একটি সাময়িক এফিমেরাল কি তৈরি হয় যা সংযোগ শেষ হওয়ামাত্র মেমরি থেকে মুছে ফেলা হয়।'
      },
      explanation: {
        en: 'PFS generates unique ephemeral session keys (via ECDHE), ensuring that stealing the long-term server key cannot unlock past traffic.',
        bn: 'PFS প্রতিটি সেশনে স্বতন্ত্র এফিমেরাল কি ব্যবহার করায় মূল সার্ভার কি চুরি হলেও অতীতের রেকর্ড করা ট্রাফিক নিরাপদ থাকে।'
      }
    },
    {
      id: 'tls-notary-ex2',
      kind: 'mcq',
      topic: 'tls13-handshake-roundtrips',
      question: {
        en: 'How many round trips (RTT) does a full initial TLS 1.3 handshake require before the first application data byte can be transmitted?',
        bn: 'প্রথম অ্যাপ্লিকেশন ডাটা পাঠানোর পূর্বে সম্পূর্ণ নতুন একটি টিএলএস ১.৩ হ্যান্ডশেক সম্পন্ন করতে কতটি রাউন্ড-ট্রিপ (RTT) প্রয়োজন হয়?'
      },
      options: [
        {
          en: '1 RTT (compared to 2 RTT in TLS 1.2)',
          bn: '১ RTT (টিএলএস ১.২ এর ২ RTT এর তুলনায়)'
        },
        {
          en: '10 RTTs',
          bn: '১০ RTT'
        },
        {
          en: '0 RTT for cold connections without prior state',
          bn: 'পূর্ব সংযোগবিহীন নতুন কানেকশনে ০ RTT'
        },
        {
          en: '5 RTTs',
          bn: '৫ RTT'
        }
      ],
      answer: 0,
      hint: {
        en: 'TLS 1.3 speculatively sends the client’s key share inside the ClientHello message.',
        bn: 'টিএলএস ১.৩ প্রথম ClientHello মেসেজের সাথেই ক্লায়েন্টের কি-শেয়ার একবারে পাঠিয়ে দেয়।'
      },
      explanation: {
        en: 'TLS 1.3 combines cipher negotiation and key exchange into a single round trip, cutting handshake latency by half.',
        bn: 'টিএলএস ১.৩ সাইফার নির্ধারণ এবং কি বিনিময় এক ধাপে সম্পন্ন করায় হ্যান্ডশেক সময় অর্ধেক কমে ১ RTT হয়।'
      }
    },
    {
      id: 'tls-notary-ex3',
      kind: 'mcq',
      topic: 'zero-rtt-replay-threat',
      question: {
        en: 'What critical security vulnerability prevents zero-RTT early data from being safely used on non-idempotent HTTP operations (e.g. POST /transfer)?',
        bn: 'কোন মারাত্মক নিরাপত্তা ঝুঁকির কারণে নন-আইডেমপোটেন্ট এইচটিটিপি অপারেশনে (যেমন POST /transfer) zero-RTT আর্লি ডাটা ব্যবহার করা বিপজ্জনক?'
      },
      options: [
        {
          en: 'Replay Attacks: An attacker who intercepts the early data packet can retransmit it, causing the server to execute duplicate transactions',
          bn: 'রিপ্লে আক্রমণ (Replay Attack): আক্রমণকারী মাঝপথে প্যাকেটটি ধরে পুনরায় পাঠাতে পারে, যার ফলে সার্ভারে একই লেনদেন দুইবার কার্যকর হতে পারে'
        },
        {
          en: 'Zero-RTT packets delete the server database instantly',
          bn: 'জিরো-আরটিটি প্যাকেট সার্ভারের ডেটাবেস তাৎক্ষণিকভাবে মুছে ফেলে'
        },
        {
          en: 'Web browsers refuse to display websites using 0-RTT',
          bn: 'ওয়েব ব্রাউজার 0-RTT ব্যবহারকারী ওয়েবসাইট প্রদর্শনে অস্বীকৃতি জানায়'
        },
        {
          en: 'Zero-RTT only works on floppy disks',
          bn: 'জিরো-আরটিটি কেবল ফ্লপি ডিস্কে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Because early data is sent before the new handshake establishes fresh randomness, old tickets can be replayed by eavesdroppers.',
        bn: 'নতুন কোনো দৈব সংখ্যা প্রতিষ্ঠার আগেই আর্লি ডাটা পাঠানোয় পুরনো প্যাকেটটি ধরে হ্যাকাররা বারবার পাঠাতে পারে।'
      },
      explanation: {
        en: '0-RTT lacks forward secrecy and replay protection. Therefore, it must be strictly restricted to safe idempotent GET requests.',
        bn: '0-RTT তে রিপ্লে সুরক্ষা থাকে না। ফলে এটি শুধুমাত্র নিরাপদ ও অপরিবর্তনীয় GET রিকোয়েস্টেই ব্যবহার করা বৈধ।'
      }
    },
    {
      id: 'tls-notary-ex4',
      kind: 'mcq',
      topic: 'missing-intermediate-cert-error',
      question: {
        en: 'Why do clients encounter "certificate signed by unknown authority" errors even when a web server possesses a valid certificate issued by a trusted CA?',
        bn: 'সার্ভারে একটি বিশ্বস্ত সিএ দ্বারা ইস্যু করা বৈধ সার্টিফিকেট থাকা সত্ত্বেও ক্লায়েন্টরা কেন প্রায়ই "certificate signed by unknown authority" ত্রুটি পায়?'
      },
      options: [
        {
          en: 'The server administrator forgot to bundle the Intermediate CA certificates with the leaf certificate, breaking the verification chain to the Root CA',
          bn: 'সার্ভার অ্যাডমিনিস্ট্রেটর লিফ সার্টিফিকেটের সাথে ইন্টারমিডিয়েট সিএ সার্টিফিকেট যুক্ত করতে ভুলে গেছেন, যা রুট সিএ পর্যন্ত চেইন ভেঙে দিয়েছে'
        },
        {
          en: 'Because the website did not pay an internet tax',
          bn: 'কারণ ওয়েবসাইটটি কোনো ইন্টারনেট ট্যাক্স পরিশোধ করেনি'
        },
        {
          en: 'Because the server RAM was upgraded to 64 gigabytes',
          bn: 'কারণ সার্ভারের র‍্যাম ৬৪ গিগাবাইটে উন্নীত করা হয়েছে'
        },
        {
          en: 'Because TLS only works when the computer is plugged into Ethernet',
          bn: 'কারণ কেবল ইথারনেট তার লাগানো থাকলেই কেবল টিএলএস কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Browsers store Root CAs, not intermediate CAs. The web server must provide the intermediate certificates in its bundle.',
        bn: 'ব্রাউজারে রুট সিএ থাকে, ইন্টারমিডিয়েট থাকে না। তাই ওয়েব সার্ভারকে অবশ্যই ইন্টারমিডিয়েট সার্টিফিকেট বান্ডিল করে পাঠাতে হয়।'
      },
      explanation: {
        en: 'Without intermediate certificates, clients cannot trace the chain from leaf to root, failing cryptographic verification.',
        bn: 'ইন্টারমিডিয়েট সার্টিফিকেট ছাড়া ক্লায়েন্ট লিফ থেকে রুট পর্যন্ত চেইন মেলাতে পারে না, ফলে নিরাপত্তা ত্রুটি দেখা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-tls-notary-quiz',
    title: {
      en: 'TLS Cryptographic Handshake Quiz',
      bn: 'টিএলএস ক্রিপ্টোগ্রাফিক হ্যান্ডশেক কুইজ'
    },
    questions: [
      {
        id: 'tls-q1',
        kind: 'mcq',
        topic: 'mtls-zero-trust-role',
        question: {
          en: 'How does Mutual TLS (mTLS) fundamentally differ from standard public HTTPS in microservice architectures?',
          bn: 'মাইক্রোসার্ভিস আর্কিটেকচারে সাধারণ পাবলিক এইচটিটিপিএস এর তুলনায় মিউচুয়াল টিএলএস (mTLS) কীভাবে মৌলিকভাবে আলাদা?'
        },
        options: [
          {
            en: 'In mTLS, both client and server authenticate each other by exchanging X.509 certificates, enforcing zero-trust identity between microservices',
            bn: 'mTLS এ ক্লায়েন্ট ও সার্ভার উভয়ই X.509 সার্টিফিকেট বিনিময়ের মাধ্যমে পরস্পরের পরিচয় যাচাই করে জিরো-ট্রাস্ট নিরাপত্তা নিশ্চিত করে'
          },
          {
            en: 'mTLS runs without using any computer CPU cycles',
            bn: 'mTLS কোনো সিপিইউ ক্ষমতা খরচ না করেই চলে'
          },
          {
            en: 'In mTLS, all data is converted into audio recordings',
            bn: 'mTLS এ সমস্ত ডাটা অডিও রেকর্ডিংয়ে রূপান্তরিত হয়'
          },
          {
            en: 'Standard HTTPS only works on mobile phones, while mTLS is for desktop computers',
            bn: 'এইচটিটিপিএস শুধু ফোনে চলে আর mTLS ডেস্কটপ কম্পিউটারের জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'In standard HTTPS, only the server presents a certificate. In mTLS, both peers authenticate cryptographically.',
          bn: 'সাধারণ এইচটিটিপিএসে শুধু সার্ভার পরিচয় দেয়। mTLS এ উভয় পক্ষই ডিজিটাল সার্টিফিকেট দিয়ে নিজেদের পরিচয় নিশ্চিত করে।'
        },
        explanation: {
          en: 'mTLS provides bidirectional authentication, preventing unauthorized services from communicating in a service mesh.',
          bn: 'mTLS দ্বিমুখী প্রমাণীকরণ নিশ্চিত করে কোনো অননুমোদিত সার্ভিসকে ইন্টারনাল নেটওয়ার্কে প্রবেশ করতে দেয় না।'
        }
      },
      {
        id: 'tls-q2',
        kind: 'mcq',
        topic: 'sni-extension-purpose',
        question: {
          en: 'What architectural role does the Server Name Indication (SNI) extension serve during the TLS ClientHello?',
          bn: 'টিএলএস ClientHello এর সময় সার্ভার নেম ইন্ডিকেশন (SNI) এক্সটেনশনটি কোন গুরুত্বপূর্ণ ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It indicates the specific hostname the client wishes to connect to, allowing a single IP address to host multiple virtual HTTPS domains with distinct certificates',
            bn: 'এটি ক্লায়েন্ট কোন ডোমেনে ঢুকতে চায় তা নির্দেশ করে, ফলে একটিমাত্র আইপিতে বিভিন্ন সার্টিফিকেটের একাধিক এইচটিটিপিএস ডোমেন হোস্ট করা সম্ভব হয়'
          },
          {
            en: 'It deletes the client’s browser cookies before connecting',
            bn: 'এটি সংযোগের পূর্বেই ব্রাউজারের সমস্ত কুকি মুছে ফেলে'
          },
          {
            en: 'It measures the physical length of the fiber optic cable',
            bn: 'এটি ফাইবার অপটিক ক্যাবলের ফিজিক্যাল দৈর্ঘ্য পরিমাপ করে'
          },
          {
            en: 'It automatically translates English websites into Bengali',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ইংরেজি ওয়েবসাইটকে বাংলায় অনুবাদ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Before SNI, the server could not know which virtual host certificate to send before TLS negotiation completed.',
          bn: 'SNI আসার আগে হ্যান্ডশেকের পূর্বে সার্ভার জানত না কোন ডোমেনের সার্টিফিকেটটি ক্লায়েন্টকে পাঠাতে হবে।'
        },
        explanation: {
          en: 'SNI passes the target hostname in the clear inside ClientHello, enabling multi-tenant virtual hosting on shared IP addresses.',
          bn: 'SNI ক্লায়েন্টের কাঙ্ক্ষিত ডোমেন নাম পাঠিয়ে একটি একক আইপিতে শত শত ভার্চুয়াল ওয়েবসাইট হোস্ট করতে সাহায্য করে।'
        }
      },
      {
        id: 'tls-q3',
        kind: 'mcq',
        topic: 'hsts-security-protection',
        question: {
          en: 'What security attack is mitigated by sending the HTTP Strict Transport Security (HSTS) header?',
          bn: 'HTTP Strict Transport Security (HSTS) হেডার পাঠানোর মাধ্যমে কোন সাইবার আক্রমণ প্রতিহত করা হয়?'
        },
        options: [
          {
            en: 'SSL Strip attacks: It instructs the browser to communicate exclusively over HTTPS and refuse insecure HTTP connections automatically',
            bn: 'এসএসএল স্ট্রিপ আক্রমণ: এটি ব্রাউজারকে সর্বদা কেবল HTTPS এ যোগাযোগ করতে নির্দেশ দেয় এবং অসুরক্ষিত HTTP সংযোগ সরাসরি প্রত্যাখ্যান করে'
          },
          {
            en: 'DDoS attacks on the server power grid',
            bn: 'সার্ভারের পাওয়ার গ্রিডে ডিডস আক্রমণ'
          },
          {
            en: 'Physical hardware overheating in data centers',
            bn: 'ডাটা সেন্টারের হার্ডওয়্যার মাত্রাতিরিক্ত গরম হয়ে যাওয়া'
          },
          {
            en: 'Malicious CSS styling changes on web pages',
            bn: 'ওয়েব পেজে ক্ষতিকর সিএসএস স্টাইল পরিবর্তন করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'HSTS prevents attackers from downgrading HTTPS connections to unencrypted HTTP at public Wi-Fi hotspots.',
          bn: 'HSTS পাবলিক ওয়াইফাইতে নিরাপদ এইচটিটিপিএস সংযোগকে অসুরক্ষিত এইচটিটিপিতে নামিয়ে আনার চক্রান্ত নস্যাৎ করে।'
        },
        explanation: {
          en: 'HSTS forces modern browsers to upgrade all HTTP URLs to HTTPS internally, closing man-in-the-middle SSL stripping.',
          bn: 'HSTS ব্রাউজারকে বাধ্য করে যেন সে নিজে থেকেই সব সংযোগে HTTPS ব্যবহার করে এবং কোনো অসুরক্ষিত সংযোগ না নেয়।'
        }
      },
      {
        id: 'tls-q4',
        kind: 'mcq',
        topic: 'certificate-transparency-purpose',
        question: {
          en: 'What is the purpose of Certificate Transparency (CT) logs in the modern Web PKI ecosystem?',
          bn: 'আধুনিক ওয়েব পিকেআই (PKI) ব্যবস্থায় সার্টিফিকেট ট্রান্সপারেন্সি (CT) লগগুলোর মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To provide publicly auditable, append-only Merkle-tree logs of all issued TLS certificates to rapidly detect rogue or unauthorized issuances',
            bn: 'ইস্যুকৃত সমস্ত টিএলএস সার্টিফিকেটের উন্মুক্ত ও পরিবর্তনহীন মের্কল-ট্রি লগ বজায় রাখা যাতে কোনো ভুয়া বা অননুমোদিত সার্টিফিকেট তৎক্ষণাৎ ধরা পড়ে'
          },
          {
            en: 'To store encrypted passwords for all internet users',
            bn: 'সমস্ত ইন্টারনেট ব্যবহারকারীর পাসওয়ার্ড এনক্রিপ্ট করে জমা রাখা'
          },
          {
            en: 'To replace web search engines like Google and Bing',
            bn: 'গুগল বা বিং এর মতো ওয়েব সার্চ ইঞ্জিনগুলোকে প্রতিস্থাপন করা'
          },
          {
            en: 'To speed up file downloads over BitTorrent',
            bn: 'বিটটরেন্টে ফাইল ডাউনলোডের গতি বৃদ্ধি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'CT logs ensure that no Certificate Authority can issue a secret certificate for your domain without the entire world knowing.',
          bn: 'CT লগ নিশ্চিত করে যে কোনো সিএ সবার অজান্তে গোপনে আপনার ডোমেনের জন্য নকল সার্টিফিকেট ইস্যু করতে পারবে না।'
        },
        explanation: {
          en: 'Certificate Transparency makes the issuance of all certificates globally observable, neutralizing hidden rogue CA minting.',
          bn: 'সার্টিফিকেট ট্রান্সপারেন্সি সমস্ত সার্টিফিকেট ইস্যুকে সর্বজনীনভাবে দৃশ্যমান করে ভুয়া সার্টিফিকেটের অপব্যবহার বন্ধ করে।'
        }
      }
    ]
  }
};
