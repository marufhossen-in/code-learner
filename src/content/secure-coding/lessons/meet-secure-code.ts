import type { Lesson } from '../../../lib/types';

export const MeetSecureCodeLesson: Lesson = {
  slug: 'meet-secure-code',
  tech: 'secure-coding',
  title: {
    en: 'Introduction & Overview of Secure Coding Principles',
    bn: 'সিকিউর কোডিং নীতির প্রাথমিক পরিচিতি ও রূপরেখা'
  },
  summary: {
    en: 'A beginner overview of secure coding fundamentals: the essential mindset shift from functionality-only development to defensive software architecture. Explore core security doctrines including the Principle of Least Privilege, Zero Trust, Defense-in-Depth, and Attack Surface Reduction. Understand how subtle vulnerabilities like injection attacks, authentication flaws, and memory leaks evolve from naive code.',
    bn: 'সিকিউর কোডিংয়ের মৌলিক নীতিগুলোর প্রাথমিক রূপরেখা: কেবল ফিচার তৈরির মানসিকতা থেকে ডিফেন্সিভ সফটওয়্যার আর্কিটেকচারে রূপান্তরের কৌশল। ন্যূনতম সুবিধার নীতি, জিরো ট্রাস্ট, ডিফেন্স-ইন-ডেপথ এবং অ্যাটাক সারফেস কমানোর মূল নীতিগুলো জানুন। অসাবধানতাবশত লেখা কোড থেকে কীভাবে ইনজেকশন আক্রমণ, দুর্বল প্রমাণীকরণ ও ডাটা ফাঁসের মতো মারাত্মক দুর্বলতা তৈরি হয় তা শিখুন।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'beyond-functionality-to-security',
      text: {
        en: 'Moving Beyond "Does It Work?" to "Is It Secure?"',
        bn: '"কোড কি কাজ করে?" থেকে "কোড কি নিরাপদ?" মানসিকতায় রূপান্তর'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you begin software development, the primary objective is delivering functionality. If entering an email logs the user into a dashboard, the code is considered complete.',
        bn: 'সফটওয়্যার ডেভেলপমেন্টের শুরুতে মূল লক্ষ্য থাকে কোনো ফিচার সঠিকভাবে কার্যকর করা। একটি ইমেইল দিয়ে লগইন বাটনে চাপ দিলে ড্যাশবোর্ড প্রদর্শিত হলেই কোডটি সম্পন্ন বলে মনে হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'However, security engineering asks a critical follow-up question: how can this feature be manipulated or exploited by an attacker? Malicious users do not follow intended paths: they submit 50MB strings into 20-character text fields, inject SQL syntax into usernames, and bypass browser form validation using direct HTTP requests.',
        bn: 'কিন্তু সিকিউরিটি ইঞ্জিনিয়ারিং একটি অত্যন্ত জরুরি দ্বিতীয় প্রশ্ন তোলে: এই ফিচারটিকে কোনো আক্রমণকারী কীভাবে অপব্যবহার বা বিকৃত করতে পারে? আক্রমণকারীরা স্বাভাবিক পথে হাঁটে না: তারা ২০ অক্ষরের ঘরে ৫০ মেগাবাইট ডাটা পাঠায়, ইউজারনেমে ক্ষতিকর এসকিউএল কোড ঢুকিয়ে দেয় এবং ব্রাউজারকে এড়িয়ে সরাসরি এপিআইতে রিকোয়েস্ট পাঠায়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Defense in Depth (Layered Security)',
            bn: '১. ডিফেন্স-ইন-ডেপথ ( বহুস্তরী নিরাপত্তা )'
          },
          text: {
            en: 'Never rely on a single defensive barrier. Combine client-side schema validation, API gateway firewalls, parameterized database queries, and encrypted storage. If one layer fails, subsequent layers prevent exploitation.',
            bn: 'কখনোই একটিমাত্র নিরাপত্তা ব্যবস্থার ওপর ভরসা করবেন না। ক্লায়েন্ট ভ্যালিডেশন, গেটওয়ে ফায়ারওয়াল, ডাটাবেজ প্যারামিটারাইজড কুয়েরি ও এনক্রিপশন একসাথে রাখুন যাতে একটি স্তর ভাঙলেও অন্য স্তর আক্রমণ ঠেকায়।'
          },
        },
        {
          title: {
            en: '2. Principle of Least Privilege (PoLP)',
            bn: '২. ন্যূনতম সুবিধার নীতি (Principle of Least Privilege)'
          },
          text: {
            en: 'Every user, service, and database connection must only possess the minimal permissions necessary to perform its intended job, preventing attackers from escalating privileges.',
            bn: 'প্রতিটি ব্যবহারকারী, সার্ভিস এবং ডাটাবেজ সংযোগকে কেবল তার কাজের জন্য ঠিক যতটুকু অনুমতি দরকার সেটুকুই দেওয়া উচিত, যাতে হ্যাকাররা অতিরিক্ত ক্ষমতার অপব্যবহার করতে না পারে।'
          },
        },
        {
          title: {
            en: '3. Zero Trust Mindset',
            bn: '৩. জিরো ট্রাস্ট দৃষ্টিভঙ্গি (Zero Trust Mindset)'
          },
          text: {
            en: 'Treat every network packet, query parameter, and microservice call as potentially hostile. Never assume requests originating from internal IP addresses are inherently trustworthy.',
            bn: 'প্রতিটি নেটওয়ার্ক প্যাকেট, কুয়েরি প্যারামিটার ও মাইক্রোসার্ভিস কলকে সম্ভাব্য ক্ষতিকর মনে করুন। অভ্যন্তরীণ নেটওয়ার্কের আইপি হলেও কখনোই কোনো রিকোয়েস্টকে অন্ধভাবে বিশ্বাস করবেন না।'
          },
        },
        {
          title: {
            en: '4. Attack Surface Reduction',
            bn: '৪. অ্যাটাক সারফেস হ্রাস (Attack Surface Reduction)'
          },
          text: {
            en: 'Minimize vulnerability exposure by turning off unused server ports, disabling verbose production error messages, and deleting unneeded third-party libraries.',
            bn: 'অপ্রয়োজনীয় সার্ভার পোর্ট বন্ধ রাখা, প্রোডাকশনে এরর মেসেজের বিস্তারিত লুকানো এবং অপ্রয়োজনীয় লাইব্রেরি মুছে ফেলার মাধ্যমে আক্রমণের সম্ভাব্য ক্ষেত্রগুলো কমিয়ে আনুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Defense-in-Depth Security Architecture: Multi-Layered Threat Neutralization',
        bn: 'ডিফেন্স-ইন-ডেপথ নিরাপত্তা আর্কিটেকচার: বহুস্তরী আক্রমণ প্রতিরোধ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Defense in depth layered security architecture showing outer WAF, API gateway validation, application auth, parameterized queries, and least privilege database">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DEFENSE-IN-DEPTH ARCHITECTURE: MULTI-LAYERED PERIMETER</text>
  
  <!-- Attacker on Left -->
  <g transform="translate(30, 160)">
    <rect width="110" height="110" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="55" y="35" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">ATTACKER</text>
    <text x="55" y="60" fill="#fca5a5" font-size="9" text-anchor="middle">SQL Injection</text>
    <text x="55" y="75" fill="#fca5a5" font-size="9" text-anchor="middle">XSS Payloads</text>
    <text x="55" y="90" fill="#fca5a5" font-size="8" text-anchor="middle">Surge Traffic</text>
  </g>
  
  <path d="M 145 215 L 185 215" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
  
  <!-- Layer 1: Cloud WAF & Rate Limiting -->
  <g transform="translate(190, 60)">
    <rect width="115" height="310" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="57" y="28" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">LAYER 1</text>
    <text x="57" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Cloud WAF</text>
    
    <rect x="10" y="65" width="95" height="230" rx="4" fill="#0f172a"/>
    <text x="57" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">Rate Limiting</text>
    <text x="57" y="125" fill="#cbd5e1" font-size="8" text-anchor="middle">IP Reputations</text>
    <text x="57" y="160" fill="#cbd5e1" font-size="8" text-anchor="middle">DDoS Shield</text>
    <text x="57" y="195" fill="#cbd5e1" font-size="8" text-anchor="middle">Known Bad Bot</text>
    <text x="57" y="210" fill="#cbd5e1" font-size="8" text-anchor="middle">Blocking</text>
    <text x="57" y="260" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Blocks Surge</text>
  </g>
  
  <!-- Layer 2: API Gateway & Input Validation -->
  <g transform="translate(320, 60)">
    <rect width="115" height="310" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="57" y="28" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">LAYER 2</text>
    <text x="57" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">API Gateway</text>
    
    <rect x="10" y="65" width="95" height="230" rx="4" fill="#0f172a"/>
    <text x="57" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">JSON Schema</text>
    <text x="57" y="125" fill="#cbd5e1" font-size="8" text-anchor="middle">Type Coercion</text>
    <text x="57" y="140" fill="#cbd5e1" font-size="8" text-anchor="middle">Checks</text>
    <text x="57" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">Payload Size</text>
    <text x="57" y="190" fill="#cbd5e1" font-size="8" text-anchor="middle">Caps (&lt;100KB)</text>
    <text x="57" y="225" fill="#cbd5e1" font-size="8" text-anchor="middle">Allowlists</text>
    <text x="57" y="260" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Rejects Junk</text>
  </g>
  
  <!-- Layer 3: Application Auth & Business Logic -->
  <g transform="translate(450, 60)">
    <rect width="115" height="310" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="57" y="28" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">LAYER 3</text>
    <text x="57" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">App Auth</text>
    
    <rect x="10" y="65" width="95" height="230" rx="4" fill="#0f172a"/>
    <text x="57" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">HMAC / JWT</text>
    <text x="57" y="105" fill="#cbd5e1" font-size="8" text-anchor="middle">Verification</text>
    <text x="57" y="140" fill="#cbd5e1" font-size="8" text-anchor="middle">RBAC Roles</text>
    <text x="57" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">Session State</text>
    <text x="57" y="210" fill="#cbd5e1" font-size="8" text-anchor="middle">CSRF Tokens</text>
    <text x="57" y="260" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Verifies User</text>
  </g>
  
  <!-- Layer 4: Data Layer / Parameterized Queries -->
  <g transform="translate(580, 60)">
    <rect width="115" height="310" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <text x="57" y="28" fill="#818cf8" font-size="10" font-weight="bold" text-anchor="middle">LAYER 4</text>
    <text x="57" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">ORM / SQL</text>
    
    <rect x="10" y="65" width="95" height="230" rx="4" fill="#0f172a"/>
    <text x="57" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">Prepared Stmts</text>
    <text x="57" y="125" fill="#cbd5e1" font-size="8" text-anchor="middle">Parameterized</text>
    <text x="57" y="140" fill="#cbd5e1" font-size="8" text-anchor="middle">Bindings</text>
    <text x="57" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">ORM Escaping</text>
    <text x="57" y="210" fill="#cbd5e1" font-size="8" text-anchor="middle">No Raw Concat</text>
    <text x="57" y="260" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Kills Injection</text>
  </g>
  
  <!-- Core: Database (PoLP) -->
  <g transform="translate(710, 60)">
    <rect width="105" height="310" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="52" y="28" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">CORE DATA</text>
    <text x="52" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Least Privilege</text>
    
    <rect x="8" y="65" width="89" height="230" rx="4" fill="#0f172a"/>
    <text x="52" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">No Root Access</text>
    <text x="52" y="125" fill="#cbd5e1" font-size="8" text-anchor="middle">Table-Level</text>
    <text x="52" y="140" fill="#cbd5e1" font-size="8" text-anchor="middle">Permissions</text>
    <text x="52" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">AES-256 at Rest</text>
    <text x="52" y="210" fill="#cbd5e1" font-size="8" text-anchor="middle">Audit Logs</text>
    <text x="52" y="260" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">DATA SECURE</text>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Defense-in-depth: even if an attacker bypasses one defensive barrier, subsequent security layers neutralize the threat</text>
</svg>`,
      caption: {
        en: 'Defense-in-depth stacks independent controls across WAF, schema validation, application logic, and parameterized database access.',
        bn: 'ডিফেন্স-ইন-ডেপথ ফায়ারওয়াল, স্কিমা যাচাই, অথেনটিকেশন ও প্যারামিটারাইজড কুয়েরির মাধ্যমে বহুস্তরী নিরাপত্তা নিশ্চিত করে।'
      },
    },
    {
      type: 'heading',
      id: 'vulnerability-defense-code',
      text: {
        en: 'Vulnerability vs Defense: Neutralizing Injection Attacks',
        bn: 'দুর্বলতা বনাম প্রতিরক্ষা: ইনজেকশন আক্রমণ নিষ্ক্রিয়করণ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe the technical difference between vulnerable code and defensive engineering, inspect the following endpoint comparison. It demonstrates how string concatenation permits SQL injection while parameterized queries neutralize the attack entirely.',
        bn: 'অরক্ষিত কোড এবং সুরক্ষিত কোডের প্রযুক্তিগত পার্থক্য পর্যবেক্ষণ করতে নিচের এন্ডপয়েন্ট তুলনাটি লক্ষ্য করুন। এটি দেখায় কীভাবে সরাসরি স্ট্রিং যুক্ত করলে এসকিউএল ইনজেকশন ঘটে এবং প্যারামিটারাইজড কুয়েরি কীভাবে আক্রমণ সম্পূর্ণ প্রতিরোধ করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'injection-defense-comparison.js',
      code: `// Vulnerable vs Defensive Code Architecture Comparison
// Demonstrates SQL Injection via string concatenation vs Parameterized Queries

// 1. Unsafe Endpoint (Vulnerable to SQL Injection)
function handleUnsafeUserLookup(userInput) {
  // Flawed: raw string concatenation of untrusted input
  const rawSql = 'SELECT * FROM users WHERE id = ' + userInput;
  const isExploited = rawSql.includes('OR 1=1');

  return {
    strategy: 'VULNERABLE (Raw Concatenation)',
    generatedQuery: rawSql,
    isCompromised: isExploited,
    verdict: isExploited ? 'BREACH: Attacker extracted all user data!' : 'CLEAN'
  };
}

// 2. Hardened Defensive Endpoint (Defense-in-Depth)
function handleHardenedUserLookup(userInput) {
  // Layer 1: Strict input validation allowlist (must be a positive integer)
  const parsedId = parseInt(userInput, 10);
  const isValidFormat = (
    !isNaN(parsedId) &&
    parsedId > 0 &&
    String(parsedId) === String(userInput).trim()
  );

  if (!isValidFormat) {
    return {
      strategy: 'HARDENED (Input Rejected at Gateway)',
      error: '400 Bad Request: ID must be a strictly positive integer.',
      isCompromised: false,
      verdict: 'ATTACK BLOCKED: Malicious payload rejected before database execution!'
    };
  }

  // Layer 2: Parameterized query (never concatenates strings)
  const parameterizedSql = 'SELECT * FROM users WHERE id = $1';
  const queryParameters = [parsedId];

  return {
    strategy: 'HARDENED (Parameterized Query)',
    query: parameterizedSql,
    boundParameters: queryParameters,
    isCompromised: false,
    verdict: 'SAFE: Parameter treated strictly as literal data.'
  };
}

const attackPayload = '1 OR 1=1';
const validPayload = '42';

console.log('=== Step 1: Testing Naive Endpoint with Injection Payload ===');
console.log(handleUnsafeUserLookup(attackPayload));

console.log('\\n=== Step 2: Testing Hardened Endpoint with Injection Payload ===');
console.log(handleHardenedUserLookup(attackPayload));

console.log('\\n=== Step 3: Testing Hardened Endpoint with Valid User ID 42 ===');
console.log(handleHardenedUserLookup(validPayload));`,
      caption: {
        en: 'The benchmark shows how raw string queries allow SQL injection breaches, while schema validation and parameter binding neutralize the threat.',
        bn: 'বেঞ্চমার্কটি দেখায় কীভাবে সরাসরি স্ট্রিং যুক্ত করলে এসকিউএল আক্রমণ ঘটে এবং স্কিমা যাচাই ও প্যারামিটার বাইন্ডিং তা সম্পূর্ণ রুখে দেয়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'The Security Triad: Confidentiality, Integrity & Availability (CIA)',
        bn: 'নিরাপত্তা ত্রয়ী: গোপনীয়তা, অখণ্ডতা এবং প্রাপ্যতা (CIA Triad)'
      },
      text: {
        en: 'Every security decision in modern software engineering anchors on the CIA Triad: 1. Confidentiality: Ensuring sensitive data remains hidden from unauthorized eyes (enforced via AES-256 encryption in transit and at rest); 2. Integrity: Guaranteeing that data cannot be altered or tampered with without detection (enforced via HMAC cryptographic signatures and hashes); 3. Availability: Ensuring services remain accessible to legitimate users under surge traffic (enforced via DDoS mitigation and rate limiting).',
        bn: 'আধুনিক সফটওয়্যার সিকিউরিটির সমস্ত সিদ্ধান্ত CIA ট্রায়াডের ওপর ভিত্তি করে নেওয়া হয়: ১. Confidentiality (গোপনীয়তা): অননুমোদিত ব্যক্তিদের কাছ থেকে তথ্য গোপন রাখা ( যা এনক্রিপশনের মাধ্যমে নিশ্চিত করা হয় ); ২. Integrity (অখণ্ডতা): ডাটা যেন কেউ গোপনে বিকৃত বা পরিবর্তন করতে না পারে ( যা ক্রিপ্টোগ্রাফিক হ্যাশ ও সিগনেচারের মাধ্যমে নিশ্চিত করা হয় ); ৩. Availability (প্রাপ্যতা): যেকোনো পরিস্থিতিতে বৈধ ব্যবহারকারীদের জন্য সার্ভিস চালু রাখা ( যা রেট লিমিটিং ও ডস সুরক্ষার মাধ্যমে কার্যকর হয় )।'
      },
    },
  ],
  exercises: [
    {
      id: 'meet-sec-ex-1',
      kind: 'predict',
      topic: 'cia-triad',
      question: {
        en: 'How many core objectives (Confidentiality, Integrity, Availability) compose the CIA security triad? (3). Type the number.',
        bn: 'সিআইএ (CIA) সিকিউরিটি ট্রায়াড সর্বমোট কয়টি মূল উদ্দেশ্য ( গোপনীয়তা, অখণ্ডতা, প্রাপ্যতা ) নিয়ে গঠিত? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Confidentiality, Integrity, and Availability: 3 pillars.',
        bn: 'Confidentiality, Integrity এবং Availability: ৩ টি স্তম্ভ।'
      },
      explanation: {
        en: 'The CIA triad forms the foundational cornerstone of information security across all engineering disciplines.',
        bn: 'সিআইএ ট্রায়াড হলো তথ্য নিরাপত্তার তিনটি মূল ভিত্তিপ্রস্তর যা সমস্ত প্রকৌশল ক্ষেত্রে অনুসৃত হয়।'
      },
    },
    {
      id: 'meet-sec-ex-2',
      kind: 'mcq',
      topic: 'defense-in-depth',
      question: {
        en: 'What is the foundational engineering principle behind the Defense-in-Depth security model?',
        bn: 'ডিফেন্স-ইন-ডেপথ (Defense-in-Depth) নিরাপত্তা মডেলের পেছনের মূল প্রকৌশলগত নীতি কী?'
      },
      options: [
        {
          en: 'Deploying multiple layered, independent defensive barriers so that if one security control fails, subsequent layers prevent exploitation',
          bn: 'একাধিক স্বাধীন ও স্তরভিত্তিক নিরাপত্তা ব্যবস্থা গড়ে তোলা যাতে একটি স্তরে ব্যর্থতা ঘটলেও পরবর্তী স্তরগুলো ক্ষয়ক্ষতি রুখে দেয়',
        },
        {
          en: 'Storing application source code inside physical metal vaults under the ocean',
          bn: 'মহাসাগরের তলদেশে ধাতব ভল্টের ভেতরে অ্যাপ্লিকেশনের সোর্স কোড লুকিয়ে রাখা',
        },
        {
          en: 'Writing all computer code exclusively in the Latin language',
          bn: 'সমস্ত কম্পিউটার কোড কেবলমাত্র প্রাচীন ল্যাটিন ভাষায় লেখা',
        },
        {
          en: 'Turning off computer monitors whenever financial calculations run',
          bn: 'আর্থিক লেনদেনের হিসাব চলার সময় কম্পিউটার মনিটর বন্ধ করে দেওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'Multiple independent layers ensure failure of one does not compromise the whole system.',
        bn: 'একাধিক স্বাধীন স্তর নিশ্চিত করে যে একটি ভেঙে গেলেও পুরো ব্যবস্থা ভেঙে পড়ে না।',
      },
      explanation: {
        en: 'Defense-in-depth ensures resilient protection across network, application, and database boundaries.',
        bn: 'ডিফেন্স-ইন-ডেপথ নেটওয়ার্ক, অ্যাপ্লিকেশন এবং ডাটাবেজ স্তর জুড়ে সার্বিক সুরক্ষা প্রদান করে।'
      },
    },
    {
      id: 'meet-sec-ex-3',
      kind: 'mcq',
      topic: 'server-side-validation',
      question: {
        en: 'Why is client-side HTML form validation (such as required or pattern attributes) insufficient for backend application security?',
        bn: 'ব্যাকএন্ডের নিরাপত্তার জন্য ক্লায়েন্ট-সাইড এইচটিএমএল ভ্যালিডেশন ( যেমন required বা pattern ) কেন পর্যাপ্ত নয়?'
      },
      options: [
        {
          en: 'Because attackers can easily bypass browser UI validation by sending raw HTTP requests directly to the API endpoint using curl, Postman, or custom scripts',
          bn: 'কারণ আক্রমণকারীরা ব্রাউজারকে সম্পূর্ণ এড়িয়ে curl, Postman বা নিজস্ব স্ক্রিপ্ট দিয়ে সরাসরি এপিআইতে ক্ষতিকর রিকোয়েস্ট পাঠাতে পারে',
        },
        {
          en: 'Because HTML form attributes consume ninety percent of server bandwidth',
          bn: 'কারণ এইচটিএমএল ফর্ম অ্যাট্রিবিউট সার্ভারের ৯০ শতাংশ ব্যান্ডউইথ নষ্ট করে',
        },
        {
          en: 'Because modern web browsers do not support HTML form tags',
          bn: 'কারণ আধুনিক ব্রাউজারগুলো এইচটিএমএল ফর্ম ট্যাগ সমর্থন করে না',
        },
        {
          en: 'Because web forms can only be submitted using optical CD-ROM drives',
          bn: 'কারণ ওয়েব ফর্ম কেবল সিডি-রম ড্রাইভ ব্যবহার করে জমা দেওয়া যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Attackers bypass browsers completely; server-side validation is mandatory.',
        bn: 'আক্রমণকারীরা ব্রাউজার পুরোপুরি বাইপাস করে, তাই সার্ভার ভ্যালিডেশন বাধ্যতামূলক।',
      },
      explanation: {
        en: 'Client validation is purely for user experience. The backend server must re-validate every single incoming byte before processing.',
        bn: 'ক্লায়েন্ট ভ্যালিডেশন মূলত ব্যবহারকারীর সুবিধার জন্য। প্রতিটি বাইট সার্ভারে পুনরায় যাচাই করা আবশ্যক।'
      },
    },
    {
      id: 'meet-sec-ex-4',
      kind: 'predict',
      topic: 'least-privilege',
      question: {
        en: 'Under the Principle of Least Privilege, how many administrative root permissions should a standard read-only web server process hold? (0). Type the number.',
        bn: 'ন্যূনতম সুবিধার নীতি অনুসারে একটি সাধারণ ওয়েব সার্ভার প্রসেসের কয়টি অ্যাডমিনিস্ট্রেটিভ রুট (root) অনুমতি থাকা উচিত? ( ০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'Zero root permissions: 0.',
        bn: 'কোনো রুট পারমিশন থাকবে না: ০।'
      },
      explanation: {
        en: 'Web servers should run as unprivileged users (like nobody or www-data) with 0 administrative root privileges to limit damage if breached.',
        bn: 'আক্রমণ ঘটলেও ক্ষতি সীমিত রাখতে ওয়েব সার্ভারগুলোকে ০ টি রুট অধিকার দিয়ে সাধারণ ব্যবহারকারী হিসেবে চালাতে হয়।'
      },
    },
  ],
  quiz: {
    id: 'meet-secure-code-quiz',
    title: {
      en: 'Secure Coding Principles Quiz',
      bn: 'সিকিউর কোডিং নীতি কুইজ'
    },
    questions: [
      {
        id: 'meet-sec-qz-1',
        kind: 'mcq',
        topic: 'attack-surface-definition',
        question: {
          en: 'What is the precise definition of an Attack Surface in application security engineering?',
          bn: 'অ্যাপ্লিকেশন সিকিউরিটি ইঞ্জিনিয়ারিংয়ে অ্যাটাক সারফেস (Attack Surface) বলতে সুনির্দিষ্টভাবে কী বোঝায়?'
        },
        options: [
          {
            en: 'The total sum of all accessible entry points, network ports, API endpoints, and protocols through which an unauthorized user can attempt to inject data or extract information',
            bn: 'একটি সিস্টেমের সমস্ত উন্মুক্ত এন্ট্রি পয়েন্ট, নেটওয়ার্ক পোর্ট, এপিআই এন্ডপয়েন্ট ও প্রটোকলের সমষ্টি যার মধ্য দিয়ে কোনো আক্রমণকারী তথ্য চুরির চেষ্টা চালাতে পারে',
          },
          {
            en: 'The physical exterior surface area of the server metal chassis measured in square meters',
            bn: 'বর্গমিটারে পরিমাপ করা সার্ভারের ধাতব বাক্সের বাইরের শারীরিক ক্ষেত্রফল',
          },
          {
            en: 'The resolution dimensions of the computer monitor used by the development team',
            bn: 'ডেভেলপার দলের ব্যবহৃত কম্পিউটার মনিটরের ডিসপ্লে রেজোলিউশন',
          },
          {
            en: 'The total number of keys present on the computer keyboard',
            bn: 'কম্পিউটার কিবোর্ডে থাকা মোট বাটন বা কী-এর সংখ্যা',
          },
        ],
        answer: 0,
        hint: {
          en: 'The sum of all entry points where unauthorized users can interact with software.',
          bn: 'সমস্ত উন্মুক্ত এন্ট্রি পয়েন্ট যার মাধ্যমে অননুমোদিত ব্যক্তি সিস্টেমে প্রবেশ করতে পারে।',
        },
        explanation: {
          en: 'Reducing attack surface by disabling unused ports, endpoints, and features directly decreases the number of potential vectors for exploitation.',
          bn: 'অপ্রয়োজনীয় পোর্ট ও এন্ডপয়েন্ট বন্ধ করে অ্যাটাক সারফেস কমিয়ে আনলে আক্রমণের সুযোগ অনেক কমে যায়।'
        },
      },
      {
        id: 'meet-sec-qz-2',
        kind: 'mcq',
        topic: 'database-least-privilege-root',
        question: {
          en: 'Why should production web applications never connect to relational databases using the database root or superuser account?',
          bn: 'প্রোডাকশন ওয়েব অ্যাপ্লিকেশন কখনোই ডাটাবেজ রুট বা সুপার-ইউজার অ্যাকাউন্টে ডাটাবেজের সাথে যুক্ত হওয়া উচিত নয় কেন?'
        },
        options: [
          {
            en: 'If an SQL injection vulnerability occurs, an attacker using a superuser account can read all tables, write files to the OS filesystem, or drop the entire database',
            bn: 'যদি কোনো এসকিউএল ইনজেকশন ঘটে, তবে আক্রমণকারী সুপার-ইউজারের ক্ষমতা ব্যবহার করে সমস্ত টেবিল পড়তে, ওএসে ক্ষতিকর ফাইল লিখতে বা পুরো ডাটাবেজ ধ্বংস করতে পারে',
          },
          {
            en: 'Because root database accounts make internet network connections run in reverse',
            bn: 'কারণ রুট অ্যাকাউন্ট ব্যবহার করলে ইন্টারনেট নেটওয়ার্ক উল্টো দিকে চলতে শুরু করে',
          },
          {
            en: 'Because relational databases refuse to store text if the account name is root',
            bn: 'কারণ অ্যাকাউন্টের নাম রুট হলে ডাটাবেজ কোনো লেখা সংরক্ষণ করতে অস্বীকৃতি জানায়',
          },
          {
            en: 'Because root accounts disconnect the physical computer mouse immediately',
            bn: 'কারণ রুট অ্যাকাউন্ট কম্পিউটারের মাউসের সংযোগ সাথে সাথে বিচ্ছিন্ন করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Superuser accounts allow attackers to execute filesystem operations and drop entire databases.',
          bn: 'সুপার-ইউজার অ্যাকাউন্ট আক্রমণকারীকে পুরো ডাটাবেজ ধ্বংস ও ফাইল লেখার সীমাহীন ক্ষমতা দেয়।',
        },
        explanation: {
          en: 'Under PoLP, applications should use accounts restricted to specific tables (e.g. SELECT and INSERT on specific schemas only, no DROP or GRANT privileges).',
          bn: 'ন্যূনতম সুবিধার নীতি অনুযায়ী অ্যাপ্লিকেশনের অ্যাকাউন্টকে কেবল নির্দিষ্ট টেবিল ব্যবহারের সীমাবদ্ধ ক্ষমতা দেওয়া উচিত।'
        },
      },
      {
        id: 'meet-sec-qz-3',
        kind: 'mcq',
        topic: 'zero-trust-vs-perimeter',
        question: {
          en: 'How does a Zero Trust security architecture differ fundamentally from traditional perimeter-based security (castle-and-moat)?',
          bn: 'চিরাচরিত পেরিমিটার ভিত্তিক (ক্যাসেল-অ্যান্ড-মট) নিরাপত্তার তুলনায় জিরো ট্রাস্ট (Zero Trust) আর্কিটেকচার কীভাবে মৌলিকভাবে পৃথক?'
        },
        options: [
          {
            en: 'Perimeter security assumes everyone inside the internal network is trusted, whereas Zero Trust assumes the internal network is already breached and verifies every single request explicitly',
            bn: 'পেরিমিটার নিরাপত্তা ধরে নেয় অভ্যন্তরীণ নেটওয়ার্কের সবাই বিশ্বস্ত, আর জিরো ট্রাস্ট ধরে নেয় নেটওয়ার্কটি ইতিমধ্যে আক্রান্ত এবং প্রতিটি রিকোয়েস্ট আলাদাভাবে যাচাই করে',
          },
          {
            en: 'Zero Trust only works on mobile smartphones, while perimeter security works on laptops',
            bn: 'জিরো ট্রাস্ট কেবল স্মার্টফোনে চলে আর পেরিমিটার নিরাপত্তা কেবল ল্যাপটপে কাজ করে',
          },
          {
            en: 'Perimeter security makes software run without electricity, while Zero Trust requires power',
            bn: 'পেরিমিটার নিরাপত্তা বিদ্যুৎ ছাড়াই চলে, কিন্তু জিরো ট্রাস্টের জন্য বিদ্যুৎ প্রয়োজন',
          },
          {
            en: 'Both architectures are identical terms for computer cooling fan designs',
            bn: 'উভয় শব্দই কম্পিউটার কুলিং ফ্যানের হুবহু একই ডিজাইনকে নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero Trust: Never trust, always verify every request regardless of origin.',
          bn: 'জিরো ট্রাস্ট: কাউকে অন্ধবিশ্বাস নয়, রিকোয়েস্ট যেখান থেকেই আসুক প্রতিটি যাচাই করা।',
        },
        explanation: {
          en: 'Castle-and-moat fails as soon as an attacker breaches the VPN. Zero Trust mandates authentication, authorization, and encryption for every single microservice hop.',
          bn: 'ভিপিএন ভেদ করতে পারলে পেরিমিটার নিরাপত্তা ব্যর্থ হয়। জিরো ট্রাস্ট প্রতিটি সার্ভিসের অভ্যন্তরীণ যোগাযোগের ক্ষেত্রেও কঠোর যাচাই দাবি করে।'
        },
      },
      {
        id: 'meet-sec-qz-4',
        kind: 'mcq',
        topic: 'cia-integrity-compromise',
        question: {
          en: 'In the CIA triad, which security objective is directly compromised when an unauthorized attacker executes an SQL UPDATE statement altering user account balances?',
          bn: 'সিআইএ (CIA) ট্রায়াডে কোনো আক্রমণকারী যদি অননুমোদিতভাবে এসকিউএল UPDATE চালিয়ে ব্যাংক ব্যালেন্স বদলে দেয়, তবে কোন উদ্দেশ্যটি সরাসরি লঙ্ঘিত হয়?'
        },
        options: [
          {
            en: 'Integrity, because trusted financial records were modified by an unauthorized party without valid business validation',
            bn: 'Integrity (অখণ্ডতা), কারণ কোনো অননুমোদিত ব্যক্তি কর্তৃক বৈধ ব্যবসায়িক নিয়ম ছাড়া সংরক্ষিত তথ্য বিকৃত ও পরিবর্তিত হয়েছে',
          },
          {
            en: 'Availability, because the database monitor turned completely black',
            bn: 'Availability (প্রাপ্যতা), কারণ ডাটাবেজের মনিটরের স্ক্রিন পুরোপুরি কালো হয়ে গেছে',
          },
          {
            en: 'Hardware Warranty, because the computer manufacturer cancels their guarantee',
            bn: 'হার্ডওয়্যার ওয়ারেন্টি, কারণ কম্পিউটার প্রস্তুতকারক তাদের গ্যারান্টি বাতিল করে দেয়',
          },
          {
            en: 'Network Speed, because internet download speed is permanently cut in half',
            bn: 'নেটওয়ার্ক স্পিড, কারণ ইন্টারনেটের ডাউনলোডের গতি চিরতরে অর্ধেক হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Unauthorized alteration of data directly violates Integrity.',
          bn: 'অননুমোদিতভাবে ডাটা পরিবর্তন সরাসরি তথ্যের অখণ্ডতা (Integrity) নষ্ট করে।',
        },
        explanation: {
          en: 'Integrity guarantees that data has not been modified in an unauthorized manner. Modifying records illegally is a direct breach of Integrity.',
          bn: 'ইনটেগ্রিটি নিশ্চিত করে যে তথ্য বিকৃত করা হয়নি। অনুমতি ছাড়া ব্যালেন্স পরিবর্তন করা তথ্যের অখণ্ডতার চরম লঙ্ঘন।'
        },
      },
    ],
  },
  next: {
    slug: 'input-validation',
    title: {
      en: 'Input Validation: Schema Allowlists & Boundary Defenses',
      bn: 'ইনপুট ভ্যালিডেশন: স্কিমা অ্যালাউলিস্ট এবং বাউন্ডারি নিরাপত্তা'
    },
  },
};
