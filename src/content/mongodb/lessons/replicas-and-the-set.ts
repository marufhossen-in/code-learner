import type { Lesson } from '../../../lib/types';

export const ReplicasAndTheSetLesson: Lesson = {
  slug: 'replicas-and-the-set',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Replica Sets: High Availability, Elections & Write Concerns',
    bn: 'MongoDB রেপ্লিকা সেট: হাই অ্যাভেইল্যাবিলিটি, নির্বাচন ও রাইট কনসার্ন'
  },
  summary: {
    en: 'Master database clustering and fault tolerance in MongoDB across 10 structured topics. Understand primary-secondary architecture and the odd-member quorum rule. Explore the capped oplog stream and replication lag mechanics. Configure automatic failover elections triggered by heartbeat timeouts. Deep-dive into write concerns (w: 1, w: "majority", j: true). Choose appropriate read preferences (primary, secondary, nearest). Master read concerns including majority and linearizable. Deploy delayed backup nodes, diagnose replica health with rs.status(), and configure production driver connection pools.',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB ক্লাস্টারিং এবং ফল্ট টলারেন্স আয়ত্ত করুন। প্রাইমারি-সেকেন্ডারি নোড ব্যবস্থা এবং বিজোড় সদস্যের কোরাম নিয়ম বুঝুন। ক্যাপড অপলগ (oplog) স্ট্রিম ও রেপ্লিকেশন ল্যাগ জানুন। হার্টবিট টাইমআউট ও স্বয়ংক্রিয় নির্বাচন প্রক্রিয়া শিখুন। রাইট কনসার্ন (w: 1, w: "majority", j: true) গভীরভাবে জানুন। সঠিক রিড প্রেফারেন্স (primary, secondary, nearest) নির্বাচন করুন। majority ও linearizable রিড কনসার্ন বুঝুন। ডিলেড ব্যাকআপ নোড পরিচালনা করুন, rs.status() দিয়ে ক্লাস্টারের স্বাস্থ্য পরীক্ষা করুন এবং কানেকশন পুল কনফিগার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'shards-and-the-key',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Sharding: Chunk Balancing, Shard Keys & Horizontal Scale',
      bn: 'MongoDB শার্ডিং: চাঙ্ক ব্যালান্সিং, শার্ড কি ও অনুভূমিক স্কেলিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Replica Set Architecture: Primary, Secondaries & Quorum', bn: '১. রেপ্লিকা সেট আর্কিটেকচার: প্রাইমারি, সেকেন্ডারি ও কোরাম' } },
    {
      type: 'para',
      text: {
        en: 'A MongoDB replica set is a cluster of mongod instances maintaining identical datasets for high availability. One instance is elected Primary to accept all write operations. All other instances act as Secondaries, replicating data asynchronously. Production clusters enforce an odd number of voting nodes (minimum 3) to prevent split-brain partition ties.',
        bn: 'MongoDB রেপ্লিকা সেট হলো কয়েকটি mongod সার্ভারের একটি দল যা সার্বক্ষণিক ডেটা সুরক্ষার জন্য একই ডেটাসেট বজায় রাখে। এদের মধ্য থেকে একটি সার্ভার প্রাইমারি (Primary) নির্বাচিত হয়ে সব ডেটা রাইট অপারেশন গ্রহণ করে। বাকিগুলো সেকেন্ডারি (Secondary) হিসেবে ডেটা কপি করে। টাই বা অচল অবস্থা এড়াতে ক্লাস্টারে সর্বদা বিজোড় সংখ্যক (নূন্যতম ৩টি) ভোটিং নোড রাখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `REPLICA SET TOPOLOGY (3-Node Quorum):
        [Client Application]
             |         |
      Writes |         | Reads (Optional)
             v         v
     +-------------------+
     |   PRIMARY NODE    | (Handles all writes, records to OpLog)
     +-------------------+
        /             \\
  OpLog/               \\OpLog
      v                 v
+------------+   +------------+
| SECONDARY  |   | SECONDARY  | (Syncs OpLog asynchronously,
|   NODE A   |   |   NODE B   |  votes during elections)
+------------+   +------------+`,
      caption: {
        en: 'A three-node replica set provides redundancy and automated failover.',
        bn: 'একটি তিন-নোডের রেপ্লিকা সেট স্বয়ংক্রিয় ফেইলওভার ও সার্বক্ষণিক ডেটা সুরক্ষা দেয়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Replica Set High Availability Architecture', bn: 'রেপ্লিকা সেট হাই অ্যাভেইল্যাবিলিটি আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="MongoDB Replica Set High Availability cluster">
<g transform="translate(40, 20)">
<rect x="200" y="0" width="200" height="60" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="300" y="26" font-size="12" font-weight="700" fill="#4ade80" text-anchor="middle">PRIMARY NODE</text>
<text x="300" y="46" font-size="10" fill="#cbd5e1" text-anchor="middle">Accepts Writes + OpLog Stream</text>

<path d="M230,62 L120,105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
<text x="145" y="80" font-size="9" fill="#38bdf8">Sync OpLog</text>

<path d="M370,62 L480,105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
<text x="440" y="80" font-size="9" fill="#38bdf8">Sync OpLog</text>

<rect x="20" y="105" width="200" height="55" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
<text x="120" y="128" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">SECONDARY NODE A</text>
<text x="120" y="146" font-size="9" fill="#94a3b8" text-anchor="middle">Read Analytics + Quorum Vote</text>

<rect x="380" y="105" width="200" height="55" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
<text x="480" y="128" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">SECONDARY NODE B</text>
<text x="480" y="146" font-size="9" fill="#94a3b8" text-anchor="middle">Read Analytics + Quorum Vote</text>

<path d="M225,130 L375,130" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2"/>
<text x="300" y="125" font-size="9" fill="#fbbf24" text-anchor="middle">Heartbeat Pings (Every 2s)</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. The OpLog: Idempotent Operations & Replication Lag', bn: '২. অপলগ (OpLog): আইডেমপোটেন্ট অপারেশন ও রেপ্লিকেশন ল্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Replication relies on the operations log (oplog), a capped collection located at local.oplog.rs. Every write accepted by the primary is logged as an idempotent operation (e.g. $inc is converted to an absolute $set). Secondaries continuously fetch and apply these entries. Replication lag measures how many seconds a secondary lags behind the primary.',
        bn: 'রেপ্লিকেশন প্রক্রিয়াটি local.oplog.rs নামক একটি বিশেষ ক্যাপড কালেকশনের ওপর কাজ করে যাকে অপলগ (oplog) বলে। প্রাইমারিতে আসা প্রতিটি পরিবর্তন এখানে আইডেমপোটেন্ট হিসেবে লেখা হয় (যেমন $inc সরাসরি $set-এ বদলে যায়)। সেকেন্ডারিগুলো এই লগ পড়ে ডেটা আপডেট করে। প্রাইমারির চেয়ে সেকেন্ডারি কত সেকেন্ড পিছিয়ে আছে তাকে রেপ্লিকেশন ল্যাগ বলে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Checking replica set synchronization and replication lag:
rs.printSecondaryReplicationInfo();

// Sample terminal output:
// source: secondary-node-1:27017
//   syncedTo: Sat Sep 26 2026 10:45:12 GMT+0000
//   0 secs (0 hrs) behind the primary
// source: secondary-node-2:27017
//   syncedTo: Sat Sep 26 2026 10:45:11 GMT+0000
//   1 secs (0 hrs) behind the primary`,
      caption: {
        en: 'Monitoring secondary synchronization ensures low replication latency.',
        bn: 'সেকেন্ডারিগুলোর রেপ্লিকেশন ল্যাগ মনিটর করা ক্লাস্টারের স্বাস্থ্যের জন্য জরুরি।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Heartbeats & Automatic Failover Elections', bn: '৩. হার্টবিট ও স্বয়ংক্রিয় লিডার নির্বাচন' } },
    {
      type: 'para',
      text: {
        en: 'Replica nodes exchange periodic heartbeat pings every 2 seconds. If the primary fails to respond within 10 seconds (electionTimeoutMillis), the surviving secondaries initiate an election using a consensus algorithm. The secondary with the freshest oplog and highest priority wins the election and becomes the new Primary in under 12 seconds.',
        bn: 'রেপ্লিকা নোডগুলো প্রতি ২ সেকেন্ড পর পর একে অপরকে হার্টবিট পিং পাঠিয়ে সচলতা পরীক্ষা করে। প্রাইমারি যদি টানা ১০ সেকেন্ড সাড়া না দেয়, তবে অবশিষ্ট সেকেন্ডারিগুলো ঐকমত্য অ্যালগরিদম মেনে নতুন লিডার নির্বাচনের ভোট শুরু করে। যার কাছে সবচেয়ে হালনাগাদ অপলগ ডেটা এবং বেশি প্রায়োরিটি থাকে, সে মাত্র ১২ সেকেন্ডের মধ্যে নতুন প্রাইমারি হিসেবে দায়িত্ব নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `FAILOVER TIMELINE:
T = 0s  : Primary server hardware experiences sudden power cut.
T = 2s  : Heartbeat ping from Secondary A fails.
T = 10s : Election timeout triggered (electionTimeoutMillis = 10,000 ms).
T = 11s : Secondaries call election; Secondary A has highest OpLog timestamp.
T = 12s : Secondary A receives majority votes (2/2 surviving) -> Becomes PRIMARY!
T = 13s : Application driver reconnects to new Primary with zero data loss.`,
      caption: {
        en: 'Automated election mechanisms guarantee zero-touch failover during primary outages.',
        bn: 'স্বয়ংক্রিয় নির্বাচন ব্যবস্থা কোনো মানুষের হস্তক্ষেপ ছাড়াই ফেইলওভার সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Write Concerns: Durability Guarantees (w: 1, majority, j: true)', bn: '৪. রাইট কনসার্ন: স্থায়িত্বের নিশ্চয়তা (w: 1, majority, j: true)' } },
    {
      type: 'para',
      text: {
        en: 'Write concern specifies the acknowledgment level requested from MongoDB for write operations. Mode w: 1 returns success once the primary writes to memory. Mode w: "majority" waits until a quorum of voting nodes confirms the write. Setting j: true guarantees the write is persisted to the on-disk journal before responding.',
        bn: 'রাইট কনসার্ন ঠিক করে কোনো তথ্য লেখার পর MongoDB কতটা নিশ্চিত হয়ে সফলতার স্বীকৃতি পাঠাবে। w: 1 মোডে প্রাইমারি মেমরিতে লেখামাত্রই সফল বলে। w: "majority" দিলে ক্লাস্টারের অধিকাংশ নোডে তথ্য না পৌঁছানো পর্যন্ত অপেক্ষা করে। আর j: true দিলে তথ্যটি ডিস্কের জার্নাল ফাইলে সেভ হওয়া পর্যন্ত অপেক্ষা করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Writing critical financial transaction with strict durability:
await db.collection("transfers").insertOne(
  { fromAccount: 101, toAccount: 202, amount: 5000 },
  {
    writeConcern: {
      w: "majority",       // Wait for majority nodes acknowledgment
      j: true,             // Written to disk journal
      wtimeout: 5000       // Abort if replication exceeds 5,000 ms
    }
  }
);

console.log("Transaction committed with guaranteed multi-node durability");
// Output: Transaction committed with guaranteed multi-node durability`,
      caption: {
        en: 'Combining majority write concern and journaling prevents data loss during failovers.',
        bn: 'মেজরটি রাইট কনসার্ন ও জার্নালিং ফেইলওভারের সময়ও ডেটা পুরোপুরি সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Read Preferences: Routing Query Traffic', bn: '৫. রিড প্রেফারেন্স: কুয়েরি ট্রাফিক পরিচালনা' } },
    {
      type: 'para',
      text: {
        en: 'Read preference determines how client drivers route read queries among cluster members. The default is primary for strictly consistent reads. The primaryPreferred mode reads secondary only during primary downtime. The secondary mode offloads heavy analytical traffic to replicas. Finally, nearest routes queries to the node with lowest network latency.',
        bn: 'রিড প্রেফারেন্স নির্ধারণ করে অ্যাপ্লিকেশন কোন নোড থেকে ডেটা পড়বে। ডিফল্ট হলো primary যা শতভাগ নিখুঁত ডেটা দেয়। primaryPreferred মোড প্রাইমারি না থাকলে সেকেন্ডারি থেকে পড়ে। secondary মোড অ্যানালিটিক্স ট্রাফিক সেকেন্ডারিতে পাঠায়। আর nearest সবচেয়ে কম নেটওয়ার্ক লেটেন্সির নিকটবর্তী নোড থেকে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Routing read-heavy business analytics to secondary instances:
const reportData = await db.collection("orders")
  .find({ status: "completed" })
  .readPreference("secondary")
  .toArray();

console.log("Analytics query executed safely on secondary replica node");
// Output: Analytics query executed safely on secondary replica node`,
      caption: {
        en: 'Secondary read preferences protect the primary from heavy analytical workloads.',
        bn: 'সেকেন্ডারি রিড প্রেফারেন্স মূল প্রাইমারি নোডকে অতিরিক্ত কাজের চাপ থেকে বাঁচায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Read Concern Levels: local, majority & linearizable', bn: '৬. রিড কনসার্ন স্তর: local, majority ও linearizable' } },
    {
      type: 'para',
      text: {
        en: 'Read concern controls the consistency and isolation of retrieved documents. "local" returns the current node’s data immediately, which might be rolled back if the node crashes. "majority" returns only documents committed to a quorum of members, guaranteeing the data can never be rolled back. "linearizable" guarantees real-time serializable consistency.',
        bn: 'রিড কনসার্ন নির্ধারণ করে পঠিত ডেটা কতটা সুরক্ষিত ও অপরিবর্তনীয়। "local" নোডের বর্তমান ডেটা সরাসরি ফেরত দেয়, যা নোডটি ক্র্যাশ করলে পরে হারিয়ে যেতে পারে। "majority" শুধু সেই ডেটা পড়তে দেয় যা ক্লাস্টারের অধিকাংশ সদস্যে নিশ্চিত হয়েছে, ফলে এই ডেটা কখনো রোলব্যাক হয় না। "linearizable" রিয়েল-টাইম সিরিয়ালাইজেবল নিরাপত্তা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Querying with majority read concern to prevent reading rollback-vulnerable data:
const balance = await db.collection("wallets").findOne(
  { userId: 4401 },
  { readConcern: { level: "majority" } }
);

console.log("Retrieved verified balance immune to cluster failover rollbacks");
// Output: Retrieved verified balance immune to cluster failover rollbacks`,
      caption: {
        en: 'Majority read concerns ensure data read by the application cannot be rolled back.',
        bn: 'মেজরটি রিড কনসার্ন নিশ্চিত করে যে পঠিত ডেটা কখনো হারিয়ে যাবে না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Rollback Recovery: Managing Uncommitted Writes', bn: '৭. রোলব্যাক পুনরুদ্ধার: অনিশ্চিত ডেটার ব্যবস্থাপনা' } },
    {
      type: 'para',
      text: {
        en: 'If a former primary accepted writes with w: 1 before abruptly disconnecting, those writes never reached secondaries. When this node rejoins as a secondary, it discovers conflicting logs. MongoDB automatically rolls back the orphaned writes, saving them into BSON files inside a rollback directory for manual administrative recovery.',
        bn: 'যদি কোনো সাবেক প্রাইমারি w: 1 কনসার্নে কিছু ডেটা লিখে হঠাৎ সংযোগ হারায়, তবে সেই ডেটা অন্য নোডগুলোতে পৌঁছায় না। নোডটি পুনরায় সেকেন্ডারি হিসেবে ফিরে এলে এই অসঙ্গতি ধরা পড়ে। তখন MongoDB অপ্রচলিত ডেটাগুলো রোলব্যাক করে সার্ভারের rollback ডিরেক্টরিতে BSON ফাইল হিসেবে জমা রাখে, যাতে অ্যাডমিন পরে তা ম্যানুয়ালি রিকভার করতে পারেন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `ROLLBACK EVENT FLOW:
1. Node A (Primary) accepts Write X (w:1).
2. Node A network cable severed before replicating Write X to Nodes B & C.
3. Node B elected new Primary, accepts Write Y.
4. Node A reconnected -> Discovers Node B is Primary with different OpLog!
5. Node A rolls back Write X, writes it to /data/db/rollback/collection.bson.
6. Node A catches up with Node B OpLog -> Clean cluster state restored!`,
      caption: {
        en: 'Uncommitted writes on deposed primaries are safely extracted to rollback files.',
        bn: 'সাবেক প্রাইমারির অসঙ্গত ডেটা স্বয়ংক্রিয়ভাবে রোলব্যাক ফাইলে সংরক্ষণ করা হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Specialized Members: Hidden & Delayed Backup Nodes', bn: '৮. বিশেষ সদস্য: হিডেন ও ডিলেড ব্যাকআপ নোড' } },
    {
      type: 'para',
      text: {
        en: 'Replica sets support specialized members configured in rs.conf(): hidden members (priority 0, hidden: true) vote in elections but remain invisible to client applications, perfect for reporting engines. Delayed members with secondaryDelaySecs maintain an intentional 1 hour delay behind the primary as an insurance policy against accidental database drops.',
        bn: 'রেপ্লিকা সেটে বিশেষ ধরনের নোড রাখা যায়: হিডেন মেম্বার (priority 0, hidden: true) ভোটিংয়ে অংশ নেয় কিন্তু অ্যাপ্লিকেশন ক্লায়েন্ট থেকে অদৃশ্য থাকে, যা রিপোর্টিংয়ের জন্য দারুণ। আর ডিলেড মেম্বার ইচ্ছা করেই ১ ঘণ্টা পিছিয়ে থাকে, যাতে ভুলবশত সম্পূর্ণ ডাটাবেস ড্রপ করে ফেললেও সাথে সাথে আগের ডেটা উদ্ধার করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Configuring a 1-hour delayed safety member:
const cfg = rs.conf();
cfg.members[2].priority = 0;             // Cannot become primary
cfg.members[2].hidden = true;              // Hidden from application drivers
cfg.members[2].secondaryDelaySecs = 3600;  // 1-hour replication lag shield
rs.reconfig(cfg);

console.log("Delayed replica configured as a recovery safety net");
// Output: Delayed replica configured as a recovery safety net`,
      caption: {
        en: 'Delayed members provide a rolling recovery window against disastrous administrative mistakes.',
        bn: 'ডিলেড মেম্বার অনিচ্ছাকৃত মানবিক ভুলের বিরুদ্ধে একটি চমৎকার ব্যাকআপ শিল্ড তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Cluster Diagnostics with rs.status() & rs.stepDown()', bn: '৯. rs.status() ও rs.stepDown() দিয়ে ক্লাস্টার পরিচালনা' } },
    {
      type: 'para',
      text: {
        en: 'Administrators inspect cluster health using rs.status(). The output displays node roles (PRIMARY, SECONDARY), health flags (1 for healthy, 0 for unreachable), and heartbeat latencies. For zero-downtime planned maintenance, administrators run rs.stepDown() on the primary to safely transfer leadership to a secondary before restarting.',
        bn: 'অ্যাডমিনিস্ট্রেটররা rs.status() দিয়ে সম্পূর্ণ ক্লাস্টারের স্বাস্থ্য পরীক্ষা করেন। এটি প্রতিটি নোডের ভূমিকা (PRIMARY, SECONDARY), সচলতা ফ্ল্যাগ (১ মানে সুস্থ, ০ মানে বিচ্ছিন্ন) এবং পিং লেটেন্সি দেখায়। কোনো নোড রিবুট বা আপগ্রেড করার আগে প্রাইমারিতে rs.stepDown() চালালে কোনো বিঘ্ন ছাড়াই অন্য নোড নতুন লিডার হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Checking replica status:
const status = rs.status();
console.log("Replica Set Name:", status.set);
console.log("Active Members:", status.members.length);
console.log("Primary Member State:", status.members[0].stateStr);
// Output:
// Replica Set Name: rs0
// Active Members: 3
// Primary Member State: PRIMARY`,
      caption: {
        en: 'Cluster diagnostics provide real-time visibility into node health and topology.',
        bn: 'ক্লাস্টার ডায়াগনস্টিকস প্রতিটি নোডের অবস্থা ও ভূমিকা স্পষ্টভাবে দেখায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production Connection String & Retryable Writes in Node.js', bn: '১০. Node.js-এ প্রোডাকশন কানেকশন স্ট্রিং ও রিট্রাইয়েবল রাইটস' } },
    {
      type: 'para',
      text: {
        en: 'In production, applications connect using a multi-host URI specifying the replicaSet name. Modern MongoDB drivers enable retryable writes by default (retryWrites=true), allowing the driver to automatically retry transient write failures caused by primary elections without throwing application errors.',
        bn: 'প্রোডাকশনে অ্যাপ্লিকেশনে একাধিক নোডের হোস্ট ও replicaSet নাম উল্লেখ করে কানেকশন স্ট্রিং দিতে হয়। আধুনিক MongoDB ড্রাইভার ডিফল্টভাবেই retryable writes (retryWrites=true) চালু রাখে, যার ফলে প্রাইমারি নির্বাচনের মতো সাময়িক বিভ্রান্তিতে কোনো এরর না দিয়ে ড্রাইভার নিজে থেকেই পুনরায় অপারেশনটি চালায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Production MongoClient connection string:
import { MongoClient } from "mongodb";

const uri = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/shop?replicaSet=rs0&w=majority&retryWrites=true";
const client = new MongoClient(uri, {
  maxPoolSize: 50,
  serverSelectionTimeoutMS: 5000
});

await client.connect();
console.log("Connected to MongoDB Replica Set with automated retryable writes");
// Output: Connected to MongoDB Replica Set with automated retryable writes`,
      caption: {
        en: 'Production driver connections handle automated cluster failover transparently.',
        bn: 'প্রোডাকশন ড্রাইভার সংযোগ সার্ভার ফেইলওভারের সময় নিজে থেকেই নতুন প্রাইমারি চিনে নেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-rep-ex1',
      kind: 'predict',
      topic: 'mongodb: default election timeout millis',
      question: {
        en: 'What is the default election timeout in milliseconds (electionTimeoutMillis) before replica set secondaries initiate a new primary election?',
        bn: 'রেপ্লিকা সেট সেকেন্ডারিগুলো নতুন প্রাইমারি নির্বাচনের ভোট ডাকার আগে ডিফল্ট কত মিলিসেকেন্ড (electionTimeoutMillis) প্রাইমারির হার্টবিটের জন্য অপেক্ষা করে?'
      },
      code: `/* Default electionTimeoutMillis value: */
/* timeout = _____ ms */`,
      answer: '10000',
      accept: ['10000', '10000ms', '10,000'],
      hint: {
        en: '10000 milliseconds (10 seconds).',
        bn: '১০০০০ মিলিসেকেন্ড (১০ সেকেন্ড)।'
      },
      explanation: {
        en: 'The default electionTimeoutMillis is 10000 ms (10 seconds), preventing transient network hiccups from triggering unnecessary elections.',
        bn: 'ডিফল্ট মান ১০০০০ মিলিসেকেন্ড (১০ সেকেন্ড), যাতে ছোটখাটো নেটওয়ার্ক বিভ্রাটে হুট করে নির্বাচন শুরু না হয়।'
      }
    },
    {
      id: 'mng-rep-ex2',
      kind: 'mcq',
      topic: 'mongodb: odd voting nodes quorum',
      question: {
        en: 'Why do production MongoDB replica sets strictly require an odd number of voting members (e.g. 3 or 5)?',
        bn: 'প্রোডাকশন MongoDB রেপ্লিকা সেটে কেন কঠোরভাবে বিজোড় সংখ্যক (যেমন ৩ বা ৫টি) ভোটিং মেম্বার রাখা আবশ্যক?'
      },
      options: [
        { en: 'To achieve a clear majority quorum and avoid split-brain ties during leader elections', bn: 'সহজে সংখ্যাগরিষ্ঠ কোরাম অর্জন করতে এবং লিডার নির্বাচনে টাই বা অচলাবস্থা এড়াতে' },
        { en: 'Because even numbers reduce RAM speeds by 50 percent', bn: 'কারণ জোড় সংখ্যায় র‍্যামের গতি ৫০ শতাংশ কমে যায়' },
        { en: 'To support GraphQL queries', bn: 'গ্রাফকিউএল কুয়েরি সাপোর্ট করার জন্য' },
        { en: 'MongoDB cannot install on even node counts', bn: 'জোড় সংখ্যক নোডে মঙ্গোডিবি ইনস্টল হয় না' }
      ],
      answer: 0,
      hint: {
        en: 'Prevents split-brain ties in elections.',
        bn: 'নির্বাচনে সমতা বা টাই হওয়া রোধ করে।'
      },
      explanation: {
        en: 'An odd number of voting members ensures that a strict majority (>50%) can always be reached, preventing deadlock during network partitions.',
        bn: 'বিজোড় সংখ্যক নোড নিশ্চিত করে যে ভোটের সময় সর্বদা সুস্পষ্ট সংখ্যাগরিষ্ঠতা (>৫০%) পাওয়া যাবে।'
      }
    },
    {
      id: 'mng-rep-ex3',
      kind: 'mcq',
      topic: 'mongodb: write concern majority',
      question: {
        en: 'What guarantee does writeConcern: { w: "majority" } provide to the client application?',
        bn: 'writeConcern: { w: "majority" } ক্লায়েন্ট অ্যাপ্লিকেশনকে কী নিশ্চয়তা দেয়?'
      },
      options: [
        { en: 'The write has been committed by a majority of voting members, guaranteeing it cannot be lost or rolled back in a failover', bn: 'লেখাটি সংখ্যাগরিষ্ঠ ভোটিং সদস্য দ্বারা গৃহীত হয়েছে, ফলে ফেইলওভারেও এই ডেটা কখনো হারাবে না বা রোলব্যাক হবে না' },
        { en: 'The write was stored in a relational MySQL database', bn: 'লেখাটি মাইএসকিউএল ডাটাবেসে সেভ হয়েছে' },
        { en: 'The query executed in under 1 nanosecond', bn: 'কুয়েরি ১ ন্যানোসেকেন্ডে শেষ হয়েছে' },
        { en: 'All documents in the collection were deleted', bn: 'কালেকশনের সব ডেটা মুছে গেছে' }
      ],
      answer: 0,
      hint: {
        en: 'Guarantees durability across a majority of nodes.',
        bn: 'অধিকাংশ নোডে ডেটা পৌঁছানোর নিশ্চয়তা দেয়।'
      },
      explanation: {
        en: 'w: "majority" commits the write to a quorum of nodes before acknowledging, making the data resilient against primary hardware failures.',
        bn: 'w: "majority" নিশ্চিত করে যে ডেটা অধিকাংশ নোডে সেভ হয়েছে, তাই প্রাইমারি সার্ভার পুড়ে গেলেও ডেটা নিরাপদ থাকে।'
      }
    }
  ],
  quiz: {
    id: 'mng-rep-quiz',
    title: { en: 'MongoDB Replica Sets & High Availability Quiz', bn: 'MongoDB রেপ্লিকা সেট ও হাই অ্যাভেইল্যাবিলিটি কুইজ' },
    questions: [
      {
        id: 'mrq1',
        kind: 'mcq',
        topic: 'mongodb: delayed replica utility',
        question: {
          en: 'What is the primary operational purpose of configuring a delayed replica member (e.g. secondaryDelaySecs: 3600)?',
          bn: 'একটি ডিলেড রেপ্লিকা সদস্য (যেমন secondaryDelaySecs: 3600) কনফিগার করার মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To serve as a rolling recovery backup shield against catastrophic human errors, such as accidental database drops', bn: 'ভুলবশত ডাটাবেস মুছে ফেলার মতো ভয়াবহ মানবিক ভুলের বিরুদ্ধে তাৎক্ষণিক ডেটা পুনরুদ্ধারের সুরক্ষা কবচ হিসেবে' },
          { en: 'To speed up query performance by 10x', bn: 'কুয়েরি পারফরম্যান্স ১০ গুণ বাড়াতে' },
          { en: 'To automatically encrypt hard drives', bn: 'হার্ডডিস্ক অটোমেটিক এনক্রিপ্ট করতে' },
          { en: 'To host HTML static websites', bn: 'এইচটিএমএল স্ট্যাটিক ওয়েবসাইট হোস্ট করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Shields against accidental drops or deletions.',
          bn: 'ভুল করে ডেটা মুছে ফেলার বিরুদ্ধে সুরক্ষা দেয়।'
        },
        explanation: {
          en: 'A delayed replica maintains an intentional time delay (e.g. 1 hour). If someone drops a production database, administrators can recover from the delayed member before the drop operation replicates to it.',
          bn: 'ডিলেড সদস্য ১ ঘণ্টা পিছিয়ে চলায় কোনো মারাত্মক ভুলের পর এটি থেকে সাথে সাথে আগের অক্ষত ডেটা উদ্ধার করা যায়।'
        }
      },
      {
        id: 'mrq2',
        kind: 'mcq',
        topic: 'mongodb: read preference nearest',
        question: {
          en: 'When would an application architecture choose readPreference: "nearest"?',
          bn: 'কখন একটি অ্যাপ্লিকেশন আর্কিটেকচার readPreference: "nearest" বেছে নেয়?'
        },
        options: [
          { en: 'In geographically distributed deployments to route queries to the server instance with the lowest network latency', bn: 'ভৌগোলিকভাবে ছড়িয়ে থাকা সার্ভারে সবচেয়ে কম নেটওয়ার্ক লেটেন্সির নিকটবর্তী সার্ভার থেকে ডেটা পড়তে' },
          { en: 'Only on localhost single-node machines', bn: 'শুধুমাত্র লোকালহোস্ট একক মেশিনে' },
          { en: 'When all secondaries are powered off', bn: 'যখন সব সেকেন্ডারি বন্ধ থাকে' },
          { en: 'To force all writes to wait for 10 minutes', bn: 'সব লেখাকে ১০ মিনিট আটকে রাখতে' }
        ],
        answer: 0,
        hint: {
          en: 'Routes to the node with lowest network latency.',
          bn: 'সবচেয়ে কম লেটেন্সির নোডে কুয়েরি পাঠায়।'
        },
        explanation: {
          en: 'The "nearest" read preference measures network round-trip time and routes queries to the closest available node, regardless of whether it is primary or secondary.',
          bn: '"nearest" নেটওয়ার্ক সময় মেপে সবচেয়ে কাছের সার্ভারে কুয়েরি পাঠায়, তা প্রাইমারি বা সেকেন্ডারি যাই হোক না কেন।'
        }
      },
      {
        id: 'mrq3',
        kind: 'mcq',
        topic: 'mongodb: read preference nearest round trip',
        question: {
          en: 'Which read preference mode evaluates network ping round-trip times and directs read requests to the lowest-latency member?',
          bn: 'কোন রিড প্রেফারেন্স মোডটি নেটওয়ার্ক পিং মেপে সবচেয়ে কম লেটেন্সির নিকটবর্তী নোডে কুয়েরি পাঠায়?'
        },
        options: [
          { en: 'nearest', bn: 'nearest' },
          { en: 'primary', bn: 'primary' },
          { en: 'secondary', bn: 'secondary' },
          { en: 'fastest', bn: 'fastest' }
        ],
        answer: 0,
        hint: {
          en: 'nearest mode.',
          bn: 'nearest মোড।'
        },
        explanation: {
          en: 'The nearest read preference routes queries to members whose network round-trip latency falls within an acceptable latency threshold.',
          bn: 'nearest মোড সবচেয়ে কাছের সার্ভারে কুয়েরি পাঠিয়ে নেটওয়ার্ক বিলম্ব কমায়।'
        }
      },
      {
        id: 'mrq4',
        kind: 'mcq',
        topic: 'mongodb: rollback handling on deposed primary',
        question: {
          en: 'What happens to writes acknowledged with w: 1 on a deposed primary that never reached secondaries when that node rejoins the cluster?',
          bn: 'কোনো বিচ্ছিন্ন সাবেক প্রাইমারিতে w: 1 দিয়ে লেখা অসঙ্গত ডেটা নোডটি ক্লাস্টারে পুনরায় যোগ দিলে কী করা হয়?'
        },
        options: [
          { en: 'The orphaned writes are automatically rolled back and saved into BSON files inside a rollback directory', bn: 'অসঙ্গতিপূর্ণ ডেটাগুলো স্বয়ংক্রিয়ভাবে রোলব্যাক করা হয় এবং সার্ভারের rollback ডিরেক্টরিতে BSON ফাইল হিসেবে জমা রাখা হয়' },
          { en: 'They overwrite all secondaries immediately', bn: 'সব সেকেন্ডারির ডেটা মুছে ফেলে' },
          { en: 'The entire cluster is deleted', bn: 'পুরো ক্লাস্টার মুছে যায়' },
          { en: 'The cluster switches to MySQL', bn: 'ক্লাস্টার মাইএসকিউএলে বদলে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Extracted into rollback BSON files for administrative review.',
          bn: 'রোলব্যাক BSON ফাইলে সেভ রাখা হয়।'
        },
        explanation: {
          en: 'MongoDB moves un-replicated writes into rollback files so administrators can inspect or re-apply them manually.',
          bn: 'MongoDB অসঙ্গত ডেটা রোলব্যাক ফাইলে জমা রাখে যাতে অ্যাডমিনরা পরে তা দেখে ঠিক করতে পারেন।'
        }
      }
    ]
  }
};
