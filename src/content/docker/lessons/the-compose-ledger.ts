import type { Lesson } from '../../../lib/types';

export const composeLedgerLesson: Lesson = {
  slug: 'the-compose-ledger',
  tech: 'docker',
  title: {
    en: 'Docker Compose: Multi-Container Orchestration, Dependencies & Environments',
    bn: 'Docker Compose: মাল্টি-কন্টেইনার অর্কেস্ট্রেশন, ডিপেনডেন্সি ও এনভায়রনমেন্ট'
  },
  summary: {
    en: 'Master multi-container orchestration across 10 structured topics. We explore compose.yaml architecture, service dependencies with healthchecks, and environment configuration. You will learn startup race prevention, multi-environment overlays, and safe data lifecycle management.',
    bn: '১০টি সুসংগঠিত পয়েন্টে মাল্টি-কন্টেইনার অর্কেস্ট্রেশন আয়ত্ত করুন। compose.yaml আর্কিটেকচার, হেলথচেকসহ সার্ভিস ডিপেনডেন্সি এবং এনভায়রনমেন্ট কনফিগারেশন পর্যালোচনা করা হয়। এখানে স্টার্টআপ সমস্যা নিরসন, মাল্টি-এনভায়রনমেন্ট ওভারলে এবং ভলিউম ডেটার জীবনচক্র শিখবেন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-hardened-manifest',
    tech: 'docker',
    title: {
      en: 'The Hardened Manifest: Production Security, Non-Root Users & Read-Only Roots',
      bn: 'শক্তিশালী ম্যানিফেস্ট: প্রোডাকশন নিরাপত্তা, নন-রুট ব্যবহারকারী ও রিড-অনলি রুট'
    }
  },
  blocks: [
    {
      type: 'diagram',
      id: 'compose-architecture-diagram',
      title: {
        en: 'Docker Compose Declarative Multi-Tier Topology & Dependency Graph',
        bn: 'Docker Compose ঘোষণামূলক মাল্টি-টিয়ার টপোলজি ও ডিপেনডেন্সি গ্রাফ'
      },
      svg: `<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="cmpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#065f46" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
    <linearGradient id="yamlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a5f" />
      <stop offset="100%" stop-color="#0f2238" />
    </linearGradient>
    <marker id="cmpArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="waitArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#fbbf24" />
    </marker>
  </defs>

  <!-- Background -->
  <rect width="800" height="380" rx="12" fill="#0b1120" stroke="#334155" stroke-width="1.5"/>

  <!-- Top Title -->
  <text x="400" y="32" fill="#f8fafc" font-size="16" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Docker Compose Orchestration: compose.yaml to Running Fleet</text>

  <!-- File: compose.yaml -->
  <rect x="30" y="60" width="160" height="215" rx="8" fill="url(#yamlGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="110" y="88" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle" font-family="monospace">compose.yaml</text>
  <line x1="45" y1="100" x2="175" y2="100" stroke="#334155" stroke-width="1"/>
  <text x="50" y="122" fill="#94a3b8" font-size="11" font-family="monospace">services:</text>
  <text x="65" y="142" fill="#38bdf8" font-size="11" font-family="monospace">web: nginx</text>
  <text x="65" y="162" fill="#38bdf8" font-size="11" font-family="monospace">api: node</text>
  <text x="65" y="182" fill="#34d399" font-size="11" font-family="monospace">db: postgres</text>
  <text x="50" y="206" fill="#94a3b8" font-size="11" font-family="monospace">networks:</text>
  <text x="65" y="224" fill="#cbd5e1" font-size="11" font-family="monospace">app-net</text>
  <text x="50" y="246" fill="#94a3b8" font-size="11" font-family="monospace">volumes: pgdata</text>

  <!-- Reconcile Arrow -->
  <line x1="190" y1="165" x2="245" y2="165" stroke="#38bdf8" stroke-width="2" marker-end="url(#cmpArrow)"/>
  <text x="218" y="152" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">up -d</text>

  <!-- Fleet Box -->
  <rect x="255" y="60" width="515" height="215" rx="8" fill="#031d33" stroke="#0284c7" stroke-width="1.5"/>
  <text x="512" y="86" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">RECONCILED FLEET (Idempotent State)</text>

  <!-- Service: Web -->
  <rect x="275" y="110" width="135" height="75" rx="6" fill="url(#cmpGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="342" y="135" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">WEB (Proxy)</text>
  <text x="342" y="155" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="monospace">ports: "80:80"</text>
  <text x="342" y="172" fill="#64748b" font-size="9" text-anchor="middle" font-family="monospace">nginx:alpine</text>

  <!-- Service: API -->
  <rect x="445" y="110" width="145" height="75" rx="6" fill="url(#cmpGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="517" y="135" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">API (Backend)</text>
  <text x="517" y="155" fill="#fbbf24" font-size="10" text-anchor="middle" font-family="monospace">depends_on: db</text>
  <text x="517" y="172" fill="#64748b" font-size="9" text-anchor="middle" font-family="monospace">service_healthy</text>

  <!-- Service: DB -->
  <rect x="625" y="110" width="130" height="75" rx="6" fill="url(#dbGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="690" y="135" fill="#34d399" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">DB (Postgres)</text>
  <text x="690" y="155" fill="#a7f3d0" font-size="10" text-anchor="middle" font-family="monospace">pg_isready</text>
  <text x="690" y="172" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle" font-family="monospace">HEALTHY (Pass)</text>

  <!-- Web to API Arrow -->
  <line x1="410" y1="147" x2="437" y2="147" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#cmpArrow)"/>

  <!-- API to DB Wait Condition Arrow -->
  <line x1="590" y1="147" x2="617" y2="147" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#waitArrow)"/>

  <!-- Volume Box Below DB -->
  <rect x="625" y="200" width="130" height="60" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
  <text x="690" y="225" fill="#e2e8f0" font-size="11" font-weight="700" text-anchor="middle" font-family="monospace">volume: pgdata</text>
  <text x="690" y="245" fill="#34d399" font-size="10" text-anchor="middle" font-family="system-ui, sans-serif">Survives down</text>

  <!-- Volume Connection Line -->
  <line x1="690" y1="185" x2="690" y2="195" stroke="#34d399" stroke-width="2"/>

  <!-- Bottom Legend / Rule -->
  <rect x="30" y="295" width="740" height="65" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="50" y="320" fill="#fbbf24" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Startup Race Fix:</text>
  <text x="180" y="320" fill="#cbd5e1" font-size="11" font-family="monospace">depends_on with condition: service_healthy blocks API until DB passes pg_isready.</text>
  <text x="50" y="342" fill="#34d399" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Volume Persistence:</text>
  <text x="180" y="342" fill="#cbd5e1" font-size="11" font-family="monospace">docker compose down retains volumes; docker compose down -v forcefully purges data.</text>
</svg>`,
      caption: {
        en: 'Docker Compose orchestration topology: declarative YAML reconciling services, networks, and persistent volumes.',
        bn: 'Docker Compose অর্কেস্ট্রেশন টপোলজি: ঘোষণামূলক YAML থেকে সার্ভিস, নেটওয়ার্ক ও পারসিস্টেন্ট ভলিউমের সমন্বয়।'
      }
    },
    { type: 'heading', id: 'p1', text: { en: '1. What is Docker Compose? Declarative Fleet Architecture', bn: '১. Docker Compose কী? ঘোষণামূলক বহর আর্কিটেকচার' } },
    {
      type: 'para',
      text: {
        en: 'Docker Compose is a declarative tool for defining and running multi-container Docker applications. Instead of running dozens of verbose "docker run" commands with complex port, volume, and network flags, Compose defines your entire stack in a single version-controlled configuration file named compose.yaml (or docker-compose.yml).',
        bn: 'Docker Compose হলো একটি ঘোষণামূলক টুল যা দিয়ে একাধিক কন্টেইনার বিশিষ্ট অ্যাপ্লিকেশন একসাথে তৈরি ও পরিচালনা করা যায়। প্রতিটি কন্টেইনারের জন্য আলাদা লম্বা "docker run" কমান্ড মুখস্থ রাখার বদলে Compose একটিমাত্র compose.yaml (বা docker-compose.yml) ফাইলে পুরো সিস্টেমের সব সার্ভিস, নেটওয়ার্ক ও ভলিউম গুছিয়ে সংরক্ষণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `# Basic compose.yaml specification:
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    restart: unless-stopped`,
      caption: {
        en: 'A minimal Compose file declares the entire application specification in readable YAML format.',
        bn: 'একটি সহজ Compose ফাইল পরিচ্ছন্ন YAML ফরম্যাটে পুরো অ্যাপ্লিকেশন কাঠামো ঘোষণা করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Structure of compose.yaml: Services, Networks & Volumes', bn: '২. compose.yaml ফাইলের গঠন: Services, Networks ও Volumes' } },
    {
      type: 'para',
      text: {
        en: 'A standard Compose file is organized under three top-level keys. First, "services" defines containerized components such as APIs and databases with their ports and environments. Second, "networks" declares custom bridge networks to isolate application tiers. Third, "volumes" provisions named persistent storage that outlives container deletion.',
        bn: 'একটি স্ট্যান্ডার্ড Compose ফাইল মূলত তিনটি প্রধান অংশে বিভক্ত থাকে। প্রথমত, "services" প্রতিটি কন্টেইনার কম্পোনেন্ট যেমন API ও ডাটাবেস ঘোষণা করে। দ্বিতীয়ত, "networks" কন্টেইনারগুলোর মধ্যে যোগাযোগের জন্য নিজস্ব ব্রিজ নেটওয়ার্ক তৈরি করে। তৃতীয়ত, "volumes" কন্টেইনার মুছে গেলেও ডেটা সংরক্ষণের জন্য পারসিস্টেন্ট স্টোরেজ তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `services:
  api:
    build: .
    ports:
      - "3000:3000"
    networks:
      - app-net
    volumes:
      - app-data:/app/uploads

networks:
  app-net:
    driver: bridge

volumes:
  app-data:`,
      caption: {
        en: 'Top-level blocks define modular services, isolated networks, and persistent storage volumes.',
        bn: 'শীর্ষ স্তরের ব্লকগুলো সার্ভিস, নেটওয়ার্ক এবং পারসিস্টেন্ট ভলিউম পরিষ্কারভাবে সাজিয়ে রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Idempotent Reconcile Loop: up, down, ps & logs', bn: '৩. সমন্বয় চক্র ও কমান্ড লাইফসাইকেল: up, down, ps ও logs' } },
    {
      type: 'para',
      text: {
        en: 'The Docker Compose CLI provides declarative control. Running "docker compose up -d" converges reality toward the YAML specification: creating networks, volumes, building images, and booting services in order. Compose is idempotent; running "up" twice changes nothing unless the configuration file has been modified.',
        bn: 'Docker Compose সিএলআই ঘোষণামূলক কমান্ড সুবিধা দেয়। "docker compose up -d" কমান্ড দিলে ডকার বাস্তব অবস্থাকে ফাইলের সাথে মিলিয়ে নেয়: প্রয়োজনীয় নেটওয়ার্ক, ভলিউম তৈরি করে এবং ব্যাকগ্রাউন্ডে সার্ভিসগুলো চালু করে। এটি ইডেমপটেন্ট (idempotent); ফাইলে কোনো পরিবর্তন না এলে বারবার "up" চালালেও নতুন করে কিছু তৈরি হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Start all services in detached background mode:
docker compose up -d

# 2. View running fleet status:
docker compose ps

# 3. Stream real-time logs from a specific service:
docker compose logs -f api

# 4. Stop and tear down all containers and networks:
docker compose down`,
      caption: {
        en: 'Compose commands manage the full lifecycle of entire multi-container applications.',
        bn: 'Compose কমান্ডগুলো একসাথে একাধিক কন্টেইনারের পুরো জীবনচক্র সহজে পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Solving Startup Race Conditions: depends_on vs Readiness', bn: '৪. স্টার্টআপ রেস কন্ডিশন সমাধান: depends_on বনাম সার্ভিস প্রস্তুতি' } },
    {
      type: 'para',
      text: {
        en: 'A notorious bug occurs when a backend container starts before PostgreSQL is ready to accept socket queries. By default, "depends_on" only guarantees start order (the database container process has started), not application readiness. To solve this, pair depends_on with condition: service_healthy.',
        bn: 'একটি সাধারণ মারাত্মক সমস্যা হলো ডাটাবেস সম্পূর্ণ রেডি হওয়ার আগেই ব্যাকএন্ড অ্যাপ চালু হয়ে ক্র্যাশ করা। ডিফল্ট "depends_on" কেবল কন্টেইনার চালু হওয়ার ক্রম ঠিক করে, ডাটাবেস আসলেই রেডি কি না তা দেখে না। এটি সমাধান করতে "depends_on"-এর সাথে condition: service_healthy যোগ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `services:
  backend:
    build: .
    depends_on:
      db:
        condition: service_healthy # Waits for DB health check to turn GREEN!

  db:
    image: postgres:16-alpine
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 3s
      retries: 5`,
      caption: {
        en: 'condition: service_healthy delays dependent services until healthcheck probes pass.',
        bn: 'condition: service_healthy নিশ্চিত করে হেলথচেক সফল না হওয়া পর্যন্ত অন্য সার্ভিস অপেক্ষা করবে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Configuring Robust Healthchecks: test, interval & retries', bn: '৫. নির্ভুল হেলথচেক কনফিগারেশন: test, interval ও retries' } },
    {
      type: 'para',
      text: {
        en: 'A healthcheck probes the genuine readiness of a service from inside the container. It configures four vital parameters: 1) "test": the command executed to verify health (e.g. curl or pg_isready); 2) "interval": frequency of checks (e.g. 10s); 3) "timeout": maximum response allowance (e.g. 3s); 4) "retries": number of failures before marking as unhealthy.',
        bn: 'হেলথচেক কন্টেইনারের ভেতর থেকে অ্যাপ্লিকেশনের আসল প্রস্তুতি যাচাই করে। এতে চারটি প্রধান সেটিংস থাকে: ১) "test": অ্যাপের সুস্থতা যাচাইয়ের কমান্ড (যেমন curl বা pg_isready); ২) "interval": কত সেকেন্ড পর পর পরীক্ষা চলবে (যেমন 10s); ৩) "timeout": রেসপন্স পাওয়ার সর্বোচ্চ সময়সীমা; ৪) "retries": কতবার ফেইল করলে সার্ভিসকে আনহেলদি ঘোষণা করা হবে।',
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `services:
  cache:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 2s
      retries: 3
      start_period: 5s # Grace period during initial startup`,
      caption: {
        en: 'Healthcheck parameters define automated readiness testing and failover criteria.',
        bn: 'হেলথচেক প্যারামিটারগুলো স্বয়ংক্রিয়ভাবে সার্ভিসের প্রস্তুতি ও নির্ভরযোগ্যতা যাচাই করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Environment Variables and Secret Management: .env vs env_file', bn: '৬. এনভায়রনমেন্ট ভ্যারিয়েবল ও সিক্রেট ম্যানেজমেন্ট: .env বনাম env_file' } },
    {
      type: 'para',
      text: {
        en: 'Compose manages configuration variables across three distinct tiers. First, the "environment" block declares inline key-value pairs directly in YAML. Second, the "env_file" directive loads external files into the container runtime. Third, the root ".env" file substitutes variable tokens inside compose.yaml itself.',
        bn: 'Compose তিনটি স্তরে কনফিগারেশন ভ্যারিয়েবল পরিচালনা করে। প্রথমত, "environment" ব্লক সরাসরি YAML ফাইলে ভ্যারিয়েবল ঘোষণা করে। দ্বিতীয়ত, "env_file" আলাদা ফাইল থেকে ভ্যারিয়েবল কন্টেইনারে লোড করে। তৃতীয়ত, রুট ফোল্ডারে থাকা ".env" ফাইল compose.yaml ফাইলের নিজস্ব ভ্যারিয়েবল প্রতিস্থাপনে ব্যবহৃত হয়।',
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `# compose.yaml:
services:
  api:
    image: my-api:\${APP_TAG:-latest} # Substitutes from root .env file!
    env_file:
      - .env.local                  # Injects secrets into container
    environment:
      NODE_ENV: production          # Static inline configuration`,
      caption: {
        en: 'Compose separates YAML template substitutions from runtime container environment injection.',
        bn: 'Compose ফাইলের নিজস্ব ভ্যারিয়েবল এবং কন্টেইনারের অভ্যন্তরীণ ভ্যারিয়েবল আলাদা রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Multi-Environment Stacks: compose.override.yaml', bn: '৭. মাল্টি-এনভায়রনমেন্ট স্ট্যাক: compose.override.yaml' } },
    {
      type: 'para',
      text: {
        en: 'In development, you want live source code bind-mounting and exposed database ports, while production requires immutable builds and closed internal ports. Docker Compose automatically merges "compose.override.yaml" on top of "compose.yaml" for local developer workstations without duplicating files.',
        bn: 'ডেভেলপমেন্টে লাইভ কোড রিলোডের জন্য লোকাল ফোল্ডার মাউন্ট ও ডাটাবেস পোর্ট খোলা দরকার হয়, কিন্তু প্রোডাকশনে সবকিছু নিরাপদ ও বন্ধ রাখতে হয়। ডকার কম্পোজ মূল ফাইলের কোনো ক্ষতি না করে স্বয়ংক্রিয়ভাবে "compose.override.yaml" ফাইলটিকে "compose.yaml"-এর ওপর ওভারলে করে লোকাল পরিবেশ সাজিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `# compose.override.yaml (automatically loaded alongside compose.yaml):
services:
  api:
    build:
      context: .
      target: dev
    volumes:
      - .:/app                      # Hot reloading bind mount
    ports:
      - "3000:3000"
      - "9229:9229"                 # Expose Node.js debugger port in dev!

  db:
    ports:
      - "5432:5432"                 # Exposed only on developer laptop`,
      caption: {
        en: 'compose.override.yaml applies developer conveniences without altering production specifications.',
        bn: 'compose.override.yaml প্রোডাকশন ফাইলে কোনো হাত না দিয়েই ডেভেলপারের প্রয়োজনীয় কনফিগ যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Selective Service Activation with Profiles', bn: '৮. Profiles দিয়ে ঐচ্ছিক সার্ভিস সক্রিয়করণ' } },
    {
      type: 'para',
      text: {
        en: 'Complex stacks often include supplementary tools like Adminer database GUIs, mock payment gateways, or integration test suites that should not start during normal local runs. Annotate these services with "profiles: [\"debug\"]"; Compose will ignore them unless the user explicitly executes with "--profile debug".',
        bn: 'বড় প্রজেক্টে প্রায়ই ডাটাবেস দেখার অ্যাডমিন প্যানেল, মক সার্ভার বা টেস্ট রানারের মতো অতিরিক্ত সার্ভিস থাকে যা সব সময় চালু রাখা অপ্রয়োজনীয়। এগুলোতে "profiles: [\"debug\"]" ঘোষণা করলে ডকার সাধারণ সময় এগুলোকে বন্ধ রাখে এবং শুধুমাত্র "--profile debug" ফ্ল্যাগ দিলে চালু করে।'
      }
    },
    {
      type: 'code',
      lang: 'yaml',
      code: `services:
  db-admin:
    image: adminer:latest
    ports:
      - "8081:8080"
    profiles:
      - debug                       # Only runs when explicitly requested!

# Command to launch full fleet including debug profile:
# docker compose --profile debug up -d`,
      caption: {
        en: 'Profiles isolate heavyweight developer utilities from everyday application startup.',
        bn: 'Profiles ভারী ডেভেলপার টুলগুলোকে আলাদা রেখে সাধারণ স্টার্টআপ দ্রুত ও হালকা রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Data Lifecycle and Destruction: down vs down -v', bn: '৯. ডেটার জীবনচক্র ও ধ্বংস: down বনাম down -v' } },
    {
      type: 'para',
      text: {
        en: 'Running "docker compose down" safely stops and removes containers and networks, but deliberately preserves your named persistent storage volumes. To completely wipe local databases and reset the project to pristine state, you must explicitly supply the "-v" flag: "docker compose down -v". Never execute this flag in production environments.',
        bn: '"docker compose down" দিলে কন্টেইনার ও নেটওয়ার্ক মুছে গেলেও আপনার মূল্যবান ডাটাবেস ভলিউম সম্পূর্ণ নিরাপদ থাকে। কিন্তু লোকাল পরিবেশে পুরো ডাটাবেস একদম শূন্য থেকে নতুন করে শুরু করতে চাইলে "-v" ফ্ল্যাগ সহ "docker compose down -v" দিতে হয়। প্রোডাকশনে এই ফ্ল্যাগ দিলে সব ডেটা স্থায়ীভাবে ধ্বংস হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard teardown (retains database volumes):
docker compose down
# Named volume "pgdata" remains intact on disk!

# ⚠️ DESTRUCTIVE: Teardown and delete all persistent named volumes:
docker compose down -v
# Output: Removing volume app_pgdata -> ALL DATA PERMANENTLY DELETED!`,
      caption: {
        en: 'The -v flag controls whether persistent named volume state survives fleet teardown.',
        bn: '-v ফ্ল্যাগ নির্ধারণ করে ডাউন করার পর পারসিস্টেন্ট ভলিউমের ডেটা টিকে থাকবে নাকি মুছে যাবে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Bridging Compose to Production Orchestrators', bn: '১০. Compose থেকে প্রোডাকশন ক্লাউড অর্কেস্ট্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'Docker Compose excels for single-host development and simple production VPS hosting. For multi-node high availability with auto-scaling, self-healing, and rolling zero-downtime updates, teams migrate Compose manifests to Kubernetes Pods, Deployments, and StatefulSets using tools like Kompose or direct cloud manifests.',
        bn: 'একটিমাত্র সার্ভার বা লোকাল ডেভেলপমেন্টের জন্য Docker Compose সবচেয়ে সেরা পছন্দ। তবে একাধিক সার্ভার বিশিষ্ট বড় ক্লাউডে অটো-স্কেলিং, সেলফ-হিলিং এবং কোনো ডাউনটাইম ছাড়া রোলিং আপডেটের প্রয়োজন হলে কম্পোজ ফাইলগুলোকে Kubernetes Pods ও Deployments-এ রূপান্তর করে ক্লাউড ক্লাস্টারে চালানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Translate Docker Compose file into native Kubernetes manifests:
kompose convert -f compose.yaml
# Generates:
# - backend-deployment.yaml
# - backend-service.yaml
# - db-statefulset.yaml
# - pgdata-persistentvolumeclaim.yaml`,
      caption: {
        en: 'Compose specifications translate cleanly into enterprise Kubernetes declarative manifests.',
        bn: 'Compose ফাইলগুলোকে সরাসরি এন্টারপ্রাইজ Kubernetes ম্যানিফেস্টে রূপান্তর করা সম্ভব।'
      }
    }
  ],
  exercises: [
    {
      id: 'doc-cmp-ex1',
      kind: 'predict',
      topic: 'docker: Compose background startup flag',
      question: {
        en: 'Which CLI flag starts all services declared in compose.yaml detached in the background?',
        bn: 'compose.yaml ফাইলের সব সার্ভিসকে ব্যাকগ্রাউন্ডে চালু করতে কোন ফ্ল্যাগ ব্যবহার করা হয়?'
      },
      code: `/* Start Compose fleet in detached background mode */
/* docker compose up _____ */`,
      answer: '-d',
      accept: ['-d', 'd', '--detach'],
      hint: {
        en: 'Dash d for detached.',
        bn: 'ডিটাচড এর জন্য ড্যাশ d।'
      },
      explanation: {
        en: 'The -d flag runs containers in the background, freeing your terminal console.',
        bn: '-d ফ্ল্যাগ কন্টেইনারগুলোকে ব্যাকগ্রাউন্ডে চালু রেখে আপনার টার্মিনাল খালি রাখে।'
      }
    },
    {
      id: 'doc-cmp-ex2',
      kind: 'mcq',
      topic: 'docker: depends_on health check condition',
      question: {
        en: 'How do you prevent a web API service from starting until the database is fully initialized and accepting socket queries?',
        bn: 'ডাটাবেস সম্পূর্ণ চালু হয়ে রেডি হওয়ার আগে কীভাবে ওয়েব API সার্ভিস চালু হওয়া আটকানো যায়?'
      },
      options: [
        { en: 'Pair depends_on with condition: service_healthy on a database service that defines a valid healthcheck', bn: 'ডাটাবেসে হেলথচেক দিয়ে depends_on-এর ভেতর condition: service_healthy ঘোষণা করতে হয়' },
        { en: 'Add sleep 60 to the API Dockerfile', bn: 'API-তে sleep 60 যোগ করে' },
        { en: 'Run API in host network mode', bn: 'API হোস্ট মোডে চালিয়ে' },
        { en: 'Use an anonymous volume for the database', bn: 'ডাটাবেসের জন্য নামহীন ভলিউম ব্যবহার করে' }
      ],
      answer: 0,
      hint: {
        en: 'condition: service_healthy.',
        bn: 'condition: service_healthy।'
      },
      explanation: {
        en: 'By default, depends_on only checks container startup. Pair it with condition: service_healthy to wait until the application passes its health check.',
        bn: 'হেলথচেকের সাথে condition: service_healthy দিলে ডাটাবেসের টেস্ট সফল হওয়ার পরেই কেবল ব্যাকএন্ড সার্ভিস বুট হয়।'
      }
    },
    {
      id: 'doc-cmp-ex3',
      kind: 'mcq',
      topic: 'docker: Compose service profiles purpose',
      question: {
        en: 'What is the primary benefit of declaring "profiles: [\"debug\"]" on a service in compose.yaml?',
        bn: 'compose.yaml-এ কোনো সার্ভিসের ওপর "profiles: [\"debug\"]" ঘোষণা করার মূল সুবিধা কী?'
      },
      options: [
        { en: 'The service is excluded from standard startup and only boots when explicitly requested via the --profile flag', bn: 'সার্ভিসটি সাধারণ স্টার্টআপে চালু হয় না এবং কেবল --profile ফ্ল্যাগ দিলেই বুট হয়' },
        { en: 'It automatically turns on Node.js debugger on port 9229', bn: 'এটি স্বয়ংক্রিয়ভাবে পোর্ট ৯২২৯ এ ডিবাগার চালু করে' },
        { en: 'It encrypts the container image', bn: 'এটি কন্টেইনার ইমেজ এনক্রিপ্ট করে' },
        { en: 'It allocates double memory to the service', bn: 'দ্বিগুণ মেমরি বরাদ্দ করে' }
      ],
      answer: 0,
      hint: {
        en: 'Selective startup with --profile.',
        bn: '--profile দিয়ে ঐচ্ছিক স্টার্টআপ।'
      },
      explanation: {
        en: 'Profiles allow grouping optional services (like Adminer, database seeders, or test runners) so they only boot on demand.',
        bn: 'Profiles ঐচ্ছিক ডেভেলপার সার্ভিসগুলোকে আলাদা রাখে যাতে সাধারণ সময় তারা অনর্থক মেমরি অপচয় না করে।'
      }
    }
  ],
  quiz: {
    id: 'doc-cmp-quiz',
    title: { en: 'Docker Compose Architecture Quiz', bn: 'Docker Compose আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'dcq1',
        kind: 'mcq',
        topic: 'docker: Compose idempotency',
        question: {
          en: 'What occurs when you execute "docker compose up -d" on an already-running project where no configuration files have changed?',
          bn: 'ইতিমধ্যে চালু থাকা কোনো প্রজেক্টে ফাইলে কোনো পরিবর্তন না করে পুনরায় "docker compose up -d" দিলে কী ঘটবে?'
        },
        options: [
          { en: 'Compose verifies existing container states and makes zero changes, leaving all containers running uninterrupted', bn: 'Compose বর্তমান অবস্থা মিলিয়ে দেখে এবং কোনো পরিবর্তন না করে সব সার্ভিসকে নির্বিঘ্নে চালু রাখে' },
          { en: 'Compose crashes with an AlreadyRunningException', bn: 'AlreadyRunningException দিয়ে ক্র্যাশ করে' },
          { en: 'All containers are deleted and rebuilt from scratch', bn: 'সব কন্টেইনার মুছে আবার নতুন করে তৈরি হয়' },
          { en: 'Port numbers are randomly reassigned', bn: 'পোর্ট নম্বর বদলে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Idempotent state reconciliation.',
          bn: 'ইডেমপটেন্ট অবস্থা যাচাই।'
        },
        explanation: {
          en: 'Compose is idempotent. If the live state matches the desired state declared in compose.yaml, no containers are recreated or interrupted.',
          bn: 'Compose ইডেমপটেন্ট হওয়ায় বাস্তব অবস্থার সাথে ফাইল মিলে গেলে কোনো নতুন কন্টেইনার তৈরি বা রিস্টার্ট না করে অপরিবর্তিত রাখে।'
        }
      },
      {
        id: 'dcq2',
        kind: 'mcq',
        topic: 'docker: .env vs env_file distinction',
        question: {
          en: 'What is the operational difference between the root ".env" file and the "env_file" directive in compose.yaml?',
          bn: 'রুট ডিরেক্টরির ".env" ফাইল এবং compose.yaml-এর "env_file" নির্দেশের মধ্যে ব্যবহারিক পার্থক্য কী?'
        },
        options: [
          { en: 'The root .env file substitutes variables inside compose.yaml itself; env_file injects variables into the running container environment', bn: 'রুট .env ফাইল compose.yaml-এর নিজস্ব ভ্যারিয়েবল প্রতিস্থাপন করে; env_file কন্টেইনারের অভ্যন্তরীণ পরিবেশের জন্য ভ্যারিয়েবল পাঠায়' },
          { en: 'There is no difference; they are exact aliases', bn: 'এদের মধ্যে কোনো পার্থক্য নেই' },
          { en: 'The .env file works only on Linux; env_file works only on macOS', bn: '.env শুধু লিনাক্সে কাজ করে' },
          { en: 'env_file deletes the .env file after reading', bn: 'env_file অন্য ফাইল মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Compose variable substitution vs container environment injection.',
          bn: 'কম্পোজ ফাইলের ভ্যারিয়েবল বনাম কন্টেইনারের ভেতরের ভ্যারিয়েবল।'
        },
        explanation: {
          en: 'Root .env provides values for variable interpolation inside the Compose file itself. The env_file directive passes environment variables into the container OS.',
          bn: 'রুট .env কম্পোজ ফাইলের কাঠামোতে ভ্যারিয়েবল বসায়, আর env_file কন্টেইনারের অপারেটিং সিস্টেমে ভ্যারিয়েবল সরবরাহ করে।'
        }
      },
      {
        id: 'dcq3',
        kind: 'mcq',
        topic: 'docker: depends_on service_healthy vs default',
        question: {
          en: 'Why is standard "depends_on: [\"db\"]" insufficient to prevent application crash during startup?',
          bn: 'স্টার্টআপের সময় অ্যাপ্লিকেশন ক্র্যাশ রোধ করতে সাধারণ "depends_on: [\"db\"]" কেন যথেষ্ট নয়?'
        },
        options: [
          { en: 'Default depends_on only checks if the database container process started, not whether the database engine has finished initializing and ready to accept queries', bn: 'ডিফল্ট depends_on কেবল দেখে কন্টেইনার প্রসেস চালু হয়েছে কি না, ডাটাবেস সম্পূর্ণ রেডি কি না তা দেখে না' },
          { en: 'Because depends_on only works for web proxies', bn: 'কারণ এটি কেবল ওয়েব প্রক্সির জন্য কাজ করে' },
          { en: 'It requires paying for an enterprise Docker license', bn: 'এর জন্য এন্টারপ্রাইজ লাইসেন্স লাগে' },
          { en: 'depends_on reverses the startup order of containers', bn: 'এটি শুরুর ক্রম উল্টে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Process startup vs application readiness.',
          bn: 'প্রসেস শুরু বনাম অ্যাপ প্রস্তুতি।'
        },
        explanation: {
          en: 'Databases take seconds to initialize internal storage and open sockets. Using "condition: service_healthy" ensures the dependent app waits until healthcheck confirms socket readiness.',
          bn: 'ডাটাবেস চালু হতে কয়েক সেকেন্ড সময় নেয়। তাই condition: service_healthy দিয়ে নিশ্চিত হতে হয় যে ডাটাবেস সত্যই কাজ করার উপযোগী।'
        }
      },
      {
        id: 'dcq4',
        kind: 'mcq',
        topic: 'docker: down -v data destruction',
        question: {
          en: 'What irreversible data loss occurs if an operator runs "docker compose down -v"?',
          bn: 'কোনো অপারেটর "docker compose down -v" কমান্ড দিলে কোন অপূরণীয় ক্ষতিটি ঘটে?'
        },
        options: [
          { en: 'All named persistent volumes declared in compose.yaml are permanently deleted, wiping all databases and uploaded files', bn: 'compose.yaml ফাইলে থাকা সব পারসিস্টেন্ট ভলিউম স্থায়ীভাবে মুছে যায় এবং সব ডেটা হারিয়ে যায়' },
          { en: 'The operator laptop operating system is reinstalled', bn: 'অপারেটরের ওএস রিইনস্টল হয়ে যায়' },
          { en: 'It only clears the terminal history', bn: 'শুধু টার্মিনাল হিস্ট্রি পরিষ্কার করে' },
          { en: 'It switches the project from Git to SVN', bn: 'এটি গিট থেকে SVN-এ চলে যায়' }
        ],
        answer: 0,
        hint: {
          en: '-v destroys persistent named volumes.',
          bn: '-v পারসিস্টেন্ট ভলিউম মুছে ফেলে।'
        },
        explanation: {
          en: 'The -v (or --volumes) flag instructs Compose to tear down not just containers and networks, but also all declared persistent volumes.',
          bn: '-v ফ্ল্যাগ দিলে কন্টেইনারের সাথে সাথে সব পারসিস্টেন্ট ভলিউমের ডেটাও চিরতরে মুছে যায়।'
        }
      }
    ]
  }
};
