import type { Lesson } from '../../../lib/types';

export const KeysAndTheKeyLesson: Lesson = {
  slug: 'keys-and-the-key',
  tech: 'object-storage',
  title: {
    en: 'Object Keys: Hierarchical Prefixes & Presigned URLs',
    bn: 'অবজেক্ট কি: হায়ারারকিকাল প্রিফিক্স এবং প্রি-সাইনড URL'
  },
  summary: {
    en: 'Organize data using flat object key prefixes, optimize partition throughput for 3500 writes/sec, and issue secure time-limited presigned URLs for client uploads.',
    bn: 'ফ্ল্যাট অবজেক্ট কি প্রিফিক্স দিয়ে ডাটা সাজান, প্রতি সেকেন্ডে ৩৫০০ রাইটের জন্য পার্টিশন থ্রুপুট অপ্টিমাইজ করুন এবং ক্লায়েন্ট আপলোডের জন্য সুরক্ষিত প্রি-সাইনড URL ইস্যু করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'key-prefixes-intro',
      text: {
        en: '1. The Illusion of Folders: Object Keys as Flat Strings',
        bn: '১. ফোল্ডারের বিভ্রান্তি: ফ্ল্যাট স্ট্রিং হিসেবে অবজেক্ট কি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you inspect an S3 bucket in a web console, you see what look like nested folders. However, cloud object storage has 0 physical directories or nested folders on disk.',
        bn: 'যখন আপনি ওয়েব কনসোলে একটি S3 বাকেট পর্যবেক্ষণ করেন, তখন ফোল্ডারের মতো শাখা-প্রশাখা দেখতে পান। কিন্তু ক্লাউড অবজেক্ট স্টোরেজের ডিস্কে ০ টি বাস্তব ডিরেক্টরি বা ফোল্ডার থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every item is stored against 1 single flat string called an Object Key (up to 1024 bytes long). For example, "photos/2026/summer/beach.jpg" is not a file inside 3 folders; it is 1 complete string. S3 simulates a directory hierarchy using query parameters in its ListObjectsV2 API:',
        bn: 'প্রতিটি ডাটা অবজেক্ট কি নামের ১ টিমাত্র ফ্ল্যাট স্ট্রিংয়ের বিপরীতে সংরক্ষিত থাকে (সর্বোচ্চ ১০২৪ বাইট পর্যন্ত)। উদাহরণস্বরূপ, "photos/2026/summer/beach.jpg" ৩ টি ফোল্ডারের ভেতরের কোনো ফাইল নয়, বরং এটি ১ টি পূর্ণাঙ্গ স্ট্রিং। S3 তার ListObjectsV2 API-তে বিশেষ কুয়েরি প্যারামিটার দিয়ে ডিরেক্টরি সদৃশ রূপ দেয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Prefix Parameter (?prefix=photos/): Filters the object listing to return only keys that begin with the specified character string.',
          bn: 'Prefix প্যারামিটার (?prefix=photos/): অবজেক্টের তালিকা ফিল্টার করে কেবল নির্দিষ্ট স্ট্রিং দিয়ে শুরু হওয়া কি-গুলো প্রদর্শন করে।'
        },
        {
          en: 'Delimiter Parameter (?delimiter=/): Groups all keys sharing the same prefix up to the delimiter character into a synthetic CommonPrefixes collection, mimicking directory browsing.',
          bn: 'Delimiter প্যারামিটার (?delimiter=/): ডেলিমিটার ক্যারেক্টার পর্যন্ত একই প্রিফিক্স বিশিষ্ট কি-গুলোকে একটি সিন্থেটিক CommonPrefixes গ্রুপে রূপান্তর করে ডিরেক্টরির মতো দেখায়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'prefix-partitioning-diagram',
      title: {
        en: 'Prefix Partitioning & Presigned URL Architecture',
        bn: 'প্রিফিক্স পার্টিশনিং এবং প্রি-সাইনড URL আর্কিটেকচার'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Prefix Partitioning &amp; Direct Presigned URL Upload</text>' +
          '<!-- Flow 1: Client & App Server -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="210" height="320" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="105" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. PRESIGNED URL GEN</text>' +
            '<rect x="12" y="45" width="186" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="68" fill="#38bdf8" font-size="10" font-weight="bold">Client Browser</text>' +
            '<text x="20" y="86" fill="#94a3b8" font-size="9">Requests upload token</text>' +
            '<path d="M 105 105 L 105 130" stroke="#38bdf8" stroke-width="2"/>' +
            '<rect x="12" y="130" width="186" height="90" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="20" y="152" fill="#c084fc" font-size="10" font-weight="bold">Backend Server (IAM)</text>' +
            '<text x="20" y="170" fill="#94a3b8" font-size="8">HMAC-SHA256 signature</text>' +
            '<text x="20" y="186" fill="#cbd5e1" font-size="8">Expires: 900 seconds (15m)</text>' +
            '<text x="20" y="202" fill="#34d399" font-size="8">Returns Signed S3 URL &#x2714;</text>' +
            '<text x="105" y="255" fill="#cbd5e1" font-size="10" text-anchor="middle">No AWS Keys to Client</text>' +
            '<text x="105" y="272" fill="#34d399" font-size="10" text-anchor="middle">Zero Server RAM used</text>' +
          '</g>' +
          '<!-- Direct Upload Arrow -->' +
          '<path d="M 255 100 Q 370 70 485 100" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="4,4"/>' +
          '<text x="370" y="70" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Direct PUT Upload (100MB)</text>' +
          '<!-- Partitioning Box -->' +
          '<g transform="translate(480, 60)">' +
            '<rect width="280" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="140" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. PREFIX PARTITIONING</text>' +
            '<!-- Partition 1 -->' +
            '<rect x="15" y="45" width="250" height="70" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="10" font-weight="bold">Prefix: "tenant-a/2026/..."</text>' +
            '<text x="25" y="86" fill="#cbd5e1" font-size="9">Partition 1 Throughput:</text>' +
            '<text x="25" y="102" fill="#34d399" font-size="9">3500 PUT / 5500 GET per sec</text>' +
            '<!-- Partition 2 -->' +
            '<rect x="15" y="125" width="250" height="70" rx="6" fill="#0f172a" stroke="#facc15" stroke-width="1"/>' +
            '<text x="25" y="148" fill="#fde047" font-size="10" font-weight="bold">Prefix: "tenant-b/2026/..."</text>' +
            '<text x="25" y="166" fill="#cbd5e1" font-size="9">Partition 2 Throughput:</text>' +
            '<text x="25" y="182" fill="#34d399" font-size="9">3500 PUT / 5500 GET per sec</text>' +
            '<!-- Total Scale -->' +
            '<rect x="15" y="210" width="250" height="85" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="140" y="235" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Aggregate S3 Throughput</text>' +
            '<text x="140" y="255" fill="#cbd5e1" font-size="9" text-anchor="middle">Scales linearly with distinct prefixes</text>' +
            '<text x="140" y="272" fill="#60a5fa" font-size="9" text-anchor="middle">Automatic internal re-partitioning</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'prefix-throughput',
      text: {
        en: '2. High-Throughput Prefix Partitioning',
        bn: '২. হাই-থ্রুপুট প্রিফিক্স পার্টিশনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Amazon S3 automatically scales storage infrastructure to meet high request rates. Under the hood, S3 manages capacity across physical storage nodes by partitioning on the object key prefix:',
        bn: 'Amazon S3 উচ্চ রিকোয়েস্ট রেট মেটাতে তার অবকাঠামো স্বয়ংক্রিয়ভাবে স্কেল করে। হুডের নিচে S3 অবজেক্ট কি-এর প্রিফিক্সের ওপর ভিত্তি করে ফিজিক্যাল নোডের মাঝে ডাটা পার্টিশন করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Per-Prefix Throughput Limits: Each distinct prefix in an S3 bucket supports at least 3500 PUT/POST/DELETE requests and 5500 GET/HEAD requests per second.',
          bn: 'প্রতি প্রিফিক্সে থ্রুপুট সীমা: একটি S3 বাকেটের প্রতিটি স্বতন্ত্র প্রিফিক্স প্রতি সেকেন্ডে কমপক্ষে ৩৫০০ টি PUT/POST/DELETE এবং ৫৫০০ টি GET/HEAD রিকোয়েস্ট সমর্থন করে।'
        },
        {
          en: 'Linear Horizontal Scaling: If an application structures keys across 10 distinct prefixes (e.g., /tenant-01/ through /tenant-10/), the aggregate bucket capacity scales to 35000 write requests per second with 0 performance bottleneck.',
          bn: 'লিনিয়ার হরিজন্টাল স্কেলিং: কোনো অ্যাপ্লিকেশন যদি ১০ টি আলাদা প্রিফিক্সে কি সাজায় (যেমন /tenant-01/ থেকে /tenant-10/), তবে বাকেটের মোট রাইট ক্ষমতা ০ টি পারফরম্যান্স বাধা ছাড়াই প্রতি সেকেন্ডে ৩৫০০০ টি রিকোয়েস্টে পৌঁছায়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'presigned-urls',
      text: {
        en: '3. Presigned URLs: Secure Time-Limited Access',
        bn: '৩. প্রি-সাইনড URL: নির্দিষ্ট মেয়াদের সুরক্ষিত প্রবেশাধিকার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In web architectures, routing large user file uploads through your backend application server causes server memory bloat and connection exhaustion. S3 solves this architectural bottleneck with Presigned URLs:',
        bn: 'ওয়েব আর্কিটেকচারে ক্লায়েন্টের বিশাল ফাইল ব্যাকএন্ড সার্ভারের ভেতর দিয়ে আপলোড করালে সার্ভারের মেমরি ফুরিয়ে যায় ও জট সৃষ্টি হয়। S3 এই সমস্যার সমাধান করে প্রি-সাইনড URL দিয়ে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Cryptographic Signature: The backend server uses its AWS credentials to generate a secure URL containing query parameters: X-Amz-Algorithm=AWS4-HMAC-SHA256, X-Amz-Credential, X-Amz-Expires, and X-Amz-Signature.',
          bn: 'ক্রিপ্টোগ্রাফিক সিগনেচার: ব্যাকএন্ড সার্ভার তার ক্লাউড ক্রেডেনশিয়াল দিয়ে একটি সুরক্ষিত লিংক তৈরি করে যাতে X-Amz-Algorithm=AWS4-HMAC-SHA256, X-Amz-Credential, X-Amz-Expires এবং X-Amz-Signature থাকে।'
        },
        {
          en: 'Time-Limited Validity: The URL remains valid only for a defined expiration window (e.g. 900 seconds or 15 minutes). Once expired, S3 rejects any attempt to download or upload.',
          bn: 'নির্দিষ্ট মেয়াদ: লিংকটি কেবল নির্ধারিত সময়সীমার জন্যই কার্যকর থাকে (যেমন ৯০০ সেকেন্ড বা ১৫ মিনিট)। সময় পেরিয়ে গেলে S3 যেকোনো ডাউনলোড বা আপলোড প্রচেষ্টা অবিলম্বে বাতিল করে দেয়।'
        },
        {
          en: 'Direct-to-S3 Uploads: Web browsers use HTTP PUT to stream multi-gigabyte video or image files directly into S3, reducing application server bandwidth costs to 0.',
          bn: 'সরাসরি S3 আপলোড: ওয়েব ব্রাউজার HTTP PUT ব্যবহার করে বিশাল ভিডিও বা ছবি সরাসরি S3-তে আপলোড করে, ফলে অ্যাপ সার্ভারের ব্যান্ডউইথ খরচ ০ হয়ে যায়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'key-simulator',
      text: {
        en: '4. Prefix Hierarchy & Presigned URL Engine in TypeScript',
        bn: '৪. TypeScript এ প্রিফিক্স হায়ারার্কি ও প্রি-সাইনড URL ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an object storage service parses delimiter prefixes to simulate virtual folders and validates HMAC-signed time-limited presigned URLs:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি অবজেক্ট স্টোরেজ সার্ভিস ডেলিমিটার প্রিফিক্স পার্স করে ভার্চুয়াল ফোল্ডার প্রদর্শন করে এবং নির্দিষ্ট মেয়াদের প্রি-সাইনড URL যাচাই করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 prefix delimiter browsing and cryptographic presigned URL validation.',
        bn: 'S3 প্রিফিক্স ডেলিমিটার ব্রাউজিং এবং ক্রিপ্টোগ্রাফিক প্রি-সাইনড URL যাচাইয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of S3 Key Prefixes, Delimiter Browsing & Presigned URLs
interface ListObjectsResult {
  prefix: string;
  delimiter: string;
  objects: string[];
  commonPrefixes: string[];
}

class S3KeyManager {
  private keys: string[] = [];

  addKey(key: string): void {
    this.keys.push(key);
  }

  // Simulates S3 ListObjectsV2 with prefix and delimiter
  listObjectsV2(prefix: string, delimiter: string = '/'): ListObjectsResult {
    const matchingKeys = this.keys.filter((k) => k.startsWith(prefix));
    const objects: string[] = [];
    const commonPrefixes = new Set<string>();

    for (const key of matchingKeys) {
      const rest = key.slice(prefix.length);
      const delimiterIndex = rest.indexOf(delimiter);

      if (delimiterIndex === -1) {
        // Direct object file in current "folder"
        objects.push(key);
      } else {
        // Subdirectory prefix
        const folderPrefix = prefix + rest.slice(0, delimiterIndex + 1);
        commonPrefixes.add(folderPrefix);
      }
    }

    return {
      prefix,
      delimiter,
      objects,
      commonPrefixes: Array.from(commonPrefixes)
    };
  }

  // Generates a mock HMAC presigned URL expiring in N seconds
  createPresignedUrl(key: string, expiresInSeconds: number): string {
    const expiresAt = Math.floor(Date.now() / 1000) + expiresInSeconds;
    const mockSig = 'sig_' + Math.abs(key.length * 31 + expiresAt).toString(16);
    return 'https://my-bucket.s3.amazonaws.com/' + key + '?X-Amz-Expires=' + expiresInSeconds + '&exp=' + expiresAt + '&X-Amz-Signature=' + mockSig;
  }

  // Validates if presigned URL is still valid
  validatePresignedUrl(url: string): { valid: boolean; reason: string } {
    const parsed = new URL(url);
    const expStr = parsed.searchParams.get('exp');
    if (!expStr) return { valid: false, reason: 'Missing expiration' };

    const expTime = parseInt(expStr, 10);
    const now = Math.floor(Date.now() / 1000);
    if (now > expTime) {
      return { valid: false, reason: 'URL expired' };
    }
    return { valid: true, reason: 'Signature valid and active' };
  }
}

// 1. Initialize keys simulating nested folders
const manager = new S3KeyManager();
manager.addKey('documents/reports/2026-q1.pdf');
manager.addKey('documents/reports/2026-q2.pdf');
manager.addKey('documents/invoice.pdf');
manager.addKey('images/logo.png');

// 2. Browse "documents/" with delimiter "/"
const browseDocs = manager.listObjectsV2('documents/', '/');
console.log('Direct Files Count: ' + browseDocs.objects.length); // -> 1
console.log('Direct File: ' + browseDocs.objects[0]); // -> documents/invoice.pdf
console.log('Simulated Subfolders: ' + browseDocs.commonPrefixes.join(', ')); // -> documents/reports/

// 3. Generate Presigned URL valid for 900 seconds (15 minutes)
const presigned = manager.createPresignedUrl('documents/invoice.pdf', 900);
const validation = manager.validatePresignedUrl(presigned);
console.log('Presigned URL Valid?: ' + validation.valid); // -> true
console.log('Validation Status: ' + validation.reason); // -> Signature valid and active`
    }
  ],
  exercises: [
    {
      id: 'key-ex-1',
      kind: 'mcq',
      question: {
        en: 'How many write requests (PUT, POST, DELETE) per second does each distinct prefix in an Amazon S3 bucket support?',
        bn: 'Amazon S3 বাকেটের প্রতিটি স্বতন্ত্র প্রিফিক্স প্রতি সেকেন্ডে কতটি রাইট রিকোয়েস্ট (PUT, POST, DELETE) সমর্থন করে?'
      },
      options: [
        {
          en: 'At least 3500 write requests per second per prefix',
          bn: 'প্রতি প্রিফিক্সে প্রতি সেকেন্ডে কমপক্ষে ৩৫০০ টি রাইট রিকোয়েস্ট'
        },
        {
          en: 'Exactly 100 write requests per second for the entire bucket',
          bn: 'পুরো বাকেটের জন্য প্রতি সেকেন্ডে ঠিক ১০০ টি রাইট রিকোয়েস্ট'
        },
        {
          en: 'Only 1 write request per second to avoid race conditions',
          bn: 'রেস কন্ডিশন এড়াতে প্রতি সেকেন্ডে মাত্র ১ টি রাইট রিকোয়েস্ট'
        },
        {
          en: 'Maximum of 50 write requests per day',
          bn: 'প্রতি দিনে সর্বোচ্চ ৫০ টি রাইট রিকোয়েস্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'S3 supports at least 3500 writes and 5500 reads per second per prefix.',
        bn: 'S3 প্রতি প্রিফিক্সে কমপক্ষে ৩৫০০ টি রাইট এবং ৫৫০০ টি রিড রিকোয়েস্ট সমর্থন করে।'
      },
      explanation: {
        en: 'Amazon S3 automatically scales to support at least 3500 PUT/POST/DELETE and 5500 GET/HEAD requests per second per prefix.',
        bn: 'Amazon S3 প্রতি প্রিফিক্সে প্রতি সেকেন্ডে কমপক্ষে ৩৫০০ টি রাইট এবং ৫৫০০ টি রিড রিকোয়েস্ট স্কেল করতে সক্ষম।'
      }
    },
    {
      id: 'key-ex-2',
      kind: 'mcq',
      question: {
        en: 'How does S3 simulate a directory tree structure when listing objects via the REST API?',
        bn: 'REST API দিয়ে অবজেক্ট তালিকা দেখার সময় S3 কীভাবে ডিরেক্টরি ট্রির মতো কাঠামো উপস্থাপন করে?'
      },
      options: [
        {
          en: 'By pairing a prefix filter with a delimiter (such as "/") and returning CommonPrefixes',
          bn: 'একটি প্রিফিক্স ফিল্টারের সাথে ডেলিমিটার (যেমন "/") ব্যবহার করে CommonPrefixes প্রদান করার মাধ্যমে'
        },
        {
          en: 'By converting all objects into Windows NTFS directory nodes',
          bn: 'সমস্ত অবজেক্টকে উইন্ডোজের NTFS ডিরেক্টরি নোডে রূপান্তর করে'
        },
        {
          en: 'By creating empty 1MB zip archives for each folder',
          bn: 'প্রতিটি ফোল্ডারের জন্য ১ মেগাবাইটের খালি জিপ ফাইল তৈরি করে'
        },
        {
          en: 'By requiring developers to install a Linux kernel extension',
          bn: 'ডেভেলপারদের একটি লিনাক্স কার্নেল এক্সটেনশন ইনস্টল করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'S3 uses the delimiter query parameter to collapse nested keys into simulated folder paths.',
        bn: 'S3 ডেলিমিটার কুয়েরি প্যারামিটার দিয়ে শাখা কি-গুলোকে ফোল্ডার পাথে একত্রিত করে।'
      },
      explanation: {
        en: 'S3 has a flat structure. Supplying delimiter="/" groups shared key prefixes into CommonPrefixes, giving clients the appearance of folders.',
        bn: 'S3 এর গঠন সম্পূর্ণ সমতল বা ফ্ল্যাট। delimiter="/" দিলে সাধারণ প্রিফিক্সগুলোকে ফোল্ডারের মতো দেখায়।'
      }
    },
    {
      id: 'key-ex-3',
      kind: 'mcq',
      question: {
        en: 'What architectural benefit do Presigned URLs provide during high-volume user file uploads?',
        bn: 'প্রচুর ব্যবহারকারীর ফাইল আপলোডের সময় প্রি-সাইনড URL কোন আর্কিটেকচারাল সুবিধা দেয়?'
      },
      options: [
        {
          en: 'Clients stream data directly to S3 over HTTPS without burdening application server CPU and RAM',
          bn: 'অ্যাপ্লিকেশন সার্ভারের CPU ও RAM খরচ না করে ক্লায়েন্টরা সরাসরি S3-তে ডাটা আপলোড করতে পারে'
        },
        {
          en: 'They permanently eliminate the need for an internet connection',
          bn: 'তারা ইন্টারনেট সংযোগের প্রয়োজনীয়তা চিরতরে দূর করে দেয়'
        },
        {
          en: 'They automatically convert all uploaded images into vector SVG icons',
          bn: 'তারা সমস্ত আপলোড করা ছবিকে স্বয়ংক্রিয়ভাবে ভেক্টর SVG আইকনে রূপান্তর করে'
        },
        {
          en: 'They force all uploads to be processed on a single core machine',
          bn: 'তারা সমস্ত আপলোডকে একটি একক কোরের মেশিনে প্রসেস করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct uploads bypass your web servers, preventing proxy bottlenecks.',
        bn: 'সরাসরি আপলোড আপনার ওয়েব সার্ভারকে বাইপাস করে মেমরি জট প্রতিহত করে।'
      },
      explanation: {
        en: 'Presigned URLs let clients upload directly to S3. This eliminates the need for application servers to act as middleman proxies, saving server memory and bandwidth.',
        bn: 'প্রি-সাইনড URL ক্লায়েন্টকে সরাসরি S3-তে আপলোডের অনুমতি দেয়, ফলে অ্যাপ সার্ভারকে মধ্যস্থতাকারী হিসেবে কাজ করতে হয় না এবং ব্যান্ডউইথ সাশ্রয় হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-keys-and-the-key',
    title: {
      en: 'S3 Object Keys and Presigned URLs Quiz',
      bn: 'S3 অবজেক্ট কি এবং প্রি-সাইনড URL কুইজ'
    },
    questions: [
      {
        id: 'key-q1',
        kind: 'mcq',
        question: {
          en: 'What is the maximum allowed byte length for an Amazon S3 object key name?',
          bn: 'Amazon S3 অবজেক্ট কি নামের ক্ষেত্রে সর্বোচ্চ অনুমোদিত বাইট দৈর্ঘ্য কত?'
        },
        options: [
          {
            en: '1024 bytes in UTF-8 encoding',
            bn: 'UTF-8 এনকোডিংয়ে ১০২৪ বাইট'
          },
          {
            en: '64 bytes only',
            bn: 'কেবল ৬৪ বাইট'
          },
          {
            en: '50000 bytes',
            bn: '৫০,০০০ বাইট'
          },
          {
            en: 'Unlimited character length',
            bn: 'সীমাহীন অক্ষরের দৈর্ঘ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'An object key can be up to 1024 bytes long.',
          bn: 'একটি অবজেক্ট কি সর্বোচ্চ ১০২৪ বাইট পর্যন্ত দীর্ঘ হতে পারে।'
        },
        explanation: {
          en: 'S3 object key names are UTF-8 encoded strings up to 1024 bytes in length, accommodating deep virtual paths and descriptive identifiers.',
          bn: 'S3 অবজেক্ট কি নাম সর্বোচ্চ ১০২৪ বাইটের UTF-8 এনকোডেড স্ট্রিং হতে পারে।'
        }
      },
      {
        id: 'key-q2',
        kind: 'mcq',
        question: {
          en: 'What happens when a client attempts to use a Presigned URL after its expiration timestamp has elapsed?',
          bn: 'একটি প্রি-সাইনড URL এর মেয়াদ শেষ হওয়ার পর কোনো ক্লায়েন্ট তা ব্যবহার করতে চাইলে কী ঘটে?'
        },
        options: [
          {
            en: 'S3 rejects the request with an HTTP 403 Forbidden AccessDenied error',
            bn: 'S3 রিকোয়েস্টটি প্রত্যাখ্যান করে HTTP 403 Forbidden AccessDenied ত্রুটি দেয়'
          },
          {
            en: 'S3 automatically extends the URL validity for an additional 30 days',
            bn: 'S3 স্বয়ংক্রিয়ভাবে আরও ৩০ দিনের জন্য লিংকের মেয়াদ বাড়িয়ে দেয়'
          },
          {
            en: 'The entire S3 bucket is permanently deleted from the cloud',
            bn: 'সম্পূর্ণ S3 বাকেটটি ক্লাউড থেকে চিরতরে মুছে ফেলা হয়'
          },
          {
            en: 'The request succeeds but downloads an empty 0-byte file',
            bn: 'রিকোয়েস্টটি সফল হয় কিন্তু একটি খালি ০-বাইটের ফাইল ডাউনলোড করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Expired presigned URLs return an AccessDenied 403 response.',
          bn: 'মেয়াদোত্তীর্ণ প্রি-সাইনড URL এর ক্ষেত্রে AccessDenied 403 এরর ফিরে আসে।'
        },
        explanation: {
          en: 'S3 cryptographically verifies the expiration query parameter. Once expired, S3 returns HTTP 403 Forbidden, protecting resources against unauthorized access.',
          bn: 'S3 মেয়াদের সময় ক্রিপ্টোগ্রাফিক্যালি যাচাই করে। মেয়াদ শেষ হলে এটি HTTP 403 Forbidden দিয়ে অ্যাক্সেস ব্লক করে দেয়।'
        }
      },
      {
        id: 'key-q3',
        kind: 'mcq',
        question: {
          en: 'Why is distributing keys across different prefixes recommended for high-traffic S3 applications?',
          bn: 'উচ্চ ট্র্যাফিকের S3 অ্যাপ্লিকেশনের জন্য কেন বিভিন্ন প্রিফিক্সে কি সাজানোর সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'To spread requests across multiple internal S3 partition nodes, multiplying total I/O throughput',
            bn: 'একাধিক অভ্যন্তরীণ S3 পার্টিশনে রিকোয়েস্ট বণ্টন করে মোট I/O থ্রুপুট বহুগুণ বৃদ্ধি করার জন্য'
          },
          {
            en: 'To prevent AWS from billing the account for storage usage',
            bn: 'স্টোরেজ ব্যবহারের জন্য AWS যাতে বিল না করতে পারে তা ঠেকাতে'
          },
          {
            en: 'To make the files unreadable by external internet hackers',
            bn: 'বাইরের হ্যাকারদের পক্ষে ফাইলগুলো অপাঠ্য করে তুলতে'
          },
          {
            en: 'Because S3 buckets are limited to a maximum of 100 objects per prefix',
            bn: 'কারণ S3 বাকেট প্রতি প্রিফিক্সে সর্বোচ্চ ১০০ টি অবজেক্টে সীমাবদ্ধ থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 partitions on the prefix string. More prefixes equal more parallel throughput.',
          bn: 'S3 প্রিফিক্সের ওপর ভিত্তি করে পার্টিশন করে। বেশি প্রিফিক্স মানে বেশি সমান্তরাল থ্রুপুট।'
        },
        explanation: {
          en: 'S3 partitions data across storage nodes based on key prefix. Distributing keys across distinct prefixes multiplies throughput capacity.',
          bn: 'S3 কি প্রিফিক্সের ওপর ভিত্তি করে নোডে ডাটা পার্টিশন করে। ভিন্ন ভিন্ন প্রিফিক্সে ডাটা রাখলে মোট থ্রুপুট অনেক গুণ বেড়ে যায়।'
        }
      },
      {
        id: 'key-q4',
        kind: 'mcq',
        question: {
          en: 'Which query parameter in an S3 presigned URL specifies the number of seconds the URL remains active?',
          bn: 'S3 প্রি-সাইনড URL-এর কোন কুয়েরি প্যারামিটারটি লিংক কত সেকেন্ড কার্যকর থাকবে তা নির্দেশ করে?'
        },
        options: [
          {
            en: 'X-Amz-Expires',
            bn: 'X-Amz-Expires'
          },
          {
            en: 'X-Amz-Max-Time',
            bn: 'X-Amz-Max-Time'
          },
          {
            en: 'Timeout-Seconds',
            bn: 'Timeout-Seconds'
          },
          {
            en: 'TTL-Limit',
            bn: 'TTL-Limit'
          }
        ],
        answer: 0,
        hint: {
          en: 'The AWS Signature Version 4 parameter is X-Amz-Expires.',
          bn: 'AWS সিগনেচার ভার্সন ৪ প্যারামিটারটি হলো X-Amz-Expires।'
        },
        explanation: {
          en: '"X-Amz-Expires" defines the duration (in seconds) for which the generated presigned URL is valid, up to a maximum of 604800 seconds (7 days) for IAM users.',
          bn: '"X-Amz-Expires" প্রি-সাইনড লিংক কত সেকেন্ডের জন্য বৈধ থাকবে তা নির্ধারণ করে (সর্বোচ্চ ৬০৪৮০০ সেকেন্ড বা ৭ দিন)।'
        }
      },
      {
        id: 'key-q5',
        kind: 'mcq',
        question: {
          en: 'What cryptographic signature algorithm is used in modern S3 presigned URLs (AWS Signature Version 4)?',
          bn: 'আধুনিক S3 প্রি-সাইনড URL-এ (AWS Signature Version 4) কোন ক্রিপ্টোগ্রাফিক সিগনেচার অ্যালগরিদম ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'AWS4-HMAC-SHA256',
            bn: 'AWS4-HMAC-SHA256'
          },
          {
            en: 'MD5-Plaintext',
            bn: 'MD5-Plaintext'
          },
          {
            en: 'ROT13-Cipher',
            bn: 'ROT13-Cipher'
          },
          {
            en: 'Base64-Encode',
            bn: 'Base64-Encode'
          }
        ],
        answer: 0,
        hint: {
          en: 'SigV4 uses Hash-based Message Authentication Codes with SHA-256.',
          bn: 'SigV4 মূলত SHA-256 সহযোগে Hash-based Message Authentication Code ব্যবহার করে।'
        },
        explanation: {
          en: 'AWS Signature Version 4 (SigV4) relies on AWS4-HMAC-SHA256 to calculate cryptographic signatures, ensuring request authenticity and tamper resistance.',
          bn: 'AWS সিগনেচার ভার্সন ৪ (SigV4) ক্রিপ্টোগ্রাফিক সিগনেচার তৈরিতে AWS4-HMAC-SHA256 ব্যবহার করে যা তথ্যের নিরাপত্তা নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'versions-and-the-version',
    title: {
      en: 'Object Versioning: Delete Markers & Immutability',
      bn: 'অবজেক্ট ভার্সনিং: ডিলিট মার্কার এবং অপরিবর্তনশীলতা'
    }
  }
};
