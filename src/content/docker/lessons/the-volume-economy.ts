import type { Lesson } from '../../../lib/types';

export const volumeEconomyLesson: Lesson = {
  slug: 'the-volume-economy',
  tech: 'docker',
  title: {
    en: 'Volume Economy — Every previous lesson sharpened the same blade, containers',
    bn: 'ভলিউম-অর্থনীতি: প্রস্থানকে পেরিয়ে-বাঁচা বাইট'
  },
  summary: {
    en: 'Every previous lesson sharpened the same blade: containers die, images are frozen, registers record exits. Lesson five prices the bytes that must NOT die — state — and the three storage contracts the engine offers for it. First the THREE MOUNTS: named volumes (daemon-managed directories, born with a name, surviving rm and host reboots — the production default), bind mounts (host paths grafted in — the development loop, hot reload. And the permission headaches), tmpfs (RAM-only, secrets and scratch that must never touch disk). Second WHY the economy exists: the writable top is a scratchpad with a death sentence — the file-economy lesson of the node hub priced tmp-then-rename as honest storage. Volumes are that same vow spoken by the engine: storage whose lifecycle is deliberately decoupled from the container’s. Third the BACKUP RITUAL: volumes are opaque directories; exports are one-shot containers with the volume mounted, tar streaming out — the sealed-rename choreography, container-shaped. Fourth PERMISSIONS AS THE BORDER TAX: containers run as whatever UID the image declares; volumes persist host files; the uid-mapping mismatch is where “works as root, breaks as node” is born. Price it on the run line, not in production. Debug file: the postgres that forgot everything — one recreate without -v, one anonymous volume orphaned, one recovery via volume inspect. Carried sentence: STATE THAT MUST SURVIVE LIVES OUTSIDE.',
    bn: 'পূর্বের প্রতি পাঠ একই ফলক শাণিত করেছে: কন্টেইনার মরে, ইমেজ হিমায়িত, রওকদারি প্রস্থান লেখে। পঞ্চম পাঠ মূল্য দেয় সেই বাইটের, যা মরতে নেই — স্টেট — আর তিনটি সংরক্ষণ-চুক্তির, যা ইঞ্জিন তার জন্য দেয়। প্রথম তিন মাউন্ট: নামকৃত-ভলিউম (ডিমন-পরিচালিত ডিরেক্টরি, নাম নিয়ে জন্ম, rm আর হোস্ট-রিবুট পেরিয়ে টিকে — প্রোডাকশন-ডিফল্ট), বাইন্ড-মাউন্ট (হোস্ট-পথ সংযুক্ত — ডেভেলপমেন্ট-লুপ, হট-রিলোড, আর অনুমতি-মাথাব্যথা), tmpfs (কেবল-RAM, গোপনীয়তা আর স্ক্র্যাচ, যা ডিস্ক ছুঁতেই পারে না)। দ্বিতীয় অর্থনীতির অস্তিত্ব-কারণ: লিখন-মুকুট হলো মৃত্যুদণ্ডপ্রাপ্ত রাফখাতা — node-হাবের ফাইল-অর্থনীতি-পাঠ tmp-তারপর-rename-কে সৎ-সংরক্ষণরূপে মূল্য দিয়েছিল; ভলিউম হলো ইঞ্জিনের ভাষায় সেই একই শপথ: এমন সংরক্ষণ, যার জীবনচক্র ইচ্ছাকৃতভাবে কন্টেইনারের থেকে বিযুক্ত। তৃতীয় ব্যাকআপ-আচার: ভলিউম হলো অস্বচ্ছ ডিরেক্টরি; রপ্তানি হলো ভলিউম-মাউন্টকৃত একশট-কন্টেইনার, tar বাইরে স্রোতকৃত — সিলকৃত-rename-নৃত্যরচনা, কন্টেইনার-আকৃতিতে। চতুর্থ সীমান্ত-কররূপে অনুমতি: কন্টেইনার চলে ইমেজ-ঘোষিত যে-কোনো UID-এ; ভলিউম পেলেগে রাখে হোস্ট-ফাইল; uid-ম্যাপিং-অসামঞ্জস্যই সেই জায়গা, যেখানে “রুটে চলে, node-এ ভাঙে” জন্মায় — মূল্য দিন run-পঙ্‌ক্তিতে, প্রোডাকশনে নয়। ডিবাগ-ফাইল: সব ভুলে-যাওয়া postgres — একটি -v-বিহীন পুনঃনির্মাণ, একটি এতিম-নামহীন-ভলিউম, একটি volume inspect-দিয়ে উদ্ধার। বহনযোগ্য বাক্য: যে-স্টেট টেকে, তা বাস করে বাইরে।',
  },
  minutes: 22,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT the three storage contracts are', bn: 'তিনটি সংরক্ষণ-চুক্তি কী' } },
    {
      type: 'para',
      text: {
        en: 'When you manage Docker workloads, understanding where your persistent data lives is critical. You work with three distinct storage contracts beyond the container lifecycle. A named volume is managed entirely by the Docker daemon and survives container deletion and host reboots. A bind mount maps an arbitrary directory from your host machine directly into the container filesystem, ideal for local development and live code reloading. Finally, a tmpfs mount keeps files strictly in host system memory, ensuring sensitive secrets or scratch data never touch physical disks. Your containers themselves remain ephemeral, while data that must endure lives safely in external volumes.',
        bn: 'আপনি যখন কন্টেইনার পরিচালনা করেন, তখন আপনার ডেটা কোথায় জমা থাকে তা জানা অত্যন্ত জরুরি। কন্টেইনারের জীবনচক্রের বাইরে ডেটা সংরক্ষণের জন্য আপনি তিনটি পদ্ধতি ব্যবহার করতে পারেন। নামযুক্ত ভলিউম সরাসরি ডকার ডিমন দ্বারা পরিচালিত হয় এবং কন্টেইনার মুছে ফেলা কিংবা রিবুটের পরও নিরাপদে টিকে থাকে। বাইন্ড মাউন্ট হোস্ট মেশিনের যেকোনো ডিরেক্টরিকে সরাসরি কন্টেইনারের ফাইলসিস্টেমে যুক্ত করে, যা লোকাল ডেভেলপমেন্ট এবং দ্রুত কোড পরিবর্তনের জন্য উপযোগী। আর tmpfs মাউন্ট ডেটা শুধুমাত্র মেমরিতে রাখে, যাতে সংবেদনশীল তথ্য কখনো ডিস্কে সংরক্ষিত না হয়। আপনার কন্টেইনার সাময়িক হলেও প্রয়োজনীয় ডেটা ভলিউমে নিরাপদ থাকে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'named volume', def: { en: 'Daemon-owned directory, named at birth, surviving rm/rebuilds/reboots. The production storage vow.', bn: 'ডিমনের মালিকানাধীন ডিরেক্টরি, জন্মে নামকৃত, rm/রিবিল্ড/রিবুট পেরিয়ে টিকে। প্রোডাকশন-সংরক্ষণ-শপথ।' } },
        { term: 'bind mount', def: { en: 'A host path grafted in — the dev-loop window. The host owns the bytes; the container borrows the view.', bn: 'সংযুক্ত হোস্ট-পথ — ডেভ-লুপের জানালা। বাইটের মালিক হোস্ট; কন্টেইনার দৃশ্য ধার করে।' } },
        { term: 'tmpfs', def: { en: 'RAM-only mount, gone at stop — secrets and scratch that must never touch disk, paid in memory.', bn: 'কেবল-RAM মাউন্ট, স্টপে বিলীন — গোপনীয়তা ও স্ক্র্যাচ, যা ডিস্কে কখনো পড়তে পারে না, মূল্য মেমরিতে।' } },
        { term: 'anonymous volume', def: { en: 'A volume the engine auto-names (a hash) when an image declares VOLUME but the run line stays silent. The debug file’s orphan breed.', bn: 'ইঞ্জিনের স্বয়ং-নামকৃত (হ্যাশ) ভলিউম, যখন ইমেজ VOLUME ঘোষণা করে কিন্তু run-পঙ্‌ক্তি নীরব থাকে। ডিবাগ-ফাইলের এতিম-জাত।' } },
        { term: '--mount vs -v', def: { en: 'Same vows, two spellings: --mount is explicit (type/source/target/readonly), -v is the shorthand your fingers know. Production lines read better explicit.', bn: 'একই শপথ, দুই বানান: --mount স্পষ্ট (type/source/target/readonly), -v হলো আঙুলের চেনা সংক্ষেপ। প্রোডাকশন-পঙ্‌ক্তি স্পষ্টে ভালো পড়ে।' } },
        { term: 'uid mapping', def: { en: 'Container UID numbers are HOST UID numbers — no translation by default. The border where “works as root” is born.', bn: 'কন্টেইনার-UID-সংখ্যা হলো হোস্ট-UID-সংখ্যা — ডিফল্টে কোনো অনুবাদ নেই। সেই সীমান্ত, যেখানে “রুটে চলে” জন্মায়।' } },
        { term: 'prune', def: { en: 'docker volume prune deletes unattached volumes — hygiene that asks each account for proof of life.', bn: 'docker volume prune মুছে অসংযুক্ত-ভলিউম — স্বাস্থ্যবিধি, যা প্রতি অ্যাকাউন্টে প্রাণ-প্রমাণ চায়।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY storage deserves its own economy', bn: 'কেন সংরক্ষণ আলাদা অর্থনীতি প্রাপ্য' } },
    {
      type: 'para',
      text: {
        en: 'The whole hub is one argument that containers are disposable; this lesson is the arithmetic of what must NOT be. WHY-ONE, LIFECYCLE INDEPENDENCE: a database whose bytes live inside the container that serves them has coupled the cheapest thing you own (a replaceable process box) to the most expensive thing you own (the data). The volume vow decouples them so the box can crash, upgrade, or be replaced while the bytes sit in a daemon-managed account, untouched by rm and receipted by inspect. This is the file-economy lesson’s sealed tmp-and-rename ritual restated as infrastructure: durability by lifetime separation, not by luck. WHY-TWO, PORTABLE OPERATIONS: because named volumes are daemon objects, OPERATIONS travel with the vow. Backup becomes “run a one-shot container that mounts the account and streams a tar out”, migration becomes “mount the same account into the next database generation”, inspection becomes docker volume inspect pgdata. And not one of these verbs needs the database container alive. WHY-THREE, THE BORDERS PRICED HONESTLY: bind mounts buy dev velocity with host coupling (you know the price: permissions and path drift); tmpfs buys non-persistence with RAM (you know the price: size=16m and nothing survives). Named volumes buy durability with opacity (you know the price: no casual host edits, exports via one-shots). The economy is honest because each storage class NAMES its price. And the discipline is choosing the vow whose price matches the byte’s duty.',
        bn: 'পুরো হাব একটি যুক্তি — কন্টেইনার নিষ্পত্তিযোগ্য; এই পাঠ সেই বস্তুর পাটিগণিত, যা তা হতে পারে না। একনম্বর, জীবনচক্র-স্বাধীনতা: এমন ডেটাবেস, যার বাইট তাকে পরিবেশনকারী কন্টেইনারের ভেতরে থাকে, জুড়ে দিয়েছে আপনার সবচেয়ে সস্তা-সম্পদকে (প্রতিস্থাপনযোগ্য প্রসেস-বাক্স) আপনার সবচেয়ে দামি-সম্পদের (ডেটা) সাথে — ভলিউম-শপথ তাদের বিযুক্ত করে, যাতে বাক্স বিপর্যস্ত, হালনাগাদ বা প্রতিস্থাপিত হতে পারে। বাইট বসে থাকে ডিমন-পরিচালিত-অ্যাকাউন্টে, rm-এ অস্পৃশ্য, inspect-এ আদিলযুক্ত। এটি ফাইল-অর্থনীতি-পাঠের সিলকৃত tmp-ও-rename-আচার, অবকাঠামোরূপে পুনর্ব্যক্ত: স্থায়িত্ব আয়ুষ্কাল-বিচ্ছিন্নতায়, ভাগ্যে নয়। দ্বিতীয়, বহনযোগ্য-পরিচালন: নামকৃত-ভলিউম ডিমন-বস্তু বলে, পরিচালন শপথের সাথে ভ্রমণ করে — ব্যাকআপ হয় “একশট-কন্টেইনার চালাও, যা অ্যাকাউন্ট মাউন্ট করে একটি tar বাইরে স্রোত পাঠায়”, মাইগ্রেশন হয় “একই অ্যাকাউন্ট মাউন্ট করো পরবর্তী ডেটাবেস-প্রজন্মে”, পরিদর্শন হয় docker volume inspect pgdata. আর এই ক্রিয়াগুলোর কোনোটিরই লাগে না জীবিত ডেটাবেস-কন্টেইনার। তৃতীয়, সৎভাবে-মূল্যায়িত সীমান্ত: বাইন্ড-মাউন্ট কেনে ডেভ-বেগ হোস্ট-সংলগ্নতায় (মূল্য জানা: অনুমতি আর পথ-প্রবাহ); tmpfs কেনে অ-স্থায়িত্ব RAM-এ (মূল্য জানা: size=16m আর কিছুই টেকে না); নামকৃত-ভলিউম কেনে স্থায়িত্ব অস্বচ্ছতায় (মূল্য জানা: হোস্ট থেকে সহজাত-সম্পাদনা নেই, রপ্তানি একশটে). অর্থনীতি সৎ, কারণ প্রতি সংরক্ষণ-শ্রেণি তার মূল্য নাম বলে। আর শৃঙ্খলা হলো সেই শপথ বাছা, যার মূল্য বাইটের দায়ের সাথে মেলে।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW to run the economy by hand', bn: 'কীভাবে অর্থনীতি নিজ হাতে চালাবেন' } },
    {
      type: 'list',
      ordered: true,
      items: [
        { en: 'Name every account at birth: docker volume create pgdata. Then mount it explicitly: docker run -d --name db -v pgdata:/var/lib/postgresql/data postgres:16 — a named volume is the 1 durable object in this sentence; everything else is a replaceable costume.', bn: 'প্রতি অ্যাকাউন্ট জন্মে নাম দিন: docker volume create pgdata। তারপর স্পষ্টভাবে মাউন্ট করুন: docker run -d --name db -v pgdata:/var/lib/postgresql/data postgres:16 — নামকৃত-ভলিউম-ই এই বাক্যের ১টি টেকসই-বস্তু; বাকি সব প্রতিস্থাপনযোগ্য পোশাক।' },
        { en: 'Refuse the anonymous breed: postgres images declare VOLUME /var/lib/postgresql/data, so a silent run line STILL gets a volume — named by a hash you never chose; docker volume ls shows the orphan class. The vow is simple: if the bytes matter, the account gets a NAME or the container gets no bytes.', bn: 'নামহীন-জাত প্রত্যাখ্যান করুন: postgres-ইমেজ ঘোষণা করে VOLUME /var/lib/postgresql/data, তাই নীরব run-পঙ্‌ক্তিও ভলিউম পায় — এমন হ্যাশ-নামে, যা আপনি বাছেননি; docker volume ls দেখায় এতিম-শ্রেণি; শপথ সরল: বাইট মূল্যবান হলে। অ্যাকাউন্ট পাবে নাম, নয়তো কন্টেইনার পাবে না কোনো বাইট।' },
        { en: 'Development gets the window honestly: -v $PWD/src:/app/src for the edit-refresh loop (bind), plus -v /app/node_modules as a named anonymous shadow so the host’s node_modules never shadows the container’s. The classic compose-era pairing that keeps both worlds fast.', bn: 'ডেভেলপমেন্ট পাক জানালা সৎভাবে: সম্পাদনা-রিফ্রেশ-লুপের জন্য -v $PWD/src:/app/src (বাইন্ড), যোগ -v /app/node_modules একটি ছায়া-নামকৃত-ভলিউম হিসেবে, যাতে হোস্টের node_modules কন্টেইনারেরটিকে ছায়া না দেয় — কম্পোজ-যুগের চিরচেনা যুটী, যা দুই জগৎই দ্রুত রাখে।' },
        { en: 'Back up with the one-shot ritual: docker run --rm -v pgdata:/data:ro -v $PWD/backup:/backup alpine tar czf /backup/pgdata-$(date +%F).tgz -C /data . — the account mounted READ-ONLY (the :ro vow), the export streamed out, the ritual repeatable in cron without the database ever noticing.', bn: 'একশট-আচারে ব্যাকআপ করুন: docker run --rm -v pgdata:/data:ro -v $PWD/backup:/backup alpine tar czf /backup/pgdata-$(date +%F).tgz -C /data . — অ্যাকাউন্ট মাউন্টকৃত রিড-অনলিতে (:ro-শপথ), রপ্তানি বাইরে স্রোতকৃত, আচার পুনরাবৃত্তিযোগ্য cron-এ, ডেটাবেস কিছুই টের না পেলেও।' },
        { en: 'Restore as mounting the future: create the next-generation volume, mount it into the new engine generation (postgres:17), let ITS entrypoint migrate — the volume is the asset crossing the generation boundary, the container is transport.', bn: 'পুনঃস্থাপন করুন ভবিষ্যৎ-মাউন্টরূপে: পরবর্তী-প্রজন্মের ভলিউম তৈরি করুন, মাউন্ট করুন নতুন ইঞ্জিন-প্রজন্মে (postgres:17), স্থানান্তর করুক তার entrypoint — ভলিউম-ই সেই সম্পদ, যা প্রজন্ম-সীমান্ত পার হয়, কন্টেইনার হলো পরিবহন।' },
        { en: 'Price the UID border on the run line: when the image runs as node (UID 1000) and the volume must be writable, state it explicitly. Docker run --user 1000:1000 with a volume the account can own, or an entrypoint that chowns once. Never discover the mismatch in the incident review.', bn: 'UID-সীমান্ত মূল্য দিন run-পঙ্‌ক্তিতেই: ইমেজ node (UID 1000) হিসেবে চললে আর ভলিউমে লিখনযোগ্যতা লাগলে, স্পষ্ট ঘোষণা করুন — docker run --user 1000:1000 এমন অ্যাকাউন্টসহ, যা মালিকানা নিতে পারে। বা একটি entrypoint, যা একবার chown করে — অসামঞ্জস্য কখনোই ঘটনা-পর্যালোচনায় আবিষ্কার করবেন না।' },
      ],
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the economy in the lab', bn: 'দৃশায়ন: ল্যাবে অর্থনীতি' } },
    { type: 'visual', id: 'docker' },
    {
      type: 'para',
      text: {
        en: 'Replay the writable-top story in the Docker Lab: the layer stack stamps read-only, the container adds its mortal top, and the mounted path is drawn as a DOOR out of the stack. Bytes written there bypass the union entirely. Then recreate the container and watch which bytes survive: the top’s die with the register row, the door’s persist under the account name.',
        bn: 'Docker Lab-এ লিখন-মুকুট-কাহিনি পুনরাভিনয় করুন: লেয়ার-স্তূপ ছাপ ফেলে রিড-অনলি, কন্টেইনার যোগ করে তার নশ্বর-শীর্ষ, আর মাউন্টকৃত-পথ আঁকা হয় স্তূপ থেকে বাইরের দরজারূপে — সেখানে লেখা বাইট ইউনিয়ন পুরো এড়িয়ে যায়। তারপর কন্টেইনার পুনঃনির্মাণ করে দেখুন কোন বাইট টেকে: মুকুটের বাইট মরে রওকদারি-সারির সাথে, দরজার বাইট টিকে থাকে অ্যাকাউন্ট-নামে।',
      },
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: where the accounts actually live', bn: 'অভ্যন্তরীণ: অ্যাকাউন্ট আসলে কোথায় থাকে' } },
    {
      type: 'para',
      text: {
        en: 'Three mechanisms underpin these storage verbs. THE STORAGE: a named volume is a plain directory under the daemon’s root (/var/lib/docker/volumes/<name>/_data), created on first reference, deleted only by explicit rm or prune. What you can list, you can reason about: docker system df -v gives per-volume sizes as the account statement. THE MOUNT MECHANISM: volumes and bind targets graft directories on top of the union stack. When targeting a directory, the mounted location obscures existing image files. Initializing a new named volume over an existing folder automatically seeds data from the base image. Because storage configuration attaches per container, multiple instances can attach to the same shared directory. THE PERMISSION GRAVITY: UID and GID numbers pass through unmapped by default, so a file written as container-root reads as host-root. The everyday discipline is simpler: decide the UID on the run line, own the account directory accordingly, and keep edits inside containers by default.',
        bn: 'ক্রিয়ার তলে তিন মূল মেকানিজম রয়েছে। সংরক্ষণ: নামযুক্ত ভলিউম হলো ডিমনের অধীনে থাকা সাধারণ ডিরেক্টরি (/var/lib/docker/volumes/<name>/_data), যা প্রথম ব্যবহারে তৈরি হয় এবং কেবল স্পষ্ট rm বা prune কমান্ডে মুছে ফেলা যায়। docker system df -v দিয়ে প্রতি ভলিউমের আকার দেখা যায়। মাউন্ট পদ্ধতি: ভলিউম ও বাইন্ড মাউন্ট ইউনিয়ন স্তূপের উপর নতুন ডিরেক্টরি স্থাপন করে। মাউন্ট করা স্থানটি ইমেজের পূর্বের ফাইলগুলোকে আবৃত করে ফেলে। নতুন নামযুক্ত ভলিউম চালু করলে প্রাথমিক ফাইলগুলো স্বয়ংক্রিয়ভাবে মূল ইমেজ থেকে অনুলিপি হয়। প্রতিটি কন্টেইনারে আলাদা মাউন্ট কনফিগারেশন থাকে, তাই প্রয়োজনে একাধিক কন্টেইনার একই ভলিউম সংযুক্ত করতে পারে। পারমিশন নিয়ম: UID ও GID সংখ্যা ডিফল্টে কোনো রূপান্তর ছাড়াই ব্যবহৃত হয়, ফলে কন্টেইনারের ভেতরে রুটে তৈরি ফাইল হোস্টে রুট হিসেবে চিহ্নিত হয়। তাই রান কমান্ডেই UID নির্ধারণ করা সবচেয়ে নিরাপদ অভ্যাস।',
      },
    },
    {
      type: 'code',
      lang: 'bash',
      filename: 'volume-rituals.sh',
      caption: { en: 'The economy as verbs: account born named, backup as one-shot, restore as the next generation mounting the past.', bn: 'ক্রিয়ারূপে অর্থনীতি: অ্যাকাউন্ট নাম নিয়ে জন্মায়, ব্যাকআপ একশটে, পুনঃস্থাপন অতীত-মাউন্টকারী প্রজন্মে।' },
      code: `# the account, born named
docker volume create pgdata
docker run -d --name db -v pgdata:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=devonly postgres:16

# the account statement, on demand
docker volume inspect pgdata --format '{{.Mountpoint}}'
docker system df -v | grep pgdata

# backup: one-shot container, account mounted READ-ONLY, tar streamed out
docker run --rm -v pgdata:/data:ro -v "$PWD/backup:/backup" alpine \\
  tar czf "/backup/pgdata-$(date +%F).tgz" -C /data .

# the swap that must never scare anyone again
docker stop db && docker rm db                      # register row dies
docker run -d --name db -v pgdata:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=devonly postgres:16          # new box, same account
docker exec db psql -U postgres -c 'select count(*) from orders;'   # the bytes outlived the exit

# restore into the NEXT generation — the volume crosses the boundary
docker volume create pgdata-v17
docker run --rm -v pgdata:/from:ro -v pgdata-v17:/to alpine \\
  sh -c 'cd /from && tar cf - . | (cd /to && tar xf -)'`,
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: what the economy bought', bn: 'ফলাফল: অর্থনীতি যা কিনল' } },
    {
      type: 'table',
      head: [{ en: 'vow signed', bn: 'সইকৃত-শপথ' }, { en: 'the price', bn: 'মূল্য' }, { en: 'ledger delta', bn: 'খাতা-পার্থক্য' }, { en: 'ghost debt cancelled', bn: 'বাতিলকৃত ভূতুড়ে-ঋণ' }],
      rows: [
        ['named volumes for state', { en: 'daemon-owned opacity; exports via one-shots', bn: 'ডিমনের মালিকানায় অস্বচ্ছতা; রপ্তানি একশটে' }, { en: 'bytes survive rm, rebuilds, reboots — provably in inspect', bn: 'বাইট টেকে rm, রিবিল্ড, রিবুট পেরিয়ে — inspect-এ প্রমাণসহ' }, 'state coupled to the cheapest object you own'],
        ['bind for the dev loop', { en: 'host ownership; permissions and path drift', bn: 'হোস্ট-মালিকানা; অনুমতি আর পথ-প্রবাহ' }, { en: 'edit-on-laptop, run-in-container, zero rebuilds', bn: 'ল্যাপটপে-সম্পাদনা, কন্টেইনারে-চলা, শূন্য রিবিল্ড' }, 'the rebuild-per-keystroke development tax'],
        ['tmpfs for secrets/scratch', { en: 'RAM budget; nothing survives stop', bn: 'RAM-বাজেট; স্টপে কিছুই টেকে না' }, { en: 'secrets that never touch disk, stated in the run line', bn: 'গোপনীয়তা, যা ডিস্ক ছোঁয় না, run-পঙ্‌ক্তিতে ঘোষিত' }, 'key material aging inside image layers'],
        ['no anonymous accounts', { en: 'every durable byte gets a chosen name', bn: 'প্রতি টেকসই-বাইট নির্বাচিত-নাম পায়' }, { en: 'docker volume ls reads as accounting, not archaeology', bn: 'docker volume ls পড়ে হিসাবরক্ষণরূপে, প্রত্নতত্ত্ব নয়' }, 'the hash-named orphan fleet'],
        ['UID decided on the run line', { en: 'permission arithmetic priced before production', bn: 'অনুমতি-পাটিগণিত প্রোডাকশনের আগে মূল্যায়িত' }, { en: 'works-as-node from day one, not root-by-habit', bn: 'প্রথম দিন থেকে node-এ-চলা, অভ্যাসে-রুট নয়' }, 'the Friday chmod 777 incident'],
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUG FILE: the postgres that forgot everything', bn: 'ডিবাগ-ফাইল: সব-ভুলে-যাওয়া postgres' } },
    {
      type: 'para',
      text: {
        en: 'The runbook said “bump the database image”: docker stop db && docker rm db && docker run -d --name db postgres:17 … — and staging’s orders table came back EMPTY. Not corrupted: EMPTY, as if two years of fixtures had never existed. Panic arithmetic lasted four minutes, because the volume lesson had been read aloud in review: the old container had been started months ago with a silent run line, so postgres had auto-created an anonymous volume. It was still alive and holding every byte, merely nameless. The volume list command showed the orphan by its hash; running an inspection container confirmed the fixtures were intact. Recovery was simple: create pgdata as a named account, copy the orphan’s bytes across, and mount the new generation at the named account. Never deploy state without named storage.',
        bn: 'রানবুকে নির্দেশ ছিল “ডেটাবেস ইমেজ আপডেট করো”: docker stop db && rm db চালিয়ে নতুন postgres 17 ইমেজ রান করা হয়। কিন্তু স্টেজিংয়ের orders টেবিল খালি পাওয়া গেল। কোনো ক্ষতি হয়নি, কিন্তু টেবিল ফাঁকা, যেন ২ বছরের ডেটা কখনোই ছিল না। চার মিনিটেই কারণ ধরা পড়ল: পূর্বের কন্টেইনার চালুর সময় কোনো -v মাউন্ট নির্দেশ দেওয়া হয়নি, তাই ইঞ্জিন একটি নামহীন ভলিউম তৈরি করেছিল। ভলিউমটি ডিস্কে অক্ষত ছিল। volume ls কমান্ডে এতিম ভলিউমটি তার হ্যাশে দেখা গেল। ব্যাকআপ কন্টেইনার চালিয়ে যাচাই করা হলো সব ফাইল অক্ষত আছে। এরপর pgdata নামে ভলিউম তৈরি করে ডেটা অনুলিপি করা হলো এবং নতুন কন্টেইনার সফলভাবে সংযুক্ত করা হলো।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD: economies in bank ledgers', bn: 'বাস্তব-জগৎ: ব্যাংক-খাতায় অর্থনীতি' } },
    {
      type: 'list',
      items: [
        { en: 'Kubernetes PersistentVolumeClaims are the same vow one control-plane up: storage requested by NAME, lifecycle decoupled from the pod, and the backup ritual reborn as volume snapshots.', bn: 'Kubernetes-এর PersistentVolumeClaim হলো একই শপথ এক কন্ট্রোল-প্লেন উপরে: নামে-চাওয়া সংরক্ষণ, পড থেকে বিযুক্ত-জীবনচক্র, আর ভলিউম-স্ন্যাপশটরূপে পুনর্জাত ব্যাকআপ-আচার।' },
        { en: 'Managed databases are the economy outsourced: the provider owns the account AND the ritual (snapshots, point-in-time recovery) — you trade the one-shot tar for a console checkbox and an invoice line.', bn: 'পরিচালিত-ডেটাবেস হলো আউটসোর্সকৃত অর্থনীতি: প্রদানকারীর মালিকানায় অ্যাকাউন্ট আর আচার উভয়ই (স্ন্যাপশট, নির্দিষ্ট-সময়ে-পুনরুদ্ধার) — আপনি একশট tar-এর বদল নেন কনসোল-চেকবক্স আর ইনভয়েস-পঙ্‌ক্তি।' },
        { en: 'Devcontainers and Codespaces run the dev-loop bind at platform scale: your laptop directory mounted into the tooling box — the same window, institutionalized.', bn: 'Devcontainer আর Codespaces চালায় প্ল্যাটফর্ম-স্কেলে ডেভ-লুপ-বাইন্ড: আপনার ল্যাপটপ-ডিরেক্টরি মাউন্টকৃত টুলিং-বাক্সে — সেই একই জানালা, প্রাতিষ্ঠানিক।' },
        { en: 'Tmpfs is compliance infrastructure in disguise: regulated services mount /run/secrets as tmpfs so key material provably never touches a disk that outlives the process — the RAM budget as an audit defense.', bn: 'Tmpfs হলো ছদ্মবেশে নিয়মতান্ত্রিক-অবকাঠামো: নিয়ন্ত্রিত-সেবা /run/secrets tmpfs-রূপে মাউন্ট করে, যাতে গোপন-উপাদান প্রমাণযোগ্যভাবে কখনো এমন ডিস্কে না পড়ে, যা প্রসেসকে পেরিয়ে বাঁচে — নিরীক্ষা-প্রতিরক্ষারূপে RAM-বাজেট।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the network bridges — names over IP addresses', bn: 'পরবর্তী: নেটওয়ার্ক-সেতু — IP-ঠিকানার উপর নাম' } },
    {
      type: 'para',
      text: {
        en: 'State now lives in named accounts that outlive containers. Next: how containers FIND each other without hardcoded IPs — the bridge networks, the embedded DNS that resolves names, and the deliberate perimeter of -p. Carried sentence: STATE THAT MUST SURVIVE LIVES OUTSIDE.',
        bn: 'স্টেট এখন বাস করে নামকৃত-অ্যাকাউন্টে, কন্টেইনারকে পেরিয়ে। পরের বিষয়: কন্টেইনার একে-অপরকে খুঁজে পায় কীভাবে, হার্ডকোডকৃত-IP ছাড়া — সেতু-নেটওয়ার্ক, নাম-রূপান্তরকারী অন্তর্নির্মিত-DNS, আর -p-এর ইচ্ছাকৃত-প্রান্তরেখা। বহনযোগ্য বাক্য: যে-স্টেট টেকে, তা বাস করে বাইরে।',
      },
    },
  ],
  exercises: [
    {
      id: 'docker-vol-ex1', kind: 'mcq', topic: 'mount selection',
      question: { en: 'A service must keep uploaded files durable across container replacement, but nobody on the host should casually browse them. Which mount vow matches the duty — and what is its price?', bn: 'একটি সেবাকে আপলোডকৃত-ফাইল টেকসই রাখতে হবে কন্টেইনার-প্রতিস্থাপন জুড়ে, কিন্তু হোস্টের কেউ যেন সহজাতভাবে সেগুলো ঘাঁটতে না পারে। কোন মাউন্ট-শপথ দায়ের সাথে মেলে — আর তার মূল্য কী?' },
      options: [
        { en: 'a named volume: daemon-owned, lifecycle decoupled from the container, not casually editable from the host — priced as opacity (inspection via docker tools, exports via one-shot containers)', bn: 'নামকৃত-ভলিউম: ডিমনের মালিকানাধীন, জীবনচক্র কন্টেইনার থেকে বিযুক্ত, হোস্ট থেকে সহজাত-সম্পাদনাযোগ্য নয় — মূল্য অস্বচ্ছতায় (পরিদর্শন docker-টুলে, রপ্তানি একশট-কন্টেইনারে)' },
        { en: 'a bind mount from the home directory — easy to inspect', bn: 'হোম-ডিরেক্টরি থেকে বাইন্ড-মাউন্ট — পরিদর্শন সহজ' },
        { en: 'tmpfs — the most private option', bn: 'tmpfs — সবচেয়ে গোপন বিকল্প' },
        { en: 'the writable top layer — paid only in disk', bn: 'লিখন-মুকুট — মূল্য কেবল ডিস্কে' },
      ],
      answer: 0,
      hint: { en: 'Durability plus host-privacy: which contract names both, and what does it cost you back?', bn: 'স্থায়িত্ব যোগ হোস্ট-গোপনীয়তা: কোন চুক্তি দুটোই নাম বলে, আর বিনিময়ে কী নেয়?' },
      explanation: { en: 'Named volumes are the only mount whose lifecycle is independent AND whose contents are daemon-guarded from casual host edits. The price is ritualized access — exactly what durable user data deserves.', bn: 'নামকৃত-ভলিউম-ই একমাত্র মাউন্ট, যার জীবনচক্র স্বাধীন এবং যার বিষয়বস্তু ডিমন-রক্ষিত, সহজাত হোস্ট-সম্পাদনা থেকে। মূল্য হলো আচারকৃত-প্রবেশ — টেকসই ব্যবহারকারী-ডেটা হুবহু তা-ই প্রাপ্য।' },
    },
    {
      id: 'docker-vol-ex2', kind: 'predict', topic: 'mount seeding',
      question: { en: 'You run postgres:16 with a FRESH named volume at /var/lib/postgresql/data — a path where the image already ships files. What do you find inside the volume afterwards, and why is empty not the answer?', bn: 'আপনি postgres:16 চালান একটি নতুন নামকৃত-ভলিউমে, /var/lib/postgresql/data-এ — এমন পথে, যেখানে ইমেজ ইতিমধ্যে ফাইল পাঠায়। পরে ভলিউমের ভেতরে কী পাবেন, আর কেন খালি উত্তর নয়?' },
      options: [
        { en: 'the image’s own files, copied in: a fresh named volume over a non-empty image path is SEEDED with the image’s content. Postgres’s data-directory initialization depends on exactly this seeding, after which the volume’s contents shadow the image path for all future writes', bn: 'ইমেজের নিজের ফাইল, ভেতরে অনুলিপিত: অ-খালি ইমেজ-পথের উপর নতুন নামকৃত-ভলিউম বীজকৃত হয় ইমেজের কন্টেন্টে — postgres-এর ডেটা-ডিরেক্টরি-আরম্ভ ঠিক এই বীজকরণের উপর নির্ভরশীল, যার পর ভলিউমের বিষয়বস্তু সব ভবিষ্যৎ-লেখায় ইমেজ-পথকে ছায়া দেয়' },
        { en: 'empty — a new volume always starts empty', bn: 'খালি — নতুন ভলিউম সবসময় খালি শুরু হয়' },
        { en: 'an error, because the mount covers a declared VOLUME path', bn: 'একটি ত্রুটি, কারণ মাউন্ট ঢেকে ঘোষিত VOLUME-পথ' },
        { en: 'the container fuses volume and image files on every read', bn: 'কন্টেইনার প্রতি পাঠে ভলিউম ও ইমেজ-ফাইল একত্রিত করে' },
      ],
      answer: 0,
      hint: { en: 'Mounts cover; fresh volumes get what first?', bn: 'মাউন্ট ঢেকে; নতুন ভলিউম আগে কী পায়?' },
      explanation: { en: 'Seeding is the quiet mechanism that makes database images usable with named volumes. Know it exists — the seeding rule also explains why mounting an empty host directory over the path breaks initialization (binds never seed).', bn: 'বীজকরণ হলো সেই নিঃশব্দ-প্রক্রিয়াটত্ত্ব, যা ডেটাবেস-ইমেজকে নামকৃত-ভলিউমে ব্যবহারযোগ্য করে। জানুন এর অস্তিত্ব আছে — বীজকরণ-নিয়ম ব্যাখ্যা করে, সেই পথে খালি হোস্ট-ডিরেক্টরি মাউন্ট কেন আরম্ভ ভেঙে দেয় (বাইন্ড কখনো বীজ দেয় না)।' },
    },
    {
      id: 'docker-vol-ex3', kind: 'mcq', topic: 'the UID border',
      question: { en: 'Your node container (USER node, UID 1000) crashes writing to a bind-mounted host directory owned by root. Which fix is the honest vow, and which three are folklore?', bn: 'আপনার node-কন্টেইনার (USER node, UID 1000) বাইন্ড-মাউন্টকৃত, রুট-মালিকানাধীন হোস্ট-ডিরেক্টরিতে লিখতে গিয়ে বিপর্যস্ত। কোন মেরামত সৎ-শপথ, আর কোন তিনটি লোককথা?' },
      options: [
        { en: 'own the directory as the declared UID (chown 1000:1000 on the host or --user + entrypoint chown once) — UID numbers cross unmapped, so the vow is making OWNERSHIP match the declared user, priced before production', bn: 'ডিরেক্টরির মালিকানা দিন ঘোষিত-UID-এ (হোস্টে chown 1000:1000 বা --user + entrypoint-এ একবারমাত্র chown) — UID-সংখ্যা অ-অনুদিত পার হয়, তাই শপথ হলো মালিকানা ঘোষিত-ব্যবহারকারীর সাথে মেলানো, প্রোডাকশনের আগে মূল্যায়িত' },
        { en: 'chmod 777 the host directory and move on', bn: 'হোস্ট-ডিরেক্টরিতে chmod 777 করুন আর এগিয়ে যান' },
        { en: 'run the container as root and delete the USER line', bn: 'কন্টেইনার রুটে চালান আর USER-লাইন মুছে দিন' },
        { en: 'bind mounts do not support non-root users — use volumes only', bn: 'বাইন্ড-মাউন্ট অ-রুট-ব্যবহারকারী সমর্থন করে না — কেবল ভলিউম ব্যবহার করুন' },
      ],
      answer: 0,
      hint: { en: 'The numbers cross untranslated — what must MATCH for the write to be lawful?', bn: 'সংখ্যা অননূদিত পার হয় — লেখা বিধিসম্মত হতে কী মিলতে হবে?' },
      explanation: { en: 'UID mapping is the border tax of binds: container-1000 is host-1000. The vow is ownership alignment, stated before the incident — 777 is public access, root-by-habit is the blast-radius habit the hardened-manifest lesson prices.', bn: 'UID-ম্যাপিং হলো বাইন্ডের সীমান্ত-কর: কন্টেইনার-1000 হলো হোস্ট-1000। শপথ হলো মালিকানা-সমন্বয়, ঘটনার আগে ঘোষিত — 777 হলো উন্মুক্ত-প্রবেশ, অভ্যাসে-রুট হলো সেই বিস্ফোরণ-ব্যাসার্ধ-অভ্যাস, যা শক্তকৃত-ম্যানিফেস্ট-পাঠ মূল্য দেয়।' },
    },
  ],
  quiz: {
    id: 'docker-vol-quiz',
    title: { en: 'The Economy Exam', bn: 'অর্থনীতি-পরীক্ষা' },
    questions: [
      {
        id: 've1', topic: 'lifecycles',
        kind: 'mcq',
        hint: { en: 'rm deletes the row and its top — whose lifecycle did the vow deliberately decouple?', bn: 'rm মুছে সারি ও তার মুকুট — শপথ ইচ্ছাকৃতভাবে কার জীবনচক্র বিযুক্ত করেছে?' },
        question: { en: 'What exactly survives docker rm when a named volume was mounted?', bn: 'নামকৃত-ভলিউম মাউন্টকৃত থাকলে docker rm-এর পর থেকে কী টেকে?' },
        options: [
          { en: 'the volume and every byte in it: rm deletes the register row and the writable top — volumes are daemon objects with independent lifecycles, deletable only by explicit volume rm or prune', bn: 'ভলিউম ও তার প্রতি বাইট: rm মুছে রওকদারি-সারি আর লিখন-মুকুট — ভলিউম হলো স্বাধীন-জীবনচক্রের ডিমন-বস্তু, কেবল স্পষ্ট volume rm বা prune-এ মোছাযোগ্য' },
          { en: 'nothing — volumes share the container lifecycle', bn: 'কিছুই না — ভলিউম কন্টেইনার-জীবনচক্র ভাগ করে' },
          { en: 'only the files written before the last docker stop', bn: 'কেবল শেষ docker stop-এর আগে লেখা ফাইলগুলো' },
          { en: 'the volume, but only if --rm-volumes was not set', bn: 'ভলিউম, তবে কেবল --rm-volumes সেট না থাকলে' },
        ],
        answer: 0,
        explanation: { en: 'The decoupling is the vow: register rows and writable tops die together; accounts live under their names until deliberately closed.', bn: 'বিচ্ছিন্নকরণ-ই শপথ: রওকদারি-সারি আর লিখন-মুকুট একসাথে মরে; অ্যাকাউন্ট বাঁচে তাদের নামে, ইচ্ছাকৃত-বন্ধন পর্যন্ত।' },
      },
      {
        id: 've2', topic: 'tmpfs',
        kind: 'mcq',
        hint: { en: 'Which duty is served BY disappearance — and what is the stated budget it is paid in?', bn: 'কোন দায় সেবা পায় উধাও-হওয়াতেই — আর মূল্য শোধ হয় কোন ঘোষিত-বাজেটে?' },
        question: { en: 'When is tmpfs the CORRECT mount, not just an available one?', bn: 'কখন tmpfs সঠিক মাউন্ট, কেবল উপলব্ধ নয়?' },
        options: [
          { en: 'when the duty is NON-persistence: runtime secrets and scratch that must provably never touch disk — paid with a declared RAM budget (size=…), gone at stop, exactly as the audit requires', bn: 'যখন দায় হলো অ-স্থায়িত্ব: রানটাইম-গোপনীয়তা ও স্ক্র্যাচ, যা প্রমাণযোগ্যভাবে ডিস্কে কখনো পড়তে পারে না — মূল্য ঘোষিত RAM-বাজেটে (size=…), স্টপে বিলীন, নিরীক্ষার দাবি হুবহু যেমন' },
          { en: 'when you need the fastest durable database storage', bn: 'যখন লাগে দ্রুততম টেকসই ডেটাবেস-সংরক্ষণ' },
          { en: 'when the host has no free disk', bn: 'যখন হোস্টে ফাঁকা ডিস্ক নেই' },
          { en: 'when two containers must share state', bn: 'যখন দুই কন্টেইনারকে স্টেট ভাগ করতে হয়' },
        ],
        answer: 0,
        explanation: { en: 'tmpfs is a vow of disappearance, not a speed trick. Secrets and scratch: bytes whose CORRECT lifecycle is shorter than the container’s.', bn: 'tmpfs হলো অন্তর্ধান-শপথ, বেগের ছল নয়। গোপনীয়তা ও স্ক্র্যাচ: এমন বাইট, যাদের সঠিক-জীবনচক্র কন্টেইনারের চেয়ে খাটো।' },
      },
      {
        id: 've3', topic: 'backup ritual',
        kind: 'mcq',
        hint: { en: 'Opaque to host hands, readable by vow: who mounts the export, and how is the account marked?', bn: 'হোস্ট-হাতে অস্বচ্ছ, শপথে পাঠযোগ্য: রপ্তানি কে মাউন্ট করে, আর অ্যাকাউন্ট কী চিহ্নে চিহ্নিত থাকে?' },
        question: { en: 'What is the canonical backup of a named volume — and why the one-shot shape?', bn: 'নামকৃত-ভলিউমের প্রমিত ব্যাকআপ কী — আর কেন একশট-আকৃতি?' },
        options: [
          { en: 'docker run --rm with the volume mounted read-only plus a bind for the export, tar streaming out: the account is untouched (:ro), the ritual needs no database cooperation, and --rm leaves no register debris', bn: 'docker run --rm, ভলিউম রিড-অনলি-মাউন্টকৃত, রপ্তানির জন্য বাইন্ড-সহ, tar বাইরে স্রোতকৃত: অ্যাকাউন্ট অস্পৃশ্য (:ro), আচারের লাগে না ডেটাবেস-সহযোগিতা, আর --rm কোনো রওকদারি-জড়িতা রেখে যায় না' },
          { en: 'cp -r from /var/lib/docker/volumes while the database runs', bn: 'ডেটাবেস চলাকালীন /var/lib/docker/volumes থেকে cp -r' },
          { en: 'docker commit the database container nightly', bn: 'প্রতি রাতে ডেটাবেস-কন্টেইনার docker commit করা' },
          { en: 'volumes are self-backed-up by the daemon — no ritual needed', bn: 'ভলিউম ডিমনের দ্বারা স্বয়ং-ব্যাকআপকৃত — কোনো আচার লাগে না' },
        ],
        answer: 0,
        explanation: { en: 'Volumes are daemon-guarded directories — the honest read is a container mounting them under an explicit vow (:ro), exporting through a second mount. Direct host copies race the database writer; commit freezes a process box, not the account.', bn: 'ভলিউম হলো ডিমন-রক্ষিত ডিরেক্টরি — সৎ-পাঠ হলো স্পষ্ট-শপথে (:ro) তা মাউন্টকারী কন্টেইনার, দ্বিতীয় মাউন্ট দিয়ে রপ্তানি। সরাসরি হোস্ট-অনুলিপি ডেটাবেস-লেখকের সাথে দৌড়ায়; commit হিমায়িত করে প্রসেস-বাক্স, অ্যাকাউন্ট নয়।' },
      },
      {
        id: 've4', topic: 'anonymous volumes',
        kind: 'mcq',
        hint: { en: 'Silence on the run line plus VOLUME in the image equals… a name you never chose.', bn: 'run-পঙ্‌ক্তির নীরবতা যোগ ইমেজের VOLUME সমান… এমন নাম, যা আপনি বাছেননি।' },
        question: { en: 'docker volume ls shows dozens of hash-named volumes. Who created them, and what is the vow against the breed?', bn: 'docker volume ls দেখায় ডজন ডজন হ্যাশ-নামযুক্ত ভলিউম। কে তৈরি করল, আর জাতের বিরুদ্ধে শপথ কী?' },
        options: [
          { en: 'Images declaring VOLUME ran without explicit mount arguments, so the engine auto-created anonymous volumes. The remedy is to name every persistent volume explicitly and prune orphaned storage deliberately.', bn: 'VOLUME ঘোষিত ইমেজ নির্দিষ্ট মাউন্ট নির্দেশ ছাড়াই চালানো হয়েছিল, ফলে ইঞ্জিন নামহীন ভলিউম তৈরি করেছিল। সমাধান হলো প্রতি প্রয়োজনীয় ভলিউমকে স্পষ্টভাবে নাম দেওয়া এবং এতিম স্টোরেজ সাবধানে মুছে ফেলা।' },
          { en: 'the daemon leaks one volume per build', bn: 'ডিমন প্রতি বিল্ডে একটি ভলিউম ফাঁস করে' },
          { en: 'they are tmpfs leftovers', bn: 'সেগুলো tmpfs-অবশেষ' },
          { en: 'bind mounts auto-register under hashes for security', bn: 'বাইন্ড-মাউন্ট নিরাপত্তায় হ্যাশে স্বয়ং-নিবন্ধিত হয়' },
        ],
        answer: 0,
        explanation: { en: 'Anonymous volumes are the engine covering your silence. Sometimes that saves the data (the debug file); always it ages into archaeology. Naming is the accounting discipline.', bn: 'নামহীন-ভলিউম হলো আপনার নীরবতা ঢেকে দেওয়া ইঞ্জিন। মাঝে মাঝে তা ডেটা বাঁচায় (ডিবাগ-ফাইল); সবসময় তা পুরনো হয়ে যায় প্রত্নতত্ত্বে। নামকরণ-ই হিসাবের শৃঙ্খলা।' },
      },
      {
        id: 've5', kind: 'fill', topic: 'the economy doctrine',
        question: { en: 'Complete the carried sentence: “State that must survive lives ___.” (one word)', bn: 'বহনযোগ্য বাক্য পূর্ণ করুন: “যে-স্টেট টেকে, তা বাস করে ___।” (এক শব্দ)' },
        answer: 'outside',
        accept: ['বাইরে', 'outside the container', 'outside the register'],
        hint: { en: 'Outside the register row, outside the writable top — in a named account.', bn: 'রওকদারি-সারির বাইরে, লিখন-মুকুটের বাইরে — একটি নামকৃত-অ্যাকাউন্টে।' },
        explanation: { en: 'The whole economy in one preposition: containers are disposable, images are frozen, registers record exits — bytes that must outlive all three are filed OUTSIDE, under names you chose.', bn: 'একটি অব্যয়ে-শব্দে পুরো অর্থনীতি: কন্টেইনার নিষ্পত্তিযোগ্য, ইমেজ হিমায়িত, রওকদারি প্রস্থান লেখে — তিনটিকেই পেরিয়ে-বাঁচা বাইট দাখিল হয় বাইরে, আপনার-বাছা নামে।' },
      },
    ],
  },
  nextLesson: { slug: 'the-network-bridges', tech: 'docker', title: { en: 'The Network Bridges', bn: 'নেটওয়ার্ক-সেতু' } },
};
