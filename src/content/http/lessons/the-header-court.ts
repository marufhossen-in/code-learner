import type { Lesson } from '../../../lib/types';

export const theHeaderCourtLesson: Lesson = {
  slug: 'the-header-court',
  tech: 'http',
  title: {
    en: 'HTTP Headers Anatomy: Hop-by-Hop, Framing, Authority & Security',
    bn: 'HTTP হেডার্স গঠন: হপ-বাই-হপ, ফ্রেমিং, অথরিটি ও নিরাপত্তা'
  },
  summary: {
    en: 'Master HTTP header mechanics across 10 structured topics. Understand the strict Name: value syntax, case-insensitivity, and HTTP/2 lowercase rules. Distinguish Request, Response, and Representation headers. Study the mandatory Host header and its evolution to :authority. Learn body boundary framing with Content-Length vs Transfer-Encoding chunked. Explore HTTP request smuggling vulnerabilities, hop-by-hop headers, proxy tracking with Via and X-Forwarded-For, and browser-forbidden headers.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP হেডার মেকানিজম আয়ত্ত করুন। Name: value সিনট্যাক্স, কেস-ইনসেনসিটিভিটি এবং HTTP/2 লোয়ারকেস নিয়ম বুঝুন। Request, Response এবং Representation হেডারের পার্থক্য জানুন। বাধ্যতামূলক Host হেডার এবং :authority সিউডো-হেডার শিখুন। Content-Length বনাম Transfer-Encoding chunked ফ্রেমিং জানুন। রিকোয়েস্ট স্মাগলিং নিরাপত্তা ত্রুটি, হপ-বাই-হপ হেডার, X-Forwarded-For প্রক্সি ট্র্যাকিং এবং ব্রাউজারে নিষিদ্ধ হেডার আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-negotiation-salon',
    tech: 'http',
    title: {
      en: 'The Negotiation Salon: Content Negotiation, Accept Headers & Quality Factors',
      bn: 'আলোচনা সেলুন: কনটেন্ট সমঝোতা, Accept হেডার্স ও কোয়ালিটি ফ্যাক্টর'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. HTTP Header Syntax: Name, Colon & Value Rules', bn: '১. HTTP হেডার সিনট্যাক্স: নাম, কোলন ও ভ্যালু নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'HTTP headers are key-value pairs formatted as "Field-Name: Value". Field names are alphanumeric ASCII tokens with no whitespace. In HTTP/1.1, header names are case-insensitive. In modern HTTP/2 and HTTP/3, binary framing requires all header names to be strictly lowercased.',
        bn: 'HTTP হেডারগুলো "Field-Name: Value" ফরম্যাটে থাকে। ফিল্ডের নামে কোনো ফাঁকা স্থান থাকে না। HTTP/1.1-এ হেডার নাম কেস-ইনসেনসিটিভ, অর্থাৎ বড় বা ছোট হাতের অক্ষরের তফাত নেই। তবে আধুনিক HTTP/2 এবং HTTP/3 বাইনারি ফ্রেমিংয়ে সব হেডারের নাম সম্পূর্ণ ছোট হাতের অক্ষরে লেখা বাধ্যতামূলক।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* HTTP/1.1 - Case insensitive: */
Host: api.codeshikhon.com
Content-Type: application/json

/* HTTP/2 and HTTP/3 - Strictly lowercased pseudo-headers & keys: */
:authority: api.codeshikhon.com
:method: POST
:path: /orders
content-type: application/json`,
      caption: {
        en: 'HTTP/1.1 allows mixed case headers while HTTP/2 and HTTP/3 enforce lowercased wire keys.',
        bn: 'HTTP/1.1 যে-কোনো কেস গ্রহণ করলেও HTTP/2 ও HTTP/3 কঠোরভাবে ছোট হাতের অক্ষর প্রয়োগ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Header Classification: Request, Response & Representation', bn: '২. হেডারের শ্রেণিবিভাগ: Request, Response ও Representation' } },
    {
      type: 'para',
      text: {
        en: 'RFC 9110 organizes message fields into four functional classes. Request metadata (User-Agent, Accept) modifies requests or provides client context. Response directives (Server, Location) communicate server state. Representation attributes (Content-Type, Content-Encoding) describe payload format. Finally, general headers (Date, Connection) govern underlying transport.',
        bn: 'RFC 9110 হেডারগুলোকে ৪ ভাগে ভাগ করেছে। Request হেডার (যেমন User-Agent, Accept) ক্লায়েন্ট সম্পর্কে তথ্য দেয়। Response হেডার (যেমন Server, Location) সার্ভারের অবস্থা জানায়। Representation হেডার (Content-Type, Content-Encoding) বডির আকার ও ধরন বর্ণনা করে। General হেডার (Date, Connection) যোগাযোগের নিয়ম নির্ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express server demonstrating distinct header categories:
function applyHeaders(res) {
  // Response header:
  res.setHeader("Server", "Codeshikhon-Edge/2.0");
  
  // Representation headers:
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Content-Encoding", "gzip");
  
  // Security header:
  res.setHeader("X-Content-Type-Options", "nosniff");
}

console.log("Headers categorized by functional responsibility");
// Output: Headers categorized by functional responsibility`,
      caption: {
        en: 'Separating headers by category clarifies their role in communication.',
        bn: 'শ্রেণিবিভাগ অনুযায়ী হেডার ভাগ করলে তাদের ব্যবহারিক উদ্দেশ্য স্পষ্ট হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Mandatory Authority Header: Host and :authority', bn: '৩. বাধ্যতামূলক অথরিটি হেডার: Host ও :authority' } },
    {
      type: 'para',
      text: {
        en: 'The Host header is the only mandatory header in HTTP/1.1. In modern cloud environments, a single IP address hosts thousands of independent websites. The Host header tells the reverse proxy which virtual host should receive the request. In HTTP/2 and HTTP/3, this role is handled by the :authority pseudo-header.',
        bn: 'HTTP/1.1-এ Host একমাত্র বাধ্যতামূলক হেডার। আধুনিক ক্লাউডে একটিমাত্র আইপি অ্যাড্রেসে হাজার হাজার ওয়েবসাইট চলে। Host হেডার রিভার্স প্রক্সিকে নির্দেশ দেয় কোন নির্দিষ্ট ডোমেইনে রিকোয়েস্ট পাঠাতে হবে। HTTP/2 এবং HTTP/3-তে এই দায়িত্বটি :authority সিউডো-হেডার পালন করে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Without Host header, HTTP/1.1 origin returns 400 Bad Request! */
GET /index.html HTTP/1.1
Host: store.codeshikhon.com:443

/* Nginx / Cloudflare uses Host to route to the correct virtual server block */`,
      caption: {
        en: 'The Host header allows reverse proxies to route multiple domains on a shared IP address.',
        bn: 'Host হেডার একই আইপিতে একাধিক ভিন্ন ওয়েবসাইট সফলভাবে পরিচালনা করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Message Framing: Content-Length vs Transfer-Encoding: chunked', bn: '৪. মেসেজ ফ্রেমিং: Content-Length বনাম Transfer-Encoding: chunked' } },
    {
      type: 'para',
      text: {
        en: 'To parse HTTP messages over TCP, the receiver must know where the body ends. When the payload size is known in advance, Content-Length specifies the exact byte count. For streaming or dynamic data, Transfer-Encoding: chunked sends data in size-prefixed hex blocks terminated by a zero-length chunk.',
        bn: 'টিসিপি কানেকশনে রিকোয়েস্টের বডি কোথায় শেষ হয়েছে তা জানা অত্যন্ত জরুরি। বডির আকার জানা থাকলে Content-Length হেডারে মোট বাইট সংখ্যা উল্লেখ থাকে। আর লাইভ স্ট্রিমিংয়ের ক্ষেত্রে Transfer-Encoding: chunked ব্যবহার করা হয় যা খণ্ডে খণ্ডে ডেটা পাঠায় এবং শেষে একটি শূন্য বাইট দিয়ে সমাপ্তি জানায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Fixed payload framing: */
POST /api/upload HTTP/1.1
Content-Length: 15

{"status":"ok"}

/* Dynamic streaming framing: */
HTTP/1.1 200 OK
Transfer-Encoding: chunked

7
{"id":9
10
,"item":"book"}
0`,
      caption: {
        en: 'Content-Length uses fixed byte counts; chunked transfer streams variable blocks.',
        bn: 'Content-Length নির্দিষ্ট বাইট সংখ্যা দেয়; chunked পরিবর্তনশীল চাঙ্ক পাঠায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Request Smuggling Hazards: Conflicting Framing Headers', bn: '৫. রিকোয়েস্ট স্মাগলিং ঝুঁকি: পরস্পরবিরোধী ফ্রেমিং হেডার' } },
    {
      type: 'para',
      text: {
        en: 'HTTP Request Smuggling occurs when a frontend proxy and backend server disagree on body boundaries. If a request includes both Content-Length and Transfer-Encoding, RFC 7230 mandates that Transfer-Encoding takes precedence. If one server prioritizes Content-Length instead, an attacker can smuggle a hidden second request inside the pipeline.',
        bn: 'HTTP Request Smuggling তখন ঘটে যখন ফ্রন্টএন্ড প্রক্সি এবং পেছনের নোড সার্ভার বডির সমাপ্তি নিয়ে দ্বিমত পোষণ করে। যদি একই সাথে Content-Length ও Transfer-Encoding দেওয়া থাকে, তবে RFC 7230 অনুযায়ী Transfer-Encoding প্রাধান্য পাবে। যদি ১টি সার্ভার ভুল করে Content-Length-কে প্রাধান্য দেয়, তবে হ্যাকার পাইপলাইনে গোপন দ্বিতীয় রিকোয়েস্ট ঢুকিয়ে দিতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Modern HTTP servers reject conflicting framing headers:
function validateFramingHeaders(headers) {
  const hasContentLength = "content-length" in headers;
  const isChunked = headers["transfer-encoding"]?.includes("chunked");

  if (hasContentLength && isChunked) {
    // RFC 7230 §3.3.3: Reject immediately to prevent request smuggling!
    return { status: 400, error: "Conflicting framing headers rejected" };
  }
  return { status: 200, valid: true };
}

console.log("Safe framing guard prevents request smuggling attacks");
// Output: Safe framing guard prevents request smuggling attacks`,
      caption: {
        en: 'Strict rejection of conflicting framing headers eliminates request smuggling vulnerabilities.',
        bn: 'পরস্পরবিরোধী ফ্রেমিং হেডার প্রত্যাখ্যান করা রিকোয়েস্ট স্মাগলিং আক্রমণ প্রতিহত করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP Request Smuggling Framing Discrepancy', bn: 'HTTP রিকোয়েস্ট স্মাগলিং ফ্রেমিং বিরোধ চিত্র' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Request Smuggling CL-TE Framing Conflict Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="310" height="200" rx="8" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="170" y="40" text-anchor="middle" font-weight="bold" fill="#ef4444">Frontend Proxy: Uses Content-Length</text><rect x="30" y="55" width="280" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="75" font-size="11">Content-Length: 13  |  Transfer-Encoding: chunked</text><text x="40" y="90" font-size="10" fill="#ef4444">• Reads full 13 bytes as single request body</text><rect x="30" y="105" width="280" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="125" font-size="11">Forwards raw bytes across persistent TCP pipe</text><text x="40" y="140" font-size="10">• Entire stream treated as Request 1</text><rect x="30" y="155" width="280" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="40" y="175" font-size="11">Attacker payload passes security gate</text><text x="40" y="192" font-size="10" fill="#ef4444">• WAF inspection completely bypassed</text><rect x="375" y="15" width="310" height="200" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="530" y="40" text-anchor="middle" font-weight="bold" fill="#f59e0b">Backend Server: Uses Transfer-Encoding</text><rect x="390" y="55" width="280" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="400" y="75" font-size="11">Reads chunk: 0\\r\\n\\r\\n (Terminates Request 1)</text><text x="400" y="90" font-size="10" fill="#f59e0b">• Evaluates 0 chunk as end of body</text><rect x="390" y="105" width="280" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="400" y="125" font-size="11" font-weight="bold" fill="#ef4444">Trailing Bytes Smuggled to Next User!</text><text x="400" y="140" font-size="10" fill="#ef4444">• "POST /admin" prefix prepended to socket</text><rect x="390" y="155" width="280" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="400" y="175" font-size="11">Next innocent user request gets poisoned</text><text x="400" y="192" font-size="10" fill="#10b981">• Fix: Reject requests with both CL &amp; TE</text></g></svg>`,
      caption: {
        en: 'Request smuggling exploits parsing disagreements between frontend proxies and backends. Rejecting dual framing headers neutralizes the vulnerability.',
        bn: 'রিকোয়েস্ট স্মাগলিং প্রক্সি ও সার্ভারের সীমানা নির্ধারণের বিরোধকে কাজে লাগায়। উভয় হেডার থাকা রিকোয়েস্ট বাতিল করা এই ঝুঁকি দূর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Payload Representation: Content-Type & MIME Sniffing Defense', bn: '৬. পেলোড রিপ্রেজেন্টেশন: Content-Type ও MIME স্নিফিং প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'The Content-Type header informs the recipient how to deserialize the raw binary payload into meaningful data. If this header is missing, browsers may attempt MIME-sniffing, guessing the file type from content. Attackers exploit this to execute scripts disguised as images. Always add X-Content-Type-Options: nosniff.',
        bn: 'Content-Type হেডার রিসিভারকে জানিয়ে দেয় কাঁচা বাইটগুলোকে কীভাবে টেক্সট বা অবজেক্টে রূপান্তর করতে হবে। এই হেডার না থাকলে ব্রাউজার নিজে থেকে ফাইল টাইপ অনুমান (MIME-sniffing) করার চেষ্টা করে। হ্যাকাররা ছবির ভেতর ক্ষতিকর স্ক্রিপ্ট ঢুকিয়ে এর অপব্যবহার করে। তাই সর্বদা X-Content-Type-Options: nosniff ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
X-Content-Type-Options: nosniff

/* nosniff forces browsers to respect declared Content-Type, blocking XSS attacks */`,
      caption: {
        en: 'The nosniff header prevents browsers from overriding the declared MIME type.',
        bn: 'nosniff হেডার ব্রাউজারকে ঘোষিত MIME টাইপ মেনে চলতে বাধ্য করে আক্রমণ আটকায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Hop-by-Hop vs End-to-End Headers: The Relay Visa', bn: '৭. Hop-by-Hop বনাম End-to-End হেডার: ট্রানজিট নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'HTTP headers differ in transmission scope. End-to-end headers (Content-Type, Authorization, ETag) travel intact across all proxies to the destination. Hop-by-hop headers (Connection, Keep-Alive, Upgrade, Proxy-Authorization) apply strictly to a single network hop. Intermediary proxies must strip all hop-by-hop headers before forwarding requests.',
        bn: 'HTTP হেডার পরিবহনের পরিসীমা অনুযায়ী দুই ধরনের হয়। End-to-end হেডার (যেমন Content-Type, Authorization) অপরিবর্তিত অবস্থায় মূল সার্ভার পর্যন্ত যায়। Hop-by-hop হেডার (যেমন Connection, Keep-Alive, Upgrade) কেবল দুটি নোডের মধ্যকার এক ধাপের জন্য প্রযোজ্য। প্রক্সি সার্ভারগুলোকে পরবর্তী ধাপে পাঠানোর আগে এই হেডারগুলো মুছে ফেলতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client sends hop-by-hop header to Reverse Proxy: */
GET /chat HTTP/1.1
Connection: Upgrade
Upgrade: websocket

/* Proxy handles transport handshake and strips hop-by-hop keys before upstream! */`,
      caption: {
        en: 'Proxies strip hop-by-hop headers to prevent connection protocol mismatches.',
        bn: 'প্রক্সি সার্ভার প্রোটোকল গোলযোগ এড়াতে hop-by-hop হেডারগুলো সরিয়ে ফেলে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Intermediary Provenance: Via, Server & X-Forwarded-For Fraud', bn: '৮. প্রক্সি ট্রেসিং: Via, Server ও X-Forwarded-For নিরাপত্তা' } },
    {
      type: 'para',
      text: {
        en: 'When traffic travels through multiple proxies, tracking origin provenance is essential. The Via header logs each intermediary hop. Proxies append the original client IP to X-Forwarded-For. However, clients can forge incoming X-Forwarded-For headers. Servers must only trust proxy headers originating from verified internal network IPs.',
        bn: 'ট্রাফিক যখন একাধিক প্রক্সির মধ্য দিয়ে যায়, তখন মূল ক্লায়েন্ট কে ছিল তা জানা দরকার। Via হেডার প্রতিটি প্রক্সির নাম রেকর্ড করে। প্রক্সি সার্ভার X-Forwarded-For হেডারে ক্লায়েন্টের আসল আইপি যুক্ত করে। কিন্তু আক্রমণকারী নিজে থেকেই এই হেডার জাল করতে পারে, তাই অভ্যন্তরীণ বিশ্বস্ত প্রক্সির পাঠানো আইপি-ই কেবল গ্রহণ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Request arriving at origin backend through Cloudflare and internal Nginx: */
X-Forwarded-For: 203.0.113.195, 172.18.0.2
X-Forwarded-Proto: https
Via: 1.1 cloudflare, 1.1 nginx

/* Backend takes the leftmost IP from trusted proxy chains */`,
      caption: {
        en: 'X-Forwarded headers preserve original client IP and protocol across proxy chains.',
        bn: 'X-Forwarded হেডার প্রক্সি চেইনের মধ্য দিয়ে ক্লায়েন্টের আসল আইপি ও প্রোটোকল রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Client Fingerprinting: User-Agent & Referrer-Policy', bn: '৯. ক্লায়েন্ট ফিঙ্গারপ্রিন্টিং: User-Agent ও Referrer-Policy' } },
    {
      type: 'para',
      text: {
        en: 'The User-Agent header identifies the client browser, operating system, and rendering engine. The Referer header indicates the previous webpage URI that linked to the requested resource. To protect user privacy and avoid leaking sensitive URL tokens, modern applications enforce strict Referrer-Policy directives.',
        bn: 'User-Agent হেডার ক্লায়েন্টের ব্রাউজার, অপারেটিং সিস্টেম ও ডিভাইস সম্পর্কে তথ্য দেয়। Referer হেডার আগের ওয়েব পেজের ঠিকানা জানিয়ে দেয় যেখান থেকে লিংকে ক্লিক করা হয়েছে। ব্যবহারকারীর গোপনীয়তা রক্ষা করতে এবং ইউআরএলে থাকা টোকেন ফাঁস ঠেকাতে Referrer-Policy হেডার ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Protect URL query parameters from leaking to external domains: */
Referrer-Policy: strict-origin-when-cross-origin

/* Same-origin requests send full path; cross-origin requests send domain only */`,
      caption: {
        en: 'Referrer-Policy restricts URL leakage to external third-party services.',
        bn: 'Referrer-Policy তৃতীয় পক্ষের কাছে গোপন ইউআরএল ফাঁস হওয়া রোধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The Merge Rule & Forbidden Headers in JavaScript', bn: '১০. হেডার মার্জ নিয়ম ও জাভাস্ক্রিপ্টে নিষিদ্ধ হেডার' } },
    {
      type: 'para',
      text: {
        en: 'When identical headers appear multiple times in a message, RFC 9110 dictates they are merged into a single comma-separated value. The sole exception is Set-Cookie, which contains internal commas in date strings. For security, browser Fetch APIs prohibit JavaScript code from setting sensitive headers like Host, Cookie, or Content-Length.',
        bn: 'একই হেডার একাধিকবার পাঠানো হলে RFC ৯১১০ নিয়ম অনুযায়ী কমা দিয়ে সেগুলো এক লাইনে যুক্ত করা হয়। একমাত্র ব্যতিক্রম হলো Set-Cookie, কারণ এর ভেতরের তারিখে কমা থাকে। নিরাপত্তার স্বার্থে ব্রাউজারের জাভাস্ক্রিপ্ট (Fetch API) থেকে Host, Cookie বা Content-Length-এর মতো সংবেদনশীল হেডার ম্যানুয়ালি সেট করা নিষিদ্ধ।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// In browser JavaScript (Fetch API):
// ❌ FORBIDDEN: Browser blocks setting sensitive headers directly:
// fetch('/api', { headers: { 'Host': 'evil.com', 'Cookie': 'sid=fake' } });

// ✅ ALLOWED: Application-specific headers:
fetch('/api', {
  headers: {
    'Accept': 'application/json',
    'X-Client-Version': '2.4.0'
  }
});

console.log("Browser sandbox protects critical headers from script manipulation");
// Output: Browser sandbox protects critical headers from script manipulation`,
      caption: {
        en: 'The browser sandbox guards forbidden headers from client-side script manipulation.',
        bn: 'ব্রাউজার স্যান্ডবক্স সংবেদনশীল হেডারগুলোকে স্ক্রিপ্ট দ্বারা বিকৃত হওয়া থেকে সুরক্ষিত রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-hdr-ex1',
      kind: 'predict',
      topic: 'http: mandatory HTTP/1.1 header',
      question: {
        en: 'Which request header is the ONLY mandatory header required in every valid HTTP/1.1 request, identifying the target domain for virtual hosting?',
        bn: 'ভার্চুয়াল হোস্টিংয়ের জন্য কোন রিকোয়েস্ট হেডারটি প্রতিটি বৈধ HTTP/1.1 রিকোয়েস্টে থাকা একমাত্র বাধ্যতামূলক হেডার?'
      },
      code: `/* Mandatory HTTP/1.1 header identifying the domain */
/* ____________: api.codeshikhon.com */`,
      answer: 'Host',
      accept: ['Host', 'host'],
      hint: {
        en: 'The Host header.',
        bn: 'Host হেডার।'
      },
      explanation: {
        en: 'The Host header is mandatory in HTTP/1.1, allowing reverse proxies to route traffic to the intended virtual host.',
        bn: 'HTTP/1.1-এ Host হেডার থাকা আবশ্যক যা দেখে প্রক্সি বুঝতে পারে কোন ডোমেইনে রিকোয়েস্ট পাঠাতে হবে।'
      }
    },
    {
      id: 'htt-hdr-ex2',
      kind: 'mcq',
      topic: 'http: hop-by-hop vs end-to-end',
      question: {
        en: 'Which of the following is a Hop-by-Hop header that must be stripped by proxy servers before forwarding the message?',
        bn: 'নিচের কোনটি একটি Hop-by-Hop হেডার যা প্রক্সি সার্ভার পরবর্তী ধাপে পাঠানোর আগে মুছে ফেলতে বাধ্য?'
      },
      options: [
        { en: 'Connection', bn: 'Connection' },
        { en: 'Content-Type', bn: 'Content-Type' },
        { en: 'Authorization', bn: 'Authorization' },
        { en: 'ETag', bn: 'ETag' }
      ],
      answer: 0,
      hint: {
        en: 'Connection header controls transport.',
        bn: 'Connection হেডার ট্রান্সপোর্ট নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'Connection is a hop-by-hop header. Proxies must strip it along with any headers listed in its value.',
        bn: 'Connection একটি hop-by-hop হেডার যা প্রতি ধাপে পরিবর্তিত বা অপসারিত হতে হয়।'
      }
    },
    {
      id: 'htt-hdr-ex3',
      kind: 'mcq',
      topic: 'http: request smuggling cause',
      question: {
        en: 'What architectural condition makes an application vulnerable to HTTP Request Smuggling attacks?',
        bn: 'কোন স্থাপত্যগত অমিলের কারণে একটি ওয়েব অ্যাপ্লিকেশন HTTP Request Smuggling আক্রমণের শিকার হয়?'
      },
      options: [
        { en: 'Frontend proxies and backend servers disagree on body boundaries due to conflicting Content-Length and Transfer-Encoding headers', bn: 'পরস্পরবিরোধী Content-Length ও Transfer-Encoding হেডারের কারণে ফ্রন্টএন্ড প্রক্সি ও ব্যাকএন্ড সার্ভার বডির সমাপ্তি নিয়ে দ্বিমত পোষণ করলে' },
        { en: 'The server uses HTTPS encryption', bn: 'সার্ভার HTTPS ব্যবহার করলে' },
        { en: 'Images are compressed with WebP', bn: 'ছবি WebP ফরম্যাটে থাকলে' },
        { en: 'The database runs on port 5432', bn: 'ডাটাবেস ৫৪৩২ পোর্টে চললে' }
      ],
      answer: 0,
      hint: {
        en: 'Conflicting Content-Length and Transfer-Encoding.',
        bn: 'পরস্পরবিরোধী Content-Length এবং Transfer-Encoding।'
      },
      explanation: {
        en: 'Discrepancies in framing interpretation between chained servers allow attackers to smuggle unparsed requests inside persistent TCP streams.',
        bn: 'ফ্রেমিং হেডারের ব্যাখ্যায় প্রক্সি ও সার্ভারের মধ্যে অমিল হলে আক্রমণকারী গোপন রিকোয়েস্ট ঢুকিয়ে দিতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'htt-hdr-quiz',
    title: { en: 'HTTP Headers & Wire Formatting Quiz', bn: 'HTTP হেডার্স ও ওয়্যার ফরম্যাটিং কুইজ' },
    questions: [
      {
        id: 'hhq1',
        kind: 'mcq',
        topic: 'http: header case sensitivity rules',
        question: {
          en: 'How are HTTP header names treated regarding case sensitivity in HTTP/1.1 vs HTTP/2?',
          bn: 'HTTP/1.1 এবং HTTP/2-তে হেডার নামের কেস-সেনসিটিভিটি কীভাবে পরিচালনা করা হয়?'
        },
        options: [
          { en: 'HTTP/1.1 treats header names as case-insensitive; HTTP/2 strictly requires all header names to be lowercased', bn: 'HTTP/1.1 হেডার নামকে কেস-ইনসেনসিটিভ হিসেবে দেখে; HTTP/2 কঠোরভাবে সব হেডার নাম ছোট হাতের অক্ষরে হওয়া বাধ্যতামূলক করে' },
          { en: 'All HTTP headers are strictly case-sensitive in all versions', bn: 'সব ভার্সনেই হেডার সর্বদা কেস-সেনসিটিভ' },
          { en: 'HTTP/2 allows uppercase only', bn: 'HTTP/2 কেবল বড় হাতের অক্ষর নেয়' },
          { en: 'Header names must start with numbers in HTTP/2', bn: 'HTTP/2-তে হেডার সংখ্যা দিয়ে শুরু হতে হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Case-insensitive in 1.1, lowercased in 2.',
          bn: '১.১-এ কেস-ইনসেনসিটিভ, ২-এ বাধ্যতামূলক ছোট হাতের অক্ষর।'
        },
        explanation: {
          en: 'HTTP/1.1 permits any casing (Content-Type vs content-type). HTTP/2 binary framing enforces lowercase tokens on the wire.',
          bn: 'HTTP/1.1 যে-কোনো কেস গ্রহণ করলেও HTTP/2 তারের ওপর সব হেডার ছোট হাতের অক্ষরে রূপান্তর বাধ্যতামূলক করে।'
        }
      },
      {
        id: 'hhq2',
        kind: 'mcq',
        topic: 'http: duplicate header merge exception',
        question: {
          en: 'Which HTTP header is the notable exception to the rule that duplicate headers must be merged into a single comma-separated value?',
          bn: 'ডুপ্লিকেট হেডারগুলোকে কমা দিয়ে এক লাইনে জোড়া লাগানোর সাধারণ নিয়মে কোন হেডারটি একমাত্র ব্যতিক্রম?'
        },
        options: [
          { en: 'Set-Cookie', bn: 'Set-Cookie' },
          { en: 'Accept', bn: 'Accept' },
          { en: 'Cache-Control', bn: 'Cache-Control' },
          { en: 'Via', bn: 'Via' }
        ],
        answer: 0,
        hint: {
          en: 'Cookies contain commas in expires dates.',
          bn: 'কুকির মেয়াদের তারিখের ভেতরে কমা থাকে।'
        },
        explanation: {
          en: 'Set-Cookie values frequently include commas in expiration date strings (Expires=Wed, 21 Oct...). Merging with commas would break parsing.',
          bn: 'Set-Cookie-এর তারিখের ভেতর (যেমন ২১ অক্টোবর) কমা থাকে, তাই এগুলোকে কমা দিয়ে জুড়লে ফরম্যাট নষ্ট হয়ে যায়।'
        }
      },
      {
        id: 'hhq3',
        kind: 'mcq',
        topic: 'http: mandatory host header in http 1.1',
        question: {
          en: 'Why did HTTP/1.1 make the "Host" header strictly mandatory on all client requests (returning 400 Bad Request if missing)?',
          bn: 'HTTP/1.1 কেন সমস্ত ক্লায়েন্ট রিকোয়েস্টে "Host" হেডার পাঠানো বাধ্যতামূলক করেছে (অনুপস্থিত থাকলে ৪০০ Bad Request ফেরত দেয়)?'
        },
        options: [
          { en: 'To enable virtual hosting, allowing a single IP address and web server to host hundreds of distinct domains', bn: 'ভার্চুয়াল হোস্টিং সক্ষম করতে, যাতে একটিমাত্র আইপি অ্যাড্রেসে শত শত পৃথক ডোমেইন ওয়েবসাইট চালানো যায়' },
          { en: 'To measure internet connection download speed', bn: 'ইন্টারনেটের গতি পরিমাপ করতে' },
          { en: 'To format HTML paragraphs correctly', bn: 'এইচটিএমএল লেখা সাজানোর জন্য' },
          { en: 'To store encrypted user passwords', bn: 'পাসওয়ার্ড সেভ রাখতে' }
        ],
        answer: 0,
        hint: {
          en: 'Enables name-based virtual hosting on shared IPs.',
          bn: 'একই আইপিতে ডোমেইন-ভিত্তিক একাধিক সাইট চালাতে সাহায্য করে।'
        },
        explanation: {
          en: 'The Host header specifies the target domain name, resolving virtual host routing on multi-tenant servers sharing a common network interface.',
          bn: 'Host হেডার নির্দিষ্ট ডোমেইনের নাম জানিয়ে দেয়, ফলে একই সার্ভারে একাধিক ওয়েবসাইট থাকলে সার্ভার সঠিক সাইটের ফাইল বের করতে পারে।'
        }
      },
      {
        id: 'hhq4',
        kind: 'mcq',
        topic: 'http: nosniff security header',
        question: {
          en: 'What specific security attack is prevented by setting the "X-Content-Type-Options: nosniff" response header?',
          bn: '"X-Content-Type-Options: nosniff" রেসপন্স হেডার সেট করার মাধ্যমে কোন নির্দিষ্ট সাইবার আক্রমণ প্রতিহত করা হয়?'
        },
        options: [
          { en: 'MIME-confusion and drive-by script execution attacks where malicious scripts are disguised as innocent image files', bn: 'MIME-কনফিউশন আক্রমণ, যেখানে ছবির ছদ্মবেশে পাঠানো ক্ষতিকর স্ক্রিপ্ট ব্রাউজার কার্যকর করতে পারে' },
          { en: 'DDoS attacks on network switches', bn: 'সুইচে ডিডস আক্রমণ' },
          { en: 'Database disk failures', bn: 'ডাটাবেস ডিস্ক নষ্ট হওয়া' },
          { en: 'Wi-Fi password sniffing', bn: 'ওয়াইফাই পাসওয়ার্ড চুরি' }
        ],
        answer: 0,
        hint: {
          en: 'Blocks MIME-sniffing script execution.',
          bn: 'ছদ্মবেশী স্ক্রিপ্ট চালানো প্রতিহত করে।'
        },
        explanation: {
          en: 'The nosniff directive forces browsers to strictly adhere to declared MIME types, preventing malicious uploaded assets from executing as executable scripts.',
          bn: 'nosniff ব্রাউজারকে ঘোষিত ফরম্যাট মেনে চলতে বাধ্য করে, ফলে ছবির ছদ্মবেশে স্ক্রিপ্ট চালালে তা বাতিল হয়ে যায়।'
        }
      }
    ]
  }
};
