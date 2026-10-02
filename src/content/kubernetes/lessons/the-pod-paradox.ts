import type { Lesson } from '../../../lib/types';

export const podParadoxLesson: Lesson = {
  slug: 'the-pod-paradox',
  tech: 'kubernetes',
  title: {
    en: 'Pod Paradox — The docker hub priced one box',
    bn: 'পড-প্যারাডক্স: যে পরমাণু আপনি কখনো একা চালাবেন না'
  },
  summary: {
    en: 'The docker hub priced one box; lesson one prices the FLEET and the atom it is made of. First WHY ONE MACHINE IS A CEILING, NOT A PLAN: a box is a single point of grief — its kernel, its power supply, its Tuesday. And the docker register faithfully logs exits it can do nothing about across machines. A fleet turns machine failure from a funeral into weather. But only if some higher ledger owns every exit on every node. Second THE POD AS THE DEPLOYABLE ATOM: Kubernetes does not schedule containers — it schedules PODS: one or more containers bound inside ONE network namespace with ONE IP, shared volumes and ONE lifecycle, placed on exactly ONE node. The pod is the smallest fate the kernel can honestly keep together. Third THE PARADOX ITSELF: you will write hundreds of pods in your career and spawn almost none of them directly. Pods are cattle-filed by controller parents (Deployments, StatefulSets, Jobs) so that when the atom dies, something exists that can speak for it. Fourth THE CORE VERBS: kubectl get/describe/logs/exec/apply — the table manners of the control plane: apply writes DESIRE, get reads truth, describe reads the event autopsy. Visual lab: the register, the pending queue, and the chairs. Debug file: the pod that would not die — a kubectl delete pod that reappeared with a new name eight times until the team asked WHO files the replacement, and found the Deployment doing its job perfectly. Carried sentence: THE POD IS THE ATOM; THE CLUSTER OWNS THE FLEET.',
    bn: 'docker-হাব মূল্য দিয়েছে একটি বাক্স; প্রথম পাঠ মূল্য দেয় বহরকে আর তার সৃষ্টির পরমাণুকে। প্রথম কেন এক মেশিন হলো ছাদ, পরিকল্পনা নয়: একটি বাক্স হলো দুঃখের এক ঝুলি-বিন্দু — তার কার্নেল, তার বিদ্যুৎ-সরবরাহ, তার মঙ্গলবার — আর docker-রওকদারি বিশ্বস্তভাবে লেখে এমন প্রস্থান, যা অন্য মেশিনজুড়ে কিছুই করতে পারে না. বহর মেশিন-ব্যর্থতাকে শেষকৃত্য থেকে আবহাওয়ায় বদলে দেয়। কিন্তু কেবল যদি কোনো উচ্চতর-খাতা প্রতি মেশিনের প্রতি প্রস্থানের মালিক হয়। দ্বিতীয় ডিপ্লয়যোগ্য-পরমাণুরূপে পড: Kubernetes কন্টেইনার সূচিযুক্ত করে না — পড করে: একটি নেটওয়ার্ক-নেমস্পেসে বাঁধা এক বা একাধিক কন্টেইনার, একটি IP, ভাগাকৃত-ভলিউম আর একটি জীবনচক্রসহ, হুবহু একটি নোডে স্থাপিত; মড-ই সবচেয়ে ছোট নিয়তি, যা কার্নেল সৎভাবে একত্রে রাখতে পারে। তৃতীয় প্যারাডক্স যথাস্বয়ং: জীবনে শত শত পড লিখবেন, কিন্তু হাতে সিএদ করবেন মুঠোভর্তিও না — পড যাচ্ছেতাই-ভাষায় দাখিল হয় কন্ট্রোলার-অভিভাবকে (Deployment, StatefulSet, Job), যাতে পরমাণু মরলে এমন কেউ থাকে, যা তার হয়ে কথা বলতে পারে। চতুর্থ মূল-ক্রিয়া: kubectl get/describe/logs/exec/apply — কন্ট্রোল-প্লেনের টেবিল-শিষ্টাচার: apply লেখে ইচ্ছা, get পড়ে সত্য, describe পড়ে ইভেন্ট-শববিচার। Visual lab: রওকদারি, Pending-সারি, আর আসন। ডিবাগ-ফাইল: যে পড মরত চায় না — একটি kubectl delete pod, যা নতুন নামে আটবার ফিরে এলো, অবশেষে দল জিজ্ঞেস করল কে পুনঃস্থাপন দাখিল করে, আর পেল Deployment তার কাজ নিখুঁতভাবে করছে। বহনযোগ্য বাক্য: পড-ই পরমাণু; বহরের মালিক ক্লাস্টার।',
  },
  minutes: 23,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT a pod is, and what lives above it', bn: 'পড কী, আর তার উপরে কী থাকে' } },
    {
      type: 'para',
      text: {
        en: 'A pod binds one or more containers into a single deployable atom. Inside that boundary, containers share one network namespace, one localhost address, one set of storage volumes, and one joint lifecycle on a single node. Around every atom sits the fleet hierarchy: a Deployment manages the desired replica count and pod template, while its ReplicaSet acts as the reconciler keeping desire and reality aligned. Once you apply the manifest, the control plane supervises the cluster automatically so your workload heals itself without manual rescue.',
        bn: 'একটি পড এক বা একাধিক কন্টেইনারকে একটি একক ডিপ্লয়যোগ্য পরমাণুতে বাঁধে। সেই সীমানার ভেতর কন্টেইনারগুলো ভাগাভাগি করে ১টি নেটওয়ার্ক নেমস্পেস, ১টি লোকালহোস্ট ঠিকানা, ভলিউমের ১টি সাধারণ দৃশ্য এবং ১টি নোডে ১টি অভিন্ন জীবনচক্র। প্রতিটি পরমাণুর চারপাশে থাকে বহরের স্তরক্রম: ডিপ্লয়মেন্ট কাঙ্ক্ষিত রেপ্লিকা-সংখ্যা ও পড-টেমপ্লেট পরিচালনা করে, আর রেপ্লিকাসেট ইচ্ছা ও বাস্তবকে এক রেখায় রাখে। ম্যানিফেস্ট প্রয়োগ করার পর ক্লাস্টারের কন্ট্রোল-প্লেন স্বয়ংক্রিয়ভাবে বহর পরিচালনা করে, ফলে কোনো কন্টেইনার ব্যর্থ হলে তা নিজেই নিরাময় পায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'pod', def: { en: 'The deployable atom: 1+ containers, ONE network namespace, ONE IP, shared volumes, ONE fate on ONE node.', bn: 'ডিপ্লয়যোগ্য-পরমাণু: 1+ কন্টেইনার, একটি নেটওয়ার্ক-নেমস্পেস, একটি IP, ভাগাকৃত-ভলিউম, একটি নোডে এক নিয়তি।' } },
        { term: 'deployment', def: { en: 'Desired replica count + pod template; the parent that speaks for dead atoms and writes rollouts.', bn: 'কাঙ্ক্ষিত-রেপ্লিকা-সংখ্যা + পড-টেমপ্লেট; মৃত-পরমাণুর হয়ে কথা-বলা ও রোলআউট-লেখা অভিভাবক।' } },
        { term: 'replicaset', def: { en: 'The claim queue between desired and observed — files pod births and retirements until the two numbers sign.', bn: 'ইচ্ছা-বাস্তবের মাঝের দাবি-সারি — দুই সংখ্যা সই না-করা পর্যন্ত পড-জন্ম ও অবসর দাখিল করে।' } },
        { term: 'etcd', def: { en: 'The cluster’s register of desire: every apply lands here first; every controller reads from here.', bn: 'ক্লাস্টারের ইচ্ছা-রওকদারি: প্রতি apply প্রথমে এখানে নামে; প্রতি কন্ট্রোলার এখান থেকে পড়ে।' } },
        { term: 'kubelet', def: { en: 'The node’s docker-lesson executor: takes assigned pods, runs them, reports back as heartbeats.', bn: 'নোডের docker-পাঠ-নির্বাহক: বরাদ্দকৃত-পড নেয়, চালায়, হার্টবিটে জবাব দেয়।' } },
        { term: 'labels', def: { en: 'Key=value tags on pods; the ONLY query language the fleet trusts — services and controllers select by them, never by name.', bn: 'পডের কী=মান-ট্যাগ; বহরের বিশ্বস্ত একমাত্র প্রশ্ন-ভাষা — সার্ভিস ও কন্ট্রোলার এতে সিলেক্ট করে, নামে কখনো নয়।' } },
        { term: 'control plane', def: { en: 'API server + etcd + scheduler + controllers: the hive mind that prices every desire into physical concessions.', bn: 'API-সার্ভার + etcd + সূচক + কন্ট্রোলার: সেই জটিল-মগজ, যা প্রতি ইচ্ছাকে শারীরিক-ছাড়ে মূল্য দেয়।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY one box was never the plan', bn: 'কেন একটি বাক্স কখনোই পরিকল্পনা ছিল না' } },
    {
      type: 'para',
      text: {
        en: 'The docker lessons priced the single box beautifully — but stood silent before a fleet, and silence is the bug class this lesson retires. FAILURE ARITHMETIC: a production service on one node has its availability capped by that node’s luck; three replicas across nodes do not remove failure, they RENAME it from outage to weather. But renaming requires an umpire watching every register on every machine. And that is the control plane’s entire job description. ROLLING CHANGE ARITHMETIC: on one box, “deploy the new version” means a window where the OLD is dead and the NEW is not yet alive — downtime by construction. Across a fleet with a parent claimant, change becomes a slow-motion relay: surge one pod Ready, retire one old, never dip below the quorum of healthy atoms. The docker stop/start lesson’s SIGTERM grace finally has somewhere to go. HONEST CAPACITY ARITHMETIC: docker run decided placement by “the box you happened to SSH into”; the scheduler prices placement by requests against actual remaining capacity, by taint against volunteered isolation, by affinity against declared kinship. The pending queue in the lab is this arithmetic made visible: desire exceeds reality’s willingness to concede. And the verdict says WHY in plain terms. The pod’s shared-netns trick is the third dividend: co-located helpers (log shippers, proxies) inherit the atom’s IP instead of negotiating ports across machines — the network bridging lesson, collapsed to localhost and made reliable by fate.',
        bn: 'docker-পাঠগুলো একক-বাক্স মূল্য দিয়েছে সুন্দরভাবে — কিন্তু বহরের সামনে নীরব ছিল, আর নীরবতা-ই সেই বাগ-শ্রেণি, যা এই পাঠ অবসর দেয়। ব্যর্থতা-পাটিগণিত: একটি নোডের প্রোডাকশন-সেবার প্রাপ্যতা সীমিত সেই নোডের ভাগ্যে; নোডজুড়ে তিন রেপ্লিকা ব্যর্থতা সরায় না, তার নাম বদলে দেয় বিভ্রাট থেকে আবহাওয়ায়. কিন্তু নামবদল লাগে এমন মধ্যস্থ, যা প্রতি মেশিনের প্রতি রওকদারি পর্যবেক্ষণ করে, আর সেটিই কন্ট্রোল-প্লেনের পুরো পদবি-বিবরণ। গড়িয়ে-যাওয়া-পরিবর্তন-পাটিগণিত: এক বাক্সে “নতুন সংস্করণ ডিপ্লয়” মানে এমন সময়খণ্ড, যেখানে পুরনো মৃত আর নতুন এখনো সজীব নয় — গঠনেই ডাউনটাইম. অভিভাবক-দাবিকারীসহ বহরে পরিবর্তন হয় ধীরগতির-রিলে: একটি পড Ready হতে সার্জ করুন, একটি পুরনো অবসর দিন, সুস্থ-পরমাণুর সংখ্যাগরিষ্ঠতায় কখনো নামবেন না. Docker stop/start-পাঠের SIGTERM-ছাড় অবশেষে কোথাও যেতে পেল। সৎ-সক্ষমতা-পাটিগণিত: docker run ঠিক করত স্থাপন “আপনি যে বাক্সে হোঁচট খেয়ে SSH করেছিলেন” দিয়ে; সূচক মূল্য দেয় স্থাপন requests বনাম প্রকৃত-অবশিষ্ট-সক্ষমতা, taint বনাম স্বেচ্ছাবদ্ধ-বিচ্ছিন্নতা, affinity বনাম ঘোষিত-আত্মীয়তা দিয়ে. ল্যাবের Pending-সারি হলো এই পাটিগণিত দৃশ্যমানকৃত: ইচ্ছা বাস্তবের-রাজি-হওয়ার-ইচ্ছাকে ছাড়িয়ে গেছে, আর রায় কেন বলে সরল-ভাষায়। পডের ভাগাকৃত-netns কৌশল তৃতীয় লভ্যাংশ: সহ-অবস্থিত-সহায়ক (লগ-পাঠক, প্রক্সি) উত্তরাধিকারে পায় পরমাণুর IP, মেশিনজুড়ে পোর্ট-মীমাংসার বদলে — নেটওয়ার্ক-সেতু-পাঠ, localhost-এ সংকুচিতকৃত আর নিয়তিতে নির্ভরযোগ্যকৃত।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW the atom is run by its parents', bn: 'কীভাবে পরমাণু চলে তার অভিভাবকদের হাতে' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Write the DESIRE once, as YAML: a Deployment with replicas: 3, a pod template carrying image + requests + labels — and apply it: kubectl apply -f ledger-api.yaml. From this moment the register debates reality on your behalf; you have left the chat.', bn: 'ইচ্ছা লিখুন একবার, YAML-এ: replicas: 3-সহ Deployment, পড-টেমপ্লেটে image + requests + labels — আর apply করুন: kubectl apply -f ledger-api.yaml। এই মুহূর্ত থেকে রওকদারি আপনার হয়ে বাস্তবের সাথে তর্ক করে; আপনি চ্যাট ছেড়ে চলে গেছেন।' },
        { en: 'Read the twin registers calmly: kubectl get deploy shows DESIRED vs READY; kubectl get pods -o wide shows where atoms actually sit and on whose chairs. Learn to never read one without the other, they are the two columns of one argument.', bn: 'যুগল-রওকদারি শান্তভাবে পড়ুন: kubectl get deploy দেখায় কাঙ্ক্ষিত বনাম প্রস্তুত; kubectl get pods -o wide দেখায় পরমাণু আসলে কোথায় বসে, কার আসনে — শিখে নিন একটিকে অন্যটি ছাড়া কখনো না পড়া, তারা এক তর্কের দুই কলাম।' },
        { en: 'Read the AUTOPSY when they disagree: kubectl describe pod <id> — the Events section is the register reading its own verdicts aloud (unschedulable taint arithmetic, image pull failures, probe deaths), and it names the mechanism, never a person.', bn: 'মতভেদ হলে শববিচার পড়ুন: kubectl describe pod <id> — Events-খণ্ড হলো নিজের রায় উচ্চস্বরে-পাঠকারী রওকদারি (অনির্ধারণযোগ্য-taint-পাটিগণিত, ইমেজ-টানা-ব্যর্থতা, প্রোব-মৃত্যু), আর তা প্রক্রিয়াটত্ত্বের নাম বলে, কোনো ব্যক্তির নয়।' },
        { en: 'Enter the atom only through doors: kubectl logs <pod> for stdout, kubectl exec -it <pod> -- sh for a shell, kubectl port-forward <pod> 8080:3000 to open localhost into the netns. Remember the pod does not need SSH by design. Every door is an exception to the vow of immutability.', bn: 'পরমাণুতে ঢুকুন কেবল দরজা দিয়ে: stdout-এর জন্য kubectl logs <pod>, শেলের জন্য kubectl exec -it <pod> -- sh, আর localhost-কে netns-এ খুলতে kubectl port-forward <pod> 8080:3000 চালান। মনে রাখুন পডের নকশাতে ssh-এর কোনো প্রয়োজন নেই। প্রতিটি দরজা অপরিবর্তনীয়তা-শপথের নিয়ন্ত্রিত ব্যতিক্রম।' },
        { en: 'Delete atoms to test the PARENT, not the atom: kubectl delete pod <id> — watch a replacement appear with a fresh name while the replica count holds. This is the paradox as a fire drill: the atom is mortal, the desired count is the immortal part your architecture must trust.', bn: 'পরমাণু মুছে পরীক্ষা করুন অভিভাবককে, পরমাণুকে নয়: kubectl delete pod <id> — দেখুন নতুন নামে প্রতিস্থাপন এলো, রেপ্লিকা-সংখ্যা অটল; ফায়ার-ড্রিলরূপে প্যারাডক্স হিসেবে: পরমাণু নশ্বর, কাঙ্ক্ষিত-সংখ্যাই সেই অমর অংশ, যা আপনার স্থাপত্যের বিশ্বাস করার কথা।' },
        { en: 'Ask the register to reproduce you: kubectl get deploy ledger-api -o yaml — everything the cluster believes about your workload, exportable; the discipline is: if the register cannot state you, you were never configured, you were merely visited.', bn: 'রওকদারিকে বলুন আপনাকে পুনঃনির্মাণ করতে: kubectl get deploy ledger-api -o yaml — ক্লাস্টার আপনার ওয়ার্কলোড সম্পর্কে যা-ই বিশ্বাস করে, রপ্তানিযোগ্য; শৃঙ্খলা হলো: রওকদারি আপনাকে বর্ণনা করতে না পারলে, আপনি কখনো কনফিগারই হননি, মাত্র পরিদর্শন-প্রাপ্ত ছিলেন।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the atom in the Kubernetes Visualizer', bn: 'দৃশায়ন: Kubernetes ভিজ্যুয়ালাইজারে পরমাণু' } },
    { type: 'visual', id: 'kubernetes' },
    {
      type: 'para',
      text: {
        en: 'Apply the default deployment and watch the lesson write itself. Three records appear under the Pending queue while the scheduler prices each claim against node capacity and taints. Chairs fill with running pods as the gray NotReady card waits for your crash button. Every caption is the register speaking in first person.',
        bn: 'ডিফল্ট ডিপ্লয়মেন্ট প্রয়োগ করুন এবং পাঠটি কীভাবে কাজ করে তা দেখুন। পেন্ডিং সারিতে ৩টি রেকর্ড আসে যখন শিডিউলার নোড-সক্ষমতা ও টেইন্ট অনুযায়ী দাবি বিচার করে। নোডের আসনগুলো রানিং পডে পূর্ণ হয় এবং ধূসর NotReady কার্ড ক্র্যাশ বোতামের অপেক্ষা করে। প্রতিটি ক্যাপশনে ক্লাস্টারের রওকদারি নিজস্ব ভাষায় ব্যাখ্যা দেয়।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: the plumbing of one atom', bn: 'অভ্যন্তরীণ: একটি পরমাণুর নলব্যবস্থা' } },
    {
      type: 'para',
      text: {
        en: 'Five mechanisms, one fate. THE SANDBOX: every pod is born with a hidden PAUSE container whose only job is to hold the namespaces open — members join ITS network and IPC namespaces. So when your app container restarts, the IP, hostname and routing table survive unchanged. The pod’s identity outlives any single process inside it. THE SCHEDULING MISSEVERYTHING: kube-scheduler does no work on running pods — it exists only for the Pending queue, filtering nodes (requests fit? taints tolerated? ports free?) then scoring survivors (spreading, balancing), and it writes exactly ONE fact back: pod.spec.nodeName. After that the scheduler forgets the pod exists, which is why killing a node does not kill pods “managed by the scheduler” (nothing was). THE KUBELET LOOP: each node’s kubelet watches the API server for pods ASSIGNED TO IT, pulls images via the container runtime, mounts volumes, sets up the sandbox via CNI, and reports status upstream every few seconds. The docker daemon lesson with its soul replaced by an API client. When the apiserver is unreachable the kubelet keeps managing what it already has, which is why the fleet survives a control-plane outage BY READING THE LAST PAGE IT SAW. THE CNI WEAVE: the Container Network Interface plugin allocates the pod’s IP from the cluster CIDR (every pod gets a cluster-routable address. No NAT inside the cluster, a rule the localhost lesson makes sacred) and wires veth pairs between the sandbox and the node. THE NAMESPACE TAXONOMY: the runtime lesson’s namespaces (pid, mount, net) are what make two pods on one node strangers; Kubernetes namespaces (kubectl get ns) are an entirely different census. Bookkeeping borders for RBAC and quotas, sharing no connection beyond the borrowed word. Learn the pair and the word stops lying to you.',
        bn: 'পাঁচ প্রক্রিয়াটত্ত্ব, একটি নিয়তি। স্যান্ডবক্স: প্রতি পড জন্মায় একটি লুকানো PAUSE-কন্টেইনার নিয়ে, যার একমাত্র কাজ নেমস্পেস খুলে রাখা — সদস্যরা যোগ দেয় তার নেটওয়ার্ক ও IPC নেমস্পেসে, তাই আপনার অ্যাপ-কন্টেইনার রিস্টার্ট হলেও IP, হোস্টনাম আর রাউটিং-টেবিল টিকে থাকে অবদলিত. পডের পরিচয় তার ভেতরের যে-কোনো একক-প্রসেসকে পেরিয়ে বাঁচে। সময়সূচীকরণ-সবকিছু: kube-scheduler চলমান-পডে কোনো কাজই করে না — সে থাকে কেবল Pending-সারির জন্য, নোড ছাঁকে (requests মাপ খায়? taint সহ্য? পোর্ট ফাঁকা?) তারপর বেঁচে-যাওয়াদের স্কোর করে (ছত্র, ভারসাম্য), আর হুবহু একটি তথ্য ফেরত লেখে: pod.spec.nodeName — এরপর সূচক পডকে ভুলে যায়, এইজন্যই নোড হত্যা “সূচক-পরিচালিত” পডকে হত্যা করে না (কিছুই ছিল না)। KUBELET-লুপ: প্রতি নোডের kubelet পর্যবেক্ষণ করে API-সার্ভারে তাকে-বরাদ্দকৃত পড, কন্টেইনার-রানটাইম দিয়ে ইমেজ টানে, ভলিউম মাউন্ট করে। CNI দিয়ে স্যান্ডবক্স তোলে, আর কয়েক সেকেন্ড-পরপর অবস্থা জানায় উপরে — docker-ডিমন-পাঠ, যার আত্মা বদলে গেছে API-ক্লায়েন্টে; apiserver হাতছাড়া হলে kubelet যা আছে তা-ই পরিচালনা চালিয়ে যায়। এইজন্নেই বহর কন্ট্রোল-প্লেন-বিভ্রাট টেকে শেষ-পঠিত-পাতা পড়ে। CNI-বোনা: Container Network Interface-প্লাগিন ক্লাস্টার-CIDR থেকে পডের IP বরাদ্দ করে (প্রতি পড পায় ক্লাস্টার-রাউটযোগ্য ঠিকানা — ক্লাস্টারের ভেতরে NAT নেই, এমন নিয়ম যা localhost-পাঠ পবিত্র করে) আর veth-জোড়া বোনে স্যান্ডবক্স-নোডের মাঝে। নেমস্পেস-শ্রেণিবিদ্যা: রানটাইম-পাঠের নেমস্পেস (pid, mount, net) যা এক নোডের দুই পডকে পরস্পরের অপরিচিত রাখে; Kubernetes-নেমস্পেস (kubectl get ns) সম্পূর্ণ আলাদা জনশুমারি — RBAC আর কোটার হিসাবি-সীমানা, ধারকৃত-শব্দ ছাড়া কোনো যোগ নেই। জুটি শিখলে শব্দটি আর আপনাকে মিথ্যা বলবে না।',
      },
    },
    {
      type: 'code',
      lang: 'yaml',
      filename: 'ledger-api.yaml + the verbs',
      caption: { en: 'Desire written once, in the only filing cabinet the fleet respects; the verbs read the twin registers.', bn: 'একবার-লিখিত ইচ্ছা, বহরের সম্মানিত একমাত্র-ফাইলিং-ক্যাবিনেটে; ক্রিয়াগুলো পড়ে যুগল-রওকদারি।' },
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ledger-api
  labels: { app: ledger-api }        # the parent ALSO carries the truth-set tag
spec:
  replicas: 3                        # DESIRE, filed in etcd: three mortal atoms
  selector:
    matchLabels: { app: ledger-api } # the claim queue watches THIS truth-set
  template:
    metadata:
      labels: { app: ledger-api }    # pods are selected by label, never by name
    spec:
      containers:
        - name: app
          image: myapp:1.2           # the docker hub's signed artifact arrives
          ports: [{ containerPort: 3000 }]
          resources:
            requests: { cpu: 500m, memory: 256Mi }   # priced arithmetic, lesson 6
            limits: { cpu: "1", memory: 512Mi }

# kubectl apply -f ledger-api.yaml   →  deployment/ledger-api DESIRE written
# kubectl get deploy ledger-api      →  DESIRED 3 · READY 0 — the argument begins
# kubectl get pods -o wide           →  where the atoms sit, whose chairs
# kubectl describe pod <id>          →  the register reading its verdicts aloud
# kubectl logs <id>                  →  the atom's voice
# kubectl delete pod <id>            →  a fire drill for the parent, not the atom`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the atom bought', bn: 'ফলাফল: পরমাণু যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'vow signed', bn: 'সইকৃত-শপথ' }, { en: 'the verdict it buys', bn: 'তার কেনা রায়' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['pod over raw container', { en: 'one IP/fate per atom; helpers inherit localhost', bn: 'পরমাণুপ্রতি একটি IP/নিয়তি; সহায়ক localhost উত্তরাধিকারে পায়' }, { en: 'co-fated processes scheduled as one fact', bn: 'সহ-নিয়তিকৃত-প্রসেস এক তথ্যরূপে সূচিযুক্ত' }, 'the app shipped without its log agent’s lungs'],
        ['deployment writes desire', { en: 'self-healing: deaths become queue entries, not pages', bn: 'স্বয়ং-নিরাময়: মৃত্যু হয় সারি-এন্ট্রি, জরুরি-ডাক নয়' }, { en: 'desired vs observed debated by machines, forever', bn: 'ইচ্ছা বনাম বাস্তবের বিতর্ক যন্ত্রযুক্ত, চিরকাল' }, 'the 3 a.m. SSH-and-restart ritual'],
        ['labels as the query language', { en: 'selection survives rebirths; names become weather', bn: 'নির্বাচন পুনর্জন্ম পেরিয়ে টেকে; নাম হয় আবহাওয়া' }, { en: 'services/controllers subscribe truth-sets, not identities', bn: 'সার্ভিস/কন্ট্রোলার সাবস্ক্রাইব করে সত্য-সেট, পরিচয় নয়' }, 'scripts that grep pod names and rot weekly'],
        ['kubectl apply over imperative edits', { en: 'reproducibility: the register can restate the fleet', bn: 'পুনরুৎপাদনযোগ্যতা: রওকদারি বহরকে পুনব্যক্ত করতে পারে' }, { en: 'YAML as the single keyboard the fleet answers to', bn: 'YAML হিসেবে একমাত্র কিবোর্ড, যার সাড়া বহর দেয়' }, 'the cluster only one senior can rebuild'],
        ['describe as the autopsy habit', { en: 'every Pending has a named mechanism, not a mystery', bn: 'প্রতি Pending-এর নামকৃত-প্রক্রিয়াটত্ত্ব আছে, রহস্য নয়' }, { en: 'events reviewed as evidence, folklore retired', bn: 'ইভেন্ট পর্যালোচিত প্রমাণরূপে, লোককথা অবসরকৃত' }, 'the restart-everything diagnostics dance'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the pod that would not die', bn: 'ডিবাগ-ফাইল: যে পড মরত চায় না' } },
    {
      type: 'para',
      text: {
        en: 'The incident channel reported “zombie traffic”: the bad deploy had been rolled back an hour ago, yet webhook events kept arriving signed by image myapp:1.9-broken. On-call ran kubectl delete pod ledger-api-x7 and watched it terminate cleanly — then refreshed to find ledger-api-q2 RUNNING, same image, same labels, new name. Deleted again. ledger-api-m9. Eight times across three engineers before someone asked the lesson’s question: WHO FILES THE REPLACEMENT? kubectl get deploy showed DESIRED 3 READY 3 — the rollback PR had been reverted in the repo but NEVER re-applied to the register (the cluster was still holding the OLD desired state, faithfully, forever, as trained). Of course the atom came back: the ReplicaSet is not a panic button, it is an arithmetic parasite of the desired count, and the desired count still said 3 × broken. The fix was the vow: kubectl apply -f ledger-api.yaml with the repaired image (then git-bisect the CI step that skipped apply on rollback), plus a Grafana alert on register-image vs repo-image divergence. Because the real bug was two sources of truth: the repository believed green, the register believed 1.9-broken. And the pods, honest atoms that they are, obeyed the register. Postmortem sentence pinned above the team’s terminals: THE ATOM CANNOT ARGUE WITH ITS PARENT — when the fleet does something insane, find the DESIRED state that asked for it. The register never hallucinates; it merely obeys longer than you remember commanding.',
        bn: 'ঘটনা-চ্যানেলে রিপোর্ট এলো “জম্বি-ট্রাফিক”: খারাপ-ডিপ্লয় ঘণ্টাখানেক আগে রোলব্যাক হয়েছে, তবু webhook-ইভেন্ট আসছে myapp:1.9-broken-ইমেজে সইকৃত। অন-কল চালাল kubectl delete pod ledger-api-x7 আর দেখল তা মার্জিতভাবে বিলুপ্ত হচ্ছে — রিফ্রেশ করতেই ledger-api-q2 RUNNING, একই ইমেজ, একই লেবেল, নতুন নাম। আবার মোছা হলো। ledger-api-m9। তিন প্রকৌশলীর মধ্যে দিয়ে আটবার, তারপর কেউ জিজ্ঞেস করল পাঠের প্রশ্ন: প্রতিস্থাপন কে দাখিল করে? kubectl get deploy দেখাল কাঙ্ক্ষিত 3 প্রস্তুত 3 — রোলব্যাক-পিআর রেপোতে রিভার্ট হয়েছিল, কিন্তু রওকদারিতে কখনোই পুনঃপ্রয়োগ হয়নি (ক্লাস্টার এখনো ধরে রেখেছে পুরনো কাঙ্ক্ষিত-অবস্থা, বিশ্বস্তভাবে, চিরকাল, প্রশিক্ষণমতো)। পরমাণু ফিরে এলোই-বা: ReplicaSet আতঙ্ক-বোতাম নয়, কাঙ্ক্ষিত-সংখ্যার পাটিগণিত-পরজীবী — আর কাঙ্ক্ষিত-সংখ্যা তখনো বলছিল 3 × ভাঙা। মেরামত ছিল শপথ: মেরামতকৃত-ইমেজে kubectl apply -f ledger-api.yaml (তারপর git-bisect সেই CI-ধাপ, যা রোলব্যাকে apply এড়িয়ে গেছিল), যোগ Grafana-সতর্কতা রওকদারি-ইমেজ বনাম রেপো-ইমেজ দারুণতার উপর. কারণ প্রকৃত-বাগ ছিল দুই সত্যের উৎস: ভান্ডার বিশ্বাস করত সবুজ, রওকদারি বিশ্বাস করত 1.9-broken, আর পড, সৎ-পরমাণু হিসেবে, বাধ্য হলো রওকদারির। পোস্টমর্টেম-বাক্য দলের টার্মিনালের উপর গেঁথে দেওয়া: পরমাণু তার অভিভাবকের সাথে তর্ক করতে পারে না — বহর পাগলামি করলে, সেই কাঙ্ক্ষিত-অবস্থা খুঁজুন, যা তা চেয়েছিল। রওকদারি কখনো বিভ্রম দেখে না; এটি কেবল আপনার মনে-পড়ার চেয়ে বেশিক্ষণ বাধ্য থাকে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: atoms with citizenship', bn: 'বাস্তব-জগৎ: নাগরিকত্বধারী পরমাণু' } },
    {
      type: 'list',
      items: [
        { en: 'Service meshes (Istio/Linkerd) are the atom extended, not replaced: an envoy sidecar joins the pod’s netns so mTLS and telemetry ship INSIDE the address — the shared-localhost vow with a badge.', bn: 'সার্ভিস-মেশ (Istio/Linkerd) হলো প্রসারিত পরমাণু, প্রতিস্থাপিত নয়: একটি envoy-sidecar পডের netns-এ যোগ দেয়, যাতে mTLS আর টেলিমেট্রি ঠিকানার ভেতরে থেকে যায় — ব্যাজধারী ভাগাকৃত-localhost-শপথ।' },
        { en: 'Knative/OpenFaaS mount the atom on a scale-to-zero claim queue — the deployment disappears, the DESIRE registers on first request: the paradox taken to its logical shore (atoms conjured per invocation).', bn: 'Knative/OpenFaaS পরমাণুকে বসায় অদৃশ্য-স্কেল-দাবি-সারিতে — ডিপ্লয়মেন্ট মিলেয় যায়, কাঙ্ক্ষিত-অবস্থা প্রথম-অনুরোধে দাখিল হয়: যুক্তির তীরে-নেওয়া প্যারাডক্স (আহ্বানপ্রতি সৃষ্ট-পরমাণু)।' },
        { en: 'Node-problem detectors and deschedulers exist BECAUSE the scheduler forgets after binding — post-placement drift (hot nodes, changed taints) needs a second broom; the lesson’s “scheduler forgets” sentence has an industry.', bn: 'Node-problem-ডিটেক্টর আর descheduler আছে কারণ সূচক বাঁধার পর ভুলে যায় — স্থাপন-পরবর্তী প্রবাহ (উত্তপ্ত-নোড, বদলে-যাওয়া taint) চায় দ্বিতীয় ঝাড়ু। পাঠের “সূচক ভুলে যায়” বাক্যটির একটি শিল্প আছে।' },
        { en: 'GitOps controllers (Argo CD) are the debug file productized: they diff repo-vs-register continuously and page the human WHO saw two truths diverge — before the eighth zombie pod.', bn: 'GitOps-কন্ট্রোলার (Argo CD) হলো পণ্যকৃত ডিবাগ-ফাইল: তারা অবিরত রেপো-বনাম-রওকদারি diff করে আর সেই মানুষকে ডাকে, যে দুই-সত্যের দারুণতা দেখল — অষ্টম-জম্বি-পডের আগে।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the twin registers, named', bn: 'পরবর্তী: যুগল-রওকদারি, নামকৃত' } },
    {
      type: 'para',
      text: {
        en: 'The atom exists, its parents file claims, the chairs fill. Next lesson: the machinery of DISAGREEMENT — desired state in etcd versus observed state on nodes, the reconciliation loop as the engine that never sleeps, labels and selectors formalized as the fleet’s only sentence grammar. And why apply beats edit as a theory of change. Carried sentence: THE POD IS THE ATOM; THE CLUSTER OWNS THE FLEET.',
        bn: 'পরমাণু আছে, তার অভিভাবক দাবি দাখিল করে, আসন ভরে যায়। পরবর্তী পাঠ: মতভেদের কলকব্জা — etcd-তে কাঙ্ক্ষিত-অবস্থা বনাম নোডে পর্যবেক্ষিত-বাস্তব, reconciliation-লুপ অঘুমন্তায় ইঞ্জিনরূপে, লেবেল ও সিলেক্টর আনুষ্ঠানিককৃত বহরের একমাত্র-বাক্যবিন্যাসরূপে, আর পরিবর্তন-তত্ত্ব হিসেবে apply কেন edit-কে জেতে। বহনযোগ্য বাক্য: পড-ই পরমাণু; বহরের মালিক ক্লাস্টার।',
      },
    },
  ],
  exercises: [
    {
      id: 'k8s-pod-ex1', kind: 'mcq', topic: 'pod anatomy',
      question: { en: 'Your app container and its log-shipper sidecar must share one IP and one /logs directory, and restart together. What is the smallest Kubernetes object that lawfully packages them?', bn: 'আপনার অ্যাপ-কন্টেইনার আর তার লগ-শিপার-sidecar-কে ভাগ করতে হবে একটি IP আর একটি /logs-ডিরেক্টরি, আর পুনঃসূচনা হতে হবে একসাথে। ক্ষুদ্রতম কোন Kubernetes-বস্তু আইনত তাদের মোড়ক্ব করে?' },
      options: [
        { en: 'one pod with two containers: members of a pod share ONE network namespace (one IP/localhost), pod-level volumes, and ONE lifecycle scheduled on ONE node — co-fated by design', bn: 'দুই কন্টেইনারের একটি পড: পড-সদস্য ভাগ করে একটি নেটওয়ার্ক-নেমস্পেস (একটি IP/localhost), পড-স্তরের ভলিউম আর একটি নোডে-স্থাপিত একটি জীবনচক্র — নকশাতেই সহ-নিয়তিকৃত' },
        { en: 'two pods pinned by affinity rules', bn: 'affinity-নিয়মে পিনকৃত দুই পড' },
        { en: 'one deployment with replicas: 2', bn: 'replicas: 2-সহ একটি ডিপ্লয়মেন্ট' },
        { en: 'a daemonset — it runs on every node', bn: 'একটি daemonset — তা প্রতি নোডে চলে' },
      ],
      answer: 0,
      hint: { en: 'Where do IP, localhost, volumes and lifecycle all become ONE?', bn: 'কোথায় IP, localhost, ভলিউম আর জীবনচক্র সব হয় ONE?' },
      explanation: { en: 'The pod is the atom precisely because the kernel can promise co-location only inside one netns+mount envelope. Replica sets copy ATOMS side by side, they do not fuse fates.', bn: 'পড-ই পরমাণু হুবহু এইজন্যে, যে কার্নেল সহ-অবস্থান প্রতিশ্রুতি দিতে পারে কেবল একটি netns+mount-খামের ভেতরে। রেপ্লিকা-সেট পাশাপাশি পরমাণু কপি করে, নিয়তি মিশিয়ে নয়।' },
    },
    {
      id: 'k8s-pod-ex2', kind: 'predict', topic: 'the paradox',
      question: { en: 'A deployment asks for 3 replicas; you kubectl delete pod one of them at random. What is the pod COUNT 30 seconds later — and why could it never be 2?', bn: 'একটি ডিপ্লয়মেন্ট চায় 3 রেপ্লিকা; আপনি এলোমেলোভাবে kubectl delete pod করলেন একটি। ৩০ সেকেন্ড পর পড-সংখ্যা কত — আর কেন তা 2 হতেই পারে না?' },
      options: [
        { en: '3: the ReplicaSet compares desired (3, in etcd) with observed (2) and creates a replacement. Deleting an atom tests the parent, and the parent never forgives an arithmetic deficit.', bn: '3: ReplicaSet কাঙ্ক্ষিত (3, etcd-তে) ও পর্যবেক্ষিত (2) তুলনা করে নতুন পড তৈরি করে। পরমাণু মোছা অভিভাবকের পরীক্ষা, আর অভিভাবক পাটিগণিতের ঘাটতি কখনো রাখে না।' },
        { en: '2: the delete won, that is what delete means', bn: '2: মোছাই জিতেছে, মোছা মানেই এটা' },
        { en: '4: the controller over-corrects to be safe', bn: '4: কন্ট্রোলার নিরাপত্তায় অতি-সংশোধন করে' },
        { en: 'it depends on whether the pod was Ready', bn: 'তা নির্ভর করে পডটি Ready ছিল কি না' },
      ],
      answer: 0,
      hint: { en: 'Which register number did kubectl delete actually rewrite — none, or one the controller re-reads?', bn: 'kubectl delete আসলে কোন রওকদারি-সংখ্যা পুনর্লিখন করল — কোনোটিই নয়, নাকি এমনটি, যা কন্ট্রোলার পুনঃপাঠ করে?' },
      explanation: { en: 'Imperative pod deletion rewrites nothing in the DESIRE column; parents re-read desire on every loop and settle the delta. The debug file’s zombie pods obeyed exactly this paragraph.', bn: 'আদেশাত্মক পড-মোছা ইচ্ছা-কলামে কিছুই পুনর্লিখন করে না; অভিভাবক প্রতি লুপে ইচ্ছা পুনঃপাঠ করে আর ডেল্টা মেটায়। ডিবাগ-ফাইলের জম্বি-পড হুবহু এই অনুচ্ছেদই মেনেছিল।' },
    },
    {
      id: 'k8s-pod-ex3', kind: 'mcq', topic: 'kubectl verbs',
      question: { en: 'A pod has been Pending for 12 minutes. Which verb gives you the MECHANISM (not a guess), and what does it read?', bn: 'একটি পড ১২ মিনিট ধরে Pending। কোন ক্রিয়া দেয় প্রক্রিয়াটত্ত্ব (অনুমান নয়), আর তা কী পড়ে?' },
      options: [
        { en: 'kubectl describe pod — the Events section is the register reading its own scheduler verdicts aloud: unschedulable taint arithmetic, image pull errors, quota refusals, each with a named mechanism', bn: 'kubectl describe pod — Events-খণ্ড হলো নিজের সূচক-রায় উচ্চস্বরে-পাঠকারী রওকদারি: অনির্ধারণযোগ্য-taint-পাটিগণিত, ইমেজ-টান-ত্রুটি, কোটা-প্রত্যাখ্যান, প্রতিটি নামকৃত-প্রক্রিয়াটত্ত্বসহ' },
        { en: 'kubectl logs — the app must be logging its own slowness', bn: 'kubectl logs — অ্যাপ নিজেই তার ধীরতা লগ করছে নিশ্চয়ই' },
        { en: 'kubectl exec into the pod and inspect', bn: 'পডে kubectl exec করে পরিদর্শন' },
        { en: 'delete and recreate — fresh counts cure everything', bn: 'মুছে পুনঃসৃষ্টি — নতুন গণনা সব চিকিৎসা করে' },
      ],
      answer: 0,
      hint: { en: 'Pending is a scheduler sentence, not an app sentence — who keeps the court transcript?', bn: 'Pending হলো সূচকের বাক্য, অ্যাপের নয় — আদালত-খাতনা কার কাছে থাকে?' },
      explanation: { en: 'logs and exec need a RUNNING container — Pending means none exists. describe reads the control plane’s own diary, where every refusal is recorded with its arithmetic.', bn: 'logs আর exec চায় চলমান-কন্টেইনার — Pending মানে কিছুই নেই। describe পড়ে কন্ট্রোল-প্লেনের নিজের দিনলিপি, যেখানে প্রতি প্রত্যাখ্যান তার পাটিগণিতসহ লেখা।' },
    },
  ],
  quiz: {
    id: 'k8s-pod-quiz',
    title: { en: 'The Atom Exam', bn: 'পরমাণু-পরীক্ষা' },
    questions: [
      {
        id: 'pp1', topic: 'why fleets',
        kind: 'mcq',
        question: { en: 'What does a fleet change about machine failure that one box cannot — and what hinges on it?', bn: 'মেশিন-ব্যর্থতা সম্পর্কে বহর কী বদলে দেয়, যা একটি বাক্স পারে না — আর কী তার উপর ঝুলছে?' },
        options: [
          { en: 'failure is RENAMED from outage to weather: replicas across nodes mean a single death loses no desire — but only because a control plane watches every register on every node and re-files the deficit. Without the higher ledger, three boxes are just three separate funerals', bn: 'ব্যর্থতার নামবদল হয় বিভ্রাট থেকে আবহাওয়ায়: নোডজুড়ে রেপ্লিকা মানে একটি মৃত্যুতে কোনো ইচ্ছা হারায় না — তবে কেবল তাই, যে কন্ট্রোল-প্লেন প্রতি নোডের প্রতি রওকদারি পর্যবেক্ষণ করে ও ঘাটতি পুনদাখিল করে; উচ্চতর-খাতা ছাড়া তিন বাক্স মাত্র তিনটি পৃথক শেষকৃত্য' },
          { en: 'failure becomes impossible — replicas never all die', bn: 'ব্যর্থতা অসম্ভব হয় — রেপ্লিকা কখনো একসাথে মরে না' },
          { en: 'failure becomes slower — hardware improves per node', bn: 'ব্যর্থতা ধীর হয় — নোডপ্রতি হার্ডওয়্যার উন্নত হয়' },
          { en: 'nothing changes; kubernetes is docker with more pages', bn: 'কিছুই বদলায় না; kubernetes হলো বেশি পাতার docker' },
        ],
        answer: 0,
        hint: { en: 'Who has to KNOW about the exit before weather can replace the funeral?', bn: 'আবহাওয়া শেষকৃত্যের জায়গা নেওয়ার আগে প্রস্থানটি কে জানতে বাধ্য?' },
        explanation: { en: 'The fleet’s promise is not immortality — it is that deaths land in a ledger someone reads. The reconciliation loop is priced in lesson 2; here we price WHY it had to exist.', bn: 'বহরের প্রতিশ্রুতি অমরতা নয় — এটি যে মৃত্যু পড়ে এমন খাতায়, যা কেউ পড়ে। reconciliation-লুপ মূল্যায়িত পাঠ ২-এ; এখানে আমরা মূল্য দিই কেন তার থাকতেই হতো।' },
      },
      {
        id: 'pp2', topic: 'pod internals',
        kind: 'mcq',
        question: { en: 'Why can two containers in one pod call each other at 127.0.0.1, while two containers in two pods cannot?', bn: 'কেন একটি পডের দুই কন্টেইনার একে-অপরকে 127.0.0.1-এ ডাকতে পারে, তবে দুই পডের দুই কন্টেইনার পারে না?' },
        options: [
          { en: 'pod members JOIN one shared network namespace (the hidden pause container holds it open): one loopback, one IP table, one port space. Pods are strangers to each other because each has its own netns with its own loopback; localhost is a namespace vow, not a machine vow', bn: 'পড-সদস্য যোগ দেয় একটি ভাগাকৃত-নেটওয়ার্ক-নেমস্পেসে (লুকানো pause-কন্টেইনার তা খোলা রাখে): একটি লুপব্যাক, একটি IP-টেবিল, একটি পোর্ট-স্থান — পড পরস্পরের অপরিচিত, কারণ প্রতিটির নিজস্ব netns আর নিজস্ব লুপব্যাক; localhost হলো নেমস্পেস-শপথ, মেশিন-শপথ নয়' },
          { en: 'the api server proxies localhost between members', bn: 'api-সার্ভার সদস্যদের মাঝে localhost প্রক্সি করে' },
          { en: 'localhost is a cluster-wide anycast name', bn: 'localhost একটি ক্লাস্টার-ব্যাপী anycast-নাম' },
          { en: 'containers in a pod share one filesystem root', bn: 'এক পডের কন্টেইনার একটি ফাইলসিস্টেম-মূল ভাগ করে' },
        ],
        answer: 0,
        hint: { en: 'The docker bridging lesson priced localhost per box — what did the pod do to the box?', bn: 'docker-সেতু-পাঠ বাক্সপ্রতি localhost মূল্য দিয়েছিল — বাক্সটির সঙ্গে পড কী করল?' },
        explanation: { en: 'The atom’s whole trick is namespace sharing: net (and optionally ipc) become communal inside one boundary, which is why the pause container exists at all — someone must sign the lease.', bn: 'পরমাণুর মূল কল হলো নেমস্পেস-ভাগাকরণ: net (চাইলে ipc) এক সীমানার ভেতরে সাম্প্রদায়িক হয় — এইজন্যই pause-কন্টেইনারের অস্তিত্ব — কাউকে-ই তো ইজারায় সই করতে হবে।' },
      },
      {
        id: 'pp3', topic: 'parents > atoms',
        kind: 'mcq',
        question: { en: 'Why is “just run the pod YAML directly” a production anti-pattern?', bn: 'কেন “সরাসরি পড-YAML চালু করেই ফেলো” প্রোডাকশন-প্রতিনিদর্শন-বিরোধী?' },
        options: [
          { en: 'a bare pod owns its own death: no parent re-files it after eviction, node drain, or crash, and no controller owns its rollouts — the paradox is that pods are precious records and expendable cattle at once. The controller hierarchy exists precisely to hold the “re-file when reality concedes” debt every workload secretly owes', bn: 'উলঙ্গ-পড তার নিজের মৃত্যুর মালিক: বহিষ্কার, নোড-ড্রেন বা বিপর্যয়ের পর কোনো অভিভাবক তা পুনদাখিল করে না, কোনো কন্ট্রোলার তার রোলআউটের মালিক নয় — প্যারাডক্স হলো পড একইসাথে মূল্যবান রেকর্ড আর নিষ্পত্তিযোগ্য-জানোয়ার. কন্ট্রোলার-স্তরক্রম হুবহু সেই “বাস্তব রাজি হলে পুনদাখিল” ঋণ ধারার জন্যই, যা প্রতি ওয়ার্কলোড গোপনে ঋণী' },
          { en: 'pod YAML compiles slower than deployment YAML', bn: 'পড-YAML কম্পাইল হয় ধীরে, ডিপ্লয়মেন্ট-YAML থেকে' },
          { en: 'services refuse to select bare pods', bn: 'সার্ভিস উলঙ্গ-পড নির্বাচন করতে রাজি নয়' },
          { en: 'bare pods cannot use volumes', bn: 'উলঙ্গ-পড ভলিউম ব্যবহার করতে পারে না' },
        ],
        answer: 0,
        hint: { en: 'When the atom dies at 3 a.m., whose job is it to speak for it?', bn: 'ভোর ৩টায় পরমাণু মরলে, তার হয়ে কথা বলার কাজ কার?' },
        explanation: { en: 'The atom is the unit of fate, not the unit of ownership. Every production workload owes a tax — re-filing, rolling, evicting — that only a claimant parent can pay.', bn: 'পরমাণু হলো নিয়তির একক, মালিকানার নয়। প্রতি প্রোডাকশন-ওয়ার্কলোড ঋণী একটি কর — পুনদাখিল, গড়িয়ে-যাওয়া, বহিষ্কার — যা শুধু দাবিকারী-অভিভাবক পরিশোধ করতে পারে।' },
      },
      {
        id: 'pp4', topic: 'the registers',
        kind: 'mcq',
        question: { en: 'kubectl get deploy shows DESIRED 3 READY 1. Which sentence is TRUE about cause?', bn: 'kubectl get deploy দেখাচ্ছে কাঙ্ক্ষিত 3 প্রস্তুত 1। কারণ সম্পর্কে কোন বাক্য সত্য?' },
        options: [
          { en: 'Two columns of one argument disagree. Desire has conceded 3 claims, but reality sustains only 1 ready chair. The cause lives in the events of the unready atoms: unschedulable capacity, image pull failures, or an unready probe.', bn: 'এক তর্কের দুই কলামে মতভেদ দেখা দিয়েছে। ইচ্ছা ৩টি দাবি অনুমোদন করলেও বাস্তবে মাত্র ১টি প্রস্তুত আসন টিকে আছে। কারণ লুকিয়ে আছে অপ্রস্তুত পডের ইভেন্টে: ধারণক্ষমতার ঘাটতি, ইমেজ টানায় ব্যর্থতা কিংবা ব্যর্থ প্রোব।' },
          { en: 'the deployment is broken and must be deleted', bn: 'ডিপ্লয়মেন্ট ভাঙা, মুছতেই হবে' },
          { en: 'ready count lags by design and never means anything', bn: 'প্রস্তুত-গণনা নকশাতেই পিছিয়ে, কোনো অর্থই নয়' },
          { en: 'etcd is out of sync with the api server', bn: 'etcd api-সার্ভারের সাথে অসমলয়ে' },
        ],
        answer: 0,
        hint: { en: 'DESIRED vs READY is WHERE the argument shows — which verb reads the argument itself?', bn: 'কাঙ্ক্ষিত বনাম প্রস্তুত হলো তর্ক যেখানে দেখায় — তর্ক নিজে কোন ক্রিয়া পড়ে?' },
        explanation: { en: 'The twin registers are the ultimate “symptom vs mechanism” poster: numbers name the dispute, events name the mechanism. Folklore diagnostics restart everything; ledger diagnostics describe.', bn: 'যুগল-রওকদারি চূড়ান্ত “লক্ষণ বনাম প্রক্রিয়াটত্ত্ব” পোস্টার: সংখ্যা বিরোধের নাম বলে, ইভেন্ট প্রক্রিয়াটত্ত্বের। লোককথা-রোগনির্ণয় সব পুনঃসূচনা করে; খাতা-রোগনির্ণয় describe করে।' },
      },
      {
        id: 'pp5', kind: 'fill', topic: 'the carried sentence',
        question: { en: 'Complete the lesson’s carried sentence: “The pod is the atom; the ___ owns the fleet.” (one word)', bn: 'পাঠের বহনযোগ্য-বাক্য পূর্ণ করুন: “পড-ই পরমাণু; বহরের মালিক ___।” (এক শব্দ)' },
        answer: 'cluster',
        accept: ['ক্লাস্টার', 'the cluster'],
        hint: { en: 'The supervisor that never goes home.', bn: 'সেই তত্ত্বাবধায়ক, যা কখনো ঘরে ফেরে না।' },
        explanation: { en: 'One sentence, two addresses: the atom is WHERE the work sits; the cluster is WHO owes the debt after the atom dies.', bn: 'এক বাক্য, দুই ঠিকানা: পরমাণু হলো কাজ যেখানে বসে; ক্লাস্টার হলো পরমাণু মরার পর ঋণের বাকি কে।' },
      },
    ],
  },
  nextLesson: { slug: 'the-desired-state-ledger', title: { en: 'The Desired-State Ledger: two registers, one argument', bn: 'কাঙ্ক্ষিত-অবস্থা-রওকদারি: দুই খাতা, এক তর্ক' } },
};
