import type { Lesson } from '../../../lib/types';

export const theLoadBalancerCourtLesson: Lesson = {
  slug: 'the-load-balancer-court',
  tech: 'networking',
  title: {
    en: 'Load Balancing Architecture — Layer 4 vs Layer 7 and Scheduling Algorithms',
    bn: 'লোড ব্যালান্সিং আর্কিটেকচার: লেয়ার ৪ বনাম লেয়ার ৭ এবং শিডিউলিং অ্যালগরিদম'
  },
  summary: {
    en: 'Production backend fleets never rely on a single server to handle client traffic. Load balancers act as central traffic dispatchers, distributing incoming requests across clusters of application instances. This lesson establishes the architectural divide between Layer 4 transport balancing (operating at line-rate on 5-tuples without terminating TCP/TLS) and Layer 7 application balancing (terminating connections to inspect HTTP headers, cookies, and paths). You will master core scheduling algorithms including Round-Robin, Least Connections, and Consistent Hashing, analyze health check flap damping, and configure connection draining to achieve zero-downtime rolling deployments.',
    bn: 'প্রোডাকশন ব্যাকএন্ড সিস্টেমে কখনো একটি মাত্র সার্ভারের ওপর পুরো ট্রাফিকের ভার ছেড়ে দেওয়া হয় না। লোড ব্যালান্সার কেন্দ্রীয় ট্রাফিক নিয়ন্ত্রক হিসেবে কাজ করে একাধিক অ্যাপ্লিকেশন ইনস্ট্যান্সের মাঝে রিকোয়েস্ট সুষমভাবে বণ্টন করে। এই পাঠে লেয়ার ৪ ট্রান্সপোর্ট ব্যালান্সিং (টিসিপি/টিএলএস বন্ধ না করে ৫-টিপল তথ্যের ওপর অতি দ্রুত প্যাকেট রাউটিং) এবং লেয়ার ৭ অ্যাপ্লিকেশন ব্যালান্সিং (এইচটিটিপি হেডার, ইউআরএল ও কুকি পরীক্ষা করে বিষয়বস্তু ভিত্তিক রাউটিং) এর মূল পার্থক্য বিশ্লেষণ করা হয়েছে। এখানে রাউন্ড-রবিন, লিস্ট কানেকশনস ও কনসিসটেন্ট হ্যাশিং অ্যালগরিদম, হেলথ চেক ফ্ল্যাপ ড্যাম্পিং এবং শূন্য ডাউনটাইম ডিপ্লয়মেন্টের জন্য কানেকশন ড্রেনিং বিস্তারিতভাবে পর্যালোচনা করা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-treaty-shelf',
    tech: 'networking',
    title: {
      en: 'Protocol Contracts — WebSockets, SSE, gRPC, and HTTP Semantics',
      bn: 'প্রোটোকল চুক্তি: ওয়েবসকেট, এসএসই, জিআরপিসি ও এইচটিটিপি চুক্তি'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'load-balancer-architecture-overview',
      text: {
        en: 'The Core Architecture of Modern Load Balancing',
        bn: 'আধুনিক লোড ব্যালান্সিংয়ের মূল স্থাপত্যিক রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you scale web infrastructure beyond a single server, load balancers govern how millions of incoming requests are distributed across backend fleets. Acting as reverse proxies, they decouple external client addresses from internal server topologies.',
        bn: 'যখন আপনি ওয়েব অবকাঠামোকে একটি একক সার্ভারের বাইরে স্কেল করেন, তখন লোড ব্যালান্সার লক্ষ লক্ষ আগত রিকোয়েস্ট ব্যাকএন্ড সার্ভারের মাঝে কীভাবে বণ্টিত হবে তা পরিচালনা করে। রিভার্স প্রক্সি হিসেবে কাজ করে তারা বহিরাগত ক্লায়েন্ট থেকে অভ্যন্তরীণ সার্ভার কাঠামোকে সম্পূর্ণ আলাদা রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Load balancers operate at two distinct layers of the networking stack: Layer 4 (Transport layer, inspecting IP and TCP/UDP ports) and Layer 7 (Application layer, parsing full HTTP requests). Selecting between them represents an architectural tradeoff between raw packet throughput and rich content-aware routing logic.',
        bn: 'লোড ব্যালান্সার নেটওয়ার্কিং স্ট্যাকের ২টি ভিন্ন স্তরে কাজ করে: লেয়ার ৪ (ট্রান্সপোর্ট স্তর, যা আইপি ও টিসিপি/ইউডিপি পোর্ট দেখে) এবং লেয়ার ৭ (অ্যাপ্লিকেশন স্তর, যা পূর্ণাঙ্গ এইচটিটিপি রিকোয়েস্ট পার্স করে)। উভয়ের মধ্যে নির্বাচন হলো কাঁচা প্যাকেটের উচ্চ গতি বনাম বিষয়বস্তু-ভিত্তিক বুদ্ধিমান রাউটিংয়ের চমৎকার ভারসাম্য।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'layer-4-load-balancing',
          def: {
            en: 'Transport-level traffic distribution based on IP and TCP/UDP ports without inspecting application payloads.',
            bn: 'ট্রান্সপোর্ট স্তরে আইপি ও পোর্টের ওপর ভিত্তি করে প্যাকেট ফরোয়ার্ডিং যা ভেতরের অ্যাপ্লিকেশন ডেটা পরীক্ষা করে না।'
          }
        },
        {
          term: 'layer-7-load-balancing',
          def: {
            en: 'Application-level traffic distribution that terminates TLS and routes requests based on HTTP URLs, headers, and cookies.',
            bn: 'অ্যাপ্লিকেশন স্তরে টিএলএস টার্মিনেট করে এইচটিটিপি ইউআরএল, হেডার ও কুকি বিশ্লেষণকারী বুদ্ধিমান রাউটিং ব্যবস্থা।'
          }
        },
        {
          term: 'least-connections',
          def: {
            en: 'A scheduling algorithm that directs each new incoming request to the server with the fewest active in-flight requests.',
            bn: 'এমন একটি শিডিউলিং নিয়ম যা নতুন রিকোয়েস্টকে সবচেয়ে কম সক্রিয় কাজ থাকা সার্ভারের কাছে পাঠায়।'
          }
        },
        {
          term: 'connection-draining',
          def: {
            en: 'A graceful deregistration protocol that stops sending new requests to a server while allowing existing requests to finish.',
            bn: 'সার্ভারে নতুন রিকোয়েস্ট পাঠানো বন্ধ রেখে চলমান কাজগুলো নির্বিঘ্নে শেষ করার সুযোগ দেওয়ার মার্জিত পদ্ধতি।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'l4-vs-l7-table',
      text: {
        en: 'Comparison Matrix: Layer 4 vs Layer 7 Load Balancing',
        bn: 'তুলনামূলক ম্যাট্রিক্স: লেয়ার ৪ বনাম লেয়ার ৭ লোড ব্যালান্সিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The choice between Layer 4 and Layer 7 dictates server resource requirements, TLS termination architecture, and request inspection capabilities.',
        bn: 'লেয়ার ৪ নাকি লেয়ার ৭ ব্যবহার করবেন তা নির্ধারণ করে সার্ভারের মেমরি খরচ, টিএলএস টার্মিনেশন কাঠামো এবং রিকোয়েস্ট বিশ্লেষণের সুযোগ।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architecture Attribute', bn: 'স্থাপত্যিক বৈশিষ্ট্য' },
        { en: 'Layer 4 Load Balancing (L4)', bn: 'লেয়ার ৪ লোড ব্যালান্সিং (L4)' },
        { en: 'Layer 7 Load Balancing (L7)', bn: 'লেয়ার ৭ লোড ব্যালান্সিং (L7)' },
        { en: 'Production Tradeoff Analysis', bn: 'প্রোডাকশনের তুলনামূলক বিশ্লেষণ' }
      ],
      rows: [
        [
          { en: 'Inspection Depth', bn: 'বিশ্লেষণের গভীরতা' },
          { en: 'IP packet and TCP/UDP header only (5-tuple)', bn: 'কেবল আইপি প্যাকেট ও টিসিপি/ইউডিপি হেডার (৫-টিপল)' },
          { en: 'Full HTTP request (URL path, headers, cookies, body)', bn: 'সম্পূর্ণ এইচটিটিপি রিকোয়েস্ট (ইউআরএল, হেডার, কুকি, বডি)' },
          { en: 'L4 is application-blind; L7 inspects content', bn: 'L4 কনটেন্ট দেখে না; L7 বিষয়বস্তু পরীক্ষা করে' }
        ],
        [
          { en: 'Connection Termination', bn: 'কানেকশন টার্মিনেশন' },
          { en: 'Passthrough (routes packets directly via NAT/DSR)', bn: 'পাসথ্রু (NAT বা DSR দিয়ে সরাসরি প্যাকেট পাঠায়)' },
          { en: 'Terminates client TLS; opens separate backend TCP', bn: 'ক্লায়েন্টের TLS সমাপ্ত করে ব্যাকএন্ডে নতুন TCP খোলে' },
          { en: 'L7 buffers full requests, increasing memory and CPU load', bn: 'L7 মেমরিতে রিকোয়েস্ট বাফার করায় সিপিইউ খরচ বাড়ে' }
        ],
        [
          { en: 'Throughput & Latency', bn: 'গতি ও লেটেন্সি' },
          { en: 'Multi-gigabit line rate; sub-millisecond latency', bn: 'মাল্টি-গিগাবিট লাইন স্পিড; সাব-মিলিসেকেন্ড লেটেন্সি' },
          { en: 'Moderate throughput; added parsing millisecond latency', bn: 'মাঝারি গতি; পার্সিংয়ের কারণে কিছুটা বাড়তি লেটেন্সি' },
          { en: 'L4 scales to millions of packets per second easily', bn: 'L4 প্রতি সেকেন্ডে লক্ষ লক্ষ প্যাকেট অতি সহজে পরিচালনা করে' }
        ],
        [
          { en: 'Smart Routing Capability', bn: 'স্মার্ট রাউটিং সুবিধা' },
          { en: 'Port and IP mapping only; no path routing', bn: 'কেবল পোর্ট ও আইপি ম্যাপিং; কোনো পাথ রাউটিং নেই' },
          { en: 'Content-based routing (/api vs /static, microservices)', bn: 'বিষয়বস্তু-ভিত্তিক রাউটিং (/api বনাম /static)' },
          { en: 'L7 enables microservice routing, canary, and A/B tests', bn: 'L7 মাইক্রোসার্ভিস রাউটিং ও ক্যানারি ডিপ্লয়মেন্ট সমর্থন করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-scheduling-code',
      text: {
        en: 'Executable Round-Robin and Least Connections Simulation',
        bn: 'রাউন্ড-রবিন এবং লিস্ট কানেকশনস শিডিউলিংয়ের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements both Round-Robin and Least Connections scheduling algorithms, showing how Least Connections directs traffic away from heavily loaded servers.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি রাউন্ড-রবিন এবং লিস্ট কানেকশনস শিডিউলিং অ্যালগরিদম বাস্তবায়ন করে প্রদর্শন করে কীভাবে লিস্ট কানেকশনস ব্যস্ত সার্ভারকে এড়িয়ে কম লোড থাকা সার্ভারে ট্রাফিক পাঠায়।'
      }
    },
    {
      type: 'code',
      code: `// Simulating Round Robin vs Least Connections Load Balancing
interface BackendServer {
  id: string;
  activeConnections: number;
}

class LoadBalancerSimulator {
  servers: BackendServer[];
  rrIndex: number = 0;

  constructor(serverIds: string[]) {
    this.servers = serverIds.map(id => ({ id, activeConnections: 0 }));
  }

  getRoundRobin(): string {
    const server = this.servers[this.rrIndex];
    this.rrIndex = (this.rrIndex + 1) % this.servers.length;
    return server.id;
  }

  getLeastConnections(): string {
    let minServer = this.servers[0];
    for (const s of this.servers) {
      if (s.activeConnections < minServer.activeConnections) {
        minServer = s;
      }
    }
    minServer.activeConnections += 1;
    return minServer.id;
  }
}

const lb = new LoadBalancerSimulator(['server-1', 'server-2', 'server-3']);
const rrSequence = [lb.getRoundRobin(), lb.getRoundRobin(), lb.getRoundRobin(), lb.getRoundRobin()];

// Simulate variable production load across backends
lb.servers[0].activeConnections = 15;
lb.servers[1].activeConnections = 3;
lb.servers[2].activeConnections = 8;
const pickedLeast = lb.getLeastConnections();

console.log('Round Robin Sequence:', rrSequence.join(', '));
console.log('Least Connections Picked:', pickedLeast);

// prints: Round Robin Sequence: server-1, server-2, server-3, server-1
// prints: Least Connections Picked: server-2`
    },
    {
      type: 'heading',
      id: 'health-checks-and-draining',
      text: {
        en: 'Resilient Health Checks and Zero-Downtime Connection Draining',
        bn: 'নির্ভরযোগ্য হেলথ চেক এবং শূন্য-ডাউনটাইম কানেকশন ড্রেনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Load balancers continually monitor backend health using active HTTP probes (e.g. GET /healthz every 5 seconds) and passive error-rate monitoring. Under sudden spikes, aggressive health-check timeouts can trigger a catastrophic failure mode known as the Herd Effect: slow servers fail their health checks simultaneously, causing the load balancer to remove the entire fleet and crash the service. Flap damping and gradual failure thresholds prevent this cascading failure. During application deployments, connection draining gracefully deregisters servers: new requests are stopped, while active in-flight requests complete cleanly within a 30-second window.',
        bn: 'লোড ব্যালান্সার নিয়মিত অ্যাক্টিভ এইচটিটিপি প্রোব (যেমন প্রতি ৫ সেকেন্ডে GET /healthz) এবং প্যাসিভ এরর রেট পর্যবেক্ষণের মাধ্যমে ব্যাকএন্ডের স্বাস্থ্য পরীক্ষা করে। হঠাৎ অতিরিক্ত চাপে হেলথ চেকের সময়সীমা খুব কম থাকলে ক্যাসকেডিং বিপর্যয় ঘটতে পারে, যা হার্ড ইফেক্ট (Herd Effect) নামে পরিচিত: সব সার্ভার একসাথে হেলথ চেকে ফেল করে এবং লোড ব্যালান্সার পুরো বহরকে বন্ধ ঘোষণা করে সার্ভিস ক্র্যাশ করায়। ফ্ল্যাপ ড্যাম্পিং এবং সহনশীল সীমা এই বিপর্যয় ঠেকায়। কোড ডিপ্লয়মেন্টের সময় কানেকশন ড্রেনিং ব্যবহার করে সার্ভার বন্ধ করা হয়: নতুন রিকোয়েস্ট বন্ধ রেখে ৩০ সেকেন্ডের মধ্যে চলমান সব রিকোয়েস্ট নিরাপদে শেষ করার সুযোগ দেওয়া হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Layer 4 vs Layer 7: L4 delivers ultra-fast packet switching; L7 provides smart content-based routing and TLS termination.',
          bn: 'লেয়ার ৪ বনাম লেয়ার ৭: L4 অত্যন্ত দ্রুত গতিতে প্যাকেট পাঠায়; আর L7 বিষয়বস্তুভিত্তিক বুদ্ধিমান রাউটিং ও টিএলএস টার্মিনেশন প্রদান করে।'
        },
        {
          en: 'Least connections for variable workloads: Choose Least Connections when requests have uneven execution durations.',
          bn: 'লিস্ট কানেকশনসের সঠিক ব্যবহার: রিকোয়েস্টের কাজের সময় অসমান হলে রাউন্ড-রবিনের বদলে লিস্ট কানেকশনস ব্যবহার করুন।'
        },
        {
          en: 'Consistent hashing preserves cache: Hashing on a ring ensures adding or removing nodes remaps only 1/N of cached keys.',
          bn: 'কনসিসটেন্ট হ্যাশিং ক্যাশ বাঁচায়: রিংয়ে হ্যাশ করলে নতুন নোড যুক্ত হলেও মাত্র 1/N পরিমাণ ক্যাশ স্থানান্তরিত হয়।'
        },
        {
          en: 'Connection draining prevents drops: Never terminate instances abruptly; allow in-flight transactions to drain gracefully.',
          bn: 'কানেকশন ড্রেনিংয়ে শূন্য ড্রপ: সার্ভার কখনো হঠাৎ বন্ধ করবেন না; চলমান রিকোয়েস্টগুলো শেষ হতে পর্যাপ্ত সময় দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'lb-court-ex1',
      kind: 'mcq',
      topic: 'l4-vs-l7-routing-capability',
      question: {
        en: 'Why is a pure Layer 4 load balancer incapable of routing requests based on HTTP URL paths (e.g. sending /api/v1 to a microservice)?',
        bn: 'একটি খাঁটি লেয়ার ৪ লোড ব্যালান্সার কেন এইচটিটিপি ইউআরএল পাথের ওপর ভিত্তি করে রিকোয়েস্ট পাঠাতে পারে না (যেমন /api/v1 কে মাইক্রোসার্ভিসে পাঠানো)?'
      },
      options: [
        {
          en: 'Layer 4 operates exclusively on IP and TCP/UDP transport headers without terminating the connection or parsing the application payload',
          bn: 'লেয়ার ৪ কেবল আইপি ও টিসিপি/ইউডিপি ট্রান্সপোর্ট হেডারের ওপর কাজ করে, কোনো কানেকশন টার্মিনেট করে না বা অ্যাপ্লিকেশন ডাটা পার্স করে না'
        },
        {
          en: 'Because Layer 4 load balancers only work on Linux computers',
          bn: 'কারণ লেয়ার ৪ লোড ব্যালান্সার কেবল লিনাক্স কম্পিউটারে চলে'
        },
        {
          en: 'Because URL paths are always encrypted with a secret 128-bit key',
          bn: 'কারণ ইউআরএল পাথ সর্বদা একটি গোপন ১২৮-বিট কি দিয়ে এনক্রিপ্ট থাকে'
        },
        {
          en: 'Layer 4 was deprecated and removed from the Internet in 2010',
          bn: '২০১০ সালে লেয়ার ৪ বাতিল করে ইন্টারনেট থেকে সরিয়ে দেওয়া হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'To inspect the URL path, the proxy must terminate TLS and parse HTTP plaintext. Layer 4 does neither.',
        bn: 'পাথ দেখতে হলে টিএলএস ডিক্রিপ্ট করে এইচটিটিপি টেক্সট পড়তে হয়। লেয়ার ৪ এর কোনোটিই করে না।'
      },
      explanation: {
        en: 'Layer 4 proxies forward raw packets based on 5-tuples. Only Layer 7 proxies decode HTTP paths, headers, and cookies.',
        bn: 'লেয়ার ৪ কেবল ৫-টিপলের ওপর ভিত্তি করে কাঁচা প্যাকেট পাঠায়। কেবল লেয়ার ৭ প্রক্সিই এইচটিটিপি পাথ বিশ্লেষণ করতে সক্ষম।'
      }
    },
    {
      id: 'lb-court-ex2',
      kind: 'mcq',
      topic: 'connection-draining-graceful-deploy',
      question: {
        en: 'What is the purpose of configuring a 30-second connection draining timeout on a load balancer during application deployments?',
        bn: 'অ্যাপ্লিকেশন ডিপ্লয়মেন্টের সময় লোড ব্যালান্সারে ৩০ সেকেন্ডের কানেকশন ড্রেনিং টাইমআউট কনফিগার করার উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It stops routing new requests to the terminating instance while allowing currently active in-flight requests to finish cleanly without dropping user connections',
          bn: 'এটি বিদায়ী ইনস্ট্যান্সে নতুন রিকোয়েস্ট পাঠানো বন্ধ করে কিন্তু চলমান সক্রিয় রিকোয়েস্টগুলোকে নির্বিঘ্নে শেষ হতে দেয় যাতে কোনো ব্যবহারকারীর সংযোগ কেটে না যায়'
        },
        {
          en: 'It downloads the latest security patches from Microsoft',
          bn: 'এটি মাইক্রোসফট থেকে সর্বশেষ সিকিউরিটি প্যাচ ডাউনলোড করে'
        },
        {
          en: 'It formats the hard drive of the old server in 30 seconds',
          bn: 'এটি ৩০ সেকেন্ডে পুরনো সার্ভারের হার্ডড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'It turns off the electrical power to the entire data center',
          bn: 'এটি পুরো ডাটা সেন্টারের সমস্ত বিদ্যুৎ সংযোগ বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Abruptly killing a server cuts off active user file uploads and payment checkouts. Draining provides a grace period.',
        bn: 'হঠাৎ সার্ভার বন্ধ করলে পেমেন্ট বা আপলোড মাঝপথে কেটে যায়। ড্রেনিং কাজ শেষ করার সুযোগ দেয়।'
      },
      explanation: {
        en: 'Connection draining ensures zero dropped requests during rolling deployments by waiting for active sockets to close.',
        bn: 'কানেকশন ড্রেনিং রোলিং ডিপ্লয়মেন্টের সময় চলমান সব সকেট শেষ হওয়া পর্যন্ত অপেক্ষা করে শূন্য ড্রপ নিশ্চিত করে।'
      }
    },
    {
      id: 'lb-court-ex3',
      kind: 'mcq',
      topic: 'herd-effect-health-check-failure',
      question: {
        en: 'What dangerous system failure known as the "Herd Effect" occurs when health-check thresholds are configured too aggressively?',
        bn: 'হেলথ-চেকের সময়সীমা মাত্রাতিরিক্ত আক্রমণাত্মকভাবে কনফিগার করলে "হার্ড ইফেক্ট" নামক কোন বিপজ্জনক বিপর্যয় ঘটে?'
      },
      options: [
        {
          en: 'Under heavy traffic, healthy servers slow down slightly and fail strict health checks simultaneously, causing the load balancer to remove the entire fleet and crash the service',
          bn: 'উচ্চ ট্রাফিকের চাপে সুস্থ সার্ভারগুলো সামান্য ধীর হয়ে একসাথে হেলথ চেকে ফেল করে, যার ফলে লোড ব্যালান্সার সব সার্ভারকে বন্ধ করে পুরো সার্ভিস ক্র্যাশ করায়'
        },
        {
          en: 'Computer servers escape from the data center and run into the forest',
          bn: 'কম্পিউটার সার্ভারগুলো ডাটা সেন্টার থেকে পালিয়ে জঙ্গলে চলে যায়'
        },
        {
          en: 'The website domain name is automatically sold on eBay',
          bn: 'ওয়েবসাইটের ডোমেন নাম স্বয়ংক্রিয়ভাবে ইবে-তে বিক্রি হয়ে যায়'
        },
        {
          en: 'The load balancer converts all HTTP responses into PDF files',
          bn: 'লোড ব্যালান্সার সমস্ত এইচটিটিপি রেসপন্সকে পিডিএফ ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If server load causes a 1-second delay and the health check timeout is 500ms, every single server will be marked dead at once.',
        bn: 'কাজের চাপে ১ সেকেন্ড দেরি হলে আর হেলথ চেক ৫০০ মিলি-সেকেন্ডে কাটলে সব সার্ভার একসাথে মৃত ঘোষিত হবে।'
      },
      explanation: {
        en: 'The herd effect happens when transient latency spikes trigger cascading false-positive health failures across the entire fleet.',
        bn: 'হার্ড ইফেক্ট হলো সাময়িক চাপের কারণে সব সার্ভার একসাথে ভুলবশত আনহেলদি ঘোষিত হয়ে পুরো সিস্টেম বসে যাওয়া।'
      }
    },
    {
      id: 'lb-court-ex4',
      kind: 'mcq',
      topic: 'least-connections-advantage',
      question: {
        en: 'Why is the Least Connections algorithm superior to standard Round-Robin when handling requests with widely varying execution times (e.g. 5ms vs 5000ms)?',
        bn: 'রিকোয়েস্টগুলোর এক্সিকিউশন সময় ব্যাপকভাবে অসমান হলে (যেমন ৫ মিলিসেকেন্ড বনাম ৫০০০ মিলিসেকেন্ড) কেন লিস্ট কানেকশনস সাধারণ রাউন্ড-রবিনের চেয়ে শ্রেয়?'
      },
      options: [
        {
          en: 'Round-Robin blindly hands requests to servers already burdened by long-running queries, while Least Connections dynamically balances the actual in-flight workload',
          bn: 'রাউন্ড-রবিন অন্ধভাবে নতুন রিকোয়েস্ট পাঠায় এমনকি সার্ভারটি দীর্ঘ কুয়েরিতে ব্যস্ত থাকলেও, আর লিস্ট কানেকশনস চলমান কাজের সংখ্যা দেখে ভারসাম্য রক্ষা করে'
        },
        {
          en: 'Because Round-Robin only runs on Apple macOS computers',
          bn: 'কারণ রাউন্ড-রবিন কেবল অ্যাপল ম্যাক কম্পিউটারে কাজ করে'
        },
        {
          en: 'Because Least Connections requires zero bytes of server RAM',
          bn: 'কারণ লিস্ট কানেকশনস সার্ভারে কোনো র‍্যাম মেমরি ব্যবহার করে না'
        },
        {
          en: 'Because Round-Robin deletes all incoming database records',
          bn: 'কারণ রাউন্ড-রবিন সমস্ত ইনকামিং ডেটাবেস রেকর্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If Server A is processing five 10-second PDF exports, Round-Robin will still send it the next request. Least Connections will pick an idle server.',
        bn: 'সার্ভার এ যদি ৫টি ভারী কাজে আটকে থাকে, রাউন্ড-রবিন তাকেই আবার কাজ দেবে। লিস্ট কানেকশনস ফাঁকা সার্ভার বেছে নেবে।'
      },
      explanation: {
        en: 'Least Connections prevents overloading servers that are processing slow, long-lived transactions, maintaining consistent response times.',
        bn: 'লিস্ট কানেকশনস দীর্ঘমেয়াদী কাজে ব্যস্ত সার্ভারকে অতিরিক্ত ভারাক্রান্ত হতে দেয় না এবং রেসপন্স টাইম দ্রুত রাখে।'
      }
    }
  ],
  quiz: {
    id: 'the-load-balancer-court-quiz',
    title: {
      en: 'Load Balancing Architecture Quiz',
      bn: 'লোড ব্যালান্সিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'lbc-q1',
        kind: 'mcq',
        topic: 'direct-server-return-dsr',
        question: {
          en: 'What is Direct Server Return (DSR) in Layer 4 load balancing, and why does it drastically increase egress throughput?',
          bn: 'লেয়ার ৪ লোড ব্যালান্সিংয়ে ডিরেক্ট সার্ভার রিটার্ন (DSR) কী এবং কেন এটি নির্গমন ট্রাফিকের গতি নাটকীয়ভাবে বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'Incoming client requests pass through the load balancer, but outgoing large responses bypass the load balancer and return directly from the backend server to the client',
            bn: 'ইনকামিং ছোট রিকোয়েস্ট লোড ব্যালান্সারের মধ্য দিয়ে যায়, কিন্তু আউটগোয়িং বড় রেসপন্সগুলো লোড ব্যালান্সার বাইপাস করে সরাসরি ব্যাকএন্ড থেকে ক্লায়েন্টে ফিরে যায়'
          },
          {
            en: 'It sends all network packets through a satellite in outer space',
            bn: 'এটি সমস্ত নেটওয়ার্ক প্যাকেট মহাকাশের স্যাটেলাইটের মধ্য দিয়ে পাঠায়'
          },
          {
            en: 'It deletes all TCP headers from outgoing web traffic',
            bn: 'এটি আউটগোয়িং ট্রাফিক থেকে সমস্ত টিসিপি হেডার মুছে ফেলে'
          },
          {
            en: 'DSR converts all text data into compressed audio files',
            bn: 'DSR সমস্ত টেক্সট ডাটাকে কমপ্রেসড অডিও ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Web requests are tiny (kilobytes), but responses like video and images are huge (megabytes). Why bottleneck the load balancer on the return path?',
          bn: 'রিকোয়েস্ট ছোট কিন্তু রেসপন্স বিশাল। ফেরার পথে লোড ব্যালান্সারকে জ্যাম না করে সরাসরি ফেরত পাঠানোর কৌশল হলো DSR।'
        },
        explanation: {
          en: 'DSR offloads the heavy egress response bandwidth from the load balancer, multiplying the cluster’s total outbound capacity.',
          bn: 'DSR লোড ব্যালান্সারকে রেসপন্সের বিশাল ব্যান্ডউইথের চাপ থেকে মুক্ত করে ক্লাস্টারের বহুগুণ বেশি আউটবাউন্ড ক্ষমতা নিশ্চিত করে।'
        }
      },
      {
        id: 'lbc-q2',
        kind: 'mcq',
        topic: 'consistent-hashing-virtual-nodes',
        question: {
          en: 'Why do production consistent hashing rings implement virtual nodes (typically 100 to 200 virtual positions per physical server)?',
          bn: 'প্রোডাকশন কনসিসটেন্ট হ্যাশিং রিংয়ে কেন ভার্চুয়াল নোড (প্রতি ফিজিক্যাল সার্ভারের জন্য সাধারণত ১০০ থেকে ২০০টি অবস্থান) ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'To ensure a uniform, balanced key distribution across the ring and prevent hot-spot clustering on a single physical machine',
            bn: 'রিং জুড়ে কি-গুলোর সুষম ও সমান বণ্টন নিশ্চিত করতে এবং কোনো একটি ফিজিক্যাল কম্পিউটারে অতিরিক্ত ট্রাফিকের হটস্পট তৈরি হওয়া ঠেকাতে'
          },
          {
            en: 'To allow the server to run without electricity',
            bn: 'সার্ভারকে বিদ্যুৎ ছাড়াই চলার সুযোগ করে দিতে'
          },
          {
            en: 'To hide the IP address of the server from the FBI',
            bn: 'এফবিআই থেকে সার্ভারের আইপি গোপন রাখতে'
          },
          {
            en: 'Virtual nodes are required by CSS stylesheet specifications',
            bn: 'সিএসএস স্টাইলশীটের নিয়ম অনুযায়ী ভার্চুয়াল নোড থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'With only 3 physical points on a circle, spacing is uneven. With 600 virtual points, distribution approaches mathematical uniformity.',
          bn: 'বৃত্তে ৩টি বিন্দু থাকলে জায়গা অসমান হয়। কিন্তু ৬০০টি ভার্চুয়াল বিন্দু পুরো রিংয়ে ট্রাফিক নিখুঁতভাবে সমান বণ্টন করে।'
        },
        explanation: {
          en: 'Virtual nodes smooth out non-uniformity in hash distributions, guaranteeing even load across all physical cluster nodes.',
          bn: 'ভার্চুয়াল নোড হ্যাশের অসামঞ্জস্য দূর করে সব ফিজিক্যাল কম্পিউটারের ওপর সমান কাজের চাপ নিশ্চিত করে।'
        }
      },
      {
        id: 'lbc-q3',
        kind: 'mcq',
        topic: 'sticky-sessions-tradeoff',
        question: {
          en: 'What architectural tradeoff occurs when enabling "Sticky Sessions" (session affinity via cookies) on a Layer 7 load balancer?',
          bn: 'লেয়ার ৭ লোড ব্যালান্সারে "স্টিকি সেশন" (কুকির মাধ্যমে নির্দিষ্ট সার্ভারে বেঁধে রাখা) চালু করলে কোন স্থাপত্যিক আপস মেনে নিতে হয়?'
        },
        options: [
          {
            en: 'It enables in-memory user sessions on servers, but degrades fault tolerance: if that server crashes, all bound users lose their session and traffic distribution becomes uneven',
            bn: 'এটি সার্ভারের মেমরিতে সেশন রাখার সুযোগ দেয় কিন্তু নির্ভরযোগ্যতা কমায়: সার্ভার ক্র্যাশ করলে সব বাঁধা ব্যবহারকারী সেশন হারায় এবং ট্রাফিকের সুষম বণ্টন নষ্ট হয়'
          },
          {
            en: 'It increases the size of every file on the computer by 1000 percent',
            bn: 'এটি কম্পিউটারের প্রতিটি ফাইলের আকার ১০০০ শতাংশ বৃদ্ধি করে'
          },
          {
            en: 'Sticky sessions turn off the operating system firewall automatically',
            bn: 'স্টিকি সেশন স্বয়ংক্রিয়ভাবে অপারেটিং সিস্টেমের ফায়ারওয়াল বন্ধ করে দেয়'
          },
          {
            en: 'It prevents mobile phone users from loading websites',
            bn: 'এটি মোবাইল ব্যবহারকারীদের ওয়েবসাইট লোড করা থেকে বিরত রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If User A is stuck to Server 1, Server 1 cannot be easily restarted, and an external shared cache (like Redis) is preferred.',
          bn: 'ব্যবহারকারী একটি নির্দিষ্ট ১ নং সার্ভারে আটকে থাকলে সেই সার্ভারটি সহজে রিস্টার্ট করা যায় না; তাই রেডিস (Redis) ব্যবহার করাই আদর্শ।'
        },
        explanation: {
          en: 'Sticky sessions introduce server coupling and uneven load. Stateless backends with centralized Redis sessions are universally preferred.',
          bn: 'স্টিকি সেশন সার্ভারের স্বাধীনতা নষ্ট করে। এর বদলে স্টেটলেস ব্যাকএন্ড এবং রেডিসের মাধ্যমে সেন্ট্রাল সেশন রাখাই আধুনিক স্ট্যান্ডার্ড।'
        }
      },
      {
        id: 'lbc-q4',
        kind: 'mcq',
        topic: 'power-of-two-random-choices',
        question: {
          en: 'What mathematical advantage does the "Power of Two Random Choices" (P2C) algorithm provide over global least-connections in distributed clusters?',
          bn: 'ডিস্ট্রিবিউটেড ক্লাস্টারে গ্লোবাল লিস্ট-কানেকশনসের তুলনায় "পাওয়ার অব টু র্যান্ডম চয়েসেস" (P2C) অ্যালগরিদম কোন গাণিতিক সুবিধা দেয়?'
        },
        options: [
          {
            en: 'By sampling just two random servers and selecting the less loaded one, it achieves near-optimal load distribution without expensive global lock coordination across routers',
            bn: 'কেবলমাত্র দুটি এলোমেলো সার্ভার পরীক্ষা করে কম লোড থাকাটি বেছে নেওয়ার মাধ্যমে এটি কোনো জটিল গ্লোবাল লক ছাড়াই প্রায় নিখুঁত ভারসাম্য অর্জন করে'
          },
          {
            en: 'It doubles the CPU clock frequency of all cluster computers',
            bn: 'এটি ক্লাস্টারের সমস্ত কম্পিউটারের সিপিইউ ক্লক স্পিড দ্বিগুণ করে দেয়'
          },
          {
            en: 'It requires zero internet bandwidth to transmit data',
            bn: 'এটি ডেটা পাঠানোর জন্য কোনো ইন্টারনেট ব্যান্ডউইথ খরচ করে না'
          },
          {
            en: 'P2C is an encryption cipher used to create Bitcoin wallets',
            bn: 'P2C হলো বিটকয়েন ওয়ালেট তৈরির কাজে ব্যবহৃত একটি এনক্রিপশন সাইফার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Centralized state tracking for 1000 servers is a bottleneck. Picking the best of two random choices cuts maximum queue length exponentially.',
          bn: '১০০০ সার্ভারের হিসাব এক জায়গায় রাখা জটিল। কিন্তু ২টি এলোমেলো সার্ভারের মধ্যে ভালোটি বেছে নিলেই কিউ এর দৈর্ঘ্য নাটকীয়ভাবে কমে আসে।'
        },
        explanation: {
          en: 'P2C drops maximum queue length from O(log n / log log n) to O(log log n) with minimal local sampling overhead.',
          bn: 'P2C কোনো জটিল গ্লোবাল কোঅর্ডিনেশন ছাড়াই অত্যন্ত চমৎকার ও সুষম ট্রাফিক বণ্টন নিশ্চিত করে।'
        }
      }
    ]
  }
};
