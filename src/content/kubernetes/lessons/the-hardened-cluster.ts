import type { Lesson } from '../../../lib/types';

export const hardenedClusterLesson: Lesson = {
  slug: 'the-hardened-cluster',
  tech: 'kubernetes',
  title: {
    en: 'Hardened Cluster — Seven lessons priced the atom, the ledger, the shapes',
    bn: 'শক্তিকৃত-ক্লাস্টার: পাসপোর্ট, সীমরেখা আর শেষ চালান'
  },
  summary: {
    en: 'Hardening a cluster means enforcing strict boundaries across identity, networking, workload security, and disaster recovery. First, RBAC establishes granular permissions using Roles and ClusterRoles. Second, NetworkPolicies enforce default-deny rules so pods only receive approved traffic. Third, Pod Security Standards prevent containers from running as root or accessing host paths. Fourth, vulnerability scanning and pinned image digests ensure software provenance. Finally, regular etcd backup drills guarantee that control planes can be completely restored after catastrophic failures.',
    bn: 'ক্লাস্টার সুরক্ষার মূল ভিত্তি হলো পরিচিতি, নেটওয়ার্কিং, ওয়ার্কলোড নিরাপত্তা এবং বিপর্যয় পুনরুদ্ধার ব্যবস্থার কঠোর প্রয়োগ। প্রথমত, RBAC নির্দিষ্ট Role ও ClusterRole দিয়ে অনুমতি সীমাবদ্ধ রাখে। দ্বিতীয়ত, NetworkPolicy অপ্রয়োজনীয় ট্রাফিক বন্ধ করে ডিফল্ট-অস্বীকার নিয়ম চালু করে। তৃতীয়ত, Pod Security Standards কন্টেইনারকে root হিসেবে চলা বা হোস্টের পাথ ব্যবহারে বাধা দেয়। চতুর্থত, সিকিউরিটি স্ক্যানিং ও ডাইজেস্ট পিনিং সফটওয়্যারের স্বচ্ছতা নিশ্চিত করে। পরিশেষে, নিয়মিত etcd ব্যাকআপ ও পুনরুদ্ধার মহড়া সম্পূর্ণ বিপর্যয়েও ক্লাস্টারকে সচল রাখার পথ দেখায়।',
  },
  minutes: 26,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT the armor actually is', bn: 'বর্ম আসলে কী' } },
    {
      type: 'para',
      text: {
        en: 'Cluster defense relies on four protective boundaries alongside regular recovery drills. Boundary one is role-based access control (RBAC). A Role lists allowed API groups, resources, and verbs such as get, list, or watch inside a single namespace. A ClusterRole manages cluster-wide resources like nodes and persistent volumes. Subjects such as users and service accounts receive these permissions through bindings. Boundary two is internal network policy. Namespaces configure default-deny rules for ingress and egress, opening access only to specific ports. Boundary three is pod security standards. These standards enforce baseline and restricted profiles that prevent root execution and host path mounts. Boundary four is image provenance. Container images use immutable cryptographic hash digests rather than mutable tags. Finally, teams practice regular etcd backup and restore drills to guarantee cluster recovery.',
        bn: 'ক্লাস্টার প্রতিরক্ষা চারটি সুরক্ষামূলক স্তর এবং নিয়মিত পুনরুদ্ধার মহড়ার উপর নির্ভরশীল। প্রথম স্তর হলো রোল-ভিত্তিক প্রবেশাধিকার নিয়ন্ত্রণ বা RBAC। একটি Role নির্দিষ্ট নেমস্পেসের ভেতরে অনুমোদিত API গ্রুপ, রিসোর্স এবং get, list বা watch ক্রিয়ার তালিকা দেয়। ClusterRole নোড ও পারসিস্টেন্ট ভলিউমের মতো ক্লাস্টার-ব্যাপী রিসোর্স পরিচালনা করে। ব্যবহারকারী ও সার্ভিস অ্যাকাউন্টগুলো বাইন্ডিংয়ের মাধ্যমে এই অধিকার পায়। দ্বিতীয় স্তর হলো অভ্যন্তরীণ নেটওয়ার্ক পলিসি। নেমস্পেসগুলো ইনগ্রেস ও ইগ্রেসের জন্য ডিফল্ট-অস্বীকার নিয়ম চালু করে নির্দিষ্ট পোর্টে যোগাযোগ সীমাবদ্ধ রাখে। তৃতীয় স্তর হলো পড সিকিউরিটি স্ট্যান্ডার্ড। এই নীতিমালা কন্টেইনারের রুট প্রিভিলেজ ও হোস্ট পাথ ব্যবহার নিষিদ্ধ করে। চতুর্থ স্তর হলো সুরক্ষিত কন্টেইনার ইমেজ। পরিবর্তনযোগ্য ট্যাগের বদলে অপরিবর্তনীয় ক্রিপ্টোগ্রাফিক হ্যাশ ডাইজেস্ট পিন করা হয়। পরিশেষে, etcd ব্যাকআপ ও পুনরুদ্ধার মহড়া সম্পূর্ণ দুর্যোগে ক্লাস্টার সচল রাখতে সাহায্য করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'passport minimalism', def: { en: 'every identity holds exactly the verbs its job recites — wildcard * is a confession, never a shortcut', bn: 'প্রতি পরিচয় ধরে হুবহু সেই ক্রিয়া, যা তার কাজ পাঠ করে — ওয়াইল্ডকার্ড * হলো স্বীকারোক্তি, শর্টকাট কখনো নয়' } },
        { term: 'kubectl auth can-i', def: { en: 'the wall read as the subject sees it: the only honest audit verb', bn: 'বিষয় যেভাবে দেখে সেভাবে-পঠিত প্রাচীর: একমাত্র সৎ নিরীক্ষণ-ক্রিয়া' } },
        { term: 'default-deny', def: { en: 'reachability begins forbidden, opens only by named visas — the ClusterIP ethic as statute', bn: 'পৌঁছানোযোগ্যতা শুরু হয় নিষিদ্ধে, খোলে কেবল নামকৃত-ভিসায় — বিধিরূপে ClusterIP-নীতি' } },
        { term: 'privilege tiers', def: { en: 'privileged/baseline/restricted: the three tariff classes at namespace customs where sin is rejected cheaply', bn: 'privileged/baseline/restricted: নেমস্পেস-কাস্টমসের তিন শুল্ক-শ্রেণি, যেখানে পাপ সস্তায় প্রত্যাখ্যাত হয়' } },
        { term: 'digest addressing', def: { en: 'images by sha256, never by mood: the deployable become an exact cargo', bn: 'sha256-এ ইমেজ, মেজাজে কখনো নয়: ডিপ্লয়েবল হয় হুবহু-পণ্য' } },
        { term: 'restore drill', def: { en: 'the only backup that counts: quarterly, timed, from paper — recovery rehearsed before it is needed', bn: 'একমাত্র ব্যাকআপ, যার মূল্য আছে: ত্রৈমাসিক, সময়বদ্ধ, কাগজ থেকে — প্রয়োজনের আগে অনুশীলিত-পুনরুদ্ধার' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY refusal is an arithmetic', bn: 'কেন প্রত্যাখ্যান একটি পাটিগণিত' } },
    {
      type: 'para',
      text: {
        en: 'Every defensive boundary solves a concrete risk. Verbs and permissions carry ongoing operational risk. The CI token incident demonstrated that an overly broad wildcard role granted unnecessary read access. Least privilege requires enumerating permissions precisely during review. Flat networks accumulate risk when every container can communicate without restriction. Applying default-deny rules resets connectivity so teams explicitly authorize necessary traffic flows. Admission control acts as an immediate filter at the border. Rejecting invalid configurations early prevents dangerous misconfigurations from reaching runtime. Finally, regular backups and drills ensure reliable disaster recovery. Snapshotting etcd periodically and practicing restores ensures that operations survive complete control plane failure.',
        bn: 'প্রতিটি সুরক্ষামূলক প্রাচীর সুনির্দিষ্ট ঝুঁকি মোকাবেলা করে। অতিরিক্ত অনুমতি ব্যবস্থার নিরাপত্তা দুর্বল করে দেয়। সিআই টোকেনের ঘটনা দেখিয়েছে কীভাবে ওয়াইল্ডকার্ড অনুমতি অপ্রয়োজনীয় রিসোর্স উন্মুক্ত করে। সর্বনিম্ন প্রবেশাধিকার নীতি পর্যালোচনার সময় প্রতিটি ক্রিয়া সুনির্দিষ্ট করতে বাধ্য করে। ফ্ল্যাট নেটওয়ার্ক অনিয়ন্ত্রিত যোগাযোগের মাধ্যমে ঝুঁকি বাড়ায়। ডিফল্ট-অস্বীকার নিয়ম চালু করে সংযোগ সীমাবদ্ধ করা হয়, যাতে কেবল অনুমোদিত ট্রাফিকই চলাচল করতে পারে। অ্যাডমিশন কন্ট্রোল সীমান্তে তাৎক্ষণিক ফিল্টার হিসেবে কাজ করে। শুরুতে ভুল কনফিগারেশন আটকে দিলে তা আর রানটাইম পর্যন্ত পৌঁছাতে পারে না। পরিশেষে, নিয়মিত ব্যাকআপ ও মহড়া নিশ্চিত দুর্যোগ পুনরুদ্ধারের সুযোগ দেয়। সময়মতো etcd স্ন্যাপশট নেওয়া এবং পুনরুদ্ধারের অভ্যাস থাকলে কন্ট্রোল প্লেনের সম্পূর্ণ ব্যর্থতাতেও ক্লাস্টার টিকিয়ে রাখা যায়।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to armor the estate', bn: 'কীভাবে এস্টেট বর্ম পরাবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Recite jobs, never moods: one ServiceAccount per workload (never default), Roles bound to the verbs the job recites (get/list/watch configmaps for the watcher. NOTHING for the serving atom), then prove the wall: kubectl auth can-i --list --as=system:serviceaccount:prod:ledger-api. The audit verb reads the passport as the bearer experiences it.', bn: 'কাজ পাঠ করুন, মেজাজ কখনো নয়: কাজপ্রতি একটি ServiceAccount (ডিফল্ট কখনো নয়), Role বাঁধুন কাজের-পঠিত-ক্রিয়ায় (ওয়াচারের জন্য configmaps-এ get/list/watch; পরিবেশনকারী-পরমাণুর জন্য কিছুই নয়), তারপর প্রাচীর প্রমাণ করুন: kubectl auth can-i --list --as=system:serviceaccount:prod:ledger-api. নিরীক্ষণ-ক্রিয়া পাসপোর্ট পড়ে বাহক যেমন উপলব্ধি করে।' },
        { en: 'Reset reachability to zero per namespace: apply default-deny NetworkPolicy (ingress AND egress), then open visas with owners (web → api:8080; api → db:5432; api → dns:53 egress. DNS is the visa everybody forgets and everybody needs), each policy line reviewable like a firewall rule written by arithmetic instead of memory.', bn: 'নেমস্পেসপ্রতি পৌঁছানোযোগ্যতা শূন্যে পুনঃস্থাপন করুন: default-deny NetworkPolicy প্রয়োগ (ingress এবং egress), তারপর মালিকসহ ভিসা খুলুন (web → api:8080; api → db:5432; api → dns:53 egress. DNS সেই ভিসা, যা সবাই ভুলে যায় আর সবার দরকার), প্রতি নীতি-পঙ্‌ক্তি পর্যালোচনযোগ্য ফায়ারওয়াল-নিয়মের মতো, পাটিগণিতে-লেখা, স্মৃতিতে নয়।' },
        { en: 'Staff the admission court per district: Pod Security Standards labels on namespaces (prod: restricted enforced + audit; staging: baseline. The system namespaces keep privileged with named-waiver ADRs), then migrate districts in audit-first mode so every rejection is previewed as a dry-run court before a single atom bounces.', bn: 'মহল্লাপ্রতি ভর্তি-আদালতে বিচারক বসান: নেমস্পেসে Pod Security Standards-লেবেল (prod: restricted প্রয়োগিত + audit; staging: baseline; সিস্টেম-নেমস্পেস রাখে privileged, নামকৃত-ছাড়-ADR-সহ), তারপর মহল্লা স্থানান্তর করুন audit-আগে-মোডে, যাতে প্রতি প্রত্যাখ্যান শুকনো-আদালতে পূর্বদৃষ্ট হয়, একটি পরমাণু ছিটকে ফেরার আগেই।' },
        { en: 'Address cargo, not moods: image references pinned to sha256 digests in every manifest (tags demoted to comments), SBOMs filed beside the artifact (syft/CycloneDX in CI), and one scheduled job diffs running digests against the CVE feed. “are we affected?” must be a lookup, never a panic.', bn: 'পণ্য ঠিকানা করুন, মেজাজ নয়: প্রতি ম্যানিফেস্টে sha256-ডাইজেস্টে-পিনকৃত ইমেজ-রেফারেন্স (ট্যাগ অবনমিত মন্তব্যে), নিদর্শন-পাশে দাখিলকৃত SBOM (CI-তে syft/CycloneDX), আর একটি নির্ধারিত-কাজ চলমান-ডাইজেস্ট CVE-ফিডের বিপরীতে পার্থক্য করে — “আমরা কি ক্ষতিগ্রস্ত?” হতে হবে অনুসন্ধান, আতঙ্ক নয় কখনোই।' },
        { en: 'Rehearse the paper recovery quarterly: etcd snapshot (encrypted, off-chair) + the printed runbook (no dashboard, no cluster-DNS) restored into an isolated namespace while someone times it. The PROMPT that ends the drill is the same one that ends this hub: can we rebuild the estate from the register plus the paper?', bn: 'ত্রৈমাসিক কাগজ-পুনরুদ্ধার-মহড়া করান: etcd-স্ন্যাপশট (এনক্রিপ্টকৃত, আসন-বহির্ভূত) + মুদ্রিত-রানবুক (ড্যাশবোর্ড নেই, ক্লাস্টার-DNS নেই), বিচ্ছিন্ন-নেমস্পেসে পুনরুদ্ধারিত, কেউ সময় নিতে থাকা অবস্থায়; মহড়া-শেষের জিজ্ঞাসাটি এই হাব-শেষের জিজ্ঞাসাই: রওকদারি যোগ কাগজ দিয়ে এস্টেট পুনর্গঠন করা যায় কি?' },
        { en: 'Close the loop with names on the wall: a quarterly access review exports every RoleBinding (kubectl get rolebindings,clusterrolebindings -A), each line answered by an owner or deleted. The wall is maintained the way the fleet is maintained: declaratively, reviewed, with folklore treated as a breach class of its own.', bn: 'প্রাচীরে নাম লিখে চক্র বন্ধ করুন: ত্রৈমাসিক প্রবেশ-পর্যালোচনা প্রতি RoleBinding রপ্তানি করে (kubectl get rolebindings,clusterrolebindings -A), প্রতি পঙ্‌ক্তির জবাবদেহী একটি মালিক, নয়তো বিলুপ্তি. প্রাচীর যেভাবে রক্ষিত, বহরও সেভাবে রক্ষিত: ঘোষণাপূর্বক, পর্যালোচিত, লোককথা গণ্য হয় তার নিজস্ব ভঙ্‌গি-শ্রেণিতে।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the register in the lab', bn: 'দৃশায়ন: ল্যাবে রওকদারি' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'One last time in the lab: describe the deployment and read every law this hub legislated in one ledger — replicas with budgets, probes with their lanes, resources with their dual currencies. Then the register→reality arrow, the one sentence that survives every tool: write desire; the cluster files the rest.',
        bn: 'ল্যাবে শেষবার: ডিপ্লয়মেন্ট describe করুন আর একটি খাতায় এই হাবের আইনকৃত প্রতিটি বিধান পড়ুন — বাজেটসহ-রেপ্লিকা, লেনসহ-প্রোব, দুই-মুদ্রাসহ-সম্পদ — তারপর রওকদারি→বাস্তব তীর, সেই একটি বাক্য যা প্রতি টুল পেরিয়ে টিকে: ইচ্ছা লিখুন; বাকিটা ক্লাস্টার দাখিল করবে।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: how the walls are consulted', bn: 'অভ্যন্তরীণ: প্রাচীরগুলো পরামর্শ হয় কীভাবে' } },
    {
      type: 'para',
      text: {
        en: 'Four consultation mechanisms, each at a different border. ONE, THE API GATE: every kubectl verb (and every controller’s verb — the loops of lesson two carry papers too) passes the API server’s gauntlet in order: Authenticate (who?), Authorize (RBAC consulted: verb+resource+namespace+name. The match is arithmetic against Role rules UNIONed across all bindings, no wildcard exemption survives an audit script that expands them), Admit (webhooks and Pod Security inspect the OBJECT itself before it lands in the register). A rejected manifest never becomes a fact, which is the cheapest trial there is. TWO, THE PACKET BORDER: NetworkPolicy is interpreted by the CNI plugin (Calico/Cilium) into per-chair firewall tables (iptables/eBPF): a SYN toward db:5432 from an unvisaed pod dies AT THE SOURCE CHAIR, before it can invoice the network. The wall travels with the packets. And because the verdicts are data-plane, the law keeps working even when the control plane is arguing with itself (the choir lesson wearing a firewall). THREE, THE COURT DOCKET: Pod Security Standards evaluate the manifest against the district class BEFORE the register accepts it — restricted districts reject runAsNonRoot absent, allowPrivilegeEscalation true, host-scoped namespaces (hostNetwork, hostPID) and every capability not explicitly pardoned. Audit mode SHADOW-try every manifest and annotations the would-be verdict. Migrations rehearse in the shadow court until the docket runs clean and the live court opens with zero surprises. FOUR, THE REGISTER’S REGISTER: etcd holds EVERYTHING — every spec, every status, every secret envelope — so the armor’s spine is: snapshot (etcdctl snapshot save, cadenced and encrypted), replicate (off-chair, off-region arithmetic). And restore-rehearse (the drill that turns “we have backups” from folklore into physics: restore to a sandbox, prove the register reads back, time it, file the result). The one truly privileged API in the building is the snapshot verb itself, which is why its passport is the rarest and its audit page the most-read in the whole wall.',
        bn: 'চার পরামর্শ-প্রক্রিয়াটত্ত্ব, প্রতিটি ভিন্ন সীমান্তে। এক, API-ফাটক: প্রতি kubectl-ক্রিয়া (আর প্রতি কন্ট্রোলারের ক্রিয়া — দ্বিতীয় পাঠের চক্রও কাগজ বহন করে) পেরিয়ে যায় API-সার্ভারের পরীক্ষাসারি, ক্রমানুসারে: প্রমাণীকরণ (কে?), অনুমোদন (RBAC-পরামর্শ: ক্রিয়া+সম্পদ+নেমস্পেস+নাম. মিল হলো পাটিগণিত, সব বাঁধুনি জুড়ে-মিশ্রিত Role-নিয়মের বিপরীতে, ওয়াইল্ডকার্ড-ছাড় টেকে না এমন নিরীক্ষণ-স্ক্রিপ্টের সামনে, যা সেগুলো প্রসারিত করে), ভর্তি (ওয়েবহুক আর Pod Security বস্তুটাকেই পরীক্ষা করে, রওকদারিতে জমা পড়ার আগে). প্রত্যাখ্যাত-ম্যানিফেস্ট কখনো ঘটনা হয় না, যা-ই সবচেয়ে সস্তা-বিচার। দুই, প্যাকেট-সীমান্ত: NetworkPolicy ব্যাখ্যা পায় CNI-প্লাগিনে (Calico/Cilium) আসনপ্রতি-ফায়ারওয়াল-টেবিলে (iptables/eBPF): ভিসাহীন-পডের db:5432-কামী একটি SYN মরে উৎস-আসনেই, নেটওয়ার্কে চালান দেওয়ার আগে — প্রাচীর প্যাকেটের সঙ্গে ভ্রমণ করে। আর যেহেতু রায়গুলো ডেটা-প্লেনের, নিয়ন্ত্রণ-প্লেন নিজের সাথে তর্ক করলেও আইন কাজ চালিয়ে যায় (ফায়ারওয়াল-পরা সুরদল-পাঠ)। তিন, আদালত-ডকেট: Pod Security Standards ম্যানিফেস্ট মূল্যায়ন করে মহল্লা-শ্রেণির বিপরীতে, রওকদারি গ্রহণের আগে — restricted-মহল্লা প্রত্যাখ্যান করে runAsNonRoot-অনুপস্থিত, allowPrivilegeEscalation true, হোস্ট-স্কোপড-নেমস্পেস (hostNetwork, hostPID) আর প্রতি ক্ষমতা, যা সুস্পষ্ট-মাফকৃত নয়; audit-মোড ছায়া-বিচার করে প্রতি ম্যানিফেস্ট আর টীকায়ন করে হতে-চলা-রায়. মাইগ্রেশন মহড়া করে ছায়া-আদালতে, ডকেট পরিষ্কার না-হওয়া পর্যন্ত, আর জীবিত-আদালত খোলে শূন্য-বিস্ময়ে। চার, রওকদারির রওকদারি: etcd ধরে সবকিছু — প্রতি স্পেক, প্রতি স্ট্যাটাস, প্রতি সিক্রেট-খাম. তাই বর্মের মেরুদণ্ড: স্ন্যাপশট (etcdctl snapshot save, নির্ধারিত-বিরতিতে ও এনক্রিপ্টকৃত), প্রতিলিপি (আসন-অতীত, অঞ্চল-অতীত পাটিগণিত), আর পুনরুদ্ধার-অনুশীলন (সেই মহড়া, যা “আমাদের ব্যাকআপ আছে”-কে লোককথা থেকে পদার্থবিদ্যায় রূপ দেয়: স্যান্ডবক্সে পুনরুদ্ধার, রওকদারি পড়া-যাওয়ার প্রমাণ, সময় নেওয়া, ফল দাখিল). ভবনের সত্যিকারে-বিশেষাধিকারপ্রাপ্ত একমাত্র API হলো স্ন্যাপশট-ক্রিয়া-নিজে, এইজন্যই তার পাসপোর্ট সবচেয়ে বিরল আর তার নিরীক্ষণ-পাতা পুরো প্রাচীরে সবচেয়ে পঠিত।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'armor.yaml',
      caption: { en: 'Four walls in one file: passport, perimeter, customs class, and the recovery contract.', bn: 'এক ফাইলে চার প্রাচীর: পাসপোর্ট, সীমরেখা, শুল্ক-শ্রেণি আর পুনরুদ্ধার-চুক্তি।' },
      code: `apiVersion: v1
kind: ServiceAccount             # the atom's own papers — never the default neck-tag
metadata: { name: ledger-api, namespace: prod }
automountServiceAccountToken: false    # the serving atom recites NO api verbs at all
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role                        # a visa for the watcher job: LOOK, never TOUCH
metadata: { name: config-watcher, namespace: prod }
rules:
  - apiGroups: [""]
    resources: [configmaps]
    verbs: [get, list, watch]     # jobs recited, moods never written
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata: { name: config-watcher, namespace: prod }
subjects: [{ kind: ServiceAccount, name: config-watcher, namespace: prod }]
roleRef: { kind: Role, name: config-watcher, apiGroup: rbac.authorization.k8s.io }
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy               # WALL TWO: reachability reset to zero, visas named
metadata: { name: default-deny, namespace: prod }
spec:
  podSelector: {}                 # every atom in the district
  policyTypes: [Ingress, Egress]
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy               # the named visas, owners in the comments, forever
metadata: { name: ledger-visas, namespace: prod }
spec:
  podSelector: { matchLabels: { app: ledger-api } }
  policyTypes: [Ingress, Egress]
  ingress:
    - from: [{ podSelector: { matchLabels: { app: web } } }]
      ports: [{ port: 8080 }]                    # web → api, one lane, one port
  egress:
    - to: [{ podSelector: { matchLabels: { app: db } } }]
      ports: [{ port: 5432 }]                    # api → db, quorum soil only
    - to: [{ namespaceSelector: { matchLabels: { kubernetes.io/metadata.name: kube-system } } }]
      ports: [{ port: 53, protocol: UDP }]       # DNS: the visa everybody forgets
---
# namespace customs (applied via labels):
#   pod-security.kubernetes.io/enforce: restricted   # the hardened district
#   pod-security.kubernetes.io/audit:   restricted   # the shadow court, docketing`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the armor bought', bn: 'ফলাফল: বর্ম যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'armor move', bn: 'বর্ম-ভঙ্‌গি' }, { en: 'the contract signed', bn: 'সইকৃত-চুক্তি' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['rbac minimalism', { en: 'every verb owned by a recited job', bn: 'প্রতি ক্রিয়ার মালিক একটি পঠিত-কাজ' }, { en: 'বিস্ফোরণ-ব্যাসার্ধ পড়ে as visa pages', bn: 'বিস্ফোরণ-ব্যাসার্ধ পড়ে ভিসা-পাতারূপে' }, 'the ci token that could read the world'],
        ['default-deny', { en: 'reachability enumerated, priced, owned', bn: 'পৌঁছানোযোগ্যতা গণিত, মূল্যায়িত, মালিকানাধীন' }, { en: 'the lan’s accumulated interest filed as bankruptcy', bn: 'LAN-এর জমে-ওঠা-সুদ দেউলিয়াত্বে-দাখিলকৃত' }, 'the database reachable from where no one looked'],
        ['admission court', { en: 'sin rejected at the border, cheaply', bn: 'পাপ সীমান্তে প্রত্যাখ্যাত, সস্তায়' }, { en: 'production hostPaths become a history exam', bn: 'প্রোডাকশন-hostPath হয় ইতিহাস-পরীক্ষা' }, 'the friday-night privileged pod folklore'],
        ['digest cargo', { en: 'deployables exact: sha256, sbom filed', bn: 'ডিপ্লয়েবল হুবহু: sha256, SBOM দাখিলকৃত' }, { en: 'cve morning begins as a lookup', bn: 'CVE-সকাল শুরু হয় অনুসন্ধানরূপে' }, 'the tag named latest that changed at 3 a.m.'],
        ['restore drill', { en: 'the register’s register proven, quarterly, timed', bn: 'রওকদারির রওকদারি প্রমাণিত, ত্রৈমাসিক, সময়বদ্ধ' }, { en: 'paper recovery is physics, not folklore', bn: 'কাগজ-পুনরুদ্ধার পদার্থবিদ্যা, লোককথা নয়' }, 'the backup nobody had ever opened'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the CI token that could read the world', bn: 'ডিবাগ-ফাইল: সেই CI-টোকেন, যা জগৎ পড়তে পারত' } },
    {
      type: 'para',
      text: {
        en: 'A security researcher reported a leaked Kubernetes service account token found inside an old CI build log. Investigation showed that this token belonged to the ci-builder service account. Over several years, that account had accumulated a legacy cluster role binding granting full secret reading access across all namespaces. Running the command kubectl auth can-i get secrets confirmed broad administrative read privileges. In response, the team revoked the leaked token immediately and minted isolated service accounts. The build runner received zero Kubernetes API privileges, while a separate deployment account was constrained to target namespaces. Workloads also adopted automountServiceAccountToken: false by default to prevent token mounting unless explicitly required. Regular automated audits now inspect all role bindings each month.',
        bn: 'একজন নিরাপত্তা গবেষক একটি পুরনো সিআই বিল্ড লগে কিউবারনেটিস সার্ভিস অ্যাকাউন্ট টোকেন উন্মুক্ত হওয়ার কথা জানান। তদন্তে দেখা যায় টোকেনটি ci-builder সার্ভিস অ্যাকাউন্টের ছিল। কয়েক বছর ধরে জমে থাকা ক্লাস্টার রোল বাইন্ডিংয়ের কারণে এটি প্রতিটি নেমস্পেসের সিক্রেট পড়ার অধিকার পেয়েছিল। kubectl auth can-i get secrets কমান্ড চালিয়ে এই অতিরিক্ত সুবিধার সত্যতা নিশ্চিত করা হয়। প্রতিকার হিসেবে দল অবিলম্বে ফাঁস হওয়া টোকেন বাতিল করে নতুন সার্ভিস অ্যাকাউন্ট চালু করে। বিল্ড রানারকে ক্লাস্টার এপিআই ব্যবহার থেকে বিরত রাখা হয় এবং ডিপ্লয়মেন্ট অ্যাকাউন্টকে কেবল নির্দিষ্ট নেমস্পেসে সীমাবদ্ধ করা হয়। পাশাপাশি অপ্রয়োজনীয় টোকেন মাউন্ট বন্ধ করতে automountServiceAccountToken: false ডিফল্ট করা হয়। এখন প্রতি মাসে নিয়মিত স্বয়ংক্রিয় অডিট সব রোল বাইন্ডিং পরীক্ষা করে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: armor with auditors', bn: 'বাস্তব-জগৎ: নিরীক্ষকসহ বর্ম' } },
    {
      type: 'list',
      items: [
        { en: 'OPA Gatekeeper and Kyverno enforce programmable admission policies via Rego or YAML. They enforce business rules such as allowed image registries, mandatory metadata labels, and digest verification.', bn: 'OPA Gatekeeper এবং Kyverno রেগো বা YAML দিয়ে প্রোগ্রামেবল পলিসি প্রয়োগ করে। তারা অনুমোদিত ইমেজ রেজিস্ট্রি, বাধ্যতামূলক লেবেল ও ডাইজেস্ট যাচাইয়ের মতো প্রাতিষ্ঠানিক নিয়ম কার্যকর করে।' },
        { en: 'Cilium and eBPF turn packet filtering into deep network observability. The same kernel hooks that enforce network security policies also monitor traffic patterns and anomalies across all nodes.', bn: 'Cilium ও eBPF প্যাকেট ফিল্টারিংয়ের পাশাপাশি গভীর নেটওয়ার্ক পর্যবেক্ষণ দেয়। একই কার্নেল হুক যা নেটওয়ার্ক নিরাপত্তা প্রয়োগ করে, তা ক্লাস্টারের নোডগুলোর মধ্যে ট্রাফিকের গতিবিধি ও অস্বাভাবিকতাও পর্যবেক্ষণ করে।' },
        { en: 'Sigstore and Cosign verify image signatures cryptographically at admission time. This guarantees that only containers signed by verified CI pipelines run in production clusters.', bn: 'Sigstore এবং Cosign ভর্তির সময় ক্রিপ্টোগ্রাফিকভাবে ইমেজের ডিজিটাল স্বাক্ষর যাচাই করে। এটি নিশ্চিত করে যে কেবল বিশ্বস্ত পাইপলাইনের স্বাক্ষরিত কন্টেইনারই ক্লাস্টারে চলতে পারে।' },
        { en: 'Regulated fleets (bank, government — the hub’s own audience) price the DRILL as the audit: quarterly restore evidence, auth can-i exports filed, waiver ADRs enumerated. The hardened cluster is ultimately paperwork that executes, which is exactly the sort of paperwork worth keeping.', bn: 'নিয়ন্ত্রিত-বহর (ব্যাংক, সরকারি — হাবের নিজের শ্রোতা) মূল্য দেয় মহড়াকে নিরীক্ষণরূপে: ত্রৈমাসিক পুনরুদ্ধার-প্রমাণ, দাখিলকৃত auth can-i-রপ্তানি, গণিত-ছাড়-ADR — শক্তিকৃত-ক্লাস্টার শেষ পর্যন্ত এমন কাগজপত্র যা কার্যকর হয়, হুবহু সেই ধরনের কাগজপত্র, যা রাখার মতো।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the fleet walks on its own', bn: 'পরবর্তী: বহর নিজেই হাঁটে' } },
    {
      type: 'para',
      text: {
        en: 'The eight lessons close their loop: atoms priced (1), desire converged (2), shapes named (3), names kept (4), inventories audited (5), chairs subpoenaed (6), health dispatched (7), and the estate armored (8). What remains is practice — the Kubernetes lab runs every verb of this grammar against the simulated register, and the distributed-systems hub continues the conversation one floor up: how many choirs, which consensus, priced how. Carried sentence: HARDENING IS THE ARITHMETIC OF REFUSAL.',
        bn: 'আট পাঠ তার চক্র পূর্ণ করে: পরমাণু মূল্যায়িত (১), ইচ্ছা অভিসারিত (২), আকৃতি নামকৃত (৩), নাম রক্ষিত (৪), মজুদ নিরীক্ষিত (৫), আসন তলবকৃত (৬), স্বাস্থ্য প্রেরিত (৭) আর এস্টেট বর্মপ্রাপ্ত (৮)। যা থেকে যায় তা অনুশীলন — Kubernetes-ল্যাব এই ব্যাকরণের প্রতি ক্রিয়া চালায় অনুকরিত-রওকদারির বিরুদ্ধে, আর distributed-systems-হাব সংলাপ চালিয়ে যায় এক তলা উপরে: কতটি সুরদল, কোন ঐকমত্য, কী মূল্যে। বহনযোগ্য বাক্য: শক্তিকরণ হলো প্রত্যাখ্যানের পাটিগণিত।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-armor-ex1', kind: 'mcq', topic: 'passport audit',
      question: { en: 'You inherit a cluster. Write the ONE command that reads the wall as a suspicious subject experiences it — and name the three binding shapes you then export for review.', bn: 'আপনি উত্তরাধিকার পেলেন একটি ক্লাস্টার। সেই একটি কমান্ড লিখুন, যা প্রাচীর পড়ে সন্দিহান-বিষয় যেমন উপলব্ধি করে — আর তারপর পর্যালোচনার জন্য রপ্তানিকৃত তিন বাঁধুনি-আকৃতির নাম দিন।' },
      options: [
        { en: 'kubectl auth can-i --list --as=system:serviceaccount:<ns>:<sa> (the wall read as the bearer experiences it. Audit verbs from inside the passport, not from administrator faith), then export and answer-by-owner: RoleBindings (namespace visas), ClusterRoleBindings (estate passports — every wildcard * here is a confession). And the default ServiceAccounts wearing automount=true (the papers nobody asked for, hanging on every neck)', bn: 'kubectl auth can-i --list --as=system:serviceaccount:<ns>:<sa> (বাহক যেমন উপলব্ধি করে সেমন-পঠিত প্রাচীর — ক্রিয়া নিরীক্ষিত পাসপোর্টের ভেতর থেকে, প্রশাসক-বিশ্বাস থেকে নয়), তারপর রপ্তানি আর মালিকের জবাব চান: RoleBindings (নেমস্পেস-ভিসা), ClusterRoleBindings (এস্টেট-পাসপোর্ট. এখানকার প্রতি ওয়াইল্ডকার্ড * স্বীকারোক্তি), আর automount=true পরা default-ServiceAccount (কাগজ, যা কেউ চায়নি, প্রতি গলায় ঝুলন্ত)' },
        { en: 'check the users table in the kubernetes database', bn: 'kubernetes-ডেটাবেসের users-টেবিল দেখুন' },
        { en: 'grep /etc/passwd on every node for sa entries', bn: 'প্রতি নোডে sa-এন্ট্রির জন্য /etc/passwd গ্রেপ করুন' },
        { en: 'the api server has a ui for this; turn it on', bn: 'API-সার্ভারের এজন্য UI আছে; চালু করুন' },
      ],
      answer: 0,
      hint: { en: 'Auth is arithmetic over bindings: read it from the bearer’s side, with which built-in verb?', bn: 'অনুমোদন হলো বাঁধুনির উপর পাটিগণিত: বাহকের পাশ থেকে পড়ুন, কোন অন্তর্নির্মিত-ক্রিয়া দিয়ে?' },
      explanation: { en: 'The wall is only real where the subject tests it. can-i reads verdicts; rolebindings read the accumulating paperwork; default tokens read what nobody ever asked for.', bn: 'প্রাচীর কেবল সেখানেই বাস্তব, যেখানে বিষয় তা পরীক্ষা করে। can-i রায় পড়ে; rolebindings জমে-ওঠা-কাগজপত্র পড়ে; default-টোকেন পড়ে যা কেউ কখনো চায়নি।' },
    },
    { id: 'k8s-armor-ex2', kind: 'predict', topic: 'default-deny stalls',
      question: { en: 'You apply a namespace-wide default-deny NetworkPolicy (ingress + egress) at 09:00. By 09:05 the whole district is DOWN — including health checks paged as probe-failures. Predict the ONE visa everybody forgot, and the correct sequence to never re-live this morning.', bn: 'আপনি 09:00-এ নেমস্পেস-ব্যাপী default-deny NetworkPolicy প্রয়োগ করলেন (ingress + egress)। 09:05-এ পুরো মহল্লা ডাউন — প্রোব-ব্যর্থতায়-পেজকৃত হেলথচেক-সহ। সেই একটি ভিসা ভবিষ্যদ্বাণী করুন, যা সবাই ভুলে গেল, আর এই সকাল আর না-জীবিত-করার সঠিক-ক্রম।' },
      options: [
        { en: 'DNS resolution over UDP port 53 was blocked by default-deny egress rules. Because containers could not reach CoreDNS, readiness probes failed across all services. Prevention steps: (1) add DNS allow rules before enabling egress deny, (2) test network policies in audit or dry-run mode, and (3) roll out policies incrementally per namespace.', bn: 'ইউডিপি পোর্ট ৫৩ দিয়ে ডিএনএস রিজলভ ডিফল্ট ইগ্রেস বিধিনিষেধের কারণে বন্ধ হয়ে গিয়েছিল। ফলে কন্টেইনারগুলো কোরডিএনএস-এ পৌঁছাতে না পেরে রেডিনেস প্রোব ব্যর্থ হয়। সমাধানের ধাপ: (১) ইগ্রেস ডিনাই করার আগেই ডিএনএস এলাউ রুল যোগ করা, (২) ড্রাই-রান বা অডিট মোডে পলিসি পরীক্ষা করা, এবং (৩) প্রতি নেমস্পেসে ধাপে ধাপে নিয়ম চালু করা।' },
        { en: 'ntp: clocks desynced and kerberos angrily resigned', bn: 'NTP: ঘড়ি অসমলয় হলো আর Kerberos ক্ষেপে পদত্যাগ করল' },
        { en: 'the ingress controller forgot its own address', bn: 'ইনগ্রেস-কন্ট্রোলার নিজের ঠিকানা ভুলে গেল' },
        { en: 'network policies cannot do egress — rumor proven at 09:05', bn: 'নেটওয়ার্ক-পলিসি egress পারে না — 09:05-এ গুজব প্রমাণিত' },
      ],
      answer: 0,
      hint: { en: 'Which service does EVERY atom call first, before it can even ask a question?', bn: 'কোন সার্ভিস প্রতি পরমাণু প্রথমে ডাকে, প্রশ্ন করার আগেও?' },
      explanation: { en: 'DNS is the visa everybody forgets because it never appears in diagrams of their own system. Default-deny resets reachability to zero — and zero includes the directory itself. Legislate with the exception file first.', bn: 'DNS সেই ভিসা, যা সবাই ভুলে যায়, কারণ নিজেদের-সিস্টেমের চিত্রে তা কখনো দেখা যায় না। default-deny পৌঁছানোযোগ্যতা শূন্যে নেয় — আর শূন্যের মধ্যে ডিরেক্টরি-নিজেও আছে। ব্যতিক্রম-ফাইল আগে নিয়ে আইন করুন।' },
    },
    { id: 'k8s-armor-ex3', kind: 'mcq', topic: 'restore economics',
      question: { en: 'A fleet has perfect etcd snapshots — cadenced, encrypted, replicated. An auditor still fails them. What single missing artifact flips “we have backups” from folklore into physics?', bn: 'বহরের নিখুঁত etcd-স্ন্যাপশট আছে — নির্ধারিত-বিরতিতে, এনক্রিপ্টকৃত, প্রতিলিপিকৃত। নিরীক্ষক তবু তাদের ফেল করে। কোন একক হারানো-নিদর্শন “আমাদের ব্যাকআপ আছে”-কে লোককথা থেকে পদার্থবিদ্যায় রূপ দেয়?' },
      options: [
        { en: 'the restore drill’s EVIDENCE: quarterly, timed, from printed runbooks (no dashboard, no cluster DNS — the control plane is the patient), restoring to an isolated sandbox and proving the register reads back. A snapshot nobody has restored is a bet on hope arithmetic. And the audit catches it by asking for the log of a recovery that has HAPPENED; backup existence is storage arithmetic. Recovery proof is the only artifact the auditor accepts, because it is the only one that has ever survived contact', bn: 'পুনরুদ্ধার-মহড়ার প্রমাণ: ত্রৈমাসিক, সময়বদ্ধ, মুদ্রিত-রানবুক থেকে (ড্যাশবোর্ড নেই, ক্লাস্টার-DNS নেই — কন্ট্রোল-প্লেন-ই রোগী), বিচ্ছিন্ন-স্যান্ডবক্সে পুনরুদ্ধারিত আর রওকদারি পড়া-যাওয়ার-প্রমাণিত — যে স্ন্যাপশট কেউ পুনরুদ্ধার করেনি তা আশা-পাটিগণিতে বাজি, আর নিরীক্ষক তাই ধরে হয়ে-যাওয়া পুনরুদ্ধারের লগ চেয়ে; ব্যাকআপ-অস্তিত্ব হলো সংরক্ষণ-পাটিগণিত. পুনরুদ্ধার-প্রমাণই একমাত্র নিদর্শন, যা নিরীক্ষক গ্রহণ করে, কারণ সেটিই একমাত্র সংস্পর্শ-পেরিয়ে-টিকে-আসা' },
        { en: 'a louder snapshot schedule — hourly, not daily', bn: 'আরও জোরালো স্ন্যাপশট-সময়সূচি — দৈনিক নয়, ঘণ্টাঘণ্টি' },
        { en: 'a second etcd in another cloud, eternally synced', bn: 'অন্য-ক্লাউডে দ্বিতীয় etcd, চির-সমলয়কৃত' },
        { en: 'certificates on the snapshots’ confidentiality envelope', bn: 'স্ন্যাপশটের গোপনীয়তা-খামে সার্টিফিকেট' },
      ],
        answer: 0,
      hint: { en: 'Which artifact proves recovery HAPPENED — timed, from paper, no dashboard?', bn: 'কোন নিদর্শন প্রমাণ করে পুনরুদ্ধার ঘটেছে — সময়বদ্ধ, কাগজ থেকে, ড্যাশবোর্ড ছাড়া?' },
      explanation: { en: 'Backups are arithmetic about storage; restores are arithmetic about truth. The drill is the only evidence a register survives its own register — priced quarterly, never at need.', bn: 'ব্যাকআপ হলো সংরক্ষণ-বিষয়ক পাটিগণিত; পুনরুদ্ধার সত্য-বিষয়ক। মহড়াই একমাত্র প্রমাণ রওকদারি তার নিজের রওকদারি পেরিয়ে টেকে — ত্রৈমাসিক মূল্যায়িত, প্রয়োজনের সময়ে কখনো নয়।' },
    },
  ],
  quiz: {
    id: 'k8s-armor-quiz',
    title: { en: 'The Hardening Exam', bn: 'শক্তিকরণ-পরীক্ষা' },
    questions: [
      { id: 'hc1', kind: 'mcq', topic: 'admission cheapest court',
        question: { en: 'Why is the admission border the cheapest court for the hostPath sin — compare it with production discovery in one sentence.', bn: 'কেন ভর্তি-সীমান্ত hostPath-পাপের সবচেয়ে-সস্তা-আদালত — প্রোডাকশন-আবিষ্কারের সাথে তুলনা এক বাক্যে করুন।' },
        options: [
          { en: 'At admission admission controllers reject invalid manifests before resources are created in etcd. In production, misconfigurations require deep debugging, incident response, and hazardous live rollbacks.', bn: 'ভর্তির সময় অ্যাডমিশন কন্ট্রোলার etcd-তে রিসোর্স তৈরির আগেই ভুল ম্যানিফেস্ট প্রত্যাখ্যান করে। কিন্তু প্রোডাকশনে ত্রুটি ধরা পড়লে জটিল ডিবাগিং, ইনসিডেন্ট রেসপন্স ও ঝুঁকিপূর্ণ রোলব্যাকের প্রয়োজন হয়।' },
          { en: 'admission webhooks are just faster than cron audits', bn: 'অ্যাডমিশন-ওয়েবহুক কেবল cron-নিরীক্ষণের চেয়ে দ্রুততর' },
          { en: 'hostpath is only a filesystem concern, price-negligible everywhere', bn: 'hostPath কেবল ফাইলসিস্টেম-বিষয়, সর্বত্র মূল্য-নগণ্য' },
          { en: 'the border is not a court — psa exists only in documentation', bn: 'সীমান্ত আদালত নয় — PSA শুধু ডকুমেন্টেশনে আছে' },
        ],
        answer: 0,
        hint: { en: 'A verdict at the border costs how many incidents? And in production?', bn: 'সীমান্তে রায়ের খরচ কত ঘটনা? আর প্রোডাকশনে?' },
        explanation: { en: 'Verdicts scale with the survivors. One rejected manifest beats one archaeology seminar — the customs court exists precisely at the price minimum.', bn: 'রায় বাড়ে তিকজীবীর সংখ্যায়। একটি প্রত্যাখ্যাত-ম্যানিফেস্ট হারায় একটি প্রত্নতত্ত্ব-সভায় — শুল্ক-আদালত থাকে হুবহু মূল্য-সর্বনিম্নে।' },
      },
      { id: 'hc2', kind: 'mcq', topic: 'wildcard confession',
        question: { en: 'In a bindings review you find verbs: ["*"] on resources: ["secrets"]. Finish the sentence an auditor writes next — and name the two-step remedy.', bn: 'বাঁধুনি-পর্যালোচনায় আপনি পান verbs: ["*"] resources: ["secrets"]-এ। নিরীক্ষকের পরের-বাক্যটি পূর্ণ করুন — আর দুই-ধাপের প্রতিকারের নাম দিন।' },
        options: [
          { en: '“the wall here is decoration: every subject under this binding holds the estate’s whole envelope drawer, auditable as confession-class”; remedy: (1) recite the JOBS actually performed through this binding (two weeks of audit-log arithmetic. WHICH verbs, WHICH namespaces, by whom), mint visas matching the recitations, (2) delete the wildcard binding only after can-i --list diffs prove the visas carry the same lived behavior. Passport minimalism installed as precedent, with the quarterly review made law so the next emergency writes an ADR instead of a star', bn: '“এখানে প্রাচীর সাজসজ্জা: এই বাঁধুনির অধীন প্রতি বিষয় এস্টেটের সমগ্র-খাম-ঠোকর ধরে, স্বীকারোক্তি-শ্রেণিতে-নিরীক্ষাযোগ্য”; প্রতিকার: (১) এই বাঁধুনি দিয়ে প্রকৃতপক্ষে-সম্পাদিত কাজ পাঠ করুন (দুই সপ্তাহের নিরীক্ষণ-লগ-পাটিগণিত — কোন ক্রিয়া, কোন নেমস্পেস, কার দ্বারা), পাঠের সাথে-ম্যাচকারী ভিসা ছাপান। (২) ওয়াইল্ডকার্ড-বাঁধুনি মুছুন can-i --list-পার্থক্য প্রমাণের পরেই, যে ভিসাগুলো একই জীবিত-আচরণ বহন করে — পাসপোর্ট-ন্যূনতমতা নজিররূপে স্থাপিত, ত্রৈমাসিক-পর্যালোচনা আইনকৃতসহ, যাতে পরের জরুরি তারা-চিহ্নের বদলে ADR লেখে' },
          { en: 'fine — someone clearly needed the wildcard; close the review', bn: 'ঠিক আছে — অবশ্যই কারও ওয়াইল্ডকার্ড দরকার ছিল; পর্যালোচনা শেষ করুন' },
          { en: 'replace the star with a longer star: **', bn: 'তারা বদলে লম্বা তারা দিন: **' },
          { en: 'move the binding to a namespace named audit', bn: 'বাঁধুনিটি সরান audit-নামক নেমস্পেসে' },
        ],
        answer: 0,
        hint: { en: 'Before deleting a confession, recite the jobs it actually performed — then mint…', bn: 'স্বীকারোক্তি মোছার আগে, তা প্রকৃতপক্ষে যে কাজ করেছে তা পাঠ করুন — তারপর ছাপান…' },
        explanation: { en: 'Wildcards are not laziness; they are unpriced promises about the future. Price them with lived audit arithmetic, mint the visas, then repeal — in that order, always.', bn: 'ওয়াইল্ডকার্ড অলসতা নয়; সেগুলো ভবিষ্যৎ-বিষয়ক অমূল্যকৃত-প্রতিশ্রুতি। জীবিত-নিরীক্ষণ-পাটিগণিতে মূল্য দিন, ভিসা ছাপান, তারপর প্রত্যাহার — সেই ক্রমে, সবসময়।' },
      },
      { id: 'hc3', kind: 'mcq', topic: 'default-deny dns',
        question: { en: 'Why does a default-deny egress policy without a DNS visa take the whole district DOWN — including the things that never “use DNS” knowingly?', bn: 'কেন DNS-ভিসাবিহীন default-deny egress-নীতি পুরো মহল্লা ডাউন করে — সেই বস্তুও, যা সচেতনভাবে “DNS ব্যবহার করে না”?' },
        options: [
          { en: 'every service NAME in the estate is a lookup before it is a connection (lesson four: consumers dial a promise, never a census), and the directory lives at kube-system over UDP/53. Default-deny egress seals that lane for every atom. So implicits DROWN FIRST: the app that “never speaks DNS” speaks it with every second syscall (connect by hostname, http clients, even some logging libraries). Readiness then starts failing fleet-wide because the probe handlers themselves wire through names. The reset is lawful, the silence is complete. And the missing visa is exactly one line: egress to kube-system on 53, named and owned', bn: 'এস্টেটের প্রতি সার্ভিস-নাম সংযোগের আগে একটি অনুসন্ধান (চতুর্থ পাঠ: ভোক্তা ডায়াল করে প্রতিশ্রুতি, জনগণনা কখনো নয়), আর ডিরেক্টরি থাকে kube-system-এ UDP/53-এ. Default-deny egress সেই লেন সিল করে প্রতি পরমাণুর, তাই অন্তর্নিহিত-ব্যবহারকারী আগে ডুবে: যে অ্যাপ “কখনো DNS বলে না”, তা প্রতি দ্বিতীয়-সিসকলে তাই বলে (হোস্টনামে connect, http-ক্লায়েন্ট, এমনকি কিছু লগিং-লাইব্রেরি). Readiness তারপর ব্যর্থ হতে থাকে বহর-ব্যাপী, কারণ প্রোব-হ্যান্ডলার-নিজেরাও নাম দিয়ে তারায়. পুনঃস্থাপন বৈধ, নীরবতা সম্পূর্ণ, আর হারানো-ভিসা হুবহু এক পঙ্‌ক্তি: egress kube-system-এ 53-এ, নামকৃত ও মালিকানাধীন' },
          { en: 'dns is cached forever, the outage is imaginary', bn: 'DNS চিরকাল ক্যাশিত, বিভ্রাট কাল্পনিক' },
          { en: 'default-deny only applies at lunch — the district must have mis-zoned', bn: 'default-deny প্রযোজ্য কেবল দুপুরে — মহল্লা ভুল-জোনে ছিল' },
          { en: 'pods use ip-address-by-default — dns is optional', bn: 'পড ব্যবহার করে ডিফল্টে-IP-ঠিকানা — DNS ঐচ্ছিক' },
        ],
        answer: 0,
        hint: { en: 'The name you dial is a ___ before it is a connection.', bn: 'যে নাম ডায়াল করেন তা সংযোগের আগে একটি ___।' },
        explanation: { en: 'Reliability by name means everything is a lookup first. Seal egress without a DNS visa and the estate goes deaf before it goes mute — one named line is the entire fix.', bn: 'নামে-নির্ভরযোগ্যতা মানে সবকিছু আগে একটি অনুসন্ধান। DNS-ভিসা ছাড়া egress সিল করলে এস্টেট মুখের আগে কান হারায় — হুবহু একটি নামকৃত-পঙ্‌ক্তিই পুরো প্রতিকার।' },
      },
      { id: 'hc4', kind: 'mcq', topic: 'drill as audit',
        question: { en: 'What is the precise difference between a backup and a recovery, in this hub’s arithmetic?', bn: 'এই হাবের পাটিগণিতে ব্যাকআপ আর পুনরুদ্ধারের সুনির্দিষ্ট-পার্থক্য কী?' },
        options: [
          { en: 'a backup is arithmetic about STORAGE (rows exist somewhere, cadenced, encrypted — an assertion that can be true while useless). And a recovery is arithmetic about TRUTH (the rows re-enter a living register, on a timer, from paper, and the estate answers again). The drill converts one into the other quarterly: backup existence can be audited by ls. Recovery reality can only be audited by evidence of a HAPPENED restoration, which is why regulated fleets file the drill log as their crown artifact and the snapshot itself as a mere receipt', bn: 'ব্যাকআপ হলো সংরক্ষণ-বিষয়ক পাটিগণিত (সারি আছে কোথাও, নির্ধারিত-বিরতিতে, এনক্রিপ্টকৃত — এমন দাবি, যা সত্য হতে পারে বৃথা থাকা অবস্থায়ও), আর পুনরুদ্ধার হলো সত্য-বিষয়ক পাটিগণিত (সারি জীবন্ত-রওকদারিতে পুনঃপ্রবেশ করে, সময়কলে, কাগজ থেকে, আর এস্টেট আবার উত্তর দেয়). মহড়া একটিকে অন্যটিতে রূপান্তর করে ত্রৈমাসিক: ব্যাকআপ-অস্তিত্ব ls দিয়ে নিরীক্ষণযোগ্য. পুনরুদ্ধার-বাস্তবতা নিরীক্ষণযোগ্য কেবল হয়ে-যাওয়া-পুনরুদ্ধারের প্রমাণে, এইজন্যই নিয়ন্ত্রিত-বহর মহড়া-লগ দাখিল করে মুকুট-নিদর্শনরূপে আর স্ন্যাপশট নিছক-রসিদরূপে' },
          { en: 'a backup is encrypted; a recovery is not', bn: 'ব্যাকআপ এনক্রিপ্টকৃত; পুনরুদ্ধার নয়' },
          { en: 'backups are hourly; recoveries are yearly', bn: 'ব্যাকআপ ঘণ্টাঘণ্টি; পুনরুদ্ধার বার্ষিক' },
          { en: 'they are synonyms — the distinction is consultancy marketing', bn: 'এরা প্রতিশব্দ — পার্থক্য কনসালটেন্সি-বিপণন' },
        ],
        answer: 0,
        hint: { en: 'Storage arithmetic can be true while useless. Which arithmetic cannot?', bn: 'সংরক্ষণ-পাটিগণিত সত্য হতে পারে বৃথা থাকা অবস্থায়। কোন পাটিগণিত পারে না?' },
        explanation: { en: 'A row in cold storage is a bet; a restored register is a proof. Fleets keep both ledgers, but only one of them faces the auditor.', bn: 'শীতল-সংরক্ষণের সারি একটি বাজি; পুনরুদ্ধারিত-রওকদারি একটি প্রমাণ। বহর দুই খাতাই রাখে, কিন্তু নিরীক্ষকের মুখোমুখি হয় একটিই।' },
      },
      { id: 'hc5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete: “Hardening is the arithmetic of ___.” (one word)', bn: 'পূর্ণ করুন: “শক্তিকরণ হলো ___-এর পাটিগণিত।” (এক শব্দ)' },
        answer: 'refusal',
        accept: ['প্রত্যাখ্যান'],
        hint: { en: 'LOOK less, REACH less, CARRY less — the estate that can provably…', bn: 'কম দেখো, কম পৌঁছাও, কম বহন করো — প্রমাণসহ ___ করতে পারা এস্টেট' },
        explanation: { en: 'The hub’s last word: every wall is a priced verb of REFUSAL — look less, reach less, carry less, and recover anyway.', bn: 'হাবের শেষ শব্দ: প্রতি প্রাচীর প্রত্যাখ্যানের একটি মূল্যায়িত-ক্রিয়া — কম দেখো, কম পৌঁছাও, কম বহন করো, তবুও ফিরে আসো।' },
      },
    ],
  },
};
