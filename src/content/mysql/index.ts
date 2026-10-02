import type { Hub } from '../../lib/types';
import { TheServerAndYourFirstQueryLesson } from './lessons/the-server-and-your-first-query';
import { TablesAndTheTypesInThemLesson } from './lessons/tables-and-the-types-in-them';
import { KeysAndConstraintsLesson } from './lessons/keys-and-constraints';
import { PuttingRowsInLesson } from './lessons/putting-rows-in';
import { SelectAndWhereLesson } from './lessons/select-and-where';
import { SortingGroupingAndAggregatesLesson } from './lessons/sorting-grouping-and-aggregates';
import { JoiningTablesLesson } from './lessons/joining-tables';
import { SubqueriesUnionsAndCtesLesson } from './lessons/subqueries-unions-and-ctes';
import { IndexesAndTheBTreeLesson } from './lessons/indexes-and-the-b-tree';
import { ReadingThePlanLesson } from './lessons/reading-the-plan';
import { TuningTheSlowQueryLesson } from './lessons/tuning-the-slow-query';
import { TransactionsAndLocksLesson } from './lessons/transactions-and-locks';
import { ViewsRoutinesAndTheOpsWindowLesson } from './lessons/views-routines-and-the-ops-window';

export const mysqlHub: Hub = {
  slug: 'mysql',
  name: 'MySQL',
  icon: '🐬',
  tagline: { en: 'Tables, constraints, joins, indexes and locks: how to store rows in MySQL and get them back without a surprise.', bn: 'table, constraint, join, index আর lock — MySQL-এ সারি কীভাবে রাখতে হয় আর কোনো আচরণবোধা বিস্ময় ছাড়া তা কীভাবে ফেরত আনতে হয়।' },
  intro: { en: 'MySQL is a server that keeps InnoDB tables on disk and answers one statement at a time. Learning it is not memorising keywords: it is knowing what happens to a row when you insert it, what the planner does when you filter, and what the lock manager does when two writers meet. Twelve lessons walk that path — from your first CREATE TABLE to EXPLAIN ANALYZE, gap locks and the backup window.', bn: 'MySQL হলো একটা server, যে InnoDB table ডিস্কে রাখে এবং একবারে একটি statement-এর জবাব দেয়। এটা শোনা keyword-মুখস্থ করার নাম নয়: একটি সারি insert করলে কী হয়, filter করলে planner কী করে, আর দুটি লেখক একসময়ে এলে lock manager কী করে — সেটাই জানা। বারোটি পাঠ সেই পথ — প্রথম CREATE TABLE থেকে EXPLAIN ANALYZE, gap lock আর backup-এর জানালা পর্যন্ত।' },
  roadmap: [
    {
      title: { en: 'Stage 1 — Structure and data', bn: 'ধাপ ১ — গঠন আর তথ্য' },
      items: [
        {
          en: 'The Server and Your First Query — MySQL is a server process and you are a client talking to it over a socket or TCP.',
          bn: 'server আর প্রথম query — MySQL একটা server process, আপনি তার সাথে socket বা TCP-তে কথা বলা একজন client।',
        },
        {
          en: 'Tables and the Types in Them — CREATE TABLE is a promise about bytes. Choose integers, DECIMAL for money, VARCHAR sized by truth, and temporal types that survive a timezone argument — then read the result back with SHOW CREATE TABLE.',
          bn: 'table আর তার type — CREATE TABLE অর্থ বাইট নিয়ে দেওয়া প্রতিশ্রুতি।',
        },
        {
          en: 'Keys and Constraints — Constraints are the only part of the schema an application cannot forget.',
          bn: 'key আর constraint — constraint-ই schema-এর একমাত্র অংশ যা app ভুলে যেতে পারে না।',
        },
        {
          en: 'Putting Rows In — INSERT has four dialects: one row, many rows, insert-or-update, and insert-or-ignore.',
          bn: 'সারি ঢোকানো — INSERT-এর চার ভাষা: এক সারি, অনেক সারি, insert-অথবা-update, insert-অথবা-উপেক্ষা।',
        },
        {
          en: 'Selecting Rows: WHERE, LIKE, LIMIT — A SELECT is a filter, then a projection, then a limit.',
          bn: 'সারি বাছা: WHERE, LIKE, LIMIT — SELECT হলো আগে ছাঁকনি, তারপর কোন column তা ঠিক করা, শেষে সীমা।',
        },
      ],
    },
    {
      title: { en: 'Stage 2 — Querying like the planner', bn: 'ধাপ ২ — planner-এর মতো করে প্রশ্ন' },
      items: [
        {
          en: 'Sorting, Grouping, Aggregates — ORDER BY costs a sort, GROUP BY costs a temporary area, and aggregates decide what you are allowed to mention.',
          bn: 'sort, group আর aggregate — ORDER BY-র খরচ sort, GROUP BY-র খরচ সাময়িক জায়গা, আর aggregate ঠিক করে আপনি কী উল্লেখ করতে পারেন।',
        },
        {
          en: 'Joining Tables — INNER, LEFT, RIGHT and CROSS are four answers to four questions.',
          bn: 'টেবিল জোড়া দেয়া — INNER, LEFT, RIGHT আর CROSS চার প্রশ্নের চার জবাব।',
        },
        {
          en: 'Subqueries, UNION and CTEs — A subquery is a question used as an answer.',
          bn: 'subquery, UNION আর CTE — subquery মানে জবাব হিসেবে ব্যবহৃত একটি প্রশ্ন।',
        },
        {
          en: 'Indexes and the B+Tree — An index is a sorted copy of some columns with the primary key as its payload.',
          bn: 'index আর B+Tree — index হলো কিছু column-এর সাজানো কপি, যার ভেতরে primary key লেখা থাকে।',
        },
      ],
    },
    {
      title: { en: 'Stage 3 — Concurrency, routines, operations', bn: 'ধাপ ৩ — concurrency, routine আর পরিচালনা' },
      items: [
        {
          en: 'Reading the Plan: EXPLAIN — EXPLAIN is the optimizer telling you what it decided.',
          bn: 'পরিকল্পনা পড়া: EXPLAIN — EXPLAIN হলো optimizer যা ঠিক করেছে তা বলা।',
        },
        {
          en: 'Tuning the Slow Query — A method, not a bag of tricks: find it in the slow log, reproduce it, read the plan, cut the work, then measure again with the same ruler.',
          bn: 'ধীর query ঠিক করা — একটি পদ্ধতি, কৌশলের ঝোলা নয়: slow log-এ খুঁজে বের করুন, যেমন ছিল তেমনই চালান, plan পড়ুন, কাজ কমান, তারপর মাপকাটি না-বদলে আবার মেপে নিন।',
        },
        {
          en: 'Transactions and Locks — ACID is a promise about two people writing at once.',
          bn: 'transaction আর lock — ACID হলো একই সময়ে দুজন লিখলে কী হবে সেই সম্পর্কে প্রতিশ্রুতি।',
        },
      ],
    },
  ],
  lessons: [TheServerAndYourFirstQueryLesson, TablesAndTheTypesInThemLesson, KeysAndConstraintsLesson, PuttingRowsInLesson, SelectAndWhereLesson, SortingGroupingAndAggregatesLesson, JoiningTablesLesson, SubqueriesUnionsAndCtesLesson, IndexesAndTheBTreeLesson, ReadingThePlanLesson, TuningTheSlowQueryLesson, TransactionsAndLocksLesson, ViewsRoutinesAndTheOpsWindowLesson],
  projects: [
    {
      title: { en: 'A shop that cannot lie', bn: 'এমন দোকান যা মিথ্যা বলবে না' },
      difficulty: 'beginner',
      brief: { en: 'Create customers, products and orders with foreign keys that make an impossible row impossible: an order for a product that does not exist, two customers sharing an email, a negative price caught by CHECK.', bn: 'customers, products, orders তৈরি করুন এমন foreign key দিয়ে যা অসম্ভব সারিকে অসম্ভব করে: না-থাকা product-এর order, দুই customer-এর একই email, CHECK-এ ধরা ঋণাত্মক দাম।' },
    },
    {
      title: { en: 'The slow list, made fast', bn: 'ধীর তালিকা, দ্রুত করা' },
      difficulty: 'intermediate',
      brief: { en: 'Load 100k fake rows, then time a filtered, sorted, paged query. Add indexes one at a time and paste EXPLAIN next to each change, ending with keyset pagination.', bn: '১ লক্ষ নকল সারি ঢুকান, তারপর filter, sort ও page করা query-র সময় মাপুন। একবারে একটি index যোগ করুন, প্রতি পরিবর্তনের পাশে EXPLAIN রাখুন, শেষ করুন keyset pagination দিয়ে।' },
    },
    {
      title: { en: 'Two terminals, one seat', bn: 'দুই terminal, এক আসন' },
      difficulty: 'advanced',
      brief: { en: 'In two mysql sessions, sell the same ticket. Watch a lost update happen, then fix it first with SELECT ... FOR UPDATE, then with an optimistic version column, and report the cost of each.', bn: 'দুটি mysql session-এ একই টিকিট বিক্রি করুন। আগে lost update ঘটা দেখুন, তারপর একবার SELECT ... FOR UPDATE দিয়ে, আরেকবার version column দিয়ে optimistic ঠিক করুন, প্রতিটির খরচ লিখুন।' },
    },
  ],
  bestPractices: [
    {
      en: 'InnoDB, utf8mb4, and an explicit primary key on every table — a table without one gets a hidden key and slower secondary indexes.',
      bn: 'প্রতিটি table-এ InnoDB, utf8mb4 আর স্পষ্ট primary key — না-থাকলে গোপন key তৈরি হয়, secondary index ধীর হয়।',
    },
    {
      en: 'Money in DECIMAL, not FLOAT; text sized by what it holds, not VARCHAR(255) by reflex.',
      bn: 'টাকার জন্য FLOAT নয়, DECIMAL; লেখার জায়গা দরকার মতো, অভ্যাসবশত VARCHAR(255) নয়।',
    },
    {
      en: 'Every foreign key column gets an index of its own, and ON DELETE says what you actually mean.',
      bn: 'প্রতিটি foreign key column-এর নিজস্ব index থাকে, আর ON DELETE-এ আসলেই যা চান তা লেখা হয়।',
    },
    {
      en: 'Read EXPLAIN before you read the clock: an index scan on the right key beats any amount of tuning the box.',
      bn: 'ঘড়ি দেখার আগে EXPLAIN পড়ুন: ঠিক key-এর index scan যেকোনো machine টিউনিংকে হারায়।',
    },
    {
      en: 'Keep transactions short and touch rows in the same order everywhere — deadlocks love an inconsistent order.',
      bn: 'transaction ছোট রাখুন, আর সার্বিকভাবে একই ক্রমে সারি ছুঁয়ে যান — ক্রম এদিক-ওদিক হলে deadlock ডাকে।',
    },
    {
      en: 'Back up with mysqldump --single-transaction or XtraBackup, and rehearse the restore; an untested dump is a rumour.',
      bn: 'mysqldump --single-transaction বা XtraBackup দিয়ে backup নিন, restore-এর অনুশীলন করুন; যাচাই না-করা dump গুজব মাত্র।',
    },
  ],
  interview: [
    {
      q: { en: 'Why does InnoDB want a short, increasing primary key?', bn: 'InnoDB-এ ছোট, ক্রমবর্ধমান primary key চাওয়া হয় — কেন?' },
      a: { en: 'The primary key is the clustered index: every row is stored inside it, and every secondary index stores the primary key as its row pointer. A short integer keeps both small and appends to the end, so inserts do not split pages at random.', bn: 'primary key-ই clustered index: প্রতিটি সারি তার ভেতরেই থাকে, আর প্রতি secondary index row pointer হিসেবে এই key-ই রাখে। ছোট সংখ্যা হলে দুটোই ছোট থাকে, নতুন সারি শেষে বসে, এলোমেলো জায়গায় page split হয় না।' },
    },
    {
      q: { en: 'What is the difference between WHERE and HAVING?', bn: 'WHERE আর HAVING-এর তফাত কী?' },
      a: { en: 'WHERE filters rows before they are grouped, so it cannot see aggregates. HAVING filters after grouping, which is why HAVING COUNT(*) > 1 is legal and WHERE COUNT(*) > 1 is not.', bn: 'WHERE সারিকে group করার আগে ছাঁটে, তাই aggregate দেখে না। HAVING group হওয়ার পর ছাঁটে — এজন্যই HAVING COUNT(*) > 1 বৈধ, WHERE COUNT(*) > 1 নয়।' },
    },
    {
      q: { en: 'A query on an indexed column still does a full scan. Name three reasons.', bn: 'index থাকা column-এও query full scan করছে। তিনটি কারণ বলুন।' },
      a: { en: 'The predicate wraps the column in a function or a cast, so the index keys no longer match; the collation or character set differs between column and literal, which blocks index use; the range the planner estimates covers too large a share of the table, so it is cheaper to read the clustered index — or statistics are stale and ANALYZE TABLE would change the mind.', bn: 'predicate column-কে function বা cast-এ মুড়ে দেয়, তাই index key মেলে না; column আর literal-এর collation/charset আলাদা হলে index বাদ পড়ে; planner যে অংশ পড়বে ভাবে তা too বড়, clustered index পড়াই সস্তা — অথবা পুরনো statistics, ANALYZE TABLE চালালে ধারণা বদলায়।' },
    },
    {
      q: { en: 'Explain a deadlock and how two writers cause one.', bn: 'deadlock বলতে কী, দুটি লেখক কীভাবে বানায়?' },
      a: { en: 'Each transaction holds a lock the other needs, and neither will let go first, so InnoDB detects the cycle and rolls one back with error 1213. It happens when two statements lock the same rows in opposite order, or when a range scan takes gap locks that the other transaction then wants to insert into.', bn: 'প্রতিটি transaction-এর হাতে আছে অন্যটির দরকারি lock, কেউ ছাড়ে না, তাই InnoDB চক্র দেখে একটি ROLLBACK করে (error ১২১৩)। একই সারিকে বিপরীত ক্রমে lock করলে, বা gap lock-এর ফাঁকে অন্যটি insert করতে চাইলে এমন হয়।' },
    },
    {
      q: { en: 'Why is LIMIT 1000000, 10 slow, and what replaces it?', bn: 'LIMIT 1000000, 10 ধীর কেন, বদলে কী?' },
      a: { en: 'The server must produce and throw away a million rows to know where the tenth page begins. Keyset pagination instead remembers the last key seen and asks for WHERE id > ? ORDER BY id LIMIT 10, which is an index seek of ten rows.', bn: 'দশম পাতার শুরু কোথায় জানতে এক লক্ষ সারি বানিয়ে ফেলে দিতে হয়। keyset pagination শেষ দেখা key মনে রাখে: WHERE id > ? ORDER BY id LIMIT 10 — দশ সারির index seek।' },
    },
    {
      q: { en: 'READ COMMITTED versus REPEATABLE READ in MySQL — what changes?', bn: 'MySQL-এ READ COMMITTED বনাম REPEATABLE READ — কী বদলায়?' },
      a: { en: 'Under REPEATABLE READ, the default, a SELECT sees one snapshot taken at its first read, so re-running it in the same transaction gives the same rows, and InnoDB adds gap and next-key locks to stop phantom inserts. READ COMMITTED takes a fresh snapshot per statement, sees other commits, releases non-matching row locks earlier, and skips most gap locks.', bn: 'ডিফল্ট REPEATABLE READ-এ প্রথম পড়ার snapshot-ই পুরো transaction জুড়ে থাকে, তাই বারবার চালালে একই সারি পাওয়া যায়, আর phantom insert আটকাতে gap/next-key lock বসে। READ COMMITTED-এ প্রতি statement নতুন snapshot নেয়, অন্যের commit দেখে, না-মেলা সারির lock আগে ছেড়ে দেয়, আর বেশিরভাগ gap lock এড়ায়।' },
    },
  ],
  realWorld: [
    {
      en: 'Application databases: one table per entity with a surrogate BIGINT UNSIGNED AUTO_INCREMENT key, a UNIQUE index on anything a user may claim exactly once (email, slug), and created_at/updated_at TIMESTAMP columns that the schema remembers for you.',
      bn: 'application database: প্রতি সত্তার একটি table, surrogate BIGINT UNSIGNED AUTO_INCREMENT key, ব্যবহারকারী একবারই নিতে পারে এমন জিনিসের (email, slug) উপর UNIQUE index, আর created_at/updated_at TIMESTAMP column যা স্কিম মনে রাখে।',
    },
    {
      en: 'Analytics and reporting read replicas: heavy SELECTs go to a replica fed by the binlog, writes stay on the primary, and the reporting queries are written to tolerate a replica that is a second behind.',
      bn: 'reporting ও analytics read replica: ভারী SELECT binlog-থেকে পোষণ করা replica-য় যায়, write primary-এই থাকে, আর report query এক সেকেন্ড পিছিয়ে থাকা replica সইতে পারে এমনভাবে লেখা হয়।',
    },
    {
      en: 'Billing jobs that must not double-charge: a UNIQUE index on (invoice_id, attempt) plus a transaction, so the second worker gets error 1062 instead of a second row.',
      bn: 'billing job যে দ্বিতীয়বার চার্জ করবে না: (invoice_id, attempt)-এর উপর UNIQUE index আর একটি transaction — দ্বিতীয় worker দ্বিতীয় সারির বদলে error ১০৬২ পায়।',
    },
    {
      en: 'Schema change on a busy table with ALTER TABLE ... ALGORITHM=INPLACE, LOCK=NONE, or an external gh-ost/pt-osc copy — never a plain ALTER at 3pm.',
      bn: 'ব্যস্ত table-এ schema বদল ALTER TABLE ... ALGORITHM=INPLACE, LOCK=NONE দিয়ে, বা বাইরে থেকে gh-ost/pt-osc কপি — বিকেল তিনটায় সাধারণ ALTER কখনো নয়।',
    },
  ],
  references: [
    {
      group: 'Types',
      items: [
        {
          term: 'BIGINT UNSIGNED',
          def: { en: '8 bytes, 0 to about 1.8e19. The usual surrogate key.', bn: '৮ byte, ০ থেকে প্রায় ১.৮e১৯। surrogate key হিসেবে প্রচলিত।' },
        },
        {
          term: 'DECIMAL(10,2)',
          def: { en: 'Exact decimal: ten digits total, two after the point. Money lives here, not in FLOAT.', bn: 'নির্ভুল দশমিক: মোট ১০ অঙ্ক, দশমিকের পরে ২। টাকা এখানে থাকে, FLOAT-এ নয়।' },
        },
        {
          term: 'VARCHAR(n)',
          def: { en: 'Up to n characters, stored with a 1–2 byte length prefix; n counts characters, not bytes.', bn: 'সর্বোচ্চ n অক্ষর, ১–২ byte দৈর্ঘ্য-উপসর্গসহ থাকে; n অক্ষর গনে, byte নয়।' },
        },
        {
          term: 'TIMESTAMP',
          def: { en: '4-byte UTC instant, range 1970–2038. DATETIME stores a wall-clock value with no conversion.', bn: '৪ byte-এর UTC মুহূর্ত, সীমা ১৯৭০–২০৩৮। DATETIME-এ ঘড়ির সময় থাকে, কোনো রূপান্তর হয় না।' },
        },
      ],
    },
    {
      group: 'Statements',
      items: [
        {
          term: 'SHOW CREATE TABLE t',
          def: { en: 'The exact DDL the server would run to rebuild t, including engine, charset and every constraint.', bn: 't আবার গড়তে server যে DDL চালাত তা হুবহু — engine, charset সব constraintসহ।' },
        },
        {
          term: 'DESCRIBE t',
          def: { en: 'Column, type, nullability, key, default, extra — the quick shape of a table.', bn: 'column, type, null, key, default, extra — table-এর দ্রুত নকশা।' },
        },
        {
          term: 'EXPLAIN / EXPLAIN ANALYZE',
          def: { en: 'The chosen plan; ANALYZE (8.0.18+) also runs the query and prints real per-row timings.', bn: 'বাছাইকরা plan; ANALYZE (৮.০.১৮+) query চালিয়ে প্রতি ধাপের প্রকৃত সময়ও ছাপে।' },
        },
        {
          term: 'ANALYZE TABLE t',
          def: { en: 'Resample the index statistics the optimizer prices plans with.', bn: 'index-এর statistics আবার নমুনা করে নিন, যা দিয়ে optimizer পরিকল্পনার দাম বসায়।' },
        },
      ],
    },
  ]
};
