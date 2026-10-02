import type { Lesson } from '../../../lib/types';

export const verbLedgerLesson: Lesson = {
  slug: 'the-verb-ledger',
  tech: 'http',
  title: {
    en: 'HTTP Verbs, Methods, Status Codes & Request-Response Envelopes',
    bn: 'HTTP ভার্বস, মেথডস, স্ট্যাটাস কোড ও রিকোয়েস্ট-রেসপন্স খাম'
  },
  summary: {
    en: 'Master foundational HTTP protocol mechanics across 10 structured topics. Learn request-response envelope anatomy, safe vs unsafe methods, and idempotency guarantees. Study the full method spectrum from GET and PUT to PATCH and POST. Master status code classes from 200 OK and 401 Unauthorized to 503 Service Unavailable with Retry-After.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP প্রোটোকল মেকানিজম আয়ত্ত করুন। রিকোয়েস্ট-রেসপন্স খামের গঠন, সেফ বনাম আনসেফ মেথড এবং আইডেমপোটেন্সি শিখুন। GET, PUT, PATCH ও POST-এর ব্যবহার জানুন। ২০০ OK, ৪০১ Unauthorized থেকে ৫০৩ Service Unavailable পর্যন্ত সব স্ট্যাটাস কোড আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-freshness-exchange',
    tech: 'http',
    title: {
      en: 'The Freshness Exchange: HTTP Caching, Cache-Control, ETags & Revalidation',
      bn: 'সতেজতা বিনিময়: HTTP ক্যাশিং, Cache-Control, ETag ও রিভ্যালিডেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The HTTP Envelope Anatomy: Request & Response Format', bn: '১. HTTP খামের গঠন: Request ও Response ফরম্যাট' } },
    {
      type: 'para',
      text: {
        en: 'At the transport layer, an HTTP/1.1 message is a plain-text envelope transmitted over a TCP socket. An HTTP Request consists of four distinct sections. First is the Request Line containing the method, path, and protocol version. Next come key-value headers, followed by an empty blank line. Finally, an optional body payload carries the transmission data. The HTTP response mirrors this structure starting with a status line.',
        bn: 'ট্রান্সপোর্ট স্তরে একটি HTTP/1.1 বার্তা মূলত সাধারণ প্লেইন-টেক্সট খাম যা TCP সকেটে পাঠানো হয়। একটি HTTP Request-এর ৪টি অংশ থাকে। প্রথমে থাকে Request Line যাতে মেথড, পাথ ও ভার্সন থাকে। এরপর আসে Key-value সম্বলিত Headers, যার নিচে থাকে একটি খালি লাইন। সবশেষে ঐচ্ছিক Body ডেটা থাকে। Response-ও হুবহু একই কাঠামো অনুসরণ করে যা Status Line দিয়ে শুরু হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `GET /api/v1/users/42 HTTP/1.1
Host: api.codeshikhon.com
User-Agent: Mozilla/5.0
Accept: application/json

HTTP/1.1 200 OK
Date: Sat, 26 Sep 2026 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 48

{"id": 42, "name": "Tanvir", "role": "engineer"}`,
      caption: {
        en: 'The HTTP envelope consists of a start line, header key-values, blank line, and raw body.',
        bn: 'HTTP খাম একটি স্টার্ট লাইন, হেডার, খালি লাইন এবং কাঁচা বডি নিয়ে গঠিত হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Safe vs Unsafe HTTP Methods: The Zero-Side-Effect Contract', bn: '২. নিরাপদ (Safe) বনাম অনিরাপদ মেথড: সাইড-ইফেক্টহীন চুক্তি' } },
    {
      type: 'para',
      text: {
        en: 'An HTTP method is defined as Safe if executing it does not mutate server state. GET, HEAD, and OPTIONS are safe methods. Search engine crawlers and browser prefetch engines can invoke safe methods repeatedly without danger. They never create orders, modify user balances, or delete records.',
        bn: 'কোনো HTTP মেথডকে Safe বলা হয় যদি সেটি চালালে সার্ভারের ডেটায় কোনো পরিবর্তন না আসে। GET, HEAD এবং OPTIONS হলো Safe মেথড। সার্চ ইঞ্জিন বট বা ব্রাউজার প্রি-ফেচিং কোনো প্রকার ক্ষতি বা পরিবর্তন না করে এগুলো যতবার খুশি চালাতে পারে। এতে কোনো অর্ডার তৈরি হয় না বা ব্যালান্স কাটে না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Safe methods guarantee read-only semantics:
const SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];

function canSearchCrawlerPrefetch(method) {
  return SAFE_METHODS.includes(method.toUpperCase());
}

console.log("Is GET safe for web crawlers?", canSearchCrawlerPrefetch("GET"));     // true
console.log("Is POST safe for web crawlers?", canSearchCrawlerPrefetch("POST"));   // false
console.log("Is DELETE safe for web crawlers?", canSearchCrawlerPrefetch("DELETE")); // false`,
      caption: {
        en: 'Intermediaries, CDNs, and web spiders rely on Safe methods to inspect web pages without risk.',
        bn: 'সার্চ ইঞ্জিন বট এবং সিডিএন কোনো ঝুঁকি ছাড়াই নিরাপদ মেথডগুলো কল করতে পারে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Idempotent vs Non-Idempotent Semantics', bn: '৩. আইডেমপোটেন্ট (Idempotent) বনাম নন-আইডেমপোটেন্ট মেথড' } },
    {
      type: 'para',
      text: {
        en: 'A method is Idempotent if executing it once or multiple times produces the identical server state. Mathematically, this is expressed as f(f(x)) = f(x). GET, PUT, DELETE, and HEAD are idempotent. If a PUT or DELETE request times out over a flaky network, the client can safely retry immediately.',
        bn: 'কোনো মেথডকে Idempotent বলা হয় যদি রিকোয়েস্টটি একবার বা বহুবার চালালেও শেষ ফলাফল হুবহু একই থাকে। গাণিতিকভাবে এটি f(f(x)) = f(x)। GET, PUT, DELETE এবং HEAD হলো Idempotent। দুর্বল নেটওয়ার্কে কোনো PUT বা DELETE আটকে গেলে নির্ভয়ে সাথে সাথে আবার রিট্রাই করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Simulating Idempotent vs Non-Idempotent operations:
let balance = 1000;

// Idempotent (PUT): Setting target balance to 500
function setBalance(target) {
  balance = target;
  return balance;
}

// Non-Idempotent (POST): Deducting 100
function withdraw(amount) {
  balance -= amount;
  return balance;
}

setBalance(500);
setBalance(500);
console.log("Idempotent balance after 2 calls:", balance); // 500 (Identical state!)

withdraw(100);
withdraw(100);
console.log("Non-idempotent balance after 2 calls:", balance); // 300 (Mutated twice!)`,
      caption: {
        en: 'Idempotency allows network retries without the danger of duplicating side effects.',
        bn: 'আইডেমপোটেন্সি কোনো অনাকাঙ্ক্ষিত পার্শ্বপ্রতিক্রিয়া ছাড়াই নিরাপদ নেটওয়ার্ক রিট্রাই নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Complete Method Spectrum: GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS', bn: '৪. প্রধান মেথডসমূহ: GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS' } },
    {
      type: 'para',
      text: {
        en: 'Each HTTP method serves a distinct operational purpose. GET retrieves representations, while HEAD returns identical headers without the body to check file size. POST submits data for processing or resource creation. PUT replaces entire resources, while DELETE removes them. PATCH applies partial modifications, and OPTIONS queries server capabilities.',
        bn: 'প্রতিটি HTTP মেথডের নির্দিষ্ট কাজ রয়েছে। GET ডেটা পড়ার জন্য, আর HEAD বডি ছাড়া কেবল হেডার দেখার জন্য ব্যবহৃত হয়। POST নতুন রিসোর্স তৈরি বা প্রসেসিংয়ের জন্য কাজে লাগে। PUT পুরো রিসোর্স প্রতিস্থাপনের জন্য এবং DELETE মুছে ফেলার জন্য ব্যবহৃত হয়। PATCH আংশিক পরিবর্তন করে এবং OPTIONS সার্ভারের সক্ষমতা জানায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const METHOD_MATRIX = {
  GET:     { safe: true,  idempotent: true,  bodyAllowed: false },
  HEAD:    { safe: true,  idempotent: true,  bodyAllowed: false },
  OPTIONS: { safe: true,  idempotent: true,  bodyAllowed: false },
  PUT:     { safe: false, idempotent: true,  bodyAllowed: true  },
  DELETE:  { safe: false, idempotent: true,  bodyAllowed: false },
  POST:    { safe: false, idempotent: false, bodyAllowed: true  },
  PATCH:   { safe: false, idempotent: false, bodyAllowed: true  }
};

console.log("Can retry DELETE automatically on timeout?", METHOD_MATRIX.DELETE.idempotent); // true
console.log("Can retry POST automatically on timeout?", METHOD_MATRIX.POST.idempotent);     // false`,
      caption: {
        en: 'The HTTP method matrix dictates caching eligibility and automatic retry safety.',
        bn: 'HTTP মেথড ম্যাট্রিক্স ঠিক করে দেয় কোন রিকোয়েস্ট ক্যাশ বা অটো-রিট্রাই করা যাবে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. PUT vs PATCH vs POST: Resource Mutation Contracts', bn: '৫. PUT বনাম PATCH বনাম POST: ডেটা পরিবর্তনের চুক্তি' } },
    {
      type: 'para',
      text: {
        en: 'Choosing between PUT, PATCH, and POST is a critical API design choice. PUT replaces the target resource entirely. Any omitted fields are overwritten or reset to null. PATCH applies a delta update, touching only specified fields. POST is the non-idempotent catch-all used when the server generates the new resource ID.',
        bn: 'PUT, PATCH এবং POST-এর মধ্যে পার্থক্য বোঝা এপিআই ডিজাইনের জন্য জরুরি। PUT একটি রিসোর্সকে পুরোপুরি নতুন ডেটা দিয়ে প্রতিস্থাপন করে। যা পাঠাবেন না তা মুছে বা নাল হয়ে যেতে পারে। PATCH কেবল পাঠানো নির্দিষ্ট ফিল্ডগুলো আপডেট করে। POST নতুন রিসোর্স তৈরিতে ব্যবহৃত হয় যেখানে সার্ভার নিজে আইডি তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Initial Resource: { id: 10, name: "Tanvir", role: "admin", active: true }

// 1. PUT /users/10 (Full Replacement):
// Payload: { name: "Tanvir Ahmed" }
// Result: { id: 10, name: "Tanvir Ahmed", role: null, active: null } -> Replaced!

// 2. PATCH /users/10 (Partial Mutation):
// Payload: { active: false }
// Result: { id: 10, name: "Tanvir", role: "admin", active: false } -> Merged!

// 3. POST /users (Creation under collection):
// Payload: { name: "Rahim" } -> Generates /users/11 with status 201 Created`,
      caption: {
        en: 'PUT replaces documents completely; PATCH updates specific properties; POST creates new resources.',
        bn: 'PUT পুরো ডকুমেন্ট প্রতিস্থাপন করে; PATCH আংশিক আপডেট করে; POST নতুন রিসোর্স তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Status Code Taxonomy: 1xx, 2xx, 3xx, 4xx & 5xx', bn: '৬. স্ট্যাটাস কোড শ্রেণিভেদ: 1xx, 2xx, 3xx, 4xx ও 5xx' } },
    {
      type: 'para',
      text: {
        en: 'HTTP status codes are grouped into five distinct semantic classes by their leading digit. The 1xx series is informational and handles protocol switching. Responses in 2xx signify successful completion. The 3xx tier indicates resource redirection. Client-side syntax or authentication errors belong to 4xx, while 5xx warnings announce origin server failures.',
        bn: 'HTTP স্ট্যাটাস কোডগুলো প্রথম সংখ্যা অনুযায়ী ৫টি স্বতন্ত্র শ্রেণিতে বিভক্ত। 1xx সিরিজটি তথ্যমূলক এবং প্রোটোকল সুইচিং সামলায়। 2xx সফল কাজ সম্পন্ন হওয়া প্রকাশ করে। 3xx স্তর নতুন ঠিকানায় রিডাইরেক্ট নির্দেশ করে। 4xx ক্লায়েন্টের ভুল বা অনুমোদনের অভাব বুঝায়, আর 5xx সার্ভারের অভ্যন্তরীণ ত্রুটি ঘোষণা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function categorizeStatusCode(status) {
  if (status >= 100 && status < 200) return "1xx Informational";
  if (status >= 200 && status < 300) return "2xx Success";
  if (status >= 300 && status < 400) return "3xx Redirection";
  if (status >= 400 && status < 500) return "4xx Client Error";
  if (status >= 500 && status < 600) return "5xx Server Error";
  return "Unknown Code";
}

console.log("Status 204 class:", categorizeStatusCode(204)); // 2xx Success
console.log("Status 403 class:", categorizeStatusCode(403)); // 4xx Client Error
console.log("Status 502 class:", categorizeStatusCode(502)); // 5xx Server Error`,
      caption: {
        en: 'The leading digit of an HTTP status code establishes the semantic category for all HTTP clients.',
        bn: 'স্ট্যাটাস কোডের প্রথম সংখ্যাটি ক্লায়েন্টকে সার্বিক ক্যাটাগরি স্পষ্টভাবে বুঝিয়ে দেয়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP Status Code Architecture & Semantic Classes', bn: 'HTTP স্ট্যাটাস কোড আর্কিটেকচার ও বিভাগসমূহ' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="HTTP Status Code 5 Classes Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="200" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="350" y="38" text-anchor="middle" font-weight="bold">HTTP Status Code 5-Tier Semantic Taxonomy</text><rect x="25" y="55" width="120" height="145" rx="6" fill="none" stroke="#6b7280" stroke-width="1"/><text x="85" y="75" text-anchor="middle" font-weight="bold" fill="#6b7280">1xx Info</text><text x="85" y="95" text-anchor="middle" font-size="11">Informational</text><text x="85" y="125" text-anchor="middle" font-size="10">100 Continue</text><text x="85" y="145" text-anchor="middle" font-size="10">101 Switching</text><text x="85" y="180" text-anchor="middle" font-size="9" fill="#6b7280">Protocol switch</text><rect x="155" y="55" width="120" height="145" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="215" y="75" text-anchor="middle" font-weight="bold" fill="#10b981">2xx Success</text><text x="215" y="95" text-anchor="middle" font-size="11">Successful</text><text x="215" y="125" text-anchor="middle" font-size="10">200 OK</text><text x="215" y="145" text-anchor="middle" font-size="10">201 Created</text><text x="215" y="165" text-anchor="middle" font-size="10">204 No Content</text><text x="215" y="185" text-anchor="middle" font-size="9" fill="#10b981">Action complete</text><rect x="285" y="55" width="120" height="145" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="345" y="75" text-anchor="middle" font-weight="bold" fill="#3b82f6">3xx Redirect</text><text x="345" y="95" text-anchor="middle" font-size="11">Redirection</text><text x="345" y="125" text-anchor="middle" font-size="10">301 Permanent</text><text x="345" y="145" text-anchor="middle" font-size="10">304 Not Modified</text><text x="345" y="165" text-anchor="middle" font-size="10">307 / 308 Preserved</text><text x="345" y="185" text-anchor="middle" font-size="9" fill="#3b82f6">Follow location</text><rect x="415" y="55" width="120" height="145" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="475" y="75" text-anchor="middle" font-weight="bold" fill="#f59e0b">4xx Client</text><text x="475" y="95" text-anchor="middle" font-size="11">Client Error</text><text x="475" y="125" text-anchor="middle" font-size="10">400 Bad Request</text><text x="475" y="145" text-anchor="middle" font-size="10">401 Auth Challenge</text><text x="475" y="165" text-anchor="middle" font-size="10">403 Forbidden Wall</text><text x="475" y="185" text-anchor="middle" font-size="9" fill="#f59e0b">Fix envelope</text><rect x="545" y="55" width="125" height="145" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="607" y="75" text-anchor="middle" font-weight="bold" fill="#ef4444">5xx Server</text><text x="607" y="95" text-anchor="middle" font-size="11">Server Error</text><text x="607" y="125" text-anchor="middle" font-size="10">500 Crash / Bug</text><text x="607" y="145" text-anchor="middle" font-size="10">502 Bad Gateway</text><text x="607" y="165" text-anchor="middle" font-size="10">503 Overloaded</text><text x="607" y="185" text-anchor="middle" font-size="9" fill="#ef4444">Origin failure</text></g></svg>`,
      caption: {
        en: 'The leading digit categorizes status semantics: 1xx informs, 2xx confirms, 3xx redirects, 4xx blames caller, 5xx blames server.',
        bn: 'প্রথম সংখ্যাটি স্ট্যাটাসের ধরন বোঝায়: 1xx তথ্য, 2xx সাফল্য, 3xx রিডাইরেক্ট, 4xx ক্লায়েন্টের ভুল, 5xx সার্ভারের ব্যর্থতা।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Successful Status Codes: 200 OK, 201 Created & 204 No Content', bn: '৭. সফল স্ট্যাটাস কোড: 200 OK, 201 Created ও 204 No Content' } },
    {
      type: 'para',
      text: {
        en: 'The 2xx class communicates successful execution. 200 OK is the standard response for successful GET and update operations. 201 Created indicates a new resource was created, returning a Location header with the new URI. 204 No Content indicates success with an empty body, saving bandwidth on deletions.',
        bn: '2xx সফল সমাপ্তি প্রকাশ করে। 200 OK সাধারণ সফল GET বা আপডেটের জন্য ব্যবহৃত হয়। 201 Created নির্দেশ করে নতুন ডেটা তৈরি হয়েছে এবং সাথে Location হেডারে নতুন লিংক দেওয়া হয়। 204 No Content নির্দেশ করে কাজটি সফল হয়েছে কিন্তু রেসপন্সে কোনো বডি নেই।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 201 Created
Location: /api/v1/orders/8941
Content-Type: application/json

{"orderId": 8941, "status": "confirmed"}

HTTP/1.1 204 No Content
Date: Sat, 26 Sep 2026 12:00:00 GMT
(Empty Body - zero payload bytes transmitted)`,
      caption: {
        en: '201 returns the new URI location; 204 saves bandwidth by omitting body payloads on deletions.',
        bn: '২০১ নতুন রিসোর্সের লোকেশন দেয়; ২০৪ ডেটা মুছে ফেলার পর কোনো বাড়তি ব্যান্ডউইথ খরচ করে না।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Client Errors: 400, 401 vs 403, and 404 vs 410', bn: '৮. ক্লায়েন্ট এরর: 400, 401 বনাম 403, এবং 404 বনাম 410' } },
    {
      type: 'para',
      text: {
        en: 'Client errors indicate faults in the request envelope. 400 Bad Request flags validation failures. 401 Unauthorized acts as a login challenge demanding authentication via WWW-Authenticate. 403 Forbidden means identity is verified, but permission is denied. 404 Not Found indicates an unknown URL, while 410 Gone indicates permanent intentional removal.',
        bn: 'ক্লায়েন্ট এরর নির্দেশ করে পাঠানো তথ্যে ভুল আছে। 400 Bad Request অবৈধ ডেটার জন্য দেওয়া হয়। 401 Unauthorized বলে আগে লগইন করো (WWW-Authenticate হেডারসহ)। 403 Forbidden বলে পরিচয় জানা আছে কিন্তু অনুমতি নেই। 404 Not Found মানে লিঙ্কটি খুঁজে পাওয়া যায়নি, আর 410 Gone মানে লিঙ্কটি চিরতরে মুছে ফেলা হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Distinction between 401 and 403:
function handleAccess(user, requiredRole) {
  if (!user) {
    // 401: Client is unauthenticated -> Present login challenge:
    return { status: 401, header: 'WWW-Authenticate: Bearer realm="app"' };
  }
  if (user.role !== requiredRole) {
    // 403: Client is authenticated, but forbidden from resource:
    return { status: 403, error: "Forbidden: Administrator role required" };
  }
  return { status: 200, access: "Granted" };
}

console.log("Unauthenticated visitor:", handleAccess(null, "admin").status);         // 401
console.log("Normal user accessing admin:", handleAccess({ role: "guest" }, "admin").status); // 403`,
      caption: {
        en: '401 challenges unauthenticated visitors to log in; 403 denies authenticated users lacking permission.',
        bn: '৪০১ লগইন করার চ্যালেঞ্জ ছুড়ে দেয়; ৪০৩ অনুমতিবিহীন লগইনকৃত ব্যবহারকারীকে ফিরিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Server Errors: 500, 502, 503 with Retry-After & 504', bn: '৯. সার্ভার এরর: 500, 502, 503 (Retry-After) ও 504' } },
    {
      type: 'para',
      text: {
        en: 'Server errors signify origin infrastructure breakdown. 500 Internal Server Error represents unhandled application crashes. 502 Bad Gateway means an edge proxy received an invalid response from upstream. 503 Service Unavailable signals temporary maintenance, accompanied by a Retry-After header. 504 Gateway Timeout occurs when upstream servers fail to respond in time.',
        bn: 'সার্ভার এরর নির্দেশ করে ব্যাকএন্ড পরিকাঠামোয় সমস্যা হয়েছে। 500 Internal Server Error মানে কোডে আনহ্যান্ডেল্ড ক্র্যাশ ঘটেছে। 502 Bad Gateway মানে রিভার্স প্রক্সি ভেতরের সার্ভার থেকে ভুল সংকেত পেয়েছে। 503 Service Unavailable মানে সার্ভারে সাময়িক কাজ চলছে (Retry-After হেডারসহ)। 504 Gateway Timeout মানে সময়মতো রেসপন্স আসেনি।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 503 Service Unavailable
Date: Sat, 26 Sep 2026 12:00:00 GMT
Content-Type: application/json
Retry-After: 30

{"error": "Database maintenance in progress. Retry in 30 seconds."}`,
      caption: {
        en: 'The Retry-After header on 503 responses instructs clients when to safely attempt automated retries.',
        bn: '৫০৩ রেসপন্সের সাথে থাকা Retry-After হেডার ক্লায়েন্টকে কতক্ষণ পর রিট্রাই করতে হবে তা বলে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. RESTful Verb Contracts & Avoiding RPC-over-GET Anti-Patterns', bn: '১০. RESTful ভার্ব চুক্তি ও RPC-over-GET ভুল এড়ানো' } },
    {
      type: 'para',
      text: {
        en: 'A dangerous architectural anti-pattern is executing mutations over GET. Web browsers and search engine crawlers aggressively pre-fetch GET links. Placing destructive mutations on GET can lead to crawlers accidentally deleting production records. Always map destructive actions strictly to POST or DELETE.',
        bn: 'একটি মারাত্মক ভুল আর্কিটেকচার হলো GET মেথডে ডেটা পরিবর্তন বা ডিলিট করা। ব্রাউজার ও সার্চ ইঞ্জিন ক্রলাররা লিংক পেলেই তা নিজে থেকে প্রি-ফেচ করতে থাকে। ফলে ক্রলারের রোবট সাইটে ঢুকে সব ডাটাবেস নিমেষে ডিলিট করে দিতে পারে। ডেটা পরিবর্তনের জন্য সর্বদা POST বা DELETE ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ DISASTROUS ANTI-PATTERN: Search crawler can trigger account deletion!
// router.get('/account/delete', (req, res) => db.deleteAccount(req.user.id));

// ✅ PROPER RESTFUL PROTOCOL:
// router.delete('/account', (req, res) => {
//   db.deleteAccount(req.user.id);
//   res.status(204).end();
// });

console.log("Mutations must strictly bind to unsafe methods (POST, PUT, DELETE, PATCH)");
// Output: Mutations must strictly bind to unsafe methods (POST, PUT, DELETE, PATCH)`,
      caption: {
        en: 'Never attach state mutations to Safe methods like GET to protect against accidental crawler triggers.',
        bn: 'ক্রলারদের হাত থেকে ডাটাবেস রক্ষা করতে GET মেথডে কখনো ডেটা পরিবর্তনের কাজ রাখবেন না।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-vrb-ex1',
      kind: 'predict',
      topic: 'http: safe read-only method',
      question: {
        en: 'Which standard HTTP method is guaranteed to be both Safe and Idempotent, used to retrieve representation data from a web server?',
        bn: 'ওয়েব সার্ভার থেকে ডেটা পড়ার জন্য কোন স্ট্যান্ডার্ড HTTP মেথডটি সর্বদা Safe এবং Idempotent হিসেবে বিবেচিত হয়?'
      },
      code: `/* Standard safe read-only retrieval method */
/* ____________ /api/products HTTP/1.1 */`,
      answer: 'GET',
      accept: ['GET', 'get'],
      hint: {
        en: 'The standard retrieve method.',
        bn: 'ডেটা পড়ার মূল মেথড।'
      },
      explanation: {
        en: 'GET is defined by HTTP specifications as Safe and Idempotent, intended strictly for read-only resource retrieval.',
        bn: 'HTTP স্ট্যান্ডার্ড অনুযায়ী GET সর্বদা নিরাপদ ও আইডেমপোটেন্ট এবং শুধু ডেটা পড়ার কাজে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'htt-vrb-ex2',
      kind: 'mcq',
      topic: 'http: 401 vs 403 distinction',
      question: {
        en: 'What is the operational difference between HTTP status code 401 Unauthorized and 403 Forbidden?',
        bn: 'HTTP স্ট্যাটাস কোড 401 Unauthorized এবং 403 Forbidden-এর মধ্যে প্রায়োগিক পার্থক্য কী?'
      },
      options: [
        { en: '401 challenges unauthenticated clients to log in via WWW-Authenticate; 403 means identity is verified but permission is denied', bn: '৪০১ পরিচয়বিহীন ক্লায়েন্টকে WWW-Authenticate দিয়ে লগইন করতে বলে; ৪০৩ মানে পরিচয় জানা আছে কিন্তু অনুমতি নেই' },
        { en: '401 is for mobile apps; 403 is for desktop browsers', bn: '৪০১ মোবাইলের জন্য আর ৪০৩ ডেস্কটপের জন্য' },
        { en: '403 means the server has crashed', bn: '৪০৩ মানে সার্ভার ক্র্যাশ করেছে' },
        { en: 'They are identical synonyms', bn: 'উভয়ই এক' }
      ],
      answer: 0,
      hint: {
        en: 'Authentication challenge vs permission denied.',
        bn: 'লগইন চ্যালেঞ্জ বনাম অনুমতি অস্বীকৃতি।'
      },
      explanation: {
        en: '401 indicates missing or invalid credentials, while 403 indicates insufficient privileges regardless of authentication.',
        bn: '৪০১ নির্দেশ করে লগইন করা নেই, আর ৪০৩ নির্দেশ করে লগইন থাকা সত্ত্বেও এই রিসোর্সে ঢোকার অনুমতি নেই।'
      }
    },
    {
      id: 'htt-vrb-ex3',
      kind: 'mcq',
      topic: 'http: 201 Created location header',
      question: {
        en: 'When an API creates a new database record and responds with status 201 Created, which HTTP header should contain the URI of the newly created resource?',
        bn: 'যখন কোনো API নতুন রেকর্ড তৈরি করে 201 Created পাঠায়, তখন কোন HTTP হেডারে নতুন রিসোর্সের লিংক দেওয়া উচিত?'
      },
      options: [
        { en: 'Location', bn: 'Location' },
        { en: 'Content-Type', bn: 'Content-Type' },
        { en: 'Set-Cookie', bn: 'Set-Cookie' },
        { en: 'Referer', bn: 'Referer' }
      ],
      answer: 0,
      hint: {
        en: 'The Location header.',
        bn: 'Location হেডার।'
      },
      explanation: {
        en: 'The Location header in a 201 Created response directs clients to the canonical URI of the newly minted resource.',
        bn: '২০১ রেসপন্সে Location হেডারের মাধ্যমে ক্লায়েন্টকে সদ্য তৈরিকৃত রিসোর্সের সরাসরি ইউআরএল জানিয়ে দেওয়া হয়।'
      }
    }
  ],
  quiz: {
    id: 'htt-vrb-quiz',
    title: { en: 'HTTP Methods & Status Codes Quiz', bn: 'HTTP মেথডস ও স্ট্যাটাস কোড কুইজ' },
    questions: [
      {
        id: 'hvq1',
        kind: 'mcq',
        topic: 'http: idempotency and retries',
        question: {
          en: 'Why is it safe for an automated client to retry a failed PUT or DELETE request on timeout, but dangerous to automatically retry a POST request?',
          bn: 'নেটওয়ার্ক টাইমআউটে কোনো ব্যর্থ PUT বা DELETE পুনরায় চেষ্টা করা নিরাপদ হলেও POST পুনরায় চালানো কেন ঝুঁকিপূর্ণ?'
        },
        options: [
          { en: 'PUT and DELETE are idempotent; retrying them leaves the server in the identical end state, whereas POST can duplicate orders', bn: 'PUT ও DELETE আইডেমপোটেন্ট; এগুলো বারবার চালালেও স্টেট এক থাকে, কিন্তু POST বারবার চালালে ডুপ্লিকেট অর্ডার তৈরি হতে পারে' },
          { en: 'POST requests cannot be transmitted over cellular data', bn: 'POST মোবাইল ডাটাতে চলে না' },
          { en: 'Browsers do not support retrying PUT', bn: 'ব্রাউজার PUT রিট্রাই করতে পারে না' },
          { en: 'DELETE requests are automatically cached by CDNs', bn: 'DELETE স্বয়ংক্রিয়ভাবে সিডিএন ক্যাশ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Idempotency guarantees identical end state.',
          bn: 'আইডেমপোটেন্সি একই শেষ অবস্থার নিশ্চয়তা দেয়।'
        },
        explanation: {
          en: 'Idempotent methods can be safely retried because multiple identical executions yield the same state. Non-idempotent POST requests risk duplicating records.',
          bn: 'আইডেমপোটেন্ট মেথড যতবারই চালানো হোক স্টেট এক থাকে, কিন্তু POST চালালে ডুপ্লিকেট অর্ডার বা একাধিক টাকা কাটার ঝুঁকি থাকে।'
        }
      },
      {
        id: 'hvq2',
        kind: 'mcq',
        topic: 'http: 404 vs 410 distinction',
        question: {
          en: 'When should a web server return HTTP 410 Gone instead of 404 Not Found?',
          bn: 'ওয়েব সার্ভারের কখন 404 Not Found-এর পরিবর্তে HTTP 410 Gone ফেরত দেওয়া উচিত?'
        },
        options: [
          { en: 'When the resource previously existed but has been permanently removed, instructing search engines to de-index it', bn: 'যখন রিসোর্সটি আগে ছিল কিন্তু চিরতরে মুছে ফেলা হয়েছে, যা সার্চ ইঞ্জিনকে ইনডেক্স থেকে বাদ দেওয়ার নির্দেশ দেয়' },
          { en: 'When the client forgot to include an API token', bn: 'যখন ক্লায়েন্ট টোকেন পাঠাতে ভুলে গেছে' },
          { en: 'When the server is rebooting', bn: 'যখন সার্ভার রিবুট হচ্ছে' },
          { en: 'There is no semantic difference', bn: 'কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Intentional permanent removal.',
          bn: 'ইচ্ছাকৃত ও স্থায়ী অপসারণ।'
        },
        explanation: {
          en: '410 Gone explicitly tells clients and search crawlers that the resource has been intentionally removed and will not return, causing crawlers to de-index it quickly.',
          bn: '৪১০ নির্দেশ করে লিঙ্কটি ইচ্ছা করেই চিরতরে সরানো হয়েছে, ফলে গুগল দ্রুত তার সার্চ তালিকা থেকে এটি সরিয়ে ফেলে।'
        }
      },
      {
        id: 'hvq3',
        kind: 'mcq',
        topic: 'http: 401 vs 403 semantic difference',
        question: {
          en: 'What is the critical semantic difference between HTTP 401 Unauthorized and HTTP 403 Forbidden?',
          bn: 'HTTP 401 Unauthorized এবং HTTP 403 Forbidden-এর মধ্যকার মূল অর্থগত পার্থক্য কোনটি?'
        },
        options: [
          { en: '401 is a challenge requiring valid authentication credentials (carrying WWW-Authenticate), whereas 403 is a permanent refusal wall regardless of authentication', bn: '৪০১ হলো একটি চ্যালেঞ্জ যেখানে লগইন বা প্রমাণ চাওয়া হয় (WWW-Authenticate সহ), আর ৪০৩ হলো স্থায়ী প্রাচীর যেখানে লগইন থাকলেও প্রবেশের অনুমতি নেই' },
          { en: '401 is for mobile phones and 403 is for laptops', bn: '৪০১ মোবাইলের জন্য এবং ৪০৩ ল্যাপটপের জন্য' },
          { en: '403 means the server hard drive is full', bn: '৪০৩ মানে সার্ভারের হার্ডডিস্ক পূর্ণ' },
          { en: 'Both status codes are strictly synonymous', bn: 'দুটো স্ট্যাটাস কোড হুবহু এক' }
        ],
        answer: 0,
        hint: {
          en: '401 is a doorway challenge; 403 is an authorization wall.',
          bn: '৪০১ হলো প্রবেশদ্বার চ্যালেঞ্জ; ৪০৩ হলো প্রাচীর।'
        },
        explanation: {
          en: 'HTTP 401 indicates missing or invalid authentication that can be resolved by supplying credentials; 403 indicates that credentials are confirmed but insufficient.',
          bn: '৪০১ জানায় পরিচয়পত্র দিলে ঢোকা যাবে, আর ৪০৩ জানায় পরিচয় নিশ্চিত হলেও আপনার এখানে ঢোকার অধিকার নেই।'
        }
      },
      {
        id: 'hvq4',
        kind: 'mcq',
        topic: 'http: safe method definition',
        question: {
          en: 'According to RFC 9110, which property defines an HTTP method as "Safe"?',
          bn: 'RFC 9110 স্পেসিফিকেশন অনুযায়ী কোন বৈশিষ্ট্য থাকলে একটি HTTP মেথডকে "নিরাপদ" (Safe) বলা হয়?'
        },
        options: [
          { en: 'The method is read-only and guarantees that calling it never causes server-side state mutation', bn: 'মেথডটি কেবল তথ্য পড়ার কাজে ব্যবহৃত হয় এবং সার্ভারের কোনো ডেটা বা অবস্থা পরিবর্তন করে না' },
          { en: 'The method uses military-grade encryption', bn: 'মেথডটি সামরিক মানের এনক্রিপশন ব্যবহার করে' },
          { en: 'The request is completed in under 5 milliseconds', bn: 'রিকোয়েস্ট ৫ মিলিসেকেন্ডের মধ্যে শেষ হয়' },
          { en: 'The request never touches any database', bn: 'অনুরোধটি কোনো ডাটাবেস স্পর্শ করে না' }
        ],
        answer: 0,
        hint: {
          en: 'Safe methods are strictly read-only.',
          bn: 'নিরাপদ মেথড কেবল পঠনযোগ্য, কোনো পরিবর্তন ঘটায় না।'
        },
        explanation: {
          en: 'Safe methods (GET, HEAD, OPTIONS) represent read-only operations that intermediaries and crawlers can invoke without fear of causing side effects.',
          bn: 'নিরাপদ মেথডগুলো (GET, HEAD, OPTIONS) সার্ভারের কোনো ডেটা না বদলে শুধু তথ্য দেখার সুযোগ দেয়।'
        }
      }
    ]
  }
};
