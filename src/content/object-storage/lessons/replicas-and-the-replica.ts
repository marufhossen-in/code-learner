import type { Lesson } from '../../../lib/types';

export const ReplicasAndTheReplicaLesson: Lesson = {
  slug: 'replicas-and-the-replica',
  tech: 'object-storage',
  title: {
    en: 'Cross-Region Replication: CRR, SRR & Consistency',
    bn: 'ক্রস-রিজিয়ন রেপ্লিকেশন: CRR, SRR এবং কনসিস্টেন্সি'
  },
  summary: {
    en: 'Architect global disaster recovery with S3 replication: Cross-Region (CRR) and Same-Region (SRR), versioning prerequisites, KMS re-encryption, and 15-minute RTC SLAs.',
    bn: 'S3 রেপ্লিকেশন দিয়ে গ্লোবাল ডিজাস্টার রিকভারি তৈরি করুন: ক্রস-রিজিয়ন (CRR) ও সেম-রিজিয়ন (SRR), ভার্সনিং শর্ত, KMS রি-এনক্রিপশন এবং ১৫ মিনিটের RTC SLA।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'replication-fundamentals',
      text: {
        en: '1. Why Replicate Cloud Object Storage?',
        bn: '১. ক্লাউড অবজেক্ট স্টোরেজ কেন রেপ্লিকেট করবেন?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your enterprise relies on cloud storage, storing data in a single geographic region introduces risks from regional outages or compliance violations. S3 Replication provides automated, asynchronous copying of objects across buckets.',
        bn: 'যখন কোনো প্রতিষ্ঠান ক্লাউড স্টোরেজের ওপর নির্ভরশীল হয়, ডাটাকে একটি একক ভৌগোলিক অঞ্চলে রাখা যেকোনো আঞ্চলিক বিপর্যয় বা আইনি লঙ্ঘনের ঝুঁকি তৈরি করে। S3 রেপ্লিকেশন বিভিন্ন বাকেটের মাঝে অবজেক্টের স্বয়ংক্রিয় ও অ্যাসিনক্রোনাস অনুলিপি তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'System architects implement S3 replication to address 3 core business objectives:',
        bn: 'সিস্টেম আর্কিটেক্টরা ৩ টি প্রধান ব্যবসায়িক লক্ষ্য অর্জনে S3 রেপ্লিকেশন কার্যকর করেন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Cross-Region Replication (CRR): Replicates objects from a source bucket in 1 region (e.g. us-east-1) to a destination bucket in another region (e.g. eu-central-1). It provides geographic disaster recovery and places data closer to international users for lower read latencies.',
          bn: '১. ক্রস-রিজিয়ন রেপ্লিকেশন (CRR): ১ টি অঞ্চলের (যেমন us-east-1) সোর্স বাকেট থেকে অন্য অঞ্চলের (যেমন eu-central-1) ডেস্টিনেশন বাকেটে ডাটা রেপ্লিকেট করে। এটি আন্তর্জাতিক ব্যবহারকারীদের জন্য ভৌগোলিক বিপর্যয় পুনরুদ্ধার এবং দ্রুত রিড অ্যাক্সেস নিশ্চিত করে।'
        },
        {
          en: '2. Same-Region Replication (SRR): Replicates objects between buckets within the same AWS region. Best for consolidating logs from multiple production accounts into 1 central analytics data lake or syncing live production with test environments.',
          bn: '২. সেম-রিজিয়ন রেপ্লিকেশন (SRR): একই অঞ্চলের ভেতরে বিভিন্ন বাকেটের মাঝে ডাটা কপি করে। একাধিক প্রোডাকশন অ্যাকাউন্টের লগ ১ টি কেন্দ্রীয় ডাটা লেকে জমা করতে বা টেস্ট পরিবেশের সাথে সিঙ্ক করতে এটি সবচেয়ে কার্যকর।'
        },
        {
          en: '3. Compliance and Data Sovereignty: Many financial and healthcare regulations mandate retaining 2 separate physical copies of transaction records separated by hundreds of miles.',
          bn: '৩. কমপ্লায়েন্স ও ডাটা সার্বভৌমত্ব: বহু আর্থিক ও স্বাস্থ্যসেবা সংক্রান্ত আইন শত শত মাইল দূরত্বে অবস্থিত ২ টি আলাদা ফিজিক্যাল স্থানে লেনদেনের রেকর্ড সংরক্ষণ করা বাধ্যতামূলক করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'crr-architecture-diagram',
      title: {
        en: 'S3 Cross-Region Replication (CRR) Pipeline',
        bn: 'S3 ক্রস-রিজিয়ন রেপ্লিকেশন (CRR) পাইপলাইন'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Cross-Region Replication (CRR) Architecture</text>' +
          '<!-- Source Region -->' +
          '<g transform="translate(40, 60)">' +
            '<rect width="250" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>' +
            '<text x="125" y="28" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">&#128205; Source: us-east-1 (N. Virginia)</text>' +
            '<rect x="15" y="45" width="220" height="70" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="11" font-weight="bold">Source Bucket: app-primary</text>' +
            '<text x="25" y="86" fill="#34d399" font-size="9">&#x2714; Versioning: ENABLED</text>' +
            '<text x="25" y="100" fill="#cbd5e1" font-size="9">PUT photo.png (v1)</text>' +
            '<rect x="15" y="130" width="220" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="152" fill="#cbd5e1" font-size="10" font-weight="bold">Replication Status:</text>' +
            '<text x="25" y="172" fill="#facc15" font-size="10" font-family="monospace">x-amz-replication-status:</text>' +
            '<text x="25" y="190" fill="#facc15" font-size="11" font-weight="bold">PENDING &#x2192; COMPLETED</text>' +
            '<rect x="15" y="230" width="220" height="75" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="25" y="252" fill="#c084fc" font-size="10" font-weight="bold">IAM Role Auth</text>' +
            '<text x="25" y="270" fill="#94a3b8" font-size="9">s3:GetObjectVersion</text>' +
            '<text x="25" y="286" fill="#94a3b8" font-size="9">s3:ReplicateObject</text>' +
          '</g>' +
          '<!-- Trans-Continental Replication Arrow -->' +
          '<path d="M 300 200 L 490 200" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,5"/>' +
          '<circle cx="400" cy="200" r="28" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>' +
          '<text x="400" y="195" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">RTC SLA</text>' +
          '<text x="400" y="210" fill="#34d399" font-size="9" text-anchor="middle">&lt; 15 mins</text>' +
          '<!-- Destination Region -->' +
          '<g transform="translate(500, 60)">' +
            '<rect width="260" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>' +
            '<text x="130" y="28" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">&#128205; Destination: eu-central-1 (Frankfurt)</text>' +
            '<rect x="15" y="45" width="230" height="70" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="25" y="68" fill="#34d399" font-size="11" font-weight="bold">Dest Bucket: app-backup</text>' +
            '<text x="25" y="86" fill="#34d399" font-size="9">&#x2714; Versioning: ENABLED</text>' +
            '<text x="25" y="100" fill="#cbd5e1" font-size="9">Exact replica created</text>' +
            '<rect x="15" y="130" width="230" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="152" fill="#cbd5e1" font-size="10" font-weight="bold">Replica Marker:</text>' +
            '<text x="25" y="172" fill="#38bdf8" font-size="10" font-family="monospace">x-amz-replication-status:</text>' +
            '<text x="25" y="190" fill="#34d399" font-size="11" font-weight="bold">REPLICA (Loop Safe)</text>' +
            '<rect x="15" y="230" width="230" height="75" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="25" y="252" fill="#c084fc" font-size="10" font-weight="bold">KMS Re-Encryption</text>' +
            '<text x="25" y="270" fill="#94a3b8" font-size="9">Re-encrypted with local</text>' +
            '<text x="25" y="286" fill="#34d399" font-size="9">EU Frankfurt KMS Key</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'replication-prerequisites',
      text: {
        en: '2. Prerequisites and Replication Mechanics',
        bn: '২. পূর্বশর্ত এবং রেপ্লিকেশন কার্যপ্রণালী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To configure replication between 2 buckets, system administrators must satisfy 2 non-negotiable architectural requirements:',
        bn: '২ টি বাকেটের মাঝে রেপ্লিকেশন কনফিগার করতে সিস্টেম অ্যাডমিনিস্ট্রেটরদের অবশ্যই ২ টি শর্ত পূরণ করতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Mandatory Object Versioning: Both the source bucket and destination bucket MUST have versioning explicitly enabled. Replication relies on immutable version IDs to guarantee exact mirror snapshots.',
          bn: '১. আবশ্যিক অবজেক্ট ভার্সনিং: সোর্স বাকেট এবং ডেস্টিনেশন বাকেট উভয়টিতে অবশ্যই ভার্সনিং সক্রিয় থাকতে হবে। সঠিক প্রতিরূপ তৈরি করতে রেপ্লিকেশন অপরিবর্তনীয় ভার্সন আইডি ব্যবহারের ওপর নির্ভর করে।'
        },
        {
          en: '2. IAM Service Role Permissions: An AWS IAM service role must be assigned to S3, granting permissions to read objects and version tags from the source bucket and execute replication write actions in the destination bucket.',
          bn: '২. IAM সার্ভিস রোল পারমিশন: S3-কে একটি সুনির্দিষ্ট IAM সার্ভিস রোল দিতে হয়, যা সোর্স বাকেট থেকে অবজেক্ট পড়ার এবং ডেস্টিনেশন বাকেটে রেপ্লিকেশন রাইট করার অনুমতি দেয়।'
        }
      ]
    },
    {
      type: 'para',
      text: {
        en: 'S3 replication is asynchronous. For mission-critical workloads, enabling S3 Replication Time Control (S3 RTC) provides a formal Service Level Agreement (SLA) backing the replication of 99.99% of new objects within 15 minutes.',
        bn: 'S3 রেপ্লিকেশন ব্যাকগ্রাউন্ডে অ্যাসিনক্রোনাসভাবে চলে। জরুরি কাজের জন্য S3 Replication Time Control (RTC) সক্রিয় করলে এটি আনুষ্ঠানিক SLA চুক্তির মাধ্যমে ১৫ মিনিটের মধ্যে ৯৯.৯৯% অবজেক্ট কপি করার নিশ্চয়তা দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'replication-simulator',
      text: {
        en: '3. Cross-Region Replication Engine in TypeScript',
        bn: '৩. TypeScript এ ক্রস-রিজিয়ন রেপ্লিকেশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an S3 replication controller processes source bucket PUT events, assigns replication tracking statuses, copies payload bytes to a destination bucket, and enforces loop prevention:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি S3 রেপ্লিকেশন কন্ট্রোলার সোর্স বাকেটের ইভেন্ট প্রসেস করে, ট্র্যাকিং স্ট্যাটাস আপডেট করে, ডেস্টিনেশন বাকেটে ডাটা কপি করে এবং লুপ প্রতিরোধ করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 Cross-Region Replication (CRR), replication status state machine, and RTC time verification.',
        bn: 'S3 ক্রস-রিজিয়ন রেপ্লিকেশন (CRR), রেপ্লিকেশন স্ট্যাটাস স্টেট মেশিন এবং RTC সময়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of S3 Cross-Region Replication (CRR) and Status Tracking
type ReplicationStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REPLICA';

interface S3ObjectRecord {
  key: string;
  versionId: string;
  payload: string;
  region: string;
  replicationStatus?: ReplicationStatus;
}

class CRRReplicationController {
  private sourceBucket: Map<string, S3ObjectRecord> = new Map();
  private destBucket: Map<string, S3ObjectRecord> = new Map();
  private rtcSlaMinutes: number = 15;

  // Source bucket upload triggers async replication
  putObject(key: string, payload: string, versionId: string): S3ObjectRecord {
    const record: S3ObjectRecord = {
      key,
      versionId,
      payload,
      region: 'us-east-1',
      replicationStatus: 'PENDING'
    };
    this.sourceBucket.set(key, record);
    return record;
  }

  // Simulates background async replication to Europe
  replicatePendingObjects(): number {
    let replicatedCount = 0;
    for (const [key, srcObj] of this.sourceBucket.entries()) {
      if (srcObj.replicationStatus === 'PENDING') {
        // Copy to destination with local KMS re-encryption
        const replicaRecord: S3ObjectRecord = {
          key: srcObj.key,
          versionId: srcObj.versionId,
          payload: srcObj.payload,
          region: 'eu-central-1',
          replicationStatus: 'REPLICA' // Loop prevention tag
        };

        this.destBucket.set(key, replicaRecord);
        srcObj.replicationStatus = 'COMPLETED';
        replicatedCount++;
      }
    }
    return replicatedCount;
  }

  getDestinationObject(key: string): S3ObjectRecord | undefined {
    return this.destBucket.get(key);
  }
}

// 1. Initialize Cross-Region Replication Controller
const crr = new CRRReplicationController();

// 2. Upload mission-critical file in US-East
const initialFile = crr.putObject('financial/q4-audit.csv', 'revenue,expenses\\n1000000,450000', 'ver_01');
console.log('Immediate Source Replication Status: ' + initialFile.replicationStatus); // -> PENDING

// Verify not yet in Europe destination bucket
const preCheck = crr.getDestinationObject('financial/q4-audit.csv');
console.log('Present in Europe before replication?: ' + (preCheck !== undefined)); // -> false

// 3. Background asynchronous worker executes replication
const count = crr.replicatePendingObjects();
console.log('Replicated Objects Count: ' + count); // -> 1
console.log('Updated Source Replication Status: ' + initialFile.replicationStatus); // -> COMPLETED

// 4. Verify Europe destination bucket has valid replica
const destFile = crr.getDestinationObject('financial/q4-audit.csv');
console.log('Europe Destination Region: ' + destFile?.region); // -> eu-central-1
console.log('Europe Replica Marker: ' + destFile?.replicationStatus); // -> REPLICA`
    }
  ],
  exercises: [
    {
      id: 'rep-ex-1',
      kind: 'mcq',
      question: {
        en: 'What configuration is strictly mandatory on both source and destination buckets before S3 replication can be enabled?',
        bn: 'S3 রেপ্লিকেশন সক্রিয় করার আগে সোর্স ও ডেস্টিনেশন উভয় বাকেটে কোন কনফিগারেশনটি থাকা সম্পূর্ণ বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Object Versioning must be explicitly enabled on both buckets',
          bn: 'উভয় বাকেটে অবশ্যই অবজেক্ট ভার্সনিং সক্রিয় থাকতে হবে'
        },
        {
          en: 'Both buckets must share the exact same bucket name',
          bn: 'উভয় বাকেটের নাম হুবহু একই হতে হবে'
        },
        {
          en: 'All stored objects must be smaller than 50 kilobytes in size',
          bn: 'সমস্ত সংরক্ষিত অবজেক্ট ৫০ কিলোবাইটের চেয়ে ছোট হতে হবে'
        },
        {
          en: 'The AWS account must have existed for at least 5 years',
          bn: 'AWS অ্যাকাউন্টটি কমপক্ষে ৫ বছরের পুরোনো হতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Replication requires immutable version IDs to maintain identical snapshots.',
        bn: 'সঠিক প্রতিরূপ বজায় রাখতে রেপ্লিকেশনের জন্য অপরিবর্তনীয় ভার্সন আইডি আবশ্যক।'
      },
      explanation: {
        en: 'Amazon S3 mandates that Object Versioning is enabled on both source and destination buckets to ensure replication accuracy and track revisions.',
        bn: 'রেপ্লিকেশনের নির্ভরযোগ্যতা ও ভার্সন ট্র্যাকিংয়ের স্বার্থে সোর্স ও ডেস্টিনেশন উভয় বাকেটে ভার্সনিং সক্রিয় করা আবশ্যক।'
      }
    },
    {
      id: 'rep-ex-2',
      kind: 'mcq',
      question: {
        en: 'What time window does S3 Replication Time Control (S3 RTC) guarantee under its formal SLA for 99.99% of objects?',
        bn: 'S3 Replication Time Control (S3 RTC) তার আনুষ্ঠানিক SLA-র অধীনে ৯৯.৯৯% অবজেক্টের জন্য কত সময়ের গ্যারান্টি দেয়?'
      },
      options: [
        {
          en: 'Replication within 15 minutes of upload',
          bn: 'আপলোডের ১৫ মিনিটের মধ্যে রেপ্লিকেশন'
        },
        {
          en: 'Replication within 24 hours of upload',
          bn: 'আপলোডের ২৪ ঘণ্টার মধ্যে রেপ্লিকেশন'
        },
        {
          en: 'Replication within 1 millisecond of upload',
          bn: 'আপলোডের ১ মিলি-সেকেন্ডের মধ্যে রেপ্লিকেশন'
        },
        {
          en: 'Replication within 30 days of upload',
          bn: 'আপলোডের ৩০ দিনের মধ্যে রেপ্লিকেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'S3 RTC provides an SLA of 15 minutes.',
        bn: 'S3 RTC মূলত ১৫ মিনিটের SLA প্রতিশ্রুতি দেয়।'
      },
      explanation: {
        en: 'S3 Replication Time Control (RTC) guarantees that 99.99% of newly uploaded objects are replicated to the destination bucket within 15 minutes.',
        bn: 'S3 Replication Time Control (RTC) নিশ্চিত করে যে নতুন আপলোড করা অবজেক্টের ৯৯.৯৯% ১৫ মিনিটের মধ্যে অন্য বাকেটে পৌঁছে যায়।'
      }
    },
    {
      id: 'rep-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does Amazon S3 prevent infinite loops when replicating objects between buckets?',
        bn: 'বাকেটগুলোর মাঝে ডাটা রেপ্লিকেশনের সময় Amazon S3 কীভাবে অসীম লুপ (Infinite Loop) প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'Objects created by replication receive a "REPLICA" status and are not re-replicated by default',
          bn: 'রেপ্লিকেশনের মাধ্যমে তৈরি অবজেক্ট "REPLICA" স্ট্যাটাস পায় এবং ডিফল্টভাবে পুনরায় রেপ্লিকেট হয় না'
        },
        {
          en: 'By automatically shutting down the destination AWS datacenter',
          bn: 'ডেস্টিনেশন AWS ডাটা সেন্টারটি স্বয়ংক্রিয়ভাবে বন্ধ করে দেওয়ার মাধ্যমে'
        },
        {
          en: 'By deleting all source bucket objects after exactly 10 minutes',
          bn: 'ঠিক ১০ মিনিট পর সোর্স বাকেটের সমস্ত অবজেক্ট মুছে ফেলার মাধ্যমে'
        },
        {
          en: 'By restricting replication strictly to text files only',
          bn: 'রেপ্লিকেশন কেবল টেক্সট ফাইলের মাঝে সীমাবদ্ধ রাখার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'S3 tags replicated objects as REPLICA, blocking recursive re-replication.',
        bn: 'S3 রেপ্লিকেট হওয়া অবজেক্টকে REPLICA হিসেবে চিহ্নিত করে পুনরাবৃত্তিমূলক লুপ আটকায়।'
      },
      explanation: {
        en: 'S3 sets x-amz-replication-status to REPLICA on destination objects. A replica is not re-replicated back to the source bucket, preventing circular loops.',
        bn: 'ডেস্টিনেশন অবজেক্টে REPLICA স্ট্যাটাস থাকায় এটি পুনরায় সোর্স বাকেটে পাঠানো হয় না, ফলে অসীম লুপ সৃষ্টি হতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-replicas-and-the-replica',
    title: {
      en: 'S3 Cross-Region Replication (CRR) Quiz',
      bn: 'S3 ক্রস-রিজিয়ন রেপ্লিকেশন (CRR) কুইজ'
    },
    questions: [
      {
        id: 'rep-q1',
        kind: 'mcq',
        question: {
          en: 'What is the primary difference between Cross-Region Replication (CRR) and Same-Region Replication (SRR)?',
          bn: 'ক্রস-রিজিয়ন রেপ্লিকেশন (CRR) এবং সেম-রিজিয়ন রেপ্লিকেশন (SRR)-এর মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'CRR replicates data across geographically distinct cloud regions, while SRR replicates data between buckets in the same region',
            bn: 'CRR ভৌগোলিকভাবে ভিন্ন ভিন্ন ক্লাউড রিজিয়নে ডাটা কপি করে, আর SRR একই রিজিয়নের ভিন্ন বাকেটে কপি করে'
          },
          {
            en: 'CRR only supports files under 1 megabyte, while SRR supports files of any size',
            bn: 'CRR কেবল ১ মেগাবাইটের নিচের ফাইল সমর্থন করে, আর SRR যেকোনো সাইজ সমর্থন করে'
          },
          {
            en: 'SRR permanently encrypts data with 1 password while CRR leaves data unencrypted',
            bn: 'SRR ১ টি পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে আর CRR ডাটাকে আন-এনক্রিপ্টেড রাখে'
          },
          {
            en: 'CRR is only available for personal hobby accounts',
            bn: 'CRR কেবল ব্যক্তিগত শখের অ্যাকাউন্টের জন্য উন্মুক্ত'
          }
        ],
        answer: 0,
        hint: {
          en: 'CRR spans different regions (e.g. US to EU); SRR stays within 1 region.',
          bn: 'CRR বিভিন্ন রিজিয়নে বিস্তৃত (যেমন US থেকে EU); SRR একই রিজিয়নের ভেতরে থাকে।'
        },
        explanation: {
          en: 'CRR copies data between different geographic regions for disaster recovery and latency, whereas SRR copies data within the same region for log aggregation or compliance.',
          bn: 'CRR ভিন্ন ভিন্ন অঞ্চলের মাঝে ডাটা কপি করে ব্যাকআপ নিশ্চিত করে, আর SRR একই অঞ্চলের ভেতর লগ জমা করা বা সুরক্ষার কাজে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'rep-q2',
        kind: 'mcq',
        question: {
          en: 'Can Cross-Region Replication automatically re-encrypt objects using a destination KMS key?',
          bn: 'ক্রস-রিজিয়ন রেপ্লিকেশন কি ডেস্টিনেশন অঞ্চলের KMS কি ব্যবহার করে অবজেক্টকে স্বয়ংক্রিয়ভাবে পুনরায় এনক্রিপ্ট করতে পারে?'
        },
        options: [
          {
            en: 'Yes, CRR can be configured to decrypt in the source region and re-encrypt with a destination KMS CMK',
            bn: 'হ্যাঁ, সোর্স রিজিয়নে ডিক্রিপ্ট করে ডেস্টিনেশন অঞ্চলের KMS CMK দিয়ে পুনরায় এনক্রিপ্ট করার নিয়ম কনফিগার করা যায়'
          },
          {
            en: 'No, encrypted objects can never be replicated across regions',
            bn: 'না, এনক্রিপ্ট করা ফাইল কখনোই অন্য অঞ্চলে রেপ্লিকেট করা যায় না'
          },
          {
            en: 'Only if the encryption key is published on a public website',
            bn: 'কেবল যদি এনক্রিপশন কি কোনো পাবলিক ওয়েবসাইটে প্রকাশ করা হয়'
          },
          {
            en: 'Only during full moon nights in the destination region',
            bn: 'কেবল ডেস্টিনেশন অঞ্চলের পূর্ণিমার রাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 replication supports KMS key re-encryption for destination buckets.',
          bn: 'S3 রেপ্লিকেশন ডেস্টিনেশন বাকেটের জন্য KMS কি রি-এনক্রিপশন সমর্থন করে।'
        },
        explanation: {
          en: 'S3 CRR can replicate objects encrypted with SSE-KMS, decrypting them with the source key and re-encrypting with the destination region KMS master key.',
          bn: 'S3 CRR সোর্স কি দিয়ে ডিক্রিপ্ট করে ডেস্টিনেশন অঞ্চলের লোকাল KMS মাস্টার কি দিয়ে পুনরায় এনক্রিপ্ট করতে সক্ষম।'
        }
      },
      {
        id: 'rep-q3',
        kind: 'mcq',
        question: {
          en: 'What happens to existing historical objects in a bucket when Cross-Region Replication is enabled for the first time?',
          bn: 'প্রথমবার ক্রস-রিজিয়ন রেপ্লিকেশন চালু করার সময় বাকেটে থাকা বিদ্যমান পুরোনো অবজেক্টগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'Only new objects uploaded after enabling CRR are replicated automatically; existing objects require S3 Batch Replication to copy',
            bn: 'চালু করার পর আপলোড হওয়া নতুন অবজেক্টই শুধু স্বয়ংক্রিয়ভাবে কপি হয়; পুরোনো ফাইলের জন্য S3 Batch Replication চালাতে হয়'
          },
          {
            en: 'All existing objects are permanently deleted from the source bucket',
            bn: 'বিদ্যমান تمام অবজেক্ট সোর্স বাকেট থেকে চিরতরে মুছে ফেলা হয়'
          },
          {
            en: 'All existing objects are automatically converted into PDF documents',
            bn: 'تمام অবজেক্ট স্বয়ংক্রিয়ভাবে পিডিএফ ফাইলে রূপান্তরিত হয়'
          },
          {
            en: 'The source bucket is immediately locked and cannot accept new uploads',
            bn: 'সোর্স বাকেটটি সাথে সাথে লক হয়ে যায় এবং নতুন আপলোড বন্ধ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Replication applies to new objects by default. Use S3 Batch Operations for pre-existing objects.',
          bn: 'রেপ্লিকেশন ডিফল্টভাবে কেবল নতুন অবজেক্টে কাজ করে। পুরোনো ফাইলের জন্য S3 Batch Operations লাগে।'
        },
        explanation: {
          en: 'By default, CRR only replicates new objects created after the rule is configured. To copy existing objects that were stored prior to enabling CRR, you initiate S3 Batch Replication.',
          bn: 'CRR রুল তৈরির পর কেবল নতুন ফাইল কপি হয়। পুরোনো ফাইলগুলো ডেস্টিনেশনে পাঠাতে S3 Batch Replication ব্যবহার করতে হয়।'
        }
      },
      {
        id: 'rep-q4',
        kind: 'mcq',
        question: {
          en: 'Which S3 metadata header reflects the current replication state of an object in the source bucket?',
          bn: 'সোর্স বাকেটে থাকা অবজেক্টের বর্তমান রেপ্লিকেশন অবস্থা কোন S3 মেটাডাটা হেডারে সংরক্ষিত থাকে?'
        },
        options: [
          {
            en: 'x-amz-replication-status',
            bn: 'x-amz-replication-status'
          },
          {
            en: 'Content-Type',
            bn: 'Content-Type'
          },
          {
            en: 'x-amz-copy-progress',
            bn: 'x-amz-copy-progress'
          },
          {
            en: 'Cache-Control',
            bn: 'Cache-Control'
          }
        ],
        answer: 0,
        hint: {
          en: 'The header is x-amz-replication-status.',
          bn: 'হেডারটি হলো x-amz-replication-status।'
        },
        explanation: {
          en: '"x-amz-replication-status" tracks replication lifecycle, returning PENDING while in queue, COMPLETED when replicated, or FAILED if an error occurred.',
          bn: '"x-amz-replication-status" রেপ্লিকেশনের অগ্রগতি নির্দেশ করে: লাইনে থাকলে PENDING, সফল হলে COMPLETED এবং ত্রুটি হলে FAILED দেখায়।'
        }
      },
      {
        id: 'rep-q5',
        kind: 'mcq',
        question: {
          en: 'Can Delete Markers created by soft deletion be optionally replicated to the destination bucket?',
          bn: 'সফট ডিলিট দিয়ে তৈরি হওয়া ডিলিট মার্কার কি ডেস্টিনেশন বাকেটে ঐচ্ছিকভাবে রেপ্লিকেট করা সম্ভব?'
        },
        options: [
          {
            en: 'Yes, S3 replication rules include an explicit setting to enable or disable Delete Marker replication',
            bn: 'হ্যাঁ, S3 রেপ্লিকেশন রুলে ডিলিট মার্কার রেপ্লিকেট করার বা বন্ধ রাখার সুস্পষ্ট সেটিং রয়েছে'
          },
          {
            en: 'No, Delete Markers can never be replicated under any circumstances',
            bn: 'না, কোনো অবস্থাতেই ডিলিট মার্কার রেপ্লিকেট করা সম্ভব নয়'
          },
          {
            en: 'Delete markers are only replicated if the user pays an additional $1000 fee',
            bn: 'ডিলিট মার্কার কেবল তখনই কপি হয় যদি ব্যবহারকারী অতিরিক্ত ১০০০ ডলার ফি দেন'
          },
          {
            en: 'Delete markers are converted into executable bash scripts automatically',
            bn: 'ডিলিট মার্কারগুলো স্বয়ংক্রিয়ভাবে এক্সিকিউটেবল ব্যাশ স্ক্রিপ্টে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'You can toggle Delete Marker replication on or off in the replication rule configuration.',
          bn: 'রেপ্লিকেশন রুলের সেটিংসে ডিলিট মার্কার অনুলিপি চালু বা বন্ধ করার সুইচ থাকে।'
        },
        explanation: {
          en: 'S3 replication allows administrators to toggle Delete Marker replication. Many enterprises disable it to prevent accidental source deletions from immediately hiding destination replicas.',
          bn: 'S3 রেপ্লিকেশনে ডিলিট মার্কার কপি অন বা অফ করা যায়। ভুলবশত সোর্সে ডিলিট হলে ডেস্টিনেশনে যাতে মুছে না যায় সেজন্য অনেকেই এটি বন্ধ রাখেন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-object-storage-release',
    title: {
      en: 'Production S3 Ecosystem: Multipart Uploads & MinIO',
      bn: 'প্রোডাকশন S3 ইকোসিস্টেম: মাল্টিপার্ট আপলোড এবং MinIO'
    }
  }
};
