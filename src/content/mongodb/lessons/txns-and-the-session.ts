import type { Lesson } from '../../../lib/types';

export const TxnsAndTheSessionLesson: Lesson = {
  slug: 'txns-and-the-session',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Multi-Document ACID Transactions & Sessions',
    bn: 'MongoDB মাল্টি-ডকুমেন্ট এসিড ট্রানজ্যাকশন ও সেশন'
  },
  summary: {
    en: 'Master multi-document ACID transactions and logical sessions in MongoDB across 10 structured topics. Understand the distinction between single-document atomicity and multi-document consistency. Explore the four ACID pillars: Atomicity, Consistency, Isolation, and Durability. Initialize client sessions via startSession(). Master the withTransaction helper for automated retries of TransientTransactionError and UnknownTransactionCommitResult. Manage the 60-second lifetime ceiling. Execute distributed two-phase commit coordinators across shards. Build production bank transfer flows in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB মাল্টি-ডকুমেন্ট এসিড ট্রানজ্যাকশন এবং লজিক্যাল সেশন আয়ত্ত করুন। একক ডকুমেন্ট অ্যাটমিসিটি বনাম মাল্টি-ডকুমেন্ট ট্রানজ্যাকশনের পার্থক্য বুঝুন। এসিডের চারটি স্তম্ভ: অ্যাটমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি বিশ্লেষণ করুন। startSession() দিয়ে সেশন শুরু করুন। withTransaction হেল্পার দিয়ে স্বয়ংক্রিয় রিট্রাই ব্যবস্থা জানুন। ৬০ সেকেন্ডের সময়সীমা ও রাইট কনফ্লিক্ট নিয়ন্ত্রণ করুন। শার্ডেড ক্লাস্টারে টু-ফেজ কমিট মেকানিজম বুঝুন। Node.js দিয়ে নিখুঁত ব্যাংক ফান্ড ট্রান্সফার কোড লিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-mongo-release',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Operations: Backups, Monitoring & Security Architecture',
      bn: 'MongoDB অপারেশনস: ব্যাকআপ, মনিটরিং ও সিকিউরিটি আর্কিটেকচার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Single-Document Atomicity vs Multi-Document ACID', bn: '১. একক ডকুমেন্ট বনাম বহু-ডকুমেন্ট এসিড ট্রানজ্যাকশন' } },
    {
      type: 'para',
      text: {
        en: 'When you build mission-critical workflows, you frequently need guarantees that multiple database changes succeed together or roll back as one. From its inception, MongoDB provided atomic guarantees for single documents. To support complex operations across collections, MongoDB introduced multi-document ACID (Atomicity, Consistency, Isolation, and Durability) transactions, combining relational safety with document flexibility.',
        bn: 'গুরুত্বপূর্ণ ব্যবসায়িক অ্যাপ্লিকেশন তৈরির সময় আপনাকে প্রায়ই নিশ্চিত করতে হয় যে একাধিক পরিবর্তন একসাথে সফল হবে নয়তো সব বাতিল হবে। শুরু থেকেই MongoDB একক ডকুমেন্টের ক্ষেত্রে অ্যাটমিক নিশ্চয়তা দিয়ে এসেছে। কালেকশনজুড়ে বহু ডকুমেন্টে কাজ করার সুবিধার্থে MongoDB মাল্টি-ডকুমেন্ট এসিড (ACID — অ্যাটমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি) ট্রানজ্যাকশন চালু করেছে, যা নমনীয়তার সাথে সর্বোচ্চ নিরাপত্তা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SINGLE-DOCUMENT ATOMICITY:
db.orders.updateOne({ _id: 1 }, { $set: { status: "paid" }, $push: { log: "payment_ok" } })
-> Always atomic by default; no sessions or extra transaction overhead needed!

MULTI-DOCUMENT ACID TRANSACTION:
Transfer $500 from Account A to Account B:
1. Decrement Account A balance by 500
2. Increment Account B balance by 500
3. Insert transfer log into audit_ledger collection
-> All 3 operations must succeed together or roll back completely!`,
      caption: {
        en: 'Multi-document transactions guarantee that coordinated multi-collection changes succeed or fail as one.',
        bn: 'মাল্টি-ডকুমেন্ট ট্রানজ্যাকশন নিশ্চিত করে যে সব কাজ একসাথে সফল হবে অথবা সম্পূর্ণ বাতিল হবে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'ACID Transaction Lifecycle with ClientSession', bn: 'ClientSession সহযোগে এসিড ট্রানজ্যাকশন জীবনচক্র' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="MongoDB ACID Transaction Session Lifecycle">
<g transform="translate(20, 20)">
<rect x="0" y="0" width="180" height="140" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="90" y="30" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">Step 1: Session Init</text>
<text x="90" y="55" font-size="10" fill="#cbd5e1" text-anchor="middle">client.startSession()</text>
<text x="90" y="75" font-size="10" fill="#94a3b8" text-anchor="middle">Assigns unique lsid</text>
<text x="90" y="105" font-size="10" fill="#4ade80" text-anchor="middle">Starts boundary timer</text>

<path d="M185,70 L225,70" stroke="#38bdf8" stroke-width="2"/>

<rect x="230" y="0" width="220" height="140" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="340" y="30" font-size="12" font-weight="700" fill="#4ade80" text-anchor="middle">Step 2: Atomic Execution</text>
<text x="340" y="55" font-size="10" fill="#cbd5e1" text-anchor="middle">session.withTransaction()</text>
<text x="340" y="80" font-size="10" fill="#fca5a5" text-anchor="middle">1. Deduct Account A</text>
<text x="340" y="100" font-size="10" fill="#86efac" text-anchor="middle">2. Credit Account B</text>
<text x="340" y="120" font-size="10" fill="#94a3b8" text-anchor="middle">WiredTiger MVCC Snapshot</text>

<path d="M455,70 L495,70" stroke="#38bdf8" stroke-width="2"/>

<rect x="500" y="0" width="150" height="140" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="575" y="30" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">Step 3: Outcome</text>
<text x="575" y="65" font-size="10" fill="#86efac" text-anchor="middle">commitTransaction()</text>
<text x="575" y="90" font-size="10" fill="#cbd5e1" text-anchor="middle">w: "majority"</text>
<text x="575" y="115" font-size="9" fill="#f87171" text-anchor="middle">Or abortTransaction()</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Four ACID Pillars in MongoDB', bn: '২. MongoDB-তে এসিডের (ACID) চারটি মূল স্তম্ভ' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB transactions enforce strict ACID compliance. Atomicity ensures all-or-nothing execution. Consistency guarantees document validation schemas and unique constraints remain unviolated. Isolation utilizes WiredTiger multi-version concurrency control snapshot isolation. Finally, Durability combines with majority write concerns to prevent failover data loss.',
        bn: 'MongoDB ট্রানজ্যাকশন কঠোরভাবে এসিড মূলনীতি মেনে চলে। অ্যাটমিসিটি নিশ্চিত করে হয় সব কাজ হবে নয়তো কিছুই হবে না। কনসিস্টেন্সি স্কিমা নিয়ম ও ইউনিক ইনডেক্স অক্ষত রাখে। আইসোলেশন ওয়্যার্ডটাইগার স্ন্যাপশট আইসোলেশন ব্যবহার করে ট্রানজ্যাকশনগুলোকে পৃথক রাখে। আর ডিউরেবিলিটি মেজরিটি রাইট কনসার্ন দিয়ে নিশ্চিত করে যে ডেটা কখনো হারাবে না।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `ACID GUARANTEES IN MONGODB:
A (Atomicity)   : All document updates commit together, or all abort completely.
C (Consistency) : Unique indexes, schema rules, and foreign keys remain valid.
I (Isolation)   : Other clients see uncommitted changes only after commitTransaction.
D (Durability)  : Majority write concern guarantees data survives server reboot.`,
      caption: {
        en: 'MongoDB provides enterprise-grade ACID guarantees across replica sets and sharded clusters.',
        bn: 'মঙ্গোডিবি রেপ্লিকা সেট এবং শার্ডেড ক্লাস্টারে এন্টারপ্রাইজ গ্রেডের এসিড সুরক্ষা দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Client Sessions: The Foundation of Transactions', bn: '৩. ক্লায়েন্ট সেশন: ট্রানজ্যাকশনের ভিত্তিপ্রস্তর' } },
    {
      type: 'para',
      text: {
        en: 'In MongoDB, transactions cannot exist in isolation; they are strictly bound to a ClientSession. Initiated via client.startSession(), the session maintains a globally unique logical session identifier (lsid). The lsid correlates sequential database operations and coordinates lock acquisition inside the WiredTiger storage engine.',
        bn: 'MongoDB-তে কোনো ট্রানজ্যাকশন বিচ্ছিন্নভাবে চলতে পারে না; এটি সর্বদা একটি ClientSession-এর সাথে আবদ্ধ থাকে। client.startSession() দিয়ে শুরু হওয়া এই সেশন একটি স্বতন্ত্র লজিক্যাল সেশন আইডি (lsid) বজায় রাখে। এই lsid ডাটাবেসের ধারাবাহিক অপারেশনগুলোর মধ্যে সমন্বয় করে এবং ওয়্যার্ডটাইগার ইঞ্জিনে লক ধরে রাখতে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Initializing a client session:
const session = client.startSession();

try {
  console.log("Logical Session ID initialized:", session.id);
  // Session handles transaction boundary lifecycle
} finally {
  await session.endSession(); // Clean up session resources
}

console.log("Session resources released cleanly back to the driver pool");
// Output: Session resources released cleanly back to the driver pool`,
      caption: {
        en: 'Client sessions bind multi-operation sequences under a unified logical session ID.',
        bn: 'ক্লায়েন্ট সেশন একাধিক ডাটাবেস অপারেশনকে একটি নির্দিষ্ট সেশন আইডির আওতায় আনে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The withTransaction API: Automated Retry Architecture', bn: '৪. withTransaction এপিআই: স্বয়ংক্রিয় রিট্রাই ব্যবস্থা' } },
    {
      type: 'para',
      text: {
        en: 'Instead of manually coordinating startTransaction, commit, and abort with verbose try-catch blocks, MongoDB drivers provide the high-level withTransaction() helper. This helper automatically handles transient network glitches (TransientTransactionError) and uncertain commits (UnknownTransactionCommitResult) by executing intelligent retries.',
        bn: 'ম্যানুয়ালি startTransaction, commit বা abort পরিচালনা না করে আধুনিক ড্রাইভারগুলো withTransaction() নামক একটি চমৎকার হেল্পার ফাংশন দেয়। এটি নেটওয়ার্কের সাময়িক ত্রুটি (TransientTransactionError) বা কমিট নিশ্চিত না হওয়ার (UnknownTransactionCommitResult) মতো সমস্যায় ড্রাইভারের ভেতর থেকেই নিজে নিজে রিট্রাই চালিয়ে কাজ সফল করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Executing work inside the resilient withTransaction helper:
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    // 1. Step A: Deduct 100
    await db.collection("wallets").updateOne(
      { userId: 101 },
      { $inc: { balance: -100 } },
      { session }
    );

    // 2. Step B: Add 100
    await db.collection("wallets").updateOne(
      { userId: 202 },
      { $inc: { balance: 100 } },
      { session }
    );
  });
  console.log("Transaction auto-committed with built-in transient retry handling");
} finally {
  await session.endSession();
}
// Output: Transaction auto-committed with built-in transient retry handling`,
      caption: {
        en: 'The withTransaction helper encapsulates transaction boundary retries automatically.',
        bn: 'withTransaction হেল্পার স্বয়ংক্রিয়ভাবে ট্রানজ্যাকশন শুরু, কমিট ও ব্যর্থ হলে রিট্রাই করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Transaction Limits: 60 Seconds & 16 MB OpLog Cap', bn: '৫. ট্রানজ্যাকশনের সীমাবদ্ধতা: ৬০ সেকেন্ড ও ১৬ মেগাবাইট সীমা' } },
    {
      type: 'para',
      text: {
        en: 'Transactions are intended for rapid, localized operations. MongoDB enforces two strict architectural ceilings. First, a maximum lifetime limit of 60 seconds is enforced via transactionLifetimeLimitSeconds. Second, the cumulative oplog entries for all operations in a transaction cannot exceed the 16 MB BSON document limit.',
        bn: 'ট্রানজ্যাকশন দ্রুতগতির স্বল্পমেয়াদী কাজের জন্য তৈরি। MongoDB এতে দুটি কঠোর স্থাপত্য সীমা বেঁধে দিয়েছে: ১) ট্রানজ্যাকশনের সর্বোচ্চ মেয়াদ ৬০ সেকেন্ড (transactionLifetimeLimitSeconds), এর বেশি সময় নিলে সার্ভার নিজে থেকেই এটি বাতিল করে লক ছেড়ে দেয়। ২) একটি ট্রানজ্যাকশনের সব ডেটার মোট অপলগ আকার কোনোভাবেই ১৬ মেগাবাইট বিএসওএন সীমা ছাড়াতে পারে না।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `TRANSACTION CONSTRAINTS SUMMARY:
1. Duration Limit: Max 60 seconds (Configurable via transactionLifetimeLimitSeconds).
2. Size Limit    : Max 16 MB total OpLog footprint per transaction.
3. Lock Scope    : WiredTiger holds write locks on modified documents until commit.
4. Recommendation: Do NOT run long batch imports or analytics inside transactions!`,
      caption: {
        en: 'Transactions must remain brief to avoid holding storage engine write locks.',
        bn: 'লক ধরে রাখা এড়াতে ট্রানজ্যাকশন সর্বদা দ্রুত শেষ করা উচিত।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Handling Write Conflicts: WriteConflictException', bn: '৬. রাইট কনফ্লিক্ট ও WriteConflictException মোকাবেলা' } },
    {
      type: 'para',
      text: {
        en: 'When two concurrent transactions attempt to modify the same document simultaneously, the second transaction encounters a WriteConflictException. WiredTiger uses optimistic concurrency: rather than blocking indefinitely, the conflicting transaction aborts immediately with a TransientTransactionError so the driver can back off and retry cleanly.',
        bn: 'যখন দুটি ভিন্ন ট্রানজ্যাকশন একই সাথে একটি নির্দিষ্ট ডকুমেন্ট আপডেট করতে যায়, তখন দ্বিতীয় ট্রানজ্যাকশনটিতে WriteConflictException ঘটে। ওয়্যার্ডটাইগার অপটিমিস্টিক কনকারেন্সি ব্যবহার করে: অনির্দিষ্টকাল আটকে না রেখে এটি দ্বিতীয়টিকে TransientTransactionError দিয়ে সাময়িক বাতিল করে, যাতে ড্রাইভার একটু বিরতি দিয়ে আবার শান্তভাবে কাজ সম্পন্ন করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Simulating optimistic concurrency collision handling:
async function updateAccountWithRetry(db, client, accountId, delta) {
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const acc = await db.collection("accounts").findOne({ _id: accountId }, { session });
      if (acc.balance + delta < 0) throw new Error("Insufficient funds");

      await db.collection("accounts").updateOne(
        { _id: accountId },
        { $inc: { balance: delta } },
        { session }
      );
    });
    console.log("Account updated safely despite concurrent write attempts");
  } finally {
    await session.endSession();
  }
}
// Output: Account updated safely despite concurrent write attempts`,
      caption: {
        en: 'Optimistic concurrency detects collisions and triggers rapid driver retries.',
        bn: 'অপটিমিস্টিক কনকারেন্সি বিরোধ শনাক্ত করে এবং দ্রুত রিট্রাই করে ত্রুটি এড়ায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Read Isolation Levels: Snapshot vs Majority', bn: '৭. রিড আইসোলেশন স্তর: স্ন্যাপশট বনাম মেজরিটি' } },
    {
      type: 'para',
      text: {
        en: 'Inside a transaction, reads default to snapshot read concern level. A snapshot provides a point-in-time view of data taken at the exact instant the transaction starts. Even if other outside operations modify documents while your transaction is running, your queries observe consistent, unchanged data throughout the session.',
        bn: 'ট্রানজ্যাকশনের ভেতরে ডেটা পড়ার ক্ষেত্রে ডিফল্ট হিসেবে স্ন্যাপশট (snapshot) রিড কনসার্ন কাজ করে। স্ন্যাপশট ট্রানজ্যাকশন শুরু হওয়ার মুহূর্তের একটি স্থির ছবি তুলে ধরে। আপনার ট্রানজ্যাকশন চলাকালীন বাইরে থেকে অন্য কোনো ইউজার ডেটা পরিবর্তন করলেও আপনার সেশনের ভেতরের কুয়েরিগুলোতে ডেটা পুরোপুরি অবিকৃত ও সামঞ্জস্যপূর্ণ থাকবে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Configuring snapshot read concern in transaction options:
const transactionOptions = {
  readPreference: "primary",
  readConcern: { level: "snapshot" },
  writeConcern: { w: "majority" }
};

session.startTransaction(transactionOptions);
console.log("Transaction running under strict point-in-time snapshot isolation");
// Output: Transaction running under strict point-in-time snapshot isolation`,
      caption: {
        en: 'Snapshot isolation ensures reads observe an unvarying point-in-time dataset.',
        bn: 'স্ন্যাপশট আইসোলেশন নিশ্চিত করে যে ট্রানজ্যাকশন চলাকালীন ডেটা স্থির থাকবে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Distributed Transactions Across Shards: Two-Phase Commit', bn: '৮. শার্ডজুড়ে বিস্তৃত ডিস্ট্রিবিউটেড ট্রানজ্যাকশন: টু-ফেজ কমিট' } },
    {
      type: 'para',
      text: {
        en: 'When a transaction modifies documents stored on distinct shards, MongoDB automatically activates a distributed transaction. One shard is selected as the Transaction Coordinator, utilizing a Two-Phase Commit (2PC) protocol (Prepare phase followed by Commit phase) to guarantee cluster-wide atomic synchronization across all participating shards.',
        bn: 'যখন কোনো ট্রানজ্যাকশনের কাজ একাধিক ভিন্ন ভিন্ন শার্ডে থাকা ডকুমেন্টে হাত দেয়, তখন MongoDB নিজে থেকেই একটি ডিস্ট্রিবিউটেড ট্রানজ্যাকশন চালু করে। তখন একটি শার্ড ট্রানজ্যাকশন কোঅর্ডিনেটর হিসেবে টু-ফেজ কমিট (2PC) প্রোটোকল পরিচালনা করে (Prepare ধাপ ও পরে Commit ধাপ), যা ক্লাস্টারের সব নোডের মাঝে নিখুঁত সামঞ্জস্য নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `DISTRIBUTED TWO-PHASE COMMIT (2PC) IN SHARDED CLUSTERS:
[mongos Router] ---> Initiates transaction touching Shard 1 and Shard 2
      |
      v
[Shard 1 elected Coordinator]
      |
      +---> Phase 1 (Prepare): Asks Shard 1 & Shard 2: "Can you commit?"
      |     Shard 1: "YES, PREPARED"
      |     Shard 2: "YES, PREPARED"
      |
      +---> Phase 2 (Commit): Writes "commitTransaction" decision to coordinator OpLog.
            Sends final COMMIT command to all participants.
(Zero chance of partial updates across physical cluster machines!)`,
      caption: {
        en: 'The internal Two-Phase Commit protocol ensures atomic commits across multiple shards.',
        bn: 'টু-ফেজ কমিট প্রোটোকল বিভিন্ন শার্ডে ছড়িয়ে থাকা ডেটার অবিভাজ্য কমিট নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Financial Bank Transfer Case Study', bn: '৯. কেস স্টাডি: ব্যাংকিং ফান্ড ট্রান্সফার বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'In financial banking, transferring money between accounts requires three synchronized operations: 1) Debiting sender wallet, 2) Crediting recipient wallet, and 3) Writing an immutable audit ledger entry. If the server loses power at step 2, the transaction aborts cleanly, ensuring money never vanishes into thin air.',
        bn: 'ব্যাংকিং খাতে এক অ্যাকাউন্ট থেকে অন্য অ্যাকাউন্টে টাকা পাঠাতে তিনটি কাজ একসাথে হতে হয়: ১) প্রেরকের একাউন্ট থেকে টাকা কাটা, ২) প্রাপকের একাউন্টে টাকা যোগ করা এবং ৩) লেনদেনের একটি অডিট লগ লেখা। ২ নম্বর ধাপে সার্ভার ক্র্যাশ করলেও পুরো লেনদেন বাতিল হয়ে যায়, ফলে টাকা হারিয়ে যাওয়ার কোনো সুযোগ থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Financial transfer schema verification:
const auditEntry = {
  transferId: "tx_99812",
  senderId: 1042,
  receiverId: 5081,
  amount: 2500,
  timestamp: new Date()
};

console.log("Audit ledger entry generated with verified transfer payload");
// Output: Audit ledger entry generated with verified transfer payload`,
      caption: {
        en: 'Transactions ensure that ledger records match wallet state changes perfectly.',
        bn: 'ট্রানজ্যাকশন নিশ্চিত করে যে অডিট লগ এবং অ্যাকাউন্টের ব্যালেন্সের হিসাব হুবহু মিলবে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Complete Production Implementation in Node.js', bn: '১০. Node.js-এ সম্পূর্ণ প্রোডাকশন ফান্ড ট্রান্সফার কোড' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production-grade banking transfer module utilizing the Node.js MongoDB driver with custom validation, balance checks, and automated retry handling.',
        bn: 'নিচে Node.js MongoDB ড্রাইভার ব্যবহার করে ব্যালেন্স যাচাই ও স্বয়ংক্রিয় রিট্রাই সুবিধা সমৃদ্ধ একটি পূর্ণাঙ্গ প্রোডাকশন ব্যাংকিং ফান্ড ট্রান্সফার কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Production bank transfer service:
import { MongoClient } from "mongodb";

async function executeBankTransfer(client, fromId, toId, transferAmount) {
  const session = client.startSession();
  try {
    const result = await session.withTransaction(async () => {
      const wallets = client.db("bank").collection("wallets");
      const ledger = client.db("bank").collection("ledger");

      // 1. Verify sender has sufficient funds
      const sender = await wallets.findOne({ _id: fromId }, { session });
      if (!sender || sender.balance < transferAmount) {
        throw new Error("Insufficient funds for transfer");
      }

      // 2. Deduct from sender
      await wallets.updateOne({ _id: fromId }, { $inc: { balance: -transferAmount } }, { session });

      // 3. Add to receiver
      await wallets.updateOne({ _id: toId }, { $inc: { balance: transferAmount } }, { session });

      // 4. Create immutable audit record
      await ledger.insertOne({
        from: fromId,
        to: toId,
        amount: transferAmount,
        createdAt: new Date()
      }, { session });

      return { status: "success", amount: transferAmount };
    });

    return result;
  } finally {
    await session.endSession();
  }
}

console.log("Production banking transfer engine initialized with ACID guarantees");
// Output: Production banking transfer engine initialized with ACID guarantees`,
      caption: {
        en: 'A production bank transfer service leveraging withTransaction for ACID durability.',
        bn: 'একটি প্রোডাকশন ব্যাংক ট্রান্সফার সার্ভিস যা withTransaction দিয়ে এসিড নিরাপত্তা দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-txn-ex1',
      kind: 'predict',
      topic: 'mongodb: default transaction lifetime limit in seconds',
      question: {
        en: 'What is the default lifetime ceiling limit (in seconds) for a MongoDB transaction before it is automatically aborted?',
        bn: 'MongoDB ট্রানজ্যাকশন স্বয়ংক্রিয়ভাবে বাতিল হওয়ার আগে ডিফল্ট সর্বোচ্চ কত সেকেন্ড (transactionLifetimeLimitSeconds) সময় পায়?'
      },
      code: `/* Default transactionLifetimeLimitSeconds value: */
/* lifetime = __ seconds */`,
      answer: '60',
      accept: ['60', '60s', '60 seconds'],
      hint: {
        en: '60 seconds.',
        bn: '৬০ সেকেন্ড।'
      },
      explanation: {
        en: 'MongoDB enforces a 60-second default limit to prevent long-running transactions from holding storage engine locks indefinitely.',
        bn: 'MongoDB ৬০ সেকেন্ডের ডিফল্ট সীমা রাখে যাতে কোনো ট্রানজ্যাকশন দীর্ঘক্ষণ ডাটাবেস লক করে না রাখে।'
      }
    },
    {
      id: 'mng-txn-ex2',
      kind: 'mcq',
      topic: 'mongodb: withTransaction helper utility',
      question: {
        en: 'What is the primary architectural advantage of using the "session.withTransaction()" helper instead of manual commit/abort blocks?',
        bn: 'ম্যানুয়াল কমিট বা অ্যাবোর্ট ব্লকের বদলে "session.withTransaction()" হেল্পার ফাংশন ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        { en: 'It automatically catches transient errors (like network hiccups or write conflicts) and retries the transaction cleanly', bn: 'এটি সাময়িক ত্রুটিগুলো (যেমন নেটওয়ার্ক বিভ্রাট বা রাইট কনফ্লিক্ট) নিজে থেকেই ধরে শান্তভাবে পুনরায় চেষ্টা চালায়' },
        { en: 'It bypasses database authentication', bn: 'ডাটাবেস অথেনটিকেশন এড়িয়ে যায়' },
        { en: 'It makes all queries run in Python', bn: 'সব কুয়েরি পাইথনে চালায়' },
        { en: 'It doubles the RAM of the server', bn: 'সার্ভারের র‍্যাম দ্বিগুণ করে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Automates retry handling for transient errors.',
        bn: 'সাময়িক ত্রুটিতে স্বয়ংক্রিয় রিট্রাই চালায়।'
      },
      explanation: {
        en: 'The withTransaction helper encapsulates commit retries and handles TransientTransactionError without requiring manual retry loops in application code.',
        bn: 'withTransaction হেল্পার কোডে বাড়তি লুপ না লিখেও সাময়িক ত্রুটিগুলো নিজে থেকে রিট্রাই করে সমাধান করে।'
      }
    },
    {
      id: 'mng-txn-ex3',
      kind: 'mcq',
      topic: 'mongodb: distributed transactions protocol',
      question: {
        en: 'Which consensus protocol does MongoDB use internally to coordinate distributed transactions spanning multiple physical shards?',
        bn: 'একাধিক শার্ডজুড়ে বিস্তৃত ডিস্ট্রিবিউটেড ট্রানজ্যাকশন সমন্বয় করতে MongoDB কোন প্রোটোকলটি ব্যবহার করে?'
      },
      options: [
        { en: 'Two-Phase Commit (2PC)', bn: 'টু-ফেজ কমিট (2PC)' },
        { en: 'Proof of Work (PoW)', bn: 'প্রুফ অব ওয়ার্ক (PoW)' },
        { en: 'Simple Mail Transfer Protocol', bn: 'এসএমটিপি প্রোটোকল' },
        { en: 'Round Robin DNS', bn: 'রাউন্ড রবিন ডিএনএস' }
      ],
      answer: 0,
      hint: {
        en: 'Two-Phase Commit (2PC).',
        bn: 'টু-ফেজ কমিট (2PC)।'
      },
      explanation: {
        en: 'MongoDB coordinates multi-shard transactions using an internal Two-Phase Commit protocol (Prepare and Commit phases) to guarantee all-or-nothing execution.',
        bn: 'MongoDB বিভিন্ন শার্ডের মাঝে অবিভাজ্য কমিট নিশ্চিত করতে টু-ফেজ কমিট (2PC) প্রোটোকল ব্যবহার করে।'
      }
    }
  ],
  quiz: {
    id: 'mng-txn-quiz',
    title: { en: 'MongoDB Multi-Document ACID Transactions Quiz', bn: 'MongoDB মাল্টি-ডকুমেন্ট এসিড ট্রানজ্যাকশন কুইজ' },
    questions: [
      {
        id: 'mtq1',
        kind: 'mcq',
        topic: 'mongodb: snapshot isolation behavior',
        question: {
          en: 'What does "snapshot" read concern guarantee when executing queries inside an active transaction session?',
          bn: 'একটি সক্রিয় ট্রানজ্যাকশন সেশনের ভেতরে কুয়েরি চালানোর সময় "snapshot" রিড কনসার্ন কী নিশ্চয়তা দেয়?'
        },
        options: [
          { en: 'Queries see a synchronized point-in-time view of data unaffected by outside concurrent modifications', bn: 'কুয়েরিগুলো ট্রানজ্যাকশন শুরুর মুহূর্তের একটি অপরিবর্তনশীল রূপ দেখে, যা বাইরের অন্যান্য পরিবর্তনে প্রভাবিত হয় না' },
          { en: 'All data is converted to JPEG image snapshots', bn: 'সব ডেটা জেপেগ ছবিতে পরিণত হয়' },
          { en: 'It drops the database if a query takes over 1 second', bn: '১ সেকেন্ডের বেশি সময় নিলে ডাটাবেস মুছে দেয়' },
          { en: 'It forces secondaries to shut down', bn: 'সেকেন্ডারিগুলো বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Provides a point-in-time snapshot view of data.',
          bn: 'ডেটার একটি নির্দিষ্ট সময়ের স্থির দৃশ্যপট প্রদান করে।'
        },
        explanation: {
          en: 'Snapshot read concern guarantees point-in-time isolation: operations inside the transaction observe data consistent with the moment the transaction started.',
          bn: 'স্ন্যাপশট রিড কনসার্ন ট্রানজ্যাকশন শুরু হওয়ার মুহূর্তের ডেটাকে স্থির রেখে সম্পূর্ণ সেশনে অভিন্ন তথ্য প্রদর্শন করে।'
        }
      },
      {
        id: 'mtq2',
        kind: 'mcq',
        topic: 'mongodb: write conflict exception cause',
        question: {
          en: 'What causes a WriteConflictException during transaction execution in MongoDB?',
          bn: 'MongoDB-তে ট্রানজ্যাকশন চলাকালীন WriteConflictException কেন ঘটে?'
        },
        options: [
          { en: 'Two concurrent transactions attempting to modify the same document simultaneously', bn: 'দুটি সমসাময়িক ট্রানজ্যাকশন একই সাথে একটি নির্দিষ্ট ডকুমেন্ট পরিবর্তন করতে চেষ্টা করলে' },
          { en: 'Running MongoDB on an Apple Mac', bn: 'ম্যাক কম্পিউটারে মঙ্গোডিবি চালালে' },
          { en: 'Using numbers instead of strings in JSON', bn: 'স্ট্রিংয়ের বদলে সংখ্যা ব্যবহার করলে' },
          { en: 'When disk space reaches 90 percent capacity', bn: 'হার্ডডিস্ক ৯০% পূর্ণ হলে' }
        ],
        answer: 0,
        hint: {
          en: 'Concurrent transactions touching the exact same document.',
          bn: 'একাধিক ট্রানজ্যাকশন একই সাথে একই ডকুমেন্টে হাত দিলে।'
        },
        explanation: {
          en: 'When two concurrent operations contend for the same document lock, WiredTiger terminates one with WriteConflictException to avoid deadlock, prompting a retry.',
          bn: 'একই ডকুমেন্টের ওপর দুটি ট্রানজ্যাকশন কাজ করতে গেলে ডেডলক এড়াতে একটিতে WriteConflictException ঘটিয়ে তা রিট্রাই করানো হয়।'
        }
      },
      {
        id: 'mtq3',
        kind: 'mcq',
        topic: 'mongodb: transaction default lifetime ceiling',
        question: {
          en: 'What is the default duration limit in seconds for a MongoDB transaction before the coordinator aborts it?',
          bn: 'কমিট না হলে একটি MongoDB ট্রানজ্যাকশন ডিফল্ট কত সেকেন্ড পর নিজে থেকেই বাতিল হয়ে যায়?'
        },
        options: [
          { en: '60 seconds', bn: '৬০ সেকেন্ড' },
          { en: '10 seconds', bn: '১০ সেকেন্ড' },
          { en: '300 seconds', bn: '৩০০ সেকেন্ড' },
          { en: 'Unlimited', bn: 'কোনো সময়সীমা নেই' }
        ],
        answer: 0,
        hint: {
          en: '60 seconds.',
          bn: '৬০ সেকেন্ড।'
        },
        explanation: {
          en: 'MongoDB sets transactionLifetimeLimitSeconds to 60 seconds to release locks promptly.',
          bn: 'মেমরি লক দ্রুত মুক্ত করতে MongoDB ট্রানজ্যাকশনের মেয়াদ ৬০ সেকেন্ডে সীমাবদ্ধ রাখে।'
        }
      },
      {
        id: 'mtq4',
        kind: 'mcq',
        topic: 'mongodb: automated retry helper',
        question: {
          en: 'Which helper method provided by MongoDB client sessions automatically manages transaction start, commit, abort, and transient error retries?',
          bn: 'MongoDB ক্লায়েন্ট সেশনের কোন মেথডটি স্বয়ংক্রিয়ভাবে ট্রানজ্যাকশন শুরু, কমিট, বাতিল ও সাময়িক ত্রুটির রিট্রাই পরিচালনা করে?'
        },
        options: [
          { en: 'session.withTransaction()', bn: 'session.withTransaction()' },
          { en: 'session.runLoop()', bn: 'session.runLoop()' },
          { en: 'session.tryCommit()', bn: 'session.tryCommit()' },
          { en: 'session.autoRetry()', bn: 'session.autoRetry()' }
        ],
        answer: 0,
        hint: {
          en: 'session.withTransaction() helper.',
          bn: 'session.withTransaction() হেল্পার।'
        },
        explanation: {
          en: 'The withTransaction API encapsulates complete transaction management and automated retries.',
          bn: 'withTransaction এপিআই ট্রানজ্যাকশনের শুরু থেকে শেষ এবং ত্রুটির রিট্রাই সম্পূর্ণ স্বয়ংক্রিয়ভাবে চালায়।'
        }
      }
    ]
  }
};
