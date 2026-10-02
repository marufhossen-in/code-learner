import type { Lesson } from '../../../lib/types';

export const ClickjackingLesson: Lesson = {
  slug: 'clickjacking',
  tech: 'web-security',
  title: {
    en: 'Clickjacking Defense: X-Frame-Options & CSP Frame-Ancestors',
    bn: 'ক্লিকজ্যাকিং প্রতিরোধ: X-Frame-Options ও CSP Frame-Ancestors'
  },
  summary: {
    en: 'Master UI Redressing and Clickjacking attacks and their defensive mitigations. Understand how attackers use transparent iframes (opacity: 0) to trick users into executing authenticated actions like deleting accounts or transferring money while clicking on deceptive decoy buttons. Explore why legacy JavaScript frame-busting scripts fail, and how modern HTTP headers like X-Frame-Options (DENY, SAMEORIGIN) and CSP frame-ancestors defeat framing attempts. Inspect a runnable Node.js engine evaluating 3 embed attempts, allowing 1 same-origin frame and denying 2 cross-origin traps.',
    bn: 'ইউআই রিড্রেসিং ও ক্লিকজ্যাকিং আক্রমণ এবং এর প্রতিরোধ ব্যবস্থাগুলো আয়ত্ত করুন। কীভাবে আক্রমণকারীরা স্বচ্ছ আইফ্রেম (opacity: 0) ব্যবহার করে ব্যবহারকারীকে আকর্ষণীয় ডিকয় বাটনে ক্লিকের ফাঁদে ফেলে অনাকাঙ্ক্ষিত কাজ যেমন অ্যাকাউন্ট ডিলিট বা অর্থ স্থানান্তর করিয়ে নেয় তা বুঝুন। জাভাস্ক্রিপ্ট ফ্রেম-বাস্টিং কোড কেন ব্যর্থ হয় এবং X-Frame-Options (DENY, SAMEORIGIN) ও CSP frame-ancestors কীভাবে এই আক্রমণ প্রতিহত করে তা শিখুন। ৩ টি এম্বেড চেষ্টা মূল্যায়নকারী একটি Node.js ইঞ্জিন পরীক্ষা করুন, যা ১ টি নিজস্ব অরিজিনের ফ্রেম অনুমোদন করে এবং ২ টি বহিরাগত আক্রমণ প্রতিহত করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'ui-redressing-threat',
      text: {
        en: 'The Threat of UI Redressing: Hijacking Mouse Clicks with Invisible Frames',
        bn: 'ইউআই রিড্রেসিংয়ের ঝুঁকি: অদৃশ্য ফ্রেমের মাধ্যমে মাউস ক্লিক হাইজ্যাক করা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you interact with a web application, you expect that your mouse clicks trigger the visible button displayed on your screen. In a Clickjacking attack (also known as User Interface Redressing), an adversary exploits the browser ability to embed third-party web pages inside an iframe element to deceive you into performing unintended actions.',
        bn: 'যখন আপনি কোনো ওয়েব অ্যাপ্লিকেশনে কাজ করেন, তখন আপনি আশা করেন যে আপনার মাউসের ক্লিক স্ক্রিনে প্রদর্শিত দৃশ্যমান বোতামটিকেই সক্রিয় করবে। ক্লিকজ্যাকিং আক্রমণে (যা ইউজার ইন্টারফেস রিড্রেসিং নামেও পরিচিত) একজন আক্রমণকারী ব্রাউজারের আইফ্রেম এলিমেন্ট ব্যবহার করে আপনাকে বিভ্রান্ত করে অনাকাঙ্ক্ষিত কোনো স্পর্শকাতর কাজ করিয়ে নেয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The attacker builds an enticing decoy page presenting an attractive banner, such as "Click to Claim a Free Prize". Directly above that decoy button, the attacker positions a transparent iframe pointing to your account settings page. When you click what appears to be the prize banner, you are actually clicking a hidden button (such as "Delete Account") inside your authenticated session.',
        bn: 'আক্রমণকারী একটি আকর্ষণীয় ফাঁদ পেজ তৈরি করে যাতে "পুরস্কার জিততে ক্লিক করুন" এর মতো প্রলোভন দেখানো হয়। ঠিক সেই বোতামটির ওপরে আক্রমণকারী আপনার অ্যাকাউন্ট সেটিংস পেজকে একটি সম্পূর্ণ স্বচ্ছ আইফ্রেম হিসেবে বসিয়ে দেয়। আপনি যখন পুরস্কারের বোতামে ক্লিক করেন, তখন অজান্তেই আপনার লগইন থাকা পেজের লুকানো বোতামে (যেমন "অ্যাকাউন্ট মুছুন") ক্লিক পড়ে যায়।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Clickjacking Overlay Mechanics & Framing Policy: 1 Allowed vs 2 Denied',
        bn: 'ক্লিকজ্যাকিং ওভারলে কৌশল এবং ফ্রেম নীতি: ১ টি অনুমোদিত বনাম ২ টি প্রত্যাখ্যাত'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Clickjacking UI redress overlay demonstration and framing policy evaluation">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CLICKJACKING UI REDRESSING & FRAMING CONTROL ENGINE</text>
  
  <!-- Left Side: The Anatomy of a Clickjacking Trap -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#dc2626"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ANATOMY OF A CLICKJACKING TRAP (NO HEADERS)</text>
    
    <g transform="translate(15, 45)">
      <!-- Decoy Layer -->
      <rect width="340" height="110" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="15" y="24" fill="#fca5a5" font-size="10" font-weight="bold">HOSTILE PARENT (evil.example):</text>
      <rect x="25" y="38" width="290" height="52" rx="6" fill="#b91c1c"/>
      <text x="170" y="68" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">🎁 CLICK HERE TO CLAIM $1000 PRIZE!</text>
      
      <!-- Invisible Overlay Layer -->
      <rect y="125" width="340" height="145" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-dasharray="6,4"/>
      <text x="15" y="24" fill="#fde047" font-size="10" font-weight="bold">TRANSPARENT IFRAME (opacity: 0.0001, z-index: 99):</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">• Target: https://shop.example/account/delete</text>
      <text x="15" y="62" fill="#cbd5e1" font-size="8.5">• Browser auto-attaches active session cookie</text>
      <rect x="25" y="78" width="290" height="42" rx="6" fill="#7f1d1d" stroke="#ef4444"/>
      <text x="170" y="104" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">CONFIRM PERMANENT ACCOUNT DELETION</text>
      <text x="170" y="136" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">USER CLICKS PRIZE, BUT STRIKES HIDDEN DELETE!</text>
    </g>
  </g>
  
  <!-- Right Side: Defensive Policy Enforcement -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">FRAMING ENFORCEMENT: X-Frame-Options: SAMEORIGIN</text>
    
    <g transform="translate(15, 45)">
      <!-- Embed 1 -->
      <rect width="340" height="75" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. Embedder: https://shop.example/promo</text>
      <text x="12" y="38" fill="#cbd5e1" font-size="8.5">• Relationship: Exact Same Origin</text>
      <text x="12" y="54" fill="#34d399" font-size="8.5" font-weight="bold">Verdict: ALLOWED (1 Same-Origin Embed Permitted)</text>
      
      <!-- Embed 2 -->
      <rect y="88" width="340" height="75" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="108" fill="#fca5a5" font-size="9" font-weight="bold">2. Embedder: https://evil.example/trap</text>
      <text x="12" y="126" fill="#cbd5e1" font-size="8.5">• Relationship: Cross-Origin Adversary Page</text>
      <text x="12" y="142" fill="#ef4444" font-size="8.5" font-weight="bold">Verdict: DENIED (Cross-Origin Frame Blocked)</text>
      
      <!-- Embed 3 -->
      <rect y="176" width="340" height="75" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="196" fill="#fca5a5" font-size="9" font-weight="bold">3. Embedder: https://ads.example/widget</text>
      <text x="12" y="214" fill="#cbd5e1" font-size="8.5">• Relationship: Third-Party Ad Network</text>
      <text x="12" y="230" fill="#ef4444" font-size="8.5" font-weight="bold">Verdict: DENIED (Cross-Origin Frame Blocked)</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Declaring X-Frame-Options: SAMEORIGIN or CSP frame-ancestors stops deceptive overlay traps</text>
</svg>`,
      caption: {
        en: 'The diagram shows a Clickjacking overlay trap on the left, and browser policy enforcement on the right where 1 same-origin embed is allowed and 2 cross-origin embeds are denied.',
        bn: 'বামে ক্লিকজ্যাকিং ওভারলে ফাঁদ এবং ডানে ব্রাউজার পলিসি প্রয়োগ দেখানো হয়েছে যেখানে ১ টি নিজস্ব অরিজিনের এম্বেড অনুমোদিত এবং ২ টি বহিরাগত এম্বেড প্রত্যাখ্যাত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'modern-framing-defenses',
      text: {
        en: 'Defensive Controls: X-Frame-Options vs CSP frame-ancestors',
        bn: 'প্রতিরক্ষা নিয়ন্ত্রণ: X-Frame-Options বনাম CSP frame-ancestors'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Why Legacy JavaScript Frame-Busting Scripts Fail',
            bn: '১. কেন পুরানো জাভাস্ক্রিপ্ট ফ্রেম-বাস্টিং কোড ব্যর্থ হয়'
          },
          text: {
            en: 'Developers historically tried writing "if (top !== self) top.location = self.location". Adversaries easily defeat this by setting HTML5 sandbox attributes on the iframe without allow-top-navigation, crippling the script.',
            bn: 'পূর্বে ডেভেলপাররা জাভাস্ক্রিপ্টে "if (top !== self) top.location = self.location" লিখতেন। আক্রমণকারীরা আইফ্রেমে এইচটিএমএল৫ স্যান্ডবক্স যুক্ত করে খুব সহজেই এই স্ক্রিপ্ট অকেজো করে দিতে পারে।'
          },
        },
        {
          title: {
            en: '2. X-Frame-Options Header (DENY / SAMEORIGIN)',
            bn: '২. X-Frame-Options হেডার (DENY / SAMEORIGIN)'
          },
          text: {
            en: 'X-Frame-Options: DENY forbids all framing universally. SAMEORIGIN permits framing only when the parent frame shares the exact same origin tuple.',
            bn: 'X-Frame-Options: DENY সকল ধরণের ফ্রেমিং পুরোপুরি নিষিদ্ধ করে। SAMEORIGIN কেবল তখনই ফ্রেমিং অনুমোদন করে যখন প্যারেন্ট পেজটি হুবহু একই অরিজিনের হয়।'
          },
        },
        {
          title: {
            en: '3. CSP frame-ancestors Directive',
            bn: '৩. CSP frame-ancestors নির্দেশিকা'
          },
          text: {
            en: 'The modern W3C standard superseding X-Frame-Options. It supports granular domain whitelisting (e.g. Content-Security-Policy: frame-ancestors \'self\' https://trusted-partner.example).',
            bn: 'আধুনিক W3C স্ট্যান্ডার্ড যা X-Frame-Options এর স্থান নিয়েছে। এটি নির্দিষ্ট বিশ্বস্ত ডোমেইন অনুমোদন করতে পারে (যেমন Content-Security-Policy: frame-ancestors \'self\' https://trusted-partner.example)।'
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'clickjacking-evaluator-code',
      text: {
        en: 'Building a Framing Policy Evaluator in Node.js',
        bn: 'Node.js-এ ফ্রেমিং পলিসি মূল্যায়ন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'framing-evaluator.js',
      code: `// Deterministic Clickjacking Framing Policy Evaluator Engine
function evaluateFramingAttempt(targetPolicy, targetOrigin, embedderOrigin) {
  if (targetPolicy === 'DENY') {
    return {
      allowed: false,
      reason: 'Rejected: X-Frame-Options: DENY forbids all framing universally'
    };
  }

  if (targetPolicy === 'SAMEORIGIN') {
    if (targetOrigin === embedderOrigin) {
      return {
        allowed: true,
        reason: 'Permitted: Embedder matches exact target origin'
      };
    }
    return {
      allowed: false,
      reason: 'Rejected: Cross-origin embedder rejected by SAMEORIGIN'
    };
  }

  return {
    allowed: true,
    reason: 'Permitted: No framing restrictions declared'
  };
}

// 1. Target application origin and configured framing policy
const targetOrigin = 'https://shop.example:443';
const activePolicy = 'SAMEORIGIN';

console.log('=== Target Resource Security State ===');
console.log('Target URL:    ', targetOrigin + '/checkout');
console.log('Framing Policy:', activePolicy);

// 2. Evaluate 3 distinct embedder origins attempting to iframe the resource
const embedderAttempts = [
  {
    name: 'Internal Shop Promotion Modal',
    origin: 'https://shop.example:443'
  },
  {
    name: 'Hostile Deceptive Trap Page',
    origin: 'https://evil.example:443'
  },
  {
    name: 'Third-Party Ad Network Widget',
    origin: 'https://ads.example:443'
  }
];

let allowedCount = 0;
let deniedCount = 0;

console.log('\\n=== Evaluating 3 Embedding Invocations ===');
embedderAttempts.forEach((attempt, index) => {
  const result = evaluateFramingAttempt(activePolicy, targetOrigin, attempt.origin);
  if (result.allowed) {
    allowedCount++;
    console.log(\`[\${index + 1}] ALLOWED: \${attempt.name}\`);
    console.log(\`    Origin: \${attempt.origin}\`);
    console.log(\`    Reason: \${result.reason}\`);
  } else {
    deniedCount++;
    console.log(\`[\${index + 1}] DENIED:  \${attempt.name}\`);
    console.log(\`    Origin: \${attempt.origin}\`);
    console.log(\`    Reason: \${result.reason}\`);
  }
});

console.log('\\n=== Framing Policy Audit Summary ===');
console.log('Total Embeds Evaluated:', embedderAttempts.length);
console.log('Allowed Frames:        ', allowedCount);
console.log('Denied Frames:         ', deniedCount);
console.log('Adversary overlays starved: 2 out of 2 hostile traps neutralized');`,
      caption: {
        en: 'The simulation evaluates 3 embedding attempts under SAMEORIGIN: 1 same-origin frame is allowed and 2 cross-origin traps are denied.',
        bn: 'সিমুলেশনটি SAMEORIGIN এর অধীনে ৩ টি এম্বেড চেষ্টা মূল্যায়ন করে: ১ টি নিজস্ব ফ্রেম অনুমোদিত হয় এবং ২ টি বহিরাগত ফাঁদ প্রত্যাখ্যাত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Difference Between DENY and SAMEORIGIN',
        bn: 'DENY এবং SAMEORIGIN এর মধ্যকার পার্থক্য'
      },
      text: {
        en: 'Choose your framing policy deliberately. If your application never needs to be rendered inside an iframe anywhere, always choose DENY (or CSP frame-ancestors \'none\'). If your checkout flow or promotional pages need to be embedded in modal dialogs across your own site, configure SAMEORIGIN. When integrating with trusted external corporate partners, rely on CSP frame-ancestors with explicit domain whitelists.',
        bn: 'সচেতনভাবে আপনার ফ্রেমিং পলিসি নির্ধারণ করুন। যদি আপনার অ্যাপ্লিকেশনটি কখনো কোনো আইফ্রেমের ভেতরে প্রদর্শনের প্রয়োজন না হয়, তবে সর্বদা DENY (অথবা CSP frame-ancestors \'none\') ব্যবহার করুন। যদি আপনার নিজস্ব ওয়েবসাইটের কোনো মডালে পেজটি এম্বেড করার দরকার পড়ে, তবে SAMEORIGIN ব্যবহার করুন। আর বিশ্বস্ত বহিরাগত অংশীদারদের জন্য CSP frame-ancestors এ সুনির্দিষ্ট ডোমেইন তালিকা উল্লেখ করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'clickjack-ex-1',
      kind: 'predict',
      topic: 'allowed-frames-count',
      question: {
        en: 'Under the X-Frame-Options: SAMEORIGIN policy, how many of the 3 evaluated embedding attempts were permitted? (1). Type the number.',
        bn: 'X-Frame-Options: SAMEORIGIN পলিসির অধীনে মূল্যায়িত ৩ টি এম্বেড চেষ্টার মধ্যে সর্বমোট কয়টি অনুমোদিত হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only the single same-origin frame was permitted.',
        bn: 'কেবলমাত্র ১ টি নিজস্ব অরিজিনের ফ্রেম অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 3 embedding attempts, only 1 was permitted: the internal shop promotion modal sharing the exact same origin.',
        bn: '৩ টি চেষ্টার মধ্যে কেবল ১ টি অনুমোদিত হয়েছিল: একই অরিজিন শেয়ার করা ইন্টারনাল শপ প্রমোশন মডাল।'
      },
    },
    {
      id: 'clickjack-ex-2',
      kind: 'mcq',
      topic: 'why-legacy-framebusting-fails',
      question: {
        en: 'Why do legacy JavaScript frame-busting scripts (such as if (top !== self) top.location = self.location) fail against skilled attackers?',
        bn: 'দক্ষ আক্রমণকারীদের বিরুদ্ধে পুরানো জাভাস্ক্রিপ্ট ফ্রেম-বাস্টিং কোড (যেমন if (top !== self) top.location = self.location) কেন ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'Attackers can embed the target page inside an HTML5 iframe with a restricted sandbox attribute (omitting allow-top-navigation), neutralizing the JavaScript redirection completely',
          bn: 'আক্রমণকারীরা এইচটিএমএল৫ আইফ্রেমে স্যান্ডবক্স অ্যাট্রিবিউট ব্যবহার করে allow-top-navigation বাদ দিতে পারে, যার ফলে জাভাস্ক্রিপ্ট রিডাইরেকশন সম্পূর্ণ নিষ্ক্রিয় হয়ে যায়',
        },
        {
          en: 'Because JavaScript cannot run inside web browser windows',
          bn: 'কারণ জাভাস্ক্রিপ্ট ওয়েব ব্রাউজারের উইন্ডোর ভেতরে চলতে পারে না',
        },
        {
          en: 'Because computer monitors shut down whenever frame-busting scripts execute',
          bn: 'কারণ ফ্রেম-বাস্টিং স্ক্রিপ্ট চলার সাথে সাথে কম্পিউটার মনিটর বন্ধ হয়ে যায়',
        },
        {
          en: 'Because frame-busting scripts require ten gigabytes of memory to run',
          bn: 'কারণ ফ্রেম-বাস্টিং স্ক্রিপ্ট চালানোর জন্য দশ গিগাবাইট মেমোরির প্রয়োজন হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'The iframe sandbox attribute can disable top navigation while keeping forms active.',
        bn: 'আইফ্রেম স্যান্ডবক্স শীর্ষ নেভিগেশন বন্ধ করে দিয়ে ফ্রেম-বাস্টিং ব্যর্থ করে দিতে পারে।'
      },
      explanation: {
        en: 'HTML5 iframe sandbox attributes strip the embedded document ability to alter top.location. Declarative HTTP headers are enforced at the browser network layer.',
        bn: 'এইচটিএমএল৫ স্যান্ডবক্স পেজের রিডাইরেক্ট ক্ষমতা কেড়ে নেয়। এজন্য নেটওয়ার্ক লেভেলে কাজ করা ডিক্লারেটিভ হেডারই কার্যকর সমাধান।'
      },
    },
    {
      id: 'clickjack-ex-3',
      kind: 'mcq',
      topic: 'csp-frame-ancestors-advantage',
      question: {
        en: 'What architectural advantage does the CSP frame-ancestors directive offer over the legacy X-Frame-Options header?',
        bn: 'পুরানো X-Frame-Options হেডারের তুলনায় আধুনিক CSP frame-ancestors নির্দেশিকা কোন আর্কিটেকচারাল সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It supports granular whitelisting of multiple specific parent domains (e.g. frame-ancestors \'self\' https://trusted-partner.example), whereas X-Frame-Options only allows DENY or SAMEORIGIN',
          bn: 'এটি একাধিক নির্দিষ্ট বহিরাগত প্যারেন্ট ডোমেইন তালিকাভুক্ত করার সুবিধা দেয় (যেমন frame-ancestors \'self\' https://trusted-partner.example), যেখানে X-Frame-Options কেবল DENY বা SAMEORIGIN সমর্থন করে',
        },
        {
          en: 'It accelerates internet cable speeds by forty percent',
          bn: 'এটি ইন্টারনেটের তারের গতি চল্লিশ শতাংশ বৃদ্ধি করে',
        },
        {
          en: 'It allows web pages to display video games automatically',
          bn: 'এটি ওয়েব পেজে ভিডিও গেম নিজে থেকেই চালাতে দেয়',
        },
        {
          en: 'It makes laptop batteries last three times longer',
          bn: 'এটি ল্যাপটপের ব্যাটারির আয়ু তিন গুণ বাড়িয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'frame-ancestors allows multi-domain whitelists, overcoming X-Frame-Options limits.',
        bn: 'frame-ancestors একাধিক ডোমেইন তালিকা সমর্থন করে X-Frame-Options এর সীমাবদ্ধতা দূর করে।'
      },
      explanation: {
        en: 'X-Frame-Options lacked standardized multi-origin whitelisting. CSP frame-ancestors provides precise control over authorized parent embedders.',
        bn: 'X-Frame-Options এ একাধিক ডোমেইন অনুমোদনের সুবিধা ছিল না। CSP frame-ancestors সুনির্দিষ্ট প্যারেন্ট এম্বেডার নিয়ন্ত্রণের ক্ষমতা দেয়।'
      },
    },
    {
      id: 'clickjack-ex-4',
      kind: 'predict',
      topic: 'denied-frames-count',
      question: {
        en: 'Under the SAMEORIGIN policy, how many of the 3 evaluated embedding attempts were denied and starved of user clicks? (2). Type the number.',
        bn: 'SAMEORIGIN পলিসির অধীনে মূল্যায়িত ৩ টি এম্বেড চেষ্টার মধ্যে সর্বমোট কয়টি প্রত্যাখ্যাত ও ক্লিকবিহীন অবস্থায় আটকে ছিল? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'Exactly 2 cross-origin embeds were denied.',
        bn: 'ঠিক ২ টি বহিরাগত এম্বেড প্রত্যাখ্যাত হয়েছিল।'
      },
      explanation: {
        en: 'The 2 cross-origin attempts (the hostile trap page and the ad network widget) were strictly rejected by the SAMEORIGIN policy.',
        bn: '২ টি বহিরাগত চেষ্টা (ক্ষতিকর ট্র্যাপ পেজ এবং বিজ্ঞাপন নেটওয়ার্ক) SAMEORIGIN পলিসির মাধ্যমে কঠোরভাবে প্রত্যাখ্যাত হয়।'
      },
    },
  ],
  quiz: {
    id: 'clickjacking-quiz',
    title: {
      en: 'Clickjacking & UI Redressing Architecture Quiz',
      bn: 'ক্লিকজ্যাকিং ও ইউআই রিড্রেসিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'clickjack-qz-1',
        kind: 'mcq',
        topic: 'css-pointer-events-limitation',
        question: {
          en: 'Can the CSS property pointer-events: none reliably prevent clickjacking attacks on an embedded page?',
          bn: 'সিএসএস প্রপার্টি pointer-events: none কি কোনো এম্বেডেড পেজে ক্লিকজ্যাকিং আক্রমণ বিশ্বস্ততার সাথে প্রতিহত করতে পারে?'
        },
        options: [
          {
            en: 'No, because pointer-events is a client-side styling property controlled entirely by the attacker parent document; the attacker can set pointer-events: auto on the iframe to capture clicks',
            bn: 'না, কারণ pointer-events হলো আক্রমণকারীর প্যারেন্ট ডকুমেন্টের নিয়ন্ত্রণাধীন একটি সিএসএস স্টাইল; আক্রমণকারী নিজেই আইফ্রেমে pointer-events: auto বসিয়ে ক্লিক হাইজ্যাক করতে পারে',
          },
          {
            en: 'Yes, pointer-events: none makes all computer screens click-proof permanently',
            bn: 'হ্যাঁ, pointer-events: none সমস্ত কম্পিউটার স্ক্রিনকে স্থায়ীভাবে ক্লিক-প্রুফ করে তোলে',
          },
          {
            en: 'Yes, provided the web server uses Linux operating system',
            bn: 'হ্যাঁ, যদি ওয়েব সার্ভারটি লিনাক্স অপারেটিং সিস্টেমে পরিচালিত হয়',
          },
          {
            en: 'No, but only on smartphone screens with cracked glass',
            bn: 'না, তবে কেবল ফাটা গ্লাসের স্মার্টফোন স্ক্রিনের ক্ষেত্রেই তা প্রযোজ্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'Attacker CSS controls click events in the hostile parent context.',
          bn: 'আক্রমণকারীর নিজস্ব সিএসএস তার প্যারেন্ট পেজের ইভেন্ট নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'Defenses must be enforced by the browser via HTTP response headers (X-Frame-Options or CSP), not relying on styling within the attacker frame.',
          bn: 'প্রতিরক্ষা অবশ্যই ব্রাউজারের নেটওয়ার্ক হেডারের মাধ্যমে নিশ্চিত করতে হবে, আক্রমণকারীর সিএসএস-এর ওপর নির্ভর করা যাবে না।'
        },
      },
      {
        id: 'clickjack-qz-2',
        kind: 'mcq',
        topic: 'nested-framing-ancestor-chain',
        question: {
          en: 'How does CSP frame-ancestors evaluate nested iframe chains (e.g. Page A frames Page B, which frames Page C)?',
          bn: 'CSP frame-ancestors কীভাবে নেস্টেড আইফ্রেম চেইন (যেমন পেজ A পেজ B কে ফ্রেম করে, যা পেজ C কে ফ্রেম করে) মূল্যায়ন করে?'
        },
        options: [
          {
            en: 'It verifies that every single ancestor in the framing hierarchy satisfies the frame-ancestors policy of the embedded document, preventing bypasses through intermediary framing hops',
            bn: 'এটি ফ্রেমিং চেইনের প্রতিটি পূর্ববর্তী বা প্যারেন্ট পেজ এম্বেডেড ডকুমেন্টের frame-ancestors পলিসি মেনে চলছে কি না তা নিশ্চিত করে, ফলে মধ্যবর্তী ফ্রেম দিয়ে কোনো বাইপাস সম্ভব হয় না',
          },
          {
            en: 'It only inspects the first frame and ignores all other nested frames',
            bn: 'এটি কেবল প্রথম ফ্রেমটি পরীক্ষা করে এবং অন্যান্য সব নেস্টেড ফ্রেম উপেক্ষা করে',
          },
          {
            en: 'It turns the innermost web page into an audio file',
            bn: 'এটি সবার ভেতরের ওয়েব পেজটিকে একটি অডিও ফাইলে রূপান্তর করে ফেলে',
          },
          {
            en: 'It restricts nesting to exactly two levels of depth',
            bn: 'এটি নেস্টিংকে ঠিক দুটি স্তরের গভীরতার মধ্যে সীমাবদ্ধ রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Every parent frame in the ancestor hierarchy must be authorized.',
          bn: 'পূর্ববর্তী চেইনের প্রতিটি প্যারেন্ট পেজকে অনুমোদিত হতে হয়।'
        },
        explanation: {
          en: 'If Page C sets frame-ancestors \'self\', neither Page A nor Page B can embed C unless all ancestors match the policy.',
          bn: 'যদি পেজ C তে frame-ancestors \'self\' থাকে, তবে চেইনের প্রতিটি পেজ একই অরিজিন না হলে ব্রাউজার পেজটি প্রদর্শন করবে না।'
        },
      },
      {
        id: 'clickjack-qz-3',
        kind: 'mcq',
        topic: 'cross-origin-isolated-frames',
        question: {
          en: 'What occurs when a web browser navigates to an endpoint returning X-Frame-Options: DENY inside an <iframe>?',
          bn: 'যখন কোনো ওয়েব ব্রাউজার একটি <iframe> এর ভেতরে X-Frame-Options: DENY হেডারযুক্ত কোনো এন্ডপয়েন্ট লোড করার চেষ্টা করে, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'The browser completely halts rendering of the embedded document and displays a framing refusal error screen in the iframe window, keeping the victim page safe',
            bn: 'ব্রাউজার এম্বেডেড পেজটি রেন্ডার করা সম্পূর্ণ বন্ধ করে দেয় এবং আইফ্রেমের ভেতরে ফ্রেমিং অস্বীকৃতির এরর স্ক্রিন প্রদর্শন করে পেজটিকে সুরক্ষিত রাখে',
          },
          {
            en: 'The user computer keyboard disconnects immediately',
            bn: 'ব্যবহারকারীর কম্পিউটারের কিবোর্ড তৎক্ষণাৎ সংযোগ বিচ্ছিন্ন হয়ে যায়',
          },
          {
            en: 'The web browser uninstalls itself from the operating system',
            bn: 'ওয়েব ব্রাউজার অপারেটিং সিস্টেম থেকে নিজে থেকেই আনইনস্টল হয়ে যায়',
          },
          {
            en: 'The web server deletes the victim account automatically',
            bn: 'ওয়েব সার্ভার ভিকটিমের অ্যাকাউন্টটি স্বয়ংক্রিয়ভাবে মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The browser halts iframe rendering and displays an error box.',
          bn: 'ব্রাউজার আইফ্রেমের পেজ প্রদর্শন বন্ধ করে দিয়ে একটি এরর বক্স দেখায়।'
        },
        explanation: {
          en: 'Browsers enforce X-Frame-Options by refusing to draw the response within the frame boundary, completely blocking click target manipulation.',
          bn: 'ব্রাউজার ফ্রেমের ভেতর রেসপন্স ড্র করতে অস্বীকার করে, ফলে ক্লিকজ্যাকিং ফাঁদ কার্যকর হতে পারে না।'
        },
      },
      {
        id: 'clickjack-qz-4',
        kind: 'mcq',
        topic: 'credential-reauthentication-defense',
        question: {
          en: 'Beyond security headers, what application-level design pattern prevents clickjacking from executing high-risk account operations?',
          bn: 'সিকিউরিটি হেডারের পাশাপাশি কোন অ্যাপ্লিকেশন-লেভেল ডিজাইন প্যাটার্ন উচ্চ-ঝুঁকিপূর্ণ কাজে ক্লিকজ্যাকিং আক্রমণ প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'Step-up authentication: requiring the user to re-enter their current password or complete two-factor authentication before executing irreversible actions like password or email changes',
            bn: 'স্টেপ-আপ অথেন্টিকেশন: পাসওয়ার্ড বা ইমেইল পরিবর্তনের মতো সংবেদনশীল ও অপরিবর্তনীয় কাজ সম্পন্ন করার আগে ব্যবহারকারীর বর্তমান পাসওয়ার্ড পুনরায় চাওয়া বা টু-ফ্যাক্টর কোড যাচাই করা',
          },
          {
            en: 'Changing the website language to Latin once a week',
            bn: 'সপ্তাহে একবার ওয়েবসাইটের ভাষা ল্যাটিন ভাষায় রূপান্তর করা',
          },
          {
            en: 'Limiting user login sessions to three minutes',
            bn: 'ব্যবহারকারীর লগইন সেশনকে তিন মিনিটের মধ্যে সীমাবদ্ধ রাখা',
          },
          {
            en: 'Turning off database backups during weekend days',
            bn: 'সাপ্তাহিক ছুটির দিনগুলোতে ডাটাবেজের ব্যাকআপ বন্ধ রাখা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Requiring passwords or 2FA for sensitive actions blocks single-click exploits.',
          bn: 'গুরুত্বপূর্ণ কাজে পাসওয়ার্ড বা ২-ফ্যাক্টর বাধ্যতামূলক করলে এক ক্লিকে ক্ষতি করা অসম্ভব হয়।'
        },
        explanation: {
          en: 'Even if an attacker tricks a user into a blind click, a step-up prompt requiring text input stops the attack from completing.',
          bn: 'আক্রমণকারী ভুয়া ক্লিকে ফাঁদে ফেললেও পাসওয়ার্ড টাইপ করার প্রম্পট থাকলে ক্ষতিসাধন আটকে যায়।'
        },
      },
    ],
  },
  next: {
    slug: 'secheaders-capstone',
    title: {
      en: 'Web Security Architecture Capstone: The 6-Point Security Audit',
      bn: 'ওয়েব সিকিউরিটি আর্কিটেকচার ক্যাপস্টোন: ৬-দফা নিরাপত্তা অডিট'
    },
  },
};
