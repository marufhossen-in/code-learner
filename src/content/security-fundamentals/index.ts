import type { Hub } from '../../lib/types';
import { jwtAnatomyLesson } from './lessons/jwt-anatomy';
import { securityThinkingLesson } from './lessons/security-thinking';
import { passwordFoundryLesson } from './lessons/the-password-foundry';
import { needleCourtLesson } from './lessons/the-needle-court';
import { scriptTribunalLesson } from './lessons/the-script-tribunal';
import { counterfeitCourierLesson } from './lessons/the-counterfeit-courier';
import { protocolSealsLesson } from './lessons/the-protocol-seals';
import { authorityKeepLesson } from './lessons/the-authority-keep';
import { closedLedgerLesson } from './lessons/the-closed-ledger';

export const securityHub: Hub = {
  slug: 'security-fundamentals',
  name: 'Security',
  icon: '🛡️',
  tagline: {
    en: 'Assume every byte is lying. Verify anyway. Ships in every request.',
    bn: 'ধরুন প্রতি বাইট মিথ্যা বলছে। তবু যাচাই করুন। প্রতি রিকোয়েস্টে চলে।',
  },
  about: {
    en: 'Security is the discipline that survives every other abstraction on this platform: the SQL hub’s queries die to injection if you concatenate, the Networking hub’s cookies ride along uninvited to CSRF, and every API is a public proposal the server must not trust. This hub builds the defender’s mindset first — the CIA triad, trust boundaries, hashing vs encryption vs encoding, and the three villains (injection, XSS, CSRF) — then dissects the artifact of modern authentication: the JWT. You will sign real HMAC-SHA256 tokens in the lab, flip your role to admin with a tamper button, and watch a correct verifier reject you, byte by byte. By the end, “secure by default” stops being a slogan and becomes a storage-choice, an algorithm-pin, and a verification order.',
    bn: 'নিরাপত্তা সেই শৃঙ্খলা যা এই প্ল্যাটফর্মের প্রতটি অ্যাবস্ট্রাকশনকে টিকিয়ে রাখে: জোড়ালাগানো করলে SQL হাবের কোয়েরি মরে ইনজেকশনে, Networking হাবের কুকি CSRF-এ অনাহূত সওয়ার হয়, আর প্রতিটি API এমন প্রকাশ্য প্রস্তাব যা সার্ভারের বিশ্বাস করা চলবে না। এই হাব আগে গড়ে তোলে প্রতিরক্ষাকারীর মনোভঙ্গি — CIA ট্রায়াড, বিশ্বাস-সীমানা, হ্যাশিং বনাম এনক্রিপশন বনাম এনকোডিং, আর তিন খলনায়ক (ইনজেকশন, XSS, CSRF) — তারপর টুকরো করে আধুনিক প্রমাণীকরণের আর্টিফ্যাক্ট: JWT। ল্যাবে আপনি সাইন করবেন আসল HMAC-SHA256 টোকেন, একটি তাম্পার বাটনে ভূমিকা বদলে admin হয়ে যাবেন, আর দেখবেন সঠিক যাচাইকারী আপনাকে বাইটে বাইটে ঠেলে ফেলছে। শেষে “ডিফল্টে নিরাপদ” আর স্লোগান থাকে না — হয়ে ওঠে সংরক্ষণ-পছন্দ, অ্যালগরিদম-পিন আর যাচাইয়ের ক্রম।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The mindset', bn: 'ধাপ ১ — মনোভঙ্গি' },
      items: [
        { en: 'CIA triad: confidentiality, integrity, availability (lesson 1)', bn: 'CIA ট্রায়াড: গোপনীয়তা, অখণ্ডতা, প্রাপ্যতা (লেসন ১)' },
        { en: 'Trust boundaries and “never trust the client”', bn: 'বিশ্বাস-সীমানা আর “ক্লায়েন্টকে বিশ্বাস নয়”' },
        { en: 'Hashing vs encryption vs encoding — three different machines', bn: 'হ্যাশিং বনাম এনক্রিপশন বনাম এনকোডিং — তিন ভিন্ন যন্ত্র' },
      ],
    },
    {
      title: { en: 'Stage 2 — The villains', bn: 'ধাপ ২ — খলনায়ক' },
      items: [
        { en: 'Injection: when data becomes syntax (lesson 1)', bn: 'ইনজেকশন: ডেটা যখন সিনট্যাক্স হয়ে যায় (লেসন ১)' },
        { en: 'XSS: untrusted bytes rendered as script', bn: 'XSS: স্ক্রিপ্ট রূপে রেন্ডারিত অবিশ্বস্ত বাইট' },
        { en: 'CSRF: the browser’s free ride for attackers', bn: 'CSRF: আক্রমণকারীর বিনামূল্যের ব্রাউজার-লিফট' },
      ],
    },
    {
      title: { en: 'Stage 3 — The token', bn: 'ধাপ ৩ — টোকেন' },
      items: [
        { en: 'header.payload.signature: readable claims, unforgeable seal (lesson 2)', bn: 'header.payload.signature: পঠনীয় দাবি, অজাল্য সিল (লেসন ২)' },
        { en: 'HMAC-SHA256 vs RS256: symmetric vs asymmetric sealing', bn: 'HMAC-SHA256 বনাম RS256: সিমেট্রিক বনাম অ্যাসিমেট্রিক সিল' },
        { en: 'Verification order: seal → exp/iss/aud → claims', bn: 'যাচাইয়ের ক্রম: সিল → exp/iss/aud → দাবি' },
      ],
    },
    {
      title: { en: 'Stage 4 — The deployment', bn: 'ধাপ ৪ — ডিপ্লয়মেন্ট' },
      items: [
        { en: 'Storage: localStorage/XSS vs httpOnly-cookie/CSRF', bn: 'সংরক্ষণ: localStorage/XSS বনাম httpOnly-কুকি/CSRF' },
        { en: 'Short access + refresh: the revocation compromise', bn: 'স্বল্প অ্যাক্সেস + রিফ্রেশ: প্রত্যাহারের আপস' },
        { en: 'Rate limits, CSP, security headers — the boring stack', bn: 'রেট লিমিট, CSP, সিকিউরিটি হেডার — হতাশাজনক স্তর' },
      ],
    },
  ],
  lessons: [securityThinkingLesson, jwtAnatomyLesson, passwordFoundryLesson, needleCourtLesson, scriptTribunalLesson, counterfeitCourierLesson, protocolSealsLesson, authorityKeepLesson, closedLedgerLesson],
  reference: [
    {
      group: 'Secrets & hashing',
      methods: [
        {
          name: 'bcrypt / argon2',
          signature: 'hash = bcrypt(password, salt)  — cost factor N',
          params: { en: 'cost — how SLOW to be; higher = harder for offline attackers.', bn: 'cost — কত ধীর হবে; বেশি মানে অফলাইন আক্রমণকারীর জন্য কঠিনতর।' },
          returns: { en: 'A one-way, salted, deliberately slow fingerprint. Verification = re-hash + compare.', bn: 'একমুখী, সল্টযুক্ত, ইচ্ছাকৃত ধীর ফিঙ্গারপ্রিন্ট। যাচাই = পুনর্হ্যাশ + তুলনা।' },
          example: 'const hash = await bcrypt.hash(pw, 12);  // ✅ password storage',
        },
        {
          name: 'Salt',
          signature: 'unique random value per password, stored WITH the hash',
          params: { en: 'Not secret — just unique. Modern libs generate and embed it automatically.', bn: 'গোপন নয় — শুধু অনন্য। আধুনিক লাইব্রেরি নিজেই বানিয়ে ভেতরে গেঁথে দেয়।' },
          returns: { en: 'Rainbow-table immunity: identical passwords produce different hashes.', bn: 'রেইনবো-টেবিল অনাক্রম্যতা: একই পাসওয়ার্ড ভিন্ন হ্যাশ দেয়।' },
          example: 'bcrypt$2b$12$N9qo8uLOickgx2ZMRZoMye…  #$12$ ← cost, salt inside',
        },
        {
          name: 'Constant-time compare',
          signature: 'crypto.timingSafeEqual(a, b)',
          params: { en: 'Two equally-long buffers of hashes or tokens.', bn: 'হ্যাশ বা টোকেনের সমদৈর্ঘ্য দুই বাফার।' },
          returns: { en: 'Boolean — computed in time that does not depend on WHERE the bytes differ.', bn: 'বুলিয়ান — এমন সময়ে গণিত যা নির্ভর করে না বাইট কোথায় পার্থক্য।' },
          example: 'if (!crypto.timingSafeEqual(sig, expected)) reject();',
        },
      ],
    },
    {
      group: 'The three villains',
      methods: [
        {
          name: 'Parameterized queries',
          signature: 'db.query("… WHERE x = $1", [value])',
          params: { en: 'SQL text and data travel in SEPARATE pipes; never concatenated.', bn: 'SQL টেক্সট আর ডেটা চলে আলাদা পাইপে; কখনো জোড়ালাগানো নয়।' },
          returns: { en: 'Injection immunity: user bytes can never become grammar.', bn: 'ইনজেকশন-অনাক্রম্যতা: ব্যবহারকারী-বাইট কখনো ব্যাকরণ হতে পারে না।' },
          example: 'db.query("SELECT * FROM users WHERE email=$1", [email])',
        },
        {
          name: 'Output escaping',
          signature: 'textContent / {{ escaped }} / escapeHtml(s)',
          params: { en: 'Insert untrusted bytes as TEXT nodes, never as HTML.', bn: 'অবিশ্বস্ত বাইট টেক্সট নোডে বসান, HTML হিসেবে কখনো নয়।' },
          returns: { en: 'Scripts display as inert text instead of executing (XSS dies at render).', bn: 'স্ক্রিপ্ট চলার বদলে নিষ্ক্রিয় টেক্সটে দেখা যায় (রেন্ডারেই XSS মরে)।' },
          example: "el.textContent = comment;  // <script> দেখা যাবে, চলবে না",
        },
        {
          name: 'SameSite + CSRF token',
          signature: 'Set-Cookie: session=…; SameSite=Lax; Secure; HttpOnly',
          params: { en: 'Lax — allow top-level navigation; Strict — never cross-site. Plus a per-form token the attacker cannot guess.', bn: 'Lax — টপ-লেভেল নেভিগেশনে অনুমতি; Strict — ক্রস-সাইটে কখনো নয়। সাথে ফর্মপ্রতি অনুমান-অসাধ্য টোকেন।' },
          returns: { en: 'Cross-site pages can no longer spend the victim’s cookies.', bn: 'ক্রস-সাইট পাতা আর শিকারের কুকি খরচ করতে পারে না।' },
          example: 'hidden input: <input name="csrf" value="9f2c…" />  + server check',
        },
      ],
    },
    {
      group: 'JWT essentials',
      methods: [
        {
          name: 'Sign (HS256)',
          signature: 'jwt.sign(payload, SECRET, { algorithm: "HS256", expiresIn: "15m" })',
          params: { en: 'payload — claims (sub, role, exp); algorithm — ALWAYS pinned, never from the token.', bn: 'payload — দাবি (sub, role, exp); algorithm — সবসময় পিনযুক্ত, টোকেন থেকে কখনো নয়।' },
          returns: { en: 'header.payload.signature — three base64url parts joined by dots.', bn: 'header.payload.signature — ডট-জোড়া তিন base64url অংশ।' },
          example: "const t = jwt.sign({ sub: '42', role: 'user' }, SECRET, { expiresIn: '15m' });",
        },
        {
          name: 'Verify & order',
          signature: 'jwt.verify(token, SECRET, { algorithms: ["HS256"] })',
          params: { en: 'Check seal FIRST, then exp/iss/aud; only then read claims.', bn: 'আগে সিল, তারপর exp/iss/aud; কেবল তারপর দাবি পড়ুন।' },
          returns: { en: 'The decoded claims — or a thrown rejection. Never a silent pass.', bn: 'ডিকোড করা দাবি — অথবা নিক্ষিপ্ত প্রত্যাখ্যান। কখনো নীরব অনুমতি নয়।' },
          example: "const c = jwt.verify(t, SECRET, { algorithms: ['HS256'] });",
        },
        {
          name: 'Storage contract',
          signature: 'httpOnly + Secure + SameSite=Lax cookie  |  memory + XSS hygiene',
          params: { en: 'Cookie path blunts XSS (JS cannot read) but invites CSRF; JS storage inverts it.', bn: 'কুকি-পথ XSS মৃদু করে (JS পড়তে পারে না) কিন্তু CSRF আমন্ত্রণ করে; JS স্টোরেজ তা উল্টে দেয়।' },
          returns: { en: 'A threat-model decision, not a technical default. Pick, then install the antidote.', bn: 'থ্রেট-মডেলের সিদ্ধান্ত, টেকনিক্যাল ডিফল্ট নয়। বেছে নিন, তারপর প্রতিষেধক বসান।' },
          example: 'Set-Cookie: session=…; HttpOnly; Secure; SameSite=Lax; Path=/',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Defend the Comment Box', bn: 'মন্তব্য-বাক্স রক্ষা করুন' },
      diff: 'beginner',
      desc: {
        en: 'Take a page that renders user comments with innerHTML. Exploit it yourself (store a harmless alert via <img onerror>), then fix it three ways (textContent, escaping, CSP) and prove each fix rejects your own payload. Deliverable: three commits, each with the exploit failing.',
        bn: 'একটি পাতা নিন যা innerHTML-এ মন্তব্য দেখায়। নিজেই শোষণ করুন (<img onerror> দিয়ে নির্দোষ alert), তারপর তিনভাবে ফিক্স দিন (textContent, এসকেপিং, CSP) আর প্রতি ফিক্সে নিজের পেলোড ব্যর্থ প্রমাণ করুন। ডেলিভারেবল: তিন কমিট, প্রতিটিতে শোষণ ব্যর্থ।',
      },
    },
    {
      title: { en: 'JWT Verifier Drill', bn: 'JWT যাচাই অনুশীলন' },
      diff: 'intermediate',
      desc: {
        en: 'In the Security Lab: sign a token, tamper it to admin, run alg:none, strip exp — and for EACH attack write the exact server check that rejects it. Assemble the five-line verification order (seal → alg-pin → exp → iss/aud → claims) as your artifact.',
        bn: 'Security Lab-এ: টোকেন সাইন করুন, admin-এ ছিঁড়ুন, alg:none চালান, exp ছাঁড়ুন — আর প্রতিটি আক্রমণের জন্য লিখুন সার্ভার-চেক যা তা প্রত্যাখ্যান করে। পাঁচ-লাইনের যাচাই-ক্রম (সিল → alg-পিন → exp → iss/aud → দাবি) জমা দিন আর্টিফ্যাক্ট হিসেবে।',
      },
    },
    {
      title: { en: 'Threat-Model a Checkout Flow', bn: 'চেকআউট ফ্লোর থ্রেট-মডেল' },
      diff: 'advanced',
      desc: {
        en: 'Take any cart-to-payment flow (yours or a sketch). Map every trust boundary (client→server, server→DB, server→gateway), list three attack paths per boundary (price tampering, token theft, replay), and write the defense for each with its cost. The document IS the deliverable.',
        bn: 'যেকোনো কার্ট-থেকে-পেমেন্ট ফ্লো নিন (নিজের বা খসড়া)। প্রতি বিশ্বাস-সীমানা ম্যাপ করুন (ক্লায়েন্ট→সার্ভার, সার্ভার→DB, সার্ভার→গেটওয়ে), সীমানাপ্রতি তিন আক্রমণ-পথ তালিকাভুক্ত করুন (দাম-তাম্পার, টোকেন-চুরি, রিপ্লে), আর প্রত্যেকের প্রতিরক্ষা লিখুন খরচসহ। ডকুমেন্টটিই ডেলিভারেবল।',
      },
    },
  ],
  bestPractices: [
    { en: 'Every input is guilty until validated server-side against a positive (allow-list) policy.', bn: 'প্রতি ইনপুট দোষী — সার্ভারে ধনাত্মক (অ্যালো-লিস্ট) নীতিতে যাচাই না হওয়া পর্যন্ত।' },
    { en: 'Hash passwords (bcrypt/argon2); encrypt conversations (TLS); encode nothing pretending safety.', bn: 'পাসওয়ার্ড হ্যাশ করুন (bcrypt/argon2); কথোপকথন এনক্রিপ্ট করুন (TLS); নিরাপত্তা-ভানে কিছুই এনকোড করবেন না।' },
    { en: 'Pin every algorithm and every version of every check — the token’s header is an attacker’s suggestion.', bn: 'প্রতি অ্যালগরিদম আর প্রতি যাচাইয়ের সংস্করণ পিন করুন — টোকেনের হেডার আক্রমণকারীর পরামর্শ মাত্র।' },
    { en: 'Verify in order, always: signature → expiry → audience → claims. Reading before sealing is the classic root cause.', bn: 'সবসময় ক্রমে যাচাই: স্বাক্ষর → মেয়াদ → শ্রোতা → দাবি। সিলের আগে পড়াই ক্লাসিক মূল কারণ।' },
    { en: 'Install the antidote WITH the poison: localStorage+sanitization, or httpOnly+SameSite+CSRF-token. Never half the pair.', bn: 'বিষের সাথেই প্রতিষেধক বসান: localStorage+স্যানিটাইজেশন, নয়তো httpOnly+SameSite+CSRF-টোকেন। জোড়ার অর্ধেক কখনো নয়।' },
    { en: 'Log rejections, not just acceptances — the attacks you refuse are tomorrow’s threat intelligence.', bn: 'শুধু গ্রহণ নয়, প্রত্যাখ্যানও লগ করুন — আপনার ফেরানো আক্রমণগুলোই আগামীর থ্রেট ইন্টেলিজেন্স।' },
  ],
  interview: [
    {
      q: { en: 'Hashing vs encryption — when do you pick which?', bn: 'হ্যাশিং বনাম এনক্রিপশন — কখন কোনটা?' },
      a: {
        en: 'Hashing is one-way: verify-by-recompute. Pick it for things you must CHECK but never READ back — passwords above all (salted, slow: bcrypt/argon2). Encryption is two-way with a key: pick it when you must RECOVER the original — messages, tokens between services, data at rest that the app itself needs. Encoding (base64) is neither: it is a format, offers zero security, and fools only documentation.',
        bn: 'হ্যাশিং একমুখী: পুনর্গণনা দিয়ে যাচাই। বেছে নিন এমন জিনিসের জন্য যা যাচাই করতে হবে কিন্তু কখনো ফেরত পড়তে হবে না — সবার আগে পাসওয়ার্ড (সল্টযুক্ত, ধীর: bcrypt/argon2)। এনক্রিপশন চাবিসহ দ্বিমুখী: বেছে নিন যখন মূল জিনিস ফেরত লাগবে — বার্তা, সার্ভিসের মধ্যে টোকেন, বিশ্রামরত এমন ডেটা যা অ্যাপের নিজেরই লাগে। এনকোডিং (base64) কোনোটিই নয়: বিন্যাস মাত্র, নিরাপত্তা শূন্য, ঠকায় কেবল ডকুমেন্টেশনকে।',
      },
    },
    {
      q: { en: 'Walk through securely storing and verifying a password.', bn: 'নিরাপদে পাসওয়ার্ড সংরক্ষণ ও যাচাইয়ের পথ বলুন।' },
      a: {
        en: 'On signup: generate a per-user salt (library does it inside bcrypt), hash with a high cost factor, store the combined string — never the password. On login: re-hash the candidate with the stored salt and compare in constant time. The database leaking yields shredder output, not passwords; salts make rainbow tables useless; the cost factor prices each guess at ~100ms against offline attacks.',
        bn: 'সাইনআপে: ব্যবহারকারীপ্রতি সল্ট বানান (bcrypt ভেতরেই করে), উচ্চ কস্ট-ফ্যাক্টরে হ্যাশ করুন, সম্মিলিত স্ট্রিং রাখুন — পাসওয়ার্ড কখনো নয়। লগইনে: সংরক্ষিত সল্টে প্রার্থী পুনর্হ্যাশ করে ধ্রুবক-সময়ে তুলনা করুন। ডেটাবেস ফাঁস হলে মেলে চূর্ণকারীর আউটপুট, পাসওয়ার্ড নয়; সল্ট রেইনবো টেবিল অকেজো করে; কস্ট-ফ্যাক্টর অফলাইন আক্রমণে প্রতি অনুমানের দাম ~১০০ms ধরে।',
      },
    },
    {
      q: { en: 'JWT vs server-side sessions — the trade in one breath?', bn: 'JWT বনাম সার্ভার-সাইড সেশন — লেনদেন এক নিঃশ্বাসে?' },
      a: {
        en: 'Sessions: state on the server — every request phones home to the session table; trivial to revoke, expensive to scale. JWTs: state in the token, sealed by signature — any service verifies locally, no lookup; infinitely scalable but un-revocable until expiry. The industrial compromise: short-lived access JWTs (15 min) + refresh tokens that DO hit the database, so revocation lives where it is cheap.',
        bn: 'সেশন: সার্ভারে স্টেট — প্রতি রিকোয়েস্ট সেশন-টেবিলে ফোন করে; প্রত্যাহার সহজ, স্কেল ব্যয়বহুল। JWT: টোকেনে স্টেট, স্বাক্ষরে সিলযুক্ত — যেকোনো সার্ভিস স্থানীয় যাচাই, লুকআপ নেই; অসীম স্কেলযোগ্য কিন্তু মেয়াদের আগে প্রত্যাহার হয় না। শিল্প-আপস: স্বল্পমেয়াদি অ্যাক্সেস JWT (১৫ মিনিট) + রিফ্রেশ টোকেন যা ডেটাবেস ছোঁয়েই — প্রত্যাহার থাকে যেখানে সস্তা।',
      },
    },
    {
      q: { en: 'Name three ways a JWT verification goes wrong in production.', bn: 'প্রোডাকশনে JWT যাচাই ভুল যাওয়ার তিন পথ বলুন।' },
      a: {
        en: 'One: reading claims before verifying the signature (crafted admin tokens pass). Two: honoring the token’s own alg header — the alg:none and RS256→HS256 confusion attacks. Three: never checking expiry or audience, so a stolen or cross-service token lives forever. Bonus fourth: secrets in env files committed to git — no seal survives a leaked signet.',
        bn: 'এক: স্বাক্ষর যাচাইয়ের আগে দাবি পড়া (বানানো admin টোকেন পাস করে)। দুই: টোকেনের নিজের alg হেডার মান্য করা — alg:none আর RS256→HS256 গুলিয়ে ফেলা আক্রমণ। তিন: exp বা শ্রোতা না দেখা — চুরি বা ক্রস-সার্ভিস টোকেন চিরকাল বাঁচে। বোনাস চতুর্থ: গিটে কমিট হওয়া env-তে সিক্রেট — ফাঁস হওয়া ছাপ-আংটিতে কোনো সিল টিকে না।',
      },
    },
  ],
  realWorld: [
    {
      en: 'OWASP Top 10 reads like this hub’s table of contents: injection, broken authentication, XSS — same villains, yearly re-census.',
      bn: 'OWASP Top 10 পড়া যায় এই হাবের সারণি হিসেবে: ইনজেকশন, ভাঙা অথেনটিকেশন, XSS — একই খলনায়ক, বার্ষিক পুনর্গণনা।',
    },
    {
      en: 'Every “Sign in with Google” (OIDC) is a JWT handshake: Google signs RS256, your server verifies with fetched JWKS public keys.',
      bn: 'প্রতিটি “Sign in with Google” (OIDC) একটি JWT হ্যান্ডশেক: Google RS256-এ সাইন করে, আপনার সার্ভার আনা JWKS পাবলিক কি-তে যাচাই করে।',
    },
    {
      en: 'Breaches in the news are rarely crypto failures — they are storage choices, concatenated queries, and secrets committed to git. This hub’s boring stack prevents all three.',
      bn: 'খবরের ভঙ্গুরতাগুলো কদাচিৎ ক্রিপ্টো-ব্যর্থতা — এগুলো সংরক্ষণ-পছন্দ, জোড়ালাগানো কোয়েরি আর গিটে কমিট হওয়া সিক্রেট। এই হাবের হতাশাজনক স্তর তিনটিই প্রতিরোধ করে।',
    },
    {
      en: 'Bug bounties pay real money for exactly the drills here: hidden-field tampering, cookie-riding CSRF, and alg-confusion on forgotten middleware.',
      bn: 'বাগ বাউন্টি হুবহু এখানকার অনুশীলনের জন্য আসল টাকা দেয়: লুকানো-ফিল্ড তাম্পারিং, কুকি-সওয়ার CSRF, আর ভুলে-যাওয়া মিডলওয়্যারে alg-গুলিয়ে ফেলা।',
    },
  ],
};
