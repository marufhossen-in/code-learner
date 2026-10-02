import type { Lesson } from '../../../lib/types';

export const ObjectsAndTheObjectLesson: Lesson = {
  slug: 'objects-and-the-object',
  tech: 'object-storage',
  title: {
    en: 'Object Storage: Anatomy of an Object & REST API',
    bn: 'অবজেক্ট স্টোরেজ: অবজেক্টের গঠন এবং REST API'
  },
  summary: {
    en: 'A beginner overview of cloud object storage: payload bytes, metadata headers, unique keys, immutable write semantics, and S3 HTTP REST API operations.',
    bn: 'ক্লাউড অবজেক্ট স্টোরেজের প্রাথমিক পরিচিতি: পেলোড বাইট, মেটাডাটা হেডার, অনন্য কি, অপরিবর্তনীয় রাইট সেমান্টিকস এবং S3 HTTP REST API অপারেশন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'object-storage-intro',
      text: {
        en: '1. What is Object Storage?',
        bn: '১. অবজেক্ট স্টোরেজ কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you store unstructured data in the cloud, object storage manages your files as discrete units called objects. Instead of organizing data in tree-structured directories like a traditional hard drive, object storage places all data in a flat address space.',
        bn: 'যখন আপনি ক্লাউডে আনস্ট্রাকচার্ড ডাটা সংরক্ষণ করেন, অবজেক্ট স্টোরেজ ফাইলগুলোকে অবজেক্ট নামের স্বাধীন একক হিসেবে পরিচালনা করে। প্রচলিত হার্ড ড্রাইভের মতো ডিরেক্টরি ট্রিতে ডাটা রাখার বদলে অবজেক্ট স্টোরেজ সমস্ত ডাটাকে একটি ফ্ল্যাট অ্যাড্রেস স্পেসে রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To understand where object storage fits in modern system design, engineers compare 3 primary cloud storage paradigms:',
        bn: 'আধুনিক সিস্টেম ডিজাইনে অবজেক্ট স্টোরেজের ভূমিকা বুঝতে ইঞ্জিনিয়াররা ৩ টি প্রধান ক্লাউড স্টোরেজ মডেল তুলনা করেন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Block Storage (SAN / AWS EBS): Data is split into fixed-size raw blocks without metadata. Operating systems format blocks with filesystems (ext4, NTFS). Ideal for databases requiring ultra-low latency and random byte-level writes.',
          bn: '১. ব্লক স্টোরেজ (SAN / AWS EBS): ডাটাকে মেটাডাটা ছাড়া নির্দিষ্ট আকারের ব্লকে ভাগ করা হয়। অপারেটিং সিস্টেম একে ফাইলসিস্টেমে (ext4, NTFS) ফরম্যাট করে। এটি অতি-স্বল্প লেটেন্সি ও ডাটাবেসের জন্য আদর্শ।'
        },
        {
          en: '2. File Storage (NAS / AWS EFS): Data is organized into hierarchical folders and files using network protocols (NFS, SMB). Ideal for shared legacy enterprise file shares and multi-instance content management systems.',
          bn: '২. ফাইল স্টোরেজ (NAS / AWS EFS): নেটওয়ার্ক প্রোটোকল (NFS, SMB) ব্যবহার করে ফাইল ও ফোল্ডারের হায়ারারকিতে ডাটা সাজানো হয়। এটি একাধিক সার্ভারের মাঝে শেয়ার্ড ফাইল ব্যবহারের জন্য তৈরি।'
        },
        {
          en: '3. Object Storage (AWS S3, MinIO, Cloudflare R2): Data is bundled with rich metadata and a unique identifier key into an immutable object accessible worldwide over HTTP REST APIs. It provides massive horizontal scale and 11 nines of durability.',
          bn: '৩. অবজেক্ট স্টোরেজ (AWS S3, MinIO, Cloudflare R2): ডাটাকে বিস্তারিত মেটাডাটা ও একটি অনন্য কি সহ অপরিবর্তনীয় অবজেক্ট হিসেবে HTTP REST API-এর মাধ্যমে উন্মুক্ত করা হয়। এটি অসীম স্কেলেবিলিটি এবং ১১ টি নয় (99.999999999%) স্থায়িত্ব দেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'object-anatomy',
      text: {
        en: '2. The Anatomy of an Object',
        bn: '২. একটি অবজেক্টের গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every discrete object in an S3-compatible storage cluster consists of 3 distinct components bundled together:',
        bn: 'যেকোনো S3-সামঞ্জস্যপূর্ণ স্টোরেজ ক্লাস্টারে প্রতিটি অবজেক্ট ৩ টি প্রধান উপাদানের সমন্বয়ে গঠিত:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Key: A unique string identifier within a bucket (e.g., "photos/2026/beach.jpg"). While slashes resemble directories, the key is strictly 1 single flat string up to 1024 bytes long.',
          bn: '১. কি (Key): বাকেটের মধ্যে অবজেক্টের অনন্য পরিচিতি স্ট্রিং (যেমন "photos/2026/beach.jpg")। স্ল্যাশ দেখতে ফোল্ডারের মতো হলেও এটি মূলত সর্বোচ্চ ১০২৪ বাইটের ১ টিমাত্র ফ্ল্যাট স্ট্রিং।'
        },
        {
          en: '2. Payload (Data): The actual binary byte content of the file. Object size can range from 0 bytes up to a maximum of 5TB for a single object.',
          bn: '২. পেলোড বা ডাটা: ফাইলের প্রকৃত বাইনারি বাইট সামগ্রী। একটি একক অবজেক্টের আকার ০ বাইট থেকে সর্বোচ্চ ৫ টেরাবাইট পর্যন্ত হতে পারে।'
        },
        {
          en: '3. Metadata: Key-value pairs describing the object. System metadata includes Content-Type, Content-Length, Last-Modified, and the ETag (MD5 hash). Custom user-defined metadata is prefixed with x-amz-meta-* (up to 2KB total header size).',
          bn: '৩. মেটাডাটা: অবজেক্টের বর্ণনা প্রদানকারী কি-ভ্যালু জোড়া। সিস্টেম মেটাডাটার মাঝে থাকে Content-Type, Content-Length, Last-Modified এবং ETag (MD5 হ্যাশ)। কাস্টম মেটাডাটাতে x-amz-meta-* প্রিফিক্স ব্যবহৃত হয় (সর্বোচ্চ ২ কিলোবাইট)।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'object-anatomy-diagram',
      title: {
        en: 'Object Anatomy & S3 REST API Operations',
        bn: 'অবজেক্টের গঠন এবং S3 REST API অপারেশন'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Object Storage: Anatomy &amp; S3 REST API</text>' +
          '<!-- Object Container Box -->' +
          '<g transform="translate(40, 60)">' +
            '<rect width="340" height="330" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>' +
            '<text x="170" y="28" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">&#128230; Anatomical Object</text>' +
            '<!-- Key -->' +
            '<rect x="15" y="45" width="310" height="45" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>' +
            '<text x="25" y="65" fill="#38bdf8" font-size="11" font-weight="bold">KEY (Unique Identifier):</text>' +
            '<text x="25" y="80" fill="#cbd5e1" font-size="10" font-family="monospace">"media/videos/intro.mp4"</text>' +
            '<!-- Metadata -->' +
            '<rect x="15" y="100" width="310" height="115" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="25" y="120" fill="#c084fc" font-size="11" font-weight="bold">METADATA (System &amp; Custom):</text>' +
            '<text x="25" y="138" fill="#94a3b8" font-size="9" font-family="monospace">Content-Type: video/mp4</text>' +
            '<text x="25" y="154" fill="#94a3b8" font-size="9" font-family="monospace">Content-Length: 10485760 (10MB)</text>' +
            '<text x="25" y="170" fill="#94a3b8" font-size="9" font-family="monospace">ETag: "1b2cf535f27731c974343645a3985328"</text>' +
            '<text x="25" y="186" fill="#facc15" font-size="9" font-family="monospace">x-amz-meta-uploader: "rahim-dev"</text>' +
            '<text x="25" y="202" fill="#facc15" font-size="9" font-family="monospace">x-amz-meta-env: "production"</text>' +
            '<!-- Payload -->' +
            '<rect x="15" y="225" width="310" height="90" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="25" y="248" fill="#34d399" font-size="11" font-weight="bold">PAYLOAD (Binary Data):</text>' +
            '<text x="25" y="268" fill="#94a3b8" font-size="10">0 bytes to 5TB binary data bytes</text>' +
            '<text x="25" y="286" fill="#94a3b8" font-size="10">Atomic &amp; Immutable byte sequence</text>' +
            '<text x="25" y="304" fill="#34d399" font-size="10">AES-256 encrypted at rest</text>' +
          '</g>' +
          '<!-- Arrow -->' +
          '<path d="M 400 220 L 435 220" stroke="#38bdf8" stroke-width="3"/>' +
          '<!-- REST API Verbs Box -->' +
          '<g transform="translate(450, 60)">' +
            '<rect width="310" height="330" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>' +
            '<text x="155" y="28" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">&#127760; S3 HTTP REST API Verbs</text>' +
            '<!-- PUT -->' +
            '<rect x="15" y="45" width="280" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="25" y="68" fill="#60a5fa" font-size="11" font-weight="bold">PUT /bucket/key</text>' +
            '<text x="25" y="86" fill="#94a3b8" font-size="9">Writes entire object &amp; headers (Atomic)</text>' +
            '<!-- GET -->' +
            '<rect x="15" y="110" width="280" height="55" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="25" y="133" fill="#34d399" font-size="11" font-weight="bold">GET /bucket/key</text>' +
            '<text x="25" y="151" fill="#94a3b8" font-size="9">Downloads payload &amp; headers (Range: bytes=)</text>' +
            '<!-- HEAD -->' +
            '<rect x="15" y="175" width="280" height="55" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1"/>' +
            '<text x="25" y="198" fill="#fde047" font-size="11" font-weight="bold">HEAD /bucket/key</text>' +
            '<text x="25" y="216" fill="#94a3b8" font-size="9">Fetches metadata only (Zero payload transfer)</text>' +
            '<!-- DELETE -->' +
            '<rect x="15" y="240" width="280" height="55" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
            '<text x="25" y="263" fill="#f87171" font-size="11" font-weight="bold">DELETE /bucket/key</text>' +
            '<text x="25" y="281" fill="#94a3b8" font-size="9">Removes object or creates Delete Marker</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'immutability-and-consistency',
      text: {
        en: '3. Immutability and Strong Read-After-Write Consistency',
        bn: '৩. অপরিবর্তনশীলতা এবং স্ট্রং রিড-আফটার-রাইট কনসিস্টেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike traditional filesystems that allow in-place file editing, objects in object storage are strictly immutable. If you change 1 single byte in a 2GB file, you cannot update that byte in place. You must upload a completely new object via PUT, replacing the previous payload entirely.',
        bn: 'প্রচলিত ফাইলসিস্টেমের মতো ফাইলের মাঝে পরিবর্তন করার বদলে অবজেক্ট স্টোরেজের অবজেক্টগুলো সম্পূর্ণরূপে অপরিবর্তনীয়। একটি ২ গিগাবাইট ফাইলের কোনো ১ টিমাত্র বাইট পরিবর্তন করতে হলেও সরাসরি সেই বাইট এডিট করা যায় না। পুরো ফাইলটিকে নতুন করে PUT রিকোয়েস্ট দিয়ে আপলোড করে আগের ফাইল প্রতিস্থাপন করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, cloud object stores offered eventual consistency for overwrite PUT and DELETE requests. However, modern S3 guarantees Strong Read-After-Write Consistency for all applications automatically with zero performance penalty. As soon as a PUT or DELETE request succeeds with an HTTP 200 OK status code, any subsequent GET or LIST operation immediately sees the updated state.',
        bn: 'পূর্বে ক্লাউড অবজেক্ট স্টোরেজ ওভাররাইট PUT এবং DELETE এর ক্ষেত্রে ইভেনচুয়াল কনসিস্টেন্সি দিত। কিন্তু আধুনিক S3 কোনো বাড়তি ফি বা বিলম্ব ছাড়াই স্বয়ংক্রিয়ভাবে স্ট্রং রিড-আফটার-রাইট কনসিস্টেন্সি নিশ্চিত করে। যখনই কোনো PUT বা DELETE রিকোয়েস্ট সফল হয়ে HTTP 200 OK কোড পায়, তাৎক্ষণিকভাবে পরবর্তী যেকোনো GET বা LIST অপারেশনে পরিবর্তিত অবস্থা দৃশ্যমান হয়।'
      }
    },
    {
      type: 'heading',
      id: 'object-simulator',
      text: {
        en: '4. S3 Object Store Engine in TypeScript',
        bn: '৪. TypeScript এ S3 অবজেক্ট স্টোর ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an S3-compatible object storage engine handles PUT operations with metadata, computes MD5 ETags, processes HEAD metadata requests without payload transfer, and supports byte-range GET downloads:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি S3-সামঞ্জস্যপূর্ণ অবজেক্ট স্টোরেজ ইঞ্জিন মেটাডাটা সহ PUT পরিচালনা করে, MD5 ETag হিসাব করে, পেলোড ছাড়াই HEAD মেটাডাটা দেয় এবং বাইট-রেঞ্জ GET সমর্থন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 object storage operations: PUT, GET, HEAD, and byte-range retrieval.',
        bn: 'S3 অবজেক্ট স্টোরেজ অপারেশনের TypeScript সিমুলেশন: PUT, GET, HEAD এবং বাইট-রেঞ্জ ডাউনলোড।'
      },
      code: `// Simulation of S3-Compatible Object Storage Architecture & REST Verbs
interface ObjectMetadata {
  contentType: string;
  contentLength: number;
  eTag: string;
  lastModified: string;
  customHeaders: Record<string, string>;
}

interface StoredObject {
  key: string;
  payload: string; // Simulated binary byte string
  metadata: ObjectMetadata;
}

class S3ObjectStore {
  private objects: Map<string, StoredObject> = new Map();

  // Simple hash to simulate 32-character hexadecimal MD5 ETag
  private computeETag(data: string): string {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = (hash << 5) - hash + data.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return hex + hex + hex + hex; // 32-character simulated ETag
  }

  // PUT: Atomic object creation or full overwrite
  putObject(
    key: string,
    payload: string,
    contentType: string,
    customHeaders: Record<string, string> = {}
  ): { statusCode: number; eTag: string } {
    const eTag = this.computeETag(payload);
    const metadata: ObjectMetadata = {
      contentType,
      contentLength: payload.length,
      eTag,
      lastModified: new Date().toISOString(),
      customHeaders
    };

    this.objects.set(key, { key, payload, metadata });
    return { statusCode: 200, eTag };
  }

  // HEAD: Retrieve metadata headers only (0 payload bandwidth consumed)
  headObject(key: string): { statusCode: number; metadata?: ObjectMetadata } {
    const obj = this.objects.get(key);
    if (!obj) return { statusCode: 404 };
    return { statusCode: 200, metadata: obj.metadata };
  }

  // GET: Retrieve payload and metadata, optionally using byte ranges
  getObject(
    key: string,
    byteRange?: { start: number; end: number }
  ): { statusCode: number; data?: string; contentLength?: number } {
    const obj = this.objects.get(key);
    if (!obj) return { statusCode: 404 };

    if (byteRange) {
      // 206 Partial Content
      const sliced = obj.payload.slice(byteRange.start, byteRange.end + 1);
      return { statusCode: 206, data: sliced, contentLength: sliced.length };
    }

    return { statusCode: 200, data: obj.payload, contentLength: obj.payload.length };
  }
}

// 1. Initialize object store
const store = new S3ObjectStore();

// 2. PUT operation: upload 20-character telemetry payload
const putRes = store.putObject(
  'telemetry/sensor-01.json',
  '{"temp":24.5,"cpu":42}',
  'application/json',
  { 'x-amz-meta-device': 'iot-edge-node' }
);
console.log('PUT Status: ' + putRes.statusCode); // -> 200
console.log('Generated ETag Length: ' + putRes.eTag.length); // -> 32

// 3. HEAD operation: inspect metadata without fetching payload
const headRes = store.headObject('telemetry/sensor-01.json');
console.log('HEAD Status: ' + headRes.statusCode); // -> 200
console.log('Content-Length from HEAD: ' + headRes.metadata?.contentLength); // -> 22

// 4. GET operation with byte range (fetch first 6 bytes: {"temp")
const rangeRes = store.getObject('telemetry/sensor-01.json', { start: 0, end: 5 });
console.log('GET Range Status: ' + rangeRes.statusCode); // -> 206
console.log('Range Payload: ' + rangeRes.data); // -> {"temp`
    }
  ],
  exercises: [
    {
      id: 'obj-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the maximum file size that can be stored in a single object in Amazon S3?',
        bn: 'Amazon S3-তে একটি একক অবজেক্টে সর্বোচ্চ কত আকারের ফাইল সংরক্ষণ করা যায়?'
      },
      options: [
        {
          en: '5TB (5 terabytes)',
          bn: '৫ টেরাবাইট (5TB)'
        },
        {
          en: '5GB (5 gigabytes)',
          bn: '৫ গিগাবাইট (5GB)'
        },
        {
          en: '100MB (100 megabytes)',
          bn: '১০০ মেগাবাইট (100MB)'
        },
        {
          en: 'Unlimited file size for a single PUT request',
          bn: 'একটিমাত্র PUT রিকোয়েস্টে সীমাহীন ফাইল সাইজ'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single S3 object can scale up to 5 terabytes in size.',
        bn: 'একটি একক S3 অবজেক্ট আকারে ৫ টেরাবাইট পর্যন্ত হতে পারে।'
      },
      explanation: {
        en: 'While a single HTTP PUT upload request is capped at 5GB, multipart uploads allow individual S3 objects to reach up to 5TB in total size.',
        bn: 'একটি একক PUT রিকোয়েস্টে ৫ গিগাবাইট পর্যন্ত আপলোড করা গেলেও, মাল্টিপার্ট আপলোডের মাধ্যমে একটি অবজেক্ট সর্বোচ্চ ৫ টেরাবাইট পর্যন্ত হতে পারে।'
      }
    },
    {
      id: 'obj-ex-2',
      kind: 'mcq',
      question: {
        en: 'What HTTP REST verb allows an engineer to inspect an object metadata and headers without downloading any payload bytes?',
        bn: 'কোন HTTP REST ভার্বটি কোনো পেলোড ডাউনলোড না করেই অবজেক্টের মেটাডাটা ও হেডার দেখার সুযোগ দেয়?'
      },
      options: [
        {
          en: 'HEAD',
          bn: 'HEAD'
        },
        {
          en: 'GET',
          bn: 'GET'
        },
        {
          en: 'OPTIONS',
          bn: 'OPTIONS'
        },
        {
          en: 'TRACE',
          bn: 'TRACE'
        }
      ],
      answer: 0,
      hint: {
        en: 'HEAD returns HTTP response headers identical to GET, but without the message body.',
        bn: 'HEAD রিকোয়েস্ট GET-এর মতোই রেসপন্স হেডার দেয় কিন্তু মেসেজ বডি বাদ রাখে।'
      },
      explanation: {
        en: 'The HEAD method retrieves metadata (like Content-Type, Content-Length, and ETag) without transmitting the payload, conserving bandwidth.',
        bn: 'HEAD মেথড পেলোড বাইট ট্রান্সফার না করেই মেটাডাটা সংগ্রহ করে, ফলে ইন্টারনেট ব্যান্ডউইথ সাশ্রয় হয়।'
      }
    },
    {
      id: 'obj-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does object storage handle in-place file editing compared to traditional POSIX filesystems?',
        bn: 'প্রচলিত POSIX ফাইলসিস্টেমের তুলনায় অবজেক্ট স্টোরেজ কীভাবে ফাইলের ভেতর সরাসরি পরিবর্তন পরিচালনা করে?'
      },
      options: [
        {
          en: 'Objects are strictly immutable; any modification requires uploading a completely new replacement object',
          bn: 'অবজেক্টগুলো কঠোরভাবে অপরিবর্তনীয়; যেকোনো পরিবর্তনের জন্য নতুন অবজেক্ট আপলোড করতে হয়'
        },
        {
          en: 'Objects allow seeking to any byte offset and modifying individual bytes in place',
          bn: 'অবজেক্টের যেকোনো বাইট অফসেটে গিয়ে সরাসরি সেই বাইট সংশোধন করা যায়'
        },
        {
          en: 'Object storage automatically merges conflicting edits line by line like Git',
          bn: 'অবজেক্ট স্টোরেজ Git এর মতো লাইন বাই লাইন কনফ্লিক্ট মার্জ করে'
        },
        {
          en: 'Objects convert all binary files into SQL database tables automatically',
          bn: 'অবজেক্ট সমস্ত বাইনারি ফাইলকে স্বয়ংক্রিয়ভাবে SQL ডাটাবেস টেবিলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Objects are immutable units of storage. Partial updates are not supported.',
        bn: 'অবজেক্টগুলো অপরিবর্তনীয় একক। আংশিক পরিবর্তন সমর্থন করা হয় না।'
      },
      explanation: {
        en: 'Objects are immutable. To change any content, the client must perform a new PUT request that replaces the entire object atomically.',
        bn: 'অবজেক্ট সম্পূর্ণ অপরিবর্তনীয়। কোনো কিছু পরিবর্তন করতে হলে একটি নতুন PUT রিকোয়েস্ট দিয়ে পুরো অবজেক্ট প্রতিস্থাপন করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-objects-and-the-object',
    title: {
      en: 'Object Storage and REST Architecture Quiz',
      bn: 'অবজেক্ট স্টোরেজ এবং REST আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'obj-q1',
        kind: 'mcq',
        question: {
          en: 'Which 3 components constitute a discrete object in cloud object storage?',
          bn: 'ক্লাউড অবজেক্ট স্টোরেজে কোন ৩ টি উপাদান একটি স্বতন্ত্র অবজেক্ট গঠন করে?'
        },
        options: [
          {
            en: 'Key, Payload (Data), and Metadata',
            bn: 'কি (Key), পেলোড বা ডাটা (Data), এবং মেটাডাটা (Metadata)'
          },
          {
            en: 'Partition, Sector, and Inode number',
            bn: 'পার্টিশন, সেক্টর, এবং ইনোড নম্বর'
          },
          {
            en: 'Table, Row, and Primary Key column',
            bn: 'টেবিল, রো, এবং প্রাইমারি কি কলাম'
          },
          {
            en: 'IP Address, Port, and Socket descriptor',
            bn: 'আইপি অ্যাড্রেস, পোর্ট, এবং সকেট ডেসক্রিপ্টর'
          }
        ],
        answer: 0,
        hint: {
          en: 'An object bundles an identifier key, binary bytes, and descriptive metadata.',
          bn: 'একটি অবজেক্ট সনাক্তকারী কি, বাইনারি বাইট এবং বর্ণনামূলক মেটাডাটাকে একত্রিত করে।'
        },
        explanation: {
          en: 'Every object bundles a unique identifier Key, binary Payload data, and system/user Metadata into an immutable unit.',
          bn: 'প্রতিটি অবজেক্ট অনন্য কি, বাইনারি পেলোড এবং মেটাডাটাকে একটি একক অপরিবর্তনীয় প্যাকেজ হিসেবে ধারণ করে।'
        }
      },
      {
        id: 'obj-q2',
        kind: 'mcq',
        question: {
          en: 'What prefix must custom user-defined metadata headers have in Amazon S3 REST API requests?',
          bn: 'Amazon S3 REST API রিকোয়েস্টে কাস্টম মেটাডাটা হেডারের শুরুতে কোন প্রিফিক্স থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'x-amz-meta-*',
            bn: 'x-amz-meta-*'
          },
          {
            en: 'user-data-*',
            bn: 'user-data-*'
          },
          {
            en: 's3-header-*',
            bn: 's3-header-*'
          },
          {
            en: 'aws-object-*',
            bn: 'aws-object-*'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 user metadata headers begin with "x-amz-meta-".',
          bn: 'S3 ইউজার মেটাডাটা হেডারগুলো "x-amz-meta-" দিয়ে শুরু হয়।'
        },
        explanation: {
          en: 'Custom metadata keys must be prefixed with "x-amz-meta-". S3 stores them case-insensitively and returns them during HEAD and GET requests.',
          bn: 'কাস্টম মেটাডাটা কি অবশ্যই "x-amz-meta-" দিয়ে শুরু হতে হবে। S3 এগুলো সংরক্ষণ করে এবং HEAD বা GET রিকোয়েস্টে ফিরিয়ে দেয়।'
        }
      },
      {
        id: 'obj-q3',
        kind: 'mcq',
        question: {
          en: 'What does the ETag header typically represent for a single-part uploaded object in Amazon S3?',
          bn: 'Amazon S3-তে সিঙ্গেল-পার্ট আপলোড করা অবজেক্টের ক্ষেত্রে ETag হেডার সাধারণত কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The MD5 cryptographic hash digest of the object content bytes',
            bn: 'অবজেক্টের বিষয়বস্তু বা বাইটের ক্রিপ্টোগ্রাফিক MD5 হ্যাশ ডাইজেস্ট'
          },
          {
            en: 'The internal serial number of the storage server hard drive',
            bn: 'স্টোরেজ সার্ভার হার্ড ড্রাইভের অভ্যন্তরীণ সিরিয়াল নম্বর'
          },
          {
            en: 'The exact billing cost of the object in US dollars',
            bn: 'ইউএস ডলারে অবজেক্টটির সঠিক বিলিং খরচ'
          },
          {
            en: 'The geographical latitude and longitude of the datacenter',
            bn: 'ডাটা সেন্টারের ভৌগোলিক অক্ষাংশ ও দ্রাঘিমাংশ'
          }
        ],
        answer: 0,
        hint: {
          en: 'ETag is an entity tag representing the MD5 checksum of the data.',
          bn: 'ETag হলো একটি এনটিটি ট্যাগ যা ডাটার MD5 চেকসাম নির্দেশ করে।'
        },
        explanation: {
          en: 'For standard single-part uploads, the ETag header is the 32-character MD5 hash of the object payload, used for cache validation and integrity checking.',
          bn: 'সাধারণ সিঙ্গেল-পার্ট আপলোডে ETag হলো ডাটার ৩২ অক্ষরের MD5 হ্যাশ, যা ক্যাশিং ও ফাইলের অক্ষত অবস্থা যাচাইয়ে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'obj-q4',
        kind: 'mcq',
        question: {
          en: 'Which HTTP status code is returned when downloading an object using a byte range header (e.g. Range: bytes=0-500)?',
          bn: 'বাইট রেঞ্জ হেডার (যেমন Range: bytes=0-500) দিয়ে অবজেক্ট ডাউনলোড করার সময় কোন HTTP স্ট্যাটাস কোড প্রদান করা হয়?'
        },
        options: [
          {
            en: '206 Partial Content',
            bn: '206 Partial Content'
          },
          {
            en: '200 OK',
            bn: '200 OK'
          },
          {
            en: '304 Not Modified',
            bn: '304 Not Modified'
          },
          {
            en: '204 No Content',
            bn: '204 No Content'
          }
        ],
        answer: 0,
        hint: {
          en: 'HTTP status 206 signifies that the server is serving partial content as requested.',
          bn: 'HTTP স্ট্যাটাস 206 নির্দেশ করে যে সার্ভার অনুরোধকৃত আংশিক কনটেন্ট পরিবেশন করছে।'
        },
        explanation: {
          en: 'Byte-range requests return HTTP 206 Partial Content. This enables media streaming players to buffer video chunks and allows resumable downloads.',
          bn: 'বাইট-রেঞ্জ রিকোয়েস্টে HTTP 206 Partial Content কোড ফেরত আসে, যা ভিডিও স্ট্রিমিং ও ডাউনলোড পুনরায় চালু করার সুযোগ দেয়।'
        }
      },
      {
        id: 'obj-q5',
        kind: 'mcq',
        question: {
          en: 'What consistency model does modern Amazon S3 provide for PUT and DELETE operations?',
          bn: 'আধুনিক Amazon S3 এর PUT এবং DELETE অপারেশনের জন্য কোন কনসিস্টেন্সি মডেল প্রদান করে?'
        },
        options: [
          {
            en: 'Strong Read-After-Write Consistency across all operations immediately',
            bn: 'তাৎক্ষণিকভাবে সমস্ত অপারেশনের জন্য স্ট্রং রিড-আফটার-রাইট কনসিস্টেন্সি'
          },
          {
            en: 'Eventual consistency that requires 24 hours of delay before reads succeed',
            bn: 'ইভেনচুয়াল কনসিস্টেন্সি যা সফলভাবে পড়তে ২৪ ঘণ্টার বিলম্ব দাবি করে'
          },
          {
            en: 'No consistency guarantees for overwritten objects',
            bn: 'ওভাররাইট করা অবজেক্টের জন্য কোনো কনসিস্টেন্সি নিশ্চয়তা নেই'
          },
          {
            en: 'Read-only consistency strictly limited to weekends',
            bn: 'রিড-অনলি কনসিস্টেন্সি যা কেবল সাপ্তাহিক ছুটির দিনে সীমাবদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern S3 provides strong consistency out of the box with zero delay.',
          bn: 'আধুনিক S3 কোনো বিলম্ব ছাড়াই সরাসরি স্ট্রং কনসিস্টেন্সি প্রদান করে।'
        },
        explanation: {
          en: 'Amazon S3 delivers strong read-after-write consistency for PUT and DELETE requests of objects in all regions with zero additional configuration.',
          bn: 'Amazon S3 সমস্ত রিজিয়নে কোনো বাড়তি কনফিগারেশন ছাড়াই PUT এবং DELETE-এর ক্ষেত্রে শক্তিশালী ধারাবাহিকতা (Strong Consistency) নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'buckets-and-the-bucket',
    title: {
      en: 'Buckets: Namespaces, Regions & Access Policies',
      bn: 'বাকেট: নেমস্পেস, রিজিয়ন এবং অ্যাক্সেস পলিসি'
    }
  }
};
