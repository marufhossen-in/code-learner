import type { Hub } from '../../lib/types';
import { ObjectsAndTheObjectLesson } from './lessons/objects-and-the-object';
import { BucketsAndTheBucketLesson } from './lessons/buckets-and-the-bucket';
import { KeysAndTheKeyLesson } from './lessons/keys-and-the-key';
import { VersionsAndTheVersionLesson } from './lessons/versions-and-the-version';
import { LifecyclesAndTheLifecycleLesson } from './lessons/lifecycles-and-the-lifecycle';
import { EncryptsAndTheEncryptLesson } from './lessons/encrypts-and-the-encrypt';
import { ReplicasAndTheReplicaLesson } from './lessons/replicas-and-the-replica';
import { TheObjectStorageReleaseLesson } from './lessons/the-object-storage-release';

export const objectStorageHub: Hub = {
  slug: 'object-storage',
  name: 'Object Storage',
  icon: '🪣',
  tagline: {
    en: 'Master cloud object storage architecture: from flat address namespaces and S3 REST APIs to lifecycle tiering, server-side encryption, and cross-region replication.',
    bn: 'ক্লাউড অবজেক্ট স্টোরেজ আর্কিটেকচার সম্পূর্ণ আয়ত্ত করুন: ফ্ল্যাট অ্যাড্রেস নেমস্পেস ও S3 REST API থেকে লাইফসাইকেল টিয়ারিং, সার্ভার-সাইড এনক্রিপশন এবং ক্রস-রিজিয়ন রেপ্লিকেশন পর্যন্ত।'
  },
  intro: {
    en: 'Object storage is the foundation of modern cloud-scale data architecture, powering exabytes of unstructured multimedia, data lakes, backups, and web assets globally. Unlike traditional hierarchical filesystems (POSIX) or block storage (SAN/EBS), object storage organizes data into flat address spaces where each discrete object bundles payload bytes, unique keys, and extensible metadata accessible via standard HTTP REST APIs. This hub guides you through 8 comprehensive lessons: core object architecture and REST verbs, bucket policies and CORS, hierarchical key prefixes and presigned URLs, object versioning with delete markers, automated lifecycle transitions to Glacier cold storage, server-side encryption keys (SSE-S3, SSE-KMS, SSE-C), cross-region replication (CRR), and high-throughput multipart uploads.',
    bn: 'অবজেক্ট স্টোরেজ হলো আধুনিক ক্লাউড-স্কেল ডাটা আর্কিটেকচারের মেরুদণ্ড, যা বিশ্বজুড়ে এক্সাবাইট পরিমাণ আনস্ট্রাকচার্ড মাল্টিমিডিয়া, ডাটা লেক, ব্যাকআপ এবং ওয়েব ফাইল পরিচালনা করে। প্রচলিত হায়ারারকিকাল ফাইলসিস্টেম (POSIX) বা ব্লক স্টোরেজের (SAN/EBS) বিপরীতে, অবজেক্ট স্টোরেজ ফ্ল্যাট অ্যাড্রেস স্পেসে ডাটা বিন্যস্ত করে যেখানে প্রতিটি অবজেক্ট তার নিজস্ব পেলোড বাইট, অনন্য কি এবং মেটাডাটা সহ স্ট্যান্ডার্ড HTTP REST API-এর মাধ্যমে অ্যাক্সেস করা যায়। এই হাবটি আপনাকে ৮ টি ধারাবাহিক পাঠে দক্ষ করে তুলবে: কোর অবজেক্ট আর্কিটেকচার ও REST ভার্ব, বাকেট পলিসি ও CORS, হায়ারারকিকাল কি প্রিফিক্স ও প্রি-সাইনড URL, ডিলিট মার্কার সহ অবজেক্ট ভার্সনিং, গ্লেসিয়ার কোল্ড স্টোরেজে স্বয়ংক্রিয় লাইফসাইকেল রূপান্তর, সার্ভার-সাইড এনক্রিপশন কি (SSE-S3, SSE-KMS, SSE-C), ক্রস-রিজিয়ন রেপ্লিকেশন (CRR) এবং উচ্চ-গতির মাল্টিপার্ট আপলোড।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Object Primitives: Objects, Buckets & Keys',
        bn: 'ধাপ ১ — কোর অবজেক্ট মৌলিক ভিত্তি: অবজেক্ট, বাকেট ও কি'
      },
      items: [
        {
          en: 'Object Anatomy: Payload bytes, system metadata, user-defined headers, and REST operations (GET, PUT, DELETE, HEAD).',
          bn: 'অবজেক্টের গঠন: পেলোড বাইট, সিস্টেম মেটাডাটা, ইউজার হেডার এবং REST অপারেশন (GET, PUT, DELETE, HEAD)।'
        },
        {
          en: 'Bucket Architecture: Globally unique naming namespaces, regional data residency, access control policies, and cross-origin resource sharing (CORS).',
          bn: 'বাকেট আর্কিটেকচার: বিশ্বব্যাপী অনন্য নাম নেমস্পেস, আঞ্চলিক ডাটা সংরক্ষণ, অ্যাক্সেস কন্ট্রোল পলিসি এবং ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS)।'
        },
        {
          en: 'Object Keys & Presigned URLs: Virtual folder prefixes with delimiters, pagination with continuation tokens, and secure time-limited presigned URLs.',
          bn: 'অবজেক্ট কি এবং প্রি-সাইনড URL: ডেলিমিটার সহ ভার্চুয়াল ফোল্ডার প্রিফিক্স, পেজিনেশন এবং সুরক্ষিত নির্দিষ্ট মেয়াদের প্রি-সাইনড URL।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Data Protection: Versioning, Lifecycles & Encryption',
        bn: 'ধাপ ২ — ডাটা সুরক্ষা: ভার্সনিং, লাইফসাইকেল এবং এনক্রিপশন'
      },
      items: [
        {
          en: 'Object Versioning: Immutable revision IDs, soft deletion with Delete Markers, permanent purge semantics, and MFA Delete protection.',
          bn: 'অবজেক্ট ভার্সনিং: অপরিবর্তনীয় সংস্করণ ID, ডিলিট মার্কার সহযোগে সফট ডিলিট, স্থায়ী মুছে ফেলার প্রক্রিয়া এবং MFA ডিলিট সুরক্ষা।'
        },
        {
          en: 'Lifecycle Tiering: Automated cost optimization rules moving data from Standard to Infrequent Access (IA) and Glacier archival tiers.',
          bn: 'লাইফসাইকেল টিয়ারিং: স্ট্যান্ডার্ড স্টোরেজ থেকে ইনফ্রিকুয়েন্ট অ্যাক্সেস (IA) ও গ্লেসিয়ার আর্কাইভে ডাটা স্থানান্তরের স্বয়ংক্রিয় খরচ নিয়ন্ত্রণ রুল।'
        },
        {
          en: 'Server-Side Encryption: Protecting data at rest with SSE-S3 (AES-256), SSE-KMS managed customer keys, and SSE-C client-provided keys.',
          bn: 'সার্ভার-সাইড এনক্রিপশন: SSE-S3 (AES-256), গ্রাহক পরিচালিত SSE-KMS এবং ক্লায়েন্ট প্রদত্ত SSE-C দিয়ে সংরক্ষিত ডাটা সুরক্ষা।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Enterprise Distribution: Replication, Multipart Uploads & Production S3',
        bn: 'ধাপ ৩ — এন্টারপ্রাইজ বিতরণ: রেপ্লিকেশন, মাল্টিপার্ট আপলোড এবং প্রোডাকশন S3'
      },
      items: [
        {
          en: 'Cross-Region Replication (CRR): Asynchronous replication for disaster recovery, compliance data sovereignty, and global read latency optimization.',
          bn: 'ক্রস-রিজিয়ন রেপ্লিকেশন (CRR): ডিজাস্টার রিকভারি, আইনি ডাটা সার্বভৌমত্ব এবং গ্লোবাল লেটেন্সি কমানোর জন্য অ্যাসিনক্রোনাস রেপ্লিকেশন।'
        },
        {
          en: 'High-Throughput Multipart Uploads: Concurrently uploading 5MB to 5TB files with parallel part chunking and checksum assembly.',
          bn: 'উচ্চ-গতির মাল্টিপার্ট আপলোড: প্যারালাল পার্ট চাংকিং ও চেকসাম যুক্ত করে ৫ মেগাবাইট থেকে ৫ টেরাবাইট পর্যন্ত ফাইল সমান্তরাল আপলোড।'
        },
        {
          en: 'S3-Compatible Cloud Ecosystem: Deploying production storage on AWS S3, Cloudflare R2, MinIO private clusters, and Google Cloud Storage.',
          bn: 'S3-সামঞ্জস্যপূর্ণ ক্লাউড ইকোসিস্টেম: AWS S3, Cloudflare R2, MinIO প্রাইভেট ক্লাস্টার এবং Google Cloud Storage-এ প্রোডাকশন স্টোরেজ স্থাপন।'
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-s3-asset-cdn',
      title: {
        en: 'Secure Asset Pipeline with Presigned URLs and S3',
        bn: 'প্রি-সাইনড URL এবং S3 সহ সুরক্ষিত মিডিয়া পাইপলাইন'
      },
      brief: {
        en: 'Architect a direct-to-S3 browser upload workflow using time-limited presigned URLs, avoiding web server memory bottlenecks during 500MB video uploads.',
        bn: '৫০০ মেগাবাইট ভিডিও আপলোডের সময় ওয়েব সার্ভার মেমরি জট এড়াতে টাইম-লিমিটেড প্রি-সাইনড URL ব্যবহার করে সরাসরি S3-তে ব্রাউজার আপলোড ওয়ার্কফ্লো তৈরি করুন।'
      },
      tags: ['S3', 'Presigned-URL', 'Node.js', 'Direct-Upload']
    },
    {
      id: 'proj-lifecycle-data-lake',
      title: {
        en: 'Automated Lifecycle Tiering and Glacier Archival Engine',
        bn: 'স্বয়ংক্রিয় লাইফসাইকেল টিয়ারিং এবং গ্লেসিয়ার আর্কাইভ ইঞ্জিন'
      },
      brief: {
        en: 'Implement automated S3 lifecycle rules transitioning raw telemetry logs from Standard to Infrequent Access after 30 days and Glacier Deep Archive after 90 days.',
        bn: '৩০ দিন পর স্ট্যান্ডার্ড থেকে ইনফ্রিকুয়েন্ট অ্যাক্সেস এবং ৯০ দিন পর গ্লেসিয়ার ডিপ আর্কাইভে র লগ স্থানান্তরের স্বয়ংক্রিয় লাইফসাইকেল রুল তৈরি করুন।'
      },
      tags: ['Lifecycle', 'Glacier', 'Cost-Optimization', 'Data-Lake']
    },
    {
      id: 'proj-encrypted-crr-backup',
      title: {
        en: 'Disaster Recovery Replication with SSE-KMS Key Wrapping',
        bn: 'SSE-KMS কি র্যাপিং সহ ডিজাস্টার রিকভারি রেপ্লিকেশন'
      },
      brief: {
        en: 'Configure cross-region replication (CRR) from US-East to EU-Central with KMS key re-encryption for cross-continental compliance and backup resilience.',
        bn: 'আন্তঃমহাদেশীয় কমপ্লায়েন্স ও ব্যাকআপ সুরক্ষায় KMS কি রি-এনক্রিপশন সহ US-East থেকে EU-Central-এ ক্রস-রিজিয়ন রেপ্লিকেশন (CRR) কনফিগার করুন।'
      },
      tags: ['CRR', 'Disaster-Recovery', 'SSE-KMS', 'Multi-Region']
    }
  ],
  bestPractices: [
    {
      id: 'bp-flat-namespaces',
      title: {
        en: 'Prefix Design for High Partition Throughput',
        bn: 'উচ্চ পার্টিশন থ্রুপুটের জন্য প্রিফিক্স ডিজাইন'
      },
      description: {
        en: 'Modern S3 automatically scales to 3500 PUT and 5500 GET requests per second per prefix. Structure folder-like keys to distribute I/O load across logical partitions evenly.',
        bn: 'আধুনিক S3 প্রতি প্রিফিক্সে প্রতি সেকেন্ডে ৩৫০০ টি PUT এবং ৫৫০০ টি GET রিকোয়েস্ট পরিচালনা করে। লজিক্যাল পার্টিশনে আইও লোড সমবণ্টন করতে সুপরিকল্পিত কি প্রিফিক্স ব্যবহার করুন।'
      }
    },
    {
      id: 'bp-versioning-delete-markers',
      title: {
        en: 'Enable Object Versioning and MFA Delete on Production',
        bn: 'প্রোডাকশনে অবজেক্ট ভার্সনিং এবং MFA ডিলিট সক্রিয় রাখুন'
      },
      description: {
        en: 'Never run production buckets without versioning enabled. Combine versioning with MFA Delete so rogue credentials or accidental scripts cannot permanently purge live customer data.',
        bn: 'ভার্সনিং সক্রিয় না করে কখনই প্রোডাকশন বাকেট চালাবেন না। এর সাথে MFA ডিলিট যুক্ত রাখুন যাতে হ্যাক হওয়া পাসওয়ার্ড বা ভুল স্ক্রিপ্ট স্থায়ীভাবে ডাটা মুছে ফেলতে না পারে।'
      }
    },
    {
      id: 'bp-least-privilege-bucket-policy',
      title: {
        en: 'Enforce Least Privilege Bucket Policies with TLS Enforcement',
        bn: 'TLS বাধ্যবাধকতা সহ সর্বনিম্ন অধিকার বাকেট পলিসি কার্যকর করুন'
      },
      description: {
        en: 'Block all public access by default. Include an explicit aws:SecureTransport deny statement in your bucket policy to reject unencrypted plaintext HTTP transport unconditionally.',
        bn: 'ডিফল্টভাবে সমস্ত পাবলিক অ্যাক্সেস বন্ধ রাখুন। বাকেট পলিসিতে aws:SecureTransport ডিনাই স্টেটমেন্ট যোগ করে আন-এনক্রিপ্টেড প্লেইনটেক্সট HTTP রিকোয়েস্ট সম্পূর্ণ প্রত্যাখ্যান করুন।'
      }
    },
    {
      id: 'bp-multipart-resilience',
      title: {
        en: 'Utilize Multipart Uploads for Any File Exceeding 100MB',
        bn: '১০০ মেগাবাইটের বেশি যেকোনো ফাইলের জন্য মাল্টিপার্ট আপলোড ব্যবহার করুন'
      },
      description: {
        en: 'Upload large files in parallel chunks of 10MB to 50MB. If network connectivity drops on 1 part, retry only that individual chunk instead of restarting the entire gigabyte upload.',
        bn: '১০ মেগাবাইট থেকে ৫০ মেগাবাইটের সমান্তরাল চাংকে বড় ফাইল আপলোড করুন। ইন্টারনেটের সমস্যায় কোনো ১ টি পার্ট ব্যর্থ হলে পুরো গিগাবাইট ফাইলের বদলে কেবল সেই পার্টটি রিট্রাই করুন।'
      }
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Object Storage fundamentally differ from Block Storage (SAN/EBS) and File Storage (POSIX/NFS)?',
        bn: 'ব্লক স্টোরেজ (SAN/EBS) এবং ফাইল স্টোরেজের (POSIX/NFS) তুলনায় অবজেক্ট স্টোরেজ কীভাবে মৌলিকভাবে আলাদা?'
      },
      a: {
        en: 'Block storage exposes raw volume sectors accessible over Fibre Channel or iSCSI, ideal for high-IOPS databases requiring random block-level read/writes. File storage arranges hierarchical directories and files using POSIX protocols (NFS, SMB), supporting partial byte updates and file locking. Object storage organizes immutable data into flat address spaces without directories. Each object bundles payload bytes, keys, and extensible metadata accessed over HTTP REST APIs. It provides near-infinite horizontal scalability, 11 nines of durability, and cost efficiency for unstructured data.',
        bn: 'ব্লক স্টোরেজ র ভলিউম সেক্টর উন্মুক্ত করে যা উচ্চ-IOPS ডাটাবেসের জন্য উপযুক্ত। ফাইল স্টোরেজ POSIX প্রোটোকল দিয়ে হায়ারারকিকাল ডিরেক্টরি কাঠামো বজায় রাখে। অপরদিকে অবজেক্ট স্টোরেজ ফ্ল্যাট অ্যাড্রেস স্পেসে অপরিবর্তনীয় ডাটা সংরক্ষণ করে যেখানে কোনো ডিরেক্টরি থাকে না। প্রতিটি অবজেক্ট পেলোড, কি এবং মেটাডাটা সহ HTTP REST API দিয়ে অ্যাক্সেস করা হয়। এটি আনস্ট্রাকচার্ড ডাটার জন্য ১১ টি নয় বিশিষ্ট স্থায়িত্ব ও অসীম স্কেলেবিলিটি প্রদান করে।'
      }
    },
    {
      q: {
        en: 'What is a Delete Marker in S3 object versioning and how does permanent deletion work?',
        bn: 'S3 অবজেক্ট ভার্সনিংয়ে ডিলিট মার্কার কী এবং স্থায়ী ডিলিট কীভাবে কাজ করে?'
      },
      a: {
        en: 'When versioning is active on a bucket, running a standard DELETE request does not remove the object bytes from storage. Instead, S3 inserts a new 0-byte revision called a Delete Marker as the current version, making subsequent GET requests return HTTP 404 Not Found. Previous object versions remain fully preserved in history. To permanently purge the object and reclaim storage billing, an administrator must submit a DELETE request explicitly specifying the unique versionId of each revision.',
        bn: 'বাকেটে ভার্সনিং সক্রিয় থাকলে সাধারণ DELETE রিকোয়েস্ট পাঠালে মূল ডাটা মুছে যায় না। বরং S3 একটি ০ বাইটের ডিলিট মার্কার তৈরি করে বর্তমান ভার্সন হিসেবে বসিয়ে দেয়, ফলে পরবর্তী GET রিকোয়েস্টে HTTP 404 Not Found দেখায়। আগের সমস্ত ভার্সন হিস্ট্রিতে অক্ষত থাকে। স্থায়ীভাবে ডাটা মুছে ফেলতে অ্যাডমিনিস্ট্রেটরকে নির্দিষ্ট versionId উল্লেখ করে DELETE রিকোয়েস্ট পাঠাতে হয়।'
      }
    },
    {
      q: {
        en: 'Explain the technical differences between SSE-S3, SSE-KMS, and SSE-C encryption at rest.',
        bn: 'সংরক্ষিত ডাটার এনক্রিপশনে SSE-S3, SSE-KMS এবং SSE-C এর প্রযুক্তিগত পার্থক্য ব্যাখ্যা করুন।'
      },
      a: {
        en: 'SSE-S3 uses 256-bit Advanced Encryption Standard (AES-256) where keys are fully managed and rotated by the cloud provider with zero additional management fees. SSE-KMS uses AWS Key Management Service, granting granular IAM access control, audit logging in CloudTrail for every decrypt call, and customer-managed key rotation policies. SSE-C (Customer-Provided Keys) requires the client to supply their own 256-bit encryption key in HTTP headers with every PUT and GET request; the cloud provider stores 0 keys on disk.',
        bn: 'SSE-S3 তে ক্লাউড প্রোভাইডার সম্পূর্ণভাবে AES-256 এনক্রিপশন কি তৈরি ও পরিচালনা করে যার জন্য বাড়তি খরচ হয় না। SSE-KMS এ কী ম্যানেজমেন্ট সার্ভিস ব্যবহৃত হয়, যা IAM নিয়ন্ত্রণ, CloudTrail এ প্রতিটি ডিক্রিপ্ট অডিট লগ এবং কাস্টমার নিয়ন্ত্রিত কি রোটেশন সুবিধা দেয়। SSE-C তে ক্লায়েন্ট প্রতিটি PUT ও GET রিকোয়েস্টের হেডার হিসেবে নিজস্ব ২৫৬-বিট এনক্রিপশন কি পাঠায়; ক্লাউড প্রোভাইডার কোনো কি সংরক্ষণ করে না।'
      }
    },
    {
      q: {
        en: 'What are Presigned URLs and what security problem do they solve for web applications?',
        bn: 'প্রি-সাইনড URL কী এবং ওয়েব অ্যাপ্লিকেশনের জন্য তারা কোন নিরাপত্তা সমস্যার সমাধান করে?'
      },
      a: {
        en: 'A Presigned URL grants temporary, cryptographic permission to download or upload an object without requiring the user to have AWS IAM credentials. The backend server generates a URL incorporating an expiration timestamp and an HMAC-SHA256 signature calculated from the server private credentials. This solves the architectural bottleneck where web servers previously acted as expensive proxies during multi-gigabyte file transfers, allowing clients to stream directly to object storage securely.',
        bn: 'প্রি-সাইনড URL ব্যবহারকারীকে ক্লাউড IAM পারমিশন না দিয়েই অস্থায়ীভাবে কোনো অবজেক্ট ডাউনলোড বা আপলোড করার ক্রিপ্টোগ্রাফিক অনুমতি দেয়। ব্যাকএন্ড সার্ভার নির্দিষ্ট সময়সীমা ও HMAC-SHA256 সিগনেচার দিয়ে এই লিংক তৈরি করে। এর ফলে ওয়েব সার্ভার নিজে ফাইল প্রক্সি করার বদলে ব্যবহারকারী সরাসরি সুরক্ষিতভাবে অবজেক্ট স্টোরেজে ফাইল আদান-প্রদান করতে পারেন।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Streaming platforms like Netflix store petabytes of encoded video chunks in Amazon S3, utilizing automated lifecycle rules to archive older seasons to Glacier while serving active content via regional CDN edges.',
      bn: 'নেটফ্লিক্সের মতো স্ট্রিমিং প্ল্যাটফর্মগুলো অ্যামাজন S3-তে পেটাওয়াইট পরিমাণ এনকোড করা ভিডিও সংরক্ষণ করে এবং স্বয়ংক্রিয় লাইফসাইকেল রুল দিয়ে পুরোনো সিজন গ্লেসিয়ারে আর্কাইভ করে সক্রিয় কনটেন্ট সিডিএন দিয়ে পরিবেশন করে।'
    },
    {
      en: 'Financial institutions enforce Cross-Region Replication (CRR) with SSE-KMS encryption to replicate transaction archives across 2 continents, guaranteeing compliance with financial regulations and immediate disaster recovery.',
      bn: 'আর্থিক প্রতিষ্ঠানগুলো লেনদেনের আর্কাইভ ২ টি আলাদা মহাদেশে ছড়িয়ে দিতে SSE-KMS এনক্রিপশন সহ ক্রস-রিজিয়ন রেপ্লিকেশন (CRR) ব্যবহার করে, যা আইনি বাধ্যবাধকতা ও তাৎক্ষণিক ব্যাকআপ পুনরুদ্ধার নিশ্চিত করে।'
    },
    {
      en: 'Autonomous vehicle fleets upload terabytes of raw camera and LiDAR sensor data daily using multipart S3 uploads, automatically transitioning data from S3 Standard to S3 Express One Zone for high-speed machine learning model training.',
      bn: 'স্বয়ংচালিত গাড়ির কোম্পানিগুলো মাল্টিপার্ট S3 আপলোড দিয়ে প্রতিদিন টেরাবাইট পরিমাণ ক্যামেরা ও লাইডার সেন্সর ডাটা আপলোড করে এবং দ্রুতগতির মেশিন লার্নিং ট্রেনিংয়ের জন্য স্ট্যান্ডার্ড থেকে S3 এক্সপ্রেস ওয়ান জোনে স্থানান্তর করে।'
    },
    {
      en: 'Generative AI startups store checkpoint weights and tokenized web crawl datasets in Cloudflare R2 and MinIO, eliminating egress fees while maintaining 100% S3 REST API compatibility across multi-cloud GPU training clusters.',
      bn: 'জেনারেটিভ এআই স্টার্টআপগুলো Cloudflare R2 এবং MinIO-তে মডেল ওয়েট ও ডাটা সংরক্ষণ করে, যা কোনো ব্যান্ডউইথ খরচ ছাড়াই মাল্টি-ক্লাউড GPU ক্লাস্টারে ১০০% S3 REST API সামঞ্জস্য বজায় রাখে।'
    }
  ],
  lessons: [
    ObjectsAndTheObjectLesson,
    BucketsAndTheBucketLesson,
    KeysAndTheKeyLesson,
    VersionsAndTheVersionLesson,
    LifecyclesAndTheLifecycleLesson,
    EncryptsAndTheEncryptLesson,
    ReplicasAndTheReplicaLesson,
    TheObjectStorageReleaseLesson
  ]
};
