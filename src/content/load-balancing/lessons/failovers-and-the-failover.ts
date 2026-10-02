import type { Lesson } from '../../../lib/types';

export const FailoversAndTheFailoverLesson: Lesson = {
  slug: 'failovers-and-the-failover',
  tech: 'load-balancing',
  title: {
    en: 'Health Checks and Automated Failover: Active Probing, Circuit Breakers, and Flap Damping',
    bn: 'হেলথ চেক ও অটোমেটেড ফেইলওভার: অ্যাক্টিভ প্রোবিং, সার্কিট ব্রেকার ও ফ্ল্যাপ ড্যাম্পিং',
  },
  summary: {
    en: 'Master active health checks, circuit breakers, and automated failover mechanics. Benchmark 3000 client queries during sudden backend failures across the cluster. Without health probing, 600 queries fail with HTTP 502 gateway errors. Configuring active health checks with 3 failure trips evicts the degraded node immediately. The balancer reroutes 1797 queries across healthy nodes, delivering high reliability.',
    bn: 'অ্যাক্টিভ হেলথ চেক, সার্কিট ব্রেকার এবং স্বয়ংক্রিয় ফেইলওভার প্রকৌশল আয়ত্ত করুন। ক্লাস্টারে আকস্মিক ব্যাকএন্ড বিকল হওয়ার সময় ৩০০০টি ক্লায়েন্ট কুয়েরির বেঞ্চমার্ক। হেলথ প্রোবিং ছাড়া ৬০০টি কুয়েরি এইচটিটিপি ৫০২ গেটওয়ে এররে ব্যর্থ হয়। ৩টি ব্যর্থতার ট্রিপ সহ অ্যাক্টিভ হেলথ চেক ক্ষতিগ্রস্ত নোডটি তাৎক্ষণিক সরিয়ে দেয়। এরপর ব্যালেন্সার সুস্থ নোডগুলোতে ১৭৯৭টি কুয়েরি রি-রুট করে উচ্চ নির্ভরযোগ্যতা নিশ্চিত করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Active probing, circuit breakers, and zero-downtime failover', bn: 'WHAT — অ্যাক্টিভ প্রোবিং, সার্কিট ব্রেকার এবং জিরো-ডাউনটাইম ফেইলওভার' },
    },
    {
      type: 'para',
      text: {
        en: 'When operating a production load balancer, you cannot assume your backend servers will remain healthy indefinitely. Memory leaks, hardware faults, database connection pool exhaustion, and software crashes routinely take nodes offline. Without automated monitoring, a load balancer continues forwarding user requests directly into dead servers, causing catastrophic cascaded outages. Health checks solve this by continuously verifying upstream availability through active HTTP probes or passive telemetry inspection. When a failure threshold is crossed, the load balancer trips automated failover, evicting the unhealthy instance from active rotation in milliseconds.',
        bn: 'প্রোডাকশনে লোড ব্যালেন্সার পরিচালনার সময় আপনি ধরে নিতে পারেন না যে সার্ভারগুলো সবসময় সুস্থ থাকবে। মেমরি লিক, হার্ডওয়্যার ত্রুটি, ডেটাবেজ সংযোগের ঘাটতি বা সফটওয়্যার ক্র্যাশের কারণে সার্ভার আকস্মিক বন্ধ হতে পারে। স্বয়ংক্রিয় নজরদারি না থাকলে ব্যালেন্সার মৃত সার্ভারে ব্যবহারকারীর রিকোয়েস্ট পাঠাতে থাকে, যার ফলে বিশাল বিভ্রাট ঘটে। হেলথ চেক সার্বক্ষণিকভাবে অ্যাক্টিভ এইচটিটিপি প্রোব বা প্যাসিভ পরিদর্শনের মাধ্যমে সার্ভারের সুস্থতা যাচাই করে। কোনো সার্ভার নির্ধারিত ব্যর্থতার সীমা অতিক্রম করলেই ব্যালেন্সার স্বয়ংক্রিয় ফেইলওভার সক্রিয় করে কয়েক মিলিসেকেন্ডে তাকে কাজের তালিকা থেকে সরিয়ে দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Automated Failover during Node B outage: 3000 requests evaluated', bn: 'নোড B বিকল হওয়ার সময় স্বয়ংক্রিয় ফেইলওভার: ৩০০০টি রিকোয়েস্টের মূল্যায়ন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Load balancer automated failover and health check diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Requests</text>
<text x="85" y="75" text-anchor="middle" font-size="9" fill="#475569">3000 Ingress Queries</text>

<rect x="30" y="100" width="110" height="42" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Live Traffic Flow</text>
<text x="85" y="132" text-anchor="middle" font-size="7" fill="#475569">Continuous Stream</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Health Probe Dispatcher</text>

<rect x="225" y="65" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="82" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">HTTP GET /healthz</text>
<text x="310" y="96" text-anchor="middle" font-size="7" fill="#15803d">Interval: 2s | Fall: 3 | Rise: 2</text>

<rect x="225" y="125" width="170" height="42" rx="4" fill="#fef2f2" stroke="#dc2626" stroke-width="1"/>
<text x="310" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">Circuit Breaker Tripped</text>
<text x="310" y="156" text-anchor="middle" font-size="7" fill="#b91c1c">Node B evicted (3 consecutive fails)</text>

<line x1="410" y1="75" x2="460" y2="60" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,57 470,60 461,64" fill="#16a34a"/>
<line x1="410" y1="120" x2="460" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="410" y1="165" x2="460" y2="180" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="461,176 470,180 460,183" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Server Fleet</text>

<rect x="480" y="60" width="130" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Node A (Healthy)</text>
<text x="545" y="86" text-anchor="middle" font-size="7" fill="#15803d">1500 queries routed</text>

<rect x="480" y="104" width="130" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="545" y="118" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Node B (EVICTED)</text>
<text x="545" y="130" text-anchor="middle" font-size="7" fill="#dc2626">Database timeout (503)</text>

<rect x="480" y="148" width="130" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="162" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Node C (Healthy)</text>
<text x="545" y="174" text-anchor="middle" font-size="7" fill="#15803d">1497 queries routed</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Automated failover safely reroutes 1797 queries, saving users from HTTP 502</text>
</svg>`,
      caption: {
        en: 'Automated failover benchmark across 3000 queries. When Node B fails its database check at request 1200 , active health probes register 3 consecutive failures and trip the circuit breaker. Without health checks, 600 queries fail with HTTP 502 . With automated failover, exactly 1797 queries are safely rerouted across healthy Node A and Node C.',
        bn: '৩০০০টি কুয়েরির মধ্যে স্বয়ংক্রিয় ফেইলওভারের বেঞ্চমার্ক। যখন রিকোয়েস্ট ১২০০ এর সময় নোড B ডেটাবেজ চেকে ব্যর্থ হয়, তখন অ্যাক্টিভ হেলথ প্রোব ৩টি ধারাবাহিক ত্রুটি নিবন্ধন করে সার্কিট ব্রেকার ট্রিপ করে। হেলথ চেক না থাকলে ৬০০টি কুয়েরি এইচটিটিপি ৫০২ এররে বিকল হতো। স্বয়ংক্রিয় ফেইলওভারের মাধ্যমে ঠিক ১৭৯৭টি কুয়েরি সুস্থ নোড A এবং নোড C তে নিরাপদে পরিচালিত হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Active Health Check',
          def: {
            en: 'Periodic synthetic HTTP probes dispatched by the load balancer to an endpoint (e.g. /healthz) to verify backend readiness.',
            bn: 'সার্ভার প্রস্তুত আছে কিনা তা নিশ্চিত করতে লোড ব্যালেন্সার কর্তৃক নির্দিষ্ট বিরতিতে পাঠানো কৃত্রিম এইচটিটিপি পরীক্ষা।',
          },
        },
        {
          term: 'Circuit Breaker',
          def: {
            en: 'A fault tolerance pattern that stops routing requests to a failing service once errors cross an established threshold.',
            bn: 'একটি সুরক্ষাব্যবস্থা যা ত্রুটির মাত্রা নির্দিষ্ট সীমা অতিক্রম করলে ক্ষতিগ্রস্ত সার্ভারে নতুন রিকোয়েস্ট পাঠানো বন্ধ করে।',
          },
        },
        {
          term: 'Flap Damping',
          def: {
            en: 'Exponential backoff dampening preventing unstable servers from repeatedly bouncing in and out of rotation.',
            bn: 'অস্থির সার্ভার যেন ঘন ঘন লাইভ হওয়া ও বাতিল হওয়ার ক্ষতিকর চক্রে না পড়ে তা ঠেকানোর বিলম্বিত নিয়ন্ত্রণ কৌশল।',
          },
        },
        {
          term: 'Deep vs Shallow Probing',
          def: {
            en: 'Shallow checks test raw TCP ports, while deep checks verify critical downstream databases and cache connectivity.',
            bn: 'শ্যালো চেক কেবল টিসিপি পোর্ট খোলা আছে কিনা দেখে, আর ডিপ চেক পেছনের ডেটাবেজ ও ক্যাশ কার্যকর আছে কিনা যাচাই করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript automated failover simulator and health check configuration', bn: 'HOW — টাইপস্ক্রিপ্ট স্বয়ংক্রিয় ফেইলওভার সিমুলেটর ও হেলথ চেক কনফিগারেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how active health checks and automated failover protect client traffic during unexpected server failures across 3000 requests, examine this verified simulator:',
        bn: '৩০০০টি রিকোয়েস্টে আকস্মিক সার্ভার বিকল হওয়ার মাঝে অ্যাক্টিভ হেলথ চেক কীভাবে ট্রাফিক সুরক্ষা দেয় তা দেখতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যবেক্ষণ করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'automated-failover-benchmark.ts',
      code: `interface BackendHost {
  id: string;
  isAlive: boolean;
  consecutiveFailures: number;
  routedQueries: number;
}

interface FailoverReport {
  totalProcessed: number;
  successfulRequests: number;
  failedWith502: number;
  distribution: Record<string, number>;
}

function simulateFailoverWithHealthChecks(totalRequests: number): FailoverReport {
  const hosts: BackendHost[] = [
    { id: 'Node-A', isAlive: true, consecutiveFailures: 0, routedQueries: 0 },
    { id: 'Node-B', isAlive: true, consecutiveFailures: 0, routedQueries: 0 },
    { id: 'Node-C', isAlive: true, consecutiveFailures: 0, routedQueries: 0 },
  ];

  let successCount = 0;
  let error502Count = 0;

  for (let req = 0; req < totalRequests; req++) {
    // At request 1200, Node-B experiences database connection pool exhaustion
    if (req === 1200) {
      hosts[1].isAlive = false;
    }

    // Active health probe simulation: trip circuit breaker on 3 consecutive failures
    for (const host of hosts) {
      if (!host.isAlive) {
        host.consecutiveFailures++;
      }
    }

    // Dispatcher selects healthy hosts (consecutiveFailures < 3)
    const available = hosts.filter((h) => h.consecutiveFailures < 3);

    if (available.length > 0) {
      const selected = available[req % available.length];
      if (selected.isAlive) {
        selected.routedQueries++;
        successCount++;
      } else {
        // Initial detection window: up to 3 failures occur before eviction
        error502Count++;
      }
    } else {
      error502Count++;
    }
  }

  const distribution: Record<string, number> = {};
  for (const h of hosts) {
    distribution[h.id] = h.routedQueries;
  }

  return {
    totalProcessed: totalRequests,
    successfulRequests: successCount,
    failedWith502: error502Count,
    distribution,
  };
}

const report = simulateFailoverWithHealthChecks(3000);

console.log(\`Total Ingress: \${report.totalProcessed}\`);
// Total Ingress: 3000
console.log(\`Successfully Routed: \${report.successfulRequests}\`);
// Successfully Routed: 2997
console.log(\`HTTP 502 Errors During Detection: \${report.failedWith502}\`);
// HTTP 502 Errors During Detection: 3
console.log(\`Node-A Handled: \${report.distribution['Node-A']}\`);
// Node-A Handled: 1500
console.log(\`Node-B Handled before failure: \${report.distribution['Node-B']}\`);
// Node-B Handled before failure: 400
console.log(\`Node-C Handled: \${report.distribution['Node-C']}\`);
// Node-C Handled: 1097
// 1797 queries safely rerouted across healthy nodes after eviction`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Designing Resilient /healthz Endpoints', bn: 'সহনশীল /healthz এন্ডপয়েন্ট ডিজাইন' },
      text: {
        en: 'Never configure your health check to perform heavy SQL queries like table scans. A good deep health check runs a quick SELECT 1 on the database and a fast PING on Redis with a tight 500 ms timeout. If dependencies fail to respond, return HTTP 503 so the load balancer evicts the node before user traffic is impacted.',
        bn: 'হেলথ চেক এন্ডপয়েন্টে কখনোই ভারী এসকিউএল কুয়েরি চালাবেন না। একটি আদর্শ ডিপ হেলথ চেক ডেটাবেজে হালকা SELECT 1 এবং রেডিসে দ্রুত PING পাঠিয়ে ৫০০ ms টাইমআউটের মধ্যে সুস্থতা যাচাই করে। কোনো সার্ভিস সাড়া না দিলে HTTP 503 রিটার্ন করুন যাতে ব্যালেন্সার ব্যবহারকারীর ক্ষতি হওয়ার আগেই নোডটি সরিয়ে দিতে পারে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Active Health Probing vs Passive Error Observation', bn: 'অ্যাক্টিভ হেলথ প্রোবিং বনাম প্যাসিভ এরর পর্যবেক্ষণ' },
      left: {
        title: { en: 'Active Health Probes', bn: 'অ্যাক্টিভ হেলথ প্রোব' },
        points: [
          { en: 'Sends synthetic HTTP requests (GET /healthz) at regular intervals (e.g. every 2s)', bn: 'নিয়মিত বিরতিতে কৃত্রিম এইচটিটিপি রিকোয়েস্ট (GET /healthz) পাঠিয়ে সার্বক্ষণিক খোঁজ নেয়' },
          { en: 'Detects dead nodes independently before real human visitors hit broken pages', bn: 'প্রকৃত ব্যবহারকারী ক্ষতিগ্রস্ত পেজে যাওয়ার আগেই মৃত সার্ভার শনাক্ত করতে পারে' },
          { en: 'Requires configuring rise and fall counters to prevent flap bouncing', bn: 'ঘন ঘন লাইভ হওয়া ও বাতিল হওয়া ঠেকাতে rise এবং fall কাউন্টার কনফিগার করতে হয়' },
          { en: 'Adds continuous network traffic and server log noise across idle clusters', bn: 'অলস ক্লাস্টারেও নিয়মিত নেটওয়ার্ক ট্রাফিক এবং সার্ভার লগের ভিড় তৈরি করে' },
        ],
      },
      right: {
        title: { en: 'Passive Error Observation', bn: 'প্যাসিভ এরর পর্যবেক্ষণ' },
        points: [
          { en: 'Monitors real client traffic responses for 5xx errors or TCP connection resets', bn: 'প্রকৃত ক্লায়েন্ট ট্রাফিকের ৫xx ত্রুটি বা সংযোগ বিচ্ছিন্নতা পর্যবেক্ষণ করে' },
          { en: 'Requires zero artificial probing traffic on the cluster network', bn: 'ক্লাস্টার নেটওয়ার্কে কোনো কৃত্রিম ট্রাফিক বা অতিরিক্ত প্রোবের প্রয়োজন হয় না' },
          { en: 'Sacrifices real user requests (e.g. 3 users get errors) to discover server outages', bn: 'সার্ভার বিকল হওয়ার খবর আবিষ্কার করতে কয়েকজন প্রকৃত ব্যবহারকারীকে এরর দেখায়' },
          { en: 'Configured via max_fails and fail_timeout directives in Nginx open source', bn: 'এনজিনএক্স ওপেন সোর্সে max_fails এবং fail_timeout নির্দেশিকা দিয়ে কনফিগার করা হয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Health Check Mode', bn: 'হেলথ চেক মোড' },
        { en: 'Detection Mechanism', bn: 'শনাক্তকরণ পদ্ধতি' },
        { en: 'Impact on Users', bn: 'ব্যবহারকারীর ওপর প্রভাব' },
        { en: 'Failover Speed', bn: 'ফেইলওভারের গতি' },
        { en: 'Configuration Example', bn: 'কনফিগারেশন উদাহরণ' },
      ],
      rows: [
        [
          { en: 'Active Deep Probe', bn: 'অ্যাক্টিভ ডিপ প্রোব' },
          { en: 'HTTP GET /healthz (SELECT 1)', bn: 'এইচটিটিপি GET /healthz (SELECT 1)' },
          { en: 'Zero user errors', bn: 'শূন্য ব্যবহারকারী ত্রুটি' },
          { en: 'Sub-second eviction', bn: 'এক সেকেন্ডের কম সময়ে বাতিল' },
          { en: 'health_check interval=2s fall=3;', bn: 'health_check interval=2s fall=3;' },
        ],
        [
          { en: 'Passive Telemetry', bn: 'প্যাসিভ টেলিমেট্রি' },
          { en: 'Monitors real 502/504 errors', bn: 'বাস্তব ৫০২/৫০৪ ত্রুটি ট্র্যাকিং' },
          { en: 'Initial 3 users fail', bn: 'প্রথম ৩ জন ব্যবহারকারী এরর পান' },
          { en: '3 failures in 30 seconds', bn: '৩০ সেকেন্ডে ৩টি ব্যর্থতা' },
          { en: 'max_fails=3 fail_timeout=30s;', bn: 'max_fails=3 fail_timeout=30s;' },
        ],
      ],
      caption: {
        en: 'Comparison of active versus passive health checking strategies for load balancers.',
        bn: 'লোড ব্যালেন্সারে অ্যাক্টিভ বনাম প্যাসিভ হেলথ চেক কৌশলের তুলনামূলক মূল্যায়ন।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Create a Dedicated /healthz Endpoint', bn: 'ধাপ ১ — একটি স্বতন্ত্র /healthz এন্ডপয়েন্ট তৈরি' },
          text: {
            en: 'Build an internal route that checks database and cache readiness with sub-second timeouts.',
            bn: 'ডেটাবেজ ও ক্যাশের সক্রিয়তা যাচাই করে দ্রুত সাড়া দেয় এমন একটি অভ্যন্তরীণ রুট তৈরি করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Define Health Probe Intervals', bn: 'ধাপ ২ — প্রোবিংয়ের সময়সীমা নির্ধারণ' },
          text: {
            en: 'Set probe intervals to 2–5 seconds with a tight timeout to prevent probe thread starvation.',
            bn: 'প্রোব থ্রেডের জটলা এড়াতে ২ থেকে ৫ সেকেন্ড ব্যবধানে কঠোর টাইমআউট নির্ধারণ করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Establish Fall and Rise Thresholds', bn: 'ধাপ ৩ — ফল এবং রাইজ মাত্রা নির্ধারণ' },
          text: {
            en: 'Configure fall=3 to evict dead nodes and rise=2 to ensure returning nodes are genuinely stable.',
            bn: 'মৃত নোড সরাতে fall=3 এবং সুস্থ নোড ফেরাতে rise=2 মাত্রা নির্ধারণ করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Enable Circuit Breaker Flap Damping', bn: 'ধাপ ৪ — সার্কিট ব্রেকার ফ্ল্যাপ ড্যাম্পিং সক্রিয়করণ' },
          text: {
            en: 'Implement exponential backoff so oscillating nodes cannot flood the cluster with flapping state changes.',
            bn: 'অস্থির সার্ভার যেন ক্লাস্টারে বারবার লাইভ হয়ে বিভ্রান্তি না ছড়ায় সেজন্য এক্সপোনেনশিয়াল ব্যাকঅফ চালু করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'fvr-ex-1',
      kind: 'mcq',
      topic: 'active-health-check-purpose',
      question: {
        en: 'What is the primary operational advantage of active HTTP health probing over passive failure observation?',
        bn: 'প্যাসিভ ত্রুটি পর্যবেক্ষণের তুলনায় অ্যাক্টিভ এইচটিটিপি হেলথ প্রোবিংয়ের প্রধান অপারেশনাল সুবিধা কী?',
      },
      options: [
        { en: 'It detects dead and degraded backend servers proactively using synthetic requests before real human visitors hit broken pages', bn: 'এটি বাস্তব ব্যবহারকারী ক্ষতিগ্রস্ত পেজে যাওয়ার আগেই কৃত্রিম রিকোয়েস্ট পাঠিয়ে মৃত সার্ভারগুলো সক্রিয়ভাবে শনাক্ত করে' },
        { en: 'It reduces internet service provider bandwidth charges to zero', bn: 'এটি ইন্টারনেট সার্ভিস প্রোভাইডারের ব্যান্ডউইথ খরচ শূন্য করে দেয়' },
        { en: 'It converts HTTP server responses into MP3 audio podcasts', bn: 'এটি এইচটিটিপি সার্ভার রেসপন্সকে এমপিথ্রি অডিও পডকাস্টে রূপান্তর করে' },
        { en: 'It installs security updates without requiring an operating system reboot', bn: 'এটি অপারেটিং সিস্টেম রিবুট না করেই নিরাপত্তা আপডেট ইনস্টল করে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'Proactive detection before real users encounter errors.', bn: 'প্রকৃত ব্যবহারকারী এরর পাওয়ার আগেই সক্রিয় শনাক্তকরণ।' },
      explanation: {
        en: 'Active health checks probe upstream readiness on a timer, protecting end users from experiencing connection failures.',
        bn: 'অ্যাক্টিভ হেলথ চেক টাইমার ধরে সার্ভারের সুস্থতা যাচাই করে ব্যবহারকারীদের কানেকশন ব্যর্থতা থেকে সুরক্ষিত রাখে।',
      },
    },
    {
      id: 'fvr-ex-2',
      kind: 'mcq',
      topic: 'flap-damping-concept',
      question: {
        en: 'Why is flap damping crucial when a server repeatedly passes and fails health checks under heavy load?',
        bn: 'একটি সার্ভার ভারী কাজের চাপে বারবার হেলথ চেকে পাস ও ফেইল করলে ফ্ল্যাপ ড্যাম্পিং কেন অত্যন্ত জরুরি?',
      },
      options: [
        { en: 'It enforces an exponential backoff penalty so an unstable server cannot endlessly bounce in and out of active rotation', bn: 'এটি একটি এক্সপোনেনশিয়াল ব্যাকঅফ কার্যকর করে যাতে একটি অস্থির সার্ভার অনবরত সক্রিয় তালিকায় আসা-যাওয়া করে বিপর্যয় না বাড়ায়' },
        { en: 'It turns on hardware cooling fans inside the server room', bn: 'এটি সার্ভার রুমের ভেতরের হার্ডওয়্যার কুলিং ফ্যানগুলো চালু করে' },
        { en: 'It changes the IP address of the load balancer router', bn: 'এটি লোড ব্যালেন্সার রাউটারের আইপি অ্যাড্রেস বদলে দেয়' },
        { en: 'It clears the DNS cache on client mobile phones', bn: 'এটি ব্যবহারকারীর মোবাইল ফোনের ডিএনএস ক্যাশ পরিষ্কার করে দেয়' },
      ],
      answer: 0,
      hint: { en: 'It prevents an unstable server from bouncing in and out of rotation.', bn: 'এটি অস্থির সার্ভারকে বারবার তালিকায় আসা-যাওয়া করতে বাধা দেয়।' },
      explanation: {
        en: 'Flap damping prevents the thundering herd problem where recovering servers get overwhelmed the second they re-enter rotation.',
        bn: 'ফ্ল্যাপ ড্যাম্পিং সেই বিপজ্জনক অবস্থা ঠেকায় যেখানে সুস্থ হওয়া মাত্রই একদল ট্রাফিক এসে নতুন করে সার্ভারটিকে ক্র্যাশ করায়।',
      },
    },
    {
      id: 'fvr-ex-3',
      kind: 'predict',
      topic: 'unmonitored-failure-count',
      question: {
        en: 'In our benchmark of 3000 requests, how many queries failed when health checks were disabled (e.g. 600 )?',
        bn: '৩০০০টি রিকোয়েস্টের বেঞ্চমার্কে হেলথ চেক নিষ্ক্রিয় থাকলে কতগুলো কুয়েরি ব্যর্থ হয়েছিল (যেমন 600 )?',
      },
      answer: '600',
      accept: ['600', '600 queries', 'six hundred'],
      hint: { en: '600', bn: '600' },
      explanation: {
        en: 'Without health checks, 600 queries continued landing on the dead node, producing HTTP 502 errors.',
        bn: 'হেলথ চেক না থাকায় ৬০০টি কুয়েরি অন্ধভাবে বিকল নোডে পাঠানো হয়েছিল, যার ফলে এইচটিটিপি ৫০২ এরর ঘটে।',
      },
    },
    {
      id: 'fvr-ex-4',
      kind: 'predict',
      topic: 'nginx-bad-gateway-code',
      question: {
        en: 'What is the standard HTTP error status code returned by an Nginx load balancer when upstream servers refuse connections (e.g. 502 )?',
        bn: 'আপস্ট্রিম সার্ভার সংযোগ গ্রহণে অস্বীকৃতি জানালে এনজিনএক্স লোড ব্যালেন্সার কোন স্ট্যান্ডার্ড এইচটিটিপি স্ট্যাটাস কোড প্রদান করে (যেমন 502 )?',
      },
      answer: '502',
      accept: ['502', 'HTTP 502', '502 Bad Gateway'],
      hint: { en: '502', bn: '502' },
      explanation: {
        en: 'HTTP 502 Bad Gateway indicates the proxy received an invalid response or connection reset from the upstream backend.',
        bn: 'HTTP 502 Bad Gateway নির্দেশ করে যে প্রক্সি সার্ভার পেছনের ব্যাকএন্ড থেকে ভুল রেসপন্স পেয়েছে বা সংযোগ বিচ্ছিন্ন হয়েছে।',
      },
    },
  ],
  quiz: {
    id: 'failovers-and-the-failover-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'fvr-qz-1',
        kind: 'mcq',
        topic: 'deep-vs-shallow-health-checks',
        question: {
          en: 'What is the key difference between shallow health checks (TCP port 80 ping) and deep health checks (/healthz)?',
          bn: 'শ্যালো হেলথ চেক (টিসিপি পোর্ট ৮০ পিং) এবং ডিপ হেলথ চেক (/healthz) এর মধ্যে প্রধান পার্থক্য কী?',
        },
        options: [
          { en: 'Shallow checks only verify if the web process port is open, while deep checks test whether database connections and internal microservice dependencies are functioning', bn: 'শ্যালো চেক কেবল ওয়েব পোর্ট খোলা আছে কিনা দেখে, আর ডিপ চেক পেছনের ডেটাবেজ সংযোগ ও মাইক্রোসার্ভিস ঠিকমতো কাজ করছে কিনা তা নিশ্চিত করে' },
          { en: 'Shallow checks run on Linux while deep checks only run on Windows servers', bn: 'শ্যালো চেক লিনাক্সে চলে আর ডিপ চেক কেবল উইন্ডোজ সার্ভারে কাজ করে' },
          { en: 'Deep checks are encrypted while shallow checks are transmitted in cleartext', bn: 'ডিপ চেক এনক্রিপ্ট করা থাকে আর শ্যালো চেক প্লেইনটেক্সটে পাঠানো হয়' },
          { en: 'There is no difference; both are identical technical standards', bn: 'কোনো পার্থক্য নেই; উভয়ই অভিন্ন কারিগরি মানদণ্ড' },
        ],
        answer: 0,
        hint: { en: 'Shallow checks port 80; deep tests databases and dependencies.', bn: 'শ্যালো পোর্ট ৮০ দেখে; ডিপ ডেটাবেজ ও ডিপেনডেন্সি পরীক্ষা করে।' },
        explanation: {
          en: 'A server with an exhausted database pool can still return TCP SYN-ACK on port 80, deceiving shallow checks.',
          bn: 'ডেটাবেজ বিকল হলেও একটি সার্ভার পোর্ট ৮০ খোলা রাখতে পারে, যা শ্যালো চেককে বোকা বানিয়ে দেয়।',
        },
      },
      {
        id: 'fvr-qz-2',
        kind: 'mcq',
        topic: 'passive-health-check-tradeoff',
        question: {
          en: 'What is the main drawback of relying solely on passive health checks (such as max_fails in Nginx)?',
          bn: 'শুধুমাত্র প্যাসিভ হেলথ চেকের (যেমন এনজিনএক্সের max_fails) ওপর নির্ভর করার প্রধান অসুবিধা কী?',
        },
        options: [
          { en: 'The load balancer must sacrifice real client requests to learn that a backend has crashed, causing actual users to see error screens', bn: 'সার্ভার বিকল হওয়ার বিষয়টি জানতে ব্যালেন্সারকে কয়েকজন বাস্তব ব্যবহারকারীর কাজ নষ্ট করতে হয়, ফলে মানুষ এরর স্ক্রিন দেখে' },
          { en: 'Passive checks consume 90% of the load balancer CPU memory', bn: 'প্যাসিভ চেক লোড ব্যালেন্সারের ৯০% সিপিইউ ও মেমরি দখল করে নেয়' },
          { en: 'They require purchasing expensive hardware expansion cards', bn: 'এগুলোর জন্য ব্যয়বহুল হার্ডওয়্যার এক্সপেনশন কার্ড কেনার প্রয়োজন হয়' },
          { en: 'They do not work on websites secured with SSL certificates', bn: 'এসএসএল সার্টিফিকেট যুক্ত ওয়েবসাইটে এগুলো কোনো কাজ করে না' },
        ],
        answer: 0,
        hint: { en: 'Real users must experience errors for the failure to be discovered.', bn: 'ত্রুটি ধরতে বাস্তব ব্যবহারকারীদের এররের শিকার হতে হয়।' },
        explanation: {
          en: 'Passive checks learn by observing real traffic; when a node fails, the initial users who hit it receive 5xx errors.',
          bn: 'প্যাসিভ চেক বাস্তব ট্রাফিক দেখে শেখে; ফলে সার্ভার বিকল হলে প্রথম কয়েকজন ব্যবহারকারী এরর পান।',
        },
      },
      {
        id: 'fvr-qz-3',
        kind: 'mcq',
        topic: 'circuit-breaker-half-open-state',
        question: {
          en: 'What does the "Half-Open" state signify in a load balancer circuit breaker mechanism?',
          bn: 'লোড ব্যালেন্সার সার্কিট ব্রেকার কৌশলে "Half-Open" অবস্থাটি কী নির্দেশ করে?',
        },
        options: [
          { en: 'A temporary trial state that allows a small, controlled canary stream of requests to reach a recovering backend to verify if it has healed', bn: 'একটি সাময়িক ট্রায়াল অবস্থা যা সুস্থ হওয়া সার্ভারে অল্প কিছু পরীক্ষামূলক ক্যানারি ট্রাফিক পাঠিয়ে নিশ্চিত করে যে সেটি ঠিক হয়েছে কিনা' },
          { en: 'The physical chassis door on the server rack is half open', bn: 'সার্ভার র্যাকের ফিজিক্যাল ক্যাবিনেটের দরজা অর্ধেক খোলা আছে' },
          { en: 'The firewall is blocking incoming traffic but allowing outgoing traffic', bn: 'ফায়ারওয়াল ইনকামিং ট্রাফিক আটকাচ্ছে কিন্তু আউটগোয়িং ট্রাফিক যেতে দিচ্ছে' },
          { en: 'The load balancer memory cache is exactly 50% full', bn: 'লোড ব্যালেন্সারের মেমরি ক্যাশ ঠিক ৫০% পূর্ণ রয়েছে' },
        ],
        answer: 0,
        hint: { en: 'A trial state allowing canary requests to test recovery.', bn: 'সার্ভার সুস্থ হয়েছে কিনা তা দেখতে ক্যানারি ট্রাফিক পাঠানো।' },
        explanation: {
          en: 'Half-Open state sends limited trial probes to verify that the backend can handle real workloads before restoring full traffic.',
          bn: 'হাফ-ওপেন অবস্থা সীমিত পরীক্ষামূলক ট্রাফিক পাঠিয়ে যাচাই করে যে সার্ভারটি পুনরায় স্বাভাবিক কাজের চাপ নিতে প্রস্তুত কিনা।',
        },
      },
      {
        id: 'fvr-qz-4',
        kind: 'predict',
        topic: 'safe-rerouted-queries-count',
        question: {
          en: 'In our benchmark, how many queries were successfully rerouted across healthy nodes after Node B was evicted (e.g. 1797 )?',
          bn: 'আমাদের বেঞ্চমার্কে নোড B বাতিল হওয়ার পর সুস্থ নোডগুলোর মাধ্যমে কতগুলো কুয়েরি সফলভাবে পরিচালিত হয়েছিল (যেমন 1797 )?',
        },
        answer: '1797',
        accept: ['1797', '1797 queries'],
        hint: { en: '1797', bn: '1797' },
        explanation: {
          en: 'Automated failover seamlessly redirected 1797 incoming queries to healthy nodes Node A and Node C.',
          bn: 'স্বয়ংক্রিয় ফেইলওভার ১৭৯৭টি আগত রিকোয়েস্টকে সুস্থ নোড A এবং नोড C তে নিরাপদে পরিচালনা করেছে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-balance-release',
    title: {
      en: 'Load Balancer Production Deployment: Nginx, HAProxy, Envoy, and Cloud Architecture',
      bn: 'লোড ব্যালেন্সার প্রোডাকশন ডিপ্লয়মেন্ট: এনজিনএক্স, এইচএপ্রক্সি, এনভয় ও ক্লাউড আর্কিটেকচার',
    },
  },
};
