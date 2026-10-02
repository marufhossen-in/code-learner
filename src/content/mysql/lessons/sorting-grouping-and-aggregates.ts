import type { Lesson } from '../../../lib/types';

export const SortingGroupingAndAggregatesLesson: Lesson = {
  slug: 'sorting-grouping-and-aggregates',
  tech: 'mysql',
  title: { en: 'Sorting, Grouping, Aggregates', bn: 'sort, group আর aggregate' },
  summary: { en: 'ORDER BY costs a sort, GROUP BY costs a temporary area, and aggregates decide what you are allowed to mention. Learn the evaluation order that explains every error message you get here.', bn: 'ORDER BY-র খরচ sort, GROUP BY-র খরচ সাময়িক জায়গা, আর aggregate ঠিক করে আপনি কী উল্লেখ করতে পারেন। এই অংশের প্রতিটি error বার্তা কোন চলার ক্রম থেকে আসে, সেটাই এখানে শেখা।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Sorting, Grouping, Aggregates', bn: 'WHAT — sort, group আর aggregate' },
    },
    {
      type: 'para',
      text: { en: 'Rows come back in whatever order the engine reached them, and a report cannot be built on “whatever”. You want the expensive ones first, and you want one line per customer instead of ten thousand lines. Sorting, grouping and counting is the difference between a data dump and something a person can read.', bn: 'engine যে ক্রমে সারি পেয়েছে সে ক্রমেই ফেরত দেয়, আর “যেকোনো ক্রম” দিয়ে report সাজানো যায় না। আপনি চান দামিগুলো আগে, আর দশ হাজার সারির বদলে প্রতি customer-এর জন্য ১টি করে লাইন। সাজানো, দল বাঁধা আর গনা — এই বিষয়গুলোর ফারাকই একটা dump আর পড়া যায় এমন report-এর।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'MySQL 8 removed the implicit sort that GROUP BY used to perform; ordering is now only what ORDER BY says.',
          bn: 'MySQL ৮ GROUP BY-র পুরোনো আপনা-থেকে-সাজানো তুলে দিয়েছে; ক্রম এখন শুধু ORDER BY যা বলে সেটাই।',
        },
        {
          en: 'With ONLY_FULL_GROUP_BY on — the default — a SELECT may mention a grouped column or an aggregate, nothing else, because the other values in the group are not defined.',
          bn: 'ONLY_FULL_GROUP_BY চালু (ডিফল্ট) থাকা অবস্থায় SELECT-এ group করা column বা aggregate বৈধ, আর কিছু নয়; কারণ দলের বাকি মানের কোনো সংজ্ঞা নেই।',
        },
        {
          en: 'COUNT(*), COUNT(col) and COUNT(DISTINCT col) answer three different questions about NULL, and only the first two cost the same.',
          bn: 'COUNT(*), COUNT(col), COUNT(DISTINCT col) NULL নিয়ে তিন আলাদা প্রশ্নের জবাব দেয়; খরচে প্রথম ২টির খরচ সমান।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'report.sql',
      code: `SELECT customer_id,
       COUNT(*)            AS orders,
       SUM(total)          AS revenue,
       AVG(total)          AS average,
       MIN(created_at)     AS first_seen,
       GROUP_CONCAT(status ORDER BY created_at SEPARATOR ', ') AS statuses
  FROM orders
 WHERE created_at >= '2026-01-01'
 GROUP BY customer_id
HAVING SUM(total) > 1000
 ORDER BY revenue DESC
 LIMIT 10;`,
      caption: { en: 'Reading order: FROM, WHERE, GROUP BY, HAVING, projection, ORDER BY, LIMIT. WHERE sees rows; HAVING sees groups.', bn: 'পড়ার ক্রম: FROM, WHERE, GROUP BY, HAVING, projection, ORDER BY, LIMIT। WHERE সারি দেখে, HAVING দল দেখে।' },
    },
    {
      type: 'table',
      head: [
        { en: 'aggregate', bn: 'aggregate' },
        { en: 'ignores NULL?', bn: 'NULL বাদ দেয়?' },
        { en: 'on an empty group', bn: 'খালি দলে' },
      ],
      rows: [
        [
          { en: 'COUNT(*)', bn: 'COUNT(*)' },
          { en: 'no row is skipped', bn: 'কোনও সারি বাদ যায় না' },
          { en: '0', bn: '০' },
        ],
        [
          { en: 'COUNT(col)', bn: 'COUNT(col)' },
          { en: 'rows with NULL are skipped', bn: 'NULL থাকা সারি বাদ' },
          { en: '0', bn: '০' },
        ],
        [
          { en: 'SUM(col)', bn: 'SUM(col)' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'NULL', bn: 'NULL' },
        ],
        [
          { en: 'AVG(col)', bn: 'AVG(col)' },
          { en: 'yes; NULLs are not in the divisor', bn: 'হ্যাঁ; NULL হরকে ঢোকে না' },
          { en: 'NULL', bn: 'NULL' },
        ],
        [
          { en: 'MAX / MIN', bn: 'MAX / MIN' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'NULL', bn: 'NULL' },
        ],
        [
          { en: 'GROUP_CONCAT', bn: 'GROUP_CONCAT' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'NULL', bn: 'NULL' },
        ],
      ],
      caption: { en: 'SUM of nothing is NULL, not zero: wrap it in COALESCE(SUM(total), 0) when a report needs a number.', bn: 'কিছু না-থাকলে SUM-এর মান NULL, শূন্য নয়: report-এ সংখ্যা চাইলে COALESCE(SUM(total), 0) লিখুন।' },
    },
    {
      type: 'compare',
      title: { en: 'Two reports that look alike', bn: 'দুই রিপোর্ট, দেখতে একই রকম' },
      left: {
        title: { en: 'Fails on 8.0', bn: '৮.০-তে ব্যর্থ' },
        points: [
          {
            en: 'SELECT customer_id, id, SUM(total) ... GROUP BY customer_id — id is not grouped.',
            bn: 'SELECT customer_id, id, SUM(total) ... GROUP BY customer_id — id group করা নয়।',
          },
          {
            en: 'Error 1055: not in GROUP BY clause and contains nonaggregated column.',
            bn: 'Error 1055: GROUP BY-তে নেই, আবার non-aggregated column।',
          },
          {
            en: 'Turning ONLY_FULL_GROUP_BY off “fixes” it by returning an arbitrary row.',
            bn: 'ONLY_FULL_GROUP_BY নিভিয়ে দিলে “ঠিক” হয় — যে কোনো এক সারি ফেরত দিয়ে।',
          },
        ],
      },
      right: {
        title: { en: 'Says it properly', bn: 'ঠিকভাবে বলে' },
        points: [
          {
            en: 'SELECT customer_id, MAX(id) AS latest, SUM(total) ... GROUP BY customer_id.',
            bn: 'SELECT customer_id, MAX(id) AS latest, SUM(total) ... GROUP BY customer_id।',
          },
          { en: 'Or group by both and let the pair be the key.', bn: 'অথবা দুটিতেই group করুন, জোড়াটাই key হোক।' },
          {
            en: 'Or join a derived table that already picked the row you want.',
            bn: 'অথবা এমন derived table-এর সাথে join করুন যেটি পছন্দের সারি আগেই বেছে নিয়েছে।',
          },
        ],
      },
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
          title: { en: '1. Cut the rows before grouping', bn: '১. group করার আগে সারি ছাঁটুন' },
          text: { en: 'Anything decidable per row goes in WHERE, so fewer rows reach the temporary area.', bn: 'যা সারি-প্রতি ঠিক করা যায় তা WHERE-য় যাক, তাহলে সাময়িক জায়গায় কম সারি ঢোকে।' },
        },
        {
          title: { en: '2. Group by the key of the answer', bn: '২. উত্তরের key দিয়ে group করুন' },
          text: { en: 'One column when the report is per customer; an expression or alias is allowed, and every other mentioned column needs an aggregate.', bn: 'প্রতি customer-এর রিপোর্টে একটি column; expression বা alias চলবে; বাকি উল্লেখ করা column-এ aggregate লাগবে।' },
        },
        {
          title: { en: '3. Filter groups in HAVING', bn: '৩. দল HAVING-এ ছাঁটুন' },
          text: { en: 'HAVING SUM(total) > 1000 runs after aggregation and may repeat the aggregate expression.', bn: 'HAVING SUM(total) > 1000 aggregate-এর পর চলে, আর aggregate expression বার করতে পারে।' },
        },
        {
          title: { en: '4. Sort last, and only what you need', bn: '৪. শেষে সাজান, প্রয়োজনটুকু' },
          text: { en: 'ORDER BY revenue DESC LIMIT 10 lets MySQL keep a top-10 heap instead of sorting everything.', bn: 'ORDER BY revenue DESC LIMIT 10 দিলে MySQL সব সাজানোর বদলে top-10 heap রাখে।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Sorting, Grouping, Aggregates: the moving parts', bn: 'sort, group আর aggregate: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Sorting, Grouping, Aggregates">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Cut the rows before grouping</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">Anything decidable per row goes in WHERE, so</text>
<text x="352" y="79" font-size="11" fill="currentColor">fewer rows reach the temporary area.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Group by the key of the answer</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">One column when the report is per customer; an</text>
<text x="352" y="151" font-size="11" fill="currentColor">expression or alias is allowed, and every oth…</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Filter groups in HAVING</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">HAVING SUM(total) &gt; 1000 runs after</text>
<text x="352" y="223" font-size="11" fill="currentColor">aggregation and may repeat the aggregate expr…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Sort last, and only what you need</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">ORDER BY revenue DESC LIMIT 10 lets MySQL keep</text>
<text x="352" y="295" font-size="11" fill="currentColor">a top-10 heap instead of sorting everything.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">GROUP BY and ORDER BY on the same indexed column, in the same direction, is the single cheapest…</text>
</svg>`,
      caption: { en: 'GROUP BY and ORDER BY on the same indexed column, in the same direction, is the single cheapest thing you can do to a grouped report: the index hands over sorted rows for free.', bn: 'একই index-ওয়ালা column-এ GROUP BY আর ORDER BY একই দিকে রাখাটাই grouped report-এর সবচেয়ে সস্তা কাজ: index সাজানো সারি বিনা খরচে এগিয়ে দেয়।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'GROUP BY and ORDER BY on the same indexed column, in the same direction, is the single cheapest thing you can do to a grouped report: the index hands over sorted rows for free.', bn: 'একই index-ওয়ালা column-এ GROUP BY আর ORDER BY একই দিকে রাখাটাই grouped report-এর সবচেয়ে সস্তা কাজ: index সাজানো সারি বিনা খরচে এগিয়ে দেয়।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Sorting a number as text', bn: 'সংখ্যাকে লেখা ভেবে সাজানো' },
      text: { en: 'A numeric-looking VARCHAR column sorts 100 before 20, and CAST(col AS UNSIGNED) in ORDER BY forces a filesort over the whole table.', bn: 'সংখ্যার মতো দেখা column-এ VARCHAR থাকলে ১০০, ২০ এর আগে আসে; ORDER BY-তে CAST(col AS UNSIGNED) লিখলে পুরো table-এর filesort হয়।' },
    },
  ],
  exercises: [
    {
      id: 'sorting-grouping-and-aggregates-ex1',
      kind: 'mcq',
      topic: 'mysql: Sorting, Grouping, Aggregates',
      question: { en: 'Which clause can see aggregate results?', bn: 'কোন অংশটি aggregate-এর ফল দেখতে পায়?' },
      options: [
        { en: 'WHERE', bn: 'WHERE' },
        { en: 'HAVING', bn: 'HAVING' },
        { en: 'FROM', bn: 'FROM' },
        { en: 'JOIN ... ON', bn: 'JOIN ... ON' },
      ],
      answer: 1,
      hint: { en: 'It runs after grouping.', bn: 'এটি group হওয়ার পর চলে।' },
      explanation: { en: 'HAVING evaluates the grouped rows, so aggregates are known; WHERE is applied while scanning and may contain no aggregate.', bn: 'HAVING দল বাঁধার পর.grouped সারিতে চলে, তাই aggregate জানা; WHERE স্ক্যানের সময়ে চলে, সেটি aggregate ধরে না।' },
    },
    {
      id: 'sorting-grouping-and-aggregates-ex2',
      kind: 'predict',
      topic: 'mysql: Sorting, Grouping, Aggregates',
      question: { en: 'Values: 4, NULL, 8. What does SELECT COUNT(stock), SUM(stock) FROM t return?', bn: 'মান: ৪, NULL, ৮। SELECT COUNT(stock), SUM(stock) FROM t কী দেয়?' },
      code: `INSERT INTO t (stock) VALUES (4), (NULL), (8);`,
      answer: '2, 12',
      accept: [
        '2, 12',
        '2 and 12',
        'COUNT=2, SUM=12',
        '২, ১২',
        '2,12',
      ],
      hint: { en: 'COUNT(column) does not count NULL.', bn: 'COUNT(column) NULL গনে না।' },
      explanation: { en: 'COUNT(stock) sees two values, SUM(stock) adds 4 and 8 to 12; COUNT(*) would have said 3 rows.', bn: 'COUNT(stock) ২টি মান দেখে, SUM(stock) ৪ আর ৮ যোগ করে ১২ বানায়; COUNT(*) বলত ৩টি সারি।' },
    },
    {
      id: 'sorting-grouping-and-aggregates-ex3',
      kind: 'mcq',
      topic: 'mysql: Sorting, Grouping, Aggregates',
      question: { en: 'The report needs the number of distinct products per customer. Which is right and cheapest to read?', bn: 'প্রতি customer-এ কয়টি আলাদা product তা চাই। কোনটি ঠিক আর পড়তে সোজা?' },
      options: [
        { en: 'COUNT(DISTINCT product_id)', bn: 'COUNT(DISTINCT product_id)' },
        { en: 'COUNT(product_id) / COUNT(*)', bn: 'COUNT(product_id) / COUNT(*)' },
        { en: 'GROUP_CONCAT(product_id), counted by hand', bn: 'GROUP_CONCAT(product_id), হাতে গনে' },
        { en: 'SUM(DISTINCT product_id)', bn: 'SUM(DISTINCT product_id)' },
      ],
      answer: 0,
      hint: { en: 'There is an aggregate that deduplicates.', bn: 'যে aggregate দ্বৈত সরে, সেটিই।' },
      explanation: { en: 'COUNT(DISTINCT ...) is exact and single-pass per group; the ratio is nonsense, SUM(DISTINCT) sums the ids, and parsing a concatenated string moves work to the client.', bn: 'COUNT(DISTINCT ...) দল-প্রতি নির্ভুল এক পাসে হয়; ভগ্নাংশের অর্থ নেই, SUM(DISTINCT) id যোগ করে, আর জোড়া-লেখা ভেঙে গণনা কাজটা client-এ সরিয়ে দেয়।' },
    },
  ],
  quiz: {
    id: 'sorting-grouping-and-aggregates-quiz',
    title: { en: 'Quiz — Sorting, Grouping, Aggregates', bn: 'কুইজ — sort, group আর aggregate' },
    questions: [
      {
        id: 'sorting-grouping-and-aggregates-q1',
        kind: 'mcq',
        topic: 'mysql: Sorting, Grouping, Aggregates',
        question: { en: 'In MySQL 8, does GROUP BY sort the result?', bn: 'MySQL ৮ এ GROUP BY ফল সাজিয়ে দেয়?' },
        options: [
          { en: 'Yes, always ascending', bn: 'হ্যাঁ, সবসময় ঊর্ধ্বক্রমে' },
          { en: 'No; write ORDER BY', bn: 'না; ORDER BY লিখুন' },
          { en: 'Only for one column', bn: 'একটি column হলে' },
          { en: 'Only with filesort disabled', bn: 'filesort নিভিয়ে দিলে' },
        ],
        answer: 1,
        hint: { en: 'The 8.0 release notes call this out.', bn: '৮.০-এর release note-এ এই কথাই আছে।' },
        explanation: { en: 'GROUP BY ... ASC/DESC was removed: an ordered result now requires ORDER BY, and relying on the old behaviour produced reports that changed when the plan did.', bn: 'GROUP BY ... ASC/DESC তুলে নেওয়া হয়েছে: ক্রম চাইলে ORDER BY লিখতেই হবে; আগের আচরণের ভরসায় রিপোর্ট plan বদলালে বদলে যেত।' },
      },
      {
        id: 'sorting-grouping-and-aggregates-q2',
        kind: 'mcq',
        topic: 'mysql: Sorting, Grouping, Aggregates',
        question: { en: 'Which query shape makes a grouped, sorted top-N cheap?', bn: 'group করা, সাজানো top-N কোন আকৃতির query-তে সস্তা পড়ে?' },
        options: [
          {
            en: 'GROUP BY a, b ORDER BY a, b DESC with an index on (a, b)',
            bn: 'GROUP BY a, b ORDER BY a, b DESC, (a, b)-তে index',
          },
          {
            en: 'GROUP BY a ORDER BY a DESC LIMIT 10 with an index on (a, b) and the aggregate covered',
            bn: 'GROUP BY a ORDER BY a DESC LIMIT 10, (a, b)-তে index, aggregate covered',
          },
          { en: 'ORDER BY first, GROUP BY after, in a subquery', bn: 'আগে ORDER BY, পরে GROUP BY, subquery-এর ভেতরে' },
          { en: 'A temp table then a sort', bn: 'আগে temp table, তারপর sort' },
        ],
        answer: 1,
        hint: { en: 'Loose index scan and a bounded heap both like a leading group column.', bn: 'শুরুতে group-এর column থাকলে loose index scan আর সীমিত heap দুটোই খুশি।' },
        explanation: { en: 'With the group column leading the index, MySQL walks the index in order, groups on the fly, and keeps only ten rows; a covering index means no row lookups at all.', bn: 'group-এর column index-এর শুরুতে থাকলে MySQL index ক্রমে হাঁটে, পথেই group করে, আর দশটি সারি রাখে; covering index হলে সারি পড়তেই হয় না।' },
      },
      {
        id: 'sorting-grouping-and-aggregates-q3',
        kind: 'mcq',
        topic: 'mysql: Sorting, Grouping, Aggregates',
        question: { en: 'What does ONLY_FULL_GROUP_BY enforce?', bn: 'ONLY_FULL_GROUP_BY আসলে কী চালু করে?' },
        options: [
          { en: 'GROUP BY may list only one column', bn: 'GROUP BY-তে একটিই column' },
          {
            en: 'Every selected column is either grouped or aggregated',
            bn: 'SELECT-এর প্রতিটি column হয় group করা, নয় aggregate-এ',
          },
          { en: 'HAVING may not use aggregates', bn: 'HAVING aggregate ব্যবহার করতে পারে না' },
          { en: 'Only InnoDB tables may be grouped', bn: 'শুধু InnoDB table group করা যায়' },
        ],
        answer: 1,
        hint: { en: 'It is about meaning, not performance.', bn: 'বিষয় গতি নয়, অর্থ।' },
        explanation: { en: 'An ungrouped, unaggregated column has no single value inside a group; the mode refuses the ambiguity instead of returning whichever row was read first.', bn: 'group-এর ভেতরে group-না-করা, aggregate-না-লেগা column-এর কোনো একটাই মান নেই; mode সেই অস্পষ্টতাই অস্বীকার করে, যে সারি আগে পড়া হলো তা ফেরত দেয় না।' },
      },
      {
        id: 'sorting-grouping-and-aggregates-q4',
        kind: 'mcq',
        topic: 'mysql: Sorting, Grouping, Aggregates',
        question: { en: 'A report needs one row per customer with the latest order id. What is the clean 8.0 way?', bn: 'প্রতি customer-এর একটি সারি, সর্বশেষ order id সহ। ৮.০-তে পরিষ্কার উপায়?' },
        options: [
          { en: 'MAX(id) with GROUP BY', bn: 'GROUP BY সহ MAX(id)' },
          {
            en: 'ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY id DESC), then filter to 1',
            bn: 'ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY id DESC), তারপর ১ রাখুন',
          },
          { en: 'A correlated subquery in the select list', bn: 'select তালিকায় correlated subquery' },
          { en: 'ORDER BY id DESC and rely on the first row seen', bn: 'ORDER BY id DESC, প্রথম দেখা সারির ভরসায়' },
        ],
        answer: 1,
        hint: { en: 'Both A and B work; one names “the row”.', bn: 'A ও B দুটোই চলে; একটি সারিটাই নির্দেশ করে।' },
        explanation: { en: 'ROW_NUMBER names exactly one row per group and can carry every other column with it; MAX(id) gives the id alone, and the trick of reading the first sorted row is undefined.', bn: 'ROW_NUMBER দল-প্রতি ঠিক একটি সারি নাম দেয়, সাথে বাকি columnও নিয়ে যায়; MAX(id) শুধু id দেয়, আর সাজানো result-এর প্রথম সারি পড়া অসংজ্ঞায়িত কৌশল।' },
      },
    ],
  },
  nextLesson: { slug: 'joining-tables', tech: 'mysql', title: { en: 'Joining Tables', bn: 'টেবিল জোড়া দেয়া' } },
};
