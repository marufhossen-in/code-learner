import type { Lesson } from '../../../lib/types';

export const layerLedgerLesson: Lesson = {
  slug: 'the-layer-ledger',
  tech: 'docker',
  title: {
    en: 'Layer Ledger — First WHAT an image actually is, not a file, not',
    bn: 'লেয়ার-খাতা: ইমেজ, ট্যাগ, ডাইজেস্ট — প্রতি বাইট হিসাবকৃত'
  },
  summary: {
    en: 'Lesson two stamped layers one instruction at a time; lesson three opens the vault they are filed into. First WHAT an image actually is: not a file, not a VM-in-a-box — a manifest (JSON describing config + an ORDERED list of layer hashes) pointing at a stack of immutable, content-addressed layers. A container is that stack plus one thin writable top. Second the ADDRESS DISCIPLINE: a tag (node:20-alpine) is a mutable human pointer that can be re-pointed by anyone with push rights; a digest (sha256:…) is the content hash that can never lie. The same convenience-vs-truth fork the dependency ledger priced with lockfiles, here wearing registry clothes. Third the ECONOMY: layers are shared — pull node:20-alpine once and every app image that starts FROM it reuses those bytes on disk and on the wire. Pushes ship only the layers the registry lacks; dedup is the default, not an optimization. Fourth the COMMAND SURFACE: pull by tag and by digest, tag as renaming a pointer, inspect as reading the manifest, history as reading the stack, save/load for air-gapped estates, prune as the hygiene vow. Fifth the LAB view: the same instruction-order replay, now read as ledger rows — every CACHED line is a ledger row reused, every stamp a new row appended. Debug file: the :latest split-brain — two production nodes, two different images, both honestly named latest, one deploy-by-digest vow away from ever recurring.',
    bn: 'দ্বিতীয় পাঠ লেয়ার ছাপল একটি করে নির্দেশনায়; তৃতীয় পাঠ খুলে দেয় সেই ভল্ট, যেখানে তারা দাখিল। প্রথম ইমেজ আসলে কী: ফাইল নয়, বাক্সবন্দি-VM নয় — একটি ম্যানিফেস্ট (কনফিগ + লেয়ার-হ্যাশের এক সুবিন্যস্ত-তালিকা বর্ণনাকারী JSON), যা নির্দেশ করে অপরিবর্তনীয় কন্টেন্ট-ঠিকানাযুক্ত লেয়ারের স্তূপ; কন্টেইনার হলো সেই স্তূপ যোগ একটি পাতলা লিখন-মুকুট। দ্বিতীয় ঠিকানা-শৃঙ্খলা: ট্যাগ (node:20-alpine) পরিবর্তনযোগ্য মানব-পয়েন্টার, পুশ-অধিকারী যে কেউ তা ঘুরিয়ে দিতে পারে; ডাইজেস্ট (sha256:…) হলো কন্টেন্ট-হ্যাশ, যা কখনো মিথ্যা বলতে পারে না — সুবিধা-বনাম-সত্যের সেই একই দ্বন্দ্ব, যা নির্ভরতা-খাতা লকফাইলে মূল্য দিয়েছে, এখানে রেজিস্ট্রি-পোশাকে। তৃতীয় অর্থনীতি: লেয়ার ভাগাকৃত — node:20-alpine একবার টানলে তার FROM-দিয়ে শুরু প্রতি অ্যাপ-ইমেজ ডিস্কে ও তারে সেই বাইট পুনব্যবহার করে; পুশ পাঠায় কেবল সেই লেয়ার, যা রেজিস্ট্রির কাছে নেই; ডিডিউপ হলো ডিফল্ট, অপ্টিমাইজেশন নয়। চতুর্থ কমান্ড-পৃষ্ঠ: ট্যাগে ও ডাইজেস্টে pull, পয়েন্টার-নামান্তর হিসেবে tag, ম্যানিফেস্ট-পাঠ হিসেবে inspect, স্তূপ-পাঠ হিসেবে history, বায়ুবিচ্ছিন্ন-এস্টেটের জন্য save/load, স্বাস্থ্যবিধি-শপথ হিসেবে prune। পঞ্চম ল্যাব-দৃশ্য: সেই একই নির্দেশনা-ক্রম-পুনরাবৃত্তি, এবার খাতা-সারিরূপে পঠিত — প্রতি CACHED-লাইন পুনব্যবহৃত খাতা-সারি, প্রতি ছাপ নতুন সারি-সংযোজন। ডিবাগ-ফাইল: :latest বিভক্ত-মস্তিষ্ক — দুই প্রোডাকশন-নোড, দুই ভিন্ন ইমেজ, দুটোই সৎভাবে latest নামকৃত, একটি ডাইজেস্টে-ডিপ্লয়-শপথ দূরে অনাবৃত্তির।',
  },
  minutes: 22,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT an image is, precisely', bn: 'ইমেজ কী, নির্ভুলভাবে' } },
    {
      type: 'para',
      text: {
        en: 'A Docker image consists of two primary artifacts. First is a manifest, a JSON document detailing the runtime configuration and an ordered list of layer digests. Second are the image layers, each representing a compressed archive of filesystem differences from the layer below. Because layers are content-addressed by their SHA-256 hash, every byte is completely immutable. Tags provide human-readable references, while digests provide tamper-proof cryptographic proofs of image contents.',
        bn: 'একটি Docker ইমেজ মূলত দুটি উপাদান নিয়ে গঠিত। প্রথমটি হলো একটি ম্যানিফেস্ট, যা রানটাইম কনফিগারেশন এবং লেয়ার ডাইজেস্টের একটি সুবিন্যস্ত তালিকা বহন করে। দ্বিতীয়টি হলো ইমেজ লেয়ারসমূহ, যার প্রতিটিতে নিচের লেয়ারের সাপেক্ষে ফাইলসিস্টেমের পরিবর্তনের সংকুচিত রেকর্ড থাকে। প্রতিটি লেয়ার SHA-256 হ্যাশ দ্বারা চিহ্নিত হওয়ায় এর বিষয়বস্তু সম্পূর্ণ অপরিবর্তনীয় থাকে। ট্যাগ মানুষের সুবিধার জন্য নাম প্রদান করে, আর ডাইজেস্ট নিশ্চিত করে অপরিবর্তনীয় সত্যতা।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'image', def: { en: 'A manifest plus an ordered stack of immutable layers — a frozen template, never a running thing.', bn: 'একটি ম্যানিফেস্ট যোগ অপরিবর্তনীয় লেয়ারের সুবিন্যস্ত-স্তূপ — হিমায়িত টেমপ্লেট, চলমান বস্তু কখনোই নয়।' } },
        { term: 'layer', def: { en: 'A compressed tar of filesystem diffs, content-addressed by sha256; shared between every image that contains it.', bn: 'ফাইলসিস্টেম-ডিফের সংকুচিত tar, sha256-এ কন্টেন্ট-ঠিকানাযুক্ত; তা-ধারণকারী প্রতি ইমেজের মাঝে ভাগাকৃত।' } },
        { term: 'manifest', def: { en: 'The JSON ledger: runtime config + the ordered digest list. The digest of THIS file is the image digest.', bn: 'JSON-খাতা: রানটাইম-কনফিগ + সুবিন্যস্ত ডাইজেস্ট-তালিকা। এই ফাইলেরই ডাইজেস্ট হলো ইমেজ-ডাইজেস্ট।' } },
        { term: 'tag', def: { en: 'A mutable registry pointer (name:tag → manifest). For humans; anyone with push rights can re-point it.', bn: 'পরিবর্তনযোগ্য রেজিস্ট্রি-পয়েন্টার (name:tag → ম্যানিফেস্ট)। মানুষের জন্য; পুশ-অধিকারী যে কেউ ঘুরিয়ে দিতে পারে।' } },
        { term: 'digest', def: { en: 'The sha256 of the manifest — the only address that cannot lie. Production deployments are signed with this.', bn: 'ম্যানিফেস্টের sha256 — একমাত্র ঠিকানা, যা মিথ্যা বলতে পারে না। প্রোডাকশন-ডিপ্লয়মেন্ট এর দিয়েই সই হয়।' } },
        { term: 'registry', def: { en: 'The layer bank: pull ships only unknown layers, pushed stacks land deduplicated by hash.', bn: 'লেয়ার-ব্যাংক: pull পাঠায় কেবল অচেনা লেয়ার, পুশকৃত-স্তূপ পড়ে হ্যাশে-ডিডিউপকৃত।' } },
        { term: 'writable top layer', def: { en: 'The one mutable layer, added per container at boot; dies on rm. Everything durable must live BELOW or BESIDE it.', bn: 'একমাত্র পরিবর্তনযোগ্য লেয়ার, বুটে কন্টেইনারপ্রতি যুক্ত; rm-এ মরে। টেকসই সবকিছু থাকতে হবে তার নিচে বা পাশে।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY the layer economy is worth a whole lesson', bn: 'কেন লেয়ার-অর্থনীতি একটি পূর্ণ পাঠ প্রাপ্য' } },
    {
      type: 'para',
      text: {
        en: 'Three compound whys, all arithmetic. WHY-ONE, THE WIRE: without layers every pull ships a full filesystem — a gigabyte per app per machine per deploy. With layers, a redeploy after one source-line change ships the one changed layer (often kilobytes), because the base layers are already content-present everywhere you deploy. This is the same paced-delivery math the middleware vow priced for responses, replayed for ARTIFACTS. WHY-TWO, THE DISK: fifty containers from one image cost one image — the read-only stack is shared and only the writable tops grow. Without the union design, container density would be VM density and the entire first lesson would collapse. WHY-THREE, THE TRUTH REGISTER: content addressing converts provenance from policy into physics — you cannot ship the wrong bytes while naming them correctly, because the name (digest) IS the bytes. And the tag/digest split prices a permanent spectra: tags for velocity in development, digests for custody in production. The lockfile argument of hub lesson six, arrived at from a second direction, as every honest ledger eventually is.',
        bn: '৩টি চক্রবৃদ্ধি-কেন, সবই পাটিগণিত। ১ নম্বর, তার: লেয়ার ছাড়া প্রতি pull পাঠায় পুরো ফাইলসিস্টেম — প্রতি ডিপ্লয়ে প্রতি মেশিনে প্রতি অ্যাপে এক গিগাবাইট; লেয়ারসহ, একটি সোর্স-লাইন বদলে পুনঃডিপ্লয় পাঠায় সেই ১টি বদলানো লেয়ার (প্রায়ই কিলোবাইট), কারণ ভিত্তি-লেয়ার আপনার সব ডিপ্লয়-স্থলে ইতিমধ্যে কন্টেন্ট-উপস্থিত। প্রতিক্রিয়ার জন্য মিডলওয়্যার-শপথ যে গতিনির্ধারিত-বিলম্বন-গণিত মূল্য দিয়েছে, তারই পুনরাবৃত্তি নথির জন্য। ২ নম্বর, ডিস্ক: একটি ইমেজ থেকে পঞ্চাশ কন্টেইনারের খরচ একটি-ই ইমেজ — রিড-অনলি স্তূপ ভাগাকৃত আর বাড়ে কেবল লিখন-মুকুট; ইউনিয়ন-নকশা ছাড়া কন্টেইনার-ঘনত্ব হত VM-ঘনত্ব, আর পুরো প্রথম পাঠ ভেঙে পড়ত। ৩ নম্বর, সত্য-রওকদারি: কন্টেন্ট-ঠিকানা রূপান্তর করে উৎপত্তিকে নীতি থেকে পদার্থবিদ্যায় — সঠিক নাম দিয়ে ভুল বাইট পাঠানো আপনি পারেন না, কারণ নাম (ডাইজেস্ট)-ই বাইট; আর ট্যাগ/ডাইজেস্ট-বিভাজন মূল্য দেয় এক স্থায়ী-স্পেকট্রাম: ডেভেলপমেন্টে বেগের জন্য ট্যাগ, প্রোডাকশনে তত্ত্বাবধানের জন্য ডাইজেস্ট. হাবের ৬ নম্বর পাঠবিহিত লকফাইল-যুক্তি, ২য় দিক থেকে পৌঁছানো, প্রতি সৎ খাতা যেমনটি অবশ্যম্ভাবী।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to walk the ledger by hand', bn: 'কীভাবে খাতা নিজ হাতে হাঁটবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Inventory honestly: docker images lists pointers, not truth — the IMAGE ID column is the local digest; docker image inspect myapp:1.2 reads the full manifest (config plus the ordered RootFS diff_ids). This file answers “what exactly am I about to run”.', bn: 'সৎভাবে তালিকা করুন: docker images তালিকাভুক্ত করে পয়েন্টার, সত্য নয় — IMAGE ID-কলাম-ই স্থানীয় ডাইজেস্ট; docker image inspect myapp:1.2 পড়ে পুরো ম্যানিফেস্ট (কনফিগ যোগ সুবিন্যস্ত RootFS diff_ids) — এই ফাইল উত্তর দেয় “আমি হুবহু কী চালাতে চলেছি”।' },
        { en: 'Pull both ways, on purpose: docker pull node:20-alpine (tag — convenient, mutable, fine for laptops) and docker pull node:20-alpine@sha256:… (digest — the byte-exact artifact, the only pull CI should ever do). Watch the “already exists” lines: those are ledger rows reused, not work repeated.', bn: 'ইচ্ছাকৃতভাবে দুইভাবে টানুন: docker pull node:20-alpine (ট্যাগ — সুবিধাজনক, পরিবর্তনযোগ্য, ল্যাপটপে যথেষ্ট) আর docker pull node:20-alpine@sha256:… (ডাইজেস্ট — বাইট-নির্ভুল নথি, CI-এর একমাত্র প্রাপ্য pull); লক্ষ করুন “already exists”-লাইনগুলো: সেগুলো পুনব্যবহৃত খাতা-সারি, পুনকৃত কাজ নয়।' },
        { en: 'Tag as pointer arithmetic, not birth: docker tag myapp:1.2 registry.internal/team/myapp:1.2 renames NOTHING — it writes a second pointer to the same manifest. Delete one pointer (docker rmi myapp:1.2) and the bytes survive under the other until the last pointer falls.', bn: 'ট্যাগ করুন পয়েন্টার-পাটিগণিত হিসেবে, জন্ম হিসেবে নয়: docker tag myapp:1.2 registry.internal/team/myapp:1.2 কিছুই নামান্তর করে না — তা লেখে একই ম্যানিফেস্টে দ্বিতীয় পয়েন্টার; একটি পয়েন্টার মুছলে (docker rmi myapp:1.2) বাইট টিকে থাকে অন্যটিতে, শেষ পয়েন্টার পড়া পর্যন্ত।' },
        { en: 'Read the stack before trusting it: docker history myapp:1.2 walks the layers newest-first with sizes — a 400MB layer from “RUN curl … | sh” is an invoice line item you can now NAME. Docker image prune and docker system df close the hygiene loop tickets get written about.', bn: 'ভরসার আগে স্তূপ পড়ুন: docker history myapp:1.2 হেঁটে যায় লেয়ার, নতুন-আগে, আকারসহ — “RUN curl … | sh” থেকে আসা 400MB-লেয়ার হলো চালানের একটি লাইন-আইটেম, যা আপনি এখন নাম বলতে পারেন। docker image prune আর docker system df বন্ধ করে স্বাস্থ্যবিধি-চক্র, যা নিয়ে টিকিট লেখা হয়।' },
        { en: 'Travel air-gapped when the ledger must: docker save myapp:1.2 -o myapp.tar && docker load -i myapp.tar moves the whole stack as one archive — the offline registry. And for pushing, tag the registry path first (registry.host/namespace/name:tag) — push semantics reject anything without a host-prefixed home.', bn: 'খাতার প্রয়োজনে বায়ুবিচ্ছিন্ন-ভ্রমণ: docker save myapp:1.2 -o myapp.tar && docker load -i myapp.tar স্থানান্তর করে পুরো স্তূপ এক সংরক্ষণাগারে — অফলাইন-রেজিস্ট্রি; আর পুশের জন্য আগে রেজিস্ট্রি-পথে ট্যাগ করুন (registry.host/namespace/name:tag). পুশ-শব্দার্থ হোস্ট-উপসর্গযুক্ত-ঠিকানা ছাড়া সব প্রত্যাখ্যান করে।' },
        { en: 'Sign the deploy line with digest: in any script or pipeline, resolve tag → digest first (docker inspect --format={{index .RepoDigests 0}} myapp:1.2), then deploy the digest — the debug file below is the invoice for skipping this one-liner.', bn: 'ডিপ্লয়-পঙ্‌ক্তিতে ডাইজেস্টে সই করুন: যে-কোনো স্ক্রিপ্ট বা পাইপলাইনে, আগে ট্যাগ → ডাইজেস্ট রূপান্তর করুন (docker inspect --format={{index .RepoDigests 0}} myapp:1.2), তারপর ডাইজেস্টই ডিপ্লয় করুন — নিচের ডিবাগ-ফাইল হলো এই এক-লাইন এড়ানোর চালান।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the ledger in the lab', bn: 'দৃশায়ন: ল্যাবে খাতা' } },
    { type: 'visual', id: 'docker' },
    {
      type: 'para',
      text: {
        en: 'The Docker Lab replay from lesson one is this ledger read aloud: every instruction is an append, every CACHED verdict is a row reused without re-stamping, and every miss is a new content-addressed row the registry would accept. Run the same Dockerfile through a second build and count the reused rows — that count IS your next pull time estimate for machines that already hold the base.',
        bn: 'প্রথম পাঠের Docker Lab-পুনরাবৃত্তি হলো এই খাতাই ধরে পড়া: প্রতি নির্দেশনা একটি সংযোজন, প্রতি CACHED-রায় পুনর্ছাপ ছাড়া পুনব্যবহৃত সারি, আর প্রতি মিস একটি নতুন কন্টেন্ট-ঠিকানাযুক্ত সারি, যা রেজিস্ট্রি গ্রহণ করবে। একই Dockerfile দ্বিতীয় বিল্ডে চালিয়ে পুনব্যবহৃত-সারি গুনুন — সেই গণনা-ই আপনার পরের pull-সময়-অনুমান, এমন মেশিনের জন্য যার কাছে ভিত্তি ইতিমধ্যে আছে।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: the union mount and the content address', bn: 'অভ্যন্তরীণ: ইউনিয়ন-মাউন্ট আর কন্টেন্ট-ঠিকানা' } },
    {
      type: 'para',
      text: {
        en: 'At boot the engine does one filesystem trick and one accounting trick. THE TRICK: overlayfs presents N read-only layer directories as ONE merged tree — reads fall through to the topmost layer containing the file; writes trigger copy-on-write (the file is copied UP to the writable top, edited there. And the lower copy remains pristine — deletion writes a whiteout marker). This is why a container feels writable while its image stays frozen, and why 50 containers share one stack. THE ACCOUNTING: each layer tar is compressed, hashed, and stored under its hash; the manifest lists those hashes in order; the manifest is hashed to get the image digest — one hash tree covering all bytes. So verification of the whole stack costs one digest comparison. The registry protocol mirrors the same arithmetic: manifest negotiation first, then only the missing layer blobs stream — on the wire, “already exists” is the protocol literally reciting the ledger back to you.',
        bn: 'বুটে ইঞ্জিন করে একটি ফাইলসিস্টেম-ছল আর একটি হিসাব-ছল। ছল: overlayfs উপস্থাপন করে Nটি রিড-অনলি লেয়ার-ডিরেক্টরি একক মিশ্র-বৃক্ষরূপে — পাঠ নেমে যায় ফাইলধারী সর্বোচ্চ লেয়ারে; লেখা চালু করে copy-on-write (ফাইল অনুলিপিত হয় উপরে, লিখন-মুকুটে, সেখানে সম্পাদিত, আর নিচের অনুলিপি থাকে অকলুষিত — মুছে-ফেলা লেখে whiteout-চিহ্ন). এইজন্যই কন্টেইনার অনুভূত হয় লিখনযোগ্য, ইমেজ হিমায়িত থাকা সত্ত্বেও, আর এইজন্যই ৫০ কন্টেইনার এক স্তূপ ভাগ করে। হিসাব: প্রতি লেয়ার tar সংকুচিত, হ্যাশকৃত আর তার হ্যাশ-নামে সংরক্ষিত; ম্যানিফেস্ট তালিকাভুক্ত করে সেই হ্যাশ সুবিন্যস্তভাবে; ম্যানিফেস্ট হ্যাশ হয়ে পায় ইমেজ-ডাইজেস্ট — সব বাইট আচ্ছাদনকারী একটি হ্যাশ-বৃক্ষ, তাই পুরো স্তূপের যাচাই খরচ এক ডাইজেস্ট-তুলনা। রেজিস্ট্রি-প্রোটোকল প্রতিবিম্বিত করে একই পাটিগণিত: আগে ম্যানিফেস্ট-আলোচনা, তারপর কেবল অনুপস্থিত লেয়ার-ব্লব স্রোতকৃত — তারে “already exists” হলো প্রোটোকলের আক্ষরিক খাতা-ধরে-পড়া আপনার কাছে।',
      },
    },
    {
      type: 'code',
      lang: 'bash',
      filename: 'ledger-walk.sh',
      caption: { en: 'Read the ledger by hand: pointer arithmetic, digest custody, and the stack read newest-first.', bn: 'খাতা নিজ হাতে পড়ুন: পয়েন্টার-পাটিগণিত, ডাইজেস্ট-তত্ত্বাবধান, আর নতুন-আগে স্তূপ-পাঠ।' },
      code: `# the three names of one artifact
docker pull node:20-alpine
docker tag  node:20-alpine reg.internal/team/node:20-alpine     # second POINTER, zero new bytes
docker inspect --format='{{index .RepoDigests 0}}' node:20-alpine
#   → node:20-alpine@sha256:9f2c…   ← the ONLY name that cannot lie

# read the stack, newest-first, sizes as invoice line items
docker history node:20-alpine --no-trunc
#   IMAGE        CREATED      SIZE   COMMAND
#   4d9a…        3 days ago   7MB    /bin/sh -c apk add --no-cache …   ← a layer you can NAME
#   <missing>    3 days ago   51MB   /bin/sh -c #(nop) CMD ["node"]    ← ledger row, config-only

# digest custody for the deploy line
DIGEST=$(docker inspect --format='{{index .RepoDigests 0}}' myapp:1.2)
echo "deploying $DIGEST"          # every environment now runs THIS byte-set, no adjectives
docker save myapp:1.2 -o myapp.tar   # air-gapped travel: the whole stack, one archive`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the ledger bought', bn: 'ফলাফল: খাতা যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'name signed', bn: 'সইকৃত-নাম' }, { en: 'the vow it carries', bn: 'তার বহনকৃত-শপথ' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['manifest + ordered layers', { en: 'the image is a (hash-addressed) document, not a folder', bn: 'ইমেজ হলো (হ্যাশ-ঠিকানাযুক্ত) দলিল, ফোল্ডার নয়' }, { en: 'immutability converted from discipline into addressing', bn: 'অপরিবর্তনীয়তা রূপান্তরিত শৃঙ্খলা থেকে ঠিকানা-পদ্ধতিতে' }, '“the image changed somehow” as a bug class'],
        ['tag as pointer', { en: 're-pointable by design; velocity at dev time', bn: 'নকশায়ই পুনঃনির্দেশযোগ্য; ডেভ-কালে বেগ' }, { en: 'renames ship zero bytes; rmi of one pointer loses nothing', bn: 'নামান্তর শূন্য বাইট পাঠায়; এক পয়েন্টারের rmi কিছু হারায় না' }, 'the duplicate-upload terror of the naive mental model'],
        ['digest at deploy', { en: 'the only name that cannot lie', bn: 'একমাত্র নাম, যা মিথ্যা বলতে পারে না' }, { en: 'staging == production byte-set, provable in one comparison', bn: 'স্টেজিং == প্রোডাকশন বাইট-সেট, এক তুলনায় প্রমাণযোগ্য' }, 'the :latest split-brain of the debug file'],
        ['pull dedup', { en: 'only unknown layers travel', bn: 'কেবল অচেনা লেয়ার ভ্রমণ করে' }, { en: 'redeploy after one source line ships kilobytes, not gigabytes', bn: 'এক সোর্স-লাইন পরে পুনঃডিপ্লয় পাঠায় কিলোবাইট, গিগাবাইট নয়' }, 'the full-filesystem-per-deploy tax'],
        ['history + prune', { en: 'every layer is a named invoice line item', bn: 'প্রতি লেয়ার একটি নামকৃত চালান-লাইন' }, { en: 'fat layers get owners, deleted the day they are named', bn: 'মোটা লেয়ার মালিক পায়, নামকৃত দিনেই বিলুপ্ত' }, '“docker is just big” as folklore'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the :latest split-brain', bn: 'ডিবাগ-ফাইল: :latest বিভক্ত-মস্তিষ্ক' } },
    {
      type: 'para',
      text: {
        en: 'Friday, 6 p.m.: the deploy pipeline “ships 1.4.2” by pushing myapp:latest from CI, then rolling node-A and node-B with docker-compose pull && up -d. Sunday: half the traffic behaves like 1.4.2, half like 1.4.1 — same tag, same compose file, same everything. The ledger reads the truth in one minute: docker inspect on each node shows TWO different digests behind the one tag — node-B pulled BEFORE the push, node-A after. The tag did exactly what tags do (re-pointed under whoever was not looking), and both nodes were honest. The postmortem line the whole hub now carries: a tag is a question, a digest is an answer. Fix shipped in one commit — CI resolves and deploys myapp@sha256:… explicitly, and the registry gets immutable-tags enabled so latest can never be re-pointed silently again. Total cost of the class: one deploy-by-tag habit; total price of the vow: one line of YAML.',
        bn: 'শুক্রবার, সন্ধ্যা ৬টা: ডিপ্লয়-পাইপলাইন “পাঠাল ১.৪.২” CI থেকে myapp:latest পুশ করে, তারপর নোড-A আর নোড-B ঘোরায় docker-compose pull && up -d দিয়ে। রবিবার: অর্ধেক ট্রাফিক আচরণ করে ১.৪.২-এর মতো, অর্ধেক ১.৪.১-এর — একই ট্যাগ, একই কম্পোজ-ফাইল, সব একই। খাতা এক মিনিটে সত্য পড়ে: প্রতি নোডে docker inspect দেখায় এক ট্যাগের আড়ালে দুই ভিন্ন ডাইজেস্ট — নোড-B টেনেছে পুশের আগে, নোড-A পরে. ট্যাগ ঠিক সেটাই করেছে, যা ট্যাগ করে (অনেকে না দেখা অবস্থায় পুনঃনির্দেশিত), আর দুই নোডই ছিল সৎ। যে পোস্টমর্টেম-পঙ্‌ক্তি পুরো হাব এখন বহন করে: ট্যাগ হলো প্রশ্ন, ডাইজেস্ট হলো উত্তর। এক কমিটে মেরামত পাঠানো হলো — CI স্পষ্টভাবে myapp@sha256:… রূপান্তর ও ডিপ্লয় করে, আর রেজিস্ট্রিতে চালু হলো অপরিবর্তনীয়-ট্যাগ, যাতে latest আর কখনো নীরবে ঘোরানো না যায়। শ্রেণির মোট খরচ: ট্যাগে-ডিপ্লয়-একটি-অভ্যাস; শপথের মোট মূল্য: YAML-এর এক লাইন।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: ledgers in bank vaults', bn: 'বাস্তব-জগৎ: ব্যাংক-ভল্টে খাতা' } },
    {
      type: 'list',
      items: [
        { en: 'Registries act as deduplication banks in production environments. Harbor and ECR store each layer once per hash, and garbage collection removes only unreferenced layers with zero manifests.', bn: 'রেজিস্ট্রি প্রোডাকশন পরিবেশে ডিডিউপ্লিকেশনের ব্যাংক হিসেবে কাজ করে। Harbor ও ECR প্রতি লেয়ারকে হ্যাশ অনুসারে একবার সংরক্ষণ করে এবং গার্বেজ কালেক্টর কেবল রেফারেন্সহীন লেয়ারগুলো মুছে দেয়।' },
        { en: 'Kubernetes pulls by digest whenever the manifest says so: imagePullPolicy plus the @sha256 form is the cluster-scale version of this lesson; a pod spec with a digest is a deploy line with custody.', bn: 'Kubernetes ডাইজেস্টে টানে যখনই ম্যানিফেস্ট তাই বলে: imagePullPolicy যোগ @sha256-রূপ হলো এই পাঠের ক্লাস্টার-স্কেল-সংস্করণ; ডাইজেস্টসহ পড-স্পেক হলো তত্ত্বাবধানসহ ডিপ্লয়-পঙ্‌ক্তি।' },
        { en: 'Layer squashing (docker build --squash, or export/import) trades the debug-readable ledger for one opaque row — occasionally right for hostile shared bases, usually invoiced later when a vulnerability scan cannot attribute the byte to a layer.', bn: 'লেয়ার-চ্যাপ্টাকরণ (docker build --squash, বা export/import) বিনিময় করে ডিবাগ-পাঠযোগ্য খাতা এক অস্বচ্ছ-সারির জন্য — মাঝে মাঝে ঠিক, বিপজ্জনক ভাগাকৃত-ভিত্তির জন্য, সাধারণত পরে চালানিত, যখন দুর্বলতা-স্ক্যান কোনো বাইটকে লেয়ারে দায়ী করতে পারে না।' },
        { en: 'Air-gapped estates (defense, hospitals, banks) run save/load as the standard promotion path: images are audited BY the tar they travel in — the ledger as luggage, signed per hop.', bn: 'বায়ুবিচ্ছিন্ন-এস্টেট (প্রতিরক্ষা, হাসপাতাল, ব্যাংক) চালায় save/load-কে প্রমিত পদোন্নতি-পথ হিসেবে: ইমেজ নিরীক্ষিত হয় সেই tar দিয়েই, যাতে তা ভ্রমণ করে — মালপত্ররূপে খাতা, প্রতি হপে সইকৃত।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the runtime register — the container as a lifecycle object', bn: 'পরবর্তী: রানটাইম-রওকদারি — জীবনচক্র-বস্তুরূপে কন্টেইনার' } },
    {
      type: 'para',
      text: {
        en: 'The ledger now knows what an image IS. The next lesson boots it: run, start, stop, restart, rm. The container as a stateful object with a birth certificate (the flags you pass once), a working life (logs, exec, inspect), an exit code that always tells the truth. And a PID 1 whose signal duties the node production ledger already made law. Carried sentence: THE LAYER OWNS EVERY BYTE.',
        bn: 'খাতা এখন জানে ইমেজ কী। পরের পাঠ তা বুট করবে: run, start, stop, restart, rm — জন্মসনদসহ (একবার দেওয়া পতাকা) কর্মজীবনসহ (logs, exec, inspect) সর্বদা-সত্যকথক প্রস্থান-কোডসহ অবস্থাবান-বস্তুরূপে কন্টেইনার, আর একটি PID 1, যার সিগন্যাল-দায় node-এর প্রোডাকশন-খাতা ইতিমধ্যে আইন করেছে। বহনযোগ্য বাক্য: লেয়ার প্রতি বাইটের মালিক।',
      },
    },
  ],
  exercises: [
    {
      id: 'docker-layer-ex1', kind: 'mcq', topic: 'tag vs digest',
      question: { en: 'CI pulls myapp:1.2 and tests it; production later pulls myapp:1.2 and behaves differently. Nothing else changed. Which ledger row explains the divergence?', bn: 'CI টানল myapp:1.2 আর পরীক্ষা করল; প্রোডাকশন পরে টানল myapp:1.2 আর ভিন্ন আচরণ করল। আর কিছুই বদলায়নি। কোন খাতা-সারি বিভেদ ব্যাখ্যা করে?' },
      options: [
        { en: 'the tag was re-pointed between the two pulls: a tag is a mutable pointer to a manifest — both pulls were honest, the POINTER moved; the digest each pull resolved to is the row that proves it', bn: 'দুই pull-এর মাঝে ট্যাগ পুনঃনির্দেশিত হয়েছে: ট্যাগ হলো ম্যানিফেস্টে পরিবর্তনযোগ্য পয়েন্টার — দুই pull-ই সৎ ছিল, পয়েন্টার সরেছে; প্রতি pull যে ডাইজেস্টে রূপান্তর করেছে, সেই সারিই প্রমাণ' },
        { en: 'layers were deduplicated incorrectly on the production host', bn: 'প্রোডাকশন-হোস্টে লেয়ার ভুলভাবে ডিডিউপ হয়েছে' },
        { en: 'the writable top layer of CI leaked into the image', bn: 'CI-এর লিখন-মুকুট ইমেজে চুইয়ে গেছে' },
        { en: 'the registry rewrote the manifest to save space', bn: 'জায়গা বাঁচাতে রেজিস্ট্রি ম্যানিফেস্ট পুনর্লিখেছে' },
      ],
      answer: 0,
      hint: { en: 'Who can re-point a name, and what name cannot be re-pointed?', bn: 'কে একটি নাম ঘুরিয়ে দিতে পারে, আর কোন নাম ঘোরানো যায় না?' },
      explanation: { en: 'Tags are pointers; digests are hashes. A re-pushed 1.2 moves the tag while the digest history tells the truth — exactly the :latest debug file in miniature. Deploy lines that sign digests make this class impossible.', bn: 'ট্যাগ হলো পয়েন্টার; ডাইজেস্ট হলো হ্যাশ। পুনঃপুশকৃত 1.2 ট্যাগ সরায়, ডাইজেস্ট-ইতিহাস সত্য বলে — হুবহু :latest ডিবাগ-ফাইলের ক্ষুদ্ররূপ। ডাইজেস্টে সইকরা ডিপ্লয়-পঙ্‌ক্তি এই শ্রেণিকে অসম্ভব করে।' },
    },
    {
      id: 'docker-layer-ex2', kind: 'predict', topic: 'layer dedup',
      question: { en: 'A host already has node:20-alpine pulled. You pull myapp:1.0 built FROM node:20-alpine with 3 app layers of 2MB each. What travels the wire — and why?', bn: 'এক হোস্টে node:20-alpine ইতিমধ্যে টানা আছে। আপনি টানুন myapp:1.0, যা node:20-alpine ভিত্তিক, ২MB-করে ৩ অ্যাপ-লেয়ারসহ। তারে কী ভ্রমণ করবে — আর কেন?' },
      options: [
        { en: 'only the 3 app layers (~6MB) plus the manifest: the registry negotiates the manifest first, sees which layer hashes the client already holds, and streams only the missing blobs — “already exists” lines are the ledger being recited', bn: 'কেবল ৩টি অ্যাপ-লেয়ার (~৬MB) যোগ ম্যানিফেস্ট: রেজিস্ট্রি আগে ম্যানিফেস্ট আলোচনা করে, দেখে ক্লায়েন্টের কাছে কোন লেয়ার-হ্যাশ আছে, আর স্রোত পাঠায় কেবল অনুপস্থিত ব্লব — “already exists”-লাইনগুলো হলো ধরে-পড়া খাতা' },
        { en: 'the full image including node:20-alpine, every time', bn: 'প্রতিবার পুরো ইমেজ, node:20-alpine-সহ' },
        { en: 'nothing — the pull is skipped entirely', bn: 'কিছুই না — pull পুরোপুরি বাদ পড়ে' },
        { en: 'only the manifest, layers are rebuilt locally', bn: 'কেবল ম্যানিফেস্ট, লেয়ার স্থানীয়ভাবে পুনর্নির্মিত হয়' },
      ],
      answer: 0,
      hint: { en: 'Content addressing means the registry can ask “which hashes do you already own?”', bn: 'কন্টেন্ট-ঠিকানা মানে রেজিস্ট্রি জিজ্ঞেস করতে পারে “কোন হ্যাশ তোমার কাছে আছে?”' },
      explanation: { en: 'The pull protocol is the ledger on the wire: manifest first, then only unknown layer blobs. Shared bases are the economy — one node:20-alpine on disk and on the wire serves every app that declared it.', bn: 'pull-প্রোটোকল হলো তারে খাতা: আগে ম্যানিফেস্ট, তারপর কেবল অচেনা লেয়ার-ব্লব। ভাগাকৃত ভিত্তিই অর্থনীতি — ডিস্কে ও তারে একটি node:20-alpine সেবা করে প্রতি অ্যাপকে, যা তা ঘোষণা করেছে।' },
    },
    {
      id: 'docker-layer-ex3', kind: 'mcq', topic: 'the writable top',
      question: { en: 'Inside a running container you write 500MB to /tmp, then docker rm the container. What happens to the image, and where did the 500MB live?', bn: 'চলমান কন্টেইনারের ভেতরে /tmp-তে 500MB লিখলেন, তারপর docker rm করলেন। ইমেজের কী হয়, আর 500MB কোথায় ছিল?' },
      options: [
        { en: 'the image is untouched (its layers are immutable); the 500MB lived in the container’s thin writable top layer via copy-on-write, and rm deleted exactly that one layer — the image stack keeps zero record of the writes', bn: 'ইমেজ অকলুষিত (তার লেয়ার অপরিবর্তনীয়); 500MB ছিল কন্টেইনারের পাতলা লিখন-মুকুটে, copy-on-write-এ, আর rm মুছে দিল হুবহু সেই একটি লেয়ার — ইমেজ-স্তূপ লেখার কোনো রেকর্ড রাখে না' },
        { en: 'the image grows by 500MB because layers append', bn: 'ইমেজ 500MB বাড়ে, কারণ লেয়ার সংযোজন হয়' },
        { en: 'the 500MB was written into the base image’s top layer', bn: '500MB লেখা হয়েছিল ভিত্তি-ইমেজের শীর্ষ-লেয়ারে' },
        { en: 'rm refuses until the 500MB is committed', bn: '500MB প্রতিশ্রুতিবদ্ধ না হওয়া পর্যন্ত rm অস্বীকার করে' },
      ],
      answer: 0,
      hint: { en: 'Which layer is per-container, and which layers are shared?', bn: 'কোন লেয়ার কন্টেইনারপ্রতি, আর কোনগুলো ভাগাকৃত?' },
      explanation: { en: 'The writable top is the only mutable layer and it is born and dies with the container. This is why containers feel writable, why images stay frozen, and why the volume lesson exists: anything durable must live outside that top.', bn: 'লিখন-মুকুট-ই একমাত্র পরিবর্তনযোগ্য লেয়ার, তা কন্টেইনারের সাথে জন্মায় ও মরে। এইজন্যই কন্টেইনার লিখনযোগ্য অনুভূত হয়, ইমেজ হিমায়িত থাকে, আর ভলিউম-পাঠের অস্তিত্ব এজন্যই: টেকসই সবকিছুকে থাকতে হয় সেই মুকুটের বাইরে।' },
    },
  ],
  quiz: {
    id: 'docker-layer-quiz',
    title: { en: 'The Ledger Exam', bn: 'খাতা-পরীক্ষা' },
    questions: [
      {
        id: 'll1', topic: 'image anatomy',
        kind: 'mcq',
        hint: { en: 'Instructions stamp immutable, content-addressed pages — what does the address name?', bn: 'নির্দেশনা ছাপ দেয় অপরিবর্তনীয়, কনটেন্ট-ঠিকানাযুক্ত পাতা — ঠিকানা কীসের নাম বলে?' },
        question: { en: 'What IS an image, at the byte level?', bn: 'বাইট-স্তরে ইমেজ কী?' },
        options: [
          { en: 'a manifest (config JSON + ordered layer digests) plus immutable content-addressed layer tars', bn: 'একটি ম্যানিফেস্ট (কনফিগ JSON + সুবিন্যস্ত লেয়ার-ডাইজেস্ট) যোগ অপরিবর্তনীয় কন্টেন্ট-ঠিকানাযুক্ত লেয়ার-tar' },
          { en: 'a compressed copy of the whole VM disk', bn: 'পুরো VM-ডিস্কের সংকুচিত অনুলিপি' },
          { en: 'a running container saved to disk', bn: 'ডিস্কে সংরক্ষিত চলমান কন্টেইনার' },
          { en: 'a Dockerfile compiled into binary form', bn: 'বাইনারি-রূপে সংকলিত Dockerfile' },
        ],
        answer: 0,
        explanation: { en: 'Two artifacts: the JSON manifest and the immutable, hash-named layer stack it points at. Everything else — tags, containers, registries — hangs off that one shape.', bn: 'দুটি নথি: JSON-ম্যানিফেস্ট আর সে-নির্দেশিত অপরিবর্তনীয় হ্যাশ-নামকৃত লেয়ার-স্তূপ। বাকি সব — ট্যাগ, কন্টেইনার, রেজিস্ট্রি — ঝুলে সেই একক-আকৃতির উপর।' },
      },
      {
        id: 'll2', topic: 'copy-on-write',
        kind: 'mcq',
        hint: { en: 'The stack is read-only below; where does a changed byte physically land?', bn: 'স্তূপ নিচের দিকে রিড-অনলি; বদলানো বাইট শারীরিকভাবে কোথায় পড়ে?' },
        question: { en: 'A container edits /etc/app.conf, a file that exists in a lower image layer. What does the union mount do?', bn: 'একটি কন্টেইনার সম্পাদনা করে /etc/app.conf, যা নিচের ইমেজ-লেয়ারে আছে। ইউনিয়ন-মাউন্ট কী করে?' },
        options: [
          { en: 'copies the file UP to the writable top first, edits it there — the lower layer stays pristine; deletes write a whiteout marker instead of touching the layer below', bn: 'আগে ফাইল অনুলিপি করে উপরে, লিখন-মুকুটে, সেখানে সম্পাদনা করে — নিচের লেয়ার অকলুষিত থাকে; মুছে-ফেলা লেখে whiteout-চিহ্ন, নিচের লেয়ার না ছুঁয়ে' },
          { en: 'edits the lower layer in place and records a delta', bn: 'নিচের লেয়ার জায়গাতেই সম্পাদনা করে আর ডেল্টা রেকর্ড করে' },
          { en: 'refuses the write because images are immutable', bn: 'লেখা অস্বীকার করে, কারণ ইমেজ অপরিবর্তনীয়' },
          { en: 'commits a new image layer immediately', bn: 'তৎক্ষণাৎ নতুন ইমেজ-লেয়ার কমিট করে' },
        ],
        answer: 0,
        explanation: { en: 'Copy-on-write is how one immutable stack serves N writable containers: reads fall through to the shared stack, writes privatize one file at a time into the per-container top.', bn: 'Copy-on-write-ই একটি অপরিবর্তনীয়-স্তূপ দিয়ে N লিখনযোগ্য-কন্টেইনার সেবা করে: পাঠ নেমে যায় ভাগাকৃত-স্তূপে, লেখা একবারে একটি ফাইল ব্যক্তিকরণ করে কন্টেইনারপ্রতি-মুকুটে।' },
      },
      {
        id: 'll3', topic: 'addressing',
        kind: 'mcq',
        hint: { en: 'A tag is a pointer; a digest is… the pointer, or the fingerprint?', bn: 'ট্যাগ হলো পয়েন্টার; ডাইজেস্ট হলো… পয়েন্টার, নাকি আঙুলের ছাপ?' },
        question: { en: 'Your pipeline must guarantee “staging and production run the same bytes”. What do you deploy?', bn: 'আপনার পাইপলাইনকে নিশ্চয়ন দিতে হবে “স্টেজিং আর প্রোডাকশন একই বাইট চালায়”। আপনি কী ডিপ্লয় করবেন?' },
        options: [
          { en: 'the digest: resolve tag → sha256 once, then deploy myapp@sha256:… to every environment — the address IS the bytes, so the comparison is one string equality check', bn: 'ডাইজেস্ট: একবার ট্যাগ → sha256 রূপান্তর করুন, তারপর প্রতি পরিবেশে myapp@sha256:… ডিপ্লয় করুন — ঠিকানা-ই বাইট, তাই তুলনা এক স্ট্রিং-সমতা-চেক' },
          { en: 'the tag, but with immutable-tags enabled only in production', bn: 'ট্যাগ, তবে কেবল প্রোডাকশনে অপরিবর্তনীয়-ট্যাগ চালু করে' },
          { en: 'the tag, pulled twice to make sure', bn: 'ট্যাগ, নিশ্চিত হতে দুইবার টেনে' },
          { en: 'a renamed tag per environment (myapp:staging, myapp:prod)', bn: 'পরিবেশপ্রতি নামান্তরিত ট্যাগ (myapp:staging, myapp:prod)' },
        ],
        answer: 0,
        explanation: { en: 'Only the content hash is self-verifying; every tag scheme is a promise made by a mutable registry row. The debug file prices the difference in weekend outages.', bn: 'কেবল কন্টেন্ট-হ্যাশ সয়ং-যাচাইযোগ্য; প্রতি ট্যাগ-পরিকল্প একটি পরিবর্তনযোগ্য রেজিস্ট্রি-সারির প্রতিশ্রুতি। ডিবাগ-ফাইল পার্থক্যের মূল্য দেয় সাপ্তাহিক-বিভ্রাটে।' },
      },
      {
        id: 'll4', topic: 'push semantics',
        kind: 'mcq',
        hint: { en: 'The registry already holds three of five layers — what crosses the wire?', bn: 'রেজিস্ট্রিতে ৫টি লেয়ারের মধ্যে ৩টি লেয়ার আছে — তারে কী যায়?' },
        question: { en: 'docker push myapp:1.2 fails with a repository-name error, while docker build -t myapp:1.2 . succeeded. Why?', bn: 'docker push myapp:1.2 ব্যর্থ হয় রিপোজিটরি-নাম-ত্রুটিতে, অথচ docker build -t myapp:1.2 . সফল। কেন?' },
        options: [
          { en: 'push needs a registry-home prefix: a name without host/namespace resolves to Docker Hub’s library, which you cannot push to — tag it registry.host/team/myapp:1.2 first (a second pointer, zero new bytes)', bn: 'push-এর লাগে রেজিস্ট্রি-ঠিকানা-উপসর্গ: হোস্ট/নেমস্পেস-বিহীন নাম রূপান্তরিত হয় Docker Hub-এর library-তে, যেখানে পুশ করা আপনার নয় — আগে ট্যাগ করুন registry.host/team/myapp:1.2 (দ্বিতীয় পয়েন্টার, শূন্য নতুন-বাইট)' },
          { en: 'pushes require the image be squashed first', bn: 'পুশের জন্য আগে ইমেজ চ্যাপ্টাতে হয়' },
          { en: 'the registry rejects tags already used locally', bn: 'স্থানীয়ভাবে ব্যবহৃত ট্যাগ রেজিস্ট্রি প্রত্যাখ্যান করে' },
          { en: 'build tags and push tags are different namespaces by design', bn: 'build-ট্যাগ আর push-ট্যাগ নকশায়ই ভিন্ন নেমস্পেস' },
        ],
        answer: 0,
        explanation: { en: 'Tags are registry paths in disguise: reg.internal/team/app:1.2 encodes WHERE the ledger lives. Pushing a bare name aims at a vault that is not yours.', bn: 'ট্যাগ হলো ছদ্মবেশী রেজিস্ট্রি-পথ: reg.internal/team/app:1.2 নির্দেশ করে খাতা কোথায় থাকে। খালি নামে পুশ লক্ষ্য করে এমন ভল্ট, যা আপনার নয়।' },
      },
      {
        id: 'll5', kind: 'fill', topic: 'the ledger doctrine',
        question: { en: 'Complete the carried sentence: “In development we name by ___; in production we sign by ___.” (two words)', bn: 'বহনযোগ্য বাক্য পূর্ণ করুন: “ডেভেলপমেন্টে আমরা নাম দিই ___ দিয়ে; প্রোডাকশনে সই করি ___ দিয়ে।” (দুই শব্দ)' },
        answer: 'tag; digest',
        accept: ['tag digest', 'tag, digest', 'ট্যাগ; ডাইজেস্ট'],
        hint: { en: 'One pointer for velocity, one hash for custody.', bn: 'বেগের জন্য একটি পয়েন্টার, তত্ত্বাবধানের জন্য একটি হ্যাশ।' },
        explanation: { en: 'The whole lesson in one line: tags ask questions (what is latest today?), digests give answers (these exact bytes, provably). The deploy-by-tag habit is the :latest split-brain waiting for a Friday evening.', bn: 'এক লাইনে পুরো পাঠ: ট্যাগ প্রশ্ন করে (আজ latest কী?), ডাইজেস্ট উত্তর দেয় (হুবহু এই বাইট, প্রমাণসহ)। ট্যাগে-ডিপ্লয়-অভ্যাস হলো :latest বিভক্ত-মস্তিষ্ক, একটি শুক্রবার-সন্ধ্যার অপেক্ষায়।' },
      },
    ],
  },
  nextLesson: { slug: 'the-runtime-register', tech: 'docker', title: { en: 'The Runtime Register', bn: 'রানটাইম-রওকদারি' } },
};
