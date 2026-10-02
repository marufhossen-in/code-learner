import type { Lesson } from '../../../lib/types';

export const dockerfileMasteryLesson: Lesson = {
  slug: 'dockerfile-mastery',
  tech: 'docker',
  title: {
    en: 'Dockerfile Mastery — Every Dockerfile instruction stamps a layer',
    bn: 'Dockerfile-এর প্রতি নির্দেশনা একটি লেয়ার ছাপে — Docker'
  },
  summary: {
    en: 'Every Dockerfile instruction stamps a layer — and some stamp liabilities. Master the true vocabulary (COPY vs ADD, RUN vs CMD vs ENTRYPOINT, ENV vs ARG), the multi-stage pattern that ships runtimes without toolchains, and the non-root discipline that keeps a demo Dockerfile from becoming a production incident.',
    bn: 'Dockerfile-এর প্রতি নির্দেশনা একটি লেয়ার ছাপে — কোনো কোনোটি ছাপে দায়। দখল করুন প্রকৃত শব্দভাণ্ডার (COPY বনাম ADD, RUN বনাম CMD বনাম ENTRYPOINT, ENV বনাম ARG), এমন মাল্টি-স্টেজ প্যাটার্ন যা পাঠায় রানটাইম, রেখে দেয় টুলচেন, আর অ-রুট শৃঙ্খলা যা ডেমো Dockerfile-কে প্রোডাকশন-দুর্ঘটনা থেকে বাঁচায়।',
  },
  minutes: 35,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT do instructions really stamp?', bn: 'নির্দেশনাগুলো আসলে কী ছাপ ফেলে?' } },
    {
      type: 'para',
      text: {
        en: "A Dockerfile instruction is not a command you run; it is a commit you make into an image. The 'RUN' instruction bakes a filesystem diff (packages installed, files generated) into a permanent layer. The 'ENV' instruction sets runtime metadata for every container process. The 'ARG' variable exists only during build time and vanishes afterwards. The 'COPY' command imports files from the host into an image layer. The 'ADD' instruction can also unpack tar archives and fetch remote URLs. Finally, 'CMD' defines the default execution arguments, while 'ENTRYPOINT' defines the unalterable executable program.",
        bn: 'Dockerfile-নির্দেশনা চালানো কমান্ড নয়; এটি ইমেজে দেওয়া একটি কমিট। RUN গেঁথে দেয় ফাইলসিস্টেম-diff (ইনস্টল প্যাকেজ, উৎপন্ন ফাইল) স্থায়ী লেয়ারে। ENV গেঁথে দেয় মেটাডেটা যা রানটাইমে থাকবে, ফাইনাল ইমেজে, প্রতি প্রসেসের কাছে দৃশ্যমান — দেখা যায় docker inspect-এ, kubectl describe-এ, আর ইমেজ টানা যেকারো কাছে (সিক্রেট কখনো নয়)। ARG টিকে শুধু বিল্ড-সময়, শেষ ইমেজ থেকে উধাও — বিল্ড-টাইম নবের আসল ঠিকানা। COPY হোস্ট-ফাইল দিয়ে লেয়ার বানায়; ADD হুবহু তা-ই, সাথে টারবল স্বয়ংক্রিয়-খোলা ও URL-আনয়ন — দুটি জাদুকরী আচরণ যা লুকিয়ে রাখে বিল্ড আসলে কীর ওপর নির্ভর করে — তাই নিয়ম: সবসময় COPY। এরপর রানটাইম-জুটি: CMD দেয় ডিফল্ট কমান্ড (docker run-এ উজুরযোগ্য), ENTRYPOINT দেয় স্থির এক্সিকিউটেবল (আর্গুমেন্ট যোগ হয়) — একসাথে এরা ইমেজকে “ফাইলসিস্টেম” থেকে বানায় “ইন্টারফেসযুক্ত যন্ত্র”।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'instruction = commit', def: { en: 'Each RUN/COPY/ENV becomes an immutable layer; text is a build log, layers are the product.', bn: 'প্রতি RUN/COPY/ENV হয় অপরিবর্তনীয় লেয়ার; টেক্সট বিল্ড-লগ, পণ্য হলো লেয়ার।' } },
        { term: 'ADD temptation', def: { en: 'Magic extraction + URL fetch = hidden inputs, cache-busting downloads. Use COPY.', bn: 'জাদুকরী খোলা + URL আনয়ন = লুকানো ইনপুট, ক্যাশ-চূর্ণ ডাউনলোড। ব্যবহার করুন COPY।' } },
        { term: 'multi-stage', def: { en: 'FROM … AS build → produce artifact → new FROM runtime, COPY --from=build only the artifact.', bn: 'FROM … AS build → আর্টিফ্যাক্ট তৈরি → নতুন FROM রানটাইম, COPY --from=build কেবল আর্টিফ্যাক্ট।' } },
        { term: 'PID 1 problem', def: { en: 'In the container, your app IS PID 1: signals and zombie reaping are now YOUR job (tini/node --init).', bn: 'কন্টেইনারে আপনার অ্যাপ-ই PID 1: সিগন্যাল আর জম্বি-সংগ্রহ এখন আপনার দায়িত্ব (tini/node --init)।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY production images are built twice (multi-stage)', bn: 'কেন প্রোডাকশন ইমেজ দুইবার বানানো হয় (মাল্টি-স্টেজ)' } },
    {
      type: 'para',
      text: {
        en: 'Building needs a CROWD: compilers, devDependencies, node_modules, test tools, source maps, documentation. Shipping needs a HANDFUL: the built artifact, a runtime, the minimal runtime libraries. Packing the crowd into the ship is how 1.4 GB images with gcc and a thousand CVEs get deployed — every tool in the image is attack surface and deployment time. Multi-stage is the elegant eviction: stage one (FROM node:20 AS build) has the whole toolchain and RUN npm ci && npm run build; stage two (FROM node:20-alpine) starts FRESH and COPY --from=build /app/dist …. The compiler, the devDependencies, even the source code never exist in the final image. The layers of stage one are for your convenience and cache; the layers of stage two are the only thing that ships. The same Dockerfile, one build, two worlds.',
        bn: 'বানাতে লাগে ভিড়: কম্পাইলার, devDependencies, node_modules, টেস্ট-সরঞ্জাম, সোর্স ম্যাপ, ডকুমেন্টেশন। পাঠাতে লাগে মুঠো: বানানো আর্টিফ্যাক্ট, একটি রানটাইম, ন্যূনতম রানটাইম লাইব্রেরি। ভিড় জাহাজে তুললেই ডিপ্লয় হয় 1.4 GB ইমেজ — যাতে gcc আর হাজার CVE; ইমেজের প্রতি সরঞ্জাম আক্রমণ-পৃষ্ঠ আর ডিপ্লয়-সময়। মাল্টি-স্টেজ হলো মার্জিত উচ্ছেদ: প্রথম স্টেজ (FROM node:20 AS build) পুরো টুলচেন নিয়ে RUN npm ci && npm run build; দ্বিতীয় স্টেজ (FROM node:20-alpine) শুরু হয় নতুন করে। আর COPY --from=build /app/dist … — কম্পাইলার, devDependencies, এমনকি সোর্স কোড ফাইনাল ইমেজে কখনোই ছিল না। প্রথম স্টেজের লেয়ার আপনার সুবিধা ও ক্যাশের; দ্বিতীয়ের লেয়ারই একমাত্র যা ভ্রমণ করে। একই Dockerfile, ১টি বিল্ড, ২টি জগৎ।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW a production Dockerfile reads', bn: 'প্রোডাকশন Dockerfile পড়ে যেভাবে' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1️⃣ Build stage: full toolchain', bn: '1️⃣ বিল্ড স্টেজ: পুরো টুলচেন' }, text: { en: 'FROM node:20 AS build — heavy base okay here; it never ships.', bn: 'FROM node:20 AS build — ভারী বেস এখানে চলে; এ তো ভ্রমণ করবে না।' } },
        { title: { en: '2️⃣ Cache-ordered install + build', bn: '2️⃣ ক্যাশ-ক্রমে ইনস্টল ও বিল্ড' }, text: { en: 'Manifests, npm ci, sources, build — the contract from lesson 1.', bn: 'ম্যানিফেস্ট, npm ci, সোর্স, বিল্ড — প্রথম লেসনের চুক্তি।' } },
        { title: { en: '3️⃣ Runtime stage: alpine + prod deps only', bn: '3️⃣ রানটাইম স্টেজ: alpine + শুধু প্রোড-ডিপেন্ডেন্সি' }, text: { en: 'Fresh FROM node:20-alpine; npm ci --omit=dev; COPY --from=build only the dist folder.', bn: 'নতুন FROM node:20-alpine; npm ci --omit=dev; COPY --from=build কেবল dist ফোল্ডার।' } },
        { title: { en: '4️⃣ Non-root + explicit start', bn: '4️⃣ অ-রুট + স্পষ্ট শুরু' }, text: { en: 'USER node before CMD; exec-form (JSON array) so the app is PID 1 and receives SIGTERM correctly.', bn: 'CMD-এর আগে USER node; exec-রূপ (JSON অ্যারে), যাতে অ্যাপ PID 1 হয়ে SIGTERM যথাযথ পায়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'dockerfile',
      code: `# ---------- স্টেজ ১: বিল্ড (কখনো ডিপ্লয় হয় না) ----------
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci                      # ডেভ-ডিপেন্ডেন্সিসহ পুরো শহর
COPY . .
RUN npm run build               # আউটপুট: /app/dist

# ---------- স্টেজ ২: রানটাইম (কেবল এটিই ভ্রমণ করে) ----------
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev           # বিল্ডারের ভিড় নেই
COPY --from=build /app/dist ./dist
USER node                       # অ-রুট: কন্টেইনার-এস্কেপে ক্ষতি সীমিত
EXPOSE 3000
CMD ["node", "dist/server.js"]  # exec-রূপ: node-ই PID 1

# ফল: ~150 MB, কম্পাইলারহীন, অ-রুট — বনাম 1.4 GB ঐতিহ্যবাহী`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: shells, signals and the PID 1 curse', bn: 'ভেতরের কথা: শেল, সিগন্যাল আর PID 1 অভিশাপ' } },
    {
      type: 'para',
      text: {
        en: 'The exec-form vs shell-form choice decides WHO gets your signals. CMD ["node", "server.js"] makes node PID 1 directly — SIGTERM (docker stop) reaches the app, handlers run, connections drain, shutdown is graceful. In contrast, running through shell form wraps your process in /bin/sh -c without forwarding signals. So docker stop waits the full 10-second grace period and then SIGKILLs — in-flight requests die mid-sentence, every time. The deeper curse: PID 1 inside a namespace has special zombie-reaping duties; if your process does not reap children, defunct processes accumulate forever. Node does not reap by default, kernels do not intervene — hence docker run --init (tini) as the standard tiny PID 1 babysitter. One instruction choice, four production behaviors. The lab below lets you flip forms and stage splits and watch the image stack, cache, and final process tree rearrange — same source, different physics.',
        bn: 'exec-রূপ বনাম শেল-রূপ পছন্দ ঠিক করে সিগন্যাল যাবে কার কাছে। CMD ["node", "server.js"] node-কে সরাসরি PID 1 বানায় — SIGTERM পৌঁছায়, হ্যান্ডলার চলে, সংযোগ সুরক্ষিতভাবে বন্ধ হয়। কিন্তু শেল-ফর্মে কমান্ড মোড়ানো থাকে /bin/sh -c দিয়ে। ফলে মূল অ্যাপ সরাসরি কার্নেল সিগন্যাল পায় না। এতে শাটডাউন দশ সেকেন্ড আটকে থাকার পর প্রক্রিয়াটি জোরপূর্বক বন্ধ হয়ে যায়। নেমস্পেসের ভেতরে PID 1 এর বিশেষ জম্বি-সংগ্রহের দায় থাকে। প্রসেস সন্তান গুছিয়ে না নিলে defunct প্রসেস জমা হয়। Node ডিফল্টে তা গোছায় না, তাই docker run --init (tini) একটি ক্ষুদ্র তত্ত্বাবধায়ক হিসেবে কাজ করে। ১টি নির্দেশনা পছন্দ ৪টি ভিন্ন আচরণ তৈরি করে।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: build it in the lab', bn: 'ভিজ্যুয়াল: ল্যাবে বানান' } },
    { type: 'visual', id: 'docker' },
    {
      type: 'para',
      text: {
        en: 'Rebuild the two-stage Dockerfile from the HOW section line by line in the lab: watch stage one accumulate its toolchain layers, then watch stage two start CLEAN. A new FROM, a fresh stack, only dist lofted across by COPY --from. Toggle a source edit and rebuild: stage one replays cache, stage two re-stamps just the artifact layer. This is the multi-stage eviction made visible: what you ship is what stage two decided, nothing else.',
        bn: 'HOW-ধারার ২-ধাপের Dockerfile ল্যাবে লাইন ধরে বানান: ১ম পর্যায় তার টুলচেন-লেয়ারে ভারাক্রান্ত হতে দেখুন, তারপর ২য় ধাপ শুরু হোক পরিষ্কার — নতুন FROM, নতুন স্তূপ, শুধু dist এসেছে COPY --from-এর টানে। সোর্স-এডিট টগল করে রিবিল্ড: ১ম পর্যায় ক্যাশ ফেরায়, ২য় ধাপ ছাপে কেবল আর্টিফ্যাক্ট-লেয়ার। এটিই দৃশ্যমান বহু-ধাপ উচ্ছেদ: আপনি যা পাঠান তার সিদ্ধান্ত ২য় পর্যায়ের, আর কিছু নয়।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: craftsman instincts', bn: 'ফলাফল: কারিগরের সহজাততা' } },
    {
      type: 'list',
      items: [
        { en: 'COPY by default, exec-form always, USER non-root before CMD.', bn: 'ডিফল্টে COPY, সবসময় exec-রূপ, CMD-এর আগে অ-রুট USER।' },
        { en: 'Ship stage two only: compilers and devDependencies are build-stage citizens.', bn: 'পাঠান কেবল দ্বিতীয় স্টেজ: কম্পাইলার আর devDependencies প্রথম-স্টেজের নাগরিক।' },
        { en: 'Treat ARG as build-time knobs, ENV as runtime truth — and secrets as neither.', bn: 'ARG হলো বিল্ড-টাইম নব, ENV রানটাইম-সত্য — আর সিক্রেট কোনোটিই নয় (সিক্রেট-ম্যানেজমেন্ট আলাদা)।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the graceful shutdown that wasn’t', bn: 'ডিবাগিং অনুশীলন: মার্জিত শাটডাউন যা ছিল না' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: every deploy kills 3-4 in-flight requests; the app logs show no graceful-shutdown handler ever firing despite being implemented. Hypothesis from internals: the Dockerfile used shell form — CMD node server.js — making /bin/sh the PID 1 signal-eater; SIGTERM never reached node, the 10-second grace expired, SIGKILL. Evidence: docker stop the container and time it — exactly 10 seconds, always; and ps inside the container shows /bin/sh -c as PID 1 with node as child. Fix: switch to exec form (CMD ["node", "server.js"]), add --init or tini for zombie duty, and re-measure: stop completes in ~200 ms with the shutdown handler logging cleanly. The bug lived in one missing pair of brackets.',
        bn: 'লক্ষণ: প্রতি ডিপ্লয়ে ৩-৪টি চলমান রিকোয়েস্ট মরে; অ্যাপ-লগে গ্রেসফুল-শাটডাউন হ্যান্ডলার কোনোদিন চলেনি, থাকা সত্ত্বেও। অন্তর্বিভাগ থেকে সন্দেহ: Dockerfile-এ শেল-রূপ — CMD node server.js — /bin/sh হয়ে গেছে PID 1 সিগন্যাল-গিলক; SIGTERM পৌঁছায়নি node-এ, ১০ সেকেন্ডের ছাড় শেষে SIGKILL। প্রমাণ: কন্টেইনারে docker stop দিয়ে সময় মাপুন — হুবহু ১০ সেকেন্ড, প্রতিবার; ভেতরে ps-এ /bin/sh -c PID 1, node তার সন্তান। সমাধান: exec-রূপে চলুন (CMD ["node", "server.js"]), জম্বি-দায়ে --init বা tini যোগ করুন, পুনঃমাপুন: stop শেষ হয় ~২০০ ms-এ, শাটডাউন হ্যান্ডলার পরিষ্কার লগ করে। বাগ ছিল অনুপস্থিত এক জোড়া বন্ধনীতে।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Dockerfiles that curl | bash during build. The build host’s network, the script’s contents, and the resulting layer are all invisible to review. Vendor dependencies through the registry and package manager — where checksums live.',
        bn: 'বিল্ডের সময় curl | bash করা Dockerfile। বিল্ড-হোস্টের নেটওয়ার্ক, স্ক্রিপ্টের কনটেন্ট, উৎপন্ন লেয়ার — সবই পর্যালোচনার চোখের বাইরে। রেজিস্ট্রি আর প্যাকেজ-ম্যানেজার ধরে ডিপেন্ডেন্সি আনুন — চেকসাম সেখানে থাকে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'Distroless images take multi-stage to its end: no shell at all in stage two — ls, bash, and 90% of CVEs simply do not exist to exploit.', bn: 'ডিস্ট্রোলেস ইমেজ মাল্টি-স্টেজকে প্রান্তে নিয়ে যায়: ২য় স্টেজে কোনো শেলই নেই — ls, bash আর ৯০% CVE শোষণের জন্য অস্তিত্বহীন।' },
        { en: 'CI build caches (Docker layer caching in GitHub Actions) are this same contract with a YAML face — same ordering rules.', bn: 'CI বিল্ড-ক্যাশ (GitHub Actions-এ Docker লেয়ার-ক্যাশিং) YAML-মুখ পরা এই একই চুক্তি — একই ক্রম-নিয়ম।' },
        { en: 'Kubernetes liveness/readiness probes pair with correct PID 1 behavior: wrong signals = wrong restarts.', bn: 'Kubernetes-এর liveness/readiness প্রোব জুটি বাঁধে সঠিক PID 1 আচরণের সাথে: ভুল সিগন্যাল = ভুল পুনঃসূচনা।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: from one container to a fleet', bn: 'পরবর্তী: এক কন্টেইনার থেকে বহর' } },
    {
      type: 'para',
      text: {
        en: 'One container is a solved problem. The frontier is composition: docker-compose for the local multi-service world, registries and tags as the shipping lane, and eventually Kubernetes — where the pod IS this lesson’s namespaced process, scheduled. The registry’s data section in the roadmaps connects onward. Build light, root less, ship stage two.',
        bn: '১টি কন্টেইনার মীমাংসিত সমস্যা। সীমান্তে মিশ্রণ: স্থানীয় বহু-সার্ভিস জগতে docker-compose, শিপিং-লেন হিসেবে রেজিস্ট্রি ও ট্যাগ, আর অবশেষে Kubernetes — যেখানে পড হলো এই লেসনের নেমস্পেস-প্রসেস, সময়সূচিবদ্ধ। রোডম্যাপের ডেটা-অংশ সামনে যুক্ত করে। হালকা বানান, কম রুট করুন, পাঠান ২য় স্টেজ।',
      },
    },
  ],
  exercises: [
    {
      id: 'docker-mastery-ex1',
      kind: 'predict',
      topic: 'exec-vs-shell',
      question: { en: 'docker stop on a shell-form CMD container takes exactly ~10 seconds, every time. Why?', bn: 'শেল-রূপ CMD-র কন্টেইনারে docker stop সবসময় হুবহু ~১০ সেকেন্ড নেয় কেন?' },
      options: [
        { en: 'The app is slow to close files', bn: 'ফাইল বন্ধ করতে অ্যাপ ধীর' },
        { en: '/bin/sh is PID 1 and does not forward SIGTERM; Docker waits the grace period, then SIGKILLs', bn: '/bin/sh হলো PID 1 আর SIGTERM বহন করে না; Docker ছাড়-সময় অপেক্ষা করে, তারপর SIGKILL' },
        { en: 'The network is congested', bn: 'নেটওয়ার্ক জ্যামে আছে' },
      ],
      answer: 1,
      hint: { en: 'Who receives the signal first decides who hears it at all.', bn: 'সিগন্যাল আগে কে পায়, সে-ই ঠিক করে শেষপর্যন্ত কে শুনবে।' },
      explanation: { en: 'Shell form wraps your app in a signal blocker. Exec form makes the app PID 1 — SIGTERM lands, handlers run.', bn: 'শেল-রূপ অ্যাপ মোড়ে দেয় সিগন্যাল-ব্লকারে। exec-রূপে অ্যাপই PID 1 — SIGTERM নামে, হ্যান্ডলার চলে।' },
    },
    {
      id: 'docker-mastery-ex2',
      kind: 'mcq',
      topic: 'add-vs-copy',
      question: { en: 'The standing rule between COPY and ADD is…', bn: 'COPY আর ADD-এর মধ্যে স্থায়ী নিয়ম…' },
      options: [
        { en: 'Use ADD — it is newer', bn: 'ADD ব্যবহার করুন — এটি নতুন' },
        { en: 'Use COPY always; ADD’s tarball-extraction and URL-fetch are hidden magic that bust caches and reviews', bn: 'সবসময় COPY ব্যবহার করুন; ADD-এর টারবল-খোলা ও URL-আনয়ন লুকানো জাদু — ক্যাশ আর পর্যালোচনা ভাঙে' },
        { en: 'They are identical', bn: 'দুটো হুবহু এক' },
      ],
      answer: 1,
      hint: { en: 'Magic you cannot see in one command is a diff you will not review.', bn: 'এক কমান্ডে অদৃশ্য জাদু হলো এমন diff যা আপনি পর্যালোচনা করবেন না।' },
      explanation: { en: 'COPY states what it moves. ADD may download worlds. Reviewability is a security feature.', bn: 'COPY বলে দেয় কী সরায়। ADD পৃথিবী নামিয়ে আনতে পারে। পর্যালোচনাযোগ্যতা একটি নিরাপত্তা-বৈশিষ্ট্য।' },
    },
    {
      id: 'docker-mastery-ex3',
      kind: 'mcq',
      topic: 'multi-stage',
      question: { en: 'In a two-stage Dockerfile, what does stage two inherit from stage one?', bn: '২-স্টেজ Dockerfile-এ ২য় স্টেজ ১ম স্টেজ থেকে পায় কী?' },
      options: [
        { en: 'Everything — layers merge', bn: 'সবকিছু — লেয়ার মিলে যায়' },
        { en: 'Nothing by default; only what you explicitly COPY --from=build', bn: 'ডিফল্টে কিছুই নয়; কেবল যা আপনি স্পষ্ট COPY --from=build করেন' },
        { en: 'Only the FROM image', bn: 'কেবল FROM ইমেজ' },
      ],
      answer: 1,
      hint: { en: 'Each FROM starts a fresh stack; the bridge is explicit.', bn: 'প্রতি FROM শুরু করে নতুন স্তূপ; সেতু স্পষ্ট।' },
      explanation: { en: 'Stage one might weigh 1.4 GB; stage two ships exactly what you carry across — often ~150 MB and zero compilers.', bn: '১ম স্টেজ ওজন হতে পারে 1.4 GB; ২য় স্টেজ পাঠায় ঠিক যা আপনি বয়ে আনেন — প্রায় ১৫০ MB, কম্পাইলার শূন্য।' },
    },
    {
      id: 'docker-mastery-ex4',
      kind: 'fill',
      topic: 'security',
      question: { en: 'The instruction that stops the app from running as root in the final image: ____ node', bn: 'ফাইনাল ইমেজে অ্যাপকে রুট হিসেবে চলা থেকে থামায় এমন নির্দেশনা: ____ node' },
      answer: 'USER',
      accept: ['USER', 'user'],
      hint: { en: 'Four letters; official node images ship a ready-made non-root account with this name.', bn: 'চার অক্ষর; অফিশিয়াল node ইমেজে এই নামের তৈরি অ-রুট অ্যাকাউন্ট আছেই।' },
      explanation: { en: 'USER node + minimal base + read-only filesystem = the container-escape blast radius shrinks to near zero.', bn: 'USER node + ন্যূনতম বেস + রিড-অনলি ফাইলসিস্টেম = কন্টেইনার-এস্কেপের বিস্ফোরণ-ব্যাসার্ধ প্রায় শূন্য।' },
      solution: 'USER node',
    },
  ],
  quiz: {
    id: 'docker-mastery-quiz',
    title: { en: 'Quiz: the craftsman’s exam', bn: 'কুইজ: কারিগরের পরীক্ষা' },
    questions: [
      {
        id: 'docker-mastery-q1',
        kind: 'mcq',
        topic: 'env-vs-arg',
        question: { en: 'A build-time-only setting (e.g., which npm registry to hit) belongs in…', bn: 'শুধু-বিল্ড-সময়ের সেটিং (যেমন কোন npm registry-তে যাবেন) থাকা উচিত…' },
        options: [
          { en: 'ENV — it is an environment thing', bn: 'ENV-এ — পরিবেশ-বিষয় বটে' },
          { en: 'ARG — it vanishes from the final image, keeping runtime metadata (and inspect output) clean', bn: 'ARG-এ — ফাইনাল ইমেজ থেকে উধাও হয়, রানটাইম-মেটাডেটা (ও inspect আউটপুট) পরিষ্কার থাকে' },
          { en: 'RUN echo', bn: 'RUN echo-তে' },
        ],
        answer: 1,
        hint: { en: 'ENV ships; ARG evaporates.', bn: 'ENV ভ্রমণ করে; ARG বাষ্পে মেশে।' },
        explanation: { en: 'ENV exists in every container of the image and in docker inspect; ARG is build-scoped. Secrets belong to neither.', bn: 'ENV থাকে ইমেজের প্রতি কন্টেইনারে ও docker inspect-এ; ARG বিল্ড-সীমাবদ্ধ। সিক্রেট কারোটিতেই নয়।' },
      },
      {
        id: 'docker-mastery-q2',
        kind: 'predict',
        topic: 'layers',
        question: { en: 'RUN apt update && apt install -y curl as ONE instruction vs TWO separate RUN lines — the cache behavior differs how?', bn: 'RUN apt update && apt install -y curl ১টি নির্দেশনায় বনাম ২টি আলাদা RUN লাইনে — ক্যাশ-আচরণে পার্থক্য?' },
        options: [
          { en: 'No difference', bn: 'পার্থক্য নেই' },
          { en: 'Separate layers let a forever-cached “update” pair with a tomorrow-stale “install”; one layer retries the pair atomically and keeps the cache honest', bn: 'আলাদা লেয়ারে চির-ক্যাশ “update” থাকে আগামী-বাসি “install”-এর সাথে; এক লেয়ার জোড়াটা পুরোপুরি পুনঃচেষ্টা করে, ক্যাশ সৎ থাকে' },
          { en: 'Two RUNs are always faster', bn: 'দুই RUN সবসময় দ্রুত' },
        ],
        answer: 1,
        hint: { en: 'Each RUN is a checkpoint; choose where honesty must restart.', bn: 'প্রতি RUN এক চেকপয়েন্ট; সততা কোথা থেকে ফেরা শুরু হবে তা ঠিক করুন।' },
        explanation: { en: 'update-then-install pairs belong to one layer so an invalidated build redoes BOTH, never a stale package list with a fresh install.', bn: 'update-তারপর-install জোড়া এক লেয়ারের, যাতে অবৈধ বিল্ড দুটোই আবার করে — বাসি প্যাকেজ-তালিকায় তাজা ইনস্টল কখনো নয়।' },
      },
      {
        id: 'docker-mastery-q3',
        kind: 'mcq',
        topic: 'user',
        question: { en: 'Running the app as root inside a container mainly risks…', bn: 'কন্টেইনারের ভেতরে অ্যাপ রুট হিসেবে চালালে মূল ঝুঁকি…' },
        options: [
          { en: 'Slower startup', bn: 'ধীর সূচনা' },
          { en: 'Container-escape and host-file writes inherit root semantics — the blast radius of any RCE becomes the whole mount namespace', bn: 'কন্টেইনার-এস্কেপ ও হোস্ট-ফাইল-লেখা রুট-সিমান্টিক্স পায় — যেকোনো RCE-এর বিস্ফোরণ-ব্যাসার্ধ হয় পুরো মাউন্ট-নেমস্পেস' },
          { en: 'Image size increases', bn: 'ইমেজ-আকার বাড়ে' },
        ],
        answer: 1,
        hint: { en: 'Namespaces isolate VIEW; they do not downgrade UID 0 semantics on shared resources.', bn: 'Namespace বিচ্ছিন্ন করে দৃশ্য; ভাগাকৃত সম্পদে UID 0 সিমান্টিক্স আনয়ন করে না।' },
        explanation: { en: 'USER node + drop capabilities + read-only rootfs = the standard trio that shrinks blast radius.', bn: 'USER node + ক্ষমতা-বর্জন + রিড-অনলি rootfs = বিস্ফোরণ-ব্যাসার্ধ কমানো মানক-ত্রয়ী।' },
      },
      {
        id: 'docker-mastery-q4',
        kind: 'mcq',
        topic: 'debug',
        question: { en: 'SIGTERM handlers never fire on deploy; ps shows /bin/sh -c as PID 1. The one-line fix is…', bn: 'ডিপ্লয়ে SIGTERM হ্যান্ডলার কখনো চলে না; ps-এ /bin/sh -c হলো PID 1। এক-লাইনের সমাধান…' },
        options: [
          { en: 'Add more memory', bn: 'মেমরি বাড়ান' },
          { en: 'Switch CMD to exec form: CMD ["node", "dist/server.js"]', bn: 'CMD-কে exec-রূপে দিন: CMD ["node", "dist/server.js"]' },
          { en: 'Install systemd inside the container', bn: 'কন্টেইনারে systemd ইনস্টল করুন' },
        ],
        answer: 1,
        hint: { en: 'Remove the shell wrapper; let the app own PID 1 (and pair with --init for zombie duty).', bn: 'শেল-মোড়ক সরান; অ্যাপকে দিন PID 1 এর দায়িত্ব (জম্বি-দায়ে যোগ --init)।' },
        explanation: { en: 'One pair of brackets changes the signal path from eaten to delivered.', bn: 'এক জোড়া বন্ধনী সিগন্যাল-পথ বদলে দেয় — গিলে ফেলা থেকে পৌঁছে-দেওয়ায়।' },
      },
    ],
  },
  nextLesson: { slug: 'the-layer-ledger', title: { en: 'The Layer Ledger: images, tags, digests — every byte accounted', bn: 'লেয়ার-খাতা: ইমেজ, ট্যাগ, ডাইজেস্ট — প্রতি বাইট হিসাবকৃত' } },
};
