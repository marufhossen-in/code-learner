import type { Lesson } from '../../../lib/types';

export const freshnessExchangeLesson: Lesson = {
  slug: 'the-freshness-exchange',
  tech: 'http',
  title: {
    en: 'HTTP Caching: Cache-Control, ETags, 304 Revalidation & Vary',
    bn: 'HTTP ক্যাশিং: Cache-Control, ETag, ৩০৪ রিভ্যালিডেশন ও Vary'
  },
  summary: {
    en: 'Master HTTP caching architecture across 10 structured topics. Understand browser private caches vs CDN shared caches. Learn essential Cache-Control directives: max-age, s-maxage, public, and private. Demystify the crucial difference between no-cache and no-store. Explore validation using ETags and 304 Not Modified. Study Vary headers, stale-while-revalidate, and immutable asset hashing.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP ক্যাশিং আর্কিটেকচার আয়ত্ত করুন। ব্রাউজারের প্রাইভেট ক্যাশ বনাম সিডিএন শেয়ার্ড ক্যাশের পার্থক্য বুঝুন। Cache-Control-এর মূল নির্দেশিকা যেমন max-age, s-maxage, public ও private শিখুন। no-cache ও no-store-এর বাস্তব পার্থক্য জানুন। ETag ও ৩০৪ Not Modified দিয়ে ভ্যালিডেশন, Vary হেডার এবং কনটেন্ট-হ্যাশ ক্যাশিং আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-header-court',
    tech: 'http',
    title: {
      en: 'The Header Court: HTTP Headers, Anatomy, Typographies & Security Statutes',
      bn: 'হেডার দরবার: HTTP হেডার্স, গঠন, টাইপোগ্রাফি ও নিরাপত্তা বিধান'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. HTTP Caching Architecture: Private vs Shared Caches', bn: '১. HTTP ক্যাশিং আর্কিটেকচার: Private বনাম Shared ক্যাশ' } },
    {
      type: 'para',
      text: {
        en: 'When you build for the web, HTTP caching eliminates redundant network round-trips between your browser and origin servers. Caches fall into two categories. Private caches live inside your personal browser to store your session data. Shared caches—such as Content Delivery Networks (CDNs) and reverse proxies—serve public assets to thousands of concurrent users.',
        bn: 'আপনি যখন ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন ব্রাউজার ও সার্ভারের মধ্যকার অতিরিক্ত নেটওয়ার্ক ট্রিপ কমাতে HTTP ক্যাশিং গুরুত্বপূর্ণ ভূমিকা পালন করে। ক্যাশ মূলত ২ প্রকারের (দুই প্রকারের) হয়। প্রাইভেট ক্যাশ আপনার ব্রাউজারের ভেতরে থাকে এবং আপনার ব্যক্তিগত সেশনের ডেটা সংরক্ষণ করে। শেয়ার্ড ক্যাশ—যেমন কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDNs) ও রিভার্স প্রক্সি—একই সাথে হাজার হাজার ব্যবহারকারীর জন্য সাধারণ পাবলিক ফাইল পরিবেশন করে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Date: Sat, 26 Sep 2026 12:00:00 GMT
Content-Type: text/css; charset=utf-8
Cache-Control: public, max-age=86400, s-maxage=604800
ETag: "style-v4"

/* Client stores in local browser cache for 1 day (86400s) */
/* CDN edges store in shared edge cache for 7 days (604800s) */`,
      caption: {
        en: 'Cache-Control coordinates caching policies across both client browsers and shared CDN edges.',
        bn: 'Cache-Control ব্রাউজার ও সিডিএন উভয়ের জন্য আলাদা ক্যাশিং নিয়ম নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Cache-Control Directives: max-age, s-maxage, public & private', bn: '২. Cache-Control নির্দেশনাসমূহ: max-age, s-maxage, public ও private' } },
    {
      type: 'para',
      text: {
        en: 'The Cache-Control header defines the expiration lease for cached content. The max-age directive sets the lifetime in seconds for browser caches. The s-maxage directive overrides max-age specifically for shared intermediary proxies and CDNs. The private directive restricts caching strictly to the end-user browser, while public allows shared proxy caching.',
        bn: 'Cache-Control হেডার ডেটা কতক্ষণ তাজা থাকবে তা নির্দিষ্ট করে। max-age ব্রাউজার ক্যাশে থাকার মেয়াদ সেকেন্ডে ঠিক করে। s-maxage শুধুমাত্র সিডিএন এবং শেয়ার্ড প্রক্সির জন্য আলাদা মেয়াদ দেয়। private নির্দেশ দেয় ডেটা কেবল ব্যবহারকারীর নিজস্ব ব্রাউজারে ক্যাশ হবে, আর public দিলে সিডিএন-ও তা সবার জন্য রাখতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express cache header examples:
// 1. Personalized User Profile: Browser only, 5 minutes:
// res.setHeader("Cache-Control", "private, max-age=300");

// 2. Global Public JavaScript Bundle: 1 year, immutable:
// res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

console.log("Cache-Control directives establish precise lease durations");
// Output: Cache-Control directives establish precise lease durations`,
      caption: {
        en: 'Directives instruct intermediaries how long and where responses may be stored.',
        bn: 'নির্দেশনাগুলো ঠিক করে রেসপন্স কোথায় এবং কতক্ষণ জমা রাখা যাবে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Critical Distinction: no-cache vs no-store', bn: '৩. গুরুত্বপূর্ণ পার্থক্য: no-cache বনাম no-store' } },
    {
      type: 'para',
      text: {
        en: 'The difference between no-cache and no-store is frequently misunderstood. The directive no-cache does not prevent caching. Instead, it instructs the browser to cache the file, but mandate revalidation with the origin before every single use. In contrast, no-store completely forbids caching, destroying the bytes from storage after display.',
        bn: 'no-cache এবং no-store-এর মধ্যে প্রায়ই ভুল বোঝাবুঝি হয়। no-cache ক্যাশ করা বন্ধ করে না। এটি ফাইল জমা রাখে কিন্তু ব্যবহারের আগে প্রতিবার অরিজিন সার্ভারের সাথে মিলিয়ে দেখতে বলে। অন্যদিকে no-store কোনো ফাইল হার্ডডিস্ক বা মেমরিতে জমা রাখা পুরোপুরি নিষিদ্ধ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* 1. Sensitive Bank Balance -> Must never touch disk or cache: */
Cache-Control: no-store, private

/* 2. Single Page App index.html -> Store, but check for updates every time: */
Cache-Control: no-cache
ETag: "index-hash-9182"`,
      caption: {
        en: 'no-store enforces zero retention; no-cache mandates conditional revalidation before reuse.',
        bn: 'no-store কোনো ডেটা সংরক্ষণ করে না; no-cache ব্যবহারের আগে রিভ্যালিডেশন বাধ্যতামূলক করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Validation with ETags: Strong vs Weak Fingerprints', bn: '৪. ETag দিয়ে ভ্যালিডেশন: Strong বনাম Weak ফিঙ্গারপ্রিন্ট' } },
    {
      type: 'para',
      text: {
        en: 'An ETag (Entity Tag) is a cryptographic fingerprint of the response payload. When a cached file expires, the client sends back the ETag inside the If-None-Match header. A Strong ETag guarantees byte-for-byte identity. A Weak ETag (prefixed with W/) guarantees semantic equivalence, allowing gzip compression variations.',
        bn: 'ETag (Entity Tag) হলো কনটেন্টের একটি ক্রিপ্টোগ্রাফিক ফিঙ্গারপ্রিন্ট বা হ্যাশ। ক্যাশের মেয়াদ শেষ হলে ব্রাউজার If-None-Match হেডারে এই হ্যাশ সার্ভারে ফেরত পাঠায়। Strong ETag বাইট-টু-বাইট হুবহু মিল নিশ্চিত করে। Weak ETag (W/ দিয়ে শুরু) বিষয়বস্তুর মিল নিশ্চিত করে যাতে জিপ কম্প্রেশনে সমস্যা না হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import crypto from "crypto";

function generateETag(content) {
  // Strong ETag based on MD5 or SHA-1 hash of payload:
  const hash = crypto.createHash("md5").update(content).digest("hex");
  return \`"\${hash}"\`;
}

const pageContent = "<h1>Welcome to Codeshikhon</h1>";
const etag = generateETag(pageContent);

console.log("Computed ETag:", etag);
// Output: Computed ETag: "4f8a...e2b1"`,
      caption: {
        en: 'ETags identify resource versions to enable conditional revalidation.',
        bn: 'ETag রিসোর্সের ভার্সন শনাক্ত করে শর্তসাপেক্ষ রিভ্যালিডেশন সম্ভব করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Date-Based Revalidation: Last-Modified & If-Modified-Since', bn: '৫. তারিখ-ভিত্তিক রিভ্যালিডেশন: Last-Modified ও If-Modified-Since' } },
    {
      type: 'para',
      text: {
        en: 'Before ETags became standard, HTTP used timestamp revalidation. The origin server provides a Last-Modified header with an HTTP-formatted date. On subsequent requests, the client sends If-Modified-Since. While functional, timestamps have 1-second resolution limits, making ETags superior for high-frequency modifications.',
        bn: 'ETag আসার আগে তারিখ দিয়ে ভ্যালিডেশন করা হতো। সার্ভার Last-Modified হেডারে ফাইল বদলানোর শেষ সময় জানাত। পরের বার ক্লায়েন্ট If-Modified-Since হেডারে সেই সময় পাঠাত। তবে সময়ের পরিমাপ ১ সেকেন্ডের ছোট হয় না বলে দ্রুত পরিবর্তনের ক্ষেত্রে ETag অনেক বেশি নির্ভুল।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Last-Modified: Sat, 26 Sep 2026 10:00:00 GMT
Cache-Control: max-age=3600

/* One hour later, client validates stale copy: */
GET /api/rates HTTP/1.1
If-Modified-Since: Sat, 26 Sep 2026 10:00:00 GMT`,
      caption: {
        en: 'Timestamp validation compares modification dates to determine content freshness.',
        bn: 'তারিখ-ভিত্তিক ভ্যালিডেশন সময় তুলনা করে ডেটা তাজা আছে কি না তা নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The 304 Not Modified Response: Bandwidth Savings', bn: '৬. 304 Not Modified রেসপন্স: ব্যান্ডউইথ সাশ্রয়' } },
    {
      type: 'para',
      text: {
        en: 'When a client revalidates using If-None-Match and the server content has not changed, the origin returns HTTP 304 Not Modified. A 304 response transmits only headers and zero body bytes. The client refreshes its expiration lease and serves the locally cached body, eliminating payload download latency.',
        bn: 'যখন ক্লায়েন্ট If-None-Match পাঠায় এবং সার্ভারে ফাইলটি একই থাকে, সার্ভার 304 Not Modified পাঠায়। এই ৩০৪ রেসপন্সে কোনো বডি থাকে না, শুধু হেডার পাঠানো হয়। ক্লায়েন্ট তখন নিজের জমানো ফাইলটিই ব্যবহার করে এবং মেয়াদের সময় বাড়িয়ে নেয়, ফলে প্রচুর ব্যান্ডউইথ সাশ্রয় হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client checks with server: */
GET /assets/style.css HTTP/1.1
If-None-Match: "css-v4"

/* Server answers that content is unchanged: */
HTTP/1.1 304 Not Modified
Date: Sat, 26 Sep 2026 12:00:00 GMT
Cache-Control: public, max-age=86400
ETag: "css-v4"
(Zero body bytes transmitted - browser uses existing cache!)`,
      caption: {
        en: 'A 304 response updates headers without retransmitting unchanged body data.',
        bn: '৩০৪ রেসপন্স বডি না পাঠিয়ে কেবল হেডার নবায়ন করে পুরো ব্যান্ডউইথ বাঁচিয়ে দেয়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP Cache Lifetime & ETag 304 Revalidation Pipeline', bn: 'HTTP ক্যাশ লাইফটাইম ও ETag 304 রিভ্যালিডেশন প্রবাহ' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Cache Freshness and ETag Revalidation Flow"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="200" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="115" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">1. Freshness Check</text><rect x="25" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="75" font-size="11">Age &lt; max-age</text><text x="35" y="90" font-size="10" fill="#10b981">• Fresh cache lease active</text><rect x="25" y="105" width="180" height="48" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="35" y="125" font-size="11" font-weight="bold">Cache Hit (Disk/RAM)</text><text x="35" y="142" font-size="10">0 network bytes, 0ms wait</text><rect x="25" y="160" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="180" font-size="11">Served immediately</text><text x="35" y="195" font-size="10">• No origin server contact</text><rect x="250" y="15" width="200" height="200" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" font-weight="bold" fill="#f59e0b">2. Conditional Duel</text><rect x="260" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="75" font-size="11">Age &gt;= max-age (Stale)</text><text x="270" y="90" font-size="10" fill="#f59e0b">• Revalidation required</text><rect x="260" y="105" width="180" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="125" font-size="11" font-weight="bold">If-None-Match: "etag"</text><text x="270" y="142" font-size="10">Client sends stored hash</text><rect x="260" y="160" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="270" y="180" font-size="11">Server compares entity</text><text x="270" y="195" font-size="10">• Hash equivalence test</text><rect x="485" y="15" width="200" height="200" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="585" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">3. Verdict</text><rect x="495" y="55" width="180" height="65" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="505" y="75" font-size="11" font-weight="bold" fill="#10b981">304 Not Modified</text><text x="505" y="92" font-size="10">• Hashes match</text><text x="505" y="107" font-size="10">• 0 body bytes, renew lease</text><rect x="495" y="130" width="180" height="72" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="505" y="150" font-size="11" font-weight="bold" fill="#3b82f6">200 OK (New Payload)</text><text x="505" y="167" font-size="10">• Hashes differ (modified)</text><text x="505" y="182" font-size="10">• Delivers full body + ETag</text><text x="505" y="195" font-size="9" fill="#3b82f6">Overwrites local cache</text></g></svg>`,
      caption: {
        en: 'Fresh entries answer from local disk; stale entries revalidate with If-None-Match to either receive 304 or new 200 payload.',
        bn: 'তাজা ক্যাশ স্থানীয় মেমোরি থেকে উত্তর দেয়; বাসি ক্যাশ If-None-Match দিয়ে যাচাই করে ৩০৪ বা নতুন ২০০ রেসপন্স সংগ্রহ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Vary Header: Dimension Extension & Cache Poisoning Defense', bn: '৭. Vary হেডার: বহুমাত্রিক ক্যাশিং ও ক্যাশ পয়জনিং প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'By default, caches key responses solely by URL. If a server provides different representations for mobile vs desktop, or compresses with gzip vs brotli, shared caches will serve the wrong format to subsequent visitors. The Vary header instructs caches to include specified request headers (e.g. Vary: Accept-Encoding) in their cache key.',
        bn: 'ক্যাশ সাধারণত কেবল URL দিয়ে ডেটা জমা রাখে। কিন্তু সার্ভার যদি মোবাইল ও ডেস্কটপের জন্য আলাদা ফাইল দেয় বা ব্রটলি কম্প্রেশন ব্যবহার করে, তবে অন্য ব্যবহারকারী ভুল ফাইল পেয়ে যেতে পারে। Vary হেডার ক্যাশকে নির্দেশ দেয় কোন রিকোয়েস্ট হেডারের ওপর ভিত্তি করে আলাদা আলাদা ক্যাশ কপি সংরক্ষণ করতে হবে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Content-Encoding: br
Vary: Accept-Encoding, User-Agent

/* Shared cache now keys by: URL + Accept-Encoding + User-Agent */
/* Prevents clients that lack Brotli support from receiving corrupt compressed streams */`,
      caption: {
        en: 'Vary adds request headers to the primary cache key to prevent mismatched payload delivery.',
        bn: 'Vary হেডার ক্যাশ কিতে বাড়তি শর্ত যোগ করে ভুল ফাইল পরিবেশন প্রতিহত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Modern Directives: stale-while-revalidate & stale-if-error', bn: '৮. আধুনিক ক্যাশ নির্দেশিকা: stale-while-revalidate ও stale-if-error' } },
    {
      type: 'para',
      text: {
        en: 'RFC 5861 introduced modern background revalidation directives. The directive stale-while-revalidate=60 instructs the browser to immediately serve stale cached data for instant page rendering, while silently revalidating in the background. The directive stale-if-error=86400 allows serving cached data if the origin server is temporarily down.',
        bn: 'RFC 5861 আধুনিক ব্যাকগ্রাউন্ড রিভ্যালিডেশন সুবিধা এনেছে। stale-while-revalidate=60 ব্রাউজারকে নির্দেশ দেয় বাসি ক্যাশ ডেটা সাথে সাথে স্ক্রিনে দেখিয়ে ব্যাকগ্রাউন্ডে নতুন ডেটা নামিয়ে নিতে। stale-if-error=86400 সার্ভার ডাউন থাকলেও পুরানো ক্যাশ থেকে ব্যবহারকারীকে সাইট দেখাতে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=300, stale-while-revalidate=60, stale-if-error=86400

/* 0-300 seconds: Fresh (served instantly from cache) */
/* 301-360 seconds: Served instantly from cache, background revalidation triggered */
/* Origin crash: Served from cache for up to 1 day instead of 500 error screen! */`,
      caption: {
        en: 'stale-while-revalidate delivers sub-millisecond perceived latency with background updates.',
        bn: 'stale-while-revalidate ব্যাকগ্রাউন্ডে আপডেট রেখে ব্যবহারকারীকে তাৎক্ষণিক সাইট প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Immutable Asset Hashing: max-age=31536000, immutable', bn: '৯. কনটেন্ট-হ্যাশ ক্যাশিং: max-age=31536000, immutable' } },
    {
      type: 'para',
      text: {
        en: 'Modern bundlers (Vite, Webpack) embed content hashes into compiled asset filenames (e.g. main.8f9b2c.js). Because the filename changes whenever the code changes, these files can be cached permanently without risk of staleness. Tagging them with max-age=31536000, immutable instructs browsers never to send revalidation requests.',
        bn: 'আধুনিক বিল্ড টুলস (Vite, Webpack) ফাইলের নামের সাথে কনটেন্ট হ্যাশ যোগ করে দেয় (যেমন main.8f9b2c.js)। কোড বদলালে ফাইলের নামও বদলে যায়, তাই এই ফাইলগুলো নিরাপদে ১ বছরের জন্য ক্যাশ করা যায়। max-age=31536000, immutable দিলে ব্রাউজার এগুলো আর কখনো সার্ভারে রিভ্যালিডেট করতে পাঠায় না।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Content-Type: application/javascript
Cache-Control: public, max-age=31536000, immutable

/* Even on browser hard-refresh (F5), the browser will never ping the origin! */`,
      caption: {
        en: 'Immutable content-hashed assets achieve 100% cache hit rates with zero revalidation requests.',
        bn: 'হ্যাশযুক্ত ফাইলে immutable দিলে রিভ্যালিডেশন ছাড়াই ১০০% ক্যাশ হিট পাওয়া যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production Caching Strategy: The Three-Tier Matrix', bn: '১০. প্রোডাকশন ক্যাশিং কৌশল: তিন-স্তরের ক্যাশ ম্যাট্রিক্স' } },
    {
      type: 'para',
      text: {
        en: 'A production web architecture applies three distinct caching strategies. First, HTML documents use no-cache to guarantee users immediately receive new deployments. Second, hashed static assets use public, max-age=31536000, immutable for maximum speed. Third, API endpoints use private, no-store for personal data.',
        bn: 'প্রোডাকশন ওয়েবসাইটে ৩ ধরনের ক্যাশ নীতি প্রয়োগ করা হয়। প্রথমত, মূল HTML ফাইল no-cache দিয়ে রাখা হয় যাতে নতুন আপডেট দ্রুত সবাই পায়। দ্বিতীয়ত, হ্যাশযুক্ত CSS বা JS ফাইল public, max-age=31536000, immutable দিয়ে ৩১৫৩৬০০০ সেকেন্ডের জন্য ক্যাশ করা হয়। তৃতীয়ত, গোপনীয় API তথ্যে private, no-store রাখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function setProductionCacheHeaders(res, fileType) {
  switch (fileType) {
    case "html":
      // Always revalidate entry point:
      res.setHeader("Cache-Control", "no-cache");
      break;
    case "hashed-asset":
      // Permanent cache for hashed CSS/JS/images:
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      break;
    case "dynamic-api":
      // Private or short-lived data:
      res.setHeader("Cache-Control", "private, no-cache");
      break;
  }
}

console.log("Three-tier matrix guarantees instant deployments and maximum speed");
// Output: Three-tier matrix guarantees instant deployments and maximum speed`,
      caption: {
        en: 'Segregating HTML, assets, and APIs creates a resilient, high-speed caching architecture.',
        bn: 'HTML, অ্যাসেট ও API-র জন্য আলাদা ক্যাশ নীতি সাইটের গতি ও নতুন আপডেট দ্রুত নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-frs-ex1',
      kind: 'predict',
      topic: 'http: revalidation status code',
      question: {
        en: 'Which HTTP status code is returned by a web server during conditional revalidation to indicate that cached content is still valid, transmitting zero body bytes?',
        bn: 'কন্ডিশনাল রিভ্যালিডেশনের সময় ক্যাশ করা ফাইল এখনো তাজা আছে এবং কোনো বডি পাঠানোর দরকার নেই তা নির্দেশ করতে সার্ভার কোন স্ট্যাটাস কোড ফেরত পাঠায়?'
      },
      code: `/* Server confirms cached file is unchanged */
/* HTTP/1.1 ____________ Not Modified */`,
      answer: '304',
      accept: ['304', '304 Not Modified'],
      hint: {
        en: 'Status code 304.',
        bn: 'স্ট্যাটাস কোড ৩০৪।'
      },
      explanation: {
        en: 'HTTP 304 Not Modified informs the client that the cached copy is fresh, saving bandwidth by omitting the body payload.',
        bn: 'HTTP 304 Not Modified ব্রাউজারকে জানিয়ে দেয় ফাইল অপরিবর্তিত আছে, ফলে কোনো বাড়তি ডেটা নামানোর দরকার হয় না।'
      }
    },
    {
      id: 'htt-frs-ex2',
      kind: 'mcq',
      topic: 'http: no-cache vs no-store',
      question: {
        en: 'What is the exact behavioral difference between Cache-Control: no-cache and Cache-Control: no-store?',
        bn: 'Cache-Control: no-cache এবং Cache-Control: no-store-এর মধ্যে সঠিক পার্থক্য কী?'
      },
      options: [
        { en: 'no-cache allows storing the file but requires revalidation before every use; no-store forbids saving the file anywhere', bn: 'no-cache ফাইল জমা রাখতে দেয় কিন্তু প্রতিবার যাচাই আবশ্যক করে; no-store কোথাও কোনো ফাইল সেভ করা পুরোপুরি নিষিদ্ধ করে' },
        { en: 'no-cache is for images; no-store is for HTML', bn: 'no-cache ছবির জন্য আর no-store এইচটিএমএলের জন্য' },
        { en: 'no-store automatically deletes the database', bn: 'no-store ডাটাবেস মুছে ফেলে' },
        { en: 'There is no difference; they are aliases', bn: 'এরা একই জিনিস' }
      ],
      answer: 0,
      hint: {
        en: 'Store with revalidation vs never store.',
        bn: 'যাচাইসহ সংরক্ষণ বনাম কখনোই সংরক্ষণ নয়।'
      },
      explanation: {
        en: 'no-cache allows caches to store responses but mandates conditional revalidation before serving. no-store forbids retaining bytes entirely.',
        bn: 'no-cache ক্যাশ করার সুযোগ দেয় কিন্তু ব্যবহারের আগে রিভ্যালিডেশন চায়। no-store কোনো ক্যাশ রাখা সম্পূর্ণ নিষেধ করে।'
      }
    },
    {
      id: 'htt-frs-ex3',
      kind: 'mcq',
      topic: 'http: immutable cache directive',
      question: {
        en: 'Why is "Cache-Control: public, max-age=31536000, immutable" suitable for content-hashed assets like "bundle.7a8b9c.js"?',
        bn: 'কনটেন্ট-হ্যাশযুক্ত ফাইল যেমন "bundle.7a8b9c.js"-এর জন্য "Cache-Control: public, max-age=31536000, immutable" কেন আদর্শ?'
      },
      options: [
        { en: 'Because the file content is guaranteed never to change; if the code updates, the bundler generates an entirely new filename', bn: 'কারণ ফাইলের কোড কখনো বদলাবে না; কোড বদলালে বিল্ড টুল সম্পূর্ণ নতুন নামের ফাইল তৈরি করে' },
        { en: 'Because immutable compresses the file with gzip', bn: 'কারণ immutable ফাইল জিপ করে' },
        { en: 'Because browsers do not understand numbers', bn: 'কারণ ব্রাউজার সংখ্যা বোঝে না' },
        { en: 'Because immutable disables JavaScript errors', bn: 'কারণ এটি এরর বন্ধ করে' }
      ],
      answer: 0,
      hint: {
        en: 'Unique hash in filename guarantees immutability.',
        bn: 'ফাইলের নামে থাকা অনন্য হ্যাশ নিশ্চিত করে কোড অপরিবর্তনীয়।'
      },
      explanation: {
        en: 'When URLs contain cryptographic content hashes, changing the file changes the URL. Existing files are truly immutable and can be cached forever.',
        bn: 'কোড পরিবর্তন হলে নতুন নামের ফাইল তৈরি হয়, তাই পুরনো নামের ফাইলটি আজীবন ক্যাশ করলেও কোনো ভুল বাসি ডেটা পাওয়ার ভয় থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'htt-frs-quiz',
    title: { en: 'HTTP Caching & Freshness Quiz', bn: 'HTTP ক্যাশিং ও সতেজতা কুইজ' },
    questions: [
      {
        id: 'hfq1',
        kind: 'mcq',
        topic: 'http: Vary header importance',
        question: {
          en: 'What problem does the "Vary: Accept-Encoding" header prevent in shared CDN caches?',
          bn: 'শেয়ার্ড সিডিএন ক্যাশে "Vary: Accept-Encoding" হেডার কোন সমস্যাটি সমাধান করে?'
        },
        options: [
          { en: 'It prevents the CDN from serving compressed Brotli/Gzip responses to older browsers that only support uncompressed plain text', bn: 'এটি পুরনো ব্রাউজারগুলোতে ভুলবশত কমপ্রেসড ব্রটলি বা জিপ ফাইল পরিবেশন করা প্রতিহত করে' },
          { en: 'It encrypts the communication with SSL', bn: 'এটি এসএসএল দিয়ে এনক্রিপ্ট করে' },
          { en: 'It clears the cache every 5 minutes', bn: 'এটি প্রতি ৫ মিনিটে ক্যাশ সাফ করে' },
          { en: 'It reduces image file sizes', bn: 'ছবির সাইজ কমায়' }
        ],
        answer: 0,
        hint: {
          en: 'Matches compression capability to client.',
          bn: 'ক্লায়েন্টের সক্ষমতা অনুযায়ী সঠিক কম্প্রেশন মেলায়।'
        },
        explanation: {
          en: 'Vary tells caches that the response differs based on Accept-Encoding, storing separate cache copies for gzip, brotli, and uncompressed clients.',
          bn: 'Vary হেডার ক্যাশকে জানিয়ে দেয় কম্প্রেশনের ওপর ভিত্তি করে আলাদা আলাদা কপি রাখতে হবে যাতে ব্রাউজার সঠিক ফাইল পায়।'
        }
      },
      {
        id: 'hfq2',
        kind: 'mcq',
        topic: 'http: stale-while-revalidate benefit',
        question: {
          en: 'What is the main user experience benefit of using the "stale-while-revalidate" Cache-Control directive?',
          bn: '"stale-while-revalidate" নির্দেশিকা ব্যবহারের মূল ব্যবহারকারী সুবিধা কী?'
        },
        options: [
          { en: 'The browser renders pages instantly using cached data while asynchronously updating the cache in the background', bn: 'ব্রাউজার ক্যাশের ডেটা দিয়ে তাৎক্ষণিকভাবে স্ক্রিন রেন্ডার করে এবং ব্যাকগ্রাউন্ডে নতুন ডেটা নামিয়ে নেয়' },
          { en: 'It deletes outdated cookies automatically', bn: 'এটি পুরনো কুকি মুছে ফেলে' },
          { en: 'It bypasses database queries on every click', bn: 'ডাটাবেস কোয়েরি বন্ধ রাখে' },
          { en: 'It prevents users from taking screenshots', bn: 'স্ক্রিনশট নেওয়া আটকায়' }
        ],
        answer: 0,
        hint: {
          en: 'Instant render with background update.',
          bn: 'তাৎক্ষণিক ডিসপ্লে এবং পেছনে ব্যাকগ্রাউন্ডে আপডেট।'
        },
        explanation: {
          en: 'stale-while-revalidate eliminates perceived network latency by immediately serving cached responses while fetching the latest update in the background.',
          bn: 'stale-while-revalidate কোনো লোডিং সময় ছাড়াই সাথে সাথে সাইট খুলে দেয় এবং আড়ালে নতুন ডেটা দিয়ে ক্যাশ আপডেট করে রাখে।'
        }
      },
      {
        id: 'hfq3',
        kind: 'mcq',
        topic: 'http: no-cache vs no-store directive',
        question: {
          en: 'What is the crucial operational difference between "Cache-Control: no-cache" and "Cache-Control: no-store"?',
          bn: '"Cache-Control: no-cache" এবং "Cache-Control: no-store"-এর মধ্যকার প্রধান কার্যকরী পার্থক্য কী?'
        },
        options: [
          { en: 'no-cache allows caching but forces server revalidation (ETag check) before every reuse; no-store strictly prohibits storing any byte to disk or memory', bn: 'no-cache ফাইলে জমা রাখতে দেয় কিন্তু ব্যবহারের আগে প্রতিবার যাচাই করতে বাধ্য করে; আর no-store মেমোরি বা ডিস্কে কোনো ফাইল সংরক্ষণ সম্পূর্ণ নিষিদ্ধ করে' },
          { en: 'no-store is only for CSS files and no-cache is for JavaScript', bn: 'no-store কেবল সিএসএসের জন্য আর no-cache জাভাস্ক্রিপ্টের জন্য' },
          { en: 'no-cache deletes all browser history', bn: 'no-cache সব ব্রাউজার হিস্ট্রি মুছে দেয়' },
          { en: 'Both directives mean exactly the same thing', bn: 'দুটো ডিরেক্টিভ হুবহু একই অর্থ বহন করে' }
        ],
        answer: 0,
        hint: {
          en: 'no-cache revalidates; no-store never stores.',
          bn: 'no-cache যাচাই করায়; no-store কভু জমা রাখে না।'
        },
        explanation: {
          en: 'Despite its misleading name, no-cache permits storage while mandating validation prior to release; no-store prevents sensitive data persistence entirely.',
          bn: 'নামে বিভ্রান্তি থাকলেও no-cache ডেটা সংরক্ষণ করে ব্যবহারের আগে যাচাই করায়; আর no-store কোনো ডেটা সেভ রাখতেই নিষেধ করে।'
        }
      },
      {
        id: 'hfq4',
        kind: 'mcq',
        topic: 'http: vary header purpose',
        question: {
          en: 'Why is the "Vary: Accept-Encoding" response header critical when serving gzipped or brotli-compressed responses from shared edge CDNs?',
          bn: 'শেয়ার্ড এজ সিডিএন থেকে কমপ্রেস করা ডেটা পরিবেশনের সময় "Vary: Accept-Encoding" হেডার কেন অত্যন্ত জরুরি?'
        },
        options: [
          { en: 'It prevents CDNs from serving compressed binary streams to legacy clients that cannot decompress them', bn: 'এটি সিডিএনকে এমন ক্লায়েন্টের কাছে কমপ্রেস করা ডেটা পাঠানো থেকে বিরত রাখে যারা কম্প্রেশন ডিকোড করতে অক্ষম' },
          { en: 'It reduces CPU usage to zero', bn: 'সিপিইউ ব্যবহার শূন্য করে ফেলে' },
          { en: 'It speeds up DNS lookup speeds', bn: 'ডিএনএস গতি দ্রুত করে' },
          { en: 'It encrypts the payload with TLS keys', bn: 'টিএলএস কি দিয়ে ডেটা লক করে' }
        ],
        answer: 0,
        hint: {
          en: 'Differentiates cache copies based on client decompression support.',
          bn: 'ক্লায়েন্টের ডিকম্প্রেশন সক্ষমতার ওপর ভিত্তি করে ক্যাশ আলাদা রাখে।'
        },
        explanation: {
          en: 'The Vary header extends the cache key to incorporate the specified request header, preventing cache poisoning across incompatible client decoders.',
          bn: 'Vary হেডার ক্যাশ কি-তে নির্দিষ্ট রিকোয়েস্ট হেডার যোগ করে ভুল ফরম্যাট পরিবেশন বা ক্যাশ পয়জনিং ঠেকায়।'
        }
      }
    ]
  }
};
