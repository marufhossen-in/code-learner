import type { Lesson } from '../../../lib/types';

export const AggsAndThePipeLesson: Lesson = {
  slug: 'aggs-and-the-pipe',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Aggregation Framework: Pipelines, Stages & Lookup Joins',
    bn: 'MongoDB অ্যাগ্রিগেশন ফ্রেমওয়ার্ক: পাইপলাইন, স্টেজ ও লুকআপ জয়েন'
  },
  summary: {
    en: 'Master MongoDB’s data transformation engine across 10 structured topics. Understand the multi-stage aggregation pipeline modeled after Unix pipes. Filter early using indexed $match stages. Group and accumulate data using $group with $sum, $avg, and $push. Reshape documents using $project and $addFields. Flatten nested arrays with $unwind. Perform relational left outer joins across collections using $lookup. Implement conditional branching with $cond, manage the 100 MB RAM memory limit with allowDiskUse, and build real-world sales analytics pipelines.',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB-র ডেটা ট্রান্সফরমেশন ইঞ্জিন আয়ত্ত করুন। ইউনিক্স পাইপের আদলে তৈরি মাল্টি-স্টেজ রূপান্তর প্রক্রিয়াটি জানুন। ইনডেক্স ব্যবহারের সুবিধার্থে শুরুতেই $match ব্যবহার করে ডেটা ফিল্টার করা হয়। $group এবং $sum, $avg, $push প্রয়োগে সমষ্টিগত পরিসংখ্যান বের করা শিখুন। $project ও $addFields এর মাধ্যমে ডেটার গঠন পরিবর্তন করা যায়। $unwind সহযোগে নেস্টেড অ্যারে ভেঙে আলাদা নথি বানান। $lookup চালনার মাধ্যমে দুটি কালেকশনের মধ্যে লেফট আউটার জয়েন করুন। $cond সহ শর্তভিত্তিক হিসাব, ১০০ মেগাবাইট র‍্যাম সীমা ও allowDiskUse পরিচালনা কৌশল রপ্ত করুন এবং ব্যবসায়িক সেলস অ্যানালিটিক্স পাইপলাইন তৈরি করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'indexes-and-the-search',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Indexing: ESR Rule, Compound Keys & Text Search',
      bn: 'MongoDB ইনডেক্সিং: ESR নিয়ম, কম্পাউন্ড কি ও টেক্সট সার্চ'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Aggregation Pipeline Architecture: The Unix Pipe Model', bn: '১. অ্যাগ্রিগেশন পাইপলাইন আর্কিটেকচার: ইউনিক্স পাইপ মডেল' } },
    {
      type: 'para',
      text: {
        en: 'When you transform complex datasets, the MongoDB Aggregation Framework processes documents through a sequence of modular stages, modeled directly after Unix command-line pipes. Documents enter the first stage, are filtered or transformed, and pass their results as the input stream to the next stage.',
        bn: 'যখন আপনি জটিল ডেটাসেট প্রক্রিয়াজাত করেন, তখন MongoDB অ্যাগ্রিগেশন ফ্রেমওয়ার্ক ইউনিক্স কমান্ড-লাইন পাইপলাইনের আদলে পরপর কয়েকটি মডুলার স্টেজের মাধ্যমে ডেটা রূপান্তর করে। কালেকশনের ডকুমেন্টগুলো প্রথম স্টেজে ঢোকে, সেখানে ফিল্টার বা প্রক্রিয়া হওয়ার পর প্রাপ্ত ফলাফল পরবর্তী স্টেজের ইনপুট হিসেবে পাঠানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `AGGREGATION STREAM FLOW:
Collection "orders"
      |
      v
[Stage 1: $match]   -> Filters active orders from 2026 (Prunes 90% of docs)
      |
      v
[Stage 2: $group]   -> Groups orders by category and sums total revenue
      |
      v
[Stage 3: $sort]    -> Sorts categories by highest revenue first
      |
      v
[Stage 4: $limit]   -> Returns Top 5 earning categories to client`,
      caption: {
        en: 'Documents flow through sequential aggregation stages, progressively transforming data.',
        bn: 'ডকুমেন্টগুলো ক্রমান্বয়ে সাজানো স্টেজের মধ্য দিয়ে প্রবাহিত হয়ে চূড়ান্ত রূপ লাভ করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Aggregation Pipeline Transformation Stream', bn: 'অ্যাগ্রিগেশন পাইপলাইন ডেটা প্রবাহ মডেল' },
      svg: `<svg viewBox="0 0 680 160" font-family="system-ui, sans-serif" role="img" aria-label="MongoDB aggregation pipeline stages stream">
<g transform="translate(10, 20)">
<rect x="0" y="20" width="120" height="80" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
<text x="60" y="55" font-size="11" font-weight="700" fill="#94a3b8" text-anchor="middle">Input Docs</text>
<text x="60" y="75" font-size="10" fill="#38bdf8" text-anchor="middle">10,000 Orders</text>

<path d="M125,60 L155,60" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

<rect x="160" y="20" width="110" height="80" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
<text x="215" y="55" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">$match</text>
<text x="215" y="75" font-size="10" fill="#cbd5e1" text-anchor="middle">status: "paid"</text>

<path d="M275,60 L305,60" stroke="#38bdf8" stroke-width="2"/>

<rect x="310" y="20" width="110" height="80" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="365" y="55" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">$group</text>
<text x="365" y="75" font-size="10" fill="#cbd5e1" text-anchor="middle">sum: total</text>

<path d="M425,60 L455,60" stroke="#38bdf8" stroke-width="2"/>

<rect x="460" y="20" width="100" height="80" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="510" y="55" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">$sort</text>
<text x="510" y="75" font-size="10" fill="#cbd5e1" text-anchor="middle">rev: -1</text>

<path d="M565,60 L595,60" stroke="#38bdf8" stroke-width="2"/>

<rect x="600" y="20" width="60" height="80" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
<text x="630" y="55" font-size="10" font-weight="700" fill="#c084fc" text-anchor="middle">Top 5</text>
<text x="630" y="75" font-size="9" fill="#e2e8f0" text-anchor="middle">Result</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Stage 1: Filtering Early with $match', bn: '২. স্টেজ ১: শুরুতে $match দিয়ে দ্রুত ডেটা ফিল্টার করা' } },
    {
      type: 'para',
      text: {
        en: 'The $match stage filters documents using standard MongoDB query syntax. Placing $match at the very beginning of a pipeline is a crucial performance optimization: it utilizes database indexes and drastically reduces the volume of documents processed by downstream memory-intensive stages.',
        bn: '$match স্টেজ সাধারণ কুয়েরি সিনট্যাক্স ব্যবহার করে ডেটা ফিল্টার করে। পাইপলাইনের একদম শুরুতে $match রাখা পারফরম্যান্সের জন্য সবচেয়ে গুরুত্বপূর্ণ: এটি ডাটাবেস ইনডেক্স কাজে লাগাতে পারে এবং পরবর্তী মেমরি-নির্ভর স্টেজগুলোর জন্য ডেটার পরিমাণ ব্যাপক কমিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Initial filtering stage using $match:
const matchStage = {
  $match: {
    status: "completed",
    orderDate: { $gte: new Date("2026-01-01") }
  }
};

console.log("$match at pipeline head utilizes indexes to prune unneeded rows immediately");
// Output: $match at pipeline head utilizes indexes to prune unneeded rows immediately`,
      caption: {
        en: 'Early $match stages act as index-backed gates, protecting pipeline memory.',
        bn: 'শুরুর $match স্টেজ ইনডেক্স ব্যবহার করে পাইপলাইনের র‍্যামকে সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Stage 2: Grouping & Accumulating with $group', bn: '৩. স্টেজ ২: $group এবং অ্যাকুমুলেটর দিয়ে দলভুক্ত করা' } },
    {
      type: 'para',
      text: {
        en: 'The $group stage aggregates documents around a specified _id key, equivalent to SQL GROUP BY. It computes summary metrics using powerful accumulator operators: $sum (totals or counts), $avg (averages), $min / $max (extremes), $push (accumulates array of items), and $addToSet (accumulates unique items).',
        bn: '$group স্টেজ নির্দিষ্ট _id কি-র ওপর ভিত্তি করে ডেটা একত্রিত করে, যা SQL GROUP BY-এর সমতুল্য। এটি বিভিন্ন অ্যাকুমুলেটর অপারেটর দিয়ে পরিসংখ্যান হিসাব করে: $sum (মোট যোগফল বা গণনা), $avg (গড়), $min / $max (সর্বোচ্চ/সর্বনিম্ন), $push (অ্যারেতে সব মান জমা করা) এবং $addToSet (ইউনিক মান জমা রাখা)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Grouping orders by customer and computing totals:
const groupStage = {
  $group: {
    _id: "$customerId",              // Grouping key (Field prefixed with $)
    totalSpent: { $sum: "$total" },  // Sums the "total" field for each customer
    orderCount: { $sum: 1 },         // Counts matching orders
    averageOrder: { $avg: "$total" },// Computes average transaction size
    uniqueProducts: { $addToSet: "$productId" } // Set of distinct products
  }
};

console.log("$group collapses matching documents into grouped summary records");
// Output: $group collapses matching documents into grouped summary records`,
      caption: {
        en: 'The $group stage condenses thousands of individual documents into aggregated business metrics.',
        bn: '$group স্টেজ হাজার হাজার ডকুমেন্টকে সংক্ষিপ্ত ব্যবসায়িক পরিসংখ্যানে রূপ দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Stage 3: Reshaping with $project & $addFields', bn: '৪. স্টেজ ৩: $project ও $addFields দিয়ে আকার পরিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'The $project stage specifies which fields flow to the next stage, renames attributes, and creates computed projections. When you only need to append new calculated properties while preserving all existing document fields, $addFields (or $set) is used instead to avoid verbose property re-declarations.',
        bn: '$project স্টেজ নির্ধারণ করে কোন ফিল্ডগুলো পরের ধাপে যাবে, ফিল্ডের নতুন নাম দেয় এবং গণনাকৃত মান তৈরি করে। আর বিদ্যমান সব ফিল্ড ঠিক রেখে শুধু নতুন কোনো হিসাব করা ফিল্ড যোগ করতে চাইলে $addFields (বা $set) ব্যবহার করা হয়, যাতে সব ফিল্ড বারবার লিখতে না হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Reshaping documents and computing VAT:
const addFieldsStage = {
  $addFields: {
    vatAmount: { $multiply: ["$total", 0.05] }, // 5% VAT calculation
    grandTotal: { $multiply: ["$total", 1.05] }
  }
};

console.log("$addFields appends computed expressions while preserving original attributes");
// Output: $addFields appends computed expressions while preserving original attributes`,
      caption: {
        en: '$addFields computes derived expressions without dropping unmentioned document properties.',
        bn: '$addFields মূল ডেটা ঠিক রেখেই সহজে নতুন হিসাব করা প্রোপার্টি যোগ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Stage 4: Sorting & Pagination with $sort, $skip & $limit', bn: '৫. স্টেজ ৪: $sort, $skip ও $limit দিয়ে পেজিনেশন' } },
    {
      type: 'para',
      text: {
        en: 'Pipelines control ordering and pagination using $sort (1 ascending, -1 descending), $skip (skips N documents), and $limit (caps output count). By default, an in-memory $sort stage fails if it exceeds 100 MB of RAM, unless the query uses an index or enables allowDiskUse: true.',
        bn: 'পাইপলাইনে ক্রম এবং পেজিনেশন নিয়ন্ত্রণের জন্য $sort (১ আরোহী, -১ অবরোহী), $skip (নির্দিষ্ট সংখ্যক ডেটা বাদ দেওয়া) এবং $limit (সর্বোচ্চ আউটপুট সীমা) ব্যবহৃত হয়। ইন-মেমোরি $sort যদি ১০০ মেগাবাইট র‍্যামের সীমা ছাড়িয়ে যায় তবে এরর ঘটে, যদি না ইনডেক্স থাকে বা allowDiskUse: true চালু করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Top 5 highest-spending customers:
const pipeline = [
  { $group: { _id: "$customerId", revenue: { $sum: "$total" } } },
  { $sort: { revenue: -1 } }, // Descending: Largest revenue first
  { $limit: 5 }               // Slice top 5 records
];

console.log("Sort and limit stages ordered sequentially for ranking queries");
// Output: Sort and limit stages ordered sequentially for ranking queries`,
      caption: {
        en: 'Pairing $sort and $limit allows the query planner to execute optimized top-N ranking.',
        bn: '$sort ও $limit একসাথে ব্যবহার করলে ডাটাবেস দ্রুত সেরা N-টি রেকর্ড বের করতে পারে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Stage 5: Deconstructing Arrays with $unwind', bn: '৬. স্টেজ ৫: $unwind দিয়ে অ্যারে ভেঙে আলাদা করা' } },
    {
      type: 'para',
      text: {
        en: 'When a document contains an array of items, computing per-item statistics requires flattening. The $unwind stage deconstructs an array field from the input documents to output a distinct document for each element in the array. Setting preserveNullAndEmptyArrays: true prevents dropping documents with empty arrays.',
        bn: 'যখন কোনো ডকুমেন্টে আইটেমের অ্যারে থাকে, তখন প্রতি আইটেমের আলাদা হিসাব করতে অ্যারেকে ভাঙতে হয়। $unwind স্টেজ অ্যারের প্রতিটি উপাদানের জন্য একটি করে আলাদা ডকুমেন্ট তৈরি করে দেয়। preserveNullAndEmptyArrays: true দিলে খালি অ্যারে বা নাল মান থাকলেও মূল ডকুমেন্টটি হারিয়ে যায় না।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `INPUT DOCUMENT:
{ "_id": 1, "orderId": "ord_99", "items": ["Keyboard", "Mouse"] }

AFTER $unwind: "$items":
Document A: { "_id": 1, "orderId": "ord_99", "items": "Keyboard" }
Document B: { "_id": 1, "orderId": "ord_99", "items": "Mouse" }
(Now each item can be independently grouped, priced, or analyzed!)`,
      caption: {
        en: '$unwind flattens embedded array elements into discrete stream documents.',
        bn: '$unwind নেস্টেড অ্যারের প্রতিটি উপাদানকে পৃথক ডকুমেন্টে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Stage 6: Relational Left Outer Joins with $lookup', bn: '৭. স্টেজ ৬: $lookup দিয়ে কালেকশনের মধ্যে লেফট আউটার জয়েন' } },
    {
      type: 'para',
      text: {
        en: 'Although MongoDB is a document database, applications frequently reference data across collections. The $lookup stage performs a relational left outer join between two collections. It joins documents based on matching localField and foreignField, populating matching target records into a new array.',
        bn: 'MongoDB একটি ডকুমেন্ট ডাটাবেস হলেও প্রায়ই একাধিক কালেকশনের মধ্যে রেফারেন্স মেলাতে হয়। $lookup স্টেজ দুটি কালেকশনের মধ্যে রিলেশনাল লেফট আউটার জয়েন সম্পন্ন করে। এটি localField এবং foreignField মিলিয়ে টার্গেট কালেকশনের তথ্য এনে বর্তমান ডকুমেন্টে একটি নতুন অ্যারে হিসেবে যুক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Joining Orders collection with Customers collection:
const lookupStage = {
  $lookup: {
    from: "customers",        // Target collection name
    localField: "customerId", // Field in current collection (orders)
    foreignField: "_id",      // Field in target collection (customers)
    as: "customerDetails"     // New output array field name
  }
};

console.log("$lookup correlates referenced documents across collections without SQL engines");
// Output: $lookup correlates referenced documents across collections without SQL engines`,
      caption: {
        en: '$lookup joins referenced collections, embedding matching entities into an array.',
        bn: '$lookup দুটি কালেকশনের মধ্যে সম্পর্ক স্থাপন করে সংশ্লিষ্ট ডেটাকে অ্যারেতে ভরে দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Conditional Expressions: $cond & $switch', bn: '৮. শর্তভিত্তিক এক্সপ্রেশন: $cond ও $switch' } },
    {
      type: 'para',
      text: {
        en: 'Aggregation pipelines support dynamic conditional branching: $cond functions as an if-then-else ternary operator ($cond: { if: <expr>, then: <val>, else: <val> }). For complex multi-branch decision trees, $switch evaluates an array of branches ($switch: { branches: [{ case: <expr>, then: <val> }], default: <val> }).',
        bn: 'অ্যাগ্রিগেশন পাইপলাইনে শর্তভিত্তিক হিসাবের জন্য $cond এবং $switch ব্যবহৃত হয়: $cond একটি if-then-else টার্নারি অপারেটর হিসেবে কাজ করে ($cond: { if: <শর্ত>, then: <মান>, else: <বিকল্প> })। আর একাধিক বিকল্প শর্ত যাচাই করার জন্য $switch কেস স্টেটমেন্টের মতো কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Dynamic discount tier calculation:
const discountStage = {
  $addFields: {
    tier: {
      $cond: {
        if: { $gte: ["$total", 5000] },
        then: "VIP Customer",
        else: "Standard Customer"
      }
    }
  }
};

console.log("Conditional logic evaluates dynamically within the database engine");
// Output: Conditional logic evaluates dynamically within the database engine`,
      caption: {
        en: 'Conditional operators categorize records dynamically during pipeline execution.',
        bn: 'কন্ডিশনাল অপারেটর পাইপলাইন চলার সময় ডেটাকে স্বয়ংক্রিয়ভাবে বিভিন্ন ভাগে ফেলে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Pipeline Memory Limits & allowDiskUse: The 100 MB Rule', bn: '৯. পাইপলাইন মেমরি সীমা ও allowDiskUse: ১০০ মেগাবাইট নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'Each stage in a MongoDB aggregation pipeline is constrained to a maximum of 100 megabytes of RAM. If a $sort or $group stage exceeds this 100 MB ceiling while processing massive collections, the query terminates with an error. Passing { allowDiskUse: true } permits pipeline stages to spill temporary data to disk buffers.',
        bn: 'MongoDB অ্যাগ্রিগেশন পাইপলাইনের প্রতিটি স্টেজ সর্বোচ্চ ১০০ মেগাবাইট র‍্যাম ব্যবহারের অনুমতি পায়। বিশাল কালেকশনে কাজ করার সময় $sort বা $group যদি এই ১০০ মেগাবাইটের বেশি মেমরি দাবি করে, তবে কুয়েরি এরর দিয়ে বন্ধ হয়ে যায়। { allowDiskUse: true } অপশনটি দিলে মেমরি উপচে পড়লে সার্ভার ডিস্কে সাময়িক ডেটা লিখে কাজ চালিয়ে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Executing heavy analytical pipeline with disk buffer fallback:
async function runHeavyAnalytics(db) {
  const cursor = db.collection("transactions").aggregate(
    [
      { $match: { year: 2026 } },
      { $group: { _id: "$storeId", revenue: { $sum: "$amount" } } },
      { $sort: { revenue: -1 } }
    ],
    { allowDiskUse: true } // Prevents 100 MB RAM exhaustion failure!
  );

  return await cursor.toArray();
}

console.log("allowDiskUse: true prevents memory overflow errors on large data warehouses");
// Output: allowDiskUse: true prevents memory overflow errors on large data warehouses`,
      caption: {
        en: 'Enabling allowDiskUse allows memory-intensive aggregation queries to spill safely to disk.',
        bn: 'allowDiskUse চালু থাকলে ভারী কুয়েরি মেমরি উপচে গেলেও নিরাপদে ডিস্ক ব্যবহার করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Production Sales Analytics Pipeline in Node.js', bn: '১০. Node.js-এ পূর্ণাঙ্গ সেলস অ্যানালিটিক্স পাইপলাইন তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'A production pipeline integrates matching, array unwinding, joining customer profiles, and grouping into a cohesive monthly revenue analytics report.',
        bn: 'একটি প্রোডাকশন পাইপলাইন ডেটা ফিল্টারিং, অ্যারে আনওয়াইন্ডিং, কাস্টমার প্রোফাইল জয়েন এবং ক্যাটাগরিভিত্তিক সেলস অ্যানালিটিক্সকে একটি সুসংগঠিত রিপোর্টে রূপ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Complete production sales report pipeline:
async function generateMonthlyReport(db) {
  const pipeline = [
    // 1. Filter completed orders:
    { $match: { status: "completed" } },
    // 2. Unwind items array to analyze each line item:
    { $unwind: "$items" },
    // 3. Group by category and compute sales metrics:
    {
      $group: {
        _id: "$items.category",
        totalSales: { $sum: "$items.price" },
        unitsSold: { $sum: "$items.quantity" }
      }
    },
    // 4. Sort by highest total sales:
    { $sort: { totalSales: -1 } },
    // 5. Project clean output names:
    {
      $project: {
        _id: 0,
        category: "$_id",
        totalSales: 1,
        unitsSold: 1
      }
    }
  ];

  return await db.collection("orders").aggregate(pipeline).toArray();
}

console.log("Production aggregation pipeline ready for high-throughput business intelligence");
// Output: Production aggregation pipeline ready for high-throughput business intelligence`,
      caption: {
        en: 'A production pipeline combining $match, $unwind, $group, $sort, and $project stages.',
        bn: 'একটি প্রোডাকশন পাইপলাইন যা $match, $unwind, $group, $sort ও $project একসাথে ব্যবহার করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-agg-ex1',
      kind: 'predict',
      topic: 'mongodb: aggregation default stage RAM limit in MB',
      question: {
        en: 'What is the default RAM memory ceiling limit (in megabytes) per aggregation stage before "allowDiskUse: true" is required?',
        bn: '"allowDiskUse: true" ছাড়া একটি অ্যাগ্রিগেশন স্টেজের জন্য ডিফল্ট সর্বোচ্চ র‍্যাম মেমরি সীমা কত মেগাবাইট?'
      },
      code: `/* Aggregation stage RAM limit in MB: */
/* Limit: ___ MB */`,
      answer: '100',
      accept: ['100', '100MB', '100 MB'],
      hint: {
        en: '100 megabytes.',
        bn: '১০০ মেগাবাইট।'
      },
      explanation: {
        en: 'MongoDB enforces a 100 MB RAM limit per pipeline stage. If an in-memory operation (like $sort) exceeds this, allowDiskUse must be enabled.',
        bn: 'MongoDB প্রতি স্টেজে সর্বোচ্চ ১০০ মেগাবাইট র‍্যামের সীমা বেঁধে দিয়েছে; এর বেশি লাগলে allowDiskUse চালু করতে হয়।'
      }
    },
    {
      id: 'mng-agg-ex2',
      kind: 'mcq',
      topic: 'mongodb: array flattening stage',
      question: {
        en: 'Which aggregation pipeline stage is used to deconstruct an array field, outputting a separate document for each element in the array?',
        bn: 'কোন অ্যাগ্রিগেশন পাইপলাইন স্টেজটি কোনো ডকুমেন্টের অ্যারে ফিল্ডকে ভেঙে ভেতরের প্রতিটি উপাদানের জন্য আলাদা আলাদা ডকুমেন্ট তৈরি করে?'
      },
      options: [
        { en: '$unwind', bn: '$unwind' },
        { en: '$flatten', bn: '$flatten' },
        { en: '$split', bn: '$split' },
        { en: '$expand', bn: '$expand' }
      ],
      answer: 0,
      hint: {
        en: 'The $unwind stage.',
        bn: '$unwind স্টেজ।'
      },
      explanation: {
        en: '$unwind peels open an array field, producing a new document for every element within the array.',
        bn: '$unwind অ্যারের প্রতিটি উপাদানকে আলাদা আলাদা নতুন ডকুমেন্টে পরিণত করে দেয়।'
      }
    },
    {
      id: 'mng-agg-ex3',
      kind: 'mcq',
      topic: 'mongodb: relational join stage',
      question: {
        en: 'Which stage performs a relational left outer join with another collection in MongoDB?',
        bn: 'MongoDB-তে অন্য কোনো কালেকশনের সাথে রিলেশনাল লেফট আউটার জয়েন সম্পন্ন করতে কোন স্টেজটি ব্যবহৃত হয়?'
      },
      options: [
        { en: '$lookup', bn: '$lookup' },
        { en: '$join', bn: '$join' },
        { en: '$merge', bn: '$merge' },
        { en: '$connect', bn: '$connect' }
      ],
      answer: 0,
      hint: {
        en: 'The $lookup stage.',
        bn: '$lookup স্টেজ।'
      },
      explanation: {
        en: '$lookup executes a left outer join to an unsharded collection in the same database, bringing matching documents into an array field.',
        bn: '$lookup অন্য কালেকশন থেকে মিল থাকা ডেটা খুঁজে এনে বর্তমান ডকুমেন্টে একটি অ্যারে হিসেবে যুক্ত করে।'
      }
    }
  ],
  quiz: {
    id: 'mng-agg-quiz',
    title: { en: 'MongoDB Aggregation Framework & Pipelines Quiz', bn: 'MongoDB অ্যাগ্রিগেশন ফ্রেমওয়ার্ক ও পাইপলাইন কুইজ' },
    questions: [
      {
        id: 'maq1',
        kind: 'mcq',
        topic: 'mongodb: early match optimization',
        question: {
          en: 'Why is it considered a critical performance best practice to place "$match" stages at the very beginning of an aggregation pipeline?',
          bn: 'অ্যাগ্রিগেশন পাইপলাইনের একদম শুরুতে "$match" স্টেজ রাখা কেন অত্যন্ত গুরুত্বপূর্ণ পারফরম্যান্স কৌশল?'
        },
        options: [
          { en: 'It allows the query planner to leverage database indexes and prunes the volume of documents before memory-intensive stages', bn: 'এটি ডাটাবেস ইনডেক্স ব্যবহার করতে দেয় এবং মেমরি-নির্ভর স্টেজে যাওয়ার আগেই অপ্রয়োজনীয় ডেটা ফেলে দেয়' },
          { en: 'Because MongoDB throws a syntax error if $match is placed anywhere else', bn: 'কারণ অন্য কোথাও $match রাখলে সিনট্যাক্স এরর হয়' },
          { en: 'It converts numbers to strings', bn: 'সংখ্যাকে স্ট্রিংয়ে রূপান্তর করে' },
          { en: 'It is required for JSON validation', bn: 'জেসন ভ্যালিডেশনের জন্য আবশ্যক' }
        ],
        answer: 0,
        hint: {
          en: 'Uses indexes and reduces downstream document volume.',
          bn: 'ইনডেক্স ব্যবহার করে এবং পরের স্টেজের কাজের চাপ কমায়।'
        },
        explanation: {
          en: 'An early $match uses collection indexes to filter documents at the storage layer, reducing memory consumption for subsequent $group and $sort operations.',
          bn: 'শুরুতে $match দিলে ইনডেক্সের সাহায্যে দ্রুত ফিল্টার হয়, ফলে পরের ধাপে খুব কম ডেটা প্রসেস করতে হয়।'
        }
      },
      {
        id: 'maq2',
        kind: 'mcq',
        topic: 'mongodb: $project vs $addFields',
        question: {
          en: 'What is the primary operational advantage of using "$addFields" instead of "$project" when adding a new computed attribute?',
          bn: 'নতুন কোনো গণনাকৃত ফিল্ড যোগ করার সময় "$project"-এর বদলে "$addFields" ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          { en: '$addFields keeps all existing document fields automatically without having to explicitly re-list them', bn: '$addFields ডকুমেন্টের আগের সব ফিল্ড স্বয়ংক্রিয়ভাবে অক্ষত রাখে, কোনো ফিল্ডের নাম পুনরায় লিখতে হয় না' },
          { en: '$addFields runs 100x faster than $project', bn: '$addFields ১০০ গুণ দ্রুত কাজ করে' },
          { en: '$project cannot do math operations', bn: '$project কোনো অংক করতে পারে না' },
          { en: '$addFields only works with dates', bn: '$addFields শুধু তারিখ নিয়ে কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Retains all existing fields without re-listing them.',
          bn: 'আগের ফিল্ড না লিখেও সব অক্ষত রাখে।'
        },
        explanation: {
          en: '$addFields preserves all existing properties in the document stream, adding or overriding only the specified computed fields.',
          bn: '$addFields আগের কোনো ফিল্ড না ফেলে দিয়ে শুধু নতুন প্রোপার্টিগুলো ডকুমেন্টে যোগ করে।'
        }
      },
      {
        id: 'maq3',
        kind: 'mcq',
        topic: 'mongodb: pipeline stage RAM memory limit',
        question: {
          en: 'What is the default RAM memory ceiling limit for a single aggregation pipeline stage before "allowDiskUse: true" must be enabled?',
          bn: '"allowDiskUse: true" ছাড়া একটি একক অ্যাগ্রিগেশন পাইপলাইন স্টেজের সর্বোচ্চ মেমরি সীমা কত?'
        },
        options: [
          { en: '100 MB', bn: '১০০ মেগাবাইট' },
          { en: '512 MB', bn: '৫১২ মেগাবাইট' },
          { en: '1 GB', bn: '১ গিগাবাইট' },
          { en: '16 MB', bn: '১৬ মেগাবাইট' }
        ],
        answer: 0,
        hint: {
          en: '100 megabytes.',
          bn: '১০০ মেগাবাইট।'
        },
        explanation: {
          en: 'MongoDB sets a 100 MB memory limit per stage. Memory-heavy operations exceeding 100 MB require allowDiskUse: true to spill to disk.',
          bn: 'প্রতিটি স্টেজের জন্য সর্বোচ্চ ১০০ মেগাবাইট মেমরি বরাদ্দ থাকে; এর বেশি লাগলে allowDiskUse ব্যবহার করতে হয়।'
        }
      },
      {
        id: 'maq4',
        kind: 'mcq',
        topic: 'mongodb: left outer join aggregation stage',
        question: {
          en: 'Which aggregation stage performs a relational left outer join with another collection?',
          bn: 'কোন অ্যাগ্রিগেশন স্টেজটি অন্য কালেকশনের সাথে রিলেশনাল লেফট আউটার জয়েন সম্পন্ন করে?'
        },
        options: [
          { en: '$lookup', bn: '$lookup' },
          { en: '$merge', bn: '$merge' },
          { en: '$join', bn: '$join' },
          { en: '$unionWith', bn: '$unionWith' }
        ],
        answer: 0,
        hint: {
          en: '$lookup stage.',
          bn: '$lookup স্টেজ।'
        },
        explanation: {
          en: '$lookup joins documents from an unsharded target collection based on matching local and foreign fields.',
          bn: '$lookup নির্দিষ্ট ফিল্ড মিলিয়ে অন্য কালেকশন থেকে সংশ্লিষ্ট ডেটা এনে দেয়।'
        }
      }
    ]
  }
};
