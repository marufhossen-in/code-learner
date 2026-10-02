import type { Lesson } from '../../../lib/types';

export const hardenedManifestLesson: Lesson = {
  slug: 'the-hardened-manifest',
  tech: 'docker',
  title: {
    en: 'Hardened Manifest — Seven lessons priced the box, the cache, the layer',
    bn: 'শক্তকৃত-ম্যানিফেস্ট: সইকৃত-বিহীন কিছুই চলে না'
  },
  summary: {
    en: 'Seven lessons priced the box, the cache, the layer, the exit, the byte, the name, and the fleet; the eighth signs the manifest that runs all of it in hostile territory. First the THREAT POSTURE: a container is isolation-as-a-library, NOT a sandbox — one shared kernel means every container escape is a kernel bug away, so the discipline is blast-radius arithmetic, not safety folklore. Second NON-ROOT AS DEFAULT: USER with a numeric UID in the image, --user on the run line, capabilities dropped (--cap-drop ALL, add back only what is named), no-new-privileges armed. Root in a container is root on the road to the host, and lodges in the same budget everywhere. Third READ-ONLY + TMPFS: --read-only makes the union stack immutable at runtime (writes die at the policy layer, before any exploit needs them), with tmpfs sized for the few paths that must write. Fourth CEILINGS AS THE LOOP LESSON IN CGROUP CLOTHES: --memory and --cpus make the kernel enforce the budget your loop-ledger measured — and the OOM killer becomes a named, inspectable verdict (.State.OOMKilled) instead of machine-wide roulette. Fifth SECRETS THAT NEVER TOUCH ENV: build-time secrets via --secret mounts (never persisted to layers), runtime secrets via mounted files or the orchestrator’s store — the dependency-ledger’s provenance vow applied to credentials. Sixth THE SIGNED SUPPLY CHAIN: SBOM generation, trivy scanning with severity gates, and deployment strictly by digest — the manifest’s last column. The debug file: the OOM that killed the wrong process — a JVM-sized heap inside a 512MB container, kernel roulette at 2 a.m., fixed by ceiling arithmetic that fits inside the cgroup. Carried sentence: THE MANIFEST RUNS NOTHING IT DID NOT SIGN.',
    bn: 'সাত পাঠ মূল্য দিয়েছে বাক্স, ক্যাশ, লেয়ার, প্রস্থান, বাইট, নাম আর বহর; অষ্টম পাঠ সই করে সেই ম্যানিফেস্ট, যা সবকিছু চালায় বিপজ্জনক-ভূমিতে। প্রথম হুমকি-ভঙ্গি: কন্টেইনার হলো লাইব্রেরি-রূপী-বিচ্ছিন্নতা, স্যান্ডবক্স নয় — একটি ভাগাকৃত-কার্নেল মানে প্রতি কন্টেইনার-পালাবার পথ একটি কার্নেল-বাগ দূরে, তাই শৃঙ্খলা হলো বিস্ফোরণ-ব্যাসার্ধ-পাটিগণিত, নিরাপত্তা-লোককথা নয়। দ্বিতীয় ডিফল্টরূপে অ-রুট: ইমেজে সাংখ্যিক-UID দিয়ে USER, run-পঙ্‌ক্তিতে --user, সামর্থ্য বাদকৃত (--cap-drop ALL, ফেরত কেবল নামকৃতটি), no-new-privileges সশস্ত্র — কন্টেইনারে রুট হলো হোস্টের পথে রুট, আর সর্বত্র একই বাজেটে দাখিল। তৃতীয় রিড-অনলি + TMPFS: --read-only রানটাইমে ইউনিয়ন-স্তূপ অপরিবর্তনীয় করে (লেখা মরে নীতি-স্তরে, যে-কোনো শোষণের প্রয়োজনের আগে), tmpfs মাপা সেই কয়েকটি পথের জন্য, যাদের লেখতেই হয়। চতুর্থ CGROUP-পোশাকে-লুপ-পাঠরূপে ছাদ: --memory আর --cpus কার্নেল দিয়ে জারি করায় সেই বাজেট, যা আপনার লুপ-খাতা মেপেছিল — আর OOM-কিলার হয়ে যায় নামকৃত, পরিদর্শনযোগ্য-রায় (.State.OOMKilled), মেশিন-ব্যাপী টসের বদলে। পঞ্চম ENV-ছোঁয়া নয় এমন গোপনীয়তা: --secret-মাউন্টে বিল্ড-কালীন গোপনীয়তা (লেয়ারে কখনো পড়ে না), মাউন্টকৃত-ফাইল বা অর্কেস্ট্রেটর-ভান্ডারে রানটাইম-গোপনীয়তা — পরিচয়পত্রে প্রয়ুক্ত নির্ভরতা-খাতার উৎপত্তি-শপথ। ষষ্ঠ সইকৃত সরবরাহ-শৃঙ্খল: SBOM-উৎপাদন, তীব্রতা-ফাটকসহ trivy-স্ক্যান, আর কঠোরভাবে ডাইজেস্টে-ডিপ্লয়মেন্ট — ম্যানিফেস্টের শেষ কলাম। ডিবাগ-ফাইল: ভুল-প্রসেস-হত্যাকারী OOM — 512MB-কন্টেইনারের ভেতরে JVM-মাপা হিপ, ভোর ২টায় কার্নেল-টস, cgroup-এর ভেতরে বসানো ছাদ-পাটিগণিতে মেরামত। বহনযোগ্য বাক্য: ম্যানিফেস্ট কিছুই চালায় না, যা সই করে না।',
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT hardening is, as a manifest', bn: 'শক্তকরণ কী, ম্যানিফেস্টরূপে' } },
    {
      type: 'para',
      text: {
        en: 'Hardening transforms container runtime security from informal advice into verifiable constraints. When you deploy containers into production, the Linux kernel must enforce explicit security boundaries. First, specify a non-root USER using a numeric user identifier (`UID`) at build time to prevent unauthorized host elevation. Second, drop all unnecessary Linux capabilities with --cap-drop ALL, adding back only what is required. Third, enforce --security-opt no-new-privileges:true to disable binary privilege escalation. Finally, configure --read-only filesystems and cgroup resource limits to minimize attack surfaces.',
        bn: 'কন্টেইনারের নিরাপত্তা নিশ্চিত করতে হার্ডেনিং কেবল কোনো উপদেশ নয়, বরং কার্নেল দ্বারা যাচাইযোগ্য বাধ্যবাধকতা। প্রোডাকশনে কন্টেইনার চালনার সময় লিনাক্স কার্নেল দিয়ে সুস্পষ্ট নিরাপত্তা সীমা নির্ধারণ করা আবশ্যক। প্রথমত, কোনো অবস্থাতেই ডিফল্ট রুট ব্যবহার না করে নির্দিষ্ট সাংখ্যিক UID দিয়ে সাধারণ ব্যবহারকারী ঘোষণা করুন। দ্বিতীয়ত, --cap-drop ALL দিয়ে সব অতিরিক্ত কার্নেল সুবিধা বাতিল করুন। তৃতীয়ত, ভেতরের কোনো বাইনারি যেন সুবিধা বাড়াতে না পারে সেজন্য no-new-privileges চালু করুন। আর আক্রমণ প্রতিরোধে ফাইলসিস্টেমকে রিড-অনলি হিসেবে মাউন্ট করুন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'USER (numeric UID)', def: { en: 'The build-time identity vow: no root by default, no name-resolution surprises at run. UID numbers are the contract.', bn: 'বিল্ড-কালীন পরিচয়-শপথ: ডিফল্টে রুট নয়, চলাকালে নাম-রূপান্তর-বিস্ময় নয়। UID-সংখ্যা-ই চুক্তি।' } },
        { term: '--cap-drop ALL', def: { en: 'Capabilities are root sliced into privileges; the default is zero, the add-backs are named (NET_BIND_SERVICE and little else).', bn: 'সামর্থ্য হলো বিশেষাধিকারে-কাটা রুট; ডিফল্ট শূন্য, ফেরত কেবল নামকৃত (NET_BIND_SERVICE আর বড়জোর সামান্য)।' } },
        { term: 'no-new-privileges', def: { en: 'The escalation ban: setuid binaries inside the container become inert — the sharp edge removed at policy level.', bn: 'উন্নয়ন-নিষেধ: কন্টেইনারের ভেতরের setuid-বাইনারি হয়ে যায় নিষ্ক্রিয় — নীতি-স্তরে সরানো ধারাল-ধার।' } },
        { term: '--read-only', def: { en: 'The union stack rendered immutable at runtime; writes survive only inside declared tmpfs paths — policy before resource.', bn: 'রানটাইমে ইউনিয়ন-স্তূপ অপরিবর্তনীয়কৃত; লেখা টেকে কেবল ঘোষিত tmpfs-পথে — সম্পদের আগে নীতি।' } },
        { term: '--memory / --cpus', def: { en: 'Kernel-enforced budgets (cgroup v2): the loop-ledger’s milliseconds restated as hard ceilings, with OOMKilled as the named verdict.', bn: 'কার্নেল-জারিকৃত বাজেট (cgroup v2): লুপ-খাতার মিলিসেকেন্ড, পুনব্যক্ত কঠোর-ছাদরূপে, OOMKilled-থাকে নামকৃত-রায়রূপে।' } },
        { term: 'secret mounts', def: { en: 'Build: docker build --secret (never lands in a layer); runtime: mounted files or an orchestrator store — credentials with provenance, never ENV adjectives.', bn: 'বিল্ড: docker build --secret (কখনো লেয়ারে পড়ে না); রানটাইম: মাউন্টকৃত-ফাইল বা অর্কেস্ট্রেটর-ভান্ডার — উৎপত্তিসহ পরিচয়পত্র, ENV-বিশেষণ কখনো নয়।' } },
        { term: 'SBOM + scan gate', def: { en: 'The ingredient list plus the severity verdict: trivy fails the build above a declared CVE line, and the SBOM makes the next incident answerable in minutes.', bn: 'উপাদান-তালিকা যোগ তীব্রতা-রায়: trivy ঘোষিত-CVE-রেখার উপরে বিল্ড ব্যর্থ করায়, আর SBOM পরের ঘটনার উত্তর মিনিটে-যোগ্য করে।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY the manifest is arithmetic, not hygiene', bn: 'কেন ম্যানিফেস্ট হলো পাটিগণিত, স্বাস্থ্যবিধি নয়' } },
    {
      type: 'para',
      text: {
        en: 'Each line of the manifest prices a bug class this platform already taught you to see. NON-ROOT prices the escape class: one shared kernel means a root process inside a container that finds a kernel bug is root on the HOST. A numbered-UID process that finds the same bug is a local nobody with no filesystem of interest. The same exploit, two invoices, differing by one line of Dockerfile. READ-ONLY prices the persistence class: every webshell playbook begins by writing a file; with the stack immutable the write dies before the exploit matures. An attacker forced to live purely in memory is an attacker whose tooling never ships. CEILINGS price the noisy-neighbor class: without --memory, one leak becomes every container’s outage (the kernel picks victims machine-wide); with ceilings, the leak becomes ONE named OOMKilled verdict in ONE service’s register row. The loop-ledger’s stall-budget translated from latency to death-sentences. SECRETS-AS-FILES price the leak class: ENV values are inspectable by every process in the namespace and archived by crash reporters world-wide; mounted files are readable by exactly the UID you declared. The dependency-ledger’s provenance vow applied to credentials, where the “supply chain” is a file path with an owner. And DIGEST+SCAN price the drift class: bytes are the ones the SBOM describes and the scan judged — nothing inside the manifest ever asks you to trust a name.',
        bn: 'ম্যানিফেস্টের প্রতি পঙ্‌ক্তি একটি বাগ-শ্রেণি মূল্য দেয়, যা দেখতে এই প্ল্যাটফর্ম আপনাকে ইতিমধ্যে শিখিয়েছে। অ-রুট মূল্য দেয় পালানো-শ্রেণি: একটি ভাগাকৃত-কার্নেল মানে কার্নেল-বাগ পাওয়া ভেতরের রুট-প্রসেস হলো হোস্টের রুট; একই বাগ পাওয়া সংখ্যাযুক্ত-UID-প্রসেস হলো স্থানীয়-নগণ্য, আগ্রহের কোনো ফাইলসিস্টেম ছাড়া — একই শোষণ, দুই চালান, পার্থক্য Dockerfile-এর এক পঙ্‌ক্তির। রিড-অনলি মূল্য দেয় অবস্থায়ন-শ্রেণি: প্রতি ওয়েবশেল-পদ্ধতি শুরু হয় একটি ফাইল লিখে; স্তূপ অপরিবর্তনীয় থাকলে লেখা মরে শোষণ পরিণত হওয়ার আগে — খাঁটি-মেমরিতে বাঁচতে বাধ্য আক্রমণকারী হলো এমন আক্রমণকারী, যার টুলিং কখনো পাঠানো হয় না। ছাদ মূল্য দেয় কোলাহলী-প্রতিবেশী-শ্রেণি: --memory ছাড়া, একটি লিক হয়ে যায় প্রতি কন্টেইনারের বিভ্রাট (কার্নেল মেশিন-ব্যাপী শিকার বাছে); ছাদসহ, লিক হয় ONE সার্ভিসের রওকদারি-সারিতে ONE নামকৃত OOMKilled-রায় — লুপ-খাতার স্থবিরতা-বাজেট, ল্যাটেন্সি থেকে মৃত্যুদণ্ডে অনূদিত। ফাইলরূপে-গোপনীয়তা মূল্য দেয় ফাঁস-শ্রেণি: ENV-মান নেমস্পেসের প্রতি প্রসেসে পরিদর্শনযোগ্য আর বিশ্বজুড়ে ক্র্যাশ-রিপোর্টে সংরক্ষিত; মাউন্টকৃত-ফাইল পাঠযোগ্য হুবহু আপনার-ঘোষিত UID-এর জন্য — পরিচয়পত্রে প্রয়ুক্ত নির্ভরতা-খাতার উৎপত্তি-শপথ, যেখানে “সরবরাহ-শৃঙ্খল” হলো মালিকসহ একটি ফাইল-পথ। আর ডাইজেস্ট+স্ক্যান মূল্য দেয় প্রবাহ-শ্রেণি: বাইট হলো সেটাই, যা SBOM বর্ণনা করে ও স্ক্যান রায় দিয়েছে — ম্যানিফেস্টের ভেতরের কিছুই আপনাকে কোনো নামে ভরসা করতে বলে না।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to sign the manifest, line by line', bn: 'কীভাবে ম্যানিফেস্ট সই করবেন, পঙ্‌ক্তি ধরে' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Identity at build, restated at run: USER 10001 in the Dockerfile (numeric — never a name the base might redefine), and the run line repeats --user 10001:10001 so the vow is visible without opening the image. The volume lesson’s chown-once ritual prices the write paths this UID owns.', bn: 'পরিচয় বিল্ডে, পুনর্ঘোষণ চালে: Dockerfile-এ USER 10001 (সাংখ্যিক — এমন নাম কখনো নয়, যা বেস পুনঃসংজ্ঞায়িত করতে পারে), আর run-পঙ্‌ক্তি পুনরায় বলে --user 10001:10001, যাতে শপথ ইমেজ না খুলেই দৃশ্যমান; ভলিউম-পাঠের একবার-chown-রীতি সেই লেখন-পথের মূল্য দেয়, যা এই UID-এর মালিকানায়।' },
        { en: 'Strip the privilege floor: --cap-drop ALL then add back only the named one (-cap-add NET_BIND_SERVICE if the port is low); --security-opt no-new-privileges:true as the second door. The pair costs one line and retires setuid surprises as a class.', bn: 'বিশেষাধিকার-তল ছাঁটুন: --cap-drop ALL তারপর ফেরত কেবল নামকৃতটি (--cap-add NET_BIND_SERVICE, পোর্ট নিচু হলে); দ্বিতীয় দরজারূপে --security-opt no-new-privileges:true — এই জুটির খরচ এক পঙ্‌ক্তি, বাতিল করে setuid-বিস্ময় শ্রেণি।' },
        { en: 'Freeze the filesystem at runtime: --read-only plus --tmpfs /tmp:rw,noexec,nosuid,size=64m for the declared scratch paths — then let the app CRASH once in staging telling you which path it really writes. Every correction is a policy entry, never a widening exemption.', bn: 'রানটাইমে ফাইলসিস্টেম হিমায়িত করুন: --read-only যোগ --tmpfs /tmp:rw,noexec,nosuid,size=64m, ঘোষিত স্ক্র্যাচ-পথের জন্য — তারপর অ্যাপকে একবার স্টেজিংয়ে বিপর্যস্ত হতে দিন, বলে দিক কোন পথে তা আসলে লেখে; প্রতি সংশোধন একটি নীতি-এন্ট্রি, কখনোই প্রশস্তকরণ-ছাড় নয়।' },
        { en: 'Arithmetic budgets, kernel-enforced: --memory 512m --cpus 1.0 --pids-limit 256 — then right-size the app to the ceiling (node --max-old-space-size=400 inside a 512m container: heap leaves room for stacks, buffers. And the runtime’s own walls) so the OOM verdict lands on the allocator, not the machine.', bn: 'পাটিগণিত-বাজেট, কার্নেল-জারিকৃত: --memory 512m --cpus 1.0 --pids-limit 256 — তারপর অ্যাপকে ছাদমতো মাপুন (512m-কন্টেইনারের ভেতরে node --max-old-space-size=400: হিপ ছাড়ে জায়গা স্ট্যাক, বাফার আর রানটাইমের নিজের প্রাচীরের), যাতে OOM-রায় পড়ে বরাদ্দকারীর উপর, মেশিনের নয়।' },
        { en: 'Secrets with provenance: builds use RUN --mount=type=secret,id=npmrc … so tokens never persist to a layer; runtimes read /run/secrets/<name> owned by the declared UID. Then grep the image config for stray ENV secrets and the git history for the seam that failed.', bn: 'উৎপত্তিসহ গোপনীয়তা: বিল্ড ব্যবহার করে RUN --mount=type=secret,id=npmrc …, যাতে টোকেন কখনো লেয়ারে না পড়ে; রানটাইম পড়ে /run/secrets/<name>, মালিকানা ঘোষিত-UID-এ — তারপর অনুসন্ধান করুন ইমেজ-কনফিগে ভগ্ন-ENV-গোপনীয়তা, আর git-ইতিহাসে সেই ব্যর্থ-সেলাই।' },
        { en: 'The signed supply chain, three verbs: docker buildx build --sbom=true, trivy image --severity HIGH,CRITICAL --exit-code 1 myapp:1.2 (the severity gate in CI, not folklore), and the deploy line printed as myapp@sha256:… — custody, end to end.', bn: 'সইকৃত সরবরাহ-শৃঙ্খল, তিন ক্রিয়া: docker buildx build --sbom=true, trivy image --severity HIGH,CRITICAL --exit-code 1 myapp:1.2 (CI-তে তীব্রতা-ফাটক, লোককথা নয়), আর ডিপ্লয়-পঙ্‌ক্তি মুদ্রিত myapp@sha256:… রূপে — তত্ত্বাবধান, প্রান্ত থেকে প্রান্ত।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the manifest in the lab', bn: 'দৃশায়ন: ল্যাবে ম্যানিফেস্ট' } },
    { type: 'visual', id: 'docker' },
    {
      type: 'para',
      text: {
        en: 'Replay the hardened build in the Docker Lab: multi-stage stamping as before, but now the final stage shows USER before CMD, the process tree boots under the numeric UID. And the lab’s verdict column adds the run-line vows as green ticks — cap-drop, read-only, ceiling. Each one a line the lab can SEE because the daemon enforces it.',
        bn: 'Docker Lab-এ শক্তকৃত-বিল্ড পুনরাভিনয় করুন: আগের মতো মাল্টি-স্টেজ-ছাপ, কিন্তু এবার চূড়ান্ত-স্টেজে CMD-এর আগে USER, প্রসেস-বৃক্ষ বুট হয় সাংখ্যিক-UID-এ, আর ল্যাবের রায়-কলামে যোগ হয় run-পঙ্‌ক্তি-শপথ সবুজ-টিক রূপে — cap-drop, read-only, ছাদ. প্রতিটি এমন পঙ্‌ক্তি, যা ল্যাব দেখতে পারে, কারণ ডিমন তা জারি করে।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: cgroups, capabilities, and the kill ledger', bn: 'অভ্যন্তরীণ: cgroup, সামর্থ্য, আর হত্যা-খাতা' } },
    {
      type: 'para',
      text: {
        en: 'Four mechanisms, one ledger. CGROUPS V2: every --memory writes memory.max for the container’s group, every --cpus a cpu.max quota pair — budgets the scheduler enforces per-group. So a container that over-allocates gets its own pages reclaimed first and, past the ceiling, its OOM score computed INSIDE the group (the debug file measures exactly this isolation). Docker inspect .State.OOMKilled reads the verdict forever. And pids.max from --pids-limit retires fork bombs as a free bonus. CAPABILITIES: root’s privileges arrive as a bitmask (the bounding set from the image, filtered by --cap-drop/--cap-add) — a net_bind_service-only process can open :443 but cannot mount filesystems, load modules, or ptrace neighbors. No-new-privileges then clamps execve so no future binary raises the mask either. READ-ONLY: the daemon mounts the container’s rootfs with MS_RDONLY before PID 1 starts, so writes fail with EROFS at the syscall layer. Policy that executes BELOW the code it protects, immune to whatever the code is tricked into trying. Tmpfs mounts are carved as named exceptions, sized, so even the writable carve-outs carry a budget. THE KILL LEDGER: every stop is SIGTERM-grace-SIGKILL as the runtime lesson priced, every resource death is OOMKilled:true plus exit 137, and every readiness verdict is the health gate from the compose lesson. The hardened manifest reads as one page because it is the SAME three ledgers (image, runtime, resource) finally signed in one place.',
        bn: 'চার প্রক্রিয়াটত্ত্ব, একটি খাতা। CGROUPS V2: প্রতি --memory লেখে কন্টেইনার-গোষ্ঠীর memory.max, প্রতি --cpus একটি cpu.max-কোটা-যুগল — বাজেট, যা সূচক গোষ্ঠীপ্রতি জারি করে। তাই অতি-বরাদ্দকারী কন্টেইনার আগে নিজের পাতা ফেরত হারায়, আর ছাদ পেরুলে তার OOM-স্কোর গণিত হয় গোষ্ঠীর ভেতরে (ডিবাগ-ফাইল হুবহু এই বিচ্ছিন্নতা মাপে); docker inspect .State.OOMKilled চিরকাল রায় পড়ে। আর --pids-limit-এর pids.max ফোর্ক-বোমা বিনামূল্যে-বোনাসরূপে বাতিল করে। সামর্থ্য: রুটের বিশেষাধিকার আসে বিটমাস্করূপে (ইমেজের বাউন্ডিং-সেট, --cap-drop/--cap-add-এ ছাঁকা) — কেবল-net_bind_service-ধারী প্রসেস খুলতে পারে :443, কিন্তু পারে না ফাইলসিস্টেম মাউন্ট, মডিউল-লোড বা প্রতিবেশী ptrace; no-new-privileges তারপর কONSE দেয় execve, যাতে ভবিষ্যৎের কোনো বাইনারি মাস্কও তুলতে না পারে। রিড-অনলি: ডিমন মাউন্ট করে কন্টেইনারের রুটফস MS_RDONLY-তে, PID 1 শুরুর আগে, তাই লেখা ব্যর্থ হয় EROFS নিয়ে সিসকল-স্তরে — এমন নীতি, যা সে-সুরক্ষিত কোডের নিচে কার্যকর হয়। কোড যা-ই চালিত হতে প্ররোচিত হোক তার প্রতি অনাক্রম্য; tmpfs-মাউন্ট কাটা হয় নামকৃত-ছাড়রূপে, মাপসহ, তাই লিখন-মুক্ত-কোটাও বাজেট বহন করে। হত্যা-খাতা: প্রতি স্টপ হলো SIGTERM-ছাড়-SIGKILL, রানটাইম-পাঠের মূল্য অনুযায়ী, প্রতি সম্পদ-মৃত্যু OOMKilled:true যোগ exit 137, আর প্রতি প্রস্তুতি-রায় কম্পোজ-পাঠের স্বাস্থ্য-ফাটক — শক্তকৃত-ম্যানিফেস্ট এক পাতায় পড়ে, কারণ তা সেই একই তিন খাতা (ইমেজ, রানটাইম, সম্পদ), অবশেষে এক জায়গায় সইকৃত।',
      },
    },
    {
      type: 'code',
      lang: 'dockerfile',
      filename: 'Dockerfile + run line',
      caption: { en: 'Stage one builds; stage two ships armored: identity, freeze, budget, custody — every line signed.', bn: 'প্রথম স্টেজ বানায়; দ্বিতীয় পাঠায় সাঁজোয়া: পরিচয়, হিমায়ন, বাজেট, তত্ত্বাবধান — প্রতি পঙ্‌ক্তি সইকৃত।' },
      code: `# ---------- stage 1: the build village ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN --mount=type=secret,id=npmrc \\
    NPM_CONFIG_USERCONFIG=/run/secrets/npmrc npm ci --omit=dev
COPY . .
RUN npm run build

# ---------- stage 2: the armored artifact ----------
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /srv
COPY --from=build /app/dist ./dist
USER 10001
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=3s --retries=3 \\
  CMD wget -qO- http://127.0.0.1:3000/readyz || exit 1
CMD ["node", "--max-old-space-size=400", "dist/server.js"]

# ---------- the deploy line: every vow visible ----------
# docker buildx build --sbom=true -t myapp:1.2 .
# trivy image --severity HIGH,CRITICAL --exit-code 1 myapp:1.2
# docker run -d --name api --read-only \\
#   --tmpfs /tmp:rw,noexec,nosuid,size=64m \\
#   --user 10001:10001 --cap-drop ALL \\
#   --security-opt no-new-privileges:true \\
#   --memory 512m --cpus 1.0 --pids-limit 256 \\
#   --secret source=api_token,target=api_token \\
#   -p 8080:3000 --restart unless-stopped \\
#   myapp@sha256:9f2c…`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the manifest bought', bn: 'ফলাফল: ম্যানিফেস্ট যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'line signed', bn: 'সইকৃত-পঙ্‌ক্তি' }, { en: 'the verdict it buys', bn: 'তার কেনা রায়' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['USER + cap-drop + no-new-privs', { en: 'escapes become local-nobodies; setuid a dead letter', bn: 'পালানো হয় স্থানীয়-নগণ্য; setuid মৃত-চিঠি' }, { en: 'blast radius priced in one Dockerfile line', bn: 'বিস্ফোরণ-ব্যাসার্ধ মূল্যায়িত এক Dockerfile-পঙ্‌ক্তিতে' }, 'root-everywhere as the estate’s default identity'],
        ['read-only + tmpfs budget', { en: 'webshell persistence dies at EROFS', bn: 'ওয়েবশেল-অবস্থায়ন মরে EROFS-এ' }, { en: 'write paths reviewed as policy entries, never widened', bn: 'লেখন-পথ পর্যালোচিত নীতি-এন্ট্রি হিসেবে, প্রশস্তকৃত নয়' }, 'the writable-rootfs atlas nobody mapped'],
        ['memory/cpu ceilings', { en: 'one service’s leak becomes one named OOMKilled', bn: 'এক সেবার লিক হয় এক নামকৃত OOMKilled' }, { en: 'noisy neighbors converted to register rows', bn: 'কোলাহলী-প্রতিবেশী রূপান্তরিত রওকদারি-সারিতে' }, 'the machine-wide kernel roulette at 2 a.m.'],
        ['secrets with provenance', { en: 'env dumps contain zero credentials', bn: 'env-ডাম্পে শূন্য পরিচয়পত্র' }, { en: 'layers carry no ghosts of tokens past', bn: 'লেয়ার বহন করে না অতীত-টোকেনের ভূত' }, 'the archived crash report full of API keys'],
        ['sbom + scan + digest', { en: 'every running byte maps to an ingredient', bn: 'প্রতি চলমান-বাইট মানচিত্রিত একটি উপাদানে' }, { en: 'incident answers: affected? where? — in minutes', bn: 'ঘটনার উত্তর: আক্রান্ত? কোথায়? — মিনিটে' }, 'the three-week inventory after the next log4j'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the OOM that killed the wrong process', bn: 'ডিবাগ-ফাইল: ভুল-প্রসেস-হত্যাকারী OOM' } },
    {
      type: 'para',
      text: {
        en: 'The host ran three containers: the ledger API, a redis cache, and a batch worker with a memory leak. At 2:11 a.m. the API started returning 499 status codes. At 2:14 a.m. the kernel OOM killer fired and terminated the API. Because without cgroup budgets the killer scores by whole-machine heuristics, and the API was the largest well-behaved process on the box. Postmortem fixes: (a) the worker received --memory 768m so its leak terminates safely at 768MB; (b) the API received --memory 512m with max old space set to 400MB; and (c) monitoring alerts were added for OOM events.',
        bn: 'হোস্টে ৩টি কন্টেইনার চলত: লেজার API, একটি redis ক্যাশ, এবং একটি ব্যাচ কর্মী যার মেমরি লিক হচ্ছিল। ভোর ২:১১ সময়ে API দিতে শুরু করল 499 স্ট্যাটাস কোড। ভোর ২:১৪ সময়ে কার্নেলের OOM কিলার সক্রিয় হয়ে API বন্ধ করে দিল। cgroup বাজেট না থাকায় কার্নেল সারা মেশিনের হিউরিস্টিক দেখে বৃহত্তম শিষ্ট প্রসেসটিকেই বন্ধ করে দেয়। সমাধানের পদক্ষেপ: (ক) কর্মীকে --memory 768m দেওয়া হলো যাতে এর লিক 768MB এর মধ্যেই সীমাবদ্ধ থাকে; (খ) API কে --memory 512m বরাদ্দ করে মেমরি 400MB নির্ধারণ করা হলো; এবং (গ) OOM সতর্কবার্তা যুক্ত করা হলো।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: manifests with badges', bn: 'বাস্তব-জগৎ: ব্যাজধারী ম্যানিফেস্ট' } },
    {
      type: 'list',
      items: [
        { en: 'Kubernetes security contexts are this page in cluster spelling: runAsUser/runAsNonRoot, allowPrivilegeEscalation: false, readOnlyRootFilesystem, capabilities.drop: [\"ALL\"], resources.limits — the same six vows, one control plane fluent.', bn: 'Kubernetes-নিরাপত্তা-প্রসঙ্গ হলো ক্লাস্টার-বানানে এই পাতা: runAsUser/runAsNonRoot, allowPrivilegeEscalation: false, readOnlyRootFilesystem, capabilities.drop: [\"ALL\"], resources.limits — সেই একই ৬টি শপথ, ১টি কন্ট্রোল-প্লেন-সাবলীলতায়।' },
        { en: 'gVisor, Kata and Firecracker exist because ONE shared kernel is the bet this lesson prices: hostile multi-tenancy pays for a second boundary (user-space kernel, micro-VM) — the blast-radius arithmetic priced in virtualization tax.', bn: 'gVisor, Kata আর Firecracker-এর অস্তিত্ব কারণ ONE ভাগাকৃত-কার্নেল-ই সেই বাজি, যা এই পাঠ মূল্য দেয়: বিপজ্জনক বহুভোগী-ভাড়া দেয় দ্বিতীয়-সীমান্তের (ব্যবহারকারী-স্থান-কার্নেল, মাইক্রো-VM) — ভার্চুয়ালাইজেশন-করে-পরিশোধিত বিস্ফোরণ-ব্যাসার্ধ-পাটিগণিত।' },
        { en: 'Distroless and scratch bases are the manifest’s first column taken to its end: no shell, no package manager, no artillery for the escapee — the image as a signed list of exactly the bytes the process needs.', bn: 'Distroless আর scratch-বেস হলো ম্যানিফেস্টের প্রথম-কলাম, শেষ পর্যন্ত নেওয়া: শেল নেই, প্যাকেজ-ম্যানেজার নেই, পলাতকের জন্য গোলাবারুদ নেই — ইমেজ সইকৃত-তালিকারূপে, হুবহু যে বাইট প্রসেসের লাগে।' },
        { en: 'Supply-chain frameworks (SLSA, sigstore/cosign) are the custody trip beyond the registry: build provenance signed, artifacts verified at admission — the tag/digest lesson’s truth register extended to who built it, from what source, proof attached.', bn: 'সরবরাহ-শৃঙ্খল-কাঠামো (SLSA, sigstore/cosign) হলো রেজিস্ট্রি-পেরোনো তত্ত্বাবধান-ভ্রমণ: বিল্ড-উৎপত্তি সইকৃত, আর্টিফ্যাক্ট প্রবেশে যাচাইকৃত — ট্যাগ/ডাইজেস্ট-পাঠের সত্য-রওকদারি প্রসারিত: কে বানাল, কোন সোর্স থেকে, প্রমাণ সংযুক্ত।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the hub, recited as one manifest', bn: 'পরবর্তী: হাব, একটি ম্যানিফেস্ট হিসেবে পাঠ' } },
    {
      type: 'para',
      text: {
        en: 'The hub is complete: thinking → craftsmanship → ledger → register → economy → bridges → fleet → manifest — eight lessons, one rhythm. Its summary unites our Docker principles: the box is a process with blinders, and the cache is a contract. The layer owns every byte, and the register owns every exit. State that survives lives outside. Names form the contract and ports are explicitly declared. The fleet is defined in one file, and the manifest runs nothing it did not sign. Aim next at security-fundamentals to explore threat-model defaults, or system-design to scale containers across fleets.',
        bn: 'হাব সম্পূর্ণ: চিন্তন → কারিগরি → খাতা → রওকদারি → অর্থনীতি → সেতু → বহর → ম্যানিফেস্ট — আট পাঠ, এক ছন্দ। তার মূল শিক্ষা সংক্ষেপ করে: বাক্স হলো নিয়ন্ত্রিত প্রসেস, আর ক্যাশ হলো সুনির্দিষ্ট চুক্তি। লেয়ার প্রতি বাইটের হিসেব রাখে, আর রওকদারি প্রতি প্রস্থান নিয়ন্ত্রণ করে। স্থায়ী ডেটা কন্টেইনারের বাইরে সংরক্ষিত থাকে। নাম দিয়ে সার্ভিস সংযুক্ত হয় এবং পোর্ট স্পষ্টভাবে ঘোষিত থাকে। পুরো বহর একটি ফাইলে পরিচালিত হয়, এবং যাচাইকৃত উপাদান ছাড়া কিছুই রান করা হয় না।',
      },
    },
  ],
  exercises: [
    {
      id: 'docker-hard-ex1', kind: 'mcq', topic: 'ceilings',
      question: { en: 'A node service runs in a container with --memory 512m and node --max-old-space-size=1500. What happens under load — and which single arithmetic line fixes the class?', bn: 'একটি node-সেবা চলে --memory 512m-কন্টেইনারে, node --max-old-space-size=1500 সহ। ভারে কী ঘটবে — আর কোন একক পাটিগণিত-পঙ্‌ক্তি শ্রেণি মেরামত করে?' },
      options: [
        { en: 'the kernel OOM-kills the process the moment the cgroup ceiling is crossed — the heap was permitted 3× more than the box owns, so the verdict arrives as OOMKilled:true + exit 137. The fix is ceiling-minus-walls arithmetic: heap budget = 512m minus stacks, buffers and runtime walls (≈ --max-old-space-size=400)', bn: 'cgroup-ছাদ অতিক্রম হওয়া মাত্র কার্নেল OOM-কিল করে প্রসেস — হিপ পেয়েছিল বাক্সের মালিকানার ৩ গুণ অনুমতি, তাই রায় আসে OOMKilled:true + exit 137 রূপে; মেরামত ছাদ-বিয়োগ-প্রাচীর-পাটিগণিত: হিপ-বাজেট = 512m বিয়োগ স্ট্যাক, বাফার আর রানটাইম-প্রাচীর (≈ --max-old-space-size=400)' },
        { en: 'the container is silently throttled until load drops', bn: 'ভার কমা পর্যন্ত কন্টেইনার নিঃশব্দে থ্রটল হয়' },
        { en: 'the kernel kills redis instead, being the smaller process', bn: 'কার্নেল হত্যা করে redis-কে, ক্ষুদ্রতর প্রসেস হিসেবে' },
        { en: 'node automatically reads the cgroup limit and adjusts', bn: 'node সয়ংক্রিয়ভাবে cgroup-সীমা পড়ে মানিয়ে নেয়' },
      ],
      answer: 0,
      hint: { en: 'Who enforces --memory, and has node been told it exists?', bn: '--memory কে জারি করে, আর node-কে কি তার অস্তিত্ব বলা হয়েছে?' },
      explanation: { en: 'Ceilings are kernel verdicts; allocators must be TOLD. Budgets sized above the ceiling convert the leak protection itself into the crash report — the debug file’s exact shape, retired by one subtraction.', bn: 'ছাদ হলো কার্নেল-রায়; বরাদ্দকারীকে তা বলতে হয়। ছাদের উপরে মাপা বাজেট লিক-সুরক্ষাকেই রূপান্তর করে ক্র্যাশ-রিপোর্টে — ডিবাগ-ফাইলের হুবহু আকৃতি, এক বিয়োগে বাতিল।' },
    },
    {
      id: 'docker-hard-ex2', kind: 'predict', topic: 'read-only',
      question: { en: 'You ship --read-only with no tmpfs mounts, and staging now crashes the app with EROFS on startup. What did the policy just tell you — and what is the vow-shaped correction (not the exemption-shaped one)?', bn: 'আপনি পাঠালেন --read-only, কোনো tmpfs-মাউন্ট ছাড়াই, আর স্টেজিং এখন অ্যাপ বিপর্যস্ত করছে EROFS নিয়ে, সূচনায়। নীতি এইমাত্র কী বলল — আর শপথ-আকৃতির সংশোধন কী (ছাড়-আকৃতির নয়)?' },
      options: [
        { en: 'the app writes somewhere it never declared — the policy turned an invisible habit into a crash report. The correction is NAMING the write path as a sized tmpfs (--tmpfs /tmp:rw,noexec,nosuid,size=64m), one entry per true need, never removing --read-only', bn: 'অ্যাপ লেখে এমন জায়গায়, যা কখনো ঘোষণা করেনি — নীতি অদৃশ্য-অভ্যাসকে রূপান্তর করেছে ক্র্যাশ-রিপোর্টে; সংশোধন হলো লেখন-পথ নামকরণ, মাপসহ tmpfs-রূপে (--tmpfs /tmp:rw,noexec,nosuid,size=64m), প্রতি প্রকৃত-প্রয়োজনে একটি এন্ট্রি, --read-only কখনো অপসারণ নয়' },
        { en: 'read-only is incompatible with node — revert it', bn: 'read-only node-এর সাথে অসামঞ্জস্যপূর্ণ — তা প্রত্যাহার করুন' },
        { en: 'mount a bind over the whole rootfs to re-enable writes', bn: 'পুরো রুটফস-এর উপর বাইন্ড মাউন্ট করুন লেখা পুনঃচালু করতে' },
        { en: 'EROFS means the image digest is corrupted', bn: 'EROFS মানে ইমেজ-ডাইজেস্ট দূষিত' },
      ],
      answer: 0,
      hint: { en: 'The error is the policy working: what must every WRITE become under this vow?', bn: 'ত্রুটি হলো কাজরত-নীতি: এই শপথে প্রতি লেখাকে কী হতে হবে?' },
      explanation: { en: 'Read-only converts hidden write habits into startup confessions. Each true path becomes a declared, sized, noexec tmpfs entry — policy that grows by named entries, never by exemptions.', bn: 'রিড-অনলি রূপান্তর করে গোপন-লেখা-অভ্যাসকে সূচনা-স্বীকারোক্তিতে। প্রতি সত্যিকার-পথ হয় ঘোষিত, মাপকৃত, noexec tmpfs-এন্ট্রি — নীতি, যা বাড়ে নামকৃত-এন্ট্রিতে, ছাড়ে কখনো নয়।' },
    },
    {
      id: 'docker-hard-ex3', kind: 'mcq', topic: 'secret channels',
      question: { en: 'A private npm token is needed at BUILD time (npm ci against a private registry). Which channel keeps the token OUT of the image layers?', bn: 'BUILD-কালে একটি ব্যক্তিগত npm-টোকেন দরকার (ব্যক্তিগত-রেজিস্ট্রিতে npm ci)। কোন চ্যানেল টোকেনকে ইমেজ-লেয়ারের বাইরে রাখে?' },
      options: [
        { en: 'RUN --mount=type=secret,id=npmrc … with docker build --secret id=npmrc,src=./npmrc: the file mounts for the duration of ONE instruction and never persists to any layer — the provenance vow for build credentials', bn: 'RUN --mount=type=secret,id=npmrc … যোগ docker build --secret id=npmrc,src=./npmrc: ফাইল মাউন্ট হয় এক-নির্দেশনার-সময়ে আর কোনো লেয়ারে কখনো স্থায়ী হয় না — বিল্ড-পরিচয়পত্রের উৎপত্তি-শপথ' },
        { en: 'ARG NPM_TOKEN passed with --build-arg, deleted later', bn: 'ARG NPM_TOKEN, --build-arg দিয়ে দেওয়া, পরে মোছা' },
        { en: 'ENV NPM_TOKEN in stage one — stage two never copies it', bn: 'প্রথম স্টেজে ENV NPM_TOKEN — দ্বিতীয় স্টেজ তা কপি করে না' },
        { en: 'curl the token from a secrets manager during build', bn: 'বিল্ডের সময় সিক্রেটস-ম্যানেজার থেকে টোকেন curl করুন' },
      ],
      answer: 0,
      hint: { en: 'Which build artifact keeps history of every ARG — and which mount leaves no ghost?', bn: 'কোন বিল্ড-নথি প্রতি ARG-এর ইতিহাস রাখে — আর কোন মাউন্ট কোনো ভূত রাখে না?' },
      explanation: { en: 'ARG/ENV persist to image config history even when later instructions “delete” them (the layer lesson: deletion is a whiteout, not an erasure). Secret mounts exist exactly so credentials visit the build without citizenship in it.', bn: 'ARG/ENV ইমেজ-কনফিগ-ইতিহাসে টিকে থাকে, পরের নির্দেশনা “মুছলেও” (লেয়ার-পাঠ: মোছা হলো whiteout, নিশ্চিহ্ন নয়)। সিক্রেট-মাউন্ট থাকে ঠিক এইজন্যই, যাতে পরিচয়পত্র বিল্ডে এসে যায়, নাগরিকত্ব ছাড়াই।' },
    },
  ],
  quiz: {
    id: 'docker-hard-quiz',
    title: { en: 'The Manifest Exam', bn: 'ম্যানিফেস্ট-পরীক্ষা' },
    questions: [
      {
        id: 'hm1', topic: 'container boundaries',
        kind: 'mcq',
        hint: { en: 'Namespaces and cgroups still share ONE kernel — which bug class does the manifest price?', bn: 'নেমস্পেস আর cgroup ভাগ করে ONE কার্নেল — ম্যানিফেস্ট কোন বাগ-শ্রেণি মূল্য দেয়?' },
        question: { en: 'Why is “a container is not a sandbox” the correct starting posture?', bn: 'কেন “কন্টেইনার স্যান্ডবক্স নয়” সঠিক প্রারম্ভিক-ভঙ্গি?' },
        options: [
          { en: 'containers share the host kernel: namespaces hide and cgroups budget, but one kernel bug stops being local — so discipline is blast-radius arithmetic (non-root, read-only, ceilings) rather than safety folklore. And truly hostile neighbors get a SECOND boundary (gVisor, micro-VMs)', bn: 'কন্টেইনার হোস্ট-কার্নেল ভাগ করে: namespace লুকায় আর cgroup বাজেট দেয়, কিন্তু একটি কার্নেল-বাগ আর স্থানীয় থাকে না — তাই শৃঙ্খলা হলো বিস্ফোরণ-ব্যাসার্ধ-পাটিগণিত (অ-রুট, রিড-অনলি, ছাদ), নিরাপত্তা-লোককথা নয়, আর প্রকৃত-বিপজ্জনক প্রতিবেশী পায় দ্বিতীয় সীমান্ত (gVisor, মাইক্রো-VM)' },
          { en: 'containers are encrypted less than VMs', bn: 'কন্টেইনার VM-এর তুলনায় কম এনক্রিপ্টকৃত' },
          { en: 'sandboxes are only a browser concept', bn: 'স্যান্ডবক্স কেবল ব্রাউজার-ধারণা' },
          { en: 'the docker daemon runs as root, ending the debate', bn: 'ডকার-ডিমন রুটে চলে, বিতর্ক শেষ' },
        ],
        answer: 0,
        explanation: { en: 'Isolation-as-a-library hides and budgets; it does not defend a shared kernel. The manifest exists precisely to price that difference in signed lines.', bn: 'লাইব্রেরি-রূপী-বিচ্ছিন্নতা লুকায় ও বাজেট দেয়; ভাগাকৃত-কার্নেল রক্ষা করে না। ম্যানিফেস্ট হুবহু সেই পার্থক্য সইকৃত-পঙ্‌ক্তিতে মূল্য দিতে থাকে।' },
      },
      {
        id: 'hm2', topic: 'identity',
        kind: 'mcq',
        hint: { en: 'The kernel authenticates numbers — what happens to a name under a fresh base image?', bn: 'কার্নেল প্রমাণীকরণ করে সংখ্যা — নতুন বেস-ইমেজে কোনো নামের কী হয়?' },
        question: { en: 'Why USER 10001 and not USER appuser?', bn: 'কেন USER 10001, USER appuser নয়?' },
        options: [
          { en: 'numeric UIDs are the contract that cannot be redefined: a username resolves through the image’s /etc/passwd (a base image can shadow or drop it), while the number IS the account the kernel checks. Volumes, run --user and chown rituals all speak numbers', bn: 'সাংখ্যিক-UID হলো পুনঃসংজ্ঞায়ন-অযোগ্য চুক্তি: ব্যবহারকারী-নাম রূপান্তরিত হয় ইমেজের /etc/passwd দিয়ে (বেস-ইমেজ তা ছায়া বা ফেলে দিতে পারে), আর সংখ্যাটি-ই সেই অ্যাকাউন্ট, যা কার্নেল যাচাই করে — ভলিউম, run --user আর chown-রীতি সবাই সংখ্যা-ভাষী' },
          { en: 'numbers are faster for the scheduler', bn: 'সংখ্যা সূচকের জন্য দ্রুততর' },
          { en: 'usernames leak into crash reports', bn: 'ব্যবহারকারী-নাম ক্র্যাশ-রিপোর্টে ফাঁস হয়' },
          { en: 'USER only accepts numbers since docker 24', bn: 'docker 24 থেকে USER কেবল সংখ্যা নেয়' },
        ],
        answer: 0,
        explanation: { en: 'The kernel authenticates numbers; names are image-local folklore a base can rewrite. The volume lesson’s UID border is priced in numbers for the same reason.', bn: 'কার্নেল প্রমাণীকরণ করে সংখ্যা; নাম হলো ইমেজ-স্থানীয় লোককথা, যা বেস পুনর্লিখতে পারে। ভলিউম-পাঠের UID-সীমান্ত একই কারণে সংখ্যায় মূল্যায়িত।' },
      },
      {
        id: 'hm3', topic: 'resource verdicts',
        kind: 'mcq',
        hint: { en: 'OOMKilled with ceilings set is the machinery… failing, or working? Whose row holds the verdict?', bn: 'ছাদ-সেটকৃত অবস্থায় OOMKilled হলো যন্ত্র… ব্যর্থ, নাকি কাজরত? রায় কার সারিতে থাকে?' },
        question: { en: 'docker inspect shows OOMKilled: true and ExitCode 137, with --memory 512m set. What is the register confessing?', bn: 'docker inspect দেখায় OOMKilled: true আর ExitCode 137, --memory 512m সেটকৃত। রওকদারি কী স্বীকার করছে?' },
        options: [
          { en: 'the cgroup ceiling was crossed and the kernel killed the process INSIDE its own group — the ceiling WORKED (one named verdict in one row, machine untouched). The arithmetic question is now sizing: either the app fits its budget or the budget was fantasy. And both answers live in docker stats history', bn: 'cgroup-ছাদ অতিক্রমিত আর কার্নেল প্রসেসকে তার নিজের গোষ্ঠীর ভেতরে হত্যা করেছে — ছাদ কাজ করেছে (এক সারিতে এক নামকৃত-রায়, মেশিন অস্পৃশ্য); পাটিগণিত-প্রশ্ন এখন মাপের: হয় অ্যাপ তার বাজেটে ধরে, নয় বাজেট ছিল কল্পনা — দুই উত্তরই থাকে docker stats-ইতিহাসে' },
          { en: 'the daemon crashed and mislabeled the exit', bn: 'ডিমন বিপর্যস্ত হয়ে প্রস্থান ভুল-চিহ্নিত করেছে' },
          { en: '137 means the app returned an HTTP error', bn: '137 মানে অ্যাপ HTTP-ত্রুটি ফেরত দিয়েছে' },
          { en: 'OOMKilled only appears for databases', bn: 'OOMKilled কেবল ডেটাবেসের জন্য দেখা যায়' },
        ],
        answer: 0,
        explanation: { en: 'An OOMKilled row with ceilings set is the machinery working as designed — the noisy-neighbor class retired. The remaining work is honest sizing, not folklore about restart loops.', bn: 'ছাদ-সেটকৃত অবস্থায় OOMKilled-সারি হলো নকশামতো-কাজরত যন্ত্র — কোলাহলী-প্রতিবেশী-শ্রেণি অবসরকৃত। বাকি কাজ সৎ-মাপন, রিস্টার্ট-চক্র নিয়ে লোককথা নয়।' },
      },
      {
        id: 'hm4', topic: 'secret channels',
        kind: 'mcq',
        hint: { en: 'env is a notice board readable by the whole namespace — what does a mounted file carry that ENV cannot?', bn: 'env হলো নেমস্পেস-ব্যাপী নোটিশ-বোর্ড — মাউন্টকৃত-ফাইল কী বহন করে, যা ENV পারে না?' },
        question: { en: 'An ops note says: “The database password is in ENV so the app reads it portably.” What exactly is the leak class, and the fix that keeps portability?', bn: 'একটি অপ্স-টীকা বলে: “ডেটাবেস-পাসওয়ার্ড ENV-তে, যাতে অ্যাপ বহনযোগ্যভাবে পড়ে।” হুবহু ফাঁস-শ্রেণি কী, আর বহনযোগ্যতা রাখা মেরামত কোনটি?' },
        options: [
          { en: 'ENV values are visible to every process in the namespace (docker inspect, /proc/1/environ) and get archived by crash reporters. The portable fix is a mounted file at a declared path (/run/secrets/db_password) owned by the app UID. The app reads a FILE everywhere it runs: same portability, provenance included', bn: 'ENV-মান নেমস্পেসের প্রতি প্রসেসে দৃশ্যমান (docker inspect, /proc/1/environ) আর ক্র্যাশ-রিপোর্টে সংরক্ষিত হয়; বহনযোগ্য-মেরামত হলো ঘোষিত-পথে মাউন্টকৃত-ফাইল (/run/secrets/db_password), মালিকানা অ্যাপ-UID-এ — অ্যাপ যেখানেই চলে সেখানে একটি ফাইল পড়ে: একই বহনযোগ্যতা, উৎপত্তিসহ' },
          { en: 'no leak — ENV is encrypted at rest by docker', bn: 'ফাঁস নেই — ENV docker-এ স্থিরাবস্থায় এনক্রিপ্টকৃত' },
          { en: 'the leak is only via ps e, fixed by hiding ps', bn: 'ফাঁস কেবল ps e দিয়ে, ps লুকালে মেরামত' },
          { en: 'base64 the ENV value so dumps are unreadable', bn: 'ENV-মান base64 করুন, যাতে ডাম্প অপাঠ্য হয়' },
        ],
        answer: 0,
        explanation: { en: 'Files with owners beat environment adjectives: the read path is identical on laptop, CI and prod, and the dependency-ledger’s provenance vow now covers credentials too.', bn: 'মালিকসহ ফাইল জেতে পরিবেশ-বিশেষণকে: পাঠ-পথ ল্যাপটপ, CI আর প্রোডে অভিন্ন, আর নির্ভরতা-খাতার উৎপত্তি-শপথ এখন পরিচয়পত্রও আচ্ছাদন করে।' },
      },
      {
        id: 'hm5', kind: 'fill', topic: 'the hub doctrine',
        question: { en: 'Complete the hub’s last carried sentence: “The manifest runs nothing it did not ___.” (one word)', bn: 'হাবের শেষ বহনযোগ্য-বাক্য পূর্ণ করুন: “ম্যানিফেস্ট কিছুই চালায় না, যা ___ করে না।” (এক শব্দ)' },
        answer: 'sign',
        accept: ['সই', 'signed'],
        hint: { en: 'Six lines, one page, every one of them…', bn: '৬টি পঙ্‌ক্তি, ১টি পাতা, প্রতিটি…' },
        explanation: { en: 'The hub’s entire arc in one core principle: layers verified by digest, exits tracked by the register, accounts designated by name, doors explicit by declaration, and the fleet defined as one file. The manifest provides cryptographic integrity across every tier.', bn: 'একটি মূল নীতিতে হাবের শিক্ষণ: ডাইজেস্টে যাচাইকৃত লেয়ার, রওকদারিতে নজরদারি প্রস্থান, নামে চিহ্নিত অ্যাকাউন্ট, ঘোষণায় উন্মুক্ত পোর্ট, এবং এক ফাইলে সাজানো বহর। আর ম্যানিফেস্ট প্রতি স্তরে নিরাপত্তা নিশ্চিত করে।' },
      },
    ],
  },
};
