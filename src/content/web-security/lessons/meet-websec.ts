import type { Lesson } from '../../../lib/types';

export const MeetWebsecLesson: Lesson = {
  slug: 'meet-websec',
  tech: 'web-security',
  title: {
    en: 'Overview of Web Security: What is Web Security, Attack Surfaces & Defense-in-Depth',
    bn: 'ওয়েব নিরাপত্তার সার্বিক পরিচিতি: ওয়েব নিরাপত্তা কী, আক্রমণের ক্ষেত্র এবং বহুস্তরীয় প্রতিরক্ষা'
  },
  summary: {
    en: 'Begin your tour of web application security architecture. Understand why every public IP address and domain operates in a hostile environment, scanned by automated adversary bots within minutes of DNS registration. Learn the foundational CIA Triad (Confidentiality, Integrity, Availability), the Default-Deny principle, and how security gateways inspect traffic before serving. Explore how 6 incoming requests are sorted: 3 legitimate requests served with HTTP 200, and 3 hostile probes blocked.',
    bn: 'ওয়েব অ্যাপ্লিকেশন নিরাপত্তা আর্কিটেকচারের সফর শুরু করুন। কেন প্রতিটি পাবলিক আইপি ও ডোমেইন একটি বিপজ্জনক পরিবেশের মুখোমুখি হয় এবং ডিএনএস নিবন্ধনের কয়েক মিনিটের মধ্যে কেন স্বয়ংক্রিয় আক্রমণকারী বটগুলো স্ক্যান করা শুরু করে তা বুঝুন। মৌলিক CIA ট্রায়াড (গোপনীয়তা, অখণ্ডতা, প্রাপ্যতা), ডিফল্ট-ডিনাই নীতি এবং রিকোয়েস্ট পরিবেশনের আগে সিকিউরিটি গেটওয়ে কীভাবে ট্রাফিক নিরীক্ষণ করে তা শিখুন। জানুন কীভাবে ৬ টি আগত রিকোয়েস্ট বাছাই করা হয়: ৩ টি বৈধ রিকোয়েস্ট HTTP ২০০ পেয়ে পরিবেশিত হয় এবং ৩ টি বিপজ্জনক আক্রমণ সরাসরি আটকে দেওয়া হয়।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'hostile-internet-reality',
      text: {
        en: 'The Reality of the Public Internet: Continuous Automated Reconnaissance',
        bn: 'পাবলিক ইন্টারনেটের বাস্তবতা: সার্বক্ষণিক স্বয়ংক্রিয় অনুসন্ধান'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A foundational truth of modern software engineering is that deploying an application to the public internet places it directly on a global digital battlefield. You do not need to be a massive corporate enterprise or a high-profile government agency to attract cyber attacks. Automated botnets continuously sweep internet IP addresses, probing every responding server within 15 minutes of connecting to the network.',
        bn: 'আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ের একটি চরম সত্য হলো ইন্টারনেটে কোনো অ্যাপ্লিকেশন ডেপ্লয় করার অর্থ হলো সেটিকে সরাসরি বৈশ্বিক ডিজিটাল যুদ্ধক্ষেত্রে নামিয়ে দেওয়া। সাইবার আক্রমণের শিকার হতে আপনাকে কোনো বিশাল বাণিজ্যিক প্রতিষ্ঠান বা সরকারি সংস্থা হতে হয় না। স্বয়ংক্রিয় বটনেটগুলো সার্বক্ষণিক ইন্টারনেটের আইপি অ্যাড্রেস স্ক্যান করতে থাকে এবং সংযোগ পাওয়ার মাত্র ১৫ মিনিটের মধ্যে যেকোনো নতুন সার্ভারে আঘাত হানার চেষ্টা করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Web application security is built on the CIA Triad. Confidentiality ensures sensitive data is never read by unauthorized eavesdroppers. Integrity guarantees that data cannot be tampered with by malicious payloads, and Availability ensures that applications remain resilient against denial-of-service floods.',
        bn: 'ওয়েব অ্যাপ্লিকেশন নিরাপত্তা সিআইএ (CIA) ট্রায়াডের ওপর প্রতিষ্ঠিত। গোপনীয়তা নিশ্চিত করে যে সংবেদনশীল তথ্য অননুমোদিত ব্যক্তি পড়তে পারবে না। অখণ্ডতা নিশ্চয়তা দেয় যে ডেটা কোনো ক্ষতিকর ইনজেকশন দ্বারা বিকৃত হতে পারবে না, এবং প্রাপ্যতা নিশ্চিত করে যে সিস্টেমটি ডিনায়েল-অব-সার্ভিস হামলার মুখেও সক্রিয় থাকবে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Request Arrival & Protocol Ingestion',
            bn: '১. রিকোয়েস্ট আগমন এবং প্রটোকল গ্রহণ'
          },
          text: {
            en: 'The reverse proxy, web application firewall (WAF), or application gateway intercepts raw incoming HTTP requests before routing them to internal business handlers.',
            bn: 'রিভার্স প্রক্সি, ওয়েব অ্যাপ্লিকেশন ফায়ারওয়াল (WAF) বা এপিআই গেটওয়ে অভ্যন্তরীণ কোডে পাঠানোর আগেই আগত কাঁচা HTTP রিকোয়েস্টগুলো আটকে দেয়।'
          },
        },
        {
          title: {
            en: '2. Signature & Anomaly Inspection',
            bn: '২. সিগনেচার এবং অসঙ্গতি নিরীক্ষণ'
          },
          text: {
            en: 'Incoming URL query strings, request bodies, and headers are evaluated against known malicious attack patterns (such as XSS script tags, SQLi quote-breaks, and path traversals).',
            bn: 'আগত ইউআরএল, রিকোয়েস্ট বডি এবং হেডারগুলোকে পরিচিত ক্ষতিকর আক্রমণ প্যাটার্নের ( যেমন XSS স্ক্রিপ্ট ট্যাগ, SQLi কোট-ব্রেক এবং পাথ ট্রাভার্সাল ) সাথে মিলিয়ে পরীক্ষা করা হয়।'
          },
        },
        {
          title: {
            en: '3. Sensitive System Path Probing Defense',
            bn: '৩. সংবেদনশীল সিস্টেম পাথ অনুসন্ধান প্রতিরোধ'
          },
          text: {
            en: 'Requests probing for sensitive administrative files (such as /.env, /.git, or /wp-admin) are identified as automated vulnerability reconnaissance and terminated immediately.',
            bn: 'যেসব রিকোয়েস্ট সংবেদনশীল ফাইল খোঁজার চেষ্টা করে ( যেমন /.env, /.git বা /wp-admin ), সেগুলোকে ক্ষতিকর স্ক্যানার হিসেবে চিহ্নিত করে সাথে সাথে সংযোগ কেটে দেওয়া হয়।'
          },
        },
        {
          title: {
            en: '4. Triage: Clean Traffic Served, Hostile Probes Blocked',
            bn: '৪. বাছাইকরণ: পরিষ্কার ট্রাফিক পরিবেশন, ক্ষতিকর প্রোব ব্লক'
          },
          text: {
            en: 'Legitimate traffic proceeds into the application pipeline with HTTP 200 responses, while malicious probes are terminated with HTTP 400 Bad Request or HTTP 403 Forbidden.',
            bn: 'বৈধ ট্রাফিক অ্যাপ্লিকেশনে ঢুকে HTTP ২০০ রেসপন্স পায়, আর ক্ষতিকর আক্রমণগুলোকে HTTP ৪০০ বা HTTP ৪০৩ দিয়ে সরাসরি আটকে দেওয়া হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Web Traffic Security Sorter: 6 Requests Evaluated',
        bn: 'ওয়েব ট্রাফিক সিকিউরিটি বাছাইকরণ: ৬ টি রিকোয়েস্টের মূল্যায়ন'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Web traffic security inspector sorting 6 incoming requests into 3 clean served and 3 hostile blocked">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">WEB APPLICATION SECURITY GATEWAY: TRAFFIC TRIAGE</text>
  
  <!-- Left Column: Clean Traffic (3 Served) -->
  <g transform="translate(40, 55)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="360" height="32" rx="8" fill="#059669"/>
    <text x="180" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">CLEAN TRAFFIC: SERVED 3 (HTTP 200)</text>
    
    <!-- Req 1: Homepage -->
    <g transform="translate(15, 45)">
      <rect width="330" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="22" fill="#6ee7b7" font-size="9.5" font-weight="bold">REQ 1: GET / (Homepage)</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8">Standard asset request. No hostile payload. → <tspan fill="#34d399" font-weight="bold">SERVE (HTTP 200) ✓</tspan></text>
    </g>
    
    <!-- Req 2: Login view -->
    <g transform="translate(15, 115)">
      <rect width="330" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="22" fill="#6ee7b7" font-size="9.5" font-weight="bold">REQ 2: GET /login (Login View)</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8">Standard HTML form presentation. → <tspan fill="#34d399" font-weight="bold">SERVE (HTTP 200) ✓</tspan></text>
    </g>
    
    <!-- Req 3: Login submit -->
    <g transform="translate(15, 185)">
      <rect width="330" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="22" fill="#6ee7b7" font-size="9.5" font-weight="bold">REQ 3: POST /api/login (Valid Credentials)</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8">Structured body: user=alice&amp;pass=secret → <tspan fill="#34d399" font-weight="bold">SERVE (HTTP 200) ✓</tspan></text>
    </g>
    
    <rect x="15" y="260" width="330" height="40" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="180" y="285" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">TOTAL SERVED: 3 REQUESTS</text>
  </g>
  
  <!-- Right Column: Hostile Probes (3 Blocked) -->
  <g transform="translate(440, 55)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="360" height="32" rx="8" fill="#dc2626"/>
    <text x="180" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HOSTILE PROBES: BLOCKED 3 (HTTP 400 / 403)</text>
    
    <!-- Req 4: XSS Script Injection -->
    <g transform="translate(15, 45)">
      <rect width="330" height="60" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#fca5a5" font-size="9.5" font-weight="bold">REQ 4: GET /search?q=&lt;script&gt;alert(1)&lt;/script&gt;</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8">Cross-Site Scripting Probe detected → <tspan fill="#ef4444" font-weight="bold">BLOCK (HTTP 400) ✗</tspan></text>
    </g>
    
    <!-- Req 5: SQLi Quote Break -->
    <g transform="translate(15, 115)">
      <rect width="330" height="60" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#fca5a5" font-size="9.5" font-weight="bold">REQ 5: POST /profile (name=' OR 1=1--)</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8">SQL Injection Syntax Break detected → <tspan fill="#ef4444" font-weight="bold">BLOCK (HTTP 400) ✗</tspan></text>
    </g>
    
    <!-- Req 6: .env Reconnaissance -->
    <g transform="translate(15, 185)">
      <rect width="330" height="60" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#fca5a5" font-size="9.5" font-weight="bold">REQ 6: GET /.env (Secret Scanner)</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8">Automated Scanner probing credentials → <tspan fill="#ef4444" font-weight="bold">BLOCK (HTTP 403) ✗</tspan></text>
    </g>
    
    <rect x="15" y="260" width="330" height="40" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="180" y="285" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">TOTAL BLOCKED: 3 PROBES</text>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Across 6 incoming requests: 3 legitimate calls are served, while 3 hostile attack payloads are safely neutralized</text>
</svg>`,
      caption: {
        en: 'The security gateway inspects 6 requests: 3 clean calls are served with HTTP 200, while 3 hostile attack probes are blocked.',
        bn: 'সিকিউরিটি গেটওয়ে ৬ টি রিকোয়েস্ট নিরীক্ষণ করে: ৩ টি পরিষ্কার কলকে HTTP ২০০ দিয়ে সেবা দেওয়া হয় এবং ৩ টি আক্রমণ আটকে দেওয়া হয়।'
      },
    },
    {
      type: 'heading',
      id: 'traffic-inspector-code',
      text: {
        en: 'Building an HTTP Traffic Security Inspector in Node.js',
        bn: 'Node.js-এ HTTP ট্রাফিক সিকিউরিটি পরিদর্শক তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect this runnable Node.js security filter. It demonstrates how modern web firewalls and application security middleware inspect paths, query parameters, and request bodies to detect and block malicious XSS, SQL injection, and reconnaissance scans before they reach business logic.',
        bn: 'নিচের কার্যকর Node.js সিকিউরিটি ফিল্টারটি পরীক্ষা করুন। এটি দেখায় কীভাবে আধুনিক ওয়েব ফায়ারওয়াল এবং অ্যাপ সিকিউরিটি মিডলওয়্যার ইউআরএল পাথ, কোয়েরি প্যারামিটার এবং রিকোয়েস্ট বডি পরীক্ষা করে ক্ষতিকর XSS, SQL ইনজেকশন এবং গোপন ফাইল খোঁজার আক্রমণ ব্যবসায়িক কোডে পৌঁছানোর আগেই প্রতিহত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'traffic-security-inspector.js',
      code: `// Enterprise Web Traffic Security Inspector & Anomaly Gate
class WebTrafficInspector {
  static inspect(req) {
    // Check 1: Automated reconnaissance against sensitive server files
    const sensitivePaths = ['/.env', '/wp-admin', '/phpmyadmin', '/.git'];
    if (sensitivePaths.some(prefix => req.path.startsWith(prefix))) {
      return {
        status: 403,
        allowed: false,
        threatType: 'Reconnaissance Probe',
        detail: 'Blocked probe against sensitive server path: ' + req.path
      };
    }

    // Check 2: Cross-Site Scripting (XSS) payload inspection
    const xssPattern = /<script\b[^>]*>|javascript:|onerror\\s*=|onload\\s*=/i;
    const queryString = req.query || '';
    const bodyString = req.body || '';

    if (xssPattern.test(queryString) || xssPattern.test(bodyString)) {
      return {
        status: 400,
        allowed: false,
        threatType: 'XSS Injection Probe',
        detail: 'Hostile executable script tags or handlers detected in payload'
      };
    }

    // Check 3: SQL Injection quote-breaking syntax inspection
    const sqliPattern = /('|")\\s*(OR|AND)\\s*[\\d\\w]+\\s*=\\s*[\\d\\w]+|--\\s*$/i;
    if (sqliPattern.test(queryString) || sqliPattern.test(bodyString)) {
      return {
        status: 400,
        allowed: false,
        threatType: 'SQL Injection Probe',
        detail: 'Hostile quote-breaking SQL syntax detected in payload'
      };
    }

    return {
      status: 200,
      allowed: true,
      threatType: 'None',
      detail: 'Legitimate request: passed all security inspection checks'
    };
  }
}

// 6 Simulated Incoming Requests
const incomingRequests = [
  { id: 1, method: 'GET', path: '/', query: '' },
  { id: 2, method: 'GET', path: '/login', query: '' },
  { id: 3, method: 'POST', path: '/api/login', body: 'user=alice&pass=superSecret2026' },
  { id: 4, method: 'GET', path: '/search', query: 'q=<script>alert(1)</script>' },
  { id: 5, method: 'POST', path: '/profile', body: "name=' OR 1=1--" },
  { id: 6, method: 'GET', path: '/.env', query: '' }
];

let servedCount = 0;
let blockedCount = 0;

console.log('=== Inspecting 6 Incoming Web Requests ===');
incomingRequests.forEach(req => {
  const verdict = WebTrafficInspector.inspect(req);
  if (verdict.allowed) {
    servedCount += 1;
    console.log('Req ' + req.id + ': ' + req.method + ' ' + req.path + ' -> SERVED (HTTP 200) ✓');
  } else {
    blockedCount += 1;
    console.log('Req ' + req.id + ': ' + req.method + ' ' + req.path + ' -> BLOCKED (' + verdict.status + ': ' + verdict.threatType + ') ✗');
  }
});

console.log('\\n=== Traffic Sorter Summary ===');
console.log('Total Requests Evaluated: ' + incomingRequests.length);
console.log('Legitimate Requests Served: ' + servedCount);
console.log('Hostile Probes Blocked: ' + blockedCount);`,
      caption: {
        en: 'The security inspector processes 6 requests: 3 clean calls are served with HTTP 200, while 3 attack probes are blocked.',
        bn: 'সিকিউরিটি পরিদর্শক ৬ টি রিকোয়েস্ট প্রক্রিয়া করে: ৩ টি পরিষ্কার কলকে HTTP ২০০ দিয়ে সেবা দেওয়া হয় এবং ৩ টি আক্রমণ আটকে দেওয়া হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'The 15-Minute Rule: Automated Botnets Never Sleep',
        bn: '১৫ মিনিটের নিয়ম: স্বয়ংক্রিয় বটনেট কখনো ঘুমায় না'
      },
      text: {
        en: 'Security telemetry reveals that when an engineer spins up a new cloud server (AWS EC2, DigitalOcean, Hetzner), automated bot scanners start hitting port 80 and port 443 within 15 minutes of DNS propagation. These bots do not target you personally; they systematically scan the entire IPv4 internet for unpatched WordPress instances, open phpMyAdmin consoles, exposed .git folders, and leaky .env files. Security must be active from minute zero.',
        bn: 'নিরাপত্তা তথ্য বিশ্লেষণ করে দেখা গেছে যে যখন কোনো ডেভেলপার একটি নতুন ক্লাউড সার্ভার তৈরি করেন, তখন ডিএনএস চালু হওয়ার মাত্র ১৫ মিনিটের মধ্যে আক্রমণকারী বটগুলো ৮০ ও ৪৪৩ নম্বর পোর্টে আঘাত করতে শুরু করে। এরা আপনাকে ব্যক্তিগতভাবে চেনে না; এরা ইন্টারনেটের সমস্ত সার্ভারে কোনো অরক্ষিত ওয়ার্ডপ্রেস, খোলা phpMyAdmin বা ফাঁস হওয়া .env ফাইল আছে কি না তা ক্রমাগত খুঁজতে থাকে। তাই প্রথম মিনিট থেকেই নিরাপত্তা ব্যবস্থা সক্রিয় থাকা অপরিহার্য।'
      },
    },
  ],
  exercises: [
    {
      id: 'meet-websec-ex-1',
      kind: 'predict',
      topic: 'traffic-sorter-requests-served-count',
      question: {
        en: 'Out of the 6 incoming requests evaluated in this security gateway demonstration, how many legitimate requests were successfully served with HTTP 200? (3). Type the number.',
        bn: 'এই সিকিউরিটি গেটওয়ে পরীক্ষায় মূল্যায়িত ৬ টি আগত রিকোয়েস্টের মধ্যে কয়টি বৈধ রিকোয়েস্ট সফলভাবে HTTP ২০০ পেয়ে সেবা লাভ করেছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: '3 clean requests (Requests 1, 2, and 3) were served.',
        bn: '৩ টি পরিষ্কার রিকোয়েস্ট (১, ২ এবং ৩ নম্বর রিকোয়েস্ট) সফল হয়েছিল।'
      },
      explanation: {
        en: 'Requests 1 (GET /), 2 (GET /login), and 3 (POST /api/login) were clean application calls and were served with HTTP 200.',
        bn: '১ নম্বর (GET /), ২ নম্বর (GET /login) এবং ৩ নম্বর (POST /api/login) রিকোয়েস্টে কোনো ক্ষতিকর কোড না থাকায় সেগুলো HTTP ২০০ পেয়েছিল।'
      },
    },
    {
      id: 'meet-websec-ex-2',
      kind: 'mcq',
      topic: 'cia-triad-foundations',
      question: {
        en: 'What are the 3 core pillars of the CIA Triad in web application security architecture?',
        bn: 'ওয়েব অ্যাপ্লিকেশন নিরাপত্তা আর্কিটেকচারে সিআইএ (CIA) ট্রায়াডের ৩ টি মূল স্তম্ভ কী কী?'
      },
      options: [
        {
          en: 'Confidentiality (protecting data from unauthorized disclosure), Integrity (safeguarding data against unauthorized tampering or injection), and Availability (ensuring uninterrupted access to authorized users)',
          bn: 'গোপনীয়তা (অননুমোদিত প্রকাশ থেকে তথ্য রক্ষা), অখণ্ডতা (অননুমোদিত পরিবর্তন বা ক্ষতিকর ইনজেকশন থেকে তথ্য রক্ষা) এবং প্রাপ্যতা (বৈধ ব্যবহারকারীদের জন্য সার্বক্ষণিক নিরবচ্ছিন্ন সেবা নিশ্চিত করা)',
        },
        {
          en: 'Computer monitors, internet cables, and wireless mice',
          bn: 'কম্পিউটারের মনিটর, ইন্টারনেটের তার এবং ওয়্যারলেস মাউস',
        },
        {
          en: 'Spring season, summer season, and autumn season',
          bn: 'বসন্তকাল, গ্রীষ্মকাল এবং শরৎকাল',
        },
        {
          en: 'Screen brightness, speaker volume, and keyboard keycap height',
          bn: 'স্ক্রিনের আলো, স্পিকারের শব্দ এবং কিবোর্ডের বোতামের উচ্চতা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Confidentiality, Integrity, and Availability form the CIA Triad.',
        bn: 'গোপনীয়তা, অখণ্ডতা এবং প্রাপ্যতা হলো CIA ট্রায়াডের মূল উপাদান।'
      },
      explanation: {
        en: 'Every security control—from encryption to sanitization and rate-limiting—directly protects Confidentiality, Integrity, or Availability.',
        bn: 'এনক্রিপশন থেকে শুরু করে স্যানিটাইজেশন পর্যন্ত প্রতিটি নিরাপত্তা কৌশল এই তিনটি স্তম্ভের কোনো না কোনোটিকে রক্ষা করতে ব্যবহৃত হয়।'
      },
    },
    {
      id: 'meet-websec-ex-3',
      kind: 'mcq',
      topic: 'automated-scanner-reconnaissance',
      question: {
        en: 'Why do automated bots continuously scan newly provisioned web servers for paths like /.env, /.git, and /wp-admin?',
        bn: 'স্বয়ংক্রিয় বটগুলো কেন নতুন তৈরি সার্ভারে অনবরত /.env, /.git এবং /wp-admin এর মতো ফাইলগুলো খুঁজতে থাকে?'
      },
      options: [
        {
          en: 'To discover inadvertently exposed server configuration secrets (database passwords, API keys) or vulnerable administrative panels that allow instantaneous, unauthenticated server takeover',
          bn: 'অসাবধানতাবশত উন্মুক্ত হয়ে থাকা গোপন কনফিগারেশন ফাইল (ডাটাবেজ পাসওয়ার্ড, এপিআই কি) বা অরক্ষিত অ্যাডমিন প্যানেল খুঁজে বের করে কোনো পাসওয়ার্ড ছাড়াই সার্ভার পুরোপুরি দখল করার উদ্দেশ্যে',
        },
        {
          en: 'To make server cooling fans rotate in reverse to generate electricity',
          bn: 'সার্ভারের কুলিং ফ্যানকে উল্টো দিকে ঘুরিয়ে বিদ্যুৎ তৈরি করার জন্য',
        },
        {
          en: 'To download user personal photos onto random smartphones across the world',
          bn: 'সারা বিশ্বের অচেনা স্মার্টফোনে ব্যবহারকারীর ব্যক্তিগত ছবি ডাউনলোড করে দেওয়ার জন্য',
        },
        {
          en: 'To force web browser windows to turn their background color to bright yellow',
          bn: 'ওয়েব ব্রাউজারের উইন্ডোর ব্যাকগ্রাউন্ড রঙ উজ্জ্বল হলুদে পরিবর্তন করতে বাধ্য করার জন্য',
        },
      ],
      answer: 0,
      hint: {
        en: 'Bots seek exposed credentials and unauthenticated admin panels.',
        bn: 'বটগুলো অসাবধানতাবশত উন্মুক্ত থাকা পাসওয়ার্ড ও অ্যাডমিন প্যানেল খুঁজে বেড়ায়।'
      },
      explanation: {
        en: 'Exposing a .env file gives attackers instant access to database credentials and secret signing keys. Web firewalls block these probes by default.',
        bn: 'একটি .env ফাইল ফাঁস হলে আক্রমণকারী সাথে সাথে ডাটাবেজের সব গোপন চাবি পেয়ে যায়। ফায়ারওয়াল এই ধরনের খোঁজাখুঁজি সাথে সাথে আটকে দেয়।'
      },
    },
    {
      id: 'meet-websec-ex-4',
      kind: 'predict',
      topic: 'traffic-sorter-probes-blocked-count',
      question: {
        en: 'Out of the 6 incoming requests evaluated in this security gateway demonstration, how many hostile attack probes were successfully blocked? (3). Type the number.',
        bn: 'এই সিকিউরিটি গেটওয়ে পরীক্ষায় মূল্যায়িত ৬ টি আগত রিকোয়েস্টের মধ্যে কয়টি বিপজ্জনক আক্রমণ সফলভাবে আটকে দেওয়া হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: '3 attack probes (XSS, SQLi, and .env recon) were blocked.',
        bn: '৩ টি আক্রমণ (XSS, SQLi এবং .env খোঁজার চেষ্টা) আটকে দেওয়া হয়েছিল।'
      },
      explanation: {
        en: 'Requests 4 (XSS script probe), 5 (SQL injection syntax break), and 6 (sensitive /.env path scan) were blocked.',
        bn: '৪ নম্বর (XSS স্ক্রিপ্ট), ৫ নম্বর (SQL ইনজেকশন) এবং ৬ নম্বর (/.env ফাইল খোঁজা) রিকোয়েস্টগুলো ক্ষতিকর হওয়ায় আটকে দেওয়া হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'meet-websec-quiz',
    title: {
      en: 'Foundations of Web Application Security Quiz',
      bn: 'ওয়েব অ্যাপ্লিকেশন নিরাপত্তার ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'meet-websec-qz-1',
        kind: 'mcq',
        topic: 'default-deny-in-web-security',
        question: {
          en: 'How does the Default-Deny principle apply to web traffic inspection and API gateway filtering?',
          bn: 'ওয়েব ট্রাফিক নিরীক্ষণ এবং এপিআই গেটওয়ে ফিল্টারিংয়ে ডিফল্ট-ডিনাই নীতি কীভাবে প্রযোজ্য হয়?'
        },
        options: [
          {
            en: 'The gateway assumes all incoming requests and unknown payload shapes are untrusted by default, permitting traffic only when it explicitly matches known, strictly validated schema and route definitions',
            bn: 'গেটওয়ে পূর্বনির্ধারিতভাবে সমস্ত আগত রিকোয়েস্ট এবং অচেনা ডেটাকে অনিরাপদ ধরে নেয় এবং কেবল তখনই অনুমতি দেয় যখন রিকোয়েস্টটি কঠোরভাবে অনুমোদিত স্কিমা ও রুটের সাথে নিখুঁতভাবে মেলে',
          },
          {
            en: 'The gateway turns off all computer internet access on weekends to save electricity',
            bn: 'বিদ্যুৎ সাশ্রয় করতে ছুটির দিনে গেটওয়ে সমস্ত ইন্টারনেট সংযোগ বন্ধ করে রাখে',
          },
          {
            en: 'The gateway forces software developers to change their keyboard language every hour',
            bn: 'গেটওয়ে সফটওয়্যার ডেভেলপারদের প্রতি ঘণ্টায় কিবোর্ডের ভাষা পরিবর্তন করতে বাধ্য করে',
          },
          {
            en: 'The gateway deletes all user database records whenever a typo occurs in an email',
            bn: 'ইমেইলে কোনো বানান ভুল হলে গেটওয়ে ডাটাবেজের সমস্ত রেকর্ড নিজে থেকে মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Block everything unless it conforms to explicit, strict validation rules.',
          bn: 'সুস্পষ্ট ও কঠোর নিয়মে না মিললে সবকিছু আগে আটকে দিন।'
        },
        explanation: {
          en: 'Default-deny guarantees that newly discovered attack variations or unhandled endpoints default to safe refusal rather than accidental execution.',
          bn: 'ডিফল্ট-ডিনাই নিশ্চিত করে যে নতুন কোনো অচেনা আক্রমণ বা অননুমোদিত এপিআই ভুলবশত চলার বদলে নিরাপদে বন্ধ হয়ে যাবে।'
        },
      },
      {
        id: 'meet-websec-qz-2',
        kind: 'mcq',
        topic: 'defense-in-depth-layers',
        question: {
          en: 'Why is Defense-in-Depth essential across modern web applications, rather than relying solely on a perimeter Web Application Firewall (WAF)?',
          bn: 'কেবল পেরিমিটার ওয়েব অ্যাপ্লিকেশন ফায়ারওয়ালের (WAF) ওপর নির্ভর না করে কেন আধুনিক ওয়েব অ্যাপ্লিকেশনে বহুস্তরীয় প্রতিরক্ষা (Defense-in-Depth) অপরিহার্য?'
        },
        options: [
          {
            en: 'Because perimeter WAFs can be bypassed via novel encoding obfuscation or zero-day bypasses; layered defense ensures that application input validation, parameterized database queries, and browser security headers catch any payload that slips past the perimeter',
            bn: 'কারণ নতুন কোনো এনকোডিং কৌশলে বা জিরো-ডে ফাঁকিবাজিতে WAF ফাঁকি দেওয়া সম্ভব; বহুস্তরীয় ব্যবস্থা নিশ্চিত করে যে WAF পার হয়ে গেলেও অ্যাপের ইনপুট ভ্যালিডেশন, প্যারামিটারাইজড এসকিউএল কোয়েরি ও ব্রাউজার সিকিউরিটি হেডার আক্রমণ আটকে দেবে',
          },
          {
            en: 'Because defense-in-depth increases the download speed of computer games by fifty percent',
            bn: 'কারণ বহুস্তরীয় প্রতিরক্ষা কম্পিউটার গেম ডাউনলোডের গতি পঞ্চাশ শতাংশ বাড়িয়ে দেয়',
          },
          {
            en: 'Because operating systems delete all files whose names contain numbers',
            bn: 'কারণ নামের মধ্যে সংখ্যা থাকা সমস্ত ফাইল অপারেটিং সিস্টেম মুছে ফেলে',
          },
          {
            en: 'Because web browser windows automatically close when a single security gate exists',
            bn: 'কারণ একটিমাত্র সিকিউরিটি গেট থাকলে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Multiple independent defensive layers prevent a single failure from causing a total breach.',
          bn: 'একাধিক স্বাধীন প্রতিরক্ষা স্তর একটি স্তরের ব্যর্থতায় পুরো সিস্টেম ভেঙে পড়া রোধ করে।'
        },
        explanation: {
          en: 'No single security tool is 100% impenetrable. Layering perimeter WAFs with application validation and database parameterization creates robust resilience.',
          bn: 'কোনো একক টুল শতভাগ নিশ্ছিদ্র নয়। WAF, কোড ভ্যালিডেশন এবং ডাটাবেজ প্যারামিটারাইজেশনের সমন্বয়ই আসল সুরক্ষা তৈরি করে।'
        },
      },
      {
        id: 'meet-websec-qz-3',
        kind: 'mcq',
        topic: 'waf-false-positives-vs-negatives',
        question: {
          en: 'What is the operational challenge of balancing false positives and false negatives in web security inspection filters?',
          bn: 'ওয়েব সিকিউরিটি ফিল্টারিংয়ে ফলস পজিটিভ (ভুল সংকেত) এবং ফলস নেগেটিভের (আক্রমণ মিস হওয়া) ভারসাম্য বজায় রাখার চ্যালেঞ্জটি কী?'
        },
        options: [
          {
            en: 'Rules that are too strict block legitimate customer transactions (false positives), while rules that are too lenient allow sophisticated attack vectors through into the backend (false negatives)',
            bn: 'অতিরিক্ত কঠোর নিয়ম সাধারণ বৈধ গ্রাহকের কাজকে ভুল করে আটকে দেয় (ফলস পজিটিভ), আর অতিরিক্ত শিথিল নিয়ম চালাক হ্যাকারদের জটিল আক্রমণকে ভেতরে ঢুকতে দেয় (ফলস নেগেটিভ)',
          },
          {
            en: 'It causes computer sound speakers to emit continuous buzzing frequencies',
            bn: 'এর ফলে কম্পিউটারের সাউন্ড স্পিকার থেকে অবিরাম গুনগুন শব্দ নির্গত হতে থাকে',
          },
          {
            en: 'It makes laptop batteries discharge fifty percent in thirty seconds',
            bn: 'এটি ত্রিশ সেকেন্ডের মধ্যে ল্যাপটপের ব্যাটারির পঞ্চাশ শতাংশ চার্জ শেষ করে দেয়',
          },
          {
            en: 'It forces web servers to restart after every ten requests',
            bn: 'এটি প্রতি দশটি রিকোয়েস্টের পর পর ওয়েব সার্ভারকে রিস্টার্ট হতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Balance security with usability: do not block legitimate users while stopping attacks.',
          bn: 'নিরাপত্তা ও ব্যবহারের মধ্যে ভারসাম্য রাখুন: আক্রমণ থামানোর পাশাপাশি আসল গ্রাহক যেন আটকে না যায়।'
        },
        explanation: {
          en: 'Security engineering requires continuous tuning to block genuine threats without disrupting real users who legitimately type special characters (e.g. in programming forums).',
          bn: 'নিরাপত্তা ব্যবস্থার নিয়মিত সমন্বয় প্রয়োজন যাতে আসল হুমকি বন্ধ হয় কিন্তু সাধারণ গ্রাহকের কাজে কোনো বিঘ্ন না ঘটে।'
        },
      },
      {
        id: 'meet-websec-qz-4',
        kind: 'mcq',
        topic: 'zero-day-vulnerabilities-concept',
        question: {
          en: 'What defines a "Zero-Day" security vulnerability in web software and underlying frameworks?',
          bn: 'ওয়েব সফটওয়্যার এবং কাঠামোগত লাইব্রেরিতে "জিরো-ডে" (Zero-Day) নিরাপত্তা দুর্বলতা বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'A security flaw in software that is actively exploited in the wild before the software vendor or engineering team is aware of it or has released an official patch, giving defenders zero days to prepare',
            bn: 'সফটওয়্যারের এমন একটি মারাত্মক ত্রুটি যা নির্মাতাদের জানার বা কোনো প্যাচ প্রকাশের আগেই আক্রমণকারীরা গোপনে অপব্যবহার করতে শুরু করে, ফলে সুরক্ষাকারীদের প্রস্তুতির জন্য কোনো সময় (০ দিন) থাকে না',
          },
          {
            en: 'A bug that only occurs on the first day of every calendar month',
            bn: 'এমন একটি বাগ যা কেবল প্রতি ক্যালেন্ডার মাসের প্রথম দিনেই ঘটে থাকে',
          },
          {
            en: 'A condition where a computer processor operates at zero percent speed',
            bn: 'এমন একটি অবস্থা যেখানে কম্পিউটারের প্রসেসর শূন্য শতাংশ গতিতে কাজ করে',
          },
          {
            en: 'A keyboard malfunction where the number zero cannot be typed',
            bn: 'কিবোর্ডের এমন একটি ত্রুটি যার ফলে শূন্য সংখ্যাটি কোনোভাবেই টাইপ করা যায় না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero-day means defenders had zero days of advance warning before exploitation began.',
          bn: 'জিরো-ডে মানে হলো আক্রমণ শুরু হওয়ার আগে সুরক্ষাকারীদের হাতে প্রস্তুতির কোনো সময় ছিল না।'
        },
        explanation: {
          en: 'Because zero-day exploits have no known signatures, defensive architecture must rely on least privilege, compartmentalization, and strict containment to survive them.',
          bn: 'জিরো-ডে আক্রমণের কোনো পূর্ব সিগনেচার থাকে না। তাই ন্যূনতম অধিকার ও বহুস্তরীয় বিচ্ছিন্নতাই সিস্টেমকে রক্ষা করতে পারে।'
        },
      },
    ],
  },
  next: {
    slug: 'https-fundamentals',
    title: {
      en: 'HTTPS & Transport Layer Security (TLS): Encryption, Certificates & HSTS',
      bn: 'HTTPS ও ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS): এনক্রিপশন, সার্টিফিকেট এবং HSTS'
    },
  },
};
