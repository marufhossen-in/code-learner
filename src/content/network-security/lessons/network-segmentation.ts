import type { Lesson } from '../../../lib/types';

export const NetworkSegmentationLesson: Lesson = {
  slug: 'network-segmentation',
  tech: 'network-security',
  title: {
    en: 'Zero Trust Network Architecture: DMZ, VLANs & Microsegmentation',
    bn: 'জিরো ট্রাস্ট নেটওয়ার্ক আর্কিটেকচার: ডিএমজেড, ভিএলএএন এবং মাইক্রোসেগমেন্টেশন'
  },
  summary: {
    en: 'Master enterprise network zoning and isolation strategies that defeat lateral attacker movement. Understand the fatal danger of flat networks where compromising a single printer or IoT sensor gives adversaries unhindered access to high-value database servers. Explore three-tier architecture separating the public Demilitarized Zone (DMZ), the private application tier, and the isolated data tier. Inspect an executable Node.js segmentation engine evaluating 4 inter-zone flows: 3 authorized flows pass, and 1 illegal lateral probe from the DMZ directly to the database is stopped.',
    bn: 'আক্রমণকারীদের পার্শ্ববর্তী বা ল্যাটারাল অনুপ্রবেশ প্রতিহত করার এন্টারপ্রাইজ নেটওয়ার্ক জোনিং ও আইসোলেশন কৌশলগুলো আয়ত্ত করুন। সমতল বা ফ্ল্যাট নেটওয়ার্কের মারাত্মক বিপদ বুঝুন যেখানে একটি সাধারণ প্রিন্টার বা আইওটি ডিভাইস দখল করেই আক্রমণকারী মূল ডাটাবেজ সার্ভারে প্রবেশ করতে পারে। পাবলিক ডিএমজেড (DMZ), প্রাইভেট অ্যাপ্লিকেশন স্তর এবং বিচ্ছিন্ন ডাটা স্তর—এই ৩-স্তরীয় আর্কিটেকচার শিখুন। ৪ টি আন্তঃজোন ট্রাফিক মূল্যায়নকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি অনুমোদিত প্রবাহ সফল হয় এবং ডিএমজেড থেকে ডাটাবেজে ১ টি অননুমোদিত সরাসরি অনুপ্রবেশ চেষ্টা আটকে দেওয়া হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'flat-networks-vs-segmentation',
      text: {
        en: 'The Danger of Flat Networks: Why Lateral Movement Compromises Everything',
        bn: 'ফ্ল্যাট নেটওয়ার্কের মারাত্মক বিপদ: কেন ল্যাটারাল মুভমেন্ট সবকিছু ধ্বংস করে'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Flat networks present a severe enterprise security liability. When you deploy company computers, web servers, and databases onto a single flat broadcast domain without internal firewalls, you create an all-or-nothing security posture. An attacker does not need to compromise your production database directly. They simply breach an insecure office printer or employee workstation, and then roam freely sideways across the flat network.',
        bn: 'ফ্ল্যাট নেটওয়ার্ক এন্টারপ্রাইজ নিরাপত্তার জন্য মারাত্মক ঝুঁকি তৈরি করে। যখন আপনি কোনো অভ্যন্তরীণ ফায়ারওয়াল ছাড়াই একটিমাত্র ফ্ল্যাট ব্রডকাস্ট নেটওয়ার্কে অফিসের কম্পিউটার, ওয়েব সার্ভার এবং ডাটাবেজ একসাথে রাখেন, তখন আপনি একটি দুর্বল নিরাপত্তা ব্যবস্থা তৈরি করেন। হ্যাকারকে সরাসরি মূল ডাটাবেজ হ্যাক করতে হয় না। সে কেবল একটি সাধারণ অফিস প্রিন্টার বা কর্মীর কম্পিউটার দখল করে সেই ফ্ল্যাট নেটওয়ার্কের সুযোগ নিয়ে অবাধে মূল সার্ভারে ছড়িয়ে পড়ে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Network segmentation divides infrastructure into isolated zones separated by internal firewalls. By implementing a classic 3-tier architecture, organizations ensure that public DMZ web servers cannot directly communicate with backend databases. Even if an edge proxy is compromised via remote code execution, internal firewalls block direct lateral network sockets to the data tier.',
        bn: 'নেটওয়ার্ক সেগমেন্টেশন পুরো পরিকাঠামোকে অভ্যন্তরীণ ফায়ারওয়াল দ্বারা সুরক্ষিত পৃথক পৃথক জোনে বিভক্ত করে। একটি ক্লাসিক ৩-স্তরীয় আর্কিটেকচার প্রয়োগের মাধ্যমে নিশ্চিত করা হয় যে ডিএমজেডের ওয়েব সার্ভার কখনোই সরাসরি ডাটাবেজের সাথে যোগাযোগ করতে পারবে না। এজ প্রক্সি কোনোভাবে হ্যাক হলেও, অভ্যন্তরীণ ফায়ারওয়াল ডাটা স্তরে সরাসরি যেকোনো ল্যাটারাল সংযোগ সম্পূর্ণ ব্লক করে দেয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Demilitarized Zone (DMZ)',
            bn: '১. ডিমিলিটারাইজড জোন (DMZ)'
          },
          text: {
            en: 'The public-facing perimeter subnet (e.g. 10.0.1.0/24). Hosts load balancers, reverse proxies, and public web servers accessible from the internet on ports 80 and 443.',
            bn: 'পাবলিক ইন্টারনেটের মুখোমুখি পেরিমিটার সাবনেট (যেমন 10.0.1.0/24)। এখানে লোড ব্যালেন্সার এবং রিভার্স প্রক্সি থাকে যা ইন্টারনেট থেকে পোর্ট ৮০ ও ৪৪৩-এ সেবা দেয়।'
          },
        },
        {
          title: {
            en: '2. Application Microservices Tier',
            bn: '২. অ্যাপ্লিকেশন মাইক্রোসার্ভিস স্তর'
          },
          text: {
            en: 'The private business logic tier (e.g. 10.0.2.0/24). Inaccessible directly from the public internet; accepts traffic exclusively forwarded from authorized DMZ reverse proxies on internal port 8080.',
            bn: 'প্রাইভেট বিজনেস লজিক সাবনেট (যেমন 10.0.2.0/24)। পাবলিক ইন্টারনেট থেকে এতে সরাসরি ঢোকা যায় না; কেবল অনুমোদিত ডিএমজেড প্রক্সি থেকে অভ্যন্তরীণ পোর্ট ৮০৮০-তে ট্রাফিক গ্রহণ করে।'
          },
        },
        {
          title: {
            en: '3. Isolated Data Storage Tier',
            bn: '৩. বিচ্ছিন্ন ডাটা স্টোরেজ স্তর'
          },
          text: {
            en: 'The vault containing relational databases and object caches (e.g. 10.0.3.0/24). Communicates strictly with the application tier on port 5432; direct communication from the DMZ or internet is strictly dropped.',
            bn: 'মূল রিলেশনাল ডাটাবেজ এবং ক্যাশ সার্ভারের সুরক্ষিত সাবনেট (যেমন 10.0.3.0/24)। কেবল অ্যাপ্লিকেশন স্তর থেকে পোর্ট ৫৪৩২-এ সংযোগ নেয়; ডিএমজেড বা ইন্টারনেট থেকে যেকোনো সরাসরি রিকোয়েস্ট সাথে সাথে বাতিল হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Three-Tier Segmentation Boundary: 3 Permitted Flows vs 1 Blocked Lateral Probe',
        bn: 'তিন-স্তরীয় সেগমেন্টেশন সীমানা: ৩ টি অনুমোদিত প্রবাহ বনাম ১ টি ব্লক ল্যাটারাল অনুপ্রবেশ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Network segmentation showing DMZ, Application, and Data tiers with inter-zone firewall controls">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THREE-TIER ZERO TRUST NETWORK SEGMENTATION ARCHITECTURE</text>
  
  <!-- Zone Topology Layout -->
  <g transform="translate(30, 50)">
    <!-- Zone 1: DMZ -->
    <rect width="240" height="340" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
    <rect width="240" height="30" rx="8" fill="#ca8a04"/>
    <text x="120" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ZONE 1: DMZ (10.0.1.0/24)</text>
    <text x="120" y="55" fill="#fde047" font-size="9.5" font-weight="bold" text-anchor="middle">Public Web Reverse Proxy</text>
    <rect x="20" y="70" width="200" height="50" rx="6" fill="#0f172a" stroke="#ca8a04"/>
    <text x="30" y="90" fill="#cbd5e1" font-size="8.5">• Public Ingress: Port 443 [✓]</text>
    <text x="30" y="106" fill="#cbd5e1" font-size="8.5">• Direct Internet Access</text>
    
    <rect x="20" y="140" width="200" height="85" rx="6" fill="#450a0a" stroke="#ef4444"/>
    <text x="30" y="160" fill="#fca5a5" font-size="9" font-weight="bold">Breach Containment Wall:</text>
    <text x="30" y="178" fill="#cbd5e1" font-size="8.5">If Web Proxy is compromised,</text>
    <text x="30" y="194" fill="#cbd5e1" font-size="8.5">internal firewall blocks</text>
    <text x="30" y="210" fill="#fca5a5" font-size="8.5">direct access to Data Tier!</text>
    
    <!-- Zone 2: App Tier -->
    <g transform="translate(265, 0)">
      <rect width="240" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect width="240" height="30" rx="8" fill="#0284c7"/>
      <text x="120" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ZONE 2: APP (10.0.2.0/24)</text>
      <text x="120" y="55" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">Private API Microservices</text>
      <rect x="20" y="70" width="200" height="50" rx="6" fill="#0f172a" stroke="#0284c7"/>
      <text x="30" y="90" fill="#cbd5e1" font-size="8.5">• Listens: Port 8080/TCP</text>
      <text x="30" y="106" fill="#cbd5e1" font-size="8.5">• Source Restricted to DMZ</text>
      
      <rect x="20" y="140" width="200" height="85" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="30" y="160" fill="#6ee7b7" font-size="9" font-weight="bold">Authorized Bridge:</text>
      <text x="30" y="178" fill="#cbd5e1" font-size="8.5">App tier queries Database</text>
      <text x="30" y="194" fill="#cbd5e1" font-size="8.5">via mutual authentication</text>
      <text x="30" y="210" fill="#34d399" font-size="8.5">on Port 5432 [PERMITTED ✓]</text>
    </g>
    
    <!-- Zone 3: Data Tier -->
    <g transform="translate(530, 0)">
      <rect width="240" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <rect width="240" height="30" rx="8" fill="#059669"/>
      <text x="120" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ZONE 3: DATA (10.0.3.0/24)</text>
      <text x="120" y="55" fill="#34d399" font-size="9.5" font-weight="bold" text-anchor="middle">PostgreSQL Database Vault</text>
      <rect x="20" y="70" width="200" height="50" rx="6" fill="#0f172a" stroke="#059669"/>
      <text x="30" y="90" fill="#cbd5e1" font-size="8.5">• Listens: Port 5432/TCP</text>
      <text x="30" y="106" fill="#cbd5e1" font-size="8.5">• ZERO Internet Ingress/Egress</text>
      
      <rect x="20" y="140" width="200" height="85" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="30" y="160" fill="#fca5a5" font-size="9" font-weight="bold">Lateral Probe Blocked:</text>
      <text x="30" y="178" fill="#fca5a5" font-size="8.5">DMZ -> Data:5432 Probe</text>
      <text x="30" y="194" fill="#ef4444" font-size="8.5">DROPPED BY FIREWALL [✗]</text>
      <text x="30" y="210" fill="#cbd5e1" font-size="8.5">Database remains untouched</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Network firewalls between subnets guarantee that compromising an edge tier does not compromise data stores</text>
</svg>`,
      caption: {
        en: 'The three-tier segmentation architecture evaluates 4 inter-zone flows: 3 authorized flows pass, and 1 direct lateral probe from the DMZ to the database is dropped.',
        bn: 'তিন-স্তরীয় সেগমেন্টেশন আর্কিটেকচার ৪ টি আন্তঃজোন ট্রাফিক প্রবাহ মূল্যায়ন করে: ৩ টি অনুমোদিত প্রবাহ সফল হয় এবং ডিএমজেড থেকে ডাটাবেজে ১ টি সরাসরি ল্যাটারাল অনুপ্রবেশ বাতিল হয়।'
      },
    },
    {
      type: 'heading',
      id: 'segmentation-simulator-code',
      text: {
        en: 'Building a Network Segmentation Policy Engine in Node.js',
        bn: 'Node.js-এ নেটওয়ার্ক সেগমেন্টেশন পলিসি ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'network-segmentation-engine.js',
      code: `// Deterministic Network Segmentation & Inter-Zone Firewall Engine
class NetworkSegmentationPolicy {
  constructor() {
    this.zones = {
      INTERNET: '0.0.0.0/0 (Public Internet)',
      DMZ: '10.0.1.0/24 (Public Web Reverse Proxy Tier)',
      APP: '10.0.2.0/24 (Private API Application Tier)',
      DATA: '10.0.3.0/24 (Isolated Relational Database Tier)'
    };

    // Explicit inter-zone communication whitelist matrix
    this.permittedFlows = [
      {
        from: 'INTERNET',
        to: 'DMZ',
        destPort: 443,
        protocol: 'TCP',
        label: 'Public Ingress to DMZ Reverse Proxy'
      },
      {
        from: 'DMZ',
        to: 'APP',
        destPort: 8080,
        protocol: 'TCP',
        label: 'DMZ Reverse Proxy Forwarding to App API'
      },
      {
        from: 'APP',
        to: 'DATA',
        destPort: 5432,
        protocol: 'TCP',
        label: 'App Tier Queries PostgreSQL Database'
      }
      // Note: Direct DMZ -> DATA is strictly FORBIDDEN!
    ];
  }

  // Inspect and evaluate cross-zone traffic flow
  evaluateFlow(flow) {
    for (const rule of this.permittedFlows) {
      const matchFrom = rule.from === flow.from;
      const matchTo = rule.to === flow.to;
      const matchPort = rule.destPort === flow.destPort;
      const matchProto = rule.protocol === flow.protocol;

      if (matchFrom && matchTo && matchPort && matchProto) {
        return {
          verdict: 'PERMIT',
          reason: rule.label,
          threatLevel: 'BENIGN'
        };
      }
    }

    // Inter-zone firewall drop
    return {
      verdict: 'BLOCK',
      reason: \`LATERAL MOVEMENT VIOLATION: Direct flow \${flow.from} -> \${flow.to}:\${flow.destPort}/\${flow.protocol} is forbidden\`,
      threatLevel: 'CRITICAL_LATERAL_PROBE'
    };
  }
}

const policy = new NetworkSegmentationPolicy();

// 4 distinct inter-zone network traffic flows to evaluate
const trafficFlows = [
  {
    name: 'Public HTTPS Web Client Ingress',
    from: 'INTERNET',
    to: 'DMZ',
    destPort: 443,
    protocol: 'TCP'
  },
  {
    name: 'DMZ Reverse Proxy to Internal App API',
    from: 'DMZ',
    to: 'APP',
    destPort: 8080,
    protocol: 'TCP'
  },
  {
    name: 'App Server to PostgreSQL Database Query',
    from: 'APP',
    to: 'DATA',
    destPort: 5432,
    protocol: 'TCP'
  },
  {
    name: 'Compromised DMZ Direct Database Probe',
    from: 'DMZ',
    to: 'DATA',
    destPort: 5432,
    protocol: 'TCP'
  }
];

let totalPermitted = 0;
let totalBlocked = 0;

console.log('=== Inter-Zone Network Flow Evaluation ===\\n');
trafficFlows.forEach((flow, index) => {
  const result = policy.evaluateFlow(flow);
  if (result.verdict === 'PERMIT') {
    totalPermitted++;
    console.log(\`[\${index + 1}] PERMIT [✓]: \${flow.name}\`);
    console.log(\`    Flow:   \${flow.from} -> \${flow.to}:\${flow.destPort}/\${flow.protocol}\`);
    console.log(\`    Policy: \${result.reason}\\n\`);
  } else {
    totalBlocked++;
    console.log(\`[\${index + 1}] BLOCK  [✗]: \${flow.name}\`);
    console.log(\`    Flow:   \${flow.from} -> \${flow.to}:\${flow.destPort}/\${flow.protocol}\`);
    console.log(\`    Policy: \${result.reason}\\n\`);
  }
});

console.log('=== Segmentation Audit Summary ===');
console.log('Total Inter-Zone Flows Evaluated:', trafficFlows.length);
console.log('Permitted Flows (Authorized):   ', totalPermitted);
console.log('Blocked Lateral Traversal Probes:', totalBlocked);`,
      caption: {
        en: 'The segmentation engine evaluates 4 inter-zone flows: 3 legitimate flows pass and 1 unauthorized lateral probe from the DMZ directly to the database is blocked.',
        bn: 'সেগমেন্টেশন ইঞ্জিনটি ৪ টি আন্তঃজোন ট্রাফিক প্রবাহ মূল্যায়ন করে: ৩ টি বৈধ প্রবাহ সফল হয় এবং ডিএমজেড থেকে ডাটাবেজে ১ টি অননুমোদিত ল্যাটারাল অনুপ্রবেশ বাতিল হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Microsegmentation in Modern Cloud & Kubernetes Environments',
        bn: 'আধুনিক ক্লাউড এবং কুবারনেটিসে মাইক্রোসেগমেন্টেশন'
      },
      text: {
        en: 'Traditional subnets and VLANs only segment traffic at the physical switch or router level. In modern containerized architectures, thousands of pods share the same virtual network bridge. Without deploying Kubernetes NetworkPolicies or eBPF service meshes (such as Cilium), a compromised frontend pod can easily reach the backend payment container over the flat pod network. Modern microsegmentation enforces zero-trust firewall rules down to the individual container level.',
        bn: 'ঐতিহ্যবাহী সাবনেট ও ভিএলএএন কেবল ফিজিক্যাল সুইচ বা রাউটার স্তরে ট্রাফিক আলাদা করে। আধুনিক কন্টেইনার সিস্টেমে হাজার হাজার পড একই ভার্চুয়াল নেটওয়ার্ক ব্রিজ শেয়ার করে। কুবারনেটিস NetworkPolicies বা eBPF সার্ভিস মেশ (যেমন Cilium) ব্যবহার না করলে একটি সাধারণ ফ্রন্টএন্ড পড হ্যাক করেই আক্রমণকারী ফ্ল্যাট পড নেটওয়ার্ক দিয়ে পেমেন্ট প্রসেসিং কন্টেইনারে পৌঁছে যেতে পারে। আধুনিক মাইক্রোসেগমেন্টেশন প্রতিটি কন্টেইনারের স্তরে জিরো-ট্রাস্ট ফায়ারওয়াল নিশ্চিত করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'netsec-seg-ex-1',
      kind: 'predict',
      topic: 'permitted-flows-count',
      question: {
        en: 'Out of the 4 evaluated inter-zone network traffic flows, how many flows were authorized by the three-tier segmentation policy? (3). Type the number.',
        bn: 'মূল্যায়িত ৪ টি আন্তঃজোন নেটওয়ার্ক ট্রাফিক প্রবাহের মধ্যে সর্বমোট কয়টি তিন-স্তরীয় সেগমেন্টেশন পলিসির মাধ্যমে অনুমোদিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 flows were permitted.',
        bn: 'ঠিক ৩ টি প্রবাহ অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 4 flows, 3 were permitted: Internet to DMZ (443), DMZ to App (8080), and App to Database (5432).',
        bn: '৪ টির মধ্যে ৩ টি অনুমোদিত হয়েছিল: ইন্টারনেট থেকে ডিএমজেড (৪৪৩), ডিএমজেড থেকে অ্যাপ (৮০৮০) এবং অ্যাপ থেকে ডাটাবেজ (৫৪৩২)।'
      },
    },
    {
      id: 'netsec-seg-ex-2',
      kind: 'mcq',
      topic: 'lateral-movement-containment',
      question: {
        en: 'How does network segmentation contain an adversary who has achieved remote code execution on a public web server in the DMZ?',
        bn: 'পাবলিক ডিএমজেডে থাকা ওয়েব সার্ভারে কোনো আক্রমণকারী রিমোট কোড এক্সিকিউশন ঘটালেও নেটওয়ার্ক সেগমেন্টেশন কীভাবে তাকে আটকে রাখে?'
      },
      options: [
        {
          en: 'Internal firewalls forbid the DMZ host from establishing outbound network connections directly to backend database subnets, containing the breach to the isolated DMZ zone',
          bn: 'অভ্যন্তরীণ ফায়ারওয়াল ডিএমজেড হোস্টকে সরাসরি ডাটাবেজ সাবনেটে কোনো বহির্গামী নেটওয়ার্ক সংযোগ তৈরি করতে দেয় না, যার ফলে আক্রমণটি ডিএমজেড জোনের ভেতরেই সীমাবদ্ধ থাকে',
        },
        {
          en: 'It deletes all user passwords stored inside database hard drives',
          bn: 'এটি ডাটাবেজ হার্ডড্রাইভে সংরক্ষিত সমস্ত ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে',
        },
        {
          en: 'It forces server cooling fans to spin in reverse direction',
          bn: 'এটি সার্ভারের কুলিং ফ্যানকে উল্টো দিকে ঘুরতে বাধ্য করে',
        },
        {
          en: 'It turns off the electrical lights in the server room',
          bn: 'এটি সার্ভার রুমের সমস্ত বৈদ্যুতিক বাতি বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Internal firewalls block DMZ hosts from directly reaching backend databases.',
        bn: 'অভ্যন্তরীণ ফায়ারওয়াল ডিএমজেড হোস্টকে ডাটাবেজে সরাসরি ঢুকতে বাধা দেয়।'
      },
      explanation: {
        en: 'Without direct network connectivity, the attacker cannot pivot to the database tier, preventing automated data exfiltration.',
        bn: 'সরাসরি নেটওয়ার্ক পথ না থাকায় হ্যাকার ডাটাবেজে পৌঁছাতে পারে না এবং ডেটা চুরি প্রতিহত হয়।'
      },
    },
    {
      id: 'netsec-seg-ex-3',
      kind: 'mcq',
      topic: 'vlan-8021q-tagging',
      question: {
        en: 'What is the role of IEEE 802.1Q VLAN tagging on enterprise network switches?',
        bn: 'এন্টারপ্রাইজ নেটওয়ার্ক সুইচে IEEE 802.1Q ভিএলএএন (VLAN) ট্যাগের ভূমিকা কী?'
      },
      options: [
        {
          en: 'It inserts a 4-byte tag into the Ethernet frame header containing a 12-bit VLAN ID, allowing a single physical switch to divide traffic into isolated virtual broadcast domains',
          bn: 'এটি ইথারনেট ফ্রেম হেডারে ১২-বিট ভিএলএএন আইডিসহ একটি ৪-বাইটের ট্যাগ যুক্ত করে, যার ফলে একটিমাত্র ফিজিক্যাল সুইচ ট্রাফিককে একাধিক বিচ্ছিন্ন ভার্চুয়াল ব্রডকাস্ট ডোমেইনে ভাগ করতে পারে',
        },
        {
          en: 'It makes all network cables carry data twice as fast',
          bn: 'এটি সমস্ত নেটওয়ার্ক তারকে দ্বিগুণ দ্রুতগতিতে ডেটা পরিবহন করতে সাহায্য করে',
        },
        {
          en: 'It requires administrators to wear safety glasses in datacenters',
          bn: 'এটি ডেটা সেন্টারে প্রবেশ করার সময় প্রশাসকদের চশমা পরা বাধ্যতামূলক করে',
        },
        {
          en: 'It changes the mouse cursor icon to a small flag',
          bn: 'এটি মাউস কার্সার আইকনকে একটি ছোট পতাকায় রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: '802.1Q tags Ethernet frames with a VLAN ID to segregate traffic on shared switches.',
        bn: '802.1Q ইথারনেট ফ্রেমে ভিএলএএন আইডি বসিয়ে ট্রাফিক আলাদা করে রাখে।'
      },
      explanation: {
        en: 'VLANs isolate traffic at Layer 2. A host in VLAN 10 cannot see ARP broadcasts or traffic from VLAN 20 without passing through an explicit Layer 3 router or firewall.',
        bn: 'ভিএলএএন লেয়ার ২-এ ট্রাফিক আলাদা করে। ফলে ভিএলএএন ১০ এ থাকা কোনো হোস্ট লেয়ার ৩ রাউটার বা ফায়ারওয়াল ছাড়া ভিএলএএন ২০ এর ব্রডকাস্ট বা ট্রাফিক দেখতে পায় না।'
      },
    },
    {
      id: 'netsec-seg-ex-4',
      kind: 'predict',
      topic: 'blocked-flows-count',
      question: {
        en: 'How many unauthorized lateral movement flows were blocked by the inter-zone segmentation firewall? (1). Type the number.',
        bn: 'আন্তঃজোন সেগমেন্টেশন ফায়ারওয়াল দ্বারা সর্বমোট কয়টি অননুমোদিত ল্যাটারাল অনুপ্রবেশ প্রবাহ বাতিল হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Exactly 1 lateral probe was blocked.',
        bn: 'ঠিক ১ টি ল্যাটারাল অনুপ্রবেশ বাতিল হয়েছিল।'
      },
      explanation: {
        en: 'The direct DMZ to database flow on port 5432 violated tier isolation rules and was blocked with a lateral movement violation.',
        bn: 'ডিএমজেড থেকে ডাটাবেজে পোর্ট ৫৪৩২-এর সরাসরি প্রবাহটি নিয়ম লঙ্ঘন করায় ল্যাটারাল ভায়োলেশন হিসেবে ব্লক হয়।'
      },
    },
  ],
  quiz: {
    id: 'network-segmentation-quiz',
    title: {
      en: 'Zero Trust Network Segmentation & Architecture Quiz',
      bn: 'জিরো ট্রাস্ট নেটওয়ার্ক সেগমেন্টেশন ও আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'netsec-seg-qz-1',
        kind: 'mcq',
        topic: 'vlan-hopping-attack',
        question: {
          en: 'What is a "VLAN Hopping" attack (such as double-tagging), and how is it mitigated on physical network switches?',
          bn: '"ভিএলএএন হপিং" (VLAN Hopping বা double-tagging) আক্রমণ কী এবং ফিজিক্যাল নেটওয়ার্ক সুইচে কীভাবে এটি প্রতিহত করা হয়?'
        },
        options: [
          {
            en: 'An attacker crafts an Ethernet frame with two 802.1Q tags to trick switches into stripping the outer tag and forwarding the frame into a foreign target VLAN. Changing the native VLAN on trunks away from default VLAN 1 mitigates this risk',
            bn: 'আক্রমণকারী দুটি 802.1Q ট্যাগযুক্ত ইথারনেট ফ্রেম তৈরি করে সুইচকে বিভ্রান্ত করে অন্য ভিএলএএনে প্যাকেট পাঠিয়ে দেয়। ট্রাঙ্ক পোর্টে নেটিভ ভিএলএএন হিসেবে ডিফল্ট VLAN 1 পরিবর্তন করে এই ঝুঁকি প্রতিহত করা হয়',
          },
          {
            en: 'An attacker jumps over the physical fence outside the datacenter building',
            bn: 'আক্রমণকারী ডেটা সেন্টার ভবনের বাইরের ফিজিক্যাল সীমানা প্রাচীর টপকে ভেতরে প্রবেশ করে',
          },
          {
            en: 'An attack that deletes all operating system files from laptop computers',
            bn: 'এমন একটি আক্রমণ যা ল্যাপটপ কম্পিউটার থেকে সমস্ত অপারেটিং সিস্টেম ফাইল মুছে ফেলে',
          },
          {
            en: 'An attack that causes keyboard keys to stick permanently',
            bn: 'এমন একটি আক্রমণ যা কিবোর্ডের বাটনগুলোকে স্থায়ীভাবে আটকে রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Double-tagging exploits default native VLAN 1 on trunk ports to hop broadcast domains.',
          bn: 'ডাবল-ট্যাগিং ট্রাঙ্ক পোর্টের ডিফল্ট নেটিভ ভিএলএএনকে কাজে লাগিয়ে অন্য জোনে ঢোকে।'
        },
        explanation: {
          en: 'By disabling DTP (Dynamic Trunking Protocol) on user access ports and dedicating an unused VLAN ID for native trunk traffic, switch administrators eliminate VLAN hopping.',
          bn: 'ইউজার পোর্টে ট্রাঙ্কিং বন্ধ রেখে এবং অব্যবহৃত ভিএলএএনকে নেটিভ করে এই হপিং ঝুঁকি পুরোপুরি বন্ধ করা যায়।'
        },
      },
      {
        id: 'netsec-seg-qz-2',
        kind: 'mcq',
        topic: 'zero-trust-network-access-ztna',
        question: {
          en: 'How does modern Zero Trust Network Access (ZTNA) differ from traditional broad-access VPN tunnels?',
          bn: 'ঐতিহ্যবাহী বিস্তৃত-অ্যাক্সেস ভিপিএন টানেলের তুলনায় আধুনিক জিরো ট্রাস্ট নেটওয়ার্ক অ্যাক্সেস (ZTNA) কীভাবে আলাদা?'
        },
        options: [
          {
            en: 'Traditional VPNs grant blanket network access to an entire corporate subnet upon login, whereas ZTNA creates dynamic, encrypted micro-tunnels connecting the authenticated user exclusively to specific individual applications',
            bn: 'ঐতিহ্যবাহী ভিপিএন একবার লগইন করলে পুরো কর্পোরেট সাবনেটের সব ডিভাইসে অবাধ প্রবেশের সুযোগ দেয়, যেখানে ZTNA ব্যবহারকারীকে পুরো নেটওয়ার্ক না দিয়ে কেবল নির্দিষ্ট অনুমোদিত অ্যাপ্লিকেশনের সাথে মাইক্রো-টানেলে যুক্ত করে',
          },
          {
            en: 'ZTNA requires employees to work only during daytime hours',
            bn: 'ZTNA কর্মচারীদের কেবল দিনের বেলা কাজ করতে বাধ্য করে',
          },
          {
            en: 'Traditional VPNs only run on desktop computers manufactured in 2010',
            bn: 'ঐতিহ্যবাহী ভিপিএন কেবল ২০১০ সালে তৈরি ডেস্কটপ কম্পিউটারে চলতে পারে',
          },
          {
            en: 'ZTNA makes laptop batteries last ten times longer',
            bn: 'ZTNA ল্যাপটপের ব্যাটারির আয়ু দশ গুণ বাড়িয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'ZTNA authorizes access per application, not per whole network subnet.',
          bn: 'ZTNA পুরো নেটওয়ার্কের বদলে কেবল নির্দিষ্ট অ্যাপ্লিকেশনের প্রবেশাধিকার দেয়।'
        },
        explanation: {
          en: 'ZTNA prevents lateral movement: if an engineer account is compromised, the attacker cannot scan or access unassigned corporate servers.',
          bn: 'ZTNA ল্যাটারাল মুভমেন্ট আটকায়: একজন ইঞ্জিনিয়ারের অ্যাকাউন্ট হ্যাক হলেও আক্রমণকারী অন্যান্য অভ্যন্তরীণ সার্ভার দেখতে পারে না।'
        },
      },
      {
        id: 'netsec-seg-qz-3',
        kind: 'mcq',
        topic: 'kubernetes-network-policy-default-deny',
        question: {
          en: 'Why is defining a default-deny ingress and egress NetworkPolicy mandatory in Kubernetes production clusters?',
          bn: 'কুবারনেটিস প্রোডাকশন ক্লাস্টারে ডিফল্ট-ডিনাই ইনগ্রেস এবং এগ্রেস NetworkPolicy নির্ধারণ করা কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'By default, the Kubernetes flat pod network permits unrestricted, unfirewalled communication between every pod across all namespaces; default-deny mandates explicit whitelisting between microservices',
            bn: 'ডিফল্টভাবে কুবারনেটিসের ফ্ল্যাট পড নেটওয়ার্ক যেকোনো নেমস্পেসের প্রতিটি পডের মধ্যে কোনো বাধা ছাড়াই যোগাযোগের সুযোগ দেয়; ডিফল্ট-ডিনাই সার্ভিসগুলোর মাঝে স্পষ্ট অনুমোদন বাধ্যতামূলক করে',
          },
          {
            en: 'Because Kubernetes pods crash after running for three hours without a policy',
            bn: 'কারণ কোনো পলিসি না থাকলে কুবারনেটিস পড তিন ঘণ্টা চলার পরই ক্র্যাশ করে',
          },
          {
            en: 'Because NetworkPolicy increases the download speed of container images',
            bn: 'কারণ NetworkPolicy কন্টেইনার ইমেজ ডাউনলোডের গতি বাড়িয়ে দেয়',
          },
          {
            en: 'Because international law forbids containers from communicating on Tuesdays',
            bn: 'কারণ আন্তর্জাতিক আইনে মঙ্গলবার কন্টেইনারগুলোর মধ্যে যোগাযোগ নিষিদ্ধ',
          },
        ],
        answer: 0,
        hint: {
          en: 'Kubernetes pod networks are completely flat by default without NetworkPolicies.',
          bn: 'NetworkPolicy ছাড়া কুবারনেটিসের পড নেটওয়ার্ক ডিফল্টভাবে সম্পূর্ণ ফ্ল্যাট থাকে।'
        },
        explanation: {
          en: 'Applying podSelector: {} with policyTypes: [Ingress, Egress] blocks all pod communication until explicit ingress/egress rules are authored.',
          bn: 'ডিফল্ট-ডিনাই পলিসি প্রয়োগ করলে সব পডের যোগাযোগ বন্ধ হয়ে যায়, এবং কেবল প্রয়োজনীয় সার্ভিসগুলোর মাঝেই অনুমোদিত পথ খোলা থাকে।'
        },
      },
      {
        id: 'netsec-seg-qz-4',
        kind: 'mcq',
        topic: 'database-dmz-isolation-rationale',
        question: {
          en: 'Why must relational databases NEVER have a direct public internet IP address or reside within the DMZ subnet?',
          bn: 'রিলেশনাল ডাটাবেজগুলোর কেন কখনোই পাবলিক ইন্টারনেট আইপি থাকা উচিত নয় বা ডিএমজেড সাবনেটে থাকা উচিত নয়?'
        },
        options: [
          {
            en: 'Databases are complex stateful stores containing all sensitive corporate assets; exposing them directly leaves them vulnerable to zero-day authentication bypasses, automated brute-force attacks, and direct SQL exploitation',
            bn: 'ডাটাবেজ হলো সমস্ত সংবেদনশীল তথ্যের আধার; এদের সরাসরি উন্মুক্ত রাখলে তা জিরো-ডে প্রমাণীকরণ ত্রুটি, স্বয়ংক্রিয় ব্রুট-ফোর্স আক্রমণ এবং সরাসরি এসকিউএল শোষণের ঝুঁকিতে পড়ে',
          },
          {
            en: 'Because database hard drives overheat if connected to public networks',
            bn: 'কারণ পাবলিক নেটওয়ার্কে যুক্ত থাকলে ডাটাবেজের হার্ডড্রাইভ অতিরিক্ত গরম হয়ে যায়',
          },
          {
            en: 'Because relational databases cannot store numbers that have decimals',
            bn: 'কারণ রিলেশনাল ডাটাবেজ দশমিকযুক্ত সংখ্যা সংরক্ষণ করতে পারে না',
          },
          {
            en: 'Because internet cables only support text files and cannot carry database rows',
            bn: 'কারণ ইন্টারনেটের তার কেবল টেক্সট ফাইল সমর্থন করে কিন্তু ডাটাবেজের তথ্য পরিবহন করতে পারে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Databases belong in deeply isolated private tiers reachable only through application proxies.',
          bn: 'ডাটাবেজ সর্বদা গভীর প্রাইভেট স্তরে রাখা উচিত যা কেবল অ্যাপ্লিকেশন প্রক্সি দিয়ে প্রবেশযোগ্য।'
        },
        explanation: {
          en: 'Databases should only listen on private RFC 1918 addresses without internet gateways, guarded by application intermediaries.',
          bn: 'ডাটাবেজকে কেবল প্রাইভেট আইপিতে রাখা উচিত এবং কোনো ইন্টারনেট গেটওয়ে ছাড়া শুধু অ্যাপ্লিকেশন দিয়ে অ্যাক্সেস দিতে হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'port-scanning',
    title: {
      en: 'Port Scanning & Reconnaissance Defense: SYN Stealth & Knocking',
      bn: 'পোর্ট স্ক্যানিং ও রেকোনাইসেন্স প্রতিরক্ষা: SYN স্টিলথ ও নকিং'
    },
  },
};
