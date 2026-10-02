import type { Lesson } from '../../../lib/types';

export const servicePerimeterLesson: Lesson = {
  slug: 'the-service-perimeter',
  tech: 'kubernetes',
  title: {
    en: 'Service Perimeter — First THE SERVICE AS A STANDING PROMISE, a selector',
    bn: 'সার্ভিস-সীমরেখা: যে নাম কখনো মরে না'
  },
  summary: {
    en: 'Master Kubernetes networking, service discovery, and routing perimeters. Services provide stable virtual IPs and load balancing across dynamic pods using label selectors and EndpointSlices. Understand ClusterIP for internal cluster traffic, NodePort for direct node access, and LoadBalancer for cloud integrations. Configure Ingress controllers with TLS certificates to route external web traffic efficiently. Discover how CoreDNS resolves internal service names and why graceful shutdown lifecycle hooks prevent connection drops during deployments.',
    bn: 'Kubernetes নেটওয়ার্কিং, সার্ভিস ডিসকভারি এবং রাউটিং সীমারেখায় দক্ষতা অর্জন করুন। সার্ভিসগুলো লেবেল সিলেক্টর ও EndpointSlice ব্যবহার করে পরিবর্তনশীল পডগুলোর সামনে একটি স্থায়ী ভার্চুয়াল IP ও লোড ব্যালান্সিং নিশ্চিত করে। ক্লাস্টার-ভেতরের জন্য ClusterIP, সরাসরি নোড অ্যাক্সেসের জন্য NodePort এবং ক্লাউড সংযুক্তির জন্য LoadBalancer ব্যবহারের পার্থক্য শিখুন। ডোমেন ও পাথভিত্তিক ট্রাফিকের জন্য Ingress এবং অভ্যন্তরীণ ডিরেক্টরি হিসেবে CoreDNS-এর ভূমিকা গভীরভাবে জানুন।',
  },
  minutes: 22,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT the perimeter actually is', bn: 'সীমরেখা আসলে কী' } },
    {
      type: 'para',
      text: {
        en: 'A Kubernetes Service provides a permanent network address and load balancing front for a set of matching pods. The service controller continuously evaluates the label selector, routing traffic only to pods that are currently healthy and Ready. Depending on whether access is needed internally or externally, Kubernetes offers distinct perimeter types: ClusterIP, NodePort, and LoadBalancer. At the HTTP edge, Ingress multiplexes multiple services behind a single public endpoint with shared TLS termination.',
        bn: 'একটি Kubernetes সার্ভিস হলো একাধিক পডের সামনে একটি স্থায়ী নেটওয়ার্ক ঠিকানা ও লোড ব্যালান্সার। সার্ভিস কন্ট্রোলার সার্বক্ষণিকভাবে লেবেল সিলেক্টর যাচাই করে শুধুমাত্র প্রস্তুত (Ready) পডগুলোতে ট্রাফিক পাঠায়। অভ্যন্তরীণ বা বাহ্যিক চাহিদার ওপর ভিত্তি করে সার্ভিস বিভিন্ন সীমারেখায় কাজ করে: ClusterIP, NodePort এবং LoadBalancer। ওয়েব বা HTTP ট্রাফিকের ক্ষেত্রে Ingress একটিমাত্র পাবলিক আইপির পেছনে একাধিক সার্ভিসকে নিরাপদে পরিচালনা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'selector truth-set', def: { en: 'the continuously re-evaluated set of Ready pods behind a name — the promise’s living substance', bn: 'নামের পেছনে অনবরত-পুনর্মূল্যায়িত Ready-পডের সেট — প্রতিশ্রুতির জীবন্ত-সার' } },
        { term: 'EndpointSlice', def: { en: 'the paged ledger of endpoints (100 rows a slice) the endpoints controller rewrites on every birth/retirement/readiness flip', bn: 'প্রতি জন্ম/অবসর/প্রস্তুতি-উল্টোয় এন্ডপয়েন্ট-কন্ট্রোলরের পুনর্লিখিত পৃষ্ঠাভুক্ত-খাতা (স্লাইসপ্রতি ১০০ সারি)' } },
        { term: 'kube-proxy', def: { en: 'the per-node accountant (iptables/IPVS) turning virtual IP rows into DNAT tables on every chair', bn: 'আসনপ্রতি-হিসাবরক্ষক (iptables/IPVS), ভার্চুয়াল-IP-সারিকে প্রতি আসনে DNAT-টেবিলে রূপান্তরকারী' } },
        { term: 'headless service', def: { en: 'clusterIP: None — DNS returns pod IPs so clients name their own citizen', bn: 'clusterIP: None — DNS ফেরত দেয় পড-IP, যাতে ক্লায়েন্ট নিজের নাগরিক নাম ধরে' } },
        { term: 'ndots:5', def: { en: 'the resolv.conf seed deciding when a bare name tries the search domains first — why “db” resolves in-cluster', bn: 'resolv.conf-বীজ, খালি-নাম কখন আগে সার্চ-ডোমেইন চাবে তা-নির্ধারক — “db” ক্লাস্টারে রূপান্তরিত হয় এইজন্যেই' } },
        { term: 'ingress controller', def: { en: 'the one public door: host/path routing + TLS termination multiplexed over a single LoadBalancer', bn: 'একটি জনসাধারণ-দরজা: host/path-রুটিং + TLS-সমাপ্তি, একটি LoadBalancer-এ বহুগুণিত' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY dial a promise, never a census', bn: 'কেন প্রতিশ্রুতি ডায়াল করবেন, জনগণনা কখনো নয়' } },
    {
      type: 'para',
      text: {
        en: 'Lessons one to three priced mortality, argument, and shape; this lesson prices the ADDRESSING of all three — and gets one universal law: consumers must bind to identity, never to instance. WHY-ONE, MOBILITY AS DEFAULT: atoms reincarnate onto fresh chairs with fresh IPs constantly (node drains, rolls, evictions — lesson two’s churn, unremarkable and continuous); any client that cached an IP is holding a stale appointment. And the bug arrives hours later as a ghost 5xx. The service name is the seam where identity decouples from instance — exactly the DNS lesson from the networks hub, one floor down. WHY-TWO, PERIMETERS AS ECONOMICS: every reachability is attack surface AND invoice — the LoadBalancer is billed per hour per rule, and every NodePort is a door on every chair. The discipline of ClusterIP-by-default is zero-trust written as YAML: the database’s name simply has no perimeter that reaches the internet, which beats any firewall rule that a tired human must remember. WHY-THREE, OBSERVABILITY AT THE SEAM: because EVERY call passes a named seam, the perimeter becomes where measurement attaches. Golden signals per service (rate/latency/errors), retries budgets at the desk, mTLS identity minted per hop (the mesh from the real-world section): legibility the monolith had inside a debugger, now owned by the platform. WHY-FOUR, POLITE FAILURE: the truth-set’s continuous rewriting means failure is ALWAYS about “no Ready atoms behind this name right now” — a legible, actionable sentence. The alternative (client-side instance lists, remote-config IP gossip) fails as folklore: half-up pools, cached tombs, the debug file’s four minutes becoming four hours.',
        bn: 'প্রথম-তৃতীয় পাঠ মূল্য দিয়েছে মৃত্যু, তর্ক আর আকৃতি; এই পাঠ মূল্য দেয় তিনটির ঠিকানাকরণ — আর পায় একটি সার্বজনীন-আইন: ভোক্তা বাঁধবে পরিচয়ে, দৃষ্টান্তে কখনো নয়। একনম্বর, ডিফল্টরূপে চলনশীলতা: পরমাণু পুনর্জন্ম নেয় নিত্য নতুন আসনে নতুন IP-তে (নোড-নিষ্কাশন, গড়ানো, উচ্ছেদ — দ্বিতীয় পাঠের চলাচল, অনুল্লেখ্য ও অবিরাম); IP সঞ্চয়কারী যে-কোনো ক্লায়েন্ট বাসি-অ্যাপয়েন্টমেন্ট ধরে আছে, আর বাগ এসে হাজির ঘণ্টা পরে ভুতুড়ে 5xx-রূপে। সার্ভিস-নামই সেই সেলাই, যেখানে পরিচয় দৃষ্টান্ত থেকে বিচ্ছিন্ন — networks-হাবের DNS-পাঠ হুবহু, এক তলা নিচে। দ্বিতীয়, অর্থনীতিরূপে সীমরেখা: প্রতি পৌঁছানোযোগ্যতা আক্রমণ-পৃষ্ঠ এবং চালান — LoadBalancer বিল হয় ঘণ্টাপ্রতি নিয়মপ্রতি, আর প্রতি NodePort প্রতি আসনে একটি দরজা; ClusterIP-ডিফল্ট শৃঙ্খলা হলো YAML-এ-লেখা শূন্য-বিশ্বাস: ডেটাবেসের নামের এমন কোনো সীমরেখাই নেই, যা ইন্টারনেটে পৌঁছায়. ক্লান্ত-মানুষের মনে-রাখা যে-কোনো ফায়ারওয়াল-নিয়মের চেয়ে শ্রেয়। তৃতীয়, সেলাইয়ে-পর্যবেক্ষণযোগ্যতা: প্রতি কল নামকৃত-সেলাই দিয়ে যায় বলে, মাপকাঠি জুড়তে হয় সীমরেখায় — সার্ভিসপ্রতি স্বর্ণ-সংকেত (হার/লেটেন্সি/ত্রুটি), ডেস্কে পুনঃচেষ্টা-বাজেট, লাফপ্রতি-ছাপানো mTLS-পরিচয় (বাস্তব-জগৎ-খণ্ডের mesh): ডিবাগার-ভেতরে মনোলিথের ছিল যে সুপাঠ্যতা, এখন প্ল্যাটফর্মের মালিকানায়। চতুর্থ, ভদ্র-ব্যর্থতা: সত্য-সেটের অবিরাম-পুনর্লেখন মানে ব্যর্থতা সবসময় “এই নামের পেছনে এখন Ready-পরমাণু নেই” — সুপাঠ্য, করণীযোগ্য-বাক্য; বিকল্প (ক্লায়েন্ট-পার্শ্বের দৃষ্টান্ত-তালিকা, রিমোট-কনফিগ IP-গুজব) ব্যর্থ হয় লোককথায়: অর্ধ-চালু-পুল, সঞ্চিত-কবর, ডিবাগ-ফাইলের চার মিনিট হওয়া চার ঘণ্টা।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to run the perimeter', bn: 'কীভাবে সীমরেখা পরিচালনা করবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Name the promise, then PROVE the truth-set: kubectl get endpoints ledger-api must list live addresses BEFORE any client work — an empty row is the single most common production find (selector typo, label drift, readiness never green). And it fails politely at DNS while savagely at connect.', bn: 'প্রতিশ্রুতির নাম দিন, তারপর সত্য-সেট প্রমাণ করুন: kubectl get endpoints ledger-api-তে সজীব-ঠিকানা থাকতে হবে যে-কোনো ক্লায়েন্ট-কাজের আগে — খালি সারিই সর্বাধিক-সাধারণ প্রোডাকশন-আবিষ্কার (সিলেক্টর-টাইপো, লেবেল-অপসরণ, কখনো-সবুজ-নয়-প্রস্তুতি), আর তা ব্যর্থ হয় DNS-এ ভদ্রভাবে, সংযোগে নিষ্ঠুরভাবে।' },
        { en: 'Default to ClusterIP; escalate in writing: every perimeter change is a one-line ADR (who reaches this name, billed how, attacked by whom). Promote to NodePort for metals and debugging, to LoadBalancer only for the ONE public polygon, and Ingress for everything web-shaped.', bn: 'ClusterIP-ই ডিফল্ট; লিখে লিখে উন্নীত করুন: প্রতি সীমরেখা-পরিবর্তন এক-পঙ্‌ক্তির ADR (এই নামে কে পৌঁছাবে, কীভাবে বিল, কার আক্রমণে) — ধাতু আর ডিবাগিংয়ে NodePort-এ তুলুন, LoadBalancer-এ কেবল সেই একটি জনসাধারণ-বহুভুজে, আর ওয়েব-আকৃতির সবকিছু Ingress-এ।' },
        { en: 'Read DNS from INSIDE the atom: kubectl run -it --rm debug --image=nicolaka/netshoot -- nslookup ledger-api — the directory answers differently inside than out, and ndots:5 means a trailing dot (ledger-api.) changes the search-path arithmetic entirely. Learn to ask the question where the workload sits.', bn: 'পরমাণুর ভেতর থেকে DNS পড়ুন: kubectl run -it --rm debug --image=nicolaka/netshoot -- nslookup ledger-api — ডিরেক্টরি ভেতরে বাইরের চেয়ে অন্যরকম উত্তর দেয়। আর ndots:5 মানে শেষের-বিন্দু (ledger-api.) সার্চ-পথ-পাটিগণিত পুরো বদলে দেয়; প্রশ্ন করতে শিখুন সেখানে, যেখানে ওয়ার্কলোড বসে।' },
        { en: 'Terminate politely at the desk: Ingress carries TLS (cert-manager minting Secrets from Let’s Encrypt), timeouts named per route, and body limits — clients that hang up mid-POST should die at the perimeter, not as thread-leaks in the atom.', bn: 'ডেস্কে ভদ্রভাবে সমাপ্ত করুন: Ingress বহন করে TLS (cert-manager ছাপায় Let’s Encrypt-থেকে Secrets), রুটপ্রতি-নামকৃত টাইমআউট আর বডি-সীমা — POST-মাঝে কল-ছিন্নকারী ক্লায়েন্ট মরুক সীমরেখায়, পরমাণুর থ্রেড-লিকরূপে নয়।' },
        { en: 'Wire graceful retirement into each pod with a preStop sleep hook and terminationGracePeriodSeconds. This allows the endpoints controller to remove the pod from active traffic before processes terminate. Deregistering before exiting prevents 502 errors during rolling updates.', bn: 'প্রতিটি পডে preStop স্লিপ হুক এবং উপযুক্ত terminationGracePeriodSeconds ব্যবহার করে মার্জিত প্রস্থান নিশ্চিত করুন। এটি প্রসেস বন্ধ হওয়ার আগেই এন্ডপয়েন্ট কন্ট্রোলারকে পডটি ট্রাফিক থেকে বাদ দেওয়ার সুযোগ দেয়। প্রস্থানের আগে নেটওয়ার্ক থেকে নিবন্ধন বাতিল করায় রোলিং আপডেটে কোনো ত্রুটি ঘটে না।' },
        { en: 'Audit the perimeter monthly: kubectl get svc -A -o wide + ingress list, diffed against the ADR registry — perimeters rot by accretion (debugging NodePorts left open, temp LoadBalancers billed into permanence). And the audit is one kubectl line, which is why it gets skipped until the invoice arrives.', bn: 'মাসিক-সীমরেখা-নিরীক্ষণ: kubectl get svc -A -o wide + ইনগ্রেস-তালিকা, ADR-রওকদারির সাথে পার্থক্য — সীমরেখা পচে জমাটে (খোলা-রেখে-যাওয়া ডিবাগিং-NodePort, স্থায়ীত্বে-বিলকৃত অস্থায়ী-LoadBalancer), আর নিরীক্ষণ একটি kubectl-পঙ্‌ক্তি, এইজন্যই চালান আসা পর্যন্ত বাদ পড়ে।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the promise in the lab', bn: 'দৃশায়ন: ল্যাবে প্রতিশ্রুতি' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'In the visualizer, expose the deployment using kubectl expose on port 80 and watch the endpoints ledger fill with the Ready set. Scale the deployment down to 1 and observe the service name remain constant while the backend IP list shrinks smoothly.',
        bn: 'ভিজ্যুয়ালাইজারে ৮০ নম্বর পোর্টে kubectl expose চালিয়ে ডিপ্লয়মেন্ট উন্মুক্ত করুন এবং এন্ডপয়েন্ট তালিকায় প্রস্তুত পডগুলো যুক্ত হতে দেখুন। এরপর ১টি পডে স্কেল ডাউন করলেও সার্ভিসের নাম অপরিবর্তিত থাকে এবং পেছনের আইপি তালিকা সুন্দরভাবে ছোট হয়।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: how the promise stays wired', bn: 'অভ্যন্তরীণ: প্রতিশ্রুতি তারযুক্ত থাকে কীভাবে' } },
    {
      type: 'para',
      text: {
        en: 'Four mechanisms keep the promise honest. ONE, THE TRUTH-SET LEDGER: the endpoints controller watches pods AND services; on every change it rewrites EndpointSlices (100 endpoints per slice, paged. The discovery lesson from the distributed-systems hub, with pagination as the fix for one giant object hot-spotting every controller). TWO, THE PER-NODE ACCOUNTANT: kube-proxy (iptables mode) sees the API objects and programs DNAT rules on its chair. A packet to the ClusterIP hits one netstat line: destination rewritten to a RANDOM Ready endpoint (statistical load balancing, near-zero state). IPVS mode keeps the same truth as a proper load balancer table with scheduling choices (round-robin, least-connection) for fleets whose connection math is spiky. THREE, CONNTRACK AND THE RACE: DNAT decisions are cached in the node’s conntrack table per five-tuple. Which is why a long-lived TCP connection (gRPC stream, DB driver pool) does NOT re-balance when the truth-set changes: the connection rewrote itself once and keeps the appointment. This is the deep reason lesson three’s preStop discipline matters — a killed atom lingers in conntrack while TCP retries make it look ALIVE-but-slow. Striking the name first, dying second, is the only ordering that never feeds the cache corpses. FOUR, THE DIRECTORY SERVING ITSELF: CoreDNS is pods answering about pods — it watches the API, holds service/endpoint records in memory, and is itself reached through a service (kube-dns, ClusterIP); its scale trick is negative caching plus ttl. And its humility check is that DNS outage = the WHOLE fleet’s calls failing politely (SERVFAIL) at once. Which is why CoreDNS is the one deployment you scale BEFORE anything else. And the one whose own readiness probe decides whether the fleet can even ask questions.',
        bn: 'চার প্রক্রিয়াটত্ত্ব প্রতিশ্রুতিকে সৎ রাখে। এক, সত্য-সেট-খাতা: এন্ডপয়েন্ট-কন্ট্রোলর পর্যবেক্ষণ করে পড এবং সার্ভিস; প্রতি পরিবর্তনে সে পুনর্লেখে EndpointSlice (স্লাইসপ্রতি ১০০ এন্ডপয়েন্ট, পৃষ্ঠাভুক্ত — distributed-systems-হাবের আবিষ্কার-পাঠ, একটি বিশাল-বস্তুর প্রতি কন্ট্রোলরে উত্তপ্ত-বিন্দু হওয়ার প্রতিকাররূপে পৃষ্ঠাভুক্তিসহ)। দুই, আসনপ্রতি-হিসাবরক্ষক: kube-proxy (iptables-মোড) API-বস্তু দেখে তার আসনে DNAT-নিয়ম প্রোগ্রাম করে — ClusterIP-তে পাতলা প্যাকেট পড়ে একটি netstat-লাইনে: গন্তব্য পুনর্লিখিত এলোমেলো-Ready-এন্ডপয়েন্টে (পরিসংখ্যানগত-ভার-বণ্টন, প্রায়-শূন্য-স্টেট); IPVS-মোড একই সত্য রাখে প্রকৃত লোড-ব্যালেন্সার-টেবিলে, নির্ধারণ-পছন্দসহ (রাউন্ড-রবিন, ন্যূনতম-সংযোগ), সেই বহরের জন্য যাদের সংযোগ-পাটিগণিত স্পাইকি। তিন, CONNTRACK আর দৌড়: DNAT-সিদ্ধান্ত ক্যাশিত হয় নোডের conntrack-টেবিলে পাঁচ-টিউপলপ্রতি — এইজন্যই দীর্ঘজীবী TCP-সংযোগ (gRPC-স্ট্রিম, DB-ড্রাইভার-পুল) সত্য-সেট বদলালে পুনঃভারসাম্য নেয় না: সংযোগ একবার নিজেকে পুনর্লিখে অ্যাপয়েন্টমেন্টই ধরে রাখে। তৃতীয় পাঠের preStop-শৃঙ্খলা গুরুত্বপূর্ণ এই গভীর-কারণেই — হত-পরমাণু conntrack-এ থেমে থাকে, TCP-পুনঃচেষ্টা তাকে দেখায় জীবন্ত-কিন্তু-ধীর; আগে নাম কর্তন, পরে মৃত্যু — একমাত্র ক্রম, যা ক্যাশকে কখনো মৃতদেহ খাওয়ায় না। চার, নিজের-পরিষেবাকারী ডিরেক্টরি: CoreDNS হলো পড-সম্পর্কে-উত্তরদাতা পড — API পর্যবেক্ষণ করে, স্মৃতিতে সার্ভিস/এন্ডপয়েন্ট-রেকর্ড ধরে, আর নিজেই পৌঁছায় একটি সার্ভিসে (kube-dns, ClusterIP). তার স্কেল-কৌশল নেতিবাচক-ক্যাশিং যোগ ttl, আর বিনয়-পরীক্ষা এই যে DNS-বিভ্রাট = পুরো বহরের কল একসাথে ভদ্রভাবে ব্যর্থ (SERVFAIL) — এইজন্যই CoreDNS একমাত্র ডিপ্লয়মেন্ট, যা আপনি অন্য সবার আগে স্কেল করেন। আর যার প্রস্তুতি-প্রোব ঠিক করে বহর প্রশ্নই করতে পারবে কি না।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'perimeter.yaml',
      caption: { en: 'One promise, three perimeters, one front desk: reaching the name is a designed act.', bn: 'একটি প্রতিশ্রুতি, তিন সীমরেখা, একটি প্রধান-ডেস্ক: নামে পৌঁছানো একটি নকশাকৃত-কাজ।' },
      code: `apiVersion: v1
kind: Service
metadata: { name: ledger-api }          # the standing promise
spec:
  type: ClusterIP                       # inside-only: default and finest
  selector: { app: ledger-api }         # the continuous truth-set evaluator
  ports: [{ port: 80, targetPort: 8080 }]
---
apiVersion: v1
kind: Service
metadata: { name: ledger-api-metal }    # the debugging hinge / on-prem workhorse
spec:
  type: NodePort
  selector: { app: ledger-api }
  ports: [{ port: 80, targetPort: 8080, nodePort: 32345 }]
---
apiVersion: v1
kind: Service
metadata: { name: db }                  # headless: clients name their own citizen
spec:
  clusterIP: None
  selector: { app: db }
  ports: [{ port: 5432, targetPort: 5432 }]
---
apiVersion: networking.k8s.io/v1
kind: Ingress                           # the front desk: one door, TLS manners
metadata:
  name: public-front
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt   # certificates live HERE, not in jars
spec:
  ingressClassName: nginx
  tls:
    - hosts: [api.ledger.example, app.ledger.example]
      secretName: ledger-tls
  rules:
    - host: api.ledger.example
      http:
        paths:
          - path: /
            pathType: Prefix
            backend: { service: { name: ledger-api, port: { number: 80 } } }
    - host: app.ledger.example
      http:
        paths:
          - path: /
            pathType: Prefix
            backend: { service: { name: web-frontend, port: { number: 80 } } }`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the perimeter bought', bn: 'ফলাফল: সীমরেখা যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'perimeter move', bn: 'সীমরেখা-ভঙ্‌গি' }, { en: 'the contract signed', bn: 'সইকৃত-চুক্তি' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['service + selector', { en: 'consumers dial identity, never instance', bn: 'ভোক্তা ডায়াল করে পরিচয়, দৃষ্টান্ত কখনো নয়' }, { en: 'churn invisible to clients; truth-set always fresh', bn: 'ভোক্তার কাছে অদৃশ্য-চলাচল; সত্য-সেট সবসময় তাজা' }, 'the app that cached pod IPs and woke up haunted'],
        ['clusterip default', { en: 'databases unreachable from the internet by arithmetic, not memory', bn: 'ইন্টারনেট-থেকে-অপৌঁছানো ডেটাবেস, পাটিগণিতে, স্মৃতিতে নয়' }, { en: 'attack surface equals intent, reviewed as YAML', bn: 'আক্রমণ-পৃষ্ঠ সমান উদ্দেশ্য, YAML-রূপে পর্যালোচিত' }, 'the mongo that answered the world for a weekend'],
        ['nodeport as hinge', { en: 'one direct question per chair, always answerable', bn: 'আসনপ্রতি একটি সরাসরি-প্রশ্ন, সবসময় উত্তরযোগ্য' }, { en: 'debugging independent of the desk’s health', bn: 'ডেস্কের স্বাস্থ্য-স্বাধীন ডিবাগিং' }, 'the outage where the load balancer hid the corpse'],
        ['ingress + cert-manager', { en: 'TLS manners at the desk; apps ship plaintext inside', bn: 'ডেস্কে TLS-শিষ্টাচার; অ্যাপ ভেতরে পাঠায় প্লেইনটেক্সট' }, { en: 'one public door, certificates rotated as Secrets', bn: 'একটি জনসাধারণ-দরজা, Secrets-রূপে-ঘূর্ণিত সার্টিফিকেট' }, 'the cert expiring inside a jar at 3 a.m.'],
        ['graceful retirement wired', { en: 'name struck before the atom dies, every time', bn: 'পরমাণু মরার আগে নাম কর্তিত, প্রতিবার' }, { en: 'rolls register as non-events in the error budget', bn: 'ত্রুটি-বাজেটে অনুঘটনাহীন-রূপে লেখা রোল' }, 'the 1% blip everyone agreed to stop seeing'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the name that resolved to nobody', bn: 'ডিবাগ-ফাইল: যে নাম রূপান্তরিত হলো অচেতন-কারোতে' } },
    {
      type: 'para',
      text: {
        en: 'The team noticed intermittent connection errors reaching an internal service. Running nslookup inside a debug pod showed that DNS resolved the cluster IP properly. However, curl commands failed with connection refused. Checking kubectl get endpoints revealed an empty address list. Running kubectl get pods with label selectors showed that a recent pull request had mistakenly renamed the pod label to ledger_backend while the Service selector still expected ledger-api. Correcting the typo restored endpoints immediately. CI now enforces a static validation test ensuring that selector labels match pod template labels before any PR merges.',
        bn: 'অভ্যন্তরীণ সার্ভিসটিতে ট্রাফিকের মাঝে সংযোগ বিচ্ছিন্ন হওয়ার অভিযোগ আসে। ক্লাস্টারের ভেতর থেকে nslookup চালিয়ে দেখা গেল DNS সঠিক আইপি ফেরত দিচ্ছে। কিন্তু কার্ল (curl) কমান্ড সংযোগ প্রত্যাখ্যাত দেখাচ্ছিল। kubectl get endpoints কমান্ডে কোনো ব্যাকেন্ড আইপি পাওয়া যায়নি। লেবেল যাচাই করে ধরা পড়ল একটি সাম্প্রতিক পিআরে পডের লেবেল বদলে ledger_backend করা হয়েছিল, অথচ সার্ভিসটি তখনও পুরনো লেবেল খুঁজছিল। টাইপো সংশোধন করায় এন্ডপয়েন্ট সাথে সাথে কার্যকর হয়। সার্ভিস ও পড লেবেলের মিল নিশ্চিত করতে সিআই-তে স্বয়ংক্রিয় পরীক্ষা বাধ্যতামূলক করা হয়।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: perimeters with lawyers', bn: 'বাস্তব-জগৎ: উকিলসহ সীমরেখা' } },
    {
      type: 'list',
      items: [
        { en: 'Service mesh (Istio/Linkerd) weaponizes the seam: sidecar proxies on every atom mint per-hop mTLS identity and own retries/timeouts — the perimeter moved INSIDE the fleet, priced in CPU and one more moving part per pod.', bn: 'Service mesh (Istio/Linkerd) সেলাইকে সশস্ত্র করে: প্রতি পরমাণুর সাইডকার-প্রক্সি ছাপায় লাফপ্রতি-mTLS-পরিচয় আর দখল করে পুনঃচেষ্টা/টাইমআউট — সীমরেখা সরে এল বহরের ভেতরে, মূল্য CPU আর পডপ্রতি আরও একটি চলমান-অংশ।' },
        { en: 'Gateway API is ingress with namespaces of responsibility: infra owns the Gateway, teams own their Routes — the front desk turned into a multi-tenant law court, which is the actual shape of incident politics at scale.', bn: 'Gateway API হলো দায়িত্বের নেমস্পেসসহ ইনগ্রেস: অবকাঠামো Gateway-এর মালিক, দলগুলো মালিক তাদের Routes-এর — বহুভাড়াটিয়া-আদালতে রূপান্তরিত প্রধান-ডেস্ক, যা বড়-পরিসরে ঘটনা-রাজনীতির প্রকৃত-আকৃতি।' },
        { en: 'external-dns + cert-manager + one wildcard Ingress-class is the small-fleet perimeter kit: DNS records and certs materialize from annotations — the register extends outdoors, and the audit trail IS the YAML.', bn: 'external-dns + cert-manager + একটি ওয়াইল্ডকার্ড Ingress-ক্লাস হলো ক্ষুদ্র-বহরের সীমরেখা-সরঞ্জাম: DNS-রেকর্ড আর সার্ট মূর্ত হয় টীকা থেকে — রওকদারি বাইরেও বিস্তৃত, আর নিরীক্ষণ-পথ-ই YAML।' },
        { en: 'Regulated fleets draw the perimeter at the airway: private clusters, LoadBalancer type internal, egress gateways with allowlists — ClusterIP’s zero-trust ethic made literal, with auditors reading the services list quarterly.', bn: 'নিয়ন্ত্রিত-বহর সীমরেখা আঁকে বাতাসে: বেসরকারি-ক্লাস্টার, internal-ধরনের LoadBalancer, অনুমতি-তালিকাযুক্ত নিষ্গমন-গেটওয়ে — আক্ষরিককৃত ClusterIP-এর শূন্য-বিশ্বাস-নীতি, নিরীক্ষক ত্রৈমাসিক সার্ভিস-তালিকা পড়েন।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: what the atom knows and keeps', bn: 'পরবর্তী: পরমাণু কী জানে আর কী ধরে রাখে' } },
    {
      type: 'para',
      text: {
        en: 'Names die gladly now; workloads carry the addresses in their mouths. Next lesson: everything the atom must KNOW and everything it must KEEP. ConfigMaps as environment with a version history, Secrets as base64 promises wrapped in RBAC and encryption-at-rest, volumes as the honest economics of storage (emptyDir’s gamble, hostPath’s sin, PVCs as numbered citizenship’s soil). Carried sentence: THE NAME OUTLIVES THE ATOM.',
        bn: 'নাম এখন আনন্দে মরে; ঠিকানা বহর বহন করে মুখে। পরবর্তী পাঠ: পরমাণুর যা-কিছু জানা দরকার আর যা-কিছু ধরে-রাখা — সংস্করণ-ইতিহাসসহ-পরিবেশরূপে ConfigMap, RBAC ও স্থির-সংরক্ষণ-এনক্রিপশনে মোড়া base64-প্রতিশ্রুতিরূপে Secret, সংরক্ষণের সৎ-অর্থনীতিরূপে ভলিউম (emptyDir-এর জুয়া, hostPath-এর পাপ, সংখ্যাযুক্ত-নাগরিকত্বের মাটিরূপে PVC)। বহনযোগ্য বাক্য: নাম পরমাণুকে পেরিয়ে বাঁচে।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-perimeter-ex1', kind: 'mcq', topic: 'truth-set emptiness',
      question: { en: 'Inside a pod: nslookup payments resolves, but curl payments hangs refused. Name the FIRST kubectl you run and the two sentences it can print.', bn: 'পডের ভেতরে: nslookup payments রূপান্তরিত হয়, কিন্তু curl payments refused-এ ঝুলে। প্রথম kubectl-টি নাম বলুন আর তা যে দুই বাক্য ছাপাতে পারে।' },
      options: [
        { en: 'kubectl get endpoints payments — either NAMED ADDRESSES (truth-set alive; hunt the atom: port, probe, crash) or the EMPTY row (selector/label mismatch or zero Ready pods — the promise exists, nothing keeps it)', bn: 'kubectl get endpoints payments — হয় নামকৃত-ঠিকানা (সত্য-সেট জীবিত; পরমাণুর শিকারে যান: পোর্ট, প্রোব, ক্র্যাশ) নয় খালি-সারি (সিলেক্টর/লেবেল-অসামঞ্জস্য নইলে শূন্য-Ready-পড — প্রতিশ্রুতি আছে, রক্ষাকারী নেই)' },
        { en: 'kubectl logs deploy/payments — the application must be crash-looping', bn: 'kubectl logs deploy/payments — অ্যাপ্লিকেশন অবশ্যই ক্র্যাশ-লুপে' },
        { en: 'kubectl restart coredns — the directory is stale', bn: 'kubectl restart coredns — ডিরেক্টরি বাসি' },
        { en: 'ping payments — icmp will reveal the truth', bn: 'ping payments — icmp সত্য প্রকাশ করবে' },
      ],
      answer: 0,
      hint: { en: 'Names resolve; truth-sets do not. Which command lists the truth-set?', bn: 'নাম রূপান্তরিত হয়; সত্য-সেট নয়। সত্য-সেট তালিকায় কোন কমান্ড?' },
      explanation: { en: 'The empty endpoints row is the SINGLE most common production find — a promise with no keeper. Read the seam first; the atom and the folklore both come later.', bn: 'খালি এন্ডপয়েন্ট-সারিই সর্বাধিক-সাধারণ প্রোডাকশন-আবিষ্কার — রক্ষাকারীবিহীন প্রতিশ্রুতি। সেলাই প্রথমে পড়ুন; পরমাণু ও লোককথা দুটোই পরে আসে।' },
    },
    { id: 'k8s-perimeter-ex2', kind: 'predict', topic: 'conntrack race',
      question: { en: 'You roll a deployment; one long-lived gRPC client keeps timing out for ~30s on EVERY roll, then recovers. Predict the mechanism and the two-part fix.', bn: 'আপনি ডিপ্লয়মেন্ট গড়ালেন; একটি দীর্ঘজীবী gRPC-ক্লায়েন্ট প্রতি রোলে ~৩০ সেকেন্ড টাইমআউট হয়, তারপর সেরে ওঠে। প্রক্রিয়াটত্ত্ব ভবিষ্যদ্বাণী করুন আর দুই-খণ্ডের প্রতিকার।' },
      options: [
        { en: 'mechanism: the client rewrote its connection ONCE to one pod IP (conntrack/five-tuple pinning) and the truth-set reshuffled beneath it — the dead atom lingers as alive-but-slow in the cache. Fix: (1) deregister-then-die: preStop sleep + terminationGracePeriod so the name is struck BEFORE the atom stops answering, (2) client-side re-resolution (gRPC round_robin / max-connection-age) so streams re-balance across the fresh set', bn: 'প্রক্রিয়াটত্ত্ব: ক্লায়েন্ট তার সংযোগ একবারই পুনর্লিখেছে একটি পড-IP-তে (conntrack/পাঁচ-টিউপল-পিনিং) আর সত্য-সেট নিচে বদলে গেছে — মৃত-পরমাণু ক্যাশে জীবন্ত-কিন্তু-ধীররূপে থেমে আছে। প্রতিকার: (১) নিবন্ধন-বাতিল-তারপর-মৃত্যু: preStop স্লিপ + terminationGracePeriod, যাতে নাম কর্তিত হয় পরমাণু উত্তর বন্ধের আগে, (২) ক্লায়েন্ট-পার্শ্ব পুনঃরূপান্তর (gRPC round_robin / max-connection-age), যাতে স্ট্রিম তাজা-সেটে পুনঃভারসাম্য নেয়' },
        { en: 'mechanism: coredns eviction; fix: more coredns replicas', bn: 'প্রক্রিয়াটত্ত্ব: coredns-উচ্ছেদ; প্রতিকার: আরও coredns-রেপ্লিকা' },
        { en: 'mechanism: nodeport exhaustion; fix: raise ephemeral ports', bn: 'প্রক্রিয়াটত্ত্ব: nodeport-সংকট; প্রতিকার: ক্ষণস্থায়ী-পোর্ট বাড়ান' },
        { en: 'mechanism: ingress flap; fix: sticky sessions', bn: 'প্রক্রিয়াটত্ত্ব: ইনগ্রেস-দোলা; প্রতিকার: স্টিকি-সেশন' },
      ],
      answer: 0,
      hint: { en: 'Who keeps an appointment after the host has died — and who must strike the name FIRST?', bn: 'যাজকের মৃত্যুর পরও কে অ্যাপয়েন্টমেন্ট ধরে রাখে — আর নাম কাকে আগে কর্তন করতে হবে?' },
      explanation: { en: 'DNAT caches per connection, not per call: long-lived streams carry stale truths in their mouths. Strike the name before the atom dies, and make clients re-ask — the two halves of one politeness.', bn: 'DNAT ক্যাশ করে সংযোগপ্রতি, কলপ্রতি নয়: দীর্ঘজীবী-স্ট্রিম বাসি-সত্য বহন করে মুখে। পরমাণু মরার আগে নাম কর্তুন, আর ক্লায়েন্টকে পুনঃপ্রশ্ন করান — এক ভদ্রতার দুই অর্ধাংশ।' },
    },
    { id: 'k8s-perimeter-ex3', kind: 'mcq', topic: 'perimeter economics',
      question: { en: 'A 40-service fleet wants every API publicly reachable “for simplicity”. What does the perimeter lesson price, and what is the standard shape?', bn: '৪০-সার্ভিসের বহর চায় প্রতিটি API জনসাধারণে পৌঁছানোযোগ্য “সরলতায়”। সীমরেখা-পাঠ কী মূল্য দেয়, আর প্রমিত-আকৃতি কোনটি?' },
      options: [
        { en: 'it prices reachability twice — as ATTACK SURFACE (every public name is audited forever) and as INVOICE (per-hour per-rule load balancers). The standard shape: ONE LoadBalancer feeding ONE Ingress (or Gateway) front desk, host/path multiplexing behind it, ClusterIP by default and NodePort only as the debugging hinge. 39 of the 40 names should simply have no perimeter', bn: 'তা পৌঁছানোযোগ্যতা মূল্য দেয় দুইবার — আক্রমণ-পৃষ্ঠরূপে (প্রতি জনসাধারণ-নাম চিরকাল নিরীক্ষিত) আর চালানরূপে (ঘণ্টাপ্রতি-নিয়মপ্রতি লোড-ব্যালেন্সার); প্রমিত-আকৃতি: একটি LoadBalancer খাওয়াচ্ছে একটি Ingress (নইলে Gateway) প্রধান-ডেস্ক, পেছনে host/path-বহুগুণন, ডিফল্টে ClusterIP আর NodePort কেবল ডিবাগিং-কব্জা. ৪০ নামের ৩৯টির কোনো সীমরেখাই থাকা উচিত নয়' },
        { en: 'it prices nothing; public by default is the kubernetes way', bn: 'তা কিছুই মূল্য দেয় না; ডিফল্টে জনসাধারণ-ই kubernetes-পন্থা' },
        { en: 'give each api a nodeport and document the ports', bn: 'প্রতি API-কে একটি NodePort দিন আর পোর্ট লিপিবদ্ধ করুন' },
        { en: 'use externalname services to share one dns', bn: 'একটি DNS ভাগ করতে ExternalName-সার্ভিস ব্যবহার করুন' },
      ],
      answer: 0,
      hint: { en: 'What are the two currencies reachability is always billed in?', bn: 'পৌঁছানোযোগ্যতা সবসময় কোন দুই মুদ্রায় বিল হয়?' },
      explanation: { en: 'The finest perimeter is the one that does not exist. ClusterIP-by-default is zero-trust written as YAML — firewalls are memory; absence is arithmetic.', bn: 'সূক্ষ্মতম সীমরেখা সেই, যার অস্তিত্বই নেই। ClusterIP-ডিফল্ট হলো YAML-এ-লেখা শূন্য-বিশ্বাস — ফায়ারওয়াল হলো স্মৃতি; অনুপস্থিতি হলো পাটিগণিত।' },
    },
  ],
  quiz: {
    id: 'k8s-perimeter-quiz',
    title: { en: 'The Perimeter Exam', bn: 'সীমরেখা-পরীক্ষা' },
    questions: [
      { id: 'sp1', kind: 'mcq', topic: 'selector grammar',
        question: { en: 'A service and its pods both exist; endpoints stays empty forever. List the TWO text collisions that produce this, exactly.', bn: 'সার্ভিস ও পড দুটোই আছে; এন্ডপয়েন্ট চিরকাল খালি থাকে। এ-ঘটনা ঘটানো দুই লেখা-সংঘর্ষ হুবহু তালিকাভুক্ত করুন।' },
        options: [
          { en: '(1) selector key/value that no pod label matches (typo, underscore-vs-dash, case) — the truth-set lawfully equals nobody; (2) every matching pod failing readiness — written into the set only on Ready. So the promise is kept EMPTY rather than false (labels match, health doesn’t): name, match, health — the three-step waltz with one dancer missing', bn: '(১) এমন সিলেক্টর key/value, যা কোনো পড-লেবেল ম্যাচ করে না (টাইপো, আন্ডারস্কোর-বনাম-ড্যাশ, বড়হাত) — সত্য-সেট বৈধভাবে সমান অচেতন-কেউ; (২) ম্যাচকারী প্রতি পড প্রস্তুতিতে ব্যর্থ. সেটে লেখা হয় কেবল Ready-তে, তাই প্রতিশ্রুতি মিথ্যা-না-করে খালি রাখা হয় (লেবেল মিলেছে, স্বাস্থ্য মেলেনি): নাম, মিল, স্বাস্থ্য — এক নৃত্যশিল্পী-হারা তিন-ধাপের নাচ' },
          { en: 'kube-proxy is down and iptables are missing', bn: 'kube-proxy বন্ধ আর iptables হারানো' },
          { en: 'coredns lost the srv records', bn: 'CoreDNS SRV-রেকর্ড হারিয়েছে' },
          { en: 'the endpointslice quota ran out', bn: 'EndpointSlice-কোটা শেষ' },
        ],
        answer: 0,
        hint: { en: 'Which two sentences must BOTH be true before a pod is written into the promise?', bn: 'প্রতিশ্রুতিতে পড লেখার আগে কোন দুই বাক্য দুটোই সত্য হতে বাধ্য?' },
        explanation: { en: 'Membership = labels match AND readiness green. Empty endpoints is always one of those two sentences failing — legible in seconds once you read the seam instead of the folklore.', bn: 'সদস্যতা = লেবেল-মিল এবং সবুজ-প্রস্তুতি। খালি-এন্ডপয়েন্ট সবসময় সেই দুই বাক্যের একটির ব্যর্থতা — সেলাই পড়লে সেকেন্ডে সুপাঠ্য, লোককথা নয়।' },
      },
      { id: 'sp2', kind: 'mcq', topic: 'headless naming',
        question: { en: 'Why do StatefulSets insist on a headless service instead of a standard ClusterIP?', bn: 'কেন StatefulSet প্রমিত ClusterIP-র বদলে headless-সার্ভিসে জেত করে?' },
        options: [
          { en: 'some clients must CHOOSE their citizen, not accept the lottery: clusterIP: None makes DNS answer with the pod IPs themselves, so db-1.db resolves to THAT pod. Replica-aware clients (drivers, replication threads, the consensus choir) read identities from the directory; a virtual IP would launder identity into randomness. And numbered citizens cannot be reached by raffle', bn: 'কেউ কেউ ক্লায়েন্টকে নাগরিক বাছতে হয়, লটারি মেনে নয়: clusterIP: None করলে DNS উত্তর দেয় পড-IP-গুলোই, তাই db-1.db রূপান্তরিত হয় সেই-পডেই — রেপ্লিকা-সচেতন ক্লায়েন্ট (ড্রাইভার, প্রতিলিপি-থ্রেড, সুরদল) ডিরেক্টরি থেকে পরিচয় পড়ে। ভার্চুয়াল-IP পরিচয়কে এলোমেলোয় ভিজিয়ে দিত, আর সংখ্যাযুক্ত-নাগরিককে লটারিতে পাওয়া যায় না' },
          { en: 'headless services are faster because they skip kube-proxy', bn: 'headless-সার্ভিস দ্রুততর, kube-proxy এড়ায় বলে' },
          { en: 'statefulsets cannot reference clusterip services at all', bn: 'StatefulSet ClusterIP-সার্ভিস একেবারেই উল্লেখ করতে পারে না' },
          { en: 'headless avoids the dns tax entirely', bn: 'headless DNS-কর পুরো এড়ায়' },
        ],
        answer: 0,
        hint: { en: 'What does db-1.db need to MEAN, and what does a virtual IP do to meaning?', bn: 'db-1.db-এর কী অর্থ হওয়া দরকার, আর ভার্চুয়াল-IP অর্থের কী করে?' },
        explanation: { en: 'ClusterIP is a raffle with good odds; headless is a directory with exact addresses. Stateful workloads buy identity with it — the raffle is for cattle, the directory is for citizens.', bn: 'ClusterIP হলো ভালো-সম্ভাবনার লটারি; headless হলো হুবহু-ঠিকানার ডিরেক্টরি। স্টেটফুল-ওয়ার্কলোড এটা দিয়ে পরিচয় কেনে — লটারি পশুর, ডিরেক্টরি নাগরিকের।' },
      },
      { id: 'sp3', kind: 'mcq', topic: 'coreDNS humility',
        question: { en: 'Which service outage politely takes the WHOLE fleet’s ability to even ask questions with it — and what two disciplines respect that fact?', bn: 'কোন সার্ভিস-বিভ্রাট ভদ্রভাবে পুরো বহরের প্রশ্ন-করার-সামর্থ্যই সঙ্গে নেয় — আর কোন দুই শৃঙ্খলা তা সম্মান করে?' },
        options: [
          { en: 'CoreDNS — because it IS the directory, reached via the kube-dns ClusterIP, so its absence renders every lookup a SERVFAIL at once (the incantation’s step one dies first). Disciplines: (1) scale and probe DNS BEFORE anything else (it is the fleet’s tongue), (2) keep an out-of-band reach (NodePort bookmarks, raw-IP runbooks) so questions can still be ASKED while the directory is being walked back to health', bn: 'CoreDNS — কারণ সে-ই ডিরেক্টরি, kube-dns ClusterIP দিয়ে পৌঁছানো, তাই তার অনুপস্থিতি প্রতি অনুসন্ধানকে একসাথে SERVFAIL করে (জাদুবাক্যের প্রথম ধাপ আগে মরে). শৃঙ্খলা: (১) অন্য সবার আগে DNS স্কেল ও প্রোব করুন (এটি বহরের জিভ), (২) বহির্বন্ধ-পৌঁছানো রাখুন (NodePort-বুকমার্ক, কাঁচা-IP-রানবুক), যাতে ডিরেক্টরি সুস্থতায় ফেরার সময়ও প্রশ্ন করা যায়' },
          { en: 'the ingress controller — without it nothing routes', bn: 'ইনগ্রেস-কন্ট্রোলার — এ ছাড়া কিছুই রুট হয় না' },
          { en: 'kube-proxy — dnat dies fleet-wide', bn: 'kube-proxy — ভর-জুড়ে DNAT মরে' },
          { en: 'etcd — the register closes', bn: 'etcd — রওকদারি বন্ধ হয়' },
        ],
        answer: 0,
        hint: { en: 'Which piece answers every OTHER piece’s first question?', bn: 'কোন অংশ অন্য প্রতিটি অংশের প্রথম প্রশ্নের উত্তর দেয়?' },
        explanation: { en: 'etcd loss stops WRITES; DNS loss stops QUESTIONS — and debugging is questions. The directory serving the directory is the fleet’s tongue: probe it first, always.', bn: 'etcd-ক্ষতি লেখা থামায়; DNS-ক্ষতি প্রশ্ন থামায় — আর ডিবাগিং-ই প্রশ্ন। ডিরেক্টরি-পরিষেবাকারী ডিরেক্টরি বহরের জিভ: প্রথমে প্রোব করুন, সবসময়।' },
      },
      { id: 'sp4', kind: 'mcq', topic: 'graceful retirement',
        question: { en: 'What does the preStop-sleep-then-die ordering actually BUY, in mechanism terms?', bn: 'preStop-ঘুম-তারপর-মৃত্যু-ক্রম আসলে কী কিনে, প্রক্রিয়াটত্ত্ব-পরিভাষায়?' },
        options: [
          { en: 'it buys the endpoints controller TIME to strike the name (EndpointSlice rewrite → kube-proxy DNAT table updates propagate) BEFORE the atom stops answering — so no conntrack entry, no load balancer. And no litany of client retries ever memorizes the corpse. Retirement becomes arithmetic (the truth-set shrank) instead of theatre (timeouts noticing a death)', bn: 'তা এন্ডপয়েন্ট-কন্ট্রোলরকে সময় কিনে দেয় নাম কর্তনের (EndpointSlice-পুনর্লেখন → kube-proxy DNAT-টেবিল-হালনাগাদ-প্রসার), পরমাণু উত্তর-বন্ধের আগেই — যাতে কোনো conntrack-এন্ট্রি, লোড-ব্যালেন্সার বা ক্লায়েন্ট-পুনঃচেষ্টা-মালা কখনো মৃতদেহ মুখস্থ না করে; অবসর তখন পাটিগণিত (সত্য-সেট সঙ্কুচিত হলো), থিয়েটর নয় (টাইমআউট মৃত্যু-লক্ষণ-করছে)' },
          { en: 'it buys the node time to finish garbage collection', bn: 'তা নোডকে সময় কিনে দেয় আবর্জনা-সংগ্রহ শেষের' },
          { en: 'it makes rolling updates faster by batching', bn: 'ব্যাচিংয়ে গড়ানো-হালনাগাদ দ্রুত করে তোলে' },
          { en: 'it guarantees zero cpu usage at shutdown', bn: 'বন্ধের সময় শূন্য-CPU-ব্যবহার নিশ্চিত করে' },
        ],
        answer: 0,
        hint: { en: 'Who must FORGET the atom before the atom forgets to answer?', bn: 'পরমাণু উত্তর দিতে ভোলার আগে কাকে পরমাণুকে ভুলতে হবে?' },
        explanation: { en: 'Deaths are only clean when the directory hears first. Deregister-then-die is one ordering: every cache expires BEFORE the residue does.', bn: 'মৃত্যু তখনই পরিষ্কার, যখন ডিরেক্টরি আগে শোনে। নিবন্ধন-বাতিল-তারপর-মৃত্যু একটি ক্রম: প্রতি ক্যাশ শেষ হয় অবশিষ্টাংশের আগে।' },
      },
      { id: 'sp5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete the carried sentence: “The ___ outlives the atom.” (one word)', bn: 'বহনযোগ্য বাক্য পূর্ণ করুন: “___ পরমাণুকে পেরিয়ে বাঁচে।” (এক শব্দ)' },
        answer: 'name',
        accept: ['নাম'],
        hint: { en: 'Consumers dial the service’s…', bn: 'ভোক্তা ডায়াল করে সার্ভিসের…' },
        explanation: { en: 'Instance vs identity in one word: the NAME is the standing promise; every pod behind it is taught to die gladly.', bn: 'এক শব্দে দৃষ্টান্ত বনাম পরিচয়: নাম-ই স্থায়ী-প্রতিশ্রুতি; তার পেছনের প্রতি পড আনন্দে মরতে শিক্ষিত।' },
      },
    ],
  },
  nextLesson: { slug: 'the-config-storage-economy', title: { en: 'The Config & Storage Economy: what the atom knows and keeps', bn: 'কনফিগ ও সংরক্ষণ-অর্থনীতি: পরমাণু কী জানে আর কী ধরে রাখে' } },
};
