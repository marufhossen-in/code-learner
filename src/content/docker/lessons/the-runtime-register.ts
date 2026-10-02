import type { Lesson } from '../../../lib/types';

export const runtimeRegisterLesson: Lesson = {
  slug: 'the-runtime-register',
  tech: 'docker',
  title: {
    en: 'Docker Container Runtime: Lifecycle, PID 1, Signals & Process Supervision',
    bn: 'Docker কন্টেইনার রানটাইম: জীবনচক্র, PID 1, সিগন্যাল ও প্রসেস পর্যবেক্ষণ'
  },
  summary: {
    en: 'Master container runtime operations across 10 core topics. We examine container lifecycles from create to rm, execution flags, and inspection tools. You will learn PID 1 signal mechanics, the difference between graceful stop and kill, init process zombie reaping, exit code decoding, and restart policies.',
    bn: '১০টি মূল বিষয়ে কন্টেইনার রানটাইম পরিচালনা আয়ত্ত করুন। ক্রিয়েট থেকে রিমুভ পর্যন্ত জীবনচক্র এবং পর্যবেক্ষণ টুলস পর্যালোচনা করা হয়। এখানে লিনাক্সে PID 1 এর সিগন্যাল ব্যবস্থাপনা, স্টপ ও কিলের পার্থক্য, জম্বি প্রসেস সাফ, এক্সিট কোড ডিকোড এবং রিস্টার্ট পলিসি বিশদভাবে তুলে ধরা হয়েছে।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-volume-economy',
    tech: 'docker',
    title: {
      en: 'The Volume Economy: Persistent Storage, Bind Mounts & Volume Drivers',
      bn: 'ভলিউম অর্থনীতি: পারসিস্টেন্ট স্টোরেজ, বাইন্ড মাউন্ট ও ভলিউম ড্রাইভার'
    }
  },
  blocks: [
    {
      type: 'diagram',
      id: 'runtime-lifecycle-diagram',
      title: {
        en: 'Container Runtime Lifecycle & Signal Processing Architecture',
        bn: 'কন্টেইনার রানটাইম জীবনচক্র ও সিগন্যাল প্রসেসিং আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <defs>
    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#065f46" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#881337" />
      <stop offset="100%" stop-color="#4c0519" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="380" rx="12" fill="#0b1120" stroke="#334155" stroke-width="1.5"/>

  <!-- Top Title Bar -->
  <text x="400" y="32" fill="#f8fafc" font-size="16" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Docker Container Runtime State Machine &amp; Linux Signals</text>

  <!-- State 1: Created -->
  <rect x="30" y="70" width="130" height="70" rx="8" fill="url(#boxGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="95" y="98" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">CREATED</text>
  <text x="95" y="122" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">docker create</text>

  <!-- State 2: Running -->
  <rect x="230" y="70" width="150" height="70" rx="8" fill="url(#greenGrad)" stroke="#10b981" stroke-width="2"/>
  <text x="305" y="98" fill="#34d399" font-size="15" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">RUNNING (PID 1)</text>
  <text x="305" y="122" fill="#a7f3d0" font-size="11" text-anchor="middle" font-family="monospace">docker start / run</text>

  <!-- State 3: Paused -->
  <rect x="230" y="210" width="150" height="60" rx="8" fill="url(#boxGrad)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="305" y="236" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">PAUSED (cgroups)</text>
  <text x="305" y="254" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="monospace">docker pause / unpause</text>

  <!-- Transition 1 -> 2 -->
  <line x1="160" y1="105" x2="222" y2="105" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Transition 2 <-> 3 -->
  <line x1="280" y1="140" x2="280" y2="202" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)" />
  <line x1="330" y1="202" x2="330" y2="148" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrow)" />

  <!-- State 4: Stopped (SIGTERM) -->
  <rect x="460" y="70" width="150" height="70" rx="8" fill="url(#boxGrad)" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="535" y="96" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">STOPPED</text>
  <text x="535" y="115" fill="#38bdf8" font-size="11" text-anchor="middle" font-family="monospace">SIGTERM (Exit 143)</text>
  <text x="535" y="130" fill="#64748b" font-size="10" text-anchor="middle" font-family="monospace">10s Grace Period</text>

  <!-- Transition 2 -> 4 -->
  <line x1="380" y1="105" x2="452" y2="105" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- State 5: Killed (SIGKILL) -->
  <rect x="460" y="205" width="150" height="70" rx="8" fill="url(#redGrad)" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="535" y="230" fill="#fda4af" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">KILLED</text>
  <text x="535" y="248" fill="#fb7185" font-size="11" text-anchor="middle" font-family="monospace">SIGKILL (Exit 137)</text>
  <text x="535" y="264" fill="#fda4af" font-size="10" text-anchor="middle" font-family="monospace">OOM / docker kill</text>

  <!-- Transition 2 -> 5 (Force / Timeout) -->
  <path d="M 360 140 L 410 240 L 452 240" fill="none" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- State 6: Removed -->
  <rect x="670" y="140" width="105" height="60" rx="8" fill="url(#boxGrad)" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="722" y="166" fill="#cbd5e1" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">REMOVED</text>
  <text x="722" y="184" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="monospace">docker rm</text>

  <!-- Transitions to Removed -->
  <line x1="610" y1="115" x2="662" y2="155" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
  <line x1="610" y1="230" x2="662" y2="185" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />

  <!-- Bottom Legend / Notes -->
  <rect x="30" y="300" width="745" height="60" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="50" y="322" fill="#38bdf8" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Linux Signal Math:</text>
  <text x="175" y="322" fill="#cbd5e1" font-size="11" font-family="monospace">Exit 128 + Signal_N (SIGTERM=15 -> 143, SIGKILL=9 -> 137)</text>
  <text x="50" y="344" fill="#34d399" font-size="11" font-weight="700" font-family="system-ui, sans-serif">PID 1 Supervision:</text>
  <text x="175" y="344" fill="#cbd5e1" font-size="11" font-family="monospace">Exec Form CMD ["node", "app.js"] forwards signals; --init (Tini) reaps orphan zombies.</text>
</svg>`,
      caption: {
        en: 'Container execution lifecycle showing states, signal paths (SIGTERM vs SIGKILL), and exit codes.',
        bn: 'কন্টেইনার রানটাইম জীবনচক্র: বিভিন্ন অবস্থা, সিগন্যাল প্রবাহ (SIGTERM বনাম SIGKILL) ও প্রস্থান কোড।'
      }
    },
    { type: 'heading', id: 'p1', text: { en: '1. The Container Lifecycle: Created, Running, Paused & Stopped', bn: '১. কন্টেইনার জীবনচক্র: Created, Running, Paused ও Stopped' } },
    {
      type: 'para',
      text: {
        en: 'A container transitions through well-defined lifecycle states: Created, Running, Paused, Stopped, and Removed. The "docker run" command combines two distinct actions: create writes the configuration metadata, while start forks the process into isolated namespaces. Calling pause freezes running threads via cgroups without shutting them down.',
        bn: 'একটি কন্টেইনার নির্দিষ্ট কতগুলো অবস্থার মধ্য দিয়ে পরিচালিত হয়: Created, Running, Paused, Stopped এবং Removed। "docker run" কমান্ডটি দুটি কাজ একসাথে সম্পন্ন করে: create কনফিগারেশন তৈরি করে এবং start প্রসেসটিকে আইসোলেটেড নেমস্পেসে চালু করে। pause প্রসেস বন্ধ না করে কার্নেল cgroups-এর মাধ্যমে সাময়িক স্থগিত করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Create container record without starting:
docker create --name web-app -p 8080:80 nginx:alpine

# 2. Boot container into running state:
docker start web-app

# 3. Pause all processes inside container:
docker pause web-app

# 4. Resume paused execution:
docker unpause web-app

# 5. Stop running container gracefully:
docker stop web-app

# 6. Delete container record and writable layer:
docker rm web-app`,
      caption: {
        en: 'Commands manage container state transitions from creation to final disk cleanup.',
        bn: 'কমান্ডগুলো কন্টেইনার তৈরি থেকে শুরু করে ডিস্ক অপসারণ পর্যন্ত অবস্থা রূপান্তর পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Execution Flags: Interactive (-it), Detached (-d) & Ephemeral (--rm)', bn: '২. এক্সিকিউশন ফ্ল্যাগ: ইন্টারঅ্যাক্টিভ (-it), ব্যাকগ্রাউন্ড (-d) ও ক্ষণস্থায়ী (--rm)' } },
    {
      type: 'para',
      text: {
        en: 'The execution flags supplied to "docker run" configure standard input and output streams. Flag "-i" keeps stdin open, "-t" allocates a pseudo-terminal for interactive shell sessions, and "-d" detaches the container to run as a background service daemon. Use "--rm" for temporary test containers that automatically self-destruct upon exit.',
        bn: '"docker run"-এর সাথে ব্যবহৃত ফ্ল্যাগগুলো ইনপুট/আউটপুট স্ট্রিম নির্ধারণ করে। "-i" ইনপুট চ্যানেল খোলা রাখে, "-t" একটি ইন্টারঅ্যাক্টিভ সিউডো-টার্মিনাল তৈরি করে এবং "-d" কন্টেইনারটিকে ব্যাকগ্রাউন্ডে ডিমন হিসেবে চালু রাখে। পরীক্ষামূলক কাজের জন্য "--rm" ব্যবহার করলে কন্টেইনার প্রস্থান করার সাথে সাথেই তা নিজে থেকেই মুছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Interactive disposable shell for quick exploration:
docker run --rm -it alpine:3.19 sh

# Detached background production service:
docker run -d --name cache-server -p 6379:6379 redis:7-alpine

# Verify running background container:
docker ps --filter "name=cache-server"
# Output shows container ID, image, port mapping, and running status`,
      caption: {
        en: 'Flags configure whether the container runs as an attached interactive terminal or detached daemon.',
        bn: 'ফ্ল্যাগগুলো ঠিক করে দেয় কন্টেইনারটি ইন্টারঅ্যাক্টিভ শেলের মতো চলবে নাকি ব্যাকগ্রাউন্ড সেবায় চলবে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Inspection and Observability: ps, inspect, logs & stats', bn: '৩. পর্যবেক্ষণ ও অবস্থা যাচাই: ps, inspect, logs ও stats' } },
    {
      type: 'para',
      text: {
        en: 'The platform provides built-in observability tools to inspect container state and resource consumption. The "docker ps -a" command lists all active and stopped workloads. Streaming logs with --tail 50 -f views stdout and stderr output. Use inspect to parse low-level JSON configurations, and stats to monitor real-time CPU and memory usage.',
        bn: 'কন্টেইনারের অবস্থা ও রিসোর্স পর্যবেক্ষণের জন্য বেশ কিছু পর্যবেক্ষণ টুল রয়েছে। "docker ps -a" সব সক্রিয় ও স্থগিত কনটেইনারের তালিকা দেখায়। লগ দেখার জন্য logs --tail 50 -f ব্যবহার করে কনসোল আউটপুট সরাসরি পর্যবেক্ষণ করা যায়। কন্টেইনারের বিস্তারিত JSON তথ্যের জন্য inspect এবং রিয়েল-টাইম সিপিইউ ও র্যাম দেখতে stats কার্যকর।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Query detailed container state using Go formatting:
docker inspect -f '{{.State.Status}} (ExitCode: {{.State.ExitCode}})' cache-server
# Output: running (ExitCode: 0)

# 2. Inspect real-time CPU and RAM consumption:
docker stats --no-stream cache-server
# Output: CONTAINER ID | CPU % | MEM USAGE / LIMIT | MEM % | NET I/O`,
      caption: {
        en: 'Inspection commands extract precise operational metadata from the Docker daemon.',
        bn: 'ইন্সপেক্ট কমান্ডগুলো ডকার ডিমন থেকে কন্টেইনারের নিখুঁত রিয়েল-টাইম মেটাডেটা উদ্ধার করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The PID 1 Responsibility in Linux Namespaces', bn: '৪. Linux নেমস্পেসে PID 1 এর মৌলিক দায়িত্ব' } },
    {
      type: 'para',
      text: {
        en: 'Inside a Linux container, the main process is assigned Process ID 1 (PID 1). In the Linux kernel, PID 1 has unique responsibilities: it does not receive default signal handlers, meaning signals like SIGTERM are ignored unless explicit handlers are registered. Additionally, PID 1 must reap orphaned zombie child processes when parent sub-processes terminate.',
        bn: 'লিনাক্স কন্টেইনারের মূল প্রসেসটি PID 1 হিসেবে রান হয়। লিনাক্স কার্নেলে PID 1 এর বিশেষ দায়িত্ব থাকে: এর কোনো ডিফল্ট সিগন্যাল হ্যান্ডলার থাকে না, ফলে কোডে স্পষ্টভাবে SIGTERM হ্যান্ডলার না থাকলে কন্টেইনার সিগন্যাল অগ্রাহ্য করে। এছাড়াও কোনো সাব-প্রসেস হঠাৎ মারা গেলে এতিম জম্বি প্রসেসগুলোকে মেমরি থেকে সাফ করার দায়িত্বও PID 1 এর।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Node.js server explicitly listening for PID 1 termination signal:
import http from "http";

const server = http.createServer((req, res) => res.end("Service Online"));
server.listen(3000);

// Register explicit SIGTERM handler for container orchestrators:
process.on("SIGTERM", () => {
  console.log("SIGTERM received: Draining HTTP server cleanly...");
  server.close(() => {
    console.log("Server closed. Clean exit code 0.");
    process.exit(0);
  });
});`,
      caption: {
        en: 'Applications serving as PID 1 must attach explicit signal listeners to catch SIGTERM.',
        bn: 'PID 1 হিসেবে চালিত অ্যাপ্লিকেশনকে অবশ্যই স্পষ্ট লিসেনার দিয়ে SIGTERM রিসিভ করতে হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Shell Form vs Exec Form in CMD and ENTRYPOINT', bn: '৫. CMD ও ENTRYPOINT-এ Shell Form বনাম Exec Form' } },
    {
      type: 'para',
      text: {
        en: 'How you define CMD or ENTRYPOINT in your Dockerfile determines whether your application receives termination signals. Using shell syntax wraps execution inside /bin/sh as PID 1, trapping your child process so it never receives SIGTERM. In contrast, Exec Form (CMD ["node", "app.js"]) runs your executable directly, allowing graceful shutdown handlers to fire.',
        bn: 'Dockerfile-এ CMD বা ENTRYPOINT ঘোষণার পদ্ধতি সিগন্যাল পাওয়ার পথ নির্ধারণ করে। শেল সিনট্যাক্স ব্যবহার করলে কমান্ডটি /bin/sh দিয়ে আবৃত হয়, ফলে ভেতরের প্রক্রিয়া সরাসরি কার্নেল সিগন্যাল পায় না। বিপরীতে, Exec Form (CMD ["node", "app.js"]) প্রয়োগ করলে প্রোগ্রাম নিজেই সরাসরি PID 1 হয়ে সুশৃঙ্খল শাটডাউন নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'dockerfile',
      code: `# ❌ BAD: Shell Form - spawns /bin/sh as PID 1 (swallows signals):
# CMD node /app/server.js

# ✅ GOOD: Exec Form (JSON array) - runs node directly as PID 1:
CMD ["node", "/app/server.js"]

# When stopped, Exec Form terminates in <1 second vs 10 seconds timeout in Shell Form!`,
      caption: {
        en: 'Exec Form syntax runs the process directly as PID 1, ensuring signal delivery.',
        bn: 'Exec Form সিনট্যাক্স সরাসরি প্রসেসটিকে PID 1 বানিয়ে নিশ্চিতভাবে সিগন্যাল পৌঁছে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Graceful Stop vs Forceful Kill: docker stop vs kill', bn: '৬. গ্রেসফুল শাটডাউন বনাম ফোর্স কিল: docker stop বনাম kill' } },
    {
      type: 'para',
      text: {
        en: 'The "docker stop" command initiates a graceful shutdown sequence: it sends SIGTERM to PID 1, allows a 10-second grace period (configurable via -t), and only sends SIGKILL if the process fails to exit. In contrast, "docker kill" instantly sends SIGKILL to terminate the container immediately without flushing disk buffers.',
        bn: '"docker stop" একটি সুশৃঙ্খল শাটডাউন প্রক্রিয়া চালায়: এটি PID 1 কে প্রথমে SIGTERM পাঠায়, দশ সেকেন্ড সময় দেয় (-t দিয়ে পরিবর্তনযোগ্য), এবং শেষ না হলে SIGKILL দিয়ে প্রসেস বন্ধ করে। অন্যদিকে "docker kill" সরাসরি নির্দয়ভাবে SIGKILL পাঠায়, যা কোনো কাজ সম্পূর্ণ করার সুযোগ না দিয়েই সাথে সাথে বন্ধ করে দেয়।',
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Graceful stop with custom 5-second timeout window:
docker stop -t 5 web-app
# PID 1 receives SIGTERM -> drains requests -> exits cleanly with code 143

# Immediate forceful termination (bypasses application cleanup):
docker kill web-app
# Kernel sends SIGKILL -> process murdered immediately with exit code 137`,
      caption: {
        en: 'docker stop allows in-flight requests to complete; docker kill forces immediate termination.',
        bn: 'docker stop চলমান কাজ শেষ করতে সুযোগ দেয়; docker kill তৎক্ষণাৎ জোরপূর্বক বন্ধ করে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Rescuing Signal Handling and Zombies with --init', bn: '৭. --init দিয়ে সিগন্যাল হ্যান্ডলিং ও জম্বি প্রসেস সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'If your containerized application cannot easily manage PID 1 duties (e.g. running complex legacy scripts or multi-process tools), use the "--init" flag when running the container. Docker embeds a lightweight, battle-tested init process (Tini) as PID 1, which reliably forwards signals to child processes and reaps orphaned zombies.',
        bn: 'আপনার অ্যাপ যদি সহজে PID 1 এর জটিল দায়িত্ব পালন করতে না পারে (যেমন কোনো পুরনো স্ক্রিপ্ট বা একাধিক প্রসেস), তবে রান করার সময় "--init" ফ্ল্যাগ ব্যবহার করুন। ডকার তখন হালকা ও শক্তিশালী "Tini" ইনিট প্রসেসকে PID 1 বানিয়ে দেয়, যা শিশুদের মাঝে সিগন্যাল পৌঁছে দেয় এবং মৃত জম্বি প্রসেসগুলোকে মেমরি থেকে সাফ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Run container with built-in Tini init system:
docker run -d --name legacy-tool --init my-batch-processor:v1

# Tini becomes PID 1 inside container:
docker exec legacy-tool ps aux
# PID 1: /sbin/docker-init
# PID 7: python run_tasks.py (properly receives forwarded SIGTERM!)`,
      caption: {
        en: 'The --init flag injects a lightweight init daemon to handle signal routing and process reaping.',
        bn: '--init ফ্ল্যাগ একটি হালকা ইনিট ডিমন যোগ করে সিগন্যাল ফরোয়ার্ডিং ও জম্বি ক্লিয়ারিং নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Decoding Container Exit Codes: 0, 1, 137 & 143', bn: '৮. কন্টেইনার এক্সিট কোড ডিকোড: 0, 1, 137 ও 143' } },
    {
      type: 'para',
      text: {
        en: 'When a container terminates, its exit code reveals the exact cause of death. Exit Code 0 indicates normal completion, while Exit Code 1 signals an uncaught application error. Codes above 128 reflect operating system signals: Exit Code 137 indicates SIGKILL (128 + 9) from OOM or forceful kill, whereas Exit Code 143 indicates graceful exit via SIGTERM (128 + 15).',
        bn: 'কন্টেইনার বন্ধ হলে প্রস্থান কোড দেখে কারণ নির্ণয় করা যায়। Exit Code 0 মানে সফল সমাপ্তি, আর Exit Code 1 নির্দেশ করে অ্যাপের আনহ্যান্ডেল্ড ত্রুটি। ১২৮ এর ওপরের কোডগুলো ওএস সিগন্যাল প্রকাশ করে: Exit Code 137 হলো SIGKILL (128 + 9) যা র্যাম সংকট বা জোরপূর্বক বন্ধে ঘটে, আর Exit Code 143 প্রকাশ করে SIGTERM (128 + 15) দিয়ে শান্ত সমাপ্তি।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard Linux signal formula: 128 + Signal Number
# Signal 9  (SIGKILL) -> Exit Code 137 (128 + 9)
# Signal 15 (SIGTERM) -> Exit Code 143 (128 + 15)

# Checking if container died due to Out-Of-Memory (OOM) killer:
docker inspect -f 'OOMKilled={{.State.OOMKilled}}, ExitCode={{.State.ExitCode}}' web-app
# Output: OOMKilled=false, ExitCode=143`,
      caption: {
        en: 'Exit codes greater than 128 communicate which operating system signal terminated the process.',
        bn: '১২৮ এর বেশি প্রস্থান কোড নির্দেশ করে কোন সিস্টেম সিগন্যাল দ্বারা প্রসেসটি বন্ধ করা হয়েছে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Container Restart Policies: always, unless-stopped & on-failure', bn: '৯. কন্টেইনার রিস্টার্ট পলিসি: always, unless-stopped ও on-failure' } },
    {
      type: 'para',
      text: {
        en: 'The "--restart" flag establishes the supervision policy for unexpected exits. Setting "no" leaves the container stopped. Option "always" restarts the container whenever it exits or the daemon reboots. Option "unless-stopped" maintains execution unless manually halted. Option "on-failure" restarts only after non-zero exit codes.',
        bn: '"--restart" ফ্ল্যাগ কন্টেইনারের জন্য রিস্টার্ট নীতি নির্ধারণ করে। "no" দিলে কন্টেইনার নিজে বন্ধই থাকে। "always" পলিসি ক্র্যাশ বা ডিমন রিবুট হলেও পুনরায় চালু করে। "unless-stopped" ব্যবহারকারী নিজে না থামানো পর্যন্ত চলতে থাকে। "on-failure" কেবল এরর কোডে প্রস্থান করলে পুনরায় চালু করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Production web server that recovers from crashes and system reboots:
docker run -d --name prod-api --restart unless-stopped -p 3000:3000 my-api:latest

# Worker queue container limited to 5 restart attempts on failure:
docker run -d --name queue-worker --restart on-failure:5 worker-image:v2

# Inspect restart count:
docker inspect -f 'RestartCount={{.RestartCount}}' queue-worker`,
      caption: {
        en: 'Restart policies ensure critical services recover automatically from unexpected host reboots.',
        bn: 'রিস্টার্ট পলিসি নিশ্চিত করে অপ্রত্যাশিত রিবুট বা ক্র্যাশ হলেও সার্ভিস নিজে থেকেই সচল হয়ে যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Safe Live Diagnostics: docker exec vs Mutable Patching', bn: '১০. লাইভ ডিবাগিং: docker exec বনাম কন্টেইনার প্যাচিং' } },
    {
      type: 'para',
      text: {
        en: 'The command "docker exec -it <container> sh" forks a new process into the container existing namespaces without stopping the service. Use exec strictly for read-only inspection (checking network connectivity, reading logs, verifying environment variables). Never edit source files inside live containers; immutable infrastructure requires building a new image.',
        bn: '"docker exec -it <কন্টেইনার> sh" কমান্ড চলমান সার্ভিস বন্ধ না করেই কন্টেইনারের ভেতর নতুন একটি শেল প্রসেস চালু করে। এটি শুধুমাত্র পর্যবেক্ষণ ও পরীক্ষার জন্য ব্যবহার করা উচিত (যেমন নেটওয়ার্ক চেক বা লগ দেখা)। জীবন্ত কন্টেইনারের ভেতর কোড বা কনফিগ এডিট করা মারাত্মক ক্ষতিকর; কোনো পরিবর্তন আনতে হলে নতুন ইমেজ তৈরি করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Safe diagnostic session: Inspect internal database connection:
docker exec -it prod-api nc -zv postgres-db 5432
# Output: postgres-db (172.18.0.3:5432) open

# Check running environment variables inside container:
docker exec prod-api env | grep NODE_ENV
# Output: NODE_ENV=production

# REMEMBER: Containers are ephemeral cattle, not pet servers.
# Never edit files inside writable layers!`,
      caption: {
        en: 'docker exec enables non-destructive diagnosis while maintaining container immutability.',
        bn: 'docker exec কন্টেইনারের অপরিবর্তনীয়তা বজায় রেখেই কোনো ক্ষতি ছাড়া ভেতর থেকে পর্যবেক্ষণ করতে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'doc-run-ex1',
      kind: 'predict',
      topic: 'docker: ephemeral container flag',
      question: {
        en: 'Which docker run command-line flag automatically removes and cleans up the container filesystem when it exits?',
        bn: 'কোন docker run কমান্ড ফ্ল্যাগটি কন্টেইনার প্রস্থান করার সাথে সাথেই তা স্বয়ংক্রিয়ভাবে মুছে ফেলে?'
      },
      code: `/* Run disposable container that cleans itself up on exit */
/* docker run ____________ -it alpine sh */`,
      answer: '--rm',
      accept: ['--rm', 'rm'],
      hint: {
        en: 'Double dash rm.',
        bn: 'ডাবল ড্যাশ rm।'
      },
      explanation: {
        en: 'The --rm flag instructs Docker to automatically remove the container and its anonymous volumes when it terminates.',
        bn: '--rm ফ্ল্যাগ ব্যবহারের ফলে কন্টেইনার বন্ধ হওয়া মাত্রই তা নিজে থেকেই ডিস্ক থেকে মুছে যায়।'
      }
    },
    {
      id: 'doc-run-ex2',
      kind: 'mcq',
      topic: 'docker: exit code 137 meaning',
      question: {
        en: 'A Docker container exits with Exit Code 137 — what does this code specifically indicate?',
        bn: 'একটি Docker কন্টেইনার Exit Code 137 দিয়ে বন্ধ হয়ে গেছে। এই কোডটি কী নির্দেশ করে?'
      },
      options: [
        { en: 'The process was terminated abruptly by SIGKILL (Signal 9, calculated as 128 + 9), frequently due to Out-Of-Memory (OOM) kills', bn: 'প্রসেসটি SIGKILL (সিগন্যাল ৯, ১২৮ + ৯) দিয়ে বন্ধ করা হয়েছে, যা মূলত র্যাম সংকট (OOM) বা docker kill-এর কারণে ঘটে' },
        { en: 'The application finished all calculations successfully', bn: 'অ্যাপ্লিকেশন সফলভাবে সব হিসাব শেষ করেছে' },
        { en: 'Port 80 is blocked by firewall', bn: 'পোর্ট ৮০ ফায়ারওয়ালে ব্লকড' },
        { en: 'The Dockerfile syntax has an error', bn: 'Dockerfile সিনট্যাক্সে ভুল আছে' }
      ],
      answer: 0,
      hint: {
        en: '128 + 9 = 137 (SIGKILL).',
        bn: '১২৮ + ৯ = ১৩৭ (SIGKILL)।'
      },
      explanation: {
        en: 'In Linux, exit codes above 128 represent 128 + signal number. Exit code 137 corresponds to signal 9 (SIGKILL), usually caused by OOM or docker kill.',
        bn: 'লিনাক্সে ১২৮ এর ওপরের কোড সিগন্যাল নম্বর নির্দেশ করে। ১৩৭ মানে সিগন্যাল ৯ (SIGKILL), যা সাধারণত র্যাম সংকটে ঘটে।'
      }
    },
    {
      id: 'doc-run-ex3',
      kind: 'mcq',
      topic: 'docker: Exec Form for PID 1 signal delivery',
      question: {
        en: 'Why should you declare CMD using Exec Form (CMD ["node", "app.js"]) instead of Shell Form (CMD node app.js)?',
        bn: 'কেন CMD-তে Shell Form-এর বদলে সর্বদা Exec Form (CMD ["node", "app.js"]) ব্যবহার করা উচিত?'
      },
      options: [
        { en: 'Exec Form runs the application directly as PID 1, allowing it to receive termination signals (SIGTERM) directly', bn: 'Exec Form অ্যাপ্লিকেশনকে সরাসরি PID 1 হিসেবে চালায়, ফলে এটি সরাসরি শাটডাউন সিগন্যাল (SIGTERM) পেতে পারে' },
        { en: 'Because Shell Form makes images 10 times larger', bn: 'কারণ Shell Form ইমেজ সাইজ ১০ গুণ বাড়িয়ে দেয়' },
        { en: 'Because Exec Form encrypts the source code', bn: 'কারণ Exec Form কোড এনক্রিপ্ট করে' },
        { en: 'Exec Form allows using Windows files on Linux', bn: 'এটি উইন্ডোজ ফাইল লিনাক্সে চালায়' }
      ],
      answer: 0,
      hint: {
        en: 'Runs process directly as PID 1',
        bn: 'সরাসরি PID 1 হিসেবে রান করে'
      },
      explanation: {
        en: 'Shell Form wraps execution inside /bin/sh -c as PID 1, which blocks signals from reaching the child process and delays shutdown.',
        bn: 'Shell Form মূলত /bin/sh-কে PID 1 বানিয়ে দেয় যা সিগন্যাল আটকে রাখে, কিন্তু Exec Form সরাসরি অ্যাপকে PID 1 বানায়।'
      }
    }
  ],
  quiz: {
    id: 'doc-run-quiz',
    title: { en: 'Docker Runtime Lifecycle & Process Quiz', bn: 'Docker রানটাইম জীবনচক্র ও প্রসেস কুইজ' },
    questions: [
      {
        id: 'drq1',
        kind: 'mcq',
        topic: 'docker: stop vs kill mechanism',
        question: {
          en: 'What is the operational difference between "docker stop my-container" and "docker kill my-container"?',
          bn: '"docker stop my-container" এবং "docker kill my-container"-এর মধ্যে প্রায়োগিক পার্থক্য কী?'
        },
        options: [
          { en: 'docker stop sends SIGTERM and waits for a grace timeout before force-killing; docker kill immediately sends SIGKILL', bn: 'docker stop প্রথমে SIGTERM পাঠায় এবং নির্দিষ্ট সময় অপেক্ষা করে; docker kill সাথে সাথে জোরপূর্বক SIGKILL পাঠায়' },
          { en: 'docker stop deletes the container image; docker kill keeps it', bn: 'docker stop ইমেজ মুছে ফেলে' },
          { en: 'docker kill works only when disconnected from internet', bn: 'docker kill শুধু অফলাইনে কাজ করে' },
          { en: 'There is no difference; they are aliases', bn: 'কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'SIGTERM with timeout vs immediate SIGKILL.',
          bn: 'টাইমআউটসহ SIGTERM বনাম সরাসরি SIGKILL।'
        },
        explanation: {
          en: 'docker stop allows the application to finish active requests and shut down cleanly. docker kill terminates the process instantly without warning.',
          bn: 'docker stop প্রসেসকে কাজ গুটিয়ে বন্ধ হতে সুযোগ দেয়, আর docker kill কোনো সুযোগ না দিয়ে তৎক্ষণাৎ বন্ধ করে দেয়।'
        }
      },
      {
        id: 'drq2',
        kind: 'mcq',
        topic: 'docker: --init flag benefit',
        question: {
          en: 'What problem does passing the "--init" flag solve when running a Docker container?',
          bn: 'Docker কন্টেইনার চালানোর সময় "--init" ফ্ল্যাগ ব্যবহার করলে কোন সমস্যাটির সমাধান হয়?'
        },
        options: [
          { en: 'It inserts a lightweight init system (Tini) as PID 1 to properly forward signals and reap zombie child processes', bn: 'এটি হালকা ইনিট সিস্টেম (Tini)-কে PID 1 বানিয়ে সিগন্যাল ফরোয়ার্ড করে এবং এতিম জম্বি প্রসেস সাফ করে' },
          { en: 'It initializes a new Git repository inside the container', bn: 'কন্টেইনারের ভেতর নতুন গিট রিপোজিটরি তৈরি করে' },
          { en: 'It increases container memory limits by 200%', bn: 'মেমরি লিমিট ২০০% বাড়িয়ে দেয়' },
          { en: 'It installs Node.js automatically', bn: 'স্বয়ংক্রিয়ভাবে Node.js ইনস্টল করে' }
        ],
        answer: 0,
        hint: {
          en: 'Tini init process forwards signals and reaps zombies.',
          bn: 'Tini ইনিট প্রসেস সিগন্যাল পৌঁছে দেয় ও জম্বি সাফ করে।'
        },
        explanation: {
          en: 'The --init flag runs Tini as PID 1, which correctly reaps dead child processes and routes SIGTERM to applications that lack init capabilities.',
          bn: '--init ফ্ল্যাগ Tini-কে PID 1 হিসেবে যুক্ত করে জম্বি প্রসেস তৈরি হওয়া আটকে দেয় এবং সিগন্যাল হ্যান্ডলিং নিশ্চিত করে।'
        }
      },
      {
        id: 'drq3',
        kind: 'mcq',
        topic: 'docker: restart policies',
        question: {
          en: 'Which restart policy restarts the container during crash or host reboot, unless a human operator manually stopped it?',
          bn: 'কোন রিস্টার্ট পলিসিটি ক্র্যাশ বা হোস্ট রিবুটের সময় কন্টেইনার চালু করে, যদি না অপারেটর নিজে তা থামিয়ে থাকে?'
        },
        options: [
          { en: 'unless-stopped', bn: 'unless-stopped' },
          { en: 'always', bn: 'always' },
          { en: 'on-failure', bn: 'on-failure' },
          { en: 'no', bn: 'no' }
        ],
        answer: 0,
        hint: {
          en: 'Restarts unless explicitly stopped.',
          bn: 'নিজে থেকে না থামালে চালু রাখে।'
        },
        explanation: {
          en: 'The unless-stopped policy guarantees that stopped containers remain stopped on daemon reboot, but running containers recover automatically.',
          bn: 'unless-stopped পলিসি নিশ্চিত করে যে ব্যবহারকারী নিজে স্টপ না করা পর্যন্ত রিবুটের পর এটি স্বয়ংক্রিয়ভাবে পুনরায় চালু হবে।'
        }
      },
      {
        id: 'drq4',
        kind: 'mcq',
        topic: 'docker: exit code calculation',
        question: {
          en: 'A containerized service terminated with exit code 143 — which Linux signal caused this exit?',
          bn: 'একটি কন্টেইনারাইজড সার্ভিস প্রস্থান কোড 143 দিয়ে বন্ধ হয়েছে। কোন লিনাক্স সিগন্যালের কারণে এটি ঘটেছে?'
        },
        options: [
          { en: 'SIGTERM (Signal 15, calculated as 128 + 15)', bn: 'SIGTERM (সিগন্যাল ১৫, ১২৮ + ১৫ হিসেবে নির্ণীত)' },
          { en: 'SIGKILL (Signal 9, calculated as 128 + 9)', bn: 'SIGKILL (সিগন্যাল ৯, ১২৮ + ৯ হিসেবে নির্ণীত)' },
          { en: 'SIGHUP (Signal 1)', bn: 'SIGHUP (সিগন্যাল ১)' },
          { en: 'SIGINT (Signal 2)', bn: 'SIGINT (সিগন্যাল ২)' }
        ],
        answer: 0,
        hint: {
          en: '143 - 128 = 15 (SIGTERM).',
          bn: '১৪৩ - ১২৮ = ১৫ (SIGTERM)।'
        },
        explanation: {
          en: 'Exit code 143 represents 128 + 15, which corresponds to graceful termination initiated by SIGTERM.',
          bn: 'প্রস্থান কোড ১৪৩ হলো ১২৮ + ১৫, যা SIGTERM দ্বারা সুশৃঙ্খল শাটডাউন নির্দেশ করে।'
        }
      }
    ]
  }
};
