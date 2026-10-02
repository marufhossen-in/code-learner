import type { Lesson } from '../../../lib/types';

export const theEdgeCartelLesson: Lesson = {
  slug: 'the-edge-cartel',
  tech: 'networking',
  title: {
    en: 'CDNs and Edge Networks — Anycast Routing, Caching, and DDoS Defense',
    bn: 'সিডিএন এবং এজ নেটওয়ার্ক: অ্যানিকাস্ট রাউটিং, ক্যাশিং ও ডিডস প্রতিরোধ'
  },
  summary: {
    en: 'Because data transmission across physical fiber-optic cables is bounded by the speed of light, cross-continental network latency imposes severe delays on web applications. Content Delivery Networks (CDNs) solve geographic latency by deploying distributed Points of Presence (PoPs) at the edge of the Internet near end users. By pairing BGP Anycast routing with edge TLS termination, CDNs terminate handshakes locally in under 15ms. This lesson explores Cache-Control headers including s-maxage and stale-while-revalidate, analyzes cache keys and the Vary header, and demonstrates how edge Web Application Firewalls (WAF) absorb volumetric multi-terabit DDoS attacks before traffic reaches origin servers.',
    bn: 'অপটিক্যাল ফাইবার তারে আলোর সীমিত গতির কারণে দূরবর্তী আন্তর্জাতিক সার্ভারে ডেটা পাঠাতে সবসময় উচ্চ লেটেন্সি তৈরি হয়। কনটেন্ট ডেলিভারি নেটওয়ার্ক (সিডিএন) ব্যবহারকারীদের কাছাকাছি ইন্টারনেট এক্সচেঞ্জ পয়েন্টে ডিস্ট্রিবিউটেড এজ সার্ভার (PoP) স্থাপন করে এই ভৌগোলিক দূরত্বের সমাধান করে। BGP Anycast রাউটিং ও লোকাল টিএলএস টার্মিনেশনের মাধ্যমে সিডিএন মাত্র ১৫ মিলিসেকেন্ডের ভেতর হ্যান্ডশেক সম্পন্ন করে। এই পাঠে s-maxage ও stale-while-revalidate সহ Cache-Control হেডার, ক্যাশ-কি ও Vary হেডারের ব্যবহার এবং এজ ওয়েব অ্যাপ্লিকেশন ফায়ারওয়াল (WAF) কীভাবে টেরাবিট সাইজের ডিডস আক্রমণ প্রতিহত করে তা বিশদভাবে আলোচনা করা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-load-balancer-court',
    tech: 'networking',
    title: {
      en: 'Load Balancing Architecture — Layer 4 vs Layer 7 and Scheduling Algorithms',
      bn: 'লোড ব্যালান্সিং আর্কিটেকচার: লেয়ার ৪ বনাম লেয়ার ৭ এবং শিডিউলিং অ্যালগরিদম'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'edge-physics-and-anycast',
      text: {
        en: 'The Physics of Latency and Edge Anycast Architecture',
        bn: 'লেটেন্সির বাস্তব পদার্থবিজ্ঞান এবং এজ অ্যানিকাস্ট আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you deliver web applications to a global audience, physical distance between your origin server and your users creates unavoidable network latency. Signal propagation in glass fiber is physically capped at roughly 200 kilometers per millisecond.',
        bn: 'যখন আপনি বিশ্বজুড়ে ব্যবহারকারীদের কাছে ওয়েব অ্যাপ্লিকেশন পৌঁছে দেন, তখন অরিজিন সার্ভার ও ব্যবহারকারীর মধ্যকার ভৌগোলিক দূরত্ব অনিবার্য লেটেন্সি তৈরি করে। অপটিক্যাল ফাইবার গ্লাসে আলোর সংকেত প্রতি মিলিসেকেন্ডে প্রায় ২০০ কিলোমিটার গতিতে ভ্রমণ করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A user in Dhaka accessing a server in North America pays approximately 180ms for every single network round trip. Content Delivery Networks (CDNs) solve this by placing Points of Presence (PoPs) directly inside local Internet Exchange Points (IXPs). Using BGP Anycast, client DNS queries and TCP/TLS handshakes terminate at the local edge in under 15ms, serving cached assets with near-zero latency.',
        bn: 'ঢাকা থেকে উত্তর আমেরিকার কোনো সার্ভারে ডেটা পাঠাতে প্রতিটি রাউন্ড-ট্রিপে প্রায় ১৮০ মিলিসেকেন্ড সময় লাগে। কনটেন্ট ডেলিভারি নেটওয়ার্ক (সিডিএন) ব্যবহারকারীদের কাছাকাছি লোকাল ইন্টারনেট এক্সচেঞ্জ পয়েন্টে এজ সার্ভার (PoP) স্থাপন করে এই সমাধান দেয়। BGP Anycast এর মাধ্যমে ক্লায়েন্টের ডিএনএস কুয়েরি ও টিসিপি/টিএলএস হ্যান্ডশেক স্থানীয় সার্ভারে মাত্র ১৫ মিলিসেকেন্ডে শেষ হয় এবং ক্যাশ করা ডাটা অতি দ্রুত প্রদর্শিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'point-of-presence',
          def: {
            en: 'A local edge data center located close to end users that caches static assets and terminates TCP and TLS connections.',
            bn: 'ব্যবহারকারীদের কাছাকাছি অবস্থিত স্থানীয় এজ ডাটা সেন্টার যা স্ট্যাটিক ফাইল ক্যাশ করে এবং সংযোগ সম্পন্ন করে।'
          }
        },
        {
          term: 'edge-tls-termination',
          def: {
            en: 'The practice of completing TCP and TLS handshakes at the edge PoP to reduce round-trip connection latency.',
            bn: 'দূরবর্তী অরিজিনে না গিয়ে স্থানীয় এজ সার্ভারে দ্রুত হ্যান্ডশেক সম্পন্ন করার প্রযুক্তি যা লেটেন্সি কমায়।'
          }
        },
        {
          term: 'stale-while-revalidate',
          def: {
            en: 'A caching directive that serves stale content instantly while asynchronously revalidating in the background.',
            bn: 'একটি ক্যাশ নির্দেশিকা যা মেয়াদ শেষ হওয়া ডাটা সাথে সাথে ফেরত দেয় এবং ব্যাকগ্রাউন্ডে নতুন কপি সংগ্রহ করে।'
          }
        },
        {
          term: 'web-application-firewall',
          def: {
            en: 'A security filter deployed at the edge that inspects HTTP payloads and blocks malicious web exploits.',
            bn: 'এজ স্তরে নিয়োজিত একটি নিরাপত্তা ফিল্টার যা ক্ষতিকর রিকোয়েস্ট ও হ্যাকিং আক্রমণ অরিজিন সার্ভারে পৌঁছানোর আগেই আটকে দেয়।'
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
      id: 'cache-control-directives-table',
      text: {
        en: 'Comparison Matrix of Standard Cache-Control Directives',
        bn: 'স্ট্যান্ডার্ড Cache-Control নির্দেশিকা সমূহের তুলনামূলক তালিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Configuring precise caching headers allows web applications to balance freshness with lightning-fast delivery.',
        bn: 'সঠিক ক্যাশিং হেডার কনফিগার করলে তথ্যের সতেজতা এবং দ্রুতগতির লোডিং সময়ের মধ্যে চমৎকার ভারসাম্য বজায় থাকে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Cache-Control Directive', bn: 'Cache-Control ডিরেক্টিভ' },
        { en: 'Caching Eligibility', bn: 'ক্যাশ সংরক্ষণের সুযোগ' },
        { en: 'Freshness & Revalidation Rule', bn: 'স্থায়িত্ব ও যাচাইকরণের নিয়ম' },
        { en: 'Production Best Practice Example', bn: 'প্রোডাকশনের সেরা বাস্তবায়ন' }
      ],
      rows: [
        [
          { en: 'public, max-age=31536000, immutable', bn: 'public, max-age=31536000, immutable' },
          { en: 'Browsers and all shared edge CDNs', bn: 'ব্রাউজার এবং সমস্ত শেয়ার্ড এজ সিডিএন' },
          { en: 'Fresh for 1 full year; never revalidate', bn: 'পুরো ১ বছর সতেজ; কখনো পুনরায় রিভ্যালিডেট হয় না' },
          { en: 'Hashed static assets (e.g. bundle.a8f2.js)', bn: 'হ্যাশযুক্ত স্ট্যাটিক অ্যাসেট (যেমন bundle.a8f2.js)' }
        ],
        [
          { en: 'public, s-maxage=86400, max-age=3600', bn: 'public, s-maxage=86400, max-age=3600' },
          { en: 'Shared CDNs cache 24h, browsers cache 1h', bn: 'সিডিএন ক্যাশ করে ২৪ ঘণ্টা, ব্রাউজার ১ ঘণ্টা' },
          { en: 'Differentiates edge vs browser lifetimes', bn: 'এজ ও ব্রাউজার ক্যাশের জন্য পৃথক স্থায়িত্ব' },
          { en: 'High-traffic product catalog pages and blogs', bn: 'উচ্চ ট্রাফিকের প্রোডাক্ট ক্যাটালগ ও ব্লগ পেজ' }
        ],
        [
          { en: 'private, no-cache', bn: 'private, no-cache' },
          { en: 'Client browser only; forbidden on CDNs', bn: 'কেবলমাত্র ক্লায়েন্ট ব্রাউজার; সিডিএনে নিষিদ্ধ' },
          { en: 'Must validate ETag with origin before serving', bn: 'পরিবেশনের পূর্বে অরিজিনের সাথে ETag যাচাই বাধ্যতামূলক' },
          { en: 'Personalized user profile settings dashboards', bn: 'ব্যবহারকারীর ব্যক্তিগত অ্যাকাউন্ট সেটিংস ড্যাশবোর্ড' }
        ],
        [
          { en: 'no-store', bn: 'no-store' },
          { en: 'Never cached in any storage medium', bn: 'কোনো মেমরিতেই কখনোই ক্যাশ হবে না' },
          { en: 'Immediately discarded after rendering', bn: 'রেন্ডার করার পরপরই মেমরি থেকে মুছে ফেলা হয়' },
          { en: 'Credit card checkout, banking transactions', bn: 'ক্রেডিট কার্ড পেমেন্ট, ব্যাংকিং লেনদেন' }
        ],
        [
          { en: 'stale-while-revalidate=60', bn: 'stale-while-revalidate=60' },
          { en: 'Modern browsers and edge CDN nodes', bn: 'আধুনিক ব্রাউজার এবং এজ সিডিএন নোড' },
          { en: 'Serve stale immediately while updating in background', bn: 'মেয়াদোত্তীর্ণ ডাটা সাথে সাথে দিয়ে গোপনে নতুন ডাটা আনে' },
          { en: 'Live sports scores, stock prices, news tickers', bn: 'লাইভ খেলার স্কোর, শেয়ার বাজার দর ও ব্রেকিং নিউজ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-cdn-simulation-code',
      text: {
        en: 'Executable Edge Latency and Cache Hit Ratio Simulation',
        bn: 'এজ লেটেন্সি সাশ্রয় এবং ক্যাশ হিট রেশিও গণনার বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models the performance difference between an edge cache hit at a local PoP versus an edge cache miss requiring backhaul to a distant origin server.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি স্থানীয় এজ সার্ভারে ক্যাশ হিট হওয়ার দ্রুত রেসপন্স এবং অরিজিন সার্ভার থেকে ডাটা আনার ক্যাশ মিসের লেটেন্সি পার্থক্য ও শতকরা সময় সাশ্রয় গণনা করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulating CDN Edge vs Direct Origin Latency
const originRttMs = 180; // Distance to distant Origin server
const edgeRttMs = 12;    // Local Edge Point of Presence (PoP)

function simulateFetch(isEdgeCached: boolean): number {
  if (isEdgeCached) {
    // Edge cache hit: resolved directly at local PoP
    return edgeRttMs;
  }
  // Edge cache miss: Edge fetches from origin and populates cache
  return edgeRttMs + originRttMs;
}

const hitLatency = simulateFetch(true);
const missLatency = simulateFetch(false);
const latencyImprovement = Math.round(((missLatency - hitLatency) / missLatency) * 100);

console.log('Edge Cache Hit Latency ms =', hitLatency);
console.log('Edge Cache Miss Latency ms =', missLatency);
console.log('Latency Improvement % =', latencyImprovement);

// prints: Edge Cache Hit Latency ms = 12
// prints: Edge Cache Miss Latency ms = 192
// prints: Latency Improvement % = 94`
    },
    {
      type: 'heading',
      id: 'ddos-mitigation-and-waf',
      text: {
        en: 'Edge Volumetric DDoS Mitigation and WAF Security',
        bn: 'এজ ভলিউমেট্রিক ডিডস প্রতিরোধ এবং WAF নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large-scale distributed Denial-of-Service attacks frequently exceed hundreds of gigabits or even terabits per second. Because Anycast spreads incoming traffic across hundreds of edge PoPs worldwide, a massive volumetric attack is automatically diluted into small, absorbable streams at each local data center. Concurrently, edge Web Application Firewalls (WAF) inspect incoming HTTP headers, query strings, and request bodies. Malicious SQL injections, cross-site scripting vectors, and credential-stuffing botnets are blocked at the edge before an attacker ever touches the origin database.',
        bn: 'বৃহৎ আকারের ডিস্ট্রিবিউটেড ডিনায়াল-অব-সার্ভিস (DDoS) আক্রমণ প্রায়শই শত শত গিগাবিট বা টেরাবিট অতিক্রম করে। যেহেতু Anycast বিশ্বজুড়ে শত শত এজ PoP-এর মাঝে ট্রাফিক সমানভাবে ছড়িয়ে দেয়, তাই একটি বিশাল আক্রমণ প্রতিটি স্থানীয় ডাটা সেন্টারে ছোট ছোট অংশে ভাগ হয়ে দুর্বল হয়ে পড়ে। একই সাথে এজ স্তরে থাকা ওয়েব অ্যাপ্লিকেশন ফায়ারওয়াল (WAF) প্রতিটি এইচটিটিপি হেডার ও কুয়েরি পরীক্ষা করে। এর ফলে এসকিউএল ইনজেকশন, এক্সএসএস (XSS) এবং ক্ষতিকর বটগুলো অরিজিন ডেটাবেসে পৌঁছানোর আগেই কিনারায় আটকে যায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Bypass physical distance: Anycast edge PoPs terminate TCP and TLS connections locally in under 15ms.',
          bn: 'দূরত্বের সমাধান: অ্যানিকাস্ট এজ সার্ভারগুলো মাত্র ১৫ মিলিসেকেন্ডে স্থানীয়ভাবে টিসিপি ও টিএলএস সংযোগ স্থাপন করে।'
        },
        {
          en: 'Dual-tier TTL control: Use s-maxage for CDN caching while preserving distinct max-age limits for end-user browsers.',
          bn: 'দ্বিমুখী টিটিএল: ব্রাউজারের জন্য max-age বজায় রেখে সিডিএনের জন্য s-maxage দিয়ে দীর্ঘ ক্যাশ নির্ধারণ করুন।'
        },
        {
          en: 'Stale-while-revalidate UX: Deliver cached data instantaneously without user-perceptible revalidation delays.',
          bn: 'দ্রুত ব্যবহারকারী অভিজ্ঞতা: stale-while-revalidate দিয়ে তাৎক্ষণিক ডাটা পরিবেশন করুন এবং গোপনে নতুন ডাটা আনুন।'
        },
        {
          en: 'Dilute volumetric attacks: Anycast spreads terabit DDoS attacks across hundreds of worldwide data centers.',
          bn: 'ডিডস প্রতিরোধ: অ্যানিকাস্ট টেরাবিট আকারের আক্রমণকে বিশ্বজুড়ে শত শত ডাটা সেন্টারে ছড়িয়ে দিয়ে প্রতিহত করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'edge-cartel-ex1',
      kind: 'mcq',
      topic: 's-maxage-directive-behavior',
      question: {
        en: 'What is the specific architectural behavior of the "s-maxage" directive in an HTTP Cache-Control header?',
        bn: 'এইচটিটিপি Cache-Control হেডারে "s-maxage" ডিরেক্টিভের সুনির্দিষ্ট স্থাপত্যিক আচরণ কী?'
      },
      options: [
        {
          en: 'It specifies the cache lifetime exclusively for public shared caches (like CDNs and reverse proxies), overriding max-age for shared caches while leaving browser caching unaffected',
          bn: 'এটি কেবলমাত্র শেয়ার্ড পাবলিক ক্যাশের (যেমন সিডিএন) জন্য স্থায়িত্ব নির্ধারণ করে এবং ব্রাউজার ক্যাশকে প্রভাবিত না করে max-age এর মানকে ওভাররাইড করে'
        },
        {
          en: 'It deletes all user cookies from the web browser',
          bn: 'এটি ওয়েব ব্রাউজার থেকে সব ব্যবহারকারীর কুকি মুছে ফেলে'
        },
        {
          en: 'It encrypts the website HTML with a secret password',
          bn: 'এটি একটি গোপন পাসওয়ার্ড দিয়ে ওয়েবসাইটের এইচটিএমএল এনক্রিপ্ট করে'
        },
        {
          en: 'It doubles the physical memory of the computer router',
          bn: 'এটি কম্পিউটার রাউটারের ফিজিক্যাল মেমরি দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "s-" stands for shared cache. It allows CDNs to cache an asset for 24 hours while browsers cache it for only 5 minutes.',
        bn: '"s-" মানে শেয়ার্ড ক্যাশ। এটি সিডিএনকে ২৪ ঘণ্টা এবং ব্রাউজারকে মাত্র ৫ মিনিট ক্যাশ করার সুযোগ দেয়।'
      },
      explanation: {
        en: 's-maxage applies solely to shared public proxies like CDNs, allowing distinct caching policies for edge infrastructure versus client browsers.',
        bn: 's-maxage কেবল শেয়ার্ড সিডিএন সার্ভারে প্রযোজ্য হয়, যা ক্লায়েন্ট ব্রাউজার ও এজ সার্ভারের মধ্যে ভিন্ন ক্যাশ নীতি বাস্তবায়নে সাহায্য করে।'
      }
    },
    {
      id: 'edge-cartel-ex2',
      kind: 'mcq',
      topic: 'stale-while-revalidate-mechanism',
      question: {
        en: 'How does the "stale-while-revalidate=60" directive optimize user experience during cache expiration?',
        bn: 'ক্যাশের মেয়াদ শেষ হওয়ার সময় "stale-while-revalidate=60" ডিরেক্টিভ কীভাবে ব্যবহারকারীর অভিজ্ঞতা উন্নত করে?'
      },
      options: [
        {
          en: 'It serves the expired cached response immediately to the user without blocking, while asynchronously fetching fresh content from the origin in the background',
          bn: 'এটি ব্যবহারকারীকে কোনো অপেক্ষা না করিয়ে তৎক্ষণাৎ ক্যাশ থেকে মেয়াদোত্তীর্ণ ডাটা দেখায়, এবং ব্যাকগ্রাউন্ডে গোপনে অরিজিন থেকে নতুন ডাটা সংগ্রহ করে'
        },
        {
          en: 'It throws an HTTP 500 error and crashes the web page',
          bn: 'এটি একটি এইচটিটিপি ৫০০ এরর তৈরি করে ওয়েব পেজ ক্র্যাশ করায়'
        },
        {
          en: 'It pauses all internet downloads for exactly 60 minutes',
          bn: 'এটি পুরো ইন্টারনেটের সমস্ত ডাউনলোড ঠিক ৬০ মিনিটের জন্য বন্ধ করে দেয়'
        },
        {
          en: 'It requires the user to solve a CAPTCHA puzzle before viewing the page',
          bn: 'পেজ দেখার আগে ব্যবহারকারীকে একটি ক্যাপচা সমাধান করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Users receive instant page loads, and the background fetch ensures the subsequent visitor receives updated data.',
        bn: 'ব্যবহারকারী তৎক্ষণাৎ পেজ দেখতে পান, আর ব্যাকগ্রাউন্ড ফেচ নিশ্চিত করে যে পরের ভিজিটর সম্পূর্ণ নতুন ডাটা পাবেন।'
      },
      explanation: {
        en: 'stale-while-revalidate completely hides origin revalidation latency from the critical rendering path, ensuring zero user delay.',
        bn: 'stale-while-revalidate অরিজিন থেকে ডাটা আনার বিলম্বকে ব্যবহারকারীর চোখের আড়ালে রেখে তাৎক্ষণিক ব্রাউজিং সুবিধা দেয়।'
      }
    },
    {
      id: 'edge-cartel-ex3',
      kind: 'mcq',
      topic: 'vary-header-danger',
      question: {
        en: 'Why is configuring "Vary: User-Agent" universally considered a severe performance anti-pattern on CDN edge networks?',
        bn: 'সিডিএন এজ নেটওয়ার্কে "Vary: User-Agent" কনফিগার করাকে কেন সর্বজনীনভাবে মারাত্মক পারফরম্যান্স বিরোধী ভুল হিসেবে গণ্য করা হয়?'
      },
      options: [
        {
          en: 'Because thousands of minor browser version permutations fragment the cache into thousands of separate buckets, collapsing the edge cache hit ratio towards zero',
          bn: 'কারণ ব্রাউজারের হাজার হাজার সূক্ষ্ম সংস্করণ ক্যাশকে হাজার হাজার ক্ষুদ্র অংশে ভেঙে দেয়, যার ফলে ক্যাশ হিট রেশিও কার্যত শূন্যে নেমে আসে'
        },
        {
          en: 'Because web browsers do not support user agent strings',
          bn: 'কারণ কোনো ওয়েব ব্রাউজার ইউজার এজেন্ট স্ট্রিং সমর্থন করে না'
        },
        {
          en: 'Because it deletes the website domain from Google Search',
          bn: 'কারণ এটি গুগল সার্চ থেকে ওয়েবসাইটের ডোমেন মুছে দেয়'
        },
        {
          en: 'Because it converts all images into black and white',
          bn: 'কারণ এটি সমস্ত ছবিকে সাদাকালো রঙে রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Every distinct User-Agent string gets its own isolated cache copy. With millions of browser variations, virtually every request becomes a cache miss.',
        bn: 'প্রতিটি ভিন্ন ইউজার এজেন্টের জন্য আলাদা ক্যাশ তৈরি হওয়ায় প্রায় প্রতিটি রিকোয়েস্টই ক্যাশ মিস হয়ে অরিজিনে চাপ তৈরি করে।'
      },
      explanation: {
        en: 'Vary: User-Agent destroys cache hit efficiency due to user-agent fragmentation. Use client hints or feature detection instead.',
        bn: 'Vary: User-Agent ক্যাশ খণ্ড-বিখণ্ড করে কার্যক্ষমতা নষ্ট করে। তাই এর বদলে ক্লায়েন্ট হিন্টস ব্যবহার করা শ্রেয়।'
      }
    },
    {
      id: 'edge-cartel-ex4',
      kind: 'mcq',
      topic: 'anycast-ddos-absorption',
      question: {
        en: 'How does BGP Anycast architecture inherently mitigate volumetric DDoS attacks targeting web applications?',
        bn: 'BGP Anycast আর্কিটেকচার কীভাবে স্বভাবজাতভাবেই ওয়েব অ্যাপ্লিকেশন লক্ষ্য করে চালানো ভলিউমেট্রিক ডিডস আক্রমণ প্রতিহত করে?'
      },
      options: [
        {
          en: 'It announces the same IP from hundreds of globally distributed edge data centers, dispersing a massive multi-terabit attack into small, manageable streams absorbed locally',
          bn: 'এটি বিশ্বব্যাপী শত শত ডাটা সেন্টার থেকে একই আইপি প্রচার করে, ফলে বিশাল টেরাবিট সাইজের আক্রমণ প্রতিটি এলাকায় ছোট ছোট অংশে ভাগ হয়ে সহজে শোষিত হয়'
        },
        {
          en: 'It sends an electric shock through the attacker’s computer monitor',
          bn: 'এটি আক্রমণকারীর কম্পিউটার মনিটরে বৈদ্যুতিক শক পাঠায়'
        },
        {
          en: 'It turns off the entire global internet for 24 hours',
          bn: 'এটি পুরো পৃথিবীর ইন্টারনেট ২৪ ঘণ্টার জন্য বন্ধ করে দেয়'
        },
        {
          en: 'It changes the programming language of the server from JavaScript to C++',
          bn: 'এটি সার্ভারের প্রোগ্রামিং ভাষা জাভাস্ক্রিপ্ট থেকে বদলে সি++ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Instead of all attack traffic hitting a single server in Virginia, traffic is diluted across 300+ edge locations worldwide.',
        bn: 'একটি মাত্র সার্ভারে সব আক্রমণ না গিয়ে তা বিশ্বজুড়ে ৩০০টির বেশি লোকাল সেন্টারে ছড়িয়ে গিয়ে শক্তিহীন হয়ে পড়ে।'
      },
      explanation: {
        en: 'Anycast routes malicious traffic to the geographically nearest PoP, diluting the volumetric flood across the CDN’s collective capacity.',
        bn: 'অ্যানিকাস্ট ক্ষতিকর ট্রাফিককে নিকটতম সেন্টারে পাঠিয়ে বিশ্বব্যাপী সিডিএন অবকাঠামোর সাহায্যে আক্রমণকে সহজেই নিষ্ক্রিয় করে।'
      }
    }
  ],
  quiz: {
    id: 'the-edge-cartel-quiz',
    title: {
      en: 'CDNs and Edge Networks Quiz',
      bn: 'সিডিএন এবং এজ নেটওয়ার্ক কুইজ'
    },
    questions: [
      {
        id: 'ec-q1',
        kind: 'mcq',
        topic: 'immutable-directive-benefit',
        question: {
          en: 'What optimization does the "immutable" Cache-Control directive provide when applied to content-hashed assets (e.g. style.3c8b.css)?',
          bn: 'কন্টেন্ট-হ্যাশযুক্ত ফাইলে (যেমন style.3c8b.css) "immutable" ডিরেক্টিভ ব্যবহার করলে কোন বিশেষ পারফরম্যান্স সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It instructs the browser that the file contents will never change, completely suppressing 304 conditional revalidation requests during page refreshes',
            bn: 'এটি ব্রাউজারকে নিশ্চিত করে যে ফাইলের উপাদান কখনো বদলাবে না, ফলে পেজ রিফ্রেশ করলেও অপ্রয়োজনীয় ৩০৪ কন্ডিশনাল রিকোয়েস্ট পাঠানো পুরোপুরি বন্ধ থাকে'
          },
          {
            en: 'It makes the CSS file download 100 times larger',
            bn: 'এটি সিএসএস ফাইলের আকার ১০০ গুণ বড় করে তোলে'
          },
          {
            en: 'It prevents users from taking screenshots of the website',
            bn: 'এটি ব্যবহারকারীদের ওয়েবসাইটের স্ক্রিনশট নেওয়া থেকে বিরত রাখে'
          },
          {
            en: 'It converts the stylesheet into an image file',
            bn: 'এটি স্টাইলশীটটিকে একটি ইমেজ ফাইলে রূপান্তরিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Even with max-age=31536000, browsers normally send an If-None-Match check when the user presses reload. Immutable prevents this.',
          bn: 'এমনকি max-age=31536000 থাকলেও রিফ্রেশ চাপলে ব্রাউজার সাধারণত রিকোয়েস্ট পাঠায়। immutable থাকলে ব্রাউজার নিশ্চিত জেনে বাড়তি রিকোয়েস্ট পাঠায় না।'
        },
        explanation: {
          en: 'immutable tells browsers the response will never change, eliminating unnecessary If-None-Match validation round trips on reload.',
          bn: 'immutable ব্রাউজারকে নিশ্চয়তা দেয় যে ফাইলটি অপরিবর্তনীয়, যার ফলে রিফ্রেশের সময়ও কোনো বাড়তি নেটওয়ার্ক রিকোয়েস্ট লাগে না।'
        }
      },
      {
        id: 'ec-q2',
        kind: 'mcq',
        topic: 'edge-tls-termination-speed',
        question: {
          en: 'Why does terminating TLS at an edge Point of Presence (PoP) dramatically speed up HTTPS web applications?',
          bn: 'এজ পয়েন্ট অব প্রেজেন্সে (PoP) টিএলএস টার্মিনেশন করলে কেন এইচটিটিপিএস ওয়েব অ্যাপ্লিকেশনগুলোর গতি নাটকীয়ভাবে বৃদ্ধি পায়?'
        },
        options: [
          {
            en: 'The multi-step TCP and TLS handshake round trips complete locally against the edge proxy in under 15ms instead of crossing continents to the origin',
            bn: 'টিসিপি এবং টিএলএস হ্যান্ডশেকের রাউন্ড-ট্রিপগুলো মহাদেশ পাড়ি না দিয়ে মাত্র ১৫ মিলিসেকেন্ডের ভেতর স্থানীয় এজ প্রক্সির সাথে সম্পন্ন হয়'
          },
          {
            en: 'Edge servers completely eliminate the need for encryption',
            bn: 'এজ সার্ভারগুলো এনক্রিপশনের প্রয়োজনীয়তা চিরতরে বিলুপ্ত করে দেয়'
          },
          {
            en: 'Edge termination turns HTTP into raw radio waves',
            bn: 'এজ টার্মিনেশন এইচটিটিপিকে রেডিও তরঙ্গে রূপান্তর করে'
          },
          {
            en: 'Edge servers run with zero electricity consumption',
            bn: 'এজ সার্ভারগুলো শূন্য বিদ্যুৎ খরচে চালিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The speed-of-light penalty for connection handshakes is paid over a local fiber loop rather than an ocean.',
          bn: 'হ্যান্ডশেকের সময় সাগর পেরোনোর বদলে ঘরের কাছের লোকাল নেটওয়ার্কেই দ্রুত মেটানো সম্ভব হয়।'
        },
        explanation: {
          en: 'Terminating handshakes at the edge slashes connection setup time. The edge maintains persistent pre-warmed TCP pools to the origin.',
          bn: 'লোকাল এজে হ্যান্ডশেক শেষ হওয়ায় কানেকশন সময় কমে যায়, আর এজ থেকে অরিজিনে সার্বক্ষণিক প্রস্তুত সংযোগ থাকে।'
        }
      },
      {
        id: 'ec-q3',
        kind: 'mcq',
        topic: 'no-cache-vs-no-store',
        question: {
          en: 'What is the critical technical distinction between "no-cache" and "no-store" in HTTP caching standards?',
          bn: 'এইচটিটিপি ক্যাশিং মানদণ্ডে "no-cache" এবং "no-store" এর মধ্যে মূল প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: '"no-cache" allows storing the response but requires validating freshness with the origin before reuse, whereas "no-store" strictly forbids saving any part of the message to disk or memory',
            bn: '"no-cache" ফাইলটি সংরক্ষণ করার অনুমতি দেয় কিন্তু ব্যবহারের আগে অরিজিনের সাথে যাচাই বাধ্যতামূলক করে, আর "no-store" মেমরি বা ডিস্কে কোনো ডাটা সেভ করাই সম্পূর্ণ নিষিদ্ধ করে'
          },
          {
            en: '"no-cache" is used on Tuesdays, and "no-store" is used on Thursdays',
            bn: '"no-cache" মঙ্গলবারে এবং "no-store" বৃহস্পতিবারে ব্যবহৃত হয়'
          },
          {
            en: 'There is no difference; they are exact synonyms',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা সম্পূর্ণ সমার্থক'
          },
          {
            en: '"no-store" only applies to offline floppy disks',
            bn: '"no-store" কেবল অফলাইন ফ্লপি ডিস্কে প্রযোজ্য হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'no-cache means "revalidate with ETag before serving". no-store means "do not write this secret data anywhere".',
          bn: 'no-cache মানে ব্যবহারের পূর্বে ETag মিলিয়ে নেওয়া। no-store মানে কোনো অবস্থাতেই এই গোপন তথ্য কোথাও সেভ না করা।'
        },
        explanation: {
          en: 'no-cache enforces validation before cache reuse; no-store prohibits caching altogether, mandatory for confidential financial data.',
          bn: 'no-cache ব্যবহারের পূর্বে যাচাই দাবি করে; আর no-store কোনো সংরক্ষণই করতে দেয় না, যা আর্থিক গোপন তথ্যের সুরক্ষায় জরুরি।'
        }
      },
      {
        id: 'ec-q4',
        kind: 'mcq',
        topic: 'edge-waf-protection-layer',
        question: {
          en: 'What primary architectural advantage does an Edge Web Application Firewall (WAF) provide over application-level firewall middleware?',
          bn: 'অ্যাপ্লিকেশন-স্তরের ফায়ারওয়াল মিডলওয়্যারের তুলনায় একটি এজ ওয়েব অ্যাপ্লিকেশন ফায়ারওয়াল (WAF) কোন প্রধান স্থাপত্যিক সুবিধা দেয়?'
        },
        options: [
          {
            en: 'Malicious payloads (SQL injection, XSS, scrapers) are blocked at the globally distributed edge, preventing malicious traffic from ever consuming origin server compute or bandwidth',
            bn: 'ক্ষতিকর রিকোয়েস্টগুলো (এসকিউএল ইনজেকশন, এক্সএসএস, বট) বিশ্বজুড়ে বিস্তৃত কিনারায় আটকে যায়, ফলে অরিজিন সার্ভারের মূল্যবান সিপিইউ ও ব্যান্ডউইথ নষ্ট হতে পারে না'
          },
          {
            en: 'Edge WAFs convert all incoming HTTP traffic into video files',
            bn: 'এজ WAF সমস্ত আগত এইচটিটিপি ট্রাফিককে ভিডিও ফাইলে রূপান্তর করে'
          },
          {
            en: 'Edge WAFs eliminate the need for database passwords',
            bn: 'এজ WAF ডেটাবেস পাসওয়ার্ডের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'Edge WAFs can only inspect text files smaller than 10 bytes',
            bn: 'এজ WAF কেবল ১০ বাইটের চেয়ে ছোট টেক্সট ফাইল পরীক্ষা করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Why spend your origin database and CPU resources parsing attack traffic when the edge can filter it out thousands of miles away?',
          bn: 'হাজার মাইল দূরেই ক্ষতিকর ট্রাফিক ফেলে দেওয়া গেলে অরিজিন সার্ভারের ওপর কোনো বাড়তি চাপ তৈরি হয় না।'
        },
        explanation: {
          en: 'Edge WAFs deflect web application vulnerabilities at the perimeter, keeping origin microservices completely insulated from attack floods.',
          bn: 'এজ WAF সীমানাতেই আক্রমণগুলো ঠেকিয়ে দেয়, যার ফলে মূল সার্ভার ও ডেটাবেস সম্পূর্ণ নিরাপদ ও হালকা থাকে।'
        }
      }
    ]
  }
};
