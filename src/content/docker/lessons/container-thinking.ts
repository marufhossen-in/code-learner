import type { Lesson } from '../../../lib/types';

export const containerThinkingLesson: Lesson = {
  slug: 'container-thinking',
  tech: 'docker',
  title: {
    en: 'Container Thinking — A container is not a small VM',
    bn: 'কন্টেইনার-চিন্তা: ইমেজ, লেয়ার ও ক্যাশ-চুক্তি'
  },
  summary: {
    en: 'A container is not a small VM — it is your own process wearing blinders (namespaces) and a budget (cgroups), reading from a stack of filesystem layers. Understand the image/layer/container triangle and the build cache becomes an optimization you control, not magic you fear.',
    bn: 'কন্টেইনার ছোট VM নয় — এটি আপনারই প্রসেস, চোখে বাঁধা অন্ধকার-পট্টি (namespace) আর গলায় বাজেট-শিকল (cgroup), পড়ছে ফাইলসিস্টেম-লেয়ারের স্তূপ। ইমেজ/লেয়ার/কন্টেইনার ত্রিভুজ বুঝে নিলে বিল্ড-ক্যাশ হয়ে ওঠে আপনার নিয়ন্ত্রিত অপ্টিমাইজেশন, ভীত জাদু নয়।',
  },
  minutes: 30,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT is a container, honestly?', bn: 'কন্টেইনার আসলে কী?' } },
    {
      type: 'para',
      text: {
        en: 'Strip the marketing: a container is an ordinary Linux process. It has three core traits. It is blinded by namespaces to see only its own processes and network. It is limited by cgroups with kernel CPU and memory budgets. And it is given a private filesystem assembled from read-only layers with a thin writable layer on top. There is no virtualization of hardware, no guest kernel; the container shares your kernel. Which is why it starts in milliseconds (a process fork, not a machine boot) and why a Linux container needs a Linux kernel (Docker Desktop on Mac/Windows discreetly runs one small VM to supply it). The image is the recipe plus the layer stack; the container is the recipe, running. Registry terminology in one line: you build an image, run it into a container, and push or pull images to registries like git push and pull for frozen file systems.',
        bn: 'বিজ্ঞাপন সরালে কন্টেইনার হলো একটি সাধারণ Linux প্রসেস যাকে ৩টি মৌলিক বৈশিষ্ট্য দেওয়া হয়েছে — অন্ধ (namespaces: সে দেখে শুধু নিজের প্রসেস, নেটওয়ার্ক, মাউন্ট, হোস্টনাম), সীমাবদ্ধ (cgroups: কার্নেল-বলবৎ CPU ও মেমরি-সিলিং), আর খাওয়ানো হয়েছে ব্যক্তিগত ফাইলসিস্টেম. নিচে রিড-অনলি লেয়ারের স্তূপ, উপরে পাতলা লেখার-লেয়ার। হার্ডওয়্যার-ভার্চুয়ালাইজেশন নেই, গেস্ট কার্নেল নেই; কন্টেইনার আপনার কার্নেল ভাগ করে নেয় — তাই চালু হয় মিলিসেকেন্ডে (প্রসেস ফোর্ক, মেশিন-বুট নয়), আর তাই Linux কন্টেইনার চাইতে Linux কার্নেলই লাগে (Mac/Windows-এ Docker Desktop মিতভাষে ১টি ছোট VM চালায় সেটা জোগাতে)। ইমেজ হলো রেসিপি যোগ লেয়ার-স্তূপ; কন্টেইনার হলো চলমান রেসিপি। Registry-ভাষা এক লাইনে: ইমেজ BUILD করা হয়, RUN-এ কন্টেইনার হয়, আর PUSH/PULL হয় ইমেজ — হিমায়িত ফাইলসিস্টেমের git push/pull।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'namespace', def: { en: 'Kernel blinders: PID, mount, network, hostname — each gets a private view.', bn: 'কার্নেল-অন্ধপট্টি: PID, মাউন্ট, নেটওয়ার্ক, হোস্টনাম — প্রত্যেকে ব্যক্তিগত দৃশ্য পায়।' } },
        { term: 'cgroup', def: { en: 'Kernel budget: CPU shares, memory limits, io weights per process group.', bn: 'কার্নেল-বাজেট: প্রসেস-গ্রুপপ্রতি CPU শেয়ার, মেমরি-লিমিট, io ওজন।' } },
        { term: 'layer', def: { en: 'A read-only diff of the filesystem; images are stacks of them, shared between images.', bn: 'ফাইলসিস্টেমের রিড-অনলি diff; ইমেজ এদের স্তূপ, ইমেজজুড়ে ভাগ-নেওয়া।' } },
        { term: 'copy-on-write', def: { en: 'Write to a layer below? The file is copied to your writable top first. Layers stay pure.', bn: 'নিচের লেয়ারে লেখা? ফাইল আগে উপরের লিখন-লেয়ারে নকল হয়। লেয়ার থাকে খাঁটি।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY layers and the cache ARE the product', bn: 'কেন লেয়ার আর ক্যাশ-ই আসল পণ্য' } },
    {
      type: 'para',
      text: {
        en: 'Instructions in a Dockerfile each produce ONE layer — an immutable, content-addressed diff. Two economic consequences shape everything. First: SHARING — node:20 base layers are downloaded once and shared by every Node image on your machine; a registry stores each unique layer once for a million image tags. Second: THE BUILD CACHE — when you rebuild, Docker walks your instructions top to bottom; the first instruction whose INPUTS changed (text, files, args) invalidates that layer and EVERY layer after it, forcing a re-execution. Everything before the first change replays from cache for free. This single rule is why Dockerfile authoring is really cache choreography: put instructions that change rarely (FROM, OS packages) at the top, copy dependency manifests (package.json) BEFORE copying source code. And you turn a 10-minute build into a 10-second rebuild of one layer. Bad ordering re-downloads the internet on every keystroke; good ordering downloads nothing until it must.',
        bn: 'Dockerfile-এর প্রতি নির্দেশনা জন্ম দেয় ১টি লেয়ার — অপরিবর্তনীয়, কনটেন্ট-ঠিকানাযুক্ত diff। ২টি অর্থনৈতিক পরিণতি সবকিছু আকৃতি দেয়। প্রথম: ভাগাভাগি — node:20 বেস লেয়ার একবার ডাউনলোড হয়ে আপনার মেশিনের সব Node ইমেজে ভাগ হয়; একটি রেজিস্ট্রি প্রতি অনন্য লেয়ার একবারই রাখে দশ লাখ ট্যাগের জন্য। দ্বিতীয়: বিল্ড-ক্যাশ — রিবিল্ডে Docker আপনার নির্দেশনা উপর থেকে নিচে হাঁটে; প্রথম যে নির্দেশনার ইনপুট বদলেছে (টেক্সট, ফাইল, আর্গ) তা সেই লেয়ার আর তার পরের সবাইকে অবৈধ করে ফেলে, পুনঃচালনা বাধ্য করে। প্রথম পরিবর্তনের আগের সব ফ্রি-তে ক্যাশ থেকে আসে। এই এক নিয়মেই Dockerfile-লেখা আসলে ক্যাশ-কোরিওগ্রাফি: যে নির্দেশনা কদাচিৎ বদলায় (FROM, OS প্যাকেজ) উপরে রাখুন, ডিপেন্ডেন্সি-ম্যানিফেস্ট (package.json) সোর্স-কপির আগে কপি করুন — ১০-মিনিটের বিল্ড হয়ে যাবে একটি লেয়ারের ১০-সেকেন্ডের রিবিল্ড। খারাপ ক্রম প্রতি কিস্ট্রোকে ইন্টারনেট নামায়; ভালো ক্রম প্রয়োজন ছাড়া কিছুই নামায় না।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW a build walks (and where the cache bites)', bn: 'বিল্ড হেঁটে যায় যেভাবে (আর ক্যাশ কোথায় কামড়ায়)' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1️⃣ FROM seeds the stack', bn: '1️⃣ FROM স্তূপের বীজ বপন করে' }, text: { en: 'node:20-alpine pulls its base layers once; they are shared, read-only, cached forever-ish.', bn: 'node:20-alpine তার বেস লেয়ার একবার টানে; সেগুলো ভাগাকৃত, রিড-অনলি, প্রায়-চিরকাল ক্যাশ।' } },
        { title: { en: '2️⃣ Cheap, stable layers next', bn: '2️⃣ তারপর সস্তা, স্থিতিশীল লেয়ার' }, text: { en: 'WORKDIR, ENV — these change rarely, cache forever. Put them high.', bn: 'WORKDIR, ENV — কদাচিৎ বদলায়, চিরকাল ক্যাশ হয়। রাখুন উপরে।' } },
        { title: { en: '3️⃣ Manifests BEFORE sources', bn: '3️⃣ সোর্সের আগে ম্যানিফেস্ট' }, text: { en: 'COPY package*.json then RUN npm ci: dependencies re-install only when the MANIFEST changed, not per source edit.', bn: 'COPY package*.json তারপর RUN npm ci: ডিপেন্ডেন্সি পুনঃইনস্টল হয় কেবল ম্যানিফেস্ট বদলালে, সোর্স-এডিটে নয়।' } },
        { title: { en: '4️⃣ Sources LAST', bn: '4️⃣ শেষে সোর্স' }, text: { en: 'COPY . . invalidates exactly one layer (plus runtime config) per edit. Cache sweat pays off here.', bn: 'COPY . . প্রতি এডিটে ঠিক একটি লেয়ার (যোগ রানটাইম-কনফিগ) অবৈধ করে। ক্যাশ-পরিশ্রম এখানেই ফল দেয়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'dockerfile',
      code: `# ❌ ক্যাশ-বিধ্বংসী ক্রম: যেকোনো এডিটে পুনরায় npm install
FROM node:20-alpine
COPY . .                # সোর্স প্রথমে — এই লেয়ার প্রতি এডিটে বদলায়
RUN npm ci              # ফলে এর ক্যাশও প্রতিবার ধ্বংস!
CMD ["node", "server.js"]

# ✅ ক্যাশ-বান্ধব ক্রম: সোর্স-এডিটে ইনস্টল অক্ষত থাকে
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./   # ম্যানিফেস্ট আলাদাভাবে — পরিবর্তন বিরল
RUN npm ci              # শুধু package.json বদলালেই পুনঃচলে
COPY . .                # প্রতি এডিটে কেবল এই একটি লেয়ার
CMD ["node", "server.js"]

# 🐳 ল্যাবে দেখুন: স্টেপ বদলে টাইপ করুন —
#    প্রতি নির্দেশনা যেভাবে লেয়ার জন্ম দেয়, ক্যাশ কোথায় ধরে, কোথায় ফেলে`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: namespaces, cgroups & the union', bn: 'ভেতরের কথা: namespace, cgroup আর ইউনিয়ন' } },
    {
      type: 'para',
      text: {
        en: 'When you docker run, three kernel features assemble the illusion at fork-time, costing milliseconds. PID namespace: the container sees its own process tree starting at PID 1 (your node process) — it literally cannot see or signal the host’s processes. Mount namespace + pivot_root: the container’s “/” is the union filesystem — read-only image layers below, a thin writable layer above; writing a file that exists below copies it up first (copy-on-write). So the image bytes are never touched and ten containers share one layer-set peacefully. cgroup: the kernel accountants attach the process to a budget — --memory=512m is not a suggestion, it is an OOM-killer contract. Networking gets its own namespace too: private interfaces, private ports — which is why two containers can both “listen on :3000” with no collision, and why -p 8080:3000 is a deliberate hole poked in the blinders. A VM spends gigabytes simulating hardware for a whole guest OS; the container spends ONLY isolation. Same illusion of separateness, minus the machine.',
        bn: 'docker run দিলে ৩টি কার্নেল-বৈশিষ্ট্য ফোর্ক-সময়ে ভ্রমটা গড়ে দেয়, খরচ মিলিসেকেন্ড। PID namespace: কন্টেইনার দেখে নিজের প্রসেস-বৃক্ষ, শুরু PID 1 (আপনার node প্রসেস) — হোস্টের প্রসেস সে আক্ষরিকভাবে দেখতে বা সংকেত দিতে পারে না। Mount namespace ও pivot_root কন্টেইনারকে ফাইলসিস্টেম আলাদা করে দেয়। কন্টেইনারের “/” হলো ইউনিয়ন ফাইলসিস্টেম — নিচে রিড-অনলি ইমেজ-লেয়ার, উপরে পাতলা লিখন-লেয়ার। নিচের ফাইলে লিখতে হলে আগে তা উপরে কপি হয় (copy-on-write) — ফলে ইমেজ-বাইট কখনো ছোঁয়া হয় না, ১০টি কন্টেইনার শান্তিতে ১টি লেয়ার-সেট ভাগ করে। cgroup: কার্নেল-হিসাবরক্ষক প্রসেসকে বাজেটে বেঁধে দেয় — --memory=512m পরামর্শ নয়, OOM-কিলারের চুক্তি। নেটওয়ার্কও পায় নিজের namespace: ব্যক্তিগত ইন্টারফেস, ব্যক্তিগত পোর্ট — তাই ২ কন্টেইনার উভয়েই “:3000-এ শুনতে” পারে সংঘর্ষ ছাড়াই, আর -p 8080:3000 হলো অন্ধপট্টিতে ইচ্ছাকৃত ছিদ্র। VM গিগাবাইট খরচ করে পুরো গেস্ট OS-এর হার্ডওয়্যার ভান করে; কন্টেইনার খরচ করে কেবল বিচ্ছিন্নতা। বিচ্ছেদের একই ভ্রম, মেশিনটা বাদে।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the Docker Lab', bn: 'ভিজ্যুয়াল: ডকার ল্যাব' } },
    { type: 'visual', id: 'docker' },
    {
      type: 'para',
      text: {
        en: 'In the lab, edit the Dockerfile line by line. Watch each instruction stamp a new layer onto the image stack with the cache verdict rendered at every step (CACHED when inputs match, REBUILT when they do not). Flip one source file’s timestamp and rebuild: only the COPY . . layer and below fall. Then RUN the image and watch the container form: the layer stack gains its writable top, the process table gets its PID 1, the port-mapping opens its deliberate hole.',
        bn: 'ল্যাবে লাইন ধরে Dockerfile সম্পাদনা করুন। প্রতিটি নির্দেশনা কীভাবে ইমেজ-স্তূপে নতুন লেয়ার তৈরি করে তা দেখুন — প্রতি পদে ক্যাশ-রায় প্রদর্শিত হয় (ইনপুট মিললে CACHED, না মিললে REBUILT)। একটি সোর্স-ফাইলের টাইমস্ট্যাম্প বদলে রিবিল্ড করুন: কেবল COPY . . লেয়ার ও তার নিচের অংশ পুনরায় তৈরি হয়। তারপর ইমেজ RUN করে কন্টেইনার গঠন পর্যবেক্ষণ করুন: লেয়ার-স্তূপ তার লিখন-শীর্ষ পায়, প্রসেস-টেবিল তার PID 1 পায়, এবং পোর্ট-ম্যাপিং তার নির্দিষ্ট সংযোগদ্বার খোলে।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: container instincts', bn: 'ফলাফল: কন্টেইনার-সহজাততা' } },
    {
      type: 'list',
      items: [
        { en: 'Image = layered spell; container = a process under blinders, budget and a borrowed kernel.', bn: 'ইমেজ = স্তরিত রেসিপি; কন্টেইনার = অন্ধপট্টি, বাজেট ও ধার করা কার্নেলে চাপা একটি প্রসেস।' },
        { en: 'Order instructions for the cache: rarely-changing first, frequently-changing last.', bn: 'ক্যাশের জন্য নির্দেশনা সাজান: কদাচিৎ-বদলানো আগে, ঘন-বদলানো শেষে।' },
        { en: 'Treat containers as disposable: state lives in volumes and databases, never in the writable layer.', bn: 'কন্টেইনারকে নিক্ষেপযোগ্য ভাবুন: স্টেট থাকে ভলিউম আর ডেটাবেসে, কখনো লিখন-লেয়ারে নয়।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the build that eats lunch', bn: 'ডিবাগিং অনুশীলন: লাঞ্চ-খাওয়া বিল্ড' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: every CI build takes 11 minutes even for a comment-only change; teammates mumble “Docker is just slow”. Hypothesis from the cache contract: someone put COPY . . BEFORE RUN npm ci, so every keystroke invalidates the dependency layer and 8 of those 11 minutes are re-downloading node_modules from the internet. Evidence hunt: read the build logs for CACHED vs the step that always runs — the marker is an npm install in a build that touched zero dependencies. Fix: reorder (manifests-then-install-then-sources, as in the HOW section) and add .dockerignore for test/, .git/, node_modules. Post-fix measurement: comment-only rebuild in 12 seconds. The cache was never “magic”; it was a contract being violated 500 times a week.',
        bn: 'লক্ষণ: কমেন্ট-একটার এডিটেও প্রতি CI বিল্ড লাগে ১১ মিনিট; সতীর্থরা বলে “Docker-ই ধীর”। ক্যাশ-চুক্তি থেকে সন্দেহ: কেউ রেখেছে COPY . . — RUN npm ci-এর আগে, ফলে প্রতি কিস্ট্রোক ডিপেন্ডেন্সি-লেয়ার অবৈধ করে, আর ওই ১১ মিনিটের ৮ মিনিট কেটে যায় ইন্টারনেট থেকে node_modules পুনঃডাউনলোডে। প্রমাণ-শিকার: বিল্ড-লগে CACHED বনাম যে ধাপ সবসময় চলে — চিহ্ন হলো এমন বিল্ডে npm install যেখানে শূন্য ডিপেন্ডেন্সি বদলেছে। সমাধান: ক্রম পাল্টান (ম্যানিফেস্ট → ইনস্টল → সোর্স, HOW-ধারার মতো) আর test/, .git/, node_modules-এর জন্য .dockerignore। পরবর্তী মাপ: কমেন্ট-একটার রিবিল্ড ১২ সেকেন্ড। ক্যাশ কখনো “জাদু” ছিল না; একটি চুক্তি ছিল যা সপ্তাহে ৫০০ বার লঙ্ঘিত হচ্ছিল।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Docker exec -it app bash and EDITING files inside the running container. Your fix dies with the container; the next deploy is the bug again. Patch the Dockerfile, rebuild, redeploy — the image is the truth.',
        bn: 'docker exec -it app bash করে চলমান কন্টেইনারের ভেতরে ফাইল সম্পাদনা। কন্টেইনারের সঙ্গে আপনার ফিক্স মরে; পরের ডিপ্লয় আবার সেই বাগ। Dockerfile-এ প্যাচ, রিবিল্ড, রিডিপ্লয় — ইমেজটিই সত্য।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'Every CI pipeline is a cache contract: the Node “setup + cache” action is this lesson with a YAML face.', bn: 'প্রতি CI পাইপলাইন এক ক্যাশ-চুক্তি: Node-এর “setup + cache” অ্যাকশন YAML-মুখ পরা এই লেসনই।' },
        { en: 'Kubernetes schedules these containers; the pod you meet later is this same namespaced process multiplied.', bn: 'Kubernetes এই কন্টেইনারগুলো সময়সূচি করে; পরে পাওয়া পড হলো এই একই নেমস্পেস-প্রসেস, গুণিতান্ড।' },
        { en: 'Size audits: moving a 1.2 GB image to alpine + multi-stage often cuts 90% of attack surface AND deploy time.', bn: 'আকার-নিরীক্ষা: 1.2 GB ইমেজকে alpine + মাল্টি-স্টেজে নামালে প্রায়ই কমে ৯০% আক্রমণ-পৃষ্ঠ ও ডিপ্লয়-সময়।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: craftsmanship of the Dockerfile', bn: 'পরবর্তী: Dockerfile-কারিগরি' } },
    {
      type: 'para',
      text: {
        en: 'You own the mental model now. Next lesson is the craft: the exact vocabulary of every instruction (COPY vs ADD, RUN vs CMD vs ENTRYPOINT), multi-stage builds that ship the runtime and leave the toolchain behind, and the security discipline. Non-root users and minimal attack surfaces — that separates a demo Dockerfile from a production one.',
        bn: 'মানসিক মডেল এখন আপনার। পরের লেসন কারিগরি: প্রতি নির্দেশনার সুনির্দিষ্ট শব্দভাণ্ডার (COPY বনাম ADD, RUN বনাম CMD বনাম ENTRYPOINT), এমন মাল্টি-স্টেজ বিল্ড যা রাখে রানটাইম, ফেলে দেয় টুলচেন, আর নিরাপত্তা-শৃঙ্খলা — অ-রুট ব্যবহারকারী ও ন্যূনতম আক্রমণ-পৃষ্ঠ — যা ডেমো Dockerfile-কে প্রোডাকশন থেকে আলাদা করে।',
      },
    },
  ],
  nextLesson: {
    slug: 'dockerfile-mastery',
    tech: 'docker',
    title: { en: 'Dockerfile Mastery — Every Dockerfile instruction stamps a layer', bn: 'Dockerfile-এর প্রতি নির্দেশনা একটি লেয়ার ছাপে — Docker' }
  },
  exercises: [
    {
      id: 'docker-think-ex1',
      kind: 'predict',
      topic: 'cache',
      question: { en: 'Lines 1-10 unchanged, you edit one source file. Which layers rebuild?', bn: '১–১০ নং লাইন অপরিবর্তিত, আপনি একটি সোর্স-ফাইল বদলালেন। কোন লেয়ারগুলো রিবিল্ড হয়?' },
      options: [
        { en: 'All of them', bn: 'সবাই' },
        { en: 'The COPY . . layer and everything below it; everything above replays CACHED', bn: 'COPY . . লেয়ার ও তার নিচের সবাই; উপরের সব খেলবে CACHED' },
        { en: 'Only the FROM layer', bn: 'কেবল FROM লেয়ার' },
      ],
      answer: 1,
      hint: { en: 'Invalidation flows DOWNWARD from the first changed input.', bn: 'অবৈধকরণ বয়ে যায় নিচমুখে, প্রথম পরিবর্তিত ইনপুট থেকে।' },
      explanation: { en: 'The first instruction whose inputs changed taints itself and every descendant. Ancestors replay free.', bn: 'প্রথম পরিবর্তিত-ইনপুটের নির্দেশনা দূষিত করে নিজেকে ও সব বংশধরকে। পূর্বপুরুষরা ফ্রি-তে ফিরে।' },
    },
    {
      id: 'docker-think-ex2',
      kind: 'mcq',
      topic: 'model',
      question: { en: 'A container shares the host kernel but CANNOT see host processes because of…', bn: 'কন্টেইনার হোস্ট-কার্নেল ভাগ করে, তবু হোস্ট-প্রসেস দেখতে পায় না কারণ…' },
      options: [
        { en: 'The hypervisor', bn: 'হাইপারভাইজার' },
        { en: 'The PID namespace — process-tree blinding at fork time', bn: 'PID namespace — ফোর্কের সময়ই প্রসেস-বৃক্ষ অন্ধকরণ' },
        { en: 'The writable layer', bn: 'লিখন-লেয়ার' },
      ],
      answer: 1,
      hint: { en: 'Blinders, budgets, and layer stacks — pick the blinder.', bn: 'অন্ধপট্টি, বাজেট আর লেয়ার-স্তূপ — অন্ধপট্টিটা বাছুন।' },
      explanation: { en: 'Namespaces isolate VIEW; cgroups limit RESOURCES. No hypervisor anywhere in the sentence.', bn: 'Namespace বিচ্ছিন্ন করে দৃশ্য; cgroup সীমিত করে সম্পদ। বাক্যে কোথাও হাইপারভাইজার নেই।' },
    },
    {
      id: 'docker-think-ex3',
      kind: 'mcq',
      topic: 'union-fs',
      question: { en: 'A running container MODIFIES a file that lives in a read-only image layer. What happens?', bn: 'চলমান কন্টেইনার রিড-অনলি ইমেজ-লেয়ারের একটি ফাইল বদলায়। কী ঘটে?' },
      options: [
        { en: 'The image layer is edited in place', bn: 'ইমেজ-লেয়ার নিজ জায়গায় সম্পাদিত হয়' },
        { en: 'The file is copied UP into the writable top layer first (copy-on-write); the image stays pristine', bn: 'ফাইল আগে উপরের লিখন-লেয়ারে নকল হয় (copy-on-write); ইমেজ অকলুষিত থাকে' },
        { en: 'Permission denied, always', bn: 'সবসময় পারমিশন ডিনাইড' },
      ],
      answer: 1,
      hint: { en: 'Immutability with illusion of mutability.', bn: 'অপরিবর্তনীয়তা, পরিবর্তনের ভ্রমসহ।' },
      explanation: { en: 'COW lets ten containers share one layer-set while each believes it owns a mutable filesystem.', bn: 'COW দশ কন্টেইনারকে এক লেয়ার-সেট ভাগ করতে দেয়, তবু প্রত্যেকে ভাবে মিউটেবল ফাইলসিস্টেম তারই।' },
    },
    {
      id: 'docker-think-ex4',
      kind: 'fill',
      topic: 'commands',
      question: { en: 'The command that pushes an image to a registry (like git for frozen filesystems): docker ____', bn: 'রেজিস্ট্রিতে ইমেজ ঠেলে দেওয়ার কমান্ড (হিমায়িত ফাইলসিস্টেমের git): docker ____' },
      answer: 'push',
      accept: ['push'],
      hint: { en: 'Its twin is pull.', bn: 'এর যুগল হলো pull।' },
      explanation: { en: 'push/pull move immutable LAYERS — only the diffs the registry does not already hold.', bn: 'push/pull সরায় অপরিবর্তনীয় লেয়ার — শুধু সেই diff যা রেজিস্ট্রিতে আগে থেকে নেই।' },
      solution: 'docker push myapp:1.2',
    },
  ],
  quiz: {
    id: 'docker-think-quiz',
    title: { en: 'Quiz: the illusion, itemized', bn: 'কুইজ: ভ্রমটি, খতিয়ানে' },
    questions: [
      {
        id: 'docker-think-q1',
        kind: 'mcq',
        topic: 'vm-vs-container',
        question: { en: 'Containers start in ~50 ms while VMs take minutes, mostly because…', bn: 'কন্টেইনার চালু হয় ~৫০ ms-এ, VM নেয় মিনিট — মূলত কারণ…' },
        options: [
          { en: 'Containers use better compression', bn: 'কন্টেইনার ভালো কম্প্রেশন ব্যবহার করে' },
          { en: 'A container is a forked process with blinders; a VM must boot an entire guest OS on simulated hardware', bn: 'কন্টেইনার হলো অন্ধপট্টি-পরা ফোর্কড প্রসেস; VM-কে সিমুলেটেড হার্ডওয়্যারে পুরো গেস্ট OS বুট করতে হয়' },
          { en: 'VMs are encrypted', bn: 'VM এনক্রিপ্টেড' },
        ],
        answer: 1,
        hint: { en: 'Isolation is cheap; simulating a whole computer is not.', bn: 'বিচ্ছিন্নতা সস্তা; পুরো কম্পিউটার ভান করা নয়।' },
        explanation: { en: 'Namespaces + cgroups + fork ≈ ms. Boot kernel + init + services ≈ minutes.', bn: 'Namespace + cgroup + fork ≈ ms। বুট কার্নেল + init + সার্ভিস ≈ মিনিট।' },
      },
      {
        id: 'docker-think-q2',
        kind: 'predict',
        topic: 'caching',
        question: { en: 'Dockerfile: COPY . . then RUN npm ci. You edit a comment. The npm ci step…', bn: 'Dockerfile: COPY . . তারপর RUN npm ci। আপনি কমেন্ট বদলালেন। npm ci ধাপ…' },
        options: [
          { en: 'Replays from cache — the manifest is unchanged', bn: 'ক্যাশ থেকে ফিরে — ম্যানিফেস্ট অপরিবর্তিত' },
          { en: 'REBUILDS — the copy layer (its parent input) changed, so every layer below dies with it', bn: 'রিবিল্ড হয় — কপি-লেয়ার (তার অভিভাবক-ইনপুট) বদলেছে, ফলে নিচের সব লেয়ার সঙ্গে মরে' },
          { en: 'Is skipped entirely', bn: 'পুরোপুরি বাদ যায়' },
        ],
        answer: 1,
        hint: { en: 'The cache contract flows parent → child; sour the parent, spoil the line.', bn: 'ক্যাশ-চুক্তি প্রবাহিত হয় অভিভাবক → সন্তান; অভিভাবক বাসি হলে বংশ নষ্ট।' },
        explanation: { en: 'This is the 8-minute bug. Manifests-then-install-then-sources keeps npm ci cache-safe through comment edits.', bn: 'এটিই ৮-মিনিটের বাগ। ম্যানিফেস্ট→ইনস্টল→সোর্স ক্রম কমেন্ট-এডিটেও npm ci-কে ক্যাশ-নিরাপদ রাখে।' },
      },
      {
        id: 'docker-think-q3',
        kind: 'mcq',
        topic: 'registry',
        question: { en: 'A registry stores 1,000 image tags sharing the same base. Physical layer storage is…', bn: 'রেজিস্ট্রিতে ১,০০০ ট্যাগ — সবার বেস এক। শারীরিক লেয়ার-সংরক্ষণ…' },
        options: [
          { en: '1,000 copies, one per tag', bn: '১,০০০ কপি, ট্যাগপ্রতি একটি' },
          { en: 'Each unique layer ONCE; tags are pointers into the shared pile', bn: 'প্রতি অনন্য লেয়ার একবারই; ট্যাগ হলো ভাগাকৃত স্তূপে পয়েন্টার' },
          { en: 'Compressed into a single mega-layer', bn: 'এক বিশাল লেয়ারে চাপা' },
        ],
        answer: 1,
        hint: { en: 'Content-addressing: the same bytes have the same name, so they exist once.', bn: 'কনটেন্ট-ঠিকানা: একই বাইটের একই নাম, ফলে থাকে একবারই।' },
        explanation: { en: 'push pulls only unknown diffs; storage pays once per unique content. The economics stack on top of immutability.', bn: 'push টানে কেবল অচেনা diff; সংরক্ষণ দেয় প্রতি অনন্য কনটেন্টে একবার। অর্থনীতি জমা হয় অপরিবর্তনীয়তার ওপর।' },
      },
      {
        id: 'docker-think-q4',
        kind: 'mcq',
        topic: 'state',
        question: { en: 'A stateful service (Postgres) in a container keeps durable data in…', bn: 'কন্টেইনারে স্টেটফুল সার্ভিস (Postgres) টেকসই ডেটা রাখে…' },
        options: [
          { en: 'Its writable top layer — it is the fastest', bn: 'নিজের লিখন-মুকুটে — এটিই দ্রুততম' },
          { en: 'A mounted VOLUME outside the container lifecycle — the writable layer dies with the container', bn: 'কন্টেইনার-জীবনচক্রের বাইরের মাউন্ট করা ভলিউমে — লিখন-লেয়ার কন্টেইনারের সঙ্গে মরে' },
          { en: 'RAM only', bn: 'শুধু RAM-এ' },
        ],
        answer: 1,
        hint: { en: 'Containers are cattle; data is the family heirloom — keep it off the cattle.', bn: 'কন্টেইনার গোপশু; ডেটা পৈতৃক সম্পদ — গোপশুর গায়ে রাখবেন না।' },
        explanation: { en: 'docker rm discards the writable layer. Volumes survive stop, rm, upgrade — that is the whole point.', bn: 'docker rm লিখন-লেয়ার ফেলে দেয়। ভলিউম টিকে থাকে stop, rm, আপগ্রেড-পেরিয়ে — কথাটা এইটুকুই।' },
      },
    ],
  },
  next: { slug: 'dockerfile-mastery', title: { en: 'Dockerfile Mastery: instructions, stages, non-root', bn: 'Dockerfile-দক্ষতা: নির্দেশনা, স্টেজ, অ-রুট' } },
};
