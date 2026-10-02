import type { Lesson } from '../../../lib/types';

export const TheObjectStorageReleaseLesson: Lesson = {
  slug: 'the-object-storage-release',
  tech: 'object-storage',
  title: {
    en: 'Production S3 Ecosystem: Multipart Uploads & MinIO',
    bn: 'প্রোডাকশন S3 ইকোসিস্টেম: মাল্টিপার্ট আপলোড এবং MinIO'
  },
  summary: {
    en: 'Master enterprise object storage: high-throughput multipart uploads, compound ETags, MinIO private clusters, multi-cloud S3 APIs, and sub-10ms Express One Zone.',
    bn: 'এন্টারপ্রাইজ অবজেক্ট স্টোরেজ সম্পূর্ণ আয়ত্ত করুন: উচ্চ-গতির মাল্টিপার্ট আপলোড, কম্পাউন্ড ETag, MinIO প্রাইভেট ক্লাস্টার, মাল্টি-ক্লাউড S3 API এবং এক্সপ্রেস ওয়ান জোন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'multipart-fundamentals',
      text: {
        en: '1. High-Throughput Multipart Uploads',
        bn: '১. উচ্চ-গতির মাল্টিপার্ট আপলোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you upload multi-gigabyte or terabyte files to object storage, uploading via a single web network connection is fragile. A single network hiccup at 99% forces you to retransmit the entire file from the beginning.',
        bn: 'যখন আপনি ক্লাউড অবজেক্ট স্টোরেজে বিশালাকার গিগাবাইট বা টেরাবাইট ফাইল পাঠান, একটিমাত্র সাধারণ কানেকশন দিয়ে পাঠানো অত্যন্ত ঝুঁকিপূর্ণ। ৯৯% আপলোড হওয়ার পর ইন্টারনেটে সামান্য ত্রুটি দেখা দিলেও শুরু থেকে পুরো ফাইল পুনরায় পাঠাতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'S3 solves large file transfer with Multipart Uploads. A single object upload is broken down into independent chunks and executed across 3 distinct phases:',
        bn: 'S3 এই সমস্যার সমাধান করে মাল্টিপার্ট আপলোডের মাধ্যমে। একটি একক অবজেক্টকে স্বাধীন খণ্ডে ভাগ করে ৩ টি ধাপে এই প্রক্রিয়া সম্পন্ন করা হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Initiate Multipart Upload: The client calls POST /bucket/key?uploads. S3 registers the upload session and returns a unique alphanumeric UploadId string.',
          bn: '১. ইনিশিয়েট মাল্টিপার্ট আপলোড: ক্লায়েন্ট POST /bucket/key?uploads রিকোয়েস্ট পাঠায়। S3 সেশনটি চালু করে একটি অনন্য আলফানিউমেরিক UploadId স্ট্রিং প্রদান করে।'
        },
        {
          en: '2. Upload Parts in Parallel: The client slices the source file into parts (from 5MB up to 5GB per part, between 1 and 10000 parts). Each part is uploaded concurrently over parallel TCP connections using PUT /bucket/key?partNumber=N&uploadId=XYZ. Each part responds with an MD5 ETag checksum.',
          bn: '২. সমান্তরালে পার্ট আপলোড: ক্লায়েন্ট মূল ফাইলটিকে টুকরো করে (প্রতি পার্ট ৫ মেগাবাইট থেকে ৫ গিগাবাইট, ১ থেকে ১০০০০ টি পার্ট)। সমান্তরাল TCP কানেকশন দিয়ে প্রতিটি পার্ট একই সাথে আপলোড হয় এবং প্রতিটি পার্ট সফল হলে একটি করে MD5 ETag চেকসাম প্রদান করে।'
        },
        {
          en: '3. Complete Multipart Upload: Once all parts upload, the client sends POST /bucket/key?uploadId=XYZ containing an XML or JSON manifest of part numbers and their ETags. S3 validates the checksums, concatenates the byte parts, and creates 1 single atomic object.',
          bn: '৩. কমপ্লিট মাল্টিপার্ট আপলোড: تمام পার্ট আপলোড শেষে ক্লায়েন্ট পার্ট নম্বর ও ETag-এর তালিকা দিয়ে একটি সমাপনী রিকোয়েস্ট পাঠায়। S3 চেকসামগুলো মিলিয়ে সব টুকরো জোড়া দিয়ে ১ টিমাত্র অবিভাজ্য অবজেক্ট তৈরি করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'multipart-architecture-diagram',
      title: {
        en: 'High-Throughput Parallel Multipart Upload Pipeline',
        bn: 'উচ্চ-গতির সমান্তরাল মাল্টিপার্ট আপলোড পাইপলাইন'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Multipart Upload Architecture (5MB to 5TB)</text>' +
          '<!-- Stage 1: File Slicing -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="200" height="320" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="100" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. SLICE &amp; INITIATE</text>' +
            '<rect x="12" y="45" width="176" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="68" fill="#38bdf8" font-size="10" font-weight="bold">Source: 50GB Video</text>' +
            '<text x="20" y="86" fill="#94a3b8" font-size="9">Sliced into 100MB chunks</text>' +
            '<rect x="12" y="120" width="176" height="80" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="100" y="142" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Initiate API Call</text>' +
            '<text x="20" y="162" fill="#cbd5e1" font-size="8">POST /video.mp4?uploads</text>' +
            '<text x="20" y="180" fill="#34d399" font-size="8">Returns: UploadId="xyz99"</text>' +
            '<text x="100" y="240" fill="#cbd5e1" font-size="10" text-anchor="middle">Fault Tolerant</text>' +
            '<text x="100" y="258" fill="#38bdf8" font-size="10" text-anchor="middle">Network Retry per Part</text>' +
          '</g>' +
          '<!-- Parallel Upload Arrow -->' +
          '<path d="M 245 200 L 275 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Stage 2: Parallel Streams -->' +
          '<g transform="translate(285, 60)">' +
            '<rect width="250" height="320" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="1.5"/>' +
            '<text x="125" y="26" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">2. PARALLEL PART UPLOADS</text>' +
            '<rect x="12" y="45" width="226" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="20" y="68" fill="#38bdf8" font-size="9" font-weight="bold">Part 1 (Bytes 0-100MB)</text>' +
            '<text x="20" y="86" fill="#34d399" font-size="8">&#x2714; ETag: "a1b2c3d4..." (200 OK)</text>' +
            '<rect x="12" y="110" width="226" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="20" y="133" fill="#38bdf8" font-size="9" font-weight="bold">Part 2 (Bytes 100-200MB)</text>' +
            '<text x="20" y="151" fill="#34d399" font-size="8">&#x2714; ETag: "e5f6g7h8..." (200 OK)</text>' +
            '<rect x="12" y="175" width="226" height="55" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
            '<text x="20" y="198" fill="#f87171" font-size="9" font-weight="bold">Part 3 (Bytes 200-300MB) [FAIL]</text>' +
            '<text x="20" y="216" fill="#facc15" font-size="8">Retries ONLY Part 3 &#x2714;</text>' +
            '<rect x="12" y="240" width="226" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="20" y="263" fill="#38bdf8" font-size="9" font-weight="bold">Part N (Bytes ...50GB)</text>' +
            '<text x="20" y="281" fill="#34d399" font-size="8">&#x2714; Parallel TCP concurrency</text>' +
          '</g>' +
          '<!-- Complete Arrow -->' +
          '<path d="M 545 200 L 575 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Stage 3: Concatenation -->' +
          '<g transform="translate(585, 60)">' +
            '<rect width="185" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="92" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. ATOMIC ASSEMBLY</text>' +
            '<rect x="10" y="45" width="165" height="85" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="18" y="68" fill="#34d399" font-size="10" font-weight="bold">Complete Call</text>' +
            '<text x="18" y="86" fill="#cbd5e1" font-size="8">POST ?uploadId=xyz99</text>' +
            '<text x="18" y="100" fill="#cbd5e1" font-size="8">Part manifest verified</text>' +
            '<text x="18" y="116" fill="#34d399" font-size="8">Concatenated on disk</text>' +
            '<rect x="10" y="145" width="165" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="18" y="168" fill="#c084fc" font-size="9" font-weight="bold">Compound ETag:</text>' +
            '<text x="18" y="186" fill="#cbd5e1" font-size="8 font-family="monospace">"c032a...-500"</text>' +
            '<text x="18" y="202" fill="#94a3b8" font-size="8">Hash + part count</text>' +
            '<text x="92" y="260" fill="#34d399" font-size="10" text-anchor="middle">Single Unified Object</text>' +
            '<text x="92" y="278" fill="#cbd5e1" font-size="10" text-anchor="middle">Immediate Consistency</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 's3-ecosystem-minio',
      text: {
        en: '2. The S3-Compatible Cloud Ecosystem: MinIO and Cloudflare R2',
        bn: '২. S3-সামঞ্জস্যপূর্ণ ক্লাউড ইকোসিস্টেম: MinIO এবং Cloudflare R2'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because Amazon S3 invented the REST object storage protocol, its API became the universal industry standard. Modern applications code against the S3 API and deploy across diverse environments:',
        bn: 'Amazon S3 অবজেক্ট স্টোরেজ প্রোটোকলের সূচনা করায় এর API আজ বিশ্বজনীন শিল্প মানদণ্ডে পরিণত হয়েছে। আধুনিক অ্যাপ্লিকেশনগুলো S3 API দিয়ে কোড লিখে বিভিন্ন ক্লাউডে নির্বিঘ্নে স্থাপন করা যায়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'MinIO Private Clusters: A high-performance, Kubernetes-native, S3-compatible object storage server written in Go. Enterprises deploy MinIO on bare-metal servers or private clouds, achieving 100% S3 SDK compatibility behind corporate firewalls.',
          bn: 'MinIO প্রাইভেট ক্লাস্টার: গো ভাষায় লেখা উচ্চ-গতির কুবারনেটিস-বান্ধব S3-সামঞ্জস্যপূর্ণ অবজেক্ট স্টোরেজ সার্ভার। প্রতিষ্ঠানগুলো নিজস্ব সার্ভারে MinIO স্থাপন করে শতভাগ S3 SDK সুবিধা উপভোগ করে।'
        },
        {
          en: 'Cloudflare R2: S3-compatible cloud object storage that charges 0 egress fees for bandwidth. Ideal for serving global web assets, AI model checkpoints, and video streaming without unpredictable network costs.',
          bn: 'Cloudflare R2: S3-সামঞ্জস্যপূর্ণ ক্লাউড অবজেক্ট স্টোরেজ যা ব্যান্ডউইথের জন্য ০ টাকা এগ্রেস ফি কাটে। বাড়তি নেটওয়ার্ক খরচ ছাড়াই বিশ্বব্যাপী ওয়েব মিডিয়া ও এআই মডেল বিতরণে এটি অত্যন্ত জনপ্রিয়।'
        },
        {
          en: 'S3 Express One Zone: A high-performance storage class providing single-digit millisecond latency (under 10ms) for AI/ML training loops and high-throughput real-time analytics.',
          bn: 'S3 Express One Zone: একটি অতি-উচ্চ গতির স্টোরেজ ক্লাস যা এআই/মেশিন লার্নিং ট্রেনিং এবং তাৎক্ষণিক অ্যানালিটিক্সের জন্য ১০ মিলি-সেকেন্ডের কম লেটেন্সি নিশ্চিত করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'multipart-simulator',
      text: {
        en: '3. Multipart Upload Engine in TypeScript',
        bn: '৩. TypeScript এ মাল্টিপার্ট আপলোড ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an S3-compatible object store registers multipart upload sessions, collects parallel byte chunks with individual ETags, and produces a final concatenated object with a compound ETag:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি S3-সামঞ্জস্যপূর্ণ স্টোরেজ ইঞ্জিন মাল্টিপার্ট আপলোড সেশন শুরু করে, পৃথক ETag সহ সমান্তরাল পার্ট জমা করে এবং কম্পাউন্ড ETag সহ পূর্ণাঙ্গ অবজেক্ট গঠন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 Multipart Upload lifecycle: initiate, parallel parts, and atomic assembly with compound ETag.',
        bn: 'S3 মাল্টিপার্ট আপলোড জীবনচক্রের TypeScript সিমুলেশন: ইনিশিয়েট, সমান্তরাল পার্ট এবং কম্পাউন্ড ETag সহ অবজেক্ট জোড়া লাগানো।'
      },
      code: `// Simulation of S3 Multipart Upload Lifecycle & Compound ETag Assembly
interface UploadPart {
  partNumber: number;
  data: string;
  eTag: string;
}

interface MultipartSession {
  uploadId: string;
  key: string;
  parts: Map<number, UploadPart>;
  initiatedAt: string;
}

class S3MultipartEngine {
  private sessions: Map<string, MultipartSession> = new Map();
  private completedStore: Map<string, { payload: string; eTag: string }> = new Map();
  private sessionCounter: number = 500;

  // Phase 1: Initiate Multipart Upload
  initiateUpload(key: string): string {
    this.sessionCounter++;
    const uploadId = 'upload_' + this.sessionCounter;
    this.sessions.set(uploadId, {
      uploadId,
      key,
      parts: new Map(),
      initiatedAt: new Date().toISOString()
    });
    return uploadId;
  }

  // Phase 2: Upload Individual Parts concurrently
  uploadPart(uploadId: string, partNumber: number, data: string): { partNumber: number; eTag: string } {
    const session = this.sessions.get(uploadId);
    if (!session) throw new Error('Invalid UploadId');

    // Simulate 32-character hexadecimal MD5 hash for the part
    let hash = 0;
    for (let i = 0; i < data.length; i++) hash = (hash << 5) - hash + data.charCodeAt(i);
    const eTag = 'etag_' + Math.abs(hash).toString(16).padStart(8, '0');

    session.parts.set(partNumber, { partNumber, data, eTag });
    return { partNumber, eTag };
  }

  // Phase 3: Complete Multipart Upload and concatenate parts
  completeUpload(uploadId: string, manifest: { partNumber: number; eTag: string }[]): { key: string; eTag: string } {
    const session = this.sessions.get(uploadId);
    if (!session) throw new Error('Invalid UploadId');

    // Sort manifest by partNumber ascending
    manifest.sort((a, b) => a.partNumber - b.partNumber);

    let concatenatedPayload = '';
    for (const item of manifest) {
      const part = session.parts.get(item.partNumber);
      if (!part || part.eTag !== item.eTag) {
        throw new Error('Checksum mismatch on part ' + item.partNumber);
      }
      concatenatedPayload += part.data;
    }

    // S3 compound ETag format: <hash>-<totalParts>
    const compoundETag = 'compound_' + Math.abs(concatenatedPayload.length * 17).toString(16) + '-' + manifest.length;
    this.completedStore.set(session.key, { payload: concatenatedPayload, eTag: compoundETag });
    this.sessions.delete(uploadId);

    return { key: session.key, eTag: compoundETag };
  }
}

// 1. Initialize Multipart Engine and start session
const s3 = new S3MultipartEngine();
const uploadId = s3.initiateUpload('videos/training-2026.mp4');
console.log('Initiated UploadId: ' + uploadId); // -> upload_501

// 2. Upload 3 parts in parallel (simulating chunks)
const p1 = s3.uploadPart(uploadId, 1, 'Chunk 1 bytes [0-100MB]');
const p2 = s3.uploadPart(uploadId, 2, 'Chunk 2 bytes [100-200MB]');
const p3 = s3.uploadPart(uploadId, 3, 'Chunk 3 bytes [200-300MB]');
console.log('Part 1 uploaded with ETag: ' + p1.eTag); // -> etag_...
console.log('Part 2 uploaded with ETag: ' + p2.eTag); // -> etag_...
console.log('Part 3 uploaded with ETag: ' + p3.eTag); // -> etag_...

// 3. Complete upload assembly
const finalResult = s3.completeUpload(uploadId, [p1, p2, p3]);
console.log('Final Object Key: ' + finalResult.key); // -> videos/training-2026.mp4
console.log('Compound ETag (with part suffix): ' + finalResult.eTag); // -> compound_...-3`
    }
  ],
  exercises: [
    {
      id: 'rel-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the minimum part size allowed for individual parts in an S3 multipart upload (except for the last final part)?',
        bn: 'S3 মাল্টিপার্ট আপলোডে প্রতিটি পৃথক পার্টের জন্য ন্যূনতম কত সাইজ অনুমোদিত (সর্বশেষ সমাপনী পার্ট ব্যতীত)?'
      },
      options: [
        {
          en: '5MB (5 megabytes)',
          bn: '৫ মেগাবাইট (5MB)'
        },
        {
          en: '1KB (1 kilobyte)',
          bn: '১ কিলোবাইট (1KB)'
        },
        {
          en: '1GB (1 gigabyte)',
          bn: '১ গিগাবাইট (1GB)'
        },
        {
          en: '500MB (500 megabytes)',
          bn: '৫০০ মেগাবাইট (500MB)'
        }
      ],
      answer: 0,
      hint: {
        en: 'S3 enforces a 5MB minimum boundary on all parts except the very last one.',
        bn: 'S3 সর্বশেষ ১ টি পার্ট ছাড়া বাকি تمام পার্টের ক্ষেত্রে কমপক্ষে ৫ মেগাবাইটের সাইজ দাবি করে।'
      },
      explanation: {
        en: 'Amazon S3 enforces a 5MB minimum part size for parts 1 through N-1. The final part can be smaller than 5MB.',
        bn: 'Amazon S3 শেষ পার্ট ব্যতীত ১ থেকে N-1 পর্যন্ত অন্যান্য تمام পার্টের জন্য ন্যূনতম ৫ মেগাবাইট আকার নির্ধারণ করে।'
      }
    },
    {
      id: 'rel-ex-2',
      kind: 'mcq',
      question: {
        en: 'How can you visually distinguish an S3 compound ETag produced by a multipart upload from a standard single-part upload ETag?',
        bn: 'একটি মাল্টিপার্ট আপলোড দ্বারা তৈরি S3 কম্পাউন্ড ETag কে কীভাবে সাধারণ সিঙ্গেল-পার্ট আপলোডের ETag থেকে আলাদা করে চিনবেন?'
      },
      options: [
        {
          en: 'Multipart ETags end in a hyphen followed by the number of parts (e.g. "a1b2c3d4-14")',
          bn: 'মাল্টিপার্ট ETag-এর শেষে একটি হাইফেন এবং মোট পার্টের সংখ্যা থাকে (যেমন "a1b2c3d4-14")'
        },
        {
          en: 'Multipart ETags are written in green font characters',
          bn: 'মাল্টিপার্ট ETag সবুজ ফন্টে লেখা থাকে'
        },
        {
          en: 'Multipart ETags are always exactly 100 characters long',
          bn: 'মাল্টিপার্ট ETag সর্বদা ঠিক ১০০ অক্ষরের সমান হয়'
        },
        {
          en: 'Multipart ETags are encrypted with user passwords',
          bn: 'মাল্টিপার্ট ETag ব্যবহারকারীর পাসওয়ার্ড দিয়ে এনক্রিপ্ট করা থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look for the hyphen and the number of parts appended at the end of the hash.',
        bn: 'হ্যাশের শেষে যুক্ত থাকা হাইফেন এবং পার্ট সংখ্যাটি লক্ষ্য করুন।'
      },
      explanation: {
        en: 'A standard upload ETag is a pure 32-character MD5 hash. A multipart upload ETag appends "-N" representing the number of uploaded parts.',
        bn: 'সাধারণ ETag হলো ৩২ অক্ষরের MD5 হ্যাশ। অপরদিকে মাল্টিপার্ট ETag-এর শেষে "-N" দিয়ে মোট পার্টের সংখ্যা নির্দেশিত থাকে।'
      }
    },
    {
      id: 'rel-ex-3',
      kind: 'mcq',
      question: {
        en: 'What unique pricing advantage does Cloudflare R2 provide over Amazon S3 for bandwidth-heavy applications?',
        bn: 'ব্যান্ডউইথ-নিবিড় অ্যাপ্লিকেশনের জন্য Amazon S3-এর তুলনায় Cloudflare R2 কোন অনন্য খরচের সুবিধা দেয়?'
      },
      options: [
        {
          en: 'Zero egress bandwidth fees ($0 per gigabyte downloaded)',
          bn: 'ব্যান্ডউইথ ডাউনলোডের জন্য ০ টাকা এগ্রেস ফি ($০ প্রতি গিগাবাইট)'
        },
        {
          en: 'Storage capacity is completely free up to 1 petabyte',
          bn: '১ পেটাওয়াইট পর্যন্ত স্টোরেজ সম্পূর্ণ বিনামূল্যে থাকে'
        },
        {
          en: 'It does not require any internet connection to read files',
          bn: 'ফাইল পড়তে কোনো ইন্টারনেট সংযোগের প্রয়োজন হয় না'
        },
        {
          en: 'It doubles the physical memory of user laptops',
          bn: 'ব্যবহারকারীর ল্যাপটপের ফিজিক্যাল মেমরি দ্বিগুণ করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Cloudflare R2 eliminates data egress fees.',
        bn: 'Cloudflare R2 ডাটা এগ্রেস ফি সম্পূর্ণভাবে বাতিল করেছে।'
      },
      explanation: {
        en: 'Cloudflare R2 is 100% S3 API-compatible and charges 0 egress fees for bandwidth, making it popular for high-traffic media and AI training.',
        bn: 'Cloudflare R2 সম্পূর্ণ S3 API সামঞ্জস্যপূর্ণ এবং কোনো এগ্রেস ফি কাটে না, যা উচ্চ ট্র্যাফিকের কাজের জন্য বিপুল অর্থ সাশ্রয় করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-object-storage-release',
    title: {
      en: 'Multipart Uploads and Production S3 Ecosystem Quiz',
      bn: 'মাল্টিপার্ট আপলোড এবং প্রোডাকশন S3 ইকোসিস্টেম কুইজ'
    },
    questions: [
      {
        id: 'rel-q1',
        kind: 'mcq',
        question: {
          en: 'What is the maximum number of parts that can be uploaded in a single S3 multipart upload session?',
          bn: 'একটি একক S3 মাল্টিপার্ট আপলোড সেশনে সর্বোচ্চ কতটি পার্ট আপলোড করা যায়?'
        },
        options: [
          {
            en: 'Up to 10000 parts',
            bn: 'সর্বোচ্চ ১০,০০০ টি পার্ট'
          },
          {
            en: 'Exactly 100 parts',
            bn: 'ঠিক ১০০ টি পার্ট'
          },
          {
            en: 'Maximum of 10 parts',
            bn: 'সর্বোচ্চ ১০ টি পার্ট'
          },
          {
            en: 'Unlimited parts without any ceiling',
            bn: 'কোনো সীমা ছাড়া সীমাহীন পার্ট'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 multipart uploads permit part numbers from 1 to 10000.',
          bn: 'S3 মাল্টিপার্ট আপলোডে ১ থেকে ১০,০০০ পর্যন্ত পার্ট নম্বর অনুমোদিত।'
        },
        explanation: {
          en: 'Amazon S3 supports between 1 and 10000 parts per multipart upload. With a maximum 5GB per part, an object can reach up to 5TB.',
          bn: 'Amazon S3 প্রতি মাল্টিপার্ট আপলোডে ১ থেকে ১০০০০ টি পার্ট সমর্থন করে, যা ৫ টেরাবাইট পর্যন্ত ফাইল আপলোডের সুবিধা দেয়।'
        }
      },
      {
        id: 'rel-q2',
        kind: 'mcq',
        question: {
          en: 'What language is the high-performance MinIO S3-compatible server written in?',
          bn: 'উচ্চ-গতির MinIO S3-সামঞ্জস্যপূর্ণ সার্ভারটি কোন প্রোগ্রামিং ভাষায় লেখা?'
        },
        options: [
          {
            en: 'Go (Golang)',
            bn: 'Go (Golang)'
          },
          {
            en: 'PHP',
            bn: 'PHP'
          },
          {
            en: 'Ruby on Rails',
            bn: 'Ruby on Rails'
          },
          {
            en: 'Visual Basic',
            bn: 'Visual Basic'
          }
        ],
        answer: 0,
        hint: {
          en: 'MinIO is written in Go for concurrency and Kubernetes cloud-native performance.',
          bn: 'MinIO কনকারেন্সি ও ক্লাউড-নেটিভ পারফরম্যান্সের জন্য Go ভাষায় তৈরি।'
        },
        explanation: {
          en: 'MinIO is developed in Go, providing high-throughput, low-latency S3-compatible storage designed for Kubernetes and on-premise clusters.',
          bn: 'MinIO গো (Go) ভাষায় লেখা, যা কুবারনেটিস ও প্রাইভেট ক্লাস্টারের জন্য উচ্চ-ক্ষমতাসম্পন্ন S3 স্টোরেজ নিশ্চিত করে।'
        }
      },
      {
        id: 'rel-q3',
        kind: 'mcq',
        question: {
          en: 'What single PUT request file size limit makes multipart upload mandatory for objects exceeding that boundary?',
          bn: 'একটি একক PUT রিকোয়েস্টের কোন ফাইল সাইজ সীমার কারণে তার চেয়ে বড় অবজেক্টের ক্ষেত্রে মাল্টিপার্ট আপলোড ব্যবহার করা বাধ্যতামূলক?'
        },
        options: [
          {
            en: '5GB (objects larger than 5GB cannot be uploaded in a single PUT)',
            bn: '৫ গিগাবাইট (৫ গিগাবাইটের বড় ফাইল একক PUT-এ পাঠানো যায় না)'
          },
          {
            en: '100KB',
            bn: '১০০ কিলোবাইট'
          },
          {
            en: '500GB',
            bn: '৫০০ গিগাবাইট'
          },
          {
            en: '10TB',
            bn: '১০ টেরাবাইট'
          }
        ],
        answer: 0,
        hint: {
          en: 'A single standard HTTP PUT upload is strictly capped at 5 gigabytes.',
          bn: 'একটি সাধারণ একক HTTP PUT আপলোড সর্বোচ্চ ৫ গিগাবাইটে সীমাবদ্ধ।'
        },
        explanation: {
          en: 'A single PUT upload is capped at 5GB by Amazon S3. Any file exceeding 5GB must be uploaded using the multipart upload API.',
          bn: 'Amazon S3 একটি একক PUT আপলোডের সর্বোচ্চ সীমা ৫ গিগাবাইটে বেঁধে দিয়েছে। এর চেয়ে বড় ফাইল পাঠাতে মাল্টিপার্ট আপলোড বাধ্যতামূলক।'
        }
      },
      {
        id: 'rel-q4',
        kind: 'mcq',
        question: {
          en: 'What target latency performance does the S3 Express One Zone storage class provide for AI/ML training workloads?',
          bn: 'এআই/মেশিন লার্নিং ট্রেনিংয়ের কাজের জন্য S3 Express One Zone স্টোরেজ ক্লাস কত লেটেন্সি পারফরম্যান্স প্রদান করে?'
        },
        options: [
          {
            en: 'Single-digit millisecond latency (under 10ms) with high request throughput',
            bn: 'উচ্চ থ্রুপুট সহ এক অঙ্কের মিলি-সেকেন্ড লেটেন্সি (১০ মিলি-সেকেন্ডের কম)'
          },
          {
            en: 'Over 24 hours of buffering delay for every read',
            bn: 'প্রতিটি রিড রিকোয়েস্টে ২৪ ঘণ্টারও বেশি বাফারিং বিলম্ব'
          },
          {
            en: 'Exactly 60 seconds per byte transferred',
            bn: 'প্রতি বাইট স্থানান্তরে ঠিক ৬০ সেকেন্ড সময়'
          },
          {
            en: 'Latency is variable and depends on ocean tides',
            bn: 'লেটেন্সি পরিবর্তনশীল এবং সমুদ্রের জোয়ারের ওপর নির্ভর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Express One Zone delivers consistent single-digit millisecond latency for machine learning.',
          bn: 'Express One Zone মেশিন লার্নিংয়ের জন্য ১০ মিলি-সেকেন্ডের নিচে দ্রুত লেটেন্সি প্রদান করে।'
        },
        explanation: {
          en: 'S3 Express One Zone delivers consistent single-digit millisecond data access speeds, ideal for the most latency-sensitive AI and analytics applications.',
          bn: 'S3 Express One Zone এক অঙ্কের মিলি-সেকেন্ড গতি সরবরাহ করে, যা কৃত্রিম বুদ্ধিমত্তা ও রিয়েল-টাইম ডাটা প্রসেসিংয়ের জন্য আদর্শ।'
        }
      },
      {
        id: 'rel-q5',
        kind: 'mcq',
        question: {
          en: 'What happens to the individual uploaded parts if a network failure occurs during Part 42 of a 100-part multipart upload?',
          bn: '১০০ পার্টের একটি মাল্টিপার্ট আপলোডের ৪২ নম্বর পার্টে ইন্টারনেট বিঘ্ন ঘটলে পূর্ববর্তী আপলোড করা পার্টগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'Parts 1 through 41 remain safely stored in S3; the client only retries uploading Part 42',
            bn: '১ থেকে ৪১ নম্বর পার্ট S3-তে নিরাপদে জমা থাকে; ক্লায়েন্ট কেবল ৪২ নম্বর পার্টটি পুনরায় আপলোড করে'
          },
          {
            en: 'All 41 previously uploaded parts are wiped and the upload must restart from Part 1',
            bn: 'আগের ৪১ টি পার্ট মুছে যায় এবং আবার ১ নম্বর পার্ট থেকে শুরু করতে হয়'
          },
          {
            en: 'The client computer operating system crashes and formats the hard drive',
            bn: 'ক্লায়েন্ট কম্পিউটারের অপারেটিং সিস্টেম ক্র্যাশ করে হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          },
          {
            en: 'S3 automatically bans the IP address for 30 days',
            bn: 'S3 স্বয়ংক্রিয়ভাবে সেই আইপি অ্যাড্রেস ৩০ দিনের জন্য নিষিদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multipart uploads isolate failures to individual parts, saving time and bandwidth.',
          bn: 'মাল্টিপার্ট আপলোডে ব্যর্থতা নির্দিষ্ট পার্টেই সীমাবদ্ধ থাকে, ফলে সময় ও ব্যান্ডউইথ বাঁচে।'
        },
        explanation: {
          en: 'The core resilience of multipart uploads is fault isolation: if any single part fails during transfer, only that specific part needs to be retried.',
          bn: 'মাল্টিপার্ট আপলোডের মূল সুবিধা হলো কোনো একটি পার্ট ব্যর্থ হলে কেবল সেই পার্টটি রিট্রাই করলেই চলে, পুরো ফাইল পুনরায় আপলোড করতে হয় না।'
        }
      }
    ]
  }
};
