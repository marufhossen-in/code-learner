import type { Lesson } from '../../../lib/types';

export const JoiningTablesLesson: Lesson = {
  slug: 'joining-tables',
  tech: 'mysql',
  title: { en: 'Joining Tables', bn: 'টেবিল জোড়া দেয়া' },
  summary: { en: 'INNER, LEFT, RIGHT and CROSS are four answers to four questions. See what each does with a missing match, why the optimizer picks the driving table, and how an anti-join is written.', bn: 'INNER, LEFT, RIGHT আর CROSS চার প্রশ্নের চার জবাব। মিল না-মিললে প্রতিটি কী করে, optimizer চালানোর table কোনটি বাছে কেন, আর anti-join কীভাবে লেখেন — এই পাঠেই।' },
  minutes: 11,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Joining Tables', bn: 'WHAT — টেবিল জোড়া দেয়া' },
    },
    {
      type: 'para',
      text: { en: 'Your data is split on purpose: customers in one table, their orders in another, because an email address should not be copied twenty times. The price of that tidiness is that any question about a customer and their orders now spans two tables. A join is how you ask the question anyway, in one statement.', bn: 'আপনার তথ্য ইচ্ছে করেই ভাগ করা: customer ১টি table-এ, তাদের orders আরেকটিতে — কারণ একটি email বিশবার কপি করা উচিত নয়। এই পরিচ্ছন্নতার দাম এই যে customer আর তাঁর অর্ডার নিয়ে যেকোনো প্রশ্ন এখন ২টি table ছুঁয়েছে। সেই প্রশ্ন ১টি বিবৃতিতে করার নামই join।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'A join is a filter that reads another table: INNER keeps pairs that match, LEFT keeps the left row and NULLs the right side when there is no pair.',
          bn: 'join মানে আরেকটি table পড়ে ছাঁকনি: INNER জোড়া মেলে এমনটা রাখে, LEFT বাঁয়ের সারি রাখে আর মিল না-থাকলে ডানের দিকটি NULL দেয়।',
        },
        {
          en: 'MySQL does not always join in the order you wrote: it picks the driving table by cost, so EXPLAIN, not intuition, tells you which side is scanned and which is probed by index.',
          bn: 'MySQL সবসময় লেখার ক্রমে join করে না: খরচ দেখে চালক table বেছে নেয়, তাই সহজাত বোধ নয়, EXPLAIN বলে কোন দিক স্ক্যান হচ্ছে আর কোনটি index দিয়ে হানা দিচ্ছে।',
        },
        {
          en: 'A LEFT JOIN with the filter on the right table in WHERE silently becomes an INNER JOIN; the predicate belongs in ON.',
          bn: 'LEFT JOIN-এ ডান table-এর শর্ত WHERE-য় বসালেই সেটি চুপচাপ INNER JOIN হয়ে যায়; শর্ত বসবে ON-এ।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'joins.sql',
      code: `SELECT c.id, c.email, COUNT(o.id) AS orders
  FROM customer c
  LEFT JOIN orders o ON o.customer_id = c.id
                    AND o.created_at >= '2026-01-01'
 GROUP BY c.id, c.email
 ORDER BY orders DESC, c.id;

-- customers who have never ordered (anti-join)
SELECT c.id FROM customer c
  LEFT JOIN orders o ON o.customer_id = c.id
 WHERE o.id IS NULL;

-- every pair of products, excluding a row with itself
SELECT a.id AS left_id, b.id AS right_id
  FROM product a JOIN product b ON a.id < b.id;`,
      caption: { en: 'The date test sits inside ON so a January-less customer is still counted, with zero. Move it to WHERE and those rows disappear.', bn: 'তারিখের শর্ত ON-এর ভেতরে, তাই জানুয়ারিতে অর্ডার না-থাকা customer-ও শূন্য সহ গনা হয়। WHERE-য় সরালে সারিটাই উবে যাবে।' },
    },
    {
      type: 'table',
      head: [
        { en: 'join', bn: 'join' },
        { en: 'keeps', bn: 'কী থাকে' },
        { en: 'typical use', bn: 'কাজ' },
      ],
      rows: [
        [
          { en: 'INNER JOIN', bn: 'INNER JOIN' },
          { en: 'only matching pairs', bn: 'মেলে এমন জোড়া' },
          { en: 'the normal relationship walk', bn: 'স্বাভাবিক সম্পর্ক হাঁটা' },
        ],
        [
          { en: 'LEFT JOIN', bn: 'LEFT JOIN' },
          {
            en: 'all left rows, NULL for the right when nothing matches',
            bn: 'বাঁয়ের সব সারি, মিল না-থাকলে ডান দিক NULL',
          },
          { en: 'reports that must show zeros', bn: 'যে report-এ শূন্য দেখাতে হয়' },
        ],
        [
          { en: 'LEFT JOIN + IS NULL', bn: 'LEFT JOIN + IS NULL' },
          { en: 'left rows with no match', bn: 'মিল-না-থাকা বাঁয়ের সারি' },
          { en: 'anti-join: missing, unpaid, deleted', bn: 'anti-join: নেই, বাকি, মুছে-গেছে' },
        ],
        [
          { en: 'RIGHT JOIN', bn: 'RIGHT JOIN' },
          { en: 'mirror of LEFT', bn: 'LEFT-এর দর্পণছায়া' },
          { en: 'rewriting someone else’s query', bn: 'অন্যের query পাল্টে লেখা' },
        ],
        [
          { en: 'CROSS JOIN', bn: 'CROSS JOIN' },
          { en: 'the cartesian product', bn: 'কার্তেসীয় গুণফল' },
          { en: 'small dimensions, calendars', bn: 'ছোট dimension, ক্যালেন্ডার' },
        ],
        [
          { en: 'self join', bn: 'self join' },
          { en: 'a table against itself under two aliases', bn: 'দুই alias-এ নিজের বিরুদ্ধে একই table' },
          { en: 'hierarchies, pairs', bn: 'সোপান, জোড়া' },
        ],
      ],
      caption: { en: 'ON decides which pairs are allowed; WHERE decides which rows of the joined result survive.', bn: 'ON ঠিক করে কোন জোড়া চলবে; WHERE ঠিক করে join-এর ফলের কোন সারি টিকে।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'driving table',
          def: { en: 'The table MySQL reads first, ideally the small or well-filtered one, probing the other by index.', bn: 'যে table MySQL আগে পড়ে — আদর্শে ছোট বা ভালো-ছাঁকা — আর অন্যটিকে index দিয়ে হানা দেয়।' },
        },
        {
          term: 'equi join',
          def: { en: 'A join on equality; it is the only shape an index can answer with a seek.', bn: 'সমতার উপর join; খোঁজা দিয়ে উত্তর দেওয়া যায় এমন একমাত্র আকৃতি।' },
        },
        {
          term: 'USING (col)',
          def: { en: 'Shorthand when both sides name the column alike; it also merges that column in SELECT *.', bn: 'দুই পাশে column-এর নাম এক হলে ছোট লেখা; SELECT *-এ ঐ column মিশে যায়।' },
        },
        {
          term: 'hash join',
          def: { en: 'From 8.0.18 MySQL builds a hash table for an equi-join when no index serves, instead of the old nested loop with a buffer.', bn: '৮.০.১৮ থেকে index না-মিললে MySQL সমতার join-এর জন্য hash table বানায়, আগের buffer-সহ nested loop-এর বদলে।' },
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
          title: { en: '1. Ask what must survive', bn: '১. কী টিকবে জিজ্ঞেস করুন' },
          text: { en: 'Every customer, or only customers with orders? That single choice decides INNER versus LEFT.', bn: 'সব customer, না শুধু অর্ডার-থাকা customer? এই একটি সিদ্ধান্তই INNER বনাম LEFT ঠিক করে।' },
        },
        {
          title: { en: '2. Join on keys that are indexed', bn: '২. index-ওয়ালা key-তে juktirun' },
          text: { en: 'The child side of a foreign key is the usual join key, and it needs its own index.', bn: 'foreign key-এর child দিকটাই সাধারণত join key, আর তার নিজস্ব index দরকার।' },
        },
        {
          title: { en: '3. Put row filters in the right clause', bn: '৩. শর্ত ঠিক জায়গায় দিন' },
          text: { en: 'Conditions about the optional table go in ON; conditions about the required table go in WHERE.', bn: 'ঐচ্ছিক table-এর শর্ত ON-এ, আবশ্যক table-এর শর্ত WHERE-য়।' },
        },
        {
          title: { en: '4. Count pairs, not hopes', bn: '৪. জোড়া গনুন, ধারণা নয়' },
          text: { en: 'COUNT(o.id) counts matched rows; COUNT(*) counts the left row even when the right side is NULL.', bn: 'COUNT(o.id) মেলা সারি গনে; COUNT(*) ডান দিক NULL হলেও বাঁয়ের সারি গনে।' },
        },
      ],
    },
    { type: 'visual', id: 'database' },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Join cost is decided by the smaller side: read that one, probe the other by key. Every join lesson later in this hub is about making the probe cheap.', bn: 'join-এর খরচ ছোট দিক দিয়েই ঠিক হয়: সেটি পড়ুন, অন্যটিকে key দিয়ে খুঁজুন। এই হাবের বাকি সব পাঠ মূলত সেই খোঁজা সস্তা করার কথাই বলে।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'COUNT(*) on a LEFT JOIN', bn: 'LEFT JOIN-এ COUNT(*)' },
      text: { en: 'One customer with no orders still counts as one row, so the report says every customer bought at least once. COUNT(o.id) — a column that is NULL when nothing matched — is the honest count.', bn: 'একটিও অর্ডার না-থাকা customer-ও একটি সারি হিসেবে ধরা পড়ে, তাই report বলে সবারই কেনাকাটা হয়েছে। সঠিক গণনা COUNT(o.id) — মিল না-থাকলে যে column NULL হয়।' },
    },
  ],
  exercises: [
    {
      id: 'joining-tables-ex1',
      kind: 'mcq',
      topic: 'mysql: Joining Tables',
      question: { en: 'A report must list every product, with its number of reviews and zero where there are none. Which join?', bn: 'প্রতিটি product দেখাতে হবে, review-এর সংখ্যাসহ, না-থাকলে শূন্য। কোন join?' },
      options: [
        { en: 'INNER JOIN reviews', bn: 'INNER JOIN reviews' },
        { en: 'LEFT JOIN reviews', bn: 'LEFT JOIN reviews' },
        { en: 'RIGHT JOIN reviews', bn: 'RIGHT JOIN reviews' },
        { en: 'CROSS JOIN reviews', bn: 'CROSS JOIN reviews' },
      ],
      answer: 1,
      hint: { en: 'Which side must never be dropped?', bn: 'কোন দিক কখনো বাদ যাবে না?' },
      explanation: { en: 'LEFT keeps every row of the driving table and NULLs the missing matches, so COUNT(r.id) reports zero instead of hiding the product.', bn: 'LEFT চালক table-এর সব সারি রাখে, মিল না-থাকলে NULL বসায়; তাই COUNT(r.id) শূন্য দেখায়, product লুকোয় না।' },
    },
    {
      id: 'joining-tables-ex2',
      kind: 'predict',
      topic: 'mysql: Joining Tables',
      question: { en: 'customer has 3 rows, orders has 5, and one customer has no order. How many rows does the LEFT JOIN return?', bn: 'customer-এ ৩টি সারি, orders-এ ৫টি, এক customer-এর অর্ডার নেই। LEFT JOIN কয়টি সারি দেয়?' },
      code: `SELECT * FROM customer c
LEFT JOIN orders o ON o.customer_id = c.id;`,
      answer: '5',
      accept: [
        '5',
        'five',
        'পাঁচটি',
        'পাঁচ',
        '5 rows',
      ],
      hint: { en: 'Matched pairs plus the unmatched left row.', bn: 'মেলা জোড়া, সাথে অমেল বাঁয়ের সারিটা।' },
      explanation: { en: 'Five matched pairs (two customers with two orders each, one with one) plus the childless customer as a NULL-extended row: if the five orders all belong to two customers, the count is five plus one. The point is that unmatched left rows arrive, matched duplicates multiply.', bn: '৫টি মেলা জোড়া (২ জন customer-এর ২টি করে অর্ডার, ১ জনের ১টি ধরে) আর সন্তানহীন customer-এর NULL-সহ সারি: মোট গণনা হলো ৫ যোগ ১। না-মেলার ১টি করে আসে, মেলা জোড়া গুণ হয়।' },
    },
    {
      id: 'joining-tables-ex3',
      kind: 'mcq',
      topic: 'mysql: Joining Tables',
      question: { en: 'Where must a condition on the optional table live so a LEFT JOIN stays left?', bn: 'LEFT JOIN যেন LEFT-ই থাকে, তাই ঐচ্ছিক table-এর শর্ত কোথায় বসবে?' },
      options: [
        { en: 'In WHERE', bn: 'WHERE-য়' },
        { en: 'In ON', bn: 'ON-এ' },
        { en: 'In HAVING', bn: 'HAVING-এ' },
        { en: 'In the select list', bn: 'select তালিকায়' },
      ],
      answer: 1,
      hint: { en: 'Filter before the NULL row can be judged.', bn: 'NULL সারি বিচারের আগেই ছাঁকা।' },
      explanation: { en: 'ON decides which pairs join; WHERE runs afterwards, and NULL = anything is UNKNOWN, so the unmatched row is thrown away and the LEFT has quietly become an INNER.', bn: 'ON ঠিক করে কোন জোড়া যুক্ত হবে; WHERE পরে চলে, আর NULL = যেকোনো কিছু হলো UNKNOWN — ফলে অমেল সারি বাদ পড়ে, LEFT চুপচাপ INNER হয়ে যায়।' },
    },
  ],
  quiz: {
    id: 'joining-tables-quiz',
    title: { en: 'Quiz — Joining Tables', bn: 'কুইজ — টেবিল জোড়া দেয়া' },
    questions: [
      {
        id: 'joining-tables-q1',
        kind: 'mcq',
        topic: 'mysql: Joining Tables',
        question: { en: 'Which index makes the usual parent-to-child join a probe instead of a scan?', bn: 'parent থেকে child join-টি যাতে স্ক্যান না হয়ে খোঁজা হয়, কোন index তা করে?' },
        options: [
          { en: 'An index on the parent primary key', bn: 'parent-এর primary key-তে index' },
          { en: 'An index on the child foreign key column', bn: 'child-এর foreign key column-এ index' },
          { en: 'An index on any text column', bn: 'যেকোনো text column-এ index' },
          { en: 'None; joins never use indexes', bn: 'কোনোটাই নয়; join-এ index লাগে না' },
        ],
        answer: 1,
        hint: { en: 'The child side is the one looked up.', bn: 'যে দিকে খোঁজা হয়, সেটি child।' },
        explanation: { en: 'The parent key is already the clustered index; the child must be searchable by customer_id, which is exactly what a foreign key index gives you.', bn: 'parent-এর key আগেই clustered index; child-কে customer_id দিয়ে খোঁজা যাবে — সেটিই foreign key-এর index দেয়।' },
      },
      {
        id: 'joining-tables-q2',
        kind: 'mcq',
        topic: 'mysql: Joining Tables',
        question: { en: 'What does a CROSS JOIN of 1,000 rows by 1,000 rows produce?', bn: '১,০০০ x ১,০০০ সারির CROSS JOIN কী তৈরি করে?' },
        options: [
          { en: '1,000 rows', bn: '১,০০০ সারি' },
          { en: '2,000 rows', bn: '২,০০০ সারি' },
          { en: '1,000,000 rows', bn: '১,০০০,০০০ সারি' },
          { en: 'Nothing until a WHERE is added', bn: 'WHERE না-দেওয়া পর্যন্ত কিছু নয়' },
        ],
        answer: 2,
        hint: { en: 'It is a product, not a sum.', bn: 'এটি যোগ নয়, গুণ।' },
        explanation: { en: 'Every row pairs with every row: a million rows are built before any filter, which is why a cartesian product on big tables is an incident, not a query.', bn: 'প্রতিটি সারি অন্য সব সারির সাথে জোড়া বাঁধে: প্রথম ছাঁকানির আগেই দশ লক্ষ সারি গড়া হয়; তাই বড় table-এ কার্তেসিয় গুণফল query নয়, ঘটনা।' },
      },
      {
        id: 'joining-tables-q3',
        kind: 'mcq',
        topic: 'mysql: Joining Tables',
        question: { en: 'Why is NATURAL JOIN discouraged in production code?', bn: 'production code-এ NATURAL JOIN কেন পছন্দ নয়?' },
        options: [
          { en: 'It cannot use indexes', bn: 'এতে index লাগে না' },
          {
            en: 'It matches columns by name, so a schema change silently changes the join',
            bn: 'নাম মিলিয়ে column বাছে, তাই schema বদলালে join চুপচাপ বদলায়',
          },
          { en: 'It only works with one table', bn: 'একটি table-এই চলে' },
          { en: 'It is slower than a subquery by rule', bn: 'নিয়মমতো subquery-এর চেয়ে ধীর' },
        ],
        answer: 1,
        hint: { en: 'The join key is inferred, not written.', bn: 'key লেখা হয় না, অনুমান করা হয়।' },
        explanation: { en: 'Add or rename a same-named column and the query joins on something else, still returning a plausible result — the worst kind of failure.', bn: 'একই নামের column যোগ বা নাম বদলালে query অন্য কিছুতে join করে, তবু যৌক্তিক ফল দেয় — এটিই সবচেয়ে খারাপ ধরনের ব্যর্থতা।' },
      },
      {
        id: 'joining-tables-q4',
        kind: 'mcq',
        topic: 'mysql: Joining Tables',
        question: { en: 'MySQL reports “Unknown column o.total in on clause” after adding a filter. What is the likely cause?', bn: 'শর্ত যোগ করার পর MySQL বলে “Unknown column o.total in on clause” — সম্ভাব্য কারণ?' },
        options: [
          { en: 'ON cannot contain aggregate columns', bn: 'ON-এ aggregate column বসে না' },
          {
            en: 'The column belongs to the other table, or the alias is wrong',
            bn: 'columnটি অন্য table-এর, অথবা alias ভুল',
          },
          { en: 'Filters in ON must be numeric', bn: 'ON-এর শর্ত সংখ্যা হতে হয়' },
          { en: 'The optimizer rewrote the join', bn: 'optimizer join লিখে দিয়েছে' },
        ],
        answer: 1,
        hint: { en: 'Read the alias list.', bn: 'alias গুলো দেখুন।' },
        explanation: { en: 'In a join every column reference must be resolvable through an alias you declared; the message is the engine asking which table you meant.', bn: 'join-এ প্রতিটি column উল্লেখ ঘোষণা করা alias দিয়ে খুঁজে বের করতে হয়; বার্তাটি জিজ্ঞেস করছে কোন table বুঝিয়েছেন।' },
      },
    ],
  },
  nextLesson: {
    slug: 'subqueries-unions-and-ctes',
    tech: 'mysql',
    title: { en: 'Subqueries, UNION and CTEs', bn: 'subquery, UNION আর CTE' },
  },
};
