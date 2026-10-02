import type { Lesson } from '../../../lib/types';

export const KeysAndConstraintsLesson: Lesson = {
  slug: 'keys-and-constraints',
  tech: 'mysql',
  title: { en: 'Keys and Constraints', bn: 'key আর constraint' },
  summary: { en: 'Constraints are the only part of the schema an application cannot forget. Primary keys, unique keys, NOT NULL, DEFAULT, CHECK and foreign keys — what each forbids, what it costs on write, and what InnoDB does on delete.', bn: 'constraint-ই schema-এর একমাত্র অংশ যা app ভুলে যেতে পারে না। primary key, unique key, NOT NULL, DEFAULT, CHECK আর foreign key — প্রতিটি কী বারণ করে, লেখার সময় কত খরচ, আর মুছে ফেলার সময় InnoDB কী করে।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Keys and Constraints', bn: 'WHAT — key আর constraint' },
    },
    {
      type: 'para',
      text: { en: 'Your product table holds 30 rows, and a colleague has just typed the same SKU (the shop’s own code for a product) twice. Nothing stopped them: a table accepts the shape you described and no more. This page is about the promises you attach to a table so that the database itself refuses the bad row — and what refusing costs you later.', bn: 'আপনার product টেবিলে ৩০টি সারি, আর এক সহকর্মী ঠিক একই SKU দুবার লিখে ফেললেন। কিছুই তাকে থামাল না — table যে গড়নটা আপনি দিয়েছেন সেটাই সে নেয়, তার বেশি নয়। এই পাতায় সেই প্রতিশ্রুতির কথা, যা টেবিলে বসালে database নিজেই ভুল সারি ফিরিয়ে দেয় — আর পরে সেই ফিরিয়ে দেওয়া কত দামি হয়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'The database is the last honest referee: every rule you write as a constraint is one your code no longer has to remember on a bad day.',
          bn: 'database শেষ সৎ বিচারক: যা constraint লিখে দেন, সেই নিয়মটি খারাপ দিনে code-এর মনে রাখতে হয় না।',
        },
        {
          en: 'A secondary index on the child column is required for a foreign key; without it InnoDB creates one, because checking a parent on every parent update must not scan the child table.',
          bn: 'foreign key-তে child column-এর secondary index বাধ্যতামূলক; না-থাকলে InnoDB নিজেই বানায়, কারণ প্রতি parent বদলে child table স্ক্যান করা চলে না।',
        },
        {
          en: 'ON DELETE says what happens to the children: RESTRICT refuses, CASCADE deletes them, SET NULL orphans them, and NO ACTION is the checked-at-end cousin of RESTRICT.',
          bn: 'ON DELETE বলে সন্তানদের কী হবে: RESTRICT বারণ করে, CASCADE মুছে দেয়, SET NULL এতিম করে, আর NO ACTION হলো শেষে-যাচাই-করা RESTRICT-এর কুটুম।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'schema.sql',
      code: `CREATE TABLE customer (
  id    BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(254)  NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_email (email)
);

CREATE TABLE orders (
  id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  customer_id BIGINT UNSIGNED NOT NULL,
  total       DECIMAL(10,2)   NOT NULL DEFAULT 0.00,
  status      VARCHAR(12)     NOT NULL DEFAULT 'new',
  PRIMARY KEY (id),
  KEY idx_customer (customer_id),
  CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id)
    REFERENCES customer (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT chk_total CHECK (total >= 0),
  CONSTRAINT chk_status CHECK (status IN ('new', 'paid', 'gone'))
);`,
      caption: { en: 'A parent with a natural unique key, a child with an indexed foreign key, and two CHECK rules the application can no longer sneak past.', bn: 'স্বাভাবিক unique key-ওয়ালা parent, index-করা foreign key-ওয়ালা child, আর দুটি CHECK — app আর এড়িয়ে যেতে পারবে না।' },
    },
    {
      type: 'table',
      head: [
        { en: 'constraint', bn: 'constraint' },
        { en: 'forbids', bn: 'কী বারণ করে' },
        { en: 'write cost', bn: 'লেখার খরচ' },
      ],
      rows: [
        [
          { en: 'PRIMARY KEY', bn: 'PRIMARY KEY' },
          { en: 'a second row with the same key, and NULL', bn: 'একই key-এর দ্বিতীয় সারি, আর NULL' },
          {
            en: 'insert position in the clustered index; page splits when keys are random',
            bn: 'clustered index-এ বসানোর জায়গা; এলোমেলো key হলে page split',
          },
        ],
        [
          { en: 'UNIQUE', bn: 'UNIQUE' },
          { en: 'duplicate values; NULLs are allowed many times', bn: 'নকল মান; NULL কয়েকবার থাকতে পারে' },
          { en: 'one extra index maintenance per row', bn: 'প্রতি সারিতে এক অতিরিক্ত index লেখা' },
        ],
        [
          { en: 'NOT NULL', bn: 'NOT NULL' },
          { en: 'a missing value in any statement', bn: 'যেকোনো বিবৃতিতে মান না-দেওয়া' },
          { en: 'nothing at runtime', bn: 'চলার সময় খরচ নেই' },
        ],
        [
          { en: 'DEFAULT', bn: 'DEFAULT' },
          { en: 'nothing — it supplies a value', bn: 'কিছুই না — মান জোগায়' },
          { en: 'nothing', bn: 'খরচ নেই' },
        ],
        [
          { en: 'CHECK', bn: 'CHECK' },
          { en: 'any row failing the boolean expression', bn: 'boolean expression বানচাল করা সারি' },
          { en: 'evaluate per row; cheap for arithmetic', bn: 'প্রতি সারিতে যাচাই; হিসাবে সস্তা' },
        ],
        [
          { en: 'FOREIGN KEY', bn: 'FOREIGN KEY' },
          {
            en: 'a child without a parent, and deleting a parent with children under RESTRICT',
            bn: 'parent-বিহীন সন্তান, আর RESTRICT থাকা parent মুছে ফেলা',
          },
          {
            en: 'a lookup on the parent key per write; gap locks can appear',
            bn: 'প্রতি লেখায় parent key খোঁজা; gap lock দেখা দিতে পারে',
          },
        ],
      ],
      caption: { en: 'Constraint checks happen inside the engine, so they also protect imports, manual fixes and the second application you forgot about.', bn: 'যাচাই engine-এর ভেতরেই হয়, তাই import, হাতে-ঠিক করা আর ভুলে যাওয়া দ্বিতীয় app-ও আটকায়।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'clustered index',
          def: { en: 'The primary key itself: rows live in its leaf pages, which is why the key should be short and increasing.', bn: 'primary key-ই নিজের: সারি তার পাতায় বাস করে, তাই key ছোট আর ক্রমবর্ধমান হওয়া দরকার।' },
        },
        {
          term: 'surrogate key',
          def: { en: 'A meaningless id you generate so that business data can change without moving rows.', bn: 'অর্থহীন id যা আপনি বানান, যাতে ব্যবসার তথ্য বদলালেও সারি না-সরিয়ে চলে।' },
        },
        {
          term: 'referential integrity',
          def: { en: 'The promise that every child row points at a real parent row; foreign keys enforce it, LEFT JOIN ... IS NULL finds it when they do not exist.', bn: 'প্রতিটি সন্তান-সারি সত্যিকার parent দেখায় — এই প্রতিশ্রুতিই referential integrity; foreign key তা বসায়, না-থাকলে LEFT JOIN ... IS NULL ভাঙা খুঁজে বের করে।' },
        },
        {
          term: 'ON DELETE CASCADE',
          def: { en: 'Deleting a parent deletes its children, recursively; powerful and a very good way to lose a schema subtree by accident.', bn: 'parent মুছলে সন্তানও মুছে যায়, ক্রমান্বয়ে; শক্তিশালী, আর ভুলে পুরো subtree হারানোরও একমাত্র উপায়।' },
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
          title: { en: '1. Give every table a primary key', bn: '১. প্রতিটি table-এর primary key' },
          text: { en: 'BIGINT UNSIGNED AUTO_INCREMENT, unless you have a real reason for a composite or a natural key.', bn: 'BIGINT UNSIGNED AUTO_INCREMENT, composite বা স্বাভাবিক key-র আসল কারণ না-থাকলে।' },
        },
        {
          title: { en: '2. Declare uniqueness you mean', bn: '২. যে unique-তা মানে, সেটি ঘোষণা করুন' },
          text: { en: 'Two rows per email is a bug, so the email column gets UNIQUE, not a SELECT-then-INSERT race.', bn: 'এক email-এ দুই সারি মানে bug; তাই email-এ UNIQUE বসবে, SELECT-তারপর-INSERT প্রতিযোগিতা নয়।' },
        },
        {
          title: { en: '3. Attach the foreign key and index the child', bn: '৩. foreign key দিন, child-ে index দিন' },
          text: { en: 'REFERENCES with an explicit ON DELETE, and KEY idx_customer so the check is a lookup.', bn: 'স্পষ্ট ON DELETE সহ REFERENCES, আর যাচাই যেন খোঁজা হয় সেই জন্য KEY idx_customer।' },
        },
        {
          title: { en: '4. Add CHECK for ranges', bn: '৪. সীমার জন্য CHECK' },
          text: { en: 'total >= 0 and status IN (...) live in 8.0.16+; older servers parse and ignore them, so test the version.', bn: 'total >= 0 আর status IN (...) ৮.০.১৬+ এ চলে; পুরোনো server পড়েও উপেক্ষা করে, তাই version যাচাই করুন।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Keys and Constraints: the moving parts', bn: 'key আর constraint: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Keys and Constraints">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Give every table a primary key</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">BIGINT UNSIGNED AUTO_INCREMENT, unless you</text>
<text x="352" y="79" font-size="11" fill="currentColor">have a real reason for a composite or a natur…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Declare uniqueness you mean</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Two rows per email is a bug, so the email</text>
<text x="352" y="151" font-size="11" fill="currentColor">column gets UNIQUE, not a SELECT-then-INSERT …</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Attach the foreign key and index …</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">REFERENCES with an explicit ON DELETE, and KEY</text>
<text x="352" y="223" font-size="11" fill="currentColor">idx_customer so the check is a lookup.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Add CHECK for ranges</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">total &gt;= 0 and status IN (...) live in</text>
<text x="352" y="295" font-size="11" fill="currentColor">8.0.16+; older servers parse and ignore them,…</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">A constraint you can see failing once is worth ten validations you hope are enough.</text>
</svg>`,
      caption: { en: 'A constraint you can see failing once is worth ten validations you hope are enough.', bn: 'একবার হলেও ব্যর্থ হওয়া দেখা গেছে এমন constraint, “হয়তো যথেষ্ট” বলে দশটি validation-এর চেয়ে দামি।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'A constraint you can see failing once is worth ten validations you hope are enough.', bn: 'একবার হলেও ব্যর্থ হওয়া দেখা গেছে এমন constraint, “হয়তো যথেষ্ট” বলে দশটি validation-এর চেয়ে দামি।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'CHECK as documentation', bn: 'CHECK-কে নথি ভেবে রাখা' },
      text: { en: 'On MySQL 5.7 the parser accepts a CHECK clause, records it in a comment and enforces nothing. Teams ship a “constraint” that let the bad row through in production.', bn: 'MySQL ৫.৭-এ parser CHECK clause মেনে নেয়, একটা comment-এ লিখে রাখে, কিন্তু কিছুই চালু করে না। দলের “constraint” সহ production-এ খারাপ সারি ঢুকিয়ে দেয়।' },
    },
  ],
  exercises: [
    {
      id: 'keys-and-constraints-ex1',
      kind: 'mcq',
      topic: 'mysql: Keys and Constraints',
      question: { en: 'Two sessions insert the same email at the same instant into a table whose email column has UNIQUE. What happens?', bn: 'একই email-এ দুই session একই মুহূর্তে insert করে, column-এ UNIQUE আছে। কী হয়?' },
      options: [
        { en: 'Both rows appear; UNIQUE is only advisory', bn: 'দুটোই বসে; UNIQUE শুধু পরামর্শ' },
        {
          en: 'One succeeds, the other gets error 1062 on commit or insert',
          bn: '১টি সফল হয়, অন্যটি insert বা commit-এ ১০৬২ পায়',
        },
        { en: 'The server waits, then merges them', bn: 'server অপেক্ষা করে, দুটো মিশিয়ে দেয়' },
        { en: 'The second insert silently becomes an update', bn: 'দ্বিতীয়টি চুপচাপ হয়ে যায় update' },
      ],
      answer: 1,
      hint: { en: 'Duplicate entry ... for key ...', bn: 'Duplicate entry ... for key ...' },
      explanation: { en: 'The unique index is checked as the row lands, so the loser gets 1062; that is the atomic version of the check-then-insert you would otherwise write in application code.', bn: 'সারি বসার সময়েই unique index যাচাই হয়, হারা পক্ষ 1062 পায়; এটিই code-এ লেখা check-then-insert-এর পারমাণবিক রূপ।' },
    },
    {
      id: 'keys-and-constraints-ex2',
      kind: 'mcq',
      topic: 'mysql: Keys and Constraints',
      question: { en: 'A child row references a parent that was deleted, and ON DELETE RESTRICT is set. What does the DELETE say?', bn: 'যে parent-এ reference করে সন্তান-সারি আছে, সেই parent মুছে ফেলতে ON DELETE RESTRICT কী বলে?' },
      options: [
        { en: 'It deletes both rows', bn: 'দুটোই মুছে ফেলে' },
        { en: 'It refuses with a foreign key constraint error', bn: 'foreign key constraint error দিয়ে অস্বীকার করে' },
        { en: 'It deletes the parent and NULLs the child', bn: 'parent মুছে সন্তানের key NULL করে' },
        { en: 'It queues the delete for later', bn: 'মোছা পেছনে রেখে দেয়' },
      ],
      answer: 1,
      hint: { en: 'RESTRICT is checked immediately, not deferred.', bn: 'RESTRICT সঙ্গে সঙ্গে দেখা হয়, পিছিয়ে নয়।' },
      explanation: { en: 'RESTRICT aborts the parent delete while any child exists; CASCADE would remove the children, SET NULL would orphan them, and NO ACTION in MySQL also refuses but may be deferred in engines that support deferral.', bn: 'কোনও সন্তান থাকলে RESTRICT parent মোছা বাতিল করে দেয়; CASCADE সন্তানগুলোও মুছে ফেলত, SET NULL এতিম করত, NO ACTION-ও অস্বীকার করে তবে deferral-সক্ষম engine-এ পিছিয়ে যেতে পারে।' },
    },
    {
      id: 'keys-and-constraints-ex3',
      kind: 'fill',
      topic: 'mysql: Keys and Constraints',
      question: { en: 'Write the constraint clause that refuses a negative total on orders.', bn: 'orders-এ ঋণাত্মক total বারণ করার constraint অংশটি লিখুন।' },
      answer: 'CONSTRAINT chk_total CHECK (total >= 0)',
      accept: [
        'CONSTRAINT chk_total CHECK (total >= 0)',
        'CHECK (total >= 0)',
        'check (total >= 0)',
        'constraint chk_total check (total >= 0)',
      ],
      hint: { en: 'Named constraints are easier to read in an error.', bn: 'নাম দিলে error পড়া সহজ।' },
      explanation: { en: 'A named constraint appears in the error text as chk_total, which turns a stack trace into a sentence; the rule itself is total >= 0.', bn: 'নাম দিলে error-এ chk_total দেখা যায়, stack trace এক লাইনের বাক্য হয়; নিয়মটি total >= 0।' },
    },
  ],
  quiz: {
    id: 'keys-and-constraints-quiz',
    title: { en: 'Quiz — Keys and Constraints', bn: 'কুইজ — key আর constraint' },
    questions: [
      {
        id: 'keys-and-constraints-q1',
        kind: 'mcq',
        topic: 'mysql: Keys and Constraints',
        question: { en: 'Which key does an InnoDB secondary index store to reach a row?', bn: 'একটি সারি পড়তে InnoDB-এর secondary index কোন key রাখে?' },
        options: [
          { en: 'A disk offset', bn: 'ডিস্কের offset' },
          { en: 'The primary key value', bn: 'primary key-এর মান' },
          { en: 'A pointer to the .ibd file', bn: '.ibd ফাইলের pointer' },
          { en: 'The row number in the page', bn: 'page-এর সারি নম্বর' },
        ],
        answer: 1,
        hint: { en: 'The row is inside the primary key.', bn: 'সারি primary key-এর ভেতরেই আছে।' },
        explanation: { en: 'Each secondary tree holds index columns plus the row primary key. MySQL must look in two steps: first find the entry, then fetch the clustered row. A wide primary key therefore inflates every secondary index on the table.', bn: 'প্রতিটি secondary index পাতায় index কলাম এবং primary key থাকে। MySQL দুই ধাপে খোঁজে: প্রথমে এন্ট্রি খুঁজে পায়, তারপর মূল সারি নিয়ে আসে। ফলে বড় আকারের primary key টেবিলের অন্যান্য সমস্ত ইনডেক্সকে ভারী করে তোলে।' },
      },
      {
        id: 'keys-and-constraints-q2',
        kind: 'mcq',
        topic: 'mysql: Keys and Constraints',
        question: { en: 'You add FOREIGN KEY on a child column that has no index. What does InnoDB do?', bn: 'child column-এ index না-থাকলে FOREIGN KEY যোগ করলে InnoDB কী করে?' },
        options: [
          { en: 'Refuses the statement', bn: 'বিবৃতি প্রত্যাখ্যান করে' },
          { en: 'Creates the needed index automatically', bn: 'দরকারি index নিজেই বানায়' },
          { en: 'Full-scans the child table on every write forever', bn: 'চিরকাল প্রতি লেখায় child table স্ক্যান করে' },
          { en: 'Moves the check to the parent', bn: 'যাচাই parent-এ সরিয়ে দেয়' },
        ],
        answer: 1,
        hint: { en: 'It cannot leave the check unindexed.', bn: 'যাচাই index ছাড়া রাখতে পারে না।' },
        explanation: { en: 'InnoDB requires an index on the child columns and creates one if absent, then names it after the constraint — a good reason to read SHOW CREATE TABLE after your migrations.', bn: 'InnoDB child column-এ index চায়, না-পেলে নিজে বানায়, constraint-এর নামে নাম দেয় — তাই migration-এর পর SHOW CREATE TABLE পড়া ভালো।' },
      },
      {
        id: 'keys-and-constraints-q3',
        kind: 'mcq',
        topic: 'mysql: Keys and Constraints',
        question: { en: 'Where does AUTO_INCREMENT leave a gap after a rollback?', bn: 'rollback-এর পর AUTO_INCREMENT কোথায় ফাঁক রেখে যায়?' },
        options: [
          { en: 'Never; ids are reused', bn: 'কখনো না; id আবার ব্যবহৃত হয়' },
          {
            en: 'Yes: numbers taken by the rolled-back rows are not given back',
            bn: 'হ্যাঁ: ফিরে-নেওয়া সারির নম্বর ফেরত দেওয়া হয় না',
          },
          { en: 'Only when the table is locked', bn: 'table lock থাকা অবস্থায়' },
          { en: 'Only for INSERT ... SELECT', bn: 'শুধু INSERT ... SELECT-এ' },
        ],
        answer: 1,
        hint: { en: 'The counter is not transactional.', bn: 'গণক transaction-এর মধ্যে পড়ে না।' },
        explanation: { en: 'The counter advances as ids are handed out, so a rolled-back or failed insert burns numbers; ids are keys, not sequence numbers for humans.', bn: 'নম্বর দেওয়ার সময়েই গণক এগোয়, তাই rollback বা ব্যর্থ insert নম্বর পোড়ে; id ক্রমিক সংখ্যা নয়, পরিচয়।' },
      },
      {
        id: 'keys-and-constraints-q4',
        kind: 'mcq',
        topic: 'mysql: Keys and Constraints',
        question: { en: 'Which clause makes deleting a customer also remove their orders?', bn: 'customer মুছলে তার orders-ও মুছে যাবে — কোন অংশটি তা করে?' },
        options: [
          { en: 'ON DELETE CASCADE', bn: 'ON DELETE CASCADE' },
          { en: 'ON UPDATE RESTRICT', bn: 'ON UPDATE RESTRICT' },
          { en: 'ON DELETE SET NULL', bn: 'ON DELETE SET NULL' },
          { en: 'DELETE CASCADE MODE', bn: 'DELETE CASCADE MODE' },
        ],
        answer: 0,
        hint: { en: 'Children follow the parent into the grave.', bn: 'সন্তান parent-এর সাথে যায়।' },
        explanation: { en: 'CASCADE deletes dependent rows; SET NULL would keep the order and clear customer_id, which requires that column to be nullable.', bn: 'CASCADE নির্ভরশীল সারি মুছে দেয়; SET NULL order রেখে customer_id NULL করত, তাহলে সেই column nullable হতে হতো।' },
      },
    ],
  },
  nextLesson: { slug: 'putting-rows-in', tech: 'mysql', title: { en: 'Putting Rows In', bn: 'সারি ঢোকানো' } },
};
