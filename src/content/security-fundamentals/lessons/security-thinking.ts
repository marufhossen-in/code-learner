import type { Lesson } from '../../../lib/types';

export const securityThinkingLesson: Lesson = {
  slug: 'security-thinking',
  tech: 'security-fundamentals',
  title: {
    en: 'Security Thinking — Security is not a firewall you buy',
    bn: 'প্রতিরক্ষাকারীর মনোভঙ্গি: বিশ্বাস, হ্যাশিং ও তিন খলনায়ক'
  },
  summary: {
    en: 'Security is not a firewall you buy; it is a habit of asking “who is lying to me right now?”. Learn the CIA triad, the one iron rule (never trust the client), the difference between hashing / encryption / encoding, and the three attacks that own most of the CVE database: injection, XSS and CSRF.',
    bn: 'নিরাপত্তা কেনা ফায়ারওয়াল নয়; অভ্যাস — “এই মুহূর্তে কে আমাকে মিথ্যা বলছে?”। শিখুন CIA ট্রায়াড, এক লৌহ নিয়ম (ক্লায়েন্টকে কখনো বিশ্বাস নয়), হ্যাশিং / এনক্রিপশন / এনকোডিংয়ের পার্থক্য, আর তিন আক্রমণ যারা CVE ডেটাবেসের অধিকাংশ দখলে: ইনজেকশন, XSS, CSRF।',
  },
  minutes: 30,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT is a security mindset?', bn: 'নিরাপত্তা-মনোভঙ্গি কী?' } },
    {
      type: 'para',
      text: {
        en: 'Every other lesson on this platform taught you to make machines obey. This one teaches you that they obey ANYONE. A form field does not know it was “supposed” to contain an email; a URL parameter does not know it was “not meant” to be edited; a cookie does not know which tab sent it. The security mindset is the permanent inversion: assume every byte arriving from a client — every field, header, cookie, token, file — is an adversary’s love letter until your server has checked it against a policy. Everything in security is downstream of that inversion: validation is verification, authentication is verification, sanitization is verification. When people say “secure by default”, they mean the boring path does the checking so the developer never has to remember.',
        bn: 'এই প্ল্যাটফর্মের প্রতি অন্য লেসন শিখিয়েছে যন্ত্রকে বাধ্য করান। এই লেসন শেখায় যন্ত্র যে কারোই কথা শোনে। ফর্ম-ফিল্ড জানে না তার মধ্যে ইমেইল “থাকার কথা” ছিল; URL প্যারামিটার জানে না সে “সম্পাদনারযোগ্য নয়”; কুকি জানে না কোন ট্যাব তাকে পাঠিয়েছে। নিরাপত্তা-মনোভঙ্গি হলো স্থায়ী বিপরীতীকরণ: ধরে নিন ক্লায়েন্ট থেকে আসা প্রতি বাইট — প্রতি ফিল্ড, হেডার, কুকি, টোকেন, ফাইল — প্রতিপক্ষের প্রেমপত্র, যতক্ষণ না আপনার সার্ভার নীতির সামনে তা যাচাই করেছে। নিরাপত্তার সবকিছু সেই বিপরীতীকরণেরই উজানে: ভ্যালিডেশন হলো যাচাই, অথেনটিকেশন হলো যাচাই, স্যানিটাইজেশন হলো যাচাই। মানুষ বলে “ডিফল্টে নিরাপদ” — অর্থ হলো হতাশাজনক পথটাই যাচাই করে ফেলে, ডেভেলপারকে মনে রাখতে হয় না।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'CIA triad', def: { en: 'Confidentiality (right eyes only), Integrity (untampered), Availability (there when needed).', bn: 'গোপনীয়তা (শুধু যথাযথ চোখ), অখণ্ডতা (ছেঁড়া হয়নি), প্রাপ্যতা (দরকারে উপস্থিত)।' } },
        { term: 'trust boundary', def: { en: 'The line between “bytes I control” and “bytes from strangers”. All policy lives ON it.', bn: '“আমার নিয়ন্ত্রিত বাইট” আর “অপরিচিতের বাইট”-এর সীমারেখা। সব নীতি বসে তার ওপরেই।' } },
        { term: 'hashing', def: { en: 'One-way fingerprint: same input → same output, no way back. For stored secrets.', bn: 'একমুখী ফিঙ্গারপ্রিন্ট: একই ইনপুট → একই আউটপুট, ফেরার পথ নেই। সংরক্ষিত গোপনীয়তার জন্য।' } },
        { term: 'encoding ≠ encryption', def: { en: 'base64 is a FORMAT, not a lock. Anyone can decode it. Encryption uses keys; encoding uses none.', bn: 'base64 হলো বিন্যাস, তালা নয়। যে কেউ ডিকোড করতে পারে। এনক্রিপশন চাবি ব্যবহার করে; এনকোডিং কিছুই না।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY “never trust the client” is the only axiom', bn: 'কেন “ক্লায়েন্টকে বিশ্বাস নয়”-ই একমাত্র স্বীকার্য' } },
    {
      type: 'para',
      text: {
        en: 'Your frontend is not your code once it ships — it is a PUBLIC PROPOSAL your server will receive. The attacker does not use your React form; they use curl, a proxy, or DevTools, sending bytes your UI would never allow: email fields containing SQL, price fields set to 1, role fields saying admin. Client-side validation exists for USER EXPERIENCE (instant feedback); server-side validation exists for SURVIVAL (the actual policy). Every major breach story has the same skeleton: a server that trusted a client somewhere — a hidden field, a header, a cookie, a “nobody will guess this URL”. The second axiom follows: the server is the only place truth can be enforced, because the server is the only territory the attacker cannot simply edit.',
        bn: 'শিপ হওয়ার পর আপনার ফ্রন্টএন্ড আর আপনার কোড নয় — এটি একটি প্রকাশ্য প্রস্তাব যা আপনার সার্ভার গ্রহণ করবে। আক্রমণকারী আপনার React ফর্ম ব্যবহার করে না; ব্যবহার করে curl, প্রক্সি বা DevTools — পাঠায় এমন বাইট যা আপনার UI কখনো অনুমোদন করবে না: ইমেইল ফিল্ডে SQL, প্রাইস ফিল্ডে ১, রোল ফিল্ডে admin। ক্লায়েন্ট-সাইড ভ্যালিডেশন আছে ব্যবহারকারী-অভিজ্ঞতার জন্য (তাৎক্ষণিক প্রতিক্রিয়া); সার্ভার-সাইড ভ্যালিডেশন আছে টিকে থাকার জন্য (প্রকৃত নীতি)। প্রতিটি বড় ভঙ্গুর-খবরের কঙ্কাল একই: কোথাও কোনো সার্ভার কোনো ক্লায়েন্টকে বিশ্বাস করেছে — লুকানো ফিল্ড, হেডার, কুকি, কিংবা “এই URL কেউ অনুমান করবে না”। দ্বিতীয় স্বীকার্য এরই পরিপার্শ্ব: সত্য কেবল সার্ভারে বলবৎ করা যায়, কারণ সার্ভার-ই একমাত্র অঞ্চল যা আক্রমণকারী সরাসরি সম্পাদনা করতে পারে না।',
      },
    },
    {
      type: 'callout',
      kind: 'info',
      text: {
        en: 'Hidden input fields, disabled buttons, “ugly URLs”, HTTPS — none of these are security boundaries. They are UI decorations. The boundary is ALWAYS the server-side check.',
        bn: 'লুকানো ইনপুট, অক্ষম বাটন, “অপদার্থ URL”, HTTPS — এগুলোর কোনোটিই নিরাপত্তা সীমানা নয়। UI সাজসজ্জা এগুলো। সীমানা সবসময়ই সার্ভার-সাইড যাচাই।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW the three villains walk in', bn: 'তিন খলনায়ক প্রবেশ করে যেভাবে' } },
    {
      type: 'steps',
      items: [
        { title: { en: '🗡 Injection (SQLi)', bn: '🗡 ইনজেকশন (SQLi)' }, text: { en: 'User text concatenated into a query becomes CODE. Cure: parameterized queries — data never meets syntax.', bn: 'কোয়েরিতে জোড়া দেওয়া ব্যবহারকারী-টেক্সট হয়ে যায় কোড। প্রতিষেধক: প্যারামিটারাইজড কোয়েরি — ডেটা সিনট্যাক্সের মুখোমুখি হয় না।' } },
        { title: { en: '🧨 XSS', bn: '🧨 XSS' }, text: { en: 'User text echoed into HTML becomes SCRIPT in another user’s browser. Cure: escape on output, sanitize on the way in.', bn: 'HTML-এ প্রতিধ্বনিত ব্যবহারকারী-টেক্সট অন্য ব্যবহারকারীর ব্রাউজারে হয়ে যায় স্ক্রিপ্ট। প্রতিষেধক: আউটপুটে এসকেপ, পথিমধ্যে স্যানিটাইজ।' } },
        { title: { en: '🎭 CSRF', bn: '🎭 CSRF' }, text: { en: 'A malicious page makes the VICTIM’s browser send YOUR site an authenticated request (cookies ride along). Cure: SameSite cookies + CSRF tokens.', bn: 'দুষ্ট পাতা শিকারের ব্রাউজার দিয়ে আপনার সাইটে প্রমাণীকৃত রিকোয়েস্ট পাঠিয়ে দেয় (কুকি সঙ্গে যায়)। প্রতিষেধক: SameSite কুকি + CSRF টোকেন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// ❌ SQLi: ব্যবহারকারী-টেক্সট মিশল সিনট্যাক্সের ভেতরে
db.query("SELECT * FROM users WHERE email = '" + email + "'");
//    email = "' OR '1'='1"  → কোয়েরি বদলে গেল অর্থে

// ✅ প্যারামিটারাইজড: ডেটা আর সিনট্যাক্স আলাদা পাইপে
db.query('SELECT * FROM users WHERE email = $1', [email]);

// ❌ XSS: ব্যবহারকারীর "মন্তব্য" সোজাসুজি HTML-এ
el.innerHTML = comment;   // <img src=x onerror=steal(document.cookie)>

// ✅ টেক্সট হিসেবে বসান — ট্যাগ কখনো জন্ম নেয় না
el.textContent = comment;

// ❌ পাসওয়ার্ড সংরক্ষণ: এনক্রিপ্ট/এনকোড করা (উল্টানো যায়!)
save(email, base64(password));            // ডিকোড → মূল পাসওয়ার্ড সহেই
// ✅ হ্যাশ + সল্ট + ধীর অ্যালগরিদম — ফেরার পথ নেই
save(email, await bcrypt.hash(password, 12));`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: why hashing works and encryption fails here', bn: 'ভেতরের কথা: হ্যাশিং কেন কাজ করে আর এনক্রিপশন কেন ভাঙে' } },
    {
      type: 'para',
      text: {
        en: 'Encryption is a door with a KEY: anyone holding the key walks both ways. If your database leaks AND your key leaks (they live near each other), every password is readable. Hashing is a paper shredder: put “correct horse” in, get a confetti string out, and there is NO operator that runs it backwards — you verify by shredding the candidate again and comparing confetti. Attackers get around this with RAINBOW TABLES (pre-shredded dictionaries of common passwords), which is why we SALT: mix a unique random string into each password before shredding. So two users with “password123” produce different confetti and one rainbow table serves nobody. Then we make the shredder deliberately SLOW (bcrypt/argon2 cost factors): checking one password takes 100 ms — invisible to a user, fatal to a billion-attempt offline attack. The lab below shows the mirror-image of this idea: signatures are hashing with a shared secret added, so the confetti both proves integrity AND identifies the audience.',
        bn: 'এনক্রিপশন এমন দরজা যার চাবি আছে: চাবি-ধারী উভয় পথে হাঁটে। ডেটাবেস ফাঁস + চাবি ফাঁস (ওরা পাশাপাশি থাকে) হলে প্রতিটি পাসওয়ার্ড পড়া যায়। হ্যাশিং হলো কাগজ-চূর্ণকারী: “correct horse” ভেতরে, কনফেটি-স্ট্রিং বাইরে — উল্টো চালানোর কোনো অপারেটর নেই; যাচাই করতে হয় প্রার্থীকে আবার চূর্ণ করে কনফেটি তুলনা করে। আক্রমণকারীরা এড়িয়ে যায় রেইনবো টেবিল দিয়ে (সাধারণ পাসওয়ার্ডের পূর্ব-চূর্ণ অভিধান), তাই আমরা দিই সল্ট: প্রতি পাসওয়ার্ডে চূর্ণের আগে অনন্য এলোমেলো স্ট্রিং মেশাই — দুই ব্যবহারকারীর “password123” ভিন্ন কনফেটি দেয়, ১টি রেইনবো টেবিল কারোই কাজে লাগে না। তারপর চূর্ণকারীকে ইচ্ছাকৃত ধীর করি (bcrypt/argon2-র কস্ট ফ্যাক্টর): একটি পাসওয়ার্ড যাচাইয়ে ১০০ ms — ব্যবহারকারীর চোখে অদৃশ্য, বিলিয়ন-চেষ্টার অফলাইন আক্রমণে প্রাণঘাতী। নিচের ল্যাব এই ধারণার প্রতিবিম্ব: স্বাক্ষর হলো শেয়ার্ড সিক্রেট মেশানো হ্যাশিং — কনফেটি একসাথে অখণ্ডতা প্রমাণ করে আর শ্রোতাও চেনায়।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: meet the artifact of lesson 2', bn: 'ভিজ্যুয়াল: লেসন ২ এর আর্টিফ্যাক্টের সাথে পরিচয়' } },
    { type: 'visual', id: 'security' },
    {
      type: 'para',
      text: {
        en: 'This is the Security Lab — a real JWT signer running in your browser. Before lesson 2 dissects it anatomically, press the TAMPER button: watch the payload flip your role to admin while your signature stays — then press VERIFY and watch the tamper-proof do its one job. The lab is your first proof that “signature” is not a magic word: it is hashing (this lesson) plus a shared secret (next lesson).',
        bn: 'এটি Security Lab — আপনার ব্রাউজারে চলা সত্যিকারের JWT সাইনার। লেসন ২ এর ব্যবচ্ছেদ করার আগে TAMPER বাটন চাপুন: পেলোড আপনার ভূমিকা admin-এ বদলে দেবে, স্বাক্ষর অথচ থাকবে — তারপর VERIFY চেপে দেখুন নিরাপত্তা ব্যবস্থা তার ১টি মূল কাজই করে। ল্যাবই প্রথম প্রমাণ যে “স্বাক্ষর” জাদুর শব্দ নয়: এটি হ্যাশিং (এই লেসন) যোগ শেয়ার্ড সিক্রেট (পরের লেসন)।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: defender instincts', bn: 'ফলাফল: প্রতিরক্ষার সহজাততা' } },
    {
      type: 'list',
      items: [
        { en: 'Every input is guilty until validated, server-side, against a positive policy.', bn: 'প্রতি ইনপুট দোষী — যতক্ষণ না সার্ভারে, ধনাত্মক নীতিতে যাচাইত।' },
        { en: 'Hash secrets, encrypt conversations, encode nothing pretending to be safe.', bn: 'গোপন হ্যাশ করুন, কথোপকথন এনক্রিপ্ট করুন, নিরাপত্তা-ভান করে কিছু এনকোড করবেন না।' },
        { en: 'Injection/XSS/CSRF share one DNA: untrusted bytes crossing a trust boundary uninvited.', bn: 'ইনজেকশন/XSS/CSRF-এর ডিএনএ এক: বিশ্বাস-সীমানা অনাহূত পেরিয়ে যাওয়া অবিশ্বস্ত বাইট।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the price that became 1', bn: 'ডিবাগিং অনুশীলন: দাম যখন ১ হলো' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: orders arrive with amount = 1.00, but the UI shows ৳1,200 on every screen. Hypothesis with the axiom: the checkout request carried the price from the client (hidden input, or a product_id+price pair), and the server TRUSTED it. Evidence hunt: open DevTools → Network → resend the request with amount edited; if the server accepts, the boundary is broken — no need to read a single line of backend code. Diagnosis: server computed nothing; it persisted the client’s number. Fix: the server re-derives price from its OWN database (product_id → price lookup), and the client’s number is at most a display cache. The axiom found the bug: WHATEVER the client says about money is wallpaper, not data.',
        bn: 'লক্ষণ: অর্ডারে আসছে amount = ১.০০, অথচ UI-তে প্রতি স্ক্রিনে দেখাচ্ছিল ৳১,২০০। স্বীকার্য দিয়ে সন্দেহ: চেকআউট রিকোয়েস্টে দাম এসেছে ক্লায়েন্ট থেকে (লুকানো ইনপুট, নয়તો product_id+price জোড়া), আর সার্ভার তাকে বিশ্বাস করেছে। প্রমাণ-শিকার: DevTools → Network → amount বদলে রিকোয়েস্ট পুনঃপাঠ; গৃহীত হলে সীমানাই ভাঙা — ব্যাকএন্ডের এক লাইনও পড়া লাগে না। নির্ণয়: সার্ভার কিছুই হিসাব করেনি; ক্লায়েন্টের সংখ্যা সংরক্ষণ করেছে। সমাধান: দাম সার্ভার নিজের ডেটাবেস থেকে নিজে বার করে (product_id → দাম দেখা), আর ক্লায়েন্টের সংখ্যা নিছক প্রদর্শন-ক্যাশ। স্বীকার্য বাগ খুঁজে দিয়েছে: টাকা নিয়ে ক্লায়েন্ট যা-ই বলুক তা ডেটা নয়, ওয়ালপেপার।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Hashing passwords with SHA-256 “because it is a hash”. SHA is FAST — built for speed, gift-wrapped for GPU attackers. Passwords need deliberately SLOW hashes: bcrypt, scrypt, argon2.',
        bn: 'পাসওয়ার্ড SHA-256 দিয়ে হ্যাশ করা, “হ্যাশ তো” বলে। SHA দ্রুত — গতির জন্য বানানো, GPU আক্রমণকারীর উপহার। পাসওয়ার্ডের চাই ইচ্ছাকৃত ধীর হ্যাশ: bcrypt, scrypt, argon2।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'OWASP Top 10 is this lesson formalized: injection, broken auth, XSS — same villains, yearly census.', bn: 'OWASP Top 10 হলো এই লেসনের প্রাতিষ্ঠানিক রূপ: ইনজেকশন, ভাঙা অথ, XSS — একই খলনায়ক, বার্ষিক জনশুমারি।' },
        { en: 'Prepared statements are on BY DEFAULT in every serious query library — the boring path got safe.', bn: 'প্রতিটি গুরুতর কোয়েরি লাইব্রেরিতে প্রিপেয়ার্ড স্টেটমেন্ট ডিফল্টে চালু — হতাশাজনক পথ নিরাপদ হয়ে গেছে।' },
        { en: 'Bug-bounty reports are 90% “the server trusted the client here” — the axiom, weaponized for good.', bn: 'বাগ-বাউন্টি রিপোর্টের ৯০% হলো “সার্ভার এখানে ক্লায়েন্টকে বিশ্বাস করেছে” — কল্যাণে অস্ত্রিত স্বীকার্য।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the token that proves itself', bn: 'পরবর্তী: নিজের প্রমাণ নিজে বহন করা টোকেন' } },
    {
      type: 'para',
      text: {
        en: 'Sessions on the server are easy to trust and painful to scale. The industry answer was a self-proving artifact: the JWT. Next lesson dissects its three parts, watches a real signature survive a tamper attempt in the lab, and then watches two attacks (tamper, alg:none) fail — and succeed — so you learn where the verification can silently disappear.',
        bn: 'সার্ভারের সেশন বিশ্বাসে সহজ, স্কেলে কঠিন। শিল্পের উত্তর হলো আত্ম-প্রমাণী আর্টিফ্যাক্ট: JWT। পরের লেসনে খোলা হবে এর ৩টি অংশ, ল্যাবে চেলে যাওয়া সত্যিকারের স্বাক্ষর দেখা হবে ছেঁড়া-চেষ্টা টিকিয়ে — তারপর ২টি আক্রমণ (তাম্পার, alg:none) ব্যর্থতায়-সফলতায় — যাতে শেখা যায় যাচাই নীরবে কোথায় উধাও হতে পারে।',
      },
    },
  ],
  nextLesson: {
    slug: 'jwt-anatomy',
    tech: 'security-fundamentals',
    title: {
      en: 'JWT Anatomy — A JWT is a claim set with a tamper-evident seal',
      bn: 'JWT ব্যবচ্ছেদ: আত্ম-প্রমাণী টোকেন ও টেম্পার-প্রুফ সিল'
    }
  },
  exercises: [
    {
      id: 'sec-think-ex1',
      kind: 'mcq',
      topic: 'trust boundary',
      question: { en: 'A hidden <input type="hidden" name="price" value="1200"> in the checkout form is…', bn: 'চেকআউট ফর্মে লুকানো <input type="hidden" name="price" value="1200"> হলো…' },
      options: [
        { en: 'Safe — users cannot see it', bn: 'নিরাপদ — ব্যবহারকারী দেখতে পায় না' },
        { en: 'A decoration: editable in one DevTools click; the server must re-derive the price', bn: 'সাজসজ্জা: এক DevTools ক্লিকে সম্পাদনীয়; দাম সার্ভারকেই নতুন করে বার করতে হবে' },
        { en: 'Encrypted automatically by HTTPS', bn: 'HTTPS স্বয়ংক্রিয় এনক্রিপ্ট করে' },
      ],
      answer: 1,
      hint: { en: 'Hidden from EYES, not from HANDS.', bn: 'চোখ থেকে লুকানো, হাত থেকে নয়।' },
      explanation: { en: 'Everything in the browser belongs to the user. The only un-editable territory is the server.', bn: 'ব্রাউজারের সবকিছু ব্যবহারকারীর সম্পত্তি। সম্পাদনার বাইরে একমাত্র ভূখণ্ড সার্ভার।' },
    },
    {
      id: 'sec-think-ex2',
      kind: 'predict',
      topic: 'hashing',
      question: { en: 'Your database leaks: password column holds bcrypt hashes with per-row salts. The attacker can…', bn: 'ডেটাবেস ফাঁস: পাসওয়ার্ড কলামে সারিপ্রতি সল্টসহ bcrypt হ্যাশ। আক্রমণকারী পারে…' },
      options: [
        { en: 'Read all passwords instantly', bn: 'সব পাসওয়ার্ড তৎক্ষণাৎ পড়তে' },
        { en: 'Use one rainbow table for all rows', bn: 'সব সারিতে একটি রেইনবো টেবিল ব্যবহার করতে' },
        { en: 'Crack each password only by slow, per-salt guessing — common passwords fall, unique ones survive', bn: 'কেবল ধীর, সল্টভেদে অনুমানে ভাঙতে — সাধারণ পাড়ে, অনন্যগুলো টিকে' },
      ],
      answer: 2,
      hint: { en: 'Unique salt kills shared dictionaries; slow cost kills speed.', bn: 'অনন্য সল্ট ভাগ করা অভিধান মারে; ধীর কস্ট গতি মারে।' },
      explanation: { en: 'Salts force per-user cracking; bcrypt’s cost makes each guess ~100 ms. Billions of guesses become centuries.', bn: 'সল্ট বাধ্য করে ব্যবহারকারীপ্রতি ভাঙতে; bcrypt-এর কস্ট প্রতি অনুমান ~১০০ ms করে। বিলিয়ন অনুমান হয়ে যায় শতাব্দী।' },
    },
    {
      id: 'sec-think-ex3',
      kind: 'mcq',
      topic: 'xss',
      question: { en: 'The correct fix for displaying user comments is…', bn: 'ব্যবহারকারীর মন্তব্য দেখানোর সঠিক ফিক্স…' },
      options: [
        { en: 'innerHTML but pray', bn: 'innerHTML, আর প্রার্থনা' },
        { en: 'Strip all < > characters on input', bn: 'ইনপুটে সব < > ছিঁড়ে ফেলা' },
        { en: 'Insert as text (textContent / escaped on output) — tags are never born', bn: 'টেক্সট হিসেবে বসানো (textContent / আউটপুটে এসকেপ) — ট্যাগের জন্মই হয় না' },
      ],
      answer: 2,
      hint: { en: 'Stripping characters is a blacklist; escaping is a guarantee.', bn: 'অক্ষর ছাঁড়া ব্ল্যাকলিস্ট; এসকেপিং জামানত।' },
      explanation: { en: 'The browser cannot execute what it sees as DATA. Escape at render; let the DOM treat bytes as text.', bn: 'ব্রাউজার চালাতে পারে না যাকে সে ডেটা ভাবে। রেন্ডারে এসকেপ করুন; DOM বাইটকে টেক্সট ভাবুক।' },
    },
    {
      id: 'sec-think-ex4',
      kind: 'fill',
      topic: 'csrf',
      question: { en: 'The attribute that tells browsers “do not attach this cookie to cross-site requests”: SameSite=____', bn: 'ব্রাউজারকে বলা “ক্রস-সাইট রিকোয়েস্টে এই কুকি দেবে না” — এমন অ্যাট্রিবিউট: SameSite=____' },
      answer: 'Lax',
      accept: ['Lax', 'lax', 'Strict', 'strict'],
      hint: { en: 'Lax for navigation-friendly, Strict for banking-paranoid.', bn: 'নেভিগেশন-বান্ধব হলে Lax, ব্যাংকিং-সন্দেহপ্রবণ হলে Strict।' },
      explanation: { en: 'SameSite=Lax/Strict starves CSRF of its free cookies; a CSRF token closes the remaining window.', bn: 'SameSite=Lax/Strict CSRF-কে তার বিনামূল্যের কুকি থেকে বঞ্চিত করে; বাকি জানালা বন্ধ করে CSRF টোকেন।' },
      solution: 'SameSite=Lax',
    },
  ],
  quiz: {
    id: 'sec-think-quiz',
    title: { en: 'Quiz: the inversion', bn: 'কুইজ: বিপরীতীকরণ' },
    questions: [
      {
        id: 'sec-think-q1',
        kind: 'mcq',
        topic: 'model',
        question: { en: '“Never trust the client” means concretely…', bn: '“ক্লায়েন্টকে বিশ্বাস নয়” — সুলক্ষণে মানে…' },
        options: [
          { en: 'Users are malicious', bn: 'ব্যবহারকারীরা দুর্ভাবনাপরায়ণ' },
          { en: 'Every byte from the browser is attacker-shaped until the server validates it against policy', bn: 'ব্রাউজারের প্রতি বাইট আক্রমণকারী-আকৃতির — যতক্ষণ না সার্ভার নীতিতে যাচাই করেছে' },
          { en: 'Frontend code is unimportant', bn: 'ফ্রন্টএন্ড কোড গুরুত্বহীন' },
        ],
        answer: 1,
        hint: { en: 'The attacker is not the user — it is whoever controls the bytes, and that is always possible.', bn: 'আক্রমণকারী ব্যবহারকারী নয় — বাইটের নিয়ন্ত্রক কেউ-ই, আর সেটা সবসময় সম্ভব।' },
        explanation: { en: 'Client-side checks are UX; server-side checks are survival. Both exist for different gods.', bn: 'ক্লায়েন্ট-সাইড যাচাই UX; সার্ভার-সাইড যাচাই টিকে থাকা। দুটোই আছে, ভিন্ন দেবতার জন্য।' },
      },
      {
        id: 'sec-think-q2',
        kind: 'predict',
        topic: 'sqli',
        question: { en: 'email = "\' OR \'1\'=\'1" concatenated into a WHERE clause produces…', bn: 'email = "\' OR \'1\'=\'1" WHERE ক্লজে জোড়া দিলে উৎপন্ন হয়…' },
        options: [
          { en: 'A syntax error', bn: 'সিনট্যাক্স এরর' },
          { en: 'A TRUE predicate — the query returns everyone (data became code)', bn: 'TRUE predicate — কোয়েরি সবাইকে ফেরায় (ডেটা হয়ে গেল কোড)' },
          { en: 'An empty result', bn: 'খালি ফলাফল' },
        ],
        answer: 1,
        hint: { en: 'The quote you typed closed the string; the rest was grammar, not data.', bn: 'আপনার টাইপ করা উদ্ধৃতি স্ট্রিং বন্ধ করেছে; বাকিটা ছিল ডেটা নয়, ব্যাকরণ।' },
        explanation: { en: 'String concatenation invites user bytes INTO the grammar. Parameterized queries keep two pipes separate.', bn: 'স্ট্রিং জোড়ালাগানো ব্যবহারকারী-বাইটকে ব্যাকরণের ভেতরে আমন্ত্রণ জানায়। প্যারামিটারাইজড কোয়েরি দুই পাইপ আলাদা রাখে।' },
      },
      {
        id: 'sec-think-q3',
        kind: 'mcq',
        topic: 'hash',
        question: { en: 'Salting passwords primarily defeats…', bn: 'পাসওয়ার্ড সল্টিং প্রাথমিকভাবে পরাস্ত করে…' },
        options: [
          { en: 'Keyloggers', bn: 'কিলগার' },
          { en: 'Rainbow tables: pre-computed dictionaries stop applying to all users at once', bn: 'রেইনবো টেবিল: পূর্বগণিত অভিধান আর সব ব্যবহারকারীতে একসাথে লাগে না' },
          { en: 'Network sniffing', bn: 'নেটওয়ার্ক স্নিফিং' },
        ],
        answer: 1,
        hint: { en: 'Same password, different confetti — one dictionary, worthless.', bn: 'একই পাসওয়ার্ড, ভিন্ন কনফেটি — একটি অভিধান, নিষ্ফল।' },
        explanation: { en: 'Salt forces per-user re-computation; bcrypt/argon2’s slowness prices each guess. Two locks, different doors.', bn: 'সল্ট ব্যবহারকারীপ্রতি পুনর্গণনা বাধ্য করে; bcrypt/argon2-এর ধীরতা প্রতি অনুমানের দাম ধরে। দুই তালা, ভিন্ন দরজা।' },
      },
      {
        id: 'sec-think-q4',
        kind: 'mcq',
        topic: 'encoding',
        question: { en: 'base64 “encoding” a password before storage is…', bn: 'সংরক্ষণের আগে পাসওয়ার্ড base64 “এনকোডিং” করা হলো…' },
        options: [
          { en: 'Good enough for MVP', bn: 'MVP-এর জন্য যথেষ্ট' },
          { en: 'Plaintext wearing a costume — anyone can decode it in milliseconds', bn: 'ছদ্মবেশী প্লেইনটেক্সট — মিলিসেকেন্ডে যে কেউ ডিকোড করে' },
          { en: 'The same as hashing', bn: 'হ্যাশিং-এর সমতুল্য' },
        ],
        answer: 1,
        hint: { en: 'Encoding needs no key to reverse. If reversal is free, storage is exhibition.', bn: 'এনকোডিং উল্টাতে চাবি লাগে না। উল্টানো ফ্রি হলে সংরক্ষণ মানে প্রদর্শন।' },
        explanation: { en: 'Encoding ≠ encryption ≠ hashing. Only the last one is built for secrets at rest.', bn: 'এনকোডিং ≠ এনক্রিপশন ≠ হ্যাশিং। বিশ্রামরত গোপন জন্য বানানো কেবল শেষটি।' },
      },
    ],
  },
  next: { slug: 'jwt-anatomy', title: { en: 'JWT Anatomy: the self-proving token', bn: 'JWT বিশ্লেষণ: আত্ম-প্রমাণী টোকেন' } },
};
