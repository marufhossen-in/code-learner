import type { Lesson } from '../../../lib/types';

export const theCookieJarLesson: Lesson = {
  slug: 'the-cookie-jar',
  tech: 'http',
  title: {
    en: 'HTTP Cookies: State Management, 7 Security Attributes & Session Fixation',
    bn: 'HTTP কুকিজ: স্টেট ম্যানেজমেন্ট, ৭টি নিরাপত্তা বৈশিষ্ট্য ও সেশন ফিক্সেশন'
  },
  summary: {
    en: 'Master HTTP cookies and web session mechanics across 10 structured topics. Understand how stateless HTTP maintains session state. Learn the Set-Cookie syntax and the 7 vital security attributes. Master HttpOnly for XSS defense and Secure for HTTPS transport. Demystify SameSite policies (Strict, Lax, None) for CSRF defense. Explore Domain and Path scoping. Study __Host- and __Secure- prefixes, session fixation rotation, and storage limits.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP কুকিজ ও সেশন মেকানিজম আয়ত্ত করুন। অবস্থাহীন HTTP কীভাবে সেশন ধরে রাখে তা বুঝুন। Set-Cookie সিনট্যাক্স এবং ৭টি নিরাপত্তা বৈশিষ্ট্য শিখুন। XSS ঠেকাতে HttpOnly এবং HTTPS-এর জন্য Secure বৈশিষ্ট্য জানুন। CSRF প্রতিরোধে SameSite পলিসি (Strict, Lax, None) আয়ত্ত করুন। Domain ও Path স্কোপিং, __Host- ও __Secure- প্রিফিক্স, সেশন ফিক্সেশন প্রতিরোধে আইডি রোটেশন এবং ৪ কেবি ধারণক্ষমতা সীমা জানুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-credential-tribunal',
    tech: 'http',
    title: {
      en: 'The Credential Tribunal: Authentication, Authorization, Bearer Tokens & CORS',
      bn: 'শংসাপত্র ট্রাইব্যুনাল: প্রমাণীকরণ, অনুমতি, বিয়ারার টোকেন ও CORS'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. What is an HTTP Cookie? Bridging Statelessness', bn: '১. HTTP কুকি কী? অবস্থাহীন প্রোটোকলে সেশন ধরে রাখা' } },
    {
      type: 'para',
      text: {
        en: 'When you interact with the web, HTTP is fundamentally a stateless protocol. The server treats every incoming request as an independent event with no memory of your prior visits. HTTP Cookies solve this by allowing the server to issue a state token via the Set-Cookie response header. Your browser automatically stores this token and echoes it back in the Cookie request header on subsequent matching visits.',
        bn: 'আপনি যখন ওয়েবে কাজ করেন, তখন লক্ষ্য করবেন HTTP মূলত একটি অবস্থাহীন (stateless) প্রোটোকল। সার্ভার প্রতিটি নতুন রিকোয়েস্টকে আলাদা এবং আপনার পূর্বের পরিদর্শনের স্মৃতিহীন হিসেবে বিবেচনা করে। HTTP Cookies এই সমস্যার সমাধান করে। সার্ভার Set-Cookie রেসপন্স হেডারের মাধ্যমে একটি টোকেন পাঠায়। আপনার ব্রাউজার স্বয়ংক্রিয়ভাবে এটি সংরক্ষণ করে এবং পরবর্তী প্রতিটি রিকোয়েস্টে Cookie হেডারের মাধ্যমে ফেরত পাঠায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Server issues session cookie on login: */
HTTP/1.1 200 OK
Set-Cookie: session_id=abc123xyz; Secure; HttpOnly; SameSite=Lax; Path=/

/* Browser echoes cookie on subsequent page load: */
GET /dashboard HTTP/1.1
Host: codeshikhon.com
Cookie: session_id=abc123xyz`,
      caption: {
        en: 'The server mints the cookie writ; the browser stores it and echoes it on qualifying visits.',
        bn: 'সার্ভার Set-Cookie দিয়ে টোকেন পাঠায় এবং ব্রাউজার পরবর্তী রিকোয়েস্টে তা ফেরত পাঠায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Anatomy of Set-Cookie: The 7 Vital Attributes', bn: '২. Set-Cookie হেডারের গঠন: ৭টি গুরুত্বপূর্ণ বৈশিষ্ট্য' } },
    {
      type: 'para',
      text: {
        en: 'A robust Set-Cookie header contains a name=value pair accompanied by attributes that govern its security and scope. The seven primary attributes are: 1) Secure; 2) HttpOnly; 3) SameSite; 4) Domain; 5) Path; 6) Max-Age; 7) Expires. A cookie lacking these security flags is highly vulnerable to network interception and cross-site attacks.',
        bn: 'একটি নিরাপদ Set-Cookie হেডারে name=value-এর সাথে নির্দিষ্ট কিছু গুণাবলি যুক্ত থাকে যা তার নিরাপত্তা ও পরিধি নির্ধারণ করে। প্রধান ৭টি বৈশিষ্ট্য হলো: ১) Secure; ২) HttpOnly; ৩) SameSite; ৪) Domain; ৫) Path; ৬) Max-Age; ৭) Expires। এই ফ্ল্যাগগুলো ছাড়া সাধারণ কুকি ব্যবহার করলে হ্যাকারদের পক্ষে সেশন চুরি করা খুব সহজ হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `Set-Cookie: token=9f8e7d6c; Secure; HttpOnly; SameSite=Strict; Domain=codeshikhon.com; Path=/; Max-Age=7200`,
      caption: {
        en: 'The complete Set-Cookie declaration seals security, transport, domain scope, and expiration.',
        bn: 'পূর্ণাঙ্গ Set-Cookie ডিক্লারেশন নিরাপত্তা, পরিবহন, ডোমেইন পরিধি এবং মেয়াদের সময় সিল করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP Cookie Security Architecture & Defense Layers', bn: 'HTTP কুকি নিরাপত্তা আর্কিটেকচার ও সুরক্ষা স্তর' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="HTTP Cookie Security Attributes Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="200" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="350" y="38" text-anchor="middle" font-weight="bold">HTTP Cookie Multi-Layer Defense Architecture</text><rect x="25" y="55" width="150" height="145" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="100" y="75" text-anchor="middle" font-weight="bold" fill="#10b981">HttpOnly</text><text x="100" y="95" text-anchor="middle" font-size="11">Script Shield</text><text x="100" y="125" text-anchor="middle" font-size="10">Blocks JS read</text><text x="100" y="140" text-anchor="middle" font-size="10">document.cookie</text><text x="100" y="155" text-anchor="middle" font-size="10">hidden from scripts</text><text x="100" y="185" text-anchor="middle" font-size="9" fill="#10b981">• Neutralizes XSS theft</text><rect x="185" y="55" width="150" height="145" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="260" y="75" text-anchor="middle" font-weight="bold" fill="#3b82f6">Secure</text><text x="260" y="95" text-anchor="middle" font-size="11">Transport Shield</text><text x="260" y="125" text-anchor="middle" font-size="10">HTTPS only</text><text x="260" y="140" text-anchor="middle" font-size="10">Never sent over</text><text x="260" y="155" text-anchor="middle" font-size="10">plain HTTP links</text><text x="260" y="185" text-anchor="middle" font-size="9" fill="#3b82f6">• Stops Wi-Fi sniffing</text><rect x="345" y="55" width="155" height="145" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="422" y="75" text-anchor="middle" font-weight="bold" fill="#f59e0b">SameSite</text><text x="422" y="95" text-anchor="middle" font-size="11">Origin Shield</text><text x="422" y="125" text-anchor="middle" font-size="10">Strict / Lax / None</text><text x="422" y="140" text-anchor="middle" font-size="10">Withholds cookies on</text><text x="422" y="155" text-anchor="middle" font-size="10">third-party requests</text><text x="422" y="185" text-anchor="middle" font-size="9" fill="#f59e0b">• Stops CSRF attacks</text><rect x="510" y="55" width="165" height="145" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1"/><text x="592" y="75" text-anchor="middle" font-weight="bold" fill="#8b5cf6">Domain &amp; Max-Age</text><text x="592" y="95" text-anchor="middle" font-size="11">Boundary &amp; TTL</text><text x="592" y="125" text-anchor="middle" font-size="10">Scoped subdomains</text><text x="592" y="140" text-anchor="middle" font-size="10">Exact relative TTL</text><text x="592" y="155" text-anchor="middle" font-size="10">Immune to clock skew</text><text x="592" y="185" text-anchor="middle" font-size="9" fill="#8b5cf6">• Precise lifecycle</text></g></svg>`,
      caption: {
        en: 'The security attributes of Set-Cookie isolate credentials from JavaScript theft, network eavesdropping, and cross-site forgery.',
        bn: 'Set-Cookie-এর নিরাপত্তা বৈশিষ্ট্যগুলো ক্রেডেনশিয়ালকে স্ক্রিপ্ট চুরি, নেটওয়ার্ক ছিনতাই ও ক্রস-সাইট জালিয়াতি থেকে সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Pipe Seal: The Secure Attribute', bn: '৩. পরিবহন নিরাপত্তা: Secure বৈশিষ্ট্য' } },
    {
      type: 'para',
      text: {
        en: 'The Secure attribute mandates that the browser must only transmit the cookie over encrypted HTTPS connections. If a user inadvertently visits an unencrypted http:// link on an untrusted public Wi-Fi network, the browser strictly withholds the cookie. This prevents plaintext credentials from leaking over open network airwaves.',
        bn: 'Secure ফ্ল্যাগটি নির্দেশ দেয় যে ব্রাউজার কেবল এনক্রিপ্ট করা HTTPS কানেকশনেই এই কুকি সার্ভারে পাঠাবে। অসাবধানতাবশত কোনো ব্যবহারকারী সাধারণ http:// লিংকে ক্লিক করলেও ব্রাউজার কুকিটি পাঠাবে না। এর ফলে উন্মুক্ত পাবলিক ওয়াইফাই থেকে পাসওয়ার্ড বা টোকেন চুরি হওয়া শতভাগ প্রতিহত করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Browser withholding behavior: */
/* https://codeshikhon.com/cart -> Cookie: sid=9981 (Sent safely!) */
/* http://codeshikhon.com/cart  -> Cookie withheld by browser due to Secure flag! */`,
      caption: {
        en: 'The Secure flag blocks transmission over unencrypted plaintext HTTP transports.',
        bn: 'Secure ফ্ল্যাগ আন-এনক্রিপ্ট করা প্লেইনটেক্সট HTTP মাধ্যমে কুকি ফাঁস হওয়া আটকায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Script Seal: The HttpOnly Attribute for XSS Defense', bn: '৪. স্ক্রিপ্ট নিরাপত্তা: XSS প্রতিরোধে HttpOnly বৈশিষ্ট্য' } },
    {
      type: 'para',
      text: {
        en: 'Cross-Site Scripting (XSS) allows attackers to inject malicious JavaScript into web pages. If a session cookie is accessible to JavaScript, an injected script can read document.cookie and exfiltrate the token to an external server. The HttpOnly attribute hides the cookie from all client-side JavaScript APIs, restricting its use exclusively to HTTP network requests.',
        bn: 'Cross-Site Scripting (XSS) আক্রমণের মাধ্যমে আক্রমণকারীরা ওয়েবসাইটে ক্ষতিকর জাভাস্ক্রিপ্ট কোড ঢুকিয়ে দেয়। সাধারণ কুকি থাকলে স্ক্রিপ্ট document.cookie পড়ে টোকেন চুরি করে নিতে পারে। HttpOnly ফ্ল্যাগ দিলে কোনো ব্রাউজার স্ক্রিপ্ট এই কুকি পড়তে পারে না, এটি শুধুমাত্র নেটওয়ার্ক রিকোয়েস্টেই কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Inside browser DevTools Console or injected XSS script:
console.log(document.cookie);
// Result: Shows analytics cookies only!
// The session cookie with HttpOnly is completely INVISIBLE to JavaScript!`,
      caption: {
        en: 'HttpOnly prevents client-side scripts from reading session cookies during XSS attacks.',
        bn: 'HttpOnly এক্সএসএস আক্রমণের সময় কোনো জাভাস্ক্রিপ্ট স্ক্রিপ্ট দিয়ে সেশন কুকি পড়া অসম্ভব করে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. CSRF Defense: SameSite=Strict vs Lax vs None', bn: '৫. CSRF প্রতিরোধ: SameSite=Strict বনাম Lax বনাম None' } },
    {
      type: 'para',
      text: {
        en: 'Cross-Site Request Forgery (CSRF) tricks a user browser into executing unwanted actions on a site where they are logged in. The SameSite attribute controls whether cookies travel along cross-origin requests. SameSite=Strict blocks the cookie on all cross-site visits. SameSite=Lax allows the cookie only on safe top-level GET navigations. SameSite=None allows cross-site requests but strictly requires the Secure flag.',
        bn: 'Cross-Site Request Forgery (CSRF) ব্যবহারকারীর অজান্তে ক্ষতিকর রিকোয়েস্ট পাঠাতে বাধ্য করে। SameSite বৈশিষ্ট্য ঠিক করে অন্য সাইটের রিকোয়েস্টে কুকি যাবে কি না। SameSite=Strict অন্য যেকোনো সাইটের লিংকে কুকি পাঠানো বন্ধ রাখে। SameSite=Lax কেবল সাধারণ লিংকে ক্লিক করে ঢোকার সময় কুকি পাঠায়। SameSite=None সব জায়গায় কুকি পাঠায় তবে সাথে Secure থাকা বাধ্যতামূলক।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* SameSite policy comparison: */
/* Strict: Clicking a link from an email to bank.com arrives LOGGED OUT (Safest) */
Set-Cookie: sid=secret1; SameSite=Strict; Secure

/* Lax: Clicking a link from Google search to news.com sends cookie (Standard default) */
Set-Cookie: sid=secret2; SameSite=Lax; Secure

/* None: Required for embedded third-party widgets and cross-site iframes: */
Set-Cookie: sid=secret3; SameSite=None; Secure`,
      caption: {
        en: 'SameSite regulates cross-site cookie transmission to defend against forged request attacks.',
        bn: 'SameSite বহিরাগত সাইট থেকে পাঠানো রিকোয়েস্টে কুকি নিয়ন্ত্রণ করে CSRF আক্রমণ রোধ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Lifespan Clocks: Session Cookies vs Max-Age & Expires', bn: '৬. স্থায়িত্বের সময়সীমা: সেশন কুকিজ বনাম Max-Age ও Expires' } },
    {
      type: 'para',
      text: {
        en: 'A cookie without an expiration attribute is a Session Cookie. It resides in volatile memory and is erased when the browser window closes. Persistent cookies specify a lifespan using either Max-Age (lifetime in seconds) or Expires (an absolute GMT timestamp). Modern standards prefer Max-Age because it is immune to client clock drift.',
        bn: 'যে কুকিতে কোনো মেয়াদের সময় দেওয়া থাকে না তাকে Session Cookie বলা হয়। এটি মেমরিতে থাকে এবং ব্রাউজার বন্ধ করলেই মুছে যায়। দীর্ঘমেয়াদী কুকির জন্য Max-Age (সেকেন্ডের মেয়াদ) অথবা Expires (নির্দিষ্ট তারিখ) ব্যবহার করা হয়। কম্পিউটারের ঘড়ির ভুল সময় এড়াতে আধুনিক ওয়েবে Max-Age ব্যবহারের সুপারিশ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* 1. Volatile session cookie (deleted on browser close): */
Set-Cookie: active_tab=orders; Path=/

/* 2. Persistent cookie valid for 7 days (7 * 24 * 3600 = 604800 seconds): */
Set-Cookie: remember_me=true; Max-Age=604800; Path=/

/* 3. Immediate deletion: set Max-Age=0 or past date: */
Set-Cookie: sid=; Max-Age=0; Path=/`,
      caption: {
        en: 'Max-Age defines relative lifespan in seconds; Max-Age=0 triggers immediate deletion.',
        bn: 'Max-Age সেকেন্ডে মেয়াদ ঠিক করে; Max-Age=0 দিলে ব্রাউজার সাথে সাথে কুকি মুছে ফেলে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Scope & Jurisdiction: Domain and Path Scoping', bn: '৭. স্কোপ ও পরিধি: Domain ও Path নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'Domain and Path define the geographical boundaries where the cookie is delivered. If the Domain attribute is omitted, the cookie binds strictly to the exact host that issued it. If specified (Domain=example.com), the cookie is accessible to the apex domain and all subdomains. The Path attribute restricts the cookie to specific URL prefix paths.',
        bn: 'Domain এবং Path ঠিক করে দেয় কোন কোন ঠিকানায় কুকি পাঠানো হবে। Domain উল্লেখ না থাকলে কুকিটি কেবল হুবহু ওই ওয়েবসাইটে সীমাবদ্ধ থাকে। কিন্তু Domain=example.com দিলে মূল সাইটের পাশাপাশি সব সাবডোমেইনেও কুকি চলে যায়। Path অ্যাট্রিবিউট নির্দিষ্ট ইউআরএল পাথের ভেতরে কুকির চলাচল সীমাবদ্ধ রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Host-only cookie: restricted strictly to api.codeshikhon.com: */
Set-Cookie: api_token=123; Path=/

/* Subdomain-wide cookie: visible to blog.codeshikhon.com & auth.codeshikhon.com: */
Set-Cookie: sso_id=987; Domain=codeshikhon.com; Path=/`,
      caption: {
        en: 'Omitting Domain restricts cookies to the exact issuing host, preventing leakage to subdomains.',
        bn: 'Domain বাদ রাখলে কুকিটি কেবল নির্দিষ্ট হোস্টে সীমাবদ্ধ থাকে এবং সাবডোমেইনে ফাঁস হওয়া আটকায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Enforcing Security with Prefixes: __Host- and __Secure-', bn: '৮. প্রিফিক্স দিয়ে কঠোর নিরাপত্তা: __Host- ও __Secure-' } },
    {
      type: 'para',
      text: {
        en: 'Cookie prefixes allow servers to lock down cookie policies so that the browser itself enforces security rules at creation. The __Secure- prefix requires the Secure attribute. The __Host- prefix enforces that the cookie must have Secure, Path=/, and MUST NOT contain a Domain attribute, binding it permanently to the issuing host.',
        bn: 'কুকি প্রিফিক্স এমন এক শক্তিশালী পদ্ধতি যেখানে ব্রাউজার নিজে নিশ্চিত করে সব নিরাপত্তা নিয়ম মানা হয়েছে কি না। __Secure- দিয়ে নাম শুরু হলে অবশ্যই Secure ফ্ল্যাগ থাকতে হয়। আর __Host- দিয়ে শুরু হলে Secure, Path=/ থাকা বাধ্যতামূলক এবং কোনো Domain অ্যাট্রিবিউট থাকা চলবে না।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Browser ACCEPTS this bulletproof session cookie: */
Set-Cookie: __Host-sid=random123; Secure; HttpOnly; SameSite=Strict; Path=/

/* Browser REJECTS this because __Host- forbids Domain attributes: */
Set-Cookie: __Host-sid=random123; Secure; Domain=codeshikhon.com; Path=/`,
      caption: {
        en: 'The __Host- prefix provides browser-enforced isolation against subdomain spoofing.',
        bn: '__Host- প্রিফিক্স ব্রাউজার দ্বারা নিশ্চিত সাবডোমেইন হ্যাকিং প্রতিরোধী সুরক্ষা দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Session Fixation Defense: Rotation on Login', bn: '৯. সেশন ফিক্সেশন প্রতিরোধ: লগইনে সেশন রোটেশন' } },
    {
      type: 'para',
      text: {
        en: 'Session Fixation occurs when an attacker tricks a victim into using a known pre-existing session token. When the victim logs in, the server elevates privileges on that same token, giving the attacker full access. To defeat this, the server MUST destroy the old session and mint a fresh session ID immediately upon successful login.',
        bn: 'Session Fixation হলো এমন আক্রমণ যেখানে আক্রমণকারী আগে থেকেই পরিচিত একটি সেশন আইডি শিকারের ব্রাউজারে বসিয়ে দেয়। ব্যবহারকারী লগইন করলে সার্ভার সেই পুরনো আইডিতেই অনুমতি দিয়ে দিলে হ্যাকার পুরো অ্যাকাউন্টের নিয়ন্ত্রণ পেয়ে যায়। এটি রোধ করতে লগইনের সাথে সাথেই পুরনো সেশন বাতিল করে নতুন সেশন আইডি বানাতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Secure Express authentication handler:
async function handleLogin(req, res) {
  const user = await verifyCredentials(req.body.username, req.body.password);
  
  if (user) {
    // 1. Destroy old unauthenticated session identifier:
    req.session.regenerate((err) => {
      if (err) throw err;

      // 2. Assign authenticated user to FRESH session token:
      req.session.userId = user.id;
      res.json({ success: true });
    });
  }
}`,
      caption: {
        en: 'Regenerating session identifiers on authentication defeats session fixation attacks.',
        bn: 'লগইন করার সাথে সাথে সেশন রিজেনারেট করলে সেশন ফিক্সেশন আক্রমণ পুরোপুরি ব্যর্থ হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Storage Limits, 431 Errors & Third-Party Sunset (CHIPS)', bn: '১০. স্টোরেজ লিমিট, ৪৩১ এরর ও থার্ড-পার্টি কুকি বিদায়' } },
    {
      type: 'para',
      text: {
        en: 'Browsers enforce a strict budget of approximately 4KB per cookie and roughly 180 cookies per domain. If cumulative cookie headers exceed web server limits (typically 8KB to 16KB), the server rejects requests with HTTP 431 Request Header Fields Too Large. Furthermore, modern browsers are phasing out third-party cookies in favor of partitioned storage (CHIPS).',
        bn: 'ব্রাউজার প্রতি কুকির জন্য সর্বোচ্চ প্রায় ৪ কিলোবাইট এবং প্রতি ডোমেইনে প্রায় ১৮০টি কুকির সীমা নির্ধারণ করে। সব কুকি মিলে সাইজ বড় হয়ে গেলে সার্ভার HTTP 431 Request Header Fields Too Large এরর দেয়। তাছাড়া ব্যবহারকারীর গোপনীয়তা রক্ষায় আধুনিক ব্রাউজারগুলো থার্ড-পার্টি ট্র্যাকিং কুকি বন্ধ করে CHIPS পার্টিশন চালু করছে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Modern partitioned cookie for embedded widgets (CHIPS): */
Set-Cookie: theme=dark; Secure; SameSite=None; Partitioned; Path=/

/* When headers exceed 8KB-16KB limit: */
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: text/plain

Cookie header buffer overflow: clear stale cookies!`,
      caption: {
        en: 'Keep cookies small and lean to prevent HTTP 431 header buffer overflow errors.',
        bn: 'HTTP ৪৩১ বাফার ওভারফ্লো এরর এড়াতে কুকিজ সর্বদা ছোট ও পরিমিত রাখুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-ck-ex1',
      kind: 'predict',
      topic: 'http: XSS cookie defense flag',
      question: {
        en: 'Which Set-Cookie security attribute blocks client-side JavaScript (document.cookie) from accessing the cookie, preventing token theft during XSS attacks?',
        bn: 'কোন Set-Cookie নিরাপত্তা বৈশিষ্ট্যটি ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট (document.cookie) থেকে কুকি এক্সেস করা আটকে দিয়ে XSS আক্রমণে টোকেন চুরি হওয়া প্রতিহত করে?'
      },
      code: `/* Prevent JavaScript from reading session cookie */
/* Set-Cookie: sid=xyz; Secure; ____________ */`,
      answer: 'HttpOnly',
      accept: ['HttpOnly', 'httponly'],
      hint: {
        en: 'HttpOnly attribute.',
        bn: 'HttpOnly বৈশিষ্ট্য।'
      },
      explanation: {
        en: 'HttpOnly instructs the browser that the cookie must not be exposed through client-side scripts, neutralizing cookie-stealing XSS exploits.',
        bn: 'HttpOnly ব্রাউজারকে নির্দেশ দেয় কোনো স্ক্রিপ্টের কাছে কুকি উন্মুক্ত না করতে, যা XSS আক্রমণ থেকে টোকেন রক্ষা করে।'
      }
    },
    {
      id: 'htt-ck-ex2',
      kind: 'mcq',
      topic: 'http: SameSite=Lax vs Strict',
      question: {
        en: 'What occurs when a user clicks a regular link from an external website to a web app protected by "SameSite=Strict"?',
        bn: '"SameSite=Strict" দ্বারা সুরক্ষিত কোনো ওয়েবসাইটের লিংকে অন্য সাইট থেকে ক্লিক করে ঢুকলে কী ঘটবে?'
      },
      options: [
        { en: 'The browser withholds the cookie on the incoming request, causing the user to appear logged out on that initial page load', bn: 'ব্রাউজার আগত রিকোয়েস্টে কুকি পাঠানো বন্ধ রাখে, ফলে প্রাথমিক পেজ লোডে ব্যবহারকারীকে লগআউট দেখায়' },
        { en: 'The cookie is sent normally', bn: 'কুকি স্বাভাবিকভাবেই চলে যায়' },
        { en: 'The browser blocks the page from loading', bn: 'ব্রাউজার পেজটি লোড করা আটকে দেয়' },
        { en: 'The user password is deleted', bn: 'পাসওয়ার্ড মুছে যায়' }
      ],
      answer: 0,
      hint: {
        en: 'Strict blocks cookies on cross-site visits.',
        bn: 'Strict যেকোনো বহিরাগত লিংক থেকে আসায় কুকি আটকে দেয়।'
      },
      explanation: {
        en: 'SameSite=Strict blocks cookies on all cross-origin requests, including standard top-level link clicks from emails or external websites.',
        bn: 'SameSite=Strict বাইরের কোনো সাইটের লিংকে ক্লিক করলেও কুকি পাঠায় না, তাই ব্যবহারকারীকে লগইন ছাড়া দেখায়।'
      }
    },
    {
      id: 'htt-ck-ex3',
      kind: 'mcq',
      topic: 'http: __Host- prefix requirements',
      question: {
        en: 'Which set of rules must be satisfied for a browser to accept a cookie named with the "__Host-" prefix?',
        bn: '"__Host-" প্রিফিক্সযুক্ত কোনো কুকি ব্রাউজার গ্রহণ করতে হলে কোন নিয়মগুলো পূরণ করা বাধ্যতামূলক?'
      },
      options: [
        { en: 'Must have Secure, Path=/, and MUST NOT contain a Domain attribute (binding strictly to the issuing host)', bn: 'অবশ্যই Secure ও Path=/ থাকতে হবে এবং কোনো Domain অ্যাট্রিবিউট থাকা চলবে না (নির্দিষ্ট হোস্টে আবদ্ধ)' },
        { en: 'Must be unencrypted plain text', bn: 'আন-এনক্রিপ্টেড হতে হবে' },
        { en: 'Must be over 10KB in size', bn: '১০ কেবির বড় হতে হবে' },
        { en: 'Must have SameSite=None only', bn: 'কেবল SameSite=None থাকতে হবে' }
      ],
      answer: 0,
      hint: {
        en: 'Secure, Path=/, no Domain.',
        bn: 'Secure, Path=/ এবং কোনো Domain নয়।'
      },
      explanation: {
        en: 'The __Host- prefix enforces strict host isolation: the cookie must be Secure, have Path=/, and omit Domain to prevent subdomain hijacking.',
        bn: '__Host- প্রিফিক্স নিশ্চিত করে কুকিতে Secure ও Path=/ আছে এবং কোনো ডোমেইন নাম না থাকায় তা সাবডোমেইনে ফাঁস হবে না।'
      }
    }
  ],
  quiz: {
    id: 'htt-ck-quiz',
    title: { en: 'HTTP Cookies & Session Security Quiz', bn: 'HTTP কুকিজ ও সেশন নিরাপত্তা কুইজ' },
    questions: [
      {
        id: 'hcq1',
        kind: 'mcq',
        topic: 'http: session fixation countermeasure',
        question: {
          en: 'How do web applications effectively neutralize Session Fixation vulnerabilities during user authentication?',
          bn: 'ব্যবহারকারী লগইন করার সময় ওয়েব অ্যাপ্লিকেশন কীভাবে সেশন ফিক্সেশন আক্রমণ সফলভাবে প্রতিহত করে?'
        },
        options: [
          { en: 'By regenerating and rotating the session ID upon successful login, invalidating the pre-authentication token', bn: 'সফল লগইনে সেশন আইডি পরিবর্তন বা রিজেনারেট করে এবং আগের সেশন টোকেনটি বাতিল করে দিয়ে' },
          { en: 'By storing the password in document.cookie', bn: 'পাসওয়ার্ড কুকিতে সেভ করে' },
          { en: 'By increasing the Max-Age to 1 year', bn: 'মেয়াদ ১ বছর বাড়িয়ে দিয়ে' },
          { en: 'By disabling HTTPS', bn: 'HTTPS বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Session identifier regeneration upon login.',
          bn: 'লগইনের সময় সেশন আইডি পুনর্গঠন।'
        },
        explanation: {
          en: 'Rotating session identifiers at privilege escalation ensures that any pre-seeded session tokens held by attackers become invalid.',
          bn: 'লগইনের সাথে সাথে নতুন সেশন আইডি তৈরি করলে আক্রমণকারীর আগে থেকে বসানো পুরনো টোকেন বাতিল হয়ে যায়।'
        }
      },
      {
        id: 'hcq2',
        kind: 'mcq',
        topic: 'http: Max-Age vs Expires preference',
        question: {
          en: 'Why is the Max-Age attribute generally preferred over Expires for setting cookie lifetimes in modern applications?',
          bn: 'আধুনিক অ্যাপ্লিকেশনে কুকির মেয়াদ নির্ধারণে Expires-এর চেয়ে Max-Age কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          { en: 'Max-Age is relative in seconds, making it immune to inaccuracies caused by client system clock drift', bn: 'Max-Age সেকেন্ডে নির্ধারিত হয়, ফলে ব্যবহারকারীর কম্পিউটারের ঘড়ির ভুল সময়ের কারণে কোনো সমস্যা হয় না' },
          { en: 'Expires works only in Google Chrome', bn: 'Expires কেবল ক্রোমে চলে' },
          { en: 'Max-Age automatically encrypts the database', bn: 'Max-Age ডেটা এনক্রিপ্ট করে' },
          { en: 'Expires cannot exceed 5 minutes', bn: 'Expires ৫ মিনিটের বেশি হয় না' }
        ],
        answer: 0,
        hint: {
          en: 'Relative seconds vs fixed date.',
          bn: 'আপেক্ষিক সেকেন্ড বনাম নির্দিষ্ট তারিখ।'
        },
        explanation: {
          en: 'Expires relies on absolute GMT timestamps which fail if client clocks are skewed. Max-Age counts relative seconds from reception.',
          bn: 'Expires কম্পিউটারের সিস্টেম ঘড়ির ওপর নির্ভর করে যা ভুল হতে পারে। Max-Age রিসিভ হওয়ার পর থেকে সেকেন্ড গণনা করায় নির্ভুল থাকে।'
        }
      },
      {
        id: 'hcq3',
        kind: 'mcq',
        topic: 'http: samesite strict vs lax difference',
        question: {
          en: 'How does SameSite=Lax differ from SameSite=Strict during external top-level navigations (e.g. clicking a link to your site from an external search engine)?',
          bn: 'বাইরের কোনো সার্চ ইঞ্জিন বা লিংক থেকে ক্লিক করে আপনার ওয়েবসাইটে আসার সময় SameSite=Lax এবং SameSite=Strict-এর মধ্যে কী পার্থক্য দেখা যায়?'
        },
        options: [
          { en: 'SameSite=Lax attaches the cookie on safe top-level GET navigations so users remain logged in, whereas Strict withholds the cookie even on top-level clicks', bn: 'SameSite=Lax নিরাপদ টপ-লেভেল GET ক্লিকে কুকি পাঠায় যাতে ইউজার লগইন অবস্থায় ঢুকতে পারে, আর Strict বাইরের যেকোনো লিংকে কুকি পাঠানো সম্পূর্ণ বন্ধ রাখে' },
          { en: 'Strict works only on mobile devices', bn: 'Strict কেবল মোবাইলেই চলে' },
          { en: 'Lax deletes the cookie after 1 minute', bn: 'Lax ১ মিনিট পর কুকি মুছে দেয়' },
          { en: 'Both options disable all HTTP cookies', bn: 'উভয় অপশনই সব কুকি বাতিল করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Lax permits safe top-level incoming GET clicks.',
          bn: 'Lax নিরাপদ টপ-লেভেল বাহ্যিক ক্লিকে কুকি পাঠানোর অনুমতি দেয়।'
        },
        explanation: {
          en: 'SameSite=Lax balances security and usability by withholding cookies on cross-site form POSTs while attaching them when a user clicks a regular link to enter the site.',
          bn: 'SameSite=Lax ক্রস-সাইট POST বন্ধ রেখে CSRF ঠেকায় কিন্তু সাধারণ ক্লিকে ওয়েবসাইটে ঢুকলে কুকি পাঠিয়ে ব্যবহারকারীকে লগইন রাখে।'
        }
      },
      {
        id: 'hcq4',
        kind: 'mcq',
        topic: 'http: __Host- prefix cookie security rules',
        question: {
          en: 'What strict browser requirements are enforced when a cookie name starts with the "__Host-" prefix?',
          bn: 'একটি কুকির নামের শুরুতে যখন "__Host-" প্রিফিক্স থাকে, তখন ব্রাউজার কোন কঠোর নিয়মগুলো বাধ্যতামূলক করে?'
        },
        options: [
          { en: 'The cookie must include Secure, must NOT include a Domain attribute (locking it to the exact host), and must have Path=/', bn: 'কুকিতে অবশ্যই Secure থাকতে হবে, কোনো Domain উল্লেখ করা যাবে না (যাতে সাবডোমেন দখল না করতে পারে) এবং Path=/ হতে হবে' },
          { en: 'The cookie must be written in binary assembly', bn: 'কুকিটি অ্যাসেম্বলি ভাষায় লিখতে হবে' },
          { en: 'The cookie cannot last longer than 10 seconds', bn: 'কুকির মেয়াদ ১০ সেকেন্ডের বেশি হবে না' },
          { en: 'The cookie is only sent to Google servers', bn: 'কুকিটি শুধু গুগলের সার্ভারেই যাবে' }
        ],
        answer: 0,
        hint: {
          en: 'Secure flag, no Domain attribute, and root Path.',
          bn: 'Secure ফ্ল্যাগ, কোনো Domain ছাড়া এবং রুট Path।'
        },
        explanation: {
          en: 'The __Host- prefix enforces that the cookie is origin-locked to that exact host, transmitted exclusively over HTTPS, and accessible across the entire site.',
          bn: '__Host- প্রিফিক্স নিশ্চিত করে যে কুকিটি সাবডোমেন থেকে আক্রমণমুক্ত, কেবলমাত্র HTTPS-এ চলে এবং পুরো সাইটে বৈধ থাকে।'
        }
      }
    ]
  }
};
