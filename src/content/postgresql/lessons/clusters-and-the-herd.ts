import type { Lesson } from '../../../lib/types';

export const ClustersAndTheHerdLesson: Lesson = {
  slug: 'clusters-and-the-herd',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL Architecture: Clusters, Schemas & Server Processes',
    bn: 'PostgreSQL আর্কিটেকচার: ক্লাস্টার, স্কিমা ও সার্ভার প্রসেস'
  },
  summary: {
    en: 'Beginner to expert guide to PostgreSQL internal architecture across 10 structured topics. Explore database clusters initialized with initdb. Master schema isolation and search_path configurations. Understand the Postmaster daemon and the process-per-connection concurrency model. Dive into Shared Buffers and 8 KB disk pages. Trace core background workers including Checkpointer, BGWriter, and Autovacuum. Eliminate connection scaling limits using PgBouncer. Inspect $PGDATA directory layouts, harden client authentication with pg_hba.conf, and connect using Node.js pg pools.',
    bn: '১০টি সুসংগঠিত পয়েন্টে PostgreSQL অভ্যন্তরীণ আর্কিটেকচারের শুরু থেকে অ্যাডভান্সড গাইড। initdb দিয়ে ডাটাবেস ক্লাস্টার ইনিশিয়ালাইজেশন শিখুন। স্কিমা আইসোলেশন ও search_path কনফিগারেশন জানুন। পোস্টমাস্টার ডেমন ও প্রতি কানেকশনে আলাদা প্রসেস মডেল বুঝুন। শেয়ার্ড বাফার ও ৮ কিলোবাইট ডিস্ক পেজ মেকানিজম আয়ত্ত করুন। চেকবিন্দু, ব্যাকগ্রাউন্ড রাইটার ও অটোভ্যাকুয়াম কর্মী ট্র্যাক করুন। PgBouncer দিয়ে কানেকশন স্কেলিং সমস্যা সমাধান করুন। $PGDATA ডিরেক্টরি বুঝুন, pg_hba.conf দিয়ে নিরাপত্তা নিশ্চিত করুন এবং Node.js pg পুল দিয়ে কানেক্ট করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'jsons-and-the-array',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL Semi-Structured Data: JSON, JSONB & Arrays',
      bn: 'PostgreSQL সেমি-স্ট্রাকচার্ড ডেটা: JSON, JSONB ও অ্যারে'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. What is a PostgreSQL Database Cluster?', bn: '১. PostgreSQL ডাটাবেস ক্লাস্টার কী?' } },
    {
      type: 'para',
      text: {
        en: 'When you install and run PostgreSQL, a cluster is not a network of multiple servers. It is a single running PostgreSQL server instance managing one or more databases stored in a unified file-system directory. Initialized with initdb, every database within the cluster shares the same configuration files and server listening port.',
        bn: 'যখন আপনি PostgreSQL ইনস্টল করে চালু করেন, তখন ক্লাস্টার মানে একাধিক কম্পিউটারের নেটওয়ার্ক নয়। এটি একটি একক সার্ভার ইনস্ট্যান্স যা একই ডিরেক্টরিতে সংরক্ষিত এক বা একাধিক ডাটাবেস পরিচালনা করে। initdb কমান্ডের মাধ্যমে শুরু হওয়া একটি ক্লাস্টারের সব ডাটাবেস একই কনফিগারেশন ফাইল ও সার্ভার পোর্ট ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Initialize a new PostgreSQL database cluster on disk:
initdb -D /var/lib/postgresql/data --encoding=UTF8 --locale=en_US.UTF-8

# Start the PostgreSQL cluster daemon:
pg_ctl -D /var/lib/postgresql/data -l logfile start
# Output: server started

# Connect to the default database using psql terminal:
psql -U postgres -d postgres
# Output: psql (16.2); Type "help" for help.`,
      caption: {
        en: 'initdb establishes the physical data directory layout that hosts multiple databases.',
        bn: 'initdb কমান্ড ডিস্কে একাধিক ডাটাবেস ধারণের জন্য ক্লাস্টার ডিরেক্টরি প্রস্তুত করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'PostgreSQL Server Process & Shared Memory Architecture', bn: 'PostgreSQL সার্ভার প্রসেস ও শেয়ার্ড মেমরি আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="PostgreSQL Process and Memory Architecture">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="160" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Postmaster Process</text>
<text x="80" y="52" font-size="9" fill="#cbd5e1" text-anchor="middle">Listening on Port 5432</text>
<rect x="15" y="65" width="130" height="30" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="80" y="84" font-size="9" fill="#e2e8f0" text-anchor="middle">Forks Client Worker</text>
<text x="80" y="125" font-size="9" fill="#fbbf24" text-anchor="middle">Supervises Engine</text>

<path d="M165,75 L235,75" stroke="#38bdf8" stroke-width="2"/>

<rect x="240" y="10" width="220" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="350" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Shared Memory Area</text>
<rect x="255" y="45" width="190" height="35" rx="4" fill="#0f172a" stroke="#10b981"/>
<text x="350" y="67" font-size="10" fill="#e2e8f0" text-anchor="middle">Shared Buffers (8 KB Pages)</text>
<rect x="255" y="90" width="190" height="35" rx="4" fill="#0f172a" stroke="#f59e0b"/>
<text x="350" y="112" font-size="10" fill="#fbbf24" text-anchor="middle">WAL Buffers & Lock Tables</text>

<path d="M465,75 L525,75" stroke="#10b981" stroke-width="2"/>

<rect x="530" y="10" width="130" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="595" y="32" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Background Fleet</text>
<text x="595" y="55" font-size="9" fill="#cbd5e1" text-anchor="middle">Checkpointer</text>
<text x="595" y="75" font-size="9" fill="#cbd5e1" text-anchor="middle">Background Writer</text>
<text x="595" y="95" font-size="9" fill="#cbd5e1" text-anchor="middle">WAL Writer</text>
<text x="595" y="115" font-size="9" fill="#cbd5e1" text-anchor="middle">Autovacuum</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Namespaces: Schemas & The search_path Resolution', bn: '২. নেমস্পেস: স্কিমা ও search_path রেজোলিউশন' } },
    {
      type: 'para',
      text: {
        en: 'Inside a PostgreSQL database, a schema is a logical namespace containing tables, views, and indexes. When a query references table_name without a prefix, PostgreSQL iterates through the schemas listed in search_path to resolve the object. This allows multi-tenant applications to isolate different client tables within dedicated schemas inside a single database.',
        bn: 'PostgreSQL ডাটাবেসের ভেতর স্কিমা হলো একটি লজিক্যাল নেমস্পেস যার মধ্যে টেবিল, ভিউ এবং ইনডেক্স থাকে। কোনো কুয়েরিতে স্কিমার নাম ছাড়া শুধু টেবিলের নাম লিখলে PostgreSQL search_path-এ থাকা স্কিমাগুলো ক্রমানুসারে খুঁজে বের করে। এটি মাল্টি-টেন্যান্ট সিস্টেমে একই ডাটাবেসে প্রতিটি ক্লায়েন্টের ডেটা আলাদা স্কিমায় সুরক্ষিত রাখতে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create tenant isolated schemas:
CREATE SCHEMA tenant_alpha;
CREATE SCHEMA tenant_beta;

-- Create table inside specific schema:
CREATE TABLE tenant_alpha.orders (
  id SERIAL PRIMARY KEY,
  amount NUMERIC(10, 2) NOT NULL
);

-- Configure current connection search_path:
SET search_path TO tenant_alpha, public;

-- Table is now accessible without prefix:
SELECT * FROM orders;`,
      caption: {
        en: 'Schemas provide isolated namespaces, preventing naming collisions across multi-tenant apps.',
        bn: 'স্কিমা আলাদা নেমস্পেস তৈরি করে বিভিন্ন ব্যবহারকারীর টেবিল ওভারল্যাপ হওয়া রোধ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Process-Based Concurrency: Postmaster & Backend Workers', bn: '৩. প্রসেস-ভিত্তিক কনকারেন্সি: পোস্টমাস্টার ও ব্যাকএন্ড ওয়ার্কার' } },
    {
      type: 'para',
      text: {
        en: 'Unlike MySQL or Microsoft SQL Server which use multithreaded engines, PostgreSQL uses a process-per-connection architecture. The master supervisor daemon (postmaster) listens on port 5432 for new clients. Whenever a client connects, postmaster calls fork() to spawn an independent OS backend process. While process isolation guarantees memory safety, many idle connections can consume gigabytes of operating system RAM.',
        bn: 'মাল্টিথ্রেডেড ইঞ্জিনের বদলে PostgreSQL প্রতি কানেকশনের জন্য আলাদা ওএস প্রসেস মডেল ব্যবহার করে। প্রধান পোস্টমাস্টার ডেমন ৫৪৩২ পোর্টে নতুন ক্লায়েন্টের জন্য অপেক্ষা করে। ক্লায়েন্ট যুক্ত হওয়ামাত্র পোস্টমাস্টার fork() চালিয়ে সম্পূর্ণ নতুন একটি প্রসেস তৈরি করে। প্রসেস আইসোলেশন নিরাপত্তা দিলেও অনেক নিষ্ক্রিয় সংযোগ প্রচুর মেমরি গ্রাস করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect active PostgreSQL backend processes in Linux:
ps aux | grep "[p]ostgres:"
# Output:
# postgres  1204  postmaster -D /var/lib/postgresql/data
# postgres  1205  checkpointer
# postgres  1206  background writer
# postgres  1207  walwriter
# postgres  1208  autovacuum launcher
# postgres  1310  postgres: user app_db 127.0.0.1(45902) idle`,
      caption: {
        en: 'Each connected client runs as an isolated OS process managed by the postmaster supervisor.',
        bn: 'সংযুক্ত প্রতিটি ক্লায়েন্ট পোস্টমাস্টার দ্বারা নিয়ন্ত্রিত একটি স্বাধীন ওএস প্রসেস হিসেবে চলে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Memory Architecture: Shared Buffers & 8 KB Disk Pages', bn: '৪. মেমরি আর্কিটেকচার: শেয়ার্ড বাফার ও ৮ কিলোবাইট পেজ' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL reads and writes data in fixed-size blocks called pages, defaulting to 8 kilobytes. To minimize physical disk input/output, the engine reserves a shared memory area named shared_buffers, typically set to 25 percent of system RAM. Queries read and modify these cached memory blocks directly; only altered dirty pages are subsequently flushed back to persistent storage.',
        bn: 'PostgreSQL তথ্য সংরক্ষণ ও পড়ার জন্য পেজ নামক ব্লক ব্যবহার করে যার স্বাভাবিক আকার ৮ কিলোবাইট। ডিস্কের ওপর চাপ কমাতে ইঞ্জিনটি শেয়ার্ড বাফার নামের মেমরি স্পেস বরাদ্দ রাখে, যা সাধারণত মোট র‍্যামের ২৫ শতাংশ রাখা হয়। কুয়েরিগুলো সরাসরি মেমরির এই ক্যাশ করা ব্লকগুলো থেকে ডেটা পড়ে ও আপডেট করে; কেবল পরিবর্তিত পেজগুলো পরবর্তীতে ডিস্কে সংরক্ষণ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Query current buffer size and page size:
SHOW shared_buffers;
-- Output: 4GB (Recommended: 25% of server RAM)

SHOW block_size;
-- Output: 8192 (8 KB binary page blocks)

-- Inspect current cached database tables inside shared_buffers:
SELECT c.relname, count(*) AS buffered_pages
FROM pg_buffercache b
JOIN pg_class c ON b.relfilenode = c.relfilenode
GROUP BY c.relname
ORDER BY buffered_pages DESC LIMIT 5;`,
      caption: {
        en: 'Shared buffers cache 8 KB page blocks in RAM to minimize physical disk input/output.',
        bn: 'শেয়ার্ড বাফার মেমরিতে ৮ কিলোবাইট পেজ ব্লক জমিয়ে ডিস্কের ওপর চাপ কমায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Core Background Workers: Checkpointer, BGWriter & Autovacuum', bn: '৫. প্রধান ব্যাকগ্রাউন্ড কর্মী: চেকবিন্দু, ব্যাকগ্রাউন্ড রাইটার ও অটোভ্যাকুয়াম' } },
    {
      type: 'para',
      text: {
        en: 'Behind the scenes, dedicated background processes keep the database healthy. The Checkpointer periodically flushes dirty shared buffer pages to disk and records a safe recovery checkpoint in the WAL. The Background Writer (bgwriter) flushes dirty buffers ahead of client requests so backends never wait on disk writes. Autovacuum automatically reclaims dead rows generated by MVCC updates.',
        bn: 'সার্ভারের সুস্থতা বজায় রাখতে ব্যাকগ্রাউন্ডে কয়েকটি বিশেষ প্রসেস কাজ করে। চেকবিন্দু (Checkpointer) নির্দিষ্ট সময় পর পর মেমরির পরিবর্তিত পেজগুলো ডিস্কে সেভ করে নিরাপদ চেকপয়েন্ট রেকর্ড রাখে। ব্যাকগ্রাউন্ড রাইটার আগে থেকেই ডিস্কে ডেটা লিখে রাখে যাতে ক্লায়েন্ট প্রসেস আটকে না থাকে। আর অটোভ্যাকুয়াম পুরনো ডেড রোগুলো মুছে জায়গা খালি করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `BACKGROUND WORKER ROLES:
+-------------------+---------------------------------------------------------+
| Process           | Core Operational Responsibility                         |
+-------------------+---------------------------------------------------------+
| Checkpointer      | Flushes all dirty buffer pages to disk during checkpoints|
| Background Writer | Continuously trickles modified pages to storage in advance|
| WAL Writer        | Flushes Write-Ahead Log records from RAM to durable disk|
| Autovacuum        | Scans tables to prune dead row versions and update stats |
+-------------------+---------------------------------------------------------+`,
      caption: {
        en: 'Background workers asynchronously offload expensive disk maintenance from client queries.',
        bn: 'ব্যাকগ্রাউন্ড কর্মীরা ডিস্কের জটিল কাজগুলো সেরে ক্লায়েন্ট কুয়েরিকে দ্রুত রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Connection Pooling: Why PgBouncer is Mandatory', bn: '৬. কানেকশন পুলিং: PgBouncer কেন অপরিহার্য' } },
    {
      type: 'para',
      text: {
        en: 'Because PostgreSQL spawns a separate OS process consuming 5 to 10 megabytes of RAM per connection, opening 5,000 direct connections causes severe CPU thrashing and out-of-memory crashes. PgBouncer is a lightweight external connection pooler. In Transaction Pooling mode, thousands of client applications share a pool of 50 active PostgreSQL backend processes seamlessly.',
        bn: 'যেহেতু প্রতিটি সংযোগের জন্য ৫ থেকে ১০ মেগাবাইট মেমরিসহ আলাদা ওএস প্রসেস লাগে, তাই ৫,০০০ ক্লায়েন্ট সরাসরি কানেক্ট করলে সার্ভার মেমরি শেষ হয়ে ক্র্যাশ করতে পারে। PgBouncer হলো একটি হালকা কানেকশন পুলার। এর ট্রানজ্যাকশন পুলিং মোডে হাজার হাজার ক্লায়েন্ট অ্যাপ্লিকেশন মাত্র ৫০টি সক্রিয় ব্যাকগ্রাউন্ড প্রসেস শেয়ার করে কাজ চালাতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `PGBOUNCER ARCHITECTURE:
[5,000 Web Client Connections]
              |
              v (Non-blocking epoll sockets)
       [PgBouncer Server]
              |
              v (Reuses pooled connections)
   [50 PostgreSQL Backend Processes]`,
      caption: {
        en: 'PgBouncer multiplexes thousands of front-end connections into a compact database pool.',
        bn: 'PgBouncer হাজার হাজার সংযোগকে অল্প কয়েকটি কার্যকর ডাটাবেস প্রসেসে চ্যানেল করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The $PGDATA Directory Layout: What Lives on Disk?', bn: '৭. $PGDATA ডিরেক্টরি কাঠামো: ডিস্কে কী কী থাকে?' } },
    {
      type: 'para',
      text: {
        en: 'The $PGDATA directory stores all physical state. Subdirectory base/ contains database-specific folders holding 8 KB table data files. pg_wal/ holds sequential Write-Ahead Log segments (16 megabytes each). postgresql.conf defines runtime engine parameters, while pg_hba.conf controls client network authentication permissions.',
        bn: '$PGDATA ডিরেক্টরিতে সমস্ত শারীরিক ডেটা জমা থাকে। base/ ফোল্ডারে প্রতিটি ডাটাবেসের টেবিল ও ইনডেক্সের ৮ কিলোবাইট ফাইলগুলো থাকে। pg_wal/ ফোল্ডারে ১৬ মেগাবাইটের রাইট-অ্যাহেড লগ সেগমেন্ট থাকে। postgresql.conf সার্ভারের সমস্ত নিয়ম নিয়ন্ত্রণ করে এবং pg_hba.conf নেটওয়ার্ক এক্সেস ও পাসওয়ার্ড যাচাই করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect the root data directory structure:
ls -la /var/lib/postgresql/data/
# Output:
# drwx------  base/            <- Table & index data files
# drwx------  global/          <- Cluster-wide tables (pg_database, pg_authid)
# drwx------  pg_wal/          <- 16MB WAL segment transaction logs
# -rw-------  postgresql.conf  <- Server configuration
# -rw-------  pg_hba.conf      <- Host-Based Authentication rules`,
      caption: {
        en: 'Understanding $PGDATA layout is essential for disk volume management and backups.',
        bn: '$PGDATA কাঠামো জানা ব্যাকআপ গ্রহণ ও ডিস্কের জায়গা পরিচালনার জন্য অত্যন্ত জরুরি।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Security: Client Authentication with pg_hba.conf', bn: '৮. নিরাপত্তা: pg_hba.conf দিয়ে ক্লায়েন্ট প্রমাণীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL controls incoming client access using Host-Based Authentication (HBA) rules declared in pg_hba.conf. Each record specifies: connection type (local socket or host TCP), database, user, client IP subnet CIDR, and authentication method (such as scram-sha-256 for secure password hashing or reject to block malicious subnets).',
        bn: 'PostgreSQL ইনকামিং কানেকশন নিয়ন্ত্রণ করতে pg_hba.conf ফাইলে হোস্ট-বেসড অথেনটিকেশন নিয়ম ব্যবহার করে। প্রতিটি লাইনে থাকে: সংযোগের ধরন (লোকাল নাকি টিসিপি), ডাটাবেসের নাম, ব্যবহারকারীর নাম, আইপি সাবনেট এবং প্রমাণীকরণ পদ্ধতি (যেমন নিরাপদ পাসওয়ার্ডের জন্য scram-sha-256 বা নিষিদ্ধ করতে reject)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# pg_hba.conf syntax:
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# Local unix domain socket connection:
local   all             postgres                                peer

# IPv4 local connections using salted SCRAM-SHA-256 passwords:
host    all             all             127.0.0.1/32            scram-sha-256

# Private VPC cloud subnet access for application microservices:
host    app_db          app_user        10.0.0.0/16             scram-sha-256`,
      caption: {
        en: 'pg_hba.conf enforces network isolation and cryptographic password verification.',
        bn: 'pg_hba.conf নিরাপদ নেটওয়ার্ক আইসোলেশন ও ক্রিপ্টোগ্রাফিক পাসওয়ার্ড যাচাই নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: PostgreSQL vs MySQL vs Redis', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: PostgreSQL বনাম MySQL বনাম Redis' } },
    {
      type: 'para',
      text: {
        en: 'Comparing database concurrency models helps architects make sound infrastructure choices: PostgreSQL utilizes an isolated process-per-connection model with shared memory buffers. MySQL InnoDB uses thread-per-connection with shared memory pools. Redis uses a single-threaded non-blocking event loop residing completely in volatile RAM.',
        bn: 'ডাটাবেসের কনকারেন্সি মডেলের তুলনা সঠিক সিদ্ধান্ত নিতে সাহায্য করে: PostgreSQL শেয়ার্ড মেমরিসহ প্রতি কানেকশনে একটি করে পৃথক ওএস প্রসেস চালায়। MySQL থ্রেড-বেসড মডেল ব্যবহার করে আর Redis সম্পূর্ণভাবে মেমরিতে একক থ্রেডের নন-ব্লকিং ইভেন্ট লুপে কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `DATABASE CONCURRENCY & ARCHITECTURE SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Dimension         | PostgreSQL         | MySQL (InnoDB)     | Redis              |
+-------------------+--------------------+--------------------+--------------------+
| Concurrency Model | Process-per-client | Thread-per-client  | Single-thread loop |
| Default Block Size| 8 KB pages         | 16 KB pages        | Dynamic RAM chunks |
| Connection Scaling| Needs PgBouncer    | Thread pool plugin | Native 10,000+ conns|
| Extensibility     | Rich (Types/PostGIS)| Fixed Schema Types| Modules API        |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Select PostgreSQL when rock-solid process isolation and rich extensibility are paramount.',
        bn: 'নিরাপদ প্রসেস আইসোলেশন এবং সমৃদ্ধ ফিচারের জন্য PostgreSQL সেরা পছন্দ।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Production Connection Pool in Node.js', bn: '১০. Node.js-এ প্রোডাকশন কানেকশন পুল বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production connection pool implementation in Node.js using the pg library, configuring pool limits, schema search paths, and database telemetry queries.',
        bn: 'নিচে pg লাইব্রেরি ব্যবহার করে কানেকশন লিমিট, স্কিমা রেজোলিউশন ও সিস্টেম তথ্য পর্যবেক্ষণের জন্য তৈরি একটি সম্পূর্ণ প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;

// 1. Establish managed client pool:
const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "super_secret_password",
  database: "postgres",
  max: 20, // Max 20 concurrent connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

async function queryClusterDiagnostics() {
  const client = await pool.connect();
  try {
    // 2. Set schema isolation for this session:
    await client.query("SET search_path TO public;");

    // 3. Query cluster version and shared buffers:
    const res = await client.query(\`
      SELECT version(), current_setting('shared_buffers') AS shared_buffers,
             current_database() AS database;
    \`);
    console.log("PostgreSQL Cluster Diagnostics:", res.rows[0]);
  } finally {
    // 4. Release client back to pool:
    client.release();
  }
}

await queryClusterDiagnostics();
console.log("Cluster query executed successfully");
// Output: Cluster query executed successfully`,
      caption: {
        en: 'Production pg.Pool manages backend sockets safely, avoiding process exhaustion.',
        bn: 'প্রোডাকশন pg.Pool সংযোগ সীমা নিয়ন্ত্রণ করে সার্ভার মেমরি শেষ হওয়া প্রতিরোধ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-cls-ex1',
      kind: 'predict',
      topic: 'postgresql: default disk block page size in KB',
      question: {
        en: 'What is the default physical disk page block size in kilobytes used by PostgreSQL to read and store table rows?',
        bn: 'টেবিল রো সংরক্ষণ ও পড়ার জন্য PostgreSQL ডিফল্টভাবে কত কিলোবাইটের ডিস্ক পেজ ব্লক ব্যবহার করে?'
      },
      code: `/* Default PostgreSQL disk page size in KB: */
/* SHOW block_size; -> 8192 bytes = _ KB */`,
      answer: '8',
      accept: ['8', '8KB', '8 KB'],
      hint: {
        en: '8 kilobytes.',
        bn: '৮ কিলোবাইট।'
      },
      explanation: {
        en: 'PostgreSQL formats physical table data into 8 KB page blocks, loaded directly into shared_buffers in RAM.',
        bn: 'PostgreSQL প্রতি পেজে ৮ কিলোবাইট করে ডেটা সাজিয়ে রাখে যা সরাসরি মেমরির শেয়ার্ড বাফারে লোড হয়।'
      }
    },
    {
      id: 'pg-cls-ex2',
      kind: 'mcq',
      topic: 'postgresql: master supervisor process',
      question: {
        en: 'What is the name of the master supervisor daemon that listens on port 5432 and forks backend worker processes for incoming clients?',
        bn: 'কোন প্রধান সুপারভাইজার ডেমনটি ৫৪৩২ পোর্টে সংযোগের জন্য অপেক্ষা করে এবং নতুন ক্লায়েন্ট এলে চাইল্ড প্রসেস তৈরি করে?'
      },
      options: [
        { en: 'Postmaster', bn: 'পোস্টমাস্টার (Postmaster)' },
        { en: 'Autovacuum', bn: 'অটোভ্যাকুয়াম' },
        { en: 'WAL Writer', bn: 'ওয়াল রাইটার' },
        { en: 'PgBouncer', bn: 'পিজিবউন্সার' }
      ],
      answer: 0,
      hint: {
        en: 'The Postmaster supervisor.',
        bn: 'পোস্টমাস্টার সুপারভাইজার।'
      },
      explanation: {
        en: 'The postmaster daemon initializes the cluster, manages background helpers, and forks a dedicated backend process for every client connection.',
        bn: 'পোস্টমাস্টার পুরো সিস্টেম তদারকি করে এবং প্রতিটি ক্লায়েন্টের জন্য আলাদা প্রসেস খুলে দেয়।'
      }
    },
    {
      id: 'pg-cls-ex3',
      kind: 'mcq',
      topic: 'postgresql: connection scaling bottleneck solution',
      question: {
        en: 'Which external connection pooler is commonly deployed in front of PostgreSQL to prevent memory exhaustion caused by thousands of idle connections?',
        bn: 'হাজার হাজার সংযোগের কারণে মেমরি সংকট এড়াতে PostgreSQL সার্ভারের সামনে সাধারণত কোন হালকা কানেকশন পুলার ব্যবহার করা হয়?'
      },
      options: [
        { en: 'PgBouncer', bn: 'পিজিবউন্সার (PgBouncer)' },
        { en: 'Redis Sentinel', bn: 'রেডিস সেন্টিনেল (Redis Sentinel)' },
        { en: 'Nginx Static Cache', bn: 'এনজিনএক্স স্ট্যাটিক ক্যাশ' },
        { en: 'Docker Swarm', bn: 'ডকার সোয়ার্ম (Docker Swarm)' }
      ],
      answer: 0,
      hint: {
        en: 'PgBouncer connection pooler.',
        bn: 'PgBouncer কানেকশন পুলার।'
      },
      explanation: {
        en: 'PgBouncer multiplexes thousands of front-end connections over a small pool of active PostgreSQL backend processes.',
        bn: 'PgBouncer হাজার হাজার সংযোগকে অল্প কয়েকটি প্রসেসের মাধ্যমে দক্ষতার সাথে সামাল দেয়।'
      }
    }
  ],
  quiz: {
    id: 'pg-cls-quiz',
    title: { en: 'PostgreSQL Architecture & Clusters Quiz', bn: 'PostgreSQL আর্কিটেকচার ও ক্লাস্টার কুইজ' },
    questions: [
      {
        id: 'pclsq1',
        kind: 'mcq',
        topic: 'postgresql: database cluster definition',
        question: {
          en: 'What constitutes a "database cluster" in PostgreSQL terminology?',
          bn: 'PostgreSQL পরিভাষায় একটি "ডাটাবেস ক্লাস্টার" বলতে আসলে কী বোঝায়?'
        },
        options: [
          { en: 'A single running PostgreSQL server instance managing one or more databases inside a unified physical file directory', bn: 'একটি একক ফিজিক্যাল ডিরেক্টরিতে একাধিক ডাটাবেস পরিচালনাকারী একক চলমান PostgreSQL সার্ভার ইনস্ট্যান্স' },
          { en: 'A cluster of 1,000 distributed physical server machines', bn: '১,০০০টি নেটওয়ার্কযুক্ত ফিজিক্যাল কম্পিউটারের গুচ্ছ' },
          { en: 'A group of Python scripts', bn: 'পাইথন স্ক্রিপ্টের একটি গ্রুপ' },
          { en: 'A collection of Docker images on Docker Hub', bn: 'ডকার হাবে থাকা ডকার ইমেজের তালিকা' }
        ],
        answer: 0,
        hint: {
          en: 'A single server instance managing multiple databases.',
          bn: 'একটি সার্ভার ইনস্ট্যান্স যা একাধিক ডাটাবেস পরিচালনা করে।'
        },
        explanation: {
          en: 'In PostgreSQL, a cluster is the collection of databases managed by a single postmaster server instance sharing a common data directory.',
          bn: 'PostgreSQL-এ ক্লাস্টার মানে হলো একক সার্ভার দ্বারা পরিচালিত একাধিক ডাটাবেসের একটি সমষ্টি।'
        }
      },
      {
        id: 'pclsq2',
        kind: 'mcq',
        topic: 'postgresql: search path configuration',
        question: {
          en: 'What occurs when an SQL query references a table name without an explicit schema prefix?',
          bn: 'কোনো এসকিউএল কুয়েরিতে স্পষ্ট স্কিমা নাম ছাড়া শুধু টেবিলের নাম লিখলে কী ঘটে?'
        },
        options: [
          { en: 'PostgreSQL searches through the schemas listed in the connection search_path order until the table is found', bn: 'PostgreSQL সংযোগের search_path-এ উল্লেখিত স্কিমাগুলোতে ক্রমানুসারে খুঁজে প্রথম পাওয়া টেবিলটি ব্যবহার করে' },
          { en: 'The query fails immediately with a fatal syntax crash', bn: 'কুয়েরি সাথে সাথে ফেইল করে' },
          { en: 'PostgreSQL deletes the table permanently', bn: 'টেবিলটি চিরতরে মুছে দেয়' },
          { en: 'The table is downloaded from the internet', bn: 'ইন্টারনেট থেকে টেবিল ডাউনলোড হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Resolves via search_path.',
          bn: 'search_path-এর ক্রমানুসারে খুঁজে নেয়।'
        },
        explanation: {
          en: 'The search_path setting dictates the priority order of schemas checked when resolving unqualified table references.',
          bn: 'search_path কনফিগারেশন ঠিক করে দেয় কোন স্কিমায় আগে টেবিলটি খোঁজা হবে।'
        }
      },
      {
        id: 'pclsq3',
        kind: 'mcq',
        topic: 'postgresql: shared buffers recommended allocation',
        question: {
          en: 'What is the standard production sizing recommendation for the shared_buffers parameter in PostgreSQL?',
          bn: 'PostgreSQL-এ shared_buffers প্যারামিটারের জন্য সাধারণ প্রোডাকশন মান কত শতাংশ রাখা প্রস্তাবিত?'
        },
        options: [
          { en: 'Approximately 25% of total server RAM', bn: 'মোট সার্ভার র‍্যামের প্রায় ২৫ শতাংশ' },
          { en: '100 percent of all disk space', bn: '১০০ শতাংশ ডিস্ক স্পেস' },
          { en: '1 Megabyte total', bn: 'সর্বমোট ১ মেগাবাইট' },
          { en: 'Zero bytes (disabled)', bn: 'শূন্য বাইট (বন্ধ)' }
        ],
        answer: 0,
        hint: {
          en: '25% of total system RAM.',
          bn: 'মোট সিস্টেম র‍্যামের ২৫%।'
        },
        explanation: {
          en: 'Allocating 25% of RAM to shared_buffers leaves the remaining memory for the operating system page cache, work_mem, and maintenance operations.',
          bn: '২৫% র‍্যাম শেয়ার্ড বাফারে দিলে বাকি মেমরি ওএস পেজ ক্যাশ ও কুয়েরি কাজের জন্য চমৎকার ভারসাম্য তৈরি করে।'
        }
      },
      {
        id: 'pclsq4',
        kind: 'mcq',
        topic: 'postgresql: host based authentication configuration file',
        question: {
          en: 'Which configuration file controls client IP network permissions and password hashing authentication rules in PostgreSQL?',
          bn: 'PostgreSQL-এ কোন কনফিগারেশন ফাইলটি ক্লায়েন্ট নেটওয়ার্ক পারমিশন এবং পাসওয়ার্ড প্রমাণীকরণ পদ্ধতি নিয়ন্ত্রণ করে?'
        },
        options: [
          { en: 'pg_hba.conf', bn: 'pg_hba.conf' },
          { en: 'nginx.conf', bn: 'nginx.conf' },
          { en: 'resolv.conf', bn: 'resolv.conf' },
          { en: 'database.ini', bn: 'database.ini' }
        ],
        answer: 0,
        hint: {
          en: 'pg_hba.conf (Host-Based Authentication).',
          bn: 'pg_hba.conf (হোস্ট-বেসড অথেনটিকেশন)।'
        },
        explanation: {
          en: 'pg_hba.conf defines access rules based on connection type, database, user, client IP address subnet, and auth method.',
          bn: 'pg_hba.conf ফাইলে আইপি ঠিকানা, ডাটাবেস ও ব্যবহারকারীর ভিত্তিতে এক্সেস রুল লেখা থাকে।'
        }
      }
    ]
  }
};
