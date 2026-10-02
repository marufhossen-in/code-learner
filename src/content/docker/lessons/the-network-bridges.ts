import type { Lesson } from '../../../lib/types';

export const networkBridgesLesson: Lesson = {
  slug: 'the-network-bridges',
  tech: 'docker',
  title: {
    en: 'Docker Networking: Bridge Networks, Embedded DNS & Multi-Tier Isolation',
    bn: 'Docker নেটওয়ার্কিং: ব্রিজ নেটওয়ার্ক, এমবেডেড DNS ও মাল্টি-টিয়ার আইসোলেশন'
  },
  summary: {
    en: 'Master Docker container networking across 10 structured topics. We explore the four primary drivers, user-defined bridge networks, and embedded DNS resolution at 127.0.0.11. Learn port publishing with -p, multi-tier subnet isolation, and essential debugging patterns.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Docker কন্টেইনার নেটওয়ার্কিং আয়ত্ত করুন। চারটি প্রধান ড্রাইভার, ইউজার-ডিফাইন্ড ব্রিজ এবং 127.0.0.11 ঠিকানায় এমবেডেড DNS রেজোলিউশন পর্যালোচনা করা হয়। এখানে -p দিয়ে পোর্ট পাবলিশিং, মাল্টি-টিয়ার নেটওয়ার্ক বিভাজন এবং ডিবাগিং পদ্ধতি শিখবেন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-compose-ledger',
    tech: 'docker',
    title: {
      en: 'The Compose Ledger: Multi-Container Orchestration, Dependencies & Environments',
      bn: 'কম্পোজ খাতা: মাল্টি-কন্টেইনার অর্কেস্ট্রেশন, ডিপেনডেন্সি ও এনভায়রনমেন্ট'
    }
  },
  blocks: [
    {
      type: 'diagram',
      id: 'network-bridge-diagram',
      title: {
        en: 'Docker Bridge Networking, Embedded DNS & Multi-Tier Architecture',
        bn: 'Docker ব্রিজ নেটওয়ার্কিং, এমবেডেড DNS ও মাল্টি-টিয়ার আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="dnsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#0c4a6e" />
    </linearGradient>
    <marker id="netArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="greenArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#34d399" />
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="380" rx="12" fill="#0b1120" stroke="#334155" stroke-width="1.5"/>

  <!-- Title -->
  <text x="400" y="32" fill="#f8fafc" font-size="16" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Docker User-Defined Bridge &amp; DNS Discovery (127.0.0.11)</text>

  <!-- Host Perimeter / Outside World -->
  <rect x="25" y="60" width="160" height="210" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3"/>
  <text x="105" y="86" fill="#cbd5e1" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">EXTERNAL CLIENT</text>
  <text x="105" y="108" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">Host Browser / App</text>
  <rect x="45" y="130" width="120" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
  <text x="105" y="155" fill="#38bdf8" font-size="12" font-family="monospace" text-anchor="middle">curl :8080</text>
  <text x="105" y="240" fill="#64748b" font-size="10" text-anchor="middle" font-family="system-ui, sans-serif">Host Port 8080</text>

  <!-- Port Mapping Arrow -->
  <line x1="185" y1="150" x2="245" y2="150" stroke="#38bdf8" stroke-width="2" marker-end="url(#netArrow)" />
  <text x="215" y="140" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">-p 8080:3000</text>

  <!-- User Defined Network Zone -->
  <rect x="255" y="60" width="515" height="210" rx="8" fill="#031d33" stroke="#0284c7" stroke-width="1.5"/>
  <text x="512" y="86" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">CUSTOM BRIDGE NETWORK: my-app-network (172.20.0.0/16)</text>

  <!-- Container 1: Web API -->
  <rect x="275" y="110" width="195" height="135" rx="8" fill="url(#netGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="372" y="134" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">CONTAINER: web-api</text>
  <text x="372" y="152" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">IP: 172.20.0.2</text>
  <text x="372" y="170" fill="#64748b" font-size="10" text-anchor="middle" font-family="monospace">Listening on :3000</text>
  <rect x="290" y="185" width="165" height="42" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1"/>
  <text x="372" y="202" fill="#7dd3fc" font-size="10" text-anchor="middle" font-family="monospace">Resolves db:5432 via</text>
  <text x="372" y="217" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle" font-family="monospace">127.0.0.11 DNS</text>

  <!-- Container 2: Postgres DB -->
  <rect x="555" y="110" width="195" height="135" rx="8" fill="url(#netGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="652" y="134" fill="#34d399" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">CONTAINER: db</text>
  <text x="652" y="152" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">IP: 172.20.0.3</text>
  <text x="652" y="170" fill="#64748b" font-size="10" text-anchor="middle" font-family="monospace">Port 5432 (Internal Only)</text>
  <rect x="570" y="185" width="165" height="42" rx="4" fill="#0f172a" stroke="#059669" stroke-width="1"/>
  <text x="652" y="202" fill="#a7f3d0" font-size="10" text-anchor="middle" font-family="monospace">No -p published</text>
  <text x="652" y="217" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle" font-family="monospace">Hidden from host</text>

  <!-- Internal Bridge Traffic Line -->
  <line x1="470" y1="170" x2="545" y2="170" stroke="#34d399" stroke-width="2" marker-end="url(#greenArrow)" />
  <text x="507" y="162" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">db:5432</text>

  <!-- Bottom Legend / Rule -->
  <rect x="25" y="295" width="745" height="65" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="45" y="320" fill="#38bdf8" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Embedded DNS (127.0.0.11):</text>
  <text x="250" y="320" fill="#cbd5e1" font-size="11" font-family="monospace">Translates container names directly to dynamic IPs within the same bridge network.</text>
  <text x="45" y="342" fill="#f43f5e" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Localhost Trap:</text>
  <text x="250" y="342" fill="#cbd5e1" font-size="11" font-family="monospace">Inside a container, "localhost" is its own netns. Use container names (e.g. "db") for peers.</text>
</svg>`,
      caption: {
        en: 'Docker bridge networking architecture with embedded DNS resolving internal container names.',
        bn: 'ডকার ব্রিজ নেটওয়ার্কিং আর্কিটেকচার ও কন্টেইনারের নাম পরিবর্তনে সহায়ক অভ্যন্তরীণ DNS মেকানিজম।'
      }
    },
    { type: 'heading', id: 'p1', text: { en: '1. The Four Core Network Drivers: bridge, host, none & overlay', bn: '১. প্রধান চারটি নেটওয়ার্ক ড্রাইভার: bridge, host, none ও overlay' } },
    {
      type: 'para',
      text: {
        en: 'Docker isolates container networking using Linux network namespaces and virtual ethernet (veth) pairs. The engine offers four built-in drivers. The default bridge driver creates a private software switch with NAT. The host driver bypasses isolation to bind directly to host interfaces. The none driver disables all interfaces except loopback. Finally, the overlay driver coordinates multi-host networking across clusters.',
        bn: 'Docker লিনাক্স নেটওয়ার্ক নেমস্পেস এবং ভার্চুয়াল ইথারনেট (veth) তারের মাধ্যমে নেটওয়ার্কিং পরিচালনা করে। ইঞ্জিনে চারটি প্রধান ড্রাইভার রয়েছে। ডিফল্ট bridge ড্রাইভার একটি ভার্চুয়াল সুইচ তৈরি করে। host ড্রাইভার আইসোলেশন তুলে সরাসরি হোস্টের পোর্ট ব্যবহার করে। none ড্রাইভার লুপব্যাক ছাড়া সব বন্ধ রাখে। আর overlay ড্রাইভার ক্লাস্টারের একাধিক সার্ভারের মধ্যে সমন্বয় করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# List all available Docker networks on the host:
docker network ls

# Inspect available default network drivers:
# NETWORK ID     NAME      DRIVER    SCOPE
# 8a1b2c3d4e5f   bridge    bridge    local
# 9f8e7d6c5b4a   host      host      local
# 1a2b3c4d5e6f   none      null      local`,
      caption: {
        en: 'Docker provides native drivers suited for local isolation, raw speed, or air-gapped security.',
        bn: 'Docker লোকাল আইসোলেশন, দ্রুত গতি বা সম্পূর্ণ অফলাইন নিরাপত্তার জন্য বিভিন্ন ড্রাইভার দেয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Default Bridge vs User-Defined Bridge Networks', bn: '২. ডিফল্ট ব্রিজ বনাম ইউজার-ডিফাইন্ড ব্রিজ নেটওয়ার্ক' } },
    {
      type: 'para',
      text: {
        en: 'When a container runs without a specified network, it attaches to the legacy default "bridge" (docker0). On the default bridge, containers cannot resolve each other by container name and can only communicate using transient IP addresses that shuffle upon every reboot. In production, always create a User-Defined Bridge network.',
        bn: 'কোনো নেটওয়ার্ক উল্লেখ না করলে কন্টেইনারগুলো ডিফল্ট "bridge" (docker0)-এ যুক্ত হয়। ডিফল্ট ব্রিজে কন্টেইনারগুলো একে অপরকে নাম দিয়ে খুঁজে পায় না, শুধু ক্ষণস্থায়ী আইপি অ্যাড্রেস দিয়ে যোগাযোগ করতে পারে যা রিস্টার্ট দিলে বদলে যায়। তাই প্রোডাকশনে সর্বদা নিজস্ব User-Defined Bridge নেটওয়ার্ক তৈরি করা উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create custom user-defined bridge network:
docker network create --driver bridge my-app-network

# Run containers attached to user-defined bridge:
docker run -d --name db --network my-app-network postgres:16-alpine
docker run -d --name api --network my-app-network -p 3000:3000 my-api:latest`,
      caption: {
        en: 'User-defined bridge networks enable modern name resolution and strict isolation.',
        bn: 'ইউজার-ডিফাইন্ড ব্রিজ নেটওয়ার্ক স্বয়ংক্রিয় নাম রেজোলিউশন ও কঠোর নিরাপত্তা দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Automatic Service Discovery: Docker Embedded DNS (127.0.0.11)', bn: '৩. স্বয়ংক্রিয় সার্ভিস আবিষ্কার: ডকার এমবেডেড DNS (127.0.0.11)' } },
    {
      type: 'para',
      text: {
        en: 'On user-defined networks, Docker activates an internal DNS resolver listening at 127.0.0.11 inside every container. When an application requests service "db:5432", this service dynamically translates that host string into the proper internal IP address, removing the need for hardcoded addresses.',
        bn: 'ইউজার-ডিফাইন্ড নেটওয়ার্কে যুক্ত প্রতি কন্টেইনারের ভেতর 127.0.0.11 ঠিকানায় একটি অভ্যন্তরীণ DNS সেবা চালু থাকে। আপনার কোড যখন "db:5432" সার্ভিসে যুক্ত হতে চায়, তখন এই সিস্টেম "db" নামটিকে সংশ্লিষ্ট অভ্যন্তরীণ আইপিতে রূপান্তর করে, ফলে হার্ডকোড করা আইপির প্রয়োজন ফুরিয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Node.js application connecting via Docker Embedded DNS:
import pg from "pg";

// Use the container name "db" as the host directly:
const pool = new pg.Pool({
  host: "db", // Resolved automatically by Docker embedded DNS (127.0.0.11)!
  port: 5432,
  user: "postgres",
  password: process.env.DB_PASSWORD,
  database: "store"
});

console.log("Database connection configured using stable container name 'db'");
// Output: Database connection configured using stable container name 'db'`,
      caption: {
        en: 'Docker embedded DNS resolves container names to current IP addresses automatically.',
        bn: 'ডকার এমবেডেড DNS কন্টেইনারের নামকে বর্তমান আইপি অ্যাড্রেসে স্বয়ংক্রিয়ভাবে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Port Publishing (-p) vs Image Port Documentation (EXPOSE)', bn: '৪. পোর্ট পাবলিশ (-p) বনাম EXPOSE ডকুমেনটেশন' } },
    {
      type: 'para',
      text: {
        en: 'Writing "EXPOSE 3000" in a Dockerfile is purely documentation; it does NOT publish the port to the host or open any external firewall doors. To allow external traffic to reach a container, you must explicitly publish the port at runtime using "-p <hostPort>:<containerPort>", which configures Linux iptables DNAT rules.',
        bn: 'Dockerfile-এ "EXPOSE 3000" লেখা কেবল একটি তথ্য নির্দেশ করে; এটি বাস্তবে হোস্টে কোনো পোর্ট খোলে না বা বাইরের ট্রাফিক ঢুকতে দেয় না। কন্টেইনারের পোর্ট বাইরে উন্মুক্ত করতে রান করার সময় স্পষ্টভাবে "-p <হোস্ট_পোর্ট>:<কন্টেইনার_পোর্ট>" দিতে হয়, যা লিনাক্স ফায়ারওয়ালে DNAT রুল তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Run container mapping host port 8080 to container port 3000:
docker run -d --name web-service -p 8080:3000 web-image:v1

# Inspect active port mapping:
docker port web-service
# Output: 3000/tcp -> 0.0.0.0:8080

# Publish to specific host IP (bind only to local interface for security):
docker run -d --name internal-api -p 127.0.0.1:5000:5000 secure-api:v1`,
      caption: {
        en: 'The -p flag injects DNAT packet-forwarding rules into the Linux host routing table.',
        bn: '-p ফ্ল্যাগ লিনাক্স হোস্টের রাউটিং টেবিলে DNAT প্যাকেট ফরোয়ার্ডিং রুল যোগ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Multi-Tier Security Segmentation (Frontend vs Backend Subnets)', bn: '৫. মাল্টি-টিয়ার নিরাপত্তা বিভাজন (ফ্রন্টএন্ড বনাম ব্যাকএন্ড)' } },
    {
      type: 'para',
      text: {
        en: 'In production architectures, containers should never all reside on a single flat network. Instead, segment tiers using multiple user-defined networks: a "frontend-net" connects public NGINX reverse proxies to API application servers, while a separate "backend-net" connects API servers to databases, ensuring databases remain completely isolated from public ingress.',
        bn: 'প্রোডাকশনে সব কন্টেইনারকে কখনো একটি মাত্র ফ্ল্যাট নেটওয়ার্কে রাখা উচিত নয়। বরং একাধিক নেটওয়ার্ক ব্যবহার করে বিভাজন করা উচিত: "frontend-net" দিয়ে NGINX রিভার্স প্রক্সি ও API সার্ভার যুক্ত থাকবে, আর আলাদা "backend-net" দিয়ে API সার্ভার ও ডেটাবেস যুক্ত থাকবে। ফলে বাইরের আক্রমণকারী কখনোই সরাসরি ডেটাবেস দেখতে পাবে না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Create two segregated networks:
docker network create frontend-net
docker network create backend-net

# 2. Database lives strictly in backend-net (NO port publishing!):
docker run -d --name secure-db --network backend-net postgres:16-alpine

# 3. Public Web Proxy lives strictly in frontend-net:
docker run -d --name reverse-proxy --network frontend-net -p 80:80 nginx:alpine`,
      caption: {
        en: 'Network segmentation prevents direct compromised frontend access to sensitive databases.',
        bn: 'নেটওয়ার্ক বিভাজন নিশ্চিত করে ফ্রন্টএন্ড হ্যাক হলেও যেন সংবেদনশীল ডেটাবেসে সরাসরি ঢোকা না যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Multi-Homed Containers: Connecting Across Multiple Networks', bn: '৬. মাল্টি-হোমড কন্টেইনার: একাধিক নেটওয়ার্কে একই সাথে সংযোগ' } },
    {
      type: 'para',
      text: {
        en: 'A container can bridge two segmented network tiers by connecting to multiple networks simultaneously. The API server connects to "frontend-net" to receive incoming HTTP traffic from NGINX and to "backend-net" to query PostgreSQL. Use "docker network connect" to attach running containers to additional networks.',
        bn: 'একটি কন্টেইনার একই সাথে একাধিক নেটওয়ার্কে যুক্ত হয়ে দুটি স্তরের মধ্যে সাঁকো হিসেবে কাজ করতে পারে। যেমন API সার্ভার "frontend-net"-এ যুক্ত হয়ে NGINX থেকে রিকোয়েস্ট নেবে এবং "backend-net"-এ যুক্ত হয়ে PostgreSQL থেকে তথ্য আনবে। "docker network connect" কমান্ড দিয়ে চলমান কন্টেইনারে নতুন নেটওয়ার্ক যোগ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Launch API on frontend network:
docker run -d --name api-service --network frontend-net my-api:v1

# 2. Connect running API container to backend network as well:
docker network connect backend-net api-service

# 3. Verify API is multi-homed (has two network interfaces):
docker inspect -f '{{range $k, $v := .NetworkSettings.Networks}}{{$k}} {{end}}' api-service
# Output: frontend-net backend-net`,
      caption: {
        en: 'Multi-homed middleware containers bridge segregated networks safely without public exposure.',
        bn: 'মাল্টি-হোমড মিডলওয়্যার কন্টেইনার কোনো পাবলিক পোর্ট না খুলেই দুটি নেটওয়ার্কের মধ্যে নিরাপদ যোগাযোগ গড়ে তোলে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Host Networking Mode: Performance Tradeoffs and Security Risks', bn: '৭. হোস্ট নেটওয়ার্কিং মোড: গতির সুবিধা ও নিরাপত্তার ঝুঁকি' } },
    {
      type: 'para',
      text: {
        en: 'Running with "--network host" completely disables Docker network namespace isolation: the container attaches directly to the host physical ethernet interfaces with zero packet translation overhead (no NAT). However, port collisions now conflict with host services, and the container gains direct access to the host network stack.',
        bn: '"--network host" দিয়ে চালালে ডকারের নেটওয়ার্ক নেমস্পেস সম্পূর্ণ বন্ধ হয়ে যায়: কন্টেইনার সরাসরি হোস্ট কম্পিউটারের পোর্ট ব্যবহার করে। কোনো NAT অনুবাদ না থাকায় এর গতি অত্যন্ত দ্রুত। কিন্তু এতে কোনো পোর্ট কনফ্লিক্ট হলে তা সরাসরি হোস্টে বাধে এবং কন্টেইনারটি হোস্টের সব ইন্টারফেসে অবাধ প্রবেশের সুযোগ পায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Run high-throughput proxy directly on host interfaces:
docker run -d --name ultra-proxy --network host haproxy:alpine

# Note: The -p flag is ignored in host networking mode!
# The application binds directly to the host ports declared in its config.`,
      caption: {
        en: 'Host mode eliminates NAT overhead for ultra-high throughput but sacrifices network isolation.',
        bn: 'হোস্ট মোড দ্রুতগতির জন্য NAT সরিয়ে দেয়, তবে নেটওয়ার্ক আইসোলেশনের নিরাপত্তা নষ্ট করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Isolated Air-Gapped Environments: --network none', bn: '৮. বিচ্ছিন্ন অফলাইন পরিবেশ: --network none' } },
    {
      type: 'para',
      text: {
        en: 'Specifying "--network none" strips all external network interfaces from the container, leaving only the loopback (127.0.0.1) interface. This air-gapped configuration is ideal for security-critical tasks such as decrypting sensitive cryptographic keys, generating cold backup archives, or processing untrusted customer uploads without data egress.',
        bn: '"--network none" দিলে লুপব্যাক (127.0.0.1) ছাড়া কন্টেইনারের সব নেটওয়ার্ক ইন্টারফেস পুরোপুরি বাদ দেওয়া হয়। অত্যন্ত সংবেদনশীল কাজ যেমন ক্রিপ্টোগ্রাফিক কি ডিক্রিপ্ট করা, ব্যাকআপ তৈরি করা কিংবা অনিরাপদ ফাইল প্রসেস করার জন্য এটি ব্যবহৃত হয় যাতে কোনো তথ্য বাইরে পাঠানো সম্ভব না হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Run completely air-gapped encryption utility:
docker run --rm --network none -v /secure/keys:/keys:ro crypto-tool --decrypt

# Verification inside container shows only local loopback:
# ifconfig -> only 'lo' is present! Zero external routes exist.`,
      caption: {
        en: 'The none driver guarantees absolute air-gapped isolation with zero possibility of data leakage.',
        bn: 'none ড্রাইভার নিশ্চিত করে যে কোনোভাবেই কন্টেইনার থেকে ইন্টারনেটে ডেটা লিক হতে পারবে না।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Container Sidecars: Sharing Network Stacks with --network container', bn: '৯. কন্টেইনার সাইডকার: --network container দিয়ে স্ট্যাক ভাগ' } },
    {
      type: 'para',
      text: {
        en: 'Docker allows one container to join the network namespace of another container using "--network container:<target>". Both containers share the exact same IP address, localhost loopback, and port space, forming the foundation of the Kubernetes Pod architecture where sidecars communicate over localhost at zero latency.',
        bn: 'ডকারে "--network container:<লক্ষ্য>" ব্যবহার করে এক কন্টেইনারকে অন্য কন্টেইনারের নেটওয়ার্ক নেমস্পেসে সংযুক্ত করা যায়। দুটি কন্টেইনার তখন হুবহু একই আইপি অ্যাড্রেস এবং localhost ভাগ করে নেয়। এটি মূলত Kubernetes Pod-এর ভিত্তি, যেখানে প্রধান অ্যাপ ও সাইডকার একে অপরের সাথে শূন্য লেটেন্সিতে যোগাযোগ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Run main application container:
docker run -d --name primary-app my-web-app:v1

# 2. Attach monitoring sidecar directly to primary application network stack:
docker run -d --name metrics-sidecar --network container:primary-app datadog-agent:latest

# Both containers now share the exact same network namespace and localhost!`,
      caption: {
        en: 'Network sharing enables sidecar monitoring agents to intercept and sniff localhost traffic.',
        bn: 'নেটওয়ার্ক শেয়ারিংয়ের মাধ্যমে সাইডকার এজেন্টরা কোনো জটিলতা ছাড়াই ট্রাফিক পর্যবেক্ষণ করতে পারে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Network Troubleshooting & The Localhost Trap', bn: '১০. নেটওয়ার্ক ট্রাবলশুটিং ও লোকালহোস্ট বিভ্রান্তি' } },
    {
      type: 'para',
      text: {
        en: 'The most common beginner Docker failure is configuring an application inside a container to connect to "localhost:5432" to reach a database. Because network namespaces isolate loopback interfaces, "localhost" inside Container A points exclusively to Container A itself, never to the host or sibling containers. Always use container names on custom bridge networks.',
        bn: 'ডকারে নতুনদের সবচেয়ে বড় ভুল হলো কন্টেইনারের কোডে ডেটাবেস কানেকশনের জন্য "localhost:5432" লেখা। যেহেতু প্রতি কন্টেইনারের নিজস্ব আলাদা নেটওয়ার্ক লুপব্যাক থাকে, তাই কন্টেইনারের ভেতর localhost মানে সে কেবল নিজেকেই খোঁজে, হোস্ট বা অন্য কন্টেইনারকে নয়। এর বদলে সর্বদা ব্রিজ নেটওয়ার্কে থাকা অপর কন্টেইনারটির নাম ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# ❌ WRONG: Inside container connecting to database via localhost:
# DB_HOST=localhost (Fails with Connection Refused!)

# ✅ CORRECT: Connect using peer container name on user-defined bridge:
# DB_HOST=postgres-db (Resolved to 172.18.0.3 by 127.0.0.11 DNS)

# Inspect network membership to diagnose isolation issues:
docker network inspect my-app-network --format '{{range .Containers}}{{.Name}} -> {{.IPv4Address}}{{println}}{{end}}'
# Output:
# api -> 172.20.0.2/16
# db  -> 172.20.0.3/16`,
      caption: {
        en: 'Inspect commands confirm peer container presence and IP allocations on the virtual bridge.',
        bn: 'ইন্সপেক্ট কমান্ড দিয়ে ভার্চুয়াল ব্রিজে কোন কন্টেইনার কী আইপি পেয়েছে তা নিশ্চিত হওয়া যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'doc-net-ex1',
      kind: 'predict',
      topic: 'docker: embedded DNS loopback address',
      question: {
        en: 'What specific loopback IP address hosts the Docker Embedded DNS resolver inside user-defined networks?',
        bn: 'ইউজার-ডিফাইন্ড নেটওয়ার্কে কন্টেইনারের ভেতর ডকার এমবেডেড DNS কোন লুপব্যাক আইপিতে অবস্থান করে?'
      },
      code: `/* Internal DNS resolver address */
/* 127.0.0.____ */`,
      answer: '127.0.0.11',
      accept: ['127.0.0.11', '11'],
      hint: {
        en: 'Ends in dot eleven.',
        bn: 'শেষে ডট এগারো।'
      },
      explanation: {
        en: 'Docker reserves the loopback address 127.0.0.11 in every container namespace to handle internal DNS queries for container names.',
        bn: 'ডকার প্রতি কন্টেইনারের ভেতরে 127.0.0.11 ঠিকানায় নিজস্ব DNS রিজলভার বসায় যাতে নাম দিয়ে কন্টেইনার খুঁজে পাওয়া যায়।'
      }
    },
    {
      id: 'doc-net-ex2',
      kind: 'mcq',
      topic: 'docker: default vs custom bridge DNS resolution',
      question: {
        en: 'Why is a User-Defined Bridge network preferred over the legacy Default Bridge in production?',
        bn: 'প্রোডাকশনে ডিফল্ট ব্রিজের চেয়ে ইউজার-ডিফাইন্ড ব্রিজ কেন বেশি সুবিধাজনক?'
      },
      options: [
        { en: 'User-defined bridges provide automatic name resolution via embedded DNS, allowing containers to connect using container names', bn: 'ইউজার-ডিফাইন্ড ব্রিজে এমবেডেড DNS দিয়ে সরাসরি নাম ধরে অন্য কন্টেইনার পাওয়া যায়' },
        { en: 'Default bridge requires purchasing commercial licenses', bn: 'ডিফল্ট ব্রিজে বাণিজ্যিক লাইসেন্স কিনতে হয়' },
        { en: 'User-defined bridges encrypt all hard drives', bn: 'ইউজার-ডিফাইন্ড ব্রিজ সব ড্রাইভ এনক্রিপ্ট করে' },
        { en: 'Default bridge limits upload speeds to 10kbps', bn: 'ডিফল্ট ব্রিজ স্পিড কমিয়ে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Automatic DNS name resolution.',
        bn: 'স্বয়ংক্রিয় DNS নাম রেজোলিউশন।'
      },
      explanation: {
        en: 'The default bridge requires static manual IP addressing. User-defined bridges provide embedded DNS (127.0.0.11) that maps container names dynamically.',
        bn: 'ইউজার-ডিফাইন্ড ব্রিজে এমবেডেড DNS দিয়ে সরাসরি নাম ধরে অন্য কন্টেইনার পাওয়া যায় যা ডিফল্ট ব্রিজে সম্ভব নয়।'
      }
    },
    {
      id: 'doc-net-ex3',
      kind: 'mcq',
      topic: 'docker: EXPOSE vs publish flag',
      question: {
        en: 'What is the actual effect of the "EXPOSE 8080" instruction in a Dockerfile?',
        bn: 'Dockerfile-এ "EXPOSE 8080" নির্দেশনার প্রকৃত ফলাফল কী?'
      },
      options: [
        { en: 'It functions as metadata documentation for developers; it does NOT publish the port or open external firewall access without "-p"', bn: 'এটি কেবল ডেভেলপারদের জন্য ডকুমেন্টেশন হিসেবে কাজ করে; "-p" ফ্ল্যাগ ছাড়া এটি বাস্তবে কোনো পোর্ট খোলে না' },
        { en: 'It automatically opens port 8080 to the public internet', bn: 'স্বয়ংক্রিয়ভাবে পোর্ট ৮০৮০ ইন্টারনেটে উন্মুক্ত করে দেয়' },
        { en: 'It blocks port 8080 from being used', bn: 'পোর্ট ৮০৮০ ব্যবহার করা নিষিদ্ধ করে' },
        { en: 'It allocates an SSL certificate for port 8080', bn: 'পোর্ট ৮০৮০ এর জন্য এসএসএল সার্টিফিকেট বরাদ্দ করে' }
      ],
      answer: 0,
      hint: {
        en: 'Documentation only; port publishing requires -p.',
        bn: 'কেবল তথ্য নির্দেশক; বাস্তবে পোর্ট খুলতে -p ফ্ল্যাগ লাগে।'
      },
      explanation: {
        en: 'EXPOSE is purely declarative documentation between image creators and consumers. Real network mapping requires the -p flag at runtime.',
        bn: 'EXPOSE কোনো পোর্ট বাইরে উন্মুক্ত করে না, এটি কেবল কোন পোর্টে সার্ভিস চলে তা জানিয়ে দেয়। পোর্ট খুলতে -p ফ্ল্যাগ দিতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'doc-net-quiz',
    title: { en: 'Docker Networking Quiz', bn: 'Docker নেটওয়ার্কিং কুইজ' },
    questions: [
      {
        id: 'dnq1',
        kind: 'mcq',
        topic: 'docker: localhost inside container trap',
        question: {
          en: 'Why does an application running inside a container fail to connect to PostgreSQL when configured with host="localhost"?',
          bn: 'কন্টেইনারের ভেতর থেকে host="localhost" দিয়ে সংযোগ দিলে কেন PostgreSQL-এ কানেকশন ফেইল করে?'
        },
        options: [
          { en: 'Inside a container, "localhost" refers strictly to the container own loopback interface, not the host machine or other containers', bn: 'কন্টেইনারের ভেতর "localhost" মানে কেবল কন্টেইনারটির নিজস্ব লুপব্যাক ইন্টারফেস, হোস্ট বা অন্য কন্টেইনার নয়' },
          { en: 'PostgreSQL does not support Docker', bn: 'PostgreSQL ডকার সমর্থন করে না' },
          { en: 'Localhost is disabled in Linux', bn: 'লিনাক্সে লোকালহোস্ট বন্ধ থাকে' },
          { en: 'Port 5432 is reserved for Docker daemon', bn: 'পোর্ট ৫৪৩২ ডকার ডিমনের জন্য বরাদ্দ' }
        ],
        answer: 0,
        hint: {
          en: 'Localhost points to the container itself.',
          bn: 'লোকালহোস্ট কন্টেইনারের নিজের দিকে নির্দেশ করে।'
        },
        explanation: {
          en: 'Network namespaces isolate loopback interfaces. In a container, localhost is the container itself, not the host or external services.',
          bn: 'কন্টেইনারের নিজস্ব আলাদা লুপব্যাক থাকে। তাই কন্টেইনারের ভেতর localhost বললে সে কেবল নিজেকেই খোঁজে।'
        }
      },
      {
        id: 'dnq2',
        kind: 'mcq',
        topic: 'docker: air-gapped security driver',
        question: {
          en: 'Which network driver should be specified to run an untrusted batch processing container in an absolute air-gapped offline environment?',
          bn: 'কোনো অনিরাপদ ব্যাচ টাস্ককে শতভাগ অফলাইনে বিচ্ছিন্নভাবে চালাতে কোন নেটওয়ার্ক ড্রাইভার ব্যবহার করতে হয়?'
        },
        options: [
          { en: '--network none', bn: '--network none' },
          { en: '--network bridge', bn: '--network bridge' },
          { en: '--network host', bn: '--network host' },
          { en: '--network overlay', bn: '--network overlay' }
        ],
        answer: 0,
        hint: {
          en: 'None driver disables networking.',
          bn: 'none ড্রাইভার সব নেটওয়ার্ক বন্ধ রাখে।'
        },
        explanation: {
          en: '--network none strips all network interfaces except loopback, guaranteeing complete network isolation and preventing data egress.',
          bn: '--network none কন্টেইনারের সব নেটওয়ার্ক ইন্টারফেস মুছে ফেলে শতভাগ নিরাপদ অফলাইন পরিবেশ তৈরি করে।'
        }
      },
      {
        id: 'dnq3',
        kind: 'mcq',
        topic: 'docker: multi-tier subnet isolation',
        question: {
          en: 'In a multi-tier network architecture, why is the database placed only on a backend bridge network without port publishing?',
          bn: 'মাল্টি-টিয়ার নেটওয়ার্কে ডেটাবেসকে কেন কেবল ব্যাকএন্ড ব্রিজে রাখা হয় এবং কোনো পোর্ট পাবলিশ করা হয় না?'
        },
        options: [
          { en: 'It keeps the database unreachable from public host interfaces while allowing multi-homed API servers to query it internally', bn: 'এটি ডেটাবেসকে বাইরের হোস্ট থেকে সম্পূর্ণ অদৃশ্য রাখে এবং কেবল অনুমোদিত API সার্ভারকে অভ্যন্তরীণ সংযোগ দেয়' },
          { en: 'Because databases cannot function if assigned an IP address', bn: 'কারণ আইপি অ্যাড্রেস দিলে ডেটাবেস চলতে পারে না' },
          { en: 'To reduce RAM consumption to zero', bn: 'র্যাম খরচ শূন্য করার জন্য' },
          { en: 'It allows Windows machines to query Linux tables', bn: 'এটি উইন্ডোজ থেকে লিনাক্স দেখতে সাহায্য করে' }
        ],
        answer: 0,
        hint: {
          en: 'Shields database from external host exposure.',
          bn: 'হোস্টের সরাসরি উন্মুক্ততা থেকে ডেটাবেসকে আড়াল করে।'
        },
        explanation: {
          en: 'Restricting the database to an unmapped backend network enforces defense-in-depth: even if frontend reverse proxies are compromised, the database has no route to public ingress.',
          bn: 'ব্যাকএন্ড ব্রিজে ডেটাবেস রাখলে বাইরের আক্রমণকারী সরাসরি ডেটাবেসে পৌঁছাতে পারে না, কেবল নির্ধারিত মিডলওয়্যারই এতে ঢুকতে পারে।'
        }
      },
      {
        id: 'dnq4',
        kind: 'mcq',
        topic: 'docker: --network container sidecar pattern',
        question: {
          en: 'What architectural capability is unlocked by using the "--network container:<target>" flag?',
          bn: '"--network container:<লক্ষ্য>" ফ্ল্যাগ ব্যবহার করলে কোন আর্কিটেকচারাল সুবিধা পাওয়া যায়?'
        },
        options: [
          { en: 'The joining container shares the exact same network namespace, IP address, and localhost loopback as the target container', bn: 'যুক্ত হওয়া কন্টেইনারটি লক্ষ্য কন্টেইনারের সাথে একই নেটওয়ার্ক নেমস্পেস, আইপি ও লোকালহোস্ট ভাগ করে নেয়' },
          { en: 'It deletes the target container and takes over its disk', bn: 'এটি লক্ষ্য কন্টেইনারকে মুছে ফেলে তার ডিস্ক দখল করে' },
          { en: 'It forces both containers to run on different physical machines', bn: 'উভয় কন্টেইনারকে আলাদা মেশিনে পাঠায়' },
          { en: 'It compresses network packets using gzip', bn: 'নেটওয়ার্ক প্যাকেট gzip দিয়ে সংকুচিত করে' }
        ],
        answer: 0,
        hint: {
          en: 'Shares network namespace and localhost.',
          bn: 'নেটওয়ার্ক নেমস্পেস ও লোকালহোস্ট ভাগ করে।'
        },
        explanation: {
          en: 'Sharing the network namespace enables high-performance sidecar designs (like envoy proxies or log collectors) that communicate with the primary app over localhost with zero latency.',
          bn: 'নেটওয়ার্ক শেয়ারিংয়ের মাধ্যমে সাইডকার কন্টেইনার মূল অ্যাপের সাথে সরাসরি লোকালহোস্টে যোগাযোগ করতে পারে।'
        }
      }
    ]
  }
};
