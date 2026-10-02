import type { Lesson } from '../../../lib/types';

export const healthDispatchLesson: Lesson = {
  slug: 'the-health-dispatch',
  tech: 'kubernetes',
  title: {
    en: 'Health Dispatch — First READINESS AS THE TRUTH-SET GATEKEEPER, “may I join',
    bn: 'স্বাস্থ্য-প্রেরণা: প্রোব, পুনঃসূচনা আর গরিষ্ঠতার আইন'
  },
  summary: {
    en: 'Master Kubernetes health checking, container lifecycles, and autoscaling policies. Schedulers and kubelets inspect workloads through three specialized probes: readiness, liveness, and startup. Readiness probes determine whether a pod can receive traffic without killing the process. Liveness probes detect frozen processes and trigger container restarts. Startup probes protect slow-booting applications from premature failure. Learn how restartPolicy and CrashLoopBackOff manage failure loops, how PodDisruptionBudgets protect quorum during node maintenance, and how HorizontalPodAutoscalers scale workloads dynamically.',
    bn: 'Kubernetes হেলথ চেকিং, কন্টেইনার জীবনচক্র এবং অটোস্কেলিং নীতিমালায় দক্ষতা অর্জন করুন। কিউবলেট ৩টি বিশেষায়িত প্রোবের মাধ্যমে পডের অবস্থা পর্যবেক্ষণ করে: রেডিনেস (readiness), লাইভনেস (liveness) এবং স্টার্টআপ (startup)। রেডিনেস প্রোব পড ট্রাফিকের জন্য প্রস্তুত কি না তা নির্ধারণ করে। লাইভনেস প্রোব ডেডলক ধরা পড়লে কন্টেইনার রিস্টার্ট করে। স্টার্টআপ প্রোব ধীরগতির বুট হওয়া অ্যাপকে সুরক্ষা দেয়। restartPolicy, CrashLoopBackOff, পড ডিসরাপশন বাজেট (PDB) এবং হরিজন্টাল পড অটোস্কেলার (HPA) কীভাবে নির্ভরযোগ্যতা নিশ্চিত করে তা গভীরভাবে জানুন।',
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT proof of life actually is', bn: 'প্রাণ-প্রমাণ আসলে কী' } },
    {
      type: 'para',
      text: {
        en: 'The kubelet continually evaluates container health through three distinct probe mechanisms. Readiness probes determine whether an active pod can safely receive traffic from services without terminating the container. Liveness probes detect deadlocks or corrupted internal state to trigger automatic container restarts. Startup probes disable readiness and liveness checks temporarily, allowing slow initialization tasks to complete safely before health policies enforce traffic rules.',
        bn: 'কিউবলেট ৩টি পৃথক প্রোব প্রক্রিয়ার মাধ্যমে কন্টেইনারের স্বাস্থ্য সার্বক্ষণিক মূল্যায়ন করে। রেডিনেস প্রোব নির্ধারণ করে একটি চলমান পড ট্রাফিক গ্রহণের জন্য প্রস্তুত কি না। লাইভনেস প্রোব প্রসেস আটকে গেলে বা ডেডলক হলে স্বয়ংক্রিয়ভাবে কন্টেইনার রিস্টার্ট করে। আর স্টার্টআপ প্রোব ধীরগতির প্রাথমিক প্রক্রিয়ার সময় সাময়িকভাবে অন্য প্রোবগুলোকে নিষ্ক্রিয় রেখে অ্যাপ্লিকেশনকে স্বাভাবিকভাবে চালু হতে সাহায্য করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'readiness gate', def: { en: 'the truth-set turnstile: NO → struck from endpoints while the atom lives on (membership is reversible)', bn: 'সত্য-সেট-টার্নস্টাইল: না → এন্ডপয়েন্ট থেকে কর্তিত, অথচ পরমাণু বেঁচেই থাকে (সদস্যতা প্রত্যাবর্তনীয়)' } },
        { term: 'liveness floor', def: { en: 'the restart incantation: asks ONLY about the atom itself (deadlocks, hangs) — never the neighbors', bn: 'পুনঃসূচনা-মন্ত্র: জিজ্ঞেস করে কেবল পরমাণুকে-নিজেকে (ডেডলক, ঝুলন) — প্রতিবেশীকে কখনো নয়' } },
        { term: 'startup shield', def: { en: 'grace for slow risers: while unanswered, neither sibling probe may judge; waking is a legal status', bn: 'ধীর-জাগনীর করুণা: উত্তরহীন থাকা অবধি কোনো সহোদর-প্রোব রায় দিতে পারে না; জেগে-ওঠা একটি বৈধ-অবস্থা' } },
        { term: 'crashloopbackoff', def: { en: 'the Always-will meeting exponential mercy: restart delays double toward 5m — arithmetic against stampeding registries', bn: 'Always-ইচ্ছার সাক্ষাৎ সূচকীয়-দয়ার সাথে: পুনঃসূচনা-বিলম্ব দ্বিগুণে ৫ মিনিটে — হোড়কা-রেজিস্ট্রির বিরুদ্ধে পাটিগণিত' } },
        { term: 'poddisruptionbudget', def: { en: 'quorum legislation for voluntary kills: eviction API waits politely below your law', bn: 'স্বেচ্ছা-হত্যায় গরিষ্ঠতা-আইন: eviction-API আপনার আইনের নিচে ভদ্রভাবে অপেক্ষা করে' } },
        { term: 'hpa feedback', def: { en: 'desired = ceil(current × metric/target) with cooldown etiquette: the register arguing with its thermometer', bn: 'কাঙ্ক্ষিত = ceil(বর্তমান × মেট্রিক/লক্ষ্য), শীতলীকরণ-শিষ্টাচারসহ: থার্মোমিটারের সাথে তর্করত-রওকদারি' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY health must be three questions', bn: 'কেন স্বাস্থ্য হতে বাধ্য তিনটি প্রশ্ন' } },
    {
      type: 'para',
      text: {
        en: 'One question cannot carry three consequences, and consequences are the whole story. WHY-ONE, MEMBERSHIP IS REVERSIBLE, DEATH IS NOT: a dependency blip like a 90-second database hiccup is a temporary loss of serving capacity. Removing a pod from service endpoints is reversible, whereas killing a container is destructive. Readiness manages traffic membership, while liveness manages process restarts. WHY-TWO, YOUTH IS NOT MORBIDITY: slow-booting applications like JVM monoliths need initialization time. The startup probe protects slow applications by suppressing liveness checks during startup. WHY-THREE, DEATH NEEDS A UNION: exponential backoff delays restart attempts from 10 seconds up to 5 minutes to protect cluster nodes. The restartPolicy defines whether failed pods restart in place or exit permanently. WHY-FOUR, QUORUM IS A LAW, NOT A HOPE: the PodDisruptionBudget guarantees that voluntary operations like node drains never reduce replicas below required quorum. A drain operation pauses respectfully until replacement pods become ready.',
        bn: 'একটি প্রশ্ন তিনটি ভিন্ন পরিণতি বহন করতে পারে না। একনম্বর, সদস্যতা প্রত্যাবর্তনীয় কিন্তু মৃত্যু নয়: ৯০ সেকেন্ডের ডাটাবেস বিঘ্ন একটি সাময়িক সমস্যা। রেডিনেস প্রোব পডকে বাঁচিয়ে রেখে কেবল ট্রাফিক বন্ধ করে, অন্যদিকে লাইভনেস প্রোব কন্টেইনার মেরে ফেলে। দ্বিতীয়ত, যৌবন কোনো রোগ নয়: অনেক অ্যাপ্লিকেশন বুট হতে অতিরিক্ত সময় নেয়। স্টার্টআপ প্রোব এই ধীরগতির অ্যাপগুলোকে প্রাথমিক অবস্থায় লাইভনেস ব্যর্থতা থেকে সুরক্ষা দেয়। তৃতীয়ত, মৃত্যুর জন্য নিয়ম প্রয়োজন: কিউবলেটের সূচকীয় ব্যাকঅফ পুনঃসূচনা বিলম্ব ১০ সেকেন্ড থেকে বাড়িয়ে ৫ মিনিট পর্যন্ত নেয়। চতুর্থত, গরিষ্ঠতা একটি আইন, কেবল আশা নয়: PodDisruptionBudget নিশ্চিত করে যে নোড রক্ষণাবেক্ষণের সময় সক্রিয় রেপ্লিকার সংখ্যা নির্ধারিত কোরামের নিচে নামবে না।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to dispatch health', bn: 'কীভাবে স্বাস্থ্য প্রেরণ করবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Design /readyz to know the world, /livez to know NOTHING: readiness checks pools, migrations, downstreams (the whole dependency tree it deserves to know); liveness checks the event loop answers at all (a thread-ping, never a query). The debug file was born when someone let liveness read ONE neighbor’s name.', bn: 'জগৎ জানতে /readyz নকশা করুন, কিছুই-না-জানতে /livez: readiness পরীক্ষা করে পুল, মাইগ্রেশন, ডাউনস্ট্রিম (জানার-যোগ্য সমগ্র নির্ভরতা-বৃক্ষ); liveness পরীক্ষা করে ইভেন্ট-লুপ মোটেও উত্তর দেয় কি না (থ্রেড-পিং, ক্যোয়ারি কখনো নয়) — ডিবাগ-ফাইলের জন্ম হয়েছিল। যখন কেউ liveness-কে এক প্রতিবেশীর নাম পড়তে দিল।' },
        { en: 'Price probe verbs for the atom that hosts them: HTTP + an ultra-cheap handler (no templating, no logging waterfalls); TCP for connection-eating services; exec for the exotic (and budgeted: it pays fork on the atom’s own coin). GRPC health where your stack speaks gRPC natively.', bn: 'প্রোব-ক্রিয়া মূল্য দিন আশ্রয়দাতা-পরমাণুর হিসেবে: HTTP + অতি-সস্তা-হ্যান্ডলার (টেমপ্লেটিং নেই, লগিং-ঝর্ণা নেই); সংযোগ-গ্রাসকারী-সার্ভিসে TCP; বহির্ভূতে exec (আর বাজেটকৃত: পরমাণুর নিজের মুদ্রায় fork চালান দেয়); gRPC-স্বাস্থ্য যেখানে স্ট্যাক সহজাতভাবে gRPC বলে।' },
        { en: 'Arm startup before arming liveness, always: startupProbe { failureThreshold: 30, periodSeconds: 10 } buys 5 protected minutes of waking; liveness then inherits law-abiding adulthood — and aging Java monoliths stop being the poster children of CrashLoopBackOff mythology.', bn: 'liveness সশস্ত্রের আগে startup সশস্ত্র করুন, সবসময়: startupProbe { failureThreshold: 30, periodSeconds: 10 } কিনে দেয় ৫ রক্ষিত-মিনিটের জাগরণ; liveness তারপর উত্তরাধিকার পায় আইনমেনে-চলা-প্রাপ্তবয়স্কতা — আর বার্ধক্যপ্রাপ্ত-জাভা-মনোলিথ থাকা বন্ধ করে CrashLoopBackOff-কিংবদন্তির পোস্টার-শিশু হওয়া।' },
        { en: 'Legislate the voluntary rake BEFORE maintenance: PDB minAvailable: 2 (or maxUnavailable: 1) ships in the same PR as the deployment; test it with kubectl drain --dry-run=server on a staging node. A drain that meets unlegislated quorum does the math live at 3 a.m., never politely.', bn: 'রক্ষণাবেক্ষণের আগেই স্বেচ্ছা-মোচন আইন করুন: PDB minAvailable: 2 (না maxUnavailable: 1) পাঠান ডিপ্লয়মেন্টের একই PR-এ; স্টেজিং-নোডে পরীক্ষা করুন kubectl drain --dry-run=server দিয়ে — অ-আইনকৃত-গরিষ্ঠতায়-পোড়া নিষ্কাশন পাটিগণিত করে সকাল-৩টায় লাইভে, ভদ্রভাবে কখনো নয়।' },
        { en: 'Wire HPA into the grammar with cooldown etiquette: minReplicas ≥ PDB’s law (the autoscaler may not shrink you past your own statute), target at the knee (60–75% cpu utilization), scaleDown stabilizationWindowSeconds: 300. The thermometer argues with the register, but the register keeps its temper.', bn: 'HPA-কে ব্যাকরণে সংযোজিত করুন শীতলীকরণ-শিষ্টাচারসহ: minReplicas ≥ PDB-এর আইন (অটোস্কেলার আপনার সংবিধানের নিচে সঙ্কুচিত করতে পারে না), হাঁটুতে লক্ষ্য (৬০–৭৫% cpu-ব্যবহার), scaleDown stabilizationWindowSeconds: 300 — থার্মোমিটার রওকদারির সাথে তর্ক করে, কিন্তু রওকদারি ধৈর্য রাখে।' },
        { en: 'Measure the dispatch itself: probe-failure rates, restart counts, CrashLoopWaiting time, drain-blocked-by-PDB duration — a health system whose own heartbeat is unobserved is cardiology without a stethoscope (lesson two’s twin registers, one floor down).', bn: 'প্রেরণা-নিজেই মাপুন: প্রোব-ব্যর্থতা-হার, পুনঃসূচনা-গণনা, CrashLoop-অপেক্ষা-সময়, PDB-অবরোধিত-নিষ্কাশন-সময়কাল — যে স্বাস্থ্য-ব্যবস্থার নিজের হৃৎস্পন্দন অনপর্যবেক্ষিত, তা স্টেথোস্কোপবিহীন হৃদরোগবিদ্যা (দ্বিতীয় পাঠের যুগল-রওকদারি, এক তলা নিচে)।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the gate in the lab', bn: 'দৃশায়ন: ল্যাবে দুয়ার' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'In the visualizer, watch readiness hold the green light per atom as they settle. Then imagine the failing atom’s name struck from the endpoints ledger: traffic reroutes instantly while the atom keeps breathing; that turnstile IS the readiness law.',
        bn: 'ভিজ্যুয়ালাইজারে দেখুন readiness সবুজ-বাতি ধরে রেখেছে পরমাণুপ্রতি, তারা স্থির হওয়ার সাথে — তারপর কল্পনা করুন ব্যর্থ-পরমাণুর নাম এন্ডপয়েন্ট-খাতা থেকে কর্তিত: ট্রাফিক তাৎক্ষণিক পুনঃরুটিত, অথচ পরমাণু শ্বাস নিতে থাকে; সেই টার্নস্টাইল-ই readiness-আইন।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: who checks, who acts, who waits', bn: 'অভ্যন্তরীণ: কে পরীক্ষা করে, কে কাজ করে, কে অপেক্ষা করে' } },
    {
      type: 'para',
      text: {
        en: 'Four actors, four documents. ONE, THE KUBELET AS THE EXAMINER: probes run on each individual node rather than the remote control plane. Configuration fields define the probe policy. periodSeconds sets the check interval, and timeoutSeconds caps waiting time. successThreshold specifies consecutive passes required, while failureThreshold determines how many consecutive failures trigger action. TWO, THE ENDPOINTS BUREAUCRACY: readiness status flips are recorded in status.conditions as Ready: False. The endpoints controller then rewrites the active endpoint slices. Next, kube-proxy updates routing rules so traffic stops arriving at the pod. Crucially, the pod is not killed, neatly decoupling traffic routing from container lifecycle. The READY column of kubectl get pods directly reflects this condition. THREE, THE BACKOFF BANK: every restart increases the backoff delay exponentially from 10s up to 5 minutes. The status CrashLoopBackOff indicates that kubelet is pausing before restarting a crashing container. This backoff delay protects the cluster from excessive CPU and disk churn. In practice, CrashLoopBackOff simply signals a repeatedly failing container undergoing rate-limited restarts. FOUR, THE EVICTION COURT: PDB is consulted ONLY by the eviction API path (drain, kubectl delete --grace-period through the API, voluntary disruption). A node dying of hardware takes the budget with it (involuntary deaths pay no court fees). So budgeting arithmetic is about PLANNED quorum: maxUnavailable: 1 with replicas: 3 lets maintenance retire one citizen at a time while ⌈n/2⌉ keeps singing. The court’s politeness is why kubectl drain can print “eviction blocked by PDB” and WAIT. A cluster that prefers being late to a meeting over being wrong in production.',
        bn: 'চার অভিনেতা, চার দলিল। এক, পরীক্ষকরূপে KUBELET: প্রোবগুলো দূরবর্তী কন্ট্রোল-প্লেনের বদলে স্থানীয় নোডেই চলে। কনফিগারেশন ফিল্ডগুলো প্রোবের নিয়ম নির্ধারণ করে। periodSeconds পরীক্ষার বিরতি ঠিক করে এবং timeoutSeconds অপেক্ষার সর্বোচ্চ সীমা দেয়। successThreshold সফলতার মাপকাঠি নির্দেশ করে এবং failureThreshold কতবার ব্যর্থ হলে রায় কার্যকর হবে তা ঠিক করে। দুই, এন্ডপয়েন্ট ব্যবস্থা: readiness-এর পরিবর্তন status.conditions-এ Ready: False হিসেবে লেখা হয়। এরপর এন্ডপয়েন্ট কন্ট্রোলার সচল এন্ডপয়েন্ট স্লাইসগুলো হালনাগাদ করে। ফলে kube-proxy রাউটিং নিয়ম বদলে দেয় এবং পডে ট্রাফিক আসা বন্ধ হয়। এতে পড বন্ধ না করেই ট্রাফিক নিয়ন্ত্রণ করা যায়। kubectl get pods-এর READY কলাম সরাসরি এই অবস্থাই প্রদর্শন করে। তিন, ব্যাকঅফ ব্যাংক: প্রতি রিস্টার্টের পর বিলম্ব সূচকীয় হারে ১০ সেকেন্ড থেকে বেড়ে সর্বোচ্চ ৫ মিনিট হয়। CrashLoopBackOff স্ট্যাটাস বোঝায় যে কিউবলেট ক্র্যাশ করা কন্টেইনার পুনরায় চালু করতে সাময়িক বিরতি দিচ্ছে। এই বিলম্ব ক্লাস্টারকে অতিরিক্ত চাপ থেকে রক্ষা করে। বাস্তবে এটি ঘন ঘন ব্যর্থ কন্টেইনারের নিয়ন্ত্রিত পুনঃসূচনাকেই নির্দেশ করে। চার, উচ্ছেদ-আদালত: PDB পরামর্শিত হয় কেবল eviction-API-পথে (drain, API দিয়ে kubectl delete --grace-period, স্বেচ্ছা-বিভ্রমণ). হার্ডওয়্যারে-মরা নোড সঙ্গে নিয়ে যায় বাজেট (অনিচ্ছাকৃত-মৃত্যু আদালত-ফি দেয় না), তাই বাজেট-পাটিগণিত নিয়ে পরিকল্পিত-গরিষ্ঠতার কথা: maxUnavailable: 1, replicas: 3-এ রক্ষণাবেক্ষণ অবসর দেয় একসময়ে এক নাগরিক, ⌈n/2⌉ গাইতে থাকা অবস্থায়. আদালতের ভদ্রতাই কারণ, kubectl drain ছাপাতে পারে “eviction blocked by PDB” আর অপেক্ষা করতে পারে। এমন ক্লাস্টার, যা প্রোডাকশনে ভুল হওয়ার চেয়ে সভায় দেরি করাই পছন্দ করে।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'dispatch.yaml',
      caption: { en: 'Three questions, one will, one law, one feedback loop — health as dispatch.', bn: 'তিন প্রশ্ন, একটি ইচ্ছাপত্র, একটি আইন, একটি প্রতিক্রিয়া-চক্র — প্রেরণারূপে স্বাস্থ্য।' },
      code: `apiVersion: apps/v1
kind: Deployment
metadata: { name: ledger-api }
spec:
  replicas: 3
  selector: { matchLabels: { app: ledger-api } }
  template:
    metadata: { labels: { app: ledger-api } }
    spec:
      containers:
        - name: app
          image: myapp:1.3
          startupProbe:              # the slow-riser's shield: waking is legal
            httpGet: { path: /livez, port: 8080 }
            failureThreshold: 30     # 30 × 10s = five protected minutes of boot
            periodSeconds: 10
          readinessProbe:            # the turnstile: knows the WORLD
            httpGet: { path: /readyz, port: 8080 }   # checks pools, migrations, downstreams
            periodSeconds: 5
            timeoutSeconds: 2        # a slow probe IS a failed probe (a verdict, named)
            failureThreshold: 2
          livenessProbe:             # the incantation: knows ONLY the atom
            httpGet: { path: /livez, port: 8080 }    # event loop answers at all; zero dependencies
            periodSeconds: 10
            timeoutSeconds: 2
            failureThreshold: 3
          resources:
            requests: { cpu: 500m, memory: 256Mi }
---
apiVersion: policy/v1
kind: PodDisruptionBudget          # quorum legislation for VOLUNTARY kills
metadata: { name: ledger-api-pdb }
spec:
  minAvailable: 2                  # a drain meets the law and waits politely
  selector: { matchLabels: { app: ledger-api } }
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler      # feedback arithmetic, wired into the grammar
metadata: { name: ledger-api-hpa }
spec:
  scaleTargetRef: { apiVersion: apps/v1, kind: Deployment, name: ledger-api }
  minReplicas: 2                   # never below the PDB's own statute
  maxReplicas: 12
  metrics:
    - type: Resource
      resource:
        name: cpu
        target: { type: Utilization, averageUtilization: 70 }   # the knee of the curve
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300   # the register keeps its temper`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what dispatched health bought', bn: 'ফলাফল: প্রেরিত-স্বাস্থ্য যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'dispatch move', bn: 'প্রেরণা-ভঙ্‌গি' }, { en: 'the contract signed', bn: 'সইকৃত-চুক্তি' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['readiness as turnstile', { en: 'dependencies pause membership, never kill atoms', bn: 'নির্ভরতা সদস্যতা থামায়, পরমাণু হত্যা করে না কখনো' }, { en: 'blips reroute as events, not outages', bn: 'হেঁচকি রুটিত হয় ঘটনারূপে, বিভ্রাট নয়' }, 'the 90-second db hiccup billed as nine minutes down'],
        ['liveness atom-only', { en: 'restarts happen on self-verdicts: deadlocks, hangs', bn: 'পুনঃসূচনা ঘটে আত্ম-রায়ে: ডেডলক, ঝুলন' }, { en: 'no synchronized recycling physics', bn: 'কোনো সমলয়-পুনর্ব্যবহার-পদার্থবিদ্যা নেই' }, 'the probe that executed the young and healthy'],
        ['startup shield', { en: 'slow risers age into licensing legally', bn: 'ধীর-জাগনী বৈধভাবে লাইসেন্সে বার্ধক্য পায়' }, { en: 'crashloop mythology loses its poster children', bn: 'CrashLoop-কিংবদন্তি তার পোস্টার-শিশু হারায়' }, 'the jvm executed for the crime of booting slowly'],
        ['backoff union', { en: 'broken atoms stop taxing the building', bn: 'ভাঙা-পরমাণু ভবনে কর ধোঁয়ানো থামায়' }, { en: 'registries and nodes keep their breath during storms', bn: 'ঝড়ে রেজিস্ট্রি ও নোড তাদের শ্বাস রাখে' }, 'the flaky-image-registry incident of 03:00'],
        ['pdb law', { en: 'planned maintenance meets a written quorum', bn: 'পরিকল্পিত-রক্ষণাবেক্ষণ লিখিত-গরিষ্ঠতার সম্মুখীন হয়' }, { en: 'drains wait politely; postmortems stay unwritten', bn: 'নিষ্কাশন ভদ্রভাবে অপেক্ষা করে; পোস্টমর্টেম রয়ে যায় অলিখিত' }, 'the node upgrade that drained the truth-set dry'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the probe that recycled the whole pool', bn: 'ডিবাগ-ফাইল: যে প্রোব পুরো পুল পুনর্ব্যবহার করল' } },
    {
      type: 'para',
      text: {
        en: 'At 14:07 an incident triggered reporting zero service availability for 9 minutes. A scheduled database failover drill had created a brief 90-second pause. Because the application liveness probe checked downstream database connections, every pod failed its liveness check simultaneously. The kubelets executed synchronized restarts across all pods, triggering a prolonged cold-start recovery. The team resolved this by decoupling liveness from downstream dependencies and reserving external health checks for readiness probes. Startup probes were also configured with a 5-minute threshold to protect warm-up cycles.',
        bn: 'দুপুর ১৪:০৭ এ একটি ঘটনায় ৯ মিনিট ধরে সার্ভিসে শূন্য প্রাপ্যতা দেখা যায়। একটি পরিকল্পিত ডাটাবেস ফেইলওভার মহড়ায় ৯০ সেকেন্ডের একটি সাময়িক বিরতি ঘটেছিল। অ্যাপ্লিকেশনের লাইভনেস প্রোব বাইরের ডাটাবেস সংযোগ পরীক্ষা করায় সব পড একসাথে ব্যর্থ চিহ্নিত হয়। কিউবলেট সবগুলো পড একসাথে রিস্টার্ট করায় পুরো বহরে কোল্ড-স্টার্ট সংকট তৈরি হয়। দলটি লাইভনেস প্রোব থেকে বাইরের নির্ভরতা সরিয়ে ফেলে এবং বাহ্যিক যাচাই কেবল রেডিনেস প্রোবে সীমাবদ্ধ রাখে। অ্যাপ্লিকেশনকে স্বাভাবিকভাবে প্রস্তুত হতে ৫ মিনিটের স্টার্টআপ প্রোব যুক্ত করা হয়।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: dispatches with dials', bn: 'বাস্তব-জগৎ: ডায়ালসহ প্রেরণা' } },
    {
      type: 'list',
      items: [
        { en: 'KEDA stretches HPA’s thermometer to real queues: desired = ceil(workers × queue-depth/target-depth) — batch fleets breathe with their backlog, and the arithmetic still reads exactly as lesson six’s grammar.', bn: 'KEDA HPA-এর থার্মোমিটার প্রসারিত করে প্রকৃত-সারিতে: কাঙ্ক্ষিত = ceil(কর্মী × সারি-গভীরতা/লক্ষ্য-গভীরতা) — ব্যাচ-বহর শ্বাস নেয় তাদের পশ্চাৎ-সঞ্চয়ে, আর পাটিগণিত পড়ে হুবহু ষষ্ঠ পাঠের ব্যাকরণে।' },
        { en: 'Knative/serverless shapes: scale-to-zero is readiness arithmetic with an empty truth-set PLUS a cold-start shield story — the platform learns to file claims for atoms not yet born, and the startupProbe lesson becomes the user-visible latency budget.', bn: 'Knative/সার্ভারলেস-আকৃতি: scale-to-zero হলো readiness-পাটিগণিত শূন্য সত্য-সেটে যোগ একটি শীত-সূচনা-ঢাল-কাহিনি — প্ল্যাটফর্ম শেখে এমন পরমাণুর দাবি দাখিল করতে, যার এখনো জন্ম হয়নি, আর startupProbe-পাঠ হয়ে ওঠে ব্যবহারকারী-দৃশ্যমান লেটেন্সি-বাজেট।' },
        { en: 'Smart probes in service meshes: the sidecar can ANSWER readiness for the atom (shutdown-drain signal propagation), turning the turnstile into protocol etiquette — the debug file’s lesson industrialized: the atom stops answering BEFORE it stops answering.', bn: 'সার্ভিস-মেশে স্মার্ট-প্রোব: সাইডকার পরমাণুর হয়ে readiness-এর উত্তর দিতে পারে (শাটডাউন-নিষ্কাশন-সংকেত-প্রসারণ), টার্নস্টাইল রূপ নেয় প্রোটোকল-শিষ্টাচারে — ডিবাগ-ফাইলের পাঠ শিল্পায়িত: পরমাণু উত্তর দেওয়া থামায় উত্তর দেওয়া থামানোর আগেই।' },
        { en: 'Government-adjacent fleets add a FOURTH question: the governance probe (license server reachable? certificate horizon sane?) wired to READINESS, never liveness — the registry’s laws priced into membership, exactly where reversible consequences live.', bn: 'সরকার-সংলগ্ন বহর যোগ করে চতুর্থ প্রশ্ন: শাসন-প্রোব (লাইসেন্স-সার্ভার পৌঁছানীয়? সার্টিফিকেট-ক্ষিতিজ সুস্থ?) তারানো READINESS-এ, liveness-এ কখনো নয় — রওকদারির আইন সদস্যতায় মূল্যায়িত, হুবহু সেখানে যেখানে প্রত্যাবর্তনীয়-পরিণতি থাকে।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the hardened cluster', bn: 'পরবর্তী: শক্তিকৃত-ক্লাস্টার' } },
    {
      type: 'para',
      text: {
        en: 'The atoms breathe, queue, and die on schedule. Final lesson: the whole estate ARMORED — RBAC as passport grammar (who may hold which verbs), NetworkPolicy as the perimeter inside (default-deny as the ClusterIP ethic become law), Pod Security Standards as admission court (the manifests’ customs duty). And the bill of materials: an upgrade/emergency math that keeps the choir singing. Carried sentence: HEALTH IS DISPATCHED, NOT DECORATED.',
        bn: 'পরমাণু এখন শ্বাস নেয়, সারিতে দাঁড়ায় আর নির্ধারিত-সময়ে মরে। শেষ পাঠ: বর্মে-মোড়া সমগ্র-এস্টেট — পাসপোর্ট-ব্যাকরণরূপে RBAC (কোন ক্রিয়া কার হাতে), ভেতরের-সীমরেখারূপে NetworkPolicy (ClusterIP-নীতি আইনে-রূপান্তরিত: ডিফল্ট-অস্বীকার), ভর্তি-আদালতরূপে Pod Security Standards (ম্যানিফেস্টের শুল্ক), আর উপকরণ-তালিকা: আপগ্রেড/জরুরি-পাটিগণিত, যা সুরদলকে গাইতে রাখে। বহনযোগ্য বাক্য: স্বাস্থ্য প্রেরিত হয়, স্নানায়িত নয়।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-health-ex1', kind: 'mcq', topic: 'probe lanes',
      question: { en: 'Write the ONE sentence each probe is allowed to ask — and name what each consequence may touch.', bn: 'প্রতি প্রোব যে একটি বাক্য জিজ্ঞেস করতে পারে তা লিখুন — আর প্রতি পরিণতি কী স্পর্শ করতে পারে তার নাম দিন।' },
      options: [
        { en: 'readiness asks “may you SERVE right now?” — and may touch MEMBERSHIP ONLY (endpoints truth-set rewritten, atom alive and waiting); liveness asks “are you dead-and-restartable?”. And may touch the atom’s LIFE ONLY (in-place restart, backoff ledger); startup asks “are you still waking?”. And touches TIME ONLY (buying protected boot while both siblings stand mute). Dependency knowledge lives EXCLUSIVELY with the question whose consequence is reversible', bn: 'readiness জিজ্ঞেস করে “এখনই কি সেবা করতে পারো?” — আর স্পর্শ করতে পারে কেবল সদস্যতা (নতুন করে-লেখা এন্ডপয়েন্ট সত্য-সেট, পরমাণু জীবিত ও অপেক্ষমাণ); liveness জিজ্ঞেস করে “মৃত-ও-পুনঃসূচনাযোগ্য কি?” — আর স্পর্শ করতে পারে কেবল পরমাণুর প্রাণ (জায়গায়-পুনঃসূচনা, backoff-খাতা). Startup জিজ্ঞেস করে “এখনো কি জেগে উঠছো?”. আর স্পর্শ করে কেবল সময় (রক্ষিত-বুট কেনা, উভয় সহোদর নীরব থাকা অবস্থায়). নির্ভরতা-জ্ঞান থাকে একচ্ছত্রভাবে সেই প্রশ্নের কাছে, যার পরিণতি প্রত্যাবর্তনীয়' },
        { en: 'all three may check the database — pods are cheap, thorough is better', bn: 'তিনটিই ডেটাবেস পরীক্ষা করতে পারে — পড সস্তা, পুঙ্খানুপুঙ্খ-ই উত্তম' },
        { en: 'liveness checks the world; readiness checks only itself', bn: 'liveness জগৎ পরীক্ষা করে; readiness কেব নিজেকে' },
        { en: 'startup and liveness are the same question with different names', bn: 'startup আর liveness ভিন্ন নামে একই প্রশ্ন' },
      ],
      answer: 0,
      hint: { en: 'Which consequence is reversible — and who alone may know about neighbors?', bn: 'কোন পরিণতি প্রত্যাবর্তনীয় — আর প্রতিবেশী-সম্পর্কে কে একাই জানতে পারে?' },
      explanation: { en: 'Membership is reversible, death is not: that single asymmetry is the entire probe doctrine. The kill-question must know LESS than the wait-question — forever.', bn: 'সদস্যতা প্রত্যাবর্তনীয়, মৃত্যু নয়: সেই একার অপ্রতিসমতাই পুরো প্রোব-মতবাদ। হত্যা-প্রশ্নকে জানতে হবে কম অপেক্ষা-প্রশ্নের চেয়ে — চিরকাল।' },
    },
    { id: 'k8s-health-ex2', kind: 'predict', topic: 'crashloop mercy',
      question: { en: 'A pod shows CrashLoopBackOff with RESTARTS: 11 and ~5-minute gaps. Predict the full MECHANICAL story — what condition, whose behavior, and what the gaps are BUYING.', bn: 'একটি পড দেখাচ্ছে CrashLoopBackOff, RESTARTS: 11 আর ~৫-মিনিটের বিরতিসহ। পূর্ণ যান্ত্রিক-কাহিনি ভবিষ্যদ্বাণী করুন — কোন অবস্থা, কার আচরণ, আর বিরতিগুলো কী কিনছে।' },
      options: [
        { en: 'the atom dies within seconds of every birth (a missing config, a crashed migration — its EXPRESS condition), restartPolicy: Always wills it reborn in place every time. And the kubelet’s exponential mercy is what the gaps ARE: delays doubling toward the 5-minute cap so that each retry arrives as a timed experiment instead of a stampede. The gaps buy breath for the registry, the node’s attach bookkeeping. And your page quota, while who keeps DYING is discoverable in kubectl logs --previous', bn: 'পরমাণু মরে প্রতি জন্মের কয়েক সেকেন্ডে (হারানো-কনফিগ, বিপর্যস্ত-মাইগ্রেশন — তার প্রকাশিত-অবস্থা), restartPolicy: Always তাকে ইচ্ছা দেয় প্রতিবার জায়গায়-পুনর্জন্মের, আর kubelet-এর সূচকীয়-দয়াই বিরতিগুলো: বিলম্ব দ্বিগুণে ৫-মিনিটের ছাদে, যাতে প্রতি পুনঃচেষ্টা আসে সময়বদ্ধ-পরীক্ষণরূপে, হোড়কার বদলে. বিরতি কিনে দেয় শ্বাস রেজিস্ট্রির, নোডের সংযুক্তি-হিসাবের আর আপনার পেজ-কোটার জন্য, আর যে বারবার মরছে তা আবিষ্কারযোগ্য kubectl logs --previous-এ' },
        { en: 'the node is out of image cache and the pull is timing out', bn: 'নোডের ইমেজ-ক্যাশ শেষ আর টানাটানি টাইমআউট হচ্ছে' },
        { en: 'a taint is keeping the pod from starting at all', bn: 'একটি taint পডকে আদৌ শুরু হতে দিচ্ছে না' },
        { en: 'the pdb is blocking the restart court', bn: 'PDB পুনঃসূচনা-আদালত অবরুদ্ধ করেছে' },
      ],
      answer: 0,
      hint: { en: 'CrashLoopBackOff is not a freeze — it is a BREATHING BUDGET. Who set the ceiling, and --previous shows what?', bn: 'CrashLoopBackOff হিমায়িত নয় — শ্বাস-বাজেট। ছাদ কে বসাল, আর --previous কী দেখায়?' },
      explanation: { en: 'The status is the union contract made visible: Always rebirth + exponential mercy = a fleet that never stampedes itself over one broken atom. Read the previous log; the ledger already filed the confession.', bn: 'অবস্থাটি দৃশ্যমান-ইউনিয়ন-চুক্তি: Always পুনর্জন্ম + সূচকীয়-দয়া = এমন বহর, যা একটি ভাঙা-পরমাণুর জন্য নিজেই কখনো হোড়কা ফেলে না। পূর্ববর্তী-লগ পড়ুন; খাতা স্বীকারোক্তি আগেই দাখিল করে ফেলেছে।' },
    },
    { id: 'k8s-health-ex3', kind: 'mcq', topic: 'pdb quorum',
      question: { en: 'kubectl drain prints “eviction blocked by PDB” and WAITS. Two engineers argue: “the drain is broken” vs “the law is working”. Settle it — including WHOSE deaths the court does NOT govern.', bn: 'kubectl drain ছাপাল “eviction blocked by PDB” আর অপেক্ষা করছে। দুই প্রকৌশলী তর্কে: “নিষ্কাশন ভাঙা” বনাম “আইন কাজ করছে”। মীমাংসা করুন — কার মৃত্যু আদালত শাসন করে না তা-সহ।' },
      options: [
        { en: 'the law is working: PDB governs ONLY the voluntary path (drains, API-driven deletes, rolling upgrades) and this eviction would drop the set BELOW minAvailable. So the court waits politely rather than sacrifice the quorum you legislated (scale up, or wait for the other drain to finish); involuntary deaths. A node’s hardware failure, kernel panic, the cloud reclaiming a chair. Pay no court fees: the PDB cannot stop nature, it can only stop your own weekend maintenance from doing nature’s job with better PR', bn: 'আইন কাজ করছে: PDB শাসন করে কেবল স্বেচ্ছা-পথ (নিষ্কাশন, API-চালিত-মোছা, গড়ানো-আপগ্রেড) আর এই উচ্ছেদ সেটকে নামিয়ে দেবে minAvailable-এর নিচে, তাই আদালত ভদ্রভাবে অপেক্ষা করে। আপনার-আইনকৃত-গরিষ্ঠতা বলি না-দিয়ে (স্কেল-আপ করুন, নয় অন্য নিষ্কাশন শেষের অপেক্ষা করুন); অনিচ্ছাকৃত-মৃত্যু — নোডের হার্ডওয়্যার-ব্যর্থতা, কার্নেল-প্যানিক, ক্লাউডের আসন-ফেরত-নেওয়া — আদালত-ফি দেয় না: PDB প্রকৃতি থামাতে পারে না, কেবল থামাতে পারে আপনার নিজের সপ্তাহান্ত-রক্ষণাবেক্ষণ, প্রকৃতির কাজ উন্নত-প্রচারে করা থেকে' },
        { en: 'the drain is broken — pdb only applies to hpa-driven scale-downs', bn: 'নিষ্কাশন ভাঙা — PDB শুধু HPA-চালিত-সংকোচনে প্রযোজ্য' },
        { en: 'drain ignores pdb unless --force is passed', bn: 'drain PDB উপেক্ষা করে, --force না দিলে' },
        { en: 'the pdb governs all deaths — including hardware', bn: 'PDB সব মৃত্যু শাসন করে — হার্ডওয়্যার-সহ' },
      ],
      answer: 0,
      hint: { en: 'Which API path consults the budget — and which kind of death never files court fees?', bn: 'কোন API-পথ বাজেট নিলোপ করে — আর কোন ধরনের মৃত্যু কখনো আদালত-ফি দাখিল করে না?' },
      explanation: { en: 'PDB is legislation for the things YOU plan. A blocked drain is the registry respecting your own quorum law — the court governs intention; nature files nothing.', bn: 'PDB হলো আপনার পরিকল্পিত বস্তুর আইন। অবরোধিত-নিষ্কাশন হলো রওকদারি আপনার নিজের গরিষ্ঠতা-আইন মানছে — আদালত শাসন করে অভিপ্রায়; প্রকৃতি কিছুই দাখিল করে না।' },
    },
  ],
  quiz: {
    id: 'k8s-health-quiz',
    title: { en: 'The Dispatch Exam', bn: 'প্রেরণা-পরীক্ষা' },
    questions: [
      { id: 'hd1', kind: 'mcq', topic: 'reversible membership',
        question: { en: 'Why is READINESS the only probe allowed to check the database — state the asymmetry in one sentence.', bn: 'কেন readiness-ই ডেটাবেস পরীক্ষার অনুমতিপ্রাপ্ত একমাত্র প্রোব — অপ্রতিসমতা এক বাক্যে বলুন।' },
        options: [
          { en: 'membership is reversible and death is not: a dependency blip may lawfully cost the atom its place in the truth-set (struck, breathing, waiting, re-admitted when the world returns) but must never purchase its execution. So the probe that KNOWS the world gets the consequence that can be undone. And the probe that KILLS gets the blindness that cannot detonate a fleet on a neighbor’s hiccup', bn: 'সদস্যতা প্রত্যাবর্তনীয় আর মৃত্যু নয়: নির্ভরতা-হেঁচকি বৈধভাবে পরমাণুর সত্য-সেটের-স্থান কেড়ে নিতে পারে (কর্তিত, শ্বাসনেওয়া, অপেক্ষমাণ, জগৎ ফেরলে পুনর্ভর্তি) কিন্তু কখনোই তার মৃত্যুদণ্ড কিনতে পারে না — তাই যে প্রোব জগৎকে জানে সে পায় এমন পরিণতি যা পূর্বাবস্থায় ফেরানো যায়। আর যে প্রোব হত্যা করে সে পায় এমন অন্ধত্ব যা প্রতিবেশীর হেঁচকিতে বহর বিস্ফোরিত করতে পারে না' },
          { en: 'readiness runs before liveness in the yaml order', bn: 'readiness চলে আগে, YAML-ক্রমে liveness-এর' },
          { en: 'the database protocol only speaks to readiness http handlers', bn: 'ডেটাবেস-প্রোটোকল শুধু readiness-ের HTTP-হ্যান্ডলারের সাথে কথা বলে' },
          { en: 'kubelet checks readiness only on weekdays', bn: 'kubelet readiness পরীক্ষা করে কেবল সপ্তাহের-দিনে' },
        ],
        answer: 0,
        hint: { en: 'Which consequence can be UNDONE — and who must therefore hold the world-knowledge?', bn: 'কোন পরিণতি পূর্বাবস্থায় ফেরানো যায় — আর জগৎ-জ্ঞান তাই কার কাছে থাকতে হবে?' },
        explanation: { en: 'The allow-list of knowledge is assigned by reversibility: waiting may know the world; killing may know only the pulse. Every outage engineered by health checks broke this one line.', bn: 'জ্ঞানের অনুমতি-তালিকা বণ্টিত হয় প্রত্যাবর্তনীয়তায়: অপেক্ষা জগৎ জানতে পারে; হত্যা জানতে পারে কেবল স্পন্দন। স্বাস্থ্য-পরীক্ষায়-প্রকৌশলিত প্রতিটি বিভ্রাট এই এক পঙ্‌ক্তিই ভেঙেছে।' },
      },
      { id: 'hd2', kind: 'mcq', topic: 'startup arithmetic',
        question: { en: 'A Java monolith needs ~4 minutes to boot. Its liveness (failureThreshold 3 × periodSeconds 10) keeps executing it at second 31. Write the EXACT shield config and name the doctrine it buys.', bn: 'জাভা-মনোলিথের বুটে লাগে ~৪ মিনিট। তার liveness (failureThreshold 3 × periodSeconds 10) তাকে মৃত্যুদণ্ড দিচ্ছে ৩১ সেকেন্ডে। হুবহু ঢাল-কনফিগ লিখুন আর তা যে মতবাদ কিনে তার নাম দিন।' },
        options: [
          { en: 'startupProbe { httpGet: /livez, failureThreshold: 30, periodSeconds: 10 }. This gives five protected minutes where liveness checks wait. The doctrine separates startup time limits from runtime health checks.', bn: 'startupProbe { httpGet: /livez, failureThreshold: 30, periodSeconds: 10 }। এটি পাঁচ মিনিট সময় দেয় যেখানে লাইভনেস প্রোব অপেক্ষা করে। এই নীতি স্টার্টআপের সময়কে সাধারণ স্বাস্থ্য পরীক্ষা থেকে আলাদা রাখে।' },
          { en: 'raise liveness failurethreshold to 30 and delete readiness', bn: 'liveness-এর failureThreshold বাড়িয়ে 30 করুন আর readiness মুছে দিন' },
          { en: 'restartpolicy: never until the monolith retires', bn: 'restartPolicy: Never, মনোলিথ অবসর নেওয়া পর্যন্ত' },
          { en: 'set initialdelayseconds: 300 on everything and go home', bn: 'initialDelaySeconds: 300 সবকিছুতে দিয়ে ঘরে যান' },
        ],
        answer: 0,
        hint: { en: 'Which probe holds BOTH siblings mute — and for how long, legally?', bn: 'কোন প্রোব উভয় সহোদরকে নীরব রাখে — আর আইনত কতক্ষণ?' },
        explanation: { en: '30 × 10s arithmetic beats 300s folklore: the shield declares waking a legal status, the incantation stays strict for adults, and nothing about the atom’s adulthood is diluted.', bn: '30 × 10সে-পাটিগণিত হারায় 300সে-লোককথাকে: ঢাল জাগরণকে বৈধ-অবস্থা ঘোষণা করে, মন্ত্র প্রাপ্তবয়স্কদের জন্য কঠোর থাকে, আর পরমাণুর প্রাপ্তবয়স্কতা-বিষয়ে কিছুই পাতলা হয় না।' },
      },
      { id: 'hd3', kind: 'mcq', topic: 'hpa arithmetic',
        question: { en: 'HPA target 70% CPU, current 8 replicas at 140%. What does the feedback loop file — and what keeps the filing from oscillating all afternoon?', bn: 'HPA-লক্ষ্য 70% CPU, বর্তমান 140%-এ 8 রেপ্লিকা। প্রতিক্রিয়া-চক্র কী দাখিল করে — আর কী দাখিলকে দুপুরজুড়ে দোলা থেকে রক্ষা করে?' },
        options: [
          { en: 'desired = ceil(8 × 140/70) = ceil(16) = 16 (capped by maxReplicas; the formula is the whole grammar: current multiplied by metric-over-target), and the etiquette is the COOLDOWN LEGISLATION. StabilizationWindowSeconds: 300 on scale-down keeps the register’s temper (usage dips must be sustained to be believed) while scale-up reacts within the cadence. MinReplicas ≥ PDB law means even the thermostat may not violate the choir’s statute', bn: 'কাঙ্ক্ষিত = ceil(8 × 140/70) = ceil(16) = 16 (maxReplicas-ছাদবদ্ধ; সূত্রই পুরো ব্যাকরণ: বর্তমান গুণিত মেট্রিক/লক্ষ্য দিয়ে), আর শিষ্টাচার হলো শীতলীকরণ-আইন — scale-down-এ stabilizationWindowSeconds: 300 রওকদারির ধৈর্য রাখে (ব্যবহার-পতন বিশ্বাসযোগ্য হতে টেকসই হতে হয়), scale-up প্রতিক্রিয়া দেয় বিরতি-চক্রে. MinReplicas ≥ PDB-আইন মানে থার্মোস্ট্যাটও সুরদলের সংবিধান ভাঙতে পারে না' },
          { en: 'desired = 70 more replicas; oscillation stops by itself', bn: 'কাঙ্ক্ষিত = আরও 70 রেপ্লিকা; দোলন নিজেই থামে' },
          { en: 'desired = ceil(140/70 × 8) = 16 replicas, and cooldown slows scaling', bn: 'কাঙ্ক্ষিত = ceil(140/70 × 8) = 16 রেপ্লিকা, শীতলীকরণ স্কেলিং ধীর করে' },
          { en: 'hpa does nothing unless the pdb allows it', bn: 'HPA কিছুই করে না, PDB অনুমতি না দিলে' },
        ],
        answer: 2,
        hint: { en: 'ceil(current × measured / target) — and which WINDOW keeps the register’s temper?', bn: 'ceil(বর্তমান × মাপা / লক্ষ্য) — আর কোন জানালা রওকদারির ধৈর্য রাখে?' },
        explanation: { en: 'The formula is two lines of arithmetic; the discipline is all in the etiquette: down-scales must be sustained to be believed, and even the thermostat obeys the quorum law.', bn: 'সূত্র দুই পঙ্‌ক্তির পাটিগণিত; শৃঙ্খলা পুরোটাই শিষ্টাচারে: সঙ্কোচন বিশ্বাস হতে টেকসই হতে হয়, আর থার্মোস্ট্যাটও গরিষ্ঠতা-আইন মানে।' },
      },
      { id: 'hd4', kind: 'mcq', topic: 'executed by health check',
        question: { en: '“Zero actual failure, nine minutes of outage, zero deploys.” Which single design error produces this signature — and which four fixes retire it?', bn: '“শূন্য প্রকৃত-ব্যর্থতা, নয় মিনিটের বিভ্রাট, শূন্য ডিপ্লয়।” কোন একক নকশা-ত্রুটি এই স্বাক্ষর তৈরি করে — আর কোন চার প্রতিকার তাকে অবসর দেয়?' },
        options: [
          { en: 'liveness wired to downstream databases causing synchronized pod restarts during a database hiccup. Fixed by: (1) simple /livez check, (2) /readyz for dependencies, (3) startupProbe for booting, and (4) liveness failureThreshold set to 3.', bn: 'ডাটাবেসের সাথে লাইভনেস যুক্ত করায় সাময়িক সমস্যায় সব পড একসাথে রিস্টার্ট নেয়। সমাধান: (১) সাধারণ /livez পিং, (২) নির্ভরতার জন্য /readyz, (৩) বুটের জন্য startupProbe, এবং (৪) লাইভনেস failureThreshold ৩ রাখা।' },
          { en: 'the pdb was missing; fix: add one and a bigger vm', bn: 'PBD অনুপস্থিত ছিল; প্রতিকার: একটি যোগ করুন আর বড় VM' },
          { en: 'the ingress cached the 503s; fix: flush nginx weekly', bn: 'ইনগ্রেস 503 ক্যাশ করেছিল; প্রতিকার: nginx সাপ্তাহিক ফ্লাশ' },
          { en: 'nodes were underprovisioned; fix: double the pool', bn: 'নোড কম-বিধানকৃত ছিল; প্রতিকার: পুল দ্বিগুণ' },
        ],
        answer: 0,
        hint: { en: 'Which probe must know LESS — and which consequence is reversible?', bn: 'কোন প্রোবকে কম জানতে হবে — আর কোন পরিণতি প্রত্যাবর্তনীয়?' },
        explanation: { en: 'The signature “healthy atoms dead in unison” is a liveness that knew the world. The fix is lane discipline, repeated four times because lessons that page twice get budgeted forever.', bn: '“একতালে মৃত সুস্থ-পরমাণু” স্বাক্ষর এমন liveness-এর, যা জগৎ জানত। প্রতিকার লেন-শৃঙ্খলা, চারবার পুনরাবৃত, কারণ দুইবার পেজকারী-পাঠ চিরকালের বাজেট পায়।' },
      },
      { id: 'hd5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete: “Health is ___, not decorated.” (one word)', bn: 'পূর্ণ করুন: “স্বাস্থ্য ___ হয়, স্নানায়িত নয়।” (এক শব্দ)' },
        answer: 'dispatched',
        accept: ['প্রেরিত', 'dispatch'],
        hint: { en: 'Three questions, one will, one law, dispatched on a…', bn: 'তিন প্রশ্ন, একটি ইচ্ছাপত্র, একটি আইন, একটি নির্ধারিত… প্রেরিত' },
        explanation: { en: 'The dispatch lesson in one word: probes are a ROUTED SERVICE with verdicts, courts and choirs — never dashboard decoration.', bn: 'এক শব্দে প্রেরণা-পাঠ: প্রোব হলো রায়, আদালত ও সুরদলসহ একটি রুটকৃত-সেবা — ড্যাশবোর্ড-সাজসজ্জা কখনো নয়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'the-hardened-cluster',
    title: { en: 'The Hardened Cluster: passports, perimeters, and the last invoice', bn: 'শক্তিকৃত-ক্লাস্টার: পাসপোর্ট, সীমরেখা আর শেষ চালান' },
  },
};
