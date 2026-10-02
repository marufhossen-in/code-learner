import type { Hub } from '../../lib/types';
import { podParadoxLesson } from './lessons/the-pod-paradox';
import { desiredStateLedgerLesson } from './lessons/the-desired-state-ledger';
import { workloadGrammarLesson } from './lessons/the-workload-grammar';
import { servicePerimeterLesson } from './lessons/the-service-perimeter';
import { configStorageEconomyLesson } from './lessons/the-config-storage-economy';
import { schedulerArithmeticLesson } from './lessons/the-scheduler-arithmetic';
import { healthDispatchLesson } from './lessons/the-health-dispatch';
import { hardenedClusterLesson } from './lessons/the-hardened-cluster';

export const k8sHub: Hub = {
  slug: 'kubernetes',
  name: 'Kubernetes',
  icon: '☸️',
  tagline: {
    en: 'Docker priced the box; Kubernetes prices the fleet: one reef of pods ruled by a ledger that never sleeps.',
    bn: 'Docker মূল্য দিল বাক্স; Kubernetes মূল্য দেয় বহর: একটি পড-প্রবাল, যার শাসক এমন খাতা, যা কখনো ঘুমায় না।',
  },
  about: {
    en: 'Kubernetes is not “Docker for many machines”; it is a desired-state control plane that treats your fleet as one argument between two numbers — the desire you wrote and the reality the schedulers concede. This hub extends the docker chain one control plane up: the pod as the deployable atom (the namespaced process, multiplied), the reconciliation loop as the engine of self-healing, labels and selectors as the fleet’s truth-set, services as immortal names over mortal backends, config and storage as contracts at the boundary, the scheduler as priced arithmetic (requests, taints, affinity), probes as the health dispatch, and finally the hardened cluster — RBAC, network policy and admission as the manifest’s cluster-scale signature. Every lesson runs the Kubernetes Visualizer: write desire, watch pods pend, chairs fill, nodes die, and names stay put.',
    bn: 'Kubernetes “অনেক মেশিনের Docker” নয়; এটি desired-state-কন্ট্রোল-প্লেন, যা আপনার বহরকে দুই সংখ্যার এক তর্ক বানায় — আপনার-লেখা ইচ্ছা আর সূচকের-রাজিকৃত বাস্তব। এই হাব docker-শৃঙ্খলকে এক কন্ট্রোল-প্লেন উপরে তোলে: পড — ডিপ্লয়যোগ্য-পরমাণু (নেমস্পেস-প্রসেস, গুণিত), reconciliation-লুপ — স্বয়ং-নিরাময়ের ইঞ্জিন, লেবেল-সিলেক্টর — বহরের সত্য-সেট, সার্ভিস — নশ্বর-ব্যাকএন্ডের উপর অমর নাম, কনফিগ-স্টোরেজ — সীমান্তের চুক্তি, সূচক — মূল্যায়িত-পাটিগণিত (requirements, taint, affinity), প্রোব — স্বাস্থ্য-প্রেরণা, আর অবশেষে শক্তকৃত-ক্লাস্টার — RBAC, নেটওয়ার্ক-নীতি আর প্রবেশনিয়ন্ত্রণ, ম্যানিফেস্টের ক্লাস্টার-মাপের স্বাক্ষররূপে। প্রতি লেসন চলে Kubernetes ভিজ্যুয়ালাইজারে: ইচ্ছা লিখুন, পডকে Pending হতে, আসন ভরতে, নোড মরতে আর নামকে অটল থাকতে দেখুন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The atom', bn: 'ধাপ ১ — পরমাণু' },
      items: [
        { en: 'Why fleets beat boxes; the nine-layer lesson of container failures (lesson 1)', bn: 'কেন বহরই জেতে বাক্সে; কন্টেইনার-ব্যর্থতার নয়-স্তরের পাঠ (লেসন ১)' },
        { en: 'Pod = shared-netns process group: one IP, shared volumes, one fate', bn: 'পড = ভাগাকৃত-netns প্রসেস-গোষ্ঠী: একটি IP, ভাগাকৃত ভলিউম, এক নিয়তি' },
        { en: 'kubectl core verbs: get / describe / logs / exec / apply', bn: 'kubectl-এর মূল-ক্রিয়া: get / describe / logs / exec / apply' },
      ],
    },
    {
      title: { en: 'Stage 2 — The twin registers', bn: 'ধাপ ২ — যুগল রওকদারি' },
      items: [
        { en: 'Desired state in etcd vs observed state on nodes (lesson 2)', bn: 'etcd-তে লিখিত-ইচ্ছা বনাম নোডে পর্যবেক্ষিত-বাস্তব (লেসন ২)' },
        { en: 'Reconciliation loops: controllers as eternal janitors of the delta', bn: 'রিকনসিলিয়েশন-লুপ: ডেল্টার নিতাঁর-জানাজীহিসেবে কন্ট্রোলার' },
        { en: 'Labels & selectors: the fleet’s ONLY honest query language', bn: 'লেবেল ও সিলেক্টর: বহরের একমাত্র সৎ-প্রশ্নোত্তর-ভাষা' },
      ],
    },
    {
      title: { en: 'Stage 3 — Shape & name', bn: 'ধাপ ৩ — আকৃতি ও নাম' },
      items: [
        { en: 'Deployments (rollout/rollback), DaemonSet, StatefulSet, Job (lesson 3)', bn: 'Deployment (রোলআউট/রোলব্যাক), DaemonSet, StatefulSet, Job (লেসন ৩)' },
        { en: 'Services: ClusterIP/NodePort/LoadBalancer + cluster DNS (lesson 4)', bn: 'Service: ClusterIP/NodePort/LoadBalancer + ক্লাস্টার-DNS (লেসন ৪)' },
        { en: 'ConfigMap/Secret + PV/PVC/StorageClass (lesson 5)', bn: 'ConfigMap/Secret + PV/PVC/StorageClass (লেসন ৫)' },
      ],
    },
    {
      title: { en: 'Stage 4 — Arithmetic & armor', bn: 'ধাপ ৪ — পাটিগণিত ও সাঁজোয়া' },
      items: [
        { en: 'Requests/limits, taints, affinity, QoS — placement priced (lesson 6)', bn: 'Requests/limits, taint, affinity, QoS — মূল্যায়িত-স্থাপন (লেসন ৬)' },
        { en: 'Liveness/readiness/startup probes + graceful termination (lesson 7)', bn: 'Liveness/readiness/startup প্রোব + মার্জিত-সমাপন (লেসন ৭)' },
        { en: 'RBAC, NetworkPolicy, PodSecurity, admission (lesson 8)', bn: 'RBAC, NetworkPolicy, PodSecurity, প্রবেশনিয়ন্ত্রণ (লেসন ৮)' },
      ],
    },
  ],
  lessons: [podParadoxLesson, desiredStateLedgerLesson, workloadGrammarLesson, servicePerimeterLesson, configStorageEconomyLesson, schedulerArithmeticLesson, healthDispatchLesson, hardenedClusterLesson],
  reference: [
    {
      group: 'Core objects',
      methods: [
        {
          name: 'Pod',
          signature: 'kubectl run p --image=x  |  kind: Pod',
          params: { en: 'The atom: 1+ containers sharing one network namespace and lifecycle.', bn: 'পরমাণু: একটি নেটওয়ার্ক-নেমস্পেস ও জীবনচক্র ভাগ করা 1+ কন্টেইনার।' },
          returns: { en: 'Scheduled on ONE node; mortal; selected by labels, never by name.', bn: 'একটি নোডে স্থাপিত; নশ্বর; নামে নয়, লেবেলে নির্বাচিত।' },
          example: 'kubectl get pods -l app=ledger-api   # নামে নয়, সত্য-সেটে প্রশ্ন',
        },
        {
          name: 'Deployment',
          signature: 'spec: { replicas, selector, template (pod spec) }',
          params: { en: 'Desired replica count + the pod template; rollouts with surge/unavailable budgets.', bn: 'কাঙ্ক্ষিত-রেপ্লিকা-সংখ্যা + পড-টেমপ্লেট; surge/unavailable-বাজেটসহ রোলআউট।' },
          returns: { en: 'Self-healing fleet: crash → controller re-files; scale = one rewrite.', bn: 'স্বয়ং-নিরাময়কারী বহর: বিপর্যয় → কন্ট্রোলার পুনদাখিল; স্কেল = একটি পুনর্লেখন।' },
          example: 'kubectl scale deployment/ledger-api --replicas=5',
        },
        {
          name: 'Service',
          signature: 'kind: Service  |  type: ClusterIP | NodePort | LoadBalancer',
          params: { en: 'Stable name + virtual IP bound to a selector, NOT to pods.', bn: 'পডে নয়, সিলেক্টরে আবদ্ধ স্থিতিশীল নাম + ভার্চুয়াল-IP।' },
          returns: { en: 'Endpoints = the selector’s ready truth-set, recomputed forever.', bn: 'Endpoints = সিলেক্টরের প্রস্তুত-সত্য-সেট → চিরকাল পুনর্গণিত।' },
          example: 'kubectl expose deployment ledger-api --port=80 --target-port=3000',
        },
      ],
    },
    {
      group: 'Control & placement',
      methods: [
        {
          name: 'resources',
          signature: 'requests: {cpu, memory} / limits: {cpu, memory}',
          params: { en: 'Requests price the SCHEDULER’s chair; limits arm the cgroup ceilings.', bn: 'Requests সূচকের আসনের মূল্য দেয়; limits cgroup-ছাদ কONSE।' },
          returns: { en: 'Placement arithmetic + QoS class (Guaranteed → Burstable → BestEffort).', bn: 'স্থাপন-পাটিগণিত + QoS-শ্রেণি (Guaranteed → Burstable → BestEffort)।' },
          example: 'requests: { cpu: 500m, memory: 256Mi }  →  limits: { cpu: "1", memory: 512Mi }',
        },
        {
          name: 'probes',
          signature: 'livenessProbe / readinessProbe / startupProbe',
          params: { en: 'Liveness restarts the box; readiness gates the endpoint list; startup protects slow boots.', bn: 'Liveness বাক্স পুনঃসূচনা করে; readiness এন্ডপয়েন্ট-তালিকা শীতল করে; startup ধীর-বুট রক্ষা করে।' },
          returns: { en: 'Three separate verdicts, three separate consequences — never one uber-probe.', bn: 'তিনটি পৃথক রায়, তিনটি পৃথক পরিণতি — কখনোই একটি সর্বোচ্চ-প্রোব নয়।' },
          example: 'readinessProbe: { httpGet: { path: /readyz, port: 3000 }, periodSeconds: 5 }',
        },
        {
          name: 'rollout verbs',
          signature: 'kubectl rollout status/history/undo deployment/x',
          params: { en: 'The deployment’s own event journal: watch, audit, rewind by revision.', bn: 'ডিপ্লয়মেন্টের নিজস্ব ইভেন্ট-জার্নাল: পর্যবেক্ষণ, নিরীক্ষণ, সংস্করণে প্রত্যাবর্তন।' },
          returns: { en: 'Progressive delivery with an honest ledger of what ran when.', bn: 'কী কখন চলল তার সৎ-খাতাসহ ক্রমাগত-ডেলিভারি।' },
          example: 'kubectl rollout undo deployment/ledger-api --to-revision=3',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'The Nine-Layer Failure', bn: 'নয়-স্তর ব্যর্থতা' },
      diff: 'beginner',
      desc: {
        en: 'In the Kubernetes Visualizer: apply the default deployment, schedule, then crash node-a. Deliverable: a written timeline comparing desired vs observed at every step — the moment reality conceded, the moment the register re-filed.',
        bn: 'Kubernetes ভিজ্যুয়ালাইজারে: ডিফল্ট-ডিপ্লয়মেন্ট অ্যাপ্লাই করুন, schedule করুন, তারপর node-a বিপর্যয় করুন। ডেলিভারেবল: প্রতি ধাপে ইচ্ছা বনাম বাস্তবের লিখিত-টাইমলাইন — বাস্তব কখন রাজি হলো, রওকদারি কখন পুনদাখিল করল।',
      },
    },
    {
      title: { en: 'The Name That Outlived Its Pods', bn: 'যে নাম তার পডগুলোকে পেরিয়ে টিকল' },
      diff: 'intermediate',
      desc: {
        en: 'Mint a service over the deployment, snapshot the endpoint list, then run a full image rollout — and prove the selector’s truth-set stayed non-empty at every beat, even though not one pod from the photograph survived.',
        bn: 'ডিপ্লয়মেন্টের উপর সার্ভিস ছাপুন, এন্ডপয়েন্ট-তালিকার ছবি তুলুন, তারপর পূর্ণ ইমেজ-রোলআউট চালান — আর প্রমাণ করুন সিলেক্টরের সত্য-সেট প্রতি ছন্দে অ-খালি ছিল, ছবির কোনো পড বেঁচে না থাকলেও।',
      },
    },
    {
      title: { en: 'Priced Placement', bn: 'মূল্যায়িত স্থাপন' },
      diff: 'advanced',
      desc: {
        en: 'Design a three-tier placement exercise in the visualizer: a tainted db node (only tolerating stateful pods may sit), capacity-tight compute nodes, and one fat pod that must stay Pending with a legible taint verdict. Write the design as the manifest you WOULD apply.',
        bn: 'ভিজ্যুয়ালাইজারে তিন-স্তরের স্থাপন-অভ্যাস নকশা করুন: একটি tainted db-নোড (কেবল সহনশীল স্টেটফুল-পড বসতে পারে), সক্ষমতা-সংকীর্ণ হিসাব-নোড, আর একটি বিশাল-পড যাকে পঠনযোগ্য-taint-রায়সহ Pending-ই থাকতে হবে। নকশাটি এমন ম্যানিফেস্টরূপে লিখুন, যা আপনি প্রয়োগ করবেন।',
      },
    },
  ],
  bestPractices: [
    { en: 'Never run a bare pod in production — every box gets a controller parent (Deployment, StatefulSet, Job) that can speak for it after it dies.', bn: 'প্রোডাকশনে কখনো উলঙ্গ-পড চালাবেন না — প্রতি বাক্স পাবে কন্ট্রোলার-অভিভাবক (Deployment, StatefulSet, Job), যা মৃত্যুর পরও তার হয়ে কথা বলতে পারে।' },
    { en: 'Every container declares requests AND limits: the scheduler cannot price a chair you never sized, and the kernel cannot defend a ceiling you never drew.', bn: 'প্রতি কন্টেইনার ঘোষণা করে requests আর limits: সূচক এমন আসনের মূল্য দিতে পারে না, যা আপনি মাপেননি; কার্নেল এমন ছাদ রক্ষা করতে পারে না, যা আপনি আঁকেননি।' },
    { en: 'Selector labels are the API — version them, document them, treat renaming one as a schema migration.', bn: 'সিলেক্টর-লেবেল-ই API — সংস্করণ করুন, দলিল করুন, একটির নামবদল স্কিমা-মাইগ্রেশনরূপে বিবেচনা করুন।' },
    { en: 'Readiness before traffic, startup before liveness, preStop before shutdown — the three gates in that order, every workload.', bn: 'ট্রাফিকের আগে readiness, liveness-এর আগে startup, শাটডাউনের আগে preStop — এই ক্রমে তিন ফাটক, প্রতি ওয়ার্কলোডে।' },
    { en: 'kubectl apply, never imperative edits in production: the register must be able to reproduce every cluster from YAML alone.', bn: 'kubectl apply, প্রোডাকশনে কখনোই আদেশ-রূপী সম্পাদনা নয়: শুধু YAML থেকেই প্রতি ক্লাস্টার পুনঃনির্মাণযোগ্য হতে হবে রওকদারির কাছে।' },
    { en: 'One container, one process, one concern: sidecars are the exception paragraph, not the default style.', bn: 'একটি কন্টেইনার, একটি প্রসেস, একটি উদ্বেগ: sidecar হলো ব্যতিক্রম-অনুচ্ছেদ, ডিফল্ট-ধরন নয়।' },
  ],
  interview: [
    {
      q: { en: 'In 60 seconds: why does Kubernetes schedule PODS instead of containers?', bn: '৬০ সেকেন্ডে: Kubernetes কেন কন্টেইনার নয়, পড সূচিযুক্ত করে?' },
      a: {
        en: 'Because the deployable unit of fate is the namespace boundary, not the image. An app and its log agent must share one IP, one localhost, one set of volume mounts and one lifecycle — scheduling them separately lets one box land here and its lungs land elsewhere. The pod packages co-fated containers as one atom: one IP, one restart score, one node. Everything above (services, deployments) prices the pod because the pod is the smallest thing the kernel can honestly promise to keep together.',
        bn: 'কারণ নিয়তির ডিপ্লয়যোগ্য-একক হলো নেমস্পেস-সীমানা, ইমেজ নয়। অ্যাপ আর তার লগ-এজেন্টকে ভাগ করতে হবে একটি IP, একটি localhost, এক সেট ভলিউম-মাউন্ট আর একটি জীবনচক্র — আলাদা সূচিযুক্ত করলে বাক্স এখানে পড়ে, ফুসফুস অন্য খানে। পড সহ-নিয়তিকৃত কন্টেইনারদের এক পরমাণুতে বাঁধে: একটি IP, একটি রিস্টার্ট-স্কোর, একটি নোড। উপরের সবকিছু (সার্ভিস, ডিপ্লয়মেন্ট) পডের মূল্য দেয়, কারণ পড-ই সবচেয়ে ছোট জিনিস, যা কার্নেল সৎভাবে একত্রে রাখার প্রতিশ্রুতি দিতে পারে।',
      },
    },
    {
      q: { en: 'What happens, step by step, when a node dies?', bn: 'একটি নোড মরলে, ধাপে ধাপে কী ঘটে?' },
      a: {
        en: 'The kubelet stops heartbeating; after the grace window the node controller marks it NotReady. Its pods are ruled feral: etcd still HOLDS their records, so no twin is created while it might be a gray-card (network partition, not death). Once eviction is declared, the deployment controller detects desired-vs-observed, files replacements, the scheduler prices chairs on surviving nodes by requests/taints, endpoints lists recompute under the same service name — and the fleet converges again, no human paged.',
        bn: 'kubelet হার্টবিট থামায়; ছাড়-সময়ের পর নোড-কন্ট্রোলার চিহ্নিত করে NotReady। পডগুলো হয় বন্য-রায়প্রাপ্ত: etcd এখনো ধরে রাখে তাদের রেকর্ড, তাই যতক্ষণ এটি ধূসর-কার্ড হতে পারে (নেটওয়ার্ক-পার্টিশন, মৃত্যু নয়), কোনো যমজ তৈরি হয় না। বহিষ্কার ঘোষিত হলে ডিপ্লয়মেন্ট-কন্ট্রোলার শনাক্ত করে ইচ্ছা-বনাম-বাস্তব, পুনঃস্থাপন দাখিল করে, সূচক requests/taints-এ টিকে থাকা নোডে আসনের মূল্য দেয়, একই সার্ভিস-নামে এন্ডপয়েন্ট-তালিকা পুনর্গণিত হয় — আর বহর পুনরায় অভিসারিত হয়, কোনো মানুষকে ডাকা ছাড়াই।',
      },
    },
    {
      q: { en: 'Explain liveness vs readiness vs startup probes in one breath.', bn: 'এক নিঃশ্বাসে liveness বনাম readiness বনাম startup প্রোব ব্যাখ্যা করুন।' },
      a: {
        en: 'Readiness decides SUBSCRIPTIONS: is this box listed in the endpoint truth-set? — temporary withdrawal, no restart. Liveness decides RESTARTS: is this box wedged beyond self-rescue? — kill it and let the parent re-file. Startup decides PATIENCE: a slow boot (JVM, cache warm) gets a protected window before the other two speak. Treating them as one probe means your cache-warming restart loop at 2 a.m.',
        bn: 'Readiness ঠিক করে সাবস্ক্রিপশন: এই বাক্স কি এন্ডপয়েন্ট-সত্য-সেটে তালিকাভুক্ত? — সাময়িক-প্রত্যাহার, রিস্টার্ট নয়। Liveness ঠিক করে পুনঃসূচনা: বাক্স কি আত্ম-উদ্ধারের বাইরে জ্যামিত? — হত্যা করুন আর অভিভাবককে পুনদাখিল করতে দিন। Startup ঠিক করে ধৈর্য: ধীর-বুট (JVM, ক্যাশ-উষ্ণায়ন) পায় সুরক্ষিত-সময়, অন্য দুটো কথা বলার আগে। এগুলোকে একটি প্রোবে মেশালেই মানে ভোর-২টার ক্যাশ-উষ্ণায়ন রিস্টার্ট-লুপ।',
      },
    },
    {
      q: { en: 'kubectl scale vs editing replicas in the YAML — which is the vow?', bn: 'kubectl scale বনাম YAML-এ replicas সম্পাদনা — কোনটি শপথ?' },
      a: {
        en: 'Both ARE the same vow — a rewrite of DESIRED state — IF the YAML is your source of truth and apply follows edit. The dangerous romanticism is believing a live imperative change (or worse, hand-deleting a pod) is configuration: it evaporates at the next reconcile window because the register prefers its YAML. GitOps exists to make the register and the repository the same book.',
        bn: 'দুটোই একই শপথ — কাঙ্ক্ষিত-অবস্থার পুনর্লেখন — যদি YAML সত্যের উৎস হয় আর সম্পাদনার পর apply আসে। বিপজ্জনক প্রণয়কল্প হলো ভাবা যে কোনো লাইভ আদেশাত্মক-পরিবর্তন (বা এর চেয়েও খারাপ, হাতে-পড-মোছা) কনফিগারেশন: পরের reconcile-সময়ে তা বাষ্পে মেশে, কারণ রওকদারি তার YAML-ই পছন্দ করে। GitOps থাকে হুবহু রওকদারি আর ভান্ডার একই বই করতে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Every “serverless” platform is a desired-state control plane wearing a billing costume: Fargate, Cloud Run and their cousins keep the reconciliation loop and rent you the nodes.',
      bn: 'প্রতি “সার্ভারহীন” প্ল্যাটফর্ম বিলিং-পোশাকে-পরা desired-state-কন্ট্রোল-প্লেন: Fargate, Cloud Run আর তাদের সম্প্রদায় reconciliation-লুপ ধরে রেখে আপনাকে নোড ভাড়া দেয়।',
    },
    {
      en: 'The 2021 etcd “too many operations” outages at major clouds were this hub’s Stage-2 lesson at weather scale: the control plane itself is the first workload that must honor arithmetic.',
      bn: 'প্রধান ক্লাউডে ২০২১-এর etcd “অতি-বহু-ক্রিয়া” বিভ্রাট ছিল আবহাওয়া-মাপে এই হাবের ধাপ-২ পাঠ: কন্ট্রোল-প্লেন নিজেই সের প্রথম ওয়ার্কলোড, যাকে পাটিগণিত মানতেই হবে।',
    },
    {
      en: 'GitOps (Argo CD, Flux) is the compose-ledger lesson read at cluster scale: the YAML file is the fleet, the pull-request is the keyboard, the controller is the conscience.',
      bn: 'GitOps (Argo CD, Flux) হলো ক্লাস্টার-মাপে-পঠিত compose-ledger-পাঠ: YAML-ফাইল-ই বহর, pull-request-ই কিবোর্ড, কন্ট্রোলার-ই বিবেক।',
    },
    {
      en: 'Multi-cluster federation, service meshes and cell-based architectures are the same sentences one octave up: labels become geography, endpoints become cells, and the reconciliation loop learns to price latency.',
      bn: 'বহু-ক্লাস্টার-ফেডারেশন, সার্ভিস-মেশ আর সেল-ভিত্তিক স্থাপত্য একই বাক্য এক অষ্টক উপরে: লেবেল হয় ভূগোল, এন্ডপয়েন্ট হয় সেল, আর reconciliation-লুপ শিখে নেয় ল্যাটেন্সি মূল্য দিতে।',
    },
  ],
};
