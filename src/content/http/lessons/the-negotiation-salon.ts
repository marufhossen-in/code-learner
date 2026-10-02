import type { Lesson } from '../../../lib/types';

export const theNegotiationSalonLesson: Lesson = {
  slug: 'the-negotiation-salon',
  tech: 'http',
  title: {
    en: 'Content Negotiation: Accept Headers, Quality Factors & Vary Mechanics',
    bn: 'কনটেন্ট সমঝোতা: Accept হেডার্স, কোয়ালিটি ফ্যাক্টর ও Vary মেকানিজম'
  },
  summary: {
    en: 'Master HTTP content negotiation across 10 structured topics. Understand how a single URL serves multiple representations. Compare server-driven and agent-driven negotiation. Learn media range syntax with types and wildcards. Master quality factors (q-values) and the precedence matching ladder. Study BCP 47 language negotiation and compression negotiation. Explore 406 Not Acceptable and 300 Multiple Choices outcomes. Understand why the Vary header is essential to prevent cache poisoning.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP কনটেন্ট নেগোসিয়েশন আয়ত্ত করুন। একটিমাত্র URL কীভাবে একাধিক ডেটা ফরম্যাট পরিবেশন করে তা বুঝুন। সার্ভার-চালিত বনাম ক্লায়েন্ট-চালিত সমঝোতা তুলনা করুন। টাইপ ও ওয়াইল্ডকার্ডসহ মিডিয়া রেঞ্জ সিনট্যাক্স শিখুন। কোয়ালিটি ফ্যাক্টর (q-values) ও প্রেসিডেন্স ম্যাচিং রুলস আয়ত্ত করুন। BCP 47 ভাষা সমঝোতা, কম্প্রেশন নেগোসিয়েশন, ৪০৬ ও ৩০০ স্ট্যাটাস কোড এবং ক্যাশ পয়জনিং রোধে Vary হেডারের ভূমিকা জানুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-cookie-jar',
    tech: 'http',
    title: {
      en: 'The Cookie Jar: State Management, 7 Inscriptions & Session Fixation Defense',
      bn: 'কুকি পাত্র: স্টেট ম্যানেজমেন্ট, ৭টি বৈশিষ্ট্য ও সেশন ফিক্সেশন প্রতিরোধ'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. What is Content Negotiation? One URI, Multiple Representations', bn: '১. কনটেন্ট সমঝোতা কী? এক URI, বহু রূপ' } },
    {
      type: 'para',
      text: {
        en: 'When you design web services using REST (Representational State Transfer) architecture, a URI identifies an abstract resource rather than a single fixed file. Content negotiation is the HTTP mechanism that lets your server deliver different representations of that resource based on client capabilities. For example, your endpoint /api/report can return HTML for a browser, JSON for a mobile app, or plain text for a terminal.',
        bn: 'আপনি যখন REST (Representational State Transfer) আর্কিটেকচারে ওয়েব সার্ভিস ডিজাইন করেন, তখন একটি URI কোনো একক নির্দিষ্ট ফাইলের বদলে একটি বিমূর্ত রিসোর্সকে নির্দেশ করে। কনটেন্ট সমঝোতা বা নেগোসিয়েশন হলো এমন একটি পদ্ধতি যার মাধ্যমে আপনার সার্ভার ক্লায়েন্টের চাহিদামতো একই ইউআরএল থেকে ভিন্ন ভিন্ন ফরম্যাটে ডেটা ফেরত দেয়। যেমন আপনার /api/report এন্ডপয়েন্ট একই ঠিকানা হওয়া সত্ত্বেও ব্রাউজারে HTML, মোবাইল অ্যাপে JSON এবং টার্মিনালে সাধারণ টেক্সট ফাইল পাঠাতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Browser client requesting HTML representation: */
GET /reports/quarterly HTTP/1.1
Host: api.codeshikhon.com
Accept: text/html

/* Mobile API client requesting JSON representation: */
GET /reports/quarterly HTTP/1.1
Host: api.codeshikhon.com
Accept: application/json`,
      caption: {
        en: 'The client uses the Accept header to declare which data representation it can process.',
        bn: 'ক্লায়েন্ট Accept হেডারের মাধ্যমে সার্ভারকে জানিয়ে দেয় সে কোন ফরম্যাটের ডেটা গ্রহণ করতে পারবে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Server-Driven vs Agent-Driven vs Reactive Negotiation', bn: '২. সার্ভার-চালিত বনাম ক্লায়েন্ট-চালিত সমঝোতা' } },
    {
      type: 'para',
      text: {
        en: 'HTTP defines two primary styles of content negotiation. Server-driven negotiation is the most common: the client sends preferences in headers, and the server chooses the best matching variant. Agent-driven negotiation lets the client select from options returned by the server, often initiated by a 300 Multiple Choices response.',
        bn: 'কনটেন্ট নেগোসিয়েশনের ২টি (দুইটি) প্রধান রূপ রয়েছে। সার্ভার-চালিত নেগোসিয়েশন সবচেয়ে বেশি ব্যবহৃত হয়: ক্লায়েন্ট হেডারে তার পছন্দের তালিকা পাঠায় এবং সার্ভার সবচেয়ে মানানসই ফরম্যাটটি বাছাই করে দেয়। ক্লায়েন্ট-চালিত নেগোসিয়েশনে সার্ভার ৩০০ Multiple Choices দিয়ে বিকল্পগুলোর তালিকা পাঠায় এবং ক্লায়েন্ট নিজে পছন্দ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express server executing server-driven content negotiation:
app.get("/api/profile", (req, res) => {
  res.format({
    "application/json": () => {
      res.json({ user: "Tanvir", role: "admin" });
    },
    "text/html": () => {
      res.send("<h1>User Profile: Tanvir</h1>");
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    }
  });
});`,
      caption: {
        en: 'res.format executes server-driven negotiation, matching client Accept headers against handlers.',
        bn: 'res.format ক্লায়েন্টের Accept হেডারের সাথে মিলিয়ে স্বয়ংক্রিয়ভাবে সঠিক রেসপন্স বাছাই করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Media Range Anatomy: Types, Subtypes & Wildcards', bn: '৩. মিডিয়া রেঞ্জের গঠন: Types, Subtypes ও Wildcards' } },
    {
      type: 'para',
      text: {
        en: 'The Accept header contains a comma-separated list of media ranges formatted as type/subtype. Ranges can be exact (application/json), type-wildcards (text/* matching any text representation), or full wildcards (*/* accepting any available format). Explicit media parameters (such as version=2) increase specificity.',
        bn: 'Accept হেডারে কমা দিয়ে মিডিয়া রেঞ্জ তালিকাভুক্ত থাকে যা type/subtype ফরম্যাটে লেখা হয়। এটি সম্পূর্ণ নির্দিষ্ট হতে পারে (application/json), টাইপ-ওয়াইল্ডকার্ড হতে পারে (text/* যা যেকোনো টেক্সট ফরম্যাট সমর্থন করে), অথবা সর্বজনীন ওয়াইল্ডকার্ড হতে পারে (*/* যা যেকোনো ফাইল মেনে নেয়)।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Standard web browser Accept header: */
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8

/* Meaning: Prefer HTML/XHTML -> then XML (0.9) -> WebP images -> then anything else (0.8) */`,
      caption: {
        en: 'Browsers declare fallback chains ranging from preferred HTML to universal wildcards.',
        bn: 'ব্রাউজার পছন্দের ক্রম সাজিয়ে সবার শেষে যেকোনো ফরম্যাট মেনে নেওয়ার ওয়াইল্ডকার্ড রাখে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Quality Value (q-factor): Syntax & The q=0 Veto', bn: '৪. কোয়ালিটি ফ্যাক্টর (q-factor): সিনট্যাক্স ও q=0 ভেটো' } },
    {
      type: 'para',
      text: {
        en: 'Quality values (q-factors) express relative preference on a scale from 0.0 to 1.0 with up to three decimal places. Unspecified entries implicitly default to q=1.0 (highest preference). Crucially, setting q=0 serves as an explicit veto, instructing the server never to return that format under any circumstances.',
        bn: 'কোয়ালিটি ফ্যাক্টর (q-factor) ০.০ থেকে ১.০ পর্যন্ত স্কেলে (সর্বোচ্চ ৩ দশমিক স্থান পর্যন্ত) ক্লায়েন্টের পছন্দের মাত্রা প্রকাশ করে। কোনো q উল্লেখ না থাকলে ডিফল্টভাবে q=1.0 (সর্বোচ্চ পছন্দ) ধরা হয়। সবচেয়ে জরুরি বিষয় হলো, q=0 দেওয়া মানে স্পষ্ট ভেটো প্রয়োগ করা, অর্থাৎ এই ফরম্যাটে কোনো অবস্থাতেই ডেটা পাঠানো যাবে না।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Accept JSON primarily, fallback to CSV, strictly forbid XML: */
Accept: application/json, text/csv;q=0.7, application/xml;q=0

/* application/json has implicit q=1.0 (Highest) */
/* text/csv has q=0.7 (Acceptable fallback) */
/* application/xml has q=0 (EXPLICIT VETO - return 406 rather than sending XML!) */`,
      caption: {
        en: 'q=1.0 represents highest preference, while q=0 represents an absolute veto.',
        bn: 'q=1.0 হলো সর্বোচ্চ অগ্রাধিকার এবং q=0 হলো যেকোনো ফরম্যাটের বিরুদ্ধে নিশ্চিত ভেটো।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP Content Negotiation & Variant Resolution Engine', bn: 'HTTP কনটেন্ট নেগোসিয়েশন ও ভ্যারিয়েন্ট রেজোলিউশন ইঞ্জিন' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Content Negotiation Resolution Flow Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="200" height="200" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="115" y="40" text-anchor="middle" font-weight="bold" fill="#3b82f6">1. Client Request</text><rect x="25" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="75" font-size="11">Accept: application/json;q=1</text><text x="35" y="90" font-size="10">• Primary desired format</text><rect x="25" y="105" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="35" y="125" font-size="11">Accept: text/csv;q=0.7</text><text x="35" y="140" font-size="10">• Secondary fallback format</text><rect x="25" y="155" width="180" height="48" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="35" y="175" font-size="11">Accept: application/xml;q=0</text><text x="35" y="192" font-size="10" fill="#ef4444">• Explicit Veto: never send XML</text><rect x="250" y="15" width="200" height="200" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" font-weight="bold" fill="#f59e0b">2. Specificity Ladder</text><rect x="260" y="55" width="180" height="32" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="270" y="75" font-size="11">1. Exact: type/subtype;param</text><rect x="260" y="92" width="180" height="32" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="270" y="112" font-size="11">2. Exact: type/subtype</text><rect x="260" y="129" width="180" height="32" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="270" y="149" font-size="11">3. Type Wildcard: text/*</text><rect x="260" y="166" width="180" height="35" rx="6" fill="none" stroke="#ef4444" stroke-width="1"/><text x="270" y="186" font-size="11">4. Universal Wildcard: */*</text><rect x="485" y="15" width="200" height="200" rx="8" fill="none" stroke="#10b981" stroke-width="1.5"/><text x="585" y="40" text-anchor="middle" font-weight="bold" fill="#10b981">3. Server Response</text><rect x="495" y="55" width="180" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><text x="505" y="75" font-size="11">Status: 200 OK</text><text x="505" y="90" font-size="10">• Successful negotiation</text><rect x="495" y="105" width="180" height="42" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="505" y="125" font-size="11" font-weight="bold">Content-Type: JSON</text><text x="505" y="140" font-size="10">• Delivers highest weight match</text><rect x="495" y="155" width="180" height="48" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1"/><text x="505" y="175" font-size="11" font-weight="bold">Vary: Accept</text><text x="505" y="192" font-size="10">• Edge caches index by Accept</text></g></svg>`,
      caption: {
        en: 'The server negotiates formats using quality weights and specificity rules, returning Vary to preserve edge caching integrity.',
        bn: 'সার্ভার পছন্দের মাত্রা ও নির্দিষ্টতার ভিত্তিতে ফরম্যাট নির্বাচন করে এবং সিডিএন সুরক্ষায় Vary হেডার যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Precedence Matching Ladder: Specificity Over Quality', bn: '৫. প্রেসিডেন্স ম্যাচিং সিঁড়ি: কোয়ালিটির ওপর নির্দিষ্টতার প্রাধান্য' } },
    {
      type: 'para',
      text: {
        en: 'When selecting the winning variant, specificity ranks higher than quality factors. The RFC precedence ladder sorts: 1) Exact type/subtype with parameters; 2) Exact type/subtype; 3) Type wildcards (text/*); 4) Universal wildcards (*/*). If an exact match exists, a wildcard cannot override it simply because the wildcard has a higher q-value.',
        bn: 'কোন ফরম্যাটটি জয়ী হবে তা ঠিক করার সময় নির্দিষ্টতার মান (specificity) সবার আগে দেখা হয়। আরএফসি নিয়ম অনুযায়ী: ১) প্যারামিটারযুক্ত নির্দিষ্ট ফরম্যাট; ২) সাধারণ নির্দিষ্ট ফরম্যাট; ৩) টাইপ ওয়াইল্ডকার্ড (text/*); ৪) সর্বজনীন ওয়াইল্ডকার্ড (*/*)। নির্দিষ্ট মিল থাকলে বেশি q-মান থাকা সত্ত্বেও ওয়াইল্ডকার্ড তা ভাঙতে পারে না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Matching Algorithm Demonstration:
// Client Header: Accept: text/*;q=0.5, application/json;q=0.9
// Server Available: ["text/html", "application/json"]

// application/json is an exact match (Rung 2) with q=0.9 -> WINS!
// text/html only matches the wildcard text/* (Rung 3) with q=0.5

console.log("Exact media types outrank wildcards before quality values evaluate");
// Output: Exact media types outrank wildcards before quality values evaluate`,
      caption: {
        en: 'Exact media matches outrank wildcard ranges regardless of position in the header list.',
        bn: 'তালিকার ক্রম যাই হোক না কেন, নির্দিষ্ট ফরম্যাটের মিল সর্বদা ওয়াইল্ডকার্ডের ওপরে স্থান পায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Language Negotiation: Accept-Language & BCP 47 Subtags', bn: '৬. ভাষা সমঝোতা: Accept-Language ও BCP 47 সাবট্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Language negotiation uses the Accept-Language header carrying BCP 47 language tags (e.g. "en-US", "bn-BD"). Prefix filtering matches broadly: a range of "en" matches "en-US" and "en-GB". However, requesting "en-US" specifically does not match generic "en" stock. The server announces the winning language via Content-Language.',
        bn: 'ভাষা সমঝোতায় BCP 47 স্ট্যান্ডার্ড মেনে Accept-Language হেডার পাঠানো হয় (যেমন "en-US", "bn-BD")। সাধারণ "en" দিলে তা "en-US" বা "en-GB" যেকোনোটিকে গ্রহণ করে। কিন্তু ক্লায়েন্ট যদি সুনির্দিষ্টভাবে "en-US" চায়, তবে শুধু "en" ডেটা তাকে দেওয়া নিয়মবহির্ভূত। সার্ভার কোন ভাষায় উত্তর দিয়েছে তা Content-Language হেডারে জানায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client requests Bengali first, then English: */
GET /dashboard HTTP/1.1
Accept-Language: bn-BD, bn;q=0.9, en-US;q=0.7, en;q=0.5

/* Server serves Bengali and declares it in response: */
HTTP/1.1 200 OK
Content-Language: bn
Vary: Accept-Language`,
      caption: {
        en: 'Content-Language states the natural language of the audience for the returned document.',
        bn: 'Content-Language রেসপন্সে পাঠানো তথ্যের আসল মানবিক ভাষাটি পরিষ্কারভাবে জানিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Compression Negotiation: Accept-Encoding & The Identity Fallback', bn: '৭. কম্প্রেশন সমঝোতা: Accept-Encoding ও Identity ফলব্যাক' } },
    {
      type: 'para',
      text: {
        en: 'Clients declare supported compression algorithms using Accept-Encoding. Modern browsers support "br" (Brotli), "gzip", and "deflate". The special token "identity" refers to uncompressed raw bytes. The server compresses the stream using the highest-priority supported algorithm and declares it in Content-Encoding.',
        bn: 'ক্লায়েন্ট কোন কোন কম্প্রেশন অ্যালগরিদম বোঝে তা Accept-Encoding হেডারে জানিয়ে দেয়। আধুনিক ব্রাউজারগুলো "br" (Brotli), "gzip" ও "deflate" সমর্থন করে। "identity" টোকেনটির মানে হলো কোনো কম্প্রেশন ছাড়া সাধারণ টেক্সট পাঠানো। সার্ভার সবচেয়ে শক্তিশালী কম্প্রেশন প্রয়োগ করে Content-Encoding হেডারে তা উল্লেখ করে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client offers compression algorithms: */
GET /app.js HTTP/1.1
Accept-Encoding: gzip, deflate, br, zstd

/* Server compresses with modern Brotli: */
HTTP/1.1 200 OK
Content-Type: application/javascript
Content-Encoding: br
Vary: Accept-Encoding`,
      caption: {
        en: 'Content-Encoding informs the client which decompression algorithm must be applied.',
        bn: 'Content-Encoding ব্রাউজারকে নির্দেশ দেয় ডেটা পড়তে কোন ডিকম্প্রেশন টুল ব্যবহার করতে হবে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Negotiation Outcomes: 406 Not Acceptable vs 300 Multiple Choices', bn: '৮. সমঝোতার ফলাফল: 406 Not Acceptable বনাম 300 Multiple Choices' } },
    {
      type: 'para',
      text: {
        en: 'If a client requests formats that the server cannot supply (or vetoed via q=0), the server returns HTTP 406 Not Acceptable. This avoids guessing and delivering an incompatible payload. Alternatively, HTTP 300 Multiple Choices provides a list of links, delegating selection directly to the user or agent.',
        bn: 'ক্লায়েন্টের চাওয়া ফরম্যাট যদি সার্ভারের কাছে না থাকে (বা q=0 দিয়ে ভেটো দেওয়া থাকে), তবে সার্ভার 406 Not Acceptable কোড পাঠায়। এর ফলে ক্লায়েন্টের না বোঝা কোনো ভুল ডেটা পাঠানো আটকানো যায়। আবার 300 Multiple Choices দিয়ে সার্ভার সবগুলো ফরম্যাটের লিংক পাঠিয়ে ক্লায়েন্টকে নিজে পছন্দ করতে দিতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client strictly demands XML: */
GET /api/user/10 HTTP/1.1
Accept: application/xml

/* Server only stocks JSON, refuses to send incompatible data: */
HTTP/1.1 406 Not Acceptable
Content-Type: application/json

{"error": "Supported formats: application/json, text/csv"}`,
      caption: {
        en: 'Status 406 prevents the delivery of data formats that the client explicitly cannot parse.',
        bn: '৪০৬ স্ট্যাটাস কোড ক্লায়েন্ট পার্স করতে পারে না এমন অসঙ্গতিপূর্ণ ডেটা পাঠানো প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. The Invalidation Debt: Why the Vary Header is Mandatory', bn: '৯. ক্যাশ ঋণ: Vary হেডার প্রদান করা কেন বাধ্যতামূলক' } },
    {
      type: 'para',
      text: {
        en: 'Whenever a server negotiates content, it produces different representations at the identical URL. Shared CDN caches must be informed of this. The server MUST include a Vary header naming the negotiated dimensions (e.g. Vary: Accept, Accept-Language). Without Vary, a shared cache might serve French HTML to a Bengali visitor.',
        bn: 'যখনই একটি ইউআরএল থেকে ভিন্ন ভিন্ন ফরম্যাটে ডেটা দেওয়া হয়, সিডিএন ক্যাশকে তা অবশ্যই জানাতে হয়। এজন্য রেসপন্সে Vary হেডার দিয়ে কোন কোন হেডারের ওপর ভিত্তি করে ডেটা বদলেছে তা বলে দিতে হয় (যেমন Vary: Accept, Accept-Language)। Vary না দিলে ক্যাশ ভুলবশত একজনের ফরাসি ভাষার ফাইল অন্য বাঙালি ভিজিটরের কাছে পাঠিয়ে দেবে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `HTTP/1.1 200 OK
Content-Type: application/json
Content-Language: bn
Content-Encoding: br
Vary: Accept, Accept-Language, Accept-Encoding

/* Caches now maintain unique cache entries for each combination of these headers! */`,
      caption: {
        en: 'The Vary header instructs intermediate caches to segment entries along negotiated dimensions.',
        bn: 'Vary হেডার ক্যাশকে নির্দেশ দেয় সমঝোতাকৃত বৈশিষ্ট্যের ভিত্তিতে আলাদা ক্যাশ স্লট তৈরি করতে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Modern Evolution: Client Hints and Accept-Based API Versioning', bn: '১০. আধুনিক বিবর্তন: Client Hints ও Accept-ভিত্তিক API ভার্সনিং' } },
    {
      type: 'para',
      text: {
        en: 'Modern web architectures extend negotiation beyond MIME types. Responsive image selection uses Client Hints (Sec-CH-DPR, Sec-CH-Width) to serve appropriately sized images. Enterprise REST APIs use custom Accept headers (e.g. Accept: application/vnd.company.v2+json) to handle versioning cleanly without polluting URL paths.',
        bn: 'আধুনিক ওয়েবে ফাইল টাইপের বাইরেও নেগোসিয়েশন ব্যবহৃত হয়। যেমন ব্রাউজারের স্ক্রিন সাইজ অনুযায়ী ছবি পাঠাতে Client Hints (Sec-CH-DPR, Sec-CH-Width) ব্যবহার করা হয়। তাছাড়া প্রফেশনাল এপিআইগুলোতে ইউআরএল নোংরা না করে Accept হেডারের ভেতর ভার্সন (যেমন application/vnd.company.v2+json) পাঠিয়ে ভার্সনিং নিয়ন্ত্রণ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Enterprise API versioning through Accept header: */
GET /api/customers HTTP/1.1
Host: api.enterprise.com
Accept: application/vnd.codeshikhon.v2+json

/* Server parses vendor subtype to route to version 2 controller cleanly */`,
      caption: {
        en: 'Vendor Accept headers allow RESTful API versioning without changing resource URIs.',
        bn: 'ভেন্ডর Accept হেডার রিসোর্সের ইউআরএল অপরিবর্তিত রেখেই পরিচ্ছন্নভাবে এপিআই ভার্সন বদলাতে সাহায্য করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-neg-ex1',
      kind: 'predict',
      topic: 'http: quality factor veto value',
      question: {
        en: 'Which quality factor value (q-value) acts as an explicit veto in an Accept header, instructing the server that the specified format is strictly unacceptable?',
        bn: 'Accept হেডারে কোন কোয়ালিটি ফ্যাক্টর মানটি (q-value) সরাসরি ভেটো হিসেবে কাজ করে এবং সার্ভারকে নির্দেশ দেয় যে এই ফরম্যাটটি একেবারেই গ্রহণযোগ্য নয়?'
      },
      code: `/* Explicitly vetoing XML format in Accept header */
/* Accept: application/json, application/xml;q=____________ */`,
      answer: '0',
      accept: ['0', '0.0', '0.000'],
      hint: {
        en: 'A quality factor of zero.',
        bn: 'শূন্য কোয়ালিটি ফ্যাক্টর।'
      },
      explanation: {
        en: 'Setting q=0 represents an absolute refusal or veto, informing the server not to deliver that format.',
        bn: 'q=0 মানটি সরাসরি ভেটো নির্দেশ করে যার ফলে সার্ভার ওই ফরম্যাটে কোনো রেসপন্স পাঠায় না।'
      }
    },
    {
      id: 'htt-neg-ex2',
      kind: 'mcq',
      topic: 'http: negotiation failure status',
      question: {
        en: 'Which HTTP status code is returned when the origin server cannot deliver any representation matching the client Accept headers?',
        bn: 'ক্লায়েন্টের পাঠানো Accept হেডারের সাথে মেলানো সম্ভব এমন কোনো ফরম্যাট সার্ভারের কাছে না থাকলে সার্ভার কোন HTTP স্ট্যাটাস কোড পাঠায়?'
      },
      options: [
        { en: '406 Not Acceptable', bn: '৪০৬ Not Acceptable (অননুমোদিত)' },
        { en: '415 Unsupported Media Type', bn: '৪১৫ Unsupported Media Type (অসমর্থিত)' },
        { en: '404 Not Found', bn: '৪০৪ Not Found (পাওয়া যায়নি)' },
        { en: '502 Bad Gateway', bn: '৫০২ Bad Gateway (গেটওয়ে ত্রুটি)' }
      ],
      answer: 0,
      hint: {
        en: 'Status code 406.',
        bn: 'স্ট্যাটাস কোড ৪০৬।'
      },
      explanation: {
        en: 'HTTP 406 Not Acceptable indicates that the server cannot produce a response matching the Accept preferences sent by the client.',
        bn: 'HTTP 406 Not Acceptable নির্দেশ করে ক্লায়েন্টের চাওয়া ফরম্যাটের সাথে সার্ভারের মজুদের কোনো মিল নেই।'
      }
    },
    {
      id: 'htt-neg-ex3',
      kind: 'mcq',
      topic: 'http: Vary header necessity',
      question: {
        en: 'Why must a server include "Vary: Accept-Encoding" when delivering compressed responses to clients?',
        bn: 'কমপ্রেসড রেসপন্স পাঠানোর সময় সার্ভারের কেন "Vary: Accept-Encoding" হেডার অন্তর্ভুক্ত করা আবশ্যক?'
      },
      options: [
        { en: 'To instruct shared CDN caches not to serve compressed Brotli/Gzip bytes to clients that only support uncompressed text', bn: 'শেয়ার্ড সিডিএন ক্যাশকে নির্দেশ দিতে যেন তারা কম্প্রেশন অসমর্থিত ব্রাউজারে ভুলবশত জিপ বা ব্রটলি ডেটা না পাঠায়' },
        { en: 'To enable HTTPS encryption', bn: 'HTTPS এনক্রিপশন চালু করতে' },
        { en: 'To compress the HTTP headers', bn: 'হেডার সাইজ কমাতে' },
        { en: 'To delete browser cookies', bn: 'কুকি মুছে ফেলতে' }
      ],
      answer: 0,
      hint: {
        en: 'Prevents sending compressed bytes to clients that cannot decompress them.',
        bn: 'অসমর্থিত ব্রাউজারে ভুল ডেটা পৌঁছানো রোধ করে।'
      },
      explanation: {
        en: 'Without Vary: Accept-Encoding, an intermediary cache might store a compressed response and serve it to a client incapable of decompressing it.',
        bn: 'Vary না থাকলে ক্যাশ মেমরি কমপ্রেসড ফাইল ধরে রেখে অন্য সাধারণ ব্রাউজারকে তা পাঠিয়ে দিলে ব্রাউজার ক্র্যাশ করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'htt-neg-quiz',
    title: { en: 'HTTP Content Negotiation Quiz', bn: 'HTTP কনটেন্ট নেগোসিয়েশন কুইজ' },
    questions: [
      {
        id: 'hnq1',
        kind: 'mcq',
        topic: 'http: specificity vs quality factor',
        question: {
          en: 'Given the header "Accept: text/*;q=0.9, text/html;q=0.5", which format wins when the server stocks both text/plain and text/html?',
          bn: '"Accept: text/*;q=0.9, text/html;q=0.5" হেডার থাকলে এবং সার্ভারে text/plain ও text/html উভয়ই থাকলে কোনটি জয়ী হবে?',
        },
        options: [
          { en: 'text/html wins, because exact media type matches outrank wildcard ranges regardless of quality factor values', bn: 'text/html জয়ী হবে, কারণ কোয়ালিটি ফ্যাক্টরের মানের চেয়ে নির্দিষ্ট ফরম্যাটের মিল সর্বদা উচ্চ মর্যাদা পায়' },
          { en: 'text/plain wins because 0.9 is higher than 0.5', bn: 'text/plain জয়ী হবে কারণ ০.৯ মানটি ০.৫-এর চেয়ে বড়' },
          { en: 'The server crashes with a conflict', bn: 'সার্ভার কনফ্লিক্ট এরর দেবে' },
          { en: 'The browser cancels the connection', bn: 'কানেকশন বন্ধ হবে' }
        ],
        answer: 0,
        hint: {
          en: 'Specificity ladder beats q-value.',
          bn: 'নির্দিষ্টতার নিয়ম q-মানের চেয়ে শক্তিশালী।'
        },
        explanation: {
          en: 'The RFC precedence ladder dictates that specific types (text/html) outrank wildcards (text/*) before quality values are evaluated.',
          bn: 'আরএফসি নিয়ম অনুযায়ী নির্দিষ্ট ফরম্যাট (text/html) ওয়াইল্ডকার্ডের চেয়ে উচ্চতর সিঁড়িতে থাকে, তাই কম q থাকলেও এটি জয়ী হয়।'
        }
      },
      {
        id: 'hnq2',
        kind: 'mcq',
        topic: 'http: 415 vs 406 difference',
        question: {
          en: 'What is the operational difference between status 415 Unsupported Media Type and status 406 Not Acceptable?',
          bn: '415 Unsupported Media Type এবং 406 Not Acceptable-এর মধ্যে প্রায়োগিক পার্থক্য কী?'
        },
        options: [
          { en: '415 indicates the server rejects the payload sent in the client request (Content-Type); 406 indicates the server cannot deliver what the client requested (Accept)', bn: '৪১৫ নির্দেশ করে ক্লায়েন্টের পাঠানো বডির ফরম্যাট ভুল (Content-Type); ৪০৬ নির্দেশ করে ক্লায়েন্টের চাওয়া ফরম্যাট সার্ভারের কাছে নেই (Accept)' },
          { en: '415 is for images only; 406 is for text only', bn: '৪১৫ শুধু ছবির জন্য আর ৪০৬ টেক্সটের জন্য' },
          { en: 'They are identical synonyms', bn: 'তারা সম্পূর্ণ একই জিনিস' },
          { en: '415 occurs only on mobile networks', bn: '৪১৫ শুধু মোবাইল নেটওয়ার্কে ঘটে' }
        ],
        answer: 0,
        hint: {
          en: 'Inbound payload vs outbound requested representation.',
          bn: 'আগত বডির ফরম্যাট বনাম বহির্গামী চাওয়া ফরম্যাট।'
        },
        explanation: {
          en: '415 relates to inbound request body formatting (Content-Type), while 406 relates to outbound response negotiation (Accept).',
          bn: 'ক্লায়েন্টের পাঠানো ডেটা ভুল ফরম্যাটের হলে ৪১৫ দেওয়া হয়, আর সার্ভারের কাছে ক্লায়েন্টের পছন্দের ফরম্যাট না থাকলে ৪০৬ দেওয়া হয়।'
        }
      },
      {
        id: 'hnq3',
        kind: 'mcq',
        topic: 'rest: q=0 explicit veto mechanism',
        question: {
          en: 'What occurs when a client specifies "q=0" for a media type in an Accept header (e.g. Accept: application/xml;q=0)?',
          bn: 'ক্লায়েন্ট যখন Accept হেডারে কোনো মিডিয়া টাইপের জন্য "q=0" নির্ধারণ করে (যেমন Accept: application/xml;q=0), তখন কী ঘটে?'
        },
        options: [
          { en: 'It acts as an absolute veto; the server must never return that format and should return 406 Not Acceptable if no other format is available', bn: 'এটি একটি নিশ্চিত ভেটো হিসেবে কাজ করে; সার্ভার কোনো অবস্থাতেই ওই ফরম্যাটে ডেটা দেবে না এবং বিকল্প না থাকলে ৪০৬ Not Acceptable পাঠাবে' },
          { en: 'It makes XML the default format', bn: 'এটি এক্সএমএলকে ডিফল্ট ফরম্যাট বানিয়ে ফেলে' },
          { en: 'It converts the response to a PDF download', bn: 'এটি পিডিএফ ডাউনলোড শুরু করে' },
          { en: 'It deletes the XML files from the database', bn: 'ডাটাবেস থেকে এক্সএমএল ফাইল মুছে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Absolute veto barring format delivery.',
          bn: 'নির্দিষ্ট ফরম্যাট নিষিদ্ধ করার পরম ভেটো।'
        },
        explanation: {
          en: 'RFC 9110 specifies that a q-factor of 0 indicates that the client does not accept that format under any circumstances.',
          bn: 'RFC ৯১১০ অনুযায়ী q=0 দেওয়া মানে ক্লায়েন্ট ওই ফরম্যাট কোনো অবস্থাতেই গ্রহণ করবে না।'
        }
      },
      {
        id: 'hnq4',
        kind: 'mcq',
        topic: 'http: 300 multiple choices agent-driven negotiation',
        question: {
          en: 'Which HTTP status code is designated for Agent-Driven content negotiation, presenting a list of available representations for the client to select from?',
          bn: 'ক্লায়েন্ট-চালিত (Agent-Driven) কনটেন্ট নেগোসিয়েশনে উপলব্ধ ফরম্যাটগুলোর তালিকা ক্লায়েন্টের কাছে পাঠানোর জন্য কোন HTTP স্ট্যাটাস কোডটি নির্ধারিত?'
        },
        options: [
          { en: 'HTTP 300 Multiple Choices', bn: 'বিকল্প তালিকার জন্য HTTP 300 Multiple Choices' },
          { en: 'HTTP 204 No Content', bn: 'বডিহীন রেসপন্সের জন্য HTTP 204 No Content' },
          { en: 'HTTP 404 Not Found', bn: 'না পাওয়ার জন্য HTTP 404 Not Found' },
          { en: 'HTTP 502 Bad Gateway', bn: 'সার্ভার ভুলের জন্য HTTP 502 Bad Gateway' }
        ],
        answer: 0,
        hint: {
          en: 'Status 300 Multiple Choices.',
          bn: 'স্ট্যাটাস ৩০০ Multiple Choices।'
        },
        explanation: {
          en: 'HTTP 300 Multiple Choices indicates that the target resource has more than one representation, each with its own identifier, letting the client choose.',
          bn: 'HTTP ৩০০ নির্দেশ করে যে রিসোর্সটির ১টি বা একাধিক রূপ রয়েছে এবং ক্লায়েন্ট নিজের পছন্দমতো রূপটি বেছে নিতে পারে।'
        }
      }
    ]
  }
};
