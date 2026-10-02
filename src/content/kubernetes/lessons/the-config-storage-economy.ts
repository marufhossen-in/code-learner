import type { Lesson } from '../../../lib/types';

export const configStorageEconomyLesson: Lesson = {
  slug: 'the-config-storage-economy',
  tech: 'kubernetes',
  title: {
    en: 'Config Storage Economy — First THE CONFIGMAP AS VERSIONED ENVIRONMENT',
    bn: 'কনফিগ ও সংরক্ষণ-অর্থনীতি: পরমাণু কী জানে আর কী ধরে রাখে'
  },
  summary: {
    en: 'Master configuration delivery and storage persistence across the Kubernetes fleet. ConfigMaps store versioned environment properties and application configurations as readable key-value pairs or mounted files. Secrets protect sensitive credentials through base64 encoding, strict RBAC authorization, and encryption at rest. PersistentVolumeClaims specify required storage capacity and access modes like ReadWriteOnce for dynamic disk provisioning. Learn why emptyDir provides temporary scratch space and how immutable ConfigMaps prevent configuration drift.',
    bn: 'Kubernetes বহরে কনফিগারেশন বিতরণ এবং স্থায়ী স্টোরেজ পরিচালনায় দক্ষতা অর্জন করুন। কনফিগম্যাপ (ConfigMap) পরিবেশ-চলক এবং কনফিগারেশন ফাইলগুলোকে সংস্করণযুক্ত ও পরিবর্তনশীল অবজেক্ট হিসেবে সংরক্ষণ করে। সিক্রেট (Secret) সংবেদনশীল তথ্যকে এনক্রিপশন এবং RBAC নীতি দিয়ে সুরক্ষিত রাখে। PersistentVolumeClaim (PVC) স্টোরেজ ক্ষমতা ও অ্যাক্সেস মোড নির্ধারণ করে ক্লাউড থেকে সরাসরি ডিস্ক বরাদ্দ নেয়। emptyDir কীভাবে অস্থায়ী স্ক্র্যাচ স্থান দেয় এবং অপরিবর্তনীয় কনফিগম্যাপ কীভাবে কনফিগ বিচ্যুতি ঠেকায় তা জানুন।',
  },
  minutes: 23,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT knowledge and soil are', bn: 'জ্ঞান আর মাটি কী' } },
    {
      type: 'para',
      text: {
        en: 'Every pod requires two distinct resource categories during its execution: operational configuration and persistent storage. Kubernetes provides ConfigMaps for non-sensitive settings and Secrets for encrypted credentials like database passwords. For file storage, pods can rent temporary scratch directories using emptyDir volumes. When durable data is required across pod restarts, workloads declare PersistentVolumeClaims to request dedicated cloud disks automatically.',
        bn: 'প্রতিটি পডের স্বাভাবিক কাজের জন্য দুটি মৌলিক সংস্থান প্রয়োজন: অপারেটিং কনফিগারেশন এবং স্থায়ী সংরক্ষণ ব্যবস্থা। Kubernetes সাধারণ সেটিংসের জন্য ConfigMap এবং ডেটাবেস পাসওয়ার্ডের মতো সংবেদনশীল তথ্যের জন্য Secret সরবরাহ করে। ফাইল সংরক্ষণের ক্ষেত্রে পডগুলো emptyDir ভলিউম ব্যবহার করে অস্থায়ী স্ক্র্যাচ স্পেস তৈরি করতে পারে। আর পড পুনর্সূচনা হলেও ডেটা অক্ষত রাখতে ওয়ার্কলোডগুলো PersistentVolumeClaim (PVC) দিয়ে ক্লাউড ডিস্ক বরাদ্দ নেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'configmap generation', def: { en: 'configuration as register rows: every change is diffable, rollable, reviewable — governed terrain', bn: 'খাতাসারিরূপে কনফিগারেশন: প্রতি পরিবর্তন পার্থক্যযোগ্য, গড়ানোযোগ্য, পর্যালোচনীয় — শাসিত-ভূখণ্ড' } },
        { term: 'immutable configmap', def: { en: 'mutation forbidden; wrong values arrive only via new generations — drift as a type error', bn: 'মিউটেশন নিষিদ্ধ; ভুল-মান আসে কেবল নতুন প্রজন্মে — টাইপ-ত্রুটিরূপে বিচ্যুতি' } },
        { term: 'base64 is an envelope', def: { en: 'encoding, never encryption; the locks are RBAC verbs and etcd at-rest encryption', bn: 'এনকোডিং, এনক্রিপশন কখনো নয়; তালা হলো RBAC-ক্রিয়া আর etcd-এর স্থির-এনক্রিপশন' } },
        { term: 'emptyDir', def: { en: 'scratch rent for the pod’s lifetime: dies with the atom, outlives its containers’ restarts', bn: 'পডের-আয়ুর স্ক্র্যাচ-ভাড়া: পরমাণুর সাথে মরে, তার কন্টেইনার-পুনঃসূচনা পেরিয়ে টিকে' } },
        { term: 'pvc', def: { en: 'the claim that speaks the budget (size, access mode, class); the provisioner buys the disk', bn: 'বাজেট-বাদী দাবি (আকার, প্রবেশ-পদ্ধতি, শ্রেণি); ডিস্ক কেনে বিধাতা' } },
        { term: 'subPath', def: { en: 'one key onto one file path — precise, but pinned (updates stop flowing to the mount)', bn: 'এক ফাইল-পথে এক কী — নির্ভুল, কিন্তু পিনকৃত (হালনাগাদ মাউন্টে যাওয়া থামে)' } },
        { term: 'projected volume', def: { en: 'several ledger rows (config, secret, service-account token) fused into one directory tree', bn: 'এক ডিরেক্টরি-বৃক্ষে মিশ্রিত বহু-খাতাসারি (কনফিগ, সিক্রেট, সার্ভিস-অ্যাকাউন্ট-টোকেন)' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY inventory is debt', bn: 'কেন মজুদ-ই ঋণ' } },
    {
      type: 'para',
      text: {
        en: 'Every inventory an atom carries is a debt with interest terms, and the register exists to make the terms legible. WHY-ONE, CONFIG AS GOVERNANCE: the moment configuration leaves the compose-style .env folklore and enters ledger rows, it acquires generational arithmetic — who changed what, reviewed by whom, rollable back in one verb. The alternative is having missing keys discovered during midnight outages. Declaring immutable configmaps prevents accidental drift by rejecting direct edits at the API level. WHY-TWO, SECRECY AS SURFACE MINIMIZATION: base64 wraps bytes, RBAC wraps verbs, at-rest encryption wraps the vault — three wrappers because there are three distinct thieves (shoulder-surfers reading YAML, identities with wandering privileges, disks in dumpsters). Mount-not-env is the fourth discipline: environment is inherited by every child and dumped by every crash reporter, files are read by the citizen alone with modes. The compose env seam priced honestly, one floor up. WHY-THREE, STORAGE AS IDENTITY’S GROUND: the statefulset paid for citizen soil. And this lesson shows the coin: ReadWriteOnce is EXCLUSIVITY priced (one chair attaches: the database’s quorum needs a single writer’s memory), ReadWriteMany is SHARING priced (a filesystem, rare and expensive). The honest taxonomy is what prevents the hostPath mortgage — the atom wandered, the soil stayed. And the quorum’s disk arrived empty on a new chair. WHY-FOUR, ROTATION AS AN APPLICATION DUTY: mounted updates flow pod-lifetime-fast-but-not-atomic (kubelet’s cache TTL, symlink swaps); env injections do not flow at all — the register can only DELIVER knowledge, never FORCE the re-reading. A platform that pretends otherwise (the debug file’s story) builds dashboards of drift where green means “delivered” and nobody asked “consumed?”.',
        bn: 'পরমাণুর বহনকৃত প্রতি মজুদ সুদের-শর্তসহ ঋণ, আর শর্ত সুপাঠ্য করাই রওকদারির অস্তিত্ব। একনম্বর, শাসনরূপে কনফিগ: কনফিগারেশন compose-ধরনের .env-লোককথা ছেড়ে খাতাসারিতে প্রবেশমাত্র সে পায় প্রজন্মীয়-পাটিগণিত — কে কী বদলাল, কার পর্যালোচনায়, একটি ক্রিয়ায় গড়িয়ে-ফেরানোযোগ্য. বিকল্প হলো মধ্যরাতের বিভ্রাটে কনফিগের অমিল আবিষ্কার করা। অপরিবর্তনীয় (immutable) কনফিগম্যাপ ব্যবহার করলে API স্তরে যেকোনো পরিবর্তন সরাসরি প্রত্যাখ্যাত হয়, যা কনফিগ বিচ্যুতি পুরোপুরি প্রতিরোধ করে। দ্বিতীয়, পৃষ্ঠ-ন্যূনতমকরণরূপে গোপনীয়তা: base64 মোড়ে বাইট, RBAC মোড়ে ক্রিয়া, স্থির-এনক্রিপশন মোড়ে তিজোরি — তিন মোড়ক, কারণ তিন স্বতন্ত্র চোর (YAML-পড়া কাঁধপিপিাসু, বিচরণকারী-বিশেষাধিকারের পরিচয়, ডাস্টবিনের ডিস্ক). মাউন্ট-করো-এনভি-নয় চতুর্থ শৃঙ্খলা: পরিবেশ উত্তরাধিকার পায় প্রতি সন্তানে আর ডাম্প হয় প্রতি ক্র্যাশ-রিপোর্টারে, ফাইল পড়ে মনোনীত-নাগরিক একা, মোডসহ. Compose-এর env-সেলাই সৎভাবে-মূল্যায়িত, এক তলা উপরে। তৃতীয়, পরিচয়ের-ভূমিরূপে সংরক্ষণ: স্টেটফুলসেট মূল্য দিয়েছে নাগরিক-মাটি, আর এই পাঠ দেখায় মুদ্রাটি: ReadWriteOnce হলো মূল্যায়িত-একচ্ছত্রতা (এক আসনে সংযুক্ত হয়: ডেটাবেসের গরিষ্ঠতার দরকার একক-লেখকের স্মৃতি), ReadWriteMany মূল্যায়িত-ভাগাভাগি (একটি ফাইলসিস্টেম, বিরল ও মূল্যবান); সৎ-শ্রেণিবিন্যাস-ই hostPath-বন্ধক প্রতিরোধ করে। পরমাণু ঘুরে বেড়াল, মাটি রয়ে গেল, আর গরিষ্ঠতার ডিস্ক পৌঁছাল খালি হয়ে নতুন আসনে। চতুর্থ, অ্যাপ্লিকেশন-দায়রূপে ঘূর্ণন: মাউন্টকৃত-হালনাগাদ বইয়ে যায় পড-আয়ু-বেগে-কিন্তু-অপারমাণবিক (kubelet-এর ক্যাশ-TTL, সিমলিংক-বিনিময়); env-ইনজেকশন বয়ই না — রওকদারি কেবল জ্ঞান পৌঁছে দিতে পারে। পুনঃপাঠ জোর করতে কখনো নয়; যে প্ল্যাটফর্ম অন্যথা ভান করে (ডিবাগ-ফাইলের কাহিনি), সে বানায় বিচ্যুতি-ড্যাশবোর্ড, যেখানে সবুজ মানে “পৌঁছে দেওয়া হয়েছে” আর কেউ জিজ্ঞেস করেনি “গ্রহণ হয়েছে?”',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to run both economies', bn: 'কীভাবে দুই অর্থনীতি চালাবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Version knowledge like code: kubectl create configmap app-config --from-file=nginx.conf (files as ROWS), envFrom for the flat scalars, key-select env for the noisy ones — and pin immutable: true once a generation stabilizes. Git diff is the audit trail, undo is kubectl rollout undo one abstraction up (lesson three paid for it).', bn: 'কোডের মতো জ্ঞান সংস্করণিত করুন: kubectl create configmap app-config --from-file=nginx.conf (সারিরূপে ফাইল), চ্যাপ্টা-স্কেলারে envFrom, কোলাহলপূর্ণগুলোয় কী-নির্বাচিত env — আর প্রজন্ম স্থিত হলে immutable: true পিন করুন. Git-পার্থক্য-ই নিরীক্ষণ-পথ, undo হলো এক বিমূর্ততা-উপরে kubectl rollout undo (তৃতীয় পাঠ তা কিনে দিয়েছে)।' },
        { en: 'Mount secrets as files using volumes with defaultMode 0400 instead of environment variables. Mounted files remain hidden from crash dumps and child process listings. Applications must watch the mount path or use checksum annotations to reload rotated secrets cleanly.', bn: 'পরিবেশ-চলকের বদলে defaultMode 0400 সহ ভলিউম হিসেবে সিক্রেট মাউন্ট করুন। মাউন্টকৃত ফাইল ক্র্যাশ ডাম্প বা চাইল্ড প্রসেসে ফাঁস হয় না। অ্যাপ্লিকেশনগুলোকে মাউন্ট করা ফাইল পর্যবেক্ষণ করতে হবে বা রিলোড নিশ্চিত করতে চেকসাম টীকা ব্যবহার করতে হবে।' },
        { en: 'Speak budgets through claims: every PVC states 10Gi / ReadWriteOnce / standard-ssd (never hand-inventoried PVs) — and RESPECT the access mode’s contract: RWO is one-writer arithmetic (databases, quorum soil); RWX is a shared filesystem purchased deliberately and rarely.', bn: 'দাবির মুখে বাজেট বলুন: প্রতি PVC ঘোষণা করে 10Gi / ReadWriteOnce / standard-ssd (হাতে-তালিকাভুক্ত PV কখনো নয়) — আর প্রবেশ-পদ্ধতির চুক্তি মানুন: RWO হলো একক-লেখক-পাটিগণিত (ডেটাবেস, গরিষ্ঠতার মাটি); RWX সচেতনভাবে ও কদাচিৎ-কেনা ভাগকৃত-ফাইলসিস্টেম।' },
        { en: 'Rent scratch openly with emptyDir: caches, handshake dirs, /tmp — sizes pinned with sizeLimit (a runaway cache becomes a node eviction otherwise), and the mental model recited at review: dies with the atom; survives container restarts.', bn: 'emptyDir-তে খোলাখুলি স্ক্র্যাচ ভাড়া নিন: ক্যাশ, হস্তক্ষেপ-ডিরেক্টরি, /tmp — sizeLimit-তে আকার পিনকৃত (অনিয়ন্ত্রিত-ক্যাশ নইলে নোড-উচ্ছেদে রূপ নেয়), আর পর্যালোচনায় মানসিক-মডেল মুখস্থ: পরমাণুর সাথে মরে; কন্টেইনার-পুনঃসূচনা পেরিয়ে টিকে।' },
        { en: 'Confine hostPath mounts strictly to privileged system daemons like node log shippers or CNI plugins. Regular workloads must avoid host storage because moving a pod to a new node leaves the data behind. Cluster policies should enforce this rule using PodSecurityStandards.', bn: 'hostPath কেবল নোড-লগ সংগ্রাহক বা CNI প্লাগিনের মতো বিশেষ সুবিধাপ্রাপ্ত ডিমনসেটেই সীমাবদ্ধ রাখুন। সাধারণ অ্যাপ্লিকেশনের জন্য হোস্ট স্টোরেজ ব্যবহার করা যাবে না, কারণ পড অন্য নোডে সরে গেলে আগের ডেটা ফেলে যায়। ক্লাস্টারে PodSecurityStandards নীতি দিয়ে এটি নিশ্চিত করুন।' },
        { en: 'Price the rotation velocities: env-injected config travels on cohort restart (roll to apply); mounted files travel pod-lifetime with kubelet’s cache tax (~minute, NOT atomic due to subPath pinning) — dashboards must distinguish DELIVERED from CONSUMED. And drift alarms must name the stale cohort.', bn: 'ঘূর্ণন-বেগ দুটোই মূল্য দিন: env-ইনজেক্টকৃত-কনফিগ যাত্রা করে cohort-পুনঃসূচনায় (প্রয়োগে গড়ান); মাউন্টকৃত-ফাইল যাত্রা করে পড-আয়ুতে kubelet-এর ক্যাশ-করসহ (~মিনিট; subPath-পিনিংয়ে অপারমাণবিক) — ড্যাশবোর্ড পৃথক করবে পৌঁছে-দেওয়া বনাম গৃহীত, আর বিচ্যুতি-অ্যালার্ম নাম বলবে বাসি-দলের।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: mounts in the lab', bn: 'দৃশায়ন: ল্যাবে মাউন্ট' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'In the lab, exec into a pod (kubectl exec … -- ls /etc/config) and read the mounted generation line; then kubectl edit the ConfigMap and watch the pod-lifetime tax: the file changes WITHOUT a restart. And nothing in the register tells you the app re-read it.',
        bn: 'ল্যাবে পডে exec করুন (kubectl exec … -- ls /etc/config) আর মাউন্টকৃত-প্রজন্মের পঙ্‌ক্তি পড়ুন; তারপর ConfigMap-এ kubectl edit করে পড-আয়ু-কর দেখুন: ফাইল বদলায় পুনঃসূচনা ছাড়াই, আর অ্যাপ পুনঃপড়ল কি না রওকদারির কোনো কিছুই তা বলে না।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: how knowledge and soil are delivered', bn: 'অভ্যন্তরীণ: জ্ঞান ও মাটি পৌঁছে দেওয়া হয় কীভাবে' } },
    {
      type: 'para',
      text: {
        en: 'Five delivery mechanisms, each with its tax. ONE, ENV INJECTION AT BIRTH: envFrom and valueFrom are resolved by the kubelet AT CONTAINER CREATION — baked into the atom the way compose bakes env at up; the register ships a new generation. But EXISTING atoms hold the letters they were born with. Which is why env-based rotation IS lesson three’s roll (the budget’s second job). TWO, THE KUBELET’S WATCH CACHE: mounted volumes are delivered by the kubelet watching the API with a cache TTL (historically up to ~1 minute, now the TTL tracks the watch). Updates arrive as a SYMLINK SWAP (..data directories atomically re-pointed: readers see old or new, never torn) — fast-but-not-atomic ACROSS KEYS. And SUBPATH is the trap: a subPath mount pins the OLD inode directly (no indirection), so updates stop flowing entirely. SubPath is precision bought with rotation, priced at review or never. THREE, THE PROVISIONING CHOREOGRAPHY: a PVC triggers the CSI storage driver to provision a disk through the cloud API. The attach controller binds the volume to the target node, and the kubelet formats and mounts the block device into the pod directory. Capacity math lives on the StorageClass (IOPS, zones, reclaimPolicy: Delete vs Retain. The difference between a reincarnating citizen and a careful archive). FOUR, THE THREE WRAPPERS, MECHANICALLY: base64 = YAML-safe bytes (any kubectl get -o yaml spits the envelope); RBAC = the verb wall (list secrets is a passport NOTHING but operators should hold). At-rest encryption = etcd’s provider config transforms rows with cluster-held keys before the disk sees them — a stolen snapshot is ciphertext. THE FIFTH IS A SEAM: service-account tokens rotated hourly land via projected volumes automatically (BoundServiceAccountTokenVolume), so identity files refresh under the app’s feet — and the app MUST reread (clients caching tokens are the rotation law’s first offenders).',
        bn: 'পাঁচ বিতরণ-প্রক্রিয়াটত্ত্ব, প্রতিটির নিজস্ব-কর। এক, জন্মকালীন ENV-ইনজেকশন: envFrom ও valueFrom kubelet নিরূপণ করে কন্টেইনার-সৃষ্টিতে — পরমাণুতে এভাবে বেক হয়। যেভাবে compose up-এ env বেক করে; রওকদারি নতুন প্রজন্ম পাঠায়, কিন্তু বিদ্যমান-পরমাণু ধরে রাখে জন্মের চিঠি — এইজন্যই env-ভিত্তিক ঘূর্ণন হলো তৃতীয় পাঠের গড়ানো (বাজেটের দ্বিতীয়-চাকরি)। দুই, KUBELET-এর ওয়াচ-ক্যাশ: মাউন্টকৃত-ভলিউম বিতরণ করে kubelet, API পর্যবেক্ষণে ক্যাশ-TTL-সহ (ঐতিহাসিকভাবে ~১ মিনিট পর্যন্ত, এখন TTL ওয়াচের পিছু নেয়) — হালনাগাদ আসে সিমলিংক-বিনিময়রূপে (..data-ডিরেক্টরি পারমাণবিকভাবে পুননির্দেশিত: পাঠক দেখে পুরনো নয়তো নতুন, ছেঁড়া কখনো নয়). কী-জুড়ে দ্রুত-কিন্তু-অপারমাণবিক, আর SUBPATH ফাঁদ: subPath-মাউন্ট সরাসরি পুরনো-inode পিন করে (মধ্যবর্তিতা নেই), তাই হালনাগাদ সম্পূর্ণ বয়ে-যাওয়া থামায়. SubPath হলো ঘূর্ণন-দিয়ে-কেনা নির্ভুলতা, পর্যালোচনায় মূল্যায়িত নইলে কখনো নয়। তিন, বিধান-নৃত্যক্রম: একটি PVC ক্লাউড API-এর মাধ্যমে CSI স্টোরেজ ড্রাইভারকে ডিস্ক বরাদ্দ করতে নির্দেশ দেয়। অ্যাটাচ কন্ট্রোলার ভলিউমটিকে নির্দিষ্ট নোডের সাথে যুক্ত করে এবং কিউবলেট ডিভাইসটিকে পডের মাউন্ট ডিরেক্টরিতে সংযুক্ত করে। সক্ষমতা-পাটিগণিত থাকে StorageClass-এ (IOPS, জোন, reclaimPolicy: Delete বনাম Retain — পুনর্জন্মগ্রহণকারী-নাগরিক বনাম যত্নশীল-আর্কাইভের পার্থক্য)। চার, তিন মোড়ক, যান্ত্রিকভাবে: base64 = YAML-নিরাপদ-বাইট (যে-কোনো kubectl get -o yaml খাম ফেরত দেয়); RBAC = ক্রিয়া-প্রাচীর (list secrets এমন পাসপোর্ট, যা অপারেটর ছাড়া কারও থাকা উচিত নয়). স্থির-এনক্রিপশন = etcd-এর প্রোভাইডার-কনফিগ সারি রূপান্তরিত করে ক্লাস্টারধারী-কী দিয়ে, ডিস্ক দেখার আগে — চুরি-যাওয়া স্ন্যাপশট হলো সাইফারটেক্সট। পঞ্চমটি একটি সেলাই: ঘণ্টায়-ঘূর্ণিত সার্ভিস-অ্যাকাউন্ট-টোকেন স্বয়ংক্রিয়ভাবে পৌঁছে projected-ভলিউমে (BoundServiceAccountTokenVolume), তাই অ্যাপের পায়ের নিচে পরিচয়-ফাইল সতেজ হয় — আর অ্যাপকে পুনঃপড়তেই হয় (টোকেন ক্যাশকারী ক্লায়েন্ট ঘূর্ণন-আইনের প্রথম অপরাধী)।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'economy.yaml',
      caption: { en: 'Two inventories, one pod: knowledge mounted with generations, soil claimed with budgets.', bn: 'দুই মজুদ, একটি পড: প্রজন্মসহ মাউন্টকৃত জ্ঞান, বাজেটসহ দাবিকৃত মাটি।' },
      code: `apiVersion: v1
kind: ConfigMap                # versioned environment: diffable, rollable, reviewable
metadata: { name: app-config }
immutable: false               # pin true once a generation stabilizes — drift becomes type-error
data:
  LOG_LEVEL: info
  nginx.conf: |
    worker_processes auto;
    gzip on;
---
apiVersion: v1
kind: Secret                   # a promise in three wrappers: base64, RBAC, at-rest encryption
metadata: { name: db-credentials }
type: Opaque
stringData:                    # written plain, stored as envelope — NEVER a lock by itself
  password: correct-horse-battery-staple
---
apiVersion: v1
kind: PersistentVolumeClaim    # soil as citizenship: the claim speaks the budget
metadata: { name: db-data }
spec:
  accessModes: ["ReadWriteOnce"]              # exclusivity priced: one chair attaches
  storageClassName: standard-ssd
  resources: { requests: { storage: 10Gi } }
---
apiVersion: v1
kind: Pod
metadata: { name: ledger-api-demo }
spec:
  containers:
    - name: app
      image: myapp:1.3
      envFrom:
        - configMapRef: { name: app-config }  # resolved AT BIRTH — rotation = roll (lesson 3)
      volumeMounts:
        - { name: config-files, mountPath: /etc/config }        # pod-lifetime updates
        - { name: secrets, mountPath: /run/secrets }            # mount, NEVER env: files with modes
        - { name: scratch, mountPath: /var/spool }              # rent, openly posted
        - { name: data, mountPath: /var/lib/app }               # claimed soil
  volumes:
    - name: config-files
      configMap:
        name: app-config
        items: [{ key: nginx.conf, path: nginx.conf }]          # subPath avoided on purpose:
    - name: secrets                                             # rotation keeps flowing
      secret: { secretName: db-credentials, defaultMode: 0400 }
    - name: scratch
      emptyDir: { sizeLimit: 512Mi }          # the gamble, with its ceiling priced
    - name: data
      persistentVolumeClaim: { claimName: db-data }`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what honest inventory bought', bn: 'ফলাফল: সৎ-মজুদ যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'economy move', bn: 'অর্থনীতি-ভঙ্‌গি' }, { en: 'the contract signed', bn: 'সইকৃত-চুক্তি' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['configmaps as generations', { en: 'every config change diffable and undo-able', bn: 'প্রতি কনফিগ-পরিবর্তন পার্থক্যযোগ্য ও গড়িয়ে-ফেরানোযোগ্য' }, { en: 'staging/prod seams surfaced in review, not at 2 a.m.', bn: 'স্টেজিং/প্রোড-সেলাই ভেসে ওঠে পর্যালোচনায়, রাত ২টায় নয়' }, 'the staging-only key that shipped the plague'],
        ['immutable flagged', { en: 'drift rejected at the API: type error', bn: 'বিচ্যুতি API-তেই প্রত্যাখ্যাত: টাইপ-ত্রুটি' }, { en: 'wrong values arrive only as new generations, audited', bn: 'ভুল-মান আসে কেবল নতুন প্রজন্মে, নিরীক্ষিত' }, 'the kubectl edit that fixed staging and forgot prod'],
        ['secrets mounted, never env', { en: 'files read by the citizen, invisible to dumps', bn: 'ফাইল পাঠ্যকৃত নাগরিকের, অদৃশ্য ডাম্পে' }, { en: 'RBAC verbs enumerate every identity with reading rights', bn: 'RBAC-ক্রিয়া গণনা করে পাঠাধিকারধর প্রতিটি পরিচয়' }, 'the crash reporter that mailed the password home'],
        ['pvc budgets dynamic', { en: 'soil arrives by arithmetic, not inventory prayer', bn: 'মাটি আসে পাটিগণিতে, মজুদ-প্রার্থনায় নয়' }, { en: 'reclaimPolicy named: citizens vs archives, designed', bn: 'reclaimPolicy নামকৃত: নাগরিক বনাম আর্কাইভ, নকশাকৃত' }, 'the pv spreadsheet that drifted into mythology'],
        ['emptyDir ceilings pinned', { en: 'rent posted openly: limit or eviction', bn: 'ভাড়া খোলাখুলি জমা: সীমা নইলে উচ্ছেদ' }, { en: 'runaway caches die with their atom, billing their owner', bn: 'অনিয়ন্ত্রিত-ক্যাশ মরে তার পরমাণুর সাথে, মালিকের নামে চালান' }, 'the node eviction traced back to a debug spool'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the secret that rotated into silence', bn: 'ডিবাগ-ফাইল: যে সিক্রেট ঘুরে গেল নীরবতায়' } },
    {
      type: 'para',
      text: {
        en: 'Every 90 days, like a calendar page turning: ~40 minutes after cert-manager rotated the API’s certificate Secret, the edge lit up with TLS alerts — handshake failures, old-cert warnings in client logs, the works. The folklore rotation: “cert-manager is broken”, “roll the ingress”, “check DNS”. The mechanism, priced: the certificate was MOUNTED (correctly — files, not env), and the kubelet did its half: the symlink swap landed within the cache TTL; the new file sat on disk, gleaming. But the application had read /run/secrets/tls.crt ONCE, at boot, into a TLS listener struct; nothing watched the file (no SIGHUP handler, no fsnotify). So the atom kept serving the OLD certificate for up to 90 days of uptime. And TLS failures only ignited when the old cert’s own expiry finally arrived: the register’s DELIVERED dashboard had been green the whole quarter (the watch cache reported the swap), and nobody anywhere had charted CONSUMED. The why-this-is-deep: the rotation law is written in TWO velocities (boot-baked env; pod-lifetime mounts), and this workload had silently assumed a third (platform-forced reread) that does not exist. The verbs, in order: describe on the pod proved the file mount was current (kubelet: watch cache reported swap at 02:14). A quick stat on the mounted file vs the process’s served cert fingerprint fingerprinted the truth (delivered ≠ consumed); the fix carried three modules. 1) the app grew an fsnotify watch + listener reload, ten lines of actual duty, (2) a belt: a checksum-of-secret annotation wired to a Reloader-style controller. So rotation triggers a budgeted ROLL when the watch fails, (3) consumption observability: the served cert’s notAfter became a metric with a page at 14 days, finally charting CONSUMED the way lesson two charts STATUS. Postmortem sentence: THE REGISTER DELIVERS; THE CITIZEN CONSUMES; A DASHBOARD THAT ONLY CHARTS THE FIRST IS A LOVE LETTER TO THE SECOND.',
        bn: 'প্রতি ৯০ দিনে, ক্যালেন্ডার-পাতা ওল্টানোর মতো: API-র সার্টিফিকেট-সিক্রেট cert-manager-ঘূর্ণনের ~৪০ মিনিট পর সীমান্ত জ্বলে উঠত TLS-সতর্কতায় — হ্যান্ডশেক-ব্যর্থতা, ক্লায়েন্ট-লগে পুরনো-সার্ট-সতর্কতা, সব ব্যাপার। লোককথার ঘূর্ণন: “cert-manager ভাঙা”, “ইনগ্রেস গড়াও”, “DNS দেখো”। প্রক্রিয়াটত্ত্ব, মূল্যায়িত: সার্টিফিকেট মাউন্টকৃত ছিল (যথাযথভাবে — ফাইল, env নয়), আর kubelet তার অর্ধেক করেছিল: সিমলিংক-বিনিময় ঘটল ক্যাশ-TTL-এর ভেতরে; নতুন ফাইল বসে রইল ডিস্কে, ঝকঝকে। কিন্তু অ্যাপ্লিকেশন /run/secrets/tls.crt পড়েছিল একবার, বুটে, TLS-লিসেনার-স্ট্রাক্টে; ফাইলটিকে কেউ পর্যবেক্ষণ করত না (SIGHUP-হ্যান্ডলার নেই, fsnotify নেই), তাই পরমাণু পরিবেশন চালিয়ে গেল পুরনো-সার্টিফিকেট, আপটাইমের ৯০ দিন পর্যন্ত. আর TLS-ব্যর্থতা জ্বলে উঠল তখনই, যখন পুরনো-সার্টের নিজের মেয়াদ অবশেষে উপনীত হলো: রওকদারির পৌঁছে-দেওয়া-ড্যাশবোর্ড পুরো ত্রৈমাসিক সবুজ ছিল (ওয়াচ-ক্যাশ বিনিময় রিপোর্ট করেছিল), আর কেউ কোথাও গৃহীত চার্ট করেনি। কেন-এত-গভীর: ঘূর্ণন-আইন লেখা দুই বেগে (বুট-বেকড env; পড-আয়ু মাউন্ট), আর এই ওয়ার্কলোড নীরবে তৃতীয়টি ধরে নিয়েছিল (প্ল্যাটফর্ম-জোরকৃত-পুনঃপাঠ), যার অস্তিত্ব নেই। ক্রিয়াগুলো, ক্রমানুসারে: পডের describe প্রমাণ করল ফাইল-মাউন্ট বর্তমান (kubelet: ওয়াচ-ক্যাশ 02:14-এ বিনিময় রিপোর্ট করেছে); মাউন্টকৃত-ফাইলের দ্রুত stat বনাম প্রক্রিয়ার পরিবেশিত-সার্টের ছাপ — সত্যের আঙুলের ছাপ নিল (পৌঁছে-দেওয়া ≠ গৃহীত); প্রতিকার বহন করল তিন অংশ. ১) অ্যাপ পেল fsnotify-ওয়াচ + লিসেনার-রিলোড, প্রকৃত-দায়ের দশ পঙ্‌ক্তি, (২) বেল্ট: সিক্রেট-চেকসাম-টীকা Reloader-ধরনের কন্ট্রোলরে তারানো, যাতে ওয়াচ ব্যর্থ হলে ঘূর্ণন ট্রিগার করে বাজেটকৃত-গড়ানো, (৩) গ্রহণ-পর্যবেক্ষণযোগ্যতা: পরিবেশিত-সার্টের notAfter হলো মেট্রিক, ১৪ দিনে পেজসহ. গৃহীত অবশেষে চার্টকৃত, যেভাবে দ্বিতীয় পাঠ STATUS চার্ট করে। পোস্টমর্টেম-বাক্য: রওকদারি পৌঁছে দেয়; নাগরিক গ্রহণ করে; যে ড্যাশবোর্ড কেবল প্রথমটি চার্ট করে, তা দ্বিতীয়টির উদ্দেশে প্রেমপত্র।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: economies with custodians', bn: 'বাস্তব-জগৎ: তত্ত্বাবধায়কসহ অর্থনীতি' } },
    {
      type: 'list',
      items: [
        { en: 'External Secrets Operator and Vault CSI keep references in Kubernetes while the vault stores actual credentials. Secret rotation happens out of band, leaving credential consumption to the application.', bn: 'External Secrets Operator এবং Vault CSI মূল মানগুলো সুরক্ষিত ভল্টে রেখে ক্লাস্টারে কেবল রেফারেন্স বজায় রাখে। সিক্রেট ঘূর্ণন বাইরের সিস্টেমে স্বাধীনভাবে পরিচালিত হয়, ফলে নতুন মান গ্রহণ করা অ্যাপ্লিকেশনের দায়িত্ব হিসেবে থাকে।' },
        { en: 'Sealed Secrets / SOPS make secrets GitOPS-able: encrypted rows in Git, decrypted only in-cluster — the audit trail becomes the YAML you can’t read, which is precisely the point.', bn: 'Sealed Secrets / SOPS সিক্রেটকে GitOps-যোগ্য করে: Git-এ এনক্রিপ্টকৃত-সারি, কেবল ক্লাস্টারে-ডিক্রিপ্টকৃত — নিরীক্ষণ-পথ হয় ঐ YAML, যা আপনি পড়তে পারবেন না, যা হুবহু অভিপ্রায়।' },
        { en: 'Helm/Kustomize overlays are the configmap economy at pack scale: values files as GENERATIONS of environment, with prod/staging overlays making lesson three’s 2 a.m. key structurally unshippable.', bn: 'Helm/Kustomize-ওভারলে হলো প্যাক-পরিসরে কনফিগম্যাপ-অর্থনীতি: পরিবেশের প্রজন্মরূপে values-ফাইল, প্রোড/স্টেজিং-ওভারলে তৃতীয় পাঠের রাত-২টার-কীকে কাঠামোগতভাবে অপাঠানীয় করে।' },
        { en: 'Ephemeral-first fleets price emptyDir as a feature: read-only root filesystem + emptyDir /tmp + nothing else — every stray write becomes a REVIEW conversation, which is exactly what hardened clusters bill for.', bn: 'ক্ষণস্থায়ী-প্রথম-বহর emptyDir-কে মূল্য দেয় বৈশিষ্ট্যরূপে: কেবল-পাঠ্য-মূল-ফাইলসিস্টেম + emptyDir /tmp + আর কিছু নয় — প্রতি বিচ্যুত-লেখা হয়ে ওঠে পর্যালোচনা-সংলাপ, শক্তিকৃত-ক্লাস্টার ঠিক যার চালান দেয়।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: who sits where, and why it was provable', bn: 'পরবর্তী: কে কোথায় বসে, আর কেন তা প্রমাণযোগ্য ছিল' } },
    {
      type: 'para',
      text: {
        en: 'The atoms are named, reachable, knowledgeable, soiled. Next lesson: the arithmetic that decides WHERE each atom sits — requests/schedulable/fit as a procurement puzzle, taints/tolerations as taxation, affinity/anti-affinity as magnet grammar, and the OOM that bills the wrong victim. Carried sentence: KNOWLEDGE IS MOUNTED, SOIL IS CLAIMED.',
        bn: 'পরমাণু এখন নামকৃত, পৌঁছানীয়, জ্ঞানবান, মাটিবান। পরবর্তী পাঠ: কোন আসনে কোন পরমাণু বসবে তার পাটিগণিত — সংগ্রহ-ধাঁধারূপে requests/নির্ধারণযোগ্য/fit, করারোপরূপে taints/tolerations, চুম্বক-ব্যাকরণরূপে affinity/anti-affinity, আর সেই OOM, যা ভুল-শিকারের নামে চালান দেয়। বহনযোগ্য বাক্য: জ্ঞান মাউন্টকৃত, মাটি দাবিকৃত।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-economy-ex1', kind: 'mcq', topic: 'mount over env',
      question: { en: 'Two engineers, one Secret. One injects DB_PASSWORD via env; one mounts it at /run/secrets with 0400. Price the difference in three sentences.', bn: 'দুই প্রকৌশলী, একটি সিক্রেট। একজন DB_PASSWORD ইনজেক্ট করে env দিয়ে; আরেকজন মাউন্ট করে 0400-সহ /run/secrets-এ। পার্থক্যটি তিন বাক্যে মূল্য দিন।' },
      options: [
        { en: 'env is INHERITED (every child process), DUMPED (crash reporters, ps e, /proc/environ), and BAKED AT BIRTH (rotation requires a full roll); the mount is READ BY THE CITIZEN alone with modes, invisible to dumps. And updates at pod-lifetime velocity via symlink swap. Though the app must re-read it (the rotation law’s tax, priced honestly)', bn: 'env উত্তরাধিকারী (প্রতি সন্তান-প্রক্রিয়ায়), ডাম্পকৃত (ক্র্যাশ-রিপোর্টার, ps e, /proc/environ), আর জন্মে-বেককৃত (ঘূর্ণন চায় পুরো গড়ানো); মাউন্ট পঠিত হয় মোডসহ কেবল নাগরিকের, ডাম্পে অদৃশ্য, আর হালনাগাদ হয় পড-আয়ু-বেগে সিমলিংক-বিনিময়ে — যদিও অ্যাপকে তা পুনঃপড়তে হয় (ঘূর্ণন-আইনের কর, সৎভাবে-মূল্যায়িত)' },
        { en: 'no difference — both end up in the process memory', bn: 'কোনো পার্থক্য নেই — দুটোই শেষে প্রক্রিয়া-স্মৃতিতে' },
        { en: 'env is safer because files can be read by any exec', bn: 'env নিরাপদতর, কারণ ফাইল যে-কোনো exec-এ পড়া যায়' },
        { en: 'mounts are only faster, not safer', bn: 'মাউন্ট কেবল দ্রুততর, নিরাপদতর নয়' },
      ],
      answer: 0,
      hint: { en: 'Who reads an atom’s environment — and who can read its files?', bn: 'পরমাণুর পরিবেশ কে পড়ে — আর তার ফাইল কে পড়তে পারে?' },
      explanation: { en: 'Environment is a loud inheritance; a file is a quiet conversation. Secrecy is surface minimization: fewer readers, fewer dumps, fewer velocities of rotation.', bn: 'পরিবেশ হলো কর্কশ-উত্তরাধিকার; ফাইল হলো নীরব-সংলাপ। গোপনীয়তা হলো পৃষ্ঠ-ন্যূনতমকরণ: কম পাঠক, কম ডাম্প, ঘূর্ণনের কম বেগ।' },
    },
    { id: 'k8s-economy-ex2', kind: 'predict', topic: 'rotation velocities',
      question: { en: 'You rotate a mounted Secret at 02:14. The ledger says delivered, the edge keeps serving the old cert until its own 90-day expiry. Predict the exact two missing pieces, then name the three-part fix.', bn: 'আপনি 02:14-এ মাউন্টকৃত-সিক্রেট ঘোরালেন। খাতা বলে পৌঁছে-দেওয়া, সীমান্ত পরিবেশন চালায় পুরনো-সার্ট তার নিজের ৯০-দিনের মেয়াদ পর্যন্ত। হুবহু দুই হারানো-অংশ ভবিষ্যদ্বাণী করুন, তারপর তিন-খণ্ডের প্রতিকারের নাম বলুন।' },
      options: [
        { en: 'missing: (1) the application never re-read the file (boot-baked TLS listener; no fsnotify, no SIGHUP) — CONSUMPTION absent; (2) nobody charted consumed-vs-delivered (served cert’s notAfter was never a metric) — OBSERVABILITY absent. Fix: fsnotify+reload in the app, a checksum-annotation belt that rolls the cohort when watching fails, and a cert-expiry metric that pages at 14 days', bn: 'হারানো: (১) অ্যাপ্লিকেশন ফাইল পুনঃপড়েনি (বুট-বেকড TLS-লিসেনার; fsnotify নেই, SIGHUP নেই) — গ্রহণ অনুপস্থিত; (২) কেউ গৃহীত-বনাম-পৌঁছে-দেওয়া চার্ট করেনি (পরিবেশিত-সার্টের notAfter কখনো মেট্রিক ছিল না) — পর্যবেক্ষণযোগ্যতা অনুপস্থিত. প্রতিকার: অ্যাপে fsnotify+রিলোড, চেকসাম-টীকা-বেল্ট যা ওয়াচ-ব্যর্থতায় দল গড়ায়, আর সার্ট-মেয়াদ-মেট্রিক যা ১৪ দিনে পেজ করে' },
        { en: 'missing: the secret was base64, which is why the mime type confused kubelet; fix: switch to stringdata', bn: 'হারানো: সিক্রেট base64 ছিল, এইজন্য mime-ধরন kubelet-কে বিভ্রান্ত করল; প্রতিকার: stringData-তে যান' },
        { en: 'missing: the cache ttl of two full days; fix: restart kubelet hourly', bn: 'হারানো: পুরো দুই দিনের ক্যাশ-TTL; প্রতিকার: kubelet ঘণ্টায় পুনঃসূচনা' },
        { en: 'missing: cert-manager forgot to rotate; fix: check its logs', bn: 'হারানো: cert-manager ঘোরাতে ভুলে গেছে; প্রতিকার: তার লগ দেখুন' },
      ],
      answer: 0,
      hint: { en: 'DELIVERED is a ledger row; CONSUMED is an application act. Which of the two was never charted?', bn: 'পৌঁছে-দেওয়া একটি খাতাসারি; গৃহীত একটি অ্যাপ্লিকেশন-কাজ। দুটির কোনটি কখনো চার্ট হয়নি?' },
      explanation: { en: 'Rotation travels in two velocities and ends in an application act. The platform can deliver; only the citizen can consume; only you can chart the difference.', bn: 'ঘূর্ণন যাত্রা করে দুই বেগে আর শেষ হয় একটি অ্যাপ্লিকেশন-কাজে। প্ল্যাটফর্ম পৌঁছে দিতে পারে; কেবল নাগরিক গ্রহণ করতে পারে; পার্থক্য কেবল আপনিই চার্ট করতে পারেন।' },
    },
    { id: 'k8s-economy-ex3', kind: 'mcq', topic: 'soil taxonomy',
      question: { en: 'Pick the honest soil for each: a database’s data dir, a build cache, a node-log reader, and a shared uploads directory for three stateless front-ends. State the pricing in one phrase each.', bn: 'প্রতিটির সৎ-মাটি বাছুন: ডেটাবেসের ডেটা-ডিরেক্টরি, বিল্ড-ক্যাশ, নোড-লগ-পাঠক, আর তিন স্টেটলেস-ফ্রন্টএন্ডের ভাগকৃত-আপলোড-ডিরেক্টরি। প্রতিটির মূল্য এক-একটি পদবন্ধে বলুন।' },
      options: [
        { en: 'Database: PVC with RWO for dedicated single-writer storage. Build cache: emptyDir with sizeLimit for ephemeral scratch space. Node logger: hostPath read-only restricted to DaemonSets. Shared uploads: RWX storage class.', bn: 'ডেটাবেস: একক লেখকের জন্য RWO সহ PVC। বিল্ড ক্যাশ: অস্থায়ী স্ক্র্যাচ স্থানের জন্য sizeLimit সহ emptyDir। নোড লগার: ডিমনসেটের জন্য সীমাবদ্ধ রিড-অনলি hostPath। ভাগ করা আপলোড: একাধিক পডের জন্য RWX স্টোরেজ।' },
        { en: 'everything → hostPath, simple and fast', bn: 'সবকিছু → hostPath, সরল ও দ্রুত' },
        { en: 'everything → emptyDir; persistence is a myth', bn: 'সবকিছু → emptyDir; স্থায়িত্ব এক রটনা' },
        { en: 'database → emptyDir, cache → pvc, logs → rwx, uploads → rwo', bn: 'ডেটাবেস → emptyDir, ক্যাশ → PVC, লগ → RWX, আপলোড → RWO' },
      ],
      answer: 0,
      hint: { en: 'Who attaches, who dies with the atom, who is the priesthood, who shares by design?', bn: 'কে সংযুক্ত হয়, কে পরমাণুর সাথে মরে, পুরোহিতবর্গ কে, নকশায় ভাগ করে কে?' },
      explanation: { en: 'The taxonomy is honesty: each soil prices its contract with mortality. Choose wrongly and the interest arrives as the pod paradox — the atom wandered, the soil stayed.', bn: 'শ্রেণিবিন্যাস-ই সততা: প্রতি মাটি মৃত্যুর সাথে তার চুক্তি মূল্য দেয়। ভুল বাছলে সুদ এসে পৌঁছায় পড-পরাদক্সরূপে — পরমাণু ঘুরে বেড়াল, মাটি রয়ে গেল।' },
    },
  ],
  quiz: {
    id: 'k8s-economy-quiz',
    title: { en: 'The Economy Exam', bn: 'অর্থনীতি-পরীক্ষা' },
    questions: [
      { id: 'cs1', kind: 'mcq', topic: 'immutable config',
        question: { en: 'What does immutable: true on a ConfigMap actually amend about failure?', bn: 'ConfigMap-এ immutable: true আসলে ব্যর্থতার ব্যাপারে কী সংশোধন করে?' },
        options: [
          { en: 'it turns configuration drift into a TYPE ERROR: mutating a stabilized generation is rejected at the API, so a wrong value can hope to exist only via a NEW GENERATION (new ConfigMap name, reviewed, rolled). Which makes rollbacks plumbing (undo a generation pointer) instead of archaeology (reconstruct what the cluster used to know); staging-only keys become structurally unshippable under review', bn: 'তা কনফিগ-বিচ্যুতিকে টাইপ-ত্রুটিতে রূপান্তর করে: স্থিতিকৃত-প্রজন্ম মিউটেট করা API-তেই প্রত্যাখ্যাত, তাই ভুল-মান অস্তিত্বের আশা করতে পারে শুধু নতুন প্রজন্মে (নতুন ConfigMap-নাম, পর্যালোচিত, গড়ানো). যা রোলব্যাক করে প্লাম্বিং (প্রজন্ম-পয়েন্টার undo), প্রত্নতত্ত্ব নয় (ক্লাস্টার কী জানত তা পুনর্গঠন); স্টেজিং-মাত্র-কী পর্যালোচনায় কাঠামোগতভাবে অপাঠানেয় হয়' },
          { en: 'it makes the config encrypted at rest', bn: 'তা কনফিগ স্থির-অবস্থায় এনক্রিপ্টেড করে' },
          { en: 'it speeds up kubelet cache delivery', bn: 'তা kubelet-ক্যাশ-বিতরণ ত্বরান্বিত করে' },
          { en: 'it prevents configmaps from being deleted', bn: 'তা ConfigMap মোছা বন্ধ করে' },
        ],
        answer: 0,
        hint: { en: 'Which verb becomes REJECTED, and what must changes become instead?', bn: 'কোন ক্রিয়া প্রত্যাখ্যাত হয়, আর পরিবর্তনকে তখন কী হতে হয়?' },
        explanation: { en: 'Immutability converts drift from a social problem into an arithmetic one: the register only knows generations; past tense is a pointer, not a memory.', bn: 'অপরিবর্তনীয়তা বিচ্যুতিকে সামাজিক-সমস্যা থেকে পাটিগণিত-সমস্যায় রূপান্তরিত করে: রওকদারি কেবল প্রজন্ম চেনে; অতীতকাল পয়েন্টার, স্মৃতি নয়।' },
      },
      { id: 'cs2', kind: 'mcq', topic: 'secret wrappers',
        question: { en: 'Enumerate the three wrappers on a Secret and match each to the thief it prices out.', bn: 'সিক্রেটের তিন মোড়ক গণনা করুন আর প্রতিটি মেলান সেই চোরের সাথে, যাকে তা মূল্যবহির্ভূত করে।' },
        options: [
          { en: 'base64 = the envelope for BINARY IN YAML (prices out encoding corruption, no thief at all — it is NOT a lock); RBAC = the verb-wall (prices out wandering-privilege identities: list/get secrets as a passport almost nobody holds). Etcd at-rest encryption = the vault (prices out the disk thief: snapshots and dumpster drives decrypt to nothing without cluster-held keys)', bn: 'base64 = YAML-এ-বাইনারির খাম (এনকোডিং-ভাঙা মূল্যবহির্ভূত করে, চোর নয় একদমই — তালা নয় এটি); RBAC = ক্রিয়া-প্রাচীর (বিচরণকারী-বিশেষাধিকার-পরিচয় মূল্যবহির্ভূত: list/get secrets এমন পাসপোর্ট, প্রায় কারওই নেই); etcd স্থির-এনক্রিপশন = তিজোরি (ডিস্ক-চোর মূল্যবহির্ভূত: ক্লাস্টারধারী-কী ছাড়া স্ন্যাপশট আর ডাস্টবিন-ড্রাইভ ডিক্রিপ্ট হয় শূন্যতায়)' },
          { en: 'base64 (encryption), rbac (compression), etcd (backup)', bn: 'base64 (এনক্রিপশন), RBAC (কম্প্রেশন), etcd (ব্যাকআপ)' },
          { en: 'tls, mtls, and password rotation', bn: 'TLS, mTLS আর পাসওয়ার্ড-ঘূর্ণন' },
          { en: 'namespaces, networkpolicies, and admission webhooks', bn: 'নেমস্পেস, নেটওয়ার্কপলিসি আর অ্যাডমিশন-ওয়েবহুক' },
        ],
        answer: 0,
        hint: { en: 'Which wrapper stops a YAML reader? (Trick: none — verbs and vaults stop readers.)', bn: 'YAML-পাঠক থামায় কোন মোড়ক? (ছল: কোনোটিই নয় — পাঠক থামায় ক্রিয়া আর তিজোরি।)' },
        explanation: { en: 'Three wrappers for three thieves: encoding is not secrecy, verbs are secrecy, ciphertext at rest is secrecy. Memorize which thief each prices out.', bn: 'তিন চোরের জন্য তিন মোড়ক: এনকোডিং গোপনীয়তা নয়, ক্রিয়াই গোপনীয়তা, স্থির-সাইফারটেক্সট গোপনীয়তা। কোনটি কোন চোরকে মূল্যবহির্ভূত করে মুখস্থ রাখুন।' },
      },
      { id: 'cs3', kind: 'mcq', topic: 'subpath tax',
        question: { en: 'Why does a subPath-mounted key stop receiving ConfigMap updates, in mechanism terms?', bn: 'কেন subPath-মাউন্টকৃত-কী ConfigMap-হালনাগাদ পাওয়া থামায়, প্রক্রিয়াটত্ত্ব-পরিভাষায়?' },
        options: [
          { en: 'mounted volumes update via a SYMLINK SWAP: the kubelet re-points the ..data directory atomically so readers see old-then-new, never torn; subPath bypasses the indirection and binds the OLD INODE (the specific file) directly into the pod. The swap happens around it, the pin stays put. And the file freezes at its birth-generation forever: precision purchased with rotation', bn: 'মাউন্টকৃত-ভলিউম হালনাগাদ হয় সিমলিংক-বিনিময়ে: kubelet ..data-ডিরেক্টরি পারমাণবিকভাবে পুননির্দেশ করে, তাই পাঠক দেখে পুরনো-তারপর-নতুন, ছেঁড়া কখনো নয়; subPath মধ্যবর্তিতা এড়িয়ে পুরনো-INODE (নির্দিষ্ট ফাইল) সরাসরি পডে বাঁধে — বিনিময় ঘটে তার চারপাশে, পিন অটল থাকে। আর ফাইল হিমায়িত হয় জন্ম-প্রজন্মেই চিরকালের জন্য: ঘূর্ণন-দিয়ে-কেনা নির্ভুলতা' },
          { en: 'kubelet treats subpath as a mount-a-virus and refuses syncs', bn: 'kubelet subPath-কে ভাইরাস-মাউন্ট মনে করে সমন্বয় অস্বীকার করে' },
          { en: 'configmaps only sync whole directories on weekdays', bn: 'ConfigMap কেবল সপ্তাহের-দিনে পুরো ডিরেক্টরি সমন্বয় করে' },
          { en: 'subpath mounts are cached in the container runtime forever', bn: 'subPath-মাউন্ট চিরকাল কন্টেইনার-রানটাইমে ক্যাশিত থাকে' },
        ],
        answer: 0,
        hint: { en: 'The swap re-points the directory; what did subPath pin instead?', bn: 'বিনিময় পুননির্দেশ করে ডিরেক্টরি; subPath তার বদলে কী পিন করল?' },
        explanation: { en: 'Indirection is the delivery mechanism; subPath is a direct bind of one old inode. Precision purchased with rotation — the tax is structural, named at review or never.', bn: 'মধ্যবর্তিতাই বিতরণ-প্রক্রিয়াটত্ত্ব; subPath একটি পুরনো-inode-এর সরাসরি-বাঁধুনি। ঘূর্ণন-দিয়ে-কেনা নির্ভুলতা — কর কাঠামোগত, পর্যালোচনায় নামকৃত নইলে কখনো নয়।' },
      },
      { id: 'cs4', kind: 'mcq', topic: 'pvc arithmetic',
        question: { en: 'Why is ReadWriteOnce the right default for database soil, and what exactly enforces the “once”?', bn: 'কেন ডেটাবেস-মাটির ডিফল্ট ReadWriteOnce, আর “একবার” প্রয়োজন করে হুবহু কী?' },
        options: [
          { en: 'quorum soil needs ONE writer’s memory: two atoms attached to one disk is split-brain with shared bytes (the distributed-systems lesson wearing storage clothes); RWO’s exclusivity is enforced by the CLOUD/CSI ATTACH LAYER. One volume handle, one node attachment at a time, fence-by-infrastructure — not by politeness in the pod spec. ReadWriteMany exists (shared filesystems) but buys sharing with real money and real semantics, chosen deliberately and rarely', bn: 'গরিষ্ঠতার মাটির দরকার একক-লেখকের স্মৃতি: একটি ডিস্কে দুই পরমাণু সংযুক্ত মানে ভাগকৃত-বাইটে বিভক্ত-মস্তিষ্ক (সংরক্ষণ-পোশাকে distributed-systems-পাঠ); RWO-এর একচ্ছত্রতা প্রয়োজিত হয় ক্লাউড/CSI-সংযুক্তি-স্তরে — একটি ভলিউম-হ্যান্ডেল, একসময়ে এক নোড-সংযুক্তি, অবকাঠামোগত-ঘেরাটোপ — পড-স্পেকের ভদ্রতায় নয়। ReadWriteMany আছে (ভাগকৃত-ফাইলসিস্টেম) কিন্তু ভাগাভাগি কেনে প্রকৃত-অর্থে ও প্রকৃত-শব্দার্থে, সচেতনভাবে ও কদাচিৎ-বাছাইকৃত' },
          { en: 'rwo is just cheaper per gigabyte', bn: 'RWO কেবল গিগাবাইটপ্রতি সস্তা' },
          { en: 'the kubelet enforces it with a file lock', bn: 'kubelet তা প্রয়োজন করে ফাইল-লক দিয়ে' },
          { en: 'rwo means read-write-once-daily backups', bn: 'RWO মানে দৈনিক-একবার-পঠন-লেখন-ব্যাকআপ' },
        ],
        answer: 0,
        hint: { en: 'What would TWO writers on one disk mean for the quorum — and who fences the second chair?', bn: 'এক ডিস্কে দুই লেখক গরিষ্ঠতার জন্য কী বোঝাত — আর দ্বিতীয়-আসন ঘেরাটোপ করে কে?' },
        explanation: { en: 'Exclusivity is infrastructure-graded fencing, not application politeness: one attach per handle, enforced where the disk lives. The quorum buys its memory with it.', bn: 'একচ্ছত্রতা হলো অবকাঠামো-শ্রেণিকৃত-ঘেরাটোপ, অ্যাপ্লিকেশন-ভদ্রতা নয়: হ্যান্ডেলপ্রতি এক-সংযুক্তি, প্রয়োজিত সেখানে যেখানে ডিস্ক থাকে। গরিষ্ঠতা তার স্মৃতি এটা দিয়েই কেনে।' },
      },
      { id: 'cs5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete: “Knowledge is mounted, soil is ___.” (one word)', bn: 'পূর্ণ করুন: “জ্ঞান মাউন্টকৃত, মাটি ___।” (এক শব্দ)' },
        answer: 'claimed',
        accept: ['দাবিকৃত', 'claim'],
        hint: { en: 'A PVC is a…', bn: 'একটি PVC হলো একটি…' },
        explanation: { en: 'The inventory law in two budgets: knowledge arrives mounted (delivered, consumed by duty), soil arrives CLAIMED (budgeted, provisioned by arithmetic).', bn: 'দুই বাজেটে মজুদ-আইন: জ্ঞান আসে মাউন্টকৃত (পৌঁছে-দেওয়া, দায়ে-গৃহীত), মাটি আসে দাবিকৃত (বাজেটকৃত, পাটিগণিতে-বিধাতকৃত)।' },
      },
    ],
  },
  nextLesson: {
    slug: 'the-scheduler-arithmetic',
    title: { en: 'The Scheduler Arithmetic: who sits where, provably', bn: 'সূচক-পাটিগণিত: কে কোথায় বসে, প্রমাণসহ' },
  },
};
