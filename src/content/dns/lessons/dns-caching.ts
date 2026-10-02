import type { Lesson } from '../../../lib/types';

export const DnsCachingLesson: Lesson = {
  slug: 'dns-caching',
  tech: 'dns',
  title: {
    en: 'DNS Caching, TTL Mechanics & Propagation',
    bn: 'ডিএনএস ক্যাশিং, TTL মেকানিজম এবং প্রোপাগেশন'
  },
  summary: {
    en: 'Explore how multi-tiered DNS caching and Time-To-Live (TTL) mechanics sustain global internet performance. Understand cache tiers across browser engines, operating system resolvers, and upstream recursive resolvers. Learn Negative Caching governed by SOA MINIMUM TTL (RFC 2308), analyze the myth of 48-hour global DNS propagation, and master zero-downtime DNS migration strategies.',
    bn: 'বহুস্তরীয় ডিএনএস ক্যাশিং এবং টাইম-টু-লাইভ (TTL) মেকানিজম কীভাবে বিশ্বব্যাপী ইন্টারনেটের গতি বজায় রাখে তা অন্বেষণ করুন। ব্রাউজার ইঞ্জিন, অপারেটিং সিস্টেম রিজলভার এবং আপস্ট্রিম রিকার্সিভ রিজলভারের ক্যাশ স্তরগুলো বুঝুন। SOA MINIMUM TTL ( RFC 2308 ) নিয়ন্ত্রিত নেগেটিভ ক্যাশিং শিখুন, ৪৮ ঘণ্টার বৈশ্বিক ডিএনএস প্রোপাগেশন মিথ বিশ্লেষণ করুন এবং জিরো-ডাউনটাইম ডিএনএস মাইগ্রেশন কৌশল নিখুঁতভাবে আয়ত্ত করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'multi-tier-caching-pipeline',
      text: {
        en: 'The Multi-Tier Caching Pipeline: Slashing Milliseconds to Zero',
        bn: 'বহুস্তরীয় ক্যাশিং পাইপলাইন: লেটেন্সি শূন্যে নামিয়ে আনা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you browse the web, uncached DNS lookups take between 50 and 200 milliseconds to complete. If every web asset, stylesheet, and API call triggered an 8-step DNS resolution journey, modern web applications would feel unbearably sluggish. DNS caching solves this by retaining previously resolved records across 3 distinct tiers: the client browser, the local operating system, and the recursive resolver.',
        bn: 'আপনি যখন ওয়েব ব্রাউজ করেন, তখন ক্যাশহীন ডিএনএস অনুসন্ধানে ৫০ থেকে ২০০ মিলিসেকেন্ড পর্যন্ত সময় লাগে। প্রতিটি ওয়েব সম্পদ, সিএসএস এবং এপিআই কলের জন্য যদি একটি ৮-ধাপের ডিএনএস রেজোলিউশন সম্পন্ন করতে হতো, তবে আধুনিক অ্যাপ্লিকেশনগুলো অত্যন্ত ধীরগতির মনে হতো। ডিএনএস ক্যাশিং ৩ টি ভিন্ন স্তরে পূর্বে অনুসন্ধান করা রেকর্ড সংরক্ষণ করে এই সমস্যা দূর করে: ক্লায়েন্ট ব্রাউজার, লোকাল অপারেটিং সিস্টেম এবং রিকার্সিভ রিজলভার।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The core mechanism regulating DNS cache lifetimes is Time-To-Live (TTL), an unsigned 32-bit integer measuring seconds. When an authoritative nameserver publishes a record with a TTL of 3600, intermediate recursive resolvers store that record in memory for up to 3600 seconds (1 hour). As time passes, the recursive resolver decrements the TTL counter, serving the remaining freshness window to downstream clients.',
        bn: 'ডিএনএস ক্যাশের স্থায়িত্ব নিয়ন্ত্রণকারী মূল মেকানিজম হলো টাইম-টু-লাইভ (TTL), যা সেকেন্ড এককে পরিমাপ করা একটি ৩২-বিট পূর্ণসংখ্যা। কোনো অথরিটেটিভ নেমসার্ভার যখন ৩৬০০ টিটিএল সহ একটি রেকর্ড প্রকাশ করে, তখন মধ্যবর্তী রিকার্সিভ রিজলভারগুলো ওই রেকর্ডটি তাদের মেমোরিতে ৩৬০০ সেকেন্ড ( ১ ঘণ্টা ) পর্যন্ত জমা রাখে। সময় অতিবাহিত হওয়ার সাথে সাথে রিজলভার টিটিএল কাউন্টার থেকে সময় কমাতে থাকে এবং অবশিষ্ট সময়ের হিসাব সহ ক্লায়েন্টকে উত্তর প্রদান করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'DNS TTL Countdown & Negative Caching State Timeline',
        bn: 'ডিএনএস TTL কাউন্টডাউন এবং নেগেটিভ ক্যাশিং টাইমলাইন'
      },
      svg: `<svg viewBox="0 0 840 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Visual timeline demonstrating how DNS TTL decrements over time and how negative caching handles NXDOMAIN">
  <rect width="840" height="420" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DNS TTL DECREMENTATION &amp; NEGATIVE CACHING TIMELINE</text>
  
  <!-- Left Box: Positive Caching (A Record) -->
  <g transform="translate(40, 55)">
    <rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="180" y="28" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">POSITIVE CACHING (A RECORD)</text>
    <text x="180" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Authoritative TTL = 3600 Seconds (1 Hour)</text>
    
    <!-- T = 0 -->
    <rect x="20" y="65" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="86" fill="#38bdf8" font-size="11" font-weight="bold">Time 0s: Fresh Fetch from Auth</text>
    <text x="35" y="104" fill="#cbd5e1" font-size="10">Resolver Cache stores: IP 93.184.215.14 (TTL 3600)</text>
    
    <!-- T = 600 -->
    <rect x="20" y="125" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="146" fill="#f59e0b" font-size="11" font-weight="bold">Time 600s: Client A Queries</text>
    <text x="35" y="164" fill="#cbd5e1" font-size="10">Resolver answers immediately: TTL = 3000s</text>
    
    <!-- T = 3500 -->
    <rect x="20" y="185" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="206" fill="#f59e0b" font-size="11" font-weight="bold">Time 3500s: Client B Queries</text>
    <text x="35" y="224" fill="#cbd5e1" font-size="10">Resolver answers immediately: TTL = 100s</text>
    
    <!-- T = 3601 -->
    <rect x="20" y="245" width="320" height="50" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="35" y="266" fill="#ef4444" font-size="11" font-weight="bold">Time 3601s: Cache Expired (TTL 0)</text>
    <text x="35" y="284" fill="#cbd5e1" font-size="10">Cache Miss! Resolver queries Auth nameserver again</text>
  </g>
  
  <!-- Right Box: Negative Caching (NXDOMAIN) -->
  <g transform="translate(440, 55)">
    <rect width="360" height="330" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="180" y="28" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">NEGATIVE CACHING (RFC 2308)</text>
    <text x="180" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Governed by SOA Record MINIMUM Field</text>
    
    <!-- Step 1 -->
    <rect x="20" y="65" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="86" fill="#ef4444" font-size="11" font-weight="bold">Client queries non-existent domain</text>
    <text x="35" y="104" fill="#cbd5e1" font-size="10">Authoritative server returns NXDOMAIN (RCODE 3)</text>
    
    <!-- Step 2 -->
    <rect x="20" y="125" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="146" fill="#38bdf8" font-size="11" font-weight="bold">SOA MINIMUM TTL Extracted</text>
    <text x="35" y="164" fill="#cbd5e1" font-size="10">e.g. SOA field 7 specifies MINIMUM = 300s</text>
    
    <!-- Step 3 -->
    <rect x="20" y="185" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="206" fill="#10b981" font-size="11" font-weight="bold">Resolver Caches Negative Answer</text>
    <text x="35" y="224" fill="#cbd5e1" font-size="10">NXDOMAIN cached for 300s (protects Auth server)</text>
    
    <!-- Step 4 -->
    <rect x="20" y="245" width="320" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="35" y="266" fill="#f59e0b" font-size="11" font-weight="bold">Subsequent Queries within 300s</text>
    <text x="35" y="284" fill="#cbd5e1" font-size="10">Instantly answered with NXDOMAIN from cache</text>
  </g>
</svg>`,
      caption: {
        en: 'Cached TTL values count down with each passing second; Negative Caching protects authoritative servers by caching NXDOMAIN non-existent answers.',
        bn: 'ক্যাশে সংরক্ষিত TTL মান প্রতি সেকেন্ডে কমতে থাকে; নেগেটিভ ক্যাশিং NXDOMAIN অস্তিত্বহীন উত্তর সংরক্ষণ করে অথরিটেটিভ সার্ভারকে রক্ষা করে।'
      },
    },
    {
      type: 'heading',
      id: 'negative-caching-propagation-myth',
      text: {
        en: 'Negative Caching & The Myth of "48-Hour DNS Propagation"',
        bn: 'নেগেটিভ ক্যাশিং এবং ৪৮ ঘণ্টার ডিএনএস প্রোপাগেশন মিথ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Negative Caching (specified in RFC 2308) prevents misbehaving software from flooding the internet with repetitive queries for broken or non-existent domains. When an authoritative server responds with NXDOMAIN, it includes the zone SOA record. Resolvers extract the 7th numerical parameter of the SOA record (known as the MINIMUM or negative caching TTL) and cache that failure locally for that duration (typically 300 to 3600 seconds).',
        bn: 'নেগেটিভ ক্যাশিং ( RFC 2308-এ সংজ্ঞায়িত ) কোনো ক্ষতিগ্রস্ত সফটওয়্যারকে ইন্টারনেটের অস্তিত্বহীন ডোমেনের জন্য বারবার অনুরোধ পাঠিয়ে সার্ভার অচল করা থেকে রক্ষা করে। অথরিটেটিভ সার্ভার যখন NXDOMAIN উত্তর দেয়, তখন এটি জোনের SOA রেকর্ড সংযুক্ত করে দেয়। রিজলভার SOA রেকর্ডের ৭ম প্যারামিটারটি ( যা MINIMUM বা নেগেটিভ ক্যাশিং TTL নামে পরিচিত ) পড়ে এবং সেই সময় পর্যন্ত ( সাধারণত ৩০০ থেকে ৩৬০০ সেকেন্ড ) ব্যর্থতার উত্তরটি ক্যাশে জমা রাখে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Many website owners believe the myth that DNS changes require 48 hours to "propagate across the globe." In reality, DNS is a pull architecture, not a push system. Global recursive resolvers do not receive broadcasts when you edit a zone; they query your server only after their cached TTL counter reaches zero. If your domain had a TTL of 86400 (24 hours), some resolvers will continue returning your old IP address for up to 24 hours until their local countdown expires.',
        bn: 'অনেক ওয়েবসাইট মালিক মনে করেন ডিএনএস পরিবর্তনের পর বিশ্বজুড়ে তা ছড়িয়ে পড়তে বা প্রোপাগেট হতে ৪৮ ঘণ্টা সময় লাগে। বাস্তবে ডিএনএস কোনো পুশ সিস্টেম নয়, এটি একটি পুল আর্কিটেকচার। জোন ফাইল এডিট করলে বিশ্বব্যাপী সার্ভারগুলোতে কোনো স্বয়ংক্রিয় বার্তা যায় না; বরং লোকাল ক্যাশের TTL শূন্যে পৌঁছানোর পরেই তারা নতুন তথ্যের জন্য কোয়েরি পাঠায়। আপনার ডোমেনের TTL যদি ৮৬৪০০ ( ২৪ ঘণ্টা ) হয়ে থাকে, তবে কিছু রিজলভার তাদের লোকাল কাউন্টডাউন শেষ না হওয়া পর্যন্ত ২৪ ঘণ্টা ধরে পুরোনো আইপিই সরবরাহ করবে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'dns-ttl-cache.js',
      code: `// Deterministic Simulation of a TTL-Aware DNS Resolver Cache
// Handles positive records, TTL decrements, and RFC 2308 negative caching

class DnsResolverCache {
  constructor() {
    this.storage = new Map();
  }

  // Store positive or negative record with TTL in seconds
  set(domain, type, value, ttlSeconds, isNegative = false) {
    const expiresAt = Date.now() + (ttlSeconds * 1000);
    const key = domain.toLowerCase() + ':' + type.toUpperCase();
    this.storage.set(key, { value, ttlSeconds, expiresAt, isNegative });
  }

  // Retrieve cached entry and compute remaining TTL
  get(domain, type) {
    const key = domain.toLowerCase() + ':' + type.toUpperCase();
    const entry = this.storage.get(key);
    if (!entry) return { status: 'CACHE_MISS' };

    const remainingMs = entry.expiresAt - Date.now();
    if (remainingMs <= 0) {
      this.storage.delete(key);
      return { status: 'CACHE_EXPIRED' };
    }

    const remainingTtlSeconds = Math.ceil(remainingMs / 1000);
    return {
      status: entry.isNegative ? 'CACHE_HIT_NEGATIVE' : 'CACHE_HIT_POSITIVE',
      value: entry.value,
      remainingTtl: remainingTtlSeconds,
    };
  }
}

// Demonstrate TTL Countdown & Negative Caching
const cache = new DnsResolverCache();

// 1. Cache positive A record with 300s TTL
cache.set('example.com', 'A', '93.184.215.14', 300);

// 2. Cache negative NXDOMAIN according to SOA MINIMUM (60s TTL)
cache.set('not-real-domain.com', 'A', 'NXDOMAIN', 60, true);

console.log('--- Inspecting Initial Cache State ---');
console.log('example.com       :', cache.get('example.com', 'A'));
console.log('not-real-domain   :', cache.get('not-real-domain.com', 'A'));

console.log('\\nProduction Zero-Downtime Migration Rule:');
console.log('1. Reduce TTL to 300s at least 48 hours before server migration.');
console.log('2. Update IP: worldwide resolvers will adopt the new IP within 300s (5 minutes)!');`,
      caption: {
        en: 'The simulation implements TTL decrements and negative caching, validating why lowering TTL enables 5-minute cutovers.',
        bn: 'সিমুলেশনটি TTL কাউন্টডাউন এবং নেগেটিভ ক্যাশিং প্রদর্শন করে, যা দেখায় কেন TTL কমালে ৫ মিনিটে মাইগ্রেশন সম্পন্ন হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Flushing Local Operating System DNS Caches',
        bn: 'লোকাল অপারেটিং সিস্টেমের ডিএনএস ক্যাশ পরিষ্কার করা'
      },
      text: {
        en: 'During server migrations or debugging, local operating system caches may return stale records even after public DNS has updated. To force an immediate fresh lookup: On Windows run "ipconfig /flushdns". On macOS run "sudo killall -HUP mDNSResponder". On Linux systemd-resolved run "resolvectl flush-caches". In Google Chrome open "chrome://net-internals/#dns" and click "Clear host cache".',
        bn: 'সার্ভার স্থানান্তরের সময় পাবলিক ডিএনএস আপডেট হলেও লোকাল অপারেটিং সিস্টেম ক্যাশের কারণে পুরোনো রেকর্ড দেখাতে পারে। তৎক্ষণাৎ নতুন রেকর্ড পেতে: উইন্ডোজে "ipconfig /flushdns" চালান। ম্যাক অপারেটিং সিস্টেমে "sudo killall -HUP mDNSResponder" চালান। লিনাক্সে "resolvectl flush-caches" চালান এবং গুগল ক্রোমে "chrome://net-internals/#dns" ঠিকানায় গিয়ে "Clear host cache" বাটনে ক্লিক করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'dns-cac-ex-1',
      kind: 'predict',
      question: {
        en: 'If a DNS record has a configured TTL of 300 seconds and 120 seconds have elapsed since it was cached, what remaining TTL value in seconds will the recursive resolver return to the next client? (300 - 120 = 180). Type the number.',
        bn: 'যদি কোনো ডিএনএস রেকর্ডের কনফিগার করা TTL ৩০০ সেকেন্ড হয় এবং ক্যাশ হওয়ার পর ১২০ সেকেন্ড অতিক্রান্ত হয়, তবে রিকার্সিভ রিজলভার পরবর্তী ক্লায়েন্টকে অবশিষ্ট কত সেকেন্ড TTL ফেরত দেবে? ( ৩০০ - ১২০ = ১৮০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '180',
      hint: {
        en: 'Subtract elapsed seconds from initial TTL: 300 - 120 = 180.',
        bn: 'প্রাথমিক TTL থেকে অতিবাহিত সেকেন্ড বিয়োগ করুন: ৩০০ - ১২০ = ১৮০।'
      },
      explanation: {
        en: 'Recursive resolvers decrement the TTL with each passing second, returning the remaining 180 seconds to downstream clients.',
        bn: 'রিকার্সিভ রিজলভার প্রতি সেকেন্ডে TTL কাউন্টার কমায় এবং অবশিষ্ট ১৮০ সেকেন্ড পরবর্তী ক্লায়েন্টকে জানায়।'
      },
    },
    {
      id: 'dns-cac-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the operational function of "Negative Caching" (RFC 2308) in Domain Name System architecture?',
        bn: 'ডোমেন নেম সিস্টেম আর্কিটেকচারে "নেগেটিভ ক্যাশিং" ( RFC 2308 ) এর মূল কাজের ভূমিকা কী?'
      },
      options: [
        {
          en: 'Caching NXDOMAIN (non-existent domain) answers for a defined duration to prevent repetitive client queries from overwhelming authoritative nameservers',
          bn: 'অস্তিত্বহীন ডোমেনের ( NXDOMAIN ) উত্তর একটি নির্দিষ্ট সময়ের জন্য ক্যাশে সংরক্ষণ করা যাতে বারবার আসা অনুরোধ অথরিটেটিভ সার্ভারকে বিপর্যস্ত না করে',
        },
        {
          en: 'Storing negative numbers inside processor mathematical registers',
          bn: 'প্রসেসরের গাণিতিক রেজিস্টারের ভেতর ঋণাত্মক সংখ্যা সংরক্ষণ করা',
        },
        {
          en: 'Inverting website screen colors to black and white at night',
          bn: 'রাতের বেলা ওয়েবসাইটের স্ক্রিনের রঙ পরিবর্তন করে সাদা-কালো করে ফেলা',
        },
        {
          en: 'Deleting all emails that contain negative sentimental words',
          bn: 'নেতিবাচক আবেগপূর্ণ শব্দ থাকা সমস্ত ইমেইল বার্তা স্থায়ীভাবে মুছে ফেলা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Caching failed NXDOMAIN responses to shield upstream authoritative nameservers.',
        bn: 'আপস্ট্রিম অথরিটেটিভ নেমসার্ভারকে বাঁচাতে ব্যর্থ NXDOMAIN উত্তরগুলো ক্যাশে রাখা।',
      },
      explanation: {
        en: 'Negative caching stores the fact that a domain does not exist, using the SOA MINIMUM field, shielding authoritative servers from query flooding.',
        bn: 'নেগেটিভ ক্যাশিং SOA রেকর্ডের MINIMUM ফিল্ড ব্যবহার করে ডোমেন না থাকার তথ্য ক্যাশে জমা রাখে, যা সার্ভারকে অতিরিক্ত কোয়েরির চাপ থেকে বাঁচায়।'
      },
    },
    {
      id: 'dns-cac-ex-3',
      kind: 'mcq',
      question: {
        en: 'According to high-availability engineering best practices, what action should you perform 48 hours BEFORE migrating a production server IP address?',
        bn: 'উচ্চপ্রাপ্যতা ( high-availability ) ইঞ্জিনিয়ারিং মানদণ্ড অনুসারে প্রোডাকশন সার্ভারের আইপি পরিবর্তনের ৪৮ ঘণ্টা আগে আপনার কী পদক্ষেপ নেওয়া উচিত?'
      },
      options: [
        {
          en: 'Reduce the DNS record TTL from a high value (e.g. 86400 seconds) down to 300 seconds, allowing old worldwide caches to drain before the cutover',
          bn: 'ডিএনএস রেকর্ডের TTL বড় মান ( যেমন ৮৬৪০০ সেকেন্ড ) থেকে কমিয়ে ৩০০ সেকেন্ডে আনুন, যাতে স্থানান্তরের আগেই পুরানো ক্যাশ খালি হয়ে যায়',
        },
        {
          en: 'Turn off electricity to the entire office building for two days',
          bn: 'দুই দিনের জন্য সমগ্র অফিস ভবনের বিদ্যুৎ সংযোগ সম্পূর্ণ বন্ধ করে রাখা',
        },
        {
          en: 'Delete the registered domain name from the international registry',
          bn: 'আন্তর্জাতিক রেজিস্ট্রি থেকে নিবন্ধিত ডোমেন নামটি সম্পূর্ণরূপে মুছে ফেলা',
        },
        {
          en: 'Replace all computer monitors with analog television screens',
          bn: 'সমস্ত কম্পিউটার মনিটর পরিবর্তন করে পুরোনো টেলিভিশন স্ক্রিন বসানো',
        },
      ],
      answer: 0,
      hint: {
        en: 'Lower the TTL value well in advance to ensure rapid global adoption on migration day.',
        bn: 'স্থানান্তরের দিন দ্রুত পরিবর্তন নিশ্চিত করতে আগে থেকেই TTL কমিয়ে রাখুন।',
      },
      explanation: {
        en: 'Lowering the TTL to 300 seconds 48 hours before migration ensures that when you swap the IP on migration day, resolvers globally fetch the new address within 5 minutes.',
        bn: 'মাইগ্রেশনের ৪৮ ঘণ্টা আগে TTL ৩০০ সেকেন্ড করলে মাইগ্রেশনের দিনে আইপি পরিবর্তনের ৫ মিনিটের মধ্যেই বিশ্বব্যাপী সমস্ত রিজলভার নতুন ঠিকানায় চলে আসে।'
      },
    },
    {
      id: 'dns-cac-ex-4',
      kind: 'predict',
      question: {
        en: 'If an administrator configures a DNS record with a TTL of 60 seconds, within how many seconds will all global recursive resolvers fetch the new server IP after an update? (60). Type the number.',
        bn: 'যদি কোনো প্রশাসক ৬০ সেকেন্ড TTL সহ একটি ডিএনএস রেকর্ড কনফিগার করেন, তবে রেকর্ড পরিবর্তনের পর সর্বোচ্চ কত সেকেন্ডের মধ্যে বিশ্বব্যাপী সমস্ত রিকার্সিভ রিজলভার নতুন আইপি গ্রহণ করবে? ( ৬০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '60',
      hint: {
        en: 'The maximum duration equals the TTL value: 60 seconds.',
        bn: 'সর্বোচ্চ সময়কালটি TTL মানের সমান: ৬০ সেকেন্ড।'
      },
      explanation: {
        en: 'With a 60-second TTL, any cached copy expires in at most 60 seconds, forcing an immediate fetch of the new record.',
        bn: '৬০ সেকেন্ডের TTL থাকলে যেকোনো ক্যাশ কপি সর্বোচ্চ ৬০ সেকেন্ডের মধ্যে মেয়াদোত্তীর্ণ হয়ে যায় এবং নতুন রেকর্ড সংগ্রহ করতে বাধ্য হয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'DNS Caching & TTL Mechanics Quiz',
      bn: 'ডিএনএস ক্যাশিং এবং TTL মেকানিজম কুইজ'
    },
    questions: [
      {
        id: 'dns-cac-qz-1',
        kind: 'mcq',
        topic: 'ttl-decrementation-purpose',
        question: {
          en: 'Why do intermediate recursive resolvers decrement the TTL value of a cached DNS record with each passing second before serving it to clients?',
          bn: 'মধ্যবর্তী রিকার্সিভ রিজলভারগুলো ক্লায়েন্টকে উত্তর দেওয়ার আগে ক্যাশে থাকা ডিএনএস রেকর্ডের TTL মান প্রতি সেকেন্ডে কেন কমিয়ে দেয়?'
        },
        options: [
          {
            en: 'To ensure downstream clients and stub resolvers know the true remaining validity window, preventing records from remaining cached past the authoritative expiration limit',
            bn: 'যাতে ক্লায়েন্ট এবং স্টাব রিজলভার রেকর্ডের সঠিক অবশিষ্ট মেয়াদ জানতে পারে এবং অথরিটেটিভ মেয়াদের অতিরিক্ত সময় ক্যাশে জমা না রাখে',
          },
          {
            en: 'To gradually reduce the network bandwidth consumed by the domain name',
            bn: 'ডোমেন নামের মাধ্যমে ব্যবহৃত নেটওয়ার্ক ব্যান্ডউইথ ধীরে ধীরে কমিয়ে আনার জন্য',
          },
          {
            en: 'Because computer hardware cannot count upwards indefinitely',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার ওপরের দিকে অবিরাম সংখ্যা গণনা করতে পারে না',
          },
          {
            en: 'To slow down hacker connections by cooling the CPU processor',
            bn: 'সিপিইউ প্রসেসর ঠান্ডা রাখার মাধ্যমে আক্রমণকারীদের গতি ধীর করে দেওয়ার জন্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'Decremented TTL communicates remaining cache freshness to downstream devices.',
          bn: 'কমানো TTL ডাউনস্ট্রিম ডিভাইসকে ক্যাশের অবশিষ্ট সতেজতার সময়কাল প্রকাশ করে।',
        },
        explanation: {
          en: 'If a resolver served the full original TTL repeatedly, downstream clients would keep caching stale data indefinitely. Decrementing preserves authoritative freshness limits.',
          bn: 'রিজলভার যদি প্রতিবার পুরো TTL ফেরত দিত, তবে ক্লায়েন্টরা অনন্তকাল পুরোনো ডাটা রেখে দিত। কাউন্টার কমানোর মাধ্যমে মেয়াদের ভারসাম্য ঠিক থাকে।'
        },
      },
      {
        id: 'dns-cac-qz-2',
        kind: 'mcq',
        topic: 'negative-caching-soa-minimum',
        question: {
          en: 'In a DNS zone, where is the negative caching duration for an NXDOMAIN response officially specified?',
          bn: 'একটি ডিএনএস জোনে NXDOMAIN উত্তরের জন্য নেগেটিভ ক্যাশিংয়ের সময়কাল প্রাতিষ্ঠানিকভাবে কোথায় নির্ধারিত থাকে?'
        },
        options: [
          {
            en: 'In the 7th field (MINIMUM TTL) of the zone Start of Authority (SOA) resource record',
            bn: 'জোনের স্টার্ট অব অথরিটি (SOA) রিসোর্স রেকর্ডের ৭ম ফিল্ডে ( MINIMUM TTL )',
          },
          {
            en: 'In the computer BIOS motherboard settings',
            bn: 'কম্পিউটারের মাদারবোর্ড বায়োস (BIOS) সেটিংসে',
          },
          {
            en: 'On the back of the physical Wi-Fi router packaging box',
            bn: 'ফিজিক্যাল ওয়াইফাই রাউটারের প্যাকেজিং বাক্সের পেছনের অংশে',
          },
          {
            en: 'Inside the website HTML favicon icon file',
            bn: 'ওয়েবসাইটের এইচটিএমএল ফেভিকন আইকন ফাইলের ভেতর',
          },
        ],
        answer: 0,
        hint: {
          en: 'The MINIMUM parameter of the SOA record governs negative caching under RFC 2308.',
          bn: 'RFC 2308 অনুযায়ী SOA রেকর্ডের MINIMUM প্যারামিটার নেগেটিভ ক্যাশিং নিয়ন্ত্রণ করে।',
        },
        explanation: {
          en: 'RFC 2308 defines that resolvers must use the MINIMUM field of the authoritative SOA record to determine how long to cache negative NXDOMAIN answers.',
          bn: 'RFC 2308 নির্ধারণ করেছে যে অথরিটেটিভ SOA রেকর্ডের MINIMUM ফিল্ড দেখেই রিজলভার ঠিক করবে কতক্ষণ NXDOMAIN ক্যাশে রাখা হবে।'
        },
      },
      {
        id: 'dns-cac-qz-3',
        kind: 'mcq',
        topic: 'dns-propagation-myth-reality',
        question: {
          en: 'Why is the widespread belief that "DNS updates take 48 hours to propagate across the globe" technically inaccurate?',
          bn: 'কেন "ডিএনএস পরিবর্তন বিশ্বজুড়ে ছড়িয়ে পড়তে ৪৮ ঘণ্টা লাগে" এই ধারণাটি প্রযুক্তিগতভাবে ভুল?'
        },
        options: [
          {
            en: 'DNS is a pull architecture rather than a push system; resolvers update only when their locally cached TTL expires, which can be controlled by administrators in advance',
            bn: 'ডিএনএস একটি পুল আর্কিটেকচার, পুশ সিস্টেম নয়; লোকাল ক্যাশের TTL শেষ হলেই কেবল রিজলভার নতুন ডাটা টানে, যা প্রশাসক আগে থেকেই নিয়ন্ত্রণ করতে পারেন',
          },
          {
            en: 'Because DNS servers only send updates during solar eclipses',
            bn: 'কারণ ডিএনএস সার্ভারগুলো কেবল সূর্যগ্রহণের সময় আপডেট পাঠিয়ে থাকে',
          },
          {
            en: 'Because internet domain names are hardwired permanently into undersea cables',
            bn: 'কারণ ইন্টারনেট ডোমেন নামগুলো সমুদ্রের তলদেশের কেবলের সাথে স্থায়ীভাবে খোদাই করা থাকে',
          },
          {
            en: 'Because all global DNS lookups are processed by a single mainframe in Switzerland',
            bn: 'কারণ সমস্ত বৈশ্বিক ডিএনএস কোয়েরি সুইজারল্যান্ডের একটি মাত্র মেইনফ্রেম কম্পিউটার দ্বারা প্রক্রিয়াজাত হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'DNS records are pulled on TTL expiry, not broadcast across the world.',
          bn: 'ডিএনএস রেকর্ড ব্রডকাস্ট হয় না, বরং TTL শেষ হলে রিজলভার নিজে টেনে আনে।',
        },
        explanation: {
          en: 'There is no global broadcast. Resolvers pull fresh records strictly when their cached TTL reaches zero. By lowering TTL before a migration, updates occur within minutes.',
          bn: 'বিশ্বজুড়ে কোনো সরাসরি ব্রডকাস্ট হয় না। ক্যাশের TTL শূন্য হলেই সার্ভার নতুন ডাটা সংগ্রহ করে। আগে থেকে TTL কমিয়ে রাখলে কয়েক মিনিটের মধ্যে মাইগ্রেশন সম্ভব।'
        },
      },
      {
        id: 'dns-cac-qz-4',
        kind: 'mcq',
        topic: 'os-dns-flush-command-windows',
        question: {
          en: 'Which command line utility purges the local operating system DNS resolver cache on a Microsoft Windows machine?',
          bn: 'কোন কমান্ড লাইন ইউটিলিটি মাইক্রোসফট উইন্ডোজ মেশিনে লোকাল অপারেটিং সিস্টেম ডিএনএস ক্যাশ পরিষ্কার করে?'
        },
        options: [
          {
            en: 'ipconfig /flushdns',
            bn: 'ipconfig /flushdns',
          },
          {
            en: 'format c: /s',
            bn: 'format c: /s',
          },
          {
            en: 'ping localhost -t',
            bn: 'ping localhost -t',
          },
          {
            en: 'shutdown /r /t 0',
            bn: 'shutdown /r /t 0',
          },
        ],
        answer: 0,
        hint: {
          en: 'The standard Windows ipconfig flag for clearing the DNS resolver cache.',
          bn: 'ডিএনএস রিজলভার ক্যাশ খালি করার আদর্শ উইন্ডোজ ipconfig ফ্ল্যাগ।',
        },
        explanation: {
          en: 'Running "ipconfig /flushdns" clears all cached domain mappings from the Windows DNS Client service, forcing immediate fresh network queries.',
          bn: '"ipconfig /flushdns" চালালে উইন্ডোজ ডিএনএস ক্লায়েন্ট সার্ভিসের সমস্ত ক্যাশ মুছে যায় এবং কম্পিউটার নতুন করে নেটওয়ার্কে অনুসন্ধান করতে বাধ্য হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'dns-servers',
    title: {
      en: 'DNS Server Architectures & Anycast Routing',
      bn: 'ডিএনএস সার্ভার আর্কিটেকচার এবং এনিকাস্ট রাউটিং'
    },
  },
};
