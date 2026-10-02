import type { Lesson } from '../../../lib/types';

export const SameOriginPolicyLesson: Lesson = {
  slug: 'same-origin-policy',
  tech: 'web-security',
  title: {
    en: 'The Same-Origin Policy (SOP) & Cross-Origin Resource Sharing (CORS)',
    bn: 'সেম-অরিজিন পলিসি (SOP) ও ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS)'
  },
  summary: {
    en: 'Understand the primary security boundary of the World Wide Web. Learn how the browser enforces the Same-Origin Policy (SOP) by checking the 3-part origin tuple: Scheme, Host, and Port. Discover why cross-origin reads are blocked by default to protect user sessions and private data. Master Cross-Origin Resource Sharing (CORS), exploring simple requests, preflight OPTIONS requests, allowed headers, and credential handling. Analyze a runnable simulation evaluating 6 requests where 3 are allowed and 3 are blocked.',
    bn: 'ওয়ার্ল্ড ওয়াইড ওয়েবের প্রধান নিরাপত্তা সীমানা আয়ত্ত করুন। ব্রাউজার কীভাবে ৩ টি অংশ নিয়ে গঠিত অরিজিন টাপল (স্কিম, হোস্ট এবং পোর্ট) মিলিয়ে দেখে সেম-অরিজিন পলিসি (SOP) প্রয়োগ করে তা জানুন। ব্যবহারকারীর সেশন ও ব্যক্তিগত ডেটা সুরক্ষিত রাখতে ক্রস-অরিজিন ডেটা রিড কেন ডিফল্টভাবে ব্লক থাকে তা শিখুন। ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS), সিম্পল রিকোয়েস্ট, প্রিফ্লাইট OPTIONS রিকোয়েস্ট এবং ক্রেডেনশিয়াল ব্যবস্থাপনা বুঝুন। ৬ টি রিকোয়েস্টের একটি সিমুলেশন পরীক্ষা করুন যেখানে ৩ টি অনুমোদিত এবং ৩ টি ব্লক হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'origin-tuple-definition',
      text: {
        en: 'The Three-Part Origin Tuple: Scheme, Host, and Port',
        bn: 'তিনটি উপাদানে গঠিত অরিজিন টাপল: স্কিম, হোস্ট এবং পোর্ট'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Web browsers enforce the Same-Origin Policy (SOP) as the cornerstone of client-side web security. Two distinct web addresses share the exact same origin if, and only if, all 3 components of their origin tuple match: the protocol scheme, the domain hostname, and the network port number.',
        bn: 'ওয়েব ব্রাউজার ক্লায়েন্ট-সাইড নিরাপত্তার মূল ভিত্তি হিসেবে সেম-অরিজিন পলিসি (SOP) প্রয়োগ করে। ২ টি ভিন্ন ওয়েব ঠিকানা কেবলমাত্র তখনই একই অরিজিন শেয়ার করে যখন তাদের ৩ টি উপাদান হুবহু মিলে যায়: প্রোটোকল স্কিম, ডোমেইন হোস্টনেম এবং নেটওয়ার্ক পোর্ট নম্বর।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'For instance, consider a client application loaded from https://store.internal:443. If a script on this page attempts to fetch data from https://store.internal:443/cart, the request is permitted because all 3 components are identical. However, http://store.internal:443 fails on scheme, and https://api.internal:443 fails on host.',
        bn: 'উদাহরণস্বরূপ, https://store.internal:443 থেকে লোড হওয়া একটি অ্যাপ্লিকেশনের কথা বিবেচনা করুন। এই পেজের কোনো স্ক্রিপ্ট যদি https://store.internal:443/cart থেকে ডেটা আনতে চায়, তবে তা সাথে সাথে অনুমোদিত হয় কারণ ৩ টি উপাদানই অভিন্ন। কিন্তু http://store.internal:443 স্কিম অমিলের কারণে এবং https://api.internal:443 সাবডোমেইন হোস্ট অমিলের কারণে আটকে যায়।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'The Same-Origin Policy Boundary: 3 Allowed vs 3 Blocked Invocations',
        bn: 'সেম-অরিজিন পলিসি সীমানা: ৩ টি অনুমোদিত বনাম ৩ টি ব্লক রিকোয়েস্ট'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Same Origin Policy boundary diagram showing origin comparison and CORS headers">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">BROWSER SECURITY BOUNDARY: SAME-ORIGIN POLICY (SOP) & CORS</text>
  
  <!-- Current Origin Banner -->
  <rect x="40" y="50" width="760" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="60" y="77" fill="#94a3b8" font-size="12" font-weight="bold">ACTIVE CLIENT ORIGIN:</text>
  <text x="250" y="77" fill="#38bdf8" font-size="13" font-weight="bold">https://shop.example:443</text>
  <text x="560" y="77" fill="#cbd5e1" font-size="11">[Scheme: https, Host: shop.example, Port: 443]</text>
  
  <!-- Allowed Targets Box -->
  <g transform="translate(40, 110)">
    <rect width="365" height="295" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="365" height="32" rx="8" fill="#059669"/>
    <text x="182" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3 ALLOWED REQUESTS (PERMITTED)</text>
    
    <g transform="translate(12, 45)">
      <!-- Allowed 1 -->
      <rect width="341" height="68" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. https://shop.example:443/cart</text>
      <text x="10" y="38" fill="#cbd5e1" font-size="8.5">• Scheme, Host, and Port match</text>
      <text x="10" y="54" fill="#34d399" font-size="8.5">Verdict: Same Origin -> Allowed immediately</text>
      
      <!-- Allowed 2 -->
      <rect y="78" width="341" height="68" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="98" fill="#6ee7b7" font-size="9" font-weight="bold">2. https://shop.example:443/api/user</text>
      <text x="10" y="116" fill="#cbd5e1" font-size="8.5">• Internal API path on exact origin</text>
      <text x="10" y="132" fill="#34d399" font-size="8.5">Verdict: Same Origin -> Allowed immediately</text>
      
      <!-- Allowed 3 -->
      <rect y="156" width="341" height="78" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="176" fill="#6ee7b7" font-size="9" font-weight="bold">3. https://api.shop.example:443/v1/orders</text>
      <text x="10" y="194" fill="#cbd5e1" font-size="8.5">• Host differs (Subdomain)</text>
      <text x="10" y="210" fill="#cbd5e1" font-size="8.5">• Server sends: Access-Control-Allow-Origin</text>
      <text x="10" y="226" fill="#34d399" font-size="8.5">Verdict: Cross-Origin -> Permitted by CORS!</text>
    </g>
  </g>
  
  <!-- Blocked Targets Box -->
  <g transform="translate(435, 110)">
    <rect width="365" height="295" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="365" height="32" rx="8" fill="#dc2626"/>
    <text x="182" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3 BLOCKED REQUESTS (DENIED)</text>
    
    <g transform="translate(12, 45)">
      <!-- Blocked 1 -->
      <rect width="341" height="68" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#fca5a5" font-size="9" font-weight="bold">1. http://shop.example:443/data</text>
      <text x="10" y="38" fill="#cbd5e1" font-size="8.5">• Scheme mismatch (http vs https)</text>
      <text x="10" y="54" fill="#ef4444" font-size="8.5">Verdict: Cross-Origin -> Blocked by SOP</text>
      
      <!-- Blocked 2 -->
      <rect y="78" width="341" height="68" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="98" fill="#fca5a5" font-size="9" font-weight="bold">2. https://evil.example:443/leak</text>
      <text x="10" y="116" fill="#cbd5e1" font-size="8.5">• Host mismatch & zero CORS headers</text>
      <text x="10" y="132" fill="#ef4444" font-size="8.5">Verdict: Cross-Origin -> Blocked by SOP</text>
      
      <!-- Blocked 3 -->
      <rect y="156" width="341" height="78" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="176" fill="#fca5a5" font-size="9" font-weight="bold">3. https://partner.example:443/pay</text>
      <text x="10" y="194" fill="#cbd5e1" font-size="8.5">• Host mismatch</text>
      <text x="10" y="210" fill="#cbd5e1" font-size="8.5">• Server allows trusted-bank, not shop</text>
      <text x="10" y="226" fill="#ef4444" font-size="8.5">Verdict: Cross-Origin -> Blocked by CORS mismatch</text>
    </g>
  </g>
  
  <text x="420" y="425" fill="#94a3b8" font-size="10" text-anchor="middle">SOP protects user session privacy: writes execute, but unauthorized reads are strictly rejected</text>
</svg>`,
      caption: {
        en: 'The diagram shows 6 requests evaluated: 3 allowed (2 same-origin, 1 CORS-authorized) and 3 blocked (1 scheme mismatch, 2 CORS rejections).',
        bn: 'চিত্রে ৬ টি রিকোয়েস্টের মূল্যায়ন দেখানো হয়েছে: ৩ টি অনুমোদিত (২ টি সেম-অরিজিন, ১ টি CORS-অনুমোদিত) এবং ৩ টি ব্লক (১ টি স্কিম অমিল, ২ টি CORS প্রত্যাখ্যান)।'
      },
    },
    {
      type: 'heading',
      id: 'cors-mechanisms',
      text: {
        en: 'Cross-Origin Resource Sharing (CORS): Preflight Handshakes and Headers',
        bn: 'ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS): প্রিফ্লাইট হ্যান্ডশেক এবং হেডার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Same-Origin Policy does not completely block outbound network requests; it primarily restricts cross-origin reading of response data. An attacker website can submit an HTML form to your bank, but cannot read your account statement using JavaScript unless your bank server provides explicit CORS approval.',
        bn: 'সেম-অরিজিন পলিসি বাহ্যিক নেটওয়ার্ক রিকোয়েস্ট পুরোপুরি আটকে দেয় না; এটি মূলত ক্রস-অরিজিন রেসপন্স ডেটা পড়ার অধিকারকে সীমিত করে। আক্রমণকারীর ওয়েবসাইট আপনার ব্যাংকে কোনো ফর্ম সাবমিট করতে পারলেও জাভাস্ক্রিপ্ট দিয়ে অ্যাকাউন্ট ব্যালেন্স পড়তে পারবে না, যদি না ব্যাংক সার্ভার নির্দিষ্ট CORS অনুমতি হেডার পাঠায়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'For non-simple HTTP requests (such as requests using PUT, DELETE, or custom Authorization headers), the browser automatically dispatches an HTTP OPTIONS preflight request. The server must reply with Access-Control-Allow-Origin, Access-Control-Allow-Methods, and Access-Control-Allow-Headers before the actual data request is sent.',
        bn: 'সাধারণ নয় এমন HTTP রিকোয়েস্টের ক্ষেত্রে ( যেমন PUT, DELETE বা কাস্টম Authorization হেডার ), ব্রাউজার মূল রিকোয়েস্ট পাঠানোর আগে নিজে থেকেই একটি HTTP OPTIONS প্রিফ্লাইট রিকোয়েস্ট পাঠায়। সার্ভারকে অবশ্যই Access-Control-Allow-Origin, Access-Control-Allow-Methods এবং Access-Control-Allow-Headers দিয়ে উত্তর দিতে হয়।'
      },
    },
    {
      type: 'heading',
      id: 'sop-cors-simulation-code',
      text: {
        en: 'Executable Node.js SOP & CORS Policy Engine',
        bn: 'Node.js-এ কার্যকর SOP ও CORS পলিসি ইঞ্জিন'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'sop-cors-evaluator.js',
      code: `// Deterministic Same-Origin Policy (SOP) & CORS Validator Engine
function parseOrigin(urlStr) {
  const url = new URL(urlStr);
  const port = url.port || (url.protocol === 'https:' ? '443' : '80');
  return {
    scheme: url.protocol.replace(':', ''),
    host: url.hostname,
    port: port,
    origin: \`\${url.protocol}//\${url.hostname}:\${port}\`
  };
}

function evaluateRequest(clientOriginStr, targetUrlStr, serverCorsConfig = null) {
  const client = parseOrigin(clientOriginStr);
  const target = parseOrigin(targetUrlStr);

  // Check 3-part Origin Tuple: Scheme, Host, and Port
  const isSameOrigin = (
    client.scheme === target.scheme &&
    client.host === target.host &&
    client.port === target.port
  );

  if (isSameOrigin) {
    return {
      target: targetUrlStr,
      allowed: true,
      reason: 'Same Origin: Scheme, Host, and Port match exactly'
    };
  }

  // Target is cross-origin; evaluate server CORS response headers
  if (!serverCorsConfig) {
    return {
      target: targetUrlStr,
      allowed: false,
      reason: 'Blocked by SOP: Target server sent no Access-Control-Allow-Origin header'
    };
  }

  const allowedOrigin = serverCorsConfig.allowOrigin;
  const permitsOrigin = allowedOrigin === '*' || allowedOrigin === client.origin;

  if (permitsOrigin) {
    return {
      target: targetUrlStr,
      allowed: true,
      reason: \`Allowed by CORS: Server explicitly authorized origin \${allowedOrigin}\`
    };
  }

  return {
    target: targetUrlStr,
    allowed: false,
    reason: \`Blocked by CORS: Server permitted \${allowedOrigin}, but client is \${client.origin}\`
  };
}

// 1. Establish the current origin of the running web page
const currentOrigin = 'https://shop.example:443';
console.log('=== Active Web Application Origin ===');
console.log('Client Origin:', currentOrigin);

// 2. Define 6 distinct request scenarios to evaluate
const testScenarios = [
  { url: 'https://shop.example:443/cart', cors: null },
  { url: 'https://shop.example:443/api/user', cors: null },
  { url: 'http://shop.example:443/data', cors: null },
  { url: 'https://api.shop.example:443/v1/orders', cors: { allowOrigin: 'https://shop.example:443' } },
  { url: 'https://evil.example:443/leak', cors: null },
  { url: 'https://partner.example:443/pay', cors: { allowOrigin: 'https://trusted-bank.example:443' } }
];

let totalAllowed = 0;
let totalBlocked = 0;

console.log('\\n=== Evaluating 6 Origin Request Scenarios ===');
testScenarios.forEach((scenario, index) => {
  const result = evaluateRequest(currentOrigin, scenario.url, scenario.cors);
  if (result.allowed) {
    totalAllowed++;
    console.log(\`[\${index + 1}] ALLOWED: \${scenario.url}\`);
    console.log(\`    Reason: \${result.reason}\`);
  } else {
    totalBlocked++;
    console.log(\`[\${index + 1}] BLOCKED: \${scenario.url}\`);
    console.log(\`    Reason: \${result.reason}\`);
  }
});

console.log('\\n=== Security Audit Summary ===');
console.log('Total Requests Tested:', testScenarios.length);
console.log('Allowed Requests:     ', totalAllowed);
console.log('Blocked Requests:     ', totalBlocked);`,
      caption: {
        en: 'The simulation evaluates 6 requests from https://shop.example:443: 3 allowed and 3 blocked based on SOP and CORS rules.',
        bn: 'সিমুলেটরটি https://shop.example:443 থেকে পাঠানো ৬ টি রিকোয়েস্ট মূল্যায়ন করে: SOP এবং CORS এর নিয়মের ওপর ভিত্তি করে ৩ টি অনুমোদিত এবং ৩ টি ব্লক হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Wildcard CORS with Credentials Security Vulnerability',
        bn: 'ক্রেডেনশিয়ালসহ ওয়াইল্ডকার্ড CORS-এর মারাত্মক নিরাপত্তা ঝুঁকি'
      },
      text: {
        en: 'A dangerous misconfiguration is responding with Access-Control-Allow-Origin: * while attempting to pass authenticated session cookies. The Fetch specification strictly forbids this combination: if credentials: include is specified, modern web browsers will immediately reject the response if the server uses a wildcard origin. The server must explicitly reflect the trusted origin and supply Access-Control-Allow-Credentials: true.',
        bn: 'একটি মারাত্মক ভুল কনফিগারেশন হলো অথেন্টিকেটেড সেশন কুকি আদান-প্রদান করার সময় Access-Control-Allow-Origin: * হেডার পাঠানো। ফেচ স্পেসিফিকেশন কঠোরভাবে এই সংমিশ্রণ নিষিদ্ধ করে: যদি credentials: include উল্লেখ করা থাকে, তবে সার্ভার ওয়াইল্ডকার্ড অরিজিন পাঠালে আধুনিক ব্রাউজার তৎক্ষণাৎ রেসপন্স প্রত্যাখ্যান করে। সার্ভারকে অবশ্যই বিশ্বস্ত নির্দিষ্ট অরিজিন উল্লেখ করতে হবে এবং Access-Control-Allow-Credentials: true পাঠাতে হবে।'
      },
    },
  ],
  exercises: [
    {
      id: 'sop-cors-ex-1',
      kind: 'predict',
      topic: 'allowed-requests-count',
      question: {
        en: 'Out of the 6 evaluated network requests in the security simulation, how many requests were permitted (2 same-origin, 1 CORS-authorized)? (3). Type the number.',
        bn: 'নিরাপত্তা সিমুলেশনে মূল্যায়িত ৬ টি নেটওয়ার্ক রিকোয়েস্টের মধ্যে সর্বমোট কয়টি রিকোয়েস্ট অনুমোদিত হয়েছিল ( ২ টি সেম-অরিজিন, ১ টি CORS-অনুমোদিত )? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 requests were allowed.',
        bn: 'ঠিক ৩ টি রিকোয়েস্ট অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 6 requests, 3 were allowed: 2 same-origin paths (/cart and /api/user) and 1 cross-origin API endpoint with matching CORS approval.',
        bn: '৬ টির মধ্যে ৩ টি অনুমোদিত হয়েছিল: ২ টি সেম-অরিজিন রিকোয়েস্ট (/cart ও /api/user) এবং ১ টি সঠিক CORS হেডারযুক্ত ক্রস-অরিজিন এপিআই।'
      },
    },
    {
      id: 'sop-cors-ex-2',
      kind: 'mcq',
      topic: 'origin-tuple-mismatch',
      question: {
        en: 'Why does an HTTPS page running on https://shop.example:443 fail the Same-Origin check when requesting http://shop.example:443?',
        bn: 'https://shop.example:443 এ চলমান একটি HTTPS পেজ http://shop.example:443 এ রিকোয়েস্ট পাঠালে কেন সেম-অরিজিন পরীক্ষায় অনুত্তীর্ণ হয়?'
      },
      options: [
        {
          en: 'Because the protocol scheme differs (https vs http); all 3 components (scheme, host, port) must match identically for the Same-Origin Policy to grant access',
          bn: 'কারণ প্রোটোকল স্কিমে অমিল রয়েছে (https বনাম http); সেম-অরিজিন পলিসিতে অ্যাক্সেস পেতে হলে ৩ টি উপাদানই (স্কিম, হোস্ট, পোর্ট) হুবহু এক হতে হয়',
        },
        {
          en: 'Because the web server processor overheated during the request',
          bn: 'কারণ রিকোয়েস্ট চলাকালীন ওয়েব সার্ভারের প্রসেসর অতিরিক্ত গরম হয়ে গিয়েছিল',
        },
        {
          en: 'Because the internet cable was unplugged by the user',
          bn: 'কারণ ব্যবহারকারী ইন্টারনেটের তার খুলে ফেলেছিলেন',
        },
        {
          en: 'Because the target domain has more than ten letters',
          bn: 'কারণ উদ্দিষ্ট ডোমেইন নামের মধ্যে দশটির বেশি অক্ষর রয়েছে',
        },
      ],
      answer: 0,
      hint: {
        en: 'A change in protocol scheme creates a distinct origin.',
        bn: 'প্রোটোকল স্কিম বদলে গেলে সম্পূর্ণ নতুন অরিজিন তৈরি হয়।'
      },
      explanation: {
        en: 'Even though the hostname (shop.example) and port (443) match, the difference between https and http violates the 3-part origin tuple.',
        bn: 'যদিও হোস্টনেম ও পোর্ট এক ছিল, তবুও https এবং http এর পার্থক্যের কারণে অরিজিন টাপল ভেঙে যায়।'
      },
    },
    {
      id: 'sop-cors-ex-3',
      kind: 'mcq',
      topic: 'cors-preflight-trigger',
      question: {
        en: 'Which HTTP method and header combination will cause the browser to dispatch an automatic OPTIONS preflight request before the actual payload?',
        bn: 'কোন HTTP মেথড ও হেডার সংমিশ্রণের কারণে ব্রাউজার মূল ডেটা পাঠানোর আগে নিজে থেকেই একটি OPTIONS প্রিফ্লাইট রিকোয়েস্ট পাঠায়?'
      },
      options: [
        {
          en: 'A PUT or DELETE request, or any request carrying custom headers like Authorization or Content-Type: application/json',
          bn: 'যেকোনো PUT বা DELETE রিকোয়েস্ট, অথবা Authorization বা Content-Type: application/json এর মতো কাস্টম হেডারযুক্ত যেকোনো রিকোয়েস্ট',
        },
        {
          en: 'A standard GET request fetching a public JPEG image with no special headers',
          bn: 'কোনো বিশেষ হেডার ছাড়া সাধারণ JPEG ছবি লোড করার সাধারণ GET রিকোয়েস্ট',
        },
        {
          en: 'An HTML form submitting plain text via application/x-www-form-urlencoded',
          bn: 'application/x-www-form-urlencoded দিয়ে সাধারণ টেক্সট পাঠানো কোনো সাধারণ HTML ফর্ম',
        },
        {
          en: 'A CSS stylesheet linked in the HTML head tag',
          bn: 'এইচটিএমএল হেড ট্যাগে লিংক করা একটি সাধারণ সিএসএস ফাইল',
        },
      ],
      answer: 0,
      hint: {
        en: 'Non-simple HTTP methods and custom headers mandate a preflight check.',
        bn: 'নন-সিম্পল মেথড এবং কাস্টম হেডার থাকলে প্রিফ্লাইট চেক বাধ্যতামূলক হয়।'
      },
      explanation: {
        en: 'Standard GET/HEAD/POST with basic MIME types are simple requests. PUT, DELETE, and custom headers like Authorization require a preflight check.',
        bn: 'সাধারণ GET বা POST রিকোয়েস্ট সিম্পল হিসেবে গণ্য হয়। কিন্তু PUT, DELETE কিংবা Authorization হেডারের জন্য ব্রাউজার প্রিফ্লাইট পাঠায়।'
      },
    },
    {
      id: 'sop-cors-ex-4',
      kind: 'predict',
      topic: 'origin-tuple-component-count',
      question: {
        en: 'How many distinct components (Scheme, Host, Port) compose an origin tuple in the Same-Origin Policy? (3). Type the number.',
        bn: 'সেম-অরিজিন পলিসিতে একটি অরিজিন টাপল সর্বমোট কয়টি স্বতন্ত্র উপাদান ( স্কিম, হোস্ট, পোর্ট ) নিয়ে গঠিত হয়? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'An origin is defined by 3 components.',
        bn: 'একটি অরিজিন ৩ টি উপাদান দিয়ে গঠিত হয়।'
      },
      explanation: {
        en: 'An origin is defined strictly by the 3-part tuple: Scheme, Host, and Port. Any difference creates a cross-origin boundary.',
        bn: 'অরিজিন নির্ধারিত হয় ৩ টি উপাদান দ্বারা: স্কিম, হোস্ট এবং পোর্ট। যেকোনো একটি ভিন্ন হলেই ক্রস-অরিজিন সীমানা তৈরি হয়।'
      },
    },
  ],
  quiz: {
    id: 'same-origin-policy-quiz',
    title: {
      en: 'Same-Origin Policy & CORS Architecture Quiz',
      bn: 'সেম-অরিজিন পলিসি ও CORS আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'sop-cors-qz-1',
        kind: 'mcq',
        topic: 'cross-origin-read-restriction',
        question: {
          en: 'What fundamental behavior does the Same-Origin Policy (SOP) restrict between different origins?',
          bn: 'বিভিন্ন অরিজিনের মধ্যে সেম-অরিজিন পলিসি (SOP) মূলত কোন মৌলিক আচরণটি প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'It prevents client-side JavaScript from reading cross-origin HTTP response data, while still allowing certain cross-origin writes and resource embeds like images and stylesheets',
            bn: 'এটি ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্টকে ক্রস-অরিজিন রেসপন্স ডেটা পড়া থেকে বিরত রাখে, তবে ফর্ম সাবমিশন এবং ছবি বা সিএসএস লোডের মতো ক্রস-অরিজিন এম্বেড সাধারণত অনুমোদন করে',
          },
          {
            en: 'It blocks computer monitors from displaying colors other than gray',
            bn: 'এটি কম্পিউটারের মনিটরে ধূসর ছাড়া অন্য যেকোনো রঙ প্রদর্শন করা বন্ধ করে দেয়',
          },
          {
            en: 'It shuts down local network routers whenever an email is received',
            bn: 'এটি কোনো ইমেইল আসার সাথে সাথেই লোকাল নেটওয়ার্কের রাউটার বন্ধ করে দেয়',
          },
          {
            en: 'It permanently deletes user files stored in the downloads folder',
            bn: 'এটি ব্যবহারকারীর ডাউনলোড ফোল্ডারে থাকা সব ফাইল স্থায়ীভাবে মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SOP primarily restricts reading response bodies, not simple embedding.',
          bn: 'SOP মূলত রেসপন্স বডি পড়া আটকায়, বাহ্যিক ছবি বা ফাইল এম্বেড করা নয়।'
        },
        explanation: {
          en: 'SOP prevents unauthorized reading of sensitive response data. Without it, malicious sites could fetch your webmail inbox or banking balance in background tabs.',
          bn: 'SOP সংবেদনশীল রেসপন্স পড়া প্রতিরোধ করে। এটি না থাকলে ক্ষতিকর সাইট ব্যাকগ্রাউন্ডে আপনার ইনবক্স বা ব্যাংক ব্যালেন্স পড়ে নিতে পারত।'
        },
      },
      {
        id: 'sop-cors-qz-2',
        kind: 'mcq',
        topic: 'cors-credentials-wildcard-rule',
        question: {
          en: 'Why do web browsers refuse to deliver a cross-origin response when Access-Control-Allow-Origin: * is paired with Access-Control-Allow-Credentials: true?',
          bn: 'ব্রাউজার কেন Access-Control-Allow-Origin: * এর সাথে Access-Control-Allow-Credentials: true থাকলে রেসপন্স ফেরত দিতে অস্বীকৃতি জানায়?'
        },
        options: [
          {
            en: 'Allowing wildcard origins with credentials would allow any malicious website on the internet to steal authenticated user sessions, so the specification mandates explicit origin reflection',
            bn: 'ক্রেডেনশিয়ালের সাথে ওয়াইল্ডকার্ড অনুমোদন করলে ইন্টারনেটের যেকোনো ক্ষতিকর সাইট ব্যবহারকারীর অথেন্টিকেটেড সেশন চুরি করে নিতে পারত, তাই স্পেসিফিকেশন নির্দিষ্ট অরিজিন উল্লেখ করা বাধ্যতামূলক করেছে',
          },
          {
            en: 'Because wildcard asterisks are unsupported characters in HTTP servers',
            bn: 'কারণ ওয়াইল্ডকার্ড অ্যাস্ট্যারিস্ক চিহ্নটি কোনো HTTP সার্ভারে কাজ করে না',
          },
          {
            en: 'Because it consumes too much electrical battery power on mobile phones',
            bn: 'কারণ এটি মোবাইল ফোনের অতিরিক্ত ব্যাটারি বিদ্যুৎ অপচয় করে',
          },
          {
            en: 'Because web browsers require domain names to have uppercase letters',
            bn: 'কারণ ওয়েব ব্রাউজার ডোমেইন নামে কেবল বড় হাতের ইংরেজি অক্ষর দাবি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Wildcard with credentials would compromise all authenticated user data globally.',
          bn: 'ক্রেডেনশিয়ালের সাথে ওয়াইল্ডকার্ড দিলে বিশ্বের যেকোনো সাইট ব্যক্তিগত ডেটা পড়ে ফেলতে পারত।'
        },
        explanation: {
          en: 'The CORS specification intentionally prevents wildcard credential sharing to safeguard user privacy against universal session theft.',
          bn: 'CORS স্পেসিফিকেশন সেশন চুরি রোধে ক্রেডেনশিয়ালের ক্ষেত্রে ওয়াইল্ডকার্ড সম্পূর্ণরূপে নিষিদ্ধ করেছে।'
        },
      },
      {
        id: 'sop-cors-qz-3',
        kind: 'mcq',
        topic: 'cross-origin-embed-tags',
        question: {
          en: 'Why do HTML tags like <img>, <script>, and <video> successfully load media from external domains without violating the Same-Origin Policy?',
          bn: 'HTML ট্যাগ যেমন <img>, <script> এবং <video> কীভাবে সেম-অরিজিন পলিসি না ভেঙে বাইরের ডোমেইন থেকে মিডিয়া লোড করতে পারে?'
        },
        options: [
          {
            en: 'The web was designed to support cross-origin resource embedding; the browser displays the image or runs the script, but JavaScript cannot read the raw binary image bytes without explicit CORS authorization',
            bn: 'ওয়েব তৈরিই হয়েছিল বাইরের রিসোর্স প্রদর্শনের সুবিধার্থে; ব্রাউজার ছবি প্রদর্শন বা স্ক্রিপ্ট এক্সিকিউট করতে পারে, কিন্তু জাভাস্ক্রিপ্ট স্পষ্ট CORS অনুমতি ছাড়া সেই ছবির বাইট সরাসরি পড়তে পারে না',
          },
          {
            en: 'Because video and image files do not contain electronic data packets',
            bn: 'কারণ ভিডিও এবং ইমেজ ফাইলের ভেতরে কোনো ইলেকট্রনিক ডেটা প্যাকেট থাকে না',
          },
          {
            en: 'Because images are stored inside computer screen glass directly',
            bn: 'কারণ ইমেজ সরাসরি কম্পিউটারের স্ক্রিনের কাঁচের ভেতরে সংরক্ষিত থাকে',
          },
          {
            en: 'Because external domains turn off web security rules during evenings',
            bn: 'কারণ বহিরাগত ডোমেইনগুলো সন্ধ্যার পর ওয়েব সিকিউরিটি নিয়ম বন্ধ রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Embedding is permitted; reading raw byte data requires CORS.',
          bn: 'এম্বেড করার অনুমতি থাকলেও কাঁচা ডেটা বা বাইট পড়তে CORS অনুমতি প্রয়োজন।'
        },
        explanation: {
          en: 'Cross-origin embedding is allowed for web functionality (CDNs, stylesheets). However, canvas reading (toDataURL) of cross-origin images is blocked unless CORS is present.',
          bn: 'ওয়েবের কার্যকারিতার জন্য এম্বেড করার সুযোগ রাখা হয়েছে। তবে ক্যানভাস দিয়ে সেই ছবির ডেটা পড়তে গেলে CORS ছাড়া তা আটকে দেওয়া হয়।'
        },
      },
      {
        id: 'sop-cors-qz-4',
        kind: 'mcq',
        topic: 'cross-origin-subdomain-handling',
        question: {
          en: 'Are two URLs with the same root domain but different subdomains (e.g. app.example.com and api.example.com) considered same-origin by default?',
          bn: 'একই মূল ডোমেইনের দুটি ভিন্ন সাবডোমেইন ( যেমন app.example.com এবং api.example.com ) কি ডিফল্টভাবে সেম-অরিজিন হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: 'No, they are distinct origins because their host components do not match; cross-origin requests between them require valid CORS response headers',
            bn: 'না, তারা সম্পূর্ণ আলাদা অরিজিন কারণ তাদের হোস্ট উপাদান ভিন্ন; তাদের মধ্যে তথ্য আদান-প্রদান করতে সার্ভারে সঠিক CORS হেডার থাকতে হয়',
          },
          {
            en: 'Yes, any two websites sharing the same top-level domain are always considered same-origin',
            bn: 'হ্যাঁ, একই মূল ডোমেইনের অধীনে থাকা যেকোনো দুটি ওয়েবসাইট সর্বদা সেম-অরিজিন হিসেবে গণ্য হয়',
          },
          {
            en: 'Yes, if both websites use blue background colors',
            bn: 'হ্যাঁ, যদি উভয় ওয়েবসাইটে নীল রঙের ব্যাকগ্রাউন্ড ব্যবহার করা হয়',
          },
          {
            en: 'No, but only when accessed from laptop computers running Linux',
            bn: 'না, তবে কেবল লিনাক্স চালানো ল্যাপটপ কম্পিউটার থেকে ঢুকলেই তা প্রযোজ্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'Subdomains are distinct hostnames under the SOP tuple.',
          bn: 'SOP এর দৃষ্টিতে সাবডোমেইনগুলো সম্পূর্ণ ভিন্ন হোস্টনেম।'
        },
        explanation: {
          en: 'Even subdomains of the same parent domain have distinct origins. An API at api.example.com must emit CORS headers to permit fetches from app.example.com.',
          bn: 'একই প্যারেন্ট ডোমেইনের সাবডোমেইন হলেও তারা আলাদা অরিজিন। তাই api.example.com এ CORS হেডার দিয়ে app.example.com কে অনুমতি দিতে হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'xss-attacks',
    title: {
      en: 'Cross-Site Scripting (XSS): Stored, Reflected, DOM-Based & Sanitization',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): স্টোরড, রিফ্লেক্টেড, DOM-ভিত্তিক এবং স্যানিটাইজেশন'
    },
  },
};
