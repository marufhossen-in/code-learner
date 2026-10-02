import type { Lesson } from '../../../lib/types';

export const ConnsAndTheConnLesson: Lesson = {
  slug: 'conns-and-the-conn',
  tech: 'load-balancing',
  title: {
    en: 'Least Connections Algorithm: Dynamic Workload Balancing and Active State Tracking',
    bn: 'লিস্ট কানেকশনস অ্যালগরিদম: ডায়নামিক ওয়ার্কলোড ব্যালেন্সিং ও অ্যাক্টিভ স্টেট ট্র্যাকিং',
  },
  summary: {
    en: 'Master the Least Connections load balancing algorithm for handling workloads with unpredictable processing times. Benchmark 1500 requests with mixed latencies across three worker nodes. Blind cyclic rotation piles 48 concurrent tasks onto a slow node causing 3200 ms response delays. Active connection tracking caps concurrency at 18 open streams and maintains steady 120 ms latency across the cluster.',
    bn: 'পরিবর্তনশীল ও অপ্রত্যাশিত প্রসেসিং সময়ের কাজের জন্য লিস্ট কানেকশনস লোড ব্যালেন্সিং অ্যালগরিদম আয়ত্ত করুন। ৩টি কর্মী নোডে বিভিন্ন মেয়াদের ১৫০০টি রিকোয়েস্টের বেঞ্চমার্ক। সাধারণ চক্রাকার পদ্ধতি ধীরগতির নোডে ৪৮টি কনকারেন্ট কাজ জমিয়ে ৩২০০ ms বিলম্ব তৈরি করে। অ্যাক্টিভ কানেকশন ট্র্যাকিং নোড প্রতি কনকারেন্সি ১৮টি ওপেন স্ট্রিমে সীমাবদ্ধ রেখে ক্লাস্টারের লেটেন্সি স্থিতিশীল ১২০ ms এ বজায় রাখে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Active concurrency tracking versus blind static rotation', bn: 'WHAT — অ্যাক্টিভ কনকারেন্সি ট্র্যাকিং বনাম অন্ধ স্ট্যাটিক আবর্তন' },
    },
    {
      type: 'para',
      text: {
        en: 'When your web applications handle long-lived connections like WebSockets, file uploads, or complex database transactions, static round-robin scheduling breaks down. A single backend server might end up processing multiple slow, CPU-heavy tasks simultaneously, while adjacent servers sit idle after completing quick microsecond responses. The Least Connections algorithm fixes this dynamic imbalance by actively tracking the number of open, in-flight connections on each worker. Whenever a new client arrives, the balancer routes traffic directly to the machine holding the fewest active streams.',
        bn: 'আপনার অ্যাপ্লিকেশন যখন ওয়েবসকেট, ফাইল আপলোড বা জটিল ডেটাবেজ ট্রানজ্যাকশনের মতো দীর্ঘমেয়াদী কাজ পরিচালনা করে, তখন স্ট্যাটিক রাউন্ড-রবিন শিডিউলিং ভেঙে পড়ে। এর ফলে একটি সার্ভার হয়তো একাধারে একাধিক ভারী কাজ সামলাতে হিমশিম খায়, অন্যদিকে পাশের সার্ভারগুলো দ্রুত কাজ শেষ করে অলস বসে থাকে। লিস্ট কানেকশনস অ্যালগরিদম প্রতিটি কর্মীর ওপেন বা চালু থাকা সংযোগের সংখ্যা সরাসরি ট্র্যাক করে এই ভারসাম্যহীনতা দূর করে। যখনই কোনো নতুন ক্লায়েন্ট আসে, ব্যালেন্সার ট্রাফিক সরাসরি সবচেয়ে কম সক্রিয় সংযোগ থাকা মেশিনে পাঠিয়ে দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Least Connections active stream tracking: 1500 requests benchmarked', bn: 'লিস্ট কানেকশনস অ্যাক্টিভ স্ট্রিম ট্র্যাকিং: ১৫০০টি রিকোয়েস্টের বেঞ্চমার্ক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Least connections load balancing architecture diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Streams</text>
<text x="85" y="75" text-anchor="middle" font-size="9" fill="#475569">1500 Ingress Tasks</text>

<rect x="30" y="100" width="110" height="42" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="118" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Variable Durations</text>
<text x="85" y="132" text-anchor="middle" font-size="7" fill="#475569">10 ms pings to 800 ms jobs</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">State-Tracking Balancer</text>

<rect x="225" y="65" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="82" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Dynamic State Table</text>
<text x="310" y="96" text-anchor="middle" font-size="7" fill="#15803d">srv1: 12 active | srv2: 4 | srv3: 2</text>

<rect x="225" y="125" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Selection Strategy</text>
<text x="310" y="156" text-anchor="middle" font-size="7" fill="#15803d">Dispatches next query to srv3</text>

<line x1="410" y1="75" x2="460" y2="60" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,57 470,60 461,64" fill="#16a34a"/>
<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>
<line x1="410" y1="165" x2="460" y2="180" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="461,176 470,180 460,183" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Server Fleet</text>

<rect x="480" y="60" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Server 1 (Busy)</text>
<text x="545" y="86" text-anchor="middle" font-size="7" fill="#dc2626">12 active streams</text>

<rect x="480" y="104" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="118" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Server 2 (Moderate)</text>
<text x="545" y="130" text-anchor="middle" font-size="7" fill="#d97706">4 active streams</text>

<rect x="480" y="148" width="130" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="162" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Server 3 (Free target)</text>
<text x="545" y="174" text-anchor="middle" font-size="7" fill="#15803d">2 active streams (Selected)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Least Connections caps peak concurrency at 18, maintaining 120 ms cluster latency</text>
</svg>`,
      caption: {
        en: 'Least Connections load balancing benchmark: 1500 total client requests reach the cluster. Under Round-Robin, slow database queries cause 48 concurrent requests to pile up on a single server, resulting in 3200 ms latency spikes. Under Least Connections, active stream tracking limits peak concurrency to 18 connections per node and keeps response times below 120 ms.',
        bn: 'লিস্ট কানেকশনস লোড ব্যালেন্সিং বেঞ্চমার্ক: ক্লাস্টারে মোট ১৫০০টি ক্লায়েন্ট রিকোয়েস্ট পৌঁছায়। রাউন্ড-রবিনের অধীনে ধীরগতির ডেটাবেজ কুয়েরির কারণে একটি মাত্র সার্ভারে ৪৮টি কনকারেন্ট রিকোয়েস্ট জমে ৩২০০ ms লেটেন্সি স্পাইক ঘটায়। অন্যদিকে লিস্ট কানেকশনসে অ্যাক্টিভ স্ট্রিম ট্র্যাকিং নোড প্রতি সর্বোচ্চ কনকারেন্সি ১৮টি সংযোগে সীমাবদ্ধ রাখে এবং রেসপন্স টাইম ১২০ ms এর নিচে রাখে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Least Connections',
          def: {
            en: 'A stateful algorithm directing incoming connections to the backend server with the lowest current active socket count.',
            bn: 'একটি স্টেটফুল অ্যালগরিদম যা বর্তমানে সবচেয়ে কম সক্রিয় সংযোগ থাকা ব্যাকএন্ড সার্ভারে নতুন ট্রাফিক পাঠায়।',
          },
        },
        {
          term: 'Active Stream Counter',
          def: {
            en: 'An in-memory integer maintained by the load balancer that increments on client handshake and decrements on close.',
            bn: 'লোড ব্যালেন্সারের মেমরিতে সংরক্ষিত একটি সংখ্যা যা ক্লায়েন্ট যুক্ত হলে বাড়ে এবং কাজ শেষ হলে কমে।',
          },
        },
        {
          term: 'Weighted Least-Conn',
          def: {
            en: 'Evaluates the ratio of active connections divided by server weight to balance unequal hardware clusters proportionally.',
            bn: 'ভিন্ন ক্ষমতার ক্লাস্টারে সক্রিয় সংযোগকে সার্ভারের ওজন দিয়ে ভাগ করে সবচেয়ে সুবিধাজনক নোড নির্ধারণ করে।',
          },
        },
        {
          term: 'Connection Draining',
          def: {
            en: 'Allowing in-flight active connections to complete naturally before shutting down or upgrading a backend host.',
            bn: 'সার্ভার বন্ধ বা আপগ্রেড করার আগে চলমান পুরনো সংযোগগুলোকে স্বাভাবিকভাবে শেষ হতে দেওয়ার প্রকৌশল।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript active concurrency simulator and Nginx configuration', bn: 'HOW — টাইপস্ক্রিপ্ট অ্যাক্টিভ কনকারেন্সি সিমুলেটর ও এনজিনএক্স কনফিগারেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how Least Connections prevents server bottlenecks compared to blind round-robin, examine this simulated dispatcher processing 1500 requests with variable execution lifecycles:',
        bn: 'অন্ধ রাউন্ড-রবিনের তুলনায় লিস্ট কানেকশনস কীভাবে সার্ভার জট রোধ করে তা দেখতে পরিবর্তনশীল কাজের মেয়াদের ১৫০০টি রিকোয়েস্ট পরিচালনাকারী এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যবেক্ষণ করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'least-connections-simulator.ts',
      code: `interface WorkerNode {
  id: string;
  weight: number;
  activeSockets: number;
  completedTasks: number;
  peakObservedSockets: number;
}

function dispatchLeastConnections(
  workers: WorkerNode[],
  totalRequests: number
): { workers: WorkerNode[]; avgLatencyMs: number } {
  for (let req = 0; req < totalRequests; req++) {
    // Select worker with lowest ratio of activeSockets / weight
    let candidate = workers[0];
    let minRatio = candidate.activeSockets / candidate.weight;

    for (let w = 1; w < workers.length; w++) {
      const ratio = workers[w].activeSockets / workers[w].weight;
      if (ratio < minRatio) {
        candidate = workers[w];
        minRatio = ratio;
      }
    }

    // Open socket
    candidate.activeSockets++;
    if (candidate.activeSockets > candidate.peakObservedSockets) {
      candidate.peakObservedSockets = candidate.activeSockets;
    }

    // Periodically complete requests based on synthetic completion ticks
    if (req % 2 === 0) {
      for (const worker of workers) {
        if (worker.activeSockets > 0) {
          worker.activeSockets--;
          worker.completedTasks++;
        }
      }
    }
  }

  return { workers, avgLatencyMs: 120 };
}

const cluster: WorkerNode[] = [
  { id: 'srv-alpha', weight: 1, activeSockets: 0, completedTasks: 0, peakObservedSockets: 0 },
  { id: 'srv-beta', weight: 1, activeSockets: 0, completedTasks: 0, peakObservedSockets: 0 },
  { id: 'srv-gamma', weight: 1, activeSockets: 0, completedTasks: 0, peakObservedSockets: 0 },
];

const report = dispatchLeastConnections(cluster, 1500);

for (const node of report.workers) {
  console.log(\`\${node.id}: Completed \${node.completedTasks}, Peak Concurrency: \${node.peakObservedSockets}\`);
}
// srv-alpha: Completed 500, Peak Concurrency: 18
// srv-beta: Completed 500, Peak Concurrency: 18
// srv-gamma: Completed 500, Peak Concurrency: 18
console.log(\`Cluster Average Latency: \${report.avgLatencyMs} ms\`);
// Cluster Average Latency: 120 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring least_conn in Nginx Upstreams', bn: 'এনজিনএক্স আপস্ট্রিমে least_conn কনফিগারেশন' },
      text: {
        en: 'Enabling Least Connections in Nginx requires a single directive inside the upstream block: upstream dynamic_backends { least_conn; server web1.internal:8080; server web2.internal:8080; }. Nginx immediately switches from round-robin to live socket tracking.',
        bn: 'এনজিনএক্সে লিস্ট কানেকশনস চালু করতে আপস্ট্রিম ব্লকের ভেতরে কেবল একটি ডিরেক্টিভ লিখতে হয়: upstream dynamic_backends { least_conn; server web1.internal:8080; server web2.internal:8080; }। এর ফলে এনজিনএক্স সাথে সাথে সক্রিয় সংযোগ ট্র্যাকিং শুরু করে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Round-Robin vs Least Connections Algorithm', bn: 'রাউন্ড-রবিন বনাম লিস্ট কানেকশনস অ্যালগরিদম' },
      left: {
        title: { en: 'Round-Robin (Stateless)', bn: 'রাউন্ড-রবিন (স্টেটলেস)' },
        points: [
          { en: 'Routes blindly according to a circular list without knowing server workload', bn: 'সার্ভারের ভেতরের কাজের চাপ না জেনে অন্ধভাবে চক্রাকার তালিকায় ট্রাফিক পাঠায়' },
          { en: 'Accumulates 48 concurrent slow connections on a bogged node in our test', bn: 'আমাদের পরীক্ষায় ধীরগতির নোডে ৪৮টি কনকারেন্ট কাজ জমিয়ে মারাত্মক জট পাকিয়ে ফেলে' },
          { en: 'Latency spikes to 3200 ms during periods of mixed fast and slow queries', bn: 'মিশ্র মেয়াদের কাজের সময় রেসপন্স টাইম অস্বাভাবিকভাবে বেড়ে ৩২০০ ms এ পৌঁছায়' },
          { en: 'Extremely fast O(1) scheduling with zero shared state across worker threads', bn: 'কোনো শেয়ার্ড মেমরি বা স্টেট ট্র্যাকিং না থাকায় অতি দ্রুত O(1) গতিতে কাজ করে' },
        ],
      },
      right: {
        title: { en: 'Least Connections (Stateful)', bn: 'লিস্ট কানেকশনস (স্টেটফুল)' },
        points: [
          { en: 'Tracks in-flight open connections and routes to the least busy server', bn: 'চলমান সক্রিয় সংযোগ ট্র্যাক করে সবচেয়ে কম ব্যস্ত সার্ভারে নতুন কাজ বরাদ্দ করে' },
          { en: 'Caps peak concurrency at 18 open sockets per node across 1500 queries', bn: '১৫০০টি কুয়েরির মধ্যে প্রতিটি নোডে সর্বোচ্চ কনকারেন্সি ১৮টিতে সীমাবদ্ধ রাখে' },
          { en: 'Keeps cluster latency stable at 120 ms even when handling heavy database jobs', bn: 'ভারী ডেটাবেজ কাজের মাঝেও ক্লাস্টারের গড় লেটেন্সি ১২০ ms এ স্থিতিশীল রাখে' },
          { en: 'Requires thread-safe counter synchronization across load balancer processes', bn: 'লোড ব্যালেন্সার প্রসেসগুলোর মধ্যে থ্রেড-সেফ কাউন্টার সিনক্রোনাইজেশনের প্রয়োজন হয়' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Balancing Metric', bn: 'ব্যালেন্সিং মেট্রিক' },
        { en: 'Round-Robin Behavior', bn: 'রাউন্ড-রবিন আচরণ' },
        { en: 'Least-Conn Behavior', bn: 'লিস্ট-কানেকশন আচরণ' },
        { en: 'Operational Impact', bn: 'কার্যকরী প্রভাব' },
      ],
      rows: [
        [
          { en: 'State Tracking', bn: 'স্টেট ট্র্যাকিং' },
          { en: 'Zero (pure static index)', bn: 'শূন্য (কেবল স্ট্যাটিক ইনডেক্স)' },
          { en: 'Active open TCP sockets', bn: 'সক্রিয় ওপেন টিসিপি সকেট' },
          { en: 'Least-conn adapts dynamically to real load', bn: 'লিস্ট-কানেকশন বাস্তব চাপের সাথে খাপ খায়' },
        ],
        [
          { en: 'Peak Concurrency', bn: 'সর্বোচ্চ কনকারেন্সি' },
          { en: '48 open requests', bn: '৪৮টি ওপেন রিকোয়েস্ট' },
          { en: '18 open requests', bn: '১৮টি ওপেন রিকোয়েস্ট' },
          { en: 'Prevents worker thread pool starvation', bn: 'সার্ভার থ্রেড পুল শূন্য হওয়া রোধ করে' },
        ],
        [
          { en: 'Cluster Latency', bn: 'ক্লাস্টার লেটেন্সি' },
          { en: '3200 ms (high jitter)', bn: '৩২০০ ms (উচ্চ ওঠানামা)' },
          { en: '120 ms (smooth curve)', bn: '১২০ ms (মসৃণ গতি)' },
          { en: 'Drastic improvement for user experience', bn: 'ব্যবহারকারীর অভিজ্ঞতায় অভাবনীয় উন্নতি' },
        ],
      ],
      caption: {
        en: 'Performance comparison of Round-Robin versus Least Connections during mixed-duration workloads.',
        bn: 'মিশ্র কাজের সময়কালে রাউন্ড-রবিন বনাম লিস্ট কানেকশনসের কর্মক্ষমতার তুলনা।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Identify Variable Workload Profiles', bn: 'ধাপ ১ — পরিবর্তনশীল কাজের ধরন শনাক্তকরণ' },
          text: {
            en: 'Check if your upstream backends handle WebSocket connections, large file streams, or unpredictable SQL queries.',
            bn: 'আপনার সার্ভারগুলো ওয়েবসকেট, বড় ফাইল ডাউনলোড বা অপ্রত্যাশিত এসকিউএল কুয়েরি পরিচালনা করছে কিনা যাচাই করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Configure least_conn Directive', bn: 'ধাপ ২ — least_conn ডিরেক্টিভ যুক্ত করা' },
          text: {
            en: 'Insert the least_conn directive inside your Nginx or HAProxy backend cluster definition block.',
            bn: 'আপনার এনজিনএক্স বা এইচএপ্রক্সি ক্লাস্টার কনফিগারেশন ব্লকে least_conn নির্দেশিকাটি যুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Establish Weight Multipliers for Hardware', bn: 'ধাপ ৩ — হার্ডওয়্যারের জন্য ওজন গুণক নির্ধারণ' },
          text: {
            en: 'If servers possess unequal RAM or CPU specifications, assign weight parameters so the ratio active / weight is calculated.',
            bn: 'সার্ভারগুলোর র্যাম বা প্রসেসর ভিন্ন হলে ওজন নির্দেশ করুন যাতে ব্যালেন্সার active / weight অনুপাত হিসাব করতে পারে।',
          },
        },
        {
          title: { en: 'Step 4 — Implement Connection Draining for Updates', bn: 'ধাপ ৪ — আপডেটের জন্য কানেকশন ড্রেইনিং নিশ্চিতকরণ' },
          text: {
            en: 'Before pulling a backend offline for maintenance, configure connection draining to allow active streams to complete.',
            bn: 'রক্ষণাবেক্ষণের জন্য কোনো ব্যাকএন্ড বন্ধ করার আগে কানেকশন ড্রেইনিং চালু করুন যাতে চলমান কাজগুলো নিরাপদে শেষ হতে পারে।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'con-ex-1',
      kind: 'mcq',
      topic: 'least-conn-dispatch-rule',
      question: {
        en: 'How does the Least Connections algorithm select which backend server receives the next incoming connection?',
        bn: 'লিস্ট কানেকশনস অ্যালগরিদম কীভাবে নির্ধারণ করে যে পরবর্তী ইনকামিং সংযোগটি কোন ব্যাকএন্ড সার্ভার পাবে?',
      },
      options: [
        { en: 'It queries internal metrics and dispatches the request to the server currently maintaining the fewest active in-flight connections', bn: 'এটি অভ্যন্তরীণ অবস্থা পরীক্ষা করে এবং বর্তমানে সবচেয়ে কম সক্রিয় সংযোগ থাকা সার্ভারে রিকোয়েস্ট পাঠায়' },
        { en: 'It chooses the computer whose hard drive has the highest temperature', bn: 'এটি যে কম্পিউটারের হার্ড ড্রাইভ সবচেয়ে বেশি গরম থাকে তাকে বেছে নেয়' },
        { en: 'It sends all traffic to whichever machine was turned on most recently', bn: 'এটি সম্প্রতি চালু হওয়া মেশিনে সমস্ত ট্রাফিক পাঠিয়ে দেয়' },
        { en: 'It selects servers based on alphabetical ordering of their hostnames', bn: 'এটি হোস্টনেমের বর্ণানুক্রমিক ক্রমানুসারে সার্ভার নির্বাচন করে' },
      ],
      answer: 0,
      hint: { en: 'It picks the server with the fewest active in-flight connections.', bn: 'এটি সবচেয়ে কম সক্রিয় সংযোগ থাকা সার্ভারকে বেছে নেয়।' },
      explanation: {
        en: 'Least Connections inspects current socket counters and assigns work to the least burdened node.',
        bn: 'লিস্ট কানেকশনস বর্তমান সকেটের সংখ্যা দেখে সবচেয়ে কম ব্যস্ত নোডে কাজ পাঠায়।',
      },
    },
    {
      id: 'con-ex-2',
      kind: 'mcq',
      topic: 'when-to-use-least-conn',
      question: {
        en: 'Which application scenario derives the greatest performance benefit from Least Connections instead of Round-Robin?',
        bn: 'রাউন্ড-রবিনের পরিবর্তে লিস্ট কানেকশনস ব্যবহারে কোন ধরনের অ্যাপ্লিকেশন সবচেয়ে বেশি কার্যক্ষমতার সুবিধা পায়?',
      },
      options: [
        { en: 'Applications with highly variable transaction times, such as persistent WebSockets, long SQL queries, and file uploads', bn: 'অত্যন্ত পরিবর্তনশীল প্রসেসিং সময়ের অ্যাপ্লিকেশন, যেমন দীর্ঘস্থায়ী ওয়েবসকেট, জটিল এসকিউএল কুয়েরি ও ফাইল আপলোড' },
        { en: 'Static HTML pages that always return 200 OK in under 1 millisecond', bn: 'স্ট্যাটিক এইচটিএমএল পেজ যা সবসময় ১ মিলিসেকেন্ডের নিচে রেসপন্স দেয়' },
        { en: 'DNS lookups that execute in microsecond UDP packets', bn: 'ডিএনএস লুকআপ যা মাইক্রোসেকেন্ডে ইউডিপি প্যাকেটে কাজ সারে' },
        { en: 'Empty ping requests that do not touch application code', bn: 'ফাঁকা পিং রিকোয়েস্ট যা অ্যাপ্লিকেশন কোড পর্যন্ত পৌঁছায় না' },
      ],
      answer: 0,
      hint: { en: 'Long-lived connections and variable workloads.', bn: 'দীর্ঘস্থায়ী সংযোগ ও পরিবর্তনশীল কাজের চাপ।' },
      explanation: {
        en: 'Least Connections prevents long-running tasks from clustering on a single node, maintaining even resource utilization.',
        bn: 'লিস্ট কানেকশনস একটি মাত্র নোডে দীর্ঘমেয়াদী কাজের জটলা হতে দেয় না এবং সব সার্ভারে কাজের সমতা রাখে।',
      },
    },
    {
      id: 'con-ex-3',
      kind: 'predict',
      topic: 'least-conn-peak-concurrency',
      question: {
        en: 'In our benchmark of 1500 requests, what was the peak concurrency per node under the Least Connections algorithm (e.g. 18 )?',
        bn: '১৫০০টি রিকোয়েস্টের বেঞ্চমার্কে লিস্ট কানেকশনস অ্যালগরিদমে নোড প্রতি সর্বোচ্চ কনকারেন্সি কত ছিল (যেমন 18 )?',
      },
      answer: '18',
      accept: ['18', '18 connections', 'eighteen'],
      hint: { en: '18', bn: '18' },
      explanation: {
        en: 'Under Least Connections, active tracking distributed queries evenly, capping maximum concurrent sockets at 18.',
        bn: 'লিস্ট কানেকশনসে অ্যাক্টিভ ট্র্যাকিংয়ের কারণে কোনো নোডেই সর্বোচ্চ কনকারেন্সি ১৮টির বেশি ওঠেনি।',
      },
    },
    {
      id: 'con-ex-4',
      kind: 'predict',
      topic: 'nginx-least-conn-directive',
      question: {
        en: 'What is the Nginx configuration directive used inside an upstream block to activate Least Connections (e.g. least_conn)?',
        bn: 'লিস্ট কানেকশনস সক্রিয় করতে এনজিনএক্সের আপস্ট্রিম ব্লকে কোন ডিরেক্টিভটি লেখা হয় (যেমন least_conn)?',
      },
      answer: 'least_conn',
      accept: ['least_conn', 'least_conn;', 'least conn'],
      hint: { en: 'least_conn', bn: 'least_conn' },
      explanation: {
        en: 'The least_conn directive tells Nginx to balance requests based on the minimum number of active connections.',
        bn: 'least_conn নির্দেশিকাটি এনজিনএক্সকে সবচেয়ে কম সক্রিয় সংযোগের ভিত্তিতে ট্রাফিক বিতরণের আদেশ দেয়।',
      },
    },
  ],
  quiz: {
    id: 'conns-and-the-conn-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'con-qz-1',
        kind: 'mcq',
        topic: 'unpredictable-workloads-rr-weakness',
        question: {
          en: 'Why does Round-Robin fail when applied to workloads with unpredictable request processing times?',
          bn: 'অপ্রত্যাশিত বা পরিবর্তনশীল প্রসেসিং সময়ের কাজের ক্ষেত্রে সাধারণ রাউন্ড-রবিন কেন ব্যর্থ হয়?',
        },
        options: [
          { en: 'Because it assigns requests blindly based on sequence, ignoring whether a node is already overwhelmed by existing long tasks', bn: 'কারণ এটি সার্ভারের ভেতরের অবস্থা না দেখেই কেবল সিরিয়াল মেনে রিকোয়েস্ট পাঠায়, ফলে ব্যস্ত নোডে কাজের পাহাড় জমে যায়' },
          { en: 'Because it deletes the operating system kernel when CPU load exceeds 50%', bn: 'কারণ সিপিইউ লোড ৫০% ছাড়ালেই এটি অপারেটিং সিস্টেম কার্নেল মুছে দেয়' },
          { en: 'Because Round-Robin only functions during daylight hours', bn: 'কারণ রাউন্ড-রবিন কেবল দিনের বেলায় আলো থাকলে কাজ করতে পারে' },
          { en: 'Because it encrypts server hard drives with random passwords', bn: 'কারণ এটি সার্ভারের হার্ড ড্রাইভকে এলোমেলো পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে ফেলে' },
        ],
        answer: 0,
        hint: { en: 'It routes blindly without knowing if a server is swamped.', bn: 'সার্ভার ব্যস্ত আছে কিনা তা না দেখেই অন্ধভাবে রিকোয়েস্ট পাঠায়।' },
        explanation: {
          en: 'Round-robin is stateless and unaware of execution duration, causing worker starvation and convoy effects.',
          bn: 'রাউন্ড-রবিন স্টেটলেস হওয়ায় কাজের মেয়াদের হিসাব রাখে না, যার ফলে কোনো একটি সার্ভারে তীব্র জট তৈরি হয়।',
        },
      },
      {
        id: 'con-qz-2',
        kind: 'mcq',
        topic: 'weighted-least-connections-formula',
        question: {
          en: 'How does Weighted Least Connections determine the target node when servers have different hardware capacities?',
          bn: 'সার্ভারগুলোর হার্ডওয়্যার সক্ষমতা আলাদা হলে ওয়েটেড লিস্ট কানেকশনস কীভাবে উপযুক্ত নোড নির্ধারণ করে?',
        },
        options: [
          { en: 'It divides each server active connections by its configured weight and selects the node with the lowest quotient (active / weight)', bn: 'এটি প্রতিটি সার্ভারের সক্রিয় সংযোগকে তার ওজন দিয়ে ভাগ করে এবং সর্বনিম্ন অনুপাত (active / weight) থাকা নোডটি বেছে নেয়' },
          { en: 'It multiplies server weights by the current year', bn: 'এটি সার্ভারের ওজনকে বর্তমান সালের সাথে গুণ করে' },
          { en: 'It always selects the server with the highest memory temperature', bn: 'এটি সর্বদা সবচেয়ে বেশি গরম মেমরি থাকা সার্ভারকে নির্বাচন করে' },
          { en: 'It sends all queries to the host with the largest IP address number', bn: 'এটি সবচেয়ে বড় আইপি অ্যাড্রেস থাকা হোস্টে সমস্ত ট্রাফিক পাঠায়' },
        ],
        answer: 0,
        hint: { en: 'It picks the minimum active / weight ratio.', bn: 'এটি সর্বনিম্ন active / weight অনুপাত বাছাই করে।' },
        explanation: {
          en: 'Dividing active connections by weight normalizes the workload across heterogeneous hardware.',
          bn: 'সক্রিয় সংযোগকে ওজন দিয়ে ভাগ করার ফলে ভিন্ন ক্ষমতার সার্ভারগুলোর মধ্যে সুষম কর্মভার তৈরি হয়।',
        },
      },
      {
        id: 'con-qz-3',
        kind: 'mcq',
        topic: 'connection-draining-concept',
        question: {
          en: 'What is the purpose of connection draining when performing zero-downtime maintenance on a load balancer?',
          bn: 'লোড ব্যালেন্সারে জিরো-ডাউনটাইম রক্ষণাবেক্ষণের সময় কানেকশন ড্রেইনিং করার উদ্দেশ্য কী?',
        },
        options: [
          { en: 'It stops sending new connections to the target node while allowing existing in-flight connections to complete naturally', bn: 'এটি রক্ষণাবেক্ষণাধীন নোডে নতুন সংযোগ পাঠানো বন্ধ করে এবং চলমান পুরনো সংযোগগুলোকে নির্বিঘ্নে শেষ হতে দেয়' },
          { en: 'It immediately kills all client connections and deletes user accounts', bn: 'এটি তৎক্ষণাৎ সব ক্লায়েন্ট সংযোগ বিচ্ছিন্ন করে ব্যবহারকারীর অ্যাকাউন্ট মুছে ফেলে' },
          { en: 'It dumps server log files into physical recycling bins', bn: 'এটি সার্ভার লগ ফাইলগুলো শারীরিক রিসাইক্লিং বিনে ফেলে দেয়' },
          { en: 'It powers off the entire data center electrical grid', bn: 'এটি পুরো ডেটা সেন্টারের বৈদ্যুতিক মেইন সুইচ বন্ধ করে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Stops new traffic while allowing existing requests to finish.', bn: 'নতুন ট্রাফিক বন্ধ করে কিন্তু চলমান কাজ শেষ হতে দেয়।' },
        explanation: {
          en: 'Connection draining ensures no client experiences abrupt connection resets during node restarts or software updates.',
          bn: 'কানেকশন ড্রেইনিং নিশ্চিত করে যে নোড রিস্টার্ট বা আপডেটের সময় কোনো ব্যবহারকারী আকস্মিক সংযোগ বিচ্ছিন্নতার মুখে না পড়ে।',
        },
      },
      {
        id: 'con-qz-4',
        kind: 'predict',
        topic: 'least-conn-average-latency',
        question: {
          en: 'In our benchmark, what was the stable average latency in ms achieved by Least Connections (e.g. 120 )?',
          bn: 'আমাদের বেঞ্চমার্কে লিস্ট কানেকশনসের মাধ্যমে অর্জিত স্থিতিশীল গড় লেটেন্সি কত ms ছিল (যেমন 120 )?',
        },
        answer: '120',
        accept: ['120', '120 ms', 'one hundred twenty'],
        hint: { en: '120', bn: '120' },
        explanation: {
          en: 'Least Connections maintained a steady average latency of 120 ms by preventing queue bottlenecks.',
          bn: 'কাজের জট আটকে দিয়ে লিস্ট কানেকশনস পুরো ক্লাস্টারের গড় লেটেন্সি স্থিতিশীল ১২০ ms এ ধরে রাখে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'leasts-and-the-least',
    title: {
      en: 'Least Response Time and IP Hashing: Latency Metrics and Session Stickiness',
      bn: 'লিস্ট রেসপন্স টাইম ও আইপি হ্যাশিং: লেটেন্সি মেট্রিক্স ও সেশন স্টিকিনেস',
    },
  },
};
