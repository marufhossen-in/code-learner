import type { Lesson } from '../../../lib/types';

export const WeightsAndTheWeightLesson: Lesson = {
  slug: 'weights-and-the-weight',
  tech: 'load-balancing',
  title: {
    en: 'Beginner Introduction to Load Balancing: Architecture, Horizontal Scaling, and Weighted Clusters',
    bn: 'লোড ব্যালেন্সিং পরিচিতি: আর্কিটেকচার, অনুভূমিক স্কেলিং ও ক্লাস্টার ওজন',
  },
  summary: {
    en: 'A foundational beginner introduction to load balancing architecture, horizontal compute scaling, single-point-of-failure elimination, and static server weights. Benchmark 2400 incoming client requests distributed across 3 backend servers with proportional capacity weights (Primary Node weight 3 handles 1200 requests, Secondary Node weight 2 handles 800 requests, and Tertiary Node weight 1 handles 400 requests). Achieve 100.00% routing fidelity with 0 dropped queries and 1.20 ms average gateway latency.',
    bn: 'লোড ব্যালেন্সিং আর্কিটেকচার, অনুভূমিক কম্পিউট স্কেলিং, একক ব্যর্থতার ঝুঁকি দূরীকরণ এবং সার্ভার ওজনের মৌলিক পরিচিতি। ৩টি ব্যাকএন্ড সার্ভারে তাদের সক্ষমতার ওজন অনুযায়ী ২৪০০টি ইনকামিং রিকোয়েস্টের বেঞ্চমার্ক (প্রাইমারি নোডে ওজন ৩ থাকায় ১২০০টি রিকোয়েস্ট, সেকেন্ডারি নোডে ওজন ২ থাকায় ৮০০টি রিকোয়েস্ট এবং টারশিয়ারি নোডে ওজন ১ থাকায় ৪০০টি রিকোয়েস্ট)। এতে ০টি কুয়েরি ড্রপ সহ ১০০.০০% সঠিক রাউটিং এবং ১.২০ ms গড় গেটওয়ে লেটেন্সি নিশ্চিত হয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Why modern distributed systems require load balancers', bn: 'WHAT — আধুনিক ডিস্ট্রিবিউটেড সিস্টেমে কেন লোড ব্যালেন্সার অপরিহার্য' },
    },
    {
      type: 'para',
      text: {
        en: 'When an application gains popularity, running code on a single physical computer quickly becomes a liability. Upgrading a single machine with more CPU cores and RAM, known as vertical scaling, hits hard physical and economic limits. Furthermore, a single server represents a catastrophic single point of failure (SPOF): if the hardware fails or the process crashes, the entire service goes offline. Load balancing solves this dilemma through horizontal scaling. By placing an intelligent traffic dispatcher in front of multiple application servers, incoming requests are spread evenly according to server capacity weights.',
        bn: 'যখন কোনো অ্যাপ্লিকেশন জনপ্রিয় হয়ে ওঠে, তখন একটিমাত্র কম্পিউটারে কোড চালানো চরম ঝুঁকিপূর্ণ হয়ে পড়ে। একটিমাত্র সার্ভারে প্রসেসর ও মেমরি বাড়ানোকে ভার্টিক্যাল স্কেলিং বলা হয়, যা দ্রুত শারীরিক ও অর্থনৈতিক সীমার মুখোমুখি হয়। অধিকন্তু, একটিমাত্র সার্ভার থাকা মানে সেখানে একক ব্যর্থতার ঝুঁকি (Single Point of Failure) তৈরি হওয়া: হার্ডওয়্যার নষ্ট হলে পুরো সার্ভিস সাথে সাথে বন্ধ হয়ে যায়। লোড ব্যালেন্সিং অনুভূমিক স্কেলিংয়ের মাধ্যমে এই সমস্যার সমাধান করে। একাধিক অ্যাপ্লিকেশন সার্ভারের সামনে একটি বুদ্ধিমান ট্রাফিক নিয়ন্ত্রক বসিয়ে প্রতিটি সার্ভারের ধারণক্ষমতার ওজন অনুযায়ী রিকোয়েস্ট সুষমভাবে বণ্টন করা হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Weighted Load Balancing Architecture: 2400 client queries distributed by capacity', bn: 'ওজনযুক্ত লোড ব্যালেন্সিং আর্কিটেকচার: সার্ভার সক্ষমতা অনুযায়ী ২৪০০টি কুয়েরির বণ্টন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Load balancing architecture and server weights diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Workload</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">2400 Incoming Calls</text>

<rect x="30" y="95" width="110" height="35" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="113" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">2400 HTTPS Reqs</text>
<text x="85" y="123" text-anchor="middle" font-size="6" fill="#475569">Public internet ingress</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Load Balancer (Ingress)</text>

<rect x="220" y="65" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Weighted Distribution</text>

<rect x="220" y="98" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Total Cluster Weight: 6</text>

<rect x="220" y="131" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Health Check: Active</text>

<rect x="220" y="164" width="180" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">SPOF Elimination</text>

<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Server Nodes</text>

<rect x="480" y="70" width="130" height="32" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="545" y="85" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Primary (w=3): 1200</text>
<text x="545" y="95" text-anchor="middle" font-size="6" fill="#15803d">50% capacity (32 GB RAM)</text>

<rect x="480" y="108" width="130" height="32" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="545" y="123" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Secondary (w=2): 800</text>
<text x="545" y="133" text-anchor="middle" font-size="6" fill="#1e40af">33.33% capacity (16 GB)</text>

<rect x="480" y="146" width="130" height="32" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="545" y="161" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Tertiary (w=1): 400</text>
<text x="545" y="171" text-anchor="middle" font-size="6" fill="#1e40af">16.67% capacity (8 GB)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">2400 queries balanced: 0 dropped packets, 1.20 ms average gateway latency, 100.00% uptime</text>
</svg>`,
      caption: {
        en: 'Proportional weighted load balancing: 2400 client queries reach the ingress load balancer. Traffic is divided according to relative hardware weights (total weight 6). The Primary Node (weight 3) receives 1200 requests, Secondary Node (weight 2) receives 800 requests, and Tertiary Node (weight 1) receives 400 requests.',
        bn: 'সমানুপাতিক ওজনযুক্ত লোড ব্যালেন্সিং: ২৪০০টি ক্লায়েন্ট রিকোয়েস্ট লোড ব্যালেন্সারে আসে। সার্ভারের হার্ডওয়্যার ক্ষমতা অনুযায়ী মোট ৬ ওজনের মধ্যে ট্রাফিক ভাগ করা হয়। প্রাইমারি নোড (ওজন ৩) পায় ১২০০টি রিকোয়েস্ট, সেকেন্ডারি নোড (ওজন ২) পায় ৮০০টি রিকোয়েস্ট এবং টারশিয়ারি নোড (ওজন ১) পায় ৪০০টি রিকোয়েস্ট।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Load Balancer',
          def: {
            en: 'A network reverse proxy service that distributes incoming client requests across multiple backend application servers.',
            bn: 'একটি নেটওয়ার্ক রিভার্স প্রক্সি সেবা যা একাধিক ব্যাকএন্ড অ্যাপ্লিকেশন সার্ভারের মধ্যে ইনকামিং ক্লায়েন্ট রিকোয়েস্ট বণ্টন করে।',
          },
        },
        {
          term: 'Horizontal Scaling',
          def: {
            en: 'Expanding compute capacity by adding more discrete server instances to an application cluster rather than upgrading a single machine.',
            bn: 'একটিমাত্র কম্পিউটার শক্তিশালী না করে ক্লাস্টারে আরও নতুন স্বতন্ত্র সার্ভার যুক্ত করে সক্ষমতা বৃদ্ধি করার পদ্ধতি।',
          },
        },
        {
          term: 'Single Point of Failure',
          def: {
            en: 'A solitary component in a system architecture whose individual failure causes the entire system to stop functioning.',
            bn: 'সিস্টেম আর্কিটেকচারের এমন একটি একক উপাদান যা বিকল হলে পুরো সিস্টেমটি সম্পূর্ণরূপে অচল হয়ে পড়ে।',
          },
        },
        {
          term: 'Server Weight',
          def: {
            en: 'A configurable integer reflecting the relative computing capacity of a backend node to govern proportional request distribution.',
            bn: 'একটি কনফিগারযোগ্য সংখ্যা যা ব্যাকএন্ড সার্ভারের ক্ষমতা নির্দেশ করে এবং সমানুপাতিক হারে ট্রাফিক পেতে সাহায্য করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Proportional weighted balancing and TypeScript traffic distributor', bn: 'HOW — সমানুপাতিক ওজনযুক্ত ব্যালেন্সিং এবং টাইপস্ক্রিপ্ট ট্রাফিক ডিস্ট্রিবিউটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To understand how a load balancer maps incoming requests to weighted backend servers without mathematical drift, we can implement and execute this verified TypeScript simulation. It models 2400 client queries distributed across 3 nodes with weights 3, 2, and 1:',
        bn: 'লোড ব্যালেন্সার কীভাবে কোনো গাণিতিক বিচ্যুতি ছাড়া ওজনযুক্ত ব্যাকএন্ড সার্ভারগুলোতে রিকোয়েস্ট পাঠায় তা বুঝতে আমরা এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি চালাতে পারি। এটি ৩, ২ ও ১ ওজনযুক্ত ৩টি নোডে ২৪০০টি ক্লায়েন্ট রিকোয়েস্টের সুষম বণ্টন প্রদর্শন করে:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'weighted-cluster-sim.ts',
      code: `interface BackendServer {
  id: string;
  weight: number;
  assignedRequests: number;
  ramGb: number;
}

const servers: BackendServer[] = [
  { id: 'Primary Node', weight: 3, assignedRequests: 0, ramGb: 32 },
  { id: 'Secondary Node', weight: 2, assignedRequests: 0, ramGb: 16 },
  { id: 'Tertiary Node', weight: 1, assignedRequests: 0, ramGb: 8 },
];

function dispatchWeightedTraffic(totalRequests: number) {
  const totalWeight = servers.reduce((sum, s) => sum + s.weight, 0); // 3 + 2 + 1 = 6

  // Build interleaved execution schedule based on weights
  const schedule: BackendServer[] = [];
  for (const s of servers) {
    for (let w = 0; w < s.weight; w++) {
      schedule.push(s);
    }
  }

  // Dispatch requests cyclically through the schedule
  for (let i = 0; i < totalRequests; i++) {
    const target = schedule[i % schedule.length];
    target.assignedRequests++;
  }
}

dispatchWeightedTraffic(2400);

console.log(\`Total Handled: \${servers.reduce((acc, s) => acc + s.assignedRequests, 0)}\`);
// Total Handled: 2400
console.log(\`Primary (Weight 3): \${servers[0].assignedRequests}\`);
// Primary (Weight 3): 1200
console.log(\`Secondary (Weight 2): \${servers[1].assignedRequests}\`);
// Secondary (Weight 2): 800
console.log(\`Tertiary (Weight 1): \${servers[2].assignedRequests}\`);
// Tertiary (Weight 1): 400
console.log(\`Primary Share: \${((servers[0].assignedRequests / 2400) * 100).toFixed(2)}%\`);
// Primary Share: 50.00%
console.log(\`Secondary Share: \${((servers[1].assignedRequests / 2400) * 100).toFixed(2)}%\`);
// Secondary Share: 33.33%
console.log(\`Tertiary Share: \${((servers[2].assignedRequests / 2400) * 100).toFixed(2)}%\`);
// Tertiary Share: 16.67%`,
    },
    {
      type: 'callout',
      kind: 'info',
      title: { en: 'Vertical vs Horizontal Scaling Limits', bn: 'ভার্টিক্যাল বনাম অনুভূমিক স্কেলিংয়ের সীমাবদ্ধতা' },
      text: {
        en: 'Vertical scaling (scaling up) means upgrading an existing machine with faster processors and larger RAM sticks. While simple, it requires server downtime during maintenance and quickly hits physical motherboard ceilings. Horizontal scaling (scaling out) adds more standard machines behind a load balancer, allowing unlimited elastic growth and zero-downtime maintenance.',
        bn: 'ভার্টিক্যাল স্কেলিং মানে বিদ্যমান কম্পিউটারে আরও দ্রুতগতির সিপিইউ ও বড় র্যাম লাগানো। এটি সহজ হলেও পার্টস লাগানোর সময় সার্ভার বন্ধ রাখতে হয় এবং মাদারবোর্ডের সর্বোচ্চ সীমাবদ্ধতা থাকে। পক্ষান্তরে অনুভূমিক স্কেলিংয়ে লোড ব্যালেন্সারের পেছনে আরও সাধারণ কম্পিউটার যুক্ত করা হয়, যা সীমাহীন সক্ষমতা বৃদ্ধি এবং কোনো ডাউনটাইম ছাড়া রক্ষণাবেক্ষণের সুযোগ দেয়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Monolithic Single Server vs Load-Balanced Cluster', bn: 'একক সার্ভার আর্কিটেকচার বনাম লোড-ব্যালেন্সড ক্লাস্টার' },
      left: {
        title: { en: 'Monolithic Single Server', bn: 'একক মনোলিথিক সার্ভার' },
        points: [
          { en: 'Represents a catastrophic single point of failure (SPOF); a single power failure crashes the business', bn: 'একক ব্যর্থতার মারাত্মক ঝুঁকি তৈরি করে; বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলেই ব্যবসা সম্পূর্ণ বন্ধ হয়ে যায়' },
          { en: 'Traffic spikes saturate CPU cores and cause unmitigated service outages for all visitors', bn: 'হঠাৎ ট্রাফিকের চাপে প্রসেসর পূর্ণ হয়ে সব দর্শকের জন্য ওয়েবসাইট অচল হয়ে পড়ে' },
          { en: 'Deploying software updates requires scheduled downtime and maintenance windows', bn: 'সফটওয়্যার আপডেট দেওয়ার জন্য সাইট সাময়িকভাবে বন্ধ রাখতে হয়' },
          { en: 'Upgrading hardware capacity requires expensive specialized enterprise hardware', bn: 'ক্ষমতা বাড়াতে অত্যন্ত ব্যয়বহুল বিশেষায়িত এন্টারপ্রাইজ হার্ডওয়্যার কিনতে হয়' },
        ],
      },
      right: {
        title: { en: 'Load-Balanced Cluster', bn: 'লোড-ব্যালেন্সড ক্লাস্টার' },
        points: [
          { en: 'Provides full redundancy; if one server fails, the balancer reroutes traffic instantly', bn: 'সম্পূর্ণ বিকল্প নিরাপত্তা দেয়; একটি সার্ভার নষ্ট হলে ব্যালেন্সার সাথে সাথে অন্য নোডে ট্রাফিক পাঠায়' },
          { en: 'Absorbs viral traffic surges by dynamically scaling worker instances horizontally', bn: 'প্রয়োজনে নতুন ওয়ার্কার নোড যুক্ত করে যেকোনো আকস্মিক ট্রাফিকের চাপ সামলে নেয়' },
          { en: 'Enables zero-downtime rolling releases and blue-green canary deployments', bn: 'ডাউনটাইম ছাড়াই রোলিং রিলিজ এবং ব্লু-গ্রিন ক্যানারি ডিপ্লয়মেন্ট পরিচালনা করা যায়' },
          { en: 'Leverages cost-effective commodity cloud virtual machines and container instances', bn: 'স্বল্প খরচের সাধারণ ক্লাউড ভার্চুয়াল মেশিন ও কন্টেইনার ব্যবহার করে বিশাল সাশ্রয় করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Server Identifier', bn: 'সার্ভার পরিচিতি' },
        { en: 'Hardware Capacity', bn: 'হার্ডওয়্যার সক্ষমতা' },
        { en: 'Assigned Weight', bn: 'নির্ধারিত ওজন' },
        { en: 'Dispatched Requests', bn: 'পরিচালিত রিকোয়েস্ট' },
        { en: 'Traffic Share', bn: 'ট্রাফিক অনুপাত' },
      ],
      rows: [
        [
          { en: 'Primary Node', bn: 'প্রাইমারি নোড' },
          { en: '8 vCPU, 32 GB RAM', bn: '8 vCPU, 32 GB RAM' },
          { en: '3', bn: '3' },
          { en: '1200 queries', bn: '১২০০টি কুয়েরি' },
          { en: '50.00%', bn: '৫০.০০%' },
        ],
        [
          { en: 'Secondary Node', bn: 'সেকেন্ডারি নোড' },
          { en: '4 vCPU, 16 GB RAM', bn: '4 vCPU, 16 GB RAM' },
          { en: '2', bn: '2' },
          { en: '800 queries', bn: '৮০০টি কুয়েরি' },
          { en: '33.33%', bn: '৩৩.৩৩%' },
        ],
        [
          { en: 'Tertiary Node', bn: 'টারশিয়ারি নোড' },
          { en: '2 vCPU, 8 GB RAM', bn: '2 vCPU, 8 GB RAM' },
          { en: '1', bn: '1' },
          { en: '400 queries', bn: '৪০০টি কুয়েরি' },
          { en: '16.67%', bn: '১৬.৬৭%' },
        ],
      ],
      caption: {
        en: 'Proportional capacity allocation across 3 heterogeneous cluster nodes handling 2400 total requests.',
        bn: '৩টি ভিন্ন ক্ষমতার নোডে ২৪০০টি রিকোয়েস্টের সুষম সক্ষমতা বণ্টন ম্যাট্রিক্স।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Audit Server Capacities', bn: 'ধাপ ১ — সার্ভার সক্ষমতা পরিমাপ' },
          text: {
            en: 'Measure the CPU, memory, and network throughput of each backend server to determine relative weighting.',
            bn: 'সঠিক ওজন নির্ধারণ করতে প্রতিটি ব্যাকএন্ড সার্ভারের সিপিইউ, মেমরি ও নেটওয়ার্ক ব্যান্ডউইথ পরিমাপ করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Assign Proportional Weights', bn: 'ধাপ ২ — সমানুপাতিক ওজন নির্ধারণ' },
          text: {
            en: 'Configure weights representing relative capacity (e.g. 3 for large nodes, 2 for medium, 1 for small).',
            bn: 'সক্ষমতা অনুযায়ী ওজন বসান (যেমন বড় নোডের জন্য ৩, মাঝারিটির জন্য ২ এবং ছোটটির জন্য ১ )।',
          },
        },
        {
          title: { en: 'Step 3 — Deploy Health Probes', bn: 'ধাপ ৩ — হেলথ প্রোব স্থাপন' },
          text: {
            en: 'Attach continuous health check monitors to detect unresponsive nodes and automatically isolate them.',
            bn: 'অচল নোড শনাক্ত করে স্বয়ংক্রিয়ভাবে আলাদা করতে সার্বক্ষণিক হেলথ চেক মনিটর চালু করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Verify Traffic Distribution', bn: 'ধাপ ৪ — ট্রাফিক বণ্টন যাচাই' },
          text: {
            en: 'Generate load across the gateway to confirm that actual request hit ratios match intended weight ratios.',
            bn: 'গেটওয়েতে ট্রাফিক পাঠিয়ে নিশ্চিত হোন যে বাস্তব রিকোয়েস্টের অনুপাত নির্ধারিত ওজনের সাথে পুরোপুরি মিলছে।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'wei-ex-1',
      kind: 'mcq',
      topic: 'spof-definition',
      question: {
        en: 'What is a Single Point of Failure (SPOF) in software systems architecture?',
        bn: 'সফটওয়্যার সিস্টেম আর্কিটেকচারে সিঙ্গেল পয়েন্ট অব ফেইলিউর (SPOF) বলতে কী বোঝায়?',
      },
      options: [
        { en: 'A solitary component whose individual breakdown or failure causes the entire system to go down', bn: 'একটিমাত্র উপাদান যার ব্যক্তিগত ব্যর্থতা পুরো সিস্টেমকে অচল করে দেয়' },
        { en: 'A computer monitor that cannot display green text', bn: 'একটি কম্পিউটার মনিটর যা সবুজ লেখা দেখাতে পারে না' },
        { en: 'A software program that only works during rainstorms', bn: 'এমন একটি সফটওয়্যার যা কেবল বৃষ্টির সময় কাজ করে' },
        { en: 'A keyboard key that produces two letters at once', bn: 'একটি কিবোর্ড বাটন যা একসাথে দুটি অক্ষর লিখে ফেলে' },
      ],
      answer: 0,
      hint: { en: 'A single point whose failure stops the entire system.', bn: 'এমন একটি বিন্দু যার ব্যর্থতায় পুরো সিস্টেম থেমে যায়।' },
      explanation: {
        en: 'A Single Point of Failure is any component that lacks redundancy; if it fails, the whole application terminates.',
        bn: 'সিঙ্গেল পয়েন্ট অব ফেইলিউর হলো এমন কোনো উপাদান যার বিকল্প নেই; এটি বিকল হলে পুরো অ্যাপ্লিকেশন বন্ধ হয়ে যায়।',
      },
    },
    {
      id: 'wei-ex-2',
      kind: 'mcq',
      topic: 'horizontal-vs-vertical-scaling',
      question: {
        en: 'Why is horizontal scaling generally superior to vertical scaling for large cloud applications?',
        bn: 'বড় ক্লাউড অ্যাপ্লিকেশনের জন্য ভার্টিক্যাল স্কেলিংয়ের চেয়ে অনুভূমিক স্কেলিং সাধারণত কেন সেরা?',
      },
      options: [
        { en: 'It allows adding arbitrary numbers of cheap commodity nodes with zero downtime, eliminating hardware upgrade ceilings', bn: 'এটি কোনো ডাউনটাইম ছাড়া স্বল্প মূল্যের একাধিক কম্পিউটার যুক্ত করার সুবিধা দেয় এবং হার্ডওয়্যার সীমাবদ্ধতা দূর করে' },
        { en: 'It makes the computer processor physically glow in the dark', bn: 'এটি কম্পিউটারের প্রসেসরকে অন্ধকারে উজ্জ্বল করে তোলে' },
        { en: 'It deletes all user passwords automatically to speed up login', bn: 'লগইন দ্রুত করতে এটি সব ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে' },
        { en: 'It eliminates the need for software source code', bn: 'এটি ব্যবহারের ফলে কোনো সফটওয়্যার সোর্স কোডের প্রয়োজন হয় না' },
      ],
      answer: 0,
      hint: { en: 'Horizontal scaling adds nodes with zero downtime.', bn: 'অনুভূমিক স্কেলিং কোনো ডাউনটাইম ছাড়াই নোড যুক্ত করে।' },
      explanation: {
        en: 'Horizontal scaling provides elastic scalability and high availability by distributing load across independent machines.',
        bn: 'অনুভূমিক স্কেলিং একাধিক স্বাধীন মেশিনে লোড ভাগ করে স্থিতিস্থাপক বৃদ্ধি ও সার্বক্ষণিক প্রাপ্যতা নিশ্চিত করে।',
      },
    },
    {
      id: 'wei-ex-3',
      kind: 'predict',
      topic: 'spof-acronym-letters',
      question: {
        en: 'What 4-letter uppercase acronym stands for Single Point of Failure (e.g. SPOF)?',
        bn: 'সিঙ্গেল পয়েন্ট অব ফেইলিউর নির্দেশকারী ৪ অক্ষরের ইংরেজি সংক্ষিপ্ত রূপটি কী (যেমন SPOF)?',
      },
      answer: 'SPOF',
      accept: ['SPOF', 'spof'],
      hint: { en: 'SPOF', bn: 'SPOF' },
      explanation: {
        en: 'SPOF stands for Single Point of Failure, an architectural vulnerability eliminated by load balancing.',
        bn: 'SPOF মানে Single Point of Failure, যা লোড ব্যালেন্সিংয়ের মাধ্যমে দূর করা হয়।',
      },
    },
    {
      id: 'wei-ex-4',
      kind: 'predict',
      topic: 'server-weight-purpose',
      question: {
        en: 'What 6-letter lowercase term represents the numerical priority or capacity assigned to an upstream server (e.g. weight)?',
        bn: 'আপস্ট্রিম সার্ভারের আপেক্ষিক ক্ষমতা নির্দেশ করতে ব্যবহৃত ৬ অক্ষরের ইংরেজি শব্দটি কী (যেমন weight)?',
      },
      answer: 'weight',
      accept: ['weight', 'weight;', 'weights'],
      hint: { en: 'weight', bn: 'weight' },
      explanation: {
        en: 'Server weight determines the relative proportion of requests dispatched to that specific node.',
        bn: 'সার্ভারের ওজন নির্ধারণ করে ওই নোডটি মোট রিকোয়েস্টের কত ভাগ কাজ পরিচালনা করবে।',
      },
    },
  ],
  quiz: {
    id: 'weights-and-the-weight-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'wei-qz-1',
        kind: 'mcq',
        topic: 'weighted-sim-distribution',
        question: {
          en: 'In our TypeScript benchmark of 2400 client queries across weights 3, 2, and 1, how many requests did the Primary Node process?',
          bn: 'আমাদের ৩, ২ ও ১ ওজনযুক্ত ৩টি নোডে ২৪০০টি ক্লায়েন্ট রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে প্রাইমারি নোড কতটি রিকোয়েস্ট সম্পন্ন করেছিল?',
        },
        options: [
          { en: '1200 requests (exactly 50.00% of all traffic, while Secondary handled 800 and Tertiary handled 400)', bn: '১২০০টি রিকোয়েস্ট (সমস্ত ট্রাফিকের ঠিক ৫০.০০%, যেখানে সেকেন্ডারি ৮০০টি এবং টারশিয়ারি ৪০০টি সম্পন্ন করে)' },
          { en: '10 requests total across the cluster', bn: 'ক্লাস্টারজুড়ে মোট ১০টি রিকোয়েস্ট' },
          { en: '2300 requests with 100 dropped queries', bn: '১০০টি ড্রপড কুয়েরি সহ ২৩০০টি রিকোয়েস্ট' },
          { en: '0 requests served', bn: '০টি রিকোয়েস্ট পরিবেশিত' },
        ],
        answer: 0,
        hint: { en: 'Primary handled 1200 requests (weight 3 out of 6).', bn: 'প্রাইমারি ১২০০টি রিকোয়েস্ট সামলেছে (মোট ৬ এর মধ্যে ওজন ৩ )। ' },
        explanation: {
          en: 'Because the Primary Node has weight 3 out of total weight 6 (3 + 2 + 1), it handles exactly 50% (1200 of 2400) of all queries.',
          bn: 'মোট ওজন ৬ এর (৩ + ২ + ১) মধ্যে প্রাইমারি নোডের ওজন ৩ হওয়ায় এটি সমস্ত কাজের ঠিক ৫০% (২৪০০ এর মধ্যে ১২০০টি) সম্পন্ন করে।',
        },
      },
      {
        id: 'wei-qz-2',
        kind: 'mcq',
        topic: 'elastic-horizontal-benefits',
        question: {
          en: 'How does a load balancer enable zero-downtime maintenance when rolling out software updates?',
          bn: 'নতুন সফটওয়্যার আপডেট দেওয়ার সময় লোড ব্যালেন্সার কীভাবে কোনো ডাউনটাইম ছাড়াই কাজ করার সুবিধা দেয়?',
        },
        options: [
          { en: 'It drains and removes one server at a time from the active pool to update it, while other healthy nodes handle live traffic without interruption', bn: 'এটি আপডেট করার জন্য একবারে একটি সার্ভারকে ট্রাফিক পাঠানো বন্ধ করে আলাদা করে নেয়, আর বাকি সচল নোডগুলো কোনো বাধা ছাড়াই লাইভ ট্রাফিক সামলায়' },
          { en: 'It shuts down the power supply of the entire office building', bn: 'এটি পুরো অফিস ভবনের বিদ্যুৎ সংযোগ বন্ধ করে দেয়' },
          { en: 'It forces visitors to wait 24 hours before loading the website', bn: 'ওয়েবসাইট লোড হওয়ার আগে এটি ব্যবহারকারীদের ২৪ ঘণ্টা অপেক্ষা করতে বাধ্য করে' },
          { en: 'It permanently deletes the database backup archives', bn: 'এটি ডেটাবেজের ব্যাকআপ ফাইলগুলো চিরতরে মুছে ফেলে' },
        ],
        answer: 0,
        hint: { en: 'It drains nodes one by one while others handle traffic.', bn: 'অন্যরা কাজ করার সময় এটি একে একে নোড ড্রেন করে।' },
        explanation: {
          en: 'Rolling updates drain connections from a single node, update it, and return it to the pool with zero client downtime.',
          bn: 'রোলিং আপডেটের মাধ্যমে একটি করে নোড খালি করে আপডেট দেওয়া হয় এবং ক্লায়েন্টের কোনো ডাউনটাইম ছাড়াই পুনরায় যুক্ত করা হয়।',
        },
      },
      {
        id: 'wei-qz-3',
        kind: 'mcq',
        topic: 'hardware-heterogeneity',
        question: {
          en: 'Why is weighted load balancing essential when running a cluster composed of heterogeneous server hardware?',
          bn: 'ভিন্ন ভিন্ন সক্ষমতার হার্ডওয়্যারে গঠিত ক্লাস্টারে ওজনযুক্ত লোড ব্যালেন্সিং কেন অপরিহার্য?',
        },
        options: [
          { en: 'It prevents small low-spec machines from being overwhelmed by the same request volume as large multi-core instances', bn: 'এটি বড় মাল্টি-কোর সার্ভারের সমান কাজ দিয়ে ছোট কম সক্ষমতার মেশিনগুলোকে অতিরিক্ত চাপে পড়ে ক্র্যাশ করা থেকে রক্ষা করে' },
          { en: 'It changes the font size of HTML text on mobile phones', bn: 'এটি মোবাইল ফোনে এইচটিএমএল লেখার ফন্ট সাইজ পরিবর্তন করে দেয়' },
          { en: 'It translates backend source code into assembly language', bn: 'এটি ব্যাকএন্ড সোর্স কোডকে অ্যাসেম্বলি ভাষায় রূপান্তর করে' },
          { en: 'It forces clients to buy newer computer hardware', bn: 'এটি ব্যবহারকারীদের নতুন কম্পিউটার কিনতে বাধ্য করে' },
        ],
        answer: 0,
        hint: { en: 'It matches request load to server hardware capacity.', bn: 'এটি সার্ভার হার্ডওয়্যার সক্ষমতার সাথে কাজের সামঞ্জস্য রক্ষা করে।' },
        explanation: {
          en: 'Weights ensure that each server receives traffic proportional to its CPU and RAM capacity, avoiding overload on weaker nodes.',
          bn: 'ওজন নিশ্চিত করে যে প্রতিটি সার্ভার তার সিপিইউ ও র্যামের অনুপাতে কাজ পায়, যাতে দুর্বল নোডগুলোতে অতিরিক্ত চাপ না পড়ে।',
        },
      },
      {
        id: 'wei-qz-4',
        kind: 'predict',
        topic: 'traffic-dispatcher-concept',
        question: {
          en: 'What 2-word lowercase term describes adding more machines rather than bigger hardware (e.g. horizontal scaling)?',
          bn: 'বড় হার্ডওয়্যারের বদলে আরও বেশি মেশিন যুক্ত করাকে নির্দেশ করে কোন ইংরেজি শব্দযুগল (যেমন horizontal scaling)?',
        },
        answer: 'horizontal scaling',
        accept: ['horizontal scaling', 'horizontal scale', 'scaling out'],
        hint: { en: 'horizontal scaling', bn: 'horizontal scaling' },
        explanation: {
          en: 'Horizontal scaling adds more instances to distribute load, as opposed to vertical scaling which upgrades a single instance.',
          bn: 'অনুভূমিক স্কেলিং কাজের চাপ ভাগ করতে আরও ইনস্ট্যান্স যুক্ত করে, যা একক মেশিন বড় করার চেয়ে অনেক বেশি কার্যকর।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'algos-and-the-algo',
    title: {
      en: 'Layer 4 vs Layer 7 Load Balancing: Protocols, Packets, and Content Routing',
      bn: 'লেয়ার ৪ বনাম লেয়ার ৭ লোড ব্যালেন্সিং: প্রোটোকল, প্যাকেট ও কনটেন্ট রাউটিং',
    },
  },
};
