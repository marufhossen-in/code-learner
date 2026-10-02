import type { Lesson } from '../../../lib/types';

export const desiredStateLedgerLesson: Lesson = {
  slug: 'the-desired-state-ledger',
  tech: 'kubernetes',
  title: {
    en: 'Desired State Ledger — First THE TWIN REGISTERS, every Kubernetes object',
    bn: 'কাঙ্ক্ষিত-অবস্থা-রওকদারি: দুই খাতা, এক তর্ক'
  },
  summary: {
    en: 'Lesson one priced the atom; lesson two prices the MACHINERY OF DISAGREEMENT that keeps atoms honest. First THE TWIN REGISTERS: every Kubernetes object exists TWICE. The DESIRED state you wrote into etcd with apply (its spec is scripture, the cluster’s ONLY theory of you) and the OBSERVED state the kubelets report back (status is testimony, updated by heartbeats). Kuberbetes, spelled honestly, is one eternal argument between these two columns. Second THE RECONCILIATION LOOP AS ENGINE: controllers do not execute steps, they chase deltas — read desired, read observed, file claims until the two sign the same number, sleep, wake on watch events, repeat. The loop is LEVEL-triggered (re-check the whole world each pass), which is why missed events are merely latency, never lost truth. Third LABELS AND SELECTORS AS THE ONLY GRAMMAR: the fleet has exactly one honest query language — pods carry key=value stickers; services, replicasets, network policies and HPAs all subscribe truth-SETS, never identities. A label is therefore an API surface, renamed only by migration, not by impulse. Fourth APPLY AS A THEORY OF CHANGE: kubectl apply computes a three-way merge (old config, new YAML, live object) and rewrites desire surgically; imperative kubectl edit is a sharp knife with no audit trail. In the register’s courtroom, only the YAML files testify. Visual lab: crash a node and watch desired-vs-observed re-argue itself. Debug file: the label that ate the endpoints — a schema-style rename rolled out by a thoughtful engineer; every pod Ready, the service’s truth-set empty because nobody updated the SELECTOR; traffic dead in perfect health. Carried sentence: DESIRE IS WRITTEN; REALITY IS CONVERGED.',
    bn: 'প্রথম পাঠ মূল্য দিয়েছে পরমাণু; দ্বিতীয় মূল্য দেয় মতভেদের কলকব্জা, যা পরমাণুদের সৎ রাখে। প্রথম যুগল-রওকদারি: প্রতি Kubernetes-বস্তু দুইবার থাকে — কাঙ্ক্ষিত-অবস্থা, যা আপনি apply দিয়ে etcd-তে লিখলেন (তার spec শাস্ত্র, আপনি সম্পর্কে ক্লাস্টারের একমাত্র তত্ত্ব) আর পর্যবেক্ষিত-অবস্থা, যা kubelet ফেরত জানায় (status সাক্ষ্য, হার্টবিটে হালনাগাদ). Kubernetes, সৎভাবে বানান করলে, এই দুই কলামের এক চিরন্তন-তর্ক। দ্বিতীয় ইঞ্জিনরূপে RECONCILIATION-লুপ: কন্ট্রোলার ধাপ চালায় না, ডেল্টা তাড়া করে — কাঙ্ক্ষিত পড়ো, পর্যবেক্ষিত পড়ো, দাবি দাখিল করো যতক্ষণ দুটো একই সংখ্যায় সই করে। ঘুমাও, watch-ইভেন্টে জাগো, পুনরাবৃত্তি; লুপটি LEVEL-triggered (প্রতি পাসে পুরো জগৎ পুনঃপরীক্ষা), এইজন্যই হারানো-ইভেন্ট মাত্র ল্যাটেন্সি, হারানো-সত্য কখনোই নয়। তৃতীয় একমাত্র-ব্যাকরণরূপে লেবেল-সিলেক্টর: বহরে প্রশ্নের একটিমাত্র সৎ-ভাষা — পড বহন করে কী=মান স্টিকার; সার্ভিস, রেপ্লিকাসেট, নেটওয়ার্ক-নীতি আর HPA সবাই সাবস্ক্রাইব করে সত্য-সেট, পরিচয় কখনো নয়; তাই লেবেল একটি API-পৃষ্ঠ, যার নামবদল হয় মাইগ্রেশনে, খেয়ালে নয়। চতুর্থ পরিবর্তন-তত্ত্বরূপে APPLY: kubectl apply গণনা করে তিন-পক্ষ-মিলন (পুরনো কনফিগ, নতুন YAML, জীবন্ত-বস্তু) আর অস্ত্রোপচারে ইচ্ছা পুনর্লিখন করে; আদেশাত্মক kubectl edit হলো নিরীক্ষণ-ছাড়া ধারাল-ছুরি — রওকদারির আদালতে কেবল YAML-ফাইলগুলোই সাক্ষ্য দেয়। Visual lab: নোড বিপর্যয় করুন আর দেখুন কাঙ্ক্ষিত-বনাম-পর্যবেক্ষিত নিজেই পুনঃতর্ক করে। ডিবাগ-ফাইল: যে লেবেল এন্ডপয়েন্ট খেয়ে ফেলল — স্কিমা-ধাত্রী নামবদল, এক সুযুক্ত-প্রকৌশলীর হাতে; প্রতি পড Ready, সার্ভিসের সত্য-সেট খালি, কারণ সিলেক্টর কেউ হালনাগাদ করেনি; নিখুঁত-স্বাস্থ্যে মৃত ট্রাফিক। বহনযোগ্য বাক্য: ইচ্ছা লেখা হয়; বাস্তব অভিসারিত হয়।',
  },
  minutes: 23,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT the ledger contains, twice', bn: 'খাতা কী ধারণ করে, দুইবার' } },
    {
      type: 'para',
      text: {
        en: 'Every Kubernetes object tracks two paired registers side by side. The spec column records your declared intent, describing what should exist across the cluster. The status column records the live reality observed and reported back by controllers and kubelets. Controllers run reconciliation loops continuously, reading the difference between spec and status to converge your cluster toward your desired state automatically.',
        bn: 'প্রতিটি Kubernetes অবজেক্ট পাশাপাশি দুটি সম্পর্কিত খাতা বজায় রাখে। স্পেক (spec) কলামটি আপনার ঘোষিত অভিপ্রায় ধারণ করে, অর্থাৎ ক্লাস্টারে কী থাকা উচিত তা বর্ণনা করে। স্ট্যাটাস (status) কলামে কন্ট্রোলার এবং কিউবলেটের পর্যবেক্ষণ করা বাস্তব অবস্থা সংরক্ষিত থাকে। কন্ট্রোলারগুলো সার্বক্ষণিক রিকনসিলিয়েশন লুপ চালিয়ে স্পেক ও স্ট্যাটাসের ব্যবধান মেটায় এবং বহরকে কাঙ্شتہ অবস্থায় পৌঁছে দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'desired state (spec)', def: { en: 'The scripture column: replicas, image, requests — written by apply, never by rumor.', bn: 'শাস্ত্র-কলাম: রেপ্লিকা, ইমেজ, requests — apply-তে লিখিত, গুজবে কখনো নয়।' } },
        { term: 'observed state (status)', def: { en: 'The testimony column: what kubelets and controllers swear actually exists right now.', bn: 'সাক্ষ্য-কলাম: kubelet আর কন্ট্রোলারের শপথ, এইমুহূর্তে আসলে কী আছে।' } },
        { term: 'reconciliation loop', def: { en: 'The eternal verifier: read both columns, file claims on the delta, sleep, wake on watch, repeat — forever.', bn: 'চিরন্তন-যাচাইকারী: দুই কলাম পড়ো, ডেল্টায় দাবি দাখিল করো, ঘুমাও, watch-এ জাগো, পুনরাবৃত্তি — চিরকাল।' } },
        { term: 'level-triggered', def: { en: 'Alarm clock, not newspaper: wake, re-read the WHOLE world, converge — missed events become latency, never lost truth.', bn: 'ঘুমভাঙা-ঘড়ি, সংবাদপত্র নয়: জাগো, পুরো জগৎ পুনঃপড়ো, অভিসারিত হও — হারানো-ইভেন্ট ল্যাটেন্সি হয়, হারানো-সত্য কখনোই নয়।' } },
        { term: 'label', def: { en: 'Key=value sticker on the atom; carried by it, selected by everyone, renamed by migration alone.', bn: 'পরমাণুর কী=মান স্টিকার; বহন করে নিজে, নির্বাচিত সকলের দ্বারা, নামবদল হয় কেবল মাইগ্রেশনে।' } },
        { term: 'selector', def: { en: 'The subscription query on stickers: services/parents/policies hold SELECTORS, not names — truth-sets, recomputed forever.', bn: 'স্টিকারের উপর সাবস্ক্রিপশন-প্রশ্ন: সার্ভিস/অভিভাবক/নীতি ধরে সিলেক্টর, নাম নয় — চিরকাল-পুনর্গণিত সত্য-সেট।' } },
        { term: 'apply (3-way merge)', def: { en: 'Old-config vs new-YAML vs live-object merged surgically; the only rewrite of desire with an audit trail.', bn: 'পুরনো-কনফিগ বনাম নতুন-YAML বনাম জীবন্ত-বস্তুর অস্ত্রোপচারমাং-মিলন; নিরীক্ষণ-চিহ্নসহ ইচ্ছা-পুনর্লেখনের একমাত্র পথ।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY argument beats instruction', bn: 'কেন তর্কই জেতে নির্দেশে' } },
    {
      type: 'para',
      text: {
        en: 'The imperative model works inside a single box but fails across a distributed fleet. Instruction assumes the caller remains available when reality disagrees, whether a node crashes mid-delivery or a network partition delays an event. WHY-ONE, IDEMPOTENCE AS SURVIVAL: the reconciliation loop can run thousands of times against the desired state to produce one consistent outcome. The cluster converges or the refusal is clearly logged. Retries are free and duplicate operations are impossible by design. WHY-TWO, THE ARGUMENT AS OBSERVABILITY: because the register holds both columns, an auditor can diff the fleet at any second. Running kubectl get deploy shows desired versus ready states clearly, while describe provides detailed evidence. Imperative fleets require custom probes, but desired-state clusters expose their status directly. WHY-THREE, SELECTORS AS THE ONLY HONEST FOUNDATION: instance names are transient because pods reincarnate with fresh identifiers. A declared label selector ensures services route traffic to matching replacements smoothly without name-tracking debt. And WHY-FOUR, APPLY AS GOVERNANCE: declaring cluster configuration in version-controlled manifests provides a reliable audit trail and a single command for rollbacks. Argument beats instruction for the same reason contracts beat phone calls: writing preserves intent permanently.',
        bn: 'আদেশাত্মক মডেলটি একটি একক বাক্সে ভালো কাজ করলেও বিশাল বহরে ব্যর্থ হয়। নির্দেশমূলক ব্যবস্থা ধরে নেয় যে বাস্তব কোনো অমিল দেখা দিলে নির্দেশদাতা উপস্থিত থাকবেন, অথচ বাস্তবে যেকোনো মুহূর্তে নোড বন্ধ হতে পারে বা নেটওয়ার্কে প্যাকেট হারাতে পারে। একনম্বর, বেঁচে-থাকারূপে IDEMPOTENCE: রিকনসিলিয়েশন লুপ হাজারবার চালিয়েও একই সঙ্গত ফলাফল পাওয়া যায়। ক্লাস্টার হয় কাঙ্ক্ষিত অবস্থায় পৌঁছায়, নয়তো ব্যর্থতার কারণ স্পষ্টভাবে তুলে ধরে। পুনঃচেষ্টা পুরোপুরি ঝুঁকিমুক্ত এবং নকল ক্রিয়া গঠনেই অসম্ভব। দ্বিতীয়ত, পর্যবেক্ষণযোগ্যতারূপে তর্ক: রওকদারি দুটি কলামই সংরক্ষণ করে বলে নিরীক্ষক যেকোনো মুহূর্তে পুরো বহর তুলনা করতে পারেন। kubectl get deploy-তে কাঙ্ক্ষিত 3 প্রস্তুত 1 হলো সরাসরি দৃশ্যমান তর্ক, যেখানে describe পুরো প্রমাণ তুলে ধরে। তৃতীয়, একমাত্র-সৎ-ভিত্তিরূপে সিলেক্টর: দৃষ্টান্ত-নাম আবহাওয়া (পড প্রতি নিঃশ্বাসে নতুন নামে পুনর্জন্ম নেয় — প্রথম পাঠের ডিবাগ-ফাইল জিজ্ঞেস করুন); সত্য-সেট সার্ভিসদের কালকে-জন্মানো পডে লোড করে যেন কিছুই হয়নি, তাই শূন্য-নাম-টহল-ঋণে তর্ক পুনর্জন্ম পেরিয়ে টেকে। আর চতুর্থ, শাসনরূপে APPLY: ভোর ২টায় দুই প্রকৌশলীর জীবন্ত-বস্তু-সম্পাদনা এক পাতায় দুই লেখক; রওকদারি + git হলো এক পাতা, এক কলম, এক ইতিহাস — সেই ফাইল, যা আপনি আর বহরের মাঝে নিরপেক্ষভাবে শুয়ে থাকে, আর রোলব্যাক-বোতামের ভূমিকাও নেয়। তর্কই জেতে নির্দেশে, চুক্তি ফোনকলকে যে-কারণে জেতে সেই-কারণেই: লেখা মনে রাখে।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to work the ledger by hand', bn: 'কীভাবে খাতা নিজ হাতে চালাবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Write desire only through files: keep every manifest in git, change it ONLY by pull request, and let kubectl apply -f be the single verb that touches the register. The repository becomes the rollback, the review, and the audit in one folder.', bn: 'ইচ্ছা লিখুন কেবল ফাইল দিয়ে: প্রতি ম্যানিফেস্ট রাখুন git-এ, বদলান কেবল pull request-এ, আর kubectl apply -f-ই হোক রওকদারি-ছোঁয়া একমাত্র ক্রিয়া — ভান্ডার হলো এক ফোল্ডারে রোলব্যাক, পর্যালোচনা আর নিরীক্ষণ।' },
        { en: 'Read the argument before touching anything: run kubectl get deploy,rs -n prod. The columns DESIRED, CURRENT, UP-TO-DATE, and AVAILABLE show the reconciliation state directly. Most confusing cluster issues come from one of these values differing by 1.', bn: 'কিছু পরিবর্তন করার আগে ক্লাস্টারের তর্কটি পড়ুন: kubectl get deploy,rs -n prod চালান। DESIRED, CURRENT, UP-TO-DATE এবং AVAILABLE কলামগুলো সরাসরি রিকনসিলিয়েশন খাতা তুলে ধরে। অধিকাংশ জটিল সমস্যার মূল কারণ থাকে এই সংখ্যাগুলোর কোনো একটি ১ কম বা বেশি থাকা।' },
        { en: 'Prove loops converge, don’t assume: watch kubectl get pods -w after a crash in the lab (or staging). Pending to Running transitions should happen without manual intervention. If pods remain stuck, inspect the capacity or taint constraints using kubectl describe pod.', bn: 'লুপ অভিসারিত হয় তা প্রমাণ করুন, অনুমান করবেন না। ল্যাবে বা স্টেজিংয়ে kubectl get pods -w চালিয়ে দেখুন: মানুষের কোনো হস্তক্ষেপ ছাড়াই Pending থেকে Running অবস্থা তৈরি হয়। পড আটকে থাকলে kubectl describe চালিয়ে ধারণক্ষমতা বা টেইন্টের ঘাটতি যাচাই করুন।' },
        { en: 'Treat labels as a schema: registry of keys in ONE doc, edits only by migration (add new key, dual-write, migrate consumers, retire old key) — the truth-set is the fleet’s contract and rename-is-delete to its subscribers.', bn: 'লেবেল মানুন স্কিমারূপে: একটি দলিলে কীগুলোর তালিকা, সম্পাদনা কেবল মাইগ্রেশনে (নতুন কী যোগ, দ্বৈত-লেখা, ভোগীদের স্থানান্তর, পুরনো কী অবসর) — সত্য-সেট বহরের চুক্তি, আর তার গ্রাহকদের কাছে নামবদল-মানেই-মোছা।' },
        { en: 'Apply confidently again — the merge is your seatbelt: rerun kubectl apply on the same file after any hand-touch (kubectl edit, a stray scale); drift shows up as a diff line you can read. And the file wins by design.', bn: 'আত্মবিশ্বাসে আবার apply করুন — মিলন-ই আপনার সিটবেল্ট: যে-কোনো হাতে-ছোঁয়ার (kubectl edit, ইতর scale) পর একই ফাইলে kubectl apply পুনঃচালান; প্রবাহ দেখা দেয় পঠনযোগ্য diff-লাইনে, আর ফাইল জেতে নকশাতেই।' },
        { en: 'Version the pen too: kubectl diff -f file.yaml BEFORE apply in CI, policy the three-way merge output into code review — every surprise the register can produce is pre-signed by two reviewers.', bn: 'কলমটাও সংস্করণ করুন: CI-তে apply-এর আগে kubectl diff -f file.yaml, তিন-পক্ষ-মিলন-আউটপুট কোড-রিভিউতে নীতিকৃত — রওকদারির উৎপাদনযোগ্য প্রতি বিস্ময় দুই পর্যালোচকের পূর্ব-সইকৃত।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the argument in the lab', bn: 'দৃশায়ন: ল্যাবে তর্ক' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'The visualizer illustrates this continuous reconciliation loop. The desire panel shows declared deployments while the observed panel displays active pods on nodes. Crashing a node opens a visible gap that closes automatically as controllers schedule replacement pods.',
        bn: 'ভিজ্যুয়ালাইজারটি এই অবিচ্ছিন্ন রিকনসিলিয়েশন লুপ দৃশ্যমান করে। কাঙ্ক্ষিত প্যানেল ঘোষিত ডিপ্লয়মেন্ট দেখায় এবং পর্যবেক্ষিত প্যানেল নোডের জীবন্ত পড প্রদর্শন করে। একটি নোড ক্র্যাশ করলে যে ব্যবধান তৈরি হয়, কন্ট্রোলার নতুন পড বসিয়ে তা নিজে থেকেই পূরণ করে।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: the machinery between the columns', bn: 'অভ্যন্তরীণ: কলামদ্বয়ের মাঝের কলকব্জা' } },
    {
      type: 'para',
      text: {
        en: 'Five gearsets turn the argument. THE GATE: every verb crosses one API server (authentication, authorization, admission by webhooks — the first place policies bite: OPA/Kyverno lives HERE, as gatekeepers of what desire is even allowed to be WRITTEN). THE BOOK: etcd stores the register under /registry/… with strict-majority consensus (Raft — the distributed-systems hub’s choir, running beneath your fleet), so the cluster’s whole memory survives any single control-plane node dying. And its watch API fans every mutation out to subscribers. THE BUS: controllers never poll on schedules alone — each maintains an INFORMER, a local cache fed by the watch stream (SharedInformer in client-go), so a reconcile pass reads memory, not the book. The watchstream is why a 10,000-object register scales by NOT being re-listed every second. THE WORKERS: a controller dequeues a key, re-reads desired AND observed from its cache, computes the delta (deficit pods to file, retirements to grant, status to stamp), issues the verbs, and — crucially. OBTAINS NEVER A LOCK ON THE WORLD: two deployments’ reconciliations interleave freely because each mutates only its own children. And ownership crosses are guarded by ownerReferences (the garbage collector’s claim on which parent buries which orphan). THE RESYNC: every informer periodically RE-LISTS the entire register from the book (default minutes) and re-queues everything — the level trigger honoring itself on a schedule. So even a silently missed watch event has an expiry date measured in minutes, not in careers. Put it together and you see why the debug discipline stays boring: when behavior confuses you, the machinery offers exactly two places to look — the argument (status) and the transcript (events). And folklore has no drawer to hide in.',
        bn: 'পাঁচ গিয়ার তর্ক ঘোরায়। ফাটক: প্রতি ক্রিয়া পার হয় একটি API-সার্ভার (প্রমাণীকরণ, অনুমোদন, ওয়েবহুকে-প্রবেশনিয়ন্ত্রণ — নীতির প্রথম কামড়ের জায়গা: OPA/Kyverno থাকে এখানেই, লেখারই অনুমতি পায় কোন ইচ্ছা তার দারোয়ানরূপে)। বই: etcd রওকদারি সংরক্ষণ করে /registry/…-এর তলে, কঠোর-সংখ্যাগরিষ্ঠ-ঐকমত্যে (Raft — distributed-systems-হাবের সুরদল, আপনার বহরের নিচে চলমান), তাই ক্লাস্টারের পুরো স্মৃতি যে-কোনো একক-কন্ট্রোল-প্লেন-নোড মরে টেকে, আর তার watch-API প্রতি রূপান্তর বিলিয়ে দেয় গ্রাহকদের। বাস: কন্ট্রোলার কখনো কেবল সময়সূচিতে জরিপ করে না — প্রত্যেকে রাখে একটি INFORMER, watch-ধারায় জবানকৃত স্থানীয়-ক্যাশ (client-go-তে SharedInformer), তাই reconcile-পাস পড়ে স্মৃতি, বই নয়; watchstream-ই কারণ, 10,000-বস্তুর রওকদারি স্কেল করে প্রতি-সেকেন্ড পুনঃতালিকাভুক্ত না হয়ে। কর্মী: কন্ট্রোলার সারি থেকে উঠিয়ে নেয় একটি চাবি, তার ক্যাশ থেকে পুনঃপড়ে কাঙ্ক্ষিত আর পর্যবেক্ষণ, ডেল্টা গণে (দাখিলকরণীয় ঘাটতি-পড, মঞ্জুরকরণীয় অবসর, ছাপকরণীয় status), ক্রিয়া জারি করে। আর — অত্যন্ত গুরুত্বে — জগতের উপর কখনোই তালা পায় না: দুই ডিপ্লয়মেন্টের reconcile মুক্তভাবে এঁটোবাঁটো কাটে, কারণ প্রত্যেকে শুধু নিজের সন্তান ছোঁয়, আর মালিকানা-অতিক্রম পাহারা দেয় ownerReferences (কোন অভিভাবক কোন এতিম সমাধি দেবে তার আবর্জনা-সংগ্রাহক-দাবি)। RESYNC: প্রতি informer পর্যায়ক্রমে বই থেকে পুরো রওকদারি পুনঃতালিকা করে (ডিফল্ট মিনিট) আর সবকিছু পুনঃসারি করে — সময়সূচিতে নিজেকে সম্মানকরী level-trigger — তাই নিঃশব্দে-হারানো-ওয়াচ-ইভেন্টেরও মেয়াদ মাপা মিনিটে, ক্যারিয়ারে নয়। সব মিলিয়ে দেখবেন ডিবাগ-শৃঙ্খলা কেন বিরক্তিকর থাকে: আচরণ বিভ্রান্ত করলে, কলকব্জা হুবহু দুই জায়গা দেখার দেয় — তর্ক (status) আর খাতনা (events) — আর লোককথার লুকোনো কোনো টেনে নেই।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'the-ledger.yaml + working verbs',
      caption: { en: 'One file is the theory of you; the verbs audit the argument, never script it.', bn: 'একটি ফাইল আপনার সম্পর্কে তত্ত্ব; ক্রিয়াগুলো তর্ক নিরীক্ষণ করে, চিত্রনাট্য লেখে না।' },
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ledger-api
  labels: { app: ledger-api, tier: backend, track: stable }
spec:
  replicas: 3
  selector:
    matchLabels: { app: ledger-api }     # subscription: the truth-set is THIS sticker
  template:
    metadata:
      labels: { app: ledger-api, tier: backend }
    spec:
      containers:
        - name: app
          image: myapp@sha256:9f2c…      # the docker manifest's digest, promoted
          resources:
            requests: { cpu: 500m, memory: 256Mi }
            limits: { cpu: "1", memory: 512Mi }
---
# the audit verbs (register-arguing instruments, not scripts):
# kubectl diff -f the-ledger.yaml        → preview the merge BEFORE desire changes
# kubectl apply -f the-ledger.yaml       → desire written, once, with a trail
# kubectl get deploy,rs,pods -l tier=backend
#                                        → the argument, read in four columns
# kubectl get pods -w -l app=ledger-api  → watch the delta settle by itself
# kubectl rollout history deploy/ledger-api
#                                        → revisions: the register's memory of pens
# kubectl label pod x app-               → REMOVE a sticker: out of the truth-set
#                                          within seconds (try it in staging first)`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the ledger bought', bn: 'ফলাফল: খাতা যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'vow signed', bn: 'সইকৃত-শপথ' }, { en: 'the verdict it buys', bn: 'তার কেনা রায়' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['desire in files, apply as the only pen', { en: 'rollbacks = git checkout; audits = git log', bn: 'রোলব্যাক = git checkout; নিরীক্ষণ = git log' }, { en: 'the register reproducible from a folder, forever', bn: 'রওকদারি একটি ফোল্ডার থেকে পুনরুৎপাদনযোগ্য, চিরকাল' }, 'the cluster whose spec lived in three seniors’ memories'],
        ['level-triggered reconciliation', { en: 'missed events priced as minutes of latency, never lost truth', bn: 'হারানো-ইভেন্ট মূল্যায়িত মিনিটের ল্যাটেন্সিতে, হারানো-সত্যে কখনো নয়' }, { en: 'retries free, duplicates impossible by construction', bn: 'পুনঃচেষ্টা মাগনা, সদৃশ গঠনেই অসম্ভব' }, 'the exactly-once folklore scripts that broke at 2 a.m.'],
        ['selectors as the only query grammar', { en: 'reincarnation-transparent services and policies', bn: 'পুনর্জন্ম-স্বচ্ছ সার্ভিস ও নীতি' }, { en: 'name-tracking debt retired across the fleet', bn: 'নাম-টহল-ঋণ বহরজুড়ে অবসরকৃত' }, 'the weekly-renamed label that emptied a service'],
        ['read status before acting', { en: 'diagnostics confined to status + events', bn: 'রোগনির্ণয় সীমাবদ্ধ status + events-এ' }, { en: 'postmortems written from evidence, not vibes', bn: 'পোস্টমর্টেম লেখা প্রমাণ থেকে, অনুভূতি থেকে নয়' }, 'the restart-everything ritual masquerading as triage'],
        ['kubectl diff in CI', { en: 'every register surprise pre-signed by reviewers', bn: 'প্রতি রওকদারি-বিস্ময় পর্যালোচক-সইকৃত' }, { en: 'the merge reviewed like code, because it IS code', bn: 'মিলন পর্যালোচিত কোডরূপে, কারণ তা কোড-ই' }, 'the apply that rewrote prod during a demo'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the label that ate the endpoints', bn: 'ডিবাগ-ফাইল: যে লেবেল এন্ডপয়েন্ট খেয়ে ফেলল' } },
    {
      type: 'para',
      text: {
        en: 'The platform team decided to standardize label names, changing app to application through a rolling deployment. The new deployment rolled out cleanly with pods reporting Ready within 20 minutes. However, live checkout traffic immediately dropped to zero because the Service selector still pointed to { app: ledger-checkout }. The rolling update had replaced each matching pod with an application label, draining the endpoints completely. The team rolled back the release in 90 seconds and updated their migration rules to dual-write labels before modifying selectors.',
        bn: 'প্ল্যাটফর্ম দল লেবেলের নাম app থেকে বদলে application করার সিদ্ধান্ত নেয় এবং রোলিং আপডেট শুরু করে। নতুন ডিপ্লয়মেন্ট ২০ মিনিটের মধ্যে সব পড প্রস্তুত দেখায়। কিন্তু চেকআউট ট্রাফিক তৎক্ষণাৎ শূন্যে নেমে যায়, কারণ সার্ভিস সিলেক্টর তখনও { app: ledger-checkout } খুঁজছিল। রোলিং আপডেটে পুরনো পডগুলো প্রতিস্থাপিত হওয়ায় মেলানো লেবেল আর পাওয়া যায়নি। দল ৯০ সেকেন্ডের মধ্যে পরিবর্তন ফিরিয়ে নেয় এবং পরবর্তীতে সিলেক্টর বদলানোর আগে দ্বৈত-লেবেল লেখার নিয়ম চালু করে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: ledgers with budgets', bn: 'বাস্তব-জগৎ: বাজেটধারী খাতা' } },
    {
      type: 'list',
      items: [
        { en: 'Argo CD and Flux are the ledger granted a second register: the git repository ITSELF becomes a desired row, and the controller argues repo-vs-cluster on a schedule — the debug file’s two-truths bug, monitored productized.', bn: 'Argo CD আর Flux হলো দ্বিতীয়-রওকদারিপ্রাপ্ত খাতা: git-ভান্ডার-নিজে হয়ে যায় একটি কাঙ্ক্ষিত-সারি, আর কন্ট্রোলর তর্ক করে রেপো-বনাম-ক্লাস্টার সময়সূচিতে — ডিবাগ-ফাইলের দুই-সত্য-বাগ, পর্যবেক্ষণযোগ্য-পণ্যকৃত।' },
        { en: 'Terraform/Crossplane speak the same sentence to the cloud beneath the cluster: desired rows for VPCs and databases, controllers forever converging — one grammar up AND down the stack beats five per layer.', bn: 'Terraform/Crossplane ক্লাস্টারের নিচের মেঘে একই বাক্য বলে: VPC আর ডেটাবেসের কাঙ্ক্ষিত-সারি, চিরকাল-অভিসারিকারী কন্ট্রোলার — স্তরজুড়ে একটি ব্যাকরণ জেতে স্তরপ্রতি পাঁচটিকে।' },
        { en: 'etcd compaction and defrag cronjobs are the book’s own housekeeping: the ledger grows immortal tombstones, and major outages have literally been “the history we never pruned” — the volume economy’s prune vow, one octave below.', bn: 'etcd কম্প্যাকশন আর ডিফ্র্যাগ ক্রনজব হলো বইয়ের নিজের গৃহরক্ষণ: খাতা বাড়ে অমর-সমাধিফলকে, আর প্রধান বিভ্রাট হয়েছে আক্ষরিকভাবে “ঐতিহাস্য, যা আমরা কখনো সংক্ষিপ্ত করিনি” — এক অষ্টক নিচে ভলিউম-অর্থনীতির prune-শপথ।' },
        { en: 'Cell-based architectures (Slack’s, Shopify’s) multiply the ledger per failure zone: one control plane becomes many, each cell arguing locally — the CAP lesson deciding that availability of CONVERGENCE outranks consistency of scope.', bn: 'সেল-ভিত্তিক স্থাপত্য (Slack, Shopify) খাতা গুণে দেয় ব্যর্থতা-অঞ্চলপ্রতি: একটি কন্ট্রোল-প্লেন হয়ে যায় অনেক, প্রতি সেল স্থানীয়ভাবে তর্ককারী — CAP-পাঠ স্থির করে, যে অভিসারের প্রাপ্যতা গুরুত্ব পায় সুযোগের সামঞ্জস্যের ঊর্ধ্বে।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the workload grammar', bn: 'পরবর্তী: ওয়ার্কলোড-ব্যাকরণ' } },
    {
      type: 'para',
      text: {
        en: 'The ledger argues; the loops converge; the stickers subscribe. Next lesson: the NAMED SHAPES of work — Deployment’s rollout budgets and undo history, ReplicaSet as the claim queue you never touch directly, DaemonSet (one atom per chair), StatefulSet (numbered identities with stable storage). And Jobs/CronJobs (the queue that Ends). The grammar by which a fleet states WHAT KIND of immortality each workload deserves. Carried sentence: DESIRE IS WRITTEN; REALITY IS CONVERGED.',
        bn: 'খাতা তর্ক করে; লুপ অভিসারিত হয়; স্টিকার সাবস্ক্রাইব করে। পরবর্তী পাঠ: কাজের নামকৃত-আকৃতি — Deployment-এর রোলআউট-বাজেট ও undo-ইতিহাস, ReplicaSet দাবি-সারিরূপে, যা আপনি সরাসরি ছোঁবেন না, DaemonSet (আসনপ্রতি এক পরমাণু), StatefulSet (স্থিতিশীল-সংরক্ষণসহ সংখ্যাযুক্ত-পরিচয়), আর Job/CronJob (সেই সারি, যার সমাপ্তি আছে). যে ব্যাকরণে বহর বর্ণনা করে কোন ওয়ার্কলোড কোন ধরনের অমরতা পাওয়ার যোগ্য। বহনযোগ্য বাক্য: ইচ্ছা লেখা হয়; বাস্তব অভিসারিত হয়।',
      },
    },
  ],
  exercises: [
    { id: 'k8s-ledger-ex1', kind: 'mcq', topic: 'twin registers',
      question: { en: 'kubectl get deploy reads DESIRED 3, READY 1 thirty minutes after apply. Which column is LYING, and where is the truth written?', bn: 'apply-এর ত্রিশ মিনিট পরে kubectl get deploy পড়ে কাঙ্ক্ষিত 3, প্রস্তুত 1। কোন কলাম মিথ্যা বলছে, আর সত্য কোথায় লেখা?' },
      options: [
        { en: 'neither lies — they are the two columns of ONE argument: spec says the register holds your theory (3), status says reality has conceded only one ready atom. The truth of WHY lives in the events transcript (describe) of the two unconceded claims', bn: 'কেউই মিথ্যা বলছে না — তারা এক তর্কের দুই কলাম: spec বলে রওকদারি আপনার তত্ত্ব ধরেছে (3), status বলে বাস্তব কেবল একটি প্রস্তুত-পরমাণু ছাড় দিয়েছে; কেন প্রশ্নের সত্য থাকে দুই অ-ছাড়কৃত-দাবির ইভেন্ট-খাতনায় (describe)' },
        { en: 'spec is stale — refresh with kubectl edit', bn: 'spec বাসি — kubectl edit দিয়ে রিফ্রেশ করুন' },
        { en: 'status counts only tolerated pods', bn: 'status গোনে কেবল সহনপ্রাপ্ত পড' },
        { en: 'the api server caches the deploy for 30 minutes', bn: 'api-সার্ভার ডিপ্লয়মেন্ট ৩০ মিনিট ক্যাশ করে' },
      ],
      answer: 0,
      hint: { en: 'Where does the ledger store its VERDICTS, apart from its numbers?', bn: 'সংখ্যা ছাড়া, রায়গুলো খাতা কোথায় রাখে?' },
      explanation: { en: 'The twin registers are designed to disagree visibly — the argument IS the feature. Numbers name the dispute; events name the mechanism; nothing in the column “lies”.', bn: 'যুগল-রওকদারি দৃশ্যভাবে-অসম্মতির নকশা — তর্কটাই বৈশিষ্ট্য। সংখ্যা বিরোধের নাম বলে; ইভেন্ট প্রক্রিয়াটত্ত্বের; কলামের কিছুই “মিথ্যা” নয়।' },
    },
    { id: 'k8s-ledger-ex2', kind: 'predict', topic: 'level triggering',
      question: { en: 'A network storm makes the deployment-controller miss THREE consecutive watch events about your deployment. Two minutes later the fleet state is…?', bn: 'একটি নেটওয়ার্ক-ঝড়ে ডিপ্লয়মেন্ট-কন্ট্রোলার আপনার ডিপ্লয়মেন্টের টানা তিনটি watch-ইভেন্ট হারায়। দুই মিনিট পর বহরের অবস্থা হলো…?' },
      options: [
        { en: 'fully converged anyway: events are alarm clocks, not news. The next reconcile pass (watch wake or periodic resync, whichever first) re-reads the WHOLE register from its informer cache + relist and files whatever claims the delta demands; the storm bought latency, never a lie', bn: 'তবু সম্পূর্ণ অভিসারিত: ইভেন্ট হলো ঘুমভাঙা-ঘড়ি, সংবাদ নয় — পরের reconcile-পাস (watch-জাগরণ বা পর্যায়ক্রমিক resync, যেটি আগে) পুনঃপড়ে পুরো রওকদারি তার informer-ক্যাশ + রিলিস্ট থেকে আর ডেল্টার দাবি সবই দাখিল করে; ঝড় কিনেছে ল্যাটেন্সি, মিথ্যা কখনো নয়' },
        { en: 'permanently three pods short — events once missed are gone', bn: 'চিরকাল তিন পড কম — একবার-হারানো ইভেন্ট গেলেই গেল' },
        { en: 'duplicated pods from retried events', bn: 'পুনঃচেষ্টাকৃত-ইভেন্ট থেকে সদৃশ পড' },
        { en: 'the controller deadlocked awaiting the missed events', bn: 'হারানো-ইভেন্টের অপেক্ষায় কন্ট্রোলার অচলাবস্থায়' },
      ],
      answer: 0,
      hint: { en: 'What does a controller do whenever it wakes, regardless of what woke it?', bn: 'কন্ট্রোলার জেগে ওঠার পর কী করে, যা-ই তাকে জাগিয়ে থাকুক?' },
      explanation: { en: 'Level triggering is the ledger’s recovery-from-amnesia guarantee: state is re-derived from re-reading, so memory loss degrades to latency. Edge-triggered folklore is what 2 a.m. split-brain pages are made of.', bn: 'Level-triggering হলো খাতার স্মৃতিভ্রষ্টতা-থেকে-উদ্ধারের নিশ্চয়তা: অবস্থা পুনর্গণিত হয় পুনঃপাঠ থেকে, তাই স্মৃতি-ক্ষয় অবনতি পায় ল্যাটেন্সিতে। edge-triggered-লোককথা ভোর-২টার স্প্লিট-ব্রেইন-ডাকের উপাদান।' },
    },
    { id: 'k8s-ledger-ex3', kind: 'mcq', topic: 'apply vs edit',
      question: { en: 'During an incident, an engineer uses kubectl edit to bump memory limits live; CI later runs the scheduled apply from git. What is the final cluster state — and the doctrine that survives?', bn: 'ঘটনার সময় এক প্রকৌশলী kubectl edit দিয়ে লাইভে মেমরি-লিমিট বাড়ান; পরে CI নির্ধারিত apply চালায় git থেকে। চূড়ান্ত-ক্লাস্টার-অবস্থা কী — আর টিকে-থাকা মতবাদ কোনটি?' },
      options: [
        { en: 'the file wins: the three-way merge rewrites spec back to the git truth and the hand-edit evaporates at the next reconcile — the doctrine: hotfixes are PRs fast-tracked, never edits. Incident changes that matter enter the repo the same hour, or they were folklore with a keyboard', bn: 'ফাইল জেতে: তিন-পক্ষ-মিলন spec পুনর্লিখন করে git-সত্যে, আর হাতে-সম্পাদনা পরের reconcile-এ বাষ্পে মেশে — মতবাদ: হটফিক্স হলো দ্রুতগতিকৃত PR, সম্পাদনা কখনো নয়; গুরুত্বপূর্ণ ঘটনা-পরিবর্তন সেই ঘণ্টায় রেপোতে ঢোকে, নয়তো সেগুলো কিবোর্ডসহ-লোককথা ছিল' },
        { en: 'both win — the merge keeps whichever value is larger', bn: 'দুটোই জেতে — মিলন রাখে যেটির মান বড়' },
        { en: 'the edit wins — live state outranks files', bn: 'সম্পাদনা জেতে — জীবন্ত-অবস্থা ফাইলের ঊর্ধ্বে' },
        { en: 'the cluster wedges until someone reapplies', bn: 'কেউ পুনঃপ্রয়োগ না-করা পর্যন্ত ক্লাস্টার আটকে থাকে' },
      ],
      answer: 0,
      hint: { en: 'In the register’s courtroom, which documents testify?', bn: 'রওকদারির আদালতে কোন দলিল সাক্ষ্য দেয়?' },
      explanation: { en: 'The ledger has one theory of you: the last applied file. GitOps exists to make that theory ALSO the repo’s — editing live is borrowing against a debt the next apply collects.', bn: 'খাতার আপনি সম্পর্কে একটি তত্ত্ব: শেষ-প্রয়োগকৃত ফাইল। GitOps থাকে সেই তত্ত্ব রেপোরও হোক বলে — লাইভ-সম্পাদনা হলো এমন ঋণে হাত দেওয়া, যা পরের apply আদায় করে।' },
    },
  ],
  quiz: {
    id: 'k8s-ledger-quiz',
    title: { en: 'The Ledger Exam', bn: 'খাতা-পরীক্ষা' },
    questions: [
      { id: 'dl1', kind: 'mcq', topic: 'reconciliation',
        question: { en: 'Why can a reconcile loop safely run 10,000 times against the same spec?', bn: 'কেন reconcile-লুপ একই spec-এর মুখোমুখি ১০,০০০ বার নিরাপদে চলতে পারে?' },
        options: [
          { en: 'idempotence by construction: each pass reads desired AND observed fresh, computes a delta, and files claims ONLY for what is still owed — run zero times or ten thousand, the terminal state is identical. Retries are free and duplicates are arithmetically impossible, which is what surviving operator-crashes is made of', bn: 'গঠনেই নিরপেক্ষতা: প্রতি পাস পড়ে কাঙ্ক্ষিত আর পর্যবেক্ষণ নতুন করে, ডেল্টা গণে, আর দাখিল করে কেবল যা এখনো বকেয়া — শূন্যবার চালান বা দশ হাজার, চরম-অবস্থা অভিন্ন; পুনঃচেষ্টা মাগনি আর সদৃশ পাটিগণিতে-অসম্ভব, অপারেটর-বিপর্যয়-টেকে-থাকা যা দিয়ে গড়া সেটিই এটি' },
          { en: 'etcd rate-limits the controller to one write per minute', bn: 'etcd কন্ট্রোলারকে মিনিটে এক লেখায় সীমিত করে' },
          { en: 'the api server deduplicates identical requests', bn: 'api-সার্ভার অভিন্ন-অনুরোধ ডেডুপ্লিকেট করে' },
          { en: 'reconcile loops have budgets — after 100 runs they sleep', bn: 'reconcile-লুপের বাজেট আছে — ১০০ রান পর ঘুমায়' },
        ],
        answer: 0,
        hint: { en: 'What does each pass compute, before it issues any verb?', bn: 'কোনো ক্রিয়া জারির আগে প্রতি পাস কী গণনা করে?' },
        explanation: { en: 'The loop owes nothing to its own history: the world itself is the only counter. idempotent-কন্ট্রোল-প্লেনই বহরকে ভোর-৩টায় ডিবাগযোগ্য করে।', bn: 'লুপ তার নিজের ইতিহাসের কাছে ঋণী নয়: জগৎ-ই একমাত্র গণক। idempotent-কন্ট্রোল-প্লেনই বহরকে ভোর-৩টায় ডিবাগযোগ্য করে।' },
      },
      { id: 'dl2', kind: 'mcq', topic: 'labels as schema',
        question: { en: 'Why is renaming a label key across a fleet a SCHEMA MIGRATION, not a cosmetic edit?', bn: 'কেন বহরজুড়ে লেবেল-কী নামবদল একটি স্কিমা-মাইগ্রেশন, অপরিবর্তনীয় সম্পাদনা নয়?' },
        options: [
          { en: 'every service, policy and parent SUBSCRIBES by sticker: rename-is-delete to subscribers until they migrate — the debug file’s zero-truth-set outage; doctrine: add the new key, dual-write, migrate consumers, verify endpoints non-empty at every beat, then retire', bn: 'প্রতি সার্ভিস, নীতি আর অভিভাবক স্টিকারে সাবস্ক্রাইব করে: নামবদল-মানেই-মোছা গ্রাহকদের কাছে, তারা স্থানান্তরিত না-হওয়া পর্যন্ত — ডিবাগ-ফাইলের শূন্য-সত্য-সেট-বিভ্রাট; মতবাদ: নতুন কী যোগ করুন, দ্বৈত-লিখুন, ভোগীদের স্থানান্তর করুন, প্রতি ছন্দে এন্ডপয়েন্ট অ-খালি যাচাই করুন, তারপর অবসর দিন' },
          { en: 'labels are stored compressed — renaming costs a rewrite', bn: 'লেবেল সংরক্ষিত থাকে সংকুচিত — নামবদলে খরচ পুনর্লেখন' },
          { en: 'kubectl forbids label edits on running pods', bn: 'kubectl চলমান-পডে লেবেল-সম্পাদনা নিষেধ করে' },
          { en: 'renames break the image pull cache', bn: 'নামবদল ভাঙে ইমেজ-টান-ক্যাশ' },
        ],
        answer: 0,
        hint: { en: 'Who finds their truth-set EMPTY the moment the sticker’s name changes?', bn: 'স্টিকারের নাম বদলানো মাত্র কার সত্য-সেট খালি হয়ে যায়?' },
        explanation: { en: 'A label is an API surface with the cluster as its largest consumer; treat it with the migration discipline you would afford any contract with ten thousand call sites.', bn: 'লেবেল একটি API-পৃষ্ঠ, যার বৃহত্তম-ভোগী ক্লাস্টার-নিজে; দশ হাজার কল-সাইটের চুক্তিতে যে মাইগ্রেশন-শৃঙ্খলা দিতেন, তা-ই দিন।' },
      },
      { id: 'dl3', kind: 'mcq', topic: 'ownership',
        question: { en: 'What stops two controllers from fighting over the same child object?', bn: 'একই সন্তান-বস্তু নিয়ে দুই কন্ট্রোলারের লড়াই কী থামায়?' },
        options: [
          { en: 'ownerReferences: each child carries the lineage of its claimant parent, controllers refuse to mutate children they do not own, and the garbage collector uses the same chain to bury orphans. No global lock exists anywhere in the design, by design (locks and fleets famously never meet)', bn: 'ownerReferences: প্রতি সন্তান বহন করে তার দাবিকারী-অভিভাবকের বংশপরম্পরা, কন্ট্রোলার না-মালিকানাধীন সন্তান ছোঁতে রাজি নয়, আর আবর্জনা-সংগ্রাহক একই শৃঙ্খল ব্যবহার করে এতিম সমাধি দিতে — বৈশ্বিক-তালা নকশার কোথাওই নেই, নকশাতেই (তালা আর বহর কুখ্যাতভাবে কখনো দেখা করে না)' },
          { en: 'etcd serializes all controller writes through one node', bn: 'etcd সব কন্ট্রোলার-লেখা এক নোড দিয়ে ক্রমায়িত করে' },
          { en: 'controllers elect a leader per namespace', bn: 'কন্ট্রোলার নেমস্পেসপ্রতি নেতা নির্বাচন করে' },
          { en: 'the scheduler holds a global lock during placement', bn: 'স্থাপনের সময় সূচক বৈশ্বিক-তালা ধরে' },
        ],
        answer: 0,
        hint: { en: 'Who buries the orphan when the ReplicaSet dies — and how does it know whose?', bn: 'ReplicaSet মরলে এতিমকে সমাধি কে দেয় — আর কার তা কী করে জানে?' },
        explanation: { en: 'Lineage, not locking: ownerReferences are the sole arbitration the fleet tolerates, which is why controllers can interleave safely and the 3 a.m. deadlock class simply never files.', bn: 'বংশপরম্পরা, তালাবন্ধন নয়: ownerReferences-ই একমাত্র মধ্যস্থতা, যা বহর সহ্য করে, এইজন্যই কন্ট্রোলার নিরাপদে এঁটোবাঁটো কাটতে পারে আর ভোর-৩টার ডেডলক-শ্রেণি কেবল দাখিলই হয় না।' },
      },
      { id: 'dl4', kind: 'mcq', topic: 'events vs resync',
        question: { en: 'Why do informers re-LIST the whole register periodically, even with a healthy watch stream?', bn: 'কেন informer সুস্থ watch-ধারা থাকতেও পর্যায়ক্রমে পুরো রওকদারি পুনঃতালিকা করে?' },
        options: [
          { en: 'paranoia priced in minutes: a silently missed watch event (broker restart, brief partition) would otherwise age forever; the periodic relist + requeue is the level trigger honoring itself on a schedule. Every kinetic truth gets re-derived from the book within minutes. So amnesia has an expiry date, not a career', bn: 'মিনিটে-মূল্যায়িত সন্দেহপ্রবণতা: একটি নিঃশব্দে-হারানো watch-ইভেন্ট (দালাল-পুনঃসূচনা, ক্ষণিক-বিচ্ছিন্নতা) নইলে চিরকাল পুরনো হয়ে যেত; পর্যায়ক্রমিক-রিলিস্ট + পুনঃসারি হলো সময়সূচিতে নিজেকে সম্মানকরী level-trigger — প্রতি গতিশীল-সত্য মিনিটের ভেতরে বই থেকে পুনর্গণিত হয়, তাই স্মৃতিভ্রষ্টতার মেয়াদ আছে, ক্যারিয়ার নয়' },
          { en: 'relisting compacts etcd storage automatically', bn: 'রিলিস্ট সয়ংক্রিয়ভাবে etcd-সংরক্ষণ সংকুচিত করে' },
          { en: 'it exists only for metrics dashboards', bn: 'তা থাকে কেবল মেট্রিক্স-ড্যাশবোর্ডের জন্য' },
          { en: 'kubernetes distrusts caches by policy', bn: 'kubernetes নীতিতে ক্যাশ অবিশ্বাস করে' },
        ],
        answer: 0,
        hint: { en: 'What is the price of trusting ONLY the event stream, for one missed event, for ten years?', bn: 'কেবল ইভেন্ট-ধারায় ভরসার মূল্য কী, একটি হারানো-ইভেন্টে, দশ বছরে?' },
        explanation: { en: 'The resync interval is the ledger’s warranty clause: worst-case truth latency is bounded, named, and reviewable — the difference between a system that SOMETIMES forgets and a system that never hides it.', bn: 'resync-ব্যবধান খাতার ওয়ারেন্টি-ধারা: সবের বড়-সত্য-ল্যাটেন্সি সীমাবদ্ধ, নামকৃত আর পর্যালোচনযোগ্য — মাঝে-মাঝে ভুলে-যাওয়া ব্যবস্থা আর কখনো-লুকায়-না এমন ব্যবস্থার পার্থক্য এটিই।' },
      },
      { id: 'dl5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete the carried sentence: “Desire is written; reality is ___.” (one word)', bn: 'বহনযোগ্য বাক্য পূর্ণ করুন: “ইচ্ছা লেখা হয়; বাস্তব ___ হয়।” (এক শব্দ)' },
        answer: 'converged',
        accept: ['অভিসারিত', 'converged by the loops', 'converging'],
        hint: { en: 'What the loops do to every delta, forever.', bn: 'প্রতি ডেল্টার সাথে লুপগুলো যা করে, চিরকাল।' },
        explanation: { en: 'The two-column truth of every healthy fleet: writing is the human verb, convergence is the machine’s — and the ledger exists to keep those two columns forever reconciling.', bn: 'প্রতি সুস্থ-বহরের দুই-কলাম-সত্য: লেখা মানুষের ক্রিয়া, অভিসারণ যন্ত্রের — আর খাতা আছে সেই দুই কলাম চিরকাল মেলানোর জন্য।' },
      },
    ],
  },
  nextLesson: { slug: 'the-workload-grammar', title: { en: 'The Workload Grammar', bn: 'ওয়ার্কলোড-ব্যাকরণ' } },
};
