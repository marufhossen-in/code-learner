import type { Hub } from '../../lib/types';
import { containerThinkingLesson } from './lessons/container-thinking';
import { dockerfileMasteryLesson } from './lessons/dockerfile-mastery';
import { layerLedgerLesson } from './lessons/the-layer-ledger';
import { runtimeRegisterLesson } from './lessons/the-runtime-register';
import { volumeEconomyLesson } from './lessons/the-volume-economy';
import { networkBridgesLesson } from './lessons/the-network-bridges';
import { composeLedgerLesson } from './lessons/the-compose-ledger';
import { hardenedManifestLesson } from './lessons/the-hardened-manifest';

export const dockerHub: Hub = {
  slug: 'docker',
  name: 'Docker',
  icon: '🐳',
  tagline: {
    en: 'Ship the machine with the app: layers, blinders, budgets — one frozen filesystem at a time.',
    bn: 'অ্যাপের সাথেই যন্ত্র পাঠান: লেয়ার, অন্ধপট্টি, বাজেট — এক হিমায়িত ফাইলসিস্টেম একবারে।',
  },
  about: {
    en: 'Docker is not virtualization; it is isolation-as-a-library — your process wearing kernel-managed blinders (namespaces) and a budget (cgroups), reading from a stack of shared filesystem layers. This hub teaches the image/layer/container triangle until the build cache stops being magic and starts being a contract you choreograph: instructions ordered rarely-changing-first, manifests before sources, multi-stage builds that ship runtimes without toolchains, non-root users before CMD. Every lesson runs inside the Docker Lab, where you edit Dockerfiles line by line and watch layers stamp, caches hit and miss, and the final process tree form with its PID 1 responsibilities. The result is the jump from “docker run works” to “my images are small, cacheable, signal-correct and root-free”.',
    bn: 'Docker ভার্চুয়ালাইজেশন নয়; এটি লাইব্রেরি-রূপী বিচ্ছিন্নতা — আপনার প্রসেস পরেছে কার্নেল-চালিত অন্ধপট্টি (namespace) আর বাজেট (cgroup), পড়ছে ভাগাকৃত ফাইলসিস্টেম-লেয়ারের স্তূপ। এই হাব ইমেজ/লেয়ার/কন্টেইনার ত্রিভুজ এতই শেখায় যে বিল্ড-ক্যাশ জাদু থেকে বেরিয়ে চুক্তিতে দাঁড়ায়, যা আপনি কোরিওগ্রাফি করেন: কদাচিৎ-বদলানো-আগে ক্রমে নির্দেশনা, সোর্সের আগে ম্যানিফেস্ট, রানটাইম-পাঠায়-টুলচেন-নয় এমন মাল্টি-স্টেজ বিল্ড, CMD-এর আগে অ-রুট ব্যবহারকারী। প্রতি লেসন চলে Docker Lab-এর ভেতর — লাইন ধরে Dockerfile বদলে দেখুন লেয়ার ছাপ ফেলছে, ক্যাশ হিট-মিস করছে, আর চূড়ান্ত প্রসেস-বৃক্ষ তার PID 1 দায়িত্ব নিয়ে গঠিত হচ্ছে। ফল হলো “docker run কাজ করে” থেকে “আমার ইমেজ ছোট, ক্যাশযোগ্য, সিগন্যাল-সঠিক আর রুটমুক্ত”-এর লাফ।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The illusion', bn: 'ধাপ ১ — ভ্রম' },
      items: [
        { en: 'Container = process + namespaces + cgroups (lesson 1)', bn: 'কন্টেইনার = প্রসেস + namespace + cgroup (লেসন ১)' },
        { en: 'Image layers, union filesystem, copy-on-write', bn: 'ইমেজ-লেয়ার, ইউনিয়ন ফাইলসিস্টেম, copy-on-write' },
        { en: 'Why a container is NOT a small VM', bn: 'কন্টেইনার কেন ছোট VM নয়' },
      ],
    },
    {
      title: { en: 'Stage 2 — The cache contract', bn: 'ধাপ ২ — ক্যাশ-চুক্তি' },
      items: [
        { en: 'Instruction = immutable, content-addressed layer (lesson 1)', bn: 'নির্দেশনা = অপরিবর্তনীয়, কনটেন্ট-ঠিকানাযুক্ত লেয়ার (লেসন ১)' },
        { en: 'Invalidation flows downward; order for stability', bn: 'অবৈধকরণ নিচমুখে প্রবাহিত; স্থিতির জন্য ক্রম' },
        { en: '.dockerignore: what never enters the context', bn: '.dockerignore: যা কনটেক্সটে ঢোকেই না' },
      ],
    },
    {
      title: { en: 'Stage 3 — The craft', bn: 'ধাপ ৩ — কারিগরি' },
      items: [
        { en: 'COPY vs ADD, CMD vs ENTRYPOINT, ENV vs ARG (lesson 2)', bn: 'COPY বনাম ADD, CMD বনাম ENTRYPOINT, ENV বনাম ARG (লেসন ২)' },
        { en: 'Multi-stage: ship stage two only', bn: 'মাল্টি-স্টেজ: পাঠান কেবল দ্বিতীয় স্টেজ' },
        { en: 'exec-form, PID 1 and graceful shutdown (SIGTERM paths)', bn: 'exec-রূপ, PID 1 আর মার্জিত শাটডাউন (SIGTERM পথ)' },
      ],
    },
    {
      title: { en: 'Stage 4 — The fleet', bn: 'ধাপ ৪ — বহর' },
      items: [
        { en: 'Registries, tags and immutable deployment artifacts', bn: 'রেজিস্ট্রি, ট্যাগ আর অপরিবর্তনীয় ডিপ্লয়মেন্ট-আর্টিফ্যাক্ট' },
        { en: 'docker-compose for local multi-service dev', bn: 'স্থানীয় বহু-সার্ভিস ডেভের জন্য docker-compose' },
        { en: 'Toward Kubernetes: the pod as a scheduled namespaced process', bn: 'Kubernetes-এর পথে: সময়সূচিবদ্ধ নেমস্পেস-প্রসেস হিসেবে পড' },
      ],
    },
  ],
  lessons: [
    containerThinkingLesson,
    dockerfileMasteryLesson,
    layerLedgerLesson,
    runtimeRegisterLesson,
    volumeEconomyLesson,
    networkBridgesLesson,
    composeLedgerLesson,
    hardenedManifestLesson,
  ],
  reference: [
    {
      group: 'Image building',
      methods: [
        {
          name: 'FROM … AS',
          signature: 'FROM image:tag [AS stage-name]',
          params: { en: 'Seeds a new layer stack; stage names enable multi-stage COPY --from=…', bn: 'নতুন লেয়ার-স্তূপের বীজ বোনে; স্টেজ-নাম মাল্টি-স্টেজ COPY --from=… চালু করে।' },
          returns: { en: 'A base stack: its layers pull once, cache forever, and share across images.', bn: 'একটি বেস-স্তূপ: লেয়ার একবার টানা, চিরকাল ক্যাশ, ইমেজজুড়ে ভাগাকৃত।' },
          example: 'FROM node:20-alpine AS runtime   # ছোট, musl-ভিত্তিক, উৎপাদন-বান্ধব',
        },
        {
          name: 'COPY / ADD',
          signature: 'COPY src dest  |  ADD src dest (auto-extract, URL)',
          params: { en: 'COPY moves host files plainly; ADD adds latent magic — extraction and remote fetch.', bn: 'COPY সরলভাবে হোস্ট-ফাইল সরায়; ADD লুকায় জাদু — খোলা আর দূরবর্তী আনয়ন।' },
          returns: { en: 'One layer per call; file mtimes/content drive cache validity.', bn: 'কলপ্রতি একটি লেয়ার; ফাইলের mtime/কনটেন্ট ঠিক করে ক্যাশ-বৈধতা।' },
          example: 'COPY package*.json ./   # ম্যানিফেস্ট আগে, সোর্স পরে — ক্যাশ-চুক্তি',
        },
        {
          name: 'RUN',
          signature: 'RUN command && command',
          params: { en: 'Executes AT BUILD TIME inside the assembling image; && chains keep one layer honest.', bn: 'নির্মাণরত ইমেজের ভেতরে বিল্ড-টাইমে চলে; && শৃঙ্খল এক লেয়ার সৎ রাখে।' },
          returns: { en: 'A permanent filesystem diff — the layer production line.', bn: 'স্থায়ী ফাইলসিস্টেম-diff — লেয়ার-উৎপাদনলাইন।' },
          example: 'RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*',
        },
      ],
    },
    {
      group: 'Runtime contract',
      methods: [
        {
          name: 'CMD / ENTRYPOINT',
          signature: 'CMD ["executable", "arg"]  &  ENTRYPOINT ["fixed-binary"]',
          params: { en: 'CMD = overridable default; ENTRYPOINT = fixed command that receives appended args.', bn: 'CMD = উজুরযোগ্য ডিফল্ট; ENTRYPOINT = স্থির কমান্ড যা তলে তলে আর্গুমেন্ট পায়।' },
          returns: { en: 'The image’s interface: how a container starts receiving work.', bn: 'ইমেজের ইন্টারফেস: কন্টেইনার কীভাবে কাজ গ্রহণ শুরু করে।' },
          example: 'ENTRYPOINT ["node"] + CMD ["server.js"]  # docker run img debug.js → node debug.js',
        },
        {
          name: 'ENV / ARG',
          signature: 'ENV KEY=value  |  ARG KEY=default',
          params: { en: 'ENV ships to every container and shows in inspect; ARG is build-scoped and evaporates.', bn: 'ENV প্রতি কন্টেইনারে ভ্রমণ করে, inspect-এ দেখা যায়; ARG বিল্ড-সীমাবদ্ধ, বাষ্পে মেশে।' },
          returns: { en: 'Runtime constants vs build-time knobs. Secrets: neither — use a manager.', bn: 'রানটাইম-ধ্রুবক বনাম বিল্ড-টাইম নব। সিক্রেট: কোনোটিই নয় — ম্যানেজার ব্যবহার করুন।' },
          example: 'ARG NPM_REGISTRY=https://registry.npmjs.org  ও  ENV NODE_ENV=production',
        },
        {
          name: 'EXPOSE / USER',
          signature: 'EXPOSE 3000  |  USER node',
          params: { en: 'EXPOSE documents the port (does not publish); USER drops from root before CMD.', bn: 'EXPOSE পোর্ট দলিলায়িত করে (প্রকাশ করে না); USER CMD-এর আগে রুট থেকে নামায়।' },
          returns: { en: 'Documentation + blast-radius reduction: two one-line contracts.', bn: 'দলিলায়ন + বিস্ফোরণ-ব্যাসার্ধ-সংকোচন: দুটি এক-লাইনের চুক্তি।' },
          example: 'EXPOSE 3000\nUSER node',
        },
      ],
    },
    {
      group: 'CLI & state',
      methods: [
        {
          name: 'docker run',
          signature: 'docker run -p HOST:CONTAINER -v vol:/data --init image',
          params: { en: '-p pokes the deliberate hole; -v mounts durable state; --init adds a signal-safe PID 1.', bn: '-p ইচ্ছাকৃত ছিদ্র করে; -v টেকসই-স্টেট মাউন্ট করে; --init সিগন্যাল-নিরাপদ PID 1 যোগ করে।' },
          returns: { en: 'A running container: namespaced process + writable top layer + mounted truth.', bn: 'চলমান কন্টেইনার: নেমস্পেসড প্রসেস + লিখন-মুকুট + মাউন্টকৃত সত্য।' },
          example: 'docker run -d -p 8080:3000 -v pgdata:/var/lib/postgresql/data --init myapp:1.2',
        },
        {
          name: 'Volumes',
          signature: 'docker volume create name  →  -v name:/path',
          params: { en: 'Managed storage OUTSIDE the container lifecycle; survives rm and rebuilds.', bn: 'কন্টেইনার-জীবনচক্রের বাইরের পরিচালিত সংরক্ষণ; rm আর রিবিল্ড পেরিয়ে টিকে।' },
          returns: { en: 'Durability: the writable layer can die; the volume does not.', bn: 'স্থায়িত্ব: লিখন-লেয়ার মরতে পারে; ভলিউম মরে না।' },
          example: 'docker run -v pgdata:/var/lib/postgresql/data postgres:16',
        },
        {
          name: 'push / pull / tag',
          signature: 'docker tag app:1.2 reg/app:1.2 && docker push reg/app:1.2',
          params: { en: 'Registry-host/repo:tag; tags are pointers to manifests, manifest to layers.', bn: 'registry-হোস্ট/repo:tag; ট্যাগ ম্যানিফেস্টে পয়েন্টার, ম্যানিফেস্ট লেয়ারে।' },
          returns: { en: 'Only unknown layers travel the wire — shipped diffs, not shipped worlds.', bn: 'তারে যায় শুধু অচেনা লেয়ার — পাঠানো diff, পাঠানো জগৎ নয়।' },
          example: 'docker build -t myapp:1.2 . && docker push registry.example.com/myapp:1.2',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'The 12-Second Rebuild', bn: '১২ সেকেন্ডের রিবিল্ড' },
      diff: 'beginner',
      desc: {
        en: 'Take any toy Node app with a naive Dockerfile (COPY . . first). Use the Docker Lab and logs to reorder into manifests→install→sources. Deliverable: before/after timing proof — comment-only change rebuilds in under 15 seconds.',
        bn: 'সরল Dockerfile (প্রথমেই COPY . .) যুক্ত খেলনা Node অ্যাপ নিন। Docker Lab আর লগ ব্যবহার করে সাজান ম্যানিফেস্ট→ইনস্টল→সোর্স। ডেলিভারেবল: আগে/পরে সময়ের প্রমাণ — কেবল-কমেন্ট বদলে ১৫ সেকেন্ডের নিচে রিবিল্ড।',
      },
    },
    {
      title: { en: 'Stage-Two Diet', bn: 'দ্বিতীয়-স্টেজ ডায়েট' },
      diff: 'intermediate',
      desc: {
        en: 'Convert a fat single-stage Dockerfile into a multi-stage one: measure final image size, confirm the toolchain is absent (docker run img which gcc fails), add USER node, and photograph the layer stack shrinking in the lab.',
        bn: 'মোটা এক-স্টেজ Dockerfile মাল্টি-স্টেজে রূপান্তর করুন: ফাইনাল ইমেজ-আকার মাপুন, টুলচেন অনুপস্থিত নিশ্চিত করুন (docker run img which gcc ব্যর্থ হয়), USER node যোগ করুন, ল্যাবে সঙ্কুচিত লেয়ার-স্তূপের ছবি তুলুন।',
      },
    },
    {
      title: { en: 'Signal-Correct Service', bn: 'সিগন্যাল-সঠিক সার্ভিস' },
      diff: 'advanced',
      desc: {
        en: 'Instrument a service with graceful shutdown (close DB, drain HTTP). Prove with docker stop timing that shell form fails (10s) and exec form + --init succeeds (200 ms, handlers log). Write the postmortem: the one-line bracket change and its latency dividend.',
        bn: 'গ্রেসফুল-শাটডাউনযুক্ত সার্ভিস যন্ত্রিত করুন (DB বন্ধ, HTTP নিষ্কাশন)। docker stop টাইমিং দিয়ে প্রমাণ করুন শেল-রূপ ব্যর্থ (১০ সেকেন্ড) আর exec-রূপ + --init সফল (২০০ ms, হ্যান্ডলার লগ করে)। পোস্টমর্টেম লিখুন: যে এক-লাইনের বন্ধনী-পরিবর্তন আর তার ল্যাটেন্সি-লভ্যাংশ।',
      },
    },
  ],
  bestPractices: [
    { en: 'Order Dockerfiles for the cache: stable layers first, volatile layers last — always.', bn: 'ক্যাশের জন্য Dockerfile সাজান: স্থিতিশীল লেয়ার আগে, অস্থির শেষে — সবসময়।' },
    { en: 'COPY over ADD; exec-form over shell-form; stage two over stage one. Three defaults, zero discussion.', bn: 'ADD-এর বদলে COPY; শেল-রূপের বদলে exec-রূপ; প্রথম স্টেজের বদলে দ্বিতীয়। তিনটি ডিফল্ট, শূন্য বিতর্ক।' },
    { en: 'USER non-root + minimal base + read-only filesystem: the blast-radius trio in every production Dockerfile.', bn: 'অ-রুট USER + ন্যূনতম বেস + রিড-অনলি ফাইলসিস্টেম: প্রতি প্রোডাকশন Dockerfile-এ বিস্ফোরণ-ব্যাসার্ধ-ত্রয়ী।' },
    { en: 'Volumes own state; containers own compute. The writable layer is a scratchpad, never a filing cabinet.', bn: 'স্টেটের মালিক ভলিউম; হিসাবের মালিক কন্টেইনার। লিখন-লেয়ার রাফখাতা, ফাইলিং-ক্যাবিনেট নয়।' },
    { en: 'Keep .dockerignore strict: tests, .git, node_modules — the context is the build’s diet.', bn: '.dockerignore কড়া রাখুন: test, .git, node_modules — কনটেক্সট-ই বিল্ডের ডায়েট।' },
    { en: 'Pin base image digests in production (node:20-alpine@sha256:…) — supply-chain honesty beats convenience.', bn: 'প্রোডাকশনে বেস ইমেজ ডাইজেস্ট পিন করুন (node:20-alpine@sha256:…) — সাপ্লাই-চেইন সততা সুবিধাকে হারায়।' },
  ],
  interview: [
    {
      q: { en: 'Explain in 60 seconds why “a container is not a lightweight VM”.', bn: '৬০ সেকেন্ডে ব্যাখ্যা করুন কেন “কন্টেইনার হালকা VM নয়”।' },
      a: {
        en: 'A VM virtualizes HARDWARE: hypervisor emulates devices, a full guest kernel boots on top — minutes, gigabytes. A container virtualizes NOTHING: it is a host process with kernel-enforced blinders (namespaces for PID/mount/net), a budget (cgroups), and a union-mounted filesystem made of shared layers. Fork-time isolation vs boot-time virtualization — that is why containers start in milliseconds and share one kernel.',
        bn: 'VM ভার্চুয়ালাইজ করে হার্ডওয়্যার: হাইপারভাইজার ডিভাইস অনুকরণ করে, তার ওপর পুরো গেস্ট কার্নেল বুট হয় — মিনিট, গিগাবাইট। কন্টেইনার কিছুই ভার্চুয়ালাইজ করে না: এটি হোস্ট-প্রসেস যার কার্নেল-বলবৎ অন্ধপট্টি (PID/মাউন্ট/নেটের namespace), বাজেট (cgroup) আর ভাগাকৃত লেয়ারের ইউনিয়ন-মাউন্ট ফাইলসিস্টেম। ফোর্ক-সময়ের বিচ্ছিন্নতা বনাম বুট-সময়ের ভার্চুয়ালাইজেশন — তাই কন্টেইনার মিলিসেকেন্ডে চালু হয় আর একটি কার্নেল ভাগ করে।',
      },
    },
    {
      q: { en: 'How does the Docker build cache decide what to recompute?', bn: 'ডকার বিল্ড-ক্যাশ ঠিক করে কী পুনর্গণনা হবে, কীভাবে?' },
      a: {
        en: 'Each instruction yields an immutable, content-addressed layer keyed by its inputs (instruction text + files + args). On rebuild, Docker walks top-down; the FIRST instruction whose inputs changed invalidates itself and every layer below it — earlier layers replay from cache. That is why stable instructions go high, dependency manifests copy before sources, and comment-only edits rebuild in seconds.',
        bn: 'প্রতি নির্দেশনা জন্ম দেয় অপরিবর্তনীয়, কনটেন্ট-ঠিকানাযুক্ত লেয়ার — চাবি তার ইনপুট (নির্দেশনা-টেক্সট + ফাইল + আর্গ)। রিবিল্ডে Docker উপর থেকে হাঁটে; প্রথম পরিবর্তিত-ইনপুটের নির্দেশনা নিজেকে ও নিচের সব লেয়ার অবৈধ করে — আগের লেয়ার ক্যাশ থেকে ফিরে। তাই স্থিতিশীল নির্দেশনা উপরে, সোর্সের আগে ডিপেন্ডেন্সি-ম্যানিফেস্ট, আর কেবল-কমেন্ট এডিটে সেকেন্ডের রিবিল্ড।',
      },
    },
    {
      q: { en: 'What does a multi-stage build actually buy you?', bn: 'মাল্টি-স্টেজ বিল্ড আসলে কী কিনে দেয়?' },
      a: {
        en: 'Eviction of the build village from the shipping artifact. Stage one owns compilers, devDependencies and source; stage two starts a fresh FROM and receives only what COPY --from explicitly carries — typically a 90% size cut, no toolchain in production (attack surface gone), while stage one’s layers still serve your build cache. One Dockerfile, one build, two worlds.',
        bn: 'পাঠানো আর্টিফ্যাক্ট থেকে বিল্ডের শহর উচ্ছেদ। প্রথম স্টেজের মালিক কম্পাইলার, devDependencies আর সোর্স; দ্বিতীয় শুরু হয় নতুন FROM-এ আর পায় কেবল যা COPY --from স্পষ্ট বয়ে দেয় — সাধারণত ৯০% আকার-কাট, প্রোডাকশনে টুলচেন নেই (আক্রমণ-পৃষ্ঠ উধাও), তবু প্রথম স্টেজের লেয়ার থেকে যায় আপনার বিল্ড-ক্যাশের সেবায়। একটি Dockerfile, একটি বিল্ড, দুই জগৎ।',
      },
    },
    {
      q: { en: 'Why do SIGTERM handlers sometimes never fire in Docker?', bn: 'Docker-এ SIGTERM হ্যান্ডলার কখনো কখনো কেন চলেই না?' },
      a: {
        en: 'Shell-form CMD makes /bin/sh -c the PID 1 wrapper, and /bin/sh does not forward signals: docker stop’s SIGTERM dies at the shell, the 10-second grace expires, SIGKILL arrives. The fix is exec form (CMD ["node", "server.js"]) so the app itself is PID 1 and receives signals directly — optionally with --init/tini to cover zombie reaping duties PID 1 carries.',
        bn: 'শেল-রূপ CMD /bin/sh -c-কে PID 1 মোড়ক বানায়, আর /bin/sh সিগন্যাল বহন করে না: docker stop-এর SIGTERM শেলে মরে, ১০ সেকেন্ডের ছাড় শেষে SIGKILL আসে। সমাধান exec-রূপ (CMD ["node", "server.js"]) — অ্যাপ নিজেই PID 1 হয়ে সরাসরি সিগন্যাল পায়; চাইলে --init/tini দিয়ে জম্বি-সংগ্রহের দায় সামলান, যা PID 1-ভুক্ত।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Every CI/CD pipeline on Earth is this hub’s cache contract: GitHub Actions’ layer caching is the same ordering rules with a YAML face.',
      bn: 'পৃথিবীর প্রতি CI/CD পাইপলাইন এই হাবের ক্যাশ-চুক্তিই: GitHub Actions-এর লেয়ার-ক্যাশিং হলো YAML-মুখ পরা সেই একই ক্রম-নিয়ম।',
    },
    {
      en: 'Kubernetes does not replace this lesson; it multiplies it — a pod is the same namespaced process, now scheduled and restarted by a control plane.',
      bn: 'Kubernetes এই লেসন বদলায় না; গুণে দেয় — পড সেই একই নেমস্পেস-প্রসেস, এবার কন্ট্রোল-প্লেনের সময়সূচি ও পুনঃসূচনায়।',
    },
    {
      en: 'Image audits (Snyk, Trivy) routinely show fat images owe 80% of CVEs to the build-stage crowd — multi-stage eviction IS the fix they recommend.',
      bn: 'ইমেজ-নিরীক্ষা (Snyk, Trivy) নিয়মিত দেখায় মোটা ইমেজের ৮০% CVE ঋণী বিল্ড-স্টেজের ভিড়ের কাছে — মাল্টি-স্টেজ উচ্ছেদ-ই তাদের প্রস্তাবিত প্রতিকার।',
    },
    {
      en: 'Devcontainers in VS Code, GitHub Codespaces, even this sandbox: isolation-as-a-library is the default way serious environments are now built.',
      bn: 'VS Code-এর Devcontainer, GitHub Codespaces, এমনকি এই স্যান্ডবক্স: লাইব্রেরি-রূপী বিচ্ছিন্নতাই এখন গুরুতর পরিবেশ-নির্মাণের ডিফল্ট উপায়।',
    },
  ],
};
