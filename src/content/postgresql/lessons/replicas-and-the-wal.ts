import type { Lesson } from '../../../lib/types';

export const ReplicasAndTheWalLesson: Lesson = {
  slug: 'replicas-and-the-wal',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL High Availability: WAL, Streaming Replication & PITR',
    bn: 'PostgreSQL হাই অ্যাভেইলেবিলিটি: WAL, স্ট্রিমিং রেপ্লিকেশন ও PITR'
  },
  summary: {
    en: 'Master enterprise database durability, high-availability streaming replication, and point-in-time disaster recovery across 10 structured topics. Understand Write-Ahead Logging (WAL) and 16 MB segment cycles. Configure continuous WAL archiving with archive_command. Contrast byte-exact physical replication against selective logical decoding. Build real-time streaming replicas using pg_basebackup and replication slots. Tune durability versus write throughput using synchronous_commit modes. Execute precision Point-in-Time Recovery (PITR) to restore state prior to accidental data loss, and monitor replication lag in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে এন্টারপ্রাইজ ডাটাবেস স্থায়িত্ব, হাই-অ্যাভেইলেবিলিটি স্ট্রিমিং রেপ্লিকেশন এবং পয়েন্ট-ইন-টাইম ডিজাস্টার রিকভারি আয়ত্ত করুন। রাইট-অ্যাহেড লগিং (WAL) এবং ১৬ মেগাবাইট সেগমেন্ট সাইকেল বুঝুন। archive_command দিয়ে ধারাবাহিক লগ আর্কাইভ করুন। ফিজিক্যাল রেপ্লিকেশন বনাম লজিক্যাল ডিকোডিংয়ের পার্থক্য জানুন। pg_basebackup ও রেপ্লিকেশন স্লট সহযোগে রিয়েল-টাইম রেপ্লিকা সার্ভার প্রস্তুতের নিয়ম দেখুন। synchronous_commit মোড দিয়ে ডেটা নিরাপত্তা ও গতির ভারসাম্য রক্ষা করুন। ভুলবশত ডেটা ডিলিট হলে নিখুঁত পয়েন্ট-ইন-টাইম রিকভারি (PITR) চালান এবং Node.js-এ রেপ্লিকেশন ল্যাগ পর্যবেক্ষণ করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'roles-and-the-grant',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL Security & Multi-Tenancy: RBAC, RLS & Isolation',
      bn: 'PostgreSQL নিরাপত্তা ও মাল্টি-টেন্যান্সি: RBAC, RLS ও আইসোলেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Write-Ahead Log (WAL): Guaranteeing Crash Consistency', bn: '১. রাইট-অ্যাহেড লগ (WAL): ক্র্যাশ কনসিস্টেন্সির নিশ্চয়তা' } },
    {
      type: 'para',
      text: {
        en: 'Writing altered 8 KB data pages directly to random locations on disk for every transaction would kill I/O performance. Instead, PostgreSQL implements Write-Ahead Logging (WAL). All changes are appended sequentially to a fast disk log before memory buffers are altered. If power fails mid-transaction, PostgreSQL replays the WAL on boot to restore consistency.',
        bn: 'প্রতিটি লেনদেনের জন্য সরাসরি ডিস্কের এলোমেলো স্থানে ৮ কিলোবাইট পেজ লিখতে গেলে সার্ভার অত্যন্ত ধীরগতির হয়ে পড়ে। এর বদলে PostgreSQL রাইট-অ্যাহেড লগিং (WAL) ব্যবহার করে। মূল মেমরি পরিবর্তনের আগেই সমস্ত তথ্য ধারাবাহিকভাবে দ্রুতগতির একটি লগ ফাইলে লেখা হয়। মাঝপথে বিদ্যুৎ চলে গেলেও রিবুটের সময় এই লগ ফাইল পুনরায় চালিয়ে ডাটাবেস সম্পূর্ণ উদ্ধার করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `WAL INTEGRITY PIPELINE:
Client UPDATE -> [1. WAL Buffer in RAM] ----> (Flush sequentially to Disk!)
                         |                         |
                         v                         v
               [2. Shared Buffers RAM]      [pg_wal/00000001...]
                         |                         |
              (Lazy checkpoint flush)              |
                         v                         v
               [3. Base Table on Disk]      (CRASH SAFE & REPLAYABLE!)`,
      caption: {
        en: 'Sequential WAL writes guarantee zero transaction loss before random data pages flush.',
        bn: 'ধারাবাহিক WAL রাইট নিশ্চিত করে যেন ডিস্কে মূল ডেটা লেখার আগেই লেনদেন সংরক্ষিত থাকে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Primary to Standby Physical Streaming Replication Flow', bn: 'প্রাইমারি থেকে স্ট্যান্ডবাই ফিজিক্যাল স্ট্রিমিং রেপ্লিকেশন প্রবাহ' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="PostgreSQL Streaming Replication Flow">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="200" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="100" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Primary Server (Port 5432)</text>
<rect x="15" y="48" width="170" height="30" rx="4" fill="#1e293b" stroke="#10b981"/>
<text x="100" y="68" font-size="9" fill="#4ade80" text-anchor="middle">Accepts Read & Write Traffic</text>
<text x="100" y="98" font-size="9" fill="#cbd5e1" text-anchor="middle">WAL Sender Worker</text>
<text x="100" y="122" font-size="9" fill="#fbbf24" text-anchor="middle">Replication Slot Buffer</text>

<path d="M205,75 L285,75" stroke="#38bdf8" stroke-width="2"/>
<text x="245" y="65" font-size="9" fill="#38bdf8" text-anchor="middle">TCP Stream</text>

<rect x="290" y="10" width="200" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="390" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Standby Replica (Port 5433)</text>
<rect x="305" y="48" width="170" height="30" rx="4" fill="#0f172a" stroke="#f59e0b"/>
<text x="390" y="68" font-size="9" fill="#fbbf24" text-anchor="middle">Read-Only Analytics Queries</text>
<text x="390" y="98" font-size="9" fill="#cbd5e1" text-anchor="middle">WAL Receiver Worker</text>
<text x="390" y="122" font-size="9" fill="#4ade80" text-anchor="middle">Continuous WAL Replay</text>

<path d="M495,75 L545,75" stroke="#10b981" stroke-width="2"/>

<rect x="550" y="25" width="110" height="100" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
<text x="605" y="55" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Disaster Safety</text>
<text x="605" y="80" font-size="9" fill="#4ade80" text-anchor="middle">Zero Data Loss</text>
<text x="605" y="105" font-size="8" fill="#cbd5e1" text-anchor="middle">Fast Failover</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. WAL Segment Files & Continuous Archiving', bn: '২. WAL সেগমেন্ট ফাইল ও ধারাবাহিক আর্কাইভিং' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL divides WAL data into fixed 16 MB binary files inside pg_wal/. As segments fill, the server rotates to a new file. Continuous Archiving uses archive_command to copy finished 16 MB segments to off-site cloud storage (such as Amazon S3), creating a permanent chronological audit log required for Point-in-Time Recovery.',
        bn: 'PostgreSQL সমস্ত WAL ডেটাকে pg_wal/ ফোল্ডারের ভেতর ১৬ মেগাবাইটের নির্দিষ্ট বাইনারি ফাইলে ভাগ করে। একটি ফাইল ভরে গেলে সার্ভার পরবর্তী ফাইলে চলে যায়। কনটিনিউয়াস আর্কাইভিং archive_command ব্যবহারের মাধ্যমে এই পূরণ হওয়া ১৬ মেগাবাইটের ফাইলগুলো ক্লাউড স্টোরেজে (যেমন Amazon S3) কপি করে রাখে, যা পরবর্তীতে পয়েন্ট-ইন-টাইম রিকভারির ভিত্তি হিসেবে কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Configuration inside postgresql.conf on Primary server:
wal_level = replica
archive_mode = on
archive_command = 'test ! -f /mnt/wal_archive/%f && cp %p /mnt/wal_archive/%f'
archive_timeout = 300 # Forces segment rotation every 300 seconds if idle`,
      caption: {
        en: 'Continuous WAL archiving ships 16 MB log segments off-site for disaster protection.',
        bn: 'ধারাবাহিক WAL আর্কাইভিং ১৬ মেগাবাইট ফাইলগুলোকে ব্যাকআপের জন্য ক্লাউডে সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Physical vs Logical Replication: Architectural Differences', bn: '৩. ফিজিক্যাল বনাম লজিক্যাল রেপ্লিকেশন: কাঠামোগত পার্থক্য' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL provides complementary replication models: Physical Replication streams exact 8 KB disk page byte changes from the WAL; the standby is an identical bit-for-bit read-only mirror of the primary. Logical Replication decodes the WAL into row-level SQL operations, allowing selective multi-database replication, differing table schemas, and bidirectional cross-version data syncing.',
        bn: 'PostgreSQL পরিপূরক রেপ্লিকেশন মডেল সমর্থন করে: ফিজিক্যাল রেপ্লিকেশন ডিস্কের হুবহু ৮ কিলোবাইট পেজের বাইনারি পরিবর্তনের স্ট্রিম স্ট্যান্ডবাই সার্ভারে পাঠায়; ফলে স্ট্যান্ডবাই সার্ভারটি প্রাইমারির হুবহু প্রতিরূপ হয়ে ওঠে। অন্যদিকে লজিক্যাল রেপ্লিকেশন WAL ডিকোড করে সাধারণ এসকিউএল অপারেশনে রূপান্তর করে, যা নির্দিষ্ট কিছু টেবিল অন্য সার্ভারে পাঠাতে বা ভিন্ন ভার্সনের মধ্যে সিঙ্ক করতে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `REPLICATION MODEL MATRIX:
+-------------------+--------------------+--------------------+
| Dimension         | Physical Streaming | Logical Replication|
+-------------------+--------------------+--------------------+
| Replication Scope | Entire Cluster     | Individual Tables  |
| Standby Usability | Read-Only Mirror   | Read-Write Allowed |
| Schema Matching   | Must be Identical  | Schemas Can Differ |
| Cross-Version Sync| Same Major Version | Across Major PG (14->16)|
| Primary Use Case  | Disaster Recovery  | Microservice Feeds |
+-------------------+--------------------+--------------------+`,
      caption: {
        en: 'Physical streaming provides high-availability failovers; logical replication feeds downstream services.',
        bn: 'ফিজিক্যাল রেপ্লিকেশন হাই অ্যাভেইলেবিলিটি দেয় আর লজিক্যাল রেপ্লিকেশন অন্যান্য সার্ভিসে ডেটা পাঠায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Physical Streaming Setup with pg_basebackup', bn: '৪. pg_basebackup দিয়ে ফিজিক্যাল স্ট্রিমিং সেটআপ' } },
    {
      type: 'para',
      text: {
        en: 'To initialize a physical standby, administrators use the pg_basebackup utility. It takes a live, non-blocking binary snapshot of the primary $PGDATA directory over the replication protocol. Adding the -R flag instructs pg_basebackup to generate standby connection configurations automatically, enabling instantaneous streaming replay.',
        bn: 'একটি নতুন ফিজিক্যাল স্ট্যান্ডবাই সার্ভার তৈরি করতে অ্যাডমিনরা pg_basebackup ইউটিলিটি ব্যবহার করেন। এটি প্রাইমারি সার্ভার চালু থাকা অবস্থাতেই কোনো ব্লকিং ছাড়াই পুরো $PGDATA ডিরেক্টরির স্ন্যাপশট নিয়ে আসে। এর সাথে -R ফ্ল্যাগ দিলে স্ট্যান্ডবাই সংযোগের সমস্ত নিয়ম স্বয়ংক্ৰিয়ভাবে তৈরি হয়ে যায়, ফলে সার্ভার চালু করলেই স্ট্রিমিং শুরু হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# On Standby Node: Clone primary data directory over network:
pg_basebackup -h primary.internal -p 5432 -U replicator \\
  -D /var/lib/postgresql/data -Fp -Xs -P -R

# The "-R" flag automatically creates standby.signal and appends:
# primary_conninfo = 'host=primary.internal port=5432 user=replicator password=secret'

# Start the standby database engine:
pg_ctl -D /var/lib/postgresql/data start
# Standby immediately begins streaming WAL bytes and replaying transactions!`,
      caption: {
        en: 'pg_basebackup creates an identical standby node ready for live streaming replication.',
        bn: 'pg_basebackup নেটওয়ার্কের মাধ্যমে তাৎক্ষণিক ব্যবহারের উপযোগী স্ট্যান্ডবাই ক্লোন বানায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Replication Slots: Preventing WAL Pruning Disasters', bn: '৫. রেপ্লিকেশন স্লট: WAL ফাইল মুছে যাওয়া প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'When network outages disconnect a standby server, the primary engine continues creating new transaction logs. Without safeguards, the primary might recycle older WAL segments before the replica reconnects, breaking synchronization. A Replication Slot solves this by instructing the primary to hold required logs in storage until the standby acknowledges receipt.',
        bn: 'নেটওয়ার্ক সমস্যার কারণে কোনো স্ট্যান্ডবাই সার্ভার বিচ্ছিন্ন থাকলেও প্রাইমারি সার্ভার নতুন ট্রানজ্যাকশন লগ তৈরি করতে থাকে। সুরক্ষা ব্যবস্থা না থাকলে প্রাইমারি পুরনো WAL ফাইলগুলো মুছে ফেলতে পারে, যার ফলে রেপ্লিকেশন স্থায়ীভাবে ভেঙে যায়। একটি রেপ্লিকেশন স্লট প্রাইমারি সার্ভারকে নির্দিষ্ট স্ট্যান্ডবাই কনফার্মেশন না দেওয়া পর্যন্ত প্রয়োজনীয় লগ ধরে রাখতে বাধ্য করে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create physical replication slot on Primary server:
SELECT pg_create_physical_replication_slot('standby_slot_alpha');

-- Standby references this slot in postgresql.conf:
-- primary_slot_name = 'standby_slot_alpha'

-- Inspect active replication slots and retained lag:
SELECT slot_name, active, wal_status
FROM pg_replication_slots;`,
      caption: {
        en: 'Replication slots protect slow or disconnected standbys from missing critical WAL records.',
        bn: 'রেপ্লিকেশন স্লট সাময়িক বিচ্ছিন্ন স্ট্যান্ডবাই সার্ভারের জন্য প্রয়োজনীয় WAL ফাইল ধরে রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Synchronous vs Asynchronous Durability Guarantees', bn: '৬. সিনক্রোনাস বনাম অ্যাসিনক্রোনাস ডেটা সুরক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'By default, PostgreSQL replication is asynchronous: transactions commit locally as soon as the WAL writes to the primary disk. For zero-data-loss guarantees in banking environments, setting synchronous_commit = on with synchronous_standby_names forces the primary to pause COMMIT replies until at least one standby confirms receiving the WAL byte stream.',
        bn: 'ডিফল্টভাবে PostgreSQL রেপ্লিকেশন অ্যাসিনক্রোনাস হয়: প্রাইমারি ডিস্কে WAL লেখার সাথে সাথে ট্রানজ্যাকশন সফল ঘোষণা করা হয়। কিন্তু ব্যাংকিং সিস্টেমে কোনো তথ্য যাতে না হারায় তা নিশ্চিত করতে synchronous_commit = on দিয়ে প্রাইমারিকে নির্দেশ দেওয়া হয় যেন অন্তত একটি স্ট্যান্ডবাই সার্ভার ডেটা পাওয়ার কনফার্মেশন না দেওয়া পর্যন্ত ক্লায়েন্টকে COMMIT নিশ্চিত না করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Zero data loss synchronous replication inside postgresql.conf:
synchronous_commit = on
synchronous_standby_names = 'FIRST 1 (standby_slot_alpha, standby_slot_beta)'

# Tradeoff:
# - Asynchronous: Fastest client throughput (~0.5ms commits), risk losing 1 second of deltas.
# - Synchronous : Absolute zero data loss (RPO = 0), but commits incur network round-trip delay.`,
      caption: {
        en: 'Synchronous commit eliminates data loss upon failover at the expense of network latency.',
        bn: 'সিনক্রোনাস মোড কোনো তথ্য হারাতে দেয় না তবে সামান্য নেটওয়ার্ক লেটেন্সি যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Point-in-Time Recovery (PITR): Rolling Back Human Error', bn: '৭. পয়েন্ট-ইন-টাইম রিকভারি (PITR): অনাকাঙ্ক্ষিত ভুল সংশোধন' } },
    {
      type: 'para',
      text: {
        en: 'If an engineer executes DROP TABLE customers by accident at 14:02:15, traditional daily backups lose 14 hours of work. Point-in-Time Recovery (PITR) restores the base backup and replays archived WAL segments forward sequentially, stopping recovery at 14:02:14—exactly one second before the accidental drop occurred.',
        bn: 'যদি কোনো ডেভেলপার ভুলবশত দুপুর ১৪:০২:১৫ মিনিটে ড্রপ টেবিল চালিয়ে দেন, তবে সাধারণ দৈনিক ব্যাকআপ দিয়ে আগের ১৪ ঘণ্টার কাজ ফিরে পাওয়া অসম্ভব। পয়েন্ট-ইন-টাইম রিকভারি (PITR) পুরো ব্যাকআপ রিস্টোর করে এবং ধারাবাহিকভাবে WAL ফাইলগুলো চালাতে থাকে, ঠিক ১৪:০২:১৪ মিনিটে—ভুল কমান্ডটি চলার ঠিক ১ সেকেন্ড আগে রিকভারি থামিয়ে দিয়ে সমস্ত ডেটা অবিকল ফিরিয়ে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# postgresql.conf recovery settings to roll back to precise moment:
restore_command = 'cp /mnt/wal_archive/%f %p'
recovery_target_time = '2026-10-01 14:02:14+00'
recovery_target_action = 'promote'

# Place recovery.signal file in data directory:
# touch /var/lib/postgresql/data/recovery.signal`,
      caption: {
        en: 'PITR replays WAL up to a precise historical microsecond, recovering from human catastrophes.',
        bn: 'PITR নির্দিষ্ট মাইক্রোসেকেন্ড পর্যন্ত ডেটা প্লে করে যেকোনো অনাকাঙ্ক্ষিত ক্ষতি উদ্ধার করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Hot Standby: Offloading Read-Only Analytics', bn: '৮. হট স্ট্যান্ডবাই: অ্যানালিটিক্যাল কুয়েরির চাপ হ্রাস' } },
    {
      type: 'para',
      text: {
        en: 'Replicas need not sit completely idle waiting for disasters. Configuring hot_standby = on allows client applications to connect to the standby and execute read-only queries (SELECT) concurrently while WAL records replay in the background. Heavy data warehouse queries and reporting jobs are routed here, preserving primary CPU cycles.',
        bn: 'বিপদের অপেক্ষায় স্ট্যান্ডবাই সার্ভার বসিয়ে রাখার প্রয়োজন নেই। hot_standby = on কনফিগার করলে ক্লায়েন্টরা স্ট্যান্ডবাই সার্ভারে যুক্ত হয়ে শুধুমাত্র পড়ার কুয়েরি (SELECT) চালাতে পারে, যখন ব্যাকগ্রাউন্ডে রেপ্লিকেশন চলতে থাকে। ফলে বিশাল অ্যানালিটিক্যাল কুয়েরিগুলো স্ট্যান্ডবাইতে সরিয়ে প্রাইমারি সার্ভারকে হালকা রাখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Verify that current server is running as a standby replica:
SELECT pg_is_in_recovery();
-- Output: true (Confirms read-only standby status!)

-- Check standby replay position timestamp:
SELECT pg_last_wal_receive_lsn(), pg_last_wal_replay_lsn(),
       pg_last_xact_replay_timestamp();`,
      caption: {
        en: 'pg_is_in_recovery() allows applications to verify read-only replica status dynamically.',
        bn: 'pg_is_in_recovery() নিশ্চিত করে ক্লায়েন্টটি রিড-অনলি রেপ্লিকায় যুক্ত আছে কিনা।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. High Availability Consensus & Automatic Failover: Patroni', bn: '৯. হাই অ্যাভেইলেবিলিটি কনসেনসাস ও স্বয়ংক্ৰিয় ফেইলওভার: Patroni' } },
    {
      type: 'para',
      text: {
        en: 'If a primary server crashes, promoting a replica manually causes unacceptable downtime. Enterprise architectures deploy Patroni alongside Distributed Consensus Stores (such as etcd or Consul). If the primary loses its heartbeat, etcd leadership lease expires, and Patroni elects and promotes a healthy standby automatically within 10 seconds, eliminating split-brain risks.',
        bn: 'প্রাইমারি সার্ভার ডাউন হলে ম্যানুয়ালি রেপলিকাকে নতুন মাস্টার বানাতে গেলে অনেক সময় নষ্ট হয়। এন্টারপ্রাইজ সিস্টেমে etcd বা Consul-এর মতো ডিস্ট্রিবিউটেড কনসেনসাসের সাহায্যে Patroni সফটওয়্যার ব্যবহার করা হয়। প্রাইমারি থেকে কোনো সাড়া না পেলে etcd তাৎক্ষণিকভাবে ১০ সেকেন্ডের মধ্যে একটি সুস্থ রেপলিকাকে নতুন প্রাইমারি হিসেবে পদোন্নতি দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `PATRONI HIGH AVAILABILITY ARCHITECTURE:
[Primary Node] <--- Heartbeat Lease ---> [etcd Cluster (Raft Consensus)]
      |                                              ^
(Streams WAL)                                        |
      v                                              |
[Standby Replica Node] <--- Monitors Health ---------+
If Primary dies -> etcd promotes Standby to new Primary within 10s!`,
      caption: {
        en: 'Raft-based consensus prevents split-brain dual-master scenarios during automated failovers.',
        bn: 'কনসেনসাস প্রযুক্তি অটো-ফেইলওভারের সময় একসাথে দুটি মাস্টার তৈরি হওয়া প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Monitoring Replication Lag in Node.js', bn: '১০. Node.js-এ রেপ্লিকেশন ল্যাগ পর্যবেক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'Here is a replication health check utility in Node.js utilizing node-postgres to query pg_stat_replication on the primary, alerting whenever byte lag or flush delays exceed thresholds.',
        bn: 'নিচে node-postgres ব্যবহার করে প্রাইমারি সার্ভারে pg_stat_replication কুয়েরি চালিয়ে রেপ্লিকেশন ল্যাগ বা নেটওয়ার্ক বিলম্ব পর্যবেক্ষণের একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;
const primaryPool = new Pool({ connectionString: "postgresql://postgres:secret@primary.internal:5432/postgres" });

async function checkReplicationLag() {
  const client = await primaryPool.connect();
  try {
    const res = await client.query(\`
      SELECT
        client_addr AS standby_ip,
        application_name,
        state,
        sync_state,
        pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes
      FROM pg_stat_replication;
    \`);

    for (const replica of res.rows) {
      console.log("Standby Node Telemetry:", {
        ip: replica.standby_ip,
        state: replica.state,
        syncMode: replica.sync_state,
        lagInKilobytes: (replica.lag_bytes / 1024).toFixed(2)
      });
    }
  } finally {
    client.release();
  }
}

await checkReplicationLag();
console.log("Replication telemetry query completed successfully");
// Output: Replication telemetry query completed successfully`,
      caption: {
        en: 'Monitoring pg_stat_replication ensures standby lag remains low, protecting against stale reads.',
        bn: 'pg_stat_replication পর্যবেক্ষণ নিশ্চিত করে যেন স্ট্যান্ডবাই সার্ভার খুব বেশি পিছিয়ে না থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-wal-ex1',
      kind: 'predict',
      topic: 'postgresql: default wal segment file size in MB',
      question: {
        en: 'What is the default physical file size in megabytes of an individual Write-Ahead Log (WAL) segment stored inside pg_wal/?',
        bn: 'pg_wal/ ফোল্ডারে সংরক্ষিত প্রতিটি রাইট-অ্যাহেড লগ (WAL) সেগমেন্টের ডিফল্ট ফাইলের আকার কত মেগাবাইট?'
      },
      code: `/* Default WAL segment size in MB: */
/* pg_wal/000000010000000000000001 -> __ MB */`,
      answer: '16',
      accept: ['16', '16MB', '16 MB'],
      hint: {
        en: '16 megabytes.',
        bn: '১৬ মেগাবাইট।'
      },
      explanation: {
        en: 'PostgreSQL structures WAL into fixed 16 MB segments, recycled or archived upon completion.',
        bn: 'PostgreSQL সমস্ত WAL ডেটাকে ১৬ মেগাবাইটের নির্দিষ্ট ফাইল খণ্ডে বিভক্ত করে রাখে।'
      }
    },
    {
      id: 'pg-wal-ex2',
      kind: 'mcq',
      topic: 'postgresql: base backup utility command',
      question: {
        en: 'Which command-line utility creates a full, non-blocking physical binary snapshot of a running primary server to initialize standbys?',
        bn: 'চলমান প্রাইমারি সার্ভার না থামিয়েই স্ট্যান্ডবাই সার্ভার তৈরি করতে কোন কমান্ড-লাইন ইউটিলিটি দিয়ে ফুল বাইনারি স্ন্যাপশট নেওয়া হয়?'
      },
      options: [
        { en: 'pg_basebackup', bn: 'pg_basebackup' },
        { en: 'pg_dump', bn: 'pg_dump' },
        { en: 'pg_restore', bn: 'pg_restore' },
        { en: 'pg_copy', bn: 'pg_copy' }
      ],
      answer: 0,
      hint: {
        en: 'pg_basebackup utility.',
        bn: 'pg_basebackup ইউটিলিটি।'
      },
      explanation: {
        en: 'pg_basebackup copies physical data pages and WAL files over the replication protocol, creating ready-to-run replicas.',
        bn: 'pg_basebackup ডাটাবেস পেজ ও WAL ফাইল নেটওয়ার্কে কপি করে সরাসরি চালনাযোগ্য রেপ্লিকা তৈরি করে।'
      }
    },
    {
      id: 'pg-wal-ex3',
      kind: 'mcq',
      topic: 'postgresql: standby read query mode parameter',
      question: {
        en: 'Which configuration parameter must be set to "on" to allow read-only SELECT queries on a standby replica while it replays WAL records?',
        bn: 'ব্যাকগ্রাউন্ডে রেপ্লিকেশন চলাকালীন স্ট্যান্ডবাই সার্ভারে রিড-অনলি SELECT কুয়েরি চালানোর অনুমতি দিতে কোন প্যারামিটারটি "on" করতে হয়?'
      },
      options: [
        { en: 'hot_standby', bn: 'hot_standby' },
        { en: 'read_only_mode', bn: 'read_only_mode' },
        { en: 'enable_analytics', bn: 'enable_analytics' },
        { en: 'wal_reader', bn: 'wal_reader' }
      ],
      answer: 0,
      hint: {
        en: 'hot_standby parameter.',
        bn: 'hot_standby প্যারামিটার।'
      },
      explanation: {
        en: 'Setting hot_standby = on allows connections to query the standby concurrently while WAL replay continues.',
        bn: 'hot_standby = on রাখলে রেপ্লিকেশনের পাশাপাশি ক্লায়েন্টরা স্ট্যান্ডবাই থেকে ডেটা পড়তে পারে।'
      }
    }
  ],
  quiz: {
    id: 'pg-wal-quiz',
    title: { en: 'PostgreSQL WAL & High Availability Quiz', bn: 'PostgreSQL WAL ও হাই অ্যাভেইলেবিলিটি কুইজ' },
    questions: [
      {
        id: 'pwalq1',
        kind: 'mcq',
        topic: 'postgresql: replication slot primary duty',
        question: {
          en: 'What critical failure mode does a PostgreSQL Replication Slot prevent on the primary server?',
          bn: 'PostgreSQL-এ একটি রেপ্লিকেশন স্লট প্রাইমারি সার্ভারে কোন মারাত্মক ঝুঁকি প্রতিরোধ করে?'
        },
        options: [
          { en: 'It prevents the primary from deleting un-replayed WAL segments before a slow or disconnected standby has received them', bn: 'ধীরগতির বা সাময়িক বিচ্ছিন্ন স্ট্যান্ডবাই সার্ভার গ্রহণ করার আগেই প্রাইমারি যাতে দরকারি WAL ফাইল মুছে না ফেলে তা রোধ করে' },
          { en: 'It doubles the network internet speed', bn: 'ইন্টারনেট স্পিড দ্বিগুণ করে' },
          { en: 'It deletes expired user passwords', bn: 'পাসওয়ার্ড মুছে ফেলে' },
          { en: 'It makes all SQL tables unreadable', bn: 'টেবিল অপাঠ্য করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents WAL deletion before replicas receive them.',
          bn: 'রেপ্লিকা পাওয়ার আগে WAL মোছা রোধ করে।'
        },
        explanation: {
          en: 'Replication slots guarantee that the primary retains all necessary WAL files on disk until standbys acknowledge consumption.',
          bn: 'রেপ্লিকেশন স্লট নিশ্চিত করে যেন স্ট্যান্ডবাই ডেটা পাওয়ার আগে প্রাইমারি কোনো প্রয়োজনীয় লগ ডিলিট না করে।'
        }
      },
      {
        id: 'pwalq2',
        kind: 'mcq',
        topic: 'postgresql: point in time recovery recovery mechanism',
        question: {
          en: 'How does Point-in-Time Recovery (PITR) successfully restore a database to a specific historical microsecond?',
          bn: 'পয়েন্ট-ইন-টাইম রিকভারি (PITR) কীভাবে একটি ডাটাবেসকে অতীতের একটি নির্দিষ্ট মাইক্রোসেকেন্ডে অবিকল ফিরিয়ে নিয়ে যায়?'
        },
        options: [
          { en: 'By restoring a full base backup and replaying archived WAL segments forward until reaching the target timestamp', bn: 'একটি ফুল বেস ব্যাকআপ রিস্টোর করে এবং নির্দিষ্ট সময় না আসা পর্যন্ত ধারাবাহিকভাবে সংরক্ষিত WAL ফাইলগুলো চালিয়ে' },
          { en: 'By guessing previous table data with artificial intelligence', bn: 'এআই দিয়ে অনুমান করে' },
          { en: 'By querying Google web search archives', bn: 'গুগল সার্চ থেকে তথ্য নিয়ে' },
          { en: 'By restarting the operating system repeatedly', bn: 'বারবার ওএস রিস্টার্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Restores base backup and replays WAL up to target time.',
          bn: 'বেস ব্যাকআপ রিস্টোর করে নির্দিষ্ট সময় পর্যন্ত WAL প্লে করে।'
        },
        explanation: {
          en: 'PITR combines a baseline data snapshot with sequential archived WAL logs, stopping replay at the precise recovery target timestamp.',
          bn: 'PITR একটি বেস স্ন্যাপশট ও WAL ফাইল মিলিয়ে যেকোনো বিপর্যয়ের ঠিক আগের মুহূর্তে ডেটা রিকভার করে।'
        }
      },
      {
        id: 'pwalq3',
        kind: 'mcq',
        topic: 'postgresql: synchronous replication trade off',
        question: {
          en: 'What is the operational trade-off of setting synchronous_commit = on in a streaming replication cluster?',
          bn: 'স্ট্রিমিং রেপ্লিকেশন ক্লাস্টারে synchronous_commit = on রাখার কার্যগত সুবিধা ও অসুবিধা কোনটি?'
        },
        options: [
          { en: 'It guarantees zero data loss upon failover (RPO = 0), but every write transaction incurs network round-trip latency to standbys', bn: 'এটি ফেইলওভারের সময় শতভাগ ডেটা সুরক্ষার নিশ্চয়তা দেয়, তবে প্রতিটি রাইট লেনদেনে স্ট্যান্ডবাইয়ের সাথে নেটওয়ার্ক লেটেন্সি যোগ হয়' },
          { en: 'It permanently disables database backups', bn: 'ব্যাকআপ বন্ধ করে দেয়' },
          { en: 'It encrypts database data with Bitcoin keys', bn: 'বিটকয়েন কি দিয়ে এনক্রিপ্ট করে' },
          { en: 'It makes all queries execute 1,000 times slower', bn: '১,০০০ গুণ ধীরগতি করে' }
        ],
        answer: 0,
        hint: {
          en: 'Zero data loss at the cost of network latency.',
          bn: 'নেটওয়ার্ক লেটেন্সির বিনিময়ে শতভাগ ডেটা সুরক্ষা।'
        },
        explanation: {
          en: 'Synchronous replication eliminates data loss by waiting for standby write acknowledgments, slightly increasing write latencies.',
          bn: 'সিনক্রোনাস রেপ্লিকেশন স্ট্যান্ডবাইয়ের কনফার্মেশনের অপেক্ষায় থাকে, যা নিরাপত্তা নিশ্চিত করে কিন্তু লেটেন্সি সামান্য বাড়ায়।'
        }
      },
      {
        id: 'pwalq4',
        kind: 'mcq',
        topic: 'postgresql: automated failover consensus technology',
        question: {
          en: 'Which architectural component prevents "split-brain" dual-master disasters during automated PostgreSQL failovers?',
          bn: 'স্বয়ংক্রিয় PostgreSQL ফেইলওভারের সময় কোন স্থাপত্য উপাদানটি একসাথে দুটি মাস্টার সার্ভার তৈরি হওয়া (স্প্লিট-ব্রেন) প্রতিরোধ করে?'
        },
        options: [
          { en: 'Distributed consensus stores (like etcd or Consul) using Raft leader leases managed by orchestrators like Patroni', bn: 'Patroni সহযোগে etcd বা Consul-এর মতো ডিস্ট্রিবিউটেড কনসেনসাস ও রাফট লিডার লিজ মেকানিজম' },
          { en: 'A simple bash sleep loop', bn: 'একটি সাধারণ স্লিপ লুপ' },
          { en: 'A text file saved on the desktop', bn: 'ডেস্কটপে রাখা টেক্সট ফাইল' },
          { en: 'Unplugging the ethernet cable manually', bn: 'ম্যানুয়ালি কেবল খুলে ফেলা' }
        ],
        answer: 0,
        hint: {
          en: 'Distributed consensus with etcd/Consul and Patroni.',
          bn: 'etcd/Consul ও Patroni দিয়ে ডিস্ট্রিবিউটেড কনসেনসাস।'
        },
        explanation: {
          en: 'Consensus algorithms guarantee that only one node holds the master lease at any time, preventing split-brain corruption.',
          bn: 'কনসেনসাস অ্যালগরিদম নিশ্চিত করে যে যেকোনো মুহূর্তে কেবল একজনই মাস্টার থাকবে, ফলে ডেটা সংঘর্ষ প্রতিরোধ হয়।'
        }
      }
    ]
  }
};
