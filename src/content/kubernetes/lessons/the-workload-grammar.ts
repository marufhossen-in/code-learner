import type { Lesson } from '../../../lib/types';

export const workloadGrammarLesson: Lesson = {
  slug: 'the-workload-grammar',
  tech: 'kubernetes',
  title: {
    en: 'Workload Grammar — Because immortality is not one flavor',
    bn: 'ওয়ার্কলোড-ব্যাকরণ: অমরতার পাঁচ নামকৃত-স্বাদ'
  },
  summary: {
    en: 'Master the five workload controllers that govern Kubernetes application lifecycles. Deployments orchestrate zero-downtime rolling updates for stateless services using configurable surge and availability budgets. ReplicaSets reconcile pod counts in the background as the internal claim queue. DaemonSets maintain exactly one agent on every node for logging, networking, and monitoring. StatefulSets guarantee stable network names and dedicated storage volumes across pod restarts. Jobs and CronJobs run batch processes to completion with retry limits and scheduled executions.',
    bn: 'Kubernetes অ্যাপ্লিকেশনের জীবনচক্র পরিচালনাকারী ৫টি ওয়ার্কলোড কন্ট্রোলারে দক্ষতা অর্জন করুন। ডিপ্লয়মেন্ট (Deployment) স্টেটলেস সার্ভিসের জন্য ডাউনটাইমহীন রোলিং আপডেট পরিচালনা করে। রেপ্লিকাসেট (ReplicaSet) ব্যাকগ্রাউন্ডে পডের সংখ্যা সঠিক রাখে। ডিমনসেট (DaemonSet) প্রতিটি নোডে লগ ও নেটওয়ার্কিং এজেন্টের উপস্থিতি নিশ্চিত করে। স্টেটফুলসেট (StatefulSet) ডাটাবেস অ্যাপ্লিকেশনের জন্য স্থায়ী পরিচিতি ও ডিস্ক বরাদ্দ দেয়। আর জব (Job) ও ক্রনজব (CronJob) নির্ধারিত নিয়মে ব্যাচ প্রসেস সফলভাবে সমাপ্ত করে।',
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT the five shapes are', bn: 'পাঁচটি আকৃতি কী' } },
    {
      type: 'para',
      text: {
        en: 'Every workload in Kubernetes maps to a specific workload controller designed for its operational model. Deployments manage stateless applications by orchestrating rolling zero-downtime updates across ReplicaSets. DaemonSets guarantee that exactly one pod runs on every cluster node to deliver system agents like loggers and proxies. StatefulSets provide stable network identities and persistent disks for stateful systems, while Jobs and CronJobs execute batch tasks to completion on defined schedules.',
        bn: 'Kubernetes-এর প্রতিটি ওয়ার্কলোড তার কাজের ধরন অনুযায়ী একটি নির্দিষ্ট কন্ট্রোলারের সাথে মানানসই। ডিপ্লয়মেন্ট (Deployment) স্টেটলেস অ্যাপ্লিকেশনের জন্য রিকনসিলিয়েশন ও রোলিং আপডেট নিশ্চিত করে যাতে কোনো ডাউনটাইম না ঘটে। ডিমনসেট (DaemonSet) ক্লাস্টারের প্রতিটি নোডে লগ ও মনিটরিং এজেন্টের মতো সিস্টেম পড সমানভাবে চালায়। স্টেটফুলসেট (StatefulSet) ডাটাবেসের মতো অ্যাপকে স্থায়ী পরিচয় ও ডিস্ক সরবরাহ করে, আর জব (Job) ও ক্রনজব (CronJob) নির্ধারিত সময়সূচিতে নির্দিষ্ট কাজ সম্পন্ন করে প্রস্থান করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'rolling update', def: { en: 'Generational change: new atoms born Ready under maxSurge, old retired under maxUnavailable — the counter never dips below its floor.', bn: 'প্রজন্মান্তরীণ-পরিবর্তন: maxSurge-এ নতুন পরমাণু Ready হয়ে জন্মায়, maxUnavailable-এ পুরনো অবসর পায় — গণক কখনো তার নিচের রেখা ছোঁয় না।' } },
        { term: 'revision history', def: { en: 'The deployment’s memory of pens: revision numbers enable kubectl rollout undo LIVING to any past shape.', bn: 'কলমের উপর ডিপ্লয়মেন্টের স্মৃতি: সংস্করণ-সংখ্যা সচল করে kubectl rollout undo, যে-কোনো অতীত-আকৃতিতে।' } },
        { term: 'pod-template-hash', def: { en: 'The generation stamp: lets two ReplicaSets of one deployment coexist mid-roll without lineage confusion.', bn: 'প্রজন্ম-ছাপ: রোল-মাঝে এক ডিপ্লয়মেন্টের দুই ReplicaSet-কে বংশ-বিভ্রান্তি ছাড়াই সহবস্থান করায়।' } },
        { term: 'headless service', def: { en: 'clusterIP: None — DNS answers with the pod IPs themselves: stable names for numbered citizens.', bn: 'clusterIP: None — DNS উত্তর দেয় পড-IP-গুলোই: সংখ্যাযুক্ত-নাগরিকদের স্থিতিশীল-নাম।' } },
        { term: 'PVC per ordinal', def: { en: 'volumeClaimTemplates: db-1 always reincarnates onto db-1’s disk — identity outlives the atom.', bn: 'volumeClaimTemplates: db-1 সবসময় পুনর্জন্ম নেয় db-1-এর ডিস্কে — পরিচয় পরমাণুকে পেরিয়ে বাঁচে।' } },
        { term: 'backoffLimit / completions', def: { en: 'The job’s budget arithmetic: how many retries before Failed, how many successes before Complete.', bn: 'জবের বাজেট-পাটিগণিত: ব্যর্থ ঘোষণার আগে কত পুনঃচেষ্টা, সম্পূর্ণ ঘোষণার আগে কত সাফল্য।' } },
        { term: 'concurrencyPolicy', def: { en: 'CronJob overlap law: Allow, Forbid, or Replace — what happens when the schedule outruns the job.', bn: 'CronJob-এর এতিক্রম-আইন: Allow, Forbid নইলে Replace — সময়সূচি জবকে ছাড়িয়ে গেলে কী হয়।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY immortality has flavors', bn: 'কেন অমরতার স্বাদ আছে' } },
    {
      type: 'para',
      text: {
        en: 'Lesson two priced the argument; this lesson prices the GENRE of the argument, and genre is where architecture begins. WHY-ONE, CHANGE WITHOUT WINDOWS: the deployment’s budgets are the compose-healthcheck lesson one control plane up — new atoms must PROVE readiness before old atoms are allowed to die. So a bad image rollout degrades gracefully into an amber status instead of an outage (the debug file measures exactly this dividend, in minutes of peace). The alternative — all-at-once replacement — is downtime engineered into a button. WHY-TWO, LOCALITY AS A FEATURE: daemons do not scale by count but by nodes. Running a log collector on only 3 out of 5 nodes is 40% blindness rather than partial success. A DaemonSet automatically binds pod creation to node membership as new machines join the cluster. WHY-THREE, IDENTITY AS AN ASSET: stateless thinking fails precisely where bytes have addresses — a database that reincarnates as db-7 onto a strange disk is a new hire handed someone’s desk drawer. StatefulSet pays the borrow cost: ordinal names as DNS entries, one PVC per ordinal, ordered rolling restarts n-1 → 0 so the QUORUM (equal dialogues of the consensus choir) is never cute-rolled into minority. WHY-FOUR, FINITUDE AS A SHAPE: the deployment grammar says “forever” and would keep a migrated-data script or a nightly reconciliation RUNNING FOREVER as an amber lie. Job grammar declares the End upfront (completions), prices the retry floor (backoffLimit) and the collision law (concurrencyPolicy). A ledger that can file SUCCESS is the reason nightly batch does not need a dashboard of lies at 6 a.m.',
        bn: 'দ্বিতীয় পাঠ মূল্য দিয়েছে তর্ক; এই পাঠ মূল্য দেয় তর্কের ধরন, আর ধরনেই স্থাপত্য শুরু। একনম্বর, ঝান্ড-বিহীন পরিবর্তন: ডিপ্লয়মেন্টের বাজেট হলো এক কন্ট্রোল-প্লেন-উপরে compose-হেলথচেক-পাঠ. নতুন পরমাণুকে প্রস্তুতি প্রমাণ করতে হয় পুরনো পরমাণু মরার অনুমতির আগে, তাই খারাপ-ইমেজের রোলআউট মার্জিতভাবে অবনতি পায় হলদে-অবস্থায়, বিভ্রাটের বদলে (ডিবাগ-ফাইল হুবহু এই লভ্যাংশ মাপে, শান্তির মিনিটে); বিকল্প — একসাথে-সব-প্রতিস্থাপন — হলো বোতামে-প্রকৌশলিত ডাউনটাইম। দ্বিতীয়ত, বৈশিষ্ট্যরূপে স্থানীয়তা: ডিমন স্কেল হয় সংখ্যায় নয়, নোডের আসনে। ৫টি নোডের মধ্যে ৩টিতে লগ-সংগ্রাহক থাকলে তা ৬০% সাফল্য নয়, বরং ৪০% অন্ধত্ব। DaemonSet প্রতিটি নোডের সদস্যতার সাথে পড বেঁধে দেয়, ফলে নতুন নোড যুক্ত হলেই স্বয়ংক্রিয়ভাবে পড চালু হয়। তৃতীয়, সম্পদরূপে পরিচয়: স্টেটলেস-চিন্তা হুবহু সেখানে ব্যর্থ, যেখানে বাইটের ঠিকানা আছে — db-7 হয়ে অচেনা-ডিস্কে পুনর্জন্মনেওয়া ডেটাবেস হলো নতুন-কর্মী, কারো ড্রয়ার হাতিয়ে. StatefulSet পরিশোধ করে ধারের খরচ: DNS-এন্ট্রিরূপে সিরিয়ালি-নাম, সিরিয়ালপ্রতি একটি PVC, n-1 থেকে 0 ক্রমিক-গড়ানো-পুনঃসূচনা, যাতে সংখ্যাগরিষ্ঠতা (সুরদলের সম-সংলাপ) কখনো সংখ্যালঘুতে সুন্দর-গড়া না হয়। চতুর্থত, আকৃতিরূপে সীমাবদ্ধতা: ডিপ্লয়মেন্ট ব্যাকরণ চিরকাল চালু রাখার পক্ষপাতী, যা সাময়িক স্ক্রিপ্টের জন্য অনুপযুক্ত। জব ব্যাকরণ শুরুতেই completions দিয়ে নির্দিষ্ট সমাপ্তি ঘোষণা করে, backoffLimit দিয়ে পুনঃচেষ্টার সীমা বাঁধে এবং concurrencyPolicy দিয়ে সংঘর্ষ রোধ করে। এর ফলে ব্যাচ প্রক্রিয়ার সফল সমাপ্তি সরাসরি রেকর্ডে লিপিবদ্ধ হয়।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to speak each shape fluently', bn: 'কীভাবে প্রতি আকৃতি সাবলীলভাবে বলবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Roll with budgets you can recite: maxSurge: 1, maxUnavailable: 0 for traffic-critical (extra capacity is the price of zero dip); maxSurge: 25%, maxUnavailable: 25% for batch. Then WATCH the argument settle: kubectl rollout status deploy/x (it exits non-zero on timeout: your CI’s hinge).', bn: 'এমন বাজেটে গড়ান, যা আপনি মুখস্থ করতে পারেন: ট্রাফিক-সংকটাপন্নে maxSurge: 1, maxUnavailable: 0 (শূন্য-নিমজ্জনের মূল্য অতিরিক্ত-সক্ষমতা); ব্যাচে maxSurge: 25%, maxUnavailable: 25% — তারপর তর্ক মিটতে দেখুন: kubectl rollout status deploy/x (টাইমআউটে অ-শূন্য প্রস্থান: আপনার CI-র কব্জা)।' },
        { en: 'Keep undo cheap by keeping history: kubectl rollout history deploy/x reads the register’s memory of pens. And kubectl rollout undo deploy/x --to-revision=N is a REWRITE OF DESIRE to an old shape (a new roll, not a time machine): the atoms are new, the spec is old, the ledger is consistent.', bn: 'ইতিহাস রেখে undo সস্তা রাখুন: kubectl rollout history deploy/x পড়ে কলমের উপর রওকদারির স্মৃতি — আর kubectl rollout undo deploy/x --to-revision=N হলো পুরনো-আকৃতিতে ইচ্ছার পুনর্লেখন (নতুন গড়ানো, টাইম-মেশিন নয়): পরমাণু নতুন, spec পুরনো, খাতা সামঞ্জস্যপূর্ণ।' },
        { en: 'Tolerate before you daemon: agents that must sit on tainted nodes (dedicated=db, control-plane) need their tolerations written in the pod spec — the DaemonSet’s claim queue respects the same arithmetic the scheduler prices. A daemon missing from one node is a taint verdict, never a bug report.', bn: 'ডিমন চালুর আগে সহনতা লিখুন: tainted-নোডে (dedicated=db, control-plane) বসতিবাধ্য এজেন্টের পড-স্পেসে সহনতা লেখা চাই — DaemonSet-এর দাবি-সারি সেই একই পাটিগণিত মানে, যা সূচক মূল্য দেয়; একটি নোড থেকে অনুপস্থিত-ডিমন হলো taint-রায়, বাগ-রিপোর্ট কখনো নয়।' },
        { en: 'Number the citizens from day one: a StatefulSet wants a headless service NAME (db-0.db, db-1.db…), volumeClaimTemplates (storageClass + size), and an application that knows its peers by ordinal address. Rolling restarts then march n-1 → 0 with quorum math you designed, not roulette.', bn: 'প্রথম দিন থেকে নাগরিক সংখ্যায়িত করুন: StatefulSet চায় একটি headless-সার্ভিসের নাম (db-0.db, db-1.db…), volumeClaimTemplates (storageClass + আকার), আর এমন অ্যাপ্লিকেশন, যা সহকর্মী চেনে সিরিয়ালি-ঠিকানায় — গড়ানো-পুনঃসূচনা তখন নামে n-1 থেকে 0, আপনার-নকশাকৃত গরিষ্ঠতা-পাটিগণিতে, রুলেটে নয়।' },
        { en: 'Price the End before the start: every Job declares completions + parallelism + backoffLimit up front (a migration job: completions 1, backoffLimit 3 — after three strikes the register calls it FAILED, loudly, instead of looping into folklore). CronJobs declare concurrencyPolicy and startingDeadlineSeconds so lateness skips instead of stamps the ledger with debt.', bn: 'শুরুর আগে মূল্য দিন সমাপ্তির: প্রতি জব সমুদায়ে ঘোষণা করে completions + parallelism + backoffLimit (মাইগ্রেশন-জব: completions 1, backoffLimit 3 — তিন ধাক্কার পর রওকদারি তা ব্যর্থ বলে, জোরে, লোককথায় পাকানোর বদলে). CronJob ঘোষণা করে concurrencyPolicy আর startingDeadlineSeconds, যাতে বিলম্ব ঋণ-ছাপ ফেলার বদলে এড়িয়ে যায়।' },
        { en: 'Observe the shapes with their own verbs: kubectl get jobs, kubectl get cronjobs, kubectl describe statefulset — every shape keeps its own account. The discipline is never reading a workload through a verb meant for another shape (jobs are NOT deployments that stopped).', bn: 'আকৃতি পর্যবেক্ষণ করুন তাদের নিজস্ব-ক্রিয়ায়: kubectl get jobs, kubectl get cronjobs, kubectl describe statefulset — প্রতি আকৃতি তার নিজের হিসাব রাখে; শৃঙ্খলা হলো কোনো ওয়ার্কলোড কখনোই অন্য আকৃতির ক্রিয়ায় না পড়া (জব থেমে-যাওয়া ডিপ্লয়মেন্ট নয়)।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: budgets in the lab', bn: 'দৃশায়ন: ল্যাবে বাজেট' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'Run the rollout in the visualizer and watch the budget breathe: kubectl set image … myapp:1.3 — surge pods arrive Ready FIRST, retirements follow each, the name stays, and the endpoints ledger never once reads empty. Then scale to 5 and to 1 and watch the claim queue file births and retirements — the grammar in motion.',
        bn: 'ভিজ্যুয়ালাইজারে রোলআউট চালান আর বাজেটকে শ্বাস নিতে দেখুন: kubectl set image … myapp:1.3 — সার্জ-পড আসে আগে Ready, প্রতিটির পর অবসর, নাম থাকে যায়, আর এন্ডপয়েন্ট-খাতা একবারও খালি পড়ে না। তারপর ৫ আর ১-এ স্কেল করে দাবি-সারিতে জন্ম ও অবসর দাখিল হতে দেখুন — গতিতে ব্যাকরণ।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: how the shapes keep their books', bn: 'অভ্যন্তরীণ: আকৃতিগুলো হিসাব রাখে কীভাবে' } },
    {
      type: 'para',
      text: {
        en: 'Four bookkeeping mechanisms. GENERATIONS: every spec change to a deployment bumps metadata.generation; the controller keeps trying until status.observedGeneration catches up. Which is why kubectl rollout status can honestly say “stuck progressing”: the register knows the argument has not been countersigned, and names it. REPLICASET SETS: the pod-template-hash means a deployment is a small genealogy — the revision you are rolling FROM holds the old template, the one you are rolling TO files the new one. And history is just the cemetery of scaled-to-zero replicasets (default keeps ten. RevisionHistoryLimit is the budget on remembering). ORDERED IDENTITIES: a StatefulSet creates ordinals strictly 0 → n-1 and deletes strictly n-1 → 0, each pod blocked on its PREDECESSOR being Ready — which is the quorum’s permission slip made of kubectl verbs. And volumeClaimTemplates mint a PVC named <claim>-<set>-<ordinal> that survives pod deletion BY DESIGN (scaling down a statefulset keeps the disks: state is the asset, pods are the weather — the volume economy, finally first-class). LAZY COLUMNS: a Job’s controller tracks .status.succeeded against completions and stops filing claims at parity; failure bookkeeping lives in backoffLimit per pod (restartPolicy Never pods re-SpAWN as fresh claims, never restart in place. The atom does not argue) and activeDeadlineSeconds caps the whole endeavor so a wedged job dies a named death instead of an eternal amber heartbeat. CronJobs materialize Jobs per schedule line, and concurrencyPolicy is the collision ledger: Forbid drops the new run (late arithmetic > stacked arithmetic), Replace drains the straggler — choose by whether your batch is idempotent or merely optimistic.',
        bn: 'চার হিসাব-প্রক্রিয়াটত্ত্ব। প্রজন্ম: প্রতি স্পেক-পরিবর্তন ডিপ্লয়মেন্টের metadata.generation বাড়ায়; কন্ট্রোলর চেষ্টা চালিয়ে যায় যতক্ষণ status.observedGeneration ধরে না নেয় — এইজন্যই kubectl rollout status সৎভাবে বলতে পারে “অগ্রগতিতে-আটকে”: রওকদারি জানে তর্কটি প্রতিস্বাক্ষরিত হয়নি, আর নাম বলে। REPLICASET-সেট: pod-template-hash মানে ডিপ্লয়মেন্ট একটি ক্ষুদ্র-বংশতালিকা — আপনি যে সংস্করণ থেকে গড়াচ্ছেন তা পুরনো টেমপ্লেট ধরে, যেটিতে গড়াচ্ছেন তা নতুন-টেমপ্লেট দাখিল করে, আর ইতিহাস হলো শূন্যে-নামানো-রেপ্লিকাসেটের কবরস্থান (ডিফল্টে দশটি ধরে; revisionHistoryLimit হলো স্মরণের বাজেট)। ক্রমিক-পরিচয়: StatefulSet সিরিয়াল তৈরি করে কঠোরভাবে 0 থেকে n-1, মোছে কঠোরভাবে n-1 থেকে 0, প্রতি পড তার পূর্বসূরির Ready-তে অবরুদ্ধ — যা kubectl-ক্রিয়ায়-গড়া গরিষ্ঠতার অনুমতিপত্র. আর volumeClaimTemplates ছাপায় PVC, নামে <claim>-<set>-<সিরিয়াল>, যা পড-মোছা পেরিয়ে টেকে নকশাতেই (স্টেটফুলসেট নিচে নামালে ডিস্ক থেকেই যায়: স্টেট-ই সম্পদ, পড আবহাওয়া — ভলিউম-অর্থনীতি, অবশেষে প্রথম-শ্রেণির নাগরিক)। অলস-কলাম: জবের কন্ট্রোলার অনুসরণ করে completions-এর সাথে .status.succeeded আর সমতায় পৌঁছে দাবি দাখিল থামায়; ব্যর্থতা-হিসাব থাকে পডপ্রতি backoffLimit-এ (restartPolicy Never-পড নতুন-দাবিরূপে পুনঃসৃষ্ট হয়, জায়গায় পুনঃসূচনা নয় — পরমাণু তর্ক করে না) আর activeDeadlineSeconds পুরো প্রচেষ্টার ছাদ বাঁধে। যাতে জ্যামিত-জব মরে নামকৃত-মৃত্যুতে, চিরন্তন-হলদে-হার্টবিটে নয়। CronJob সময়সূচি-পঙ্‌ক্তিপ্রতি জব মূর্ত করে, আর concurrencyPolicy সংঘর্ষ-খাতা: Forbid নতুন রান ফেলে দেয় (বিলম্বিত-পাটিগণিত > স্তূপীকৃত-পাটিগণিত), Replace জ্যেষ্ঠ-পিছিয়ে-পড়াকে নিষ্কাশন করে — আপনার ব্যাচ idempotent না কেবল আশাবাদী সেটা দেখে বাছুন।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'grammar.yaml',
      caption: { en: 'Four shapes of immortality, one file: each spec states WHICH debt its workload owes.', bn: 'অমরতার চার আকৃতি, একটি ফাইলে: প্রতি স্পেক বলে তার ওয়ার্কলোড কোন ঋণ বহন করে।' },
      code: `apiVersion: apps/v1
kind: Deployment                 # the default sentence: stateless, roll forever
metadata: { name: ledger-api }
spec:
  replicas: 3
  strategy:
    rollingUpdate: { maxSurge: 1, maxUnavailable: 0 }   # the budget that never dips
  revisionHistoryLimit: 10       # the register's memory budget of pens
  selector: { matchLabels: { app: ledger-api } }
  template:
    metadata: { labels: { app: ledger-api } }
    spec:
      containers:
        - { name: app, image: myapp:1.3, resources: { requests: { cpu: 500m, memory: 256Mi } } }
---
apiVersion: apps/v1
kind: StatefulSet                # numbered citizenship: identity IS the asset
metadata: { name: db }
spec:
  serviceName: db                # headless service → db-0.db, db-1.db, db-2.db
  replicas: 3
  selector: { matchLabels: { app: db } }
  template:
    metadata: { labels: { app: db } }
    spec:
      containers:
        - { name: db, image: postgres:16, resources: { requests: { cpu: "1", memory: 1Gi } } }
      tolerations: [{ key: dedicated, operator: Equal, value: db, effect: NoSchedule }]
  volumeClaimTemplates:          # one PVC per ordinal, surviving every reincarnation
    - metadata: { name: data }
      spec:
        accessModes: ["ReadWriteOnce"]
        resources: { requests: { storage: 10Gi } }
---
apiVersion: batch/v1
kind: Job                        # the ledger with an End
metadata: { name: migrate-orders }
spec:
  completions: 1                 # arithmetic: one success closes the account
  backoffLimit: 3                # three strikes, then the register calls it FAILED
  activeDeadlineSeconds: 1800    # the endeavor's ceiling, named in advance
  template:
    spec:
      restartPolicy: Never       # fresh claims, never in-place restarts
      containers:
        - { name: migrate, image: myapp:1.3, command: ["node", "dist/migrate.js"] }
---
apiVersion: batch/v1
kind: CronJob                    # the End, on a schedule
metadata: { name: nightly-recon }
spec:
  schedule: "30 2 * * *"         # 02:30 — arithmetic, not hope
  concurrencyPolicy: Forbid      # lateness skips; the ledger never stacks identical debts
  startingDeadlineSeconds: 900   # 15 minutes late = apologize and skip
  jobTemplate:
    spec:
      backoffLimit: 2
      template:
        spec:
          restartPolicy: Never
          containers:
            - { name: recon, image: myapp:1.3, command: ["node", "dist/reconcile.js"] }`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the grammar bought', bn: 'ফলাফল: ব্যাকরণ যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'shape named', bn: 'নামকৃত-আকৃতি' }, { en: 'the contract signed', bn: 'সইকৃত-চুক্তি' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['deployment budgets', { en: 'change proven by readiness before retirements', bn: 'অবসরের আগে প্রস্তুতি-প্রমাণিত পরিবর্তন' }, { en: 'rollouts that degrade to amber, never to outage', bn: 'রোলআউট হলদেতে অবনত, বিভ্রাটে কখনো নয়' }, 'the Friday deploy that was a coin flip'],
        ['replicaset lineage respected', { en: 'undo in one verb; genealogy never confused', bn: 'এক ক্রিয়ায় undo; বংশতালিকা কখনো বিভ্রান্ত নয়' }, { en: 'generations comparable, history budgeted', bn: 'তুলনীয় প্রজন্ম, বাজেটকৃত-ইতিহাস' }, 'the hand-edited rs that orphaned 400 pods'],
        ['daemonset chair tax', { en: 'per-node truth (logs, metrics) that scales with the fleet itself', bn: 'বহরের সাথে-স্কেলকারী নোডপ্রতি-সত্য (লগ, মেট্রিক)' }, { en: 'hardware arrival files its own claims', bn: 'হার্ডওয়্যার-আগমন নিজেই দাবি দাখিল করে' }, 'the monitoring gap nobody noticed for a quarter'],
        ['statefulset numbered citizens', { en: 'storage follows identity through death', bn: 'মৃত্যু পেরিয়ে পরিচয় অনুসরণ করে সংরক্ষণ' }, { en: 'ordered rolls honoring the quorum, by design', bn: 'গরিষ্ঠতা-মান্যকারী ক্রমিক-গড়ানো, নকশাতেই' }, 'the database that woke up on a stranger’s disk'],
        ['jobs declare the End', { en: 'success filed as a row, not inferred from silence', bn: 'সাফল্য সারিরূপে দাখিলকৃত, নীরবতা থেকে অনুমিত নয়' }, { en: 'failed batch dies loudly at budgets, not eternally amber', bn: 'ব্যর্থ-ব্যাচ মরে জোরে বাজেটে, চিরন্তন-হলদেতে নয়' }, 'the migration script still running next quarter'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the rollout that “stuck”', bn: 'ডিবাগ-ফাইল: যে রোলআউট “আটকে” গেছিল' } },
    {
      type: 'para',
      text: {
        en: 'The deploy pipeline hung amber for forty minutes and the channel filled with folklore: “k8s is slow today”, “just bump replicas and see”, “delete the deployment and re-apply”. The facts, read in the twin registers: kubectl get deploy showed DESIRED 3, UP-TO-DATE 1, AVAILABLE 2; kubectl get pods showed one new-atom in CrashLoopBackOff, two old atoms happily Ready. The mechanism, once the ledger was allowed to speak: the new image crashed on boot (a config key the staging fleet had and prod did not. The compose env-seam lesson collecting interest), maxUnavailable: 0 meant the budget REFUSED to retire the second old atom while the new generation could not prove a single replacement Ready. And rollout status --timeout had been the only thing between the fleet and the plague. The “stuck” was the grammar working: the rollout was not hung, it was ASKING A QUESTION the pipeline had never been taught to answer — is this a bad change or a slow one? The correct verbs, in order: rollout status reads the argument honestly (Progressing: condition false, reason ProgressDeadlineExceeded — the deadline budget, also named); describe on the crashing atom names the missing key. Rollback with kubectl rollout undo deploy/ledger-api (a rewrite to the last countersigned shape. The register shrugged and returned to green in two minutes). The team adopted permanent preventive measures. CI runs canary checks with 1 experimental pod before full deployment. The missing variable was committed to the ConfigMap, and the deployment dashboard now tracks up-to-date pods explicitly. Postmortem sentence: A ROLLOUT THAT WILL NOT CONVERGE IS NOT THE FLEET REFUSING YOUR CHANGE — IT IS THE BUDGET DEFENDING YOUR USERS FROM YOUR CHANGE.',
        bn: 'ডিপ্লয়-পাইপলাইন চল্লিশ মিনিট হলদে ঝুলে রইল আর চ্যানেল ভরে গেল লোককথায়: “k8s আজ ধীর”, “রেপ্লিকা বাড়িয়ে দেখো”, “ডিপ্লয়মেন্ট মুছে পুনঃপ্রয়োগ করো”। তথ্য, যুগল-রওকদারিতে-পঠিত: kubectl get deploy দেখাল কাঙ্ক্ষিত 3, হালনাগদ 1, প্রাপ্য 2; kubectl get pods দেখাল CrashLoopBackOff-তে একটি নতুন-পরমাণু, আনন্দে-Ready দুই পুরনো পরমাণু। প্রক্রিয়াটত্ত্ব, খাতা কথা বলার অনুমতি পেলে: নতুন ইমেজ বুটে বিপর্যস্ত হচ্ছিল (একটি কনফিগ-কী, যা স্টেজিং-বহরে ছিল, প্রোডে ছিল না. Compose-এর env-সেলাই-পাঠ মুনাফা আদায় করছিল), maxUnavailable: 0 মানে বাজেট অবসর দিতে অস্বীকার করছিল দ্বিতীয় পুরনো পরমাণুকে, নতুন প্রজন্ম একটিমাত্র প্রতিস্থাপনও Ready প্রমাণ করতে না-পারায়, আর rollout status --timeout-ই ছিল বহর ও প্লেগের মাঝে একমাত্র বস্তু। “আটকে-যাওয়া” ছিল কাজরত-ব্যাকরণ: রোলআউট অচল হয়নি, সে জিজ্ঞেস করছিল এমন প্রশ্ন, যার উত্তর পাইপলাইনকে কেউ শেখায়নি — পরিবর্তনটা খারাপ, না ধীর? সঠিক-ক্রিয়া, ক্রমানুসারে: rollout status তর্ক পড়ে সৎভাবে (Progressing: condition false, reason ProgressDeadlineExceeded — সময়সীমা-বাজেট, সেটিও নামকৃত); বিপর্যস্ত-পরমাণুর describe হারানো-কীটির নাম বলে; kubectl rollout undo deploy/ledger-api দিয়ে রোলব্যাক (শেষ-প্রতিস্বাক্ষরিত-আকৃতিতে পুনর্লেখন — রওকদারি কাঁধ ঝাঁকিয়ে দুই মিনিটে সবুজে ফিরল). দল স্থায়ী প্রতিরোধমূলক ব্যবস্থা গ্রহণ করে। পুরো ডিপ্লয়ের আগে CI এখন ১টি পরীক্ষামূলক ক্যানারি পড চালায়। কনফিগম্যাপে অনুপস্থিত মানটি যুক্ত করা হয় এবং ড্যাশবোর্ডে হালনাগাদ পডের সংখ্যা সরাসরি পর্যবেক্ষণের ব্যবস্থা করা হয়। পোস্টমর্টেম-বাক্য: যে রোলআউট অভিসারিত হতে চায় না, সে বহর আপনার পরিবর্তন প্রত্যাখ্যান করছে না — বাজেট আপনার পরিবর্তন থেকে আপনার ব্যবহারকারী রক্ষা করছে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: grammars with dialects', bn: 'বাস্তব-জগৎ: উপভাষাধারী ব্যাকরণ' } },
    {
      type: 'list',
      items: [
        { en: 'The Operator pattern is this lesson generalized: CRDs mint custom shapes (Postgresql, RedisCluster) and controllers keep the same two-column ledger for them — anyone may extend the grammar who is willing to argue like a controller.', bn: 'Operator-প্যাটার্ন হলো এই পাঠের সাধারণকরণ: CRD নতুন আকৃতি ছাপায় (Postgresql, RedisCluster) আর কন্ট্রোলার তাদের জন্যও একই দুই-কলাম-খাতা ধরে — ব্যাকরণ যে-কেউ বাড়াতে পারে, যে কন্ট্রোলারের ঢঙে তর্ক করতে রাজি।' },
        { en: 'Argo Rollouts / Flagger write canary and blue-green AS BUDGETS: pause at 5%, watch metrics, promote — the deployment’s grammar with a metric-driven conscience attached, exactly the debug file’s doctrine commit.', bn: 'Argo Rollouts / Flagger লেখে ক্যানারি আর নীল-সবুজ বাজেটরূপে: ৫%-এ বিরতি, মেট্রিক দেখো, উন্নীত করো — মেট্রিকচালিত-বিবেক-সংযোজিত ডিপ্লয়মেন্ট-ব্যাকরণ, হুবহু ডিবাগ-ফাইলের মতবাদ-দাখিল।' },
        { en: 'Batch frameworks (Argo Workflows, Airflow on k8s) are Jobs with dependencies: DAGs of completions — the End-shaped ledger composing with itself until the whole pipeline is one named account of successes.', bn: 'ব্যাচ-কাঠামো (Argo Workflows, k8s-এ Airflow) নির্ভরতাসহ জব: completions-এর DAG — নিজের সাথে রচনাকারী সমাপ্তি-আকৃতির খাতা, পুরো পাইপলাইন সাফল্যের একটি নামকৃত-হিসাব না-হওয়া পর্যন্ত।' },
        { en: 'Government and bank clusters bend DaemonSets hardest: node-local HSM agents, compliance loggers, eBPF security sensors — the chair tax is always the first budget line in regulated fleets.', bn: 'সরকারি ও ব্যাংক-ক্লাস্টার DaemonSet-কে সবচেয়ে বাঁকায়: নোড-স্থানীয় HSM-এজেন্ট, নিয়মতান্ত্রিক-লগার, eBPF-নিরাপত্তা-সেন্সর — আসন-কর সবসময় নিয়ন্ত্রিত-বহরের প্রথম বাজেট-পঙ্‌ক্তি।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the name that never dies', bn: 'পরবর্তী: যে নাম কখনো মরে না' } },
    {
      type: 'para',
      text: {
        en: 'The atoms have shapes, budgets, identities. Next lesson: how traffic FINDS them without ever learning their names — Services as stable selectors (ClusterIP/NodePort/LoadBalancer), kube-proxy wiring the truth-set to a virtual IP, cluster DNS as the fleet’s telephone directory. And Ingress as the front desk with TLS manners. Carried sentence: SHAPE THE WORKLOAD BY NAME.',
        bn: 'পরমাণুদের আকৃতি আছে, বাজেট আছে, পরিচয় আছে। পরবর্তী পাঠ: ট্রাফিক তাদের নাম কখনো না-জেনেও খুঁজে পায় কীভাবে — স্থিতিশীল-সিলেক্টররূপে Service (ClusterIP/NodePort/LoadBalancer), সত্য-সেট ভার্চুয়াল-IP-তে তারিয়ে দেওয়া kube-proxy, বহরের টেলিফোন-ডিরেক্টরিরূপে ক্লাস্টার-DNS, আর TLS-শিষ্টাচারধারী প্রধান-ডেস্করূপে Ingress। বহনযোগ্য বাক্য: কাজের আকৃতি দিন নাম দিয়ে।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-grammar-ex1', kind: 'mcq', topic: 'shape selection',
      question: { en: 'You must run a 40-minute database migration exactly once (or fail loudly) and a nightly reconciliation that must never overlap with itself. Which SHAPES file those two debts correctly?', bn: 'আপনাকে চালাতে হবে ৪০-মিনিটের ডেটাবেস-মাইগ্রেশন হুবহু একবার (নইলে জোরে ব্যর্থতা) আর একটি রাত্রি-মীমাংসা, যা নিজের সাথে কখনো এতিক্রম করবে না। কোন আকৃতি সেই দুই ঋণ সঠিকভাবে দাখিল করে?' },
      options: [
        { en: 'a Job (completions: 1, backoffLimit named, activeDeadlineSeconds as the ceiling — success is FILED, not inferred) and a CronJob with concurrencyPolicy: Forbid + startingDeadlineSeconds, so lateness skips instead of stacking identical debts', bn: 'একটি জব (completions: 1, backoffLimit নামকৃত, ছাদরূপে activeDeadlineSeconds — সাফল্য দাখিলকৃত, অনুমিত নয়) আর একটি concurrencyPolicy: Forbid + startingDeadlineSeconds-সহ CronJob, যাতে বিলম্ব অভিন্ন-ঋণ স্তূপীকরণের বদলে এড়িয়ে যায়' },
        { en: 'two deployments with replicas lowered when idle', bn: 'অলস সময়ে কমানো-রেপ্লিকার দুই ডিপ্লয়মেন্ট' },
        { en: 'a daemonset for the migration, cron via systemd for the recon', bn: 'মাইগ্রেশনে ডিমনসেট, মীমাংসায় systemd-cron' },
        { en: 'one pod with two containers and sleep commands', bn: 'দুই কন্টেইনার আর sleep-কমান্ডের একটি পড' },
      ],
      answer: 0,
      hint: { en: 'Which grammar files SUCCESS as a row — and which law governs collisions?', bn: 'কোন ব্যাকরণ সাফল্য সারিরূপে দাখিল করে — আর সংঘর্ষ শাসন করে কোন আইন?' },
      explanation: { en: 'Forever-shaped grammars turn finite work into amber lies; the End must be declared for the register to file it. Overlap law is the batch world’s mutex — priced as policy, not prayer.', bn: 'চিরকাল-আকৃতির ব্যাকরণ সসীম-কাজকে হলদে-মিথ্যায় রূপান্তর করে; রওকদারি সাফল্য দাখিল করতে হলে সমাপ্তি ঘোষণা করতেই হয়। এতিক্রম-আইন হলো ব্যাচ-জগতের mutex — নীতিরূপে মূল্যায়িত, প্রার্থনা নয়।' },
    },
    { id: 'k8s-grammar-ex2', kind: 'predict', topic: 'stateful identity',
      question: { en: 'db-1 of a three-ordinal StatefulSet returns from a node crash and reincarnates. What does the NEW pod inherit from its dead predecessor — and which three mechanisms make the inheritance lawful?', bn: 'তিন-সিরিয়ালিতে StatefulSet-এর db-1 নোড-বিপর্যয় থেকে ফিরে পুনর্জন্ম নেয়। নতুন পড তার মৃত-পূর্বসূরির কী উত্তরাধিকারে পায় — আর উত্তরাধিকার বৈধ করে কোন তিন প্রক্রিয়াটত্ত্ব?' },
      options: [
        { en: 'The name db-1 via headless DNS, the persistent volume claim for ordinal 1, and the sequential startup ordering. These three guarantees maintain stable identity and state.', bn: 'headless DNS দ্বারা নাম db-1, ১ নম্বর অর্ডিনালের নির্ধারিত ডিস্ক (PVC), এবং ক্রমিক শুরুর নিশ্চয়তা। এই ৩টি বিষয় স্থায়ী পরিচয় ও অবস্থা নিশ্চিত করে।' },
        { en: 'nothing — stateless like any deployment pod', bn: 'কিছুই না — যে-কোনো ডিপ্লয়মেন্ট-পডের মতো স্টেটলেস' },
        { en: 'only the disk; names are always re-randomized', bn: 'কেবল ডিস্ক; নাম সবসময় পুনঃএলোমেলো হয়' },
        { en: 'the name and disk but no ordering guarantee', bn: 'নাম আর ডিস্ক, কিন্তু কোনো ক্রম-নিশ্চয়তা নয়' },
      ],
      answer: 0,
      hint: { en: 'Which template mints a PVC per ordinal, and which service kind lets DNS return pod IPs directly?', bn: 'প্রতি সিরিয়ালিতে PVC ছাপায় কোন টেমপ্লেট, আর সরাসরি পড-IP ফেরত দেয় কোন সার্ভিস-ধরন?' },
      explanation: { en: 'Stateless atoms are cattle; stateful atoms are citizens. Citizenship = name + soil + queue order, all three re-issued at reincarnation — that is the entire StatefulSet bargain.', bn: 'স্টেটলেস-পরমাণু পশু; স্টেটফুল-পরমাণু নাগরিক। নাগরিকত্ব = নাম + মাটি + সারির ক্রম, তিনটিই পুনর্জন্মে পুনঃজারিকৃত — পুরো StatefulSet-চুক্তি এটুকুই।' },
    },
    { id: 'k8s-grammar-ex3', kind: 'mcq', topic: 'rollout budget',
      question: { en: 'For customer-facing traffic, why is maxUnavailable: 0 + maxSurge: 1 the standard vow — and what is its price?', bn: 'গ্রাহকমুখী ট্রাফিকে কেন maxUnavailable: 0 + maxSurge: 1 প্রমিত-শপথ — আর তার মূল্য কী?' },
      options: [
        { en: 'the counter never dips: new atoms must PROVE readiness before any old atom retires, so a bad image degrades the rollout to amber instead of the service to outage. The price is real arithmetic: you need one replica’s worth of spare chair (25-33% headroom) at roll time', bn: 'গণক কখনো নামে না: নতুন পরমাণুকে প্রস্তুতি প্রমাণ করতে হয় যে-কোনো পুরনো-পরমাণু অবসরের আগে, তাই খারাপ-ইমেজ রোলআউটকে অবনত করে হলদেতে, সেবাকে বিভ্রাটে নয়; মূল্য হলো প্রকৃত-পাটিগণিত: গড়ানোর সময় লাগে এক রেপ্লিকার অতিরিক্ত আসন (২৫–৩৩% উদ্বৃত্ত)' },
        { en: 'it is the only combination kubernetes accepts', bn: 'এটিই একমাত্র সমন্বয়, যা kubernetes গ্রহণ করে' },
        { en: 'zero unavailable means faster rollouts', bn: 'শূন্য-অপ্রাপ্য মানে দ্রুততর রোলআউট' },
        { en: 'the budget only affects statefulsets', bn: 'বাজেট শুধু স্টেটফুলসেটে প্রভাব ফেলে' },
      ],
      answer: 0,
      hint: { en: 'What must EXIST before any retirement is permitted — and who pays for that space?', bn: 'যে-কোনো অবসরের অনুমতির আগে কী থাকতেই হবে — আর সেই জায়গার খরচ কে দেয়?' },
      explanation: { en: 'The budget is downtime priced as spare capacity: surge buys the proof-of-life window. Fleets that cannot afford the chair must admit it in availability terms, not in folklore.', bn: 'বাজেট হলো অতিরিক্ত-সক্ষমতায়-মূল্যায়িত ডাউনটাইম: সার্জ কিনে দেয় প্রাণ-প্রমাণের জানালা। আসনের সাধ্য যে বহরের নেই, তাকে স্বীকার করতে হয় প্রাপ্যতা-পরিভাষায়, লোককথায় নয়।' },
    },
  ],
  quiz: {
    id: 'k8s-grammar-quiz',
    title: { en: 'The Grammar Exam', bn: 'ব্যাকরণ-পরীক্ষা' },
    questions: [
      { id: 'wg1', kind: 'mcq', topic: 'replicaset lineage',
        question: { en: 'Why does kubectl delete replicaset (one owned by a deployment) refuse to produce the relief you hoped for?', bn: 'কেন kubectl delete replicaset (ডিপ্লয়মেন্টমালিক একটি) আপনার আশা-কৃত স্বস্তি দিতে রাজি নয়?' },
        options: [
          { en: 'it deletes the claim queue but not the DESIRE that writes it: the parent reconciles and re-files the exact ReplicaSet (or its twin) within seconds, while any hand-edits you made to the queue die with it. Lineage means the parent always re-reads desire and the queue is just where desire happens to be written today', bn: 'তা মুছে দাবি-সারি, কিন্তু ইচ্ছা নয়, যা তা লেখে: অভিভাবক reconcile করে কয়েক সেকেন্ডে হুবহু সেই ReplicaSet (বা যমজ) পুনদাখিল করে, আর সারিতে করা হাতে-সম্পাদনা মরে সারির সাথেই — বংশপরম্পরা মানে অভিভাবক সবসময় ইচ্ছা পুনঃপাঠ করে। আর সারি হলো ইচ্ছা যেখানে আজ লেখা হয়ে থাকে' },
          { en: 'replicasets are immutable objects', bn: 'ReplicaSet অপরিবর্তনীয়-বস্তু' },
          { en: 'the cluster forbids batch deletes by policy', bn: 'ক্লাস্টার নীতিতে ব্যাচ-মোছা নিষেধ করে' },
          { en: 'it works fine — this is folklore', bn: 'তা ঠিকই কাজ করে — এটি লোককথা' },
        ],
        answer: 0,
        hint: { en: 'Speak to parents, never queues: whose idea was the ReplicaSet?', bn: 'অভিভাবকের সাথে কথা, সারির সাথে কখনো নয়: ReplicaSet কার ধারণা ছিল?' },
        explanation: { en: 'The ReplicaSet is where the deployment’s desire happens to be parked today; touching it is arguing with a photocopier instead of the author.', bn: 'ReplicaSet হলো সেই জায়গা, যেখানে ডিপ্লয়মেন্টের ইচ্ছা আজ পার্ক করা; তা ছোঁয়া হলো লেখকের বদলে ফটোকপিয়ারের সাথে তর্ক করা।' },
      },
      { id: 'wg2', kind: 'mcq', topic: 'daemonset chairs',
        question: { en: 'A DaemonSet’s log agent is missing from exactly one node of five. What is the correct diagnostic frame?', bn: 'পাঁচ নোডের মধ্যে হুবহু একটি থেকে DaemonSet-এর লগ-এজেন্ট অনুপস্থিত। সঠিক রোগনির্ণয়-কাঠামো কোনটি?' },
        options: [
          { en: 'a scheduling verdict, not a bug: describe the Pending/missing claim — taint without toleration, resource exhaustion at the chair, or a nodeSelector mismatch; the DaemonSet files claims per MEMBERSHIP. And absence on one chair always reads as arithmetic about that chair, never temperament about the agent', bn: 'সূচক-রায়, বাগ নয়: Pending/অনুপস্থিত-দাবি describe করুন — সহনতা-বিহীন taint, আসনে সম্পদ-সংকট, নইলে nodeSelector-অসামঞ্জস্য; DaemonSet সদস্যতাপ্রতি দাবি দাখিল করে, আর একটি আসনে অনুপস্থিতি পড়ে সেই আসনের পাটিগণিতরূপে, এজেন্টের স্বভাবরূপে কখনো নয়' },
          { en: 'the agent image is corrupted on that node', bn: 'সেই নোডে এজেন্ট-ইমেজ দূষিত' },
          { en: 'daemonsets randomly skip one node by design', bn: 'DaemonSet নকশাতেই এলোমেলো একটি নোড বাদ দেয়' },
          { en: 'the node joined after the daemonset was created', bn: 'DaemonSet তৈরির পর নোড যোগ দিয়েছে' },
        ],
        answer: 0,
        hint: { en: 'Same arithmetic the scheduler always prices — which node property repels the claim?', bn: 'সূচক সবসময় যে পাটিগণিত মূল্য দেয় সেটিই — কোন নোড-ধর্ম দাবি প্রতিহত করে?' },
        explanation: { en: 'Membership-driven filing makes absence legible: one missing daemon is a sentence about ONE node’s taints/capacity/labels. Read the chair; the agent is doing fine everywhere arithmetic permits.', bn: 'সদস্যতা-চালিত-দাখিল অনুপস্থিতিকে সুপাঠ্য করে: একটি হারানো-ডিমন একটি নোডের taint/সক্ষমতা/লেবেলের বাক্য। আসন পড়ুন; যেখানে পাটিগণিত অনুমতি দেয় সেই সর্বত্র এজেন্ট ভালোই আছে।' },
      },
      { id: 'wg3', kind: 'mcq', topic: 'job finitude',
        question: { en: 'A migration Job keeps re-spawning pods hourly but never completes. Which TWO knobs end the eternity lawfully?', bn: 'একটি মাইগ্রেশন-জব ঘণ্টায় ঘণ্টায় পড পুনঃসৃষ্টি করে, সম্পূর্ণ হয় না। কোন দুই নব বৈধভাবে অনন্তকাল শেষ করে?' },
        options: [
          { en: 'backoffLimit (failed pods counted; at the limit the register declares the JOB Failed instead of filing claim N+1 forever) + activeDeadlineSeconds (the wall-clock ceiling on the endeavor itself): finitude armed twice — by arithmetic and by time. So a wedged migration dies a named death you can alert on', bn: 'backoffLimit (ব্যর্থ-পড গণিত; সীমায় রওকদারি জবকে ব্যর্থ ঘোষণা করে, অনন্তে দাবি N+1 দাখিল না-করে) + activeDeadlineSeconds (প্রচেষ্টার ভিন্ন-ঘড়ির ছাদ): সীমাবদ্ধতা দুইবার সশস্ত্র — পাটিগণিতে আর সময়ে — যাতে জ্যামিত-মাইগ্রেশন মরে নামকৃত-মৃত্যুতে, যাতে সতর্কতা বসানো যায়' },
          { en: 'restartPolicy: OnFailure and a bigger node pool', bn: 'restartPolicy: OnFailure আর বড় নোড-পুল' },
          { en: 'kubectl delete pods in a loop from cron', bn: 'cron থেকে চক্রে kubectl delete pod' },
          { en: 'convert it to a deployment and scale to zero on Sundays', bn: 'ডিপ্লয়মেন্টে রূপান্তর করে রবিবারে শূন্যে স্কেল' },
        ],
        answer: 0,
        hint: { en: 'Which budget counts strikes, and which counts minutes?', bn: 'কোন বাজেট গোনে ধাক্কা, আর কোনটি মিনিট?' },
        explanation: { en: 'The Job grammar is the End declared twice: by count and by clock. Without both, failure ages into eternal amber heartbeats — a ledger that can file FAILED is the mercy of all batch work.', bn: 'জব-ব্যাকরণ হলো দুইবার-ঘোষিত সমাপ্তি: গণনায় আর ঘড়িতে। দুটো ছাড়া ব্যর্থতা পুরনো হয় চিরন্তন-হলদে-হার্টবিটে — ব্যর্থতা দাখিল-সক্ষম খাতাই ব্যাচ-কাজের দয়া।' },
      },
      { id: 'wg4', kind: 'mcq', topic: 'ordered identity',
        question: { en: 'During a StatefulSet rolling restart from 3 replicas, why does the fleet deliberately NOT roll db-1 until db-2 is Ready?', bn: '৩-রেপ্লিকার StatefulSet গড়ানো-পুনঃসূচনায় বহর ইচ্ছাকৃতভাবে db-1 গড়ায় না, যতক্ষণ db-2 Ready না-হচ্ছে — কেন?' },
        options: [
          { en: 'ordered death n-1 → 0 and ordered birth 0 → n-1 are the quorum’s permission slip written as kubectl verbs: at every SECOND at least ⌈n/2⌉ citizens must be Ready for the data’s consensus to keep its majority. Rolling all at once is a minority-partition engineered by hand. And the sequencer exists precisely to make that unconstructible', bn: 'ক্রমিক-মৃত্যু n-1 থেকে 0 আর ক্রমিক-জন্ম 0 থেকে n-1 হলো kubectl-ক্রিয়ায়-লেখা গরিষ্ঠতার অনুমতিপত্র: প্রতি সেকেন্ডে অন্তত ⌈n/2⌉ নাগরিক Ready থাকতে বাধ্য, ডেটার ঐকমত্য গরিষ্ঠতা রাখার জন্য — একসাথে-সব-গড়ানো হলো হাতে-প্রকৌশলিত সংখ্যালঘু-পার্টিশন, আর নির্ধারক থাকে হুবহু সেটি অসম্ভবকরণে' },
          { en: 'because ordinals map to ip addresses and routes update slowly', bn: 'কারণ সিরিয়াল ip-ঠিকানায় ম্যাপ হয় আর রুট ধীরে হালনাগাদ হয়' },
          { en: 'statefulsets are simply slower deployments', bn: 'StatefulSet কেবল ধীর-ডিপ্লয়মেন্ট' },
          { en: 'the pvc driver forbids parallel attach', bn: 'PVC-ড্রাইভার সমান্তরাল-অনুযুক্তি নিষেধ করে' },
        ],
        answer: 0,
        hint: { en: 'What does the consensus choir need at EVERY second to stay a choir?', bn: 'সুরদল যে-মুহূর্তে সুরদল থাকতে তার কী লাগে?' },
        explanation: { en: 'For data-carrying workloads, sequence is availability: the majority must never be surprised. Ordered ordinals make the partition arithmetic unconstructible — folklore-free by design.', bn: 'ডেটা-বহনকারী-ওয়ার্কলোডে ধারা-ই প্রাপ্যতা: গরিষ্ঠতা কখনো বিস্মিত হবে না। ক্রমিক-সিরিয়াল পার্টিশন-পাটিগণিতকে অসম্ভব করে — নকশাতেই লোককথামুক্ত।' },
      },
      { id: 'wg5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete the carried sentence: “Shape the workload by ___.” (one word)', bn: 'বহনযোগ্য বাক্য পূর্ণ করুন: “কাজের আকৃতি দিন ___ দিয়ে।” (এক শব্দ)' },
        answer: 'name',
        accept: ['নাম', 'names'],
        hint: { en: 'Deployment, DaemonSet, StatefulSet, Job are not configs — they are…', bn: 'Deployment, DaemonSet, StatefulSet, Job কনফিগ নয় — সেগুলো হলো…' },
        explanation: { en: 'The grammatical lesson in one word: each shape is a NAMED contract with mortality — pick the name first, and the spec mostly writes itself.', bn: 'এক শব্দে ব্যাকরণের পাঠ: প্রতি আকৃতি মৃত্যুর সাথে একটি নামকৃত-চুক্তি — নাম আগে বাছুন, স্পেক অধিকাংশ নিজেই লিখে ফেলবে।' },
      },
    ],
  },
  nextLesson: { slug: 'the-service-perimeter', title: { en: 'The Service Perimeter: the name that never dies', bn: 'সার্ভিস-সীমরেখা: যে নাম কখনো মরে না' } },
};
