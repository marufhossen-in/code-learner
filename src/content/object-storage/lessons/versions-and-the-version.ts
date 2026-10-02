import type { Lesson } from '../../../lib/types';

export const VersionsAndTheVersionLesson: Lesson = {
  slug: 'versions-and-the-version',
  tech: 'object-storage',
  title: {
    en: 'Object Versioning: Delete Markers & Immutability',
    bn: 'অবজেক্ট ভার্সনিং: ডিলিট মার্কার এবং অপরিবর্তনশীলতা'
  },
  summary: {
    en: 'Protect critical data using S3 Object Versioning: immutable version IDs, soft deletion with Delete Markers, instant object recovery, and MFA Delete safeguards.',
    bn: 'S3 অবজেক্ট ভার্সনিং দিয়ে গুরুত্বপূর্ণ ডাটা সুরক্ষিত রাখুন: অপরিবর্তনীয় ভার্সন ID, ডিলিট মার্কার দিয়ে সফট ডিলিট, তাৎক্ষণিক ডাটা পুনরুদ্ধার এবং MFA ডিলিট সুরক্ষা।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'versioning-fundamentals',
      text: {
        en: '1. What is S3 Object Versioning?',
        bn: '১. S3 অবজেক্ট ভার্সনিং কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you operate a production object storage bucket, accidental overwrites or malicious deletions can destroy business data. S3 Object Versioning provides an immutable historical ledger where every modification is preserved as a distinct revision.',
        bn: 'যখন আপনি কোনো প্রোডাকশন অবজেক্ট স্টোরেজ বাকেট পরিচালনা করেন, ভুলবশত ওভাররাইট বা ক্ষতিকর ডিলিট ব্যবসায়িক ডাটা ধ্বংস করতে পারে। S3 অবজেক্ট ভার্সনিং একটি অপরিবর্তনীয় হিস্ট্রি লেজার সরবরাহ করে যেখানে প্রতিটি পরিবর্তন একটি স্বতন্ত্র সংস্করণ হিসেবে সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An S3 bucket exists in 1 of 3 versioning states over its operational lifecycle:',
        bn: 'একটি S3 বাকেট তার কর্মজীবনে ৩ টি সম্ভাব্য ভার্সনিং অবস্থার যেকোনো ১ টিতে থাকতে পারে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Unversioned (Default): New buckets start in this state. An overwrite replaces the previous object payload immediately, and a DELETE command permanently erases the data from disk.',
          bn: '১. আনভার্সনড (ডিফল্ট): নতুন তৈরি করা বাকেট এই অবস্থায় থাকে। ওভাররাইট করলে আগের ডাটা সাথে সাথে প্রতিস্থাপিত হয় এবং DELETE কমান্ড দিলে স্থায়ীভাবে ডিস্ক থেকে ডাটা মুছে যায়।'
        },
        {
          en: '2. Versioning-Enabled: Once enabled, every PUT operation generates a unique alphanumeric versionId (such as "3/L4bqtJlHG.."). Overwriting an object retains both the old and new revisions in storage.',
          bn: '২. ভার্সনিং-এনাবল্ড: একবার সক্রিয় করলে প্রতিটি PUT অপারেশন একটি অনন্য আলফানিউমেরিক versionId (যেমন "3/L4bqtJlHG..") তৈরি করে। কোনো অবজেক্ট ওভাররাইট করলেও পুরোনো এবং নতুন উভয় সংস্করণই জমা থাকে।'
        },
        {
          en: '3. Versioning-Suspended: You can pause versioning on a bucket, but you can never revert to the Unversioned state. Existing historical versions remain safe, while new uploads receive a version ID of "null".',
          bn: '৩. ভার্সনিং-সাসপেন্ডেড: আপনি বাকেটের ভার্সনিং সাময়িক স্থগিত করতে পারেন, কিন্তু কখনোই মূল আনভার্সনড অবস্থায় ফিরতে পারবেন না। পূর্বের সংস্করণগুলো অক্ষত থাকে, আর নতুন আপলোডগুলো "null" ভার্সন ID পায়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'versioning-flow-diagram',
      title: {
        en: 'Object Versioning & Delete Marker Lifecycle',
        bn: 'অবজেক্ট ভার্সনিং এবং ডিলিট মার্কার জীবনচক্র'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Object Versioning &amp; Delete Marker Lifecycle</text>' +
          '<!-- Step 1: Initial Upload -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="160" height="320" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="80" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. INITIAL PUT</text>' +
            '<rect x="12" y="45" width="136" height="70" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="20" y="68" fill="#38bdf8" font-size="10" font-weight="bold">PUT report.pdf</text>' +
            '<text x="20" y="86" fill="#94a3b8" font-size="9">Payload: v1 data</text>' +
            '<text x="20" y="102" fill="#34d399" font-size="9">versionId: 1111</text>' +
            '<rect x="12" y="130" width="136" height="50" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="152" fill="#38bdf8" font-size="9" font-weight="bold">Current Pointer:</text>' +
            '<text x="20" y="168" fill="#34d399" font-size="9">&#x2192; Version 1111</text>' +
            '<text x="80" y="240" fill="#cbd5e1" font-size="10" text-anchor="middle">GET report.pdf</text>' +
            '<text x="80" y="258" fill="#34d399" font-size="10" text-anchor="middle">Returns: v1 (200 OK)</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 200 200 L 225 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Step 2: Overwrite Upload -->' +
          '<g transform="translate(235, 60)">' +
            '<rect width="165" height="320" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="82" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2. OVERWRITE PUT</text>' +
            '<rect x="12" y="45" width="141" height="65" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="20" y="68" fill="#c084fc" font-size="10" font-weight="bold">PUT report.pdf</text>' +
            '<text x="20" y="86" fill="#94a3b8" font-size="9">Payload: v2 data</text>' +
            '<text x="20" y="100" fill="#34d399" font-size="9">versionId: 2222 [NEW]</text>' +
            '<rect x="12" y="120" width="141" height="65" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>' +
            '<text x="20" y="142" fill="#94a3b8" font-size="9">Preserved on disk:</text>' +
            '<text x="20" y="158" fill="#64748b" font-size="8">versionId: 1111 (v1)</text>' +
            '<text x="20" y="172" fill="#38bdf8" font-size="8">Noncurrent version</text>' +
            '<text x="82" y="240" fill="#cbd5e1" font-size="10" text-anchor="middle">GET report.pdf</text>' +
            '<text x="82" y="258" fill="#34d399" font-size="10" text-anchor="middle">Returns: v2 (200 OK)</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 410 200 L 435 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Step 3: Soft Delete -->' +
          '<g transform="translate(445, 60)">' +
            '<rect width="165" height="320" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>' +
            '<text x="82" y="26" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">3. DELETE (SOFT)</text>' +
            '<rect x="12" y="45" width="141" height="75" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
            '<text x="20" y="68" fill="#ef4444" font-size="10" font-weight="bold">DELETE report.pdf</text>' +
            '<text x="20" y="86" fill="#facc15" font-size="9">Inserts Delete Marker</text>' +
            '<text x="20" y="102" fill="#94a3b8" font-size="8">0-byte marker: 3333</text>' +
            '<rect x="12" y="130" width="141" height="65" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="152" fill="#94a3b8" font-size="8">Historical Versions Safe:</text>' +
            '<text x="20" y="168" fill="#34d399" font-size="8">&#x2714; v2 (2222) intact</text>' +
            '<text x="20" y="182" fill="#34d399" font-size="8">&#x2714; v1 (1111) intact</text>' +
            '<text x="82" y="240" fill="#f87171" font-size="10" text-anchor="middle">GET report.pdf</text>' +
            '<text x="82" y="258" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">404 Not Found</text>' +
          '</g>' +
          '<!-- Arrow 3 -->' +
          '<path d="M 620 200 L 645 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Step 4: Restore -->' +
          '<g transform="translate(655, 60)">' +
            '<rect width="115" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="57" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">4. RESTORE</text>' +
            '<rect x="10" y="45" width="95" height="85" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="16" y="66" fill="#34d399" font-size="9" font-weight="bold">DELETE</text>' +
            '<text x="16" y="80" fill="#cbd5e1" font-size="8">?versionId=3333</text>' +
            '<text x="16" y="96" fill="#facc15" font-size="8">(Delete Marker)</text>' +
            '<text x="16" y="118" fill="#38bdf8" font-size="8">Removed!</text>' +
            '<text x="57" y="170" fill="#34d399" font-size="9" text-anchor="middle">v2 becomes</text>' +
            '<text x="57" y="186" fill="#34d399" font-size="9" text-anchor="middle">Current again!</text>' +
            '<text x="57" y="240" fill="#cbd5e1" font-size="9" text-anchor="middle">GET report.pdf</text>' +
            '<text x="57" y="258" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">200 OK &#x2714;</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'delete-markers-restoration',
      text: {
        en: '2. Delete Markers and Restoration Mechanics',
        bn: '২. ডিলিট মার্কার এবং ডাটা পুনরুদ্ধারের কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most important concept in object storage versioning is how S3 executes deletions. When a bucket has versioning enabled, issuing a standard DELETE request does not delete any bytes:',
        bn: 'অবজেক্ট স্টোরেজ ভার্সনিংয়ের সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো S3 কীভাবে ডিলিট সম্পাদন করে। একটি বাকেটে ভার্সনিং সক্রিয় থাকলে সাধারণ DELETE রিকোয়েস্ট পাঠালে মূল ডাটার কোনো ক্ষতি হয় না:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Soft Deletion via Delete Marker: S3 creates a special 0-byte tombstone object called a "Delete Marker" and places it as the current version. Subsequent standard GET requests see the Delete Marker and immediately return HTTP 404 Not Found, making the file appear deleted to users.',
          bn: 'ডিলিট মার্কার সহযোগে সফট ডিলিট: S3 একটি ০-বাইটের বিশেষ ডিলিট মার্কার তৈরি করে বর্তমান ভার্সন হিসেবে বসিয়ে দেয়। ফলে সাধারণ GET রিকোয়েস্টে সরাসরি HTTP 404 Not Found দেখায় এবং ব্যবহারকারীর কাছে ফাইলটি মুছে গেছে বলে মনে হয়।'
        },
        {
          en: 'Instant Restoration: Because previous version bytes were never touched, restoring the file takes 1 step: delete the Delete Marker revision by running DELETE /key?versionId=<delete-marker-id>. Once the marker is removed, the previous real version automatically becomes the active current version.',
          bn: 'তাৎক্ষণিক পুনরুদ্ধার: যেহেতু আগের ভার্সনের ডাটা ডিস্কে অক্ষত ছিল, ফাইল পুনরুদ্ধার করতে কেবল ১ টি কাজ করতে হয়: DELETE /key?versionId=<delete-marker-id> দিয়ে ডিলিট মার্কারটি মুছে ফেলতে হয়। মার্কারটি মুছে গেলেই আগের আসল ভার্সনটি স্বয়ংক্রিয়ভাবে পুনরায় সক্রিয় হয়ে ওঠে।'
        },
        {
          en: 'Permanent Purge: To permanently reclaim storage capacity, you must issue a DELETE request that explicitly supplies the versionId of each data revision. Once permanently purged, the bytes are irrevocably unrecoverable.',
          bn: 'স্থায়ী ডিলিট: স্টোরেজ খালি করতে প্রতিটি ডাটা সংস্করণের সুনির্দিষ্ট versionId উল্লেখ করে DELETE রিকোয়েস্ট পাঠাতে হয়। এভাবে স্থায়ীভাবে মুছে ফেললে সেই ডাটা আর পুনরুদ্ধার করা সম্ভব হয় না।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'mfa-delete-protection',
      text: {
        en: '3. MFA Delete: Hardware Protection Against Catastrophic Loss',
        bn: '৩. MFA ডিলিট: হার্ডওয়্যার টোকেন দিয়ে মারাত্মক ডাটা ধ্বংস রোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To prevent rogue administrator credentials or compromised API keys from wiping entire production buckets, AWS provides MFA Delete. When enabled:',
        bn: 'হ্যাকিং বা অসাবধানতাবশত প্রোডাকশন বাকেটের ডাটা ধ্বংস রোধ করতে AWS একটি বিশেষ MFA Delete ফিচার প্রদান করে। এটি সক্রিয় থাকলে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Required Authentication: Changing bucket versioning state or permanently purging any object version requires supplying a valid 6-digit TOTP code generated by a physical hardware MFA token.',
          bn: 'আবশ্যকীয় প্রমাণীকরণ: বাকেটের ভার্সনিং অবস্থা পরিবর্তন বা কোনো ভার্সন স্থায়ীভাবে ডিলিট করতে ফিজিক্যাল হার্ডওয়্যার MFA টোকেন থেকে ৬ সংখ্যার ওটিপি কোড প্রদান বাধ্যতামূলক।'
        },
        {
          en: 'CLI/API Only: MFA Delete can only be configured via the AWS CLI or SDK using account root credentials; it cannot be toggled from the standard AWS web management console.',
          bn: 'কেবল CLI বা API নিয়ন্ত্রণ: MFA Delete সাধারণ ওয়েব কনসোল থেকে বন্ধ করা যায় না; এটি পরিবর্তন করতে রুট ক্রেডেনশিয়াল ও AWS CLI প্রয়োজন হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'versioning-simulator',
      text: {
        en: '4. S3 Object Versioning Engine in TypeScript',
        bn: '৪. TypeScript এ S3 অবজেক্ট ভার্সনিং ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an S3 versioning engine assigns version IDs, handles soft deletion with Delete Markers, returns 404 on current queries, and restores objects upon marker removal:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি S3 ভার্সনিং ইঞ্জিন সংস্করণ ID নির্ধারণ করে, ডিলিট মার্কার দিয়ে সফট ডিলিট পরিচালনা করে, ৪০৪ রেসপন্স দেয় এবং মার্কার মুছে ফেলে ডাটা পুনরুদ্ধার করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 object versioning, Delete Marker insertion, 404 detection, and version recovery.',
        bn: 'S3 অবজেক্ট ভার্সনিং, ডিলিট মার্কার সন্নিবেশ, ৪০৪ শনাক্তকরণ এবং ভার্সন পুনরুদ্ধারের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of S3 Object Versioning, Delete Markers & Restoration
interface ObjectRevision {
  versionId: string;
  payload: string; // empty string for Delete Markers
  isDeleteMarker: boolean;
  timestamp: string;
}

class VersionedS3Bucket {
  // Key -> Array of revisions, newest at index 0
  private store: Map<string, ObjectRevision[]> = new Map();
  private versionCounter: number = 1000;

  private generateVersionId(): string {
    this.versionCounter += 10;
    return 'ver_' + this.versionCounter;
  }

  // PUT: Adds new revision to the top of the history stack
  putObject(key: string, payload: string): { versionId: string; statusCode: number } {
    const versionId = this.generateVersionId();
    const revision: ObjectRevision = {
      versionId,
      payload,
      isDeleteMarker: false,
      timestamp: new Date().toISOString()
    };

    const history = this.store.get(key) || [];
    history.unshift(revision); // Latest is first
    this.store.set(key, history);

    return { versionId, statusCode: 200 };
  }

  // GET: Fetches current version or specific versionId
  getObject(key: string, versionId?: string): { statusCode: number; payload?: string; isDeleteMarker?: boolean } {
    const history = this.store.get(key);
    if (!history || history.length === 0) return { statusCode: 404 };

    if (versionId) {
      // Direct historical lookup
      const target = history.find((rev) => rev.versionId === versionId);
      if (!target) return { statusCode: 404 };
      if (target.isDeleteMarker) return { statusCode: 405, isDeleteMarker: true }; // Method Not Allowed on marker
      return { statusCode: 200, payload: target.payload };
    }

    // Default: Check current tip
    const current = history[0];
    if (current.isDeleteMarker) {
      return { statusCode: 404 }; // Soft-deleted!
    }
    return { statusCode: 200, payload: current.payload };
  }

  // DELETE: Soft-delete inserts a Delete Marker if no versionId provided
  deleteObject(key: string, versionId?: string): { statusCode: number; deleteMarker?: boolean } {
    const history = this.store.get(key);
    if (!history || history.length === 0) return { statusCode: 204 };

    if (versionId) {
      // Permanent Purge of specific version
      const index = history.findIndex((rev) => rev.versionId === versionId);
      if (index !== -1) {
        history.splice(index, 1);
        return { statusCode: 204 };
      }
      return { statusCode: 404 };
    }

    // Soft delete: Insert Delete Marker
    const markerId = this.generateVersionId();
    history.unshift({
      versionId: markerId,
      payload: '',
      isDeleteMarker: true,
      timestamp: new Date().toISOString()
    });
    return { statusCode: 204, deleteMarker: true };
  }
}

// 1. Initialize bucket and upload 2 revisions of contract.txt
const bucket = new VersionedS3Bucket();
const v1 = bucket.putObject('contract.txt', 'Contract v1 terms');
console.log('Uploaded Version 1: ' + v1.versionId); // -> ver_1010

const v2 = bucket.putObject('contract.txt', 'Contract v2 finalized terms');
console.log('Uploaded Version 2: ' + v2.versionId); // -> ver_1020

// Current version is v2
const currentRes = bucket.getObject('contract.txt');
console.log('Current Payload: ' + currentRes.payload); // -> Contract v2 finalized terms

// 2. Soft-delete the object (creates Delete Marker ver_1030)
bucket.deleteObject('contract.txt');
const afterDeleteRes = bucket.getObject('contract.txt');
console.log('Status after standard DELETE: ' + afterDeleteRes.statusCode); // -> 404

// 3. Historical query still fetches v1 directly by version ID!
const v1Query = bucket.getObject('contract.txt', v1.versionId);
console.log('Direct v1 Historical Payload: ' + v1Query.payload); // -> Contract v1 terms

// 4. Restore: Delete the Delete Marker (ver_1030)
bucket.deleteObject('contract.txt', 'ver_1030');
const restoredRes = bucket.getObject('contract.txt');
console.log('Restored Status: ' + restoredRes.statusCode); // -> 200
console.log('Restored Payload: ' + restoredRes.payload); // -> Contract v2 finalized terms`
    }
  ],
  exercises: [
    {
      id: 'ver-ex-1',
      kind: 'mcq',
      question: {
        en: 'What does Amazon S3 do when a client issues a standard DELETE request on an object in a version-enabled bucket?',
        bn: 'একটি ভার্সনিং সক্রিয় বাকেটে ক্লায়েন্ট সাধারণ DELETE রিকোয়েস্ট পাঠালে Amazon S3 কী করে?'
      },
      options: [
        {
          en: 'It inserts a 0-byte Delete Marker as the current revision while keeping all previous data versions intact',
          bn: 'পূর্ববর্তী সমস্ত সংস্করণ অক্ষত রেখে এটি বর্তমান রিভিশন হিসেবে একটি ০-বাইটের ডিলিট মার্কার বসায়'
        },
        {
          en: 'It permanently deletes all historical versions and formats the storage volume',
          bn: 'এটি সমস্ত ঐতিহাসিক সংস্করণ স্থায়ীভাবে মুছে ফেলে স্টোরেজ ভলিউম ফরম্যাট করে'
        },
        {
          en: 'It downloads the object to the client desktop before deleting',
          bn: 'মুছে ফেলার আগে এটি অবজেক্টটি ব্যবহারকারীর কম্পিউটারে ডাউনলোড করে নেয়'
        },
        {
          en: 'It sends an unencrypted SMS to all AWS account administrators',
          bn: 'এটি সমস্ত AWS অ্যাকাউন্ট অ্যাডমিনিস্ট্রেটরদের কাছে একটি আন-এনক্রিপ্টেড এসএমএস পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard DELETE performs a soft deletion by adding a Delete Marker.',
        bn: 'সাধারণ DELETE মূলত একটি ডিলিট মার্কার যোগ করে সফট ডিলিট সম্পন্ন করে।'
      },
      explanation: {
        en: 'In a versioned bucket, a simple DELETE request creates a Delete Marker. The marker becomes the current version, causing standard GET requests to return 404.',
        bn: 'ভার্সনিং চালু থাকলে সাধারণ DELETE কমান্ড একটি ডিলিট মার্কার তৈরি করে। এর ফলে পরবর্তী GET রিকোয়েস্টে ৪০৪ এরর দেখালেও পেছনের ডাটা সুরক্ষিত থাকে।'
      }
    },
    {
      id: 'ver-ex-2',
      kind: 'mcq',
      question: {
        en: 'How do you restore an object that was soft-deleted with a Delete Marker in a versioned bucket?',
        bn: 'একটি ভার্সনিং চালু থাকা বাকেটে ডিলিট মার্কার দিয়ে সফট ডিলিট হওয়া অবজেক্ট কীভাবে পুনরুদ্ধার করা যায়?'
      },
      options: [
        {
          en: 'Delete the Delete Marker itself by specifying its versionId in a DELETE request',
          bn: 'একটি DELETE রিকোয়েস্টে versionId উল্লেখ করে স্বয়ং ডিলিট মার্কারটিকে মুছে ফেলার মাধ্যমে'
        },
        {
          en: 'Upload a 10MB empty text file with the same key name',
          bn: 'একই নামে ১০ মেগাবাইটের একটি খালি টেক্সট ফাইল আপলোড করার মাধ্যমে'
        },
        {
          en: 'Restart the physical AWS datacenter server rack',
          bn: 'ফিজিক্যাল AWS ডাটা সেন্টারের সার্ভার র্যাক রিস্টার্ট করার মাধ্যমে'
        },
        {
          en: 'Wait 365 days for automated garbage collection to expire',
          bn: 'স্বয়ংক্রিয় গার্বেজ কালেকশনের মেয়াদ শেষ হওয়ার জন্য ৩৬৫ দিন অপেক্ষা করার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Deleting the marker removes the tombstone, restoring the previous real revision.',
        bn: 'মার্কারটি মুছে ফেললে আগের আসল ভার্সনটি আবার শীর্ষস্থানে ফিরে আসে।'
      },
      explanation: {
        en: 'Deleting the Delete Marker revision restores the previous object version as current, making the file accessible via standard GET requests immediately.',
        bn: 'ডিলিট মার্কারটি মুছে দিলে পেছনের আসল সংস্করণটি পুনরায় সক্রিয় হয়ে ওঠে এবং সাধারণ GET রিকোয়েস্টে সরাসরি ফাইলটি পাওয়া যায়।'
      }
    },
    {
      id: 'ver-ex-3',
      kind: 'mcq',
      question: {
        en: 'What security capability does MFA Delete provide on an Amazon S3 bucket?',
        bn: 'Amazon S3 বাকেটে MFA ডিলিট কোন নিরাপত্তা সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It requires a 6-digit TOTP code from a hardware device to change versioning or permanently purge object versions',
          bn: 'ভার্সনিং পরিবর্তন বা স্থায়ীভাবে অবজেক্ট মুছতে হার্ডওয়্যার ডিভাইসের ৬ সংখ্যার ওটিপি কোড দাবি করে'
        },
        {
          en: 'It encrypts every object with 3 separate passwords chosen by the client',
          bn: 'এটি ক্লায়েন্টের নির্বাচিত ৩ টি আলাদা পাসওয়ার্ড দিয়ে প্রতিটি অবজেক্ট এনক্রিপ্ট করে'
        },
        {
          en: 'It automatically blocks all internet traffic from outside the United States',
          bn: 'এটি মার্কিন যুক্তরাষ্ট্রের বাইরের সমস্ত ইন্টারনেট ট্র্যাফিক স্বয়ংক্রিয়ভাবে ব্লক করে'
        },
        {
          en: 'It limits bucket storage to a maximum of 2 gigabytes',
          bn: 'এটি বাকেট স্টোরেজকে সর্বোচ্চ ২ গিগাবাইটে সীমাবদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'MFA Delete enforces two-factor authentication on destructive delete operations.',
        bn: 'MFA ডিলিট ক্ষতিকর ডাটা মোছার কাজে টু-ফ্যাক্টর অথেন্টিকেশন বাধ্যতামূলক করে।'
      },
      explanation: {
        en: 'MFA Delete adds an additional layer of security by requiring multi-factor authentication (6-digit TOTP code) for permanently deleting object versions.',
        bn: 'MFA Delete স্থায়ীভাবে ভার্সন ডিলিট বা ভার্সনিং বন্ধ করার জন্য ৬ সংখ্যার হার্ডওয়্যার ওটিপি দাবি করে নিরাপত্তা বৃদ্ধি করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-versions-and-the-version',
    title: {
      en: 'S3 Object Versioning and Delete Markers Quiz',
      bn: 'S3 অবজেক্ট ভার্সনিং এবং ডিলিট মার্কার কুইজ'
    },
    questions: [
      {
        id: 'ver-q1',
        kind: 'mcq',
        question: {
          en: 'Once versioning has been enabled on an S3 bucket, can the bucket ever return to the Unversioned state?',
          bn: 'একবার S3 বাকেটে ভার্সনিং সক্রিয় করার পর বাকেটটি কি পুনরায় প্রাথমিক আনভার্সনড অবস্থায় ফিরতে পারে?'
        },
        options: [
          {
            en: 'No, a bucket can only be Suspended, never returned to Unversioned',
            bn: 'না, বাকেটটি কেবল সাসপেন্ড বা স্থগিত করা যায়, কখনোই পূর্বাবস্থায় ফেরা যায় না'
          },
          {
            en: 'Yes, anytime by clicking reset in the web console',
            bn: 'হ্যাঁ, ওয়েব কনসোলে রিসেট ক্লিক করলেই যেকোনো সময় ফেরা যায়'
          },
          {
            en: 'Yes, if all objects inside the bucket are smaller than 1MB',
            bn: 'হ্যাঁ, যদি বাকেটের সমস্ত অবজেক্ট ১ মেগাবাইটের চেয়ে ছোট হয়'
          },
          {
            en: 'Only on the first day of each calendar month',
            bn: 'কেবল প্রতি ক্যালেন্ডার মাসের প্রথম দিনে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Once enabled, you can only suspend versioning, not disable it completely.',
          bn: 'একবার সক্রিয় করলে কেবল স্থগিত করা সম্ভব, সম্পূর্ণ বন্ধ করা যায় না।'
        },
        explanation: {
          en: 'S3 does not allow reverting a bucket to Unversioned once enabled. You can only suspend versioning, which preserves existing versions.',
          bn: 'একবার ভার্সনিং চালু করলে তা আর আনভার্সনড করা যায় না, কেবল সাসপেন্ড করা যায় যা পুরোনো ভার্সনগুলোকে অক্ষত রাখে।'
        }
      },
      {
        id: 'ver-q2',
        kind: 'mcq',
        question: {
          en: 'What HTTP status code is returned when a client attempts a standard GET on an object whose current revision is a Delete Marker?',
          bn: 'যে অবজেক্টের বর্তমান রিভিশন একটি ডিলিট মার্কার, ক্লায়েন্ট তাতে সাধারণ GET চালালে কোন HTTP স্ট্যাটাস কোড ফিরে আসে?'
        },
        options: [
          {
            en: '404 Not Found',
            bn: '404 Not Found'
          },
          {
            en: '200 OK',
            bn: '200 OK'
          },
          {
            en: '500 Internal Server Error',
            bn: '৫০০ Internal Server Error ত্রুটি'
          },
          {
            en: '301 Moved Permanently',
            bn: '301 Moved Permanently'
          }
        ],
        answer: 0,
        hint: {
          en: 'A Delete Marker acts as a tombstone, making the object appear missing (404).',
          bn: 'ডিলিট মার্কার ফাইলটি মুছে গেছে এমন নির্দেশ দিয়ে ৪০৪ কোড ফেরত পাঠায়।'
        },
        explanation: {
          en: 'When the current version is a Delete Marker, standard GET requests receive HTTP 404 Not Found, mimicking normal file deletion behavior.',
          bn: 'বর্তমান সংস্করণটি ডিলিট মার্কার হলে সাধারণ GET রিকোয়েস্টে HTTP 404 Not Found পাওয়া যায়।'
        }
      },
      {
        id: 'ver-q3',
        kind: 'mcq',
        question: {
          en: 'How does Amazon S3 bill customers for storage when object versioning is enabled?',
          bn: 'অবজেক্ট ভার্সনিং সক্রিয় থাকলে Amazon S3 কীভাবে গ্রাহকদের স্টোরেজের বিল হিসাব করে?'
        },
        options: [
          {
            en: 'Customers are billed for the stored gigabytes of all active and historical versions combined',
            bn: 'সক্রিয় ও পূর্ববর্তী সমস্ত সংস্করণের মোট গিগাবাইট স্টোরেজের ওপর ভিত্তি করে বিল করা হয়'
          },
          {
            en: 'Customers are only billed for the latest current version; historical versions are completely free',
            bn: 'গ্রাহকদের কেবল সর্বশেষ সংস্করণের বিল দিতে হয়; পূর্বের সংস্করণগুলো সম্পূর্ণ বিনামূল্যে থাকে'
          },
          {
            en: 'Storage billing is completely waived when versioning is turned on',
            bn: 'ভার্সনিং চালু রাখলে স্টোরেজের সমস্ত বিল সম্পূর্ণ মওকুফ করা হয়'
          },
          {
            en: 'Billing is calculated solely based on the number of letters in the object key',
            bn: 'কেবল অবজেক্ট কি-এর অক্ষরের সংখ্যার ওপর ভিত্তি করে বিল নির্ধারণ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every version stored consumes physical disk space and incurs normal S3 storage costs.',
          bn: 'প্রতিটি সংস্করণ ফিজিক্যাল ডিস্কের জায়গা দখল করায় সাধারণ S3 চার্জ প্রযোজ্য হয়।'
        },
        explanation: {
          en: 'S3 charges standard storage rates for all versions of an object. To prevent unexpected storage costs, lifecycle rules are used to expire noncurrent versions.',
          bn: 'S3 প্রতিটি সংস্করণের সংরক্ষিত ডাটার জন্য বিল করে। অতিরিক্ত খরচ কমাতে লাইফসাইকেল রুল দিয়ে পুরোনো ভার্সন ডিলিট করা হয়।'
        }
      },
      {
        id: 'ver-q4',
        kind: 'mcq',
        question: {
          en: 'What is the payload byte size of an S3 Delete Marker object revision?',
          bn: 'S3 ডিলিট মার্কার অবজেক্ট সংস্করণের পেলোড বাইট সাইজ কত?'
        },
        options: [
          {
            en: '0 bytes',
            bn: '০ বাইট'
          },
          {
            en: '1024 bytes',
            bn: '১০২৪ বাইট'
          },
          {
            en: '5 megabytes',
            bn: '৫ মেগাবাইট'
          },
          {
            en: 'Equal to the size of the original deleted file',
            bn: 'মুছে ফেলা মূল ফাইলের সমান সাইজ'
          }
        ],
        answer: 0,
        hint: {
          en: 'A Delete Marker has no data content; it is purely a metadata tombstone marker.',
          bn: 'ডিলিট মার্কারে কোনো ডাটা থাকে না; এটি কেবল একটি নির্দেশক সংকেত।'
        },
        explanation: {
          en: 'A Delete Marker is a 0-byte metadata placeholder that signals deletion without holding any underlying data bytes.',
          bn: 'ডিলিট মার্কার হলো একটি ০-বাইটের মেটাডাটা মার্কার যা কোনো বাইট ডাটা ধারণ করে না।'
        }
      },
      {
        id: 'ver-q5',
        kind: 'mcq',
        question: {
          en: 'How can an application download a specific older version of an object in a version-enabled bucket?',
          bn: 'একটি ভার্সনিং চালু থাকা বাকেটে কোনো অ্যাপ কীভাবে নির্দিষ্ট পুরোনো সংস্করণ ডাউনলোড করতে পারে?'
        },
        options: [
          {
            en: 'Pass the target version identifier in the query string (e.g. GET /key?versionId=XYZ)',
            bn: 'কুয়েরি স্ট্রিংয়ে নির্দিষ্ট ভার্সন আইডি পাঠিয়ে (যেমন GET /key?versionId=XYZ)'
          },
          {
            en: 'Rename the file so it contains the word "history"',
            bn: 'ফাইলের নামে "history" শব্দটি যোগ করে রিনেম করার মাধ্যমে'
          },
          {
            en: 'Delete all newer versions until the target version becomes current',
            bn: 'কাঙ্ক্ষিত সংস্করণ শীর্ষে না আসা পর্যন্ত নতুন সব সংস্করণ মুছে ফেলে'
          },
          {
            en: 'Older versions can never be downloaded; they can only be deleted',
            bn: 'পুরোনো সংস্করণ কখনোই ডাউনলোড করা যায় না, কেবল মুছে ফেলা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use the versionId query parameter on the GET request.',
          bn: 'GET রিকোয়েস্টে versionId কুয়েরি প্যারামিটার ব্যবহার করুন।'
        },
        explanation: {
          en: 'Clients can retrieve any historical revision by providing the versionId parameter in their GET request (GET /key?versionId=...).',
          bn: 'GET রিকোয়েস্টে versionId প্যারামিটার উল্লেখ করে যেকোনো অতীত সংস্করণ সরাসরি ডাউনলোড করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lifecycles-and-the-lifecycle',
    title: {
      en: 'Storage Classes: Lifecycle Rules & Glacier Archival',
      bn: 'স্টোরেজ ক্লাস: লাইফসাইকেল রুলস এবং গ্লেসিয়ার আর্কাইভ'
    }
  }
};
