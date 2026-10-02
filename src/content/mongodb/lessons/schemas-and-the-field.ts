import type { Lesson } from '../../../lib/types';

export const SchemasAndTheFieldLesson: Lesson = {
  slug: 'schemas-and-the-field',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Schema Design: Embedding, Referencing & Validation',
    bn: 'MongoDB স্কিমা ডিজাইন: এমবেডিং, রেফারেন্সিং ও ভ্যালিডেশন'
  },
  summary: {
    en: 'Master MongoDB document modeling and schema architecture across 10 structured topics. Understand the golden rule: data accessed together should be stored together. Compare Embedding (denormalization) with Referencing (normalization). Avoid the 16 MB document limit in unbounded one-to-many relationships. Master the Subset and Extended Reference patterns. Enforce database-level schema constraints using $jsonSchema. Configure validationAction and validationLevel. Implement polymorphic documents and schema versioning.',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB ডকুমেন্ট মডেলিং এবং স্কিমা আর্কিটেকচার আয়ত্ত করুন। মূল নিয়মটি শিখুন: যেসব ডেটা একসাথে পড়া হয় সেগুলোকে একসাথেই সংরক্ষণ করতে হয়। এমবেডিং (ডিনরমালাইজেশন) বনাম রেফারেন্সিং (নরমালাইজেশন)-এর তুলনা বুঝুন। সীমাহীন এক-থেকে-বহু সম্পর্কে ১৬ মেগাবাইট সাইজ লিমিট এড়ানোর উপায় জানুন। সাবসেট ও এক্সটেন্ডেড রেফারেন্স প্যাটার্ন আয়ত্ত করুন। $jsonSchema দিয়ে ডাটাবেস স্তরে শর্ত নিশ্চিত করুন। validationAction ও validationLevel নির্ধারণ করুন এবং স্কিমা ভার্সনিং বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'aggs-and-the-pipe',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Aggregation Framework: Pipelines, Stages & Lookup Joins',
      bn: 'MongoDB অ্যাগ্রিগেশন ফ্রেমওয়ার্ক: পাইপলাইন, স্টেজ ও লুকআপ জয়েন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Golden Rule of MongoDB Data Modeling', bn: '১. MongoDB ডেটা মডেলিংয়ের স্বর্ণালী মূলনীতি' } },
    {
      type: 'para',
      text: {
        en: 'When you design schemas for applications, relational databases split data across dozens of isolated tables to eliminate redundancy. In MongoDB, you design schemas around access patterns rather than entity theory. The foundational rule for your data model states: Data that is accessed together should be stored together.',
        bn: 'অ্যাপ্লিকেশনের ডেটা মডেল ডিজাইন করার সময় ঐতিহ্যবাহী রিলেশনাল ডাটাবেস টেবিলগুলোকে নানা ভাগে ভাগ করে রাখে। তবে MongoDB-তে আপনাকে অ্যাপ্লিকেশনের ব্যবহারের ধরন মাথায় রেখে স্কিমা তৈরি করতে হয়। আপনার ডেটা মডেলের মূল নিয়মটি মনে রাখুন: যেসব ডেটা একসাথে অ্যাক্সেস করা হয় সেগুলোকে একসাথেই সংরক্ষণ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SQL MINDSET: "How are entities structured in abstract reality?"
-> Splits order into 4 tables: orders, order_items, shipping_addresses, billing_addresses
-> Requires 3 relational JOINs every time a user views their order receipt!

MONGODB MINDSET: "How does the application read and write this data?"
-> Stores the entire receipt inside a single self-contained BSON document
-> Retrieves everything in a single sub-millisecond sequential disk seek!`,
      caption: {
        en: 'MongoDB prioritizes application read/write query patterns over theoretical entity isolation.',
        bn: 'মঙ্গোডিবি তাত্ত্বিক বিভাজনের চেয়ে অ্যাপ্লিকেশনের পড়ার ও লেখার গতিকে অগ্রাধিকার দেয়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Embedding vs Referencing Architectural Decision Model', bn: 'এমবেডিং বনাম রেফারেন্সিং সিদ্ধান্ত মডেল' },
      svg: `<svg viewBox="0 0 680 200" font-family="system-ui, sans-serif" role="img" aria-label="Embedding versus Referencing comparison in MongoDB">
<g transform="translate(20, 20)">
<rect x="0" y="0" width="310" height="160" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="20" y="30" font-size="13" font-weight="700" fill="#38bdf8">EMBEDDING (Denormalization)</text>
<text x="20" y="55" font-size="11" fill="#cbd5e1">1:1 or 1:Few bounded relationships</text>
<rect x="20" y="70" width="270" height="70" rx="6" fill="#1e293b"/>
<text x="35" y="92" font-size="10" fill="#94a3b8">Order Document {</text>
<text x="50" y="108" font-size="10" fill="#4ade80">items: [ { name: "Keyb" }, { name: "Mouse" } ]</text>
<text x="35" y="125" font-size="10" fill="#94a3b8">} -> Single Atomic Read!</text>
</g>

<g transform="translate(350, 20)">
<rect x="0" y="0" width="310" height="160" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="20" y="30" font-size="13" font-weight="700" fill="#fbbf24">REFERENCING (Normalization)</text>
<text x="20" y="55" font-size="11" fill="#cbd5e1">1:Many unbounded relationships</text>
<rect x="20" y="70" width="270" height="70" rx="6" fill="#1e293b"/>
<text x="35" y="92" font-size="10" fill="#94a3b8">User Document { _id: 101 }</text>
<text x="35" y="108" font-size="10" fill="#fb923c">Post { _id: 1, authorId: 101 }</text>
<text x="35" y="125" font-size="10" fill="#94a3b8">Prevents breaching 16 MB limit!</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Embedding (Denormalization): 1:1 and 1:Few Relationships', bn: '২. এমবেডিং (ডিনরমালাইজেশন): ১:১ এবং ১:কয়েকটি সম্পর্ক' } },
    {
      type: 'para',
      text: {
        en: 'Embedding stores child sub-documents directly inside the parent document. It is the ideal architecture for 1:1 relationships (e.g. user settings) and 1:Few bounded relationships (e.g. an order with up to 20 line items). Embedding guarantees atomic single-document updates and lightning-fast reads without joins.',
        bn: 'এমবেডিং পদ্ধতিতে চাইল্ড ডেটাকে সরাসরি মূল প্যারেন্ট ডকুমেন্টের ভেতরে রাখা হয়। এটি ১:১ সম্পর্ক (যেমন ইউজার সেটিংস) এবং ১:কয়েকটি সীমিত সম্পর্কের (যেমন একটি অর্ডারের সর্বোচ্চ ২০টি পণ্য) জন্য আদর্শ। এমবেডিংয়ের ফলে কোনো জয়েন ছাড়াই এক নিমিষে সম্পূর্ণ ডেটা পড়া এবং অ্যাটমিক আপডেট করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Embedded 1:Few relationship (Order with bounded line items):
const order = {
  _id: new ObjectId(),
  customerId: 1042,
  createdAt: new Date(),
  // Embedded line items:
  items: [
    { productId: 1, name: "Keyboard", price: 3500, qty: 1 },
    { productId: 2, name: "Mousepad", price: 600, qty: 2 }
  ],
  totalAmount: 4700
};

console.log("Embedded items retrieved in a single read seek without relational JOINs");
// Output: Embedded items retrieved in a single read seek without relational JOINs`,
      caption: {
        en: 'Embedded documents provide atomic updates and eliminate query-time relational joins.',
        bn: 'এমবেডেড ডকুমেন্ট একবারে সম্পূর্ণ ডেটা আনে এবং রিলেশনাল জয়েন দূর করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Referencing (Normalization): Unbounded Relationships', bn: '৩. রেফারেন্সিং (নরমালাইজেশন): সীমাহীন সম্পর্ক' } },
    {
      type: 'para',
      text: {
        en: 'Embedding fails when a relationship is unbounded. An author with millions of blog comments or an IoT device generating endless sensor readings will rapidly breach the 16 MB document size ceiling. Unbounded one-to-many relationships must be modeled using Referencing.',
        bn: 'সম্পর্ক যখন সীমাহীন হয় তখন এমবেডিং পদ্ধতি অকেজো হয়ে পড়ে। একজন লেখকের পোস্টে লাখ লাখ মন্তব্য বা একটি ডিভাইসের কোটি কোটি সেন্সর রিডিং এমবেড করতে গেলে নিমিষেই ১৬ মেগাবাইট লিমিট পার হয়ে যাবে। এ ধরনের সীমাহীন সম্পর্কে রেফারেন্সিং ব্যবহার করা বাধ্যতামূলক।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ CATASTROPHIC DESIGN (Unbounded Array in Parent Document):
{
  "_id": 101,
  "sensorId": "thermo_99",
  "readings": [ ... 50,000,000 items ... ] // CRASH! Exceeds 16 MB limit!
}

✅ RESILIENT REFERENCED DESIGN (Parent-Referenced Children):
Collection: "readings"
{ "_id": 1, "sensorId": "thermo_99", "temp": 24.5, "time": "2026-09-26T10:00:00Z" }
{ "_id": 2, "sensorId": "thermo_99", "temp": 24.7, "time": "2026-09-26T10:01:00Z" }
(Child documents point back to the parent; table scales to billions of records safely!)`,
      caption: {
        en: 'Parent-referencing accommodates infinite children without risking document size limits.',
        bn: 'প্যারেন্ট-রেফারেন্সিং ডকুমেন্টের আকারের ঝুঁকি ছাড়াই কোটি কোটি চাইল্ড রেকর্ড ধারণ করতে পারে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Subset Pattern: Mitigating Massive Document Bloat', bn: '৪. সাবসেট প্যাটার্ন: বিশাল ডকুমেন্টের ফাঁপা রোধ' } },
    {
      type: 'para',
      text: {
        en: 'When a product has 10,000 reviews, users browsing the product page only look at the most recent 5 reviews. The Subset Pattern embeds the top 5 most recent reviews directly inside the product document for instant rendering, while referencing the complete 10,000 reviews in a separate collection.',
        bn: 'কোনো পণ্যের ১০,০০০ রিভিউ থাকলেও একজন সাধারণ ক্রেতা প্রথমে শুধু সর্বশেষ ৫টি রিভিউ দেখতে চান। সাবসেট প্যাটার্ন (Subset Pattern) দ্রুত পেজ লোডের জন্য মূল প্রোডাক্ট ডকুমেন্টে শুধু সর্বশেষ ৫টি রিভিউ এমবেড করে রাখে এবং বাকি সব রিভিউ আলাদা কালেকশনে রেফারেন্স হিসেবে রেখে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Subset Pattern implementation:
const productWithSubset = {
  _id: 8842,
  title: "Mechanical Keyboard",
  price: 4500,
  totalReviews: 10492,
  // Embed only the most recent 3 reviews for instant UI rendering:
  recentReviews: [
    { author: "Tanvir", rating: 5, snippet: "Great switches!" },
    { author: "Nadia", rating: 4, snippet: "Very responsive." }
  ]
};

console.log("Subset pattern delivers instant primary page load with zero extra queries");
// Output: Subset pattern delivers instant primary page load with zero extra queries`,
      caption: {
        en: 'The Subset Pattern embeds frequently accessed items while archiving the long tail separately.',
        bn: 'সাবসেট প্যাটার্ন বহুল ব্যবহৃত ডেটা এমবেড রাখে এবং বাকি বিশাল ডেটা আলাদা রাখে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Extended Reference Pattern: Caching Read Keys', bn: '৫. এক্সটেন্ডেড রেফারেন্স প্যাটার্ন: প্রয়োজনীয় তথ্য ক্যাশ করা' } },
    {
      type: 'para',
      text: {
        en: 'In an e-commerce order, copying only the customer’s name and shipping address into the order document avoids querying the full customer record on every order lookup. This Extended Reference pattern duplicates immutable or slow-changing fields to optimize frequent read operations.',
        bn: 'অর্ডার দেখার সময় বারবার কাস্টমার টেবিল জয়েন করা এড়াতে অর্ডারের ভেতরেই গ্রাহকের নাম ও ঠিকানা কপি করে রেখে দেওয়া যায়। একে এক্সটেন্ডেড রেফারেন্স প্যাটার্ন বলে। এটি অপরিবর্তনশীল কিছু তথ্য মূল ডকুমেন্টে রেখে ঘনঘন রিড অপারেশনের গতি বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `Collection "orders":
{
  "_id": 501,
  "total": 3500,
  // Extended Reference: Keep customerId + frequently read customer fields
  "customer": {
    "id": 1042,
    "name": "Rahim Ahmed",
    "phone": "+8801700000000"
  }
}
(Order view requires NO lookup to display customer contact info!)`,
      caption: {
        en: 'Extended references duplicate frequently accessed foreign attributes to bypass lookup joins.',
        bn: 'এক্সটেন্ডেড রেফারেন্স বহুল প্রয়োজনীয় তথ্য কপি করে রেখে লুকআপ জয়েনের প্রয়োজন মেটায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Schema Validation with $jsonSchema: Enforcing Integrity', bn: '৬. $jsonSchema দিয়ে স্কিমা ভ্যালিডেশন: ডেটার শুদ্ধতা নিশ্চিতকরণ' } },
    {
      type: 'para',
      text: {
        en: 'While MongoDB is schema-flexible, production enterprise applications require data integrity. MongoDB supports collection-level schema validation using the standard $jsonSchema operator. The database rejects any document that does not satisfy required fields, data types, and boundary rules.',
        bn: 'MongoDB নমনীয় হলেও প্রোডাকশন সিস্টেমে ডেটার শুদ্ধতা বজায় রাখা জরুরি। MongoDB কালেকশন স্তরে $jsonSchema অপারেটর ব্যবহার করে কঠোর ভ্যালিডেশন সমর্থন করে। প্রয়োজনীয় ফিল্ড অনুপস্থিত থাকলে বা ভুল ডাটা টাইপ পাঠানো হলে ডাটাবেস নিজে থেকেই ওই ডকুমেন্ট বাতিল করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Enforcing strict $jsonSchema on user collection:
async function createValidatedUsersCollection(db) {
  await db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["email", "age", "status"],
        properties: {
          email: {
            bsonType: "string",
            pattern: "^.+@.+\\\\..+$",
            description: "Must be a valid email string"
          },
          age: {
            bsonType: "int",
            minimum: 18,
            description: "Age must be an integer >= 18"
          },
          status: {
            enum: ["active", "suspended", "pending"],
            description: "Status must match one of the enum values"
          }
        }
      }
    }
  });
}`,
      caption: {
        en: 'The $jsonSchema validator guarantees that all inserted records adhere to strict business rules.',
        bn: '$jsonSchema ভ্যালিডেটর নিশ্চিত করে যে প্রতিটি রেকর্ড কঠোর নিয়ম মেনে ডাটাবেসে ঢুকবে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Validation Action & Level: strict vs moderate & error vs warn', bn: '৭. ভ্যালিডেশন অ্যাকশন ও লেভেল: strict বনাম moderate' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB provides two configuration knobs for schema validation: 1) validationLevel: strict checks all inserts and updates, while moderate applies checks only to existing valid documents. 2) validationAction: error rejects invalid writes, while warn logs the violation in diagnostic logs while allowing the insert to succeed.',
        bn: 'মঙ্গোডিবি স্কিমা ভ্যালিডেশনের জন্য দুটি গুরুত্বপূর্ণ কনফিগারেশন দেয়: ১) validationLevel: strict দিলে নতুন ও পুরনো সব ডেটা যাচাই হয়, আর moderate দিলে শুধু বিদ্যমান বৈধ ডকুমেন্টে নিয়ম চলে। ২) validationAction: error দিলে ভুল ডেটা সরাসরি বাতিল হয়, আর warn দিলে ভুলের সতর্কতা লগে লিখে ডেটা ঢুকতে দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Configuring gentle migration validation mode:
await db.command({
  collMod: "orders",
  validator: { $jsonSchema: { /* schema rules */ } },
  validationLevel: "moderate", // Do not break un-migrated legacy records!
  validationAction: "warn"     // Log violations during rollout period
});

console.log("Validation mode configured safely for live database migration");
// Output: Validation mode configured safely for live database migration`,
      caption: {
        en: 'Moderate and warn modes enable safe, zero-downtime schema evolution on live databases.',
        bn: 'Moderate এবং warn মোড চলমান ডাটাবেসে কোনো বিঘ্ন ছাড়াই স্কিমা আপগ্রেড করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Polymorphic Document Modeling: The Type Discriminator', bn: '৮. পলিমরফিক ডকুমেন্ট মডেলিং: টাইপ ডিসক্রিমিনেটর' } },
    {
      type: 'para',
      text: {
        en: 'In e-commerce, products have completely different attributes: books have ISBN and page count; clothing has size and color. Rather than creating 50 separate tables, MongoDB stores all products in a single collection using a polymorphic schema with a shared type discriminator field.',
        bn: 'ই-কমার্সে বিভিন্ন পণ্যের বৈশিষ্ট্য সম্পূর্ণ ভিন্ন হয়: বইয়ের থাকে ISBN ও পৃষ্ঠা সংখ্যা, আর কাপড়ের থাকে সাইজ ও রঙ। এর জন্য ৫০টি আলাদা টেবিল না বানিয়ে MongoDB একটিমাত্র কালেকশনে সব পণ্য সংরক্ষণ করে। একটি সাধারণ type ফিল্ড দেখে বোঝা যায় পণ্যটি কোন শ্রেণীর।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Polymorphic product documents sharing one collection:
const book = {
  _id: 1,
  type: "book", // Discriminator
  title: "Clean Code",
  price: 3200,
  isbn: "978-0132350884",
  pages: 464
};

const shirt = {
  _id: 2,
  type: "apparel", // Discriminator
  title: "Cotton T-Shirt",
  price: 800,
  size: "XL",
  color: "Navy Blue"
};

console.log("Polymorphic products queried seamlessly under one unified collection");
// Output: Polymorphic products queried seamlessly under one unified collection`,
      caption: {
        en: 'Polymorphic schemas unify heterogeneous entities under a common query interface.',
        bn: 'পলিমরফিক স্কিমা ভিন্নধর্মী ডেটাকে একটি সাধারণ সার্চ ইন্টারফেসে একীভূত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. The Schema Versioning Pattern: Zero-Downtime Migrations', bn: '৯. স্কিমা ভার্সনিং প্যাটার্ন: জিরো-ডাউনটাইম ডেটা মাইগ্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'In relational databases, ALTER TABLE statements lock massive tables during migrations. In MongoDB, documents adopt the Schema Versioning Pattern: each document embeds a schemaVersion: 2 field. Application code handles both legacy v1 and modern v2 documents concurrently, upgrading documents lazily on write.',
        bn: 'রিলেশনাল ডাটাবেসে ALTER TABLE চালাতে গেলে বিশাল টেবিল লক হয়ে যায়। MongoDB-তে স্কিমা ভার্সনিং প্যাটার্ন ব্যবহার করা হয়: প্রতিটি ডকুমেন্টে schemaVersion: 2 ফিল্ড থাকে। অ্যাপ্লিকেশন একই সাথে পুরনো v1 ও আধুনিক v2 ডকুমেন্ট বুঝে নেয় এবং ডেটা আপডেটের সময় নিজে থেকেই নতুন ভার্সনে রূপান্তর করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Lazy schema upgrade on read/write:
function normalizeUser(doc) {
  if (doc.schemaVersion === 2) return doc;

  // Transform legacy v1 (fullName) to v2 (firstName, lastName):
  const [first, ...rest] = (doc.fullName || "").split(" ");
  return {
    _id: doc._id,
    firstName: first,
    lastName: rest.join(" "),
    schemaVersion: 2
  };
}

const legacy = { _id: 10, fullName: "Tariqul Islam", schemaVersion: 1 };
console.log("Upgraded document to v2:", normalizeUser(legacy));
// Output: Upgraded document to v2: { _id: 10, firstName: 'Tariqul', lastName: 'Islam', schemaVersion: 2 }`,
      caption: {
        en: 'The Schema Versioning Pattern allows gradual, non-blocking document upgrades.',
        bn: 'স্কিমা ভার্সনিং প্যাটার্ন কোনো টেবিল লক না করে ধীরে ধীরে ডকুমেন্ট আপগ্রেড করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Production Mongoose Schemas in Node.js', bn: '১০. Node.js-এ প্রোডাকশন Mongoose স্কিমা বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Mongoose provides application-level schema enforcement, validation middleware, and automated indexing for Node.js developers.',
        bn: 'Mongoose Node.js ডেভেলপারদের জন্য অ্যাপ্লিকেশন স্তরে স্কিমা তৈরি, ভ্যালিডেশন মিডলওয়্যার এবং স্বয়ংক্রিয় ইনডেক্স তৈরির সুবিধা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Complete production Mongoose schema:
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }
  }],
  status: { type: String, enum: ["pending", "paid", "shipped"], default: "pending" },
  total: { type: Number, required: true }
}, { timestamps: true });

console.log("Production Mongoose schema initialized with embedded arrays and references");
// Output: Production Mongoose schema initialized with embedded arrays and references`,
      caption: {
        en: 'Mongoose unites embedded sub-documents and referenced entities into a type-safe schema.',
        bn: 'Mongoose এমবেডেড ডেটা ও রেফারেন্সকে একটি সুরক্ষিত টাইপ-সেফ স্কিমায় রূপ দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-sch-ex1',
      kind: 'predict',
      topic: 'mongodb: schema validation operator',
      question: {
        en: 'Which standard MongoDB validation operator is used inside collection creation validators to enforce JSON Schema rules?',
        bn: 'MongoDB কালেকশনে JSON Schema নিয়ম প্রয়োগ করতে কোন স্ট্যান্ডার্ড ভ্যালিডেশন অপারেটরটি ব্যবহৃত হয়?'
      },
      code: `/* Collection validator operator: */
/* validator: { $__________: { bsonType: "object", ... } } */`,
      answer: 'jsonSchema',
      accept: ['jsonSchema', '$jsonSchema'],
      hint: {
        en: '$jsonSchema operator.',
        bn: '$jsonSchema অপারেটর।'
      },
      explanation: {
        en: '$jsonSchema allows MongoDB to validate documents against the IETF JSON Schema standard natively.',
        bn: '$jsonSchema মঙ্গোডিবিকে কালেকশন স্তরে আন্তর্জাতিক JSON Schema শর্ত যাচাই করতে দেয়।'
      }
    },
    {
      id: 'mng-sch-ex2',
      kind: 'mcq',
      topic: 'mongodb: data modeling golden rule',
      question: {
        en: 'What is the foundational golden rule of data modeling in MongoDB?',
        bn: 'MongoDB ডেটা মডেলিংয়ের প্রধান স্বর্ণালী মূলনীতি কোনটি?'
      },
      options: [
        { en: 'Data that is accessed together should be stored together', bn: 'যেসব ডেটা একসাথে অ্যাক্সেস করা হয় সেগুলোকে একসাথেই সংরক্ষণ করতে হয়' },
        { en: 'Always normalize data into at least 15 separate tables', bn: 'সব সময় ডেটাকে অন্তত ১৫টি আলাদা টেবিলে ভাগ করা' },
        { en: 'Never store arrays in documents', bn: 'ডকুমেন্টে কখনো অ্যারে না রাখা' },
        { en: 'Store everything in a single giant document', bn: 'সব ডেটা একটিমাত্র দানবীয় ডকুমেন্টে রাখা' }
      ],
      answer: 0,
      hint: {
        en: 'Store data accessed together in the same document.',
        bn: 'একসাথে ব্যবহৃত ডেটা একসাথেই রাখুন।'
      },
      explanation: {
        en: 'Designing schemas around application read/write access patterns maximizes performance and minimizes disk seeks.',
        bn: 'অ্যাপ্লিকেশনের ব্যবহারের ওপর ভিত্তি করে ডেটা মডেল করলে পারফরম্যান্স সর্বোচ্চ হয়।'
      }
    },
    {
      id: 'mng-sch-ex3',
      kind: 'mcq',
      topic: 'mongodb: subset pattern benefit',
      question: {
        en: 'What architectural problem does the Subset Pattern solve for entities with thousands of related items (like product reviews)?',
        bn: 'হাজার হাজার সম্পর্কযুক্ত ডেটাযুক্ত ক্ষেত্রে (যেমন পণ্যের রিভিউ) সাবসেট প্যাটার্ন কোন সমস্যা সমাধান করে?'
      },
      options: [
        { en: 'It prevents document bloat by embedding only the few most recent items for instant display while archiving the rest separately', bn: 'এটি মাত্র কয়েকটি সাম্প্রতিক ডেটা এমবেড রেখে বাকিগুলো আলাদা কালেকশনে সরিয়ে ডকুমেন্ট ফাঁপা হওয়া রোধ করে' },
        { en: 'It deletes older reviews automatically', bn: 'পুরনো রিভিউ নিজে থেকেই মুছে দেয়' },
        { en: 'It converts MongoDB to MySQL', bn: 'মঙ্গোডিবিকে মাইএসকিউএলে রূপান্তর করে' },
        { en: 'It encrypts customer passwords', bn: 'পাসওয়ার্ড এনক্রিপ্ট করে' }
      ],
      answer: 0,
      hint: {
        en: 'Embeds recent items and archives the rest.',
        bn: 'সাম্প্রতিক ডেটা এমবেড রাখে এবং বাকিগুলো আলাদা রাখে।'
      },
      explanation: {
        en: 'The Subset pattern avoids the 16 MB document limit by keeping primary documents small and fast while preserving complete history in a separate collection.',
        bn: 'সাবসেট প্যাটার্ন প্রাথমিক ডকুমেন্ট হালকা রেখে পেজ লোড দ্রুত করে এবং ১৬ মেগাবাইট লিমিট এড়ায়।'
      }
    }
  ],
  quiz: {
    id: 'mng-sch-quiz',
    title: { en: 'MongoDB Schema Architecture & Validation Quiz', bn: 'MongoDB স্কিমা আর্কিটেকচার ও ভ্যালিডেশন কুইজ' },
    questions: [
      {
        id: 'msq1',
        kind: 'mcq',
        topic: 'mongodb: embedding vs referencing decision',
        question: {
          en: 'When should an application use Referencing (normalization) instead of Embedding in MongoDB?',
          bn: 'MongoDB-তে কখন এমবেডিংয়ের বদলে রেফারেন্সিং (নরমালাইজেশন) ব্যবহার করা উচিত?'
        },
        options: [
          { en: 'For unbounded one-to-many relationships where arrays would eventually exceed the 16 MB document limit', bn: 'সীমাহীন সম্পর্কের ক্ষেত্রে যেখানে অ্যারে ১৬ মেগাবাইট সীমা অতিক্রম করবে' },
          { en: 'Whenever the collection contains more than 10 documents', bn: 'কালেকশনে ১০টির বেশি ডকুমেন্ট থাকলে' },
          { en: 'Only when using Windows operating systems', bn: 'শুধুমাত্র উইন্ডোজ অপারেটিং সিস্টেমে' },
          { en: 'Referencing is never recommended in MongoDB', bn: 'মঙ্গোডিবিতে রেফারেন্সিং কখনোই অনুমোদিত নয়' }
        ],
        answer: 0,
        hint: {
          en: 'Use referencing for unbounded one-to-many relationships.',
          bn: 'সীমাহীন এক-থেকে-বহু সম্পর্কে রেফারেন্সিং ব্যবহার করুন।'
        },
        explanation: {
          en: 'Unbounded arrays cause documents to continuously grow until they crash against the 16 MB BSON ceiling. Referencing keeps child documents in a dedicated scalable collection.',
          bn: 'সীমাহীন অ্যারে বাড়তে বাড়তে ১৬ মেগাবাইট সীমা ভেঙে ক্র্যাশ করে, তাই রেফারেন্সিং ব্যবহার করা আবশ্যক।'
        }
      },
      {
        id: 'msq2',
        kind: 'mcq',
        topic: 'mongodb: validation action options',
        question: {
          en: 'What is the effect of setting "validationAction: warn" in a MongoDB collection schema validator?',
          bn: 'MongoDB কালেকশনের স্কিমা ভ্যালিডেটরে "validationAction: warn" দিলে কী ঘটে?'
        },
        options: [
          { en: 'Invalid documents are allowed to be saved, but validation failure warnings are recorded in the server diagnostic log', bn: 'ভুল ডকুমেন্টটিও সেভ হতে দেওয়া হয়, কিন্তু ভুলের একটি সতর্কতা সার্ভারের লগে লিখে রাখা হয়' },
          { en: 'The database rejects all invalid inserts', bn: 'সব ভুল ডেটা বাতিল করে দেওয়া হয়' },
          { en: 'The collection drops immediately', bn: 'কালেকশন মুছে যায়' },
          { en: 'All data is converted to uppercase text', bn: 'সব ডেটা বড় হাতের অক্ষরে বদলে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Allows insert but logs diagnostic warning.',
          bn: 'ডেটা সেভ হতে দেয় কিন্তু লগে সতর্ক করে।'
        },
        explanation: {
          en: 'validationAction: warn permits non-conforming writes to succeed while alerting operators in logs, ideal for phased zero-downtime schema migrations.',
          bn: 'warn অপশনটি ডেটা না আটকে লগে লিখে রাখে, যা লাইভ সার্ভারে ধীরে ধীরে স্কিমা পরিবর্তনের জন্য দারুণ কার্যকর।'
        }
      },
      {
        id: 'msq3',
        kind: 'mcq',
        topic: 'mongodb: schema validation operator',
        question: {
          en: 'Which operator is specified inside collection validator configurations to enforce JSON Schema standards?',
          bn: 'কালেকশন ভ্যালিডেটর কনফিগারেশনে JSON Schema মান প্রয়োগ করতে কোন অপারেটরটি ব্যবহার করা হয়?'
        },
        options: [
          { en: '$jsonSchema', bn: '$jsonSchema' },
          { en: '$validate', bn: '$validate' },
          { en: '$schema', bn: '$schema' },
          { en: '$typeCheck', bn: '$typeCheck' }
        ],
        answer: 0,
        hint: {
          en: '$jsonSchema operator.',
          bn: '$jsonSchema অপারেটর।'
        },
        explanation: {
          en: 'MongoDB uses the $jsonSchema operator in validator options to validate document schemas natively.',
          bn: '$jsonSchema অপারেটর কালেকশনে সেভ হওয়া ডকুমেন্টের স্কিমা শর্ত যাচাই করে।'
        }
      },
      {
        id: 'msq4',
        kind: 'mcq',
        topic: 'mongodb: subset pattern architectural concept',
        question: {
          en: 'What core architectural concept defines the Subset Pattern in MongoDB schema modeling?',
          bn: 'MongoDB স্কিমা মডেলিংয়ে সাবসেট প্যাটার্নের মূল নীতি কোনটি?'
        },
        options: [
          { en: 'Embedding the few most frequently accessed elements in the primary document while storing the full history in a secondary collection', bn: 'সবচেয়ে বেশি ব্যবহৃত কয়েকটি উপাদান মূল ডকুমেন্টে এমবেড রাখা এবং বাকি সম্পূর্ণ ইতিহাস আলাদা কালেকশনে রাখা' },
          { en: 'Creating 10 copies of every document', bn: 'প্রতিটি ডকুমেন্টের ১০টি কপি বানানো' },
          { en: 'Replacing arrays with comma-separated strings', bn: 'অ্যারের বদলে কমা দেওয়া স্ট্রিং রাখা' },
          { en: 'Deleting records every 5 minutes', bn: 'প্রতি ৫ মিনিটে ডেটা মুছে দেওয়া' }
        ],
        answer: 0,
        hint: {
          en: 'Embeds frequent items in primary doc; archives the rest.',
          bn: 'বহুল ব্যবহৃত ডেটা মূল ডকুমেন্টে রাখে, বাকিগুলো আলাদা রাখে।'
        },
        explanation: {
          en: 'The Subset Pattern satisfies the 95% read access pattern with zero joins while storing the remaining 5% of unbounded data separately.',
          bn: 'সাবসেট প্যাটার্ন ৯৫% রিড কুয়েরি কোনো জয়েন ছাড়াই দ্রুত মেটায় এবং বাকি ৫% ডেটা আলাদা কালেকশনে রাখে।'
        }
      }
    ]
  }
};
