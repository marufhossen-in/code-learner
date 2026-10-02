import type { Lesson } from '../../../lib/types';

export const transactionVaultLesson: Lesson = {
  slug: 'the-transaction-vault',
  tech: 'sql',
  title: {
    en: 'SQL Transactions: ACID Properties, Isolation Levels & Locking',
    bn: 'এসকিউএল ট্রানজ্যাকশন: ACID বৈশিষ্ট্য, আইসোলেশন লেভেল ও লকিং'
  },
  summary: {
    en: 'Master enterprise data reliability across 10 structured topics: transactions and ACID properties, write-ahead logging, and TCL commands. Explore granular SAVEPOINT rollbacks, concurrency anomalies, ANSI isolation levels, row locks, SELECT FOR UPDATE, and deadlock resolution.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ডেটা নির্ভরযোগ্যতা আয়ত্ত করুন: ট্রানজ্যাকশন ও ACID বৈশিষ্ট্য, WAL স্থায়িত্ব এবং TCL কমান্ড। জানুন SAVEPOINT রোলব্যাক, কনকারেন্সি সমস্যা, ANSI আইসোলেশন লেভেল, রো লক, SELECT FOR UPDATE এবং ডেডলক সমাধান।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'sql-performance',
    title: { en: 'SQL Indexing & Performance: B-Trees, Execution Plans & Optimization', bn: 'এসকিউএল ইনডেক্সিং ও পারফরম্যান্স: B-Tree, এক্সিকিউশন প্ল্যান ও অপ্টিমাইজেশন' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Unit of Work: Transactions and ACID Properties', bn: '১. কাজের অবিভাজ্য একক: ট্রানজ্যাকশন ও ACID বৈশিষ্ট্য' } },
    {
      type: 'para',
      text: {
        en: 'A database transaction bundles multiple SQL statements into a single, indivisible unit of work. Relational engines enforce four core reliability guarantees known as ACID (Atomicity, Consistency, Isolation, and Durability). Either every statement completes cleanly or the entire batch rolls back with zero partial writes.',
        bn: 'একটি ডাটাবেস ট্রানজ্যাকশন একাধিক এসকিউএল স্টেটমেন্টকে একটিমাত্র অবিভাজ্য লজিক্যাল ইউনিটে আবদ্ধ করে। রিলেশনাল ডাটাবেস চারটি অপরিহার্য মূলনীতি নিশ্চিত করে, যা সংক্ষেপে ACID (Atomicity, Consistency, Isolation, Durability) নামে পরিচিত। এখানে হয় প্রতিটি কাজ নিখুঁতভাবে শেষ হবে, নয়তো পুরো ব্যাচটি বাতিল হয়ে যাবে।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- The classic banking transfer: Either BOTH updates succeed, or NEITHER occurs!
BEGIN TRANSACTION;

-- Step 1: Deduct $500 from sender
UPDATE bank_accounts SET balance = balance - 500 WHERE account_id = 101;

-- Step 2: Credit $500 to recipient
UPDATE bank_accounts SET balance = balance + 500 WHERE account_id = 202;

COMMIT;

-- Output:
-- BEGIN TRANSACTION succeeded.
-- UPDATE 1 (Account 101 balance updated)
-- UPDATE 1 (Account 202 balance updated)
-- COMMIT TRANSACTION completed.
-- Result: Both accounts updated atomically with zero balance leakage`,
      caption: {
        en: 'Atomicity ensures money never vanishes between sender deduction and receiver credit.',
        bn: 'অ্যাটোমিসিটি নিশ্চিত করে টাকা পাঠানো ও জমার মাঝে কখনোই হারিয়ে যাবে না।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Atomicity & Durability: Write-Ahead Logging (WAL)', bn: '২. স্থায়িত্ব নিশ্চিতকরণ: রাইট-অ্যাহেড লগিং (WAL) ও ক্র্যাশ রিকভারি' } },
    {
      type: 'para',
      text: {
        en: 'How do databases guarantee Durability if power fails mid-transaction? Relational engines use Write-Ahead Logging (WAL). Changes are appended sequentially to a durable on-disk log file BEFORE being flushed to data tables. Upon server restart, the crash recovery engine replays committed transactions from the WAL and rolls back uncommitted fragments.',
        bn: 'কাজের মাঝে বিদ্যুৎ চলে গেলেও কীভাবে ডাটাবেস স্থায়িত্ব (Durability) রক্ষা করে? রিলেশনাল ইঞ্জিন রাইট-অ্যাহেড লগিং (WAL) ব্যবহার করে। মূল টেবিলে ডেটা লেখার আগেই পরিবর্তনের প্রতিটি ধাপ ডিস্কের একটি লগ ফাইলে লিখে রাখা হয়। সার্ভার পুনরায় চালু হলে ক্র্যাশ রিকভারি ইঞ্জিন লগ ফাইল দেখে কমিট হওয়া কাজগুলো নিশ্চিত করে এবং অসমাপ্ত কাজগুলো বাতিল করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- WAL ensures recovery sequence upon unexpected crash:
-- 1. [WAL Append]: LSN 8401 -> UPDATE balance id=101 (-500)
-- 2. [WAL Append]: LSN 8402 -> UPDATE balance id=202 (+500)
-- 3. [WAL Append]: LSN 8403 -> COMMIT
-- [POWER FAILURE OCCURS!]
-- On reboot: Crash recovery scans LSN 8403 (COMMIT found -> replays changes to table pages)

SELECT account_id, balance FROM bank_accounts WHERE account_id IN (101, 202);

-- Output:
-- 101 | 4500.00
-- 202 | 1500.00
-- Result: Persistent integrity verified after simulated power outage`,
      caption: {
        en: 'Write-Ahead Logging guarantees data durability prior to dirty page memory flushing.',
        bn: 'রাইট-অ্যাহেড লগিং মেমোরির ডেটা ডিস্কে সেভ হওয়ার আগেই স্থায়িত্ব নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Transaction Control: BEGIN, COMMIT, and ROLLBACK', bn: '৩. ট্রানজ্যাকশন নিয়ন্ত্রণ: BEGIN, COMMIT এবং ROLLBACK' } },
    {
      type: 'para',
      text: {
        en: 'The standard Transaction Control Language (TCL) manages transaction boundaries. BEGIN suspends autocommit mode; COMMIT persists modifications permanently to disk; and ROLLBACK safely aborts the transaction, reverting all modified rows.',
        bn: 'ট্রানজ্যাকশন নিয়ন্ত্রণের মূল কমান্ডগুলো সীমানা নির্ধারণ করে। BEGIN স্বয়ংক্রিয় সেভ স্থগিত রাখে; COMMIT সমস্ত পরিবর্তন স্থায়ীভাবে ডিস্কে সেভ করে; আর ROLLBACK কাজ বাতিল করে সমস্ত পরিবর্তন পূর্বের অবস্থায় ফিরিয়ে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Simulating a failed transaction rollback:
BEGIN TRANSACTION;

UPDATE warehouse_stock SET reserved_qty = reserved_qty + 10 WHERE item_id = 901;

-- Business validation fails: Customer credit card was rejected!
ROLLBACK; -- Discard all reservation modifications!

-- Verify inventory state:
SELECT item_id, reserved_qty FROM warehouse_stock WHERE item_id = 901;

-- Output:
-- BEGIN TRANSACTION
-- UPDATE 1
-- ROLLBACK TRANSACTION completed.
-- 901 | 0
-- Result: Database cleanly reverted; zero residual inventory locks remain`,
      caption: {
        en: 'ROLLBACK safely resets all modifications when unexpected runtime errors occur.',
        bn: 'ROLLBACK কোনো ত্রুটি ঘটলে সমস্ত পরিবর্তন বাতিল করে আগের অবস্থায় ফিরিয়ে আনে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Granular Error Recovery: The SAVEPOINT Command', bn: '৪. আংশিক পরিবর্তন বাতিল: SAVEPOINT কমান্ডের ব্যবহার' } },
    {
      type: 'para',
      text: {
        en: 'In complex multi-step workflows, aborting an entire batch when a single sub-task fails is inefficient. The SAVEPOINT savepoint_name statement creates intermediate checkpoints within a transaction. Using ROLLBACK TO SAVEPOINT reverts changes made after that checkpoint while keeping prior successful steps intact.',
        bn: 'জটিল কাজের ক্ষেত্রে একটিমাত্র সাব-টাস্ক ব্যর্থ হলে পুরো ট্রানজ্যাকশন বাতিল করা অযৌক্তিক। SAVEPOINT স্টেটমেন্ট ট্রানজ্যাকশনের ভেতরে এক বা একাধিক চেকপয়েন্ট তৈরি করে রাখে। এরপর ROLLBACK TO SAVEPOINT দিলে কেবল সেই চেকপয়েন্টের পরের পরিবর্তনগুলো বাতিল হয়, কিন্তু আগের সফল কাজগুলো অক্ষত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `BEGIN TRANSACTION;

-- Step 1: Create invoice (Successful)
INSERT INTO customer_invoices (invoice_id, amount) VALUES (401, 1200.00);

SAVEPOINT invoice_created; -- Create intermediate checkpoint

-- Step 2: Attempt optional promotional gift delivery
INSERT INTO gift_deliveries (invoice_id, gift_sku) VALUES (401, 'GIFT-FREE');

-- If promotion inventory is depleted, rollback ONLY the gift, not the invoice:
ROLLBACK TO SAVEPOINT invoice_created;

-- Finalize transaction: Invoice survives; gift attempt discarded cleanly!
COMMIT;

-- Output:
-- Invoice 401 recorded successfully.
-- Result: Partial rollback handled cleanly without destroying primary transaction`,
      caption: {
        en: 'SAVEPOINT enables granular rollbacks without aborting the overarching transaction.',
        bn: 'SAVEPOINT পুরো কাজ না ভেঙে নির্দিষ্ট অংশের পরিবর্তন বাতিল করার সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Concurrency Anomalies: Dirty, Non-Repeatable & Phantom Reads', bn: '৫. কনকারেন্সি সমস্যা: ডার্টি রিড, নন-রিপিটেবল রিড ও ফ্যান্টম রিড' } },
    {
      type: 'para',
      text: {
        en: 'When multiple transactions run concurrently, three classic read phenomena can corrupt state. Dirty Read occurs when uncommitted changes are read and later rolled back. Non-Repeatable Read re-reads modified column values. Phantom Read discovers newly inserted rows in range queries.',
        bn: 'একসাথে একাধিক ট্রানজ্যাকশন চললে তিন ধরনের সমস্যা হতে পারে। Dirty Read ঘটে যখন অন্য কারো আনকমিটেড ডেটা পড়ে ফেলা হয় যা পরে বাতিল হয়। Non-Repeatable Read একই সারির পরিবর্তিত মান দেখে। Phantom Read রেঞ্জ কোয়ারিতে নতুন সারি আবিষ্কার করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Concurrency Hazard Timeline:
-- TX 1: SELECT balance FROM account WHERE id=1; -> Reads 100
-- TX 2: UPDATE account SET balance = 0 WHERE id=1; (Uncommitted!)
-- TX 1: Reads 0 (DIRTY READ! TX 2 subsequently executes ROLLBACK!)
-- TX 1 made irreversible decisions based on phantom money that never committed.

-- Mitigation: Enforce appropriate Isolation Levels in database session!`,
      caption: {
        en: 'Concurrency anomalies arise when uncommitted or mutating records bleed across sessions.',
        bn: 'আনকমিটেড বা পরিবর্তনশীল ডেটা অন্য সেশনে ঢুকে পড়লে কনকারেন্সি সমস্যা দেখা দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. ANSI SQL Isolation Levels', bn: '৬. ANSI এসকিউএল আইসোলেশন লেভেল' } },
    {
      type: 'para',
      text: {
        en: 'The ANSI SQL standard defines 4 Isolation Levels to balance concurrency and safety. Read Uncommitted allows dirty reads. Read Committed prevents dirty reads. Repeatable Read prevents non-repeatable reads. Serializable enforces strict serial execution order.',
        bn: 'ANSI এসকিউএল গতি ও নিরাপত্তার ভারসাম্য রাখতে 4 টি আইসোলেশন লেভেল নির্ধারণ করেছে। Read Uncommitted ডার্টি রিডের সুযোগ দেয়। Read Committed ডার্টি রিড ঠেকায়। Repeatable Read নন-রিপিটেবল রিড ঠেকায়। Serializable কঠোরতম সিরিয়াল অর্ডার নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Setting transaction isolation level explicitly:
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

BEGIN TRANSACTION;

-- Re-reading balance inside Repeatable Read guarantees identical values
SELECT balance FROM customer_wallets WHERE wallet_id = 99; -- 500.00
-- Even if another transaction updates wallet 99 and commits, this session still sees 500.00!
SELECT balance FROM customer_wallets WHERE wallet_id = 99; -- 500.00 (Guaranteed identical!)

COMMIT;

-- Output:
-- Isolation level REPEATABLE READ active.
-- Result: Non-repeatable reads eliminated via Multi-Version Concurrency Control (MVCC)`,
      caption: {
        en: 'Higher isolation levels eliminate anomalies at the expense of concurrency throughput.',
        bn: 'উচ্চ আইসোলেশন লেভেল ত্রুটি দূর করে কিন্তু কনকারেন্সি গতি সামান্য কমায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Locking Mechanisms: Shared (S) vs Exclusive (X) Locks', bn: '৭. লকিং মেকানিজম: শেয়ার্ড (S) বনাম এক্সক্লুসিভ (X) লক' } },
    {
      type: 'para',
      text: {
        en: 'Databases synchronize access to shared physical pages using Locks. Shared Locks (S-locks) allow multiple readers to read rows concurrently without blocking. Exclusive Locks (X-locks) are acquired during writes, granting exclusive access and blocking other sessions until commit.',
        bn: 'ডেটার নিরাপত্তা নিশ্চিত করতে ডাটাবেস লক ব্যবহার করে। Shared Lock (S-lock) একাধিক ব্যবহারকারীকে একসাথে ডেটা পড়ার অনুমতি দেয়। Exclusive Lock (X-lock) ডেটা লেখার সময় নেওয়া হয়, যা ট্রানজ্যাকশন শেষ না হওয়া পর্যন্ত অন্যদের অপেক্ষা করায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Lock Compatibility Matrix:
--               | Requested S-Lock | Requested X-Lock |
-- --------------+------------------+------------------+
-- Held S-Lock   |     GRANTED      |     WAITING      |
-- Held X-Lock   |     WAITING      |     WAITING      |

-- S-locks coexist peacefully; X-locks demand complete isolation.`,
      caption: {
        en: 'Multiple sessions can share S-locks simultaneously; X-locks require absolute exclusivity.',
        bn: 'একাধিক সেশন একসাথে S-লক নিতে পারে; কিন্তু X-লক সম্পূর্ণ একা অধিকার দাবি করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Pessimistic Concurrency Control: SELECT ... FOR UPDATE', bn: '৮. পেসিমিস্টিক লকিং: SELECT ... FOR UPDATE ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'Pessimistic Locking assumes conflicts will occur and locks rows immediately upon reading. Adding FOR UPDATE to a SELECT statement acquires an Exclusive Lock on the selected rows, forcing concurrent transactions trying to read or modify those exact rows to pause and wait until the transaction commits.',
        bn: 'পেসিমিস্টিক লকিং ধরে নেয় যে একাধিক ব্যবহারকারীর মাঝে সংঘর্ষ হবেই, তাই ডেটা পড়ার সময়ই তাতে তালা মেরে দেয়। SELECT স্টেটমেন্টের শেষে FOR UPDATE লিখে দিলে নির্বাচিত সারিগুলোর ওপর সাথে সাথে Exclusive Lock বসে যায়, ফলে অন্য কেউ সেই সারিগুলোতে হাত দিতে গেলে কাজ শেষ না হওয়া পর্যন্ত অপেক্ষায় থাকতে বাধ্য হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Booking the last airline seat safely using pessimistic locking:
BEGIN TRANSACTION;

-- Select and immediately acquire exclusive lock on row:
SELECT seat_number, is_booked
FROM flight_seats
WHERE flight_id = 'BG-001' AND seat_number = '12A'
FOR UPDATE; -- Blocks competing booking requests!

-- Confirm seat is available, then issue update:
UPDATE flight_seats SET is_booked = TRUE WHERE flight_id = 'BG-001' AND seat_number = '12A';

COMMIT; -- Lock released immediately upon commit!

-- Output:
-- 12A | false
-- UPDATE 1
-- Result: Race condition prevented; double-booking rendered physically impossible`,
      caption: {
        en: 'SELECT FOR UPDATE prevents race conditions by locking candidate rows during read phases.',
        bn: 'SELECT FOR UPDATE পড়ার সময়ই লক করে রেস কন্ডিশন ও ডাবল বুকিং চিরতরে বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Optimistic Concurrency Control (OCC): Version Columns', bn: '৯. অপটিমিস্টিক লকিং (OCC): ভার্সন কলাম ও কনফ্লিক্ট চেকিং' } },
    {
      type: 'para',
      text: {
        en: 'Optimistic Locking assumes conflicts are rare. Rather than holding expensive database locks, tables include a version_number or timestamp column. During update, the query checks whether the version is still identical to when it was first read. If another session updated the row first, the version check fails (0 rows updated), signaling an application retry.',
        bn: 'অপটিমিস্টিক লকিং ধরে নেয় সংঘর্ষ খুব কম ঘটবে। ডাটাবেসে ব্যয়বহুল লক ধরে রাখার বদলে টেবিলে একটি version_number কলাম রাখা হয়। ডেটা আপডেট করার সময় শর্ত দেওয়া হয় যে ভার্সন নম্বরটি পড়ার সময় যেমন ছিল এখনও ঠিক তেমনই আছে কি না। এর মাঝে অন্য কেউ আপডেট করে ফেললে শর্ত মেলে না (0 সারি আপডেট হয়), এবং অ্যাপ্লিকেশন নতুন করে চেষ্টা করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Step 1: Read entity and note its current version:
-- SELECT document_id, content, version FROM wiki_docs WHERE document_id = 7;
-- (Retrieved: version = 4)

-- Step 2: Update with atomic optimistic guard:
UPDATE wiki_docs
SET content = 'Updated engineering handbook',
    version = version + 1
WHERE document_id = 7
  AND version = 4; -- Only succeeds if no concurrent write occurred!

-- If rows affected == 1: SUCCESS!
-- If rows affected == 0: CONFLICT DETECTED! Another editor updated document 7 first!

-- Output:
-- UPDATE 1 (rows affected: 1)
-- Result: High-throughput concurrency achieved without holding database locks`,
      caption: {
        en: 'Optimistic locking eliminates database lock contention, scaling web applications smoothly.',
        bn: 'অপটিমিস্টিক লকিং ডাটাবেসে লক না রেখেই ওয়েব অ্যাপ্লিকেশনে চমৎকার স্কেলিং নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Deadlocks: Cyclic Graphs, Detection & Resolution', bn: '১০. ডেডলক: চক্রাকার নির্ভরতা, শনাক্তকরণ ও নিরসন কৌশল' } },
    {
      type: 'para',
      text: {
        en: 'A deadlock occurs when Session 1 retains exclusive rights to Lock A while requesting Lock B, whereas Session 2 holds Lock B and simultaneously blocks on Lock A (a circular wait-for graph). The relational engine’s deadlock detector periodically scans the graph, terminates the transaction with the least work done (the Deadlock Victim), and raises a deadlock serialization exception so the application can retry.',
        bn: 'ডেডলক ঘটে যখন Session 1 এর অধীনে Lock A থাকে এবং Session 2 এর অধীনে Lock B থাকে, কিন্তু তারা একে অপরের লকের জন্য চক্রাকারে আটকে থাকে (একটি চক্রাকার নির্ভরতা গ্রাফ)। ডাটাবেসের ডেডলক ডিটেক্টর নিয়মিত এটি নজরদারি করে এবং যে ট্রানজ্যাকশনে সবচেয়ে কম কাজ হয়েছে সেটিকে ভিকটিম (Victim) বানিয়ে বাতিল করে দেয়, যাতে অন্যটি চলতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Circular Deadlock Scenario:
-- Session 1: Locks Account 1 -> Requests Lock on Account 2
-- Session 2: Locks Account 2 -> Requests Lock on Account 1 (DEADLOCK!)

-- Architectural Prevention: Always acquire locks in deterministic primary key order!
-- In your application code:
-- accounts_to_lock = sorted([sender_id, receiver_id])
-- Lock accounts_to_lock[0] first, then accounts_to_lock[1]!

-- Output:
-- ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction
-- Result: Deterministic ordering across all queries eliminates circular wait graphs`,
      caption: {
        en: 'Acquiring multiple resource locks in strict deterministic order eliminates deadlocks.',
        bn: 'সর্বদা ক্রমানুসারে লক গ্রহণ করলে চক্রাকার ডেডলক সমস্যা চিরতরে দূর হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-tx-ex1',
      kind: 'predict',
      topic: 'sql: TCL command to discard changes',
      question: {
        en: 'Which TCL command aborts an active transaction and reverts all modifications made since BEGIN?',
        bn: 'কোন TCL কমান্ডটি সক্রিয় ট্রানজ্যাকশন বাতিল করে এবং BEGIN-এর পর থেকে হওয়া সমস্ত পরিবর্তন পূর্বের অবস্থায় ফিরিয়ে নেয়?'
      },
      code: `/* SQL transaction rollback command */
/* BEGIN; UPDATE tbl SET x=1; ________; */`,
      answer: 'ROLLBACK',
      accept: ['ROLLBACK', 'rollback', 'ROLLBACK;'],
      hint: {
        en: 'It rolls back all uncommitted operations.',
        bn: 'এটি সব আনকমিটেড কাজ রোলব্যাক করে।'
      },
      explanation: {
        en: 'ROLLBACK terminates the current transaction and reverts all changes back to the state prior to the transaction initiation.',
        bn: 'ROLLBACK বর্তমান ট্রানজ্যাকশন বন্ধ করে দেয় এবং শুরুর আগের মূল অবস্থায় সমস্ত ডেটা ফিরিয়ে নেয়।'
      }
    },
    {
      id: 'sql-tx-ex2',
      kind: 'mcq',
      topic: 'sql: ACID property for crash survival',
      question: {
        en: 'Which ACID property guarantees that once a transaction commits, its modifications survive unexpected system crashes or power outages?',
        bn: 'ACID-এর কোন বৈশিষ্ট্যটি নিশ্চিত করে যে ট্রানজ্যাকশন একবার কমিট হলে সিস্টেম ক্র্যাশ বা বিদ্যুৎ চলে গেলেও ডেটা সংরক্ষিত থাকবে?'
      },
      options: [
        { en: 'Durability', bn: 'Durability (স্থায়িত্ব)' },
        { en: 'Atomicity', bn: 'Atomicity (অবিভাজ্যতা)' },
        { en: 'Isolation', bn: 'Isolation (বিচ্ছিন্নতা)' },
        { en: 'Consistency', bn: 'Consistency (সঙ্গতি)' }
      ],
      answer: 0,
      hint: {
        en: 'It endures through power loss and reboot.',
        bn: 'এটি ক্র্যাশ ও বিদ্যুৎ বিভ্রাটের পরেও টিকে থাকে।'
      },
      explanation: {
        en: 'Durability guarantees that committed data is securely recorded in persistent storage (e.g. Write-Ahead Logs) and survives hardware failure.',
        bn: 'Durability নিশ্চিত করে যে একবার কমিট হওয়া ডেটা স্থায়ী স্টোরেজে (যেমন WAL) নিরাপদে লেখা হয়েছে এবং হার্ডওয়্যার ক্র্যাশের পরেও তা হারিয়ে যাবে না।'
      }
    },
    {
      id: 'sql-tx-ex3',
      kind: 'mcq',
      topic: 'sql: Pessimistic lock clause',
      question: {
        en: 'What clause is added to a SELECT statement to acquire an Exclusive Lock on the selected rows, preventing concurrent updates?',
        bn: 'নির্বাচিত সারিগুলোর ওপর এক্সক্লুসিভ লক নিতে এবং অন্যদের পরিবর্তন আটকাতে SELECT স্টেটমেন্টের শেষে কোন ক্লজটি যোগ করা হয়?'
      },
      options: [
        { en: 'FOR UPDATE', bn: 'FOR UPDATE' },
        { en: 'WITH LOCK', bn: 'WITH LOCK' },
        { en: 'LOCK TABLE', bn: 'LOCK TABLE' },
        { en: 'PREVENT WRITE', bn: 'PREVENT WRITE' }
      ],
      answer: 0,
      hint: {
        en: 'SELECT ... FOR UPDATE locks rows for future updating.',
        bn: 'SELECT ... FOR UPDATE পরিবর্তনের জন্য সারিগুলোকে লক করে দেয়।'
      },
      explanation: {
        en: 'SELECT ... FOR UPDATE places exclusive write locks on candidate rows, blocking other sessions until the current transaction commits or rolls back.',
        bn: 'SELECT ... FOR UPDATE নির্বাচিত সারির ওপর এক্সক্লুসিভ লক বসিয়ে দেয়, ফলে বর্তমান ট্রানজ্যাকশন শেষ না হওয়া পর্যন্ত অন্য কোনো সেশন তা পরিবর্তন করতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'sql-transactions-quiz',
    title: { en: 'SQL Transactions & Concurrency Quiz', bn: 'এসকিউএল ট্রানজ্যাকশন ও কনকারেন্সি কুইজ' },
    questions: [
      {
        id: 'tq1',
        kind: 'mcq',
        topic: 'sql: Dirty read definition',
        question: {
          en: 'What is a "Dirty Read" in database concurrency?',
          bn: 'ডাটাবেস কনকারেন্সিতে "ডার্টি রিড" (Dirty Read) বলতে কী বোঝায়?'
        },
        options: [
          { en: 'Reading data modified by another transaction that has NOT yet committed and may still be rolled back', bn: 'অন্য কোনো ট্রানজ্যাকশনের করা পরিবর্তন যা এখনও কমিট হয়নি এবং যেকোনো সময় বাতিল হতে পারে, তা পড়ে ফেলা' },
          { en: 'Reading a deleted table from memory', bn: 'মুছে ফেলা টেবিল পড়া' },
          { en: 'A syntax error during a SELECT query', bn: 'কোয়ারিতে সিনট্যাক্স এরর' },
          { en: 'A query reading corrupted disk sectors', bn: 'নষ্ট ডিস্ক পড়া' }
        ],
        answer: 0,
        hint: {
          en: 'Reading uncommitted data that might subsequently disappear.',
          bn: 'আনকমিটেড ডেটা পড়া যা পরে মুছে যেতে পারে।'
        },
        explanation: {
          en: 'A dirty read occurs when a transaction views uncommitted data from a concurrent transaction. If that second transaction rolls back, the first transaction acted upon invalid data.',
          bn: 'ডার্টি রিড ঘটে যখন একটি ট্রানজ্যাকশন অন্য কারো আনকমিটেড ডেটা দেখে ফেলে। সেই অপর ট্রানজ্যাকশনটি যদি পরে রোলব্যাক করে, তবে প্রথম ট্রানজ্যাকশনটি একটি অবাস্তব তথ্যের ওপর ভিত্তি করে কাজ করে ফেলে।'
        }
      },
      {
        id: 'tq2',
        kind: 'mcq',
        topic: 'sql: Deadlock prevention strategy',
        question: {
          en: 'How can application developers prevent circular deadlocks when updating multiple database rows?',
          bn: 'একাধিক সারি আপডেট করার সময় অ্যাপ্লিকেশনের ডেভেলপাররা কীভাবে চক্রাকার ডেডলক প্রতিরোধ করতে পারেন?'
        },
        options: [
          { en: 'Always acquire locks on multiple rows in a strict, deterministic sorted order (e.g. by ascending primary key)', bn: 'সর্বদা একটি নির্দিষ্ট ক্রমে (যেমন প্রাইমারি কি-এর ছোট থেকে বড় ক্রমে) একাধিক সারিতে লক গ্রহণ করা' },
          { en: 'Disable transactions entirely', bn: 'ট্রানজ্যাকশন বন্ধ করে দেওয়া' },
          { en: 'Never use primary keys', bn: 'প্রাইমারি কি ব্যবহার না করা' },
          { en: 'Run all queries without indexes', bn: 'ইনডেক্স ছাড়া কুয়েরি চালানো' }
        ],
        answer: 0,
        hint: {
          en: 'Consistent resource ordering breaks circular wait graphs.',
          bn: 'সম্পদের নির্দিষ্ট ক্রম চক্রাকার অপেক্ষা ভেঙে দেয়।'
        },
        explanation: {
          en: 'Deadlocks require circular waiting (A waits for B, B waits for A). By sorting resources deterministically (e.g. by Primary Key ID), circular wait graphs become mathematically impossible.',
          bn: 'ডেডলক ঘটার জন্য চক্রাকার অপেক্ষা দরকার হয়। সম্পদগুলোকে যদি সর্বদা একই ক্রমানুসারে (যেমন ছোট আইডি থেকে বড় আইডি) লক করা হয়, তবে চক্রাকার অপেক্ষা তৈরি হওয়া অসম্ভব হয়ে পড়ে।'
        }
      },
      {
        id: 'tq3',
        kind: 'mcq',
        topic: 'sql: ROLLBACK operation',
        question: {
          en: 'What occurs when an active transaction issues a ROLLBACK command?',
          bn: 'একটি সক্রিয় ট্রানজ্যাকশনে ROLLBACK কমান্ড চালালে কী ঘটে?'
        },
        options: [
          { en: 'All uncommitted modifications made by the current transaction are discarded, returning the database to its pre-transaction state', bn: 'বর্তমান ট্রানজ্যাকশনের করা সমস্ত আনকমিটেড পরিবর্তন বাতিল হয়ে যায় এবং ডাটাবেস পূর্বের অবস্থায় ফিরে যায়' },
          { en: 'The database drops the affected tables', bn: 'ডাটাবেস টেবিলগুলো মুছে ফেলে' },
          { en: 'The transaction is forcefully committed', bn: 'ট্রানজ্যাকশনটি জোরপূর্বক কমিট হয়' },
          { en: 'All user sessions are disconnected', bn: 'সকল ব্যবহারকারীর সংযোগ বিচ্ছিন্ন হয়' }
        ],
        answer: 0,
        hint: {
          en: 'It reverts modifications.',
          bn: 'এটি পরিবর্তনগুলো পূর্বাবস্থায় ফিরিয়ে আনে।'
        },
        explanation: {
          en: 'ROLLBACK undoes all data manipulations executed within the current transaction block, freeing acquired locks and restoring state.',
          bn: 'ROLLBACK বর্তমান ট্রানজ্যাকশনে সংঘটিত সকল ডাটা পরিবর্তন বাতিল করে এবং লক মুক্ত করে ডাটাবেসকে আগের অবস্থায় ফিরিয়ে আনে।'
        }
      },
      {
        id: 'tq4',
        kind: 'mcq',
        topic: 'sql: Serializable isolation level',
        question: {
          en: 'Which ANSI SQL transaction isolation level guarantees complete protection against dirty reads, non-repeatable reads, and phantom reads?',
          bn: 'কোন ANSI এসকিউএল আইসোলেশন লেভেল ডার্টি রিড, নন-রিপিটেবল রিড এবং ফ্যান্টম রিড থেকে শতভাগ সুরক্ষা দেয়?'
        },
        options: [
          { en: 'SERIALIZABLE', bn: 'SERIALIZABLE' },
          { en: 'READ UNCOMMITTED', bn: 'READ UNCOMMITTED' },
          { en: 'READ COMMITTED', bn: 'READ COMMITTED' },
          { en: 'REPEATABLE READ', bn: 'REPEATABLE READ' }
        ],
        answer: 0,
        hint: {
          en: 'The highest, strictest isolation standard.',
          bn: 'সর্বোচ্চ ও সবচেয়ে কঠোর আইসোলেশন মানদণ্ড।'
        },
        explanation: {
          en: 'SERIALIZABLE is the strictest isolation level, ensuring concurrent transactions produce results identical to running them sequentially one after another.',
          bn: 'SERIALIZABLE হলো সবচেয়ে কঠোর আইসোলেশন লেভেল, যা নিশ্চিত করে যে একাধিক ট্রানজ্যাকশন একসাথে চললেও তার ফলাফল একে একে ধারাবাহিকভাবে চলার মতোই নিখুঁত হবে।'
        }
      }
    ]
  }
};
