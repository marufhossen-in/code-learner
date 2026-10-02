import type { Lesson } from '../../../lib/types';

export const PuttingRowsInLesson: Lesson = {
  slug: 'putting-rows-in',
  tech: 'mysql',
  title: { en: 'Putting Rows In', bn: 'সারি ঢোকানো' },
  summary: { en: 'INSERT has four dialects: one row, many rows, insert-or-update, and insert-or-ignore. Each trades correctness for speed, and each behaves differently with AUTO_INCREMENT and triggers.', bn: 'INSERT-এর চার ভাষা: এক সারি, অনেক সারি, insert-অথবা-update, insert-অথবা-উপেক্ষা। প্রতিটি সঠিকতার বদলে গতি নেয়, আর AUTO_INCREMENT ও trigger-এ আচরণ আলাদা।' },
  minutes: 9,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Putting Rows In', bn: 'WHAT — সারি ঢোকানো' },
    },
    {
      type: 'para',
      text: { en: 'So far you have described the table; now the data has to arrive. It comes from a signup form, a text file of rows your accountant exported, or a script that produces one product at a time. Each of those needs to land without creating a duplicate and without losing a decimal place, and this page is the four statements that write.', bn: 'এ পর্যন্ত আপনি table-এর গড়ন লিখেছেন; এবার তথ্য আসুক। সেটি আসছে একটি সাইনআপ ফর্ম থেকে, accountant-এর দেওয়া CSV থেকে, বা একে একে product বানানো একটি script থেকে। কোনো দ্বৈত সারি না-বানিয়ে, দশমিকের ঘর না-হারিয়ে সেগুলো বসানোর চারটি বিবৃতিই এই পাতায়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'One statement with a hundred tuples costs one parse, one plan and one redo flush; a hundred statements cost a hundred round trips and up to a hundred fsyncs.',
          bn: 'এক statement-এ একশ সারি মানে এক parse, এক plan, এক redo flush; একশ বিবৃতি মানে একশ যাতায়াত আর একশ fsync পর্যন্ত।',
        },
        {
          en: 'ON DUPLICATE KEY UPDATE is the only clean way to say upsert in MySQL; VALUES(col) (or the new alias) reads the value you tried to insert.',
          bn: 'MySQL-এ upsert বলার একমাত্র পরিষ্কার উপায় ON DUPLICATE KEY UPDATE; VALUES(col) (বা নতুন alias) আপনি ঢোকাতে-चाहा মানটি পড়ে।',
        },
        {
          en: 'REPLACE INTO is a DELETE followed by an INSERT, so it costs more than it looks, fires delete triggers, and hands out a fresh AUTO_INCREMENT id.',
          bn: 'REPLACE INTO মূলত DELETE-এর পর INSERT, তাই দেখতে সস্তা হলেও খরচ বেশি, delete trigger চালায়, আর নতুন AUTO_INCREMENT id দেয়।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'insert.sql',
      code: `-- 1. one row; name the columns so a schema change cannot bite
INSERT INTO product (sku, title, price) VALUES ('A-1', 'Jam', 145.50);

-- 2. many rows in one statement — the default for bulk work
INSERT INTO product (sku, title, price) VALUES
  ('A-2', 'Marmalade', 160.00),
  ('A-3', 'Honey',      420.00),
  ('A-4', 'Syrup',      90.00);

-- 3. upsert: insert, or update the row that got in the way
INSERT INTO stock (product_id, qty) VALUES (7, 10)
  AS new
  ON DUPLICATE KEY UPDATE qty = qty + new.qty;

-- 4. import that must not stop on one bad row
INSERT IGNORE INTO product (sku, title, price) VALUES ('A-1', 'Jam', -5);
-- 1 warning: the row was skipped, not clamped
SELECT LAST_INSERT_ID();          -- id of the last single-row insert`,
      caption: { en: 'In 8.0.19 the new-row alias (AS new) is preferred; before that, VALUES(col) inside the update clause did the job.', bn: '৮.০.১৯-এ নতুন সারির alias (AS new) পছন্দ; তার আগে update অংশে VALUES(col) একই কাজ করত।' },
    },
    {
      type: 'table',
      head: [
        { en: 'form', bn: 'রূপ' },
        { en: 'on a key clash', bn: 'key মিললে' },
        { en: 'AUTO_INCREMENT effect', bn: 'AUTO_INCREMENT-এর ব্যবহার' },
      ],
      rows: [
        [
          { en: 'INSERT', bn: 'INSERT' },
          { en: 'error 1062, whole statement rolls back', bn: 'error ১০৬২, পুরো বিবৃতি rollback' },
          { en: 'consumes one id per attempted row', bn: 'চেষ্টা প্রতিটি সারির জন্য এক নম্বর খরচ' },
        ],
        [
          { en: 'INSERT IGNORE', bn: 'INSERT IGNORE' },
          { en: 'skips the row, counts as a warning', bn: 'সারি এড়ায়, warning গণ্য' },
          { en: 'still burns the id it reserved', bn: 'রেজার্ভ করা নম্বর তবু পোড়ে' },
        ],
        [
          { en: 'ON DUPLICATE KEY UPDATE', bn: 'ON DUPLICATE KEY UPDATE' },
          { en: 'updates the existing row', bn: 'আগের সারি বদলায়' },
          { en: 'no new id unless the row is inserted', bn: 'নতুন id নেই, সারি বসলে বইলে' },
        ],
        [
          { en: 'REPLACE INTO', bn: 'REPLACE INTO' },
          { en: 'deletes the row, inserts a new one', bn: 'সারি মুছে নতুন বসায়' },
          { en: 'always a fresh id; other unique keys lose data', bn: 'সবসময় নতুন id; অন্য unique key-তে তথ্য হারায়' },
        ],
        [
          { en: 'INSERT ... SELECT', bn: 'INSERT ... SELECT' },
          { en: 'error, unless IGNORE or a unique-safe query', bn: 'error, IGNORE বা unique-নিরাপদ query না-থাকলে' },
          { en: 'one id block for the batch', bn: 'পুরো দলের জন্য এক নম্বর ব্লক' },
        ],
      ],
      caption: { en: 'The id column is the trap: every form reserves numbers up front, so a skipped row still costs a number.', bn: 'ফাঁদটা id-তেই: প্রতি রূপ আগে থেকে নম্বর সংরোধ করে, তাই এড়ানো সারিও নম্বর খরচ করে।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'strict mode',
          def: { en: 'sql_mode including STRICT_TRANS_TABLES: a bad value aborts the statement instead of silently truncating it to zero.', bn: 'sql_mode-এ STRICT_TRANS_TABLES: খারাপ মান চুপচাপ শূন্যে কাটা না-গিয়ে বিবৃতি থামায়।' },
        },
        {
          term: 'LAST_INSERT_ID()',
          def: { en: 'The first id this session generated in the last multi-row insert; safe because it is per-connection.', bn: 'শেষ বহু-সারি insert-এ এই session যে প্রথম id পেয়েছে; per-connection বলে নিরাপদ।' },
        },
        {
          term: 'LOAD DATA',
          def: { en: 'A server-side CSV reader that bulk-loads faster than any loop of INSERT statements.', bn: 'server-এর ভেতরের CSV পাঠক, যেকোনো INSERT loop-এর চেয়ে দ্রুত ঢোকায়।' },
        },
        {
          term: 'batch size',
          def: { en: 'How many tuples per statement; big batches are fast until they hit max_allowed_packet.', bn: 'প্রতি বিবৃতিতে কয় সারি; বড় দল দ্রুত, max_allowed_packet না-আসা পর্যন্ত।' },
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
          title: { en: '1. List the columns', bn: '১. column নামাঙ্কিত করুন' },
          text: { en: 'INSERT INTO t (a, b) — never rely on the physical order of a table someone else may widen.', bn: 'INSERT INTO t (a, b) — অন্য যে table প্রস্থ বাড়াতে পারে, তার ক্রমের উপর নির্ভর করবেন না।' },
        },
        {
          title: { en: '2. Group the rows', bn: '২. সারি একসাথে দিন' },
          text: { en: 'Many tuples in one statement, sized to stay under max_allowed_packet and to finish inside innodb_lock_wait_timeout.', bn: 'এক বিবৃতিতে অনেক tuple, max_allowed_packet-এর নিচে আর innodb_lock_wait_timeout-এর ভেতরে শেষ হয় এমন আকারে।' },
        },
        {
          title: { en: '3. Choose the clash rule', bn: '৩. মিললে কী হবে বাছুন' },
          text: { en: 'Upsert when the row is the same fact, IGNORE when the file may repeat, REPLACE only when you accept delete-then-insert.', bn: 'একই তথ্য হলে upsert, ফাইলে পুনরাবৃত্তি থাকলে IGNORE, আর REPLACE শুধু delete-then-insert মেনে নিলে।' },
        },
        {
          title: { en: '4. Check what it cost', bn: '৪. খরচ দেখুন' },
          text: { en: 'Rows affected, warnings, and the ids consumed — SHOW WARNINGS and the handler counter tell the truth.', bn: 'কত সারি বদলাল, কত warning, কত নম্বর খরচ — SHOW WARNINGS আর counter সত্যি বলে।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Putting Rows In: the moving parts', bn: 'সারি ঢোকানো: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Putting Rows In">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. List the columns</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">INSERT INTO t (a, b) — never rely on the</text>
<text x="352" y="79" font-size="11" fill="currentColor">physical order of a table someone else may wi…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Group the rows</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Many tuples in one statement, sized to stay</text>
<text x="352" y="151" font-size="11" fill="currentColor">under max_allowed_packet and to finish inside…</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Choose the clash rule</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Upsert when the row is the same fact, IGNORE</text>
<text x="352" y="223" font-size="11" fill="currentColor">when the file may repeat, REPLACE only when y…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Check what it cost</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Rows affected, warnings, and the ids consumed</text>
<text x="352" y="295" font-size="11" fill="currentColor">— SHOW WARNINGS and the handler counter tell …</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Rows affected is not rows sent: one upsert that updated an existing row reports 2, and one IGNO…</text>
</svg>`,
      caption: { en: 'Rows affected is not rows sent: one upsert that updated an existing row reports 2, and one IGNORE that skipped reports 0.', bn: 'Rows affected মূলত বদলানো সারির সংখ্যা: ১টি existing সারি update হলে upsert ২ বলে, এবং ১টি IGNORE সারি এড়িয়ে দিলে ০ বলে।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Rows affected is not rows sent: one upsert that updated an existing row reports 2, and one IGNORE that skipped reports 0.', bn: 'Rows affected মূলত বদলানো সারির সংখ্যা: ১টি existing সারি update হলে upsert ২ বলে, এবং ১টি IGNORE সারি এড়িয়ে দিলে ০ বলে।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'REPLACE as a lazy upsert', bn: 'সস্তা upsert হিসেবে REPLACE' },
      text: { en: 'It deletes and reinserts, so columns you left out go back to their defaults, the id changes, and any table referring to the old id now points at nothing.', bn: 'মুছে নতুন বসায়, তাই যে column বাদ দিয়েছেন সেগুলো default-এ ফেরে, id বদলায়, আর পুরোনো id দেখা table আর কিছু দেখে না।' },
    },
  ],
  exercises: [
    {
      id: 'putting-rows-in-ex1',
      kind: 'mcq',
      topic: 'mysql: Putting Rows In',
      question: { en: 'A 500-row CSV import must skip duplicate keys instead of aborting. Which statement?', bn: '৫০০ সারির CSV import-এ নকল key থাকলে থাম নয়, এড়িয়ে যান — কোন বিবৃতি?' },
      options: [
        { en: 'INSERT IGNORE INTO ...', bn: 'INSERT IGNORE INTO ...' },
        { en: 'REPLACE INTO ...', bn: 'REPLACE INTO ...' },
        { en: 'INSERT ... ON DUPLICATE KEY UPDATE id = id', bn: 'INSERT ... ON DUPLICATE KEY UPDATE id = id' },
        { en: 'LOAD DATA with IGNORE', bn: 'LOAD DATA with IGNORE' },
      ],
      answer: 0,
      hint: { en: 'Both A and D skip; one keeps the ids stable.', bn: 'A ও D দুটোই এড়ায়; একটি id স্থির রাখে।' },
      explanation: { en: 'INSERT IGNORE skips the offending row. LOAD DATA ... IGNORE also works for a file, while ON DUPLICATE KEY UPDATE id = id is the clever no-op variant; REPLACE would rewrite the row.', bn: 'INSERT IGNORE দোষী সারি এড়ায়। ফাইলের জন্য LOAD DATA ... IGNORE-ও চলে; ON DUPLICATE KEY UPDATE id = id বুদ্ধির no-op; REPLACE সারি লিখে ফেলত।' },
    },
    {
      id: 'putting-rows-in-ex2',
      kind: 'predict',
      topic: 'mysql: Putting Rows In',
      question: { en: 'Two INSERT statements run in one session, each inserting three rows. What does LAST_INSERT_ID() return after the second?', bn: '১টি session-এ ২টি INSERT, প্রতিটিতে ৩টি করে সারি। দ্বিতীয়টির পর LAST_INSERT_ID() কী দেয়?' },
      code: `INSERT INTO t (a) VALUES (1),(2),(3);
INSERT INTO t (a) VALUES (4),(5),(6);
SELECT LAST_INSERT_ID();`,
      answer: 'the first id of the second statement',
      accept: [
        'the first id of the second statement',
        'first id of second statement',
        '4',
        'the first generated id of the last statement',
        'first id generated by the second INSERT',
      ],
      hint: { en: 'It is the first id of the batch, not the last.', bn: 'দলের প্রথম নম্বর, শেষেরটা নয়।' },
      explanation: { en: 'LAST_INSERT_ID() returns the first auto-generated value of the most recent statement, so you can derive the rest by adding the row offset; it is per-connection and unaffected by other sessions.', bn: 'LAST_INSERT_ID() সাম্প্রতিক বিবৃতির প্রথম auto-generated মান দেয়, বাকিগুলো offset যোগ করে পাওয়া যায়; এটি per-connection, অন্য session-এর জন্য নড়ে না।' },
    },
    {
      id: 'putting-rows-in-ex3',
      kind: 'mcq',
      topic: 'mysql: Putting Rows In',
      question: { en: 'Why can a failed INSERT still move AUTO_INCREMENT forward?', bn: 'ব্যর্থ INSERT-ও AUTO_INCREMENT এগিয়ে দেয় — কেন?' },
      options: [
        { en: 'It is a bug fixed in 8.0', bn: '৮.০-তে ঠিক হওয়া bug' },
        {
          en: 'The counter is not transactional; ids are handed out, not committed',
          bn: 'গণক transactional নয়; নম্বর দেওয়া হয়, কমিট নয়',
        },
        { en: 'The binlog replays the number', bn: 'binlog সংখ্যাটি আবার চালায়' },
        { en: 'Only when innodb_autoinc_lock_mode = 1', bn: 'শুধু innodb_autoinc_lock_mode = 1 হলে' },
      ],
      answer: 1,
      hint: { en: 'Rollback does not un-ring a counter.', bn: 'rollback গণক ফেরায় না।' },
      explanation: { en: 'InnoDB allocates ids before the rows exist so concurrent inserts do not serialise on one row; a rollback cannot return a number another session may already be holding.', bn: 'সারি হওয়ার আগেই InnoDB id সংরোধ করে, যাতে একই সারিতে concurrent insert আটকে না যায়; rollback সংখ্যাটি ফেরত দিতে পারে না, অন্য session ধরে থাকতে পারে।' },
    },
  ],
  quiz: {
    id: 'putting-rows-in-quiz',
    title: { en: 'Quiz — Putting Rows In', bn: 'কুইজ — সারি ঢোকানো' },
    questions: [
      {
        id: 'putting-rows-in-q1',
        kind: 'mcq',
        topic: 'mysql: Putting Rows In',
        question: { en: 'What makes multi-row INSERT faster than a loop of single-row INSERTs?', bn: 'loop দিয়ে এক-এক সারি বদলে একসাথে অনেক সারি INSERT কেন দ্রুত?' },
        options: [
          { en: 'It skips constraint checks', bn: 'constraint যাচাই বাদ পড়ে' },
          {
            en: 'One parse, one plan, one redo flush for the batch',
            bn: 'এক parse, এক plan, এক redo flush পুরো দলের জন্য',
          },
          { en: 'It locks no rows at all', bn: 'কোনও সারি lock হয় না' },
          { en: 'The binlog is bypassed', bn: 'binlog এড়ানো হয়' },
        ],
        answer: 1,
        hint: { en: 'Count the round trips.', bn: 'যাতায়াত গনুন।' },
        explanation: { en: 'Constraints, undo, redo and binlog all still happen per row; the savings are parsing, planning and the per-transaction log flush.', bn: 'constraint, undo, redo, binlog প্রতি সারিতেই হয়; সাশ্রয় হয় parse, plan আর প্রতি transaction-এর log flush-এ।' },
      },
      {
        id: 'putting-rows-in-q2',
        kind: 'mcq',
        topic: 'mysql: Putting Rows In',
        question: { en: 'In ON DUPLICATE KEY UPDATE, how do you read the value the INSERT tried to use (8.0.19+)?', bn: 'ON DUPLICATE KEY UPDATE-এ INSERT যে মান ঢোকাতে চেয়েছিল তা পড়বেন কীভাবে (৮.০.১৯+)?' },
        options: [
          { en: 'VALUES(col)', bn: 'VALUES(col)' },
          { en: 'the row alias from the AS new clause', bn: 'AS new clause-এর row alias' },
          { en: 'NEW.col', bn: 'NEW.col' },
          { en: 'INSERTED(col)', bn: 'INSERTED(col)' },
        ],
        answer: 1,
        hint: { en: 'VALUES() still works but is deprecated here.', bn: 'VALUES() চলে, তবে এখানে deprecated।' },
        explanation: { en: 'AS new lets the update clause refer to new.qty; VALUES(col) does the same job but is deprecated and confuses readers who know trigger syntax.', bn: 'AS new দিলে update অংশে new.qty লেখা যায়; VALUES(col) একই কাজ করে কিন্তু deprecated, আর trigger-এর NEW/OLD মনে করিয়ে বিভ্রান্ত করে।' },
      },
      {
        id: 'putting-rows-in-q3',
        kind: 'mcq',
        topic: 'mysql: Putting Rows In',
        question: { en: 'Which statement writes a CSV from a query result?', bn: 'query-এর ফল থেকে CSV কোন বিবৃতি লেখে?' },
        options: [
          { en: 'EXPORT DATA', bn: 'EXPORT DATA' },
          { en: 'SELECT ... INTO OUTFILE', bn: 'SELECT ... INTO OUTFILE' },
          { en: 'mysqldump --csv', bn: 'mysqldump --csv' },
          { en: 'COPY TO', bn: 'COPY TO' },
        ],
        answer: 1,
        hint: { en: 'It is the mirror image of LOAD DATA.', bn: 'LOAD DATA-এর আয়না।' },
        explanation: { en: 'SELECT ... INTO OUTFILE writes on the server, under secure_file_priv; LOAD DATA INFILE reads the same way, and neither touches the client machine unless LOCAL is enabled.', bn: 'SELECT ... INTO OUTFILE server-এ লেখে, secure_file_priv-এর ভেতরে; LOAD DATA INFILE একইভাবে পড়ে; LOCAL না-চালালে দুটোই client স্পর্শ করে না।' },
      },
      {
        id: 'putting-rows-in-q4',
        kind: 'mcq',
        topic: 'mysql: Putting Rows In',
        question: { en: 'A 2 GB import needs to be fast and resumable. What is the practical shape?', bn: '২ GB import দ্রুত আর থামা-আবার-চালানোর মতো করতে উপায় কী?' },
        options: [
          { en: 'One giant INSERT with 2 GB of tuples', bn: '২ GB-এর এক বিশাল INSERT' },
          {
            en: 'Batches of a few thousand rows, each its own transaction, with LOAD DATA where possible',
            bn: 'কয়েক হাজার সারির দল, প্রতিটি আলাদা transaction, যতটা পারেন LOAD DATA',
          },
          { en: 'Autocommit off and one transaction for everything', bn: 'autocommit বন্ধ, সবকিছু একটি transaction' },
          { en: 'A trigger that appends rows', bn: 'row যোগ করার একটি trigger' },
        ],
        answer: 1,
        hint: { en: 'A single transaction that huge costs undo and blocks everyone.', bn: 'এত বড় এক transaction undo-এর খরচ, আর সবার আটকে যায়।' },
        explanation: { en: 'Batched transactions keep the undo log small, let replication lag stay sane, and let you resume from the last good batch; max_allowed_packet caps the batch size anyway.', bn: 'দলে দলে transaction undo log ছোট রাখে, replication lag সামলে রাখেন, শেষ ভালো দল থেকে আবার শুরু করা যায়; max_allowed_packet প্রথমে দলের আকারই ঠিক করে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'select-and-where',
    tech: 'mysql',
    title: { en: 'Selecting Rows: WHERE, LIKE, LIMIT', bn: 'সারি বাছা: WHERE, LIKE, LIMIT' },
  },
};
