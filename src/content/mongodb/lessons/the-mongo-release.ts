import type { Lesson } from '../../../lib/types';

export const TheMongoReleaseLesson: Lesson = {
  slug: 'the-mongo-release',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Operations: Backups, Monitoring & Security Architecture',
    bn: 'MongoDB অপারেশনস: ব্যাকআপ, মনিটরিং ও সিকিউরিটি আর্কিটেকচার'
  },
  summary: {
    en: 'Master enterprise MongoDB operations, infrastructure reliability, and security hardening across 10 structured topics. Enforce authentication and Role-Based Access Control (RBAC). Encrypt traffic in-flight with TLS/SSL and encrypt data-at-rest using WiredTiger AES-256. Implement Client-Side Field Level Encryption (CSFLE) for sensitive credentials. Execute logical backups with mongodump --oplog and physical volume snapshots using fsyncLock. Monitor live cluster metrics with mongostat and mongotop. Analyze slow queries via system.profile, tune WiredTiger memory caches, and verify production deployment checklists.',
    bn: '১০টি সুসংগঠিত পয়েন্টে এন্টারপ্রাইজ MongoDB অপারেশনস, ক্লাস্টার সুরক্ষা ও ইনফ্রাস্ট্রাকচার ম্যানেজমেন্ট আয়ত্ত করুন। অথেনটিকেশন ও রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) চালু করুন। TLS/SSL দিয়ে নেটওয়ার্ক ডেটা এবং ওয়্যার্ডটাইগার AES-256 দিয়ে ডিস্কের ডেটা এনক্রিপ্ট করুন। গোপন তথ্যের জন্য ক্লায়েন্ট-সাইড ফিল্ড লেভেল এনক্রিপশন (CSFLE) প্রয়োগ করুন। mongodump --oplog ও ভলিউম স্ন্যাপশট দিয়ে ব্যাকআপ নিশ্চিত করুন। mongostat ও mongotop দিয়ে রিয়েল-টাইম মেট্রিক্স পর্যবেক্ষণ করুন। system.profile দিয়ে স্লো কুয়েরি বিশ্লেষণ করুন, ওয়্যার্ডটাইগার মেমরি ক্যাশ অপ্টিমাইজ করুন এবং প্রোডাকশন চেকলিস্ট মেনে ক্লাস্টার ডিপ্লয় করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Production Security Architecture: Enforcing Authentication', bn: '১. প্রোডাকশন সিকিউরিটি আর্কিটেকচার: অথেনটিকেশন বাধ্যতামূলককরণ' } },
    {
      type: 'para',
      text: {
        en: 'When you deploy database clusters to production, default local development settings leave systems exposed without authentication. Exposing an unauthenticated database to the public internet invites automated ransomware attacks. In production, security authorization must be enabled in the server configuration file `mongod.conf` under `security.authorization: enabled`, requiring every client to authenticate using SCRAM-SHA-256 credentials.',
        bn: 'প্রোডাকশনে ডাটাবেস ক্লাস্টার ডিপ্লয় করার সময় খেয়াল রাখতে হয় যেন লোকাল ডেভেলপমেন্টের মতো পাসওয়ার্ডহীন ডিফল্ট সেটিংস না থাকে। পাসওয়ার্ডহীন ডাটাবেস ইন্টারনেটে উন্মুক্ত করলে নিমিষেই স্বয়ংক্রিয় সাইবার হামলায় সব ডেটা বেদখল হতে পারে। প্রোডাকশনে সার্ভার কনফিগারেশন ফাইল `mongod.conf`-এ `security.authorization: enabled` চালু করা বাধ্যতামূলক, যা প্রতিটি ক্লায়েন্টকে SCRAM-SHA-256 দিয়ে পরিচয় নিশ্চিত করতে বাধ্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Production /etc/mongod.conf security configuration:
net:
  port: 27017
  bindIp: 127.0.0.1,10.0.1.50 # Bind strictly to private VPC interfaces!

security:
  authorization: enabled       # Enforce SCRAM credentials on all connections
  keyFile: /var/lib/mongo/keyfile # Cluster inter-node authentication token`,
      caption: {
        en: 'Production mongod.conf enforces authentication and binds only to internal private IP addresses.',
        bn: 'প্রোডাকশন কনফিগারেশন সব কানেকশনে পাসওয়ার্ড এবং অভ্যন্তরীণ প্রাইভেট আইপি বাধ্যতামূলক করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Defense-in-Depth Enterprise Security Model', bn: 'এন্টারপ্রাইজ স্তরের বহুস্তরীয় নিরাপত্তা আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="MongoDB Defense in Depth Enterprise Security Model">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="140" height="100" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="70" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Client App Layer</text>
<text x="70" y="70" font-size="10" fill="#4ade80" text-anchor="middle">CSFLE Client</text>
<text x="70" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Encrypts SSN in RAM</text>

<path d="M145,70 L205,70" stroke="#38bdf8" stroke-width="2"/>
<text x="175" y="62" font-size="9" fill="#38bdf8" text-anchor="middle">TLS 1.3</text>

<rect x="210" y="20" width="180" height="100" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="300" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Network & Auth Gate</text>
<text x="300" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">SCRAM-SHA-256</text>
<text x="300" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Private VPC bindIp</text>

<path d="M395,70 L455,70" stroke="#10b981" stroke-width="2"/>

<rect x="460" y="20" width="180" height="100" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="550" y="45" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Storage Layer</text>
<text x="550" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">WiredTiger AES-256</text>
<text x="550" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Encrypted Disks</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Role-Based Access Control (RBAC): Principle of Least Privilege', bn: '২. রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC): ন্যূনতম অধিকারের মূলনীতি' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB implements granular Role-Based Access Control (RBAC). Rather than granting monolithic administrative permissions, service accounts are assigned strictly scoped roles according to the Principle of Least Privilege: readWrite for application services, read for reporting analytics, and dbAdmin for schema maintenance.',
        bn: 'MongoDB সূক্ষ্ম রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) সমর্থন করে। সবাইকে ঢালাওভাবে সুপার-অ্যাডমিন পারমিশন না দিয়ে কাজের ধরন অনুযায়ী ন্যূনতম পারমিশন দেওয়া হয়: অ্যাপ্লিকেশনের জন্য readWrite, রিপোর্টিং সার্ভিসের জন্য শুধু read, এবং স্কিমা পরিবর্তনের জন্য dbAdmin রোল বরাদ্দ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Creating a strictly scoped application service account:
db.createUser({
  user: "orderService",
  pwd: "StrongPassword2026!",
  roles: [
    { role: "readWrite", db: "ecommerce" } // Restricted solely to ecommerce DB!
  ]
});

console.log("Service account created with least-privilege role boundaries");
// Output: Service account created with least-privilege role boundaries`,
      caption: {
        en: 'Least-privilege RBAC roles restrict service accounts strictly to their functional domain.',
        bn: 'ন্যূনতম অধিকারভিত্তিক RBAC সার্ভিস অ্যাকাউন্টকে শুধু তার প্রয়োজনীয় কালেকশনে সীমাবদ্ধ রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Network Encryption & Transport Layer Security (TLS/SSL)', bn: '৩. নেটওয়ার্ক এনক্রিপশন ও ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS/SSL)' } },
    {
      type: 'para',
      text: {
        en: 'Unencrypted database traffic transmits cleartext JSON documents across wires. Modern clusters enforce TLS 1.3 encryption for both client-to-server and intra-cluster node communications. Clients must supply verified CA certificates, preventing man-in-the-middle sniffing of sensitive payload attributes.',
        bn: 'এনক্রিপশন ছাড়া ডাটাবেস সংযোগে স্পষ্ট টেক্সট হিসেবে ডেটা তারের মধ্য দিয়ে প্রবাহিত হয়। আধুনিক ক্লাস্টারগুলো ক্লায়েন্ট ও সার্ভার উভয়ের যোগাযোগে বাধ্যতামূলকভাবে TLS 1.3 এনক্রিপশন প্রয়োগ করে। ক্লায়েন্টকে বৈধ সিএ (CA) সার্টিফিকেট দিয়ে যুক্ত হতে হয়, যা মাঝপথে ডেটা চুরির ঝুঁকি শতভাগ দূর করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# mongod.conf TLS configuration:
net:
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.crt
    allowInvalidCertificates: false`,
      caption: {
        en: 'Enforcing requireTLS guarantees in-flight cryptographic protection for all wire communications.',
        bn: 'requireTLS চালু করলে নেটওয়ার্কের মধ্য দিয়ে যাওয়া প্রতিটি বিট এনক্রিপ্ট থাকে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Data-at-Rest Encryption: WiredTiger AES-256 Storage Engine', bn: '৪. ডিস্ক ডেটা এনক্রিপশন: ওয়্যার্ডটাইগার AES-256 স্টোরেজ ইঞ্জিন' } },
    {
      type: 'para',
      text: {
        en: 'Physical hardware theft or discarded hard drives present catastrophic compliance exposures. MongoDB Enterprise provides native Data-at-Rest Encryption using WiredTiger’s AES-256 cipher. All database files, commit journals, and temporary files are encrypted transparently before touching physical storage media.',
        bn: 'সার্ভারের হার্ডডিস্ক চুরি হলে বা পুরনো ডিস্ক ঠিকমতো নষ্ট না করলে তথ্যের চরম বিপর্যয় ঘটতে পারে। MongoDB এন্টারপ্রাইজ ওয়্যার্ডটাইগার স্টোরেজ ইঞ্জিনে AES-256 সাইফার দিয়ে ডেটা-অ্যাট-রেস্ট এনক্রিপশন দেয়। সব ডেটা ফাইল, জার্নাল ও সাময়িক ফাইল ডিস্কে লেখার আগেই স্বয়ংক্রিয়ভাবে এনক্রিপ্ট হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# WiredTiger Native AES-256 Storage Encryption:
security:
  enableEncryption: true
  encryptionCipherMode: AES256-CBC
  encryptionKeyFile: /etc/mongodb/master-key.bin
  # In enterprise clouds: Integrate with AWS KMS, Azure Key Vault, or HashiCorp Vault`,
      caption: {
        en: 'At-rest encryption ensures stolen disk drives contain undecipherable cryptographic ciphertext.',
        bn: 'ডিস্ক চুরি হলেও এনক্রিপ্ট করা ফাইল থেকে মূল তথ্য উদ্ধার করা অসম্ভব।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Client-Side Field Level Encryption (CSFLE)', bn: '৫. ক্লায়েন্ট-সাইড ফিল্ড লেভেল এনক্রিপশন (CSFLE)' } },
    {
      type: 'para',
      text: {
        en: 'In high-security environments, even database administrators should not have visibility into customer passwords, social security numbers, or credit cards. Client-Side Field Level Encryption (CSFLE) encrypts sensitive fields inside the application memory space before network transit, storing unintelligible ciphertext on the database server.',
        bn: 'উচ্চ নিরাপত্তাযুক্ত সিস্টেমে ডাটাবেস অ্যাডমিনদেরও গ্রাহকের জাতীয় পরিচয়পত্র বা ক্রেডিট কার্ডের মতো গোপন তথ্য দেখতে দেওয়া উচিত নয়। Client-Side Field Level Encryption (CSFLE) অ্যাপ্লিকেশনের মেমরিতেই সংবেদনশীল ফিল্ড এনক্রিপ্ট করে পাঠায়, ফলে ডাটাবেস সার্ভারে শুধু অপাঠ্য সাইফারটেক্সট জমা থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Sample CSFLE encrypted document stored in MongoDB:
{
  "_id": 1042,
  "name": "Rahim Ahmed",
  // Encrypted locally in application memory before saving:
  "nationalId": BinData(6, "4jK3+xL92...encrypted_binary_ciphertext..."),
  "creditCard": BinData(6, "9zQ1+yP44...encrypted_binary_ciphertext...")
}
// Even root DBAs with physical access cannot view nationalId or creditCard!`,
      caption: {
        en: 'CSFLE keeps sensitive personal attributes concealed even from privileged database administrators.',
        bn: 'CSFLE ব্যক্তিগত গোপনীয় তথ্য ডাটাবেস অ্যাডমিনদের চোখ থেকেও আড়াল রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Backup Strategies: mongodump vs Filesystem Volume Snapshots', bn: '৬. ব্যাকআপ কৌশল: mongodump বনাম ফাইলসিস্টেম ভলিউম স্ন্যাপশট' } },
    {
      type: 'para',
      text: {
        en: 'Database resilience requires consistent backup workflows: 1) Logical Backups (mongodump --oplog) export BSON files suitable for small databases (< 500 GB) or migration; 2) Physical Backups leverage storage volume snapshots (AWS EBS / LVM). Physical snapshots take seconds to capture terabytes by freezing writes with db.fsyncLock() before snapshotting.',
        bn: 'ডেটার স্থায়ী সুরক্ষায় দুটি ব্যাকআপ পদ্ধতি প্রচলিত: ১) লজিক্যাল ব্যাকআপ (mongodump --oplog) ছোট ডাটাবেস (< ৫০০ জিবি) বা ডেটা সরানোর জন্য আদর্শ; ২) ফিজিক্যাল ব্যাকআপ ক্লাউড স্টোরেজ ভলিউম স্ন্যাপশট (AWS EBS / LVM) ব্যবহার করে। db.fsyncLock() দিয়ে সাময়িক রাইট আটকে কয়েক সেকেন্ডের মধ্যে টেরাবাইট ডেটার স্ন্যাপশট নেওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Consistent logical backup with point-in-time OpLog capture:
mongodump --host="127.0.0.1:27017" --oplog --gzip --out=/backups/$(date +%Y%m%d)

# 2. Restoring consistent snapshot with OpLog replay:
mongorestore --host="127.0.0.1:27017" --oplogReplay --gzip /backups/20260926/

# Output: Finished restoring database ecommerce with verified point-in-time parity`,
      caption: {
        en: 'Combining mongodump with --oplog ensures consistent point-in-time recovery captures.',
        bn: '--oplog সহ mongodump নিলে ব্যাকআপ চলাকালীন হওয়া সব পরিবর্তনের নিখুঁত কপি মেলে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Real-Time Telemetry with mongostat & mongotop', bn: '৭. mongostat ও mongotop দিয়ে রিয়েল-টাইম ক্লাস্টার পর্যবেক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'Command-line diagnostic tools provide real-time cluster health data without third-party monitoring agents: mongostat displays live query rates (inserts, queries, updates, deletes per second), dirty memory percentage, and network traffic. mongotop tracks time spent per collection, identifying which dataset consumes the highest read/write CPU cycles.',
        bn: 'কমান্ড-লাইন টুলগুলো কোনো বাড়তি এজেন্ট ছাড়াই সার্ভারের রিয়েল-টাইম অবস্থা দেখায়: mongostat প্রতি সেকেন্ডে কতগুলো ইনসার্ট, কুয়েরি, আপডেট বা ডিলিট হচ্ছে, মেমরি কতটুকু নোংরা এবং নেটওয়ার্ক স্পিড কত তা দেখায়। আর mongotop প্রতি কালেকশনে কত সময় খরচ হচ্ছে তা দেখিয়ে সবচেয়ে ব্যস্ত কালেকশনটি দ্রুত চিহ্নিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `$ mongostat 2 # Polls metrics every 2 seconds
insert query update delete getmore command dirty  used flushes net_in net_out conn
    12  1450    320      4       0     420  1.2% 45.8%       0   2.1m   18.4m  140
    15  1510    340      2       0     450  1.4% 46.1%       0   2.3m   19.2m  142

$ mongotop 2 # Tracks collection read/write time consumption
ns                       total    read    write
ecommerce.orders         450ms   320ms    130ms
ecommerce.sessions       120ms    80ms     40ms`,
      caption: {
        en: 'The mongostat and mongotop utilities provide immediate visibility into active workload bottlenecks.',
        bn: 'mongostat এবং mongotop সার্ভারের চলমান কাজের চাপ ও ধীরগতির জায়গাগুলো দেখায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Slow Query Profiling with system.profile & slowms', bn: '৮. slowms ও system.profile দিয়ে স্লো কুয়েরি শনাক্তকরণ' } },
    {
      type: 'para',
      text: {
        en: 'Slow queries consume CPU cores and starve connection pools. The Database Profiler records operations exceeding a duration threshold (default: 100 ms) into the capped system.profile collection. Administrators set profiling levels: Level 0 (off), Level 1 (slow operations only), and Level 2 (all operations).',
        bn: 'ধীরগতির কুয়েরি প্রসেসরের ক্ষমতা শেষ করে সার্ভার ঝুলিয়ে দেয়। ডাটাবেস প্রোফাইলার নির্দিষ্ট সময়ের চেয়ে বেশি সময় নেওয়া কুয়েরিগুলোকে (ডিফল্ট: ১০০ মিলিসেকেন্ড) system.profile ক্যাপড কালেকশনে রেকর্ড করে রাখে। এর তিনটি লেভেল আছে: লেভেল ০ (বন্ধ), লেভেল ১ (শুধু স্লো কুয়েরি), এবং লেভেল ২ (সব অপারেশন)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Enable profiling for operations taking longer than 50 milliseconds:
db.setProfilingLevel(1, { slowms: 50 });

// Find the 5 slowest queries recorded in the profiler:
const slowQueries = db.system.profile.find()
  .sort({ millis: -1 })
  .limit(5)
  .project({ ns: 1, millis: 1, op: 1, query: 1, _id: 0 })
  .toArray();

console.log("Slow query profiler identified top latency operations");
// Output: Slow query profiler identified top latency operations`,
      caption: {
        en: 'The database profiler captures long-running operations for query tuning.',
        bn: 'ডাটাবেস প্রোফাইলার স্লো কুয়েরিগুলো চিহ্নিত করে অপ্টিমাইজ করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. WiredTiger Cache Allocation & Operating System Tuning', bn: '৯. ওয়্যার্ডটাইগার ক্যাশ বাজেট ও ওএস টিউনিং' } },
    {
      type: 'para',
      text: {
        en: 'By default, WiredTiger allocates its internal cache to 50% of (RAM minus 1 GB). The remaining memory is used by the OS filesystem page cache to buffer compressed disk blocks. On Linux production hosts, Transparent Huge Pages (THP) must be disabled, and vm.swappiness set to 1 to prevent memory stalls.',
        bn: 'ওয়্যার্ডটাইগার ডিফল্টভাবে মোট র‍্যামের (RAM - ১ জিবি)-এর ৫০% নিজের অভ্যন্তরীণ ক্যাশ হিসেবে ব্যবহার করে। বাকি মেমরি অপারেটিং সিস্টেম ফাইলের কমপ্রেসড ব্লক ধরে রাখতে কাজে লাগায়। লিনাক্স প্রোডাকশন সার্ভারে মেমরি বিভ্রাট এড়াতে Transparent Huge Pages (THP) বন্ধ করা এবং vm.swappiness মান ১ রাখা বাঞ্ছনীয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Linux OS optimization commands for MongoDB hosts:
# 1. Disable Transparent Huge Pages (THP):
echo "never" > /sys/kernel/mm/transparent_hugepage/enabled
echo "never" > /sys/kernel/mm/transparent_hugepage/defrag

# 2. Minimize aggressive kernel memory swapping:
sysctl -w vm.swappiness=1

# 3. Increase max open files and process limits:
# /etc/security/limits.conf
# mongod soft nofile 64000
# mongod hard nofile 64000`,
      caption: {
        en: 'Disabling THP and tuning swappiness prevents catastrophic Linux kernel latency spikes.',
        bn: 'THP বন্ধ করা এবং swappiness টিউন করা লিনাক্স কার্নেলের অনাকাঙ্ক্ষিত ল্যাগ দূর করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The Production Go-Live Deployment Checklist', bn: '১০. প্রোডাকশন লাইভ ডিপ্লয়মেন্ট চেকলিস্ট' } },
    {
      type: 'para',
      text: {
        en: 'Before exposing a MongoDB cluster to live production users, verify every security, performance, and reliability checkbox.',
        bn: 'প্রোডাকশনে কোনো MongoDB ক্লাস্টার চালু করার আগে নিরাপত্তা, পারফরম্যান্স এবং ব্যাকআপের প্রতিটি বিষয় নিশ্চিত করা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `PRODUCTION GO-LIVE VERIFICATION CHECKLIST:
[x] 1. Security: authorization: enabled with strict SCRAM-SHA-256 passwords.
[x] 2. Network: bindIp set strictly to internal VPC IP (Never 0.0.0.0 publicly!).
[x] 3. Encryption: TLS 1.3 enforced for in-flight traffic; AES-256 for storage disks.
[x] 4. Quorum: Minimum 3 voting nodes in replica set; spread across availability zones.
[x] 5. Indexes: Compound ESR indexes built for all primary queries; 0 COLLSCAN queries.
[x] 6. Profiling: Profiler enabled at slowms: 100 to catch un-indexed regressions.
[x] 7. OS Tuning: Transparent Huge Pages (THP) disabled; nofile limits >= 64,000.
[x] 8. Disaster Recovery: Automated daily volume snapshots + continuous OpLog archiving.`,
      caption: {
        en: 'The comprehensive production deployment audit checklist.',
        bn: 'প্রোডাকশনে ডাটাবেস লাইভ করার পূর্ণাঙ্গ অডিট চেকলিস্ট।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-rel-ex1',
      kind: 'predict',
      topic: 'mongodb: default profiler slowms threshold',
      question: {
        en: 'What is the default duration threshold in milliseconds (slowms) for the MongoDB Database Profiler to classify a query as slow?',
        bn: 'MongoDB ডাটাবেস প্রোফাইলারে কোনো কুয়েরিকে ধীরগতির (slow) হিসেবে চিহ্নিত করার জন্য ডিফল্ট সীমা কত মিলিসেকেন্ড (slowms)?'
      },
      code: `/* Default slowms threshold in milliseconds: */
/* slowms = ___ ms */`,
      answer: '100',
      accept: ['100', '100ms', '100 ms'],
      hint: {
        en: '100 milliseconds.',
        bn: '১০০ মিলিসেকেন্ড।'
      },
      explanation: {
        en: 'By default, queries exceeding 100 milliseconds are logged to system.profile when profiling level 1 is active.',
        bn: 'ডিফল্টভাবে ১০০ মিলিসেকেন্ডের বেশি সময় নেওয়া কুয়েরিগুলোকে লেভেল ১ প্রোফাইলারে রেকর্ড করা হয়।'
      }
    },
    {
      id: 'mng-rel-ex2',
      kind: 'mcq',
      topic: 'mongodb: CSFLE security benefit',
      question: {
        en: 'What unique privacy advantage does Client-Side Field Level Encryption (CSFLE) provide over standard disk encryption?',
        bn: 'সাধারণ ডিস্ক এনক্রিপশনের তুলনায় ক্লায়েন্ট-সাইড ফিল্ড লেভেল এনক্রিপশন (CSFLE) কোন অনন্য নিরাপত্তা সুবিধাটি দেয়?'
      },
      options: [
        { en: 'Sensitive fields are encrypted inside application memory before transmission, keeping data hidden even from root database administrators', bn: 'সংবেদনশীল তথ্য পাঠানোর আগেই অ্যাপ্লিকেশন মেমরিতে এনক্রিপ্ট হয়ে যায়, ফলে রুট ডাটাবেস অ্যাডমিনও মূল তথ্য দেখতে পান না' },
        { en: 'It makes network cables 5x faster', bn: 'নেটওয়ার্ক কেবলের গতি ৫ গুণ বাড়িয়ে দেয়' },
        { en: 'It prevents computer screens from turning off', bn: 'কম্পিউটার স্ক্রিন বন্ধ হওয়া রোধ করে' },
        { en: 'It replaces MongoDB with an Excel sheet', bn: 'মঙ্গোডিবিকে এক্সেল ফাইলে বদলে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Encrypts in app memory before transit; DBAs see only ciphertext.',
        bn: 'অ্যাপের মেমরিতেই এনক্রিপ্ট হয়; অ্যাডমিনরাও শুধু সাইফারটেক্সট দেখে।'
      },
      explanation: {
        en: 'CSFLE performs cryptography within the application driver layer. The database server receives and stores pure ciphertext without holding the decryption key.',
        bn: 'CSFLE অ্যাপ্লিকেশনেই ডেটা এনক্রিপ্ট করে ফেলায় ডাটাবেস সার্ভারে শুধু সাইফারটেক্সট জমা থাকে, যা ডাটাবেস অ্যাডমিনও পড়তে পারেন না।'
      }
    },
    {
      id: 'mng-rel-ex3',
      kind: 'mcq',
      topic: 'mongodb: os kernel tuning setting',
      question: {
        en: 'Which Linux operating system kernel memory feature must be explicitly disabled on production MongoDB servers to prevent severe latency stalls?',
        bn: 'প্রোডাকশন MongoDB সার্ভারে মারাত্মক ল্যাটেন্সি এড়াতে লিনাক্স কার্নেলের কোন মেমরি ফিচারটি স্পষ্টভাবে বন্ধ (disabled) রাখা আবশ্যক?'
      },
      options: [
        { en: 'Transparent Huge Pages (THP)', bn: 'ট্রান্সপারেন্ট হিউজ পেজেস (THP)' },
        { en: 'TCP/IP Networking', bn: 'টিসিপি/আইপি নেটওয়ার্কিং' },
        { en: 'Solid State Disks (SSD)', bn: 'এসএসডি ড্রাইভ' },
        { en: 'BASH Shell', bn: 'ব্যাশ শেল' }
      ],
      answer: 0,
      hint: {
        en: 'Transparent Huge Pages (THP).',
        bn: 'ট্রান্সপারেন্ট হিউজ পেজেস (THP)।'
      },
      explanation: {
        en: 'Transparent Huge Pages (THP) causes memory defragmentation locks and CPU spikes in database workloads. Disabling it is mandatory in production.',
        bn: 'THP মেমরি ডিফ্রেগমেন্টেশন করতে গিয়ে ডাটাবেস আটকে ফেলে, তাই প্রোডাকশনে এটি বন্ধ রাখা বাধ্যতামূলক।'
      }
    }
  ],
  quiz: {
    id: 'mng-rel-quiz',
    title: { en: 'MongoDB Security, Monitoring & Infrastructure Quiz', bn: 'MongoDB সিকিউরিটি, মনিটরিং ও ইনফ্রাস্ট্রাকচার কুইজ' },
    questions: [
      {
        id: 'mrq1_ops',
        kind: 'mcq',
        topic: 'mongodb: mongodump oplog flag utility',
        question: {
          en: 'Why is the "--oplog" flag critical when executing production logical backups with "mongodump"?',
          bn: '"mongodump" দিয়ে প্রোডাকশন ব্যাকআপ নেওয়ার সময় "--oplog" ফ্ল্যাগটি ব্যবহার করা কেন অত্যন্ত জরুরি?'
        },
        options: [
          { en: 'It records write operations that occur while the backup is running, ensuring a consistent point-in-time recovery state', bn: 'ব্যাকআপ চলাকালীন ডাটাবেসে ঘটে যাওয়া নতুন পরিবর্তনগুলো এটি রেকর্ড করে রাখে, ফলে একটি নিখুঁত সামঞ্জস্যপূর্ণ ব্যাকআপ নিশ্চিত হয়' },
          { en: 'It converts the backup into an MP4 video', bn: 'ব্যাকআপকে ভিডিওতে রূপান্তর করে' },
          { en: 'It restarts all replica nodes immediately', bn: 'সব রেপ্লিকা নোড রিস্টার্ট করে' },
          { en: 'It disables firewall ports permanently', bn: 'ফায়ারওয়াল চিরতরে বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Captures writes occurring during the dump for point-in-time consistency.',
          bn: 'ডাম্প চলাকালীন হওয়া সব নতুন কাজ সংরক্ষণ করে।'
        },
        explanation: {
          en: 'Without --oplog, a dump represents an inconsistent mix of collections captured at different timestamps. The --oplog flag enables clean point-in-time reconstruction.',
          bn: '--oplog ছাড়া ব্যাকআপ নিলে বিভিন্ন কালেকশনের সময়গত গরমিল তৈরি হতে পারে; এটি সেই ঝুঁকি দূর করে।'
        }
      },
      {
        id: 'mrq2_ops',
        kind: 'mcq',
        topic: 'mongodb: mongotop command purpose',
        question: {
          en: 'What specific insight does the "mongotop" diagnostic tool provide to database administrators?',
          bn: '"mongotop" ডায়াগনস্টিক টুলটি ডাটাবেস অ্যাডমিনদের কোন নির্দিষ্ট তথ্য প্রদান করে?'
        },
        options: [
          { en: 'The amount of time spent by the engine reading and writing to each individual collection', bn: 'প্রতিটি আলাদা কালেকশনে ডাটাবেস ইঞ্জিন পড়তে ও লিখতে ঠিক কতটুকু সময় ব্যয় করছে তার হিসাব' },
          { en: 'The temperature of the CPU cooling fans', bn: 'প্রসেসর ফ্যানের তাপমাত্রা' },
          { en: 'The geographic location of all users', bn: 'ইউজারদের ভৌগোলিক অবস্থান' },
          { en: 'The price of MongoDB Atlas cloud licenses', bn: 'ক্লাউড লাইসেন্সের খরচ' }
        ],
        answer: 0,
        hint: {
          en: 'Tracks read/write time consumption per collection.',
          bn: 'প্রতিটি কালেকশনে রিড/রাইট সময়ের হিসাব দেয়।'
        },
        explanation: {
          en: 'mongotop breaks down time spent per namespace, instantly pinpointing which collection is generating the heaviest I/O load.',
          bn: 'mongotop প্রতিটি কালেকশনের রিড/রাইট সময় আলাদা করে দেখিয়ে সবচেয়ে ব্যস্ত কালেকশনটি ধরিয়ে দেয়।'
        }
      },
      {
        id: 'mrq3_ops',
        kind: 'mcq',
        topic: 'mongodb: disable transparent huge pages',
        question: {
          en: 'Why is disabling Transparent Huge Pages (THP) mandatory on Linux servers running production MongoDB clusters?',
          bn: 'প্রোডাকশন MongoDB ক্লাস্টার চালানো লিনাক্স সার্ভারে Transparent Huge Pages (THP) বন্ধ করা বাধ্যতামূলক কেন?'
        },
        options: [
          { en: 'To prevent memory defragmentation locks and catastrophic CPU latency spikes during heavy database workloads', bn: 'ভারী ডাটাবেস কাজের সময় মেমরি ডিফ্রেগমেন্টেশন লক ও চরম প্রসেসর লেটেন্সি স্পাইক প্রতিরোধ করতে' },
          { en: 'Because THP disables the mouse and keyboard', bn: 'কারণ THP মাউস ও কিবোর্ড বন্ধ করে দেয়' },
          { en: 'To automatically increase disk storage by 50 percent', bn: 'ডিস্ক স্টোরেজ ৫০ শতাংশ বাড়ানোর জন্য' },
          { en: 'To force all network traffic through IPv6', bn: 'সব নেটওয়ার্ক ট্রাফিক আইপিভি৬ দিয়ে পাঠাতে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents memory defragmentation latency stalls.',
          bn: 'মেমরি ডিফ্রেগমেন্টেশনজনিত জটিলতা প্রতিরোধ করে।'
        },
        explanation: {
          en: 'THP causes memory allocation stalls and severe performance degradation under database I/O workloads.',
          bn: 'THP ডাটাবেসের কাজের সময় মেমরি আটকে রেখে পারফরম্যান্স মারাত্মকভাবে কমিয়ে দেয়।'
        }
      },
      {
        id: 'mrq4_ops',
        kind: 'mcq',
        topic: 'mongodb: mongostat real-time telemetry',
        question: {
          en: 'Which native command-line utility provides real-time polling of queries-per-second, dirty cache memory percentage, and network traffic?',
          bn: 'কোন কমান্ড-লাইন টুলটি প্রতি সেকেন্ডে কুয়েরি সংখ্যা, ডার্টি ক্যাশ মেমরির শতকরা হার এবং নেটওয়ার্ক ট্রাফিকের রিয়েল-টাইম হিসাব প্রদর্শন করে?'
        },
        options: [
          { en: 'mongostat', bn: 'mongostat' },
          { en: 'mongotop', bn: 'mongotop' },
          { en: 'mongodump', bn: 'mongodump' },
          { en: 'mongoexport', bn: 'mongoexport' }
        ],
        answer: 0,
        hint: {
          en: 'mongostat tool.',
          bn: 'mongostat টুল।'
        },
        explanation: {
          en: 'mongostat provides real-time polling telemetry across active cluster operations and memory utilization.',
          bn: 'mongostat প্রতি সেকেন্ডে চলমান অপারেশন ও মেমরি ব্যবহারের রিয়েল-টাইম তথ্য দেয়।'
        }
      }
    ]
  }
};
