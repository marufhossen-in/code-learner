import type { Lesson } from '../../../lib/types';

export const DocsAndTheCollectLesson: Lesson = {
  slug: 'docs-and-the-collect',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Beginner Guide: BSON, Document Model & Core CRUD Operations',
    bn: 'MongoDB বিগিনার গাইড: BSON, ডকুমেন্ট মডেল ও কোর CRUD অপারেশন'
  },
  summary: {
    en: 'Master MongoDB fundamentals and the document data model across 10 structured topics. Understand how JSON serializes into typed, high-performance binary BSON under the 16 MB limit. Decode the 12-byte ObjectId structure containing timestamp, random values, and counter. Execute atomic CRUD operations with insertOne, insertMany, find, updateOne, and deleteMany. Filter with comparison and logical operators, query embedded arrays using $elemMatch, and manage write concerns.',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB ফান্ডামেন্টালস এবং ডকুমেন্ট ডেটা মডেল আয়ত্ত করুন। জানুন কীভাবে JSON ১৬ মেগাবাইট সীমার মধ্যে টাইপড বাইনারি BSON-এ রূপান্তরিত হয়। টাইমস্ট্যাম্প, র্যান্ডম মান ও কাউন্টার সমৃদ্ধ ১২ বাইটের ObjectId বিশ্লেষণ করুন। insertOne, insertMany, find, updateOne এবং deleteMany দিয়ে অ্যাটমিক CRUD অপারেশন চালান। কম্প্যারিজন ও লজিক্যাল অপারেটর এবং $elemMatch দিয়ে কুয়েরি করুন এবং রাইট কনসার্ন পরিচালনা করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'schemas-and-the-field',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Schema Design: Embedding, Referencing & Validation',
      bn: 'MongoDB স্কিমা ডিজাইন: এমবেডিং, রেফারেন্সিং ও ভ্যালিডেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Document Paradigm: SQL Tables vs MongoDB Collections', bn: '১. ডকুমেন্ট প্যারাডাইম: SQL টেবিল বনাম MongoDB কালেকশন' } },
    {
      type: 'para',
      text: {
        en: 'When you build modern applications, traditional SQL databases force data into rigid tabular rows governed by strict schemas. In contrast, MongoDB stores records as flexible BSON (Binary JSON) documents inside dynamic collections, allowing your data models to evolve naturally alongside application requirements.',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির সময় ঐতিহ্যবাহী রিলেশনাল ডাটাবেসগুলো ডেটাকে ছকের মতো নির্দিষ্ট সারিতে আটকে রাখে। বিপরীতে MongoDB ডেটাকে নমনীয় BSON (বাইনারি JSON) ডকুমেন্ট আকারে কালেকশনে জমা রাখে, যা আপনার অ্যাপ্লিকেশনের চাহিদার সাথে তাল মিলিয়ে ডেটা মডেলকে সহজেই পরিবর্ধন করার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `RELATIONAL (RDBMS) VS MONGODB MAPPING:
+-------------------+----------------------------+
| Relational (SQL)  | MongoDB Document Store     |
+-------------------+----------------------------+
| Database          | Database                   |
| Table             | Collection                 |
| Row / Record      | BSON Document              |
| Column            | Field (Key-Value Pair)     |
| Primary Key (PK)  | _id (Default ObjectId)     |
| JOIN              | $lookup / Embedded Docs    |
+-------------------+----------------------------+`,
      caption: {
        en: 'Structural terminology mapping between relational tables and MongoDB collections.',
        bn: 'রিলেশনাল টেবিল এবং মঙ্গোডিবি কালেকশনের পারিভাষিক তুলনা।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'BSON Document Structure & 12-byte ObjectId Layout', bn: 'BSON ডকুমেন্ট কাঠামো ও ১২ বাইটের ObjectId বিন্যাস' },
      svg: `<svg viewBox="0 0 680 220" font-family="system-ui, sans-serif" role="img" aria-label="MongoDB BSON Document and ObjectId anatomy">
<rect x="20" y="20" width="640" height="80" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
<text x="40" y="45" font-size="12" font-weight="700" fill="#38bdf8">Collection: users</text>
<text x="40" y="70" font-size="11" fill="#cbd5e1">{ _id: ObjectId("66f5..."), name: "Tahmid", age: 28, roles: ["admin"] }</text>
<text x="40" y="88" font-size="10" fill="#94a3b8">BSON Binary Encoding: Max 16 MB document limit</text>

<g transform="translate(20, 120)">
<rect x="0" y="0" width="640" height="80" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
<text x="20" y="24" font-size="12" font-weight="700" fill="#4ade80">12-Byte ObjectId Anatomy (24 Hex Characters)</text>

<rect x="20" y="38" width="180" height="30" rx="4" fill="#0369a1"/>
<text x="110" y="57" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">4 Bytes: Timestamp</text>

<rect x="210" y="38" width="220" height="30" rx="4" fill="#047857"/>
<text x="320" y="57" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">5 Bytes: Random Process Value</text>

<rect x="440" y="38" width="180" height="30" rx="4" fill="#b45309"/>
<text x="530" y="57" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">3 Bytes: Increment Counter</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. BSON Types & The 16 MB Document Limit', bn: '২. BSON ডাটা টাইপ ও ১৬ মেগাবাইট ডকুমেন্ট সীমা' } },
    {
      type: 'para',
      text: {
        en: 'While JSON is human-readable, it is computationally slow to parse and only supports numbers, strings, booleans, arrays, and null. MongoDB converts JSON into BSON (Binary JSON), adding native support for Date, 64-bit integers, Double, Decimal128, Binary data, and Regex. Crucially, a single BSON document cannot exceed 16 MB.',
        bn: 'JSON মানুষের পড়ার উপযোগী হলেও এটি পার্স করা ধীরগতির এবং এতে শুধু সংখ্যা, স্ট্রিং, বুলিয়ান ও অ্যারে রাখা যায়। MongoDB এই JSON-কে BSON (বাইনারি JSON)-এ রূপান্তরিত করে, যা সরাসরি Date, ৬৪-বিট পূর্ণসংখ্যা, ডেসিমাল১২৮, বাইনারি ডেটা এবং রেজেক্স সমর্থন করে। মনে রাখবেন, একটি একক BSON ডকুমেন্টের আকার সর্বোচ্চ ১৬ মেগাবাইট হতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// BSON preserves exact types that standard JSON loses:
const doc = {
  _id: new ObjectId(),
  amount: new Double(149.99),
  createdAt: new Date("2026-09-26T10:00:00Z"),
  isActive: true,
  viewCount: new Long("9876543210123")
};

console.log("Document encoded with exact 64-bit integers and native timestamps");
// Output: Document encoded with exact 64-bit integers and native timestamps`,
      caption: {
        en: 'BSON stores rich data types with byte-level length prefixes for fast traversal.',
        bn: 'BSON দ্রুত ট্রাভার্সালের জন্য টাইপসহ বাইনারি ফরম্যাটে ডেটা সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Anatomy of the 12-Byte ObjectId', bn: '৩. ১২-বাইটের ObjectId-র গঠন' } },
    {
      type: 'para',
      text: {
        en: 'Every document requires an immutable unique identifier stored in the _id field. By default, MongoDB generates a 12-byte ObjectId displayed as a 24-character hexadecimal string: 4 bytes represent a Unix epoch timestamp, 5 bytes hold a random process/machine value, and 3 bytes contain an auto-incrementing counter.',
        bn: 'প্রতিটি ডকুমেন্টের জন্য _id ফিল্ডে একটি অনন্য ও অপরিবর্তনীয় শনাক্তকারী থাকা বাধ্যতামূলক। ডিফল্টভাবে MongoDB একটি ১২-বাইটের ObjectId তৈরি করে যা ২৪ অক্ষরের হেক্সাডেসিমাল স্ট্রিং হিসেবে দৃশ্যমান হয়: প্রথম ৪ বাইটে থাকে ইউনিক্স টাইমস্ট্যাম্প, পরের ৫ বাইটে মেশিনের ইউনিক র্যান্ডম মান এবং শেষ ৩ বাইটে থাকে একটি ইনক্রিমেন্টিং কাউন্টার।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const { ObjectId } = require('mongodb');

const id = new ObjectId();
console.log("Hex String:", id.toHexString());
console.log("Creation Timestamp:", id.getTimestamp().toISOString());
// Output:
// Hex String: 66f54c2a1e8a4921b7640001
// Creation Timestamp: 2026-09-26T12:00:00.000Z`,
      caption: {
        en: 'ObjectIds embed chronological timestamps, enabling rough chronological sorting on _id alone.',
        bn: 'ObjectId-র ভেতরেই সময় সংরক্ষিত থাকে, ফলে শুধু _id দিয়ে ক্রমানুসারে সাজানো যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Inserting Documents: insertOne vs insertMany & Ordered Batches', bn: '৪. ডেটা ইনসার্ট: insertOne বনাম insertMany ও ব্যাচ প্রসেসিং' } },
    {
      type: 'para',
      text: {
        en: 'Inserting single records is executed via insertOne(), which returns an acknowledged flag and the generated insertedId. For batch loads, insertMany() accepts an array of documents. By default, batch inserts are ordered: true, meaning if document 3 fails due to a duplicate key, execution halts immediately.',
        bn: 'একটি ডকুমেন্ট সংরক্ষণে insertOne() ব্যবহৃত হয়, যা অপারেশন সফল হলে insertedId ফেরত দেয়। একসাথে একাধিক ডেটা ঢোকাতে insertMany() ব্যবহৃত হয়। ডিফল্টভাবে ব্যাচ ইনসার্ট ordered: true থাকে, যার অর্থ ৩ নম্বর ডকুমেন্টে কোনো ডুপ্লিকেট কি এরর হলে পরবর্তী সব ডকুমেন্টের কাজ বন্ধ হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Ordered vs Unordered batch insertion:
await db.collection("users").insertMany(
  [
    { _id: 1, name: "Sakib", role: "developer" },
    { _id: 2, name: "Tamim", role: "lead" },
    { _id: 3, name: "Mushfiq", role: "manager" }
  ],
  { ordered: false } // Continues remaining inserts even if one document fails
);

console.log("Batch documents processed with unordered fault tolerance");
// Output: Batch documents processed with unordered fault tolerance`,
      caption: {
        en: 'Setting ordered: false permits independent execution across valid batch items.',
        bn: 'ordered: false দিলে কোনো একটি আইটেম ফেইল করলেও বাকিগুলো ডাটাবেসে সেভ হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Finding Documents & Projection Optimization', bn: '৫. ডেটা অনুসন্ধান এবং প্রজেকশন অপ্টিমাইজেশন' } },
    {
      type: 'para',
      text: {
        en: 'The find(filter, projection) method returns a cursor streaming matching documents. The projection document specifies which fields to include (1) or exclude (0). Omitting unnecessary large fields like heavy metadata blocks conserves network bandwidth and RAM during high-throughput queries.',
        bn: 'find(filter, projection) মেথড কুয়েরি মেলা ডকুমেন্টের ওপর একটি কার্সর প্রদান করে। প্রজেকশন অংশে নির্ধারণ করা হয় কোন ফিল্ডগুলো আনতে হবে (১) অথবা বাদ দিতে হবে (০)। অপ্রয়োজনীয় ফিল্ড বাদ দিলে নেটওয়ার্ক ব্যান্ডউইথ এবং সিস্টেমের র‍্যাম সাশ্রয় হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Fetching active developers, returning only name and role:
const cursor = db.collection("users").find(
  { role: "developer" },
  { projection: { name: 1, role: 1, _id: 0 } }
);

const results = await cursor.toArray();
console.log("Found matches:", results.length);
// Output: Found matches: 1`,
      caption: {
        en: 'Projections narrow response payloads to essential attributes, optimizing query throughput.',
        bn: 'প্রজেকশন অপ্রয়োজনীয় ডেটা ছাঁটাই করে কুয়েরির গতি বৃদ্ধি করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Comparison Operators: $eq, $ne, $gt, $gte, $lt, $lte, $in', bn: '৬. কম্প্যারিজন অপারেটর: মান তুলনা ও পরিসীমা যাচাই' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB query filters leverage expression operators prefixed with a dollar sign ($). Comparison operators evaluate field boundaries: $gt (greater than), $gte (greater than or equal), $lt (less than), $lte (less than or equal), $ne (not equal), and $in (matches any value in a list).',
        bn: 'MongoDB কুয়েরিতে শর্ত প্রয়োগের জন্য ডলার ($) চিহ্নযুক্ত অপারেটর ব্যবহার করা হয়। কম্প্যারিজন অপারেটর দিয়ে মান যাচাই করা যায়: $gt (বড়), $gte (বড় বা সমান), $lt (ছোট), $lte (ছোট বা সমান), $ne (সমান নয়), এবং $in (তালিকার যেকোনো মানের সাথে মিল)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Finding products with price between 1000 and 5000:
const items = await db.collection("products").find({
  price: { $gte: 1000, $lte: 5000 },
  category: { $in: ["Electronics", "Computers"] }
}).toArray();

console.log("Filtered matching records within target boundaries");
// Output: Filtered matching records within target boundaries`,
      caption: {
        en: 'Comparison operators provide boundary checks and set membership filters.',
        bn: 'কম্প্যারিজন অপারেটর রেঞ্জ এবং তালিকার মান যাচাই করতে ব্যবহৃত হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Logical Operators: $and, $or, $nor, $not', bn: '৭. লজিক্যাল অপারেটর: যৌক্তিক শর্ত সংযোগ' } },
    {
      type: 'para',
      text: {
        en: 'When constructing multi-clause criteria, MongoDB applies implicit AND across distinct fields. Explicit logical operators are required for branching conditions: $or evaluates to true if any expression matches, $nor requires all expressions to fail, and $and is needed when evaluating multiple clauses on the same field.',
        bn: 'একাধিক শর্ত লেখার সময় ভিন্ন ভিন্ন ফিল্ডে MongoDB নিজে থেকেই AND হিসেবে ধরে নেয়। তবে বিকল্প শর্তের জন্য বিশেষ অপারেটর লাগে: $or যেকোনো একটি শর্ত মিললেই সত্য হয়, $nor কোনো শর্তই মিলতে না দিলে ব্যবহৃত হয়, আর একই ফিল্ডে একাধিক জটিল শর্ত চালাতে স্পষ্ট $and লাগে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Finding users who are either admins OR have status active with age >= 25:
const query = {
  $or: [
    { role: "admin" },
    { status: "active", age: { $gte: 25 } }
  ]
};

const users = await db.collection("users").find(query).toArray();
console.log("Matched logical OR criteria successfully");
// Output: Matched logical OR criteria successfully`,
      caption: {
        en: 'Logical operators evaluate complex compound Boolean conditions.',
        bn: 'লজিক্যাল অপারেটর জটিল শর্তযুক্ত বুলিয়ান কুয়েরি পরিচালনায় সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Querying Array Elements & Sub-Documents: $elemMatch', bn: '৮. অ্যারে ও সাব-ডকুমেন্ট অনুসন্ধান: $elemMatch' } },
    {
      type: 'para',
      text: {
        en: 'Querying arrays of embedded sub-documents requires precision. A naive query matching two fields can match one field in the first item and the other in the second item. The $elemMatch operator guarantees that all specified conditions match within a single identical array element.',
        bn: 'নেস্টেড সাব-ডকুমেন্টের অ্যারেতে কুয়েরি করার সময় সতর্ক থাকতে হয়। সাধারণ কুয়েরি দিলে প্রথম আইটেমের একটি ফিল্ড আর দ্বিতীয় আইটেমের আরেকটি ফিল্ড মিলে ভুল রেজাল্ট আসতে পারে। $elemMatch নিশ্চিত করে যে সবকটি শর্ত হুবহু একই নির্দিষ্ট অ্যারে আইটেমের ভেতরে সত্য হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Matching an order that has an item with quantity >= 2 AND price <= 500:
const arrayQuery = {
  items: {
    $elemMatch: {
      quantity: { $gte: 2 },
      price: { $lte: 500 }
    }
  }
};

const matchedOrders = await db.collection("orders").find(arrayQuery).toArray();
console.log("Found orders containing single sub-document satisfying both rules");
// Output: Found orders containing single sub-document satisfying both rules`,
      caption: {
        en: '$elemMatch ensures multiple criteria apply to the exact same array element.',
        bn: '$elemMatch নিশ্চিত করে যেন সবকটি শর্ত একই অ্যারে আইটেমে কার্যকর হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Updating Documents: $set, $inc, $push & Upsert Mechanics', bn: '৯. ডেটা আপডেট: $set, $inc, $push ও আপসার্ট মেকানিক্স' } },
    {
      type: 'para',
      text: {
        en: 'Never pass a plain object to updateOne(); doing so replaces the entire document! Always use atomic update operators: $set updates specific fields without modifying others, $inc adds or subtracts numerical values atomically, and $push appends items into an array. Setting upsert: true inserts a new document if no record matches.',
        bn: 'updateOne()-এ কখনোই সাধারণ অবজেক্ট পাঠানো উচিত নয়, কারণ এতে সম্পূর্ণ ডকুমেন্ট বদলে যাবে! সর্বদা অ্যাটমিক আপডেট অপারেটর ব্যবহার করুন: $set অন্য কোনো ফিল্ড না ছুঁয়ে নির্দিষ্ট ফিল্ড আপডেট করে, $inc সরাসরি সংখ্যা যোগ বা বিয়োগ করে এবং $push অ্যারেতে নতুন উপাদান যোগ করে। upsert: true দিলে কুয়েরি না মিললে নতুন ডকুমেন্ট তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Atomically updating user profile and incrementing login count:
const updateResult = await db.collection("users").updateOne(
  { email: "user@example.com" },
  {
    $set: { lastLogin: new Date() },
    $inc: { loginCount: 1 },
    $push: { accessLogs: { ip: "192.168.1.1", time: new Date() } }
  },
  { upsert: true }
);

console.log("Matched:", updateResult.matchedCount, "Modified:", updateResult.modifiedCount);
// Output: Matched: 1 Modified: 1`,
      caption: {
        en: 'Atomic update operators modify specific attributes in-place without write lock races.',
        bn: 'অ্যাটমিক আপডেট অপারেটর সরাসরি নির্দিষ্ট ফিল্ড আপডেট করে ডেটা রেস প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Deletions, Write Concern & Durability Guarantees', bn: '১০. ডেটা মুছে ফেলা, রাইট কনসার্ন ও স্থায়িত্বের নিশ্চয়তা' } },
    {
      type: 'para',
      text: {
        en: 'Documents are pruned using deleteOne(filter) or deleteMany(filter). Deleting an entire collection via drop() is hundreds of times faster than deleteMany({}) because it unlinks the underlying storage metadata. The writeConcern option controls durability: w: 1 acknowledges write to memory, while w: "majority" waits for commitment to replica nodes.',
        bn: 'ডেটা মুছতে deleteOne(filter) বা deleteMany(filter) ব্যবহৃত হয়। সম্পূর্ণ কালেকশন মুছতে deleteMany({})-এর চেয়ে drop() শতগুণ দ্রুত, কারণ এটি সরাসরি স্টোরেজ মেটাডেটা মুছে দেয়। writeConcern অপশনটি ডেটার স্থায়িত্ব নিয়ন্ত্রণ করে: w: 1 মেমরিতে লেখামাত্র স্বীকৃতি দেয়, আর w: "majority" ক্লাস্টারের অধিকাংশ রেপ্লিকা নোডে ডেটা পৌঁছানো পর্যন্ত অপেক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Deleting inactive accounts with majority write durability acknowledgment:
const deleteResult = await db.collection("users").deleteMany(
  { status: "archived" },
  { writeConcern: { w: "majority", wtimeout: 5000 } }
);

console.log("Deleted archived accounts:", deleteResult.deletedCount);
// Output: Deleted archived accounts: 0`,
      caption: {
        en: 'Configuring majority write concerns prevents data loss during primary node failover.',
        bn: 'মেজরিটি রাইট কনসার্ন সার্ভার বন্ধ হলেও ডেটা পুরোপুরি নিরাপদ রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-doc-ex1',
      kind: 'predict',
      topic: 'mongodb: bson maximum document size limit in MB',
      question: {
        en: 'What is the absolute maximum BSON document size limit (in megabytes) supported by MongoDB?',
        bn: 'MongoDB-তে একটি BSON ডকুমেন্টের সর্বোচ্চ আকার কত মেগাবাইট হতে পারে?'
      },
      code: `/* BSON Maximum Document Size Limit in MB: */
/* Max Size: __ MB */`,
      answer: '16',
      accept: ['16', '16MB', '16 MB'],
      hint: {
        en: '16 megabytes.',
        bn: '১৬ মেগাবাইট।'
      },
      explanation: {
        en: 'MongoDB caps BSON document sizes at 16 MB to prevent excessive RAM consumption and enforce clean data modeling.',
        bn: 'MongoDB মেমরি সাশ্রয় এবং সঠিক ডেটা মডেলিং নিশ্চিত করতে প্রতিটি ডকুমেন্টের আকার সর্বোচ্চ ১৬ মেগাবাইটে সীমাবদ্ধ রেখেছে।'
      }
    },
    {
      id: 'mng-doc-ex2',
      kind: 'mcq',
      topic: 'mongodb: objectId byte length',
      question: {
        en: 'How many bytes make up a standard MongoDB ObjectId?',
        bn: 'একটি স্ট্যান্ডার্ড MongoDB ObjectId সর্বমোট কত বাইটের হয়ে থাকে?'
      },
      options: [
        { en: '12 bytes (24 hex characters)', bn: '১২ বাইট (২৪টি হেক্সাডেসিমাল অক্ষর)' },
        { en: '16 bytes (32 hex characters)', bn: '১৬ বাইট (৩২টি হেক্সাডেসিমাল অক্ষর)' },
        { en: '4 bytes (8 hex characters)', bn: '৪ বাইট (৮টি হেক্সাডেসিমাল অক্ষর)' },
        { en: '64 bytes (128 hex characters)', bn: '৬৪ বাইট (১২৮টি হেক্সাডেসিমাল অক্ষর)' }
      ],
      answer: 0,
      hint: {
        en: '12 bytes consisting of timestamp, random value, and counter.',
        bn: '১২ বাইট: টাইমস্ট্যাম্প, র্যান্ডম মান এবং কাউন্টার।'
      },
      explanation: {
        en: 'An ObjectId is composed of 12 binary bytes: 4 bytes timestamp, 5 bytes random value, and 3 bytes incrementing counter.',
        bn: 'ObjectId মোট ১২ বাইটের: ৪ বাইট সময়, ৫ বাইট র্যান্ডম মান এবং ৩ বাইট ইনক্রিমেন্টিং কাউন্টার।'
      }
    },
    {
      id: 'mng-doc-ex3',
      kind: 'mcq',
      topic: 'mongodb: elemMatch operator purpose',
      question: {
        en: 'What is the purpose of the $elemMatch operator when querying arrays of sub-documents?',
        bn: 'সাব-ডকুমেন্টের অ্যারেতে কুয়েরি করার সময় $elemMatch অপারেটরের মূল কাজ কী?'
      },
      options: [
        { en: 'It matches documents only when all query criteria are satisfied by the exact same array element', bn: 'সবকটি শর্ত হুবহু একই নির্দিষ্ট অ্যারে উপাদানের মধ্যে সত্য হলেই কেবল এটি মিল খুঁজে পায়' },
        { en: 'It sorts the array in descending alphabetical order', bn: 'অ্যারেকে বর্ণমালার বিপরীত ক্রমে সাজায়' },
        { en: 'It deletes all elements from the array', bn: 'অ্যারে থেকে সব উপাদান মুছে ফেলে' },
        { en: 'It converts the array into a string', bn: 'অ্যারেকে স্ট্রিংয়ে রূপান্তর করে' }
      ],
      answer: 0,
      hint: {
        en: 'Matches all conditions within the same array element.',
        bn: 'একই অ্যারে উপাদানের ভেতর সব শর্ত মেলায়।'
      },
      explanation: {
        en: '$elemMatch guarantees that multiple filtering criteria are met by at least one single embedded element, preventing false cross-element matches.',
        bn: '$elemMatch নিশ্চিত করে যে একই উপাদানের ভেতরেই যেন সবকটি শর্ত পূরণ হয়।'
      }
    }
  ],
  quiz: {
    id: 'mng-doc-quiz',
    title: { en: 'MongoDB Document Model & BSON Fundamentals Quiz', bn: 'MongoDB ডকুমেন্ট মডেল ও BSON ফান্ডামেন্টালস কুইজ' },
    questions: [
      {
        id: 'mdq1',
        kind: 'mcq',
        topic: 'mongodb: upsert flag behavior',
        question: {
          en: 'What occurs when an update operation specifies the option { upsert: true } and no document matches the filter?',
          bn: 'কোনো আপডেট অপারেশনে { upsert: true } দেওয়া থাকলে এবং ফিল্টারের সাথে কোনো ডকুমেন্ট না মিললে কী ঘটে?'
        },
        options: [
          { en: 'A new document is created and inserted using the filter and update fields', bn: 'ফিল্টার এবং আপডেটের মান মিলিয়ে ডাটাবেসে একটি নতুন ডকুমেন্ট তৈরি ও ইনসার্ট হয়' },
          { en: 'The operation throws a duplicate key error', bn: 'অপারেশনটি এরর দিয়ে থেমে যায়' },
          { en: 'All documents in the collection are updated', bn: 'কালেকশনের সব ডকুমেন্ট আপডেট হয়ে যায়' },
          { en: 'The collection is deleted automatically', bn: 'কালেকশনটি নিজে থেকেই মুছে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Upsert inserts a new document if none matches.',
          bn: 'কোনো ডকুমেন্ট না মিললে নতুন ডকুমেন্ট ঢুকিয়ে দেয়।'
        },
        explanation: {
          en: 'The term "upsert" is a portmanteau of UPDATE and INSERT. When no document matches the search query, MongoDB synthesizes and inserts a new record.',
          bn: 'আপসার্ট (Upsert) হলো আপডেট এবং ইনসার্টের সমন্বয়। কোনো রেকর্ড খুঁজে না পেলে মঙ্গোডিবি নতুন রেকর্ড সেভ করে।'
        }
      },
      {
        id: 'mdq2',
        kind: 'mcq',
        topic: 'mongodb: drop vs deleteMany performance',
        question: {
          en: 'Why is db.collection.drop() significantly faster than db.collection.deleteMany({}) when removing all records?',
          bn: 'সব রেকর্ড মুছে ফেলার সময় db.collection.deleteMany({})-এর চেয়ে db.collection.drop() অনেক দ্রুত কেন?'
        },
        options: [
          { en: 'drop() removes the entire storage file and index metadata without scanning or deleting individual documents row-by-row', bn: 'drop() প্রতিটি ডকুমেন্ট আলাদা আলাদা না মুছে সরাসরি সম্পূর্ণ স্টোরেজ ফাইল ও ইনডেক্স মেটাডেটা একবারে মুছে দেয়' },
          { en: 'deleteMany runs in memory while drop runs in the cloud', bn: 'deleteMany মেমরিতে চলে আর drop ক্লাউডে চলে' },
          { en: 'drop() encrypts the collection instead of deleting', bn: 'drop() ডিলিট না করে এনক্রিপ্ট করে' },
          { en: 'There is no performance difference between them', bn: 'উভয়ের পারফরম্যান্সে কোনো তফাৎ নেই' }
        ],
        answer: 0,
        hint: {
          en: 'drop() unlinks the storage files and indexes directly.',
          bn: 'drop() সরাসরি ফাইল ও ইনডেক্স মেটাডেটা সরিয়ে দেয়।'
        },
        explanation: {
          en: 'deleteMany({}) must iterate through every document and update indexes one by one. In contrast, drop() simply deletes the collection namespace and deallocates data extents in the storage engine.',
          bn: 'deleteMany প্রতি ডকুমেন্টে আলাদা অপারেশন চালায়, কিন্তু drop কালেকশনের পুরো মেটাডেটা এক নিমিষে ডিস্ক থেকে মুক্ত করে দেয়।'
        }
      },
      {
        id: 'mdq3',
        kind: 'mcq',
        topic: 'mongodb: bson maximum document size limit',
        question: {
          en: 'What is the absolute maximum size limit for a single BSON document in MongoDB?',
          bn: 'MongoDB-তে একটি একক BSON ডকুমেন্টের সর্বোচ্চ আকার কত?'
        },
        options: [
          { en: '16 MB', bn: '১৬ মেগাবাইট' },
          { en: '64 MB', bn: '৬৪ মেগাবাইট' },
          { en: '2 MB', bn: '২ মেগাবাইট' },
          { en: 'Unlimited', bn: 'কোনো সীমা নেই' }
        ],
        answer: 0,
        hint: {
          en: '16 megabytes.',
          bn: '১৬ মেগাবাইট।'
        },
        explanation: {
          en: 'MongoDB restricts single document sizes to 16 MB to prevent runaway memory usage during reads and writes.',
          bn: 'মেমরির অতিরিক্ত খরচ রোধে MongoDB প্রতিটি ডকুমেন্টের আকার ১৬ মেগাবাইটে সীমাবদ্ধ রেখেছে।'
        }
      },
      {
        id: 'mdq4',
        kind: 'mcq',
        topic: 'mongodb: atomic update operators',
        question: {
          en: 'Which atomic update operator is used to modify specific field values without overwriting or erasing the rest of the document?',
          bn: 'ডকুমেন্টের বাকি ফিল্ডগুলো নষ্ট না করে শুধুমাত্র নির্দিষ্ট কিছু ফিল্ড আপডেট করতে কোন অপারেটরটি ব্যবহৃত হয়?'
        },
        options: [
          { en: '$set', bn: '$set' },
          { en: '$replace', bn: '$replace' },
          { en: '$update', bn: '$update' },
          { en: '$put', bn: '$put' }
        ],
        answer: 0,
        hint: {
          en: 'The $set operator.',
          bn: '$set অপারেটর।'
        },
        explanation: {
          en: 'The $set operator replaces the value of a field with the specified value, leaving all unmentioned document fields untouched.',
          bn: '$set অপারেটর অন্য কোনো ফিল্ড ক্ষতিগ্রস্ত না করে শুধু নির্দিষ্ট ফিল্ডের মান পরিবর্তন করে।'
        }
      }
    ]
  }
};
