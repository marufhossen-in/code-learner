import type { Lesson } from '../../../lib/types';

export const schedulerArithmeticLesson: Lesson = {
  slug: 'the-scheduler-arithmetic',
  tech: 'kubernetes',
  title: {
    en: 'Scheduler Arithmetic — And stands ready to defend the decision in',
    bn: 'সূচক-পাটিগণিত: কে কোথায় বসে, প্রমাণসহ'
  },
  summary: {
    en: 'Master the Kubernetes scheduling cycle, resource budgeting, and pod placement mechanics. Schedulers assign pods to nodes through two consecutive phases: filtering out unfit nodes and scoring viable candidates based on affinity and spreading priorities. Learn how CPU and memory requests budget node allocatable capacity, while limits control runtime throttling. Use taints and tolerations to isolate dedicated infrastructure, configure podAntiAffinity across availability zones, and manage Quality of Service (QoS) classes to ensure deterministic eviction order under node memory pressure.',
    bn: 'Kubernetes শিডিউলিং চক্র, রিসোর্স বাজেট এবং নোডে পড স্থাপন পাটিগণিতে দক্ষতা অর্জন করুন। শিডিউলার দুটি ধাপে নোডে পড বরাদ্দ করে: অযোগ্য নোড ফিল্টার করা এবং উপযুক্ত নোডগুলোকে স্কোরিং করে নির্বাচন করা। জানুন কীভাবে সিপিইউ ও মেমরি রিকোয়েস্ট নোডের সক্ষমতা বরাদ্দ করে এবং লিমিট অতিরিক্ত ব্যবহার ঠেকায়। টেইন্ট ও টলারেশনের মাধ্যমে বিশেষ নোড সংরক্ষণ, অ্যাফিনিটি দিয়ে জোনজুড়ে পড ছড়ানো এবং মেমরি সংকটে কিউওএস (QoS) শ্রেণিভিত্তিক উচ্ছেদ নিয়ন্ত্রণের কৌশল শিখুন।',
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT placement actually is', bn: 'স্থাপন আসলে কী' } },
    {
      type: 'para',
      text: {
        en: 'The Kubernetes scheduler determines where each pod runs using systematic mathematical evaluation. Every pod specifies CPU and memory requests that reserve dedicated slices of a node allocatable capacity. During placement, the scheduler executes a filtering pass to eliminate nodes that lack capacity or match taints, followed by a scoring pass that ranks the remaining candidates. Understanding this placement arithmetic helps you prevent unschedulable pending states and ensures resilient high availability across your nodes.',
        bn: 'Kubernetes শিডিউলার গাণিতিক মূল্যায়নের মাধ্যমে নির্ধারণ করে কোন পড কোন নোডে চলবে। প্রতিটি পড সিপিইউ এবং মেমরি রিকোয়েস্টের মাধ্যমে নোডের বরাদ্দযোগ্য সক্ষমতা সংরক্ষণ করে। বসানোর সময় শিডিউলার প্রথমে ফিল্টারিং পাস চালিয়ে অযোগ্য বা টেইন্টযুক্ত নোডগুলো বাদ দেয় এবং এরপর স্কোরিং পাসে সেরা নোডটি বেছে নেয়। এই পাটিগণিত বুঝতে পারলে পেন্ডিং পডের সমস্যা দ্রুত সমাধান করা যায় এবং সিস্টেমের নির্ভরযোগ্যতা বজায় থাকে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'allocatable', def: { en: 'capacity minus reservations: the chair’s honest purse, after its own household is fed first', bn: 'ক্ষমতা বিয়োগ সংরক্ষণ: আসনের সৎ-মানিব্যাগ, নিজের সংসার আগে খাওয়ানোর পর' } },
        { term: 'filter / score', def: { en: 'hard subtraction leaves candidates; soft magnets rank them — Pending always resolves to one filter line', bn: 'কঠোর-বিয়োগ প্রার্থী রাখে; নরম-চুম্বক ক্রম দেয় — Pending সবসময় একটি filter-পঙ্‌ক্তিতে মীমাংসিত হয়' } },
        { term: 'taint / toleration', def: { en: 'taxes chairs levy / licenses pods buy: repulsion as fleet economics', bn: 'আসনের আরোপিত-কর / পডের কেনা-লাইসেন্স: বহর-অর্থনীতিরূপে বিকর্ষণ' } },
        { term: 'podAntiAffinity', def: { en: 'sit AWAY from my siblings: replicas across chairs and zones — quorum insurance written as grammar', bn: 'ভাইবোন থেকে দূরে বসো: আসন ও জোনে রেপ্লিকা — ব্যাকরণে-লেখা গরিষ্ঠতা-বীমা' } },
        { term: 'QoS class', def: { en: 'Guaranteed pays full fare and evicts last; BestEffort rides free and evicts FIRST — the invoice minted into the atom', bn: 'Guaranteed পূর্ণ-ভাড়া দেয়, সর্বশেষ-উচ্ছিষ্ট; BestEffort বিনা-যাত্রা, প্রথমে-উচ্ছিষ্ট — পরমাণুতে-ছাপানো চালান' } },
        { term: 'oom_score_adj', def: { en: 'the kubelet-etched number the kernel reads when the node sighs: who gets billed first is arithmetic', bn: 'নোড দীর্ঘশ্বাস ফেললে কার্নেলের পঠিত kubelet-খোদাইকৃত-সংখ্যা: প্রথমে কার নামে চালান তা পাটিগণিত' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY placement must be provable', bn: 'কেন স্থাপন প্রমাণযোগ্য হতে বাধ্য' } },
    {
      type: 'para',
      text: {
        en: 'The pod paradox from lesson one says the atom may sit anywhere; this lesson says the WHERE is a document you can subpoena. WHY-ONE, EFFICIENCY AS SUBTRACTION: a fleet is a bin-packing puzzle where every chair’s Allocatable is spent either on reservations or on waste. Requests priced near STEADY-STATE reality turn utilization from folklore into arithmetic you can report to finance (the container metric from the docker hub: reserved vs used, finally a ledger instead of a prayer). WHY-TWO, EXCLUSION AS DESIGN: taints exist because SOME chairs are special (GPU-priced, compliance-approved, control-plane-quiet) — the tax makes specialization a register row instead of a hallway agreement. Every unlicensed pod that bounces off is a cost-sentence executed before it can detonate a bill. WHY-THREE, CORRELATION AS THE QUIET KILLER: three replicas on one chair is not a fleet, it is one failure with three aliases; podAntiAffinity across zones is the arithmetic of INCORRELATED death. The quorum choir from distributed systems, priced in topology: one zone down, two-thirds singing. WHY-FOUR, EVICTION AS PRE-WRITTEN LAW: nodes under memory pressure will SIGH, and the sigh must not be improvised — QoS classes pre-decide whose invoice arrives first (BestEffort free riders, then Burstable, Guaranteed last), so the 3 a.m. eviction is a court executing a statute, not a mob; the alternative is the debug file’s scene: the kernel improvising, and reaching — by oom_score arithmetic nobody reviewed — for the database. Provable placement is the difference between a cluster that EXPLAINS ITSELF and a cluster that merely HAPPENS.',
        bn: 'প্রথম পাঠের পড-পরাদক্স বলে পরমাণু যে-কোথায় বসতে পারে; এই পাঠ বলে কোথায়-অংশটি এমন দলিল, যা আপনি তলব করতে পারেন। একনম্বর, বিয়োগফলরূপে দক্ষতা: ক্লাস্টার হলো একটি বিন-প্যাকিং সমস্যা যেখানে প্রতিটি নোডের Allocatable ক্ষমতা সংরক্ষণ বা অপচয়ে ব্যয় হয়। বাস্তব ব্যবহারের কাছাকাছি রিকোয়েস্ট নির্ধারণ করলে রিসোর্স বরাদ্দের সঠিক হিসাব পাওয়া যায়। এটি অনুমানের পরিবর্তে নিশ্চিত পাটিগণিত প্রতিষ্ঠা করে। দ্বিতীয়, নকশারূপে বর্জন: taint থাকে কারণ কিছু আসন বিশেষ (GPU-মূল্যায়িত, নিয়মতান্ত্রিক-অনুমোদিত, কন্ট্রোল-প্লেন-নিস্তব্ধ) — কর বিশেষীকরণ করে খাতাসারি, করিডোর-সমঝোতা নয়; ছিটকে-ফেরা প্রতি অলাইসেন্সকৃত-পড হলো খরচ-বাক্য, বিল-বিস্ফোরণের পূর্বেই কার্যকর। তৃতীয়, নীরব-ঘাতকরূপে সহসম্বন্ধ: একটি আসনে তিন রেপ্লিকা বহর নয়, তিন ছদ্মনামে একটি ব্যর্থতা; জোনজুড়ে podAntiAffinity হলো অসহসম্বদ্ধ-মৃত্যুর পাটিগণিত — distributed-systems-এর গরিষ্ঠতা-সুরদল, টপোলজিতে মূল্যায়িত: একটি জোন ডাউন, দুই-তৃতীয়াংশ গাইছে। চতুর্থ, পূর্বলিখিত-আইনরূপে উচ্ছেদ: মেমরি-চাপে নোড দীর্ঘশ্বাস ফেলবেই, আর দীর্ঘশ্বাস আকস্মিক উদ্ভাবিত হওয়া চলবে না — QoS-শ্রেণি পূর্বেই ঠিক করে কার চালান প্রথমে আসবে (BestEffort বিনা-যাত্রী, তারপর Burstable, Guaranteed সর্বশেষ), তাই ভোর-৩টার উচ্ছেদ হলো সংবিধান-কার্যকরকারী আদালত, দাঙ্গা নয়। বিকল্প হলো ডিবাগ-ফাইলের দৃশ্য: কার্নেল উদ্ভাবনে নেমেছে, আর পৌঁছে গেছে. কেউ পর্যালোচনা-করেনি এমন oom_score-পাটিগণিতে — ডেটাবেসের দরজায়। প্রমাণযোগ্য-স্থাপন হলো সেই পার্থক্য, যেখানে একদিকে ক্লাস্টার নিজের ব্যাখ্যা দেয়, অন্যদিকে ক্লাস্টার কেবল ঘটে যায়।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to run the arithmetic', bn: 'কীভাবে পাটিগণিত চালাবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Price requests from actual metrics rather than guesswork. Measure thirty days of resource usage with metrics-server to set realistic requests. Set limits as burst insurance against spikes, using twice the request for web APIs.', bn: 'অনুমান না করে প্রকৃত মেট্রিক থেকে রিকোয়েস্ট নির্ধারণ করুন। metrics-server দিয়ে ৩০ দিনের গড় ব্যবহার দেখে বাস্তবসম্মত রিকোয়েস্ট লিখুন। আকস্মিক চাপ সামলাতে রিকোয়েস্টের দ্বিগুণ পর্যন্ত লিমিট নির্ধারণ করা যেতে পারে।' },
        { en: 'Read the chair’s honest purse: kubectl describe node shows Capacity AND Allocatable side by side — every “it should fit” conversation that skips the reservation household (kubelet, system daemons) re-discovers arithmetic at scale, expensively.', bn: 'আসনের সৎ-মানিব্যাগ পড়ুন: kubectl describe node দেখায় Capacity এবং Allocatable পাশাপাশি — প্রতি “তো মাপা উচিত” আলোচনা, যা সংরক্ষণ-সংসার (kubelet, সিস্টেম-ডিমন) এড়ায়, সে পাটিগণিত পুনরাবিষ্কার করে বড়-পরিসরে, মূল্যবানভাবে।' },
        { en: 'Translate every Pending into one filter line: kubectl describe pod → Events narrate the FILTER’s verdict (0/5 nodes available: 3 Insufficient memory, 2 node(s) had untolerated taint). Remediation is always named IN the verdict: raise chairs, lower requests, or buy the license (toleration).', bn: 'প্রতিটি Pending পডের কারণ ইভেন্টে খুঁজে নিন। kubectl describe pod চালালে ফিল্টারিংয়ের রায় স্পষ্ট দেখা যায় (যেমন: ৫টির মধ্যে ০টি নোড প্রাপ্য)। প্রতিকারও রায়ের ভেতরেই থাকে: নোড বাড়ানো, রিকোয়েস্ট কমানো কিংবা টলারেশন যুক্ত করা।' },
        { en: 'Tax the special chairs before the pods arrive: kubectl taint nodes db-1 dedicated=db:NoSchedule at pool creation, tolerance written into the database’s spec the same PR. A tax that goes live WITHOUT its licensed class of payer is a chair no one may rent.', bn: 'বিশেষ-আসনে কর আরোপ করুন পড আসার আগেই: পুল-সৃষ্টিতে kubectl taint nodes db-1 dedicated=db:NoSchedule, ডেটাবেসের স্পেকে লাইসেন্স একই PR-এ লেখা — পণ্ডিত-শ্রেণির করদাতা ছাড়া কার্যকর হওয়া কর এমন আসন, যা কেউ ভাড়া নিতে পারে না।' },
        { en: 'Affinitize for INCORRELATED death: podAntiAffinity with topologyKey: topology.kubernetes.io/zone ON THE REPLICA’S OWN LABEL. Three replicas, three zones, one verdict: a zone outage is arithmetic you priced (capacity −1/3), not a surprise that pages three alarms at once, all aliases of the same corpse.', bn: 'অসহসম্বদ্ধ-মৃত্যুর জন্য affinitize করুন: topologyKey: topology.kubernetes.io/zone-দোষারূপে podAntiAffinity, রেপ্লিকার নিজস্ব-লেবেলে — তিন রেপ্লিকা, তিন জোন, একটি রায়: জোন-বিভ্রাট হলো আপনার-মূল্যায়িত পাটিগণিত (সক্ষমতা −১/৩), তিনটি সতর্কতা একসাথে-পেজকারী বিস্ময় নয়, সবই একই মৃতদেহের ছদ্মনাম।' },
        { en: 'Mint QoS classes on purpose: Guaranteed for the quorum and the desk (request == limit), Burstable for honest workers, BestEffort EXACTLY for the things you would evict first yourself (preview builds, cache warmers). And then the eviction order at node pressure reads as YOUR law, executed by the kernel, reviewable in a postmortem.', bn: 'QoS-শ্রেণি সচেতনভাবে ছাপান: গরিষ্ঠতা ও ডেস্কে Guaranteed (request == limit), সৎ-কর্মীদেদ Burstable, BestEffort হুবহু সেই জিনিসগুলোয় যা আপনি নিজেই প্রথমে উচ্ছেদ করতেন (প্রিভিউ-বিল্ড, ক্যাশ-উষ্ণায়ক) — তারপর নোড-চাপে উচ্ছেদ-ক্রম পড়বে আপনার-আইনরূপে, কার্নেল-কার্যকরিত, পোস্টমর্টেমে-পর্যালোচনীয়।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: chairs in the lab', bn: 'দৃশায়ন: ল্যাবে আসন' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'In the visualizer, scale the deployment to 4 — watch the filter-score waltz place atoms across chairs by subtraction. And try scaling past the pool’s allocatable: the last atoms sit Pending with one legible filter line each, forever honest, never folklore.',
        bn: 'ভিজ্যুয়ালাইজারে ডিপ্লয়মেন্ট ৪-এ স্কেল করুন — filter-score নাচ পরমাণুদের বিয়োগফলে আসনে-আসনে বসাতে দেখুন, আর পুলের allocatable ছাড়িয়ে স্কেলের চেষ্টা করুন: শেষ পরমাণুগুলো Pending বসে থাকে, প্রতিটির একটি সুপাঠ্য filter-পঙ্‌ক্তিসহ, চিরকাল সৎ, লোককথা নয় কখনো।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: the machine under the waltz', bn: 'অভ্যন্তরীণ: নাচের নিচের যন্ত্র' } },
    {
      type: 'para',
      text: {
        en: 'Five mechanisms worth subpoenaing. ONE, THE EXAMINER’S LOOP: kube-scheduler watches for pods with no nodeName, runs its two passes, and writes a BINDING (a register row saying “this atom, this chair”). The kubelet on the chosen chair picks the atom up from the watch stream and files the local beginning. Placement is thus a DOCUMENT in the register, not ambient consensus — hence subpoenable. TWO, THE HOUSEHOLD BOOKS: Allocatable = Capacity − kubeReserved − systemReserved − eviction-threshold. The kubelet keeps memory/disk pressure marks (nodefs.available, memory.available below ~100Mi default) and ABOVE the sigh it starts evicting pods in QoS order, reclaiming the chair’s household before anything else starves. The pressure marks are the pre-written emergency statute. THREE, THE OOM MECHANICS: when the kernel’s own memory runs dry, the OOM killer reads oom_score_adj (etched by the kubelet: −998 for Guaranteed’s guardians, +1000 for BestEffort). The invoice is consulted INSIDE the crisis, with no time for argument. Every milligram of “why did IT die?” has an answer in /proc/<pid>/oom_score_adj. FOUR, THE MAGNET MATH: affinity terms compile into predicates (required) and weights (preferred 1–100) evaluated per CHAIR against pods ALREADY seated. Which is why anti-affinity pays like insurance only after the first citizen sits: the FIRST replica may sit anywhere. The replica-spread arrives with replica two. Named topologyKeys (kubernetes.io/hostname, .../zone) exchange names for geography. FIVE, THE DESCHEDULER’S HINDSIGHT: placement ages — nodes drain, skew accumulates, budgets move; the descheduler (and Karpenter’s consolidation) re-reads the register’s arithmetic against TODAY and evicts atoms whose placement has become folklore. Re-placement as scheduled truth-telling, which is placement arithmetic given a memory, closing the loop back to lesson two’s convergence grammar.',
        bn: 'পাঁচ প্রক্রিয়াটত্ত্ব, তলবযোগ্য। এক, পরীক্ষকের চক্র: kube-scheduler পর্যবেক্ষণ করে nodeName-বিহীন-পড, চালায় দুই পাস, আর লেখে একটি BINDING (খাতাসারি, বলছে “এই পরমাণু, এই আসন”) — নির্বাচিত-আসনের kubelet ওয়াচ-ধারা থেকে পরমাণু কুড়িয়ে নিয়ে দাখিল করে স্থানীয়-শুরু. স্থাপন তাই রওকদারির একটি দলিল, পরিবেষ্টনী-ঐকমত্য নয় — এইজন্যই তলবযোগ্য। দুই, সংসার-হিসাব: Allocatable = Capacity − kubeReserved − systemReserved − eviction-threshold। কিউবলেট মেমরি ও ডিস্ক চাপের অবস্থা পর্যবেক্ষণ করে এবং চাপ তৈরি হলে QoS ক্রমানুসারে পড উচ্ছেদ শুরু করে। এই চাপ-চিহ্নগুলো পূর্বনির্ধারিত জরুরি নিয়ম কার্যকর করে। তিন, OOM-যান্ত্রিকতা: কার্নেলের নিজের মেমরি শুকিয়ে গেলে, OOM-কিলার পড়ে oom_score_adj (kubelet-খোদাইকৃত: Guaranteed-পাহারাদারদের −998, BestEffort-এর +1000) — চালান পরামর্শিত হয় সংকটের ভেতরে, তর্কের সময় ছাড়াই; “ও কেন মরল?”-এর প্রতি মিলিগ্রামের উত্তর আছে /proc/<pid>/oom_score_adj-এ। চার, চুম্বক-পাটিগণিত: affinity-শর্ত সংকলিত হয় predicates-এ (required) আর weights-এ (preferred 1–100), মূল্যায়িত হয় আসনপ্রতি, ইতিমধ্যে-বসা পডদের বিপরীতে — এইজন্যই anti-affinity বীমার মতো পরিশোধ করে প্রথম নাগরিক বসার পরেই: প্রথম রেপ্লিকা যে-কোথায় বসতে পারে; রেপ্লিকা-বিস্তার আসে দ্বিতীয়-রেপ্লিকার সাথে. নামকৃত-topologyKey (kubernetes.io/hostname, .../zone) নামের বিনিময়ে ভূগোল দেয়। পাঁচ, DESCHEDULER-এর দিবাদৃষ্টি: স্থাপন পুরনো হয় — নোড নিষ্কাশিত, বৈষম্য জমে, বাজেট সরে; descheduler (আর Karpenter-এর সংহতিকরণ) আজকের দিনের সাথে রওকদারির পাটিগণিত পুনঃপাঠ করে আর উচ্ছেদ করে সেই পরমাণু, যাদের স্থাপন লোককথায় রূপ নিয়েছে. নির্ধারিত-সত্যকথনরূপে পুনঃস্থাপন, যা স্থাপন-পাটিগণিতকে স্মৃতি দেয়। চক্র বন্ধ করে দ্বিতীয় পাঠের অভিসারণ-ব্যাকরণে।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'arithmetic.yaml',
      caption: { en: 'One spec where every chair-decision is named: budgets, taxes, magnets, and the billing order.', bn: 'একটি স্পেক, যেখানে প্রতি আসন-সিদ্ধান্ত নামকৃত: বাজেট, কর, চুম্বক আর চালান-ক্রম।' },
      code: `apiVersion: scheduling.k8s.io/v1
kind: PriorityClass               # pre-written law: whose seats survive a storm
metadata: { name: quorum-critical }
value: 1000000                    # higher = evicted/preempted LATER
preemptionPolicy: PreemptLowerPriority
---
apiVersion: apps/v1
kind: Deployment
metadata: { name: ledger-api }
spec:
  replicas: 3
  selector: { matchLabels: { app: ledger-api } }
  template:
    metadata: { labels: { app: ledger-api } }
    spec:
      priorityClassName: api-serving
      containers:
        - name: app
          image: myapp:1.3
          resources:                # the chair receipt, two currencies
            requests: { cpu: 500m, memory: 256Mi }     # the scheduler's subtraction
            limits:   { memory: 512Mi }                # burst insurance; cpu unthrottled on purpose
      tolerations:                  # licensed for the serving pool's tax
        - { key: dedicated, operator: Equal, value: serving, effect: NoSchedule }
      affinity:
        podAntiAffinity:            # INCORRELATED death: siblings across zones
          requiredDuringSchedulingIgnoredDuringExecution:
            - topologyKey: topology.kubernetes.io/zone
              labelSelector:
                matchLabels: { app: ledger-api }      # away from MY OWN SIBLINGS
        nodeAffinity:               # magnet for the right kind of chair
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 80
              preference:
                matchExpressions:
                  - { key: node.kubernetes.io/instance-type, operator: In, values: [c6i.xlarge, c6a.xlarge] }`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what provable placement bought', bn: 'ফলাফল: প্রমাণযোগ্য-স্থাপন যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'arithmetic move', bn: 'পাটিগণিত-ভঙ্‌গি' }, { en: 'the contract signed', bn: 'সইকৃত-চুক্তি' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['requests from measurement', { en: 'every reservation defensible to finance', bn: 'প্রতি সংরক্ষণ অর্থ-বিভাগে-সমর্থনযোগ্য' }, { en: 'utilization becomes a report, not a vibe', bn: 'ব্যবহার হয় রিপোর্ট, অনুভূতি নয়' }, 'the 20%-utilized fleet nobody could explain'],
        ['pending as filter lines', { en: 'every unscheduled atom names its own remedy', bn: 'প্রতি অনির্ধারিত-পরমাণু বলে নিজের প্রতিকার' }, { en: 'capacity conversations start from verdicts', bn: 'সক্ষমতা-আলোচনা শুরু হয় রায় থেকে' }, 'the pending pod debugged for a week as “flaky”'],
        ['taints as taxes', { en: 'special chairs stay special by arithmetic', bn: 'বিশেষ-আসন থাকে বিশেষ, পাটিগণিতে' }, { en: 'licensed workloads alone land on reserved pools', bn: 'সংরক্ষিত-পুলে বসে কেবল লাইসেন্সধারী-কাজ' }, 'the gpu node quietly eaten by cron jobs'],
        ['anti-affinity siblings', { en: 'a zone’s death costs one-third, never three-thirds', bn: 'জোনের মৃত্যু খরচ করে এক-তৃতীয়াংশ, তিন-তৃতীয়াংশ নয়' }, { en: 'outage math stated in the spec, tested in drills', bn: 'বিভ্রাট-পাটিগণিত স্পেকে বলা, মহড়ায় পরীক্ষিত' }, 'the failover day that failed over to itself'],
        ['qos minted on purpose', { en: 'eviction order is pre-written law', bn: 'উচ্ছেদ-ক্রম পূর্বলিখিত-আইন' }, { en: 'node pressure executes your statute, not the kernel’s dice', bn: 'নোড-চাপ কার্যকর করে আপনার সংবিধান, কার্নেলের পাশা নয়' }, 'the database the oom killer billed first'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the OOM that billed the wrong victim', bn: 'ডিবাগ-ফাইল: সেই OOM, যা ভুল-শিকারের নামে চালান দিল' } },
    {
      type: 'para',
      text: {
        en: 'At 03:41 a database pod restarted unexpectedly. The postmortem identified three key facts. First, the node kernel log showed that the postgres process was terminated by the OOM killer. Second, an unbudgeted nightly batch job on the same node had ballooned from 300Mi to 7Gi. Because the batch job had no resource requests or limits, it ran as BestEffort. The kernel scored memory footprints under pressure and mistakenly targeted the database. The team resolved this by setting explicit CPU and memory budgets on batch jobs, moving databases to dedicated tainted nodes, and adding alerts for OOM kill events.',
        bn: 'ভোর ০৩:৪১ এ একটি ডাটাবেস পড অপ্রত্যাশিতভাবে রিস্টার্ট হয়। পোস্টমর্টেমে ৩টি মূল কারণ ধরা পড়ে। প্রথমত, নোডের কার্নেল লগে দেখা যায় যে OOM কিলার postgres প্রসেসটি বন্ধ করে দিয়েছে। দ্বিতীয়ত, একই নোডে চলা একটি বাজেটহীন ব্যাচ জব 300Mi থেকে 7Gi পর্যন্ত মেমরি গ্রাস করেছিল। কোনো রিকোয়েস্ট বা লিমিট না থাকায় ব্যাচ জবটি BestEffort হিসেবে চলছিল। মেমরি সংকটের মুখে কার্নেল তাৎক্ষণিক স্কোর দেখে ভুলবশত ডাটাবেসটি বন্ধ করে দেয়। দলটি ব্যাচ জবে সুস্পষ্ট সিপিইউ ও মেমরি বাজেট নির্ধারণ করে, ডাটাবেসকে টেইন্টযুক্ত নিজস্ব নোডে স্থানান্তর করে এবং OOM ইভেন্টের জন্য সতর্কবার্তা চালু করে সমস্যার সমাধান করে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: arithmetics with accountants', bn: 'বাস্তব-জগৎ: হিসাবরক্ষকসহ পাটিগণিত' } },
    {
      type: 'list',
      items: [
        { en: 'Vertical Pod Autoscaler writes the requests for you: measured p50s filed back into the spec on a cadence. The HOW-one loop made a controller, with the same caveat the loop taught: restart-on-apply means budgets arrive via the rollout grammar, not by magic.', bn: 'Vertical Pod Autoscaler আপনার জন্য requests লেখে: মাপা p50 নির্ধারিত-বিরতিতে স্পেকে ফেরত দাখিল — কন্ট্রোলারকৃত প্রথম-কীভাবে-চক্র, চক্রের শেখানো একই খেয়ালসহ: প্রয়োগে-পুনঃসূচনা মানে বাজেট আসে রোলআউট-ব্যাকরণে, জাদুতে নয়।' },
        { en: 'Karpenter / cluster-autoscaler apply the arithmetic to CHAIRS themselves: Pending pods priced against instance catalogs → a correctly-sized chair is purchased; the node pool stops being poetry (for all present and future moods) and becomes just-in-time arithmetic.', bn: 'Karpenter / cluster-autoscaler পাটিগণিত প্রয়োগ করে আসনেই: ইনস্ট্যান্স-ক্যাটালগের বিপরীতে মূল্যায়িত Pending-পড → সঠিক-আকারের আসন কেনা হয়; নোড-পুল কবিতা থাকা থামায় (বর্তমান ও ভবিষ্যৎ-মেজাজের জন্য) আর হয় ঠিকসময়ে-পাটিগণিত।' },
        { en: 'FinOps dashboards are this lesson as a monthly invoice: reserved-vs-used per namespace, idle allocatable as waste, best-effort census as risk posture — the register’s numbers, finally wearing a tie to the budget meeting.', bn: 'FinOps-ড্যাশবোর্ড হলো মাসিক-চালানরূপে এই পাঠ: নেমস্পেসপ্রতি সংরক্ষিত-বনাম-ব্যবহৃত, অপচয়রূপে নিষ্ক্রিয়-allocatable, ঝুঁকি-অঙ্গভঙ্গিরূপে best-effort-জনগণনা — রওকদারির সংখ্যাগুলো, অবশেষে টাই বেঁধে বাজেট-বৈঠকে।' },
        { en: 'Big fleets add SECOND schedulers (batch: Volcano/YuniKorn; quota-gang-scheduling for training) — the same filter-score waltz with weighted queues, because “who sits where” at 50k cores stops being preference and becomes law.', bn: 'বড় বহর দ্বিতীয় সূচক যোগ করে (ব্যাচে: Volcano/YuniKorn; প্রশিক্ষণে কোটা-gang-নির্ধারণ) — ওজনযুক্ত-সারিতে একই filter-score নাচ, কারণ ৫০ হাজার কোরে “কে কোথায় বসে” পছন্দ থাকা থামে আর আইন হয়ে ওঠে।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: health as dispatch, not as docs', bn: 'পরবর্তী: দলিল নয়, প্রেরণারূপে স্বাস্থ্য' } },
    {
      type: 'para',
      text: {
        en: 'Seats are subpoena-able now; the atoms on them must next prove they DESERVE the traffic. Next lesson: readiness/liveness/startup probes (three different questions — may I serve? am I alive? am I still waking?), restartPolicy as the atom’s attitude to its own death, PDBs as quorum law during voluntary rake, and HPA as feedback math wired back into lesson three’s deployments. Carried sentence: PLACEMENT IS NEVER AN ACCIDENT.',
        bn: 'আসন এখন তলবযোগ্য; ওপরে-বসা পরমাণুদের তারপর প্রমাণ করতে হবে তারা ট্রাফিকের যোগ্য। পরবর্তী পাঠ: readiness/liveness/startup-প্রোব (তিনটি ভিন্ন প্রশ্ন — সেবা দিতে পারি? বেঁচে আছি? জেগে উঠছি এখনো?), নিজের-মৃত্যুতে পরমাণুর মনোভাবরূপে restartPolicy, স্বেচ্ছা-মোচনকালে গরিষ্ঠতা-আইনরূপে PDB, আর তৃতীয় পাঠের ডিপ্লয়মেন্টে-প্রতিসংযোজিত প্রতিক্রিয়া-পাটিগণিতরূপে HPA। বহনযোগ্য বাক্য: স্থাপন কখনো দুর্ঘটনা নয়।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-arith-ex1', kind: 'mcq', topic: 'filter lines',
      question: { en: 'kubectl describe pod shows: “0/6 nodes are available: 2 node(s) had untolerated taint {dedicated: db}, 4 Insufficient memory.” What are the EXACT three remedies this verdict names?', bn: 'kubectl describe pod দেখায়: “0/6 নোড প্রাপ্য: 2 নোডে ছিল অসহ্য-taint {dedicated: db}, 4টি Insufficient memory।” এই রায় হুবহু কোন তিন প্রতিকারের নাম বলে?' },
      options: [
        { en: '(1) buy the license: add a toleration for dedicated=db so the two taxed chairs admit the pod (only if it belongs to that pool). 2) shrink the ask: lower memory requests until the subtraction fits any of the four (verify with describe node against Allocatable). 3) buy bigger chairs: cluster-autoscaler/Karpenter-style scale-out so a new chair’s Allocatable satisfies the request. Every Pending is one filter line away from its own remedy', bn: '(১) লাইসেন্স কিনুন: dedicated=db-এর জন্য toleration যোগ করুন, যাতে দুই করারোপিত-আসন পড ভর্তি করে (কেবল যদি তা সেই পুলেরই হয়); (২) দাবি ছোট করুন: memory-requests এত কমান, যাতে বিয়োগফল চারটির যে-কোনোটিতে মেলে (describe node দিয়ে Allocatable-এর বিপরীতে যাচাই). ৩) বড় আসন কিনুন: cluster-autoscaler/Karpenter-ধরনের সম্প্রসারণ, যাতে নতুন আসনের Allocatable request-পূরণ করে। প্রতি Pending তার প্রতিকারের এক filter-পঙ্‌ক্তি দূরে' },
        { en: 'delete the pod and hope the next scheduler run is luckier', bn: 'পড মুছে দিন আর পরের সূচক-রান ভাগ্যবান হবে আশা করুন' },
        { en: 'restart kube-scheduler; its cache is stale', bn: 'kube-scheduler পুনঃসূচনা করুন; তার ক্যাশ বাসি' },
        { en: 'add more replicas so at least one lands', bn: 'আরও রেপ্লিকা যোগ করুন, অন্তত একটা বসবে' },
      ],
      answer: 0,
      hint: { en: ' FILTER speaks in three currencies: licenses, subtractions, chairs.', bn: 'FILTER তিন মুদ্রায় কথা বলে: লাইসেন্স, বিয়োগফল, আসন।' },
      explanation: { en: 'Pending is a question with the answer included. The verdict always names which arithmetic failed — license missing, subtraction failing, or chairs too small.', bn: 'Pending হলো উত্তরসহ প্রশ্ন। রায় সবসময় নাম বলে কোন পাটিগণিত ব্যর্থ — লাইসেন্স নেই, বিয়োগফল ব্যর্থ, না আসন ছোট।' },
    },
    { id: 'k8s-arith-ex2', kind: 'predict', topic: 'correlated death',
      question: { en: 'Three replicas, one cloud zone, no anti-affinity. The scheduler, free to spread, puts all three on chairs in zone-a (it scored them best). Zone-a dies. Predict the blast story, and name the one spec line that would have priced it correctly.', bn: 'তিন রেপ্লিকা, একটি ক্লাউড-জোন, anti-affinity নেই। সূচক, ছড়ানোর স্বাধীনতায়, তিনটিই বসাল zone-a-র আসনে (সেরা স্কোর পেয়েছিল)। zone-a মরে গেল। বিস্ফোরণ-কাহিনি ভবিষ্যদ্বাণী করুন, আর সেই একটি স্পেক-পঙ্‌ক্তির নাম বলুন যা তা সঠিকভাবে মূল্য দিত।' },
      options: [
        { en: 'all three atoms are corpses in one zone-file: the NAME (lesson four) instantly keeps its promise to ZERO keepers — DNS resolves, truth-set empty, 100% outage wearing the shape of a topology accident. The pricing line: podAntiAffinity with topologyKey: topology.kubernetes.io/zone against the replicas’ own label. After that, zone-a’s death costs one-third, the service holds. And the dying atoms became an EVENT instead of an obituary', bn: 'তিন পরমাণুই এক জোন-ফাইলে মৃতদেহ: নাম (চতুর্থ পাঠ) তাৎক্ষণিক রাখে প্রতিশ্রুতি শূন্য-রক্ষাকারীতে — DNS রূপান্তর করে। সত্য-সেট খালি, ১০০% বিভ্রাট টপোলজি-দুর্ঘটনার আকৃতিতে; মূল্য-পঙ্‌ক্তি: রেপ্লিকার নিজস্ব-লেবেলের বিপরীতে topologyKey: topology.kubernetes.io/zone-দোষারূপে podAntiAffinity — তারপর zone-a-এর মৃত্যু খরচ করে এক-তৃতীয়াংশ, সার্ভিস ধরে রাখে। আর মরণশীল পরমাণু হয় মৃত্যুসংবাদের বদলে একটি ঘটনা' },
        { en: 'kubernetes re-routes traffic across zones automatically, outage ≈ seconds', bn: 'kubernetes জোনজুড়ে ট্রাফিক স্বয়ংক্রিয়-পুনঃরুট করে, বিভ্রাট ≈ সেকেন্ড' },
        { en: 'nodeport would have saved it', bn: 'NodePort তা বাঁচাত' },
        { en: 'the statefulset would survive because of pvcs', bn: 'StatefulSet টিকত, PVC-র জন্য' },
      ],
      answer: 0,
      hint: { en: 'What is the fleet when its replicas share one failure? One failure with three…', bn: 'একটি ব্যর্থতা রেপ্লিক ছাড়ালে বহর কী? তিন… ছদ্মনামে একটি ব্যর্থতা' },
      explanation: { en: 'Replication without anti-correlation is an alias, not an insurance. The zone is the unit of death; anti-affinity is the line that prices that truth into the spec.', bn: 'প্রতিরোধীকরণ-বিহীন প্রতিলিপি বীমা নয়, ছদ্মনাম। জোন-ই মৃত্যু-একক; anti-affinity সেই পঙ্‌ক্তি, যা সেই সত্য স্পেকে মূল্যায়ন করে।' },
    },
    { id: 'k8s-arith-ex3', kind: 'mcq', topic: 'qos billing order',
      question: { en: 'A node reports memory pressure. The kubelet must evict. Write the eviction ORDER across the three QoS classes, and justify it in one sentence.', bn: 'নোড মেমরি-চাপ রিপোর্ট করে। kubelet-কে উচ্ছেদ করতেই হবে। তিন QoS-শ্রেণির মধ্যে উচ্ছেদ-ক্রম লিখুন, আর এক বাক্যে তার যুক্তি দিন।' },
      options: [
        { en: 'BestEffort first (free riders: no arithmetic filed, no invoice to appeal with), then Burstable (partial fare: some arithmetic, some protection), Guaranteed LAST (request == limit: full fare paid in advance. The kubelet’s statute says whoever priced their seat exactly is evicted only after every freeloader has left). Eviction order is the invoice made flesh, never temperament', bn: 'প্রথমে BestEffort (বিনা-যাত্রী: দাখিলকৃত-পাটিগণিত নেই, আপিলের চালান নেই), তারপর Burstable (আংশিক-ভাড়া: কিছু পাটিগণিত, কিছু সুরক্ষা), Guaranteed সর্বশেষ (request == limit: আগেই-পরিশোধিত পূর্ণ-ভাড়া. Kubelet-এর সংবিধান বলে যে তার আসন হুবহু মূল্য দিয়েছে, সে উচ্ছিষ্ট হয় প্রতি মুক্তযাত্রী চলে যাওয়ার পরেই) — উচ্ছেদ-ক্রম দেহধারী-চালান, স্বভাব নয় কখনোই' },
        { en: 'guaranteed first — they use the most, so they must go first', bn: 'প্রথমে Guaranteed — তারাই সবচেয়ে বেশি ব্যবহার করে, আগে তাদেরই যেতে হবে' },
        { en: 'random order, to keep it fair', bn: 'এলোমেলো-ক্রম, ন্যায্য রাখতে' },
        { en: 'newest first — the veteran pods have earned tenure', bn: 'নতুন আগে — প্রবীণ পড মেয়াদ অর্জন করেছে' },
      ],
      answer: 0,
      hint: { en: 'Who paid full fare, and what does a full fare buy under pressure?', bn: 'কে পূর্ণ-ভাড়া দিল, আর চাপে পূর্ণ-ভাড়া কী কিনে?' },
      explanation: { en: 'QoS is pre-written law: the fare you paid in arithmetic is the protection you hold in the storm. The kubelet executes statute; only the kernel improvises (oom_score makes the crisis cruder — which is why untiered memory is roulette).', bn: 'QoS পূর্বলিখিত-আইন: পাটিগণিতে-পরিশোধিত ভাড়াই ঝড়ে আপনার সুরক্ষা। kubelet সংবিধান কার্যকর করে; কেবল কার্নেল উদ্ভাবন করে (oom_score সংকটকে অশিষ্টতর করে — এইজন্যই স্তরহীন-মেমরি রুলেট)।' },
    },
  ],
  quiz: {
    id: 'k8s-arith-quiz',
    title: { en: 'The Arithmetic Exam', bn: 'পাটিগণিত-পরীক্ষা' },
    questions: [
      { id: 'sa1', kind: 'mcq', topic: 'requests truth',
        question: { en: 'Why must requests be priced from MEASURED steady state rather than launch-day guesses?', bn: 'কেন requests মূল্য দিতে হয় মাপা স্থির-অবস্থা থেকে, উদ্বোধন-দিনের অনুমান থেকে নয়?' },
        options: [
          { en: 'requests are a double-sided ledger: overpriced, they mint WASTE (chairs reserved and idle: the 20%-utilization fleet whose invoice finance cannot map to value). Underpriced, they mint CONTENTION (atoms packed onto chairs that cannot feed them at pressure hour: throttling, queues, latency folklore at 6 p.m.). Only measured p50/p95 arithmetic makes both ledgers small at once — utilization as a report, starvation as an exception. Guesses price BOTH wrong simultaneously, which is the quietest way to be expensive AND slow', bn: 'requests দ্বিপাক্ষিক-খাতা: অতিমূল্যায়িত, সে ছাপায় অপচয় (সংরক্ষিত-ও-নিষ্ক্রিয় আসন: ২০%-ব্যবহারের বহর, যার চালান অর্থ-বিভাগ মূল্যে মেলাতে পারে না) — কমমূল্যায়িত, সে ছাপায় সংগ্রাম (আসনে গাদা করা পরমাণু, চাপের-ঘণ্টায় খাওয়াতে অক্ষম: থ্রটলিং, সারি, সন্ধ্যা-৬টার লেটেন্সি-লোককথা). কেবল মাপা p50/p95-পাটিগণিত দুই খাতাই একসাথে ছোট করে — রিপোর্টরূপে ব্যবহার, ব্যতিক্রমরূপে অনাহার. অনুমান দুটোই একসাথে ভুল মূল্য দেয়। যা একই সঙ্গে মূল্যবান ও ধীর হওয়ার সবচেয়ে নীরব-পথ' },
          { en: 'kubernetes rejects guessed requests at admission', bn: 'kubernetes অনুমানের-requests ভর্তিতে প্রত্যাখ্যান করে' },
          { en: 'measured requests make images smaller', bn: 'মাপা-requests ইমেজ ছোট করে' },
          { en: 'guesses are fine; only limits matter', bn: 'অনুমান চলে; গুরুত্বপূর্ণ শুধু limits' },
        ],
        answer: 0,
        hint: { en: 'Name both ledgers that a wrong request inflates at once.', bn: 'ভুল-request যে দুই খাতা একসাথে ফোলায় তাদের নাম দিন।' },
        explanation: { en: 'The request is a reservation with two ledgers: waste above, contention below. Measurement is the only pricing that keeps both ledgers honest at the same time.', bn: 'request হলো দুই-খাতার সংরক্ষণ: উপরে অপচয়, নিচে সংগ্রাম। একই সময়ে দুই খাতাই সৎ রাখে একমাত্র পরিমাপ-মূল্যায়ন।' },
      },
      { id: 'sa2', kind: 'mcq', topic: 'preferred vs required',
        question: { en: 'You wrote podAntiAffinity as PREFERRED (weight 80) for your three replicas — and the scheduler still stacked two on one chair. Did the magnets malfunction?', bn: 'আপনি podAntiAffinity লিখলেন PREFERRED হিসেবে (weight 80) আপনার তিন রেপ্লিকায় — তবুও সূচক দুটো গাদা করল এক আসনে। চুম্বক কি ত্রুটিপূর্ণ কাজ করল?' },
        options: [
          { en: 'no — soft magnets ADVISE, arithmetic DECIDES: preferred terms only nudge the score ranking among chairs that already passed the filters (right sized, licensed). When arithmetic leaves few candidates (tight requests, taxed pool), the magnet loses honestly and co-location is the filter’s verdict, not the magnet’s betrayal. Incorrelated death you actually NEED must be written requiredDuringScheduling (a hard line the examiner may not cross), accepted with its own cost: a fourth replica may sit Pending forever rather than violate it', bn: 'না — নরম-চুম্বক পরামর্শ দেয়, পাটিগণিত সিদ্ধান্ত নেয়: preferred-শর্ত কেবল স্কোর-ক্রমে ধাক্কা দেয় সেই আসনগুলোর মধ্যে, যা filter ইতিমধ্যে পেরিয়েছে (ঠিক-আকারের, লাইসেন্সকৃত). পাটিগণিত যখন কম প্রার্থী ছাড়ে (সংকীর্ণ-requests, করারোপিত-পুল), চুম্বক সৎভাবে হেরে যায় আর সহবসন filter-এর রায়, চুম্বকের বিশ্বাসঘাতকতা নয়। প্রকৃতপক্ষে-প্রয়োজনীয় অসহসম্বদ্ধ-মৃত্যু লিখতে হয় requiredDuringScheduling-এ (কঠোর-রেখা, পরীক্ষক যা অতিক্রম করতে পারে না), নিজের-খরচ-স্বীকারসহ: চতুর্থ-রেপ্লিকা বসতে পারে চিরকাল-Pending, রেখা ভাঙার বদলে' },
          { en: 'yes — preferred anti-affinity is a no-op', bn: 'হ্যাঁ — preferred anti-affinity কোনো-কাজেই-আসে-না' },
          { en: 'the scheduler needed a restart to load the weights', bn: 'ওজন লোড করতে সূচকের পুনঃসূচনা দরকার ছিল' },
          { en: 'weights above 70 invert the magnet', bn: '৭০-এর উপরের ওজন চুম্বক উল্টে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Which keyword turns a nudge into a hard line the filter may not cross?', bn: 'কোন কীওয়ার্ড ধাক্কাকে এমন কঠোর-রেখায় রূপ দেয়, যা filter অতিক্রম করতে পারে না?' },
        explanation: { en: 'Required is the law, preferred is the weather report. If the topology failure would actually page you, write the magnet as law — and budget its Pending.', bn: 'required হলো আইন, preferred হলো আবহাওয়া-বুলেটিন। টপোলজি-ব্যর্থতা সত্যিই আপনাকে পেজ করলে, চুম্বককে লিখুন আইনরূপে — আর তার Pending বাজেট ধরুন।' },
      },
      { id: 'sa3', kind: 'mcq', topic: 'taint taxation',
        question: { en: 'An ops team creates a GPU pool and taints it gpu=true:NoSchedule in the same hour — but forgets to add tolerations to the training workloads for two days. What precisely happened during those two days?', bn: 'অপ্স-দল GPU-পুল বানায় আর একই ঘণ্টায় কর আরোপ করে gpu=true:NoSchedule — কিন্তু প্রশিক্ষণ-কাজে toleration যোগ করতে ভুলে যায় দুদিন। ওই দুদিনে হুবহু কী ঘটল?' },
        options: [
          { en: 'a tax went live WITHOUT its class of licensed payers: the GPU chairs sat in the register as fully empty, fully paid-for, and legally unrentable. Every training pod landed Pending with an honest filter line (“untolerated taint gpu=true”), the pool’s invoice ran at 100% waste. And the Dashboard of Villainy was two days of perfectly legible arithmetic: the remedy ALWAYS appears in the verdict itself (buy the license), which is exactly what the Friday PR did', bn: 'পণ্ডিত-শ্রেণির করদাতা ছাড়াই কার্যকর হলো একটি কর: GPU-আসন বসে রইল রওকদারিতে পুরো খালি, পুরো পরিশোধিত, আইনত-ভাড়ানোঅযোগ্য. প্রতি প্রশিক্ষণ-পড পড়ল Pending, সৎ filter-পঙ্‌ক্তিসহ (“অসহ্য-taint gpu=true”), পুলের চালান চলল ১০০% অপচয়ে, আর কুটতির-ড্যাশবোর্ড ছিল দুই দিনের নিখুঁত-সুপাঠ্য পাটিগণিত: প্রতিকার সবসময় আবির্ভূত হয় রায়ের ভেতরেই (লাইসেন্স কিনুন), শুক্রবারের PR হুবহু তাই করল' },
          { en: 'the gpu pool silently accepted everything', bn: 'GPU-পুল নীরবে সবকিছু গ্রহণ করল' },
          { en: 'training pods went to cpu nodes and performed the same', bn: 'প্রশিক্ষণ-পড গেল CPU-নোডে আর সমান-কার্যকারিতা দিল' },
          { en: 'the taint was ignored because it lacked a crd', bn: 'taint উপেক্ষিত হলো, CRD না থাকায়' },
        ],
        answer: 0,
        hint: { en: 'A tax with no licensed payer = what kind of chair? (Fully empty, fully paid…)', bn: 'লাইসেন্সধারী-করদাতাবিহীন কর = কেমন আসন? (পুরো খালি, পুরো পরিশোধিত…)' },
        explanation: { en: 'Taints make exclusion arithmetic. Arithmetic without its licensed class buys an empty, invoiced, untouchable pool — the most expensive chairs are the legal ones nobody may rent.', bn: 'Taint বর্জনকে পাটিগণিত করে। লাইসেন্সকৃত-শ্রেণিবিহীন পাটিগণিত কিনে খালি, চালানকৃত, অস্পর্শনীয়-পুল — সবচেয়ে মূল্যবান আসন সেই বৈধগুলো, যা কেউ ভাড়া নিতে পারে না।' },
      },
      { id: 'sa4', kind: 'mcq', topic: 'oom vs eviction',
        question: { en: 'Both the kubelet AND the kernel can kill a pod during memory crisis. What is the DIFFERENCE in their decision documents?', bn: 'মেমরি-সংকটে kubelet এবং কার্নেল দুজনেই পড হত্যা করতে পারে। তাদের সিদ্ধান্ত-দলিলের পার্থক্য কী?' },
        options: [
          { en: 'the kubelet acts FIRST and LAWFULLY: it watches its own pressure marks, evicts in QoS order (BestEffort → Burstable → Guaranteed last) — the pre-written statute, with graceful termination and legible events. The kernel’s OOM killer acts LAST and CRUDELY: it reads a single transient number (oom_score + oom_score_adj) mid-crisis, no grace, no events. Arithmetic nobody reviewed, executed with no time for argument. The discipline that keeps the kernel’s document irrelevant: QoS minted on purpose + limits named. So the kubelet’s statute ALWAYS resolves the pressure before the kernel’s dicecase is ever asked', bn: 'kubelet আগে ও আইনমতো কাজ করে: নিজের চাপ-চিহ্ন পর্যবেক্ষণ করে। QoS-ক্রমে উচ্ছেদ করে (BestEffort → Burstable → Guaranteed সর্বশেষ) — পূর্বলিখিত-সংবিধান, মার্জিত-সমাপ্তি ও সুপাঠ্য-ঘটনাসহ; কার্নেলের OOM-কিলার শেষে ও অশিষ্টভাবে কাজ করে: সংকট-মধ্যে একটি ক্ষণস্থায়ী-সংখ্যা পড়ে (oom_score + oom_score_adj), প্রশ্রয় নেই, ঘটনা নেই — কারও-অপর্যালোচিত পাটিগণিত, তর্কের-সময়হীন-কার্যকরিত. কার্নেলের দলিল অপ্রাসঙ্গিক রাখে যে শৃঙ্খলা: সচেতনভাবে-ছাপানো QoS + নামকৃত-limits, যাতে kubelet-এর সংবিধান সবসময় চাপ মিইয়ে, কার্নেলের পাশাক্কড়া জিজ্ঞেস-হওয়ার আগেই' },
          { en: 'they both consult the same qosclass table, the kernel is just faster', bn: 'দুজনেই একই qosClass-টেবিল নাড়ে, কার্নেল শুধু দ্রুততর' },
          { en: 'kubelet kills containers, kernel kills nodes', bn: 'kubelet হত্যা করে কন্টেইনার, কার্নেল নোড' },
          { en: 'kubelet always picks postgres first; kernel picks randomly', bn: 'kubelet সবসময় আগে postgres বাছে; কার্নেল এলোমেলো বাছে' },
        ],
        answer: 0,
        hint: { en: 'Statute with events and grace — versus one transient number with neither. Name both documents.', bn: 'ঘটনা ও প্রশ্রয়সহ সংবিধান — বনাম একটি ক্ষণস্থায়ী-সংখ্যা কোনোটিই ছাড়া। দুই দলিলের নাম দিন।' },
        explanation: { en: 'Two executioners, two documents: the kubelet holds your statute (QoS order, grace, events); the kernel holds a dice (transient score, no grace). Good arithmetic ensures only the statute is ever executed.', bn: 'দুই জল্লাদ, দুই দলিল: kubelet-এর হাতে আপনার সংবিধান (QoS-ক্রম, প্রশ্রয়, ঘটনা); কার্নেলের হাতে পাশা (ক্ষণস্থায়ী-স্কোর, প্রশ্রয়হীন)। ভালো পাটিগণিত নিশ্চিত করে কেবল সংবিধানই কখনো কার্যকর হয়।' },
      },
      { id: 'sa5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete: “Placement is never an ___.” (one word)', bn: 'পূর্ণ করুন: “স্থাপন কখনো ___ নয়।” (এক শব্দ)' },
        answer: 'accident',
        accept: ['দুর্ঘটনা', 'accidental'],
        hint: { en: 'Filter lines, taxes, magnets, invoices — every chair decision is…', bn: 'filter-পঙ্‌ক্তি, কর, চুম্বক, চালান — প্রতি আসন-সিদ্ধান্ত…' },
        explanation: { en: 'The scheduler lesson in one word: every placement is SUBTRACTION + TAX + MAGNET + INVOICE — named in the register, defensible in the postmortem.', bn: 'এক শব্দে সূচক-পাঠ: প্রতি স্থাপন বিয়োগফল + কর + চুম্বক + চালান — রওকদারিতে-নামকৃত, পোস্টমর্টেমে-সমর্থনযোগ্য।' },
      },
    ],
  },
  nextLesson: {
    slug: 'the-health-dispatch',
    title: { en: 'The Health Dispatch: probes, restarts, and the law of quorum', bn: 'স্বাস্থ্য-প্রেরণা: প্রোব, পুনঃসূচনা আর গরিষ্ঠতার আইন' },
  },
};
