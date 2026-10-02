import type { Lesson } from '../../../lib/types';

export const TransactionsAndLocksLesson: Lesson = {
  slug: 'transactions-and-locks',
  tech: 'mysql',
  title: { en: 'Transactions and Locks', bn: 'transaction আর lock' },
  summary: { en: 'ACID is a promise about two people writing at once. Autocommit, isolation levels, consistent reads, row and gap locks, lost updates and deadlocks — with the statements that show each one happening.', bn: 'ACID হলো একই সময়ে দুজন লিখলে কী হবে সেই সম্পর্কে প্রতিশ্রুতি। autocommit, isolation level, consistent read, row ও gap lock, lost update আর deadlock — প্রতিটি দেখা যাওয়ার বিবৃতিসহ।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Transactions and Locks', bn: 'WHAT — transaction আর lock' },
    },
    {
      type: 'para',
      text: { en: 'Two people press Buy on the last ticket at the same second. A single UPDATE does not prevent both from succeeding, because each session read the count, subtracted one and wrote it back. A transaction is the promise that your read and your write happen as one uninterrupted act.', bn: 'দুই জন মানুষ একই সেকেন্ডে শেষ টিকিটটিতে Buy চাপলেন। ১টি UPDATE দুজনকেই সফল হতে বাধা দেয় না, কারণ ২টি session-ই আগে সংখ্যা পড়েছে, ১ কমিয়ে লিখে দিয়েছে। transaction হলো প্রতিশ্রুতি — আপনার পড়া আর লেখা একসঙ্গে, এক অবিচ্ছিন্ন কাজ হিসেবে ঘটবে।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'With autocommit on — the default — every statement is a transaction of one, so a two-statement update is not atomic unless you say so.',
          bn: 'autocommit চালু (ডিফল্ট) মানে প্রতিটি বিবৃতিই ১টি একক transaction; দুই বিবৃতির update তাই স্পষ্ট না-বললে atomic নয়।',
        },
        {
          en: 'InnoDB locks rows, not tables; REPEATABLE READ reads one snapshot and takes next-key locks, so reads are cheap and writers must be tidy.',
          bn: 'InnoDB table নয়, সারি lock করে; REPEATABLE READ একটি snapshot পড়ে আর next-key lock নেয়, তাই পড়া সস্তা, লেখাকে গুছিয়ে চলতে হয়।',
        },
        {
          en: 'A deadlock is not a bug in the engine but a bug in the order of operations; both transactions are correct alone, wrong together.',
          bn: 'deadlock engine-এর bug নয়, কাজের ক্রমের bug; দুটি transaction আলাদা সঠিক, একসাথে ভুল।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'tx.sql',
      code: `SET autocommit = 0;                        -- or START TRANSACTION;
START TRANSACTION;
SELECT stock FROM product WHERE id = 7 FOR UPDATE;   -- lock the row, read truth
UPDATE product SET stock = stock - 1 WHERE id = 7;   -- then change it
INSERT INTO stock_move (product_id, delta) VALUES (7, -1);
COMMIT;

-- the read-only view of the same data, no locks, from the first read of the tx
START TRANSACTION WITH CONSISTENT SNAPSHOT;
SELECT COUNT(*) FROM stock_move;
ROLLBACK;                                  -- nothing was written anyway

-- optimistic instead of pessimistic
UPDATE product SET stock = stock - 1, version = version + 1
 WHERE id = 7 AND version = ?;            -- 0 rows affected: retry or report

SHOW ENGINE INNODB STATUS;                  -- the LATEST DETECTED DEADLOCK section
SELECT * FROM performance_schema.data_lock_waits;  -- who waits for whom, right now`,
      caption: { en: 'Two ways to be right about a hot row: hold it with FOR UPDATE, or write with a version test and accept a retry.', bn: 'গরম সারিতে ঠিক থাকার দুই পথ: FOR UPDATE দিয়ে ধরে রাখুন, অথবা version পরীক্ষা দিয়ে লিখে retry মেনে নিন।' },
    },
    {
      type: 'table',
      head: [
        { en: 'isolation level', bn: 'isolation level' },
        { en: 'what a SELECT sees', bn: 'SELECT কী দেখে' },
        { en: 'what it locks', bn: 'কী lock হয়' },
      ],
      rows: [
        [
          { en: 'READ UNCOMMITTED', bn: 'READ UNCOMMITTED' },
          { en: 'other transactions’ uncommitted changes: dirty reads', bn: 'অন্যের commit-না-করা পরিবর্তন: dirty read' },
          { en: 'nothing for reads', bn: 'পড়ায় কিছুই না' },
        ],
        [
          { en: 'READ COMMITTED', bn: 'READ COMMITTED' },
          { en: 'a fresh snapshot per statement', bn: 'প্রতি বিবৃতিতে নতুন snapshot' },
          { en: 'only the rows it touches', bn: 'ছুঁয়ে যাওয়া সারিগুলো' },
        ],
        [
          { en: 'REPEATABLE READ (default)', bn: 'REPEATABLE READ (ডিফল্ট)' },
          { en: 'one snapshot from the first read; re-runs agree', bn: 'প্রথম পড়া থেকে এক snapshot; বারবার একই ফল' },
          {
            en: 'rows plus gap/next-key locks that stop phantoms',
            bn: 'সারির সাথে gap/next-key lock, যা phantom আটকায়',
          },
        ],
        [
          { en: 'SERIALIZABLE', bn: 'SERIALIZABLE' },
          {
            en: 'as REPEATABLE READ, but plain SELECTs become shared locks',
            bn: 'REPEATABLE READ-এর মতো, তবে সাধারণ SELECTও shared lock নেয়',
          },
          { en: 'everything read', bn: 'পড়া প্রতিটি জিনিস' },
        ],
      ],
      caption: { en: 'Most “strange MySQL behaviour” tickets are someone expecting READ COMMITTED semantics from REPEATABLE READ, or the other way around.', bn: '“MySQL অদ্ভুত আচরণ করছে” টিকিটের বেশিরভাগই একজন READ COMMITTED আচরণ REPEATABLE READ-এ চান, অথবা উল্টোটা।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'lost update',
          def: { en: 'Two writers read the same value and each add one, so one addition vanishes; FOR UPDATE, an atomic UPDATE, or a version column prevents it.', bn: 'দুই জন লেখক একই মান পড়ে প্রত্যেকে এক যোগ করে, ফলে ১টি যোগ হারিয়ে যায়; FOR UPDATE, atomic UPDATE বা version column আটকায়।' },
        },
        {
          term: 'next-key lock',
          def: { en: 'A row lock plus the gap before it, taken under REPEATABLE READ so a matching insert cannot sneak in.', bn: 'এক সারির lock আর তার আগের ফাঁক — REPEATABLE READ-এ নেওয়া হয়, যাতে মেলে এমন insert ঢুকতে না পারে।' },
        },
        {
          term: 'consistent read',
          def: { en: 'A plain SELECT from an MVCC snapshot, built from undo records, so readers never block writers.', bn: 'MVCC snapshot থেকে সাধারণ SELECT, undo রেকর্ডে গড়া, তাই পড়লে লেখক আটকায় না।' },
        },
        {
          term: 'innodb_lock_wait_timeout',
          def: { en: 'Seconds a statement waits for a lock before error 1205; the deadlock detector (error 1213) is separate and quicker.', bn: 'lock-এর জন্য কত সেকেন্ড অপেক্ষা করে 1205 error দেবে; deadlock সনাক্তকারী (1213) আলাদা আর দ্রুত।' },
        },
      ],
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: { en: 'HOW it runs — stage by stage', bn: 'কীভাবে চলে — ধাপে ধাপে' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1. Decide the unit of work', bn: '১. কাজের একক ঠিক করুন' },
          text: { en: 'Begin where a half-applied change would be wrong; commit where it becomes meaningful.', bn: 'যেখানে আধা-বদল ভুল সেখানে begin, যেখানে বদল অর্থবহ সেখানে commit।' },
        },
        {
          title: { en: '2. Choose pessimistic or optimistic', bn: '২.  pessimistic না optimistic তা বাছুন' },
          text: { en: 'A hot row many writers fight over: FOR UPDATE. A rare clash: a version test and retry.', bn: 'গরম সারিতে অনেক লেখকের লড়াই: FOR UPDATE। বিরোধ কম হলে: version পরীক্ষা আর retry।' },
        },
        {
          title: { en: '3. Write rows in one order', bn: '৩. সারি একই ক্রমে লিখুন' },
          text: { en: 'Sort your ids before looping over them in every service; the deadlock cycle needs an inconsistent order.', bn: 'প্রতিটি সেবায় loop-এর আগে id সাজিয়ে নিন; deadlock-এর চক্র অসঙ্গত ক্রম চায়।' },
        },
        {
          title: { en: '4. Read the evidence', bn: '৪. প্রমাণ পড়ুন' },
          text: { en: 'SHOW ENGINE INNODB STATUS for the last deadlock, data_lock_waits for the live one; then shrink the transaction.', bn: 'শেষ deadlock-এর জন্য SHOW ENGINE INNODB STATUS, চলমানটির জন্য data_lock_waits; তারপর transaction ছোট করুন।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Transactions and Locks: the moving parts', bn: 'transaction আর lock: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Transactions and Locks">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Decide the unit of work</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">Begin where a half-applied change would be</text>
<text x="352" y="79" font-size="11" fill="currentColor">wrong; commit where it becomes meaningful.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Choose pessimistic or optimistic</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">A hot row many writers fight over: FOR UPDATE.</text>
<text x="352" y="151" font-size="11" fill="currentColor">A rare clash: a version test and retry.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Write rows in one order</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Sort your ids before looping over them in</text>
<text x="352" y="223" font-size="11" fill="currentColor">every service; the deadlock cycle needs an in…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Read the evidence</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">SHOW ENGINE INNODB STATUS for the last</text>
<text x="352" y="295" font-size="11" fill="currentColor">deadlock, data_lock_waits for the live one; t…</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">The one rule that prevents most lock pain: keep transactions short, and never wait for a human,…</text>
</svg>`,
      caption: { en: 'The one rule that prevents most lock pain: keep transactions short, and never wait for a human, a network call or an external API inside one.', bn: 'lock-এর বেশিরভাগ কষ্ট কমানোর একটাই নিয়ম: transaction ছোট রাখুন, আর তার ভেতরে কখনো মানুষ, network call বা বাইরের API-এর অপেক্ষা করবেন না।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'The one rule that prevents most lock pain: keep transactions short, and never wait for a human, a network call or an external API inside one.', bn: 'lock-এর বেশিরভাগ কষ্ট কমানোর একটাই নিয়ম: transaction ছোট রাখুন, আর তার ভেতরে কখনো মানুষ, network call বা বাইরের API-এর অপেক্ষা করবেন না।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'A long transaction nobody notices', bn: 'কেউ না-জানা লম্বা transaction' },
      text: { en: 'It pins the purge of old row versions, bloats the undo tablespace, and makes every other session read an older snapshot; the symptom is a database that “slowly gets slower”.', bn: 'পুরোনো সংস্করণ মুছে ফেলা আটকে দেয়, undo tablespace ফুলিয়ে দেয়, আর বাকি সব session পুরোনো snapshot পড়ে; লক্ষণ — database “ধীরে ধীরে ধীর” হয়ে যায়।' },
    },
  ],
  exercises: [
    {
      id: 'transactions-and-locks-ex1',
      kind: 'mcq',
      topic: 'mysql: Transactions and Locks',
      question: { en: 'Two services decrement stock with “read, subtract, write” and no locks. What is the likely outcome?', bn: 'দুটি service lock ছাড়াই “পড়, বিয়োগ, লেখ” করে stock কামায়। সম্ভাব্য ফল?' },
      options: [
        { en: 'Both decrements land; the engine queues them', bn: 'দুটোই বসে; engine সারিতে দায়' },
        { en: 'One decrement is lost: both read the same value', bn: 'একটি বিয়োগ হারায়: দুজনেই একই মান পড়ে' },
        { en: 'A deadlock error is raised', bn: 'deadlock error ওঠে' },
        { en: 'The row is locked automatically', bn: 'সারি আপনা থেকেই lock হয়' },
      ],
      answer: 1,
      hint: { en: 'Nothing stops the second read happening first.', bn: 'দ্বিতীয় পড়া আগে হওয়া ঠেকায় কেউ নেই।' },
      explanation: { en: 'This is the lost update: two read-modify-writes overlap. UPDATE product SET stock = stock - 1 does it in one statement; SELECT ... FOR UPDATE or a version check also works.', bn: 'এটিই lost update: দুই read-modify-write একসাথে চাপে। UPDATE product SET stock = stock - 1 এটি এক বিবৃতিতেই করে; SELECT ... FOR UPDATE বা version পরীক্ষাও চলে।' },
    },
    {
      id: 'transactions-and-locks-ex2',
      kind: 'mcq',
      topic: 'mysql: Transactions and Locks',
      question: { en: 'A statement fails with error 1213. What should the application do?', bn: 'একটি বিবৃতি 1213 error দিয়ে ব্যর্থ হলো। app কী করবে?' },
      options: [
        { en: 'Wait a minute and retry the whole request', bn: 'এক মিনিট অপেক্ষা করে পুরো request আবার পাঠান' },
        {
          en: 'Retry the transaction, since InnoDB rolled back only the last statement or the whole transaction',
          bn: 'transaction আবার চেষ্টা করুন, InnoDB শেষ বিবৃতি বা পুরো transaction rollback করেছে',
        },
        { en: 'Disable autocommit', bn: 'autocommit বন্ধ করুন' },
        { en: 'Nothing; the other session was killed', bn: 'কিছু না; অন্য session মারা গেছে' },
      ],
      answer: 1,
      hint: { en: 'The victim is chosen, the data is consistent.', bn: 'শিকারি ঠিক করা হয়, তথ্য সামঞ্জস্যপূর্ণ থাকে।' },
      explanation: { en: 'InnoDB picks a victim, rolls it back, and the retry succeeds if the two no longer interleave; keeping the retry narrow and the lock order consistent is the engineering, not the error handling.', bn: 'InnoDB একটি শিকারি বেছে rollback করে; দুটি আর না-মেশলে retry সফল হয়। retry সরু রাখা আর lock-এর ক্রম স্থির রাখাই কাজের অংশ, error handling-এর নয়।' },
    },
    {
      id: 'transactions-and-locks-ex3',
      kind: 'fill',
      topic: 'mysql: Transactions and Locks',
      question: { en: 'Write the clause that takes exclusive row locks for the ids you selected.', bn: 'বাছাই করা id গুলোর জন্য exclusive row lock নেওয়ার অংশটি লিখুন।' },
      answer: 'FOR UPDATE',
      accept: [
        'FOR UPDATE',
        'for update',
        'SELECT ... FOR UPDATE',
      ],
      hint: { en: 'Three words, ending with UPDATE.', bn: 'তিনটি শব্দ, শেষে UPDATE।' },
      explanation: { en: 'SELECT ... FOR UPDATE locks exactly the rows the query matched, so a following UPDATE inside the same transaction sees truth and holds off rivals; FOR SHARE is the softer version.', bn: 'SELECT ... FOR UPDATE query যে সারি মেলাল ঠিক সেগুলোই lock করে, ফলে সেই transaction-এর পরের UPDATE সত্যি পড়ে আর প্রতিদ্বন্দ্বী আটকে দেয়; FOR SHARE নরম সংস্করণ।' },
    },
  ],
  quiz: {
    id: 'transactions-and-locks-quiz',
    title: { en: 'Quiz — Transactions and Locks', bn: 'কুইজ — transaction আর lock' },
    questions: [
      {
        id: 'transactions-and-locks-q1',
        kind: 'mcq',
        topic: 'mysql: Transactions and Locks',
        question: { en: 'What does a plain SELECT do inside a REPEATABLE READ transaction after a first read?', bn: 'REPEATABLE READ transaction-এ প্রথম পড়ার পর সাধারণ SELECT কী করে?' },
        options: [
          { en: 'Locks every row it reads', bn: 'পড়া প্রতিটি সারি lock করে' },
          {
            en: 'Reads the same snapshot again, ignoring newer commits',
            bn: 'একই snapshot আবার পড়ে, নতুন commit উপেক্ষা করে',
          },
          { en: 'Sees other transactions’ committed changes', bn: 'অন্যের commit দেখতে পায়' },
          { en: 'Refuses to run twice', bn: 'দুবার চলতে দেয় না' },
        ],
        answer: 1,
        hint: { en: 'Consistency is the point.', bn: 'সামঞ্জস্যই লক্ষ্য।' },
        explanation: { en: 'The snapshot is taken at the first read of the transaction, which is what makes totals agree inside it; a current read (FOR UPDATE, or an UPDATE) deliberately sees the latest.', bn: 'snapshot transaction-এর প্রথম পড়াতেই নেওয়া হয়, তাতেই ভেতরের যোগফল মিলে যায়; current read (FOR UPDATE, বা UPDATE) ইচ্ছাকৃতভাবে সর্বশেষটি দেখে।' },
      },
      {
        id: 'transactions-and-locks-q2',
        kind: 'mcq',
        topic: 'mysql: Transactions and Locks',
        question: { en: 'Which row does a deadlock victim get?', bn: 'deadlock-এ শিকারি কে হয়?' },
        options: [
          { en: 'The older transaction', bn: 'যেটি আগে শুরু' },
          { en: 'The one that has changed fewer rows', bn: 'যে কম সারি বদলেছে' },
          { en: 'Always the one that asked last', bn: 'সবসময় যে পরে জিজ্ঞেস করেছে' },
          {
            en: 'Whichever has the lower lock priority and lower undo cost',
            bn: 'যার lock priority কম আর undo-র খরচ কম',
          },
        ],
        answer: 3,
        hint: { en: 'It is a cost decision, not a fairness one.', bn: 'ন্যায্যতার সিদ্ধান্ত নয়, খরচের।' },
        explanation: { en: 'InnoDB rolls back the transaction for which undoing is cheapest, measured in rows changed; that is why small transactions die in a deadlock and large ones survive.', bn: 'InnoDB যেটি কম-ব্যয়ী undo (বদলানো সারির সংখ্যা) তার transaction rollback করে; তাই deadlock-এ ছোট মরে, বড় বেঁচে যায়।' },
      },
      {
        id: 'transactions-and-locks-q3',
        kind: 'mcq',
        topic: 'mysql: Transactions and Locks',
        question: { en: 'Why is a gap lock taken at all?', bn: 'gap lock কেনই বা নেওয়া হয়?' },
        options: [
          { en: 'To speed up inserts', bn: 'insert দ্রুত করতে' },
          {
            en: 'To stop a new row appearing inside a range a transaction already read',
            bn: 'একটি transaction যে range পড়েছে তার ভেতরে নতুন সারি ঢুকতে যাবে না বলে',
          },
          { en: 'Because tables are locked by default', bn: 'table ডিফল্টে lock থাকে বলে' },
          { en: 'To reserve AUTO_INCREMENT numbers', bn: 'AUTO_INCREMENT নম্বর ধরে রাখতে' },
        ],
        answer: 1,
        hint: { en: 'It is about phantoms, not about performance.', bn: 'বিষয় phantom, গতি নয়।' },
        explanation: { en: 'Without the gap, a re-run of the same range could gain a row and the transaction’s own arithmetic would stop adding up; the price is that inserts into hot ranges contend.', bn: 'ফাঁক lock না-থাকলে একই range বারবার চালালে নতুন সারি আসতে পারত, transaction-এর নিজের হিসাবই মেলা বন্ধ হত; দাম হলো গরম range-এ insert-এ সংঘাত।' },
      },
      {
        id: 'transactions-and-locks-q4',
        kind: 'mcq',
        topic: 'mysql: Transactions and Locks',
        question: { en: 'Which is safe for replication and concurrent writers when billing must not double-charge?', bn: 'replication আর concurrent লেখকের মধ্যে billing দ্বিগুণ চার্জ না-করতে নিরাপদ কোনটি?' },
        options: [
          { en: 'Check the ledger in the app, then insert', bn: 'app-এ খাতা দেখে তারপর insert' },
          {
            en: 'A UNIQUE constraint on (invoice_id) inside the transaction',
            bn: 'transaction-এর ভেতরে (invoice_id)-এর উপর UNIQUE constraint',
          },
          { en: 'SELECT ... FOR SHARE before the insert', bn: 'insert-এর আগে SELECT ... FOR SHARE' },
          { en: 'An advisory lock in Redis', bn: 'Redis-এ advisory lock' },
        ],
        answer: 1,
        hint: { en: 'The engine is the only referee both writers see.', bn: 'দুই লেখকই যে বিচারককে দেখে, সেটিই engine।' },
        explanation: { en: 'A unique index makes the impossible state unrepresentable and fails with 1062 under any isolation level; application-side checks always have a window.', bn: 'unique index অসম্ভব অবস্থাকেই অসম্ভব করে, যেকোনো isolation level-এ 1062 দেয়; app-পক্ষের যাচাইয়ে সবসময় ফাঁক থাকে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'views-routines-and-the-ops-window',
    tech: 'mysql',
    title: { en: 'Views, Routines and the Ops Window', bn: 'view, routine আর পরিচালনার জানালা' },
  },
};
