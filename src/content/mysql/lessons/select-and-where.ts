import type { Lesson } from '../../../lib/types';

export const SelectAndWhereLesson: Lesson = {
  slug: 'select-and-where',
  tech: 'mysql',
  title: { en: 'Selecting Rows: WHERE, LIKE, LIMIT', bn: 'সারি বাছা: WHERE, LIKE, LIMIT' },
  summary: { en: 'A SELECT is a filter, then a projection, then a limit. Master the three-valued logic of NULL, the difference between LIKE and =, and what LIMIT really costs.', bn: 'SELECT হলো আগে ছাঁকনি, তারপর কোন column তা ঠিক করা, শেষে সীমা। NULL-এর ত্রি-মানবিশিষ্ট যুক্তি, LIKE আর =-এর তফাত, আর LIMIT-এর আসল খরচ — এই তিনটিই শিখে ফেলুন।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Selecting Rows: WHERE, LIKE, LIMIT', bn: 'WHAT — সারি বাছা: WHERE, LIKE, LIMIT' },
    },
    {
      type: 'para',
      text: { en: 'A table full of rows is not yet an answer. Someone asks: which products cost more than 100 and are still active? That question has three parts — which columns, from which table, under which condition — and SQL writes those three parts as one sentence. Getting the condition right is the whole skill.', bn: 'সারি ভরা table এখনও উত্তর নয়। কেউ জিজ্ঞেস করল: কোন product গুলোর দাম ১০০ এর বেশি আর এখনও চালু? প্রশ্নটির তিন অংশ — কোন column গুলো, কোন table থেকে, কোন শর্তে — আর SQL সেগুলো এক বাক্যে লেখে। ঠিক শর্তটি লেখাই এখানে পুরো দক্ষতা।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Comparing anything with NULL yields UNKNOWN, not FALSE, so WHERE col = NULL matches nothing and NOT (col = NULL) matches nothing either.',
          bn: 'যেকোনো কিছুর সাথে NULL তুলনা ফল দেয় UNKNOWN, FALSE নয়; তাই WHERE col = NULL কোনো সারি ধরে না, NOT (col = NULL)-ও না।',
        },
        {
          en: 'A leading wildcard defeats a B-tree index: LIKE \'%word%\' must look at every row, which is why fulltext indexes or ngram parsers exist.',
          bn: 'শুরুতে wildcard থাকলে B-tree index কাজে লাগে না: LIKE \'%word%\' প্রতিটি সারি দেখে, এজন্যই fulltext index বা ngram parser থাকে।',
        },
        {
          en: 'LIMIT n is cheap when the rows are already in the order you want; LIMIT m, n still walks m rows to find the cut, so deep pages cost deep work.',
          bn: 'সারি ইতিমধ্যে চাওয়া ক্রমে থাকলে LIMIT n সস্তা; কিন্তু LIMIT m, n সেই ছেড়া জায়গা খুঁজতে m সারি হাঁটে, তাই গভীর পাতা গভীর খরচ নেয়।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'queries.sql',
      code: `SELECT id, title, price            -- projection
  FROM product
 WHERE price BETWEEN 100 AND 200    -- inclusive on both ends
   AND active = 1
   AND title LIKE 'Ja%' ESCAPE '!'  -- prefix: index-friendly
   AND notes IS NULL                -- not = NULL
 ORDER BY price DESC, id
 LIMIT 20 OFFSET 0;

SELECT COUNT(*) AS n_rows FROM product WHERE stock IS NULL;
SELECT id, stock <=> NULL AS is_null_flag FROM product LIMIT 1; -- <=> treats NULL as equal`,
      caption: { en: 'The order MySQL evaluates is FROM, WHERE, projection, ORDER BY, LIMIT — writing it in that order keeps the query honest.', bn: 'MySQL যে ক্রমে চালায়: FROM, WHERE, projection, ORDER BY, LIMIT — এই ক্রমেই লিখলে query সোজা থাকে।' },
    },
    {
      type: 'table',
      head: [
        { en: 'predicate', bn: 'predicate' },
        { en: 'matches', bn: 'কী মেলে' },
        { en: 'index use', bn: 'index-এর ব্যবহার' },
      ],
      rows: [
        [
          { en: 'col = 5', bn: 'col = 5' },
          { en: 'exact value', bn: 'হুবহু মান' },
          { en: 'range seek on an index of col', bn: 'col-এর index-এ range seek' },
        ],
        [
          { en: 'col IN (1,2,3)', bn: 'col IN (1,2,3)' },
          { en: 'any of a list', bn: 'তালিকার যেকোনোটি' },
          { en: 'one seek per value, sorted', bn: 'মান প্রতি এক seek, সাজানো' },
        ],
        [
          { en: 'col BETWEEN 1 AND 9', bn: 'col BETWEEN 1 AND 9 — দুই প্রান্তসহ' },
          { en: 'closed interval', bn: 'দুই প্রান্তসহ' },
          { en: 'a single range scan', bn: 'একটি range scan' },
        ],
        [
          { en: 'col LIKE \'ab%\'', bn: 'col LIKE \'ab%\'' },
          { en: 'prefix, case by collation', bn: 'উপসর্গ; বড়-ছোট হাত collation মানে' },
          { en: 'a range: >= \'ab\' AND < \'ac\'', bn: 'একটি range: >= \'ab\' AND < \'ac\'' },
        ],
        [
          { en: 'col LIKE \'%ab%\'', bn: 'col LIKE \'%ab%\'' },
          { en: 'substring', bn: 'মাঝের লেখা' },
          { en: 'none: full scan', bn: 'না: full scan' },
        ],
        [
          { en: 'col IS NULL', bn: 'col IS NULL' },
          { en: 'missing only', bn: 'শুধু না-থাকা' },
          { en: 'index on col can be used', bn: 'col-এর index লাগে' },
        ],
        [
          { en: 'col <=> NULL', bn: 'col <=> NULL' },
          { en: 'NULL-safe equality', bn: 'NULL-নিরাপদ সমতা' },
          { en: 'seldom index-friendly', bn: 'সাধারণত index-বান্ধব নয়' },
        ],
      ],
      caption: { en: 'The right-hand side being a literal matters: a column on the other side turns the test into a join.', bn: 'ডান পাশে literal থাকাটা দরকারি: ওদিকে column থাকলে পরীক্ষাটি join হয়ে যায়।' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Three-valued logic in one example', bn: 'এক উদাহরণে তিন মান যুক্তি' },
      text: { en: 'With values (1, 2, NULL), WHERE price <> 2 leaves one row, not two: the NULL row is UNKNOWN, so it is dropped. COUNT(*) counts it, COUNT(price) does not. That asymmetry is the source of half the “my total is wrong” tickets.', bn: '(1, 2, NULL) মান নিয়ে WHERE price <> 2 ১টি সারি রাখে, ২টি নয়: NULL-এর সারি UNKNOWN, তাই ফেলে দেয়। COUNT(*) সেটিকে গনে, COUNT(price) গনে না। “যোগফল ভুল” টিকিটের অর্ধেকের কারণ এই অসামঞ্জস্যই।' },
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
          title: { en: '1. Filter first', bn: '১. আগে ছাঁকুন' },
          text: { en: 'WHERE on indexed columns, written so the column stands alone on one side of the operator.', bn: 'index-ওয়ালা column-এ WHERE, এমনভাবে লিখুন যাতে operator-এর এক পাশে শুধু column থাকে।' },
        },
        {
          title: { en: '2. Handle missing values on purpose', bn: '২. না-থাকাটা মেনে নিন' },
          text: { en: 'IS NULL, COALESCE(col, default) and IFNULL; never = NULL and never a bare NOT IN with nullable columns.', bn: 'IS NULL, COALESCE(col, default), IFNULL; = NULL কখনো নয়, আর nullable column-এ NOT INও নয়।' },
        },
        {
          title: { en: '3. Order, then limit', bn: '৩. সাজিয়ে তারপর সীমিত করুন' },
          text: { en: 'ORDER BY a, b LIMIT 20 gives a stable page; without ORDER BY the page contents may change run to run.', bn: 'ORDER BY a, b LIMIT 20 স্থির পাতা দেয়; ORDER BY না-থাকলে পাতার বিষয়বস্তু প্রতিবার বদলাতে পারে।' },
        },
        {
          title: { en: '4. Return only what the screen needs', bn: '৪. পর্দার দরকারটুকু ফেরত দিন' },
          text: { en: 'A named list of columns, not SELECT *, so an added column cannot break the application or the index.', bn: 'নাম-দেওয়া column তালিকা, SELECT * নয় — নতুন column যোগ করলেই app বা index ভাঙবে না।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Selecting Rows: WHERE, LIKE, LIMIT: the moving parts', bn: 'সারি বাছা: WHERE, LIKE, LIMIT: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Selecting Rows: WHERE, LIKE, LIMIT">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Filter first</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">WHERE on indexed columns, written so the</text>
<text x="352" y="79" font-size="11" fill="currentColor">column stands alone on one side of the operat…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Handle missing values on purpose</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">IS NULL, COALESCE(col, default) and IFNULL;</text>
<text x="352" y="151" font-size="11" fill="currentColor">never = NULL and never a bare NOT IN with nul…</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Order, then limit</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">ORDER BY a, b LIMIT 20 gives a stable page;</text>
<text x="352" y="223" font-size="11" fill="currentColor">without ORDER BY the page contents may change…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Return only what the screen needs</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">A named list of columns, not SELECT *, so an</text>
<text x="352" y="295" font-size="11" fill="currentColor">added column cannot break the application or …</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">NOT IN (subquery) with a NULL anywhere in the subquery returns nothing at all — prefer NOT EXIS…</text>
</svg>`,
      caption: { en: 'NOT IN (subquery) with a NULL anywhere in the subquery returns nothing at all — prefer NOT EXISTS, which answers the question you meant.', bn: 'NOT IN (subquery)-এর ভেতরে একটিও NULL থাকলে ফল মোটেই আসে না — NOT EXISTS ব্যবহার করুন, সেটি আসল প্রশ্নের জবাব দেয়।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'NOT IN (subquery) with a NULL anywhere in the subquery returns nothing at all — prefer NOT EXISTS, which answers the question you meant.', bn: 'NOT IN (subquery)-এর ভেতরে একটিও NULL থাকলে ফল মোটেই আসে না — NOT EXISTS ব্যবহার করুন, সেটি আসল প্রশ্নের জবাব দেয়।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'A function around the column', bn: 'column-এর চারদিকে function' },
      text: { en: 'WHERE DATE(created_at) = CURDATE() cannot use an index on created_at; WHERE created_at >= TODAY AND created_at < TOMORROW can, and says the same thing.', bn: 'WHERE DATE(created_at) = CURDATE() created_at-এর index নিতে পারে না; WHERE created_at >= আজ AND created_at < আগামীকাল পারে, অর্থও একই।' },
    },
  ],
  exercises: [
    {
      id: 'select-and-where-ex1',
      kind: 'mcq',
      topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
      question: { en: 'Which predicate finds products whose title contains “jam” anywhere, and is the cheapest correct option on a big table?', bn: 'যেকোনো জায়গায় “jam” থাকা title খোঁজা predicate কোনটি, আর বড় table-এ সস্তা সঠিকটি?' },
      options: [
        { en: 'title LIKE \'%jam%\'', bn: 'title LIKE \'%jam%\'' },
        {
          en: 'MATCH(title) AGAINST (\'jam\' IN BOOLEAN MODE) with a fulltext index',
          bn: 'fulltext index নিয়ে MATCH(title) AGAINST (\'jam\' IN BOOLEAN MODE)',
        },
        { en: 'title = \'jam\'', bn: 'title = \'jam\'' },
        { en: 'REGEXP \'jam|Jam\' on the filtered set', bn: 'ছাঁকা সেটে REGEXP \'jam|Jam\'' },
      ],
      answer: 1,
      hint: { en: 'A substring scan is a scan; fulltext is an index.', bn: 'লেখার টুকরো খোঁজা মূলত স্ক্যান; fulltext হলো index।' },
      explanation: { en: 'LIKE with a leading wildcard must test every row, while a FULLTEXT index already holds the words, ranked; REGEXP is also row-by-row.', bn: 'শুরুতে wildcard থাকা LIKE প্রতিটি সারি দেখে, আর FULLTEXT index-এ শব্দ আগেই সাজানো; REGEXP-ও সারি-প্রতি চলে।' },
    },
    {
      id: 'select-and-where-ex2',
      kind: 'predict',
      topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
      question: { en: 'How many rows does this return? (values: 10, NULL, 30)', bn: 'এটি কয়টি সারি ফেরত দেয়? (মান: ১০, NULL, ৩০)' },
      code: `SELECT * FROM t
WHERE price <> 10;`,
      answer: '1',
      accept: [
        '1',
        'one',
        'one row',
        '১',
        '১টি',
      ],
      hint: { en: 'UNKNOWN is not TRUE.', bn: 'UNKNOWN মানে TRUE নয়।' },
      explanation: { en: '30 qualifies; 10 is FALSE; NULL is UNKNOWN and is filtered out. So one row.', bn: '৩০ বসবে, ১০ FALSE, NULL UNKNOWN — ছাঁকনিতেই বাদ। তাই ১টি সারি।' },
    },
    {
      id: 'select-and-where-ex3',
      kind: 'mcq',
      topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
      question: { en: 'What does LIMIT 1000000, 20 do?', bn: 'LIMIT 1000000, 20 আসলে কী করে?' },
      options: [
        { en: 'Seeks straight to the millionth row', bn: 'সোজা দশ-লক্ষতম সারিতে যায়' },
        {
          en: 'Produces a million and twenty rows and throws away the first million',
          bn: 'দশ লক্ষ আটাশটি সারি বানিয়ে প্রথম দশ লক্ষ ফেলে দেয়',
        },
        { en: 'Refuses because the offset is too large', bn: 'offset বড় বলে অস্বীকার করে' },
        { en: 'Reads only twenty rows', bn: 'শুধু বিশটি সারি পড়ে' },
      ],
      answer: 1,
      hint: { en: 'OFFSET is work, not a bookmark.', bn: 'OFFSET কাজ, বুকমার্ক নয়।' },
      explanation: { en: 'The executor cannot know the cut position without generating the skipped rows, so it does the full work and discards it; keyset pagination (WHERE id > last ORDER BY id LIMIT 20) does not.', bn: 'ছেড়া জায়গা জানতে এড়ানো সারিগুলো বানাতেই হয়, তাই পুরো কাজ করে ফেলে দেওয়া হয়; keyset pagination (WHERE id > শেষ ORDER BY id LIMIT 20) তা করে না।' },
    },
  ],
  quiz: {
    id: 'select-and-where-quiz',
    title: { en: 'Quiz — Selecting Rows: WHERE, LIKE, LIMIT', bn: 'কুইজ — সারি বাছা: WHERE, LIKE, LIMIT' },
    questions: [
      {
        id: 'select-and-where-q1',
        kind: 'mcq',
        topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
        question: { en: 'Which comparison is NULL-safe?', bn: 'কোন তুলনাটি NULL-নিরাপদ?' },
        options: [
          { en: '=', bn: '=' },
          { en: '<=>', bn: '<=>' },
          { en: 'IN', bn: 'IN' },
          { en: 'LIKE', bn: 'LIKE' },
        ],
        answer: 1,
        hint: { en: 'One operator returns TRUE for NULL against NULL.', bn: 'যে operator NULL বনাম NULL-এ TRUE দেয়।' },
        explanation: { en: '<=> is the NULL-safe equality operator: NULL <=> NULL is TRUE, 1 <=> NULL is FALSE. = yields UNKNOWN in both cases.', bn: '<=> হলো NULL-নিরাপদ সমতা: NULL <=> NULL TRUE, 1 <=> NULL FALSE। = দুটিতেই UNKNOWN দেয়।' },
      },
      {
        id: 'select-and-where-q2',
        kind: 'mcq',
        topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
        question: { en: 'BETWEEN 5 AND 9 includes which values?', bn: 'BETWEEN ৫ AND ৯ কোন মানগুলো নেয়?' },
        options: [
          { en: '5 through 8', bn: '৫ থেকে ৮' },
          { en: '5 through 9, both ends', bn: '৫ থেকে ৯, দুই প্রান্তসহ' },
          { en: '6 through 9', bn: '৬ থেকে ৯' },
          { en: 'only 5 and 9', bn: 'শুধু ৫ আর ৯' },
        ],
        answer: 1,
        hint: { en: 'Inclusive at both sides.', bn: 'দুই পাশেই অন্তর্ভুক্ত।' },
        explanation: { en: 'BETWEEN is inclusive; for exclusive upper bounds write < 9 rather than BETWEEN ... AND 8 when the type is continuous.', bn: 'BETWEEN দুই প্রান্তই নেয়; ধারাবাহিক type-এ ঊর্ধ্বসীমা বাদ দিতে < 9 লিখুন, AND 8 নয়।' },
      },
      {
        id: 'select-and-where-q3',
        kind: 'mcq',
        topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
        question: { en: 'Why does SELECT * hurt a query plan as often as it helps?', bn: 'SELECT * কতবারই বা plan-এ ক্ষতি করে?' },
        options: [
          { en: 'It disables the query cache', bn: 'query cache বন্ধ করে দেয়' },
          {
            en: 'It reads columns the client will not use and blocks covering-index plans',
            bn: 'যে column client ব্যবহার করবে না তাও পড়ে, আর covering index-এর পথ বন্ধ করে',
          },
          { en: 'It cannot be used with LIMIT', bn: 'LIMIT-এর সাথে চলে না' },
          { en: 'It locks the whole table', bn: 'পুরো table lock করে' },
        ],
        answer: 1,
        hint: { en: 'An index that has every column you asked for is a gift.', bn: 'যে index-এ চাওয়া সব column আছে, সেটি উপহার।' },
        explanation: { en: 'If the index alone answers the query MySQL never touches the clustered index; SELECT * asks for every column, so the row must be read; and a widened schema silently changes what your code receives.', bn: 'শুধু index-ই উত্তর দিতে পারলে MySQL clustered index ছোঁয় না; SELECT * সব column চায় বলে সারি পড়তেই হয়; আর স্কিম চওড়া হলে code কী পায় তা চুপচাপ বদলায়।' },
      },
      {
        id: 'select-and-where-q4',
        kind: 'mcq',
        topic: 'mysql: Selecting Rows: WHERE, LIKE, LIMIT',
        question: { en: 'Which predicate is written so an index on created_at can be used?', bn: 'created_at-এর index যেন লাগে, এমন predicate কোনটি?' },
        options: [
          { en: 'YEAR(created_at) = 2026', bn: 'YEAR(created_at) = 2026' },
          {
            en: 'created_at >= \'2026-09-01\' AND created_at < \'2026-10-01\'',
            bn: 'created_at >= \'2026-09-01\' AND created_at < \'2026-10-01\'',
          },
          { en: 'created_at + INTERVAL 1 DAY = NOW()', bn: 'created_at + INTERVAL 1 DAY = NOW()' },
          { en: 'DATE_FORMAT(created_at, \'%Y\') = 2026', bn: 'DATE_FORMAT(created_at, \'%Y\') = 2026' },
        ],
        answer: 1,
        hint: { en: 'The column must stand alone.', bn: 'column একা দাঁড়িয়ে থাকবে।' },
        explanation: { en: 'A half-open range on the bare column is a range scan; every function around the column turns the same question into a scan of the table.', bn: 'খালি column-এ অর্ধ-খোলা range মানে range scan; চারপাশে function বসালে সেই প্রশ্নই table স্ক্যান হয়ে যায়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'sorting-grouping-and-aggregates',
    tech: 'mysql',
    title: { en: 'Sorting, Grouping, Aggregates', bn: 'sort, group আর aggregate' },
  },
};
