import type { Lesson } from '../../../lib/types';

export const IndexesAndTheBTreeLesson: Lesson = {
  slug: 'indexes-and-the-b-tree',
  tech: 'mysql',
  title: { en: 'Indexes and the B+Tree', bn: 'index আর B+Tree' },
  summary: { en: 'An index is a sorted copy of some columns with the primary key as its payload. That one sentence explains composite order, prefix limits, covering queries, and why writes cost more.', bn: 'index হলো কিছু column-এর সাজানো কপি, যার ভেতরে primary key লেখা থাকে। এই এক লাইনেই বোঝা যায় composite ক্রম, prefix-এর সীমা, covering query, আর লেখা কেন দামি।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Indexes and the B+Tree', bn: 'WHAT — index আর B+Tree' },
    },
    {
      type: 'para',
      text: { en: 'Your product table has 200,000 rows and every page of the site asks for one of them by id. Reading two hundred thousand rows to find one is not a bug in your query; it is what happens when nothing is sorted. An index is the sorted copy that turns that read into three page visits.', bn: 'আপনার product table-এ ২০০,০০০টি সারি, আর site-এর প্রতিটি পাতা সেখান থেকে id দিয়ে ১টি চায়। ১টির জন্য দুই লক্ষ সারি পড়াটা আপনার query-র ভুল নয়; কিছুই সাজানো না-থাকলে যা হয় সেটাই। index হলো সেই সাজানো কপি, যা পড়াটাকে ৩টি পাতা ঘুরে আসায় বদলে দেয়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'InnoDB stores a table as the clustered index: the primary key sorted, rows inside the leaves. A secondary index is the same tree, holding primary keys instead of rows.',
          bn: 'InnoDB table-কেই clustered index হিসেবে রাখে: primary key অনুসারে সাজানো, পাতায় সারি। secondary index সেই একই গাছ, পাতায় সারির বদলে primary key।',
        },
        {
          en: 'A lookup walks three or four pages of 16 KiB to reach a row, so a hundred-million-row table costs the same seek as a thousand-row one — and that is the entire promise.',
          bn: 'এক সারিতে পৌঁছাতে ৩ বা ৪টি ১৬ KiB পাতা হাঁটা হয়, তাই দশ কোটি সারির table-এর খোঁজা হাজার সারির মতোই — পুরো প্রতিশ্রুতিটাই এটা।',
        },
        {
          en: 'Every insert maintains every index, and every random primary key splits pages: index count is read speed bought with write speed and space.',
          bn: 'প্রতি insert প্রতিটি index রক্ষণাবেক্ষণ করে, আর এলোমেলো primary key page split ঘটায়: index-এর সংখ্যা লেখার গতি আর জায়গা দিয়ে কেনা পড়ার গতি।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'indexes.sql',
      code: `ALTER TABLE orders ADD INDEX idx_customer_total (customer_id, total);

-- leftmost prefix rules, in one list:
--   WHERE customer_id = 7                 uses the index
--   WHERE customer_id = 7 AND total > 500 uses both columns
--   WHERE total > 500                      cannot use it
--   ORDER BY customer_id, total            can read it in order

CREATE INDEX idx_title_prefix ON product (title(20));   -- a prefix index
ALTER TABLE product DROP INDEX idx_title_prefix;
SELECT id, total FROM orders WHERE customer_id = 7;    -- covered: no row read
ALTER TABLE tags ALTER INDEX idx_name INVISIBLE;        -- test dropping it
ANALYZE TABLE orders;                                   -- refresh statistics`,
      caption: { en: 'A covering query needs only the index columns, so InnoDB never follows the primary key into the clustered index.', bn: 'covering query-র index-এর column ছাড়া কিছু লাগে না, তাই InnoDB primary key ধরে clustered index-এ যায় না।' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'The tree, physically', bn: 'গাছটি বাস্তবে' },
          text: { en: 'Non-leaf pages hold separator keys and page pointers; leaves hold the keys and, in the clustered index, whole rows. Leaves are linked, which is why a range scan is a walk, not a search.', bn: 'শাখার পাতায় separator key আর page pointer; পাতার পাতায় key, আর clustered index হলে পুরো সারি। পাতাগুলো পরস্পর linked, তাই range scan হাঁটা, খোঁজা নয়।' },
        },
        {
          title: { en: 'Why order matters in a composite key', bn: 'composite key-তে ক্রম কেন দরকারি' },
          text: { en: 'The tree is sorted by the first column, then the second within it. A query that skips the first column meets an unordered sea, so the index cannot narrow anything.', bn: 'প্রথম column অনুসারে গাছ সাজানো, দ্বিতীয়টি তার ভেতরে। প্রথমটি বাদ দিলে গাছ এলোমেলো হয়ে যায়, index কিছুই সরু করতে পারে না।' },
        },
        {
          title: { en: 'Fan-out decides depth', bn: 'গভীরতা ঠিক করে fan-out' },
          text: { en: 'Narrow keys fit more entries per 16 KiB page, so a BIGINT id gives a shallower tree than a UUID string and touches fewer pages per lookup.', bn: 'সরু key-তে ১৬ KiB পাতায় বেশি entry বসে, তাই UUID লেখার বদলে BIGINT id-এ গাছ কম গভীর, খোঁজা-প্রতি কম পাতা।' },
        },
      ],
    },
    {
      type: 'table',
      head: [
        { en: 'index kind', bn: 'index-এর ধরন' },
        { en: 'what it buys', bn: 'কী পাওয়া যায়' },
        { en: 'what it costs', bn: 'খরচ কী' },
      ],
      rows: [
        [
          { en: 'PRIMARY KEY (clustered)', bn: 'PRIMARY KEY (clustered)' },
          { en: 'row storage itself, ordered by key', bn: 'সারি রাখার পদ্ধতিই, key অনুসারে সাজানো' },
          { en: 'random keys split pages', bn: 'এলোমেলো key হলে page split' },
        ],
        [
          { en: 'UNIQUE', bn: 'UNIQUE' },
          { en: 'a rule plus a fast exact lookup', bn: 'নিয়ম + দ্রুত হুবহু খোঁজা' },
          {
            en: 'one extra tree per write; gap locks on range checks',
            bn: 'প্রতি লেখায় এক অতিরিক্ত গাছ; range যাচাইয়ে gap lock',
          },
        ],
        [
          { en: 'composite', bn: 'composite' },
          { en: 'filters and orderings sharing one tree', bn: 'একই গাছে ছাঁকা আর সাজানো' },
          { en: 'only for prefixes starting at column one', bn: 'শুধু প্রথম column থেকে শুরু হলে' },
        ],
        [
          { en: 'prefix (col(n))', bn: 'prefix (col(n))' },
          { en: 'makes long text indexable at all', bn: 'লম্বা লেখাকে index-যোগ্য করে' },
          { en: 'not covering; must read rows to test the tail', bn: 'covering নয়; শেষ অংশের জন্য সারি পড়তে হয়' },
        ],
        [
          { en: 'FULLTEXT', bn: 'FULLTEXT' },
          { en: 'word search with ranking over big text', bn: 'বড় লেখায় শব্দ-খোঁজা, র‍্যাঙ্কসহ' },
          {
            en: 'a separate inverted index to maintain, its own stop lists',
            bn: 'আলাদা inverted index রক্ষণাবেক্ষণ, নিজস্ব stop list',
          },
        ],
        [
          { en: 'INVISIBLE', bn: 'INVISIBLE' },
          { en: 'the optimizer ignores it while it keeps being updated', bn: 'optimizer এড়ায়, অথচ index রক্ষিত হয়' },
          {
            en: 'still pays write cost; perfect for a safe drop test',
            bn: 'লেখার খরচ তবু; নিরাপদে বাদ-দেয়ার পরীক্ষার জন্য দারুণ',
          },
        ],
      ],
      caption: { en: 'Prefix indexes carry the same bytes of statistics, so cardinality estimates stay rough: SHOW INDEX gives you Cardiology-style numbers, read them as hints.', bn: 'prefix index-এর statisticsও আনুমানিক, তাই cardinality প্রায় ধারণা মাত্র: SHOW INDEX-এর সংখ্যা হিন্ট হিসেবে পড়ুন।' },
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
          title: { en: '1. Start from the predicate', bn: '১. predicate থেকে শুরু' },
          text: { en: 'The columns named in WHERE and ON, in the order the query filters them, become the key.', bn: 'WHERE ও ON-এ যা column, query যে ক্রমে ছাঁটে সেই ক্রমেই সেগুলো key হয়।' },
        },
        {
          title: { en: '2. Let equality lead, range last', bn: '২. সমতা আগে, range শেষে' },
          text: { en: 'WHERE a = ? AND b > ? wants (a, b): a pins a subtree, b ranges inside it. (b, a) cannot.', bn: 'WHERE a = ? AND b > ? চায় (a, b): a একটা উপবৃক্ষ ঠিক করে, b তার ভেতরে range। (b, a) তা পারে না।' },
        },
        {
          title: { en: '3. Cover if you can', bn: '৩. পারলে covering করুন' },
          text: { en: 'Add the few columns the query outputs to the index, and the row read disappears.', bn: 'query যা ফেরত দেয় সেই কয়েকটি column index-এ যোগ করলে সারি পড়াটাই উঠে যায়।' },
        },
        {
          title: { en: '4. Measure, then keep', bn: '৪. মেপে তারপর রাখুন' },
          text: { en: 'EXPLAIN before and after, then drop what is unused — every index taxes writes and the buffer pool.', bn: 'আগে-পরে EXPLAIN দেখুন, অপ্রয়োজন ফেলে দিন — প্রতিটি index লেখা আর buffer pool দুটোতেই চাপ দেয়।' },
        },
      ],
    },
    { type: 'visual', id: 'database' },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Indexes are ordered copies of your data: they answer queries faster and never answer wrong — but every copy has to be written, and writes are where an index bill arrives.', bn: 'index হলো আপনার তথ্যের সাজানো কপি: প্রশ্নের জবাব দ্রুত দেয়, ভুল জবাব দেয় না — কিন্তু প্রতিটি কপি আলাদা করে লিখতে হয়, বিল আসে লেখার সময়েই।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'One index per column out of politeness', bn: 'প্রতি column-এর উপর ভদ্রতায় একটা করে index' },
      text: { en: 'MySQL then picks one index per table per access path and must intersect, so ten single-column indexes can be slower than one composite written for the query — and ten times the write cost.', bn: 'এক access path-এ table-প্রতি একটি index বেছে নেওয়া হয়, তারপর ছেদ করাতে হয়; তাই দশটি একক-column index বদলে query-র জন্য লেখা একটি composite দ্রুত হতে পারে, খরচে দশ ভাগে এক।' },
    },
  ],
  exercises: [
    {
      id: 'indexes-and-the-b-tree-ex1',
      kind: 'mcq',
      topic: 'mysql: Indexes and the B+Tree',
      question: { en: 'The query filters status = ? and orders by created_at DESC. Which index fits best?', bn: 'query status = ? দিয়ে ছাঁটে, created_at DESC দিয়ে সাজায়। কোন index সবচেয়ে মানানসই?' },
      options: [
        { en: '(created_at)', bn: '(created_at)' },
        { en: '(status, created_at)', bn: '(status, created_at)' },
        { en: '(created_at, status)', bn: '(created_at, status)' },
        { en: 'two indexes, one per column', bn: 'দুটি index, column প্রতি একটি' },
      ],
      answer: 1,
      hint: { en: 'Equality first, then the sorted column.', bn: 'আগে সমতা, তারপর যেটিতে ক্রম চান।' },
      explanation: { en: 'With (status, created_at) the engine seeks to status and reads the leaves already in date order, so no filesort; the reverse order cannot do that because created_at is not sorted inside status.', bn: '(status, created_at) দিলে status-এ seek করে পাতাগুলো তারিখের ক্রমেই পড়ে, filesort লাগে না; উল্টো ক্রমে created_at status-এর ভেতরে সাজানো নয়, তাই পারে না।' },
    },
    {
      id: 'indexes-and-the-b-tree-ex2',
      kind: 'predict',
      topic: 'mysql: Indexes and the B+Tree',
      question: { en: 'Which EXPLAIN value proves the row never has to be read from the table?', bn: 'কোন EXPLAIN মান প্রমাণ করে সারি table থেকে পড়তেই হয়নি?' },
      code: `SELECT customer_id, total FROM orders WHERE customer_id = 7;
-- index: (customer_id, total)`,
      answer: 'Using index',
      accept: [
        'Using index',
        'using index',
        'Extra: Using index',
        'Using index (covering)',
      ],
      hint: { en: 'It appears in Extra, and means covered.', bn: 'Extra-য় দেখা যায়, অর্থ covering।' },
      explanation: { en: '“Using index” in Extra means the index alone answered the query — a covering scan. It is different from “Using index condition”, which is pushed-down filtering that still reads rows.', bn: 'Extra-র “Using index” মানে শুধু index-ই উত্তর দিয়েছে — covering scan। “Using index condition” আলাদা জিনিস: সেটি push-down করা ছাঁকা, সারি তবু পড়া হয়।' },
    },
    {
      id: 'indexes-and-the-b-tree-ex3',
      kind: 'mcq',
      topic: 'mysql: Indexes and the B+Tree',
      question: { en: 'You add an index and the query gets slower. What is the most likely reason?', bn: 'index যোগ করার পর query আরও ধীর হলো। সবচেয়ে সম্ভাব্য কারণ?' },
      options: [
        {
          en: 'Indexes cannot speed up small tables and only cost',
          bn: 'ছোট table-এ index গতি বাড়ায় না, খরচেই থাকে',
        },
        {
          en: 'The optimizer chose the new index for a range it cannot narrow well, and the statistics were stale',
          bn: 'optimizer নতুন index এমন range-এ বেছে নিল যা ভালো সরু হয় না, আর statistics পুরোনো ছিল',
        },
        { en: 'The buffer pool is disabled by new indexes', bn: 'নতুন index buffer pool নিষ্ক্রিয় করে দেয়' },
        { en: 'Every index is read twice per query', bn: 'প্রতি query-তে প্রতিটি index দুবার পড়া হয়' },
      ],
      answer: 1,
      hint: { en: 'ANALYZE TABLE before anything else.', bn: 'সবার আগে ANALYZE TABLE।' },
      explanation: { en: 'A bad choice is usually a cost misestimate: run ANALYZE TABLE, compare EXPLAIN rows with the truth, and consider a hint only after that.', bn: 'খারাপ বাছাই প্রায়ই ভুল খরচ-আনুমানিকতার ফল: ANALYZE TABLE চালান, EXPLAIN-এর rows বাস্তবের সাথে মিলান, তারপরও লাগলে hint।' },
    },
  ],
  quiz: {
    id: 'indexes-and-the-b-tree-quiz',
    title: { en: 'Quiz — Indexes and the B+Tree', bn: 'কুইজ — index আর B+Tree' },
    questions: [
      {
        id: 'indexes-and-the-b-tree-q1',
        kind: 'mcq',
        topic: 'mysql: Indexes and the B+Tree',
        question: { en: 'Why does a UUID primary key hurt InnoDB more than an AUTO_INCREMENT one?', bn: 'InnoDB-এ AUTO_INCREMENT primary key-এর চেয়ে UUID key বেশি ক্ষতি করে — কেন?' },
        options: [
          { en: 'UUIDs cannot be sorted', bn: 'UUID সাজানো যায় না' },
          {
            en: 'Random keys insert into every page, splitting them and scattering the working set',
            bn: 'এলোমেলো key প্রতি পাতায় ঢোকে, split ঘটায়, কাজের জায়গা ছড়িয়ে দেয়',
          },
          { en: 'UUIDs are stored outside the row', bn: 'UUID সারির বাইরে থাকে' },
          { en: 'They disable the change buffer', bn: 'change buffer বন্ধ করে দেয়' },
        ],
        answer: 1,
        hint: { en: 'Think about where page 5000 writes land.', bn: '৫০০০ নম্বর পাতায় লেখা কোথায় পড়ে ভাবুন।' },
        explanation: { en: 'An increasing key appends to the last page, hot and cache-friendly; a random key inserts everywhere, so pages split, the buffer pool churns, and every secondary index pays the same scattering with its 16-byte payload.', bn: 'ক্রমবর্ধমান key শেষ পাতায় বসে, গরম আর cache-বান্ধব; এলোমেলো key সব জায়গায় ঢোকে, পাতা split হয়, buffer pool ঘোরে, আর প্রতি secondary index-এ ১৬ byte এর payload নিয়ে সেই ছড়ানো খরচ।' },
      },
      {
        id: 'indexes-and-the-b-tree-q2',
        kind: 'mcq',
        topic: 'mysql: Indexes and the B+Tree',
        question: { en: 'What does a “prefix index” mean?', bn: '“prefix index” মানে কী?' },
        options: [
          { en: 'An index of the first n characters of a column', bn: 'একটি column-এর প্রথম n অক্ষরের index' },
          { en: 'An index built only on primary keys', bn: 'শুধু primary key-তে বানানো index' },
          { en: 'An index used only for LIKE', bn: 'শুধু LIKE-এর জন্য লাগে এমন index' },
          { en: 'The first index created on a table', bn: 'table-এ প্রথম বানানো index' },
        ],
        answer: 0,
        hint: { en: 'It is how you index a long text at all.', bn: 'লম্বা লেখা index করার একমাত্র উপায়।' },
        explanation: { en: 'CREATE INDEX i ON t (col(20)) stores twenty characters per key; it narrows the search, then must read the row to confirm the rest, so it is never covering.', bn: 'CREATE INDEX i ON t (col(20)) প্রতি key-তে বিশটি অক্ষর রাখে; খোঁজা সরু হয়, কিন্তু বাকিটা নিশ্চিত করতে সারি পড়তেই হয়, তাই কখনো covering নয়।' },
      },
      {
        id: 'indexes-and-the-b-tree-q3',
        kind: 'mcq',
        topic: 'mysql: Indexes and the B+Tree',
        question: { en: 'Which command lets you test removing an index without dropping it?', bn: 'index ফেলে না-দিয়ে বাদ-দেয়ার পরীক্ষা কোন কমান্ডে করা যায়?' },
        options: [
          { en: 'ALTER TABLE t ALTER INDEX i INVISIBLE', bn: 'ALTER TABLE t ALTER INDEX i INVISIBLE' },
          { en: 'SET GLOBAL use_indexes = OFF', bn: 'SET GLOBAL use_indexes = OFF' },
          { en: 'DROP INDEX i SOFT', bn: 'DROP INDEX i SOFT' },
          { en: 'ANALYZE TABLE t SKIP INDEX i', bn: 'ANALYZE TABLE t SKIP INDEX i' },
        ],
        answer: 0,
        hint: { en: '8.0 feature; the index keeps being maintained.', bn: '৮.০ ফিচার; index রক্ষিত হতেই থাকে।' },
        explanation: { en: 'An invisible index is ignored by the optimizer but still updated on write, so a bad surprise is one ALTER away from being reverted.', bn: 'invisible index optimizer এড়ায়, লেখায় তবু রক্ষা হয়; তাই বিপদ হলে এক ALTER-এ ফিরিয়ে আনা যায়।' },
      },
      {
        id: 'indexes-and-the-b-tree-q4',
        kind: 'mcq',
        topic: 'mysql: Indexes and the B+Tree',
        question: { en: 'Where are the rows themselves kept, for InnoDB?', bn: 'InnoDB-তে সারিগুলো আসলে থাকে কোথায়?' },
        options: [
          { en: 'In a heap file, appended and unsorted', bn: 'heap ফাইলে, শেষে যোগ, অসাজানো' },
          {
            en: 'In the leaf pages of the clustered index, ordered by primary key',
            bn: 'clustered index-এর পাতার পাতায়, primary key অনুসারে সাজানো',
          },
          { en: 'In the secondary indexes, duplicated', bn: 'secondary index-এ, নকল করে' },
          { en: 'In the redo log until checkpoint', bn: 'checkpoint পর্যন্ত redo log-এ' },
        ],
        answer: 1,
        hint: { en: 'The table is the index.', bn: 'table-টাই index।' },
        explanation: { en: 'InnoDB is a clustered store: the primary key tree holds the rows; a table with no primary key gets the hidden GEN_CLUST_INDEX instead.', bn: 'InnoDB clustered store: primary key-এর গাছেই সারি; primary key না-থাকলে গোপন GEN_CLUST_INDEX সেটি বহন করে।' },
      },
    ],
  },
  nextLesson: {
    slug: 'reading-the-plan',
    tech: 'mysql',
    title: { en: 'Reading the Plan: EXPLAIN', bn: 'পরিকল্পনা পড়া: EXPLAIN' },
  },
};
