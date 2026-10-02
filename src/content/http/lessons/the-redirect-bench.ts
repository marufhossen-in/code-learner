import type { Lesson } from '../../../lib/types';

export const theRedirectBenchLesson: Lesson = {
  slug: 'the-redirect-bench',
  tech: 'http',
  title: {
    en: 'HTTP Redirects: 301, 302, 303, 307, 308 & PRG Architecture',
    bn: 'HTTP রিডাইরেক্টস: ৩০১, ৩০২, ৩০৩, ৩০৭, ৩০৮ ও PRG আর্কিটেকচার'
  },
  summary: {
    en: 'Master HTTP redirection mechanics across 10 structured topics. Understand the role of the Location header. Learn why 301 Moved Permanently transfers SEO ranking but risks permanent cache lock-in. Unpack the historical POST-to-GET rewrite anomaly of 302 Found. Master the 303 See Other status code and the Post/Redirect/Get (PRG) design pattern to prevent duplicate charges. Understand modern method-preserving redirects: 307 Temporary Redirect and 308 Permanent Redirect. Troubleshoot redirect loops and implement HSTS.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP রিডাইরেকশনের নিয়মাবলি শিখুন। Location হেডারের ভূমিকা জানুন। ৩০১ Moved Permanently কেন SEO র়্যাংক স্থানান্তর করে কিন্তু ক্যাশ লকিংয়ের ঝুঁকি তৈরি করে তা বুঝুন। ৩০২ Found-এর ঐতিহাসিক POST-to-GET পরিবর্তনের ত্রুটি জানুন। ৩০৩ See Other এবং Post/Redirect/Get (PRG) প্যাটার্ন দিয়ে ফরম সাবমিশনের দ্বিগুণ চার্জ ঠেকান। মেথড অপরিবর্তিত রাখা ৩০৭ Temporary ও ৩০৮ Permanent রিডাইরেক্ট বুঝুন। রিডাইরেক্ট লুপ সমাধান ও HSTS বাস্তবায়ন শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-idempotency-bench',
    tech: 'http',
    title: {
      en: 'HTTP Idempotency, Safe Verbs & Distributed Retries',
      bn: 'HTTP আইডেমপোটেন্সি, নিরাপদ মেথড ও ডিস্ট্রিবিউটেড রিট্রাই'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Redirection Fundamentals: The 3xx Status Family', bn: '১. রিডাইরেকশনের মূলনীতি: 3xx স্ট্যাটাস পরিবার' } },
    {
      type: 'para',
      text: {
        en: 'HTTP redirection instructs the client that the requested resource is located at another URI. The 3xx response family operates along two crucial dimensions: permanence (temporary vs permanent) and method handling (whether the HTTP verb and body must be preserved or rewritten to GET).',
        bn: 'HTTP রিডাইরেকশন ক্লায়েন্টকে জানায় যে চাওয়া ফাইল বা লিংকটি অন্য ঠিকানায় পাওয়া যাবে। 3xx স্ট্যাটাস কোডগুলো মূলত দুটি প্রধান নিয়মে ভাগ করা: স্থায়িত্ব (সাময়িক নাকি স্থায়ী) এবং মেথড হ্যান্ডলিং (আসল মেথড ও বডি অক্ষত থাকবে নাকি বদলে GET হয়ে যাবে)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `+------------+--------------------+------------------------+
| Status     | Permanence         | HTTP Method Handling   |
+------------+--------------------+------------------------+
| 301        | Permanent          | May change to GET      |
| 302        | Temporary          | May change to GET      |
| 303        | Temporary          | ALWAYS changes to GET  |
| 307        | Temporary          | NEVER changes method   |
| 308        | Permanent          | NEVER changes method   |
+------------+--------------------+------------------------+`,
      caption: {
        en: 'The redirection matrix classifies 3xx status codes by permanence and method preservation.',
        bn: 'রিডাইরেকশন ম্যাট্রিক্স স্থায়িত্ব এবং মেথড সংরক্ষণের ভিত্তিতে 3xx কোডগুলোকে ভাগ করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP 3xx Redirection Decision Matrix', bn: 'HTTP ৩xx রিডাইরেকশন সিদ্ধান্ত ম্যাট্রিক্স' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="HTTP Redirection 3xx Decision Matrix Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="200" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="55" x2="685" y2="55" stroke="currentColor" stroke-width="1"/><line x1="180" y1="15" x2="180" y2="215" stroke="currentColor" stroke-width="1"/><line x1="430" y1="15" x2="430" y2="215" stroke="currentColor" stroke-width="1"/><text x="97" y="38" text-anchor="middle" font-weight="bold">Relocation Intent</text><text x="305" y="38" text-anchor="middle" font-weight="bold">Demotes POST to GET</text><text x="557" y="38" text-anchor="middle" font-weight="bold">Preserves Method &amp; Body</text><rect x="30" y="70" width="135" height="55" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="97" y="95" text-anchor="middle" font-weight="bold" fill="#10b981">Permanent</text><text x="97" y="112" text-anchor="middle" font-size="10">Cacheable indefinitely</text><rect x="200" y="70" width="210" height="55" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="305" y="93" text-anchor="middle" font-weight="bold" fill="#f59e0b">301 Moved Permanently</text><text x="305" y="110" text-anchor="middle" font-size="10">• Transfers SEO equity; legacy web</text><rect x="450" y="70" width="215" height="55" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="557" y="93" text-anchor="middle" font-weight="bold" fill="#10b981">308 Permanent Redirect</text><text x="557" y="110" text-anchor="middle" font-size="10">• REST API migration standard</text><rect x="30" y="140" width="135" height="60" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="97" y="165" text-anchor="middle" font-weight="bold" fill="#3b82f6">Temporary</text><text x="97" y="182" text-anchor="middle" font-size="10">Not cached by default</text><rect x="200" y="140" width="210" height="60" rx="6" fill="none" stroke="#6b7280" stroke-width="1"/><text x="305" y="160" text-anchor="middle" font-weight="bold">302 Found / 303 See Other</text><text x="305" y="177" text-anchor="middle" font-size="10">• 302: historical detour</text><text x="305" y="192" text-anchor="middle" font-size="10">• 303: Post/Redirect/Get pattern</text><rect x="450" y="140" width="215" height="60" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="557" y="163" text-anchor="middle" font-weight="bold" fill="#3b82f6">307 Temporary Redirect</text><text x="557" y="180" text-anchor="middle" font-size="10">• Re-executes POST/PUT safely</text><text x="557" y="193" font-size="9" fill="#3b82f6">Maintains original payload</text></g></svg>`,
      caption: {
        en: 'The 3xx matrix balances relocation duration (permanent vs temporary) with HTTP verb retention guarantees.',
        bn: '৩xx ম্যাট্রিক্স স্থানান্তরের সময়কাল এবং মেথড সংরক্ষণের নিশ্চয়তার ভিত্তিতে সঠিক স্ট্যাটাস নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Location Header: Absolute vs Relative URIs', bn: '২. Location হেডার: পরম বনাম আপেক্ষিক URI' } },
    {
      type: 'para',
      text: {
        en: 'Every redirection response requires a Location header naming the target address. In original HTTP/1.0, Location required an absolute URI with scheme and hostname. Since RFC 7231, relative paths (e.g. Location: /dashboard) are officially valid and resolved automatically against the current request URI.',
        bn: 'প্রতিটি রিডাইরেক্ট রেসপন্সে গন্তব্যের নতুন ঠিকানা জানাতে Location হেডার থাকা বাধ্যতামূলক। পুরনো HTTP/1.0-তে ডোমেইনসহ পুরো পরম লিঙ্ক দিতে হতো। তবে RFC 7231 অনুযায়ী আপেক্ষিক পাথ (যেমন Location: /dashboard) সম্পূর্ণ বৈধ এবং ব্রাউজার বর্তমান ডোমেইন মিলিয়ে লিঙ্ক বানিয়ে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Server redirecting client to new path: */
HTTP/1.1 301 Moved Permanently
Location: /docs/v2/getting-started
Content-Length: 0

/* Browser automatically resolves against origin: */
/* Target -> https://codeshikhon.com/docs/v2/getting-started */`,
      caption: {
        en: 'Relative Location headers resolve relative to the request origin and pathname.',
        bn: 'আপেক্ষিক Location হেডার রিকোয়েস্টের মূল ডোমেইনের সাথে মিলিয়ে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. 301 Moved Permanently: SEO Equity & Aggressive Caching', bn: '৩. 301 Moved Permanently: SEO র়্যাংকিং স্থানান্তর ও ক্যাশিং ঝুঁকি' } },
    {
      type: 'para',
      text: {
        en: 'HTTP 301 signifies that the resource has permanently relocated. Search engines transfer accumulated SEO ranking authority to the new URL. By default, browsers cache 301 responses aggressively and indefinitely; a mistaken 301 is notoriously difficult to revoke from intermediate CDN proxies and user browser caches.',
        bn: 'HTTP 301 জানায় যে রিসোর্সটি চিরদিনের জন্য নতুন ঠিকানায় চলে গেছে। সার্চ ইঞ্জিনগুলো পুরনো লিংকের SEO র়্যাংক নতুন লিংকে দিয়ে দেয়। ব্রাউজার এবং সিডিএন প্রক্সি ৩০১ রেসপন্স অত্যন্ত শক্তভাবে ক্যাশ করে রাখে; অসাবধানতাবশত ভুল ৩০১ দিলে ইউজারের ব্রাউজার ক্যাশ মোছা বেশ কঠিন হয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express.js implementing safe permanent canonical redirect:
function enforceCanonicalDomain(req, res, next) {
  if (req.hostname === "www.codeshikhon.com") {
    // 301 transfers search ranking to non-www canonical domain:
    return res.redirect(301, \`https://codeshikhon.com\${req.originalUrl}\`);
  }
  next();
}

console.log("301 instructs search engines to retire the old URL");
// Output: 301 instructs search engines to retire the old URL`,
      caption: {
        en: 'Use 301 for permanent domain migrations and canonical URL enforcement.',
        bn: 'স্থায়ী ডোমেইন পরিবর্তন এবং ক্যানোনিকাল লিংকের জন্য ৩০১ ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. 302 Found: The Historical Method-Rewriting Anomaly', bn: '৪. 302 Found: ঐতিহাসিক মেথড পরিবর্তনের জটিলতা' } },
    {
      type: 'para',
      text: {
        en: 'HTTP 302 was originally named "Moved Temporarily". Early web browsers made an unauthorized implementation choice: when receiving a 302 response to a POST request, they automatically changed the subsequent request method to GET and dropped the body. RFC 7231 preserved this behavior for backward compatibility.',
        bn: 'HTTP 302 এর আদি নাম ছিল "Moved Temporarily"। প্রথম যুগের ব্রাউজারগুলো একটি কাজ করে বসে: POST রিকোয়েস্টের জবাবে ৩০২ এলে তারা মেথড বদলে GET বানিয়ে ফেলে এবং পেছনের বডি মুছে দেয়। পুরনো সাইট যাতে ভেঙে না যায় তাই RFC ৭২৩১ স্পেসিফিকেশনে এই আচরণ বহাল রাখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Initial mutating POST request: */
POST /submit-survey HTTP/1.1
Host: codeshikhon.com

/* Server returns legacy 302: */
HTTP/1.1 302 Found
Location: /thank-you

/* Historical browser behavior: POST mutated into GET! */
GET /thank-you HTTP/1.1
Host: codeshikhon.com`,
      caption: {
        en: 'Browsers historically rewrite POST requests into GET upon receiving status 302.',
        bn: 'ঐতিহাসিকভাবে ৩০২ রেসপন্স পেলে ব্রাউজার POST রিকোয়েস্টকে GET-এ বদলে ফেলে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. 303 See Other: The Dedicated POST-to-GET Redirect', bn: '৫. 303 See Other: সুনির্দিষ্ট POST-to-GET রূপান্তর' } },
    {
      type: 'para',
      text: {
        en: 'HTTP 303 See Other was introduced in HTTP/1.1 to explicitly sanction changing the HTTP method to GET. It states that the response to the original request can be found at another URI using a GET request. It is the designated status code for finishing POST form workflows.',
        bn: 'HTTP/1.1-এ বিশেষভাবে 303 See Other কোডটি আনা হয় মেথড পরিবর্তনকে আনুষ্ঠানিকভাবে বৈধ করার জন্য। এটি পরিষ্কারভাবে নির্দেশ দেয় যে রিকোয়েস্টের ফলাফল অন্য ঠিকানায় একটি বিশুদ্ধ GET মেথড দিয়ে দেখতে হবে। যেকোনো POST ফর্ম সফলভাবে শেষ করার জন্য এটিই আদর্শ কোড।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Processing payment: */
POST /orders/checkout HTTP/1.1
Host: shop.codeshikhon.com
Content-Type: application/json

{"cartId": "c_991", "amount": 2500}

/* Server processes payment and directs client to receipt via GET: */
HTTP/1.1 303 See Other
Location: /orders/receipt/c_991

/* Client performs clean GET request: */
GET /orders/receipt/c_991 HTTP/1.1`,
      caption: {
        en: 'Status 303 explicitly commands the client to fetch the target resource with GET.',
        bn: '৩০৩ স্ট্যাটাস কোড ক্লায়েন্টকে স্পষ্টভাবে GET দিয়ে নতুন পেজ লোড করতে বলে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Post/Redirect/Get (PRG) Pattern: Stopping Double Submissions', bn: '৬. Post/Redirect/Get (PRG) প্যাটার্ন: দ্বিগুণ সাবমিশন রোধ' } },
    {
      type: 'para',
      text: {
        en: 'Without PRG, directly returning an HTML view in response to a POST causes duplicate operations when users refresh the page. Browsers display the annoying "Confirm Form Resubmission" dialog. The Post/Redirect/Get pattern eliminates this: after processing POST, the server issues a 303 redirect to a GET endpoint.',
        bn: 'PRG প্যাটার্ন ছাড়া সরাসরি POST-এর জবাবে HTML পেজ দেখালে ইউজার পেজ রিফ্রেশ করলেই ফর্ম আবার সাবমিট হয়ে যায়। ব্রাউজার তখন "Confirm Form Resubmission" সতর্কতা দেখায়। PRG প্যাটার্ন এটি সমাধান করে: POST প্রক্রিয়া শেষ করে সার্ভার ৩০৩ রিডাইরেক্ট পাঠায়, ফলে রিফ্রেশ করলে শুধুই GET পেজ রিলোড হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express.js implementing clean PRG architecture:
function handlePaymentSubmission(req, res) {
  // 1. Process payment mutation:
  const paymentId = "pay_884192";
  console.log("Processed payment:", paymentId);

  // 2. Prevent double-charging on refresh via PRG (Status 303):
  res.redirect(303, \`/receipt/\${paymentId}\`);
}

console.log("PRG ensures page refresh executes a safe read GET");
// Output: PRG ensures page refresh executes a safe read GET`,
      caption: {
        en: 'The PRG pattern ensures browser refresh reloads an idempotent GET receipt.',
        bn: 'PRG প্যাটার্নে রিফ্রেশ চাপলে নতুন করে চার্জ না হয়ে শুধু রসিদের কপি রি-লোড হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. 307 Temporary Redirect: Strict Method Preservation', bn: '৭. 307 Temporary Redirect: কঠোরভাবে মেথড সংরক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'HTTP 307 Temporary Redirect fixes the ambiguity of 302. RFC 9110 strictly mandates that the client MUST NOT change the request method when following a 307 redirect. A POST request to a 307 target must be re-sent as a POST with the identical request body intact.',
        bn: 'HTTP 307 Temporary Redirect পুরনো ৩০২-এর গোলযোগ মেটায়। RFC 9110 অনুযায়ী ৩০৭ রিডাইরেক্ট পেলে ক্লায়েন্ট কোনোভাবেই মেথড বদলাতে পারবে না। অর্থাৎ POST রিকোয়েস্টে ৩০৭ পেলে পরবর্তী রিকোয়েস্টটিও হুবহু একই বডি নিয়ে POST আকারেই পাঠাতে হবে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* POST request hitting maintenance gateway: */
POST /api/v1/comments HTTP/1.1
Host: primary.codeshikhon.com

/* Server temporarily detours traffic: */
HTTP/1.1 307 Temporary Redirect
Location: https://secondary.codeshikhon.com/api/v1/comments

/* Client strictly resends POST with identical body: */
POST /api/v1/comments HTTP/1.1
Host: secondary.codeshikhon.com`,
      caption: {
        en: 'Status 307 guarantees that non-GET methods and payloads remain completely intact.',
        bn: '৩০৭ স্ট্যাটাস গ্যারান্টি দেয় যে POST মেথড ও বডি কোনো পরিবর্তন ছাড়াই পুনঃপ্রেরিত হবে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. 308 Permanent Redirect: Method-Preserving REST Migrations', bn: '৮. 308 Permanent Redirect: REST API-র স্থায়ী মাইগ্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'HTTP 308 Permanent Redirect (RFC 7538) is the modern equivalent of 301 combined with the method guarantees of 307. It signifies a permanent move where the client MUST preserve the HTTP method and payload. It is the required status code when permanently migrating API endpoints.',
        bn: 'HTTP 308 Permanent Redirect (RFC 7538) হলো ৩০১ এর স্থায়ী মর্যাদা এবং ৩০৭ এর মেথড সুরক্ষার সমন্বয়। এটি জানায় যে লিংক চিরতরে পরিবর্তিত হয়েছে এবং ক্লায়েন্টকে অবশ্যই মেথড ও পেলোড ঠিক রেখে নতুন লিংকে পাঠাতে হবে। REST API মাইগ্রেশনের জন্য ৩০৮ অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Migrating API v1 to v2: */
PATCH /api/v1/profile HTTP/1.1
Host: api.codeshikhon.com
Content-Type: application/json

{"timezone": "Asia/Dhaka"}

/* Server issues permanent method-preserving redirect: */
HTTP/1.1 308 Permanent Redirect
Location: /api/v2/profile

/* Client resends PATCH to new path without altering method */`,
      caption: {
        en: 'Use 308 when migrating mutating API endpoints without dropping request payloads.',
        bn: 'পেলোড অক্ষত রেখে এপিআই এন্ডপয়েন্ট স্থায়ীভাবে সরাতে ৩০৮ ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Redirect Loops & Circular Paths: Detection and Defense', bn: '৯. রিডাইরেক্ট লুপ ও বৃত্তাকার চক্র: শনাক্তকরণ ও প্রতিকার' } },
    {
      type: 'para',
      text: {
        en: 'Redirect loops occur when URL A redirects to URL B, which in turn redirects back to URL A. Browsers enforce a hard hop counter (typically 20 hops) before terminating the connection with ERR_TOO_MANY_REDIRECTS. Common causes include conflicting trailing-slash rewrite rules between reverse proxies and backend servers.',
        bn: 'রিডাইরেক্ট লুপ তখন ঘটে যখন A লিংক B-তে পাঠায় আর B আবার A-তে ফেরত পাঠায়। ব্রাউজার ২০টি হপ পর্যন্ত অপেক্ষা করার পর ERR_TOO_MANY_REDIRECTS এরর দিয়ে কানেকশন কেটে দেয়। রিভার্স প্রক্সি এবং ব্যাকএন্ড সার্ভারের মধ্যে স্ল্যাশ (trailing-slash) নিয়ে ভুল কনফিগারেশনের কারণে এটি বেশি ঘটে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Simulating redirect hop-counter loop prevention:
function followRedirects(chain, maxHops = 5) {
  let hops = 0;
  const visited = new Set();
  let current = chain[0];

  while (current && hops < maxHops) {
    if (visited.has(current.url)) {
      throw new Error(\`Redirect Loop detected at: \${current.url}\`);
    }
    visited.add(current.url);
    hops++;
    current = chain.find(item => item.url === current.location);
  }
  return "Redirect journey resolved";
}

const cyclicChain = [
  { url: "/login", location: "/home" },
  { url: "/home", location: "/login" }
];

try {
  followRedirects(cyclicChain);
} catch (err) {
  console.log("Error:", err.message);
  // Output: Error: Redirect Loop detected at: /login
}`,
      caption: {
        en: 'Clients maintain hop counters and URI sets to abort infinite circular redirect loops.',
        bn: 'ক্লায়েন্ট হপ কাউন্টার দিয়ে বৃত্তাকার রিডাইরেক্ট লুপের ফাঁদ শনাক্ত করে ব্রাউজারকে রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. HTTP to HTTPS Redirection & HSTS Preload', bn: '১০. HTTP থেকে HTTPS রিডাইরেকশন ও HSTS প্রিলোড' } },
    {
      type: 'para',
      text: {
        en: 'Websites redirect plain HTTP requests to HTTPS on port 443. However, an initial plain HTTP request is vulnerable to Man-In-The-Middle (MITM) stripping attacks. The Strict-Transport-Security (HSTS) response header instructs browsers to convert all future HTTP requests to HTTPS locally before touching the network wire.',
        bn: 'ওয়েবসাইটগুলো সাধারণ HTTP রিকোয়েস্টকে পোর্ট ৪৪৩-এ HTTPS-এ রিডাইরেক্ট করে। তবে প্রথম সাধারণ রিকোয়েস্টটিতে ম্যান-ইন-দ্য-মিডল (MITM) আক্রমণের সুযোগ থাকে। Strict-Transport-Security (HSTS) হেডার ব্রাউজারকে নির্দেশ দেয় ভবিষ্যতে যেকোনো HTTP রিকোয়েস্টকে নেটওয়ার্কে পাঠানোর আগেই নিজে থেকে HTTPS-এ বদলে নিতে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Standard HSTS security header: */
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

/*
Browser internal upgrade:
Next time user types "http://codeshikhon.com", the browser automatically
synthesizes an internal 307 Temporary Redirect straight to "https://"
without ever sending unencrypted packets across the public network!
*/`,
      caption: {
        en: 'HSTS instructs browsers to upgrade insecure HTTP connections internally without wire hops.',
        bn: 'HSTS ব্রাউজারকে নেটওয়ার্কে যাওয়ার আগেই ভেতর থেকে নিরাপদ HTTPS-এ রূপান্তরের নির্দেশ দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-red-ex1',
      kind: 'predict',
      topic: 'http: PRG redirect status code',
      question: {
        en: 'Which HTTP status code is standard for redirecting POST form submissions to a GET receipt page (the PRG pattern)?',
        bn: 'POST ফর্ম সাবমিশন শেষ করে GET রসিদ পেজে রিডাইরেক্ট করতে (PRG প্যাটার্ন) কোন HTTP স্ট্যাটাস কোডটি মানসম্মত?'
      },
      code: `/* PRG pattern target status code */
/* HTTP/1.1 ___ See Other */`,
      answer: '303',
      accept: ['303'],
      hint: {
        en: 'Status 303.',
        bn: 'স্ট্যাটাস ৩০৩।'
      },
      explanation: {
        en: 'HTTP 303 See Other is specifically created to direct clients to load the subsequent resource using GET.',
        bn: 'HTTP 303 See Other ক্লায়েন্টকে পরবর্তী পেজটি নিশ্চিতভাবে GET দিয়ে লোড করার নির্দেশ দেয়।'
      }
    },
    {
      id: 'htt-red-ex2',
      kind: 'mcq',
      topic: 'http: method preserving permanent redirect',
      question: {
        en: 'Which HTTP status code represents a PERMANENT redirect that strictly forbids the client from changing the HTTP method (e.g. keeping POST as POST)?',
        bn: 'কোন HTTP স্ট্যাটাস কোডটি একটি স্থায়ী রিডাইরেক্ট নির্দেশ করে যা ক্লায়েন্টকে মেথড পরিবর্তন করতে সম্পূর্ণ নিষেধ করে (যেমন POST থাকলে POST-ই রাখতে হবে)?'
      },
      options: [
        { en: '308 Permanent Redirect', bn: '308 Permanent Redirect' },
        { en: '301 Moved Permanently', bn: '301 Moved Permanently' },
        { en: '302 Found', bn: '302 Found' },
        { en: '304 Not Modified', bn: '304 Not Modified' }
      ],
      answer: 0,
      hint: {
        en: 'Status 308 combines permanence with method preservation.',
        bn: '৩০৮ স্থায়িত্ব ও মেথড সংরক্ষণ উভয়ই নিশ্চিত করে।'
      },
      explanation: {
        en: 'HTTP 308 Permanent Redirect was standardized in RFC 7538 to permanently relocate resources while guaranteeing method preservation.',
        bn: 'HTTP 308 RFC ৭৫৩৮ দ্বারা মেথড ও বডি অক্ষত রেখে স্থায়ীভাবে লিঙ্ক স্থানান্তরের গ্যারান্টি দেয়।'
      }
    },
    {
      id: 'htt-red-ex3',
      kind: 'mcq',
      topic: 'http: redirect target header',
      question: {
        en: 'Which HTTP response header contains the destination URL that the client must follow during redirection?',
        bn: 'রিডাইরেকশনের সময় ক্লায়েন্টকে নতুন কোন লিংকে যেতে হবে তা জানাতে কোন HTTP রেসপন্স হেডার ব্যবহৃত হয়?'
      },
      options: [
        { en: 'Location', bn: 'Location' },
        { en: 'Destination', bn: 'Destination' },
        { en: 'Next-Hop', bn: 'Next-Hop' },
        { en: 'Referer', bn: 'Referer' }
      ],
      answer: 0,
      hint: {
        en: 'The Location header.',
        bn: 'Location হেডার।'
      },
      explanation: {
        en: 'The Location header specifies the target URI where the client should re-issue the request.',
        bn: 'Location হেডারে নতুন গন্তব্যের URI উল্লেখ থাকে।'
      }
    }
  ],
  quiz: {
    id: 'htt-red-quiz',
    title: { en: 'HTTP Redirection & 3xx Status Codes Quiz', bn: 'HTTP রিডাইরেকশন ও 3xx স্ট্যাটাস কোড কুইজ' },
    questions: [
      {
        id: 'hrq1',
        kind: 'mcq',
        topic: 'http: 301 vs 302 SEO impact',
        question: {
          en: 'How do search engine crawlers treat an HTTP 301 redirect compared to a 302 redirect?',
          bn: 'সার্চ ইঞ্জিন ক্রলাররা 302 রিডাইরেক্টের তুলনায় 301 রিডাইরেক্টকে কীভাবে মূল্যায়ন করে?'
        },
        options: [
          { en: '301 transfers SEO ranking and link equity permanently to the new target URL; 302 retains ranking at the original URL', bn: '৩০১ স্থায়ীভাবে নতুন লিংকে SEO র়্যাংকিং ও লিংক ইকুইটি দিয়ে দেয়; ৩০২ পুরনো লিংকের কাছেই র়্যাংক বহাল রাখে' },
          { en: '301 removes the site from Google indexes completely', bn: '৩০১ পুরো সাইট গুগল থেকে মুছে দেয়' },
          { en: '302 is always faster than 301', bn: '৩০২ সবসময় ৩০১ থেকে দ্রুত কাজ করে' },
          { en: 'Both behave identically in search engine indexes', bn: 'দুটোই সার্চ ইঞ্জিনে হুবহু একভাবে কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: '301 is permanent rank transfer.',
          bn: '৩০১ স্থায়ীভাবে র়্যাংক স্থানান্তর করে।'
        },
        explanation: {
          en: 'A 301 response informs search engines that the URL change is permanent, migrating link equity. A 302 indicates a temporary detour, so the original URL retains its indexing authority.',
          bn: '৩০১ সার্চ ইঞ্জিনকে জানায় ঠিকানা চিরতরে বদলে গেছে তাই সব ক্রেডিট নতুন ইউআরএলে চলে যায়, যেখানে ৩০২ কেবল সাময়িক নির্দেশ করে।'
        }
      },
      {
        id: 'hrq2',
        kind: 'mcq',
        topic: 'http: HSTS security benefit',
        question: {
          en: 'What primary vulnerability does HSTS (Strict-Transport-Security) prevent?',
          bn: 'HSTS (Strict-Transport-Security) প্রধানত কোন ধরনের নিরাপত্তা দুর্বলতা প্রতিহত করে?'
        },
        options: [
          { en: 'SSL-stripping Man-In-The-Middle attacks during the initial unencrypted HTTP connection', bn: 'প্রথম আন-এনক্রিপ্টেড HTTP কানেকশনের সময় ঘটা SSL-স্ট্রিপিং ম্যান-ইন-দ্য-মিডল আক্রমণ' },
          { en: 'Cross-Site Scripting (XSS)', bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS)' },
          { en: 'SQL Injection in forms', bn: 'ফর্মের ভেতর এসকিউএল ইনজেকশন' },
          { en: 'Memory leaks in Node.js', bn: 'নোড জেএস মেমরি লিক' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents SSL stripping.',
          bn: 'SSL স্ট্রিপিং আক্রমণ প্রতিহত করে।'
        },
        explanation: {
          en: 'HSTS ensures browsers never initiate an insecure HTTP handshake to the domain, rendering SSL stripping attacks ineffective.',
          bn: 'HSTS নিশ্চিত করে ব্রাউজার সরাসরি নেটওয়ার্কে কোনো ইনসিকিউর HTTP প্যাকেট না পাঠিয়ে আগে থেকেই HTTPS ব্যবহার করবে।'
        }
      },
      {
        id: 'hrq3',
        kind: 'mcq',
        topic: 'http: 303 See Other Post-Redirect-Get pattern',
        question: {
          en: 'Why is HTTP 303 See Other universally used in the Post/Redirect/Get (PRG) web architecture pattern?',
          bn: 'Post/Redirect/Get (PRG) আর্কিটেকচারে কেন সর্বজনীনভাবে HTTP 303 See Other ব্যবহার করা হয়?'
        },
        options: [
          { en: 'It explicitly instructs the browser to redirect using an idempotent GET request, preventing duplicate form submissions upon refreshing', bn: 'এটি ব্রাউজারকে স্পষ্টভাবে একটি নতুন GET রিকোয়েস্টে রিডাইরেক্ট হতে বলে, ফলে পেজ রিফ্রেশ করলেও দ্বিতীয়বার ফর্ম জমা হয় না' },
          { en: 'It compresses the form database fields', bn: 'ফর্মের ডাটাবেস ফিল্ড ছোট করে' },
          { en: 'It bypasses CSS styling rules', bn: 'সিএসএস নিয়ম এড়িয়ে চলে' },
          { en: 'It forces the user to log in again', bn: 'ইউজারকে আবার লগইন করতে বাধ্য করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents duplicate form submissions on page refresh.',
          bn: 'রিফ্রেশ করার সময় ডুপ্লিকেট ফর্ম জমা হওয়া প্রতিরোধ করে।'
        },
        explanation: {
          en: '303 See Other guarantees that the redirected request is performed using GET, ensuring that subsequent browser refreshes do not re-post transaction data.',
          bn: '৩০৩ নিশ্চিত করে পরবর্তী রিকোয়েস্টটি GET মেথডে হবে, যাতে ইউজার ব্রাউজারে রিলোড চাপলেও পেমেন্ট বা ফর্ম ডুপ্লিকেট না হয়।'
        }
      },
      {
        id: 'hrq4',
        kind: 'mcq',
        topic: 'http: 307 method preservation guarantee',
        question: {
          en: 'If a client sends an HTTP POST request with a JSON body to an endpoint that returns "307 Temporary Redirect", how MUST the client handle the redirect?',
          bn: 'একটি ক্লায়েন্ট JSON বডিসহ POST পাঠানোর পর সার্ভার যদি "307 Temporary Redirect" পাঠায়, তবে ক্লায়েন্ট কীভাবে নতুন লিংকে রিকোয়েস্ট পাঠাবে?'
        },
        options: [
          { en: 'It MUST repeat the request to the new Location URL using the identical POST method and JSON payload', bn: 'ক্লায়েন্টকে অবশ্যই হুবহু একই POST মেথড এবং একই JSON বডি অপরিবর্তিত রেখে নতুন ঠিকানায় পাঠাতে হবে' },
          { en: 'It must automatically convert the request to GET and drop the body', bn: 'মেথড বদলে GET করতে হবে এবং বডি ফেলে দিতে হবে' },
          { en: 'It must abort the connection and report an error', bn: 'কানেকশন কেটে দিয়ে এরর দেখাতে হবে' },
          { en: 'It must encrypt the JSON with RSA keys', bn: 'জেসন ফাইল এনক্রিপ্ট করতে হবে' }
        ],
        answer: 0,
        hint: {
          en: '307 strictly preserves the HTTP method and payload.',
          bn: '৩০৭ মেথড ও পেলোড হুবহু সংরক্ষণ করতে বাধ্য করে।'
        },
        explanation: {
          en: 'Unlike legacy 302 responses, RFC 9110 specifies that clients receiving 307 MUST NOT change the request method when following the redirection.',
          bn: 'পুরনো ৩০২ এর মতো নয়, RFC ৯১১০ অনুযায়ী ৩০৭ পেলে ক্লায়েন্ট মেথড বা বডি কোনোভাবেই পরিবর্তন করতে পারবে না।'
        }
      }
    ]
  }
};
