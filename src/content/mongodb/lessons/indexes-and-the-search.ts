import type { Lesson } from '../../../lib/types';

export const IndexesAndTheSearchLesson: Lesson = {
  slug: 'indexes-and-the-search',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Indexing: ESR Rule, Compound Keys & Text Search',
    bn: 'MongoDB ইনডেক্সিং: ESR নিয়ম, কম্পাউন্ড কি ও টেক্সট সার্চ'
  },
  summary: {
    en: 'Master database performance and search optimization in MongoDB across 10 structured topics. Understand WiredTiger B-tree lookup structures, comparing COLLSCAN table scans with IXSCAN fast scans. Master compound keys using the golden ESR rule (Equality, Sort, Range). Leverage prefix subsets effectively. Map array elements with multikey mechanisms. Configure partial filters, TTL auto-expiration, and unique constraints. Run full-text search with textScore ranking. Achieve zero-disk covered queries, diagnose slow queries with explain("executionStats"), and audit write amplification.',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB-র কুয়েরি পারফরম্যান্স এবং সার্চ অপ্টিমাইজেশন আয়ত্ত করুন। ওয়্যার্ডটাইগার বি-ট্রি আর্কিটেকচার বুঝে COLLSCAN বনাম IXSCAN-এর পার্থক্য জানুন। সুপরিচিত ESR নিয়ম (Equality, Sort, Range) মেনে কম্পাউন্ড কি সাজান। প্রিফিক্সের সঠিক ব্যবহার শিখুন। মাল্টিকি পদ্ধতিতে অ্যারের উপাদান খুঁজুন। পার্শিয়াল ফিল্টার, TTL স্বয়ংক্রিয় ডেটা ডিলিট এবং ইউনিক শর্ত কনফিগার করুন। textScore দিয়ে ফুল-টেক্সট সার্চ চালান। totalDocsExamined শূন্য করে কাভার্ড কুয়েরি অর্জন করুন, explain("executionStats") দিয়ে স্লো কুয়েরি বিশ্লেষণ করুন এবং মেমরি খরচ নিয়ন্ত্রণ করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'replicas-and-the-set',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Replica Sets: High Availability, Elections & Write Concerns',
      bn: 'MongoDB রেপ্লিকা সেট: হাই অ্যাভেইল্যাবিলিটি, নির্বাচন ও রাইট কনসার্ন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Index Architecture & The B-Tree Engine: COLLSCAN vs IXSCAN', bn: '১. ইনডেক্স আর্কিটেকচার ও বি-ট্রি ইঞ্জিন: COLLSCAN বনাম IXSCAN' } },
    {
      type: 'para',
      text: {
        en: 'Without an index, MongoDB must perform a collection scan (COLLSCAN), reading every single document from disk sequentially to satisfy a query. An index creates an ordered B-tree data structure in RAM pointing to document storage locations. This enables an index scan (IXSCAN), jumping directly to matching records in logarithmic O(log N) time.',
        bn: 'ইনডেক্স ছাড়া কোনো কুয়েরি চালালে MongoDB-কে ডিস্ক থেকে পুরো কালেকশনের প্রতিটি ডকুমেন্ট ক্রমান্বয়ে পড়তে হয়, যাকে কালেকশন স্ক্যান (COLLSCAN) বলে। ইনডেক্স তৈরি করলে র‍্যামে একটি সুসংগঠিত বি-ট্রি (B-tree) ডেটা স্ট্রাকচার তৈরি হয়। এর ফলে ডাটাবেস সম্পূর্ণ কালেকশন না ঘেঁটে ইনডেক্স স্ক্যান (IXSCAN) এর মাধ্যমে O(log N) গতিতে সরাসরি নির্দিষ্ট ডকুমেন্টে পৌঁছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `QUERY: db.users.find({ email: "user@test.com" })

WITHOUT INDEX (COLLSCAN):
Reads 5,000,000 documents sequentially from disk -> 450 ms latency!

WITH INDEX (IXSCAN on email):
Traverses B-Tree in RAM: 3 hops -> 1 index key read -> 1 ms latency!`,
      caption: {
        en: 'Index scans replace expensive linear disk scans with fast logarithmic memory lookups.',
        bn: 'ইনডেক্স স্ক্যান ধীরগতির ডিস্ক স্ক্যানের বদলে বিদ্যুৎগতির মেমরি ট্রাভার্সাল নিশ্চিত করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'COLLSCAN Table Scan vs IXSCAN B-Tree Index Lookup', bn: 'COLLSCAN বনাম IXSCAN অনুসন্ধান মডেল' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="COLLSCAN versus IXSCAN index lookup comparison">
<g transform="translate(20, 20)">
<rect x="0" y="0" width="310" height="140" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
<text x="20" y="30" font-size="13" font-weight="700" fill="#f87171">COLLSCAN (Sequential Disk Scan)</text>
<text x="20" y="55" font-size="11" fill="#cbd5e1">Scans 5,000,000 documents one by one</text>
<rect x="20" y="70" width="270" height="50" rx="4" fill="#1e293b"/>
<text x="35" y="92" font-size="10" fill="#fca5a5">Disk I/O: High latency (~450 ms)</text>
<text x="35" y="108" font-size="10" fill="#94a3b8">totalDocsExamined: 5,000,000</text>
</g>

<g transform="translate(350, 20)">
<rect x="0" y="0" width="310" height="140" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="20" y="30" font-size="13" font-weight="700" fill="#4ade80">IXSCAN (B-Tree Memory Seek)</text>
<text x="20" y="55" font-size="11" fill="#cbd5e1">Traverses logarithmic B-Tree in RAM</text>
<rect x="20" y="70" width="270" height="50" rx="4" fill="#1e293b"/>
<text x="35" y="92" font-size="10" fill="#86efac">RAM Seek: Sub-millisecond (~1 ms)</text>
<text x="35" y="108" font-size="10" fill="#94a3b8">totalKeysExamined: 1, totalDocsExamined: 1</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Single Field Indexes & The Immutable _id Index', bn: '২. সিঙ্গল ফিল্ড ইনডেক্স ও অপরিবর্তনীয় _id ইনডেক্স' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB automatically creates a unique ascending index on the _id field during collection creation. Developers create additional single-field indexes using createIndex({ field: 1 }) for ascending or { field: -1 } for descending order. For single-field queries, traversal direction does not impact performance because B-trees can be traversed backward or forward with equal efficiency.',
        bn: 'কালেকশন তৈরির সময় MongoDB নিজে থেকেই _id ফিল্ডে একটি ইউনিক আরোহী ইনডেক্স বানিয়ে নেয়। ডেভেলপাররা createIndex({ field: 1 }) দিয়ে ছোট থেকে বড় বা { field: -1 } দিয়ে বড় থেকে ছোট ক্রমে ইনডেক্স তৈরি করেন। একক ফিল্ডের ক্ষেত্রে ক্রম (১ বা -১) পারফরম্যান্সে কোনো প্রভাব ফেলে না, কারণ বি-ট্রি উভয় দিকে সমান দক্ষতায় পড়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Creating a single field index on email:
await db.collection("users").createIndex({ email: 1 }, { name: "idx_users_email" });

console.log("Single field index created successfully on email");
// Output: Single field index created successfully on email`,
      caption: {
        en: 'Single field indexes accelerate exact match filters and range queries on single keys.',
        bn: 'একক ফিল্ড ইনডেক্স নির্দিষ্ট মান খোঁজা এবং রেঞ্জ কুয়েরির গতি বৃদ্ধি করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Compound Indexes & The Golden ESR Rule', bn: '৩. কম্পাউন্ড ইনডেক্স ও সুপরিচিত ESR নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'A compound index indexes multiple fields simultaneously. The critical performance guideline is the ESR Rule. First, place Equality fields (exact matches like status: "active"). Second, place Sort fields (order clauses like createdAt: -1). Finally, place Range fields (inequalities like age: { $gte: 21 }).',
        bn: 'কম্পাউন্ড কি একসাথে একাধিক ফিল্ড ইনডেক্স করে। এর প্রধান নির্দেশিকা হলো ESR নিয়ম। প্রথমে Equality ফিল্ড রাখুন (যেমন status: "active")। মাঝে Sort ফিল্ড রাখুন (যেমন createdAt: -1)। সবার শেষে Range ফিল্ড রাখুন (যেমন age: { $gte: 21 })।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Query: find active users, sort by signup date, age between 20 and 40
// db.users.find({ status: "active", age: { $gte: 20, $lte: 40 } }).sort({ createdAt: -1 })

// PERFECT ESR ORDER:
// E (status) -> S (createdAt) -> R (age)
await db.collection("users").createIndex({
  status: 1,     // Equality first
  createdAt: -1, // Sort second (matches query direction)
  age: 1         // Range last
});

console.log("ESR compound index eliminates in-memory sorting completely");
// Output: ESR compound index eliminates in-memory sorting completely`,
      caption: {
        en: 'Adhering to the ESR rule avoids expensive in-memory sort stages in queries.',
        bn: 'ESR নিয়ম মানলে মেমরিতে আলাদা সর্ট করার প্রয়োজন হয় না, সরাসরি সাজানো ডেটা মেলে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Index Prefix Matching: Reusing Compound Indexes', bn: '৪. ইনডেক্স প্রিফিক্স ম্যাচিং: একটি কম্পাউন্ড ইনডেক্সের পুনঃব্যবহার' } },
    {
      type: 'para',
      text: {
        en: 'An index on { a: 1, b: 1, c: 1 } automatically covers queries filtering on { a } or { a, b }. These leading subsets are called index prefixes. However, this structure cannot support queries filtering solely on { b } or { c }, because the B-tree is organized starting strictly from the first key.',
        bn: '{ a: 1, b: 1, c: 1 } ফিল্ডে তৈরি একটি ইনডেক্স নিজে থেকেই { a } অথবা { a, b } কুয়েরি সাপোর্ট করে। একে প্রিফিক্স (Prefix) বলে। তবে এই কাঠামোটি শুধু { b } বা { c } দিয়ে করা কুয়েরিতে কোনো কাজে আসবে না, কারণ বি-ট্রি প্রথম ফিল্ডের মান অনুসারে সাজানো থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `INDEX: { country: 1, city: 1, postalCode: 1 }

✅ COVERED (Uses index prefix):
- find({ country: "BD" })
- find({ country: "BD", city: "Dhaka" })
- find({ country: "BD", city: "Dhaka", postalCode: "1205" })

❌ NOT COVERED (Requires separate index):
- find({ city: "Dhaka" })               // Skips country prefix!
- find({ postalCode: "1205" })           // Skips country and city prefix!`,
      caption: {
        en: 'Compound indexes only cover queries matching contiguous leading key prefixes.',
        bn: 'কম্পাউন্ড ইনডেক্স শুধুমাত্র প্রথম থেকে শুরু হওয়া প্রিফিক্স কুয়েরিগুলো সাপোর্ট করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Multikey Indexes on Arrays', bn: '৫. অ্যারের জন্য মাল্টিকি ইনডেক্স' } },
    {
      type: 'para',
      text: {
        en: 'When a lookup key targets an array field, MongoDB automatically creates a multikey structure, generating an entry for every individual element inside the collection. A compound version can include at most one array attribute; attempting to bundle two distinct list fields in the same entry triggers an engine error.',
        bn: 'কোনো অ্যারে ফিল্ডের ওপর কি বানালে MongoDB স্বয়ংক্রিয়ভাবে একটি মাল্টিকি কাঠামো তৈরি করে। এটি তালিকার ভেতরের প্রতিটি উপাদানের জন্য আলাদা এন্ট্রি বানায়। একটি কম্পাউন্ড রূপে সর্বোচ্চ একটিমাত্র অ্যারে ফিল্ড থাকতে পারে; দুটি তালিকা একসাথে রাখতে গেলে ইঞ্জিন এরর দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Multikey index on tags array:
await db.collection("articles").createIndex({ tags: 1 });

// Query matching any article containing the tag "database":
const res = await db.collection("articles").find({ tags: "database" }).toArray();

console.log("Multikey index scans array elements with high efficiency");
// Output: Multikey index scans array elements with high efficiency`,
      caption: {
        en: 'Multikey indexes allow fast lookups inside nested array elements.',
        bn: 'মাল্টিকি ইনডেক্স অ্যারের ভেতরের উপাদানগুলোতে দ্রুত অনুসন্ধান চালায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Specialized Indexes: Partial, Sparse, Unique & TTL', bn: '৬. বিশেষ ইনডেক্স: পার্শিয়াল, স্পার্স, ইউনিক এবং টিটিএল' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB provides specialized key structures for distinct operational scenarios. Partial rules use partialFilterExpression to target only a subset of documents, saving massive RAM. Sparse types register documents that contain the target field. Unique constraints enforce distinct values. Finally, TTL mechanisms automatically purge expired documents after a set duration.',
        bn: 'MongoDB বিভিন্ন কাজের জন্য বিশেষ ধরনের সার্চ কাঠামো সমর্থন করে। পার্শিয়াল ফিল্টার শর্ত দিয়ে নির্দিষ্ট নথিতে কি বানিয়ে র‍্যাম বাঁচায়। স্পার্স টাইপ যেসব রেকর্ডে ফিল্ডটি থাকে সেগুলো রাখে। ইউনিক শর্ত তথ্যের অনন্যতা নিশ্চিত করে। আর টিটিএল মেয়াদ শেষে স্বয়ংক্রিয়ভাবে পুরনো ডেটা মুছে ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Partial Index (Index only active orders, saving RAM):
await db.collection("orders").createIndex(
  { customerId: 1 },
  { partialFilterExpression: { status: "active" } }
);

// 2. TTL Index (Auto-delete session documents 3600 seconds after createdAt):
await db.collection("sessions").createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
);

console.log("Specialized partial and TTL indexes deployed");
// Output: Specialized partial and TTL indexes deployed`,
      caption: {
        en: 'Partial and TTL indexes conserve memory and automate cache retention workflows.',
        bn: 'পার্শিয়াল ও টিটিএল ইনডেক্স মেমরি সাশ্রয় করে এবং অটোমেটিক ডেটা ক্লিনিং করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Full-Text Search with Text Indexes & textScore', bn: '৭. টেক্সট ইনডেক্স ও textScore দিয়ে ফুল-টেক্সট সার্চ' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB text indexes support linguistic word stemming, stop-word removal, and full-text keyword searches across string attributes. Queries use the $text operator with $search and can project the relevance score using { score: { $meta: "textScore" } } to sort results by semantic relevance.',
        bn: 'MongoDB টেক্সট ইনডেক্স শব্দের ব্যাকরণগত রূপ (stemming), অপ্রয়োজনীয় শব্দ ছাঁটাই এবং স্ট্রিংয়ের ভেতরে শব্দ খোঁজার সুবিধা দেয়। কুয়েরিতে $text এবং $search ব্যবহার করা হয় এবং { score: { $meta: "textScore" } } প্রজেক্ট করে সবচেয়ে প্রাসঙ্গিক ফলাফল সবার উপরে সাজানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Create text index on title and content:
await db.collection("articles").createIndex({ title: "text", body: "text" });

// Query with text search and sort by relevance textScore:
const results = await db.collection("articles").find(
  { $text: { $search: "database architecture" } },
  { projection: { score: { $meta: "textScore" } } }
).sort({ score: { $meta: "textScore" } }).toArray();

console.log("Text search retrieved results ranked by linguistic relevance score");
// Output: Text search retrieved results ranked by linguistic relevance score`,
      caption: {
        en: 'Text indexes provide full-text keyword matching with relevance-based ranking.',
        bn: 'টেক্সট ইনডেক্স প্রাসঙ্গিকতার স্কোরের ওপর ভিত্তি করে টেক্সট সার্চ রেজাল্ট সাজায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Covered Queries: The Holy Grail of Performance', bn: '৮. কাভার্ড কুয়েরি: শূন্য ডিস্ক রিডের অতিদ্রুত অনুসন্ধান' } },
    {
      type: 'para',
      text: {
        en: 'A query is fully covered when every single field in the query filter and the projection is contained within the index. In a covered query, MongoDB never accesses the storage layer or reads documents from disk (totalDocsExamined: 0), serving the entire query directly from RAM in microseconds.',
        bn: 'যখন কোনো কুয়েরির ফিল্টার এবং প্রজেকশনে চাওয়া সব ফিল্ডই ইনডেক্সের ভেতরে বিদ্যমান থাকে, তখন তাকে কাভার্ড কুয়েরি (Covered Query) বলে। এতে MongoDB-কে মূল ডেটা ফাইল বা ডিস্ক ছুঁতেই হয় না (totalDocsExamined: 0), ফলে সম্পূর্ণ রেজাল্ট মাইক্রোসেকেন্ডে সরাসরি র‍্যাম থেকে চলে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Compound index: { email: 1, role: 1 }
await db.collection("users").createIndex({ email: 1, role: 1 });

// COVERED QUERY: Both filter and projection are inside index!
// (Explicitly exclude _id: 0 because _id is not in this compound index)
const result = await db.collection("users").find(
  { email: "admin@corp.com" },
  { projection: { email: 1, role: 1, _id: 0 } }
).toArray();

console.log("Covered query executed with totalDocsExamined = 0");
// Output: Covered query executed with totalDocsExamined = 0`,
      caption: {
        en: 'Covered queries resolve entirely in memory, eliminating disk I/O overhead.',
        bn: 'কাভার্ড কুয়েরি ডিস্কের সাহায্য ছাড়া সরাসরি মেমরি থেকেই শতভাগ রেজাল্ট দিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Diagnosing Query Execution Plans with explain("executionStats")', bn: '৯. explain("executionStats") দিয়ে কুয়েরির স্বাস্থ্য পরীক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'To inspect how MongoDB executes a query, chain .explain("executionStats"). The diagnostic output reveals the execution stages (IXSCAN vs COLLSCAN), nReturned (documents returned), totalKeysExamined (index entries checked), and totalDocsExamined (documents fetched from storage). An optimal query keeps totalDocsExamined equal to nReturned.',
        bn: 'MongoDB কীভাবে একটি কুয়েরি রান করছে তা দেখতে কুয়েরির সাথে .explain("executionStats") যুক্ত করতে হয়। এটি দেখায় কুয়েরিটি IXSCAN নাকি ধীরগতির COLLSCAN ব্যবহার করছে, কতগুলো রেকর্ড ফেরত এসেছে (nReturned), কতটি ইনডেক্স কি পরীক্ষা করা হয়েছে (totalKeysExamined) এবং কতটি মূল ডকুমেন্ট ডিস্ক থেকে পড়া হয়েছে (totalDocsExamined)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Analyzing query execution stats:
const stats = await db.collection("users")
  .find({ email: "user@demo.com" })
  .explain("executionStats");

console.log("Execution Stage:", stats.executionStats.executionStages.stage);
console.log("Returned Docs:", stats.executionStats.nReturned);
console.log("Keys Examined:", stats.executionStats.totalKeysExamined);
console.log("Docs Examined:", stats.executionStats.totalDocsExamined);
// Output:
// Execution Stage: IXSCAN
// Returned Docs: 1
// Keys Examined: 1
// Docs Examined: 1`,
      caption: {
        en: 'Explain plans verify index usage and identify inefficient table scans.',
        bn: 'এক্সপ্লেইন প্ল্যান ইনডেক্স ব্যবহার যাচাই করে এবং ধীরগতির স্ক্যান চিহ্নিত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Index Overhead, RAM Budgets & Drop Maintenance', bn: '১০. ইনডেক্স মেমরি বাজেট, রাইট ওভারহেড ও রক্ষণাবেক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'Search structures are not free: every insert, update, or delete must update every corresponding B-tree on disk and in memory. Unused lookup keys waste server RAM and degrade write throughput. Production teams audit utilization with $indexStats and drop unneeded keys using db.collection.dropIndex().',
        bn: 'সার্চ কাঠামো ব্যবহারের নির্দিষ্ট খরচ রয়েছে: যেকোনো নতুন তথ্য লেখা বা আপডেট করার সময় সংশ্লিষ্ট প্রতিটি বি-ট্রি আপডেট হতে হয়। অপ্রয়োজনীয় কি সার্ভারের র‍্যাম নষ্ট করে এবং ডেটা লেখার গতি শ্লথ করে দেয়। প্রোডাকশন সিস্টেমে $indexStats দিয়ে নিরীক্ষা চালিয়ে dropIndex() দিয়ে তা মুছে ফেলা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Checking index usage stats and dropping dead indexes:
const stats = await db.collection("users").aggregate([{ $indexStats: {} }]).toArray();

// Dropping an unutilized index:
await db.collection("users").dropIndex("idx_users_legacy_field");

console.log("Unused index dropped, freeing system RAM and write latency");
// Output: Unused index dropped, freeing system RAM and write latency`,
      caption: {
        en: 'Regularly auditing and pruning unused indexes protects write throughput and RAM capacity.',
        bn: 'নিয়মিত অপ্রয়োজনীয় ইনডেক্স মুছে ফেলা লেখার গতি ও র‍্যামের সক্ষমতা ঠিক রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-idx-ex1',
      kind: 'predict',
      topic: 'mongodb: totalDocsExamined in covered query',
      question: {
        en: 'In a completely covered MongoDB query where all requested fields exist inside the index, what is the value of totalDocsExamined?',
        bn: 'একটি সম্পূর্ণ কাভার্ড কুয়েরিতে যেখানে ফিল্টার এবং প্রজেকশনের সব ফিল্ড ইনডেক্সেই বিদ্যমান, সেখানে totalDocsExamined-এর মান কত হয়?'
      },
      code: `/* Value of totalDocsExamined in a covered query: */
/* totalDocsExamined = _ */`,
      answer: '0',
      accept: ['0', 'zero'],
      hint: {
        en: 'Zero, because no documents are read from disk.',
        bn: '০, কারণ ডিস্ক থেকে কোনো ডকুমেন্ট পড়ার দরকার হয় না।'
      },
      explanation: {
        en: 'A covered query satisfies all filter and projection attributes entirely from the B-tree index in RAM, resulting in totalDocsExamined = 0.',
        bn: 'কাভার্ড কুয়েরি মেমরি ইনডেক্স থেকেই সব উত্তর দিয়ে দেয়, তাই ডিস্কের ডকুমেন্ট পড়ার সংখ্যা ০ হয়।'
      }
    },
    {
      id: 'mng-idx-ex2',
      kind: 'mcq',
      topic: 'mongodb: ESR rule order',
      question: {
        en: 'What is the correct ordering of fields when constructing a compound index using the ESR rule?',
        bn: 'ESR নিয়ম মেনে কম্পাউন্ড ইনডেক্স তৈরি করার সময় ফিল্ডের সঠিক ক্রম কোনটি?'
      },
      options: [
        { en: 'Equality first, Sort second, Range last', bn: 'সবার আগে Equality, মাঝে Sort, সবার শেষে Range' },
        { en: 'Range first, Sort second, Equality last', bn: 'সবার আগে Range, মাঝে Sort, সবার শেষে Equality' },
        { en: 'Sort first, Range second, Equality last', bn: 'সবার আগে Sort, মাঝে Range, সবার শেষে Equality' },
        { en: 'Alphabetical order', bn: 'বর্ণমালার ক্রম অনুসারে' }
      ],
      answer: 0,
      hint: {
        en: 'Equality, Sort, Range.',
        bn: 'Equality, Sort, Range।'
      },
      explanation: {
        en: 'Placing Equality keys first narrows candidate records, placing Sort keys second enables index-based sorting without memory buffers, and Range keys filter the remainder.',
        bn: 'ESR নিয়ম মানলে মেমরিতে বাড়তি সর্ট করা লাগে না এবং কুয়েরি দ্রুততম সময়ে শেষ হয়।'
      }
    },
    {
      id: 'mng-idx-ex3',
      kind: 'mcq',
      topic: 'mongodb: explain plan stages',
      question: {
        en: 'In a MongoDB explain() output, which execution stage indicates an index scan rather than a full collection scan?',
        bn: 'MongoDB explain() রিপোর্টে সম্পূর্ণ কালেকশন স্ক্যানের বদলে ইনডেক্স স্ক্যান বোঝাতে কোন স্টেজটি দেখানো হয়?'
      },
      options: [
        { en: 'IXSCAN', bn: 'IXSCAN' },
        { en: 'COLLSCAN', bn: 'COLLSCAN' },
        { en: 'MEMSCAN', bn: 'MEMSCAN' },
        { en: 'FULLSCAN', bn: 'FULLSCAN' }
      ],
      answer: 0,
      hint: {
        en: 'IXSCAN stands for Index Scan.',
        bn: 'IXSCAN মানে ইনডেক্স স্ক্যান।'
      },
      explanation: {
        en: 'IXSCAN indicates that the query planner traversed an index B-tree, whereas COLLSCAN indicates a slow sequential scan across all documents.',
        bn: 'IXSCAN নির্দেশ করে কুয়েরিটি ইনডেক্স ব্যবহার করেছে, আর COLLSCAN মানে পুরো কালেকশন স্ক্যান হয়েছে।'
      }
    }
  ],
  quiz: {
    id: 'mng-idx-quiz',
    title: { en: 'MongoDB Indexing & Query Optimization Quiz', bn: 'MongoDB ইনডেক্সিং ও কুয়েরি অপ্টিমাইজেশন কুইজ' },
    questions: [
      {
        id: 'miq1',
        kind: 'mcq',
        topic: 'mongodb: partial indexes advantage',
        question: {
          en: 'What is the primary architectural benefit of creating a Partial Index over a standard index?',
          bn: 'সাধারণ ইনডেক্সের তুলনায় পার্শিয়াল ইনডেক্স (Partial Index) ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          { en: 'It indexes only documents satisfying a specified filter condition, dramatically reducing RAM footprint and index maintenance cost', bn: 'এটি শুধু নির্দিষ্ট শর্ত পূরণ করা ডকুমেন্টে ইনডেক্স তৈরি করে, ফলে ব্যাপক র‍্যাম সাশ্রয় হয় এবং লেখার ওভারহেড কমে' },
          { en: 'It makes all writes synchronous across 5 data centers', bn: '৫টি ভিন্ন ডাটা সেন্টারে সব ডেটা সিঙ্ক করে' },
          { en: 'It deletes documents after 24 hours', bn: '২৪ ঘণ্টা পর ডেটা মুছে দেয়' },
          { en: 'It encrypts the database password', bn: 'ডাটাবেস পাসওয়ার্ড এনক্রিপ্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Indexes only matching documents to save memory.',
          bn: 'মেমরি বাঁচাতে শুধু শর্ত পূরণ করা ডকুমেন্টে ইনডেক্স বানায়।'
        },
        explanation: {
          en: 'Partial indexes target only the subset of documents relevant to frequent queries (e.g. active users only), saving valuable server RAM.',
          bn: 'পার্শিয়াল ইনডেক্স অপ্রয়োজনীয় ডেটা ইনডেক্স না করে শুধু দরকারি ডেটায় ইনডেক্স রাখে, ফলে র‍্যামের ব্যাপক সাশ্রয় হয়।'
        }
      },
      {
        id: 'miq2',
        kind: 'mcq',
        topic: 'mongodb: multikey index limitation',
        question: {
          en: 'What restriction applies when creating a compound multikey index on arrays in MongoDB?',
          bn: 'MongoDB-তে অ্যারের ওপর কম্পাউন্ড মাল্টিকি ইনডেক্স তৈরি করতে কোন সীমাবদ্ধতাটি বিদ্যমান?'
        },
        options: [
          { en: 'A compound multikey index can contain at most one array field', bn: 'একটি কম্পাউন্ড মাল্টিকি ইনডেক্সে সর্বোচ্চ একটিমাত্র অ্যারে ফিল্ড থাকতে পারে' },
          { en: 'Arrays cannot be indexed under any circumstances', bn: 'অ্যারে কোনো অবস্থাতেই ইনডেক্স করা যায় না' },
          { en: 'The array must contain at least 1,000 items', bn: 'অ্যারেতে অন্তত ১,০০০ উপাদান থাকতে হবে' },
          { en: 'The collection must be sharded across 10 servers', bn: 'কালেকশন ১০টি সার্ভারে বিভক্ত থাকতে হবে' }
        ],
        answer: 0,
        hint: {
          en: 'At most one array field per compound index.',
          bn: 'কম্পাউন্ড ইনডেক্সে সর্বোচ্চ একটিমাত্র অ্যারে ফিল্ড থাকতে পারে।'
        },
        explanation: {
          en: 'MongoDB prohibits indexing more than one array field in a compound index to prevent an explosive Cartesian product of index entries.',
          bn: 'ইনডেক্স এন্ট্রির কার্টেসিয়ান গুণফল ঠেকাতে একটি কম্পাউন্ড ইনডেক্সে একাধিক অ্যারে রাখা নিষিদ্ধ।'
        }
      },
      {
        id: 'miq3',
        kind: 'mcq',
        topic: 'mongodb: compound index key order',
        question: {
          en: 'According to the ESR rule for compound index design, which category of fields must always be positioned first?',
          bn: 'কম্পাউন্ড ইনডেক্স ডিজাইনের ESR নিয়ম অনুসারে কোন শ্রেণীর ফিল্ড সর্বদা সবার প্রথমে রাখতে হবে?'
        },
        options: [
          { en: 'Equality fields (exact match filters)', bn: 'Equality ফিল্ড (সরাসরি মিল খোঁজার ফিল্টার)' },
          { en: 'Range fields (inequalities)', bn: 'Range ফিল্ড (অসমতার ফিল্টার)' },
          { en: 'Sort fields (ordering criteria)', bn: 'Sort ফিল্ড (সাজানোর শর্ত)' },
          { en: 'Array fields', bn: 'অ্যারে ফিল্ড' }
        ],
        answer: 0,
        hint: {
          en: 'Equality fields first.',
          bn: 'সবার আগে Equality ফিল্ড।'
        },
        explanation: {
          en: 'The ESR rule mandates Equality keys first to immediately reduce candidate document volume.',
          bn: 'ESR নিয়ম অনুযায়ী শুরুতে Equality ফিল্ড রাখলে শুরুতেই অপ্রয়োজনীয় ডেটা বাদ হয়ে যায়।'
        }
      },
      {
        id: 'miq4',
        kind: 'mcq',
        topic: 'mongodb: covered query definition',
        question: {
          en: 'What does totalDocsExamined = 0 indicate when analyzing query execution stats in explain()?',
          bn: 'explain() রিপোর্টে totalDocsExamined = 0 থাকার অর্থ কী?'
        },
        options: [
          { en: 'The query is completely covered by the index in RAM and never accessed storage disks', bn: 'কুয়েরিটি মেমরির ইনডেক্স থেকেই সম্পূর্ণ উত্তর দিয়ে দিয়েছে এবং ডিস্কের ডেটা পড়তে হয়নি' },
          { en: 'The collection is empty', bn: 'কালেকশনটি সম্পূর্ণ খালি' },
          { en: 'The query threw a syntax error', bn: 'কুয়েরিতে সিনট্যাক্স এরর হয়েছে' },
          { en: 'The database server crashed', bn: 'ডাটাবেস সার্ভার ক্র্যাশ করেছে' }
        ],
        answer: 0,
        hint: {
          en: 'Zero disk reads; covered entirely by index.',
          bn: 'শূন্য ডিস্ক রিড; সম্পূর্ণ ইনডেক্স থেকে সম্পন্ন।'
        },
        explanation: {
          en: 'In a covered query, all requested fields exist in the index B-tree, yielding zero disk document reads (totalDocsExamined: 0).',
          bn: 'কাভার্ড কুয়েরিতে ইনডেক্স থেকেই সব তথ্য পাওয়া যায়, ফলে ডিস্ক পরীক্ষা করার সংখ্যা ০ হয়।'
        }
      }
    ]
  }
};
