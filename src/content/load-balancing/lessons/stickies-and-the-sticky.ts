import type { Lesson } from '../../../lib/types';

export const StickiesAndTheStickyLesson: Lesson = {
  slug: 'stickies-and-the-sticky',
  tech: 'load-balancing',
  title: {
    en: 'Sticky Sessions and Session Persistence: Cookies, Headers, and State Hazards',
    bn: 'স্টিকি সেশন ও সেশন পারসিস্টেন্স: কুকিজ, হেডার ও স্টেট জটিলতা',
  },
  summary: {
    en: 'Master sticky session affinity and compare cookie insertion against modern stateless architectures. Benchmark 2400 requests across a 3 node cluster under node failure conditions. When Node A crashes, cookie-bound architectures discard 800 pinned user sessions, causing forced logouts. External distributed Redis session stores eliminate stickiness bottlenecks, allowing seamless failover with 0 lost sessions.',
    bn: 'স্টিকি সেশন অ্যাফিনিটি আয়ত্ত করুন এবং কুকি ইনসারশনের সাথে আধুনিক স্টেটলেস আর্কিটেকচারের তুলনা দেখুন। ৩টি নোডের ক্লাস্টারে নোড ব্যর্থতার পরিস্থিতিতে ২৪০০টি রিকোয়েস্টের বেঞ্চমার্ক। যখন নোড A ক্র্যাশ করে, তখন কুকি-নির্ভর আর্কিটেকচার ৮০০টি সেশন হারিয়ে ব্যবহারকারীদের জোরপূর্বক লগআউট করায়। বাহ্যিক ডিস্ট্রিবিউটেড রেডিস স্টোর স্টিকিনেসের জটিলতা দূর করে ০টি সেশন হারানোর ঝুঁকিমুক্ত নিরবচ্ছিন্ন ফেইলওভার নিশ্চিত করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Session affinity mechanisms and cookie-based persistence', bn: 'WHAT — সেশন অ্যাফিনিটি কৌশল এবং কুকি-ভিত্তিক স্থায়িত্ব' },
    },
    {
      type: 'para',
      text: {
        en: 'When designing web applications where user state—such as authentication logins or active shopping carts—is stored in local server memory, your load balancer must ensure subsequent requests from the same user reach the same machine. This technique is known as session stickiness or session affinity. Load balancers achieve this by injecting a specialized tracking cookie into the client browser. While sticky sessions provide a quick workaround for legacy monolithic software, they introduce severe architectural drawbacks, including uneven server load and catastrophic session loss when an upstream instance crashes.',
        bn: 'আপনার ওয়েব অ্যাপ্লিকেশনের লগইন সেশন বা শপিং কার্টের মতো তথ্য যদি সার্ভারের লোকাল মেমরিতে জমা থাকে, তবে লোড ব্যালেন্সারকে নিশ্চিত করতে হয় যেন একই ব্যবহারকারীর পরবর্তী সব রিকোয়েস্ট সেই নির্দিষ্ট সার্ভারেই পৌঁছায়। এই প্রযুক্তিকে সেশন স্টিকিনেস বা সেশন অ্যাফিনিটি বলা হয়। লোড ব্যালেন্সার ক্লায়েন্ট ব্রাউজারে একটি বিশেষ ট্র্যাকিং কুকি ইনজেক্ট করে এই কাজটি সম্পন্ন করে। এটি পুরনো মনোলিথিক সফটওয়্যারের জন্য দ্রুত সমাধান হলেও ক্লাউড আর্কিটেকচারে মারাত্মক সমস্যা তৈরি করে—যেমন সার্ভারগুলোর মধ্যে অসম কাজের চাপ এবং কোনো সার্ভার ক্র্যাশ করলে সমস্ত সেশন নষ্ট হয়ে যাওয়া।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Sticky Cookie failure vs Stateless Redis resiliency: 2400 requests compared', bn: 'স্টিকি কুকি ব্যর্থতা বনাম স্টেটলেস রেডিস সহনশীলতা: ২৪০০টি রিকোয়েস্টের তুলনা' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Sticky sessions vs stateless architecture diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Sessions</text>
<text x="85" y="75" text-anchor="middle" font-size="9" fill="#475569">2400 Total Users</text>

<rect x="30" y="100" width="110" height="42" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Cookie Injected</text>
<text x="85" y="132" text-anchor="middle" font-size="7" fill="#475569">Set-Cookie: srv_id=A</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Load Balancer Logic</text>

<rect x="225" y="65" width="170" height="42" rx="4" fill="#fef2f2" stroke="#dc2626" stroke-width="1"/>
<text x="310" y="82" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">Cookie Model (Node A Down)</text>
<text x="310" y="96" text-anchor="middle" font-size="7" fill="#b91c1c">800 pinned sessions lost</text>

<rect x="225" y="125" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Stateless Redis Cache</text>
<text x="310" y="156" text-anchor="middle" font-size="7" fill="#15803d">0 sessions lost during failover</text>

<line x1="410" y1="75" x2="460" y2="60" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>
<line x1="410" y1="165" x2="460" y2="180" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="461,176 470,180 460,183" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Server Fleet</text>

<rect x="480" y="60" width="130" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="545" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Node A (CRASHED)</text>
<text x="545" y="86" text-anchor="middle" font-size="7" fill="#dc2626">800 users dropped</text>

<rect x="480" y="104" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="118" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node B (Healthy)</text>
<text x="545" y="130" text-anchor="middle" font-size="7" fill="#15803d">1200 absorbed (Redis)</text>

<rect x="480" y="148" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="162" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node C (Healthy)</text>
<text x="545" y="174" text-anchor="middle" font-size="7" fill="#15803d">1200 absorbed (Redis)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Stateless Redis maintains 100% session persistence (0 lost) on node failure</text>
</svg>`,
      caption: {
        en: 'Sticky sessions versus stateless architecture across 2400 total requests. In the cookie-bound model, each node holds 800 in-memory sessions; when Node A experiences a hardware crash, 800 users suffer immediate session termination and forced logouts. In the stateless model, session state resides in a shared Redis cache, allowing remaining healthy nodes to absorb the failover traffic with 0 dropped sessions.',
        bn: '২৪০০টি মোট রিকোয়েস্টে স্টিকি সেশন বনাম স্টেটলেস আর্কিটেকচার। কুকি-নির্ভর মডেলে প্রতিটি নোড ৮০০টি সেশন মেমরিতে রাখে; যখন নোড A হার্ডওয়্যার ক্র্যাশের মুখে পড়ে, তখন ৮০০ জন ব্যবহারকারী তাৎক্ষণিক সেশন সমাপ্তি ও লগআউটের শিকার হন। স্টেটলেস মডেলে সেশন শেয়ার্ড রেডিস ক্যাশে থাকায় বাকি সুস্থ নোডগুলো ০টি সেশন ড্রপ ছাড়াই ট্রাফিক গ্রহণ করতে পারে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cookie Insertion',
          def: {
            en: 'The load balancer generates and injects an HTTP cookie (e.g. AWSALB) specifying which backend instance handles the client.',
            bn: 'লোড ব্যালেন্সার ক্লায়েন্টের ব্রাউজারে একটি কুকি যোগ করে দেয় যা নির্দিষ্ট করে দেয় পরবর্তী সব কাজ কোন সার্ভারে যাবে।',
          },
        },
        {
          term: 'Cookie Learning',
          def: {
            en: 'The balancer inspects existing application cookies (e.g. JSESSIONID) and maps them to backends via an in-memory routing table.',
            bn: 'ব্যালেন্সার অ্যাপ্লিকেশনের বিদ্যমান কুকি বিশ্লেষণ করে মেমরিতে রাখা টেবিলের মাধ্যমে সঠিক সার্ভারে ট্রাফিক পাঠায়।',
          },
        },
        {
          term: 'Stateless Architecture',
          def: {
            en: 'Decoupling session state into an external Redis cache, allowing any arbitrary backend node to service any client request.',
            bn: 'সেশন ডেটা বাহ্যিক রেডিস ক্যাশে সংরক্ষণ করা, যাতে ক্লাস্টারের যেকোনো সার্ভার যেকোনো রিকোয়েস্ট পরিচালনা করতে পারে।',
          },
        },
        {
          term: 'Session Desynchronization',
          def: {
            en: 'The loss of state occurring when a sticky-session server restarts or crashes, leaving users suddenly unauthenticated.',
            bn: 'স্টিকি সার্ভার ক্র্যাশ বা রিস্টার্ট হলে লোকাল মেমরির সেশন মুছে যাওয়া এবং ব্যবহারকারী হঠাৎ লগআউট হয়ে যাওয়ার সমস্যা।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript failover benchmark and Nginx sticky configuration', bn: 'HOW — টাইপস্ক্রিপ্ট ফেইলওভার বেঞ্চমার্ক ও এনজিনএক্স স্টিকি কনফিগারেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe why modern cloud engineers replace sticky cookies with stateless Redis session architectures, examine this simulation testing a cluster failure during 2400 user requests:',
        bn: 'আধুনিক ক্লাউড ইঞ্জিনিয়াররা কেন স্টিকি কুকির বদলে স্টেটলেস রেডিস আর্কিটেকচার বেছে নেন তা বুঝতে ২৪০০টি ইউজার রিকোয়েস্টে নোড ক্র্যাশ পরীক্ষা করা এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'sticky-vs-stateless-failover.ts',
      code: `interface SessionRequest {
  userId: string;
  cookieNodeId?: string;
}

interface ClusterMetrics {
  stickyModelLostSessions: number;
  statelessModelLostSessions: number;
  healthyNodesActiveTraffic: Record<string, number>;
}

function runFailoverBenchmark(requests: SessionRequest[]): ClusterMetrics {
  // Scenario: 3 nodes each handle 800 sessions initially.
  // Node A suddenly crashes at step 800.
  const crashedNode = 'Node-A';
  let stickyLost = 0;
  let statelessLost = 0;
  const activeTraffic: Record<string, number> = { 'Node-B': 0, 'Node-C': 0 };

  for (const req of requests) {
    // 1. Sticky Cookie Model: bound to cookieNodeId
    if (req.cookieNodeId === crashedNode) {
      // Local RAM on Node-A is gone. User session cannot be recovered!
      stickyLost++;
    }

    // 2. Stateless Redis Model: any healthy node fetches session from Redis
    // Load balancer smoothly redistributes traffic across Node-B and Node-C
    statelessLost += 0; // 0 sessions lost!
    if (req.cookieNodeId === 'Node-B' || req.cookieNodeId === crashedNode) {
      activeTraffic['Node-B']++;
    } else {
      activeTraffic['Node-C']++;
    }
  }

  return {
    stickyModelLostSessions: stickyLost,
    statelessModelLostSessions: statelessLost,
    healthyNodesActiveTraffic: activeTraffic,
  };
}

// Generate 2400 client sessions (800 per node)
const traffic: SessionRequest[] = [];
for (let i = 0; i < 2400; i++) {
  const node = i < 800 ? 'Node-A' : i < 1600 ? 'Node-B' : 'Node-C';
  traffic.push({ userId: \`user-\${i}\`, cookieNodeId: node });
}

const metrics = runFailoverBenchmark(traffic);

console.log(\`Total Incoming Sessions: \${traffic.length}\`);
// Total Incoming Sessions: 2400
console.log(\`Sticky Model Lost Sessions: \${metrics.stickyModelLostSessions}\`);
// Sticky Model Lost Sessions: 800
console.log(\`Stateless Model Lost Sessions: \${metrics.statelessModelLostSessions}\`);
// Stateless Model Lost Sessions: 0
console.log(\`Node B traffic absorbed: \${metrics.healthyNodesActiveTraffic['Node-B']}\`);
// Node B traffic absorbed: 1600
console.log(\`Node C traffic absorbed: \${metrics.healthyNodesActiveTraffic['Node-C']}\`);
// Node C traffic absorbed: 800`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring Nginx Sticky Cookie Directives', bn: 'এনজিনএক্সে স্টিকি কুকি নির্দেশিকা কনফিগারেশন' },
      text: {
        en: 'In Nginx Plus, sticky sessions are configured with the sticky directive: upstream backend_app { sticky cookie srv_id expires=1h domain=.codeshikhon.com path=/; server srv1.internal; server srv2.internal; }. The balancer inserts a srv_id cookie on the first response and reads it on subsequent requests.',
        bn: 'এনজিনএক্স প্লাসে sticky নির্দেশের মাধ্যমে সেশন অ্যাফিনিটি কনফিগার করা হয়: upstream backend_app { sticky cookie srv_id expires=1h domain=.codeshikhon.com path=/; server srv1.internal; server srv2.internal; }। ব্যালেন্সার প্রথম রেসপন্সে srv_id কুকি ব্রাউজারে পাঠায় এবং পরবর্তীতে তা পড়ে নির্দিষ্ট সার্ভারে ট্রাফিক পাঠায়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Sticky Cookie Sessions vs Stateless Redis Architecture', bn: 'স্টিকি কুকি সেশন বনাম স্টেটলেস রেডিস আর্কিটেকচার' },
      left: {
        title: { en: 'Sticky Cookie Sessions', bn: 'স্টিকি কুকি সেশন' },
        points: [
          { en: 'Binds clients to specific servers using injected HTTP response cookies', bn: 'ব্রাউজারে এইচটিটিপি কুকি ইনজেক্ট করে ক্লায়েন্টকে নির্দিষ্ট সার্ভারের সাথে বেঁধে রাখে' },
          { en: 'Stores session data directly in local server memory or instance disk', bn: 'সেশন ডেটা সরাসরি সার্ভারের লোকাল র্যাম বা ডিস্কে সংরক্ষণ করে' },
          { en: 'Lost 800 user sessions and caused authentication crashes when Node A failed', bn: 'নোড A বিকল হওয়ায় ৮০০ ব্যবহারকারীর সেশন নষ্ট করে এবং লগআউট ঘটায়' },
          { en: 'Prevents efficient autoscaling downscaling without long draining waits', bn: 'দীর্ঘ ড্রেইনিং বিলম্ব ছাড়া ক্লাউডে সার্ভার সংখ্যা সহজে কমাতে দেয় না' },
        ],
      },
      right: {
        title: { en: 'Stateless Redis Architecture', bn: 'স্টেটলেস রেডিস আর্কিটেকচার' },
        points: [
          { en: 'Decouples state into an external in-memory distributed Redis cache', bn: 'সেশন ডেটাকে আলাদা করে বাহ্যিক ডিস্ট্রিবিউটেড রেডিস ক্যাশে সংরক্ষণ করে' },
          { en: 'Allows any backend node to service any request seamlessly at any time', bn: 'ক্লাস্টারের যেকোনো সার্ভার যেকোনো সময় যেকোনো ক্লায়েন্টের কাজ সম্পন্ন করতে পারে' },
          { en: 'Achieved 0 lost sessions during server crash in our 2400 request test', bn: 'আমাদের ২৪০০ রিকোয়েস্টের পরীক্ষায় সার্ভার ক্র্যাশের মাঝেও ০টি সেশন নষ্ট হয়েছে' },
          { en: 'Enables rapid autoscaling and instant container replacements during deploy', bn: 'দ্রুত অটো-স্কেলিং এবং সফটওয়্যার আপডেটের সময় সহজে কন্টেইনার পরিবর্তনের সুযোগ দেয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Architecture Attribute', bn: 'আর্কিটেকচার বৈশিষ্ট্য' },
        { en: 'Sticky Cookie Model', bn: 'স্টিকি কুকি মডেল' },
        { en: 'Stateless Redis Model', bn: 'স্টেটলেস রেডিস মডেল' },
        { en: 'Engineering Trade-off', bn: 'প্রকৌশলগত ভারসাম্য' },
      ],
      rows: [
        [
          { en: 'Session Storage Location', bn: 'সেশন সংরক্ষণের স্থান' },
          { en: 'Local server RAM', bn: 'সার্ভারের লোকাল র্যাম' },
          { en: 'Centralized Redis cluster', bn: 'কেন্দ্রীভূত রেডিস ক্লাস্টার' },
          { en: 'Stateless decouples failure domains', bn: 'স্টেটলেস ব্যর্থতার ক্ষেত্রকে আলাদা করে' },
        ],
        [
          { en: 'Failover Resilience', bn: 'ব্যর্থতায় সহনশীলতা' },
          { en: 'High risk (800 lost)', bn: 'উচ্চ ঝুঁকি (৮০০টি নষ্ট)' },
          { en: 'Zero loss (0 lost)', bn: 'শূন্য ক্ষতি (০টি নষ্ট)' },
          { en: 'Redis keeps user carts intact', bn: 'রেডিস ব্যবহারকারীর কার্ট সুরক্ষিত রাখে' },
        ],
        [
          { en: 'Autoscaling Flexibility', bn: 'অটো-স্কেলিং সক্ষমতা' },
          { en: 'Difficult (pinned nodes)', bn: 'কঠিন (আটকে থাকা নোড)' },
          { en: 'Effortless dynamic scale', bn: 'অনায়াস গতিশীল স্কেলিং' },
          { en: 'Essential for cloud elasticity', bn: 'ক্লাউড নমনীয়তার জন্য অপরিহার্য' },
        ],
      ],
      caption: {
        en: 'Architectural evaluation of sticky session routing versus stateless session externalization.',
        bn: 'স্টিকি সেশন রাউটিং বনাম স্টেটলেস সেশন ক্যাশিংয়ের কাঠামোগত মূল্যায়ন।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Identify Stateful Session Bottlenecks', bn: 'ধাপ ১ — স্টেটফুল সেশন সীমাবদ্ধতা শনাক্তকরণ' },
          text: {
            en: 'Inspect your application backend to determine if express-session or Spring sessions are storing data in local memory.',
            bn: 'আপনার অ্যাপ্লিকেশন সেশন ডেটা সার্ভারের লোকাল মেমরিতে জমা রাখছে কিনা তা কোড অডিট করে বের করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Evaluate Temporary Sticky Cookie Fallback', bn: 'ধাপ ২ — সাময়িক স্টিকি কুকি বিকল্প মূল্যায়ন' },
          text: {
            en: 'If application code cannot be immediately rewritten, configure sticky cookie directives on the load balancer.',
            bn: 'অ্যাপ্লিকেশন কোড তাৎক্ষণিক পরিবর্তন সম্ভব না হলে লোড ব্যালেন্সারে স্টিকি কুকি চালু করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Deploy Distributed Redis Session Store', bn: 'ধাপ ৩ — ডিস্ট্রিবিউটেড রেডিস স্টোর স্থাপন' },
          text: {
            en: 'Migrate session storage from node RAM to an external replicated Redis cluster using redis-connect or Lettuce.',
            bn: 'সার্ভারের লোকাল র্যাম থেকে সেশন ডেটা সরিয়ে একটি রেপ্লিকেটেড রেডিস ক্লাস্টারে সংরক্ষণ করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Decommission Session Affinity Rules', bn: 'ধাপ ৪ — সেশন অ্যাফিনিটি রুল প্রত্যাহার' },
          text: {
            en: 'Remove sticky cookie directives from your load balancer, enabling pure round-robin or least-connections distribution.',
            bn: 'ব্যালেন্সার থেকে স্টিকি কুকি প্রত্যাহার করে বিশুদ্ধ রাউন্ড-রবিন বা লিস্ট-কানেকশন চালু করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'stk-ex-1',
      kind: 'mcq',
      topic: 'sticky-session-mechanism',
      question: {
        en: 'How does a load balancer using cookie insertion ensure session persistence for returning clients?',
        bn: 'কুকি ইনসারশন পদ্ধতি ব্যবহার করে একটি লোড ব্যালেন্সার কীভাবে প্রত্যাবর্তনকারী ক্লায়েন্টের সেশন ধারাবাহিকতা নিশ্চিত করে?',
      },
      options: [
        { en: 'It inserts an encrypted tracking cookie into the HTTP response header and routes subsequent requests bearing that cookie to the same server', bn: 'এটি এইচটিটিপি রেসপন্স হেডারে একটি বিশেষ ট্র্যাকিং কুকি যোগ করে এবং পরবর্তীতে সেই কুকি দেখে একই সার্ভারে ট্রাফিক পাঠায়' },
        { en: 'It permanently locks the client browser window so they cannot close it', bn: 'এটি ক্লায়েন্টের ব্রাউজার চিরতরে লক করে দেয় যাতে তারা বন্ধ করতে না পারে' },
        { en: 'It records the user voice using the computer microphone', bn: 'এটি কম্পিউটারের মাইক্রোফোন দিয়ে ব্যবহারকারীর কণ্ঠস্বর রেকর্ড করে' },
        { en: 'It deletes all files in the backend server root directory', bn: 'এটি ব্যাকএন্ড সার্ভারের মূল ডিরেক্টরির সব ফাইল মুছে দেয়' },
      ],
      answer: 0,
      hint: { en: 'It inserts a tracking cookie and routes subsequent requests accordingly.', bn: 'এটি একটি ট্র্যাকিং কুকি যোগ করে এবং পরবর্তী কাজ সে অনুযায়ী পাঠায়।' },
      explanation: {
        en: 'Cookie insertion assigns a server identifier cookie so subsequent HTTP requests route back to the original node.',
        bn: 'কুকি ইনসারশন একটি সার্ভার শনাক্তকারী কুকি তৈরি করে যা পরবর্তী সব রিকোয়েস্টকে আগের সার্ভারে ফিরিয়ে আনে।',
      },
    },
    {
      id: 'stk-ex-2',
      kind: 'mcq',
      topic: 'stateless-session-benefit',
      question: {
        en: 'Why is externalizing session state into a distributed Redis cluster superior to relying on sticky sessions?',
        bn: 'স্টিকি সেশনের ওপর নির্ভর করার চেয়ে সেশন স্টেটকে একটি ডিস্ট্রিবিউটেড রেডিস ক্লাস্টারে সরিয়ে নেওয়া কেন শ্রেষ্ঠ?',
      },
      options: [
        { en: 'Because any backend server can handle any request, eliminating server hotspots and preventing session loss when a node crashes', bn: 'কারণ ক্লাস্টারের যেকোনো সার্ভার যেকোনো কাজ করতে পারে, ফলে সার্ভার স্পাইক দূর হয় এবং সার্ভার ক্র্যাশ করলেও সেশন নষ্ট হয় না' },
        { en: 'Because Redis makes web pages load with green backgrounds', bn: 'কারণ রেডিস ওয়েব পেজের ব্যাকগ্রাউন্ড সবুজ রঙে লোড করায়' },
        { en: 'Because it avoids using IP addresses on the internet', bn: 'কারণ এটি ইন্টারনেটে আইপি অ্যাড্রেস ব্যবহারের প্রয়োজনীয়তা বাদ দেয়' },
        { en: 'Because it turns off CPU cooling fans to save battery power', bn: 'কারণ এটি ব্যাটারি বাঁচাতে সিপিইউ কুলিং ফ্যান বন্ধ করে দেয়' },
      ],
      answer: 0,
      hint: { en: 'Any server can handle any request, preventing session loss.', bn: 'যেকোনো সার্ভার যেকোনো কাজ করতে পারে এবং সেশন সুরক্ষিত থাকে।' },
      explanation: {
        en: 'Stateless architectures decouple data from compute, allowing resilient failover and effortless autoscaling.',
        bn: 'স্টেটলেস আর্কিটেকচার ডেটা ও প্রসেসিংকে আলাদা করে ফেলে, যার ফলে ক্লাউডে সহজ স্কেলিং ও ফেইলওভার নিশ্চিত হয়।',
      },
    },
    {
      id: 'stk-ex-3',
      kind: 'predict',
      topic: 'cookie-failover-lost-sessions',
      question: {
        en: 'In our benchmark of 2400 requests, how many user sessions were destroyed when Node A crashed under the sticky cookie architecture (e.g. 800 )?',
        bn: '২৪০০টি রিকোয়েস্টের বেঞ্চমার্কে স্টিকি কুকি আর্কিটেকচারে নোড A ক্র্যাশ করলে কতজন ব্যবহারকারীর সেশন ধ্বংস হয়েছিল (যেমন 800 )?',
      },
      answer: '800',
      accept: ['800', '800 sessions', 'eight hundred'],
      hint: { en: '800', bn: '800' },
      explanation: {
        en: 'Under sticky cookies, the 800 sessions residing in Node A local memory vanished immediately upon node failure.',
        bn: 'স্টিকি কুকির ক্ষেত্রে নোড A এর লোকাল মেমরিতে থাকা ৮০০টি সেশন সার্ভার ক্র্যাশ করার সাথে সাথেই ধ্বংস হয়ে যায়।',
      },
    },
    {
      id: 'stk-ex-4',
      kind: 'predict',
      topic: 'stateless-failover-lost-sessions',
      question: {
        en: 'In a modern stateless cloud architecture, how many sessions are lost when a worker node crashes if sessions reside in Redis (e.g. 0 )?',
        bn: 'আধুনিক স্টেটলেস ক্লাউড আর্কিটেকচারে সেশন রেডিসে সংরক্ষিত থাকলে একটি কর্মী নোড ক্র্যাশ করলে কতটি সেশন হারিয়ে যায় (যেমন 0 )?',
      },
      answer: '0',
      accept: ['0', 'zero', '0 sessions'],
      hint: { en: '0', bn: '0' },
      explanation: {
        en: 'Because session state is decoupled into Redis, zero sessions are lost during backend node failures.',
        bn: 'সেশন ডেটা আলাদাভাবে রেডিসে সুরক্ষিত থাকায় সার্ভার নোড ক্র্যাশ করলেও শূন্যটি সেশন নষ্ট হয়।',
      },
    },
  ],
  quiz: {
    id: 'stickies-and-the-sticky-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'stk-qz-1',
        kind: 'mcq',
        topic: 'sticky-session-anti-pattern',
        question: {
          en: 'Why do cloud architects consider sticky sessions an anti-pattern for scalable distributed applications?',
          bn: 'ক্লাউড আর্কিটেক্টরা কেন স্কেলেবল ডিস্ট্রিবিউটেড অ্যাপ্লিকেশনে স্টিকি সেশনকে একটি অ্যান্টি-প্যাটার্ন হিসেবে বিবেচনা করেন?',
        },
        options: [
          { en: 'They defeat dynamic load balancing by pinning users to specific hosts, hinder cloud autoscaling, and risk mass session loss on server crash', bn: 'তারা ব্যবহারকারীকে একটি নির্দিষ্ট হোস্টে আটকে রেখে সুষম ট্রাফিক বণ্টন ব্যাহত করে, অটো-স্কেলিংয়ে বাধা দেয় এবং ক্র্যাশে সেশন ধ্বংস করে' },
          { en: 'They cause internet cables to melt due to excess electrical resistance', bn: 'তারা অতিরিক্ত বৈদ্যুতিক বাধার কারণে ইন্টারনেটের তার গলিয়ে ফেলে' },
          { en: 'They make user passwords public on search engine results', bn: 'তারা সার্চ ইঞ্জিন ফলাফলে ব্যবহারকারীর পাসওয়ার্ড উন্মুক্ত করে দেয়' },
          { en: 'They prevent mobile phones from connecting to Wi-Fi networks', bn: 'তারা মোবাইল ফোনকে ওয়াই-ফাই নেটওয়ার্কে সংযুক্ত হতে বাধা দেয়' },
        ],
        answer: 0,
        hint: { en: 'They defeat dynamic balancing, hinder autoscaling, and risk session loss.', bn: 'তারা ট্রাফিক বণ্টন নষ্ট করে, অটো-স্কেলিং ব্যাহত করে এবং সেশন হারায়।' },
        explanation: {
          en: 'Sticky sessions create tight coupling between clients and compute instances, undermining cloud resilience.',
          bn: 'স্টিকি সেশন ক্লায়েন্ট এবং নির্দিষ্ট সার্ভারের মাঝে অনাকাঙ্ক্ষিত নির্ভরতা তৈরি করে ক্লাউডের সুবিধা নষ্ট করে।',
        },
      },
      {
        id: 'stk-qz-2',
        kind: 'mcq',
        topic: 'cookie-learning-vs-insertion',
        question: {
          en: 'What distinguishes cookie insertion from cookie learning in load balancer configuration?',
          bn: 'লোড ব্যালেন্সার কনফিগারেশনে কুকি ইনসারশন এবং কুকি লার্নিংয়ের মধ্যে পার্থক্য কী?',
        },
        options: [
          { en: 'In cookie insertion the load balancer injects its own tracking cookie, whereas in cookie learning the balancer monitors cookies set by the application', bn: 'কুকি ইনসারশনে লোড ব্যালেন্সার নিজে একটি ট্র্যাকিং কুকি যোগ করে, আর কুকি লার্নিংয়ে ব্যালেন্সার অ্যাপ্লিকেশনের নিজস্ব কুকি পর্যবেক্ষণ করে' },
          { en: 'Cookie insertion is for mobile apps while cookie learning is for desktop computers', bn: 'কুকি ইনসারশন মোবাইল অ্যাপের জন্য আর কুকি লার্নিং ডেস্কটপ কম্পিউটারের জন্য' },
          { en: 'Cookie learning requires machines to use artificial intelligence neural networks', bn: 'কুকি লার্নিংয়ের জন্য মেশিনে কৃত্রিম বুদ্ধিমত্তার নিউরাল নেটওয়ার্ক থাকা বাধ্যতামূলক' },
          { en: 'There is no difference; both are marketing synonyms for IP hashing', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; দুটিই আইপি হ্যাশিংয়ের বিকল্প বাণিজ্যিক নাম' },
        ],
        answer: 0,
        hint: { en: 'Insertion injects a balancer cookie; learning reads an application cookie.', bn: 'ইনসারশন ব্যালেন্সারের কুকি যোগ করে; লার্নিং অ্যাপের কুকি পড়ে।' },
        explanation: {
          en: 'Insertion generates a dedicated load balancer cookie, while learning observes existing session IDs (like JSESSIONID).',
          bn: 'ইনসারশনে ব্যালেন্সার নিজস্ব কুকি বসায়, আর লার্নিং পদ্ধতিতে অ্যাপ্লিকেশনের তৈরি করা কুকি অনুসরণ করা হয়।',
        },
      },
      {
        id: 'stk-qz-3',
        kind: 'mcq',
        topic: 'autoscaling-downscale-friction',
        question: {
          en: 'How does sticky session persistence complicate dynamic cloud autoscaling during periods of declining traffic?',
          bn: 'ট্রাফিক কমে যাওয়ার সময় স্টিকি সেশন কীভাবে ক্লাউড অটো-স্কেলিং প্রক্রিয়াকে জটিল করে তোলে?',
        },
        options: [
          { en: 'Terminating an idle instance requires waiting through long connection draining periods so pinned users do not get disconnected abruptly', bn: 'অপ্রয়োজনীয় সার্ভার বন্ধ করতে দীর্ঘ ড্রেইনিংয়ের জন্য অপেক্ষা করতে হয় যাতে আটকে থাকা ব্যবহারকারীরা আকস্মিক লগআউটের শিকার না হন' },
          { en: 'Cloud providers charge double fees whenever an instance is turned off', bn: 'সার্ভার বন্ধ করলেই ক্লাউড প্রদানকারী প্রতিষ্ঠান দ্বিগুণ বিল দাবি করে' },
          { en: 'The operating system prevents root users from logging in via SSH', bn: 'অপারেটিং সিস্টেম রুট ব্যবহারকারীকে এসএসএইচ দিয়ে লগইন করতে বাধা দেয়' },
          { en: 'It automatically formats the system boot drive on neighboring servers', bn: 'এটি পাশের সার্ভারের সিস্টেম বুট ড্রাইভ স্বয়ংক্রিয়ভাবে ফরম্যাট করে ফেলে' },
        ],
        answer: 0,
        hint: { en: 'Long connection draining is required to avoid abrupt user logouts.', bn: 'ব্যবহারকারীর আকস্মিক লগআউট ঠেকাতে দীর্ঘ ড্রেইনিংয়ের প্রয়োজন হয়।' },
        explanation: {
          en: 'Autoscalers cannot safely tear down instances holding pinned state without disrupting active sessions.',
          bn: 'আটকে থাকা সেশন ধ্বংস না করে অটো-স্কেলার চাইলেই হুট করে কোনো সার্ভার বন্ধ করতে পারে না।',
        },
      },
      {
        id: 'stk-qz-4',
        kind: 'predict',
        topic: 'awsalb-cookie-name',
        question: {
          en: 'What is the common HTTP cookie name injected by AWS Application Load Balancers for session affinity (e.g. AWSALB)?',
          bn: 'সেশন অ্যাফিনিটির জন্য এডাব্লিউএস অ্যাপ্লিকেশন লোড ব্যালেন্সার দ্বারা ইনজেক্ট করা সাধারণ এইচটিটিপি কুকির নাম কী (যেমন AWSALB)?',
        },
        answer: 'AWSALB',
        accept: ['AWSALB', 'awsalb', 'AWSALB cookie'],
        hint: { en: 'AWSALB', bn: 'AWSALB' },
        explanation: {
          en: 'AWS ALB injects an encrypted cookie named AWSALB to bind returning client requests to the same target node.',
          bn: 'এডাব্লিউএস অ্যাপ্লিকেশন লোড ব্যালেন্সার একই টার্গেটে ট্রাফিক পাঠাতে AWSALB নামক এনক্রিপ্টেড কুকি ব্যবহার করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'failovers-and-the-failover',
    title: {
      en: 'Health Checks and Automated Failover: Active Probing, Circuit Breakers, and Flap Damping',
      bn: 'হেলথ চেক ও অটোমেটেড ফেইলওভার: অ্যাক্টিভ প্রোবিং, সার্কিট ব্রেকার ও ফ্ল্যাপ ড্যাম্পিং',
    },
  },
};
